const level2 = (function() {
  const questions = [
    {
      question: {
        en: "At which race did Senna and Prost collide in 1989, with Prost retiring and Senna being disqualified?",
        es: "¿En qué carrera chocaron Senna y Prost en 1989, con Prost retirándose y Senna siendo descalificado?",
        de: "Bei welchem Rennen kollidierten Senna und Prost 1989, wobei Prost ausfiel und Senna disqualifiziert wurde?",
        nl: "Bij welke race botsten Senna en Prost in 1989, met Prost uitvallend en Senna gediskwalificeerd?"
      },
      options: [
        "Japanese GP (Suzuka)",
        "Brazilian GP (Interlagos)",
        "Monaco GP",
        "Belgian GP (Spa)"
      ],
      correct: 0,
      explanation: {
        en: "At Suzuka 1989, Senna and Prost collided at the chicane. Prost retired but Senna continued, won, then was disqualified for cutting the chicane.",
        es: "En Suzuka 1989, Senna y Prost chocaron en la chicana. Prost se retiró pero Senna continuó, ganó, luego fue descalificado por cortar la chicana.",
        de: "In Suzuka 1989 kollidierten Senna und Prost an der Schikane. Prost fiel aus aber Senna fuhr weiter, gewann, wurde dann wegen Schikanen-Abkürzung disqualifiziert.",
        nl: "In Suzuka 1989 botsten Senna en Prost bij de chicane. Prost viel uit maar Senna reed door, won, werd toen gediskwalificeerd voor het afsnijden van de chicane."
      }
    },
    {
      question: {
        en: "What was the team order code 'Multi 21' at Malaysia 2013?",
        es: "¿Qué era el código de órdenes de equipo 'Multi 21' en Malasia 2013?",
        de: "Was war der Teamorder-Code 'Multi 21' in Malaysia 2013?",
        nl: "Wat was de teamorder-code 'Multi 21' in Maleisië 2013?"
      },
      options: [
        "Maintain position: car 2 ahead of car 1 (Webber ahead of Vettel)",
        "Swap positions: car 1 to pass car 2",
        "Both cars save fuel mode",
        "Allow racing but no contact"
      ],
      correct: 0,
      explanation: {
        en: "'Multi 21' meant car 2 (Webber) should stay ahead of car 1 (Vettel). Vettel ignored this and overtook Webber to win, causing fury.",
        es: "'Multi 21' significaba que el coche 2 (Webber) debía mantenerse adelante del coche 1 (Vettel). Vettel ignoró esto y adelantó a Webber para ganar, causando furia.",
        de: "'Multi 21' bedeutete Auto 2 (Webber) sollte vor Auto 1 (Vettel) bleiben. Vettel ignorierte dies und überholte Webber zum Sieg, was Wut auslöste.",
        nl: "'Multi 21' betekende auto 2 (Webber) moest voor auto 1 (Vettel) blijven. Vettel negeerde dit en haalde Webber in om te winnen, wat woede veroorzaakte."
      }
    },
    {
      question: {
        en: "Which infamous team order radio message was given at Germany 2010?",
        es: "¿Qué infame mensaje de radio de órdenes de equipo se dio en Alemania 2010?",
        de: "Welche berüchtigte Teamorder-Funknachricht wurde in Deutschland 2010 gegeben?",
        nl: "Welk beruchte teamorder-radiobericht werd gegeven in Duitsland 2010?"
      },
      options: [
        "'Fernando is faster than you'",
        "'Multi 21'",
        "'Hold position'",
        "'Let him by'"
      ],
      correct: 0,
      explanation: {
        en: "At Germany 2010, Ferrari told Felipe Massa 'Fernando is faster than you' - coded team orders for Massa to let Alonso past, causing controversy.",
        es: "En Alemania 2010, Ferrari dijo a Felipe Massa 'Fernando es más rápido que tú' - órdenes de equipo codificadas para que Massa dejara pasar a Alonso, causando controversia.",
        de: "In Deutschland 2010 sagte Ferrari zu Felipe Massa 'Fernando ist schneller als du' - kodierte Teamorder für Massa, Alonso vorbeizulassen, was Kontroverse auslöste.",
        nl: "In Duitsland 2010 vertelde Ferrari Felipe Massa 'Fernando is sneller dan jij' - gecodeerde teamorders voor Massa om Alonso voorbij te laten, wat controverse veroorzaakte."
      }
    },
    {
      question: {
        en: "What happened at the 2016 Austrian GP start between Hamilton and Rosberg?",
        es: "¿Qué pasó en la salida del GP de Austria 2016 entre Hamilton y Rosberg?",
        de: "Was geschah beim Start des Österreich GP 2016 zwischen Hamilton und Rosberg?",
        nl: "Wat gebeurde er bij de start van de Oostenrijkse GP 2016 tussen Hamilton en Rosberg?"
      },
      options: [
        "They collided on the final lap while battling for the lead",
        "Hamilton passed Rosberg cleanly at Turn 1",
        "Rosberg had a poor start and fell back",
        "Both crashed at Turn 1 and retired"
      ],
      correct: 0,
      explanation: {
        en: "At Austria 2016, Hamilton and Rosberg collided on the final lap while battling for the lead, damaging both cars but Hamilton won.",
        es: "En Austria 2016, Hamilton y Rosberg chocaron en la última vuelta mientras luchaban por el liderato, dañando ambos coches pero Hamilton ganó.",
        de: "In Österreich 2016 kollidierten Hamilton und Rosberg in der letzten Runde beim Kampf um die Führung, beschädigten beide Autos aber Hamilton gewann.",
        nl: "In Oostenrijk 2016 botsten Hamilton en Rosberg in de laatste ronde terwijl ze vochten om de leiding, beide auto's beschadigend maar Hamilton won."
      }
    },
    {
      question: {
        en: "Where did Verstappen and Ricciardo collide in 2018, eliminating both Red Bulls?",
        es: "¿Dónde chocaron Verstappen y Ricciardo en 2018, eliminando ambos Red Bulls?",
        de: "Wo kollidierten Verstappen und Ricciardo 2018 und eliminierten beide Red Bulls?",
        nl: "Waar botsten Verstappen en Ricciardo in 2018, beide Red Bulls eliminerend?"
      },
      options: [
        "Azerbaijan GP (Baku)",
        "Monaco GP",
        "Singapore GP",
        "Brazilian GP"
      ],
      correct: 0,
      explanation: {
        en: "At Azerbaijan 2018, Verstappen and Ricciardo collided while battling for position, taking both Red Bulls out in a costly mistake.",
        es: "En Azerbaiyán 2018, Verstappen y Ricciardo chocaron mientras luchaban por posición, eliminando ambos Red Bulls en un error costoso.",
        de: "In Aserbaidschan 2018 kollidierten Verstappen und Ricciardo beim Positionskampf und nahmen beide Red Bulls in einem kostspieligen Fehler raus.",
        nl: "In Azerbeidzjan 2018 botsten Verstappen en Ricciardo tijdens gevecht om positie, beide Red Bulls eruit nemend in een kostbare fout."
      }
    },
    {
      question: {
        en: "At which corner did Hamilton and Verstappen collide at Silverstone 2021?",
        es: "¿En qué curva chocaron Hamilton y Verstappen en Silverstone 2021?",
        de: "In welcher Kurve kollidierten Hamilton und Verstappen in Silverstone 2021?",
        nl: "Bij welke bocht botsten Hamilton en Verstappen in Silverstone 2021?"
      },
      options: [
        "Copse (Turn 9)",
        "Maggotts (Turn 11)",
        "Stowe (Turn 15)",
        "Brooklands (Turn 6)"
      ],
      correct: 0,
      explanation: {
        en: "Hamilton and Verstappen collided at high-speed Copse corner on lap 1 at Silverstone 2021, sending Verstappen into the barriers with a 51G impact.",
        es: "Hamilton y Verstappen chocaron en la curva Copse de alta velocidad en la vuelta 1 en Silverstone 2021, enviando a Verstappen contra las barreras con un impacto de 51G.",
        de: "Hamilton und Verstappen kollidierten in der Hochgeschwindigkeits-Copse-Kurve in Runde 1 in Silverstone 2021, Verstappen mit einem 51G-Aufprall in die Barrieren schickend.",
        nl: "Hamilton en Verstappen botsten in de snelle Copse-bocht in ronde 1 in Silverstone 2021, Verstappen in de barrières stuurend met een 51G-impact."
      }
    },
    {
      question: {
        en: "What was controversial about the 2002 Austrian GP podium ceremony?",
        es: "¿Qué fue controvertido sobre la ceremonia de podio del GP de Austria 2002?",
        de: "Was war kontrovers an der Podiumszeremonie des Österreich GP 2002?",
        nl: "Wat was controversieel over de podiumceremonie van de Oostenrijkse GP 2002?"
      },
      options: [
        "Schumacher gave Barrichello the top step after team orders",
        "Both Ferrari drivers boycotted the ceremony",
        "The crowd booed throughout the ceremony",
        "Schumacher refused to spray champagne"
      ],
      correct: 0,
      explanation: {
        en: "After Barrichello was ordered to let Schumacher win at Austria 2002, Schumacher pushed Barrichello onto the top podium step in an awkward gesture.",
        es: "Después de que se ordenara a Barrichello dejar ganar a Schumacher en Austria 2002, Schumacher empujó a Barrichello al escalón superior del podio en un gesto incómodo.",
        de: "Nachdem Barrichello angewiesen wurde Schumacher in Österreich 2002 gewinnen zu lassen, schob Schumacher Barrichello auf die oberste Podiumsstufe in einer peinlichen Geste.",
        nl: "Nadat Barrichello bevolen werd Schumacher te laten winnen in Oostenrijk 2002, duwde Schumacher Barrichello op de hoogste podiumtrede in een ongemakkelijk gebaar."
      }
    },
    {
      question: {
        en: "Which race saw Hamilton block Alonso in the pits during qualifying in 2007?",
        es: "¿En qué carrera bloqueó Hamilton a Alonso en boxes durante la clasificación en 2007?",
        de: "Bei welchem Rennen blockierte Hamilton Alonso in den Boxen während der Qualifikation 2007?",
        nl: "Bij welke race blokkeerde Hamilton Alonso in de pits tijdens kwalificatie in 2007?"
      },
      options: [
        "Hungarian GP",
        "Spanish GP",
        "Monaco GP",
        "British GP"
      ],
      correct: 0,
      explanation: {
        en: "At Hungary 2007 qualifying, Alonso held Hamilton in the pits to prevent him getting a final lap, then Hamilton blocked Alonso. Both were penalized.",
        es: "En la clasificación de Hungría 2007, Alonso retuvo a Hamilton en boxes para evitar que hiciera una vuelta final, luego Hamilton bloqueó a Alonso. Ambos fueron penalizados.",
        de: "Beim Qualifying in Ungarn 2007 hielt Alonso Hamilton in den Boxen um eine letzte Runde zu verhindern, dann blockierte Hamilton Alonso. Beide wurden bestraft.",
        nl: "In Hongarije 2007-kwalificatie hield Alonso Hamilton in de pits om een laatste ronde te voorkomen, toen blokkeerde Hamilton Alonso. Beiden werden gestraft."
      }
    },
    {
      question: {
        en: "What incident occurred between Vettel and Leclerc at Brazil 2019?",
        es: "¿Qué incidente ocurrió entre Vettel y Leclerc en Brasil 2019?",
        de: "Welcher Vorfall ereignete sich zwischen Vettel und Leclerc in Brasilien 2019?",
        nl: "Welk incident vond plaats tussen Vettel en Leclerc in Brazilië 2019?"
      },
      options: [
        "They collided while battling, both retiring with punctures",
        "Vettel ignored team orders to let Leclerc pass",
        "Leclerc pushed Vettel off track at Turn 1",
        "Both crashed separately in the rain"
      ],
      correct: 0,
      explanation: {
        en: "At Brazil 2019, Vettel and Leclerc collided while fighting for position, giving both Ferraris punctures and eliminating them from points contention.",
        es: "En Brasil 2019, Vettel y Leclerc chocaron mientras luchaban por posición, dando pinchazos a ambos Ferraris y eliminándolos de la lucha por puntos.",
        de: "In Brasilien 2019 kollidierten Vettel und Leclerc beim Positionskampf, gaben beiden Ferraris Reifenschäden und eliminierten sie vom Punktekampf.",
        nl: "In Brazilië 2019 botsten Vettel en Leclerc tijdens gevecht om positie, beide Ferrari's lekke banden gevend en hen eliminerend uit puntenstrijd."
      }
    },
    {
      question: {
        en: "Where did Schumacher and Hill collide to decide the 1994 championship?",
        es: "¿Dónde chocaron Schumacher y Hill para decidir el campeonato de 1994?",
        de: "Wo kollidierten Schumacher und Hill um die Meisterschaft 1994 zu entscheiden?",
        nl: "Waar botsten Schumacher en Hill om het 1994-kampioenschap te beslissen?"
      },
      options: [
        "Australian GP (Adelaide)",
        "Japanese GP (Suzuka)",
        "European GP (Jerez)",
        "Portuguese GP (Estoril)"
      ],
      correct: 0,
      explanation: {
        en: "At Adelaide 1994, Schumacher hit the wall, then turned into Hill when he tried to pass, eliminating both and giving Schumacher the championship by 1 point.",
        es: "En Adelaide 1994, Schumacher golpeó el muro, luego giró hacia Hill cuando intentó pasar, eliminando a ambos y dando a Schumacher el campeonato por 1 punto.",
        de: "In Adelaide 1994 traf Schumacher die Mauer, drehte dann in Hill als dieser versuchte zu überholen, eliminierte beide und gab Schumacher die Meisterschaft mit 1 Punkt.",
        nl: "In Adelaide 1994 raakte Schumacher de muur, draaide toen in Hill toen deze probeerde te passeren, beiden eliminerend en Schumacher het kampioenschap gevend met 1 punt."
      }
    },
    {
      question: {
        en: "At which race did Rosberg and Hamilton collide at the start in 2016?",
        es: "¿En qué carrera chocaron Rosberg y Hamilton en la salida en 2016?",
        de: "Bei welchem Rennen kollidierten Rosberg und Hamilton beim Start 2016?",
        nl: "Bij welke race botsten Rosberg en Hamilton bij de start in 2016?"
      },
      options: [
        "Spanish GP (Barcelona)",
        "Austrian GP",
        "Belgian GP (Spa)",
        "Malaysian GP"
      ],
      correct: 0,
      explanation: {
        en: "At Barcelona 2016, Hamilton and Rosberg collided on lap 1 after both went into the wrong engine mode, eliminating both Mercedes from the race.",
        es: "En Barcelona 2016, Hamilton y Rosberg chocaron en la vuelta 1 después de que ambos entraran en el modo de motor incorrecto, eliminando ambos Mercedes de la carrera.",
        de: "In Barcelona 2016 kollidierten Hamilton und Rosberg in Runde 1 nachdem beide in den falschen Motormodus gingen, beide Mercedes aus dem Rennen nehmend.",
        nl: "In Barcelona 2016 botsten Hamilton en Rosberg in ronde 1 nadat beiden in de verkeerde motor-modus gingen, beide Mercedes uit de race nemend."
      }
    },
    {
      question: {
        en: "What happened between Prost and Senna at the first corner of Suzuka 1990?",
        es: "¿Qué pasó entre Prost y Senna en la primera curva de Suzuka 1990?",
        de: "Was geschah zwischen Prost und Senna in der ersten Kurve von Suzuka 1990?",
        nl: "Wat gebeurde er tussen Prost en Senna in de eerste bocht van Suzuka 1990?"
      },
      options: [
        "Senna deliberately drove into Prost, eliminating both",
        "Prost cut across Senna causing a collision",
        "Both spun avoiding each other",
        "Senna passed cleanly on the outside"
      ],
      correct: 0,
      explanation: {
        en: "At Suzuka 1990, Senna deliberately drove into Prost at Turn 1, eliminating both and securing Senna's second championship in retaliation for 1989.",
        es: "En Suzuka 1990, Senna condujo deliberadamente hacia Prost en la Curva 1, eliminando a ambos y asegurando el segundo campeonato de Senna en represalia por 1989.",
        de: "In Suzuka 1990 fuhr Senna absichtlich in Prost in Kurve 1, eliminierte beide und sicherte Sennas zweite Meisterschaft als Vergeltung für 1989.",
        nl: "In Suzuka 1990 reed Senna opzettelijk in Prost in bocht 1, beiden eliminerend en Senna's tweede kampioenschap veiligstellend als vergelding voor 1989."
      }
    },
    {
      question: {
        en: "Which corner did Schumacher try to take out Villeneuve at Jerez 1997?",
        es: "¿En qué curva intentó Schumacher eliminar a Villeneuve en Jerez 1997?",
        de: "In welcher Kurve versuchte Schumacher Villeneuve in Jerez 1997 rauszunehmen?",
        nl: "Bij welke bocht probeerde Schumacher Villeneuve eruit te nemen in Jerez 1997?"
      },
      options: [
        "Dry Sac corner (Turn 12/13)",
        "First corner",
        "Final corner before finish",
        "Hairpin (Turn 6)"
      ],
      correct: 0,
      explanation: {
        en: "At Jerez 1997, Schumacher turned into Villeneuve at the Dry Sac corner trying to take him out for the title, but failed and was disqualified from the championship.",
        es: "En Jerez 1997, Schumacher giró hacia Villeneuve en la curva Dry Sac intentando eliminarlo por el título, pero falló y fue descalificado del campeonato.",
        de: "In Jerez 1997 drehte Schumacher in Villeneuve in der Dry Sac-Kurve um ihn für den Titel rauszunehmen, scheiterte aber und wurde von der Meisterschaft disqualifiziert.",
        nl: "In Jerez 1997 draaide Schumacher in Villeneuve bij de Dry Sac-bocht om hem eruit te nemen voor de titel, maar faalde en werd gediskwalificeerd van het kampioenschap."
      }
    },
    {
      question: {
        en: "What was the controversy at Hungary 1998 involving Schumacher and Hill?",
        es: "¿Cuál fue la controversia en Hungría 1998 que involucró a Schumacher y Hill?",
        de: "Was war die Kontroverse in Ungarn 1998 mit Schumacher und Hill?",
        nl: "Wat was de controverse in Hongarije 1998 met Schumacher en Hill?"
      },
      options: [
        "Schumacher crashed into Hill in the pits under red flag",
        "Hill blocked Schumacher during qualifying",
        "Schumacher took Hill out at the first corner",
        "Hill refused team orders to let Schumacher pass"
      ],
      correct: 0,
      explanation: {
        en: "At Hungary 1998, during a red flag, Schumacher drove into the pit lane and crashed into Hill's stationary Jordan, receiving a penalty.",
        es: "En Hungría 1998, durante una bandera roja, Schumacher condujo al pit lane y chocó contra el Jordan estacionario de Hill, recibiendo una penalización.",
        de: "In Ungarn 1998 fuhr Schumacher während einer roten Flagge in die Boxengasse und crashte in Hills stehenden Jordan, erhielt eine Strafe.",
        nl: "In Hongarije 1998 reed Schumacher tijdens een rode vlag de pit lane in en crashte in Hill's stilstaande Jordan, een straf ontvangend."
      }
    },
    {
      question: {
        en: "Where did Leclerc and Vettel collide at Monza 2019?",
        es: "¿Dónde chocaron Leclerc y Vettel en Monza 2019?",
        de: "Wo kollidierten Leclerc und Vettel in Monza 2019?",
        nl: "Waar botsten Leclerc en Vettel in Monza 2019?"
      },
      options: [
        "Ascari chicane (Turn 8/9)",
        "First chicane (Turn 1/2)",
        "Parabolica (Turn 11)",
        "Lesmo 2 (Turn 6)"
      ],
      correct: 1,
      explanation: {
        en: "At Monza 2019, Vettel and Leclerc touched at the first chicane while battling, damaging Vettel's car and compromising Ferrari's home race.",
        es: "En Monza 2019, Vettel y Leclerc se tocaron en la primera chicana mientras luchaban, dañando el coche de Vettel y comprometiendo la carrera local de Ferrari.",
        de: "In Monza 2019 berührten sich Vettel und Leclerc in der ersten Schikane beim Kampf, beschädigten Vettels Auto und kompromittierten Ferraris Heimrennen.",
        nl: "In Monza 2019 raakten Vettel en Leclerc elkaar bij de eerste chicane tijdens gevecht, Vettels auto beschadigend en Ferrari's thuisrace compromitterend."
      }
    },
    {
      question: {
        en: "What happened at Monaco 2014 qualifying involving Rosberg?",
        es: "¿Qué pasó en la clasificación de Mónaco 2014 que involucró a Rosberg?",
        de: "Was geschah beim Qualifying in Monaco 2014 mit Rosberg?",
        nl: "Wat gebeurde er bij Monaco 2014-kwalificatie met Rosberg?"
      },
      options: [
        "Rosberg deliberately went off track to cause yellow flags",
        "Hamilton blocked Rosberg in the tunnel",
        "Rosberg crashed and took pole fairly",
        "Both Mercedes crashed together"
      ],
      correct: 0,
      explanation: {
        en: "At Monaco 2014 Q3, Rosberg went down an escape road causing yellows that prevented Hamilton from improving, though Rosberg claimed it was a mistake.",
        es: "En Mónaco 2014 Q3, Rosberg fue por una vía de escape causando amarillas que impidieron a Hamilton mejorar, aunque Rosberg afirmó que fue un error.",
        de: "In Monaco 2014 Q3 fuhr Rosberg eine Auslaufzone hinunter und verursachte Gelb, was Hamilton am Verbessern hinderte, obwohl Rosberg behauptete es war ein Fehler.",
        nl: "In Monaco 2014 Q3 ging Rosberg een uitloopstrook in wat gele vlaggen veroorzaakte die Hamilton verhinderde te verbeteren, hoewel Rosberg beweerde het een fout was."
      }
    },
    {
      question: {
        en: "Which Lotus teammates had an on-track incident at Monaco 2012?",
        es: "¿Qué compañeros de Lotus tuvieron un incidente en pista en Mónaco 2012?",
        de: "Welche Lotus-Teamkollegen hatten einen Vorfall auf der Strecke in Monaco 2012?",
        nl: "Welke Lotus-teamgenoten hadden een incident op de baan in Monaco 2012?"
      },
      options: [
        "Räikkönen and Grosjean collided at Mirabeau",
        "No incident - both finished strongly",
        "Grosjean crashed alone at Sainte Devote",
        "Räikkönen spun avoiding Grosjean"
      ],
      correct: 1,
      explanation: {
        en: "Actually Monaco 2012 was relatively clean for Lotus. Grosjean's major incident was at Spa 2012 where he caused a massive first lap crash.",
        es: "En realidad Mónaco 2012 fue relativamente limpio para Lotus. El incidente mayor de Grosjean fue en Spa 2012 donde causó un choque masivo en la primera vuelta.",
        de: "Eigentlich war Monaco 2012 relativ sauber für Lotus. Grosjeans großer Vorfall war in Spa 2012, wo er einen massiven Unfall in der ersten Runde verursachte.",
        nl: "Eigenlijk was Monaco 2012 relatief schoon voor Lotus. Grosjeans grote incident was in Spa 2012 waar hij een enorme eerste ronde-crash veroorzaakte."
      }
    },
    {
      question: {
        en: "What was the penalty for the 2002 Austrian GP team orders incident?",
        es: "¿Cuál fue la penalización por el incidente de órdenes de equipo del GP de Austria 2002?",
        de: "Was war die Strafe für den Teamorder-Vorfall beim Österreich GP 2002?",
        nl: "Wat was de straf voor het teamorder-incident van de Oostenrijkse GP 2002?"
      },
      options: [
        "Ferrari fined $1 million, team orders banned from 2003",
        "Schumacher disqualified from the race",
        "Barrichello given back the win",
        "No penalty but rule clarification issued"
      ],
      correct: 0,
      explanation: {
        en: "Ferrari was fined $1 million for the blatant team orders at Austria 2002, and the FIA banned team orders from the 2003 season onwards.",
        es: "Ferrari fue multado con $1 millón por las órdenes de equipo flagrantes en Austria 2002, y la FIA prohibió las órdenes de equipo desde la temporada 2003 en adelante.",
        de: "Ferrari wurde mit 1 Million Dollar für die offensichtlichen Teamorders in Österreich 2002 bestraft, und die FIA verbot Teamorders ab der Saison 2003.",
        nl: "Ferrari kreeg een boete van $1 miljoen voor de flagrante teamorders in Oostenrijk 2002, en de FIA verbood teamorders vanaf het 2003-seizoen."
      }
    },
    {
      question: {
        en: "At which race did Alonso and Hamilton have the 'Spygate' related tensions in 2007?",
        es: "¿En qué carrera tuvieron Alonso y Hamilton las tensiones relacionadas con 'Spygate' en 2007?",
        de: "Bei welchem Rennen hatten Alonso und Hamilton die 'Spygate'-bezogenen Spannungen 2007?",
        nl: "Bij welke race hadden Alonso en Hamilton de 'Spygate'-gerelateerde spanningen in 2007?"
      },
      options: [
        "Multiple races throughout the season",
        "Only at Hungarian GP",
        "Only at Brazilian GP finale",
        "Only at Monaco GP"
      ],
      correct: 0,
      explanation: {
        en: "The Alonso-Hamilton tensions and Spygate scandal affected McLaren throughout 2007, with flashpoints at Spain, Monaco, Hungary, and continuing to season end.",
        es: "Las tensiones Alonso-Hamilton y el escándalo Spygate afectaron a McLaren durante todo 2007, con puntos críticos en España, Mónaco, Hungría y continuando hasta el final de la temporada.",
        de: "Die Alonso-Hamilton-Spannungen und der Spygate-Skandal betrafen McLaren während 2007, mit Brennpunkten in Spanien, Monaco, Ungarn und bis Saisonende.",
        nl: "De Alonso-Hamilton spanningen en Spygate-schandaal troffen McLaren gedurende 2007, met brandpunten in Spanje, Monaco, Hongarije en doorlopend tot seizoendeinde."
      }
    },
    {
      question: {
        en: "What was notable about Villeneuve and Schumacher's approach to the 1997 championship decider?",
        es: "¿Qué fue notable sobre el enfoque de Villeneuve y Schumacher para el desempate del campeonato de 1997?",
        de: "Was war bemerkenswert an Villeneuves und Schumachers Ansatz zum Meisterschaftsentscheid 1997?",
        nl: "Wat was opmerkelijk aan Villeneuve en Schumachers aanpak van de 1997-kampioenschapsbeslisser?"
      },
      options: [
        "Schumacher had 1-point lead entering Jerez finale",
        "Villeneuve had 5-point advantage",
        "They were tied on points",
        "Schumacher had already secured the title"
      ],
      correct: 0,
      explanation: {
        en: "Schumacher led Villeneuve by 1 point entering Jerez 1997, leading to Schumacher's desperate move to eliminate Villeneuve which failed and cost him the championship.",
        es: "Schumacher lideraba a Villeneuve por 1 punto entrando a Jerez 1997, llevando al movimiento desesperado de Schumacher para eliminar a Villeneuve que falló y le costó el campeonato.",
        de: "Schumacher führte Villeneuve mit 1 Punkt vor Jerez 1997, was zu Schumachers verzweifeltem Versuch führte Villeneuve zu eliminieren, der scheiterte und ihm die Meisterschaft kostete.",
        nl: "Schumacher leidde Villeneuve met 1 punt voor Jerez 1997, leidend tot Schumachers wanhopige poging Villeneuve te elimineren die faalde en hem het kampioenschap kostte."
      }
    },
    {
      question: {
        en: "How many races did Webber and Vettel finish 1-2 together at Red Bull?",
        es: "¿Cuántas carreras terminaron Webber y Vettel 1-2 juntos en Red Bull?",
        de: "Wie viele Rennen beendeten Webber und Vettel 1-2 zusammen bei Red Bull?",
        nl: "Hoeveel races finishten Webber en Vettel 1-2 samen bij Red Bull?"
      },
      options: [
        "Over 20 times (2009-2013)",
        "Exactly 10 times",
        "Only 5 times",
        "Never finished 1-2"
      ],
      correct: 0,
      explanation: {
        en: "Webber and Vettel finished 1-2 (in either order) over 20 times during their Red Bull partnership 2009-2013, dominating the era.",
        es: "Webber y Vettel terminaron 1-2 (en cualquier orden) más de 20 veces durante su asociación en Red Bull 2009-2013, dominando la era.",
        de: "Webber und Vettel beendeten über 20 Mal 1-2 (in beliebiger Reihenfolge) während ihrer Red Bull-Partnerschaft 2009-2013 und dominierten die Ära.",
        nl: "Webber en Vettel finishten meer dan 20 keer 1-2 (in willekeurige volgorde) tijdens hun Red Bull-partnerschap 2009-2013, het tijdperk dominerend."
      }
    },
    {
      question: {
        en: "What incident occurred between Perez and Ocon at Singapore 2018?",
        es: "¿Qué incidente ocurrió entre Perez y Ocon en Singapur 2018?",
        de: "Welcher Vorfall ereignete sich zwischen Perez und Ocon in Singapur 2018?",
        nl: "Welk incident vond plaats tussen Perez en Ocon in Singapore 2018?"
      },
      options: [
        "They collided multiple times while Force India teammates",
        "Ocon (Racing Point) blocked Perez aggressively",
        "No major incident - different teams by then",
        "Perez pushed Ocon into the wall"
      ],
      correct: 2,
      explanation: {
        en: "By Singapore 2018, Ocon and Perez were no longer Force India teammates. Their major clashes were in 2017 when both at Force India (Canada, Belgium incidents).",
        es: "Para Singapur 2018, Ocon y Perez ya no eran compañeros en Force India. Sus principales choques fueron en 2017 cuando ambos en Force India (incidentes Canadá, Bélgica).",
        de: "Bis Singapur 2018 waren Ocon und Perez keine Force India-Teamkollegen mehr. Ihre großen Zusammenstöße waren 2017 als beide bei Force India (Vorfälle Kanada, Belgien).",
        nl: "Tegen Singapore 2018 waren Ocon en Perez geen Force India-teamgenoten meer. Hun grote botsingen waren in 2017 toen beiden bij Force India (Canada, België-incidenten)."
      }
    },
    {
      question: {
        en: "Which race featured the famous 'Is Palmer okay?' radio message?",
        es: "¿Qué carrera presentó el famoso mensaje de radio '¿Palmer está bien?'?",
        de: "Welches Rennen zeigte die berühmte 'Ist Palmer okay?'-Funknachricht?",
        nl: "Welke race toonde het beroemde 'Is Palmer oké?' radiobericht?"
      },
      options: [
        "Not a rivalry incident - Hulkenberg asking about Palmer",
        "Palmer and Hulkenberg collided",
        "Palmer asking about Hulkenberg after crash",
        "Team asking both drivers"
      ],
      correct: 0,
      explanation: {
        en: "This wasn't a rivalry moment - Hulkenberg asked 'Is Palmer okay?' after Palmer crashed at Spa 2017, showing teammate concern despite their performance gap.",
        es: "Esto no fue un momento de rivalidad - Hulkenberg preguntó '¿Palmer está bien?' después de que Palmer se estrellara en Spa 2017, mostrando preocupación de compañero a pesar de su brecha de rendimiento.",
        de: "Dies war kein Rivalitätsmoment - Hulkenberg fragte 'Ist Palmer okay?' nachdem Palmer in Spa 2017 crashte, zeigte Teamkollegen-Sorge trotz ihrer Leistungslücke.",
        nl: "Dit was geen rivaliteitsmoment - Hulkenberg vroeg 'Is Palmer oké?' nadat Palmer crashte in Spa 2017, teamgenoot-zorg tonend ondanks hun prestatiekloof."
      }
    },
    {
      question: {
        en: "At which race did Hamilton and Rosberg have their 'ice-cool' press conference moment?",
        es: "¿En qué carrera tuvieron Hamilton y Rosberg su momento de conferencia de prensa 'helado'?",
        de: "Bei welchem Rennen hatten Hamilton und Rosberg ihren 'eiskalten' Pressekonferenz-Moment?",
        nl: "Bij welke race hadden Hamilton en Rosberg hun 'ijskoude' persconferentie-moment?"
      },
      options: [
        "Multiple tense conferences throughout 2014-2016",
        "Only at Abu Dhabi 2016",
        "Only at Spa 2014",
        "Only at Monaco 2014"
      ],
      correct: 0,
      explanation: {
        en: "Hamilton and Rosberg had many icy press conferences during 2014-2016, particularly after incidents at Spa 2014, Monaco 2014, Austria 2016, and throughout 2016.",
        es: "Hamilton y Rosberg tuvieron muchas conferencias de prensa heladas durante 2014-2016, particularmente después de incidentes en Spa 2014, Mónaco 2014, Austria 2016 y durante 2016.",
        de: "Hamilton und Rosberg hatten viele eisige Pressekonferenzen während 2014-2016, besonders nach Vorfällen in Spa 2014, Monaco 2014, Österreich 2016 und während 2016.",
        nl: "Hamilton en Rosberg hadden vele ijzige persconferenties tijdens 2014-2016, vooral na incidenten in Spa 2014, Monaco 2014, Oostenrijk 2016 en gedurende 2016."
      }
    },
    {
      question: {
        en: "What happened at Spa 2014 between Hamilton and Rosberg?",
        es: "¿Qué pasó en Spa 2014 entre Hamilton y Rosberg?",
        de: "Was geschah in Spa 2014 zwischen Hamilton und Rosberg?",
        nl: "Wat gebeurde er in Spa 2014 tussen Hamilton en Rosberg?"
      },
      options: [
        "Rosberg's front wing punctured Hamilton's tire",
        "Hamilton brake-tested Rosberg",
        "Both crashed at Eau Rouge",
        "Clean race with no incidents"
      ],
      correct: 0,
      explanation: {
        en: "At Spa 2014, Rosberg's front wing punctured Hamilton's tire during a battle, causing Hamilton to retire. Rosberg later admitted not avoiding the collision.",
        es: "En Spa 2014, el alerón delantero de Rosberg pinchó el neumático de Hamilton durante una batalla, causando que Hamilton se retirara. Rosberg luego admitió no evitar la colisión.",
        de: "In Spa 2014 durchstach Rosbergs Frontflügel Hamiltons Reifen während eines Kampfes, wodurch Hamilton ausfiel. Rosberg gab später zu, die Kollision nicht vermieden zu haben.",
        nl: "In Spa 2014 prikte Rosbergs voorvleugel Hamiltons band tijdens gevecht, waardoor Hamilton uitviel. Rosberg gaf later toe de botsing niet te hebben vermeden."
      }
    },
    {
      question: {
        en: "Which teammates had the 'Seb 5 Kimi 7' strategy controversy?",
        es: "¿Qué compañeros tuvieron la controversia de estrategia 'Seb 5 Kimi 7'?",
        de: "Welche Teamkollegen hatten die 'Seb 5 Kimi 7'-Strategie-Kontroverse?",
        nl: "Welke teamgenoten hadden de 'Seb 5 Kimi 7' strategie-controverse?"
      },
      options: [
        "Vettel and Räikkönen at Ferrari",
        "Webber and Vettel at Red Bull",
        "Hamilton and Bottas at Mercedes",
        "Alonso and Massa at Ferrari"
      ],
      correct: 0,
      explanation: {
        en: "At various Ferrari races 2015-2018, coded messages like 'Seb 5 Kimi 7' referred to target lap times, sometimes used to orchestrate positions between Vettel and Räikkönen.",
        es: "En varias carreras de Ferrari 2015-2018, mensajes codificados como 'Seb 5 Kimi 7' se referían a tiempos por vuelta objetivo, a veces usados para orquestar posiciones entre Vettel y Räikkönen.",
        de: "Bei verschiedenen Ferrari-Rennen 2015-2018 bezogen sich kodierte Nachrichten wie 'Seb 5 Kimi 7' auf Zielrundenzeiten, manchmal verwendet um Positionen zwischen Vettel und Räikkönen zu orchestrieren.",
        nl: "Bij verschillende Ferrari-races 2015-2018 verwezen gecodeerde berichten zoals 'Seb 5 Kimi 7' naar doelronde-tijden, soms gebruikt om posities te orkestreren tussen Vettel en Räikkönen."
      }
    },
    {
      question: {
        en: "What was significant about the 2021 title decider at Abu Dhabi?",
        es: "¿Qué fue significativo sobre el desempate del título 2021 en Abu Dhabi?",
        de: "Was war bedeutsam am Titelentscheid 2021 in Abu Dhabi?",
        nl: "Wat was betekenisvol over de 2021-titelbeslisser in Abu Dhabi?"
      },
      options: [
        "Controversial safety car restart gave Verstappen the chance to overtake Hamilton",
        "Hamilton dominated from start to finish",
        "Both drivers crashed together",
        "Race was stopped and restarted"
      ],
      correct: 0,
      explanation: {
        en: "At Abu Dhabi 2021, a controversial late safety car restart allowed Verstappen on fresh tires to overtake Hamilton on the final lap for the championship.",
        es: "En Abu Dhabi 2021, un controvertido reinicio tardío del coche de seguridad permitió a Verstappen con neumáticos frescos adelantar a Hamilton en la última vuelta por el campeonato.",
        de: "In Abu Dhabi 2021 ermöglichte ein kontroverser später Safety-Car-Neustart Verstappen auf frischen Reifen Hamilton in der letzten Runde für die Meisterschaft zu überholen.",
        nl: "In Abu Dhabi 2021 stelde een controversiële late safety car-herstart Verstappen op verse banden in staat Hamilton in de laatste ronde in te halen voor het kampioenschap."
      }
    },
    {
      question: {
        en: "How did the 1989 championship end between Senna and Prost?",
        es: "¿Cómo terminó el campeonato de 1989 entre Senna y Prost?",
        de: "Wie endete die Meisterschaft 1989 zwischen Senna und Prost?",
        nl: "Hoe eindigde het 1989-kampioenschap tussen Senna en Prost?"
      },
      options: [
        "Prost won after Senna was disqualified from Suzuka",
        "Senna won despite the Suzuka collision",
        "They tied on points",
        "Neither competed at the finale"
      ],
      correct: 0,
      explanation: {
        en: "Prost won the 1989 championship after Senna was disqualified from Suzuka for cutting the chicane after their collision, giving Prost an insurmountable points lead.",
        es: "Prost ganó el campeonato de 1989 después de que Senna fuera descalificado de Suzuka por cortar la chicana tras su colisión, dando a Prost una ventaja de puntos insuperable.",
        de: "Prost gewann die 1989-Meisterschaft nachdem Senna von Suzuka disqualifiziert wurde für das Abkürzen der Schikane nach ihrer Kollision, gab Prost eine uneinholbare Punkteführung.",
        nl: "Prost won het 1989-kampioenschap nadat Senna gediskwalificeerd werd van Suzuka voor het afsnijden van de chicane na hun botsing, Prost een onoverkomelijke puntenleidend gevend."
      }
    },
    {
      question: {
        en: "What made the Hill-Schumacher rivalry intense in 1995?",
        es: "¿Qué hizo intensa la rivalidad Hill-Schumacher en 1995?",
        de: "Was machte die Hill-Schumacher-Rivalität 1995 intensiv?",
        nl: "Wat maakte de Hill-Schumacher rivaliteit intens in 1995?"
      },
      options: [
        "Lingering tensions from 1994 Adelaide collision",
        "They were teammates causing conflict",
        "Hill accused Schumacher of cheating",
        "No rivalry - they were friendly"
      ],
      correct: 0,
      explanation: {
        en: "The 1995 rivalry was intense due to lingering tensions from the controversial 1994 Adelaide collision that decided that year's championship in Schumacher's favor.",
        es: "La rivalidad de 1995 fue intensa debido a las tensiones persistentes de la controvertida colisión de Adelaide 1994 que decidió el campeonato de ese año a favor de Schumacher.",
        de: "Die 1995-Rivalität war intensiv aufgrund anhaltender Spannungen von der kontroversen Adelaide 1994-Kollision die die Meisterschaft jenes Jahres zugunsten Schumachers entschied.",
        nl: "De 1995-rivaliteit was intens door aanhoudende spanningen van de controversiële Adelaide 1994-botsing die dat jaar's kampioenschap in Schumachers voordeel besliste."
      }
    },
    {
      question: {
        en: "At which race did Bottas let Hamilton pass for the win in 2018?",
        es: "¿En qué carrera dejó Bottas pasar a Hamilton para la victoria en 2018?",
        de: "Bei welchem Rennen ließ Bottas Hamilton 2018 zum Sieg vorbei?",
        nl: "Bij welke race liet Bottas Hamilton voorbij voor de overwinning in 2018?"
      },
      options: [
        "Russian GP (Sochi)",
        "Hungarian GP",
        "German GP",
        "Belgian GP"
      ],
      correct: 0,
      explanation: {
        en: "At Russia 2018, Bottas was leading but Mercedes ordered him to let Hamilton past for the championship fight, Bottas complying with 'for the team'.",
        es: "En Rusia 2018, Bottas estaba liderando pero Mercedes le ordenó dejar pasar a Hamilton por la lucha del campeonato, Bottas cumpliendo con 'por el equipo'.",
        de: "In Russland 2018 führte Bottas aber Mercedes befahl ihm Hamilton wegen des Meisterschaftskampfs vorbeizulassen, Bottas fügte sich mit 'fürs Team'.",
        nl: "In Rusland 2018 leidde Bottas maar Mercedes beval hem Hamilton voorbij te laten voor de kampioenschapsstrijd, Bottas voldeed met 'voor het team'."
      }
    },
    {
      question: {
        en: "Which circuit saw Mansell and Piquet's most famous battle in 1986?",
        es: "¿En qué circuito vieron la batalla más famosa de Mansell y Piquet en 1986?",
        de: "Auf welcher Strecke sahen Mansells und Piquets berühmtesten Kampf 1986?",
        nl: "Op welk circuit zagen Mansell en Piquet's beroemdste gevecht in 1986?"
      },
      options: [
        "British GP (Brands Hatch/Silverstone)",
        "Monaco GP",
        "Brazilian GP",
        "Australian GP (Adelaide)"
      ],
      correct: 0,
      explanation: {
        en: "The 1986 British GP at Brands Hatch featured intense battles between Williams teammates Mansell and Piquet, with Mansell winning his home race.",
        es: "El GP británico de 1986 en Brands Hatch presentó batallas intensas entre los compañeros de Williams Mansell y Piquet, con Mansell ganando su carrera local.",
        de: "Der Britische GP 1986 in Brands Hatch zeigte intensive Kämpfe zwischen Williams-Teamkollegen Mansell und Piquet, wobei Mansell sein Heimrennen gewann.",
        nl: "De Britse GP 1986 in Brands Hatch toonde intense gevechten tussen Williams-teamgenoten Mansell en Piquet, met Mansell zijn thuisrace winnend."
      }
    },
    {
      question: {
        en: "What was the outcome of the Mercedes driver tensions in 2016?",
        es: "¿Cuál fue el resultado de las tensiones entre pilotos de Mercedes en 2016?",
        de: "Was war das Ergebnis der Mercedes-Fahrer-Spannungen 2016?",
        nl: "Wat was de uitkomst van de Mercedes-coureur spanningen in 2016?"
      },
      options: [
        "Rosberg won the championship then immediately retired",
        "Hamilton won easily without drama",
        "Both left Mercedes after the season",
        "They reconciled and remained teammates"
      ],
      correct: 0,
      explanation: {
        en: "Rosberg won the 2016 championship after an intense battle with Hamilton, then shocked everyone by announcing his retirement just days later.",
        es: "Rosberg ganó el campeonato de 2016 después de una batalla intensa con Hamilton, luego sorprendió a todos anunciando su retiro solo días después.",
        de: "Rosberg gewann die 2016-Meisterschaft nach intensivem Kampf mit Hamilton, schockierte dann alle mit der Ankündigung seines Rücktritts nur Tage später.",
        nl: "Rosberg won het 2016-kampioenschap na een intense strijd met Hamilton, schokten toen iedereen door zijn pensionering aan te kondigen slechts dagen later."
      }
    },
    {
      question: {
        en: "Which Red Bull incident led to Christian Horner's 'Boys, this is unacceptable' radio message?",
        es: "¿Qué incidente de Red Bull llevó al mensaje de radio de Christian Horner 'Chicos, esto es inaceptable'?",
        de: "Welcher Red Bull-Vorfall führte zu Christian Horners 'Jungs, das ist inakzeptabel'-Funknachricht?",
        nl: "Welk Red Bull-incident leidde tot Christian Horners 'Jongens, dit is onacceptabel' radiobericht?"
      },
      options: [
        "Verstappen-Ricciardo Azerbaijan 2018 collision",
        "Vettel-Webber Turkey 2010 collision",
        "Multi 21 Malaysia 2013",
        "Verstappen-Gasly battle at Monaco"
      ],
      correct: 0,
      explanation: {
        en: "At Azerbaijan 2018, after Verstappen and Ricciardo collided and retired both cars, Horner's immediate reaction was 'Boys, this is just unacceptable.'",
        es: "En Azerbaiyán 2018, después de que Verstappen y Ricciardo chocaron y retiraron ambos coches, la reacción inmediata de Horner fue 'Chicos, esto es simplemente inaceptable.'",
        de: "In Aserbaidschan 2018, nachdem Verstappen und Ricciardo kollidierten und beide Autos ausfielen, war Horners sofortige Reaktion 'Jungs, das ist einfach inakzeptabel.'",
        nl: "In Azerbeidzjan 2018, nadat Verstappen en Ricciardo botsten en beide auto's uitvielen, was Horners directe reactie 'Jongens, dit is gewoon onacceptabel.'"
      }
    },
    {
      question: {
        en: "What was notable about the 2007 McLaren drivers' championship outcome?",
        es: "¿Qué fue notable sobre el resultado del campeonato de pilotos de McLaren 2007?",
        de: "Was war bemerkenswert am McLaren-Fahrermeisterschaftsergebnis 2007?",
        nl: "Wat was opmerkelijk over de McLaren-rijderskampioenschap uitkomst 2007?"
      },
      options: [
        "Both Hamilton and Alonso lost to Räikkönen by 1 point",
        "Hamilton won his first championship",
        "Alonso won his third championship",
        "They tied for the championship"
      ],
      correct: 0,
      explanation: {
        en: "Despite their dominant car, McLaren teammates Hamilton and Alonso both lost the 2007 championship to Ferrari's Räikkönen by 1 point due to their internal rivalry.",
        es: "A pesar de su coche dominante, los compañeros de McLaren Hamilton y Alonso ambos perdieron el campeonato 2007 ante Räikkönen de Ferrari por 1 punto debido a su rivalidad interna.",
        de: "Trotz ihres dominanten Autos verloren McLaren-Teamkollegen Hamilton und Alonso beide die 2007-Meisterschaft an Ferraris Räikkönen mit 1 Punkt aufgrund ihrer internen Rivalität.",
        nl: "Ondanks hun dominante auto verloren McLaren-teamgenoten Hamilton en Alonso beiden het 2007-kampioenschap aan Ferrari's Räikkönen met 1 punt door hun interne rivaliteit."
      }
    },
    {
      question: {
        en: "At which race did Vettel and Webber collide in 2010, with Vettel retiring?",
        es: "¿En qué carrera chocaron Vettel y Webber en 2010, con Vettel retirándose?",
        de: "Bei welchem Rennen kollidierten Vettel und Webber 2010, wobei Vettel ausfiel?",
        nl: "Bij welke race botsten Vettel en Webber in 2010, met Vettel uitvallend?"
      },
      options: [
        "Turkish GP (Istanbul)",
        "Malaysian GP",
        "Korean GP",
        "Abu Dhabi GP"
      ],
      correct: 0,
      explanation: {
        en: "At Turkey 2010, Vettel and Webber collided while battling for the lead, with Vettel retiring and Webber finishing 3rd, damaging both their championships.",
        es: "En Turquía 2010, Vettel y Webber chocaron mientras luchaban por el liderato, con Vettel retirándose y Webber terminando 3º, dañando ambos sus campeonatos.",
        de: "In der Türkei 2010 kollidierten Vettel und Webber beim Kampf um die Führung, Vettel fiel aus und Webber wurde 3., beschädigte beide ihre Meisterschaften.",
        nl: "In Turkije 2010 botsten Vettel en Webber terwijl ze vochten om de leiding, met Vettel uitvallend en Webber 3e eindigend, beide hun kampioenschappen beschadigend."
      }
    },
    {
      question: {
        en: "Which race featured Alonso's famous 'GP2 engine' radio complaint about McLaren-Honda?",
        es: "¿Qué carrera presentó la famosa queja de radio de Alonso 'motor GP2' sobre McLaren-Honda?",
        de: "Welches Rennen zeigte Alonsos berühmte 'GP2-Motor'-Funkbeschwerde über McLaren-Honda?",
        nl: "Welke race toonde Alonso's beroemde 'GP2-motor' radioklaag over McLaren-Honda?"
      },
      options: [
        "Japanese GP 2015 (Suzuka)",
        "Australian GP 2015",
        "Monaco GP 2016",
        "Brazilian GP 2015"
      ],
      correct: 0,
      explanation: {
        en: "At Suzuka 2015, Alonso famously complained over radio 'GP2 engine, GP2!' about the underpowered McLaren-Honda, highlighting their partnership struggles.",
        es: "En Suzuka 2015, Alonso se quejó famosamente por radio '¡Motor GP2, GP2!' sobre el McLaren-Honda sin potencia, destacando las luchas de su asociación.",
        de: "In Suzuka 2015 beschwerte sich Alonso berühmt über Funk 'GP2-Motor, GP2!' über den untermotorisierten McLaren-Honda, hob ihre Partnerschaftsschwierigkeiten hervor.",
        nl: "In Suzuka 2015 klaagde Alonso beroemd over de radio 'GP2-motor, GP2!' over de ondergepowerde McLaren-Honda, hun partnerschap-worstelingen benadrukkend."
      }
    },
    {
      question: {
        en: "What happened between Grosjean and Magnussen at Haas throughout 2018-2019?",
        es: "¿Qué pasó entre Grosjean y Magnussen en Haas durante 2018-2019?",
        de: "Was geschah zwischen Grosjean und Magnussen bei Haas während 2018-2019?",
        nl: "Wat gebeurde er tussen Grosjean en Magnussen bij Haas gedurende 2018-2019?"
      },
      options: [
        "Multiple on-track incidents and tense team atmosphere",
        "Perfect harmony with no issues",
        "Only one minor incident",
        "They rarely raced near each other"
      ],
      correct: 0,
      explanation: {
        en: "Grosjean and Magnussen had multiple on-track clashes (Austria, Britain 2018) and created a tense Haas atmosphere with their aggressive racing against each other.",
        es: "Grosjean y Magnussen tuvieron múltiples choques en pista (Austria, Gran Bretaña 2018) y crearon una atmósfera tensa en Haas con sus carreras agresivas entre sí.",
        de: "Grosjean und Magnussen hatten mehrere Zusammenstöße auf der Strecke (Österreich, Großbritannien 2018) und schufen eine angespannte Haas-Atmosphäre mit ihrem aggressiven Gegeneinander-Fahren.",
        nl: "Grosjean en Magnussen hadden meerdere botsingen op de baan (Oostenrijk, Groot-Brittannië 2018) en creëerden een gespannen Haas-sfeer met hun agressief tegen elkaar racen."
      }
    },
    {
      question: {
        en: "How did McLaren handle the Hamilton-Alonso situation after 2007?",
        es: "¿Cómo manejó McLaren la situación Hamilton-Alonso después de 2007?",
        de: "Wie handhabte McLaren die Hamilton-Alonso-Situation nach 2007?",
        nl: "Hoe ging McLaren om met de Hamilton-Alonso situatie na 2007?"
      },
      options: [
        "Alonso left McLaren, Hamilton stayed long-term",
        "Hamilton left McLaren immediately",
        "Both stayed for many more years",
        "McLaren fired both drivers"
      ],
      correct: 0,
      explanation: {
        en: "After the toxic 2007 season, Alonso left McLaren to return to Renault, while Hamilton stayed at McLaren until 2012 before moving to Mercedes.",
        es: "Después de la tóxica temporada 2007, Alonso dejó McLaren para volver a Renault, mientras Hamilton permaneció en McLaren hasta 2012 antes de mudarse a Mercedes.",
        de: "Nach der toxischen Saison 2007 verließ Alonso McLaren um zu Renault zurückzukehren, während Hamilton bis 2012 bei McLaren blieb bevor er zu Mercedes wechselte.",
        nl: "Na het toxische 2007-seizoen verliet Alonso McLaren om terug te keren naar Renault, terwijl Hamilton bij McLaren bleef tot 2012 voor de overstap naar Mercedes."
      }
    },
    {
      question: {
        en: "What was the points gap between Hamilton and Verstappen entering the 2021 finale?",
        es: "¿Cuál fue la brecha de puntos entre Hamilton y Verstappen entrando a la final de 2021?",
        de: "Was war der Punkteabstand zwischen Hamilton und Verstappen vor dem 2021-Finale?",
        nl: "Wat was het puntenverschil tussen Hamilton en Verstappen voor de 2021-finale?"
      },
      options: [
        "Tied on points (369.5 each)",
        "Hamilton ahead by 8 points",
        "Verstappen ahead by 8 points",
        "Hamilton ahead by 14 points"
      ],
      correct: 2,
      explanation: {
        en: "Verstappen led Hamilton by 8 points entering Abu Dhabi 2021, meaning Hamilton needed to win with Verstappen finishing below 2nd to take the title.",
        es: "Verstappen lideraba a Hamilton por 8 puntos entrando a Abu Dhabi 2021, significando que Hamilton necesitaba ganar con Verstappen terminando debajo del 2º para tomar el título.",
        de: "Verstappen führte Hamilton mit 8 Punkten vor Abu Dhabi 2021, was bedeutete Hamilton musste gewinnen mit Verstappen unter Platz 2 um den Titel zu holen.",
        nl: "Verstappen leidde Hamilton met 8 punten voor Abu Dhabi 2021, wat betekende Hamilton moest winnen met Verstappen eindigend onder 2e om de titel te pakken."
      }
    },
    {
      question: {
        en: "Which teammate pairing had the phrase 'Valtteri, it's James' become famous?",
        es: "¿Qué pareja de compañeros hizo famosa la frase 'Valtteri, aquí James'?",
        de: "Bei welchem Teamkollegen-Paar wurde der Satz 'Valtteri, hier ist James' berühmt?",
        nl: "Bij welke teamgenoot-koppeling werd de zin 'Valtteri, dit is James' beroemd?"
      },
      options: [
        "Bottas and Hamilton (Mercedes)",
        "Massa and Alonso (Ferrari)",
        "Webber and Vettel (Red Bull)",
        "Rosberg and Hamilton (Mercedes)"
      ],
      correct: 0,
      explanation: {
        en: "'Valtteri, it's James' became famous when Mercedes strategist James Vowles radioed Bottas to let Hamilton pass at Russia 2018, symbolizing Bottas's support role.",
        es: "'Valtteri, aquí James' se hizo famoso cuando el estratega de Mercedes James Vowles radioed a Bottas para dejar pasar a Hamilton en Rusia 2018, simbolizando el papel de apoyo de Bottas.",
        de: "'Valtteri, hier ist James' wurde berühmt als Mercedes-Stratege James Vowles Bottas funkte Hamilton vorbeizulassen in Russland 2018, symbolisierte Bottas' Unterstützerrolle.",
        nl: "'Valtteri, dit is James' werd beroemd toen Mercedes-strateeg James Vowles Bottas radioed Hamilton voorbij te laten in Rusland 2018, Bottas' ondersteuningsrol symboliserend."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  }
  return questions;
})();
