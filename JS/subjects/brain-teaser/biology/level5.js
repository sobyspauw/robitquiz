(function() {
    const level5 = {
        name: {
            en: "Advanced Biochemistry & Metabolism",
            es: "Bioquímica y Metabolismo Avanzados",
            de: "Erweiterte Biochemie und Metabolismus",
            nl: "Geavanceerde Biochemie en Metabolisme"
        },
        questions: [
            {
                question: {
                    en: "What is the primary regulatory mechanism for glycolysis at the phosphofructokinase-1 (PFK-1) step?",
                    es: "¿Cuál es el mecanismo regulatorio principal para la glucólisis en el paso de la fosfofructocinasa-1 (PFK-1)?",
                    de: "Was ist der primäre Regulationsmechanismus für die Glykolyse am Phosphofructokinase-1 (PFK-1) Schritt?",
                    nl: "Wat is het primaire regulatiemechanisme voor glycolyse bij de fosfofructokinase-1 (PFK-1) stap?"
                },
                options: [
                    { en: "Competitive inhibition", es: "Inhibición competitiva", de: "Kompetitive Hemmung", nl: "Competitieve inhibitie" },
                    { en: "Allosteric regulation", es: "Regulación alostérica", de: "Allosterische Regulation", nl: "Allosterische regulatie" },
                    { en: "Covalent modification", es: "Modificación covalente", de: "Kovalente Modifikation", nl: "Covalente modificatie" },
                    { en: "Compartmentalization", es: "Compartimentalización", de: "Kompartimentierung", nl: "Compartimentalisatie" }
                ],
                correct: 1,
                explanation: {
                    en: "PFK-1 is allosterically inhibited by ATP and citrate, and activated by AMP and fructose-2,6-bisphosphate, making it the key regulatory enzyme of glycolysis.",
                    es: "La PFK-1 es inhibida alostéricamente por ATP y citrato, y activada por AMP y fructosa-2,6-bisfosfato, convirtiéndola en la enzima regulatoria clave de la glucólisis.",
                    de: "PFK-1 wird allosterisch durch ATP und Citrat gehemmt und durch AMP und Fructose-2,6-bisphosphat aktiviert, wodurch es das wichtigste regulatorische Enzym der Glykolyse ist.",
                    nl: "PFK-1 wordt allosterisch geremd door ATP en citraat, en geactiveerd door AMP en fructose-2,6-bisfosfaat, waardoor het het belangrijkste regulatoire enzym van de glycolyse is."
                }
            },
            {
                question: {
                    en: "In oxidative phosphorylation, what is the P/O ratio for NADH oxidation?",
                    es: "En la fosforilación oxidativa, ¿cuál es la relación P/O para la oxidación de NADH?",
                    de: "Was ist das P/O-Verhältnis für die NADH-Oxidation in der oxidativen Phosphorylierung?",
                    nl: "Wat is de P/O-verhouding voor NADH-oxidatie bij oxidatieve fosforylering?"
                },
                options: [
                    { en: "1.5", es: "1,5", de: "1,5", nl: "1,5" },
                    { en: "2.5", es: "2,5", de: "2,5", nl: "2,5" },
                    { en: "3.0", es: "3,0", de: "3,0", nl: "3,0" },
                    { en: "4.0", es: "4,0", de: "4,0", nl: "4,0" }
                ],
                correct: 1,
                explanation: {
                    en: "The P/O ratio for NADH is approximately 2.5, reflecting the ATP yield per oxygen atom consumed during electron transport through complexes I, III, and IV.",
                    es: "La relación P/O para NADH es aproximadamente 2,5, reflejando el rendimiento de ATP por átomo de oxígeno consumido durante el transporte de electrones a través de los complejos I, III y IV.",
                    de: "Das P/O-Verhältnis für NADH beträgt etwa 2,5, was die ATP-Ausbeute pro verbrauchtem Sauerstoffatom während des Elektronentransports durch die Komplexe I, III und IV widerspiegelt.",
                    nl: "De P/O-verhouding voor NADH is ongeveer 2,5, wat de ATP-opbrengst per verbruikt zuurstofatoom weergeeft tijdens elektronentransport door complexen I, III en IV."
                }
            },
            {
                question: {
                    en: "Which enzyme catalyzes the rate-limiting step in fatty acid synthesis?",
                    es: "¿Qué enzima cataliza el paso limitante de la velocidad en la síntesis de ácidos grasos?",
                    de: "Welches Enzym katalysiert den geschwindigkeitsbestimmenden Schritt in der Fettsäuresynthese?",
                    nl: "Welk enzym katalyseert de snelheidsbepalende stap in vetzuursynthese?"
                },
                options: [
                    { en: "Fatty acid synthase", es: "Ácido graso sintasa", de: "Fettsäure-Synthase", nl: "Vetzuursynthase" },
                    { en: "Acetyl-CoA carboxylase", es: "Acetil-CoA carboxilasa", de: "Acetyl-CoA-Carboxylase", nl: "Acetyl-CoA carboxylase" },
                    { en: "ATP citrate lyase", es: "ATP citrato liasa", de: "ATP-Citrat-Lyase", nl: "ATP citraatlyase" },
                    { en: "Malic enzyme", es: "Enzima málica", de: "Malisches Enzym", nl: "Appelzuurenzym" }
                ],
                correct: 1,
                explanation: {
                    en: "Acetyl-CoA carboxylase catalyzes the formation of malonyl-CoA from acetyl-CoA, which is the committed and rate-limiting step in fatty acid synthesis.",
                    es: "La acetil-CoA carboxilasa cataliza la formación de malonil-CoA a partir de acetil-CoA, que es el paso comprometido y limitante de la velocidad en la síntesis de ácidos grasos.",
                    de: "Acetyl-CoA-Carboxylase katalysiert die Bildung von Malonyl-CoA aus Acetyl-CoA, was der verpflichtende und geschwindigkeitsbestimmende Schritt in der Fettsäuresynthese ist.",
                    nl: "Acetyl-CoA carboxylase katalyseert de vorming van malonyl-CoA uit acetyl-CoA, wat de vastgelegde en snelheidsbepalende stap is in vetzuursynthese."
                }
            },
            {
                question: {
                    en: "What is the function of the malate-aspartate shuttle?",
                    es: "¿Cuál es la función del lanzadera malato-aspartato?",
                    de: "Was ist die Funktion des Malat-Aspartat-Shuttles?",
                    nl: "Wat is de functie van de malaat-aspartaat shuttle?"
                },
                options: [
                    { en: "Transport fatty acids across membranes", es: "Transportar ácidos grasos a través de membranas", de: "Fettsäuren durch Membranen transportieren", nl: "Vetzuren door membranen transporteren" },
                    { en: "Transfer reducing equivalents into mitochondria", es: "Transferir equivalentes reductores hacia las mitocondrias", de: "Reduzierende Äquivalente in Mitochondrien übertragen", nl: "Reducerende equivalenten naar mitochondriën overbrengen" },
                    { en: "Export acetyl-CoA from mitochondria", es: "Exportar acetil-CoA desde las mitocondrias", de: "Acetyl-CoA aus Mitochondrien exportieren", nl: "Acetyl-CoA uit mitochondriën exporteren" },
                    { en: "Maintain pH balance", es: "Mantener el equilibrio de pH", de: "pH-Gleichgewicht aufrechterhalten", nl: "pH-balans handhaven" }
                ],
                correct: 1,
                explanation: {
                    en: "The malate-aspartate shuttle transfers NADH reducing equivalents from the cytosol into mitochondria, where they can be oxidized by the electron transport chain.",
                    es: "El lanzadera malato-aspartato transfiere equivalentes reductores de NADH desde el citosol hacia las mitocondrias, donde pueden ser oxidados por la cadena de transporte de electrones.",
                    de: "Das Malat-Aspartat-Shuttle überträgt NADH-reduzierende Äquivalente aus dem Zytosol in die Mitochondrien, wo sie von der Elektronentransportkette oxidiert werden können.",
                    nl: "De malaat-aspartaat shuttle draagt NADH-reducerende equivalenten over van het cytosol naar de mitochondriën, waar ze kunnen worden geoxideerd door de elektronentransportketen."
                }
            },
            {
                question: {
                    en: "Which cofactor is required for the pyruvate dehydrogenase complex?",
                    es: "¿Qué cofactor se requiere para el complejo piruvato deshidrogenasa?",
                    de: "Welcher Cofaktor wird für den Pyruvat-Dehydrogenase-Komplex benötigt?",
                    nl: "Welke cofactor is vereist voor het pyruvaat dehydrogenase complex?"
                },
                options: [
                    { en: "Thiamine pyrophosphate only", es: "Solo tiamina pirofosfato", de: "Nur Thiaminpyrophosphat", nl: "Alleen thiamine pyrofosfaat" },
                    { en: "NAD+ and FAD only", es: "Solo NAD+ y FAD", de: "Nur NAD+ und FAD", nl: "Alleen NAD+ en FAD" },
                    { en: "CoA-SH and Mg2+ only", es: "Solo CoA-SH y Mg2+", de: "Nur CoA-SH und Mg2+", nl: "Alleen CoA-SH en Mg2+" },
                    { en: "All: TPP, NAD+, FAD, CoA-SH, and Mg2+", es: "Todos: TPP, NAD+, FAD, CoA-SH y Mg2+", de: "Alle: TPP, NAD+, FAD, CoA-SH und Mg2+", nl: "Alle: TPP, NAD+, FAD, CoA-SH en Mg2+" }
                ],
                correct: 3,
                explanation: {
                    en: "The pyruvate dehydrogenase complex requires five cofactors: thiamine pyrophosphate (TPP), NAD+, FAD, coenzyme A (CoA-SH), and Mg2+ for its complete catalytic function.",
                    es: "El complejo piruvato deshidrogenasa requiere cinco cofactores: tiamina pirofosfato (TPP), NAD+, FAD, coenzima A (CoA-SH) y Mg2+ para su función catalítica completa.",
                    de: "Der Pyruvat-Dehydrogenase-Komplex benötigt fünf Cofaktoren: Thiaminpyrophosphat (TPP), NAD+, FAD, Coenzym A (CoA-SH) und Mg2+ für seine vollständige katalytische Funktion.",
                    nl: "Het pyruvaat dehydrogenase complex vereist vijf cofactoren: thiamine pyrofosfaat (TPP), NAD+, FAD, co-enzym A (CoA-SH) en Mg2+ voor zijn volledige katalytische functie."
                }
            },
            {
                question: {
                    en: "What is the primary function of the pentose phosphate pathway?",
                    es: "¿Cuál es la función principal de la vía de las pentosas fosfato?",
                    de: "Was ist die primäre Funktion des Pentosephosphatwegs?",
                    nl: "Wat is de primaire functie van de pentosefosfaatroute?"
                },
                options: [
                    { en: "ATP generation", es: "Generación de ATP", de: "ATP-Erzeugung", nl: "ATP-generatie" },
                    { en: "NADPH production and ribose-5-phosphate synthesis", es: "Producción de NADPH y síntesis de ribosa-5-fosfato", de: "NADPH-Produktion und Ribose-5-phosphat-Synthese", nl: "NADPH-productie en ribose-5-fosfaat synthese" },
                    { en: "Lactate formation", es: "Formación de lactato", de: "Laktatbildung", nl: "Lactaatvorming" },
                    { en: "Amino acid synthesis", es: "Síntesis de aminoácidos", de: "Aminosäuresynthese", nl: "Aminozuursynthese" }
                ],
                correct: 1,
                explanation: {
                    en: "The pentose phosphate pathway produces NADPH for reductive biosynthesis and antioxidant defense, and ribose-5-phosphate for nucleotide synthesis.",
                    es: "La vía de las pentosas fosfato produce NADPH para biosíntesis reductora y defensa antioxidante, y ribosa-5-fosfato para síntesis de nucleótidos.",
                    de: "Der Pentosephosphatweg produziert NADPH für reduktive Biosynthese und antioxidative Abwehr sowie Ribose-5-phosphat für die Nukleotidsynthese.",
                    nl: "De pentosefosfaatroute produceert NADPH voor reductieve biosynthese en antioxidantverdediging, en ribose-5-fosfaat voor nucleotidesynthese."
                }
            },
            {
                question: {
                    en: "Which enzyme is deficient in galactosemia?",
                    es: "¿Qué enzima es deficiente en la galactosemia?",
                    de: "Welches Enzym ist bei Galaktosämie mangelhaft?",
                    nl: "Welk enzym is deficiënt bij galactosemie?"
                },
                options: [
                    { en: "Galactokinase", es: "Galactoquinasa", de: "Galaktokinase", nl: "Galactokinase" },
                    { en: "Galactose-1-phosphate uridyltransferase", es: "Galactosa-1-fosfato uridiltransferasa", de: "Galaktose-1-phosphat-Uridyltransferase", nl: "Galactose-1-fosfaat uridyltransferase" },
                    { en: "UDP-glucose 4-epimerase", es: "UDP-glucosa 4-epimerasa", de: "UDP-Glucose-4-Epimerase", nl: "UDP-glucose 4-epimerase" },
                    { en: "All of the above can cause galactosemia", es: "Todas las anteriores pueden causar galactosemia", de: "Alle oben genannten können Galaktosämie verursachen", nl: "Alle bovenstaande kunnen galactosemie veroorzaken" }
                ],
                correct: 3,
                explanation: {
                    en: "Galactosemia can be caused by deficiency in any of the three enzymes in the Leloir pathway: galactokinase, galactose-1-phosphate uridyltransferase (most common), or UDP-glucose 4-epimerase.",
                    es: "La galactosemia puede ser causada por deficiencia en cualquiera de las tres enzimas de la vía de Leloir: galactoquinasa, galactosa-1-fosfato uridiltransferasa (más común), o UDP-glucosa 4-epimerasa.",
                    de: "Galaktosämie kann durch Mangel an einem der drei Enzyme im Leloir-Weg verursacht werden: Galaktokinase, Galaktose-1-phosphat-Uridyltransferase (häufigste), oder UDP-Glucose-4-Epimerase.",
                    nl: "Galactosemie kan worden veroorzaakt door deficiëntie van een van de drie enzymen in de Leloir-route: galactokinase, galactose-1-fosfaat uridyltransferase (meest voorkomend), of UDP-glucose 4-epimerase."
                }
            },
            {
                question: {
                    en: "What is the committed step in cholesterol biosynthesis?",
                    es: "¿Cuál es el paso comprometido en la biosíntesis del colesterol?",
                    de: "Was ist der verpflichtende Schritt in der Cholesterinbiosynthese?",
                    nl: "Wat is de vastgelegde stap in cholesterolbiosynthese?"
                },
                options: [
                    { en: "HMG-CoA formation", es: "Formación de HMG-CoA", de: "HMG-CoA-Bildung", nl: "HMG-CoA vorming" },
                    { en: "Mevalonate formation by HMG-CoA reductase", es: "Formación de mevalonato por HMG-CoA reductasa", de: "Mevalonatbildung durch HMG-CoA-Reduktase", nl: "Mevalonaatvorming door HMG-CoA reductase" },
                    { en: "Squalene synthesis", es: "Síntesis de escualeno", de: "Squalen-Synthese", nl: "Squaleen synthese" },
                    { en: "Lanosterol cyclization", es: "Ciclización de lanosterol", de: "Lanosterol-Zyklisierung", nl: "Lanosterol cyclisatie" }
                ],
                correct: 1,
                explanation: {
                    en: "The reduction of HMG-CoA to mevalonate by HMG-CoA reductase is the committed and rate-limiting step in cholesterol biosynthesis, heavily regulated by feedback inhibition.",
                    es: "La reducción de HMG-CoA a mevalonato por la HMG-CoA reductasa es el paso comprometido y limitante de la velocidad en la biosíntesis del colesterol, fuertemente regulado por inhibición por retroalimentación.",
                    de: "Die Reduktion von HMG-CoA zu Mevalonat durch HMG-CoA-Reduktase ist der verpflichtende und geschwindigkeitsbestimmende Schritt in der Cholesterinbiosynthese, stark reguliert durch Rückkopplungshemmung.",
                    nl: "De reductie van HMG-CoA tot mevalonaat door HMG-CoA reductase is de vastgelegde en snelheidsbepalende stap in cholesterolbiosynthese, sterk gereguleerd door terugkoppelingsremming."
                }
            },
            {
                question: {
                    en: "Which metabolite is the primary allosteric activator of acetyl-CoA carboxylase?",
                    es: "¿Cuál metabolito es el activador alostérico principal de la acetil-CoA carboxilasa?",
                    de: "Welcher Metabolit ist der primäre allosterische Aktivator der Acetyl-CoA-Carboxylase?",
                    nl: "Welke metaboliet is de primaire allosterische activator van acetyl-CoA carboxylase?"
                },
                options: [
                    { en: "Citrate", es: "Citrato", de: "Citrat", nl: "Citraat" },
                    { en: "ATP", es: "ATP", de: "ATP", nl: "ATP" },
                    { en: "Malonyl-CoA", es: "Malonil-CoA", de: "Malonyl-CoA", nl: "Malonyl-CoA" },
                    { en: "Palmitoyl-CoA", es: "Palmitoil-CoA", de: "Palmitoyl-CoA", nl: "Palmitoyl-CoA" }
                ],
                correct: 0,
                explanation: {
                    en: "Citrate is the primary allosteric activator of acetyl-CoA carboxylase, promoting fatty acid synthesis when acetyl-CoA is abundant in the mitochondria and exported as citrate.",
                    es: "El citrato es el activador alostérico principal de la acetil-CoA carboxilasa, promoviendo la síntesis de ácidos grasos cuando acetil-CoA es abundante en las mitocondrias y se exporta como citrato.",
                    de: "Citrat ist der primäre allosterische Aktivator der Acetyl-CoA-Carboxylase und fördert die Fettsäuresynthese, wenn Acetyl-CoA in den Mitochondrien reichlich vorhanden ist und als Citrat exportiert wird.",
                    nl: "Citraat is de primaire allosterische activator van acetyl-CoA carboxylase, wat vetzuursynthese bevordert wanneer acetyl-CoA overvloedig aanwezig is in de mitochondriën en geëxporteerd wordt als citraat."
                }
            },
            {
                question: {
                    en: "What is the role of carnitine in fatty acid metabolism?",
                    es: "¿Cuál es el papel de la carnitina en el metabolismo de ácidos grasos?",
                    de: "Was ist die Rolle von Carnitin im Fettsäurestoffwechsel?",
                    nl: "Wat is de rol van carnitine in vetzuurmetabolisme?"
                },
                options: [
                    { en: "Activates fatty acids for synthesis", es: "Activa ácidos grasos para síntesis", de: "Aktiviert Fettsäuren für die Synthese", nl: "Activeert vetzuren voor synthese" },
                    { en: "Transports fatty acids into mitochondria", es: "Transporta ácidos grasos hacia las mitocondrias", de: "Transportiert Fettsäuren in Mitochondrien", nl: "Transporteert vetzuren naar mitochondriën" },
                    { en: "Inhibits fatty acid oxidation", es: "Inhibe la oxidación de ácidos grasos", de: "Hemmt die Fettsäureoxidation", nl: "Remt vetzuuroxidatie" },
                    { en: "Converts fatty acids to ketones", es: "Convierte ácidos grasos en cetonas", de: "Wandelt Fettsäuren in Ketone um", nl: "Zet vetzuren om in ketonen" }
                ],
                correct: 1,
                explanation: {
                    en: "Carnitine forms acylcarnitine esters with long-chain fatty acids, allowing their transport across the inner mitochondrial membrane via the carnitine shuttle system for β-oxidation.",
                    es: "La carnitina forma ésteres de acilcarnitina con ácidos grasos de cadena larga, permitiendo su transporte a través de la membrana mitocondrial interna mediante el sistema de lanzadera de carnitina para β-oxidación.",
                    de: "Carnitin bildet Acylcarnitin-Ester mit langkettigen Fettsäuren und ermöglicht deren Transport über die innere Mitochondrienmembran über das Carnitin-Shuttle-System für β-Oxidation.",
                    nl: "Carnitine vormt acylcarnitine-esters met langketige vetzuren, waardoor hun transport over het binnenste mitochondriale membraan mogelijk wordt via het carnitine-shuttlesysteem voor β-oxidatie."
                }
            },
            {
                question: {
                    en: "Which enzyme deficiency causes Gaucher disease?",
                    es: "¿Qué deficiencia enzimática causa la enfermedad de Gaucher?",
                    de: "Welcher Enzymmangel verursacht die Gaucher-Krankheit?",
                    nl: "Welke enzymdeficiëntie veroorzaakt de ziekte van Gaucher?"
                },
                options: [
                    { en: "α-galactosidase A", es: "α-galactosidasa A", de: "α-Galaktosidase A", nl: "α-galactosidase A" },
                    { en: "β-glucocerebrosidase", es: "β-glucocerebrosidasa", de: "β-Glucocerebrosidase", nl: "β-glucocerebrosidase" },
                    { en: "Sphingomyelinase", es: "Esfingomielinasa", de: "Sphingomyelinase", nl: "Sphingomyelinase" },
                    { en: "α-L-iduronidase", es: "α-L-iduronidasa", de: "α-L-Iduronidase", nl: "α-L-iduronidase" }
                ],
                correct: 1,
                explanation: {
                    en: "Gaucher disease is caused by deficiency in β-glucocerebrosidase (glucocerebrosidase), leading to accumulation of glucocerebroside in macrophages.",
                    es: "La enfermedad de Gaucher es causada por deficiencia en β-glucocerebrosidasa (glucocerebrosidasa), llevando a acumulación de glucocerebrosido en macrófagos.",
                    de: "Die Gaucher-Krankheit wird durch Mangel an β-Glucocerebrosidase (Glucocerebrosidase) verursacht, was zur Ansammlung von Glucocerebroside in Makrophagen führt.",
                    nl: "De ziekte van Gaucher wordt veroorzaakt door deficiëntie in β-glucocerebrosidase (glucocerebrosidase), wat leidt tot ophoping van glucocerebroside in macrofagen."
                }
            },
            {
                question: {
                    en: "What is the primary metabolic fate of branched-chain amino acids (BCAA) in muscle tissue?",
                    es: "¿Cuál es el destino metabólico principal de los aminoácidos de cadena ramificada (BCAA) en el tejido muscular?",
                    de: "Was ist das primäre metabolische Schicksal von verzweigtkettigen Aminosäuren (BCAA) im Muskelgewebe?",
                    nl: "Wat is het primaire metabolische lot van vertakte-keten aminozuren (BCAA) in spierweefsel?"
                },
                options: [
                    { en: "Conversion to glucose", es: "Conversión a glucosa", de: "Umwandlung zu Glucose", nl: "Conversie naar glucose" },
                    { en: "Oxidation for energy", es: "Oxidación para energía", de: "Oxidation für Energie", nl: "Oxidatie voor energie" },
                    { en: "Protein synthesis", es: "Síntesis de proteínas", de: "Proteinsynthese", nl: "Eiwitssynthese" },
                    { en: "Conversion to fatty acids", es: "Conversión a ácidos grasos", de: "Umwandlung zu Fettsäuren", nl: "Conversie naar vetzuren" }
                ],
                correct: 1,
                explanation: {
                    en: "In muscle tissue, branched-chain amino acids (leucine, isoleucine, valine) are primarily oxidized for energy, especially during exercise and fasting states.",
                    es: "En el tejido muscular, los aminoácidos de cadena ramificada (leucina, isoleucina, valina) son oxidados principalmente para energía, especialmente durante ejercicio y estados de ayuno.",
                    de: "Im Muskelgewebe werden verzweigtkettige Aminosäuren (Leucin, Isoleucin, Valin) hauptsächlich für Energie oxidiert, besonders während Training und Fastenzuständen.",
                    nl: "In spierweefsel worden vertakte-keten aminozuren (leucine, isoleucine, valine) voornamelijk geoxideerd voor energie, vooral tijdens inspanning en nuchtere toestanden."
                }
            },
            {
                question: {
                    en: "Which cofactor is required for the conversion of pyruvate to oxaloacetate?",
                    es: "¿Qué cofactor se requiere para la conversión de piruvato a oxaloacetato?",
                    de: "Welcher Cofaktor wird für die Umwandlung von Pyruvat zu Oxalacetat benötigt?",
                    nl: "Welke cofactor is vereist voor de conversie van pyruvaat naar oxaloacetaat?"
                },
                options: [
                    { en: "Thiamine", es: "Tiamina", de: "Thiamin", nl: "Thiamine" },
                    { en: "Biotin", es: "Biotina", de: "Biotin", nl: "Biotine" },
                    { en: "Riboflavin", es: "Riboflavina", de: "Riboflavin", nl: "Riboflavine" },
                    { en: "Niacin", es: "Niacina", de: "Niacin", nl: "Niacine" }
                ],
                correct: 1,
                explanation: {
                    en: "Biotin is the cofactor for pyruvate carboxylase, which catalyzes the ATP-dependent carboxylation of pyruvate to oxaloacetate in gluconeogenesis.",
                    es: "La biotina es el cofactor para la piruvato carboxilasa, que cataliza la carboxilación dependiente de ATP de piruvato a oxaloacetato en la gluconeogénesis.",
                    de: "Biotin ist der Cofaktor für Pyruvat-Carboxylase, die die ATP-abhängige Carboxylierung von Pyruvat zu Oxalacetat in der Gluconeogenese katalysiert.",
                    nl: "Biotine is de cofactor voor pyruvaat carboxylase, dat de ATP-afhankelijke carboxylering van pyruvaat naar oxaloacetaat in gluconeogenese katalyseert."
                }
            },
            {
                question: {
                    en: "What is the primary regulatory mechanism of the citric acid cycle?",
                    es: "¿Cuál es el mecanismo regulatorio principal del ciclo del ácido cítrico?",
                    de: "Was ist der primäre Regulationsmechanismus des Zitronensäurezyklus?",
                    nl: "Wat is het primaire regulatiemechanisme van de citroenzuurcyclus?"
                },
                options: [
                    { en: "Substrate availability", es: "Disponibilidad de sustrato", de: "Substratverfügbarkeit", nl: "Substraatbeschikbaarheid" },
                    { en: "Product inhibition by NADH and ATP", es: "Inhibición por producto por NADH y ATP", de: "Produkthemmung durch NADH und ATP", nl: "Productremming door NADH en ATP" },
                    { en: "Covalent modification", es: "Modificación covalente", de: "Kovalente Modifikation", nl: "Covalente modificatie" },
                    { en: "Transcriptional control", es: "Control transcripcional", de: "Transkriptionelle Kontrolle", nl: "Transcriptionele controle" }
                ],
                correct: 1,
                explanation: {
                    en: "The citric acid cycle is primarily regulated by product inhibition, where NADH and ATP inhibit key enzymes (citrate synthase, isocitrate dehydrogenase, α-ketoglutarate dehydrogenase) when energy is abundant.",
                    es: "El ciclo del ácido cítrico es regulado principalmente por inhibición por producto, donde NADH y ATP inhiben enzimas clave (citrato sintasa, isocitrato deshidrogenasa, α-cetoglutarato deshidrogenasa) cuando la energía es abundante.",
                    de: "Der Zitronensäurezyklus wird hauptsächlich durch Produkthemmung reguliert, wobei NADH und ATP Schlüsselenzyme (Citratsynthase, Isocitrat-Dehydrogenase, α-Ketoglutarat-Dehydrogenase) hemmen, wenn Energie reichlich vorhanden ist.",
                    nl: "De citroenzuurcyclus wordt voornamelijk gereguleerd door productremming, waarbij NADH en ATP sleutelenzymen (cittraatsynthase, isocitraatdehydrogenase, α-ketoglutaraatdehydrogenase) remmen wanneer energie overvloedig is."
                }
            },
            {
                question: {
                    en: "Which enzyme is responsible for the first step of purine biosynthesis?",
                    es: "¿Qué enzima es responsable del primer paso de la biosíntesis de purinas?",
                    de: "Welches Enzym ist für den ersten Schritt der Purinbiosynthese verantwortlich?",
                    nl: "Welk enzym is verantwoordelijk voor de eerste stap van purinebiosynthese?"
                },
                options: [
                    { en: "PRPP synthetase", es: "PRPP sintetasa", de: "PRPP-Synthetase", nl: "PRPP synthetase" },
                    { en: "Glutamine PRPP amidotransferase", es: "Glutamina PRPP amidotransferasa", de: "Glutamin-PRPP-Amidotransferase", nl: "Glutamine PRPP amidotransferase" },
                    { en: "Adenylosuccinate synthetase", es: "Adenilosuccinato sintetasa", de: "Adenylosuccinat-Synthetase", nl: "Adenylosuccinaat synthetase" },
                    { en: "IMP dehydrogenase", es: "IMP deshidrogenasa", de: "IMP-Dehydrogenase", nl: "IMP dehydrogenase" }
                ],
                correct: 1,
                explanation: {
                    en: "Glutamine PRPP amidotransferase catalyzes the first committed step of purine biosynthesis, converting PRPP and glutamine to 5-phosphoribosylamine.",
                    es: "La glutamina PRPP amidotransferasa cataliza el primer paso comprometido de la biosíntesis de purinas, convirtiendo PRPP y glutamina a 5-fosforribosilamina.",
                    de: "Glutamin-PRPP-Amidotransferase katalysiert den ersten verpflichtenden Schritt der Purinbiosynthese und wandelt PRPP und Glutamin zu 5-Phosphoribosylamin um.",
                    nl: "Glutamine PRPP amidotransferase katalyseert de eerste vastgelegde stap van purinebiosynthese, waarbij PRPP en glutamine worden omgezet naar 5-fosforibosylamine."
                }
            },
            {
                question: {
                    en: "What is the metabolic significance of the Randle cycle?",
                    es: "¿Cuál es la significancia metabólica del ciclo de Randle?",
                    de: "Was ist die metabolische Bedeutung des Randle-Zyklus?",
                    nl: "Wat is de metabolische betekenis van de Randle cyclus?"
                },
                options: [
                    { en: "Coordinates fatty acid and glucose oxidation", es: "Coordina la oxidación de ácidos grasos y glucosa", de: "Koordiniert Fettsäure- und Glucoseoxidation", nl: "Coördineert vetzuur- en glucoseoxidatie" },
                    { en: "Regulates amino acid metabolism", es: "Regula el metabolismo de aminoácidos", de: "Reguliert Aminosäurestoffwechsel", nl: "Reguleert aminozuurmetabolisme" },
                    { en: "Controls ketone body synthesis", es: "Controla la síntesis de cuerpos cetónicos", de: "Kontrolliert Ketonkörpersynthese", nl: "Controleert ketonlichaamsynthese" },
                    { en: "Manages cholesterol homeostasis", es: "Maneja la homeostasis del colesterol", de: "Verwaltet Cholesterinhomöostase", nl: "Beheert cholesterolhomeostase" }
                ],
                correct: 0,
                explanation: {
                    en: "The Randle cycle (glucose-fatty acid cycle) describes the reciprocal inhibition between glucose and fatty acid oxidation, ensuring metabolic flexibility based on substrate availability.",
                    es: "El ciclo de Randle (ciclo glucosa-ácidos grasos) describe la inhibición recíproca entre la oxidación de glucosa y ácidos grasos, asegurando flexibilidad metabólica basada en disponibilidad de sustrato.",
                    de: "Der Randle-Zyklus (Glucose-Fettsäure-Zyklus) beschreibt die wechselseitige Hemmung zwischen Glucose- und Fettsäureoxidation und gewährleistet metabolische Flexibilität basierend auf Substratverfügbarkeit.",
                    nl: "De Randle cyclus (glucose-vetzuur cyclus) beschrijft de wederzijdse remming tussen glucose- en vetzuuroxidatie, wat metabolische flexibiliteit verzekert gebaseerd op substraatbeschikbaarheid."
                }
            },
            {
                question: {
                    en: "Which metabolite links glycolysis and fatty acid synthesis?",
                    es: "¿Qué metabolito conecta la glucólisis y la síntesis de ácidos grasos?",
                    de: "Welcher Metabolit verbindet Glykolyse und Fettsäuresynthese?",
                    nl: "Welke metaboliet verbindt glycolyse en vetzuursynthese?"
                },
                options: [
                    { en: "Pyruvate", es: "Piruvato", de: "Pyruvat", nl: "Pyruvaat" },
                    { en: "Acetyl-CoA", es: "Acetil-CoA", de: "Acetyl-CoA", nl: "Acetyl-CoA" },
                    { en: "Citrate", es: "Citrato", de: "Citrat", nl: "Citraat" },
                    { en: "Malonyl-CoA", es: "Malonil-CoA", de: "Malonyl-CoA", nl: "Malonyl-CoA" }
                ],
                correct: 2,
                explanation: {
                    en: "Citrate serves as the key metabolite linking glycolysis to fatty acid synthesis by transporting acetyl units from mitochondria to the cytosol via the citrate-malate cycle.",
                    es: "El citrato sirve como metabolito clave que conecta la glucólisis con la síntesis de ácidos grasos al transportar unidades acetil desde las mitocondrias al citosol mediante el ciclo citrato-malato.",
                    de: "Citrat dient als Schlüsselmetabolit, der Glykolyse mit Fettsäuresynthese verbindet, indem es Acetyleinheiten von Mitochondrien zum Zytosol über den Citrat-Malat-Zyklus transportiert.",
                    nl: "Citraat dient als de sleutelmetaboliet die glycolyse verbindt met vetzuursynthese door acetylunieenheden van mitochondriën naar het cytosol te transporteren via de citraat-malaat cyclus."
                }
            },
            {
                question: {
                    en: "What is the primary function of UDP-glucose in metabolism?",
                    es: "¿Cuál es la función principal de UDP-glucosa en el metabolismo?",
                    de: "Was ist die primäre Funktion von UDP-Glucose im Stoffwechsel?",
                    nl: "Wat is de primaire functie van UDP-glucose in het metabolisme?"
                },
                options: [
                    { en: "Energy storage", es: "Almacenamiento de energía", de: "Energiespeicherung", nl: "Energieopslag" },
                    { en: "Activated glucose donor for biosynthesis", es: "Donador de glucosa activado para biosíntesis", de: "Aktivierter Glucosedonor für Biosynthese", nl: "Geactiveerde glucosedonor voor biosynthese" },
                    { en: "Glucose transport", es: "Transporte de glucosa", de: "Glucosetransport", nl: "Glucosetransport" },
                    { en: "Glycolytic intermediate", es: "Intermediario glucolítico", de: "Glykolytisches Zwischenprodukt", nl: "Glycolytisch intermediair" }
                ],
                correct: 1,
                explanation: {
                    en: "UDP-glucose serves as an activated glucose donor for various biosynthetic processes including glycogen synthesis, glycoprotein formation, and cell wall synthesis in plants.",
                    es: "La UDP-glucosa sirve como donador de glucosa activado para varios procesos biosintéticos incluyendo síntesis de glucógeno, formación de glucoproteínas y síntesis de pared celular en plantas.",
                    de: "UDP-Glucose dient als aktivierter Glucosedonor für verschiedene Biosyntheseprozesse einschließlich Glykogensynthese, Glykoproteinbildung und Zellwandsynthese in Pflanzen.",
                    nl: "UDP-glucose dient als een geactiveerde glucosedonor voor verschillende biosynthetische processen inclusief glycogeensynthese, glycoproteïnevorming en celwandsynthese in planten."
                }
            },
            {
                question: {
                    en: "Which enzyme deficiency causes phenylketonuria (PKU)?",
                    es: "¿Qué deficiencia enzimática causa fenilcetonuria (PKU)?",
                    de: "Welcher Enzymmangel verursacht Phenylketonurie (PKU)?",
                    nl: "Welke enzymdeficiëntie veroorzaakt fenylketonurie (PKU)?"
                },
                options: [
                    { en: "Tyrosine hydroxylase", es: "Tirosina hidroxilasa", de: "Tyrosin-Hydroxylase", nl: "Tyrosine hydroxylase" },
                    { en: "Phenylalanine hydroxylase", es: "Fenilalanina hidroxilasa", de: "Phenylalanin-Hydroxylase", nl: "Phenylalanine hydroxylase" },
                    { en: "Aromatic amino acid decarboxylase", es: "Descarboxilasa de aminoácidos aromáticos", de: "Aromatische-Aminosäure-Decarboxylase", nl: "Aromatische aminozuur decarboxylase" },
                    { en: "Tryptophan hydroxylase", es: "Triptófano hidroxilasa", de: "Tryptophan-Hydroxylase", nl: "Tryptofaan hydroxylase" }
                ],
                correct: 1,
                explanation: {
                    en: "Phenylketonuria is caused by deficiency in phenylalanine hydroxylase, leading to accumulation of phenylalanine and production of phenylketones in urine.",
                    es: "La fenilcetonuria es causada por deficiencia en fenilalanina hidroxilasa, llevando a acumulación de fenilalanina y producción de fenilcetonas en orina.",
                    de: "Phenylketonurie wird durch Mangel an Phenylalanin-Hydroxylase verursacht, was zur Ansammlung von Phenylalanin und Produktion von Phenylketonen im Urin führt.",
                    nl: "Fenylketonurie wordt veroorzaakt door deficiëntie in phenylalanine hydroxylase, wat leidt tot ophoping van phenylalanine en productie van phenylketonen in urine."
                }
            },
            {
                question: {
                    en: "What is the rate-limiting enzyme in heme biosynthesis?",
                    es: "¿Cuál es la enzima limitante de la velocidad en la biosíntesis del hemo?",
                    de: "Was ist das geschwindigkeitsbestimmende Enzym in der Hämbiosynthese?",
                    nl: "Wat is het snelheidsbepalende enzym in heembiosynthese?"
                },
                options: [
                    { en: "δ-aminolevulinic acid synthase", es: "δ-aminolevulínico ácido sintasa", de: "δ-Aminolävulinsäure-Synthase", nl: "δ-aminolevulinezuur synthase" },
                    { en: "Porphobilinogen synthase", es: "Porfobilinógeno sintasa", de: "Porphobilinogen-Synthase", nl: "Porfobilinogeen synthase" },
                    { en: "Ferrochelatase", es: "Ferroquelatasa", de: "Ferrochelatase", nl: "Ferrochelatase" },
                    { en: "Coproporphyrinogen oxidase", es: "Coproporfirinógeno oxidasa", de: "Coproporphyrinogen-Oxidase", nl: "Coproporfyrinogeen oxidase" }
                ],
                correct: 0,
                explanation: {
                    en: "δ-aminolevulinic acid synthase (ALA synthase) is the rate-limiting enzyme in heme biosynthesis, catalyzing the condensation of glycine and succinyl-CoA.",
                    es: "La δ-aminolevulínico ácido sintasa (ALA sintasa) es la enzima limitante de la velocidad en la biosíntesis del hemo, catalizando la condensación de glicina y succinil-CoA.",
                    de: "δ-Aminolävulinsäure-Synthase (ALA-Synthase) ist das geschwindigkeitsbestimmende Enzym in der Hämbiosynthese und katalysiert die Kondensation von Glycin und Succinyl-CoA.",
                    nl: "δ-aminolevulinezuur synthase (ALA synthase) is het snelheidsbepalende enzym in heembiosynthese, dat de condensatie van glycine en succinyl-CoA katalyseert."
                }
            },
            {
                question: {
                    en: "Which cofactor is essential for the function of transaminases?",
                    es: "¿Qué cofactor es esencial para la función de las transaminasas?",
                    de: "Welcher Cofaktor ist für die Funktion von Transaminasen wesentlich?",
                    nl: "Welke cofactor is essentieel voor de functie van transaminases?"
                },
                options: [
                    { en: "Pyridoxal phosphate (PLP)", es: "Fosfato de piridoxal (PLP)", de: "Pyridoxalphosphat (PLP)", nl: "Pyridoxaalfosfaat (PLP)" },
                    { en: "Thiamine pyrophosphate", es: "Tiamina pirofosfato", de: "Thiaminpyrophosphat", nl: "Thiamine pyrofosfaat" },
                    { en: "Cobalamin", es: "Cobalamina", de: "Cobalamin", nl: "Cobalamine" },
                    { en: "Folate", es: "Folato", de: "Folat", nl: "Folaat" }
                ],
                correct: 0,
                explanation: {
                    en: "Pyridoxal phosphate (PLP), the active form of vitamin B6, is essential for transaminases, forming Schiff base intermediates with amino groups during transamination reactions.",
                    es: "El fosfato de piridoxal (PLP), la forma activa de la vitamina B6, es esencial para las transaminasas, formando intermediarios de base de Schiff con grupos amino durante reacciones de transaminación.",
                    de: "Pyridoxalphosphat (PLP), die aktive Form von Vitamin B6, ist für Transaminasen wesentlich und bildet Schiff-Base-Intermediate mit Aminogruppen während Transaminierungsreaktionen.",
                    nl: "Pyridoxaalfosfaat (PLP), de actieve vorm van vitamine B6, is essentieel voor transaminases en vormt Schiff-base intermediëren met aminogroepen tijdens transaminatiereacties."
                }
            },
            {
                question: {
                    en: "What is the primary metabolic role of the liver during fasting?",
                    es: "¿Cuál es el papel metabólico principal del hígado durante el ayuno?",
                    de: "Was ist die primäre metabolische Rolle der Leber während des Fastens?",
                    nl: "Wat is de primaire metabolische rol van de lever tijdens vasten?"
                },
                options: [
                    { en: "Lipogenesis", es: "Lipogénesis", de: "Lipogenese", nl: "Lipogenese" },
                    { en: "Gluconeogenesis and ketogenesis", es: "Gluconeogénesis y cetogénesis", de: "Gluconeogenese und Ketogenese", nl: "Gluconeogenese en ketogenese" },
                    { en: "Protein synthesis", es: "Síntesis de proteínas", de: "Proteinsynthese", nl: "Eiwitssynthese" },
                    { en: "Cholesterol synthesis", es: "Síntesis de colesterol", de: "Cholesterinsynthese", nl: "Cholesterolsynthese" }
                ],
                correct: 1,
                explanation: {
                    en: "During fasting, the liver's primary role is gluconeogenesis to maintain blood glucose and ketogenesis to provide alternative fuel for tissues, especially the brain.",
                    es: "Durante el ayuno, el papel principal del hígado es la gluconeogénesis para mantener la glucosa sanguínea y la cetogénesis para proporcionar combustible alternativo para tejidos, especialmente el cerebro.",
                    de: "Während des Fastens ist die primäre Rolle der Leber die Gluconeogenese zur Aufrechterhaltung des Blutzuckers und die Ketogenese zur Bereitstellung alternativer Brennstoffe für Gewebe, insbesondere das Gehirn.",
                    nl: "Tijdens vasten is de primaire rol van de lever gluconeogenese om bloedglucose te handhaven en ketogenese om alternatieve brandstof te leveren voor weefsels, vooral de hersenen."
                }
            },
            {
                question: {
                    en: "Which enzyme catalyzes the committed step in pyrimidine biosynthesis?",
                    es: "¿Qué enzima cataliza el paso comprometido en la biosíntesis de pirimidinas?",
                    de: "Welches Enzym katalysiert den verpflichtenden Schritt in der Pyrimidinbiosynthese?",
                    nl: "Welk enzym katalyseert de vastgelegde stap in pyrimidinebiosynthese?"
                },
                options: [
                    { en: "Carbamoyl phosphate synthetase II", es: "Carbamoil fosfato sintetasa II", de: "Carbamoylphosphat-Synthetase II", nl: "Carbamoylfosfaat synthetase II" },
                    { en: "Aspartate transcarbamoylase", es: "Aspartato transcarbamoilasa", de: "Aspartat-Transcarbamoylcase", nl: "Aspartaat transcarbamoylase" },
                    { en: "Dihydroorotate dehydrogenase", es: "Dihidroorotato deshidrogenasa", de: "Dihydroorotat-Dehydrogenase", nl: "Dihydrooraat dehydrogenase" },
                    { en: "Orotate phosphoribosyltransferase", es: "Orotato fosforribosiltransferasa", de: "Orotat-Phosphoribosyltransferase", nl: "Oraat fosforibosyltransferase" }
                ],
                correct: 0,
                explanation: {
                    en: "Carbamoyl phosphate synthetase II (CPS II) catalyzes the first and committed step of pyrimidine biosynthesis, forming carbamoyl phosphate from glutamine, CO2, and ATP.",
                    es: "La carbamoil fosfato sintetasa II (CPS II) cataliza el primer paso y comprometido de la biosíntesis de pirimidinas, formando carbamoil fosfato a partir de glutamina, CO2 y ATP.",
                    de: "Carbamoylphosphat-Synthetase II (CPS II) katalysiert den ersten und verpflichtenden Schritt der Pyrimidinbiosynthese und bildet Carbamoylphosphat aus Glutamin, CO2 und ATP.",
                    nl: "Carbamoylfosfaat synthetase II (CPS II) katalyseert de eerste en vastgelegde stap van pyrimidinebiosynthese, waarbij carbamoylfosfaat wordt gevormd uit glutamine, CO2 en ATP."
                }
            },
            {
                question: {
                    en: "What is the biochemical basis of lactose intolerance?",
                    es: "¿Cuál es la base bioquímica de la intolerancia a la lactosa?",
                    de: "Was ist die biochemische Grundlage der Lactoseintoleranz?",
                    nl: "Wat is de biochemische basis van lactose-intolerantie?"
                },
                options: [
                    { en: "Deficiency in lactase enzyme", es: "Deficiencia en enzima lactasa", de: "Mangel an Lactase-Enzym", nl: "Deficiëntie in lactase enzym" },
                    { en: "Inability to absorb lactose", es: "Incapacidad para absorber lactosa", de: "Unfähigkeit Lactose zu absorbieren", nl: "Onvermogen om lactose te absorberen" },
                    { en: "Lactose receptor mutations", es: "Mutaciones en receptor de lactosa", de: "Lactose-Rezeptor-Mutationen", nl: "Lactose receptor mutaties" },
                    { en: "Galactose metabolism defects", es: "Defectos del metabolismo de galactosa", de: "Galaktose-Stoffwechseldefekte", nl: "Galactose metabolisme defecten" }
                ],
                correct: 0,
                explanation: {
                    en: "Lactose intolerance results from reduced or absent lactase enzyme activity in the small intestine, leading to incomplete hydrolysis of lactose into glucose and galactose.",
                    es: "La intolerancia a la lactosa resulta de actividad reducida o ausente de la enzima lactasa en el intestino delgado, llevando a hidrólisis incompleta de lactosa en glucosa y galactosa.",
                    de: "Lactoseintoleranz resultiert aus reduzierter oder fehlender Lactase-Enzymaktivität im Dünndarm, was zu unvollständiger Hydrolyse von Lactose zu Glucose und Galaktose führt.",
                    nl: "Lactose-intolerantie resulteert uit verminderde of afwezige lactase enzymactiviteit in de dunne darm, wat leidt tot onvolledige hydrolyse van lactose naar glucose en galactose."
                }
            },
            {
                question: {
                    en: "Which metabolic pathway is primarily responsible for NADPH regeneration in red blood cells?",
                    es: "¿Qué vía metabólica es principalmente responsable de la regeneración de NADPH en glóbulos rojos?",
                    de: "Welcher Stoffwechselweg ist hauptsächlich für die NADPH-Regeneration in roten Blutkörperchen verantwortlich?",
                    nl: "Welke metabolische route is voornamelijk verantwoordelijk voor NADPH-regeneratie in rode bloedcellen?"
                },
                options: [
                    { en: "Glycolysis", es: "Glucólisis", de: "Glykolyse", nl: "Glycolyse" },
                    { en: "Pentose phosphate pathway", es: "Vía de las pentosas fosfato", de: "Pentosephosphatweg", nl: "Pentosefosfaatroute" },
                    { en: "Citric acid cycle", es: "Ciclo del ácido cítrico", de: "Zitronensäurezyklus", nl: "Citroenzuurcyclus" },
                    { en: "Fatty acid oxidation", es: "Oxidación de ácidos grasos", de: "Fettsäureoxidation", nl: "Vetzuuroxidatie" }
                ],
                correct: 1,
                explanation: {
                    en: "The pentose phosphate pathway is crucial in red blood cells for NADPH production, which maintains glutathione in its reduced form to protect against oxidative damage.",
                    es: "La vía de las pentosas fosfato es crucial en glóbulos rojos para la producción de NADPH, que mantiene el glutatión en su forma reducida para proteger contra daño oxidativo.",
                    de: "Der Pentosephosphatweg ist in roten Blutkörperchen entscheidend für die NADPH-Produktion, die Glutathion in seiner reduzierten Form hält, um vor oxidativem Schaden zu schützen.",
                    nl: "De pentosefosfaatroute is cruciaal in rode bloedcellen voor NADPH-productie, wat glutathion in zijn gereduceerde vorm houdt om te beschermen tegen oxidatieve schade."
                }
            },
            {
                question: {
                    en: "What is the metabolic consequence of insulin deficiency?",
                    es: "¿Cuál es la consecuencia metabólica de la deficiencia de insulina?",
                    de: "Was ist die metabolische Konsequenz eines Insulinmangels?",
                    nl: "Wat is de metabolische consequentie van insulinedeficiëntie?"
                },
                options: [
                    { en: "Enhanced glycogen synthesis", es: "Síntesis de glucógeno mejorada", de: "Verbesserte Glykogensynthese", nl: "Verbeterde glycogeensynthese" },
                    { en: "Increased gluconeogenesis and ketogenesis", es: "Aumento de gluconeogénesis y cetogénesis", de: "Erhöhte Gluconeogenese und Ketogenese", nl: "Verhoogde gluconeogenese en ketogenese" },
                    { en: "Reduced lipolysis", es: "Lipólisis reducida", de: "Reduzierte Lipolyse", nl: "Verminderde lipolyse" },
                    { en: "Decreased protein catabolism", es: "Disminución del catabolismo proteico", de: "Verringerter Proteinkatabolismus", nl: "Verminderd eiwitkatabolisme" }
                ],
                correct: 1,
                explanation: {
                    en: "Insulin deficiency leads to increased gluconeogenesis and ketogenesis, resulting in hyperglycemia and ketoacidosis, as seen in type 1 diabetes mellitus.",
                    es: "La deficiencia de insulina lleva a aumento de gluconeogénesis y cetogénesis, resultando en hiperglicemia y cetoacidosis, como se ve en diabetes mellitus tipo 1.",
                    de: "Insulinmangel führt zu erhöhter Gluconeogenese und Ketogenese, was zu Hyperglykämie und Ketoazidose führt, wie bei Typ-1-Diabetes mellitus zu sehen ist.",
                    nl: "Insulinedeficiëntie leidt tot verhoogde gluconeogenese en ketogenese, wat resulteert in hyperglykemie en ketoacidose, zoals gezien bij type 1 diabetes mellitus."
                }
            },
            {
                question: {
                    en: "Which enzyme is deficient in Tay-Sachs disease?",
                    es: "¿Qué enzima es deficiente en la enfermedad de Tay-Sachs?",
                    de: "Welches Enzym ist bei Tay-Sachs-Krankheit mangelhaft?",
                    nl: "Welk enzym is deficiënt bij de ziekte van Tay-Sachs?"
                },
                options: [
                    { en: "β-galactosidase", es: "β-galactosidasa", de: "β-Galaktosidase", nl: "β-galactosidase" },
                    { en: "Hexosaminidase A", es: "Hexosaminidasa A", de: "Hexosaminidase A", nl: "Hexosaminidase A" },
                    { en: "α-galactosidase A", es: "α-galactosidasa A", de: "α-Galaktosidase A", nl: "α-galactosidase A" },
                    { en: "Glucocerebrosidase", es: "Glucocerebrosidasa", de: "Glucocerebrosidase", nl: "Glucocerebrosidase" }
                ],
                correct: 1,
                explanation: {
                    en: "Tay-Sachs disease is caused by deficiency in hexosaminidase A, leading to accumulation of GM2 ganglioside in neurons and progressive neurodegeneration.",
                    es: "La enfermedad de Tay-Sachs es causada por deficiencia en hexosaminidasa A, llevando a acumulación de gangliósido GM2 en neuronas y neurodegeneración progresiva.",
                    de: "Tay-Sachs-Krankheit wird durch Mangel an Hexosaminidase A verursacht, was zur Ansammlung von GM2-Gangliosid in Neuronen und progressiver Neurodegeneration führt.",
                    nl: "De ziekte van Tay-Sachs wordt veroorzaakt door deficiëntie in hexosaminidase A, wat leidt tot ophoping van GM2-ganglioside in neuronen en progressieve neurodegeneratie."
                }
            },
            {
                question: {
                    en: "What is the primary function of creatine phosphate in muscle metabolism?",
                    es: "¿Cuál es la función principal del fosfato de creatina en el metabolismo muscular?",
                    de: "Was ist die primäre Funktion von Kreatinphosphat im Muskelstoffwechsel?",
                    nl: "Wat is de primaire functie van creatinefosfaat in spiermetabolisme?"
                },
                options: [
                    { en: "Direct energy source", es: "Fuente directa de energía", de: "Direkte Energiequelle", nl: "Directe energiebron" },
                    { en: "ATP regeneration via creatine kinase", es: "Regeneración de ATP vía creatina quinasa", de: "ATP-Regeneration über Kreatinkinase", nl: "ATP-regeneratie via creatinekinase" },
                    { en: "Calcium storage", es: "Almacenamiento de calcio", de: "Kalziumspeicherung", nl: "Calciumopslag" },
                    { en: "Lactate buffering", es: "Amortiguación de lactato", de: "Laktatpufferung", nl: "Lactaatbuffering" }
                ],
                correct: 1,
                explanation: {
                    en: "Creatine phosphate serves as a high-energy phosphate reservoir that rapidly regenerates ATP through the creatine kinase reaction during periods of high energy demand in muscle.",
                    es: "El fosfato de creatina sirve como reservorio de fosfato de alta energía que regenera rápidamente ATP a través de la reacción de creatina quinasa durante períodos de alta demanda energética en músculo.",
                    de: "Kreatinphosphat dient als Hochenergie-Phosphat-Reservoir, das über die Kreatinkinase-Reaktion während Perioden hohen Energiebedarfs im Muskel schnell ATP regeneriert.",
                    nl: "Creatinefosfaat dient als een hoge-energie fosfaatreservoir dat snel ATP regenereert via de creatinekinase reactie tijdens perioden van hoge energievraag in spieren."
                }
            },
            {
                question: {
                    en: "Which metabolic adaptation occurs in prolonged fasting (>72 hours)?",
                    es: "¿Qué adaptación metabólica ocurre en ayuno prolongado (>72 horas)?",
                    de: "Welche metabolische Anpassung tritt bei verlängertem Fasten (>72 Stunden) auf?",
                    nl: "Welke metabolische adaptatie vindt plaats bij langdurig vasten (>72 uur)?"
                },
                options: [
                    { en: "Increased glycogenolysis", es: "Aumento de glucogenólisis", de: "Erhöhte Glykogenolyse", nl: "Verhoogde glycogenolyse" },
                    { en: "Brain shifts to using ketones as primary fuel", es: "Cerebro cambia a usar cetonas como combustible primario", de: "Gehirn wechselt zu Ketonen als primärem Brennstoff", nl: "Hersenen schakelen over naar ketonen als primaire brandstof" },
                    { en: "Enhanced protein synthesis", es: "Síntesis proteica mejorada", de: "Verbesserte Proteinsynthese", nl: "Verbeterde eiwitsynthese" },
                    { en: "Decreased lipolysis", es: "Lipólisis disminuida", de: "Verringerte Lipolyse", nl: "Verminderde lipolyse" }
                ],
                correct: 1,
                explanation: {
                    en: "During prolonged fasting, the brain adapts to use ketone bodies (β-hydroxybutyrate and acetoacetate) as its primary fuel source, reducing glucose demand and sparing protein catabolism.",
                    es: "Durante ayuno prolongado, el cerebro se adapta para usar cuerpos cetónicos (β-hidroxibutirato y acetoacetato) como su fuente primaria de combustible, reduciendo la demanda de glucosa y preservando el catabolismo proteico.",
                    de: "Während verlängertem Fasten passt sich das Gehirn an, Ketonkörper (β-Hydroxybutyrat und Acetoacetat) als primäre Brennstoffquelle zu nutzen, wodurch der Glucosebedarf reduziert und Proteinkatabolismus gespart wird.",
                    nl: "Tijdens langdurig vasten past de hersenen zich aan om ketonlichamen (β-hydroxybutyraat en acetoacetaat) te gebruiken als primaire brandstofbron, wat glucosebehoefte vermindert en eiwitkatabolisme spaart."
                }
            },
            {
                question: {
                    en: "What is the rate-limiting step in cholesterol synthesis?",
                    es: "¿Cuál es el paso limitante de la velocidad en la síntesis de colesterol?",
                    de: "Was ist der geschwindigkeitsbestimmende Schritt in der Cholesterinsynthese?",
                    nl: "Wat is de snelheidsbepalende stap in cholesterolsynthese?"
                },
                options: [
                    { en: "Acetyl-CoA → HMG-CoA", es: "Acetil-CoA → HMG-CoA", de: "Acetyl-CoA → HMG-CoA", nl: "Acetyl-CoA → HMG-CoA" },
                    { en: "HMG-CoA → Mevalonate", es: "HMG-CoA → Mevalonato", de: "HMG-CoA → Mevalonat", nl: "HMG-CoA → Mevalonaat" },
                    { en: "Mevalonate → Isopentenyl-PP", es: "Mevalonato → Isopentenil-PP", de: "Mevalonat → Isopentenyl-PP", nl: "Mevalonaat → Isopentenyl-PP" },
                    { en: "Squalene → Cholesterol", es: "Escualeno → Colesterol", de: "Squalen → Cholesterol", nl: "Squaleen → Cholesterol" }
                ],
                correct: 1,
                explanation: {
                    en: "The conversion of HMG-CoA to mevalonate by HMG-CoA reductase is the rate-limiting step in cholesterol biosynthesis and the target of statin drugs.",
                    es: "La conversión de HMG-CoA a mevalonato por HMG-CoA reductasa es el paso limitante de la velocidad en la biosíntesis del colesterol y el objetivo de las drogas estatinas.",
                    de: "Die Umwandlung von HMG-CoA zu Mevalonat durch HMG-CoA-Reduktase ist der geschwindigkeitsbestimmende Schritt in der Cholesterinbiosynthese und das Ziel von Statin-Medikamenten.",
                    nl: "De conversie van HMG-CoA naar mevalonaat door HMG-CoA reductase is de snelheidsbepalende stap in cholesterolbiosynthese en het doelwit van statine medicijnen."
                }
            },
            {
                question: {
                    en: "Which cofactor is required for methylmalonyl-CoA mutase?",
                    es: "¿Qué cofactor se requiere para la metilmalonil-CoA mutasa?",
                    de: "Welcher Cofaktor wird für Methylmalonyl-CoA-Mutase benötigt?",
                    nl: "Welke cofactor is vereist voor methylmalonyl-CoA mutase?"
                },
                options: [
                    { en: "Biotin", es: "Biotina", de: "Biotin", nl: "Biotine" },
                    { en: "Cobalamin (B12)", es: "Cobalamina (B12)", de: "Cobalamin (B12)", nl: "Cobalamine (B12)" },
                    { en: "Folate", es: "Folato", de: "Folat", nl: "Folaat" },
                    { en: "Thiamine", es: "Tiamina", de: "Thiamin", nl: "Thiamine" }
                ],
                correct: 1,
                explanation: {
                    en: "Methylmalonyl-CoA mutase requires adenosylcobalamin (vitamin B12) as a cofactor for the conversion of methylmalonyl-CoA to succinyl-CoA in propionate metabolism.",
                    es: "La metilmalonil-CoA mutasa requiere adenosilcobalamina (vitamina B12) como cofactor para la conversión de metilmalonil-CoA a succinil-CoA en el metabolismo del propionato.",
                    de: "Methylmalonyl-CoA-Mutase benötigt Adenosylcobalamin (Vitamin B12) als Cofaktor für die Umwandlung von Methylmalonyl-CoA zu Succinyl-CoA im Propionatstoffwechsel.",
                    nl: "Methylmalonyl-CoA mutase vereist adenosylcobalamine (vitamine B12) als cofactor voor de conversie van methylmalonyl-CoA naar succinyl-CoA in propionaatmetabolisme."
                }
            },
            {
                question: {
                    en: "What is the primary regulatory mechanism of glycogen phosphorylase?",
                    es: "¿Cuál es el mecanismo regulatorio principal de la glucógeno fosforilasa?",
                    de: "Was ist der primäre Regulationsmechanismus der Glykogen-Phosphorylase?",
                    nl: "Wat is het primaire regulatiemechanisme van glycogeenfosforylase?"
                },
                options: [
                    { en: "Competitive inhibition", es: "Inhibición competitiva", de: "Kompetitive Hemmung", nl: "Competitieve inhibitie" },
                    { en: "Covalent modification (phosphorylation)", es: "Modificación covalente (fosforilación)", de: "Kovalente Modifikation (Phosphorylierung)", nl: "Covalente modificatie (fosforylering)" },
                    { en: "Allosteric regulation only", es: "Solo regulación alostérica", de: "Nur allosterische Regulation", nl: "Alleen allosterische regulatie" },
                    { en: "Compartmentalization", es: "Compartimentalización", de: "Kompartimentierung", nl: "Compartimentalisatie" }
                ],
                correct: 1,
                explanation: {
                    en: "Glycogen phosphorylase is primarily regulated by covalent modification through phosphorylation/dephosphorylation, with the phosphorylated form (phosphorylase a) being more active.",
                    es: "La glucógeno fosforilasa es regulada principalmente por modificación covalente a través de fosforilación/desfosforilación, con la forma fosforilada (fosforilasa a) siendo más activa.",
                    de: "Glykogen-Phosphorylase wird hauptsächlich durch kovalente Modifikation über Phosphorylierung/Dephosphorylierung reguliert, wobei die phosphorylierte Form (Phosphorylase a) aktiver ist.",
                    nl: "Glycogeenfosforylase wordt voornamelijk gereguleerd door covalente modificatie via fosforylering/defosforylering, waarbij de gefosforyleerde vorm (fosforylase a) actiever is."
                }
            },
            {
                question: {
                    en: "Which metabolic pathway produces the most ATP per glucose molecule?",
                    es: "¿Qué vía metabólica produce la mayor cantidad de ATP por molécula de glucosa?",
                    de: "Welcher Stoffwechselweg produziert das meiste ATP pro Glucosemolekül?",
                    nl: "Welke metabolische route produceert de meeste ATP per glucosemolecuul?"
                },
                options: [
                    { en: "Glycolysis alone", es: "Solo glucólisis", de: "Nur Glykolyse", nl: "Alleen glycolyse" },
                    { en: "Glycolysis + citric acid cycle", es: "Glucólisis + ciclo del ácido cítrico", de: "Glykolyse + Zitronensäurezyklus", nl: "Glycolyse + citroenzuurcyclus" },
                    { en: "Complete aerobic respiration", es: "Respiración aeróbica completa", de: "Vollständige aerobe Atmung", nl: "Volledige aerobe ademhaling" },
                    { en: "Fermentation", es: "Fermentación", de: "Fermentation", nl: "Fermentatie" }
                ],
                correct: 2,
                explanation: {
                    en: "Complete aerobic respiration (glycolysis + citric acid cycle + oxidative phosphorylation) produces approximately 30-32 ATP molecules per glucose, the highest yield among glucose metabolic pathways.",
                    es: "La respiración aeróbica completa (glucólisis + ciclo del ácido cítrico + fosforilación oxidativa) produce aproximadamente 30-32 moléculas de ATP por glucosa, el mayor rendimiento entre las vías metabólicas de glucosa.",
                    de: "Vollständige aerobe Atmung (Glykolyse + Zitronensäurezyklus + oxidative Phosphorylierung) produziert etwa 30-32 ATP-Moleküle pro Glucose, die höchste Ausbeute unter den Glucose-Stoffwechselwegen.",
                    nl: "Volledige aerobe ademhaling (glycolyse + citroenzuurcyclus + oxidatieve fosforylering) produceert ongeveer 30-32 ATP-moleculen per glucose, de hoogste opbrengst onder glucose metabolische routes."
                }
            },
            {
                question: {
                    en: "What is the biochemical defect in hereditary fructose intolerance?",
                    es: "¿Cuál es el defecto bioquímico en la intolerancia hereditaria a la fructosa?",
                    de: "Was ist der biochemische Defekt bei hereditärer Fruktoseintoleranz?",
                    nl: "Wat is het biochemische defect bij erfelijke fructose-intolerantie?"
                },
                options: [
                    { en: "Fructokinase deficiency", es: "Deficiencia de fructoquinasa", de: "Fruktokinase-Mangel", nl: "Fructokinase deficiëntie" },
                    { en: "Aldolase B deficiency", es: "Deficiencia de aldolasa B", de: "Aldolase-B-Mangel", nl: "Aldolase B deficiëntie" },
                    { en: "Fructose-1,6-bisphosphatase deficiency", es: "Deficiencia de fructosa-1,6-bisfosfatasa", de: "Fruktose-1,6-bisphosphatase-Mangel", nl: "Fructose-1,6-bisfosfatase deficiëntie" },
                    { en: "Fructose transport defect", es: "Defecto del transporte de fructosa", de: "Fruktose-Transportdefekt", nl: "Fructose transportdefect" }
                ],
                correct: 1,
                explanation: {
                    en: "Hereditary fructose intolerance is caused by aldolase B deficiency, leading to accumulation of fructose-1-phosphate and depletion of hepatic phosphate and ATP.",
                    es: "La intolerancia hereditaria a la fructosa es causada por deficiencia de aldolasa B, llevando a acumulación de fructosa-1-fosfato y depleción de fosfato hepático y ATP.",
                    de: "Hereditäre Fruktoseintoleranz wird durch Aldolase-B-Mangel verursacht, was zur Ansammlung von Fruktose-1-phosphat und Erschöpfung von hepatischem Phosphat und ATP führt.",
                    nl: "Erfelijke fructose-intolerantie wordt veroorzaakt door aldolase B deficiëntie, wat leidt tot ophoping van fructose-1-fosfaat en uitputting van hepatisch fosfaat en ATP."
                }
            },
            {
                question: {
                    en: "Which enzyme converts pyruvate to acetyl-CoA in the mitochondrial matrix?",
                    es: "¿Qué enzima convierte piruvato a acetil-CoA en la matriz mitocondrial?",
                    de: "Welches Enzym wandelt Pyruvat zu Acetyl-CoA in der mitochondrialen Matrix um?",
                    nl: "Welk enzym converteert pyruvaat naar acetyl-CoA in de mitochondriale matrix?"
                },
                options: [
                    { en: "Pyruvate kinase", es: "Piruvato quinasa", de: "Pyruvat-Kinase", nl: "Pyruvaatkinase" },
                    { en: "Pyruvate carboxylase", es: "Piruvato carboxilasa", de: "Pyruvat-Carboxylase", nl: "Pyruvaat carboxylase" },
                    { en: "Pyruvate dehydrogenase complex", es: "Complejo piruvato deshidrogenasa", de: "Pyruvat-Dehydrogenase-Komplex", nl: "Pyruvaat dehydrogenase complex" },
                    { en: "Acetyl-CoA synthetase", es: "Acetil-CoA sintetasa", de: "Acetyl-CoA-Synthetase", nl: "Acetyl-CoA synthetase" }
                ],
                correct: 2,
                explanation: {
                    en: "The pyruvate dehydrogenase complex catalyzes the oxidative decarboxylation of pyruvate to acetyl-CoA, linking glycolysis to the citric acid cycle.",
                    es: "El complejo piruvato deshidrogenasa cataliza la descarboxilación oxidativa de piruvato a acetil-CoA, conectando la glucólisis con el ciclo del ácido cítrico.",
                    de: "Der Pyruvat-Dehydrogenase-Komplex katalysiert die oxidative Decarboxylierung von Pyruvat zu Acetyl-CoA und verbindet die Glykolyse mit dem Zitronensäurezyklus.",
                    nl: "Het pyruvaat dehydrogenase complex katalyseert de oxidatieve decarboxylering van pyruvaat naar acetyl-CoA, wat glycolyse verbindt met de citroenzuurcyclus."
                }
            },
            {
                question: {
                    en: "What is the primary metabolic function of brown adipose tissue?",
                    es: "¿Cuál es la función metabólica principal del tejido adiposo marrón?",
                    de: "Was ist die primäre metabolische Funktion des braunen Fettgewebes?",
                    nl: "Wat is de primaire metabolische functie van bruin vetweefsel?"
                },
                options: [
                    { en: "Energy storage", es: "Almacenamiento de energía", de: "Energiespeicherung", nl: "Energieopslag" },
                    { en: "Thermogenesis via UCP1", es: "Termogénesis vía UCP1", de: "Thermogenese über UCP1", nl: "Thermogenese via UCP1" },
                    { en: "Hormone production", es: "Producción de hormonas", de: "Hormonproduktion", nl: "Hormoonproductie" },
                    { en: "Glucose homeostasis", es: "Homeostasis de glucosa", de: "Glucosehomöostase", nl: "Glucosehomeostase" }
                ],
                correct: 1,
                explanation: {
                    en: "Brown adipose tissue's primary function is non-shivering thermogenesis through uncoupling protein 1 (UCP1), which uncouples oxidative phosphorylation to generate heat.",
                    es: "La función principal del tejido adiposo marrón es la termogénesis sin temblor a través de la proteína desacoplante 1 (UCP1), que desacopla la fosforilación oxidativa para generar calor.",
                    de: "Die primäre Funktion des braunen Fettgewebes ist die zitterfreie Thermogenese durch Entkopplungsprotein 1 (UCP1), das die oxidative Phosphorylierung entkoppelt, um Wärme zu erzeugen.",
                    nl: "De primaire functie van bruin vetweefsel is rillingsvrije thermogenese door ontkoppelingsproteine 1 (UCP1), dat oxidatieve fosforylering ontkoppelt om warmte te genereren."
                }
            },
            {
                question: {
                    en: "Which metabolite is the primary ketone body produced during ketogenesis?",
                    es: "¿Cuál metabolito es el cuerpo cetónico principal producido durante la cetogénesis?",
                    de: "Welcher Metabolit ist der primäre Ketonkörper, der während der Ketogenese produziert wird?",
                    nl: "Welke metaboliet is het primaire ketonlichaam dat wordt geproduceerd tijdens ketogenese?"
                },
                options: [
                    { en: "Acetone", es: "Acetona", de: "Aceton", nl: "Aceton" },
                    { en: "β-hydroxybutyrate", es: "β-hidroxibutirato", de: "β-Hydroxybutyrat", nl: "β-hydroxybutyraat" },
                    { en: "Acetoacetate", es: "Acetoacetato", de: "Acetoacetat", nl: "Acetoacetaat" },
                    { en: "Acetoacetyl-CoA", es: "Acetoacetil-CoA", de: "Acetoacetyl-CoA", nl: "Acetoacetyl-CoA" }
                ],
                correct: 1,
                explanation: {
                    en: "β-hydroxybutyrate is the most abundant ketone body produced during ketogenesis, formed by reduction of acetoacetate and serving as a major fuel for extrahepatic tissues.",
                    es: "El β-hidroxibutirato es el cuerpo cetónico más abundante producido durante la cetogénesis, formado por reducción de acetoacetato y sirviendo como combustible principal para tejidos extrahepáticos.",
                    de: "β-Hydroxybutyrat ist der häufigste Ketonkörper, der während der Ketogenese produziert wird, durch Reduktion von Acetoacetat gebildet und dient als Hauptbrennstoff für extrahepatische Gewebe.",
                    nl: "β-hydroxybutyraat is het meest voorkomende ketonlichaam dat wordt geproduceerd tijdens ketogenese, gevormd door reductie van acetoacetaat en dienend als belangrijkste brandstof voor extrahepatische weefsels."
                }
            },
            {
                question: {
                    en: "What is the rate-limiting enzyme in cholesterol biosynthesis?",
                    es: "¿Cuál es la enzima limitante de velocidad en la biosíntesis de colesterol?",
                    de: "Was ist das geschwindigkeitsbestimmende Enzym bei der Cholesterinbiosynthese?",
                    nl: "Wat is het snelheidsbepalende enzym bij cholesterolbiosynthese?"
                },
                options: [
                    { en: "HMG-CoA synthase", es: "HMG-CoA sintasa", de: "HMG-CoA-Synthase", nl: "HMG-CoA synthase" },
                    { en: "HMG-CoA reductase", es: "HMG-CoA reductasa", de: "HMG-CoA-Reduktase", nl: "HMG-CoA reductase" },
                    { en: "Mevalonate kinase", es: "Mevalonato quinasa", de: "Mevalonat-Kinase", nl: "Mevalonaat kinase" },
                    { en: "Squalene synthase", es: "Escualeno sintasa", de: "Squalen-Synthase", nl: "Squaleen synthase" }
                ],
                correct: 1,
                explanation: {
                    en: "HMG-CoA reductase is the rate-limiting enzyme in cholesterol biosynthesis, catalyzing the reduction of HMG-CoA to mevalonate and is regulated by cholesterol levels.",
                    es: "La HMG-CoA reductasa es la enzima limitante de velocidad en la biosíntesis de colesterol, catalizando la reducción de HMG-CoA a mevalonato y es regulada por niveles de colesterol.",
                    de: "HMG-CoA-Reduktase ist das geschwindigkeitsbestimmende Enzym bei der Cholesterinbiosynthese, katalysiert die Reduktion von HMG-CoA zu Mevalonat und wird durch Cholesterinspiegel reguliert.",
                    nl: "HMG-CoA reductase is het snelheidsbepalende enzym bij cholesterolbiosynthese, katalyseert de reductie van HMG-CoA naar mevalonaat en wordt gereguleerd door cholesterolniveaus."
                }
            },
            {
                question: {
                    en: "Which cofactor is required for the conversion of homocysteine to methionine?",
                    es: "¿Qué cofactor se requiere para la conversión de homocisteína a metionina?",
                    de: "Welcher Cofaktor wird für die Umwandlung von Homocystein zu Methionin benötigt?",
                    nl: "Welke cofactor is vereist voor de conversie van homocysteïne naar methionine?"
                },
                options: [
                    { en: "Tetrahydrofolate", es: "Tetrahidrofolato", de: "Tetrahydrofolat", nl: "Tetrahydrofolaat" },
                    { en: "Vitamin B12 (cobalamin)", es: "Vitamina B12 (cobalamina)", de: "Vitamin B12 (Cobalamin)", nl: "Vitamine B12 (cobalamine)" },
                    { en: "Biotin", es: "Biotina", de: "Biotin", nl: "Biotine" },
                    { en: "Pyridoxal phosphate", es: "Fosfato de piridoxal", de: "Pyridoxalphosphat", nl: "Pyridoxaalfosfaat" }
                ],
                correct: 1,
                explanation: {
                    en: "Vitamin B12 (methylcobalamin) is required as a cofactor for methionine synthase, which catalyzes the methylation of homocysteine to form methionine.",
                    es: "La vitamina B12 (metilcobalamina) se requiere como cofactor para la metionina sintasa, que cataliza la metilación de homocisteína para formar metionina.",
                    de: "Vitamin B12 (Methylcobalamin) wird als Cofaktor für Methionin-Synthase benötigt, die die Methylierung von Homocystein zu Methionin katalysiert.",
                    nl: "Vitamine B12 (methylcobalamine) is vereist als cofactor voor methionine synthase, dat de methylering van homocysteïne katalyseert om methionine te vormen."
                }
            },
            {
                question: {
                    en: "What is the primary substrate for gluconeogenesis during prolonged fasting?",
                    es: "¿Cuál es el sustrato principal para la gluconeogénesis durante ayuno prolongado?",
                    de: "Was ist das primäre Substrat für die Gluconeogenese während langanhaltenden Fastens?",
                    nl: "Wat is het primaire substraat voor gluconeogenese tijdens langdurig vasten?"
                },
                options: [
                    { en: "Lactate", es: "Lactato", de: "Laktat", nl: "Lactaat" },
                    { en: "Alanine", es: "Alanina", de: "Alanin", nl: "Alanine" },
                    { en: "Glycerol", es: "Glicerol", de: "Glycerin", nl: "Glycerol" },
                    { en: "Acetyl-CoA", es: "Acetil-CoA", de: "Acetyl-CoA", nl: "Acetyl-CoA" }
                ],
                correct: 1,
                explanation: {
                    en: "During prolonged fasting, alanine becomes the primary gluconeogenic substrate, released from muscle protein breakdown and transported to the liver via the glucose-alanine cycle.",
                    es: "Durante ayuno prolongado, la alanina se convierte en el sustrato gluconeogénico principal, liberada de la degradación de proteínas musculares y transportada al hígado vía el ciclo glucosa-alanina.",
                    de: "Während langanhaltenden Fastens wird Alanin das primäre gluconeogene Substrat, freigesetzt aus dem Muskelproteinabbau und zur Leber über den Glucose-Alanin-Zyklus transportiert.",
                    nl: "Tijdens langdurig vasten wordt alanine het primaire gluconeogene substraat, vrijgegeven uit spiereiwitafbraak en getransporteerd naar de lever via de glucose-alanine cyclus."
                }
            },
            {
                question: {
                    en: "Which enzyme deficiency causes Tay-Sachs disease?",
                    es: "¿Qué deficiencia enzimática causa la enfermedad de Tay-Sachs?",
                    de: "Welcher Enzymmangel verursacht die Tay-Sachs-Krankheit?",
                    nl: "Welke enzymdeficiëntie veroorzaakt de ziekte van Tay-Sachs?"
                },
                options: [
                    { en: "α-galactosidase A", es: "α-galactosidasa A", de: "α-Galaktosidase A", nl: "α-galactosidase A" },
                    { en: "β-hexosaminidase A", es: "β-hexosaminidasa A", de: "β-Hexosaminidase A", nl: "β-hexosaminidase A" },
                    { en: "β-glucuronidase", es: "β-glucuronidasa", de: "β-Glucuronidase", nl: "β-glucuronidase" },
                    { en: "α-L-iduronidase", es: "α-L-iduronidasa", de: "α-L-Iduronidase", nl: "α-L-iduronidase" }
                ],
                correct: 1,
                explanation: {
                    en: "Tay-Sachs disease is caused by deficiency of β-hexosaminidase A, leading to accumulation of GM2 ganglioside in neurons and progressive neurodegeneration.",
                    es: "La enfermedad de Tay-Sachs es causada por deficiencia de β-hexosaminidasa A, llevando a acumulación de gangliósido GM2 en neuronas y neurodegeneración progresiva.",
                    de: "Die Tay-Sachs-Krankheit wird durch Mangel an β-Hexosaminidase A verursacht, was zur Ansammlung von GM2-Gangliosid in Neuronen und progressiver Neurodegeneration führt.",
                    nl: "De ziekte van Tay-Sachs wordt veroorzaakt door deficiëntie van β-hexosaminidase A, wat leidt tot ophoping van GM2-ganglioside in neuronen en progressieve neurodegeneratie."
                }
            },
            {
                question: {
                    en: "What is the committed step in fatty acid synthesis?",
                    es: "¿Cuál es el paso comprometido en la síntesis de ácidos grasos?",
                    de: "Was ist der festgelegte Schritt bei der Fettsäuresynthese?",
                    nl: "Wat is de vastgelegde stap bij vetzuursynthese?"
                },
                options: [
                    { en: "Acetyl-CoA to malonyl-CoA", es: "Acetil-CoA a malonil-CoA", de: "Acetyl-CoA zu Malonyl-CoA", nl: "Acetyl-CoA naar malonyl-CoA" },
                    { en: "Malonyl-CoA to palmitate", es: "Malonil-CoA a palmitato", de: "Malonyl-CoA zu Palmitat", nl: "Malonyl-CoA naar palmitaat" },
                    { en: "Citrate to acetyl-CoA", es: "Citrato a acetil-CoA", de: "Citrat zu Acetyl-CoA", nl: "Citraat naar acetyl-CoA" },
                    { en: "Palmitate to palmityl-CoA", es: "Palmitato a palmitil-CoA", de: "Palmitat zu Palmityl-CoA", nl: "Palmitaat naar palmityl-CoA" }
                ],
                correct: 0,
                explanation: {
                    en: "The conversion of acetyl-CoA to malonyl-CoA by acetyl-CoA carboxylase is the committed step in fatty acid synthesis, as malonyl-CoA is exclusively used for fatty acid biosynthesis.",
                    es: "La conversión de acetil-CoA a malonil-CoA por acetil-CoA carboxilasa es el paso comprometido en la síntesis de ácidos grasos, ya que malonil-CoA se usa exclusivamente para biosíntesis de ácidos grasos.",
                    de: "Die Umwandlung von Acetyl-CoA zu Malonyl-CoA durch Acetyl-CoA-Carboxylase ist der festgelegte Schritt bei der Fettsäuresynthese, da Malonyl-CoA ausschließlich für die Fettsäure-Biosynthese verwendet wird.",
                    nl: "De conversie van acetyl-CoA naar malonyl-CoA door acetyl-CoA carboxylase is de vastgelegde stap bij vetzuursynthese, omdat malonyl-CoA exclusief gebruikt wordt voor vetzuurbiosynthese."
                }
            },
            {
                question: {
                    en: "Which metabolic pathway is primarily active in red blood cells?",
                    es: "¿Qué vía metabólica es principalmente activa en glóbulos rojos?",
                    de: "Welcher Stoffwechselweg ist hauptsächlich in roten Blutkörperchen aktiv?",
                    nl: "Welke metabolische route is voornamelijk actief in rode bloedcellen?"
                },
                options: [
                    { en: "Glycolysis only", es: "Solo glucólisis", de: "Nur Glykolyse", nl: "Alleen glycolyse" },
                    { en: "Citric acid cycle", es: "Ciclo del ácido cítrico", de: "Zitronensäurezyklus", nl: "Citroenzuurcyclus" },
                    { en: "Fatty acid oxidation", es: "Oxidación de ácidos grasos", de: "Fettsäureoxidation", nl: "Vetzuuroxidatie" },
                    { en: "Oxidative phosphorylation", es: "Fosforilación oxidativa", de: "Oxidative Phosphorylierung", nl: "Oxidatieve fosforylering" }
                ],
                correct: 0,
                explanation: {
                    en: "Red blood cells lack mitochondria and nuclei, so they rely exclusively on glycolysis for ATP production and cannot perform oxidative metabolism or protein synthesis.",
                    es: "Los glóbulos rojos carecen de mitocondrias y núcleos, por lo que dependen exclusivamente de la glucólisis para la producción de ATP y no pueden realizar metabolismo oxidativo o síntesis de proteínas.",
                    de: "Rote Blutkörperchen haben keine Mitochondrien und Zellkerne, daher sind sie ausschließlich auf Glykolyse für ATP-Produktion angewiesen und können weder oxidativen Stoffwechsel noch Proteinsynthese durchführen.",
                    nl: "Rode bloedcellen hebben geen mitochondriën en celkernen, dus zijn ze exclusief afhankelijk van glycolyse voor ATP-productie en kunnen geen oxidatief metabolisme of eiwittsynthese uitvoeren."
                }
            },
            {
                question: {
                    en: "What is the primary regulatory mechanism of the pentose phosphate pathway?",
                    es: "¿Cuál es el mecanismo regulatorio principal de la vía de pentosas fosfato?",
                    de: "Was ist der primäre Regulationsmechanismus des Pentosephosphatweges?",
                    nl: "Wat is het primaire regulatiemechanisme van de pentosefosfaatroute?"
                },
                options: [
                    { en: "NADP+/NADPH ratio", es: "Relación NADP+/NADPH", de: "NADP+/NADPH-Verhältnis", nl: "NADP+/NADPH-verhouding" },
                    { en: "ATP/ADP ratio", es: "Relación ATP/ADP", de: "ATP/ADP-Verhältnis", nl: "ATP/ADP-verhouding" },
                    { en: "Glucose-6-phosphate concentration", es: "Concentración de glucosa-6-fosfato", de: "Glucose-6-phosphat-Konzentration", nl: "Glucose-6-fosfaat concentratie" },
                    { en: "Insulin signaling", es: "Señalización de insulina", de: "Insulin-Signaling", nl: "Insulinesignalering" }
                ],
                correct: 0,
                explanation: {
                    en: "The pentose phosphate pathway is primarily regulated by the NADP+/NADPH ratio, with glucose-6-phosphate dehydrogenase being inhibited by NADPH and activated when NADP+ levels are high.",
                    es: "La vía de pentosas fosfato es regulada principalmente por la relación NADP+/NADPH, con glucosa-6-fosfato deshidrogenasa siendo inhibida por NADPH y activada cuando los niveles de NADP+ son altos.",
                    de: "Der Pentosephosphatweg wird hauptsächlich durch das NADP+/NADPH-Verhältnis reguliert, wobei Glucose-6-phosphat-Dehydrogenase durch NADPH gehemmt und bei hohen NADP+-Spiegeln aktiviert wird.",
                    nl: "De pentosefosfaatroute wordt voornamelijk gereguleerd door de NADP+/NADPH-verhouding, waarbij glucose-6-fosfaat dehydrogenase wordt geremd door NADPH en geactiveerd wanneer NADP+-niveaus hoog zijn."
                }
            },
            {
                question: {
                    en: "Which amino acid is the precursor for nitric oxide synthesis?",
                    es: "¿Qué aminoácido es el precursor para la síntesis de óxido nítrico?",
                    de: "Welche Aminosäure ist der Vorläufer für die Stickstoffmonoxid-Synthese?",
                    nl: "Welk aminozuur is de voorloper voor stikstofoxide-synthese?"
                },
                options: [
                    { en: "Lysine", es: "Lisina", de: "Lysin", nl: "Lysine" },
                    { en: "Arginine", es: "Arginina", de: "Arginin", nl: "Arginine" },
                    { en: "Ornithine", es: "Ornitina", de: "Ornithin", nl: "Ornithine" },
                    { en: "Citrulline", es: "Citrulina", de: "Citrullin", nl: "Citrulline" }
                ],
                correct: 1,
                explanation: {
                    en: "Arginine is the substrate for nitric oxide synthase (NOS), which catalyzes the oxidation of arginine to produce nitric oxide, citrulline, and NADP+.",
                    es: "La arginina es el sustrato para la óxido nítrico sintasa (NOS), que cataliza la oxidación de arginina para producir óxido nítrico, citrulina y NADP+.",
                    de: "Arginin ist das Substrat für Stickstoffmonoxid-Synthase (NOS), die die Oxidation von Arginin katalysiert, um Stickstoffmonoxid, Citrullin und NADP+ zu produzieren.",
                    nl: "Arginine is het substraat voor stikstofoxide synthase (NOS), dat de oxidatie van arginine katalyseert om stikstofoxide, citrulline en NADP+ te produceren."
                }
            },
            {
                question: {
                    en: "What is the metabolic fate of excess amino acids in the fed state?",
                    es: "¿Cuál es el destino metabólico de aminoácidos en exceso en el estado alimentado?",
                    de: "Was ist das metabolische Schicksal überschüssiger Aminosäuren im gesättigten Zustand?",
                    nl: "Wat is het metabolische lot van overtollige aminozuren in de gevoede toestand?"
                },
                options: [
                    { en: "Stored as protein", es: "Almacenados como proteína", de: "Als Protein gespeichert", nl: "Opgeslagen als eiwit" },
                    { en: "Converted to fat", es: "Convertidos en grasa", de: "In Fett umgewandelt", nl: "Omgezet naar vet" },
                    { en: "Excreted unchanged", es: "Excretados sin cambios", de: "Unverändert ausgeschieden", nl: "Onveranderd uitgescheiden" },
                    { en: "Converted to ketones", es: "Convertidos en cetonas", de: "In Ketone umgewandelt", nl: "Omgezet naar ketonen" }
                ],
                correct: 1,
                explanation: {
                    en: "Excess amino acids in the fed state are deaminated and their carbon skeletons are converted to acetyl-CoA and other intermediates that are used for fatty acid synthesis and storage as fat.",
                    es: "Los aminoácidos en exceso en el estado alimentado son desaminados y sus esqueletos de carbono son convertidos a acetil-CoA y otros intermediarios que se usan para síntesis de ácidos grasos y almacenamiento como grasa.",
                    de: "Überschüssige Aminosäuren im gesättigten Zustand werden desaminiert und ihre Kohlenstoffgerüste zu Acetyl-CoA und anderen Zwischenprodukten umgewandelt, die für Fettsäuresynthese und Speicherung als Fett verwendet werden.",
                    nl: "Overtollige aminozuren in de gevoede toestand worden gedeamineerd en hun koolstofskelet wordt omgezet naar acetyl-CoA en andere tussenproducten die worden gebruikt voor vetzuursynthese en opslag als vet."
                }
            },
            {
                question: {
                    en: "Which enzyme is deficient in phenylketonuria (PKU)?",
                    es: "¿Qué enzima es deficiente en la fenilcetonuria (PKU)?",
                    de: "Welches Enzym ist bei Phenylketonurie (PKU) mangelhaft?",
                    nl: "Welk enzym is deficiënt bij fenylketonurie (PKU)?"
                },
                options: [
                    { en: "Tyrosine aminotransferase", es: "Tirosina aminotransferasa", de: "Tyrosin-Aminotransferase", nl: "Tyrosine aminotransferase" },
                    { en: "Phenylalanine hydroxylase", es: "Fenilalanina hidroxilasa", de: "Phenylalanin-Hydroxylase", nl: "Fenylalanine hydroxylase" },
                    { en: "Tyrosinase", es: "Tirosinasa", de: "Tyrosinase", nl: "Tyrosinase" },
                    { en: "DOPA decarboxylase", es: "DOPA descarboxilasa", de: "DOPA-Decarboxylase", nl: "DOPA decarboxylase" }
                ],
                correct: 1,
                explanation: {
                    en: "PKU is caused by deficiency of phenylalanine hydroxylase, which converts phenylalanine to tyrosine, leading to accumulation of phenylalanine and its metabolites.",
                    es: "La PKU es causada por deficiencia de fenilalanina hidroxilasa, que convierte fenilalanina en tirosina, llevando a acumulación de fenilalanina y sus metabolitos.",
                    de: "PKU wird durch Mangel an Phenylalanin-Hydroxylase verursacht, die Phenylalanin zu Tyrosin umwandelt, was zur Ansammlung von Phenylalanin und seinen Metaboliten führt.",
                    nl: "PKU wordt veroorzaakt door deficiëntie van fenylalanine hydroxylase, dat fenylalanine omzet naar tyrosine, wat leidt tot ophoping van fenylalanine en zijn metabolieten."
                }
            },
            {
                question: {
                    en: "What is the primary function of the malate-aspartate shuttle?",
                    es: "¿Cuál es la función principal del lanzadera malato-aspartato?",
                    de: "Was ist die primäre Funktion des Malat-Aspartat-Shuttles?",
                    nl: "Wat is de primaire functie van de malaat-aspartaat shuttle?"
                },
                options: [
                    { en: "Transport fatty acids into mitochondria", es: "Transportar ácidos grasos a mitocondrias", de: "Fettsäuren in Mitochondrien transportieren", nl: "Vetzuren naar mitochondriën transporteren" },
                    { en: "Transfer NADH reducing equivalents into mitochondria", es: "Transferir equivalentes reductores de NADH a mitocondrias", de: "NADH-Reduktionsäquivalente in Mitochondrien übertragen", nl: "NADH-reducerende equivalenten naar mitochondriën overbrengen" },
                    { en: "Export acetyl-CoA from mitochondria", es: "Exportar acetil-CoA de mitocondrias", de: "Acetyl-CoA aus Mitochondrien exportieren", nl: "Acetyl-CoA uit mitochondriën exporteren" },
                    { en: "Maintain pH balance", es: "Mantener equilibrio de pH", de: "pH-Gleichgewicht aufrechterhalten", nl: "pH-balans handhaven" }
                ],
                correct: 1,
                explanation: {
                    en: "The malate-aspartate shuttle transfers NADH reducing equivalents from the cytosol into mitochondria for oxidative phosphorylation, as NADH cannot directly cross the inner mitochondrial membrane.",
                    es: "El lanzadera malato-aspartato transfiere equivalentes reductores de NADH del citosol a las mitocondrias para fosforilación oxidativa, ya que NADH no puede cruzar directamente la membrana mitocondrial interna.",
                    de: "Das Malat-Aspartat-Shuttle überträgt NADH-Reduktionsäquivalente vom Zytosol in die Mitochondrien für oxidative Phosphorylierung, da NADH die innere Mitochondrienmembran nicht direkt durchqueren kann.",
                    nl: "De malaat-aspartaat shuttle draagt NADH-reducerende equivalenten over van het cytosol naar mitochondriën voor oxidatieve fosforylering, omdat NADH niet direct het binnenste mitochondriale membraan kan kruisen."
                }
            },
            {
                question: {
                    en: "Which metabolic condition is characterized by elevated methylmalonic acid?",
                    es: "¿Qué condición metabólica se caracteriza por ácido metilmalónico elevado?",
                    de: "Welche Stoffwechselerkrankung ist durch erhöhte Methylmalonsäure charakterisiert?",
                    nl: "Welke metabolische aandoening wordt gekenmerkt door verhoogd methylmalonzuur?"
                },
                options: [
                    { en: "Folate deficiency", es: "Deficiencia de folato", de: "Folatmangel", nl: "Folaatdeficiëntie" },
                    { en: "Vitamin B12 deficiency", es: "Deficiencia de vitamina B12", de: "Vitamin B12-Mangel", nl: "Vitamine B12-deficiëntie" },
                    { en: "Biotin deficiency", es: "Deficiencia de biotina", de: "Biotinmangel", nl: "Biotinedeficiëntie" },
                    { en: "Thiamine deficiency", es: "Deficiencia de tiamina", de: "Thiaminmangel", nl: "Thiaminedeficiëntie" }
                ],
                correct: 1,
                explanation: {
                    en: "Vitamin B12 deficiency leads to elevated methylmalonic acid because B12 (as adenosylcobalamin) is required for methylmalonyl-CoA mutase, which converts methylmalonyl-CoA to succinyl-CoA.",
                    es: "La deficiencia de vitamina B12 lleva a ácido metilmalónico elevado porque B12 (como adenosilcobalamina) se requiere para metilmalonil-CoA mutasa, que convierte metilmalonil-CoA en succinil-CoA.",
                    de: "Vitamin B12-Mangel führt zu erhöhter Methylmalonsäure, weil B12 (als Adenosylcobalamin) für Methylmalonyl-CoA-Mutase benötigt wird, die Methylmalonyl-CoA zu Succinyl-CoA umwandelt.",
                    nl: "Vitamine B12-deficiëntie leidt tot verhoogd methylmalonzuur omdat B12 (als adenosylcobalamine) vereist is voor methylmalonyl-CoA mutase, dat methylmalonyl-CoA omzet naar succinyl-CoA."
                }
            },
            {
                question: {
                    en: "What is the main regulatory enzyme of the urea cycle?",
                    es: "¿Cuál es la enzima regulatoria principal del ciclo de la urea?",
                    de: "Was ist das hauptsächliche regulatorische Enzym des Harnstoffzyklus?",
                    nl: "Wat is het belangrijkste regulatoire enzym van de ureumcyclus?"
                },
                options: [
                    { en: "Carbamoyl phosphate synthetase I", es: "Carbamoil fosfato sintetasa I", de: "Carbamoylphosphat-Synthetase I", nl: "Carbamoylfosfaat synthetase I" },
                    { en: "Ornithine transcarbamylase", es: "Ornitina transcarbamoilasa", de: "Ornithin-Transcarbamylase", nl: "Ornithine transcarbamylase" },
                    { en: "Argininosuccinate synthetase", es: "Argininosuccinato sintetasa", de: "Argininosuccinat-Synthetase", nl: "Argininosuccinaat synthetase" },
                    { en: "Arginase", es: "Arginasa", de: "Arginase", nl: "Arginase" }
                ],
                correct: 0,
                explanation: {
                    en: "Carbamoyl phosphate synthetase I (CPS I) is the rate-limiting enzyme of the urea cycle, activated by N-acetylglutamate and regulated by the availability of ammonia.",
                    es: "La carbamoil fosfato sintetasa I (CPS I) es la enzima limitante de velocidad del ciclo de la urea, activada por N-acetilglutamato y regulada por la disponibilidad de amonio.",
                    de: "Carbamoylphosphat-Synthetase I (CPS I) ist das geschwindigkeitsbestimmende Enzym des Harnstoffzyklus, aktiviert durch N-Acetylglutamat und reguliert durch die Verfügbarkeit von Ammoniak.",
                    nl: "Carbamoylfosfaat synthetase I (CPS I) is het snelheidsbepalende enzym van de ureumcyclus, geactiveerd door N-acetylglutamaat en gereguleerd door de beschikbaarheid van ammoniak."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('brain-teaser/biology', level5);
    }
})();