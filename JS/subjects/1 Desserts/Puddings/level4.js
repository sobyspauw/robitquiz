(function() {
    'use strict';

    const level4Data = {
        name: {
            en: "Molecular Pudding Engineering",
            es: "Ingeniería Molecular de Pudín",
            de: "Molekulare Pudding-Ingenieurswissenschaft",
            nl: "Moleculaire Pudding Engineering"
        },
        questions: [
            {
                question: {
                    en: "What is the rheological shear-thinning index (n) for optimal pudding flow through nanofiltration membranes?",
                    es: "¿Cuál es el índice reológico de adelgazamiento por cizallamiento (n) para el flujo óptimo de pudín a través de membranas de nanofiltración?",
                    de: "Was ist der rheologische Scherverdünnungsindex (n) für optimalen Puddingfluss durch Nanofiltrationsmembranen?",
                    nl: "Wat is de rheologische afschuifverdunningsindex (n) voor optimale puddingstroming door nanofiltratiemembranen?"
                },
                options: [
                    { en: "n = 0.85-0.95", es: "n = 0.85-0.95", de: "n = 0.85-0.95", nl: "n = 0.85-0.95" },
                    { en: "n = 0.65-0.75", es: "n = 0.65-0.75", de: "n = 0.65-0.75", nl: "n = 0.65-0.75" },
                    { en: "n = 0.45-0.55", es: "n = 0.45-0.55", de: "n = 0.45-0.55", nl: "n = 0.45-0.55" },
                    { en: "n = 0.25-0.35", es: "n = 0.25-0.35", de: "n = 0.25-0.35", nl: "n = 0.25-0.35" }
                ],
                correct: 1,
                explanation: {
                    en: "A shear-thinning index of 0.65-0.75 ensures optimal membrane flux while maintaining pudding structure integrity through controlled viscosity reduction under processing shear.",
                    es: "Un índice de adelgazamiento por cizallamiento de 0.65-0.75 asegura flujo óptimo de membrana mientras mantiene la integridad estructural del pudín a través de reducción controlada de viscosidad bajo cizallamiento de procesamiento.",
                    de: "Ein Scherverdünnungsindex von 0,65-0,75 gewährleistet optimalen Membranfluss bei gleichzeitiger Aufrechterhaltung der Puddingstrukturintegrität durch kontrollierte Viskositätsreduktion unter Verarbeitungsscherung.",
                    nl: "Een afschuifverdunningsindex van 0,65-0,75 verzekert optimale membraanflux terwijl de structurele integriteit van de pudding behouden blijft door gecontroleerde viscositeitsreductie onder verwerkingsafschuiving."
                }
            },
            {
                question: {
                    en: "In microencapsulation of pudding flavors, what is the critical wall material thickness for achieving 95% encapsulation efficiency?",
                    es: "En la microencapsulación de sabores de pudín, ¿cuál es el grosor crítico del material de pared para lograr 95% de eficiencia de encapsulación?",
                    de: "Bei der Mikroverkapselung von Puddingaromen, was ist die kritische Wandmaterialdicke für 95% Verkapselungseffizienz?",
                    nl: "Bij microencapsulatie van puddingsmaken, wat is de kritieke wandmateriaaldikte voor het bereiken van 95% inkapselingsefficiëntie?"
                },
                options: [
                    { en: "15-25 nm", es: "15-25 nm", de: "15-25 nm", nl: "15-25 nm" },
                    { en: "50-80 nm", es: "50-80 nm", de: "50-80 nm", nl: "50-80 nm" },
                    { en: "120-180 nm", es: "120-180 nm", de: "120-180 nm", nl: "120-180 nm" },
                    { en: "250-350 nm", es: "250-350 nm", de: "250-350 nm", nl: "250-350 nm" }
                ],
                correct: 2,
                explanation: {
                    en: "Wall thickness of 120-180 nm provides optimal barrier properties against oxidation and moisture while maintaining controlled release kinetics for flavor compounds in pudding matrices.",
                    es: "El grosor de pared de 120-180 nm proporciona propiedades de barrera óptimas contra oxidación y humedad mientras mantiene cinética de liberación controlada para compuestos de sabor en matrices de pudín.",
                    de: "Wanddicke von 120-180 nm bietet optimale Barriereeigenschaften gegen Oxidation und Feuchtigkeit bei gleichzeitiger Aufrechterhaltung kontrollierter Freisetzungskinetik für Aromaverbindungen in Puddingmatrizen.",
                    nl: "Wanddikte van 120-180 nm biedt optimale barrière-eigenschappen tegen oxidatie en vocht terwijl gecontroleerde afgifte-kinetiek voor smaakverbindingen in puddingmatrices behouden blijft."
                }
            },
            {
                question: {
                    en: "What is the quantum yield efficiency for photocatalytic vitamin D fortification in UV-treated puddings?",
                    es: "¿Cuál es la eficiencia de rendimiento cuántico para la fortificación fotocatalítica de vitamina D en pudines tratados con UV?",
                    de: "Was ist die Quantenausbeute-Effizienz für photokatalytische Vitamin-D-Anreicherung in UV-behandelten Puddings?",
                    nl: "Wat is de kwantumopbrengstefficiëntie voor fotokatalytische vitamine D-verrijking in UV-behandelde puddings?"
                },
                options: [
                    { en: "Φ = 0.12-0.18", es: "Φ = 0.12-0.18", de: "Φ = 0.12-0.18", nl: "Φ = 0.12-0.18" },
                    { en: "Φ = 0.25-0.35", es: "Φ = 0.25-0.35", de: "Φ = 0.25-0.35", nl: "Φ = 0.25-0.35" },
                    { en: "Φ = 0.45-0.55", es: "Φ = 0.45-0.55", de: "Φ = 0.45-0.55", nl: "Φ = 0.45-0.55" },
                    { en: "Φ = 0.75-0.85", es: "Φ = 0.75-0.85", de: "Φ = 0.75-0.85", nl: "Φ = 0.75-0.85" }
                ],
                correct: 0,
                explanation: {
                    en: "Quantum yield of 0.12-0.18 represents the photochemical conversion efficiency of 7-dehydrocholesterol to vitamin D3 in pudding lipid phases under controlled UV-B irradiation.",
                    es: "El rendimiento cuántico de 0.12-0.18 representa la eficiencia de conversión fotoquímica de 7-dehidrocolesterol a vitamina D3 en fases lipídicas de pudín bajo irradiación UV-B controlada.",
                    de: "Quantenausbeute von 0,12-0,18 repräsentiert die photochemische Umwandlungseffizienz von 7-Dehydrocholesterol zu Vitamin D3 in Pudding-Lipidphasen unter kontrollierter UV-B-Bestrahlung.",
                    nl: "Kwantumopbrengst van 0,12-0,18 vertegenwoordigt de fotochemische omzettingsefficiëntie van 7-dehydrocholesterol naar vitamine D3 in puddinglipidenfasen onder gecontroleerde UV-B-bestraling."
                }
            },
            {
                question: {
                    en: "In supercritical CO₂ extraction of pudding essences, what pressure-temperature combination yields maximum terpene recovery?",
                    es: "En la extracción supercrítica de CO₂ de esencias de pudín, ¿qué combinación presión-temperatura produce la máxima recuperación de terpenos?",
                    de: "Bei der überkritischen CO₂-Extraktion von Puddingessenzen, welche Druck-Temperatur-Kombination ergibt maximale Terpenrückgewinnung?",
                    nl: "Bij superkritische CO₂-extractie van puddingessenties, welke druk-temperatuurcombinatie levert maximale terpeenherstel op?"
                },
                options: [
                    { en: "180 bar, 35°C", es: "180 bar, 35°C", de: "180 bar, 35°C", nl: "180 bar, 35°C" },
                    { en: "250 bar, 45°C", es: "250 bar, 45°C", de: "250 bar, 45°C", nl: "250 bar, 45°C" },
                    { en: "320 bar, 55°C", es: "320 bar, 55°C", de: "320 bar, 55°C", nl: "320 bar, 55°C" },
                    { en: "450 bar, 65°C", es: "450 bar, 65°C", de: "450 bar, 65°C", nl: "450 bar, 65°C" }
                ],
                correct: 1,
                explanation: {
                    en: "Operating conditions of 250 bar and 45°C optimize CO₂ density and solvent power for terpene compounds while maintaining thermolabile component integrity in pudding extract matrices.",
                    es: "Las condiciones operativas de 250 bar y 45°C optimizan la densidad del CO₂ y el poder solvente para compuestos terpénicos mientras mantienen la integridad de componentes termolábiles en matrices de extracto de pudín.",
                    de: "Betriebsbedingungen von 250 bar und 45°C optimieren CO₂-Dichte und Lösungskraft für Terpenverbindungen bei gleichzeitiger Aufrechterhaltung der Integrität thermolabiler Komponenten in Puddingextraktmatrizen.",
                    nl: "Bedrijfscondities van 250 bar en 45°C optimaliseren CO₂-dichtheid en oplosvermogen voor terpeenverbindingen terwijl de integriteit van thermolabiele componenten in puddingextractmatrices behouden blijft."
                }
            },
            {
                question: {
                    en: "What is the critical Reynolds number for transition to turbulent flow in pudding processing through helical heat exchangers?",
                    es: "¿Cuál es el número de Reynolds crítico para la transición al flujo turbulento en el procesamiento de pudín a través de intercambiadores de calor helicoidales?",
                    de: "Was ist die kritische Reynoldszahl für den Übergang zum turbulenten Fluss bei der Puddingverarbeitung durch spiralförmige Wärmetauscher?",
                    nl: "Wat is het kritieke Reynolds-getal voor overgang naar turbulente stroming bij puddingverwerking door spiraalvormige warmtewisselaars?"
                },
                options: [
                    { en: "Re = 1,200-1,500", es: "Re = 1,200-1,500", de: "Re = 1,200-1,500", nl: "Re = 1,200-1,500" },
                    { en: "Re = 2,100-2,300", es: "Re = 2,100-2,300", de: "Re = 2,100-2,300", nl: "Re = 2,100-2,300" },
                    { en: "Re = 3,800-4,200", es: "Re = 3,800-4,200", de: "Re = 3,800-4,200", nl: "Re = 3,800-4,200" },
                    { en: "Re = 6,500-7,000", es: "Re = 6,500-7,000", de: "Re = 6,500-7,000", nl: "Re = 6,500-7,000" }
                ],
                correct: 2,
                explanation: {
                    en: "In helical geometries, the critical Reynolds number increases to 3,800-4,200 due to centrifugal forces and Dean vortices that stabilize laminar flow patterns in viscous pudding systems.",
                    es: "En geometrías helicoidales, el número de Reynolds crítico aumenta a 3,800-4,200 debido a fuerzas centrífugas y vórtices de Dean que estabilizan patrones de flujo laminar en sistemas viscosos de pudín.",
                    de: "In spiralförmigen Geometrien steigt die kritische Reynoldszahl auf 3.800-4.200 aufgrund von Zentrifugalkräften und Dean-Wirbeln, die laminare Strömungsmuster in viskosen Puddingsystemen stabilisieren.",
                    nl: "In spiraalvormige geometrieën stijgt het kritieke Reynolds-getal naar 3.800-4.200 vanwege centrifugale krachten en Dean-wervelingen die laminaire stromingspatronen in viskeuze puddingsystemen stabiliseren."
                }
            },
            {
                question: {
                    en: "In enzymatic protein modification for pudding texture, what is the optimal transglutaminase unit activity for cross-linking?",
                    es: "En la modificación enzimática de proteínas para la textura del pudín, ¿cuál es la actividad unitaria óptima de transglutaminasa para el entrecruzamiento?",
                    de: "Bei der enzymatischen Proteinmodifikation für Puddingtextur, was ist die optimale Transglutaminase-Einheitsaktivität für Vernetzung?",
                    nl: "Bij enzymatische eiwitmodificatie voor puddingtextuur, wat is de optimale transglutaminase-eenheidsactiviteit voor verknoping?"
                },
                options: [
                    { en: "5-15 U/g protein", es: "5-15 U/g proteína", de: "5-15 U/g Protein", nl: "5-15 U/g eiwit" },
                    { en: "25-40 U/g protein", es: "25-40 U/g proteína", de: "25-40 U/g Protein", nl: "25-40 U/g eiwit" },
                    { en: "60-85 U/g protein", es: "60-85 U/g proteína", de: "60-85 U/g Protein", nl: "60-85 U/g eiwit" },
                    { en: "120-150 U/g protein", es: "120-150 U/g proteína", de: "120-150 U/g Protein", nl: "120-150 U/g eiwit" }
                ],
                correct: 1,
                explanation: {
                    en: "Transglutaminase activity of 25-40 U/g protein creates optimal intermolecular ε-(γ-glutamyl)lysine bonds for enhanced gel strength without excessive protein aggregation that would compromise pudding smoothness.",
                    es: "La actividad de transglutaminasa de 25-40 U/g de proteína crea enlaces intermoleculares ε-(γ-glutamil)lisina óptimos para mejorar la fuerza del gel sin agregación excesiva de proteínas que comprometería la suavidad del pudín.",
                    de: "Transglutaminase-Aktivität von 25-40 U/g Protein schafft optimale intermolekulare ε-(γ-Glutamyl)lysin-Bindungen für verbesserte Gelstärke ohne übermäßige Proteinaggregation, die die Puddinggeschmeidigkeit beeinträchtigen würde.",
                    nl: "Transglutaminase-activiteit van 25-40 U/g eiwit creëert optimale intermoleculaire ε-(γ-glutamyl)lysine-bindingen voor verbeterde gelsterkte zonder overmatige eiwitaggregatie die de puddingzachtheid zou compromitteren."
                }
            },
            {
                question: {
                    en: "What is the thermodynamic water activity coefficient (γw) in high-solids pudding formulations at equilibrium?",
                    es: "¿Cuál es el coeficiente termodinámico de actividad del agua (γw) en formulaciones de pudín de alto contenido de sólidos en equilibrio?",
                    de: "Was ist der thermodynamische Wasseraktivitätskoeffizient (γw) in Puddingformulierungen mit hohem Feststoffgehalt im Gleichgewicht?",
                    nl: "Wat is de thermodynamische wateractiviteitscoëfficiënt (γw) in hoogvaste-stof puddingformuleringen bij evenwicht?"
                },
                options: [
                    { en: "γw = 0.78-0.82", es: "γw = 0.78-0.82", de: "γw = 0.78-0.82", nl: "γw = 0.78-0.82" },
                    { en: "γw = 0.85-0.89", es: "γw = 0.85-0.89", de: "γw = 0.85-0.89", nl: "γw = 0.85-0.89" },
                    { en: "γw = 0.92-0.96", es: "γw = 0.92-0.96", de: "γw = 0.92-0.96", nl: "γw = 0.92-0.96" },
                    { en: "γw = 0.98-1.02", es: "γw = 0.98-1.02", de: "γw = 0.98-1.02", nl: "γw = 0.98-1.02" }
                ],
                correct: 0,
                explanation: {
                    en: "Water activity coefficient of 0.78-0.82 indicates significant non-ideal behavior due to molecular interactions between water and hydrocolloid networks in concentrated pudding systems.",
                    es: "El coeficiente de actividad del agua de 0.78-0.82 indica comportamiento no ideal significativo debido a interacciones moleculares entre agua y redes de hidrocoloides en sistemas concentrados de pudín.",
                    de: "Wasseraktivitätskoeffizient von 0,78-0,82 zeigt signifikantes nicht-ideales Verhalten aufgrund molekularer Wechselwirkungen zwischen Wasser und Hydrokolloidnetzwerken in konzentrierten Puddingsystemen an.",
                    nl: "Wateractiviteitscoëfficiënt van 0,78-0,82 duidt op significant niet-ideaal gedrag vanwege moleculaire interacties tussen water en hydrocolloïdnetwerken in geconcentreerde puddingsystemen."
                }
            },
            {
                question: {
                    en: "In ultrasonic homogenization of pudding emulsions, what cavitation intensity minimizes lipid oxidation while achieving nano-droplets?",
                    es: "En la homogeneización ultrasónica de emulsiones de pudín, ¿qué intensidad de cavitación minimiza la oxidación lipídica mientras logra nano-gotas?",
                    de: "Bei der Ultraschallhomogenisierung von Puddingemulsionen, welche Kavitationsintensität minimiert Lipidoxidation bei gleichzeitiger Erzielung von Nanotröpfchen?",
                    nl: "Bij ultrasone homogenisatie van puddingemulsies, welke cavitatieintensiteit minimaliseert lipide-oxidatie terwijl nanodruppeltjes worden bereikt?"
                },
                options: [
                    { en: "15-25 W/cm²", es: "15-25 W/cm²", de: "15-25 W/cm²", nl: "15-25 W/cm²" },
                    { en: "45-65 W/cm²", es: "45-65 W/cm²", de: "45-65 W/cm²", nl: "45-65 W/cm²" },
                    { en: "85-105 W/cm²", es: "85-105 W/cm²", de: "85-105 W/cm²", nl: "85-105 W/cm²" },
                    { en: "150-180 W/cm²", es: "150-180 W/cm²", de: "150-180 W/cm²", nl: "150-180 W/cm²" }
                ],
                correct: 1,
                explanation: {
                    en: "Cavitation intensity of 45-65 W/cm² provides sufficient energy for droplet breakup to nanometer scale while limiting radical formation that would trigger lipid peroxidation cascades.",
                    es: "La intensidad de cavitación de 45-65 W/cm² proporciona energía suficiente para la ruptura de gotas a escala nanométrica mientras limita la formación de radicales que desencadenarían cascadas de peroxidación lipídica.",
                    de: "Kavitationsintensität von 45-65 W/cm² bietet ausreichend Energie für Tröpfchenaufbruch im Nanometerbereich bei gleichzeitiger Begrenzung der Radikalbildung, die Lipidperoxidationskaskaden auslösen würde.",
                    nl: "Cavitatieintensiteit van 45-65 W/cm² biedt voldoende energie voor druppelopsplitsing tot nanometerschaal terwijl radicaalvorming wordt beperkt die lipideperoxidatiecascades zou triggeren."
                }
            },
            {
                question: {
                    en: "What is the critical packing parameter (P) for lecithin-stabilized pudding foam structures?",
                    es: "¿Cuál es el parámetro crítico de empaquetamiento (P) para estructuras de espuma de pudín estabilizadas con lecitina?",
                    de: "Was ist der kritische Packungsparameter (P) für lecithinstabilisierte Puddingschaumstrukturen?",
                    nl: "Wat is de kritieke verpakkingsparameter (P) voor lecithine-gestabiliseerde puddingschuimstructuren?"
                },
                options: [
                    { en: "P = 0.15-0.25", es: "P = 0.15-0.25", de: "P = 0.15-0.25", nl: "P = 0.15-0.25" },
                    { en: "P = 0.35-0.45", es: "P = 0.35-0.45", de: "P = 0.35-0.45", nl: "P = 0.35-0.45" },
                    { en: "P = 0.55-0.65", es: "P = 0.55-0.65", de: "P = 0.55-0.65", nl: "P = 0.55-0.65" },
                    { en: "P = 0.75-0.85", es: "P = 0.75-0.85", de: "P = 0.75-0.85", nl: "P = 0.75-0.85" }
                ],
                correct: 1,
                explanation: {
                    en: "Packing parameter of 0.35-0.45 indicates optimal lecithin molecular geometry for stable foam lamellae formation with balanced hydrophilic-lipophilic interactions in pudding systems.",
                    es: "El parámetro de empaquetamiento de 0.35-0.45 indica geometría molecular óptima de lecitina para formación estable de lamelas de espuma con interacciones hidrofílico-lipofílicas equilibradas en sistemas de pudín.",
                    de: "Packungsparameter von 0,35-0,45 zeigt optimale Lecithin-Molekulargeometrie für stabile Schaumlamellenbildung mit ausgewogenen hydrophil-lipophilen Wechselwirkungen in Puddingsystemen an.",
                    nl: "Verpakkingsparameter van 0,35-0,45 duidt op optimale lecithine-moleculaire geometrie voor stabiele schuimlamelvorming met gebalanceerde hydrofiel-lipofiele interacties in puddingsystemen."
                }
            },
            {
                question: {
                    en: "In pressure-shift crystallization of pudding fats, what applied pressure induces polymorphic transition from β' to β forms?",
                    es: "En la cristalización por cambio de presión de grasas de pudín, ¿qué presión aplicada induce la transición polimórfica de formas β' a β?",
                    de: "Bei der Druckverschiebungskristallisation von Puddingfetten, welcher angewandte Druck induziert polymorphen Übergang von β'- zu β-Formen?",
                    nl: "Bij drukveranderings-kristallisatie van puddingvetten, welke toegepaste druk induceert polymorfe overgang van β' naar β-vormen?"
                },
                options: [
                    { en: "150-250 MPa", es: "150-250 MPa", de: "150-250 MPa", nl: "150-250 MPa" },
                    { en: "350-450 MPa", es: "350-450 MPa", de: "350-450 MPa", nl: "350-450 MPa" },
                    { en: "600-750 MPa", es: "600-750 MPa", de: "600-750 MPa", nl: "600-750 MPa" },
                    { en: "900-1100 MPa", es: "900-1100 MPa", de: "900-1100 MPa", nl: "900-1100 MPa" }
                ],
                correct: 2,
                explanation: {
                    en: "Pressure application of 600-750 MPa induces the thermodynamically favorable β-polymorph with tight molecular packing, resulting in improved crystalline stability and textural properties in pudding fats.",
                    es: "La aplicación de presión de 600-750 MPa induce el polimorfo β termodinámicamente favorable con empaquetamiento molecular apretado, resultando en mejorada estabilidad cristalina y propiedades texturales en grasas de pudín.",
                    de: "Druckanwendung von 600-750 MPa induziert das thermodynamisch günstige β-Polymorph mit enger Molekularpackung, was zu verbesserter kristalliner Stabilität und Texturleigenschaften in Puddingfetten führt.",
                    nl: "Druktoepassing van 600-750 MPa induceert het thermodynamisch gunstige β-polymorf met nauwe moleculaire pakking, resulterend in verbeterde kristallijne stabiliteit en textuureigenschappen in puddingvetten."
                }
            },
            {
                question: {
                    en: "What is the optimal magnetic field strength for electromagnetic heating to achieve uniform temperature distribution in pudding processing?",
                    es: "¿Cuál es la fuerza óptima del campo magnético para el calentamiento electromagnético para lograr distribución uniforme de temperatura en el procesamiento de pudín?",
                    de: "Was ist die optimale Magnetfeldstärke für elektromagnetische Erwärmung zur Erzielung gleichmäßiger Temperaturverteilung bei der Puddingverarbeitung?",
                    nl: "Wat is de optimale magnetische veldsterkte voor elektromagnetische verwarming om uniforme temperatuurverdeling in puddingverwerking te bereiken?"
                },
                options: [
                    { en: "0.5-1.2 Tesla", es: "0.5-1.2 Tesla", de: "0.5-1.2 Tesla", nl: "0.5-1.2 Tesla" },
                    { en: "2.4-3.8 Tesla", es: "2.4-3.8 Tesla", de: "2.4-3.8 Tesla", nl: "2.4-3.8 Tesla" },
                    { en: "5.5-7.2 Tesla", es: "5.5-7.2 Tesla", de: "5.5-7.2 Tesla", nl: "5.5-7.2 Tesla" },
                    { en: "9.0-12.5 Tesla", es: "9.0-12.5 Tesla", de: "9.0-12.5 Tesla", nl: "9.0-12.5 Tesla" }
                ],
                correct: 1,
                explanation: {
                    en: "Magnetic field strength of 2.4-3.8 Tesla creates optimal electromagnetic coupling with ionic species in pudding matrices, ensuring volumetric heating with temperature gradients <2°C throughout the product.",
                    es: "La fuerza del campo magnético de 2.4-3.8 Tesla crea acoplamiento electromagnético óptimo con especies iónicas en matrices de pudín, asegurando calentamiento volumétrico con gradientes de temperatura <2°C a través del producto.",
                    de: "Magnetfeldstärke von 2,4-3,8 Tesla schafft optimale elektromagnetische Kopplung mit Ionenspezies in Puddingmatrizen und gewährleistet volumetrische Erwärmung mit Temperaturgradienten <2°C im gesamten Produkt.",
                    nl: "Magnetische veldsterkte van 2,4-3,8 Tesla creëert optimale elektromagnetische koppeling met ionische soorten in puddingmatrices, wat volumetrische verwarming verzekert met temperatuurgradiënten <2°C door het gehele product."
                }
            },
            {
                question: {
                    en: "In protein-polyphenol interactions for pudding color stabilization, what is the optimal binding constant (Ka) for anthocyanin complexation?",
                    es: "En interacciones proteína-polifenol para estabilización del color del pudín, ¿cuál es la constante de unión óptima (Ka) para la complejación de antocianinas?",
                    de: "Bei Protein-Polyphenol-Wechselwirkungen zur Puddingfarbstabilisierung, was ist die optimale Bindungskonstante (Ka) für Anthocyan-Komplexierung?",
                    nl: "Bij proteïne-polyfenol interacties voor puddingkleurstabilisatie, wat is de optimale bindingsconstante (Ka) voor anthocyaan-complexatie?"
                },
                options: [
                    { en: "Ka = 1.2×10³ M⁻¹", es: "Ka = 1.2×10³ M⁻¹", de: "Ka = 1.2×10³ M⁻¹", nl: "Ka = 1.2×10³ M⁻¹" },
                    { en: "Ka = 3.8×10⁴ M⁻¹", es: "Ka = 3.8×10⁴ M⁻¹", de: "Ka = 3.8×10⁴ M⁻¹", nl: "Ka = 3.8×10⁴ M⁻¹" },
                    { en: "Ka = 7.5×10⁵ M⁻¹", es: "Ka = 7.5×10⁵ M⁻¹", de: "Ka = 7.5×10⁵ M⁻¹", nl: "Ka = 7.5×10⁵ M⁻¹" },
                    { en: "Ka = 2.1×10⁷ M⁻¹", es: "Ka = 2.1×10⁷ M⁻¹", de: "Ka = 2.1×10⁷ M⁻¹", nl: "Ka = 2.1×10⁷ M⁻¹" }
                ],
                correct: 2,
                explanation: {
                    en: "Binding constant of 7.5×10⁵ M⁻¹ indicates strong but reversible protein-anthocyanin complexation that protects pigments from degradation while allowing controlled color release during consumption.",
                    es: "La constante de unión de 7.5×10⁵ M⁻¹ indica complejación proteína-antocianina fuerte pero reversible que protege pigmentos de la degradación mientras permite liberación controlada de color durante el consumo.",
                    de: "Bindungskonstante von 7,5×10⁵ M⁻¹ zeigt starke aber reversible Protein-Anthocyan-Komplexierung an, die Pigmente vor Abbau schützt und gleichzeitig kontrollierte Farbfreisetzung während des Verzehrs ermöglicht.",
                    nl: "Bindingsconstante van 7,5×10⁵ M⁻¹ duidt op sterke maar omkeerbare proteïne-anthocyaan complexatie die pigmenten beschermt tegen afbraak terwijl gecontroleerde kleurafgifte tijdens consumptie mogelijk blijft."
                }
            },
            {
                question: {
                    en: "What is the critical Weber number (We) for droplet breakup in high-shear pudding emulsification?",
                    es: "¿Cuál es el número de Weber crítico (We) para la ruptura de gotas en emulsificación de pudín de alto cizallamiento?",
                    de: "Was ist die kritische Weberzahl (We) für Tröpfchenaufbruch bei Hochscherpudding-Emulgierung?",
                    nl: "Wat is het kritieke Weber-getal (We) voor druppelopsplitsing bij hoge-afschuif puddingemulsificatie?"
                },
                options: [
                    { en: "We = 8-12", es: "We = 8-12", de: "We = 8-12", nl: "We = 8-12" },
                    { en: "We = 18-25", es: "We = 18-25", de: "We = 18-25", nl: "We = 18-25" },
                    { en: "We = 35-45", es: "We = 35-45", de: "We = 35-45", nl: "We = 35-45" },
                    { en: "We = 65-80", es: "We = 65-80", de: "We = 65-80", nl: "We = 65-80" }
                ],
                correct: 1,
                explanation: {
                    en: "Critical Weber number of 18-25 represents the threshold where inertial forces overcome surface tension forces, enabling efficient droplet breakup while maintaining energy economy in pudding emulsification systems.",
                    es: "El número de Weber crítico de 18-25 representa el umbral donde las fuerzas inerciales superan las fuerzas de tensión superficial, permitiendo ruptura eficiente de gotas mientras mantiene economía energética en sistemas de emulsificación de pudín.",
                    de: "Kritische Weberzahl von 18-25 repräsentiert die Schwelle, wo Trägheitskräfte Oberflächenspannungskräfte überwinden und effizienten Tröpfchenaufbruch bei gleichzeitiger Energieökonomie in Pudding-Emulgiersystemen ermöglichen.",
                    nl: "Kritiek Weber-getal van 18-25 vertegenwoordigt de drempel waar traagkeidskrachten oppervlaktespanningskrachten overwinnen, wat efficiënte druppelopsplitsing mogelijk maakt terwijl energie-economie in puddingemulsificatiesystemen behouden blijft."
                }
            },
            {
                question: {
                    en: "In cryoconcentration-assisted pudding processing, what glass transition temperature ensures optimal texture retention?",
                    es: "En el procesamiento de pudín asistido por crioconcentración, ¿qué temperatura de transición vítrea asegura retención óptima de textura?",
                    de: "Bei der kryokonzentrationsunterstützten Puddingverarbeitung, welche Glasübergangstemperatur gewährleistet optimale Texturerhaltung?",
                    nl: "Bij cryoconcentratie-geassisteerde puddingverwerking, welke glasovergangstemperatuur verzekert optimale textuurretentie?"
                },
                options: [
                    { en: "Tg = -25 to -18°C", es: "Tg = -25 a -18°C", de: "Tg = -25 bis -18°C", nl: "Tg = -25 tot -18°C" },
                    { en: "Tg = -35 to -28°C", es: "Tg = -35 a -28°C", de: "Tg = -35 bis -28°C", nl: "Tg = -35 tot -28°C" },
                    { en: "Tg = -45 to -38°C", es: "Tg = -45 a -38°C", de: "Tg = -45 bis -38°C", nl: "Tg = -45 tot -38°C" },
                    { en: "Tg = -55 to -48°C", es: "Tg = -55 a -48°C", de: "Tg = -55 bis -48°C", nl: "Tg = -55 tot -48°C" }
                ],
                correct: 2,
                explanation: {
                    en: "Glass transition temperature of -45 to -38°C represents the optimal amorphous state where molecular mobility is restricted enough to preserve pudding microstructure while maintaining processing feasibility.",
                    es: "La temperatura de transición vítrea de -45 a -38°C representa el estado amorfo óptimo donde la movilidad molecular está lo suficientemente restringida para preservar la microestructura del pudín mientras mantiene la viabilidad del procesamiento.",
                    de: "Glasübergangstemperatur von -45 bis -38°C repräsentiert den optimalen amorphen Zustand, wo molekulare Mobilität ausreichend eingeschränkt ist, um Pudding-Mikrostruktur zu erhalten und gleichzeitig Verarbeitungsfähigkeit aufrechtzuerhalten.",
                    nl: "Glasovergangstemperatuur van -45 tot -38°C vertegenwoordigt de optimale amorfe toestand waar moleculaire mobiliteit voldoende beperkt is om puddingmicrostructuur te behouden terwijl verwerkingshaalbaarheid gehandhaafd blijft."
                }
            },
            {
                question: {
                    en: "What is the optimal zeta potential (ζ) for colloidal stability in protein-stabilized pudding systems?",
                    es: "¿Cuál es el potencial zeta óptimo (ζ) para la estabilidad coloidal en sistemas de pudín estabilizados con proteína?",
                    de: "Was ist das optimale Zetapotential (ζ) für kolloidale Stabilität in proteinstabilisierten Puddingsystemen?",
                    nl: "Wat is de optimale zeta-potentiaal (ζ) voor colloïdale stabiliteit in eiwitstabiliseerde puddingsystemen?"
                },
                options: [
                    { en: "ζ = ±15 to ±20 mV", es: "ζ = ±15 a ±20 mV", de: "ζ = ±15 bis ±20 mV", nl: "ζ = ±15 tot ±20 mV" },
                    { en: "ζ = ±25 to ±35 mV", es: "ζ = ±25 a ±35 mV", de: "ζ = ±25 bis ±35 mV", nl: "ζ = ±25 tot ±35 mV" },
                    { en: "ζ = ±40 to ±50 mV", es: "ζ = ±40 a ±50 mV", de: "ζ = ±40 bis ±50 mV", nl: "ζ = ±40 tot ±50 mV" },
                    { en: "ζ = ±60 to ±75 mV", es: "ζ = ±60 a ±75 mV", de: "ζ = ±60 bis ±75 mV", nl: "ζ = ±60 tot ±75 mV" }
                ],
                correct: 2,
                explanation: {
                    en: "Zeta potential of ±40 to ±50 mV provides strong electrostatic repulsion between protein-coated particles, ensuring kinetic stability against aggregation while maintaining desired flow properties in pudding systems.",
                    es: "El potencial zeta de ±40 a ±50 mV proporciona fuerte repulsión electrostática entre partículas recubiertas de proteína, asegurando estabilidad cinética contra agregación mientras mantiene propiedades de flujo deseadas en sistemas de pudín.",
                    de: "Zetapotential von ±40 bis ±50 mV bietet starke elektrostatische Abstoßung zwischen proteinbeschichteten Partikeln und gewährleistet kinetische Stabilität gegen Aggregation bei gleichzeitiger Aufrechterhaltung gewünschter Fließeigenschaften in Puddingsystemen.",
                    nl: "Zeta-potentiaal van ±40 tot ±50 mV biedt sterke elektrostatische afstoting tussen eiwit-gecoate deeltjes, wat kinetische stabiliteit tegen aggregatie verzekert terwijl gewenste stroomeigenschappen in puddingsystemen behouden blijven."
                }
            },
            {
                question: {
                    en: "In microwave-assisted pudding synthesis, what dielectric loss factor (ε'') optimizes selective heating of water phases?",
                    es: "En la síntesis de pudín asistida por microondas, ¿qué factor de pérdida dieléctrica (ε'') optimiza el calentamiento selectivo de fases acuosas?",
                    de: "Bei mikrowellenunterstützter Puddingsynthese, welcher dielektrische Verlustfaktor (ε'') optimiert selektive Erwärmung von Wasserphasen?",
                    nl: "Bij magnetron-geassisteerde puddingsynthese, welke diëlektrische verliesfactor (ε'') optimaliseert selectieve verwarming van waterfasen?"
                },
                options: [
                    { en: "ε'' = 2.5-4.8", es: "ε'' = 2.5-4.8", de: "ε'' = 2.5-4.8", nl: "ε'' = 2.5-4.8" },
                    { en: "ε'' = 8.2-12.6", es: "ε'' = 8.2-12.6", de: "ε'' = 8.2-12.6", nl: "ε'' = 8.2-12.6" },
                    { en: "ε'' = 18.5-25.3", es: "ε'' = 18.5-25.3", de: "ε'' = 18.5-25.3", nl: "ε'' = 18.5-25.3" },
                    { en: "ε'' = 35.7-42.1", es: "ε'' = 35.7-42.1", de: "ε'' = 35.7-42.1", nl: "ε'' = 35.7-42.1" }
                ],
                correct: 1,
                explanation: {
                    en: "Dielectric loss factor of 8.2-12.6 provides optimal electromagnetic energy absorption by water molecules while minimizing heating of lipid and protein phases, enabling precise temperature control in pudding processing.",
                    es: "El factor de pérdida dieléctrica de 8.2-12.6 proporciona absorción óptima de energía electromagnética por moléculas de agua mientras minimiza el calentamiento de fases lipídicas y proteicas, permitiendo control preciso de temperatura en el procesamiento de pudín.",
                    de: "Dielektrischer Verlustfaktor von 8,2-12,6 bietet optimale elektromagnetische Energieabsorption durch Wassermoleküle bei gleichzeitiger Minimierung der Erwärmung von Lipid- und Proteinphasen, was präzise Temperaturkontrolle in der Puddingverarbeitung ermöglicht.",
                    nl: "Diëlektrische verliesfactor van 8,2-12,6 biedt optimale elektromagnetische energieabsorptie door watermoleculen terwijl verwarming van lipide- en eiwitfasen wordt geminimaliseerd, wat precieze temperatuurcontrole in puddingverwerking mogelijk maakt."
                }
            },
            {
                question: {
                    en: "What is the critical Péclet number (Pe) for mass transfer optimization in membrane-concentrated pudding production?",
                    es: "¿Cuál es el número de Péclet crítico (Pe) para optimización de transferencia de masa en producción de pudín concentrado por membrana?",
                    de: "Was ist die kritische Pécletzahl (Pe) für Stofftransferoptimierung in membrankonzentrierter Puddingproduktion?",
                    nl: "Wat is het kritieke Péclet-getal (Pe) voor massaoverdrachtoptimalisatie in membraan-geconcentreerde puddingproductie?"
                },
                options: [
                    { en: "Pe = 0.8-1.5", es: "Pe = 0.8-1.5", de: "Pe = 0.8-1.5", nl: "Pe = 0.8-1.5" },
                    { en: "Pe = 3.2-5.8", es: "Pe = 3.2-5.8", de: "Pe = 3.2-5.8", nl: "Pe = 3.2-5.8" },
                    { en: "Pe = 8.5-12.7", es: "Pe = 8.5-12.7", de: "Pe = 8.5-12.7", nl: "Pe = 8.5-12.7" },
                    { en: "Pe = 18.2-24.6", es: "Pe = 18.2-24.6", de: "Pe = 18.2-24.6", nl: "Pe = 18.2-24.6" }
                ],
                correct: 2,
                explanation: {
                    en: "Péclet number of 8.5-12.7 indicates optimal balance between convective and diffusive transport, maximizing permeate flux while preventing concentration polarization in pudding membrane processing.",
                    es: "El número de Péclet de 8.5-12.7 indica equilibrio óptimo entre transporte convectivo y difusivo, maximizando el flujo de permeado mientras previene la polarización de concentración en el procesamiento de membrana de pudín.",
                    de: "Pécletzahl von 8,5-12,7 zeigt optimales Gleichgewicht zwischen konvektivem und diffusivem Transport an, maximiert Permeatfluss bei gleichzeitiger Verhinderung von Konzentrationspolarisation in der Pudding-Membranverarbeitung.",
                    nl: "Péclet-getal van 8,5-12,7 duidt op optimale balans tussen convectief en diffusief transport, wat permeaatflux maximaliseert terwijl concentratiepolarisatie in puddingmembraanverwerking wordt voorkomen."
                }
            },
            {
                question: {
                    en: "What is the main difference between a pudding and a mousse?",
                    es: "¿Cuál es la principal diferencia entre un pudín y una mousse?",
                    de: "Was ist der Hauptunterschied zwischen einem Pudding und einer Mousse?",
                    nl: "Wat is het belangrijkste verschil tussen een pudding en een mousse?"
                },
                options: [
                    { en: "Temperature when served", es: "Temperatura al servir", de: "Temperatur beim Servieren", nl: "Temperatuur bij serveren" },
                    { en: "Type of sweetener used", es: "Tipo de edulcorante usado", de: "Art des verwendeten Süßstoffs", nl: "Type gebruikte zoetstof" },
                    { en: "Texture and airiness", es: "Textura y aire", de: "Textur und Luftigkeit", nl: "Textuur en luchtigheid" },
                    { en: "Color of the dessert", es: "Color del postre", de: "Farbe des Desserts", nl: "Kleur van het dessert" }
                ],
                correct: 2,
                explanation: {
                    en: "Mousse has a light, airy texture achieved by incorporating air through whipping, while pudding has a denser, creamier consistency.",
                    es: "La mousse tiene una textura ligera y aireada lograda al incorporar aire mediante batido, mientras que el pudín tiene una consistencia más densa y cremosa.",
                    de: "Mousse hat eine leichte, luftige Textur, die durch Einschlagen von Luft erreicht wird, während Pudding eine dichtere, cremigere Konsistenz hat.",
                    nl: "Mousse heeft een lichte, luchtige textuur die wordt bereikt door lucht in te kloppen, terwijl pudding een dichtere, romige consistentie heeft."
                }
            },
            {
                question: {
                    en: "Which pudding is traditionally served flambéed?",
                    es: "¿Qué pudín se sirve tradicionalmente flameado?",
                    de: "Welcher Pudding wird traditionell flambiert serviert?",
                    nl: "Welke pudding wordt traditioneel geflambeerd geserveerd?"
                },
                options: [
                    { en: "Chocolate pudding", es: "Pudín de chocolate", de: "Schokoladenpudding", nl: "Chocoladepudding" },
                    { en: "Rice pudding", es: "Arroz con leche", de: "Reispudding", nl: "Rijstpudding" },
                    { en: "Christmas pudding", es: "Pudín de Navidad", de: "Weihnachtspudding", nl: "Kerstpudding" },
                    { en: "Bread pudding", es: "Budín de pan", de: "Brotpudding", nl: "Broodpudding" }
                ],
                correct: 2,
                explanation: {
                    en: "Christmas pudding is traditionally served flambéed with brandy or rum, creating a dramatic presentation during the holiday season.",
                    es: "El pudín de Navidad se sirve tradicionalmente flameado con brandy o ron, creando una presentación dramática durante las fiestas navideñas.",
                    de: "Weihnachtspudding wird traditionell mit Brandy oder Rum flambiert serviert und sorgt für eine dramatische Präsentation während der Weihnachtszeit.",
                    nl: "Kerstpudding wordt traditioneel geflambeerd geserveerd met brandy of rum, wat een dramatische presentatie creëert tijdens het kerstseizoen."
                }
            },
            {
                question: {
                    en: "What is the key technique for preventing lumps in cornstarch pudding?",
                    es: "¿Cuál es la técnica clave para prevenir grumos en el pudín de maicena?",
                    de: "Was ist die Schlüsseltechnik zur Vermeidung von Klumpen in Maisstärke-Pudding?",
                    nl: "Wat is de belangrijkste techniek om klontjes in maïzena pudding te voorkomen?"
                },
                options: [
                    { en: "Adding sugar first", es: "Agregar azúcar primero", de: "Zuerst Zucker hinzufügen", nl: "Eerst suiker toevoegen" },
                    { en: "Making a slurry with cold liquid", es: "Hacer una mezcla con líquido frío", de: "Eine Aufschlämmung mit kalter Flüssigkeit machen", nl: "Een mengsel maken met koude vloeistof" },
                    { en: "Using boiling water", es: "Usar agua hirviendo", de: "Kochendes Wasser verwenden", nl: "Kokend water gebruiken" },
                    { en: "Whisking very slowly", es: "Batir muy lentamente", de: "Sehr langsam schlagen", nl: "Heel langzaam kloppen" }
                ],
                correct: 1,
                explanation: {
                    en: "Making a slurry by mixing cornstarch with cold liquid before adding to hot mixture prevents lumping and ensures smooth texture.",
                    es: "Hacer una mezcla mezclando maicena con líquido frío antes de agregar a la mezcla caliente previene grumos y asegura textura suave.",
                    de: "Das Herstellen einer Aufschlämmung durch Mischen von Maisstärke mit kalter Flüssigkeit vor dem Hinzufügen zur heißen Mischung verhindert Klumpenbildung und sorgt für glatte Textur.",
                    nl: "Het maken van een mengsel door maïzena met koude vloeistof te mengen voordat het aan het hete mengsel wordt toegevoegd, voorkomt klontering en zorgt voor een gladde textuur."
                }
            }
        ]
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level4Data;
    } else if (typeof window !== 'undefined') {
        window.level4Data = level4Data;
    }

})();