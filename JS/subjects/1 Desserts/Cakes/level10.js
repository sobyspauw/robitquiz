// Quiz Level 10: Dessert - Taarten
(function() {
  const level10 = {
    name: {
      en: "Cakes - Expert",
      es: "Pasteles - Experto",
      de: "Kuchen - Experte",
      nl: "Taarten - Expert"
    },
    questions: [
      {
        question: {
          en: "In quantum food chemistry, what is the tunneling effect in glycosidic bond cleavage during Maillard browning, and at what energy threshold does it become significant?",
          es: "En química cuántica de alimentos, ¿cuál es el efecto túnel en escisión de enlaces glucosídicos durante pardeamiento de Maillard, y en qué umbral de energía se vuelve significativo?",
          de: "Was ist der Tunneleffekt bei der glycosidischen Bindungsspaltung während Maillard-Bräunung in der Quantenlebensmittelchemie, und bei welcher Energieschwelle wird er signifikant?",
          nl: "In kwantum voedselchemie, wat is het tunneleffect in glycosidische binding splitsing tijdens Maillard bruining, en bij welke energie drempel wordt het significant?"
        },
        options: [
          { en: "Quantum tunneling allows bond breaking below classical activation energy; significant at <50 kJ/mol barriers", es: "Túnel cuántico permite ruptura de enlaces bajo energía de activación clásica; significativo en barreras <50 kJ/mol", de: "Quantentunnelung ermöglicht Bindungsbruch unter klassischer Aktivierungsenergie; signifikant bei <50 kJ/mol Barrieren", nl: "Kwantum tunneling staat binding breking toe onder klassieke activeringsenergie; significant bij <50 kJ/mol barrières" },
          { en: "Tunneling only occurs above 500 kJ/mol energy barriers", es: "Túnel solo ocurre arriba de barreras de energía de 500 kJ/mol", de: "Tunnelung tritt nur über 500 kJ/mol Energiebarrieren auf", nl: "Tunneling treedt alleen op boven 500 kJ/mol energie barrières" },
          { en: "No quantum effects exist in food chemistry reactions", es: "No existen efectos cuánticos en reacciones de química alimentaria", de: "Keine Quanteneffekte existieren in Lebensmittelchemiereaktionen", nl: "Geen kwantum effecten bestaan in voedselchemie reacties" },
          { en: "Tunneling requires temperatures above 200°C to be significant", es: "Túnel requiere temperaturas arriba de 200°C para ser significativo", de: "Tunnelung erfordert Temperaturen über 200°C um signifikant zu sein", nl: "Tunneling vereist temperaturen boven 200°C om significant te zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Quantum tunneling allows glycosidic bonds to break at energies below the classical activation energy threshold. This becomes significant for energy barriers <50 kJ/mol, contributing to Maillard reaction pathways at lower temperatures than classically predicted.",
          es: "El túnel cuántico permite que enlaces glucosídicos se rompan a energías bajo el umbral clásico de energía de activación. Esto se vuelve significativo para barreras de energía <50 kJ/mol, contribuyendo a vías de reacción Maillard a temperaturas más bajas que las predichas clásicamente.",
          de: "Quantentunnelung ermöglicht glycosidischen Bindungen sich bei Energien unter der klassischen Aktivierungsenergie-Schwelle zu brechen. Dies wird signifikant für Energiebarrieren <50 kJ/mol, trägt zu Maillard-Reaktionswegen bei niedrigeren Temperaturen bei als klassisch vorhergesagt.",
          nl: "Kwantum tunneling staat glycosidische bindingen toe om te breken bij energieën onder de klassieke activeringsenergie drempel. Dit wordt significant voor energie barrières <50 kJ/mol, draagt bij aan Maillardreactie paden bij lagere temperaturen dan klassiek voorspeld."
        }
      },
      {
        question: {
          en: "What is the role of topological defects in gluten network formation during cake mixing, and how do they affect final crumb structure?",
          es: "¿Cuál es el papel de defectos topológicos en formación de red de gluten durante mezclado de pasteles, y cómo afectan estructura final de miga?",
          de: "Was ist die Rolle topologischer Defekte bei der Glutennetzwerk-Bildung während Kuchenmischung, und wie beeinflussen sie die finale Krumenstruktur?",
          nl: "Wat is de rol van topologische defecten in gluten netwerk vorming tijdens taart mengen, en hoe beïnvloeden ze de uiteindelijke kruim structuur?"
        },
        options: [
          { en: "Topological defects create stress concentration points leading to heterogeneous pore distribution and crumb irregularities", es: "Defectos topológicos crean puntos de concentración de estrés llevando a distribución heterogénea de poros e irregularidades de miga", de: "Topologische Defekte schaffen Spannungskonzentrationspunkte die zu heterogener Porenverteilung und Krumen-Irregularitäten führen", nl: "Topologische defecten creëren stress concentratiepunten leidend tot heterogene porie distributie en kruim onregelmatigheden" },
          { en: "Defects have no impact on final cake structure", es: "Defectos no tienen impacto en estructura final del pastel", de: "Defekte haben keinen Einfluss auf finale Kuchenstruktur", nl: "Defecten hebben geen impact op uiteindelijke taart structuur" },
          { en: "Topological defects only affect surface appearance", es: "Defectos topológicos solo afectan apariencia superficial", de: "Topologische Defekte beeinflussen nur Oberflächenaussehen", nl: "Topologische defecten beïnvloeden alleen oppervlakte uiterlijk" },
          { en: "Defects improve uniformity by stress redistribution", es: "Defectos mejoran uniformidad por redistribución de estrés", de: "Defekte verbessern Uniformität durch Spannungsumverteilung", nl: "Defecten verbeteren uniformiteit door stress herverdeling" }
        ],
        correct: 0,
        explanation: {
          en: "Topological defects in gluten networks act as stress concentrators during gas expansion, creating preferential failure points. This leads to non-uniform pore size distribution and can result in tunneling, irregular crumb structure, and compromised textural quality.",
          es: "Los defectos topológicos en redes de gluten actúan como concentradores de estrés durante expansión de gas, creando puntos de falla preferenciales. Esto lleva a distribución no uniforme de tamaño de poros y puede resultar en túneles, estructura irregular de miga, y calidad textural comprometida.",
          de: "Topologische Defekte in Glutennetzwerken wirken als Spannungskonzentratoren während Gasexpansion und schaffen bevorzugte Versagenspunkte. Dies führt zu ungleichmäßiger Porengrößenverteilung und kann zu Tunnelbildung, irregulärer Krumenstruktur und beeinträchtigter Texturqualität führen.",
          nl: "Topologische defecten in gluten netwerken werken als stress concentratoren tijdens gas expansie, creërend voorkeursbreukpunten. Dit leidt tot ongelijkmatige porie grootte distributie en kan resulteren in tunneling, onregelmatige kruim structuur en gecompromitteerde textuur kwaliteit."
        }
      },
      {
        question: {
          en: "In the thermodynamics of phase transitions during cake baking, what is the critical point for water-steam transition in a constrained starch matrix?",
          es: "En termodinámica de transiciones de fase durante horneado de pasteles, ¿cuál es el punto crítico para transición agua-vapor en matriz de almidón restringida?",
          de: "Was ist der kritische Punkt für Wasser-Dampf-Übergang in einer beschränkten Stärkematrix in der Thermodynamik von Phasenübergängen während Kuchenbacken?",
          nl: "In de thermodynamica van fase overgangen tijdens taart bakken, wat is het kritieke punt voor water-stoom overgang in een beperkte zetmeel matrix?"
        },
        options: [
          { en: "Critical temperature ~350-380°C, critical pressure 15-25 MPa due to matrix confinement effects", es: "Temperatura crítica ~350-380°C, presión crítica 15-25 MPa debido a efectos de confinamiento de matriz", de: "Kritische Temperatur ~350-380°C, kritischer Druck 15-25 MPa aufgrund von Matrix-Einschränkungseffekten", nl: "Kritieke temperatuur ~350-380°C, kritieke druk 15-25 MPa door matrix opsluiting effecten" },
          { en: "Same as free water: 374°C and 22.1 MPa", es: "Igual que agua libre: 374°C y 22.1 MPa", de: "Gleich wie freies Wasser: 374°C und 22.1 MPa", nl: "Hetzelfde als vrij water: 374°C en 22.1 MPa" },
          { en: "Critical point cannot exist in food matrices", es: "Punto crítico no puede existir en matrices alimentarias", de: "Kritischer Punkt kann nicht in Lebensmittelmatrizen existieren", nl: "Kritiek punt kan niet bestaan in voedsel matrices" },
          { en: "Critical temperature lowered to 250°C due to starch interactions", es: "Temperatura crítica bajada a 250°C debido a interacciones de almidón", de: "Kritische Temperatur auf 250°C gesenkt aufgrund von Stärke-Wechselwirkungen", nl: "Kritieke temperatuur verlaagd tot 250°C door zetmeel interacties" }
        ],
        correct: 0,
        explanation: {
          en: "In constrained starch matrices, water experiences significant confinement effects that alter its critical properties. The critical temperature increases to ~350-380°C and critical pressure to 15-25 MPa due to restricted molecular motion and hydrogen bonding with starch polymers.",
          es: "En matrices de almidón restringidas, el agua experimenta efectos significativos de confinamiento que alteran sus propiedades críticas. La temperatura crítica aumenta a ~350-380°C y presión crítica a 15-25 MPa debido a movimiento molecular restringido y enlaces de hidrógeno con polímeros de almidón.",
          de: "In beschränkten Stärkematrizen erfährt Wasser signifikante Einschränkungseffekte die seine kritischen Eigenschaften verändern. Die kritische Temperatur steigt auf ~350-380°C und kritischer Druck auf 15-25 MPa aufgrund eingeschränkter Molekularbewegung und Wasserstoffbindung mit Stärkepolymeren.",
          nl: "In beperkte zetmeel matrices ervaart water significante opsluiting effecten die zijn kritieke eigenschappen veranderen. De kritieke temperatuur stijgt tot ~350-380°C en kritieke druk tot 15-25 MPa door beperkte moleculaire beweging en waterstofbinding met zetmeel polymeren."
        }
      },
      {
        question: {
          en: "What is the mechanism of chiral inversion in sugar molecules during high-temperature caramelization, and which enantiomer predominates?",
          es: "¿Cuál es el mecanismo de inversión quiral en moléculas de azúcar durante caramelización de alta temperatura, y qué enantiómero predomina?",
          de: "Was ist der Mechanismus der chiralen Inversion in Zuckermolekülen während Hochtemperatur-Karamelisierung, und welches Enantiomer überwiegt?",
          nl: "Wat is het mechanisme van chirale inversie in suiker moleculen tijdens hoge-temperatuur karamelisatie, en welke enantiomeer overheerst?"
        },
        options: [
          { en: "Mutarotation through acyclic aldehyde intermediate; equilibrium favors D-form ~64:36 over L-form", es: "Mutarrotación a través de intermediario aldehído acíclico; equilibrio favorece forma-D ~64:36 sobre forma-L", de: "Mutarotation durch azyklisches Aldehyd-Zwischenprodukt; Gleichgewicht bevorzugt D-Form ~64:36 über L-Form", nl: "Mutarotatie door acyclische aldehyde tussenproduct; evenwicht begunstigt D-vorm ~64:36 boven L-vorm" },
          { en: "No chiral inversion occurs at high temperatures", es: "No ocurre inversión quiral a altas temperaturas", de: "Keine chirale Inversion tritt bei hohen Temperaturen auf", nl: "Geen chirale inversie treedt op bij hoge temperaturen" },
          { en: "Complete racemization to 50:50 mixture occurs", es: "Racemización completa a mezcla 50:50 ocurre", de: "Vollständige Racemisierung zu 50:50 Mischung tritt auf", nl: "Complete racemisatie tot 50:50 mengsel treedt op" },
          { en: "L-form becomes dominant due to thermal stability", es: "Forma-L se vuelve dominante debido a estabilidad térmica", de: "L-Form wird dominant aufgrund thermischer Stabilität", nl: "L-vorm wordt dominant door thermische stabiliteit" }
        ],
        correct: 0,
        explanation: {
          en: "During caramelization, cyclic sugars undergo mutarotation through acyclic aldehyde intermediates, allowing chiral center inversion. The equilibrium typically favors the D-enantiomer ~64:36 due to thermodynamic stability differences in the anomeric configuration.",
          es: "Durante caramelización, azúcares cíclicos sufren mutarrotación a través de intermediarios aldehído acíclicos, permitiendo inversión de centro quiral. El equilibrio típicamente favorece el D-enantiómero ~64:36 debido a diferencias de estabilidad termodinámica en configuración anomérica.",
          de: "Während Karamelisierung durchlaufen zyklische Zucker Mutarotation durch azyklische Aldehyd-Zwischenprodukte, was chirale Zentrum-Inversion ermöglicht. Das Gleichgewicht bevorzugt typischerweise das D-Enantiomer ~64:36 aufgrund thermodynamischer Stabilitätsunterschiede in der anomeren Konfiguration.",
          nl: "Tijdens karamelisatie ondergaan cyclische suikers mutarotatie door acyclische aldehyde tussenproducten, wat chirale centrum inversie mogelijk maakt. Het evenwicht begunstigt typisch de D-enantiomeer ~64:36 door thermodynamische stabiliteit verschillen in de anomere configuratie."
        }
      },
      {
        question: {
          en: "In nonlinear rheology of cake batters, what is the critical strain amplitude where the linear viscoelastic regime breaks down?",
          es: "En reología no lineal de masas de pasteles, ¿cuál es la amplitud de deformación crítica donde el régimen viscoelástico lineal se rompe?",
          de: "Was ist die kritische Dehnungsamplitude wo das lineare viskoelastische Regime zusammenbricht in der nichtlinearen Rheologie von Kuchenteigen?",
          nl: "In niet-lineaire reologie van taartbeslagen, wat is de kritieke rek amplitude waar het lineaire viscoelastische regime afbreekt?"
        },
        options: [
          { en: "γc ≈ 0.1-1% strain amplitude marks transition to nonlinear behavior and network breakdown", es: "γc ≈ 0.1-1% amplitud de deformación marca transición a comportamiento no lineal y ruptura de red", de: "γc ≈ 0.1-1% Dehnungsamplitude markiert Übergang zu nichtlinearem Verhalten und Netzwerkzusammenbruch", nl: "γc ≈ 0.1-1% rek amplitude markeert overgang naar niet-lineair gedrag en netwerk afbraak" },
          { en: "Critical strain is always >10% for all food systems", es: "Deformación crítica es siempre >10% para todos sistemas alimentarios", de: "Kritische Dehnung ist immer >10% für alle Lebensmittelsysteme", nl: "Kritieke rek is altijd >10% voor alle voedsel systemen" },
          { en: "No critical strain exists; behavior is always linear", es: "No existe deformación crítica; comportamiento es siempre lineal", de: "Keine kritische Dehnung existiert; Verhalten ist immer linear", nl: "Geen kritieke rek bestaat; gedrag is altijd lineair" },
          { en: "Critical strain depends only on temperature, not composition", es: "Deformación crítica depende solo de temperatura, no de composición", de: "Kritische Dehnung hängt nur von Temperatur ab, nicht von Zusammensetzung", nl: "Kritieke rek hangt alleen af van temperatuur, niet van samenstelling" }
        ],
        correct: 0,
        explanation: {
          en: "The critical strain amplitude (γc) for cake batters typically ranges from 0.1-1%, marking the transition from linear viscoelastic behavior to nonlinear response. Beyond this point, the protein-starch network begins to break down irreversibly under oscillatory stress.",
          es: "La amplitud de deformación crítica (γc) para masas de pasteles típicamente varía de 0.1-1%, marcando transición de comportamiento viscoelástico lineal a respuesta no lineal. Más allá de este punto, la red proteína-almidón comienza a romperse irreversiblemente bajo estrés oscilatorio.",
          de: "Die kritische Dehnungsamplitude (γc) für Kuchenteige liegt typisch bei 0.1-1%, markiert den Übergang von linearem viskoelastischem Verhalten zu nichtlinearer Antwort. Jenseits dieses Punkts beginnt das Protein-Stärke-Netzwerk sich irreversibel unter oszillierendem Stress aufzulösen.",
          nl: "De kritieke rek amplitude (γc) voor taartbeslagen ligt typisch tussen 0.1-1%, markeert de overgang van lineair viscoelastisch gedrag naar niet-lineaire respons. Voorbij dit punt begint het eiwit-zetmeel netwerk zich onomkeerbaar af te breken onder oscillerende stress."
        }
      },
      {
        question: {
          en: "What is the molecular basis for the unusual thermal expansion behavior of chocolate near its melting point, and how does this affect tempering?",
          es: "¿Cuál es la base molecular para el comportamiento inusual de expansión térmica del chocolate cerca de su punto de fusión, y cómo afecta esto el templado?",
          de: "Was ist die molekulare Basis für das ungewöhnliche Wärmeausdehnungsverhalten von Schokolade nahe ihrem Schmelzpunkt, und wie beeinflusst dies das Temperieren?",
          nl: "Wat is de moleculaire basis voor het ongewone thermische uitzetting gedrag van chocolade nabij zijn smeltpunt, en hoe beïnvloedt dit het tempereren?"
        },
        options: [
          { en: "Negative thermal expansion from crystal densification; causes contraction during initial heating affecting tempering curves", es: "Expansión térmica negativa por densificación cristalina; causa contracción durante calentamiento inicial afectando curvas de templado", de: "Negative Wärmeausdehnung durch Kristalldensifizierung; verursacht Kontraktion während anfänglicher Erhitzung beeinflusst Temperier-Kurven", nl: "Negatieve thermische uitzetting door kristal verdichting; veroorzaakt contractie tijdens initiële verwarming beïnvloedt tempering curven" },
          { en: "Normal positive thermal expansion occurs throughout all temperature ranges", es: "Expansión térmica positiva normal ocurre en todos rangos de temperatura", de: "Normale positive Wärmeausdehnung tritt in allen Temperaturbereichen auf", nl: "Normale positieve thermische uitzetting treedt op door alle temperatuur bereiken" },
          { en: "Thermal expansion is independent of crystal form", es: "Expansión térmica es independiente de forma cristalina", de: "Wärmeausdehnung ist unabhängig von Kristallform", nl: "Thermische uitzetting is onafhankelijk van kristal vorm" },
          { en: "Chocolate shows no thermal expansion effects", es: "Chocolate no muestra efectos de expansión térmica", de: "Schokolade zeigt keine Wärmeausdehnungseffekte", nl: "Chocolade toont geen thermische uitzetting effecten" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate exhibits negative thermal expansion near melting due to crystal densification as polymorphs transition to more compact arrangements. This causes initial contraction during heating, creating complex tempering behavior that requires precise temperature control to maintain proper crystal seeding.",
          es: "Chocolate exhibe expansión térmica negativa cerca de fusión debido a densificación cristalina mientras polimorfos transicionan a arreglos más compactos. Esto causa contracción inicial durante calentamiento, creando comportamiento complejo de templado que requiere control preciso de temperatura para mantener siembra apropiada de cristales.",
          de: "Schokolade zeigt negative Wärmeausdehnung nahe dem Schmelzen aufgrund Kristalldensifizierung während Polymorphe zu kompakteren Anordnungen übergehen. Dies verursacht anfängliche Kontraktion während Erhitzung, schafft komplexes Temperier-Verhalten das präzise Temperaturkontrolle erfordert um richtige Kristall-Saat zu erhalten.",
          nl: "Chocolade vertoont negatieve thermische uitzetting nabij smelten door kristal verdichting terwijl polymorfen overgaan naar compactere arrangementen. Dit veroorzaakt initiële contractie tijdens verwarming, creërend complex tempering gedrag dat precieze temperatuur controle vereist om juiste kristal beenting te behouden."
        }
      },
      {
        question: {
          en: "In the field emission spectroscopy of sugar crystals, what electronic transitions are responsible for the UV absorption bands at 280-320 nm?",
          es: "En espectroscopía de emisión de campo de cristales de azúcar, ¿qué transiciones electrónicas son responsables de las bandas de absorción UV a 280-320 nm?",
          de: "Was sind die elektronischen Übergänge verantwortlich für UV-Absorptionsbanden bei 280-320 nm in der Feldemissionsspektroskopie von Zuckerkristallen?",
          nl: "In veld emissie spectroscopie van suiker kristallen, welke elektronische overgangen zijn verantwoordelijk voor de UV absorptie banden bij 280-320 nm?"
        },
        options: [
          { en: "n→π* transitions of carbonyl groups and π→π* transitions of conjugated systems formed during heating", es: "Transiciones n→π* de grupos carbonilo y transiciones π→π* de sistemas conjugados formados durante calentamiento", de: "n→π* Übergänge von Carbonylgruppen und π→π* Übergänge von konjugierten Systemen gebildet während Erhitzung", nl: "n→π* overgangen van carbonyl groepen en π→π* overgangen van geconjugeerde systemen gevormd tijdens verwarming" },
          { en: "Only d-orbital transitions from trace metal impurities", es: "Solo transiciones d-orbitales de impurezas metálicas traza", de: "Nur d-Orbital-Übergänge von Spurenmetall-Verunreinigungen", nl: "Alleen d-orbitaal overgangen van spoor metaal onzuiverheden" },
          { en: "Vibrational overtones of C-H stretching modes", es: "Sobretonos vibracionales de modos de estiramiento C-H", de: "Vibrationsober töne von C-H Streckmoden", nl: "Vibratie boventonen van C-H rek modi" },
          { en: "Sugar crystals show no UV absorption in this range", es: "Cristales de azúcar no muestran absorción UV en este rango", de: "Zuckerkristalle zeigen keine UV-Absorption in diesem Bereich", nl: "Suiker kristallen tonen geen UV absorptie in dit bereik" }
        ],
        correct: 0,
        explanation: {
          en: "The UV absorption bands at 280-320 nm in sugar crystals arise from n→π* electronic transitions of carbonyl groups formed through oxidation and thermal degradation, along with π→π* transitions of extended conjugated systems created during heating processes.",
          es: "Las bandas de absorción UV a 280-320 nm en cristales de azúcar surgen de transiciones electrónicas n→π* de grupos carbonilo formados por oxidación y degradación térmica, junto con transiciones π→π* de sistemas conjugados extendidos creados durante procesos de calentamiento.",
          de: "Die UV-Absorptionsbanden bei 280-320 nm in Zuckerkristallen entstehen durch n→π* elektronische Übergänge von Carbonylgruppen gebildet durch Oxidation und thermische Degradation, zusammen mit π→π* Übergängen ausgedehnter konjugierter Systeme geschaffen während Erhitzungsprozessen.",
          nl: "De UV absorptie banden bij 280-320 nm in suiker kristallen ontstaan door n→π* elektronische overgangen van carbonyl groepen gevormd door oxidatie en thermische degradatie, samen met π→π* overgangen van uitgebreide geconjugeerde systemen gecreëerd tijdens verwarmingsprocessen."
        }
      },
      {
        question: {
          en: "What is the role of configurational entropy in the glass transition of high-solids cake batters, and how does it relate to the Adam-Gibbs equation?",
          es: "¿Cuál es el papel de entropía configuracional en transición vítrea de masas de pasteles de altos sólidos, y cómo se relaciona con la ecuación de Adam-Gibbs?",
          de: "Was ist die Rolle der Konfigurations-Entropie beim Glasübergang von hochkonzentrierten Kuchenteigen, und wie bezieht sie sich auf die Adam-Gibbs-Gleichung?",
          nl: "Wat is de rol van configuratie entropie in de glas overgang van hoge-vast-stof taartbeslagen, en hoe relateert het aan de Adam-Gibbs vergelijking?"
        },
        options: [
          { en: "Configurational entropy controls molecular rearrangement kinetics; τ = A exp(B/TSc) where Sc is configurational entropy", es: "Entropía configuracional controla cinética de reordenamiento molecular; τ = A exp(B/TSc) donde Sc es entropía configuracional", de: "Konfigurations-Entropie kontrolliert molekulare Umordnungskinetik; τ = A exp(B/TSc) wobei Sc Konfigurations-Entropie ist", nl: "Configuratie entropie controleert moleculaire herrangschikking kinetiek; τ = A exp(B/TSc) waar Sc configuratie entropie is" },
          { en: "Entropy has no role in glass transition behavior", es: "Entropía no tiene papel en comportamiento de transición vítrea", de: "Entropie hat keine Rolle beim Glasübergangsverhalten", nl: "Entropie heeft geen rol in glas overgang gedrag" },
          { en: "Only thermal entropy matters, not configurational", es: "Solo importa entropía térmica, no configuracional", de: "Nur thermische Entropie ist wichtig, nicht konfigurative", nl: "Alleen thermische entropie is belangrijk, niet configuratie" },
          { en: "Glass transition is purely a kinetic phenomenon", es: "Transición vítrea es puramente fenómeno cinético", de: "Glasübergang ist rein kinetisches Phänomen", nl: "Glas overgang is puur een kinetisch fenomeen" }
        ],
        correct: 0,
        explanation: {
          en: "The Adam-Gibbs equation describes glass transition through configurational entropy: relaxation time τ = A exp(B/TSc), where decreasing configurational entropy Sc leads to longer relaxation times and eventual glass formation in concentrated cake batters.",
          es: "La ecuación de Adam-Gibbs describe transición vítrea a través de entropía configuracional: tiempo de relajación τ = A exp(B/TSc), donde entropía configuracional Sc decreciente lleva a tiempos de relajación más largos y eventual formación de vidrio en masas concentradas de pasteles.",
          de: "Die Adam-Gibbs-Gleichung beschreibt Glasübergang durch Konfigurations-Entropie: Relaxationszeit τ = A exp(B/TSc), wobei abnehmende Konfigurations-Entropie Sc zu längeren Relaxationszeiten und eventueller Glasbildung in konzentrierten Kuchenteigen führt.",
          nl: "De Adam-Gibbs vergelijking beschrijft glas overgang door configuratie entropie: relaxatie tijd τ = A exp(B/TSc), waar afnemende configuratie entropie Sc leidt tot langere relaxatie tijden en uiteindelijke glas vorming in geconcentreerde taartbeslagen."
        }
      },
      {
        question: {
          en: "In the statistical mechanics of foam decay, what is the relationship between bubble size distribution and surface energy minimization in cake leavening?",
          es: "En mecánica estadística de decaimiento de espuma, ¿cuál es la relación entre distribución de tamaño de burbujas y minimización de energía superficial en leudado de pasteles?",
          de: "Was ist die Beziehung zwischen Blasengrößenverteilung und Oberflächenenergie-Minimierung beim Kuchentrieb in der statistischen Mechanik des Schaum-Zerfalls?",
          nl: "In de statistische mechanica van schuim verval, wat is de relatie tussen bel grootte distributie en oppervlakte energie minimalisatie in taart rijzing?"
        },
        options: [
          { en: "Ostwald ripening drives larger bubbles to grow at expense of smaller ones; distribution follows r³ ∝ t scaling law", es: "Maduración de Ostwald impulsa burbujas más grandes a crecer a expensas de más pequeñas; distribución sigue ley de escalado r³ ∝ t", de: "Ostwald-Reifung treibt größere Blasen zum Wachsen auf Kosten kleinerer; Verteilung folgt r³ ∝ t Skalierungsgesetz", nl: "Ostwald rijping drijft grotere bellen tot groeien ten koste van kleinere; distributie volgt r³ ∝ t schaalwet" },
          { en: "Bubble size remains constant throughout leavening process", es: "Tamaño de burbuja permanece constante durante proceso de leudado", de: "Blasengröße bleibt konstant während des Treibprozesses", nl: "Bel grootte blijft constant gedurende het rijsproces" },
          { en: "Only surface tension affects bubble stability", es: "Solo tensión superficial afecta estabilidad de burbujas", de: "Nur Oberflächenspannung beeinflusst Blasenstabilität", nl: "Alleen oppervlaktespanning beïnvloedt bel stabiliteit" },
          { en: "Bubble size follows normal Gaussian distribution always", es: "Tamaño de burbuja sigue distribución Gaussiana normal siempre", de: "Blasengröße folgt immer normaler Gaußverteilung", nl: "Bel grootte volgt altijd normale Gaussiaanse distributie" }
        ],
        correct: 0,
        explanation: {
          en: "Ostwald ripening in cake foams causes larger bubbles to grow at the expense of smaller ones due to surface energy minimization. The bubble radius follows the scaling law r³ ∝ t, leading to coarsening and potential foam collapse if not stabilized quickly enough.",
          es: "La maduración de Ostwald en espumas de pasteles causa que burbujas más grandes crezcan a expensas de las más pequeñas debido a minimización de energía superficial. El radio de burbuja sigue la ley de escalado r³ ∝ t, llevando a engrosamiento y potencial colapso de espuma si no se estabiliza lo suficientemente rápido.",
          de: "Ostwald-Reifung in Kuchenschäumen verursacht dass größere Blasen auf Kosten kleinerer wachsen aufgrund Oberflächenenergie-Minimierung. Der Blasenradius folgt dem Skalierungsgesetz r³ ∝ t, führt zu Vergröberung und potentiellem Schaum-Kollaps wenn nicht schnell genug stabilisiert.",
          nl: "Ostwald rijping in taart schuimen veroorzaakt dat grotere bellen groeien ten koste van kleinere door oppervlakte energie minimalisatie. De bel radius volgt de schaalwet r³ ∝ t, leidend tot vergroving en potentiële schuim ineenstorting als niet snel genoeg gestabiliseerd."
        }
      },
      {
        question: {
          en: "What is the quantum chemical explanation for the color stability of anthocyanins in pH-buffered cake systems using density functional theory?",
          es: "¿Cuál es la explicación química cuántica para estabilidad de color de antocianinas en sistemas de pasteles amortiguados por pH usando teoría funcional de densidad?",
          de: "Was ist die quantenchemische Erklärung für die Farbstabilität von Anthocyanen in pH-gepufferten Kuchensystemen unter Verwendung der Dichtefunktionaltheorie?",
          nl: "Wat is de kwantumchemische verklaring voor de kleur stabiliteit van anthocyanines in pH-gebufferde taart systemen met behulp van dichtheidsfunctionaaltheorie?"
        },
        options: [
          { en: "HOMO-LUMO gap modulation by protonation state changes; copigmentation creates π-π stacking stabilization", es: "Modulación de brecha HOMO-LUMO por cambios de estado de protonación; copigmentación crea estabilización de apilamiento π-π", de: "HOMO-LUMO-Lücken-Modulation durch Protonierungszustand-Änderungen; Copigmentierung schafft π-π-Stapelstabilisierung", nl: "HOMO-LUMO gat modulatie door protonatie staat veranderingen; copigmentatie creëert π-π stapeling stabilisatie" },
          { en: "Only classical electrostatic interactions determine color", es: "Solo interacciones electroestáticas clásicas determinan color", de: "Nur klassische elektrostatische Wechselwirkungen bestimmen Farbe", nl: "Alleen klassieke elektrostatische interacties bepalen kleur" },
          { en: "Quantum effects are negligible in food colorants", es: "Efectos cuánticos son despreciables en colorantes alimentarios", de: "Quanteneffekte sind vernachlässigbar in Lebensmittelfarbstoffen", nl: "Kwantum effecten zijn verwaarloosbaar in voedsel kleurstoffen" },
          { en: "Color stability is purely a kinetic phenomenon", es: "Estabilidad de color es puramente fenómeno cinético", de: "Farbstabilität ist rein kinetisches Phänomen", nl: "Kleur stabiliteit is puur een kinetisch fenomeen" }
        ],
        correct: 0,
        explanation: {
          en: "DFT calculations show that anthocyanin color stability depends on HOMO-LUMO gap changes with protonation state. Copigmentation through π-π stacking interactions provides additional stabilization by modifying the electronic structure and protecting the chromophore from degradation.",
          es: "Cálculos DFT muestran que estabilidad de color de antocianinas depende de cambios de brecha HOMO-LUMO con estado de protonación. Copigmentación a través de interacciones de apilamiento π-π proporciona estabilización adicional modificando estructura electrónica y protegiendo cromóforo de degradación.",
          de: "DFT-Berechnungen zeigen dass Anthocyan-Farbstabilität von HOMO-LUMO-Lücken-Änderungen mit Protonierungszustand abhängt. Copigmentierung durch π-π-Stapelwechselwirkungen bietet zusätzliche Stabilisierung durch Modifikation der elektronischen Struktur und Schutz des Chromophors vor Degradation.",
          nl: "DFT berekeningen tonen dat anthocyanine kleur stabiliteit afhangt van HOMO-LUMO gat veranderingen met protonatie staat. Copigmentatie door π-π stapeling interacties biedt additionele stabilisatie door elektronische structuur modificatie en bescherming van de chromofoor tegen degradatie."
        }
      },
      {
        question: {
          en: "In the fractal analysis of crumb microstructure, what is the box-counting dimension range for optimal cake texture, and how does it correlate with sensory perception?",
          es: "En análisis fractal de microestructura de miga, ¿cuál es el rango de dimensión de conteo de cajas para textura óptima de pastel, y cómo correlaciona con percepción sensorial?",
          de: "Was ist der Box-Counting-Dimensions-Bereich für optimale Kuchentextur in der fraktalen Analyse der Krumen-Mikrostruktur, und wie korreliert er mit sensorischer Wahrnehmung?",
          nl: "In de fractale analyse van kruim microstructuur, wat is het box-counting dimensie bereik voor optimale taart textuur, en hoe correleert het met sensorische waarneming?"
        },
        options: [
          { en: "Db = 1.6-1.8 correlates with optimal mouthfeel; higher values indicate over-aerated, lower values dense texture", es: "Db = 1.6-1.8 correlaciona con sensación bucal óptima; valores más altos indican sobre-aireado, valores más bajos textura densa", de: "Db = 1.6-1.8 korreliert mit optimalem Mundgefühl; höhere Werte zeigen Über-Belüftung an, niedrigere Werte dichte Textur", nl: "Db = 1.6-1.8 correleert met optimaal mondgevoel; hogere waarden duiden op over-belucht, lagere waarden dichte textuur" },
          { en: "Box-counting dimension must always equal 2.0 for proper texture", es: "Dimensión de conteo de cajas debe siempre igualar 2.0 para textura apropiada", de: "Box-Counting-Dimension muss immer 2.0 für richtige Textur betragen", nl: "Box-counting dimensie moet altijd 2.0 zijn voor juiste textuur" },
          { en: "Fractal dimension has no correlation with sensory properties", es: "Dimensión fractal no tiene correlación con propiedades sensoriales", de: "Fraktale Dimension hat keine Korrelation mit sensorischen Eigenschaften", nl: "Fractale dimensie heeft geen correlatie met sensorische eigenschappen" },
          { en: "Only integer dimensions are meaningful in food analysis", es: "Solo dimensiones enteras son significativas en análisis alimentario", de: "Nur ganzzahlige Dimensionen sind in Lebensmittelanalyse bedeutsam", nl: "Alleen gehele dimensies zijn betekenisvol in voedsel analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Box-counting fractal dimension (Db) of 1.6-1.8 indicates optimal crumb structure with balanced porosity and structural integrity. Values >1.8 suggest over-aeration leading to fragile texture, while <1.6 indicates dense, compact structure with poor mouthfeel.",
          es: "La dimensión fractal de conteo de cajas (Db) de 1.6-1.8 indica estructura óptima de miga con porosidad balanceada e integridad estructural. Valores >1.8 sugieren sobre-aireación llevando a textura frágil, mientras <1.6 indica estructura densa, compacta con pobre sensación bucal.",
          de: "Box-Counting-Fraktaldimension (Db) von 1.6-1.8 zeigt optimale Krumenstruktur mit ausgewogener Porosität und struktureller Integrität an. Werte >1.8 deuten auf Über-Belüftung hin die zu zerbrechlicher Textur führt, während <1.6 dichte, kompakte Struktur mit schlechtem Mundgefühl anzeigt.",
          nl: "Box-counting fractale dimensie (Db) van 1.6-1.8 duidt op optimale kruim structuur met gebalanceerde porositeit en structurele integriteit. Waarden >1.8 suggereren over-beluchting leidend tot fragiele textuur, terwijl <1.6 dichte, compacte structuur met slecht mondgevoel aangeeft."
        }
      },
      {
        question: {
          en: "What is the thermodynamic basis for the spontaneous formation of emulsion droplets in cake batters, and what is the critical packing parameter?",
          es: "¿Cuál es la base termodinámica para formación espontánea de gotas de emulsión en masas de pasteles, y cuál es el parámetro crítico de empaque?",
          de: "Was ist die thermodynamische Basis für die spontane Bildung von Emulsionstropfen in Kuchenteigen, und was ist der kritische Packungsparameter?",
          nl: "Wat is de thermodynamische basis voor de spontane vorming van emulsie druppels in taartbeslagen, en wat is de kritieke pakking parameter?"
        },
        options: [
          { en: "Negative interfacial tension from adsorbed surfactants; critical packing parameter Pc = V/(Alc) ≈ 0.3-0.5 for stable o/w emulsions", es: "Tensión interfacial negativa de surfactantes adsorbidos; parámetro crítico de empaque Pc = V/(Alc) ≈ 0.3-0.5 para emulsiones o/w estables", de: "Negative Grenzflächenspannung von adsorbierten Tensiden; kritischer Packungsparameter Pc = V/(Alc) ≈ 0.3-0.5 für stabile o/w Emulsionen", nl: "Negatieve grensvlak spanning van geadsorbeerde oppervlakteactieve stoffen; kritieke pakking parameter Pc = V/(Alc) ≈ 0.3-0.5 voor stabiele o/w emulsies" },
          { en: "Positive interfacial tension drives emulsification", es: "Tensión interfacial positiva impulsa emulsificación", de: "Positive Grenzflächenspannung treibt Emulgierung an", nl: "Positieve grensvlak spanning drijft emulgering aan" },
          { en: "Emulsion formation is always thermodynamically unfavorable", es: "Formación de emulsión es siempre termodinámicamente desfavorable", de: "Emulsionsbildung ist immer thermodynamisch ungünstig", nl: "Emulsie vorming is altijd thermodynamisch ongunstig" },
          { en: "Critical packing parameter must exceed 1.0 for stability", es: "Parámetro crítico de empaque debe exceder 1.0 para estabilidad", de: "Kritischer Packungsparameter muss 1.0 für Stabilität überschreiten", nl: "Kritieke pakking parameter moet 1.0 overschrijden voor stabiliteit" }
        ],
        correct: 0,
        explanation: {
          en: "Spontaneous emulsification can occur when surfactant adsorption creates negative interfacial tension. The critical packing parameter Pc = V/(Alc) ≈ 0.3-0.5 for stable oil-in-water emulsions, where V is molecular volume, A is head group area, and lc is chain length.",
          es: "Emulsificación espontánea puede ocurrir cuando adsorción de surfactante crea tensión interfacial negativa. El parámetro crítico de empaque Pc = V/(Alc) ≈ 0.3-0.5 para emulsiones estables aceite-en-agua, donde V es volumen molecular, A es área de grupo cabeza, y lc es longitud de cadena.",
          de: "Spontane Emulgierung kann auftreten wenn Tensid-Adsorption negative Grenzflächenspannung schafft. Der kritische Packungsparameter Pc = V/(Alc) ≈ 0.3-0.5 für stabile Öl-in-Wasser-Emulsionen, wobei V molekulares Volumen ist, A Kopfgruppenfläche, und lc Kettenlänge.",
          nl: "Spontane emulgering kan optreden wanneer oppervlakteactieve stof adsorptie negatieve grensvlak spanning creëert. De kritieke pakking parameter Pc = V/(Alc) ≈ 0.3-0.5 voor stabiele olie-in-water emulsies, waar V moleculair volume is, A hoofdgroep gebied, en lc keten lengte."
        }
      },
      {
        question: {
          en: "In the magnetohydrodynamics of electrically conductive cake batters, what Maxwell equations govern the electromagnetic field interactions?",
          es: "En magnetohidrodinámica de masas de pasteles eléctricamente conductivas, ¿qué ecuaciones de Maxwell gobiernan las interacciones de campo electromagnético?",
          de: "Welche Maxwell-Gleichungen regieren die elektromagnetischen Feldwechselwirkungen in der Magnetohydrodynamik elektrisch leitfähiger Kuchenteige?",
          nl: "In de magnetohydrodynamica van elektrisch geleidende taartbeslagen, welke Maxwell vergelijkingen regeren de elektromagnetische veld interacties?"
        },
        options: [
          { en: "∇×E = -∂B/∂t and ∇×B = μ₀J + μ₀ε₀∂E/∂t govern field evolution in conductive food media", es: "∇×E = -∂B/∂t y ∇×B = μ₀J + μ₀ε₀∂E/∂t gobiernan evolución de campo en medios alimentarios conductivos", de: "∇×E = -∂B/∂t und ∇×B = μ₀J + μ₀ε₀∂E/∂t regieren Feldentwicklung in leitfähigen Lebensmittelmedien", nl: "∇×E = -∂B/∂t en ∇×B = μ₀J + μ₀ε₀∂E/∂t regeren veld evolutie in geleidende voedsel media" },
          { en: "Maxwell equations don't apply to food systems", es: "Ecuaciones de Maxwell no se aplican a sistemas alimentarios", de: "Maxwell-Gleichungen gelten nicht für Lebensmittelsysteme", nl: "Maxwell vergelijkingen zijn niet van toepassing op voedsel systemen" },
          { en: "Only Gauss's law is relevant for cake batters", es: "Solo ley de Gauss es relevante para masas de pasteles", de: "Nur Gauß-Gesetz ist relevant für Kuchenteige", nl: "Alleen Gauss's wet is relevant voor taartbeslagen" },
          { en: "Electromagnetic effects are negligible in food processing", es: "Efectos electromagnéticos son despreciables en procesamiento de alimentos", de: "Elektromagnetische Effekte sind vernachlässigbar in Lebensmittelverarbeitung", nl: "Elektromagnetische effecten zijn verwaarloosbaar in voedselverwerking" }
        ],
        correct: 0,
        explanation: {
          en: "In electrically conductive cake batters (due to ionic species), Faraday's law (∇×E = -∂B/∂t) and Ampère-Maxwell law (∇×B = μ₀J + μ₀ε₀∂E/∂t) govern electromagnetic field evolution. These become relevant in processes like microwave heating or electromagnetic mixing.",
          es: "En masas de pasteles eléctricamente conductivas (debido a especies iónicas), la ley de Faraday (∇×E = -∂B/∂t) y ley de Ampère-Maxwell (∇×B = μ₀J + μ₀ε₀∂E/∂t) gobiernan evolución de campo electromagnético. Estas se vuelven relevantes en procesos como calentamiento microondas o mezcla electromagnética.",
          de: "In elektrisch leitfähigen Kuchenteigen (aufgrund ionischer Spezies) regieren Faradays Gesetz (∇×E = -∂B/∂t) und Ampère-Maxwell-Gesetz (∇×B = μ₀J + μ₀ε₀∂E/∂t) die elektromagnetische Feldentwicklung. Diese werden relevant in Prozessen wie Mikrowellenerhitzung oder elektromagnetischem Mischen.",
          nl: "In elektrisch geleidende taartbeslagen (door ionische species) regeren Faraday's wet (∇×E = -∂B/∂t) en Ampère-Maxwell wet (∇×B = μ₀J + μ₀ε₀∂E/∂t) elektromagnetische veld evolutie. Deze worden relevant in processen zoals magnetron verwarming of elektromagnetisch mengen."
        }
      },
      {
        question: {
          en: "What is the quantum tunneling probability for hydrogen bond formation between water molecules in highly viscous cake syrup using the WKB approximation?",
          es: "¿Cuál es la probabilidad de túnel cuántico para formación de enlaces de hidrógeno entre moléculas de agua en jarabe de pastel altamente viscoso usando aproximación WKB?",
          de: "Was ist die Quantentunnel-Wahrscheinlichkeit für Wasserstoffbindungsbildung zwischen Wassermolekülen in hochviskosem Kuchensirup unter Verwendung der WKB-Näherung?",
          nl: "Wat is de kwantum tunneling waarschijnlijkheid voor waterstofbinding vorming tussen water moleculen in hoog visceuze taart siroop met behulp van de WKB benadering?"
        },
        options: [
          { en: "T ≈ exp(-2∫[2m(V-E)]^(1/2)/ℏ dx) ≈ 10^-3 to 10^-5 for typical H-bond barriers in viscous media", es: "T ≈ exp(-2∫[2m(V-E)]^(1/2)/ℏ dx) ≈ 10^-3 a 10^-5 para barreras típicas enlace-H en medios viscosos", de: "T ≈ exp(-2∫[2m(V-E)]^(1/2)/ℏ dx) ≈ 10^-3 bis 10^-5 für typische H-Bindungsbarrieren in viskosen Medien", nl: "T ≈ exp(-2∫[2m(V-E)]^(1/2)/ℏ dx) ≈ 10^-3 tot 10^-5 voor typische H-binding barrières in visceuze media" },
          { en: "Tunneling probability is always unity for hydrogen bonds", es: "Probabilidad de túnel es siempre unidad para enlaces de hidrógeno", de: "Tunnelwahrscheinlichkeit ist immer eins für Wasserstoffbindungen", nl: "Tunneling waarschijnlijkheid is altijd eenheid voor waterstofbindingen" },
          { en: "Quantum effects are negligible in food syrups", es: "Efectos cuánticos son despreciables en jarabes alimentarios", de: "Quanteneffekte sind vernachlässigbar in Lebensmittelsirups", nl: "Kwantum effecten zijn verwaarloosbaar in voedsel siropen" },
          { en: "WKB approximation cannot be applied to molecular systems", es: "Aproximación WKB no puede aplicarse a sistemas moleculares", de: "WKB-Näherung kann nicht auf molekulare Systeme angewendet werden", nl: "WKB benadering kan niet worden toegepast op moleculaire systemen" }
        ],
        correct: 0,
        explanation: {
          en: "The WKB tunneling probability T ≈ exp(-2∫[2m(V-E)]^(1/2)/ℏ dx) for hydrogen bond formation in viscous syrups ranges from 10^-3 to 10^-5, depending on barrier height and width. This affects hydrogen bond dynamics and contributes to the unusual rheological properties of concentrated sugar solutions.",
          es: "La probabilidad de túnel WKB T ≈ exp(-2∫[2m(V-E)]^(1/2)/ℏ dx) para formación de enlaces de hidrógeno en jarabes viscosos varía de 10^-3 a 10^-5, dependiendo de altura y ancho de barrera. Esto afecta dinámicas de enlaces de hidrógeno y contribuye a propiedades reológicas inusuales de soluciones concentradas de azúcar.",
          de: "Die WKB-Tunnelwahrscheinlichkeit T ≈ exp(-2∫[2m(V-E)]^(1/2)/ℏ dx) für Wasserstoffbindungsbildung in viskosen Sirups reicht von 10^-3 bis 10^-5, abhängig von Barrierenhöhe und -breite. Dies beeinflusst Wasserstoffbindungsdynamik und trägt zu ungewöhnlichen rheologischen Eigenschaften konzentrierter Zuckerlösungen bei.",
          nl: "De WKB tunneling waarschijnlijkheid T ≈ exp(-2∫[2m(V-E)]^(1/2)/ℏ dx) voor waterstofbinding vorming in visceuze siropen varieert van 10^-3 tot 10^-5, afhankelijk van barrière hoogte en breedte. Dit beïnvloedt waterstofbinding dynamica en draagt bij aan ongewone reologische eigenschappen van geconcentreerde suiker oplossingen."
        }
      },
      {
        question: {
          en: "In the topology of protein folding during cake baking, what is the Gaussian linking number of disulfide cross-links in wheat proteins?",
          es: "En topología de plegamiento proteico durante horneado de pasteles, ¿cuál es el número de enlace Gaussiano de entrecruzamientos disulfuro en proteínas de trigo?",
          de: "Was ist die Gauß-Verschlingungszahl von Disulfid-Quervernetzungen in Weizenproteinen in der Topologie der Proteinfaltung während des Kuchenbackens?",
          nl: "In de topologie van eiwit vouwen tijdens taart bakken, wat is het Gaussiaanse verbinding getal van disulfide kruisverbindingen in tarwe eiwitten?"
        },
        options: [
          { en: "Lk = Tw + Wr ranges from +2 to +8 for typical glutenin networks, indicating right-handed supercoiling", es: "Lk = Tw + Wr varía de +2 a +8 para redes típicas de glutenina, indicando superenrollamiento hacia la derecha", de: "Lk = Tw + Wr reicht von +2 bis +8 für typische Glutenin-Netzwerke, zeigt rechtshändige Supercoiling an", nl: "Lk = Tw + Wr varieert van +2 tot +8 voor typische glutenine netwerken, duidt op rechtshandige supercoiling" },
          { en: "Linking number is always zero in food proteins", es: "Número de enlace es siempre cero en proteínas alimentarias", de: "Verschlingungszahl ist immer null in Lebensmittelproteinen", nl: "Verbinding getal is altijd nul in voedsel eiwitten" },
          { en: "Topological concepts don't apply to protein structures", es: "Conceptos topológicos no se aplican a estructuras proteicas", de: "Topologische Konzepte gelten nicht für Proteinstrukturen", nl: "Topologische concepten zijn niet van toepassing op eiwit structuren" },
          { en: "Only negative linking numbers are possible", es: "Solo números de enlace negativos son posibles", de: "Nur negative Verschlingungszahlen sind möglich", nl: "Alleen negatieve verbinding getallen zijn mogelijk" }
        ],
        correct: 0,
        explanation: {
          en: "The Gaussian linking number Lk = Tw + Wr (twist + writhe) for disulfide-cross-linked glutenin networks typically ranges from +2 to +8, indicating right-handed supercoiling. This topological constraint affects protein unfolding during heating and contributes to gluten network stability.",
          es: "El número de enlace Gaussiano Lk = Tw + Wr (torsión + contorsión) para redes de glutenina entrecruzadas con disulfuro típicamente varía de +2 a +8, indicando superenrollamiento hacia la derecha. Esta restricción topológica afecta desplegamiento proteico durante calentamiento y contribuye a estabilidad de red de gluten.",
          de: "Die Gauß-Verschlingungszahl Lk = Tw + Wr (Twist + Writhe) für disulfid-quervernetzte Glutenin-Netzwerke reicht typisch von +2 bis +8, zeigt rechtshändige Supercoiling an. Diese topologische Beschränkung beeinflusst Proteinentfaltung während Erhitzung und trägt zur Glutennetzwerk-Stabilität bei.",
          nl: "Het Gaussiaanse verbinding getal Lk = Tw + Wr (twist + writhe) voor disulfide-gekruiste glutenine netwerken varieert typisch van +2 tot +8, duidt op rechtshandige supercoiling. Deze topologische beperking beïnvloedt eiwit ontvouwen tijdens verhitting en draagt bij aan gluten netwerk stabiliteit."
        }
      },
      {
        question: {
          en: "What is the critical Reynolds number for the onset of turbulence in non-Newtonian cake batter mixing, considering the Deborah number effects?",
          es: "¿Cuál es el número de Reynolds crítico para inicio de turbulencia en mezcla de masa no-Newtoniana de pastel, considerando efectos del número de Deborah?",
          de: "Was ist die kritische Reynolds-Zahl für den Turbulenz-Beginn beim Mischen nicht-Newtonscher Kuchenteige unter Berücksichtigung der Deborah-Zahl-Effekte?",
          nl: "Wat is het kritieke Reynolds getal voor het begin van turbulentie in niet-Newtoniaanse taartbeslag mengen, rekening houdend met Deborah getal effecten?"
        },
        options: [
          { en: "Rec ≈ 40-100 (much lower than Newtonian fluids) due to viscoelastic stress amplification; depends on De = λγ̇", es: "Rec ≈ 40-100 (mucho menor que fluidos Newtonianos) debido a amplificación de estrés viscoelástico; depende de De = λγ̇", de: "Rec ≈ 40-100 (viel niedriger als Newtonsche Fluide) aufgrund viskoelastischer Spannungsamplifikation; hängt von De = λγ̇ ab", nl: "Rec ≈ 40-100 (veel lager dan Newtoniaanse vloeistoffen) door viscoelastische stress amplificatie; hangt af van De = λγ̇" },
          { en: "Critical Reynolds number is same as water (~2300)", es: "Número crítico de Reynolds es igual que agua (~2300)", de: "Kritische Reynolds-Zahl ist gleich wie Wasser (~2300)", nl: "Kritieke Reynolds getal is hetzelfde als water (~2300)" },
          { en: "Turbulence cannot occur in cake batters", es: "Turbulencia no puede ocurrir en masas de pasteles", de: "Turbulenz kann nicht in Kuchenteigen auftreten", nl: "Turbulentie kan niet optreden in taartbeslagen" },
          { en: "Reynolds number is irrelevant for viscoelastic fluids", es: "Número de Reynolds es irrelevante para fluidos viscoelásticos", de: "Reynolds-Zahl ist irrelevant für viskoelastische Fluide", nl: "Reynolds getal is irrelevant voor viscoelastische vloeistoffen" }
        ],
        correct: 0,
        explanation: {
          en: "Non-Newtonian cake batters exhibit dramatically reduced critical Reynolds numbers (Rec ≈ 40-100) due to viscoelastic stress amplification. The Deborah number De = λγ̇ quantifies the relative importance of elastic effects, with higher De values further reducing the critical Reynolds number for turbulence onset.",
          es: "Las masas no-Newtonianas de pasteles exhiben números de Reynolds críticos dramáticamente reducidos (Rec ≈ 40-100) debido a amplificación de estrés viscoelástico. El número de Deborah De = λγ̇ cuantifica la importancia relativa de efectos elásticos, con valores De más altos reduciendo aún más el número crítico de Reynolds para inicio de turbulencia.",
          de: "Nicht-Newtonsche Kuchenteige zeigen dramatisch reduzierte kritische Reynolds-Zahlen (Rec ≈ 40-100) aufgrund viskoelastischer Spannungsamplifikation. Die Deborah-Zahl De = λγ̇ quantifiziert die relative Bedeutung elastischer Effekte, wobei höhere De-Werte die kritische Reynolds-Zahl für Turbulenz-Beginn weiter reduzieren.",
          nl: "Niet-Newtoniaanse taartbeslagen vertonen dramatisch gereduceerde kritieke Reynolds getallen (Rec ≈ 40-100) door viscoelastische stress amplificatie. Het Deborah getal De = λγ̇ kwantificeert het relatieve belang van elastische effecten, met hogere De waarden die het kritieke Reynolds getal voor turbulentie begin verder verlagen."
        }
      },
      {
        question: {
          en: "In the quantum field theory of flavor perception, what is the coupling constant for umami taste receptor interactions with glutamate in sweet cake applications?",
          es: "En teoría cuántica de campos de percepción de sabor, ¿cuál es la constante de acoplamiento para interacciones de receptor de sabor umami con glutamato en aplicaciones dulces de pasteles?",
          de: "Was ist die Kopplungskonstante für Umami-Geschmacksrezeptor-Wechselwirkungen mit Glutamat in süßen Kuchenanwendungen in der Quantenfeldtheorie der Geschmackswahrnehmung?",
          nl: "In de kwantumveldtheorie van smaak perceptie, wat is de koppeling constante voor umami smaak receptor interacties met glutamaat in zoete taart toepassingen?"
        },
        options: [
          { en: "gumami ≈ 10^-4 to 10^-6 in dimensionless units; weak coupling regime dominates in sweet matrices", es: "gumami ≈ 10^-4 a 10^-6 en unidades adimensionales; régimen de acoplamiento débil domina en matrices dulces", de: "gumami ≈ 10^-4 bis 10^-6 in dimensionslosen Einheiten; schwaches Kopplungsregime dominiert in süßen Matrizen", nl: "gumami ≈ 10^-4 tot 10^-6 in dimensieloze eenheden; zwak koppeling regime domineert in zoete matrices" },
          { en: "Coupling constant equals unity for all taste interactions", es: "Constante de acoplamiento iguala unidad para todas interacciones de sabor", de: "Kopplungskonstante ist eins für alle Geschmackswechselwirkungen", nl: "Koppeling constante is gelijk aan eenheid voor alle smaak interacties" },
          { en: "Quantum field theory doesn't apply to biological systems", es: "Teoría cuántica de campos no se aplica a sistemas biológicos", de: "Quantenfeldtheorie gilt nicht für biologische Systeme", nl: "Kwantumveldtheorie is niet van toepassing op biologische systemen" },
          { en: "Umami receptors don't exist in sweet food contexts", es: "Receptores umami no existen en contextos de alimentos dulces", de: "Umami-Rezeptoren existieren nicht in süßen Lebensmittel-Kontexten", nl: "Umami receptoren bestaan niet in zoete voedsel contexten" }
        ],
        correct: 0,
        explanation: {
          en: "In quantum field theoretical treatments of taste perception, the umami coupling constant gumami ≈ 10^-4 to 10^-6 represents the weak interaction strength between glutamate and T1R1/T1R3 receptors. This weak coupling is further suppressed in sweet matrices due to competitive inhibition from sugar molecules.",
          es: "En tratamientos de teoría cuántica de campos de percepción de sabor, la constante de acoplamiento umami gumami ≈ 10^-4 a 10^-6 representa la fuerza de interacción débil entre glutamato y receptores T1R1/T1R3. Este acoplamiento débil se suprime aún más en matrices dulces debido a inhibición competitiva de moléculas de azúcar.",
          de: "In quantenfeldtheoretischen Behandlungen der Geschmackswahrnehmung repräsentiert die Umami-Kopplungskonstante gumami ≈ 10^-4 bis 10^-6 die schwache Wechselwirkungsstärke zwischen Glutamat und T1R1/T1R3-Rezeptoren. Diese schwache Kopplung wird in süßen Matrizen durch kompetitive Hemmung von Zuckermolekülen weiter unterdrückt.",
          nl: "In kwantumveldtheoretische behandelingen van smaakperceptie vertegenwoordigt de umami koppeling constante gumami ≈ 10^-4 tot 10^-6 de zwakke interactie sterkte tussen glutamaat en T1R1/T1R3 receptoren. Deze zwakke koppeling wordt verder onderdrukt in zoete matrices door competitieve inhibitie van suiker moleculen."
        }
      },
      {
        question: {
          en: "What is the information theoretic entropy of cake crumb structure, and how does it relate to optimal texture complexity using Shannon information measures?",
          es: "¿Cuál es la entropía de teoría de información de estructura de miga de pastel, y cómo se relaciona con complejidad de textura óptima usando medidas de información de Shannon?",
          de: "Was ist die informationstheoretische Entropie der Kuchenkrumen-Struktur, und wie bezieht sie sich auf optimale Textur-Komplexität unter Verwendung von Shannon-Informationsmaßen?",
          nl: "Wat is de informatie theoretische entropie van taart kruim structuur, en hoe relateert het aan optimale textuur complexiteit met behulp van Shannon informatie maten?"
        },
        options: [
          { en: "H(X) = -Σp(xi)log₂p(xi) ≈ 3.2-3.8 bits for optimal crumb; higher entropy correlates with better mouthfeel", es: "H(X) = -Σp(xi)log₂p(xi) ≈ 3.2-3.8 bits para miga óptima; mayor entropía correlaciona con mejor sensación bucal", de: "H(X) = -Σp(xi)log₂p(xi) ≈ 3.2-3.8 Bits für optimale Krume; höhere Entropie korreliert mit besserem Mundgefühl", nl: "H(X) = -Σp(xi)log₂p(xi) ≈ 3.2-3.8 bits voor optimale kruim; hogere entropie correleert met beter mondgevoel" },
          { en: "Information entropy is always zero for food structures", es: "Entropía de información es siempre cero para estructuras alimentarias", de: "Informationsentropie ist immer null für Lebensmittelstrukturen", nl: "Informatie entropie is altijd nul voor voedsel structuren" },
          { en: "Shannon measures don't apply to physical textures", es: "Medidas de Shannon no se aplican a texturas físicas", de: "Shannon-Maße gelten nicht für physikalische Texturen", nl: "Shannon maten zijn niet van toepassing op fysieke texturen" },
          { en: "Optimal entropy equals exactly 1.0 bit always", es: "Entropía óptima iguala exactamente 1.0 bit siempre", de: "Optimale Entropie ist immer genau 1.0 Bit", nl: "Optimale entropie is altijd precies 1.0 bit" }
        ],
        correct: 0,
        explanation: {
          en: "Shannon entropy H(X) = -Σp(xi)log₂p(xi) for optimal cake crumb structure ranges from 3.2-3.8 bits, indicating high structural complexity. This entropy measure quantifies pore size distribution heterogeneity, with higher values correlating with superior mouthfeel due to optimal textural variety.",
          es: "La entropía de Shannon H(X) = -Σp(xi)log₂p(xi) para estructura óptima de miga de pastel varía de 3.2-3.8 bits, indicando alta complejidad estructural. Esta medida de entropía cuantifica heterogeneidad de distribución de tamaño de poros, con valores más altos correlacionando con sensación bucal superior debido a variedad textural óptima.",
          de: "Shannon-Entropie H(X) = -Σp(xi)log₂p(xi) für optimale Kuchenkrumen-Struktur reicht von 3.2-3.8 Bits, zeigt hohe strukturelle Komplexität an. Dieses Entropie-Maß quantifiziert Porengrößenverteilungs-Heterogenität, wobei höhere Werte mit überlegenem Mundgefühl aufgrund optimaler textureller Vielfalt korrelieren.",
          nl: "Shannon entropie H(X) = -Σp(xi)log₂p(xi) voor optimale taart kruim structuur varieert van 3.2-3.8 bits, duidt op hoge structurele complexiteit. Deze entropie maat kwantificeert porie grootte distributie heterogeniteit, met hogere waarden correlerend met superieur mondgevoel door optimale texturele variëteit."
        }
      },
      {
        question: {
          en: "In advanced chocolate crystallization, what is the relationship between nucleation rate, growth rate, and the critical radius for forming stable β(V) crystals, and how does this affect tempering efficiency?",
          es: "En cristalización avanzada de chocolate, ¿cuál es la relación entre tasa de nucleación, tasa de crecimiento y radio crítico para formar cristales β(V) estables, y cómo afecta esto la eficiencia del templado?",
          de: "In fortgeschrittener Schokoladenkristallisation, was ist die Beziehung zwischen Nukleationsrate, Wachstumsrate und kritischem Radius für die Bildung stabiler β(V)-Kristalle, und wie beeinflusst dies die Temperier-Effizienz?",
          nl: "In geavanceerde chocolade kristallisatie, wat is de relatie tussen nucleatie snelheid, groei snelheid en de kritische radius voor het vormen van stabiele β(V) kristallen, en hoe beïnvloedt dit tempereer efficiëntie?"
        },
        options: [
          { en: "Critical radius r* = 2γVm/(kTlnS); optimal nucleation requires r* = 1.2-1.8 nm with J ∝ exp(-16πγ³Vm²/3k³T³ln²S)", es: "Radio crítico r* = 2γVm/(kTlnS); nucleación óptima requiere r* = 1.2-1.8 nm con J ∝ exp(-16πγ³Vm²/3k³T³ln²S)", de: "Kritischer Radius r* = 2γVm/(kTlnS); optimale Nukleation erfordert r* = 1.2-1.8 nm mit J ∝ exp(-16πγ³Vm²/3k³T³ln²S)", nl: "Kritische radius r* = 2γVm/(kTlnS); optimale nucleatie vereist r* = 1.2-1.8 nm met J ∝ exp(-16πγ³Vm²/3k³T³ln²S)" },
          { en: "Temperature only affects crystal color", es: "La temperatura solo afecta el color del cristal", de: "Temperatur beeinflusst nur die Kristallfarbe", nl: "Temperatuur beïnvloedt alleen kristal kleur" },
          { en: "Nucleation rate is constant regardless of temperature", es: "La tasa de nucleación es constante sin importar la temperatura", de: "Nukleationsrate ist konstant unabhängig von der Temperatur", nl: "Nucleatie snelheid is constant ongeacht temperatuur" },
          { en: "Crystal formation is purely random", es: "La formación de cristales es puramente aleatoria", de: "Kristallbildung ist rein zufällig", nl: "Kristal vorming is puur willekeurig" }
        ],
        correct: 0,
        explanation: {
          en: "The critical radius r* = 2γVm/(kTlnS) represents the minimum stable nucleus size, where γ is surface energy, Vm is molar volume, k is Boltzmann constant, T is temperature, and S is supersaturation ratio. For β(V) crystals, r* = 1.2-1.8 nm is optimal. Nucleation rate J follows classical nucleation theory with exponential dependence on surface energy and temperature, making precise temperature control crucial for tempering efficiency.",
          es: "El radio crítico r* = 2γVm/(kTlnS) representa el tamaño mínimo de núcleo estable, donde γ es energía superficial, Vm es volumen molar, k es constante de Boltzmann, T es temperatura, y S es relación de sobresaturación. Para cristales β(V), r* = 1.2-1.8 nm es óptimo. Tasa de nucleación J sigue teoría clásica de nucleación con dependencia exponencial de energía superficial y temperatura, haciendo control preciso de temperatura crucial para eficiencia de templado.",
          de: "Der kritische Radius r* = 2γVm/(kTlnS) repräsentiert die minimale stabile Nukleusgröße, wobei γ Oberflächenenergie, Vm molares Volumen, k Boltzmann-Konstante, T Temperatur und S Übersättigungsverhältnis ist. Für β(V)-Kristalle ist r* = 1.2-1.8 nm optimal. Nukleationsrate J folgt klassischer Nukleationstheorie mit exponentieller Abhängigkeit von Oberflächenenergie und Temperatur, was präzise Temperaturkontrolle für Temperier-Effizienz entscheidend macht.",
          nl: "De kritische radius r* = 2γVm/(kTlnS) vertegenwoordigt de minimum stabiele kern grootte, waar γ oppervlakte energie is, Vm molaire volume, k Boltzmann constante, T temperatuur, en S oververzadigings ratio. Voor β(V) kristallen is r* = 1.2-1.8 nm optimaal. Nucleatie snelheid J volgt klassieke nucleatie theorie met exponentiële afhankelijkheid van oppervlakte energie en temperatuur, waardoor precieze temperatuur controle cruciaal is voor tempereer efficiëntie."
        }
      },
      {
        question: {
          en: "What is the thermodynamic basis for the glass transition in sugar confections, and how does the Williams-Landel-Ferry (WLF) equation predict viscosity changes in relation to storage stability?",
          es: "¿Cuál es la base termodinámica para la transición vítrea en confecciones azucaradas, y cómo predice la ecuación Williams-Landel-Ferry (WLF) cambios de viscosidad en relación con estabilidad de almacenamiento?",
          de: "Was ist die thermodynamische Grundlage für den Glasübergang in Zuckerkonfekt, und wie sagt die Williams-Landel-Ferry (WLF)-Gleichung Viskositätsänderungen in Bezug auf Lagerungsstabilität voraus?",
          nl: "Wat is de thermodynamische basis voor de glas overgang in suiker confiserie, en hoe voorspelt de Williams-Landel-Ferry (WLF) vergelijking viscositeit veranderingen in relatie tot opslag stabiliteit?"
        },
        options: [
          { en: "log(η/η_Tg) = -C₁(T-Tg)/(C₂+(T-Tg)); C₁≈17.4, C₂≈51.6K for sucrose systems; storage stable when η > 10¹² Pa·s", es: "log(η/η_Tg) = -C₁(T-Tg)/(C₂+(T-Tg)); C₁≈17.4, C₂≈51.6K para sistemas sacarosa; estable almacenamiento cuando η > 10¹² Pa·s", de: "log(η/η_Tg) = -C₁(T-Tg)/(C₂+(T-Tg)); C₁≈17.4, C₂≈51.6K für Saccharose-Systeme; lagerstabil wenn η > 10¹² Pa·s", nl: "log(η/η_Tg) = -C₁(T-Tg)/(C₂+(T-Tg)); C₁≈17.4, C₂≈51.6K voor sucrose systemen; opslag stabiel wanneer η > 10¹² Pa·s" },
          { en: "Glass transition only affects color changes", es: "La transición vítrea solo afecta cambios de color", de: "Glasübergang beeinflusst nur Farbveränderungen", nl: "Glas overgang beïnvloedt alleen kleur veranderingen" },
          { en: "Viscosity remains constant during storage", es: "La viscosidad permanece constante durante almacenamiento", de: "Viskosität bleibt während der Lagerung konstant", nl: "Viscositeit blijft constant tijdens opslag" },
          { en: "WLF equation only applies to water-based systems", es: "Ecuación WLF solo se aplica a sistemas base agua", de: "WLF-Gleichung gilt nur für wasserbasierte Systeme", nl: "WLF vergelijking geldt alleen voor water-gebaseerde systemen" }
        ],
        correct: 0,
        explanation: {
          en: "The WLF equation log(η/η_Tg) = -C₁(T-Tg)/(C₂+(T-Tg)) describes viscosity changes above glass transition temperature Tg. For sucrose systems, universal constants C₁≈17.4 and C₂≈51.6K apply. Storage stability requires η > 10¹² Pa·s to prevent structural collapse and crystallization. This relationship enables prediction of shelf life based on storage temperature relative to Tg, crucial for confection formulation and packaging decisions.",
          es: "La ecuación WLF log(η/η_Tg) = -C₁(T-Tg)/(C₂+(T-Tg)) describe cambios de viscosidad sobre temperatura de transición vítrea Tg. Para sistemas de sacarosa, constantes universales C₁≈17.4 y C₂≈51.6K se aplican. Estabilidad de almacenamiento requiere η > 10¹² Pa·s para prevenir colapso estructural y cristalización. Esta relación permite predicción de vida útil basada en temperatura almacenamiento relativa a Tg, crucial para formulación confección y decisiones empaque.",
          de: "Die WLF-Gleichung log(η/η_Tg) = -C₁(T-Tg)/(C₂+(T-Tg)) beschreibt Viskositätsänderungen oberhalb der Glasübergangstemperatur Tg. Für Saccharose-Systeme gelten universelle Konstanten C₁≈17.4 und C₂≈51.6K. Lagerungsstabilität erfordert η > 10¹² Pa·s um strukturellen Kollaps und Kristallisation zu verhindern. Diese Beziehung ermöglicht Vorhersage der Haltbarkeit basierend auf Lagerungstemperatur relativ zu Tg, entscheidend für Konfekt-Formulierung und Verpackungsentscheidungen.",
          nl: "De WLF vergelijking log(η/η_Tg) = -C₁(T-Tg)/(C₂+(T-Tg)) beschrijft viscositeit veranderingen boven glas overgangs temperatuur Tg. Voor sucrose systemen gelden universele constanten C₁≈17.4 en C₂≈51.6K. Opslag stabiliteit vereist η > 10¹² Pa·s om structurele ineenstorting en kristallisatie te voorkomen. Deze relatie maakt voorspelling van houdbaarheid mogelijk gebaseerd op opslag temperatuur relatief aan Tg, cruciaal voor confiserie formulering en verpakkingsbeslissingen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();