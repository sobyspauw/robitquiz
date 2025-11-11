(function() {
    'use strict';

    const level3Data = {
        name: {
            en: "Advanced Pudding Techniques",
            es: "Técnicas Avanzadas de Pudín",
            de: "Fortgeschrittene Pudding-Techniken",
            nl: "Geavanceerde Pudding Technieken"
        },
        questions: [
            {
                question: {
                    en: "What is the critical temperature range for tempering chocolate in chocolate pudding to achieve proper crystal formation?",
                    es: "¿Cuál es el rango de temperatura crítico para templar chocolate en pudín de chocolate para lograr la formación adecuada de cristales?",
                    de: "Was ist der kritische Temperaturbereich für das Temperieren von Schokolade in Schokoladenpudding, um die richtige Kristallbildung zu erreichen?",
                    nl: "Wat is het kritieke temperatuurbereik voor het temperen van chocolade in chocoladepudding om de juiste kristalvorming te verkrijgen?"
                },
                options: [
                    { en: "26-28°C (79-82°F)", es: "26-28°C (79-82°F)", de: "26-28°C (79-82°F)", nl: "26-28°C (79-82°F)" },
                    { en: "30-32°C (86-90°F)", es: "30-32°C (86-90°F)", de: "30-32°C (86-90°F)", nl: "30-32°C (86-90°F)" },
                    { en: "35-37°C (95-99°F)", es: "35-37°C (95-99°F)", de: "35-37°C (95-99°F)", nl: "35-37°C (95-99°F)" },
                    { en: "40-42°C (104-108°F)", es: "40-42°C (104-108°F)", de: "40-42°C (104-108°F)", nl: "40-42°C (104-108°F)" }
                ],
                correct: 1,
                explanation: {
                    en: "The ideal tempering range for chocolate in puddings is 30-32°C, which allows for stable beta crystal formation while maintaining workability for incorporation into the custard base.",
                    es: "El rango ideal de templado para chocolate en pudines es 30-32°C, que permite la formación estable de cristales beta mientras mantiene la trabajabilidad para la incorporación en la base de crema.",
                    de: "Der ideale Temperierbereich für Schokolade in Puddings ist 30-32°C, der eine stabile Beta-Kristallbildung ermöglicht und gleichzeitig die Verarbeitbarkeit für die Einarbeitung in die Puddingbasis aufrechterhält.",
                    nl: "Het ideale tempereerbereik voor chocolade in puddings is 30-32°C, wat stabiele bèta-kristalvorming mogelijk maakt terwijl de verwerkbaarheid voor incorporatie in de custardbase behouden blijft."
                }
            },
            {
                question: {
                    en: "In molecular gastronomy puddings, what concentration of agar-agar is required to create a firm gel that melts at mouth temperature?",
                    es: "En pudines de gastronomía molecular, ¿qué concentración de agar-agar se requiere para crear un gel firme que se derrita a temperatura bucal?",
                    de: "In der Molekulargastronomie-Puddings, welche Konzentration von Agar-Agar ist erforderlich, um ein festes Gel zu schaffen, das bei Mundtemperatur schmilzt?",
                    nl: "In moleculaire gastronomie puddings, welke concentratie agar-agar is vereist om een stevige gel te creëren die smelt bij mondtemperatuur?"
                },
                options: [
                    { en: "0.1-0.3%", es: "0.1-0.3%", de: "0.1-0.3%", nl: "0.1-0.3%" },
                    { en: "0.5-0.8%", es: "0.5-0.8%", de: "0.5-0.8%", nl: "0.5-0.8%" },
                    { en: "1.0-1.5%", es: "1.0-1.5%", de: "1.0-1.5%", nl: "1.0-1.5%" },
                    { en: "2.0-2.5%", es: "2.0-2.5%", de: "2.0-2.5%", nl: "2.0-2.5%" }
                ],
                correct: 1,
                explanation: {
                    en: "Agar-agar at 0.5-0.8% concentration creates the perfect balance of structural integrity and thermal reversibility, setting at room temperature but melting pleasantly at 37°C mouth temperature.",
                    es: "El agar-agar a concentración de 0.5-0.8% crea el equilibrio perfecto entre integridad estructural y reversibilidad térmica, cuajando a temperatura ambiente pero derritiéndose agradablemente a 37°C de temperatura bucal.",
                    de: "Agar-Agar bei 0,5-0,8% Konzentration schafft die perfekte Balance zwischen struktureller Integrität und thermischer Reversibilität, setzt bei Raumtemperatur an, schmilzt aber angenehm bei 37°C Mundtemperatur.",
                    nl: "Agar-agar bij 0,5-0,8% concentratie creëert de perfecte balans tussen structurele integriteit en thermische omkeerbaarheid, stolt bij kamertemperatuur maar smelt aangenaam bij 37°C mondtemperatuur."
                }
            },
            {
                question: {
                    en: "What is the optimal pH range for pectin gelification in fruit puddings to achieve maximum gel strength?",
                    es: "¿Cuál es el rango de pH óptimo para la gelificación de pectina en pudines de fruta para lograr la máxima fuerza del gel?",
                    de: "Was ist der optimale pH-Bereich für die Pektin-Gelbildung in Fruchtpuddings, um maximale Gelstärke zu erreichen?",
                    nl: "Wat is het optimale pH-bereik voor pectine gelering in fruitpuddings om maximale gelsterkte te bereiken?"
                },
                options: [
                    { en: "pH 2.8-3.2", es: "pH 2.8-3.2", de: "pH 2.8-3.2", nl: "pH 2.8-3.2" },
                    { en: "pH 3.8-4.2", es: "pH 3.8-4.2", de: "pH 3.8-4.2", nl: "pH 3.8-4.2" },
                    { en: "pH 5.0-5.5", es: "pH 5.0-5.5", de: "pH 5.0-5.5", nl: "pH 5.0-5.5" },
                    { en: "pH 6.5-7.0", es: "pH 6.5-7.0", de: "pH 6.5-7.0", nl: "pH 6.5-7.0" }
                ],
                correct: 0,
                explanation: {
                    en: "Pectin achieves optimal gelification in the acidic range of pH 2.8-3.2, where hydrogen bonding between pectin molecules is strongest and calcium-pectin interactions are most stable.",
                    es: "La pectina logra una gelificación óptima en el rango ácido de pH 2.8-3.2, donde los enlaces de hidrógeno entre moléculas de pectina son más fuertes y las interacciones calcio-pectina son más estables.",
                    de: "Pektin erreicht optimale Gelbildung im sauren Bereich von pH 2,8-3,2, wo Wasserstoffbrücken zwischen Pektinmolekülen am stärksten sind und Calcium-Pektin-Wechselwirkungen am stabilsten sind.",
                    nl: "Pectine bereikt optimale gelering in het zure bereik van pH 2,8-3,2, waar waterstofbruggen tussen pectinemoleculen het sterkst zijn en calcium-pectine interacties het meest stabiel zijn."
                }
            },
            {
                question: {
                    en: "In enzymatic browning prevention for fruit puddings, what is the mechanism of action of ascorbic acid?",
                    es: "En la prevención del pardeamiento enzimático para pudines de fruta, ¿cuál es el mecanismo de acción del ácido ascórbico?",
                    de: "Bei der Verhinderung der enzymatischen Bräunung für Fruchtpuddings, was ist der Wirkungsmechanismus der Ascorbinsäure?",
                    nl: "Bij de preventie van enzymatische bruining voor fruitpuddings, wat is het werkingsmechanisme van ascorbinezuur?"
                },
                options: [
                    { en: "Chelation of copper ions in polyphenol oxidase", es: "Quelación de iones de cobre en la polifenol oxidasa", de: "Chelatierung von Kupferionen in der Polyphenoloxidase", nl: "Chelatie van koperionen in polyfenoloxidase" },
                    { en: "Reduction of quinones back to phenols", es: "Reducción de quinonas de vuelta a fenoles", de: "Reduktion von Chinonen zurück zu Phenolen", nl: "Reductie van chinonen terug naar fenolen" },
                    { en: "pH modification to denature enzymes", es: "Modificación del pH para desnaturalizar enzimas", de: "pH-Modifikation zur Denaturierung von Enzymen", nl: "pH-modificatie om enzymen te denatureren" },
                    { en: "Competitive inhibition of substrate binding", es: "Inhibición competitiva de la unión del sustrato", de: "Kompetitive Hemmung der Substratbindung", nl: "Competitieve remming van substraatbinding" }
                ],
                correct: 1,
                explanation: {
                    en: "Ascorbic acid acts as a reducing agent, converting the brown quinone compounds back to colorless phenolic compounds, effectively reversing the browning reaction and maintaining the natural color of fruit puddings.",
                    es: "El ácido ascórbico actúa como agente reductor, convirtiendo los compuestos quinónicos marrones de vuelta a compuestos fenólicos incoloros, revirtiendo efectivamente la reacción de pardeamiento y manteniendo el color natural de los pudines de fruta.",
                    de: "Ascorbinsäure wirkt als Reduktionsmittel und wandelt die braunen Chinonverbindungen zurück in farblose phenolische Verbindungen um, wodurch die Bräunungsreaktion effektiv umgekehrt und die natürliche Farbe von Fruchtpuddings erhalten wird.",
                    nl: "Ascorbinezuur werkt als reductiemiddel, waarbij de bruine chinonverbindingen terug worden omgezet naar kleurloze fenolische verbindingen, waardoor de bruiningsreactie effectief wordt omgekeerd en de natuurlijke kleur van fruitpuddings behouden blijft."
                }
            },
            {
                question: {
                    en: "What is the water activity (aw) threshold below which most pathogenic bacteria cannot grow in shelf-stable puddings?",
                    es: "¿Cuál es el umbral de actividad del agua (aw) por debajo del cual la mayoría de las bacterias patógenas no pueden crecer en pudines estables en estantería?",
                    de: "Was ist der Wasseraktivitäts-(aw)-Schwellenwert, unter dem die meisten pathogenen Bakterien in haltbaren Puddings nicht wachsen können?",
                    nl: "Wat is de wateractiviteit (aw) drempel waaronder de meeste pathogene bacteriën niet kunnen groeien in houdbare puddings?"
                },
                options: [
                    { en: "aw < 0.95", es: "aw < 0.95", de: "aw < 0.95", nl: "aw < 0.95" },
                    { en: "aw < 0.90", es: "aw < 0.90", de: "aw < 0.90", nl: "aw < 0.90" },
                    { en: "aw < 0.85", es: "aw < 0.85", de: "aw < 0.85", nl: "aw < 0.85" },
                    { en: "aw < 0.80", es: "aw < 0.80", de: "aw < 0.80", nl: "aw < 0.80" }
                ],
                correct: 1,
                explanation: {
                    en: "Water activity below 0.90 effectively inhibits the growth of most pathogenic bacteria including Salmonella and E. coli, making it a critical control point for shelf-stable pudding production.",
                    es: "La actividad del agua por debajo de 0.90 inhibe efectivamente el crecimiento de la mayoría de las bacterias patógenas incluyendo Salmonella y E. coli, convirtiéndolo en un punto de control crítico para la producción de pudines estables en estantería.",
                    de: "Wasseraktivität unter 0,90 hemmt effektiv das Wachstum der meisten pathogenen Bakterien einschließlich Salmonellen und E. coli, was es zu einem kritischen Kontrollpunkt für die Produktion haltbarer Puddings macht.",
                    nl: "Wateractiviteit onder 0,90 remt effectief de groei van de meeste pathogene bacteriën inclusief Salmonella en E. coli, waardoor het een kritiek controlepunt wordt voor de productie van houdbare puddings."
                }
            },
            {
                question: {
                    en: "In spherification techniques for modern puddings, what is the optimal calcium chloride concentration for creating caviar-like spheres?",
                    es: "En técnicas de esferificación para pudines modernos, ¿cuál es la concentración óptima de cloruro de calcio para crear esferas similares al caviar?",
                    de: "Bei Sphärifizierungstechniken für moderne Puddings, was ist die optimale Calciumchlorid-Konzentration für die Herstellung kaviarähnlicher Kugeln?",
                    nl: "Bij sferificatietechnieken voor moderne puddings, wat is de optimale calciumchloride concentratie voor het creëren van kaviaarachtige bolletjes?"
                },
                options: [
                    { en: "0.1% w/w", es: "0.1% p/p", de: "0.1% w/w", nl: "0.1% w/w" },
                    { en: "0.5% w/w", es: "0.5% p/p", de: "0.5% w/w", nl: "0.5% w/w" },
                    { en: "1.0% w/w", es: "1.0% p/p", de: "1.0% w/w", nl: "1.0% w/w" },
                    { en: "2.0% w/w", es: "2.0% p/p", de: "2.0% w/w", nl: "2.0% w/w" }
                ],
                correct: 2,
                explanation: {
                    en: "A 1.0% calcium chloride solution provides the optimal ionic strength for rapid alginate polymerization while maintaining spherical integrity and preventing over-gelification that would create tough textures.",
                    es: "Una solución de cloruro de calcio al 1.0% proporciona la fuerza iónica óptima para la polimerización rápida del alginato mientras mantiene la integridad esférica y previene la sobre-gelificación que crearía texturas duras.",
                    de: "Eine 1,0%ige Calciumchloridlösung bietet die optimale Ionenstärke für schnelle Alginatpolymerisation bei gleichzeitiger Aufrechterhaltung der sphärischen Integrität und Verhinderung von Über-Gelbildung, die harte Texturen erzeugen würde.",
                    nl: "Een 1,0% calciumchloride-oplossing biedt de optimale ionsterkte voor snelle alginaatpolymerisatie terwijl de sferische integriteit behouden blijft en overgelering wordt voorkomen die taaie texturen zou creëren."
                }
            },
            {
                question: {
                    en: "What is the critical shear rate range for creating smooth, lump-free custard puddings during mixing?",
                    es: "¿Cuál es el rango de velocidad de cizallamiento crítico para crear pudines de crema suaves y sin grumos durante el mezclado?",
                    de: "Was ist der kritische Schergeschwindigkeitsbereich für die Herstellung glatter, klumpenfreier Puddingcremes beim Mischen?",
                    nl: "Wat is het kritieke afschuifsnelheidbereik voor het creëren van gladde, klontvrije custardpuddings tijdens het mengen?"
                },
                options: [
                    { en: "10-50 s⁻¹", es: "10-50 s⁻¹", de: "10-50 s⁻¹", nl: "10-50 s⁻¹" },
                    { en: "100-200 s⁻¹", es: "100-200 s⁻¹", de: "100-200 s⁻¹", nl: "100-200 s⁻¹" },
                    { en: "500-800 s⁻¹", es: "500-800 s⁻¹", de: "500-800 s⁻¹", nl: "500-800 s⁻¹" },
                    { en: "1000-1500 s⁻¹", es: "1000-1500 s⁻¹", de: "1000-1500 s⁻¹", nl: "1000-1500 s⁻¹" }
                ],
                correct: 1,
                explanation: {
                    en: "Shear rates of 100-200 s⁻¹ provide sufficient energy to break down starch granule agglomerates and ensure uniform hydration without creating excessive foam or damaging the protein structure.",
                    es: "Las velocidades de cizallamiento de 100-200 s⁻¹ proporcionan energía suficiente para descomponer aglomerados de gránulos de almidón y asegurar hidratación uniforme sin crear espuma excesiva o dañar la estructura proteica.",
                    de: "Schergeschwindigkeiten von 100-200 s⁻¹ bieten ausreichend Energie, um Stärkekörner-Agglomerate aufzubrechen und gleichmäßige Hydratation sicherzustellen, ohne übermäßigen Schaum zu erzeugen oder die Proteinstruktur zu beschädigen.",
                    nl: "Afschuifsnelheden van 100-200 s⁻¹ bieden voldoende energie om zetmeelkorrel-agglomeraten af te breken en uniforme hydratie te verzekeren zonder overmatig schuim te creëren of de eiwitstructuur te beschadigen."
                }
            },
            {
                question: {
                    en: "In low-sugar pudding formulations, what is the mechanism by which inulin contributes to mouthfeel?",
                    es: "En formulaciones de pudín bajo en azúcar, ¿cuál es el mecanismo por el cual la inulina contribuye a la sensación en boca?",
                    de: "In zuckerarmen Puddingformulierungen, was ist der Mechanismus, durch den Inulin zum Mundgefühl beiträgt?",
                    nl: "In laagsuiker puddingformuleringen, wat is het mechanisme waardoor inuline bijdraagt aan mondgevoel?"
                },
                options: [
                    { en: "Formation of microcrystalline structures", es: "Formación de estructuras microcristalinas", de: "Bildung von mikrokristallinen Strukturen", nl: "Vorming van microkristallijne structuren" },
                    { en: "Gel network formation through hydrogen bonding", es: "Formación de red de gel a través de enlaces de hidrógeno", de: "Gelnetzwerkbildung durch Wasserstoffbrücken", nl: "Gelnetwerkvorming door waterstofbruggen" },
                    { en: "Fat mimicry through particle size distribution", es: "Mimetismo de grasa a través de distribución de tamaño de partícula", de: "Fettmimikry durch Partikelgrößenverteilung", nl: "Vetnabootsing door deeltjesgrootteverdeling" },
                    { en: "Viscosity enhancement through molecular entanglement", es: "Mejora de viscosidad a través de enmarañamiento molecular", de: "Viskositätssteigerung durch molekulare Verschlaufung", nl: "Viscositeitsverhoging door moleculaire verstrengeling" }
                ],
                correct: 2,
                explanation: {
                    en: "Inulin creates fat-like mouthfeel through the formation of microparticles with specific size distributions (0.1-3 μm) that mimic the sensory properties of fat globules, providing creaminess without calories.",
                    es: "La inulina crea una sensación en boca similar a la grasa a través de la formación de micropartículas con distribuciones de tamaño específicas (0.1-3 μm) que imitan las propiedades sensoriales de los glóbulos de grasa, proporcionando cremosidad sin calorías.",
                    de: "Inulin erzeugt fettähnliches Mundgefühl durch die Bildung von Mikropartikeln mit spezifischen Größenverteilungen (0,1-3 μm), die die sensorischen Eigenschaften von Fettkügelchen nachahmen und Cremigkeit ohne Kalorien bieten.",
                    nl: "Inuline creëert vetachtig mondgevoel door de vorming van microdeeltjes met specifieke grootteverdelingen (0,1-3 μm) die de sensorische eigenschappen van vetbolletjes nabootsen, waardoor romigheid zonder calorieën wordt geboden."
                }
            },
            {
                question: {
                    en: "What is the optimal processing temperature for maintaining maximum anthocyanin content in berry puddings?",
                    es: "¿Cuál es la temperatura de procesamiento óptima para mantener el contenido máximo de antocianinas en pudines de bayas?",
                    de: "Was ist die optimale Verarbeitungstemperatur für die Aufrechterhaltung des maximalen Anthocyangehalts in Beerenpuddings?",
                    nl: "Wat is de optimale verwerkingstemperatuur voor het behouden van maximaal anthocyaangehalte in bessenpuddings?"
                },
                options: [
                    { en: "65-70°C", es: "65-70°C", de: "65-70°C", nl: "65-70°C" },
                    { en: "75-80°C", es: "75-80°C", de: "75-80°C", nl: "75-80°C" },
                    { en: "85-90°C", es: "85-90°C", de: "85-90°C", nl: "85-90°C" },
                    { en: "95-100°C", es: "95-100°C", de: "95-100°C", nl: "95-100°C" }
                ],
                correct: 0,
                explanation: {
                    en: "Processing at 65-70°C minimizes anthocyanin degradation while achieving sufficient starch gelatinization. Higher temperatures cause rapid anthocyanin breakdown through hydrolysis and oxidation reactions.",
                    es: "El procesamiento a 65-70°C minimiza la degradación de antocianinas mientras logra suficiente gelatinización del almidón. Las temperaturas más altas causan descomposición rápida de antocianinas a través de reacciones de hidrólisis y oxidación.",
                    de: "Die Verarbeitung bei 65-70°C minimiert den Anthocyanabbau bei gleichzeitiger Erreichung ausreichender Stärkegelatinierung. Höhere Temperaturen verursachen schnellen Anthocyanabbau durch Hydrolyse- und Oxidationsreaktionen.",
                    nl: "Verwerking bij 65-70°C minimaliseert anthocyaanafbraak terwijl voldoende zetmeelgelatinisatie wordt bereikt. Hogere temperaturen veroorzaken snelle anthocyaanafbraak door hydrolyse- en oxidatiereacties."
                }
            },
            {
                question: {
                    en: "In protein-enriched puddings, what is the minimum heat treatment required to denature whey proteins for optimal gel formation?",
                    es: "En pudines enriquecidos con proteína, ¿cuál es el tratamiento térmico mínimo requerido para desnaturalizar las proteínas del suero para una formación óptima del gel?",
                    de: "In proteinangereicherten Puddings, was ist die minimale Wärmebehandlung, die erforderlich ist, um Molkenproteine für optimale Gelbildung zu denaturieren?",
                    nl: "In eiwitverrijkte puddings, wat is de minimale warmtebehandeling die vereist is om weiproteïnen te denatureren voor optimale gelvorming?"
                },
                options: [
                    { en: "60°C for 30 min", es: "60°C por 30 minutos", de: "60°C für 30 Minuten", nl: "60°C gedurende 30 minuten" },
                    { en: "70°C for 15 min", es: "70°C por 15 minutos", de: "70°C für 15 Minuten", nl: "70°C gedurende 15 minuten" },
                    { en: "80°C for 10 min", es: "80°C por 10 minutos", de: "80°C für 10 Minuten", nl: "80°C gedurende 10 minuten" },
                    { en: "90°C for 5 min", es: "90°C por 5 minutos", de: "90°C für 5 Minuten", nl: "90°C gedurende 5 minuten" }
                ],
                correct: 2,
                explanation: {
                    en: "Whey proteins require heating to 80°C for 10 minutes to achieve complete denaturation and unfolding, exposing hydrophobic groups necessary for forming strong intermolecular bonds in the gel network.",
                    es: "Las proteínas del suero requieren calentamiento a 80°C por 10 minutos para lograr desnaturalización completa y desplegamiento, exponiendo grupos hidrofóbicos necesarios para formar enlaces intermoleculares fuertes en la red del gel.",
                    de: "Molkenproteine erfordern Erhitzung auf 80°C für 10 Minuten, um vollständige Denaturierung und Entfaltung zu erreichen, wodurch hydrophobe Gruppen freigelegt werden, die für die Bildung starker intermolekularer Bindungen im Gelnetzwerk notwendig sind.",
                    nl: "Weiproteïnen vereisen verhitting tot 80°C gedurende 10 minuten om complete denaturatie en ontvouwing te bereiken, waarbij hydrofobe groepen worden blootgelegd die nodig zijn voor het vormen van sterke intermoleculaire bindingen in het gelnetwerk."
                }
            },
            {
                question: {
                    en: "What is the mechanism behind syneresis (weeping) in overcooked egg-based puddings?",
                    es: "¿Cuál es el mecanismo detrás de la sinéresis (llanto) en pudines a base de huevo sobrecocidos?",
                    de: "Was ist der Mechanismus hinter der Synerese (Weinen) in überkochten eibasierten Puddings?",
                    nl: "Wat is het mechanisme achter synerese (uittreden van vocht) in overkookte puddingen op eibasis?"
                },
                options: [
                    { en: "Starch retrogradation and crystallization", es: "Retrogradación y cristalización del almidón", de: "Stärke-Retrogradation und Kristallisation", nl: "Zetmeel retrogradatie en kristallisatie" },
                    { en: "Protein aggregation and network contraction", es: "Agregación de proteínas y contracción de la red", de: "Proteinaggregation und Netzwerkkontraktion", nl: "Eiwitaggregatie en netwerkcontractie" },
                    { en: "Fat phase separation and coalescence", es: "Separación y coalescencia de la fase grasa", de: "Fettphasenseparation und Koaleszenz", nl: "Vetfasescheiding en coalescentie" },
                    { en: "Sugar crystallization and osmotic pressure", es: "Cristalización del azúcar y presión osmótica", de: "Zuckerkristallisation und osmotischer Druck", nl: "Suikerkristallisatie en osmotische druk" }
                ],
                correct: 1,
                explanation: {
                    en: "Excessive heat causes egg proteins to over-aggregate and form a tight network that contracts, expelling trapped water through syneresis. This is why gentle, controlled heating is essential for smooth custards.",
                    es: "El calor excesivo hace que las proteínas del huevo se agreguen en exceso y formen una red apretada que se contrae, expulsando agua atrapada a través de sinéresis. Por eso el calentamiento suave y controlado es esencial para cremas suaves.",
                    de: "Übermäßige Hitze verursacht eine Über-Aggregation der Eiproteine und bildet ein enges Netzwerk, das sich zusammenzieht und eingeschlossenes Wasser durch Synerese ausstößt. Deshalb ist sanftes, kontrolliertes Erhitzen für glatte Puddings unerlässlich.",
                    nl: "Overmatige hitte veroorzaakt dat eiproteïnen te veel aggregeren en een strak netwerk vormen dat samentrekt, waarbij opgesloten water wordt uitgedreven door synerese. Daarom is zachte, gecontroleerde verhitting essentieel voor gladde custards."
                }
            },
            {
                question: {
                    en: "In vacuum-processed puddings, what pressure reduction is optimal for lowering the boiling point to 60°C?",
                    es: "En pudines procesados al vacío, ¿qué reducción de presión es óptima para reducir el punto de ebullición a 60°C?",
                    de: "Bei vakuumverarbeiteten Puddings, welche Druckreduzierung ist optimal, um den Siedepunkt auf 60°C zu senken?",
                    nl: "In vacuüm-verwerkte puddings, welke drukreductie is optimaal voor het verlagen van het kookpunt tot 60°C?"
                },
                options: [
                    { en: "50 mbar (5 kPa)", es: "50 mbar (5 kPa)", de: "50 mbar (5 kPa)", nl: "50 mbar (5 kPa)" },
                    { en: "150 mbar (15 kPa)", es: "150 mbar (15 kPa)", de: "150 mbar (15 kPa)", nl: "150 mbar (15 kPa)" },
                    { en: "200 mbar (20 kPa)", es: "200 mbar (20 kPa)", de: "200 mbar (20 kPa)", nl: "200 mbar (20 kPa)" },
                    { en: "300 mbar (30 kPa)", es: "300 mbar (30 kPa)", de: "300 mbar (30 kPa)", nl: "300 mbar (30 kPa)" }
                ],
                correct: 2,
                explanation: {
                    en: "At 200 mbar (20 kPa) absolute pressure, water boils at approximately 60°C, allowing gentle concentration and processing while preserving heat-sensitive compounds like vitamins and volatile aromatics.",
                    es: "A 200 mbar (20 kPa) de presión absoluta, el agua hierve a aproximadamente 60°C, permitiendo concentración y procesamiento suave mientras preserva compuestos termosensibles como vitaminas y aromáticos volátiles.",
                    de: "Bei 200 mbar (20 kPa) absolutem Druck kocht Wasser bei etwa 60°C, was sanfte Konzentration und Verarbeitung ermöglicht, während hitzeempfindliche Verbindungen wie Vitamine und flüchtige Aromastoffe erhalten bleiben.",
                    nl: "Bij 200 mbar (20 kPa) absolute druk kookt water bij ongeveer 60°C, wat zachte concentratie en verwerking mogelijk maakt terwijl hittegevoelige verbindingen zoals vitamines en vluchtige aromaten behouden blijven."
                }
            },
            {
                question: {
                    en: "What is the optimal hydrocolloid combination for creating heat-stable, freeze-thaw resistant puddings?",
                    es: "¿Cuál es la combinación óptima de hidrocoloides para crear pudines resistentes al calor y al ciclo de congelación-descongelación?",
                    de: "Was ist die optimale Hydrokolloidkombination für die Herstellung wärmebeständiger, gefrier-auftau-resistenter Puddings?",
                    nl: "Wat is de optimale hydrocolloïdecombinatie voor het creëren van hittestabiele, vries-ontdooi resistente puddings?"
                },
                options: [
                    { en: "Carrageenan + Xanthan gum", es: "Carragenina + Goma xantana", de: "Carrageen + Xanthangummi", nl: "Carrageen + Xanthaangom" },
                    { en: "Agar + Locust bean gum", es: "Agar + Goma garrofín", de: "Agar + Johannisbrotkernmehl", nl: "Agar + Johannesbroodpitmeel" },
                    { en: "Pectin + Gellan gum", es: "Pectina + Goma gellan", de: "Pektin + Gellan", nl: "Pectine + Gellangom" },
                    { en: "Alginate + Guar gum", es: "Alginato + Goma guar", de: "Alginat + Guarkernmehl", nl: "Alginaat + Guargom" }
                ],
                correct: 1,
                explanation: {
                    en: "Agar provides thermoreversible gel strength while locust bean gum creates synergistic interactions that enhance freeze-thaw stability by preventing ice crystal formation and maintaining texture integrity.",
                    es: "El agar proporciona fuerza de gel termorreversible mientras que la goma garrofín crea interacciones sinérgicas que mejoran la estabilidad de congelación-descongelación al prevenir la formación de cristales de hielo y mantener la integridad de la textura.",
                    de: "Agar bietet thermoreversible Gelstärke, während Johannisbrotkernmehl synergistische Wechselwirkungen schafft, die die Gefrier-Auftau-Stabilität durch Verhinderung der Eiskristallbildung und Aufrechterhaltung der Texturintegriät verbessern.",
                    nl: "Agar biedt thermoreversibele gelsterkte terwijl johannesbroodpitmeel synergetische interacties creëert die vries-ontdooi stabiliteit verbeteren door ijskristalvorming te voorkomen en textuurintegriteit te behouden."
                }
            },
            {
                question: {
                    en: "In fermented pudding production, what is the optimal temperature range for Lactobacillus bulgaricus activity?",
                    es: "En la producción de pudín fermentado, ¿cuál es el rango de temperatura óptimo para la actividad de Lactobacillus bulgaricus?",
                    de: "Bei der Herstellung fermentierter Puddings, was ist der optimale Temperaturbereich für die Aktivität von Lactobacillus bulgaricus?",
                    nl: "Bij de productie van gefermenteerde pudding, wat is het optimale temperatuurbereik voor Lactobacillus bulgaricus activiteit?"
                },
                options: [
                    { en: "35-40°C", es: "35-40°C", de: "35-40°C", nl: "35-40°C" },
                    { en: "42-45°C", es: "42-45°C", de: "42-45°C", nl: "42-45°C" },
                    { en: "48-52°C", es: "48-52°C", de: "48-52°C", nl: "48-52°C" },
                    { en: "55-60°C", es: "55-60°C", de: "55-60°C", nl: "55-60°C" }
                ],
                correct: 2,
                explanation: {
                    en: "Lactobacillus bulgaricus exhibits optimal growth and acid production at 48-52°C, producing the characteristic tangy flavor and protein modifications that create the desired texture in fermented puddings.",
                    es: "Lactobacillus bulgaricus exhibe crecimiento óptimo y producción de ácido a 48-52°C, produciendo el sabor ácido característico y modificaciones proteicas que crean la textura deseada en pudines fermentados.",
                    de: "Lactobacillus bulgaricus zeigt optimales Wachstum und Säureproduktion bei 48-52°C und produziert den charakteristischen säuerlichen Geschmack und Proteinmodifikationen, die die gewünschte Textur in fermentierten Puddings erzeugen.",
                    nl: "Lactobacillus bulgaricus vertoont optimale groei en zuurproductie bij 48-52°C, waarbij de karakteristieke zure smaak en eiwitmodificaties worden geproduceerd die de gewenste textuur in gefermenteerde puddings creëren."
                }
            },
            {
                question: {
                    en: "What is the critical cooling rate required to prevent ice crystal formation in frozen pudding mousses?",
                    es: "¿Cuál es la velocidad de enfriamiento crítica requerida para prevenir la formación de cristales de hielo en mousses de pudín congelado?",
                    de: "Was ist die kritische Abkühlungsrate, die erforderlich ist, um Eiskristallbildung in gefrorenen Pudding-Mousses zu verhindern?",
                    nl: "Wat is de kritieke afkoelsnelheid die vereist is om ijskristalvorming in bevroren puddingmousses te voorkomen?"
                },
                options: [
                    { en: "1-2°C/min", es: "1-2°C/min", de: "1-2°C/min", nl: "1-2°C/min" },
                    { en: "5-8°C/min", es: "5-8°C/min", de: "5-8°C/min", nl: "5-8°C/min" },
                    { en: "10-15°C/min", es: "10-15°C/min", de: "10-15°C/min", nl: "10-15°C/min" },
                    { en: "20-25°C/min", es: "20-25°C/min", de: "20-25°C/min", nl: "20-25°C/min" }
                ],
                correct: 3,
                explanation: {
                    en: "Rapid cooling at 20-25°C/min through the critical zone (-1 to -5°C) prevents large ice crystal formation by promoting nucleation of many small crystals, maintaining the smooth, creamy texture essential for mousses.",
                    es: "El enfriamiento rápido a 20-25°C/min a través de la zona crítica (-1 a -5°C) previene la formación de cristales de hielo grandes al promover la nucleación de muchos cristales pequeños, manteniendo la textura suave y cremosa esencial para mousses.",
                    de: "Schnelle Abkühlung bei 20-25°C/min durch die kritische Zone (-1 bis -5°C) verhindert große Eiskristallbildung durch Förderung der Nukleation vieler kleiner Kristalle, wodurch die glatte, cremige Textur erhalten bleibt, die für Mousses wesentlich ist.",
                    nl: "Snelle afkoeling bij 20-25°C/min door de kritieke zone (-1 tot -5°C) voorkomt grote ijskristalvorming door nucleatie van veel kleine kristallen te bevorderen, waardoor de gladde, romige textuur wordt behouden die essentieel is voor mousses."
                }
            },
            {
                question: {
                    en: "In gluten-free pudding formulations, what is the optimal ratio of rice starch to tapioca starch for achieving wheat-like texture?",
                    es: "En formulaciones de pudín sin gluten, ¿cuál es la proporción óptima de almidón de arroz a almidón de tapioca para lograr una textura similar al trigo?",
                    de: "In glutenfreien Puddingformulierungen, was ist das optimale Verhältnis von Reisstärke zu Tapiokastärke, um weizenähnliche Textur zu erreichen?",
                    nl: "In glutenvrije puddingformuleringen, wat is de optimale verhouding van rijstzetmeel tot tapiocazetmeel voor het bereiken van tarweachtige textuur?"
                },
                options: [
                    { en: "1:1", es: "1:1", de: "1:1", nl: "1:1" },
                    { en: "2:1", es: "2:1", de: "2:1", nl: "2:1" },
                    { en: "3:1", es: "3:1", de: "3:1", nl: "3:1" },
                    { en: "4:1", es: "4:1", de: "4:1", nl: "4:1" }
                ],
                correct: 2,
                explanation: {
                    en: "A 3:1 ratio of rice starch to tapioca starch provides the optimal balance: rice starch contributes body and opacity similar to wheat, while tapioca starch adds the necessary elasticity and smooth mouthfeel.",
                    es: "Una proporción 3:1 de almidón de arroz a almidón de tapioca proporciona el equilibrio óptimo: el almidón de arroz contribuye cuerpo y opacidad similar al trigo, mientras que el almidón de tapioca añade la elasticidad necesaria y sensación bucal suave.",
                    de: "Ein 3:1-Verhältnis von Reisstärke zu Tapiokastärke bietet das optimale Gleichgewicht: Reisstärke trägt Körper und Opazität ähnlich wie Weizen bei, während Tapiokastärke die notwendige Elastizität und glattes Mundgefühl hinzufügt.",
                    nl: "Een 3:1 verhouding van rijstzetmeel tot tapiocazetmeel biedt de optimale balans: rijstzetmeel draagt bij aan body en ondoorzichtigheid vergelijkbaar met tarwe, terwijl tapiocazetmeel de noodzakelijke elasticiteit en glad mondgevoel toevoegt."
                }
            },
            {
                question: {
                    en: "What is the minimum pasteurization treatment for egg-based puddings to ensure Salmonella elimination while maintaining quality?",
                    es: "¿Cuál es el tratamiento de pasteurización mínimo para pudines a base de huevo para asegurar la eliminación de Salmonella mientras se mantiene la calidad?",
                    de: "Was ist die minimale Pasteurisierungsbehandlung für eibasierte Puddings, um Salmonellenelimination bei Qualitätserhaltung sicherzustellen?",
                    nl: "Wat is de minimale pasteurisatiebehandeling voor puddingen op eibasis om Salmonella-eliminatie te verzekeren terwijl de kwaliteit behouden blijft?"
                },
                options: [
                    { en: "60°C for 3.5 min", es: "60°C por 3.5 minutos", de: "60°C für 3,5 Minuten", nl: "60°C gedurende 3,5 minuten" },
                    { en: "65°C for 2.5 min", es: "65°C por 2.5 minutos", de: "65°C für 2,5 Minuten", nl: "65°C gedurende 2,5 minuten" },
                    { en: "70°C for 1.5 min", es: "70°C por 1.5 minutos", de: "70°C für 1,5 Minuten", nl: "70°C gedurende 1,5 minuten" },
                    { en: "75°C for 30 sec", es: "75°C por 30 segundos", de: "75°C für 30 Sekunden", nl: "75°C gedurende 30 seconden" }
                ],
                correct: 0,
                explanation: {
                    en: "The FDA-approved pasteurization standard of 60°C for 3.5 minutes achieves a 7-log reduction in Salmonella while minimizing protein denaturation and maintaining the delicate custard texture.",
                    es: "El estándar de pasteurización aprobado por la FDA de 60°C por 3.5 minutos logra una reducción de 7-log en Salmonella mientras minimiza la desnaturalización de proteínas y mantiene la textura delicada de la crema.",
                    de: "Der FDA-genehmigte Pasteurisierungsstandard von 60°C für 3,5 Minuten erreicht eine 7-log-Reduktion von Salmonellen bei minimaler Proteindenaturierung und Erhaltung der zarten Puddingstruktur.",
                    nl: "De FDA-goedgekeurde pasteurisatiestandaard van 60°C gedurende 3,5 minuten bereikt een 7-log reductie in Salmonella terwijl eiwitdenaturatie wordt geminimaliseerd en de delicate custardtextuur behouden blijft."
                }
            },
            {
                question: {
                    en: "In chocolate pudding formulations, what is the optimal cocoa butter content for achieving maximum flavor release?",
                    es: "En formulaciones de pudín de chocolate, ¿cuál es el contenido óptimo de manteca de cacao para lograr la máxima liberación de sabor?",
                    de: "In Schokoladenpuddingformulierungen, was ist der optimale Kakaobutter-Gehalt für maximale Geschmacksfreisetzung?",
                    nl: "In chocoladepuddingformuleringen, wat is het optimale cacaobotergehalte voor maximale smaakafgifte?"
                },
                options: [
                    { en: "2-4%", es: "2-4%", de: "2-4%", nl: "2-4%" },
                    { en: "6-8%", es: "6-8%", de: "6-8%", nl: "6-8%" },
                    { en: "10-12%", es: "10-12%", de: "10-12%", nl: "10-12%" },
                    { en: "15-18%", es: "15-18%", de: "15-18%", nl: "15-18%" }
                ],
                correct: 1,
                explanation: {
                    en: "Cocoa butter content of 6-8% provides optimal flavor release by creating the right balance of fat-soluble aroma compounds while maintaining proper pudding viscosity and preventing grittiness from excess fat crystallization.",
                    es: "El contenido de manteca de cacao de 6-8% proporciona liberación óptima de sabor al crear el equilibrio correcto de compuestos aromáticos liposolubles mientras mantiene la viscosidad adecuada del pudín y previene la arenosidad por cristalización excesiva de grasa.",
                    de: "Ein Kakaobutter-Gehalt von 6-8% bietet optimale Geschmacksfreisetzung durch Schaffung des richtigen Gleichgewichts fettlöslicher Aromaverbindungen bei gleichzeitiger Aufrechterhaltung der richtigen Puddingviskosität und Verhinderung von Körnigkeit durch übermäßige Fettkristallisation.",
                    nl: "Cacaobotergehalte van 6-8% biedt optimale smaakafgifte door de juiste balans van vetoplosbare aromaverbindingen te creëren terwijl de juiste puddingviscositeit behouden blijft en korreligheid door overtollige vetkristallisatie wordt voorkomen."
                }
            },
            {
                question: {
                    en: "What is the traditional cooking method for custard-based puddings to prevent curdling?",
                    es: "¿Cuál es el método tradicional de cocción para pudines a base de natilla para prevenir el cuajado?",
                    de: "Was ist die traditionelle Kochmethode für puddingbasierte Desserts auf Vanillesoßenbasis, um Gerinnung zu verhindern?",
                    nl: "Wat is de traditionele kookmethode voor puddings op basis van vla om stremming te voorkomen?"
                },
                options: [
                    { en: "High heat, stirring constantly", es: "Fuego alto, revolviendo constantemente", de: "Hohe Hitze, ständig rühren", nl: "Hoge hitte, constant roeren" },
                    { en: "Double boiler method", es: "Método de baño María", de: "Wasserbad-Methode", nl: "Au-bain-marie methode" },
                    { en: "Microwave on full power", es: "Microondas a potencia máxima", de: "Mikrowelle bei voller Leistung", nl: "Magnetron op vol vermogen" },
                    { en: "Pressure cooking", es: "Cocción a presión", de: "Druckkochen", nl: "Onder druk koken" }
                ],
                correct: 1,
                explanation: {
                    en: "The double boiler method provides gentle, indirect heat that prevents the eggs in custard from curdling while allowing proper thickening.",
                    es: "El método de baño María proporciona calor suave e indirecto que previene que los huevos en la natilla se cuajen mientras permite el espesamiento adecuado.",
                    de: "Die Wasserbad-Methode bietet sanfte, indirekte Hitze, die verhindert, dass die Eier in der Vanillesoße gerinnen und gleichzeitig eine ordnungsgemäße Verdickung ermöglicht.",
                    nl: "De au-bain-marie methode zorgt voor zachte, indirecte warmte die voorkomt dat de eieren in de vla stremmen terwijl het juiste indikken mogelijk blijft."
                }
            },
            {
                question: {
                    en: "Which spice is most commonly associated with rice pudding?",
                    es: "¿Qué especia se asocia más comúnmente con el arroz con leche?",
                    de: "Welches Gewürz wird am häufigsten mit Reispudding in Verbindung gebracht?",
                    nl: "Welke kruiden wordt het meest geassocieerd met rijstpudding?"
                },
                options: [
                    { en: "Nutmeg", es: "Nuez moscada", de: "Muskatnuss", nl: "Nootmuskaat" },
                    { en: "Cinnamon", es: "Canela", de: "Zimt", nl: "Kaneel" },
                    { en: "Cardamom", es: "Cardamomo", de: "Kardamom", nl: "Kardemom" },
                    { en: "Allspice", es: "Pimienta de Jamaica", de: "Piment", nl: "Piment" }
                ],
                correct: 1,
                explanation: {
                    en: "Cinnamon is the most traditional and widely used spice in rice pudding across many cultures, adding warmth and complementing the creamy sweetness.",
                    es: "La canela es la especia más tradicional y ampliamente utilizada en el arroz con leche en muchas culturas, agregando calidez y complementando la dulzura cremosa.",
                    de: "Zimt ist das traditionellste und am weitesten verbreitete Gewürz in Reispudding in vielen Kulturen und verleiht Wärme und ergänzt die cremige Süße.",
                    nl: "Kaneel is de meest traditionele en veelgebruikte kruiden in rijstpudding in veel culturen, die warmte toevoegt en de romige zoetheid aanvult."
                }
            }
        ]
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level3Data;
    } else if (typeof window !== 'undefined') {
        window.level3Data = level3Data;
    }

})();
