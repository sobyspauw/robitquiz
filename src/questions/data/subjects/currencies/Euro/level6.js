// Quiz Level 6: Currencies - Euro (Advanced)
(function() {
  const level6 = {
    name: {
      en: "Euro Currency - Advanced",
      es: "Moneda Euro - Avanzado",
      de: "Euro-Währung - Fortgeschritten",
      nl: "Euro Munt - Gevorderd"
    },
    questions: [
      {
        question: {
          en: "What was the primary objective of the ECB's Asset Purchase Programme (APP) launched in 2015?",
          es: "¿Cuál fue el objetivo principal del Programa de Compra de Activos (APP) del BCE lanzado en 2015?",
          de: "Was war das Hauptziel des 2015 gestarteten Ankaufprogramms für Wertpapiere (APP) der EZB?",
          nl: "Wat was het primaire doel van het Asset Purchase Programme (APP) van de ECB dat in 2015 werd gelanceerd?"
        },
        options: [
          { en: "To increase inflation towards the 2% target", es: "Aumentar la inflación hacia el objetivo del 2%", de: "Die Inflation auf das 2%-Ziel zu erhöhen", nl: "De inflatie verhogen naar het 2% doel" },
          { en: "To reduce government debt levels", es: "Reducir los niveles de deuda gubernamental", de: "Die Staatsverschuldung zu reduzieren", nl: "Overheidsschuldniveaus verlagen" },
          { en: "To strengthen the euro exchange rate", es: "Fortalecer el tipo de cambio del euro", de: "Den Euro-Wechselkurs zu stärken", nl: "De euro wisselkoers versterken" },
          { en: "To increase bank capital requirements", es: "Aumentar los requisitos de capital bancario", de: "Die Eigenkapitalanforderungen der Banken zu erhöhen", nl: "Bankkapitaalvereisten verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "The APP was launched to combat low inflation and deflation risks, aiming to bring inflation back towards the ECB's target of below but close to 2% over the medium term.",
          es: "El APP se lanzó para combatir la baja inflación y los riesgos de deflación, con el objetivo de llevar la inflación de vuelta hacia el objetivo del BCE de por debajo pero cerca del 2% a medio plazo.",
          de: "Das APP wurde eingeführt, um niedrige Inflation und Deflationsrisiken zu bekämpfen, mit dem Ziel, die Inflation mittelfristig wieder an das EZB-Ziel von unter, aber nahe 2% heranzuführen.",
          nl: "Het APP werd gelanceerd om lage inflatie en deflatierisico's te bestrijden, met als doel de inflatie op middellange termijn terug te brengen naar het ECB-doel van onder maar dichtbij 2%."
        }
      },
      {
        question: {
          en: "Which pillar of the Banking Union is responsible for ensuring uniform application of supervisory standards?",
          es: "¿Qué pilar de la Unión Bancaria es responsable de asegurar la aplicación uniforme de los estándares de supervisión?",
          de: "Welche Säule der Bankenunion ist für die einheitliche Anwendung der Aufsichtsstandards verantwortlich?",
          nl: "Welke pijler van de Bankenunie is verantwoordelijk voor het waarborgen van uniforme toepassing van toezichtstandaarden?"
        },
        options: [
          { en: "Single Supervisory Mechanism (SSM)", es: "Mecanismo Único de Supervisión (SSM)", de: "Einheitlicher Aufsichtsmechanismus (SSM)", nl: "Single Supervisory Mechanism (SSM)" },
          { en: "Single Resolution Mechanism (SRM)", es: "Mecanismo Único de Resolución (SRM)", de: "Einheitlicher Abwicklungsmechanismus (SRM)", nl: "Single Resolution Mechanism (SRM)" },
          { en: "European Deposit Insurance Scheme (EDIS)", es: "Esquema Europeo de Garantía de Depósitos (EDIS)", de: "Europäisches Einlagensicherungssystem (EDIS)", nl: "European Deposit Insurance Scheme (EDIS)" },
          { en: "Capital Requirements Directive (CRD)", es: "Directiva de Requisitos de Capital (CRD)", de: "Eigenkapitalrichtlinie (CRD)", nl: "Capital Requirements Directive (CRD)" }
        ],
        correct: 0,
        explanation: {
          en: "The SSM is the first pillar of the Banking Union, established in 2014, which centralizes banking supervision under the ECB for significant banks in the eurozone and participating non-eurozone countries.",
          es: "El SSM es el primer pilar de la Unión Bancaria, establecido en 2014, que centraliza la supervisión bancaria bajo el BCE para bancos significativos en la eurozona y países no eurozona participantes.",
          de: "Der SSM ist die erste Säule der Bankenunion, die 2014 eingerichtet wurde und die Bankenaufsicht unter der EZB für bedeutende Banken in der Eurozone und teilnehmenden Nicht-Eurozone-Ländern zentralisiert.",
          nl: "Het SSM is de eerste pijler van de Bankenunie, opgericht in 2014, die het banktoezicht centraliseert onder de ECB voor significante banken in de eurozone en deelnemende niet-eurozone landen."
        }
      },
      {
        question: {
          en: "What is the maximum amount covered by the Pandemic Emergency Purchase Programme (PEPP)?",
          es: "¿Cuál es el monto máximo cubierto por el Programa de Compras de Emergencia Pandémica (PEPP)?",
          de: "Wie hoch ist der maximale Betrag des Pandemie-Notfall-Ankaufprogramms (PEPP)?",
          nl: "Wat is het maximale bedrag gedekt door het Pandemic Emergency Purchase Programme (PEPP)?"
        },
        options: [
          { en: "€1.35 trillion", es: "1,35 billones de euros", de: "1,35 Billionen Euro", nl: "€1,35 biljoen" },
          { en: "€1.85 trillion", es: "1,85 billones de euros", de: "1,85 Billionen Euro", nl: "€1,85 biljoen" },
          { en: "€2.6 trillion", es: "2,6 billones de euros", de: "2,6 Billionen Euro", nl: "€2,6 biljoen" },
          { en: "€750 billion", es: "750 mil millones de euros", de: "750 Milliarden Euro", nl: "€750 miljard" }
        ],
        correct: 1,
        explanation: {
          en: "The PEPP envelope was increased to €1.85 trillion in December 2020, making it the largest asset purchase programme in ECB history, designed to counter the severe economic impact of COVID-19.",
          es: "El sobre del PEPP se incrementó a 1,85 billones de euros en diciembre de 2020, convirtiéndolo en el programa de compra de activos más grande en la historia del BCE, diseñado para contrarrestar el severo impacto económico de COVID-19.",
          de: "Das PEPP-Volumen wurde im Dezember 2020 auf 1,85 Billionen Euro erhöht, was es zum größten Ankaufprogramm für Vermögenswerte in der Geschichte der EZB macht, das darauf ausgelegt ist, den schwerwiegenden wirtschaftlichen Auswirkungen von COVID-19 entgegenzuwirken.",
          nl: "Het PEPP-pakket werd in december 2020 verhoogd naar €1,85 biljoen, waarmee het het grootste activaaankopprogramma in de ECB-geschiedenis werd, ontworpen om de ernstige economische impact van COVID-19 tegen te gaan."
        }
      },
      {
        question: {
          en: "Which institution manages the Single Resolution Fund (SRF) within the Banking Union?",
          es: "¿Qué institución gestiona el Fondo Único de Resolución (SRF) dentro de la Unión Bancaria?",
          de: "Welche Institution verwaltet den Einheitlichen Abwicklungsfonds (SRF) innerhalb der Bankenunion?",
          nl: "Welke instelling beheert het Single Resolution Fund (SRF) binnen de Bankenunie?"
        },
        options: [
          { en: "European Central Bank", es: "Banco Central Europeo", de: "Europäische Zentralbank", nl: "Europese Centrale Bank" },
          { en: "Single Resolution Board", es: "Junta Única de Resolución", de: "Einheitlicher Abwicklungsausschuss", nl: "Single Resolution Board" },
          { en: "European Banking Authority", es: "Autoridad Bancaria Europea", de: "Europäische Bankenaufsichtsbehörde", nl: "Europese Bankautoriteit" },
          { en: "European Stability Mechanism", es: "Mecanismo Europeo de Estabilidad", de: "Europäischer Stabilitätsmechanismus", nl: "Europees Stabiliteitsmechanisme" }
        ],
        correct: 1,
        explanation: {
          en: "The Single Resolution Board (SRB) is responsible for managing the SRF, which is funded by bank contributions and is designed to finance the resolution of failing banks without using taxpayer money.",
          es: "La Junta Única de Resolución (SRB) es responsable de gestionar el SRF, que se financia con contribuciones bancarias y está diseñado para financiar la resolución de bancos en quiebra sin usar dinero de los contribuyentes.",
          de: "Der Einheitliche Abwicklungsausschuss (SRB) ist für die Verwaltung des SRF zuständig, der durch Bankbeiträge finanziert wird und dazu dient, die Abwicklung von insolventen Banken ohne Verwendung von Steuergeldern zu finanzieren.",
          nl: "Het Single Resolution Board (SRB) is verantwoordelijk voor het beheer van het SRF, dat wordt gefinancierd door bankbijdragen en is ontworpen om de afwikkeling van falende banken te financieren zonder belastinggeld te gebruiken."
        }
      },
      {
        question: {
          en: "What is the key difference between the Corporate Sector Purchase Programme (CSPP) and other APP sub-programmes?",
          es: "¿Cuál es la diferencia clave entre el Programa de Compra del Sector Corporativo (CSPP) y otros sub-programas del APP?",
          de: "Was ist der Hauptunterschied zwischen dem Unternehmenssektorankaufprogramm (CSPP) und anderen APP-Unterprogrammen?",
          nl: "Wat is het belangrijkste verschil tussen het Corporate Sector Purchase Programme (CSPP) en andere APP-subprogramma's?"
        },
        options: [
          { en: "It purchases private sector bonds instead of government securities", es: "Compra bonos del sector privado en lugar de valores gubernamentales", de: "Es kauft Anleihen des Privatsektors anstelle von Staatsanleihen", nl: "Het koopt private sector obligaties in plaats van overheidspapieren" },
          { en: "It operates only in non-eurozone countries", es: "Opera solo en países fuera de la eurozona", de: "Es operiert nur in Nicht-Eurozone-Ländern", nl: "Het opereert alleen in niet-eurozone landen" },
          { en: "It has no purchase limits", es: "No tiene límites de compra", de: "Es hat keine Kauflimits", nl: "Het heeft geen aankoplimieten" },
          { en: "It is managed by national central banks only", es: "Es gestionado solo por bancos centrales nacionales", de: "Es wird nur von nationalen Zentralbanken verwaltet", nl: "Het wordt alleen beheerd door nationale centrale banken" }
        ],
        correct: 0,
        explanation: {
          en: "The CSPP is unique among APP programmes as it focuses on purchasing corporate bonds issued by non-bank corporations, diversifying the ECB's asset purchases beyond sovereign and agency bonds.",
          es: "El CSPP es único entre los programas APP ya que se centra en comprar bonos corporativos emitidos por corporaciones no bancarias, diversificando las compras de activos del BCE más allá de bonos soberanos y de agencias.",
          de: "Das CSPP ist unter den APP-Programmen einzigartig, da es sich auf den Kauf von Unternehmensanleihen nicht-bancoreirter Unternehmen konzentriert und damit die Vermögenskäufe der EZB über Staats- und Agenturanleihen hinaus diversifiziert.",
          nl: "Het CSPP is uniek onder APP-programma's omdat het zich richt op het kopen van bedrijfsobligaties uitgegeven door niet-bancaire ondernemingen, waarmee de ECB's activaaankopen worden gediversifieerd voorbij soevereine en agentschapsobligaties."
        }
      },
      {
        question: {
          en: "Which crisis management tool allows the ECB to provide emergency liquidity to banks facing temporary difficulties?",
          es: "¿Qué herramienta de gestión de crisis permite al BCE proporcionar liquidez de emergencia a bancos que enfrentan dificultades temporales?",
          de: "Welches Krisenmanagement-Instrument ermöglicht es der EZB, Notliquidität an Banken zu gewähren, die vorübergehende Schwierigkeiten haben?",
          nl: "Welke crisisbeheersingstool stelt de ECB in staat om noodliquiditeit te verstrekken aan banken die tijdelijke moeilijkheden ondervinden?"
        },
        options: [
          { en: "Outright Monetary Transactions (OMT)", es: "Transacciones Monetarias Directas (OMT)", de: "Outright Monetary Transactions (OMT)", nl: "Outright Monetary Transactions (OMT)" },
          { en: "Emergency Liquidity Assistance (ELA)", es: "Asistencia de Liquidez de Emergencia (ELA)", de: "Notfall-Liquiditätshilfe (ELA)", nl: "Emergency Liquidity Assistance (ELA)" },
          { en: "Targeted Longer-Term Refinancing Operations (TLTRO)", es: "Operaciones de Refinanciación a Más Largo Plazo Específicas (TLTRO)", de: "Gezielte längerfristige Refinanzierungsgeschäfte (TLTRO)", nl: "Targeted Longer-Term Refinancing Operations (TLTRO)" },
          { en: "Securities Markets Programme (SMP)", es: "Programa de Mercados de Valores (SMP)", de: "Wertpapiermarktprogramm (SMP)", nl: "Securities Markets Programme (SMP)" }
        ],
        correct: 1,
        explanation: {
          en: "ELA is provided by national central banks to temporarily illiquid but solvent banks, subject to ECB approval if the amount exceeds certain thresholds, serving as a crucial backstop during financial stress.",
          es: "ELA es proporcionada por bancos centrales nacionales a bancos temporalmente ilíquidos pero solventes, sujeta a la aprobación del BCE si el monto excede ciertos umbrales, sirviendo como un respaldo crucial durante el estrés financiero.",
          de: "ELA wird von nationalen Zentralbanken an vorübergehend illiquide, aber solvente Banken gewährt, vorbehaltlich der EZB-Genehmigung, wenn der Betrag bestimmte Schwellenwerte überschreitet, und dient als entscheidende Absicherung während finanzieller Belastungen.",
          nl: "ELA wordt verstrekt door nationale centrale banken aan tijdelijk illiquide maar solvabele banken, onderworpen aan ECB-goedkeuring als het bedrag bepaalde drempels overschrijdt, en dient als cruciale backstop tijdens financiële stress."
        }
      },
      {
        question: {
          en: "What is the minimum target level for the Single Resolution Fund by 2024?",
          es: "¿Cuál es el nivel objetivo mínimo para el Fondo Único de Resolución para 2024?",
          de: "Wie hoch ist das Mindestziel für den Einheitlichen Abwicklungsfonds bis 2024?",
          nl: "Wat is het minimale doelniveau voor het Single Resolution Fund tegen 2024?"
        },
        options: [
          { en: "0.8% of covered deposits", es: "0,8% de los depósitos cubiertos", de: "0,8% der abgedeckten Einlagen", nl: "0,8% van gedekte deposito's" },
          { en: "1% of covered deposits", es: "1% de los depósitos cubiertos", de: "1% der abgedeckten Einlagen", nl: "1% van gedekte deposito's" },
          { en: "1.5% of covered deposits", es: "1,5% de los depósitos cubiertos", de: "1,5% der abgedeckten Einlagen", nl: "1,5% van gedekte deposito's" },
          { en: "2% of covered deposits", es: "2% de los depósitos cubiertos", de: "2% der abgedeckten Einlagen", nl: "2% van gedekte deposito's" }
        ],
        correct: 1,
        explanation: {
          en: "The SRF aims to reach 1% of covered deposits by 2024, which represents approximately €70 billion. This target ensures adequate funding for bank resolution without relying on public bailouts.",
          es: "El SRF tiene como objetivo alcanzar el 1% de los depósitos cubiertos para 2024, lo que representa aproximadamente 70 mil millones de euros. Este objetivo asegura financiación adecuada para la resolución bancaria sin depender de rescates públicos.",
          de: "Der SRF soll bis 2024 1% der abgedeckten Einlagen erreichen, was etwa 70 Milliarden Euro entspricht. Dieses Ziel gewährleistet eine angemessene Finanzierung für die Bankenabwicklung ohne Abhängigkeit von öffentlichen Rettungsaktionen.",
          nl: "Het SRF streeft ernaar om tegen 2024 1% van gedekte deposito's te bereiken, wat ongeveer €70 miljard vertegenwoordigt. Dit doel zorgt voor adequate financiering voor bankafwikkeling zonder afhankelijkheid van publieke reddingsacties."
        }
      },
      {
        question: {
          en: "Which European institution has the authority to trigger the use of Outright Monetary Transactions (OMT)?",
          es: "¿Qué institución europea tiene la autoridad para activar el uso de Transacciones Monetarias Directas (OMT)?",
          de: "Welche europäische Institution hat die Befugnis, den Einsatz von Outright Monetary Transactions (OMT) auszulösen?",
          nl: "Welke Europese instelling heeft de autoriteit om het gebruik van Outright Monetary Transactions (OMT) te activeren?"
        },
        options: [
          { en: "European Central Bank", es: "Banco Central Europeo", de: "Europäische Zentralbank", nl: "Europese Centrale Bank" },
          { en: "European Council", es: "Consejo Europeo", de: "Europäischer Rat", nl: "Europese Raad" },
          { en: "European Stability Mechanism", es: "Mecanismo Europeo de Estabilidad", de: "Europäischer Stabilitätsmechanismus", nl: "Europees Stabiliteitsmechanisme" },
          { en: "European Commission", es: "Comisión Europea", de: "Europäische Kommission", nl: "Europese Commissie" }
        ],
        correct: 2,
        explanation: {
          en: "OMT can only be activated if a country has an active ESM programme or precautionary programme. The ESM's involvement ensures fiscal conditionality and proper economic adjustment measures are in place.",
          es: "OMT solo puede ser activado si un país tiene un programa ESM activo o programa preventivo. La participación del ESM asegura que la condicionalidad fiscal y las medidas de ajuste económico apropiadas estén en su lugar.",
          de: "OMT kann nur aktiviert werden, wenn ein Land ein aktives ESM-Programm oder ein vorsorgliches Programm hat. Die Beteiligung des ESM gewährleistet, dass fiskalische Konditionalität und angemessene wirtschaftliche Anpassungsmaßnahmen vorhanden sind.",
          nl: "OMT kan alleen worden geactiveerd als een land een actief ESM-programma of voorzorgsprogramma heeft. De betrokkenheid van het ESM zorgt ervoor dat fiscale conditionaliteit en juiste economische aanpassingsmaatregelen aanwezig zijn."
        }
      },
      {
        question: {
          en: "What is the bail-in tool's primary purpose in bank resolution under the SRM?",
          es: "¿Cuál es el propósito principal de la herramienta de bail-in en la resolución bancaria bajo el SRM?",
          de: "Was ist der Hauptzweck des Bail-in-Instruments bei der Bankenabwicklung unter dem SRM?",
          nl: "Wat is het primaire doel van de bail-in tool bij bankafwikkeling onder het SRM?"
        },
        options: [
          { en: "To protect all bank creditors from losses", es: "Proteger a todos los acreedores bancarios de pérdidas", de: "Alle Bankgläubiger vor Verlusten zu schützen", nl: "Alle bankschuldeisers beschermen tegen verliezen" },
          { en: "To convert debt into equity and write down liabilities", es: "Convertir deuda en capital y reducir pasivos", de: "Schulden in Eigenkapital umzuwandeln und Verbindlichkeiten abzuschreiben", nl: "Schuld omzetten in eigen vermogen en verplichtingen afschrijven" },
          { en: "To guarantee government funding for failing banks", es: "Garantizar financiación gubernamental para bancos en quiebra", de: "Staatliche Finanzierung für insolvente Banken zu garantieren", nl: "Overheidsfinanciering garanderen voor falende banken" },
          { en: "To transfer assets to healthy banks only", es: "Transferir activos solo a bancos saludables", de: "Vermögenswerte nur an gesunde Banken zu übertragen", nl: "Activa alleen overdragen aan gezonde banken" }
        ],
        correct: 1,
        explanation: {
          en: "The bail-in tool allows resolution authorities to write down or convert certain liabilities into equity, ensuring that shareholders and creditors bear losses before any public funds are used, following the creditor hierarchy.",
          es: "La herramienta de bail-in permite a las autoridades de resolución reducir o convertir ciertas responsabilidades en capital, asegurando que accionistas y acreedores asuman pérdidas antes de usar fondos públicos, siguiendo la jerarquía de acreedores.",
          de: "Das Bail-in-Instrument ermöglicht es den Abwicklungsbehörden, bestimmte Verbindlichkeiten abzuschreiben oder in Eigenkapital umzuwandeln, wodurch sichergestellt wird, dass Aktionäre und Gläubiger Verluste tragen, bevor öffentliche Mittel verwendet werden, gemäß der Gläubigerhierarchie.",
          nl: "De bail-in tool stelt afwikkelingsautoriteiten in staat om bepaalde verplichtingen af te schrijven of om te zetten in eigen vermogen, waardoor wordt gewaarborgd dat aandeelhouders en schuldeisers verliezen dragen voordat publieke middelen worden gebruikt, volgens de schuldeisershiërarchie."
        }
      },
      {
        question: {
          en: "What is the Public Sector Purchase Programme (PSPP) issue share limit per issuer?",
          es: "¿Cuál es el límite de participación por emisión del Programa de Compra del Sector Público (PSPP) por emisor?",
          de: "Wie hoch ist das Anteilslimit pro Ausgabe des Public Sector Purchase Programme (PSPP) pro Emittent?",
          nl: "Wat is de issue share limiet per uitgever van het Public Sector Purchase Programme (PSPP)?"
        },
        options: [
          { en: "25%", es: "25%", de: "25%", nl: "25%" },
          { en: "33%", es: "33%", de: "33%", nl: "33%" },
          { en: "50%", es: "50%", de: "50%", nl: "50%" },
          { en: "No limit", es: "Sin límite", de: "Kein Limit", nl: "Geen limiet" }
        ],
        correct: 1,
        explanation: {
          en: "The PSPP has a 33% issue share limit and a 33% issuer share limit to ensure market functioning and avoid creating excessive concentration in any particular security or issuer, maintaining market liquidity.",
          es: "El PSPP tiene un límite de participación por emisión del 33% y un límite de participación por emisor del 33% para asegurar el funcionamiento del mercado y evitar crear concentración excesiva en cualquier valor o emisor particular, manteniendo la liquidez del mercado.",
          de: "Das PSPP hat eine 33%-Emissionsanteilsgrenze und eine 33%-Emittentenanteilsgrenze, um das Marktfunktionieren zu gewährleisten und übermäßige Konzentration in bestimmten Wertpapieren oder Emittenten zu vermeiden, wodurch die Marktliquidität aufrechterhalten wird.",
          nl: "Het PSPP heeft een 33% issue share limiet en een 33% issuer share limiet om de marktwerking te waarborgen en overmatige concentratie in een bepaald effect of uitgever te voorkomen, waarbij de marktliquiditeit wordt behouden."
        }
      },
      {
        question: {
          en: "Which type of financial institution is specifically excluded from direct ECB supervision under the SSM?",
          es: "¿Qué tipo de institución financiera está específicamente excluida de la supervisión directa del BCE bajo el SSM?",
          de: "Welche Art von Finanzinstitut ist speziell von der direkten EZB-Aufsicht unter dem SSM ausgeschlossen?",
          nl: "Welk type financiële instelling is specifiek uitgesloten van direct ECB-toezicht onder het SSM?"
        },
        options: [
          { en: "Investment banks", es: "Bancos de inversión", de: "Investmentbanken", nl: "Investeringsbanken" },
          { en: "Insurance companies", es: "Compañías de seguros", de: "Versicherungsunternehmen", nl: "Verzekeringsmaatschappijen" },
          { en: "Cooperative banks", es: "Bancos cooperativos", de: "Genossenschaftsbanken", nl: "Coöperatieve banken" },
          { en: "Development banks", es: "Bancos de desarrollo", de: "Entwicklungsbanken", nl: "Ontwikkelingsbanken" }
        ],
        correct: 1,
        explanation: {
          en: "Insurance companies remain under national supervision as they are not covered by the SSM. The ECB directly supervises significant banks and indirectly oversees less significant banks through national supervisors.",
          es: "Las compañías de seguros permanecen bajo supervisión nacional ya que no están cubiertas por el SSM. El BCE supervisa directamente bancos significativos e indirectamente supervisa bancos menos significativos a través de supervisores nacionales.",
          de: "Versicherungsunternehmen bleiben unter nationaler Aufsicht, da sie nicht vom SSM abgedeckt werden. Die EZB beaufsichtigt direkt bedeutende Banken und überwacht indirekt weniger bedeutende Banken durch nationale Aufseher.",
          nl: "Verzekeringsmaatschappijen blijven onder nationaal toezicht omdat ze niet onder het SSM vallen. De ECB houdt direct toezicht op significante banken en indirect toezicht op minder significante banken via nationale toezichthouders."
        }
      },
      {
        question: {
          en: "What was the primary innovation of the TLTRO-III programme compared to previous TLTROs?",
          es: "¿Cuál fue la innovación principal del programa TLTRO-III comparado con TLTROs anteriores?",
          de: "Was war die Hauptinnovation des TLTRO-III-Programms im Vergleich zu früheren TLTROs?",
          nl: "Wat was de primaire innovatie van het TLTRO-III programma vergeleken met eerdere TLTRO's?"
        },
        options: [
          { en: "Longer maturity periods up to 4 years", es: "Períodos de vencimiento más largos hasta 4 años", de: "Längere Laufzeiten bis zu 4 Jahren", nl: "Langere looptijden tot 4 jaar" },
          { en: "Negative interest rates for qualifying lending", es: "Tasas de interés negativas para préstamos calificados", de: "Negative Zinssätze für qualifizierende Kredite", nl: "Negatieve rentetarieven voor kwalificerende kredietverlening" },
          { en: "Unlimited borrowing capacity", es: "Capacidad de endeudamiento ilimitada", de: "Unbegrenzte Kreditkapazität", nl: "Onbeperkte leencapaciteit" },
          { en: "Inclusion of non-eurozone banks", es: "Inclusión de bancos fuera de la eurozona", de: "Einbeziehung von Nicht-Eurozone-Banken", nl: "Inclusie van niet-eurozone banken" }
        ],
        correct: 1,
        explanation: {
          en: "TLTRO-III introduced the possibility of negative interest rates (as low as -1%) for banks that exceed their lending benchmarks, effectively paying banks to lend and stimulate credit growth during the pandemic.",
          es: "TLTRO-III introdujo la posibilidad de tasas de interés negativas (tan bajas como -1%) para bancos que exceden sus referencias de préstamos, efectivamente pagando a los bancos para prestar y estimular el crecimiento crediticio durante la pandemia.",
          de: "TLTRO-III führte die Möglichkeit negativer Zinssätze (bis zu -1%) für Banken ein, die ihre Kreditreferenzwerte überschreiten, wodurch Banken effektiv dafür bezahlt werden, Kredite zu vergeben und das Kreditwachstum während der Pandemie zu stimulieren.",
          nl: "TLTRO-III introduceerde de mogelijkheid van negatieve rentetarieven (zo laag als -1%) voor banken die hun kredietbenchmarks overschrijden, waardoor banken effectief worden betaald om te lenen en kredietgroei te stimuleren tijdens de pandemie."
        }
      },
      {
        question: {
          en: "What is the 'floor system' in ECB monetary policy operations?",
          es: "¿Qué es el 'sistema de piso' en las operaciones de política monetaria del BCE?",
          de: "Was ist das 'Floor-System' in den geldpolitischen Operationen der EZB?",
          nl: "Wat is het 'floor systeem' in ECB monetaire beleidsoperaties?"
        },
        options: [
          { en: "A system where the deposit rate acts as a floor for money market rates", es: "Un sistema donde la tasa de depósito actúa como piso para las tasas del mercado monetario", de: "Ein System, bei dem der Einlagensatz als Untergrenze für Geldmarktsätze fungiert", nl: "Een systeem waarbij het depositorentarief fungeert als bodem voor geldmarkttarieven" },
          { en: "Minimum capital requirements for banks", es: "Requisitos mínimos de capital para bancos", de: "Mindestkapitalanforderungen für Banken", nl: "Minimale kapitaalvereisten voor banken" },
          { en: "The lowest possible inflation target", es: "El objetivo de inflación más bajo posible", de: "Das niedrigstmögliche Inflationsziel", nl: "Het laagst mogelijke inflatiedoel" },
          { en: "A liquidity floor for bank reserves", es: "Un piso de liquidez para reservas bancarias", de: "Eine Liquiditätsuntergrenze für Bankreserven", nl: "Een liquiditeitsbodem voor bankreserves" }
        ],
        correct: 0,
        explanation: {
          en: "In the current abundant liquidity environment, the ECB operates a floor system where the deposit facility rate effectively sets a floor for overnight money market rates, giving the ECB precise control over short-term rates.",
          es: "En el entorno actual de liquidez abundante, el BCE opera un sistema de piso donde la tasa de la facilidad de depósito efectivamente establece un piso para las tasas del mercado monetario nocturno, dando al BCE control preciso sobre las tasas a corto plazo.",
          de: "In der aktuellen Umgebung reichlicher Liquidität betreibt die EZB ein Floor-System, bei dem der Satz der Einlagefazilität effektiv eine Untergrenze für Tagesgeld-Marktsätze setzt und der EZB präzise Kontrolle über kurzfristige Sätze gibt.",
          nl: "In de huidige overvloedige liquiditeitsomgeving opereert de ECB een floor systeem waarbij het depositorentarief effectief een bodem zet voor overnight geldmarkttarieven, waardoor de ECB nauwkeurige controle heeft over korte termijn tarieven."
        }
      },
      {
        question: {
          en: "Which of the following is NOT a sub-programme of the Asset Purchase Programme (APP)?",
          es: "¿Cuál de los siguientes NO es un sub-programa del Programa de Compra de Activos (APP)?",
          de: "Welches der folgenden ist KEIN Unterprogramm des Ankaufprogramms für Wertpapiere (APP)?",
          nl: "Welke van de volgende is GEEN subprogramma van het Asset Purchase Programme (APP)?"
        },
        options: [
          { en: "Corporate Sector Purchase Programme (CSPP)", es: "Programa de Compra del Sector Corporativo (CSPP)", de: "Unternehmenssektorankaufprogramm (CSPP)", nl: "Corporate Sector Purchase Programme (CSPP)" },
          { en: "Asset-Backed Securities Purchase Programme (ABSPP)", es: "Programa de Compra de Valores Respaldados por Activos (ABSPP)", de: "Asset-Backed Securities Kaufprogramm (ABSPP)", nl: "Asset-Backed Securities Purchase Programme (ABSPP)" },
          { en: "Covered Bond Purchase Programme (CBPP3)", es: "Programa de Compra de Bonos Cubiertos (CBPP3)", de: "Covered Bond Kaufprogramm (CBPP3)", nl: "Covered Bond Purchase Programme (CBPP3)" },
          { en: "Securities Markets Programme (SMP)", es: "Programa de Mercados de Valores (SMP)", de: "Wertpapiermarktprogramm (SMP)", nl: "Securities Markets Programme (SMP)" }
        ],
        correct: 3,
        explanation: {
          en: "The SMP was a separate crisis intervention programme (2010-2012) that preceded the APP. The APP includes PSPP, CSPP, ABSPP, and CBPP3 as its main sub-programmes launched from 2015 onwards.",
          es: "El SMP fue un programa separado de intervención de crisis (2010-2012) que precedió al APP. El APP incluye PSPP, CSPP, ABSPP y CBPP3 como sus principales sub-programas lanzados desde 2015 en adelante.",
          de: "Das SMP war ein separates Kriseninterventionsprogramm (2010-2012), das dem APP vorausging. Das APP umfasst PSPP, CSPP, ABSPP und CBPP3 als seine Hauptunterprogramme, die ab 2015 gestartet wurden.",
          nl: "Het SMP was een apart crisisinterventieprogramma (2010-2012) dat voorafging aan het APP. Het APP omvat PSPP, CSPP, ABSPP en CBPP3 als zijn belangrijkste subprogramma's die vanaf 2015 werden gelanceerd."
        }
      },
      {
        question: {
          en: "What is the significance of the 'capital key' in ECB operations?",
          es: "¿Cuál es la importancia de la 'clave de capital' en las operaciones del BCE?",
          de: "Was ist die Bedeutung des 'Kapitalschlüssels' in EZB-Operationen?",
          nl: "Wat is de betekenis van de 'kapitaalsleutel' in ECB-operaties?"
        },
        options: [
          { en: "It determines voting rights in ECB decisions", es: "Determina los derechos de voto en las decisiones del BCE", de: "Es bestimmt die Stimmrechte bei EZB-Entscheidungen", nl: "Het bepaalt stemrechten in ECB-beslissingen" },
          { en: "It sets the distribution of asset purchases across countries", es: "Establece la distribución de compras de activos entre países", de: "Es legt die Verteilung der Vermögenskäufe auf die Länder fest", nl: "Het stelt de verdeling van activaaankopen over landen vast" },
          { en: "It defines minimum reserve requirements", es: "Define los requisitos mínimos de reserva", de: "Es definiert Mindestreserveanforderungen", nl: "Het definieert minimale reservevereisten" },
          { en: "It controls exchange rate interventions", es: "Controla las intervenciones del tipo de cambio", de: "Es kontrolliert Wechselkursinterventionen", nl: "Het controleert wisselkoersinterventies" }
        ],
        correct: 1,
        explanation: {
          en: "The capital key, based on each country's share in EU population and GDP, determines how asset purchases under APP are distributed across eurozone countries, ensuring proportional representation in monetary policy implementation.",
          es: "La clave de capital, basada en la participación de cada país en la población y PIB de la UE, determina cómo se distribuyen las compras de activos bajo APP entre países de la eurozona, asegurando representación proporcional en la implementación de política monetaria.",
          de: "Der Kapitalschlüssel, basierend auf dem Anteil jedes Landes an EU-Bevölkerung und BIP, bestimmt, wie Vermögenskäufe unter APP auf Eurozone-Länder verteilt werden, wodurch proportionale Vertretung in der geldpolitischen Umsetzung gewährleistet wird.",
          nl: "De kapitaalsleutel, gebaseerd op elke land's aandeel in EU-bevolking en BBP, bepaalt hoe activaaankopen onder APP worden verdeeld over eurozone landen, waarbij proportionele vertegenwoordiging in monetaire beleidsimplementatie wordt gewaarborgd."
        }
      },
      {
        question: {
          en: "What distinguishes 'significant institutions' from 'less significant institutions' under SSM supervision?",
          es: "¿Qué distingue a las 'instituciones significativas' de las 'instituciones menos significativas' bajo la supervisión del SSM?",
          de: "Was unterscheidet 'bedeutende Institute' von 'weniger bedeutenden Instituten' unter SSM-Aufsicht?",
          nl: "Wat onderscheidt 'significante instellingen' van 'minder significante instellingen' onder SSM-toezicht?"
        },
        options: [
          { en: "Assets exceeding €30 billion or 20% of national GDP", es: "Activos que exceden 30 mil millones de euros o 20% del PIB nacional", de: "Vermögenswerte über 30 Milliarden Euro oder 20% des nationalen BIP", nl: "Activa die €30 miljard of 20% van nationaal BBP overschrijden" },
          { en: "Cross-border operations only", es: "Solo operaciones transfronterizas", de: "Nur grenzüberschreitende Geschäfte", nl: "Alleen grensoverschrijdende operaties" },
          { en: "Government ownership percentage", es: "Porcentaje de propiedad gubernamental", de: "Staatlicher Eigentumsanteil", nl: "Overheidsaandeelpercentage" },
          { en: "Number of retail customers", es: "Número de clientes minoristas", de: "Anzahl der Privatkunden", nl: "Aantal retailklanten" }
        ],
        correct: 0,
        explanation: {
          en: "Banks are classified as significant if they have assets exceeding €30 billion, assets representing more than 20% of national GDP, are among the three largest in their country, or receive direct public financial assistance. These criteria ensure systemic importance is captured.",
          es: "Los bancos se clasifican como significativos si tienen activos que exceden 30 mil millones de euros, activos que representan más del 20% del PIB nacional, están entre los tres más grandes de su país, o reciben asistencia financiera pública directa. Estos criterios aseguran que se capture la importancia sistémica.",
          de: "Banken werden als bedeutend klassifiziert, wenn sie Vermögenswerte von über 30 Milliarden Euro haben, Vermögenswerte von mehr als 20% des nationalen BIP besitzen, zu den drei größten in ihrem Land gehören oder direkte öffentliche Finanzhilfe erhalten. Diese Kriterien gewährleisten die Erfassung systemischer Bedeutung.",
          nl: "Banken worden geclassificeerd als significant als ze activa hebben die €30 miljard overschrijden, activa die meer dan 20% van nationaal BBP vertegenwoordigen, behoren tot de drie grootste in hun land, of directe publieke financiële steun ontvangen. Deze criteria zorgen ervoor dat systemisch belang wordt vastgelegd."
        }
      },
      {
        question: {
          en: "Which principle guides the ECB's approach to negative interest rate policy (NIRP)?",
          es: "¿Qué principio guía el enfoque del BCE hacia la política de tasas de interés negativas (NIRP)?",
          de: "Welches Prinzip leitet den EZB-Ansatz zur Negativzinspolitik (NIRP)?",
          nl: "Welk principe stuurt de ECB's benadering van negatieve rentebeleid (NIRP)?"
        },
        options: [
          { en: "Maximizing bank profitability", es: "Maximizar la rentabilidad bancaria", de: "Bankenprofitabilität maximieren", nl: "Bankwinstgevendheid maximaliseren" },
          { en: "Encouraging lending while preserving bank intermediation", es: "Fomentar préstamos mientras se preserva la intermediación bancaria", de: "Kreditvergabe fördern bei Erhaltung der Bankenvermittlung", nl: "Kredietverlening aanmoedigen terwijl bankintermediatie behouden blijft" },
          { en: "Eliminating cash from the economy", es: "Eliminar efectivo de la economía", de: "Bargeld aus der Wirtschaft eliminieren", nl: "Contant geld uit de economie elimineren" },
          { en: "Reducing government debt costs only", es: "Reducir solo los costos de deuda gubernamental", de: "Nur Staatsschuldenkosten reduzieren", nl: "Alleen overheidsschuldkosten verlagen" }
        ],
        correct: 1,
        explanation: {
          en: "The ECB's NIRP aims to stimulate lending and investment by making it costly for banks to hold excess reserves, while carefully monitoring potential adverse effects on bank profitability and financial stability through tiering systems.",
          es: "El NIRP del BCE tiene como objetivo estimular préstamos e inversión haciendo costoso para los bancos mantener reservas excesivas, mientras monitorea cuidadosamente efectos adversos potenciales en la rentabilidad bancaria y estabilidad financiera a través de sistemas de niveles.",
          de: "Die NIRP der EZB zielt darauf ab, Kreditvergabe und Investitionen zu stimulieren, indem es für Banken kostspielig wird, überschüssige Reserven zu halten, während potenzielle negative Auswirkungen auf Bankenprofitabilität und Finanzstabilität durch Staffelungssysteme sorgfältig überwacht werden.",
          nl: "De ECB's NIRP beoogt kredietverlening en investeringen te stimuleren door het kostbaar te maken voor banken om overtollige reserves aan te houden, terwijl potentiële negatieve effecten op bankwinstgevendheid en financiële stabiliteit zorgvuldig worden gemonitord via staffelingssystemen."
        }
      },
      {
        question: {
          en: "What was the innovative feature of the Asset-Backed Securities Purchase Programme (ABSPP) within the APP framework?",
          es: "¿Cuál fue la característica innovadora del Programa de Compra de Valores Respaldados por Activos (ABSPP) dentro del marco APP?",
          de: "Was war das innovative Merkmal des Asset-Backed Securities Kaufprogramms (ABSPP) innerhalb des APP-Rahmens?",
          nl: "Wat was het innovatieve kenmerk van het Asset-Backed Securities Purchase Programme (ABSPP) binnen het APP-kader?"
        },
        options: [
          { en: "It targeted credit markets beyond traditional government bonds", es: "Se dirigió a mercados crediticios más allá de bonos gubernamentales tradicionales", de: "Es zielte auf Kreditmärkte jenseits traditioneller Staatsanleihen", nl: "Het richtte zich op kredietmarkten voorbij traditionele overheidsobligaties" },
          { en: "It operated without any purchase limits", es: "Operó sin límites de compra", de: "Es operierte ohne Kauflimits", nl: "Het opereerde zonder aankoplimieten" },
          { en: "It only purchased sovereign securities", es: "Solo compró valores soberanos", de: "Es kaufte nur Staatsanleihen", nl: "Het kocht alleen soevereine effecten" },
          { en: "It was managed exclusively by the ECB", es: "Fue gestionado exclusivamente por el BCE", de: "Es wurde ausschließlich von der EZB verwaltet", nl: "Het werd exclusief beheerd door de ECB" }
        ],
        correct: 0,
        explanation: {
          en: "The ABSPP was innovative as it marked the ECB's entry into structured credit markets, purchasing asset-backed securities to support lending to the real economy, particularly SME financing, complementing sovereign bond purchases.",
          es: "El ABSPP fue innovador ya que marcó la entrada del BCE en mercados crediticios estructurados, comprando valores respaldados por activos para apoyar préstamos a la economía real, particularmente financiación PYME, complementando compras de bonos soberanos.",
          de: "Das ABSPP war innovativ, da es den Eintritt der EZB in strukturierte Kreditmärkte markierte, Asset-Backed Securities kaufte, um Kreditvergabe an die Realwirtschaft zu unterstützen, insbesondere KMU-Finanzierung, ergänzend zu Staatsanleihenankäufen.",
          nl: "Het ABSPP was innovatief omdat het de ECB's toetreding tot gestructureerde kredietmarkten markeerde, asset-backed securities kocht om kredietverlening aan de reële economie te ondersteunen, vooral MKB-financiering, ter aanvulling van soevereine obligatieaankopen."
        }
      },
      {
        question: {
          en: "What was the European Monetary System (EMS) and when was it established?",
          es: "¿Qué fue el Sistema Monetario Europeo (SME) y cuándo se estableció?",
          de: "Was war das Europäische Währungssystem (EWS) und wann wurde es eingerichtet?",
          nl: "Wat was het Europees Monetair Stelsel (EMS) en wanneer werd het opgericht?"
        },
        options: [
          { en: "Currency stability mechanism, 1979", es: "Mecanismo de estabilidad monetaria, 1979", de: "Währungsstabilitätsmechanismus, 1979", nl: "Valutastabiliteitsmechanisme, 1979" },
          { en: "Trade agreement system, 1975", es: "Sistema de acuerdo comercial, 1975", de: "Handelsabkommensystem, 1975", nl: "Handelsovereenkomstsysteem, 1975" },
          { en: "Banking union framework, 1985", es: "Marco de unión bancaria, 1985", de: "Bankenunion-Rahmen, 1985", nl: "Bankenunie kader, 1985" },
          { en: "Fiscal coordination pact, 1983", es: "Pacto de coordinación fiscal, 1983", de: "Fiskalkoordinationspakt, 1983", nl: "Fiscale coördinatiepact, 1983" }
        ],
        correct: 0,
        explanation: {
          en: "The European Monetary System was established in 1979 as a currency stability mechanism to reduce exchange rate volatility between European currencies. It featured the Exchange Rate Mechanism (ERM) and the European Currency Unit (ECU), serving as a precursor to the Euro.",
          es: "El Sistema Monetario Europeo se estableció en 1979 como mecanismo de estabilidad monetaria para reducir la volatilidad del tipo de cambio entre monedas europeas. Presentaba el Mecanismo de Tipo de Cambio (MTC) y la Unidad Monetaria Europea (ECU), sirviendo como precursor del Euro.",
          de: "Das Europäische Währungssystem wurde 1979 als Währungsstabilitätsmechanismus eingerichtet, um Wechselkursvolatilität zwischen europäischen Währungen zu reduzieren. Es umfasste den Wechselkursmechanismus (WKM) und die Europäische Währungseinheit (ECU) als Vorläufer des Euros.",
          nl: "Het Europees Monetair Stelsel werd opgericht in 1979 als valutastabiliteitsmechanisme om wisselkoersvolatiliteit tussen Europese valuta's te verminderen. Het bevatte het Wisselkoersmechanisme (WKM) en de Europese Valuta-eenheid (ECU), als voorloper van de Euro."
        }
      },
      {
        question: {
          en: "What was the role of the D-Mark in the European Monetary System?",
          es: "¿Cuál fue el papel del Marco alemán en el Sistema Monetario Europeo?",
          de: "Welche Rolle spielte die D-Mark im Europäischen Währungssystem?",
          nl: "Wat was de rol van de D-Mark in het Europees Monetair Stelsel?"
        },
        options: [
          { en: "De facto anchor currency with strongest influence", es: "Moneda ancla de facto con mayor influencia", de: "De facto Ankerwährung mit stärkstem Einfluss", nl: "De facto ankervaluta met sterkste invloed" },
          { en: "Equal partner with all other currencies", es: "Socio igual con todas las demás monedas", de: "Gleichberechtigter Partner mit allen anderen Währungen", nl: "Gelijke partner met alle andere valuta's" },
          { en: "Subordinate to the French Franc", es: "Subordinado al Franco francés", de: "Untergeordnet dem französischen Franc", nl: "Ondergeschikt aan de Franse Franc" },
          { en: "Only participated in trade mechanisms", es: "Solo participó en mecanismos comerciales", de: "Nahm nur an Handelsmechanismen teil", nl: "Participeerde alleen in handelsmechanismen" }
        ],
        correct: 0,
        explanation: {
          en: "The German D-Mark became the de facto anchor currency of the EMS due to Germany's strong economy and the Bundesbank's credible anti-inflation policy. Other European currencies effectively aligned their monetary policies with Germany's, making the D-Mark the dominant force in the system.",
          es: "El Marco alemán se convirtió en la moneda ancla de facto del SME debido a la fuerte economía de Alemania y la política anti-inflacionaria creíble del Bundesbank. Otras monedas europeas efectivamente alinearon sus políticas monetarias con las de Alemania, haciendo del Marco alemán la fuerza dominante en el sistema.",
          de: "Die D-Mark wurde zur de facto Ankerwährung des EWS aufgrund Deutschlands starker Wirtschaft und der glaubwürdigen Anti-Inflationspolitik der Bundesbank. Andere europäische Währungen richteten ihre Geldpolitiken effektiv an Deutschland aus, wodurch die D-Mark zur dominierenden Kraft im System wurde.",
          nl: "De D-Mark werd de de facto ankervaluta van het EMS vanwege Duitslands sterke economie en het geloofwaardige anti-inflatiebeleid van de Bundesbank. Andere Europese valuta's stemden hun monetair beleid effectief af op dat van Duitsland, waardoor de D-Mark de dominante kracht in het systeem werd."
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
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();