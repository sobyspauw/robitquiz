// Biology - Level 7: Evolutionary Biology and Phylogenetics
(function() {
  const level7 = {
    name: {
      en: "Evolutionary Biology and Phylogenetics",
      es: "Biología Evolutiva y Filogenética",
      de: "Evolutionsbiologie und Phylogenetik",
      nl: "Evolutionaire Biologie en Fylogenetiek"
    },
    questions: [
      {
        question: {
          en: "Which evolutionary mechanism explains the rapid evolution of antibiotic resistance in bacteria?",
          es: "¿Qué mecanismo evolutivo explica la evolución rápida de resistencia a antibióticos en bacterias?",
          de: "Welcher evolutionäre Mechanismus erklärt die schnelle Evolution von Antibiotikaresistenz in Bakterien?",
          nl: "Welk evolutionair mechanisme verklaart de snelle evolutie van antibioticaresistentie bij bacteriën?"
        },
        options: [
          { en: "Natural selection acting on pre-existing genetic variation", es: "Selección natural actuando sobre variación genética preexistente", de: "Natürliche Selektion wirkend auf bereits existierende genetische Variation", nl: "Natuurlijke selectie werkend op reeds bestaande genetische variatie" },
          { en: "Directed mutation in response to antibiotics", es: "Mutación dirigida en respuesta a antibióticos", de: "Gerichtete Mutation als Antwort auf Antibiotika", nl: "Gerichte mutatie als reactie op antibiotica" },
          { en: "Genetic drift only", es: "Solo deriva genética", de: "Nur genetische Drift", nl: "Alleen genetische drift" },
          { en: "Lamarckian inheritance", es: "Herencia lamarckiana", de: "Lamarcksche Vererbung", nl: "Lamarckiaanse overerving" }
        ],
        correct: 0,
        explanation: {
          en: "Antibiotic resistance evolves rapidly through natural selection acting on pre-existing genetic variants (mutations or plasmid-borne resistance genes) that confer survival advantage in the presence of antibiotics.",
          es: "La resistencia a antibióticos evoluciona rápidamente a través de selección natural actuando sobre variantes genéticas preexistentes (mutaciones o genes de resistencia en plásmidos) que confieren ventaja de supervivencia en presencia de antibióticos.",
          de: "Antibiotikaresistenz entwickelt sich schnell durch natürliche Selektion, die auf bereits existierenden genetischen Varianten (Mutationen oder Plasmid-getragene Resistenzgene) wirkt, die einen Überlebensvorteil in Anwesenheit von Antibiotika verleihen.",
          nl: "Antibioticaresistentie evolueert snel door natuurlijke selectie die werkt op reeds bestaande genetische varianten (mutaties of plasmide-gedragen resistentiegenen) die een overlevingsvoordeel geven in aanwezigheid van antibiotica."
        }
      },
      {
        question: {
          en: "What is the molecular clock hypothesis in evolutionary biology?",
          es: "¿Cuál es la hipótesis del reloj molecular en biología evolutiva?",
          de: "Was ist die Hypothese der molekularen Uhr in der Evolutionsbiologie?",
          nl: "Wat is de moleculaire klok hypothese in evolutionaire biologie?"
        },
        options: [
          { en: "DNA mutations accumulate at a relatively constant rate over time", es: "Las mutaciones de ADN se acumulan a una tasa relativamente constante con el tiempo", de: "DNA-Mutationen akkumulieren mit relativ konstanter Rate über die Zeit", nl: "DNA-mutaties accumuleren met relatief constante snelheid over tijd" },
          { en: "Evolution occurs in discrete time intervals", es: "La evolución ocurre en intervalos de tiempo discretos", de: "Evolution erfolgt in diskreten Zeitintervallen", nl: "Evolutie vindt plaats in discrete tijdsintervallen" },
          { en: "Natural selection operates rhythmically", es: "La selección natural opera rítmicamente", de: "Natürliche Selektion wirkt rhythmisch", nl: "Natuurlijke selectie werkt ritmisch" },
          { en: "Gene expression follows circadian patterns", es: "La expresión génica sigue patrones circadianos", de: "Genexpression folgt zirkadianen Mustern", nl: "Genexpressie volgt circadiane patronen" }
        ],
        correct: 0,
        explanation: {
          en: "The molecular clock hypothesis proposes that neutral mutations accumulate at a relatively constant rate over time, allowing estimation of divergence times between species based on genetic differences.",
          es: "La hipótesis del reloj molecular propone que las mutaciones neutras se acumulan a una tasa relativamente constante con el tiempo, permitiendo estimar tiempos de divergencia entre especies basándose en diferencias genéticas.",
          de: "Die molekulare Uhr-Hypothese schlägt vor, dass neutrale Mutationen mit relativ konstanter Rate über die Zeit akkumulieren, wodurch die Abschätzung von Divergenzzeiten zwischen Arten basierend auf genetischen Unterschieden ermöglicht wird.",
          nl: "De moleculaire klok hypothese stelt voor dat neutrale mutaties accumuleren met relatief constante snelheid over tijd, waardoor schatting van divergentietijden tussen soorten mogelijk is gebaseerd op genetische verschillen."
        }
      },
      {
        question: {
          en: "Which concept explains how beneficial alleles can be lost due to random sampling in small populations?",
          es: "¿Qué concepto explica cómo alelos beneficiosos pueden perderse debido a muestreo aleatorio en poblaciones pequeñas?",
          de: "Welches Konzept erklärt, wie vorteilhafte Allele durch zufällige Stichprobenziehung in kleinen Populationen verloren gehen können?",
          nl: "Welk concept verklaart hoe gunstige allelen verloren kunnen gaan door willekeurige bemonstering in kleine populaties?"
        },
        options: [
          { en: "Genetic drift", es: "Deriva genética", de: "Genetische Drift", nl: "Genetische drift" },
          { en: "Natural selection", es: "Selección natural", de: "Natürliche Selektion", nl: "Natuurlijke selectie" },
          { en: "Gene flow", es: "Flujo génico", de: "Genfluss", nl: "Genenstroom" },
          { en: "Mutation pressure", es: "Presión de mutación", de: "Mutationsdruck", nl: "Mutatiedruk" }
        ],
        correct: 0,
        explanation: {
          en: "Genetic drift is the random change in allele frequencies due to sampling effects, which can be strong in small populations and can cause even beneficial alleles to be lost by chance.",
          es: "La deriva genética es el cambio aleatorio en frecuencias alélicas debido a efectos de muestreo, que puede ser fuerte en poblaciones pequeñas y puede causar que incluso alelos beneficiosos se pierdan por casualidad.",
          de: "Genetische Drift ist die zufällige Änderung in Allelfrequenzen aufgrund von Stichprobeneffekten, die in kleinen Populationen stark sein kann und sogar vorteilhafte Allele zufällig verloren gehen lassen kann.",
          nl: "Genetische drift is de willekeurige verandering in allelfrequenties door bemonsteringseffecten, die sterk kan zijn in kleine populaties en zelfs gunstige allelen bij toeval kan doen verdwijnen."
        }
      },
      {
        question: {
          en: "What is the Hardy-Weinberg principle's main assumption about population genetics?",
          es: "¿Cuál es la suposición principal del principio de Hardy-Weinberg sobre genética de poblaciones?",
          de: "Was ist die Hauptannahme des Hardy-Weinberg-Prinzips über Populationsgenetik?",
          nl: "Wat is de hoofdaanname van het Hardy-Weinberg principe over populatiegenetica?"
        },
        options: [
          { en: "Allele frequencies remain constant across generations under specific conditions", es: "Las frecuencias alélicas permanecen constantes a través de generaciones bajo condiciones específicas", de: "Allelfrequenzen bleiben über Generationen unter spezifischen Bedingungen konstant", nl: "Allelfrequenties blijven constant door generaties onder specifieke condities" },
          { en: "Natural selection always increases fitness", es: "La selección natural siempre aumenta la aptitud", de: "Natürliche Selektion erhöht immer die Fitness", nl: "Natuurlijke selectie verhoogt altijd de fitness" },
          { en: "Mutations occur at constant rates", es: "Las mutaciones ocurren a tasas constantes", de: "Mutationen treten mit konstanten Raten auf", nl: "Mutaties treden op met constante snelheden" },
          { en: "Gene flow prevents speciation", es: "El flujo génico previene especiación", de: "Genfluss verhindert Speziation", nl: "Genenstroom voorkomt soortvorming" }
        ],
        correct: 0,
        explanation: {
          en: "The Hardy-Weinberg principle states that allele and genotype frequencies remain constant from generation to generation in the absence of evolutionary forces (mutation, selection, drift, gene flow, non-random mating).",
          es: "El principio de Hardy-Weinberg establece que las frecuencias alélicas y genotípicas permanecen constantes de generación en generación en ausencia de fuerzas evolutivas (mutación, selección, deriva, flujo génico, apareamiento no aleatorio).",
          de: "Das Hardy-Weinberg-Prinzip besagt, dass Allel- und Genotypfrequenzen von Generation zu Generation konstant bleiben in Abwesenheit evolutionärer Kräfte (Mutation, Selektion, Drift, Genfluss, nicht-zufällige Paarung).",
          nl: "Het Hardy-Weinberg principe stelt dat allel- en genotypefrequenties constant blijven van generatie tot generatie bij afwezigheid van evolutionaire krachten (mutatie, selectie, drift, genenstroom, niet-willekeurige paring)."
        }
      },
      {
        question: {
          en: "Which evolutionary process is primarily responsible for adaptive radiation?",
          es: "¿Qué proceso evolutivo es principalmente responsable de la radiación adaptativa?",
          de: "Welcher evolutionäre Prozess ist hauptsächlich für adaptive Radiation verantwortlich?",
          nl: "Welk evolutionair proces is hoofdzakelijk verantwoordelijk voor adaptieve radiatie?"
        },
        options: [
          { en: "Diversifying selection in response to ecological opportunity", es: "Selección diversificadora en respuesta a oportunidad ecológica", de: "Diversifizierende Selektion als Antwort auf ökologische Gelegenheit", nl: "Diversificerende selectie als reactie op ecologische kans" },
          { en: "Genetic bottlenecks", es: "Cuellos de botella genéticos", de: "Genetische Flaschenhälse", nl: "Genetische knelpunten" },
          { en: "Inbreeding depression", es: "Depresión por endogamia", de: "Inzuchtdepression", nl: "Inteeltdepressie" },
          { en: "Neutral evolution", es: "Evolución neutral", de: "Neutrale Evolution", nl: "Neutrale evolutie" }
        ],
        correct: 0,
        explanation: {
          en: "Adaptive radiation occurs when a single ancestral species rapidly diversifies into multiple species adapted to different ecological niches, primarily driven by diversifying selection pressures.",
          es: "La radiación adaptativa ocurre cuando una sola especie ancestral se diversifica rápidamente en múltiples especies adaptadas a diferentes nichos ecológicos, impulsada principalmente por presiones de selección diversificadoras.",
          de: "Adaptive Radiation tritt auf, wenn sich eine einzelne Ahnenart schnell in mehrere Arten diversifiziert, die an verschiedene ökologische Nischen angepasst sind, hauptsächlich durch diversifizierende Selektionsdrücke angetrieben.",
          nl: "Adaptieve radiatie treedt op wanneer een enkele voorouderlijke soort snel diversificeert in meerdere soorten aangepast aan verschillende ecologische niches, hoofdzakelijk gedreven door diversificerende selectiedruk."
        }
      },
      {
        question: {
          en: "What is the difference between homologous and analogous structures in evolutionary biology?",
          es: "¿Cuál es la diferencia entre estructuras homólogas y análogas en biología evolutiva?",
          de: "Was ist der Unterschied zwischen homologen und analogen Strukturen in der Evolutionsbiologie?",
          nl: "Wat is het verschil tussen homologe en analoge structuren in evolutionaire biologie?"
        },
        options: [
          { en: "Homologous structures share common ancestry; analogous structures have similar function but different origins", es: "Estructuras homólogas comparten ancestría común; estructuras análogas tienen función similar pero orígenes diferentes", de: "Homologe Strukturen teilen gemeinsame Abstammung; analoge Strukturen haben ähnliche Funktion aber verschiedene Ursprünge", nl: "Homologe structuren delen gemeenschappelijke afstamming; analoge structuren hebben vergelijkbare functie maar verschillende oorsprong" },
          { en: "Homologous structures are functional; analogous structures are vestigial", es: "Estructuras homólogas son funcionales; estructuras análogas son vestigiales", de: "Homologe Strukturen sind funktional; analoge Strukturen sind rudimentär", nl: "Homologe structuren zijn functioneel; analoge structuren zijn rudimentair" },
          { en: "Homologous structures are recent; analogous structures are ancient", es: "Estructuras homólogas son recientes; estructuras análogas son antiguas", de: "Homologe Strukturen sind neu; analoge Strukturen sind alt", nl: "Homologe structuren zijn recent; analoge structuren zijn oud" },
          { en: "There is no significant difference", es: "No hay diferencia significativa", de: "Es gibt keinen signifikanten Unterschied", nl: "Er is geen significant verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Homologous structures are derived from a common ancestor and may have different functions (like bird wings and human arms), while analogous structures have similar functions but evolved independently (like bird wings and insect wings).",
          es: "Las estructuras homólogas se derivan de un ancestro común y pueden tener funciones diferentes (como alas de ave y brazos humanos), mientras que las estructuras análogas tienen funciones similares pero evolucionaron independientemente (como alas de ave y alas de insecto).",
          de: "Homologe Strukturen stammen von einem gemeinsamen Vorfahren ab und können verschiedene Funktionen haben (wie Vogelflügel und menschliche Arme), während analoge Strukturen ähnliche Funktionen haben, aber unabhängig evolviert sind (wie Vogelflügel und Insektenflügel).",
          nl: "Homologe structuren zijn afgeleid van een gemeenschappelijke voorouder en kunnen verschillende functies hebben (zoals vogelvleugels en menselijke armen), terwijl analoge structuren vergelijkbare functies hebben maar onafhankelijk evolueerden (zoals vogelvleugels en insectenvleugels)."
        }
      },
      {
        question: {
          en: "Which phylogenetic method uses maximum likelihood to estimate evolutionary relationships?",
          es: "¿Qué método filogenético usa máxima verosimilitud para estimar relaciones evolutivas?",
          de: "Welche phylogenetische Methode verwendet Maximum-Likelihood zur Schätzung evolutionärer Beziehungen?",
          nl: "Welke fylogenetische methode gebruikt maximum likelihood om evolutionaire verwantschappen te schatten?"
        },
        options: [
          { en: "ML phylogeny reconstruction", es: "Reconstrucción filogenética ML", de: "ML-Phylogenie-Rekonstruktion", nl: "ML fylogenie reconstructie" },
          { en: "Neighbor-joining only", es: "Solo neighbor-joining", de: "Nur Neighbor-Joining", nl: "Alleen neighbor-joining" },
          { en: "UPGMA clustering", es: "Agrupamiento UPGMA", de: "UPGMA-Clustering", nl: "UPGMA clustering" },
          { en: "Parsimony analysis", es: "Análisis de parsimonia", de: "Parsimonie-Analyse", nl: "Parsimonie analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Maximum likelihood (ML) phylogenetic reconstruction estimates the evolutionary tree that has the highest probability of producing the observed sequence data, given a specific model of sequence evolution.",
          es: "La reconstrucción filogenética de máxima verosimilitud (ML) estima el árbol evolutivo que tiene la mayor probabilidad de producir los datos de secuencia observados, dado un modelo específico de evolución de secuencia.",
          de: "Maximum-Likelihood (ML) phylogenetische Rekonstruktion schätzt den evolutionären Baum, der die höchste Wahrscheinlichkeit hat, die beobachteten Sequenzdaten zu produzieren, gegeben ein spezifisches Modell der Sequenzevolution.",
          nl: "Maximum likelihood (ML) fylogenetische reconstructie schat de evolutionaire boom die de hoogste waarschijnlijkheid heeft om de waargenomen sequentiedata te produceren, gegeven een specifiek model van sequentie-evolutie."
        }
      },
      {
        question: {
          en: "What is the founder effect in population genetics?",
          es: "¿Cuál es el efecto fundador en genética de poblaciones?",
          de: "Was ist der Gründereffekt in der Populationsgenetik?",
          nl: "Wat is het oprichterseffect in populatiegenetica?"
        },
        options: [
          { en: "Reduced genetic diversity when a small group establishes a new population", es: "Diversidad genética reducida cuando un grupo pequeño establece una nueva población", de: "Reduzierte genetische Vielfalt, wenn eine kleine Gruppe eine neue Population gründet", nl: "Verminderde genetische diversiteit wanneer een kleine groep een nieuwe populatie vestigt" },
          { en: "Increased mutation rates in new environments", es: "Tasas de mutación aumentadas en nuevos ambientes", de: "Erhöhte Mutationsraten in neuen Umgebungen", nl: "Verhoogde mutatiepercentages in nieuwe omgevingen" },
          { en: "Enhanced natural selection", es: "Selección natural mejorada", de: "Verstärkte natürliche Selektion", nl: "Verbeterde natuurlijke selectie" },
          { en: "Rapid speciation events", es: "Eventos de especiación rápida", de: "Schnelle Speziationsereignisse", nl: "Snelle soortvormingsgebeurtenissen" }
        ],
        correct: 0,
        explanation: {
          en: "The founder effect occurs when a new population is established by a small number of individuals from a larger population, resulting in reduced genetic diversity and potential genetic drift in the founding population.",
          es: "El efecto fundador ocurre cuando una nueva población es establecida por un número pequeño de individuos de una población mayor, resultando en diversidad genética reducida y deriva genética potencial en la población fundadora.",
          de: "Der Gründereffekt tritt auf, wenn eine neue Population von einer kleinen Anzahl von Individuen aus einer größeren Population gegründet wird, was zu reduzierter genetischer Vielfalt und potentieller genetischer Drift in der Gründerpopulation führt.",
          nl: "Het oprichterseffect treedt op wanneer een nieuwe populatie wordt gevestigd door een klein aantal individuen uit een grotere populatie, wat resulteert in verminderde genetische diversiteit en potentiële genetische drift in de oprichterspopulatie."
        }
      },
      {
        question: {
          en: "Which concept describes the evolution of complex traits through intermediate steps that each provide adaptive advantage?",
          es: "¿Qué concepto describe la evolución de rasgos complejos a través de pasos intermedios que cada uno proporciona ventaja adaptativa?",
          de: "Welches Konzept beschreibt die Evolution komplexer Merkmale durch Zwischenschritte, die jeweils adaptiven Vorteil bieten?",
          nl: "Welk concept beschrijft de evolutie van complexe eigenschappen door tussentijdse stappen die elk adaptief voordeel bieden?"
        },
        options: [
          { en: "Gradualism and cumulative selection", es: "Gradualismo y selección acumulativa", de: "Gradualismus und kumulative Selektion", nl: "Gradualisme en cumulatieve selectie" },
          { en: "Saltation theory", es: "Teoría de saltación", de: "Saltationstheorie", nl: "Saltatietheorie" },
          { en: "Neutral theory", es: "Teoría neutral", de: "Neutrale Theorie", nl: "Neutrale theorie" },
          { en: "Orthogenesis", es: "Ortogénesis", de: "Orthogenese", nl: "Orthogenese" }
        ],
        correct: 0,
        explanation: {
          en: "Gradualism with cumulative selection explains how complex traits like eyes can evolve through many small steps, each providing some adaptive advantage, rather than appearing suddenly fully formed.",
          es: "El gradualismo con selección acumulativa explica cómo rasgos complejos como los ojos pueden evolucionar a través de muchos pasos pequeños, cada uno proporcionando alguna ventaja adaptativa, en lugar de aparecer súbitamente completamente formados.",
          de: "Gradualismus mit kumulativer Selektion erklärt, wie komplexe Merkmale wie Augen durch viele kleine Schritte evolvieren können, die jeweils einen adaptiven Vorteil bieten, anstatt plötzlich vollständig ausgebildet zu erscheinen.",
          nl: "Gradualisme met cumulatieve selectie verklaart hoe complexe eigenschappen zoals ogen kunnen evolueren door vele kleine stappen, elk met enig adaptief voordeel, in plaats van plotseling volledig gevormd te verschijnen."
        }
      },
      {
        question: {
          en: "What is the Red Queen hypothesis in evolutionary biology?",
          es: "¿Cuál es la hipótesis de la Reina Roja en biología evolutiva?",
          de: "Was ist die Red-Queen-Hypothese in der Evolutionsbiologie?",
          nl: "Wat is de Red Queen hypothese in evolutionaire biologie?"
        },
        options: [
          { en: "Species must constantly evolve to maintain fitness in changing environments", es: "Las especies deben evolucionar constantemente para mantener aptitud en ambientes cambiantes", de: "Arten müssen ständig evolvieren, um Fitness in sich verändernden Umgebungen zu erhalten", nl: "Soorten moeten constant evolueren om fitness te behouden in veranderende omgevingen" },
          { en: "Evolution proceeds in discrete jumps", es: "La evolución procede en saltos discretos", de: "Evolution verläuft in diskreten Sprüngen", nl: "Evolutie verloopt in discrete sprongen" },
          { en: "Females always choose the strongest males", es: "Las hembras siempre eligen los machos más fuertes", de: "Weibchen wählen immer die stärksten Männchen", nl: "Vrouwtjes kiezen altijd de sterkste mannetjes" },
          { en: "Competition leads to extinction", es: "La competencia lleva a extinción", de: "Konkurrenz führt zur Ausrottung", nl: "Competitie leidt tot uitsterven" }
        ],
        correct: 0,
        explanation: {
          en: "The Red Queen hypothesis suggests that organisms must constantly evolve and adapt just to maintain their relative fitness, especially in response to co-evolving competitors, parasites, or changing environments.",
          es: "La hipótesis de la Reina Roja sugiere que los organismos deben evolucionar y adaptarse constantemente solo para mantener su aptitud relativa, especialmente en respuesta a competidores co-evolutivos, parásitos o ambientes cambiantes.",
          de: "Die Red-Queen-Hypothese schlägt vor, dass Organismen ständig evolvieren und sich anpassen müssen, nur um ihre relative Fitness zu erhalten, besonders als Antwort auf ko-evolvierende Konkurrenten, Parasiten oder sich verändernde Umgebungen.",
          nl: "De Red Queen hypothese suggereert dat organismen constant moeten evolueren en aanpassen alleen om hun relatieve fitness te behouden, vooral als reactie op co-evoluerende concurrenten, parasieten of veranderende omgevingen."
        }
      },
      {
        question: {
          en: "Which molecular technique is most commonly used for DNA barcoding in species identification?",
          es: "¿Qué técnica molecular se usa más comúnmente para código de barras de ADN en identificación de especies?",
          de: "Welche molekulare Technik wird am häufigsten für DNA-Barcoding bei der Artidentifikation verwendet?",
          nl: "Welke moleculaire techniek wordt het meest gebruikt voor DNA-barcoding bij soortidentificatie?"
        },
        options: [
          { en: "COI gene sequencing", es: "Secuenciación del gen COI", de: "COI-Gen-Sequenzierung", nl: "COI gen sequencing" },
          { en: "Whole genome sequencing", es: "Secuenciación de genoma completo", de: "Ganzgenomsequenzierung", nl: "Volledige genoom sequencing" },
          { en: "Protein electrophoresis", es: "Electroforesis de proteínas", de: "Proteinelektrophorese", nl: "Eiwitelektroforese" },
          { en: "Karyotype analysis", es: "Análisis de cariotipo", de: "Karyotyp-Analyse", nl: "Karyotype analyse" }
        ],
        correct: 0,
        explanation: {
          en: "DNA barcoding typically uses the cytochrome c oxidase I (COI) gene in animals, which shows sufficient variation between species while being conserved within species for reliable identification.",
          es: "El código de barras de ADN típicamente usa el gen citocromo c oxidasa I (COI) en animales, que muestra variación suficiente entre especies mientras se conserva dentro de especies para identificación confiable.",
          de: "DNA-Barcoding verwendet typischerweise das Cytochrom-c-Oxidase-I (COI) Gen in Tieren, das ausreichende Variation zwischen Arten zeigt, während es innerhalb von Arten für zuverlässige Identifikation konserviert ist.",
          nl: "DNA-barcoding gebruikt doorgaans het cytochroom c oxidase I (COI) gen bij dieren, dat voldoende variatie tussen soorten toont terwijl het geconserveerd blijft binnen soorten voor betrouwbare identificatie."
        }
      },
      {
        question: {
          en: "What is the difference between anagenesis and cladogenesis in evolutionary biology?",
          es: "¿Cuál es la diferencia entre anagénesis y cladogénesis en biología evolutiva?",
          de: "Was ist der Unterschied zwischen Anagenese und Kladogenese in der Evolutionsbiologie?",
          nl: "Wat is het verschil tussen anagenese en cladogenese in evolutionaire biologie?"
        },
        options: [
          { en: "Anagenesis is evolutionary change within lineages; cladogenesis is lineage splitting", es: "Anagénesis es cambio evolutivo dentro de linajes; cladogénesis es división de linajes", de: "Anagenese ist evolutionärer Wandel innerhalb von Linien; Kladogenese ist Linienteilung", nl: "Anagenese is evolutionaire verandering binnen geslachten; cladogenese is geslachtssplitsing" },
          { en: "Anagenesis creates new species; cladogenesis modifies existing ones", es: "Anagénesis crea nuevas especies; cladogénesis modifica las existentes", de: "Anagenese schafft neue Arten; Kladogenese modifiziert bestehende", nl: "Anagenese creëert nieuwe soorten; cladogenese modificeert bestaande" },
          { en: "Anagenesis is fast; cladogenesis is slow", es: "Anagénesis es rápida; cladogénesis es lenta", de: "Anagenese ist schnell; Kladogenese ist langsam", nl: "Anagenese is snel; cladogenese is langzaam" },
          { en: "They are synonymous terms", es: "Son términos sinónimos", de: "Sie sind synonyme Begriffe", nl: "Het zijn synonieme termen" }
        ],
        correct: 0,
        explanation: {
          en: "Anagenesis refers to evolutionary change within a single lineage over time without splitting, while cladogenesis involves the splitting of an ancestral lineage into two or more descendant lineages.",
          es: "La anagénesis se refiere al cambio evolutivo dentro de un solo linaje a través del tiempo sin división, mientras que la cladogénesis involucra la división de un linaje ancestral en dos o más linajes descendientes.",
          de: "Anagenese bezieht sich auf evolutionären Wandel innerhalb einer einzigen Linie über die Zeit ohne Spaltung, während Kladogenese die Spaltung einer Ahnenlinie in zwei oder mehr Nachkommenlinien beinhaltet.",
          nl: "Anagenese verwijst naar evolutionaire verandering binnen een enkele geslachtslijn over tijd zonder splitsing, terwijl cladogenese de splitsing van een voorouderlijke geslachtslijn in twee of meer afstammelingsgeslachtslijnen behelst."
        }
      },
      {
        question: {
          en: "Which evolutionary concept explains the maintenance of genetic variation in populations despite natural selection?",
          es: "¿Qué concepto evolutivo explica el mantenimiento de variación genética en poblaciones a pesar de selección natural?",
          de: "Welches evolutionäre Konzept erklärt die Aufrechterhaltung genetischer Variation in Populationen trotz natürlicher Selektion?",
          nl: "Welk evolutionair concept verklaart het behoud van genetische variatie in populaties ondanks natuurlijke selectie?"
        },
        options: [
          { en: "Balancing selection and heterozygote advantage", es: "Selección balanceadora y ventaja del heterocigoto", de: "Balancierende Selektion und Heterozygotenvorteil", nl: "Balancerende selectie en heterozygoot voordeel" },
          { en: "Directional selection only", es: "Solo selección direccional", de: "Nur gerichtete Selektion", nl: "Alleen gerichte selectie" },
          { en: "Genetic drift elimination", es: "Eliminación de deriva genética", de: "Eliminierung genetischer Drift", nl: "Eliminatie van genetische drift" },
          { en: "Mutation-selection balance only", es: "Solo equilibrio mutación-selección", de: "Nur Mutation-Selektion-Gleichgewicht", nl: "Alleen mutatie-selectie balans" }
        ],
        correct: 0,
        explanation: {
          en: "Balancing selection maintains genetic diversity through mechanisms like heterozygote advantage, frequency-dependent selection, and environmental heterogeneity, counteracting the homogenizing effects of directional selection.",
          es: "La selección balanceadora mantiene diversidad genética a través de mecanismos como ventaja del heterocigoto, selección dependiente de frecuencia y heterogeneidad ambiental, contrarrestando los efectos homogeneizadores de selección direccional.",
          de: "Balancierende Selektion erhält genetische Vielfalt durch Mechanismen wie Heterozygotenvorteil, frequenzabhängige Selektion und Umweltheterogenität aufrecht und wirkt den homogenisierenden Effekten gerichteter Selektion entgegen.",
          nl: "Balancerende selectie behoudt genetische diversiteit door mechanismen zoals heterozygoot voordeel, frequentie-afhankelijke selectie en omgevingsheterogeniteit, wat de homogeniserende effecten van gerichte selectie tegengaat."
        }
      },
      {
        question: {
          en: "What is the primary method used in cladistic analysis to determine evolutionary relationships?",
          es: "¿Cuál es el método principal usado en análisis cladístico para determinar relaciones evolutivas?",
          de: "Was ist die primäre Methode in der kladistischen Analyse zur Bestimmung evolutionärer Beziehungen?",
          nl: "Wat is de primaire methode die wordt gebruikt in cladistische analyse om evolutionaire verwantschappen te bepalen?"
        },
        options: [
          { en: "Parsimony analysis of shared derived characters", es: "Análisis de parsimonia de caracteres derivados compartidos", de: "Parsimonie-Analyse geteilter abgeleiteter Merkmale", nl: "Parsimonie analyse van gedeelde afgeleide karakters" },
          { en: "Overall morphological similarity", es: "Similitud morfológica general", de: "Allgemeine morphologische Ähnlichkeit", nl: "Algemene morfologische gelijkenis" },
          { en: "Chronological age of fossils", es: "Edad cronológica de fósiles", de: "Chronologisches Alter von Fossilien", nl: "Chronologische leeftijd van fossielen" },
          { en: "Geographic distribution patterns", es: "Patrones de distribución geográfica", de: "Geografische Verteilungsmuster", nl: "Geografische distributiepatronen" }
        ],
        correct: 0,
        explanation: {
          en: "Cladistic analysis uses parsimony to identify the most likely evolutionary tree based on shared derived characters (synapomorphies), which are inherited from common ancestors and indicate monophyletic groups.",
          es: "El análisis cladístico usa parsimonia para identificar el árbol evolutivo más probable basado en caracteres derivados compartidos (sinapomorfías), que son heredados de ancestros comunes e indican grupos monofiléticos.",
          de: "Kladistische Analyse verwendet Parsimonie, um den wahrscheinlichsten evolutionären Baum basierend auf geteilten abgeleiteten Merkmalen (Synapomorphien) zu identifizieren, die von gemeinsamen Vorfahren vererbt werden und monophyletische Gruppen anzeigen.",
          nl: "Cladistische analyse gebruikt parsimonie om de meest waarschijnlijke evolutionaire boom te identificeren gebaseerd op gedeelde afgeleide karakters (synapomorfieën), die geërfd zijn van gemeenschappelijke voorouders en monofyletische groepen aangeven."
        }
      },
      {
        question: {
          en: "Which factor is most important in determining the rate of molecular evolution?",
          es: "¿Qué factor es más importante para determinar la tasa de evolución molecular?",
          de: "Welcher Faktor ist am wichtigsten für die Bestimmung der Rate molekularer Evolution?",
          nl: "Welke factor is het belangrijkst bij het bepalen van de snelheid van moleculaire evolutie?"
        },
        options: [
          { en: "Functional constraints and selection pressure", es: "Restricciones funcionales y presión de selección", de: "Funktionale Beschränkungen und Selektionsdruck", nl: "Functionele beperkingen en selectiedruk" },
          { en: "Population size only", es: "Solo tamaño de población", de: "Nur Populationsgröße", nl: "Alleen populatiegrootte" },
          { en: "Environmental temperature", es: "Temperatura ambiental", de: "Umgebungstemperatur", nl: "Omgevingstemperatuur" },
          { en: "Chromosome number", es: "Número de cromosomas", de: "Chromosomenzahl", nl: "Chromosoomaantal" }
        ],
        correct: 0,
        explanation: {
          en: "The rate of molecular evolution is primarily determined by functional constraints - genes or regions under strong purifying selection evolve slowly, while neutral or less constrained regions evolve more rapidly.",
          es: "La tasa de evolución molecular es determinada principalmente por restricciones funcionales - genes o regiones bajo selección purificadora fuerte evolucionan lentamente, mientras que regiones neutrales o menos restringidas evolucionan más rápidamente.",
          de: "Die Rate molekularer Evolution wird hauptsächlich durch funktionale Beschränkungen bestimmt - Gene oder Regionen unter starker reinigender Selektion evolvieren langsam, während neutrale oder weniger beschränkte Regionen schneller evolvieren.",
          nl: "De snelheid van moleculaire evolutie wordt hoofdzakelijk bepaald door functionele beperkingen - genen of regio's onder sterke zuiverende selectie evolueren langzaam, terwijl neutrale of minder beperkte regio's sneller evolueren."
        }
      },
      {
        question: {
          en: "What is the biological species concept's main criterion for defining species?",
          es: "¿Cuál es el criterio principal del concepto biológico de especie para definir especies?",
          de: "Was ist das Hauptkriterium des biologischen Artkonzepts zur Artdefinition?",
          nl: "Wat is het hoofdcriterium van het biologische soortconcept voor het definiëren van soorten?"
        },
        options: [
          { en: "Reproductive isolation and ability to interbreed", es: "Aislamiento reproductivo y capacidad de cruzarse", de: "Reproduktive Isolation und Fähigkeit zur Kreuzung", nl: "Reproductieve isolatie en vermogen tot kruisen" },
          { en: "Morphological similarity", es: "Similitud morfológica", de: "Morphologische Ähnlichkeit", nl: "Morfologische gelijkenis" },
          { en: "Ecological niche occupation", es: "Ocupación de nicho ecológico", de: "Ökologische Nischenbesetzung", nl: "Ecologische niche bezetting" },
          { en: "Geographic distribution", es: "Distribución geográfica", de: "Geografische Verteilung", nl: "Geografische verspreiding" }
        ],
        correct: 0,
        explanation: {
          en: "The biological species concept defines species as groups of actually or potentially interbreeding natural populations that are reproductively isolated from other such groups.",
          es: "El concepto biológico de especie define especies como grupos de poblaciones naturales que se cruzan actual o potencialmente y están reproductivamente aisladas de otros grupos similares.",
          de: "Das biologische Artkonzept definiert Arten als Gruppen von tatsächlich oder potentiell sich kreuzenden natürlichen Populationen, die reproduktiv von anderen solchen Gruppen isoliert sind.",
          nl: "Het biologische soortconcept definieert soorten als groepen van werkelijk of potentieel kruisende natuurlijke populaties die reproductief geïsoleerd zijn van andere dergelijke groepen."
        }
      },
      {
        question: {
          en: "Which mechanism explains the evolution of altruistic behavior in social species?",
          es: "¿Qué mecanismo explica la evolución del comportamiento altruista en especies sociales?",
          de: "Welcher Mechanismus erklärt die Evolution altruistischen Verhaltens in sozialen Arten?",
          nl: "Welk mechanisme verklaart de evolutie van altruïstisch gedrag bij sociale soorten?"
        },
        options: [
          { en: "Kin selection and inclusive fitness", es: "Selección de parentesco y aptitud inclusiva", de: "Verwandtenselektion und inklusive Fitness", nl: "Verwantschapsselectie en inclusieve fitness" },
          { en: "Individual natural selection only", es: "Solo selección natural individual", de: "Nur individuelle natürliche Selektion", nl: "Alleen individuele natuurlijke selectie" },
          { en: "Random genetic drift", es: "Deriva genética aleatoria", de: "Zufällige genetische Drift", nl: "Willekeurige genetische drift" },
          { en: "Environmental pressure", es: "Presión ambiental", de: "Umweltdruck", nl: "Omgevingsdruk" }
        ],
        correct: 0,
        explanation: {
          en: "Kin selection explains altruistic behavior through inclusive fitness - individuals can increase their genetic contribution to future generations by helping relatives, even at personal cost, because relatives share genes.",
          es: "La selección de parentesco explica comportamiento altruista a través de aptitud inclusiva - individuos pueden aumentar su contribución genética a futuras generaciones ayudando parientes, incluso con costo personal, porque parientes comparten genes.",
          de: "Verwandtenselektion erklärt altruistisches Verhalten durch inklusive Fitness - Individuen können ihren genetischen Beitrag zu zukünftigen Generationen erhöhen, indem sie Verwandten helfen, selbst auf persönliche Kosten, weil Verwandte Gene teilen.",
          nl: "Verwantschapsselectie verklaart altruïstisch gedrag door inclusieve fitness - individuen kunnen hun genetische bijdrage aan toekomstige generaties verhogen door verwanten te helpen, zelfs ten koste van zichzelf, omdat verwanten genen delen."
        }
      },
      {
        question: {
          en: "What is the difference between convergent and parallel evolution?",
          es: "¿Cuál es la diferencia entre evolución convergente y paralela?",
          de: "Was ist der Unterschied zwischen konvergenter und paralleler Evolution?",
          nl: "Wat is het verschil tussen convergente en parallelle evolutie?"
        },
        options: [
          { en: "Convergent evolution involves distantly related species; parallel evolution involves closely related species", es: "Evolución convergente involucra especies distantemente relacionadas; evolución paralela involucra especies cercanamente relacionadas", de: "Konvergente Evolution betrifft entfernt verwandte Arten; parallele Evolution betrifft nah verwandte Arten", nl: "Convergente evolutie betreft ver verwante soorten; parallelle evolutie betreft nauw verwante soorten" },
          { en: "Convergent evolution is fast; parallel evolution is slow", es: "Evolución convergente es rápida; evolución paralela es lenta", de: "Konvergente Evolution ist schnell; parallele Evolution ist langsam", nl: "Convergente evolutie is snel; parallelle evolutie is langzaam" },
          { en: "They are identical processes", es: "Son procesos idénticos", de: "Sie sind identische Prozesse", nl: "Het zijn identieke processen" },
          { en: "Convergent evolution requires mutations; parallel evolution does not", es: "Evolución convergente requiere mutaciones; evolución paralela no", de: "Konvergente Evolution erfordert Mutationen; parallele Evolution nicht", nl: "Convergente evolutie vereist mutaties; parallelle evolutie niet" }
        ],
        correct: 0,
        explanation: {
          en: "Convergent evolution occurs when distantly related species independently evolve similar traits (like wings in bats and birds), while parallel evolution occurs when closely related species independently evolve similar traits.",
          es: "La evolución convergente ocurre cuando especies distantemente relacionadas evolucionan independientemente rasgos similares (como alas en murciélagos y aves), mientras que evolución paralela ocurre cuando especies cercanamente relacionadas evolucionan independientemente rasgos similares.",
          de: "Konvergente Evolution tritt auf, wenn entfernt verwandte Arten unabhängig ähnliche Merkmale entwickeln (wie Flügel bei Fledermäusen und Vögeln), während parallele Evolution auftritt, wenn nah verwandte Arten unabhängig ähnliche Merkmale entwickeln.",
          nl: "Convergente evolutie treedt op wanneer ver verwante soorten onafhankelijk vergelijkbare eigenschappen ontwikkelen (zoals vleugels bij vleermuizen en vogels), terwijl parallelle evolutie optreedt wanneer nauw verwante soorten onafhankelijk vergelijkbare eigenschappen ontwikkelen."
        }
      },
      {
        question: {
          en: "Which evolutionary process can lead to speciation without geographic isolation?",
          es: "¿Qué proceso evolutivo puede llevar a especiación sin aislamiento geográfico?",
          de: "Welcher evolutionäre Prozess kann zu Speziation ohne geografische Isolation führen?",
          nl: "Welk evolutionair proces kan leiden tot soortvorming zonder geografische isolatie?"
        },
        options: [
          { en: "Sympatric speciation through polyploidy or disruptive selection", es: "Especiación simpátrica a través de poliploidía o selección disruptiva", de: "Sympatrische Speziation durch Polyploidie oder disruptive Selektion", nl: "Sympatrische soortvorming door polyploïdie of verstorende selectie" },
          { en: "Allopatric speciation only", es: "Solo especiación alopátrica", de: "Nur allopatrische Speziation", nl: "Alleen allopatrische soortvorming" },
          { en: "Genetic drift alone", es: "Solo deriva genética", de: "Nur genetische Drift", nl: "Alleen genetische drift" },
          { en: "Migration patterns", es: "Patrones de migración", de: "Migrationsmuster", nl: "Migratiepatronen" }
        ],
        correct: 0,
        explanation: {
          en: "Sympatric speciation can occur without geographic barriers through mechanisms like polyploidy in plants, chromosomal rearrangements, or strong disruptive selection that creates reproductive isolation within the same location.",
          es: "La especiación simpátrica puede ocurrir sin barreras geográficas a través de mecanismos como poliploidía en plantas, reordenamientos cromosómicos, o selección disruptiva fuerte que crea aislamiento reproductivo dentro de la misma ubicación.",
          de: "Sympatrische Speziation kann ohne geografische Barrieren durch Mechanismen wie Polyploidie in Pflanzen, chromosomale Umordnungen oder starke disruptive Selektion auftreten, die reproduktive Isolation am selben Ort schafft.",
          nl: "Sympatrische soortvorming kan optreden zonder geografische barrières door mechanismen zoals polyploïdie bij planten, chromosomale herschikkingen, of sterke verstorende selectie die reproductieve isolatie creëert binnen dezelfde locatie."
        }
      },
      {
        question: {
          en: "What is the neutral theory of molecular evolution's main proposition?",
          es: "¿Cuál es la proposición principal de la teoría neutral de evolución molecular?",
          de: "Was ist die Hauptaussage der neutralen Theorie der molekularen Evolution?",
          nl: "Wat is de hoofdstelling van de neutrale theorie van moleculaire evolutie?"
        },
        options: [
          { en: "Most molecular evolution is driven by neutral mutations and genetic drift", es: "La mayoría de evolución molecular es impulsada por mutaciones neutrales y deriva genética", de: "Die meiste molekulare Evolution wird durch neutrale Mutationen und genetische Drift angetrieben", nl: "De meeste moleculaire evolutie wordt gedreven door neutrale mutaties en genetische drift" },
          { en: "All mutations are beneficial", es: "Todas las mutaciones son beneficiosas", de: "Alle Mutationen sind vorteilhaft", nl: "Alle mutaties zijn gunstig" },
          { en: "Natural selection is the only evolutionary force", es: "Selección natural es la única fuerza evolutiva", de: "Natürliche Selektion ist die einzige evolutionäre Kraft", nl: "Natuurlijke selectie is de enige evolutionaire kracht" },
          { en: "Evolution does not occur at molecular level", es: "Evolución no ocurre a nivel molecular", de: "Evolution findet nicht auf molekularer Ebene statt", nl: "Evolutie vindt niet plaats op moleculair niveau" }
        ],
        correct: 0,
        explanation: {
          en: "The neutral theory proposes that the majority of molecular evolution results from the random fixation of selectively neutral mutations through genetic drift, rather than adaptive natural selection.",
          es: "La teoría neutral propone que la mayoría de evolución molecular resulta de la fijación aleatoria de mutaciones selectivamente neutrales a través de deriva genética, en lugar de selección natural adaptativa.",
          de: "Die neutrale Theorie schlägt vor, dass die Mehrheit der molekularen Evolution aus der zufälligen Fixierung selektiv neutraler Mutationen durch genetische Drift resultiert, anstatt aus adaptiver natürlicher Selektion.",
          nl: "De neutrale theorie stelt voor dat de meerderheid van moleculaire evolutie resulteert uit willekeurige fixatie van selectief neutrale mutaties door genetische drift, in plaats van adaptieve natuurlijke selectie."
        }
      },
      {
        question: {
          en: "Which concept describes the evolutionary relationship between predators and prey over time?",
          es: "¿Qué concepto describe la relación evolutiva entre depredadores y presas a través del tiempo?",
          de: "Welches Konzept beschreibt die evolutionäre Beziehung zwischen Raubtieren und Beute über die Zeit?",
          nl: "Welk concept beschrijft de evolutionaire relatie tussen roofdieren en prooien over tijd?"
        },
        options: [
          { en: "Coevolutionary arms race", es: "Carrera armamentista coevolutiva", de: "Koevolutionäres Wettrüsten", nl: "Co-evolutionaire wapenwedloop" },
          { en: "Mutualistic symbiosis", es: "Simbiosis mutualista", de: "Mutualistische Symbiose", nl: "Mutualistische symbiose" },
          { en: "Competitive exclusion", es: "Exclusión competitiva", de: "Konkurrenzausschluss", nl: "Competitieve uitsluiting" },
          { en: "Neutral drift", es: "Deriva neutral", de: "Neutrale Drift", nl: "Neutrale drift" }
        ],
        correct: 0,
        explanation: {
          en: "Coevolutionary arms races occur when predators and prey continuously evolve counter-adaptations - as prey develop better defenses, predators evolve better hunting abilities, and vice versa.",
          es: "Las carreras armamentistas coevolutivas ocurren cuando depredadores y presas evolucionan continuamente contra-adaptaciones - mientras presas desarrollan mejores defensas, depredadores evolucionan mejores habilidades de caza, y viceversa.",
          de: "Koevolutionäre Wettrüsten treten auf, wenn Raubtiere und Beute kontinuierlich Gegen-Anpassungen entwickeln - während Beute bessere Verteidigungen entwickelt, entwickeln Raubtiere bessere Jagdfähigkeiten, und umgekehrt.",
          nl: "Co-evolutionaire wapenwedlopen treden op wanneer roofdieren en prooien voortdurend tegen-aanpassingen ontwikkelen - terwijl prooien betere verdediging ontwikkelen, evolueren roofdieren betere jachtvaardigheden, en omgekeerd."
        }
      },
      {
        question: {
          en: "What is the role of sexual selection in evolution?",
          es: "¿Cuál es el papel de la selección sexual en evolución?",
          de: "Was ist die Rolle der sexuellen Selektion in der Evolution?",
          nl: "Wat is de rol van seksuele selectie in evolutie?"
        },
        options: [
          { en: "Drives evolution of traits that enhance mating success rather than survival", es: "Impulsa evolución de rasgos que mejoran éxito de apareamiento en lugar de supervivencia", de: "Treibt Evolution von Merkmalen an, die Paarungserfolg statt Überleben verbessern", nl: "Drijft evolutie aan van eigenschappen die paringssucces verbeteren in plaats van overleving" },
          { en: "Only affects survival-related traits", es: "Solo afecta rasgos relacionados con supervivencia", de: "Beeinflusst nur überlebensbezogene Merkmale", nl: "Beïnvloedt alleen overlevingsgerelateerde eigenschappen" },
          { en: "Eliminates sexual dimorphism", es: "Elimina dimorfismo sexual", de: "Eliminiert Geschlechtsdimorphismus", nl: "Elimineert seksueel dimorfisme" },
          { en: "Prevents reproductive isolation", es: "Previene aislamiento reproductivo", de: "Verhindert reproduktive Isolation", nl: "Voorkomt reproductieve isolatie" }
        ],
        correct: 0,
        explanation: {
          en: "Sexual selection drives the evolution of traits that may reduce survival but increase reproductive success, such as elaborate displays, bright colors, or competitive behaviors that attract mates or intimidate rivals.",
          es: "La selección sexual impulsa la evolución de rasgos que pueden reducir supervivencia pero aumentan éxito reproductivo, como exhibiciones elaboradas, colores brillantes, o comportamientos competitivos que atraen parejas o intimidan rivales.",
          de: "Sexuelle Selektion treibt die Evolution von Merkmalen an, die das Überleben reduzieren aber den Fortpflanzungserfolg erhöhen können, wie aufwendige Displays, helle Farben oder kompetitive Verhaltensweisen, die Partner anziehen oder Rivalen einschüchtern.",
          nl: "Seksuele selectie drijft de evolutie aan van eigenschappen die overleving kunnen verminderen maar reproductief succes verhogen, zoals uitgebreide vertoningen, heldere kleuren, of competitief gedrag dat partners aantrekt of rivalen intimideert."
        }
      },
      {
        question: {
          en: "Which phylogenetic tree property indicates a well-supported evolutionary relationship?",
          es: "¿Qué propiedad del árbol filogenético indica una relación evolutiva bien respaldada?",
          de: "Welche phylogenetische Baumeigenschaft zeigt eine gut unterstützte evolutionäre Beziehung an?",
          nl: "Welke fylogenetische boom eigenschap duidt op een goed ondersteunde evolutionaire verwantschap?"
        },
        options: [
          { en: "High bootstrap values or posterior probabilities", es: "Valores altos de bootstrap o probabilidades posteriores", de: "Hohe Bootstrap-Werte oder posteriore Wahrscheinlichkeiten", nl: "Hoge bootstrap waarden of posterieure waarschijnlijkheden" },
          { en: "Long branch lengths only", es: "Solo longitudes de rama largas", de: "Nur lange Astlängen", nl: "Alleen lange takengtes" },
          { en: "Many terminal taxa", es: "Muchos taxa terminales", de: "Viele terminale Taxa", nl: "Veel terminale taxa" },
          { en: "Short tree height", es: "Altura de árbol corta", de: "Kurze Baumhöhe", nl: "Korte boomhoogte" }
        ],
        correct: 0,
        explanation: {
          en: "Bootstrap values (in maximum likelihood/parsimony) or posterior probabilities (in Bayesian analysis) above 70-95% indicate strong statistical support for particular branching patterns in phylogenetic trees.",
          es: "Valores de bootstrap (en máxima verosimilitud/parsimonia) o probabilidades posteriores (en análisis bayesiano) arriba de 70-95% indican fuerte soporte estadístico para patrones de ramificación particulares en árboles filogenéticos.",
          de: "Bootstrap-Werte (in Maximum-Likelihood/Parsimonie) oder posteriore Wahrscheinlichkeiten (in Bayesianischer Analyse) über 70-95% zeigen starke statistische Unterstützung für bestimmte Verzweigungsmuster in phylogenetischen Bäumen an.",
          nl: "Bootstrap waarden (in maximum likelihood/parsimonie) of posterieure waarschijnlijkheden (in Bayesiaanse analyse) boven 70-95% duiden op sterke statistische ondersteuning voor bepaalde vertakkingspatronen in fylogenetische bomen."
        }
      },
      {
        question: {
          en: "What is the difference between orthologous and paralogous genes?",
          es: "¿Cuál es la diferencia entre genes ortólogos y parálogos?",
          de: "Was ist der Unterschied zwischen orthologen und paralogen Genen?",
          nl: "Wat is het verschil tussen orthologe en paraloge genen?"
        },
        options: [
          { en: "Orthologs are in different species from common ancestor; paralogs are in same species from gene duplication", es: "Ortólogos están en especies diferentes de ancestro común; parálogos están en misma especie de duplicación génica", de: "Orthologe sind in verschiedenen Arten von gemeinsamem Vorfahren; Paraloge sind in derselben Art von Genduplikation", nl: "Orthologen zijn in verschillende soorten van gemeenschappelijke voorouder; paralogen zijn in dezelfde soort van genduplicatie" },
          { en: "Orthologs have identical functions; paralogs have different functions", es: "Ortólogos tienen funciones idénticas; parálogos tienen funciones diferentes", de: "Orthologe haben identische Funktionen; Paraloge haben verschiedene Funktionen", nl: "Orthologen hebben identieke functies; paralogen hebben verschillende functies" },
          { en: "Orthologs are newer; paralogs are older", es: "Ortólogos son más nuevos; parálogos son más viejos", de: "Orthologe sind neuer; Paraloge sind älter", nl: "Orthologen zijn nieuwer; paralogen zijn ouder" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Orthologous genes are homologous genes in different species that evolved from a common ancestor by speciation, while paralogous genes are homologous genes within the same species that evolved by gene duplication.",
          es: "Los genes ortólogos son genes homólogos en especies diferentes que evolucionaron de un ancestro común por especiación, mientras que genes parálogos son genes homólogos dentro de la misma especie que evolucionaron por duplicación génica.",
          de: "Orthologe Gene sind homologe Gene in verschiedenen Arten, die von einem gemeinsamen Vorfahren durch Speziation evolviert sind, während paraloge Gene homologe Gene innerhalb derselben Art sind, die durch Genduplikation evolviert sind.",
          nl: "Orthologe genen zijn homologe genen in verschillende soorten die evolueerden van een gemeenschappelijke voorouder door soortvorming, terwijl paraloge genen homologe genen zijn binnen dezelfde soort die evolueerden door genduplicatie."
        }
      },
      {
        question: {
          en: "Which mechanism can cause rapid evolutionary change in small populations?",
          es: "¿Qué mecanismo puede causar cambio evolutivo rápido en poblaciones pequeñas?",
          de: "Welcher Mechanismus kann schnellen evolutionären Wandel in kleinen Populationen verursachen?",
          nl: "Welk mechanisme kan snelle evolutionaire verandering veroorzaken in kleine populaties?"
        },
        options: [
          { en: "Genetic bottlenecks followed by rapid expansion", es: "Cuellos de botella genéticos seguidos de expansión rápida", de: "Genetische Flaschenhälse gefolgt von schneller Expansion", nl: "Genetische knelpunten gevolgd door snelle expansie" },
          { en: "Stabilizing selection only", es: "Solo selección estabilizadora", de: "Nur stabilisierende Selektion", nl: "Alleen stabiliserende selectie" },
          { en: "Perfect Hardy-Weinberg equilibrium", es: "Equilibrio perfecto de Hardy-Weinberg", de: "Perfektes Hardy-Weinberg-Gleichgewicht", nl: "Perfect Hardy-Weinberg evenwicht" },
          { en: "Absence of mutations", es: "Ausencia de mutaciones", de: "Abwesenheit von Mutationen", nl: "Afwezigheid van mutaties" }
        ],
        correct: 0,
        explanation: {
          en: "Genetic bottlenecks drastically reduce genetic diversity, and when populations rapidly expand afterward, the limited genetic variation can lead to quick evolutionary changes through founder effects and drift.",
          es: "Los cuellos de botella genéticos reducen drásticamente diversidad genética, y cuando poblaciones se expanden rápidamente después, la variación genética limitada puede llevar a cambios evolutivos rápidos a través de efectos fundadores y deriva.",
          de: "Genetische Flaschenhälse reduzieren genetische Vielfalt drastisch, und wenn Populationen danach schnell expandieren, kann die begrenzte genetische Variation zu schnellen evolutionären Änderungen durch Gründereffekte und Drift führen.",
          nl: "Genetische knelpunten verminderen genetische diversiteit drastisch, en wanneer populaties daarna snel uitbreiden, kan de beperkte genetische variatie leiden tot snelle evolutionaire veranderingen door oprichterseffecten en drift."
        }
      },
      {
        question: {
          en: "What is the primary evidence for endosymbiotic theory of organelle evolution?",
          es: "¿Cuál es la evidencia principal para la teoría endosimbiótica de evolución de orgánulos?",
          de: "Was ist der primäre Beweis für die endosymbiotische Theorie der Organellenevolution?",
          nl: "Wat is het primaire bewijs voor de endosymbiotische theorie van organellenevolutie?"
        },
        options: [
          { en: "Mitochondria and chloroplasts have their own DNA and ribosomes similar to bacteria", es: "Mitocondrias y cloroplastos tienen su propio ADN y ribosomas similares a bacterias", de: "Mitochondrien und Chloroplasten haben ihre eigene DNA und Ribosomen ähnlich Bakterien", nl: "Mitochondriën en chloroplasten hebben hun eigen DNA en ribosomen vergelijkbaar met bacteriën" },
          { en: "They are found in all cell types", es: "Se encuentran en todos los tipos celulares", de: "Sie werden in allen Zelltypen gefunden", nl: "Ze worden gevonden in alle celtypen" },
          { en: "They are larger than nuclei", es: "Son más grandes que núcleos", de: "Sie sind größer als Zellkerne", nl: "Ze zijn groter dan kernen" },
          { en: "They lack membranes", es: "Carecen de membranas", de: "Ihnen fehlen Membranen", nl: "Ze missen membranen" }
        ],
        correct: 0,
        explanation: {
          en: "The endosymbiotic theory is supported by evidence that mitochondria and chloroplasts have their own circular DNA, 70S ribosomes (like bacteria), double membranes, and phylogenetic similarity to specific bacterial groups.",
          es: "La teoría endosimbiótica es respaldada por evidencia de que mitocondrias y cloroplastos tienen su propio ADN circular, ribosomas 70S (como bacterias), membranas dobles, y similitud filogenética a grupos bacterianos específicos.",
          de: "Die endosymbiotische Theorie wird durch Beweise unterstützt, dass Mitochondrien und Chloroplasten ihre eigene zirkuläre DNA, 70S-Ribosomen (wie Bakterien), Doppelmembranen und phylogenetische Ähnlichkeit zu spezifischen Bakteriengruppen haben.",
          nl: "De endosymbiotische theorie wordt ondersteund door bewijs dat mitochondriën en chloroplasten hun eigen circulaire DNA, 70S ribosomen (zoals bacteriën), dubbele membranen, en fylogenetische gelijkenis met specifieke bacteriële groepen hebben."
        }
      },
      {
        question: {
          en: "Which evolutionary pattern describes periods of rapid change followed by long periods of stasis?",
          es: "¿Qué patrón evolutivo describe períodos de cambio rápido seguidos por largos períodos de estasis?",
          de: "Welches evolutionäre Muster beschreibt Perioden schnellen Wandels gefolgt von langen Perioden der Stasis?",
          nl: "Welk evolutionair patroon beschrijft perioden van snelle verandering gevolgd door lange perioden van stilstand?"
        },
        options: [
          { en: "Punctuated equilibrium", es: "Equilibrio puntuado", de: "Punktualismus", nl: "Onderbroken evenwicht" },
          { en: "Gradualism", es: "Gradualismo", de: "Gradualismus", nl: "Gradualisme" },
          { en: "Saltation", es: "Saltación", de: "Saltation", nl: "Saltatie" },
          { en: "Orthogenesis", es: "Ortogénesis", de: "Orthogenese", nl: "Orthogenese" }
        ],
        correct: 0,
        explanation: {
          en: "Punctuated equilibrium proposes that evolution consists of long periods of morphological stasis interrupted by relatively brief periods of rapid evolutionary change, often associated with speciation events.",
          es: "El equilibrio puntuado propone que la evolución consiste en largos períodos de estasis morfológica interrumpidos por períodos relativamente breves de cambio evolutivo rápido, a menudo asociados con eventos de especiación.",
          de: "Punktualismus schlägt vor, dass Evolution aus langen Perioden morphologischer Stasis besteht, die von relativ kurzen Perioden schnellen evolutionären Wandels unterbrochen werden, oft verbunden mit Speziationsereignissen.",
          nl: "Onderbroken evenwicht stelt voor dat evolutie bestaat uit lange perioden van morfologische stilstand onderbroken door relatief korte perioden van snelle evolutionaire verandering, vaak geassocieerd met soortvormingsgebeurtenissen."
        }
      },
      {
        question: {
          en: "What is the role of gene flow in population genetics?",
          es: "¿Cuál es el papel del flujo génico en genética de poblaciones?",
          de: "Was ist die Rolle des Genflusses in der Populationsgenetik?",
          nl: "Wat is de rol van genenstroom in populatiegenetica?"
        },
        options: [
          { en: "Homogenizes allele frequencies between populations", es: "Homogeneiza frecuencias alélicas entre poblaciones", de: "Homogenisiert Allelfrequenzen zwischen Populationen", nl: "Homogeniseert allelfrequenties tussen populaties" },
          { en: "Always increases genetic diversity", es: "Siempre aumenta diversidad genética", de: "Erhöht immer genetische Vielfalt", nl: "Verhoogt altijd genetische diversiteit" },
          { en: "Only affects small populations", es: "Solo afecta poblaciones pequeñas", de: "Beeinflusst nur kleine Populationen", nl: "Beïnvloedt alleen kleine populaties" },
          { en: "Prevents all evolutionary change", es: "Previene todo cambio evolutivo", de: "Verhindert alle evolutionären Veränderungen", nl: "Voorkomt alle evolutionaire verandering" }
        ],
        correct: 0,
        explanation: {
          en: "Gene flow (migration) tends to homogenize allele frequencies between populations by introducing alleles from other populations, counteracting the differentiating effects of natural selection and genetic drift.",
          es: "El flujo génico (migración) tiende a homogeneizar frecuencias alélicas entre poblaciones introduciendo alelos de otras poblaciones, contrarrestando los efectos diferenciadores de selección natural y deriva genética.",
          de: "Genfluss (Migration) neigt dazu, Allelfrequenzen zwischen Populationen zu homogenisieren, indem er Allele aus anderen Populationen einführt und den differenzierenden Effekten natürlicher Selektion und genetischer Drift entgegenwirkt.",
          nl: "Genenstroom (migratie) heeft de neiging allelfrequenties tussen populaties te homogeniseren door allelen van andere populaties te introduceren, wat de differentiërende effecten van natuurlijke selectie en genetische drift tegengaat."
        }
      },
      {
        question: {
          en: "Which concept explains how new gene functions can evolve after gene duplication?",
          es: "¿Qué concepto explica cómo pueden evolucionar nuevas funciones génicas después de duplicación génica?",
          de: "Welches Konzept erklärt, wie neue Genfunktionen nach Genduplikation evolvieren können?",
          nl: "Welk concept verklaart hoe nieuwe genfuncties kunnen evolueren na genduplicatie?"
        },
        options: [
          { en: "Subfunctionalization and neofunctionalization", es: "Subfuncionalización y neofuncionalización", de: "Subfunktionalisierung und Neofunktionalisierung", nl: "Subfunctionalisatie en neofunctionalisatie" },
          { en: "Gene deletion only", es: "Solo deleción génica", de: "Nur Gendeletion", nl: "Alleen gendeletie" },
          { en: "Chromosomal inversion", es: "Inversión cromosómica", de: "Chromosomeninversion", nl: "Chromosomale inversie" },
          { en: "Meiotic recombination", es: "Recombinación meiótica", de: "Meiotische Rekombination", nl: "Meiotische recombinatie" }
        ],
        correct: 0,
        explanation: {
          en: "After gene duplication, one copy can retain original function while the other evolves new functions (neofunctionalization) or original functions can be subdivided between copies (subfunctionalization).",
          es: "Después de duplicación génica, una copia puede retener función original mientras la otra evoluciona nuevas funciones (neofuncionalización) o funciones originales pueden subdividirse entre copias (subfuncionalización).",
          de: "Nach Genduplikation kann eine Kopie die ursprüngliche Funktion behalten, während die andere neue Funktionen entwickelt (Neofunktionalisierung) oder ursprüngliche Funktionen zwischen Kopien aufgeteilt werden (Subfunktionalisierung).",
          nl: "Na genduplicatie kan één kopie de oorspronkelijke functie behouden terwijl de andere nieuwe functies ontwikkelt (neofunctionalisatie) of oorspronkelijke functies kunnen worden onderverdeeld tussen kopieën (subfunctionalisatie)."
        }
      },
      {
        question: {
          en: "What is the significance of living fossils in evolutionary biology?",
          es: "¿Cuál es la significancia de los fósiles vivientes en biología evolutiva?",
          de: "Was ist die Bedeutung lebender Fossilien in der Evolutionsbiologie?",
          nl: "Wat is de betekenis van levende fossielen in evolutionaire biologie?"
        },
        options: [
          { en: "They represent lineages with slow morphological evolution", es: "Representan linajes con evolución morfológica lenta", de: "Sie repräsentieren Linien mit langsamer morphologischer Evolution", nl: "Ze vertegenwoordigen geslachtslijnen met langzame morfologische evolutie" },
          { en: "They are actual fossils that came back to life", es: "Son fósiles reales que volvieron a la vida", de: "Sie sind echte Fossilien, die wieder zum Leben erwachten", nl: "Het zijn werkelijke fossielen die weer tot leven kwamen" },
          { en: "They prove evolution doesn't occur", es: "Prueban que la evolución no ocurre", de: "Sie beweisen, dass Evolution nicht stattfindet", nl: "Ze bewijzen dat evolutie niet plaatsvindt" },
          { en: "They only exist in museums", es: "Solo existen en museos", de: "Sie existieren nur in Museen", nl: "Ze bestaan alleen in musea" }
        ],
        correct: 0,
        explanation: {
          en: "Living fossils like coelacanths and ginkgo trees are organisms that have remained morphologically similar to their ancient ancestors for millions of years, illustrating that evolutionary rates can vary dramatically across lineages.",
          es: "Los fósiles vivientes como celacantos y árboles ginkgo son organismos que han permanecido morfológicamente similares a sus ancestros antiguos por millones de años, ilustrando que tasas evolutivas pueden variar dramáticamente entre linajes.",
          de: "Lebende Fossilien wie Quastenflosser und Ginkgo-Bäume sind Organismen, die morphologisch ihren urzeitlichen Vorfahren über Millionen von Jahren ähnlich geblieben sind und illustrieren, dass evolutionäre Raten zwischen Linien dramatisch variieren können.",
          nl: "Levende fossielen zoals coelacanten en ginkgo-bomen zijn organismen die morfologisch vergelijkbaar zijn gebleven met hun oude voorouders gedurende miljoenen jaren, wat illustreert dat evolutionaire snelheden dramatisch kunnen variëren tussen geslachtslijnen."
        }
      },
      {
        question: {
          en: "Which evolutionary mechanism explains the rapid spread of beneficial mutations in sexual populations?",
          es: "¿Qué mecanismo evolutivo explica la propagación rápida de mutaciones beneficiosas en poblaciones sexuales?",
          de: "Welcher evolutionäre Mechanismus erklärt die schnelle Ausbreitung vorteilhafter Mutationen in sexuellen Populationen?",
          nl: "Welk evolutionair mechanisme verklaart de snelle verspreiding van gunstige mutaties in seksuele populaties?"
        },
        options: [
          { en: "Recombination creating favorable gene combinations", es: "Recombinación creando combinaciones génicas favorables", de: "Rekombination, die günstige Genkombinationen schafft", nl: "Recombinatie die gunstige gencombinaties creëert" },
          { en: "Asexual reproduction only", es: "Solo reproducción asexual", de: "Nur asexuelle Fortpflanzung", nl: "Alleen aseksuele voortplanting" },
          { en: "Genetic bottlenecks", es: "Cuellos de botella genéticos", de: "Genetische Flaschenhälse", nl: "Genetische knelpunten" },
          { en: "Chromosomal inversions", es: "Inversiones cromosómicas", de: "Chromosomeninversionen", nl: "Chromosomale inversies" }
        ],
        correct: 0,
        explanation: {
          en: "Sexual reproduction and recombination allow beneficial mutations arising in different individuals to be combined in offspring, accelerating adaptation compared to asexual reproduction where beneficial mutations must arise in the same lineage.",
          es: "La reproducción sexual y recombinación permiten que mutaciones beneficiosas surgiendo en individuos diferentes se combinen en descendencia, acelerando adaptación comparado con reproducción asexual donde mutaciones beneficiosas deben surgir en el mismo linaje.",
          de: "Sexuelle Fortpflanzung und Rekombination ermöglichen es, dass vorteilhafte Mutationen, die in verschiedenen Individuen entstehen, in Nachkommen kombiniert werden, was Anpassung im Vergleich zur asexuellen Fortpflanzung beschleunigt, wo vorteilhafte Mutationen in derselben Linie entstehen müssen.",
          nl: "Seksuele voortplanting en recombinatie maken het mogelijk dat gunstige mutaties die ontstaan in verschillende individuen worden gecombineerd in nakomelingen, wat adaptatie versnelt vergeleken met aseksuele voortplanting waarbij gunstige mutaties moeten ontstaan in dezelfde geslachtslijn."
        }
      },
      {
        question: {
          en: "What is the evolutionary significance of polyploidy in plant speciation?",
          es: "¿Cuál es la significancia evolutiva de la poliploidía en especiación de plantas?",
          de: "Was ist die evolutionäre Bedeutung der Polyploidie in der Pflanzenspeziation?",
          nl: "Wat is de evolutionaire betekenis van polyploïdie bij plantensoortvorming?"
        },
        options: [
          { en: "Enables instant reproductive isolation and sympatric speciation", es: "Permite aislamiento reproductivo instantáneo y especiación simpátrica", de: "Ermöglicht sofortige reproduktive Isolation und sympatrische Speziation", nl: "Maakt onmiddellijke reproductieve isolatie en sympatrische soortvorming mogelijk" },
          { en: "Always reduces fertility", es: "Siempre reduce fertilidad", de: "Reduziert immer die Fertilität", nl: "Vermindert altijd de vruchtbaarheid" },
          { en: "Only occurs in laboratory conditions", es: "Solo ocurre en condiciones de laboratorio", de: "Tritt nur unter Laborbedingungen auf", nl: "Treedt alleen op onder laboratoriumomstandigheden" },
          { en: "Has no evolutionary impact", es: "No tiene impacto evolutivo", de: "Hat keinen evolutionären Einfluss", nl: "Heeft geen evolutionaire impact" }
        ],
        correct: 0,
        explanation: {
          en: "Polyploidy creates immediate reproductive barriers because polyploid individuals often cannot produce viable gametes when mating with diploid parents, leading to instant speciation without geographic isolation.",
          es: "La poliploidía crea barreras reproductivas inmediatas porque individuos poliploides a menudo no pueden producir gametos viables cuando se aparean con padres diploides, llevando a especiación instantánea sin aislamiento geográfico.",
          de: "Polyploidie schafft sofortige reproduktive Barrieren, weil polyploide Individuen oft keine lebensfähigen Gameten produzieren können, wenn sie sich mit diploiden Eltern paaren, was zu sofortiger Speziation ohne geografische Isolation führt.",
          nl: "Polyploïdie creëert onmiddellijke reproductieve barrières omdat polyploïde individuen vaak geen levensvatbare gameten kunnen produceren bij paring met diploïde ouders, wat leidt tot onmiddellijke soortvorming zonder geografische isolatie."
        }
      },
      {
        question: {
          en: "Which concept explains the maintenance of multiple alleles at equilibrium frequencies in a population?",
          es: "¿Qué concepto explica el mantenimiento de múltiples alelos en frecuencias de equilibrio en una población?",
          de: "Welches Konzept erklärt die Aufrechterhaltung multipler Allele in Gleichgewichtsfrequenzen in einer Population?",
          nl: "Welk concept verklaart het behoud van meerdere allelen op evenwichtsfrequenties in een populatie?"
        },
        options: [
          { en: "Frequency-dependent selection", es: "Selección dependiente de frecuencia", de: "Frequenzabhängige Selektion", nl: "Frequentie-afhankelijke selectie" },
          { en: "Directional selection", es: "Selección direccional", de: "Gerichtete Selektion", nl: "Gerichte selectie" },
          { en: "Genetic bottleneck", es: "Cuello de botella genético", de: "Genetischer Flaschenhals", nl: "Genetisch knelpunt" },
          { en: "Founder effect", es: "Efecto fundador", de: "Gründereffekt", nl: "Oprichterseffect" }
        ],
        correct: 0,
        explanation: {
          en: "Frequency-dependent selection maintains polymorphism when the fitness of an allele depends on its frequency in the population - rare alleles may have higher fitness, preventing any single allele from reaching fixation.",
          es: "La selección dependiente de frecuencia mantiene polimorfismo cuando la aptitud de un alelo depende de su frecuencia en la población - alelos raros pueden tener mayor aptitud, previniendo que cualquier alelo único alcance fijación.",
          de: "Frequenzabhängige Selektion erhält Polymorphismus, wenn die Fitness eines Allels von seiner Frequenz in der Population abhängt - seltene Allele können höhere Fitness haben und verhindern, dass ein einzelnes Allel Fixierung erreicht.",
          nl: "Frequentie-afhankelijke selectie behoudt polymorfisme wanneer de fitness van een allel afhangt van zijn frequentie in de populatie - zeldzame allelen kunnen hogere fitness hebben, wat voorkomt dat één enkel allel fixatie bereikt."
        }
      },
      {
        question: {
          en: "What is the molecular basis of the evolutionary transition from RNA world to DNA-based life?",
          es: "¿Cuál es la base molecular de la transición evolutiva del mundo ARN a vida basada en ADN?",
          de: "Was ist die molekulare Grundlage des evolutionären Übergangs von der RNA-Welt zum DNA-basierten Leben?",
          nl: "Wat is de moleculaire basis van de evolutionaire overgang van RNA-wereld naar DNA-gebaseerd leven?"
        },
        options: [
          { en: "DNA provides greater stability and fidelity for information storage", es: "ADN proporciona mayor estabilidad y fidelidad para almacenamiento de información", de: "DNA bietet größere Stabilität und Treue für Informationsspeicherung", nl: "DNA biedt meer stabiliteit en betrouwbaarheid voor informatieopslag" },
          { en: "DNA is easier to synthesize than RNA", es: "ADN es más fácil de sintetizar que ARN", de: "DNA ist einfacher zu synthetisieren als RNA", nl: "DNA is makkelijker te synthetiseren dan RNA" },
          { en: "DNA has better catalytic properties", es: "ADN tiene mejores propiedades catalíticas", de: "DNA hat bessere katalytische Eigenschaften", nl: "DNA heeft betere katalytische eigenschappen" },
          { en: "DNA requires less energy to maintain", es: "ADN requiere menos energía para mantener", de: "DNA benötigt weniger Energie zur Erhaltung", nl: "DNA vereist minder energie om te behouden" }
        ],
        correct: 0,
        explanation: {
          en: "DNA's double-stranded structure and lack of 2'-OH group makes it more chemically stable than RNA, providing better long-term storage of genetic information with higher replication fidelity, which was advantageous as genomes increased in size.",
          es: "La estructura de doble cadena del ADN y falta del grupo 2'-OH lo hace más químicamente estable que el ARN, proporcionando mejor almacenamiento a largo plazo de información genética con mayor fidelidad de replicación, lo que fue ventajoso cuando genomas aumentaron de tamaño.",
          de: "DNAs doppelsträngige Struktur und das Fehlen der 2'-OH-Gruppe macht sie chemisch stabiler als RNA und bietet bessere Langzeitspeicherung genetischer Information mit höherer Replikationstreue, was vorteilhaft war, als Genome größer wurden.",
          nl: "DNA's dubbelstrengse structuur en gebrek aan 2'-OH groep maakt het chemisch stabieler dan RNA, wat betere langetermijn opslag van genetische informatie biedt met hogere replicatiebetrouwbaarheid, wat voordelig was toen genomen groter werden."
        }
      },
      {
        question: {
          en: "Which phylogenetic method assumes that evolutionary change occurs at constant rates?",
          es: "¿Qué método filogenético asume que el cambio evolutivo ocurre a tasas constantes?",
          de: "Welche phylogenetische Methode nimmt an, dass evolutionärer Wandel mit konstanten Raten auftritt?",
          nl: "Welke fylogenetische methode neemt aan dat evolutionaire verandering optreedt met constante snelheden?"
        },
        options: [
          { en: "UPGMA (molecular clock assumption)", es: "UPGMA (suposición de reloj molecular)", de: "UPGMA (molekulare Uhr-Annahme)", nl: "UPGMA (moleculaire klok aanname)" },
          { en: "Maximum parsimony", es: "Máxima parsimonia", de: "Maximum Parsimonie", nl: "Maximum parsimonie" },
          { en: "Maximum likelihood without clock", es: "Máxima verosimilitud sin reloj", de: "Maximum Likelihood ohne Uhr", nl: "Maximum likelihood zonder klok" },
          { en: "Neighbor-joining", es: "Neighbor-joining", de: "Neighbor-Joining", nl: "Neighbor-joining" }
        ],
        correct: 0,
        explanation: {
          en: "UPGMA (Unweighted Pair Group Method with Arithmetic Mean) assumes a molecular clock where evolutionary rates are constant across all lineages, producing ultrametric trees with equal path lengths from root to all tips.",
          es: "UPGMA (Método de Grupo de Pares No Ponderado con Media Aritmética) asume un reloj molecular donde tasas evolutivas son constantes a través de todos los linajes, produciendo árboles ultramétricos con longitudes de ruta iguales desde raíz a todas las puntas.",
          de: "UPGMA (Ungewichtete Paargruppenmethode mit arithmetischem Mittel) nimmt eine molekulare Uhr an, wo evolutionäre Raten konstant über alle Linien sind und ultrametrische Bäume mit gleichen Pfadlängen von der Wurzel zu allen Spitzen produziert.",
          nl: "UPGMA (Ongewogen Paar Groep Methode met Rekenkundig Gemiddelde) neemt een moleculaire klok aan waarbij evolutionaire snelheden constant zijn over alle geslachtslijnen, wat ultrametrische bomen produceert met gelijke padlengtes van wortel naar alle toppen."
        }
      },
      {
        question: {
          en: "What is the evolutionary advantage of sexual reproduction despite its costs?",
          es: "¿Cuál es la ventaja evolutiva de reproducción sexual a pesar de sus costos?",
          de: "Was ist der evolutionäre Vorteil der sexuellen Fortpflanzung trotz ihrer Kosten?",
          nl: "Wat is het evolutionaire voordeel van seksuele voortplanting ondanks de kosten?"
        },
        options: [
          { en: "Generates genetic variation for adaptation to changing environments", es: "Genera variación genética para adaptación a ambientes cambiantes", de: "Erzeugt genetische Variation für Anpassung an sich verändernde Umgebungen", nl: "Genereert genetische variatie voor aanpassing aan veranderende omgevingen" },
          { en: "Produces more offspring than asexual reproduction", es: "Produce más descendencia que reproducción asexual", de: "Produziert mehr Nachkommen als asexuelle Fortpflanzung", nl: "Produceert meer nakomelingen dan aseksuele voortplanting" },
          { en: "Requires less energy investment", es: "Requiere menos inversión de energía", de: "Erfordert weniger Energieinvestition", nl: "Vereist minder energieinvestering" },
          { en: "Prevents all mutations from occurring", es: "Previene que ocurran todas las mutaciones", de: "Verhindert, dass alle Mutationen auftreten", nl: "Voorkomt dat alle mutaties optreden" }
        ],
        correct: 0,
        explanation: {
          en: "Sexual reproduction generates genetic diversity through recombination and independent assortment, providing raw material for natural selection and enabling populations to adapt to environmental changes, parasites, and other challenges.",
          es: "La reproducción sexual genera diversidad genética a través de recombinación e distribución independiente, proporcionando materia prima para selección natural y permitiendo que poblaciones se adapten a cambios ambientales, parásitos y otros desafíos.",
          de: "Sexuelle Fortpflanzung erzeugt genetische Vielfalt durch Rekombination und unabhängige Sortierung, liefert Rohmaterial für natürliche Selektion und ermöglicht Populationen, sich an Umweltveränderungen, Parasiten und andere Herausforderungen anzupassen.",
          nl: "Seksuele voortplanting genereert genetische diversiteit door recombinatie en onafhankelijke scheiding, wat grondstoffen levert voor natuurlijke selectie en populaties in staat stelt zich aan te passen aan omgevingsveranderingen, parasieten en andere uitdagingen."
        }
      },
      {
        question: {
          en: "Which concept describes the loss of genetic diversity during population expansion from a small founding group?",
          es: "¿Qué concepto describe la pérdida de diversidad genética durante expansión poblacional de un grupo fundador pequeño?",
          de: "Welches Konzept beschreibt den Verlust genetischer Vielfalt während Populationserweiterung aus einer kleinen Gründergruppe?",
          nl: "Welk concept beschrijft het verlies van genetische diversiteit tijdens populatie-uitbreiding vanuit een kleine oprichtersgroep?"
        },
        options: [
          { en: "Founder effect followed by population bottleneck", es: "Efecto fundador seguido de cuello de botella poblacional", de: "Gründereffekt gefolgt von Populationsflaschenhals", nl: "Oprichterseffect gevolgd door populatieknelpunt" },
          { en: "Heterosis", es: "Heterosis", de: "Heterosis", nl: "Heterosis" },
          { en: "Gene flow increase", es: "Aumento de flujo génico", de: "Genfluss-Erhöhung", nl: "Genenstroom toename" },
          { en: "Balancing selection", es: "Selección balanceadora", de: "Balancierende Selektion", nl: "Balancerende selectie" }
        ],
        correct: 0,
        explanation: {
          en: "The founder effect reduces genetic diversity when a small group establishes a new population, and this diversity remains low even as the population expands, leading to reduced evolutionary potential and increased susceptibility to environmental changes.",
          es: "El efecto fundador reduce diversidad genética cuando un grupo pequeño establece una nueva población, y esta diversidad permanece baja incluso cuando la población se expande, llevando a potencial evolutivo reducido y mayor susceptibilidad a cambios ambientales.",
          de: "Der Gründereffekt reduziert genetische Vielfalt, wenn eine kleine Gruppe eine neue Population gründet, und diese Vielfalt bleibt niedrig, selbst wenn die Population wächst, was zu reduziertem evolutionärem Potential und erhöhter Anfälligkeit für Umweltveränderungen führt.",
          nl: "Het oprichterseffect vermindert genetische diversiteit wanneer een kleine groep een nieuwe populatie vestigt, en deze diversiteit blijft laag zelfs als de populatie uitbreidt, wat leidt tot verminderd evolutionair potentieel en verhoogde vatbaarheid voor omgevingsveranderingen."
        }
      },
      {
        question: {
          en: "What is the Red Queen hypothesis in evolutionary biology?",
          es: "¿Cuál es la hipótesis de la Reina Roja en biología evolutiva?",
          de: "Was ist die Rote Königin-Hypothese in der Evolutionsbiologie?",
          nl: "Wat is de Rode Koningin hypothese in evolutionaire biologie?"
        },
        options: [
          { en: "Species must constantly evolve to maintain relative fitness due to coevolution with other species", es: "Las especies deben evolucionar constantemente para mantener aptitud relativa debido a coevolución con otras especies", de: "Arten müssen ständig evolvieren, um relative Fitness aufgrund der Koevolution mit anderen Arten zu erhalten", nl: "Soorten moeten constant evolueren om relatieve fitness te behouden door co-evolutie met andere soorten" },
          { en: "Evolution occurs at a constant rate", es: "La evolución ocurre a tasa constante", de: "Evolution erfolgt mit konstanter Rate", nl: "Evolutie vindt plaats met constante snelheid" },
          { en: "Dominant alleles always win over recessive ones", es: "Alelos dominantes siempre ganan sobre los recesivos", de: "Dominante Allele gewinnen immer über rezessive", nl: "Dominante allelen winnen altijd van recessieve" },
          { en: "Female choice drives all evolutionary change", es: "Elección femenina impulsa todo cambio evolutivo", de: "Weibliche Wahl treibt alle evolutionären Veränderungen an", nl: "Vrouwelijke keuze drijft alle evolutionaire verandering aan" }
        ],
        correct: 0,
        explanation: {
          en: "The Red Queen hypothesis suggests that organisms must constantly adapt and evolve not just to survive, but to maintain their relative fitness as other organisms (competitors, predators, parasites) are also evolving.",
          es: "La hipótesis de la Reina Roja sugiere que los organismos deben adaptarse y evolucionar constantemente no solo para sobrevivir, sino para mantener su aptitud relativa mientras otros organismos (competidores, depredadores, parásitos) también están evolucionando.",
          de: "Die Rote Königin-Hypothese besagt, dass Organismen sich ständig anpassen und evolvieren müssen, nicht nur um zu überleben, sondern um ihre relative Fitness zu erhalten, während andere Organismen (Konkurrenten, Raubtiere, Parasiten) ebenfalls evolvieren.",
          nl: "De Rode Koningin hypothese suggereert dat organismen constant moeten aanpassen en evolueren, niet alleen om te overleven, maar om hun relatieve fitness te behouden terwijl andere organismen (concurrenten, roofdieren, parasieten) ook evolueren."
        }
      },
      {
        question: {
          en: "Which phylogenetic reconstruction method uses the principle of maximum likelihood?",
          es: "¿Qué método de reconstrucción filogenética usa el principio de máxima verosimilitud?",
          de: "Welche phylogenetische Rekonstruktionsmethode verwendet das Prinzip der maximalen Wahrscheinlichkeit?",
          nl: "Welke fylogenetische reconstructiemethode gebruikt het principe van maximum likelihood?"
        },
        options: [
          { en: "ML methods evaluate the probability of observed data given different tree topologies", es: "Métodos ML evalúan probabilidad de datos observados dados diferentes topologías de árbol", de: "ML-Methoden bewerten die Wahrscheinlichkeit beobachteter Daten bei verschiedenen Baumtopologien", nl: "ML-methoden evalueren de waarschijnlijkheid van waargenomen gegevens gegeven verschillende boomtopologieën" },
          { en: "Parsimony analysis", es: "Análisis de parsimonia", de: "Parsimonie-Analyse", nl: "Parsimonie-analyse" },
          { en: "Distance matrix methods only", es: "Solo métodos de matriz de distancia", de: "Nur Distanzmatrix-Methoden", nl: "Alleen afstandsmatrix methoden" },
          { en: "Morphological cladistics", es: "Cladística morfológica", de: "Morphologische Kladistik", nl: "Morfologische cladistiek" }
        ],
        correct: 0,
        explanation: {
          en: "Maximum likelihood phylogenetics evaluates different tree topologies by calculating the probability of observing the actual sequence data under specific evolutionary models, selecting trees with highest likelihood scores.",
          es: "La filogenética de máxima verosimilitud evalúa diferentes topologías de árbol calculando la probabilidad de observar los datos de secuencia actual bajo modelos evolutivos específicos, seleccionando árboles con puntajes de verosimilitud más altos.",
          de: "Maximum Likelihood Phylogenetik bewertet verschiedene Baumtopologien durch Berechnung der Wahrscheinlichkeit, die tatsächlichen Sequenzdaten unter spezifischen evolutionären Modellen zu beobachten, und wählt Bäume mit den höchsten Likelihood-Werten.",
          nl: "Maximum likelihood fylogenetiek evalueert verschillende boomtopologieën door de waarschijnlijkheid te berekenen van het waarnemen van de werkelijke sequentiegegevens onder specifieke evolutionaire modellen, waarbij bomen met hoogste likelihood-scores worden geselecteerd."
        }
      },
      {
        question: {
          en: "What is the neutral theory of molecular evolution?",
          es: "¿Cuál es la teoría neutral de evolución molecular?",
          de: "Was ist die neutrale Theorie der molekularen Evolution?",
          nl: "Wat is de neutrale theorie van moleculaire evolutie?"
        },
        options: [
          { en: "Most molecular changes are selectively neutral and fixed by genetic drift", es: "La mayoría de cambios moleculares son selectivamente neutrales y fijados por deriva genética", de: "Die meisten molekularen Veränderungen sind selektiv neutral und durch genetische Drift fixiert", nl: "De meeste moleculaire veranderingen zijn selectief neutraal en gefixeerd door genetische drift" },
          { en: "All mutations are beneficial", es: "Todas las mutaciones son beneficiosas", de: "Alle Mutationen sind vorteilhaft", nl: "Alle mutaties zijn voordelig" },
          { en: "Natural selection is the only evolutionary force", es: "Selección natural es la única fuerza evolutiva", de: "Natürliche Selektion ist die einzige evolutionäre Kraft", nl: "Natuurlijke selectie is de enige evolutionaire kracht" },
          { en: "Molecular evolution doesn't occur", es: "Evolución molecular no ocurre", de: "Molekulare Evolution findet nicht statt", nl: "Moleculaire evolutie vindt niet plaats" }
        ],
        correct: 0,
        explanation: {
          en: "The neutral theory, proposed by Motoo Kimura, suggests that most molecular evolutionary changes are selectively neutral and become fixed in populations primarily through random genetic drift rather than natural selection.",
          es: "La teoría neutral, propuesta por Motoo Kimura, sugiere que la mayoría de cambios evolutivos moleculares son selectivamente neutrales y se fijan en poblaciones principalmente a través de deriva genética aleatoria más que selección natural.",
          de: "Die neutrale Theorie, vorgeschlagen von Motoo Kimura, legt nahe, dass die meisten molekularen evolutionären Veränderungen selektiv neutral sind und in Populationen hauptsächlich durch zufällige genetische Drift und nicht durch natürliche Selektion fixiert werden.",
          nl: "De neutrale theorie, voorgesteld door Motoo Kimura, suggereert dat de meeste moleculaire evolutionaire veranderingen selectief neutraal zijn en gefixeerd worden in populaties voornamelijk door willekeurige genetische drift eerder dan natuurlijke selectie."
        }
      },
      {
        question: {
          en: "Which process contributes to punctuated equilibrium in evolution?",
          es: "¿Qué proceso contribuye al equilibrio puntuado en evolución?",
          de: "Welcher Prozess trägt zum punktierten Gleichgewicht in der Evolution bei?",
          nl: "Welk proces draagt bij aan gepuncteerd evenwicht in evolutie?"
        },
        options: [
          { en: "Rapid evolutionary change during speciation events followed by stasis", es: "Cambio evolutivo rápido durante eventos de especiación seguido por estasis", de: "Schnelle evolutionäre Veränderung während Artbildungsereignissen gefolgt von Stillstand", nl: "Snelle evolutionaire verandering tijdens soortvormingsgebeurtenissen gevolgd door stagnatie" },
          { en: "Constant rate of evolutionary change", es: "Tasa constante de cambio evolutivo", de: "Konstante Rate evolutionärer Veränderung", nl: "Constante snelheid van evolutionaire verandering" },
          { en: "Linear progression of complexity", es: "Progresión lineal de complejidad", de: "Lineare Progression der Komplexität", nl: "Lineaire progressie van complexiteit" },
          { en: "Gradual morphological change only", es: "Solo cambio morfológico gradual", de: "Nur allmähliche morphologische Veränderung", nl: "Alleen geleidelijke morfologische verandering" }
        ],
        correct: 0,
        explanation: {
          en: "Punctuated equilibrium describes patterns where species undergo rapid evolutionary change during speciation, followed by long periods of morphological stasis, challenging gradualism in the fossil record.",
          es: "El equilibrio puntuado describe patrones donde especies experimentan cambio evolutivo rápido durante especiación, seguido por largos períodos de estasis morfológica, desafiando gradualismo en el registro fósil.",
          de: "Punktiertes Gleichgewicht beschreibt Muster, wo Arten schnelle evolutionäre Veränderung während der Artbildung durchlaufen, gefolgt von langen Perioden morphologischen Stillstands, was den Gradualismus im Fossilienbeleg herausfordert.",
          nl: "Gepuncteerd evenwicht beschrijft patronen waarbij soorten snelle evolutionaire verandering ondergaan tijdens soortontwikkeling, gevolgd door lange perioden van morfologische stagnatie, wat gradualisme in het fossielenarchief uitdaagt."
        }
      },
      {
        question: {
          en: "What is horizontal gene transfer and its evolutionary significance?",
          es: "¿Qué es la transferencia horizontal de genes y su significancia evolutiva?",
          de: "Was ist horizontaler Gentransfer und seine evolutionäre Bedeutung?",
          nl: "Wat is horizontale genoverdracht en de evolutionaire betekenis ervan?"
        },
        options: [
          { en: "Transfer of genetic material between organisms other than by reproduction, accelerating adaptation", es: "Transferencia de material genético entre organismos distinto de reproducción, acelerando adaptación", de: "Transfer genetischen Materials zwischen Organismen anders als durch Fortpflanzung, beschleunigt Anpassung", nl: "Overdracht van genetisch materiaal tussen organismen anders dan door reproductie, wat aanpassing versnelt" },
          { en: "Vertical inheritance from parents to offspring only", es: "Solo herencia vertical de padres a descendencia", de: "Nur vertikale Vererbung von Eltern zu Nachkommen", nl: "Alleen verticale overerving van ouders naar nakomelingen" },
          { en: "Gene duplication within the same organism", es: "Duplicación génica dentro del mismo organismo", de: "Genduplikation innerhalb desselben Organismus", nl: "Genduplicatie binnen hetzelfde organisme" },
          { en: "Random mutation in somatic cells", es: "Mutación aleatoria en células somáticas", de: "Zufällige Mutation in somatischen Zellen", nl: "Willekeurige mutatie in somatische cellen" }
        ],
        correct: 0,
        explanation: {
          en: "Horizontal gene transfer allows organisms to acquire genes from other species or distantly related organisms, providing rapid access to new functions and accelerating adaptation, especially important in microbial evolution.",
          es: "La transferencia horizontal de genes permite a organismos adquirir genes de otras especies u organismos lejanamente relacionados, proporcionando acceso rápido a nuevas funciones y acelerando adaptación, especialmente importante en evolución microbiana.",
          de: "Horizontaler Gentransfer ermöglicht es Organismen, Gene von anderen Arten oder entfernt verwandten Organismen zu erwerben, bietet schnellen Zugang zu neuen Funktionen und beschleunigt Anpassung, besonders wichtig in mikrobieller Evolution.",
          nl: "Horizontale genoverdracht stelt organismen in staat genen te verkrijgen van andere soorten of ver verwante organismen, wat snelle toegang biedt tot nieuwe functies en aanpassing versnelt, vooral belangrijk in microbiële evolutie."
        }
      },
      {
        question: {
          en: "Which evolutionary force can counteract the effects of natural selection?",
          es: "¿Qué fuerza evolutiva puede contrarrestar los efectos de selección natural?",
          de: "Welche evolutionäre Kraft kann den Effekten natürlicher Selektion entgegenwirken?",
          nl: "Welke evolutionaire kracht kan de effecten van natuurlijke selectie tegengaan?"
        },
        options: [
          { en: "Gene flow introducing alleles with different fitness values", es: "Flujo génico introduciendo alelos con diferentes valores de aptitud", de: "Genfluss, der Allele mit verschiedenen Fitness-Werten einführt", nl: "Genenstroom die allelen introduceert met verschillende fitnesswaarden" },
          { en: "Increased mutation rate", es: "Tasa de mutación aumentada", de: "Erhöhte Mutationsrate", nl: "Verhoogde mutatiesnelheid" },
          { en: "Perfect Hardy-Weinberg equilibrium", es: "Equilibrio perfecto Hardy-Weinberg", de: "Perfektes Hardy-Weinberg-Gleichgewicht", nl: "Perfect Hardy-Weinberg evenwicht" },
          { en: "Reduced population size only", es: "Solo tamaño poblacional reducido", de: "Nur reduzierte Populationsgröße", nl: "Alleen gereduceerde populatiegrootte" }
        ],
        correct: 0,
        explanation: {
          en: "Gene flow can counteract local adaptation by introducing alleles from populations adapted to different environments, potentially reducing the mean fitness of the local population and opposing directional selection.",
          es: "El flujo génico puede contrarrestar adaptación local introduciendo alelos de poblaciones adaptadas a diferentes ambientes, potencialmente reduciendo la aptitud media de la población local y oponiéndose a selección direccional.",
          de: "Genfluss kann lokale Anpassung entgegenwirken, indem er Allele von Populationen einführt, die an verschiedene Umgebungen angepasst sind, was möglicherweise die mittlere Fitness der lokalen Population reduziert und gerichteter Selektion entgegenwirkt.",
          nl: "Genenstroom kan lokale aanpassing tegengaan door allelen te introduceren van populaties die zijn aangepast aan verschillende omgevingen, wat mogelijk de gemiddelde fitness van de lokale populatie vermindert en directionele selectie tegenwerkt."
        }
      },
      {
        question: {
          en: "What is the concept of an evolutionary stable strategy (ESS)?",
          es: "¿Cuál es el concepto de estrategia evolutivamente estable (ESS)?",
          de: "Was ist das Konzept einer evolutionär stabilen Strategie (ESS)?",
          nl: "Wat is het concept van een evolutionair stabiele strategie (ESS)?"
        },
        options: [
          { en: "A behavioral strategy that, when adopted by most individuals, cannot be invaded by alternative strategies", es: "Una estrategia comportamental que, cuando adoptada por mayoría de individuos, no puede ser invadida por estrategias alternativas", de: "Eine Verhaltensstrategie, die, wenn von den meisten Individuen adoptiert, nicht von alternativen Strategien eindringen kann", nl: "Een gedragsstrategie die, wanneer aangenomen door de meeste individuen, niet kan worden binnengevallen door alternatieve strategieën" },
          { en: "Any strategy that increases individual fitness", es: "Cualquier estrategia que aumenta aptitud individual", de: "Jede Strategie, die individuelle Fitness erhöht", nl: "Elke strategie die individuele fitness verhoogt" },
          { en: "Cooperative behavior in all circumstances", es: "Comportamiento cooperativo en todas circunstancias", de: "Kooperatives Verhalten unter allen Umständen", nl: "Coöperatief gedrag onder alle omstandigheden" },
          { en: "The most aggressive strategy available", es: "La estrategia más agresiva disponible", de: "Die aggressivste verfügbare Strategie", nl: "De meest agressieve beschikbare strategie" }
        ],
        correct: 0,
        explanation: {
          en: "An ESS is a strategy that, when adopted by the population, is resistant to invasion by any alternative strategy. It represents a stable equilibrium in evolutionary game theory where no mutant strategy can invade.",
          es: "Una ESS es una estrategia que, cuando adoptada por la población, es resistente a invasión por cualquier estrategia alternativa. Representa equilibrio estable en teoría de juegos evolutiva donde ninguna estrategia mutante puede invadir.",
          de: "Eine ESS ist eine Strategie, die, wenn von der Population adoptiert, resistent gegen Eindringen durch alternative Strategien ist. Sie repräsentiert ein stabiles Gleichgewicht in evolutionärer Spieltheorie, wo keine mutante Strategie eindringen kann.",
          nl: "Een ESS is een strategie die, wanneer aangenomen door de populatie, resistent is tegen invasie door alternatieve strategieën. Het vertegenwoordigt een stabiel evenwicht in evolutionaire speltheorie waar geen mutante strategie kan binnenvallen."
        }
      },
      {
        question: {
          en: "Which mechanism explains the evolution of complex traits through intermediate forms?",
          es: "¿Qué mecanismo explica la evolución de rasgos complejos a través de formas intermedias?",
          de: "Welcher Mechanismus erklärt die Evolution komplexer Merkmale durch Zwischenformen?",
          nl: "Welk mechanisme verklaart de evolutie van complexe eigenschappen door tussenvormen?"
        },
        options: [
          { en: "Gradual selection with each intermediate step providing selective advantage", es: "Selección gradual con cada paso intermedio proporcionando ventaja selectiva", de: "Allmähliche Selektion mit jedem Zwischenschritt, der selektiven Vorteil bietet", nl: "Geleidelijke selectie waarbij elke tussenstap selectief voordeel biedt" },
          { en: "Saltational evolution only", es: "Solo evolución saltacional", de: "Nur saltatorische Evolution", nl: "Alleen saltatorische evolutie" },
          { en: "Intelligent design intervention", es: "Intervención de diseño inteligente", de: "Intelligente Design-Intervention", nl: "Intelligent design interventie" },
          { en: "Spontaneous generation", es: "Generación espontánea", de: "Spontane Entstehung", nl: "Spontane generatie" }
        ],
        correct: 0,
        explanation: {
          en: "Complex traits evolve through a series of intermediate steps, each providing some selective advantage. Even partially formed structures can be beneficial, as demonstrated by the evolution of eyes from simple photosensitive spots to complex camera-like organs.",
          es: "Los rasgos complejos evolucionan a través de una serie de pasos intermedios, cada uno proporcionando alguna ventaja selectiva. Incluso estructuras parcialmente formadas pueden ser beneficiosas, como demuestra la evolución de ojos desde manchas fotosensibles simples a órganos complejos tipo cámara.",
          de: "Komplexe Merkmale entwickeln sich durch eine Reihe von Zwischenschritten, die jeweils einen selektiven Vorteil bieten. Selbst teilweise geformte Strukturen können vorteilhaft sein, wie die Evolution der Augen von einfachen lichtempfindlichen Flecken zu komplexen kameraähnlichen Organen zeigt.",
          nl: "Complexe eigenschappen evolueren door een reeks tussenstappen, elk met enig selectief voordeel. Zelfs gedeeltelijk gevormde structuren kunnen voordelig zijn, zoals getoond door de evolutie van ogen van eenvoudige lichtgevoelige vlekken naar complexe camera-achtige organen."
        }
      },
      {
        question: {
          en: "What is the bootstrap method in phylogenetic analysis?",
          es: "¿Cuál es el método bootstrap en análisis filogenético?",
          de: "Was ist die Bootstrap-Methode in der phylogenetischen Analyse?",
          nl: "Wat is de bootstrap methode in fylogenetische analyse?"
        },
        options: [
          { en: "Statistical method to assess confidence in tree topology by resampling data", es: "Método estadístico para evaluar confianza en topología de árbol remuestreando datos", de: "Statistische Methode zur Bewertung des Vertrauens in Baumtopologie durch Daten-Resampling", nl: "Statistische methode om vertrouwen in boomtopologie te beoordelen door gegevens te hersampllen" },
          { en: "Method for rooting phylogenetic trees", es: "Método para enraizar árboles filogenéticos", de: "Methode zum Verwurzeln phylogenetischer Bäume", nl: "Methode voor het wortelen van fylogenetische bomen" },
          { en: "Algorithm for sequence alignment", es: "Algoritmo para alineamiento de secuencias", de: "Algorithmus für Sequenzalignment", nl: "Algoritme voor sequentie-alignering" },
          { en: "Technique for DNA extraction", es: "Técnica para extracción de ADN", de: "Technik für DNA-Extraktion", nl: "Techniek voor DNA-extractie" }
        ],
        correct: 0,
        explanation: {
          en: "Bootstrap analysis randomly resamples columns from sequence alignments to create pseudo-replicate datasets, reconstructs trees from each replicate, and calculates the frequency of each clade to assess statistical support for tree branches.",
          es: "El análisis bootstrap remuestrea aleatoriamente columnas de alineamientos de secuencias para crear conjuntos de datos pseudo-réplicas, reconstruye árboles de cada réplica, y calcula frecuencia de cada clado para evaluar soporte estadístico para ramas del árbol.",
          de: "Bootstrap-Analyse sampelt zufällig Spalten aus Sequenzalignments, um Pseudo-Replikat-Datensätze zu erstellen, rekonstruiert Bäume aus jeder Replik und berechnet die Häufigkeit jeder Klade, um statistische Unterstützung für Baumäste zu bewerten.",
          nl: "Bootstrap-analyse hersampled willekeurig kolommen uit sequentie-aligneringen om pseudo-replicaat datasets te maken, reconstrueert bomen uit elke replicaat, en berekent de frequentie van elke clade om statistische ondersteuning voor boomtakken te beoordelen."
        }
      },
      {
        question: {
          en: "Which evolutionary process explains the similarity between distantly related species in similar environments?",
          es: "¿Qué proceso evolutivo explica la similitud entre especies lejanamente relacionadas en ambientes similares?",
          de: "Welcher evolutionäre Prozess erklärt die Ähnlichkeit zwischen entfernt verwandten Arten in ähnlichen Umgebungen?",
          nl: "Welk evolutionair proces verklaart de gelijkenis tussen ver verwante soorten in vergelijkbare omgevingen?"
        },
        options: [
          { en: "Convergent evolution producing analogous structures", es: "Evolución convergente produciendo estructuras análogas", de: "Konvergente Evolution, die analoge Strukturen produziert", nl: "Convergente evolutie die analoge structuren produceert" },
          { en: "Common descent from recent ancestor", es: "Descendencia común de ancestro reciente", de: "Gemeinsame Abstammung von jüngstem Vorfahren", nl: "Gemeenschappelijke afstamming van recente voorouder" },
          { en: "Genetic drift acting uniformly", es: "Deriva genética actuando uniformemente", de: "Genetische Drift, die gleichmäßig wirkt", nl: "Genetische drift die uniform werkt" },
          { en: "Horizontal gene transfer only", es: "Solo transferencia horizontal de genes", de: "Nur horizontaler Gentransfer", nl: "Alleen horizontale genoverdracht" }
        ],
        correct: 0,
        explanation: {
          en: "Convergent evolution occurs when unrelated species independently evolve similar traits in response to similar environmental pressures, producing analogous structures with similar functions but different evolutionary origins.",
          es: "La evolución convergente ocurre cuando especies no relacionadas evolucionan independientemente rasgos similares en respuesta a presiones ambientales similares, produciendo estructuras análogas con funciones similares pero diferentes orígenes evolutivos.",
          de: "Konvergente Evolution tritt auf, wenn nicht verwandte Arten unabhängig ähnliche Merkmale als Antwort auf ähnliche Umweltdrücke entwickeln, wodurch analoge Strukturen mit ähnlichen Funktionen aber verschiedenen evolutionären Ursprüngen entstehen.",
          nl: "Convergente evolutie treedt op wanneer niet-verwante soorten onafhankelijk vergelijkbare eigenschappen evolueren als reactie op vergelijkbare omgevingsdruk, wat analoge structuren produceert met vergelijkbare functies maar verschillende evolutionaire oorsprong."
        }
      },
      {
        question: {
          en: "What is the role of molecular markers in population genetics studies?",
          es: "¿Cuál es el papel de marcadores moleculares en estudios de genética poblacional?",
          de: "Was ist die Rolle molekularer Marker in populationsgenetischen Studien?",
          nl: "Wat is de rol van moleculaire markers in populatiegenetica studies?"
        },
        options: [
          { en: "Detect genetic variation and track gene flow between populations", es: "Detectar variación genética y rastrear flujo génico entre poblaciones", de: "Genetische Variation erkennen und Genfluss zwischen Populationen verfolgen", nl: "Genetische variatie detecteren en genenstroom tussen populaties volgen" },
          { en: "Directly cause evolutionary change", es: "Causar directamente cambio evolutivo", de: "Evolutionäre Veränderung direkt verursachen", nl: "Evolutionaire verandering direct veroorzaken" },
          { en: "Replace the need for phenotypic studies", es: "Reemplazar necesidad de estudios fenotípicos", de: "Notwendigkeit phänotypischer Studien ersetzen", nl: "Behoefte aan fenotypische studies vervangen" },
          { en: "Control population size", es: "Controlar tamaño poblacional", de: "Populationsgröße kontrollieren", nl: "Populatiegrootte controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Molecular markers are DNA sequences that reveal genetic variation within and between populations, allowing researchers to measure gene flow, population structure, phylogeographic patterns, and demographic history.",
          es: "Los marcadores moleculares son secuencias de ADN que revelan variación genética dentro y entre poblaciones, permitiendo a investigadores medir flujo génico, estructura poblacional, patrones filogeográficos e historia demográfica.",
          de: "Molekulare Marker sind DNA-Sequenzen, die genetische Variation innerhalb und zwischen Populationen aufdecken, wodurch Forscher Genfluss, Populationsstruktur, phylogeographische Muster und demographische Geschichte messen können.",
          nl: "Moleculaire markers zijn DNA-sequenties die genetische variatie binnen en tussen populaties onthullen, waardoor onderzoekers genenstroom, populatiestructuur, fylogeografische patronen en demografische geschiedenis kunnen meten."
        }
      },
      {
        question: {
          en: "Which concept describes the minimum number of individuals needed for population viability?",
          es: "¿Qué concepto describe el número mínimo de individuos necesario para viabilidad poblacional?",
          de: "Welches Konzept beschreibt die Mindestanzahl von Individuen, die für Populationslebensfähigkeit benötigt wird?",
          nl: "Welk concept beschrijft het minimum aantal individuen dat nodig is voor populatielevensvatbaarheid?"
        },
        options: [
          { en: "Minimum viable population size (MVP) considering genetic and demographic factors", es: "Tamaño mínimo de población viable (MVP) considerando factores genéticos y demográficos", de: "Minimale lebensfähige Populationsgröße (MVP) unter Berücksichtigung genetischer und demographischer Faktoren", nl: "Minimale levensvatbare populatiegrootte (MVP) rekening houdend met genetische en demografische factoren" },
          { en: "Carrying capacity of the environment", es: "Capacidad de carga del ambiente", de: "Tragfähigkeit der Umwelt", nl: "Draagkracht van de omgeving" },
          { en: "Maximum population density", es: "Densidad poblacional máxima", de: "Maximale Populationsdichte", nl: "Maximale populatiedichtheid" },
          { en: "Optimal foraging group size", es: "Tamaño óptimo de grupo de forrajeo", de: "Optimale Futtersuchgruppengröße", nl: "Optimale foerageergroepsgrootte" }
        ],
        correct: 0,
        explanation: {
          en: "MVP is the smallest population size that can persist over a specified time period with a given probability, accounting for genetic diversity loss, inbreeding depression, demographic stochasticity, and environmental variation.",
          es: "MVP es el tamaño poblacional más pequeño que puede persistir durante un período específico con una probabilidad dada, considerando pérdida de diversidad genética, depresión endogámica, estocasticidad demográfica y variación ambiental.",
          de: "MVP ist die kleinste Populationsgröße, die über einen bestimmten Zeitraum mit einer gegebenen Wahrscheinlichkeit bestehen kann, unter Berücksichtigung von Verlust genetischer Vielfalt, Inzuchtdepression, demographischer Stochastik und Umweltvariationen.",
          nl: "MVP is de kleinste populatiegrootte die kan voortbestaan gedurende een gespecificeerde tijdsperiode met een gegeven waarschijnlijkheid, rekening houdend met verlies van genetische diversiteit, inteeltdepressie, demografische stochasticiteit en omgevingsvariatie."
        }
      },
      {
        question: {
          en: "What is the significance of transitional fossils in evolutionary biology?",
          es: "¿Cuál es la significancia de fósiles transicionales en biología evolutiva?",
          de: "Was ist die Bedeutung von Übergangsfossilien in der Evolutionsbiologie?",
          nl: "Wat is de betekenis van overgangsfosielen in evolutionaire biologie?"
        },
        options: [
          { en: "Provide evidence for evolutionary transitions between major groups", es: "Proporcionan evidencia para transiciones evolutivas entre grupos principales", de: "Liefern Beweise für evolutionäre Übergänge zwischen Hauptgruppen", nl: "Leveren bewijs voor evolutionaire overgangen tussen hoofdgroepen" },
          { en: "Disprove the theory of evolution", es: "Refutan la teoría de evolución", de: "Widerlegen die Evolutionstheorie", nl: "Weerleggen de evolutietheorie" },
          { en: "Show that evolution stopped in the past", es: "Muestran que evolución se detuvo en el pasado", de: "Zeigen, dass Evolution in der Vergangenheit aufhörte", nl: "Tonen aan dat evolutie stopte in het verleden" },
          { en: "Prove that all species appeared simultaneously", es: "Prueban que todas las especies aparecieron simultáneamente", de: "Beweisen, dass alle Arten gleichzeitig erschienen", nl: "Bewijzen dat alle soorten gelijktijdig verschenen" }
        ],
        correct: 0,
        explanation: {
          en: "Transitional fossils display characteristics intermediate between ancestral and derived forms, providing direct evidence of evolutionary change and helping to reconstruct the evolutionary history of major transitions.",
          es: "Los fósiles transicionales muestran características intermedias entre formas ancestrales y derivadas, proporcionando evidencia directa de cambio evolutivo y ayudando a reconstruir la historia evolutiva de transiciones principales.",
          de: "Übergangsfossilien zeigen Merkmale, die zwischen ancestralen und abgeleiteten Formen liegen, liefern direkte Beweise für evolutionären Wandel und helfen bei der Rekonstruktion der Evolutionsgeschichte wichtiger Übergänge.",
          nl: "Overgangsfosielen tonen kenmerken die tussenliggend zijn tussen voorouderlijke en afgeleide vormen, en leveren direct bewijs van evolutionaire verandering en helpen bij het reconstrueren van de evolutionaire geschiedenis van belangrijke overgangen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/biology', level7);
  }
})();