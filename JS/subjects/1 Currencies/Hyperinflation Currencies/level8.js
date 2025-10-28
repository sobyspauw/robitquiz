// Quiz Level 8: Currencies - Hyperinflatie valuta (Mythic Level)
(function() {
  const level8 = {
    name: {
      en: "Hyperinflation Currencies - Mythic Level",
      es: "Monedas de Hiperinflación - Nivel Mítico",
      de: "Hyperinflationswährungen - Mythenlevel",
      nl: "Hyperinflatie Valuta - Mythisch Niveau"
    },
    questions: [
      {
        question: {
          en: "What macroeconomic phenomenon describes the theoretical maximum sustainable rate of hyperinflation before complete monetary collapse?",
          es: "¿Qué fenómeno macroeconómico describe la tasa máxima sostenible teórica de hiperinflación antes del colapso monetario completo?",
          de: "Welches makroökonomische Phänomen beschreibt die theoretische maximale nachhaltige Hyperinflationsrate vor dem vollständigen monetären Zusammenbruch?",
          nl: "Welk macro-economisch fenomeen beschrijft het theoretische maximale duurzame hyperinflatie percentage voor volledige monetaire ineenstorting?"
        },
        options: [
          { en: "Laffer curve peak for seigniorage revenue", es: "Pico de curva de Laffer para ingresos por señoreaje", de: "Laffer-Kurven-Spitze für Seigniorage-Einnahmen", nl: "Laffer curve piek voor seigniorage opbrengst" },
          { en: "Nash equilibrium of inflation expectations", es: "Equilibrio de Nash de expectativas de inflación", de: "Nash-Gleichgewicht der Inflationserwartungen", nl: "Nash evenwicht van inflatie verwachtingen" },
          { en: "Critical mass threshold of velocity acceleration", es: "Umbral de masa crítica de aceleración de velocidad", de: "Kritische Masse-Schwelle der Geschwindigkeitsbeschleunigung", nl: "Kritische massa drempel van snelheidsversnelling" },
          { en: "Bifurcation point in nonlinear monetary dynamics", es: "Punto de bifurcación en dinámica monetaria no lineal", de: "Bifurkationspunkt in nichtlinearer monetärer Dynamik", nl: "Bifurcatie punt in niet-lineaire monetaire dynamiek" }
        ],
        correct: 0,
        explanation: {
          en: "The Laffer curve peak for seigniorage revenue represents the theoretical maximum sustainable hyperinflation rate. Beyond this point, further money printing destroys the tax base faster than it generates revenue, as currency substitution accelerates and the real value of seigniorage collapses despite astronomical nominal printing rates.",
          es: "El pico de la curva de Laffer para ingresos por señoreaje representa la tasa máxima sostenible teórica de hiperinflación. Más allá de este punto, imprimir más dinero destruye la base impositiva más rápido de lo que genera ingresos, ya que la sustitución de moneda se acelera y el valor real del señoreaje colapsa a pesar de tasas de impresión nominales astronómicas.",
          de: "Die Laffer-Kurven-Spitze für Seigniorage-Einnahmen repräsentiert die theoretische maximale nachhaltige Hyperinflationsrate. Jenseits dieses Punktes zerstört weiteres Gelddrucken die Steuerbasis schneller als es Einnahmen generiert, da Währungssubstitution sich beschleunigt und der reale Wert der Seigniorage kollabiert trotz astronomischer nominaler Druckraten.",
          nl: "De Laffer curve piek voor seigniorage opbrengst vertegenwoordigt het theoretische maximale duurzame hyperinflatie percentage. Voorbij dit punt vernietigt verder geld drukken de belastingbasis sneller dan het opbrengsten genereert, omdat valutavervanging versnelt en de reële waarde van seigniorage instort ondanks astronomische nominale drukpercentages."
        }
      },
      {
        question: {
          en: "Which advanced econometric model best captures the phase transition dynamics during hyperinflation acceleration?",
          es: "¿Qué modelo econométrico avanzado captura mejor la dinámica de transición de fase durante la aceleración de hiperinflación?",
          de: "Welches fortgeschrittene ökonometrische Modell erfasst am besten die Phasenübergangsdynamik während der Hyperinflationsbeschleunigung?",
          nl: "Welk geavanceerd econometrisch model vangt het beste de fase transitie dynamiek tijdens hyperinflatie versnelling?"
        },
        options: [
          { en: "Markov-switching regime models with stochastic volatility", es: "Modelos de cambio de régimen de Markov con volatilidad estocástica", de: "Markov-Regime-Wechsel-Modelle mit stochastischer Volatilität", nl: "Markov-switching regime modellen met stochastische volatiliteit" },
          { en: "ARCH/GARCH heteroskedasticity frameworks", es: "Marcos de heterocedasticidad ARCH/GARCH", de: "ARCH/GARCH-Heteroskedastizitäts-Rahmen", nl: "ARCH/GARCH heteroskedasticiteit kaders" },
          { en: "Catastrophe theory bifurcation models", es: "Modelos de bifurcación de teoría de catástrofes", de: "Katastrophentheorie-Bifurkationsmodelle", nl: "Catastrofe theorie bifurcatie modellen" },
          { en: "Lévy flight stochastic process simulations", es: "Simulaciones de procesos estocásticos de vuelo de Lévy", de: "Lévy-Flug stochastische Prozesssimulationen", nl: "Lévy vlucht stochastische proces simulaties" }
        ],
        correct: 2,
        explanation: {
          en: "Catastrophe theory bifurcation models best capture hyperinflation's phase transition dynamics, showing how smooth parameter changes (money supply growth) can trigger sudden jumps to qualitatively different states (hyperinflation regime). The 'cusp catastrophe' model particularly describes the hysteresis and irreversibility observed in hyperinflation acceleration.",
          es: "Los modelos de bifurcación de teoría de catástrofes capturan mejor la dinámica de transición de fase de la hiperinflación, mostrando cómo cambios suaves de parámetros (crecimiento de oferta monetaria) pueden desencadenar saltos repentinos a estados cualitativamente diferentes (régimen de hiperinflación). El modelo de 'catástrofe de cúspide' describe particularmente la histéresis e irreversibilidad observadas en la aceleración de hiperinflación.",
          de: "Katastrophentheorie-Bifurkationsmodelle erfassen am besten die Phasenübergangsdynamik der Hyperinflation und zeigen, wie glatte Parameteränderungen (Geldmengenwachstum) plötzliche Sprünge zu qualitativ unterschiedlichen Zuständen (Hyperinflationsregime) auslösen können. Das 'Cusp-Katastrophen'-Modell beschreibt besonders die in der Hyperinflationsbeschleunigung beobachtete Hysterese und Irreversibilität.",
          nl: "Catastrofe theorie bifurcatie modellen vangen het beste hyperinflatie's fase transitie dynamiek, tonend hoe soepele parameter veranderingen (geldhoeveelheid groei) plotselinge sprongen naar kwalitatief verschillende toestanden (hyperinflatie regime) kunnen triggeren. Het 'cusp catastrofe' model beschrijft in het bijzonder de hysterese en onomkeerbaarheid waargenomen in hyperinflatie versnelling."
        }
      },
      {
        question: {
          en: "What is the 'critical slowing down' phenomenon observed before hyperinflation transitions?",
          es: "¿Qué es el fenómeno de 'ralentización crítica' observado antes de las transiciones de hiperinflación?",
          de: "Was ist das 'kritische Verlangsamungs'-Phänomen, das vor Hyperinflationsübergängen beobachtet wird?",
          nl: "Wat is het 'kritieke vertraging' fenomeen waargenomen voor hyperinflatie transities?"
        },
        options: [
          { en: "Decreased volatility in inflation rates as stability increases", es: "Disminución de volatilidad en tasas de inflación a medida que aumenta la estabilidad", de: "Verringerte Volatilität der Inflationsraten bei zunehmender Stabilität", nl: "Verminderde volatiliteit in inflatiepercentages naarmate stabiliteit toeneemt" },
          { en: "Increased recovery time from perturbations signaling approaching tipping point", es: "Aumento del tiempo de recuperación de perturbaciones señalando punto de inflexión cercano", de: "Erhöhte Erholungszeit von Störungen signalisiert nahenden Kipppunkt", nl: "Verhoogde hersteltijd van verstoringen signaleert naderende kantelpunt" },
          { en: "Rapid acceleration of price changes with no warning signs", es: "Aceleración rápida de cambios de precios sin señales de advertencia", de: "Schnelle Beschleunigung von Preisänderungen ohne Warnzeichen", nl: "Snelle versnelling van prijsveranderingen zonder waarschuwingssignalen" },
          { en: "Gradual decline in money supply growth rates", es: "Disminución gradual en tasas de crecimiento de oferta monetaria", de: "Allmählicher Rückgang der Geldmengenwachstumsraten", nl: "Geleidelijke daling in geldhoeveelheid groeipercentages" }
        ],
        correct: 1,
        explanation: {
          en: "Critical slowing down describes how systems approaching tipping points take longer to recover from small perturbations. Before hyperinflation transitions, economies show increasing autocorrelation in inflation rates and prolonged recovery from shocks—early warning signals that the system is losing resilience and approaching catastrophic transition to hyperinflation regime.",
          es: "La ralentización crítica describe cómo los sistemas que se acercan a puntos de inflexión tardan más en recuperarse de pequeñas perturbaciones. Antes de las transiciones de hiperinflación, las economías muestran autocorrelación creciente en tasas de inflación y recuperación prolongada de choques—señales de advertencia temprana de que el sistema está perdiendo resiliencia y acercándose a una transición catastrófica al régimen de hiperinflación.",
          de: "Kritische Verlangsamung beschreibt, wie Systeme, die sich Kipppunkten nähern, länger brauchen, um sich von kleinen Störungen zu erholen. Vor Hyperinflationsübergängen zeigen Volkswirtschaften zunehmende Autokorrelation in Inflationsraten und verlängerte Erholung von Schocks—Frühwarnsignale, dass das System Resilienz verliert und sich einem katastrophalen Übergang zum Hyperinflationsregime nähert.",
          nl: "Kritieke vertraging beschrijft hoe systemen die kantelpunten naderen langer nodig hebben om te herstellen van kleine verstoringen. Voor hyperinflatie transities tonen economieën toenemende autocorrelatie in inflatiepercentages en verlengd herstel van schokken—vroege waarschuwingssignalen dat het systeem veerkracht verliest en een catastrofale transitie naar hyperinflatie regime nadert."
        }
      },
      {
        question: {
          en: "Which game-theoretic framework best explains the strategic interaction between government and citizens during hyperinflation?",
          es: "¿Qué marco de teoría de juegos explica mejor la interacción estratégica entre gobierno y ciudadanos durante la hiperinflación?",
          de: "Welcher spieltheoretische Rahmen erklärt am besten die strategische Interaktion zwischen Regierung und Bürgern während der Hyperinflation?",
          nl: "Welk speltheoretisch kader verklaart het beste de strategische interactie tussen regering en burgers tijdens hyperinflatie?"
        },
        options: [
          { en: "Repeated prisoner's dilemma with declining cooperation", es: "Dilema del prisionero repetido con cooperación decreciente", de: "Wiederholtes Gefangenendilemma mit abnehmender Kooperation", nl: "Herhaald gevangenendilemma met afnemende samenwerking" },
          { en: "War of attrition with asymmetric information", es: "Guerra de desgaste con información asimétrica", de: "Zermürbungskrieg mit asymmetrischer Information", nl: "Uitputtingsoorlog met asymmetrische informatie" },
          { en: "Stackelberg leader-follower with time-inconsistent preferences", es: "Líder-seguidor de Stackelberg con preferencias temporalmente inconsistentes", de: "Stackelberg-Führer-Folger mit zeitinkonsistenten Präferenzen", nl: "Stackelberg leider-volger met tijdinconsistente voorkeuren" },
          { en: "Evolutionary dynamics with mutation and selection pressures", es: "Dinámica evolutiva con presiones de mutación y selección", de: "Evolutionäre Dynamik mit Mutations- und Selektionsdruck", nl: "Evolutionaire dynamiek met mutatie en selectiedruk" }
        ],
        correct: 2,
        explanation: {
          en: "The Stackelberg leader-follower game with time-inconsistent preferences captures hyperinflation dynamics: government (leader) announces monetary policy, but faces time-inconsistency problems (temptation to print money despite promises). Citizens (followers) rationally anticipate this inconsistency, leading to inflation expectations that force the government into the hyperinflationary trap.",
          es: "El juego líder-seguidor de Stackelberg con preferencias temporalmente inconsistentes captura la dinámica de hiperinflación: el gobierno (líder) anuncia política monetaria, pero enfrenta problemas de inconsistencia temporal (tentación de imprimir dinero a pesar de promesas). Los ciudadanos (seguidores) anticipan racionalmente esta inconsistencia, llevando a expectativas de inflación que fuerzan al gobierno a la trampa hiperinflacionaria.",
          de: "Das Stackelberg-Führer-Folger-Spiel mit zeitinkonsistenten Präferenzen erfasst Hyperinflationsdynamik: Regierung (Führer) kündigt Geldpolitik an, steht aber vor Zeitinkonsistenzproblemen (Versuchung, Geld zu drucken trotz Versprechen). Bürger (Folger) antizipieren diese Inkonsistenz rational, was zu Inflationserwartungen führt, die die Regierung in die Hyperinflationsfalle zwingen.",
          nl: "Het Stackelberg leider-volger spel met tijdinconsistente voorkeuren vangt hyperinflatie dynamiek: regering (leider) kondigt monetair beleid aan, maar wordt geconfronteerd met tijdinconsistentie problemen (verleiding om geld te drukken ondanks beloften). Burgers (volgers) anticiperen rationeel deze inconsistentie, leidend tot inflatie verwachtingen die de regering in de hyperinflatie val dwingen."
        }
      },
      {
        question: {
          en: "What is 'fiscal dominance' and how does it create hyperinflation through the 'unpleasant monetarist arithmetic'?",
          es: "¿Qué es la 'dominancia fiscal' y cómo crea hiperinflación a través de la 'aritmética monetarista desagradable'?",
          de: "Was ist 'fiskalische Dominanz' und wie erzeugt sie Hyperinflation durch die 'unangenehme monetaristische Arithmetik'?",
          nl: "Wat is 'fiscale dominantie' en hoe creëert het hyperinflatie door de 'onaangename monetaristische rekenkunde'?"
        },
        options: [
          { en: "When fiscal policy controls monetary policy, forcing money creation to finance deficits", es: "Cuando la política fiscal controla la política monetaria, forzando la creación de dinero para financiar déficits", de: "Wenn Fiskalpolitik Geldpolitik kontrolliert, Geldschöpfung zur Defizitfinanzierung erzwingend", nl: "Wanneer fiscaal beleid monetair beleid controleert, geldcreatie dwingend om tekorten te financieren" },
          { en: "When monetary policy dominates fiscal decisions through interest rate control", es: "Cuando la política monetaria domina decisiones fiscales a través del control de tasas de interés", de: "Wenn Geldpolitik Fiskalentscheidungen durch Zinssatzkontrolle dominiert", nl: "Wanneer monetair beleid fiscale beslissingen domineert door rentetarief controle" },
          { en: "When foreign exchange reserves determine domestic policy", es: "Cuando las reservas de divisas determinan la política nacional", de: "Wenn Devisenreserven die Innenpolitik bestimmen", nl: "Wanneer valutareserves binnenlands beleid bepalen" },
          { en: "When trade surplus dictates monetary expansion", es: "Cuando el superávit comercial dicta la expansión monetaria", de: "Wenn Handelsüberschuss monetäre Expansion diktiert", nl: "Wanneer handelsoverschot monetaire expansie dicteert" }
        ],
        correct: 0,
        explanation: {
          en: "Fiscal dominance occurs when fiscal policy dominates monetary policy, forcing the central bank to monetize deficits. Sargent and Wallace's 'unpleasant monetarist arithmetic' shows that tight monetary policy today only delays inflation if fiscal deficits persist, ultimately requiring even more money printing later—a key mechanism driving hyperinflation when governments lose fiscal control.",
          es: "La dominancia fiscal ocurre cuando la política fiscal domina la política monetaria, forzando al banco central a monetizar déficits. La 'aritmética monetarista desagradable' de Sargent y Wallace muestra que la política monetaria restrictiva hoy solo retrasa la inflación si los déficits fiscales persisten, requiriendo finalmente aún más impresión de dinero después—un mecanismo clave que impulsa la hiperinflación cuando los gobiernos pierden control fiscal.",
          de: "Fiskalische Dominanz tritt auf, wenn Fiskalpolitik Geldpolitik dominiert und die Zentralbank zwingt, Defizite zu monetarisieren. Sargent und Wallaces 'unangenehme monetaristische Arithmetik' zeigt, dass straffe Geldpolitik heute Inflation nur verzögert, wenn fiskalische Defizite bestehen bleiben, was letztendlich noch mehr Gelddrucken später erfordert—ein Schlüsselmechanismus, der Hyperinflation antreibt, wenn Regierungen fiskalische Kontrolle verlieren.",
          nl: "Fiscale dominantie treedt op wanneer fiscaal beleid monetair beleid domineert, de centrale bank dwingend tekorten te monetariseren. Sargent en Wallace's 'onaangename monetaristische rekenkunde' toont dat strak monetair beleid vandaag inflatie alleen uitstelt als fiscale tekorten aanhouden, uiteindelijk nog meer geld drukken later vereisend—een sleutelmechanisme dat hyperinflatie drijft wanneer regeringen fiscale controle verliezen."
        }
      },
      {
        question: {
          en: "Which complex adaptive systems concept explains how local currency substitution decisions create emergent hyperinflation patterns?",
          es: "¿Qué concepto de sistemas adaptativos complejos explica cómo las decisiones locales de sustitución de moneda crean patrones emergentes de hiperinflación?",
          de: "Welches Konzept komplexer adaptiver Systeme erklärt, wie lokale Währungssubstitutionsentscheidungen emergente Hyperinflationsmuster erzeugen?",
          nl: "Welk complex adaptief systemen concept verklaart hoe lokale valutavervanging beslissingen emergente hyperinflatie patronen creëren?"
        },
        options: [
          { en: "Percolation theory and network connectivity thresholds", es: "Teoría de percolación y umbrales de conectividad de red", de: "Perkolationstheorie und Netzwerkkonnektivitätsschwellen", nl: "Percolatie theorie en netwerk connectiviteit drempels" },
          { en: "Self-organized criticality and avalanche dynamics", es: "Criticidad auto-organizada y dinámica de avalancha", de: "Selbstorganisierte Kritikalität und Lawinendynamik", nl: "Zelf-georganiseerde criticaliteit en lawine dynamiek" },
          { en: "Agent-based modeling with heterogeneous expectations", es: "Modelado basado en agentes con expectativas heterogéneas", de: "Agentenbasierte Modellierung mit heterogenen Erwartungen", nl: "Agent-gebaseerde modellering met heterogene verwachtingen" },
          { en: "Cellular automata with threshold activation rules", es: "Autómatas celulares con reglas de activación de umbral", de: "Zelluläre Automaten mit Schwellenaktivierungsregeln", nl: "Cellulaire automata met drempel activatie regels" }
        ],
        correct: 0,
        explanation: {
          en: "Percolation theory explains how individual currency substitution decisions create system-wide collapse: when enough people (above critical threshold) abandon domestic currency, a connected network of dollarization spreads through the economy like fluid through porous media. This phase transition from isolated substitution to pervasive dollarization marks hyperinflation's acceleration into terminal phase.",
          es: "La teoría de percolación explica cómo las decisiones individuales de sustitución de moneda crean colapso a nivel de sistema: cuando suficientes personas (por encima del umbral crítico) abandonan la moneda nacional, una red conectada de dolarización se extiende por la economía como fluido a través de medios porosos. Esta transición de fase de sustitución aislada a dolarización generalizada marca la aceleración de la hiperinflación hacia la fase terminal.",
          de: "Perkolationstheorie erklärt, wie individuelle Währungssubstitutionsentscheidungen systemweiten Zusammenbruch erzeugen: Wenn genug Menschen (über kritischem Schwellenwert) die Inlandswährung aufgeben, breitet sich ein verbundenes Netzwerk der Dollarisierung durch die Wirtschaft aus wie Flüssigkeit durch poröse Medien. Dieser Phasenübergang von isolierter Substitution zu durchdringender Dollarisierung markiert die Beschleunigung der Hyperinflation in die Endphase.",
          nl: "Percolatie theorie verklaart hoe individuele valutavervanging beslissingen systeemwijde ineenstorting creëren: wanneer genoeg mensen (boven kritische drempel) binnenlandse valuta verlaten, verspreidt een verbonden netwerk van dollarisatie zich door de economie zoals vloeistof door poreuze media. Deze fase transitie van geïsoleerde vervanging naar alomtegenwoordige dollarisatie markeert hyperinflatie's versnelling naar terminale fase."
        }
      },
      {
        question: {
          en: "What is the 'credibility reversal' phenomenon in hyperinflation stabilization programs?",
          es: "¿Qué es el fenómeno de 'reversión de credibilidad' en programas de estabilización de hiperinflación?",
          de: "Was ist das 'Glaubwürdigkeitsumkehr'-Phänomen in Hyperinflationsstabilisierungsprogrammen?",
          nl: "Wat is het 'geloofwaardigheid omkering' fenomeen in hyperinflatie stabilisatie programma's?"
        },
        options: [
          { en: "When successful early reforms unexpectedly increase inflation expectations", es: "Cuando reformas tempranas exitosas inesperadamente aumentan expectativas de inflación", de: "Wenn erfolgreiche frühe Reformen unerwartet Inflationserwartungen erhöhen", nl: "Wanneer succesvolle vroege hervormingen onverwacht inflatie verwachtingen verhogen" },
          { en: "When government credibility paradoxically decreases as reforms succeed", es: "Cuando la credibilidad del gobierno paradójicamente disminuye a medida que las reformas tienen éxito", de: "Wenn Regierungsglaubwürdigkeit paradoxerweise abnimmt, wenn Reformen erfolgreich sind", nl: "Wanneer overheidsgeloofwaardigheid paradoxaal afneemt naarmate hervormingen slagen" },
          { en: "When harsh stabilization policies suddenly become credible through demonstrated commitment", es: "Cuando políticas de estabilización duras repentinamente se vuelven creíbles a través de compromiso demostrado", de: "Wenn harte Stabilisierungspolitiken plötzlich durch demonstriertes Engagement glaubwürdig werden", nl: "Wanneer harde stabilisatie beleidsmaatregelen plotseling geloofwaardig worden door aangetoonde toewijding" },
          { en: "When central bank independence undermines fiscal credibility", es: "Cuando la independencia del banco central socava la credibilidad fiscal", de: "Wenn Zentralbankunabhängigkeit fiskalische Glaubwürdigkeit untergräbt", nl: "Wanneer centrale bank onafhankelijkheid fiscale geloofwaardigheid ondermijnt" }
        ],
        correct: 2,
        explanation: {
          en: "Credibility reversal occurs when seemingly impossible-to-maintain harsh policies become credible precisely because their severity signals genuine commitment. A government that implements extremely painful measures (massive spending cuts, tight money) demonstrates it will endure political costs, making the policy credible and allowing rapid expectation adjustment—explaining why some 'shock therapy' programs succeed despite initially appearing unsustainable.",
          es: "La reversión de credibilidad ocurre cuando políticas duras aparentemente imposibles de mantener se vuelven creíbles precisamente porque su severidad señala compromiso genuino. Un gobierno que implementa medidas extremadamente dolorosas (recortes masivos de gastos, dinero restrictivo) demuestra que soportará costos políticos, haciendo la política creíble y permitiendo ajuste rápido de expectativas—explicando por qué algunos programas de 'terapia de choque' tienen éxito a pesar de parecer inicialmente insostenibles.",
          de: "Glaubwürdigkeitsumkehr tritt auf, wenn scheinbar unmöglich aufrechtzuerhaltende harte Politiken gerade wegen ihrer Schwere glaubwürdig werden, die echtes Engagement signalisiert. Eine Regierung, die extrem schmerzhafte Maßnahmen implementiert (massive Ausgabenkürzungen, strenges Geld) demonstriert, dass sie politische Kosten ertragen wird, macht die Politik glaubwürdig und ermöglicht schnelle Erwartungsanpassung—erklärt, warum einige 'Schocktherapie'-Programme trotz anfänglich unhaltbarer Erscheinung erfolgreich sind.",
          nl: "Geloofwaardigheid omkering treedt op wanneer schijnbaar onmogelijk te handhaven hard beleid geloofwaardig wordt precies omdat hun strengheid echte toewijding signaleert. Een regering die extreem pijnlijke maatregelen implementeert (massale uitgaven bezuinigingen, strak geld) toont dat het politieke kosten zal dragen, het beleid geloofwaardig makend en snelle verwachting aanpassing toestaan—verklaart waarom sommige 'schoktherapie' programma's slagen ondanks aanvankelijk onhoudbaar lijken."
        }
      },
      {
        question: {
          en: "Which mathematical concept from information theory quantifies the destruction of monetary information during hyperinflation?",
          es: "¿Qué concepto matemático de la teoría de la información cuantifica la destrucción de información monetaria durante la hiperinflación?",
          de: "Welches mathematische Konzept aus der Informationstheorie quantifiziert die Zerstörung monetärer Information während der Hyperinflation?",
          nl: "Welk wiskundig concept uit informatie theorie kwantificeert de vernietiging van monetaire informatie tijdens hyperinflatie?"
        },
        options: [
          { en: "Shannon entropy of price signal degradation", es: "Entropía de Shannon de degradación de señal de precios", de: "Shannon-Entropie der Preissignalverschlechterung", nl: "Shannon entropie van prijs signaal degradatie" },
          { en: "Fisher information loss in price discovery mechanisms", es: "Pérdida de información de Fisher en mecanismos de descubrimiento de precios", de: "Fisher-Informationsverlust in Preisfindungsmechanismen", nl: "Fisher informatie verlies in prijs ontdekking mechanismen" },
          { en: "Kolmogorov complexity of inflation time series", es: "Complejidad de Kolmogorov de series temporales de inflación", de: "Kolmogorov-Komplexität von Inflationszeitreihen", nl: "Kolmogorov complexiteit van inflatie tijdreeksen" },
          { en: "Algorithmic randomness of currency denomination sequences", es: "Aleatoriedad algorítmica de secuencias de denominación de moneda", de: "Algorithmische Zufälligkeit von Währungsstückelungssequenzen", nl: "Algoritmische willekeur van valuta coupure sequenties" }
        ],
        correct: 1,
        explanation: {
          en: "Fisher information loss quantifies how hyperinflation destroys price system's information content. Fisher information measures how much data tells us about parameters—in hyperinflation, extreme volatility obliterates price signals' informational value, making it impossible to infer relative scarcities. This information destruction explains why hyperinflation causes such severe resource misallocation beyond simple menu costs.",
          es: "La pérdida de información de Fisher cuantifica cómo la hiperinflación destruye el contenido de información del sistema de precios. La información de Fisher mide cuánto nos dicen los datos sobre parámetros—en hiperinflación, la volatilidad extrema oblitera el valor informacional de señales de precios, haciendo imposible inferir escaseces relativas. Esta destrucción de información explica por qué la hiperinflación causa asignación errónea de recursos tan severa más allá de simples costos de menú.",
          de: "Fisher-Informationsverlust quantifiziert, wie Hyperinflation den Informationsgehalt des Preissystems zerstört. Fisher-Information misst, wie viel Daten über Parameter aussagen—in Hyperinflation obliteriert extreme Volatilität den Informationswert von Preissignalen, macht es unmöglich, relative Knappheiten zu inferieren. Diese Informationszerstörung erklärt, warum Hyperinflation so schwere Ressourcenfehlallokation verursacht über einfache Menükosten hinaus.",
          nl: "Fisher informatie verlies kwantificeert hoe hyperinflatie prijssysteem's informatie inhoud vernietigt. Fisher informatie meet hoeveel data ons vertelt over parameters—in hyperinflatie, extreme volatiliteit vernietig prijssignalen's informationale waarde, het onmogelijk makend relatieve schaarste te infereren. Deze informatie vernietiging verklaart waarom hyperinflatie zulke ernstige resource misallocatie veroorzaakt voorbij simpele menukosten."
        }
      },
      {
        question: {
          en: "What is the 'velocity trap' in hyperinflation and why is it mathematically inevitable above certain inflation rates?",
          es: "¿Qué es la 'trampa de velocidad' en la hiperinflación y por qué es matemáticamente inevitable por encima de ciertas tasas de inflación?",
          de: "Was ist die 'Geschwindigkeitsfalle' in Hyperinflation und warum ist sie mathematisch unvermeidlich über bestimmten Inflationsraten?",
          nl: "Wat is de 'snelheid val' in hyperinflatie en waarom is het wiskundig onvermijdelijk boven bepaalde inflatie percentages?"
        },
        options: [
          { en: "Velocity becomes negatively correlated with money supply growth", es: "La velocidad se correlaciona negativamente con el crecimiento de oferta monetaria", de: "Umlaufgeschwindigkeit korreliert negativ mit Geldmengenwachstum", nl: "Snelheid correleert negatief met geldhoeveelheid groei" },
          { en: "Positive feedback loop where rising velocity requires faster printing, accelerating velocity further", es: "Bucle de retroalimentación positiva donde velocidad creciente requiere impresión más rápida, acelerando velocidad aún más", de: "Positive Rückkopplungsschleife, wo steigende Umlaufgeschwindigkeit schnelleres Drucken erfordert, Geschwindigkeit weiter beschleunigend", nl: "Positieve feedback lus waar stijgende snelheid sneller drukken vereist, snelheid verder versnellend" },
          { en: "Velocity reaches physical maximum of transaction processing", es: "La velocidad alcanza el máximo físico de procesamiento de transacciones", de: "Umlaufgeschwindigkeit erreicht physisches Maximum der Transaktionsverarbeitung", nl: "Snelheid bereikt fysiek maximum van transactie verwerking" },
          { en: "Velocity stabilizes through currency substitution equilibrium", es: "La velocidad se estabiliza a través del equilibrio de sustitución de moneda", de: "Umlaufgeschwindigkeit stabilisiert sich durch Währungssubstitutionsgleichgewicht", nl: "Snelheid stabiliseert door valutavervanging evenwicht" }
        ],
        correct: 1,
        explanation: {
          en: "The velocity trap is a positive feedback loop: inflation increases velocity (people spend faster) → real seigniorage revenue falls → government prints more money → inflation accelerates → velocity increases further. This creates an unstable dynamic system where velocity asymptotically approaches infinity. Above critical inflation rates, the equation of exchange (MV = PY) mathematically implies velocity must accelerate without bound, making hyperinflation self-reinforcing and terminal.",
          es: "La trampa de velocidad es un bucle de retroalimentación positiva: inflación aumenta velocidad (personas gastan más rápido) → ingresos reales por señoreaje caen → gobierno imprime más dinero → inflación se acelera → velocidad aumenta más. Esto crea un sistema dinámico inestable donde velocidad asintóticamente se aproxima a infinito. Por encima de tasas críticas de inflación, la ecuación de intercambio (MV = PY) matemáticamente implica que velocidad debe acelerarse sin límite, haciendo hiperinflación auto-reforzante y terminal.",
          de: "Die Geschwindigkeitsfalle ist eine positive Rückkopplungsschleife: Inflation erhöht Umlaufgeschwindigkeit (Menschen geben schneller aus) → reale Seigniorage-Einnahmen fallen → Regierung druckt mehr Geld → Inflation beschleunigt → Umlaufgeschwindigkeit steigt weiter. Dies erzeugt ein instabiles dynamisches System, wo Umlaufgeschwindigkeit asymptotisch gegen unendlich geht. Über kritischen Inflationsraten impliziert die Verkehrsgleichung (MV = PY) mathematisch, dass Umlaufgeschwindigkeit unbegrenzt beschleunigen muss, macht Hyperinflation selbstverstärkend und terminal.",
          nl: "De snelheid val is een positieve feedback lus: inflatie verhoogt snelheid (mensen geven sneller uit) → reële seigniorage opbrengst daalt → regering drukt meer geld → inflatie versnelt → snelheid neemt verder toe. Dit creëert een instabiel dynamisch systeem waar snelheid asymptotisch oneindig nadert. Boven kritieke inflatie percentages, impliceert de ruilgleichung (MV = PY) wiskundig dat snelheid zonder grens moet versnellen, hyperinflatie zelfversterkend en terminaal makend."
        }
      },
      {
        question: {
          en: "Which topological concept from dynamical systems theory describes hyperinflation's 'point of no return'?",
          es: "¿Qué concepto topológico de la teoría de sistemas dinámicos describe el 'punto de no retorno' de la hiperinflación?",
          de: "Welches topologische Konzept aus der dynamischen Systemtheorie beschreibt den 'Punkt ohne Wiederkehr' der Hyperinflation?",
          nl: "Welk topologisch concept uit dynamische systemen theorie beschrijft hyperinflatie's 'punt van geen terugkeer'?"
        },
        options: [
          { en: "Saddle point with unstable manifold", es: "Punto de silla con variedad inestable", de: "Sattelpunkt mit instabiler Mannigfaltigkeit", nl: "Zadelpunt met instabiele varieteit" },
          { en: "Basin boundary separating attraction domains", es: "Frontera de cuenca separando dominios de atracción", de: "Beckengrenze trennt Attraktionsdomänen", nl: "Bekken grens scheidend attractie domeinen" },
          { en: "Homoclinic orbit approaching unstable equilibrium", es: "Órbita homoclínica aproximándose a equilibrio inestable", de: "Homokline Bahn nähert sich instabilem Gleichgewicht", nl: "Homoklinische baan naderend instabiel evenwicht" },
          { en: "Strange attractor with fractal dimension", es: "Atractor extraño con dimensión fractal", de: "Seltsamer Attraktor mit fraktaler Dimension", nl: "Vreemde attractor met fractale dimensie" }
        ],
        correct: 1,
        explanation: {
          en: "The basin boundary separates initial conditions leading to different long-term outcomes (stable inflation vs. hyperinflation). Crossing this boundary represents the 'point of no return'—once the economy enters the hyperinflation basin of attraction, even optimal policies may not return it to stability without complete monetary reform. This topological feature explains why gradual policy adjustments fail once hyperinflation begins.",
          es: "La frontera de cuenca separa condiciones iniciales que llevan a resultados a largo plazo diferentes (inflación estable vs. hiperinflación). Cruzar esta frontera representa el 'punto de no retorno'—una vez que la economía entra en la cuenca de atracción de hiperinflación, incluso políticas óptimas pueden no devolverla a estabilidad sin reforma monetaria completa. Esta característica topológica explica por qué ajustes graduales de política fallan una vez que comienza la hiperinflación.",
          de: "Die Beckengrenze trennt Anfangsbedingungen, die zu unterschiedlichen langfristigen Ergebnissen führen (stabile Inflation vs. Hyperinflation). Das Überschreiten dieser Grenze stellt den 'Punkt ohne Wiederkehr' dar—sobald die Wirtschaft das Hyperinflations-Attraktionsbecken betritt, können selbst optimale Politiken sie nicht zur Stabilität zurückbringen ohne vollständige Währungsreform. Diese topologische Eigenschaft erklärt, warum allmähliche Politikanpassungen versagen, sobald Hyperinflation beginnt.",
          nl: "De bekken grens scheidt initiële condities leidend tot verschillende lange termijn uitkomsten (stabiele inflatie vs. hyperinflatie). Deze grens oversteken vertegenwoordigt het 'punt van geen terugkeer'—eenmaal de economie het hyperinflatie attractie bekken betreedt, kunnen zelfs optimale beleidsmaatregelen het niet terugbrengen naar stabiliteit zonder complete monetaire hervorming. Deze topologische eigenschap verklaart waarom geleidelijke beleids aanpassingen falen eenmaal hyperinflatie begint."
        }
      },
      {
        question: {
          en: "What is 'Goodhart's Law' dynamics in hyperinflation monetary targeting?",
          es: "¿Qué es la dinámica de 'Ley de Goodhart' en la fijación de objetivos monetarios de hiperinflación?",
          de: "Was ist 'Goodharts Gesetz'-Dynamik in der Hyperinflations-Geldmengenziel-Steuerung?",
          nl: "Wat is 'Goodhart's Wet' dynamiek in hyperinflatie monetaire targeting?"
        },
        options: [
          { en: "When a monetary measure becomes policy target, it ceases to be reliable indicator", es: "Cuando una medida monetaria se convierte en objetivo de política, deja de ser indicador confiable", de: "Wenn eine monetäre Maßgröße zum Politikziel wird, hört sie auf, zuverlässiger Indikator zu sein", nl: "Wanneer een monetaire maatstaf beleids doelwit wordt, houdt het op betrouwbare indicator te zijn" },
          { en: "Monetary targets become self-fulfilling through expectation channels", es: "Los objetivos monetarios se vuelven autocumplidos a través de canales de expectativas", de: "Geldmengenziele werden durch Erwartungskanäle selbsterfüllend", nl: "Monetaire doelstellingen worden zelfvervullend door verwachting kanalen" },
          { en: "Multiple equilibria emerge from single monetary policy rule", es: "Múltiples equilibrios emergen de una sola regla de política monetaria", de: "Mehrere Gleichgewichte entstehen aus einer einzelnen geldpolitischen Regel", nl: "Meerdere evenwichten ontstaan uit enkele monetaire beleidsregel" },
          { en: "Monetary aggregates lose economic meaning during rapid inflation", es: "Los agregados monetarios pierden significado económico durante inflación rápida", de: "Geldaggregate verlieren wirtschaftliche Bedeutung während schneller Inflation", nl: "Monetaire aggregaten verliezen economische betekenis tijdens snelle inflatie" }
        ],
        correct: 0,
        explanation: {
          en: "Goodhart's Law states that when a measure becomes a target, it ceases to be a good measure. In hyperinflation, targeting monetary aggregates causes financial innovation to circumvent controls (creating shadow money, using foreign currency, barter), breaking the relationship between measured aggregates and inflation. This explains why monetary targeting fails during hyperinflation—the act of targeting changes the behavior of the targeted variable.",
          es: "La Ley de Goodhart establece que cuando una medida se convierte en objetivo, deja de ser una buena medida. En hiperinflación, fijar como objetivo agregados monetarios causa innovación financiera para eludir controles (creando dinero sombra, usando moneda extranjera, trueque), rompiendo la relación entre agregados medidos e inflación. Esto explica por qué la fijación de objetivos monetarios falla durante la hiperinflación—el acto de fijar objetivos cambia el comportamiento de la variable objetivo.",
          de: "Goodharts Gesetz besagt, dass wenn eine Maßgröße zum Ziel wird, sie aufhört, eine gute Maßgröße zu sein. In Hyperinflation verursacht die Steuerung monetärer Aggregate finanzielle Innovation zur Umgehung von Kontrollen (Schaffung von Schattengeld, Verwendung von Fremdwährung, Tauschhandel), wodurch die Beziehung zwischen gemessenen Aggregaten und Inflation bricht. Dies erklärt, warum monetäre Zielsteuerung während Hyperinflation versagt—der Akt der Zielsteuerung ändert das Verhalten der Zielvariable.",
          nl: "Goodhart's Wet stelt dat wanneer een maatstaf een doelwit wordt, het ophoudt een goede maatstaf te zijn. In hyperinflatie, veroorzaakt monetaire aggregaten targeten financiële innovatie om controles te omzeilen (schaduwgeld creëren, vreemde valuta gebruiken, ruilhandel), de relatie tussen gemeten aggregaten en inflatie brekend. Dit verklaart waarom monetaire targeting faalt tijdens hyperinflatie—de daad van targeten verandert het gedrag van de target variabele."
        }
      },
      {
        question: {
          en: "Which stochastic calculus framework models hyperinflation as a jump-diffusion process with regime-dependent volatility?",
          es: "¿Qué marco de cálculo estocástico modela la hiperinflación como un proceso de salto-difusión con volatilidad dependiente del régimen?",
          de: "Welcher stochastische Kalkül-Rahmen modelliert Hyperinflation als Sprung-Diffusions-Prozess mit regimeabhängiger Volatilität?",
          nl: "Welk stochastisch calculus kader modelleert hyperinflatie als een sprong-diffusie proces met regime-afhankelijke volatiliteit?"
        },
        options: [
          { en: "Geometric Brownian motion with constant drift", es: "Movimiento browniano geométrico con deriva constante", de: "Geometrische Brownsche Bewegung mit konstantem Drift", nl: "Geometrische Brownse beweging met constante drift" },
          { en: "Ornstein-Uhlenbeck mean-reverting process", es: "Proceso de reversión a la media de Ornstein-Uhlenbeck", de: "Ornstein-Uhlenbeck Mean-Reverting-Prozess", nl: "Ornstein-Uhlenbeck gemiddelde-reverterende proces" },
          { en: "Lévy process with Poisson jumps and stochastic volatility", es: "Proceso de Lévy con saltos de Poisson y volatilidad estocástica", de: "Lévy-Prozess mit Poisson-Sprüngen und stochastischer Volatilität", nl: "Lévy proces met Poisson sprongen en stochastische volatiliteit" },
          { en: "Martingale representation with predictable variation", es: "Representación de martingala con variación predecible", de: "Martingal-Darstellung mit vorhersagbarer Variation", nl: "Martingale representatie met voorspelbare variatie" }
        ],
        correct: 2,
        explanation: {
          en: "Lévy processes with Poisson jumps capture hyperinflation's dual nature: continuous diffusion (normal volatility) plus discontinuous jumps (crises, policy changes). Regime-dependent stochastic volatility reflects how variance explodes in hyperinflation regime. This framework allows modeling sudden crashes, heavy-tailed distributions of returns, and volatility clustering—all empirically observed in hyperinflation data.",
          es: "Los procesos de Lévy con saltos de Poisson capturan la naturaleza dual de la hiperinflación: difusión continua (volatilidad normal) más saltos discontinuos (crisis, cambios de política). La volatilidad estocástica dependiente del régimen refleja cómo la varianza explota en el régimen de hiperinflación. Este marco permite modelar colapsos repentinos, distribuciones de colas pesadas de rendimientos y agrupamiento de volatilidad—todo observado empíricamente en datos de hiperinflación.",
          de: "Lévy-Prozesse mit Poisson-Sprüngen erfassen die duale Natur der Hyperinflation: kontinuierliche Diffusion (normale Volatilität) plus diskontinuierliche Sprünge (Krisen, Politikänderungen). Regimeabhängige stochastische Volatilität reflektiert, wie Varianz im Hyperinflationsregime explodiert. Dieser Rahmen ermöglicht Modellierung plötzlicher Abstürze, schwerlastige Verteilungen von Renditen und Volatilitäts-Clustering—alles empirisch in Hyperinflationsdaten beobachtet.",
          nl: "Lévy processen met Poisson sprongen vangen hyperinflatie's duale natuur: continue diffusie (normale volatiliteit) plus discontinue sprongen (crises, beleids veranderingen). Regime-afhankelijke stochastische volatiliteit reflecteert hoe variantie explodeert in hyperinflatie regime. Dit kader maakt modellering mogelijk van plotselinge crashes, zware-staart distributies van rendementen en volatiliteit clustering—allemaal empirisch waargenomen in hyperinflatie data."
        }
      },
      {
        question: {
          en: "What is the 'no-trade theorem' violation during hyperinflation and what does it reveal about market efficiency collapse?",
          es: "¿Qué es la violación del 'teorema de no intercambio' durante la hiperinflación y qué revela sobre el colapso de eficiencia del mercado?",
          de: "Was ist die 'Kein-Handel-Theorem'-Verletzung während der Hyperinflation und was enthüllt sie über den Zusammenbruch der Markteffizienz?",
          nl: "Wat is de 'geen-handel theorema' schending tijdens hyperinflatie en wat onthult het over markt efficiëntie ineenstorting?"
        },
        options: [
          { en: "Rational agents with common knowledge should not trade, yet hyperinflation sees massive trading volume", es: "Agentes racionales con conocimiento común no deberían comerciar, pero la hiperinflación ve un volumen de comercio masivo", de: "Rationale Agenten mit gemeinsamen Wissen sollten nicht handeln, dennoch sieht Hyperinflation massives Handelsvolumen", nl: "Rationele agenten met gemeenschappelijke kennis zouden niet moeten handelen, toch ziet hyperinflatie massaal handelsvolume" },
          { en: "Trade ceases entirely as price discovery mechanisms fail", es: "El comercio cesa completamente cuando fallan los mecanismos de descubrimiento de precios", de: "Handel hört vollständig auf, wenn Preisfindungsmechanismen versagen", nl: "Handel stopt volledig wanneer prijs ontdekking mechanismen falen" },
          { en: "Only insider trading persists during hyperinflation", es: "Solo persiste el comercio con información privilegiada durante la hiperinflación", de: "Nur Insiderhandel besteht während Hyperinflation fort", nl: "Alleen handel met voorkennis blijft bestaan tijdens hyperinflatie" },
          { en: "Trading volume becomes perfectly predictable from money supply", es: "El volumen de comercio se vuelve perfectamente predecible desde la oferta monetaria", de: "Handelsvolumen wird perfekt vorhersagbar aus Geldmenge", nl: "Handelsvolume wordt perfect voorspelbaar van geldhoeveelheid" }
        ],
        correct: 0,
        explanation: {
          en: "The no-trade theorem says rational agents with common knowledge and common priors shouldn't trade (what one wins, other loses). Hyperinflation violates this: massive speculative trading occurs because information asymmetry explodes, common knowledge breaks down, and agents have radically different beliefs about inflation paths. This violation signals complete market efficiency collapse—prices no longer aggregate information, pure speculation dominates.",
          es: "El teorema de no intercambio dice que agentes racionales con conocimiento común y priores comunes no deberían comerciar (lo que uno gana, otro pierde). La hiperinflación viola esto: comercio especulativo masivo ocurre porque la asimetría de información explota, el conocimiento común se rompe y los agentes tienen creencias radicalmente diferentes sobre trayectorias de inflación. Esta violación señala colapso completo de eficiencia del mercado—precios ya no agregan información, especulación pura domina.",
          de: "Das Kein-Handel-Theorem besagt, dass rationale Agenten mit gemeinsamem Wissen und gemeinsamen Vorannahmen nicht handeln sollten (was einer gewinnt, verliert der andere). Hyperinflation verletzt dies: massiver spekulativer Handel tritt auf, weil Informationsasymmetrie explodiert, gemeinsames Wissen zusammenbricht und Agenten radikal unterschiedliche Überzeugungen über Inflationspfade haben. Diese Verletzung signalisiert vollständigen Markteffizienz-Zusammenbruch—Preise aggregieren nicht mehr Information, reine Spekulation dominiert.",
          nl: "Het geen-handel theorema zegt dat rationele agenten met gemeenschappelijke kennis en gemeenschappelijke priors niet zouden moeten handelen (wat één wint, verliest ander). Hyperinflatie schendt dit: massale speculatieve handel vindt plaats omdat informatie asymmetrie explodeert, gemeenschappelijke kennis afbreekt en agenten radicaal verschillende overtuigingen hebben over inflatie paden. Deze schending signaleert complete markt efficiëntie ineenstorting—prijzen aggregeren geen informatie meer, pure speculatie domineert."
        }
      },
      {
        question: {
          en: "Which ergodic theory concept explains why historical hyperinflation data cannot predict future episodes' specific trajectories?",
          es: "¿Qué concepto de teoría ergódica explica por qué datos históricos de hiperinflación no pueden predecir trayectorias específicas de episodios futuros?",
          de: "Welches ergodische Theorie-Konzept erklärt, warum historische Hyperinflationsdaten spezifische Trajektorien zukünftiger Episoden nicht vorhersagen können?",
          nl: "Welk ergodisch theorie concept verklaart waarom historische hyperinflatie data geen specifieke trajecten van toekomstige episodes kunnen voorspellen?"
        },
        options: [
          { en: "Ergodicity allows averaging over time to equal ensemble average", es: "La ergodicidad permite promediar a lo largo del tiempo para igualar el promedio del conjunto", de: "Ergodizität ermöglicht Mittelung über Zeit gleich Ensemble-Durchschnitt", nl: "Ergodiciteit maakt middeling over tijd gelijk aan ensemble gemiddelde mogelijk" },
          { en: "Non-ergodicity means time-averages diverge from ensemble averages due to path dependence", es: "La no ergodicidad significa que promedios temporales divergen de promedios de conjunto debido a dependencia del camino", de: "Nicht-Ergodizität bedeutet, dass Zeit-Durchschnitte von Ensemble-Durchschnitten aufgrund von Pfadabhängigkeit abweichen", nl: "Niet-ergodiciteit betekent dat tijd-gemiddelden divergeren van ensemble gemiddelden door pad afhankelijkheid" },
          { en: "Mixing property ensures all trajectories converge to same distribution", es: "Propiedad de mezcla asegura que todas las trayectorias convergen a la misma distribución", de: "Mischungseigenschaft stellt sicher, dass alle Trajektorien zur gleichen Verteilung konvergieren", nl: "Mengings eigenschap zorgt ervoor dat alle trajecten naar dezelfde distributie convergeren" },
          { en: "Recurrence theorem guarantees cyclical patterns repeat", es: "Teorema de recurrencia garantiza que patrones cíclicos se repiten", de: "Wiederkehr-Theorem garantiert, dass zyklische Muster sich wiederholen", nl: "Terugkeer theorema garandeert dat cyclische patronen herhalen" }
        ],
        correct: 1,
        explanation: {
          en: "Hyperinflation is non-ergodic: time-averages (one country's experience) don't equal ensemble averages (across countries). Each hyperinflation follows path-dependent trajectory determined by initial conditions, random shocks, and policy responses. Historical data reveals typical patterns but cannot predict specific trajectories because non-ergodicity means ensemble statistics don't govern individual realizations—explaining why each hyperinflation is unique despite shared features.",
          es: "La hiperinflación no es ergódica: promedios temporales (experiencia de un país) no igualan promedios de conjunto (entre países). Cada hiperinflación sigue trayectoria dependiente del camino determinada por condiciones iniciales, choques aleatorios y respuestas de política. Datos históricos revelan patrones típicos pero no pueden predecir trayectorias específicas porque la no ergodicidad significa que estadísticas de conjunto no gobiernan realizaciones individuales—explicando por qué cada hiperinflación es única a pesar de características compartidas.",
          de: "Hyperinflation ist nicht-ergodisch: Zeit-Durchschnitte (Erfahrung eines Landes) gleichen nicht Ensemble-Durchschnitten (über Länder). Jede Hyperinflation folgt pfadabhängiger Trajektorie, bestimmt durch Anfangsbedingungen, zufällige Schocks und Politikantworten. Historische Daten enthüllen typische Muster, können aber spezifische Trajektorien nicht vorhersagen, weil Nicht-Ergodizität bedeutet, dass Ensemble-Statistiken individuelle Realisierungen nicht regieren—erklärt, warum jede Hyperinflation trotz gemeinsamer Eigenschaften einzigartig ist.",
          nl: "Hyperinflatie is niet-ergodisch: tijd-gemiddelden (ervaring van één land) zijn niet gelijk aan ensemble gemiddelden (over landen). Elke hyperinflatie volgt pad-afhankelijk traject bepaald door initiële condities, willekeurige schokken en beleids reacties. Historische data onthult typische patronen maar kan specifieke trajecten niet voorspellen omdat niet-ergodiciteit betekent dat ensemble statistieken individuele realisaties niet regeren—verklaart waarom elke hyperinflatie uniek is ondanks gedeelde kenmerken."
        }
      },
      {
        question: {
          en: "What is 'adaptive expectations divergence' in hyperinflation and how does it differ from rational expectations equilibrium?",
          es: "¿Qué es la 'divergencia de expectativas adaptativas' en la hiperinflación y en qué se diferencia del equilibrio de expectativas racionales?",
          de: "Was ist 'adaptive Erwartungsdivergenz' in Hyperinflation und wie unterscheidet sie sich vom rationalen Erwartungsgleichgewicht?",
          nl: "Wat is 'adaptieve verwachtingen divergentie' in hyperinflatie en hoe verschilt het van rationele verwachtingen evenwicht?"
        },
        options: [
          { en: "Adaptive expectations eventually converge to rational expectations", es: "Las expectativas adaptativas eventualmente convergen a expectativas racionales", de: "Adaptive Erwartungen konvergieren schließlich zu rationalen Erwartungen", nl: "Adaptieve verwachtingen convergeren uiteindelijk naar rationele verwachtingen" },
          { en: "Learning rates become heterogeneous, causing persistent expectation dispersion that never converges", es: "Tasas de aprendizaje se vuelven heterogéneas, causando dispersión persistente de expectativas que nunca converge", de: "Lernraten werden heterogen, verursachen persistente Erwartungsstreuung, die nie konvergiert", nl: "Leer percentages worden heterogeen, veroorzakend persistente verwachting spreiding die nooit convergeert" },
          { en: "Rational expectations dominate and eliminate adaptive updating", es: "Expectativas racionales dominan y eliminan actualización adaptativa", de: "Rationale Erwartungen dominieren und eliminieren adaptive Aktualisierung", nl: "Rationele verwachtingen domineren en elimineren adaptieve updating" },
          { en: "Both expectation types produce identical inflation forecasts", es: "Ambos tipos de expectativas producen pronósticos de inflación idénticos", de: "Beide Erwartungstypen produzieren identische Inflationsprognosen", nl: "Beide verwachting types produceren identieke inflatie voorspellingen" }
        ],
        correct: 1,
        explanation: {
          en: "In hyperinflation, learning rates become radically heterogeneous across agents due to differential information access and cognitive limitations. Unlike rational expectations equilibrium (where expectations converge to true model), adaptive expectations divergence creates permanent dispersion—sophisticated agents learn faster, naive agents lag perpetually. This expectation heterogeneity sustains speculation, prevents market clearing, and explains persistent mispricing that characterizes hyperinflation markets.",
          es: "En hiperinflación, las tasas de aprendizaje se vuelven radicalmente heterogéneas entre agentes debido al acceso diferencial a información y limitaciones cognitivas. A diferencia del equilibrio de expectativas racionales (donde expectativas convergen al modelo verdadero), la divergencia de expectativas adaptativas crea dispersión permanente—agentes sofisticados aprenden más rápido, agentes ingenuos se retrasan perpetuamente. Esta heterogeneidad de expectativas sostiene especulación, previene equilibrio de mercado y explica valoración errónea persistente que caracteriza mercados de hiperinflación.",
          de: "In Hyperinflation werden Lernraten radikal heterogen über Agenten aufgrund unterschiedlichen Informationszugangs und kognitiver Grenzen. Anders als rationales Erwartungsgleichgewicht (wo Erwartungen zum wahren Modell konvergieren), erzeugt adaptive Erwartungsdivergenz permanente Streuung—anspruchsvolle Agenten lernen schneller, naive Agenten hinken perpetuell hinterher. Diese Erwartungsheterogenität erhält Spekulation, verhindert Markt-Clearing und erklärt persistente Falschbewertung, die Hyperinflationsmärkte charakterisiert.",
          nl: "In hyperinflatie worden leer percentages radicaal heterogeen over agenten door differentiële informatie toegang en cognitieve beperkingen. Anders dan rationele verwachtingen evenwicht (waar verwachtingen convergeren naar ware model), creëert adaptieve verwachtingen divergentie permanente spreiding—verfijnde agenten leren sneller, naïeve agenten blijven perpetueel achter. Deze verwachting heterogeniteit houdt speculatie in stand, voorkomt markt clearing en verklaart persistente verkeerde prijsstelling die hyperinflatie markten karakteriseert."
        }
      },
      {
        question: {
          en: "Which contract theory framework explains why complete markets cannot exist during hyperinflation?",
          es: "¿Qué marco de teoría de contratos explica por qué mercados completos no pueden existir durante la hiperinflación?",
          de: "Welcher Vertragstheorie-Rahmen erklärt, warum vollständige Märkte während Hyperinflation nicht existieren können?",
          nl: "Welk contract theorie kader verklaart waarom complete markten niet kunnen bestaan tijdens hyperinflatie?"
        },
        options: [
          { en: "Arrow-Debreu complete markets remain feasible with proper indexation", es: "Mercados completos de Arrow-Debreu siguen siendo factibles con indexación adecuada", de: "Arrow-Debreu-vollständige Märkte bleiben mit richtiger Indexierung machbar", nl: "Arrow-Debreu complete markten blijven haalbaar met juiste indexering" },
          { en: "Hart-Moore incomplete contracts due to non-verifiable states and renegotiation costs", es: "Contratos incompletos de Hart-Moore debido a estados no verificables y costos de renegociación", de: "Hart-Moore-unvollständige Verträge aufgrund nicht verifizierbarer Zustände und Neuverhandlungskosten", nl: "Hart-Moore incomplete contracten door niet-verifieerbare toestanden en heronderhandeling kosten" },
          { en: "Coase theorem ensures efficient contracting regardless of inflation", es: "Teorema de Coase asegura contratación eficiente independientemente de la inflación", de: "Coase-Theorem sichert effiziente Vertragsgestaltung unabhängig von Inflation", nl: "Coase theorema verzekert efficiënte contractering ongeacht inflatie" },
          { en: "Modigliani-Miller irrelevance applies to hyperinflation contracts", es: "Irrelevancia de Modigliani-Miller se aplica a contratos de hiperinflación", de: "Modigliani-Miller-Irrelevanz gilt für Hyperinflationsverträge", nl: "Modigliani-Miller irrelevantie is van toepassing op hyperinflatie contracten" }
        ],
        correct: 1,
        explanation: {
          en: "Hart-Moore incomplete contracts theory shows hyperinflation makes states non-verifiable (impossible to write enforceable contracts contingent on inflation) and renegotiation costs prohibitive (contracts constantly need updating). This fundamental incompleteness means Arrow-Debreu complete markets cannot exist—agents cannot hedge all risks, prices cannot aggregate all information, and Pareto efficiency is impossible. Market incompleteness is intrinsic, not fixable by clever contract design.",
          es: "La teoría de contratos incompletos de Hart-Moore muestra que la hiperinflación hace que estados sean no verificables (imposible escribir contratos ejecutables contingentes a inflación) y costos de renegociación prohibitivos (contratos necesitan actualización constante). Esta incompletitud fundamental significa que mercados completos de Arrow-Debreu no pueden existir—agentes no pueden cubrir todos los riesgos, precios no pueden agregar toda información y eficiencia de Pareto es imposible. Incompletitud de mercado es intrínseca, no arreglable por diseño ingenioso de contratos.",
          de: "Hart-Moore-Theorie unvollständiger Verträge zeigt, dass Hyperinflation Zustände nicht verifizierbar macht (unmöglich, durchsetzbare inflationsabhängige Verträge zu schreiben) und Neuverhandlungskosten prohibitiv (Verträge benötigen ständige Aktualisierung). Diese fundamentale Unvollständigkeit bedeutet, dass Arrow-Debreu-vollständige Märkte nicht existieren können—Agenten können nicht alle Risiken absichern, Preise können nicht alle Informationen aggregieren und Pareto-Effizienz ist unmöglich. Markt-Unvollständigkeit ist intrinsisch, nicht durch cleveres Vertragsdesign behebbar.",
          nl: "Hart-Moore incomplete contracten theorie toont dat hyperinflatie toestanden niet-verifieerbaar maakt (onmogelijk om afdwingbare contracten contingent op inflatie te schrijven) en heronderhandeling kosten prohibitief (contracten hebben voortdurend updaten nodig). Deze fundamentele incompleteness betekent dat Arrow-Debreu complete markten niet kunnen bestaan—agenten kunnen niet alle risico's afdekken, prijzen kunnen niet alle informatie aggregeren en Pareto efficiëntie is onmogelijk. Markt incompleteness is intrinsiek, niet op te lossen door slim contract ontwerp."
        }
      },
      {
        question: {
          en: "What is the 'Lucas critique' application to hyperinflation stabilization and why do historical policy rules fail?",
          es: "¿Cuál es la aplicación de la 'crítica de Lucas' a la estabilización de hiperinflación y por qué fallan las reglas de política históricas?",
          de: "Was ist die 'Lucas-Kritik'-Anwendung auf Hyperinflationsstabilisierung und warum versagen historische Politikregeln?",
          nl: "Wat is de 'Lucas kritiek' toepassing op hyperinflatie stabilisatie en waarom falen historische beleidsregels?"
        },
        options: [
          { en: "Historical correlations remain stable across policy regimes", es: "Correlaciones históricas permanecen estables a través de regímenes de política", de: "Historische Korrelationen bleiben über Politikregime stabil", nl: "Historische correlaties blijven stabiel over beleids regimes" },
          { en: "Policy interventions change behavioral relationships, invalidating models based on historical data", es: "Intervenciones de política cambian relaciones de comportamiento, invalidando modelos basados en datos históricos", de: "Politikinterventionen ändern Verhaltensbeziehungen, invalidieren auf historischen Daten basierende Modelle", nl: "Beleids interventies veranderen gedrag relaties, modellen gebaseerd op historische data invaliderend" },
          { en: "Structural parameters are policy-invariant and can be estimated from any sample", es: "Parámetros estructurales son invariantes a política y pueden estimarse desde cualquier muestra", de: "Strukturparameter sind politikinvariant und können aus jeder Stichprobe geschätzt werden", nl: "Structurele parameters zijn beleids-invariant en kunnen geschat worden uit elke steekproef" },
          { en: "Reduced-form relationships provide reliable policy guidance", es: "Relaciones de forma reducida proporcionan guía de política confiable", de: "Reduzierte-Form-Beziehungen bieten verlässliche Politikanleitung", nl: "Gereduceerde-vorm relaties bieden betrouwbare beleids geleiding" }
        ],
        correct: 1,
        explanation: {
          en: "Lucas critique warns that policy interventions change agents' behavior, breaking historical relationships. In hyperinflation, imposing stabilization changes how people form expectations, velocity of money, currency substitution rates—all relationships estimated from hyperinflation period become invalid post-stabilization. This explains why policies calibrated to historical data often fail: the very act of implementing policy changes the economic structure being modeled. Only deep structural parameters (preferences, technology) remain invariant.",
          es: "La crítica de Lucas advierte que intervenciones de política cambian el comportamiento de agentes, rompiendo relaciones históricas. En hiperinflación, imponer estabilización cambia cómo las personas forman expectativas, velocidad del dinero, tasas de sustitución de moneda—todas las relaciones estimadas del período de hiperinflación se vuelven inválidas post-estabilización. Esto explica por qué políticas calibradas a datos históricos a menudo fallan: el acto mismo de implementar política cambia la estructura económica siendo modelada. Solo parámetros estructurales profundos (preferencias, tecnología) permanecen invariantes.",
          de: "Lucas-Kritik warnt, dass Politikinterventionen Agenten-Verhalten ändern, historische Beziehungen brechen. In Hyperinflation ändert Stabilisierungsimplementierung, wie Menschen Erwartungen bilden, Geldumlaufgeschwindigkeit, Währungssubstitutionsraten—alle aus Hyperinflationsperiode geschätzten Beziehungen werden post-Stabilisierung ungültig. Dies erklärt, warum auf historische Daten kalibrierte Politiken oft versagen: der Akt der Politikimplementierung selbst ändert die modellierte ökonomische Struktur. Nur tiefe Strukturparameter (Präferenzen, Technologie) bleiben invariant.",
          nl: "Lucas kritiek waarschuwt dat beleids interventies agenten gedrag veranderen, historische relaties brekend. In hyperinflatie verandert stabilisatie opleggen hoe mensen verwachtingen vormen, snelheid van geld, valuta vervanging percentages—alle relaties geschat uit hyperinflatie periode worden ongeldig post-stabilisatie. Dit verklaart waarom beleidsmaatregelen gekalibreerd op historische data vaak falen: de daad zelf van beleid implementeren verandert de economische structuur die gemodelleerd wordt. Alleen diepe structurele parameters (voorkeuren, technologie) blijven invariant."
        }
      },
      {
        question: {
          en: "Which mechanism design theory explains why commitment devices are necessary but often insufficient for hyperinflation stabilization?",
          es: "¿Qué teoría de diseño de mecanismos explica por qué los dispositivos de compromiso son necesarios pero a menudo insuficientes para la estabilización de hiperinflación?",
          de: "Welche Mechanismus-Design-Theorie erklärt, warum Commitment-Geräte für Hyperinflationsstabilisierung notwendig aber oft unzureichend sind?",
          nl: "Welke mechanisme ontwerp theorie verklaart waarom commitment apparaten noodzakelijk maar vaak onvoldoende zijn voor hyperinflatie stabilisatie?"
        },
        options: [
          { en: "Revelation principle ensures truthful reporting makes commitment unnecessary", es: "Principio de revelación asegura que informes veraces hacen innecesario el compromiso", de: "Offenbarungsprinzip stellt sicher, dass wahrheitsgemäße Berichterstattung Commitment unnötig macht", nl: "Onthulling principe verzekert dat waarheidsgetrouwe rapportage commitment onnodig maakt" },
          { en: "Myerson-Satterthwaite impossibility: efficient trade requires commitment, but renegotiation undermines it", es: "Imposibilidad de Myerson-Satterthwaite: comercio eficiente requiere compromiso, pero renegociación lo socava", de: "Myerson-Satterthwaite-Unmöglichkeit: effizienter Handel erfordert Commitment, aber Neuverhandlung untergräbt es", nl: "Myerson-Satterthwaite onmogelijkheid: efficiënte handel vereist commitment, maar heronderhandeling ondermijnt het" },
          { en: "Vickrey auction mechanisms eliminate need for commitment", es: "Mecanismos de subasta de Vickrey eliminan necesidad de compromiso", de: "Vickrey-Auktionsmechanismen eliminieren Bedarf an Commitment", nl: "Vickrey veiling mechanismen elimineren behoefte aan commitment" },
          { en: "Pivotal mechanism ensures dominant strategy equilibrium without commitment", es: "Mecanismo pivote asegura equilibrio de estrategia dominante sin compromiso", de: "Pivotaler Mechanismus sichert dominantes Strategie-Gleichgewicht ohne Commitment", nl: "Pivot mechanisme verzekert dominant strategie evenwicht zonder commitment" }
        ],
        correct: 1,
        explanation: {
          en: "Myerson-Satterthwaite impossibility theorem shows that when parties have private information (government knows fiscal situation, citizens know inflation expectations), achieving efficient outcomes requires binding commitment. However, hyperinflation creates enormous gains from renegotiation (printing money provides immediate relief), making commitment unsustainable despite institutions like currency boards or central bank independence. This explains why formal commitment devices often fail—the temptation to renegotiate overwhelms institutional constraints.",
          es: "El teorema de imposibilidad de Myerson-Satterthwaite muestra que cuando las partes tienen información privada (gobierno conoce situación fiscal, ciudadanos conocen expectativas de inflación), lograr resultados eficientes requiere compromiso vinculante. Sin embargo, la hiperinflación crea enormes ganancias de renegociación (imprimir dinero proporciona alivio inmediato), haciendo el compromiso insostenible a pesar de instituciones como cajas de conversión o independencia del banco central. Esto explica por qué dispositivos formales de compromiso a menudo fallan—la tentación de renegociar supera restricciones institucionales.",
          de: "Myerson-Satterthwaite-Unmöglichkeitstheorem zeigt, dass wenn Parteien private Information haben (Regierung kennt fiskalische Situation, Bürger kennen Inflationserwartungen), effiziente Ergebnisse bindendes Commitment erfordern. Hyperinflation erzeugt jedoch enorme Gewinne aus Neuverhandlung (Gelddrucken bietet sofortige Erleichterung), macht Commitment unhaltbar trotz Institutionen wie Currency Boards oder Zentralbankunabhängigkeit. Dies erklärt, warum formale Commitment-Geräte oft versagen—Versuchung zu renegotiation überw ältigt institutionelle Beschränkungen.",
          nl: "Myerson-Satterthwaite onmogelijkheid theorema toont dat wanneer partijen private informatie hebben (regering kent fiscale situatie, burgers kennen inflatie verwachtingen), efficiënte uitkomsten bereiken bindend commitment vereist. Echter, hyperinflatie creëert enorme winsten uit heronderhandeling (geld drukken biedt onmiddellijke verlichting), commitment onhoudbaar makend ondanks instellingen zoals currency boards of centrale bank onafhankelijkheid. Dit verklaart waarom formele commitment apparaten vaak falen—de verleiding om te heronderhandelen overweldigt institutionele beperkingen."
        }
      },
      {
        question: {
          en: "What is 'sunspot equilibrium' in hyperinflation and how does it explain self-fulfilling crises?",
          es: "¿Qué es el 'equilibrio de mancha solar' en la hiperinflación y cómo explica crisis autocumplidas?",
          de: "Was ist 'Sonnenflecken-Gleichgewicht' in Hyperinflation und wie erklärt es selbsterfüllende Krisen?",
          nl: "Wat is 'zonnevlek evenwicht' in hyperinflatie en hoe verklaart het zelfvervullende crises?"
        },
        options: [
          { en: "Equilibria depend on fundamentals only, not extrinsic randomness", es: "Equilibrios dependen solo de fundamentos, no de aleatoriedad extrínseca", de: "Gleichgewichte hängen nur von Fundamentaldaten ab, nicht von extrinsischer Zufälligkeit", nl: "Evenwichten hangen alleen af van fundamenten, niet van extrinsieke willekeur" },
          { en: "Multiple equilibria where outcomes depend on self-fulfilling beliefs coordinated by irrelevant variables", es: "Múltiples equilibrios donde resultados dependen de creencias autocumplidas coordinadas por variables irrelevantes", de: "Multiple Gleichgewichte, wo Ergebnisse von selbsterfüllenden Überzeugungen abhängen, koordiniert durch irrelevante Variablen", nl: "Meerdere evenwichten waar uitkomsten afhangen van zelfvervullende overtuigingen gecoördineerd door irrelevante variabelen" },
          { en: "Unique equilibrium determined by rational expectations", es: "Equilibrio único determinado por expectativas racionales", de: "Eindeutiges Gleichgewicht bestimmt durch rationale Erwartungen", nl: "Uniek evenwicht bepaald door rationele verwachtingen" },
          { en: "Equilibria are unaffected by coordination mechanisms", es: "Equilibrios no son afectados por mecanismos de coordinación", de: "Gleichgewichte sind von Koordinationsmechanismen unbeeinflusst", nl: "Evenwichten zijn onaangetast door coördinatie mechanismen" }
        ],
        correct: 1,
        explanation: {
          en: "Sunspot equilibria occur when fundamentals admit multiple equilibria, and agents coordinate on one via irrelevant variables ('sunspots'). In hyperinflation, if everyone believes currency will collapse, they rush to spend/substitute currency, causing actual collapse—self-fulfilling. But stable inflation is also consistent with same fundamentals if beliefs coordinate differently. This multiplicity explains sudden hyperinflation onset without fundamental changes—crisis coordination jumps from good to bad equilibrium triggered by arbitrary events.",
          es: "Equilibrios de mancha solar ocurren cuando fundamentos admiten múltiples equilibrios, y agentes coordinan en uno vía variables irrelevantes ('manchas solares'). En hiperinflación, si todos creen que la moneda colapsará, se apresuran a gastar/sustituir moneda, causando colapso real—autocumplido. Pero inflación estable también es consistente con mismos fundamentos si creencias coordinan diferente. Esta multiplicidad explica inicio repentino de hiperinflación sin cambios fundamentales—coordinación de crisis salta de equilibrio bueno a malo desencadenado por eventos arbitrarios.",
          de: "Sonnenflecken-Gleichgewichte treten auf, wenn Fundamentaldaten multiple Gleichgewichte zulassen und Agenten über irrelevante Variablen ('Sonnenflecken') auf eines koordinieren. In Hyperinflation, wenn alle glauben, Währung wird kollabieren, beeilen sie sich, Währung auszugeben/zu substituieren, verursachen tatsächlichen Kollaps—selbsterfüllend. Aber stabile Inflation ist auch mit denselben Fundamentaldaten konsistent, wenn Überzeugungen anders koordinieren. Diese Multiplizität erklärt plötzlichen Hyperinflationsbeginn ohne fundamentale Änderungen—Krisenkoordination springt von gutem zu schlechtem Gleichgewicht, ausgelöst durch arbiträre Ereignisse.",
          nl: "Zonnevlek evenwichten treden op wanneer fundamenten meerdere evenwichten toelaten, en agenten op één coördineren via irrelevante variabelen ('zonnevlekken'). In hyperinflatie, als iedereen gelooft dat valuta zal instorten, haasten ze zich om valuta uit te geven/vervangen, werkelijke ineenstorting veroorzakend—zelfvervullend. Maar stabiele inflatie is ook consistent met dezelfde fundamenten als overtuigingen anders coördineren. Deze multipliciteit verklaart plotseling hyperinflatie begin zonder fundamentele veranderingen—crisis coördinatie springt van goed naar slecht evenwicht getriggered door arbitraire gebeurtenissen."
        }
      },
      {
        question: {
          en: "Which theorem from optimal control theory explains why 'cold turkey' stabilization dominates gradualism during hyperinflation?",
          es: "¿Qué teorema de la teoría de control óptimo explica por qué la estabilización de 'pavo frío' domina el gradualismo durante la hiperinflación?",
          de: "Welches Theorem aus der optimalen Kontrolltheorie erklärt, warum 'kalter Entzug'-Stabilisierung Gradualismus während Hyperinflation dominiert?",
          nl: "Welk theorema uit optimale controle theorie verklaart waarom 'koude kalkoen' stabilisatie gradualisme domineert tijdens hyperinflatie?"
        },
        options: [
          { en: "Pontryagin maximum principle showing smooth adjustment paths are optimal", es: "Principio máximo de Pontryagin mostrando que trayectorias de ajuste suaves son óptimas", de: "Pontryagin-Maximum-Prinzip zeigt, dass glatte Anpassungspfade optimal sind", nl: "Pontryagin maximum principe tonend dat soepele aanpassingspaden optimaal zijn" },
          { en: "Bang-bang control where optimal policy jumps between extremes due to convex costs", es: "Control bang-bang donde política óptima salta entre extremos debido a costos convexos", de: "Bang-Bang-Kontrolle, wo optimale Politik zwischen Extremen springt aufgrund konvexer Kosten", nl: "Bang-bang controle waar optimaal beleid springt tussen extremen door convexe kosten" },
          { en: "Hamilton-Jacobi-Bellman equation prescribing gradual state transitions", es: "Ecuación de Hamilton-Jacobi-Bellman prescribiendo transiciones de estado graduales", de: "Hamilton-Jacobi-Bellman-Gleichung schreibt allmähliche Zustandsübergänge vor", nl: "Hamilton-Jacobi-Bellman vergelijking voorschrijvend geleidelijke toestand transities" },
          { en: "Linear-quadratic regulator ensuring continuous control paths", es: "Regulador lineal-cuadrático asegurando trayectorias de control continuas", de: "Linear-quadratischer Regler sichert kontinuierliche Kontrollpfade", nl: "Lineair-kwadratische regulator verzekerd continue controle paden" }
        ],
        correct: 1,
        explanation: {
          en: "Bang-bang control applies when cost functions create corners where optimal control jumps between extremes rather than adjusting smoothly. In hyperinflation, expectation dynamics create convexity: halfway measures fail to break inflation psychology, wasting resources while maintaining high inflation. Optimal policy jumps immediately to tight money/fiscal discipline ('bang-bang')—explaining why shock therapy succeeds where gradualism fails. The mathematics show intermediate policies are dominated.",
          es: "Control bang-bang se aplica cuando funciones de costo crean esquinas donde control óptimo salta entre extremos en lugar de ajustarse suavemente. En hiperinflación, dinámica de expectativas crea convexidad: medidas a medias fallan en romper psicología de inflación, desperdiciando recursos mientras mantiene alta inflación. Política óptima salta inmediatamente a dinero restrictivo/disciplina fiscal ('bang-bang')—explicando por qué terapia de choque tiene éxito donde gradualismo falla. Las matemáticas muestran que políticas intermedias están dominadas.",
          de: "Bang-Bang-Kontrolle gilt, wenn Kostenfunktionen Ecken erzeugen, wo optimale Kontrolle zwischen Extremen springt, anstatt sich glatt anzupassen. In Hyperinflation erzeugt Erwartungsdynamik Konvexität: Halbmaßnahmen versagen, Inflationspsychologie zu brechen, verschwenden Ressourcen während hohe Inflation erhalten bleibt. Optimale Politik springt sofort zu strammen Geld/Fiskaldisziplin ('Bang-Bang')—erklärt, warum Schocktherapie dort erfolgreich ist, wo Gradualismus versagt. Die Mathematik zeigt, dass Zwischenpolitiken dominiert werden.",
          nl: "Bang-bang controle is van toepassing wanneer kosten functies hoeken creëren waar optimale controle springt tussen extremen in plaats van soepel aan te passen. In hyperinflatie creëert verwachting dynamiek convexiteit: halfslachtige maatregelen falen inflatie psychologie te breken, middelen verspillend terwijl hoge inflatie behouden blijft. Optimaal beleid springt onmiddellijk naar strak geld/fiscale discipline ('bang-bang')—verklaart waarom schoktherapie slaagt waar gradualisme faalt. De wiskunde toont dat tussenliggende beleidsmaatregelen gedomineerd worden."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
