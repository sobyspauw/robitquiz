// Quiz Level 9: Dessert - Taarten
(function() {
  const level9 = {
    name: {
      en: "Cakes - Expert",
      es: "Pasteles - Experto",
      de: "Kuchen - Experte",
      nl: "Taarten - Expert"
    },
    questions: [
      {
        question: {
          en: "In historical patisserie, what is the origin and traditional preparation method of Croquembouche, and what technical challenge does its assembly present?",
          es: "En pastelería histórica, ¿cuál es el origen y método de preparación tradicional del Croquembouche, y qué desafío técnico presenta su ensamblaje?",
          de: "Was ist der Ursprung und die traditionelle Zubereitungsmethode von Croquembouche in der historischen Pâtisserie, und welche technische Herausforderung bringt seine Montage mit sich?",
          nl: "Wat is de oorsprong en traditionele bereidingsmethode van Croquembouche in historische patisserie, en welke technische uitdaging biedt de assemblage?"
        },
        options: [
          { en: "17th century French court dessert; choux bound with spun sugar caramel requiring precise temperature control", es: "Postre de corte francés del siglo XVII; choux unidos con caramelo de azúcar hilado requiriendo control preciso de temperatura", de: "Französisches Hofdessert des 17. Jahrhunderts; Choux mit gesponnener Zuckerkaramell verbunden, erfordert präzise Temperaturkontrolle", nl: "17e eeuws Frans hofdesert; choux gebonden met gesponnen suiker karamel vereist precieze temperatuurcontrole" },
          { en: "Italian Renaissance creation; uses only marzipan and honey", es: "Creación del Renacimiento italiano; usa solo mazapán y miel", de: "Italienische Renaissance-Kreation; verwendet nur Marzipan und Honig", nl: "Italiaanse Renaissance creatie; gebruikt alleen marsepein en honing" },
          { en: "Victorian England invention; assembled with royal icing", es: "Invención de la Inglaterra victoriana; ensamblado con glasa real", de: "Erfindung des viktorianischen Englands; mit Royal Icing zusammengesetzt", nl: "Victoriaans Engelse uitvinding; samengesteld met royal icing" },
          { en: "Modern 20th century dessert; requires no special techniques", es: "Postre moderno del siglo XX; no requiere técnicas especiales", de: "Modernes 20. Jahrhundert Dessert; erfordert keine besonderen Techniken", nl: "Modern 20e eeuws dessert; vereist geen speciale technieken" }
        ],
        correct: 0,
        explanation: {
          en: "Croquembouche originated in 17th century French courts, traditionally served at weddings. The technical challenge lies in maintaining caramel at precisely 160°C while quickly assembling profiteroles - too hot burns fingers, too cool won't bind properly.",
          es: "Croquembouche se originó en las cortes francesas del siglo XVII, tradicionalmente servido en bodas. El desafío técnico radica en mantener caramelo a precisamente 160°C mientras se ensamblan rápidamente profiteroles - muy caliente quema dedos, muy frío no une adecuadamente.",
          de: "Croquembouche entstand in französischen Höfen des 17. Jahrhunderts, traditionell bei Hochzeiten serviert. Die technische Herausforderung liegt darin, Karamell genau bei 160°C zu halten während schnelle Profiteroles-Montage - zu heiß verbrennt Finger, zu kühl bindet nicht richtig.",
          nl: "Croquembouche ontstond in 17e eeuwse Franse hoven, traditioneel geserveerd bij bruiloften. De technische uitdaging ligt in het behouden van karamel op precies 160°C tijdens snelle profiteroles assemblage - te heet verbrandt vingers, te koel bindt niet goed."
        }
      },
      {
        question: {
          en: "What is the molecular basis of starch retrogradation in cake staling, and which specific polysaccharide component is responsible?",
          es: "¿Cuál es la base molecular de la retrogradación del almidón en el envejecimiento de pasteles, y qué componente polisacárido específico es principalmente responsable?",
          de: "Was ist die molekulare Basis der Stärkeretrogradation beim Kuchenaltern, und welche spezifische Polysaccharidkomponente ist hauptsächlich verantwortlich?",
          nl: "Wat is de moleculaire basis van zetmeel retrogradatie in taart veroudering, en welk specifieke polysacharide component is hoofdzakelijk verantwoordelijk?"
        },
        options: [
          { en: "Amylose recrystallization forming double helical structures reducing moisture availability", es: "Recristalización de amilosa formando estructuras de doble hélice reduciendo disponibilidad de humedad", de: "Amylose-Rekristallisation bildet Doppelhelixstrukturen und reduziert Feuchtigkeitsverfügbarkeit", nl: "Amylose herkristallisatie vormt dubbele helix structuren waardoor vocht beschikbaarheid afneemt" },
          { en: "Amylopectin chain scission creating smaller molecules", es: "Escisión de cadenas de amilopectina creando moléculas más pequeñas", de: "Amylopektin-Kettenspaltung schafft kleinere Moleküle", nl: "Amylopectine keten splitsing creëert kleinere moleculen" },
          { en: "Cellulose fiber degradation through enzymatic action", es: "Degradación de fibra de celulosa a través de acción enzimática", de: "Zellulosefaser-Abbau durch enzymatische Wirkung", nl: "Cellulose vezel afbraak door enzymatische werking" },
          { en: "Pectin gel syneresis expelling water molecules", es: "Sinéresis del gel de pectina expulsando moléculas de agua", de: "Pektin-Gel-Synerese stößt Wassermoleküle ab", nl: "Pectine gel synerese stoot water moleculen uit" }
        ],
        correct: 0,
        explanation: {
          en: "Staling is caused by amylose retrogradation - linear amylose chains realign into crystalline double helical structures that trap water, making it unavailable for maintaining soft texture. This process accelerates at refrigerator temperatures.",
          es: "El envejecimiento es causado principalmente por retrogradación de amilosa - las cadenas lineales de amilosa se realinean en estructuras cristalinas de doble hélice que atrapan agua, haciéndola no disponible para mantener textura suave. Este proceso se acelera a temperaturas de refrigerador.",
          de: "Altern wird hauptsächlich durch Amylose-Retrogradation verursacht - lineare Amyloseketten ordnen sich in kristalline Doppelhelixstrukturen um, die Wasser einfangen und es für weiche Texturerhaltung nicht verfügbar machen. Dieser Prozess beschleunigt bei Kühlschranktemperaturen.",
          nl: "Veroudering wordt hoofdzakelijk veroorzaakt door amylose retrogradatie - lineaire amylose ketens herrangschikken in kristallijne dubbele helix structuren die water vastleggen, waardoor het niet beschikbaar is voor behoud van zachte textuur. Dit proces versnelt bij koelkast temperaturen."
        }
      },
      {
        question: {
          en: "In modernist patisserie, what is the principle behind calcium-sodium alginate spherification, and what are the precise concentration ratios for optimal results?",
          es: "En pastelería modernista, ¿cuál es el principio detrás de la esferificación con alginato de calcio-sodio, y cuáles son las proporciones precisas de concentración para resultados óptimos?",
          de: "Was ist das Prinzip hinter Calcium-Natriumalginat-Sphärifikation in der modernistischen Pâtisserie, und was sind die präzisen Konzentrationsverhältnisse für optimale Ergebnisse?",
          nl: "In modernistische patisserie, wat is het principe achter calcium-natrium alginaat sferificatie, en wat zijn de precieze concentratie verhoudingen voor optimale resultaten?"
        },
        options: [
          { en: "Calcium ions crosslink alginate polymers forming elastic gel membrane; 0.5% sodium alginate, 0.5% calcium lactate", es: "Iones de calcio entrecruzan polímeros de alginato formando membrana de gel elástica; 0.5% alginato de sodio, 0.5% lactato de calcio", de: "Kalziumionen vernetzen Alginatpolymere und bilden elastische Gelmembran; 0.5% Natriumalginat, 0.5% Kalziumlaktat", nl: "Calcium ionen verbinden alginaat polymeren tot elastische gel membraan; 0.5% natrium alginaat, 0.5% calcium lactaat" },
          { en: "Heat activation creates protein coagulation; 2% each component", es: "Activación por calor crea coagulación de proteínas; 2% de cada componente", de: "Hitzeaktivierung erzeugt Proteinkoagulation; 2% jeder Komponente", nl: "Warmte activatie creëert eiwit stolling; 2% van elke component" },
          { en: "pH adjustment creates chemical precipitation; 1% sodium, 3% calcium", es: "Ajuste de pH crea precipitación química; 1% sodio, 3% calcio", de: "pH-Einstellung erzeugt chemische Ausfällung; 1% Natrium, 3% Kalzium", nl: "pH aanpassing creëert chemische precipitatie; 1% natrium, 3% calcium" },
          { en: "Enzymatic reaction breaks down polysaccharides; equal 5% concentrations", es: "Reacción enzimática descompone polisacáridos; concentraciones iguales del 5%", de: "Enzymatische Reaktion baut Polysaccharide ab; gleiche 5% Konzentrationen", nl: "Enzymatische reactie breekt polysachariden af; gelijke 5% concentraties" }
        ],
        correct: 0,
        explanation: {
          en: "Spherification relies on calcium ions forming ionic crosslinks with alginate polymer chains, creating a flexible gel membrane. Optimal concentrations are 0.5% sodium alginate and 0.5% calcium lactate - higher concentrations create thick, unpalatable skins.",
          es: "La esferificación depende de iones de calcio formando entrecruzamientos iónicos con cadenas de polímero de alginato, creando membrana de gel flexible. Concentraciones óptimas son 0.5% alginato de sodio y 0.5% lactato de calcio - concentraciones más altas crean pieles gruesas no apetitosas.",
          de: "Sphärifikation beruht auf Kalziumionen die ionische Quervernetzungen mit Alginatpolymerketten bilden und flexible Gelmembran schaffen. Optimale Konzentrationen sind 0.5% Natriumalginat und 0.5% Kalziumlaktat - höhere Konzentrationen schaffen dicke, ungenießbare Häute.",
          nl: "Sferificatie vertrouwt op calcium ionen die ionische kruisverbindingen vormen met alginaat polymeer ketens, wat een flexibele gel membraan creëert. Optimale concentraties zijn 0.5% natrium alginaat en 0.5% calcium lactaat - hogere concentraties creëren dikke, onsmaakbare vellen."
        }
      },
      {
        question: {
          en: "What is the thermodynamic principle governing chocolate's polymorphic transitions during tempering, and what is the critical nucleation temperature?",
          es: "¿Cuál es el principio termodinámico que gobierna las transiciones polimórficas del chocolate durante el templado, y cuál es la temperatura crítica de nucleación?",
          de: "Was ist das thermodynamische Prinzip, das Schokolades polymorphe Übergänge beim Temperieren regiert, und was ist die kritische Nukleationstemperatur?",
          nl: "Wat is het thermodynamische principe dat chocolade's polymorfe overgangen tijdens tempereren regelt, en wat is de kritieke nucleatie temperatuur?"
        },
        options: [
          { en: "Ostwald's rule of stages governs crystal formation; nucleation occurs at 27-28°C for Form V crystals", es: "La regla de etapas de Ostwald gobierna formación cristalina; nucleación ocurre a 27-28°C para cristales Forma V", de: "Ostwaldsche Stufenregel regiert Kristallbildung; Nukleation tritt bei 27-28°C für Form-V-Kristalle auf", nl: "Ostwald's regel van stadia regelt kristalvorming; nucleatie treedt op bij 27-28°C voor Vorm V kristallen" },
          { en: "Le Chatelier's principle controls equilibrium; nucleation at 35°C", es: "El principio de Le Chatelier controla equilibrio; nucleación a 35°C", de: "Le Chateliers Prinzip kontrolliert Gleichgewicht; Nukleation bei 35°C", nl: "Le Chatelier's principe controleert evenwicht; nucleatie bij 35°C" },
          { en: "Gibbs-Thomson effect determines crystal size; nucleation at 20°C", es: "Efecto Gibbs-Thomson determina tamaño cristalino; nucleación a 20°C", de: "Gibbs-Thomson-Effekt bestimmt Kristallgröße; Nukleation bei 20°C", nl: "Gibbs-Thomson effect bepaalt kristalgrootte; nucleatie bij 20°C" },
          { en: "Arrhenius kinetics control reaction rate; nucleation at 40°C", es: "Cinética de Arrhenius controla velocidad de reacción; nucleación a 40°C", de: "Arrhenius-Kinetik kontrolliert Reaktionsgeschwindigkeit; Nukleation bei 40°C", nl: "Arrhenius kinetiek controleert reactiesnelheid; nucleatie bij 40°C" }
        ],
        correct: 0,
        explanation: {
          en: "Ostwald's rule states that metastable crystal forms appear first during crystallization. In chocolate tempering, less stable forms (I-IV) nucleate before stable Form V. The critical temperature for Form V nucleation is 27-28°C, where stable β2 crystals form.",
          es: "La regla de Ostwald establece que formas cristalinas metaestables aparecen primero durante cristalización. En templado de chocolate, formas menos estables (I-IV) nuclean antes que Forma V estable. La temperatura crítica para nucleación Forma V es 27-28°C, donde se forman cristales β2 estables.",
          de: "Ostwaldsche Regel besagt dass metastabile Kristallformen zuerst während Kristallisation erscheinen. Beim Schokoladen-Temperieren nukleieren weniger stabile Formen (I-IV) vor stabiler Form V. Die kritische Temperatur für Form-V-Nukleation ist 27-28°C, wo stabile β2-Kristalle entstehen.",
          nl: "Ostwald's regel stelt dat metastabiele kristalvormen eerst verschijnen tijdens kristallisatie. Bij chocolade tempereren nucleëren minder stabiele vormen (I-IV) voor stabiele Vorm V. De kritieke temperatuur voor Vorm V nucleatie is 27-28°C, waar stabiele β2-kristallen vormen."
        }
      },
      {
        question: {
          en: "In enzyme-modified cake production, what is the mechanism of action of transglutaminase on wheat proteins, and what texture modifications does it achieve?",
          es: "En producción de pasteles modificados enzimáticamente, ¿cuál es el mecanismo de acción de la transglutaminasa en proteínas de trigo, y qué modificaciones de textura logra?",
          de: "Was ist der Wirkungsmechanismus von Transglutaminase auf Weizenproteine in der enzymmodifizierten Kuchenproduktion, und welche Texturmodifikationen erreicht sie?",
          nl: "In enzym-gemodificeerde taart productie, wat is het werkingsmechanisme van transglutaminase op tarwe eiwitten, en welke textuur modificaties bereikt het?"
        },
        options: [
          { en: "Creates covalent lysine-glutamine crosslinks strengthening protein networks; produces chewier, more elastic texture", es: "Crea entrecruzamientos covalentes lisina-glutamina fortaleciendo redes proteicas; produce textura más masticable y elástica", de: "Schafft kovalente Lysin-Glutamin-Quervernetzungen die Proteinnetzwerke stärken; erzeugt zähere, elastischere Textur", nl: "Creëert covalente lysine-glutamine kruisverbindingen die eiwit netwerken versterken; produceert kauwbaardere, elastischere textuur" },
          { en: "Breaks down gluten bonds creating tenderness; softens crumb structure", es: "Rompe enlaces de gluten creando terneza; suaviza estructura de miga", de: "Bricht Glutenbindungen ab und schafft Zartheit; erweicht Krumenstruktur", nl: "Breekt gluten bindingen af wat tederheid creëert; verzacht kruim structuur" },
          { en: "Converts starch to sugars improving sweetness; no textural effects", es: "Convierte almidón en azúcares mejorando dulzura; sin efectos texturales", de: "Wandelt Stärke in Zucker um und verbessert Süße; keine Textureffekte", nl: "Converteert zetmeel tot suikers wat zoetheid verbetert; geen textuur effecten" },
          { en: "Denatures proteins through heat activation; creates firm gel structure", es: "Desnaturaliza proteínas por activación térmica; crea estructura de gel firme", de: "Denaturiert Proteine durch Hitzeaktivierung; schafft feste Gelstruktur", nl: "Denatureert eiwitten door warmte activatie; creëert stevige gel structuur" }
        ],
        correct: 0,
        explanation: {
          en: "Transglutaminase catalyzes formation of covalent isopeptide bonds between lysine and glutamine residues in proteins. This creates a stronger, more interconnected protein network resulting in improved volume retention, enhanced elasticity, and chewier texture in baked goods.",
          es: "La transglutaminasa cataliza la formación de enlaces isopeptídicos covalentes entre residuos de lisina y glutamina en proteínas. Esto crea una red proteica más fuerte e interconectada resultando en mejor retención de volumen, elasticidad mejorada y textura más masticable en productos horneados.",
          de: "Transglutaminase katalysiert Bildung kovalenter Isopeptidbindungen zwischen Lysin- und Glutaminresten in Proteinen. Dies schafft ein stärkeres, vernetztes Proteinnetzwerk mit besserer Volumenerhaltung, verstärkter Elastizität und kaubarerer Textur in Backwaren.",
          nl: "Transglutaminase katalyseert vorming van covalente isopeptide bindingen tussen lysine en glutamine residuen in eiwitten. Dit creëert een sterker, meer onderling verbonden eiwit netwerk resulterend in betere volume retentie, verbeterde elasticiteit en kauwbaardere textuur in gebakken goederen."
        }
      },
      {
        question: {
          en: "What is the scientific basis for the Maillard reaction's pH dependence in cake browning, and at what pH does optimal flavor development occur?",
          es: "¿Cuál es la base científica para la dependencia del pH de la reacción de Maillard en el dorado de pasteles, y a qué pH ocurre el desarrollo óptimo de sabor?",
          de: "Was ist die wissenschaftliche Basis für die pH-Abhängigkeit der Maillard-Reaktion beim Kuchenbräunen, und bei welchem pH tritt optimale Geschmacksentwicklung auf?",
          nl: "Wat is de wetenschappelijke basis voor de pH afhankelijkheid van de Maillardreactie in taart bruining, en bij welke pH treedt optimale smaak ontwikkeling op?"
        },
        options: [
          { en: "Alkaline conditions favor amino acid deprotonation increasing nucleophilicity; optimal pH 8.0-8.5", es: "Condiciones alcalinas favorecen desprotonación de aminoácidos aumentando nucleofilicidad; pH óptimo 8.0-8.5", de: "Alkalische Bedingungen begünstigen Aminosäure-Deprotonierung erhöhen Nukleophilie; optimaler pH 8.0-8.5", nl: "Alkalische condities bevoordelen aminozuur deprotonering verhogen nucleofiliciteit; optimale pH 8.0-8.5" },
          { en: "Acidic environment promotes sugar caramelization; optimal pH 4.0-5.0", es: "Ambiente ácido promueve caramelización de azúcar; pH óptimo 4.0-5.0", de: "Saure Umgebung fördert Zuckerkaramelisierung; optimaler pH 4.0-5.0", nl: "Zure omgeving bevordert suiker karamelisatie; optimale pH 4.0-5.0" },
          { en: "Neutral pH provides balanced reaction; optimal pH 7.0", es: "pH neutro proporciona reacción balanceada; pH óptimo 7.0", de: "Neutraler pH bietet ausgewogene Reaktion; optimaler pH 7.0", nl: "Neutrale pH biedt gebalanceerde reactie; optimale pH 7.0" },
          { en: "pH has no effect on Maillard reactions; temperature is only factor", es: "pH no tiene efecto en reacciones de Maillard; temperatura es único factor", de: "pH hat keinen Effekt auf Maillard-Reaktionen; Temperatur ist einziger Faktor", nl: "pH heeft geen effect op Maillard reacties; temperatuur is enige factor" }
        ],
        correct: 0,
        explanation: {
          en: "The Maillard reaction requires nucleophilic attack by amino groups on carbonyl carbons. Alkaline pH (8.0-8.5) deprotonates amino acids, increasing their nucleophilicity and reaction rate. This produces more complex flavor compounds and enhanced browning.",
          es: "La reacción de Maillard requiere ataque nucleofílico por grupos amino en carbonos carbonilo. pH alcalino (8.0-8.5) desprotona aminoácidos, aumentando su nucleofilicidad y velocidad de reacción. Esto produce compuestos de sabor más complejos y dorado mejorado.",
          de: "Die Maillard-Reaktion erfordert nukleophilen Angriff von Aminogruppen auf Carbonyl-Kohlenstoffe. Alkalischer pH (8.0-8.5) deprotoniert Aminosäuren, erhöht ihre Nukleophilie und Reaktionsgeschwindigkeit. Dies produziert komplexere Geschmacksverbindungen und verstärkte Bräunung.",
          nl: "De Maillardreactie vereist nucleofiele aanval door aminogroepen op carbonyl koolstoffen. Alkalische pH (8.0-8.5) deprotoneert aminozuren, verhoogt hun nucleofiliciteit en reactiesnelheid. Dit produceert complexere smaak verbindingen en verbeterde bruining."
        }
      },
      {
        question: {
          en: "In molecular gastronomy, what is the mechanism behind agar-agar's thermoreversible gelling, and what is its hysteresis temperature range?",
          es: "En gastronomía molecular, ¿cuál es el mecanismo detrás de la gelificación termorreversible del agar-agar, y cuál es su rango de temperatura de histéresis?",
          de: "Was ist der Mechanismus hinter Agar-Agars thermoreversiblem Gelieren in der Molekulargastronomie, und was ist sein Hysterese-Temperaturbereich?",
          nl: "In moleculaire gastronomie, wat is het mechanisme achter agar-agar's thermoreversibele gelering, en wat is het hysterese temperatuurbereik?"
        },
        options: [
          { en: "Double helix formation through hydrogen bonding; sets at 32-45°C, melts at 85-90°C", es: "Formación de doble hélice a través de enlaces de hidrógeno; cuaja a 32-45°C, se derrite a 85-90°C", de: "Doppelhelixbildung durch Wasserstoffbindungen; setzt bei 32-45°C, schmilzt bei 85-90°C", nl: "Dubbele helix vorming door waterstof binding; stolt bij 32-45°C, smelt bij 85-90°C" },
          { en: "Ionic crosslinking with calcium; sets at 60°C, melts at 70°C", es: "Entrecruzamiento iónico con calcio; cuaja a 60°C, se derrite a 70°C", de: "Ionische Quervernetzung mit Kalzium; setzt bei 60°C, schmilzt bei 70°C", nl: "Ionische kruisverbinding met calcium; stolt bij 60°C, smelt bij 70°C" },
          { en: "Protein denaturation mechanism; sets at 80°C, melts at 90°C", es: "Mecanismo de desnaturalización proteica; cuaja a 80°C, se derrite a 90°C", de: "Proteindenaturierungsmechanismus; setzt bei 80°C, schmilzt bei 90°C", nl: "Eiwit denaturatie mechanisme; stolt bij 80°C, smelt bij 90°C" },
          { en: "Covalent bond formation; sets and melts at same temperature", es: "Formación de enlaces covalentes; cuaja y se derrite a misma temperatura", de: "Kovalente Bindungsbildung; setzt und schmilzt bei gleicher Temperatur", nl: "Covalente binding vorming; stolt en smelt bij zelfde temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Agar forms gels through formation of double helical structures stabilized by hydrogen bonds between agarose chains. It exhibits significant hysteresis: gelling occurs at 32-45°C while melting requires 85-90°C, making it ideal for hot preparations that remain stable at serving temperature.",
          es: "Agar forma geles a través de formación de estructuras de doble hélice estabilizadas por enlaces de hidrógeno entre cadenas de agarosa. Exhibe histéresis significativa: gelificación ocurre a 32-45°C mientras fusión requiere 85-90°C, siendo ideal para preparaciones calientes que permanecen estables a temperatura de servicio.",
          de: "Agar bildet Gele durch Bildung von Doppelhelixstrukturen die durch Wasserstoffbrücken zwischen Agaroseketten stabilisiert werden. Es zeigt signifikante Hysterese: Gelierung tritt bei 32-45°C auf während Schmelzen 85-90°C erfordert, ideal für heiße Zubereitungen die bei Serviertemperatur stabil bleiben.",
          nl: "Agar vormt gelen door vorming van dubbele helix structuren gestabiliseerd door waterstofbruggen tussen agarose ketens. Het vertoont significante hysterese: gelering treedt op bij 32-45°C terwijl smelten 85-90°C vereist, ideaal voor warme bereidingen die stabiel blijven bij serveertemperatuur."
        }
      },
      {
        question: {
          en: "What is the thermodynamic principle behind sugar glass transition, and at what water activity does it become unstable?",
          es: "¿Cuál es el principio termodinámico detrás de la transición vítrea del azúcar, y a qué actividad de agua se vuelve inestable?",
          de: "Was ist das thermodynamische Prinzip hinter Zuckerglasübergang, und bei welcher Wasseraktivität wird er instabil?",
          nl: "Wat is het thermodynamische principe achter suiker glas overgang, en bij welke water activiteit wordt het instabiel?"
        },
        options: [
          { en: "Viscosity increases exponentially below glass transition temperature; unstable above aw 0.3-0.4", es: "Viscosidad aumenta exponencialmente bajo temperatura de transición vítrea; inestable arriba de aw 0.3-0.4", de: "Viskosität steigt exponentiell unter Glasübergangstemperatur; instabil über aw 0.3-0.4", nl: "Viscositeit stijgt exponentieel onder glas overgangstemperatuur; instabiel boven aw 0.3-0.4" },
          { en: "Crystallization occurs only at high temperatures; unstable below aw 0.1", es: "Cristalización ocurre solo a altas temperaturas; inestable bajo aw 0.1", de: "Kristallisation tritt nur bei hohen Temperaturen auf; instabil unter aw 0.1", nl: "Kristallisatie treedt alleen op bij hoge temperaturen; instabiel onder aw 0.1" },
          { en: "Molecular motion decreases linearly; unstable at aw 0.8-0.9", es: "Movimiento molecular decrece linealmente; inestable a aw 0.8-0.9", de: "Molekulare Bewegung nimmt linear ab; instabil bei aw 0.8-0.9", nl: "Moleculaire beweging neemt lineair af; instabiel bij aw 0.8-0.9" },
          { en: "Phase separation occurs; stable at all water activities", es: "Separación de fases ocurre; estable a todas actividades de agua", de: "Phasentrennung tritt auf; stabil bei allen Wasseraktivitäten", nl: "Fase scheiding treedt op; stabiel bij alle water activiteiten" }
        ],
        correct: 0,
        explanation: {
          en: "Glass transition occurs when amorphous sugar reaches a critical temperature where molecular mobility increases dramatically. Above water activity 0.3-0.4, water acts as a plasticizer, lowering the glass transition temperature and causing the glassy state to become unstable and sticky.",
          es: "La transición vítrea ocurre cuando azúcar amorfo alcanza temperatura crítica donde movilidad molecular aumenta dramáticamente. Arriba de actividad de agua 0.3-0.4, agua actúa como plastificante, bajando temperatura de transición vítrea y causando que estado vítreo se vuelva inestable y pegajoso.",
          de: "Glasübergang tritt auf wenn amorpher Zucker eine kritische Temperatur erreicht wo molekulare Mobilität dramatisch zunimmt. Über Wasseraktivität 0.3-0.4 wirkt Wasser als Weichmacher, senkt Glasübergangstemperatur und macht den glasigen Zustand instabil und klebrig.",
          nl: "Glas overgang treedt op wanneer amorfe suiker een kritieke temperatuur bereikt waar moleculaire mobiliteit dramatisch toeneemt. Boven water activiteit 0.3-0.4 werkt water als weekmaker, verlaagt glas overgangstemperatuur en maakt de glasachtige staat instabiel en kleverig."
        }
      },
      {
        question: {
          en: "In advanced emulsion science, what is the HLB (Hydrophilic-Lipophilic Balance) value required for stable oil-in-water cake emulsions?",
          es: "En ciencia avanzada de emulsiones, ¿cuál es el valor HLB (Balance Hidrofílico-Lipofílico) requerido para emulsiones estables aceite-en-agua de pasteles?",
          de: "Was ist der HLB (Hydrophil-Lipophiles Gleichgewicht) Wert für stabile Öl-in-Wasser-Kuchen-Emulsionen in der fortgeschrittenen Emulsionswissenschaft?",
          nl: "In geavanceerde emulsie wetenschap, wat is de HLB (Hydrofiel-Lipofiele Balans) waarde vereist voor stabiele olie-in-water taart emulsies?"
        },
        options: [
          { en: "HLB 8-18 with optimal range 12-15 for cake batter stability", es: "HLB 8-18 con rango óptimo 12-15 para estabilidad de masa de pastel", de: "HLB 8-18 mit optimalem Bereich 12-15 für Kuchenteig-Stabilität", nl: "HLB 8-18 met optimaal bereik 12-15 voor taartbeslag stabiliteit" },
          { en: "HLB 1-3 for maximum oil phase compatibility", es: "HLB 1-3 para máxima compatibilidad de fase oleosa", de: "HLB 1-3 für maximale Ölphasen-Kompatibilität", nl: "HLB 1-3 voor maximale olie fase compatibiliteit" },
          { en: "HLB 20+ required for complete water solubility", es: "HLB 20+ requerido para completa solubilidad en agua", de: "HLB 20+ erforderlich für vollständige Wasserlöslichkeit", nl: "HLB 20+ vereist voor volledige water oplosbaarheid" },
          { en: "HLB values are irrelevant in cake systems", es: "Valores HLB son irrelevantes en sistemas de pasteles", de: "HLB-Werte sind irrelevant in Kuchensystemen", nl: "HLB waarden zijn irrelevant in taart systemen" }
        ],
        correct: 0,
        explanation: {
          en: "For stable oil-in-water emulsions in cake batters, emulsifiers need HLB values between 8-18, with 12-15 being optimal. This range provides the right balance of hydrophilic and lipophilic properties to stabilize the emulsion and create proper aeration.",
          es: "Para emulsiones estables aceite-en-agua en masas de pasteles, emulsificantes necesitan valores HLB entre 8-18, con 12-15 siendo óptimo. Este rango proporciona el equilibrio correcto de propiedades hidrofílicas y lipofílicas para estabilizar emulsión y crear aireación adecuada.",
          de: "Für stabile Öl-in-Wasser-Emulsionen in Kuchenteigen benötigen Emulgatoren HLB-Werte zwischen 8-18, wobei 12-15 optimal sind. Dieser Bereich bietet das richtige Gleichgewicht hydrophiler und lipophiler Eigenschaften um Emulsion zu stabilisieren und richtige Belüftung zu schaffen.",
          nl: "Voor stabiele olie-in-water emulsies in taartbeslagen hebben emulgatoren HLB waarden tussen 8-18 nodig, met 12-15 als optimaal. Dit bereik biedt de juiste balans van hydrofiele en lipofiele eigenschappen om de emulsie te stabiliseren en juiste beluchting te creëren."
        }
      },
      {
        question: {
          en: "What is the quantum mechanical basis for anthocyanin color changes in pH-sensitive cake decorations, and at what pH do structural changes occur?",
          es: "¿Cuál es la base mecánico-cuántica para cambios de color de antocianinas en decoraciones de pasteles sensibles al pH, y a qué pH ocurren cambios estructurales?",
          de: "Was ist die quantenmechanische Basis für Anthocyanin-Farbwechsel in pH-empfindlichen Kuchendekorationen, und bei welchem pH treten strukturelle Änderungen auf?",
          nl: "Wat is de kwantummechanische basis voor anthocyanine kleur veranderingen in pH-gevoelige taart decoraties, en bij welke pH treden structurele veranderingen op?"
        },
        options: [
          { en: "Conjugated π-electron system changes alter light absorption; structural shifts at pH 1, 4.5, and 7", es: "Cambios en sistema π-electrónico conjugado alteran absorción de luz; cambios estructurales a pH 1, 4.5, y 7", de: "Änderungen des konjugierten π-Elektronensystems verändern Lichtabsorption; strukturelle Verschiebungen bei pH 1, 4.5, und 7", nl: "Veranderingen in geconjugeerd π-elektron systeem veranderen lichtabsorptie; structurele verschuivingen bij pH 1, 4.5, en 7" },
          { en: "Ionic bond strength varies with pH; changes only at pH 7", es: "Fuerza de enlace iónico varía con pH; cambia solo a pH 7", de: "Ionenbindungsstärke variiert mit pH; ändert sich nur bei pH 7", nl: "Ionische binding sterkte varieert met pH; verandert alleen bij pH 7" },
          { en: "Covalent bond formation creates color; changes at pH 10-12", es: "Formación de enlaces covalentes crea color; cambia a pH 10-12", de: "Kovalente Bindungsbildung erzeugt Farbe; ändert sich bei pH 10-12", nl: "Covalente binding vorming creëert kleur; verandert bij pH 10-12" },
          { en: "No quantum effects involved; purely physical changes", es: "No hay efectos cuánticos involucrados; cambios puramente físicos", de: "Keine Quanteneffekte beteiligt; rein physikalische Änderungen", nl: "Geen kwantum effecten betrokken; puur fysieke veranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Anthocyanins contain extended conjugated π-electron systems. pH changes protonate/deprotonate hydroxyl groups, altering the electronic structure and shifting absorption wavelengths. Major color transitions occur at pH 1 (red), pH 4.5 (purple), and pH 7+ (blue/green).",
          es: "Las antocianinas contienen sistemas π-electrónicos conjugados extendidos. Cambios de pH protonan/desprotonan grupos hidroxilo, alterando estructura electrónica y desplazando longitudes de onda de absorción. Transiciones de color principales ocurren a pH 1 (rojo), pH 4.5 (púrpura), y pH 7+ (azul/verde).",
          de: "Anthocyane enthalten ausgedehnte konjugierte π-Elektronensysteme. pH-Änderungen protonieren/deprotonieren Hydroxylgruppen, verändern elektronische Struktur und verschieben Absorptionswellenlängen. Hauptfarb-Übergänge treten bei pH 1 (rot), pH 4.5 (lila), und pH 7+ (blau/grün) auf.",
          nl: "Anthocyanines bevatten uitgebreide geconjugeerde π-elektron systemen. pH veranderingen protoneren/deprotoneren hydroxyl groepen, veranderen elektronische structuur en verschuiven absorptie golflengten. Hoofd kleur overgangen treden op bij pH 1 (rood), pH 4.5 (paars), en pH 7+ (blauw/groen)."
        }
      },
      {
        question: {
          en: "In computational fluid dynamics of cake baking, what is the Biot number significance, and what value indicates uniform heat distribution?",
          es: "En dinámica de fluidos computacional del horneado de pasteles, ¿cuál es la significancia del número de Biot, y qué valor indica distribución uniforme de calor?",
          de: "Was ist die Bedeutung der Biot-Zahl in der numerischen Strömungsmechanik des Kuchenbackens, und welcher Wert zeigt gleichmäßige Wärmeverteilung an?",
          nl: "In computationele vloeistofdynamica van taart bakken, wat is de Biot nummer significantie, en welke waarde duidt op uniforme warmte distributie?"
        },
        options: [
          { en: "Bi = hL/k ratio of convective to conductive heat transfer; Bi < 0.1 indicates uniform temperature distribution", es: "Bi = hL/k relación de transferencia de calor convectiva a conductiva; Bi < 0.1 indica distribución uniforme de temperatura", de: "Bi = hL/k Verhältnis konvektiver zu konduktiver Wärmeübertragung; Bi < 0.1 zeigt gleichmäßige Temperaturverteilung an", nl: "Bi = hL/k verhouding convectieve tot conductieve warmte overdracht; Bi < 0.1 duidt op uniforme temperatuur distributie" },
          { en: "Measures viscosity changes; value of 1.0 is optimal", es: "Mide cambios de viscosidad; valor de 1.0 es óptimo", de: "Misst Viskositätsänderungen; Wert von 1.0 ist optimal", nl: "Meet viscositeit veranderingen; waarde van 1.0 is optimaal" },
          { en: "Indicates moisture loss rate; higher values mean better baking", es: "Indica velocidad de pérdida de humedad; valores más altos significan mejor horneado", de: "Zeigt Feuchtigkeitsverlustraten an; höhere Werte bedeuten besseres Backen", nl: "Geeft vochtverlies snelheid aan; hogere waarden betekenen beter bakken" },
          { en: "Relates to chemical reaction rates; Bi > 10 required for proper browning", es: "Relaciona con velocidades de reacción química; Bi > 10 requerido para dorado adecuado", de: "Bezieht sich auf chemische Reaktionsgeschwindigkeiten; Bi > 10 für richtige Bräunung erforderlich", nl: "Heeft betrekking op chemische reactie snelheden; Bi > 10 vereist voor juiste bruining" }
        ],
        correct: 0,
        explanation: {
          en: "The Biot number (Bi = hL/k) compares convective heat transfer at the surface to conductive heat transfer within the cake. When Bi < 0.1, internal conduction is much faster than surface convection, resulting in uniform temperature throughout the cake during baking.",
          es: "El número de Biot (Bi = hL/k) compara transferencia de calor convectiva en superficie con transferencia conductiva dentro del pastel. Cuando Bi < 0.1, conducción interna es mucho más rápida que convección superficial, resultando en temperatura uniforme en todo el pastel durante horneado.",
          de: "Die Biot-Zahl (Bi = hL/k) vergleicht konvektive Wärmeübertragung an der Oberfläche mit konduktiver Wärmeübertragung im Kuchen. Wenn Bi < 0.1, ist interne Leitung viel schneller als Oberflächenkonvektion, was gleichmäßige Temperatur im ganzen Kuchen beim Backen ergibt.",
          nl: "Het Biot getal (Bi = hL/k) vergelijkt convectieve warmte overdracht aan het oppervlak met conductieve warmte overdracht binnen de taart. Wanneer Bi < 0.1, is interne geleiding veel sneller dan oppervlakte convectie, resulterend in uniforme temperatuur door de hele taart tijdens bakken."
        }
      },
      {
        question: {
          en: "What is the mechanism of enzymatic browning inhibition in apple-based cake fillings using ascorbic acid at the molecular level?",
          es: "¿Cuál es el mecanismo de inhibición del dorado enzimático en rellenos de pasteles base manzana usando ácido ascórbico a nivel molecular?",
          de: "Was ist der Mechanismus der enzymatischen Bräunungshemmung in apfelbasierten Kuchenfüllungen mit Ascorbinsäure auf molekularer Ebene?",
          nl: "Wat is het mechanisme van enzymatische bruining remming in appel-gebaseerde taart vullingen met ascorbinezuur op moleculair niveau?"
        },
        options: [
          { en: "Ascorbic acid reduces quinone intermediates back to phenols, breaking the oxidative chain reaction", es: "Ácido ascórbico reduce intermedios quinona de vuelta a fenoles, rompiendo reacción en cadena oxidativa", de: "Ascorbinsäure reduziert Chinon-Zwischenprodukte zurück zu Phenolen, bricht oxidative Kettenreaktion", nl: "Ascorbinezuur reduceert quinon intermediaten terug naar fenolen, breekt de oxidatieve kettingreactie" },
          { en: "Forms protective coating on fruit surface preventing oxygen contact", es: "Forma recubrimiento protector en superficie de fruta previniendo contacto con oxígeno", de: "Bildet schützende Beschichtung auf Fruchtoberfläche verhindert Sauerstoffkontakt", nl: "Vormt beschermende coating op fruit oppervlak voorkomt zuurstof contact" },
          { en: "Denatures polyphenol oxidase enzyme through pH modification", es: "Desnaturaliza enzima polifenol oxidasa por modificación de pH", de: "Denaturiert Polyphenoloxidase-Enzym durch pH-Modifikation", nl: "Denatureert polyfenol oxidase enzym door pH modificatie" },
          { en: "Chelates metal cofactors required for enzyme activity", es: "Quela cofactores metálicos requeridos para actividad enzimática", de: "Chelatiert Metallkofaktoren die für Enzymaktivität erforderlich sind", nl: "Chelateert metaal cofactoren vereist voor enzym activiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Ascorbic acid acts as a reducing agent, converting quinone intermediates formed by polyphenol oxidase back to their original phenolic compounds. This breaks the oxidative chain that leads to brown melanoidin formation, effectively preventing enzymatic browning.",
          es: "El ácido ascórbico actúa como agente reductor, convirtiendo intermedios quinona formados por polifenol oxidasa de vuelta a sus compuestos fenólicos originales. Esto rompe la cadena oxidativa que lleva a formación de melanoidinas pardas, previniendo efectivamente dorado enzimático.",
          de: "Ascorbinsäure wirkt als Reduktionsmittel, wandelt Chinon-Zwischenprodukte die von Polyphenoloxidase gebildet werden zurück zu ihren ursprünglichen phenolischen Verbindungen. Dies bricht die oxidative Kette die zu brauner Melanoidin-Bildung führt, verhindert effektiv enzymatische Bräunung.",
          nl: "Ascorbinezuur werkt als reductiemiddel, converteert quinon intermediaten gevormd door polyfenol oxidase terug naar hun oorspronkelijke fenolische verbindingen. Dit breekt de oxidatieve keten die leidt tot bruine melanoidine vorming, voorkomt effectief enzymatische bruining."
        }
      },
      {
        question: {
          en: "In fractal geometry of cake crumb structure, what is the relationship between porosity and fractal dimension in optimal texture?",
          es: "En geometría fractal de estructura de miga de pastel, ¿cuál es la relación entre porosidad y dimensión fractal en textura óptima?",
          de: "Was ist die Beziehung zwischen Porosität und fraktaler Dimension bei optimaler Textur in der Fraktalgeometrie der Kuchenkrumenstruktur?",
          nl: "In fractale geometrie van taart kruim structuur, wat is de relatie tussen porositeit en fractale dimensie in optimale textuur?"
        },
        options: [
          { en: "Fractal dimension 2.4-2.6 correlates with 60-70% porosity for optimal mouthfeel", es: "Dimensión fractal 2.4-2.6 correlaciona con 60-70% porosidad para sensación bucal óptima", de: "Fraktale Dimension 2.4-2.6 korreliert mit 60-70% Porosität für optimales Mundgefühl", nl: "Fractale dimensie 2.4-2.6 correleert met 60-70% porositeit voor optimale mondgevoel" },
          { en: "Higher fractal dimensions always indicate better texture quality", es: "Dimensiones fractales más altas siempre indican mejor calidad de textura", de: "Höhere fraktale Dimensionen zeigen immer bessere Texturqualität an", nl: "Hogere fractale dimensies duiden altijd op betere textuur kwaliteit" },
          { en: "Fractal dimension is independent of porosity in food systems", es: "Dimensión fractal es independiente de porosidad en sistemas alimentarios", de: "Fraktale Dimension ist unabhängig von Porosität in Lebensmittelsystemen", nl: "Fractale dimensie is onafhankelijk van porositeit in voedsel systemen" },
          { en: "Only integer dimensions apply to cake structure analysis", es: "Solo dimensiones enteras se aplican al análisis de estructura de pasteles", de: "Nur ganzzahlige Dimensionen gelten für Kuchenstruktur-Analyse", nl: "Alleen gehele dimensies zijn van toepassing op taart structuur analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Optimal cake crumb exhibits fractal dimension of 2.4-2.6, representing a complex, hierarchical pore structure. This correlates with 60-70% porosity, creating the ideal balance of structural integrity and tenderness that defines excellent mouthfeel and texture perception.",
          es: "Miga óptima de pastel exhibe dimensión fractal de 2.4-2.6, representando estructura de poros compleja y jerárquica. Esto correlaciona con 60-70% porosidad, creando equilibrio ideal de integridad estructural y terneza que define excelente sensación bucal y percepción de textura.",
          de: "Optimale Kuchenkrume zeigt fraktale Dimension von 2.4-2.6, repräsentiert komplexe, hierarchische Porenstruktur. Dies korreliert mit 60-70% Porosität, schafft ideale Balance struktureller Integrität und Zartheit die ausgezeichnetes Mundgefühl und Texturwahrnehmung definiert.",
          nl: "Optimale taart kruim vertoont fractale dimensie van 2.4-2.6, vertegenwoordigt complexe, hiërarchische porie structuur. Dit correleert met 60-70% porositeit, creëert ideale balans van structurele integriteit en tederheid die uitstekend mondgevoel en textuur perceptie definieert."
        }
      },
      {
        question: {
          en: "What is the critical water activity (aw) threshold for Maillard reaction initiation in low-moisture cake systems, and why does this limit exist?",
          es: "¿Cuál es el umbral crítico de actividad de agua (aw) para iniciación de reacción de Maillard en sistemas de pasteles de baja humedad, y por qué existe este límite?",
          de: "Was ist die kritische Wasseraktivitäts (aw) Schwelle für Maillard-Reaktions-Initiation in feuchtigkeitsarmen Kuchensystemen, und warum existiert diese Grenze?",
          nl: "Wat is de kritieke water activiteit (aw) drempel voor Maillardreactie initiatie in lage-vocht taart systemen, en waarom bestaat deze limiet?"
        },
        options: [
          { en: "aw 0.3-0.4 minimum required for molecular mobility and reactant interaction", es: "aw 0.3-0.4 mínimo requerido para movilidad molecular e interacción de reactantes", de: "aw 0.3-0.4 minimal erforderlich für molekulare Mobilität und Reaktanten-Wechselwirkung", nl: "aw 0.3-0.4 minimum vereist voor moleculaire mobiliteit en reactant interactie" },
          { en: "aw 0.8+ necessary for sufficient protein denaturation", es: "aw 0.8+ necesario para suficiente desnaturalización proteica", de: "aw 0.8+ notwendig für ausreichende Proteindenaturierung", nl: "aw 0.8+ noodzakelijk voor voldoende eiwit denaturatie" },
          { en: "aw 0.1 optimal for maximum reaction rate", es: "aw 0.1 óptimo para máxima velocidad de reacción", de: "aw 0.1 optimal für maximale Reaktionsgeschwindigkeit", nl: "aw 0.1 optimaal voor maximale reactie snelheid" },
          { en: "Water activity has no effect on Maillard kinetics", es: "Actividad de agua no tiene efecto en cinética de Maillard", de: "Wasseraktivität hat keinen Effekt auf Maillard-Kinetik", nl: "Water activiteit heeft geen effect op Maillard kinetiek" }
        ],
        correct: 0,
        explanation: {
          en: "Maillard reactions require minimum water activity of 0.3-0.4 for reactant mobility and proper molecular interactions. Below this threshold, the system becomes too viscous and reactants cannot move freely enough to interact, despite the presence of amino acids and reducing sugars.",
          es: "Las reacciones de Maillard requieren actividad de agua mínima de 0.3-0.4 para movilidad de reactantes e interacciones moleculares apropiadas. Bajo este umbral, el sistema se vuelve muy viscoso y reactantes no pueden moverse libremente para interactuar, a pesar de presencia de aminoácidos y azúcares reductores.",
          de: "Maillard-Reaktionen erfordern minimale Wasseraktivität von 0.3-0.4 für Reaktanten-Mobilität und richtige molekulare Wechselwirkungen. Unter dieser Schwelle wird das System zu viskos und Reaktanten können nicht frei genug bewegen um zu interagieren, trotz Anwesenheit von Aminosäuren und reduzierenden Zuckern.",
          nl: "Maillardreacties vereisen minimale water activiteit van 0.3-0.4 voor reactant mobiliteit en juiste moleculaire interacties. Onder deze drempel wordt het systeem te viskeus en kunnen reactanten niet vrij genoeg bewegen om te interacteren, ondanks aanwezigheid van aminozuren en reducerende suikers."
        }
      },
      {
        question: {
          en: "In the crystallography of chocolate polymorphs, what distinguishes Form VI crystal structure from Form V, and under what conditions does it form?",
          es: "En cristalografía de polimorfos de chocolate, ¿qué distingue la estructura cristalina Forma VI de Forma V, y bajo qué condiciones se forma?",
          de: "Was unterscheidet Form-VI-Kristallstruktur von Form V in der Kristallographie von Schokoladen-Polymorphen, und unter welchen Bedingungen bildet sie sich?",
          nl: "In de kristallografie van chocolade polymorfen, wat onderscheidt Vorm VI kristalstructuur van Vorm V, en onder welke omstandigheden vormt het zich?"
        },
        options: [
          { en: "Form VI has tighter packing with 17.3Å d-spacing vs Form V's 16.8Å; forms during bloom at high temperatures", es: "Forma VI tiene empaque más apretado con d-espaciado de 17.3Å vs 16.8Å de Forma V; se forma durante florecimiento a altas temperaturas", de: "Form VI hat dichtere Packung mit 17.3Å d-Abstand vs Form V's 16.8Å; bildet sich während Reif bei hohen Temperaturen", nl: "Vorm VI heeft dichtere pakking met 17.3Å d-afstand vs Vorm V's 16.8Å; vormt tijdens bloei bij hoge temperaturen" },
          { en: "Form VI is identical to Form V in all structural aspects", es: "Forma VI es idéntica a Forma V en todos aspectos estructurales", de: "Form VI ist identisch mit Form V in allen strukturellen Aspekten", nl: "Vorm VI is identiek aan Vorm V in alle structurele aspecten" },
          { en: "Form VI only exists in white chocolate systems", es: "Forma VI solo existe en sistemas de chocolate blanco", de: "Form VI existiert nur in weißen Schokoladensystemen", nl: "Vorm VI bestaat alleen in witte chocolade systemen" },
          { en: "Form VI has lower density than all other forms", es: "Forma VI tiene menor densidad que todas otras formas", de: "Form VI hat niedrigere Dichte als alle anderen Formen", nl: "Vorm VI heeft lagere dichtheid dan alle andere vormen" }
        ],
        correct: 0,
        explanation: {
          en: "Form VI crystals have a distinctive triclinic structure with larger d-spacing (17.3Å vs 16.8Å for Form V). It forms when properly tempered chocolate is exposed to elevated temperatures (26-30°C) over time, representing the thermodynamically most stable polymorph that causes bloom.",
          es: "Los cristales Forma VI tienen estructura triclínica distintiva con mayor d-espaciado (17.3Å vs 16.8Å para Forma V). Se forma cuando chocolate bien templado se expone a temperaturas elevadas (26-30°C) con tiempo, representando el polimorfo termodinámicamente más estable que causa florecimiento.",
          de: "Form-VI-Kristalle haben eine charakteristische trikline Struktur mit größerem d-Abstand (17.3Å vs 16.8Å für Form V). Sie bildet sich wenn richtig temperierte Schokolade über Zeit erhöhten Temperaturen (26-30°C) ausgesetzt wird, repräsentiert thermodynamisch stabilsten Polymorph der Reif verursacht.",
          nl: "Vorm VI kristallen hebben een onderscheidende triklinische structuur met grotere d-afstand (17.3Å vs 16.8Å voor Vorm V). Het vormt wanneer goed getemperde chocolade over tijd wordt blootgesteld aan verhoogde temperaturen (26-30°C), vertegenwoordigt de thermodynamisch meest stabiele polymorf die bloei veroorzaakt."
        }
      },
      {
        question: {
          en: "What is the mathematical relationship between foam density and overrun in cake batter aeration, and what is the theoretical maximum overrun?",
          es: "¿Cuál es la relación matemática entre densidad de espuma y sobrecocimiento en aireación de masa de pastel, y cuál es el sobrecocimiento máximo teórico?",
          de: "Was ist die mathematische Beziehung zwischen Schaumdichte und Überstand bei Kuchenteig-Belüftung, und was ist der theoretische maximale Überstand?",
          nl: "Wat is de wiskundige relatie tussen schuim dichtheid en overrun in taartbeslag beluchting, en wat is de theoretische maximale overrun?"
        },
        options: [
          { en: "Overrun % = (ρ₀ - ρₑ)/ρₑ × 100; theoretical maximum approaches 1000% as foam density approaches air density", es: "% Sobrecocimiento = (ρ₀ - ρₑ)/ρₑ × 100; máximo teórico se aproxima a 1000% cuando densidad de espuma se aproxima a densidad del aire", de: "Überstand % = (ρ₀ - ρₑ)/ρₑ × 100; theoretisches Maximum nähert sich 1000% wenn Schaumdichte sich Luftdichte nähert", nl: "Overrun % = (ρ₀ - ρₑ)/ρₑ × 100; theoretische maximum nadert 1000% als schuim dichtheid lucht dichtheid nadert" },
          { en: "Linear relationship with 50% maximum possible overrun", es: "Relación lineal con 50% máximo sobrecocimiento posible", de: "Lineare Beziehung mit 50% maximalem möglichen Überstand", nl: "Lineaire relatie met 50% maximum mogelijke overrun" },
          { en: "Exponential decay function with 200% upper limit", es: "Función de decaimiento exponencial con límite superior de 200%", de: "Exponential-Abfall-Funktion mit 200% Obergrenze", nl: "Exponentiële verval functie met 200% bovengrens" },
          { en: "No mathematical relationship exists between these parameters", es: "No existe relación matemática entre estos parámetros", de: "Keine mathematische Beziehung zwischen diesen Parametern existiert", nl: "Geen wiskundige relatie bestaat tussen deze parameters" }
        ],
        correct: 0,
        explanation: {
          en: "Overrun percentage is calculated as (ρ₀ - ρₑ)/ρₑ × 100, where ρ₀ is original density and ρₑ is foam density. As foam density approaches that of air (~0.001 g/cm³), overrun theoretically approaches 1000%, though practical limits are much lower due to structural constraints.",
          es: "El porcentaje de sobrecocimiento se calcula como (ρ₀ - ρₑ)/ρₑ × 100, donde ρ₀ es densidad original y ρₑ es densidad de espuma. Como densidad de espuma se aproxima a la del aire (~0.001 g/cm³), sobrecocimiento teóricamente se aproxima a 1000%, aunque límites prácticos son mucho menores debido a restricciones estructurales.",
          de: "Überstand-Prozentsatz wird als (ρ₀ - ρₑ)/ρₑ × 100 berechnet, wobei ρ₀ ursprüngliche Dichte und ρₑ Schaumdichte ist. Da Schaumdichte sich der von Luft (~0.001 g/cm³) nähert, nähert sich Überstand theoretisch 1000%, obwohl praktische Grenzen viel niedriger sind aufgrund struktureller Beschränkungen.",
          nl: "Overrun percentage wordt berekend als (ρ₀ - ρₑ)/ρₑ × 100, waar ρ₀ oorspronkelijke dichtheid is en ρₑ schuim dichtheid. Als schuim dichtheid die van lucht (~0.001 g/cm³) nadert, nadert overrun theoretisch 1000%, hoewel praktische limieten veel lager zijn door structurele beperkingen."
        }
      },
      {
        question: {
          en: "In advanced starch chemistry, what is the difference between amylose and amylopectin gelation mechanisms in cake batters?",
          es: "En química avanzada de almidón, ¿cuál es la diferencia entre mecanismos de gelificación de amilosa y amilopectina en masas de pasteles?",
          de: "Was ist der Unterschied zwischen Amylose- und Amylopektin-Gelierungsmechanismen in Kuchenteigen in der fortgeschrittenen Stärkechemie?",
          nl: "In geavanceerde zetmeel chemie, wat is het verschil tussen amylose en amylopectine gelering mechanismen in taartbeslagen?"
        },
        options: [
          { en: "Amylose forms hydrogen-bonded networks through linear chains; amylopectin swells via branch point entanglement", es: "Amilosa forma redes unidas por hidrógeno a través de cadenas lineales; amilopectina se hincha por enredamiento de puntos de ramificación", de: "Amylose bildet wasserstoffgebundene Netzwerke durch lineare Ketten; Amylopektin schwillt via Verzweigungspunkt-Verschlingung", nl: "Amylose vormt waterstofgebonden netwerken door lineaire ketens; amylopectine zwelt via vertakkingspunt verstrengeling" },
          { en: "Both polymers gel through identical mechanisms", es: "Ambos polímeros gelifican por mecanismos idénticos", de: "Beide Polymere gelieren durch identische Mechanismen", nl: "Beide polymeren geleren door identieke mechanismen" },
          { en: "Amylopectin forms strong gels; amylose only provides viscosity", es: "Amilopectina forma geles fuertes; amilosa solo proporciona viscosidad", de: "Amylopektin bildet starke Gele; Amylose bietet nur Viskosität", nl: "Amylopectine vormt sterke gelen; amylose biedt alleen viscositeit" },
          { en: "Neither component contributes to gel formation in cakes", es: "Ningún componente contribuye a formación de gel en pasteles", de: "Keine Komponente trägt zur Gelbildung in Kuchen bei", nl: "Geen component draagt bij aan gel vorming in taarten" }
        ],
        correct: 0,
        explanation: {
          en: "Amylose (linear glucose chains) forms strong gels through intermolecular hydrogen bonding and chain entanglement. Amylopectin (branched structure) swells and provides viscosity through physical entanglement of branch points but forms weaker gel networks due to steric hindrance from branches.",
          es: "Amilosa (cadenas lineales de glucosa) forma geles fuertes a través de enlaces de hidrógeno intermoleculares y enredamiento de cadenas. Amilopectina (estructura ramificada) se hincha y proporciona viscosidad por enredamiento físico de puntos de ramificación pero forma redes de gel más débiles debido a impedimento estérico de ramificaciones.",
          de: "Amylose (lineare Glukoseketten) bildet starke Gele durch intermolekulare Wasserstoffbrücken und Kettenverschlingung. Amylopektin (verzweigte Struktur) schwillt und bietet Viskosität durch physikalische Verschlingung von Verzweigungspunkten aber bildet schwächere Gelnetzwerke aufgrund sterischer Hinderung von Verzweigungen.",
          nl: "Amylose (lineaire glucose ketens) vormt sterke gelen door intermoleculaire waterstofbinding en keten verstrengeling. Amylopectine (vertakte structuur) zwelt en biedt viscositeit door fysieke verstrengeling van vertakkingspunten maar vormt zwakkere gel netwerken door sterische hindering van vertakkingen."
        }
      },
      {
        question: {
          en: "What is the thermodynamic driving force behind the formation of chocolate bloom, and what is the activation energy for this transition?",
          es: "¿Cuál es la fuerza impulsora termodinámica detrás de la formación de florecimiento de chocolate, y cuál es la energía de activación para esta transición?",
          de: "Was ist die thermodynamische Triebkraft hinter der Bildung von Schokoladenreif, und was ist die Aktivierungsenergie für diesen Übergang?",
          nl: "Wat is de thermodynamische drijvende kracht achter de vorming van chocolade bloei, en wat is de activeringsenergie voor deze overgang?"
        },
        options: [
          { en: "Gibbs free energy minimization drives Form V → Form VI transition; activation energy ~180-200 kJ/mol", es: "Minimización de energía libre de Gibbs impulsa transición Forma V → Forma VI; energía de activación ~180-200 kJ/mol", de: "Gibbs-freie-Energie-Minimierung treibt Form V → Form VI Übergang; Aktivierungsenergie ~180-200 kJ/mol", nl: "Gibbs vrije energie minimalisatie drijft Vorm V → Vorm VI overgang; activeringsenergie ~180-200 kJ/mol" },
          { en: "Entropy increase is the sole driving force; activation energy is negligible", es: "Aumento de entropía es única fuerza impulsora; energía de activación es despreciable", de: "Entropiezunahme ist alleinige Triebkraft; Aktivierungsenergie ist vernachlässigbar", nl: "Entropie toename is de enige drijvende kracht; activeringsenergie is verwaarloosbaar" },
          { en: "Surface tension effects dominate; activation energy >500 kJ/mol", es: "Efectos de tensión superficial dominan; energía de activación >500 kJ/mol", de: "Oberflächenspannungseffekte dominieren; Aktivierungsenergie >500 kJ/mol", nl: "Oppervlaktespanning effecten domineren; activeringsenergie >500 kJ/mol" },
          { en: "No thermodynamic basis for bloom formation exists", es: "No existe base termodinámica para formación de florecimiento", de: "Keine thermodynamische Basis für Reifbildung existiert", nl: "Geen thermodynamische basis voor bloei vorming bestaat" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate bloom is driven by the thermodynamic tendency to minimize Gibbs free energy through the transition from metastable Form V to the most stable Form VI polymorph. The activation energy for this solid-state phase transformation is approximately 180-200 kJ/mol, requiring thermal energy or time for completion.",
          es: "El florecimiento de chocolate es impulsado por la tendencia termodinámica a minimizar energía libre de Gibbs a través de transición de Forma V metaestable a polimorfo Forma VI más estable. La energía de activación para esta transformación de fase estado sólido es aproximadamente 180-200 kJ/mol, requiriendo energía térmica o tiempo para completarse.",
          de: "Schokoladenreif wird von der thermodynamischen Tendenz angetrieben, Gibbs-freie Energie durch Übergang von metastabiler Form V zum stabilsten Form-VI-Polymorph zu minimieren. Die Aktivierungsenergie für diese Festkörper-Phasentransformation beträgt etwa 180-200 kJ/mol, erfordert thermische Energie oder Zeit zur Vollendung.",
          nl: "Chocolade bloei wordt gedreven door de thermodynamische neiging om Gibbs vrije energie te minimaliseren door de overgang van metastabiele Vorm V naar de meest stabiele Vorm VI polymorf. De activeringsenergie voor deze vaste-stof fase transformatie is ongeveer 180-200 kJ/mol, vereist thermische energie of tijd voor voltooiing."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism behind protein denaturation in egg whites during meringue formation, and why does copper stabilize the foam structure?",
          es: "¿Cuál es el mecanismo molecular detrás de la desnaturalización de proteínas en claras de huevo durante la formación de merengue, y por qué el cobre estabiliza la estructura de espuma?",
          de: "Was ist der molekulare Mechanismus hinter Proteindenaturierung in Eiweiß während Baiserschaumbildung, und warum stabilisiert Kupfer die Schaumstruktur?",
          nl: "Wat is het moleculaire mechanisme achter eiwit denaturatie in eiwitten tijdens meringue vorming, en waarom stabiliseert koper de schuimstructuur?"
        },
        options: [
          { en: "Copper prevents oxidation and forms disulfide cross-links with cysteine residues", es: "El cobre previene oxidación y forma enlaces cruzados disulfuro con residuos de cisteína", de: "Kupfer verhindert Oxidation und bildet Disulfid-Querverbindungen mit Cystein-Resten", nl: "Koper voorkomt oxidatie en vormt disulfide kruisverbindingen met cysteïne residuen" },
          { en: "Copper only changes the color of the meringue", es: "El cobre solo cambia el color del merengue", de: "Kupfer ändert nur die Farbe des Baisers", nl: "Koper verandert alleen de kleur van de meringue" },
          { en: "Copper makes the mixture cook faster", es: "El cobre hace que la mezcla se cocine más rápido", de: "Kupfer lässt die Mischung schneller kochen", nl: "Koper zorgt ervoor dat het mengsel sneller kookt" },
          { en: "Copper has no effect on protein structure", es: "El cobre no tiene efecto en la estructura proteica", de: "Kupfer hat keinen Effekt auf die Proteinstruktur", nl: "Koper heeft geen effect op eiwitstructuur" }
        ],
        correct: 0,
        explanation: {
          en: "During whipping, mechanical stress unfolds ovalbumin and conalbumin proteins, exposing hydrophobic regions and sulfur-containing amino acids. Copper ions catalyze oxidation of cysteine residues, forming intermolecular disulfide bonds that create a more stable protein network, resulting in stronger, longer-lasting foam structure.",
          es: "Durante el batido, estrés mecánico despliega proteínas ovalbúmina y conalbúmina, exponiendo regiones hidrófobas y aminoácidos conteniendo azufre. Iones de cobre catalizan oxidación de residuos de cisteína, formando enlaces disulfuro intermoleculares que crean red proteica más estable, resultando en estructura de espuma más fuerte y duradera.",
          de: "Während des Schlagens entfalten mechanische Belastungen Ovalbumin- und Conalbumin-Proteine, wodurch hydrophobe Regionen und schwefelhaltige Aminosäuren freigelegt werden. Kupferionen katalysieren die Oxidation von Cystein-Resten und bilden intermolekulare Disulfidbindungen, die ein stabileres Proteinnetzwerk schaffen, was zu einer stärkeren, langlebigeren Schaumstruktur führt.",
          nl: "Tijdens het kloppen vouwen mechanische spanningen ovalbumine en conalbumine eiwitten open, waardoor hydrofobe gebieden en zwavel-bevattende aminozuren worden blootgesteld. Koper ionen katalyseren oxidatie van cysteïne residuen, vormend intermoleculaire disulfide bindingen die een stabielere eiwit netwerk creëren, resulterend in sterkere, langer durende schuimstructuur."
        }
      },
      {
        question: {
          en: "In molecular gastronomy applications for desserts, what is the critical concentration threshold for agar-agar to achieve thermoreversible gel formation, and how does its gel strength compare to gelatin?",
          es: "En aplicaciones de gastronomía molecular para postres, ¿cuál es el umbral de concentración crítica para agar-agar para lograr formación de gel termoreverible, y cómo se compara su fuerza de gel con la gelatina?",
          de: "In molekulargastronomischen Anwendungen für Desserts, was ist die kritische Konzentrationsgrenze für Agar-Agar um thermoreversible Gelbildung zu erreichen, und wie vergleicht sich seine Gelstärke mit Gelatine?",
          nl: "In moleculaire gastronomie toepassingen voor desserts, wat is de kritische concentratiedrempel voor agar-agar om thermoreversibele gelvorming te bereiken, en hoe vergelijkt zijn gelsterkte met gelatine?"
        },
        options: [
          { en: "0.5-1% concentration; 10x stronger than gelatin; sets at 35°C, melts at 85°C", es: "Concentración 0.5-1%; 10x más fuerte que gelatina; cuaja a 35°C, se derrite a 85°C", de: "0,5-1% Konzentration; 10x stärker als Gelatine; erstarrt bei 35°C, schmilzt bei 85°C", nl: "0.5-1% concentratie; 10x sterker dan gelatine; stolt bij 35°C, smelt bij 85°C" },
          { en: "5% concentration required; same strength as gelatin", es: "Se requiere concentración 5%; misma fuerza que gelatina", de: "5% Konzentration erforderlich; gleiche Stärke wie Gelatine", nl: "5% concentratie vereist; zelfde sterkte als gelatine" },
          { en: "0.1% concentration; weaker than gelatin", es: "Concentración 0.1%; más débil que gelatina", de: "0,1% Konzentration; schwächer als Gelatine", nl: "0.1% concentratie; zwakker dan gelatine" },
          { en: "Agar-agar cannot form thermoreversible gels", es: "Agar-agar no puede formar geles termoreveribles", de: "Agar-Agar kann keine thermoreversiblen Gele bilden", nl: "Agar-agar kan geen thermoreversibele gels vormen" }
        ],
        correct: 0,
        explanation: {
          en: "Agar-agar requires only 0.5-1% concentration to form strong gels (compared to 1.5-2% for gelatin), with gel strength approximately 10 times higher. Its unique hysteresis allows setting at 35°C but remaining stable until 85°C, making it ideal for warm dessert applications and molecular gastronomy techniques requiring heat stability.",
          es: "Agar-agar requiere solo concentración 0.5-1% para formar geles fuertes (comparado con 1.5-2% para gelatina), con fuerza de gel aproximadamente 10 veces mayor. Su histéresis única permite cuajar a 35°C pero permanecer estable hasta 85°C, haciéndolo ideal para aplicaciones de postres tibios y técnicas de gastronomía molecular que requieren estabilidad térmica.",
          de: "Agar-Agar benötigt nur 0,5-1% Konzentration um starke Gele zu bilden (verglichen mit 1,5-2% für Gelatine), mit etwa 10-fach höherer Gelstärke. Seine einzigartige Hysterese ermöglicht Erstarren bei 35°C aber Stabilität bis 85°C, ideal für warme Dessert-Anwendungen und molekulargastronomische Techniken mit Hitzestabilität.",
          nl: "Agar-agar vereist slechts 0.5-1% concentratie om sterke gels te vormen (vergeleken met 1.5-2% voor gelatine), met gelsterkte ongeveer 10 keer hoger. Zijn unieke hysteresis staat stolling toe bij 35°C maar blijft stabiel tot 85°C, waardoor het ideaal is voor warme dessert toepassingen en moleculaire gastronomie technieken die hittebestendigheid vereisen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();