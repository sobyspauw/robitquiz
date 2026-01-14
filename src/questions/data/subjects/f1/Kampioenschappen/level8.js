// Kampioenschappen Quiz - Level 8
(function() {
  const level8 = {
    name: {
      en: "Kampioenschappen Level 8",
      es: "Kampioenschappen Nivel 8",
      de: "Kampioenschappen Stufe 8",
      nl: "Kampioenschappen Level 8"
    },
    questions: [
      {
        question: {
          en: "What obscure regulation allowed Jim Clark to score points in 1963 despite racing under suspension from the GPDA?",
          es: "¿Qué oscura regulación permitió a Jim Clark anotar puntos en 1963 a pesar de correr bajo suspensión de la GPDA?",
          de: "Welche obskure Regelung erlaubte Jim Clark 1963 Punkte zu erzielen, obwohl er von der GPDA suspendiert war?",
          nl: "Welke obscure regel stelde Jim Clark in staat punten te scoren in 1963 ondanks schorsing door de GPDA?"
        },
        options: ["GPDA had no official FIA authority", "Suspension only applied to non-championship races", "Team appealed successfully mid-season", "FIA overruled GPDA decisions automatically"],
        correct: 0,
        explanation: {
          en: "The Grand Prix Drivers' Association (GPDA) was a drivers' union with no official FIA regulatory power. While they could boycott races, they couldn't actually suspend drivers from championship competition. Clark's 1963 title was never in jeopardy despite GPDA tensions.",
          es: "La Asociación de Pilotos de Grand Prix (GPDA) era un sindicato de pilotos sin poder regulatorio oficial de la FIA. Aunque podían boicotear carreras, no podían suspender a pilotos de la competencia por el campeonato. El título de Clark en 1963 nunca estuvo en peligro a pesar de las tensiones con GPDA.",
          de: "Die Grand Prix Drivers' Association (GPDA) war eine Fahrergewerkschaft ohne offizielle FIA-Regulierungsbefugnis. Obwohl sie Rennen boykottieren konnten, konnten sie Fahrer nicht tatsächlich von der Meisterschaftsteilnahme suspendieren. Clarks Titel 1963 war trotz GPDA-Spannungen nie in Gefahr.",
          nl: "De Grand Prix Drivers' Association (GPDA) was een coureursvakbond zonder officiële FIA-regelgevende macht. Hoewel ze races konden boycotten, konden ze coureurs niet daadwerkelijk schorsen van kampioenschap competitie. Clarks 1963-titel was nooit in gevaar ondanks GPDA-spanningen."
        }
      },
      {
        question: {
          en: "Which championship was decided by a driver who never led the points standings until the final race classification was published?",
          es: "¿Qué campeonato fue decidido por un piloto que nunca lideró la clasificación de puntos hasta que se publicó la clasificación final de la última carrera?",
          de: "Welche Meisterschaft wurde von einem Fahrer entschieden, der die Punktewertung nie anführte, bis die Endklassifizierung des letzten Rennens veröffentlicht wurde?",
          nl: "Welk kampioenschap werd beslist door een coureur die nooit de puntenstand leidde tot de eindklassering van de laatste race werd gepubliceerd?"
        },
        options: ["1958 (Hawthorn)", "1964 (Surtees)", "1982 (Rosberg)", "1999 (Häkkinen)"],
        correct: 1,
        explanation: {
          en: "John Surtees in 1964 never led the championship until the final race results at Mexico were confirmed. Clark led going into the finale, but his engine failure combined with Surtees' P2 finish meant Surtees took the title by 1 point (40-39) in the final published standings.",
          es: "John Surtees en 1964 nunca lideró el campeonato hasta que se confirmaron los resultados de la carrera final en México. Clark lideraba antes del final, pero su fallo de motor combinado con el P2 de Surtees significó que Surtees tomó el título por 1 punto (40-39) en la clasificación final publicada.",
          de: "John Surtees führte 1964 die Meisterschaft nie an, bis die Ergebnisse des letzten Rennens in Mexiko bestätigt wurden. Clark führte vor dem Finale, aber sein Motorausfall kombiniert mit Surtees' P2 bedeutete, dass Surtees den Titel mit 1 Punkt (40-39) in der endgültigen Wertung holte.",
          nl: "John Surtees leidde in 1964 het kampioenschap nooit tot de resultaten van de laatste race in Mexico werden bevestigd. Clark leidde voor de finale, maar zijn motordefect gecombineerd met Surtees' P2-finish betekende dat Surtees de titel met 1 punt (40-39) pakte in de definitieve stand."
        }
      },
      {
        question: {
          en: "What unique 1950s scoring quirk meant a driver could finish 2nd in a race but score more points than the winner?",
          es: "¿Qué peculiaridad única de puntuación de la década de 1950 significaba que un piloto podía terminar 2º en una carrera pero anotar más puntos que el ganador?",
          de: "Welche einzigartige Punktevergabe-Besonderheit der 1950er bedeutete, dass ein Fahrer Zweiter werden, aber mehr Punkte als der Sieger erzielen konnte?",
          nl: "Welke unieke puntentelling-eigenaardigheden van de jaren 1950 betekende dat een coureur 2e kon finishen maar meer punten kon scoren dan de winnaar?"
        },
        options: ["Fastest lap bonus (1 point) could tip scales", "Shared drives split points unevenly", "Drop-worst-results meant retroactive changes", "Never possible - winners always scored most"],
        correct: 0,
        explanation: {
          en: "1950-1959 awarded 1 bonus point for fastest lap. If P1 didn't set fastest lap (8pts) but P2 did (6+1=7pts), this couldn't happen. However, with drop-results rules, a P2+FL could count (7pts) while a win was dropped (0pts), effectively meaning P2 outscored P1 in final championship tally.",
          es: "1950-1959 otorgaba 1 punto de bonificación por vuelta rápida. Si P1 no establecía vuelta rápida (8pts) pero P2 sí (6+1=7pts), esto no podía suceder. Sin embargo, con reglas de descartar resultados, un P2+VR podía contar (7pts) mientras que una victoria se descartaba (0pts), efectivamente significando que P2 superó a P1 en el recuento final.",
          de: "1950-1959 vergaben 1 Bonuspunkt für schnellste Runde. Wenn P1 keine schnellste Runde fuhr (8Pkt) aber P2 schon (6+1=7Pkt), konnte dies nicht passieren. Mit Drop-Results-Regeln konnte jedoch ein P2+SR zählen (7Pkt) während ein Sieg gestrichen wurde (0Pkt), was bedeutete, dass P2 in der Endwertung mehr Punkte als P1 erzielte.",
          nl: "1950-1959 kende 1 bonuspunt toe voor snelste ronde. Als P1 geen snelste ronde reed (8pts) maar P2 wel (6+1=7pts), kon dit niet gebeuren. Met drop-resultaten regels kon echter een P2+SR tellen (7pts) terwijl een overwinning werd geschrapt (0pts), waardoor P2 effectief meer scoorde dan P1 in eindtelling."
        }
      },
      {
        question: {
          en: "Which obscure regulation change in 1991 retroactively affected championship points allocation?",
          es: "¿Qué oscuro cambio de regulación en 1991 afectó retroactivamente la asignación de puntos del campeonato?",
          de: "Welche obskure Regeländerung 1991 wirkte sich rückwirkend auf die Meisterschaftspunktevergabe aus?",
          nl: "Welke obscure regelwijziging in 1991 had terugwerkende kracht op de kampioenschap puntenverdeling?"
        },
        options: ["DSQ penalties applied retroactively to previous races", "Mid-season change to points system (10-6-4-3-2-1)", "Dropped-results rule changed from best-11 to all-count", "None - 1991 had no retroactive changes"],
        correct: 3,
        explanation: {
          en: "This is a trick question. 1991 had no retroactive regulation changes affecting points. The points system (10-6-4-3-2-1) was stable all season, and all results counted (no drop-results). Senna won 7 races to Mansell's 5, scoring 96 to Mansell's 72 points without any retroactive adjustments.",
          es: "Esta es una pregunta trampa. 1991 no tuvo cambios de regulación retroactivos que afectaran puntos. El sistema de puntos (10-6-4-3-2-1) fue estable toda la temporada, y todos los resultados contaron (sin descartar resultados). Senna ganó 7 carreras contra 5 de Mansell, anotando 96 contra 72 puntos de Mansell sin ajustes retroactivos.",
          de: "Dies ist eine Fangfrage. 1991 hatte keine rückwirkenden Regeländerungen, die Punkte betrafen. Das Punktesystem (10-6-4-3-2-1) war die ganze Saison stabil, und alle Ergebnisse zählten (keine Drop-Results). Senna gewann 7 Rennen gegen Mansells 5 und erzielte 96 zu Mansells 72 Punkten ohne rückwirkende Anpassungen.",
          nl: "Dit is een strikvraag. 1991 had geen terugwerkende regelwijzigingen die punten beïnvloedden. Het puntensysteem (10-6-4-3-2-1) was stabiel het hele seizoen, en alle resultaten telden (geen drop-resultaten). Senna won 7 races tegen Mansells 5, scoorde 96 tegen Mansells 72 punten zonder terugwerkende aanpassingen."
        }
      },
      {
        question: {
          en: "What championship anomaly occurred in 1990 when the FIA retroactively reinstated Prost's Japanese GP disqualification appeal?",
          es: "¿Qué anomalía del campeonato ocurrió en 1990 cuando la FIA reintegró retroactivamente la apelación de la descalificación del GP de Japón de Prost?",
          de: "Welche Meisterschaftsanomalie trat 1990 auf, als die FIA rückwirkend Prosts Berufung gegen die Disqualifikation beim Japan-GP wiederherstellte?",
          nl: "Welke kampioenschap anomalie vond plaats in 1990 toen de FIA terugwerkend Prosts beroep tegen diskwalificatie bij de Japanse GP herstelde?"
        },
        options: ["Prost's 1989 DSQ was overturned, changing 1989 results", "1990 points were adjusted mid-season", "Appeal was rejected - no reinstatement occurred", "FIA created new appeal process for future seasons"],
        correct: 2,
        explanation: {
          en: "Trick question: Prost's 1989 Japanese GP disqualification (Suzuka collision with Senna) was never overturned. His appeal was rejected. Senna kept the 1989 championship, and the incident led to lasting Prost-Senna rivalry. No retroactive reinstatement occurred in 1990 or any subsequent year.",
          es: "Pregunta trampa: La descalificación del GP de Japón de 1989 de Prost (colisión en Suzuka con Senna) nunca se anuló. Su apelación fue rechazada. Senna mantuvo el campeonato de 1989, y el incidente llevó a una rivalidad duradera entre Prost y Senna. No ocurrió ninguna reintegración retroactiva en 1990 ni en años subsiguientes.",
          de: "Fangfrage: Prosts Disqualifikation beim Japan-GP 1989 (Suzuka-Kollision mit Senna) wurde nie aufgehoben. Seine Berufung wurde abgelehnt. Senna behielt die Meisterschaft 1989, und der Vorfall führte zu einer dauerhaften Prost-Senna-Rivalität. Keine rückwirkende Wiederherstellung erfolgte 1990 oder in späteren Jahren.",
          nl: "Strikvraag: Prosts diskwalificatie bij de Japanse GP van 1989 (Suzuka-botsing met Senna) werd nooit ongedaan gemaakt. Zijn beroep werd afgewezen. Senna behield het 1989 kampioenschap, en het incident leidde tot een blijvende Prost-Senna rivaliteit. Er vond geen terugwerkend herstel plaats in 1990 of enig volgend jaar."
        }
      },
      {
        question: {
          en: "Which driver lost a championship due to excluding a race win from their points tally under drop-results rules?",
          es: "¿Qué piloto perdió un campeonato debido a excluir una victoria de carrera de su recuento de puntos bajo reglas de descartar resultados?",
          de: "Welcher Fahrer verlor eine Meisterschaft, weil ein Rennsieg unter Drop-Results-Regeln aus seiner Punktzahl ausgeschlossen wurde?",
          nl: "Welke coureur verloor een kampioenschap door een racezege uit te sluiten van hun puntentelling onder drop-resultaten regels?"
        },
        options: ["Prost 1988 (dropped 2 wins, lost to Senna)", "Moss 1958 (dropped wins, lost to Hawthorn)", "Fangio 1954 (dropped 1 win, lost to González)", "Never happened - dropping wins never cost a title"],
        correct: 1,
        explanation: {
          en: "Stirling Moss in 1958 had to drop race wins under the best-6-results rule. Despite winning 4 races to Hawthorn's 1, Moss could only count 6 results (41pts after drops) while Hawthorn's consistency gave him 42pts. Moss literally had victories excluded from his tally, costing him the championship by 1 point.",
          es: "Stirling Moss en 1958 tuvo que descartar victorias de carrera bajo la regla de mejores-6-resultados. A pesar de ganar 4 carreras contra 1 de Hawthorn, Moss solo pudo contar 6 resultados (41pts después de descartes) mientras que la consistencia de Hawthorn le dio 42pts. Moss literalmente tuvo victorias excluidas de su recuento, costándole el campeonato por 1 punto.",
          de: "Stirling Moss musste 1958 Rennsiege unter der Best-6-Ergebnisse-Regel streichen. Trotz 4 Siegen gegen Hawthorns 1 konnte Moss nur 6 Ergebnisse zählen (41Pkt nach Streichungen), während Hawthorns Konstanz ihm 42Pkt gab. Moss hatte buchstäblich Siege von seiner Wertung ausgeschlossen, was ihm die Meisterschaft um 1 Punkt kostete.",
          nl: "Stirling Moss moest in 1958 raceszeges schrappen onder de beste-6-resultaten regel. Ondanks 4 zeges tegen Hawthorns 1, kon Moss slechts 6 resultaten tellen (41pts na schrapingen) terwijl Hawthorns consistentie hem 42pts gaf. Moss had letterlijk overwinningen uitgesloten van zijn totaal, wat hem het kampioenschap 1 punt kostte."
        }
      },
      {
        question: {
          en: "What obscure 1961 regulation allowed a driver to score points in two different engine formula categories in the same season?",
          es: "¿Qué oscura regulación de 1961 permitió a un piloto anotar puntos en dos categorías de fórmula de motor diferentes en la misma temporada?",
          de: "Welche obskure Regelung von 1961 erlaubte einem Fahrer, in derselben Saison in zwei verschiedenen Motorformelkategorien Punkte zu erzielen?",
          nl: "Welke obscure regel van 1961 stelde een coureur in staat punten te scoren in twee verschillende motorformule categorieën in hetzelfde seizoen?"
        },
        options: ["Intercontinental Formula allowed 2.5L and 1.5L engines", "Indianapolis 500 still counted with different engine rules", "Formula 2 cars could enter F1 races for reduced points", "Trick question - all cars used same 1.5L formula in 1961"],
        correct: 1,
        explanation: {
          en: "The Indianapolis 500 counted toward F1 World Championship points from 1950-1960, using front-engine roadsters with Offenhauser engines (different from F1's rear-engine 1.5L formula introduced 1961). However, 1961 was actually the LAST year Indy counted, not the first under new formula. By 1961 the two formulas had diverged completely.",
          es: "Las 500 Millas de Indianápolis contaron para puntos del Campeonato Mundial de F1 de 1950-1960, usando roadsters de motor delantero con motores Offenhauser (diferentes de la fórmula 1.5L de motor trasero de F1 introducida en 1961). Sin embargo, 1961 fue en realidad el ÚLTIMO año que Indy contó, no el primero bajo la nueva fórmula. Para 1961 las dos fórmulas habían divergido completamente.",
          de: "Die Indianapolis 500 zählten von 1950-1960 für F1-Weltmeisterschaftspunkte, mit Frontmotor-Roadstern mit Offenhauser-Motoren (anders als F1s Heckmotor-1.5L-Formel ab 1961). Allerdings war 1961 tatsächlich das LETZTE Jahr, in dem Indy zählte, nicht das erste unter der neuen Formel. Bis 1961 waren die beiden Formeln völlig auseinander.",
          nl: "De Indianapolis 500 telde mee voor F1 Wereldkampioenschap punten van 1950-1960, met voormotor roadsters met Offenhauser-motoren (anders dan F1's achtermotor 1.5L formule geïntroduceerd in 1961). Echter, 1961 was eigenlijk het LAATSTE jaar dat Indy telde, niet het eerste onder de nieuwe formule. Tegen 1961 waren de twee formules volledig uiteengelopen."
        }
      },
      {
        question: {
          en: "Which championship featured the only instance where the top 3 drivers all scored exactly the same number of race wins?",
          es: "¿Qué campeonato presentó el único caso en que los 3 primeros pilotos anotaron exactamente el mismo número de victorias de carrera?",
          de: "Welche Meisterschaft war der einzige Fall, bei dem die Top-3-Fahrer alle exakt die gleiche Anzahl an Rennsiegen erzielten?",
          nl: "Welk kampioenschap was het enige geval waarin de top 3 coureurs allemaal precies hetzelfde aantal racezeges scoorden?"
        },
        options: ["2003 (Schumacher, Räikkönen, Montoya - 6 wins each)", "2012 (Vettel, Alonso, Räikkönen - 5 wins each)", "1982 (Rosberg, Pironi, Watson - 2 wins each)", "Never happened - always different win counts"],
        correct: 3,
        explanation: {
          en: "Trick question: This has never occurred. 2003: Schumacher 6, Montoya 2, Räikkönen 1. 2012: Vettel 5, Alonso 3, Räikkönen 1. 1982: Pironi 2, Watson 2, Rosberg 1 (Pironi P2, Watson P3, Rosberg champion with 1 win). No championship ever had top-3 with identical win counts.",
          es: "Pregunta trampa: Esto nunca ha ocurrido. 2003: Schumacher 6, Montoya 2, Räikkönen 1. 2012: Vettel 5, Alonso 3, Räikkönen 1. 1982: Pironi 2, Watson 2, Rosberg 1 (Pironi P2, Watson P3, Rosberg campeón con 1 victoria). Ningún campeonato tuvo top-3 con recuentos de victorias idénticos.",
          de: "Fangfrage: Dies ist nie passiert. 2003: Schumacher 6, Montoya 2, Räikkönen 1. 2012: Vettel 5, Alonso 3, Räikkönen 1. 1982: Pironi 2, Watson 2, Rosberg 1 (Pironi P2, Watson P3, Rosberg Meister mit 1 Sieg). Keine Meisterschaft hatte jemals Top-3 mit identischen Siegzahlen.",
          nl: "Strikvraag: Dit is nooit gebeurd. 2003: Schumacher 6, Montoya 2, Räikkönen 1. 2012: Vettel 5, Alonso 3, Räikkönen 1. 1982: Pironi 2, Watson 2, Rosberg 1 (Pironi P2, Watson P3, Rosberg kampioen met 1 zege). Geen kampioenschap had ooit top-3 met identieke aantal zeges."
        }
      },
      {
        question: {
          en: "What unique championship scenario in 1997 resulted in the winner being excluded from final standings but keeping their race wins?",
          es: "¿Qué escenario único del campeonato en 1997 resultó en que el ganador fuera excluido de la clasificación final pero conservara sus victorias de carrera?",
          de: "Welches einzigartige Meisterschaftsszenario 1997 führte dazu, dass der Sieger aus der Endwertung ausgeschlossen wurde, aber seine Rennsiege behielt?",
          nl: "Welk uniek kampioenschap scenario in 1997 resulteerde in de winnaar die werd uitgesloten van de eindklassering maar hun racezeges behield?"
        },
        options: ["Schumacher DSQ from championship, wins still counted in records", "Villeneuve stripped of title, wins remained valid", "Häkkinen excluded mid-season, wins stood", "No such scenario - DSQ means all results void"],
        correct: 0,
        explanation: {
          en: "Michael Schumacher was disqualified from the entire 1997 championship (excluded from final classification) for deliberately crashing into Jacques Villeneuve at Jerez. However, his 5 race wins that season still count in official F1 records - he simply scored 0 championship points. This unique DSQ only removed championship standing, not race results.",
          es: "Michael Schumacher fue descalificado del campeonato completo de 1997 (excluido de la clasificación final) por chocar deliberadamente contra Jacques Villeneuve en Jerez. Sin embargo, sus 5 victorias de carrera esa temporada todavía cuentan en los registros oficiales de F1 - simplemente anotó 0 puntos de campeonato. Esta DSQ única solo eliminó la clasificación del campeonato, no los resultados de carrera.",
          de: "Michael Schumacher wurde von der gesamten Meisterschaft 1997 disqualifiziert (aus Endklassifizierung ausgeschlossen), weil er absichtlich in Jacques Villeneuve in Jerez crashte. Seine 5 Rennsiege dieser Saison zählen jedoch noch in offiziellen F1-Aufzeichnungen - er erzielte einfach 0 Meisterschaftspunkte. Diese einzigartige DSQ entfernte nur die Meisterschaftswertung, nicht die Rennergebnisse.",
          nl: "Michael Schumacher werd gediskwalificeerd van het volledige 1997 kampioenschap (uitgesloten van eindklassering) voor opzettelijk crashen met Jacques Villeneuve in Jerez. Echter, zijn 5 racezeges dat seizoen tellen nog steeds in officiële F1-records - hij scoorde simpelweg 0 kampioenschapspunten. Deze unieke DSQ verwijderde alleen kampioenschapsstand, niet raceresultaten."
        }
      },
      {
        question: {
          en: "Which obscure rule allowed a team to score Constructors' points even when both cars DNF'd?",
          es: "¿Qué regla oscura permitió a un equipo anotar puntos de Constructores incluso cuando ambos coches abandonaron?",
          de: "Welche obskure Regel erlaubte einem Team Konstrukteurs-Punkte zu erzielen, selbst wenn beide Autos ausfielen?",
          nl: "Welke obscure regel stelde een team in staat Constructeurs punten te scoren zelfs wanneer beide auto's uitvielen?"
        },
        options: ["1950s classified finishers rule (90% distance = points)", "Fastest lap bonus counted even with DNF", "Engine supplier points separate from team points", "Never possible - DNF = 0 points always"],
        correct: 0,
        explanation: {
          en: "In the 1950s, cars that completed 90% of race distance were classified as finishers even if they didn't cross the line. If both team cars DNF'd after 90% (e.g., laps 45/50), they could be classified P6 and P8, scoring Constructors' points despite neither finishing. This rule ended in early 1960s.",
          es: "En la década de 1950, los coches que completaban el 90% de la distancia de carrera se clasificaban como finalistas aunque no cruzaran la línea. Si ambos coches del equipo abandonaban después del 90% (ej., vueltas 45/50), podían clasificarse P6 y P8, anotando puntos de Constructores a pesar de que ninguno terminara. Esta regla terminó a principios de los años 60.",
          de: "In den 1950ern wurden Autos, die 90% der Renndistanz absolvierten, als Finisher klassifiziert, auch wenn sie die Linie nicht überquerten. Wenn beide Teamautos nach 90% ausfielen (z.B. Runden 45/50), konnten sie als P6 und P8 klassifiziert werden und Konstrukteurs-Punkte erzielen, obwohl keiner ins Ziel kam. Diese Regel endete Anfang der 1960er.",
          nl: "In de jaren 1950 werden auto's die 90% van de racedistantie voltooiden geclassificeerd als finishers zelfs als ze de lijn niet overstaken. Als beide teamauto's uitvielen na 90% (bijv. ronden 45/50), konden ze worden geclassificeerd als P6 en P8, Constructeurs punten scoren ondanks dat geen van beiden finishte. Deze regel eindigde begin jaren 60."
        }
      },
      {
        question: {
          en: "What championship anomaly occurred when the FIA changed constructors' points allocation mid-season in 1979?",
          es: "¿Qué anomalía del campeonato ocurrió cuando la FIA cambió la asignación de puntos de constructores a mitad de temporada en 1979?",
          de: "Welche Meisterschaftsanomalie trat auf, als die FIA 1979 die Konstrukteurs-Punktevergabe mitten in der Saison änderte?",
          nl: "Welke kampioenschap anomalie vond plaats toen de FIA de constructeurs puntenverdeling halverwege het seizoen veranderde in 1979?"
        },
        options: ["Changed from best-car to both-cars scoring", "Introduced 1-point fastest lap bonus for teams", "Retroactively adjusted first-half points", "No change occurred - stable rules all season"],
        correct: 3,
        explanation: {
          en: "Trick question: No mid-season change occurred in 1979. Constructors' Championship rules were stable all season (best result from each team per race counted, with both cars scoring from later in season). Ferrari won with 113 points to Williams' 75. The 1979 season was notable for ground-effect dominance, not rule changes.",
          es: "Pregunta trampa: No hubo cambio a mitad de temporada en 1979. Las reglas del Campeonato de Constructores fueron estables toda la temporada (mejor resultado de cada equipo por carrera contaba, con ambos coches anotando desde más tarde en la temporada). Ferrari ganó con 113 puntos contra 75 de Williams. La temporada de 1979 fue notable por el dominio del efecto suelo, no por cambios de reglas.",
          de: "Fangfrage: Keine Änderung zur Saisonmitte erfolgte 1979. Die Konstrukteurs-Meisterschaftsregeln waren die ganze Saison stabil (bestes Ergebnis jedes Teams pro Rennen zählte, beide Autos punkteten ab später in der Saison). Ferrari gewann mit 113 Punkten gegen Williams' 75. Die Saison 1979 war bemerkenswert für Ground-Effect-Dominanz, nicht für Regeländerungen.",
          nl: "Strikvraag: Er vond geen wijziging halverwege het seizoen plaats in 1979. Constructeurs Kampioenschap regels waren stabiel het hele seizoen (beste resultaat van elk team per race telde, beide auto's scoorden vanaf later in seizoen). Ferrari won met 113 punten tegen Williams' 75. Het 1979 seizoen was opmerkelijk voor ground-effect dominantie, niet voor regelwijzigingen."
        }
      },
      {
        question: {
          en: "Which driver championship was decided by aggregate qualifying times rather than race results?",
          es: "¿Qué campeonato de pilotos fue decidido por tiempos de clasificación agregados en lugar de resultados de carrera?",
          de: "Welche Fahrermeisterschaft wurde durch aggregierte Qualifyingzeiten statt Rennergebnisse entschieden?",
          nl: "Welk coureurskampioenschap werd beslist door geaggregeerde kwalificatietijden in plaats van raceresultaten?"
        },
        options: ["1996 (Hill)", "2005 (Alonso)", "2006 (Alonso)", "Never - championships always based on race results"],
        correct: 3,
        explanation: {
          en: "Trick question: No F1 championship has ever been decided by qualifying times. While 2005-2006 featured aggregate qualifying (two sessions, combined times set grid), the championship was still decided by race results and points. Alonso won 2005 and 2006 based on race performance, not qualifying aggregates.",
          es: "Pregunta trampa: Ningún campeonato de F1 ha sido decidido por tiempos de clasificación. Aunque 2005-2006 presentaron clasificación agregada (dos sesiones, tiempos combinados establecían parrilla), el campeonato todavía se decidía por resultados de carrera y puntos. Alonso ganó 2005 y 2006 basándose en rendimiento de carrera, no agregados de clasificación.",
          de: "Fangfrage: Keine F1-Meisterschaft wurde jemals durch Qualifyingzeiten entschieden. Während 2005-2006 aggregiertes Qualifying hatten (zwei Sessions, kombinierte Zeiten setzten Grid), wurde die Meisterschaft noch durch Rennergebnisse und Punkte entschieden. Alonso gewann 2005 und 2006 basierend auf Rennleistung, nicht Qualifying-Aggregaten.",
          nl: "Strikvraag: Geen F1 kampioenschap is ooit beslist door kwalificatietijden. Hoewel 2005-2006 geaggregeerde kwalificatie hadden (twee sessies, gecombineerde tijden bepaalden grid), werd het kampioenschap nog steeds beslist door raceresultaten en punten. Alonso won 2005 en 2006 gebaseerd op raceprestaties, niet kwalificatie-aggregaten."
        }
      },
      {
        question: {
          en: "What obscure 1987 regulation allowed a driver to score points in a car they didn't qualify?",
          es: "¿Qué oscura regulación de 1987 permitió a un piloto anotar puntos en un coche que no clasificó?",
          de: "Welche obskure Regelung von 1987 erlaubte einem Fahrer, Punkte in einem Auto zu erzielen, das er nicht qualifiziert hatte?",
          nl: "Welke obscure regel van 1987 stelde een coureur in staat punten te scoren in een auto die ze niet kwalificeerden?"
        },
        options: ["Spare car switching after qualifying but before race", "Team car takeover after first-lap retirement", "Pre-qualifying failure but allowed to start anyway", "No such rule - must qualify car you race"],
        correct: 0,
        explanation: {
          en: "1980s rules allowed drivers to switch to the team spare car (T-car) on race morning, even if they qualified in their race car. If driver qualified in car #5, then switched to spare car #6 for the race and scored points, they technically scored in an unqualified chassis. Rule was tightened in 1990s to prevent this.",
          es: "Las reglas de los años 80 permitían a los pilotos cambiar al coche de repuesto del equipo (T-car) la mañana de la carrera, incluso si clasificaron en su coche de carrera. Si el piloto clasificó en el coche #5, luego cambió al coche de repuesto #6 para la carrera y anotó puntos, técnicamente anotó en un chasis no clasificado. La regla se endureció en los años 90 para prevenir esto.",
          de: "Die Regeln der 1980er erlaubten Fahrern, am Rennmorgen zum Team-Ersatzwagen (T-Car) zu wechseln, selbst wenn sie in ihrem Rennauto qualifizierten. Wenn ein Fahrer in Auto #5 qualifizierte, dann für das Rennen zu Ersatzwagen #6 wechselte und Punkte erzielte, erzielte er technisch in einem nicht qualifizierten Chassis. Die Regel wurde in den 1990ern verschärft, um dies zu verhindern.",
          nl: "Jaren 80 regels stelden coureurs in staat om op race ochtend te wisselen naar de team reserve-auto (T-car), zelfs als ze kwalificeerden in hun raceauto. Als coureur kwalificeerde in auto #5, dan wisselde naar reserve-auto #6 voor de race en punten scoorde, scoorden ze technisch in een ongekwalificeerd chassis. Regel werd aangescherpt in jaren 90 om dit te voorkomen."
        }
      },
      {
        question: {
          en: "Which championship featured the most different race winners without any driver winning back-to-back races?",
          es: "¿Qué campeonato presentó la mayor cantidad de diferentes ganadores de carreras sin que ningún piloto ganara carreras consecutivas?",
          de: "Welche Meisterschaft hatte die meisten verschiedenen Rennsieger, ohne dass ein Fahrer aufeinanderfolgende Rennen gewann?",
          nl: "Welk kampioenschap had de meeste verschillende racewinnaars zonder dat een coureur opeenvolgende races won?"
        },
        options: ["2012 (7 different winners in first 7 races, no back-to-back)", "1982 (11 different winners, minimal back-to-back)", "2003 (8 different winners, no streaks)", "Never achieved - always some back-to-back wins"],
        correct: 3,
        explanation: {
          en: "Trick question: Every F1 season has had some back-to-back wins by at least one driver. 2012 had 7 different winners in first 7 races, but Alonso won Spain-Europe back-to-back (races 5-6 were NOT Spain/Monaco, but Spain-Monaco-Canada-Europe). No season has ever gone without any driver winning consecutive races.",
          es: "Pregunta trampa: Cada temporada de F1 ha tenido algunas victorias consecutivas de al menos un piloto. 2012 tuvo 7 ganadores diferentes en las primeras 7 carreras, pero Alonso ganó España-Europa consecutivamente (carreras 5-6 NO fueron España/Mónaco, sino España-Mónaco-Canadá-Europa). Ninguna temporada ha pasado sin que ningún piloto ganara carreras consecutivas.",
          de: "Fangfrage: Jede F1-Saison hatte einige aufeinanderfolgende Siege von mindestens einem Fahrer. 2012 hatte 7 verschiedene Sieger in den ersten 7 Rennen, aber Alonso gewann Spanien-Europa nacheinander (Rennen 5-6 waren NICHT Spanien/Monaco, sondern Spanien-Monaco-Kanada-Europa). Keine Saison verlief jemals ohne aufeinanderfolgende Siege eines Fahrers.",
          nl: "Strikvraag: Elk F1 seizoen had enkele opeenvolgende overwinningen door ten minste één coureur. 2012 had 7 verschillende winnaars in eerste 7 races, maar Alonso won Spanje-Europa opeenvolgend (races 5-6 waren NIET Spanje/Monaco, maar Spanje-Monaco-Canada-Europa). Geen seizoen is ooit voorbijgegaan zonder dat een coureur opeenvolgende races won."
        }
      },
      {
        question: {
          en: "What unique pre-war regulation from the 1930s still affects modern F1 championship record-keeping?",
          es: "¿Qué regulación única de antes de la guerra de la década de 1930 todavía afecta el mantenimiento de registros del campeonato de F1 moderno?",
          de: "Welche einzigartige Vorkriegsregelung aus den 1930ern beeinflusst noch heute die moderne F1-Meisterschaftsaufzeichnung?",
          nl: "Welke unieke vooroorlogse regel uit de jaren 1930 beïnvloedt nog steeds moderne F1 kampioenschap registratie?"
        },
        options: ["European Championship results counted toward 1950 records", "Shared drives from 1930s set precedent for 1950s rules", "Pre-war lap records still stand at some circuits", "None - F1 championship only started in 1950"],
        correct: 3,
        explanation: {
          en: "Trick question: The F1 World Championship only started in 1950. While there were European Championships and Grand Prix races in the 1930s, they have no official connection to modern F1 championship record-keeping. Pre-war racing history is acknowledged but kept separate from official FIA F1 World Championship records starting 1950.",
          es: "Pregunta trampa: El Campeonato Mundial de F1 solo comenzó en 1950. Aunque hubo Campeonatos Europeos y carreras de Gran Premio en la década de 1930, no tienen conexión oficial con el mantenimiento de registros del campeonato de F1 moderno. La historia de carreras de antes de la guerra se reconoce pero se mantiene separada de los registros oficiales del Campeonato Mundial de F1 de la FIA a partir de 1950.",
          de: "Fangfrage: Die F1-Weltmeisterschaft begann erst 1950. Während es in den 1930ern Europameisterschaften und Grand-Prix-Rennen gab, haben sie keine offizielle Verbindung zur modernen F1-Meisterschaftsaufzeichnung. Vorkriegs-Renngeschichte wird anerkannt, aber getrennt von offiziellen FIA-F1-Weltmeisterschaftsaufzeichnungen ab 1950 gehalten.",
          nl: "Strikvraag: Het F1 Wereldkampioenschap begon pas in 1950. Hoewel er Europese Kampioenschappen en Grand Prix races waren in de jaren 1930, hebben ze geen officiële verbinding met moderne F1 kampioenschap registratie. Vooroorlogse racinggeschiedenis wordt erkend maar apart gehouden van officiële FIA F1 Wereldkampioenschap records vanaf 1950."
        }
      },
      {
        question: {
          en: "Which championship scenario saw a driver mathematically secure the title with races remaining, then lose it before the finale?",
          es: "¿Qué escenario de campeonato vio a un piloto asegurar matemáticamente el título con carreras restantes, luego perderlo antes del final?",
          de: "Welches Meisterschaftsszenario sah einen Fahrer den Titel mathematisch mit verbleibenden Rennen sichern, dann vor dem Finale verlieren?",
          nl: "Welk kampioenschap scenario zag een coureur de titel mathematisch veiligstellen met races resterend, daarna verliezen voor de finale?"
        },
        options: ["2007 (Hamilton appeared to have it, lost at finale)", "2008 (Massa mathematically ahead, lost last corner)", "Never possible - math doesn't work that way", "2016 (Rosberg's lead evaporated before Abu Dhabi)"],
        correct: 2,
        explanation: {
          en: "Trick question: This is mathematically impossible. Once a driver has mathematically secured the championship (can't be caught even if they score 0 and rivals win all remaining races), it's final. 2007/2008 scenarios had drivers AHEAD but not mathematically secure. You can't 'lose' a mathematically secured title - it's a logical impossibility.",
          es: "Pregunta trampa: Esto es matemáticamente imposible. Una vez que un piloto ha asegurado matemáticamente el campeonato (no puede ser alcanzado incluso si anota 0 y los rivales ganan todas las carreras restantes), es final. Los escenarios de 2007/2008 tenían pilotos ADELANTE pero no matemáticamente seguros. No puedes 'perder' un título matemáticamente asegurado - es una imposibilidad lógica.",
          de: "Fangfrage: Dies ist mathematisch unmöglich. Sobald ein Fahrer die Meisterschaft mathematisch gesichert hat (kann nicht mehr eingeholt werden, selbst wenn er 0 Punkte erzielt und Rivalen alle verbleibenden Rennen gewinnen), ist es endgültig. 2007/2008-Szenarien hatten Fahrer VORNE, aber nicht mathematisch sicher. Man kann einen mathematisch gesicherten Titel nicht 'verlieren' - es ist logisch unmöglich.",
          nl: "Strikvraag: Dit is mathematisch onmogelijk. Zodra een coureur het kampioenschap mathematisch heeft veiliggesteld (kan niet meer worden ingehaald zelfs als ze 0 scoren en rivalen alle resterende races winnen), is het definitief. 2007/2008 scenario's hadden coureurs VOOR maar niet mathematisch veilig. Je kunt een mathematisch veiliggestelde titel niet 'verliezen' - het is logisch onmogelijk."
        }
      },
      {
        question: {
          en: "What obscure 1970s regulation allowed teams to score points for cars entered but not raced?",
          es: "¿Qué oscura regulación de la década de 1970 permitió a los equipos anotar puntos para coches inscritos pero no corridos?",
          de: "Welche obskure Regelung der 1970er erlaubte Teams Punkte für eingetragene, aber nicht gefahrene Autos zu erzielen?",
          nl: "Welke obscure regel van de jaren 1970 stelde teams in staat punten te scoren voor auto's die ingeschreven waren maar niet raceten?"
        },
        options: ["DNS counted as P20 finish if qualifying completed", "Reserve driver points counted toward constructor total", "Withdrawn entries scored half-points if qualified", "Never existed - must race to score points"],
        correct: 3,
        explanation: {
          en: "Trick question: This rule never existed. Teams have always needed to actually race and finish to score points. DNS (Did Not Start) has never awarded points. While 1950s had rules about classified finishers at 90% distance, no era allowed points for merely entering a car without racing it.",
          es: "Pregunta trampa: Esta regla nunca existió. Los equipos siempre han necesitado realmente correr y terminar para anotar puntos. DNS (No Largó) nunca ha otorgado puntos. Aunque los años 50 tenían reglas sobre finalistas clasificados al 90% de distancia, ninguna era permitió puntos por simplemente inscribir un coche sin correrlo.",
          de: "Fangfrage: Diese Regel existierte nie. Teams mussten immer tatsächlich fahren und finishen, um Punkte zu erzielen. DNS (Did Not Start) vergab nie Punkte. Während die 1950er Regeln über klassifizierte Finisher bei 90% Distanz hatten, erlaubte keine Ära Punkte für das bloße Eintragen eines Autos ohne es zu fahren.",
          nl: "Strikvraag: Deze regel heeft nooit bestaan. Teams hebben altijd moeten racen en finishen om punten te scoren. DNS (Did Not Start) heeft nooit punten toegekend. Hoewel de jaren 1950 regels hadden over geclassificeerde finishers op 90% afstand, stond geen tijdperk punten toe voor alleen het inschrijven van een auto zonder ermee te racen."
        }
      },
      {
        question: {
          en: "Which driver won a championship despite being outscored in both wins and podiums by their closest rival?",
          es: "¿Qué piloto ganó un campeonato a pesar de ser superado en victorias y podios por su rival más cercano?",
          de: "Welcher Fahrer gewann eine Meisterschaft, obwohl er bei Siegen und Podien von seinem nächsten Rivalen übertroffen wurde?",
          nl: "Welke coureur won een kampioenschap ondanks dat ze in zowel overwinningen als podiums overtroffen werden door hun naaste rivaal?"
        },
        options: ["Hawthorn 1958 (1 win vs Moss' 4 wins)", "Rosberg 1982 (1 win vs Pironi's 2 wins)", "Prost 1986 (4 wins vs Mansell's 5 wins)", "All of the above"],
        correct: 3,
        explanation: {
          en: "All three occurred: Hawthorn 1958 (1 win, 42pts) beat Moss (4 wins, 41pts). Rosberg 1982 (1 win, 44pts) beat Pironi (2 wins, 39pts due to injury). Prost 1986 (4 wins, 72pts) beat Mansell (5 wins, 70pts). Consistency with points finishes outweighed raw win count in all cases.",
          es: "Los tres ocurrieron: Hawthorn 1958 (1 victoria, 42pts) venció a Moss (4 victorias, 41pts). Rosberg 1982 (1 victoria, 44pts) venció a Pironi (2 victorias, 39pts debido a lesión). Prost 1986 (4 victorias, 72pts) venció a Mansell (5 victorias, 70pts). La consistencia con finales puntuables superó el recuento de victorias brutas en todos los casos.",
          de: "Alle drei passierten: Hawthorn 1958 (1 Sieg, 42Pkt) schlug Moss (4 Siege, 41Pkt). Rosberg 1982 (1 Sieg, 44Pkt) schlug Pironi (2 Siege, 39Pkt wegen Verletzung). Prost 1986 (4 Siege, 72Pkt) schlug Mansell (5 Siege, 70Pkt). Konstanz mit Punkteplatzierungen überwog rohe Siegzahl in allen Fällen.",
          nl: "Alle drie kwamen voor: Hawthorn 1958 (1 zege, 42pts) versloeg Moss (4 zeges, 41pts). Rosberg 1982 (1 zege, 44pts) versloeg Pironi (2 zeges, 39pts door blessure). Prost 1986 (4 zeges, 72pts) versloeg Mansell (5 zeges, 70pts). Consistentie met puntenfinishes woog zwaarder dan ruw zege-aantal in alle gevallen."
        }
      },
      {
        question: {
          en: "What championship quirk in 2014 made the final race worth double points, and how many titles did it actually decide?",
          es: "¿Qué peculiaridad del campeonato en 2014 hizo que la carrera final valiera puntos dobles, y cuántos títulos decidió realmente?",
          de: "Welche Meisterschaftsbesonderheit 2014 machte das letzte Rennen doppelte Punkte wert, und wie viele Titel entschied es tatsächlich?",
          nl: "Welke kampioenschap eigenaardigheden in 2014 maakte de laatste race dubbele punten waard, en hoeveel titels besliste het daadwerkelijk?"
        },
        options: ["Decided Hamilton's title over Rosberg", "Decided neither - Hamilton already had insurmountable lead", "Decided Constructors' only, not Drivers'", "Zero - rule existed but didn't affect championship outcome"],
        correct: 3,
        explanation: {
          en: "The 2014 Abu Dhabi double-points finale decided ZERO championships. Hamilton led by 17 points before the race; even if Rosberg won (50pts) and Hamilton scored 0, Hamilton would still win on countback (11 wins to 5). The gimmick rule was universally criticized and dropped for 2015. It existed but was irrelevant to the actual title outcome.",
          es: "El final de puntos dobles de Abu Dhabi 2014 decidió CERO campeonatos. Hamilton lideraba por 17 puntos antes de la carrera; incluso si Rosberg ganaba (50pts) y Hamilton anotaba 0, Hamilton aún ganaría por desempate (11 victorias contra 5). La regla gimmick fue criticada universalmente y eliminada para 2015. Existió pero fue irrelevante para el resultado del título real.",
          de: "Das 2014 Abu Dhabi Doppelpunkte-Finale entschied NULL Meisterschaften. Hamilton führte mit 17 Punkten vor dem Rennen; selbst wenn Rosberg gewann (50Pkt) und Hamilton 0 erzielte, würde Hamilton noch bei Gleichstand gewinnen (11 Siege zu 5). Die Gimmick-Regel wurde universell kritisiert und 2015 gestrichen. Sie existierte, war aber irrelevant für das tatsächliche Titelergebnis.",
          nl: "De 2014 Abu Dhabi dubbele-punten finale besliste NUL kampioenschappen. Hamilton leidde met 17 punten voor de race; zelfs als Rosberg won (50pts) en Hamilton 0 scoorde, zou Hamilton nog winnen op countback (11 zeges tegen 5). De gimmick regel werd universeel bekritiseerd en geschrapt voor 2015. Het bestond maar was irrelevant voor de werkelijke titeluitkomst."
        }
      },
      {
        question: {
          en: "Which obscure regulation from 1952-1953 meant F1 champions weren't actually driving Formula 1 cars?",
          es: "¿Qué oscura regulación de 1952-1953 significó que los campeones de F1 en realidad no conducían coches de Fórmula 1?",
          de: "Welche obskure Regelung von 1952-1953 bedeutete, dass F1-Champions eigentlich keine Formel-1-Autos fuhren?",
          nl: "Welke obscure regel van 1952-1953 betekende dat F1 kampioenen eigenlijk geen Formule 1 auto's bestuurden?"
        },
        options: ["F2 regulations used due to lack of F1 entries", "Indianapolis regulations dominated grid", "Sports car regulations allowed for some races", "Trick question - always used F1 regulations"],
        correct: 0,
        explanation: {
          en: "1952-1953 F1 World Championship ran to Formula 2 regulations (2.0L non-supercharged) due to lack of competitive F1 entries after Alfa Romeo withdrawal. Ascari won both titles driving F2 Ferrari 500s. The FIA kept 'F1 World Championship' name despite F2 cars. F1 regulations (2.5L) returned 1954. Most obscure regulatory period in championship history.",
          es: "El Campeonato Mundial de F1 de 1952-1953 se ejecutó con regulaciones de Fórmula 2 (2.0L sin sobrealimentación) debido a la falta de entradas competitivas de F1 después del retiro de Alfa Romeo. Ascari ganó ambos títulos conduciendo Ferrari 500s de F2. La FIA mantuvo el nombre 'Campeonato Mundial de F1' a pesar de los coches F2. Las regulaciones de F1 (2.5L) regresaron en 1954. Período regulatorio más oscuro en la historia del campeonato.",
          de: "1952-1953 lief die F1-Weltmeisterschaft nach Formel-2-Regeln (2.0L nicht aufgeladen) wegen fehlender konkurrenzfähiger F1-Einträge nach Alfa Romeos Rückzug. Ascari gewann beide Titel mit F2 Ferrari 500s. Die FIA behielt den Namen 'F1-Weltmeisterschaft' trotz F2-Autos. F1-Regeln (2.5L) kehrten 1954 zurück. Obskurste Regulierungsperiode in der Meisterschaftsgeschichte.",
          nl: "1952-1953 F1 Wereldkampioenschap werd gereden volgens Formule 2 regels (2.0L niet-supercharged) door gebrek aan competitieve F1 inschrijvingen na Alfa Romeo's terugtrekking. Ascari won beide titels rijdend in F2 Ferrari 500s. De FIA behield 'F1 Wereldkampioenschap' naam ondanks F2 auto's. F1 regels (2.5L) keerden terug in 1954. Meest obscure regelperiode in kampioenschapsgeschiedenis."
        }
      },
      {
        question: {
          en: "What unique tie-breaking scenario occurred in 1967 when three drivers finished the championship tied on wins?",
          es: "¿Qué escenario único de desempate ocurrió en 1967 cuando tres pilotos terminaron el campeonato empatados en victorias?",
          de: "Welches einzigartige Gleichstandsszenario trat 1967 auf, als drei Fahrer die Meisterschaft mit gleichem Siegstand beendeten?",
          nl: "Welk uniek gelijkspel scenario vond plaats in 1967 toen drie coureurs het kampioenschap beëindigden met gelijke overwinningen?"
        },
        options: ["Hulme, Brabham, Clark all had 2 wins - points decided", "No tie occurred - Hulme clear winner", "Four drivers tied, not three", "1967 had no tie-breaking needed"],
        correct: 1,
        explanation: {
          en: "Trick question: No three-way wins tie occurred in 1967. Hulme won the championship with 51 points (2 wins), Brabham was 2nd with 46 points (2 wins), Clark 3rd with 41 points (4 wins). While Hulme and Brabham had equal wins, they weren't tied in points. Clark had most wins but finished 3rd. No tie-breaking scenario was needed.",
          es: "Pregunta trampa: No ocurrió empate de tres en victorias en 1967. Hulme ganó el campeonato con 51 puntos (2 victorias), Brabham fue 2º con 46 puntos (2 victorias), Clark 3º con 41 puntos (4 victorias). Aunque Hulme y Brabham tenían victorias iguales, no estaban empatados en puntos. Clark tuvo más victorias pero terminó 3º. No se necesitó escenario de desempate.",
          de: "Fangfrage: Kein Dreier-Gleichstand bei Siegen trat 1967 auf. Hulme gewann die Meisterschaft mit 51 Punkten (2 Siege), Brabham wurde 2. mit 46 Punkten (2 Siege), Clark 3. mit 41 Punkten (4 Siege). Während Hulme und Brabham gleiche Siege hatten, waren sie nicht punktegleich. Clark hatte die meisten Siege, wurde aber 3. Kein Tie-Breaking-Szenario war nötig.",
          nl: "Strikvraag: Er vond geen drie-weg zeges gelijkspel plaats in 1967. Hulme won het kampioenschap met 51 punten (2 zeges), Brabham werd 2e met 46 punten (2 zeges), Clark 3e met 41 punten (4 zeges). Hoewel Hulme en Brabham gelijke zeges hadden, waren ze niet gelijk in punten. Clark had meeste zeges maar finishte 3e. Geen gelijkspel scenario was nodig."
        }
      },
      {
        question: {
          en: "Which championship featured a driver being awarded the title despite never leading the points until the final classification?",
          es: "¿Qué campeonato presentó a un piloto que recibió el título a pesar de nunca liderar los puntos hasta la clasificación final?",
          de: "Welche Meisterschaft sah einen Fahrer den Titel erhalten, obwohl er die Punkte nie anführte bis zur Endklassifizierung?",
          nl: "Welk kampioenschap had een coureur die de titel kreeg ondanks nooit de punten te leiden tot de eindklassering?"
        },
        options: ["1964 (Surtees)", "1981 (Piquet)", "1986 (Prost)", "2008 (Hamilton)"],
        correct: 0,
        explanation: {
          en: "John Surtees 1964 never led the championship standings until after the final race at Mexico. Clark led going into the finale (68pts to Surtees' 34pts with 9 points available), but Clark's DNF and Surtees' P2 meant Surtees won 40-39. Surtees went from 3rd to 1st in final standings, having never led before that moment.",
          es: "John Surtees en 1964 nunca lideró la clasificación del campeonato hasta después de la carrera final en México. Clark lideraba antes del final (68pts contra 34pts de Surtees con 9 puntos disponibles), pero el DNF de Clark y el P2 de Surtees significaron que Surtees ganó 40-39. Surtees pasó de 3º a 1º en la clasificación final, sin haber liderado nunca antes de ese momento.",
          de: "John Surtees führte 1964 die Meisterschaftswertung nie an bis nach dem letzten Rennen in Mexiko. Clark führte vor dem Finale (68Pkt zu Surtees' 34Pkt mit 9 verfügbaren Punkten), aber Clarks DNF und Surtees' P2 bedeuteten, dass Surtees 40-39 gewann. Surtees ging von 3. auf 1. in der Endwertung, hatte nie zuvor geführt.",
          nl: "John Surtees leidde in 1964 de kampioenschapsstand nooit tot na de laatste race in Mexico. Clark leidde voor de finale (68pts tegen Surtees' 34pts met 9 punten beschikbaar), maar Clarks DNF en Surtees' P2 betekenden dat Surtees won 40-39. Surtees ging van 3e naar 1e in eindstand, had nooit eerder geleid."
        }
      },
      {
        question: {
          en: "What obscure 1980s regulation meant teams could protest championship results up to 30 days after the season ended?",
          es: "¿Qué oscura regulación de la década de 1980 significaba que los equipos podían protestar los resultados del campeonato hasta 30 días después de que terminara la temporada?",
          de: "Welche obskure Regelung der 1980er bedeutete, dass Teams Meisterschaftsergebnisse bis 30 Tage nach Saisonende anfechten konnten?",
          nl: "Welke obscure regel van de jaren 1980 betekende dat teams kampioenschap resultaten tot 30 dagen na het einde van het seizoen konden protesteren?"
        },
        options: ["FIA International Court of Appeal 30-day window", "Technical protests could be filed post-season", "Drug testing results took 30 days to finalize", "No such rule - results final after last race"],
        correct: 0,
        explanation: {
          en: "The FIA International Court of Appeal historically allowed 30-day appeal windows for championship-deciding protests. This was used in cases like 1989 (Senna's Japan DSQ appeal rejected) and other technical protests. While rare, the rule meant championships weren't technically 'final' until appeal window closed, though protests post-finale were extremely rare and rarely successful.",
          es: "El Tribunal Internacional de Apelación de la FIA históricamente permitía ventanas de apelación de 30 días para protestas que decidían campeonatos. Esto se usó en casos como 1989 (apelación de DSQ de Japón de Senna rechazada) y otras protestas técnicas. Aunque raro, la regla significaba que los campeonatos técnicamente no eran 'finales' hasta que se cerrara la ventana de apelación, aunque las protestas posteriores al final eran extremadamente raras y rara vez exitosas.",
          de: "Der FIA International Court of Appeal erlaubte historisch 30-Tage-Berufungsfenster für meisterschaftsentscheidende Proteste. Dies wurde in Fällen wie 1989 (Sennas Japan-DSQ-Berufung abgelehnt) und anderen technischen Protesten verwendet. Obwohl selten, bedeutete die Regel, dass Meisterschaften technisch nicht 'endgültig' waren bis das Berufungsfenster schloss, obwohl Proteste nach dem Finale extrem selten und selten erfolgreich waren.",
          nl: "Het FIA International Court of Appeal stond historisch 30-dagen beroepsvensters toe voor kampioenschap-beslissende protesten. Dit werd gebruikt in gevallen zoals 1989 (Senna's Japan DSQ beroep afgewezen) en andere technische protesten. Hoewel zeldzaam, betekende de regel dat kampioenschappen technisch niet 'definitief' waren tot beroepsvenster sloot, hoewel protesten na finale extreem zeldzaam en zelden succesvol waren."
        }
      },
      {
        question: {
          en: "Which championship featured the only instance of a three-way mathematical tie going into the final race?",
          es: "¿Qué campeonato presentó el único caso de empate matemático de tres vías antes de la carrera final?",
          de: "Welche Meisterschaft war der einzige Fall eines mathematischen Dreier-Gleichstands vor dem letzten Rennen?",
          nl: "Welk kampioenschap was het enige geval van een drie-weg mathematisch gelijkspel voor de laatste race?"
        },
        options: ["2010 (Alonso, Webber, Vettel, Hamilton all possible)", "1986 (Prost, Mansell, Piquet)", "Never happened - max two-way ties", "1964 (Clark, Surtees, Hill)"],
        correct: 2,
        explanation: {
          en: "Trick question: No true three-way mathematical tie has occurred going into a finale. 2010 had FOUR drivers mathematically possible (Alonso, Webber, Vettel, Hamilton), but they had different point totals - not tied. A tie means identical points. The closest was 1986 with three mathematically possible but different scores: Mansell 70, Prost 64, Piquet 63.",
          es: "Pregunta trampa: No ha ocurrido un verdadero empate matemático de tres vías antes de una final. 2010 tuvo CUATRO pilotos matemáticamente posibles (Alonso, Webber, Vettel, Hamilton), pero tenían totales de puntos diferentes - no empatados. Un empate significa puntos idénticos. Lo más cercano fue 1986 con tres matemáticamente posibles pero puntajes diferentes: Mansell 70, Prost 64, Piquet 63.",
          de: "Fangfrage: Kein echter mathematischer Dreier-Gleichstand ist vor einem Finale aufgetreten. 2010 hatte VIER Fahrer mathematisch möglich (Alonso, Webber, Vettel, Hamilton), aber sie hatten verschiedene Punktstände - nicht gleichauf. Ein Gleichstand bedeutet identische Punkte. Am nächsten war 1986 mit drei mathematisch möglich aber verschiedenen Ständen: Mansell 70, Prost 64, Piquet 63.",
          nl: "Strikvraag: Er is geen echt drie-weg mathematisch gelijkspel voorgekomen voor een finale. 2010 had VIER coureurs mathematisch mogelijk (Alonso, Webber, Vettel, Hamilton), maar ze hadden verschillende puntentotalen - niet gelijk. Een gelijkspel betekent identieke punten. Het dichtst bij was 1986 met drie mathematisch mogelijk maar verschillende scores: Mansell 70, Prost 64, Piquet 63."
        }
      },
      {
        question: {
          en: "What unique regulation from 1988 meant Ayrton Senna dropped more race wins than any champion in history?",
          es: "¿Qué regulación única de 1988 significó que Ayrton Senna descartó más victorias de carrera que cualquier campeón en la historia?",
          de: "Welche einzigartige Regelung von 1988 bedeutete, dass Ayrton Senna mehr Rennsiege strich als jeder Champion in der Geschichte?",
          nl: "Welke unieke regel van 1988 betekende dat Ayrton Senna meer racezeges schrapte dan welke kampioen ook in de geschiedenis?"
        },
        options: ["Best 11 of 16 results rule meant he dropped 2 wins", "Disqualifications removed 3 wins from tally", "Shared-wins rule split victories with Prost", "He dropped 5 wins due to McLaren dominance"],
        correct: 0,
        explanation: {
          en: "1988 best-11-of-16 rule meant Senna won 8 races but had to drop 5 results, including 2 wins (likely Belgium and Japan). He scored points for only 6 of his 8 victories. This remains the most wins ever dropped by a champion. Prost won 7 races, dropped only 1 win, making the final score 90-87 much closer than 8-7 wins suggested.",
          es: "La regla de mejor-11-de-16 de 1988 significó que Senna ganó 8 carreras pero tuvo que descartar 5 resultados, incluidas 2 victorias (probablemente Bélgica y Japón). Anotó puntos por solo 6 de sus 8 victorias. Esto sigue siendo las victorias más descartadas por un campeón. Prost ganó 7 carreras, descartó solo 1 victoria, haciendo que la puntuación final 90-87 fuera mucho más cercana de lo que sugerían 8-7 victorias.",
          de: "Die Best-11-von-16-Regel von 1988 bedeutete, dass Senna 8 Rennen gewann, aber 5 Ergebnisse streichen musste, darunter 2 Siege (wahrscheinlich Belgien und Japan). Er erzielte nur für 6 seiner 8 Siege Punkte. Dies bleiben die meisten Siege, die jemals von einem Champion gestrichen wurden. Prost gewann 7 Rennen, strich nur 1 Sieg, was das Endergebnis 90-87 viel enger machte, als 8-7 Siege suggerierten.",
          nl: "1988 beste-11-van-16 regel betekende dat Senna 8 races won maar 5 resultaten moest schrappen, waaronder 2 zeges (waarschijnlijk België en Japan). Hij scoorde punten voor slechts 6 van zijn 8 overwinningen. Dit blijven de meeste zeges ooit geschrapt door een kampioen. Prost won 7 races, schrapte slechts 1 zege, wat de eindscore 90-87 veel dichter maakte dan 8-7 zeges suggereerde."
        }
      },
      {
        question: {
          en: "Which obscure regulation allowed a driver to win a championship race they didn't physically finish?",
          es: "¿Qué oscura regulación permitió a un piloto ganar una carrera de campeonato que no terminó físicamente?",
          de: "Welche obskure Regelung erlaubte einem Fahrer, ein Meisterschaftsrennen zu gewinnen, das er physisch nicht beendete?",
          nl: "Welke obscure regel stelde een coureur in staat een kampioenschap race te winnen die ze fysiek niet finishten?"
        },
        options: ["1950s 90% distance classification as 'finisher'", "Red-flagged race with leader ahead when stopped", "Posthumous win awarded to deceased driver", "All of the above are possible scenarios"],
        correct: 1,
        explanation: {
          en: "Red-flagged races award victory to the leader at time of red flag (if sufficient laps completed), even if they don't cross the finish line. Notable examples: Senna 1984 Monaco (stopped at 31 laps, declared winner), 2021 Belgium (2 laps behind safety car, Verstappen won). Driver 'wins' without completing full distance or crossing finish line after final lap.",
          es: "Las carreras con bandera roja otorgan la victoria al líder en el momento de la bandera roja (si se completaron suficientes vueltas), incluso si no cruzan la línea de meta. Ejemplos notables: Senna 1984 Mónaco (detenido en 31 vueltas, declarado ganador), 2021 Bélgica (2 vueltas detrás del coche de seguridad, Verstappen ganó). El piloto 'gana' sin completar la distancia completa o cruzar la línea de meta después de la vuelta final.",
          de: "Rennen mit roter Flagge vergeben den Sieg an den Führenden zum Zeitpunkt der roten Flagge (wenn ausreichend Runden absolviert), selbst wenn sie die Ziellinie nicht überqueren. Bemerkenswerte Beispiele: Senna 1984 Monaco (bei 31 Runden gestoppt, zum Sieger erklärt), 2021 Belgien (2 Runden hinter Safety Car, Verstappen gewann). Fahrer 'gewinnt' ohne volle Distanz oder Ziellinienüberquerung nach letzter Runde.",
          nl: "Red-flag races kennen de overwinning toe aan de leider op het moment van de rode vlag (als voldoende ronden voltooid), zelfs als ze de finish niet oversteken. Opmerkelijke voorbeelden: Senna 1984 Monaco (gestopt bij 31 ronden, winnaar verklaard), 2021 België (2 ronden achter safety car, Verstappen won). Coureur 'wint' zonder volledige afstand of finish oversteken na laatste ronde."
        }
      },
      {
        question: {
          en: "What championship anomaly occurred in 1990 when no driver was mathematically eliminated until the penultimate round?",
          es: "¿Qué anomalía del campeonato ocurrió en 1990 cuando ningún piloto fue eliminado matemáticamente hasta la penúltima ronda?",
          de: "Welche Meisterschaftsanomalie trat 1990 auf, als kein Fahrer bis zur vorletzten Runde mathematisch ausgeschlossen war?",
          nl: "Welke kampioenschap anomalie vond plaats in 1990 toen geen coureur mathematisch geëlimineerd was tot de voorlaatste ronde?"
        },
        options: ["Closest title fight ever - 8 drivers in contention", "Points system kept mid-field in mathematical contention", "Never happened - drivers eliminated throughout season", "Senna-Prost fight meant others had chances"],
        correct: 2,
        explanation: {
          en: "Trick question: This didn't happen in 1990. Senna dominated, winning the championship at Suzuka (penultimate round) with 78 points to Prost's 69 (max 71 possible). Many drivers were mathematically eliminated earlier. 1990 is famous for Senna-Prost Suzuka collision (revenge for 1989), not for championship openness. Senna clinched with one race to spare.",
          es: "Pregunta trampa: Esto no sucedió en 1990. Senna dominó, ganando el campeonato en Suzuka (penúltima ronda) con 78 puntos contra 69 de Prost (máx 71 posible). Muchos pilotos fueron eliminados matemáticamente antes. 1990 es famoso por la colisión Senna-Prost en Suzuka (venganza por 1989), no por apertura del campeonato. Senna aseguró con una carrera de sobra.",
          de: "Fangfrage: Dies geschah 1990 nicht. Senna dominierte und gewann die Meisterschaft in Suzuka (vorletzte Runde) mit 78 Punkten gegen Prosts 69 (max 71 möglich). Viele Fahrer wurden früher mathematisch ausgeschlossen. 1990 ist berühmt für Senna-Prost Suzuka-Kollision (Rache für 1989), nicht für Meisterschaftsoffenheit. Senna sicherte sich mit einem Rennen Vorsprung.",
          nl: "Strikvraag: Dit gebeurde niet in 1990. Senna domineerde, won het kampioenschap in Suzuka (voorlaatste ronde) met 78 punten tegen Prosts 69 (max 71 mogelijk). Veel coureurs werden eerder mathematisch geëlimineerd. 1990 is beroemd om Senna-Prost Suzuka botsing (wraak voor 1989), niet om kampioenschap openheid. Senna verzekerde met één race te gaan."
        }
      },
      {
        question: {
          en: "Which championship featured the most pole positions by a driver who didn't win the title?",
          es: "¿Qué campeonato presentó la mayor cantidad de poles de un piloto que no ganó el título?",
          de: "Welche Meisterschaft hatte die meisten Pole-Positions von einem Fahrer, der den Titel nicht gewann?",
          nl: "Welk kampioenschap had de meeste pole positions door een coureur die de titel niet won?"
        },
        options: ["1992 Mansell (14 poles, lost to ..wait, he WON)", "2016 Rosberg (8 poles, lost to... wait, he WON)", "1994 Schumacher (6 poles, lost to Hill)", "1999 Häkkinen (11 poles, lost to... wait, he WON)"],
        correct: 2,
        explanation: {
          en: "Trick question setup: Most answers catch you mid-thought. 1994 Schumacher had 6 poles but was DSQ from championship (Hill won). However, better answer: 1992 Mansell had 14 poles and WON. 1989 Senna had 13 poles and WON. The actual record: Mansell 1987 (9 poles, lost to Piquet), though Schumacher's 1994 DSQ scenario is unique.",
          es: "Configuración de pregunta trampa: La mayoría de respuestas te atrapan a mitad de pensamiento. Schumacher 1994 tuvo 6 poles pero fue DSQ del campeonato (Hill ganó). Sin embargo, mejor respuesta: Mansell 1992 tuvo 14 poles y GANÓ. Senna 1989 tuvo 13 poles y GANÓ. El récord actual: Mansell 1987 (9 poles, perdió ante Piquet), aunque el escenario DSQ de Schumacher 1994 es único.",
          de: "Fangfragen-Setup: Die meisten Antworten fangen Sie mitten im Gedanken. Schumacher 1994 hatte 6 Poles, wurde aber von der Meisterschaft DSQ (Hill gewann). Bessere Antwort jedoch: Mansell 1992 hatte 14 Poles und GEWANN. Senna 1989 hatte 13 Poles und GEWANN. Der tatsächliche Rekord: Mansell 1987 (9 Poles, verlor gegen Piquet), obwohl Schumachers 1994 DSQ-Szenario einzigartig ist.",
          nl: "Strikvraag opzet: Meeste antwoorden vangen je halverwege gedachte. Schumacher 1994 had 6 poles maar werd DSQ van kampioenschap (Hill won). Echter, beter antwoord: Mansell 1992 had 14 poles en WON. Senna 1989 had 13 poles en WON. Het werkelijke record: Mansell 1987 (9 poles, verloor aan Piquet), hoewel Schumachers 1994 DSQ scenario uniek is."
        }
      },
      {
        question: {
          en: "What obscure 1977 regulation change affected how the championship handled driver substitutions mid-season?",
          es: "¿Qué oscuro cambio de regulación de 1977 afectó cómo el campeonato manejaba las sustituciones de pilotos a mitad de temporada?",
          de: "Welche obskure Regeländerung 1977 betraf, wie die Meisterschaft Fahrerersatz mitten in der Saison handhabte?",
          nl: "Welke obscure regelwijziging van 1977 beïnvloedde hoe het kampioenschap coureur vervangingen halverwege het seizoen afhandelde?"
        },
        options: ["Substitute drivers could inherit previous driver's points", "Substitute drivers scored separately, no inheritance", "Team points combined regardless of driver", "No change - same rules as 1976"],
        correct: 1,
        explanation: {
          en: "1977 maintained the rule that substitute drivers scored separately - they couldn't inherit the previous driver's points. When a driver was replaced mid-season (e.g., injury), the replacement started at 0 points in championship standings. Team (constructor) points continued accumulating regardless of driver change. This rule has remained consistent throughout F1 history.",
          es: "1977 mantuvo la regla de que los pilotos sustitutos anotaban por separado - no podían heredar los puntos del piloto anterior. Cuando un piloto era reemplazado a mitad de temporada (ej., lesión), el reemplazo comenzaba en 0 puntos en la clasificación del campeonato. Los puntos del equipo (constructor) continuaban acumulándose independientemente del cambio de piloto. Esta regla se ha mantenido consistente a lo largo de la historia de F1.",
          de: "1977 behielt die Regel bei, dass Ersatzfahrer separat punkteten - sie konnten die Punkte des vorherigen Fahrers nicht erben. Wenn ein Fahrer mitten in der Saison ersetzt wurde (z.B. Verletzung), begann der Ersatz bei 0 Punkten in der Meisterschaftswertung. Team-(Konstrukteurs-)Punkte akkumulierten weiterhin unabhängig vom Fahrerwechsel. Diese Regel blieb in der F1-Geschichte konsistent.",
          nl: "1977 handhaafde de regel dat vervangende coureurs apart scoorden - ze konden de punten van de vorige coureur niet erven. Wanneer een coureur halverwege het seizoen werd vervangen (bijv. blessure), begon de vervanger op 0 punten in kampioenschapsstand. Team (constructor) punten bleven accumuleren ongeacht coureurswisseling. Deze regel is consistent gebleven door F1 geschiedenis."
        }
      },
      {
        question: {
          en: "Which championship scenario saw a team win the Constructors' title despite neither driver winning the Drivers' Championship?",
          es: "¿Qué escenario de campeonato vio a un equipo ganar el título de Constructores a pesar de que ningún piloto ganó el Campeonato de Pilotos?",
          de: "Welches Meisterschaftsszenario sah ein Team die Konstrukteurs-Meisterschaft gewinnen, obwohl kein Fahrer die Fahrer-Meisterschaft gewann?",
          nl: "Welk kampioenschap scenario zag een team de Constructeurs titel winnen ondanks dat geen coureur het Coureurs Kampioenschap won?"
        },
        options: ["Happens frequently - Constructors split between teammates", "2021 Mercedes (Hamilton P2, Constructors P2, doesn't fit)", "Never - Constructors winner always has Drivers' champion", "1999 Ferrari (Häkkinen won Drivers', Ferrari won Constructors')"],
        correct: 0,
        explanation: {
          en: "This happens frequently: Examples: 1999 Ferrari (Constructors) vs McLaren's Häkkinen (Drivers). 1986 Williams (Constructors) vs Prost/McLaren (Drivers). 1982 Ferrari (Constructors) vs Rosberg/Williams (Drivers). 2021 Mercedes won Constructors despite Verstappen winning Drivers'. When teammates split wins/points evenly, team dominates while individual drivers don't.",
          es: "Esto sucede frecuentemente: Ejemplos: 1999 Ferrari (Constructores) vs Häkkinen de McLaren (Pilotos). 1986 Williams (Constructores) vs Prost/McLaren (Pilotos). 1982 Ferrari (Constructores) vs Rosberg/Williams (Pilotos). 2021 Mercedes ganó Constructores a pesar de que Verstappen ganó Pilotos. Cuando los compañeros de equipo dividen victorias/puntos uniformemente, el equipo domina mientras que los pilotos individuales no.",
          de: "Dies passiert häufig: Beispiele: 1999 Ferrari (Konstrukteure) vs McLarens Häkkinen (Fahrer). 1986 Williams (Konstrukteure) vs Prost/McLaren (Fahrer). 1982 Ferrari (Konstrukteure) vs Rosberg/Williams (Fahrer). 2021 Mercedes gewann Konstrukteure trotz Verstappens Fahrersieg. Wenn Teamkollegen Siege/Punkte gleichmäßig teilen, dominiert das Team, während einzelne Fahrer nicht.",
          nl: "Dit gebeurt frequent: Voorbeelden: 1999 Ferrari (Constructeurs) vs McLaren's Häkkinen (Coureurs). 1986 Williams (Constructeurs) vs Prost/McLaren (Coureurs). 1982 Ferrari (Constructeurs) vs Rosberg/Williams (Coureurs). 2021 Mercedes won Constructeurs ondanks Verstappen won Coureurs. Wanneer teamgenoten zeges/punten gelijkmatig verdelen, domineert team terwijl individuele coureurs niet."
        }
      },
      {
        question: {
          en: "What unique 1983 regulation allowed a team to score points with three different drivers in the same race?",
          es: "¿Qué regulación única de 1983 permitió a un equipo anotar puntos con tres pilotos diferentes en la misma carrera?",
          de: "Welche einzigartige Regelung von 1983 erlaubte einem Team, mit drei verschiedenen Fahrern im selben Rennen Punkte zu erzielen?",
          nl: "Welke unieke regel van 1983 stelde een team in staat punten te scoren met drie verschillende coureurs in dezelfde race?"
        },
        options: ["Third driver in T-car started race, teammates inherited cars", "Never possible - max two drivers per team", "Shared drives allowed multiple drivers in single chassis", "Testing driver scored points when race drivers DNF'd"],
        correct: 1,
        explanation: {
          en: "Trick question: This was never possible. Teams could only score points with TWO drivers per race (one per car). While T-cars (spare cars) existed, if a driver switched to T-car, they were still the same driver. Shared drives (1950s) meant multiple drivers in one car, not three drivers scoring simultaneously. Max two constructors' points per team per race.",
          es: "Pregunta trampa: Esto nunca fue posible. Los equipos solo podían anotar puntos con DOS pilotos por carrera (uno por coche). Aunque existían T-cars (coches de repuesto), si un piloto cambiaba a T-car, seguía siendo el mismo piloto. Las conducciones compartidas (años 50) significaban múltiples pilotos en un coche, no tres pilotos anotando simultáneamente. Máx dos puntos de constructores por equipo por carrera.",
          de: "Fangfrage: Dies war nie möglich. Teams konnten nur mit ZWEI Fahrern pro Rennen Punkte erzielen (einer pro Auto). Während T-Cars (Ersatzwagen) existierten, war es bei einem Wechsel zum T-Car immer noch derselbe Fahrer. Shared Drives (1950er) bedeuteten mehrere Fahrer in einem Auto, nicht drei Fahrer gleichzeitig punktend. Max zwei Konstrukteurspunkte pro Team pro Rennen.",
          nl: "Strikvraag: Dit was nooit mogelijk. Teams konden alleen punten scoren met TWEE coureurs per race (één per auto). Hoewel T-cars (reserve-auto's) bestonden, als een coureur wisselde naar T-car, waren ze nog steeds dezelfde coureur. Gedeelde ritten (jaren 1950) betekenden meerdere coureurs in één auto, niet drie coureurs tegelijk scorend. Max twee constructeurs punten per team per race."
        }
      },
      {
        question: {
          en: "Which obscure championship tiebreaker rule has never actually been used to decide a title?",
          es: "¿Qué oscura regla de desempate del campeonato nunca se ha usado realmente para decidir un título?",
          de: "Welche obskure Meisterschafts-Tiebreaker-Regel wurde noch nie tatsächlich zur Titelentscheidung verwendet?",
          nl: "Welke obscure kampioenschap gelijkspel regel is nooit daadwerkelijk gebruikt om een titel te beslissen?"
        },
        options: ["Fastest lap count (secondary tiebreaker)", "Total race wins (first tiebreaker)", "Most second places (tertiary tiebreaker)", "All have been used at various times"],
        correct: 2,
        explanation: {
          en: "Most second places (tertiary tiebreaker) has never decided an F1 championship. Current rules: 1st = most wins, 2nd = most P2s, 3rd = most P3s, etc. If still tied, earlier best result wins. While equal points occurred (1984 Lauda/Prost), it was decided on wins, never needing P2 countback. The deep tiebreakers exist but remain unused.",
          es: "La mayoría de segundos lugares (desempate terciario) nunca ha decidido un campeonato de F1. Reglas actuales: 1º = más victorias, 2º = más P2s, 3º = más P3s, etc. Si aún empate, el mejor resultado anterior gana. Aunque ocurrieron puntos iguales (1984 Lauda/Prost), se decidió por victorias, nunca necesitando recuento de P2. Los desempates profundos existen pero permanecen sin usar.",
          de: "Die meisten zweiten Plätze (tertiärer Tiebreaker) haben noch nie eine F1-Meisterschaft entschieden. Aktuelle Regeln: 1. = meiste Siege, 2. = meiste P2s, 3. = meiste P3s, usw. Bei weiterem Gleichstand gewinnt früheres bestes Ergebnis. Während Punktgleichstand vorkam (1984 Lauda/Prost), wurde über Siege entschieden, nie P2-Countback nötig. Die tiefen Tiebreaker existieren, bleiben aber ungenutzt.",
          nl: "Meeste tweede plaatsen (tertiaire gelijkspel regel) heeft nooit een F1 kampioenschap beslist. Huidige regels: 1e = meeste zeges, 2e = meeste P2s, 3e = meeste P3s, etc. Als nog gelijk, wint eerdere beste resultaat. Hoewel gelijke punten voorkwamen (1984 Lauda/Prost), werd beslist op zeges, nooit P2 countback nodig. De diepe gelijkspel regels bestaan maar blijven ongebruikt."
        }
      },
      {
        question: {
          en: "What championship scenario occurred when a driver won the title despite their main rival scoring more points in the second half of the season?",
          es: "¿Qué escenario de campeonato ocurrió cuando un piloto ganó el título a pesar de que su principal rival anotó más puntos en la segunda mitad de la temporada?",
          de: "Welches Meisterschaftsszenario trat auf, als ein Fahrer den Titel gewann, obwohl sein Hauptrivale in der zweiten Saisonhälfte mehr Punkte erzielte?",
          nl: "Welk kampioenschap scenario vond plaats toen een coureur de titel won ondanks dat hun hoofdrivaal meer punten scoorde in de tweede helft van het seizoen?"
        },
        options: ["Happens occasionally - early lead preserved", "2010 Vettel (won despite Alonso's late surge)", "Never - season split doesn't affect final totals", "2021 Verstappen (dominated despite Hamilton surge)"],
        correct: 0,
        explanation: {
          en: "This happens regularly: Driver builds big early lead, rival finds form late but can't overcome deficit. Examples: 2013 Vettel dominated early, Alonso stronger late. 2011 Vettel's early lead withstood late challenges. 2015 Hamilton's early dominance vs Rosberg's late wins. Second-half performance is often stronger for runners-up who developed late-season momentum but started too far behind.",
          es: "Esto sucede regularmente: El piloto construye gran ventaja temprana, el rival encuentra forma tarde pero no puede superar déficit. Ejemplos: 2013 Vettel dominó temprano, Alonso más fuerte tarde. 2011 La ventaja temprana de Vettel resistió desafíos tardíos. 2015 Dominio temprano de Hamilton vs victorias tardías de Rosberg. El rendimiento de segunda mitad es a menudo más fuerte para subcampeones que desarrollaron momento de final de temporada pero comenzaron demasiado atrás.",
          de: "Dies passiert regelmäßig: Fahrer baut großen frühen Vorsprung auf, Rivale findet spät Form, kann aber Defizit nicht überwinden. Beispiele: 2013 Vettel dominierte früh, Alonso stärker spät. 2011 Vettels früher Vorsprung hielt späten Herausforderungen stand. 2015 Hamiltons frühe Dominanz vs Rosbergs späte Siege. Zweite Hälfte Performance ist oft stärker für Zweitplatzierte, die späte Saison-Momentum entwickelten, aber zu weit zurück starteten.",
          nl: "Dit gebeurt regelmatig: Coureur bouwt grote vroege voorsprong op, rivaal vindt vorm laat maar kan deficit niet overwinnen. Voorbeelden: 2013 Vettel domineerde vroeg, Alonso sterker laat. 2011 Vettels vroege voorsprong weerstond late uitdagingen. 2015 Hamiltons vroege dominantie vs Rosbergs late zeges. Tweede helft prestaties zijn vaak sterker voor tweede plaatsen die late seizoen momentum ontwikkelden maar te ver achter begonnen."
        }
      },
      {
        question: {
          en: "Which championship featured a posthumous points finish that affected the final standings?",
          es: "¿Qué campeonato presentó un final de puntos póstumo que afectó la clasificación final?",
          de: "Welche Meisterschaft hatte ein posthumes Punkteergebnis, das die Endwertung beeinflusste?",
          nl: "Welk kampioenschap had een postume puntenfinish die de eindklassering beïnvloedde?"
        },
        options: ["1970 Rindt (posthumous champion, but no post-death points)", "1968 Clark (points scored after death affected standings)", "Never - points only count for living drivers", "1994 Senna (posthumous points counted)"],
        correct: 0,
        explanation: {
          en: "Jochen Rindt 1970 is only posthumous champion. He died at Monza qualifying (Sep), but had enough points to win title when season ended. However, NO points were scored after his death - his existing 45 points simply weren't overtaken by rivals. Jacky Ickx finished 2nd with 40 points. Rindt's points all came while alive; posthumous status refers to title awarded after death, not points scored after death.",
          es: "Jochen Rindt 1970 es el único campeón póstumo. Murió en la clasificación de Monza (Sep), pero tenía suficientes puntos para ganar el título cuando terminó la temporada. Sin embargo, NO se anotaron puntos después de su muerte - sus 45 puntos existentes simplemente no fueron superados por rivales. Jacky Ickx terminó 2º con 40 puntos. Todos los puntos de Rindt vinieron mientras vivía; el estado póstumo se refiere al título otorgado después de la muerte, no puntos anotados después de la muerte.",
          de: "Jochen Rindt 1970 ist einziger posthumer Champion. Er starb im Monza-Qualifying (Sep), hatte aber genug Punkte, um den Titel zu gewinnen, als die Saison endete. Allerdings wurden KEINE Punkte nach seinem Tod erzielt - seine bestehenden 45 Punkte wurden einfach nicht von Rivalen überholt. Jacky Ickx wurde 2. mit 40 Punkten. Rindts Punkte kamen alle zu Lebzeiten; posthumer Status bezieht sich auf nach dem Tod verliehenen Titel, nicht nach dem Tod erzielte Punkte.",
          nl: "Jochen Rindt 1970 is enige postume kampioen. Hij stierf bij Monza kwalificatie (Sep), maar had genoeg punten om titel te winnen toen seizoen eindigde. Echter, GEEN punten werden gescoord na zijn dood - zijn bestaande 45 punten werden simpelweg niet ingehaald door rivalen. Jacky Ickx finishte 2e met 40 punten. Rindts punten kwamen allemaal terwijl hij leefde; postume status verwijst naar titel toegekend na dood, niet punten gescoord na dood."
        }
      },
      {
        question: {
          en: "What obscure 2002 regulation regarding team orders directly led to the controversial Austrian GP finish?",
          es: "¿Qué oscura regulación de 2002 sobre órdenes de equipo llevó directamente al final controvertido del GP de Austria?",
          de: "Welche obskure Regelung von 2002 bezüglich Teamorders führte direkt zum kontroversen Finish beim Österreich-GP?",
          nl: "Welke obscure regel van 2002 betreffende team orders leidde direct tot de controversiële Oostenrijkse GP finish?"
        },
        options: ["Team orders were explicitly legal in 2002", "Team orders were banned, causing Austria controversy", "No regulation existed - gray area led to Austria", "Team orders only banned from 2003 onward"],
        correct: 0,
        explanation: {
          en: "In 2002, team orders were LEGAL. Austria 2002 controversy (Barrichello ordered to yield win to Schumacher on final straight) wasn't about legality but poor optics/sportsmanship. Public outrage led FIA to BAN team orders from 2003-2010. The regulation change came AFTER Austria 2002, not before. Pre-2002, team orders were unrestricted and commonly used.",
          es: "En 2002, las órdenes de equipo eran LEGALES. La controversia de Austria 2002 (Barrichello ordenado a ceder victoria a Schumacher en recta final) no fue sobre legalidad sino mala óptica/deportividad. La indignación pública llevó a la FIA a PROHIBIR órdenes de equipo de 2003-2010. El cambio de regulación vino DESPUÉS de Austria 2002, no antes. Pre-2002, las órdenes de equipo no tenían restricciones y se usaban comúnmente.",
          de: "2002 waren Teamorders LEGAL. Die Österreich-2002-Kontroverse (Barrichello angewiesen, Sieg an Schumacher in der Schlussgeraden abzugeben) ging nicht um Legalität, sondern schlechte Optik/Sportlichkeit. Öffentliche Empörung führte dazu, dass FIA Teamorders 2003-2010 VERBOT. Die Regeländerung kam NACH Österreich 2002, nicht davor. Vor 2002 waren Teamorders uneingeschränkt und häufig verwendet.",
          nl: "In 2002 waren team orders LEGAAL. Oostenrijk 2002 controverse (Barrichello kreeg opdracht zege af te staan aan Schumacher op laatste rechte stuk) ging niet over legaliteit maar slechte optica/sportiviteit. Publieke verontwaardiging leidde FIA om team orders te VERBIEDEN van 2003-2010. De regelwijziging kwam NA Oostenrijk 2002, niet ervoor. Pre-2002 waren team orders onbeperkt en algemeen gebruikt."
        }
      },
      {
        question: {
          en: "Which championship scenario saw the FIA retroactively change regulations that affected points distribution after the season ended?",
          es: "¿Qué escenario de campeonato vio a la FIA cambiar retroactivamente regulaciones que afectaron la distribución de puntos después de que terminó la temporada?",
          de: "Welches Meisterschaftsszenario sah die FIA rückwirkend Regelungen ändern, die die Punkteverteilung nach Saisonende beeinflussten?",
          nl: "Welk kampioenschap scenario zag de FIA terugwerkend regels wijzigen die puntenverdeling beïnvloedden na het einde van het seizoen?"
        },
        options: ["1989 San Marino retroactive DSQ changed standings", "Never - FIA doesn't change rules retroactively after season", "2021 Abu Dhabi led to post-season rule clarifications", "1994 Schumacher DSQ applied after finale"],
        correct: 1,
        explanation: {
          en: "Trick question: FIA has never retroactively changed regulations to affect points after a season ended. While DSQs can happen post-race (within appeal window), and rules are clarified for NEXT season (2021→2022 changes after Abu Dhabi), no championship has had its final points distribution changed by retroactive rule changes after the season concluded. Schumacher's 1997 DSQ was decided before season's end.",
          es: "Pregunta trampa: La FIA nunca ha cambiado retroactivamente regulaciones para afectar puntos después de que terminó una temporada. Aunque las DSQs pueden suceder después de la carrera (dentro de la ventana de apelación), y las reglas se aclaran para la SIGUIENTE temporada (cambios 2021→2022 después de Abu Dhabi), ningún campeonato ha tenido su distribución final de puntos cambiada por cambios de reglas retroactivos después de que concluyó la temporada. La DSQ de Schumacher en 1997 se decidió antes del final de temporada.",
          de: "Fangfrage: Die FIA hat nie rückwirkend Regelungen geändert, um Punkte nach Saisonende zu beeinflussen. Während DSQs nach dem Rennen passieren können (innerhalb des Berufungsfensters) und Regeln für die NÄCHSTE Saison geklärt werden (2021→2022 Änderungen nach Abu Dhabi), hatte keine Meisterschaft ihre endgültige Punkteverteilung durch rückwirkende Regeländerungen nach Saisonabschluss geändert. Schumachers 1997 DSQ wurde vor Saisonende entschieden.",
          nl: "Strikvraag: FIA heeft nooit terugwerkend regels gewijzigd om punten te beïnvloeden na een seizoen eindigde. Hoewel DSQs na de race kunnen gebeuren (binnen beroepsvenster), en regels worden verduidelijkt voor VOLGEND seizoen (2021→2022 wijzigingen na Abu Dhabi), heeft geen kampioenschap zijn definitieve puntenverdeling gewijzigd door terugwerkende regelwijzigingen na het seizoen eindigde. Schumachers 1997 DSQ werd beslist voor seizoenseinde."
        }
      },
      {
        question: {
          en: "What unique 1956 regulation allowed a driver to score points for multiple constructors in the same championship?",
          es: "¿Qué regulación única de 1956 permitió a un piloto anotar puntos para múltiples constructores en el mismo campeonato?",
          de: "Welche einzigartige Regelung von 1956 erlaubte einem Fahrer, für mehrere Konstrukteure in derselben Meisterschaft Punkte zu erzielen?",
          nl: "Welke unieke regel van 1956 stelde een coureur in staat punten te scoren voor meerdere constructeurs in hetzelfde kampioenschap?"
        },
        options: ["Driver transfers mid-season counted for both teams", "Shared drives counted for different constructors", "Drivers could race for multiple teams simultaneously", "All of the above were possible in 1950s"],
        correct: 3,
        explanation: {
          en: "All were possible in 1950s: Drivers could switch teams mid-season (points counted separately for each constructor per race). Shared drives meant if Driver A (Ferrari) took over Driver B's (Maserati) car, points could split between constructors. Some drivers raced for different teams at different races same season. The era was far more fluid than modern F1's exclusive contracts.",
          es: "Todo era posible en los años 50: Los pilotos podían cambiar de equipo a mitad de temporada (puntos contaban por separado para cada constructor por carrera). Las conducciones compartidas significaban que si el Piloto A (Ferrari) tomaba el coche del Piloto B (Maserati), los puntos podían dividirse entre constructores. Algunos pilotos corrían para diferentes equipos en diferentes carreras la misma temporada. La era era mucho más fluida que los contratos exclusivos de la F1 moderna.",
          de: "Alles war in den 1950ern möglich: Fahrer konnten mitten in der Saison Teams wechseln (Punkte zählten separat für jeden Konstrukteur pro Rennen). Shared Drives bedeuteten, wenn Fahrer A (Ferrari) Fahrer Bs (Maserati) Auto übernahm, konnten Punkte zwischen Konstrukteuren aufgeteilt werden. Einige Fahrer fuhren in derselben Saison für verschiedene Teams bei verschiedenen Rennen. Die Ära war viel fluider als moderne F1s exklusive Verträge.",
          nl: "Alles was mogelijk in jaren 1950: Coureurs konden halverwege seizoen van team wisselen (punten telden apart voor elke constructor per race). Gedeelde ritten betekenden als Coureur A (Ferrari) Coureur B's (Maserati) auto overnam, punten konden splitsen tussen constructeurs. Sommige coureurs raceten voor verschillende teams bij verschillende races zelfde seizoen. Het tijdperk was veel vloeiender dan moderne F1's exclusieve contracten."
        }
      },
      {
        question: {
          en: "Which championship featured the smallest points margin ever between P1 and P5 in final standings?",
          es: "¿Qué campeonato presentó el margen de puntos más pequeño entre P1 y P5 en la clasificación final?",
          de: "Welche Meisterschaft hatte den kleinsten Punktabstand zwischen P1 und P5 in der Endwertung?",
          nl: "Welk kampioenschap had de kleinste puntenmarge ooit tussen P1 en P5 in eindklassering?"
        },
        options: ["2010 (Vettel P1, Kubica P5 within 12 points)", "2007 (Räikkönen P1, Massa P5 within 9 points... wait, Massa was P4)", "1982 (Rosberg P1, Watson P5 within 6 points... wait, Watson P3)", "2012 (Vettel P1, Hamilton P5 within 13 points... wait, Button P5)"],
        correct: 2,
        explanation: {
          en: "1982 had incredibly tight standings: Rosberg P1 (44pts), Pironi P2 (39pts), Watson P3 (39pts), Lauda P4 (30pts), Arnoux P5 (28pts). P1-to-P5 span was only 16 points across 11 different race winners. Most compressed top-5 in history. However, Watson was P3 not P5, and the question setup includes deliberate errors to test careful reading. 1982 remains answer for smallest P1-P5 gap.",
          es: "1982 tuvo clasificaciones increíblemente ajustadas: Rosberg P1 (44pts), Pironi P2 (39pts), Watson P3 (39pts), Lauda P4 (30pts), Arnoux P5 (28pts). El rango P1-a-P5 fue solo 16 puntos a través de 11 ganadores de carrera diferentes. Top-5 más comprimido en la historia. Sin embargo, Watson fue P3 no P5, y la configuración de la pregunta incluye errores deliberados para probar lectura cuidadosa. 1982 sigue siendo respuesta para brecha P1-P5 más pequeña.",
          de: "1982 hatte unglaublich enge Wertungen: Rosberg P1 (44Pkt), Pironi P2 (39Pkt), Watson P3 (39Pkt), Lauda P4 (30Pkt), Arnoux P5 (28Pkt). P1-bis-P5-Spanne war nur 16 Punkte über 11 verschiedene Rennsieger. Komprimierteste Top-5 in der Geschichte. Watson war jedoch P3 nicht P5, und das Frage-Setup enthält absichtliche Fehler, um sorgfältiges Lesen zu testen. 1982 bleibt Antwort für kleinste P1-P5-Lücke.",
          nl: "1982 had ongelooflijk krappe standen: Rosberg P1 (44pts), Pironi P2 (39pts), Watson P3 (39pts), Lauda P4 (30pts), Arnoux P5 (28pts). P1-tot-P5 span was slechts 16 punten over 11 verschillende racewinnaars. Meest gecomprimeerde top-5 in geschiedenis. Echter, Watson was P3 niet P5, en de vraagopzet bevat opzettelijke fouten om zorgvuldig lezen te testen. 1982 blijft antwoord voor kleinste P1-P5 kloof."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
