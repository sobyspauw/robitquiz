const level5 = (function() {
  const questions = [
    {
      question: {
        en: "What specific incident at the 2010 Turkish GP caused the Vettel-Webber relationship to deteriorate beyond repair?",
        es: "¿Qué incidente específico en el GP de Turquía 2010 causó que la relación Vettel-Webber se deteriorara sin remedio?",
        de: "Welcher spezifische Vorfall beim Türkei-GP 2010 ließ die Vettel-Webber-Beziehung irreparabel zerbrechen?",
        nl: "Welk specifiek incident bij de Turkse GP 2010 zorgde ervoor dat de Vettel-Webber relatie onherstelbaar verslechterde?"
      },
      options: [
        "Vettel moved right into Webber while Webber was overtaking",
        "Webber deliberately crashed into Vettel",
        "Team orders favoring Vettel",
        "Webber refused to let Vettel past"
      ],
      correct: 0,
      explanation: {
        en: "At Turkey 2010, while running 1-2, Webber was overtaking Vettel on the outside when Vettel moved right into him, causing a collision. Both Red Bulls crashed out. Webber was furious, believing Vettel didn't respect him as an equal competitor despite Webber leading the championship at that point.",
        es: "En Turquía 2010, corriendo 1-2, Webber estaba adelantando a Vettel por fuera cuando Vettel se movió hacia la derecha contra él, causando una colisión. Ambos Red Bulls se estrellaron. Webber estaba furioso, creyendo que Vettel no lo respetaba como competidor igual a pesar de que Webber lideraba el campeonato en ese momento.",
        de: "In der Türkei 2010, während sie 1-2 fuhren, überholte Webber Vettel außen, als Vettel nach rechts in ihn lenkte und eine Kollision verursachte. Beide Red Bulls crashten. Webber war wütend, glaubend Vettel respektiere ihn nicht als gleichwertigen Konkurrenten, obwohl Webber zu dem Zeitpunkt die Meisterschaft anführte.",
        nl: "Bij Turkije 2010, rijdend 1-2, was Webber Vettel aan de buitenkant aan het inhalen toen Vettel naar rechts in hem bewoog, een botsing veroorzakend. Beide Red Bulls crashten. Webber was woedend, gelovend dat Vettel hem niet respecteerde als gelijke concurrent ondanks dat Webber op dat moment het kampioenschap leidde."
      }
    },
    {
      question: {
        en: "How many times did race director Michael Masi override normal safety car procedures in the 2021 Abu Dhabi finale?",
        es: "¿Cuántas veces anuló el director de carrera Michael Masi los procedimientos normales del coche de seguridad en la final de Abu Dhabi 2021?",
        de: "Wie oft setzte Rennleiter Michael Masi normale Safety-Car-Prozeduren im Abu Dhabi-Finale 2021 außer Kraft?",
        nl: "Hoe vaak negeerde racedirecteur Michael Masi normale safety car-procedures in de 2021 Abu Dhabi finale?"
      },
      options: [
        "Multiple: lapped cars decision, then immediate restart",
        "Once only",
        "No overrides, followed all procedures",
        "Three separate times"
      ],
      correct: 0,
      explanation: {
        en: "Masi first told teams lapped cars would NOT unlap, then reversed this to allow only cars between Hamilton-Verstappen to unlap (not all lapped cars per regulations), then ordered safety car in 'this lap' instead of following lap. This unprecedented sequence gave Verstappen one lap on fresh softs vs Hamilton's old hards.",
        es: "Masi primero dijo a los equipos que los autos rezagados NO se desrezagarían, luego revirtió esto para permitir solo autos entre Hamilton-Verstappen desrezagarse (no todos según regulaciones), luego ordenó coche de seguridad en 'esta vuelta' en lugar de siguiente vuelta. Esta secuencia sin precedentes dio a Verstappen una vuelta en blandos frescos vs duros viejos de Hamilton.",
        de: "Masi sagte Teams zuerst, überrundete Autos würden NICHT entrundet, kehrte dies dann um, um nur Autos zwischen Hamilton-Verstappen zu entrunden (nicht alle laut Regeln), ordnete dann Safety Car 'diese Runde' statt Folgerunde an. Diese beispiellose Sequenz gab Verstappen eine Runde auf frischen Softs vs Hamiltons alte Hards.",
        nl: "Masi vertelde teams eerst dat achterstandsrondes NIET zouden ontronden, keerde dit toen om om alleen auto's tussen Hamilton-Verstappen te ontronden (niet alle volgens regels), beval toen safety car in 'deze ronde' in plaats van volgende ronde. Deze ongekende reeks gaf Verstappen één ronde op verse zachte vs Hamiltons oude harde banden."
      }
    },
    {
      question: {
        en: "What was Prost's FIA position that Senna claimed created bias in the 1989 Suzuka decision?",
        es: "¿Cuál era la posición de Prost en la FIA que Senna afirmó creó sesgo en la decisión de Suzuka 1989?",
        de: "Welche FIA-Position hatte Prost, die laut Senna Voreingenommenheit in der Suzuka-Entscheidung 1989 schuf?",
        nl: "Wat was Prost's FIA-positie waarvan Senna beweerde dat het vooringenomenheid creëerde in de Suzuka 1989 beslissing?"
      },
      options: [
        "FIA president was French (Jean-Marie Balestre)",
        "Prost was FIA advisor",
        "Prost owned FIA shares",
        "Prost's team principal was FIA member"
      ],
      correct: 0,
      explanation: {
        en: "FIA president Jean-Marie Balestre was French, same as Prost. After Suzuka 1989, Senna openly accused Balestre of favoritism toward Prost. The disqualification of Senna for cutting the chicane (despite Prost causing the collision) seemed to support this. Senna called it 'manipulation' and 'cheating.'",
        es: "El presidente de la FIA Jean-Marie Balestre era francés, igual que Prost. Después de Suzuka 1989, Senna acusó abiertamente a Balestre de favoritismo hacia Prost. La descalificación de Senna por cortar la chicana (a pesar de que Prost causó la colisión) parecía apoyar esto. Senna lo llamó 'manipulación' y 'trampa'.",
        de: "FIA-Präsident Jean-Marie Balestre war Franzose, genau wie Prost. Nach Suzuka 1989 beschuldigte Senna Balestre offen der Bevorzugung von Prost. Die Disqualifikation Sennas wegen Schneidens der Schikane (obwohl Prost die Kollision verursachte) schien dies zu unterstützen. Senna nannte es 'Manipulation' und 'Betrug'.",
        nl: "FIA-president Jean-Marie Balestre was Frans, net als Prost. Na Suzuka 1989 beschuldigde Senna Balestre openlijk van favoritisme jegens Prost. De diskwalificatie van Senna voor het afsnijden van de chicane (ondanks dat Prost de botsing veroorzaakte) leek dit te ondersteunen. Senna noemde het 'manipulatie' en 'bedrog'."
      }
    },
    {
      question: {
        en: "What was the exact gap when Glock was passed by Hamilton on the final corner of Brazil 2008?",
        es: "¿Cuál fue la diferencia exacta cuando Glock fue adelantado por Hamilton en la última curva de Brasil 2008?",
        de: "Was war der genaue Abstand, als Glock von Hamilton in der letzten Kurve von Brasilien 2008 überholt wurde?",
        nl: "Wat was de exacte kloof toen Glock werd ingehaald door Hamilton in de laatste bocht van Brazilië 2008?"
      },
      options: [
        "Hamilton needed exactly 5th place, passed Glock for P5",
        "Hamilton was already P5 before Glock",
        "Hamilton passed 3 cars including Glock",
        "Glock let Hamilton by deliberately"
      ],
      correct: 0,
      explanation: {
        en: "At Brazil 2008's final corner, Hamilton was P6. He needed P5 to beat Massa by exactly 1 point. Glock, on worn dry tires in rain, was struggling. Hamilton passed him at the final corner to take P5, winning the championship 98-97 points. Massa had already won the race and briefly thought he was champion.",
        es: "En la última curva de Brasil 2008, Hamilton era P6. Necesitaba P5 para vencer a Massa por exactamente 1 punto. Glock, con neumáticos secos gastados en lluvia, estaba luchando. Hamilton lo adelantó en la última curva para tomar P5, ganando el campeonato 98-97 puntos. Massa ya había ganado la carrera y pensó brevemente que era campeón.",
        de: "In der letzten Kurve von Brasilien 2008 war Hamilton P6. Er brauchte P5, um Massa mit genau 1 Punkt zu schlagen. Glock, auf abgefahrenen Slicks im Regen, kämpfte. Hamilton überholte ihn in der letzten Kurve für P5 und gewann die Meisterschaft 98-97 Punkte. Massa hatte bereits das Rennen gewonnen und dachte kurz, er sei Champion.",
        nl: "Bij Brazilië 2008's laatste bocht was Hamilton P6. Hij had P5 nodig om Massa met precies 1 punt te verslaan. Glock, op versleten droge banden in regen, worstelde. Hamilton passeerde hem bij de laatste bocht voor P5, winnend het kampioenschap 98-97 punten. Massa had al de race gewonnen en dacht kort kampioen te zijn."
      }
    },
    {
      question: {
        en: "What specific words did Webber use to describe Red Bull's preferential treatment of Vettel?",
        es: "¿Qué palabras específicas usó Webber para describir el trato preferencial de Red Bull hacia Vettel?",
        de: "Welche spezifischen Worte verwendete Webber, um Red Bulls bevorzugte Behandlung von Vettel zu beschreiben?",
        nl: "Welke specifieke woorden gebruikte Webber om Red Bull's preferentiële behandeling van Vettel te beschrijven?"
      },
      options: [
        "Called it 'not bad for a number two driver' sarcastically",
        "Said 'Vettel always gets priority'",
        "Called team 'biased and unfair'",
        "Said nothing publicly"
      ],
      correct: 0,
      explanation: {
        en: "After winning the 2010 British GP despite team giving Vettel preferential strategy, Webber sarcastically said over radio 'Not bad for a number two driver.' This became one of F1's most famous radio messages, publicly exposing Red Bull's favoritism. Team principal Horner was embarrassed by the public revelation.",
        es: "Después de ganar el GP británico 2010 a pesar de que el equipo dio a Vettel estrategia preferencial, Webber dijo sarcásticamente por radio 'No está mal para un piloto número dos.' Esto se convirtió en uno de los mensajes de radio más famosos de F1, exponiendo públicamente el favoritismo de Red Bull. El director del equipo Horner estaba avergonzado por la revelación pública.",
        de: "Nach dem Gewinn des britischen GP 2010, obwohl das Team Vettel bevorzugte Strategie gab, sagte Webber sarkastisch über Funk 'Nicht schlecht für einen Nummer-zwei-Fahrer.' Dies wurde eine der berühmtesten Funknachrichten der F1 und enthüllte Red Bulls Bevorzugung öffentlich. Teamchef Horner war peinlich berührt von der öffentlichen Enthüllung.",
        nl: "Na het winnen van de Britse GP 2010 ondanks dat het team Vettel preferentiële strategie gaf, zei Webber sarcastisch via radio 'Niet slecht voor een nummer twee coureur.' Dit werd een van F1's meest beroemde radioberichten, Red Bull's favoritisme publiekelijk onthullend. Teambaas Horner was in verlegenheid gebracht door de publieke onthulling."
      }
    },
    {
      question: {
        en: "How did Hamilton's silverware throwing incident reflect the 2016 Mercedes tension?",
        es: "¿Cómo reflejó el incidente de lanzamiento de trofeo de Hamilton la tensión de Mercedes 2016?",
        de: "Wie spiegelte Hamiltons Pokal-Wurf-Vorfall die Mercedes-Spannungen 2016 wider?",
        nl: "Hoe weerspiegelde Hamiltons trofee-gooien incident de 2016 Mercedes-spanning?"
      },
      options: [
        "Threw 2nd place cap at Rosberg on podium after losing race",
        "Threw trophy at team personnel",
        "Refused to attend podium ceremony",
        "Destroyed his own trophy"
      ],
      correct: 0,
      explanation: {
        en: "At the 2015 US GP (during their rivalry peak), Hamilton threw his 2nd place cap at Rosberg on the podium in frustration. Though this was 2015, it exemplified the intense personal animosity between them that continued through 2016. Their relationship became so strained Mercedes feared they'd refuse to work together.",
        es: "En el GP de EE.UU. 2015 (durante el pico de su rivalidad), Hamilton lanzó su gorra de 2º lugar a Rosberg en el podio frustrado. Aunque esto fue 2015, ejemplificó la intensa animosidad personal entre ellos que continuó hasta 2016. Su relación se volvió tan tensa que Mercedes temía que se negaran a trabajar juntos.",
        de: "Beim US-GP 2015 (während ihres Rivalitätshöhepunkts) warf Hamilton frustriert seine 2.-Platz-Kappe zu Rosberg auf dem Podium. Obwohl dies 2015 war, exemplifizierte es die intensive persönliche Feindseligkeit zwischen ihnen, die bis 2016 andauerte. Ihre Beziehung wurde so angespannt, dass Mercedes befürchtete, sie würden sich weigern zusammenzuarbeiten.",
        nl: "Bij de US GP 2015 (tijdens hun rivaliteitspiek) gooide Hamilton gefrustreerd zijn 2e plaats pet naar Rosberg op het podium. Hoewel dit 2015 was, exemplificeerde het de intense persoonlijke animositeit tussen hen die doorging tot 2016. Hun relatie werd zo gespannen dat Mercedes vreesde dat ze zouden weigeren samen te werken."
      }
    },
    {
      question: {
        en: "What was the championship points situation when Verstappen and Ricciardo crashed at Baku 2018?",
        es: "¿Cuál era la situación de puntos del campeonato cuando Verstappen y Ricciardo chocaron en Bakú 2018?",
        de: "Wie war die Meisterschaftspunkte-Situation, als Verstappen und Ricciardo in Baku 2018 crashten?",
        nl: "Wat was de kampioenschapspunten-situatie toen Verstappen en Ricciardo crashten bij Bakoe 2018?"
      },
      options: [
        "Fighting for 4th in race, not challenging for championship",
        "Both fighting for championship lead",
        "Ricciardo leading championship, Verstappen 2nd",
        "Both out of championship contention"
      ],
      correct: 0,
      explanation: {
        en: "At Baku 2018, Verstappen and Ricciardo were fighting for 4th place (not even podium) when they collided and both retired. Neither was challenging for the championship - they were just racing hard as teammates. This made the collision even more controversial, as they threw away points for nothing. Both blamed each other.",
        es: "En Bakú 2018, Verstappen y Ricciardo luchaban por el 4º lugar (ni siquiera podio) cuando chocaron y ambos se retiraron. Ninguno estaba desafiando por el campeonato - solo corrían duro como compañeros. Esto hizo la colisión aún más controvertida, ya que tiraron puntos por nada. Ambos se culparon mutuamente.",
        de: "In Baku 2018 kämpften Verstappen und Ricciardo um Platz 4 (nicht einmal Podium), als sie kollidierten und beide ausschieden. Keiner kämpfte um die Meisterschaft - sie fuhren nur hart als Teamkollegen. Dies machte die Kollision noch kontroverser, da sie Punkte für nichts wegwarfen. Beide gaben sich gegenseitig die Schuld.",
        nl: "Bij Bakoe 2018 vochten Verstappen en Ricciardo om de 4e plaats (niet eens podium) toen ze botsten en beiden uitvielen. Geen van beiden vocht voor het kampioenschap - ze raceten alleen hard als teamgenoten. Dit maakte de botsing nog controversiëler, omdat ze punten weggooiden voor niets. Beiden gaven elkaar de schuld."
      }
    },
    {
      question: {
        en: "What specific mechanical advantage did Schumacher's Ferrari have in the 2000 championship vs Häkkinen's McLaren?",
        es: "¿Qué ventaja mecánica específica tenía el Ferrari de Schumacher en el campeonato 2000 vs el McLaren de Häkkinen?",
        de: "Welchen spezifischen mechanischen Vorteil hatte Schumachers Ferrari in der Meisterschaft 2000 vs Häkkinens McLaren?",
        nl: "Welk specifiek mechanisch voordeel had Schumachers Ferrari in het 2000 kampioenschap vs Häkkinens McLaren?"
      },
      options: [
        "Ferrari had superior reliability after McLaren's early dominance",
        "Ferrari had much more horsepower",
        "Ferrari had better aerodynamics throughout",
        "McLaren had no advantages"
      ],
      correct: 0,
      explanation: {
        en: "In 2000, McLaren started with superior pace but suffered reliability issues. Ferrari, under technical director Ross Brawn, had superior reliability. Schumacher capitalized on McLaren's failures while Häkkinen lost crucial points to retirements. Schumacher won the title 108-89 points, ending Ferrari's 21-year championship drought.",
        es: "En 2000, McLaren comenzó con ritmo superior pero sufrió problemas de fiabilidad. Ferrari, bajo el director técnico Ross Brawn, tenía fiabilidad superior. Schumacher capitalizó los fallos de McLaren mientras Häkkinen perdió puntos cruciales por retiros. Schumacher ganó el título 108-89 puntos, terminando la sequía de campeonatos de 21 años de Ferrari.",
        de: "2000 startete McLaren mit überlegenem Tempo, litt aber unter Zuverlässigkeitsproblemen. Ferrari hatte unter Technischem Direktor Ross Brawn überlegene Zuverlässigkeit. Schumacher nutzte McLarens Ausfälle, während Häkkinen wichtige Punkte durch Ausfälle verlor. Schumacher gewann den Titel 108-89 Punkte, beendete Ferraris 21-jährige Meisterschaftsdürre.",
        nl: "In 2000 startte McLaren met superieur tempo maar leed onder betrouwbaarheidsproblemen. Ferrari, onder technisch directeur Ross Brawn, had superieure betrouwbaarheid. Schumacher profiteerde van McLarens uitvallen terwijl Häkkinen cruciale punten verloor door uitvallen. Schumacher won de titel 108-89 punten, Ferraris 21-jarige kampioenschapsdroogte beëindigend."
      }
    },
    {
      question: {
        en: "How did Alonso's 2007 McLaren contract specify his treatment vs Hamilton?",
        es: "¿Cómo especificaba el contrato de McLaren 2007 de Alonso su trato vs Hamilton?",
        de: "Wie spezifizierte Alonsos McLaren-Vertrag 2007 seine Behandlung vs Hamilton?",
        nl: "Hoe specificeerde Alonso's 2007 McLaren-contract zijn behandeling vs Hamilton?"
      },
      options: [
        "Alonso had #1 status contractually guaranteed",
        "Both had equal status contracts",
        "Hamilton had priority as McLaren junior",
        "No status was specified"
      ],
      correct: 0,
      explanation: {
        en: "Alonso's contract guaranteed him #1 driver status, including first choice on strategy. When rookie Hamilton matched/beat him, the team struggled to honor this while keeping Hamilton competitive. The Hungary incident stemmed from this: Alonso felt Hamilton broke agreements about alternating pole runs. The situation became untenable.",
        es: "El contrato de Alonso garantizaba estatus de piloto #1, incluyendo primera opción en estrategia. Cuando el novato Hamilton lo igualó/venció, el equipo luchó por honrar esto mientras mantenía a Hamilton competitivo. El incidente de Hungría surgió de esto: Alonso sintió que Hamilton rompió acuerdos sobre alternar intentos de pole. La situación se volvió insostenible.",
        de: "Alonsos Vertrag garantierte ihm #1-Fahrer-Status, einschließlich erster Wahl bei Strategie. Als Rookie Hamilton ihn erreichte/schlug, kämpfte das Team, dies zu honorieren und Hamilton wettbewerbsfähig zu halten. Der Ungarn-Vorfall entsprang daraus: Alonso fühlte, Hamilton brach Vereinbarungen über abwechselnde Pole-Runs. Die Situation wurde unhaltbar.",
        nl: "Alonso's contract garandeerde hem #1 coureur status, inclusief eerste keuze op strategie. Toen rookie Hamilton hem evenaarde/versloeg, worstelde het team dit te eren terwijl ze Hamilton competitief hielden. Het Hongaarse incident kwam hieruit voort: Alonso voelde dat Hamilton afspraken over alternerende pole runs brak. De situatie werd onhoudbaar."
      }
    },
    {
      question: {
        en: "What was the tire compound difference in the 2021 Abu Dhabi final lap shootout?",
        es: "¿Cuál fue la diferencia de compuesto de neumáticos en la última vuelta decisiva de Abu Dhabi 2021?",
        de: "Was war der Reifenmischungs-Unterschied im Abu Dhabi-Finale 2021 der letzten Runde?",
        nl: "Wat was het bandenmengsel-verschil in de 2021 Abu Dhabi laatste ronde shoot-out?"
      },
      options: [
        "Verstappen fresh soft (C5), Hamilton 40-lap old hard (C3)",
        "Both on same compound",
        "Verstappen medium, Hamilton soft",
        "Verstappen hard, Hamilton medium"
      ],
      correct: 0,
      explanation: {
        en: "The safety car period allowed Verstappen to pit for fresh soft (C5) tires while Hamilton stayed out on 40-lap old hard (C3) tires. With one lap remaining, this ~2 seconds per lap advantage made the outcome nearly inevitable. Mercedes couldn't pit Hamilton without losing track position, creating an impossible choice.",
        es: "El período de coche de seguridad permitió a Verstappen entrar para neumáticos blandos (C5) frescos mientras Hamilton se quedó con neumáticos duros (C3) de 40 vueltas. Con una vuelta restante, esta ventaja de ~2 segundos por vuelta hizo el resultado casi inevitable. Mercedes no podía hacer entrar a Hamilton sin perder posición en pista, creando una elección imposible.",
        de: "Die Safety-Car-Phase erlaubte Verstappen, für frische Soft-Reifen (C5) zu boxen, während Hamilton auf 40 Runden alten Hard-Reifen (C3) draußen blieb. Mit einer verbleibenden Runde machte dieser ~2 Sekunden pro Runde Vorteil das Ergebnis fast unvermeidlich. Mercedes konnte Hamilton nicht boxen ohne Trackposition zu verlieren, was eine unmögliche Wahl schuf.",
        nl: "De safety car-periode stelde Verstappen in staat te pitten voor verse zachte (C5) banden terwijl Hamilton buiten bleef op 40-ronden oude harde (C3) banden. Met één ronde te gaan maakte dit ~2 seconden per ronde voordeel de uitkomst bijna onvermijdelijk. Mercedes kon Hamilton niet laten pitten zonder trackpositie te verliezen, een onmogelijke keuze creërend."
      }
    },
    {
      question: {
        en: "What was Rosberg's psychological tactic that Hamilton called 'mind games' in their 2014-2016 rivalry?",
        es: "¿Cuál fue la táctica psicológica de Rosberg que Hamilton llamó 'juegos mentales' en su rivalidad 2014-2016?",
        de: "Was war Rosbergs psychologische Taktik, die Hamilton in ihrer Rivalität 2014-2016 'Gedankenspiele' nannte?",
        nl: "Wat was Rosberg's psychologische tactiek die Hamilton 'mind games' noemde in hun 2014-2016 rivaliteit?"
      },
      options: [
        "Rosberg hired sports psychologist, changed behavior patterns",
        "Rosberg trash-talked Hamilton publicly",
        "Rosberg used social media against Hamilton",
        "Rosberg sabotaged Hamilton's car"
      ],
      correct: 0,
      explanation: {
        en: "Rosberg hired sports psychologist and completely changed his approach, becoming more calculated and less emotional. He stopped socializing with Hamilton, analyzed every interaction, and focused purely on performance. Hamilton called these changes 'mind games' but Rosberg said it was necessary mental preparation to beat one of F1's greatest drivers.",
        es: "Rosberg contrató psicólogo deportivo y cambió completamente su enfoque, volviéndose más calculado y menos emocional. Dejó de socializar con Hamilton, analizó cada interacción y se enfocó puramente en rendimiento. Hamilton llamó estos cambios 'juegos mentales' pero Rosberg dijo que era preparación mental necesaria para vencer a uno de los mejores pilotos de F1.",
        de: "Rosberg stellte Sportpsychologen ein und änderte seinen Ansatz komplett, wurde berechnender und weniger emotional. Er hörte auf, mit Hamilton zu sozialisieren, analysierte jede Interaktion und konzentrierte sich rein auf Leistung. Hamilton nannte diese Änderungen 'Gedankenspiele', aber Rosberg sagte, es sei notwendige mentale Vorbereitung, um einen der größten F1-Fahrer zu schlagen.",
        nl: "Rosberg huurde sportpsycholoog in en veranderde zijn aanpak volledig, werd meer berekend en minder emotioneel. Hij stopte met socialiseren met Hamilton, analyseerde elke interactie en focuste puur op prestatie. Hamilton noemde deze veranderingen 'mind games' maar Rosberg zei dat het noodzakelijke mentale voorbereiding was om een van F1's grootste coureurs te verslaan."
      }
    },
    {
      question: {
        en: "What was the exact qualifying format manipulation Schumacher used at Monaco 2006?",
        es: "¿Cuál fue la manipulación exacta del formato de clasificación que Schumacher usó en Mónaco 2006?",
        de: "Was war die genaue Qualifying-Format-Manipulation, die Schumacher in Monaco 2006 verwendete?",
        nl: "Wat was de exacte kwalificatieformat-manipulatie die Schumacher gebruikte bij Monaco 2006?"
      },
      options: [
        "Stopped at Rascasse during his final Q3 lap with 'mistake'",
        "Blocked pit lane exit",
        "Used illegal fuel",
        "Crashed deliberately at Sainte Devote"
      ],
      correct: 0,
      explanation: {
        en: "In Q3's dying seconds with provisional pole, Schumacher 'locked up' at Rascasse, stopping on track and bringing yellow flags. This prevented rivals (especially Alonso) from improving. Stewards reviewed telemetry, found no lock-up, deemed it deliberate, and relegated him to pit lane start. Alonso got pole and won.",
        es: "En los últimos segundos de Q3 con pole provisional, Schumacher 'bloqueó' en Rascasse, deteniéndose en pista y sacando banderas amarillas. Esto impidió que rivales (especialmente Alonso) mejoraran. Los comisarios revisaron telemetría, no encontraron bloqueo, lo consideraron deliberado y lo relegaron a salida desde pit lane. Alonso obtuvo pole y ganó.",
        de: "In Q3s letzten Sekunden mit provisorischer Pole 'blockierte' Schumacher in Rascasse, stoppte auf der Strecke und löste gelbe Flaggen aus. Dies verhinderte Verbesserungen der Rivalen (besonders Alonso). Rennkommissare prüften Telemetrie, fanden keine Blockierung, hielten es für absichtlich und verwiesen ihn auf Boxengassen-Start. Alonso holte Pole und gewann.",
        nl: "In Q3's laatste seconden met voorlopige pole 'blokkeerde' Schumacher bij Rascasse, stopte op de baan en veroorzaakte gele vlaggen. Dit verhinderde rivalen (vooral Alonso) te verbeteren. Stewards bekeken telemetrie, vonden geen blokkering, achtten het opzettelijk en verwezen hem naar pitstraat-start. Alonso pakte pole en won."
      }
    },
    {
      question: {
        en: "How many G-force did Verstappen experience in the Silverstone 2021 Copse crash?",
        es: "¿Cuántas fuerzas G experimentó Verstappen en el choque de Copse en Silverstone 2021?",
        de: "Wie viele G-Kräfte erlebte Verstappen beim Silverstone 2021 Copse-Crash?",
        nl: "Hoeveel G-kracht ervoer Verstappen bij de Silverstone 2021 Copse crash?"
      },
      options: [
        "51G lateral impact",
        "35G impact",
        "20G impact",
        "70G impact"
      ],
      correct: 0,
      explanation: {
        en: "Verstappen's impact with the barriers at Copse was measured at 51G lateral force. He was transported to hospital for precautionary checks and cleared. Red Bull estimated £750,000 damage. The high G-force sparked debate about penalty severity - Hamilton got 10s penalty but won, which Red Bull called insufficient given the impact.",
        es: "El impacto de Verstappen contra las barreras en Copse se midió en fuerza lateral de 51G. Fue transportado al hospital para chequeos preventivos y dado de alta. Red Bull estimó daños de £750,000. La alta fuerza G provocó debate sobre severidad de penalización - Hamilton obtuvo penalización de 10s pero ganó, lo que Red Bull llamó insuficiente dado el impacto.",
        de: "Verstappens Aufprall auf die Barrieren in Copse wurde mit 51G Seitenkraft gemessen. Er wurde vorsorglich ins Krankenhaus gebracht und freigegeben. Red Bull schätzte £750.000 Schaden. Die hohe G-Kraft löste Debatte über Strafenschwere aus - Hamilton erhielt 10s Strafe, gewann aber, was Red Bull angesichts des Aufpralls als unzureichend bezeichnete.",
        nl: "Verstappens impact met de barrières bij Copse werd gemeten op 51G zijdelingse kracht. Hij werd naar ziekenhuis vervoerd voor voorzorgscontroles en vrijgegeven. Red Bull schatte £750.000 schade. De hoge G-kracht veroorzaakte debat over strafzwaarte - Hamilton kreeg 10s straf maar won, wat Red Bull onvoldoende noemde gezien de impact."
      }
    },
    {
      question: {
        en: "What was the specific 'spygate' connection between Alonso and the 2007 McLaren-Ferrari scandal?",
        es: "¿Cuál fue la conexión específica de 'spygate' entre Alonso y el escándalo McLaren-Ferrari 2007?",
        de: "Was war die spezifische 'Spygate'-Verbindung zwischen Alonso und dem McLaren-Ferrari-Skandal 2007?",
        nl: "Wat was de specifieke 'spygate'-connectie tussen Alonso en het 2007 McLaren-Ferrari schandaal?"
      },
      options: [
        "Alonso threatened to expose McLaren's Ferrari data to FIA",
        "Alonso stole Ferrari data himself",
        "Alonso had no connection to scandal",
        "Alonso was innocent bystander"
      ],
      correct: 0,
      explanation: {
        en: "After Hungary 2007, Alonso's manager allegedly threatened McLaren: support Alonso properly or he'd inform FIA about McLaren's possession of Ferrari technical documents. This triggered FIA investigation, leading to McLaren's $100M fine and constructor disqualification. Alonso was granted immunity, but his McLaren career ended after 2007.",
        es: "Después de Hungría 2007, el manager de Alonso supuestamente amenazó a McLaren: apoyen a Alonso apropiadamente o informaría a la FIA sobre la posesión de McLaren de documentos técnicos de Ferrari. Esto desencadenó investigación FIA, llevando a multa de $100M de McLaren y descalificación de constructores. Alonso obtuvo inmunidad, pero su carrera en McLaren terminó después de 2007.",
        de: "Nach Ungarn 2007 drohte Alonsos Manager angeblich McLaren: Unterstützt Alonso richtig oder er informiert FIA über McLarens Besitz von Ferrari-Technikunterlagen. Dies löste FIA-Untersuchung aus, die zu McLarens $100M Strafe und Konstrukteurs-Disqualifikation führte. Alonso erhielt Immunität, aber seine McLaren-Karriere endete nach 2007.",
        nl: "Na Hongarije 2007 dreigde Alonso's manager naar verluidt McLaren: steun Alonso behoorlijk of hij zou FIA informeren over McLaren's bezit van Ferrari technische documenten. Dit triggerde FIA-onderzoek, leidend tot McLaren's $100M boete en constructeurs diskwalificatie. Alonso kreeg immuniteit, maar zijn McLaren-carrière eindigde na 2007."
      }
    },
    {
      question: {
        en: "What was Senna's qualifying advantage over Prost at McLaren in 1988-1989?",
        es: "¿Cuál fue la ventaja de Senna sobre Prost en clasificación en McLaren en 1988-1989?",
        de: "Was war Sennas Qualifying-Vorteil gegenüber Prost bei McLaren 1988-1989?",
        nl: "Wat was Senna's kwalificatievoordeel ten opzichte van Prost bij McLaren in 1988-1989?"
      },
      options: [
        "Dominated qualifying 24-8 over two years",
        "Equal 16-16 in qualifying",
        "Prost dominated qualifying",
        "Slight edge 18-14"
      ],
      correct: 0,
      explanation: {
        en: "Senna dominated qualifying 13-3 in 1988 and 11-5 in 1989 (24-8 total) over Prost at McLaren. However, Prost won the 1989 title by being more consistent in races. This highlighted their contrasting styles: Senna's raw speed vs Prost's calculated racecraft. The rivalry was as much philosophical as competitive.",
        es: "Senna dominó la clasificación 13-3 en 1988 y 11-5 en 1989 (24-8 total) sobre Prost en McLaren. Sin embargo, Prost ganó el título de 1989 siendo más consistente en carreras. Esto destacó sus estilos contrastantes: velocidad pura de Senna vs arte de carrera calculado de Prost. La rivalidad fue tan filosófica como competitiva.",
        de: "Senna dominierte Qualifying 13-3 in 1988 und 11-5 in 1989 (24-8 gesamt) über Prost bei McLaren. Prost gewann jedoch den 1989-Titel durch konsistenteres Rennen. Dies hob ihre kontrastierenden Stile hervor: Sennas rohe Geschwindigkeit vs Prosts berechnete Rennkunst. Die Rivalität war so philosophisch wie wettbewerbsorientiert.",
        nl: "Senna domineerde kwalificatie 13-3 in 1988 en 11-5 in 1989 (24-8 totaal) over Prost bij McLaren. Echter, Prost won de 1989 titel door consistenter te zijn in races. Dit benadrukte hun contrasterende stijlen: Senna's pure snelheid vs Prost's berekende racevaardigheid. De rivaliteit was zo filosofisch als competitief."
      }
    },
    {
      question: {
        en: "What specific halo damage occurred in the 2021 Monza Hamilton-Verstappen collision?",
        es: "¿Qué daño específico del halo ocurrió en la colisión Hamilton-Verstappen de Monza 2021?",
        de: "Welcher spezifische Halo-Schaden entstand bei der Hamilton-Verstappen-Kollision in Monza 2021?",
        nl: "Welke specifieke halo-schade ontstond bij de 2021 Monza Hamilton-Verstappen botsing?"
      },
      options: [
        "Verstappen's rear tire contacted halo, protecting Hamilton's head",
        "Halo broke completely",
        "No halo contact occurred",
        "Both cars' halos were damaged"
      ],
      correct: 0,
      explanation: {
        en: "When Verstappen's Red Bull landed on Hamilton's Mercedes at Monza 2021, Verstappen's right rear tire made contact with Hamilton's halo. The halo prevented the tire from hitting Hamilton's head. Hamilton later said 'the halo saved my life.' This vindicated the 2018 halo introduction despite initial driver complaints about visibility.",
        es: "Cuando el Red Bull de Verstappen aterrizó sobre el Mercedes de Hamilton en Monza 2021, el neumático trasero derecho de Verstappen hizo contacto con el halo de Hamilton. El halo evitó que el neumático golpeara la cabeza de Hamilton. Hamilton dijo después 'el halo salvó mi vida'. Esto reivindicó la introducción del halo en 2018 a pesar de las quejas iniciales de los pilotos sobre visibilidad.",
        de: "Als Verstappens Red Bull in Monza 2021 auf Hamiltons Mercedes landete, berührte Verstappens rechter Hinterreifen Hamiltons Halo. Der Halo verhinderte, dass der Reifen Hamiltons Kopf traf. Hamilton sagte später 'der Halo rettete mein Leben'. Dies rechtfertigte die Halo-Einführung 2018 trotz anfänglicher Fahrerbeschwerden über Sichtbarkeit.",
        nl: "Toen Verstappens Red Bull op Hamiltons Mercedes landde bij Monza 2021, raakte Verstappens rechter achterband Hamiltons halo. De halo verhinderde dat de band Hamiltons hoofd raakte. Hamilton zei later 'de halo redde mijn leven'. Dit rechtvaardigde de halo-introductie 2018 ondanks aanvankelijke coureurs-klachten over zichtbaarheid."
      }
    },
    {
      question: {
        en: "What was Vettel's exact points deficit when he spun at Hockenheim 2018?",
        es: "¿Cuál fue el déficit exacto de puntos de Vettel cuando giró en Hockenheim 2018?",
        de: "Was war Vettels genauer Punkterückstand, als er in Hockenheim 2018 drehte?",
        nl: "Wat was Vettel's exacte puntentekort toen hij spinde bij Hockenheim 2018?"
      },
      options: [
        "Led championship by 8 points before Germany, lost lead after",
        "Trailed by 20 points",
        "Led by 30 points",
        "Was tied on points"
      ],
      correct: 0,
      explanation: {
        en: "Before Germany 2018, Vettel led Hamilton 171-163 (8 points). After Vettel's crash from the lead and Hamilton's win from 14th, Hamilton led 188-171 (17 points). This 25-point swing proved decisive. Vettel never regained the lead, making mistakes in Italy and Japan. Hamilton won the title by 88 points.",
        es: "Antes de Alemania 2018, Vettel lideraba a Hamilton 171-163 (8 puntos). Después del choque de Vettel desde el liderazgo y la victoria de Hamilton desde el 14º, Hamilton lideró 188-171 (17 puntos). Este cambio de 25 puntos resultó decisivo. Vettel nunca recuperó el liderazgo, cometiendo errores en Italia y Japón. Hamilton ganó el título por 88 puntos.",
        de: "Vor Deutschland 2018 führte Vettel Hamilton 171-163 (8 Punkte). Nach Vettels Crash aus Führung und Hamiltons Sieg vom 14. Platz führte Hamilton 188-171 (17 Punkte). Dieser 25-Punkte-Schwung erwies sich als entscheidend. Vettel gewann nie wieder die Führung, machte Fehler in Italien und Japan. Hamilton gewann den Titel mit 88 Punkten.",
        nl: "Voor Duitsland 2018 leidde Vettel Hamilton 171-163 (8 punten). Na Vettel's crash vanuit de leiding en Hamiltons overwinning vanaf 14e, leidde Hamilton 188-171 (17 punten). Deze 25-punten swing bleek beslissend. Vettel herkreeg nooit de leiding, maakte fouten in Italië en Japan. Hamilton won de titel met 88 punten."
      }
    },
    {
      question: {
        en: "How did Mercedes respond to the 2014 Spa collision where Rosberg admitted fault?",
        es: "¿Cómo respondió Mercedes a la colisión de Spa 2014 donde Rosberg admitió culpa?",
        de: "Wie reagierte Mercedes auf die Spa-Kollision 2014, bei der Rosberg Schuld einräumte?",
        nl: "Hoe reageerde Mercedes op de 2014 Spa botsing waarbij Rosberg schuld toegaf?"
      },
      options: [
        "Fined Rosberg internally, warned both drivers",
        "Suspended Rosberg for one race",
        "No punishment, allowed them to race",
        "Fired Rosberg's race engineer"
      ],
      correct: 0,
      explanation: {
        en: "After Rosberg admitted in team meeting he could have avoided the Spa 2014 collision, Mercedes fined him internally (amount undisclosed) and issued stern warnings to both drivers. Team boss Toto Wolff said if they crashed again, team orders would be imposed. The relationship between Hamilton and Rosberg never fully recovered.",
        es: "Después de que Rosberg admitió en reunión de equipo que podría haber evitado la colisión de Spa 2014, Mercedes lo multó internamente (monto no revelado) y emitió advertencias severas a ambos pilotos. El jefe del equipo Toto Wolff dijo que si chocaban de nuevo, se impondrían órdenes de equipo. La relación entre Hamilton y Rosberg nunca se recuperó completamente.",
        de: "Nachdem Rosberg im Teammeeting zugab, die Spa 2014-Kollision hätte vermeiden können, bestrafte Mercedes ihn intern (Betrag nicht offengelegt) und gab beiden Fahrern strenge Warnungen. Teamchef Toto Wolff sagte, wenn sie wieder crashen, würden Teamorders auferlegt. Die Beziehung zwischen Hamilton und Rosberg erholte sich nie vollständig.",
        nl: "Nadat Rosberg in teammeeting toegaf de Spa 2014 botsing had kunnen vermijden, beboette Mercedes hem intern (bedrag niet bekendgemaakt) en gaf strenge waarschuwingen aan beide coureurs. Teambaas Toto Wolff zei dat als ze weer crashten, teamorders zouden worden opgelegd. De relatie tussen Hamilton en Rosberg herstelde nooit volledig."
      }
    },
    {
      question: {
        en: "What was the specific team radio message that exposed Ferrari's 2010 Germany team orders?",
        es: "¿Cuál fue el mensaje de radio específico del equipo que expuso las órdenes de equipo de Ferrari en Alemania 2010?",
        de: "Was war die spezifische Team-Funknachricht, die Ferraris Teamorders in Deutschland 2010 enthüllte?",
        nl: "Wat was het specifieke teamradiobericht dat Ferrari's 2010 Duitsland teamorders onthulde?"
      },
      options: [
        "Fernando is faster than you. Can you confirm you understood?",
        "Let Fernando past immediately",
        "Massa, this is an order from the team",
        "Switch positions now"
      ],
      correct: 0,
      explanation: {
        en: "Ferrari engineer Rob Smedley radioed Massa: 'Fernando is faster than you. Can you confirm you understood that message?' Massa reluctantly let Alonso by. Post-race, Smedley added 'Good lad. Just stick with him now. Sorry.' The coded language fooled nobody. FIA fined Ferrari $100,000 for team orders violation (then banned, later allowed).",
        es: "El ingeniero de Ferrari Rob Smedley comunicó a Massa: '¿Fernando es más rápido que tú. ¿Puedes confirmar que entendiste ese mensaje?' Massa dejó pasar a Alonso a regañadientes. Post-carrera, Smedley agregó 'Buen chico. Solo quédate con él ahora. Lo siento.' El lenguaje codificado no engañó a nadie. La FIA multó a Ferrari $100,000 por violación de órdenes de equipo (entonces prohibidas, luego permitidas).",
        de: "Ferrari-Ingenieur Rob Smedley funkte Massa: 'Fernando ist schneller als du. Kannst du bestätigen, dass du diese Nachricht verstanden hast?' Massa ließ Alonso widerwillig vorbei. Nach dem Rennen fügte Smedley hinzu 'Guter Junge. Bleib jetzt bei ihm. Tut mir leid.' Die codierte Sprache täuschte niemanden. FIA bestrafte Ferrari mit $100.000 für Teamorder-Verstoß (damals verboten, später erlaubt).",
        nl: "Ferrari-ingenieur Rob Smedley radiode Massa: 'Fernando is sneller dan jij. Kun je bevestigen dat je die boodschap begreep?' Massa liet Alonso met tegenzin passeren. Na de race voegde Smedley toe 'Goede jongen. Blijf nu bij hem. Sorry.' De gecodeerde taal misleidde niemand. FIA beboette Ferrari $100.000 voor teamorders-overtreding (toen verboden, later toegestaan)."
      }
    },
    {
      question: {
        en: "What was the championship points gap when Rosberg retired 5 days after winning 2016?",
        es: "¿Cuál fue la diferencia de puntos del campeonato cuando Rosberg se retiró 5 días después de ganar 2016?",
        de: "Was war der Meisterschaftspunkte-Abstand, als Rosberg 5 Tage nach dem Gewinn 2016 zurücktrat?",
        nl: "Wat was de kampioenschapspunten-kloof toen Rosberg 5 dagen na het winnen van 2016 stopte?"
      },
      options: [
        "Won by 5 points (385-380) over Hamilton",
        "Won by 10 points",
        "Won by 1 point",
        "Won by 20 points"
      ],
      correct: 0,
      explanation: {
        en: "Rosberg won 2016 by just 5 points (385-380) over Hamilton despite Hamilton winning more races (10 vs 9). After Abu Dhabi, Rosberg retired within 5 days, saying the mental/physical toll of beating Hamilton was too great. He achieved his life goal and wanted to spend time with family. Mercedes was shocked.",
        es: "Rosberg ganó 2016 por solo 5 puntos (385-380) sobre Hamilton a pesar de que Hamilton ganó más carreras (10 vs 9). Después de Abu Dhabi, Rosberg se retiró en 5 días, diciendo que el costo mental/físico de vencer a Hamilton era demasiado grande. Logró el objetivo de su vida y quería pasar tiempo con familia. Mercedes quedó sorprendido.",
        de: "Rosberg gewann 2016 mit nur 5 Punkten (385-380) über Hamilton, obwohl Hamilton mehr Rennen gewann (10 vs 9). Nach Abu Dhabi trat Rosberg innerhalb von 5 Tagen zurück und sagte, die mentale/physische Belastung, Hamilton zu schlagen, sei zu groß. Er erreichte sein Lebensziel und wollte Zeit mit Familie verbringen. Mercedes war schockiert.",
        nl: "Rosberg won 2016 met slechts 5 punten (385-380) over Hamilton ondanks dat Hamilton meer races won (10 vs 9). Na Abu Dhabi stopte Rosberg binnen 5 dagen, zeggende dat de mentale/fysieke tol van Hamilton verslaan te groot was. Hij bereikte zijn levensdoel en wilde tijd met familie doorbrengen. Mercedes was geschokt."
      }
    },
    {
      question: {
        en: "What was Prost's reaction to being called 'manipulator' by Senna after 1989 Suzuka?",
        es: "¿Cuál fue la reacción de Prost al ser llamado 'manipulador' por Senna después de Suzuka 1989?",
        de: "Was war Prosts Reaktion darauf, von Senna nach Suzuka 1989 als 'Manipulator' bezeichnet zu werden?",
        nl: "Wat was Prost's reactie op 'manipulator' genoemd te worden door Senna na 1989 Suzuka?"
      },
      options: [
        "Refused to speak to Senna, left McLaren for Ferrari",
        "Apologized to Senna",
        "Laughed it off publicly",
        "Demanded Senna's suspension"
      ],
      correct: 0,
      explanation: {
        en: "After Suzuka 1989, Senna accused Prost and FIA president Balestre of manipulation. Prost refused to speak to Senna, and their relationship became irreconcilable. Prost left McLaren for Ferrari for 1990, making the rivalry even more intense. When they collided again at Suzuka 1990, Prost retired from F1 immediately after securing the title elsewhere.",
        es: "Después de Suzuka 1989, Senna acusó a Prost y al presidente de la FIA Balestre de manipulación. Prost se negó a hablar con Senna y su relación se volvió irreconciliable. Prost dejó McLaren por Ferrari para 1990, haciendo la rivalidad aún más intensa. Cuando chocaron de nuevo en Suzuka 1990, Prost se retiró de F1 inmediatamente después de asegurar el título en otro lugar.",
        de: "Nach Suzuka 1989 beschuldigte Senna Prost und FIA-Präsident Balestre der Manipulation. Prost weigerte sich, mit Senna zu sprechen, und ihre Beziehung wurde unversöhnlich. Prost verließ McLaren für Ferrari für 1990, was die Rivalität noch intensiver machte. Als sie 1990 wieder in Suzuka kollidierten, trat Prost sofort nach Sicherung des Titels anderswo von F1 zurück.",
        nl: "Na Suzuka 1989 beschuldigde Senna Prost en FIA-president Balestre van manipulatie. Prost weigerde met Senna te spreken en hun relatie werd onverzoenlijk. Prost verliet McLaren voor Ferrari voor 1990, makend de rivaliteit nog intenser. Toen ze weer botsten bij Suzuka 1990, stopte Prost onmiddellijk met F1 na het veiligstellen van de titel elders."
      }
    },
    {
      question: {
        en: "What specific regulation did the FIA cite when stripping Schumacher of 1997 points?",
        es: "¿Qué regulación específica citó la FIA al despojar a Schumacher de los puntos de 1997?",
        de: "Welche spezifische Regel nannte die FIA beim Entzug von Schumachers 1997-Punkten?",
        nl: "Welke specifieke regeling citeerde de FIA bij het afnemen van Schumachers 1997 punten?"
      },
      options: [
        "Bringing sport into disrepute through deliberate collision",
        "Dangerous driving causing accident",
        "Ignoring blue flags",
        "Technical infringement"
      ],
      correct: 0,
      explanation: {
        en: "FIA used 'bringing the sport into disrepute' for Schumacher's Jerez 1997 deliberate collision attempt. This allowed them to remove him from championship standings entirely (not just penalize the race). The precedent was significant: championships could be forfeited for unsporting behavior. Schumacher kept race wins but lost all 1997 points.",
        es: "La FIA usó 'desacreditar el deporte' por el intento de colisión deliberada de Schumacher en Jerez 1997. Esto les permitió eliminarlo completamente de las clasificaciones del campeonato (no solo penalizar la carrera). El precedente fue significativo: los campeonatos podían perderse por comportamiento antideportivo. Schumacher mantuvo victorias de carrera pero perdió todos los puntos de 1997.",
        de: "FIA verwendete 'Sport in Verruf bringen' für Schumachers absichtlichen Kollisionsversuch in Jerez 1997. Dies erlaubte ihnen, ihn vollständig aus Meisterschaftsstand zu entfernen (nicht nur Rennen zu bestrafen). Der Präzedenzfall war bedeutsam: Meisterschaften konnten für unsportliches Verhalten verwirkt werden. Schumacher behielt Rennsiege, verlor aber alle 1997-Punkte.",
        nl: "FIA gebruikte 'sport in diskrediet brengen' voor Schumachers Jerez 1997 opzettelijke botsingspoging. Dit stelde hen in staat hem volledig te verwijderen uit kampioenschapsstanden (niet alleen de race te bestraffen). Het precedent was significant: kampioenschappen konden worden verbeurd voor onsportief gedrag. Schumacher behield raceoverwinningen maar verloor alle 1997 punten."
      }
    },
    {
      question: {
        en: "How did Hamilton respond to Rosberg's retirement announcement in 2016?",
        es: "¿Cómo respondió Hamilton al anuncio de retiro de Rosberg en 2016?",
        de: "Wie reagierte Hamilton auf Rosbergs Rücktrittsankündigung 2016?",
        nl: "Hoe reageerde Hamilton op Rosberg's pensioen-aankondiging in 2016?"
      },
      options: [
        "Congratulated him, said he respected the decision",
        "Called Rosberg a quitter",
        "Said he was surprised but relieved",
        "Refused to comment"
      ],
      correct: 0,
      explanation: {
        en: "Hamilton graciously congratulated Rosberg, saying he respected the decision and understood the immense pressure of beating him. Despite their intense rivalry and damaged friendship, Hamilton showed class. He later said he'd have preferred to beat Rosberg again in 2017 but understood family priorities. Their childhood friendship never fully recovered though.",
        es: "Hamilton felicitó graciosamente a Rosberg, diciendo que respetaba la decisión y entendía la inmensa presión de vencerlo. A pesar de su intensa rivalidad y amistad dañada, Hamilton mostró clase. Más tarde dijo que habría preferido vencer a Rosberg nuevamente en 2017 pero entendía prioridades familiares. Su amistad de infancia nunca se recuperó completamente sin embargo.",
        de: "Hamilton gratulierte Rosberg gnädig, sagte er respektiere die Entscheidung und verstehe den immensen Druck, ihn zu schlagen. Trotz ihrer intensiven Rivalität und beschädigten Freundschaft zeigte Hamilton Klasse. Er sagte später, er hätte Rosberg lieber 2017 wieder geschlagen, verstand aber Familienprioritäten. Ihre Kindheitsfreundschaft erholte sich nie vollständig.",
        nl: "Hamilton feliciteerde Rosberg genadig, zeggende dat hij de beslissing respecteerde en de immense druk begreep van hem verslaan. Ondanks hun intense rivaliteit en beschadigde vriendschap toonde Hamilton klasse. Hij zei later dat hij Rosberg liever opnieuw had verslagen in 2017 maar familie-prioriteiten begreep. Hun jeugdvriendschap herstelde nooit volledig echter."
      }
    },
    {
      question: {
        en: "What was the lap time gap when Verstappen overtook Leclerc at Austria 2019?",
        es: "¿Cuál fue la diferencia de tiempo por vuelta cuando Verstappen adelantó a Leclerc en Austria 2019?",
        de: "Was war der Rundenzeit-Unterschied, als Verstappen Leclerc in Österreich 2019 überholte?",
        nl: "Wat was het rondetijdverschil toen Verstappen Leclerc inhaalde bij Oostenrijk 2019?"
      },
      options: [
        "Verstappen ~0.3-0.5s per lap faster on newer tires",
        "Verstappen 2s per lap faster",
        "Equal pace",
        "Leclerc was faster"
      ],
      correct: 0,
      explanation: {
        en: "At Austria 2019, Verstappen was approximately 0.3-0.5s per lap faster than Leclerc due to newer tires (7 laps fresher). With 3 laps remaining, Verstappen made his move into turn 3. The contact during the pass led to lengthy investigation, but stewards allowed it as hard but fair racing, setting precedent for physical but legal battles.",
        es: "En Austria 2019, Verstappen fue aproximadamente 0.3-0.5s por vuelta más rápido que Leclerc debido a neumáticos más nuevos (7 vueltas más frescos). Faltando 3 vueltas, Verstappen hizo su movimiento en la curva 3. El contacto durante el adelantamiento llevó a una larga investigación, pero los comisarios lo permitieron como carrera dura pero justa, estableciendo precedente para batallas físicas pero legales.",
        de: "In Österreich 2019 war Verstappen etwa 0,3-0,5s pro Runde schneller als Leclerc aufgrund neuerer Reifen (7 Runden frischer). Mit 3 verbleibenden Runden machte Verstappen seinen Zug in Kurve 3. Der Kontakt beim Überholmanöver führte zu langer Untersuchung, aber Rennkommissare erlaubten es als hartes aber faires Racing, Präzedenzfall für physische aber legale Kämpfe setzend.",
        nl: "Bij Oostenrijk 2019 was Verstappen ongeveer 0,3-0,5s per ronde sneller dan Leclerc vanwege nieuwere banden (7 ronden verser). Met 3 ronden te gaan maakte Verstappen zijn actie in bocht 3. Het contact tijdens het passeren leidde tot lang onderzoek, maar stewards stonden het toe als hard maar eerlijk racen, precedent zettend voor fysieke maar legale gevechten."
      }
    },
    {
      question: {
        en: "What was Webber's famous book title reflecting his Red Bull experience?",
        es: "¿Cuál fue el título del famoso libro de Webber que refleja su experiencia en Red Bull?",
        de: "Was war der Titel von Webbers berühmtem Buch, das seine Red Bull-Erfahrung widerspiegelt?",
        nl: "Wat was de titel van Webbers beroemde boek dat zijn Red Bull-ervaring weerspiegelt?"
      },
      options: [
        "Aussie Grit: My F1 Journey",
        "Multi 21: The Untold Story",
        "Number Two Driver",
        "Red Bull Betrayal"
      ],
      correct: 0,
      explanation: {
        en: "'Aussie Grit: My F1 Journey' detailed Webber's Red Bull years, including feeling undervalued vs Vettel. He described team favoritism, the Turkey 2010 crash, Multi 21, and being denied equal equipment. The book revealed deep resentment, though Webber acknowledged Vettel's speed. He left for sports cars, winning Le Mans with Porsche.",
        es: "'Aussie Grit: My F1 Journey' detalló los años de Webber en Red Bull, incluyendo sentirse infravalorado vs Vettel. Describió favoritismo del equipo, el choque de Turquía 2010, Multi 21 y se le negó equipo igual. El libro reveló profundo resent imiento, aunque Webber reconoció la velocidad de Vettel. Dejó por deportivos, ganando Le Mans con Porsche.",
        de: "'Aussie Grit: My F1 Journey' detaillierte Webbers Red Bull-Jahre, einschließlich sich unterbewertet zu fühlen vs Vettel. Er beschrieb Teambevorzugung, den Türkei 2010-Crash, Multi 21 und Verweigerung gleicher Ausrüstung. Das Buch offenbarte tiefen Groll, obwohl Webber Vettels Geschwindigkeit anerkannte. Er ging zu Sportwagen, gewann Le Mans mit Porsche.",
        nl: "'Aussie Grit: My F1 Journey' detailleerde Webbers Red Bull-jaren, inclusief zich ondergewaardeerd voelen vs Vettel. Hij beschreef teamfavoritisme, de Turkije 2010 crash, Multi 21 en gelijke apparatuur geweigerd worden. Het boek onthulde diepe wrok, hoewel Webber Vettels snelheid erkende. Hij vertrok naar sportwagens, won Le Mans met Porsche."
      }
    },
    {
      question: {
        en: "What was the exact radio communication during Hamilton's Abu Dhabi 2016 backing-up tactic?",
        es: "¿Cuál fue la comunicación de radio exacta durante la táctica de retroceso de Hamilton en Abu Dhabi 2016?",
        de: "Was war die genaue Funkkommunikation während Hamiltons Abu Dhabi 2016 Verlangsamungs-Taktik?",
        nl: "Wat was de exacte radiocommunicatie tijdens Hamiltons Abu Dhabi 2016 terugtrek-tactiek?"
      },
      options: [
        "Team: 'Pick up pace,' Hamilton: 'I'm in the lead, let me race'",
        "Hamilton followed orders immediately",
        "Team supported Hamilton's tactics",
        "No radio communication occurred"
      ],
      correct: 0,
      explanation: {
        en: "Mercedes repeatedly radioed Hamilton to speed up: 'Lewis, pick up the pace.' Hamilton responded 'I'm in the lead right now. Just let me do what I need to do.' He deliberately slowed, trying to back Rosberg into Vettel/Verstappen. Team boss Toto Wolff later said he considered forcing Hamilton to speed up but decided against it.",
        es: "Mercedes repetidamente comunicó a Hamilton acelerar: 'Lewis, acelera el ritmo.' Hamilton respondió 'Estoy en el liderazgo ahora. Solo déjame hacer lo que necesito hacer.' Deliberadamente redujo, tratando de llevar a Rosberg hacia Vettel/Verstappen. El jefe del equipo Toto Wolff dijo después que consideró forzar a Hamilton a acelerar pero decidió no hacerlo.",
        de: "Mercedes funkte Hamilton wiederholt an zu beschleunigen: 'Lewis, beschleunige.' Hamilton antwortete 'Ich führe gerade. Lass mich einfach tun, was ich tun muss.' Er verlangsamte absichtlich, versuchte Rosberg in Vettel/Verstappen zurückzudrängen. Teamchef Toto Wolff sagte später, er erwog Hamilton zu zwingen zu beschleunigen, entschied sich aber dagegen.",
        nl: "Mercedes radiode Hamilton herhaaldelijk om te versnellen: 'Lewis, verhoog tempo.' Hamilton antwoordde 'Ik leid nu. Laat me gewoon doen wat ik moet doen.' Hij vertraagde opzettelijk, proberend Rosberg terug te drijven in Vettel/Verstappen. Teambaas Toto Wolff zei later dat hij overwoog Hamilton te dwingen te versnellen maar besloot tegen."
      }
    },
    {
      question: {
        en: "What was the exact corner number where Vettel spun at Hockenheim 2018?",
        es: "¿Cuál fue el número exacto de curva donde Vettel giró en Hockenheim 2018?",
        de: "Was war die genaue Kurvennummer, an der Vettel in Hockenheim 2018 drehte?",
        nl: "Wat was het exacte bochtnummer waar Vettel spinde bij Hockenheim 2018?"
      },
      options: [
        "Turn 13 (Sachskurve)",
        "Turn 1 (Nord-Kurve)",
        "Turn 6 (Spitzkehre)",
        "Turn 17 (Parabolika)"
      ],
      correct: 0,
      explanation: {
        en: "Vettel crashed at turn 13 (Sachskurve) on lap 51 while leading the German GP in mixed conditions. A slight mistake on damp track sent him into barriers. He later apologized to Ferrari team, calling it an 'unacceptable mistake.' The error, at his home race while leading comfortably, became symbolic of his 2018 title challenge collapse.",
        es: "Vettel se estrelló en la curva 13 (Sachskurve) en la vuelta 51 mientras lideraba el GP de Alemania en condiciones mixtas. Un pequeño error en pista húmeda lo envió contra las barreras. Más tarde se disculpó con el equipo Ferrari, llamándolo un 'error inaceptable'. El error, en su carrera local mientras lideraba cómodamente, se convirtió en símbolo del colapso de su desafío por el título 2018.",
        de: "Vettel crashte in Kurve 13 (Sachskurve) in Runde 51, während er den Deutschland-GP bei wechselnden Bedingungen anführte. Ein kleiner Fehler auf feuchter Strecke schickte ihn in die Barrieren. Er entschuldigte sich später bei Ferrari-Team, nannte es einen 'inakzeptablen Fehler'. Der Fehler bei seinem Heimrennen, während er komfortabel führte, wurde symbolisch für seinen 2018-Titelkampf-Kollaps.",
        nl: "Vettel crashte bij bocht 13 (Sachskurve) in ronde 51 terwijl hij de Duitse GP leidde in wisselende omstandigheden. Een kleine fout op vochtige baan stuurde hem in de barrières. Hij verontschuldigde zich later bij Ferrari-team, noemde het een 'onaanvaardbare fout'. De fout, bij zijn thuisrace terwijl hij comfortabel leidde, werd symbolisch voor zijn 2018 titeluitdaging-ineenstorting."
      }
    },
    {
      question: {
        en: "What was the engine reliability difference between Ferrari and McLaren in 2000?",
        es: "¿Cuál fue la diferencia de fiabilidad del motor entre Ferrari y McLaren en 2000?",
        de: "Was war der Motor-Zuverlässigkeitsunterschied zwischen Ferrari und McLaren im Jahr 2000?",
        nl: "Wat was het motorbetrouwbaarheidsverschil tussen Ferrari en McLaren in 2000?"
      },
      options: [
        "McLaren-Mercedes had 7 retirements, Ferrari had 3",
        "Equal reliability",
        "Ferrari had more retirements",
        "Both teams had zero retirements"
      ],
      correct: 0,
      explanation: {
        en: "In 2000, McLaren-Mercedes suffered 7 mechanical retirements (mostly Häkkinen) while Ferrari had only 3. This reliability advantage, combined with Schumacher's consistency, won Ferrari the championship. McLaren had superior speed early-season but couldn't convert to points. Häkkinen lost crucial wins to breakdowns, especially at Spa where he dominated.",
        es: "En 2000, McLaren-Mercedes sufrió 7 retiros mecánicos (mayormente Häkkinen) mientras Ferrari tuvo solo 3. Esta ventaja de fiabilidad, combinada con la consistencia de Schumacher, ganó el campeonato para Ferrari. McLaren tenía velocidad superior al inicio de temporada pero no pudo convertir en puntos. Häkkinen perdió victorias cruciales por averías, especialmente en Spa donde dominó.",
        de: "2000 erlitt McLaren-Mercedes 7 mechanische Ausfälle (meist Häkkinen), während Ferrari nur 3 hatte. Dieser Zuverlässigkeitsvorteil, kombiniert mit Schumachers Konsistenz, gewann Ferrari die Meisterschaft. McLaren hatte zu Saisonbeginn überlegene Geschwindigkeit, konnte aber nicht in Punkte umwandeln. Häkkinen verlor wichtige Siege durch Ausfälle, besonders in Spa, wo er dominierte.",
        nl: "In 2000 leed McLaren-Mercedes 7 mechanische uitvallen (vooral Häkkinen) terwijl Ferrari slechts 3 had. Dit betrouwbaarheidsvoordeel, gecombineerd met Schumachers consistentie, won Ferrari het kampioenschap. McLaren had superieure snelheid vroeg-seizoen maar kon niet omzetten in punten. Häkkinen verloor cruciale overwinningen aan defecten, vooral bij Spa waar hij domineerde."
      }
    },
    {
      question: {
        en: "How many races did it take for the 2021 Hamilton-Verstappen rivalry to have its first collision?",
        es: "¿Cuántas carreras tomó para que la rivalidad Hamilton-Verstappen 2021 tuviera su primera colisión?",
        de: "Wie viele Rennen dauerte es, bis die Hamilton-Verstappen-Rivalität 2021 ihre erste Kollision hatte?",
        nl: "Hoeveel races duurde het voordat de 2021 Hamilton-Verstappen rivaliteit zijn eerste botsing had?"
      },
      options: [
        "10 races (British GP Silverstone)",
        "5 races",
        "15 races",
        "First race collision"
      ],
      correct: 0,
      explanation: {
        en: "The first major collision came at race 10, the British GP at Silverstone (Copse corner). Before this, they'd had incredibly close racing at Bahrain, Spain, and Imola without contact. Silverstone marked the rivalry turning physical. The second collision came 6 races later at Monza (Italian GP), then the controversial Abu Dhabi finale decided the title.",
        es: "La primera colisión importante llegó en la carrera 10, el GP británico en Silverstone (curva Copse). Antes de esto, habían tenido carreras increíblemente cerradas en Bahrein, España e Imola sin contacto. Silverstone marcó la rivalidad volviéndose física. La segunda colisión llegó 6 carreras después en Monza (GP de Italia), luego la controvertida final de Abu Dhabi decidió el título.",
        de: "Die erste große Kollision kam bei Rennen 10, dem britischen GP in Silverstone (Copse-Kurve). Davor hatten sie unglaublich enges Racing in Bahrain, Spanien und Imola ohne Kontakt. Silverstone markierte die Rivalität, die physisch wurde. Die zweite Kollision kam 6 Rennen später in Monza (Italien-GP), dann entschied das kontroverse Abu Dhabi-Finale den Titel.",
        nl: "De eerste grote botsing kwam bij race 10, de Britse GP in Silverstone (Copse-bocht). Hiervoor hadden ze ongelooflijk close racing gehad in Bahrein, Spanje en Imola zonder contact. Silverstone markeerde de rivaliteit fysiek worden. De tweede botsing kwam 6 races later bij Monza (Italiaanse GP), toen besliste de controversiële Abu Dhabi finale de titel."
      }
    },
    {
      question: {
        en: "What was Massa's immediate reaction to losing 2008 championship in the final seconds?",
        es: "¿Cuál fue la reacción inmediata de Massa al perder el campeonato 2008 en los últimos segundos?",
        de: "Was war Massas unmittelbare Reaktion auf den Verlust der Meisterschaft 2008 in den letzten Sekunden?",
        nl: "Wat was Massa's onmiddellijke reactie op het verliezen van het 2008 kampioenschap in de laatste seconden?"
      },
      options: [
        "Celebrated briefly thinking he won, then devastated",
        "Immediately knew he lost",
        "Angry at Glock",
        "Blamed Ferrari strategy"
      ],
      correct: 0,
      explanation: {
        en: "Massa won Brazil 2008 and his team briefly celebrated, thinking he was champion. For ~30 seconds, Massa thought he'd won the title. Then word came Hamilton had passed Glock for P5 on the final corner. Massa was devastated, visible in photos standing on podium realizing what happened. His father was crying in garage.",
        es: "Massa ganó Brasil 2008 y su equipo celebró brevemente, pensando que era campeón. Por ~30 segundos, Massa pensó que había ganado el título. Luego llegó la noticia de que Hamilton había adelantado a Glock por P5 en la última curva. Massa estaba devastado, visible en fotos parado en el podio dándose cuenta de lo que pasó. Su padre estaba llorando en el garaje.",
        de: "Massa gewann Brasilien 2008 und sein Team feierte kurz, denkend er sei Champion. Für ~30 Sekunden dachte Massa, er habe den Titel gewonnen. Dann kam die Nachricht, Hamilton habe Glock in der letzten Kurve für P5 überholt. Massa war am Boden zerstört, sichtbar auf Fotos auf dem Podium, realisierend was passiert war. Sein Vater weinte in der Garage.",
        nl: "Massa won Brazilië 2008 en zijn team vierde kort, denkend dat hij kampioen was. Voor ~30 seconden dacht Massa dat hij de titel had gewonnen. Toen kwam het bericht dat Hamilton Glock had ingehaald voor P5 bij de laatste bocht. Massa was verwoest, zichtbaar in foto's staand op podium realiserend wat gebeurde. Zijn vader huilde in de garage."
      }
    },
    {
      question: {
        en: "What specific incident made Alonso threaten to expose McLaren's Ferrari data in 2007?",
        es: "¿Qué incidente específico hizo que Alonso amenazara con exponer los datos de Ferrari de McLaren en 2007?",
        de: "Welcher spezifische Vorfall ließ Alonso drohen, McLarens Ferrari-Daten 2007 zu enthüllen?",
        nl: "Welk specifiek incident zorgde ervoor dat Alonso dreigde McLaren's Ferrari-data te onthullen in 2007?"
      },
      options: [
        "Hungary qualifying pit hold incident",
        "Spa race strategy",
        "Monaco qualifying",
        "Canada pit stop error"
      ],
      correct: 0,
      explanation: {
        en: "After the Hungary 2007 qualifying incident where Alonso held Hamilton in pits, then received penalty, Alonso's manager reportedly threatened McLaren: give Alonso #1 status or expose Ferrari document possession. This triggered FIA's investigation into 'spygate,' resulting in McLaren's $100M fine and constructor disqualification. Alonso got immunity, left McLaren end-2007.",
        es: "Después del incidente de clasificación de Hungría 2007 donde Alonso retuvo a Hamilton en boxes, luego recibió penalización, el manager de Alonso supuestamente amenazó a McLaren: den a Alonso estatus #1 o expongan posesión de documentos de Ferrari. Esto desencadenó investigación FIA de 'spygate', resultando en multa de $100M de McLaren y descalificación de constructores. Alonso obtuvo inmunidad, dejó McLaren a finales de 2007.",
        de: "Nach dem Ungarn 2007-Qualifying-Vorfall, wo Alonso Hamilton in der Box festhielt, dann Strafe erhielt, drohte Alonsos Manager angeblich McLaren: Gebt Alonso #1-Status oder enthüllt Ferrari-Dokument-Besitz. Dies löste FIAs 'Spygate'-Untersuchung aus, was zu McLarens $100M Strafe und Konstrukteurs-Disqualifikation führte. Alonso erhielt Immunität, verließ McLaren Ende 2007.",
        nl: "Na het Hongarije 2007 kwalificatie-incident waar Alonso Hamilton vasthield in pits, toen straf kreeg, dreigde Alonso's manager naar verluidt McLaren: geef Alonso #1 status of onthul Ferrari document-bezit. Dit triggerde FIA's onderzoek naar 'spygate', resulterend in McLaren's $100M boete en constructeurs diskwalificatie. Alonso kreeg immuniteit, verliet McLaren eind-2007."
      }
    },
    {
      question: {
        en: "What was the exact points system that allowed Lauda to win 1984 by 0.5 points?",
        es: "¿Cuál fue el sistema de puntos exacto que permitió a Lauda ganar 1984 por 0.5 puntos?",
        de: "Was war das genaue Punktesystem, das Lauda erlaubte, 1984 mit 0,5 Punkten zu gewinnen?",
        nl: "Wat was het exacte puntensysteem dat Lauda toestond 1984 te winnen met 0,5 punten?"
      },
      options: [
        "Monaco awarded half points due to early red flag",
        "All races awarded half points",
        "Decimal points for all positions",
        "Special tie-breaker system"
      ],
      correct: 0,
      explanation: {
        en: "At 1984 Monaco, heavy rain caused a red flag after 31 of 76 laps (less than 75% distance). Regulations awarded half points: Prost won getting 4.5 points instead of 9. Lauda finished 2nd getting 3 instead of 6. This half-point margin decided the championship: Lauda 72, Prost 71.5. It remains F1's closest championship margin ever.",
        es: "En Mónaco 1984, lluvia fuerte causó bandera roja después de 31 de 76 vueltas (menos del 75% de distancia). Las regulaciones otorgaron medios puntos: Prost ganó obteniendo 4.5 puntos en lugar de 9. Lauda terminó 2º obteniendo 3 en lugar de 6. Este margen de medio punto decidió el campeonato: Lauda 72, Prost 71.5. Sigue siendo el margen de campeonato más ajustado de F1.",
        de: "Beim Monaco 1984 verursachte starker Regen eine rote Flagge nach 31 von 76 Runden (weniger als 75% Distanz). Regeln vergaben halbe Punkte: Prost gewann mit 4,5 statt 9 Punkten. Lauda wurde Zweiter mit 3 statt 6. Dieser halbe Punkt entschied die Meisterschaft: Lauda 72, Prost 71,5. Es bleibt F1s knappster Meisterschaftsmargin aller Zeiten.",
        nl: "Bij Monaco 1984 veroorzaakte zware regen een rode vlag na 31 van 76 ronden (minder dan 75% afstand). Regels kenden halve punten toe: Prost won met 4,5 punten in plaats van 9. Lauda eindigde 2e met 3 in plaats van 6. Deze halve punt-marge besliste het kampioenschap: Lauda 72, Prost 71,5. Het blijft F1's nauwste kampioenschapsmarge ooit."
      }
    },
    {
      question: {
        en: "What was the engine mode controversy during the 2021 Hamilton-Verstappen battle?",
        es: "¿Cuál fue la controversia del modo de motor durante la batalla Hamilton-Verstappen 2021?",
        de: "Was war die Motormodus-Kontroverse während des Hamilton-Verstappen-Kampfs 2021?",
        nl: "Wat was de motormode-controverse tijdens de 2021 Hamilton-Verstappen strijd?"
      },
      options: [
        "Red Bull protested Mercedes' engine modes, FIA restricted them",
        "Mercedes protested Red Bull fuel",
        "Both teams had equal engine modes",
        "No engine controversies occurred"
      ],
      correct: 0,
      explanation: {
        en: "Red Bull protested Mercedes' qualifying engine modes mid-2021, claiming they gave unfair advantage. FIA had already restricted 'party modes' in 2020, but Red Bull suspected Mercedes found loopholes. Later in 2021, Mercedes introduced fresh engines multiple times for Hamilton (taking grid penalties) to maintain power, suggesting aggressive usage compensating for restrictions.",
        es: "Red Bull protestó los modos de motor de clasificación de Mercedes a mitad de 2021, afirmando que daban ventaja injusta. La FIA ya había restringido 'modos fiesta' en 2020, pero Red Bull sospechaba que Mercedes encontró lagunas. Más tarde en 2021, Mercedes introdujo motores nuevos múltiples veces para Hamilton (tomando penalizaciones de parrilla) para mantener potencia, sugiriendo uso agresivo compensando restricciones.",
        de: "Red Bull protestierte gegen Mercedes' Qualifying-Motormodi Mitte 2021, behauptend sie gäben unfairen Vorteil. FIA hatte bereits 'Party-Modi' 2020 eingeschränkt, aber Red Bull vermutete Mercedes fand Schlupflöcher. Später 2021 führte Mercedes mehrmals frische Motoren für Hamilton ein (Startplatz-Strafen nehmend) um Leistung zu erhalten, was aggressiven Einsatz zur Kompensation von Beschränkungen andeutete.",
        nl: "Red Bull protesteerde Mercedes' kwalificatie motormodes midden 2021, claimend dat ze oneerlijk voordeel gaven. FIA had al 'party modes' beperkt in 2020, maar Red Bull vermoedde dat Mercedes mazen vond. Later in 2021 introduceerde Mercedes meerdere keren verse motoren voor Hamilton (startplaats straffen nemend) om vermogen te behouden, suggererend agressief gebruik compenserend voor beperkingen."
      }
    },
    {
      question: {
        en: "What was the exact penalty Vettel received for the 2017 Baku Hamilton collision?",
        es: "¿Cuál fue la penalización exacta que Vettel recibió por la colisión con Hamilton en Bakú 2017?",
        de: "Was war die genaue Strafe, die Vettel für die Hamilton-Kollision in Baku 2017 erhielt?",
        nl: "Wat was de exacte straf die Vettel kreeg voor de 2017 Bakoe Hamilton botsing?"
      },
      options: [
        "10-second stop-go penalty during race",
        "Grid penalty for next race",
        "Disqualification",
        "Time penalty post-race"
      ],
      correct: 0,
      explanation: {
        en: "Vettel received a 10-second stop-go penalty (served during race) for deliberately driving into Hamilton's car in Baku 2017. He also received penalty points on license. Many felt the penalty was too lenient for road rage-style behavior. Vettel finished 4th, Hamilton 5th. Later FIA considered harsher penalties but decided against retroactive action.",
        es: "Vettel recibió una penalización de 10 segundos stop-go (cumplida durante carrera) por conducir deliberadamente contra el auto de Hamilton en Bakú 2017. También recibió puntos de penalización en licencia. Muchos sintieron que la penalización fue demasiado indulgente para comportamiento estilo furia al volante. Vettel terminó 4º, Hamilton 5º. Más tarde FIA consideró penalizaciones más duras pero decidió contra acción retroactiva.",
        de: "Vettel erhielt eine 10-Sekunden-Stop-and-Go-Strafe (während Rennen abgesessen) fürs absichtliche Fahren in Hamiltons Auto in Baku 2017. Er erhielt auch Strafpunkte auf Lizenz. Viele hielten die Strafe für zu milde bei Straßenwut-artigem Verhalten. Vettel wurde Vierter, Hamilton Fünfter. Später erwog FIA härtere Strafen, entschied sich aber gegen rückwirkende Maßnahmen.",
        nl: "Vettel kreeg een 10-seconden stop-go straf (tijdens race uitgezeten) voor opzettelijk rijden tegen Hamiltons auto in Bakoe 2017. Hij kreeg ook strafpunten op licentie. Velen vonden de straf te mild voor wegwoede-achtig gedrag. Vettel eindigde 4e, Hamilton 5e. Later overwoog FIA zwaardere straffen maar besloot tegen terugwerkende actie."
      }
    },
    {
      question: {
        en: "What was the tire age difference when Hamilton tried to back Rosberg into rivals at Abu Dhabi 2016?",
        es: "¿Cuál fue la diferencia de edad de neumáticos cuando Hamilton intentó llevar a Rosberg hacia rivales en Abu Dhabi 2016?",
        de: "Was war der Reifenalter-Unterschied, als Hamilton versuchte, Rosberg in Rivalen in Abu Dhabi 2016 zurückzudrängen?",
        nl: "Wat was het bandleeftijdverschil toen Hamilton probeerde Rosberg terug te drijven naar rivalen bij Abu Dhabi 2016?"
      },
      options: [
        "Both on similar aged tires, Hamilton's tactic was purely positional",
        "Hamilton on 20-lap fresher tires",
        "Rosberg on much fresher tires",
        "Complete tire advantage for Rosberg"
      ],
      correct: 0,
      explanation: {
        en: "At Abu Dhabi 2016, both Hamilton and Rosberg were on similar tire ages and strategies. Hamilton's slowing wasn't due to tire preservation but purely tactical: backing Rosberg into Vettel/Verstappen hoping they'd pass Rosberg. The tactic nearly worked - Vettel closed to within 2 seconds but Rosberg held position, securing championship by 5 points.",
        es: "En Abu Dhabi 2016, tanto Hamilton como Rosberg estaban en edades de neumáticos y estrategias similares. La desaceleración de Hamilton no fue por preservación de neumáticos sino puramente táctica: llevar a Rosberg hacia Vettel/Verstappen esperando que pasaran a Rosberg. La táctica casi funcionó - Vettel se acercó a menos de 2 segundos pero Rosberg mantuvo posición, asegurando campeonato por 5 puntos.",
        de: "In Abu Dhabi 2016 waren Hamilton und Rosberg auf ähnlichem Reifenalter und Strategien. Hamiltons Verlangsamung war nicht wegen Reifenschonung, sondern rein taktisch: Rosberg in Vettel/Verstappen zurückdrängen, hoffend sie würden Rosberg überholen. Die Taktik funktionierte fast - Vettel kam auf 2 Sekunden heran, aber Rosberg hielt Position und sicherte Meisterschaft mit 5 Punkten.",
        nl: "Bij Abu Dhabi 2016 waren zowel Hamilton als Rosberg op vergelijkbare bandleeftijden en strategieën. Hamiltons vertragen was niet vanwege bandbehoud maar puur tactisch: Rosberg terugdrijven in Vettel/Verstappen hopend dat ze Rosberg zouden passeren. De tactiek werkte bijna - Vettel kwam tot binnen 2 seconden maar Rosberg hield positie, kampioenschap verzekerd met 5 punten."
      }
    },
    {
      question: {
        en: "What specific regulation change resulted from the 2002 Austrian GP team orders scandal?",
        es: "¿Qué cambio de regulación específico resultó del escándalo de órdenes de equipo del GP de Austria 2002?",
        de: "Welche spezifische Regeländerung resultierte aus dem Teamorder-Skandal beim Österreich-GP 2002?",
        nl: "Welke specifieke regelwijziging resulteerde uit het 2002 Oostenrijkse GP teamorders schandaal?"
      },
      options: [
        "Team orders banned (later reversed in 2011)",
        "No regulation changes",
        "Podium ceremonies changed",
        "Point scoring system changed"
      ],
      correct: 0,
      explanation: {
        en: "After Austria 2002's blatant team orders (Barrichello slowing meters from finish), FIA banned team orders interfering with race results. The ban lasted until 2011 when it was reversed after Ferrari's 2010 Germany coded orders proved bans were unenforceable. Now teams can use orders but must be transparent, though 'coded' messages remain common.",
        es: "Después de las órdenes de equipo flagrantes de Austria 2002 (Barrichello reduciendo metros antes del final), la FIA prohibió órdenes de equipo que interfirieran con resultados de carrera. La prohibición duró hasta 2011 cuando fue revertida después de que las órdenes codificadas de Ferrari en Alemania 2010 probaron que las prohibiciones eran inaplicables. Ahora los equipos pueden usar órdenes pero deben ser transparentes, aunque mensajes 'codificados' siguen siendo comunes.",
        de: "Nach Österreichs 2002 offensichtlichen Teamorders (Barrichello verlangsamte Meter vor Ziel) verbot FIA Teamorders, die Rennergebnisse beeinflussen. Das Verbot dauerte bis 2011, als es nach Ferraris 2010 Deutschland codierten Orders rückgängig gemacht wurde, die bewiesen, Verbote waren nicht durchsetzbar. Jetzt können Teams Orders verwenden, müssen aber transparent sein, obwohl 'codierte' Nachrichten üblich bleiben.",
        nl: "Na Oostenrijk 2002's flagrante teamorders (Barrichello vertraagde meters voor finish) verbood FIA teamorders die race-resultaten beïnvloedden. Het verbod duurde tot 2011 toen het werd teruggedraaid na Ferrari's 2010 Duitsland gecodeerde orders bewezen dat verboden niet te handhaven waren. Nu kunnen teams orders gebruiken maar moeten transparant zijn, hoewel 'gecodeerde' berichten gebruikelijk blijven."
      }
    },
    {
      question: {
        en: "What was the exact sequence of safety car lapped car decisions at Abu Dhabi 2021?",
        es: "¿Cuál fue la secuencia exacta de decisiones de autos rezagados del coche de seguridad en Abu Dhabi 2021?",
        de: "Was war die genaue Sequenz der Safety-Car-Überrundungsauto-Entscheidungen in Abu Dhabi 2021?",
        nl: "Wat was de exacte volgorde van safety car achterstandsrondes beslissingen bij Abu Dhabi 2021?"
      },
      options: [
        "First 'no unlapping', then 'only 5 cars unlap', then immediate restart",
        "All cars unlapped normally",
        "No cars were unlapped",
        "Random cars were unlapped"
      ],
      correct: 0,
      explanation: {
        en: "Masi first messaged 'lapped cars will NOT overtake' (lap 56), then reversed this to allow ONLY the 5 cars between Hamilton-Verstappen to unlap (lap 57), then immediately called 'safety car in this lap' instead of following lap per regulations. This unprecedented three-decision sequence created the final-lap shootout that decided the championship. Mercedes protested but lost.",
        es: "Masi primero envió mensaje 'autos rezagados NO adelantarán' (vuelta 56), luego revirtió esto para permitir SOLO los 5 autos entre Hamilton-Verstappen desrezagarse (vuelta 57), luego inmediatamente llamó 'coche de seguridad en esta vuelta' en lugar de siguiente vuelta según regulaciones. Esta secuencia de tres decisiones sin precedentes creó la última vuelta decisiva que decidió el campeonato. Mercedes protestó pero perdió.",
        de: "Masi funkte zuerst 'überrundete Autos werden NICHT überholen' (Runde 56), kehrte dies dann um, um NUR die 5 Autos zwischen Hamilton-Verstappen zu entrunden (Runde 57), rief dann sofort 'Safety Car in dieser Runde' statt Folgerunde laut Regeln. Diese beispiellose Drei-Entscheidungs-Sequenz schuf den Schlussjagd-Showdown, der die Meisterschaft entschied. Mercedes protestierte, verlor aber.",
        nl: "Masi seinde eerst 'achterstandsrondes zullen NIET inhalen' (ronde 56), keerde dit toen om om ALLEEN de 5 auto's tussen Hamilton-Verstappen te ontronden (ronde 57), riep toen onmiddellijk 'safety car in deze ronde' in plaats van volgende ronde volgens regels. Deze ongekende drie-beslissing volgorde creëerde de laatste-ronde shoot-out die het kampioenschap besliste. Mercedes protesteerde maar verloor."
      }
    },
    {
      question: {
        en: "What specific team directive code phrase did Red Bull use at Malaysia 2013 that Vettel ignored?",
        es: "¿Qué frase código de directiva de equipo específica usó Red Bull en Malasia 2013 que Vettel ignoró?",
        de: "Welche spezifische Team-Anweisungs-Codephrase verwendete Red Bull in Malaysia 2013, die Vettel ignorierte?",
        nl: "Welke specifieke team-instructie codefrase gebruikte Red Bull bij Maleisië 2013 die Vettel negeerde?"
      },
      options: [
        "Multi 21 - Webber P1, Vettel P2",
        "Hold position - no overtaking",
        "Code Alpha - maintain gaps",
        "Stay back - team orders"
      ],
      correct: 0,
      explanation: {
        en: "Red Bull used 'Multi 21' code meaning car #2 (Webber) should finish ahead of car #1 (Vettel). After final stops with Webber leading comfortably, Vettel ignored orders and aggressively attacked Webber, passing him for the win. Webber's furious 'Multi 21 Seb, Multi 21' radio message became iconic. Vettel apologized but damage to their relationship was permanent.",
        es: "Red Bull usó código 'Multi 21' significando auto #2 (Webber) debería terminar delante del auto #1 (Vettel). Después de paradas finales con Webber liderando cómodamente, Vettel ignoró órdenes y atacó agresivamente a Webber, pasándolo para ganar. El furioso mensaje de radio de Webber 'Multi 21 Seb, Multi 21' se volvió icónico. Vettel se disculpó pero daño a su relación fue permanente.",
        de: "Red Bull verwendete Code 'Multi 21', bedeutend Auto #2 (Webber) sollte vor Auto #1 (Vettel) finishen. Nach finalen Stops mit Webber komfortabel führend, ignorierte Vettel Anweisungen und griff Webber aggressiv an, überholte ihn zum Sieg. Webbers wütende Funknachricht 'Multi 21 Seb, Multi 21' wurde ikonisch. Vettel entschuldigte sich, aber Schaden ihrer Beziehung war dauerhaft.",
        nl: "Red Bull gebruikte 'Multi 21' code betekenend auto #2 (Webber) zou voor auto #1 (Vettel) moeten eindigen. Na laatste stops met Webber comfortabel leidend, negeerde Vettel orders en viel Webber agressief aan, passeerde hem voor winst. Webbers woedende radiobericht 'Multi 21 Seb, Multi 21' werd iconisch. Vettel verontschuldigde zich maar schade aan hun relatie was permanent."
      }
    },
    {
      question: {
        en: "How many points separated Prost and Lauda in the controversial 1984 championship?",
        es: "¿Cuántos puntos separaron a Prost y Lauda en el controvertido campeonato de 1984?",
        de: "Wie viele Punkte trennten Prost und Lauda in der kontroversen Meisterschaft 1984?",
        nl: "Hoeveel punten scheidden Prost en Lauda in het controversiële 1984 kampioenschap?"
      },
      options: [
        "0.5 points (half point for Monaco shortened race)",
        "1 point",
        "2 points",
        "0 points (tied on countback)"
      ],
      correct: 0,
      explanation: {
        en: "Lauda won the 1984 championship by just 0.5 points (72 vs 71.5) over teammate Prost. The half-point came from Monaco, red-flagged early due to rain where only half points were awarded. Prost won Monaco but got 4.5 points instead of 9. This remains F1's closest championship margin ever. Prost was devastated, winning 7 races vs Lauda's 5.",
        es: "Lauda ganó el campeonato 1984 por solo 0.5 puntos (72 vs 71.5) sobre compañero Prost. El medio punto vino de Mónaco, bandera roja temprana por lluvia donde solo medios puntos se otorgaron. Prost ganó Mónaco pero obtuvo 4.5 puntos en lugar de 9. Este sigue siendo el margen de campeonato más cercano de F1. Prost estaba devastado, ganando 7 carreras vs 5 de Lauda.",
        de: "Lauda gewann die Meisterschaft 1984 mit nur 0,5 Punkten (72 vs 71,5) vor Teamkollege Prost. Der halbe Punkt kam von Monaco, früh abgebrochen wegen Regen, wo nur halbe Punkte vergeben wurden. Prost gewann Monaco, bekam aber 4,5 statt 9 Punkte. Dies bleibt F1s knappster Meisterschaftsabstand. Prost war am Boden zerstört, gewann 7 Rennen vs Laudas 5.",
        nl: "Lauda won het 1984 kampioenschap met slechts 0,5 punten (72 vs 71,5) voor teamgenoot Prost. Het halve punt kwam van Monaco, vroeg afgevlagd door regen waar alleen halve punten werden toegekend. Prost won Monaco maar kreeg 4,5 punten in plaats van 9. Dit blijft F1's kleinste kampioenschapsmarge ooit. Prost was verwoest, won 7 races vs Lauda's 5."
      }
    },
    {
      question: {
        en: "What exact G-force did Verstappen experience in the Silverstone 2021 Copse corner crash with Hamilton?",
        es: "¿Qué fuerza G exacta experimentó Verstappen en el choque de la curva Copse de Silverstone 2021 con Hamilton?",
        de: "Welche exakte G-Kraft erfuhr Verstappen beim Silverstone 2021 Copse-Kurven-Crash mit Hamilton?",
        nl: "Welke exacte G-kracht ervoer Verstappen in de Silverstone 2021 Copse bocht crash met Hamilton?"
      },
      options: [
        "51G impact",
        "35G impact",
        "42G impact",
        "28G impact"
      ],
      correct: 0,
      explanation: {
        en: "Verstappen's crash at Copse registered 51G on impact with the barriers at Silverstone 2021. Hamilton touched Verstappen's right rear, sending him into the wall at high speed. Hamilton received a 10-second penalty but won the race. Red Bull demanded harsher penalties. Verstappen was taken to hospital for precautionary checks. The incident intensified their championship battle and team tensions.",
        es: "El choque de Verstappen en Copse registró 51G en impacto con barreras en Silverstone 2021. Hamilton tocó trasera derecha de Verstappen, enviándolo al muro a alta velocidad. Hamilton recibió penalización de 10 segundos pero ganó carrera. Red Bull exigió penalizaciones más duras. Verstappen fue llevado al hospital para chequeos precautorios. El incidente intensificó su batalla por campeonato y tensiones de equipos.",
        de: "Verstappens Crash in Copse registrierte 51G beim Aufprall auf Barrieren in Silverstone 2021. Hamilton berührte Verstappens rechtes Heck, schickte ihn mit hoher Geschwindigkeit in die Mauer. Hamilton erhielt 10-Sekunden-Strafe, gewann aber Rennen. Red Bull forderte härtere Strafen. Verstappen wurde vorsichtshalber ins Krankenhaus gebracht. Der Vorfall verschärfte ihren Titelkampf und Team-Spannungen.",
        nl: "Verstappen's crash bij Copse registreerde 51G bij impact met barriers in Silverstone 2021. Hamilton raakte Verstappen's rechtse achterkant, stuurde hem in de muur op hoge snelheid. Hamilton kreeg 10-seconden straf maar won race. Red Bull eiste zwaardere straffen. Verstappen werd uit voorzorg naar ziekenhuis gebracht. Het incident intensiveerde hun kampioenschapsstrijd en teamspanningen."
      }
    }
  ];

  return {
    name: {
      en: "Rivaliteiten Level 5",
      es: "Rivaliteiten Nivel 5",
      de: "Rivaliteiten Stufe 5",
      nl: "Rivaliteiten Level 5"
    },
    questions: questions
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = level5;
} else if (typeof window !== 'undefined') {
  window.level5 = level5;
}
