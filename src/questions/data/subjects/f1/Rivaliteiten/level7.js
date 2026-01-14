const level7 = (function() {
  const questions = [
    {
      question: {
        en: "What was the exact fuel load strategy difference between Schumacher and Hill at Adelaide 1994 that affected their collision?",
        es: "¿Cuál fue la diferencia exacta de estrategia de carga de combustible entre Schumacher y Hill en Adelaide 1994 que afectó su colisión?",
        de: "Was war der exakte Kraftstoffladungs-Strategie-Unterschied zwischen Schumacher und Hill in Adelaide 1994, der ihre Kollision beeinflusste?",
        nl: "Wat was het exacte brandstof laad strategie verschil tussen Schumacher en Hill bij Adelaide 1994 dat hun botsing beïnvloedde?"
      },
      options: [
        "Schumacher lighter fuel, 2-stop vs Hill's heavier 1-stop strategy",
        "Both identical fuel strategies",
        "Hill lighter, Schumacher heavier",
        "Both 3-stop strategies"
      ],
      correct: 0,
      explanation: {
        en: "At Adelaide 1994, Schumacher ran lighter fuel with planned 2-stop strategy while Hill ran heavier 1-stop. This gave Schumacher track position early. After hitting wall (lap 35), Schumacher's car was damaged but drivable. When Hill attacked at corner, Schumacher turned in, causing collision. Both DNF'd. Schumacher won championship by 1 point. Many suspected deliberate collision. The controversy defined their bitter rivalry.",
        es: "En Adelaide 1994, Schumacher corrió con combustible más ligero con estrategia de 2 paradas planificada mientras Hill corrió más pesado con 1 parada. Esto dio a Schumacher posición en pista temprano. Después de golpear muro (vuelta 35), auto de Schumacher estaba dañado pero conducible. Cuando Hill atacó en curva, Schumacher giró, causando colisión. Ambos DNF. Schumacher ganó campeonato por 1 punto. Muchos sospecharon colisión deliberada. Controversia definió su amarga rivalidad.",
        de: "In Adelaide 1994 fuhr Schumacher leichtere Kraftstoffladung mit geplanter 2-Stopp-Strategie, während Hill schwerer mit 1-Stopp fuhr. Dies gab Schumacher frühe Streckenposition. Nach Mauerkontakt (Runde 35) war Schumachers Auto beschädigt aber fahrbar. Als Hill in Kurve angriff, lenkte Schumacher ein, verursachte Kollision. Beide Ausfall. Schumacher gewann Meisterschaft mit 1 Punkt. Viele vermuteten absichtliche Kollision. Kontroverse definierte ihre bittere Rivalität.",
        nl: "Bij Adelaide 1994 reed Schumacher lichter brandstof met geplande 2-stop strategie terwijl Hill zwaarder reed met 1-stop. Dit gaf Schumacher vroege baanpositie. Na muur raken (ronde 35) was Schumacher's auto beschadigd maar rijdbaar. Toen Hill aanviel bij bocht, stuurde Schumacher in, veroorzaakte botsing. Beiden DNF. Schumacher won kampioenschap met 1 punt. Velen vermoedden opzettelijke botsing. Controverse definieerde hun bittere rivaliteit."
      }
    },
    {
      question: {
        en: "How many consecutive pole positions did Rosberg take to start the 2016 season before Hamilton broke the streak?",
        es: "¿Cuántas poles consecutivas tomó Rosberg para comenzar la temporada 2016 antes de que Hamilton rompiera la racha?",
        de: "Wie viele aufeinanderfolgende Pole-Positionen holte Rosberg zum Start der Saison 2016, bevor Hamilton die Serie brach?",
        nl: "Hoeveel opeenvolgende poles pakte Rosberg om het 2016 seizoen te starten voor Hamilton de reeks brak?"
      },
      options: [
        "4 consecutive poles (Australia, Bahrain, China, Russia)",
        "3 poles",
        "5 poles",
        "6 poles"
      ],
      correct: 0,
      explanation: {
        en: "Rosberg took pole for the first 4 races of 2016 (Australia, Bahrain, China, Russia) and won all 4, building a commanding 43-point lead. Hamilton broke the streak at Barcelona qualifying (race 5), but both Mercedes crashed lap 1. The streak showcased Rosberg's psychological strength after losing 2014 and 2015 titles. His perfect start put enormous pressure on Hamilton and set up their most intense championship battle.",
        es: "Rosberg tomó pole para las primeras 4 carreras de 2016 (Australia, Baréin, China, Rusia) y ganó todas las 4, construyendo ventaja dominante de 43 puntos. Hamilton rompió racha en clasificación de Barcelona (carrera 5), pero ambos Mercedes chocaron vuelta 1. Racha mostró fortaleza psicológica de Rosberg después de perder títulos 2014 y 2015. Su comienzo perfecto puso enorme presión sobre Hamilton y preparó su batalla por campeonato más intensa.",
        de: "Rosberg holte Pole für die ersten 4 Rennen 2016 (Australien, Bahrain, China, Russland) und gewann alle 4, baute beherrschende 43-Punkte-Führung auf. Hamilton brach Serie bei Barcelona-Qualifying (Rennen 5), aber beide Mercedes crashten Runde 1. Serie zeigte Rosbergs psychologische Stärke nach Verlust der 2014- und 2015-Titel. Sein perfekter Start setzte Hamilton enorm unter Druck und bereitete ihren intensivsten Titelkampf vor.",
        nl: "Rosberg pakte pole voor de eerste 4 races van 2016 (Australië, Bahrein, China, Rusland) en won alle 4, bouwde dominante 43-punten voorsprong op. Hamilton brak de reeks bij Barcelona kwalificatie (race 5), maar beide Mercedes crashten ronde 1. De reeks toonde Rosberg's psychologische kracht na verlies 2014 en 2015 titels. Zijn perfecte start zette enorme druk op Hamilton en zette hun meest intense kampioenschapsstrijd op."
      }
    },
    {
      question: {
        en: "What was the exact engine failure mode that caused Rosberg's Abu Dhabi 2014 retirement, ending his title hopes?",
        es: "¿Cuál fue el modo exacto de fallo del motor que causó el retiro de Rosberg en Abu Dhabi 2014, terminando sus esperanzas de título?",
        de: "Was war der exakte Motorausfallmodus, der Rosbergs Abu Dhabi 2014-Ausfall verursachte und seine Titelchancen beendete?",
        nl: "Wat was de exacte motor faalstand die Rosberg's Abu Dhabi 2014 uitval veroorzaakte, zijn titelkansen beëindigend?"
      },
      options: [
        "MGU-K (kinetic energy recovery) electrical failure",
        "Turbo failure",
        "Engine block crack",
        "Fuel system failure"
      ],
      correct: 0,
      explanation: {
        en: "Rosberg's Mercedes MGU-K (Motor Generator Unit - Kinetic) failed on lap 20 at Abu Dhabi 2014, causing electrical issues and loss of hybrid power recovery. Running 2nd behind Hamilton, he had to retire. This ended his title challenge in the controversial double-points finale. Hamilton won easily, securing first Mercedes-era championship. Some conspiracy theories suggested sabotage, but Mercedes categorically denied any wrongdoing. The failure haunted Rosberg.",
        es: "MGU-K de Mercedes de Rosberg (Unidad Generadora de Motor - Cinética) falló en vuelta 20 en Abu Dhabi 2014, causando problemas eléctricos y pérdida de recuperación de potencia híbrida. Corriendo 2º detrás de Hamilton, tuvo que retirarse. Esto terminó su desafío por título en controvertido final de doble puntos. Hamilton ganó fácilmente, asegurando primer campeonato era Mercedes. Algunas teorías de conspiración sugirieron sabotaje, pero Mercedes negó categóricamente cualquier irregularidad. Falla persiguió a Rosberg.",
        de: "Rosbergs Mercedes MGU-K (Motor Generator Unit - Kinetic) fiel in Runde 20 in Abu Dhabi 2014 aus, verursachte elektrische Probleme und Verlust der Hybrid-Energierückgewinnung. Als Zweiter hinter Hamilton fahrend, musste er aufgeben. Dies beendete seine Titelchance im kontroversen Doppelpunkte-Finale. Hamilton gewann leicht, sicherte ersten Mercedes-Ära-Titel. Einige Verschwörungstheorien suggerierten Sabotage, aber Mercedes bestritt kategorisch Fehlverhalten. Ausfall verfolgte Rosberg.",
        nl: "Rosberg's Mercedes MGU-K (Motor Generator Unit - Kinetic) faalde op ronde 20 bij Abu Dhabi 2014, veroorzaakte elektrische problemen en verlies van hybride krachtterugwinning. Rijdend 2e achter Hamilton, moest hij opgeven. Dit beëindigde zijn titeluitdaging in controversiële dubbele-punten finale. Hamilton won gemakkelijk, verzekerde eerste Mercedes-era kampioenschap. Sommige samenzweringstheorieën suggereerden sabotage, maar Mercedes ontkende categoriek enig wangedrag. De fout achtervolgde Rosberg."
      }
    },
    {
      question: {
        en: "What was the specific radio code McLaren used to tell Prost to hold position behind Senna at Imola 1988?",
        es: "¿Cuál fue el código de radio específico que McLaren usó para decirle a Prost que mantuviera posición detrás de Senna en Imola 1988?",
        de: "Was war der spezifische Funkcode, den McLaren verwendete, um Prost zu sagen, Position hinter Senna in Imola 1988 zu halten?",
        nl: "Wat was de specifieke radiocode die McLaren gebruikte om Prost te vertellen positie achter Senna bij Imola 1988 te houden?"
      },
      options: [
        "No overtaking agreement for first race, not coded radio message",
        "Code Alpha - hold station",
        "Multi 12 - maintain order",
        "Delta Plus - no attack"
      ],
      correct: 0,
      explanation: {
        en: "At Imola 1988 (season opener), McLaren had pre-race agreement that whoever led into first corner wouldn't be challenged. Senna led. Prost, faster on different strategy, caught Senna but honored agreement. Senna won. Post-race, Prost felt betrayed when he learned Senna had secretly negotiated to change first-corner rule from Tamburello to Tosa chicane. This broken trust poisoned their relationship from race 1, setting tone for their bitter rivalry.",
        es: "En Imola 1988 (apertura de temporada), McLaren tenía acuerdo previo a carrera de que quien liderara en primera curva no sería desafiado. Senna lideró. Prost, más rápido en estrategia diferente, alcanzó a Senna pero honró acuerdo. Senna ganó. Después de carrera, Prost se sintió traicionado cuando supo que Senna había negociado secretamente cambiar regla de primera curva de Tamburello a chicane Tosa. Esta confianza rota envenenó su relación desde carrera 1, marcando tono para su amarga rivalidad.",
        de: "In Imola 1988 (Saisonauftakt) hatte McLaren Vor-Rennen-Vereinbarung, dass wer in erste Kurve führt, nicht herausgefordert wird. Senna führte. Prost, schneller auf anderer Strategie, holte Senna ein, ehrte aber Vereinbarung. Senna gewann. Nach Rennen fühlte sich Prost betrogen, als er erfuhr, Senna hatte heimlich verhandelt, Erste-Kurve-Regel von Tamburello zu Tosa-Schikane zu ändern. Dieses gebrochene Vertrauen vergiftete ihre Beziehung ab Rennen 1, setzte Ton für ihre bittere Rivalität.",
        nl: "Bij Imola 1988 (seizoensopener) had McLaren pre-race overeenkomst dat wie eerst in eerste bocht leidde niet uitgedaagd zou worden. Senna leidde. Prost, sneller op verschillende strategie, haalde Senna in maar respecteerde overeenkomst. Senna won. Na race voelde Prost zich verraden toen hij leerde dat Senna in het geheim had onderhandeld om eerste-bocht regel te wijzigen van Tamburello naar Tosa chicane. Dit gebroken vertrouwen vergiftigde hun relatie vanaf race 1, zette toon voor hun bittere rivaliteit."
      }
    },
    {
      question: {
        en: "How many championship points did Hamilton score in his rookie 2007 season compared to Alonso?",
        es: "¿Cuántos puntos de campeonato anotó Hamilton en su temporada de novato 2007 en comparación con Alonso?",
        de: "Wie viele Meisterschaftspunkte erzielte Hamilton in seiner Rookie-Saison 2007 im Vergleich zu Alonso?",
        nl: "Hoeveel kampioenschapspunten scoorde Hamilton in zijn rookie 2007 seizoen vergeleken met Alonso?"
      },
      options: [
        "Both scored 109 points (tied, Raikkonen won with 110)",
        "Hamilton 105, Alonso 109",
        "Hamilton 112, Alonso 109",
        "Hamilton 109, Alonso 106"
      ],
      correct: 0,
      explanation: {
        en: "In 2007, rookie Hamilton and two-time champion Alonso both scored exactly 109 points, tied for 2nd. Raikkonen (Ferrari) won championship with 110 points, just 1 point ahead. Hamilton lost on countback (fewer wins). The Hamilton-Alonso McLaren rivalry was toxic: Spygate scandal, Hungary qualifying incident where Alonso blocked Hamilton in pits, team favoritism allegations. Alonso left McLaren after one season, unable to accept being matched by a rookie.",
        es: "En 2007, novato Hamilton y bicampeón Alonso anotaron exactamente 109 puntos cada uno, empatados en 2º. Raikkonen (Ferrari) ganó campeonato con 110 puntos, solo 1 punto adelante. Hamilton perdió en recuento (menos victorias). Rivalidad Hamilton-Alonso McLaren fue tóxica: escándalo Spygate, incidente clasificación Hungría donde Alonso bloqueó a Hamilton en boxes, alegaciones de favoritismo de equipo. Alonso dejó McLaren después de una temporada, incapaz de aceptar ser igualado por novato.",
        de: "2007 erzielten Rookie Hamilton und zweifacher Champion Alonso beide genau 109 Punkte, Zweiter gebunden. Raikkonen (Ferrari) gewann Meisterschaft mit 110 Punkten, nur 1 Punkt voraus. Hamilton verlor durch Rückzählung (weniger Siege). Hamilton-Alonso McLaren-Rivalität war toxisch: Spygate-Skandal, Ungarn-Qualifying-Vorfall wo Alonso Hamilton in Box blockierte, Team-Bevorzugungs-Vorwürfe. Alonso verließ McLaren nach einer Saison, unfähig zu akzeptieren, von Rookie egalisiert zu werden.",
        nl: "In 2007 scoorden rookie Hamilton en tweevoudig kampioen Alonso beiden precies 109 punten, gebonden 2e. Raikkonen (Ferrari) won kampioenschap met 110 punten, slechts 1 punt voor. Hamilton verloor op terugtelling (minder overwinningen). Hamilton-Alonso McLaren rivaliteit was toxisch: Spygate schandaal, Hongarije kwalificatie incident waar Alonso Hamilton blokkeerde in pits, team favoritisme beschuldigingen. Alonso verliet McLaren na één seizoen, niet in staat te accepteren geëvenaard te worden door rookie."
      }
    },
    {
      question: {
        en: "What was the exact penalty points total Verstappen accumulated on his super license after the 2021 season battles with Hamilton?",
        es: "¿Cuál fue el total exacto de puntos de penalización que Verstappen acumuló en su súper licencia después de las batallas de la temporada 2021 con Hamilton?",
        de: "Was war die exakte Strafpunkte-Gesamtzahl, die Verstappen auf seiner Superlizenz nach den 2021-Saison-Kämpfen mit Hamilton ansammelte?",
        nl: "Wat was het exacte strafpunten totaal dat Verstappen verzamelde op zijn superlicentie na de 2021 seizoen gevechten met Hamilton?"
      },
      options: [
        "7 penalty points (including Jeddah brake test, Monza collision)",
        "10 penalty points",
        "5 penalty points",
        "12 penalty points (race ban threshold)"
      ],
      correct: 0,
      explanation: {
        en: "By end of 2021, Verstappen accumulated 7 penalty points on his super license from various incidents including the Monza collision (2 points) and Saudi Arabia brake-testing (2 points). The threshold for race ban is 12 points in 12 months. Hamilton accumulated fewer points despite multiple incidents. The 2021 Hamilton-Verstappen battle featured unprecedented aggression, multiple collisions (Silverstone, Monza, Saudi Arabia), and controversial stewarding decisions that shaped modern F1 racing standards.",
        es: "A fines de 2021, Verstappen acumuló 7 puntos de penalización en su súper licencia de varios incidentes incluyendo colisión de Monza (2 puntos) y frenado brusco de Arabia Saudita (2 puntos). Umbral para prohibición de carrera es 12 puntos en 12 meses. Hamilton acumuló menos puntos a pesar de múltiples incidentes. Batalla Hamilton-Verstappen 2021 presentó agresión sin precedentes, múltiples colisiones (Silverstone, Monza, Arabia Saudita) y decisiones controvertidas de comisarios que moldearon estándares modernos de carreras F1.",
        de: "Bis Ende 2021 sammelte Verstappen 7 Strafpunkte auf seiner Superlizenz aus verschiedenen Vorfällen einschließlich Monza-Kollision (2 Punkte) und Saudi-Arabien-Bremstest (2 Punkte). Schwelle für Rennverbot ist 12 Punkte in 12 Monaten. Hamilton sammelte weniger Punkte trotz mehrerer Vorfälle. 2021 Hamilton-Verstappen-Schlacht zeigte beispiellose Aggression, mehrere Kollisionen (Silverstone, Monza, Saudi-Arabien) und kontroverse Rennleiter-Entscheidungen, die moderne F1-Rennstandards prägten.",
        nl: "Tegen einde 2021 verzamelde Verstappen 7 strafpunten op zijn superlicentie van verschillende incidenten inclusief Monza botsing (2 punten) en Saudi-Arabië remtest (2 punten). Drempel voor raceverbod is 12 punten in 12 maanden. Hamilton verzamelde minder punten ondanks meerdere incidenten. 2021 Hamilton-Verstappen strijd toonde ongekende agressie, meerdere botsingen (Silverstone, Monza, Saudi-Arabië) en controversiële stewards beslissingen die moderne F1 race standaarden vormden."
      }
    },
    {
      question: {
        en: "What was the specific corner where Vettel's deliberate Jerez 1997 collision with Villeneuve occurred?",
        es: "¿Cuál fue la curva específica donde ocurrió la colisión deliberada de Schumacher en Jerez 1997 con Villeneuve?",
        de: "Was war die spezifische Kurve, wo Schumachers absichtliche Jerez 1997-Kollision mit Villeneuve stattfand?",
        nl: "Wat was de specifieke bocht waar Schumacher's opzettelijke Jerez 1997 botsing met Villeneuve plaatsvond?"
      },
      options: [
        "Dry Sac corner (Turn 12/13 complex) - championship decider",
        "First corner collision",
        "Final chicane incident",
        "Turn 6 contact"
      ],
      correct: 0,
      explanation: {
        en: "At Jerez 1997 finale, Schumacher led Villeneuve by 1 point. When Villeneuve attacked at Dry Sac corner (Turn 12/13), Schumacher deliberately turned into him (similar to Adelaide 1994 vs Hill). Schumacher's Ferrari got stuck in gravel, DNF. Villeneuve continued with damage, finished 3rd, won championship. FIA disqualified Schumacher from entire 1997 standings for 'bringing sport into disrepute'. The incident cemented Schumacher's win-at-all-costs reputation.",
        es: "En final de Jerez 1997, Schumacher lideraba a Villeneuve por 1 punto. Cuando Villeneuve atacó en curva Dry Sac (curvas 12/13), Schumacher deliberadamente giró contra él (similar a Adelaide 1994 vs Hill). Ferrari de Schumacher quedó atascado en grava, DNF. Villeneuve continuó con daño, terminó 3º, ganó campeonato. FIA descalificó a Schumacher de toda clasificación 1997 por 'desacreditar deporte'. Incidente cementó reputación de ganar-a-toda-costa de Schumacher.",
        de: "Im Jerez 1997-Finale führte Schumacher Villeneuve mit 1 Punkt. Als Villeneuve in Dry Sac-Kurve (Kurve 12/13) angriff, lenkte Schumacher absichtlich in ihn (ähnlich Adelaide 1994 vs Hill). Schumachers Ferrari steckte in Kies fest, Ausfall. Villeneuve fuhr beschädigt weiter, wurde Dritter, gewann Meisterschaft. FIA disqualifizierte Schumacher von gesamter 1997-Wertung fürs 'Sport in Verruf bringen'. Vorfall zementierte Schumachers Gewinnen-um-jeden-Preis-Ruf.",
        nl: "Bij Jerez 1997 finale leidde Schumacher Villeneuve met 1 punt. Toen Villeneuve aanviel bij Dry Sac bocht (bocht 12/13), stuurde Schumacher opzettelijk in hem (vergelijkbaar met Adelaide 1994 vs Hill). Schumacher's Ferrari raakte vast in grind, DNF. Villeneuve reed beschadigd verder, eindigde 3e, won kampioenschap. FIA diskwalificeerde Schumacher van gehele 1997 klassement voor 'sport in diskrediet brengen'. Incident cementeerde Schumacher's winnen-koste-wat-kost reputatie."
      }
    },
    {
      question: {
        en: "How many race wins did Vettel have versus Webber during their Red Bull partnership 2009-2013?",
        es: "¿Cuántas victorias de carrera tuvo Vettel versus Webber durante su asociación en Red Bull 2009-2013?",
        de: "Wie viele Rennsiege hatte Vettel versus Webber während ihrer Red Bull-Partnerschaft 2009-2013?",
        nl: "Hoeveel raceoverwinningen had Vettel versus Webber tijdens hun Red Bull partnerschap 2009-2013?"
      },
      options: [
        "Vettel 38 wins, Webber 9 wins",
        "Vettel 30 wins, Webber 15 wins",
        "Vettel 35 wins, Webber 12 wins",
        "Vettel 40 wins, Webber 7 wins"
      ],
      correct: 0,
      explanation: {
        en: "During 2009-2013 Red Bull partnership, Vettel won 38 races while Webber won 9 - a 4:1 ratio. Vettel won 4 consecutive championships (2010-2013). Despite this dominance, key incidents poisoned their relationship: Turkey 2010 collision, Multi 21 Malaysia 2013, perceived team favoritism. Webber felt undervalued despite being competitive. He retired end of 2013, citing lack of respect and support. The rivalry showcased how team dynamics can destroy relationships even with clear #1 driver.",
        es: "Durante asociación Red Bull 2009-2013, Vettel ganó 38 carreras mientras Webber ganó 9 - proporción 4:1. Vettel ganó 4 campeonatos consecutivos (2010-2013). A pesar de este dominio, incidentes clave envenenaron su relación: colisión Turquía 2010, Multi 21 Malasia 2013, favoritismo de equipo percibido. Webber se sintió subvalorado a pesar de ser competitivo. Se retiró a fines de 2013, citando falta de respeto y apoyo. Rivalidad mostró cómo dinámica de equipo puede destruir relaciones incluso con claro piloto #1.",
        de: "Während 2009-2013 Red Bull-Partnerschaft gewann Vettel 38 Rennen, während Webber 9 gewann - 4:1-Verhältnis. Vettel gewann 4 aufeinanderfolgende Meisterschaften (2010-2013). Trotz dieser Dominanz vergifteten Schlüsselvorfälle ihre Beziehung: Türkei 2010-Kollision, Multi 21 Malaysia 2013, wahrgenommene Team-Bevorzugung. Webber fühlte sich unterbewertet trotz Wettbewerbsfähigkeit. Er trat Ende 2013 zurück, nannte Mangel an Respekt und Unterstützung. Rivalität zeigte, wie Teamdynamik Beziehungen zerstören kann selbst mit klarem #1-Fahrer.",
        nl: "Tijdens 2009-2013 Red Bull partnerschap won Vettel 38 races terwijl Webber 9 won - 4:1 verhouding. Vettel won 4 opeenvolgende kampioenschappen (2010-2013). Ondanks deze dominantie vergiftigden belangrijke incidenten hun relatie: Turkije 2010 botsing, Multi 21 Maleisië 2013, waargenomen team favoritisme. Webber voelde zich ondergewaardeerd ondanks competitief zijn. Hij stopte eind 2013, noemde gebrek aan respect en steun. Rivaliteit toonde hoe teamdynamiek relaties kan vernietigen zelfs met duidelijke #1 coureur."
      }
    },
    {
      question: {
        en: "What was the lap time delta between Senna and Prost during the 1993 Donington Park rain masterclass?",
        es: "¿Cuál fue el delta de tiempo de vuelta entre Senna y Prost durante la clase magistral de lluvia de Donington Park 1993?",
        de: "Was war das Rundenzeit-Delta zwischen Senna und Prost während der Donington Park 1993-Regen-Meisterklasse?",
        nl: "Wat was de rondetijd delta tussen Senna en Prost tijdens de Donington Park 1993 regen meesterklasse?"
      },
      options: [
        "Senna lapped Prost - over 1 lap advantage in wet conditions",
        "30 seconds gap",
        "1 minute gap",
        "They finished within 10 seconds"
      ],
      correct: 0,
      explanation: {
        en: "At Donington 1993, Senna delivered his legendary rain performance, starting 4th and leading by lap 1. He lapped nearly the entire field including rival Prost (Williams). The dominant Williams FW15C was unbeatable in dry but Senna's McLaren-Ford won by over 1 lap in wet. This humiliation hurt Prost deeply as Williams had superior technology. It was their final season as rivals - Prost retired end 1993, Senna died May 1994.",
        es: "En Donington 1993, Senna entregó su legendaria actuación bajo lluvia, comenzando 4º y liderando para vuelta 1. Dobló a casi todo el campo incluyendo rival Prost (Williams). Dominante Williams FW15C era imbatible en seco pero McLaren-Ford de Senna ganó por más de 1 vuelta en mojado. Esta humillación hirió profundamente a Prost ya que Williams tenía tecnología superior. Fue su temporada final como rivales - Prost se retiró a fines 1993, Senna murió mayo 1994.",
        de: "In Donington 1993 lieferte Senna seine legendäre Regen-Leistung, startete Vierter und führte ab Runde 1. Er überrundete fast das gesamte Feld einschließlich Rivale Prost (Williams). Der dominante Williams FW15C war im Trockenen unschlagbar, aber Sennas McLaren-Ford gewann mit über 1 Runde im Nassen. Diese Demütigung verletzte Prost tief, da Williams überlegene Technologie hatte. Es war ihre letzte Saison als Rivalen - Prost trat Ende 1993 zurück, Senna starb Mai 1994.",
        nl: "Bij Donington 1993 leverde Senna zijn legendarische regen prestatie, startend 4e en leidend tegen ronde 1. Hij rondde bijna het hele veld inclusief rivaal Prost (Williams). De dominante Williams FW15C was onverslaanbaar in droog maar Senna's McLaren-Ford won met meer dan 1 ronde in nat. Deze vernedering deed Prost diep pijn omdat Williams superieure technologie had. Het was hun laatste seizoen als rivalen - Prost stopte eind 1993, Senna stierf mei 1994."
      }
    },
    {
      question: {
        en: "What specific tire compound advantage did Hamilton have when he won Silverstone 2021 after the Verstappen collision?",
        es: "¿Qué ventaja específica de compuesto de neumático tuvo Hamilton cuando ganó Silverstone 2021 después de la colisión con Verstappen?",
        de: "Welchen spezifischen Reifenmischungs-Vorteil hatte Hamilton, als er Silverstone 2021 nach der Verstappen-Kollision gewann?",
        nl: "Welk specifiek bandenmengsel voordeel had Hamilton toen hij Silverstone 2021 won na de Verstappen botsing?"
      },
      options: [
        "Hard tires for long final stint vs Leclerc's worn mediums",
        "Soft vs medium compound",
        "Medium vs hard compound",
        "Same compound as rivals"
      ],
      correct: 0,
      explanation: {
        en: "After Verstappen's 51G Copse crash, Hamilton had front wing damage, pitted during red flag for repairs and hard tires. He served 10-second penalty during pit stop. On restart, he battled Leclerc (Ferrari) who was on aging medium tires. Hamilton's fresher hards gave him tire advantage in final stint. He passed Leclerc with 2 laps remaining, won. The victory cut Verstappen's championship lead from 33 to 8 points despite the penalty.",
        es: "Después del choque de 51G de Verstappen en Copse, Hamilton tenía daño en alerón delantero, entró a boxes durante bandera roja para reparaciones y neumáticos duros. Cumplió penalización de 10 segundos durante parada. En reinicio, luchó con Leclerc (Ferrari) quien estaba en neumáticos medios envejecidos. Duros más frescos de Hamilton le dieron ventaja de neumáticos en stint final. Pasó a Leclerc faltando 2 vueltas, ganó. Victoria redujo ventaja de campeonato de Verstappen de 33 a 8 puntos a pesar de penalización.",
        de: "Nach Verstappens 51G-Copse-Crash hatte Hamilton Frontflügelschaden, boxte während roter Flagge für Reparaturen und Hard-Reifen. Er verbüßte 10-Sekunden-Strafe während Boxenstopp. Beim Neustart kämpfte er mit Leclerc (Ferrari), der auf alternden Medium-Reifen war. Hamiltons frischere Hards gaben ihm Reifenvorteil im finalen Stint. Er überholte Leclerc 2 Runden vor Schluss, gewann. Sieg reduzierte Verstappens Meisterschaftsführung von 33 auf 8 Punkte trotz Strafe.",
        nl: "Na Verstappen's 51G Copse crash had Hamilton voorvleugel schade, pitste tijdens rode vlag voor reparaties en harde banden. Hij diende 10-seconden straf tijdens pitstop. Bij herstart vocht hij met Leclerc (Ferrari) die op verouderende medium banden was. Hamilton's versere harde gaven hem bandenvoordeel in laatste stint. Hij passeerde Leclerc met 2 rondes over, won. Overwinning verminderde Verstappen's kampioenschapsvoorsprong van 33 naar 8 punten ondanks straf."
      }
    },
    {
      question: {
        en: "How many races did it take for the Hamilton-Rosberg Mercedes rivalry to produce their first on-track collision in 2014?",
        es: "¿Cuántas carreras tomó para que la rivalidad Mercedes Hamilton-Rosberg produjera su primera colisión en pista en 2014?",
        de: "Wie viele Rennen dauerte es, bis die Hamilton-Rosberg Mercedes-Rivalität ihre erste On-Track-Kollision 2014 produzierte?",
        nl: "Hoeveel races duurde het voor de Hamilton-Rosberg Mercedes rivaliteit hun eerste on-track botsing in 2014 produceerde?"
      },
      options: [
        "14 races (Belgium 2014 - Rosberg's damaged wing punctured Hamilton)",
        "5 races",
        "10 races",
        "16 races (final race)"
      ],
      correct: 0,
      explanation: {
        en: "The first Hamilton-Rosberg collision occurred at Belgium 2014 (race 14). On lap 2, Rosberg attacked Hamilton into Les Combes. His damaged front wing punctured Hamilton's tire, causing DNF. Rosberg finished 2nd. Post-race, Rosberg admitted he 'could have backed out' but chose not to, wanting to 'prove a point' after Monaco/Hungary incidents. Mercedes confirmed he deliberately didn't avoid contact. This confession shocked F1 and destroyed their friendship permanently.",
        es: "Primera colisión Hamilton-Rosberg ocurrió en Bélgica 2014 (carrera 14). En vuelta 2, Rosberg atacó a Hamilton en Les Combes. Su alerón delantero dañado pinchó neumático de Hamilton, causando DNF. Rosberg terminó 2º. Después de carrera, Rosberg admitió que 'podría haberse echado atrás' pero eligió no hacerlo, queriendo 'probar un punto' después de incidentes Mónaco/Hungría. Mercedes confirmó que deliberadamente no evitó contacto. Esta confesión sorprendió a F1 y destruyó su amistad permanentemente.",
        de: "Erste Hamilton-Rosberg-Kollision ereignete sich in Belgien 2014 (Rennen 14). In Runde 2 griff Rosberg Hamilton in Les Combes an. Sein beschädigter Frontflügel durchstach Hamiltons Reifen, verursachte Ausfall. Rosberg wurde Zweiter. Nach Rennen gab Rosberg zu, er 'hätte ausweichen können', entschied sich aber dagegen, wollte 'Punkt beweisen' nach Monaco/Ungarn-Vorfällen. Mercedes bestätigte, er vermied absichtlich keinen Kontakt. Dieses Geständnis schockierte F1 und zerstörte ihre Freundschaft permanent.",
        nl: "Eerste Hamilton-Rosberg botsing vond plaats bij België 2014 (race 14). Op ronde 2 viel Rosberg Hamilton aan bij Les Combes. Zijn beschadigde voorvleugel lekte Hamilton's band, veroorzaakte DNF. Rosberg eindigde 2e. Na race gaf Rosberg toe dat hij 'had kunnen terugkrabbelen' maar koos ervoor niet te doen, wilde 'punt maken' na Monaco/Hongarije incidenten. Mercedes bevestigde hij vermeed opzettelijk geen contact. Deze bekentenis schokte F1 en vernietigde hun vriendschap permanent."
      }
    },
    {
      question: {
        en: "What was the exact championship points swing from the controversial Singapore 2017 start crash that eliminated Vettel?",
        es: "¿Cuál fue el cambio exacto de puntos de campeonato del controvertido choque de salida de Singapur 2017 que eliminó a Vettel?",
        de: "Was war der exakte Meisterschafts-Punkteschwung vom kontroversen Singapur 2017-Start-Crash, der Vettel eliminierte?",
        nl: "Wat was de exacte kampioenschapspunten swing van de controversiële Singapore 2017 start crash die Vettel elimineerde?"
      },
      options: [
        "28-point swing (Vettel +7 to Hamilton +21 lead)",
        "20-point swing",
        "15-point swing",
        "35-point swing"
      ],
      correct: 0,
      explanation: {
        en: "Before Singapore 2017, Vettel led Hamilton by 7 points. The lap 1 crash (Vettel-Raikkonen-Verstappen) gave Vettel 0 points, Hamilton won (25 points). This created a 28-point swing: from Vettel +7 to Hamilton +21. Ferrari/Vettel never recovered. Hamilton won next 4 races, extended lead to 59 points. He clinched 2017 championship with 2 races to spare. The Singapore incident was the pivotal moment that decided the title.",
        es: "Antes de Singapur 2017, Vettel lideraba a Hamilton por 7 puntos. Choque de vuelta 1 (Vettel-Raikkonen-Verstappen) dio a Vettel 0 puntos, Hamilton ganó (25 puntos). Esto creó cambio de 28 puntos: de Vettel +7 a Hamilton +21. Ferrari/Vettel nunca se recuperaron. Hamilton ganó siguientes 4 carreras, extendió ventaja a 59 puntos. Aseguró campeonato 2017 faltando 2 carreras. Incidente de Singapur fue momento crucial que decidió título.",
        de: "Vor Singapur 2017 führte Vettel Hamilton mit 7 Punkten. Runde-1-Crash (Vettel-Raikkonen-Verstappen) gab Vettel 0 Punkte, Hamilton gewann (25 Punkte). Dies schuf 28-Punkte-Schwung: von Vettel +7 zu Hamilton +21. Ferrari/Vettel erholten sich nie. Hamilton gewann nächste 4 Rennen, erweiterte Führung auf 59 Punkte. Er sicherte 2017-Meisterschaft mit 2 Rennen übrig. Singapur-Vorfall war entscheidender Moment, der Titel entschied.",
        nl: "Voor Singapore 2017 leidde Vettel Hamilton met 7 punten. Ronde 1 crash (Vettel-Raikkonen-Verstappen) gaf Vettel 0 punten, Hamilton won (25 punten). Dit creëerde 28-punten swing: van Vettel +7 naar Hamilton +21. Ferrari/Vettel herstelden nooit. Hamilton won volgende 4 races, breidde voorsprong uit tot 59 punten. Hij verzekerde 2017 kampioenschap met 2 races over. Singapore incident was cruciale moment dat titel besliste."
      }
    },
    {
      question: {
        en: "What was the specific McLaren team order code used at Austria 2002 that sparked the team orders ban?",
        es: "¿Cuál fue el código específico de órdenes de equipo de McLaren usado en Austria 2002 que provocó la prohibición de órdenes de equipo?",
        de: "Was war der spezifische McLaren-Teamorder-Code verwendet in Österreich 2002, der das Teamorder-Verbot auslöste?",
        nl: "Wat was de specifieke McLaren teamorder code gebruikt bij Oostenrijk 2002 die het teamorders verbod veroorzaakte?"
      },
      options: [
        "Ferrari incident, not McLaren - Barrichello let Schumacher pass meters before finish",
        "McLaren Code Alpha",
        "McLaren Multi strategy",
        "McLaren Hold position call"
      ],
      correct: 0,
      explanation: {
        en: "Austria 2002 was FERRARI, not McLaren. Barrichello dominated, leading comfortably. On final lap, Ferrari ordered him to let Schumacher pass. He complied meters before finish line. The blatant team orders sparked outrage, booing on podium. FIA fined Ferrari $1 million and subsequently banned team orders (Article 39.1) from 2003-2010. The ban was later reversed in 2011 after Ferrari's 'Fernando is faster than you' Germany 2010 incident showed the rule was unenforceable.",
        es: "Austria 2002 fue FERRARI, no McLaren. Barrichello dominó, liderando cómodamente. En última vuelta, Ferrari le ordenó dejar pasar a Schumacher. Cumplió metros antes de línea de meta. Órdenes de equipo flagrantes provocaron indignación, abucheos en podio. FIA multó a Ferrari $1 millón y posteriormente prohibió órdenes de equipo (Artículo 39.1) de 2003-2010. Prohibición fue luego revertida en 2011 después de incidente 'Fernando es más rápido que tú' Alemania 2010 de Ferrari mostró que regla era inaplicable.",
        de: "Österreich 2002 war FERRARI, nicht McLaren. Barrichello dominierte, führte komfortabel. In Schlussrunde befahl Ferrari ihm, Schumacher vorbei zu lassen. Er gehorchte Meter vor Ziellinie. Offenkundige Teamorders lösten Empörung aus, Buhrufe auf Podium. FIA bestrafte Ferrari mit $1 Million und verbot anschließend Teamorders (Artikel 39.1) von 2003-2010. Verbot wurde später 2011 aufgehoben, nachdem Ferraris 'Fernando ist schneller als du' Deutschland 2010-Vorfall zeigte, Regel war nicht durchsetzbar.",
        nl: "Oostenrijk 2002 was FERRARI, niet McLaren. Barrichello domineerde, leidde comfortabel. In laatste ronde beval Ferrari hem Schumacher te laten passeren. Hij voldeed meters voor finishlijn. Flagrante teamorders veroorzaakten verontwaardiging, boegeroep op podium. FIA beboette Ferrari $1 miljoen en verbood vervolgens teamorders (Artikel 39.1) van 2003-2010. Verbod werd later in 2011 omgekeerd nadat Ferrari's 'Fernando is sneller dan jij' Duitsland 2010 incident toonde dat regel niet handhaafbaar was."
      }
    },
    {
      question: {
        en: "How many lapped cars were between Hamilton and Verstappen when Masi made the controversial Abu Dhabi 2021 unlapping decision?",
        es: "¿Cuántos autos doblados estaban entre Hamilton y Verstappen cuando Masi tomó la controvertida decisión de desdoblar en Abu Dhabi 2021?",
        de: "Wie viele überrundete Autos waren zwischen Hamilton und Verstappen, als Masi die kontroverse Abu Dhabi 2021-Entrundungs-Entscheidung traf?",
        nl: "Hoeveel achterstandsrondes waren tussen Hamilton en Verstappen toen Masi de controversiële Abu Dhabi 2021 ontrond beslissing nam?"
      },
      options: [
        "5 lapped cars (Norris, Alonso, Ocon, Leclerc, Vettel)",
        "3 lapped cars",
        "7 lapped cars",
        "All lapped cars"
      ],
      correct: 0,
      explanation: {
        en: "When Latifi crashed lap 53, 5 lapped cars sat between Hamilton (P1) and Verstappen (P2): Norris, Alonso, Ocon, Leclerc, Vettel. Initially Masi said lapped cars wouldn't unlap. Then he reversed, allowing ONLY these 5 to pass (not all lapped cars per regulations). He then immediately called 'safety car in this lap' instead of following lap. This gave Verstappen one final lap on fresh softs vs Hamilton's 40-lap-old hards. Unprecedented decision changed championship.",
        es: "Cuando Latifi se estrelló vuelta 53, 5 autos doblados estaban entre Hamilton (P1) y Verstappen (P2): Norris, Alonso, Ocon, Leclerc, Vettel. Inicialmente Masi dijo que autos doblados no se desdoblarían. Luego revirtió, permitiendo SOLO estos 5 pasar (no todos los autos doblados según regulaciones). Luego inmediatamente llamó 'coche de seguridad en esta vuelta' en lugar de siguiente vuelta. Esto dio a Verstappen una última vuelta en blandos frescos vs duros de 40 vueltas de Hamilton. Decisión sin precedentes cambió campeonato.",
        de: "Als Latifi Runde 53 crashte, saßen 5 überrundete Autos zwischen Hamilton (P1) und Verstappen (P2): Norris, Alonso, Ocon, Leclerc, Vettel. Zunächst sagte Masi, überrundete Autos würden nicht entrundet. Dann kehrte er um, erlaubte NUR diesen 5 zu passieren (nicht alle überrundeten Autos laut Regeln). Er rief dann sofort 'Safety Car in dieser Runde' statt Folgerunde. Dies gab Verstappen eine finale Runde auf frischen Softs vs Hamiltons 40-Runden-alte Hards. Beispiellose Entscheidung änderte Meisterschaft.",
        nl: "Toen Latifi crashte ronde 53, zaten 5 achterstandsrondes tussen Hamilton (P1) en Verstappen (P2): Norris, Alonso, Ocon, Leclerc, Vettel. Aanvankelijk zei Masi achterstandsrondes zouden niet ontronden. Toen keerde hij om, stond ALLEEN deze 5 toe te passeren (niet alle achterstandsrondes per regels). Hij riep toen onmiddellijk 'safety car in deze ronde' in plaats van volgende ronde. Dit gaf Verstappen één laatste ronde op verse zachte vs Hamilton's 40-rondes-oude harde. Ongekende beslissing veranderde kampioenschap."
      }
    },
    {
      question: {
        en: "What was the exact grid penalty Alonso received for the 2007 Hungary qualifying incident blocking Hamilton?",
        es: "¿Cuál fue la penalización exacta de parrilla que Alonso recibió por el incidente de clasificación de Hungría 2007 bloqueando a Hamilton?",
        de: "Was war die exakte Gridstrafe, die Alonso für den 2007 Ungarn-Qualifying-Vorfall erhielt, Hamilton blockierend?",
        nl: "Wat was de exacte gridstraf die Alonso kreeg voor het 2007 Hongarije kwalificatie incident dat Hamilton blokkeerde?"
      },
      options: [
        "5-place grid drop (pole to P6) plus pole time deleted",
        "10-place grid penalty",
        "3-place grid penalty",
        "Back of grid penalty"
      ],
      correct: 0,
      explanation: {
        en: "At Hungary 2007 Q3, Alonso deliberately held Hamilton in pits for ~20 seconds, preventing Hamilton's final flying lap (retaliation for perceived team favoritism). Alonso took pole but stewards deleted his time and gave 5-place grid penalty, dropping him to P6. Hamilton started P1, won race. The incident epitomized their toxic 2007 McLaren relationship. Alonso left McLaren after one season, unable to accept being matched by rookie Hamilton. Spygate scandal also tainted this season.",
        es: "En Q3 de Hungría 2007, Alonso deliberadamente retuvo a Hamilton en boxes por ~20 segundos, evitando última vuelta rápida de Hamilton (represalia por favoritismo de equipo percibido). Alonso tomó pole pero comisarios borraron su tiempo y dieron penalización de parrilla de 5 lugares, bajándolo a P6. Hamilton comenzó P1, ganó carrera. Incidente ejemplificó su tóxica relación McLaren 2007. Alonso dejó McLaren después de una temporada, incapaz de aceptar ser igualado por novato Hamilton. Escándalo Spygate también manchó esta temporada.",
        de: "In Ungarn 2007 Q3 hielt Alonso Hamilton absichtlich ~20 Sekunden in Box, verhinderte Hamiltons finale fliegende Runde (Vergeltung für wahrgenommene Team-Bevorzugung). Alonso holte Pole, aber Rennleiter löschten seine Zeit und gaben 5-Plätze-Gridstrafe, ließen ihn auf P6 fallen. Hamilton startete P1, gewann Rennen. Vorfall verkörperte ihre toxische 2007 McLaren-Beziehung. Alonso verließ McLaren nach einer Saison, unfähig zu akzeptieren, von Rookie Hamilton egalisiert zu werden. Spygate-Skandal befleckte auch diese Saison.",
        nl: "Bij Hongarije 2007 Q3 hield Alonso Hamilton opzettelijk ~20 seconden in pits, voorkwam Hamilton's laatste vliegende ronde (vergelding voor waargenomen team favoritisme). Alonso pakte pole maar stewards verwijderden zijn tijd en gaven 5-plaatsen gridstraf, lieten hem vallen naar P6. Hamilton startte P1, won race. Incident belichaamde hun toxische 2007 McLaren relatie. Alonso verliet McLaren na één seizoen, niet in staat te accepteren geëvenaard te worden door rookie Hamilton. Spygate schandaal bevlekte ook dit seizoen."
      }
    },
    {
      question: {
        en: "What was the specific turn number where Prost and Senna collided at Suzuka 1990 Turn 1?",
        es: "¿Cuál fue el número de curva específico donde Prost y Senna colisionaron en la curva 1 de Suzuka 1990?",
        de: "Was war die spezifische Kurvennummer, wo Prost und Senna in Suzuka 1990 Kurve 1 kollidierten?",
        nl: "Wat was het specifieke bochtnummer waar Prost en Senna botsten bij Suzuka 1990 bocht 1?"
      },
      options: [
        "Turn 1 (first corner) - Senna drove into Prost deliberately from pole",
        "Turn 3 (Dunlop)",
        "Turn 6 (Degner 1)",
        "Turn 14 (chicane)"
      ],
      correct: 0,
      explanation: {
        en: "At Suzuka 1990, Senna had pole but FIA refused to move pole position to cleaner side (favoring Prost's P2). Prost got better start from P2, led into Turn 1. Senna deliberately drove into Prost's Ferrari, both crashed out immediately. Senna won championship. He later admitted it was premeditated revenge for 1989's 'unfair' disqualification. The crash remains F1's most blatant act of deliberate collision, showcasing win-at-all-costs mentality and bitter Senna-Prost hatred.",
        es: "En Suzuka 1990, Senna tenía pole pero FIA se negó a mover posición de pole a lado más limpio (favoreciendo P2 de Prost). Prost obtuvo mejor salida desde P2, lideró en curva 1. Senna deliberadamente condujo contra Ferrari de Prost, ambos se estrellaron inmediatamente. Senna ganó campeonato. Más tarde admitió que fue venganza premeditada por descalificación 'injusta' de 1989. Choque sigue siendo acto más flagrante de colisión deliberada de F1, mostrando mentalidad de ganar-a-toda-costa y amargo odio Senna-Prost.",
        de: "In Suzuka 1990 hatte Senna Pole, aber FIA weigerte sich, Pole-Position auf sauberere Seite zu verschieben (begünstigte Prosts P2). Prost bekam besseren Start von P2, führte in Kurve 1. Senna fuhr absichtlich in Prosts Ferrari, beide crashten sofort. Senna gewann Meisterschaft. Er gab später zu, es war vorsätzliche Rache für 1989s 'unfaire' Disqualifikation. Crash bleibt F1s offenkundigster Akt absichtlicher Kollision, zeigt Gewinnen-um-jeden-Preis-Mentalität und bitterer Senna-Prost-Hass.",
        nl: "Bij Suzuka 1990 had Senna pole maar FIA weigerde pole positie te verplaatsen naar schonere kant (begunstigde Prost's P2). Prost kreeg betere start vanaf P2, leidde naar bocht 1. Senna reed opzettelijk in Prost's Ferrari, beiden crashten onmiddellijk. Senna won kampioenschap. Hij gaf later toe dat het opzettelijke wraak was voor 1989's 'oneerlijke' diskwalificatie. Crash blijft F1's meest flagrante daad van opzettelijke botsing, toont winnen-koste-wat-kost mentaliteit en bittere Senna-Prost haat."
      }
    },
    {
      question: {
        en: "How many race wins did Hamilton achieve in 2007 rookie season versus Alonso at McLaren?",
        es: "¿Cuántas victorias de carrera logró Hamilton en la temporada de novato 2007 versus Alonso en McLaren?",
        de: "Wie viele Rennsiege erzielte Hamilton in der Rookie-Saison 2007 versus Alonso bei McLaren?",
        nl: "Hoeveel raceoverwinningen behaalde Hamilton in 2007 rookie seizoen versus Alonso bij McLaren?"
      },
      options: [
        "Hamilton 4 wins, Alonso 4 wins (tied)",
        "Hamilton 5 wins, Alonso 3 wins",
        "Hamilton 3 wins, Alonso 5 wins",
        "Hamilton 6 wins, Alonso 2 wins"
      ],
      correct: 0,
      explanation: {
        en: "In 2007, rookie Hamilton and two-time champion Alonso each won 4 races at McLaren, perfectly matched. They also tied on 109 points (Raikkonen won title with 110). The equal performance devastated Alonso's ego - being matched by a rookie was unacceptable. Hungary qualifying incident, Spygate scandal involvement, perceived team favoritism toward Hamilton all contributed to toxic relationship. Alonso left McLaren after one season. Their rivalry proved even legends can't handle being equaled by rookies.",
        es: "En 2007, novato Hamilton y bicampeón Alonso ganaron cada uno 4 carreras en McLaren, perfectamente igualados. También empataron en 109 puntos (Raikkonen ganó título con 110). Actuación igual devastó ego de Alonso - ser igualado por novato fue inaceptable. Incidente clasificación Hungría, participación en escándalo Spygate, favoritismo de equipo percibido hacia Hamilton contribuyeron a relación tóxica. Alonso dejó McLaren después de una temporada. Su rivalidad probó que incluso leyendas no pueden manejar ser igualadas por novatos.",
        de: "2007 gewannen Rookie Hamilton und zweifacher Champion Alonso je 4 Rennen bei McLaren, perfekt ausgeglichen. Sie banden auch bei 109 Punkten (Raikkonen gewann Titel mit 110). Gleiche Leistung verwüstete Alonsos Ego - von Rookie egalisiert zu werden war inakzeptabel. Ungarn-Qualifying-Vorfall, Spygate-Skandal-Beteiligung, wahrgenommene Team-Bevorzugung gegenüber Hamilton trugen zu toxischer Beziehung bei. Alonso verließ McLaren nach einer Saison. Ihre Rivalität bewies, selbst Legenden können es nicht ertragen, von Rookies egalisiert zu werden.",
        nl: "In 2007 wonnen rookie Hamilton en tweevoudig kampioen Alonso elk 4 races bij McLaren, perfect gelijk. Ze waren ook gebonden op 109 punten (Raikkonen won titel met 110). Gelijke prestatie verwoestte Alonso's ego - gelijk gemaakt worden door rookie was onaanvaardbaar. Hongarije kwalificatie incident, Spygate schandaal betrokkenheid, waargenomen team favoritisme naar Hamilton droegen bij aan toxische relatie. Alonso verliet McLaren na één seizoen. Hun rivaliteit bewees zelfs legendes kunnen niet omgaan met gelijk gemaakt worden door rookies."
      }
    },
    {
      question: {
        en: "What was the specific race control decision that allowed Verstappen to pit under safety car at Abu Dhabi 2021?",
        es: "¿Cuál fue la decisión específica de control de carrera que permitió a Verstappen entrar a boxes bajo coche de seguridad en Abu Dhabi 2021?",
        de: "Was war die spezifische Rennleitungs-Entscheidung, die Verstappen erlaubte, unter Safety Car in Abu Dhabi 2021 zu boxen?",
        nl: "Wat was de specifieke racecontrole beslissing die Verstappen toestond te pitsen onder safety car bij Abu Dhabi 2021?"
      },
      options: [
        "Normal safety car rules - any driver can pit, Hamilton chose track position",
        "Special allowance only for P2",
        "Red Bull request granted",
        "FIA directive for entertainment"
      ],
      correct: 0,
      explanation: {
        en: "Under normal safety car rules, any driver can pit. When Latifi crashed lap 53, Verstappen (P2) pitted for fresh soft tires, losing track position but gaining tire advantage. Hamilton (P1) stayed out, keeping lead but on 40-lap-old hard tires. Mercedes calculated safety car wouldn't finish in time for racing lap. Masi's controversial decisions (allowing only some lapped cars to unlap, immediate restart) negated Mercedes' strategy, giving Verstappen final-lap advantage that won championship.",
        es: "Bajo reglas normales de coche de seguridad, cualquier piloto puede entrar a boxes. Cuando Latifi se estrelló vuelta 53, Verstappen (P2) entró a boxes por neumáticos blandos frescos, perdiendo posición en pista pero ganando ventaja de neumáticos. Hamilton (P1) se quedó fuera, manteniendo liderazgo pero en neumáticos duros de 40 vueltas. Mercedes calculó que coche de seguridad no terminaría a tiempo para vuelta de carrera. Decisiones controvertidas de Masi (permitir solo algunos autos doblados desdoblar, reinicio inmediato) negaron estrategia de Mercedes, dando a Verstappen ventaja de última vuelta que ganó campeonato.",
        de: "Unter normalen Safety-Car-Regeln kann jeder Fahrer boxen. Als Latifi Runde 53 crashte, boxte Verstappen (P2) für frische Soft-Reifen, verlor Streckenposition, gewann aber Reifenvorteil. Hamilton (P1) blieb draußen, behielt Führung aber auf 40-Runden-alten Hard-Reifen. Mercedes berechnete, Safety Car würde nicht rechtzeitig für Rennrunde enden. Masis kontroverse Entscheidungen (nur einige überrundete Autos entrunden lassen, sofortiger Neustart) negierten Mercedes-Strategie, gaben Verstappen Schlussrunden-Vorteil, der Meisterschaft gewann.",
        nl: "Onder normale safety car regels kan elke coureur pitsen. Toen Latifi crashte ronde 53, pitste Verstappen (P2) voor verse zachte banden, verloor baanpositie maar won bandenvoordeel. Hamilton (P1) bleef buiten, behield leiding maar op 40-rondes-oude harde banden. Mercedes berekende safety car zou niet op tijd eindigen voor raceronde. Masi's controversiële beslissingen (alleen sommige achterliggers laten ontronden, onmiddellijke herstart) negeerden Mercedes strategie, gaven Verstappen laatste-ronde voordeel dat kampioenschap won."
      }
    },
    {
      question: {
        en: "What was the exact finishing position of both Ferrari drivers after the controversial Austria 2002 team orders?",
        es: "¿Cuál fue la posición exacta de finalización de ambos pilotos de Ferrari después de las controvertidas órdenes de equipo de Austria 2002?",
        de: "Was war die exakte Zielposition beider Ferrari-Fahrer nach den kontroversen Österreich 2002-Teamorders?",
        nl: "Wat was de exacte eindpositie van beide Ferrari coureurs na de controversiële Oostenrijk 2002 teamorders?"
      },
      options: [
        "Schumacher 1st, Barrichello 2nd (team orders on final straight)",
        "Both DNF after collision",
        "Barrichello 1st, Schumacher 2nd",
        "Schumacher 1st, Barrichello 3rd"
      ],
      correct: 0,
      explanation: {
        en: "At Austria 2002, Barrichello dominated and was set to win. On final straight, team ordered him to let Schumacher pass. Barrichello reluctantly slowed meters before finish, Schumacher won, Barrichello 2nd. The blatant manipulation sparked massive outrage, booing on podium. Schumacher awkwardly pushed Barrichello to top step. FIA fined Ferrari $1 million and banned team orders 2003-2010. The incident remains F1's most controversial team orders moment, highlighting sport vs. business tension.",
        es: "En Austria 2002, Barrichello dominó y estaba listo para ganar. En recta final, equipo le ordenó dejar pasar a Schumacher. Barrichello reacio frenó metros antes de meta, Schumacher ganó, Barrichello 2º. Manipulación flagrante provocó indignación masiva, abucheos en podio. Schumacher torpemente empujó a Barrichello al escalón superior. FIA multó a Ferrari $1 millón y prohibió órdenes de equipo 2003-2010. Incidente sigue siendo momento de órdenes de equipo más controvertido de F1, destacando tensión deporte vs negocio.",
        de: "In Österreich 2002 dominierte Barrichello und war auf Sieg eingestellt. Auf Zielgerade befahl Team ihm, Schumacher vorbei zu lassen. Barrichello verlangsamte widerwillig Meter vor Ziel, Schumacher gewann, Barrichello Zweiter. Offenkundige Manipulation löste massive Empörung aus, Buhrufe auf Podium. Schumacher schob Barrichello unbeholfen auf oberste Stufe. FIA bestrafte Ferrari mit $1 Million und verbot Teamorders 2003-2010. Vorfall bleibt F1s kontroversiester Teamorder-Moment, hebt Sport-vs-Business-Spannung hervor.",
        nl: "Bij Oostenrijk 2002 domineerde Barrichello en stond op punt te winnen. Op eindrechte beval team hem Schumacher te laten passeren. Barrichello vertraagde met tegenzin meters voor finish, Schumacher won, Barrichello 2e. Flagrante manipulatie veroorzaakte massale verontwaardiging, boegeroep op podium. Schumacher duwde Barrichello onhandig naar bovenste trede. FIA beboette Ferrari $1 miljoen en verbood teamorders 2003-2010. Incident blijft F1's meest controversiële teamorders moment, benadrukt sport vs business spanning."
      }
    },
    {
      question: {
        en: "How many seconds did Rosberg hold off Vettel/Verstappen at Abu Dhabi 2016 while Hamilton backed him up?",
        es: "¿Cuántos segundos mantuvo Rosberg a Vettel/Verstappen en Abu Dhabi 2016 mientras Hamilton lo retrasaba?",
        de: "Wie viele Sekunden hielt Rosberg Vettel/Verstappen in Abu Dhabi 2016 ab, während Hamilton ihn zurückhielt?",
        nl: "Hoeveel seconden hield Rosberg Vettel/Verstappen af bij Abu Dhabi 2016 terwijl Hamilton hem terugdreef?"
      },
      options: [
        "Vettel closed to 1.9 seconds behind Rosberg by finish",
        "5 seconds gap maintained",
        "10 seconds comfortable margin",
        "Vettel passed Rosberg for P2"
      ],
      correct: 0,
      explanation: {
        en: "At Abu Dhabi 2016, Hamilton deliberately slowed, backing Rosberg into Vettel/Verstappen. By finish: Hamilton P1, Rosberg P2, Vettel P3 only 1.9 seconds behind Rosberg. Verstappen was P4, 2.3s behind Vettel. Hamilton's tactic nearly worked - Vettel was closing fast but ran out of laps. Mercedes team radio repeatedly told Hamilton to speed up, he refused. Rosberg held on, won championship by 5 points. The risky gambit showcased Hamilton's desperation.",
        es: "En Abu Dhabi 2016, Hamilton deliberadamente frenó, llevando a Rosberg hacia Vettel/Verstappen. Al final: Hamilton P1, Rosberg P2, Vettel P3 solo 1.9 segundos detrás de Rosberg. Verstappen estaba P4, 2.3s detrás de Vettel. Táctica de Hamilton casi funcionó - Vettel se acercaba rápido pero se quedó sin vueltas. Radio de equipo de Mercedes repetidamente dijo a Hamilton acelerar, se negó. Rosberg aguantó, ganó campeonato por 5 puntos. Arriesgada apuesta mostró desesperación de Hamilton.",
        de: "In Abu Dhabi 2016 verlangsamte Hamilton absichtlich, drängte Rosberg in Vettel/Verstappen. Beim Finish: Hamilton P1, Rosberg P2, Vettel P3 nur 1,9 Sekunden hinter Rosberg. Verstappen war P4, 2,3s hinter Vettel. Hamiltons Taktik funktionierte fast - Vettel holte schnell auf, gingen aber Runden aus. Mercedes-Teamfunk sagte Hamilton wiederholt zu beschleunigen, er weigerte sich. Rosberg hielt durch, gewann Meisterschaft mit 5 Punkten. Riskantes Gambit zeigte Hamiltons Verzweiflung.",
        nl: "Bij Abu Dhabi 2016 vertraagde Hamilton opzettelijk, dreef Rosberg terug in Vettel/Verstappen. Bij finish: Hamilton P1, Rosberg P2, Vettel P3 slechts 1,9 seconden achter Rosberg. Verstappen was P4, 2,3s achter Vettel. Hamilton's tactiek werkte bijna - Vettel sloot snel maar ronden raakten op. Mercedes teamradio vertelde Hamilton herhaaldelijk te versnellen, hij weigerde. Rosberg hield stand, won kampioenschap met 5 punten. Riskante gok toonde Hamilton's wanhoop."
      }
    },
    {
      question: {
        en: "What was the specific FIA penalty Schumacher received for the Jerez 1997 Villeneuve collision?",
        es: "¿Cuál fue la penalización específica de la FIA que Schumacher recibió por la colisión con Villeneuve en Jerez 1997?",
        de: "Was war die spezifische FIA-Strafe, die Schumacher für die Jerez 1997 Villeneuve-Kollision erhielt?",
        nl: "Wat was de specifieke FIA straf die Schumacher kreeg voor de Jerez 1997 Villeneuve botsing?"
      },
      options: [
        "Disqualified from entire 1997 championship standings (kept race wins)",
        "1-race ban",
        "Points deduction only",
        "Grid penalty for 1998"
      ],
      correct: 0,
      explanation: {
        en: "FIA disqualified Schumacher from the entire 1997 championship standings for deliberately colliding with Villeneuve at Jerez. He kept his race wins but scored 0 championship points. The penalty cited 'bringing the sport into disrepute'. This was unprecedented - never before had a driver been removed from entire season standings for on-track incident. The decision followed similar Adelaide 1994 vs Hill controversy. It established FIA's willingness to punish deliberate collisions harshly.",
        es: "FIA descalificó a Schumacher de toda clasificación de campeonato 1997 por colisionar deliberadamente con Villeneuve en Jerez. Mantuvo sus victorias de carrera pero anotó 0 puntos de campeonato. Penalización citó 'desacreditar deporte'. Esto fue sin precedentes - nunca antes un piloto había sido removido de clasificación de temporada completa por incidente en pista. Decisión siguió controversia similar Adelaide 1994 vs Hill. Estableció disposición de FIA de castigar colisiones deliberadas duramente.",
        de: "FIA disqualifizierte Schumacher von gesamter 1997-Meisterschaftswertung fürs absichtliche Kollision mit Villeneuve in Jerez. Er behielt seine Rennsiege, erzielte aber 0 Meisterschaftspunkte. Strafe nannte 'Sport in Verruf bringen'. Dies war beispiellos - nie zuvor wurde Fahrer von gesamter Saisonwertung für On-Track-Vorfall entfernt. Entscheidung folgte ähnlicher Adelaide 1994 vs Hill-Kontroverse. Es etablierte FIAs Bereitschaft, absichtliche Kollisionen hart zu bestrafen.",
        nl: "FIA diskwalificeerde Schumacher van gehele 1997 kampioenschapsklassement voor opzettelijk botsen met Villeneuve bij Jerez. Hij behield zijn raceoverwinningen maar scoorde 0 kampioenschapspunten. Straf vermeldde 'sport in diskrediet brengen'. Dit was ongekend - nooit eerder was coureur verwijderd van gehele seizoen klassement voor on-track incident. Beslissing volgde vergelijkbare Adelaide 1994 vs Hill controverse. Het vestigde FIA's bereidheid opzettelijke botsingen zwaar te straffen."
      }
    },
    {
      question: {
        en: "What was the exact tire strategy difference between Prost and Lauda at the 1984 Monaco rain-shortened race?",
        es: "¿Cuál fue la diferencia exacta de estrategia de neumáticos entre Prost y Lauda en la carrera acortada por lluvia de Mónaco 1984?",
        de: "Was war der exakte Reifenstrategie-Unterschied zwischen Prost und Lauda beim regenverkürzten Monaco 1984-Rennen?",
        nl: "Wat was het exacte bandenstrategie verschil tussen Prost en Lauda bij de regen-verkorte Monaco 1984 race?"
      },
      options: [
        "Both on wet tires, race red-flagged lap 31 due to conditions",
        "Prost on intermediates, Lauda on full wets",
        "Different wet tire compounds",
        "Prost gambled on slicks"
      ],
      correct: 0,
      explanation: {
        en: "At Monaco 1984, both McLaren drivers ran wet tires in torrential rain. Prost led from pole (despite McLaren giving both cars Lauda's preferred wing setup, angering Prost). Race was red-flagged lap 31/78 due to dangerous conditions. Only half points awarded: Prost got 4.5 for win instead of 9. Lauda finished 2nd, got 3 points. This half-point difference proved crucial - Lauda won championship by 0.5 points (72 vs 71.5), F1's closest margin ever.",
        es: "En Mónaco 1984, ambos pilotos de McLaren corrieron neumáticos mojados en lluvia torrencial. Prost lideró desde pole (a pesar de que McLaren dio a ambos autos configuración de alerón preferida de Lauda, enfureciendo a Prost). Carrera fue bandera roja vuelta 31/78 debido a condiciones peligrosas. Solo medios puntos otorgados: Prost obtuvo 4.5 por victoria en lugar de 9. Lauda terminó 2º, obtuvo 3 puntos. Esta diferencia de medio punto resultó crucial - Lauda ganó campeonato por 0.5 puntos (72 vs 71.5), margen más cercano de F1.",
        de: "In Monaco 1984 fuhren beide McLaren-Fahrer Regenreifen im Starkregen. Prost führte von Pole (trotz McLaren gab beiden Autos Laudas bevorzugtes Flügel-Setup, ärgerte Prost). Rennen wurde Runde 31/78 abgebrochen wegen gefährlicher Bedingungen. Nur halbe Punkte vergeben: Prost bekam 4,5 für Sieg statt 9. Lauda wurde Zweiter, bekam 3 Punkte. Dieser halbe Punkt erwies sich als entscheidend - Lauda gewann Meisterschaft mit 0,5 Punkten (72 vs 71,5), F1s knappster Abstand überhaupt.",
        nl: "Bij Monaco 1984 reden beide McLaren coureurs natte banden in stortbui. Prost leidde vanaf pole (ondanks McLaren gaf beide auto's Lauda's voorkeursafstelling vleugel, maakte Prost boos). Race werd afgevlagd ronde 31/78 wegens gevaarlijke omstandigheden. Alleen halve punten toegekend: Prost kreeg 4,5 voor winst in plaats van 9. Lauda eindigde 2e, kreeg 3 punten. Dit halve punt bleek cruciaal - Lauda won kampioenschap met 0,5 punten (72 vs 71,5), F1's kleinste marge ooit."
      }
    },
    {
      question: {
        en: "How many different F1 teams had Prost driven for before joining McLaren to partner Senna in 1988?",
        es: "¿Para cuántos equipos diferentes de F1 había conducido Prost antes de unirse a McLaren para asociarse con Senna en 1988?",
        de: "Für wie viele verschiedene F1-Teams war Prost gefahren, bevor er zu McLaren kam, um 1988 Partner von Senna zu werden?",
        nl: "Voor hoeveel verschillende F1 teams had Prost gereden voor hij bij McLaren kwam om partner te worden van Senna in 1988?"
      },
      options: [
        "3 teams: McLaren (1980), Renault (1981-83), McLaren again (1984-89)",
        "2 teams only",
        "4 teams",
        "Only McLaren"
      ],
      correct: 0,
      explanation: {
        en: "Prost drove for McLaren briefly in 1980 (failed test), Renault 1981-83 (2 championships narrowly lost), then joined McLaren 1984-89 (2 championships won partnering Lauda, then Rosberg, then Senna 1988-89). When Senna joined 1988, Prost was established #1, 2-time champion. The pairing created F1's most intense rivalry. Prost's experience and political skills versus Senna's raw speed and ruthlessness produced legendary battles: Suzuka 1989, Suzuka 1990, Imola 1988 trust-breaking, Estoril 1988 kamikaze pass.",
        es: "Prost condujo para McLaren brevemente en 1980 (prueba fallida), Renault 1981-83 (2 campeonatos perdidos por poco), luego se unió a McLaren 1984-89 (2 campeonatos ganados asociándose con Lauda, luego Rosberg, luego Senna 1988-89). Cuando Senna se unió en 1988, Prost era establecido #1, bicampeón. Emparejamiento creó rivalidad más intensa de F1. Experiencia y habilidades políticas de Prost versus velocidad pura y despiadado de Senna produjeron batallas legendarias: Suzuka 1989, Suzuka 1990, Imola 1988 rompimiento de confianza, Estoril 1988 pase kamikaze.",
        de: "Prost fuhr kurz für McLaren 1980 (gescheiterter Test), Renault 1981-83 (2 Meisterschaften knapp verloren), dann kam zu McLaren 1984-89 (2 Meisterschaften gewonnen mit Partner Lauda, dann Rosberg, dann Senna 1988-89). Als Senna 1988 kam, war Prost etablierter #1, zweifacher Champion. Paarung schuf F1s intensivste Rivalität. Prosts Erfahrung und politische Fähigkeiten versus Sennas rohe Geschwindigkeit und Rücksichtslosigkeit produzierten legendäre Kämpfe: Suzuka 1989, Suzuka 1990, Imola 1988 Vertrauensbruch, Estoril 1988 Kamikaze-Überholmanöver.",
        nl: "Prost reed kort voor McLaren in 1980 (mislukte test), Renault 1981-83 (2 kampioenschappen nipt verloren), kwam toen bij McLaren 1984-89 (2 kampioenschappen gewonnen partnerend met Lauda, toen Rosberg, toen Senna 1988-89). Toen Senna in 1988 kwam, was Prost gevestigd #1, tweevoudig kampioen. Koppeling creëerde F1's meest intense rivaliteit. Prost's ervaring en politieke vaardigheden versus Senna's rauwe snelheid en meedogenloosheid produceerden legendarische gevechten: Suzuka 1989, Suzuka 1990, Imola 1988 vertrouwensbreuk, Estoril 1988 kamikaze inhaalmanoeuvre."
      }
    },
    {
      question: {
        en: "What was the specific McLaren internal agreement about race starts that Senna broke at Imola 1988?",
        es: "¿Cuál fue el acuerdo interno específico de McLaren sobre salidas de carrera que Senna rompió en Imola 1988?",
        de: "Was war die spezifische McLaren-interne Vereinbarung über Rennstarts, die Senna in Imola 1988 brach?",
        nl: "Wat was de specifieke McLaren interne overeenkomst over racestarts die Senna brak bij Imola 1988?"
      },
      options: [
        "No passing first corner rule - Senna changed it from Tamburello to Tosa secretly",
        "Equal engine modes agreement",
        "Team orders for championship leader",
        "No overtaking entire first lap"
      ],
      correct: 0,
      explanation: {
        en: "McLaren had pre-season agreement: whoever led into first corner wouldn't be challenged that race. At Imola 1988, Senna led into Tamburello (Turn 1). Prost, faster on different strategy, caught him but honored agreement. Post-race, Prost discovered Senna had secretly lobbied team to change 'first corner' from Tamburello to Tosa chicane (Turn 2/3), giving Senna freedom to defend at Tamburello. This betrayal destroyed trust from season opener, poisoned their relationship permanently.",
        es: "McLaren tenía acuerdo de pretemporada: quien liderara en primera curva no sería desafiado esa carrera. En Imola 1988, Senna lideró en Tamburello (curva 1). Prost, más rápido en estrategia diferente, lo alcanzó pero honró acuerdo. Después de carrera, Prost descubrió que Senna había presionado secretamente al equipo para cambiar 'primera curva' de Tamburello a chicane Tosa (curvas 2/3), dando a Senna libertad de defender en Tamburello. Esta traición destruyó confianza desde apertura de temporada, envenenó su relación permanentemente.",
        de: "McLaren hatte Vorsaison-Vereinbarung: wer in erste Kurve führt, wird dieses Rennen nicht herausgefordert. In Imola 1988 führte Senna in Tamburello (Kurve 1). Prost, schneller auf anderer Strategie, holte ihn ein, ehrte aber Vereinbarung. Nach Rennen entdeckte Prost, Senna hatte heimlich beim Team lobbyiert, 'erste Kurve' von Tamburello zu Tosa-Schikane (Kurve 2/3) zu ändern, gab Senna Freiheit in Tamburello zu verteidigen. Dieser Verrat zerstörte Vertrauen ab Saisonauftakt, vergiftete ihre Beziehung permanent.",
        nl: "McLaren had pre-seizoen overeenkomst: wie in eerste bocht leidde zou die race niet uitgedaagd worden. Bij Imola 1988 leidde Senna naar Tamburello (bocht 1). Prost, sneller op verschillende strategie, haalde hem in maar respecteerde overeenkomst. Na race ontdekte Prost dat Senna in het geheim bij team had gelobbyd om 'eerste bocht' te wijzigen van Tamburello naar Tosa chicane (bocht 2/3), gaf Senna vrijheid te verdedigen bij Tamburello. Dit verraad vernietigde vertrouwen vanaf seizoensopener, vergiftigde hun relatie permanent."
      }
    },
    {
      question: {
        en: "What was the exact Mercedes team radio message to Hamilton during Abu Dhabi 2016 when he was backing up Rosberg?",
        es: "¿Cuál fue el mensaje exacto de radio del equipo Mercedes a Hamilton durante Abu Dhabi 2016 cuando estaba retrasando a Rosberg?",
        de: "Was war die exakte Mercedes-Team-Funknachricht an Hamilton während Abu Dhabi 2016, als er Rosberg zurückhielt?",
        nl: "Wat was het exacte Mercedes teamradiobericht aan Hamilton tijdens Abu Dhabi 2016 toen hij Rosberg terugdreef?"
      },
      options: [
        "Multiple messages: 'Pick up the pace', 'This is silly', 'Lewis, we need you to speed up'",
        "Single warning only",
        "No team communication",
        "Threat of penalty"
      ],
      correct: 0,
      explanation: {
        en: "At Abu Dhabi 2016, Mercedes sent Hamilton multiple increasingly urgent radio messages as he deliberately slowed to back Rosberg into Vettel/Verstappen: 'Lewis, pick up the pace', 'This is silly Hamilton', 'Lewis, we need you to speed up to win this race'. Hamilton ignored all messages, prioritizing championship over team. Rosberg held P2 despite pressure (Vettel 1.9s behind at finish), won title by 5 points. Hamilton's defiance showcased driver vs team tension when interests conflict.",
        es: "En Abu Dhabi 2016, Mercedes envió a Hamilton múltiples mensajes de radio cada vez más urgentes mientras deliberadamente frenaba para llevar a Rosberg hacia Vettel/Verstappen: 'Lewis, acelera ritmo', 'Esto es tonto Hamilton', 'Lewis, necesitamos que aceleres para ganar esta carrera'. Hamilton ignoró todos los mensajes, priorizando campeonato sobre equipo. Rosberg mantuvo P2 a pesar de presión (Vettel 1.9s detrás al final), ganó título por 5 puntos. Desafío de Hamilton mostró tensión piloto vs equipo cuando intereses entran en conflicto.",
        de: "In Abu Dhabi 2016 schickte Mercedes Hamilton mehrere zunehmend dringende Funknachrichten, als er absichtlich verlangsamte, um Rosberg in Vettel/Verstappen zurückzudrängen: 'Lewis, beschleunige Tempo', 'Das ist albern Hamilton', 'Lewis, wir brauchen dich schneller um dieses Rennen zu gewinnen'. Hamilton ignorierte alle Nachrichten, priorisierte Meisterschaft über Team. Rosberg hielt P2 trotz Druck (Vettel 1,9s hinten beim Finish), gewann Titel mit 5 Punkten. Hamiltons Trotz zeigte Fahrer-vs-Team-Spannung wenn Interessen kollidieren.",
        nl: "Bij Abu Dhabi 2016 stuurde Mercedes Hamilton meerdere steeds dringender radioberichten terwijl hij opzettelijk vertraagde om Rosberg terug te drijven in Vettel/Verstappen: 'Lewis, verhoog tempo', 'Dit is dom Hamilton', 'Lewis, we hebben je nodig om te versnellen om deze race te winnen'. Hamilton negeerde alle berichten, prioriteerde kampioenschap boven team. Rosberg hield P2 ondanks druk (Vettel 1,9s achter bij finish), won titel met 5 punten. Hamilton's uitdaging toonde coureur vs team spanning wanneer belangen botsen."
      }
    },
    {
      question: {
        en: "How many races did Vettel lead the 2017 championship before Singapore crash changed momentum to Hamilton?",
        es: "¿Cuántas carreras lideró Vettel el campeonato 2017 antes de que el choque de Singapur cambiara el impulso a Hamilton?",
        de: "Wie viele Rennen führte Vettel die 2017-Meisterschaft, bevor Singapur-Crash Momentum zu Hamilton änderte?",
        nl: "Hoeveel races leidde Vettel het 2017 kampioenschap voor Singapore crash momentum naar Hamilton veranderde?"
      },
      options: [
        "13 of 14 races (led after 13 races, crash was race 14)",
        "10 races",
        "8 races",
        "16 races"
      ],
      correct: 0,
      explanation: {
        en: "Vettel led the 2017 championship after 13 of first 14 races. Before Singapore (race 14), he led Hamilton by 7 points. The lap-1 crash with Raikkonen/Verstappen gave Hamilton win, 28-point swing (from Vettel +7 to Hamilton +21). Hamilton then won next 4 races, building 59-point lead. Ferrari never recovered. Singapore was the pivotal moment that decided 2017 title. Vettel's desperation (Baku road rage, Mexico collision) showed psychological damage from lost momentum.",
        es: "Vettel lideró campeonato 2017 después de 13 de primeras 14 carreras. Antes de Singapur (carrera 14), lideraba a Hamilton por 7 puntos. Choque de vuelta 1 con Raikkonen/Verstappen dio a Hamilton victoria, cambio de 28 puntos (de Vettel +7 a Hamilton +21). Hamilton luego ganó siguientes 4 carreras, construyendo ventaja de 59 puntos. Ferrari nunca se recuperó. Singapur fue momento crucial que decidió título 2017. Desesperación de Vettel (furia al volante Bakú, colisión México) mostró daño psicológico de impulso perdido.",
        de: "Vettel führte 2017-Meisterschaft nach 13 von ersten 14 Rennen. Vor Singapur (Rennen 14) führte er Hamilton mit 7 Punkten. Runde-1-Crash mit Raikkonen/Verstappen gab Hamilton Sieg, 28-Punkte-Schwung (von Vettel +7 zu Hamilton +21). Hamilton gewann dann nächste 4 Rennen, baute 59-Punkte-Führung auf. Ferrari erholte sich nie. Singapur war entscheidender Moment, der 2017-Titel entschied. Vettels Verzweiflung (Baku-Straßenwut, Mexiko-Kollision) zeigte psychologischen Schaden von verlorenem Momentum.",
        nl: "Vettel leidde het 2017 kampioenschap na 13 van eerste 14 races. Voor Singapore (race 14) leidde hij Hamilton met 7 punten. Ronde 1 crash met Raikkonen/Verstappen gaf Hamilton winst, 28-punten swing (van Vettel +7 naar Hamilton +21). Hamilton won toen volgende 4 races, bouwde 59-punten voorsprong op. Ferrari herstelde nooit. Singapore was cruciaal moment dat 2017 titel besliste. Vettel's wanhoop (Bakoe wegwoede, Mexico botsing) toonde psychologische schade van verloren momentum."
      }
    },
    {
      question: {
        en: "What specific penalty did Rosberg receive for the Belgium 2014 collision where he punctured Hamilton's tire?",
        es: "¿Qué penalización específica recibió Rosberg por la colisión de Bélgica 2014 donde pinchó el neumático de Hamilton?",
        de: "Welche spezifische Strafe erhielt Rosberg für die Belgien 2014-Kollision, wo er Hamiltons Reifen durchstach?",
        nl: "Welke specifieke straf kreeg Rosberg voor de België 2014 botsing waar hij Hamilton's band lekte?"
      },
      options: [
        "No penalty from stewards, Mercedes handled internally",
        "10-second time penalty",
        "Grid penalty next race",
        "Points deduction"
      ],
      correct: 0,
      explanation: {
        en: "Stewards gave Rosberg NO penalty for Belgium 2014 lap 2 collision that punctured Hamilton's tire, causing DNF. However, Rosberg admitted post-race he 'could have avoided it but chose not to', wanting to 'prove a point' after Monaco/Hungary. Mercedes confirmed he deliberately didn't back out. This internal confession led Mercedes to impose strict rules of engagement. No championship points penalty applied. Rosberg finished 2nd, scoring crucial points in title battle. The lack of penalty was controversial.",
        es: "Comisarios no dieron penalización a Rosberg por colisión de vuelta 2 de Bélgica 2014 que pinchó neumático de Hamilton, causando DNF. Sin embargo, Rosberg admitió después de carrera que 'podría haberlo evitado pero eligió no hacerlo', queriendo 'probar un punto' después de Mónaco/Hungría. Mercedes confirmó que deliberadamente no se echó atrás. Esta confesión interna llevó a Mercedes a imponer reglas estrictas de enfrentamiento. No se aplicó penalización de puntos de campeonato. Rosberg terminó 2º, anotando puntos cruciales en batalla por título. Falta de penalización fue controvertida.",
        de: "Rennleiter gaben Rosberg KEINE Strafe für Belgien 2014 Runde-2-Kollision, die Hamiltons Reifen durchstach, Ausfall verursachte. Jedoch gab Rosberg nach Rennen zu, er 'hätte es vermeiden können, entschied sich aber dagegen', wollte 'Punkt beweisen' nach Monaco/Ungarn. Mercedes bestätigte, er wich absichtlich nicht aus. Dieses interne Geständnis führte Mercedes dazu, strikte Einsatzregeln aufzuerlegen. Keine Meisterschaftspunkte-Strafe angewendet. Rosberg wurde Zweiter, erzielte entscheidende Punkte im Titelkampf. Mangel an Strafe war kontrovers.",
        nl: "Stewards gaven Rosberg GEEN straf voor België 2014 ronde 2 botsing die Hamilton's band lekte, veroorzaakte DNF. Echter, Rosberg gaf na race toe hij 'het had kunnen vermijden maar koos ervoor niet te doen', wilde 'punt maken' na Monaco/Hongarije. Mercedes bevestigde hij week opzettelijk niet uit. Deze interne bekentenis leidde Mercedes om strikte gevechtsregels op te leggen. Geen kampioenschapspunten straf toegepast. Rosberg eindigde 2e, scoorde cruciale punten in titelstrijd. Het gebrek aan straf was controversieel."
      }
    },
    {
      question: {
        en: "What was the exact race control Article that Masi cited for overriding safety car procedures at Abu Dhabi 2021?",
        es: "¿Cuál fue el Artículo exacto de control de carrera que Masi citó para anular procedimientos de coche de seguridad en Abu Dhabi 2021?",
        de: "Was war der exakte Rennleitungs-Artikel, den Masi für Außerkraftsetzen von Safety-Car-Prozeduren in Abu Dhabi 2021 zitierte?",
        nl: "Wat was het exacte racecontrole Artikel dat Masi aanhaalde voor het oversturen van safety car procedures bij Abu Dhabi 2021?"
      },
      options: [
        "Article 15.3 - Race Director overriding authority over clerk of course",
        "Article 48.12 - Lapped cars unlapping procedure",
        "Article 48.13 - Safety car restart procedure",
        "Article 39.16 - Race suspension powers"
      ],
      correct: 0,
      explanation: {
        en: "Stewards cited Article 15.3 stating Race Director has 'overriding authority' over clerk of course regarding safety car use. This justified Masi's unprecedented decisions at Abu Dhabi 2021: allowing only 5 lapped cars (not all) to unlap, then immediately restarting (violating Article 48.12). Mercedes protested but lost. Post-season, FIA restructured race control, removed Masi, clarified Article 15.3 doesn't override specific regulations. The controversy changed F1 governance permanently, ended Hamilton-Verstappen 2021 battle controversially.",
        es: "Comisarios citaron Artículo 15.3 declarando que Director de Carrera tiene 'autoridad superior' sobre secretario de curso sobre uso de coche de seguridad. Esto justificó decisiones sin precedentes de Masi en Abu Dhabi 2021: permitir solo 5 autos doblados (no todos) desdoblar, luego reiniciar inmediatamente (violando Artículo 48.12). Mercedes protestó pero perdió. Post-temporada, FIA reestructuró control de carrera, removió a Masi, clarificó que Artículo 15.3 no anula regulaciones específicas. Controversia cambió gobernanza de F1 permanentemente, terminó batalla Hamilton-Verstappen 2021 controvertidamente.",
        de: "Rennleiter zitierten Artikel 15.3, besagend Rennleiter hat 'übergeordnete Autorität' über Rennleiter bezüglich Safety-Car-Einsatz. Dies rechtfertigte Masis beispiellose Entscheidungen in Abu Dhabi 2021: nur 5 überrundete Autos (nicht alle) entrunden lassen, dann sofort neu starten (Artikel 48.12 verletzend). Mercedes protestierte, verlor aber. Nach Saison strukturierte FIA Rennleitung um, entfernte Masi, klärte Artikel 15.3 überstimmt keine spezifischen Regeln. Kontroverse änderte F1-Governance permanent, beendete Hamilton-Verstappen 2021-Schlacht kontrovers.",
        nl: "Stewards citeerden Artikel 15.3 stellend Racedirecteur heeft 'overheersende autoriteit' over wedstrijdleider betreffende safety car gebruik. Dit rechtvaardigde Masi's ongekende beslissingen bij Abu Dhabi 2021: alleen 5 achterliggers (niet allemaal) laten ontronden, toen onmiddellijk herstarten (Artikel 48.12 schendend). Mercedes protesteerde maar verloor. Na-seizoen herstructureerde FIA racecontrole, verwijderde Masi, verduidelijkte Artikel 15.3 overstemt geen specifieke regels. Controverse veranderde F1 bestuur permanent, beëindigde Hamilton-Verstappen 2021 strijd controversieel."
      }
    },
    {
      question: {
        en: "How many pole positions did Rosberg achieve in 2016 versus Hamilton during their final championship battle?",
        es: "¿Cuántas poles logró Rosberg en 2016 versus Hamilton durante su batalla final por el campeonato?",
        de: "Wie viele Pole-Positionen erzielte Rosberg 2016 versus Hamilton während ihres finalen Meisterschaftskampfs?",
        nl: "Hoeveel poles behaalde Rosberg in 2016 versus Hamilton tijdens hun laatste kampioenschapsstrijd?"
      },
      options: [
        "Rosberg 8 poles, Hamilton 12 poles (Hamilton dominated qualifying)",
        "Rosberg 12, Hamilton 8",
        "Equal 10-10",
        "Rosberg 15, Hamilton 6"
      ],
      correct: 0,
      explanation: {
        en: "In 2016, Hamilton dominated qualifying with 12 poles vs Rosberg's 8. Despite qualifying disadvantage, Rosberg won championship through consistency and race craft. He won first 4 races (4 consecutive poles to start), then lost qualifying battle but scored points consistently. His 9 wins vs Hamilton's 10 showed equal race pace. The title came down to Abu Dhabi where Hamilton's slowing tactics nearly worked but Rosberg held on, won by 5 points, then shockingly retired 5 days later.",
        es: "En 2016, Hamilton dominó clasificación con 12 poles vs 8 de Rosberg. A pesar de desventaja de clasificación, Rosberg ganó campeonato mediante consistencia y habilidad de carrera. Ganó primeras 4 carreras (4 poles consecutivas para comenzar), luego perdió batalla de clasificación pero anotó puntos consistentemente. Sus 9 victorias vs 10 de Hamilton mostraron ritmo de carrera igual. Título se decidió en Abu Dhabi donde tácticas de desaceleración de Hamilton casi funcionaron pero Rosberg aguantó, ganó por 5 puntos, luego sorprendentemente se retiró 5 días después.",
        de: "2016 dominierte Hamilton Qualifying mit 12 Poles vs Rosbergs 8. Trotz Qualifying-Nachteil gewann Rosberg Meisterschaft durch Konstanz und Rennhandwerk. Er gewann erste 4 Rennen (4 aufeinanderfolgende Poles zum Start), verlor dann Qualifying-Schlacht, punktete aber konstant. Seine 9 Siege vs Hamiltons 10 zeigten gleiches Renntempo. Titel kam in Abu Dhabi herunter, wo Hamiltons Verlangsamungs-Taktiken fast funktionierten, aber Rosberg durchhielt, mit 5 Punkten gewann, dann schockierend 5 Tage später zurücktrat.",
        nl: "In 2016 domineerde Hamilton kwalificatie met 12 poles vs Rosberg's 8. Ondanks kwalificatie nadeel won Rosberg kampioenschap door consistentie en racevaardigheid. Hij won eerste 4 races (4 opeenvolgende poles om te starten), verloor toen kwalificatie strijd maar scoorde punten consistent. Zijn 9 overwinningen vs Hamilton's 10 toonden gelijk racetempo. Titel kwam neer op Abu Dhabi waar Hamilton's vertragingstactieken bijna werkten maar Rosberg standhield, won met 5 punten, stopte toen schokkend 5 dagen later."
      }
    },
    {
      question: {
        en: "What was the exact Suzuka 1989 chicane corner number where Prost and Senna's championship-deciding collision occurred?",
        es: "¿Cuál fue el número exacto de curva de la chicane de Suzuka 1989 donde ocurrió la colisión decisiva del campeonato entre Prost y Senna?",
        de: "Was war die exakte Suzuka 1989-Schikane-Kurvennummer, wo die meisterschaftsentscheidende Prost-Senna-Kollision stattfand?",
        nl: "Wat was het exacte Suzuka 1989 chicane bochtnummer waar de kampioenschap-beslissende Prost-Senna botsing plaatsvond?"
      },
      options: [
        "Turn 14-15 chicane (final sector, now removed from modern layout)",
        "Turn 1 first corner",
        "Turn 7-8 Spoon Curve",
        "Turn 11 hairpin"
      ],
      correct: 0,
      explanation: {
        en: "The infamous Suzuka 1989 collision occurred at Turn 14-15 chicane (final sector). Prost, leading championship, closed door on Senna's late-braking attack. They collided, both stopped. Senna got marshals' push-start (legal then), pitted for new nose, passed Nannini, won race. Stewards disqualified Senna for 'missing chicane' and 'external assistance', gave Prost championship. Senna claimed FIA bias. This chicane was later removed from Suzuka layout. The controversy poisoned their rivalry permanently, led to 1990 Suzuka revenge.",
        es: "Infame colisión de Suzuka 1989 ocurrió en chicane curvas 14-15 (sector final). Prost, liderando campeonato, cerró puerta a ataque de frenado tardío de Senna. Colisionaron, ambos pararon. Senna consiguió empuje de comisarios (legal entonces), entró a boxes por nariz nueva, pasó a Nannini, ganó carrera. Comisarios descalificaron a Senna por 'perderse chicane' y 'asistencia externa', dieron campeonato a Prost. Senna afirmó sesgo FIA. Esta chicane fue luego removida del trazado de Suzuka. Controversia envenenó su rivalidad permanentemente, llevó a venganza Suzuka 1990.",
        de: "Berüchtigte Suzuka 1989-Kollision ereignete sich in Kurve 14-15-Schikane (finaler Sektor). Prost, Meisterschaft führend, schloss Tür zu Sennas Spätbrems-Angriff. Sie kollidierten, beide stoppten. Senna ließ sich von Streckenposten anschieben (damals legal), boxte für neue Nase, überholte Nannini, gewann Rennen. Rennleiter disqualifizierten Senna fürs 'Verpassen der Schikane' und 'externe Hilfe', gaben Prost Meisterschaft. Senna behauptete FIA-Voreingenommenheit. Diese Schikane wurde später von Suzuka-Layout entfernt. Kontroverse vergiftete ihre Rivalität permanent, führte zu 1990 Suzuka-Rache.",
        nl: "De beruchte Suzuka 1989 botsing vond plaats bij bocht 14-15 chicane (laatste sector). Prost, kampioenschap leidend, sloot deur naar Senna's laat-rem aanval. Ze botsten, beiden stopten. Senna kreeg marshals' duwstart (toen legaal), pitste voor nieuwe neus, passeerde Nannini, won race. Stewards diskwalificeerden Senna voor 'missen chicane' en 'externe hulp', gaven Prost kampioenschap. Senna beweerde FIA vooringenomenheid. Deze chicane werd later verwijderd van Suzuka layout. Controverse vergiftigde hun rivaliteit permanent, leidde tot 1990 Suzuka wraak."
      }
    },
    {
      question: {
        en: "What was the specific Mercedes party mode (Strat Mode) number that gave qualifying advantage in 2014-2020?",
        es: "¿Cuál fue el número específico de modo de fiesta de Mercedes (Strat Mode) que dio ventaja de clasificación en 2014-2020?",
        de: "Was war die spezifische Mercedes-Party-Mode (Strat Mode) Nummer, die Qualifying-Vorteil 2014-2020 gab?",
        nl: "Wat was het specifieke Mercedes party mode (Strat Mode) nummer dat kwalificatievoordeel gaf in 2014-2020?"
      },
      options: [
        "Strat Mode 6 (nicknamed 'Party Mode') - maximum power setting",
        "Strat Mode 3 - standard setting",
        "Strat Mode 10 - ultimate power",
        "Quali Mode 1 - special setting"
      ],
      correct: 0,
      explanation: {
        en: "Mercedes' 'Strat Mode 6' (nicknamed 'Party Mode') was their maximum power engine setting used for qualifying 2014-2020. It increased hybrid deployment and engine power significantly but risked reliability. Rosberg suspected Hamilton sometimes got preferential access during their partnership. In 2021, FIA banned changing engine modes between qualifying and race (parc fermé for engine modes) to increase transparency and level playing field. The ban ended Mercedes' qualifying advantage from party mode.",
        es: "El 'Strat Mode 6' de Mercedes (apodado 'Party Mode') fue su configuración de motor de máxima potencia usada para clasificación 2014-2020. Aumentó despliegue híbrido y potencia del motor significativamente pero arriesgó fiabilidad. Rosberg sospechaba que Hamilton a veces obtenía acceso preferencial durante su asociación. En 2021, FIA prohibió cambiar modos de motor entre clasificación y carrera (parc fermé para modos de motor) para aumentar transparencia e igualar condiciones. Prohibición terminó ventaja de clasificación de Mercedes del modo fiesta.",
        de: "Mercedes' 'Strat Mode 6' (Spitzname 'Party Mode') war ihre maximale Power-Engine-Einstellung für Qualifying 2014-2020. Es erhöhte Hybrid-Einsatz und Motorleistung signifikant, riskierte aber Zuverlässigkeit. Rosberg vermutete, Hamilton bekam manchmal bevorzugten Zugang während ihrer Partnerschaft. 2021 verbot FIA Ändern von Motormodi zwischen Qualifying und Rennen (Parc Fermé für Motormodi) um Transparenz zu erhöhen und Spielfeld zu nivellieren. Verbot beendete Mercedes' Qualifying-Vorteil vom Party Mode.",
        nl: "Mercedes' 'Strat Mode 6' (bijnaam 'Party Mode') was hun maximale vermogen motorinstelling gebruikt voor kwalificatie 2014-2020. Het verhoogde hybride inzet en motorvermogen aanzienlijk maar risiceerde betrouwbaarheid. Rosberg vermoedde Hamilton kreeg soms preferentiële toegang tijdens hun partnerschap. In 2021 verbood FIA wijzigen motorstanden tussen kwalificatie en race (parc fermé voor motorstanden) om transparantie te verhogen en speelveld te nivelleren. Verbod beëindigde Mercedes' kwalificatievoordeel van party mode."
      }
    },
    {
      question: {
        en: "How many times did Verstappen and Hamilton collide on track during their 2021 championship battle?",
        es: "¿Cuántas veces colisionaron Verstappen y Hamilton en pista durante su batalla por el campeonato 2021?",
        de: "Wie oft kollidierten Verstappen und Hamilton auf der Strecke während ihres 2021-Meisterschaftskampfs?",
        nl: "Hoe vaak botsten Verstappen en Hamilton op de baan tijdens hun 2021 kampioenschapsstrijd?"
      },
      options: [
        "3 major collisions (Silverstone, Monza, Saudi Arabia)",
        "2 collisions only",
        "5 collisions",
        "1 collision"
      ],
      correct: 0,
      explanation: {
        en: "Verstappen and Hamilton had 3 major on-track collisions in 2021: Silverstone (Copse, 51G crash), Monza (Turn 1, wheel-over-wheel), and Saudi Arabia (brake-test on straight). Additional close incidents: Imola lap 1 contact, Barcelona Turn 1 near-miss, Brazil multiple defending moves. The aggressive racing redefined modern F1 standards. FIA struggled with consistent penalties. The season culminated in controversial Abu Dhabi finale. Their 2021 battle was most intense title fight since Prost-Senna.",
        es: "Verstappen y Hamilton tuvieron 3 colisiones importantes en pista en 2021: Silverstone (Copse, choque 51G), Monza (curva 1, rueda sobre rueda), y Arabia Saudita (frenado brusco en recta). Incidentes cercanos adicionales: contacto vuelta 1 Imola, casi choque curva 1 Barcelona, múltiples movimientos defensivos Brasil. Carrera agresiva redefinió estándares modernos de F1. FIA luchó con penalizaciones consistentes. Temporada culminó en controvertido final de Abu Dhabi. Su batalla 2021 fue lucha por título más intensa desde Prost-Senna.",
        de: "Verstappen und Hamilton hatten 3 große On-Track-Kollisionen 2021: Silverstone (Copse, 51G-Crash), Monza (Kurve 1, Rad-über-Rad), und Saudi-Arabien (Bremstest auf Gerade). Zusätzliche nahe Vorfälle: Imola Runde-1-Kontakt, Barcelona Kurve-1-Beinahe-Zusammenstoß, Brasilien mehrere Verteidigungsmanöver. Aggressives Rennen definierte moderne F1-Standards neu. FIA kämpfte mit konsistenten Strafen. Saison gipfelte in kontroversem Abu Dhabi-Finale. Ihre 2021-Schlacht war intensivster Titelkampf seit Prost-Senna.",
        nl: "Verstappen en Hamilton hadden 3 grote on-track botsingen in 2021: Silverstone (Copse, 51G crash), Monza (bocht 1, wiel-over-wiel), en Saudi-Arabië (remtest op rechte stuk). Aanvullende nabije incidenten: Imola ronde 1 contact, Barcelona bocht 1 bijna-botsing, Brazilië meerdere verdedigingsbewegingen. Agressief racen herdefinieerde moderne F1 standaarden. FIA worstelde met consistente straffen. Seizoen culmineerde in controversiële Abu Dhabi finale. Hun 2021 strijd was meest intense titelgevecht sinds Prost-Senna."
      }
    },
    {
      question: {
        en: "What was the exact finishing margin between Lauda and Prost in 1984 championship?",
        es: "¿Cuál fue el margen exacto de finalización entre Lauda y Prost en el campeonato 1984?",
        de: "Was war der exakte Zielabstand zwischen Lauda und Prost in der 1984-Meisterschaft?",
        nl: "Wat was de exacte eindmarge tussen Lauda en Prost in het 1984 kampioenschap?"
      },
      options: [
        "0.5 points (72 vs 71.5) - F1's closest ever margin",
        "1 point margin",
        "2 points margin",
        "Tied on countback"
      ],
      correct: 0,
      explanation: {
        en: "Lauda won 1984 by 0.5 points (72-71.5) over Prost. Half-point from Monaco rain-shortened race decided it. Prost won 7 races vs Lauda's 5. Closest F1 championship margin ever.",
        es: "Lauda ganó 1984 por 0.5 puntos (72-71.5) sobre Prost. Medio punto de carrera acortada por lluvia en Mónaco lo decidió. Prost ganó 7 carreras vs 5 de Lauda. Margen de campeonato F1 más cercano jamás.",
        de: "Lauda gewann 1984 mit 0,5 Punkten (72-71,5) vor Prost. Halber Punkt vom regenverkürzten Monaco-Rennen entschied es. Prost gewann 7 Rennen vs Laudas 5. Knappster F1-Meisterschaftsabstand überhaupt.",
        nl: "Lauda won 1984 met 0,5 punten (72-71,5) voor Prost. Halve punt van regen-verkorte Monaco race besliste het. Prost won 7 races vs Lauda's 5. Kleinste F1 kampioenschapsmarge ooit."
      }
    },
    {
      question: {
        en: "How many laps into Donington 1993 did Senna take the lead in wet conditions?",
        es: "¿En qué vuelta de Donington 1993 tomó Senna el liderazgo en condiciones húmedas?",
        de: "In welcher Runde von Donington 1993 übernahm Senna die Führung bei nassen Bedingungen?",
        nl: "In welke ronde van Donington 1993 nam Senna de leiding in natte omstandigheden?"
      },
      options: [
        "Lap 1 (started 4th, led by end of lap 1)",
        "Lap 5",
        "Lap 10",
        "Lap 3"
      ],
      correct: 0,
      explanation: {
        en: "Senna's legendary Donington 1993 wet performance saw him start 4th and lead by end of lap 1, passing Schumacher, Wendlinger, Hill and Prost. Lapped Prost en route to dominant win.",
        es: "Legendaria actuación mojada de Senna en Donington 1993 lo vio comenzar 4º y liderar al final de vuelta 1, pasando a Schumacher, Wendlinger, Hill y Prost. Dobló a Prost en ruta a victoria dominante.",
        de: "Sennas legendäre Donington 1993 Nassleistung sah ihn Vierter starten und Ende Runde 1 führen, überholte Schumacher, Wendlinger, Hill und Prost. Überrundete Prost auf Weg zu dominantem Sieg.",
        nl: "Senna's legendarische Donington 1993 natte prestatie zag hem 4e starten en leiden tegen einde ronde 1, passeerde Schumacher, Wendlinger, Hill en Prost. Rondde Prost onderweg naar dominante overwinning."
      }
    },
    {
      question: {
        en: "What was the exact brake balance issue that caused Rosberg's Monaco 2014 qualifying mistake?",
        es: "¿Cuál fue el problema exacto de balance de frenos que causó el error de clasificación de Rosberg en Mónaco 2014?",
        de: "Was war das exakte Bremsbalance-Problem, das Rosbergs Monaco 2014-Qualifying-Fehler verursachte?",
        nl: "Wat was het exacte rembalans probleem dat Rosberg's Monaco 2014 kwalificatie fout veroorzaakte?"
      },
      options: [
        "No brake issue - deliberate mistake at Mirabeau to keep pole (Hamilton accused)",
        "Front brake failure",
        "Rear brake lockup",
        "Hydraulic problem"
      ],
      correct: 0,
      explanation: {
        en: "Monaco 2014 Q3: Rosberg on pole, Hamilton faster on final laps. Rosberg 'locked up' at Mirabeau, bringing yellow flags and preventing Hamilton improving. Hamilton accused deliberate action. Stewards found no evidence.",
        es: "Mónaco 2014 Q3: Rosberg en pole, Hamilton más rápido en vueltas finales. Rosberg 'bloqueó' en Mirabeau, trayendo banderas amarillas y evitando que Hamilton mejorara. Hamilton acusó acción deliberada. Comisarios no encontraron evidencia.",
        de: "Monaco 2014 Q3: Rosberg auf Pole, Hamilton schneller in Schlussrunden. Rosberg 'blockierte' in Mirabeau, brachte gelbe Flaggen und verhinderte Hamilton-Verbesserung. Hamilton beschuldigte absichtliche Aktion. Rennleiter fanden keine Beweise.",
        nl: "Monaco 2014 Q3: Rosberg op pole, Hamilton sneller in laatste rondes. Rosberg 'blokkeerde' bij Mirabeau, bracht gele vlaggen en voorkwam Hamilton verbetering. Hamilton beschuldigde opzettelijke actie. Stewards vonden geen bewijs."
      }
    },
    {
      question: {
        en: "How many penalty points did Hamilton accumulate during 2021 championship battle?",
        es: "¿Cuántos puntos de penalización acumuló Hamilton durante la batalla por el campeonato 2021?",
        de: "Wie viele Strafpunkte sammelte Hamilton während des 2021-Meisterschaftskampfs?",
        nl: "Hoeveel strafpunten verzamelde Hamilton tijdens de 2021 kampioenschapsstrijd?"
      },
      options: [
        "2 penalty points (less than Verstappen's 7)",
        "5 penalty points",
        "7 penalty points",
        "0 penalty points"
      ],
      correct: 0,
      explanation: {
        en: "Hamilton received 2 penalty points in 2021 (Silverstone incident). Verstappen got 7 points including Monza and Saudi Arabia. The aggressive season tested FIA's penalty consistency.",
        es: "Hamilton recibió 2 puntos de penalización en 2021 (incidente Silverstone). Verstappen obtuvo 7 puntos incluyendo Monza y Arabia Saudita. Temporada agresiva probó consistencia de penalizaciones FIA.",
        de: "Hamilton erhielt 2 Strafpunkte 2021 (Silverstone-Vorfall). Verstappen bekam 7 Punkte einschließlich Monza und Saudi-Arabien. Aggressive Saison testete FIAs Strafenkonsistenz.",
        nl: "Hamilton kreeg 2 strafpunten in 2021 (Silverstone incident). Verstappen kreeg 7 punten inclusief Monza en Saudi-Arabië. Agressief seizoen testte FIA's straf consistentie."
      }
    },
    {
      question: {
        en: "What was Ferrari's fine amount for Austria 2002 team orders scandal?",
        es: "¿Cuál fue el monto de la multa de Ferrari por el escándalo de órdenes de equipo de Austria 2002?",
        de: "Was war Ferraris Geldbußenhöhe für den Österreich 2002-Teamorder-Skandal?",
        nl: "Wat was Ferrari's boete bedrag voor het Oostenrijk 2002 teamorders schandaal?"
      },
      options: [
        "$1 million fine plus team orders banned 2003-2010",
        "$500,000 fine only",
        "$2 million fine",
        "No financial penalty"
      ],
      correct: 0,
      explanation: {
        en: "FIA fined Ferrari $1 million for blatant Austria 2002 team orders (Barrichello letting Schumacher win). Subsequently banned team orders via Article 39.1 from 2003-2010.",
        es: "FIA multó a Ferrari $1 millón por flagrantes órdenes de equipo Austria 2002 (Barrichello dejando ganar a Schumacher). Posteriormente prohibió órdenes de equipo vía Artículo 39.1 de 2003-2010.",
        de: "FIA bestrafte Ferrari mit $1 Million für offenkundige Österreich 2002-Teamorders (Barrichello ließ Schumacher gewinnen). Verbot danach Teamorders via Artikel 39.1 von 2003-2010.",
        nl: "FIA beboette Ferrari $1 miljoen voor flagrante Oostenrijk 2002 teamorders (Barrichello liet Schumacher winnen). Verbood vervolgens teamorders via Artikel 39.1 van 2003-2010."
      }
    },
    {
      question: {
        en: "What was the exact crash G-force at Turkey 2010 when Vettel and Webber collided?",
        es: "¿Cuál fue la fuerza G exacta del choque en Turquía 2010 cuando Vettel y Webber colisionaron?",
        de: "Was war die exakte Crash-G-Kraft in der Türkei 2010, als Vettel und Webber kollidierten?",
        nl: "Wat was de exacte crash G-kracht bij Turkije 2010 toen Vettel en Webber botsten?"
      },
      options: [
        "Moderate impact (exact G-force not disclosed, both cars retired)",
        "45G impact",
        "30G impact",
        "60G impact"
      ],
      correct: 0,
      explanation: {
        en: "Turkey 2010: Vettel moved right into Webber while being overtaken. Both Red Bulls crashed out. Exact G-forces not published but both DNF'd. The collision destroyed their relationship permanently.",
        es: "Turquía 2010: Vettel se movió a la derecha contra Webber mientras era adelantado. Ambos Red Bulls se estrellaron. Fuerzas G exactas no publicadas pero ambos DNF. Colisión destruyó su relación permanentemente.",
        de: "Türkei 2010: Vettel lenkte rechts in Webber beim Überholtwerden. Beide Red Bulls crashten. Exakte G-Kräfte nicht veröffentlicht, aber beide Ausfall. Kollision zerstörte ihre Beziehung permanent.",
        nl: "Turkije 2010: Vettel bewoog rechts in Webber terwijl ingehaald. Beide Red Bulls crashten. Exacte G-krachten niet gepubliceerd maar beiden DNF. Botsing vernietigde hun relatie permanent."
      }
    },
    {
      question: {
        en: "How many races did Hamilton's 2016 reliability issues cost him?",
        es: "¿Cuántas carreras le costaron a Hamilton los problemas de fiabilidad 2016?",
        de: "Wie viele Rennen kosteten Hamilton 2016-Zuverlässigkeitsprobleme?",
        nl: "Hoeveel races kostten Hamilton's 2016 betrouwbaarheidsproblemen hem?"
      },
      options: [
        "2 major failures (China engine, Malaysia engine explosion)",
        "4 failures",
        "1 failure only",
        "5 failures"
      ],
      correct: 0,
      explanation: {
        en: "Hamilton suffered 2 major 2016 engine failures: China (lost potential win) and Malaysia (leading, engine exploded). These cost ~50 points, nearly the 5-point championship margin to Rosberg.",
        es: "Hamilton sufrió 2 fallas importantes de motor 2016: China (perdió victoria potencial) y Malasia (liderando, motor explotó). Costaron ~50 puntos, casi el margen de 5 puntos del campeonato con Rosberg.",
        de: "Hamilton erlitt 2 große 2016-Motorausfälle: China (verlorener potenzieller Sieg) und Malaysia (führend, Motor explodierte). Kosteten ~50 Punkte, fast die 5-Punkte-Meisterschaftsmarge zu Rosberg.",
        nl: "Hamilton kreeg 2 grote 2016 motor falen: China (verloor potentiële winst) en Maleisië (leidend, motor explodeerde). Kostten ~50 punten, bijna de 5-punten kampioenschapsmarge naar Rosberg."
      }
    },
    {
      question: {
        en: "What was Schumacher's championship position after Jerez 1997 disqualification?",
        es: "¿Cuál fue la posición de campeonato de Schumacher después de la descalificación de Jerez 1997?",
        de: "Was war Schumachers Meisterschaftsposition nach Jerez 1997-Disqualifikation?",
        nl: "Wat was Schumacher's kampioenschapspositie na Jerez 1997 diskwalificatie?"
      },
      options: [
        "Removed from entire championship standings (0 points, kept race wins)",
        "2nd place maintained",
        "3rd place",
        "Banned from 1998"
      ],
      correct: 0,
      explanation: {
        en: "FIA disqualified Schumacher from entire 1997 championship for deliberately hitting Villeneuve. He kept race wins but scored 0 points. Unprecedented penalty for on-track incident.",
        es: "FIA descalificó a Schumacher de todo campeonato 1997 por golpear deliberadamente a Villeneuve. Mantuvo victorias de carrera pero anotó 0 puntos. Penalización sin precedentes por incidente en pista.",
        de: "FIA disqualifizierte Schumacher von gesamter 1997-Meisterschaft fürs absichtliche Treffen von Villeneuve. Behielt Rennsiege, erzielte aber 0 Punkte. Beispiellose Strafe für On-Track-Vorfall.",
        nl: "FIA diskwalificeerde Schumacher van gehele 1997 kampioenschap voor opzettelijk raken Villeneuve. Behield raceoverwinningen maar scoorde 0 punten. Ongekende straf voor on-track incident."
      }
    }
  ];

  return {
    name: {
      en: "Rivaliteiten Level 7",
      es: "Rivaliteiten Nivel 7",
      de: "Rivaliteiten Stufe 7",
      nl: "Rivaliteiten Level 7"
    },
    questions: questions
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = level7;
} else if (typeof window !== 'undefined') {
  window.level7 = level7;
}
