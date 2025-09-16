// Engineering - Level 6: Chemical Engineering
(function() {
  const level6 = {
    name: {
      en: "Chemical Engineering",
      es: "Ingeniería Química", 
      de: "Chemieingenieurwesen",
      nl: "Chemische Technologie"
    },
    questions: [
      {
        question: {
          en: "What is the primary purpose of distillation in chemical processes?",
          es: "¿Cuál es el propósito principal de la destilación en procesos químicos?",
          de: "Was ist der Hauptzweck der Destillation in chemischen Prozessen?",
          nl: "Wat is het primaire doel van destillatie in chemische processen?"
        },
        options: [
          { en: "Separation of components based on boiling points", es: "Separación de componentes basada en puntos de ebullición", de: "Trennung von Komponenten basierend auf Siedepunkten", nl: "Scheiding van componenten gebaseerd op kookpunten" },
          { en: "Heating of mixtures", es: "Calentamiento de mezclas", de: "Erwärmung von Mischungen", nl: "Verhitting van mengsels" },
          { en: "Cooling of products", es: "Enfriamiento de productos", de: "Kühlung von Produkten", nl: "Koeling van producten" },
          { en: "Mixing of chemicals", es: "Mezcla de químicos", de: "Mischung von Chemikalien", nl: "Mengen van chemicaliën" }
        ],
        correct: 0,
        explanation: {
          en: "Distillation is a separation process that separates components of a mixture based on differences in their boiling points, utilizing vapor-liquid equilibrium.",
          es: "La destilación es un proceso de separación que separa componentes de una mezcla basándose en diferencias en sus puntos de ebullición, utilizando equilibrio vapor-líquido.",
          de: "Destillation ist ein Trennverfahren, das Komponenten einer Mischung basierend auf Unterschieden in ihren Siedepunkten trennt, unter Nutzung des Dampf-Flüssigkeits-Gleichgewichts.",
          nl: "Destillatie is een scheidingsproces dat componenten van een mengsel scheidt op basis van verschillen in hun kookpunten, gebruikmakend van damp-vloeistof evenwicht."
        }
      },
      {
        question: {
          en: "What is the Arrhenius equation used for in chemical engineering?",
          es: "¿Para qué se usa la ecuación de Arrhenius en ingeniería química?",
          de: "Wofür wird die Arrhenius-Gleichung in der Chemieingenieurwesen verwendet?",
          nl: "Waarvoor wordt de Arrhenius-vergelijking gebruikt in chemische technologie?"
        },
        options: [
          { en: "Describing temperature dependence of reaction rates", es: "Describir la dependencia de temperatura de las velocidades de reacción", de: "Beschreibung der Temperaturabhängigkeit von Reaktionsgeschwindigkeiten", nl: "Beschrijving van temperatuurafhankelijkheid van reactiesnelheden" },
          { en: "Calculating pressure drops", es: "Calcular caídas de presión", de: "Berechnung von Druckabfällen", nl: "Berekening van drukverliezen" },
          { en: "Determining heat capacity", es: "Determinar capacidad calorífica", de: "Bestimmung der Wärmekapazität", nl: "Bepaling van warmtecapaciteit" },
          { en: "Measuring viscosity", es: "Medir viscosidad", de: "Messung der Viskosität", nl: "Meting van viscositeit" }
        ],
        correct: 0,
        explanation: {
          en: "The Arrhenius equation (k = A*e^(-Ea/RT)) describes how reaction rate constants depend exponentially on temperature, crucial for reactor design and kinetics.",
          es: "La ecuación de Arrhenius (k = A*e^(-Ea/RT)) describe cómo las constantes de velocidad de reacción dependen exponencialmente de la temperatura, crucial para el diseño de reactores y cinética.",
          de: "Die Arrhenius-Gleichung (k = A*e^(-Ea/RT)) beschreibt, wie Reaktionsgeschwindigkeitskonstanten exponentiell von der Temperatur abhängen, entscheidend für Reaktordesign und Kinetik.",
          nl: "De Arrhenius-vergelijking (k = A*e^(-Ea/RT)) beschrijft hoe reactiesnelheidsconstanten exponentieel afhangen van temperatuur, cruciaal voor reactorontwerp en kinetiek."
        }
      },
      {
        question: {
          en: "What is the purpose of a heat exchanger in chemical processes?",
          es: "¿Cuál es el propósito de un intercambiador de calor en procesos químicos?",
          de: "Was ist der Zweck eines Wärmetauschers in chemischen Prozessen?",
          nl: "Wat is het doel van een warmtewisselaar in chemische processen?"
        },
        options: [
          { en: "Transfer heat between fluids without mixing them", es: "Transferir calor entre fluidos sin mezclarlos", de: "Wärme zwischen Flüssigkeiten übertragen ohne sie zu mischen", nl: "Warmte overdragen tussen vloeistoffen zonder ze te mengen" },
          { en: "Mix different chemicals", es: "Mezclar diferentes químicos", de: "Verschiedene Chemikalien mischen", nl: "Verschillende chemicaliën mengen" },
          { en: "Store thermal energy", es: "Almacenar energía térmica", de: "Thermische Energie speichern", nl: "Thermische energie opslaan" },
          { en: "Generate electricity", es: "Generar electricidad", de: "Elektrizität erzeugen", nl: "Elektriciteit opwekken" }
        ],
        correct: 0,
        explanation: {
          en: "Heat exchangers transfer thermal energy between two or more fluids at different temperatures without allowing them to mix, essential for energy efficiency in chemical plants.",
          es: "Los intercambiadores de calor transfieren energía térmica entre dos o más fluidos a diferentes temperaturas sin permitir que se mezclen, esenciales para la eficiencia energética en plantas químicas.",
          de: "Wärmetauscher übertragen thermische Energie zwischen zwei oder mehr Flüssigkeiten unterschiedlicher Temperaturen, ohne dass sie sich mischen, wesentlich für die Energieeffizienz in chemischen Anlagen.",
          nl: "Warmtewisselaars dragen thermische energie over tussen twee of meer vloeistoffen bij verschillende temperaturen zonder dat ze zich mengen, essentieel voor energie-efficiëntie in chemische fabrieken."
        }
      },
      {
        question: {
          en: "What does Reynolds number indicate in fluid flow?",
          es: "¿Qué indica el número de Reynolds en el flujo de fluidos?",
          de: "Was zeigt die Reynolds-Zahl in der Strömung an?",
          nl: "Wat geeft het Reynolds-getal aan in vloeistofstroming?"
        },
        options: [
          { en: "Whether flow is laminar or turbulent", es: "Si el flujo es laminar o turbulento", de: "Ob die Strömung laminar oder turbulent ist", nl: "Of de stroming laminair of turbulent is" },
          { en: "The temperature of the fluid", es: "La temperatura del fluido", de: "Die Temperatur der Flüssigkeit", nl: "De temperatuur van de vloeistof" },
          { en: "The pressure drop", es: "La caída de presión", de: "Der Druckabfall", nl: "Het drukverlies" },
          { en: "The flow rate only", es: "Solo la velocidad de flujo", de: "Nur die Durchflussrate", nl: "Alleen de stroomsnelheid" }
        ],
        correct: 0,
        explanation: {
          en: "Reynolds number (Re = ρvD/μ) is a dimensionless number that characterizes flow regime: Re < 2300 indicates laminar flow, Re > 4000 indicates turbulent flow.",
          es: "El número de Reynolds (Re = ρvD/μ) es un número adimensional que caracteriza el régimen de flujo: Re < 2300 indica flujo laminar, Re > 4000 indica flujo turbulento.",
          de: "Die Reynolds-Zahl (Re = ρvD/μ) ist eine dimensionslose Zahl, die das Strömungsregime charakterisiert: Re < 2300 zeigt laminare Strömung, Re > 4000 zeigt turbulente Strömung.",
          nl: "Het Reynolds-getal (Re = ρvD/μ) is een dimensieloos getal dat het stromingsregime karakteriseert: Re < 2300 duidt op laminaire stroming, Re > 4000 duidt op turbulente stroming."
        }
      },
      {
        question: {
          en: "What is the main driving force for mass transfer?",
          es: "¿Cuál es la fuerza motriz principal para la transferencia de masa?",
          de: "Was ist die Haupttriebkraft für den Stofftransfer?",
          nl: "Wat is de hoofddrijvende kracht voor massaoverdracht?"
        },
        options: [
          { en: "Concentration gradient", es: "Gradiente de concentración", de: "Konzentrationsgradient", nl: "Concentratiegradient" },
          { en: "Temperature difference", es: "Diferencia de temperatura", de: "Temperaturunterschied", nl: "Temperatuurverschil" },
          { en: "Pressure difference", es: "Diferencia de presión", de: "Druckunterschied", nl: "Drukverschil" },
          { en: "Velocity difference", es: "Diferencia de velocidad", de: "Geschwindigkeitsunterschied", nl: "Snelheidsverschil" }
        ],
        correct: 0,
        explanation: {
          en: "Mass transfer is driven by concentration gradients, following Fick's law. Species move from areas of high concentration to areas of low concentration to achieve equilibrium.",
          es: "La transferencia de masa es impulsada por gradientes de concentración, siguiendo la ley de Fick. Las especies se mueven de áreas de alta concentración a áreas de baja concentración para lograr equilibrio.",
          de: "Stofftransfer wird durch Konzentrationsgradienten angetrieben, entsprechend dem Fickschen Gesetz. Spezies bewegen sich von Bereichen hoher zu niedriger Konzentration, um Gleichgewicht zu erreichen.",
          nl: "Massaoverdracht wordt gedreven door concentratiegradiënten, volgens de wet van Fick. Species bewegen van gebieden met hoge concentratie naar gebieden met lage concentratie om evenwicht te bereiken."
        }
      },
      {
        question: {
          en: "What is the space time (τ) in a CSTR with volume V and volumetric flow rate Q?",
          es: "¿Cuál es el tiempo espacial (τ) en un CSTR con volumen V y caudal volumétrico Q?",
          de: "Was ist die Raumzeit (τ) in einem CSTR mit Volumen V und Volumenstrom Q?",
          nl: "Wat is de verblijftijd (τ) in een CSTR met volume V en volumetrische flowrate Q?"
        },
        options: [
          { en: "τ = V/Q", es: "τ = V/Q", de: "τ = V/Q", nl: "τ = V/Q" },
          { en: "τ = Q/V", es: "τ = Q/V", de: "τ = Q/V", nl: "τ = Q/V" },
          { en: "τ = V*Q", es: "τ = V*Q", de: "τ = V*Q", nl: "τ = V*Q" },
          { en: "τ = Q - V", es: "τ = Q - V", de: "τ = Q - V", nl: "τ = Q - V" }
        ],
        correct: 0,
        explanation: {
          en: "Space time (τ) is the time required to process one reactor volume at the entrance conditions, calculated as τ = V/Q, where V is reactor volume and Q is volumetric flow rate.",
          es: "El tiempo espacial (τ) es el tiempo requerido para procesar un volumen de reactor en las condiciones de entrada, calculado como τ = V/Q, donde V es el volumen del reactor y Q es el caudal volumétrico.",
          de: "Die Raumzeit (τ) ist die Zeit, die benötigt wird, um ein Reaktorvolumen bei Eingangsbedingungen zu verarbeiten, berechnet als τ = V/Q, wobei V das Reaktorvolumen und Q der Volumenstrom ist.",
          nl: "Verblijftijd (τ) is de tijd nodig om één reactorvolume te verwerken bij ingangsvoorwaarden, berekend als τ = V/Q, waarbij V het reactorvolume en Q de volumetrische flowrate is."
        }
      },
      {
        question: {
          en: "In a plug flow reactor (PFR), what is the main assumption about mixing?",
          es: "En un reactor de flujo pistón (PFR), ¿cuál es la suposición principal sobre la mezcla?",
          de: "Was ist die Hauptannahme über das Mischen in einem Pfropfenströmungsreaktor (PFR)?",
          nl: "Wat is de hoofdveronderstelling over menging in een plug flow reactor (PFR)?"
        },
        options: [
          { en: "Perfect mixing in radial direction, no mixing in axial direction", es: "Mezcla perfecta en dirección radial, sin mezcla en dirección axial", de: "Perfekte Mischung in radialer Richtung, keine Mischung in axialer Richtung", nl: "Perfecte menging in radiale richting, geen menging in axiale richting" },
          { en: "Perfect mixing in all directions", es: "Mezcla perfecta en todas las direcciones", de: "Perfekte Mischung in alle Richtungen", nl: "Perfecte menging in alle richtingen" },
          { en: "No mixing in any direction", es: "Sin mezcla en ninguna dirección", de: "Keine Mischung in jede Richtung", nl: "Geen menging in enige richting" },
          { en: "Random mixing patterns", es: "Patrones de mezcla aleatorios", de: "Zufällige Mischungsmuster", nl: "Willekeurige mengingspatronen" }
        ],
        correct: 0,
        explanation: {
          en: "In a PFR, fluid elements flow in plugs with perfect radial mixing but no axial mixing or back-mixing, creating a concentration gradient along the reactor length.",
          es: "En un PFR, los elementos de fluido fluyen en tapones con mezcla radial perfecta pero sin mezcla axial o retromezcla, creando un gradiente de concentración a lo largo del reactor.",
          de: "In einem PFR fließen Fluidelemente in Pfropfen mit perfekter radialer Mischung aber ohne axiale Mischung oder Rückvermischung, wodurch ein Konzentrationsgradient entlang der Reaktorlänge entsteht.",
          nl: "In een PFR stromen fluïdumelementen in plugs met perfecte radiale menging maar geen axiale menging of terugmenging, waardoor een concentratiegradient langs de reactorlengte ontstaat."
        }
      },
      {
        question: {
          en: "What is the Damköhler number (Da) used to characterize in reactor design?",
          es: "¿Para qué se usa el número de Damköhler (Da) para caracterizar en el diseño de reactores?",
          de: "Was charakterisiert die Damköhler-Zahl (Da) im Reaktordesign?",
          nl: "Wat wordt het Damköhler-getal (Da) gebruikt om te karakteriseren in reactorontwerp?"
        },
        options: [
          { en: "Ratio of reaction rate to mass transfer rate", es: "Relación entre velocidad de reacción y velocidad de transferencia de masa", de: "Verhältnis von Reaktionsgeschwindigkeit zu Stoffübertragungsgeschwindigkeit", nl: "Verhouding van reactiesnelheid tot massaoverdrachtssnelheid" },
          { en: "Ratio of heat transfer to mass transfer", es: "Relación de transferencia de calor a transferencia de masa", de: "Verhältnis von Wärmeübertragung zu Stoffübertragung", nl: "Verhouding van warmteoverdracht tot massaoverdracht" },
          { en: "Temperature dependence only", es: "Solo dependencia de temperatura", de: "Nur Temperaturabhängigkeit", nl: "Alleen temperatuurafhankelijkheid" },
          { en: "Pressure effects only", es: "Solo efectos de presión", de: "Nur Druckeffekte", nl: "Alleen drukeffecten" }
        ],
        correct: 0,
        explanation: {
          en: "The Damköhler number (Da = kτ) represents the ratio of reaction rate to convective mass transfer rate, indicating whether reaction or mass transfer controls the overall process.",
          es: "El número de Damköhler (Da = kτ) representa la relación entre la velocidad de reacción y la velocidad de transferencia de masa convectiva, indicando si la reacción o la transferencia de masa controla el proceso global.",
          de: "Die Damköhler-Zahl (Da = kτ) repräsentiert das Verhältnis von Reaktionsgeschwindigkeit zu konvektiver Stoffübertragungsgeschwindigkeit und zeigt an, ob Reaktion oder Stoffübertragung den Gesamtprozess kontrolliert.",
          nl: "Het Damköhler-getal (Da = kτ) vertegenwoordigt de verhouding van reactiesnelheid tot convectieve massaoverdrachtssnelheid, wat aangeeft of reactie of massaoverdracht het totale proces beheerst."
        }
      },
      {
        question: {
          en: "What is the selectivity in a parallel reaction system A → B (desired) and A → C (undesired)?",
          es: "¿Cuál es la selectividad en un sistema de reacciones paralelas A → B (deseada) y A → C (no deseada)?",
          de: "Was ist die Selektivität in einem Parallelreaktionssystem A → B (gewünscht) und A → C (unerwünscht)?",
          nl: "Wat is de selectiviteit in een parallel reactiesysteem A → B (gewenst) en A → C (ongewenst)?"
        },
        options: [
          { en: "S = r_B/r_C = k_B/k_C", es: "S = r_B/r_C = k_B/k_C", de: "S = r_B/r_C = k_B/k_C", nl: "S = r_B/r_C = k_B/k_C" },
          { en: "S = r_C/r_B = k_C/k_B", es: "S = r_C/r_B = k_C/k_B", de: "S = r_C/r_B = k_C/k_B", nl: "S = r_C/r_B = k_C/k_B" },
          { en: "S = r_B * r_C", es: "S = r_B * r_C", de: "S = r_B * r_C", nl: "S = r_B * r_C" },
          { en: "S = r_B + r_C", es: "S = r_B + r_C", de: "S = r_B + r_C", nl: "S = r_B + r_C" }
        ],
        correct: 0,
        explanation: {
          en: "Selectivity is the ratio of the rate of desired reaction to undesired reaction: S = r_B/r_C = k_B/k_C for first-order parallel reactions, indicating preference for desired product formation.",
          es: "La selectividad es la relación entre la velocidad de reacción deseada y no deseada: S = r_B/r_C = k_B/k_C para reacciones paralelas de primer orden, indicando preferencia por la formación del producto deseado.",
          de: "Selektivität ist das Verhältnis der gewünschten Reaktionsgeschwindigkeit zur unerwünschten: S = r_B/r_C = k_B/k_C für Parallelreaktionen erster Ordnung, was die Präferenz für die gewünschte Produktbildung anzeigt.",
          nl: "Selectiviteit is de verhouding van de snelheid van gewenste reactie tot ongewenste reactie: S = r_B/r_C = k_B/k_C voor eerste-orde parallelle reacties, wat de voorkeur voor gewenste productvorming aangeeft."
        }
      },
      {
        question: {
          en: "What is the McCabe-Thiele method used for in distillation?",
          es: "¿Para qué se usa el método de McCabe-Thiele en destilación?",
          de: "Wofür wird die McCabe-Thiele-Methode in der Destillation verwendet?",
          nl: "Waarvoor wordt de McCabe-Thiele-methode gebruikt in destillatie?"
        },
        options: [
          { en: "Graphical determination of theoretical stages", es: "Determinación gráfica de etapas teóricas", de: "Grafische Bestimmung theoretischer Stufen", nl: "Grafische bepaling van theoretische trappen" },
          { en: "Calculation of heat duty only", es: "Solo cálculo de carga térmica", de: "Nur Berechnung der Wärmelast", nl: "Alleen berekening van warmtebelasting" },
          { en: "Pressure drop calculations", es: "Cálculos de caída de presión", de: "Druckabfall-Berechnungen", nl: "Drukverlies berekeningen" },
          { en: "Column diameter sizing", es: "Dimensionamiento del diámetro de columna", de: "Säulendurchmesser-Dimensionierung", nl: "Kolomdiameter bepaling" }
        ],
        correct: 0,
        explanation: {
          en: "The McCabe-Thiele method is a graphical technique for determining the number of theoretical stages needed in binary distillation, using equilibrium and operating lines.",
          es: "El método de McCabe-Thiele es una técnica gráfica para determinar el número de etapas teóricas necesarias en destilación binaria, usando líneas de equilibrio y operación.",
          de: "Die McCabe-Thiele-Methode ist eine grafische Technik zur Bestimmung der Anzahl theoretischer Stufen in binärer Destillation unter Verwendung von Gleichgewichts- und Betriebslinien.",
          nl: "De McCabe-Thiele-methode is een grafische techniek voor het bepalen van het aantal theoretische trappen nodig in binaire destillatie, met behulp van evenwichts- en bedrijfslijnen."
        }
      },
      {
        question: {
          en: "What is the minimum reflux ratio (R_min) in distillation?",
          es: "¿Cuál es la relación de reflujo mínima (R_min) en destilación?",
          de: "Was ist das minimale Rücklaufverhältnis (R_min) in der Destillation?",
          nl: "Wat is de minimale refluxratio (R_min) in destillatie?"
        },
        options: [
          { en: "Reflux ratio at which infinite stages are required", es: "Relación de reflujo a la cual se requieren etapas infinitas", de: "Rücklaufverhältnis bei dem unendliche Stufen erforderlich sind", nl: "Refluxratio waarbij oneindige trappen vereist zijn" },
          { en: "Zero reflux ratio", es: "Relación de reflujo cero", de: "Null Rücklaufverhältnis", nl: "Nul refluxratio" },
          { en: "Maximum possible reflux ratio", es: "Máxima relación de reflujo posible", de: "Maximal mögliches Rücklaufverhältnis", nl: "Maximaal mogelijke refluxratio" },
          { en: "Optimal economic reflux ratio", es: "Relación de reflujo económica óptima", de: "Optimales wirtschaftliches Rücklaufverhältnis", nl: "Optimale economische refluxratio" }
        ],
        correct: 0,
        explanation: {
          en: "Minimum reflux ratio is the theoretical limit where the operating and equilibrium lines touch, requiring infinite stages for separation. It provides the lower bound for practical design.",
          es: "La relación de reflujo mínima es el límite teórico donde las líneas de operación y equilibrio se tocan, requiriendo etapas infinitas para la separación. Proporciona el límite inferior para el diseño práctico.",
          de: "Das minimale Rücklaufverhältnis ist die theoretische Grenze, wo sich Betriebs- und Gleichgewichtslinien berühren und unendliche Stufen für die Trennung erfordern. Es stellt die untere Grenze für praktisches Design dar.",
          nl: "Minimale refluxratio is de theoretische limiet waar de bedrijfs- en evenwichtslijnen elkaar raken, waarbij oneindige trappen voor scheiding vereist zijn. Het vormt de ondergrens voor praktisch ontwerp."
        }
      },
      {
        question: {
          en: "What is the driving force for liquid-liquid extraction?",
          es: "¿Cuál es la fuerza motriz para la extracción líquido-líquido?",
          de: "Was ist die Triebkraft für die Flüssig-Flüssig-Extraktion?",
          nl: "Wat is de drijvende kracht voor vloeistof-vloeistof extractie?"
        },
        options: [
          { en: "Concentration difference between phases", es: "Diferencia de concentración entre fases", de: "Konzentrationsunterschied zwischen den Phasen", nl: "Concentratieverschil tussen fasen" },
          { en: "Temperature difference only", es: "Solo diferencia de temperatura", de: "Nur Temperaturunterschied", nl: "Alleen temperatuurverschil" },
          { en: "Pressure difference only", es: "Solo diferencia de presión", de: "Nur Druckunterschied", nl: "Alleen drukverschil" },
          { en: "Density difference only", es: "Solo diferencia de densidad", de: "Nur Dichteunterschied", nl: "Alleen dichtheidsverschil" }
        ],
        correct: 0,
        explanation: {
          en: "Liquid-liquid extraction is driven by concentration differences of the solute between the two immiscible liquid phases, based on the distribution coefficient.",
          es: "La extracción líquido-líquido es impulsada por diferencias de concentración del soluto entre las dos fases líquidas inmiscibles, basada en el coeficiente de distribución.",
          de: "Flüssig-Flüssig-Extraktion wird durch Konzentrationsunterschiede des gelösten Stoffes zwischen den zwei nicht mischbaren Flüssigphasen angetrieben, basierend auf dem Verteilungskoeffizienten.",
          nl: "Vloeistof-vloeistof extractie wordt gedreven door concentratieverschillen van de opgeloste stof tussen de twee niet-mengbare vloeistoffasen, gebaseerd op de verdelingscoëfficiënt."
        }
      },
      {
        question: {
          en: "What is crystallization primarily used for in chemical processes?",
          es: "¿Para qué se usa principalmente la cristalización en procesos químicos?",
          de: "Wofür wird Kristallisation hauptsächlich in chemischen Prozessen verwendet?",
          nl: "Waarvoor wordt kristallisatie voornamelijk gebruikt in chemische processen?"
        },
        options: [
          { en: "Purification and separation of solids from solution", es: "Purificación y separación de sólidos de solución", de: "Reinigung und Trennung von Feststoffen aus Lösung", nl: "Zuivering en scheiding van vaste stoffen uit oplossing" },
          { en: "Mixing of components", es: "Mezcla de componentes", de: "Mischung von Komponenten", nl: "Menging van componenten" },
          { en: "Gas absorption only", es: "Solo absorción de gases", de: "Nur Gasabsorption", nl: "Alleen gasabsorptie" },
          { en: "Heat generation", es: "Generación de calor", de: "Wärmeerzeugung", nl: "Warmteopwekking" }
        ],
        correct: 0,
        explanation: {
          en: "Crystallization is a separation and purification process where dissolved solutes form crystals by controlled precipitation, used to obtain pure solids from solutions.",
          es: "La cristalización es un proceso de separación y purificación donde los solutos disueltos forman cristales por precipitación controlada, usado para obtener sólidos puros de soluciones.",
          de: "Kristallisation ist ein Trennungs- und Reinigungsprozess, bei dem gelöste Stoffe durch kontrollierte Ausfällung Kristalle bilden, verwendet zur Gewinnung reiner Feststoffe aus Lösungen.",
          nl: "Kristallisatie is een scheidings- en zuiveringsproces waarbij opgeloste stoffen kristallen vormen door gecontroleerde neerslag, gebruikt om zuivere vaste stoffen uit oplossingen te verkrijgen."
        }
      },
      {
        question: {
          en: "What is the purpose of a PID controller in process control?",
          es: "¿Cuál es el propósito de un controlador PID en control de procesos?",
          de: "Was ist der Zweck eines PID-Reglers in der Prozesskontrolle?",
          nl: "Wat is het doel van een PID-controller in procesbeheersing?"
        },
        options: [
          { en: "Minimize error between setpoint and process variable", es: "Minimizar error entre punto de ajuste y variable de proceso", de: "Fehler zwischen Sollwert und Prozessvariable minimieren", nl: "Fout tussen setpoint en procesvariabele minimaliseren" },
          { en: "Increase process temperature only", es: "Solo aumentar temperatura del proceso", de: "Nur Prozesstemperatur erhöhen", nl: "Alleen procestemperatuur verhogen" },
          { en: "Monitor pressure changes", es: "Monitorear cambios de presión", de: "Druckänderungen überwachen", nl: "Drukveranderingen monitoren" },
          { en: "Control flow direction", es: "Controlar dirección de flujo", de: "Strömungsrichtung kontrollieren", nl: "Stromingsrichting controleren" }
        ],
        correct: 0,
        explanation: {
          en: "A PID controller (Proportional-Integral-Derivative) continuously adjusts the control output to minimize the error between desired setpoint and actual process variable value.",
          es: "Un controlador PID (Proporcional-Integral-Derivativo) ajusta continuamente la salida de control para minimizar el error entre el punto de ajuste deseado y el valor real de la variable de proceso.",
          de: "Ein PID-Regler (Proportional-Integral-Derivativ) passt kontinuierlich die Regelausgabe an, um den Fehler zwischen gewünschtem Sollwert und tatsächlichem Prozessvariablenwert zu minimieren.",
          nl: "Een PID-controller (Proportioneel-Integraal-Differentiaal) past continu de regeluitgang aan om de fout tussen gewenste setpoint en werkelijke procesvariabele waarde te minimaliseren."
        }
      },
      {
        question: {
          en: "What does the integral term in a PID controller primarily address?",
          es: "¿Qué aborda principalmente el término integral en un controlador PID?",
          de: "Was adressiert hauptsächlich der Integralterm in einem PID-Regler?",
          nl: "Wat wordt voornamelijk aangepakt door de integraalterm in een PID-controller?"
        },
        options: [
          { en: "Steady-state offset elimination", es: "Eliminación de offset de estado estacionario", de: "Beseitigung des stationären Offsets", nl: "Eliminatie van steady-state offset" },
          { en: "Fast response to changes", es: "Respuesta rápida a cambios", de: "Schnelle Reaktion auf Änderungen", nl: "Snelle reactie op veranderingen" },
          { en: "Noise reduction only", es: "Solo reducción de ruido", de: "Nur Rauschreduzierung", nl: "Alleen ruisonderdrukking" },
          { en: "System stability only", es: "Solo estabilidad del sistema", de: "Nur Systemstabilität", nl: "Alleen systeemstabiliteit" }
        ],
        correct: 0,
        explanation: {
          en: "The integral term accumulates error over time and eliminates steady-state offset by continuously adjusting the control output until the error becomes zero.",
          es: "El término integral acumula el error a lo largo del tiempo y elimina el offset de estado estacionario ajustando continuamente la salida de control hasta que el error sea cero.",
          de: "Der Integralterm akkumuliert Fehler über die Zeit und eliminiert stationären Offset durch kontinuierliche Anpassung der Regelausgabe, bis der Fehler null wird.",
          nl: "De integraalterm accumuleert fouten over tijd en elimineert steady-state offset door continu de regeluitgang aan te passen totdat de fout nul wordt."
        }
      },
      {
        question: {
          en: "What is a cascade control system used for?",
          es: "¿Para qué se usa un sistema de control en cascada?",
          de: "Wofür wird ein Kaskadenkontrollsystem verwendet?",
          nl: "Waarvoor wordt een cascade controlesysteem gebruikt?"
        },
        options: [
          { en: "Controlling multiple variables with primary and secondary controllers", es: "Controlar múltiples variables con controladores primarios y secundarios", de: "Kontrolle mehrerer Variablen mit primären und sekundären Reglern", nl: "Controle van meerdere variabelen met primaire en secundaire controllers" },
          { en: "Single variable control only", es: "Solo control de variable única", de: "Nur Einzelvariablenkontrolle", nl: "Alleen enkele variabele controle" },
          { en: "Emergency shutdown systems", es: "Sistemas de parada de emergencia", de: "Notabschaltsysteme", nl: "Noodstop systemen" },
          { en: "Data logging only", es: "Solo registro de datos", de: "Nur Datenprotokollierung", nl: "Alleen datalogging" }
        ],
        correct: 0,
        explanation: {
          en: "Cascade control uses a primary controller that sets the setpoint for a secondary controller, providing better disturbance rejection and faster response for complex processes.",
          es: "El control en cascada usa un controlador primario que establece el punto de ajuste para un controlador secundario, proporcionando mejor rechazo de perturbaciones y respuesta más rápida para procesos complejos.",
          de: "Kaskadenregelung verwendet einen primären Regler, der den Sollwert für einen sekundären Regler setzt und bessere Störungsunterdrückung und schnellere Reaktion für komplexe Prozesse bietet.",
          nl: "Cascade controle gebruikt een primaire controller die het setpoint voor een secundaire controller instelt, wat betere verstoringsonderdrukking en snellere respons voor complexe processen biedt."
        }
      },
      {
        question: {
          en: "What is the Gibbs phase rule equation?",
          es: "¿Cuál es la ecuación de la regla de fases de Gibbs?",
          de: "Was ist die Gibbs-Phasenregel-Gleichung?",
          nl: "Wat is de Gibbs faser regel vergelijking?"
        },
        options: [
          { en: "F = C - P + 2", es: "F = C - P + 2", de: "F = C - P + 2", nl: "F = C - P + 2" },
          { en: "F = C + P - 2", es: "F = C + P - 2", de: "F = C + P - 2", nl: "F = C + P - 2" },
          { en: "F = C * P + 2", es: "F = C * P + 2", de: "F = C * P + 2", nl: "F = C * P + 2" },
          { en: "F = C / P + 2", es: "F = C / P + 2", de: "F = C / P + 2", nl: "F = C / P + 2" }
        ],
        correct: 0,
        explanation: {
          en: "The Gibbs phase rule F = C - P + 2 determines the degrees of freedom (F) in a system with C components and P phases, where 2 accounts for temperature and pressure.",
          es: "La regla de fases de Gibbs F = C - P + 2 determina los grados de libertad (F) en un sistema con C componentes y P fases, donde 2 considera temperatura y presión.",
          de: "Die Gibbs-Phasenregel F = C - P + 2 bestimmt die Freiheitsgrade (F) in einem System mit C Komponenten und P Phasen, wobei 2 für Temperatur und Druck steht.",
          nl: "De Gibbs faseregel F = C - P + 2 bepaalt de vrijheidsgraden (F) in een systeem met C componenten en P fasen, waarbij 2 staat voor temperatuur en druk."
        }
      },
      {
        question: {
          en: "What does the fugacity coefficient (φ) represent in thermodynamics?",
          es: "¿Qué representa el coeficiente de fugacidad (φ) en termodinámica?",
          de: "Was repräsentiert der Fugazitätskoeffizient (φ) in der Thermodynamik?",
          nl: "Wat vertegenwoordigt de fugaciteitscoëfficiënt (φ) in de thermodynamica?"
        },
        options: [
          { en: "Deviation of real gas from ideal gas behavior", es: "Desviación del gas real del comportamiento de gas ideal", de: "Abweichung des realen Gases vom idealen Gasverhalten", nl: "Afwijking van echt gas van ideaal gasgedrag" },
          { en: "Temperature dependence only", es: "Solo dependencia de temperatura", de: "Nur Temperaturabhängigkeit", nl: "Alleen temperatuurafhankelijkheid" },
          { en: "Pressure measurement", es: "Medición de presión", de: "Druckmessung", nl: "Drukmeting" },
          { en: "Volume calculation", es: "Cálculo de volumen", de: "Volumenberechnung", nl: "Volumeberekening" }
        ],
        correct: 0,
        explanation: {
          en: "Fugacity coefficient φ = f/P measures how much a real gas deviates from ideal gas behavior, where f is fugacity and P is pressure. φ = 1 for ideal gas.",
          es: "El coeficiente de fugacidad φ = f/P mide cuánto se desvía un gas real del comportamiento de gas ideal, donde f es fugacidad y P es presión. φ = 1 para gas ideal.",
          de: "Der Fugazitätskoeffizient φ = f/P misst, wie stark ein reales Gas vom idealen Gasverhalten abweicht, wobei f die Fugazität und P der Druck ist. φ = 1 für ideales Gas.",
          nl: "Fugaciteitscoëfficiënt φ = f/P meet hoeveel een echt gas afwijkt van ideaal gasgedrag, waarbij f fugaciteit en P druk is. φ = 1 voor ideaal gas."
        }
      },
      {
        question: {
          en: "What is the Antoine equation used for?",
          es: "¿Para qué se usa la ecuación de Antoine?",
          de: "Wofür wird die Antoine-Gleichung verwendet?",
          nl: "Waarvoor wordt de Antoine-vergelijking gebruikt?"
        },
        options: [
          { en: "Calculating vapor pressure as function of temperature", es: "Calcular presión de vapor como función de temperatura", de: "Berechnung des Dampfdrucks als Funktion der Temperatur", nl: "Berekening van dampdruk als functie van temperatuur" },
          { en: "Determining reaction rates", es: "Determinar velocidades de reacción", de: "Bestimmung von Reaktionsgeschwindigkeiten", nl: "Bepaling van reactiesnelheden" },
          { en: "Calculating heat capacity", es: "Calcular capacidad calorífica", de: "Berechnung der Wärmekapazität", nl: "Berekening van warmtecapaciteit" },
          { en: "Measuring viscosity", es: "Medir viscosidad", de: "Messung der Viskosität", nl: "Meting van viscositeit" }
        ],
        correct: 0,
        explanation: {
          en: "The Antoine equation log₁₀(P*) = A - B/(C + T) correlates vapor pressure (P*) with temperature (T) for pure components, essential for vapor-liquid equilibrium calculations.",
          es: "La ecuación de Antoine log₁₀(P*) = A - B/(C + T) correlaciona la presión de vapor (P*) con la temperatura (T) para componentes puros, esencial para cálculos de equilibrio vapor-líquido.",
          de: "Die Antoine-Gleichung log₁₀(P*) = A - B/(C + T) korreliert Dampfdruck (P*) mit Temperatur (T) für reine Komponenten, wesentlich für Dampf-Flüssigkeits-Gleichgewichtsberechnungen.",
          nl: "De Antoine-vergelijking log₁₀(P*) = A - B/(C + T) correleert dampdruk (P*) met temperatuur (T) voor zuivere componenten, essentieel voor damp-vloeistof evenwichtsberekeningen."
        }
      },
      {
        question: {
          en: "What is the pump efficiency (η) defined as?",
          es: "¿Cómo se define la eficiencia de la bomba (η)?",
          de: "Wie ist der Pumpenwirkungsgrad (η) definiert?",
          nl: "Hoe wordt het pomprendement (η) gedefinieerd?"
        },
        options: [
          { en: "η = (Hydraulic power output)/(Shaft power input)", es: "η = (Potencia hidráulica de salida)/(Potencia del eje de entrada)", de: "η = (Hydraulische Ausgangsleistung)/(Welleneingangsleistung)", nl: "η = (Hydraulisch uitgangsvermogen)/(As ingangsvermogen)" },
          { en: "η = (Flow rate)/(Pressure)", es: "η = (Caudal)/(Presión)", de: "η = (Durchflussrate)/(Druck)", nl: "η = (Stroomsnelheid)/(Druk)" },
          { en: "η = (Temperature rise)/(Power)", es: "η = (Aumento de temperatura)/(Potencia)", de: "η = (Temperaturanstieg)/(Leistung)", nl: "η = (Temperatuurstijging)/(Vermogen)" },
          { en: "η = (Pressure)/(Flow rate)", es: "η = (Presión)/(Caudal)", de: "η = (Druck)/(Durchflussrate)", nl: "η = (Druk)/(Stroomsnelheid)" }
        ],
        correct: 0,
        explanation: {
          en: "Pump efficiency is the ratio of useful hydraulic power output (ρgQH) to the shaft power input, indicating how effectively the pump converts mechanical energy to fluid energy.",
          es: "La eficiencia de la bomba es la relación entre la potencia hidráulica útil de salida (ρgQH) y la potencia del eje de entrada, indicando cuán efectivamente la bomba convierte energía mecánica en energía del fluido.",
          de: "Pumpenwirkungsgrad ist das Verhältnis der nutzbaren hydraulischen Ausgangsleistung (ρgQH) zur Welleneingangsleistung und zeigt an, wie effektiv die Pumpe mechanische Energie in Fluidenergie umwandelt.",
          nl: "Pomprendement is de verhouding van nuttig hydraulisch uitgangsvermogen (ρgQH) tot as ingangsvermogen, wat aangeeft hoe effectief de pomp mechanische energie omzet in vloeistofenergie."
        }
      },
      {
        question: {
          en: "What is the Net Positive Suction Head (NPSH) in pump operations?",
          es: "¿Qué es la Altura Neta Positiva de Aspiración (NPSH) en operaciones de bombas?",
          de: "Was ist die Netto-Positive-Saughöhe (NPSH) im Pumpenbetrieb?",
          nl: "Wat is de Netto Positieve Zuighoogte (NPSH) in pompoperaties?"
        },
        options: [
          { en: "Measure of how close fluid is to cavitation conditions", es: "Medida de qué tan cerca está el fluido de condiciones de cavitación", de: "Maß dafür, wie nahe die Flüssigkeit den Kavitationsbedingungen ist", nl: "Maat voor hoe dicht vloeistof bij cavitatie-omstandigheden is" },
          { en: "Maximum pump speed", es: "Velocidad máxima de la bomba", de: "Maximale Pumpengeschwindigkeit", nl: "Maximale pompsnelheid" },
          { en: "Pump discharge pressure", es: "Presión de descarga de la bomba", de: "Pumpenauslassdruck", nl: "Pomp persdruk" },
          { en: "Pump motor power", es: "Potencia del motor de la bomba", de: "Pumpenmotorleistung", nl: "Pomp motorvermogen" }
        ],
        correct: 0,
        explanation: {
          en: "NPSH represents the pressure head available at the pump suction above the vapor pressure of the liquid, critical for preventing cavitation and ensuring proper pump operation.",
          es: "NPSH representa la altura de presión disponible en la succión de la bomba por encima de la presión de vapor del líquido, crítico para prevenir cavitación y asegurar operación adecuada de la bomba.",
          de: "NPSH repräsentiert die Druckhöhe, die am Pumpensaugstutzen über dem Dampfdruck der Flüssigkeit verfügbar ist, kritisch zur Kavitationsverhinderung und ordnungsgemäßen Pumpenfunktion.",
          nl: "NPSH vertegenwoordigt de drukhoogte beschikbaar bij de pompzuiging boven de dampdruk van de vloeistof, cruciaal voor het voorkomen van cavitatie en goede pompwerking."
        }
      },
      {
        question: {
          en: "What is the compression ratio in a compressor?",
          es: "¿Cuál es la relación de compresión en un compresor?",
          de: "Was ist das Verdichtungsverhältnis in einem Kompressor?",
          nl: "Wat is de compressieverhouding in een compressor?"
        },
        options: [
          { en: "Ratio of discharge pressure to suction pressure", es: "Relación de presión de descarga a presión de succión", de: "Verhältnis von Austrittsdruck zu Ansaugdruck", nl: "Verhouding van persdruk tot zuigdruk" },
          { en: "Ratio of temperatures only", es: "Solo relación de temperaturas", de: "Nur Temperaturverhältnis", nl: "Alleen temperatuurverhouding" },
          { en: "Ratio of flow rates", es: "Relación de caudales", de: "Verhältnis der Durchflussraten", nl: "Verhouding van stroomsnelheden" },
          { en: "Power consumption ratio", es: "Relación de consumo de potencia", de: "Leistungsverbrauchsverhältnis", nl: "Vermogensverbruikverhouding" }
        ],
        correct: 0,
        explanation: {
          en: "Compression ratio (r = P₂/P₁) is the ratio of absolute discharge pressure to absolute suction pressure, fundamental parameter for compressor design and performance evaluation.",
          es: "La relación de compresión (r = P₂/P₁) es la relación de presión absoluta de descarga a presión absoluta de succión, parámetro fundamental para diseño y evaluación de rendimiento del compresor.",
          de: "Das Verdichtungsverhältnis (r = P₂/P₁) ist das Verhältnis von absolutem Austrittsdruck zu absolutem Ansaugdruck, grundlegender Parameter für Kompressordesign und Leistungsbewertung.",
          nl: "Compressieverhouding (r = P₂/P₁) is de verhouding van absolute persdruk tot absolute zuigdruk, fundamentele parameter voor compressorontwerp en prestatie-evaluatie."
        }
      },
      {
        question: {
          en: "What is the purpose of intercooling in multi-stage compression?",
          es: "¿Cuál es el propósito del enfriamiento intermedio en compresión de múltiples etapas?",
          de: "Was ist der Zweck der Zwischenkühlung bei mehrstufiger Verdichtung?",
          nl: "Wat is het doel van tussenkoeling bij meertraps compressie?"
        },
        options: [
          { en: "Reduce power consumption and temperature rise", es: "Reducir consumo de potencia y aumento de temperatura", de: "Leistungsverbrauch und Temperaturanstieg reduzieren", nl: "Vermogensverbruik en temperatuurstijging verminderen" },
          { en: "Increase compression ratio only", es: "Solo aumentar relación de compresión", de: "Nur Verdichtungsverhältnis erhöhen", nl: "Alleen compressieverhouding verhogen" },
          { en: "Improve gas purity", es: "Mejorar pureza del gas", de: "Gasreinheit verbessern", nl: "Gaszuiverheid verbeteren" },
          { en: "Reduce maintenance needs", es: "Reducir necesidades de mantenimiento", de: "Wartungsbedarf reduzieren", nl: "Onderhoudsbehoeften verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Intercooling between compression stages removes heat generated during compression, reducing power requirements and preventing excessive temperature rise that could damage equipment or affect gas properties.",
          es: "El enfriamiento intermedio entre etapas de compresión remueve el calor generado durante la compresión, reduciendo requerimientos de potencia y previniendo aumento excesivo de temperatura que podría dañar el equipo o afectar propiedades del gas.",
          de: "Zwischenkühlung zwischen Verdichtungsstufen entfernt bei der Verdichtung entstehende Wärme, reduziert Leistungsanforderungen und verhindert übermäßigen Temperaturanstieg, der Geräte beschädigen oder Gaseigenschaften beeinträchtigen könnte.",
          nl: "Tussenkoeling tussen compressiestadia verwijdert warmte gegenereerd tijdens compressie, vermindert vermogensvereisten en voorkomt excessieve temperatuurstijging die apparatuur zou kunnen beschadigen of gaseigenschappen beïnvloeden."
        }
      },
      {
        question: {
          en: "What is the moisture content in a tray dryer typically expressed as?",
          es: "¿Cómo se expresa típicamente el contenido de humedad en un secador de bandejas?",
          de: "Wie wird der Feuchtigkeitsgehalt in einem Hordenttrockner typischerweise ausgedrückt?",
          nl: "Hoe wordt het vochtgehalte in een plateaudrager typisch uitgedrukt?"
        },
        options: [
          { en: "kg water/kg dry solid", es: "kg agua/kg sólido seco", de: "kg Wasser/kg trockener Feststoff", nl: "kg water/kg droge vaste stof" },
          { en: "kg water/kg wet solid", es: "kg agua/kg sólido húmedo", de: "kg Wasser/kg feuchter Feststoff", nl: "kg water/kg natte vaste stof" },
          { en: "Percentage only", es: "Solo porcentaje", de: "Nur Prozentsatz", nl: "Alleen percentage" },
          { en: "Volume fraction", es: "Fracción de volumen", de: "Volumenanteil", nl: "Volumefractie" }
        ],
        correct: 0,
        explanation: {
          en: "Moisture content on dry basis (X = kg water/kg dry solid) is preferred in drying calculations because the amount of dry solid remains constant during the drying process.",
          es: "El contenido de humedad en base seca (X = kg agua/kg sólido seco) se prefiere en cálculos de secado porque la cantidad de sólido seco permanece constante durante el proceso de secado.",
          de: "Feuchtigkeitsgehalt auf trockener Basis (X = kg Wasser/kg trockener Feststoff) wird in Trocknungsberechnungen bevorzugt, da die Menge des trockenen Feststoffs während des Trocknungsprozesses konstant bleibt.",
          nl: "Vochtgehalte op droge basis (X = kg water/kg droge vaste stof) wordt geprefereerd in droogberekeningen omdat de hoeveelheid droge vaste stof constant blijft tijdens het droogproces."
        }
      },
      {
        question: {
          en: "What is the critical moisture content in drying operations?",
          es: "¿Cuál es el contenido crítico de humedad en operaciones de secado?",
          de: "Was ist der kritische Feuchtigkeitsgehalt in Trocknungsoperationen?",
          nl: "Wat is het kritieke vochtgehalte in droogoperaties?"
        },
        options: [
          { en: "Moisture content where constant-rate period ends", es: "Contenido de humedad donde termina el período de velocidad constante", de: "Feuchtigkeitsgehalt, wo die konstante Trocknungsperiode endet", nl: "Vochtgehalte waar de constante-snelheidsperiode eindigt" },
          { en: "Initial moisture content", es: "Contenido inicial de humedad", de: "Anfänglicher Feuchtigkeitsgehalt", nl: "Initieel vochtgehalte" },
          { en: "Final moisture content", es: "Contenido final de humedad", de: "Endfeuchtigkeitsgehalt", nl: "Eindvochtgehalte" },
          { en: "Maximum possible moisture", es: "Máxima humedad posible", de: "Maximal mögliche Feuchtigkeit", nl: "Maximaal mogelijke vocht" }
        ],
        correct: 0,
        explanation: {
          en: "Critical moisture content is the point where the constant-rate drying period ends and the falling-rate period begins, representing the transition from surface evaporation to internal moisture diffusion.",
          es: "El contenido crítico de humedad es el punto donde termina el período de secado de velocidad constante y comienza el período de velocidad decreciente, representando la transición de evaporación superficial a difusión interna de humedad.",
          de: "Der kritische Feuchtigkeitsgehalt ist der Punkt, wo die konstante Trocknungsperiode endet und die fallende Trocknungsperiode beginnt, was den Übergang von Oberflächenverdampfung zu interner Feuchtigkeitsdiffusion darstellt.",
          nl: "Kritiek vochtgehalte is het punt waar de constante-snelheidsdroogperiode eindigt en de dalende-snelheidsperiode begint, wat de overgang van oppervlakteverdamping naar interne vochtdiffusie vertegenwoordigt."
        }
      },
      {
        question: {
          en: "What is a HAZOP (Hazard and Operability) study used for?",
          es: "¿Para qué se usa un estudio HAZOP (Peligro y Operabilidad)?",
          de: "Wofür wird eine HAZOP (Hazard and Operability) Studie verwendet?",
          nl: "Waarvoor wordt een HAZOP (Hazard and Operability) studie gebruikt?"
        },
        options: [
          { en: "Systematic identification of process hazards and operability problems", es: "Identificación sistemática de peligros del proceso y problemas de operabilidad", de: "Systematische Identifikation von Prozessgefahren und Betriebsproblemen", nl: "Systematische identificatie van procesgevaren en operabiliteitsproblemen" },
          { en: "Equipment cost estimation only", es: "Solo estimación de costos de equipo", de: "Nur Gerätekostenschätzung", nl: "Alleen apparatuurkostenschatting" },
          { en: "Process optimization only", es: "Solo optimización de procesos", de: "Nur Prozessoptimierung", nl: "Alleen procesoptimalisatie" },
          { en: "Personnel training", es: "Entrenamiento de personal", de: "Personalschulung", nl: "Personeelstraining" }
        ],
        correct: 0,
        explanation: {
          en: "HAZOP is a systematic technique for identifying potential hazards and operability problems in process design by examining deviations from design intent using guide words.",
          es: "HAZOP es una técnica sistemática para identificar peligros potenciales y problemas de operabilidad en diseño de procesos examinando desviaciones de la intención de diseño usando palabras guía.",
          de: "HAZOP ist eine systematische Technik zur Identifikation potenzieller Gefahren und Betriebsprobleme im Prozessdesign durch Untersuchung von Abweichungen von der Designabsicht mit Leitwörtern.",
          nl: "HAZOP is een systematische techniek voor het identificeren van potentiële gevaren en operabiliteitsproblemen in procesontwerp door het onderzoeken van afwijkingen van ontwerpintentie met behulp van sleutelwoorden."
        }
      },
      {
        question: {
          en: "What is the purpose of a Safety Instrumented System (SIS)?",
          es: "¿Cuál es el propósito de un Sistema Instrumentado de Seguridad (SIS)?",
          de: "Was ist der Zweck eines Sicherheitsinstrumentierten Systems (SIS)?",
          nl: "Wat is het doel van een Veiligheids Geïnstrumenteerd Systeem (SIS)?"
        },
        options: [
          { en: "Automatically take action to maintain safe process state", es: "Tomar automáticamente acción para mantener estado seguro del proceso", de: "Automatisch Maßnahmen ergreifen, um sicheren Prozesszustand zu erhalten", nl: "Automatisch actie ondernemen om veilige procestoestand te handhaven" },
          { en: "Monitor process conditions only", es: "Solo monitorear condiciones del proceso", de: "Nur Prozessbedingungen überwachen", nl: "Alleen procesomstandigheden monitoren" },
          { en: "Control product quality", es: "Controlar calidad del producto", de: "Produktqualität kontrollieren", nl: "Productkwaliteit controleren" },
          { en: "Optimize energy consumption", es: "Optimizar consumo de energía", de: "Energieverbrauch optimieren", nl: "Energieverbruik optimaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "SIS is an independent system that monitors process conditions and automatically takes predetermined actions (like shutdown or depressurization) to prevent or mitigate hazardous events.",
          es: "SIS es un sistema independiente que monitorea condiciones del proceso y automáticamente toma acciones predeterminadas (como parada o despresurización) para prevenir o mitigar eventos peligrosos.",
          de: "SIS ist ein unabhängiges System, das Prozessbedingungen überwacht und automatisch vorbestimmte Maßnahmen (wie Abschaltung oder Druckentlastung) ergreift, um gefährliche Ereignisse zu verhindern oder zu mildern.",
          nl: "SIS is een onafhankelijk systeem dat procesomstandigheden monitort en automatisch vooraf bepaalde acties onderneemt (zoals shutdown of ontdrukking) om gevaarlijke gebeurtenissen te voorkomen of te beperken."
        }
      },
      {
        question: {
          en: "What does Risk = Frequency × Consequence represent in process safety?",
          es: "¿Qué representa Riesgo = Frecuencia × Consecuencia en seguridad de procesos?",
          de: "Was repräsentiert Risiko = Häufigkeit × Konsequenz in der Prozesssicherheit?",
          nl: "Wat vertegenwoordigt Risico = Frequentie × Gevolg in procesveiligheid?"
        },
        options: [
          { en: "Quantitative measure of hazard potential", es: "Medida cuantitativa del potencial de peligro", de: "Quantitatives Maß für Gefahrenpotential", nl: "Kwantitatieve maat voor gevarenpotentiaal" },
          { en: "Equipment reliability only", es: "Solo confiabilidad del equipo", de: "Nur Gerätezuverlässigkeit", nl: "Alleen apparatuurbetrouwbaarheid" },
          { en: "Process efficiency measure", es: "Medida de eficiencia del proceso", de: "Prozesseffizienzmaß", nl: "Procesefficiëntiemaat" },
          { en: "Cost-benefit analysis", es: "Análisis costo-beneficio", de: "Kosten-Nutzen-Analyse", nl: "Kosten-batenanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "Risk quantification combines the likelihood of an incident occurring (frequency) with the severity of its potential outcomes (consequence) to prioritize safety measures and resource allocation.",
          es: "La cuantificación del riesgo combina la probabilidad de que ocurra un incidente (frecuencia) con la severidad de sus resultados potenciales (consecuencia) para priorizar medidas de seguridad y asignación de recursos.",
          de: "Risikoquantifizierung kombiniert die Wahrscheinlichkeit eines Zwischenfalls (Häufigkeit) mit der Schwere seiner potenziellen Folgen (Konsequenz), um Sicherheitsmaßnahmen und Ressourcenzuteilung zu priorisieren.",
          nl: "Risicokwantificering combineert de waarschijnlijkheid van een incident (frequentie) met de ernst van potentiële uitkomsten (gevolg) om veiligheidsmaatregelen en resource-allocatie te prioriteren."
        }
      },
      {
        question: {
          en: "What is the objective function in process optimization?",
          es: "¿Cuál es la función objetivo en optimización de procesos?",
          de: "Was ist die Zielfunktion in der Prozessoptimierung?",
          nl: "Wat is de doelfunctie in procesoptimalisatie?"
        },
        options: [
          { en: "Mathematical expression to be minimized or maximized", es: "Expresión matemática a minimizar o maximizar", de: "Mathematischer Ausdruck, der minimiert oder maximiert werden soll", nl: "Wiskundige uitdrukking die geminimaliseerd of gemaximaliseerd moet worden" },
          { en: "Process constraints only", es: "Solo restricciones del proceso", de: "Nur Prozessbeschränkungen", nl: "Alleen procesbeperkingen" },
          { en: "Equipment specifications", es: "Especificaciones del equipo", de: "Gerätespezifikationen", nl: "Apparatuurspecificaties" },
          { en: "Safety requirements", es: "Requisitos de seguridad", de: "Sicherheitsanforderungen", nl: "Veiligheidseisen" }
        ],
        correct: 0,
        explanation: {
          en: "The objective function represents the goal to be optimized (e.g., minimize cost, maximize profit, minimize energy consumption) subject to process constraints and operating limits.",
          es: "La función objetivo representa la meta a optimizar (ej. minimizar costo, maximizar ganancia, minimizar consumo de energía) sujeta a restricciones del proceso y límites operativos.",
          de: "Die Zielfunktion repräsentiert das zu optimierende Ziel (z.B. Kosten minimieren, Gewinn maximieren, Energieverbrauch minimieren) unter Berücksichtigung von Prozessbeschränkungen und Betriebsgrenzen.",
          nl: "De doelfunctie vertegenwoordigt het te optimaliseren doel (bijv. kosten minimaliseren, winst maximaliseren, energieverbruik minimaliseren) onder procesbeperkingen en operationele limieten."
        }
      },
      {
        question: {
          en: "What is the difference between local and global optimization?",
          es: "¿Cuál es la diferencia entre optimización local y global?",
          de: "Was ist der Unterschied zwischen lokaler und globaler Optimierung?",
          nl: "Wat is het verschil tussen lokale en globale optimalisatie?"
        },
        options: [
          { en: "Local finds nearest optimum, global finds best overall optimum", es: "Local encuentra óptimo más cercano, global encuentra mejor óptimo general", de: "Lokal findet nächstes Optimum, global findet bestes Gesamtoptimum", nl: "Lokaal vindt dichtstbijzijnde optimum, globaal vindt beste algehele optimum" },
          { en: "No significant difference", es: "No hay diferencia significativa", de: "Kein signifikanter Unterschied", nl: "Geen significant verschil" },
          { en: "Local is faster only", es: "Local es solo más rápido", de: "Lokal ist nur schneller", nl: "Lokaal is alleen sneller" },
          { en: "Global uses more variables", es: "Global usa más variables", de: "Global verwendet mehr Variablen", nl: "Globaal gebruikt meer variabelen" }
        ],
        correct: 0,
        explanation: {
          en: "Local optimization finds the best solution in the immediate vicinity (may be trapped at local minima), while global optimization searches the entire feasible space to find the absolute best solution.",
          es: "La optimización local encuentra la mejor solución en la vecindad inmediata (puede quedar atrapada en mínimos locales), mientras que la optimización global busca en todo el espacio factible para encontrar la mejor solución absoluta.",
          de: "Lokale Optimierung findet die beste Lösung in unmittelbarer Nähe (kann bei lokalen Minima gefangen sein), während globale Optimierung den gesamten zulässigen Raum durchsucht, um die absolut beste Lösung zu finden.",
          nl: "Lokale optimalisatie vindt de beste oplossing in de directe omgeving (kan gevangen zitten bij lokale minima), terwijl globale optimalisatie de hele haalbare ruimte doorzoekt om de absoluut beste oplossing te vinden."
        }
      },
      {
        question: {
          en: "What is the purpose of economic optimization in chemical processes?",
          es: "¿Cuál es el propósito de la optimización económica en procesos químicos?",
          de: "Was ist der Zweck der wirtschaftlichen Optimierung in chemischen Prozessen?",
          nl: "Wat is het doel van economische optimalisatie in chemische processen?"
        },
        options: [
          { en: "Balance capital and operating costs to maximize profitability", es: "Equilibrar costos de capital y operación para maximizar rentabilidad", de: "Kapital- und Betriebskosten ausgleichen, um Rentabilität zu maximieren", nl: "Kapitaal- en operationele kosten balanceren om winstgevendheid te maximaliseren" },
          { en: "Minimize reactor volume only", es: "Solo minimizar volumen del reactor", de: "Nur Reaktorvolumen minimieren", nl: "Alleen reactorvolume minimaliseren" },
          { en: "Maximize conversion only", es: "Solo maximizar conversión", de: "Nur Umsatz maximieren", nl: "Alleen conversie maximaliseren" },
          { en: "Reduce energy consumption only", es: "Solo reducir consumo de energía", de: "Nur Energieverbrauch reduzieren", nl: "Alleen energieverbruik verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Economic optimization considers the trade-offs between capital investments (equipment costs) and operating expenses (utilities, raw materials) to find the most profitable operating conditions and design parameters.",
          es: "La optimización económica considera los compromisos entre inversiones de capital (costos de equipo) y gastos operativos (servicios, materias primas) para encontrar las condiciones operativas y parámetros de diseño más rentables.",
          de: "Wirtschaftliche Optimierung berücksichtigt die Abwägungen zwischen Kapitalinvestitionen (Gerätekosten) und Betriebsausgaben (Versorgung, Rohstoffe), um die rentabelsten Betriebsbedingungen und Designparameter zu finden.",
          nl: "Economische optimalisatie overweegt de afwegingen tussen kapitaalinvesteringen (apparatuurkosten) en operationele uitgaven (utilities, grondstoffen) om de meest winstgevende bedrijfsomstandigheden en ontwerpparameters te vinden."
        }
      },
      {
        question: {
          en: "What is a catalyst in chemical reactions?",
          es: "¿Qué es un catalizador en reacciones químicas?",
          de: "Was ist ein Katalysator in chemischen Reaktionen?",
          nl: "Wat is een katalysator in chemische reacties?"
        },
        options: [
          { en: "Substance that increases reaction rate without being consumed", es: "Sustancia que aumenta la velocidad de reacción sin ser consumida", de: "Substanz, die Reaktionsgeschwindigkeit erhöht ohne verbraucht zu werden", nl: "Stof die reactiesnelheid verhoogt zonder verbruikt te worden" },
          { en: "Reactant that is completely consumed", es: "Reactivo que se consume completamente", de: "Reaktant, der vollständig verbraucht wird", nl: "Reactant die volledig verbruikt wordt" },
          { en: "Product of the reaction", es: "Producto de la reacción", de: "Produkt der Reaktion", nl: "Product van de reactie" },
          { en: "Solvent for the reaction", es: "Solvente para la reacción", de: "Lösungsmittel für die Reaktion", nl: "Oplosmiddel voor de reactie" }
        ],
        correct: 0,
        explanation: {
          en: "A catalyst accelerates chemical reactions by providing an alternative reaction pathway with lower activation energy, while remaining chemically unchanged and recoverable after the reaction.",
          es: "Un catalizador acelera las reacciones químicas proporcionando una ruta de reacción alternativa con menor energía de activación, mientras permanece químicamente sin cambios y recuperable después de la reacción.",
          de: "Ein Katalysator beschleunigt chemische Reaktionen durch Bereitstellung eines alternativen Reaktionsweges mit niedrigerer Aktivierungsenergie, während er chemisch unverändert und nach der Reaktion wiedergewinnbar bleibt.",
          nl: "Een katalysator versnelt chemische reacties door het bieden van een alternatief reactiepad met lagere activeringsenergie, terwijl hij chemisch onveranderd en herwinbaar blijft na de reactie."
        }
      },
      {
        question: {
          en: "What is catalyst deactivation?",
          es: "¿Qué es la desactivación del catalizador?",
          de: "Was ist Katalysatordeaktivierung?",
          nl: "Wat is katalysator deactivering?"
        },
        options: [
          { en: "Loss of catalytic activity over time due to various mechanisms", es: "Pérdida de actividad catalítica con el tiempo debido a varios mecanismos", de: "Verlust katalytischer Aktivität über die Zeit durch verschiedene Mechanismen", nl: "Verlies van katalytische activiteit over tijd door verschillende mechanismen" },
          { en: "Increase in catalyst selectivity", es: "Aumento en selectividad del catalizador", de: "Erhöhung der Katalysatorselektivität", nl: "Toename van katalysator selectiviteit" },
          { en: "Formation of new catalyst", es: "Formación de nuevo catalizador", de: "Bildung neuen Katalysators", nl: "Vorming van nieuwe katalysator" },
          { en: "Catalyst regeneration process", es: "Proceso de regeneración del catalizador", de: "Katalysatorregeneration", nl: "Katalysator regeneratieproces" }
        ],
        correct: 0,
        explanation: {
          en: "Catalyst deactivation occurs through mechanisms like poisoning (irreversible binding of impurities), fouling (physical blockage), sintering (loss of surface area), or thermal degradation, reducing catalytic performance.",
          es: "La desactivación del catalizador ocurre a través de mecanismos como envenenamiento (unión irreversible de impurezas), ensuciamiento (bloqueo físico), sinterización (pérdida de área superficial), o degradación térmica, reduciendo el rendimiento catalítico.",
          de: "Katalysatordeaktivierung erfolgt durch Mechanismen wie Vergiftung (irreversible Bindung von Verunreinigungen), Verschmutzung (physische Blockierung), Sintern (Verlust von Oberfläche) oder thermische Degradation, wodurch die katalytische Leistung reduziert wird.",
          nl: "Katalysator deactivering treedt op door mechanismen zoals vergiftiging (onomkeerbare binding van onzuiverheden), vervuiling (fysieke blokkade), sintering (verlies van oppervlakte), of thermische degradatie, wat katalytische prestaties vermindert."
        }
      },
      {
        question: {
          en: "What is the Thiele modulus in heterogeneous catalysis?",
          es: "¿Qué es el módulo de Thiele en catálisis heterogénea?",
          de: "Was ist der Thiele-Modul in der heterogenen Katalyse?",
          nl: "Wat is de Thiele modulus in heterogene katalyse?"
        },
        options: [
          { en: "Ratio of reaction rate to diffusion rate in catalyst particle", es: "Relación de velocidad de reacción a velocidad de difusión en partícula de catalizador", de: "Verhältnis von Reaktionsgeschwindigkeit zu Diffusionsgeschwindigkeit im Katalysatorpartikel", nl: "Verhouding van reactiesnelheid tot diffusiesnelheid in katalysatorpartikel" },
          { en: "Catalyst particle size only", es: "Solo tamaño de partícula de catalizador", de: "Nur Katalysatorpartikelgröße", nl: "Alleen katalysator partikelgrootte" },
          { en: "Temperature dependence factor", es: "Factor de dependencia de temperatura", de: "Temperaturabhängigkeitsfaktor", nl: "Temperatuur afhankelijkheidsfactor" },
          { en: "Pressure effect on catalyst", es: "Efecto de presión en catalizador", de: "Druckeffekt auf Katalysator", nl: "Drukeffect op katalysator" }
        ],
        correct: 0,
        explanation: {
          en: "The Thiele modulus (φ = L√(k/D_eff)) characterizes the relative importance of reaction kinetics versus pore diffusion in catalyst particles, determining whether internal mass transfer limits reaction rate.",
          es: "El módulo de Thiele (φ = L√(k/D_eff)) caracteriza la importancia relativa de la cinética de reacción versus difusión en poros en partículas de catalizador, determinando si la transferencia de masa interna limita la velocidad de reacción.",
          de: "Der Thiele-Modul (φ = L√(k/D_eff)) charakterisiert die relative Bedeutung der Reaktionskinetik gegenüber Porendiffusion in Katalysatorpartikeln und bestimmt, ob interne Stoffübertragung die Reaktionsgeschwindigkeit begrenzt.",
          nl: "De Thiele modulus (φ = L√(k/D_eff)) karakteriseert het relatieve belang van reactiekinetiek versus poriediffusie in katalysatorpartikels, wat bepaalt of interne massaoverdracht de reactiesnelheid beperkt."
        }
      },
      {
        question: {
          en: "What is catalyst selectivity?",
          es: "¿Qué es la selectividad del catalizador?",
          de: "Was ist Katalysatorselektivität?",
          nl: "Wat is katalysator selectiviteit?"
        },
        options: [
          { en: "Ability to favor formation of desired products over side products", es: "Capacidad de favorecer formación de productos deseados sobre productos secundarios", de: "Fähigkeit, Bildung gewünschter Produkte gegenüber Nebenprodukten zu begünstigen", nl: "Vermogen om gewenste productvorming te bevoordelen boven bijproducten" },
          { en: "Reaction rate only", es: "Solo velocidad de reacción", de: "Nur Reaktionsgeschwindigkeit", nl: "Alleen reactiesnelheid" },
          { en: "Catalyst lifetime", es: "Vida útil del catalizador", de: "Katalysatorlebensdauer", nl: "Katalysator levensduur" },
          { en: "Temperature stability", es: "Estabilidad de temperatura", de: "Temperaturstabilität", nl: "Temperatuurstabiliteit" }
        ],
        correct: 0,
        explanation: {
          en: "Catalyst selectivity is the measure of how effectively a catalyst promotes the desired reaction pathway while suppressing unwanted side reactions, crucial for maximizing yield of target products.",
          es: "La selectividad del catalizador es la medida de cuán efectivamente un catalizador promueve la ruta de reacción deseada mientras suprime reacciones secundarias no deseadas, crucial para maximizar el rendimiento de productos objetivo.",
          de: "Katalysatorselektivität ist das Maß dafür, wie effektiv ein Katalysator den gewünschten Reaktionsweg fördert und dabei unerwünschte Nebenreaktionen unterdrückt, entscheidend für die Maximierung der Ausbeute von Zielprodukten.",
          nl: "Katalysator selectiviteit is de maat voor hoe effectief een katalysator het gewenste reactiepad bevordert terwijl ongewenste nevenreacties worden onderdrukt, cruciaal voor het maximaliseren van de opbrengst van doelproducten."
        }
      },
      {
        question: {
          en: "What is the Langmuir-Hinshelwood mechanism in catalysis?",
          es: "¿Qué es el mecanismo de Langmuir-Hinshelwood en catálisis?",
          de: "Was ist der Langmuir-Hinshelwood-Mechanismus in der Katalyse?",
          nl: "Wat is het Langmuir-Hinshelwood mechanisme in katalyse?"
        },
        options: [
          { en: "Both reactants adsorb on surface before reaction occurs", es: "Ambos reactivos se adsorben en la superficie antes de que ocurra la reacción", de: "Beide Reaktanten adsorbieren an der Oberfläche bevor die Reaktion stattfindet", nl: "Beide reactanten adsorberen op het oppervlak voordat de reactie plaatsvindt" },
          { en: "Only one reactant adsorbs on surface", es: "Solo un reactivo se adsorbe en la superficie", de: "Nur ein Reaktant adsorbiert an der Oberfläche", nl: "Alleen één reactant adsorbeert op het oppervlak" },
          { en: "Reaction occurs in gas phase only", es: "La reacción ocurre solo en fase gaseosa", de: "Reaktion findet nur in der Gasphase statt", nl: "Reactie vindt alleen plaats in de gasfase" },
          { en: "No adsorption occurs", es: "No ocurre adsorción", de: "Keine Adsorption findet statt", nl: "Geen adsorptie vindt plaats" }
        ],
        correct: 0,
        explanation: {
          en: "In the Langmuir-Hinshelwood mechanism, both reactants adsorb onto the catalyst surface and then react while adsorbed, forming products that subsequently desorb from the surface.",
          es: "En el mecanismo de Langmuir-Hinshelwood, ambos reactivos se adsorben en la superficie del catalizador y luego reaccionan mientras están adsorbidos, formando productos que posteriormente se desorben de la superficie.",
          de: "Im Langmuir-Hinshelwood-Mechanismus adsorbieren beide Reaktanten an die Katalysatoroberfläche und reagieren dann im adsorbierten Zustand, wobei Produkte gebildet werden, die anschließend von der Oberfläche desorbieren.",
          nl: "In het Langmuir-Hinshelwood mechanisme adsorberen beide reactanten op het katalysatoroppervlak en reageren vervolgens terwijl ze geadsorbeerd zijn, waarbij producten worden gevormd die daarna desorberen van het oppervlak."
        }
      },
      {
        question: {
          en: "What is enzyme kinetics primarily described by?",
          es: "¿Por qué se describe principalmente la cinética enzimática?",
          de: "Wodurch wird Enzymkinetik hauptsächlich beschrieben?",
          nl: "Waardoor wordt enzymkinetiek voornamelijk beschreven?"
        },
        options: [
          { en: "Michaelis-Menten equation", es: "Ecuación de Michaelis-Menten", de: "Michaelis-Menten-Gleichung", nl: "Michaelis-Menten vergelijking" },
          { en: "Arrhenius equation only", es: "Solo ecuación de Arrhenius", de: "Nur Arrhenius-Gleichung", nl: "Alleen Arrhenius vergelijking" },
          { en: "Linear rate expression", es: "Expresión de velocidad lineal", de: "Linearer Geschwindigkeitsausdruck", nl: "Lineaire snelheidsuitdrukking" },
          { en: "Exponential decay function", es: "Función de decaimiento exponencial", de: "Exponentialabklingfunktion", nl: "Exponentiële afnamefunctie" }
        ],
        correct: 0,
        explanation: {
          en: "Enzyme kinetics follows the Michaelis-Menten equation: v = V_max[S]/(K_m + [S]), describing the relationship between reaction velocity, substrate concentration, maximum velocity, and Michaelis constant.",
          es: "La cinética enzimática sigue la ecuación de Michaelis-Menten: v = V_max[S]/(K_m + [S]), describiendo la relación entre velocidad de reacción, concentración de sustrato, velocidad máxima y constante de Michaelis.",
          de: "Enzymkinetik folgt der Michaelis-Menten-Gleichung: v = V_max[S]/(K_m + [S]), die die Beziehung zwischen Reaktionsgeschwindigkeit, Substratkonzentration, maximaler Geschwindigkeit und Michaelis-Konstante beschreibt.",
          nl: "Enzymkinetiek volgt de Michaelis-Menten vergelijking: v = V_max[S]/(K_m + [S]), die de relatie beschrijft tussen reactiesnelheid, substraatconcentratie, maximale snelheid en Michaelis constante."
        }
      },
      {
        question: {
          en: "What is bioprocess scale-up primarily concerned with?",
          es: "¿De qué se ocupa principalmente el escalado de bioprocesos?",
          de: "Womit befasst sich hauptsächlich das Bioprocess-Scale-up?",
          nl: "Waar houdt bioprocess scale-up zich voornamelijk mee bezig?"
        },
        options: [
          { en: "Maintaining consistent mixing, mass transfer, and heat transfer", es: "Mantener mezcla, transferencia de masa y transferencia de calor consistentes", de: "Konsistente Mischung, Stoffübertragung und Wärmeübertragung aufrechterhalten", nl: "Consistente menging, massaoverdracht en warmteoverdracht handhaven" },
          { en: "Increasing temperature only", es: "Solo aumentar temperatura", de: "Nur Temperatur erhöhen", nl: "Alleen temperatuur verhogen" },
          { en: "Reducing process time", es: "Reducir tiempo de proceso", de: "Prozesszeit reduzieren", nl: "Procestijd verminderen" },
          { en: "Changing pH conditions", es: "Cambiar condiciones de pH", de: "pH-Bedingungen ändern", nl: "pH-omstandigheden veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Bioprocess scale-up focuses on maintaining similar mixing conditions, oxygen transfer rates, heat transfer, and shear stress as scale increases from laboratory to industrial production while preserving biological activity.",
          es: "El escalado de bioprocesos se enfoca en mantener condiciones similares de mezcla, tasas de transferencia de oxígeno, transferencia de calor y esfuerzo cortante conforme la escala aumenta de laboratorio a producción industrial preservando la actividad biológica.",
          de: "Bioprocess-Scale-up konzentriert sich darauf, ähnliche Mischbedingungen, Sauerstoffübertragungsraten, Wärmeübertragung und Scherspannung beizubehalten, wenn die Skalierung von Labor zu industrieller Produktion zunimmt, während die biologische Aktivität erhalten wird.",
          nl: "Bioprocess scale-up richt zich op het handhaven van vergelijkbare mengomstandigheden, zuurstofoverdrachtssnelheden, warmteoverdracht en schuifspanning naarmate de schaal toeneemt van laboratorium naar industriële productie terwijl biologische activiteit behouden blijft."
        }
      },
      {
        question: {
          en: "What is the residence time distribution (RTD) used to characterize?",
          es: "¿Qué se usa para caracterizar la distribución de tiempo de residencia (RTD)?",
          de: "Was wird zur Charakterisierung der Verweilzeitverteilung (RTD) verwendet?",
          nl: "Wat wordt gebruikt om de verblijftijdverdeling (RTD) te karakteriseren?"
        },
        options: [
          { en: "Mixing behavior and flow patterns in reactors", es: "Comportamiento de mezcla y patrones de flujo en reactores", de: "Mischverhalten und Strömungsmuster in Reaktoren", nl: "Menggedrag en stromingspatronen in reactoren" },
          { en: "Temperature profiles only", es: "Solo perfiles de temperatura", de: "Nur Temperaturprofile", nl: "Alleen temperatuurprofielen" },
          { en: "Pressure variations", es: "Variaciones de presión", de: "Druckschwankungen", nl: "Drukvariaties" },
          { en: "Chemical composition changes", es: "Cambios de composición química", de: "Änderungen der chemischen Zusammensetzung", nl: "Chemische samenstellingsveranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "RTD describes the probability distribution of residence times for fluid elements in a reactor, revealing mixing patterns, dead zones, and short-circuiting that affect reactor performance and design.",
          es: "RTD describe la distribución de probabilidad de los tiempos de residencia para elementos de fluido en un reactor, revelando patrones de mezcla, zonas muertas y cortocircuitos que afectan el rendimiento y diseño del reactor.",
          de: "RTD beschreibt die Wahrscheinlichkeitsverteilung der Verweilzeiten für Fluidelemente in einem Reaktor und offenbart Mischungsmuster, Totzonen und Kurzschlüsse, die Reaktorleistung und -design beeinflussen.",
          nl: "RTD beschrijft de kansverdeling van verblijftijden voor fluïdumelementen in een reactor, wat mengingspatronen, dode zones en kortsluiting onthult die reactorprestaties en ontwerp beïnvloeden."
        }
      },
      {
        question: {
          en: "What is the purpose of compartment modeling in chemical reactors?",
          es: "¿Cuál es el propósito del modelado de compartimentos en reactores químicos?",
          de: "Was ist der Zweck der Kompartimentmodellierung in chemischen Reaktoren?",
          nl: "Wat is het doel van compartimentmodellering in chemische reactoren?"
        },
        options: [
          { en: "Represent non-ideal flow patterns using interconnected ideal reactors", es: "Representar patrones de flujo no ideales usando reactores ideales interconectados", de: "Nicht-ideale Strömungsmuster mittels verbundener idealer Reaktoren darstellen", nl: "Niet-ideale stromingspatronen vertegenwoordigen met behulp van onderling verbonden ideale reactoren" },
          { en: "Design reactor geometry only", es: "Solo diseñar geometría del reactor", de: "Nur Reaktorgeometrie entwerfen", nl: "Alleen reactorgeometrie ontwerpen" },
          { en: "Calculate heat transfer rates", es: "Calcular tasas de transferencia de calor", de: "Wärmeübertragungsraten berechnen", nl: "Warmteoverdrachtssnelheden berekenen" },
          { en: "Determine optimal temperature", es: "Determinar temperatura óptima", de: "Optimale Temperatur bestimmen", nl: "Optimale temperatuur bepalen" }
        ],
        correct: 0,
        explanation: {
          en: "Compartment models approximate real reactor behavior by dividing the reactor into zones modeled as combinations of ideal reactors (CSTR, PFR) to account for mixing patterns and flow irregularities.",
          es: "Los modelos de compartimentos aproximan el comportamiento real del reactor dividiendo el reactor en zonas modeladas como combinaciones de reactores ideales (CSTR, PFR) para considerar patrones de mezcla e irregularidades de flujo.",
          de: "Kompartimentmodelle approximieren das reale Reaktorverhalten, indem sie den Reaktor in Zonen unterteilen, die als Kombinationen idealer Reaktoren (CSTR, PFR) modelliert werden, um Mischungsmuster und Strömungsunregelmäßigkeiten zu berücksichtigen.",
          nl: "Compartimentmodellen benaderen echt reactorgedrag door de reactor te verdelen in zones die gemodelleerd worden als combinaties van ideale reactoren (CSTR, PFR) om mengingspatronen en stromingsonregelmatigheden mee te nemen."
        }
      },
      {
        question: {
          en: "What is process intensification in chemical engineering?",
          es: "¿Qué es la intensificación de procesos en ingeniería química?",
          de: "Was ist Prozessintensivierung in der Chemieingenieurwesen?",
          nl: "Wat is procesintensivering in chemische technologie?"
        },
        options: [
          { en: "Developing more efficient, compact, and sustainable processes", es: "Desarrollar procesos más eficientes, compactos y sostenibles", de: "Entwicklung effizienterer, kompakterer und nachhaltigerer Prozesse", nl: "Ontwikkeling van efficiëntere, compactere en duurzamere processen" },
          { en: "Increasing reactor size only", es: "Solo aumentar tamaño del reactor", de: "Nur Reaktorgröße erhöhen", nl: "Alleen reactorgrootte verhogen" },
          { en: "Adding more separation stages", es: "Agregar más etapas de separación", de: "Mehr Trennungsstufen hinzufügen", nl: "Meer scheidingstrappen toevoegen" },
          { en: "Operating at higher pressures only", es: "Solo operar a presiones más altas", de: "Nur bei höheren Drücken betreiben", nl: "Alleen opereren bij hogere drukken" }
        ],
        correct: 0,
        explanation: {
          en: "Process intensification involves developing novel equipment and methods to achieve dramatic improvements in manufacturing and processing, creating cleaner, more energy-efficient operations in smaller, safer equipment.",
          es: "La intensificación de procesos involucra desarrollar equipos y métodos novedosos para lograr mejoras dramáticas en manufactura y procesamiento, creando operaciones más limpias y eficientes energéticamente en equipos más pequeños y seguros.",
          de: "Prozessintensivierung beinhaltet die Entwicklung neuartiger Ausrüstung und Methoden für dramatische Verbesserungen in Herstellung und Verarbeitung, um sauberere, energieeffizientere Operationen in kleinerer, sichererer Ausrüstung zu schaffen.",
          nl: "Procesintensivering behelst het ontwikkelen van nieuwe apparatuur en methoden om dramatische verbeteringen in productie en verwerking te bereiken, waarbij schonere, energie-efficiëntere operaties in kleinere, veiligere apparatuur worden gecreëerd."
        }
      },
      {
        question: {
          en: "What is the McCabe-Thiele method used for in chemical engineering?",
          es: "¿Para qué se utiliza el método de McCabe-Thiele en ingeniería química?",
          de: "Wofür wird die McCabe-Thiele-Methode in der Chemieingenieurwesen verwendet?",
          nl: "Waarvoor wordt de McCabe-Thiele-methode gebruikt in chemische technologie?"
        },
        options: [
          { en: "Graphical determination of theoretical plates in distillation", es: "Determinación gráfica de platos teóricos en destilación", de: "Graphische Bestimmung theoretischer Böden in der Destillation", nl: "Grafische bepaling van theoretische platen in destillatie" },
          { en: "Heat exchanger design", es: "Diseño de intercambiadores de calor", de: "Wärmetauscher-Design", nl: "Warmtewisselaar ontwerp" },
          { en: "Reactor kinetics modeling", es: "Modelado de cinética de reactores", de: "Reaktorkinetik-Modellierung", nl: "Reactor kinetiek modellering" },
          { en: "Pressure drop calculations", es: "Cálculos de caída de presión", de: "Druckabfall-Berechnungen", nl: "Drukval berekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "The McCabe-Thiele method is a graphical technique used to determine the number of theoretical plates required for binary distillation by plotting operating and equilibrium lines on an x-y diagram.",
          es: "El método McCabe-Thiele es una técnica gráfica utilizada para determinar el número de platos teóricos requeridos para destilación binaria trazando líneas de operación y equilibrio en un diagrama x-y.",
          de: "Die McCabe-Thiele-Methode ist eine graphische Technik zur Bestimmung der Anzahl theoretischer Böden für binäre Destillation durch Aufzeichnen von Betriebs- und Gleichgewichtslinien in einem x-y-Diagramm.",
          nl: "De McCabe-Thiele-methode is een grafische techniek gebruikt om het aantal theoretische platen te bepalen dat vereist is voor binaire destillatie door bedrijfs- en evenwichtslijnen te plotten op een x-y diagram."
        }
      },
      {
        question: {
          en: "What is the Sherwood number in mass transfer operations?",
          es: "¿Qué es el número de Sherwood en operaciones de transferencia de masa?",
          de: "Was ist die Sherwood-Zahl bei Stoffübertragungsoperationen?",
          nl: "Wat is het Sherwood-getal in massaoverdracht operaties?"
        },
        options: [
          { en: "Dimensionless mass transfer coefficient relating convective to diffusive transport", es: "Coeficiente adimensional de transferencia de masa que relaciona transporte convectivo y difusivo", de: "Dimensionsloser Stoffübertragungskoeffizient, der konvektiven und diffusiven Transport verknüpft", nl: "Dimensieloze massaoverdrachtscoëfficiënt die convectief en diffusief transport relateert" },
          { en: "Heat transfer efficiency ratio", es: "Relación de eficiencia de transferencia de calor", de: "Wärmeübertragungseffizienz-Verhältnis", nl: "Warmteoverdracht efficiëntie ratio" },
          { en: "Pressure drop correlation factor", es: "Factor de correlación de caída de presión", de: "Druckabfall-Korrelationsfaktor", nl: "Drukval correlatiefactor" },
          { en: "Flow regime indicator", es: "Indicador de régimen de flujo", de: "Strömungsregime-Indikator", nl: "Stromingsregime indicator" }
        ],
        correct: 0,
        explanation: {
          en: "The Sherwood number (Sh = kL/D) is the mass transfer analogue of the Nusselt number for heat transfer, representing the ratio of convective to diffusive mass transfer rates across a boundary layer.",
          es: "El número de Sherwood (Sh = kL/D) es el análogo de transferencia de masa del número de Nusselt para transferencia de calor, representando la relación entre tasas de transferencia de masa convectiva y difusiva a través de una capa límite.",
          de: "Die Sherwood-Zahl (Sh = kL/D) ist das Stoffübertragungsanalogon der Nusselt-Zahl für Wärmeübertragung und repräsentiert das Verhältnis von konvektiver zu diffusiver Stoffübertragungsrate über eine Grenzschicht.",
          nl: "Het Sherwood-getal (Sh = kL/D) is de massaoverdracht analogie van het Nusselt-getal voor warmteoverdracht, dat de verhouding weergeeft van convectieve tot diffusieve massaoverdrachtssnelheden over een grenslaag."
        }
      },
      {
        question: {
          en: "What is the purpose of a knockout drum in chemical processes?",
          es: "¿Cuál es el propósito de un tambor separador en procesos químicos?",
          de: "Was ist der Zweck eines Abscheiders in chemischen Prozessen?",
          nl: "Wat is het doel van een afscheider in chemische processen?"
        },
        options: [
          { en: "Separate liquid droplets from vapor streams before compression", es: "Separar gotas líquidas de corrientes de vapor antes de compresión", de: "Flüssigkeitströpfchen von Dampfströmen vor der Kompression trennen", nl: "Vloeibare druppels scheiden van dampstromen voor compressie" },
          { en: "Mix different chemical streams", es: "Mezclar diferentes corrientes químicas", de: "Verschiedene chemische Ströme mischen", nl: "Verschillende chemische stromen mengen" },
          { en: "Heat exchange between fluids", es: "Intercambio de calor entre fluidos", de: "Wärmeaustausch zwischen Flüssigkeiten", nl: "Warmtewisseling tussen vloeistoffen" },
          { en: "Control reaction temperature", es: "Controlar temperatura de reacción", de: "Reaktionstemperatur kontrollieren", nl: "Reactietemperatuur controleren" }
        ],
        correct: 0,
        explanation: {
          en: "A knockout drum is a vessel used to separate entrained liquid droplets from vapor streams, typically installed upstream of compressors to prevent liquid damage and maintain efficiency.",
          es: "Un tambor separador es un recipiente usado para separar gotas líquidas arrastradas de corrientes de vapor, típicamente instalado aguas arriba de compresores para prevenir daño por líquido y mantener eficiencia.",
          de: "Ein Abscheider ist ein Behälter zur Trennung mitgerissener Flüssigkeitströpfchen aus Dampfströmen, typischerweise vor Kompressoren installiert, um Flüssigkeitsschäden zu verhindern und Effizienz zu erhalten.",
          nl: "Een afscheider is een vat gebruikt om meegevoerde vloeibare druppels te scheiden van dampstromen, typisch geïnstalleerd stroomopwaarts van compressoren om vloeistofschade te voorkomen en efficiëntie te behouden."
        }
      },
      {
        question: {
          en: "What is the Lewis number in simultaneous heat and mass transfer?",
          es: "¿Qué es el número de Lewis en transferencia simultánea de calor y masa?",
          de: "Was ist die Lewis-Zahl bei gleichzeitiger Wärme- und Stoffübertragung?",
          nl: "Wat is het Lewis-getal in gelijktijdige warmte- en massaoverdracht?"
        },
        options: [
          { en: "Ratio of thermal to mass diffusivity (α/D)", es: "Relación de difusividad térmica a másica (α/D)", de: "Verhältnis von thermischer zu Stoffdiffusivität (α/D)", nl: "Verhouding van thermische tot massa diffusiviteit (α/D)" },
          { en: "Heat transfer coefficient ratio", es: "Relación de coeficientes de transferencia de calor", de: "Wärmeübertragungskoeffizienten-Verhältnis", nl: "Warmteoverdrachtscoëfficiënten verhouding" },
          { en: "Temperature gradient measure", es: "Medida de gradiente de temperatura", de: "Temperaturgradient-Maß", nl: "Temperatuurgradient maat" },
          { en: "Concentration driving force", es: "Fuerza impulsora de concentración", de: "Konzentrationstriebkraft", nl: "Concentratie drijvende kracht" }
        ],
        correct: 0,
        explanation: {
          en: "The Lewis number (Le = α/D = Sc/Pr) compares the rate of thermal diffusion to mass diffusion, crucial in analyzing coupled heat and mass transfer processes like evaporation and drying.",
          es: "El número de Lewis (Le = α/D = Sc/Pr) compara la tasa de difusión térmica con la difusión de masa, crucial en el análisis de procesos acoplados de transferencia de calor y masa como evaporación y secado.",
          de: "Die Lewis-Zahl (Le = α/D = Sc/Pr) vergleicht die Rate der thermischen Diffusion mit der Stoffdiffusion, entscheidend bei der Analyse gekoppelter Wärme- und Stoffübertragungsprozesse wie Verdampfung und Trocknung.",
          nl: "Het Lewis-getal (Le = α/D = Sc/Pr) vergelijkt de snelheid van thermische diffusie met massadiffusie, cruciaal bij het analyseren van gekoppelde warmte- en massaoverdrachtsprocessen zoals verdamping en droging."
        }
      },
      {
        question: {
          en: "What is pinch analysis in heat exchanger network design?",
          es: "¿Qué es el análisis de punto de pliegue en el diseño de redes de intercambiadores de calor?",
          de: "Was ist Pinch-Analyse im Wärmetauschernetzwerk-Design?",
          nl: "Wat is pinch-analyse in warmtewisselaar netwerk ontwerp?"
        },
        options: [
          { en: "Method to identify minimum utility requirements and optimal heat integration", es: "Método para identificar requerimientos mínimos de servicios auxiliares e integración óptima de calor", de: "Methode zur Identifizierung minimaler Hilfsstoffanforderungen und optimaler Wärmeintegration", nl: "Methode om minimale hulpstof vereisten en optimale warmte-integratie te identificeren" },
          { en: "Pressure drop minimization technique", es: "Técnica de minimización de caída de presión", de: "Druckabfall-Minimierungstechnik", nl: "Drukval minimalisatie techniek" },
          { en: "Temperature control strategy", es: "Estrategia de control de temperatura", de: "Temperaturkontrollstrategie", nl: "Temperatuur controle strategie" },
          { en: "Material selection method", es: "Método de selección de materiales", de: "Materialauswahlmethode", nl: "Materiaalselectie methode" }
        ],
        correct: 0,
        explanation: {
          en: "Pinch analysis uses thermodynamic principles to determine the minimum heating and cooling utilities required in a process, identifying the pinch point where the temperature difference between hot and cold streams is smallest.",
          es: "El análisis de punto de pliegue utiliza principios termodinámicos para determinar los servicios auxiliares mínimos de calentamiento y enfriamiento requeridos en un proceso, identificando el punto de pliegue donde la diferencia de temperatura entre corrientes calientes y frías es menor.",
          de: "Die Pinch-Analyse nutzt thermodynamische Prinzipien zur Bestimmung der minimalen Heiz- und Kühlhilfsstoffe in einem Prozess und identifiziert den Pinch-Punkt, wo der Temperaturunterschied zwischen heißen und kalten Strömen am geringsten ist.",
          nl: "Pinch-analyse gebruikt thermodynamische principes om de minimale verwarmings- en koelhulpstoffen te bepalen die vereist zijn in een proces, waarbij het pinch-punt wordt geïdentificeerd waar het temperatuurverschil tussen warme en koude stromen het kleinst is."
        }
      },
      {
        question: {
          en: "What is the Damköhler number in chemical reactor design?",
          es: "¿Qué es el número de Damköhler en el diseño de reactores químicos?",
          de: "Was ist die Damköhler-Zahl im chemischen Reaktordesign?",
          nl: "Wat is het Damköhler-getal in chemische reactor ontwerp?"
        },
        options: [
          { en: "Ratio of reaction rate to mass transport rate", es: "Relación entre tasa de reacción y tasa de transporte de masa", de: "Verhältnis von Reaktionsgeschwindigkeit zu Stofftransportrate", nl: "Verhouding van reactiesnelheid tot massatransport snelheid" },
          { en: "Heat transfer efficiency measure", es: "Medida de eficiencia de transferencia de calor", de: "Wärmeübertragungseffizienz-Maß", nl: "Warmteoverdracht efficiëntie maat" },
          { en: "Pressure drop correlation", es: "Correlación de caída de presión", de: "Druckabfall-Korrelation", nl: "Drukval correlatie" },
          { en: "Mixing intensity parameter", es: "Parámetro de intensidad de mezcla", de: "Mischintensitäts-Parameter", nl: "Meng intensiteit parameter" }
        ],
        correct: 0,
        explanation: {
          en: "The Damköhler number (Da = reaction rate/transport rate) indicates whether a reaction is limited by chemical kinetics (Da << 1) or mass transfer (Da >> 1), crucial for reactor design and scale-up.",
          es: "El número de Damköhler (Da = tasa de reacción/tasa de transporte) indica si una reacción está limitada por cinética química (Da << 1) o transferencia de masa (Da >> 1), crucial para diseño de reactores y escalamiento.",
          de: "Die Damköhler-Zahl (Da = Reaktionsrate/Transportrate) zeigt an, ob eine Reaktion durch chemische Kinetik (Da << 1) oder Stofftransport (Da >> 1) begrenzt ist, entscheidend für Reaktordesign und Scale-up.",
          nl: "Het Damköhler-getal (Da = reactiesnelheid/transport snelheid) geeft aan of een reactie beperkt wordt door chemische kinetiek (Da << 1) of massatransport (Da >> 1), cruciaal voor reactor ontwerp en opschaling."
        }
      },
      {
        question: {
          en: "What is the purpose of a demister in separation equipment?",
          es: "¿Cuál es el propósito de un eliminador de niebla en equipos de separación?",
          de: "Was ist der Zweck eines Tropfenabscheiders in Trennungsanlagen?",
          nl: "Wat is het doel van een mistafscheider in scheidingsapparatuur?"
        },
        options: [
          { en: "Remove fine liquid droplets from gas streams using wire mesh or vanes", es: "Eliminar gotas líquidas finas de corrientes gaseosas usando malla metálica o paletas", de: "Feine Flüssigkeitstropfen aus Gasströmen mittels Drahtgeflecht oder Lamellen entfernen", nl: "Fijne vloeistofdruppels verwijderen uit gasstromen met behulp van draadgaas of schoepen" },
          { en: "Heat gas streams before separation", es: "Calentar corrientes gaseosas antes de separación", de: "Gasströme vor Trennung erwärmen", nl: "Gasstromen verwarmen voor scheiding" },
          { en: "Compress vapor for better separation", es: "Comprimir vapor para mejor separación", de: "Dampf für bessere Trennung komprimieren", nl: "Damp comprimeren voor betere scheiding" },
          { en: "Mix different gas components", es: "Mezclar diferentes componentes gaseosos", de: "Verschiedene Gaskomponenten mischen", nl: "Verschillende gascomponenten mengen" }
        ],
        correct: 0,
        explanation: {
          en: "A demister (mist eliminator) removes entrained liquid droplets from gas streams using wire mesh pads, vane packs, or other coalescing media to prevent liquid carryover and protect downstream equipment.",
          es: "Un eliminador de niebla elimina gotas líquidas arrastradas de corrientes gaseosas usando almohadillas de malla metálica, paquetes de paletas u otros medios coalescentes para prevenir arrastre líquido y proteger equipos aguas abajo.",
          de: "Ein Tropfenabscheider entfernt mitgerissene Flüssigkeitstropfen aus Gasströmen mittels Drahtgeflechtkissen, Lamellenpackungen oder anderen koaleszierenden Medien, um Flüssigkeitsmitnahme zu verhindern und nachgelagerte Ausrüstung zu schützen.",
          nl: "Een mistafscheider verwijdert meegevoerde vloeistofdruppels uit gasstromen met behulp van draadgaaskussens, schoepenpakketten of andere coalescerende media om vloeistofmeedragen te voorkomen en stroomafwaartse apparatuur te beschermen."
        }
      },
      {
        question: {
          en: "What is the Colburn j-factor analogy in transport phenomena?",
          es: "¿Qué es la analogía del factor j de Colburn en fenómenos de transporte?",
          de: "Was ist die Colburn j-Faktor-Analogie in Transportphänomenen?",
          nl: "Wat is de Colburn j-factor analogie in transportverschijnselen?"
        },
        options: [
          { en: "Relates heat, mass, and momentum transfer coefficients through dimensionless groups", es: "Relaciona coeficientes de transferencia de calor, masa y momento a través de grupos adimensionales", de: "Verknüpft Wärme-, Stoff- und Impulsübertragungskoeffizienten durch dimensionslose Gruppen", nl: "Relateert warmte-, massa- en momentumoverdrachtscoëfficiënten door dimensieloze groepen" },
          { en: "Calculates pressure drop in pipes only", es: "Solo calcula caída de presión en tuberías", de: "Berechnet nur Druckabfall in Rohren", nl: "Berekent alleen drukval in leidingen" },
          { en: "Determines optimal reactor size", es: "Determina tamaño óptimo del reactor", de: "Bestimmt optimale Reaktorgröße", nl: "Bepaalt optimale reactor grootte" },
          { en: "Measures fluid viscosity effects", es: "Mide efectos de viscosidad de fluidos", de: "Misst Fluidviskositätseffekte", nl: "Meet vloeistof viscositeitseffecten" }
        ],
        correct: 0,
        explanation: {
          en: "The Colburn j-factor analogy (jH = jD = f/2) establishes relationships between heat transfer (jH = Nu/(Re·Pr^(1/3))), mass transfer (jD = Sh/(Re·Sc^(1/3))), and friction factor, enabling prediction of one from another.",
          es: "La analogía del factor j de Colburn (jH = jD = f/2) establece relaciones entre transferencia de calor (jH = Nu/(Re·Pr^(1/3))), transferencia de masa (jD = Sh/(Re·Sc^(1/3))), y factor de fricción, permitiendo predecir uno del otro.",
          de: "Die Colburn j-Faktor-Analogie (jH = jD = f/2) stellt Beziehungen zwischen Wärmeübertragung (jH = Nu/(Re·Pr^(1/3))), Stoffübertragung (jD = Sh/(Re·Sc^(1/3))) und Reibungsfaktor her, wodurch Vorhersagen eines aus dem anderen ermöglicht werden.",
          nl: "De Colburn j-factor analogie (jH = jD = f/2) stelt relaties vast tussen warmteoverdracht (jH = Nu/(Re·Pr^(1/3))), massaoverdracht (jD = Sh/(Re·Sc^(1/3))), en wrijvingsfactor, waardoor voorspelling van een uit de ander mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is the significance of the Hatta number in gas-liquid reactions?",
          es: "¿Cuál es la significancia del número de Hatta en reacciones gas-líquido?",
          de: "Was ist die Bedeutung der Hatta-Zahl bei Gas-Flüssigkeits-Reaktionen?",
          nl: "Wat is de betekenis van het Hatta-getal in gas-vloeistof reacties?"
        },
        options: [
          { en: "Compares reaction rate in liquid film to mass transfer rate from gas", es: "Compara tasa de reacción en película líquida con tasa de transferencia de masa del gas", de: "Vergleicht Reaktionsgeschwindigkeit im Flüssigkeitsfilm mit Stoffübertragungsrate aus Gas", nl: "Vergelijkt reactiesnelheid in vloeistoffilm met massaoverdrachtssnelheid uit gas" },
          { en: "Measures gas solubility only", es: "Solo mide solubilidad del gas", de: "Misst nur Gaslöslichkeit", nl: "Meet alleen gasoplosbaarheid" },
          { en: "Calculates interfacial area", es: "Calcula área interfacial", de: "Berechnet Grenzflächenbereich", nl: "Berekent grensvlakoppervlak" },
          { en: "Determines bubble size distribution", es: "Determina distribución de tamaño de burbujas", de: "Bestimmt Blasengrößenverteilung", nl: "Bepaalt belvormverdeling" }
        ],
        correct: 0,
        explanation: {
          en: "The Hatta number (Ha = √(k·D)/kL) indicates the regime of gas absorption with chemical reaction: physical absorption (Ha < 0.3), fast reaction (Ha > 3), or intermediate regimes, crucial for reactor design.",
          es: "El número de Hatta (Ha = √(k·D)/kL) indica el régimen de absorción de gas con reacción química: absorción física (Ha < 0.3), reacción rápida (Ha > 3), o regímenes intermedios, crucial para diseño de reactores.",
          de: "Die Hatta-Zahl (Ha = √(k·D)/kL) zeigt das Regime der Gasabsorption mit chemischer Reaktion an: physikalische Absorption (Ha < 0.3), schnelle Reaktion (Ha > 3) oder Zwischenregime, entscheidend für Reaktordesign.",
          nl: "Het Hatta-getal (Ha = √(k·D)/kL) geeft het regime aan van gasabsorptie met chemische reactie: fysieke absorptie (Ha < 0.3), snelle reactie (Ha > 3), of tussenregimes, cruciaal voor reactorontwerp."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/engineering', level6);
  }
})();
