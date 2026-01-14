// Kampioenschappen Quiz - Level 10
(function() {
  const level10 = {
    name: {
      en: "Kampioenschappen Level 10",
      es: "Kampioenschappen Nivel 10",
      de: "Kampioenschappen Stufe 10",
      nl: "Kampioenschappen Level 10"
    },
    questions: [
      {
        question: {
          en: "What ultra-obscure 1953 regulation allowed drivers to share championship points if they drove consecutive practice sessions in the same car?",
          es: "¿Qué regulación ultra-obscura de 1953 permitió a los pilotos compartir puntos del campeonato si conducían sesiones de práctica consecutivas en el mismo coche?",
          de: "Welche ultra-obskure Regelung von 1953 erlaubte Fahrern, Meisterschaftspunkte zu teilen, wenn sie aufeinanderfolgende Trainingssessions im selben Auto fuhren?",
          nl: "Welke ultra-obscure regel uit 1953 stelde coureurs in staat kampioenschapspunten te delen als ze opeenvolgende trainingssessies reden in dezelfde auto?"
        },
        options: ["Practice sessions never counted for points", "Only race laps counted for point sharing", "Shared cars split points by lap percentage", "Practice drivers received no points"],
        correct: 0,
        explanation: {
          en: "This is a trick question. Practice sessions have never counted toward championship points in any F1 era. Championship points have only been awarded based on race finishing positions. While car sharing was permitted in the 1950s, only drivers who participated in the actual race could score points, regardless of practice participation.",
          es: "Esta es una pregunta trampa. Las sesiones de práctica nunca han contado para puntos del campeonato en ninguna era de F1. Los puntos del campeonato solo se han otorgado según las posiciones de llegada en carreras. Aunque compartir coches estaba permitido en los años 1950, solo los pilotos que participaron en la carrera real podían anotar puntos, sin importar la participación en práctica.",
          de: "Dies ist eine Fangfrage. Trainingssessions haben in keiner F1-Ära jemals zu Meisterschaftspunkten gezählt. Meisterschaftspunkte wurden nur basierend auf Rennendpositionen vergeben. Während das Teilen von Autos in den 1950er Jahren erlaubt war, konnten nur Fahrer, die am eigentlichen Rennen teilnahmen, Punkte erzielen, unabhängig von der Teilnahme am Training.",
          nl: "Dit is een strikvraag. Trainingssessies hebben nooit geteld voor kampioenschapspunten in enig F1-tijdperk. Kampioenschapspunten zijn alleen toegekend op basis van race-eindposities. Hoewel auto's delen was toegestaan in de jaren 1950, konden alleen coureurs die deelnamen aan de echte race punten scoren, ongeacht trainingsdeelname."
        }
      },
      {
        question: {
          en: "How many times has the FIA voided an entire season's championship results due to widespread technical irregularities?",
          es: "¿Cuántas veces ha anulado la FIA los resultados del campeonato de una temporada completa debido a irregularidades técnicas generalizadas?",
          de: "Wie oft hat die FIA die Meisterschaftsergebnisse einer gesamten Saison aufgrund weit verbreiteter technischer Unregelmäßigkeiten annulliert?",
          nl: "Hoe vaak heeft de FIA de kampioenschapsresultaten van een heel seizoen nietig verklaard vanwege wijdverspreide technische onregelmatigheden?"
        },
        options: ["Never - individual race results voided, never full seasons", "Once (1950s irregularities)", "Twice (1950s and 1980s)", "Three times"],
        correct: 0,
        explanation: {
          en: "The FIA has never voided an entire season's championship. While individual race results have been amended or drivers disqualified (like Schumacher 1997 losing points), no championship season has ever been completely invalidated. The FIA has consistently maintained that once a season concludes and the champion is crowned, results become permanent to ensure finality.",
          es: "La FIA nunca ha anulado el campeonato de una temporada completa. Aunque se han modificado resultados de carreras individuales o descalificado pilotos (como Schumacher 1997 perdiendo puntos), ninguna temporada de campeonato ha sido completamente invalidada. La FIA ha mantenido consistentemente que una vez que concluye una temporada y se corona al campeón, los resultados se vuelven permanentes para asegurar la finalidad.",
          de: "Die FIA hat nie die Meisterschaft einer gesamten Saison annulliert. Während einzelne Rennergebnisse geändert oder Fahrer disqualifiziert wurden (wie Schumacher 1997 mit Punkteverlust), wurde nie eine Meisterschaftssaison vollständig ungültig gemacht. Die FIA hat konsequent festgehalten, dass Ergebnisse nach Saisonende und Krönung des Champions dauerhaft werden, um Endgültigkeit zu gewährleisten.",
          nl: "De FIA heeft nooit een kampioenschap van een heel seizoen nietig verklaard. Hoewel individuele race-resultaten zijn gewijzigd of coureurs gediskwalificeerd (zoals Schumacher 1997 met puntenverlies), is geen kampioenschap seizoen ooit volledig ongeldig verklaard. De FIA heeft consistent volgehouden dat zodra een seizoen eindigt en de kampioen gekroond is, resultaten permanent worden om finaliteit te waarborgen."
        }
      },
      {
        question: {
          en: "What unique mathematical scenario in 1999 would have required FIA to invoke the 'fourth-level tiebreaker' if the championship ended in a precise tie?",
          es: "¿Qué escenario matemático único en 1999 habría requerido que la FIA invocara el 'desempate de cuarto nivel' si el campeonato terminaba en un empate preciso?",
          de: "Welches einzigartige mathematische Szenario hätte 1999 erfordert, dass die FIA den 'Tiebreaker der vierten Ebene' anwendet, wenn die Meisterschaft in einem genauen Gleichstand endete?",
          nl: "Welk uniek mathematisch scenario in 1999 zou vereist hebben dat de FIA de 'vierde-niveau tiebreaker' zou inroepen als het kampioenschap in een nauwkeurig gelijkspel eindigde?"
        },
        options: ["Equal points, wins, 2nds, 3rds, 4ths between Häkkinen-Irvine", "Coin toss would decide championship", "Earlier race results would prevail", "No fourth-level tiebreaker exists"],
        correct: 3,
        explanation: {
          en: "There is no 'fourth-level tiebreaker' in F1 regulations. The tiebreaker hierarchy is: 1) most wins, 2) most 2nd places, 3) most 3rd places, continuing down finishing positions. If drivers were somehow identical through all positions (statistically near-impossible), the driver with the best result in the earliest round would win. No championship has ever required beyond second-level tiebreaker.",
          es: "No existe un 'desempate de cuarto nivel' en las regulaciones de F1. La jerarquía de desempate es: 1) más victorias, 2) más segundos lugares, 3) más terceros lugares, continuando hacia abajo en las posiciones de llegada. Si los pilotos fueran de alguna manera idénticos en todas las posiciones (estadísticamente casi imposible), el piloto con el mejor resultado en la primera ronda ganaría. Ningún campeonato ha requerido más allá del desempate de segundo nivel.",
          de: "Es gibt keinen 'Tiebreaker der vierten Ebene' in den F1-Regeln. Die Tiebreaker-Hierarchie ist: 1) meiste Siege, 2) meiste 2. Plätze, 3) meiste 3. Plätze, fortlaufend durch die Endpositionen. Wenn Fahrer irgendwie durch alle Positionen identisch wären (statistisch nahezu unmöglich), würde der Fahrer mit dem besten Ergebnis in der frühesten Runde gewinnen. Keine Meisterschaft hat jemals über den zweiten Tiebreaker-Level hinaus benötigt.",
          nl: "Er bestaat geen 'vierde-niveau tiebreaker' in F1-reglementen. De tiebreaker-hiërarchie is: 1) meeste overwinningen, 2) meeste 2e plaatsen, 3) meeste 3e plaatsen, doorgaand door eindposities. Als coureurs op de een of andere manier identiek waren door alle posities (statistisch bijna onmogelijk), zou de coureur met het beste resultaat in de vroegste ronde winnen. Geen kampioenschap heeft ooit verder dan tweede-niveau tiebreaker vereist."
        }
      },
      {
        question: {
          en: "In which year did Formula 1 briefly experiment with awarding championship points for qualifying position alongside race results?",
          es: "¿En qué año experimentó brevemente la Fórmula 1 con otorgar puntos del campeonato por la posición de calificación junto con los resultados de carrera?",
          de: "In welchem Jahr experimentierte die Formel 1 kurzzeitig damit, Meisterschaftspunkte für Qualifying-Position neben Rennergebnissen zu vergeben?",
          nl: "In welk jaar experimenteerde Formule 1 kort met het toekennen van kampioenschapspunten voor kwalificatiepositie naast race-resultaten?"
        },
        options: ["2003 (one-lap qualifying era)", "2005-2006 (aggregate qualifying)", "Never - only race points counted", "1996 (experimental season)"],
        correct: 2,
        explanation: {
          en: "This is a trick question. Formula 1 has never awarded championship points for qualifying positions. While various qualifying formats have been used (aggregate times, one-lap shootouts, knockout sessions), they've only determined grid positions, not championship points. Championship points have exclusively been awarded for race finishing positions throughout F1 history.",
          es: "Esta es una pregunta trampa. La Fórmula 1 nunca ha otorgado puntos del campeonato por posiciones de calificación. Aunque se han usado varios formatos de calificación (tiempos agregados, shootouts de una vuelta, sesiones de eliminación), solo han determinado posiciones en la parrilla, no puntos del campeonato. Los puntos del campeonato se han otorgado exclusivamente por posiciones de llegada en carreras a lo largo de la historia de F1.",
          de: "Dies ist eine Fangfrage. Die Formel 1 hat nie Meisterschaftspunkte für Qualifying-Positionen vergeben. Während verschiedene Qualifying-Formate verwendet wurden (Gesamtzeiten, Ein-Runden-Shootouts, Knockout-Sessions), haben sie nur Gridpositionen bestimmt, keine Meisterschaftspunkte. Meisterschaftspunkte wurden in der gesamten F1-Geschichte ausschließlich für Rennendpositionen vergeben.",
          nl: "Dit is een strikvraag. Formule 1 heeft nooit kampioenschapspunten toegekend voor kwalificatieposities. Hoewel verschillende kwalificatieformaten zijn gebruikt (totaaltijden, één-ronde shootouts, knockout sessies), hebben ze alleen gridposities bepaald, geen kampioenschapspunten. Kampioenschapspunten zijn exclusief toegekend voor race-eindposities gedurende de hele F1-geschiedenis."
        }
      },
      {
        question: {
          en: "What controversial 1989 FIA ruling changed Alain Prost's championship points six months after the season concluded?",
          es: "¿Qué controvertido fallo de la FIA de 1989 cambió los puntos del campeonato de Alain Prost seis meses después de que concluyera la temporada?",
          de: "Welche kontroverse FIA-Entscheidung von 1989 änderte Alain Prosts Meisterschaftspunkte sechs Monate nach Saisonende?",
          nl: "Welke controversiële FIA-uitspraak uit 1989 veranderde Alain Prost's kampioenschapspunten zes maanden nadat het seizoen was afgelopen?"
        },
        options: ["No post-season changes occurred", "Suzuka collision penalties reversed", "San Marino appeal granted late", "Dropped results recalculated"],
        correct: 0,
        explanation: {
          en: "This is a trick question. While the 1989 Japanese GP collision between Senna and Prost was highly controversial (Senna disqualified for missing chicane), no championship points were changed six months after the season. Senna was disqualified immediately after the race, and Prost won the championship. Once the season concluded, no retroactive changes occurred to the final standings.",
          es: "Esta es una pregunta trampa. Aunque la colisión del GP de Japón 1989 entre Senna y Prost fue muy controvertida (Senna descalificado por saltarse la chicana), no se cambiaron puntos del campeonato seis meses después de la temporada. Senna fue descalificado inmediatamente después de la carrera, y Prost ganó el campeonato. Una vez que concluyó la temporada, no ocurrieron cambios retroactivos en las clasificaciones finales.",
          de: "Dies ist eine Fangfrage. Während die Kollision beim Japan GP 1989 zwischen Senna und Prost höchst kontrovers war (Senna disqualifiziert wegen verpasster Schikane), wurden keine Meisterschaftspunkte sechs Monate nach der Saison geändert. Senna wurde unmittelbar nach dem Rennen disqualifiziert, und Prost gewann die Meisterschaft. Nach Saisonende gab es keine rückwirkenden Änderungen der Endwertung.",
          nl: "Dit is een strikvraag. Hoewel de botsing bij de Japanse GP 1989 tussen Senna en Prost zeer controversieel was (Senna gediskwalificeerd voor het missen van chicane), werden geen kampioenschapspunten zes maanden na het seizoen veranderd. Senna werd onmiddellijk na de race gediskwalificeerd, en Prost won het kampioenschap. Zodra het seizoen eindigde, waren er geen retroactieve wijzigingen in de eindstand."
        }
      },
      {
        question: {
          en: "What obscure regulation prevented Giuseppe Farina from scoring additional championship points by racing in non-European rounds during 1950?",
          es: "¿Qué regulación oscura impidió a Giuseppe Farina anotar puntos adicionales del campeonato al correr en rondas no europeas durante 1950?",
          de: "Welche obskure Regelung verhinderte, dass Giuseppe Farina 1950 zusätzliche Meisterschaftspunkte durch Rennen in außereuropäischen Runden erzielte?",
          nl: "Welke obscure regel verhinderde dat Giuseppe Farina extra kampioenschapspunten scoorde door te racen in niet-Europese ronden tijdens 1950?"
        },
        options: ["Only Indianapolis 500 was non-European", "European drivers banned from Indy", "Points capped at European races only", "No geographical restrictions existed"],
        correct: 0,
        explanation: {
          en: "In 1950, the Indianapolis 500 was the only non-European race on the F1 calendar. Most European F1 teams and drivers didn't compete at Indy due to different regulations and logistics. Farina, like most European drivers, focused on European grands prix. There was no regulation preventing Europeans from racing at Indy - they simply chose not to, making this a choice, not a restriction.",
          es: "En 1950, las 500 Millas de Indianápolis era la única carrera no europea en el calendario de F1. La mayoría de los equipos y pilotos europeos de F1 no compitieron en Indy debido a diferentes regulaciones y logística. Farina, como la mayoría de los pilotos europeos, se centró en los grandes premios europeos. No hubo regulación que impidiera a los europeos correr en Indy - simplemente eligieron no hacerlo, haciendo esto una elección, no una restricción.",
          de: "1950 waren die Indianapolis 500 das einzige außereuropäische Rennen im F1-Kalender. Die meisten europäischen F1-Teams und Fahrer traten nicht in Indy an, aufgrund unterschiedlicher Regeln und Logistik. Farina konzentrierte sich wie die meisten europäischen Fahrer auf europäische Grand Prix. Es gab keine Regelung, die Europäer vom Rennen in Indy abhielt - sie entschieden sich einfach dagegen, was dies zu einer Wahl macht, nicht zu einer Beschränkung.",
          nl: "In 1950 was de Indianapolis 500 de enige niet-Europese race op de F1-kalender. De meeste Europese F1-teams en coureurs namen niet deel aan Indy vanwege verschillende reglementen en logistiek. Farina richtte zich, zoals de meeste Europese coureurs, op Europese grands prix. Er was geen regel die Europeanen verhinderde te racen in Indy - ze kozen er simpelweg voor om niet te gaan, waardoor dit een keuze was, geen beperking."
        }
      },
      {
        question: {
          en: "How many championship seasons featured a driver winning the title without leading the standings until the final race?",
          es: "¿Cuántas temporadas de campeonato presentaron a un piloto ganando el título sin liderar las clasificaciones hasta la carrera final?",
          de: "Wie viele Meisterschaftssaisons hatten einen Fahrer, der den Titel gewann, ohne die Wertung bis zum letzten Rennen anzuführen?",
          nl: "Hoeveel kampioenschap seizoenen hadden een coureur die de titel won zonder de stand te leiden tot de laatste race?"
        },
        options: ["4 seasons (1964, 1982, 2007, 2010)", "3 seasons (1964, 2007, 2010)", "5 seasons including 2021", "Never - champions led at some point"],
        correct: 1,
        explanation: {
          en: "Three championship seasons saw drivers win without ever leading before the finale: John Surtees (1964) took the lead only at the final race in Mexico, Kimi Räikkönen (2007) led only after winning the final race in Brazil, and Sebastian Vettel (2010) similarly took the championship lead only by winning the Abu Dhabi finale. These dramatic comebacks showcase championship battles decided at the very end.",
          es: "Tres temporadas de campeonato vieron a pilotos ganar sin haber liderado antes de la final: John Surtees (1964) tomó el liderato solo en la carrera final en México, Kimi Räikkönen (2007) lideró solo después de ganar la carrera final en Brasil, y Sebastian Vettel (2010) tomó el liderato del campeonato solo al ganar la final de Abu Dhabi. Estas remontadas dramáticas muestran batallas por el campeonato decididas al final.",
          de: "Drei Meisterschaftssaisons sahen Fahrer gewinnen, ohne jemals vor dem Finale zu führen: John Surtees (1964) übernahm die Führung erst beim Finale in Mexiko, Kimi Räikkönen (2007) führte erst nach dem Gewinn des Finales in Brasilien, und Sebastian Vettel (2010) übernahm die Meisterschaftsführung erst durch den Gewinn des Abu Dhabi-Finales. Diese dramatischen Comebacks zeigen Meisterschaftskämpfe, die ganz am Ende entschieden wurden.",
          nl: "Drie kampioenschap seizoenen zagen coureurs winnen zonder ooit te leiden vóór de finale: John Surtees (1964) nam de leiding pas bij de laatste race in Mexico, Kimi Räikkönen (2007) leidde pas na het winnen van de laatste race in Brazilië, en Sebastian Vettel (2010) nam de kampioenschapsleiding pas door het winnen van de Abu Dhabi finale. Deze dramatische comebacks tonen kampioenschapsgevechten beslist op het allerlaatst."
        }
      },
      {
        question: {
          en: "What ultra-rare 1950s circumstance allowed Mike Hawthorn to accumulate championship points from races where he didn't physically drive his primary car?",
          es: "¿Qué circunstancia ultra-rara de los años 1950 permitió a Mike Hawthorn acumular puntos del campeonato de carreras donde no condujo físicamente su coche principal?",
          de: "Welcher ultra-seltene Umstand der 1950er Jahre erlaubte Mike Hawthorn, Meisterschaftspunkte aus Rennen zu sammeln, bei denen er nicht physisch sein Hauptauto fuhr?",
          nl: "Welke ultra-zeldzame omstandigheid uit de jaren 1950 stelde Mike Hawthorn in staat kampioenschapspunten te verzamelen van races waar hij niet fysiek zijn primaire auto reed?"
        },
        options: ["Shared car with teammate, split points", "Substitute driver rule allowed point transfer", "Team car swaps mid-race permitted", "Primary car classification regardless of driver"],
        correct: 0,
        explanation: {
          en: "In the 1950s, drivers could share cars during races. If a driver took over a teammate's car or vice versa, they would split the championship points earned by that car. Mike Hawthorn and other drivers of that era sometimes shared cars, earning half-points or partial points based on how much of the race they drove. This practice was eventually banned as teams moved toward single-driver cars.",
          es: "En los años 1950, los pilotos podían compartir coches durante las carreras. Si un piloto tomaba el coche de un compañero de equipo o viceversa, dividirían los puntos del campeonato ganados por ese coche. Mike Hawthorn y otros pilotos de esa era a veces compartían coches, ganando medios puntos o puntos parciales según cuánto de la carrera conducían. Esta práctica fue finalmente prohibida cuando los equipos se movieron hacia coches de un solo piloto.",
          de: "In den 1950er Jahren konnten Fahrer während der Rennen Autos teilen. Wenn ein Fahrer das Auto eines Teamkollegen übernahm oder umgekehrt, teilten sie die vom Auto erzielten Meisterschaftspunkte. Mike Hawthorn und andere Fahrer dieser Ära teilten manchmal Autos und erzielten halbe Punkte oder Teilpunkte basierend darauf, wie viel des Rennens sie fuhren. Diese Praxis wurde schließlich verboten, als Teams zu Ein-Fahrer-Autos übergingen.",
          nl: "In de jaren 1950 konden coureurs auto's delen tijdens races. Als een coureur de auto van een teamgenoot overnam of omgekeerd, zouden ze de kampioenschapspunten verdiend door die auto delen. Mike Hawthorn en andere coureurs van dat tijdperk deelden soms auto's, waarbij ze halve punten of gedeeltelijke punten verdienden op basis van hoeveel van de race ze reden. Deze praktijk werd uiteindelijk verboden toen teams overgingen naar enkele-coureur auto's."
        }
      },
      {
        question: {
          en: "In what year did the FIA implement 'progressive point deductions' where each subsequent engine penalty removed more championship points?",
          es: "¿En qué año implementó la FIA 'deducciones de puntos progresivas' donde cada penalización de motor subsiguiente eliminaba más puntos del campeonato?",
          de: "In welchem Jahr führte die FIA 'progressive Punkteabzüge' ein, bei denen jede nachfolgende Motorstrafe mehr Meisterschaftspunkte entfernte?",
          nl: "In welk jaar implementeerde de FIA 'progressieve puntenaftrek' waarbij elke volgende motorstraf meer kampioenschapspunten verwijderde?"
        },
        options: ["Never - grid penalties only, no point deductions for engines", "2014 (turbo hybrid era)", "2017 (increased engine limits)", "2021 (cost cap enforcement)"],
        correct: 0,
        explanation: {
          en: "This is a trick question. The FIA has never used progressive championship point deductions for engine penalties. Engine component limit violations result in grid position penalties (5-place, 10-place, back of grid), not championship point deductions. Championship points can only be deducted for specific infractions like causing collisions, unsporting behavior, or cost cap breaches - never for engine usage.",
          es: "Esta es una pregunta trampa. La FIA nunca ha usado deducciones de puntos del campeonato progresivas por penalizaciones de motor. Las violaciones de límite de componentes de motor resultan en penalizaciones de posición en parrilla (5 lugares, 10 lugares, final de parrilla), no deducciones de puntos del campeonato. Los puntos del campeonato solo pueden deducirse por infracciones específicas como causar colisiones, comportamiento antideportivo o violaciones del tope de costos - nunca por uso de motor.",
          de: "Dies ist eine Fangfrage. Die FIA hat nie progressive Meisterschaftspunkteabzüge für Motorstrafen verwendet. Verstöße gegen Motorkomponentenlimits führen zu Gridpositionsstrafen (5 Plätze, 10 Plätze, hinteres Grid), nicht zu Meisterschaftspunkteabzügen. Meisterschaftspunkte können nur für spezifische Verstöße wie das Verursachen von Kollisionen, unsportliches Verhalten oder Kostenkappenverstöße abgezogen werden - nie für Motornutzung.",
          nl: "Dit is een strikvraag. De FIA heeft nooit progressieve kampioenschapspuntenaftrek gebruikt voor motorstraffen. Motorcomponentenlimiet overtredingen resulteren in gridpositie straffen (5 plaatsen, 10 plaatsen, achterkant grid), geen kampioenschapspuntenaftrek. Kampioenschapspunten kunnen alleen worden afgetrokken voor specifieke overtredingen zoals het veroorzaken van botsingen, onsportief gedrag of cost cap schendingen - nooit voor motorgebruik."
        }
      },
      {
        question: {
          en: "What mathematical anomaly in 2016 meant Nico Rosberg could have lost the championship despite winning more races if Lewis Hamilton finished 2nd in every remaining race?",
          es: "¿Qué anomalía matemática en 2016 significaba que Nico Rosberg podría haber perdido el campeonato a pesar de ganar más carreras si Lewis Hamilton terminaba 2º en cada carrera restante?",
          de: "Welche mathematische Anomalie bedeutete 2016, dass Nico Rosberg die Meisterschaft hätte verlieren können, obwohl er mehr Rennen gewann, wenn Lewis Hamilton in jedem verbleibenden Rennen Zweiter wurde?",
          nl: "Welke mathematische anomalie in 2016 betekende dat Nico Rosberg het kampioenschap had kunnen verliezen ondanks meer races te winnen als Lewis Hamilton 2e eindigde in elke resterende race?"
        },
        options: ["Hamilton's consistency would outscore Rosberg's wins", "2016 used different points system", "Double points finale at Abu Dhabi", "Dropped results favored consistency"],
        correct: 0,
        explanation: {
          en: "Going into the final four races, if Hamilton had finished 2nd in all remaining races while Rosberg won some but DNF'd in others, Hamilton's consistent 18 points per race could mathematically overcome Rosberg's lead. However, Rosberg managed the situation by finishing 2nd when he didn't win, securing the championship by accumulating enough points to make Hamilton's theoretical perfect run irrelevant. Rosberg won 9 races to Hamilton's 10.",
          es: "Al entrar en las últimas cuatro carreras, si Hamilton hubiera terminado 2º en todas las carreras restantes mientras Rosberg ganaba algunas pero abandonaba en otras, los consistentes 18 puntos por carrera de Hamilton podrían matemáticamente superar el liderato de Rosberg. Sin embargo, Rosberg manejó la situación terminando 2º cuando no ganaba, asegurando el campeonato acumulando suficientes puntos para hacer irrelevante la carrera perfecta teórica de Hamilton. Rosberg ganó 9 carreras contra 10 de Hamilton.",
          de: "Vor den letzten vier Rennen hätte Hamilton, wenn er in allen verbleibenden Rennen Zweiter geworden wäre, während Rosberg einige gewann, aber in anderen DNF hatte, mit konsistenten 18 Punkten pro Rennen mathematisch Rosbergs Führung überholen können. Rosberg bewältigte die Situation jedoch, indem er Zweiter wurde, wenn er nicht gewann, und sicherte sich die Meisterschaft durch Anhäufung genug Punkte, um Hamiltons theoretischen perfekten Lauf irrelevant zu machen. Rosberg gewann 9 Rennen zu Hamiltons 10.",
          nl: "Bij het ingaan van de laatste vier races, als Hamilton 2e was geëindigd in alle resterende races terwijl Rosberg sommige won maar in andere DNF had, hadden Hamilton's consistente 18 punten per race mathematisch Rosberg's voorsprong kunnen inhalen. Rosberg beheerde echter de situatie door 2e te eindigen wanneer hij niet won, waardoor hij het kampioenschap veiligstelde door genoeg punten te verzamelen om Hamilton's theoretische perfecte run irrelevant te maken. Rosberg won 9 races tegen Hamilton's 10."
        }
      },
      {
        question: {
          en: "How many drivers have won the championship while competing for a team that didn't exist at the start of that same season?",
          es: "¿Cuántos pilotos han ganado el campeonato mientras competían para un equipo que no existía al inicio de esa misma temporada?",
          de: "Wie viele Fahrer haben die Meisterschaft gewonnen, während sie für ein Team antraten, das zu Beginn derselben Saison nicht existierte?",
          nl: "Hoeveel coureurs hebben het kampioenschap gewonnen terwijl ze raceten voor een team dat niet bestond aan het begin van datzelfde seizoen?"
        },
        options: ["Zero - teams must pre-register for full season", "One (unusual mid-season team formation)", "Two (1950s team mergers)", "Three times in F1 history"],
        correct: 0,
        explanation: {
          en: "This has never happened. FIA regulations require teams to register before the season begins and commit to participating in all championship rounds. While teams have changed names, been bought out, or merged (like Toleman becoming Benetton, or Force India's mid-season takeover becoming Racing Point), no driver has won a championship for a team that literally didn't exist when the season started. All championship-winning teams existed from race 1.",
          es: "Esto nunca ha sucedido. Las regulaciones de la FIA requieren que los equipos se registren antes de que comience la temporada y se comprometan a participar en todas las rondas del campeonato. Aunque los equipos han cambiado de nombre, sido comprados o fusionados (como Toleman convirtiéndose en Benetton, o la adquisición a mitad de temporada de Force India convirtiéndose en Racing Point), ningún piloto ha ganado un campeonato para un equipo que literalmente no existía cuando comenzó la temporada. Todos los equipos ganadores de campeonatos existían desde la carrera 1.",
          de: "Dies ist nie passiert. FIA-Regeln erfordern, dass Teams sich vor Saisonbeginn registrieren und sich verpflichten, an allen Meisterschaftsrunden teilzunehmen. Während Teams Namen geändert, aufgekauft oder fusioniert haben (wie Toleman zu Benetton wurde oder Force Indias Übernahme zur Saisonmitte zu Racing Point wurde), hat kein Fahrer eine Meisterschaft für ein Team gewonnen, das buchstäblich nicht existierte, als die Saison begann. Alle meisterschaftsgewinnenden Teams existierten ab Rennen 1.",
          nl: "Dit is nooit gebeurd. FIA-reglementen vereisen dat teams zich registreren voordat het seizoen begint en zich committeren aan deelname aan alle kampioenschapsronden. Hoewel teams namen hebben veranderd, zijn overgenomen of gefuseerd (zoals Toleman dat Benetton werd, of Force India's mid-seizoen overname dat Racing Point werd), heeft geen coureur een kampioenschap gewonnen voor een team dat letterlijk niet bestond toen het seizoen begon. Alle kampioenschap-winnende teams bestonden vanaf race 1."
        }
      },
      {
        question: {
          en: "What obscure 1970s regulation allowed drivers to retain championship points earned in races later deemed 'non-championship' status?",
          es: "¿Qué oscura regulación de los años 1970 permitió a los pilotos retener puntos del campeonato ganados en carreras posteriormente consideradas de estado 'no campeonato'?",
          de: "Welche obskure Regelung der 1970er Jahre erlaubte Fahrern, Meisterschaftspunkte aus Rennen zu behalten, die später als 'Nicht-Meisterschafts'-Status eingestuft wurden?",
          nl: "Welke obscure regel uit de jaren 1970 stelde coureurs in staat kampioenschapspunten te behouden verdiend in races die later werden bestempeld als 'niet-kampioenschap' status?"
        },
        options: ["Points retroactively voided if race declassified", "Championship races never lost status retroactively", "Only pre-1960 races could be declassified", "FIA grandfathered points in special cases"],
        correct: 1,
        explanation: {
          en: "No championship race has ever been retroactively declassified to 'non-championship' status after points were awarded. Once a race is run as part of the world championship and points distributed, those points remain valid. The distinction between championship and non-championship races was always determined before the event, not after. Non-championship F1 races existed but were separate from the official calendar.",
          es: "Ninguna carrera de campeonato ha sido retroactivamente declasificada a estado 'no campeonato' después de que se otorgaron puntos. Una vez que una carrera se corre como parte del campeonato mundial y se distribuyen puntos, esos puntos permanecen válidos. La distinción entre carreras de campeonato y no campeonato siempre se determinaba antes del evento, no después. Existían carreras de F1 no campeonato pero eran separadas del calendario oficial.",
          de: "Kein Meisterschaftsrennen wurde jemals rückwirkend auf 'Nicht-Meisterschafts'-Status herabgestuft, nachdem Punkte vergeben wurden. Sobald ein Rennen als Teil der Weltmeisterschaft gefahren wird und Punkte verteilt werden, bleiben diese Punkte gültig. Die Unterscheidung zwischen Meisterschafts- und Nicht-Meisterschaftsrennen wurde immer vor dem Event bestimmt, nicht danach. Nicht-Meisterschafts-F1-Rennen existierten, waren aber vom offiziellen Kalender getrennt.",
          nl: "Geen kampioenschap race is ooit retroactief gedeclassificeerd naar 'niet-kampioenschap' status nadat punten waren toegekend. Zodra een race wordt gereden als deel van het wereldkampioenschap en punten zijn verdeeld, blijven die punten geldig. Het onderscheid tussen kampioenschap en niet-kampioenschap races werd altijd bepaald vóór het evenement, niet erna. Niet-kampioenschap F1 races bestonden maar waren gescheiden van de officiële kalender."
        }
      },
      {
        question: {
          en: "Which championship season featured the most lead changes in the standings, with the lead changing hands after 9 different races?",
          es: "¿Qué temporada de campeonato presentó más cambios de liderazgo en las clasificaciones, con el liderato cambiando de manos después de 9 carreras diferentes?",
          de: "Welche Meisterschaftssaison hatte die meisten Führungswechsel in der Wertung, wobei die Führung nach 9 verschiedenen Rennen wechselte?",
          nl: "Welk kampioenschap seizoen had de meeste leiderschapswisselingen in de stand, waarbij de leiding na 9 verschillende races wisselde?"
        },
        options: ["1982 (turbulent season)", "2012 (seven different winners)", "Never - maximum 6-7 lead changes", "1986 (Williams-McLaren battle)"],
        correct: 2,
        explanation: {
          en: "No F1 season has seen the championship lead change 9 times. The 2012 season, while having 7 different winners in the first 7 races, saw fewer actual lead changes in the standings. Typically, seasons with many lead changes see 5-7 throughout the year. The number 9 would be exceptionally high and hasn't occurred. This tests knowledge of realistic championship dynamics.",
          es: "Ninguna temporada de F1 ha visto el liderato del campeonato cambiar 9 veces. La temporada 2012, aunque tuvo 7 ganadores diferentes en las primeras 7 carreras, vio menos cambios reales de liderato en las clasificaciones. Típicamente, temporadas con muchos cambios de liderato ven 5-7 durante el año. El número 9 sería excepcionalmente alto y no ha ocurrido. Esto prueba el conocimiento de la dinámica realista del campeonato.",
          de: "Keine F1-Saison hat die Meisterschaftsführung 9 Mal wechseln sehen. Die Saison 2012 hatte zwar 7 verschiedene Gewinner in den ersten 7 Rennen, sah aber weniger tatsächliche Führungswechsel in der Wertung. Typischerweise sehen Saisons mit vielen Führungswechseln 5-7 über das Jahr. Die Zahl 9 wäre außergewöhnlich hoch und ist nicht aufgetreten. Dies testet das Wissen über realistische Meisterschaftsdynamik.",
          nl: "Geen F1-seizoen heeft de kampioenschapsleiding 9 keer zien wisselen. Het seizoen 2012, hoewel met 7 verschillende winnaars in de eerste 7 races, zag minder daadwerkelijke leiderschapswisselingen in de stand. Typisch zien seizoenen met veel leiderschapswisselingen 5-7 gedurende het jaar. Het getal 9 zou uitzonderlijk hoog zijn en is niet voorgekomen. Dit test kennis van realistische kampioenschapsdynamiek."
        }
      },
      {
        question: {
          en: "What unique 2010 regulation allowed Sebastian Vettel to score championship points despite not being classified in the official race results?",
          es: "¿Qué regulación única de 2010 permitió a Sebastian Vettel anotar puntos del campeonato a pesar de no ser clasificado en los resultados oficiales de la carrera?",
          de: "Welche einzigartige Regelung von 2010 erlaubte Sebastian Vettel, Meisterschaftspunkte zu erzielen, obwohl er nicht in den offiziellen Rennergebnissen klassifiziert war?",
          nl: "Welke unieke regel uit 2010 stelde Sebastian Vettel in staat kampioenschapspunten te scoren ondanks niet geclassificeerd te zijn in de officiële race-resultaten?"
        },
        options: ["No such scenario occurred - must be classified to score", "Red-flagged race points awarded by position", "Penalty applied post-classification", "Team appeal restored points"],
        correct: 0,
        explanation: {
          en: "This is a trick question. Vettel was never in a situation in 2010 where he scored points without being classified. To score championship points, a driver must be officially classified in the race results (typically completing 90% of race distance or being running when race ends). Vettel won the 2010 championship legitimately, being classified in all races where he scored points.",
          es: "Esta es una pregunta trampa. Vettel nunca estuvo en una situación en 2010 donde anotara puntos sin ser clasificado. Para anotar puntos del campeonato, un piloto debe ser oficialmente clasificado en los resultados de la carrera (típicamente completando el 90% de la distancia de carrera o estar corriendo cuando la carrera termina). Vettel ganó el campeonato 2010 legítimamente, siendo clasificado en todas las carreras donde anotó puntos.",
          de: "Dies ist eine Fangfrage. Vettel war 2010 nie in einer Situation, wo er Punkte erzielte, ohne klassifiziert zu sein. Um Meisterschaftspunkte zu erzielen, muss ein Fahrer offiziell in den Rennergebnissen klassifiziert sein (typischerweise 90% der Renndistanz absolvieren oder fahren, wenn das Rennen endet). Vettel gewann die Meisterschaft 2010 legitim und war in allen Rennen klassifiziert, in denen er Punkte erzielte.",
          nl: "Dit is een strikvraag. Vettel was in 2010 nooit in een situatie waar hij punten scoorde zonder geclassificeerd te zijn. Om kampioenschapspunten te scoren, moet een coureur officieel geclassificeerd zijn in de race-resultaten (typisch 90% van racedistantie voltooien of rijden wanneer race eindigt). Vettel won het kampioenschap van 2010 legitiem, geclassificeerd in alle races waar hij punten scoorde."
        }
      },
      {
        question: {
          en: "In which year did the FIA controversially apply 'retrospective time penalties' that changed championship positions months after races concluded?",
          es: "¿En qué año aplicó controvertidamente la FIA 'penalizaciones de tiempo retrospectivas' que cambiaron posiciones del campeonato meses después de que concluyeran las carreras?",
          de: "In welchem Jahr wendete die FIA kontrovers 'retrospektive Zeitstrafen' an, die Meisterschaftspositionen Monate nach Rennende änderten?",
          nl: "In welk jaar paste de FIA controversieel 'retrospectieve tijdstraffen' toe die kampioenschapsposities maanden na afloop van races veranderden?"
        },
        options: ["Never after season-end - only during season", "2007 (espionage scandal)", "1994 (Schumacher penalties)", "2021 (Abu Dhabi aftermath)"],
        correct: 0,
        explanation: {
          en: "While penalties have been applied during seasons that affected championships (like Hunt 1976 reinstated mid-season, or various post-race penalties), the FIA has never applied time penalties months after a season concluded to change final championship standings. Once the FIA Prize Giving Gala occurs and the season is officially closed, results become permanent. This ensures finality and prevents endless litigation.",
          es: "Aunque se han aplicado penalizaciones durante temporadas que afectaron campeonatos (como Hunt 1976 reinstalado a mitad de temporada, o varias penalizaciones post-carrera), la FIA nunca ha aplicado penalizaciones de tiempo meses después de que concluyera una temporada para cambiar las clasificaciones finales del campeonato. Una vez que ocurre la Gala de Entrega de Premios de la FIA y la temporada se cierra oficialmente, los resultados se vuelven permanentes. Esto asegura la finalidad y previene litigios interminables.",
          de: "Während Strafen während der Saisons angewendet wurden, die Meisterschaften beeinflussten (wie Hunt 1976 zur Saisonmitte wiederhergestellt, oder verschiedene Post-Race-Strafen), hat die FIA nie Zeitstrafen Monate nach Saisonende angewendet, um endgültige Meisterschaftsstände zu ändern. Sobald die FIA-Preisverleihungsgala stattfindet und die Saison offiziell abgeschlossen ist, werden Ergebnisse dauerhaft. Dies gewährleistet Endgültigkeit und verhindert endlose Rechtsstreitigkeiten.",
          nl: "Hoewel straffen zijn toegepast tijdens seizoenen die kampioenschappen beïnvloedden (zoals Hunt 1976 hersteld mid-seizoen, of verschillende post-race straffen), heeft de FIA nooit tijdstraffen toegepast maanden na afloop van een seizoen om definitieve kampioenschapsstanden te veranderen. Zodra de FIA Prize Giving Gala plaatsvindt en het seizoen officieel gesloten is, worden resultaten permanent. Dit waarborgt finaliteit en voorkomt eindeloze rechtszaken."
        }
      },
      {
        question: {
          en: "What mathematical impossibility would have occurred in 1986 if both Alain Prost and Nigel Mansell DNF'd in the final three races?",
          es: "¿Qué imposibilidad matemática habría ocurrido en 1986 si tanto Alain Prost como Nigel Mansell hubieran abandonado en las últimas tres carreras?",
          de: "Welche mathematische Unmöglichkeit wäre 1986 aufgetreten, wenn sowohl Alain Prost als auch Nigel Mansell in den letzten drei Rennen DNF hatten?",
          nl: "Welke mathematische onmogelijkheid zou zijn opgetreden in 1986 als zowel Alain Prost als Nigel Mansell DNF hadden in de laatste drie races?"
        },
        options: ["Nelson Piquet would have won from 3rd", "Championship would be void", "Season would extend to tiebreaker race", "Best 11 results rule would create anomaly"],
        correct: 0,
        explanation: {
          en: "Going into the final races of 1986, if both Prost (leading with 64 points) and Mansell (2nd with 61 points) had DNF'd in all three remaining races, Nelson Piquet (3rd with 56 points, but dropped results meant he had scoring potential) could have won the championship by winning the final races. This wasn't an 'impossibility' but a realistic mathematical scenario. Prost ultimately won the title.",
          es: "Al entrar en las carreras finales de 1986, si tanto Prost (liderando con 64 puntos) como Mansell (2º con 61 puntos) hubieran abandonado en las tres carreras restantes, Nelson Piquet (3º con 56 puntos, pero los resultados descartados significaban que tenía potencial de puntuación) podría haber ganado el campeonato ganando las carreras finales. Esto no era una 'imposibilidad' sino un escenario matemático realista. Prost finalmente ganó el título.",
          de: "Vor den Finalrennen 1986 hätte Nelson Piquet (3. mit 56 Punkten, aber gestrichene Ergebnisse bedeuteten Punktepotenzial) die Meisterschaft durch Siege in den Finalrennen gewinnen können, wenn sowohl Prost (führend mit 64 Punkten) als auch Mansell (2. mit 61 Punkten) in allen drei verbleibenden Rennen DNF hatten. Dies war keine 'Unmöglichkeit', sondern ein realistisches mathematisches Szenario. Prost gewann letztendlich den Titel.",
          nl: "Bij het ingaan van de laatste races van 1986, als zowel Prost (leidend met 64 punten) als Mansell (2e met 61 punten) DNF hadden in alle drie resterende races, had Nelson Piquet (3e met 56 punten, maar geschrapte resultaten betekenden dat hij scoringspotentieel had) het kampioenschap kunnen winnen door de laatste races te winnen. Dit was geen 'onmogelijkheid' maar een realistisch mathematisch scenario. Prost won uiteindelijk de titel."
        }
      },
      {
        question: {
          en: "How many times has a driver been awarded the championship posthumously after dying during the championship-deciding race?",
          es: "¿Cuántas veces se ha otorgado el campeonato póstumamente a un piloto después de morir durante la carrera decisiva del campeonato?",
          de: "Wie oft wurde einem Fahrer die Meisterschaft posthum zuerkannt, nachdem er während des meisterschaftsentscheidenden Rennens starb?",
          nl: "Hoe vaak is een coureur postuum het kampioenschap toegekend na te overlijden tijdens de kampioenschap-beslissende race?"
        },
        options: ["Never - Rindt died earlier in 1970 season", "Once (Jochen Rindt 1970)", "Twice (1950s fatalities)", "Three times in F1 history"],
        correct: 0,
        explanation: {
          en: "Jochen Rindt is F1's only posthumous champion, but he died at Monza in September 1970, several races before the season ended - not during the championship-deciding race. His accumulated points were enough that no one could mathematically overtake him in the remaining races. No driver has ever died during the actual championship-deciding final race while in contention for the title.",
          es: "Jochen Rindt es el único campeón póstumo de F1, pero murió en Monza en septiembre de 1970, varias carreras antes de que terminara la temporada - no durante la carrera decisiva del campeonato. Sus puntos acumulados fueron suficientes para que nadie pudiera superarlo matemáticamente en las carreras restantes. Ningún piloto ha muerto durante la carrera final real decisiva del campeonato mientras competía por el título.",
          de: "Jochen Rindt ist F1s einziger posthumer Champion, aber er starb in Monza im September 1970, mehrere Rennen vor Saisonende - nicht während des meisterschaftsentscheidenden Rennens. Seine gesammelten Punkte reichten aus, dass niemand ihn in den verbleibenden Rennen mathematisch überholen konnte. Kein Fahrer ist jemals während des tatsächlichen meisterschaftsentscheidenden Finalrennens gestorben, während er um den Titel kämpfte.",
          nl: "Jochen Rindt is F1's enige postume kampioen, maar hij overleed in Monza in september 1970, meerdere races voor het einde van het seizoen - niet tijdens de kampioenschap-beslissende race. Zijn verzamelde punten waren genoeg dat niemand hem mathematisch kon inhalen in de resterende races. Geen coureur is ooit overleden tijdens de daadwerkelijke kampioenschap-beslissende laatste race terwijl in de strijd voor de titel."
        }
      },
      {
        question: {
          en: "What obscure 1960s rule allowed championship points to be awarded to drivers who competed in Formula 2 cars during Formula 1 championship races?",
          es: "¿Qué regla oscura de los años 1960 permitió que se otorgaran puntos del campeonato a pilotos que compitieron en coches de Fórmula 2 durante carreras del campeonato de Fórmula 1?",
          de: "Welche obskure Regel der 1960er Jahre erlaubte die Vergabe von Meisterschaftspunkten an Fahrer, die in Formel-2-Autos bei Formel-1-Meisterschaftsrennen antraten?",
          nl: "Welke obscure regel uit de jaren 1960 stelde toe dat kampioenschapspunten werden toegekend aan coureurs die deelnamen in Formule 2 auto's tijdens Formule 1 kampioenschapsraces?"
        },
        options: ["F2 cars allowed in 1960s championship races", "Only 1952-1953 ran to F2 regulations", "Mixed-class racing never permitted for points", "F2 cars eligible but scored half points"],
        correct: 1,
        explanation: {
          en: "The 1952 and 1953 F1 World Championships were actually run to Formula 2 regulations (not F1 regulations) because there weren't enough competitive F1 cars. This was a unique situation where the 'Formula One World Championship' wasn't actually run with Formula One cars. By the 1960s, the championship had returned to proper F1 regulations, and F2 cars were not eligible for championship points.",
          es: "Los Campeonatos Mundiales de F1 de 1952 y 1953 se corrieron según las regulaciones de Fórmula 2 (no regulaciones de F1) porque no había suficientes coches competitivos de F1. Esta fue una situación única donde el 'Campeonato Mundial de Fórmula Uno' no se corrió realmente con coches de Fórmula Uno. Para los años 1960, el campeonato había regresado a las regulaciones apropiadas de F1, y los coches de F2 no eran elegibles para puntos del campeonato.",
          de: "Die F1-Weltmeisterschaften 1952 und 1953 wurden tatsächlich nach Formel-2-Regeln (nicht F1-Regeln) gefahren, weil es nicht genug wettbewerbsfähige F1-Autos gab. Dies war eine einzigartige Situation, in der die 'Formel-1-Weltmeisterschaft' nicht tatsächlich mit Formel-1-Autos gefahren wurde. In den 1960er Jahren war die Meisterschaft zu richtigen F1-Regeln zurückgekehrt, und F2-Autos waren nicht für Meisterschaftspunkte berechtigt.",
          nl: "De F1 Wereldkampioenschappen van 1952 en 1953 werden daadwerkelijk gereden volgens Formule 2 reglementen (niet F1 reglementen) omdat er niet genoeg competitieve F1 auto's waren. Dit was een unieke situatie waarin het 'Formule Een Wereldkampioenschap' niet daadwerkelijk werd gereden met Formule Een auto's. Tegen de jaren 1960 was het kampioenschap teruggekeerd naar juiste F1 reglementen, en F2 auto's waren niet geschikt voor kampioenschapspunten."
        }
      },
      {
        question: {
          en: "In what year did Michael Schumacher controversially attempt to secure the championship by deliberately crashing into a rival at the season finale?",
          es: "¿En qué año intentó controvertidamente Michael Schumacher asegurar el campeonato chocando deliberadamente contra un rival en la final de la temporada?",
          de: "In welchem Jahr versuchte Michael Schumacher kontrovers, die Meisterschaft durch absichtliches Crashen in einen Rivalen beim Saisonfinale zu sichern?",
          nl: "In welk jaar probeerde Michael Schumacher controversieel het kampioenschap veilig te stellen door opzettelijk te crashen met een rivaal bij de seizoensfinale?"
        },
        options: ["1994 (Adelaide collision with Hill)", "1997 (Jerez collision with Villeneuve)", "Both 1994 and 1997", "Never - unproven allegations only"],
        correct: 2,
        explanation: {
          en: "Schumacher was involved in controversial championship-deciding collisions twice: 1994 at Adelaide (collision with Damon Hill, Schumacher won championship), and 1997 at Jerez (collision with Jacques Villeneuve, Schumacher was disqualified from the championship). While intent was debated, both incidents occurred at season finales with the championship at stake. The 1997 incident resulted in his championship disqualification.",
          es: "Schumacher estuvo involucrado en colisiones controvertidas decisivas del campeonato dos veces: 1994 en Adelaide (colisión con Damon Hill, Schumacher ganó el campeonato), y 1997 en Jerez (colisión con Jacques Villeneuve, Schumacher fue descalificado del campeonato). Aunque se debatió la intención, ambos incidentes ocurrieron en finales de temporada con el campeonato en juego. El incidente de 1997 resultó en su descalificación del campeonato.",
          de: "Schumacher war zweimal in kontroverse meisterschaftsentscheidende Kollisionen verwickelt: 1994 in Adelaide (Kollision mit Damon Hill, Schumacher gewann Meisterschaft) und 1997 in Jerez (Kollision mit Jacques Villeneuve, Schumacher wurde von der Meisterschaft disqualifiziert). Während die Absicht debattiert wurde, ereigneten sich beide Vorfälle bei Saisonfinalen mit der Meisterschaft auf dem Spiel. Der Vorfall 1997 führte zu seiner Meisterschaftsdisqualifikation.",
          nl: "Schumacher was tweemaal betrokken bij controversiële kampioenschap-beslissende botsingen: 1994 in Adelaide (botsing met Damon Hill, Schumacher won kampioenschap), en 1997 in Jerez (botsing met Jacques Villeneuve, Schumacher werd gediskwalificeerd van het kampioenschap). Hoewel de intentie werd betwist, vonden beide incidenten plaats bij seizoensfinales met het kampioenschap op het spel. Het incident van 1997 resulteerde in zijn kampioenschapsdiskwalificatie."
        }
      },
      {
        question: {
          en: "What unique 2008 circumstance allowed Lewis Hamilton to win the championship by passing Timo Glock on the very last corner of the season?",
          es: "¿Qué circunstancia única de 2008 permitió a Lewis Hamilton ganar el campeonato al adelantar a Timo Glock en la última curva de la temporada?",
          de: "Welcher einzigartige Umstand von 2008 erlaubte Lewis Hamilton, die Meisterschaft durch Überholung von Timo Glock in der allerletzten Kurve der Saison zu gewinnen?",
          nl: "Welke unieke omstandigheid uit 2008 stelde Lewis Hamilton in staat het kampioenschap te winnen door Timo Glock in te halen in de allerlaatste bocht van het seizoen?"
        },
        options: ["Glock on dry tires in rain, Hamilton needed 5th", "Hamilton needed podium, Glock blocking", "Massa winning but Hamilton's pass secured title", "Glock's engine failure gifted Hamilton position"],
        correct: 0,
        explanation: {
          en: "At the 2008 Brazilian GP finale, rain fell in the final laps. Timo Glock stayed on dry tires while others pitted for wets. Hamilton needed to finish 5th or higher to win the championship (Massa was winning the race). On the final corner, Hamilton passed the struggling Glock to take 5th place, winning the championship by 1 point (98-97) while Massa briefly thought he'd won before realizing Hamilton had passed Glock.",
          es: "En la final del GP de Brasil 2008, cayó lluvia en las últimas vueltas. Timo Glock se quedó con neumáticos secos mientras otros entraron a boxes por mojados. Hamilton necesitaba terminar 5º o mejor para ganar el campeonato (Massa estaba ganando la carrera). En la última curva, Hamilton adelantó al luchador Glock para tomar el 5º lugar, ganando el campeonato por 1 punto (98-97) mientras Massa brevemente pensó que había ganado antes de darse cuenta de que Hamilton había pasado a Glock.",
          de: "Beim Finale des Brasilien GP 2008 fiel in den letzten Runden Regen. Timo Glock blieb auf Trockenreifen, während andere zu Regenreifen wechselten. Hamilton musste Fünfter oder besser werden, um die Meisterschaft zu gewinnen (Massa gewann das Rennen). In der letzten Kurve überholte Hamilton den kämpfenden Glock, um den 5. Platz zu erobern und die Meisterschaft mit 1 Punkt (98-97) zu gewinnen, während Massa kurzzeitig dachte, er hätte gewonnen, bevor er merkte, dass Hamilton Glock überholt hatte.",
          nl: "Bij de finale van de Braziliaanse GP 2008 viel regen in de laatste rondes. Timo Glock bleef op droge banden terwijl anderen wisselden naar regenbanden. Hamilton moest 5e of hoger eindigen om het kampioenschap te winnen (Massa won de race). In de laatste bocht passeerde Hamilton de worstelende Glock om 5e plaats te pakken, waarmee hij het kampioenschap won met 1 punt (98-97) terwijl Massa kort dacht dat hij had gewonnen voordat hij besefte dat Hamilton Glock had gepasseerd."
        }
      },
      {
        question: {
          en: "How many drivers have won championships while serving grid penalties in more than 50% of races that season?",
          es: "¿Cuántos pilotos han ganado campeonatos mientras cumplían penalizaciones de parrilla en más del 50% de las carreras de esa temporada?",
          de: "Wie viele Fahrer haben Meisterschaften gewonnen, während sie in mehr als 50% der Rennen dieser Saison Gridstrafen verbüßten?",
          nl: "Hoeveel coureurs hebben kampioenschappen gewonnen terwijl ze gridstraffen uitvoerden in meer dan 50% van de races dat seizoen?"
        },
        options: ["Zero - excessive penalties prevent title challenges", "One (Verstappen 2022)", "Two (reliability era drivers)", "Three times in turbo-hybrid era"],
        correct: 0,
        explanation: {
          en: "No driver has won a championship while serving grid penalties in more than half the races. While drivers have won championships despite occasional grid penalties (Verstappen 2022 had some engine penalties but not 50%+), serving penalties in most races creates too large a points deficit. Championship-winning seasons typically require consistent front-running, which excessive grid penalties prevent.",
          es: "Ningún piloto ha ganado un campeonato mientras cumplía penalizaciones de parrilla en más de la mitad de las carreras. Aunque los pilotos han ganado campeonatos a pesar de penalizaciones de parrilla ocasionales (Verstappen 2022 tuvo algunas penalizaciones de motor pero no más del 50%), cumplir penalizaciones en la mayoría de las carreras crea un déficit de puntos demasiado grande. Las temporadas ganadoras de campeonatos típicamente requieren liderazgo consistente al frente, lo cual las penalizaciones de parrilla excesivas previenen.",
          de: "Kein Fahrer hat eine Meisterschaft gewonnen, während er in mehr als der Hälfte der Rennen Gridstrafen verbüßte. Während Fahrer Meisterschaften trotz gelegentlicher Gridstrafen gewonnen haben (Verstappen 2022 hatte einige Motorstrafen, aber nicht 50%+), schafft das Verbüßen von Strafen in den meisten Rennen ein zu großes Punktedefizit. Meisterschaftsgewinnende Saisons erfordern typischerweise konstantes Vorne-Fahren, was übermäßige Gridstrafen verhindern.",
          nl: "Geen coureur heeft een kampioenschap gewonnen terwijl hij gridstraffen uitvoerde in meer dan de helft van de races. Hoewel coureurs kampioenschappen hebben gewonnen ondanks occasionele gridstraffen (Verstappen 2022 had enkele motorstraffen maar niet 50%+), creëert het uitvoeren van straffen in de meeste races een te groot puntentekort. Kampioenschap-winnende seizoenen vereisen typisch consistent vooraan rijden, wat buitensporige gridstraffen voorkomen."
        }
      },
      {
        question: {
          en: "What obscure pre-1990 regulation allowed drivers to appeal championship results to the International Court of Appeal up to 12 months after the season?",
          es: "¿Qué regulación oscura anterior a 1990 permitió a los pilotos apelar los resultados del campeonato a la Corte Internacional de Apelaciones hasta 12 meses después de la temporada?",
          de: "Welche obskure Regelung vor 1990 erlaubte Fahrern, Meisterschaftsergebnisse bis zu 12 Monate nach der Saison beim Internationalen Berufungsgericht anzufechten?",
          nl: "Welke obscure regel van vóór 1990 stelde coureurs in staat kampioenschapsresultaten tot 12 maanden na het seizoen aan te vechten bij het Internationaal Hof van Beroep?"
        },
        options: ["12-month appeal window existed but rarely used", "Appeals only allowed within season", "No post-season appeals permitted", "Only constructors could appeal, not drivers"],
        correct: 2,
        explanation: {
          en: "There was no 12-month post-season appeal window. FIA regulations have always had strict deadlines for appeals, typically during the season or shortly after races. Once the FIA Prize Giving Gala occurs and champions are crowned, results become final. While the International Court of Appeal exists for serious matters, championship standings cannot be appealed months after the season concludes. This ensures finality.",
          es: "No hubo una ventana de apelación de 12 meses después de la temporada. Las regulaciones de la FIA siempre han tenido plazos estrictos para apelaciones, típicamente durante la temporada o poco después de las carreras. Una vez que ocurre la Gala de Entrega de Premios de la FIA y se coronan campeones, los resultados se vuelven finales. Aunque existe la Corte Internacional de Apelaciones para asuntos serios, las clasificaciones del campeonato no pueden apelarse meses después de que concluye la temporada. Esto asegura la finalidad.",
          de: "Es gab kein 12-monatiges Berufungsfenster nach der Saison. FIA-Regeln hatten immer strenge Fristen für Berufungen, typischerweise während der Saison oder kurz nach Rennen. Sobald die FIA-Preisverleihungsgala stattfindet und Champions gekrönt werden, werden Ergebnisse endgültig. Während das Internationale Berufungsgericht für ernste Angelegenheiten existiert, können Meisterschaftsstände nicht Monate nach Saisonende angefochten werden. Dies gewährleistet Endgültigkeit.",
          nl: "Er was geen 12 maanden post-seizoen beroepsvenster. FIA reglementen hebben altijd strikte deadlines gehad voor beroepen, typisch tijdens het seizoen of kort na races. Zodra de FIA Prize Giving Gala plaatsvindt en kampioenen worden gekroond, worden resultaten definitief. Hoewel het Internationaal Hof van Beroep bestaat voor serieuze zaken, kunnen kampioenschapsstanden niet worden aangevochten maanden na het einde van het seizoen. Dit waarborgt finaliteit."
        }
      },
      {
        question: {
          en: "Which driver holds the record for winning the championship with the fewest number of points scored in the modern era (2010-present)?",
          es: "¿Qué piloto tiene el récord de ganar el campeonato con el menor número de puntos anotados en la era moderna (2010-presente)?",
          de: "Welcher Fahrer hält den Rekord für den Meisterschaftsgewinn mit den wenigsten Punkten in der modernen Ära (2010-heute)?",
          nl: "Welke coureur heeft het record voor het winnen van het kampioenschap met het minste aantal gescoorde punten in het moderne tijdperk (2010-heden)?"
        },
        options: ["Sebastian Vettel 2010 (256 points)", "Nico Rosberg 2016 (385 points)", "Lewis Hamilton 2008 (98 points, pre-2010)", "Jenson Button 2009 (95 points, pre-2010)"],
        correct: 0,
        explanation: {
          en: "In the modern era defined as 2010-present with the current points system (25 for win), Sebastian Vettel's 2010 championship with 256 points is the lowest total. This was partly due to fewer races (19) compared to modern calendars (20+). Hamilton 2008 (98) and Button 2009 (95) had lower totals but used the old 10-points-for-win system, making direct comparison difficult. Rosberg 2016 had 385 points.",
          es: "En la era moderna definida como 2010-presente con el sistema de puntos actual (25 por victoria), el campeonato de Sebastian Vettel 2010 con 256 puntos es el total más bajo. Esto se debió en parte a menos carreras (19) en comparación con calendarios modernos (20+). Hamilton 2008 (98) y Button 2009 (95) tuvieron totales más bajos pero usaron el antiguo sistema de 10 puntos por victoria, haciendo la comparación directa difícil. Rosberg 2016 tuvo 385 puntos.",
          de: "In der modernen Ära definiert als 2010-heute mit dem aktuellen Punktesystem (25 für Sieg) ist Sebastian Vettels Meisterschaft 2010 mit 256 Punkten die niedrigste Gesamtzahl. Dies lag teilweise an weniger Rennen (19) im Vergleich zu modernen Kalendern (20+). Hamilton 2008 (98) und Button 2009 (95) hatten niedrigere Gesamtzahlen, verwendeten aber das alte 10-Punkte-für-Sieg-System, was direkte Vergleiche schwierig macht. Rosberg 2016 hatte 385 Punkte.",
          nl: "In het moderne tijdperk gedefinieerd als 2010-heden met het huidige puntensysteem (25 voor overwinning), is Sebastian Vettel's kampioenschap van 2010 met 256 punten het laagste totaal. Dit was deels door minder races (19) vergeleken met moderne kalenders (20+). Hamilton 2008 (98) en Button 2009 (95) hadden lagere totalen maar gebruikten het oude 10-punten-voor-overwinning systeem, wat directe vergelijking moeilijk maakt. Rosberg 2016 had 385 punten."
        }
      },
      {
        question: {
          en: "In which season did the FIA experiment with awarding 'bonus points' for leading the most laps throughout the championship?",
          es: "¿En qué temporada experimentó la FIA con otorgar 'puntos de bonificación' por liderar más vueltas durante el campeonato?",
          de: "In welcher Saison experimentierte die FIA mit der Vergabe von 'Bonuspunkten' für die meisten geführten Runden während der Meisterschaft?",
          nl: "In welk seizoen experimenteerde de FIA met het toekennen van 'bonuspunten' voor het leiden van de meeste rondes gedurende het kampioenschap?"
        },
        options: ["Never - laps led never counted for points", "1991 (experimental season)", "2000 (millennium format)", "2019 (fastest lap introduced but not laps led)"],
        correct: 0,
        explanation: {
          en: "This is a trick question. The FIA has never awarded championship points for leading the most laps. While leading laps is a statistic tracked for historical interest, it has never factored into championship points. The 2019 fastest lap bonus point rewards the fastest single lap (if finishing top 10), not cumulative laps led. No 'laps led bonus' has ever existed in F1.",
          es: "Esta es una pregunta trampa. La FIA nunca ha otorgado puntos del campeonato por liderar más vueltas. Aunque liderar vueltas es una estadística rastreada por interés histórico, nunca ha sido factor en los puntos del campeonato. El punto de bonificación por vuelta rápida de 2019 recompensa la vuelta más rápida individual (si termina en el top 10), no vueltas lideradas acumulativas. Ningún 'bono por vueltas lideradas' ha existido en F1.",
          de: "Dies ist eine Fangfrage. Die FIA hat nie Meisterschaftspunkte für die meisten geführten Runden vergeben. Während geführte Runden als Statistik für historisches Interesse verfolgt werden, haben sie nie in Meisterschaftspunkte eingeflossen. Der Bonuspunkt für die schnellste Runde 2019 belohnt die schnellste Einzelrunde (bei Top-10-Platzierung), nicht kumulative geführte Runden. Ein 'Bonus für geführte Runden' hat in F1 nie existiert.",
          nl: "Dit is een strikvraag. De FIA heeft nooit kampioenschapspunten toegekend voor het leiden van de meeste rondes. Hoewel geleidde rondes een statistiek is die wordt bijgehouden voor historisch belang, heeft het nooit meeteld voor kampioenschapspunten. Het bonuspunt voor de snelste ronde van 2019 beloont de snelste enkele ronde (bij eindigen in top 10), niet cumulatieve geleidde rondes. Een 'geleidde rondes bonus' heeft nooit bestaan in F1."
        }
      },
      {
        question: {
          en: "What unprecedented 2021 scenario saw the race director invoke a never-before-used regulation to restart the race with one lap remaining?",
          es: "¿Qué escenario sin precedentes de 2021 vio al director de carrera invocar una regulación nunca antes usada para reiniciar la carrera con una vuelta restante?",
          de: "Welches beispiellose Szenario von 2021 sah den Rennleiter eine nie zuvor verwendete Regelung anwenden, um das Rennen mit einer verbleibenden Runde neu zu starten?",
          nl: "Welk ongekend scenario uit 2021 zag de racedirecteur een nooit eerder gebruikte regel inroepen om de race te herstarten met één ronde over?"
        },
        options: ["Abu Dhabi: selective lapped car unlapping", "Spa: half-points for 2-lap race behind SC", "Monza: red flag restart controversy", "Saudi Arabia: multiple VSC/red flag periods"],
        correct: 0,
        explanation: {
          en: "The 2021 Abu Dhabi GP saw race director Michael Masi allow only the lapped cars between Hamilton (leading) and Verstappen (2nd) to unlap, rather than all lapped cars as per standard procedure. The safety car then withdrew with one lap remaining, allowing Verstappen on fresh tires to pass Hamilton and win both the race and championship. This controversial decision led to Masi's removal and revised safety car procedures.",
          es: "El GP de Abu Dhabi 2021 vio al director de carrera Michael Masi permitir que solo los coches doblados entre Hamilton (liderando) y Verstappen (2º) se desdoblaran, en lugar de todos los coches doblados según el procedimiento estándar. El coche de seguridad se retiró con una vuelta restante, permitiendo a Verstappen con neumáticos frescos pasar a Hamilton y ganar tanto la carrera como el campeonato. Esta decisión controvertida llevó a la remoción de Masi y procedimientos de coche de seguridad revisados.",
          de: "Der Abu Dhabi GP 2021 sah Rennleiter Michael Masi nur die überrundeten Autos zwischen Hamilton (führend) und Verstappen (2.) überholen lassen, anstatt alle überrundeten Autos wie per Standardprozedur. Das Safety Car zog sich mit einer verbleibenden Runde zurück, was Verstappen mit frischen Reifen erlaubte, Hamilton zu überholen und sowohl das Rennen als auch die Meisterschaft zu gewinnen. Diese kontroverse Entscheidung führte zu Masis Entfernung und überarbeiteten Safety-Car-Verfahren.",
          nl: "De Abu Dhabi GP 2021 zag racedirecteur Michael Masi alleen de gelapte auto's tussen Hamilton (leidend) en Verstappen (2e) laten ontlappen, in plaats van alle gelapte auto's volgens standaardprocedure. De safety car trok zich terug met één ronde over, waardoor Verstappen op verse banden Hamilton kon passeren en zowel de race als het kampioenschap kon winnen. Deze controversiële beslissing leidde tot Masi's verwijdering en herziene safety car procedures."
        }
      },
      {
        question: {
          en: "How many times has the constructors' championship been won by a team whose drivers finished outside the top 3 in the drivers' championship?",
          es: "¿Cuántas veces ha sido ganado el campeonato de constructores por un equipo cuyos pilotos terminaron fuera del top 3 en el campeonato de pilotos?",
          de: "Wie oft wurde die Konstrukteursmeisterschaft von einem Team gewonnen, dessen Fahrer außerhalb der Top 3 der Fahrerwertung endeten?",
          nl: "Hoe vaak is het constructeurskampioenschap gewonnen door een team waarvan de coureurs buiten de top 3 eindigden in het coureurskampioenschap?"
        },
        options: ["Never - impossible due to points structure", "Once (unusual circumstances)", "Twice (1950s team dynamics)", "Three times in F1 history"],
        correct: 0,
        explanation: {
          en: "This has never happened and is mathematically near-impossible. For a constructor to win the championship, they need the most combined points from their drivers. If both drivers finished outside the top 3 individually (4th and lower), their combined total couldn't exceed teams with drivers finishing 1st-3rd. The winning constructor has always had at least one driver in the top 3 of the drivers' championship.",
          es: "Esto nunca ha sucedido y es matemáticamente casi imposible. Para que un constructor gane el campeonato, necesita la mayor cantidad de puntos combinados de sus pilotos. Si ambos pilotos terminaron fuera del top 3 individualmente (4º y menor), su total combinado no podría exceder a equipos con pilotos terminando 1º-3º. El constructor ganador siempre ha tenido al menos un piloto en el top 3 del campeonato de pilotos.",
          de: "Dies ist nie passiert und ist mathematisch nahezu unmöglich. Damit ein Konstrukteur die Meisterschaft gewinnt, braucht er die meisten kombinierten Punkte seiner Fahrer. Wenn beide Fahrer individuell außerhalb der Top 3 endeten (4. und niedriger), könnte ihre kombinierte Gesamtzahl Teams mit Fahrern auf Platz 1-3 nicht übertreffen. Der siegreiche Konstrukteur hatte immer mindestens einen Fahrer in den Top 3 der Fahrerwertung.",
          nl: "Dit is nooit gebeurd en is mathematisch bijna onmogelijk. Voor een constructeur om het kampioenschap te winnen, hebben ze de meeste gecombineerde punten van hun coureurs nodig. Als beide coureurs individueel buiten de top 3 eindigden (4e en lager), kon hun gecombineerde totaal teams met coureurs die 1e-3e eindigden niet overtreffen. De winnende constructeur heeft altijd ten minste één coureur in de top 3 van het coureurskampioenschap gehad."
        }
      },
      {
        question: {
          en: "What controversial 1982 'driver strike' threatened to void the entire championship if demands weren't met by the FIA?",
          es: "¿Qué controvertida 'huelga de pilotos' de 1982 amenazó con anular todo el campeonato si la FIA no cumplía las demandas?",
          de: "Welcher kontroverse 'Fahrerstreik' von 1982 drohte, die gesamte Meisterschaft ungültig zu machen, wenn die FIA die Forderungen nicht erfüllte?",
          nl: "Welke controversiële 'coureursstaking' uit 1982 dreigde het hele kampioenschap nietig te verklaren als de FIA de eisen niet inwilligde?"
        },
        options: ["South African GP drivers boycotted over licenses", "San Marino GP strike over safety concerns", "No championship-voiding strike occurred", "Brazilian GP boycott over contract disputes"],
        correct: 0,
        explanation: {
          en: "At the 1982 South African GP, drivers went on strike over 'super-license' requirements in their FISA contracts. The race was delayed while negotiations occurred. While this was a serious confrontation between drivers and the FIA, it was resolved and the championship continued normally. No threat to void the entire championship materialized - the season continued with Keke Rosberg eventually winning the title.",
          es: "En el GP de Sudáfrica 1982, los pilotos se declararon en huelga por los requisitos de 'super-licencia' en sus contratos FISA. La carrera se retrasó mientras ocurrían negociaciones. Aunque fue una confrontación seria entre pilotos y la FIA, se resolvió y el campeonato continuó normalmente. Ninguna amenaza de anular todo el campeonato se materializó - la temporada continuó con Keke Rosberg ganando eventualmente el título.",
          de: "Beim Südafrika GP 1982 streikten Fahrer wegen 'Super-Lizenz'-Anforderungen in ihren FISA-Verträgen. Das Rennen wurde verzögert, während Verhandlungen stattfanden. Während dies eine ernste Konfrontation zwischen Fahrern und der FIA war, wurde sie gelöst und die Meisterschaft lief normal weiter. Keine Drohung, die gesamte Meisterschaft ungültig zu machen, materialisierte sich - die Saison lief weiter mit Keke Rosberg, der schließlich den Titel gewann.",
          nl: "Bij de Zuid-Afrikaanse GP 1982 staakten coureurs over 'super-licentie' vereisten in hun FISA contracten. De race werd uitgesteld terwijl onderhandelingen plaatsvonden. Hoewel dit een serieuze confrontatie was tussen coureurs en de FIA, werd het opgelost en het kampioenschap ging normaal door. Geen dreiging om het hele kampioenschap nietig te verklaren materialiseerde - het seizoen ging door met Keke Rosberg die uiteindelijk de titel won."
        }
      },
      {
        question: {
          en: "In the entire history of F1, how many championships have been decided by the 'fifth-level tiebreaker' (most 5th place finishes)?",
          es: "En toda la historia de F1, ¿cuántos campeonatos se han decidido por el 'desempate de quinto nivel' (más quintos lugares)?",
          de: "In der gesamten Geschichte der F1, wie viele Meisterschaften wurden durch den 'Tiebreaker der fünften Ebene' (meiste 5. Plätze) entschieden?",
          nl: "In de hele geschiedenis van F1, hoeveel kampioenschappen zijn beslist door de 'vijfde-niveau tiebreaker' (meeste 5e plaatsen)?"
        },
        options: ["Zero - never reached beyond 2nd-level tiebreaker", "Once (extremely close season)", "Twice (1950s and 1980s)", "Three times total"],
        correct: 0,
        explanation: {
          en: "No F1 championship has ever required a tiebreaker beyond the second level (most 2nd place finishes). The tiebreaker hierarchy is: 1) most wins, 2) most 2nds, 3) most 3rds, continuing down. For drivers to be tied through all positions would be statistically near-impossible with 20+ races. All close championships have been decided by total points, with tiebreakers existing but never needed beyond theoretical scenarios.",
          es: "Ningún campeonato de F1 ha requerido un desempate más allá del segundo nivel (más segundos lugares). La jerarquía de desempate es: 1) más victorias, 2) más segundos, 3) más terceros, continuando hacia abajo. Que los pilotos estén empatados en todas las posiciones sería estadísticamente casi imposible con más de 20 carreras. Todos los campeonatos cerrados se han decidido por puntos totales, con desempates existentes pero nunca necesarios más allá de escenarios teóricos.",
          de: "Keine F1-Meisterschaft hat jemals einen Tiebreaker über die zweite Ebene (meiste 2. Plätze) hinaus benötigt. Die Tiebreaker-Hierarchie ist: 1) meiste Siege, 2) meiste 2. Plätze, 3) meiste 3. Plätze, fortlaufend. Dass Fahrer durch alle Positionen gebunden sind, wäre statistisch nahezu unmöglich mit 20+ Rennen. Alle knappen Meisterschaften wurden durch Gesamtpunkte entschieden, mit Tiebreakers, die existieren, aber nie über theoretische Szenarien hinaus benötigt wurden.",
          nl: "Geen F1-kampioenschap heeft ooit een tiebreaker voorbij het tweede niveau (meeste 2e plaatsen) vereist. De tiebreaker-hiërarchie is: 1) meeste overwinningen, 2) meeste 2e plaatsen, 3) meeste 3e plaatsen, doorgaand. Dat coureurs gelijk zijn door alle posities zou statistisch bijna onmogelijk zijn met 20+ races. Alle close kampioenschappen zijn beslist door totale punten, met tiebreakers die bestaan maar nooit nodig waren verder dan theoretische scenario's."
        }
      },
      {
        question: {
          en: "What ultra-obscure regulation prevented championship points from being awarded if fewer than 6 cars finished a race?",
          es: "¿Qué regulación ultra-obscura impedía que se otorgaran puntos del campeonato si menos de 6 coches terminaban una carrera?",
          de: "Welche ultra-obskure Regelung verhinderte die Vergabe von Meisterschaftspunkten, wenn weniger als 6 Autos ein Rennen beendeten?",
          nl: "Welke ultra-obscure regel verhinderde dat kampioenschapspunten werden toegekend als minder dan 6 auto's een race beëindigden?"
        },
        options: ["No such rule - points awarded regardless of finishers", "1950s minimum finisher requirement", "Modern reduced points if low classification", "Pre-war regulation carried into 1950"],
        correct: 0,
        explanation: {
          en: "This is a trick question. There has never been a minimum finisher requirement to award championship points. As long as a race starts and is classified (typically 2 laps completed for reduced points, or 75% for full points), points are awarded to however many cars finish. Even races with very few finishers due to attrition have awarded points to those who completed the race distance or were classified.",
          es: "Esta es una pregunta trampa. Nunca ha habido un requisito mínimo de finalizadores para otorgar puntos del campeonato. Mientras una carrera comience y sea clasificada (típicamente 2 vueltas completadas para puntos reducidos, o 75% para puntos completos), se otorgan puntos a cuantos coches terminen. Incluso carreras con muy pocos finalizadores debido a desgaste han otorgado puntos a aquellos que completaron la distancia de carrera o fueron clasificados.",
          de: "Dies ist eine Fangfrage. Es gab nie eine Mindestanzahl an Finishern, um Meisterschaftspunkte zu vergeben. Solange ein Rennen startet und klassifiziert wird (typischerweise 2 absolvierte Runden für reduzierte Punkte oder 75% für volle Punkte), werden Punkte an so viele Autos vergeben, wie ins Ziel kommen. Selbst Rennen mit sehr wenigen Finishern aufgrund von Ausfällen haben Punkte an diejenigen vergeben, die die Renndistanz absolvierten oder klassifiziert wurden.",
          nl: "Dit is een strikvraag. Er is nooit een minimum finisher-vereiste geweest om kampioenschapspunten toe te kennen. Zolang een race start en geclassificeerd wordt (typisch 2 voltooide rondes voor verminderde punten, of 75% voor volledige punten), worden punten toegekend aan hoeveel auto's ook finishen. Zelfs races met zeer weinig finishers door slijtage hebben punten toegekend aan degenen die de racedistantie voltooiden of geclassificeerd waren."
        }
      },
      {
        question: {
          en: "Which championship winner has the distinction of never leading a single lap during any race throughout their title-winning season?",
          es: "¿Qué ganador del campeonato tiene la distinción de nunca haber liderado una sola vuelta durante ninguna carrera en su temporada ganadora del título?",
          de: "Welcher Meisterschaftsgewinner hat die Auszeichnung, während seiner titelgewinnenden Saison nie eine einzige Runde in irgendeinem Rennen geführt zu haben?",
          nl: "Welke kampioenschapswinnaar heeft de eer nooit een enkele ronde te hebben geleid tijdens enige race in hun titel-winnende seizoen?"
        },
        options: ["None - all champions led laps in winning seasons", "Mike Hawthorn 1958 (consistency wins)", "Keke Rosberg 1982 (1 win but few laps led)", "Alain Prost 1986 (tactical racing)"],
        correct: 0,
        explanation: {
          en: "Every F1 champion has led at least some laps during their championship-winning season. Even drivers who won with few victories (like Hawthorn 1958 with 1 win, Rosberg 1982 with 1 win) led laps in those winning races. To win a race, a driver must lead the final lap at minimum. Therefore, it's impossible to win a championship without leading at least one lap - the final lap of at least one race.",
          es: "Cada campeón de F1 ha liderado al menos algunas vueltas durante su temporada ganadora del campeonato. Incluso pilotos que ganaron con pocas victorias (como Hawthorn 1958 con 1 victoria, Rosberg 1982 con 1 victoria) lideraron vueltas en esas carreras ganadoras. Para ganar una carrera, un piloto debe liderar la última vuelta como mínimo. Por lo tanto, es imposible ganar un campeonato sin liderar al menos una vuelta - la última vuelta de al menos una carrera.",
          de: "Jeder F1-Champion hat während seiner meisterschaftsgewinnenden Saison mindestens einige Runden geführt. Selbst Fahrer, die mit wenigen Siegen gewannen (wie Hawthorn 1958 mit 1 Sieg, Rosberg 1982 mit 1 Sieg), führten Runden in diesen gewinnenden Rennen. Um ein Rennen zu gewinnen, muss ein Fahrer mindestens die letzte Runde führen. Daher ist es unmöglich, eine Meisterschaft zu gewinnen, ohne mindestens eine Runde zu führen - die letzte Runde von mindestens einem Rennen.",
          nl: "Elke F1-kampioen heeft ten minste enkele rondes geleid tijdens hun kampioenschap-winnende seizoen. Zelfs coureurs die wonnen met weinig overwinningen (zoals Hawthorn 1958 met 1 overwinning, Rosberg 1982 met 1 overwinning) leidden rondes in die winnende races. Om een race te winnen, moet een coureur minimaal de laatste ronde leiden. Daarom is het onmogelijk om een kampioenschap te winnen zonder ten minste één ronde te leiden - de laatste ronde van ten minste één race."
        }
      },
      {
        question: {
          en: "What theoretical championship scenario would require FIA intervention if two drivers finished with identical points, wins, podiums, and all other positions?",
          es: "¿Qué escenario de campeonato teórico requeriría intervención de la FIA si dos pilotos terminaran con puntos idénticos, victorias, podios y todas las demás posiciones?",
          de: "Welches theoretische Meisterschaftsszenario würde FIA-Intervention erfordern, wenn zwei Fahrer mit identischen Punkten, Siegen, Podien und allen anderen Positionen endeten?",
          nl: "Welk theoretisch kampioenschap scenario zou FIA-interventie vereisen als twee coureurs eindigden met identieke punten, overwinningen, podiums en alle andere posities?"
        },
        options: ["Countback to earliest best result decides", "Coin toss or lottery draw", "Joint championship awarded to both", "Additional race held to decide"],
        correct: 0,
        explanation: {
          en: "If drivers were somehow identically tied through all finishing positions (statistically near-impossible), the tiebreaker would be determined by countback to the earliest race where one driver achieved a better result. The FIA sporting regulations specify this, though it has never been needed. No coin toss, joint championship, or additional race would occur - the countback system provides a definitive answer without FIA intervention beyond applying existing rules.",
          es: "Si los pilotos estuvieran de alguna manera empatados idénticamente en todas las posiciones de llegada (estadísticamente casi imposible), el desempate se determinaría por recuento a la carrera más temprana donde un piloto logró un mejor resultado. Las regulaciones deportivas de la FIA especifican esto, aunque nunca ha sido necesario. No ocurriría lanzamiento de moneda, campeonato conjunto o carrera adicional - el sistema de recuento proporciona una respuesta definitiva sin intervención de la FIA más allá de aplicar reglas existentes.",
          de: "Wenn Fahrer irgendwie identisch durch alle Endpositionen gebunden wären (statistisch nahezu unmöglich), würde der Tiebreaker durch Rückzählung zum frühesten Rennen bestimmt, bei dem ein Fahrer ein besseres Ergebnis erzielte. Die sportlichen FIA-Regeln spezifizieren dies, obwohl es nie benötigt wurde. Kein Münzwurf, gemeinsame Meisterschaft oder zusätzliches Rennen würde auftreten - das Rückzählungssystem liefert eine definitive Antwort ohne FIA-Intervention über die Anwendung bestehender Regeln hinaus.",
          nl: "Als coureurs op de een of andere manier identiek gelijk zouden zijn door alle eindposities (statistisch bijna onmogelijk), zou de tiebreaker worden bepaald door terugtellen naar de vroegste race waar één coureur een beter resultaat behaalde. De FIA sportreglementen specificeren dit, hoewel het nooit nodig is geweest. Geen muntgooien, gezamenlijk kampioenschap of extra race zou plaatsvinden - het terugtel-systeem geeft een definitief antwoord zonder FIA-interventie verder dan het toepassen van bestaande regels."
        }
      },
      {
        question: {
          en: "How many drivers have won the championship despite being excluded from scoring points in one or more races during that season?",
          es: "¿Cuántos pilotos han ganado el campeonato a pesar de ser excluidos de anotar puntos en una o más carreras durante esa temporada?",
          de: "Wie viele Fahrer haben die Meisterschaft gewonnen, obwohl sie in einem oder mehreren Rennen während dieser Saison von der Punktevergabe ausgeschlossen waren?",
          nl: "Hoeveel coureurs hebben het kampioenschap gewonnen ondanks uitgesloten te zijn van het scoren van punten in één of meer races tijdens dat seizoen?"
        },
        options: ["Several - DSQs common in championship seasons", "Zero - exclusions prevent title runs", "One (exceptional circumstances)", "Two drivers in F1 history"],
        correct: 0,
        explanation: {
          en: "Several champions have won despite disqualifications or exclusions during their title seasons. Examples include James Hunt (1976, reinstated after Spanish GP DQ), Michael Schumacher (multiple seasons with penalties), and others who received post-race exclusions but still had enough points to win. DSQs from individual races don't prevent championships if the driver accumulates sufficient points from other races. This demonstrates that consistency across a season matters more than perfection in every race.",
          es: "Varios campeones han ganado a pesar de descalificaciones o exclusiones durante sus temporadas de título. Los ejemplos incluyen James Hunt (1976, reinstalado después de DQ del GP de España), Michael Schumacher (múltiples temporadas con penalizaciones), y otros que recibieron exclusiones post-carrera pero aún tenían suficientes puntos para ganar. Las descalificaciones de carreras individuales no previenen campeonatos si el piloto acumula suficientes puntos de otras carreras. Esto demuestra que la consistencia durante una temporada importa más que la perfección en cada carrera.",
          de: "Mehrere Champions haben trotz Disqualifikationen oder Ausschlüssen während ihrer Titelsaisons gewonnen. Beispiele sind James Hunt (1976, nach Spanien GP DQ wiederhergestellt), Michael Schumacher (mehrere Saisons mit Strafen) und andere, die Post-Race-Ausschlüsse erhielten, aber noch genug Punkte hatten, um zu gewinnen. DSQs aus einzelnen Rennen verhindern keine Meisterschaften, wenn der Fahrer aus anderen Rennen ausreichend Punkte sammelt. Dies zeigt, dass Konstanz über eine Saison mehr zählt als Perfektion in jedem Rennen.",
          nl: "Meerdere kampioenen hebben gewonnen ondanks diskwalificaties of uitsluitingen tijdens hun titel-seizoenen. Voorbeelden zijn James Hunt (1976, hersteld na Spaanse GP DQ), Michael Schumacher (meerdere seizoenen met straffen), en anderen die post-race uitsluitingen kregen maar nog genoeg punten hadden om te winnen. DSQs van individuele races voorkomen geen kampioenschappen als de coureur voldoende punten verzamelt uit andere races. Dit toont aan dat consistentie over een seizoen meer uitmaakt dan perfectie in elke race."
        }
      },
      {
        question: {
          en: "What unprecedented regulation change mid-season has ever affected how championship points were calculated for the remainder of that year?",
          es: "¿Qué cambio de regulación sin precedentes a mitad de temporada ha afectado alguna vez cómo se calculaban los puntos del campeonato para el resto de ese año?",
          de: "Welche beispiellose Regeländerung zur Saisonmitte hat jemals beeinflusst, wie Meisterschaftspunkte für den Rest des Jahres berechnet wurden?",
          nl: "Welke ongekende regelwijziging mid-seizoen heeft ooit beïnvloed hoe kampioenschapspunten werden berekend voor de rest van dat jaar?"
        },
        options: ["1979 dropped-results rule changed mid-season", "Never - points systems set before season starts", "1988 best-11 rule introduced mid-year", "2014 double points announced during season"],
        correct: 1,
        explanation: {
          en: "Championship points systems have never been changed mid-season. All points structures are determined and announced before the season begins to ensure fairness and consistency. While other regulations (technical, sporting) have been modified during seasons, the fundamental points system remains fixed. The 2014 double-points finale was controversial but announced before the season. Maintaining points system integrity throughout each season is a core FIA principle.",
          es: "Los sistemas de puntos del campeonato nunca se han cambiado a mitad de temporada. Todas las estructuras de puntos se determinan y anuncian antes de que comience la temporada para asegurar equidad y consistencia. Aunque otras regulaciones (técnicas, deportivas) se han modificado durante temporadas, el sistema de puntos fundamental permanece fijo. La final de puntos dobles de 2014 fue controvertida pero se anunció antes de la temporada. Mantener la integridad del sistema de puntos durante cada temporada es un principio central de la FIA.",
          de: "Meisterschaftspunktesysteme wurden nie zur Saisonmitte geändert. Alle Punktestrukturen werden vor Saisonbeginn festgelegt und angekündigt, um Fairness und Konsistenz zu gewährleisten. Während andere Regeln (technisch, sportlich) während der Saisons geändert wurden, bleibt das grundlegende Punktesystem fest. Das Doppelpunkte-Finale 2014 war kontrovers, wurde aber vor der Saison angekündigt. Die Aufrechterhaltung der Punktesystemintegrität während jeder Saison ist ein Kernprinzip der FIA.",
          nl: "Kampioenschapspuntensystemen zijn nooit mid-seizoen veranderd. Alle puntenstructuren worden bepaald en aangekondigd voor het seizoen begint om eerlijkheid en consistentie te waarborgen. Hoewel andere reglementen (technisch, sportief) zijn gewijzigd tijdens seizoenen, blijft het fundamentele puntensysteem vast. De dubbele-punten finale van 2014 was controversieel maar aangekondigd voor het seizoen. Het handhaven van puntensysteem integriteit gedurende elk seizoen is een kern FIA principe."
        }
      },
      {
        question: {
          en: "Which driver won the championship with the highest percentage of their points coming from a single race weekend?",
          es: "¿Qué piloto ganó el campeonato con el mayor porcentaje de sus puntos proviniendo de un solo fin de semana de carrera?",
          de: "Welcher Fahrer gewann die Meisterschaft mit dem höchsten Prozentsatz seiner Punkte aus einem einzigen Rennwochenende?",
          nl: "Welke coureur won het kampioenschap met het hoogste percentage van hun punten komend van een enkel raceweekend?"
        },
        options: ["Impossible to determine without detailed analysis", "Mike Hawthorn 1958 (1 win of 42 points)", "Keke Rosberg 1982 (1 win of 44 points)", "Giuseppe Farina 1950 (early era racing)"],
        correct: 1,
        explanation: {
          en: "Mike Hawthorn won the 1958 championship with 42 points (best 6 from 11 races counted). His single victory at the French GP earned him 9 points (8 for win + 1 fastest lap), representing 21.4% of his total - an exceptionally high percentage from one race. This showcases how the dropped-results system and single-win consistency could deliver championships in the 1950s era.",
          es: "Mike Hawthorn ganó el campeonato de 1958 con 42 puntos (mejores 6 de 11 carreras contaban). Su única victoria en el GP de Francia le ganó 9 puntos (8 por victoria + 1 vuelta rápida), representando el 21.4% de su total - un porcentaje excepcionalmente alto de una carrera. Esto muestra cómo el sistema de resultados descartados y la consistencia de una sola victoria podían entregar campeonatos en la era de los años 1950.",
          de: "Mike Hawthorn gewann die Meisterschaft 1958 mit 42 Punkten (beste 6 von 11 Rennen zählten). Sein einziger Sieg beim Frankreich GP brachte ihm 9 Punkte (8 für Sieg + 1 schnellste Runde), was 21,4% seiner Gesamtzahl darstellt - ein außergewöhnlich hoher Prozentsatz aus einem Rennen. Dies zeigt, wie das System gestrichener Ergebnisse und Ein-Sieg-Konstanz Meisterschaften in der 1950er Ära liefern konnten.",
          nl: "Mike Hawthorn won het kampioenschap van 1958 met 42 punten (beste 6 van 11 races telden). Zijn enkele overwinning bij de Franse GP leverde hem 9 punten op (8 voor overwinning + 1 snelste ronde), wat 21,4% van zijn totaal vertegenwoordigt - een uitzonderlijk hoog percentage van één race. Dit toont hoe het systeem van geschrapte resultaten en enkele-overwinning consistentie kampioenschappen konden leveren in het tijdperk van de jaren 1950."
        }
      },
      {
        question: {
          en: "What regulation allows drivers to retain championship points if their team is disqualified from the constructors' championship?",
          es: "¿Qué regulación permite a los pilotos retener puntos del campeonato si su equipo es descalificado del campeonato de constructores?",
          de: "Welche Regelung erlaubt Fahrern, Meisterschaftspunkte zu behalten, wenn ihr Team von der Konstrukteursmeisterschaft disqualifiziert wird?",
          nl: "Welke regel stelt coureurs in staat kampioenschapspunten te behouden als hun team wordt gediskwalificeerd van het constructeurskampioenschap?"
        },
        options: ["Drivers and constructors are separate championships", "Points voided if constructor excluded", "FIA discretion on case-by-case basis", "Only pre-season DQs affect driver points"],
        correct: 0,
        explanation: {
          en: "The drivers' and constructors' championships are separate. If a team is disqualified or excluded from the constructors' championship, the drivers' points typically remain valid for the drivers' championship. This separation ensures individual driver achievements aren't nullified by team infractions. However, if individual race results are voided due to technical illegalities, both driver and constructor lose those specific race points. The key distinction is championship-wide vs. race-specific penalties.",
          es: "Los campeonatos de pilotos y constructores son separados. Si un equipo es descalificado o excluido del campeonato de constructores, los puntos de los pilotos típicamente permanecen válidos para el campeonato de pilotos. Esta separación asegura que los logros individuales de los pilotos no sean anulados por infracciones del equipo. Sin embargo, si se anulan resultados de carreras individuales debido a ilegalidades técnicas, tanto el piloto como el constructor pierden esos puntos específicos de carrera. La distinción clave es penalizaciones a nivel de campeonato vs. específicas de carrera.",
          de: "Die Fahrer- und Konstrukteursmeisterschaften sind getrennt. Wenn ein Team von der Konstrukteursmeisterschaft disqualifiziert oder ausgeschlossen wird, bleiben die Fahrerpunkte typischerweise für die Fahrermeisterschaft gültig. Diese Trennung stellt sicher, dass individuelle Fahrerleistungen nicht durch Teamverstöße ungültig werden. Wenn jedoch einzelne Rennergebnisse aufgrund technischer Illegalitäten annulliert werden, verlieren sowohl Fahrer als auch Konstrukteur diese spezifischen Rennpunkte. Die wichtige Unterscheidung ist meisterschaftsweite vs. rennspezifische Strafen.",
          nl: "De coureurs- en constructeurskampioenschappen zijn gescheiden. Als een team wordt gediskwalificeerd of uitgesloten van het constructeurskampioenschap, blijven de coureurspunten typisch geldig voor het coureurskampioenschap. Deze scheiding zorgt ervoor dat individuele coureursprestaties niet worden tenietgedaan door team overtredingen. Als echter individuele race-resultaten worden nietig verklaard vanwege technische illegaliteiten, verliezen zowel coureur als constructeur die specifieke race-punten. Het belangrijke onderscheid is kampioenschap-brede vs. race-specifieke straffen."
        }
      },
      {
        question: {
          en: "In the modern turbo-hybrid era (2014-present), what is the largest championship points margin of victory?",
          es: "En la era turbo-híbrida moderna (2014-presente), ¿cuál es el mayor margen de victoria en puntos del campeonato?",
          de: "In der modernen Turbo-Hybrid-Ära (2014-heute), was ist der größte Meisterschaftspunktevorsprung beim Sieg?",
          nl: "In het moderne turbo-hybride tijdperk (2014-heden), wat is de grootste kampioenschapspuntenmarge van overwinning?"
        },
        options: ["208 points (Verstappen 2023)", "146 points (Hamilton 2020)", "133 points (Rosberg 2016)", "96 points (Hamilton 2015)"],
        correct: 0,
        explanation: {
          en: "Max Verstappen's 2023 championship victory margin of 208 points over Sergio Pérez (575 vs 285) is the largest in the turbo-hybrid era and one of the largest in F1 history. Verstappen won 19 of 22 races, showcasing unprecedented dominance. This surpassed Hamilton's 2020 margin of 124 points and represents the most dominant single-season performance in the modern era.",
          es: "El margen de victoria en el campeonato de 2023 de Max Verstappen de 208 puntos sobre Sergio Pérez (575 vs 285) es el más grande en la era turbo-híbrida y uno de los más grandes en la historia de F1. Verstappen ganó 19 de 22 carreras, mostrando un dominio sin precedentes. Esto superó el margen de 2020 de Hamilton de 124 puntos y representa la actuación de una sola temporada más dominante en la era moderna.",
          de: "Max Verstappens Meisterschaftssiegmarge 2023 von 208 Punkten vor Sergio Pérez (575 vs 285) ist die größte in der Turbo-Hybrid-Ära und eine der größten in der F1-Geschichte. Verstappen gewann 19 von 22 Rennen und zeigte beispiellose Dominanz. Dies übertraf Hamiltons Marge 2020 von 124 Punkten und stellt die dominanteste Einzelsaison-Leistung in der modernen Ära dar.",
          nl: "Max Verstappen's kampioenschapszege-marge van 2023 van 208 punten voor Sergio Pérez (575 vs 285) is de grootste in het turbo-hybride tijdperk en een van de grootste in F1-geschiedenis. Verstappen won 19 van 22 races, wat ongekende dominantie toonde. Dit overtrof Hamilton's 2020 marge van 124 punten en vertegenwoordigt de meest dominante enkel-seizoen prestatie in het moderne tijdperk."
        }
      },
      {
        question: {
          en: "What theoretical scenario would invalidate all championship points if discovered: using an illegal fuel that retrospectively voids all race results?",
          es: "¿Qué escenario teórico invalidaría todos los puntos del campeonato si se descubriera: usar un combustible ilegal que anula retroactivamente todos los resultados de carreras?",
          de: "Welches theoretische Szenario würde alle Meisterschaftspunkte ungültig machen, wenn entdeckt: Verwendung illegalen Kraftstoffs, der rückwirkend alle Rennergebnisse ungültig macht?",
          nl: "Welk theoretisch scenario zou alle kampioenschapspunten ongeldig maken als ontdekt: gebruik van illegale brandstof die retroactief alle race-resultaten nietig verklaart?"
        },
        options: ["All results voided, championship cancelled", "Points redistributed to legal competitors", "Season-long technical infraction has no precedent", "FIA would apply case-specific ruling"],
        correct: 2,
        explanation: {
          en: "There is no precedent for a season-long systematic technical illegality that would void an entire championship. While individual race disqualifications have occurred for technical violations, no team has been found to have run illegal equipment throughout an entire season that would necessitate voiding all results. The closest was McLaren 2007 (excluded from constructors' but drivers kept points). F1 regulations and scrutineering are designed to prevent such scenarios.",
          es: "No hay precedente de una ilegalidad técnica sistemática de toda la temporada que anularía un campeonato completo. Aunque han ocurrido descalificaciones de carreras individuales por violaciones técnicas, ningún equipo ha sido encontrado corriendo equipo ilegal durante toda una temporada que necesitara anular todos los resultados. Lo más cercano fue McLaren 2007 (excluido de constructores pero los pilotos mantuvieron puntos). Las regulaciones de F1 y el escrutinio están diseñados para prevenir tales escenarios.",
          de: "Es gibt keinen Präzedenzfall für eine saisonlange systematische technische Illegalität, die eine gesamte Meisterschaft ungültig machen würde. Während einzelne Renndisqualifikationen für technische Verstöße aufgetreten sind, wurde kein Team dabei ertappt, eine ganze Saison lang illegale Ausrüstung zu verwenden, die eine Annullierung aller Ergebnisse erforderlich machen würde. Am nächsten kam McLaren 2007 (von Konstrukteuren ausgeschlossen, aber Fahrer behielten Punkte). F1-Regeln und Kontrollen sind darauf ausgelegt, solche Szenarien zu verhindern.",
          nl: "Er is geen precedent voor een seizoen-lange systematische technische illegaliteit die een heel kampioenschap nietig zou verklaren. Hoewel individuele race-diskwalificaties zijn voorgekomen voor technische overtredingen, is geen team betrapt op het rijden van illegale uitrusting gedurende een heel seizoen dat het nietig verklaren van alle resultaten noodzakelijk zou maken. Het dichtst bij was McLaren 2007 (uitgesloten van constructeurs maar coureurs behielden punten). F1 reglementen en keuring zijn ontworpen om dergelijke scenario's te voorkomen."
        }
      },
      {
        question: {
          en: "How many times has a driver clinched the championship mathematically but then lost it due to a successful protest voiding their points?",
          es: "¿Cuántas veces un piloto ha asegurado matemáticamente el campeonato pero luego lo perdió debido a una protesta exitosa que anuló sus puntos?",
          de: "Wie oft hat ein Fahrer die Meisterschaft mathematisch gesichert, sie dann aber aufgrund eines erfolgreichen Protests verloren, der seine Punkte annullierte?",
          nl: "Hoe vaak heeft een coureur het kampioenschap mathematisch veiliggesteld maar het vervolgens verloren door een succesvol protest dat hun punten nietig verklaarde?"
        },
        options: ["Never - once clinched, titles remain secured", "Once (controversial protest upheld)", "Twice in F1 history", "Three times (pre-modern era)"],
        correct: 0,
        explanation: {
          en: "This has never happened. Once a driver mathematically clinches the championship (accumulates enough points that no other driver can overtake them), that title has never been taken away due to a subsequent protest or disqualification. While points from individual races can be removed before mathematical clinching, no champion has lost their title after securing it mathematically. The FIA ensures championship security once mathematical certainty is achieved.",
          es: "Esto nunca ha sucedido. Una vez que un piloto asegura matemáticamente el campeonato (acumula suficientes puntos que ningún otro piloto puede superarlo), ese título nunca ha sido quitado debido a una protesta o descalificación posterior. Aunque se pueden eliminar puntos de carreras individuales antes del aseguramiento matemático, ningún campeón ha perdido su título después de asegurarlo matemáticamente. La FIA asegura la seguridad del campeonato una vez que se logra la certeza matemática.",
          de: "Dies ist nie passiert. Sobald ein Fahrer die Meisterschaft mathematisch sichert (genug Punkte sammelt, dass kein anderer Fahrer ihn überholen kann), wurde dieser Titel nie aufgrund eines nachfolgenden Protests oder einer Disqualifikation weggenommen. Während Punkte aus einzelnen Rennen vor der mathematischen Sicherung entfernt werden können, hat kein Champion seinen Titel verloren, nachdem er ihn mathematisch gesichert hatte. Die FIA gewährleistet Meisterschaftssicherheit, sobald mathematische Gewissheit erreicht ist.",
          nl: "Dit is nooit gebeurd. Zodra een coureur het kampioenschap mathematisch veiligstelt (genoeg punten verzamelt dat geen andere coureur hem kan inhalen), is die titel nooit weggenomen door een volgend protest of diskwalificatie. Hoewel punten van individuele races kunnen worden verwijderd vóór mathematische veiligstelling, heeft geen kampioen hun titel verloren na het mathematisch veiligstellen. De FIA waarborgt kampioenschapsveiligheid zodra mathematische zekerheid is bereikt."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();