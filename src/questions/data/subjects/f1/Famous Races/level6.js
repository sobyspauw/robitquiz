const level6 = (function() {
  const questions = [
    {
      question: {
        en: "At which 1954 race did Mercedes-Benz make their triumphant return to F1 after WWII?",
        es: "¿En qué carrera de 1954 Mercedes-Benz hizo su regreso triunfal a F1 después de la Segunda Guerra Mundial?",
        de: "Bei welchem Rennen 1954 kehrte Mercedes-Benz triumphierend zur F1 nach dem Zweiten Weltkrieg zurück?",
        nl: "Bij welke race van 1954 maakte Mercedes-Benz hun triomfantelijke terugkeer naar F1 na WOII?"
      },
      options: [
        "German Grand Prix",
        "French Grand Prix",
        "Italian Grand Prix",
        "British Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Mercedes returned at the 1954 French GP with the revolutionary W196, immediately winning with Fangio in their first race back since 1939.",
        es: "Mercedes regresó en el GP de Francia de 1954 con el revolucionario W196, ganando inmediatamente con Fangio en su primera carrera desde 1939.",
        de: "Mercedes kehrte beim Frankreich GP 1954 mit dem revolutionären W196 zurück und gewann sofort mit Fangio in ihrem ersten Rennen seit 1939.",
        nl: "Mercedes keerde terug bij de Franse GP van 1954 met de revolutionaire W196, won meteen met Fangio in hun eerste race sinds 1939."
      }
    },
    {
      question: {
        en: "Which 1962 race saw Stirling Moss's career-ending crash?",
        es: "¿En qué carrera de 1962 tuvo Stirling Moss el accidente que terminó su carrera?",
        de: "Bei welchem Rennen 1962 hatte Stirling Moss seinen karrierebeendenden Unfall?",
        nl: "Bij welke race van 1962 had Stirling Moss zijn carrière-beëindigende crash?"
      },
      options: [
        "Monaco Grand Prix",
        "Glover Trophy (non-championship)",
        "British Grand Prix",
        "German Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Stirling Moss crashed heavily at Goodwood during the 1962 Glover Trophy, suffering severe head injuries that forced his retirement at age 32.",
        es: "Stirling Moss se estrelló gravemente en Goodwood durante el Trofeo Glover de 1962, sufriendo lesiones graves en la cabeza que forzaron su retiro a los 32 años.",
        de: "Stirling Moss verunglückte schwer in Goodwood während der Glover Trophy 1962, erlitt schwere Kopfverletzungen die seinen Rücktritt mit 32 Jahren erzwangen.",
        nl: "Stirling Moss crashte zwaar in Goodwood tijdens de Glover Trophy 1962, leed ernstig hoofdletsel wat zijn pensioen op 32-jarige leeftijd afdwong."
      }
    },
    {
      question: {
        en: "At which 1983 race did Keke Rosberg set the fastest average speed record that stood for years?",
        es: "¿En qué carrera de 1983 estableció Keke Rosberg el récord de velocidad promedio más rápida que se mantuvo durante años?",
        de: "Bei welchem Rennen 1983 stellte Keke Rosberg den Rekord für höchste Durchschnittsgeschwindigkeit auf der jahrelang bestand?",
        nl: "Bij welke race van 1983 vestigde Keke Rosberg het snelste gemiddelde snelheidsrecord dat jaren standhield?"
      },
      options: [
        "Italian Grand Prix",
        "Belgian Grand Prix",
        "British Grand Prix",
        "Austrian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Keke Rosberg's pole lap at the 1985 British GP at Silverstone averaged 160.938 mph (259.005 km/h), the fastest qualifying lap until 2002.",
        es: "La vuelta de pole de Keke Rosberg en el GP Británico de 1985 en Silverstone promedió 160.938 mph (259.005 km/h), la vuelta de clasificación más rápida hasta 2002.",
        de: "Keke Rosbergs Pole-Runde beim Britischen GP 1985 in Silverstone erreichte durchschnittlich 160,938 mph (259,005 km/h), schnellste Qualifying-Runde bis 2002.",
        nl: "Keke Rosberg's pole ronde bij de Britse GP van 1985 op Silverstone had een gemiddelde van 160.938 mph (259.005 km/h), snelste kwalificatie ronde tot 2002."
      }
    },
    {
      question: {
        en: "Which 1956 race featured the first championship-deciding finish between teammates?",
        es: "¿Qué carrera de 1956 presentó el primer final decisivo del campeonato entre compañeros de equipo?",
        de: "Welches Rennen 1956 hatte das erste meisterschaftsentscheidende Finish zwischen Teamkollegen?",
        nl: "Welke race van 1956 had de eerste kampioenschap-beslissende finish tussen teamgenoten?"
      },
      options: [
        "Italian Grand Prix",
        "Monaco Grand Prix",
        "French Grand Prix",
        "British Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "At the 1956 Italian GP, Ferrari teammates Fangio and Collins battled for the title. Collins gave his car to Fangio mid-race, helping him win the championship.",
        es: "En el GP de Italia de 1956, los compañeros de Ferrari Fangio y Collins lucharon por el título. Collins dio su coche a Fangio a mitad de carrera, ayudándolo a ganar el campeonato.",
        de: "Beim Italien GP 1956 kämpften Ferrari-Teamkollegen Fangio und Collins um den Titel. Collins gab Fangio sein Auto mitten im Rennen und half ihm die Meisterschaft zu gewinnen.",
        nl: "Bij de Italiaanse GP van 1956 streden Ferrari-teamgenoten Fangio en Collins om de titel. Collins gaf zijn auto aan Fangio mid-race, hielp hem het kampioenschap te winnen."
      }
    },
    {
      question: {
        en: "What made the 1977 South African Grand Prix particularly memorable?",
        es: "¿Qué hizo particularmente memorable el Gran Premio de Sudáfrica de 1977?",
        de: "Was machte den Südafrika GP 1977 besonders unvergesslich?",
        nl: "Wat maakte de Zuid-Afrikaanse Grand Prix van 1977 bijzonder gedenkwaardig?"
      },
      options: [
        "First race in Africa",
        "Lauda vs Hunt final battle",
        "First victory for Wolf Racing",
        "Tom Pryce's fatal accident"
      ],
      correct: 3,
      explanation: {
        en: "Tom Pryce was killed at the 1977 South African GP when he hit a marshal crossing the track at high speed, one of F1's most tragic accidents.",
        es: "Tom Pryce murió en el GP de Sudáfrica de 1977 cuando golpeó a un comisario que cruzaba la pista a alta velocidad, uno de los accidentes más trágicos de F1.",
        de: "Tom Pryce starb beim Südafrika GP 1977 als er einen Streckenposten traf der bei hoher Geschwindigkeit die Strecke überquerte, einer der tragischsten Unfälle der F1.",
        nl: "Tom Pryce werd gedood bij de Zuid-Afrikaanse GP van 1977 toen hij een marshal raakte die de baan overstak op hoge snelheid, een van F1's meest tragische ongevallen."
      }
    },
    {
      question: {
        en: "Which 2008 race did Lewis Hamilton win from last position to keep his title hopes alive?",
        es: "¿Qué carrera de 2008 ganó Lewis Hamilton desde la última posición para mantener vivas sus esperanzas de título?",
        de: "Welches Rennen 2008 gewann Lewis Hamilton von der letzten Position um seine Titelchancen am Leben zu erhalten?",
        nl: "Welke race van 2008 won Lewis Hamilton vanaf de laatste positie om zijn titelkansen levend te houden?"
      },
      options: [
        "British Grand Prix",
        "German Grand Prix",
        "Belgian Grand Prix",
        "Chinese Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Lewis Hamilton won the 2008 British GP in torrential rain after starting from 4th on the grid, lapping everyone up to 4th place in dominant fashion.",
        es: "Lewis Hamilton ganó el GP Británico de 2008 bajo lluvia torrencial después de salir 4º en la parrilla, doblando a todos hasta el 4º lugar de forma dominante.",
        de: "Lewis Hamilton gewann den Britischen GP 2008 bei strömenden Regen nach Start von Platz 4, überrundete alle bis Platz 4 in dominanter Weise.",
        nl: "Lewis Hamilton won de Britse GP van 2008 in zware regen na start vanaf plek 4 op de grid, rondte iedereen tot de 4e plaats in dominante stijl."
      }
    },
    {
      question: {
        en: "At which 1960 race did Innes Ireland score his only F1 victory?",
        es: "¿En qué carrera de 1960 logró Innes Ireland su única victoria en F1?",
        de: "Bei welchem Rennen 1960 erzielte Innes Ireland seinen einzigen F1-Sieg?",
        nl: "Bij welke race van 1960 behaalde Innes Ireland zijn enige F1-overwinning?"
      },
      options: [
        "Monaco Grand Prix",
        "United States Grand Prix",
        "British Grand Prix",
        "Portuguese Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Innes Ireland won the 1961 United States GP at Watkins Glen for Lotus, his only F1 victory in 50 race starts.",
        es: "Innes Ireland ganó el GP de Estados Unidos de 1961 en Watkins Glen para Lotus, su única victoria en F1 en 50 salidas.",
        de: "Innes Ireland gewann den USA GP 1961 in Watkins Glen für Lotus, sein einziger F1-Sieg in 50 Rennstarts.",
        nl: "Innes Ireland won de US GP van 1961 op Watkins Glen voor Lotus, zijn enige F1-overwinning in 50 race starts."
      }
    },
    {
      question: {
        en: "Which 1989 race saw the infamous Prost-Senna collision that decided the championship?",
        es: "¿Qué carrera de 1989 vio la infame colisión Prost-Senna que decidió el campeonato?",
        de: "Welches Rennen 1989 sah die berüchtigte Prost-Senna-Kollision die die Meisterschaft entschied?",
        nl: "Welke race van 1989 zag de beruchte Prost-Senna botsing die het kampioenschap besliste?"
      },
      options: [
        "Brazilian Grand Prix",
        "Monaco Grand Prix",
        "Japanese Grand Prix",
        "Australian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "At the 1989 Japanese GP, Prost and Senna collided at the chicane. Senna rejoined and won but was disqualified, giving Prost the title.",
        es: "En el GP de Japón de 1989, Prost y Senna chocaron en la chicane. Senna se reincorporó y ganó pero fue descalificado, dando el título a Prost.",
        de: "Beim Japan GP 1989 kollidierten Prost und Senna in der Schikane. Senna fuhr weiter und gewann wurde aber disqualifiziert, Prost bekam den Titel.",
        nl: "Bij de Japanse GP van 1989 botsten Prost en Senna in de chicane. Senna vervolgde en won maar werd gediskwalificeerd, Prost kreeg de titel."
      }
    },
    {
      question: {
        en: "What was unique about the 1952 and 1953 F1 World Championships?",
        es: "¿Qué fue único sobre los Campeonatos Mundiales de F1 de 1952 y 1953?",
        de: "Was war einzigartig an den F1-Weltmeisterschaften 1952 und 1953?",
        nl: "Wat was uniek aan de F1 Wereldkampioenschappen van 1952 en 1953?"
      },
      options: [
        "Held entirely in Europe",
        "Run to Formula Two regulations",
        "No championship awarded",
        "Only three races per season"
      ],
      correct: 1,
      explanation: {
        en: "The 1952 and 1953 F1 championships were run to Formula Two regulations due to a lack of Formula One entries, with smaller 2-liter engines.",
        es: "Los campeonatos de F1 de 1952 y 1953 se corrieron bajo regulaciones de Fórmula Dos debido a la falta de inscripciones de Fórmula Uno, con motores más pequeños de 2 litros.",
        de: "Die F1-Meisterschaften 1952 und 1953 wurden nach Formel-Zwei-Regeln gefahren aufgrund mangelnder Formel-Eins-Teilnehmer, mit kleineren 2-Liter-Motoren.",
        nl: "De F1-kampioenschappen van 1952 en 1953 werden gereden volgens Formule Twee regels vanwege een gebrek aan Formule Een deelnemers, met kleinere 2-liter motoren."
      }
    },
    {
      question: {
        en: "At which 2003 race did Kimi Räikkönen finish 2nd to clinch McLaren's last podium of the season?",
        es: "¿En qué carrera de 2003 Kimi Räikkönen terminó 2º para asegurar el último podio de McLaren de la temporada?",
        de: "Bei welchem Rennen 2003 wurde Kimi Räikkönen Zweiter um McLarens letztes Podium der Saison zu sichern?",
        nl: "Bij welke race van 2003 eindigde Kimi Räikkönen als 2e om McLaren's laatste podium van het seizoen veilig te stellen?"
      },
      options: [
        "United States Grand Prix",
        "Italian Grand Prix",
        "Japanese Grand Prix",
        "Brazilian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Kimi Räikkönen finished 2nd at the 2003 Japanese GP, losing the championship to Schumacher by just 2 points in the closest finish since 1984.",
        es: "Kimi Räikkönen terminó 2º en el GP de Japón de 2003, perdiendo el campeonato ante Schumacher por solo 2 puntos en el final más cerrado desde 1984.",
        de: "Kimi Räikkönen wurde beim Japan GP 2003 Zweiter und verlor die Meisterschaft an Schumacher mit nur 2 Punkten im knappsten Finish seit 1984.",
        nl: "Kimi Räikkönen eindigde als 2e in de Japanse GP van 2003, verloor het kampioenschap aan Schumacher met slechts 2 punten in de nauwste finish sinds 1984."
      }
    },
    {
      question: {
        en: "Which 1968 race saw Jackie Oliver's violent crash that destroyed his Lotus?",
        es: "¿Qué carrera de 1968 vio el violento accidente de Jackie Oliver que destruyó su Lotus?",
        de: "Welches Rennen 1968 sah Jackie Olivers gewalttätigen Unfall der seinen Lotus zerstörte?",
        nl: "Welke race van 1968 zag Jackie Oliver's gewelddadige crash die zijn Lotus vernietigde?"
      },
      options: [
        "German Grand Prix",
        "Belgian Grand Prix",
        "Monaco Grand Prix",
        "British Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Jackie Oliver's Lotus broke up at high speed at the 1968 German GP at the Nürburgring, miraculously he survived with only minor injuries.",
        es: "El Lotus de Jackie Oliver se rompió a alta velocidad en el GP de Alemania de 1968 en el Nürburgring, milagrosamente sobrevivió con solo lesiones menores.",
        de: "Jackie Olivers Lotus zerbrach bei hoher Geschwindigkeit beim Deutschland GP 1968 am Nürburgring, er überlebte wundersamerweise nur mit leichten Verletzungen.",
        nl: "Jackie Oliver's Lotus viel uit elkaar op hoge snelheid bij de Duitse GP van 1968 op de Nürburgring, wonderbaarlijk overleefde hij met slechts lichte verwondingen."
      }
    },
    {
      question: {
        en: "At which 2017 race did Valtteri Bottas score his first F1 victory?",
        es: "¿En qué carrera de 2017 logró Valtteri Bottas su primera victoria en F1?",
        de: "Bei welchem Rennen 2017 erzielte Valtteri Bottas seinen ersten F1-Sieg?",
        nl: "Bij welke race van 2017 behaalde Valtteri Bottas zijn eerste F1-overwinning?"
      },
      options: [
        "Australian Grand Prix",
        "Russian Grand Prix",
        "Chinese Grand Prix",
        "Bahrain Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Valtteri Bottas won the 2017 Russian GP for Mercedes in his fourth race with the team, his first F1 victory after 81 race starts.",
        es: "Valtteri Bottas ganó el GP de Rusia de 2017 para Mercedes en su cuarta carrera con el equipo, su primera victoria en F1 después de 81 salidas.",
        de: "Valtteri Bottas gewann den Russland GP 2017 für Mercedes in seinem vierten Rennen mit dem Team, sein erster F1-Sieg nach 81 Rennstarts.",
        nl: "Valtteri Bottas won de Russische GP van 2017 voor Mercedes in zijn vierde race met het team, zijn eerste F1-overwinning na 81 race starts."
      }
    },
    {
      question: {
        en: "Which 1971 race featured the famous multi-car slipstreaming battle at Monza?",
        es: "¿Qué carrera de 1971 presentó la famosa batalla de rebufo con múltiples coches en Monza?",
        de: "Welches Rennen 1971 hatte die berühmte Mehrauto-Windschatten-Schlacht in Monza?",
        nl: "Welke race van 1971 had de beroemde multi-auto slipstream strijd in Monza?"
      },
      options: [
        "Belgian Grand Prix",
        "Italian Grand Prix",
        "French Grand Prix",
        "German Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The 1971 Italian GP saw five cars slipstreaming each other for the entire race, with the top 5 separated by just 0.61 seconds at the finish.",
        es: "El GP de Italia de 1971 vio cinco coches en rebufo durante toda la carrera, con los 5 primeros separados por solo 0.61 segundos en la meta.",
        de: "Der Italien GP 1971 sah fünf Autos die sich das gesamte Rennen im Windschatten fuhren, die Top 5 waren nur durch 0,61 Sekunden getrennt im Ziel.",
        nl: "De Italiaanse GP van 1971 zag vijf auto's elkaar slipstreamen gedurende de hele race, met de top 5 gescheiden door slechts 0,61 seconden bij de finish."
      }
    },
    {
      question: {
        en: "What made the 1978 Italian Grand Prix particularly significant for Lotus?",
        es: "¿Qué hizo particularmente significativo el Gran Premio de Italia de 1978 para Lotus?",
        de: "Was machte den Italien GP 1978 besonders bedeutsam für Lotus?",
        nl: "Wat maakte de Italiaanse Grand Prix van 1978 bijzonder belangrijk voor Lotus?"
      },
      options: [
        "First use of ground effect",
        "Andretti clinched championship",
        "Peterson's fatal crash",
        "Introduction of carbon fiber"
      ],
      correct: 2,
      explanation: {
        en: "Ronnie Peterson was fatally injured in a first-lap crash at the 1978 Italian GP, dying the next day from complications, shocking the F1 world.",
        es: "Ronnie Peterson resultó mortalmente herido en un accidente de primera vuelta en el GP de Italia de 1978, muriendo al día siguiente por complicaciones, conmocionando al mundo de F1.",
        de: "Ronnie Peterson wurde bei einem Ersten-Runden-Unfall beim Italien GP 1978 tödlich verletzt, starb am nächsten Tag an Komplikationen, schockierte die F1-Welt.",
        nl: "Ronnie Peterson raakte dodelijk gewond in een eerste ronde crash bij de Italiaanse GP van 1978, overleed de volgende dag aan complicaties, schokte de F1-wereld."
      }
    },
    {
      question: {
        en: "At which 2019 race did Charles Leclerc score his first F1 victory?",
        es: "¿En qué carrera de 2019 logró Charles Leclerc su primera victoria en F1?",
        de: "Bei welchem Rennen 2019 erzielte Charles Leclerc seinen ersten F1-Sieg?",
        nl: "Bij welke race van 2019 behaalde Charles Leclerc zijn eerste F1-overwinning?"
      },
      options: [
        "Austrian Grand Prix",
        "Italian Grand Prix",
        "Belgian Grand Prix",
        "Singapore Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Charles Leclerc won the 2019 Belgian GP for Ferrari one year after his friend Anthoine Hubert's fatal F2 crash at the same circuit.",
        es: "Charles Leclerc ganó el GP de Bélgica de 2019 para Ferrari un año después del accidente fatal de F2 de su amigo Anthoine Hubert en el mismo circuito.",
        de: "Charles Leclerc gewann den Belgien GP 2019 für Ferrari ein Jahr nach dem tödlichen F2-Unfall seines Freundes Anthoine Hubert auf derselben Strecke.",
        nl: "Charles Leclerc won de Belgische GP van 2019 voor Ferrari een jaar na de fatale F2-crash van zijn vriend Anthoine Hubert op hetzelfde circuit."
      }
    },
    {
      question: {
        en: "Which 1965 race saw Jim Clark lap the entire field except 2nd place?",
        es: "¿En qué carrera de 1965 Jim Clark dobló a todo el campo excepto al 2º lugar?",
        de: "Bei welchem Rennen 1965 überrundete Jim Clark das gesamte Feld außer dem Zweiten?",
        nl: "Bij welke race van 1965 rondde Jim Clark het hele veld behalve de 2e plaats?"
      },
      options: [
        "Dutch Grand Prix",
        "Belgian Grand Prix",
        "French Grand Prix",
        "British Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jim Clark dominated the 1965 Belgian GP at Spa, lapping everyone except 2nd-placed Jackie Stewart in one of F1's most dominant performances.",
        es: "Jim Clark dominó el GP de Bélgica de 1965 en Spa, doblando a todos excepto a Jackie Stewart en 2º lugar en una de las actuaciones más dominantes de F1.",
        de: "Jim Clark dominierte den Belgien GP 1965 in Spa, überrundete alle außer dem Zweiten Jackie Stewart in einer der dominantesten F1-Leistungen.",
        nl: "Jim Clark domineerde de Belgische GP van 1965 in Spa, rondde iedereen behalve de 2e geplaatste Jackie Stewart in een van F1's meest dominante prestaties."
      }
    },
    {
      question: {
        en: "At which 1991 race did Nigel Mansell famously push his stalled car across the line?",
        es: "¿En qué carrera de 1991 Nigel Mansell empujó famosamente su coche parado hasta la línea de meta?",
        de: "Bei welchem Rennen 1991 schob Nigel Mansell berühmt sein stehengebliebenes Auto über die Linie?",
        nl: "Bij welke race van 1991 duwde Nigel Mansell beroemd zijn stilstaande auto over de lijn?"
      },
      options: [
        "British Grand Prix",
        "Italian Grand Prix",
        "Portuguese Grand Prix",
        "Spanish Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "At the 1991 British GP, Mansell's Williams stopped on the final lap while leading. He pushed it across the line but was disqualified for receiving assistance.",
        es: "En el GP Británico de 1991, el Williams de Mansell se detuvo en la última vuelta mientras lideraba. Lo empujó hasta la línea pero fue descalificado por recibir ayuda.",
        de: "Beim Britischen GP 1991 blieb Mansells Williams in der letzten Runde stehen während er führte. Er schob es über die Linie wurde aber wegen Hilfe disqualifiziert.",
        nl: "Bij de Britse GP van 1991 stopte Mansell's Williams in de laatste ronde terwijl hij leidde. Hij duwde het over de lijn maar werd gediskwalificeerd voor het ontvangen van hulp."
      }
    },
    {
      question: {
        en: "Which 2014 race saw Jules Bianchi score Marussia's first-ever championship points?",
        es: "¿En qué carrera de 2014 Jules Bianchi logró los primeros puntos de campeonato de Marussia?",
        de: "Bei welchem Rennen 2014 erzielte Jules Bianchi die ersten Meisterschaftspunkte für Marussia?",
        nl: "Bij welke race van 2014 behaalde Jules Bianchi Marussia's allereerste kampioenschapspunten?"
      },
      options: [
        "Australian Grand Prix",
        "Monaco Grand Prix",
        "Canadian Grand Prix",
        "British Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jules Bianchi finished 9th at the 2014 Monaco GP, scoring Marussia's first and only championship points, helping save the team financially.",
        es: "Jules Bianchi terminó 9º en el GP de Mónaco de 2014, logrando los primeros y únicos puntos de campeonato de Marussia, ayudando a salvar al equipo financieramente.",
        de: "Jules Bianchi wurde beim Monaco GP 2014 Neunter, erzielte Marussias erste und einzige Meisterschaftspunkte, half das Team finanziell zu retten.",
        nl: "Jules Bianchi eindigde als 9e in de GP van Monaco 2014, behaalde Marussia's eerste en enige kampioenschapspunten, hielp het team financieel te redden."
      }
    },
    {
      question: {
        en: "What made the 1982 season particularly dangerous and tragic?",
        es: "¿Qué hizo la temporada de 1982 particularmente peligrosa y trágica?",
        de: "Was machte die Saison 1982 besonders gefährlich und tragisch?",
        nl: "Wat maakte het seizoen van 1982 bijzonder gevaarlijk en tragisch?"
      },
      options: [
        "Four drivers died during the season",
        "New turbo engines unreliable",
        "Ground effect banned mid-season",
        "Multiple team strikes"
      ],
      correct: 0,
      explanation: {
        en: "The 1982 season saw the deaths of Gilles Villeneuve and Riccardo Paletti, plus career-ending injuries to Didier Pironi and others in crashes.",
        es: "La temporada de 1982 vio las muertes de Gilles Villeneuve y Riccardo Paletti, más lesiones que terminaron la carrera de Didier Pironi y otros en accidentes.",
        de: "Die Saison 1982 sah die Tode von Gilles Villeneuve und Riccardo Paletti, plus karrierebeendende Verletzungen von Didier Pironi und anderen bei Unfällen.",
        nl: "Het seizoen van 1982 zag de doden van Gilles Villeneuve en Riccardo Paletti, plus carrière-beëindigende verwondingen aan Didier Pironi en anderen in crashes."
      }
    },
    {
      question: {
        en: "At which 1973 race did Jody Scheckter cause a massive first-lap pile-up?",
        es: "¿En qué carrera de 1973 Jody Scheckter causó un choque masivo de primera vuelta?",
        de: "Bei welchem Rennen 1973 verursachte Jody Scheckter eine massive Ersten-Runden-Karambolage?",
        nl: "Bij welke race van 1973 veroorzaakte Jody Scheckter een enorme eerste ronde crash?"
      },
      options: [
        "British Grand Prix",
        "Belgian Grand Prix",
        "Monaco Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "At the 1973 British GP, rookie Jody Scheckter spun at high speed, triggering a massive pile-up that eliminated 9 cars on the first lap.",
        es: "En el GP Británico de 1973, el novato Jody Scheckter giró a alta velocidad, desencadenando un choque masivo que eliminó 9 coches en la primera vuelta.",
        de: "Beim Britischen GP 1973 drehte sich Rookie Jody Scheckter bei hoher Geschwindigkeit und löste eine massive Karambolage aus die 9 Autos in der ersten Runde eliminierte.",
        nl: "Bij de Britse GP van 1973 spinde rookie Jody Scheckter op hoge snelheid, wat een enorme crash veroorzaakte waarbij 9 auto's in de eerste ronde uitvielen."
      }
    },
    {
      question: {
        en: "Which 2023 race did Max Verstappen win to break the record for most consecutive wins?",
        es: "¿Qué carrera de 2023 ganó Max Verstappen para romper el récord de más victorias consecutivas?",
        de: "Welches Rennen 2023 gewann Max Verstappen um den Rekord für die meisten aufeinanderfolgenden Siege zu brechen?",
        nl: "Welke race van 2023 won Max Verstappen om het record voor meeste opeenvolgende overwinningen te breken?"
      },
      options: [
        "Dutch Grand Prix",
        "Italian Grand Prix",
        "Singapore Grand Prix",
        "Japanese Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Max Verstappen won the 2023 Italian GP for his 10th consecutive victory, breaking the F1 record previously held by Sebastian Vettel (9 wins in 2013).",
        es: "Max Verstappen ganó el GP de Italia de 2023 para su 10ª victoria consecutiva, rompiendo el récord de F1 previamente en manos de Sebastian Vettel (9 victorias en 2013).",
        de: "Max Verstappen gewann den Italien GP 2023 für seinen 10. aufeinanderfolgenden Sieg und brach den F1-Rekord den zuvor Sebastian Vettel hielt (9 Siege 2013).",
        nl: "Max Verstappen won de Italiaanse GP van 2023 voor zijn 10e opeenvolgende overwinning, brak het F1-record dat voorheen door Sebastian Vettel werd gehouden (9 overwinningen in 2013)."
      }
    },
    {
      question: {
        en: "At which 1969 race did Jackie Stewart win despite driving with a broken wrist?",
        es: "¿En qué carrera de 1969 ganó Jackie Stewart a pesar de conducir con una muñeca rota?",
        de: "Bei welchem Rennen 1969 gewann Jackie Stewart trotz Fahrens mit gebrochenem Handgelenk?",
        nl: "Bij welke race van 1969 won Jackie Stewart ondanks rijden met een gebroken pols?"
      },
      options: [
        "Spanish Grand Prix",
        "Monaco Grand Prix",
        "Dutch Grand Prix",
        "German Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Jackie Stewart won the 1969 Dutch GP at Zandvoort despite having a broken wrist from a Formula 2 crash, showcasing his incredible determination.",
        es: "Jackie Stewart ganó el GP de Holanda de 1969 en Zandvoort a pesar de tener una muñeca rota por un accidente de Fórmula 2, mostrando su increíble determinación.",
        de: "Jackie Stewart gewann den Niederländischen GP 1969 in Zandvoort trotz gebrochenem Handgelenk von einem Formel-2-Unfall und zeigte seine unglaubliche Entschlossenheit.",
        nl: "Jackie Stewart won de Nederlandse GP van 1969 in Zandvoort ondanks een gebroken pols van een Formule 2-crash, toonde zijn ongelooflijke vastberadenheid."
      }
    },
    {
      question: {
        en: "Which 1990 race saw the Prost-Senna collision that gave Senna his second title?",
        es: "¿Qué carrera de 1990 vio la colisión Prost-Senna que dio a Senna su segundo título?",
        de: "Welches Rennen 1990 sah die Prost-Senna-Kollision die Senna seinen zweiten Titel gab?",
        nl: "Welke race van 1990 zag de Prost-Senna botsing die Senna zijn tweede titel gaf?"
      },
      options: [
        "Brazilian Grand Prix",
        "Japanese Grand Prix",
        "Australian Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "At the 1990 Japanese GP, Senna deliberately crashed into Prost at the first corner, eliminating both and securing his second World Championship.",
        es: "En el GP de Japón de 1990, Senna deliberadamente chocó con Prost en la primera curva, eliminando a ambos y asegurando su segundo Campeonato Mundial.",
        de: "Beim Japan GP 1990 krachte Senna absichtlich in Prost in der ersten Kurve, beide schieden aus und er sicherte seine zweite Weltmeisterschaft.",
        nl: "Bij de Japanse GP van 1990 crashte Senna opzettelijk in Prost in de eerste bocht, beiden elimineerde en zijn tweede Wereldkampioenschap veiligstelde."
      }
    },
    {
      question: {
        en: "At which 2021 race did Lewis Hamilton and Max Verstappen collide, eliminating both?",
        es: "¿En qué carrera de 2021 Lewis Hamilton y Max Verstappen chocaron, eliminando a ambos?",
        de: "Bei welchem Rennen 2021 kollidierten Lewis Hamilton und Max Verstappen und eliminierten beide?",
        nl: "Bij welke race van 2021 botsten Lewis Hamilton en Max Verstappen, beiden eliminerend?"
      },
      options: [
        "British Grand Prix",
        "Italian Grand Prix",
        "Hungarian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "At the 2021 Italian GP, Verstappen and Hamilton collided at the first chicane, both retiring with Verstappen's car landing on Hamilton's Mercedes.",
        es: "En el GP de Italia de 2021, Verstappen y Hamilton chocaron en la primera chicane, ambos retirándose con el coche de Verstappen aterrizando sobre el Mercedes de Hamilton.",
        de: "Beim Italien GP 2021 kollidierten Verstappen und Hamilton in der ersten Schikane, beide schieden aus als Verstappens Auto auf Hamiltons Mercedes landete.",
        nl: "Bij de Italiaanse GP van 2021 botsten Verstappen en Hamilton in de eerste chicane, beiden vielen uit met Verstappen's auto die op Hamilton's Mercedes landde."
      }
    },
    {
      question: {
        en: "Which 1961 race saw Wolfgang von Trips's fatal accident that killed 15 spectators?",
        es: "¿En qué carrera de 1961 ocurrió el accidente fatal de Wolfgang von Trips que mató a 15 espectadores?",
        de: "Bei welchem Rennen 1961 ereignete sich Wolfgang von Trips tödlicher Unfall der 15 Zuschauer tötete?",
        nl: "Bij welke race van 1961 vond Wolfgang von Trips's fatale ongeluk plaats dat 15 toeschouwers doodde?"
      },
      options: [
        "German Grand Prix",
        "Italian Grand Prix",
        "Belgian Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Wolfgang von Trips crashed at the 1961 Italian GP at Monza, killing him and 15 spectators. Phil Hill won the race and championship but celebrations were muted.",
        es: "Wolfgang von Trips se estrelló en el GP de Italia de 1961 en Monza, matándolo a él y a 15 espectadores. Phil Hill ganó la carrera y el campeonato pero las celebraciones fueron silenciadas.",
        de: "Wolfgang von Trips verunglückte beim Italien GP 1961 in Monza tödlich, tötete ihn und 15 Zuschauer. Phil Hill gewann Rennen und Meisterschaft aber Feiern waren gedämpft.",
        nl: "Wolfgang von Trips crashte bij de Italiaanse GP van 1961 in Monza, doodde hemzelf en 15 toeschouwers. Phil Hill won de race en het kampioenschap maar vieringen waren ingetogen."
      }
    },
    {
      question: {
        en: "At which 2016 race did Nico Rosberg clinch his only World Championship?",
        es: "¿En qué carrera de 2016 Nico Rosberg aseguró su único Campeonato Mundial?",
        de: "Bei welchem Rennen 2016 sicherte Nico Rosberg seine einzige Weltmeisterschaft?",
        nl: "Bij welke race van 2016 stelde Nico Rosberg zijn enige Wereldkampioenschap veilig?"
      },
      options: [
        "Brazilian Grand Prix",
        "Abu Dhabi Grand Prix",
        "Mexican Grand Prix",
        "Japanese Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Nico Rosberg finished 2nd at the 2016 Abu Dhabi GP to clinch his first and only World Championship, then retired five days later.",
        es: "Nico Rosberg terminó 2º en el GP de Abu Dhabi de 2016 para asegurar su primer y único Campeonato Mundial, luego se retiró cinco días después.",
        de: "Nico Rosberg wurde beim Abu Dhabi GP 2016 Zweiter um seine erste und einzige Weltmeisterschaft zu sichern, zog sich fünf Tage später zurück.",
        nl: "Nico Rosberg eindigde als 2e in de Abu Dhabi GP van 2016 om zijn eerste en enige Wereldkampioenschap veilig te stellen, stopte vijf dagen later."
      }
    },
    {
      question: {
        en: "Which 1955 race did Mercedes-Benz withdraw from mid-season after a tragedy?",
        es: "¿De qué carrera de 1955 Mercedes-Benz se retiró a mitad de temporada después de una tragedia?",
        de: "Von welchem Rennen 1955 zog sich Mercedes-Benz mitten in der Saison nach einer Tragödie zurück?",
        nl: "Van welke race van 1955 trok Mercedes-Benz zich mid-season terug na een tragedie?"
      },
      options: [
        "After Monaco Grand Prix",
        "After Le Mans disaster",
        "After German Grand Prix",
        "After Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Mercedes-Benz withdrew from all motorsport after the 1955 Le Mans disaster that killed 83 spectators, not returning to F1 until 1994.",
        es: "Mercedes-Benz se retiró de todo el automovilismo después del desastre de Le Mans de 1955 que mató a 83 espectadores, no regresando a F1 hasta 1994.",
        de: "Mercedes-Benz zog sich nach der Le Mans Katastrophe 1955 die 83 Zuschauer tötete aus dem gesamten Motorsport zurück, kehrte erst 1994 zur F1 zurück.",
        nl: "Mercedes-Benz trok zich terug uit alle motorsport na de Le Mans ramp van 1955 die 83 toeschouwers doodde, keerde pas in 1994 terug naar F1."
      }
    },
    {
      question: {
        en: "At which 1998 race did Michael Schumacher stall on the grid and fight back to win?",
        es: "¿En qué carrera de 1998 Michael Schumacher se caló en la parrilla y luchó para ganar?",
        de: "Bei welchem Rennen 1998 blieb Michael Schumacher auf dem Grid stehen und kämpfte sich zum Sieg zurück?",
        nl: "Bij welke race van 1998 sloeg Michael Schumacher af op de grid en vocht terug naar de overwinning?"
      },
      options: [
        "Monaco Grand Prix",
        "British Grand Prix",
        "Hungarian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Michael Schumacher stalled at the start of the 1998 Hungarian GP, dropped to last, then drove through the field to win in one of his finest performances.",
        es: "Michael Schumacher se caló en la salida del GP de Hungría de 1998, cayó al último lugar, luego condujo a través del campo para ganar en una de sus mejores actuaciones.",
        de: "Michael Schumacher blieb beim Start des Ungarn GP 1998 stehen, fiel auf den letzten Platz, fuhr dann durch das Feld zum Sieg in einer seiner besten Leistungen.",
        nl: "Michael Schumacher sloeg af bij de start van de Hongaarse GP van 1998, viel naar laatste plaats, reed toen door het veld naar de overwinning in een van zijn beste prestaties."
      }
    },
    {
      question: {
        en: "Which 2009 race did Jenson Button win in the wet to secure Brawn GP's first victory?",
        es: "¿Qué carrera de 2009 ganó Jenson Button en mojado para asegurar la primera victoria de Brawn GP?",
        de: "Welches Rennen 2009 gewann Jenson Button im Regen um Brawn GPs ersten Sieg zu sichern?",
        nl: "Welke race van 2009 won Jenson Button in het natte om Brawn GP's eerste overwinning veilig te stellen?"
      },
      options: [
        "Chinese Grand Prix",
        "Australian Grand Prix",
        "Malaysian Grand Prix",
        "Monaco Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jenson Button won the 2009 Australian GP season opener for Brawn GP, the first race for the team formed from Honda's ashes just weeks before.",
        es: "Jenson Button ganó la apertura de temporada del GP de Australia de 2009 para Brawn GP, la primera carrera para el equipo formado de las cenizas de Honda solo semanas antes.",
        de: "Jenson Button gewann den Australien GP Saisonauftakt 2009 für Brawn GP, das erste Rennen für das Team das aus Hondas Asche nur Wochen zuvor entstand.",
        nl: "Jenson Button won de Australische GP seizoensopener van 2009 voor Brawn GP, de eerste race voor het team gevormd uit Honda's as slechts weken ervoor."
      }
    },
    {
      question: {
        en: "At which 1979 race did Gilles Villeneuve drive the final lap on three wheels to finish?",
        es: "¿En qué carrera de 1979 Gilles Villeneuve condujo la última vuelta sobre tres ruedas para terminar?",
        de: "Bei welchem Rennen 1979 fuhr Gilles Villeneuve die letzte Runde auf drei Rädern ins Ziel?",
        nl: "Bij welke race van 1979 reed Gilles Villeneuve de laatste ronde op drie wielen naar de finish?"
      },
      options: [
        "Dutch Grand Prix",
        "Monaco Grand Prix",
        "Belgian Grand Prix",
        "Canadian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "At the 1979 Dutch GP, Gilles Villeneuve drove the final lap on three wheels after losing a tire, finishing 8th and showcasing his never-give-up attitude.",
        es: "En el GP de Holanda de 1979, Gilles Villeneuve condujo la última vuelta sobre tres ruedas después de perder un neumático, terminando 8º y mostrando su actitud de nunca rendirse.",
        de: "Beim Niederländischen GP 1979 fuhr Gilles Villeneuve die letzte Runde auf drei Rädern nachdem er einen Reifen verlor, wurde Achter und zeigte seine Niemals-Aufgeben-Einstellung.",
        nl: "Bij de Nederlandse GP van 1979 reed Gilles Villeneuve de laatste ronde op drie wielen na het verliezen van een band, eindigde als 8e en toonde zijn nooit-opgeven houding."
      }
    },
    {
      question: {
        en: "Which 1994 race saw Jos Verstappen's terrifying pit fire?",
        es: "¿Qué carrera de 1994 vio el aterrador incendio en boxes de Jos Verstappen?",
        de: "Welches Rennen 1994 sah Jos Verstappens furchterregenden Boxenbrand?",
        nl: "Welke race van 1994 zag Jos Verstappen's angstaanjagende pit fire?"
      },
      options: [
        "Brazilian Grand Prix",
        "German Grand Prix",
        "Belgian Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jos Verstappen's Benetton caught fire during a pit stop at the 1994 German GP due to a refueling rig malfunction, leading to improved safety measures.",
        es: "El Benetton de Jos Verstappen se incendió durante una parada en boxes en el GP de Alemania de 1994 debido a un mal funcionamiento del equipo de reabastecimiento, llevando a mejores medidas de seguridad.",
        de: "Jos Verstappens Benetton fing beim Deutschland GP 1994 während eines Boxenstopps Feuer aufgrund einer Betankungsanlage-Fehlfunktion, führte zu verbesserten Sicherheitsmaßnahmen.",
        nl: "Jos Verstappen's Benetton vloog in brand tijdens een pitstop bij de Duitse GP van 1994 door een storing van de tankinstallatie, leidde tot verbeterde veiligheidsmaatregelen."
      }
    },
    {
      question: {
        en: "At which 2020 race did Sergio Perez score his first F1 victory?",
        es: "¿En qué carrera de 2020 logró Sergio Perez su primera victoria en F1?",
        de: "Bei welchem Rennen 2020 erzielte Sergio Perez seinen ersten F1-Sieg?",
        nl: "Bij welke race van 2020 behaalde Sergio Perez zijn eerste F1-overwinning?"
      },
      options: [
        "Turkish Grand Prix",
        "Sakhir Grand Prix",
        "Italian Grand Prix",
        "Russian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Sergio Perez won the 2020 Sakhir GP for Racing Point after Mercedes botched George Russell's pit stop, Perez's first win in 190 race starts.",
        es: "Sergio Perez ganó el GP de Sakhir de 2020 para Racing Point después de que Mercedes estropeara la parada de George Russell, la primera victoria de Perez en 190 salidas.",
        de: "Sergio Perez gewann den Sakhir GP 2020 für Racing Point nachdem Mercedes George Russells Boxenstopp verpfuschte, Perez' erster Sieg in 190 Rennstarts.",
        nl: "Sergio Perez won de Sakhir GP van 2020 voor Racing Point nadat Mercedes George Russell's pitstop verprutste, Perez' eerste overwinning in 190 race starts."
      }
    },
    {
      question: {
        en: "Which 1950 race saw Giuseppe Farina become F1's first World Champion?",
        es: "¿En qué carrera de 1950 Giuseppe Farina se convirtió en el primer Campeón Mundial de F1?",
        de: "Bei welchem Rennen 1950 wurde Giuseppe Farina erster F1-Weltmeister?",
        nl: "Bij welke race van 1950 werd Giuseppe Farina F1's eerste Wereldkampioen?"
      },
      options: [
        "British Grand Prix",
        "Monaco Grand Prix",
        "Swiss Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 3,
      explanation: {
        en: "Giuseppe Farina won the 1950 Italian GP to clinch the first-ever Formula 1 World Championship for Alfa Romeo, beating teammate Fangio.",
        es: "Giuseppe Farina ganó el GP de Italia de 1950 para asegurar el primer Campeonato Mundial de Fórmula 1 para Alfa Romeo, venciendo a su compañero Fangio.",
        de: "Giuseppe Farina gewann den Italien GP 1950 um die allererste Formel-1-Weltmeisterschaft für Alfa Romeo zu sichern und schlug Teamkollege Fangio.",
        nl: "Giuseppe Farina won de Italiaanse GP van 1950 om het allereerste Formule 1 Wereldkampioenschap voor Alfa Romeo veilig te stellen, versloeg teamgenoot Fangio."
      }
    },
    {
      question: {
        en: "At which 2021 race did Max Verstappen win his first World Championship?",
        es: "¿En qué carrera de 2021 Max Verstappen ganó su primer Campeonato Mundial?",
        de: "Bei welchem Rennen 2021 gewann Max Verstappen seine erste Weltmeisterschaft?",
        nl: "Bij welke race van 2021 won Max Verstappen zijn eerste Wereldkampioenschap?"
      },
      options: [
        "Saudi Arabian Grand Prix",
        "Brazilian Grand Prix",
        "Abu Dhabi Grand Prix",
        "United States Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Max Verstappen won the controversial 2021 Abu Dhabi GP finale on the last lap to claim his first World Championship from Lewis Hamilton.",
        es: "Max Verstappen ganó la controvertida final del GP de Abu Dhabi de 2021 en la última vuelta para reclamar su primer Campeonato Mundial de Lewis Hamilton.",
        de: "Max Verstappen gewann das umstrittene Abu Dhabi GP Finale 2021 in der letzten Runde um seine erste Weltmeisterschaft von Lewis Hamilton zu holen.",
        nl: "Max Verstappen won de controversiële Abu Dhabi GP finale van 2021 in de laatste ronde om zijn eerste Wereldkampioenschap van Lewis Hamilton te claimen."
      }
    },
    {
      question: {
        en: "Which 1986 race did Nigel Mansell's tire explode with only laps remaining while leading?",
        es: "¿En qué carrera de 1986 explotó el neumático de Nigel Mansell con solo vueltas restantes mientras lideraba?",
        de: "Bei welchem Rennen 1986 explodierte Nigel Mansells Reifen mit nur wenigen Runden übrig während er führte?",
        nl: "Bij welke race van 1986 explodeerde Nigel Mansell's band met slechts enkele ronden te gaan terwijl hij leidde?"
      },
      options: [
        "Australian Grand Prix",
        "Mexican Grand Prix",
        "Brazilian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Nigel Mansell's left-rear tire exploded at the 1986 Australian GP while leading, costing him the championship which went to Prost instead.",
        es: "El neumático trasero izquierdo de Nigel Mansell explotó en el GP de Australia de 1986 mientras lideraba, costándole el campeonato que fue para Prost en su lugar.",
        de: "Nigel Mansells linker Hinterreifen explodierte beim Australien GP 1986 während er führte, kostete ihm die Meisterschaft die stattdessen an Prost ging.",
        nl: "Nigel Mansell's linker achterband explodeerde bij de Australische GP van 1986 terwijl hij leidde, kostte hem het kampioenschap dat in plaats daarvan naar Prost ging."
      }
    },
    {
      question: {
        en: "At which 1976 race did James Hunt win to keep his title hopes alive after disqualification?",
        es: "¿En qué carrera de 1976 ganó James Hunt para mantener vivas sus esperanzas de título después de descalificación?",
        de: "Bei welchem Rennen 1976 gewann James Hunt um seine Titelchancen nach Disqualifikation am Leben zu erhalten?",
        nl: "Bij welke race van 1976 won James Hunt om zijn titelkansen na diskwalificatie levend te houden?"
      },
      options: [
        "Canadian Grand Prix",
        "United States Grand Prix",
        "Dutch Grand Prix",
        "German Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "James Hunt won the 1976 Dutch GP after being disqualified from the British GP, keeping his championship battle with Lauda alive in the dramatic season.",
        es: "James Hunt ganó el GP de Holanda de 1976 después de ser descalificado del GP Británico, manteniendo viva su batalla de campeonato con Lauda en la dramática temporada.",
        de: "James Hunt gewann den Niederländischen GP 1976 nachdem er vom Britischen GP disqualifiziert wurde, hielt seinen Meisterschaftskampf mit Lauda in der dramatischen Saison am Leben.",
        nl: "James Hunt won de Nederlandse GP van 1976 na gediskwalificeerd te zijn van de Britse GP, hield zijn kampioenschapsstrijd met Lauda levend in het dramatische seizoen."
      }
    },
    {
      question: {
        en: "Which 1979 race saw the debut of ground effect cars winning for the first time?",
        es: "¿En qué carrera de 1979 debutaron los coches de efecto suelo ganando por primera vez?",
        de: "Bei welchem Rennen 1979 debütierten Ground-Effect-Autos zum ersten Mal mit einem Sieg?",
        nl: "Bij welke race van 1979 debuteerden ground effect auto's winnend voor de eerste keer?"
      },
      options: [
        "Argentine Grand Prix",
        "Brazilian Grand Prix",
        "South African Grand Prix",
        "Spanish Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "The 1979 Brazilian GP saw Ligier's ground effect cars dominate, with Jacques Laffite winning from teammate Patrick Depailler, revolutionizing F1 aerodynamics.",
        es: "El GP de Brasil de 1979 vio a los coches de efecto suelo de Ligier dominar, con Jacques Laffite ganando ante su compañero Patrick Depailler, revolucionando la aerodinámica de F1.",
        de: "Der Brasilien GP 1979 sah Ligiers Ground-Effect-Autos dominieren, Jacques Laffite gewann vor Teamkollege Patrick Depailler, revolutionierte F1-Aerodynamik.",
        nl: "De Braziliaanse GP van 1979 zag Ligier's ground effect auto's domineren, met Jacques Laffite winnend van teamgenoot Patrick Depailler, revolutioneerde F1-aerodynamica."
      }
    },
    {
      question: {
        en: "At which 1992 race did Nigel Mansell clinch the championship with 5 races remaining?",
        es: "¿En qué carrera de 1992 aseguró Nigel Mansell el campeonato con 5 carreras restantes?",
        de: "Bei welchem Rennen 1992 sicherte Nigel Mansell die Meisterschaft mit 5 verbleibenden Rennen?",
        nl: "Bij welke race van 1992 stelde Nigel Mansell het kampioenschap veilig met 5 races te gaan?"
      },
      options: [
        "British Grand Prix",
        "German Grand Prix",
        "Hungarian Grand Prix",
        "Belgian Grand Prix"
      ],
      correct: 2,
      explanation: {
        en: "Nigel Mansell clinched the 1992 championship at the Hungarian GP with 5 races still to run, dominating the season with 9 wins in the Williams-Renault.",
        es: "Nigel Mansell aseguró el campeonato de 1992 en el GP de Hungría con 5 carreras aún por correr, dominando la temporada con 9 victorias en el Williams-Renault.",
        de: "Nigel Mansell sicherte die Meisterschaft 1992 beim Ungarn GP mit noch 5 zu fahrenden Rennen, dominierte die Saison mit 9 Siegen im Williams-Renault.",
        nl: "Nigel Mansell stelde het kampioenschap van 1992 veilig bij de Hongaarse GP met nog 5 races te gaan, domineerde het seizoen met 9 overwinningen in de Williams-Renault."
      }
    },
    {
      question: {
        en: "Which 1971 race did Jackie Stewart win in heavy rain and fog by over a minute?",
        es: "¿Qué carrera de 1971 ganó Jackie Stewart bajo lluvia intensa y niebla por más de un minuto?",
        de: "Welches Rennen 1971 gewann Jackie Stewart bei starkem Regen und Nebel mit über einer Minute Vorsprung?",
        nl: "Welke race van 1971 won Jackie Stewart in zware regen en mist met meer dan een minuut voorsprong?"
      },
      options: [
        "German Grand Prix",
        "Belgian Grand Prix",
        "British Grand Prix",
        "Dutch Grand Prix"
      ],
      correct: 0,
      explanation: {
        en: "Jackie Stewart won the 1971 German GP at the Nürburgring in atrocious conditions, lapping all but the second-place finisher in one of F1's greatest wet-weather drives.",
        es: "Jackie Stewart ganó el GP de Alemania de 1971 en el Nürburgring en condiciones atroces, doblando a todos excepto el segundo clasificado en una de las mejores carreras en mojado de F1.",
        de: "Jackie Stewart gewann den Deutschland GP 1971 am Nürburgring unter grauenhaften Bedingungen, überrundete alle außer dem Zweitplatzierten in einer der besten Regenfahrten der F1.",
        nl: "Jackie Stewart won de Duitse GP van 1971 op de Nürburgring in verschrikkelijke omstandigheden, rondde iedereen behalve de tweede plaats in een van F1's beste regenraces."
      }
    },
    {
      question: {
        en: "At which 2009 race did Jenson Button clinch his only World Championship?",
        es: "¿En qué carrera de 2009 aseguró Jenson Button su único Campeonato Mundial?",
        de: "Bei welchem Rennen 2009 sicherte Jenson Button seine einzige Weltmeisterschaft?",
        nl: "Bij welke race van 2009 stelde Jenson Button zijn enige Wereldkampioenschap veilig?"
      },
      options: [
        "Japanese Grand Prix",
        "Brazilian Grand Prix",
        "Singapore Grand Prix",
        "Italian Grand Prix"
      ],
      correct: 1,
      explanation: {
        en: "Jenson Button clinched the 2009 World Championship at the Brazilian GP by finishing 5th, completing Brawn GP's fairy-tale season with both championships.",
        es: "Jenson Button aseguró el Campeonato Mundial de 2009 en el GP de Brasil terminando 5º, completando la temporada de cuento de hadas de Brawn GP con ambos campeonatos.",
        de: "Jenson Button sicherte die Weltmeisterschaft 2009 beim Brasilien GP durch Platz 5, vollendete Brawn GPs Märchensaison mit beiden Meisterschaften.",
        nl: "Jenson Button stelde het Wereldkampioenschap van 2009 veilig bij de Braziliaanse GP door 5e te worden, voltooide Brawn GP's sprookjesseizoen met beide kampioenschappen."
      }
    }
  ];

  return { questions: questions };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = level6;
}
