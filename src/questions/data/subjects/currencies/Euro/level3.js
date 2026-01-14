// Quiz Level 3: Currencies - Euro (Intermediate)
(function() {
  const level3 = {
    name: {
      en: "Euro - Intermediate",
      es: "Euro - Intermedio",
      de: "Euro - Mittelstufe",
      nl: "Euro - Gemiddeld"
    },
    questions: [
      {
        question: {
          en: "What is the official name of the eurozone countries' monetary union?",
          es: "¿Cuál es el nombre oficial de la unión monetaria de los países de la eurozona?",
          de: "Wie lautet der offizielle Name der Währungsunion der Eurozone-Länder?",
          nl: "Wat is de officiële naam van de monetaire unie van de eurozone-landen?"
        },
        options: [
          { en: "European Monetary Union", es: "Unión Monetaria Europea", de: "Europäische Währungsunion", nl: "Europese Monetaire Unie" },
          { en: "Economic and Monetary Union", es: "Unión Económica y Monetaria", de: "Wirtschafts- und Währungsunion", nl: "Economische en Monetaire Unie" },
          { en: "European Currency Union", es: "Unión de Moneda Europea", de: "Europäische Währungsvereinigung", nl: "Europese Valuta Unie" },
          { en: "Euro Area Union", es: "Unión del Área Euro", de: "Euro-Raum-Union", nl: "Eurogebied Unie" }
        ],
        correct: 1,
        explanation: {
          en: "The Economic and Monetary Union (EMU) is the official name for the arrangement between EU countries that share the euro currency. It involves coordination of economic policies and a single monetary policy managed by the ECB.",
          es: "La Unión Económica y Monetaria (UEM) es el nombre oficial del acuerdo entre países de la UE que comparten la moneda euro. Involucra coordinación de políticas económicas y una política monetaria única gestionada por el BCE.",
          de: "Die Wirtschafts- und Währungsunion (WWU) ist der offizielle Name für die Vereinbarung zwischen EU-Ländern, die die Euro-Währung teilen. Sie umfasst die Koordination wirtschaftlicher Politiken und eine einheitliche Geldpolitik, die von der EZB verwaltet wird.",
          nl: "De Economische en Monetaire Unie (EMU) is de officiële naam voor de regeling tussen EU-landen die de euro-valuta delen. Het behelst coördinatie van economisch beleid en een enkel monetair beleid beheerd door de ECB."
        }
      },
      {
        question: {
          en: "Which country was the first to fail meeting the Maastricht criteria after Euro introduction?",
          es: "¿Qué país fue el primero en no cumplir los criterios de Maastricht después de la introducción del Euro?",
          de: "Welches Land war das erste, das die Maastricht-Kriterien nach der Euro-Einführung nicht erfüllte?",
          nl: "Welk land was het eerste dat de Maastricht-criteria niet haalde na de Euro-introductie?"
        },
        options: [
          { en: "Portugal", es: "Portugal", de: "Portugal", nl: "Portugal" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" }
        ],
        correct: 1,
        explanation: {
          en: "Germany was the first eurozone country to breach the Stability and Growth Pact's deficit limit of 3% of GDP in 2002-2004, despite being a key advocate for fiscal discipline. This highlighted challenges in enforcing fiscal rules.",
          es: "Alemania fue el primer país de la eurozona en violar el límite de déficit del 3% del PIB del Pacto de Estabilidad y Crecimiento en 2002-2004, a pesar de ser un defensor clave de la disciplina fiscal. Esto destacó los desafíos en hacer cumplir las reglas fiscales.",
          de: "Deutschland war das erste Eurozone-Land, das die Defizitgrenze des Stabilitäts- und Wachstumspakts von 3% des BIP in 2002-2004 überschritt, obwohl es ein wichtiger Befürworter der Haushaltsdisziplin war. Dies verdeutlichte die Herausforderungen bei der Durchsetzung von Haushaltsregeln.",
          nl: "Duitsland was het eerste eurozone-land dat de deficietlimiet van 3% van het BBP van het Stabiliteits- en Groeipact overschreed in 2002-2004, ondanks het feit dat het een belangrijke voorstander was van fiscale discipline. Dit benadrukte de uitdagingen bij het handhaven van fiscale regels."
        }
      },
      {
        question: {
          en: "What is the debt-to-GDP ratio limit under the Maastricht criteria?",
          es: "¿Cuál es el límite de la relación deuda-PIB bajo los criterios de Maastricht?",
          de: "Wie hoch ist die Schulden-zu-BIP-Ratio-Grenze unter den Maastricht-Kriterien?",
          nl: "Wat is de schuld-tot-BBP-ratio limiet onder de Maastricht-criteria?"
        },
        options: [
          { en: "50%", es: "50%", de: "50%", nl: "50%" },
          { en: "60%", es: "60%", de: "60%", nl: "60%" },
          { en: "70%", es: "70%", de: "70%", nl: "70%" },
          { en: "80%", es: "80%", de: "80%", nl: "80%" }
        ],
        correct: 1,
        explanation: {
          en: "The Maastricht criteria require government debt to be no more than 60% of GDP. This limit was designed to ensure fiscal sustainability and prevent excessive debt accumulation that could threaten monetary stability.",
          es: "Los criterios de Maastricht requieren que la deuda gubernamental no sea más del 60% del PIB. Este límite fue diseñado para asegurar sostenibilidad fiscal y prevenir acumulación excesiva de deuda que podría amenazar la estabilidad monetaria.",
          de: "Die Maastricht-Kriterien verlangen, dass die Staatsverschuldung nicht mehr als 60% des BIP beträgt. Diese Grenze wurde entwickelt, um fiskalische Nachhaltigkeit zu gewährleisten und übermäßige Schuldenhäufung zu verhindern, die die monetäre Stabilität bedrohen könnte.",
          nl: "De Maastricht-criteria vereisen dat overheidsschuld niet meer dan 60% van het BBP bedraagt. Deze limiet werd ontworpen om fiscale duurzaamheid te verzekeren en buitensporige schuldaccumulatie te voorkomen die monetaire stabiliteit zou kunnen bedreigen."
        }
      },
      {
        question: {
          en: "What is the Exchange Rate Mechanism (ERM II) requirement for Euro adoption?",
          es: "¿Cuál es el requisito del Mecanismo de Tipo de Cambio (MTC II) para la adopción del Euro?",
          de: "Was ist die Anforderung des Wechselkursmechanismus (WKM II) für die Euro-Einführung?",
          nl: "Wat is de vereiste van het Wisselkoersmechanisme (WKM II) voor Euro-adoptie?"
        },
        options: [
          { en: "6 months participation", es: "6 meses de participación", de: "6 Monate Teilnahme", nl: "6 maanden deelname" },
          { en: "1 year participation", es: "1 año de participación", de: "1 Jahr Teilnahme", nl: "1 jaar deelname" },
          { en: "2 years participation", es: "2 años de participación", de: "2 Jahre Teilnahme", nl: "2 jaar deelname" },
          { en: "3 years participation", es: "3 años de participación", de: "3 Jahre Teilnahme", nl: "3 jaar deelname" }
        ],
        correct: 2,
        explanation: {
          en: "Countries must participate in ERM II for at least 2 years without severe tensions before adopting the euro. This mechanism maintains exchange rate stability within ±15% fluctuation bands against the euro.",
          es: "Los países deben participar en el MTC II durante al menos 2 años sin tensiones severas antes de adoptar el euro. Este mecanismo mantiene estabilidad del tipo de cambio dentro de bandas de fluctuación del ±15% contra el euro.",
          de: "Länder müssen mindestens 2 Jahre ohne schwere Spannungen am WKM II teilnehmen, bevor sie den Euro einführen. Dieser Mechanismus erhält Wechselkursstabilität innerhalb von ±15% Schwankungsbreiten gegenüber dem Euro.",
          nl: "Landen moeten minstens 2 jaar zonder ernstige spanningen deelnemen aan het WKM II voordat ze de euro aannemen. Dit mechanisme houdt wisselkoersstabiliteit binnen ±15% fluctuatiebanden tegen de euro aan."
        }
      },
      {
        question: {
          en: "Which eurozone country experienced the most severe sovereign debt crisis?",
          es: "¿Qué país de la eurozona experimentó la crisis de deuda soberana más severa?",
          de: "Welches Eurozone-Land erlebte die schwerste Staatsschuldenkrise?",
          nl: "Welk eurozone-land ervoer de meest ernstige staatsschuldencrisis?"
        },
        options: [
          { en: "Ireland", es: "Irlanda", de: "Irland", nl: "Ierland" },
          { en: "Portugal", es: "Portugal", de: "Portugal", nl: "Portugal" },
          { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" }
        ],
        correct: 2,
        explanation: {
          en: "Greece experienced the most severe sovereign debt crisis, requiring three bailout programs totaling over €300 billion. The crisis led to significant economic contraction, social unrest, and major structural reforms including debt restructuring.",
          es: "Grecia experimentó la crisis de deuda soberana más severa, requiriendo tres programas de rescate por un total de más de €300 mil millones. La crisis llevó a contracción económica significativa, disturbios sociales y reformas estructurales importantes incluyendo reestructuración de deuda.",
          de: "Griechenland erlebte die schwerste Staatsschuldenkrise und benötigte drei Rettungsprogramme im Gesamtwert von über 300 Milliarden Euro. Die Krise führte zu erheblicher wirtschaftlicher Kontraktion, sozialen Unruhen und wichtigen Strukturreformen einschließlich Schuldenrestrukturierung.",
          nl: "Griekenland ervoer de meest ernstige staatsschuldencrisis, waarbij drie reddingsprogramma's ter waarde van meer dan €300 miljard nodig waren. De crisis leidde tot aanzienlijke economische krimp, sociale onrust en belangrijke structurele hervormingen inclusief schuldherstructurering."
        }
      },
      {
        question: {
          en: "What is the role of the Stability and Growth Pact (SGP)?",
          es: "¿Cuál es el papel del Pacto de Estabilidad y Crecimiento (PEC)?",
          de: "Was ist die Rolle des Stabilitäts- und Wachstumspakts (SWP)?",
          nl: "Wat is de rol van het Stabiliteits- en Groeipact (SGP)?"
        },
        options: [
          { en: "Coordinate monetary policy", es: "Coordinar política monetaria", de: "Geldpolitik koordinieren", nl: "Monetair beleid coördineren" },
          { en: "Ensure fiscal discipline", es: "Asegurar disciplina fiscal", de: "Haushaltsdisziplin sicherstellen", nl: "Fiscale discipline verzekeren" },
          { en: "Manage exchange rates", es: "Gestionar tipos de cambio", de: "Wechselkurse verwalten", nl: "Wisselkoersen beheren" },
          { en: "Regulate banking sector", es: "Regular sector bancario", de: "Bankensektor regulieren", nl: "Banksector reguleren" }
        ],
        correct: 1,
        explanation: {
          en: "The Stability and Growth Pact ensures fiscal discipline among eurozone countries by setting limits on budget deficits (3% of GDP) and government debt (60% of GDP), with monitoring and potential sanctions for violations.",
          es: "El Pacto de Estabilidad y Crecimiento asegura disciplina fiscal entre países de la eurozona estableciendo límites en déficits presupuestarios (3% del PIB) y deuda gubernamental (60% del PIB), con monitoreo y sanciones potenciales por violaciones.",
          de: "Der Stabilitäts- und Wachstumspakt gewährleistet Haushaltsdisziplin unter Eurozone-Ländern durch Festlegung von Grenzen für Haushaltsdefizite (3% des BIP) und Staatsverschuldung (60% des BIP), mit Überwachung und möglichen Sanktionen bei Verstößen.",
          nl: "Het Stabiliteits- en Groeipact verzekert fiscale discipline onder eurozone-landen door limieten in te stellen voor begrotingstekorten (3% van BBP) en overheidsschuld (60% van BBP), met monitoring en mogelijke sancties voor overtredingen."
        }
      },
      {
        question: {
          en: "Which institution has the final say on eurozone country Euro adoption?",
          es: "¿Qué institución tiene la palabra final sobre la adopción del Euro por países de la eurozona?",
          de: "Welche Institution hat das letzte Wort bei der Euro-Einführung von Eurozone-Ländern?",
          nl: "Welke instelling heeft het laatste woord over Euro-adoptie door eurozone-landen?"
        },
        options: [
          { en: "European Central Bank", es: "Banco Central Europeo", de: "Europäische Zentralbank", nl: "Europese Centrale Bank" },
          { en: "European Commission", es: "Comisión Europea", de: "Europäische Kommission", nl: "Europese Commissie" },
          { en: "European Council", es: "Consejo Europeo", de: "Europäischer Rat", nl: "Europese Raad" },
          { en: "European Parliament", es: "Parlamento Europeo", de: "Europäisches Parlament", nl: "Europees Parlement" }
        ],
        correct: 2,
        explanation: {
          en: "The European Council, composed of EU heads of state and government, makes the final decision on euro adoption after receiving assessments from the European Commission and ECB regarding countries' readiness to join.",
          es: "El Consejo Europeo, compuesto por jefes de estado y gobierno de la UE, toma la decisión final sobre adopción del euro después de recibir evaluaciones de la Comisión Europea y el BCE sobre la preparación de los países para unirse.",
          de: "Der Europäische Rat, bestehend aus EU-Staats- und Regierungschefs, trifft die endgültige Entscheidung über die Euro-Einführung nach Erhalt von Bewertungen der Europäischen Kommission und EZB bezüglich der Bereitschaft der Länder beizutreten.",
          nl: "De Europese Raad, samengesteld uit EU-staatshoofden en regeringsleiders, neemt de uiteindelijke beslissing over euro-adoptie na het ontvangen van beoordelingen van de Europese Commissie en ECB betreffende de gereedheid van landen om toe te treden."
        }
      },
      {
        question: {
          en: "What is the purpose of the European Stability Mechanism (ESM)?",
          es: "¿Cuál es el propósito del Mecanismo Europeo de Estabilidad (MEDE)?",
          de: "Was ist der Zweck des Europäischen Stabilitätsmechanismus (ESM)?",
          nl: "Wat is het doel van het Europees Stabiliteitsmechanisme (ESM)?"
        },
        options: [
          { en: "Provide emergency financial assistance", es: "Proporcionar asistencia financiera de emergencia", de: "Notfall-Finanzhilfe bereitstellen", nl: "Financiële noodhulp bieden" },
          { en: "Regulate banking supervision", es: "Regular supervisión bancaria", de: "Bankenaufsicht regulieren", nl: "Banktoezicht reguleren" },
          { en: "Coordinate fiscal policies", es: "Coordinar políticas fiscales", de: "Fiskalpolitiken koordinieren", nl: "Fiscaal beleid coördineren" },
          { en: "Manage currency exchange", es: "Gestionar intercambio de divisas", de: "Währungsaustausch verwalten", nl: "Valutawisseling beheren" }
        ],
        correct: 0,
        explanation: {
          en: "The ESM is the eurozone's permanent crisis resolution mechanism, providing financial assistance to member states experiencing severe financial difficulties. It has a lending capacity of €500 billion and requires strict conditionality.",
          es: "El MEDE es el mecanismo permanente de resolución de crisis de la eurozona, proporcionando asistencia financiera a estados miembros que experimentan dificultades financieras severas. Tiene capacidad de préstamo de €500 mil millones y requiere condicionalidad estricta.",
          de: "Der ESM ist der permanente Krisenlösungsmechanismus der Eurozone, der finanzielle Hilfe für Mitgliedstaaten mit schweren finanziellen Schwierigkeiten bereitstellt. Er hat eine Kreditkapazität von 500 Milliarden Euro und erfordert strenge Auflagen.",
          nl: "Het ESM is het permanente crisisoplossingsmechanisme van de eurozone, dat financiële bijstand biedt aan lidstaten die ernstige financiële moeilijkheden ervaren. Het heeft een uitleencapaciteit van €500 miljard en vereist strikte voorwaarden."
        }
      },
      {
        question: {
          en: "What characterizes the 'convergence criteria' for Euro adoption?",
          es: "¿Qué caracteriza los 'criterios de convergencia' para la adopción del Euro?",
          de: "Was charakterisiert die 'Konvergenzkriterien' für die Euro-Einführung?",
          nl: "Wat kenmerkt de 'convergentiecriteria' voor Euro-adoptie?"
        },
        options: [
          { en: "Only economic indicators", es: "Solo indicadores económicos", de: "Nur wirtschaftliche Indikatoren", nl: "Alleen economische indicatoren" },
          { en: "Economic and legal requirements", es: "Requisitos económicos y legales", de: "Wirtschaftliche und rechtliche Anforderungen", nl: "Economische en juridische vereisten" },
          { en: "Political alignment only", es: "Solo alineación política", de: "Nur politische Ausrichtung", nl: "Alleen politieke afstemming" },
          { en: "Cultural integration measures", es: "Medidas de integración cultural", de: "Kulturelle Integrationsmaßnahmen", nl: "Culturele integratiemaatregelen" }
        ],
        correct: 1,
        explanation: {
          en: "Convergence criteria include both economic requirements (inflation, interest rates, deficit, debt, exchange rate stability) and legal requirements (central bank independence, prohibition of monetary financing, legal convergence with EU treaties).",
          es: "Los criterios de convergencia incluyen tanto requisitos económicos (inflación, tasas de interés, déficit, deuda, estabilidad del tipo de cambio) como requisitos legales (independencia del banco central, prohibición de financiamiento monetario, convergencia legal con tratados de la UE).",
          de: "Konvergenzkriterien umfassen sowohl wirtschaftliche Anforderungen (Inflation, Zinssätze, Defizit, Schulden, Wechselkursstabilität) als auch rechtliche Anforderungen (Zentralbankunabhängigkeit, Verbot der Geldfinanzierung, rechtliche Konvergenz mit EU-Verträgen).",
          nl: "Convergentiecriteria omvatten zowel economische vereisten (inflatie, rentetarieven, tekort, schuld, wisselkoersstabiliteit) als juridische vereisten (centrale bankonafhankelijkheid, verbod op monetaire financiering, juridische convergentie met EU-verdragen)."
        }
      },
      {
        question: {
          en: "Which country joined the eurozone most recently before Croatia?",
          es: "¿Qué país se unió a la eurozona más recientemente antes de Croacia?",
          de: "Welches Land trat der Eurozone zuletzt vor Kroatien bei?",
          nl: "Welk land sloot zich het meest recent aan bij de eurozone vóór Kroatië?"
        },
        options: [
          { en: "Estonia", es: "Estonia", de: "Estland", nl: "Estland" },
          { en: "Latvia", es: "Letonia", de: "Lettland", nl: "Letland" },
          { en: "Lithuania", es: "Lituania", de: "Litauen", nl: "Litouwen" },
          { en: "Slovenia", es: "Eslovenia", de: "Slowenien", nl: "Slovenië" }
        ],
        correct: 2,
        explanation: {
          en: "Lithuania joined the eurozone on January 1, 2015, making it the most recent member before Croatia's adoption in 2023. Estonia joined in 2011 and Latvia in 2014, completing the Baltic states' euro adoption.",
          es: "Lituania se unió a la eurozona el 1 de enero de 2015, convirtiéndose en el miembro más reciente antes de la adopción de Croacia en 2023. Estonia se unió en 2011 y Letonia en 2014, completando la adopción del euro de los estados bálticos.",
          de: "Litauen trat der Eurozone am 1. Januar 2015 bei und wurde damit das jüngste Mitglied vor Kroatiens Beitritt 2023. Estland trat 2011 bei und Lettland 2014, wodurch die Euro-Einführung der baltischen Staaten abgeschlossen wurde.",
          nl: "Litouwen sloot zich op 1 januari 2015 aan bij de eurozone, waarmee het het meest recente lid werd vóór Kroatië's adoptie in 2023. Estland sloot zich aan in 2011 en Letland in 2014, waarmee de euro-adoptie van de Baltische staten werd voltooid."
        }
      },
      {
        question: {
          en: "What is the 'fiscal compact' in eurozone governance?",
          es: "¿Qué es el 'pacto fiscal' en la gobernanza de la eurozona?",
          de: "Was ist der 'Fiskalpakt' in der Eurozone-Governance?",
          nl: "Wat is het 'fiscaal compact' in eurozone-bestuur?"
        },
        options: [
          { en: "Treaty requiring balanced budget rules", es: "Tratado que requiere reglas de presupuesto equilibrado", de: "Vertrag, der ausgeglichene Haushaltsregeln erfordert", nl: "Verdrag dat evenwichtige begrotingsregels vereist" },
          { en: "Agreement on tax harmonization", es: "Acuerdo sobre armonización fiscal", de: "Vereinbarung über Steuerharmonisierung", nl: "Overeenkomst over belastingharmonisatie" },
          { en: "Banking union framework", es: "Marco de unión bancaria", de: "Bankenunion-Rahmen", nl: "Bankunie-kader" },
          { en: "Trade agreement protocol", es: "Protocolo de acuerdo comercial", de: "Handelsabkommen-Protokoll", nl: "Handelsovereenkomst protocol" }
        ],
        correct: 0,
        explanation: {
          en: "The Treaty on Stability, Coordination and Governance (fiscal compact) requires eurozone countries to incorporate balanced budget rules into national law, with automatic correction mechanisms and independent monitoring institutions.",
          es: "El Tratado de Estabilidad, Coordinación y Gobernanza (pacto fiscal) requiere que los países de la eurozona incorporen reglas de presupuesto equilibrado en la ley nacional, con mecanismos de corrección automática e instituciones de monitoreo independientes.",
          de: "Der Vertrag über Stabilität, Koordinierung und Steuerung (Fiskalpakt) verlangt von Eurozone-Ländern, ausgeglichene Haushaltsregeln in nationales Recht zu übernehmen, mit automatischen Korrekturmechanismen und unabhängigen Überwachungsinstitutionen.",
          nl: "Het Verdrag betreffende Stabiliteit, Coördinatie en Bestuur (fiscaal compact) vereist dat eurozone-landen evenwichtige begrotingsregels opnemen in nationale wetgeving, met automatische correctiemechanismen en onafhankelijke toezichtinstellingen."
        }
      },
      {
        question: {
          en: "What is the significance of the 'no bailout clause' in EU treaties?",
          es: "¿Cuál es la importancia de la 'cláusula de no rescate' en los tratados de la UE?",
          de: "Was ist die Bedeutung der 'No-Bailout-Klausel' in EU-Verträgen?",
          nl: "Wat is het belang van de 'no bailout clause' in EU-verdragen?"
        },
        options: [
          { en: "Prohibits monetary financing by ECB", es: "Prohíbe financiamiento monetario por el BCE", de: "Verbietet monetäre Finanzierung durch die EZB", nl: "Verbiedt monetaire financiering door de ECB" },
          { en: "Prevents automatic financial assistance between countries", es: "Previene asistencia financiera automática entre países", de: "Verhindert automatische Finanzhilfe zwischen Ländern", nl: "Voorkomt automatische financiële bijstand tussen landen" },
          { en: "Restricts banking sector support", es: "Restringe apoyo al sector bancario", de: "Beschränkt Unterstützung des Bankensektors", nl: "Beperkt banksectorondersteuning" },
          { en: "Limits ECB bond purchasing", es: "Limita compras de bonos del BCE", de: "Begrenzt EZB-Anleihekäufe", nl: "Beperkt ECB-obligatieaankopen" }
        ],
        correct: 1,
        explanation: {
          en: "The no bailout clause (Article 125 TFEU) prohibits EU countries from assuming financial obligations of other member states, promoting fiscal responsibility. However, voluntary financial assistance mechanisms like the ESM were later established.",
          es: "La cláusula de no rescate (Artículo 125 TFUE) prohíbe a países de la UE asumir obligaciones financieras de otros estados miembros, promoviendo responsabilidad fiscal. Sin embargo, mecanismos voluntarios de asistencia financiera como el MEDE fueron establecidos posteriormente.",
          de: "Die No-Bailout-Klausel (Artikel 125 AEUV) verbietet EU-Ländern, finanzielle Verpflichtungen anderer Mitgliedstaaten zu übernehmen, was fiskalische Verantwortung fördert. Jedoch wurden später freiwillige Finanzhilfemechanismen wie der ESM eingerichtet.",
          nl: "De no bailout clause (Artikel 125 VWEU) verbiedt EU-landen om financiële verplichtingen van andere lidstaten over te nemen, wat fiscale verantwoordelijkheid bevordert. Echter, vrijwillige financiële bijstandsmechanismen zoals het ESM werden later opgericht."
        }
      },
      {
        question: {
          en: "What characterizes the Euro's international reserve currency status?",
          es: "¿Qué caracteriza el estatus de moneda de reserva internacional del Euro?",
          de: "Was charakterisiert den Status des Euros als internationale Reservewährung?",
          nl: "Wat kenmerkt de internationale reservevalutastatus van de Euro?"
        },
        options: [
          { en: "Second most held reserve currency globally", es: "Segunda moneda de reserva más tenida globalmente", de: "Zweitmeist gehaltene Reservewährung weltweit", nl: "Op een na meest gehouden reservevaluta wereldwijd" },
          { en: "Most held reserve currency globally", es: "Moneda de reserva más tenida globalmente", de: "Meistgehaltene Reservewährung weltweit", nl: "Meest gehouden reservevaluta wereldwijd" },
          { en: "Third most held reserve currency", es: "Tercera moneda de reserva más tenida", de: "Drittmeist gehaltene Reservewährung", nl: "Op twee na meest gehouden reservevaluta" },
          { en: "Not recognized as reserve currency", es: "No reconocida como moneda de reserva", de: "Nicht als Reservewährung anerkannt", nl: "Niet erkend als reservevaluta" }
        ],
        correct: 0,
        explanation: {
          en: "The Euro is the second most held reserve currency globally after the US Dollar, accounting for approximately 20% of global foreign exchange reserves. This reflects the eurozone's economic importance and the Euro's role in international trade.",
          es: "El Euro es la segunda moneda de reserva más tenida globalmente después del Dólar estadounidense, representando aproximadamente el 20% de las reservas de divisas globales. Esto refleja la importancia económica de la eurozona y el papel del Euro en el comercio internacional.",
          de: "Der Euro ist die zweitmeist gehaltene Reservewährung weltweit nach dem US-Dollar und macht etwa 20% der globalen Devisenreserven aus. Dies spiegelt die wirtschaftliche Bedeutung der Eurozone und die Rolle des Euros im internationalen Handel wider.",
          nl: "De Euro is de op een na meest gehouden reservevaluta wereldwijd na de Amerikaanse Dollar, goed voor ongeveer 20% van de mondiale deviezenreserves. Dit weerspiegelt het economische belang van de eurozone en de rol van de Euro in internationale handel."
        }
      },
      {
        question: {
          en: "What is the European Semester in eurozone economic coordination?",
          es: "¿Qué es el Semestre Europeo en la coordinación económica de la eurozona?",
          de: "Was ist das Europäische Semester in der Eurozone-Wirtschaftskoordinierung?",
          nl: "Wat is het Europees Semester in eurozone economische coördinatie?"
        },
        options: [
          { en: "Annual policy coordination cycle", es: "Ciclo anual de coordinación de políticas", de: "Jährlicher Politikkoordinierungszyklus", nl: "Jaarlijkse beleidscoördinatiecyclus" },
          { en: "Banking supervision period", es: "Período de supervisión bancaria", de: "Bankenaufsichtszeitraum", nl: "Banktoezichtperiode" },
          { en: "Currency stability assessment", es: "Evaluación de estabilidad monetaria", de: "Währungsstabilitätsbewertung", nl: "Valutastabiliteitsbeoordeling" },
          { en: "Trade negotiation framework", es: "Marco de negociación comercial", de: "Handelsverhandlungsrahmen", nl: "Handelsonderhandelingskader" }
        ],
        correct: 0,
        explanation: {
          en: "The European Semester is an annual cycle of economic policy coordination where EU countries submit their budget plans and structural reform programs for peer review and Commission assessment, ensuring policy alignment and fiscal discipline.",
          es: "El Semestre Europeo es un ciclo anual de coordinación de política económica donde países de la UE envían sus planes presupuestarios y programas de reforma estructural para revisión entre pares y evaluación de la Comisión, asegurando alineación de políticas y disciplina fiscal.",
          de: "Das Europäische Semester ist ein jährlicher Zyklus der Wirtschaftspolitikkoordinierung, in dem EU-Länder ihre Haushaltspläne und Strukturreformprogramme zur Peer-Review und Kommissionsbewertung einreichen, um Politikausrichtung und Haushaltsdisziplin sicherzustellen.",
          nl: "Het Europees Semester is een jaarlijkse cyclus van economische beleidscoördinatie waarbij EU-landen hun begrotingsplannen en structurele hervormingsprogramma's indienen voor peer review en Commissiebeoordeling, wat beleidsinlijning en fiscale discipline verzekert."
        }
      },
      {
        question: {
          en: "What is the role of the Eurogroup in eurozone governance?",
          es: "¿Cuál es el papel del Eurogrupo en la gobernanza de la eurozona?",
          de: "Was ist die Rolle der Eurogruppe in der Eurozone-Governance?",
          nl: "Wat is de rol van de Eurogroep in eurozone-bestuur?"
        },
        options: [
          { en: "Informal coordination of finance ministers", es: "Coordinación informal de ministros de finanzas", de: "Informelle Koordinierung der Finanzminister", nl: "Informele coördinatie van financiële ministers" },
          { en: "Formal EU institution with legal powers", es: "Institución formal de la UE con poderes legales", de: "Formelle EU-Institution mit Rechtsbefugnissen", nl: "Formele EU-instelling met juridische bevoegdheden" },
          { en: "European Parliament committee", es: "Comité del Parlamento Europeo", de: "Europäisches Parlament Ausschuss", nl: "Europees Parlement commissie" },
          { en: "ECB advisory board", es: "Junta asesora del BCE", de: "EZB-Beratungsausschuss", nl: "ECB-adviesraad" }
        ],
        correct: 0,
        explanation: {
          en: "The Eurogroup is an informal forum where eurozone finance ministers coordinate economic policies, discuss budgetary matters, and prepare decisions for formal EU councils. Though informal, it plays a crucial role in eurozone economic governance.",
          es: "El Eurogrupo es un foro informal donde ministros de finanzas de la eurozona coordinan políticas económicas, discuten asuntos presupuestarios y preparan decisiones para consejos formales de la UE. Aunque informal, juega un papel crucial en la gobernanza económica de la eurozona.",
          de: "Die Eurogruppe ist ein informelles Forum, in dem Eurozone-Finanzminister Wirtschaftspolitiken koordinieren, Haushaltsangelegenheiten diskutieren und Entscheidungen für formelle EU-Räte vorbereiten. Obwohl informell, spielt sie eine entscheidende Rolle in der Eurozone-Wirtschaftsgovernance.",
          nl: "De Eurogroep is een informeel forum waar eurozone-financiële ministers economisch beleid coördineren, begrotingszaken bespreken en beslissingen voorbereiden voor formele EU-raden. Hoewel informeel, speelt het een cruciale rol in eurozone economische governance."
        }
      },
      {
        question: {
          en: "What distinguishes the Euro banknote security features from other currencies?",
          es: "¿Qué distingue las características de seguridad de los billetes Euro de otras monedas?",
          de: "Was unterscheidet die Sicherheitsmerkmale der Euro-Banknoten von anderen Währungen?",
          nl: "Wat onderscheidt de beveiligingskenmerken van Euro-bankbiljetten van andere valuta's?"
        },
        options: [
          { en: "Standardized across all denominations", es: "Estandarizadas en todas las denominaciones", de: "Standardisiert über alle Stückelungen", nl: "Gestandaardiseerd over alle denominaties" },
          { en: "Multi-layered integrated approach", es: "Enfoque integrado multicapa", de: "Mehrschichtiger integrierter Ansatz", nl: "Meerlagige geïntegreerde benadering" },
          { en: "Single technology focus", es: "Enfoque de tecnología única", de: "Einzeltechnologie-Fokus", nl: "Enkele technologie focus" },
          { en: "Minimal security features", es: "Características de seguridad mínimas", de: "Minimale Sicherheitsmerkmale", nl: "Minimale beveiligingskenmerken" }
        ],
        correct: 1,
        explanation: {
          en: "Euro banknotes employ a sophisticated multi-layered security approach combining tactile, visual, and machine-readable features including watermarks, holograms, raised print, color-changing ink, and microprinting, making them extremely difficult to counterfeit.",
          es: "Los billetes Euro emplean un enfoque de seguridad multicapa sofisticado combinando características táctiles, visuales y legibles por máquina incluyendo marcas de agua, hologramas, impresión en relieve, tinta que cambia de color y microimpresión, haciéndolos extremadamente difíciles de falsificar.",
          de: "Euro-Banknoten verwenden einen hochentwickelten mehrschichtigen Sicherheitsansatz, der taktile, visuelle und maschinenlesbare Merkmale wie Wasserzeichen, Hologramme, Reliefdruck, farbwechselnde Tinte und Mikrodruck kombiniert, was sie extrem schwer zu fälschen macht.",
          nl: "Euro-bankbiljetten gebruiken een geavanceerde meerlagige beveiligingsbenadering die tactiele, visuele en machine-leesbare kenmerken combineert, inclusief watermerken, hologrammen, reliëfdruk, kleurveranderende inkt en microdruk, waardoor ze extreem moeilijk te vervalsen zijn."
        }
      },
      {
        question: {
          en: "What is the significance of the Euro's decimal subdivision?",
          es: "¿Cuál es la importancia de la subdivisión decimal del Euro?",
          de: "Was ist die Bedeutung der Dezimalunterteilung des Euros?",
          nl: "Wat is het belang van de decimale onderverdeling van de Euro?"
        },
        options: [
          { en: "1 Euro = 100 cents for easy calculation", es: "1 Euro = 100 céntimos para cálculo fácil", de: "1 Euro = 100 Cent für einfache Berechnung", nl: "1 Euro = 100 cent voor eenvoudige berekening" },
          { en: "1 Euro = 12 subdivisions following tradition", es: "1 Euro = 12 subdivisiones siguiendo tradición", de: "1 Euro = 12 Unterteilungen nach Tradition", nl: "1 Euro = 12 onderverdelingen volgens traditie" },
          { en: "No subdivision system", es: "Sin sistema de subdivisión", de: "Kein Unterteilungssystem", nl: "Geen onderverdelingssysteem" },
          { en: "1 Euro = 1000 millieuros", es: "1 Euro = 1000 milieuros", de: "1 Euro = 1000 Millieuros", nl: "1 Euro = 1000 millieuro's" }
        ],
        correct: 0,
        explanation: {
          en: "The Euro follows the decimal system with 1 Euro = 100 cents, which facilitates easy calculations, accounting, and exchange rate conversions. This decimal approach is used by most modern currencies worldwide for practical purposes.",
          es: "El Euro sigue el sistema decimal con 1 Euro = 100 céntimos, lo que facilita cálculos fáciles, contabilidad y conversiones de tipo de cambio. Este enfoque decimal es usado por la mayoría de monedas modernas mundialmente por propósitos prácticos.",
          de: "Der Euro folgt dem Dezimalsystem mit 1 Euro = 100 Cent, was einfache Berechnungen, Buchhaltung und Wechselkursumrechnungen erleichtert. Dieser Dezimalansatz wird von den meisten modernen Währungen weltweit für praktische Zwecke verwendet.",
          nl: "De Euro volgt het decimale systeem met 1 Euro = 100 cent, wat eenvoudige berekeningen, boekhouding en wisselkoersconversies vergemakkelijkt. Deze decimale benadering wordt door de meeste moderne valuta's wereldwijd gebruikt voor praktische doeleinden."
        }
      },
      {
        question: {
          en: "What characterizes the transition period when countries adopt the Euro?",
          es: "¿Qué caracteriza el período de transición cuando países adoptan el Euro?",
          de: "Was charakterisiert die Übergangszeit, wenn Länder den Euro einführen?",
          nl: "Wat kenmerkt de overgangsperiode wanneer landen de Euro aannemen?"
        },
        options: [
          { en: "Immediate complete replacement", es: "Reemplazo completo inmediato", de: "Sofortiger vollständiger Austausch", nl: "Onmiddellijke volledige vervanging" },
          { en: "Dual circulation period with old currency", es: "Período de circulación dual con moneda anterior", de: "Doppelt-Umlaufzeit mit alter Währung", nl: "Dubbele circulatieperiode met oude valuta" },
          { en: "Electronic-only introduction first", es: "Introducción solo electrónica primero", de: "Nur elektronische Einführung zuerst", nl: "Alleen elektronische introductie eerst" },
          { en: "Gradual replacement over several yrs", es: "Reemplazo gradual durante varios años", de: "Allmählicher Austausch über mehrere Jahre", nl: "Geleidelijke vervanging over meerdere jaren" }
        ],
        correct: 1,
        explanation: {
          en: "Countries typically have a dual circulation period where both the Euro and the old national currency are accepted, lasting usually 1-2 months. This allows businesses and citizens to adapt gradually while ensuring smooth transition.",
          es: "Los países típicamente tienen un período de circulación dual donde tanto el Euro como la antigua moneda nacional son aceptadas, durando usualmente 1-2 meses. Esto permite a empresas y ciudadanos adaptarse gradualmente mientras asegura transición suave.",
          de: "Länder haben typischerweise eine Doppel-Umlaufzeit, in der sowohl der Euro als auch die alte Nationalwährung akzeptiert werden, die normalerweise 1-2 Monate dauert. Dies ermöglicht Unternehmen und Bürgern, sich allmählich anzupassen und einen reibungslosen Übergang zu gewährleisten.",
          nl: "Landen hebben doorgaans een dubbele circulatieperiode waarbij zowel de Euro als de oude nationale valuta worden geaccepteerd, die meestal 1-2 maanden duurt. Dit stelt bedrijven en burgers in staat geleidelijk aan te passen terwijl een soepele overgang wordt gewaarborgd."
        }
      },
      {
        question: {
          en: "What is the relationship between the Euro and Special Drawing Rights (SDR)?",
          es: "¿Cuál es la relación entre el Euro y los Derechos Especiales de Giro (DEG)?",
          de: "Was ist die Beziehung zwischen dem Euro und den Sonderziehungsrechten (SZR)?",
          nl: "Wat is de relatie tussen de Euro en Special Drawing Rights (SDR)?"
        },
        options: [
          { en: "Euro is a component of the SDR basket", es: "El Euro es un componente de la canasta de DEG", de: "Euro ist ein Bestandteil des SZR-Korbs", nl: "Euro is een component van de SDR-mandje" },
          { en: "Euro replaced SDR internationally", es: "El Euro reemplazó los DEG internacionalmente", de: "Euro ersetzte SZR international", nl: "Euro verving SDR internationaal" },
          { en: "SDR is based only on Euro", es: "Los DEG se basan solo en Euro", de: "SZR basiert nur auf Euro", nl: "SDR is alleen gebaseerd op Euro" },
          { en: "No relationship exists", es: "No existe relación", de: "Keine Beziehung existiert", nl: "Er bestaat geen relatie" }
        ],
        correct: 0,
        explanation: {
          en: "The Euro is one of the five currencies in the IMF's Special Drawing Rights basket, alongside the US Dollar, Chinese Yuan, Japanese Yen, and British Pound. This reflects the Euro's importance in the international monetary system.",
          es: "El Euro es una de las cinco monedas en la canasta de Derechos Especiales de Giro del FMI, junto al Dólar estadounidense, Yuan chino, Yen japonés y Libra británica. Esto refleja la importancia del Euro en el sistema monetario internacional.",
          de: "Der Euro ist eine der fünf Währungen im Sonderziehungsrechte-Korb des IWF, neben US-Dollar, chinesischem Yuan, japanischem Yen und britischem Pfund. Dies spiegelt die Bedeutung des Euros im internationalen Währungssystem wider.",
          nl: "De Euro is een van de vijf valuta's in de Special Drawing Rights-mandje van het IMF, naast de Amerikaanse Dollar, Chinese Yuan, Japanse Yen en Britse Pond. Dit weerspiegelt het belang van de Euro in het internationale monetaire systeem."
        }
      },
      {
        question: {
          en: "What is the role of the ECB's Monetary Policy Committee?",
          es: "¿Cuál es el papel del Comité de Política Monetaria del BCE?",
          de: "Welche Rolle spielt der Geldpolitische Ausschuss der EZB?",
          nl: "Wat is de rol van het Monetair Beleidscomité van de ECB?"
        },
        options: [
          { en: "Prepares monetary policy meetings and analysis", es: "Prepara reuniones y análisis de política monetaria", de: "Bereitet geldpolitische Sitzungen und Analysen vor", nl: "Bereidt monetaire beleidsvergaderingen en analyses voor" },
          { en: "Makes final monetary policy decisions", es: "Toma decisiones finales de política monetaria", de: "Trifft endgültige geldpolitische Entscheidungen", nl: "Neemt definitieve monetaire beleidsbeslissingen" },
          { en: "Supervises commercial banks", es: "Supervisa bancos comerciales", de: "Überwacht Geschäftsbanken", nl: "Houdt toezicht op commerciële banken" },
          { en: "Manages foreign exchange operations", es: "Gestiona operaciones de divisas", de: "Verwaltet Devisenoperationen", nl: "Beheert valutaoperaties" }
        ],
        correct: 0,
        explanation: {
          en: "The Monetary Policy Committee prepares the monetary policy meetings of the Governing Council by conducting economic analysis, preparing policy options, and providing technical support. The actual decisions are made by the Governing Council.",
          es: "El Comité de Política Monetaria prepara las reuniones de política monetaria del Consejo de Gobierno realizando análisis económico, preparando opciones de política y proporcionando apoyo técnico. Las decisiones reales las toma el Consejo de Gobierno.",
          de: "Der Geldpolitische Ausschuss bereitet die geldpolitischen Sitzungen des Rates vor, indem er Wirtschaftsanalysen durchführt, Politikoptionen vorbereitet und technische Unterstützung bietet. Die tatsächlichen Entscheidungen trifft der Rat.",
          nl: "Het Monetair Beleidscomité bereidt de monetaire beleidsvergaderingen van de Raad van Bestuur voor door economische analyses uit te voeren, beleidsopties voor te bereiden en technische ondersteuning te bieden. De werkelijke beslissingen worden genomen door de Raad van Bestuur."
        }      },
      {
        question: {
          en: "When was the Euro introduced?",
          es: "When was the Euro introduced?",
          de: "When was the Euro introduced?",
          nl: "When was the Euro introduced?"
        },
        options: [
          { en: "1999", es: "1999", de: "1999", nl: "1999" },
          { en: "1992", es: "1992", de: "1992", nl: "1992" },
          { en: "2002", es: "2002", de: "2002", nl: "2002" },
          { en: "1985", es: "1985", de: "1985", nl: "1985" }
        ],
        correct: 0,
        explanation: {
          en: "The Euro was introduced as an accounting currency in 1999, with physical cash in 2002.",
          es: "The Euro was introduced as an accounting currency in 1999, with physical cash in 2002.",
          de: "The Euro was introduced as an accounting currency in 1999, with physical cash in 2002.",
          nl: "The Euro was introduced as an accounting currency in 1999, with physical cash in 2002."
        }      },
      {
        question: {
          en: "What is the symbol for Euro?",
          es: "What is the symbol for Euro?",
          de: "What is the symbol for Euro?",
          nl: "What is the symbol for Euro?"
        },
        options: [
          { en: "€", es: "€", de: "€", nl: "€" },
          { en: "E", es: "E", de: "E", nl: "E" },
          { en: "EU", es: "EU", de: "EU", nl: "EU" },
          { en: "Є", es: "Є", de: "Є", nl: "Є" }
        ],
        correct: 0,
        explanation: {
          en: "The Euro symbol € was designed to represent stability and the European unity.",
          es: "The Euro symbol € was designed to represent stability and the European unity.",
          de: "The Euro symbol € was designed to represent stability and the European unity.",
          nl: "The Euro symbol € was designed to represent stability and the European unity."
        }      },
      {
        question: {
          en: "How many countries use the Euro?",
          es: "How many countries use the Euro?",
          de: "How many countries use the Euro?",
          nl: "How many countries use the Euro?"
        },
        options: [
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "27", es: "27", de: "27", nl: "27" },
          { en: "28", es: "28", de: "28", nl: "28" }
        ],
        correct: 0,
        explanation: {
          en: "As of 2024, 20 of the 27 EU member states have adopted the Euro as their currency.",
          es: "As of 2024, 20 of the 27 EU member states have adopted the Euro as their currency.",
          de: "As of 2024, 20 of the 27 EU member states have adopted the Euro as their currency.",
          nl: "As of 2024, 20 of the 27 EU member states have adopted the Euro as their currency."
        }      },
      {
        question: {
          en: "What is the European Central Bank?",
          es: "What is the European Central Bank?",
          de: "What is the European Central Bank?",
          nl: "What is the European Central Bank?"
        },
        options: [
          { en: "Central bank for Euro", es: "Central bank for Euro", de: "Central bank for Euro", nl: "Central bank for Euro" },
          { en: "EU parliament", es: "EU parliament", de: "EU parliament", nl: "EU parliament" },
          { en: "Trade organization", es: "Trade organization", de: "Trade organization", nl: "Trade organization" },
          { en: "Court system", es: "Court system", de: "Court system", nl: "Court system" }
        ],
        correct: 0,
        explanation: {
          en: "The European Central Bank (ECB) manages monetary policy for the Eurozone.",
          es: "The European Central Bank (ECB) manages monetary policy for the Eurozone.",
          de: "The European Central Bank (ECB) manages monetary policy for the Eurozone.",
          nl: "The European Central Bank (ECB) manages monetary policy for the Eurozone."
        }      },
      {
        question: {
          en: "What is the smallest Euro coin?",
          es: "What is the smallest Euro coin?",
          de: "What is the smallest Euro coin?",
          nl: "What is the smallest Euro coin?"
        },
        options: [
          { en: "1 cent", es: "1 cent", de: "1 cent", nl: "1 cent" },
          { en: "5 cents", es: "5 cents", de: "5 cents", nl: "5 cents" },
          { en: "10 cents", es: "10 cents", de: "10 cents", nl: "10 cents" },
          { en: "2 cents", es: "2 cents", de: "2 cents", nl: "2 cents" }
        ],
        correct: 0,
        explanation: {
          en: "The one cent Euro coin is the smallest denomination, though some countries don't use it.",
          es: "The one cent Euro coin is the smallest denomination, though some countries don't use it.",
          de: "The one cent Euro coin is the smallest denomination, though some countries don't use it.",
          nl: "The one cent Euro coin is the smallest denomination, though some countries don't use it."
        }      },
      {
        question: {
          en: "What is the largest Euro banknote?",
          es: "What is the largest Euro banknote?",
          de: "What is the largest Euro banknote?",
          nl: "What is the largest Euro banknote?"
        },
        options: [
          { en: "€500", es: "€500", de: "€500", nl: "€500" },
          { en: "€200", es: "€200", de: "€200", nl: "€200" },
          { en: "€100", es: "€100", de: "€100", nl: "€100" },
          { en: "€1000", es: "€1000", de: "€1000", nl: "€1000" }
        ],
        correct: 0,
        explanation: {
          en: "The €500 note is the largest denomination, though it's being phased out since 2019.",
          es: "The €500 note is the largest denomination, though it's being phased out since 2019.",
          de: "The €500 note is the largest denomination, though it's being phased out since 2019.",
          nl: "The €500 note is the largest denomination, though it's being phased out since 2019."
        }      },
      {
        question: {
          en: "Which country was first to adopt Euro?",
          es: "Which country was first to adopt Euro?",
          de: "Which country was first to adopt Euro?",
          nl: "Which country was first to adopt Euro?"
        },
        options: [
          { en: "All Eurozone countries simultaneously", es: "All Eurozone countries simultaneously", de: "All Eurozone countries simultaneously", nl: "All Eurozone countries simultaneously" },
          { en: "Germany", es: "Germany", de: "Germany", nl: "Germany" },
          { en: "France", es: "France", de: "France", nl: "France" },
          { en: "Italy", es: "Italy", de: "Italy", nl: "Italy" }
        ],
        correct: 0,
        explanation: {
          en: "Eleven countries adopted the Euro simultaneously on January 1, 1999.",
          es: "Eleven countries adopted the Euro simultaneously on January 1, 1999.",
          de: "Eleven countries adopted the Euro simultaneously on January 1, 1999.",
          nl: "Eleven countries adopted the Euro simultaneously on January 1, 1999."
        }      },
      {
        question: {
          en: "What does ECB stand for?",
          es: "What does ECB stand for?",
          de: "What does ECB stand for?",
          nl: "What does ECB stand for?"
        },
        options: [
          { en: "European Central Bank", es: "European Central Bank", de: "European Central Bank", nl: "European Central Bank" },
          { en: "European Currency Board", es: "European Currency Board", de: "European Currency Board", nl: "European Currency Board" },
          { en: "Euro Central Bank", es: "Euro Central Bank", de: "Euro Central Bank", nl: "Euro Central Bank" },
          { en: "European Credit Bank", es: "European Credit Bank", de: "European Credit Bank", nl: "European Credit Bank" }
        ],
        correct: 0,
        explanation: {
          en: "ECB stands for European Central Bank, headquartered in Frankfurt, Germany.",
          es: "ECB stands for European Central Bank, headquartered in Frankfurt, Germany.",
          de: "ECB stands for European Central Bank, headquartered in Frankfurt, Germany.",
          nl: "ECB stands for European Central Bank, headquartered in Frankfurt, Germany."
        }      },
      {
        question: {
          en: "What is the Eurozone?",
          es: "What is the Eurozone?",
          de: "What is the Eurozone?",
          nl: "What is the Eurozone?"
        },
        options: [
          { en: "EU countries using Euro", es: "EU countries using Euro", de: "EU countries using Euro", nl: "EU countries using Euro" },
          { en: "All of Europe", es: "All of Europe", de: "All of Europe", nl: "All of Europe" },
          { en: "European Union", es: "European Union", de: "European Union", nl: "European Union" },
          { en: "European trade zone", es: "European trade zone", de: "European trade zone", nl: "European trade zone" }
        ],
        correct: 0,
        explanation: {
          en: "The Eurozone consists of EU member states that have adopted the Euro as currency.",
          es: "The Eurozone consists of EU member states that have adopted the Euro as currency.",
          de: "The Eurozone consists of EU member states that have adopted the Euro as currency.",
          nl: "The Eurozone consists of EU member states that have adopted the Euro as currency."
        }      },
      {
        question: {
          en: "Which UK country doesn't use Euro?",
          es: "Which UK country doesn't use Euro?",
          de: "Which UK country doesn't use Euro?",
          nl: "Which UK country doesn't use Euro?"
        },
        options: [
          { en: "All UK countries use Pound", es: "All UK countries use Pound", de: "All UK countries use Pound", nl: "All UK countries use Pound" },
          { en: "England", es: "England", de: "England", nl: "England" },
          { en: "Scotland", es: "Scotland", de: "Scotland", nl: "Scotland" },
          { en: "Wales", es: "Wales", de: "Wales", nl: "Wales" }
        ],
        correct: 0,
        explanation: {
          en: "The United Kingdom retained the Pound Sterling and never adopted the Euro.",
          es: "The United Kingdom retained the Pound Sterling and never adopted the Euro.",
          de: "The United Kingdom retained the Pound Sterling and never adopted the Euro.",
          nl: "The United Kingdom retained the Pound Sterling and never adopted the Euro."
        }      },
      {
        question: {
          en: "What is Euro coin reverse design?",
          es: "What is Euro coin reverse design?",
          de: "What is Euro coin reverse design?",
          nl: "What is Euro coin reverse design?"
        },
        options: [
          { en: "National design chosen by country", es: "National design chosen by country", de: "National design chosen by country", nl: "National design chosen by country" },
          { en: "Same for all countries", es: "Same for all countries", de: "Same for all countries", nl: "Same for all countries" },
          { en: "ECB logo", es: "ECB logo", de: "ECB logo", nl: "ECB logo" },
          { en: "European flag", es: "European flag", de: "European flag", nl: "European flag" }
        ],
        correct: 0,
        explanation: {
          en: "Each Eurozone country designs the reverse of their Euro coins with national symbols.",
          es: "Each Eurozone country designs the reverse of their Euro coins with national symbols.",
          de: "Each Eurozone country designs the reverse of their Euro coins with national symbols.",
          nl: "Each Eurozone country designs the reverse of their Euro coins with national symbols."
        }      },
      {
        question: {
          en: "Where is the ECB headquartered?",
          es: "Where is the ECB headquartered?",
          de: "Where is the ECB headquartered?",
          nl: "Where is the ECB headquartered?"
        },
        options: [
          { en: "Frankfurt, Germany", es: "Frankfurt, Germany", de: "Frankfurt, Germany", nl: "Frankfurt, Germany" },
          { en: "Brussels, Belgium", es: "Brussels, Belgium", de: "Brussels, Belgium", nl: "Brussels, Belgium" },
          { en: "Paris, France", es: "Paris, France", de: "Paris, France", nl: "Paris, France" },
          { en: "Amsterdam, Netherlands", es: "Amsterdam, Netherlands", de: "Amsterdam, Netherlands", nl: "Amsterdam, Netherlands" }
        ],
        correct: 0,
        explanation: {
          en: "The European Central Bank headquarters is located in Frankfurt am Main, Germany.",
          es: "The European Central Bank headquarters is located in Frankfurt am Main, Germany.",
          de: "The European Central Bank headquarters is located in Frankfurt am Main, Germany.",
          nl: "The European Central Bank headquarters is located in Frankfurt am Main, Germany."
        }      },
      {
        question: {
          en: "What is a euro cent?",
          es: "What is a euro cent?",
          de: "What is a euro cent?",
          nl: "What is a euro cent?"
        },
        options: [
          { en: "1/100 of a Euro", es: "1/100 of a Euro", de: "1/100 of a Euro", nl: "1/100 of a Euro" },
          { en: "1/10 of a Euro", es: "1/10 of a Euro", de: "1/10 of a Euro", nl: "1/10 of a Euro" },
          { en: "Smallest banknote", es: "Smallest banknote", de: "Smallest banknote", nl: "Smallest banknote" },
          { en: "Currency exchange fee", es: "Currency exchange fee", de: "Currency exchange fee", nl: "Currency exchange fee" }
        ],
        correct: 0,
        explanation: {
          en: "A euro cent is one-hundredth of a Euro, similar to the US cent.",
          es: "A euro cent is one-hundredth of a Euro, similar to the US cent.",
          de: "A euro cent is one-hundredth of a Euro, similar to the US cent.",
          nl: "A euro cent is one-hundredth of a Euro, similar to the US cent."
        }      },
      {
        question: {
          en: "What was Germany's currency before Euro?",
          es: "What was Germany's currency before Euro?",
          de: "What was Germany's currency before Euro?",
          nl: "What was Germany's currency before Euro?"
        },
        options: [
          { en: "Deutsche Mark", es: "Deutsche Mark", de: "Deutsche Mark", nl: "Deutsche Mark" },
          { en: "Schilling", es: "Schilling", de: "Schilling", nl: "Schilling" },
          { en: "Guilder", es: "Guilder", de: "Guilder", nl: "Guilder" },
          { en: "Franc", es: "Franc", de: "Franc", nl: "Franc" }
        ],
        correct: 0,
        explanation: {
          en: "Germany used the Deutsche Mark (DM) before adopting the Euro in 1999.",
          es: "Germany used the Deutsche Mark (DM) before adopting the Euro in 1999.",
          de: "Germany used the Deutsche Mark (DM) before adopting the Euro in 1999.",
          nl: "Germany used the Deutsche Mark (DM) before adopting the Euro in 1999."
        }      },
      {
        question: {
          en: "What was France's currency before Euro?",
          es: "What was France's currency before Euro?",
          de: "What was France's currency before Euro?",
          nl: "What was France's currency before Euro?"
        },
        options: [
          { en: "French Franc", es: "French Franc", de: "French Franc", nl: "French Franc" },
          { en: "Livre", es: "Livre", de: "Livre", nl: "Livre" },
          { en: "Ecu", es: "Ecu", de: "Ecu", nl: "Ecu" },
          { en: "Peseta", es: "Peseta", de: "Peseta", nl: "Peseta" }
        ],
        correct: 0,
        explanation: {
          en: "France used the French Franc before transitioning to the Euro.",
          es: "France used the French Franc before transitioning to the Euro.",
          de: "France used the French Franc before transitioning to the Euro.",
          nl: "France used the French Franc before transitioning to the Euro."
        }      },
      {
        question: {
          en: "What is the €2 coin made of?",
          es: "What is the €2 coin made of?",
          de: "What is the €2 coin made of?",
          nl: "What is the €2 coin made of?"
        },
        options: [
          { en: "Bi-metallic (two metals)", es: "Bi-metallic (two metals)", de: "Bi-metallic (two metals)", nl: "Bi-metallic (two metals)" },
          { en: "Pure copper", es: "Pure copper", de: "Pure copper", nl: "Pure copper" },
          { en: "Pure nickel", es: "Pure nickel", de: "Pure nickel", nl: "Pure nickel" },
          { en: "Bronze", es: "Bronze", de: "Bronze", nl: "Bronze" }
        ],
        correct: 0,
        explanation: {
          en: "The €2 coin is bi-metallic with a nickel-brass outer ring and copper-nickel center.",
          es: "The €2 coin is bi-metallic with a nickel-brass outer ring and copper-nickel center.",
          de: "The €2 coin is bi-metallic with a nickel-brass outer ring and copper-nickel center.",
          nl: "The €2 coin is bi-metallic with a nickel-brass outer ring and copper-nickel center."
        }      },
      {
        question: {
          en: "Which country rejected Euro adoption?",
          es: "Which country rejected Euro adoption?",
          de: "Which country rejected Euro adoption?",
          nl: "Which country rejected Euro adoption?"
        },
        options: [
          { en: "Denmark", es: "Denmark", de: "Denmark", nl: "Denmark" },
          { en: "Germany", es: "Germany", de: "Germany", nl: "Germany" },
          { en: "France", es: "France", de: "France", nl: "France" },
          { en: "Spain", es: "Spain", de: "Spain", nl: "Spain" }
        ],
        correct: 0,
        explanation: {
          en: "Denmark held referendums and voted to keep their krone instead of adopting Euro.",
          es: "Denmark held referendums and voted to keep their krone instead of adopting Euro.",
          de: "Denmark held referendums and voted to keep their krone instead of adopting Euro.",
          nl: "Denmark held referendums and voted to keep their krone instead of adopting Euro."
        }      },
      {
        question: {
          en: "What is common on all Euro banknotes?",
          es: "What is common on all Euro banknotes?",
          de: "What is common on all Euro banknotes?",
          nl: "What is common on all Euro banknotes?"
        },
        options: [
          { en: "Architectural styles", es: "Architectural styles", de: "Architectural styles", nl: "Architectural styles" },
          { en: "Famous people", es: "Famous people", de: "Famous people", nl: "Famous people" },
          { en: "National monuments", es: "National monuments", de: "National monuments", nl: "National monuments" },
          { en: "Animals", es: "Animals", de: "Animals", nl: "Animals" }
        ],
        correct: 0,
        explanation: {
          en: "Euro banknotes feature architectural styles from different European periods, not real buildings.",
          es: "Euro banknotes feature architectural styles from different European periods, not real buildings.",
          de: "Euro banknotes feature architectural styles from different European periods, not real buildings.",
          nl: "Euro banknotes feature architectural styles from different European periods, not real buildings."
        }      },
      {
        question: {
          en: "What year did Euro cash enter circulation?",
          es: "What year did Euro cash enter circulation?",
          de: "What year did Euro cash enter circulation?",
          nl: "What year did Euro cash enter circulation?"
        },
        options: [
          { en: "2002", es: "2002", de: "2002", nl: "2002" },
          { en: "1999", es: "1999", de: "1999", nl: "1999" },
          { en: "2000", es: "2000", de: "2000", nl: "2000" },
          { en: "2004", es: "2004", de: "2004", nl: "2004" }
        ],
        correct: 0,
        explanation: {
          en: "Physical Euro banknotes and coins entered circulation on January 1, 2002.",
          es: "Physical Euro banknotes and coins entered circulation on January 1, 2002.",
          de: "Physical Euro banknotes and coins entered circulation on January 1, 2002.",
          nl: "Physical Euro banknotes and coins entered circulation on January 1, 2002."
        }      },
      {
        question: {
          en: "What is convergence criteria?",
          es: "What is convergence criteria?",
          de: "What is convergence criteria?",
          nl: "What is convergence criteria?"
        },
        options: [
          { en: "Requirements to join Eurozone", es: "Requirements to join Eurozone", de: "Requirements to join Eurozone", nl: "Requirements to join Eurozone" },
          { en: "Exchange rate", es: "Exchange rate", de: "Exchange rate", nl: "Exchange rate" },
          { en: "Inflation target", es: "Inflation target", de: "Inflation target", nl: "Inflation target" },
          { en: "GDP requirement", es: "GDP requirement", de: "GDP requirement", nl: "GDP requirement" }
        ],
        correct: 0,
        explanation: {
          en: "Convergence criteria are economic requirements EU countries must meet to adopt the Euro.",
          es: "Convergence criteria are economic requirements EU countries must meet to adopt the Euro.",
          de: "Convergence criteria are economic requirements EU countries must meet to adopt the Euro.",
          nl: "Convergence criteria are economic requirements EU countries must meet to adopt the Euro."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();