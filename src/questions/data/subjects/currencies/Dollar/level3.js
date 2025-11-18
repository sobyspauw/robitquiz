// Quiz Level 3: Currencies - Dollar
(function() {
  const level3 = {
    name: {
      en: "US Dollar - Advanced",
      es: "Dólar Estadounidense - Avanzado",
      de: "US-Dollar - Fortgeschritten",
      nl: "Amerikaanse Dollar - Geavanceerd"
    },
    questions: [
      {
        question: {
          en: "What is the Phillips Curve in relation to monetary policy?",
          es: "¿Qué es la Curva de Phillips en relación con la política monetaria?",
          de: "Was ist die Phillips-Kurve in Bezug auf die Geldpolitik?",
          nl: "Wat is de Phillips-curve in relatie tot het monetaire beleid?"
        },
        options: [
          { en: "The relationship between inflation and unemployment", es: "La relación entre inflación y desempleo", de: "Die Beziehung zwischen Inflation und Arbeitslosigkeit", nl: "De relatie tussen inflatie en werkloosheid" },
          { en: "The relationship between interest rates and GDP", es: "La relación entre tasas de interés y PIB", de: "Die Beziehung zwischen Zinssätzen und BIP", nl: "De relatie tussen rentetarieven en BBP" },
          { en: "The relationship between money supply and price level", es: "La relación entre oferta monetaria y nivel de precios", de: "Die Beziehung zwischen Geldmenge und Preisniveau", nl: "De relatie tussen geldvoorraad en prijsniveau" },
          { en: "The relationship between exchange rates and trade", es: "La relación entre tipos de cambio y comercio", de: "Die Beziehung zwischen Wechselkursen und Handel", nl: "De relatie tussen wisselkoersen en handel" }
        ],
        correct: 0,
        explanation: {
          en: "The Phillips Curve illustrates the inverse relationship between inflation and unemployment rates. It suggests that lower unemployment rates are associated with higher inflation rates, which is crucial for Fed policy decisions when balancing their dual mandate.",
          es: "La Curva de Phillips ilustra la relación inversa entre las tasas de inflación y desempleo. Sugiere que las tasas más bajas de desempleo están asociadas con tasas más altas de inflación, lo cual es crucial para las decisiones políticas de la Fed al equilibrar su mandato dual.",
          de: "Die Phillips-Kurve veranschaulicht die umgekehrte Beziehung zwischen Inflations- und Arbeitslosenraten. Sie suggeriert, dass niedrigere Arbeitslosenraten mit höheren Inflationsraten verbunden sind, was für Fed-Politikentscheidungen beim Ausbalancieren ihres doppelten Mandats entscheidend ist.",
          nl: "De Phillips-curve illustreert de omgekeerde relatie tussen inflatie- en werkloosheidspercentages. Het suggereert dat lagere werkloosheidspercentages geassocieerd zijn met hogere inflatiepercentages, wat cruciaal is voor Fed-beleidsbeslissingen bij het balanceren van hun dubbele mandaat."
        }
      },
      {
        question: {
          en: "What is the Taylor Rule used for in monetary policy?",
          es: "¿Para qué se usa la Regla de Taylor en la política monetaria?",
          de: "Wofür wird die Taylor-Regel in der Geldpolitik verwendet?",
          nl: "Waarvoor wordt de Taylor-regel gebruikt in het monetaire beleid?"
        },
        options: [
          { en: "To determine optimal federal funds rate", es: "Para determinar la tasa óptima de fondos federales", de: "Zur Bestimmung des optimalen Federal Funds Rate", nl: "Om het optimale federal funds tarief te bepalen" },
          { en: "To calculate money supply growth", es: "Para calcular el crecimiento de la oferta monetaria", de: "Zur Berechnung des Geldmengenwachstums", nl: "Om de groei van de geldvoorraad te berekenen" },
          { en: "To measure economic output", es: "Para medir la producción económica", de: "Zur Messung der Wirtschaftsleistung", nl: "Om economische output te meten" },
          { en: "To predict exchange rate movements", es: "Para predecir movimientos del tipo de cambio", de: "Zur Vorhersage von Wechselkursbewegungen", nl: "Om wisselkoersbewegingen te voorspellen" }
        ],
        correct: 0,
        explanation: {
          en: "The Taylor Rule is a monetary policy guideline that suggests how central banks should adjust interest rates in response to changes in inflation and economic output. It provides a framework for setting the federal funds rate based on inflation targets and GDP gaps.",
          es: "La Regla de Taylor es una guía de política monetaria que sugiere cómo los bancos centrales deberían ajustar las tasas de interés en respuesta a cambios en la inflación y la producción económica. Proporciona un marco para establecer la tasa de fondos federales basado en objetivos de inflación y brechas del PIB.",
          de: "Die Taylor-Regel ist eine geldpolitische Richtlinie, die vorschlägt, wie Zentralbanken die Zinssätze als Reaktion auf Änderungen der Inflation und der Wirtschaftsleistung anpassen sollten. Sie bietet einen Rahmen für die Festsetzung des Federal Funds Rate basierend auf Inflationszielen und BIP-Lücken.",
          nl: "De Taylor-regel is een monetaire beleidsrichtlijn die suggereert hoe centrale banken rentetarieven moeten aanpassen in reactie op veranderingen in inflatie en economische output. Het biedt een kader voor het vaststellen van het federal funds tarief gebaseerd op inflatiedoelen en BBP-gaten."
        }
      },
      {
        question: {
          en: "What is the zero lower bound problem in monetary policy?",
          es: "¿Qué es el problema del límite inferior cero en la política monetaria?",
          de: "Was ist das Problem der Nullzinsgrenze in der Geldpolitik?",
          nl: "Wat is het nul-ondergrens probleem in het monetaire beleid?"
        },
        options: [
          { en: "When interest rates cannot be lowered below zero percent", es: "Cuando las tasas de interés no pueden reducirse por debajo del cero por ciento", de: "Wenn Zinssätze nicht unter null Prozent gesenkt werden können", nl: "Wanneer rentetarieven niet onder nul procent kunnen worden verlaagd" },
          { en: "When inflation reaches zero percent", es: "Cuando la inflación alcanza el cero por ciento", de: "Wenn die Inflation null Prozent erreicht", nl: "Wanneer inflatie nul procent bereikt" },
          { en: "When unemployment cannot go lower", es: "Cuando el desempleo no puede bajar más", de: "Wenn die Arbeitslosigkeit nicht niedriger werden kann", nl: "Wanneer werkloosheid niet lager kan" },
          { en: "When GDP growth stops", es: "Cuando el crecimiento del PIB se detiene", de: "Wenn das BIP-Wachstum stoppt", nl: "Wanneer BBP-groei stopt" }
        ],
        correct: 0,
        explanation: {
          en: "The zero lower bound occurs when short-term nominal interest rates are at or near zero, limiting the central bank's ability to stimulate the economy through conventional monetary policy. This forces central banks to use unconventional tools like quantitative easing.",
          es: "El límite inferior cero ocurre cuando las tasas de interés nominales a corto plazo están en o cerca de cero, limitando la capacidad del banco central de estimular la economía a través de la política monetaria convencional. Esto obliga a los bancos centrales a usar herramientas no convencionales como la flexibilización cuantitativa.",
          de: "Die Nullzinsgrenze tritt auf, wenn kurzfristige nominale Zinssätze bei oder nahe null liegen und die Fähigkeit der Zentralbank begrenzen, die Wirtschaft durch konventionelle Geldpolitik zu stimulieren. Dies zwingt Zentralbanken, unkonventionelle Instrumente wie quantitative Lockerung zu verwenden.",
          nl: "De nul-ondergrens treedt op wanneer kortetermijn nominale rentetarieven op of nabij nul liggen, waardoor het vermogen van de centrale bank wordt beperkt om de economie te stimuleren door conventioneel monetair beleid. Dit dwingt centrale banken om onconventionele instrumenten zoals kwantitatieve versoepeling te gebruiken."
        }
      },
      {
        question: {
          en: "What is forward guidance in Federal Reserve policy?",
          es: "¿Qué es la orientación prospectiva en la política de la Reserva Federal?",
          de: "Was ist Forward Guidance in der Federal Reserve Politik?",
          nl: "Wat is forward guidance in het Federal Reserve beleid?"
        },
        options: [
          { en: "Communication about future monetary policy intentions", es: "Comunicación sobre las intenciones futuras de política monetaria", de: "Kommunikation über zukünftige geldpolitische Absichten", nl: "Communicatie over toekomstige monetaire beleidsintentions" },
          { en: "Predicting economic indicators", es: "Predecir indicadores económicos", de: "Vorhersage von Wirtschaftsindikatoren", nl: "Voorspellen van economische indicatoren" },
          { en: "Setting long-term inflation targets", es: "Establecer objetivos de inflación a largo plazo", de: "Langfristige Inflationsziele setzen", nl: "Langetermijn inflatiedoelen stellen" },
          { en: "Regulating financial institutions", es: "Regular instituciones financieras", de: "Regulierung von Finanzinstituten", nl: "Reguleren van financiële instellingen" }
        ],
        correct: 0,
        explanation: {
          en: "Forward guidance is the Federal Reserve's communication strategy about its future policy intentions, helping to shape market expectations and influence long-term interest rates even when short-term rates are constrained by the zero lower bound.",
          es: "La orientación prospectiva es la estrategia de comunicación de la Reserva Federal sobre sus intenciones políticas futuras, ayudando a moldear las expectativas del mercado e influir en las tasas de interés a largo plazo incluso cuando las tasas a corto plazo están restringidas por el límite inferior cero.",
          de: "Forward Guidance ist die Kommunikationsstrategie der Federal Reserve über ihre zukünftigen politischen Absichten, die hilft, Markterwartungen zu formen und langfristige Zinssätze zu beeinflussen, auch wenn kurzfristige Zinssätze durch die Nullzinsgrenze begrenzt sind.",
          nl: "Forward guidance is de communicatiestrategie van de Federal Reserve over haar toekomstige beleidsintentions, die helpt marktinverwachtingen te vormen en langetermijnrentes te beïnvloeden, zelfs wanneer kortetermijnrentes beperkt zijn door de nul-ondergrens."
        }
      },
      {
        question: {
          en: "What is the difference between nominal and real interest rates?",
          es: "¿Cuál es la diferencia entre tasas de interés nominales y reales?",
          de: "Was ist der Unterschied zwischen nominalen und realen Zinssätzen?",
          nl: "Wat is het verschil tussen nominale en reële rentetarieven?"
        },
        options: [
          { en: "Real rates are adjusted for inflation, nominal rates are not", es: "Las tasas reales están ajustadas por inflación, las nominales no", de: "Reale Zinssätze sind inflationsbereinigt, nominale nicht", nl: "Reële tarieven zijn aangepast voor inflatie, nominale niet" },
          { en: "Nominal rates are set by banks, real rates by the Fed", es: "Las tasas nominales son establecidas por bancos, las reales por la Fed", de: "Nominale Zinssätze werden von Banken festgelegt, reale von der Fed", nl: "Nominale tarieven worden vastgesteld door banken, reële door de Fed" },
          { en: "Real rates apply to loans, nominal rates to deposits", es: "Las tasas reales se aplican a préstamos, las nominales a depósitos", de: "Reale Zinssätze gelten für Kredite, nominale für Einlagen", nl: "Reële tarieven gelden voor leningen, nominale voor deposito's" },
          { en: "Nominal rates change daily, real rates are fixed", es: "Las tasas nominales cambian diariamente, las reales son fijas", de: "Nominale Zinssätze ändern sich täglich, reale sind fest", nl: "Nominale tarieven veranderen dagelijks, reële zijn vast" }
        ],
        correct: 0,
        explanation: {
          en: "Real interest rates are nominal interest rates adjusted for inflation. The real interest rate represents the true cost of borrowing and the true return on savings after accounting for the erosion of purchasing power due to inflation. This distinction is crucial for Fed policy decisions.",
          es: "Las tasas de interés reales son las tasas de interés nominales ajustadas por inflación. La tasa de interés real representa el costo verdadero de endeudamiento y el retorno verdadero sobre ahorros después de contabilizar la erosión del poder adquisitivo debido a la inflación. Esta distinción es crucial para las decisiones políticas de la Fed.",
          de: "Reale Zinssätze sind nominale Zinssätze, die um die Inflation bereinigt sind. Der reale Zinssatz stellt die wahren Kosten der Kreditaufnahme und die wahre Rendite auf Ersparnisse dar, nachdem die Erosion der Kaufkraft durch Inflation berücksichtigt wurde. Diese Unterscheidung ist entscheidend für Fed-Politikentscheidungen.",
          nl: "Reële rentetarieven zijn nominale rentetarieven aangepast voor inflatie. Het reële rentetarief vertegenwoordigt de werkelijke kosten van lenen en het werkelijke rendement op spaargeld na het meenemen van de erosie van koopkracht door inflatie. Dit onderscheid is cruciaal voor Fed-beleidsbeslissingen."
        }
      },
      {
        question: {
          en: "What is the yield curve and what does it indicate?",
          es: "¿Qué es la curva de rendimiento y qué indica?",
          de: "Was ist die Zinsstrukturkurve und was zeigt sie an?",
          nl: "Wat is de rentecurve en wat geeft deze aan?"
        },
        options: [
          { en: "Graph showing interest rates across different maturities", es: "Gráfico que muestra tasas de interés en diferentes vencimientos", de: "Grafik, die Zinssätze über verschiedene Laufzeiten zeigt", nl: "Grafiek die rentetarieven toont over verschillende looptijden" },
          { en: "Chart of Federal Reserve policy changes", es: "Gráfico de cambios de política de la Reserva Federal", de: "Diagramm der Federal Reserve Politikänderungen", nl: "Grafiek van Federal Reserve beleidsveranderingen" },
          { en: "Measurement of bank lending capacity", es: "Medición de la capacidad de préstamo bancario", de: "Messung der Bankkreditkapazität", nl: "Meting van bankuitleencapaciteit" },
          { en: "Index of economic growth rates", es: "Índice de tasas de crecimiento económico", de: "Index der Wirtschaftswachstumsraten", nl: "Index van economische groeipercentages" }
        ],
        correct: 0,
        explanation: {
          en: "The yield curve is a graph that plots the interest rates of bonds with equal credit quality but different maturity dates. It typically shows the relationship between short-term and long-term interest rates and can indicate market expectations about future economic conditions and inflation.",
          es: "La curva de rendimiento es un gráfico que traza las tasas de interés de bonos con igual calidad crediticia pero diferentes fechas de vencimiento. Típicamente muestra la relación entre las tasas de interés a corto y largo plazo y puede indicar las expectativas del mercado sobre las condiciones económicas futuras y la inflación.",
          de: "Die Zinsstrukturkurve ist ein Graph, der die Zinssätze von Anleihen mit gleicher Kreditqualität aber unterschiedlichen Laufzeiten darstellt. Sie zeigt typischerweise die Beziehung zwischen kurz- und langfristigen Zinssätzen und kann Markterwartungen über zukünftige wirtschaftliche Bedingungen und Inflation anzeigen.",
          nl: "De rentecurve is een grafiek die de rentetarieven van obligaties met gelijke kredietkwaliteit maar verschillende vervaldatums weergeeft. Het toont typisch de relatie tussen kort- en langetermijnrentes en kan marktinverwachtingen over toekomstige economische omstandigheden en inflatie aangeven."
        }
      },
      {
        question: {
          en: "What does an inverted yield curve typically signal?",
          es: "¿Qué señala típicamente una curva de rendimiento invertida?",
          de: "Was signalisiert eine invertierte Zinsstrukturkurve typischerweise?",
          nl: "Wat signaleert een omgekeerde rentecurve doorgaans?"
        },
        options: [
          { en: "Economic expansion", es: "Expansión económica", de: "Wirtschaftliche Expansion", nl: "Economische expansie" },
          { en: "Potential recession", es: "Recesión potencial", de: "Potentielle Rezession", nl: "Mogelijke recessie" },
          { en: "High inflation", es: "Alta inflación", de: "Hohe Inflation", nl: "Hoge inflatie" },
          { en: "Currency devaluation", es: "Devaluación de la moneda", de: "Währungsabwertung", nl: "Valutadevaluatie" }
        ],
        correct: 1,
        explanation: {
          en: "An inverted yield curve, where short-term interest rates exceed long-term rates, has historically been a reliable predictor of economic recessions. It suggests that investors expect economic weakness in the future, leading to lower long-term rates despite higher current short-term rates.",
          es: "Una curva de rendimiento invertida, donde las tasas de interés a corto plazo exceden las tasas a largo plazo, históricamente ha sido un predictor confiable de recesiones económicas. Sugiere que los inversionistas esperan debilidad económica en el futuro, llevando a tasas más bajas a largo plazo a pesar de tasas más altas actuales a corto plazo.",
          de: "Eine invertierte Zinsstrukturkurve, bei der kurzfristige Zinssätze die langfristigen übersteigen, war historisch ein zuverlässiger Prädiktor für wirtschaftliche Rezessionen. Sie deutet darauf hin, dass Investoren wirtschaftliche Schwäche in der Zukunft erwarten, was zu niedrigeren langfristigen Zinssätzen trotz höherer aktueller kurzfristiger Zinssätze führt.",
          nl: "Een omgekeerde rentecurve, waarbij kortetermijnrentes de langetermijnrentes overtreffen, is historisch gezien een betrouwbare voorspeller van economische recessies geweest. Het suggereert dat investeerders economische zwakte in de toekomst verwachten, wat leidt tot lagere langetermijnrentes ondanks hogere huidige kortetermijnrentes."
        }
      },
      {
        question: {
          en: "What is the liquidity trap in monetary economics?",
          es: "¿Qué es la trampa de liquidez en la economía monetaria?",
          de: "Was ist die Liquiditätsfalle in der Geldwirtschaft?",
          nl: "Wat is de liquiditeitsval in de monetaire economie?"
        },
        options: [
          { en: "When monetary policy becomes ineffective at very low interest rates", es: "Cuando la política monetaria se vuelve inefectiva a tasas de interés muy bajas", de: "Wenn die Geldpolitik bei sehr niedrigen Zinssätzen unwirksam wird", nl: "Wanneer monetair beleid ineffectief wordt bij zeer lage rentetarieven" },
          { en: "When banks have too much liquid capital", es: "Cuando los bancos tienen demasiado capital líquido", de: "Wenn Banken zu viel liquides Kapital haben", nl: "Wanneer banken teveel liquide kapitaal hebben" },
          { en: "When inflation becomes too high", es: "Cuando la inflación se vuelve demasiado alta", de: "Wenn die Inflation zu hoch wird", nl: "Wanneer inflatie te hoog wordt" },
          { en: "When currency loses its value rapidly", es: "Cuando la moneda pierde su valor rápidamente", de: "Wenn die Währung schnell an Wert verliert", nl: "Wanneer valuta snel zijn waarde verliest" }
        ],
        correct: 0,
        explanation: {
          en: "A liquidity trap occurs when monetary policy becomes ineffective because interest rates are already very low (near zero), and people prefer to hold cash rather than invest in bonds or other securities, making further monetary stimulus ineffective in boosting economic activity.",
          es: "Una trampa de liquidez ocurre cuando la política monetaria se vuelve inefectiva porque las tasas de interés ya están muy bajas (cerca de cero), y la gente prefiere mantener efectivo en lugar de invertir en bonos u otros valores, haciendo que estímulos monetarios adicionales sean inefectivos para impulsar la actividad económica.",
          de: "Eine Liquiditätsfalle tritt auf, wenn die Geldpolitik unwirksam wird, weil die Zinssätze bereits sehr niedrig sind (nahe null), und Menschen es vorziehen, Bargeld zu halten anstatt in Anleihen oder andere Wertpapiere zu investieren, wodurch weitere monetäre Stimuli bei der Ankurbelung der Wirtschaftstätigkeit unwirksam werden.",
          nl: "Een liquiditeitsval treedt op wanneer monetair beleid ineffectief wordt omdat rentetarieven al zeer laag zijn (nabij nul), en mensen er de voorkeur aan geven contant geld aan te houden in plaats van te investeren in obligaties of andere effecten, waardoor verdere monetaire stimuli ineffectief worden in het stimuleren van economische activiteit."
        }
      },
      {
        question: {
          en: "What is the Fed's inflation targeting framework?",
          es: "¿Qué es el marco de objetivos de inflación de la Fed?",
          de: "Was ist das Inflationsziel-Framework der Fed?",
          nl: "Wat is het inflatiedoel-kader van de Fed?"
        },
        options: [
          { en: "2% average inflation over time", es: "2% de inflación promedio a lo largo del tiempo", de: "2% durchschnittliche Inflation über die Zeit", nl: "2% gemiddelde inflatie over tijd" },
          { en: "0% inflation at all times", es: "0% de inflación en todo momento", de: "0% Inflation zu allen Zeiten", nl: "0% inflatie te allen tijde" },
          { en: "3-5% inflation range", es: "Rango de inflación del 3-5%", de: "3-5% Inflationsbereich", nl: "3-5% inflatiebereik" },
          { en: "Variable inflation based on economic conditions", es: "Inflación variable basada en condiciones económicas", de: "Variable Inflation basierend auf wirtschaftlichen Bedingungen", nl: "Variabele inflatie gebaseerd op economische omstandigheden" }
        ],
        correct: 0,
        explanation: {
          en: "The Federal Reserve uses a flexible inflation targeting framework with a long-run goal of 2% inflation. Since 2020, they use 'average inflation targeting,' meaning they allow inflation to run above 2% for some time to make up for periods when it was below 2%, achieving 2% on average over time.",
          es: "La Reserva Federal usa un marco flexible de objetivos de inflación con una meta a largo plazo del 2% de inflación. Desde 2020, usan 'objetivos de inflación promedio', lo que significa que permiten que la inflación supere el 2% por algún tiempo para compensar períodos cuando estuvo por debajo del 2%, logrando 2% en promedio a lo largo del tiempo.",
          de: "Die Federal Reserve verwendet ein flexibles Inflationsziel-Framework mit einem langfristigen Ziel von 2% Inflation. Seit 2020 verwenden sie 'durchschnittliches Inflationsziel', was bedeutet, dass sie Inflation für einige Zeit über 2% laufen lassen, um Perioden auszugleichen, in denen sie unter 2% lag, und über die Zeit durchschnittlich 2% erreichen.",
          nl: "De Federal Reserve gebruikt een flexibel inflatiedoel-kader met een langetermijndoel van 2% inflatie. Sinds 2020 gebruiken ze 'gemiddelde inflatiedoelen', wat betekent dat ze inflatie voor enige tijd boven 2% laten lopen om periodes te compenseren waarin het onder 2% was, en gemiddeld 2% over tijd te bereiken."
        }
      },
      {
        question: {
          en: "What is the effective federal funds rate?",
          es: "¿Qué es la tasa efectiva de fondos federales?",
          de: "Was ist der effektive Federal Funds Rate?",
          nl: "Wat is het effectieve federal funds tarief?"
        },
        options: [
          { en: "The actual rate at which banks lend to each other overnight", es: "La tasa real a la cual los bancos se prestan entre sí durante la noche", de: "Der tatsächliche Zinssatz, zu dem sich Banken über Nacht Geld leihen", nl: "Het werkelijke tarief waartegen banken aan elkaar lenen voor een nacht" },
          { en: "The rate set by the FOMC", es: "La tasa establecida por el FOMC", de: "Der vom FOMC festgelegte Zinssatz", nl: "Het tarief vastgesteld door het FOMC" },
          { en: "The average of all bank lending rates", es: "El promedio de todas las tasas de préstamo bancario", de: "Der Durchschnitt aller Bankkreditzinssätze", nl: "Het gemiddelde van alle bankuittarieven" },
          { en: "The rate paid on government bonds", es: "La tasa pagada en bonos del gobierno", de: "Der Zinssatz auf Staatsanleihen", nl: "Het tarief betaald op staatsobligaties" }
        ],
        correct: 0,
        explanation: {
          en: "The effective federal funds rate is the actual interest rate at which banks and credit unions lend reserve balances to other depository institutions overnight. It's the volume-weighted average of rates on transactions, which can differ slightly from the FOMC's target rate.",
          es: "La tasa efectiva de fondos federales es la tasa de interés real a la cual los bancos y cooperativas de crédito prestan saldos de reserva a otras instituciones de depósito durante la noche. Es el promedio ponderado por volumen de las tasas en transacciones, que puede diferir ligeramente de la tasa objetivo del FOMC.",
          de: "Der effektive Federal Funds Rate ist der tatsächliche Zinssatz, zu dem Banken und Kreditgenossenschaften Reserveguthaben über Nacht an andere Einlageninstitute verleihen. Es ist der volumengewichtete Durchschnitt der Zinssätze bei Transaktionen, der sich geringfügig vom Zielzinssatz des FOMC unterscheiden kann.",
          nl: "Het effectieve federal funds tarief is het werkelijke rentetarief waartegen banken en kredietverenigingen reservesaldi aan andere depositoinstellingen uitlenen voor een nacht. Het is het volume-gewogen gemiddelde van tarieven op transacties, dat iets kan verschillen van het doeltarief van het FOMC."
        }
      },
      {
        question: {
          en: "What is the discount window at the Federal Reserve?",
          es: "¿Qué es la ventana de descuento en la Reserva Federal?",
          de: "Was ist das Diskontfenster der Federal Reserve?",
          nl: "Wat is het discontoloket bij de Federal Reserve?"
        },
        options: [
          { en: "A facility where banks can borrow directly from the Fed", es: "Una facilidad donde los bancos pueden pedir prestado directamente de la Fed", de: "Eine Einrichtung, wo Banken direkt von der Fed leihen können", nl: "Een faciliteit waar banken rechtstreeks van de Fed kunnen lenen" },
          { en: "A place where old currency is disposed", es: "Un lugar donde se desecha la moneda vieja", de: "Ein Ort, wo alte Währung entsorgt wird", nl: "Een plaats waar oude valuta wordt weggegooid" },
          { en: "A system for setting interest rates", es: "Un sistema para establecer tasas de interés", de: "Ein System zur Festsetzung von Zinssätzen", nl: "Een systeem voor het vaststellen van rentetarieven" },
          { en: "A method for buying government securities", es: "Un método para comprar valores del gobierno", de: "Eine Methode zum Kauf von Staatsanleihen", nl: "Een methode voor het kopen van staatspapieren" }
        ],
        correct: 0,
        explanation: {
          en: "The discount window is a lending facility where eligible financial institutions can borrow money directly from the Federal Reserve, typically for short periods. It serves as a safety valve for the banking system and helps ensure liquidity during times of financial stress. The discount rate is the interest rate charged on these loans.",
          es: "La ventana de descuento es una facilidad de préstamo donde las instituciones financieras elegibles pueden pedir dinero prestado directamente de la Reserva Federal, típicamente por períodos cortos. Sirve como válvula de seguridad para el sistema bancario y ayuda a asegurar liquidez durante tiempos de estrés financiero. La tasa de descuento es la tasa de interés cobrada en estos préstamos.",
          de: "Das Diskontfenster ist eine Kreditfazilität, wo berechtigte Finanzinstitute Geld direkt von der Federal Reserve leihen können, typischerweise für kurze Zeiträume. Es dient als Sicherheitsventil für das Bankensystem und hilft, Liquidität während Zeiten finanzieller Belastung zu gewährleisten. Der Diskontsatz ist der Zinssatz, der für diese Kredite erhoben wird.",
          nl: "Het discontoloket is een uitleenfaciliteit waar geschikte financiële instellingen geld rechtstreeks van de Federal Reserve kunnen lenen, doorgaans voor korte perioden. Het dient als veiligheidsklep voor het banksysteem en helpt liquiditeit te waarborgen tijdens tijden van financiële stress. Het discontotarief is het rentetarief dat op deze leningen wordt geheven."
        }
      },
      {
        question: {
          en: "What is the purpose of reserve requirements for banks?",
          es: "¿Cuál es el propósito de los requisitos de reserva para los bancos?",
          de: "Was ist der Zweck der Mindestreserveanforderungen für Banken?",
          nl: "Wat is het doel van reservevereisten voor banken?"
        },
        options: [
          { en: "To control money supply and ensure bank liquidity", es: "Controlar la oferta monetaria y asegurar liquidez bancaria", de: "Geldmenge kontrollieren und Bankliquidität sicherstellen", nl: "Geldvoorraad controleren en bankliquiditeit waarborgen" },
          { en: "To generate revenue for the Federal Reserve", es: "Generar ingresos para la Reserva Federal", de: "Einnahmen für die Federal Reserve generieren", nl: "Inkomsten genereren voor de Federal Reserve" },
          { en: "To prevent bank mergers", es: "Prevenir fusiones bancarias", de: "Bankfusionen verhindern", nl: "Bankfusies voorkomen" },
          { en: "To set interest rates for consumers", es: "Establecer tasas de interés para consumidores", de: "Zinssätze für Verbraucher festsetzen", nl: "Rentetarieven voor consumenten vaststellen" }
        ],
        correct: 0,
        explanation: {
          en: "Reserve requirements mandate that banks hold a certain percentage of their deposits as reserves, either as cash in their vaults or as deposits at the Federal Reserve. This serves to control the money supply, ensure banks have sufficient liquidity to meet withdrawal demands, and provide a tool for monetary policy implementation.",
          es: "Los requisitos de reserva exigen que los bancos mantengan un cierto porcentaje de sus depósitos como reservas, ya sea como efectivo en sus bóvedas o como depósitos en la Reserva Federal. Esto sirve para controlar la oferta monetaria, asegurar que los bancos tengan suficiente liquidez para satisfacer las demandas de retiro, y proporcionar una herramienta para la implementación de política monetaria.",
          de: "Mindestreserveanforderungen verlangen, dass Banken einen bestimmten Prozentsatz ihrer Einlagen als Reserven halten, entweder als Bargeld in ihren Tresoren oder als Einlagen bei der Federal Reserve. Dies dient dazu, die Geldmenge zu kontrollieren, sicherzustellen, dass Banken ausreichend Liquidität haben, um Abhebungsanforderungen zu erfüllen, und ein Werkzeug für die Umsetzung der Geldpolitik bereitzustellen.",
          nl: "Reservevereisten verplichten banken om een bepaald percentage van hun deposito's als reserves aan te houden, hetzij als contant geld in hun kluizen of als deposito's bij de Federal Reserve. Dit dient om de geldvoorraad te controleren, ervoor te zorgen dat banken voldoende liquiditeit hebben om aan opnamevereisten te voldoen, en een instrument te bieden voor de implementatie van monetair beleid."
        }
      },
      {
        question: {
          en: "What is the velocity of money and why is it important?",
          es: "¿Qué es la velocidad del dinero y por qué es importante?",
          de: "Was ist die Umlaufgeschwindigkeit des Geldes und warum ist sie wichtig?",
          nl: "Wat is de omloopsnelheid van geld en waarom is dit belangrijk?"
        },
        options: [
          { en: "How quickly money changes hands in the economy", es: "Qué tan rápido cambia de manos el dinero en la economía", de: "Wie schnell Geld in der Wirtschaft den Besitzer wechselt", nl: "Hoe snel geld van eigenaar wisselt in de economie" },
          { en: "The speed at which banks process transactions", es: "La velocidad a la cual los bancos procesan transacciones", de: "Die Geschwindigkeit, mit der Banken Transaktionen verarbeiten", nl: "De snelheid waarmee banken transacties verwerken" },
          { en: "How fast inflation increases", es: "Qué tan rápido aumenta la inflación", de: "Wie schnell die Inflation steigt", nl: "Hoe snel inflatie toeneemt" },
          { en: "The rate at which currency is printed", es: "La tasa a la cual se imprime la moneda", de: "Die Rate, mit der Währung gedruckt wird", nl: "Het tempo waarop valuta wordt gedrukt" }
        ],
        correct: 0,
        explanation: {
          en: "The velocity of money measures how frequently money changes hands in the economy over a specific period. It's crucial for monetary policy because it affects the relationship between money supply, price levels, and economic output. Lower velocity can reduce the effectiveness of monetary stimulus, while higher velocity can amplify inflationary pressures.",
          es: "La velocidad del dinero mide qué tan frecuentemente cambia de manos el dinero en la economía durante un período específico. Es crucial para la política monetaria porque afecta la relación entre la oferta monetaria, los niveles de precios y la producción económica. Una velocidad menor puede reducir la efectividad del estímulo monetario, mientras que una velocidad mayor puede amplificar las presiones inflacionarias.",
          de: "Die Umlaufgeschwindigkeit des Geldes misst, wie häufig Geld in der Wirtschaft über einen bestimmten Zeitraum den Besitzer wechselt. Sie ist entscheidend für die Geldpolitik, weil sie die Beziehung zwischen Geldmenge, Preisniveau und Wirtschaftsleistung beeinflusst. Niedrigere Geschwindigkeit kann die Wirksamkeit monetärer Stimuli reduzieren, während höhere Geschwindigkeit inflationäre Drücke verstärken kann.",
          nl: "De omloopsnelheid van geld meet hoe vaak geld van eigenaar wisselt in de economie gedurende een specifieke periode. Het is cruciaal voor monetair beleid omdat het de relatie tussen geldvoorraad, prijsniveaus en economische output beïnvloedt. Lagere snelheid kan de effectiviteit van monetaire stimuli verminderen, terwijl hogere snelheid inflatoire druk kan versterken."
        }
      },
      {
        question: {
          en: "What is core inflation and why do policymakers focus on it?",
          es: "¿Qué es la inflación subyacente y por qué se enfocan en ella los responsables de políticas?",
          de: "Was ist die Kerninflation und warum konzentrieren sich Politiker darauf?",
          nl: "Wat is kerninflatie en waarom richten beleidsmakers zich hierop?"
        },
        options: [
          { en: "Inflation excluding food and energy prices", es: "Inflación excluyendo precios de alimentos y energía", de: "Inflation ohne Nahrungsmittel- und Energiepreise", nl: "Inflatie exclusief voedsel- en energieprijzen" },
          { en: "Inflation in essential goods only", es: "Inflación solo en bienes esenciales", de: "Inflation nur bei wesentlichen Gütern", nl: "Inflatie alleen in essentiële goederen" },
          { en: "The highest inflation rate in any sector", es: "La tasa de inflación más alta en cualquier sector", de: "Die höchste Inflationsrate in jedem Sektor", nl: "Het hoogste inflatiepercentage in elke sector" },
          { en: "Average inflation over five yrs", es: "Inflación promedio durante cinco años", de: "Durchschnittliche Inflation über fünf Jahre", nl: "Gemiddelde inflatie over vijf jaar" }
        ],
        correct: 0,
        explanation: {
          en: "Core inflation excludes food and energy prices because they are highly volatile and can be affected by temporary factors like weather or geopolitical events. Policymakers focus on core inflation to better understand underlying inflationary trends and make more informed monetary policy decisions that aren't based on short-term price fluctuations.",
          es: "La inflación subyacente excluye los precios de alimentos y energía porque son altamente volátiles y pueden ser afectados por factores temporales como el clima o eventos geopolíticos. Los responsables de políticas se enfocan en la inflación subyacente para entender mejor las tendencias inflacionarias subyacentes y tomar decisiones de política monetaria más informadas que no se basen en fluctuaciones de precios a corto plazo.",
          de: "Die Kerninflation schließt Nahrungsmittel- und Energiepreise aus, weil sie sehr volatil sind und von temporären Faktoren wie Wetter oder geopolitischen Ereignissen beeinflusst werden können. Politiker konzentrieren sich auf die Kerninflation, um zugrundeliegende Inflationstrends besser zu verstehen und fundiertere geldpolitische Entscheidungen zu treffen, die nicht auf kurzfristigen Preisschwankungen basieren.",
          nl: "Kerninflatie sluit voedsel- en energieprijzen uit omdat deze zeer volatiel zijn en kunnen worden beïnvloed door tijdelijke factoren zoals weer of geopolitieke gebeurtenissen. Beleidsmakers richten zich op kerninflatie om onderliggende inflatietrends beter te begrijpen en meer geïnformeerde monetaire beleidsbeslissingen te nemen die niet gebaseerd zijn op kortetermijnprijsschommelingen."
        }
      },
      {
        question: {
          en: "What is the difference between expansionary and contractionary monetary policy?",
          es: "¿Cuál es la diferencia entre política monetaria expansiva y contractiva?",
          de: "Was ist der Unterschied zwischen expansiver und kontraktiver Geldpolitik?",
          nl: "Wat is het verschil tussen expansief en contractief monetair beleid?"
        },
        options: [
          { en: "Expansionary increases money supply, contractionary decreases it", es: "Expansiva aumenta la oferta monetaria, contractiva la disminuye", de: "Expansiv erhöht die Geldmenge, kontraktiv verringert sie", nl: "Expansief verhoogt geldvoorraad, contractief verlaagt het" },
          { en: "Expansionary raises taxes, contractionary lowers them", es: "Expansiva aumenta impuestos, contractiva los baja", de: "Expansiv erhöht Steuern, kontraktiv senkt sie", nl: "Expansief verhoogt belastingen, contractief verlaagt ze" },
          { en: "Expansionary controls inflation, contractionary controls deflation", es: "Expansiva controla inflación, contractiva controla deflación", de: "Expansiv kontrolliert Inflation, kontraktiv kontrolliert Deflation", nl: "Expansief controleert inflatie, contractief controleert deflatie" },
          { en: "Expansionary is used in recessions, contractionary in booms only", es: "Expansiva se usa en recesiones, contractiva solo en auges", de: "Expansiv wird in Rezessionen verwendet, kontraktiv nur in Aufschwüngen", nl: "Expansief wordt gebruikt in recessies, contractief alleen in hausse" }
        ],
        correct: 0,
        explanation: {
          en: "Expansionary monetary policy increases the money supply through lower interest rates, quantitative easing, or reducing reserve requirements to stimulate economic growth. Contractionary monetary policy decreases the money supply through higher interest rates or other tools to cool an overheating economy and control inflation.",
          es: "La política monetaria expansiva aumenta la oferta monetaria a través de tasas de interés más bajas, flexibilización cuantitativa, o reducir requisitos de reserva para estimular el crecimiento económico. La política monetaria contractiva disminuye la oferta monetaria a través de tasas de interés más altas u otras herramientas para enfriar una economía sobrecalentada y controlar la inflación.",
          de: "Expansive Geldpolitik erhöht die Geldmenge durch niedrigere Zinssätze, quantitative Lockerung oder Reduzierung der Mindestreserveanforderungen, um das Wirtschaftswachstum zu stimulieren. Kontraktive Geldpolitik verringert die Geldmenge durch höhere Zinssätze oder andere Instrumente, um eine überhitzte Wirtschaft zu kühlen und Inflation zu kontrollieren.",
          nl: "Expansief monetair beleid verhoogt de geldvoorraad door lagere rentetarieven, kwantitatieve versoepeling, of het verlagen van reservevereisten om economische groei te stimuleren. Contractief monetair beleid verlaagt de geldvoorraad door hogere rentetarieven of andere instrumenten om een oververhitte economie af te koelen en inflatie te controleren."
        }
      },
      {
        question: {
          en: "What is the output gap and how does it influence Fed policy?",
          es: "¿Qué es la brecha de producción y cómo influye en la política de la Fed?",
          de: "Was ist die Produktionslücke und wie beeinflusst sie die Fed-Politik?",
          nl: "Wat is de outputkloof en hoe beïnvloedt deze het Fed-beleid?"
        },
        options: [
          { en: "Difference between actual and potential GDP", es: "Diferencia entre PIB real y potencial", de: "Unterschied zwischen tatsächlichem und potentiellem BIP", nl: "Verschil tussen werkelijk en potentieel BBP" },
          { en: "Gap between exports and imports", es: "Brecha entre exportaciones e importaciones", de: "Lücke zwischen Exporten und Importen", nl: "Kloof tussen export en import" },
          { en: "Difference in productivity between sectors", es: "Diferencia en productividad entre sectores", de: "Unterschied in der Produktivität zwischen Sektoren", nl: "Verschil in productiviteit tussen sectoren" },
          { en: "Gap between inflation and unemployment", es: "Brecha entre inflación y desempleo", de: "Lücke zwischen Inflation und Arbeitslosigkeit", nl: "Kloof tussen inflatie en werkloosheid" }
        ],
        correct: 0,
        explanation: {
          en: "The output gap is the difference between actual economic output (GDP) and potential output (what the economy could produce at full employment). A negative gap indicates economic slack and may warrant expansionary policy, while a positive gap suggests overheating and may require contractionary policy to prevent excessive inflation.",
          es: "La brecha de producción es la diferencia entre la producción económica real (PIB) y la producción potencial (lo que la economía podría producir con pleno empleo). Una brecha negativa indica holgura económica y puede justificar política expansiva, mientras que una brecha positiva sugiere sobrecalentamiento y puede requerir política contractiva para prevenir inflación excesiva.",
          de: "Die Produktionslücke ist der Unterschied zwischen tatsächlicher Wirtschaftsleistung (BIP) und potentieller Leistung (was die Wirtschaft bei Vollbeschäftigung produzieren könnte). Eine negative Lücke zeigt wirtschaftliche Unterauslastung an und kann expansive Politik rechtfertigen, während eine positive Lücke Überhitzung andeutet und kontraktive Politik zur Verhinderung exzessiver Inflation erfordern kann.",
          nl: "De outputkloof is het verschil tussen werkelijke economische output (BBP) en potentiële output (wat de economie zou kunnen produceren bij volledige werkgelegenheid). Een negatieve kloof duidt op economische speelruimte en kan expansief beleid rechtvaardigen, terwijl een positieve kloof oververhitting suggereert en contractief beleid kan vereisen om excessieve inflatie te voorkomen."
        }
      },
      {
        question: {
          en: "What is the concept of 'neutral' interest rate in monetary policy?",
          es: "¿Qué es el concepto de tasa de interés 'neutral' en la política monetaria?",
          de: "Was ist das Konzept des 'neutralen' Zinssatzes in der Geldpolitik?",
          nl: "Wat is het concept van 'neutrale' rente in het monetaire beleid?"
        },
        options: [
          { en: "Rate that neither stimulates nor restrains economic growth", es: "Tasa que ni estimula ni restringe el crecimiento económico", de: "Zinssatz, der das Wirtschaftswachstum weder stimuliert noch hemmt", nl: "Tarief dat economische groei noch stimuleert noch remt" },
          { en: "Rate set at exactly zero percent", es: "Tasa establecida exactamente en cero por ciento", de: "Zinssatz, der genau auf null Prozent festgelegt ist", nl: "Tarief vastgesteld op exact nul procent" },
          { en: "Average of all market interest rates", es: "Promedio de todas las tasas de interés del mercado", de: "Durchschnitt aller Marktzinssätze", nl: "Gemiddelde van alle marktrentes" },
          { en: "Rate that equals the inflation rate", es: "Tasa que iguala la tasa de inflación", de: "Zinssatz, der der Inflationsrate entspricht", nl: "Tarief dat gelijk is aan het inflatiepercentage" }
        ],
        correct: 0,
        explanation: {
          en: "The neutral interest rate is the theoretical rate that neither stimulates nor restrains economic growth when the economy is at full employment and stable inflation. It serves as a benchmark for Fed policy - rates below neutral are expansionary, while rates above neutral are contractionary. The neutral rate can change over time based on economic fundamentals.",
          es: "La tasa de interés neutral es la tasa teórica que ni estimula ni restringe el crecimiento económico cuando la economía está en pleno empleo e inflación estable. Sirve como punto de referencia para la política de la Fed - tasas por debajo de neutral son expansivas, mientras que tasas por encima de neutral son contractivas. La tasa neutral puede cambiar con el tiempo basándose en fundamentos económicos.",
          de: "Der neutrale Zinssatz ist der theoretische Zinssatz, der das Wirtschaftswachstum weder stimuliert noch hemmt, wenn die Wirtschaft bei Vollbeschäftigung und stabiler Inflation steht. Er dient als Benchmark für die Fed-Politik - Zinssätze unter neutral sind expansiv, während Zinssätze über neutral kontraktiv sind. Der neutrale Zinssatz kann sich im Laufe der Zeit basierend auf wirtschaftlichen Fundamentaldaten ändern.",
          nl: "Het neutrale rentetarief is het theoretische tarief dat economische groei noch stimuleert noch remt wanneer de economie volledige werkgelegenheid en stabiele inflatie heeft. Het dient als benchmark voor Fed-beleid - tarieven onder neutraal zijn expansief, terwijl tarieven boven neutraal contractief zijn. Het neutrale tarief kan veranderen over tijd gebaseerd op economische fundamenten."
        }
      },
      {
        question: {
          en: "What role do inflation expectations play in monetary policy effectiveness?",
          es: "¿Qué papel juegan las expectativas de inflación en la efectividad de la política monetaria?",
          de: "Welche Rolle spielen Inflationserwartungen bei der Wirksamkeit der Geldpolitik?",
          nl: "Welke rol spelen inflatieverwachtingen in de effectiviteit van monetair beleid?"
        },
        options: [
          { en: "They help anchor actual inflation and make policy more effective", es: "Ayudan a anclar la inflación real y hacen la política más efectiva", de: "Sie helfen, tatsächliche Inflation zu verankern und Politik wirksamer zu machen", nl: "Ze helpen werkelijke inflatie te verankeren en maken beleid effectiever" },
          { en: "They are irrelevant to actual economic outcomes", es: "Son irrelevantes para los resultados económicos reales", de: "Sie sind irrelevant für tatsächliche wirtschaftliche Ergebnisse", nl: "Ze zijn irrelevant voor werkelijke economische uitkomsten" },
          { en: "They only matter during recessions", es: "Solo importan durante recesiones", de: "Sie sind nur während Rezessionen wichtig", nl: "Ze zijn alleen belangrijk tijdens recessies" },
          { en: "They automatically adjust to Fed policy", es: "Se ajustan automáticamente a la política de la Fed", de: "Sie passen sich automatisch an die Fed-Politik an", nl: "Ze passen zich automatisch aan het Fed-beleid aan" }
        ],
        correct: 0,
        explanation: {
          en: "Inflation expectations are crucial because they influence actual inflation through wage negotiations, pricing decisions, and investment choices. Well-anchored expectations around the Fed's 2% target make monetary policy more effective by reducing the need for aggressive policy responses and helping to stabilize the economy more efficiently.",
          es: "Las expectativas de inflación son cruciales porque influyen en la inflación real a través de negociaciones salariales, decisiones de precios y opciones de inversión. Las expectativas bien ancladas alrededor del objetivo del 2% de la Fed hacen la política monetaria más efectiva al reducir la necesidad de respuestas políticas agresivas y ayudar a estabilizar la economía de manera más eficiente.",
          de: "Inflationserwartungen sind entscheidend, weil sie tatsächliche Inflation durch Lohnverhandlungen, Preisgestaltungsentscheidungen und Investitionsentscheidungen beeinflussen. Gut verankerte Erwartungen um das 2%-Ziel der Fed machen Geldpolitik wirksamer, indem sie die Notwendigkeit aggressiver politischer Reaktionen reduzieren und helfen, die Wirtschaft effizienter zu stabilisieren.",
          nl: "Inflatieverwachtingen zijn cruciaal omdat ze werkelijke inflatie beïnvloeden door loononderhandelingen, prijsbesluiten en investeringskeuzes. Goed verankerde verwachtingen rond de 2% doelstelling van de Fed maken monetair beleid effectiever door de behoefte aan agressieve beleidsreacties te verminderen en helpen de economie efficiënter te stabiliseren."
        }
      },
      {
        question: {
          en: "What is the transmission mechanism of monetary policy?",
          es: "¿Qué es el mecanismo de transmisión de la política monetaria?",
          de: "Was ist der Transmissionsmechanismus der Geldpolitik?",
          nl: "Wat is het transmissiemechanisme van monetair beleid?"
        },
        options: [
          { en: "How changes in Fed policy affect the broader economy", es: "Cómo los cambios en la política de la Fed afectan la economía en general", de: "Wie Änderungen in der Fed-Politik die breitere Wirtschaft beeinflussen", nl: "Hoe veranderingen in Fed-beleid de bredere economie beïnvloeden" },
          { en: "The physical printing and distribution of currency", es: "La impresión física y distribución de moneda", de: "Das physische Drucken und Verteilen von Währung", nl: "Het fysieke drukken en distribueren van valuta" },
          { en: "How banks communicate with the Federal Reserve", es: "Cómo los bancos se comunican con la Reserva Federal", de: "Wie Banken mit der Federal Reserve kommunizieren", nl: "Hoe banken communiceren met de Federal Reserve" },
          { en: "The speed of electronic payment systems", es: "La velocidad de los sistemas de pago electrónicos", de: "Die Geschwindigkeit elektronischer Zahlungssysteme", nl: "De snelheid van elektronische betalingssystemen" }
        ],
        correct: 0,
        explanation: {
          en: "The transmission mechanism describes how monetary policy decisions by the Federal Reserve affect the broader economy through various channels: interest rate effects on borrowing and lending, asset price changes affecting wealth, exchange rate impacts on trade, and credit channel effects on bank lending. Understanding this mechanism is crucial for effective policy implementation.",
          es: "El mecanismo de transmisión describe cómo las decisiones de política monetaria de la Reserva Federal afectan la economía en general a través de varios canales: efectos de tasas de interés en préstamos y créditos, cambios en precios de activos que afectan la riqueza, impactos del tipo de cambio en el comercio, y efectos del canal de crédito en préstamos bancarios. Entender este mecanismo es crucial para la implementación efectiva de políticas.",
          de: "Der Transmissionsmechanismus beschreibt, wie geldpolitische Entscheidungen der Federal Reserve die breitere Wirtschaft durch verschiedene Kanäle beeinflussen: Zinssatzeffekte auf Kreditaufnahme und -vergabe, Änderungen der Vermögenspreise, die Reichtum beeinflussen, Wechselkursauswirkungen auf Handel und Kreditkanaleffekte auf Bankkredite. Das Verständnis dieses Mechanismus ist entscheidend für eine effektive Politikumsetzung.",
          nl: "Het transmissiemechanisme beschrijft hoe monetaire beleidsbeslissingen door de Federal Reserve de bredere economie beïnvloeden via verschillende kanalen: rentetariefeffecten op lenen en uitlenen, veranderingen in activaprijzen die rijkdom beïnvloeden, wisselkoersimpact op handel, en kredietkanaaleffecten op bankuitleningen. Het begrijpen van dit mechanisme is cruciaal voor effectieve beleidsimplementatie."
        }
      },
      {
        question: {
          en: "What is the difference between M1 and M2 money supply?",
          es: "¿Cuál es la diferencia entre la oferta monetaria M1 y M2?",
          de: "Was ist der Unterschied zwischen M1 und M2 Geldmenge?",
          nl: "Wat is het verschil tussen M1 en M2 geldvoorraad?"
        },
        options: [
          { en: "M1 includes cash and checking accounts; M2 adds savings and time deposits", es: "M1 incluye efectivo y cuentas corrientes; M2 agrega ahorros y depósitos a plazo", de: "M1 umfasst Bargeld und Girokonten; M2 fügt Spar- und Termineinlagen hinzu", nl: "M1 omvat contant geld en betaalrekeningen; M2 voegt spaar- en termijndeposito's toe" },
          { en: "M1 is domestic money; M2 includes foreign currency", es: "M1 es dinero doméstico; M2 incluye moneda extranjera", de: "M1 ist inländisches Geld; M2 beinhaltet Fremdwährung", nl: "M1 is binnenlands geld; M2 omvat buitenlandse valuta" },
          { en: "M1 is printed money; M2 is digital money", es: "M1 es dinero impreso; M2 es dinero digital", de: "M1 ist gedrucktes Geld; M2 ist digitales Geld", nl: "M1 is gedrukt geld; M2 is digitaal geld" },
          { en: "M1 is Federal Reserve notes; M2 includes bank reserves", es: "M1 son notas de la Reserva Federal; M2 incluye reservas bancarias", de: "M1 sind Federal Reserve Noten; M2 beinhaltet Bankreserven", nl: "M1 zijn Federal Reserve biljetten; M2 omvat bankreserves" }
        ],
        correct: 0,
        explanation: {
          en: "M1 money supply includes the most liquid forms of money: currency in circulation and demand deposits (checking accounts). M2 is a broader measure that includes everything in M1 plus savings deposits, small time deposits, and money market mutual fund shares. This distinction helps the Fed monitor different aspects of monetary conditions.",
          es: "La oferta monetaria M1 incluye las formas más líquidas de dinero: moneda en circulación y depósitos a la vista (cuentas corrientes). M2 es una medida más amplia que incluye todo en M1 más depósitos de ahorro, pequeños depósitos a plazo y participaciones en fondos mutuos del mercado monetario. Esta distinción ayuda a la Fed a monitorear diferentes aspectos de las condiciones monetarias.",
          de: "Die M1-Geldmenge umfasst die liquidesten Geldformen: umlaufende Währung und Sichteinlagen (Girokonten). M2 ist ein breiteres Maß, das alles in M1 plus Spareinlagen, kleine Termineinlagen und Geldmarktfonds-Anteile umfasst. Diese Unterscheidung hilft der Fed, verschiedene Aspekte der Geldbedingungen zu überwachen.",
          nl: "M1 geldvoorraad omvat de meest liquide vormen van geld: circulerende valuta en zichtdeposito's (betaalrekeningen). M2 is een bredere maatstaf die alles in M1 omvat plus spaardeposito's, kleine termijndeposito's en geldmarkt onderlinge fondsen. Dit onderscheid helpt de Fed verschillende aspecten van monetaire omstandigheden te monitoren."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();