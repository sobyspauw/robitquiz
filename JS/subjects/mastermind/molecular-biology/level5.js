// Molecular Biology - Level 5: Metabolic Pathways and Regulation
(function() {
  const level5 = {
    name: {
      en: "Metabolic Pathways and Regulation",
      es: "Vías Metabólicas y Regulación",
      de: "Stoffwechselwege und Regulation",
      nl: "Metabole Paden en Regulatie"
    },
    questions: [
      {
        question: {
          en: "What is the central pathway of cellular respiration?",
          es: "¿Cuál es la vía central de la respiración celular?",
          de: "Was ist der zentrale Weg der Zellatmung?",
          nl: "Wat is het centrale pad van cellulaire respiratie?"
        },
        options: [
          {
            en: "Glycolysis → Citric Acid Cycle → Electron Transport Chain",
            es: "Glucólisis → Ciclo del Ácido Cítrico → Cadena de Transporte de Electrones",
            de: "Glykolyse → Citratzyklus → Elektronentransportkette",
            nl: "Glycolyse → Citroenzuurcyclus → Elektronentransportketen"
          },
          {
            en: "Photosynthesis → Fermentation → ATP synthesis",
            es: "Fotosíntesis → Fermentación → Síntesis de ATP",
            de: "Photosynthese → Fermentation → ATP-Synthese",
            nl: "Fotosynthese → Fermentatie → ATP-synthese"
          },
          {
            en: "Protein synthesis → DNA replication → Cell division",
            es: "Síntesis proteica → Replicación de ADN → División celular",
            de: "Proteinsynthese → DNA-Replikation → Zellteilung",
            nl: "Eiwitsynthese → DNA-replicatie → Celdeling"
          },
          {
            en: "Lipid metabolism → Amino acid synthesis → Nucleotide formation",
            es: "Metabolismo lipídico → Síntesis de aminoácidos → Formación de nucleótidos",
            de: "Lipidstoffwechsel → Aminosäuresynthese → Nukleotidbildung",
            nl: "Lipide metabolisme → Aminozuursynthese → Nucleotidevorming"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cellular respiration consists of three main stages: glycolysis (glucose breakdown), the citric acid cycle (complete oxidation of acetyl-CoA), and the electron transport chain (ATP production via oxidative phosphorylation).",
          es: "La respiración celular consta de tres etapas principales: glucólisis (degradación de glucosa), ciclo del ácido cítrico (oxidación completa de acetil-CoA), y cadena de transporte de electrones (producción de ATP vía fosforilación oxidativa).",
          de: "Die Zellatmung besteht aus drei Hauptstufen: Glykolyse (Glukoseabbau), Citratzyklus (vollständige Oxidation von Acetyl-CoA) und Elektronentransportkette (ATP-Produktion durch oxidative Phosphorylierung).",
          nl: "Cellulaire respiratie bestaat uit drie hoofdstadia: glycolyse (glucose afbraak), de citroenzuurcyclus (volledige oxidatie van acetyl-CoA), en de elektronentransportketen (ATP-productie via oxidatieve fosforylatie)."
        }
      },
      {
        question: {
          en: "What is the net ATP yield from complete glucose oxidation?",
          es: "¿Cuál es el rendimiento neto de ATP de la oxidación completa de glucosa?",
          de: "Was ist die Netto-ATP-Ausbeute bei der vollständigen Glukoseoxidation?",
          nl: "Wat is de netto ATP-opbrengst van volledige glucose oxidatie?"
        },
        options: [
          {
            en: "Approximately 30-32 ATP molecules",
            es: "Aproximadamente 30-32 moléculas de ATP",
            de: "Etwa 30-32 ATP-Moleküle",
            nl: "Ongeveer 30-32 ATP-moleculen"
          },
          {
            en: "Exactly 2 ATP molecules",
            es: "Exactamente 2 moléculas de ATP",
            de: "Genau 2 ATP-Moleküle",
            nl: "Precies 2 ATP-moleculen"
          },
          {
            en: "Exactly 38 ATP molecules",
            es: "Exactamente 38 moléculas de ATP",
            de: "Genau 38 ATP-Moleküle",
            nl: "Precies 38 ATP-moleculen"
          },
          {
            en: "Approximately 100 ATP molecules",
            es: "Aproximadamente 100 moléculas de ATP",
            de: "Etwa 100 ATP-Moleküle",
            nl: "Ongeveer 100 ATP-moleculen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Modern calculations show that complete glucose oxidation yields approximately 30-32 ATP molecules, accounting for the actual P/O ratios and transport costs across mitochondrial membranes.",
          es: "Los cálculos modernos muestran que la oxidación completa de glucosa produce aproximadamente 30-32 moléculas de ATP, considerando las relaciones P/O reales y los costos de transporte a través de membranas mitocondriales.",
          de: "Moderne Berechnungen zeigen, dass die vollständige Glukoseoxidation etwa 30-32 ATP-Moleküle ergibt, unter Berücksichtigung der tatsächlichen P/O-Verhältnisse und Transportkosten über Mitochondrienmembranen.",
          nl: "Moderne berekeningen tonen dat volledige glucose oxidatie ongeveer 30-32 ATP-moleculen oplevert, rekening houdend met de werkelijke P/O-verhoudingen en transportkosten over mitochondriale membranen."
        }
      },
      {
        question: {
          en: "What is the role of allosteric regulation in metabolism?",
          es: "¿Cuál es el papel de la regulación alostérica en el metabolismo?",
          de: "Was ist die Rolle der allosterischen Regulation im Stoffwechsel?",
          nl: "Wat is de rol van allosterische regulatie in het metabolisme?"
        },
        options: [
          {
            en: "It allows enzymes to respond to cellular conditions by changing activity through effector binding",
            es: "Permite que las enzimas respondan a condiciones celulares cambiando actividad mediante unión de efectores",
            de: "Es ermöglicht Enzymen, auf zelluläre Bedingungen zu reagieren, indem sie ihre Aktivität durch Effektorbindung ändern",
            nl: "Het stelt enzymen in staat om te reageren op cellulaire condities door activiteit te veranderen via effector binding"
          },
          {
            en: "It only involves competitive inhibition of enzymes",
            es: "Solo involucra inhibición competitiva de enzimas",
            de: "Es beinhaltet nur kompetitive Hemmung von Enzymen",
            nl: "Het behelst alleen competitieve inhibitie van enzymen"
          },
          {
            en: "It permanently modifies enzyme structure",
            es: "Modifica permanentemente la estructura enzimática",
            de: "Es modifiziert die Enzymstruktur permanent",
            nl: "Het modificeert enzymstructuur permanent"
          },
          {
            en: "It only affects enzyme synthesis, not activity",
            es: "Solo afecta la síntesis enzimática, no la actividad",
            de: "Es beeinflusst nur die Enzymsynthese, nicht die Aktivität",
            nl: "Het beïnvloedt alleen enzymsynthese, niet activiteit"
          }
        ],
        correct: 0,
        explanation: {
          en: "Allosteric regulation allows enzymes to sense and respond to cellular conditions through binding of regulatory molecules (effectors) at sites distinct from the active site, causing conformational changes that modulate activity.",
          es: "La regulación alostérica permite que las enzimas detecten y respondan a condiciones celulares mediante unión de moléculas regulatorias (efectores) en sitios distintos del sitio activo, causando cambios conformacionales que modulan la actividad.",
          de: "Allosterische Regulation ermöglicht es Enzymen, zelluläre Bedingungen zu erkennen und darauf zu reagieren durch Bindung regulatorischer Moleküle (Effektoren) an Stellen, die vom aktiven Zentrum verschieden sind, was Konformationsänderungen verursacht, die die Aktivität modulieren.",
          nl: "Allosterische regulatie stelt enzymen in staat om cellulaire condities te detecteren en erop te reageren door binding van regulatoire moleculen (effectors) op plaatsen verschillend van het actieve centrum, wat conformatieveranderingen veroorzaakt die activiteit moduleren."
        }
      },
      {
        question: {
          en: "What is the committed step of glycolysis?",
          es: "¿Cuál es el paso comprometido de la glucólisis?",
          de: "Was ist der festgelegte Schritt der Glykolyse?",
          nl: "Wat is de vastgelegde stap van glycolyse?"
        },
        options: [
          {
            en: "Phosphofructokinase-1 (PFK-1) catalyzed reaction",
            es: "Reacción catalizada por fosfofructoquinasa-1 (PFK-1)",
            de: "Von Phosphofructokinase-1 (PFK-1) katalysierte Reaktion",
            nl: "Fosfofructokinase-1 (PFK-1) gekatalyseerde reactie"
          },
          {
            en: "Hexokinase catalyzed reaction",
            es: "Reacción catalizada por hexoquinasa",
            de: "Von Hexokinase katalysierte Reaktion",
            nl: "Hexokinase gekatalyseerde reactie"
          },
          {
            en: "Pyruvate kinase catalyzed reaction",
            es: "Reacción catalizada por piruvato quinasa",
            de: "Von Pyruvatkinase katalysierte Reaktion",
            nl: "Pyruvaat kinase gekatalyseerde reactie"
          },
          {
            en: "Aldolase catalyzed reaction",
            es: "Reacción catalizada por aldolasa",
            de: "Von Aldolase katalysierte Reaktion",
            nl: "Aldolase gekatalyseerde reactie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The phosphofructokinase-1 (PFK-1) reaction is the committed step of glycolysis because it's the first irreversible step that commits glucose to glycolytic breakdown and is highly regulated by allosteric effectors.",
          es: "La reacción de fosfofructoquinasa-1 (PFK-1) es el paso comprometido de la glucólisis porque es el primer paso irreversible que compromete a la glucosa a la degradación glucolítica y está altamente regulado por efectores alostéricos.",
          de: "Die Phosphofructokinase-1 (PFK-1)-Reaktion ist der festgelegte Schritt der Glykolyse, weil es der erste irreversible Schritt ist, der Glukose zum glykolytischen Abbau festlegt und stark durch allosterische Effektoren reguliert wird.",
          nl: "De fosfofructokinase-1 (PFK-1) reactie is de vastgelegde stap van glycolyse omdat het de eerste onomkeerbare stap is die glucose vastlegt voor glycolytische afbraak en sterk gereguleerd wordt door allosterische effectors."
        }
      },
      {
        question: {
          en: "What is the Pasteur effect?",
          es: "¿Qué es el efecto Pasteur?",
          de: "Was ist der Pasteur-Effekt?",
          nl: "Wat is het Pasteur-effect?"
        },
        options: [
          {
            en: "Inhibition of glycolysis by oxygen through enhanced ATP production",
            es: "Inhibición de la glucólisis por oxígeno mediante producción mejorada de ATP",
            de: "Hemmung der Glykolyse durch Sauerstoff über verstärkte ATP-Produktion",
            nl: "Inhibitie van glycolyse door zuurstof via verhoogde ATP-productie"
          },
          {
            en: "Stimulation of fermentation in the presence of oxygen",
            es: "Estimulación de fermentación en presencia de oxígeno",
            de: "Stimulation der Fermentation in Anwesenheit von Sauerstoff",
            nl: "Stimulatie van fermentatie in aanwezigheid van zuurstof"
          },
          {
            en: "Increased glucose uptake during starvation",
            es: "Aumento de captación de glucosa durante inanición",
            de: "Erhöhte Glukoseaufnahme während des Hungers",
            nl: "Verhoogde glucose opname tijdens vasten"
          },
          {
            en: "Complete shutdown of metabolism in anaerobic conditions",
            es: "Apagado completo del metabolismo en condiciones anaeróbicas",
            de: "Vollständige Abschaltung des Stoffwechsels unter anaeroben Bedingungen",
            nl: "Volledige uitschakeling van metabolisme in anaerobe condities"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Pasteur effect describes how oxygen inhibits glycolysis by promoting efficient ATP production through oxidative phosphorylation, reducing the cell's need for glycolytic ATP production.",
          es: "El efecto Pasteur describe cómo el oxígeno inhibe la glucólisis promoviendo producción eficiente de ATP mediante fosforilación oxidativa, reduciendo la necesidad celular de producción glucolítica de ATP.",
          de: "Der Pasteur-Effekt beschreibt, wie Sauerstoff die Glykolyse hemmt, indem er effiziente ATP-Produktion durch oxidative Phosphorylierung fördert und den Bedarf der Zelle an glykolytischer ATP-Produktion reduziert.",
          nl: "Het Pasteur-effect beschrijft hoe zuurstof glycolyse remt door efficiënte ATP-productie via oxidatieve fosforylatie te bevorderen, waardoor de behoefte van de cel aan glycolytische ATP-productie wordt verminderd."
        }
      },
      {
        question: {
          en: "What is the function of the citric acid cycle?",
          es: "¿Cuál es la función del ciclo del ácido cítrico?",
          de: "Was ist die Funktion des Citratzyklus?",
          nl: "Wat is de functie van de citroenzuurcyclus?"
        },
        options: [
          {
            en: "Complete oxidation of acetyl-CoA to produce NADH, FADH2, and GTP",
            es: "Oxidación completa de acetil-CoA para producir NADH, FADH2 y GTP",
            de: "Vollständige Oxidation von Acetyl-CoA zur Produktion von NADH, FADH2 und GTP",
            nl: "Volledige oxidatie van acetyl-CoA om NADH, FADH2 en GTP te produceren"
          },
          {
            en: "Direct synthesis of large amounts of ATP",
            es: "Síntesis directa de grandes cantidades de ATP",
            de: "Direkte Synthese großer Mengen ATP",
            nl: "Directe synthese van grote hoeveelheden ATP"
          },
          {
            en: "Conversion of glucose to pyruvate",
            es: "Conversión de glucosa a piruvato",
            de: "Umwandlung von Glukose zu Pyruvat",
            nl: "Omzetting van glucose naar pyruvaat"
          },
          {
            en: "Synthesis of fatty acids from carbohydrates",
            es: "Síntesis de ácidos grasos a partir de carbohidratos",
            de: "Synthese von Fettsäuren aus Kohlenhydraten",
            nl: "Synthese van vetzuren uit koolhydraten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The citric acid cycle completely oxidizes acetyl-CoA (derived from carbohydrates, fats, and proteins) to CO2, generating reduced coenzymes (NADH, FADH2) and GTP that are used for ATP synthesis in the electron transport chain.",
          es: "El ciclo del ácido cítrico oxida completamente acetil-CoA (derivado de carbohidratos, grasas y proteínas) a CO2, generando coenzimas reducidas (NADH, FADH2) y GTP que se usan para síntesis de ATP en la cadena de transporte de electrones.",
          de: "Der Citratzyklus oxidiert Acetyl-CoA (abgeleitet von Kohlenhydraten, Fetten und Proteinen) vollständig zu CO2 und erzeugt reduzierte Coenzyme (NADH, FADH2) und GTP, die für ATP-Synthese in der Elektronentransportkette verwendet werden.",
          nl: "De citroenzuurcyclus oxideert acetyl-CoA (afgeleid van koolhydraten, vetten en eiwitten) volledig tot CO2, waarbij gereduceerde coenzymen (NADH, FADH2) en GTP worden gegenereerd die gebruikt worden voor ATP-synthese in de elektronentransportketen."
        }
      },
      {
        question: {
          en: "What is the mechanism of oxidative phosphorylation?",
          es: "¿Cuál es el mecanismo de la fosforilación oxidativa?",
          de: "Was ist der Mechanismus der oxidativen Phosphorylierung?",
          nl: "Wat is het mechanisme van oxidatieve fosforylatie?"
        },
        options: [
          {
            en: "Electron transport creates proton gradient that drives ATP synthesis via chemiosmosis",
            es: "El transporte de electrones crea gradiente de protones que impulsa síntesis de ATP vía quimiosmosis",
            de: "Elektronentransport erzeugt Protonengradienten, der ATP-Synthese über Chemiosmose antreibt",
            nl: "Elektronentransport creëert protonengradiënt die ATP-synthese via chemiosmose aandrijft"
          },
          {
            en: "Direct phosphorylation of ADP by electron transport complexes",
            es: "Fosforilación directa de ADP por complejos de transporte de electrones",
            de: "Direkte Phosphorylierung von ADP durch Elektronentransportkomplexe",
            nl: "Directe fosforylatie van ADP door elektronentransportcomplexen"
          },
          {
            en: "Substrate-level phosphorylation in the mitochondrial matrix",
            es: "Fosforilación a nivel de sustrato en la matriz mitocondrial",
            de: "Substratebenen-Phosphorylierung in der Mitochondrienmatrix",
            nl: "Substraatfosforylatie in de mitochondriale matrix"
          },
          {
            en: "Fermentation-based ATP production without oxygen",
            es: "Producción de ATP basada en fermentación sin oxígeno",
            de: "Fermentationsbasierte ATP-Produktion ohne Sauerstoff",
            nl: "Fermentatie-gebaseerde ATP-productie zonder zuurstof"
          }
        ],
        correct: 0,
        explanation: {
          en: "Oxidative phosphorylation works through the chemiosmotic mechanism: electron transport complexes pump protons across the inner mitochondrial membrane, creating a proton gradient that drives ATP synthase to produce ATP.",
          es: "La fosforilación oxidativa funciona mediante el mecanismo quimiosmótico: complejos de transporte de electrones bombean protones a través de la membrana mitocondrial interna, creando un gradiente de protones que impulsa la ATP sintasa para producir ATP.",
          de: "Oxidative Phosphorylierung funktioniert über den chemiosmotischen Mechanismus: Elektronentransportkomplexe pumpen Protonen über die innere Mitochondrienmembran und erzeugen einen Protonengradienten, der ATP-Synthase antreibt, um ATP zu produzieren.",
          nl: "Oxidatieve fosforylatie werkt via het chemiosmotische mechanisme: elektronentransportcomplexen pompen protonen over de binnenste mitochondriale membraan, wat een protonengradiënt creëert die ATP-synthase aandrijft om ATP te produceren."
        }
      },
      {
        question: {
          en: "What is gluconeogenesis and when does it occur?",
          es: "¿Qué es la gluconeogénesis y cuándo ocurre?",
          de: "Was ist Glukoneogenese und wann tritt sie auf?",
          nl: "Wat is gluconeogenese en wanneer vindt het plaats?"
        },
        options: [
          {
            en: "Synthesis of glucose from non-carbohydrate sources during fasting or starvation",
            es: "Síntesis de glucosa a partir de fuentes no carbohidratadas durante ayuno o inanición",
            de: "Synthese von Glukose aus Nicht-Kohlenhydrat-Quellen während Fasten oder Hunger",
            nl: "Synthese van glucose uit niet-koolhydraatbronnen tijdens vasten of honger"
          },
          {
            en: "Breakdown of glucose to pyruvate for energy",
            es: "Degradación de glucosa a piruvato para energía",
            de: "Abbau von Glukose zu Pyruvat für Energie",
            nl: "Afbraak van glucose tot pyruvaat voor energie"
          },
          {
            en: "Storage of glucose as glycogen in liver and muscle",
            es: "Almacenamiento de glucosa como glucógeno en hígado y músculo",
            de: "Speicherung von Glukose als Glykogen in Leber und Muskel",
            nl: "Opslag van glucose als glycogeen in lever en spier"
          },
          {
            en: "Conversion of glucose to fatty acids for storage",
            es: "Conversión de glucosa a ácidos grasos para almacenamiento",
            de: "Umwandlung von Glukose zu Fettsäuren zur Speicherung",
            nl: "Omzetting van glucose naar vetzuren voor opslag"
          }
        ],
        correct: 0,
        explanation: {
          en: "Gluconeogenesis is the metabolic pathway that synthesizes glucose from non-carbohydrate precursors (amino acids, lactate, glycerol) during periods of fasting, starvation, or low carbohydrate intake to maintain blood glucose levels.",
          es: "La gluconeogénesis es la vía metabólica que sintetiza glucosa a partir de precursores no carbohidratados (aminoácidos, lactato, glicerol) durante períodos de ayuno, inanición o baja ingesta de carbohidratos para mantener niveles de glucosa sanguínea.",
          de: "Glukoneogenese ist der Stoffwechselweg, der Glukose aus Nicht-Kohlenhydrat-Vorläufern (Aminosäuren, Laktat, Glycerin) während Fasten, Hunger oder niedriger Kohlenhydrataufnahme synthetisiert, um Blutzuckerspiegel aufrechtzuerhalten.",
          nl: "Gluconeogenese is het metabole pad dat glucose synthetiseert uit niet-koolhydraat voorlopers (aminozuren, lactaat, glycerol) tijdens periodes van vasten, honger of lage koolhydraatinname om bloedglucoselevels te handhaven."
        }
      },
      {
        question: {
          en: "What is the Warburg effect?",
          es: "¿Qué es el efecto Warburg?",
          de: "Was ist der Warburg-Effekt?",
          nl: "Wat is het Warburg-effect?"
        },
        options: [
          {
            en: "Cancer cells preferentially use glycolysis even in the presence of oxygen",
            es: "Las células cancerosas usan preferentemente glucólisis incluso en presencia de oxígeno",
            de: "Krebszellen verwenden bevorzugt Glykolyse auch in Anwesenheit von Sauerstoff",
            nl: "Kankercellen gebruiken bij voorkeur glycolyse zelfs in aanwezigheid van zuurstof"
          },
          {
            en: "Normal cells switch to fermentation under aerobic conditions",
            es: "Las células normales cambian a fermentación bajo condiciones aeróbicas",
            de: "Normale Zellen wechseln zu Fermentation unter aeroben Bedingungen",
            nl: "Normale cellen schakelen over naar fermentatie onder aerobe condities"
          },
          {
            en: "Increased oxygen consumption in healthy tissues",
            es: "Aumento del consumo de oxígeno en tejidos sanos",
            de: "Erhöhter Sauerstoffverbrauch in gesunden Geweben",
            nl: "Verhoogd zuurstofverbruik in gezonde weefsels"
          },
          {
            en: "Complete inhibition of glycolysis in tumor cells",
            es: "Inhibición completa de glucólisis en células tumorales",
            de: "Vollständige Hemmung der Glykolyse in Tumorzellen",
            nl: "Volledige inhibitie van glycolyse in tumorcellen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Warburg effect describes the metabolic reprogramming in cancer cells where they rely heavily on glycolysis for ATP production even when oxygen is available, supporting rapid proliferation and biosynthesis.",
          es: "El efecto Warburg describe la reprogramación metabólica en células cancerosas donde dependen mucho de la glucólisis para producción de ATP incluso cuando hay oxígeno disponible, apoyando proliferación rápida y biosíntesis.",
          de: "Der Warburg-Effekt beschreibt die metabolische Umprogrammierung in Krebszellen, bei der sie stark auf Glykolyse für ATP-Produktion angewiesen sind, auch wenn Sauerstoff verfügbar ist, was schnelle Proliferation und Biosynthese unterstützt.",
          nl: "Het Warburg-effect beschrijft de metabole herprogrammering in kankercellen waarbij ze sterk afhankelijk zijn van glycolyse voor ATP-productie zelfs wanneer zuurstof beschikbaar is, wat snelle proliferatie en biosynthese ondersteunt."
        }
      },
      {
        question: {
          en: "What are the key regulatory enzymes of fatty acid synthesis?",
          es: "¿Cuáles son las enzimas reguladoras clave de la síntesis de ácidos grasos?",
          de: "Was sind die wichtigsten regulatorischen Enzyme der Fettsäuresynthese?",
          nl: "Wat zijn de belangrijkste regulatoire enzymen van vetzuursynthese?"
        },
        options: [
          {
            en: "Acetyl-CoA carboxylase (ACC) and fatty acid synthase (FAS)",
            es: "Acetil-CoA carboxilasa (ACC) y ácido graso sintasa (FAS)",
            de: "Acetyl-CoA-Carboxylase (ACC) und Fettsäuresynthase (FAS)",
            nl: "Acetyl-CoA carboxylase (ACC) en vetzuursynthase (FAS)"
          },
          {
            en: "Phosphofructokinase and pyruvate kinase",
            es: "Fosfofructoquinasa y piruvato quinasa",
            de: "Phosphofructokinase und Pyruvatkinase",
            nl: "Fosfofructokinase en pyruvaat kinase"
          },
          {
            en: "Citrate synthase and aconitase",
            es: "Citrato sintasa y aconitasa",
            de: "Citratsynthase und Aconitase",
            nl: "Citraatsynthase en aconitase"
          },
          {
            en: "Hexokinase and glucose-6-phosphate dehydrogenase",
            es: "Hexoquinasa y glucosa-6-fosfato deshidrogenasa",
            de: "Hexokinase und Glucose-6-phosphat-Dehydrogenase",
            nl: "Hexokinase en glucose-6-fosfaat dehydrogenase"
          }
        ],
        correct: 0,
        explanation: {
          en: "Acetyl-CoA carboxylase (ACC) catalyzes the rate-limiting step of fatty acid synthesis and is regulated by allosteric effectors and covalent modification. Fatty acid synthase (FAS) is the key enzyme complex that synthesizes palmitate.",
          es: "La acetil-CoA carboxilasa (ACC) cataliza el paso limitante de la síntesis de ácidos grasos y está regulada por efectores alostéricos y modificación covalente. La ácido graso sintasa (FAS) es el complejo enzimático clave que sintetiza palmitato.",
          de: "Acetyl-CoA-Carboxylase (ACC) katalysiert den geschwindigkeitsbestimmenden Schritt der Fettsäuresynthese und wird durch allosterische Effektoren und kovalente Modifikation reguliert. Fettsäuresynthase (FAS) ist der wichtigste Enzymkomplex, der Palmitat synthetisiert.",
          nl: "Acetyl-CoA carboxylase (ACC) katalyseert de snelheidsbepalende stap van vetzuursynthese en wordt gereguleerd door allosterische effectors en covalente modificatie. Vetzuursynthase (FAS) is het belangrijkste enzymcomplex dat palmitaat synthetiseert."
        }
      },
      {
        question: {
          en: "What is beta-oxidation and where does it occur?",
          es: "¿Qué es la beta-oxidación y dónde ocurre?",
          de: "Was ist Beta-Oxidation und wo findet sie statt?",
          nl: "Wat is bèta-oxidatie en waar vindt het plaats?"
        },
        options: [
          {
            en: "Breakdown of fatty acids to acetyl-CoA in mitochondria",
            es: "Degradación de ácidos grasos a acetil-CoA en mitocondrias",
            de: "Abbau von Fettsäuren zu Acetyl-CoA in Mitochondrien",
            nl: "Afbraak van vetzuren tot acetyl-CoA in mitochondriën"
          },
          {
            en: "Synthesis of fatty acids from glucose in cytoplasm",
            es: "Síntesis de ácidos grasos a partir de glucosa en citoplasma",
            de: "Synthese von Fettsäuren aus Glukose im Zytoplasma",
            nl: "Synthese van vetzuren uit glucose in cytoplasma"
          },
          {
            en: "Formation of ketone bodies in the liver",
            es: "Formación de cuerpos cetónicos en el hígado",
            de: "Bildung von Ketonkörpern in der Leber",
            nl: "Vorming van ketonlichamen in de lever"
          },
          {
            en: "Conversion of amino acids to glucose",
            es: "Conversión de aminoácidos a glucosa",
            de: "Umwandlung von Aminosäuren zu Glukose",
            nl: "Omzetting van aminozuren naar glucose"
          }
        ],
        correct: 0,
        explanation: {
          en: "Beta-oxidation is the metabolic pathway that breaks down fatty acids into acetyl-CoA units in the mitochondrial matrix, providing a major source of energy, especially during fasting or exercise.",
          es: "La beta-oxidación es la vía metabólica que degrada ácidos grasos en unidades de acetil-CoA en la matriz mitocondrial, proporcionando una fuente importante de energía, especialmente durante ayuno o ejercicio.",
          de: "Beta-Oxidation ist der Stoffwechselweg, der Fettsäuren in der Mitochondrienmatrix zu Acetyl-CoA-Einheiten abbaut und eine wichtige Energiequelle bereitstellt, besonders während Fasten oder Sport.",
          nl: "Bèta-oxidatie is het metabole pad dat vetzuren afbreekt tot acetyl-CoA eenheden in de mitochondriale matrix, wat een belangrijke energiebron biedt, vooral tijdens vasten of oefening."
        }
      },
      {
        question: {
          en: "What is the pentose phosphate pathway and its main functions?",
          es: "¿Qué es la vía de las pentosas fosfato y sus funciones principales?",
          de: "Was ist der Pentosephosphatweg und seine Hauptfunktionen?",
          nl: "Wat is het pentosefosfaatpad en zijn hoofdfuncties?"
        },
        options: [
          {
            en: "Alternative glucose pathway producing NADPH and ribose-5-phosphate",
            es: "Vía alternativa de glucosa que produce NADPH y ribosa-5-fosfato",
            de: "Alternativer Glukoseweg, der NADPH und Ribose-5-phosphat produziert",
            nl: "Alternatief glucosepad dat NADPH en ribose-5-fosfaat produceert"
          },
          {
            en: "Primary pathway for ATP production from glucose",
            es: "Vía primaria para producción de ATP a partir de glucosa",
            de: "Primärer Weg für ATP-Produktion aus Glukose",
            nl: "Primaire pad voor ATP-productie uit glucose"
          },
          {
            en: "Pathway for amino acid synthesis from glucose",
            es: "Vía para síntesis de aminoácidos a partir de glucosa",
            de: "Weg für Aminosäuresynthese aus Glukose",
            nl: "Pad voor aminozuursynthese uit glucose"
          },
          {
            en: "Pathway for fatty acid breakdown in peroxisomes",
            es: "Vía para degradación de ácidos grasos en peroxisomas",
            de: "Weg für Fettsäureabbau in Peroxisomen",
            nl: "Pad voor vetzuurafbraak in peroxisomen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The pentose phosphate pathway (hexose monophosphate shunt) is an alternative glucose oxidation pathway that produces NADPH for reductive biosynthesis and ribose-5-phosphate for nucleotide synthesis.",
          es: "La vía de las pentosas fosfato (derivación hexosa monofosfato) es una vía alternativa de oxidación de glucosa que produce NADPH para biosíntesis reductiva y ribosa-5-fosfato para síntesis de nucleótidos.",
          de: "Der Pentosephosphatweg (Hexosemonophosphat-Shunt) ist ein alternativer Glukoseoxidationsweg, der NADPH für reduktive Biosynthese und Ribose-5-phosphat für Nukleotidsynthese produziert.",
          nl: "Het pentosefosfaatpad (hexose monofosfaat shunt) is een alternatief glucose oxidatiepad dat NADPH produceert voor reductieve biosynthese en ribose-5-fosfaat voor nucleotide synthese."
        }
      },
      {
        question: {
          en: "What is metabolic flexibility?",
          es: "¿Qué es la flexibilidad metabólica?",
          de: "Was ist metabolische Flexibilität?",
          nl: "Wat is metabole flexibiliteit?"
        },
        options: [
          {
            en: "The ability to switch between different fuel sources based on availability and demand",
            es: "La capacidad de cambiar entre diferentes fuentes de combustible basada en disponibilidad y demanda",
            de: "Die Fähigkeit, zwischen verschiedenen Brennstoffquellen basierend auf Verfügbarkeit und Bedarf zu wechseln",
            nl: "Het vermogen om te schakelen tussen verschillende brandstofbronnen gebaseerd op beschikbaarheid en vraag"
          },
          {
            en: "The rate of metabolic reactions in cells",
            es: "La tasa de reacciones metabólicas en células",
            de: "Die Rate metabolischer Reaktionen in Zellen",
            nl: "De snelheid van metabole reacties in cellen"
          },
          {
            en: "The ability of enzymes to change conformation",
            es: "La capacidad de enzimas para cambiar conformación",
            de: "Die Fähigkeit von Enzymen, ihre Konformation zu ändern",
            nl: "Het vermogen van enzymen om conformatie te veranderen"
          },
          {
            en: "The regulation of metabolic enzyme expression",
            es: "La regulación de expresión de enzimas metabólicas",
            de: "Die Regulation der Expression metabolischer Enzyme",
            nl: "De regulatie van metabole enzymexpressie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Metabolic flexibility refers to the capacity of cells and organisms to adapt their metabolism by switching between different fuel sources (glucose, fatty acids, amino acids) depending on nutritional state, energy demands, and tissue-specific needs.",
          es: "La flexibilidad metabólica se refiere a la capacidad de células y organismos de adaptar su metabolismo cambiando entre diferentes fuentes de combustible (glucosa, ácidos grasos, aminoácidos) dependiendo del estado nutricional, demandas energéticas y necesidades específicas de tejido.",
          de: "Metabolische Flexibilität bezieht sich auf die Fähigkeit von Zellen und Organismen, ihren Stoffwechsel anzupassen, indem sie zwischen verschiedenen Brennstoffquellen (Glukose, Fettsäuren, Aminosäuren) wechseln, abhängig von Ernährungszustand, Energiebedarf und gewebespezifischen Bedürfnissen.",
          nl: "Metabole flexibiliteit verwijst naar het vermogen van cellen en organismen om hun metabolisme aan te passen door te schakelen tussen verschillende brandstofbronnen (glucose, vetzuren, aminozuren) afhankelijk van voedingstoestand, energiebehoeften en weefselspecifieke behoeften."
        }
      },
      {
        question: {
          en: "What is the role of AMP-activated protein kinase (AMPK)?",
          es: "¿Cuál es el papel de la proteína quinasa activada por AMP (AMPK)?",
          de: "Was ist die Rolle der AMP-aktivierten Proteinkinase (AMPK)?",
          nl: "Wat is de rol van AMP-geactiveerd proteïne kinase (AMPK)?"
        },
        options: [
          {
            en: "Energy sensor that activates catabolic pathways and inhibits anabolic pathways",
            es: "Sensor energético que activa vías catabólicas e inhibe vías anabólicas",
            de: "Energiesensor, der katabole Wege aktiviert und anabole Wege hemmt",
            nl: "Energiesensor die katabole paden activeert en anabole paden remt"
          },
          {
            en: "Primary enzyme for glucose synthesis",
            es: "Enzima primaria para síntesis de glucosa",
            de: "Primäres Enzym für Glukosesynthese",
            nl: "Primair enzym voor glucosesynthese"
          },
          {
            en: "Regulator of protein synthesis only",
            es: "Regulador solo de síntesis proteica",
            de: "Regulator nur der Proteinsynthese",
            nl: "Regulator alleen van eiwitsynthese"
          },
          {
            en: "Enzyme involved in lipid storage",
            es: "Enzima involucrada en almacenamiento lipídico",
            de: "Enzym, das an Lipidspeicherung beteiligt ist",
            nl: "Enzym betrokken bij lipide opslag"
          }
        ],
        correct: 0,
        explanation: {
          en: "AMPK acts as a cellular energy sensor that responds to low ATP/high AMP ratios by activating energy-producing catabolic pathways (fatty acid oxidation, glycolysis) and inhibiting energy-consuming anabolic pathways (fatty acid synthesis, protein synthesis).",
          es: "AMPK actúa como sensor energético celular que responde a relaciones bajas ATP/alto AMP activando vías catabólicas productoras de energía (oxidación de ácidos grasos, glucólisis) e inhibiendo vías anabólicas consumidoras de energía (síntesis de ácidos grasos, síntesis proteica).",
          de: "AMPK fungiert als zellulärer Energiesensor, der auf niedrige ATP/hohe AMP-Verhältnisse reagiert, indem es energieproduzierende katabole Wege (Fettsäureoxidation, Glykolyse) aktiviert und energieverbrauchende anabole Wege (Fettsäuresynthese, Proteinsynthese) hemmt.",
          nl: "AMPK werkt als cellulaire energiesensor die reageert op lage ATP/hoge AMP-verhoudingen door energie-producerende katabole paden (vetzuuroxidatie, glycolyse) te activeren en energie-consumerende anabole paden (vetzuursynthese, eiwitsynthese) te remmen."
        }
      },
      {
        question: {
          en: "What is ketogenesis and when does it occur?",
          es: "¿Qué es la cetogénesis y cuándo ocurre?",
          de: "Was ist Ketogenese und wann tritt sie auf?",
          nl: "Wat is ketogenese en wanneer vindt het plaats?"
        },
        options: [
          {
            en: "Production of ketone bodies from acetyl-CoA during prolonged fasting or carbohydrate restriction",
            es: "Producción de cuerpos cetónicos a partir de acetil-CoA durante ayuno prolongado o restricción de carbohidratos",
            de: "Produktion von Ketonkörpern aus Acetyl-CoA während verlängertem Fasten oder Kohlenhydratrestriktion",
            nl: "Productie van ketonlichamen uit acetyl-CoA tijdens langdurig vasten of koolhydraatrestrictie"
          },
          {
            en: "Breakdown of ketone bodies for energy",
            es: "Degradación de cuerpos cetónicos para energía",
            de: "Abbau von Ketonkörpern für Energie",
            nl: "Afbraak van ketonlichamen voor energie"
          },
          {
            en: "Synthesis of glucose from amino acids",
            es: "Síntesis de glucosa a partir de aminoácidos",
            de: "Synthese von Glukose aus Aminosäuren",
            nl: "Synthese van glucose uit aminozuren"
          },
          {
            en: "Formation of fatty acids from carbohydrates",
            es: "Formación de ácidos grasos a partir de carbohidratos",
            de: "Bildung von Fettsäuren aus Kohlenhydraten",
            nl: "Vorming van vetzuren uit koolhydraten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Ketogenesis is the metabolic process that produces ketone bodies (acetoacetate, β-hydroxybutyrate, acetone) from acetyl-CoA in the liver during periods of low carbohydrate availability, providing an alternative fuel source for the brain and other tissues.",
          es: "La cetogénesis es el proceso metabólico que produce cuerpos cetónicos (acetoacetato, β-hidroxibutirato, acetona) a partir de acetil-CoA en el hígado durante períodos de baja disponibilidad de carbohidratos, proporcionando una fuente de combustible alternativa para el cerebro y otros tejidos.",
          de: "Ketogenese ist der metabolische Prozess, der Ketonkörper (Acetoacetat, β-Hydroxybutyrat, Aceton) aus Acetyl-CoA in der Leber während Perioden niedriger Kohlenhydratverfügbarkeit produziert und eine alternative Brennstoffquelle für Gehirn und andere Gewebe bereitstellt.",
          nl: "Ketogenese is het metabole proces dat ketonlichamen (acetoacetaat, β-hydroxybutyraat, aceton) produceert uit acetyl-CoA in de lever tijdens periodes van lage koolhydraatbeschikbaarheid, wat een alternatieve brandstofbron biedt voor hersenen en andere weefsels."
        }
      },
      {
        question: {
          en: "What is the Randle cycle?",
          es: "¿Qué es el ciclo de Randle?",
          de: "Was ist der Randle-Zyklus?",
          nl: "Wat is de Randle cyclus?"
        },
        options: [
          {
            en: "Metabolic competition between glucose and fatty acid oxidation",
            es: "Competencia metabólica entre oxidación de glucosa y ácidos grasos",
            de: "Metabolische Konkurrenz zwischen Glukose- und Fettsäureoxidation",
            nl: "Metabole competitie tussen glucose en vetzuuroxidatie"
          },
          {
            en: "Cycle of fatty acid synthesis and breakdown",
            es: "Ciclo de síntesis y degradación de ácidos grasos",
            de: "Zyklus von Fettsäuresynthese und -abbau",
            nl: "Cyclus van vetzuursynthese en afbraak"
          },
          {
            en: "Regulation of glycogen synthesis and breakdown",
            es: "Regulación de síntesis y degradación de glucógeno",
            de: "Regulation von Glykogensynthese und -abbau",
            nl: "Regulatie van glycogeensynthese en afbraak"
          },
          {
            en: "Interconversion between amino acids",
            es: "Interconversión entre aminoácidos",
            de: "Interkonversion zwischen Aminosäuren",
            nl: "Interconversie tussen aminozuren"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Randle cycle describes the metabolic competition between glucose and fatty acid oxidation, where high fatty acid oxidation inhibits glucose utilization and vice versa, allowing cells to preferentially use the most available fuel source.",
          es: "El ciclo de Randle describe la competencia metabólica entre oxidación de glucosa y ácidos grasos, donde alta oxidación de ácidos grasos inhibe utilización de glucosa y viceversa, permitiendo a las células usar preferencialmente la fuente de combustible más disponible.",
          de: "Der Randle-Zyklus beschreibt die metabolische Konkurrenz zwischen Glukose- und Fettsäureoxidation, wobei hohe Fettsäureoxidation die Glukoseverwertung hemmt und umgekehrt, was Zellen ermöglicht, bevorzugt die verfügbarste Brennstoffquelle zu nutzen.",
          nl: "De Randle cyclus beschrijft de metabole competitie tussen glucose en vetzuuroxidatie, waarbij hoge vetzuuroxidatie glucosegebruik remt en vice versa, waardoor cellen bij voorkeur de meest beschikbare brandstofbron kunnen gebruiken."
        }
      },
      {
        question: {
          en: "What is the difference between Type I and Type II muscle fibers in terms of metabolism?",
          es: "¿Cuál es la diferencia entre fibras musculares Tipo I y Tipo II en términos de metabolismo?",
          de: "Was ist der Unterschied zwischen Typ I und Typ II Muskelfasern in Bezug auf den Stoffwechsel?",
          nl: "Wat is het verschil tussen Type I en Type II spiervezels wat betreft metabolisme?"
        },
        options: [
          {
            en: "Type I relies on oxidative metabolism; Type II relies more on glycolytic metabolism",
            es: "Tipo I depende del metabolismo oxidativo; Tipo II depende más del metabolismo glucolítico",
            de: "Typ I basiert auf oxidativem Stoffwechsel; Typ II basiert mehr auf glykolytischem Stoffwechsel",
            nl: "Type I vertrouwt op oxidatief metabolisme; Type II vertrouwt meer op glycolytisch metabolisme"
          },
          {
            en: "Type I uses only glucose; Type II uses only fatty acids",
            es: "Tipo I usa solo glucosa; Tipo II usa solo ácidos grasos",
            de: "Typ I verwendet nur Glukose; Typ II verwendet nur Fettsäuren",
            nl: "Type I gebruikt alleen glucose; Type II gebruikt alleen vetzuren"
          },
          {
            en: "Both types have identical metabolic profiles",
            es: "Ambos tipos tienen perfiles metabólicos idénticos",
            de: "Beide Typen haben identische metabolische Profile",
            nl: "Beide typen hebben identieke metabole profielen"
          },
          {
            en: "Type I is anaerobic; Type II is aerobic",
            es: "Tipo I es anaeróbico; Tipo II es aeróbico",
            de: "Typ I ist anaerob; Typ II ist aerob",
            nl: "Type I is anaeroob; Type II is aeroob"
          }
        ],
        correct: 0,
        explanation: {
          en: "Type I (slow-twitch) muscle fibers are rich in mitochondria and rely primarily on oxidative metabolism for sustained, endurance activities. Type II (fast-twitch) fibers depend more on glycolytic metabolism for rapid, powerful contractions.",
          es: "Las fibras musculares Tipo I (contracción lenta) son ricas en mitocondrias y dependen principalmente del metabolismo oxidativo para actividades sostenidas de resistencia. Las fibras Tipo II (contracción rápida) dependen más del metabolismo glucolítico para contracciones rápidas y poderosas.",
          de: "Typ I (langsam zuckende) Muskelfasern sind reich an Mitochondrien und basieren hauptsächlich auf oxidativem Stoffwechsel für nachhaltige Ausdaueraktivitäten. Typ II (schnell zuckende) Fasern hängen mehr vom glykolytischen Stoffwechsel für schnelle, kraftvolle Kontraktionen ab.",
          nl: "Type I (langzaam trekkende) spiervezels zijn rijk aan mitochondriën en vertrouwen voornamelijk op oxidatief metabolisme voor volgehouden uithoudingsactiviteiten. Type II (snel trekkende) vezels zijn meer afhankelijk van glycolytisch metabolisme voor snelle, krachtige contracties."
        }
      },
      {
        question: {
          en: "What is substrate cycling and its metabolic significance?",
          es: "¿Qué es el ciclado de sustratos y su significado metabólico?",
          de: "Was ist Substratzyklusführung und ihre metabolische Bedeutung?",
          nl: "Wat is substraatcycling en zijn metabole betekenis?"
        },
        options: [
          {
            en: "Simultaneous operation of opposing metabolic pathways that generates heat and provides fine metabolic control",
            es: "Operación simultánea de vías metabólicas opuestas que genera calor y proporciona control metabólico fino",
            de: "Gleichzeitige Operation entgegengesetzter Stoffwechselwege, die Wärme erzeugt und feine metabolische Kontrolle bietet",
            nl: "Gelijktijdige werking van tegengestelde metabole paden die warmte genereert en fijne metabole controle biedt"
          },
          {
            en: "Sequential operation of metabolic pathways",
            es: "Operación secuencial de vías metabólicas",
            de: "Sequenzielle Operation von Stoffwechselwegen",
            nl: "Sequentiële werking van metabole paden"
          },
          {
            en: "Storage of metabolic substrates in cells",
            es: "Almacenamiento de sustratos metabólicos en células",
            de: "Speicherung metabolischer Substrate in Zellen",
            nl: "Opslag van metabole substraten in cellen"
          },
          {
            en: "Transport of substrates between tissues",
            es: "Transporte de sustratos entre tejidos",
            de: "Transport von Substraten zwischen Geweben",
            nl: "Transport van substraten tussen weefsels"
          }
        ],
        correct: 0,
        explanation: {
          en: "Substrate cycling involves the simultaneous operation of opposing metabolic reactions (e.g., phosphofructokinase and fructose-1,6-bisphosphatase), which wastes ATP to generate heat and provides sensitive metabolic regulation.",
          es: "El ciclado de sustratos involucra la operación simultánea de reacciones metabólicas opuestas (ej., fosfofructoquinasa y fructosa-1,6-bifosfatasa), que desperdicia ATP para generar calor y proporciona regulación metabólica sensible.",
          de: "Substratzyklusführung beinhaltet die gleichzeitige Operation entgegengesetzter metabolischer Reaktionen (z.B. Phosphofructokinase und Fructose-1,6-bisphosphatase), die ATP verschwendet, um Wärme zu erzeugen und sensible metabolische Regulation zu bieten.",
          nl: "Substraatcycling behelst de gelijktijdige werking van tegengestelde metabole reacties (bijv. fosfofructokinase en fructose-1,6-bisfosfatase), die ATP verspilt om warmte te genereren en gevoelige metabole regulatie te bieden."
        }
      },
      {
        question: {
          en: "What is the metabolic role of the liver during fed and fasting states?",
          es: "¿Cuál es el papel metabólico del hígado durante estados alimentado y de ayuno?",
          de: "Was ist die metabolische Rolle der Leber während gefütterter und fastender Zustände?",
          nl: "Wat is de metabole rol van de lever tijdens gevoede en vastentoestand?"
        },
        options: [
          {
            en: "Fed state: glucose storage as glycogen, fatty acid synthesis; Fasting state: glucose production, ketone body formation",
            es: "Estado alimentado: almacenamiento de glucosa como glucógeno, síntesis de ácidos grasos; Estado de ayuno: producción de glucosa, formación de cuerpos cetónicos",
            de: "Gefütterter Zustand: Glukosespeicherung als Glykogen, Fettsäuresynthese; Fastender Zustand: Glukoseproduktion, Ketonkörperbildung",
            nl: "Gevoede staat: glucose opslag als glycogeen, vetzuursynthese; Vastentoestand: glucose productie, ketonlichaamvorming"
          },
          {
            en: "The liver has the same metabolic function in both states",
            es: "El hígado tiene la misma función metabólica en ambos estados",
            de: "Die Leber hat dieselbe metabolische Funktion in beiden Zuständen",
            nl: "De lever heeft dezelfde metabole functie in beide toestanden"
          },
          {
            en: "Fed state: protein synthesis only; Fasting state: protein breakdown only",
            es: "Estado alimentado: solo síntesis proteica; Estado de ayuno: solo degradación proteica",
            de: "Gefütterter Zustand: nur Proteinsynthese; Fastender Zustand: nur Proteinabbau",
            nl: "Gevoede staat: alleen eiwitsynthese; Vastentoestand: alleen eiwitafbraak"
          },
          {
            en: "Fed state: ketone production; Fasting state: glucose storage",
            es: "Estado alimentado: producción de cetonas; Estado de ayuno: almacenamiento de glucosa",
            de: "Gefütterter Zustand: Ketonproduktion; Fastender Zustand: Glukosespeicherung",
            nl: "Gevoede staat: ketonproductie; Vastentoestand: glucose opslag"
          }
        ],
        correct: 0,
        explanation: {
          en: "The liver acts as a metabolic buffer: during fed state, it stores glucose as glycogen and synthesizes fatty acids; during fasting, it produces glucose via glycogenolysis/gluconeogenesis and synthesizes ketone bodies from fatty acid oxidation.",
          es: "El hígado actúa como tampón metabólico: durante estado alimentado, almacena glucosa como glucógeno y sintetiza ácidos grasos; durante ayuno, produce glucosa vía glucogenólisis/gluconeogénesis y sintetiza cuerpos cetónicos de oxidación de ácidos grasos.",
          de: "Die Leber wirkt als metabolischer Puffer: im gefütterten Zustand speichert sie Glukose als Glykogen und synthetisiert Fettsäuren; während des Fastens produziert sie Glukose über Glykogenolyse/Glukoneogenese und synthetisiert Ketonkörper aus Fettsäureoxidation.",
          nl: "De lever werkt als metabole buffer: tijdens gevoede staat slaat het glucose op als glycogeen en synthetiseert vetzuren; tijdens vasten produceert het glucose via glycogenolyse/gluconeogenese en synthetiseert ketonlichamen uit vetzuuroxidatie."
        }
      },
      {
        question: {
          en: "What is the Cori cycle?",
          es: "¿Qué es el ciclo de Cori?",
          de: "Was ist der Cori-Zyklus?",
          nl: "Wat is de Cori cyclus?"
        },
        options: [
          {
            en: "Metabolic pathway where lactate from muscle is converted to glucose in liver",
            es: "Vía metabólica donde lactato del músculo se convierte en glucosa en el hígado",
            de: "Stoffwechselweg, bei dem Laktat aus Muskeln in der Leber zu Glukose umgewandelt wird",
            nl: "Metabole pad waarbij lactaat uit spieren wordt omgezet naar glucose in de lever"
          },
          {
            en: "Cycle of fatty acid synthesis and oxidation",
            es: "Ciclo de síntesis y oxidación de ácidos grasos",
            de: "Zyklus von Fettsäuresynthese und -oxidation",
            nl: "Cyclus van vetzuursynthese en oxidatie"
          },
          {
            en: "Interconversion between glucose and fructose",
            es: "Interconversión entre glucosa y fructosa",
            de: "Interkonversion zwischen Glukose und Fruktose",
            nl: "Interconversie tussen glucose en fructose"
          },
          {
            en: "Transport of amino acids between tissues",
            es: "Transporte de aminoácidos entre tejidos",
            de: "Transport von Aminosäuren zwischen Geweben",
            nl: "Transport van aminozuren tussen weefsels"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Cori cycle is a metabolic pathway where lactate produced by anaerobic glycolysis in muscle during exercise is transported to the liver, converted back to glucose via gluconeogenesis, and returned to muscle.",
          es: "El ciclo de Cori es una vía metabólica donde lactato producido por glucólisis anaeróbica en músculo durante ejercicio es transportado al hígado, convertido de vuelta a glucosa vía gluconeogénesis, y devuelto al músculo.",
          de: "Der Cori-Zyklus ist ein Stoffwechselweg, bei dem Laktat, das durch anaerobe Glykolyse im Muskel während des Trainings produziert wird, zur Leber transportiert, über Glukoneogenese zurück zu Glukose umgewandelt und zum Muskel zurückgeführt wird.",
          nl: "De Cori cyclus is een metabole pad waarbij lactaat geproduceerd door anaerobe glycolyse in spieren tijdens oefening wordt getransporteerd naar de lever, terug omgezet naar glucose via gluconeogenese, en teruggekeerd naar spieren."
        }
      },
      {
        question: {
          en: "What is the metabolic significance of brown adipose tissue?",
          es: "¿Cuál es la significancia metabólica del tejido adiposo marrón?",
          de: "Was ist die metabolische Bedeutung des braunen Fettgewebes?",
          nl: "Wat is de metabole betekenis van bruin vetweefsel?"
        },
        options: [
          {
            en: "Specialized tissue for non-shivering thermogenesis through uncoupled oxidative phosphorylation",
            es: "Tejido especializado para termogénesis sin escalofríos mediante fosforilación oxidativa desacoplada",
            de: "Spezialisiertes Gewebe für zitterfreie Thermogenese durch entkoppelte oxidative Phosphorylierung",
            nl: "Gespecialiseerd weefsel voor niet-rillende thermogenese via ontkoppelde oxidatieve fosforylatie"
          },
          {
            en: "Primary site for glucose storage",
            es: "Sitio primario para almacenamiento de glucosa",
            de: "Primärer Ort für Glukosespeicherung",
            nl: "Primaire plaats voor glucose opslag"
          },
          {
            en: "Main source of fatty acid synthesis",
            es: "Fuente principal de síntesis de ácidos grasos",
            de: "Hauptquelle für Fettsäuresynthese",
            nl: "Hoofdbron van vetzuursynthese"
          },
          {
            en: "Tissue specialized for protein production",
            es: "Tejido especializado para producción proteica",
            de: "Gewebe, das auf Proteinproduktion spezialisiert ist",
            nl: "Weefsel gespecialiseerd voor eiwitproductie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Brown adipose tissue contains uncoupling protein 1 (UCP1) in mitochondria that allows energy from fatty acid oxidation to be released as heat instead of being captured as ATP, enabling non-shivering thermogenesis.",
          es: "El tejido adiposo marrón contiene proteína desacoplante 1 (UCP1) en mitocondrias que permite que energía de oxidación de ácidos grasos se libere como calor en lugar de ser capturada como ATP, habilitando termogénesis sin escalofríos.",
          de: "Braunes Fettgewebe enthält Entkopplungsprotein 1 (UCP1) in Mitochondrien, das ermöglicht, dass Energie aus Fettsäureoxidation als Wärme freigesetzt wird, anstatt als ATP eingefangen zu werden, was zitterfreie Thermogenese ermöglicht.",
          nl: "Bruin vetweefsel bevat ontkoppelend eiwit 1 (UCP1) in mitochondriën dat toestaat dat energie uit vetzuuroxidatie wordt vrijgegeven als warmte in plaats van gevangen als ATP, wat niet-rillende thermogenese mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is insulin resistance and its metabolic consequences?",
          es: "¿Qué es la resistencia a la insulina y sus consecuencias metabólicas?",
          de: "Was ist Insulinresistenz und ihre metabolischen Konsequenzen?",
          nl: "Wat is insulineresistentie en zijn metabole gevolgen?"
        },
        options: [
          {
            en: "Reduced cellular response to insulin leading to impaired glucose uptake and dysregulated metabolism",
            es: "Respuesta celular reducida a insulina llevando a captación de glucosa deteriorada y metabolismo desregulado",
            de: "Reduzierte zelluläre Antwort auf Insulin, die zu beeinträchtigter Glukoseaufnahme und dysreguliertem Stoffwechsel führt",
            nl: "Verminderde cellulaire respons op insuline leidend tot verstoorde glucose opname en ontregeld metabolisme"
          },
          {
            en: "Complete inability to produce insulin",
            es: "Incapacidad completa para producir insulina",
            de: "Vollständige Unfähigkeit, Insulin zu produzieren",
            nl: "Volledige onmogelijkheid om insuline te produceren"
          },
          {
            en: "Excessive insulin production without metabolic effects",
            es: "Producción excesiva de insulina sin efectos metabólicos",
            de: "Excessive Insulinproduktion ohne metabolische Effekte",
            nl: "Excessieve insulineproductie zonder metabole effecten"
          },
          {
            en: "Normal insulin function in all tissues",
            es: "Función normal de insulina en todos los tejidos",
            de: "Normale Insulinfunktion in allen Geweben",
            nl: "Normale insulinefunctie in alle weefsels"
          }
        ],
        correct: 0,
        explanation: {
          en: "Insulin resistance occurs when cells become less responsive to insulin, leading to impaired glucose uptake, compensatory hyperinsulinemia, dysregulated lipid metabolism, and increased risk of type 2 diabetes and metabolic syndrome.",
          es: "La resistencia a la insulina ocurre cuando las células se vuelven menos responsivas a la insulina, llevando a captación de glucosa deteriorada, hiperinsulinemia compensatoria, metabolismo lipídico desregulado, y mayor riesgo de diabetes tipo 2 y síndrome metabólico.",
          de: "Insulinresistenz tritt auf, wenn Zellen weniger auf Insulin ansprechen, was zu beeinträchtigter Glukoseaufnahme, kompensatorischer Hyperinsulinämie, dysreguliertem Lipidstoffwechsel und erhöhtem Risiko für Typ-2-Diabetes und metabolisches Syndrom führt.",
          nl: "Insulineresistentie treedt op wanneer cellen minder responsief worden voor insuline, leidend tot verstoorde glucose opname, compensatoire hyperinsulinemie, ontregeld lipide metabolisme, en verhoogd risico op type 2 diabetes en metabool syndroom."
        }
      },
      {
        question: {
          en: "What are the key differences between aerobic and anaerobic metabolism?",
          es: "¿Cuáles son las diferencias clave entre metabolismo aeróbico y anaeróbico?",
          de: "Was sind die wichtigsten Unterschiede zwischen aerobem und anaerobem Stoffwechsel?",
          nl: "Wat zijn de belangrijkste verschillen tussen aeroob en anaeroob metabolisme?"
        },
        options: [
          {
            en: "Aerobic uses oxygen and produces more ATP; anaerobic doesn't use oxygen and produces less ATP",
            es: "Aeróbico usa oxígeno y produce más ATP; anaeróbico no usa oxígeno y produce menos ATP",
            de: "Aerob verwendet Sauerstoff und produziert mehr ATP; anaerob verwendet keinen Sauerstoff und produziert weniger ATP",
            nl: "Aeroob gebruikt zuurstof en produceert meer ATP; anaeroob gebruikt geen zuurstof en produceert minder ATP"
          },
          {
            en: "Aerobic produces lactate; anaerobic produces CO2 and water",
            es: "Aeróbico produce lactato; anaeróbico produce CO2 y agua",
            de: "Aerob produziert Laktat; anaerob produziert CO2 und Wasser",
            nl: "Aeroob produceert lactaat; anaeroob produceert CO2 en water"
          },
          {
            en: "Both processes are identical in all aspects",
            es: "Ambos procesos son idénticos en todos los aspectos",
            de: "Beide Prozesse sind in allen Aspekten identisch",
            nl: "Beide processen zijn identiek in alle aspecten"
          },
          {
            en: "Aerobic occurs only in muscles; anaerobic occurs only in liver",
            es: "Aeróbico ocurre solo en músculos; anaeróbico ocurre solo en hígado",
            de: "Aerob tritt nur in Muskeln auf; anaerob tritt nur in der Leber auf",
            nl: "Aeroob vindt alleen plaats in spieren; anaeroob vindt alleen plaats in de lever"
          }
        ],
        correct: 0,
        explanation: {
          en: "Aerobic metabolism uses oxygen as the final electron acceptor in the electron transport chain, producing approximately 30-32 ATP per glucose. Anaerobic metabolism doesn't use oxygen, relies on fermentation, and produces only 2 ATP per glucose.",
          es: "El metabolismo aeróbico usa oxígeno como aceptor final de electrones en la cadena de transporte de electrones, produciendo aproximadamente 30-32 ATP por glucosa. El metabolismo anaeróbico no usa oxígeno, depende de fermentación, y produce solo 2 ATP por glucosa.",
          de: "Aerobes Metabolismus verwendet Sauerstoff als finalen Elektronenakzeptor in der Elektronentransportkette und produziert etwa 30-32 ATP pro Glukose. Anaerober Stoffwechsel verwendet keinen Sauerstoff, basiert auf Fermentation und produziert nur 2 ATP pro Glukose.",
          nl: "Aeroob metabolisme gebruikt zuurstof als finale elektronenacceptor in de elektronentransportketen, wat ongeveer 30-32 ATP per glucose produceert. Anaeroob metabolisme gebruikt geen zuurstof, vertrouwt op fermentatie, en produceert slechts 2 ATP per glucose."
        }
      },
      {
        question: {
          en: "What is the glucose-alanine cycle?",
          es: "¿Qué es el ciclo glucosa-alanina?",
          de: "Was ist der Glukose-Alanin-Zyklus?",
          nl: "Wat is de glucose-alanine cyclus?"
        },
        options: [
          {
            en: "Transport of amino nitrogen from muscle to liver via alanine for glucose production",
            es: "Transporte de nitrógeno amino del músculo al hígado vía alanina para producción de glucosa",
            de: "Transport von Aminostickstoff vom Muskel zur Leber über Alanin für Glukoseproduktion",
            nl: "Transport van aminostikstof van spier naar lever via alanine voor glucose productie"
          },
          {
            en: "Conversion of glucose directly to alanine in all tissues",
            es: "Conversión de glucosa directamente a alanina en todos los tejidos",
            de: "Umwandlung von Glukose direkt zu Alanin in allen Geweben",
            nl: "Omzetting van glucose direct naar alanine in alle weefsels"
          },
          {
            en: "Storage of alanine as energy reserve",
            es: "Almacenamiento de alanina como reserva energética",
            de: "Speicherung von Alanin als Energiereserve",
            nl: "Opslag van alanine als energiereserve"
          },
          {
            en: "Synthesis of glucose from alanine only in muscle",
            es: "Síntesis de glucosa a partir de alanina solo en músculo",
            de: "Synthese von Glukose aus Alanin nur im Muskel",
            nl: "Synthese van glucose uit alanine alleen in spieren"
          }
        ],
        correct: 0,
        explanation: {
          en: "The glucose-alanine cycle allows muscle to dispose of amino acid nitrogen during protein breakdown by converting it to alanine, which is transported to the liver where it's converted to glucose and urea, with glucose returning to muscle.",
          es: "El ciclo glucosa-alanina permite al músculo deshacerse del nitrógeno de aminoácidos durante degradación proteica convirtiéndolo en alanina, que es transportada al hígado donde se convierte en glucosa y urea, con glucosa regresando al músculo.",
          de: "Der Glukose-Alanin-Zyklus ermöglicht es Muskeln, Aminosäure-Stickstoff während des Proteinabbaus loszuwerden, indem er ihn zu Alanin umwandelt, das zur Leber transportiert wird, wo es zu Glukose und Harnstoff umgewandelt wird, wobei Glukose zum Muskel zurückkehrt.",
          nl: "De glucose-alanine cyclus stelt spieren in staat om aminozuurstikstof kwijt te raken tijdens eiwitafbraak door het om te zetten naar alanine, dat wordt getransporteerd naar de lever waar het wordt omgezet naar glucose en ureum, waarbij glucose terugkeert naar spieren."
        }
      },
      {
        question: {
          en: "What is the role of acetyl-CoA in metabolism?",
          es: "¿Cuál es el papel de acetil-CoA en el metabolismo?",
          de: "Was ist die Rolle von Acetyl-CoA im Stoffwechsel?",
          nl: "Wat is de rol van acetyl-CoA in het metabolisme?"
        },
        options: [
          {
            en: "Central metabolite connecting carbohydrate, fat, and protein metabolism",
            es: "Metabolito central conectando metabolismo de carbohidratos, grasas y proteínas",
            de: "Zentraler Metabolit, der Kohlenhydrat-, Fett- und Proteinstoffwechsel verbindet",
            nl: "Centrale metaboliet die koolhydraat-, vet- en eiwitmetabolisme verbindt"
          },
          {
            en: "Only involved in fatty acid synthesis",
            es: "Solo involucrado en síntesis de ácidos grasos",
            de: "Nur an Fettsäuresynthese beteiligt",
            nl: "Alleen betrokken bij vetzuursynthese"
          },
          {
            en: "Exclusively used for energy storage",
            es: "Usado exclusivamente para almacenamiento energético",
            de: "Ausschließlich für Energiespeicherung verwendet",
            nl: "Uitsluitend gebruikt voor energieopslag"
          },
          {
            en: "Only functions in protein metabolism",
            es: "Solo funciona en metabolismo proteico",
            de: "Funktioniert nur im Proteinstoffwechsel",
            nl: "Functioneert alleen in eiwitmetabolisme"
          }
        ],
        correct: 0,
        explanation: {
          en: "Acetyl-CoA is a central metabolic intermediate that can be derived from carbohydrates (via pyruvate), fats (via β-oxidation), and amino acids, and can be used for energy production (citric acid cycle), fatty acid synthesis, or ketone body formation.",
          es: "Acetil-CoA es un intermediario metabólico central que puede derivarse de carbohidratos (vía piruvato), grasas (vía β-oxidación), y aminoácidos, y puede usarse para producción energética (ciclo del ácido cítrico), síntesis de ácidos grasos, o formación de cuerpos cetónicos.",
          de: "Acetyl-CoA ist ein zentrales metabolisches Zwischenprodukt, das aus Kohlenhydraten (über Pyruvat), Fetten (über β-Oxidation) und Aminosäuren gewonnen werden kann und für Energieproduktion (Citratzyklus), Fettsäuresynthese oder Ketonkörperbildung verwendet werden kann.",
          nl: "Acetyl-CoA is een centrale metabole tussenproduct dat kan worden afgeleid van koolhydraten (via pyruvaat), vetten (via β-oxidatie), en aminozuren, en kan worden gebruikt voor energieproductie (citroenzuurcyclus), vetzuursynthese, of ketonlichaamvorming."
        }
      },
      {
        question: {
          en: "What is metabolic syndrome?",
          es: "¿Qué es el síndrome metabólico?",
          de: "Was ist das metabolische Syndrom?",
          nl: "Wat is het metabool syndroom?"
        },
        options: [
          {
            en: "Cluster of metabolic abnormalities including insulin resistance, obesity, dyslipidemia, and hypertension",
            es: "Conjunto de anormalidades metabólicas incluyendo resistencia a insulina, obesidad, dislipidemia e hipertensión",
            de: "Cluster metabolischer Abnormalitäten einschließlich Insulinresistenz, Adipositas, Dyslipidämie und Hypertonie",
            nl: "Cluster van metabole afwijkingen inclusief insulineresistentie, obesitas, dyslipidemie en hypertensie"
          },
          {
            en: "Single genetic disorder affecting only glucose metabolism",
            es: "Trastorno genético único que afecta solo el metabolismo de glucosa",
            de: "Einzelne genetische Störung, die nur den Glukosestoffwechsel betrifft",
            nl: "Enkele genetische aandoening die alleen glucose metabolisme beïnvloedt"
          },
          {
            en: "Metabolic condition affecting only lipid metabolism",
            es: "Condición metabólica que afecta solo el metabolismo lipídico",
            de: "Metabolische Erkrankung, die nur den Lipidstoffwechsel betrifft",
            nl: "Metabole aandoening die alleen lipide metabolisme beïnvloedt"
          },
          {
            en: "Rare disorder of amino acid metabolism",
            es: "Trastorno raro del metabolismo de aminoácidos",
            de: "Seltene Störung des Aminosäurestoffwechsels",
            nl: "Zeldzame aandoening van aminozuurmetabolisme"
          }
        ],
        correct: 0,
        explanation: {
          en: "Metabolic syndrome is a cluster of interconnected metabolic abnormalities that increase the risk of cardiovascular disease and type 2 diabetes, typically including central obesity, insulin resistance, elevated blood pressure, and dyslipidemia.",
          es: "El síndrome metabólico es un conjunto de anormalidades metabólicas interconectadas que aumentan el riesgo de enfermedad cardiovascular y diabetes tipo 2, típicamente incluyendo obesidad central, resistencia a insulina, presión sanguínea elevada y dislipidemia.",
          de: "Das metabolische Syndrom ist ein Cluster miteinander verbundener metabolischer Abnormalitäten, die das Risiko für Herz-Kreislauf-Erkrankungen und Typ-2-Diabetes erhöhen und typischerweise zentrale Adipositas, Insulinresistenz, erhöhten Blutdruck und Dyslipidämie umfassen.",
          nl: "Metabool syndroom is een cluster van onderling verbonden metabole afwijkingen die het risico op cardiovasculaire ziekte en type 2 diabetes verhogen, typisch inclusief centrale obesitas, insulineresistentie, verhoogde bloeddruk en dyslipidemie."
        }
      },
      {
        question: {
          en: "What are the main regulatory mechanisms of metabolism?",
          es: "¿Cuáles son los principales mecanismos regulatorios del metabolismo?",
          de: "Was sind die hauptsächlichen regulatorischen Mechanismen des Stoffwechsels?",
          nl: "Wat zijn de belangrijkste regulatoire mechanismen van metabolisme?"
        },
        options: [
          {
            en: "Allosteric regulation, covalent modification, enzyme induction/repression, and compartmentalization",
            es: "Regulación alostérica, modificación covalente, inducción/represión enzimática y compartimentalización",
            de: "Allosterische Regulation, kovalente Modifikation, Enzyminduktion/-repression und Kompartimentierung",
            nl: "Allosterische regulatie, covalente modificatie, enzyme inductie/repressie, en compartimentalisering"
          },
          {
            en: "Only allosteric regulation",
            es: "Solo regulación alostérica",
            de: "Nur allosterische Regulation",
            nl: "Alleen allosterische regulatie"
          },
          {
            en: "Only enzyme concentration changes",
            es: "Solo cambios en concentración enzimática",
            de: "Nur Änderungen der Enzymkonzentration",
            nl: "Alleen enzymconcentratieveranderingen"
          },
          {
            en: "Only substrate availability",
            es: "Solo disponibilidad de sustrato",
            de: "Nur Substratverfügbarkeit",
            nl: "Alleen substraatbeschikbaarheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "Metabolism is regulated through multiple integrated mechanisms: allosteric regulation (rapid response to metabolites), covalent modification (phosphorylation/dephosphorylation), enzyme induction/repression (long-term changes in enzyme amounts), and compartmentalization (spatial organization of pathways).",
          es: "El metabolismo está regulado mediante múltiples mecanismos integrados: regulación alostérica (respuesta rápida a metabolitos), modificación covalente (fosforilación/desfosforilación), inducción/represión enzimática (cambios a largo plazo en cantidades enzimáticas), y compartimentalización (organización espacial de vías).",
          de: "Der Stoffwechsel wird durch mehrere integrierte Mechanismen reguliert: allosterische Regulation (schnelle Antwort auf Metaboliten), kovalente Modifikation (Phosphorylierung/Dephosphorylierung), Enzyminduktion/-repression (langfristige Änderungen in Enzymmengen) und Kompartimentierung (räumliche Organisation von Wegen).",
          nl: "Metabolisme wordt gereguleerd door meerdere geïntegreerde mechanismen: allosterische regulatie (snelle respons op metabolieten), covalente modificatie (fosforylatie/defosforylatie), enzyme inductie/repressie (lange-termijn veranderingen in enzyme hoeveelheden), en compartimentalisering (ruimtelijke organisatie van paden)."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/molecular-biology', level5);
  }
})();