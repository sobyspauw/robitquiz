// Molecular Biology - Level 2: Protein Structure and Function
(function() {
  const level2 = {
    name: {
      en: "Protein Structure and Function",
      es: "Estructura y Función de Proteínas",
      de: "Proteinstruktur und -funktion",
      nl: "Eiwitstructuur en -functie"
    },
    questions: [
      {
        question: {
          en: "What are the four levels of protein structure?",
          es: "¿Cuáles son los cuatro niveles de estructura proteica?",
          de: "Was sind die vier Ebenen der Proteinstruktur?",
          nl: "Wat zijn de vier niveaus van eiwitstructuur?"
        },
        options: [
          {
            en: "Primary, secondary, tertiary, and quaternary",
            es: "Primaria, secundaria, terciaria y cuaternaria",
            de: "Primär, sekundär, tertiär und quartär",
            nl: "Primair, secundair, tertiair en quaternair"
          },
          {
            en: "Linear, branched, circular, and complex",
            es: "Lineal, ramificada, circular y compleja",
            de: "Linear, verzweigt, zirkulär und komplex",
            nl: "Lineair, vertakt, circulair en complex"
          },
          {
            en: "Alpha, beta, gamma, and delta",
            es: "Alfa, beta, gamma y delta",
            de: "Alpha, Beta, Gamma und Delta",
            nl: "Alpha, beta, gamma en delta"
          },
          {
            en: "Simple, compound, conjugated, and derived",
            es: "Simple, compuesta, conjugada y derivada",
            de: "Einfach, zusammengesetzt, konjugiert und abgeleitet",
            nl: "Eenvoudig, samengesteld, geconjugeerd en afgeleid"
          }
        ],
        correct: 0,
        explanation: {
          en: "The four levels of protein structure are: Primary (amino acid sequence), Secondary (local folding patterns like α-helices and β-sheets), Tertiary (overall 3D shape), and Quaternary (arrangement of multiple polypeptide chains).",
          es: "Los cuatro niveles de estructura proteica son: Primaria (secuencia de aminoácidos), Secundaria (patrones de plegamiento local como α-hélices y β-láminas), Terciaria (forma 3D general), y Cuaternaria (disposición de múltiples cadenas polipeptídicas).",
          de: "Die vier Ebenen der Proteinstruktur sind: Primär (Aminosäuresequenz), Sekundär (lokale Faltungsmuster wie α-Helices und β-Faltblätter), Tertiär (Gesamt-3D-Form) und Quartär (Anordnung mehrerer Polypeptidketten).",
          nl: "De vier niveaus van eiwitstructuur zijn: Primair (aminozuursequentie), Secundair (lokale vouwingspatronen zoals α-helices en β-platen), Tertiair (algehele 3D-vorm) en Quaternair (schikking van meerdere polypeptideketens)."
        }
      },
      {
        question: {
          en: "What is the peptide bond?",
          es: "¿Qué es el enlace peptídico?",
          de: "Was ist die Peptidbindung?",
          nl: "Wat is de peptidebinding?"
        },
        options: [
          {
            en: "A covalent bond between the carboxyl group of one amino acid and amino group of another",
            es: "Un enlace covalente entre el grupo carboxilo de un aminoácido y el grupo amino de otro",
            de: "Eine kovalente Bindung zwischen der Carboxylgruppe einer Aminosäure und der Aminogruppe einer anderen",
            nl: "Een covalente binding tussen de carboxylgroep van het ene aminozuur en de aminogroep van het andere"
          },
          {
            en: "A hydrogen bond between amino acid side chains",
            es: "Un enlace de hidrógeno entre cadenas laterales de aminoácidos",
            de: "Eine Wasserstoffbrücke zwischen Aminosäure-Seitenketten",
            nl: "Een waterstofbinding tussen aminozuurzijketens"
          },
          {
            en: "An ionic bond between charged residues",
            es: "Un enlace iónico entre residuos cargados",
            de: "Eine ionische Bindung zwischen geladenen Resten",
            nl: "Een ionische binding tussen geladen residuen"
          },
          {
            en: "A van der Waals interaction between atoms",
            es: "Una interacción de van der Waals entre átomos",
            de: "Eine van-der-Waals-Wechselwirkung zwischen Atomen",
            nl: "Een van der Waals-interactie tussen atomen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The peptide bond is a covalent amide bond formed between the carboxyl group (-COOH) of one amino acid and the amino group (-NH₂) of another, with the elimination of water. This bond has partial double-bond character due to resonance.",
          es: "El enlace peptídico es un enlace amida covalente formado entre el grupo carboxilo (-COOH) de un aminoácido y el grupo amino (-NH₂) de otro, con la eliminación de agua. Este enlace tiene carácter parcial de doble enlace debido a la resonancia.",
          de: "Die Peptidbindung ist eine kovalente Amidbindung, die zwischen der Carboxylgruppe (-COOH) einer Aminosäure und der Aminogruppe (-NH₂) einer anderen gebildet wird, unter Wasserabspaltung. Diese Bindung hat aufgrund von Resonanz partiellen Doppelbindungscharakter.",
          nl: "De peptidebinding is een covalente amidebinding gevormd tussen de carboxylgroep (-COOH) van het ene aminozuur en de aminogroep (-NH₂) van het andere, met eliminatie van water. Deze binding heeft gedeeltelijk dubbelbbindingskarakter door resonantie."
        }
      },
      {
        question: {
          en: "What is protein denaturation?",
          es: "¿Qué es la desnaturalización de proteínas?",
          de: "Was ist Proteindenaturierung?",
          nl: "Wat is eiwitdenaturatie?"
        },
        options: [
          {
            en: "Loss of native protein structure while maintaining primary structure",
            es: "Pérdida de la estructura nativa de la proteína manteniendo la estructura primaria",
            de: "Verlust der nativen Proteinstruktur unter Beibehaltung der Primärstruktur",
            nl: "Verlies van natuurlijke eiwitstructuur terwijl primaire structuur behouden blijft"
          },
          {
            en: "Complete degradation of the protein into amino acids",
            es: "Degradación completa de la proteína en aminoácidos",
            de: "Vollständiger Abbau des Proteins in Aminosäuren",
            nl: "Complete afbraak van het eiwit in aminozuren"
          },
          {
            en: "Formation of additional peptide bonds",
            es: "Formación de enlaces peptídicos adicionales",
            de: "Bildung zusätzlicher Peptidbindungen",
            nl: "Vorming van extra peptidebindingen"
          },
          {
            en: "Conversion of proteins into carbohydrates",
            es: "Conversión de proteínas en carbohidratos",
            de: "Umwandlung von Proteinen in Kohlenhydrate",
            nl: "Omzetting van eiwitten in koolhydraten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Protein denaturation is the disruption of secondary, tertiary, and quaternary structures while the primary structure (amino acid sequence) remains intact. This can be caused by heat, pH changes, chemicals, or physical stress, often leading to loss of biological activity.",
          es: "La desnaturalización de proteínas es la disrupción de estructuras secundarias, terciarias y cuaternarias mientras la estructura primaria (secuencia de aminoácidos) permanece intacta. Esto puede ser causado por calor, cambios de pH, químicos o estrés físico, a menudo llevando a pérdida de actividad biológica.",
          de: "Proteindenaturierung ist die Störung der sekundären, tertiären und quartären Strukturen, während die Primärstruktur (Aminosäuresequenz) intakt bleibt. Dies kann durch Hitze, pH-Änderungen, Chemikalien oder physischen Stress verursacht werden und führt oft zum Verlust der biologischen Aktivität.",
          nl: "Eiwitdenaturatie is de verstoring van secundaire, tertiaire en quaternaire structuren terwijl de primaire structuur (aminozuursequentie) intact blijft. Dit kan worden veroorzaakt door hitte, pH-veranderingen, chemicaliën of fysieke stress, vaak leidend tot verlies van biologische activiteit."
        }
      },
      {
        question: {
          en: "What are chaperone proteins?",
          es: "¿Qué son las proteínas chaperona?",
          de: "Was sind Chaperonproteine?",
          nl: "Wat zijn chaperonne-eiwitten?"
        },
        options: [
          {
            en: "Proteins that assist in proper folding of other proteins without being incorporated",
            es: "Proteínas que asisten en el plegamiento adecuado de otras proteínas sin ser incorporadas",
            de: "Proteine, die bei der ordnungsgemäßen Faltung anderer Proteine helfen, ohne eingebaut zu werden",
            nl: "Eiwitten die helpen bij juiste vouwing van andere eiwitten zonder geïncorporeerd te worden"
          },
          {
            en: "Enzymes that break down misfolded proteins",
            es: "Enzimas que descomponen proteínas mal plegadas",
            de: "Enzyme, die falsch gefaltete Proteine abbauen",
            nl: "Enzymen die verkeerd gevouwen eiwitten afbreken"
          },
          {
            en: "Structural proteins that form the cell skeleton",
            es: "Proteínas estructurales que forman el esqueleto celular",
            de: "Strukturproteine, die das Zellskelett bilden",
            nl: "Structurele eiwitten die het celskelet vormen"
          },
          {
            en: "Transport proteins that carry molecules across membranes",
            es: "Proteínas de transporte que llevan moléculas a través de membranas",
            de: "Transportproteine, die Moleküle über Membranen transportieren",
            nl: "Transporteiwitten die moleculen over membranen vervoeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Chaperone proteins help other proteins achieve their correct three-dimensional structure by providing a favorable environment for folding, preventing aggregation, and sometimes facilitating refolding of denatured proteins. They don't provide structural information but create conditions for proper folding.",
          es: "Las proteínas chaperona ayudan a otras proteínas a lograr su estructura tridimensional correcta proporcionando un ambiente favorable para el plegamiento, previniendo la agregación, y a veces facilitando el replegamiento de proteínas desnaturalizadas. No proporcionan información estructural sino que crean condiciones para el plegamiento adecuado.",
          de: "Chaperonproteine helfen anderen Proteinen, ihre korrekte dreidimensionale Struktur zu erreichen, indem sie eine günstige Umgebung für die Faltung schaffen, Aggregation verhindern und manchmal die Rückfaltung denaturierter Proteine erleichtern. Sie liefern keine Strukturinformationen, sondern schaffen Bedingungen für ordnungsgemäße Faltung.",
          nl: "Chaperonne-eiwitten helpen andere eiwitten hun juiste driedimensionale structuur te bereiken door een gunstige omgeving voor vouwing te bieden, aggregatie te voorkomen en soms hervouwing van gedenatureerde eiwitten te vergemakkelijken. Ze bieden geen structurele informatie maar creëren voorwaarden voor juiste vouwing."
        }
      },
      {
        question: {
          en: "What is the Ramachandran plot?",
          es: "¿Qué es el gráfico de Ramachandran?",
          de: "Was ist das Ramachandran-Diagramm?",
          nl: "Wat is de Ramachandran-plot?"
        },
        options: [
          {
            en: "A plot of phi and psi dihedral angles to assess protein backbone conformation",
            es: "Un gráfico de ángulos diedros phi y psi para evaluar la conformación del esqueleto proteico",
            de: "Ein Diagramm der Phi- und Psi-Diederwinkel zur Bewertung der Protein-Rückgrat-Konformation",
            nl: "Een plot van phi en psi dihedrale hoeken om eiwitbackbone conformatie te beoordelen"
          },
          {
            en: "A graph showing protein expression levels over time",
            es: "Un gráfico que muestra los niveles de expresión de proteínas a lo largo del tiempo",
            de: "Ein Diagramm, das Proteinexpressionsebenen über die Zeit zeigt",
            nl: "Een grafiek die eiwitexpressieniveaus over tijd toont"
          },
          {
            en: "A phylogenetic tree of protein evolution",
            es: "Un árbol filogenético de evolución proteica",
            de: "Ein phylogenetischer Baum der Proteinevolution",
            nl: "Een fylogenetische boom van eiwitevolutie"
          },
          {
            en: "A diagram of protein-protein interaction networks",
            es: "Un diagrama de redes de interacción proteína-proteína",
            de: "Ein Diagramm von Protein-Protein-Interaktionsnetzwerken",
            nl: "Een diagram van eiwit-eiwit interactienetwerken"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Ramachandran plot displays the phi (φ) and psi (ψ) dihedral angles of amino acid residues in a protein structure. It helps identify allowed conformations and detect structural errors, as certain angle combinations are sterically forbidden while others correspond to common secondary structures.",
          es: "El gráfico de Ramachandran muestra los ángulos diedros phi (φ) y psi (ψ) de los residuos de aminoácidos en una estructura proteica. Ayuda a identificar conformaciones permitidas y detectar errores estructurales, ya que ciertas combinaciones de ángulos están estéricamente prohibidas mientras otras corresponden a estructuras secundarias comunes.",
          de: "Das Ramachandran-Diagramm zeigt die Phi-(φ)- und Psi-(ψ)-Diederwinkel der Aminosäurereste in einer Proteinstruktur. Es hilft, erlaubte Konformationen zu identifizieren und Strukturfehler zu erkennen, da bestimmte Winkelkombinationen sterisch verboten sind, während andere gemeinsamen Sekundärstrukturen entsprechen.",
          nl: "De Ramachandran-plot toont de phi (φ) en psi (ψ) dihedrale hoeken van aminozuurresten in een eiwitstructuur. Het helpt toegestane conformaties te identificeren en structurele fouten te detecteren, omdat bepaalde hoekcombinaties sterisch verboden zijn terwijl andere overeenkomen met gewone secundaire structuren."
        }
      },
      {
        question: {
          en: "What is the hydrophobic effect in protein folding?",
          es: "¿Qué es el efecto hidrofóbico en el plegamiento de proteínas?",
          de: "Was ist der hydrophobe Effekt bei der Proteinfaltung?",
          nl: "Wat is het hydrofobe effect bij eiwitvouwing?"
        },
        options: [
          {
            en: "Hydrophobic residues cluster together to minimize contact with water",
            es: "Los residuos hidrofóbicos se agrupan para minimizar el contacto con el agua",
            de: "Hydrophobe Reste clustern zusammen, um den Kontakt mit Wasser zu minimieren",
            nl: "Hydrofobe residuen clusteren samen om contact met water te minimaliseren"
          },
          {
            en: "Water molecules form hydrogen bonds with hydrophobic side chains",
            es: "Las moléculas de agua forman enlaces de hidrógeno con cadenas laterales hidrofóbicas",
            de: "Wassermoleküle bilden Wasserstoffbrücken mit hydrophoben Seitenketten",
            nl: "Watermoleculen vormen waterstofbindingen met hydrofobe zijketens"
          },
          {
            en: "Hydrophobic residues are always located on the protein surface",
            es: "Los residuos hidrofóbicos siempre están ubicados en la superficie de la proteína",
            de: "Hydrophobe Reste befinden sich immer auf der Proteinoberfläche",
            nl: "Hydrofobe residuen bevinden zich altijd op het eiwitoppervlak"
          },
          {
            en: "Water repels hydrophobic amino acids during translation",
            es: "El agua repele los aminoácidos hidrofóbicos durante la traducción",
            de: "Wasser stößt hydrophobe Aminosäuren während der Translation ab",
            nl: "Water stoot hydrofobe aminozuren af tijdens translatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The hydrophobic effect drives protein folding by causing hydrophobic amino acid side chains to cluster together in the protein core, excluding water molecules. This maximizes entropy of water molecules and minimizes the unfavorable water-hydrophobic interactions, providing a major driving force for protein folding.",
          es: "El efecto hidrofóbico impulsa el plegamiento de proteínas causando que las cadenas laterales de aminoácidos hidrofóbicos se agrupen en el núcleo proteico, excluyendo moléculas de agua. Esto maximiza la entropía de las moléculas de agua y minimiza las interacciones desfavorables agua-hidrofóbico, proporcionando una fuerza motriz principal para el plegamiento proteico.",
          de: "Der hydrophobe Effekt treibt die Proteinfaltung an, indem er hydrophobe Aminosäure-Seitenketten dazu bringt, sich im Proteinkern zusammenzulagern und Wassermoleküle auszuschließen. Dies maximiert die Entropie der Wassermoleküle und minimiert ungünstige Wasser-hydrophobe Wechselwirkungen, was eine wichtige Triebkraft für die Proteinfaltung darstellt.",
          nl: "Het hydrofobe effect drijft eiwitvouwing aan door hydrofobe aminozuurzijketens te laten clusteren in de eiwitkern, waarbij watermoleculen worden uitgesloten. Dit maximaliseert de entropie van watermoleculen en minimaliseert ongunstige water-hydrofobe interacties, wat een belangrijke drijvende kracht voor eiwitvouwing biedt."
        }
      },
      {
        question: {
          en: "What are disulfide bonds in proteins?",
          es: "¿Qué son los enlaces disulfuro en las proteínas?",
          de: "Was sind Disulfidbrücken in Proteinen?",
          nl: "Wat zijn disulfidebindingen in eiwitten?"
        },
        options: [
          {
            en: "Covalent bonds between sulfur atoms of two cysteine residues",
            es: "Enlaces covalentes entre átomos de azufre de dos residuos de cisteína",
            de: "Kovalente Bindungen zwischen Schwefelatomen zweier Cysteinreste",
            nl: "Covalente bindingen tussen zwavelatomen van twee cysteïne-residuen"
          },
          {
            en: "Hydrogen bonds between sulfur and oxygen atoms",
            es: "Enlaces de hidrógeno entre átomos de azufre y oxígeno",
            de: "Wasserstoffbrücken zwischen Schwefel- und Sauerstoffatomen",
            nl: "Waterstofbindingen tussen zwavel- en zuurstofatomen"
          },
          {
            en: "Ionic bonds between charged sulfur groups",
            es: "Enlaces iónicos entre grupos de azufre cargados",
            de: "Ionische Bindungen zwischen geladenen Schwefelgruppen",
            nl: "Ionische bindingen tussen geladen zwavelgroepen"
          },
          {
            en: "Van der Waals interactions between sulfur atoms",
            es: "Interacciones de van der Waals entre átomos de azufre",
            de: "Van-der-Waals-Wechselwirkungen zwischen Schwefelatomen",
            nl: "Van der Waals-interacties tussen zwavelatomen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Disulfide bonds (also called disulfide bridges) are covalent bonds formed between the sulfur atoms of two cysteine residues. These bonds can form within a single polypeptide chain (intramolecular) or between different chains (intermolecular), providing significant structural stability to proteins.",
          es: "Los enlaces disulfuro (también llamados puentes disulfuro) son enlaces covalentes formados entre los átomos de azufre de dos residuos de cisteína. Estos enlaces pueden formarse dentro de una sola cadena polipeptídica (intramolecular) o entre diferentes cadenas (intermolecular), proporcionando estabilidad estructural significativa a las proteínas.",
          de: "Disulfidbrücken sind kovalente Bindungen, die zwischen den Schwefelatomen zweier Cysteinreste gebildet werden. Diese Bindungen können innerhalb einer einzigen Polypeptidkette (intramolekular) oder zwischen verschiedenen Ketten (intermolekular) entstehen und verleihen Proteinen erhebliche strukturelle Stabilität.",
          nl: "Disulfidebindingen zijn covalente bindingen gevormd tussen de zwavelatomen van twee cysteïne-residuen. Deze bindingen kunnen vormen binnen een enkele polypeptideketen (intramoleculair) of tussen verschillende ketens (intermoleculair), wat significante structurele stabiliteit aan eiwitten verschaft."
        }
      },
      {
        question: {
          en: "What is protein domain structure?",
          es: "¿Qué es la estructura de dominio proteico?",
          de: "Was ist die Proteindomänenstruktur?",
          nl: "Wat is eiwitdomeinstructuur?"
        },
        options: [
          {
            en: "Discrete functional and structural units within a protein that can fold independently",
            es: "Unidades funcionales y estructurales discretas dentro de una proteína que pueden plegarse independientemente",
            de: "Diskrete funktionale und strukturelle Einheiten innerhalb eines Proteins, die unabhängig falten können",
            nl: "Discrete functionele en structurele eenheden binnen een eiwit die onafhankelijk kunnen vouwen"
          },
          {
            en: "The primary amino acid sequence of the protein",
            es: "La secuencia primaria de aminoácidos de la proteína",
            de: "Die primäre Aminosäuresequenz des Proteins",
            nl: "De primaire aminozuursequentie van het eiwit"
          },
          {
            en: "The overall charge distribution across the protein surface",
            es: "La distribución general de carga a través de la superficie proteica",
            de: "Die Gesamtladungsverteilung über die Proteinoberfläche",
            nl: "De algehele ladingsverdeling over het eiwitoppervlak"
          },
          {
            en: "The location where the protein binds to DNA",
            es: "La ubicación donde la proteína se une al ADN",
            de: "Der Ort, an dem das Protein an DNA bindet",
            nl: "De locatie waar het eiwit bindt aan DNA"
          }
        ],
        correct: 0,
        explanation: {
          en: "Protein domains are compact, semi-independent structural and functional units within larger proteins. They typically contain 50-200 amino acids, can fold independently, and often retain function when separated from the rest of the protein. Many proteins contain multiple domains with different functions.",
          es: "Los dominios proteicos son unidades estructurales y funcionales compactas y semi-independientes dentro de proteínas más grandes. Típicamente contienen 50-200 aminoácidos, pueden plegarse independientemente, y a menudo retienen función cuando se separan del resto de la proteína. Muchas proteínas contienen múltiples dominios con diferentes funciones.",
          de: "Proteindomänen sind kompakte, halbunabhängige strukturelle und funktionale Einheiten innerhalb größerer Proteine. Sie enthalten typischerweise 50-200 Aminosäuren, können unabhängig falten und behalten oft ihre Funktion, wenn sie vom Rest des Proteins getrennt werden. Viele Proteine enthalten mehrere Domänen mit verschiedenen Funktionen.",
          nl: "Eiwitdomeinen zijn compacte, semi-onafhankelijke structurele en functionele eenheden binnen grotere eiwitten. Ze bevatten typisch 50-200 aminozuren, kunnen onafhankelijk vouwen en behouden vaak functie wanneer gescheiden van de rest van het eiwit. Veel eiwitten bevatten meerdere domeinen met verschillende functies."
        }
      },
      {
        question: {
          en: "What is the difference between α-helices and β-sheets?",
          es: "¿Cuál es la diferencia entre α-hélices y β-láminas?",
          de: "Was ist der Unterschied zwischen α-Helices und β-Faltblättern?",
          nl: "Wat is het verschil tussen α-helices en β-platen?"
        },
        options: [
          {
            en: "α-helices are spiral structures, β-sheets are extended strand arrangements",
            es: "Las α-hélices son estructuras en espiral, las β-láminas son arreglos de hebras extendidas",
            de: "α-Helices sind spiralförmige Strukturen, β-Faltblätter sind ausgedehnte Stranganordnungen",
            nl: "α-helices zijn spiraalstructuren, β-platen zijn uitgestrekte strengschikkingen"
          },
          {
            en: "α-helices contain only hydrophobic residues, β-sheets contain only hydrophilic residues",
            es: "Las α-hélices contienen solo residuos hidrofóbicos, las β-láminas contienen solo residuos hidrofílicos",
            de: "α-Helices enthalten nur hydrophobe Reste, β-Faltblätter enthalten nur hydrophile Reste",
            nl: "α-helices bevatten alleen hydrofobe residuen, β-platen bevatten alleen hydrofiele residuen"
          },
          {
            en: "α-helices are found in globular proteins, β-sheets only in fibrous proteins",
            es: "Las α-hélices se encuentran en proteínas globulares, las β-láminas solo en proteínas fibrosas",
            de: "α-Helices finden sich in globulären Proteinen, β-Faltblätter nur in faserigen Proteinen",
            nl: "α-helices worden gevonden in globulaire eiwitten, β-platen alleen in vezelige eiwitten"
          },
          {
            en: "α-helices are stabilized by ionic bonds, β-sheets by hydrophobic interactions",
            es: "Las α-hélices se estabilizan por enlaces iónicos, las β-láminas por interacciones hidrofóbicas",
            de: "α-Helices werden durch ionische Bindungen stabilisiert, β-Faltblätter durch hydrophobe Wechselwirkungen",
            nl: "α-helices worden gestabiliseerd door ionische bindingen, β-platen door hydrofobe interacties"
          }
        ],
        correct: 0,
        explanation: {
          en: "α-helices are right-handed spiral structures stabilized by hydrogen bonds between the carbonyl oxygen of residue n and the amide hydrogen of residue n+4. β-sheets consist of extended polypeptide strands held together by hydrogen bonds between backbone atoms of adjacent strands, forming either parallel or antiparallel arrangements.",
          es: "Las α-hélices son estructuras en espiral dextrógiras estabilizadas por enlaces de hidrógeno entre el oxígeno carbonilo del residuo n y el hidrógeno amida del residuo n+4. Las β-láminas consisten en hebras polipeptídicas extendidas unidas por enlaces de hidrógeno entre átomos del esqueleto de hebras adyacentes, formando arreglos paralelos o antiparalelos.",
          de: "α-Helices sind rechtsgängige Spiralstrukturen, die durch Wasserstoffbrücken zwischen dem Carbonyl-Sauerstoff des Restes n und dem Amid-Wasserstoff des Restes n+4 stabilisiert werden. β-Faltblätter bestehen aus ausgedehnten Polypeptidsträngen, die durch Wasserstoffbrücken zwischen Rückgratatomen benachbarter Stränge zusammengehalten werden und parallele oder antiparallele Anordnungen bilden.",
          nl: "α-helices zijn rechtsgangige spiraalstructuren gestabiliseerd door waterstofbindingen tussen het carbonylzuurstof van residu n en de amidewaterstof van residu n+4. β-platen bestaan uit uitgestrekte polypeptidestrengven die samenhangen door waterstofbindingen tussen backboneatomen van naburige strengen, die parallelle of antiparallelle schikkingen vormen."
        }
      },
      {
        question: {
          en: "What is the Levinthal paradox?",
          es: "¿Qué es la paradoja de Levinthal?",
          de: "Was ist das Levinthal-Paradoxon?",
          nl: "Wat is de Levinthal-paradox?"
        },
        options: [
          {
            en: "Proteins fold much faster than predicted by random conformational search",
            es: "Las proteínas se pliegan mucho más rápido de lo predicho por búsqueda conformacional aleatoria",
            de: "Proteine falten viel schneller als durch zufällige Konformationssuche vorhergesagt",
            nl: "Eiwitten vouwen veel sneller dan voorspeld door willekeurige conformationele zoektocht"
          },
          {
            en: "Large proteins cannot fold without chaperone assistance",
            es: "Las proteínas grandes no pueden plegarse sin asistencia de chaperonas",
            de: "Große Proteine können ohne Chaperonhilfe nicht falten",
            nl: "Grote eiwitten kunnen niet vouwen zonder chaperonne-hulp"
          },
          {
            en: "Protein folding always requires external energy input",
            es: "El plegamiento de proteínas siempre requiere entrada de energía externa",
            de: "Proteinfaltung erfordert immer externe Energiezufuhr",
            nl: "Eiwitvouwing vereist altijd externe energie-invoer"
          },
          {
            en: "Misfolded proteins cannot be refolded to their native state",
            es: "Las proteínas mal plegadas no pueden replegarse a su estado nativo",
            de: "Falsch gefaltete Proteine können nicht in ihren nativen Zustand zurückgefaltet werden",
            nl: "Verkeerd gevouwen eiwitten kunnen niet hervouwen naar hun natuurlijke staat"
          }
        ],
        correct: 0,
        explanation: {
          en: "Levinthal's paradox points out that if proteins folded by randomly sampling all possible conformations, it would take longer than the age of the universe. However, proteins fold in seconds to minutes, indicating that folding follows specific pathways rather than random search, likely through folding funnels and nucleation sites.",
          es: "La paradoja de Levinthal señala que si las proteínas se plegaran muestreando aleatoriamente todas las conformaciones posibles, tomaría más tiempo que la edad del universo. Sin embargo, las proteínas se pliegan en segundos a minutos, indicando que el plegamiento sigue vías específicas en lugar de búsqueda aleatoria, probablemente a través de embudos de plegamiento y sitios de nucleación.",
          de: "Levinthals Paradoxon weist darauf hin, dass wenn Proteine durch zufälliges Abtasten aller möglichen Konformationen falten würden, es länger als das Alter des Universums dauern würde. Proteine falten jedoch in Sekunden bis Minuten, was darauf hinweist, dass die Faltung spezifischen Wegen folgt statt zufälliger Suche, wahrscheinlich durch Faltungstrichter und Nukleationsstellen.",
          nl: "Levinthal's paradox wijst erop dat als eiwitten zouden vouwen door willekeurig alle mogelijke conformaties te bemonsteren, het langer zou duren dan de leeftijd van het universum. Echter, eiwitten vouwen in seconden tot minuten, wat aangeeft dat vouwing specifieke paden volgt in plaats van willekeurige zoektocht, waarschijnlijk door vouwingstrechters en nucleatieplaatsen."
        }
      },
      {
        question: {
          en: "What are intrinsically disordered proteins (IDPs)?",
          es: "¿Qué son las proteínas intrínsecamente desordenadas (IDPs)?",
          de: "Was sind intrinsisch ungeordnete Proteine (IDPs)?",
          nl: "Wat zijn intrinsiek wanordelijke eiwitten (IDPs)?"
        },
        options: [
          {
            en: "Proteins that lack stable secondary and tertiary structure under physiological conditions",
            es: "Proteínas que carecen de estructura secundaria y terciaria estable bajo condiciones fisiológicas",
            de: "Proteine, die unter physiologischen Bedingungen keine stabile Sekundär- und Tertiärstruktur haben",
            nl: "Eiwitten die stabiele secundaire en tertiaire structuur missen onder fysiologische omstandigheden"
          },
          {
            en: "Proteins that are always found in protein aggregates",
            es: "Proteínas que siempre se encuentran en agregados proteicos",
            de: "Proteine, die immer in Proteinaggregaten gefunden werden",
            nl: "Eiwitten die altijd worden gevonden in eiwitaggregaten"
          },
          {
            en: "Proteins with multiple disulfide bonds causing structural rigidity",
            es: "Proteínas con múltiples enlaces disulfuro que causan rigidez estructural",
            de: "Proteine mit mehreren Disulfidbrücken, die strukturelle Starrheit verursachen",
            nl: "Eiwitten met meerdere disulfidebindingen die structurele starheid veroorzaken"
          },
          {
            en: "Proteins that only function at extreme temperatures",
            es: "Proteínas que solo funcionan a temperaturas extremas",
            de: "Proteine, die nur bei extremen Temperaturen funktionieren",
            nl: "Eiwitten die alleen functioneren bij extreme temperaturen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Intrinsically disordered proteins lack stable secondary and tertiary structures under physiological conditions but remain functional. They exist as dynamic ensembles of conformations and often gain structure upon binding to partners, playing crucial roles in cellular signaling, regulation, and molecular recognition.",
          es: "Las proteínas intrínsecamente desordenadas carecen de estructuras secundarias y terciarias estables bajo condiciones fisiológicas pero permanecen funcionales. Existen como conjuntos dinámicos de conformaciones y a menudo ganan estructura al unirse a compañeros, jugando papeles cruciales en señalización celular, regulación y reconocimiento molecular.",
          de: "Intrinsisch ungeordnete Proteine haben keine stabile Sekundär- und Tertiärstrukturen unter physiologischen Bedingungen, bleiben aber funktional. Sie existieren als dynamische Ensembles von Konformationen und gewinnen oft Struktur beim Binden an Partner, spielen wichtige Rollen in zellulärer Signalgebung, Regulation und molekularer Erkennung.",
          nl: "Intrinsiek wanordelijke eiwitten missen stabiele secundaire en tertiaire structuren onder fysiologische omstandigheden maar blijven functioneel. Ze bestaan als dynamische ensembles van conformaties en krijgen vaak structuur bij binding aan partners, spelen cruciale rollen in cellulaire signalering, regulatie en moleculaire herkenning."
        }
      },
      {
        question: {
          en: "What is cooperativity in protein folding?",
          es: "¿Qué es la cooperatividad en el plegamiento de proteínas?",
          de: "Was ist Kooperativität bei der Proteinfaltung?",
          nl: "Wat is coöperativiteit bij eiwitvouwing?"
        },
        options: [
          {
            en: "The tendency for protein folding to occur in a highly coordinated, all-or-none manner",
            es: "La tendencia del plegamiento proteico a ocurrir de manera altamente coordinada, todo-o-nada",
            de: "Die Tendenz der Proteinfaltung, in hochkoordinierter Alles-oder-Nichts-Weise zu erfolgen",
            nl: "De neiging van eiwitvouwing om op een zeer gecoördineerde, alles-of-niets manier plaats te vinden"
          },
          {
            en: "Multiple proteins folding simultaneously in the same cellular compartment",
            es: "Múltiples proteínas plegándose simultáneamente en el mismo compartimento celular",
            de: "Mehrere Proteine, die gleichzeitig im selben Zellkompartiment falten",
            nl: "Meerdere eiwitten die gelijktijdig vouwen in hetzelfde cellulaire compartiment"
          },
          {
            en: "The requirement for multiple chaperones to assist in folding",
            es: "El requerimiento de múltiples chaperonas para asistir en el plegamiento",
            de: "Die Anforderung mehrerer Chaperone zur Unterstützung der Faltung",
            nl: "De vereiste voor meerdere chaperonnes om te helpen bij vouwing"
          },
          {
            en: "Proteins helping each other fold through direct physical contact",
            es: "Proteínas ayudándose mutuamente a plegarse a través de contacto físico directo",
            de: "Proteine, die sich gegenseitig durch direkten physischen Kontakt beim Falten helfen",
            nl: "Eiwitten die elkaar helpen vouwen door direct fysiek contact"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cooperativity in protein folding refers to the highly coordinated nature of the folding process, where the formation of local structures stabilizes and promotes the formation of other structural elements. This results in sharp, sigmoidal folding transitions rather than gradual changes, often described as two-state (folded/unfolded) behavior.",
          es: "La cooperatividad en el plegamiento de proteínas se refiere a la naturaleza altamente coordinada del proceso de plegamiento, donde la formación de estructuras locales estabiliza y promueve la formación de otros elementos estructurales. Esto resulta in transiciones de plegamiento agudas y sigmoidales en lugar de cambios graduales, a menudo descritas como comportamiento de dos estados (plegado/desplegado).",
          de: "Kooperativität bei der Proteinfaltung bezieht sich auf die hochkoordinierte Natur des Faltungsprozesses, bei dem die Bildung lokaler Strukturen die Bildung anderer Strukturelemente stabilisiert und fördert. Dies führt zu scharfen, sigmoidalen Faltungsübergängen statt graduellen Veränderungen, oft als Zwei-Zustände-(gefaltet/entfaltet)-Verhalten beschrieben.",
          nl: "Coöperativiteit bij eiwitvouwing verwijst naar de zeer gecoördineerde aard van het vouwingsproces, waarbij de vorming van lokale structuren de vorming van andere structurele elementen stabiliseert en bevordert. Dit resulteert in scherpe, sigmoïdale vouwingsovergangen in plaats van geleidelijke veranderingen, vaak beschreven als twee-toestand (gevouwen/ontvouwen) gedrag."
        }
      },
      {
        question: {
          en: "What is protein thermostability?",
          es: "¿Qué es la termoestabilidad proteica?",
          de: "Was ist Proteinthermostabilität?",
          nl: "Wat is eiwit thermostabiliteit?"
        },
        options: [
          {
            en: "The ability of a protein to maintain structure and function at elevated temperatures",
            es: "La capacidad de una proteína de mantener estructura y función a temperaturas elevadas",
            de: "Die Fähigkeit eines Proteins, Struktur und Funktion bei erhöhten Temperaturen aufrechtzuerhalten",
            nl: "Het vermogen van een eiwit om structuur en functie te behouden bij verhoogde temperaturen"
          },
          {
            en: "The temperature at which all protein bonds break simultaneously",
            es: "La temperatura a la cual todos los enlaces proteicos se rompen simultáneamente",
            de: "Die Temperatur, bei der alle Proteinbindungen gleichzeitig brechen",
            nl: "De temperatuur waarbij alle eiwitbindingen gelijktijdig breken"
          },
          {
            en: "The ability to store proteins at room temperature indefinitely",
            es: "La capacidad de almacenar proteínas a temperatura ambiente indefinidamente",
            de: "Die Fähigkeit, Proteine unbegrenzt bei Raumtemperatur zu lagern",
            nl: "Het vermogen om eiwitten onbeperkt bij kamertemperatuur op te slaan"
          },
          {
            en: "The resistance to freezing damage in proteins",
            es: "La resistencia al daño por congelación en proteínas",
            de: "Die Resistenz gegen Gefrierschäden in Proteinen",
            nl: "De weerstand tegen vriesdschade in eiwitten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Protein thermostability refers to a protein's ability to retain its native structure and biological activity at high temperatures. Thermostable proteins often have increased hydrogen bonding, ionic interactions, disulfide bonds, and more compact structures. This property is important for enzymes used in industrial processes and for organisms living in extreme environments.",
          es: "La termoestabilidad proteica se refiere a la capacidad de una proteína de retener su estructura nativa y actividad biológica a altas temperaturas. Las proteínas termoestables a menudo tienen mayor enlaces de hidrógeno, interacciones iónicas, enlaces disulfuro, y estructuras más compactas. Esta propiedad es importante para enzimas usadas in procesos industriales y para organismos que viven en ambientes extremos.",
          de: "Proteinthermostabilität bezieht sich auf die Fähigkeit eines Proteins, seine native Struktur und biologische Aktivität bei hohen Temperaturen zu behalten. Thermostabile Proteine haben oft vermehrte Wasserstoffbrückenbindungen, ionische Wechselwirkungen, Disulfidbrücken und kompaktere Strukturen. Diese Eigenschaft ist wichtig für Enzyme in industriellen Prozessen und für Organismen in extremen Umgebungen.",
          nl: "Eiwit thermostabiliteit verwijst naar het vermogen van een eiwit om zijn natuurlijke structuur en biologische activiteit te behouden bij hoge temperaturen. Thermostabiele eiwitten hebben vaak meer waterstofbindingen, ionische interacties, disulfidebindingen en compactere structuren. Deze eigenschap is belangrijk voor enzymen gebruikt in industriële processen en voor organismen die leven in extreme omgevingen."
        }
      },
      {
        question: {
          en: "What is the molten globule state?",
          es: "¿Qué es el estado de glóbulo fundido?",
          de: "Was ist der Molten-Globule-Zustand?",
          nl: "Wat is de gesmolten globule-toestand?"
        },
        options: [
          {
            en: "A partially folded protein state with native-like secondary structure but disordered tertiary structure",
            es: "Un estado proteico parcialmente plegado con estructura secundaria similar a la nativa pero estructura terciaria desordenada",
            de: "Ein teilweise gefalteter Proteinzustand mit nativ-ähnlicher Sekundärstruktur aber ungeordneter Tertiärstruktur",
            nl: "Een gedeeltelijk gevouwen eiwittoestand met native-achtige secundaire structuur maar wanordelijke tertiaire structuur"
          },
          {
            en: "A protein state that only exists at very high temperatures",
            es: "Un estado proteico que solo existe a temperaturas muy altas",
            de: "Ein Proteinzustand, der nur bei sehr hohen Temperaturen existiert",
            nl: "Een eiwittoestand die alleen bestaat bij zeer hoge temperaturen"
          },
          {
            en: "The fully unfolded state of a protein in strong denaturants",
            es: "El estado completamente desplegado de una proteína en desnaturalizantes fuertes",
            de: "Der vollständig entfaltete Zustand eines Proteins in starken Denaturierungsmitteln",
            nl: "De volledig ontvouwen toestand van een eiwit in sterke denaturanten"
          },
          {
            en: "A protein complex with multiple subunits in liquid form",
            es: "Un complejo proteico con múltiples subunidades en forma líquida",
            de: "Ein Proteinkomplex mit mehreren Untereinheiten in flüssiger Form",
            nl: "Een eiwitcomplex met meerdere subeenheden in vloeibare vorm"
          }
        ],
        correct: 0,
        explanation: {
          en: "The molten globule state is a compact, partially folded intermediate in protein folding. It retains much of the native secondary structure and has a hydrophobic core, but lacks the specific tertiary structure and tight packing of the native state. This state is often observed during protein folding pathways and under mildly denaturing conditions.",
          es: "El estado de glóbulo fundido es un intermediario compacto y parcialmente plegado en el plegamiento proteico. Retiene mucha de la estructura secundaria nativa y tiene un núcleo hidrofóbico, pero carece de la estructura terciaria específica y empaquetamiento apretado del estado nativo. Este estado se observa a menudo durante las vías de plegamiento proteico y bajo condiciones ligeramente desnaturalizantes.",
          de: "Der Molten-Globule-Zustand ist ein kompaktes, teilweise gefaltetes Intermediat in der Proteinfaltung. Er behält viel der nativen Sekundärstruktur und hat einen hydrophoben Kern, aber ihm fehlen die spezifische Tertiärstruktur und enge Packung des nativen Zustands. Dieser Zustand wird oft während Proteinfaltungswegen und unter mild denaturierenden Bedingungen beobachtet.",
          nl: "De gesmolten globule-toestand is een compact, gedeeltelijk gevouwen intermediaat in eiwitvouwing. Het behoudt veel van de natuurlijke secundaire structuur en heeft een hydrofobe kern, maar mist de specifieke tertiaire structuur en strakke pakking van de natuurlijke toestand. Deze toestand wordt vaak waargenomen tijdens eiwitvouwingspaden en onder mild denaturerende omstandigheden."
        }
      },
      {
        question: {
          en: "What is the significance of the hydrophobic core in globular proteins?",
          es: "¿Cuál es la importancia del núcleo hidrofóbico en las proteínas globulares?",
          de: "Was ist die Bedeutung des hydrophoben Kerns in globulären Proteinen?",
          nl: "Wat is de betekenis van de hydrofobe kern in globulaire eiwitten?"
        },
        options: [
          {
            en: "It provides structural stability by excluding water and maximizing favorable interactions",
            es: "Proporciona estabilidad estructural excluyendo agua y maximizando interacciones favorables",
            de: "Er bietet strukturelle Stabilität durch Wasserausschluss und Maximierung günstiger Wechselwirkungen",
            nl: "Het biedt structurele stabiliteit door water uit te sluiten en gunstige interacties te maximaliseren"
          },
          {
            en: "It serves as the primary binding site for all protein substrates",
            es: "Sirve como el sitio de unión primario para todos los sustratos proteicos",
            de: "Er dient als primäre Bindungsstelle für alle Proteinsubstrate",
            nl: "Het dient als de primaire bindingsplaats voor alle eiwitsubstraten"
          },
          {
            en: "It contains the majority of charged amino acids",
            es: "Contiene la mayoría de los aminoácidos cargados",
            de: "Er enthält die Mehrheit der geladenen Aminosäuren",
            nl: "Het bevat de meerderheid van geladen aminozuren"
          },
          {
            en: "It facilitates rapid protein degradation when needed",
            es: "Facilita la degradación rápida de proteínas cuando es necesario",
            de: "Er erleichtert schnellen Proteinabbau bei Bedarf",
            nl: "Het faciliteert snelle eiwitafbraak wanneer nodig"
          }
        ],
        correct: 0,
        explanation: {
          en: "The hydrophobic core of globular proteins is crucial for structural stability. It forms through the clustering of hydrophobic amino acid side chains, excluding water molecules and maximizing van der Waals interactions. This core provides the main driving force for protein folding and maintains the compact, stable structure necessary for protein function.",
          es: "El núcleo hidrofóbico de las proteínas globulares es crucial para la estabilidad estructural. Se forma a través del agrupamiento de cadenas laterales de aminoácidos hidrofóbicos, excluyendo moléculas de agua y maximizando interacciones de van der Waals. Este núcleo proporciona la fuerza motriz principal para el plegamiento proteico y mantiene la estructura compacta y estable necesaria para la función proteica.",
          de: "Der hydrophobe Kern globulärer Proteine ist entscheidend für die strukturelle Stabilität. Er entsteht durch die Clusterbildung hydrophober Aminosäure-Seitenketten, schließt Wassermoleküle aus und maximiert van-der-Waals-Wechselwirkungen. Dieser Kern liefert die Haupttriebkraft für die Proteinfaltung und erhält die kompakte, stabile Struktur, die für die Proteinfunktion notwendig ist.",
          nl: "De hydrofobe kern van globulaire eiwitten is cruciaal voor structurele stabiliteit. Het vormt door clustering van hydrofobe aminozuurzijketens, sluit watermoleculen uit en maximaliseert van der Waals-interacties. Deze kern biedt de hoofddrijvende kracht voor eiwitvouwing en onderhoudt de compacte, stabiele structuur nodig voor eiwitfunctie."
        }
      },
      {
        question: {
          en: "What are β-turns in protein secondary structure?",
          es: "¿Qué son los giros β en la estructura secundaria de proteínas?",
          de: "Was sind β-Turns in der sekundären Proteinstruktur?",
          nl: "Wat zijn β-bochten in de secundaire eiwitstructuur?"
        },
        options: [
          {
            en: "Sharp directional changes in the polypeptide chain connecting other secondary structures",
            es: "Cambios direccionales agudos en la cadena polipeptídica que conectan otras estructuras secundarias",
            de: "Scharfe Richtungsänderungen in der Polypeptidkette, die andere Sekundärstrukturen verbinden",
            nl: "Scherpe richtingsveranderingen in de polypeptideketen die andere secundaire structuren verbinden"
          },
          {
            en: "Extended regions of β-sheet structure only",
            es: "Regiones extendidas de estructura β-lámina solamente",
            de: "Ausgedehnte Bereiche nur von β-Faltblattstruktur",
            nl: "Uitgestrekte gebieden van alleen β-plaatstructuur"
          },
          {
            en: "Helical structures with exactly 10 amino acids per turn",
            es: "Estructuras helicoidales con exactamente 10 aminoácidos por vuelta",
            de: "Helikalstrukturen mit genau 10 Aminosäuren pro Windung",
            nl: "Helische structuren met precies 10 aminozuren per draai"
          },
          {
            en: "Regions where the protein binds to β-strand partners",
            es: "Regiones donde la proteína se une a compañeros de hebra β",
            de: "Regionen, wo das Protein an β-Strang-Partner bindet",
            nl: "Gebieden waar het eiwit bindt aan β-strengpartners"
          }
        ],
        correct: 0,
        explanation: {
          en: "β-turns (or β-bends) are tight turns involving four consecutive amino acid residues where the polypeptide chain changes direction by about 180°. They often connect β-strands in antiparallel β-sheets and are commonly found at protein surfaces, frequently involving glycine and proline residues due to their conformational flexibility.",
          es: "Los giros β (o curvas β) son giros apretados que involucran cuatro residuos de aminoácidos consecutivos donde la cadena polipeptídica cambia de dirección aproximadamente 180°. A menudo conectan hebras β en β-láminas antiparalelas y se encuentran comúnmente en superficies proteicas, frecuentemente involucrando residuos de glicina y prolina debido a su flexibilidad conformacional.",
          de: "β-Turns (oder β-Biegungen) sind enge Windungen mit vier aufeinanderfolgenden Aminosäureresten, wo die Polypeptidkette die Richtung um etwa 180° ändert. Sie verbinden oft β-Stränge in antiparallelen β-Faltblättern und finden sich häufig an Proteinoberflächen, oft mit Glycin- und Prolinresten aufgrund ihrer konformationellen Flexibilität.",
          nl: "β-bochten zijn strakke bochten met vier opeenvolgende aminozuurresten waar de polypeptideketen van richting verandert met ongeveer 180°. Ze verbinden vaak β-strengen in antiparallelle β-platen en worden vaak gevonden op eiwitoppervlakken, vaak met glycine- en prolineresten vanwege hun conformationele flexibiliteit."
        }
      },
      {
        question: {
          en: "What is the difference between fibrous and globular proteins?",
          es: "¿Cuál es la diferencia entre proteínas fibrosas y globulares?",
          de: "Was ist der Unterschied zwischen faserigen und globulären Proteinen?",
          nl: "Wat is het verschil tussen vezelige en globulaire eiwitten?"
        },
        options: [
          {
            en: "Fibrous proteins are elongated and structural, globular proteins are compact and functional",
            es: "Las proteínas fibrosas son alargadas y estructurales, las proteínas globulares son compactas y funcionales",
            de: "Faserige Proteine sind langgestreckt und strukturell, globuläre Proteine sind kompakt und funktional",
            nl: "Vezelige eiwitten zijn langwerpig en structureel, globulaire eiwitten zijn compact en functioneel"
          },
          {
            en: "Fibrous proteins are water-soluble, globular proteins are insoluble",
            es: "Las proteínas fibrosas son solubles en agua, las proteínas globulares son insolubles",
            de: "Faserige Proteine sind wasserlöslich, globuläre Proteine sind unlöslich",
            nl: "Vezelige eiwitten zijn wateroplosbaar, globulaire eiwitten zijn onoplosbaar"
          },
          {
            en: "Fibrous proteins have quaternary structure, globular proteins do not",
            es: "Las proteínas fibrosas tienen estructura cuaternaria, las proteínas globulares no",
            de: "Faserige Proteine haben Quartärstruktur, globuläre Proteine nicht",
            nl: "Vezelige eiwitten hebben quaternaire structuur, globulaire eiwitten niet"
          },
          {
            en: "Fibrous proteins are only found in animals, globular proteins only in plants",
            es: "Las proteínas fibrosas solo se encuentran en animales, las proteínas globulares solo en plantas",
            de: "Faserige Proteine finden sich nur in Tieren, globuläre Proteine nur in Pflanzen",
            nl: "Vezelige eiwitten worden alleen gevonden in dieren, globulaire eiwitten alleen in planten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Fibrous proteins are elongated, often repetitive structures that serve structural or protective roles (like collagen, keratin, silk). They're typically insoluble in water. Globular proteins are compact, folded into complex 3D shapes, usually water-soluble, and serve catalytic, transport, or regulatory functions (like enzymes, hemoglobin, antibodies).",
          es: "Las proteínas fibrosas son estructuras alargadas, a menudo repetitivas que sirven roles estructurales o protectivos (como colágeno, queratina, seda). Típicamente son insolubles en agua. Las proteínas globulares son compactas, plegadas en formas 3D complejas, usualmente solubles en agua, y sirven funciones catalíticas, de transporte o regulatorias (como enzimas, hemoglobina, anticuerpos).",
          de: "Faserige Proteine sind langgestreckte, oft repetitive Strukturen, die strukturelle oder schützende Rollen erfüllen (wie Kollagen, Keratin, Seide). Sie sind typischerweise wasserunlöslich. Globuläre Proteine sind kompakt, in komplexe 3D-Formen gefaltet, meist wasserlöslich und dienen katalytischen, Transport- oder regulatorischen Funktionen (wie Enzyme, Hämoglobin, Antikörper).",
          nl: "Vezelige eiwitten zijn langwerpige, vaak repetitieve structuren die structurele of beschermende rollen dienen (zoals collageen, keratine, zijde). Ze zijn typisch onoplosbaar in water. Globulaire eiwitten zijn compact, gevouwen in complexe 3D-vormen, meestal wateroplosbaar en dienen katalytische, transport- of regulatoire functies (zoals enzymen, hemoglobine, antilichamen)."
        }
      },
      {
        question: {
          en: "What is protein aggregation and why is it problematic?",
          es: "¿Qué es la agregación proteica y por qué es problemática?",
          de: "Was ist Proteinaggregation und warum ist sie problematisch?",
          nl: "Wat is eiwitaggregatie en waarom is het problematisch?"
        },
        options: [
          {
            en: "Abnormal clustering of misfolded proteins that can lead to cellular dysfunction and disease",
            es: "Agrupamiento anormal de proteínas mal plegadas que puede llevar a disfunción celular y enfermedad",
            de: "Abnorme Clusterbildung falsch gefalteter Proteine, die zu zellulärer Dysfunktion und Krankheit führen kann",
            nl: "Abnormale clustering van verkeerd gevouwen eiwitten die kan leiden tot cellulaire disfunctie en ziekte"
          },
          {
            en: "Normal assembly of proteins into functional complexes",
            es: "Ensamblaje normal de proteínas en complejos funcionales",
            de: "Normale Assemblierung von Proteinen in funktionale Komplexe",
            nl: "Normale assemblage van eiwitten in functionele complexen"
          },
          {
            en: "The process by which proteins are synthesized in ribosomes",
            es: "El proceso por el cual las proteínas se sintetizan en los ribosomas",
            de: "Der Prozess, durch den Proteine in Ribosomen synthetisiert werden",
            nl: "Het proces waarbij eiwitten worden gesynthetiseerd in ribosomen"
          },
          {
            en: "Temporary association of proteins during membrane transport",
            es: "Asociación temporal de proteínas durante el transporte de membrana",
            de: "Temporäre Assoziation von Proteinen während des Membrantransports",
            nl: "Tijdelijke associatie van eiwitten tijdens membraantransport"
          }
        ],
        correct: 0,
        explanation: {
          en: "Protein aggregation occurs when misfolded proteins clump together into larger, often insoluble structures. This can result from cellular stress, mutations, or aging. Protein aggregates can be toxic to cells, interfere with normal cellular processes, and are associated with neurodegenerative diseases like Alzheimer's, Parkinson's, and Huntington's disease.",
          es: "La agregación proteica ocurre cuando proteínas mal plegadas se agrupan en estructuras más grandes, a menudo insolubles. Esto puede resultar de estrés celular, mutaciones o envejecimiento. Los agregados proteicos pueden ser tóxicos para las células, interferir con procesos celulares normales, y están asociados con enfermedades neurodegenerativas como Alzheimer, Parkinson y enfermedad de Huntington.",
          de: "Proteinaggregation tritt auf, wenn falsch gefaltete Proteine zu größeren, oft unlöslichen Strukturen verklumpen. Dies kann durch zellulären Stress, Mutationen oder Alterung entstehen. Proteinaggregate können für Zellen toxisch sein, normale zelluläre Prozesse stören und sind mit neurodegenerativen Krankheiten wie Alzheimer, Parkinson und Huntington-Krankheit verbunden.",
          nl: "Eiwitaggregatie treedt op wanneer verkeerd gevouwen eiwitten samenklonteren in grotere, vaak onoplosbare structuren. Dit kan resulteren uit cellulaire stress, mutaties of veroudering. Eiwitaggregaten kunnen toxisch zijn voor cellen, normale cellulaire processen verstoren en zijn geassocieerd met neurodegeneratieve ziekten zoals Alzheimer, Parkinson en de ziekte van Huntington."
        }
      },
      {
        question: {
          en: "What is the protein folding funnel model?",
          es: "¿Qué es el modelo de embudo de plegamiento proteico?",
          de: "Was ist das Proteinfaltungstrichter-Modell?",
          nl: "Wat is het eiwitvouwingstrechter-model?"
        },
        options: [
          {
            en: "A model describing protein folding as a funnel-shaped energy landscape guiding folding to the native state",
            es: "Un modelo que describe el plegamiento proteico como un paisaje energético en forma de embudo que guía el plegamiento al estado nativo",
            de: "Ein Modell, das die Proteinfaltung als trichterförmige Energielandschaft beschreibt, die die Faltung zum nativen Zustand leitet",
            nl: "Een model dat eiwitvouwing beschrijft als een trechtervormig energielandschap dat vouwing naar de natuurlijke staat geleidt"
          },
          {
            en: "A physical device used to separate folded from unfolded proteins",
            es: "Un dispositivo físico usado para separar proteínas plegadas de desplegadas",
            de: "Ein physisches Gerät zur Trennung gefalteter von ungefalteten Proteinen",
            nl: "Een fysiek apparaat gebruikt om gevouwen van ontvouwen eiwitten te scheiden"
          },
          {
            en: "A method for predicting secondary structure from amino acid sequence",
            es: "Un método para predecir estructura secundaria desde la secuencia de aminoácidos",
            de: "Eine Methode zur Vorhersage der Sekundärstruktur aus der Aminosäuresequenz",
            nl: "Een methode voor het voorspellen van secundaire structuur uit aminozuursequentie"
          },
          {
            en: "A technique for visualizing protein structures under electron microscopy",
            es: "Una técnica para visualizar estructuras proteicas bajo microscopía electrónica",
            de: "Eine Technik zur Visualisierung von Proteinstrukturen unter Elektronenmikroskopie",
            nl: "Een techniek voor het visualiseren van eiwitstructuren onder elektronenmicroscopie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The folding funnel model describes protein folding as a process where the unfolded protein explores conformational space through an energy landscape shaped like a funnel. The funnel narrows toward the native state (global energy minimum), with folding pathways converging as the protein approaches its final structure, explaining how proteins fold quickly and efficiently.",
          es: "El modelo de embudo de plegamiento describe el plegamiento proteico como un proceso donde la proteína desplegada explora el espacio conformacional a través de un paisaje energético con forma de embudo. El embudo se estrecha hacia el estado nativo (mínimo energético global), con vías de plegamiento convergiendo cuando la proteína se acerca a su estructura final, explicando cómo las proteínas se pliegan rápida y eficientemente.",
          de: "Das Faltungstrichter-Modell beschreibt die Proteinfaltung als Prozess, bei dem das ungefaltete Protein den Konformationsraum durch eine trichterförmige Energielandschaft erkundet. Der Trichter verengt sich zum nativen Zustand (globales Energieminimum), wobei Faltungswege konvergieren, wenn das Protein seiner endgültigen Struktur näherkommt, was erklärt, wie Proteine schnell und effizient falten.",
          nl: "Het vouwingstrechter-model beschrijft eiwitvouwing als een proces waarbij het ontvouwen eiwit conformationele ruimte verkent door een energielandschap gevormd als een trechter. De trechter versmalt naar de natuurlijke staat (globale energie-minimum), met vouwingspaden die convergeren naarmate het eiwit zijn uiteindelijke structuur nadert, wat verklaart hoe eiwitten snel en efficiënt vouwen."
        }
      },
      {
        question: {
          en: "What role do proline residues play in protein structure?",
          es: "¿Qué papel juegan los residuos de prolina en la estructura proteica?",
          de: "Welche Rolle spielen Prolinreste in der Proteinstruktur?",
          nl: "Welke rol spelen proline-residuen in eiwitstructuur?"
        },
        options: [
          {
            en: "They introduce kinks and breaks in regular secondary structures due to conformational rigidity",
            es: "Introducen pliegues y rupturas en estructuras secundarias regulares debido a rigidez conformacional",
            de: "Sie führen Knicke und Brüche in regulären Sekundärstrukturen aufgrund konformationeller Starrheit ein",
            nl: "Ze introduceren knikken en breuken in reguliere secundaire structuren door conformationele starheid"
          },
          {
            en: "They stabilize α-helices by forming additional hydrogen bonds",
            es: "Estabilizan las α-hélices formando enlaces de hidrógeno adicionales",
            de: "Sie stabilisieren α-Helices durch Bildung zusätzlicher Wasserstoffbrücken",
            nl: "Ze stabiliseren α-helices door extra waterstofbindingen te vormen"
          },
          {
            en: "They always form disulfide bonds with cysteine residues",
            es: "Siempre forman enlaces disulfuro con residuos de cisteína",
            de: "Sie bilden immer Disulfidbrücken mit Cysteinresten",
            nl: "Ze vormen altijd disulfidebindingen met cysteïne-residuen"
          },
          {
            en: "They provide the main hydrophobic interactions in protein cores",
            es: "Proporcionan las principales interacciones hidrofóbicas en núcleos proteicos",
            de: "Sie liefern die Haupthydrophoben Wechselwirkungen in Proteinkernen",
            nl: "Ze bieden de hoofdhydrofobe interacties in eiwitkernen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Proline is unique because its side chain forms a cyclic structure with the backbone nitrogen, creating a rigid five-membered ring. This constrains the φ angle and prevents formation of regular α-helices and β-sheets. Proline often introduces kinks, bends, or turns in protein structures and is commonly found in loops and β-turns.",
          es: "La prolina es única porque su cadena lateral forma una estructura cíclica con el nitrógeno del esqueleto, creando un anillo rígido de cinco miembros. Esto restringe el ángulo φ y previene la formación de α-hélices y β-láminas regulares. La prolina a menudo introduce pliegues, curvas o giros en estructuras proteicas y se encuentra comúnmente en bucles y giros β.",
          de: "Prolin ist einzigartig, weil seine Seitenkette eine zyklische Struktur mit dem Rückgrat-Stickstoff bildet und einen starren fünfgliedrigen Ring schafft. Dies beschränkt den φ-Winkel und verhindert die Bildung regulärer α-Helices und β-Faltblätter. Prolin führt oft Knicke, Biegungen oder Windungen in Proteinstrukturen ein und findet sich häufig in Schleifen und β-Turns.",
          nl: "Proline is uniek omdat zijn zijketen een cyclische structuur vormt met de backbone stikstof, wat een starre vijfledige ring creëert. Dit beperkt de φ-hoek en voorkomt vorming van reguliere α-helices en β-platen. Proline introduceert vaak knikken, bochten of draaien in eiwitstructuren en wordt vaak gevonden in lussen en β-bochten."
        }
      },
      {
        question: {
          en: "What is the significance of phi (φ) and psi (ψ) angles in protein structure?",
          es: "¿Cuál es la importancia de los ángulos phi (φ) y psi (ψ) en la estructura proteica?",
          de: "Was ist die Bedeutung der Phi-(φ)- und Psi-(ψ)-Winkel in der Proteinstruktur?",
          nl: "Wat is de betekenis van phi (φ) en psi (ψ) hoeken in eiwitstructuur?"
        },
        options: [
          {
            en: "They define the local backbone conformation and determine allowed secondary structures",
            es: "Definen la conformación local del esqueleto y determinan las estructuras secundarias permitidas",
            de: "Sie definieren die lokale Rückgrat-Konformation und bestimmen erlaubte Sekundärstrukturen",
            nl: "Ze definiëren de lokale backbone conformatie en bepalen toegestane secundaire structuren"
          },
          {
            en: "They represent the angles between amino acid side chains",
            es: "Representan los ángulos entre cadenas laterales de aminoácidos",
            de: "Sie repräsentieren die Winkel zwischen Aminosäure-Seitenketten",
            nl: "Ze vertegenwoordigen de hoeken tussen aminozuurzijketens"
          },
          {
            en: "They measure the degree of protein hydration",
            es: "Miden el grado de hidratación proteica",
            de: "Sie messen den Grad der Proteinhydratation",
            nl: "Ze meten de graad van eiwithydratatie"
          },
          {
            en: "They indicate the strength of hydrogen bonds in proteins",
            es: "Indican la fuerza de los enlaces de hidrógeno en proteínas",
            de: "Sie zeigen die Stärke von Wasserstoffbrücken in Proteinen an",
            nl: "Ze geven de sterkte van waterstofbindingen in eiwitten aan"
          }
        ],
        correct: 0,
        explanation: {
          en: "The φ (phi) angle is the dihedral angle around the N-Cα bond, and ψ (psi) is the angle around the Cα-C bond. These angles define the local conformation of the protein backbone. Different combinations correspond to different secondary structures: α-helices have φ ≈ -60° and ψ ≈ -45°, while β-sheets have φ ≈ -120° and ψ ≈ +120°.",
          es: "El ángulo φ (phi) es el ángulo diedro alrededor del enlace N-Cα, y ψ (psi) es el ángulo alrededor del enlace Cα-C. Estos ángulos definen la conformación local del esqueleto proteico. Diferentes combinaciones corresponden a diferentes estructuras secundarias: las α-hélices tienen φ ≈ -60° y ψ ≈ -45°, mientras que las β-láminas tienen φ ≈ -120° y ψ ≈ +120°.",
          de: "Der φ-(Phi-)Winkel ist der Diederwinkel um die N-Cα-Bindung, und ψ (Psi) ist der Winkel um die Cα-C-Bindung. Diese Winkel definieren die lokale Konformation des Protein-Rückgrats. Verschiedene Kombinationen entsprechen verschiedenen Sekundärstrukturen: α-Helices haben φ ≈ -60° und ψ ≈ -45°, während β-Faltblätter φ ≈ -120° und ψ ≈ +120° haben.",
          nl: "De φ (phi) hoek is de dihedrale hoek rond de N-Cα binding, en ψ (psi) is de hoek rond de Cα-C binding. Deze hoeken definiëren de lokale conformatie van de eiwitbackbone. Verschillende combinaties komen overeen met verschillende secundaire structuren: α-helices hebben φ ≈ -60° en ψ ≈ -45°, terwijl β-platen φ ≈ -120° en ψ ≈ +120° hebben."
        }
      }
    ]

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/molecular-biology', level2);
  }
})();
