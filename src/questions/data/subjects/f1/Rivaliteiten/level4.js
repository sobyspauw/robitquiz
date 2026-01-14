const level4 = (function() {
  const questions = [
    {
      question: {
        en: "What was Senna's reaction after deliberately crashing into Prost at the 1990 Japanese GP?",
        es: "¿Cuál fue la reacción de Senna después de chocar deliberadamente contra Prost en el GP de Japón 1990?",
        de: "Was war Sennas Reaktion nach dem absichtlichen Crash in Prost beim Japan-GP 1990?",
        nl: "Wat was Senna's reactie na opzettelijk crashen in Prost bij de Japanse GP 1990?"
      },
      options: [
        "He admitted it was deliberate revenge for 1989",
        "He denied any wrongdoing",
        "He immediately apologized to Prost",
        "He blamed FIA for moving pole position"
      ],
      correct: 0,
      explanation: {
        en: "Senna later admitted the 1990 Suzuka turn 1 crash was deliberate revenge for 1989. He said if pole position hadn't been moved to the dirty side, it wouldn't have happened, but he admitted he made no attempt to make the corner.",
        es: "Senna admitió más tarde que el choque en la curva 1 de Suzuka 1990 fue venganza deliberada por 1989. Dijo que si la pole position no se hubiera movido al lado sucio, no habría sucedido, pero admitió que no intentó hacer la curva.",
        de: "Senna gab später zu, dass der Crash 1990 in Suzuka Kurve 1 absichtliche Rache für 1989 war. Er sagte, wenn die Pole-Position nicht auf die schmutzige Seite verlegt worden wäre, wäre es nicht passiert, aber er gab zu, keine Kurve nehmen zu wollen.",
        nl: "Senna gaf later toe dat de 1990 Suzuka bocht 1 crash opzettelijke wraak was voor 1989. Hij zei dat als pole position niet naar de vuile kant was verplaatst, het niet was gebeurd, maar hij gaf toe geen poging te hebben gedaan de bocht te nemen."
      }
    },
    {
      question: {
        en: "How many points separated Hamilton and Rosberg at the end of their 2014-2016 Mercedes rivalry?",
        es: "¿Cuántos puntos separaron a Hamilton y Rosberg al final de su rivalidad en Mercedes 2014-2016?",
        de: "Wie viele Punkte trennten Hamilton und Rosberg am Ende ihrer Mercedes-Rivalität 2014-2016?",
        nl: "Hoeveel punten scheidden Hamilton en Rosberg aan het einde van hun Mercedes-rivaliteit 2014-2016?"
      },
      options: [
        "Hamilton won 2 titles, Rosberg won 1 by 5 points",
        "Hamilton won all 3 titles",
        "Rosberg won 2 titles, Hamilton won 1",
        "They split evenly with different margins"
      ],
      correct: 0,
      explanation: {
        en: "In their intense 2014-2016 Mercedes rivalry, Hamilton won 2014 (67 points) and 2015 (59 points), while Rosberg won 2016 by just 5 points before immediately retiring. The rivalry was marked by multiple collisions and team tension.",
        es: "En su intensa rivalidad en Mercedes 2014-2016, Hamilton ganó 2014 (67 puntos) y 2015 (59 puntos), mientras Rosberg ganó 2016 por solo 5 puntos antes de retirarse inmediatamente. La rivalidad estuvo marcada por múltiples colisiones y tensión en el equipo.",
        de: "In ihrer intensiven Mercedes-Rivalität 2014-2016 gewann Hamilton 2014 (67 Punkte) und 2015 (59 Punkte), während Rosberg 2016 mit nur 5 Punkten gewann, bevor er sich sofort zurückzog. Die Rivalität war geprägt von mehreren Kollisionen und Teamspannungen.",
        nl: "In hun intense Mercedes-rivaliteit 2014-2016 won Hamilton 2014 (67 punten) en 2015 (59 punten), terwijl Rosberg 2016 won met slechts 5 punten voordat hij zich onmiddellijk terugtrok. De rivaliteit werd gekenmerkt door meerdere botsingen en teamspanning."
      }
    },
    {
      question: {
        en: "What controversial radio message did Vettel ignore at the 2013 Malaysian GP 'Multi 21' incident?",
        es: "¿Qué mensaje de radio controvertido ignoró Vettel en el incidente 'Multi 21' del GP de Malasia 2013?",
        de: "Welche kontroverse Funknachricht ignorierte Vettel beim 'Multi 21'-Vorfall beim Malaysia-GP 2013?",
        nl: "Welke controversiële radioboodschap negeerde Vettel bij het 'Multi 21' incident bij de Maleisische GP 2013?"
      },
      options: [
        "Multi 21 (car 2 ahead of car 1 - Webber ahead of Vettel)",
        "Hold position (simple hold station order)",
        "Let Mark past (direct order)",
        "Save fuel mode (fuel conservation)"
      ],
      correct: 0,
      explanation: {
        en: "'Multi 21' was Red Bull's code meaning car 2 (Webber) should finish ahead of car 1 (Vettel). Vettel ignored this and overtook Webber to win, later giving a half-hearted apology. Webber was furious, famously saying 'Multi 21, Seb' on the podium.",
        es: "'Multi 21' era el código de Red Bull que significaba que el auto 2 (Webber) debería terminar delante del auto 1 (Vettel). Vettel ignoró esto y adelantó a Webber para ganar, luego dio una disculpa poco sincera. Webber estaba furioso, diciendo famosamente 'Multi 21, Seb' en el podio.",
        de: "'Multi 21' war Red Bulls Code, dass Auto 2 (Webber) vor Auto 1 (Vettel) ins Ziel kommen sollte. Vettel ignorierte dies und überholte Webber zum Sieg, gab später eine halbherzige Entschuldigung. Webber war wütend und sagte berühmt 'Multi 21, Seb' auf dem Podium.",
        nl: "'Multi 21' was Red Bulls code dat auto 2 (Webber) voor auto 1 (Vettel) moest eindigen. Vettel negeerde dit en haalde Webber in om te winnen, gaf later een halfhartige verontschuldiging. Webber was woedend en zei beroemd 'Multi 21, Seb' op het podium."
      }
    },
    {
      question: {
        en: "At which corner did the controversial Hamilton-Verstappen 2021 British GP collision occur?",
        es: "¿En qué curva ocurrió la controvertida colisión Hamilton-Verstappen del GP británico 2021?",
        de: "An welcher Kurve ereignete sich die kontroverse Hamilton-Verstappen-Kollision beim britischen GP 2021?",
        nl: "Bij welke bocht was de controversiële Hamilton-Verstappen 2021 Britse GP botsing?"
      },
      options: [
        "Copse (high-speed right-hander)",
        "Maggotts (fast left)",
        "Stowe (medium-speed right)",
        "Brooklands (slow right)"
      ],
      correct: 0,
      explanation: {
        en: "The collision happened at Copse, Silverstone's high-speed opening right-hander. Hamilton was on the inside, Verstappen on the outside. Contact sent Verstappen into the barriers at 51G impact. Hamilton received a 10-second penalty but recovered to win, sparking huge controversy.",
        es: "La colisión ocurrió en Copse, la curva derecha de alta velocidad de Silverstone. Hamilton estaba en el interior, Verstappen en el exterior. El contacto envió a Verstappen contra las barreras con un impacto de 51G. Hamilton recibió una penalización de 10 segundos pero se recuperó para ganar, generando gran controversia.",
        de: "Die Kollision ereignete sich in Copse, Silverstones schneller Rechtskurve am Anfang. Hamilton war innen, Verstappen außen. Der Kontakt schickte Verstappen mit 51G-Aufprall in die Barrieren. Hamilton erhielt eine 10-Sekunden-Strafe, erholte sich aber zum Sieg, was große Kontroversen auslöste.",
        nl: "De botsing gebeurde bij Copse, Silverstone's snelle openingsbocht naar rechts. Hamilton zat aan de binnenkant, Verstappen aan de buitenkant. Contact stuurde Verstappen in de barrières bij 51G impact. Hamilton kreeg een 10-seconden straf maar herstelde om te winnen, wat grote controverse veroorzaakte."
      }
    },
    {
      question: {
        en: "How did Schumacher's deliberate 1997 Jerez crash on Villeneuve backfire?",
        es: "¿Cómo salió mal el choque deliberado de Schumacher en Jerez 1997 contra Villeneuve?",
        de: "Wie ging Schumachers absichtlicher Crash 1997 in Jerez gegen Villeneuve nach hinten los?",
        nl: "Hoe sloeg Schumachers opzettelijke 1997 Jerez crash op Villeneuve terug?"
      },
      options: [
        "Villeneuve continued, Schumacher retired, was stripped of points",
        "Both retired but Schumacher kept his points",
        "Schumacher won the race but was penalized later",
        "Villeneuve was disqualified for retaliation"
      ],
      correct: 0,
      explanation: {
        en: "At the 1997 European GP in Jerez, Schumacher turned into Villeneuve trying to crash them both out. Villeneuve's car continued and he secured the championship. Schumacher retired and was later stripped of all his 1997 points, though kept his race wins.",
        es: "En el GP de Europa 1997 en Jerez, Schumacher giró hacia Villeneuve tratando de sacarlos a ambos. El auto de Villeneuve continuó y aseguró el campeonato. Schumacher se retiró y luego fue despojado de todos sus puntos de 1997, aunque mantuvo sus victorias de carrera.",
        de: "Beim Europa-GP 1997 in Jerez lenkte Schumacher in Villeneuve, um beide auszuschalten. Villeneuves Auto fuhr weiter und er sicherte sich die Meisterschaft. Schumacher schied aus und wurden später alle seine 1997-Punkte aberkannt, obwohl er seine Rennsiege behielt.",
        nl: "Bij de Europese GP 1997 in Jerez stuurde Schumacher in op Villeneuve om beiden uit te schakelen. Villeneuves auto reed door en hij behaalde het kampioenschap. Schumacher viel uit en werden later al zijn 1997-punten afgenomen, hoewel hij zijn raceoverwinningen behield."
      }
    },
    {
      question: {
        en: "What was unique about the 2007 Hamilton-Alonso McLaren rivalry's championship outcome?",
        es: "¿Qué fue único sobre el resultado del campeonato de la rivalidad Hamilton-Alonso en McLaren 2007?",
        de: "Was war einzigartig am Meisterschaftsausgang der Hamilton-Alonso-McLaren-Rivalität 2007?",
        nl: "Wat was uniek aan de kampioenschapsuitkomst van de Hamilton-Alonso McLaren-rivaliteit 2007?"
      },
      options: [
        "Both finished equal on points, both lost to Räikkönen by 1 point",
        "Hamilton won as rookie, Alonso was 2nd",
        "Alonso won, Hamilton was disqualified",
        "They were both disqualified from championship"
      ],
      correct: 0,
      explanation: {
        en: "In 2007, rookie Hamilton and 2-time champion Alonso finished tied on 109 points. Both lost the championship to Kimi Räikkönen by just 1 point. Their intense rivalry, including the Hungary qualifying incident, may have cost them both the title.",
        es: "En 2007, el novato Hamilton y el bicampeón Alonso terminaron empatados en 109 puntos. Ambos perdieron el campeonato ante Kimi Räikkönen por solo 1 punto. Su intensa rivalidad, incluido el incidente de clasificación en Hungría, pudo haberles costado el título a ambos.",
        de: "2007 beendeten Rookie Hamilton und 2-facher Champion Alonso punktgleich mit 109 Punkten. Beide verloren die Meisterschaft an Kimi Räikkönen mit nur 1 Punkt. Ihre intensive Rivalität, einschließlich des Ungarn-Qualifying-Vorfalls, könnte beide den Titel gekostet haben.",
        nl: "In 2007 eindigden rookie Hamilton en 2-voudig kampioen Alonso gelijk op 109 punten. Beiden verloren het kampioenschap aan Kimi Räikkönen met slechts 1 punt. Hun intense rivaliteit, inclusief het Hongaarse kwalificatie-incident, heeft mogelijk beiden de titel gekost."
      }
    },
    {
      question: {
        en: "What happened in the infamous 2007 Hungary qualifying 'spy-gate' incident between Hamilton and Alonso?",
        es: "¿Qué pasó en el infame incidente 'spy-gate' de clasificación en Hungría 2007 entre Hamilton y Alonso?",
        de: "Was geschah beim berüchtigten 'Spy-Gate'-Qualifying-Vorfall 2007 in Ungarn zwischen Hamilton und Alonso?",
        nl: "Wat gebeurde er bij het beruchte 2007 Hongaarse kwalificatie 'spy-gate' incident tussen Hamilton en Alonso?"
      },
      options: [
        "Alonso held Hamilton in pits, preventing his final lap",
        "Hamilton blocked Alonso on track",
        "Both drivers refused team orders",
        "Alonso crashed deliberately into Hamilton"
      ],
      correct: 0,
      explanation: {
        en: "In Hungary 2007 qualifying, Alonso deliberately held Hamilton in his pit box for too long, preventing Hamilton from completing a final qualifying lap. Alonso was penalized 5 grid places. The incident severely damaged their relationship and McLaren's team harmony.",
        es: "En la clasificación de Hungría 2007, Alonso deliberadamente retuvo a Hamilton en su box demasiado tiempo, impidiendo que Hamilton completara una última vuelta de clasificación. Alonso fue penalizado con 5 posiciones en la parrilla. El incidente dañó severamente su relación y la armonía del equipo McLaren.",
        de: "Beim Ungarn-Qualifying 2007 hielt Alonso Hamilton absichtlich zu lange in seiner Box fest und hinderte Hamilton daran, eine letzte Qualifying-Runde zu absolvieren. Alonso wurde mit 5 Startplätzen bestraft. Der Vorfall beschädigte ihre Beziehung und McLarens Teamharmonie schwer.",
        nl: "In Hongarije 2007 kwalificatie hield Alonso Hamilton opzettelijk te lang in zijn pitbox vast, waardoor Hamilton geen laatste kwalificatieronde kon voltooien. Alonso kreeg een 5-plaatsen straf. Het incident beschadigde hun relatie en McLarens teamharmonie ernstig."
      }
    },
    {
      question: {
        en: "What was Vettel's excuse for the 2017 Azerbaijan GP incident where he drove into Hamilton?",
        es: "¿Cuál fue la excusa de Vettel para el incidente del GP de Azerbaiyán 2017 donde condujo contra Hamilton?",
        de: "Was war Vettels Ausrede für den Aserbaidschan-GP-Vorfall 2017, bei dem er in Hamilton fuhr?",
        nl: "Wat was Vettels excuus voor het 2017 Azerbeidzjaanse GP incident waarbij hij tegen Hamilton aanreed?"
      },
      options: [
        "He claimed Hamilton brake-tested him",
        "He said his steering failed",
        "He blamed a puncture",
        "He admitted it was deliberate anger"
      ],
      correct: 0,
      explanation: {
        en: "At Baku 2017, Vettel claimed Hamilton brake-tested him under safety car, causing the initial collision. In anger, Vettel then pulled alongside and deliberately drove into Hamilton's car. Vettel received a 10-second stop-go penalty but denied intentional contact initially.",
        es: "En Bakú 2017, Vettel afirmó que Hamilton le hizo una prueba de frenos bajo coche de seguridad, causando la colisión inicial. Enojado, Vettel se puso al lado y deliberadamente condujo contra el auto de Hamilton. Vettel recibió una penalización de 10 segundos stop-go pero negó contacto intencional inicialmente.",
        de: "In Baku 2017 behauptete Vettel, Hamilton habe ihn unter Safety-Car ausgebremst, was die erste Kollision verursachte. Wütend fuhr Vettel dann neben ihn und lenkte absichtlich in Hamiltons Auto. Vettel erhielt eine 10-Sekunden-Stop-and-Go-Strafe, bestritt zunächst aber absichtlichen Kontakt.",
        nl: "In Bakoe 2017 beweerde Vettel dat Hamilton hem remde onder safety car, wat de eerste botsing veroorzaakte. Boos reed Vettel toen naast hem en reed opzettelijk tegen Hamiltons auto. Vettel kreeg een 10-seconden stop-go straf maar ontkende aanvankelijk opzettelijk contact."
      }
    },
    {
      question: {
        en: "How many on-track collisions did Verstappen and Ricciardo have as Red Bull teammates (2016-2018)?",
        es: "¿Cuántas colisiones en pista tuvieron Verstappen y Ricciardo como compañeros de Red Bull (2016-2018)?",
        de: "Wie viele On-Track-Kollisionen hatten Verstappen und Ricciardo als Red Bull-Teamkollegen (2016-2018)?",
        nl: "Hoeveel on-track botsingen hadden Verstappen en Ricciardo als Red Bull-teamgenoten (2016-2018)?"
      },
      options: [
        "2 major collisions (Hungary 2017, Azerbaijan 2018)",
        "1 collision (Azerbaijan 2018 only)",
        "3 collisions across multiple races",
        "No collisions, just near-misses"
      ],
      correct: 0,
      explanation: {
        en: "Verstappen and Ricciardo had 2 major collisions: Hungary 2017 (racing incident) and Azerbaijan 2018 (both blamed each other, both retired). The Baku crash was particularly controversial as they were fighting for 4th, not even podium positions.",
        es: "Verstappen y Ricciardo tuvieron 2 colisiones importantes: Hungría 2017 (incidente de carrera) y Azerbaiyán 2018 (ambos se culparon, ambos se retiraron). El choque de Bakú fue particularmente controvertido ya que luchaban por el 4º lugar, ni siquiera posiciones de podio.",
        de: "Verstappen und Ricciardo hatten 2 größere Kollisionen: Ungarn 2017 (Rennvorfall) und Aserbaidschan 2018 (beide gaben sich die Schuld, beide schieden aus). Der Baku-Crash war besonders kontrovers, da sie um Platz 4 kämpften, nicht einmal um Podiumsplätze.",
        nl: "Verstappen en Ricciardo hadden 2 grote botsingen: Hongarije 2017 (race-incident) en Azerbeidzjan 2018 (beiden gaven elkaar de schuld, beiden vielen uit). De Bakoe crash was bijzonder controversieel omdat ze vochten om de 4e plaats, niet eens podiumpositie."
      }
    },
    {
      question: {
        en: "What was the margin by which Lauda won the 1984 championship over Prost?",
        es: "¿Cuál fue el margen por el que Lauda ganó el campeonato de 1984 sobre Prost?",
        de: "Mit welchem Vorsprung gewann Lauda 1984 die Meisterschaft gegen Prost?",
        nl: "Wat was de marge waarmee Lauda het 1984 kampioenschap won van Prost?"
      },
      options: [
        "0.5 points (half point from Monaco)",
        "1 point",
        "2 points",
        "3 points"
      ],
      correct: 0,
      explanation: {
        en: "Lauda beat Prost by just 0.5 points in 1984, the closest championship ever. The half-point came from Monaco, which was stopped early due to rain and only awarded half points. Both were McLaren teammates in an intense season-long battle.",
        es: "Lauda venció a Prost por solo 0.5 puntos en 1984, el campeonato más ajustado de la historia. El medio punto vino de Mónaco, que se detuvo temprano por lluvia y solo otorgó medios puntos. Ambos eran compañeros de McLaren en una intensa batalla de toda la temporada.",
        de: "Lauda schlug Prost 1984 mit nur 0,5 Punkten, die knappste Meisterschaft aller Zeiten. Der halbe Punkt kam von Monaco, das wegen Regens vorzeitig abgebrochen wurde und nur halbe Punkte vergab. Beide waren McLaren-Teamkollegen in einem intensiven Saisonkampf.",
        nl: "Lauda versloeg Prost met slechts 0,5 punten in 1984, het nauwste kampioenschap ooit. Het halve punt kwam van Monaco, dat vroeg werd gestopt vanwege regen en slechts halve punten gaf. Beiden waren McLaren-teamgenoten in een intense seizoenslange strijd."
      }
    },
    {
      question: {
        en: "What controversial safety car decision decided the 2021 Abu Dhabi finale?",
        es: "¿Qué controvertida decisión de coche de seguridad decidió la final de Abu Dhabi 2021?",
        de: "Welche kontroverse Safety-Car-Entscheidung entschied das Abu Dhabi-Finale 2021?",
        nl: "Welke controversiële safety car-beslissing besliste de 2021 Abu Dhabi finale?"
      },
      options: [
        "Only lapped cars between Hamilton and Verstappen were unlapped",
        "All lapped cars were unlapped normally",
        "No lapped cars were unlapped",
        "Safety car stayed out until race end"
      ],
      correct: 0,
      explanation: {
        en: "Race director Masi allowed only the 5 lapped cars between Hamilton and Verstappen to unlap, not all lapped cars as per normal procedure. This put Verstappen on fresh softs directly behind Hamilton on old hards for a final lap shootout. Mercedes protested but lost.",
        es: "El director de carrera Masi permitió que solo los 5 autos rezagados entre Hamilton y Verstappen se desrezagaran, no todos como el procedimiento normal. Esto puso a Verstappen en neumáticos blandos frescos directamente detrás de Hamilton en duros viejos para una última vuelta decisiva. Mercedes protestó pero perdió.",
        de: "Rennleiter Masi erlaubte nur den 5 überrundeten Autos zwischen Hamilton und Verstappen, sich zu entrunden, nicht allen wie üblich. Dies setzte Verstappen auf frischen Softs direkt hinter Hamilton auf alten Hards für eine letzte Runde. Mercedes protestierte, verlor aber.",
        nl: "Racedirecteur Masi stond alleen de 5 achterstandsrondes tussen Hamilton en Verstappen toe zich te ontronden, niet alle zoals normaal. Dit zette Verstappen op verse zachte banden direct achter Hamilton op oude harde voor een laatste ronde shoot-out. Mercedes protesteerde maar verloor."
      }
    },
    {
      question: {
        en: "What was Rosberg's reaction immediately after winning the 2016 championship?",
        es: "¿Cuál fue la reacción de Rosberg inmediatamente después de ganar el campeonato 2016?",
        de: "Was war Rosbergs Reaktion unmittelbar nach dem Gewinn der Meisterschaft 2016?",
        nl: "Wat was Rosbergs reactie direct na het winnen van het 2016 kampioenschap?"
      },
      options: [
        "Announced retirement 5 days later",
        "Celebrated and confirmed return for 2017",
        "Immediately challenged Hamilton to rematch",
        "Said he was moving to Ferrari"
      ],
      correct: 0,
      explanation: {
        en: "Just 5 days after winning the 2016 championship by 5 points over Hamilton, Rosberg shocked F1 by announcing his retirement. He cited the extreme mental and physical toll of beating Hamilton, saying he had achieved his life's ambition and wanted to spend time with family.",
        es: "Solo 5 días después de ganar el campeonato 2016 por 5 puntos sobre Hamilton, Rosberg sorprendió a la F1 anunciando su retiro. Citó el extremo desgaste mental y físico de vencer a Hamilton, diciendo que había logrado la ambición de su vida y quería pasar tiempo con su familia.",
        de: "Nur 5 Tage nach dem Gewinn der Meisterschaft 2016 mit 5 Punkten Vorsprung auf Hamilton schockierte Rosberg die F1 mit seiner Rücktrittsankündigung. Er nannte die extreme mentale und physische Belastung, Hamilton zu schlagen, sagte, er habe seine Lebensambition erreicht und wolle Zeit mit der Familie verbringen.",
        nl: "Slechts 5 dagen na het winnen van het 2016 kampioenschap met 5 punten voorsprong op Hamilton schokeerde Rosberg F1 door zijn pensioen aan te kondigen. Hij noemde de extreme mentale en fysieke tol van het verslaan van Hamilton, zeggende dat hij zijn levensambitie had bereikt en tijd met familie wilde doorbrengen."
      }
    },
    {
      question: {
        en: "How did Hill respond after losing the 1994 championship to Schumacher in controversial circumstances?",
        es: "¿Cómo respondió Hill después de perder el campeonato de 1994 ante Schumacher en circunstancias controvertidas?",
        de: "Wie reagierte Hill nach dem Verlust der Meisterschaft 1994 an Schumacher unter kontroversen Umständen?",
        nl: "Hoe reageerde Hill na het verliezen van het 1994 kampioenschap aan Schumacher onder controversiële omstandigheden?"
      },
      options: [
        "Maintained dignified silence, fought back to win 1996",
        "Immediately accused Schumacher publicly",
        "Retired from F1 in protest",
        "Demanded FIA investigation"
      ],
      correct: 0,
      explanation: {
        en: "After the controversial 1994 Adelaide collision, Hill maintained dignified silence despite believing Schumacher deliberately took them both out. He fought back to challenge for the 1995 title and finally won the 1996 championship with Williams, beating Villeneuve.",
        es: "Después de la controvertida colisión de Adelaide 1994, Hill mantuvo un silencio digno a pesar de creer que Schumacher los sacó deliberadamente a ambos. Luchó para desafiar por el título de 1995 y finalmente ganó el campeonato de 1996 con Williams, venciendo a Villeneuve.",
        de: "Nach der kontroversen Adelaide-Kollision 1994 bewahrte Hill würdevolles Schweigen, obwohl er glaubte, Schumacher habe beide absichtlich ausgeschaltet. Er kämpfte zurück, um 1995 um den Titel zu kämpfen, und gewann schließlich 1996 mit Williams die Meisterschaft gegen Villeneuve.",
        nl: "Na de controversiële Adelaide-botsing van 1994 behield Hill waardig stilzwijgen ondanks te geloven dat Schumacher beiden opzettelijk uitschakelde. Hij vocht terug om te strijden voor de 1995 titel en won uiteindelijk het 1996 kampioenschap met Williams, Villeneuve verslaand."
      }
    },
    {
      question: {
        en: "What punishment did Schumacher receive for the 1997 Jerez incident?",
        es: "¿Qué castigo recibió Schumacher por el incidente de Jerez 1997?",
        de: "Welche Strafe erhielt Schumacher für den Jerez-Vorfall 1997?",
        nl: "Welke straf kreeg Schumacher voor het Jerez 1997 incident?"
      },
      options: [
        "Stripped of all 1997 championship points, kept race wins",
        "Disqualified from the race only",
        "Race ban for 1998",
        "Fine but kept all points"
      ],
      correct: 0,
      explanation: {
        en: "The FIA stripped Schumacher of all his 1997 championship points (removing him from 2nd place) but allowed him to keep his race victories. He was also required to participate in FIA road safety campaigns. This was unprecedented punishment for a championship contender.",
        es: "La FIA despojó a Schumacher de todos sus puntos del campeonato de 1997 (eliminándolo del 2º lugar) pero le permitió mantener sus victorias de carrera. También se le exigió participar en campañas de seguridad vial de la FIA. Esto fue un castigo sin precedentes para un contendiente al campeonato.",
        de: "Die FIA entzog Schumacher alle seine 1997-Meisterschaftspunkte (entfernte ihn vom 2. Platz), erlaubte ihm aber, seine Rennsiege zu behalten. Er musste auch an FIA-Verkehrssicherheitskampagnen teilnehmen. Dies war eine beispiellose Strafe für einen Meisterschaftsanwärter.",
        nl: "De FIA ontnam Schumacher al zijn 1997 kampioenschapspunten (hem verwijderend van 2e plaats) maar stond hem toe zijn raceoverwinningen te behouden. Hij moest ook deelnemen aan FIA-verkeersveiligheidscampagnes. Dit was ongekende straf voor een kampioenschapskandidat."
      }
    },
    {
      question: {
        en: "What was the fastest lap difference in the epic 2005 Interlagos Montoya-Schumacher battle?",
        es: "¿Cuál fue la diferencia de vuelta más rápida en la épica batalla de Interlagos 2005 entre Montoya y Schumacher?",
        de: "Was war der Schnellste-Runde-Unterschied im epischen Interlagos-Kampf 2005 zwischen Montoya und Schumacher?",
        nl: "Wat was het snelste ronde-verschil in de epische 2005 Interlagos Montoya-Schumacher strijd?"
      },
      options: [
        "They were within 0.1s on pace, battled for several laps",
        "Montoya was 2s per lap faster",
        "Schumacher was 1s per lap faster",
        "They had identical lap times"
      ],
      correct: 0,
      explanation: {
        en: "At the 2005 Brazilian GP, Montoya and Schumacher were evenly matched on pace, trading positions lap after lap in a legendary wheel-to-wheel battle. Montoya eventually won in one of the V10 era's greatest duels, showcasing pure racing between two aggressive drivers.",
        es: "En el GP de Brasil 2005, Montoya y Schumacher estaban igualados en ritmo, intercambiando posiciones vuelta tras vuelta en una legendaria batalla rueda a rueda. Montoya eventualmente ganó en uno de los mejores duelos de la era V10, mostrando carrera pura entre dos pilotos agresivos.",
        de: "Beim Brasilien-GP 2005 waren Montoya und Schumacher im Tempo ausgeglichen, tauschten Runde für Runde Positionen in einem legendären Rad-an-Rad-Kampf. Montoya gewann schließlich in einem der größten Duelle der V10-Ära und zeigte pures Racing zwischen zwei aggressiven Fahrern.",
        nl: "Bij de Braziliaanse GP 2005 waren Montoya en Schumacher gelijk in tempo, wisselden ronde na ronde van positie in een legendarische wiel-aan-wiel strijd. Montoya won uiteindelijk in een van de grootste duels van het V10-tijdperk, pure racing tonend tussen twee aggressieve coureurs."
      }
    },
    {
      question: {
        en: "What specific move did Verstappen make on Leclerc at Austria 2019 that caused controversy?",
        es: "¿Qué movimiento específico hizo Verstappen sobre Leclerc en Austria 2019 que causó controversia?",
        de: "Welches spezifische Manöver machte Verstappen gegen Leclerc in Österreich 2019, das Kontroversen auslöste?",
        nl: "Welke specifieke actie maakte Verstappen op Leclerc bij Oostenrijk 2019 die controverse veroorzaakte?"
      },
      options: [
        "Late dive-bomb into turn 3, contact while overtaking",
        "Pushed Leclerc wide at turn 1",
        "Brake-tested Leclerc on straight",
        "Weaving under braking"
      ],
      correct: 0,
      explanation: {
        en: "With 3 laps remaining at the 2019 Austrian GP, Verstappen made a late dive-bomb into turn 3, making contact with Leclerc while passing for the lead. After lengthy investigation, stewards ruled it a racing incident. Leclerc was frustrated but the move was deemed legal, thrilling racing.",
        es: "Faltando 3 vueltas en el GP de Austria 2019, Verstappen hizo una zambullida tardía en la curva 3, haciendo contacto con Leclerc mientras pasaba al liderazgo. Después de una larga investigación, los comisarios lo consideraron un incidente de carrera. Leclerc estaba frustrado pero el movimiento fue considerado legal, emocionante carrera.",
        de: "3 Runden vor Schluss beim Österreich-GP 2019 machte Verstappen einen späten Angriff in Kurve 3, berührte Leclerc beim Überholmanöver zur Führung. Nach langer Untersuchung bewerteten die Rennkommissare es als Rennvorfall. Leclerc war frustriert, aber das Manöver war legal, spannendes Racing.",
        nl: "Met 3 ronden te gaan bij de Oostenrijkse GP 2019 maakte Verstappen een late duik-aanval in bocht 3, contact makend met Leclerc tijdens het passeren voor de leiding. Na lang onderzoek oordeelden stewards het een race-incident. Leclerc was gefrustreerd maar de actie werd legaal bevonden, spannende racing."
      }
    },
    {
      question: {
        en: "How did the 2010 Abu Dhabi championship battle between Vettel, Webber, Alonso, and Hamilton unfold?",
        es: "¿Cómo se desarrolló la batalla por el campeonato de Abu Dhabi 2010 entre Vettel, Webber, Alonso y Hamilton?",
        de: "Wie verlief der Meisterschaftskampf von Abu Dhabi 2010 zwischen Vettel, Webber, Alonso und Hamilton?",
        nl: "Hoe ontvouwde de 2010 Abu Dhabi kampioenschapsstrijd tussen Vettel, Webber, Alonso en Hamilton zich?"
      },
      options: [
        "Vettel won race, Alonso stuck behind Petrov, Vettel champion",
        "Alonso won race and championship",
        "Webber won race, Hamilton champion",
        "Hamilton won, Vettel 2nd, Alonso champion"
      ],
      correct: 0,
      explanation: {
        en: "In a 4-way title fight, Alonso needed to finish ahead of Vettel. Ferrari's early pit stop trapped Alonso behind Petrov's Renault. Despite being faster, Alonso couldn't pass. Vettel won the race from pole, becoming F1's youngest champion. Webber was 3rd in championship.",
        es: "En una lucha por el título de 4, Alonso necesitaba terminar delante de Vettel. El pit stop temprano de Ferrari atrapó a Alonso detrás del Renault de Petrov. A pesar de ser más rápido, Alonso no pudo pasar. Vettel ganó la carrera desde la pole, convirtiéndose en el campeón más joven de F1. Webber fue 3º en el campeonato.",
        de: "Im 4-Wege-Titelkampf musste Alonso vor Vettel ins Ziel kommen. Ferraris früher Boxenstopp fing Alonso hinter Petrovs Renault ein. Trotz höherer Geschwindigkeit konnte Alonso nicht überholen. Vettel gewann von Pole, wurde F1s jüngster Champion. Webber wurde Dritter in der Meisterschaft.",
        nl: "In een 4-weg titelstrijd moest Alonso voor Vettel eindigen. Ferrari's vroege pitstop sloot Alonso op achter Petrovs Renault. Ondanks sneller te zijn kon Alonso niet passeren. Vettel won de race vanaf pole, werd F1's jongste kampioen. Webber werd 3e in kampioenschap."
      }
    },
    {
      question: {
        en: "What was Hamilton's controversial tactic in the 2016 Abu Dhabi finale?",
        es: "¿Cuál fue la táctica controvertida de Hamilton en la final de Abu Dhabi 2016?",
        de: "Was war Hamiltons kontroverse Taktik im Abu Dhabi-Finale 2016?",
        nl: "Wat was Hamiltons controversiële tactiek in de 2016 Abu Dhabi finale?"
      },
      options: [
        "Deliberately slowed to back Rosberg into Vettel/Verstappen",
        "Pushed Rosberg off track multiple times",
        "Brake-tested Rosberg under safety car",
        "Refused to let Rosberg past when ordered"
      ],
      correct: 0,
      explanation: {
        en: "Leading the 2016 Abu Dhabi finale, Hamilton deliberately slowed the pace despite Mercedes' radio orders, trying to back Rosberg into Vettel and Verstappen so they could pass him. Rosberg held position and won the championship by 5 points, retiring 5 days later.",
        es: "Liderando la final de Abu Dhabi 2016, Hamilton deliberadamente redujo el ritmo a pesar de las órdenes de radio de Mercedes, tratando de llevar a Rosberg hacia Vettel y Verstappen para que pudieran pasarlo. Rosberg mantuvo la posición y ganó el campeonato por 5 puntos, retirándose 5 días después.",
        de: "In Führung beim Abu Dhabi-Finale 2016 verlangsamte Hamilton absichtlich das Tempo trotz Mercedes' Funkbefehlen und versuchte, Rosberg in Vettel und Verstappen zurückzudrängen. Rosberg hielt die Position und gewann die Meisterschaft mit 5 Punkten, trat 5 Tage später zurück.",
        nl: "Leidend in de 2016 Abu Dhabi finale vertraagde Hamilton opzettelijk het tempo ondanks Mercedes' radio-orders, proberend Rosberg terug te drijven in Vettel en Verstappen zodat ze hem konden passeren. Rosberg hield positie en won het kampioenschap met 5 punten, stopte 5 dagen later."
      }
    },
    {
      question: {
        en: "What happened at the 2018 German GP that shifted the Vettel-Hamilton championship battle?",
        es: "¿Qué pasó en el GP de Alemania 2018 que cambió la batalla por el campeonato entre Vettel y Hamilton?",
        de: "Was geschah beim Deutschland-GP 2018, das den Vettel-Hamilton-Meisterschaftskampf verschob?",
        nl: "Wat gebeurde er bij de Duitse GP 2018 dat de Vettel-Hamilton kampioenschapsstrijd verschoof?"
      },
      options: [
        "Vettel crashed from lead in rain, Hamilton won from 14th",
        "Hamilton crashed, Vettel won easily",
        "Both drivers collided and retired",
        "Vettel won, extended championship lead"
      ],
      correct: 0,
      explanation: {
        en: "At his home race Hockenheim 2018, Vettel was leading in mixed conditions when he crashed at turn 13 (Sachskurve) on lap 51. Hamilton recovered from 14th on grid to win. This was a turning point; Hamilton went on to win the championship while Vettel's challenge faded.",
        es: "En su carrera local Hockenheim 2018, Vettel lideraba en condiciones mixtas cuando se estrelló en la curva 13 (Sachskurve) en la vuelta 51. Hamilton se recuperó desde el 14º en la parrilla para ganar. Esto fue un punto de inflexión; Hamilton continuó para ganar el campeonato mientras el desafío de Vettel se desvaneció.",
        de: "Bei seinem Heimrennen Hockenheim 2018 führte Vettel bei wechselnden Bedingungen, als er in Runde 51 in Kurve 13 (Sachskurve) crashte. Hamilton erholte sich von Startplatz 14 zum Sieg. Dies war ein Wendepunkt; Hamilton gewann die Meisterschaft, während Vettels Herausforderung verblasste.",
        nl: "Bij zijn thuisrace Hockenheim 2018 leidde Vettel in wisselende omstandigheden toen hij crashte in bocht 13 (Sachskurve) in ronde 51. Hamilton herstelde vanaf 14e op de grid om te winnen. Dit was een keerpunt; Hamilton won het kampioenschap terwijl Vettels uitdaging vervaagde."
      }
    },
    {
      question: {
        en: "What was Webber's famous radio message after Vettel disobeyed Multi 21?",
        es: "¿Cuál fue el famoso mensaje de radio de Webber después de que Vettel desobedeciera Multi 21?",
        de: "Was war Webbers berühmte Funknachricht, nachdem Vettel Multi 21 missachtet hatte?",
        nl: "Wat was Webbers beroemde radioboodschap nadat Vettel Multi 21 negeerde?"
      },
      options: [
        "Multi 21 Seb, Multi 21 (said on podium)",
        "You destroyed our race",
        "That's the last time I trust you",
        "I'm done with this team"
      ],
      correct: 0,
      explanation: {
        en: "On the podium after Malaysia 2013, Webber coldly said 'Multi 21, Seb. Multi 21' directly to Vettel, making the team orders code public. Their relationship never recovered. Webber left Red Bull for sports cars at season end, while Vettel won his 4th consecutive title.",
        es: "En el podio después de Malasia 2013, Webber dijo fríamente 'Multi 21, Seb. Multi 21' directamente a Vettel, haciendo público el código de órdenes del equipo. Su relación nunca se recuperó. Webber dejó Red Bull por deportivos al final de temporada, mientras Vettel ganó su 4º título consecutivo.",
        de: "Auf dem Podium nach Malaysia 2013 sagte Webber kalt 'Multi 21, Seb. Multi 21' direkt zu Vettel und machte den Teamorder-Code öffentlich. Ihre Beziehung erholte sich nie. Webber verließ Red Bull für Sportwagen am Saisonende, während Vettel seinen 4. Titel in Folge gewann.",
        nl: "Op het podium na Maleisië 2013 zei Webber koud 'Multi 21, Seb. Multi 21' direct tegen Vettel, makend de teamorder code publiek. Hun relatie herstelde nooit. Webber verliet Red Bull voor sportwagens aan het seizoenseinde, terwijl Vettel zijn 4e opeenvolgende titel won."
      }
    },
    {
      question: {
        en: "How did Ferrari's team orders in 2010 Germany 'Fernando is faster than you' affect Massa?",
        es: "¿Cómo afectaron las órdenes de equipo de Ferrari en Alemania 2010 'Fernando es más rápido que tú' a Massa?",
        de: "Wie wirkten sich Ferraris Teamorders in Deutschland 2010 'Fernando ist schneller als du' auf Massa aus?",
        nl: "Hoe beïnvloedden Ferrari's teamorders in Duitsland 2010 'Fernando is sneller dan jij' Massa?"
      },
      options: [
        "Massa let Alonso win, was clearly upset afterward",
        "Massa refused and kept the lead",
        "Massa and Alonso collided",
        "Massa was happy to help teammate"
      ],
      correct: 0,
      explanation: {
        en: "At the 2010 German GP, Ferrari radioed Massa 'Fernando is faster than you' as a coded team order. Massa reluctantly let Alonso past to win. Post-race, Massa was visibly upset. Ferrari was fined $100,000 and team orders were banned (later lifted).",
        es: "En el GP de Alemania 2010, Ferrari comunicó a Massa por radio 'Fernando es más rápido que tú' como una orden de equipo codificada. Massa dejó pasar a Alonso a regañadientes para ganar. Después de la carrera, Massa estaba visiblemente molesto. Ferrari fue multada con $100,000 y las órdenes de equipo fueron prohibidas (luego levantadas).",
        de: "Beim Deutschland-GP 2010 funkte Ferrari an Massa 'Fernando ist schneller als du' als codierte Teamorder. Massa ließ Alonso widerwillig zum Sieg vorbei. Nach dem Rennen war Massa sichtlich verärgert. Ferrari wurde mit 100.000$ bestraft und Teamorders verboten (später aufgehoben).",
        nl: "Bij de Duitse GP 2010 radiode Ferrari naar Massa 'Fernando is sneller dan jij' als gecodeerde teamorder. Massa liet Alonso met tegenzin passeren om te winnen. Na de race was Massa zichtbaar van streek. Ferrari kreeg een boete van $100.000 en teamorders werden verboden (later opgeheven)."
      }
    },
    {
      question: {
        en: "What was unique about the Vettel-Leclerc 2019 Brazilian GP collision?",
        es: "¿Qué fue único sobre la colisión Vettel-Leclerc del GP de Brasil 2019?",
        de: "Was war einzigartig an der Vettel-Leclerc-Kollision beim Brasilien-GP 2019?",
        nl: "Wat was uniek aan de Vettel-Leclerc 2019 Braziliaanse GP botsing?"
      },
      options: [
        "Both Ferrari drivers retired while fighting for 4th",
        "They were fighting for the win",
        "It was the first lap",
        "Only Vettel retired"
      ],
      correct: 0,
      explanation: {
        en: "At Brazil 2019 lap 66, Ferrari teammates Vettel and Leclerc collided while battling for 4th place (not even podium). Both retired with punctures. The incident highlighted their tense 2019 relationship and Ferrari's inability to manage inter-team rivalry effectively.",
        es: "En Brasil 2019 vuelta 66, los compañeros de Ferrari Vettel y Leclerc chocaron mientras luchaban por el 4º lugar (ni siquiera podio). Ambos se retiraron con pinchazos. El incidente destacó su tensa relación en 2019 y la incapacidad de Ferrari para manejar efectivamente la rivalidad interna.",
        de: "In Brasilien 2019 Runde 66 kollidierten die Ferrari-Teamkollegen Vettel und Leclerc im Kampf um Platz 4 (nicht einmal Podium). Beide schieden mit Reifenschäden aus. Der Vorfall verdeutlichte ihre angespannte 2019-Beziehung und Ferraris Unfähigkeit, interne Rivalität effektiv zu managen.",
        nl: "Bij Brazilië 2019 ronde 66 botsten Ferrari-teamgenoten Vettel en Leclerc terwijl ze vochten om de 4e plaats (niet eens podium). Beiden vielen uit met lekke banden. Het incident benadrukte hun gespannen 2019-relatie en Ferrari's onvermogen om interne rivaliteit effectief te beheren."
      }
    },
    {
      question: {
        en: "What controversial move did Verstappen make defending against Räikkönen at Spa 2016?",
        es: "¿Qué movimiento controvertido hizo Verstappen defendiendo contra Räikkönen en Spa 2016?",
        de: "Welches kontroverse Manöver machte Verstappen bei der Verteidigung gegen Räikkönen in Spa 2016?",
        nl: "Welke controversiële actie maakte Verstappen verdedigend tegen Räikkönen bij Spa 2016?"
      },
      options: [
        "Multiple direction changes under braking on Kemmel Straight",
        "Pushed Räikkönen off at Eau Rouge",
        "Brake-tested Räikkönen at Bus Stop",
        "Cut across Räikkönen at La Source"
      ],
      correct: 0,
      explanation: {
        en: "At Spa 2016, Verstappen made multiple aggressive direction changes while defending from Räikkönen on the Kemmel Straight, forcing Räikkönen to back off. Räikkönen complained 'He pushed me into the grass!' This led to new rules clarifying that only one defensive move is allowed.",
        es: "En Spa 2016, Verstappen hizo múltiples cambios agresivos de dirección mientras defendía de Räikkönen en la recta Kemmel, obligando a Räikkönen a retroceder. Räikkönen se quejó '¡Me empujó al césped!' Esto llevó a nuevas reglas aclarando que solo se permite un movimiento defensivo.",
        de: "In Spa 2016 machte Verstappen mehrere aggressive Richtungswechsel bei der Verteidigung gegen Räikkönen auf der Kemmel-Geraden und zwang Räikkönen zum Zurückweichen. Räikkönen beschwerte sich 'Er hat mich ins Gras gedrängt!' Dies führte zu neuen Regeln, die nur einen Defensivzug erlauben.",
        nl: "Bij Spa 2016 maakte Verstappen meerdere aggressieve richtingveranderingen tijdens verdedigen tegen Räikkönen op het Kemmel Straight, Räikkönen dwingend terug te trekken. Räikkönen klaagde 'Hij duwde me in het gras!' Dit leidde tot nieuwe regels die slechts één verdedigende actie toestaan."
      }
    },
    {
      question: {
        en: "What was the outcome of the 2008 Brazilian GP final-lap drama between Hamilton and Massa?",
        es: "¿Cuál fue el resultado del drama de la última vuelta del GP de Brasil 2008 entre Hamilton y Massa?",
        de: "Was war das Ergebnis des Drama der letzten Runde beim Brasilien-GP 2008 zwischen Hamilton und Massa?",
        nl: "Wat was de uitkomst van het 2008 Braziliaanse GP laatste-ronde drama tussen Hamilton en Massa?"
      },
      options: [
        "Hamilton passed Glock last corner, won championship by 1 point",
        "Massa won championship",
        "Hamilton won race but lost championship",
        "Glock held position, Massa champion"
      ],
      correct: 0,
      explanation: {
        en: "At the final corner of the final lap in Brazil 2008, Hamilton passed Glock (on worn dry tires in rain) to take 5th place, winning the championship by 1 point. Massa won the race and briefly thought he was champion. It remains one of F1's most dramatic finishes.",
        es: "En la última curva de la última vuelta en Brasil 2008, Hamilton adelantó a Glock (con neumáticos secos gastados en lluvia) para tomar el 5º lugar, ganando el campeonato por 1 punto. Massa ganó la carrera y pensó brevemente que era campeón. Sigue siendo uno de los finales más dramáticos de F1.",
        de: "In der letzten Kurve der letzten Runde in Brasilien 2008 überholte Hamilton Glock (auf abgefahrenen Slicks im Regen) für Platz 5 und gewann die Meisterschaft mit 1 Punkt. Massa gewann das Rennen und dachte kurz, er sei Champion. Es bleibt eines der dramatischsten F1-Finales.",
        nl: "Bij de laatste bocht van de laatste ronde in Brazilië 2008 passeerde Hamilton Glock (op versleten droge banden in regen) om 5e te worden, winnend het kampioenschap met 1 punt. Massa won de race en dacht kort kampioen te zijn. Het blijft een van F1's meest dramatische finales."
      }
    },
    {
      question: {
        en: "How many times did Hamilton and Massa collide during their intense 2011 rivalry?",
        es: "¿Cuántas veces chocaron Hamilton y Massa durante su intensa rivalidad de 2011?",
        de: "Wie oft kollidierten Hamilton und Massa während ihrer intensiven Rivalität 2011?",
        nl: "Hoe vaak botsten Hamilton en Massa tijdens hun intense 2011 rivaliteit?"
      },
      options: [
        "6 collisions throughout the season",
        "3 collisions",
        "8 collisions",
        "2 collisions"
      ],
      correct: 0,
      explanation: {
        en: "Hamilton and Massa had 6 collisions in 2011 (Monaco, Singapore, India, and others). After India, Massa famously complained to media about Hamilton's aggressive racing. Their rivalry stemmed partly from the controversial 2008 championship finish. By 2012, tensions had eased.",
        es: "Hamilton y Massa tuvieron 6 colisiones en 2011 (Mónaco, Singapur, India y otros). Después de India, Massa se quejó famosamente a los medios sobre el estilo agresivo de Hamilton. Su rivalidad surgió en parte del controvertido final del campeonato de 2008. Para 2012, las tensiones se habían aliviado.",
        de: "Hamilton und Massa hatten 2011 6 Kollisionen (Monaco, Singapur, Indien und andere). Nach Indien beschwerte sich Massa bei den Medien über Hamiltons aggressives Fahren. Ihre Rivalität stammte teilweise vom kontroversen 2008-Meisterschaftsfinale. Bis 2012 hatten sich die Spannungen gelegt.",
        nl: "Hamilton en Massa hadden 6 botsingen in 2011 (Monaco, Singapore, India en anderen). Na India klaagde Massa beroemd bij media over Hamiltons aggressieve rijstijl. Hun rivaliteit kwam deels voort uit de controversiële 2008 kampioenschapsfinale. Tegen 2012 waren spanningen afgenomen."
      }
    },
    {
      question: {
        en: "What was Prost's nickname for Senna that reflected their rivalry?",
        es: "¿Cuál fue el apodo de Prost para Senna que reflejaba su rivalidad?",
        de: "Was war Prosts Spitzname für Senna, der ihre Rivalität widerspiegelte?",
        nl: "Wat was Prosts bijnaam voor Senna die hun rivaliteit weerspiegelde?"
      },
      options: [
        "Called him dangerous and willing to win at any cost",
        "The Brazilian Rocket",
        "The Rain Master",
        "Magic Senna"
      ],
      correct: 0,
      explanation: {
        en: "Prost famously called Senna dangerous and said he was willing to cause accidents to win. After Suzuka 1990, Prost said Senna 'would rather die than not win'. Prost represented calculated precision while Senna embodied fearless aggression, creating one of F1's greatest philosophical rivalries.",
        es: "Prost llamó famosamente a Senna peligroso y dijo que estaba dispuesto a causar accidentes para ganar. Después de Suzuka 1990, Prost dijo que Senna 'preferiría morir antes que no ganar'. Prost representaba precisión calculada mientras Senna encarnaba agresión sin miedo, creando una de las mayores rivalidades filosóficas de F1.",
        de: "Prost nannte Senna berühmt gefährlich und sagte, er sei bereit, Unfälle zu verursachen, um zu gewinnen. Nach Suzuka 1990 sagte Prost, Senna 'würde lieber sterben als nicht gewinnen'. Prost repräsentierte kalkulierte Präzision, während Senna furchtlose Aggression verkörperte, eine der größten philosophischen F1-Rivalitäten schaffend.",
        nl: "Prost noemde Senna beroemd gevaarlijk en zei dat hij bereid was ongevallen te veroorzaken om te winnen. Na Suzuka 1990 zei Prost dat Senna 'liever zou sterven dan niet winnen'. Prost vertegenwoordigde berekende precisie terwijl Senna onbevreesde agressie belichaamde, één van F1's grootste filosofische rivaliteiten creërend."
      }
    },
    {
      question: {
        en: "What controversial statement did Rosberg make after the 2014 Spa collision with Hamilton?",
        es: "¿Qué declaración controvertida hizo Rosberg después de la colisión de Spa 2014 con Hamilton?",
        de: "Welche kontroverse Aussage machte Rosberg nach der Spa-Kollision 2014 mit Hamilton?",
        nl: "Welke controversiële verklaring deed Rosberg na de 2014 Spa botsing met Hamilton?"
      },
      options: [
        "Admitted he could have avoided the collision",
        "Blamed Hamilton entirely",
        "Said it was completely accidental",
        "Claimed Hamilton brake-tested him"
      ],
      correct: 0,
      explanation: {
        en: "In a Mercedes team meeting after Spa 2014, Rosberg admitted he could have avoided the collision with Hamilton but didn't, essentially confirming it was deliberate retaliation for earlier battles. This admission severely damaged their relationship and shocked the team.",
        es: "En una reunión del equipo Mercedes después de Spa 2014, Rosberg admitió que podría haber evitado la colisión con Hamilton pero no lo hizo, esencialmente confirmando que fue represalia deliberada por batallas anteriores. Esta admisión dañó severamente su relación y sorprendió al equipo.",
        de: "In einem Mercedes-Teammeeting nach Spa 2014 gab Rosberg zu, die Kollision mit Hamilton hätte vermeiden können, es aber nicht tat, was im Wesentlichen bestätigte, es war absichtliche Vergeltung für frühere Kämpfe. Dieses Geständnis beschädigte ihre Beziehung schwer und schockierte das Team.",
        nl: "In een Mercedes-teammeeting na Spa 2014 gaf Rosberg toe dat hij de botsing met Hamilton had kunnen vermijden maar dat niet deed, in wezen bevestigend dat het opzettelijke vergelding was voor eerdere gevechten. Deze bekentenis beschadigde hun relatie ernstig en schokte het team."
      }
    },
    {
      question: {
        en: "What was the specific turn where the 2021 Italian GP Hamilton-Verstappen collision occurred?",
        es: "¿Cuál fue la curva específica donde ocurrió la colisión Hamilton-Verstappen del GP de Italia 2021?",
        de: "Was war die spezifische Kurve, an der die Hamilton-Verstappen-Kollision beim Italien-GP 2021 stattfand?",
        nl: "Wat was de specifieke bocht waar de 2021 Italiaanse GP Hamilton-Verstappen botsing plaatsvond?"
      },
      options: [
        "Turn 2 (Variante del Rettifilo chicane)",
        "Turn 1 (Rettifilo)",
        "Lesmo 1",
        "Ascari chicane"
      ],
      correct: 0,
      explanation: {
        en: "At Monza 2021 turn 2, after a slow Verstappen pit stop, he rejoined alongside Hamilton. They made contact through the chicane, with Verstappen's car ending up on top of Hamilton's Mercedes. The halo saved Hamilton from serious injury. Both retired; neither was clearly at fault.",
        es: "En Monza 2021 curva 2, después de un pit stop lento de Verstappen, se reincorporó al lado de Hamilton. Hicieron contacto a través de la chicana, con el auto de Verstappen terminando encima del Mercedes de Hamilton. El halo salvó a Hamilton de lesiones graves. Ambos se retiraron; ninguno fue claramente culpable.",
        de: "In Monza 2021 Kurve 2, nach Verstappens langsamem Boxenstopp, kehrte er neben Hamilton zurück. Sie berührten sich durch die Schikane, wobei Verstappens Auto auf Hamiltons Mercedes landete. Der Halo rettete Hamilton vor schweren Verletzungen. Beide schieden aus; keiner war eindeutig schuld.",
        nl: "Bij Monza 2021 bocht 2, na Verstappens trage pitstop, voegde hij zich naast Hamilton. Ze raakten elkaar door de chicane, waarbij Verstappens auto bovenop Hamiltons Mercedes belandde. De halo redde Hamilton van ernstig letsel. Beiden vielen uit; geen van beiden was duidelijk schuldig."
      }
    },
    {
      question: {
        en: "How did the Schumacher-Häkkinen 1998-2000 rivalry compare in championships won?",
        es: "¿Cómo se comparó la rivalidad Schumacher-Häkkinen 1998-2000 en campeonatos ganados?",
        de: "Wie schnitt die Schumacher-Häkkinen-Rivalität 1998-2000 bei gewonnenen Meisterschaften ab?",
        nl: "Hoe verliep de Schumacher-Häkkinen 1998-2000 rivaliteit in gewonnen kampioenschappen?"
      },
      options: [
        "Häkkinen won 2 (1998, 1999), Schumacher won 1 (2000)",
        "Schumacher won all 3",
        "Häkkinen won all 3",
        "Each won 1, with 1 going to another driver"
      ],
      correct: 0,
      explanation: {
        en: "Mika Häkkinen won 1998 and 1999 championships with McLaren-Mercedes, while Michael Schumacher won 2000 with Ferrari. Their battles were characterized by mutual respect and clean racing, contrasting with the Senna-Prost acrimony. Both pushed each other to extraordinary levels.",
        es: "Mika Häkkinen ganó los campeonatos de 1998 y 1999 con McLaren-Mercedes, mientras Michael Schumacher ganó 2000 con Ferrari. Sus batallas se caracterizaron por respeto mutuo y carreras limpias, contrastando con la acritud Senna-Prost. Ambos se empujaron mutuamente a niveles extraordinarios.",
        de: "Mika Häkkinen gewann 1998 und 1999 Meisterschaften mit McLaren-Mercedes, während Michael Schumacher 2000 mit Ferrari gewann. Ihre Kämpfe waren geprägt von gegenseitigem Respekt und sauberem Racing, im Gegensatz zur Senna-Prost-Verbitterung. Beide trieben sich gegenseitig zu außergewöhnlichen Leistungen.",
        nl: "Mika Häkkinen won 1998 en 1999 kampioenschappen met McLaren-Mercedes, terwijl Michael Schumacher 2000 won met Ferrari. Hun gevechten werden gekenmerkt door wederzijds respect en schoon racen, contrasterend met de Senna-Prost wrok. Beiden dreven elkaar tot buitengewone niveaus."
      }
    },
    {
      question: {
        en: "What was the controversial aspect of Ferrari's 2002 Austrian GP team orders?",
        es: "¿Cuál fue el aspecto controvertido de las órdenes de equipo de Ferrari en el GP de Austria 2002?",
        de: "Was war der kontroverse Aspekt von Ferraris Teamorders beim Österreich-GP 2002?",
        nl: "Wat was het controversiële aspect van Ferrari's 2002 Oostenrijkse GP teamorders?"
      },
      options: [
        "Barrichello slowed meters from finish line to let Schumacher win",
        "Orders were given on first lap",
        "Barrichello refused orders",
        "Both drivers collided"
      ],
      correct: 0,
      explanation: {
        en: "At Austria 2002, Barrichello led the entire race until the final meters, when he slowed to let Schumacher win. The crowd booed. The blatant team orders led to rule changes banning such tactics (later reversed). Schumacher awkwardly tried to give Barrichello top podium step.",
        es: "En Austria 2002, Barrichello lideró toda la carrera hasta los metros finales, cuando redujo para dejar ganar a Schumacher. La multitud abucheó. Las órdenes de equipo flagrantes llevaron a cambios de reglas prohibiendo tales tácticas (luego revertidas). Schumacher intentó torpemente dar a Barrichello el escalón superior del podio.",
        de: "In Österreich 2002 führte Barrichello das gesamte Rennen bis zu den letzten Metern, als er verlangsamte, um Schumacher gewinnen zu lassen. Die Menge buhte. Die offensichtlichen Teamorders führten zu Regeländerungen, die solche Taktiken verboten (später rückgängig gemacht). Schumacher versuchte unbeholfen, Barrichello die oberste Podiumsstufe zu geben.",
        nl: "Bij Oostenrijk 2002 leidde Barrichello de hele race tot de laatste meters, toen hij vertraagde om Schumacher te laten winnen. Het publiek joelde. De flagrante teamorders leidden tot regelwijzigingen die dergelijke tactieken verboden (later teruggedraaid). Schumacher probeerde onhandig Barrichello de bovenste podiumtrede te geven."
      }
    },
    {
      question: {
        en: "What was Hill's immediate reaction after the controversial 1994 Adelaide collision?",
        es: "¿Cuál fue la reacción inmediata de Hill después de la controvertida colisión de Adelaide 1994?",
        de: "Was war Hills unmittelbare Reaktion nach der kontroversen Adelaide-Kollision 1994?",
        nl: "Wat was Hills onmiddellijke reactie na de controversiële Adelaide 1994 botsing?"
      },
      options: [
        "Tried to continue racing before retiring with damage",
        "Immediately blamed Schumacher publicly",
        "Accepted defeat graciously",
        "Demanded race restart"
      ],
      correct: 0,
      explanation: {
        en: "After Schumacher turned into him at Adelaide 1994, Hill tried to continue despite damage, showing his determination to win the championship. He retired shortly after. Post-race, Hill was diplomatic publicly but believed Schumacher deliberately took them both out. Schumacher won the title by 1 point.",
        es: "Después de que Schumacher giró hacia él en Adelaide 1994, Hill intentó continuar a pesar del daño, mostrando su determinación de ganar el campeonato. Se retiró poco después. Después de la carrera, Hill fue diplomático públicamente pero creía que Schumacher los sacó deliberadamente a ambos. Schumacher ganó el título por 1 punto.",
        de: "Nachdem Schumacher in Adelaide 1994 in ihn lenkte, versuchte Hill trotz Schaden weiterzufahren und zeigte seine Entschlossenheit, die Meisterschaft zu gewinnen. Er gab kurz darauf auf. Nach dem Rennen war Hill öffentlich diplomatisch, glaubte aber, Schumacher habe beide absichtlich ausgeschaltet. Schumacher gewann den Titel mit 1 Punkt.",
        nl: "Nadat Schumacher in hem stuurde bij Adelaide 1994, probeerde Hill door te gaan ondanks schade, tonend zijn vastberadenheid om het kampioenschap te winnen. Hij viel kort daarna uit. Na de race was Hill publiekelijk diplomatiek maar geloofde dat Schumacher beiden opzettelijk uitschakelde. Schumacher won de titel met 1 punt."
      }
    },
    {
      question: {
        en: "How did Vettel's relationship with Webber affect Red Bull's 2010 championship?",
        es: "¿Cómo afectó la relación de Vettel con Webber al campeonato de Red Bull de 2010?",
        de: "Wie wirkte sich Vettels Beziehung zu Webber auf Red Bulls Meisterschaft 2010 aus?",
        nl: "Hoe beïnvloedde Vettels relatie met Webber Red Bull's 2010 kampioenschap?"
      },
      options: [
        "Vettel won, Webber 3rd in 4-way title fight",
        "Webber won championship",
        "Both lost to external rival",
        "They tied on points"
      ],
      correct: 0,
      explanation: {
        en: "In 2010's 4-way title finale, Vettel won the championship while teammate Webber finished 3rd. Their Turkey collision earlier that season exemplified their tense relationship. Despite being teammates, they rarely helped each other, prioritizing individual glory over team success.",
        es: "En la final de título de 4 de 2010, Vettel ganó el campeonato mientras su compañero Webber terminó 3º. Su colisión en Turquía anteriormente esa temporada ejemplificó su tensa relación. A pesar de ser compañeros, rara vez se ayudaban, priorizando gloria individual sobre éxito del equipo.",
        de: "Im 4-Wege-Titelfinale 2010 gewann Vettel die Meisterschaft, während Teamkollege Webber Dritter wurde. Ihre Türkei-Kollision früher in der Saison exemplifizierte ihre angespannte Beziehung. Trotz Teamkollegen zu sein, halfen sie sich selten und priorisierten individuellen Ruhm über Teamerfolg.",
        nl: "In 2010's 4-weg titelfinale won Vettel het kampioenschap terwijl teamgenoot Webber 3e werd. Hun Turkije-botsing eerder dat seizoen exemplificeerde hun gespannen relatie. Ondanks teamgenoten te zijn, hielpen ze elkaar zelden, individualistische glorie prioriterend boven teamsucces."
      }
    },
    {
      question: {
        en: "What was the impact of the 2021 Silverstone collision on Verstappen's championship points lead?",
        es: "¿Cuál fue el impacto de la colisión de Silverstone 2021 en la ventaja de puntos del campeonato de Verstappen?",
        de: "Was war die Auswirkung der Silverstone-Kollision 2021 auf Verstappens Meisterschaftspunkte-Führung?",
        nl: "Wat was de impact van de 2021 Silverstone botsing op Verstappens kampioenschapspunten-voorsprong?"
      },
      options: [
        "33-point lead became 8-point lead after Hamilton won",
        "Verstappen extended his lead",
        "They tied on points",
        "Hamilton took championship lead"
      ],
      correct: 0,
      explanation: {
        en: "Before Silverstone 2021, Verstappen led Hamilton by 33 points. After the Copse collision (Hamilton 10s penalty but won), the lead shrank to 8 points. This was a major momentum shift in their title battle, though Verstappen ultimately won the championship in controversial Abu Dhabi finale.",
        es: "Antes de Silverstone 2021, Verstappen lideraba a Hamilton por 33 puntos. Después de la colisión en Copse (Hamilton penalización de 10s pero ganó), la ventaja se redujo a 8 puntos. Este fue un cambio de impulso importante en su batalla por el título, aunque Verstappen finalmente ganó el campeonato en la controvertida final de Abu Dhabi.",
        de: "Vor Silverstone 2021 führte Verstappen Hamilton mit 33 Punkten. Nach der Copse-Kollision (Hamilton 10s Strafe aber gewann), schrumpfte die Führung auf 8 Punkte. Dies war ein großer Momentum-Wechsel in ihrem Titelkampf, obwohl Verstappen letztlich die Meisterschaft im kontroversen Abu Dhabi-Finale gewann.",
        nl: "Voor Silverstone 2021 leidde Verstappen Hamilton met 33 punten. Na de Copse-botsing (Hamilton 10s straf maar won), kromp de voorsprong tot 8 punten. Dit was een grote momentum-verschuiving in hun titelstrijd, hoewel Verstappen uiteindelijk het kampioenschap won in de controversiële Abu Dhabi finale."
      }
    },
    {
      question: {
        en: "What was Alonso's response to the 2007 Hungary pit incident with Hamilton?",
        es: "¿Cuál fue la respuesta de Alonso al incidente de boxes de Hungría 2007 con Hamilton?",
        de: "Was war Alonsos Reaktion auf den Ungarn-Box-Vorfall 2007 mit Hamilton?",
        nl: "Wat was Alonso's reactie op het 2007 Hongaarse pit-incident met Hamilton?"
      },
      options: [
        "Claimed Hamilton didn't respect team agreements",
        "Immediately apologized",
        "Blamed McLaren entirely",
        "Denied any wrongdoing"
      ],
      correct: 0,
      explanation: {
        en: "Alonso justified holding Hamilton in the pits by claiming Hamilton had repeatedly ignored team agreements about taking turns for pole position attempts. This reflected deeper tension: 2-time champion Alonso expected #1 status but rookie Hamilton was matching/beating him, creating an untenable situation.",
        es: "Alonso justificó retener a Hamilton en los boxes afirmando que Hamilton había ignorado repetidamente acuerdos del equipo sobre turnos para intentos de pole position. Esto reflejó tensión más profunda: el bicampeón Alonso esperaba estatus #1 pero el novato Hamilton lo igualaba/vencía, creando una situación insostenible.",
        de: "Alonso rechtfertigte das Festhalten von Hamilton in der Box damit, dass Hamilton wiederholt Teamvereinbarungen über Wechsel bei Pole-Versuchen ignoriert habe. Dies spiegelte tiefere Spannungen wider: 2-facher Champion Alonso erwartete #1-Status, aber Rookie Hamilton hielt mit/schlug ihn, was eine unhaltbare Situation schuf.",
        nl: "Alonso rechtvaardigde het vasthouden van Hamilton in de pits door te beweren dat Hamilton herhaaldelijk teamafspraken over beurten voor pole position-pogingen had genegeerd. Dit weerspiegelde diepere spanning: 2-voudig kampioen Alonso verwachtte #1-status maar rookie Hamilton evenaarde/versloeg hem, een onhoudbare situatie creërend."
      }
    },
    {
      question: {
        en: "How many laps did the epic 1998 Belgian GP Schumacher-Häkkinen battle last?",
        es: "¿Cuántas vueltas duró la épica batalla Schumacher-Häkkinen del GP de Bélgica 1998?",
        de: "Wie viele Runden dauerte der epische Belgien-GP-Kampf 1998 zwischen Schumacher und Häkkinen?",
        nl: "Hoeveel ronden duurde de epische 1998 Belgische GP Schumacher-Häkkinen strijd?"
      },
      options: [
        "Multiple laps of intense wet-weather racing before Schumacher crashed",
        "Just 1 lap",
        "Entire race from start to finish",
        "5 laps"
      ],
      correct: 0,
      explanation: {
        en: "At the rain-soaked 1998 Belgian GP, Schumacher and Häkkinen had an intense multi-lap battle in treacherous conditions. Schumacher was leading brilliantly when he crashed into Coulthard (who was being lapped) in heavy spray. Schumacher furiously confronted Coulthard afterward. Damon Hill won the race.",
        es: "En el lluvioso GP de Bélgica 1998, Schumacher y Häkkinen tuvieron una intensa batalla de múltiples vueltas en condiciones traicioneras. Schumacher lideraba brillantemente cuando chocó contra Coulthard (que estaba siendo doblado) en el spray pesado. Schumacher confrontó furiosamente a Coulthard después. Damon Hill ganó la carrera.",
        de: "Beim regennassen Belgien-GP 1998 hatten Schumacher und Häkkinen einen intensiven Mehrundenkampf unter tückischen Bedingungen. Schumacher führte brillant, als er im dichten Sprühnebel in Coulthard (der überrundet wurde) krachte. Schumacher konfrontierte Coulthard danach wütend. Damon Hill gewann das Rennen.",
        nl: "Bij de regenachtige Belgische GP 1998 hadden Schumacher en Häkkinen een intense meerdere-ronden strijd in verraderlijke omstandigheden. Schumacher leidde briljant toen hij in Coulthard (die werd gepasseerd) crashte in zware spray. Schumacher confronteerde Coulthard woedend daarna. Damon Hill won de race."
      }
    },
    {
      question: {
        en: "What was the significance of the 2019 Austria GP penalty decision for future racing?",
        es: "¿Cuál fue la importancia de la decisión de penalización del GP de Austria 2019 para carreras futuras?",
        de: "Was war die Bedeutung der Strafe-Entscheidung beim Österreich-GP 2019 für zukünftiges Racing?",
        nl: "Wat was de betekenis van de 2019 Oostenrijkse GP strafbeslissing voor toekomstig racen?"
      },
      options: [
        "Set precedent for allowing hard but fair racing contact",
        "Led to stricter penalties for all contact",
        "Changed nothing about stewarding",
        "Banned all aggressive overtaking"
      ],
      correct: 0,
      explanation: {
        en: "The stewards' decision to allow Verstappen's move on Leclerc at Austria 2019 (despite contact) set a precedent for permitting harder racing. It signaled a shift toward 'let them race' philosophy, reducing penalties for aggressive but fair moves. This influenced how future battles, including 2021 Hamilton-Verstappen, were judged.",
        es: "La decisión de los comisarios de permitir el movimiento de Verstappen sobre Leclerc en Austria 2019 (a pesar del contacto) estableció un precedente para permitir carreras más duras. Señaló un cambio hacia la filosofía 'déjenlos correr', reduciendo penalizaciones por movimientos agresivos pero justos. Esto influyó en cómo se juzgaron batallas futuras, incluido Hamilton-Verstappen 2021.",
        de: "Die Entscheidung der Rennkommissare, Verstappens Manöver gegen Leclerc in Österreich 2019 (trotz Kontakt) zu erlauben, setzte einen Präzedenzfall für härteres Racing. Es signalisierte eine Verschiebung zur 'Lasst sie rennen'-Philosophie und reduzierte Strafen für aggressive aber faire Manöver. Dies beeinflusste, wie zukünftige Kämpfe, einschließlich Hamilton-Verstappen 2021, beurteilt wurden.",
        nl: "De beslissing van de stewards om Verstappens actie op Leclerc bij Oostenrijk 2019 (ondanks contact) toe te staan, zette een precedent voor harder racen. Het signaleerde een verschuiving naar 'laat ze racen'-filosofie, strafvermindering voor aggressieve maar eerlijke acties. Dit beïnvloedde hoe toekomstige gevechten, inclusief Hamilton-Verstappen 2021, werden beoordeeld."
      }
    },
    {
      question: {
        en: "What was unique about Lauda's comeback at Monza 1976 after his near-fatal Nürburgring crash?",
        es: "¿Qué fue único sobre el regreso de Lauda en Monza 1976 después de su casi fatal accidente en Nürburgring?",
        de: "Was war einzigartig an Laudas Comeback in Monza 1976 nach seinem fast tödlichen Nürburgring-Unfall?",
        nl: "Wat was uniek aan Lauda's comeback bij Monza 1976 na zijn bijna fatale Nürburgring crash?"
      },
      options: [
        "Returned just 6 weeks after severe burns, lost title by 1 point",
        "Won race on return",
        "Retired immediately after return",
        "Beat Hunt easily despite injuries"
      ],
      correct: 0,
      explanation: {
        en: "Lauda returned to racing just 6 weeks after his horrific Nürburgring fireball crash, still bandaged and in pain. He finished 4th at Monza. Later, he withdrew from the wet Fuji race, losing the 1976 title to Hunt by 1 point. His decision showed both courage (returning) and wisdom (prioritizing life over championship).",
        es: "Lauda regresó a las carreras solo 6 semanas después de su horrible accidente de bola de fuego en Nürburgring, aún vendado y con dolor. Terminó 4º en Monza. Más tarde, se retiró de la carrera húmeda de Fuji, perdiendo el título de 1976 ante Hunt por 1 punto. Su decisión mostró tanto coraje (regresar) como sabiduría (priorizar la vida sobre el campeonato).",
        de: "Lauda kehrte nur 6 Wochen nach seinem schrecklichen Nürburgring-Feuerball-Unfall ins Racing zurück, noch bandagiert und schmerzgeplagt. Er wurde Vierter in Monza. Später zog er sich vom nassen Fuji-Rennen zurück und verlor den 1976-Titel an Hunt mit 1 Punkt. Seine Entscheidung zeigte sowohl Mut (Rückkehr) als auch Weisheit (Leben vor Meisterschaft).",
        nl: "Lauda keerde terug naar racen slechts 6 weken na zijn verschrikkelijke Nürburgring vuurbal-crash, nog steeds verbonden en in pijn. Hij eindigde 4e bij Monza. Later trok hij zich terug uit de natte Fuji race, verliezend de 1976 titel aan Hunt met 1 punt. Zijn beslissing toonde zowel moed (terugkeer) als wijsheid (leven prioriterend boven kampioenschap)."
      }
    },
    {
      question: {
        en: "How did the FIA respond to the multiple Rosberg-Hamilton collisions in 2016?",
        es: "¿Cómo respondió la FIA a las múltiples colisiones Rosberg-Hamilton en 2016?",
        de: "Wie reagierte die FIA auf die mehrfachen Rosberg-Hamilton-Kollisionen 2016?",
        nl: "Hoe reageerde de FIA op de meerdere Rosberg-Hamilton botsingen in 2016?"
      },
      options: [
        "Let Mercedes manage it internally, minimal penalties",
        "Banned both drivers for races",
        "Heavy fines for both drivers",
        "Disqualified both from championship"
      ],
      correct: 0,
      explanation: {
        en: "After Spa and Austria 2016 collisions, FIA largely let Mercedes manage the situation internally. Rosberg was deemed at fault for Austria (penalty) but the FIA preferred not to interfere heavily in teammate battles. Mercedes struggled to control their drivers without stifling competition, ultimately allowing them to race.",
        es: "Después de las colisiones de Spa y Austria 2016, la FIA en gran medida dejó que Mercedes manejara la situación internamente. Rosberg fue considerado culpable por Austria (penalización) pero la FIA prefirió no interferir mucho en batallas entre compañeros. Mercedes luchó para controlar a sus pilotos sin sofocar la competencia, finalmente permitiéndoles correr.",
        de: "Nach den Spa- und Österreich-Kollisionen 2016 ließ die FIA Mercedes die Situation weitgehend intern handhaben. Rosberg wurde für Österreich schuldig befunden (Strafe), aber die FIA zog es vor, nicht stark in Teamkollegen-Kämpfe einzugreifen. Mercedes kämpfte darum, ihre Fahrer zu kontrollieren, ohne Wettbewerb zu ersticken, erlaubte ihnen letztlich zu rennen.",
        nl: "Na de Spa en Oostenrijk 2016 botsingen liet de FIA Mercedes de situatie grotendeels intern beheren. Rosberg werd schuldig bevonden voor Oostenrijk (straf) maar de FIA gaf de voorkeur aan niet zwaar in te grijpen in teamgenoot-gevechten. Mercedes worstelde om hun coureurs te controleren zonder competitie te verstikken, hen uiteindelijk toestond te racen."
      }
    },
    {
      question: {
        en: "What controversial tactic did Schumacher use at Monaco 2006 qualifying that ended his pole streak?",
        es: "¿Qué táctica controvertida usó Schumacher en la clasificación de Mónaco 2006 que terminó su racha de poles?",
        de: "Welche kontroverse Taktik verwendete Schumacher beim Monaco-Qualifying 2006, die seine Pole-Streak beendete?",
        nl: "Welke controversiële tactiek gebruikte Schumacher bij Monaco 2006 kwalificatie die zijn pole-reeks beëindigde?"
      },
      options: [
        "Stopped on track to prevent Alonso's pole lap, penalized",
        "Blocked Alonso in chicane",
        "Used illegal engine mode",
        "Nothing controversial, clean pole"
      ],
      correct: 0,
      explanation: {
        en: "At Monaco 2006 qualifying, Schumacher stopped his car at Rascasse corner, bringing out yellow flags and preventing Alonso from completing his pole lap. Stewards deemed it deliberate and relegated Schumacher to back of grid. Alonso took pole and won the race.",
        es: "En la clasificación de Mónaco 2006, Schumacher detuvo su auto en la curva Rascasse, sacando banderas amarillas e impidiendo que Alonso completara su vuelta de pole. Los comisarios lo consideraron deliberado y relegaron a Schumacher al final de la parrilla. Alonso tomó la pole y ganó la carrera.",
        de: "Beim Monaco-Qualifying 2006 stoppte Schumacher sein Auto in der Rascasse-Kurve, löste gelbe Flaggen aus und verhinderte Alonsos Pole-Runde. Die Rennkommissare hielten es für absichtlich und versetzten Schumacher ans Ende des Grids. Alonso holte die Pole und gewann das Rennen.",
        nl: "Bij Monaco 2006 kwalificatie stopte Schumacher zijn auto bij Rascasse-bocht, gele vlaggen veroorzakend en Alonso verhinderend zijn pole-ronde te voltooien. Stewards achtten het opzettelijk en stuurden Schumacher naar achter op grid. Alonso pakte pole en won de race."
      }
    },
    {
      question: {
        en: "How did the 1989 Japanese GP stewards decision favor Prost over Senna?",
        es: "¿Cómo favoreció la decisión de los comisarios del GP de Japón 1989 a Prost sobre Senna?",
        de: "Wie begünstigte die Entscheidung der Rennkommissare beim Japan-GP 1989 Prost gegenüber Senna?",
        nl: "Hoe bevoordeelde de 1989 Japanse GP stewards-beslissing Prost boven Senna?"
      },
      options: [
        "Senna disqualified for cutting chicane despite winning",
        "Prost given the win despite retiring",
        "Senna penalized for collision",
        "Both disqualified, Prost given title"
      ],
      correct: 0,
      explanation: {
        en: "At Suzuka 1989, Prost and Senna collided. Prost retired, Senna continued via escape road, won the race. Stewards disqualified Senna for cutting the chicane and missing the corner. Many believed the decision was politically motivated to favor Prost. Prost became 1989 champion.",
        es: "En Suzuka 1989, Prost y Senna chocaron. Prost se retiró, Senna continuó por la vía de escape, ganó la carrera. Los comisarios descalificaron a Senna por cortar la chicana y perder la curva. Muchos creyeron que la decisión fue motivada políticamente para favorecer a Prost. Prost fue campeón de 1989.",
        de: "In Suzuka 1989 kollidierten Prost und Senna. Prost schied aus, Senna fuhr über die Auslaufzone weiter und gewann. Die Rennkommissare disqualifizierten Senna wegen Schneidens der Schikane und Verpassens der Kurve. Viele glaubten, die Entscheidung sei politisch motiviert, um Prost zu begünstigen. Prost wurde 1989-Champion.",
        nl: "Bij Suzuka 1989 botsten Prost en Senna. Prost viel uit, Senna reed door via uitloopzone, won de race. Stewards diskwalificeerden Senna voor het afsnijden van de chicane en missen van de bocht. Velen geloofden dat de beslissing politiek gemotiveerd was om Prost te bevoordelen. Prost werd 1989-kampioen."
      }
    }
  ];

  return {
    name: {
      en: "Rivaliteiten Level 4",
      es: "Rivaliteiten Nivel 4",
      de: "Rivaliteiten Stufe 4",
      nl: "Rivaliteiten Level 4"
    },
    questions: questions
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = level4;
} else if (typeof window !== 'undefined') {
  window.level4 = level4;
}
