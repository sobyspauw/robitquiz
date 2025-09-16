(function() {
  const level4 = {
    name: {
      en: "Population Genomics & Evolutionary Mechanisms",
      es: "Genómica de Poblaciones y Mecanismos Evolutivos",
      de: "Populationsgenomik & Evolutionsmechanismen",
      nl: "Populatiegenomics & Evolutionaire Mechanismen"
    },
    questions: [
      {
        question: {
          en: "How does linkage disequilibrium decay drive population genomic inference in admixed populations?",
          es: "¿Cómo impulsa el decaimiento del desequilibrio de ligamiento la inferencia genómica poblacional en poblaciones mezcladas?",
          de: "Wie treibt Kopplungsungleichgewichts-Zerfall populationsgenomische Inferenz in gemischten Populationen an?",
          nl: "Hoe drijft linkage disequilibrium verval populatie genomische inferentie aan in gemengde populaties?"
        },
        options: [
          { en: "Differential recombination rates across ancestry-specific haplotype blocks enable demographic reconstruction", es: "Tasas de recombinación diferenciales a través de bloques haplotípicos específicos de ancestría permiten reconstrucción demográfica", de: "Differentielle Rekombinationsraten über abstammungsspezifische Haplotyp-Blöcke ermöglichen demografische Rekonstruktion", nl: "Differentiële recombinatie snelheden over afstamming-specifieke haplotype blokken stellen demografische reconstructie mogelijk" },
          { en: "Simple Hardy-Weinberg equilibrium calculations", es: "Cálculos simples de equilibrio Hardy-Weinberg", de: "Einfache Hardy-Weinberg-Gleichgewichtsberechnungen", nl: "Eenvoudige Hardy-Weinberg evenwicht berekeningen" },
          { en: "Random mating assumptions only", es: "Solo suposiciones de apareamiento aleatorio", de: "Nur zufällige Paarungsannahmen", nl: "Alleen willekeurige paring aannames" },
          { en: "Genetic drift calculations", es: "Cálculos de deriva genética", de: "Genetische Drift-Berechnungen", nl: "Genetische drift berekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "In admixed populations, ancestry-specific haplotype blocks undergo different recombination dynamics based on admixture timing and source population divergence, allowing reconstruction of complex demographic histories through linkage decay patterns.",
          es: "En poblaciones mezcladas, bloques haplotípicos específicos de ancestría experimentan dinámicas de recombinación diferentes basadas en tiempo de mezcla y divergencia de poblaciones fuente, permitiendo reconstrucción de historias demográficas complejas.",
          de: "In gemischten Populationen unterliegen abstammungsspezifische Haplotyp-Blöcke unterschiedlichen Rekombinationsdynamiken basierend auf Vermischungszeit und Quellpopulations-Divergenz, ermöglichen Rekonstruktion komplexer demografischer Geschichten.",
          nl: "In gemengde populaties ondergaan afstamming-specifieke haplotype blokken verschillende recombinatie dynamiek gebaseerd op vermenging timing en bron populatie divergentie, reconstructie van complexe demografische geschiedenissen mogelijk makend."
        }
      },
      {
        question: {
          en: "What molecular mechanism drives balancing selection maintenance of MHC diversity?",
          es: "¿Qué mecanismo molecular impulsa el mantenimiento de selección balanceadora de diversidad MHC?",
          de: "Welcher molekulare Mechanismus treibt ausgleichende Selektion zur Erhaltung der MHC-Diversität an?",
          nl: "Welk moleculair mechanisme drijft balancerende selectie onderhoud van MHC diversiteit aan?"
        },
        options: [
          { en: "Pathogen-driven heterozygote advantage through frequency-dependent selection and overdominance effects", es: "Ventaja de heterocigotos impulsada por patógenos a través de selección dependiente de frecuencia y efectos de sobredominancia", de: "Pathogen-getriebener Heterozygoten-Vorteil durch frequenzabhängige Selektion und Überdominanz-Effekte", nl: "Pathogeen-gedreven heterozygoot voordeel door frequentie-afhankelijke selectie en overdominantie effecten" },
          { en: "Random genetic drift only", es: "Solo deriva genética aleatoria", de: "Nur zufällige genetische Drift", nl: "Alleen willekeurige genetische drift" },
          { en: "Neutral evolution processes", es: "Procesos de evolución neutral", de: "Neutrale Evolutionsprozesse", nl: "Neutrale evolutie processen" },
          { en: "Purifying selection effects", es: "Efectos de selección purificadora", de: "Reinigende Selektionseffekte", nl: "Zuiverende selectie effecten" }
        ],
        correct: 0,
        explanation: {
          en: "MHC genes experience balancing selection through heterozygote advantage (each allele recognizes different pathogen epitopes) and negative frequency-dependent selection (rare alleles have advantage against adapted pathogens), maintaining ancient polymorphisms.",
          es: "Los genes MHC experimentan selección balanceadora a través de ventaja heterocigota (cada alelo reconoce diferentes epítopos patógenos) y selección negativa dependiente de frecuencia, manteniendo polimorfismos antiguos.",
          de: "MHC-Gene erfahren ausgleichende Selektion durch Heterozygoten-Vorteil (jedes Allel erkennt verschiedene Pathogen-Epitope) und negative frequenzabhängige Selektion, erhalten alte Polymorphismen.",
          nl: "MHC genen ervaren balancerende selectie door heterozygoot voordeel (elk allel herkent verschillende pathogeen epitopen) en negatieve frequentie-afhankelijke selectie, oude polymorfismen onderhoudend."
        }
      },
      {
        question: {
          en: "How does coalescent theory with recombination model ancestral recombination graphs?",
          es: "¿Cómo modela la teoría coalescente con recombinación los grafos de recombinación ancestral?",
          de: "Wie modelliert Koaleszenz-Theorie mit Rekombination ancestrale Rekombinations-Graphen?",
          nl: "Hoe modelleert coalescent theorie met recombinatie voorouderlijke recombinatie grafen?"
        },
        options: [
          { en: "Probabilistic genealogical structures trace lineage histories across recombining genomic segments", es: "Estructuras genealógicas probabilísticas rastrean historias de linaje a través de segmentos genómicos recombinantes", de: "Probabilistische genealogische Strukturen verfolgen Abstammungsgeschichten über rekombinierende genomische Segmente", nl: "Probabilistische genealogische structuren traceren afstammings geschiedenissen over recombinerende genomische segmenten" },
          { en: "Simple pedigree analysis methods", es: "Métodos simples de análisis de pedigrí", de: "Einfache Stammbaum-Analysemethoden", nl: "Eenvoudige stamboom analyse methoden" },
          { en: "Linear inheritance patterns only", es: "Solo patrones de herencia lineales", de: "Nur lineare Vererbungsmuster", nl: "Alleen lineaire overerving patronen" },
          { en: "Fixed population size models", es: "Modelos de tamaño poblacional fijo", de: "Modelle mit fester Populationsgröße", nl: "Vaste populatiegrootte modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Ancestral recombination graphs extend coalescent theory by modeling how recombination creates different genealogical histories for adjacent genomic regions, crucial for understanding population genetic processes and demographic inference.",
          es: "Los grafos de recombinación ancestral extienden la teoría coalescente modelando cómo la recombinación crea diferentes historias genealógicas para regiones genómicas adyacentes, crucial para entender procesos genéticos poblacionales.",
          de: "Ancestrale Rekombinations-Graphen erweitern Koaleszenz-Theorie durch Modellierung wie Rekombination verschiedene genealogische Geschichten für benachbarte genomische Regionen schafft, entscheidend für Populationsgenetik-Prozesse.",
          nl: "Voorouderlijke recombinatie grafen breiden coalescent theorie uit door te modelleren hoe recombinatie verschillende genealogische geschiedenissen creëert voor aangrenzende genomische regio's, cruciaal voor populatie genetische processen."
        }
      },
      {
        question: {
          en: "What drives selective sweep detection through extended haplotype homozygosity analysis?",
          es: "¿Qué impulsa la detección de barridos selectivos a través de análisis de homocigosidad de haplotipo extendido?",
          de: "Was treibt Selektions-Sweep-Detektion durch erweiterte Haplotyp-Homozygositäts-Analyse an?",
          nl: "Wat drijft selectieve sweep detectie aan door uitgebreide haplotype homozygositeit analyse?"
        },
        options: [
          { en: "Hitchhiking effects create long-range linkage disequilibrium around beneficial mutations before recombination breaks them down", es: "Efectos de autoestop crean desequilibrio de ligamiento de largo alcance alrededor de mutaciones beneficiosas antes de que recombinación las descomponga", de: "Mitnahme-Effekte schaffen weitreichendes Kopplungsungleichgewicht um vorteilhafte Mutationen bevor Rekombination sie abbaut", nl: "Lifterseffecten creëren lange-afstands linkage disequilibrium rond voordelige mutaties voordat recombinatie ze afbreekt" },
          { en: "Random mating patterns", es: "Patrones de apareamiento aleatorio", de: "Zufällige Paarungsmuster", nl: "Willekeurige paring patronen" },
          { en: "Population bottleneck effects", es: "Efectos de cuello de botella poblacional", de: "Populationsengpass-Effekte", nl: "Populatie bottleneck effecten" },
          { en: "Migration between populations", es: "Migración entre poblaciones", de: "Migration zwischen Populationen", nl: "Migratie tussen populaties" }
        ],
        correct: 0,
        explanation: {
          en: "Extended haplotype homozygosity (EHH) detects recent positive selection by identifying unusually long haplotypes around beneficial alleles that haven't had time for recombination to break up the linkage, creating characteristic 'hitchhiking' signatures.",
          es: "La homocigosidad de haplotipo extendido (EHH) detecta selección positiva reciente identificando haplotipos inusualmente largos alrededor de alelos beneficiosos que no han tenido tiempo para que recombinación rompa el ligamiento.",
          de: "Erweiterte Haplotyp-Homozygosität (EHH) detektiert kürzliche positive Selektion durch Identifikation ungewöhnlich langer Haplotypen um vorteilhafte Allele, die keine Zeit für Rekombination hatten.",
          nl: "Uitgebreide haplotype homozygositeit (EHH) detecteert recente positieve selectie door identificatie van ongewoon lange haplotypes rond voordelige allelen die geen tijd hadden voor recombinatie om de koppeling te verbreken."
        }
      },
      {
        question: {
          en: "How does the neutral theory predict molecular evolution rates across functional constraints?",
          es: "¿Cómo predice la teoría neutral las tasas de evolución molecular a través de restricciones funcionales?",
          de: "Wie sagt die neutrale Theorie molekulare Evolutionsraten über funktionale Beschränkungen vorher?",
          nl: "Hoe voorspelt de neutrale theorie moleculaire evolutie snelheden over functionele beperkingen?"
        },
        options: [
          { en: "Synonymous sites evolve faster than nonsynonymous sites due to relaxed selective constraints on silent mutations", es: "Sitios sinónimos evolucionan más rápido que sitios no sinónimos debido a restricciones selectivas relajadas en mutaciones silenciosas", de: "Synonyme Stellen entwickeln sich schneller als nicht-synonyme Stellen aufgrund entspannter selektiver Beschränkungen bei stillen Mutationen", nl: "Synonyme plaatsen evolueren sneller dan niet-synonyme plaatsen door ontspannen selectieve beperkingen op stille mutaties" },
          { en: "All sites evolve at equal rates", es: "Todos los sitios evolucionan a tasas iguales", de: "Alle Stellen entwickeln sich mit gleichen Raten", nl: "Alle plaatsen evolueren met gelijke snelheden" },
          { en: "Nonsynonymous sites evolve fastest", es: "Sitios no sinónimos evolucionan más rápido", de: "Nicht-synonyme Stellen entwickeln sich am schnellsten", nl: "Niet-synonyme plaatsen evolueren het snelst" },
          { en: "Regulatory regions evolve fastest", es: "Regiones regulatorias evolucionan más rápido", de: "Regulatorische Regionen entwickeln sich am schnellsten", nl: "Regulatoire regio's evolueren het snelst" }
        ],
        correct: 0,
        explanation: {
          en: "The neutral theory predicts that evolutionary rates are inversely proportional to functional constraints: synonymous mutations (dS) > noncoding regions > nonsynonymous mutations (dN), with dN/dS ratios indicating selection strength.",
          es: "La teoría neutral predice que las tasas evolutivas son inversamente proporcionales a restricciones funcionales: mutaciones sinónimas (dS) > regiones no codificantes > mutaciones no sinónimas (dN).",
          de: "Die neutrale Theorie sagt vorher, dass Evolutionsraten umgekehrt proportional zu funktionalen Beschränkungen sind: synonyme Mutationen (dS) > nicht-kodierende Regionen > nicht-synonyme Mutationen (dN).",
          nl: "De neutrale theorie voorspelt dat evolutionaire snelheden omgekeerd evenredig zijn aan functionele beperkingen: synonyme mutaties (dS) > niet-coderende regio's > niet-synonyme mutaties (dN)."
        }
      },
      {
        question: {
          en: "What mechanism drives introgression detection through D-statistics and ABBA-BABA tests?",
          es: "¿Qué mecanismo impulsa la detección de introgresión a través de estadísticas D y pruebas ABBA-BABA?",
          de: "Welcher Mechanismus treibt Introgressions-Detektion durch D-Statistiken und ABBA-BABA-Tests an?",
          nl: "Welk mechanisme drijft introgressie detectie aan door D-statistieken en ABBA-BABA testen?"
        },
        options: [
          { en: "Asymmetric allele sharing patterns violate expectations from incomplete lineage sorting alone", es: "Patrones asimétricos de compartición alélica violan expectativas de solo clasificación incompleta de linajes", de: "Asymmetrische Allel-Teilungsmuster verletzen Erwartungen von unvollständiger Abstammungs-Sortierung allein", nl: "Asymmetrische allel delingspatronen schenden verwachtingen van alleen onvolledige afstamming sortering" },
          { en: "Simple phylogenetic relationships", es: "Relaciones filogenéticas simples", de: "Einfache phylogenetische Beziehungen", nl: "Eenvoudige fylogenetische relaties" },
          { en: "Random genetic drift effects", es: "Efectos de deriva genética aleatoria", de: "Zufällige genetische Drift-Effekte", nl: "Willekeurige genetische drift effecten" },
          { en: "Population size changes only", es: "Solo cambios de tamaño poblacional", de: "Nur Populationsgrößenänderungen", nl: "Alleen populatiegrootte veranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "D-statistics detect gene flow by comparing ABBA vs BABA site patterns across four taxa. Significant deviations from zero indicate introgression beyond what's expected from incomplete lineage sorting in the absence of gene flow.",
          es: "Las estadísticas D detectan flujo génico comparando patrones de sitios ABBA vs BABA a través de cuatro taxones. Desviaciones significativas de cero indican introgresión más allá de lo esperado.",
          de: "D-Statistiken detektieren Genfluss durch Vergleich von ABBA vs BABA Stellenmustern über vier Taxa. Signifikante Abweichungen von null zeigen Introgression jenseits der Erwartung an.",
          nl: "D-statistieken detecteren genstroom door vergelijking van ABBA vs BABA plaatspatronen over vier taxa. Significante afwijkingen van nul duiden introgressie aan voorbij verwachting."
        }
      },
      {
        question: {
          en: "How do polygenic adaptation models explain trait evolution through small-effect variants?",
          es: "¿Cómo explican los modelos de adaptación poligénica la evolución de rasgos a través de variantes de efecto pequeño?",
          de: "Wie erklären polygene Adaptationsmodelle Merkmals-Evolution durch Varianten mit kleinem Effekt?",
          nl: "Hoe verklaren polygene adaptatie modellen eigenschap evolutie door kleine-effect varianten?"
        },
        options: [
          { en: "Coordinated frequency shifts across many loci with additive effects create rapid phenotypic change without strong selection", es: "Cambios coordinados de frecuencia a través de muchos loci con efectos aditivos crean cambio fenotípico rápido sin selección fuerte", de: "Koordinierte Frequenzverschiebungen über viele Loci mit additiven Effekten schaffen schnelle phänotypische Änderung ohne starke Selektion", nl: "Gecoördineerde frequentie verschuivingen over vele loci met additieve effecten creëren snelle fenotypische verandering zonder sterke selectie" },
          { en: "Single gene mutations only", es: "Solo mutaciones de un gen", de: "Nur Einzelgen-Mutationen", nl: "Alleen enkele gen mutaties" },
          { en: "Large effect variants primarily", es: "Principalmente variantes de efecto grande", de: "Hauptsächlich Varianten mit großem Effekt", nl: "Hoofdzakelijk grote-effect varianten" },
          { en: "Random genetic drift", es: "Deriva genética aleatoria", de: "Zufällige genetische Drift", nl: "Willekeurige genetische drift" }
        ],
        correct: 0,
        explanation: {
          en: "Polygenic adaptation involves subtle frequency changes across many trait-associated loci, allowing rapid adaptation through standing genetic variation without requiring new beneficial mutations or strong selection on individual variants.",
          es: "La adaptación poligénica involucra cambios sutiles de frecuencia a través de muchos loci asociados a rasgos, permitiendo adaptación rápida a través de variación genética existente.",
          de: "Polygene Adaptation umfasst subtile Frequenzänderungen über viele merkmals-assoziierte Loci, ermöglicht schnelle Adaptation durch bestehende genetische Variation.",
          nl: "Polygene adaptatie behelst subtiele frequentie veranderingen over vele eigenschap-geassocieerde loci, snelle adaptatie mogelijk makend door bestaande genetische variatie."
        }
      },
      {
        question: {
          en: "What drives population structure inference through principal component analysis of genetic variation?",
          es: "¿Qué impulsa la inferencia de estructura poblacional a través de análisis de componentes principales de variación genética?",
          de: "Was treibt Populationsstruktur-Inferenz durch Hauptkomponentenanalyse genetischer Variation an?",
          nl: "Wat drijft populatie structuur inferentie aan door hoofdcomponent analyse van genetische variatie?"
        },
        options: [
          { en: "Geographic isolation and demographic history create covariance patterns in allele frequencies across populations", es: "Aislamiento geográfico e historia demográfica crean patrones de covarianza en frecuencias alélicas a través de poblaciones", de: "Geografische Isolation und demografische Geschichte schaffen Kovarianz-Muster in Allelfrequenzen über Populationen", nl: "Geografische isolatie en demografische geschiedenis creëren covariantie patronen in allelfrequenties over populaties" },
          { en: "Random sampling effects only", es: "Solo efectos de muestreo aleatorio", de: "Nur zufällige Stichprobeneffekte", nl: "Alleen willekeurige steekproef effecten" },
          { en: "Individual genetic differences", es: "Diferencias genéticas individuales", de: "Individuelle genetische Unterschiede", nl: "Individuele genetische verschillen" },
          { en: "Laboratory batch effects", es: "Efectos de lote de laboratorio", de: "Labor-Batch-Effekte", nl: "Laboratorium batch effecten" }
        ],
        correct: 0,
        explanation: {
          en: "PCA captures population structure by identifying axes of genetic variation that reflect shared evolutionary history, migration patterns, and demographic events that have shaped allele frequency covariance between populations.",
          es: "PCA captura estructura poblacional identificando ejes de variación genética que reflejan historia evolutiva compartida, patrones de migración y eventos demográficos.",
          de: "PCA erfasst Populationsstruktur durch Identifikation von Achsen genetischer Variation, die gemeinsame Evolutionsgeschichte, Migrationsmuster und demografische Ereignisse widerspiegeln.",
          nl: "PCA vangt populatie structuur door identificatie van assen van genetische variatie die gedeelde evolutionaire geschiedenis, migratie patronen en demografische gebeurtenissen reflecteren."
        }
      },
      {
        question: {
          en: "How does ancient DNA analysis reveal population replacement versus continuity models?",
          es: "¿Cómo revela el análisis de ADN antiguo modelos de reemplazo poblacional versus continuidad?",
          de: "Wie enthüllt alte DNA-Analyse Populationsersatz versus Kontinuitäts-Modelle?",
          nl: "Hoe onthult oude DNA analyse populatie vervanging versus continuïteit modellen?"
        },
        options: [
          { en: "Temporal genetic discontinuities versus gradual allele frequency changes distinguish demographic scenarios", es: "Discontinuidades genéticas temporales versus cambios graduales de frecuencia alélica distinguen escenarios demográficos", de: "Zeitliche genetische Diskontinuitäten versus graduelle Allelfrequenz-Änderungen unterscheiden demografische Szenarien", nl: "Temporele genetische discontinuïteiten versus geleidelijke allelfrequentie veranderingen onderscheiden demografische scenario's" },
          { en: "Morphological analysis only", es: "Solo análisis morfológico", de: "Nur morphologische Analyse", nl: "Alleen morfologische analyse" },
          { en: "Carbon dating methods", es: "Métodos de datación por carbono", de: "Kohlenstoff-Datierungsmethoden", nl: "Koolstof datering methoden" },
          { en: "Archaeological artifact analysis", es: "Análisis de artefactos arqueológicos", de: "Archäologische Artefakt-Analyse", nl: "Archeologische artefact analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Ancient DNA reveals population dynamics by comparing genetic profiles across time periods. Abrupt genetic shifts suggest population replacement, while gradual changes indicate cultural diffusion or admixture with demographic continuity.",
          es: "El ADN antiguo revela dinámicas poblacionales comparando perfiles genéticos a través de períodos temporales. Cambios genéticos abruptos sugieren reemplazo poblacional.",
          de: "Alte DNA enthüllt Populationsdynamiken durch Vergleich genetischer Profile über Zeitperioden. Abrupte genetische Verschiebungen deuten auf Populationsersatz hin.",
          nl: "Oude DNA onthult populatie dynamiek door vergelijking van genetische profielen over tijdsperioden. Abrupte genetische verschuivingen suggereren populatie vervanging."
        }
      },
      {
        question: {
          en: "What mechanism enables detection of archaic introgression through statistical phasing approaches?",
          es: "¿Qué mecanismo permite la detección de introgresión arcaica a través de enfoques de fase estadística?",
          de: "Welcher Mechanismus ermöglicht Detektion archaischer Introgression durch statistische Phasierungs-Ansätze?",
          nl: "Welk mechanisme stelt detectie van archaïsche introgressie mogelijk door statistische faserings benaderingen?"
        },
        options: [
          { en: "Long divergent haplotype blocks with elevated nucleotide diversity indicate ancient admixture events", es: "Bloques haplotípicos divergentes largos con diversidad nucleotídica elevada indican eventos de mezcla antiguos", de: "Lange divergente Haplotyp-Blöcke mit erhöhter Nukleotid-Diversität zeigen alte Vermischungs-Ereignisse an", nl: "Lange divergente haplotype blokken met verhoogde nucleotide diversiteit duiden oude vermenging gebeurtenissen aan" },
          { en: "Simple allele frequency differences", es: "Diferencias simples de frecuencia alélica", de: "Einfache Allelfrequenz-Unterschiede", nl: "Eenvoudige allelfrequentie verschillen" },
          { en: "Random mutation patterns", es: "Patrones de mutación aleatorios", de: "Zufällige Mutationsmuster", nl: "Willekeurige mutatie patronen" },
          { en: "Population bottleneck signatures", es: "Firmas de cuello de botella poblacional", de: "Populationsengpass-Signaturen", nl: "Populatie bottleneck handtekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "Archaic introgression creates characteristic signatures: long haplotype blocks with deep coalescence times, elevated diversity, and divergent alleles that persist due to large effective population sizes in archaic populations.",
          es: "La introgresión arcaica crea firmas características: bloques haplotípicos largos con tiempos de coalescencia profundos, diversidad elevada y alelos divergentes.",
          de: "Archaische Introgression schafft charakteristische Signaturen: lange Haplotyp-Blöcke mit tiefen Koaleszenz-Zeiten, erhöhte Diversität und divergente Allele.",
          nl: "Archaïsche introgressie creëert karakteristieke handtekeningen: lange haplotype blokken met diepe coalescente tijden, verhoogde diversiteit en divergente allelen."
        }
      },
      {
        question: {
          en: "How do demographic inference methods distinguish population size changes from migration?",
          es: "¿Cómo distinguen los métodos de inferencia demográfica cambios de tamaño poblacional de migración?",
          de: "Wie unterscheiden demografische Inferenz-Methoden Populationsgrößenänderungen von Migration?",
          nl: "Hoe onderscheiden demografische inferentie methoden populatiegrootte veranderingen van migratie?"
        },
        options: [
          { en: "Site frequency spectra patterns and coalescence time distributions reveal distinct signatures of demographic events", es: "Patrones de espectros de frecuencia de sitios y distribuciones de tiempo de coalescencia revelan firmas distintas de eventos demográficos", de: "Stellenfrequenz-Spektrum-Muster und Koaleszenz-Zeitverteilungen enthüllen unterschiedliche Signaturen demografischer Ereignisse", nl: "Plaats frequentie spectra patronen en coalescente tijdverdelingen onthullen onderscheidende handtekeningen van demografische gebeurtenissen" },
          { en: "Simple allele counting methods", es: "Métodos simples de conteo de alelos", de: "Einfache Allel-Zählmethoden", nl: "Eenvoudige allel telmethoden" },
          { en: "Geographic distance measurements", es: "Mediciones de distancia geográfica", de: "Geografische Distanzmessungen", nl: "Geografische afstand metingen" },
          { en: "Morphological trait analysis", es: "Análisis de rasgos morfológicos", de: "Morphologische Merkmals-Analyse", nl: "Morfologische eigenschap analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Population bottlenecks create excess rare variants and recent coalescence events, while migration generates intermediate frequency variants and shared ancestry patterns that can be distinguished through coalescent-based analyses.",
          es: "Los cuellos de botella poblacionales crean exceso de variantes raras y eventos de coalescencia recientes, mientras migración genera variantes de frecuencia intermedia.",
          de: "Populationsengpässe schaffen überschüssige seltene Varianten und kürzliche Koaleszenz-Ereignisse, während Migration Varianten mittlerer Frequenz generiert.",
          nl: "Populatie bottlenecks creëren overtollige zeldzame varianten en recente coalescente gebeurtenissen, terwijl migratie tussenliggende frequentie varianten genereert."
        }
      },
      {
        question: {
          en: "What drives selective constraint evolution in protein-coding sequences through dN/dS analysis?",
          es: "¿Qué impulsa la evolución de restricción selectiva en secuencias codificantes de proteínas a través de análisis dN/dS?",
          de: "Was treibt selektive Beschränkungs-Evolution in Protein-kodierenden Sequenzen durch dN/dS-Analyse an?",
          nl: "Wat drijft selectieve beperking evolutie aan in eiwit-coderende sequenties door dN/dS analyse?"
        },
        options: [
          { en: "Functional domains under purifying selection show dN/dS < 1 while adaptive regions may exhibit dN/dS > 1", es: "Dominios funcionales bajo selección purificadora muestran dN/dS < 1 mientras regiones adaptativas pueden exhibir dN/dS > 1", de: "Funktionale Domänen unter reinigender Selektion zeigen dN/dS < 1 während adaptive Regionen dN/dS > 1 zeigen können", nl: "Functionele domeinen onder zuiverende selectie tonen dN/dS < 1 terwijl adaptieve regio's dN/dS > 1 kunnen vertonen" },
          { en: "All protein regions evolve at equal rates", es: "Todas las regiones proteicas evolucionan a tasas iguales", de: "Alle Proteinregionen entwickeln sich mit gleichen Raten", nl: "Alle eiwit regio's evolueren met gelijke snelheden" },
          { en: "Synonymous sites experience selection", es: "Sitios sinónimos experimentan selección", de: "Synonyme Stellen erfahren Selektion", nl: "Synonyme plaatsen ervaren selectie" },
          { en: "Recombination drives protein evolution", es: "Recombinación impulsa evolución proteica", de: "Rekombination treibt Protein-Evolution an", nl: "Recombinatie drijft eiwit evolutie aan" }
        ],
        correct: 0,
        explanation: {
          en: "The dN/dS ratio compares nonsynonymous to synonymous substitution rates. Values <1 indicate purifying selection removing deleterious mutations, while values >1 suggest positive selection favoring amino acid changes.",
          es: "La proporción dN/dS compara tasas de sustitución no sinónimas a sinónimas. Valores <1 indican selección purificadora removiendo mutaciones deletéreas.",
          de: "Das dN/dS-Verhältnis vergleicht nicht-synonyme zu synonymen Substitutionsraten. Werte <1 zeigen reinigende Selektion an, die schädliche Mutationen entfernt.",
          nl: "De dN/dS verhouding vergelijkt niet-synonyme met synonyme substitutie snelheden. Waarden <1 duiden zuiverende selectie aan die schadelijke mutaties verwijdert."
        }
      },
      {
        question: {
          en: "How does genome-wide association mapping resolve population stratification confounding?",
          es: "¿Cómo resuelve el mapeo de asociación a nivel del genoma la confusión de estratificación poblacional?",
          de: "Wie löst genomweites Assoziations-Mapping Populationsstratifikations-Konfundierung auf?",
          nl: "Hoe lost genoom-brede associatie kartering populatie stratificatie verstoring op?"
        },
        options: [
          { en: "Principal component analysis and mixed linear models correct for genetic ancestry differences", es: "Análisis de componentes principales y modelos lineales mixtos corrigen diferencias de ancestría genética", de: "Hauptkomponentenanalyse und gemischte lineare Modelle korrigieren für genetische Abstammungsunterschiede", nl: "Hoofdcomponent analyse en gemengde lineaire modellen corrigeren voor genetische afstamming verschillen" },
          { en: "Simple case-control comparisons", es: "Comparaciones simples caso-control", de: "Einfache Fall-Kontroll-Vergleiche", nl: "Eenvoudige case-controle vergelijkingen" },
          { en: "Random population sampling", es: "Muestreo poblacional aleatorio", de: "Zufällige Populationsstichproben", nl: "Willekeurige populatie steekproef" },
          { en: "Geographic matching only", es: "Solo emparejamiento geográfico", de: "Nur geografische Zuordnung", nl: "Alleen geografische matching" }
        ],
        correct: 0,
        explanation: {
          en: "Population stratification creates spurious associations when cases and controls differ in ancestry. Principal components capture population structure, while mixed models account for cryptic relatedness and demographic history.",
          es: "La estratificación poblacional crea asociaciones espurias cuando casos y controles difieren en ancestría. Los componentes principales capturan estructura poblacional.",
          de: "Populationsstratifikation schafft falsche Assoziationen wenn Fälle und Kontrollen sich in Abstammung unterscheiden. Hauptkomponenten erfassen Populationsstruktur.",
          nl: "Populatie stratificatie creëert valse associaties wanneer cases en controles verschillen in afstamming. Hoofdcomponenten vangen populatie structuur."
        }
      },
      {
        question: {
          en: "What mechanism drives reproductive isolation through chromosomal rearrangements in speciation?",
          es: "¿Qué mecanismo impulsa el aislamiento reproductivo a través de reordenamientos cromosómicos en especiación?",
          de: "Welcher Mechanismus treibt reproduktive Isolation durch chromosomale Umstellungen in Artbildung an?",
          nl: "Welk mechanisme drijft reproductieve isolatie aan door chromosomale herrangschikkingen in soortvorming?"
        },
        options: [
          { en: "Suppressed recombination in heterokaryotypes reduces gene flow and enables divergence of linked loci", es: "Recombinación suprimida en heterocariótipos reduce flujo génico y permite divergencia de loci ligados", de: "Unterdrückte Rekombination in Heterokaryotypen reduziert Genfluss und ermöglicht Divergenz verknüpfter Loci", nl: "Onderdrukte recombinatie in heterokaryotypes vermindert genstroom en stelt divergentie van gekoppelde loci mogelijk" },
          { en: "Direct fertility reduction only", es: "Solo reducción directa de fertilidad", de: "Nur direkte Fruchtbarkeitsreduktion", nl: "Alleen directe vruchtbaarheid vermindering" },
          { en: "Geographic separation effects", es: "Efectos de separación geográfica", de: "Geografische Trennungseffekte", nl: "Geografische scheiding effecten" },
          { en: "Behavioral isolation mechanisms", es: "Mecanismos de aislamiento conductual", de: "Verhaltens-Isolationsmechanismen", nl: "Gedragsisolatie mechanismen" }
        ],
        correct: 0,
        explanation: {
          en: "Chromosomal rearrangements like inversions and translocations create reproductive barriers by suppressing recombination in heterozygotes, maintaining linkage disequilibrium and allowing divergent evolution of gene complexes even with gene flow.",
          es: "Los reordenamientos cromosómicos como inversiones y translocaciones crean barreras reproductivas suprimiendo recombinación en heterocigotos, manteniendo desequilibrio de ligamiento.",
          de: "Chromosomale Umstellungen wie Inversionen und Translokationen schaffen reproduktive Barrieren durch Unterdrückung der Rekombination in Heterozygoten.",
          nl: "Chromosomale herrangschikkingen zoals inversies en translocaties creëren reproductieve barrières door recombinatie in heterozygoten te onderdrukken."
        }
      },
      {
        question: {
          en: "How do molecular clocks calibrate evolutionary timescales through substitution rate variation?",
          es: "¿Cómo calibran los relojes moleculares escalas temporales evolutivas a través de variación de tasa de sustitución?",
          de: "Wie kalibrieren molekulare Uhren evolutionäre Zeitskalen durch Substitutionsraten-Variation?",
          nl: "Hoe kalibreren moleculaire klokken evolutionaire tijdschalen door substitutie snelheid variatie?"
        },
        options: [
          { en: "Fossil calibration points and relaxed clock models account for rate heterogeneity across lineages and genomic regions", es: "Puntos de calibración fósil y modelos de reloj relajado explican heterogeneidad de tasa a través de linajes y regiones genómicas", de: "Fossil-Kalibrierungspunkte und entspannte Uhr-Modelle erklären Raten-Heterogenität über Abstammungslinien und genomische Regionen", nl: "Fossiel kalibratie punten en ontspannen klok modellen verklaren snelheid heterogeniteit over afstammingslijnen en genomische regio's" },
          { en: "Constant mutation rates across all species", es: "Tasas de mutación constantes en todas las especies", de: "Konstante Mutationsraten über alle Arten", nl: "Constante mutatie snelheden over alle soorten" },
          { en: "Simple distance measurements only", es: "Solo mediciones de distancia simples", de: "Nur einfache Distanzmessungen", nl: "Alleen eenvoudige afstand metingen" },
          { en: "Population size effects primarily", es: "Principalmente efectos de tamaño poblacional", de: "Hauptsächlich Populationsgrößeneffekte", nl: "Hoofdzakelijk populatiegrootte effecten" }
        ],
        correct: 0,
        explanation: {
          en: "Molecular clocks use known fossil dates to calibrate mutation rates, employing relaxed clock models that allow rate variation across branches while maintaining temporal constraints from paleontological evidence.",
          es: "Los relojes moleculares usan fechas fósiles conocidas para calibrar tasas de mutación, empleando modelos de reloj relajado que permiten variación de tasa.",
          de: "Molekulare Uhren verwenden bekannte Fossil-Daten zur Kalibrierung von Mutationsraten, verwenden entspannte Uhr-Modelle die Raten-Variation erlauben.",
          nl: "Moleculaire klokken gebruiken bekende fossiel datums om mutatie snelheden te kalibreren, ontspannen klok modellen gebruikend die snelheid variatie toestaan."
        }
      },
      {
        question: {
          en: "What drives adaptive radiations through ecological opportunity and key innovations?",
          es: "¿Qué impulsa las radiaciones adaptativas a través de oportunidad ecológica e innovaciones clave?",
          de: "Was treibt adaptive Radiationen durch ökologische Gelegenheit und Schlüssel-Innovationen an?",
          nl: "Wat drijft adaptieve radiaties aan door ecologische kans en sleutel innovaties?"
        },
        options: [
          { en: "Novel trait evolution enables exploitation of new ecological niches leading to rapid diversification", es: "Evolución de rasgos novedosos permite explotación de nuevos nichos ecológicos llevando a diversificación rápida", de: "Neuartige Merkmals-Evolution ermöglicht Ausbeutung neuer ökologischer Nischen und führt zu schneller Diversifikation", nl: "Nieuwe eigenschap evolutie stelt exploitatie van nieuwe ecologische niches mogelijk leidend tot snelle diversificatie" },
          { en: "Random genetic drift primarily", es: "Principalmente deriva genética aleatoria", de: "Hauptsächlich zufällige genetische Drift", nl: "Hoofdzakelijk willekeurige genetische drift" },
          { en: "Population bottlenecks only", es: "Solo cuellos de botella poblacionales", de: "Nur Populationsengpässe", nl: "Alleen populatie bottlenecks" },
          { en: "Geographic isolation alone", es: "Solo aislamiento geográfico", de: "Nur geografische Isolation", nl: "Alleen geografische isolatie" }
        ],
        correct: 0,
        explanation: {
          en: "Adaptive radiations occur when lineages evolve key innovations (like flight, photosynthesis, or specialized feeding) that open new ecological opportunities, leading to rapid speciation and morphological divergence.",
          es: "Las radiaciones adaptativas ocurren cuando linajes evolucionan innovaciones clave (como vuelo, fotosíntesis o alimentación especializada) que abren nuevas oportunidades ecológicas.",
          de: "Adaptive Radiationen treten auf wenn Abstammungslinien Schlüssel-Innovationen (wie Flug, Photosynthese oder spezialisierte Ernährung) entwickeln die neue ökologische Möglichkeiten eröffnen.",
          nl: "Adaptieve radiaties treden op wanneer afstammingslijnen sleutel innovaties evolueren (zoals vlucht, fotosynthese of gespecialiseerde voeding) die nieuwe ecologische kansen openen."
        }
      },
      {
        question: {
          en: "How does horizontal gene transfer impact phylogenetic reconstruction accuracy?",
          es: "¿Cómo impacta la transferencia horizontal de genes la precisión de reconstrucción filogenética?",
          de: "Wie beeinflusst horizontaler Gentransfer die Genauigkeit phylogenetischer Rekonstruktion?",
          nl: "Hoe beïnvloedt horizontale gentransfer fylogenetische reconstructie nauwkeurigheid?"
        },
        options: [
          { en: "Conflicting gene trees violate assumptions of vertical inheritance creating incongruent phylogenetic signals", es: "Árboles génicos conflictivos violan suposiciones de herencia vertical creando señales filogenéticas incongruentes", de: "Konfliktierende Gen-Bäume verletzen Annahmen vertikaler Vererbung und schaffen inkongruente phylogenetische Signale", nl: "Conflicterende gen bomen schenden aannames van verticale overerving creërend incongruente fylogenetische signalen" },
          { en: "All genes show identical evolutionary histories", es: "Todos los genes muestran historias evolutivas idénticas", de: "Alle Gene zeigen identische Evolutionsgeschichten", nl: "Alle genen tonen identieke evolutionaire geschiedenissen" },
          { en: "Simple distance calculations remain accurate", es: "Cálculos de distancia simples permanecen precisos", de: "Einfache Distanzberechnungen bleiben genau", nl: "Eenvoudige afstand berekeningen blijven nauwkeurig" },
          { en: "Morphological data becomes more reliable", es: "Datos morfológicos se vuelven más confiables", de: "Morphologische Daten werden zuverlässiger", nl: "Morfologische data worden betrouwbaarder" }
        ],
        correct: 0,
        explanation: {
          en: "Horizontal gene transfer creates reticulate evolution where different genes have different evolutionary histories, causing gene tree-species tree conflicts that complicate phylogenetic inference and require network-based approaches.",
          es: "La transferencia horizontal de genes crea evolución reticulada donde diferentes genes tienen diferentes historias evolutivas, causando conflictos entre árboles génicos y de especies.",
          de: "Horizontaler Gentransfer schafft retikuläre Evolution wo verschiedene Gene verschiedene Evolutionsgeschichten haben, verursacht Gen-Baum-Arten-Baum-Konflikte.",
          nl: "Horizontale gentransfer creëert reticulaire evolutie waar verschillende genen verschillende evolutionaire geschiedenissen hebben, gen boom-soorten boom conflicten veroorzakend."
        }
      },
      {
        question: {
          en: "What mechanism drives coevolutionary arms races between hosts and pathogens?",
          es: "¿Qué mecanismo impulsa carreras armamentistas coevolutivas entre huéspedes y patógenos?",
          de: "Welcher Mechanismus treibt koevolutionäre Rüstungswettläufe zwischen Wirten und Pathogenen an?",
          nl: "Welk mechanisme drijft co-evolutionaire wapenwedlopen aan tussen gastheren en pathogenen?"
        },
        options: [
          { en: "Frequency-dependent selection creates cyclical dynamics where rare resistance/virulence alleles gain advantages", es: "Selección dependiente de frecuencia crea dinámicas cíclicas donde alelos raros de resistencia/virulencia ganan ventajas", de: "Frequenzabhängige Selektion schafft zyklische Dynamiken wo seltene Resistenz/Virulenz-Allele Vorteile gewinnen", nl: "Frequentie-afhankelijke selectie creëert cyclische dynamiek waar zeldzame resistentie/virulentie allelen voordelen behalen" },
          { en: "Static genetic interactions only", es: "Solo interacciones genéticas estáticas", de: "Nur statische genetische Interaktionen", nl: "Alleen statische genetische interacties" },
          { en: "Random mutation accumulation", es: "Acumulación de mutaciones aleatorias", de: "Zufällige Mutationsakkumulation", nl: "Willekeurige mutatie accumulatie" },
          { en: "Population size effects primarily", es: "Principalmente efectos de tamaño poblacional", de: "Hauptsächlich Populationsgrößeneffekte", nl: "Hoofdzakelijk populatiegrootte effecten" }
        ],
        correct: 0,
        explanation: {
          en: "Host-pathogen coevolution involves negative frequency-dependent selection where common genotypes become targets for selection, creating Red Queen dynamics with ongoing adaptation and counter-adaptation cycles.",
          es: "La coevolución huésped-patógeno involucra selección negativa dependiente de frecuencia donde genotipos comunes se vuelven objetivos de selección, creando dinámicas de Reina Roja.",
          de: "Wirt-Pathogen-Koevolution umfasst negative frequenzabhängige Selektion wo häufige Genotypen Ziele für Selektion werden, schafft Rote Königin-Dynamiken.",
          nl: "Gastheer-pathogeen co-evolutie behelst negatieve frequentie-afhankelijke selectie waar gewone genotypen doelen voor selectie worden, Rode Koningin dynamiek creërend."
        }
      },
      {
        question: {
          en: "How do heterozygosity patterns reveal population bottlenecks and founder effects?",
          es: "¿Cómo revelan los patrones de heterocigosidad cuellos de botella poblacionales y efectos fundadores?",
          de: "Wie enthüllen Heterozygositäts-Muster Populationsengpässe und Gründer-Effekte?",
          nl: "Hoe onthullen heterozygositeit patronen populatie bottlenecks en oprichter effecten?"
        },
        options: [
          { en: "Reduced heterozygosity and increased homozygosity by descent indicate recent demographic contractions", es: "Heterocigosidad reducida y homocigosidad aumentada por descendencia indican contracciones demográficas recientes", de: "Reduzierte Heterozygosität und erhöhte Homozygosität durch Abstammung zeigen kürzliche demografische Kontraktionen an", nl: "Verminderde heterozygositeit en verhoogde homozygositeit door afstamming duiden recente demografische contracties aan" },
          { en: "Increased genetic diversity patterns", es: "Patrones de diversidad genética aumentada", de: "Erhöhte genetische Diversitätsmuster", nl: "Verhoogde genetische diversiteit patronen" },
          { en: "Random allele distribution effects", es: "Efectos de distribución alélica aleatoria", de: "Zufällige Allel-Verteilungseffekte", nl: "Willekeurige allel distributie effecten" },
          { en: "Mutation rate acceleration", es: "Aceleración de tasa de mutación", de: "Mutationsraten-Beschleunigung", nl: "Mutatie snelheid versnelling" }
        ],
        correct: 0,
        explanation: {
          en: "Population bottlenecks reduce effective population size, leading to loss of allelic diversity and increased inbreeding. This creates characteristic patterns of reduced heterozygosity and elevated identity-by-descent sharing.",
          es: "Los cuellos de botella poblacionales reducen el tamaño poblacional efectivo, llevando a pérdida de diversidad alélica y endogamia aumentada. Esto crea patrones característicos.",
          de: "Populationsengpässe reduzieren effektive Populationsgröße, führen zu Verlust allelischer Diversität und erhöhter Inzucht. Dies schafft charakteristische Muster.",
          nl: "Populatie bottlenecks verminderen effectieve populatiegrootte, leidend tot verlies van allelische diversiteit en verhoogde inteelt. Dit creëert karakteristieke patronen."
        }
      },
      {
        question: {
          en: "What drives species tree inference when gene trees conflict due to incomplete lineage sorting?",
          es: "¿Qué impulsa la inferencia de árbol de especies cuando árboles génicos entran en conflicto debido a clasificación incompleta de linajes?",
          de: "Was treibt Arten-Baum-Inferenz an wenn Gen-Bäume aufgrund unvollständiger Abstammungs-Sortierung konfliktieren?",
          nl: "Wat drijft soorten boom inferentie aan wanneer gen bomen conflicteren door onvolledige afstamming sortering?"
        },
        options: [
          { en: "Coalescent-based methods weight gene tree topologies by their probability under population genetic models", es: "Métodos basados en coalescencia pesan topologías de árboles génicos por su probabilidad bajo modelos genéticos poblacionales", de: "Koaleszenz-basierte Methoden gewichten Gen-Baum-Topologien nach ihrer Wahrscheinlichkeit unter populationsgenetischen Modellen", nl: "Coalescent-gebaseerde methoden wegen gen boom topologieën naar hun waarschijnlijkheid onder populatie genetische modellen" },
          { en: "Simple majority rule consensus trees", es: "Árboles de consenso de regla de mayoría simples", de: "Einfache Mehrheitsregel-Konsens-Bäume", nl: "Eenvoudige meerderheidsregel consensus bomen" },
          { en: "Distance-based clustering only", es: "Solo agrupamiento basado en distancia", de: "Nur distanz-basierte Clusterung", nl: "Alleen afstand-gebaseerde clustering" },
          { en: "Morphological character analysis", es: "Análisis de caracteres morfológicos", de: "Morphologische Charakter-Analyse", nl: "Morfologische karakter analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Coalescent-based species tree methods like ASTRAL and SVDQuartets account for gene tree discordance due to incomplete lineage sorting by modeling the probability of different gene tree topologies given population parameters.",
          es: "Los métodos de árbol de especies basados en coalescencia como ASTRAL y SVDQuartets explican discordancia de árboles génicos debido a clasificación incompleta de linajes.",
          de: "Koaleszenz-basierte Arten-Baum-Methoden wie ASTRAL und SVDQuartets erklären Gen-Baum-Diskordanz aufgrund unvollständiger Abstammungs-Sortierung.",
          nl: "Coalescent-gebaseerde soorten boom methoden zoals ASTRAL en SVDQuartets verklaren gen boom discordantie door onvolledige afstamming sortering."
        }
      },
      {
        question: {
          en: "How does chromatin immunoprecipitation sequencing (ChIP-seq) reveal transcription factor binding dynamics?",
          es: "¿Cómo revela la secuenciación de inmunoprecipitación de cromatina (ChIP-seq) las dinámicas de unión de factores de transcripción?",
          de: "Wie enthüllt Chromatin-Immunpräzipitation-Sequenzierung (ChIP-seq) Transkriptionsfaktor-Bindungsdynamiken?",
          nl: "Hoe onthult chromatin immunoprecipitatie sequencing (ChIP-seq) transcriptiefactor bindingsdynamieken?"
        },
        options: [
          { en: "Cross-linking protein-DNA complexes, immunoprecipitating specific factors, then sequencing bound DNA regions", es: "Entrecruzando complejos proteína-ADN, inmunoprecipitando factores específicos, luego secuenciando regiones de ADN unidas", de: "Quervernetzung von Protein-DNA-Komplexen, Immunpräzipitation spezifischer Faktoren, dann Sequenzierung gebundener DNA-Regionen", nl: "Cross-linking eiwit-DNA complexen, immunoprecipiteren van specifieke factoren, dan sequencen van gebonden DNA regio's" },
          { en: "Direct sequencing of transcription factor proteins", es: "Secuenciación directa de proteínas de factores de transcripción", de: "Direkte Sequenzierung von Transkriptionsfaktor-Proteinen", nl: "Directe sequencing van transcriptiefactor eiwitten" },
          { en: "Measuring mRNA expression levels only", es: "Midiendo solo niveles de expresión de ARNm", de: "Nur Messung von mRNA-Expressionsniveaus", nl: "Alleen meten van mRNA expressie niveaus" },
          { en: "Optical microscopy of fluorescent proteins", es: "Microscopía óptica de proteínas fluorescentes", de: "Optische Mikroskopie fluoreszierender Proteine", nl: "Optische microscopie van fluorescente eiwitten" }
        ],
        correct: 0,
        explanation: {
          en: "ChIP-seq uses formaldehyde cross-linking to capture protein-DNA interactions in vivo, followed by chromatin shearing, immunoprecipitation with specific antibodies, and high-throughput sequencing to map genome-wide binding sites of transcription factors and histone modifications.",
          es: "ChIP-seq usa entrecruzamiento con formaldehído para capturar interacciones proteína-ADN in vivo, seguido de fragmentación de cromatina, inmunoprecipitación con anticuerpos específicos y secuenciación de alto rendimiento para mapear sitios de unión en todo el genoma.",
          de: "ChIP-seq verwendet Formaldehyd-Quervernetzung um Protein-DNA-Interaktionen in vivo zu erfassen, gefolgt von Chromatin-Fragmentierung, Immunpräzipitation mit spezifischen Antikörpern und Hochdurchsatz-Sequenzierung zur genomweiten Kartierung von Bindungsstellen.",
          nl: "ChIP-seq gebruikt formaldehyde cross-linking om eiwit-DNA interacties in vivo vast te leggen, gevolgd door chromatin fragmentatie, immunoprecipitatie met specifieke antilichamen en high-throughput sequencing om genoom-brede bindingssites te karteren."
        }
      },
      {
        question: {
          en: "What molecular mechanism underlies CRISPR-Cas9 target recognition and DNA cleavage?",
          es: "¿Qué mecanismo molecular subyace al reconocimiento de objetivo y escisión de ADN de CRISPR-Cas9?",
          de: "Welcher molekulare Mechanismus liegt der CRISPR-Cas9-Zielerkennung und DNA-Spaltung zugrunde?",
          nl: "Welk moleculair mechanisme ligt ten grondslag aan CRISPR-Cas9 doel herkenning en DNA splitsing?"
        },
        options: [
          { en: "Guide RNA directs Cas9 to complementary DNA sequences adjacent to PAM motifs, forming R-loops before double-strand cleavage", es: "El ARN guía dirige Cas9 a secuencias de ADN complementarias adyacentes a motivos PAM, formando R-loops antes del corte de doble cadena", de: "Leit-RNA dirigiert Cas9 zu komplementären DNA-Sequenzen neben PAM-Motiven, bildet R-Schleifen vor Doppelstrang-Spaltung", nl: "Gids RNA dirigeert Cas9 naar complementaire DNA sequenties naast PAM motieven, vormend R-loops voor dubbele-streng splitsing" },
          { en: "Random DNA binding followed by sequence verification", es: "Unión aleatoria de ADN seguida de verificación de secuencia", de: "Zufällige DNA-Bindung gefolgt von Sequenzverifizierung", nl: "Willekeurige DNA binding gevolgd door sequentie verificatie" },
          { en: "Protein-protein interactions with DNA-binding domains", es: "Interacciones proteína-proteína con dominios de unión a ADN", de: "Protein-Protein-Interaktionen mit DNA-bindenden Domänen", nl: "Eiwit-eiwit interacties met DNA-bindende domeinen" },
          { en: "Enzymatic digestion of RNA polymerase", es: "Digestión enzimática de ARN polimerasa", de: "Enzymatische Verdauung von RNA-Polymerase", nl: "Enzymatische vertering van RNA polymerase" }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR-Cas9 uses a guide RNA (gRNA) that forms a complex with Cas9 protein. The gRNA directs the complex to target DNA through Watson-Crick base pairing, but only at sites adjacent to protospacer adjacent motif (PAM) sequences. Upon binding, the system forms R-loops and Cas9's nuclease domains cleave both DNA strands.",
          es: "CRISPR-Cas9 usa un ARN guía (gRNA) que forma un complejo con la proteína Cas9. El gRNA dirige el complejo al ADN objetivo a través del apareamiento de bases Watson-Crick, pero solo en sitios adyacentes a secuencias de motivo adyacente al protospaciador (PAM).",
          de: "CRISPR-Cas9 verwendet eine Leit-RNA (gRNA), die einen Komplex mit Cas9-Protein bildet. Die gRNA dirigiert den Komplex zur Ziel-DNA durch Watson-Crick-Basenpaarung, aber nur an Stellen neben Protospacer-angrenzenden Motiv (PAM) Sequenzen.",
          nl: "CRISPR-Cas9 gebruikt een gids RNA (gRNA) dat een complex vormt met Cas9 eiwit. Het gRNA dirigeert het complex naar doel DNA door Watson-Crick base paring, maar alleen op sites naast protospacer aangrenzende motief (PAM) sequenties."
        }
      },
      {
        question: {
          en: "How do histone deacetylase inhibitors affect gene expression patterns in cancer cells?",
          es: "¿Cómo afectan los inhibidores de histona desacetilasa los patrones de expresión génica en células cancerosas?",
          de: "Wie beeinflussen Histon-Deacetylase-Inhibitoren Genexpressionsmuster in Krebszellen?",
          nl: "Hoe beïnvloeden histon deacetylase remmers genexpressie patronen in kankercellen?"
        },
        options: [
          { en: "Promoting histone acetylation leading to chromatin relaxation and reactivation of tumor suppressor genes", es: "Promoviendo acetilación de histonas llevando a relajación de cromatina y reactivación de genes supresores de tumores", de: "Förderung von Histon-Acetylierung führt zu Chromatin-Entspannung und Reaktivierung von Tumorsuppressor-Genen", nl: "Bevorderen van histon acetylatie leidend tot chromatin relaxatie en reactivering van tumor suppressor genen" },
          { en: "Direct inhibition of DNA polymerase activity", es: "Inhibición directa de la actividad de ADN polimerasa", de: "Direkte Hemmung der DNA-Polymerase-Aktivität", nl: "Directe remming van DNA polymerase activiteit" },
          { en: "Blocking ribosome assembly and protein synthesis", es: "Bloqueando ensamblaje de ribosomas y síntesis de proteínas", de: "Blockierung von Ribosom-Assemblierung und Protein-Synthese", nl: "Blokkeren van ribosoom assemblage en eiwit synthese" },
          { en: "Inducing DNA methylation at promoter regions", es: "Induciendo metilación de ADN en regiones promotoras", de: "Induzierung von DNA-Methylierung an Promotorregionen", nl: "Induceren van DNA methylatie bij promotor regio's" }
        ],
        correct: 0,
        explanation: {
          en: "HDAC inhibitors prevent histone deacetylation, maintaining histone tails in an acetylated state. This keeps chromatin in a more open, transcriptionally active configuration, often reactivating silenced tumor suppressor genes and inducing apoptosis or cell cycle arrest in cancer cells.",
          es: "Los inhibidores de HDAC previenen la desacetilación de histonas, manteniendo las colas de histonas en un estado acetilado. Esto mantiene la cromatina en una configuración más abierta y transcripcionalmente activa.",
          de: "HDAC-Inhibitoren verhindern Histon-Deacetylierung und halten Histon-Schwänze in acetyliertem Zustand. Dies hält Chromatin in einer offeneren, transkriptional aktiven Konfiguration.",
          nl: "HDAC remmers voorkomen histon deacetylatie, behouden histon staarten in een geacetyleerde staat. Dit houdt chromatin in een meer open, transcriptioneel actieve configuratie."
        }
      },
      {
        question: {
          en: "What role do long non-coding RNAs (lncRNAs) play in X-chromosome inactivation?",
          es: "¿Qué papel juegan los ARN largos no codificantes (lncRNA) en la inactivación del cromosoma X?",
          de: "Welche Rolle spielen lange nicht-kodierende RNAs (lncRNAs) bei der X-Chromosom-Inaktivierung?",
          nl: "Welke rol spelen lange non-coderende RNA's (lncRNAs) in X-chromosoom inactivatie?"
        },
        options: [
          { en: "Xist lncRNA coats the inactive X chromosome and recruits silencing complexes for heterochromatin formation", es: "El lncRNA Xist recubre el cromosoma X inactivo y recluta complejos silenciadores para formación de heterocromatina", de: "Xist lncRNA überzieht das inaktive X-Chromosom und rekrutiert Stilllegungskomplexe für Heterochromatin-Bildung", nl: "Xist lncRNA bedekt het inactieve X chromosoom en recruteert silencing complexen voor heterochromatin vorming" },
          { en: "Directly degrading X-linked mRNA transcripts", es: "Degradando directamente transcritos de ARNm ligados a X", de: "Direkter Abbau von X-verknüpften mRNA-Transkripten", nl: "Direct afbreken van X-gekoppelde mRNA transcripten" },
          { en: "Blocking DNA replication on the X chromosome", es: "Bloqueando replicación de ADN en el cromosoma X", de: "Blockierung der DNA-Replikation auf dem X-Chromosom", nl: "Blokkeren van DNA replicatie op het X chromosoom" },
          { en: "Promoting recombination between X chromosomes", es: "Promoviendo recombinación entre cromosomas X", de: "Förderung der Rekombination zwischen X-Chromosomen", nl: "Bevorderen van recombinatie tussen X chromosomen" }
        ],
        correct: 0,
        explanation: {
          en: "The Xist (X-inactive specific transcript) lncRNA is essential for X-chromosome inactivation. It coats the future inactive X chromosome in cis and recruits chromatin-modifying complexes including Polycomb repressive complexes, leading to H3K27me3 deposition and formation of a heterochromatic Barr body.",
          es: "El lncRNA Xist (transcrito específico X-inactivo) es esencial para la inactivación del cromosoma X. Recubre el futuro cromosoma X inactivo en cis y recluta complejos modificadores de cromatina.",
          de: "Die Xist (X-inaktiv-spezifisches Transkript) lncRNA ist wesentlich für X-Chromosom-Inaktivierung. Sie überzieht das zukünftige inaktive X-Chromosom in cis und rekrutiert Chromatin-modifizierende Komplexe.",
          nl: "Het Xist (X-inactive specific transcript) lncRNA is essentieel voor X-chromosoom inactivatie. Het bedekt het toekomstige inactieve X chromosoom in cis en recruteert chromatin-modificerende complexen."
        }
      },
      {
        question: {
          en: "How does the spindle assembly checkpoint ensure accurate chromosome segregation during mitosis?",
          es: "¿Cómo asegura el punto de control del ensamblaje del huso la segregación precisa de cromosomas durante la mitosis?",
          de: "Wie gewährleistet der Spindelaufbau-Checkpoint die genaue Chromosomentrennung während der Mitose?",
          nl: "Hoe zorgt de spindle assembly checkpoint voor nauwkeurige chromosoom segregatie tijdens mitose?"
        },
        options: [
          { en: "Unattached kinetochores generate wait signals that inhibit APC/C activation until all chromosomes achieve bipolar attachment", es: "Cinetocoros no unidos generan señales de espera que inhiben activación APC/C hasta que todos los cromosomas logren unión bipolar", de: "Nicht-angeheftete Kinetochore generieren Wartsignale, die APC/C-Aktivierung hemmen bis alle Chromosome bipolare Anheftung erreichen", nl: "Niet-gehechte kinetochoren genereren wacht signalen die APC/C activatie remmen tot alle chromosomen bipolaire hechting bereiken" },
          { en: "Direct DNA damage sensing at replication forks", es: "Detección directa de daño al ADN en horquillas de replicación", de: "Direkte DNA-Schaden-Erkennung an Replikationsgabeln", nl: "Directe DNA schade detectie bij replicatie vorken" },
          { en: "Monitoring cyclin degradation rates", es: "Monitoreando tasas de degradación de ciclinas", de: "Überwachung von Cyclin-Abbauraten", nl: "Monitoren van cycline afbraaksnelheden" },
          { en: "Checking nuclear envelope breakdown", es: "Verificando descomposición de envoltura nuclear", de: "Überprüfung des Kernhülle-Abbaus", nl: "Controleren van nucleaire envelop afbraak" }
        ],
        correct: 0,
        explanation: {
          en: "The spindle assembly checkpoint (SAC) monitors kinetochore attachment status. Unattached or improperly attached kinetochores recruit checkpoint proteins (Mad2, BubR1, Bub3) that inhibit APC/C-Cdc20, preventing anaphase onset. Only when all kinetochores achieve proper bipolar attachment is the checkpoint satisfied and mitosis proceeds.",
          es: "El punto de control del ensamblaje del huso (SAC) monitorea el estado de unión del cinetocoro. Los cinetocoros no unidos o mal unidos reclutan proteínas de punto de control que inhiben APC/C-Cdc20.",
          de: "Der Spindelaufbau-Checkpoint (SAC) überwacht den Kinetochor-Anheftungsstatus. Nicht-angeheftete oder falsch angeheftete Kinetochore rekrutieren Checkpoint-Proteine, die APC/C-Cdc20 hemmen.",
          nl: "De spindle assembly checkpoint (SAC) monitort kinetochoor hechting status. Niet-gehechte of verkeerd gehechte kinetochoren recruteren checkpoint eiwitten die APC/C-Cdc20 remmen."
        }
      },
      {
        question: {
          en: "What mechanisms drive alternative splicing regulation in response to cellular stress?",
          es: "¿Qué mecanismos impulsan la regulación del splicing alternativo en respuesta al estrés celular?",
          de: "Welche Mechanismen treiben alternative Spleißregulation als Reaktion auf zellulären Stress an?",
          nl: "Welke mechanismen drijven alternatieve splicing regulatie aan als reactie op cellulaire stress?"
        },
        options: [
          { en: "Stress-responsive SR proteins and hnRNPs relocalize to alter splice site recognition and exon inclusion patterns", es: "Proteínas SR y hnRNPs que responden al estrés se relocalizan para alterar reconocimiento de sitios de splicing y patrones de inclusión de exones", de: "Stress-responsive SR-Proteine und hnRNPs relocalisieren sich um Spleißstellen-Erkennung und Exon-Inklusionsmuster zu verändern", nl: "Stress-responsieve SR eiwitten en hnRNPs relocaliseren om splice site herkenning en exon inclusie patronen te veranderen" },
          { en: "Universal shutdown of all splicing machinery", es: "Apagado universal de toda la maquinaria de splicing", de: "Universelle Abschaltung der gesamten Spleißmaschinerie", nl: "Universele uitschakeling van alle splicing machinerie" },
          { en: "Increased ribosome biogenesis", es: "Aumento de biogénesis ribosomal", de: "Erhöhte Ribosom-Biogenese", nl: "Verhoogde ribosoom biogenese" },
          { en: "Enhanced mRNA export from nucleus", es: "Exportación mejorada de ARNm del núcleo", de: "Verbesserter mRNA-Export aus dem Zellkern", nl: "Verbeterde mRNA export vanuit de kern" }
        ],
        correct: 0,
        explanation: {
          en: "Cellular stress triggers redistribution of splicing regulatory proteins including SR proteins and hnRNPs. These factors change their nuclear localization and activity, leading to stress-specific alternative splicing programs that produce protein isoforms better adapted to stress conditions, such as heat shock response or oxidative stress resistance.",
          es: "El estrés celular desencadena redistribución de proteínas reguladoras de splicing incluyendo proteínas SR y hnRNPs. Estos factores cambian su localización nuclear y actividad, llevando a programas de splicing alternativo específicos del estrés.",
          de: "Zellulärer Stress löst Umverteilung von Spleißregulationsproteinen einschließlich SR-Proteinen und hnRNPs aus. Diese Faktoren ändern ihre nukleäre Lokalisation und Aktivität, führend zu stress-spezifischen alternativen Spleißprogrammen.",
          nl: "Cellulaire stress triggert herverdeling van splicing regulatoire eiwitten inclusief SR eiwitten en hnRNPs. Deze factoren veranderen hun nucleaire localisatie en activiteit, leidend tot stress-specifieke alternatieve splicing programma's."
        }
      },
      {
        question: {
          en: "How do DNA repair mechanisms distinguish between template and newly synthesized strands during mismatch repair?",
          es: "¿Cómo distinguen los mecanismos de reparación de ADN entre cadenas plantilla y recién sintetizadas durante la reparación de emparejamientos incorrectos?",
          de: "Wie unterscheiden DNA-Reparaturmechanismen zwischen Template- und neu synthetisierten Strängen während der Mismatch-Reparatur?",
          nl: "Hoe onderscheiden DNA reparatie mechanismen tussen template en nieuw gesynthetiseerde strengen tijdens mismatch repair?"
        },
        options: [
          { en: "GATC methylation status and strand discontinuities direct MutH endonuclease to nick the unmethylated nascent strand", es: "Estado de metilación GATC y discontinuidades de cadena dirigen endonucleasa MutH a cortar la cadena naciente no metilada", de: "GATC-Methylierungsstatus und Strang-Diskontinuitäten dirigieren MutH-Endonuklease zum Schneiden des unmethylierten entstehenden Strangs", nl: "GATC methylatie status en streng discontinuïteiten dirigeren MutH endonuclease om de ongemetyleerde nascente streng te knippen" },
          { en: "Random selection between both DNA strands", es: "Selección aleatoria entre ambas cadenas de ADN", de: "Zufällige Auswahl zwischen beiden DNA-Strängen", nl: "Willekeurige selectie tussen beide DNA strengen" },
          { en: "Preferential repair of purine-containing strands", es: "Reparación preferencial de cadenas que contienen purinas", de: "Bevorzugte Reparatur purin-enthaltender Stränge", nl: "Preferentiële reparatie van purine-bevattende strengen" },
          { en: "Detection of histone modifications", es: "Detección de modificaciones de histonas", de: "Erkennung von Histon-Modifikationen", nl: "Detectie van histon modificaties" }
        ],
        correct: 0,
        explanation: {
          en: "In E. coli mismatch repair, strand discrimination relies on Dam methylation of adenine in GATC sequences. The parental strand is fully methylated while the newly synthesized strand is temporarily hemimethylated. MutH endonuclease preferentially nicks the unmethylated strand, directing repair to remove the error from the nascent DNA.",
          es: "En la reparación de emparejamientos incorrectos de E. coli, la discriminación de cadenas se basa en la metilación Dam de adenina en secuencias GATC. La cadena parental está completamente metilada mientras que la cadena recién sintetizada está temporalmente hemimetilada.",
          de: "Bei der E. coli Mismatch-Reparatur beruht Strang-Diskriminierung auf Dam-Methylierung von Adenin in GATC-Sequenzen. Der parentale Strang ist vollständig methyliert während der neu synthetisierte Strang temporär hemimethyliert ist.",
          nl: "In E. coli mismatch repair berust streng discriminatie op Dam methylatie van adenine in GATC sequenties. De parentale streng is volledig gemethyleerd terwijl de nieuw gesynthetiseerde streng tijdelijk hemimethyleerd is."
        }
      },
      {
        question: {
          en: "What drives the formation and maintenance of nuclear bodies like Cajal bodies and nuclear speckles?",
          es: "¿Qué impulsa la formación y mantenimiento de cuerpos nucleares como cuerpos de Cajal y motas nucleares?",
          de: "Was treibt die Bildung und Aufrechterhaltung nukleärer Körperchen wie Cajal-Körperchen und nukleäre Sprenkel an?",
          nl: "Wat drijft de vorming en onderhoud aan van nucleaire lichamen zoals Cajal lichamen en nucleaire speckles?"
        },
        options: [
          { en: "Liquid-liquid phase separation driven by intrinsically disordered regions and RNA-protein interactions", es: "Separación de fases líquido-líquido impulsada por regiones intrínsecamente desordenadas e interacciones ARN-proteína", de: "Flüssig-flüssig-Phasentrennung angetrieben durch intrinsisch ungeordnete Regionen und RNA-Protein-Interaktionen", nl: "Vloeistof-vloeistof fase scheiding aangedreven door intrinsiek ongeordende regio's en RNA-eiwit interacties" },
          { en: "Membrane-bound organelles with lipid bilayers", es: "Orgánulos unidos a membrana con bicapas lipídicas", de: "Membrangebundene Organellen mit Lipiddoppelschichten", nl: "Membraan-gebonden organellen met lipide dubbellagen" },
          { en: "Covalent protein cross-linking", es: "Entrecruzamiento covalente de proteínas", de: "Kovalente Protein-Quervernetzung", nl: "Covalente eiwit cross-linking" },
          { en: "Direct DNA binding and chromatin attachment", es: "Unión directa a ADN y adhesión a cromatina", de: "Direkte DNA-Bindung und Chromatin-Anheftung", nl: "Directe DNA binding en chromatin hechting" }
        ],
        correct: 0,
        explanation: {
          en: "Nuclear bodies are membrane-less organelles formed through liquid-liquid phase separation. Proteins with intrinsically disordered regions (IDRs) and RNA molecules create multivalent interactions that drive phase separation, concentrating specific factors for RNA processing, ribosome biogenesis, and other nuclear functions.",
          es: "Los cuerpos nucleares son orgánulos sin membrana formados a través de separación de fases líquido-líquido. Proteínas con regiones intrínsecamente desordenadas (IDRs) y moléculas de ARN crean interacciones multivalentes que impulsan la separación de fases.",
          de: "Nukleäre Körperchen sind membranlose Organellen, die durch Flüssig-flüssig-Phasentrennung gebildet werden. Proteine mit intrinsisch ungeordneten Regionen (IDRs) und RNA-Moleküle schaffen multivalente Interaktionen, die Phasentrennung antreiben.",
          nl: "Nucleaire lichamen zijn membraanloze organellen gevormd door vloeistof-vloeistof fase scheiding. Eiwitten met intrinsiek ongeordende regio's (IDRs) en RNA moleculen creëren multivalente interacties die fase scheiding aandrijven."
        }
      },
      {
        question: {
          en: "How do pioneer transcription factors establish new chromatin accessibility at previously silent loci?",
          es: "¿Cómo establecen los factores de transcripción pioneros nueva accesibilidad de cromatina en loci previamente silentes?",
          de: "Wie etablieren Pionier-Transkriptionsfaktoren neue Chromatin-Zugänglichkeit an zuvor stillen Loci?",
          nl: "Hoe stellen pionier transcriptiefactoren nieuwe chromatin toegankelijkheid vast bij eerder stille loci?"
        },
        options: [
          { en: "Binding to nucleosomal DNA and recruiting chromatin remodeling complexes to displace histones", es: "Uniéndose a ADN nucleosomal y reclutando complejos remodeladores de cromatina para desplazar histonas", de: "Bindung an nukleosomale DNA und Rekrutierung von Chromatin-Remodeling-Komplexen zur Histon-Verschiebung", nl: "Binding aan nucleosomaal DNA en recruteren van chromatin remodeling complexen om histonen te verplaatsen" },
          { en: "Degrading all histones in target regions", es: "Degradando todas las histonas en regiones objetivo", de: "Abbau aller Histone in Zielregionen", nl: "Afbreken van alle histonen in doel regio's" },
          { en: "Directly methylating CpG islands", es: "Metilando directamente islas CpG", de: "Direkte Methylierung von CpG-Inseln", nl: "Direct methyleren van CpG eilanden" },
          { en: "Blocking RNA polymerase II recruitment", es: "Bloqueando reclutamiento de ARN polimerasa II", de: "Blockierung der RNA-Polymerase-II-Rekrutierung", nl: "Blokkeren van RNA polymerase II recruitment" }
        ],
        correct: 0,
        explanation: {
          en: "Pioneer transcription factors have the unique ability to bind their target sequences even when packaged in nucleosomes. They can access nucleosomal DNA and recruit ATP-dependent chromatin remodeling complexes (like SWI/SNF) and histone-modifying enzymes to create accessible chromatin regions and establish active transcriptional programs.",
          es: "Los factores de transcripción pioneros tienen la capacidad única de unirse a sus secuencias objetivo incluso cuando están empaquetadas en nucleosomas. Pueden acceder al ADN nucleosomal y reclutar complejos remodeladores de cromatina dependientes de ATP.",
          de: "Pionier-Transkriptionsfaktoren haben die einzigartige Fähigkeit, sich an ihre Zielsequenzen zu binden, auch wenn sie in Nukleosomen verpackt sind. Sie können auf nukleosomale DNA zugreifen und ATP-abhängige Chromatin-Remodeling-Komplexe rekrutieren.",
          nl: "Pionier transcriptiefactoren hebben de unieke eigenschap om aan hun doelsequenties te binden zelfs wanneer verpakt in nucleosomen. Ze kunnen nucleosomaal DNA bereiken en ATP-afhankelijke chromatin remodeling complexen recruteren."
        }
      },
      {
        question: {
          en: "What molecular basis underlies the phenomenon of genomic imprinting?",
          es: "¿Qué base molecular subyace al fenómeno de la impronta genómica?",
          de: "Welche molekulare Basis liegt dem Phänomen des genomischen Imprintings zugrunde?",
          nl: "Welke moleculaire basis ligt ten grondslag aan het fenomeen van genomische imprinting?"
        },
        options: [
          { en: "Parent-of-origin specific DNA methylation at imprinting control regions affecting allelic expression", es: "Metilación de ADN específica del origen parental en regiones de control de impronta que afecta expresión alélica", de: "Eltern-Ursprung-spezifische DNA-Methylierung an Imprinting-Kontrollregionen beeinflusst allelische Expression", nl: "Ouder-van-oorsprong specifieke DNA methylatie bij imprinting controle regio's beïnvloedend allelische expressie" },
          { en: "Random X-chromosome inactivation in females", es: "Inactivación aleatoria del cromosoma X en hembras", de: "Zufällige X-Chromosom-Inaktivierung in Weibchen", nl: "Willekeurige X-chromosoom inactivatie in vrouwtjes" },
          { en: "Mitochondrial inheritance patterns", es: "Patrones de herencia mitocondrial", de: "Mitochondriale Vererbungsmuster", nl: "Mitochondriale overervings patronen" },
          { en: "Telomere length variation", es: "Variación de longitud de telómeros", de: "Telomer-Längenvariation", nl: "Telomeer lengte variatie" }
        ],
        correct: 0,
        explanation: {
          en: "Genomic imprinting involves parent-of-origin specific gene expression controlled by differential DNA methylation at imprinting control regions (ICRs). During gametogenesis, these regions acquire sex-specific methylation marks that persist through development, leading to monoallelic expression depending on whether the allele was inherited from mother or father.",
          es: "La impronta genómica involucra expresión génica específica del origen parental controlada por metilación diferencial de ADN en regiones de control de impronta (ICRs). Durante la gametogénesis, estas regiones adquieren marcas de metilación específicas del sexo.",
          de: "Genomisches Imprinting beinhaltet eltern-ursprung-spezifische Genexpression, kontrolliert durch differentielle DNA-Methylierung an Imprinting-Kontrollregionen (ICRs). Während der Gametogenese erwerben diese Regionen geschlechtsspezifische Methylierungsmarkierungen.",
          nl: "Genomische imprinting behelst ouder-van-oorsprong specifieke genexpressie gecontroleerd door differentiële DNA methylatie bij imprinting controle regio's (ICRs). Tijdens gametogenese verwerven deze regio's geslacht-specifieke methylatie markeringen."
        }
      },
      {
        question: {
          en: "How do riboswitches regulate gene expression through direct RNA-ligand interactions?",
          es: "¿Cómo regulan los riboswitches la expresión génica a través de interacciones directas ARN-ligando?",
          de: "Wie regulieren Riboswitches Genexpression durch direkte RNA-Ligand-Interaktionen?",
          nl: "Hoe reguleren riboswitches genexpressie door directe RNA-ligand interacties?"
        },
        options: [
          { en: "Ligand binding induces conformational changes affecting transcription termination, translation, or mRNA stability", es: "La unión de ligando induce cambios conformacionales que afectan terminación de transcripción, traducción o estabilidad de ARNm", de: "Ligand-Bindung induziert Konformationsänderungen, die Transkriptionstermination, Translation oder mRNA-Stabilität beeinflussen", nl: "Ligand binding induceert conformationele veranderingen die transcriptie terminatie, translatie, of mRNA stabiliteit beïnvloeden" },
          { en: "Direct protein displacement from DNA binding sites", es: "Desplazamiento directo de proteínas de sitios de unión a ADN", de: "Direkte Protein-Verschiebung von DNA-Bindungsstellen", nl: "Directe eiwit verplaatsing van DNA bindingsplaatsen" },
          { en: "Enzymatic cleavage of target mRNAs", es: "Escisión enzimática de ARNm objetivo", de: "Enzymatische Spaltung von Ziel-mRNAs", nl: "Enzymatische splitsing van doel mRNA's" },
          { en: "Chromatin remodeling through histone modifications", es: "Remodelación de cromatina a través de modificaciones de histonas", de: "Chromatin-Remodeling durch Histon-Modifikationen", nl: "Chromatin remodeling door histon modificaties" }
        ],
        correct: 0,
        explanation: {
          en: "Riboswitches are structured RNA elements that directly bind specific ligands (like metabolites, amino acids, or nucleotides) and undergo conformational changes. These structural changes can affect transcription termination by forming or disrupting terminator hairpins, modulate ribosome binding sites, or alter mRNA stability through exposure to nucleases.",
          es: "Los riboswitches son elementos de ARN estructurados que se unen directamente a ligandos específicos (como metabolitos, aminoácidos o nucleótidos) y experimentan cambios conformacionales. Estos cambios estructurales pueden afectar la terminación de la transcripción.",
          de: "Riboswitches sind strukturierte RNA-Elemente, die direkt spezifische Liganden (wie Metabolite, Aminosäuren oder Nukleotide) binden und Konformationsänderungen durchlaufen. Diese Strukturänderungen können Transkriptionstermination beeinflussen.",
          nl: "Riboswitches zijn gestructureerde RNA elementen die direct specifieke liganden binden (zoals metabolieten, aminozuren, of nucleotiden) en conformationele veranderingen ondergaan. Deze structurele veranderingen kunnen transcriptie terminatie beïnvloeden."
        }
      },
      {
        question: {
          en: "What mechanisms ensure high-fidelity chromosome condensation during prophase?",
          es: "¿Qué mecanismos aseguran condensación de cromosomas de alta fidelidad durante profase?",
          de: "Welche Mechanismen gewährleisten hochgetreue Chromosomenkondensation während der Prophase?",
          nl: "Welke mechanismen verzekeren hoogwaardige chromosoom condensatie tijdens profase?"
        },
        options: [
          { en: "Condensin complexes create ATP-dependent topological loops while resolving sister chromatid cohesion gradually", es: "Los complejos condensina crean loops topológicos dependientes de ATP mientras resuelven cohesión de cromátidas hermanas gradualmente", de: "Condensin-Komplexe schaffen ATP-abhängige topologische Schleifen während sie Schwesterchromatid-Kohäsion schrittweise auflösen", nl: "Condensin complexen creëren ATP-afhankelijke topologische lussen terwijl ze zuster chromatide cohesie geleidelijk oplossen" },
          { en: "Random coiling through thermal motion", es: "Enrollamiento aleatorio a través de movimiento térmico", de: "Zufällige Aufspulung durch thermische Bewegung", nl: "Willekeurige opwinding door thermische beweging" },
          { en: "Direct histone removal from all chromatin", es: "Eliminación directa de histonas de toda la cromatina", de: "Direkte Histon-Entfernung aus allem Chromatin", nl: "Directe histon verwijdering van alle chromatin" },
          { en: "Nuclear envelope breakdown triggering compaction", es: "Descomposición de envoltura nuclear desencadenando compactación", de: "Kernhülle-Abbau löst Verdichtung aus", nl: "Nucleaire envelop afbraak triggert compactie" }
        ],
        correct: 0,
        explanation: {
          en: "Chromosome condensation relies on condensin I and II complexes that use ATP hydrolysis to extrude chromatin loops, progressively compacting interphase chromatin into rod-like metaphase chromosomes. This process is coordinated with gradual cohesin removal from chromosome arms while preserving centromeric cohesion until anaphase.",
          es: "La condensación cromosómica depende de los complejos condensina I y II que usan hidrólisis de ATP para extruir loops de cromatina, compactando progresivamente cromatina de interfase en cromosomas metafásicos tipo varilla.",
          de: "Chromosomenkondensation beruht auf Condensin-I- und -II-Komplexen, die ATP-Hydrolyse verwenden, um Chromatin-Schleifen zu extrudieren und schrittweise Interphase-Chromatin in stäbchenförmige Metaphase-Chromosomen zu verdichten.",
          nl: "Chromosoom condensatie berust op condensin I en II complexen die ATP hydrolyse gebruiken om chromatin lussen te extruderen, geleidelijk interphase chromatin compacterend in staafvormige metaphase chromosomen."
        }
      },
      {
        question: {
          en: "How do microRNAs achieve target specificity while avoiding off-target effects?",
          es: "¿Cómo logran los microARN especificidad de objetivo mientras evitan efectos fuera de objetivo?",
          de: "Wie erreichen microRNAs Zielspezifität während sie Off-Target-Effekte vermeiden?",
          nl: "Hoe bereiken microRNA's doel specificiteit terwijl off-target effecten worden vermeden?"
        },
        options: [
          { en: "Seed sequence complementarity combined with 3' UTR context and RISC loading preferences determine targeting efficiency", es: "Complementariedad de secuencia semilla combinada con contexto 3' UTR y preferencias de carga RISC determinan eficiencia de direccionamiento", de: "Seed-Sequenz-Komplementarität kombiniert mit 3'-UTR-Kontext und RISC-Beladungsvorlieben bestimmen Zieleffizienz", nl: "Seed sequentie complementariteit gecombineerd met 3' UTR context en RISC loading voorkeuren bepalen targeting efficiëntie" },
          { en: "Perfect complementarity across entire miRNA length", es: "Complementariedad perfecta a través de toda la longitud del miARN", de: "Perfekte Komplementarität über die gesamte miRNA-Länge", nl: "Perfecte complementariteit over gehele miRNA lengte" },
          { en: "Random association with any available mRNA", es: "Asociación aleatoria con cualquier ARNm disponible", de: "Zufällige Assoziation mit jeder verfügbaren mRNA", nl: "Willekeurige associatie met elke beschikbare mRNA" },
          { en: "Exclusive targeting of coding sequences", es: "Direccionamiento exclusivo de secuencias codificantes", de: "Ausschließliche Zielausrichtung kodierender Sequenzen", nl: "Exclusieve targeting van coderende sequenties" }
        ],
        correct: 0,
        explanation: {
          en: "miRNA specificity relies primarily on perfect complementarity between nucleotides 2-7 of the miRNA (seed sequence) and target mRNAs, typically in 3' UTRs. Additional factors include local AU content, secondary structure accessibility, and competition between different miRNAs for RISC loading. This multi-layered specificity reduces off-target binding while maintaining regulatory precision.",
          es: "La especificidad de miARN se basa principalmente en complementariedad perfecta entre nucleótidos 2-7 del miARN (secuencia semilla) y ARNm objetivo, típicamente en UTRs 3'. Factores adicionales incluyen contenido AU local, accesibilidad de estructura secundaria.",
          de: "miRNA-Spezifität beruht primär auf perfekter Komplementarität zwischen Nukleotiden 2-7 der miRNA (Seed-Sequenz) und Ziel-mRNAs, typischerweise in 3'-UTRs. Zusätzliche Faktoren umfassen lokalen AU-Gehalt, Zugänglichkeit der Sekundärstruktur.",
          nl: "miRNA specificiteit berust voornamelijk op perfecte complementariteit tussen nucleotiden 2-7 van de miRNA (seed sequentie) en doel mRNA's, typisch in 3' UTR's. Aanvullende factoren omvatten lokaal AU gehalte, secundaire structuur toegankelijkheid."
        }
      },
      {
        question: {
          en: "What drives the temporal control of replication timing across different chromatin domains?",
          es: "¿Qué impulsa el control temporal del timing de replicación a través de diferentes dominios de cromatina?",
          de: "Was treibt die zeitliche Kontrolle der Replikationstiming über verschiedene Chromatin-Domänen an?",
          nl: "Wat drijft de temporele controle van replicatie timing aan over verschillende chromatin domeinen?"
        },
        options: [
          { en: "Chromatin accessibility, histone modifications, and nuclear organization determine origin firing order", es: "Accesibilidad de cromatina, modificaciones de histonas y organización nuclear determinan orden de disparo de orígenes", de: "Chromatin-Zugänglichkeit, Histon-Modifikationen und nukleäre Organisation bestimmen Ursprungs-Zündungsreihenfolge", nl: "Chromatin toegankelijkheid, histon modificaties, en nucleaire organisatie bepalen oorsprong vuurvolgorde" },
          { en: "Random activation of all replication origins simultaneously", es: "Activación aleatoria de todos los orígenes de replicación simultáneamente", de: "Zufällige Aktivierung aller Replikationsursprünge gleichzeitig", nl: "Willekeurige activatie van alle replicatie oorsprongen tegelijkertijd" },
          { en: "Chromosome size determining replication speed", es: "Tamaño cromosómico determinando velocidad de replicación", de: "Chromosomengröße bestimmt Replikationsgeschwindigkeit", nl: "Chromosoom grootte bepalend replicatie snelheid" },
          { en: "Direct correlation with gene expression levels", es: "Correlación directa con niveles de expresión génica", de: "Direkte Korrelation mit Genexpressionsniveaus", nl: "Directe correlatie met genexpressie niveaus" }
        ],
        correct: 0,
        explanation: {
          en: "Replication timing is regulated by chromatin structure and nuclear organization. Early-replicating regions typically have open chromatin marked by active histone modifications (H3K4me3, H3K36me3) and are located in nuclear interior. Late-replicating regions have heterochromatic marks (H3K9me3) and localize to nuclear periphery. Origin licensing and firing are controlled by CDK activity and chromatin accessibility.",
          es: "El timing de replicación está regulado por estructura de cromatina y organización nuclear. Las regiones que replican temprano típicamente tienen cromatina abierta marcada por modificaciones activas de histonas y están ubicadas en el interior nuclear.",
          de: "Replikationstiming wird durch Chromatinstruktur und nukleäre Organisation reguliert. Früh-replizierende Regionen haben typischerweise offenes Chromatin mit aktiven Histon-Modifikationen und befinden sich im nukleären Inneren.",
          nl: "Replicatie timing wordt gereguleerd door chromatin structuur en nucleaire organisatie. Vroeg-replicerende regio's hebben typisch open chromatin gemarkeerd door actieve histon modificaties en bevinden zich in het nucleaire binnenste."
        }
      },
      {
        question: {
          en: "How do DNA polymerase proofreading mechanisms maintain replication fidelity?",
          es: "¿Cómo mantienen los mecanismos de corrección de pruebas de ADN polimerasa la fidelidad de replicación?",
          de: "Wie halten DNA-Polymerase-Korrekturlese-Mechanismen die Replikationstreue aufrecht?",
          nl: "Hoe behouden DNA polymerase proofreadingmechanismen replicatie betrouwbaarheid?"
        },
        options: [
          { en: "3' to 5' exonuclease activity removes mispaired nucleotides before chain extension continues", es: "Actividad exonucleasa 3' a 5' remueve nucleótidos mal apareados antes de que continúe extensión de cadena", de: "3'- zu 5'-Exonuklease-Aktivität entfernt falsch gepaarte Nukleotide bevor Kettenerweiterung fortsetzt", nl: "3' naar 5' exonuclease activiteit verwijdert verkeerd gepaarde nucleotiden voordat keten extensie verdergaat" },
          { en: "5' to 3' exonuclease removing RNA primers", es: "Exonucleasa 5' a 3' removiendo primers de ARN", de: "5'- zu 3'-Exonuklease entfernt RNA-Primer", nl: "5' naar 3' exonuclease verwijderend RNA primers" },
          { en: "DNA ligase sealing nicks in backbone", es: "ADN ligasa sellando cortes en esqueleto", de: "DNA-Ligase versiegelt Einschnitte im Rückgrat", nl: "DNA ligase dichtend nicks in ruggengraat" },
          { en: "Helicase unwinding secondary structures", es: "Helicasa desenrollando estructuras secundarias", de: "Helikase entwirrt Sekundärstrukturen", nl: "Helicase ontwindend secundaire structuren" }
        ],
        correct: 0,
        explanation: {
          en: "DNA polymerases possess intrinsic 3' to 5' exonuclease activity that provides proofreading function. When an incorrect nucleotide is incorporated, the polymerase pauses, switches to exonuclease mode, removes the mispaired nucleotide, and then resumes polymerization. This mechanism increases replication fidelity by approximately 100-fold over the basic polymerization error rate.",
          es: "Las ADN polimerasas poseen actividad exonucleasa intrínseca 3' a 5' que proporciona función de corrección de pruebas. Cuando se incorpora un nucleótido incorrecto, la polimerasa pausa, cambia a modo exonucleasa, remueve el nucleótido mal apareado, y luego reanuda polimerización.",
          de: "DNA-Polymerasen besitzen intrinsische 3'- zu 5'-Exonuklease-Aktivität, die Korrekturlese-Funktion bietet. Wenn ein falsches Nukleotid eingebaut wird, pausiert die Polymerase, wechselt in Exonuklease-Modus, entfernt das falsch gepaarte Nukleotid, und setzt dann Polymerisation fort.",
          nl: "DNA polymerasen bezitten intrinsieke 3' naar 5' exonuclease activiteit die proofreading functie biedt. Wanneer een verkeerd nucleotide wordt ingebouwd, pauzeert de polymerase, schakelt naar exonuclease modus, verwijdert het verkeerd gepaarde nucleotide, en hervat dan polymerisatie."
        }
      },
      {
        question: {
          en: "What molecular mechanisms underlie the establishment of cellular senescence?",
          es: "¿Qué mecanismos moleculares subyacen al establecimiento de senescencia celular?",
          de: "Welche molekularen Mechanismen liegen der Etablierung zellulärer Seneszenz zugrunde?",
          nl: "Welke moleculaire mechanismen liggen ten grondslag aan het vaststellen van cellulaire senescentie?"
        },
        options: [
          { en: "p53/p21 and p16/Rb pathway activation creating irreversible cell cycle arrest with SASP secretion", es: "Activación de vías p53/p21 y p16/Rb creando arresto irreversible del ciclo celular con secreción SASP", de: "p53/p21- und p16/Rb-Signalweg-Aktivierung schafft irreversiblen Zellzyklus-Arrest mit SASP-Sekretion", nl: "p53/p21 en p16/Rb pathway activatie creërend onomkeerbare celcyclus arrest met SASP secretie" },
          { en: "Immediate cell death through apoptosis", es: "Muerte celular inmediata a través de apoptosis", de: "Sofortiger Zelltod durch Apoptose", nl: "Onmiddellijke celdood door apoptose" },
          { en: "Accelerated cell division rates", es: "Tasas aceleradas de división celular", de: "Beschleunigte Zellteilungsraten", nl: "Versnelde celdelings snelheden" },
          { en: "Complete loss of all metabolic activity", es: "Pérdida completa de toda actividad metabólica", de: "Vollständiger Verlust aller metabolischen Aktivität", nl: "Complete verlies van alle metabolische activiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Cellular senescence involves activation of tumor suppressor pathways (p53/p21 and p16/pRb) that establish permanent cell cycle arrest. Senescent cells remain metabolically active and secrete pro-inflammatory factors (SASP - senescence-associated secretory phenotype) including cytokines, chemokines, and matrix metalloproteinases, contributing to tissue dysfunction and aging.",
          es: "La senescencia celular involucra activación de vías supresoras de tumores (p53/p21 y p16/pRb) que establecen arresto permanente del ciclo celular. Las células senescentes permanecen metabólicamente activas y secretan factores pro-inflamatorios.",
          de: "Zelluläre Seneszenz beinhaltet Aktivierung von Tumorsuppressor-Signalwegen (p53/p21 und p16/pRb), die permanenten Zellzyklus-Arrest etablieren. Seneszente Zellen bleiben metabolisch aktiv und sezernieren pro-inflammatorische Faktoren.",
          nl: "Cellulaire senescentie behelst activatie van tumor suppressor pathways (p53/p21 en p16/pRb) die permanente celcyclus arrest vestigen. Senescente cellen blijven metabolisch actief en scheiden pro-inflammatoire factoren uit."
        }
      },
      {
        question: {
          en: "How do enhancer-promoter interactions achieve specificity across large genomic distances?",
          es: "¿Cómo logran las interacciones enhancer-promotor especificidad a través de grandes distancias genómicas?",
          de: "Wie erreichen Enhancer-Promotor-Interaktionen Spezifität über große genomische Entfernungen?",
          nl: "Hoe bereiken enhancer-promotor interacties specificiteit over grote genomische afstanden?"
        },
        options: [
          { en: "DNA looping mediated by architectural proteins creates topologically associating domains constraining interactions", es: "Bucles de ADN mediados por proteínas arquitectónicas crean dominios asociados topológicamente que restringen interacciones", de: "DNA-Schleifenbildung vermittelt durch architektonische Proteine schafft topologisch assoziierte Domänen, die Interaktionen einschränken", nl: "DNA lussen gemedieerd door architecturale eiwitten creëren topologisch associërende domeinen die interacties beperken" },
          { en: "Direct physical proximity on linear chromosome", es: "Proximidad física directa en cromosoma lineal", de: "Direkte physische Nähe auf linearem Chromosom", nl: "Directe fysieke nabijheid op lineair chromosoom" },
          { en: "Random collision frequency in nuclear space", es: "Frecuencia de colisión aleatoria en espacio nuclear", de: "Zufällige Kollisionsfrequenz im nukleären Raum", nl: "Willekeurige botsing frequentie in nucleaire ruimte" },
          { en: "mRNA transport determining interactions", es: "Transporte de ARNm determinando interacciones", de: "mRNA-Transport bestimmt Interaktionen", nl: "mRNA transport bepalend interacties" }
        ],
        correct: 0,
        explanation: {
          en: "Long-range enhancer-promoter interactions are organized by architectural proteins like CTCF and cohesin that create DNA loops and establish topologically associating domains (TADs). These 3D chromatin structures constrain which enhancers can interact with which promoters, providing regulatory specificity despite large linear genomic distances.",
          es: "Las interacciones enhancer-promotor de largo alcance están organizadas por proteínas arquitectónicas como CTCF y cohesina que crean bucles de ADN y establecen dominios asociados topológicamente (TADs).",
          de: "Weitreichende Enhancer-Promotor-Interaktionen werden durch architektonische Proteine wie CTCF und Cohesin organisiert, die DNA-Schleifen schaffen und topologisch assoziierte Domänen (TADs) etablieren.",
          nl: "Lange-afstand enhancer-promotor interacties worden georganiseerd door architecturale eiwitten zoals CTCF en cohesin die DNA lussen creëren en topologisch associërende domeinen (TADs) vestigen."
        }
      },
      {
        question: {
          en: "What drives the directionality of Holliday junction resolution during homologous recombination repair?",
          es: "¿Qué impulsa la direccionalidad de resolución de la unión de Holliday durante reparación por recombinación homóloga?",
          de: "Was treibt die Richtung der Holliday-Junction-Auflösung während homologer Rekombinationsreparatur an?",
          nl: "Wat drijft de richting aan van Holliday junction resolutie tijdens homologe recombinatie reparatie?"
        },
        options: [
          { en: "Resolvase orientation and processivity determine whether crossover or non-crossover products form", es: "Orientación y procesividad de resolvasa determinan si se forman productos crossover o no-crossover", de: "Resolvase-Orientierung und Prozessivität bestimmen, ob Crossover- oder Non-Crossover-Produkte entstehen", nl: "Resolvase oriëntatie en processiviteit bepalen of crossover of non-crossover producten vormen" },
          { en: "Random cleavage at any junction point", es: "Escisión aleatoria en cualquier punto de unión", de: "Zufällige Spaltung an jedem Kreuzungspunkt", nl: "Willekeurige splitsing bij elk kruispunt" },
          { en: "Chromosome arm length determining resolution", es: "Longitud de brazo cromosómico determinando resolución", de: "Chromosomenarm-Länge bestimmt Auflösung", nl: "Chromosoom arm lengte bepalend resolutie" },
          { en: "Nuclear membrane proximity effects", es: "Efectos de proximidad de membrana nuclear", de: "Kernmembran-Nähe-Effekte", nl: "Nucleaire membraan nabijheids effecten" }
        ],
        correct: 0,
        explanation: {
          en: "Holliday junction resolution depends on resolvase enzyme orientation and cleavage patterns. Resolution can occur in two planes: symmetric cleavage produces crossover products (genetic exchange), while asymmetric cleavage generates non-crossover products. The choice is influenced by resolvase processivity, junction structure, and regulatory proteins that bias resolution toward specific outcomes.",
          es: "La resolución de la unión de Holliday depende de la orientación de enzima resolvasa y patrones de escisión. La resolución puede ocurrir en dos planos: escisión simétrica produce productos crossover (intercambio genético), mientras escisión asimétrica genera productos no-crossover.",
          de: "Holliday-Junction-Auflösung hängt von Resolvase-Enzym-Orientierung und Spaltungsmustern ab. Auflösung kann in zwei Ebenen auftreten: symmetrische Spaltung produziert Crossover-Produkte (genetischer Austausch), während asymmetrische Spaltung Non-Crossover-Produkte generiert.",
          nl: "Holliday junction resolutie hangt af van resolvase enzym oriëntatie en splitsingspatronen. Resolutie kan optreden in twee vlakken: symmetrische splitsing produceert crossover producten (genetische uitwisseling), terwijl asymmetrische splitsing non-crossover producten genereert."
        }
      },
      {
        question: {
          en: "How do telomerase and alternative lengthening mechanisms maintain chromosome ends?",
          es: "¿Cómo mantienen los mecanismos de telomerasa y alargamiento alternativo los extremos cromosómicos?",
          de: "Wie halten Telomerase und alternative Verlängerungsmechanismen Chromosomenenden aufrecht?",
          nl: "Hoe behouden telomerase en alternatieve verlengingsmechanismen chromosoom uiteinden?"
        },
        options: [
          { en: "Telomerase adds TTAGGG repeats using RNA template while ALT uses homologous recombination between telomeric DNA", es: "Telomerasa agrega repeticiones TTAGGG usando plantilla de ARN mientras ALT usa recombinación homóloga entre ADN telomérico", de: "Telomerase fügt TTAGGG-Wiederholungen mit RNA-Template hinzu während ALT homologe Rekombination zwischen telomerischer DNA verwendet", nl: "Telomerase voegt TTAGGG herhalingen toe met RNA template terwijl ALT homologe recombinatie tussen telomere DNA gebruikt" },
          { en: "Direct DNA synthesis without template requirements", es: "Síntesis directa de ADN sin requerimientos de plantilla", de: "Direkte DNA-Synthese ohne Template-Anforderungen", nl: "Directe DNA synthese zonder template vereisten" },
          { en: "Protein capping preventing all degradation", es: "Tapa proteica previniendo toda degradación", de: "Protein-Verkappung verhindert alle Degradation", nl: "Eiwit capping voorkomend alle degradatie" },
          { en: "Random DNA recombination with centromeres", es: "Recombinación aleatoria de ADN con centrómeros", de: "Zufällige DNA-Rekombination mit Zentromeren", nl: "Willekeurige DNA recombinatie met centromeren" }
        ],
        correct: 0,
        explanation: {
          en: "Telomerase maintains telomeres by adding TTAGGG hexanucleotide repeats using its intrinsic RNA component (TERC) as template and protein component (TERT) for reverse transcription. Alternative Lengthening of Telomeres (ALT) is a telomerase-independent mechanism using homologous recombination and break-induced replication to extend telomeres, often active in cancer cells lacking telomerase.",
          es: "La telomerasa mantiene telómeros agregando repeticiones hexanucleotídicas TTAGGG usando su componente de ARN intrínseco (TERC) como plantilla y componente proteico (TERT) para transcripción reversa.",
          de: "Telomerase hält Telomere aufrecht durch Hinzufügung von TTAGGG-Hexanukleotid-Wiederholungen unter Verwendung ihrer intrinsischen RNA-Komponente (TERC) als Template und Protein-Komponente (TERT) für Reverse Transkription.",
          nl: "Telomerase behoudt telomeren door toevoegen van TTAGGG hexanucleotide herhalingen met zijn intrinsieke RNA component (TERC) als template en eiwit component (TERT) voor reverse transcriptie."
        }
      },
      {
        question: {
          en: "What mechanisms control the accuracy of tRNA aminoacylation by aminoacyl-tRNA synthetases?",
          es: "¿Qué mecanismos controlan la precisión de aminoacilación de tARN por aminoacil-tARN sintetasas?",
          de: "Welche Mechanismen kontrollieren die Genauigkeit der tRNA-Aminoacylierung durch Aminoacyl-tRNA-Synthetasen?",
          nl: "Welke mechanismen controleren de nauwkeurigheid van tRNA aminoacylatie door aminoacyl-tRNA synthetases?"
        },
        options: [
          { en: "Proofreading through editing domains that hydrolyze misacylated amino acids before and after aminoacyl-tRNA formation", es: "Corrección de pruebas a través de dominios de edición que hidrolizan aminoácidos mal acilados antes y después de formación de aminoacil-tARN", de: "Korrekturlesen durch Editier-Domänen, die fehlacylierte Aminosäuren vor und nach Aminoacyl-tRNA-Bildung hydrolysieren", nl: "Proofreading door editing domeinen die misacylated aminozuren hydrolyseren voor en na aminoacyl-tRNA vorming" },
          { en: "Random binding followed by product release", es: "Unión aleatoria seguida de liberación de producto", de: "Zufällige Bindung gefolgt von Produktfreisetzung", nl: "Willekeurige binding gevolgd door product vrijlating" },
          { en: "Single-step recognition without verification", es: "Reconocimiento de un solo paso sin verificación", de: "Einstufige Erkennung ohne Verifikation", nl: "Eenstaps herkenning zonder verificatie" },
          { en: "Exclusive reliance on thermodynamic binding preferences", es: "Dependencia exclusiva en preferencias de unión termodinámica", de: "Ausschließliche Abhängigkeit von thermodynamischen Bindungsvorlieben", nl: "Exclusieve afhankelijkheid van thermodynamische bindingsvoorkeuren" }
        ],
        correct: 0,
        explanation: {
          en: "Aminoacyl-tRNA synthetases achieve high fidelity through multiple proofreading mechanisms. Pre-transfer editing removes incorrectly activated amino acids before tRNA charging, while post-transfer editing cleaves mischarged aminoacyl-tRNAs. This dual proofreading system, combined with initial discrimination during substrate binding, ensures translation accuracy by reducing misincorporation rates to below 10^-4.",
          es: "Las aminoacil-tARN sintetasas logran alta fidelidad a través de múltiples mecanismos de corrección de pruebas. La edición pre-transferencia remueve aminoácidos incorrectamente activados antes de carga de tARN.",
          de: "Aminoacyl-tRNA-Synthetasen erreichen hohe Treue durch multiple Korrekturlese-Mechanismen. Vor-Transfer-Editierung entfernt falsch aktivierte Aminosäuren vor tRNA-Beladung, während Nach-Transfer-Editierung falsch beladene Aminoacyl-tRNAs spaltet.",
          nl: "Aminoacyl-tRNA synthetases bereiken hoge betrouwbaarheid door meerdere proofreading mechanismen. Pre-transfer editing verwijdert verkeerd geactiveerde aminozuren voor tRNA charging, terwijl post-transfer editing verkeerd geladen aminoacyl-tRNA's splitst."
        }
      },
      {
        question: {
          en: "How does the unfolded protein response (UPR) coordinate cellular stress adaptation?",
          es: "¿Cómo coordina la respuesta a proteínas desplegadas (UPR) la adaptación al estrés celular?",
          de: "Wie koordiniert die Unfolded Protein Response (UPR) zelluläre Stressanpassung?",
          nl: "Hoe coördineert de unfolded protein response (UPR) cellulaire stress adaptatie?"
        },
        options: [
          { en: "Three ER sensors (PERK, IRE1, ATF6) activate transcriptional programs reducing protein synthesis and enhancing folding capacity", es: "Tres sensores de RE (PERK, IRE1, ATF6) activan programas transcripcionales reduciendo síntesis de proteínas y mejorando capacidad de plegamiento", de: "Drei ER-Sensoren (PERK, IRE1, ATF6) aktivieren Transkriptionsprogramme, die Protein-Synthese reduzieren und Faltungskapazität erhöhen", nl: "Drie ER sensoren (PERK, IRE1, ATF6) activeren transcriptionele programma's die eiwit synthese verminderen en vouwing capaciteit verbeteren" },
          { en: "Direct protein refolding through mechanical stretching", es: "Replegamiento directo de proteínas a través de estiramiento mecánico", de: "Direkte Protein-Refaltung durch mechanisches Strecken", nl: "Directe eiwit hervouwing door mechanisch uitrekken" },
          { en: "Immediate degradation of all ER proteins", es: "Degradación inmediata de todas las proteínas del RE", de: "Sofortiger Abbau aller ER-Proteine", nl: "Onmiddellijke degradatie van alle ER eiwitten" },
          { en: "Nuclear import of misfolded proteins", es: "Importación nuclear de proteínas mal plegadas", de: "Nukleärer Import fehlgefalteter Proteine", nl: "Nucleaire import van verkeerd gevouwen eiwitten" }
        ],
        correct: 0,
        explanation: {
          en: "The UPR involves three ER transmembrane sensors: PERK (phosphorylates eIF2α to reduce translation), IRE1 (splices XBP1 mRNA to activate chaperone gene expression), and ATF6 (cleaved to release transcription factor). These pathways collectively reduce ER protein load while increasing folding and degradation capacity. If stress persists, the UPR triggers apoptosis.",
          es: "La UPR involucra tres sensores transmembrana del RE: PERK (fosforila eIF2α para reducir traducción), IRE1 (corta y empalma ARNm XBP1 para activar expresión de genes de chaperona), y ATF6 (cortado para liberar factor de transcripción).",
          de: "Die UPR umfasst drei ER-Transmembran-Sensoren: PERK (phosphoryliert eIF2α um Translation zu reduzieren), IRE1 (spleißt XBP1-mRNA um Chaperon-Genexpression zu aktivieren), und ATF6 (gespalten um Transkriptionsfaktor freizusetzen).",
          nl: "De UPR behelst drie ER transmembraan sensoren: PERK (fosforyleert eIF2α om translatie te verminderen), IRE1 (splitst XBP1 mRNA om chaperone gen expressie te activeren), en ATF6 (gesplitst om transcriptiefactor vrij te maken)."
        }
      },
      {
        question: {
          en: "What drives the selectivity of autophagy cargo recognition and engulfment?",
          es: "¿Qué impulsa la selectividad de reconocimiento y engullimiento de carga de autofagia?",
          de: "Was treibt die Selektivität der Autophagie-Fracht-Erkennung und -Aufnahme an?",
          nl: "Wat drijft de selectiviteit aan van autofagie cargo herkenning en omhulling?"
        },
        options: [
          { en: "Cargo receptors recognize ubiquitin tags and LC3 family proteins to target specific substrates for autophagosomal degradation", es: "Receptores de carga reconocen etiquetas de ubiquitina y proteínas de familia LC3 para dirigir sustratos específicos para degradación autophagosomal", de: "Fracht-Rezeptoren erkennen Ubiquitin-Tags und LC3-Familien-Proteine um spezifische Substrate für autophagosomale Degradation zu zielen", nl: "Cargo receptoren herkennen ubiquitin tags en LC3 familie eiwitten om specifieke substraten te targeten voor autophagosomale degradatie" },
          { en: "Random bulk cytoplasm collection only", es: "Solo recolección aleatoria de citoplasma", de: "Nur zufällige Bulk-Zytoplasma-Sammlung", nl: "Alleen willekeurige bulk cytoplasma collectie" },
          { en: "Size-based mechanical sorting", es: "Clasificación mecánica basada en tamaño", de: "Größenbasierte mechanische Sortierung", nl: "Op grootte gebaseerde mechanische sortering" },
          { en: "Temporal degradation without specificity", es: "Degradación temporal sin especificidad", de: "Zeitliche Degradation ohne Spezifität", nl: "Temporele degradatie zonder specificiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Selective autophagy uses cargo receptors (like p62/SQSTM1, NBR1, OPTN) that simultaneously bind ubiquitinated cargo and LC3/GABARAP family proteins on autophagosome membranes. This creates specificity for damaged organelles, protein aggregates, and pathogens while allowing bulk autophagy to continue. Different receptors recognize distinct ubiquitin linkages and cargo types.",
          es: "La autofagia selectiva usa receptores de carga (como p62/SQSTM1, NBR1, OPTN) que simultáneamente unen carga ubiquitinada y proteínas de familia LC3/GABARAP en membranas de autofagosoma.",
          de: "Selektive Autophagie verwendet Fracht-Rezeptoren (wie p62/SQSTM1, NBR1, OPTN), die gleichzeitig ubiquitinierte Fracht und LC3/GABARAP-Familien-Proteine auf Autophagosom-Membranen binden.",
          nl: "Selectieve autofagie gebruikt cargo receptoren (zoals p62/SQSTM1, NBR1, OPTN) die tegelijkertijd geubiquitineerde cargo en LC3/GABARAP familie eiwitten binden op autophagosoom membranen."
        }
      },
      {
        question: {
          en: "How do coactivator complexes integrate multiple transcriptional signals at gene promoters?",
          es: "¿Cómo integran los complejos coactivadores múltiples señales transcripcionales en promotores génicos?",
          de: "Wie integrieren Koaktivator-Komplexe multiple transkriptionale Signale an Gen-Promotoren?",
          nl: "Hoe integreren coactivator complexen meerdere transcriptionele signalen bij gen promotors?"
        },
        options: [
          { en: "Mediator complex acts as bridge between transcription factors and RNA polymerase II while coordinating chromatin modifications", es: "El complejo Mediador actúa como puente entre factores de transcripción y ARN polimerasa II mientras coordina modificaciones de cromatina", de: "Mediator-Komplex fungiert als Brücke zwischen Transkriptionsfaktoren und RNA-Polymerase II während er Chromatin-Modifikationen koordiniert", nl: "Mediator complex functioneert als brug tussen transcriptiefactoren en RNA polymerase II terwijl het chromatin modificaties coördineert" },
          { en: "Direct DNA binding by each coactivator independently", es: "Unión directa a ADN por cada coactivador independientemente", de: "Direkte DNA-Bindung durch jeden Koaktivator unabhängig", nl: "Directe DNA binding door elke coactivator onafhankelijk" },
          { en: "Sequential binding without communication", es: "Unión secuencial sin comunicación", de: "Sequentielle Bindung ohne Kommunikation", nl: "Sequentiële binding zonder communicatie" },
          { en: "Random assembly at transcription sites", es: "Ensamblaje aleatorio en sitios de transcripción", de: "Zufällige Assemblierung an Transkriptionsstellen", nl: "Willekeurige assemblage bij transcriptie sites" }
        ],
        correct: 0,
        explanation: {
          en: "The Mediator complex serves as a central hub integrating signals from multiple transcription factors and conveying them to RNA polymerase II and general transcription factors. Mediator coordinates with chromatin remodeling complexes, histone-modifying enzymes, and other coactivators to establish appropriate transcriptional output based on cellular context and regulatory input combinations.",
          es: "El complejo Mediador sirve como centro central integrando señales de múltiples factores de transcripción y transmitiéndolas a ARN polimerasa II y factores generales de transcripción.",
          de: "Der Mediator-Komplex dient als zentrale Drehscheibe, die Signale von multiplen Transkriptionsfaktoren integriert und sie an RNA-Polymerase II und allgemeine Transkriptionsfaktoren weiterleitet.",
          nl: "Het Mediator complex dient als centrale hub die signalen van meerdere transcriptiefactoren integreert en doorgeeft aan RNA polymerase II en algemene transcriptiefactoren."
        }
      },
      {
        question: {
          en: "What molecular events drive synapsis and crossing over during meiotic prophase I?",
          es: "¿Qué eventos moleculares impulsan sinapsis y entrecruzamiento durante profase I meiótica?",
          de: "Welche molekularen Ereignisse treiben Synapsis und Crossing-over während der meiotischen Prophase I an?",
          nl: "Welke moleculaire gebeurtenissen drijven synapsis en crossing over aan tijdens meiotische profase I?"
        },
        options: [
          { en: "Synaptonemal complex formation facilitates DNA double-strand break repair through homologous recombination pathways", es: "Formación del complejo sinaptonémico facilita reparación de rupturas de doble cadena de ADN a través de vías de recombinación homóloga", de: "Synaptonemal-Komplex-Bildung erleichtert DNA-Doppelstrangbruch-Reparatur durch homologe Rekombinationswege", nl: "Synaptonemaal complex vorming faciliteert DNA dubbele-streng breuk reparatie door homologe recombinatie pathways" },
          { en: "Random chromosome pairing without sequence specificity", es: "Apareamiento aleatorio de cromosomas sin especificidad de secuencia", de: "Zufällige Chromosomenpaarung ohne Sequenzspezifität", nl: "Willekeurige chromosoom paring zonder sequentie specificiteit" },
          { en: "Direct sister chromatid exchange only", es: "Solo intercambio directo de cromátidas hermanas", de: "Nur direkter Schwesterchromatid-Austausch", nl: "Alleen directe zuster chromatide uitwisseling" },
          { en: "Mitotic-like chromosome condensation", es: "Condensación cromosómica tipo mitótica", de: "Mitose-ähnliche Chromosomenkondensation", nl: "Mitotische-achtige chromosoom condensatie" }
        ],
        correct: 0,
        explanation: {
          en: "During meiotic prophase I, homologous chromosomes pair through synapsis facilitated by the synaptonemal complex. Programmed DNA double-strand breaks created by SPO11 are repaired through homologous recombination, leading to crossing over and genetic exchange. This process ensures proper chromosome segregation and genetic diversity.",
          es: "Durante la profase I meiótica, los cromosomas homólogos se aparean a través de sinapsis facilitada por el complejo sinaptonémico. Las rupturas programadas de doble cadena de ADN creadas por SPO11 se reparan a través de recombinación homóloga.",
          de: "Während der meiotischen Prophase I paaren sich homologe Chromosomen durch Synapsis, die durch den Synaptonemal-Komplex erleichtert wird. Programmierte DNA-Doppelstrangbrüche durch SPO11 werden durch homologe Rekombination repariert.",
          nl: "Tijdens meiotische profase I paren homologe chromosomen door synapsis gefaciliteerd door het synaptonemaal complex. Geprogrammeerde DNA dubbele-streng breuken gemaakt door SPO11 worden gerepareerd door homologe recombinatie."
        }
      },
      {
        question: {
          en: "How do DNA methyltransferases establish and maintain epigenetic marks?",
          es: "¿Cómo establecen y mantienen las ADN metiltransferasas marcas epigenéticas?",
          de: "Wie etablieren und erhalten DNA-Methyltransferasen epigenetische Markierungen?",
          nl: "Hoe vestigen en behouden DNA methyltransferases epigenetische markeringen?"
        },
        options: [
          { en: "DNMT3A/B establish de novo methylation while DNMT1 maintains hemimethylated CpG sites during replication", es: "DNMT3A/B establecen metilación de novo mientras DNMT1 mantiene sitios CpG hemimetilados durante replicación", de: "DNMT3A/B etablieren de novo Methylierung während DNMT1 hemimethylierte CpG-Stellen während der Replikation erhält", nl: "DNMT3A/B vestigen de novo methylatie terwijl DNMT1 hemimethylated CpG sites behoudt tijdens replicatie" },
          { en: "Random methylation of all cytosine residues", es: "Metilación aleatoria de todos los residuos de citosina", de: "Zufällige Methylierung aller Cytosin-Reste", nl: "Willekeurige methylatie van alle cytosine residuen" },
          { en: "Exclusive targeting of adenine bases", es: "Direccionamiento exclusivo de bases de adenina", de: "Ausschließliche Zielausrichtung auf Adenin-Basen", nl: "Exclusieve targeting van adenine bases" },
          { en: "Protein-independent spontaneous methylation", es: "Metilación espontánea independiente de proteínas", de: "Protein-unabhängige spontane Methylierung", nl: "Eiwit-onafhankelijke spontane methylatie" }
        ],
        correct: 0,
        explanation: {
          en: "DNA methyltransferases have distinct roles: DNMT3A and DNMT3B establish de novo methylation patterns during development and in response to environmental cues, while DNMT1 acts as the 'maintenance methyltransferase' that preserves methylation patterns by methylating hemimethylated CpG sites during DNA replication.",
          es: "Las ADN metiltransferasas tienen roles distintos: DNMT3A y DNMT3B establecen patrones de metilación de novo durante desarrollo y en respuesta a señales ambientales, mientras DNMT1 actúa como 'metiltransferasa de mantenimiento'.",
          de: "DNA-Methyltransferasen haben unterschiedliche Rollen: DNMT3A und DNMT3B etablieren de novo Methylierungsmuster während der Entwicklung und als Reaktion auf Umweltsignale, während DNMT1 als 'Erhaltungs-Methyltransferase' wirkt.",
          nl: "DNA methyltransferases hebben verschillende rollen: DNMT3A en DNMT3B vestigen de novo methylatie patronen tijdens ontwikkeling en in reactie op omgevingssignalen, terwijl DNMT1 fungeert als 'onderhouds methyltransferase'."
        }
      },
      {
        question: {
          en: "What drives tissue-specific gene expression during embryonic development?",
          es: "¿Qué impulsa la expresión génica específica de tejidos durante el desarrollo embrionario?",
          de: "Was treibt gewebe-spezifische Genexpression während der Embryonalentwicklung an?",
          nl: "Wat drijft weefsel-specifieke genexpressie aan tijdens embryonale ontwikkeling?"
        },
        options: [
          { en: "Combinatorial transcription factor codes and enhancer accessibility patterns define cellular identity", es: "Códigos combinatorios de factores de transcripción y patrones de accesibilidad de enhancers definen identidad celular", de: "Kombinatorische Transkriptionsfaktor-Codes und Enhancer-Zugänglichkeitsmuster definieren Zellidentität", nl: "Combinatorische transcriptiefactor codes en enhancer toegankelijkheids patronen definiëren cellulaire identiteit" },
          { en: "Universal expression of all genes in every cell type", es: "Expresión universal de todos los genes en cada tipo celular", de: "Universelle Expression aller Gene in jedem Zelltyp", nl: "Universele expressie van alle genen in elk celtype" },
          { en: "Random activation patterns determined by chance", es: "Patrones de activación aleatorios determinados por casualidad", de: "Zufällige Aktivierungsmuster durch Zufall bestimmt", nl: "Willekeurige activatie patronen bepaald door toeval" },
          { en: "Exclusive reliance on post-transcriptional modifications", es: "Dependencia exclusiva en modificaciones post-transcripcionales", de: "Ausschließliche Abhängigkeit von post-transkriptionalen Modifikationen", nl: "Exclusieve afhankelijkheid van post-transcriptionele modificaties" }
        ],
        correct: 0,
        explanation: {
          en: "Tissue-specific gene expression results from unique combinations of transcription factors that activate distinct enhancer elements in different cell types. These transcription factor codes, established during development through signaling pathways and cell fate decisions, create tissue-specific chromatin accessibility patterns and gene regulatory networks.",
          es: "La expresión génica específica de tejidos resulta de combinaciones únicas de factores de transcripción que activan elementos enhancer distintos en diferentes tipos celulares.",
          de: "Gewebe-spezifische Genexpression resultiert aus einzigartigen Kombinationen von Transkriptionsfaktoren, die unterschiedliche Enhancer-Elemente in verschiedenen Zelltypen aktivieren.",
          nl: "Weefsel-specifieke genexpressie resulteert uit unieke combinaties van transcriptiefactoren die verschillende enhancer elementen activeren in verschillende celtypes."
        }
      },
      {
        question: {
          en: "How do protein quality control systems prevent aggregation and misfolding?",
          es: "¿Cómo previenen los sistemas de control de calidad de proteínas la agregación y mal plegamiento?",
          de: "Wie verhindern Protein-Qualitätskontrollsysteme Aggregation und Fehlpaltung?",
          nl: "Hoe voorkomen eiwit kwaliteitscontrole systemen aggregatie en verkeerde vouwing?"
        },
        options: [
          { en: "Chaperones assist folding while ubiquitin-proteasome and autophagy systems clear misfolded proteins", es: "Chaperonas asisten plegamiento mientras sistemas ubiquitina-proteasoma y autofagia eliminan proteínas mal plegadas", de: "Chaperone helfen beim Falten während Ubiquitin-Proteasom- und Autophagie-Systeme fehlgefaltete Proteine beseitigen", nl: "Chaperones assisteren vouwing terwijl ubiquitin-proteasoom en autofagie systemen verkeerd gevouwen eiwitten opruimen" },
          { en: "Immediate degradation of all newly synthesized proteins", es: "Degradación inmediata de todas las proteínas recién sintetizadas", de: "Sofortige Degradation aller neu synthetisierten Proteine", nl: "Onmiddellijke degradatie van alle nieuw gesynthetiseerde eiwitten" },
          { en: "Prevention of protein synthesis entirely", es: "Prevención completa de síntesis de proteínas", de: "Vollständige Verhinderung der Protein-Synthese", nl: "Volledig voorkomen van eiwit synthese" },
          { en: "Exclusive reliance on thermal stability", es: "Dependencia exclusiva en estabilidad térmica", de: "Ausschließliche Abhängigkeit von thermischer Stabilität", nl: "Exclusieve afhankelijkheid van thermische stabiliteit" }
        ],
        correct: 0,
        explanation: {
          en: "Protein quality control involves multiple layers: molecular chaperones (like Hsp70, Hsp60) assist proper folding and prevent aggregation; the ubiquitin-proteasome system targets misfolded proteins for degradation; autophagy removes protein aggregates; and stress responses upregulate protective mechanisms when quality control is overwhelmed.",
          es: "El control de calidad de proteínas involucra múltiples capas: chaperonas moleculares (como Hsp70, Hsp60) asisten plegamiento apropiado y previenen agregación.",
          de: "Protein-Qualitätskontrolle umfasst multiple Schichten: molekulare Chaperone (wie Hsp70, Hsp60) helfen beim ordnungsgemäßen Falten und verhindern Aggregation.",
          nl: "Eiwit kwaliteitscontrole behelst meerdere lagen: moleculaire chaperones (zoals Hsp70, Hsp60) assisteren juiste vouwing en voorkomen aggregatie."
        }
      },
      {
        question: {
          en: "What mechanisms control cell fate commitment during stem cell differentiation?",
          es: "¿Qué mecanismos controlan compromiso de destino celular durante diferenciación de células madre?",
          de: "Welche Mechanismen kontrollieren Zellfat-Festlegung während Stammzelldifferenzierung?",
          nl: "Welke mechanismen controleren cel lot vastlegging tijdens stamcel differentiatie?"
        },
        options: [
          { en: "Transcriptional networks create bistable switches while chromatin modifications lock in cell identity", es: "Redes transcripcionales crean interruptores biestables mientras modificaciones de cromatina fijan identidad celular", de: "Transkriptionsnetzwerke schaffen bistabile Schalter während Chromatin-Modifikationen Zellidentität fixieren", nl: "Transcriptionele netwerken creëren bistabiele schakelaars terwijl chromatin modificaties cel identiteit vastzetten" },
          { en: "Random selection among all possible cell types", es: "Selección aleatoria entre todos los tipos celulares posibles", de: "Zufällige Auswahl unter allen möglichen Zelltypen", nl: "Willekeurige selectie tussen alle mogelijke celtypes" },
          { en: "Immediate irreversible commitment at first division", es: "Compromiso irreversible inmediato en primera división", de: "Sofortige irreversible Festlegung bei erster Teilung", nl: "Onmiddellijke onomkeerbare vastlegging bij eerste deling" },
          { en: "Exclusive control by extracellular matrix composition", es: "Control exclusivo por composición de matriz extracelular", de: "Ausschließliche Kontrolle durch extrazelluläre Matrix-Zusammensetzung", nl: "Exclusieve controle door extracellulaire matrix compositie" }
        ],
        correct: 0,
        explanation: {
          en: "Stem cell differentiation involves progressive restriction of cell fate through transcriptional regulatory networks that form bistable switches. Master transcription factors create positive feedback loops while repressing alternative fates. Chromatin modifications, including DNA methylation and histone marks, gradually lock in these decisions by making alternative cell fates increasingly inaccessible.",
          es: "La diferenciación de células madre involucra restricción progresiva de destino celular a través de redes reguladoras transcripcionales que forman interruptores biestables.",
          de: "Stammzelldifferenzierung umfasst progressive Einschränkung des Zellfats durch transkriptionale Regulationsnetzwerke, die bistabile Schalter bilden.",
          nl: "Stamcel differentiatie behelst progressieve restrictie van cel lot door transcriptionele regulatoire netwerken die bistabiele schakelaars vormen."
        }
      },
      {
        question: {
          en: "How do RNA editing mechanisms diversify the transcriptome and proteome?",
          es: "¿Cómo diversifican los mecanismos de edición de ARN el transcriptoma y proteoma?",
          de: "Wie diversifizieren RNA-Editier-Mechanismen das Transkriptom und Proteom?",
          nl: "Hoe diversifiëren RNA editing mechanismen het transcriptoom en proteoom?"
        },
        options: [
          { en: "ADAR enzymes convert adenosines to inosines while APOBEC family enzymes deaminate cytidines to uridines", es: "Enzimas ADAR convierten adenosinas a inosinas mientras enzimas de familia APOBEC desaminan citidinas a uridinas", de: "ADAR-Enzyme konvertieren Adenosine zu Inosinen während APOBEC-Familien-Enzyme Cytidine zu Uridinen desaminieren", nl: "ADAR enzymen converteren adenosines naar inosines terwijl APOBEC familie enzymen cytidines deamineren naar uridines" },
          { en: "Random base substitutions throughout all RNA molecules", es: "Sustituciones aleatorias de bases a través de todas las moléculas de ARN", de: "Zufällige Basensubstitutionen in allen RNA-Molekülen", nl: "Willekeurige base substituties door alle RNA moleculen" },
          { en: "Complete replacement of original RNA sequences", es: "Reemplazo completo de secuencias de ARN originales", de: "Vollständiger Ersatz ursprünglicher RNA-Sequenzen", nl: "Complete vervanging van originele RNA sequenties" },
          { en: "Exclusive editing in non-coding regions", es: "Edición exclusiva en regiones no codificantes", de: "Ausschließliche Editierung in nicht-kodierenden Regionen", nl: "Exclusieve editing in non-coderende regio's" }
        ],
        correct: 0,
        explanation: {
          en: "RNA editing expands genetic diversity beyond the genome sequence. ADAR enzymes perform A-to-I editing, which is read as G during translation, while APOBEC enzymes perform C-to-U editing. These modifications can create new codons, alter splice sites, change miRNA targeting, and generate protein isoforms not encoded in the genome, significantly expanding proteomic diversity.",
          es: "La edición de ARN expande diversidad genética más allá de la secuencia genómica. Las enzimas ADAR realizan edición A-a-I, que se lee como G durante traducción.",
          de: "RNA-Editierung erweitert genetische Vielfalt über die Genomsequenz hinaus. ADAR-Enzyme führen A-zu-I-Editierung durch, die während der Translation als G gelesen wird.",
          nl: "RNA editing breidt genetische diversiteit uit voorbij de genoom sequentie. ADAR enzymen voeren A-naar-I editing uit, wat wordt gelezen als G tijdens translatie."
        }
      },
      {
        question: {
          en: "What drives the evolution of gene regulatory networks and their robustness?",
          es: "¿Qué impulsa la evolución de redes reguladoras génicas y su robustez?",
          de: "Was treibt die Evolution von Genregulationsnetzwerken und ihre Robustheit an?",
          nl: "Wat drijft de evolutie aan van gen regulatoire netwerken en hun robuustheid?"
        },
        options: [
          { en: "Selection for network motifs that provide stability while allowing adaptive flexibility through redundancy", es: "Selección por motivos de red que proporcionan estabilidad mientras permiten flexibilidad adaptativa a través de redundancia", de: "Selektion für Netzwerk-Motive, die Stabilität bieten während sie adaptive Flexibilität durch Redundanz ermöglichen", nl: "Selectie voor netwerk motieven die stabiliteit bieden terwijl ze adaptieve flexibiliteit mogelijk maken door redundantie" },
          { en: "Random mutations without selective pressure", es: "Mutaciones aleatorias sin presión selectiva", de: "Zufällige Mutationen ohne Selektionsdruck", nl: "Willekeurige mutaties zonder selectieve druk" },
          { en: "Complete conservation of ancestral networks", es: "Conservación completa de redes ancestrales", de: "Vollständige Erhaltung anzestraler Netzwerke", nl: "Volledige conservering van voorouderlijke netwerken" },
          { en: "Immediate replacement of entire regulatory systems", es: "Reemplazo inmediato de sistemas reguladores completos", de: "Sofortiger Ersatz ganzer Regulationssysteme", nl: "Onmiddellijke vervanging van gehele regulatoire systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Gene regulatory network evolution is shaped by selection for specific network motifs (like feed-forward loops, negative feedback) that provide robustness to perturbations while maintaining evolvability. Redundancy through gene duplications and alternative pathways allows networks to buffer against harmful mutations while permitting beneficial innovations to arise and be tested.",
          es: "La evolución de redes reguladoras génicas está formada por selección para motivos de red específicos (como bucles de alimentación hacia adelante, retroalimentación negativa) que proporcionan robustez a perturbaciones.",
          de: "Die Evolution von Genregulationsnetzwerken wird durch Selektion für spezifische Netzwerk-Motive (wie Feed-Forward-Schleifen, negative Rückkopplung) geformt, die Robustheit gegenüber Störungen bieten.",
          nl: "Gen regulatoire netwerk evolutie wordt gevormd door selectie voor specifieke netwerk motieven (zoals feed-forward lussen, negatieve feedback) die robuustheid bieden tegen verstoringen."
        }
      }
    ]
  };
  
  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/genetics', level4);
  }
})();