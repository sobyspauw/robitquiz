// Genetics - Level 1: Genetic Principles and Inheritance
window.addLevel('mind-bender/genetics', {
  name: { 
    en: 'Genetic Principles and Inheritance', 
    es: 'Principios Genéticos y Herencia', 
    de: 'Genetische Prinzipien und Vererbung', 
    nl: 'Genetische Principes en Erfelijkheid' 
  },
  questions: [
    {
      question: {
        en: "What is the basic unit of heredity?",
        es: "¿Cuál es la unidad básica de la herencia?",
        de: "Was ist die Grundeinheit der Vererbung?",
        nl: "Wat is de basiseenheid van erfelijkheid?"
      },
      options: [
        { en: "Chromosome", es: "Cromosoma", de: "Chromosom", nl: "Chromosoom" },
        { en: "Gene", es: "Gen", de: "Gen", nl: "Gen" },
        { en: "DNA molecule", es: "Molécula de ADN", de: "DNA-Molekül", nl: "DNA-molecuul" },
        { en: "Protein", es: "Proteína", de: "Protein", nl: "Eiwit" }
      ],
      correct: 1,
      explanation: {
        en: "A gene is the basic unit of heredity, a specific sequence of DNA that codes for a particular trait and is passed from parents to offspring.",
        es: "Un gen es la unidad básica de la herencia, una secuencia específica de ADN que codifica para un rasgo particular y se pasa de padres a descendencia.",
        de: "Ein Gen ist die Grundeinheit der Vererbung, eine spezifische DNA-Sequenz, die für ein bestimmtes Merkmal kodiert und von Eltern an Nachkommen weitergegeben wird.",
        nl: "Een gen is de basiseenheid van erfelijkheid, een specifieke DNA-sequentie die codeert voor een bepaalde eigenschap en wordt doorgegeven van ouders naar nakomelingen."
      }
    },
    {
      question: {
        en: "What term describes an organism having two identical alleles for a trait?",
        es: "¿Qué término describe un organismo que tiene dos alelos idénticos para un rasgo?",
        de: "Welcher Begriff beschreibt einen Organismus mit zwei identischen Allelen für ein Merkmal?",
        nl: "Welke term beschrijft een organisme met twee identieke allelen voor een eigenschap?"
      },
      options: [
        { en: "Heterozygous", es: "Heterocigoto", de: "Heterozygot", nl: "Heterozygoot" },
        { en: "Homozygous", es: "Homocigoto", de: "Homozygot", nl: "Homozygoot" },
        { en: "Diploid", es: "Diploide", de: "Diploid", nl: "Diploïd" },
        { en: "Haploid", es: "Haploide", de: "Haploid", nl: "Haploïd" }
      ],
      correct: 1,
      explanation: {
        en: "Homozygous describes an organism that has two identical alleles for a particular trait, such as AA or aa. This can result in dominant or recessive expression.",
        es: "Homocigoto describe un organismo que tiene dos alelos idénticos para un rasgo particular, como AA o aa. Esto puede resultar en expresión dominante o recesiva.",
        de: "Homozygot beschreibt einen Organismus, der zwei identische Allele für ein bestimmtes Merkmal hat, wie AA oder aa. Dies kann zu dominanter oder rezessiver Expression führen.",
        nl: "Homozygoot beschrijft een organisme dat twee identieke allelen heeft voor een bepaalde eigenschap, zoals AA of aa. Dit kan resulteren in dominante of recessieve expressie."
      }
    },
    {
      question: {
        en: "In Mendel's experiments, what is the typical ratio of dominant to recessive traits in the F2 generation?",
        es: "En los experimentos de Mendel, ¿cuál es la proporción típica de rasgos dominantes a recesivos en la generación F2?",
        de: "Was ist in Mendels Experimenten das typische Verhältnis von dominanten zu rezessiven Merkmalen in der F2-Generation?",
        nl: "Wat is in Mendels experimenten de typische verhouding van dominante tot recessieve eigenschappen in de F2-generatie?"
      },
      options: [
        { en: "1:1", es: "1:1", de: "1:1", nl: "1:1" },
        { en: "2:1", es: "2:1", de: "2:1", nl: "2:1" },
        { en: "3:1", es: "3:1", de: "3:1", nl: "3:1" },
        { en: "4:1", es: "4:1", de: "4:1", nl: "4:1" }
      ],
      correct: 2,
      explanation: {
        en: "Mendel's Law of Segregation produces a 3:1 ratio of dominant to recessive phenotypes in the F2 generation when crossing two heterozygous parents (Aa × Aa).",
        es: "La Ley de Segregación de Mendel produce una proporción 3:1 de fenotipos dominantes a recesivos en la generación F2 al cruzar dos padres heterocigotos (Aa × Aa).",
        de: "Mendels Gesetz der Segregation erzeugt ein 3:1-Verhältnis von dominanten zu rezessiven Phänotypen in der F2-Generation beim Kreuzen zweier heterozygoter Eltern (Aa × Aa).",
        nl: "Mendels Wet van Segregatie produceert een 3:1 verhouding van dominante tot recessieve fenotypen in de F2-generatie bij het kruisen van twee heterozygote ouders (Aa × Aa)."
      }
    },
    {
      question: {
        en: "What is the observable physical appearance of an organism called?",
        es: "¿Cómo se llama la apariencia física observable de un organismo?",
        de: "Wie nennt man das beobachtbare körperliche Erscheinungsbild eines Organismus?",
        nl: "Hoe wordt het waarneembare fysieke uiterlijk van een organisme genoemd?"
      },
      options: [
        { en: "Genotype", es: "Genotipo", de: "Genotyp", nl: "Genotype" },
        { en: "Phenotype", es: "Fenotipo", de: "Phänotyp", nl: "Fenotype" },
        { en: "Allele", es: "Alelo", de: "Allel", nl: "Allel" },
        { en: "Chromosome", es: "Cromosoma", de: "Chromosom", nl: "Chromosoom" }
      ],
      correct: 1,
      explanation: {
        en: "The phenotype is the observable physical appearance or characteristics of an organism, which results from the interaction between genotype and environment.",
        es: "El fenotipo es la apariencia física observable o características de un organismo, que resulta de la interacción entre genotipo y ambiente.",
        de: "Der Phänotyp ist das beobachtbare körperliche Erscheinungsbild oder die Eigenschaften eines Organismus, die aus der Wechselwirkung zwischen Genotyp und Umwelt resultieren.",
        nl: "Het fenotype is het waarneembare fysieke uiterlijk of de kenmerken van een organisme, wat resulteert uit de interactie tussen genotype en omgeving."
      }
    },
    {
      question: {
        en: "Which type of inheritance occurs when both alleles are expressed simultaneously?",
        es: "¿Qué tipo de herencia ocurre cuando ambos alelos se expresan simultáneamente?",
        de: "Welche Art der Vererbung tritt auf, wenn beide Allele gleichzeitig exprimiert werden?",
        nl: "Welk type erfelijkheid treedt op wanneer beide allelen tegelijkertijd tot expressie komen?"
      },
      options: [
        { en: "Complete dominance", es: "Dominancia completa", de: "Vollständige Dominanz", nl: "Volledige dominantie" },
        { en: "Incomplete dominance", es: "Dominancia incompleta", de: "Unvollständige Dominanz", nl: "Onvolledige dominantie" },
        { en: "Codominance", es: "Codominancia", de: "Kodominanz", nl: "Codominantie" },
        { en: "Sex-linked inheritance", es: "Herencia ligada al sexo", de: "Geschlechtsgebundene Vererbung", nl: "Geslachtsgebonden erfelijkheid" }
      ],
      correct: 2,
      explanation: {
        en: "Codominance occurs when both alleles are fully expressed simultaneously, such as in AB blood type where both A and B antigens are present.",
        es: "La codominancia ocurre cuando ambos alelos se expresan completamente de manera simultánea, como en el tipo de sangre AB donde están presentes tanto antígenos A como B.",
        de: "Kodominanz tritt auf, wenn beide Allele vollständig gleichzeitig exprimiert werden, wie beim AB-Bluttyp, wo sowohl A- als auch B-Antigene vorhanden sind.",
        nl: "Codominantie treedt op wanneer beide allelen volledig tegelijkertijd tot expressie komen, zoals bij bloedgroep AB waar zowel A- als B-antigenen aanwezig zijn."
      }
    },
    {
      question: {
        en: "What is a mutation?",
        es: "¿Qué es una mutación?",
        de: "Was ist eine Mutation?",
        nl: "Wat is een mutatie?"
      },
      options: [
        { en: "A change in DNA sequence", es: "Un cambio en la secuencia de ADN", de: "Eine Änderung in der DNA-Sequenz", nl: "Een verandering in DNA-sequentie" },
        { en: "A type of chromosome", es: "Un tipo de cromosoma", de: "Eine Art von Chromosom", nl: "Een type chromosoom" },
        { en: "A reproductive cell", es: "Una célula reproductiva", de: "Eine Fortpflanzungszelle", nl: "Een voortplantingscel" },
        { en: "A protein structure", es: "Una estructura proteica", de: "Eine Proteinstruktur", nl: "Een eiwitstructuur" }
      ],
      correct: 0,
      explanation: {
        en: "A mutation is a change in the DNA sequence that can occur naturally or be induced by environmental factors. It can affect genes and potentially alter traits.",
        es: "Una mutación es un cambio en la secuencia de ADN que puede ocurrir naturalmente o ser inducido por factores ambientales. Puede afectar genes y potencialmente alterar rasgos.",
        de: "Eine Mutation ist eine Änderung in der DNA-Sequenz, die natürlich auftreten oder durch Umweltfaktoren induziert werden kann. Sie kann Gene beeinflussen und potenziell Merkmale verändern.",
        nl: "Een mutatie is een verandering in de DNA-sequentie die natuurlijk kan optreden of veroorzaakt kan worden door omgevingsfactoren. Het kan genen beïnvloeden en mogelijk eigenschappen veranderen."
      }
    },
    {
      question: {
        en: "How many chromosomes do normal human somatic cells contain?",
        es: "¿Cuántos cromosomas contienen las células somáticas humanas normales?",
        de: "Wie viele Chromosomen enthalten normale menschliche somatische Zellen?",
        nl: "Hoeveel chromosomen bevatten normale menselijke somatische cellen?"
      },
      options: [
        { en: "23", es: "23", de: "23", nl: "23" },
        { en: "46", es: "46", de: "46", nl: "46" },
        { en: "92", es: "92", de: "92", nl: "92" },
        { en: "48", es: "48", de: "48", nl: "48" }
      ],
      correct: 1,
      explanation: {
        en: "Normal human somatic cells are diploid and contain 46 chromosomes (23 pairs), while gametes are haploid with 23 chromosomes.",
        es: "Las células somáticas humanas normales son diploides y contienen 46 cromosomas (23 pares), mientras que los gametos son haploides con 23 cromosomas.",
        de: "Normale menschliche somatische Zellen sind diploid und enthalten 46 Chromosomen (23 Paare), während Gameten haploid mit 23 Chromosomen sind.",
        nl: "Normale menselijke somatische cellen zijn diploïd en bevatten 46 chromosomen (23 paren), terwijl gameten haploïd zijn met 23 chromosomen."
      }
    },
    {
      question: {
        en: "What is the process by which genetic information is passed from one generation to the next?",
        es: "¿Cuál es el proceso por el cual la información genética se pasa de una generación a la siguiente?",
        de: "Was ist der Prozess, durch den genetische Informationen von einer Generation zur nächsten weitergegeben werden?",
        nl: "Wat is het proces waarbij genetische informatie wordt doorgegeven van de ene generatie naar de volgende?"
      },
      options: [
        { en: "Evolution", es: "Evolución", de: "Evolution", nl: "Evolutie" },
        { en: "Heredity", es: "Herencia", de: "Vererbung", nl: "Erfelijkheid" },
        { en: "Mutation", es: "Mutación", de: "Mutation", nl: "Mutatie" },
        { en: "Adaptation", es: "Adaptación", de: "Anpassung", nl: "Aanpassing" }
      ],
      correct: 1,
      explanation: {
        en: "Heredity is the process by which genetic information and traits are passed from parents to offspring through genes and chromosomes.",
        es: "La herencia es el proceso por el cual la información genética y los rasgos se pasan de padres a descendencia a través de genes y cromosomas.",
        de: "Vererbung ist der Prozess, durch den genetische Informationen und Merkmale von Eltern an Nachkommen durch Gene und Chromosomen weitergegeben werden.",
        nl: "Erfelijkheid is het proces waarbij genetische informatie en eigenschappen worden doorgegeven van ouders naar nakomelingen via genen en chromosomen."
      }
    },
    {
      question: {
        en: "What is an allele?",
        es: "¿Qué es un alelo?",
        de: "Was ist ein Allel?",
        nl: "Wat is een allel?"
      },
      options: [
        { en: "A type of chromosome", es: "Un tipo de cromosoma", de: "Eine Art von Chromosom", nl: "Een type chromosoom" },
        { en: "A variant form of a gene", es: "Una forma variante de un gen", de: "Eine Variantenform eines Gens", nl: "Een variantvorm van een gen" },
        { en: "A protein molecule", es: "Una molécula proteica", de: "Ein Proteinmolekül", nl: "Een eiwitjemolecuul" },
        { en: "A cell organelle", es: "Un orgánulo celular", de: "Ein Zellorganell", nl: "Een celorganelle" }
      ],
      correct: 1,
      explanation: {
        en: "An allele is a variant form of a gene that occupies the same position on homologous chromosomes and controls the same trait but may produce different phenotypes.",
        es: "Un alelo es una forma variante de un gen que ocupa la misma posición en cromosomas homólogos y controla el mismo rasgo pero puede producir diferentes fenotipos.",
        de: "Ein Allel ist eine Variantenform eines Gens, das dieselbe Position auf homologen Chromosomen einnimmt und dasselbe Merkmal kontrolliert, aber unterschiedliche Phänotypen hervorbringen kann.",
        nl: "Een allel is een variantvorm van een gen dat dezelfde positie inneemt op homologe chromosomen en dezelfde eigenschap controleert maar verschillende fenotypen kan produceren."
      }
    },
    {
      question: {
        en: "What is the result when genes are located close together on the same chromosome?",
        es: "¿Cuál es el resultado cuando los genes están ubicados cerca uno del otro en el mismo cromosoma?",
        de: "Was ist das Ergebnis, wenn Gene nahe beieinander auf demselben Chromosom liegen?",
        nl: "Wat is het resultaat wanneer genen dicht bij elkaar op hetzelfde chromosoom liggen?"
      },
      options: [
        { en: "They assort independently", es: "Se distribuyen independientemente", de: "Sie sortieren unabhängig", nl: "Ze verdelen onafhankelijk" },
        { en: "They are linked", es: "Están ligados", de: "Sie sind gekoppelt", nl: "Ze zijn gekoppeld" },
        { en: "They mutate more frequently", es: "Mutan más frecuentemente", de: "Sie mutieren häufiger", nl: "Ze muteren vaker" },
        { en: "They cannot be inherited", es: "No pueden ser heredados", de: "Sie können nicht vererbt werden", nl: "Ze kunnen niet geërfd worden" }
      ],
      correct: 1,
      explanation: {
        en: "Genes located close together on the same chromosome are linked and tend to be inherited together, violating Mendel's law of independent assortment.",
        es: "Los genes ubicados cerca uno del otro en el mismo cromosoma están ligados y tienden a heredarse juntos, violando la ley de distribución independiente de Mendel.",
        de: "Gene, die nahe beieinander auf demselben Chromosom liegen, sind gekoppelt und neigen dazu, zusammen vererbt zu werden, was Mendels Gesetz der unabhängigen Sortierung verletzt.",
        nl: "Genen die dicht bij elkaar op hetzelfde chromosoom liggen zijn gekoppeld en hebben de neiging samen geërfd te worden, wat Mendels wet van onafhankelijke verdeling schendt."
      }
    },
    {
      question: {
        en: "What type of genetic disorder is caused by having an extra chromosome?",
        es: "¿Qué tipo de trastorno genético es causado por tener un cromosoma extra?",
        de: "Welche Art von genetischer Störung wird durch ein zusätzliches Chromosom verursacht?",
        nl: "Welk type genetische aandoening wordt veroorzaakt door een extra chromosoom?"
      },
      options: [
        { en: "Deletion", es: "Deleción", de: "Deletion", nl: "Deletie" },
        { en: "Inversion", es: "Inversión", de: "Inversion", nl: "Inversie" },
        { en: "Trisomy", es: "Trisomía", de: "Trisomie", nl: "Trisomie" },
        { en: "Translocation", es: "Translocación", de: "Translokation", nl: "Translocatie" }
      ],
      correct: 2,
      explanation: {
        en: "Trisomy is a chromosomal disorder where an individual has three copies of a particular chromosome instead of two. Down syndrome (trisomy 21) is a common example.",
        es: "La trisomía es un trastorno cromosómico donde un individuo tiene tres copias de un cromosoma particular en lugar de dos. El síndrome de Down (trisomía 21) es un ejemplo común.",
        de: "Trisomie ist eine chromosomale Störung, bei der ein Individuum drei Kopien eines bestimmten Chromosoms anstelle von zwei hat. Down-Syndrom (Trisomie 21) ist ein häufiges Beispiel.",
        nl: "Trisomie is een chromosomale aandoening waarbij een individu drie kopieën van een bepaald chromosoom heeft in plaats van twee. Down-syndroom (trisomie 21) is een veel voorkomend voorbeeld."
      }
    },
    {
      question: {
        en: "Which scientist is known as the 'father of genetics'?",
        es: "¿Qué científico es conocido como el 'padre de la genética'?",
        de: "Welcher Wissenschaftler ist als 'Vater der Genetik' bekannt?",
        nl: "Welke wetenschapper staat bekend als de 'vader van de genetica'?"
      },
      options: [
        { en: "Charles Darwin", es: "Charles Darwin", de: "Charles Darwin", nl: "Charles Darwin" },
        { en: "Gregor Mendel", es: "Gregor Mendel", de: "Gregor Mendel", nl: "Gregor Mendel" },
        { en: "James Watson", es: "James Watson", de: "James Watson", nl: "James Watson" },
        { en: "Francis Crick", es: "Francis Crick", de: "Francis Crick", nl: "Francis Crick" }
      ],
      correct: 1,
      explanation: {
        en: "Gregor Mendel is known as the father of genetics for his pioneering work with pea plants that established the fundamental laws of inheritance.",
        es: "Gregor Mendel es conocido como el padre de la genética por su trabajo pionero con plantas de guisante que estableció las leyes fundamentales de la herencia.",
        de: "Gregor Mendel ist als Vater der Genetik bekannt für seine bahnbrechende Arbeit mit Erbsenpflanzen, die die grundlegenden Vererbungsgesetze etablierte.",
        nl: "Gregor Mendel staat bekend als de vader van de genetica vanwege zijn baanbrekende werk met erwtenplanten dat de fundamentele wetten van erfelijkheid vaststelde."
      }
    },
    {
      question: {
        en: "What is crossing over in genetics?",
        es: "¿Qué es el entrecruzamiento en genética?",
        de: "Was ist Crossing-over in der Genetik?",
        nl: "Wat is crossing over in de genetica?"
      },
      options: [
        { en: "Exchange of genetic material between homologous chromosomes", es: "Intercambio de material genético entre cromosomas homólogos", de: "Austausch von genetischem Material zwischen homologen Chromosomen", nl: "Uitwisseling van genetisch materiaal tussen homologe chromosomen" },
        { en: "Formation of new chromosomes", es: "Formación de nuevos cromosomas", de: "Bildung neuer Chromosomen", nl: "Vorming van nieuwe chromosomen" },
        { en: "Division of cells", es: "División de células", de: "Zellteilung", nl: "Celdeling" },
        { en: "Mutation of genes", es: "Mutación de genes", de: "Mutation von Genen", nl: "Mutatie van genen" }
      ],
      correct: 0,
      explanation: {
        en: "Crossing over is the exchange of genetic material between homologous chromosomes during meiosis, increasing genetic diversity in gametes.",
        es: "El entrecruzamiento es el intercambio de material genético entre cromosomas homólogos durante la meiosis, aumentando la diversidad genética en los gametos.",
        de: "Crossing-over ist der Austausch von genetischem Material zwischen homologen Chromosomen während der Meiose, was die genetische Vielfalt in Gameten erhöht.",
        nl: "Crossing over is de uitwisseling van genetisch materiaal tussen homologe chromosomen tijdens meiose, wat de genetische diversiteit in gameten verhoogt."
      }
    },
    {
      question: {
        en: "What determines the sex of offspring in mammals?",
        es: "¿Qué determina el sexo de la descendencia en mamíferos?",
        de: "Was bestimmt das Geschlecht der Nachkommen bei Säugetieren?",
        nl: "Wat bepaalt het geslacht van nakomelingen bij zoogdieren?"
      },
      options: [
        { en: "Environmental factors", es: "Factores ambientales", de: "Umweltfaktoren", nl: "Omgevingsfactoren" },
        { en: "Sex chromosomes (X and Y)", es: "Cromosomas sexuales (X e Y)", de: "Geschlechtschromosomen (X und Y)", nl: "Geslachtschromosomen (X en Y)" },
        { en: "Hormone levels", es: "Niveles hormonales", de: "Hormonspiegel", nl: "Hormoonlevels" },
        { en: "Parental age", es: "Edad parental", de: "Elterliches Alter", nl: "Ouderlijke leeftijd" }
      ],
      correct: 1,
      explanation: {
        en: "In mammals, sex is determined by sex chromosomes: females have XX and males have XY. The father's sperm determines the offspring's sex.",
        es: "En mamíferos, el sexo está determinado por cromosomas sexuales: las hembras tienen XX y los machos tienen XY. El esperma del padre determina el sexo de la descendencia.",
        de: "Bei Säugetieren wird das Geschlecht durch Geschlechtschromosomen bestimmt: Weibchen haben XX und Männchen haben XY. Das Spermium des Vaters bestimmt das Geschlecht der Nachkommen.",
        nl: "Bij zoogdieren wordt het geslacht bepaald door geslachtschromosomen: vrouwtjes hebben XX en mannetjes hebben XY. Het sperma van de vader bepaalt het geslacht van de nakomelingen."
      }
    },
    {
      question: {
        en: "What is genetic engineering?",
        es: "¿Qué es la ingeniería genética?",
        de: "Was ist Gentechnik?",
        nl: "Wat is genetische modificatie?"
      },
      options: [
        { en: "Natural selection of traits", es: "Selección natural de rasgos", de: "Natürliche Selektion von Merkmalen", nl: "Natuurlijke selectie van eigenschappen" },
        { en: "Artificial manipulation of genes", es: "Manipulación artificial de genes", de: "Künstliche Manipulation von Genen", nl: "Kunstmatige manipulatie van genen" },
        { en: "Study of inheritance patterns", es: "Estudio de patrones de herencia", de: "Studium von Vererbungsmustern", nl: "Studie van erfelijkheidspatronen" },
        { en: "Breeding of organisms", es: "Reproducción de organismos", de: "Züchtung von Organismen", nl: "Fokken van organismen" }
      ],
      correct: 1,
      explanation: {
        en: "Genetic engineering is the artificial manipulation, modification, or recombination of DNA to alter an organism's characteristics.",
        es: "La ingeniería genética es la manipulación, modificación o recombinación artificial del ADN para alterar las características de un organismo.",
        de: "Gentechnik ist die künstliche Manipulation, Modifikation oder Rekombination von DNA, um die Eigenschaften eines Organismus zu verändern.",
        nl: "Genetische modificatie is de kunstmatige manipulatie, modificatie of recombinatie van DNA om de eigenschappen van een organisme te veranderen."
      }
    },
    {
      question: {
        en: "What is a carrier in genetics?",
        es: "¿Qué es un portador en genética?",
        de: "Was ist ein Träger in der Genetik?",
        nl: "Wat is een drager in de genetica?"
      },
      options: [
        { en: "An organism that shows a dominant trait", es: "Un organismo que muestra un rasgo dominante", de: "Ein Organismus, der ein dominantes Merkmal zeigt", nl: "Een organisme dat een dominante eigenschap toont" },
        { en: "An organism that carries a recessive allele but doesn't express it", es: "Un organismo que porta un alelo recesivo pero no lo expresa", de: "Ein Organismus, der ein rezessives Allel trägt, es aber nicht exprimiert", nl: "Een organisme dat een recessief allel draagt maar het niet tot expressie brengt" },
        { en: "An organism with a genetic mutation", es: "Un organismo con una mutación genética", de: "Ein Organismus mit einer genetischen Mutation", nl: "Een organisme met een genetische mutatie" },
        { en: "An organism that cannot reproduce", es: "Un organismo que no puede reproducirse", de: "Ein Organismus, der sich nicht fortpflanzen kann", nl: "Een organisme dat zich niet kan voortplanten" }
      ],
      correct: 1,
      explanation: {
        en: "A carrier is an organism that carries a recessive allele for a trait but doesn't express it because they also have a dominant allele.",
        es: "Un portador es un organismo que porta un alelo recesivo para un rasgo pero no lo expresa porque también tiene un alelo dominante.",
        de: "Ein Träger ist ein Organismus, der ein rezessives Allel für ein Merkmal trägt, es aber nicht exprimiert, weil er auch ein dominantes Allel hat.",
        nl: "Een drager is een organisme dat een recessief allel voor een eigenschap draagt maar het niet tot expressie brengt omdat ze ook een dominant allel hebben."
      }
    },
    {
      question: {
        en: "What is the human genome?",
        es: "¿Qué es el genoma humano?",
        de: "Was ist das menschliche Genom?",
        nl: "Wat is het menselijke genoom?"
      },
      options: [
        { en: "All proteins in human cells", es: "Todas las proteínas en células humanas", de: "Alle Proteine in menschlichen Zellen", nl: "Alle eiwitten in menselijke cellen" },
        { en: "Complete set of human DNA", es: "Conjunto completo de ADN humano", de: "Vollständiger Satz menschlicher DNA", nl: "Volledige set menselijk DNA" },
        { en: "Human chromosome structure", es: "Estructura cromosómica humana", de: "Menschliche Chromosomenstruktur", nl: "Menselijke chromosoomstructuur" },
        { en: "Human cell membrane", es: "Membrana celular humana", de: "Menschliche Zellmembran", nl: "Menselijk celmembraan" }
      ],
      correct: 1,
      explanation: {
        en: "The human genome is the complete set of DNA in humans, including all genes and non-coding sequences, totaling about 3 billion base pairs.",
        es: "El genoma humano es el conjunto completo de ADN en humanos, incluyendo todos los genes y secuencias no codificantes, totalizando cerca de 3 mil millones de pares de bases.",
        de: "Das menschliche Genom ist der vollständige Satz von DNA beim Menschen, einschließlich aller Gene und nicht-kodierenden Sequenzen, insgesamt etwa 3 Milliarden Basenpaare.",
        nl: "Het menselijke genoom is de volledige set DNA in mensen, inclusief alle genen en niet-coderende sequenties, in totaal ongeveer 3 miljard basenparen."
      }
    },
    {
      question: {
        en: "What is the difference between genotype and phenotype?",
        es: "¿Cuál es la diferencia entre genotipo y fenotipo?",
        de: "Was ist der Unterschied zwischen Genotyp und Phänotyp?",
        nl: "Wat is het verschil tussen genotype en fenotype?"
      },
      options: [
        { en: "Genotype is observable, phenotype is genetic makeup", es: "El genotipo es observable, el fenotipo es la composición genética", de: "Genotyp ist beobachtbar, Phänotyp ist die genetische Zusammensetzung", nl: "Genotype is waarneembaar, fenotype is genetische samenstelling" },
        { en: "Genotype is genetic makeup, phenotype is observable traits", es: "El genotipo es la composición genética, el fenotipo son rasgos observables", de: "Genotyp ist die genetische Zusammensetzung, Phänotyp sind beobachtbare Merkmale", nl: "Genotype is genetische samenstelling, fenotype is waarneembare eigenschappen" },
        { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" },
        { en: "Genotype affects proteins, phenotype affects DNA", es: "El genotipo afecta proteínas, el fenotipo afecta ADN", de: "Genotyp beeinflusst Proteine, Phänotyp beeinflusst DNA", nl: "Genotype beïnvloedt eiwitten, fenotype beïnvloedt DNA" }
      ],
      correct: 1,
      explanation: {
        en: "Genotype refers to an organism's genetic makeup (the genes it carries), while phenotype refers to the observable physical characteristics that result from genotype-environment interactions.",
        es: "El genotipo se refiere a la composición genética de un organismo (los genes que porta), mientras que el fenotipo se refiere a las características físicas observables que resultan de interacciones genotipo-ambiente.",
        de: "Genotyp bezieht sich auf die genetische Zusammensetzung eines Organismus (die Gene, die er trägt), während Phänotyp sich auf die beobachtbaren körperlichen Eigenschaften bezieht, die aus Genotyp-Umwelt-Interaktionen resultieren.",
        nl: "Genotype verwijst naar de genetische samenstelling van een organisme (de genen die het draagt), terwijl fenotype verwijst naar de waarneembare fysieke kenmerken die resulteren uit genotype-omgeving interacties."
      }
    },
    {
      question: {
        en: "What is polymerase chain reaction (PCR) used for?",
        es: "¿Para qué se usa la reacción en cadena de la polimerasa (PCR)?",
        de: "Wofür wird die Polymerase-Kettenreaktion (PCR) verwendet?",
        nl: "Waarvoor wordt polymerasekettingreactie (PCR) gebruikt?"
      },
      options: [
        { en: "Destroying DNA", es: "Destruir ADN", de: "DNA zerstören", nl: "DNA vernietigen" },
        { en: "Amplifying specific DNA sequences", es: "Amplificar secuencias específicas de ADN", de: "Spezifische DNA-Sequenzen amplifizieren", nl: "Specifieke DNA-sequenties amplificeren" },
        { en: "Creating proteins", es: "Crear proteínas", de: "Proteine erstellen", nl: "Eiwitten creëren" },
        { en: "Modifying chromosomes", es: "Modificar cromosomas", de: "Chromosomen modifizieren", nl: "Chromosomen modificeren" }
      ],
      correct: 1,
      explanation: {
        en: "PCR (Polymerase Chain Reaction) is a technique used to amplify specific DNA sequences, making millions of copies of a particular DNA segment for analysis.",
        es: "PCR (Reacción en Cadena de la Polimerasa) es una técnica usada para amplificar secuencias específicas de ADN, haciendo millones de copias de un segmento particular de ADN para análisis.",
        de: "PCR (Polymerase-Kettenreaktion) ist eine Technik zur Amplifikation spezifischer DNA-Sequenzen, die Millionen von Kopien eines bestimmten DNA-Segments für die Analyse erstellt.",
        nl: "PCR (Polymerasekettingreactie) is een techniek die wordt gebruikt om specifieke DNA-sequenties te amplificeren, waarbij miljoenen kopieën van een bepaald DNA-segment voor analyse worden gemaakt."
      }
    },
    {
      question: {
        en: "What is a pedigree in genetics?",
        es: "¿Qué es un pedigrí en genética?",
        de: "Was ist ein Stammbaum in der Genetik?",
        nl: "Wat is een stamboom in de genetica?"
      },
      options: [
        { en: "A type of genetic disorder", es: "Un tipo de trastorno genético", de: "Eine Art genetische Störung", nl: "Een type genetische aandoening" },
        { en: "A chart showing inheritance patterns in families", es: "Un gráfico que muestra patrones de herencia en familias", de: "Ein Diagramm, das Vererbungsmuster in Familien zeigt", nl: "Een diagram dat erfelijkheidspatronen in families toont" },
        { en: "A laboratory technique", es: "Una técnica de laboratorio", de: "Eine Labortechnik", nl: "Een laboratoriumtechniek" },
        { en: "A chromosome arrangement", es: "Una disposición cromosómica", de: "Eine Chromosomenanordnung", nl: "Een chromosoomrangschikking" }
      ],
      correct: 1,
      explanation: {
        en: "A pedigree is a chart or diagram that shows the inheritance pattern of a particular trait through multiple generations of a family.",
        es: "Un pedigrí es un gráfico o diagrama que muestra el patrón de herencia de un rasgo particular a través de múltiples generaciones de una familia.",
        de: "Ein Stammbaum ist ein Diagramm, das das Vererbungsmuster eines bestimmten Merkmals durch mehrere Generationen einer Familie zeigt.",
        nl: "Een stamboom is een diagram dat het erfelijkheidspatroon van een bepaalde eigenschap door meerdere generaties van een familie toont."
      }
    },
    {
      question: {
        en: "Which law states that alleles for different traits segregate independently during gamete formation?",
        es: "¿Qué ley establece que los alelos para diferentes rasgos se segregan independientemente durante la formación de gametos?",
        de: "Welches Gesetz besagt, dass Allele für verschiedene Merkmale während der Gametenbildung unabhängig segregieren?",
        nl: "Welke wet stelt dat allelen voor verschillende eigenschappen onafhankelijk segregeren tijdens gametenvorming?"
      },
      options: [
        { en: "Law of Segregation", es: "Ley de Segregación", de: "Gesetz der Segregation", nl: "Wet van Segregatie" },
        { en: "Law of Independent Assortment", es: "Ley de Distribución Independiente", de: "Gesetz der unabhängigen Verteilung", nl: "Wet van Onafhankelijke Verdeling" },
        { en: "Law of Dominance", es: "Ley de Dominancia", de: "Gesetz der Dominanz", nl: "Wet van Dominantie" },
        { en: "Law of Inheritance", es: "Ley de Herencia", de: "Gesetz der Vererbung", nl: "Wet van Erfelijkheid" }
      ],
      correct: 1,
      explanation: {
        en: "Mendel's Law of Independent Assortment states that alleles for different traits segregate independently during gamete formation, provided the genes are on different chromosomes.",
        es: "La Ley de Distribución Independiente de Mendel establece que los alelos para diferentes rasgos se segregan independientemente durante la formación de gametos, siempre que los genes estén en cromosomas diferentes.",
        de: "Mendels Gesetz der unabhängigen Verteilung besagt, dass Allele für verschiedene Merkmale während der Gametenbildung unabhängig segregieren, vorausgesetzt die Gene befinden sich auf verschiedenen Chromosomen.",
        nl: "Mendels Wet van Onafhankelijke Verdeling stelt dat allelen voor verschillende eigenschappen onafhankelijk segregeren tijdens gametenvorming, mits de genen op verschillende chromosomen liggen."
      }
    },
    {
      question: {
        en: "What is genetic drift?",
        es: "¿Qué es la deriva genética?",
        de: "Was ist genetische Drift?",
        nl: "Wat is genetische drift?"
      },
      options: [
        { en: "Random changes in allele frequencies in populations", es: "Cambios aleatorios en frecuencias alélicas en poblaciones", de: "Zufällige Änderungen der Allelfrequenzen in Populationen", nl: "Willekeurige veranderingen in allel frequenties in populaties" },
        { en: "Movement of genes between chromosomes", es: "Movimiento de genes entre cromosomas", de: "Bewegung von Genen zwischen Chromosomen", nl: "Beweging van genen tussen chromosomen" },
        { en: "Change in chromosome number", es: "Cambio en número cromosómico", de: "Änderung der Chromosomenzahl", nl: "Verandering in chromosoomaantal" },
        { en: "Migration of organisms", es: "Migración de organismos", de: "Migration von Organismen", nl: "Migratie van organismen" }
      ],
      correct: 0,
      explanation: {
        en: "Genetic drift refers to random changes in allele frequencies within populations over time, especially significant in small populations where chance events can have large effects.",
        es: "La deriva genética se refiere a cambios aleatorios en frecuencias alélicas dentro de poblaciones a lo largo del tiempo, especialmente significativa en poblaciones pequeñas donde eventos fortuitos pueden tener grandes efectos.",
        de: "Genetische Drift bezieht sich auf zufällige Änderungen der Allelfrequenzen innerhalb von Populationen über die Zeit, besonders bedeutsam in kleinen Populationen, wo Zufallsereignisse große Auswirkungen haben können.",
        nl: "Genetische drift verwijst naar willekeurige veranderingen in allel frequenties binnen populaties over tijd, vooral significant in kleine populaties waar toevallige gebeurtenissen grote effecten kunnen hebben."
      }
    },
    {
      question: {
        en: "What is the role of DNA polymerase?",
        es: "¿Cuál es el papel de la ADN polimerasa?",
        de: "Was ist die Rolle der DNA-Polymerase?",
        nl: "Wat is de rol van DNA-polymerase?"
      },
      options: [
        { en: "Breaking down DNA", es: "Descomponer ADN", de: "DNA abbauen", nl: "DNA afbreken" },
        { en: "Synthesizing new DNA strands", es: "Sintetizar nuevas cadenas de ADN", de: "Neue DNA-Stränge synthetisieren", nl: "Nieuwe DNA-strengen synthetiseren" },
        { en: "Packaging DNA into chromosomes", es: "Empaquetar ADN en cromosomas", de: "DNA in Chromosomen verpacken", nl: "DNA in chromosomen verpakken" },
        { en: "Transcribing DNA to RNA", es: "Transcribir ADN a ARN", de: "DNA zu RNA transkribieren", nl: "DNA naar RNA transcriberen" }
      ],
      correct: 1,
      explanation: {
        en: "DNA polymerase is an enzyme that synthesizes new DNA strands by adding nucleotides to a growing DNA chain during replication.",
        es: "La ADN polimerasa es una enzima que sintetiza nuevas cadenas de ADN añadiendo nucleótidos a una cadena de ADN en crecimiento durante la replicación.",
        de: "DNA-Polymerase ist ein Enzym, das neue DNA-Stränge synthetisiert, indem es Nukleotide zu einer wachsenden DNA-Kette während der Replikation hinzufügt.",
        nl: "DNA-polymerase is een enzym dat nieuwe DNA-strengen synthetiseert door nucleotiden toe te voegen aan een groeiende DNA-keten tijdens replicatie."
      }
    },
    {
      question: {
        en: "What is epigenetics?",
        es: "¿Qué es la epigenética?",
        de: "Was ist Epigenetik?",
        nl: "Wat is epigenetica?"
      },
      options: [
        { en: "Study of gene mutations", es: "Estudio de mutaciones génicas", de: "Studium von Genmutationen", nl: "Studie van genmutaties" },
        { en: "Changes in gene expression without DNA sequence changes", es: "Cambios en expresión génica sin cambios en secuencia de ADN", de: "Änderungen der Genexpression ohne DNA-Sequenzänderungen", nl: "Veranderingen in genexpressie zonder DNA-sequentieveranderingen" },
        { en: "Creation of new genes", es: "Creación de nuevos genes", de: "Erstellung neuer Gene", nl: "Creatie van nieuwe genen" },
        { en: "Gene therapy techniques", es: "Técnicas de terapia génica", de: "Gentherapie-Techniken", nl: "Gentherapie technieken" }
      ],
      correct: 1,
      explanation: {
        en: "Epigenetics involves changes in gene expression that don't alter the DNA sequence itself, often through DNA methylation or histone modifications.",
        es: "La epigenética involucra cambios en la expresión génica que no alteran la secuencia de ADN en sí, a menudo a través de metilación del ADN o modificaciones de histonas.",
        de: "Epigenetik umfasst Änderungen der Genexpression, die die DNA-Sequenz selbst nicht verändern, oft durch DNA-Methylierung oder Histonmodifikationen.",
        nl: "Epigenetica behelst veranderingen in genexpressie die de DNA-sequentie zelf niet veranderen, vaak door DNA-methylering of histonmodificaties."
      }
    },
    {
      question: {
        en: "What is a chromosome?",
        es: "¿Qué es un cromosoma?",
        de: "Was ist ein Chromosom?",
        nl: "Wat is een chromosoom?"
      },
      options: [
        { en: "A single gene", es: "Un solo gen", de: "Ein einzelnes Gen", nl: "Een enkel gen" },
        { en: "A structure containing DNA and proteins", es: "Una estructura que contiene ADN y proteínas", de: "Eine Struktur, die DNA und Proteine enthält", nl: "Een structuur die DNA en eiwitten bevat" },
        { en: "A type of cell", es: "Un tipo de célula", de: "Eine Art von Zelle", nl: "Een type cel" },
        { en: "An organelle", es: "Un orgánulo", de: "Ein Organell", nl: "Een organelle" }
      ],
      correct: 1,
      explanation: {
        en: "A chromosome is a thread-like structure composed of DNA and proteins (histones) that carries genetic information. Humans have 23 pairs of chromosomes.",
        es: "Un cromosoma es una estructura similar a un hilo compuesta de ADN y proteínas (histonas) que porta información genética. Los humanos tienen 23 pares de cromosomas.",
        de: "Ein Chromosom ist eine fadenähnliche Struktur aus DNA und Proteinen (Histonen), die genetische Informationen trägt. Menschen haben 23 Chromosomenpaare.",
        nl: "Een chromosoom is een draadachtige structuur samengesteld uit DNA en eiwitten (histonen) die genetische informatie draagt. Mensen hebben 23 paar chromosomen."
      }
    },
    {
      question: {
        en: "What is the difference between mitosis and meiosis?",
        es: "¿Cuál es la diferencia entre mitosis y meiosis?",
        de: "Was ist der Unterschied zwischen Mitose und Meiose?",
        nl: "Wat is het verschil tussen mitose en meiose?"
      },
      options: [
        { en: "Mitosis produces gametes, meiosis produces somatic cells", es: "La mitosis produce gametos, la meiosis produce células somáticas", de: "Mitose produziert Gameten, Meiose produziert somatische Zellen", nl: "Mitose produceert gameten, meiose produceert somatische cellen" },
        { en: "Mitosis produces somatic cells, meiosis produces gametes", es: "La mitosis produce células somáticas, la meiosis produce gametos", de: "Mitose produziert somatische Zellen, Meiose produziert Gameten", nl: "Mitose produceert somatische cellen, meiose produceert gameten" },
        { en: "They are the same process", es: "Son el mismo proceso", de: "Sie sind derselbe Prozess", nl: "Ze zijn hetzelfde proces" },
        { en: "Mitosis involves DNA, meiosis involves RNA", es: "La mitosis involucra ADN, la meiosis involucra ARN", de: "Mitose involviert DNA, Meiose involviert RNA", nl: "Mitose betreft DNA, meiose betreft RNA" }
      ],
      correct: 1,
      explanation: {
        en: "Mitosis produces two identical diploid somatic cells for growth and repair, while meiosis produces four genetically different haploid gametes for reproduction.",
        es: "La mitosis produce dos células somáticas diploides idénticas para crecimiento y reparación, mientras que la meiosis produce cuatro gametos haploides genéticamente diferentes para reproducción.",
        de: "Mitose produziert zwei identische diploide somatische Zellen für Wachstum und Reparatur, während Meiose vier genetisch verschiedene haploide Gameten für die Fortpflanzung produziert.",
        nl: "Mitose produceert twee identieke diploïde somatische cellen voor groei en herstel, terwijl meiose vier genetisch verschillende haploïde gameten produceert voor voortplanting."
      }
    },
    {
      question: {
        en: "What is gene therapy?",
        es: "¿Qué es la terapia génica?",
        de: "Was ist Gentherapie?",
        nl: "Wat is gentherapie?"
      },
      options: [
        { en: "Study of genes", es: "Estudio de genes", de: "Studium von Genen", nl: "Studie van genen" },
        { en: "Introduction of genes to treat disease", es: "Introducción de genes para tratar enfermedades", de: "Einführung von Genen zur Krankheitsbehandlung", nl: "Introductie van genen om ziekte te behandelen" },
        { en: "Removal of all genes", es: "Eliminación de todos los genes", de: "Entfernung aller Gene", nl: "Verwijdering van alle genen" },
        { en: "Natural gene expression", es: "Expresión génica natural", de: "Natürliche Genexpression", nl: "Natuurlijke genexpressie" }
      ],
      correct: 1,
      explanation: {
        en: "Gene therapy involves introducing genetic material into a patient's cells to treat or prevent disease, often by correcting defective genes.",
        es: "La terapia génica involucra introducir material genético en las células de un paciente para tratar o prevenir enfermedades, a menudo corrigiendo genes defectuosos.",
        de: "Gentherapie beinhaltet die Einführung von genetischem Material in die Zellen eines Patienten zur Behandlung oder Vorbeugung von Krankheiten, oft durch Korrektur defekter Gene.",
        nl: "Gentherapie behelst het introduceren van genetisch materiaal in de cellen van een patiënt om ziekte te behandelen of voorkomen, vaak door defecte genen te corrigeren."
      }
    },
    {
      question: {
        en: "What is a recessive trait?",
        es: "¿Qué es un rasgo recesivo?",
        de: "Was ist ein rezessives Merkmal?",
        nl: "Wat is een recessieve eigenschap?"
      },
      options: [
        { en: "A trait that is always expressed", es: "Un rasgo que siempre se expresa", de: "Ein Merkmal, das immer exprimiert wird", nl: "Een eigenschap die altijd tot expressie komt" },
        { en: "A trait expressed only when both alleles are recessive", es: "Un rasgo expresado solo cuando ambos alelos son recesivos", de: "Ein Merkmal, das nur exprimiert wird, wenn beide Allele rezessiv sind", nl: "Een eigenschap die alleen tot expressie komt wanneer beide allelen recessief zijn" },
        { en: "A trait that changes over time", es: "Un rasgo que cambia con el tiempo", de: "Ein Merkmal, das sich über die Zeit ändert", nl: "Een eigenschap die verandert over tijd" },
        { en: "A trait found only in males", es: "Un rasgo encontrado solo en machos", de: "Ein Merkmal, das nur bei Männchen vorkommt", nl: "Een eigenschap die alleen bij mannetjes voorkomt" }
      ],
      correct: 1,
      explanation: {
        en: "A recessive trait is expressed only when an organism has two copies of the recessive allele (homozygous recessive). It is masked by dominant alleles.",
        es: "Un rasgo recesivo se expresa solo cuando un organismo tiene dos copias del alelo recesivo (homocigoto recesivo). Es enmascarado por alelos dominantes.",
        de: "Ein rezessives Merkmal wird nur exprimiert, wenn ein Organismus zwei Kopien des rezessiven Allels hat (homozygot rezessiv). Es wird von dominanten Allelen maskiert.",
        nl: "Een recessieve eigenschap wordt alleen tot expressie gebracht wanneer een organisme twee kopieën van het recessieve allel heeft (homozygoot recessief). Het wordt gemaskeerd door dominante allelen."
      }
    },
    {
      question: {
        en: "What is the purpose of genetic counseling?",
        es: "¿Cuál es el propósito del asesoramiento genético?",
        de: "Was ist der Zweck der genetischen Beratung?",
        nl: "Wat is het doel van genetische counseling?"
      },
      options: [
        { en: "To modify genes directly", es: "Para modificar genes directamente", de: "Gene direkt zu modifizieren", nl: "Om genen direct te modificeren" },
        { en: "To provide information about genetic risks and inheritance", es: "Para proporcionar información sobre riesgos genéticos y herencia", de: "Informationen über genetische Risiken und Vererbung zu geben", nl: "Om informatie te verstrekken over genetische risico's en erfelijkheid" },
        { en: "To cure genetic diseases", es: "Para curar enfermedades genéticas", de: "Genetische Krankheiten zu heilen", nl: "Om genetische ziekten te genezen" },
        { en: "To create new genes", es: "Para crear nuevos genes", de: "Neue Gene zu erstellen", nl: "Om nieuwe genen te creëren" }
      ],
      correct: 1,
      explanation: {
        en: "Genetic counseling provides individuals and families with information about genetic conditions, inheritance patterns, and risks to help them make informed decisions.",
        es: "El asesoramiento genético proporciona a individuos y familias información sobre condiciones genéticas, patrones de herencia y riesgos para ayudarles a tomar decisiones informadas.",
        de: "Genetische Beratung versorgt Einzelpersonen und Familien mit Informationen über genetische Bedingungen, Vererbungsmuster und Risiken, um ihnen zu helfen, informierte Entscheidungen zu treffen.",
        nl: "Genetische counseling verschaft individuen en families informatie over genetische aandoeningen, erfelijkheidspatronen en risico's om hen te helpen geïnformeerde beslissingen te nemen."
      }
    },
    {
      question: {
        en: "What is a genetic marker?",
        es: "¿Qué es un marcador genético?",
        de: "Was ist ein genetischer Marker?",
        nl: "Wat is een genetische marker?"
      },
      options: [
        { en: "A disease-causing gene", es: "Un gen causante de enfermedad", de: "Ein krankheitsverursachendes Gen", nl: "Een ziekteveroorzakend gen" },
        { en: "A DNA sequence with known location used to identify genes", es: "Una secuencia de ADN con ubicación conocida usada para identificar genes", de: "Eine DNA-Sequenz mit bekannter Lage zur Genidentifikation", nl: "Een DNA-sequentie met bekende locatie gebruikt om genen te identificeren" },
        { en: "A protein that regulates genes", es: "Una proteína que regula genes", de: "Ein Protein, das Gene reguliert", nl: "Een eiwit dat genen reguleert" },
        { en: "A type of chromosome", es: "Un tipo de cromosoma", de: "Eine Art von Chromosom", nl: "Een type chromosoom" }
      ],
      correct: 1,
      explanation: {
        en: "A genetic marker is a DNA sequence with a known physical location on a chromosome, used to identify individuals, populations, or genes of interest.",
        es: "Un marcador genético es una secuencia de ADN con una ubicación física conocida en un cromosoma, usada para identificar individuos, poblaciones o genes de interés.",
        de: "Ein genetischer Marker ist eine DNA-Sequenz mit einer bekannten physischen Lage auf einem Chromosom, die zur Identifikation von Individuen, Populationen oder interessanten Genen verwendet wird.",
        nl: "Een genetische marker is een DNA-sequentie met een bekende fysieke locatie op een chromosoom, gebruikt om individuen, populaties of genen van belang te identificeren."
      }
    },
    {
      question: {
        en: "What is the role of RNA in genetics?",
        es: "¿Cuál es el papel del ARN en la genética?",
        de: "Was ist die Rolle von RNA in der Genetik?",
        nl: "Wat is de rol van RNA in de genetica?"
      },
      options: [
        { en: "Storage of genetic information", es: "Almacenamiento de información genética", de: "Speicherung genetischer Informationen", nl: "Opslag van genetische informatie" },
        { en: "Protein synthesis and gene regulation", es: "Síntesis de proteínas y regulación génica", de: "Proteinsynthese und Genregulation", nl: "Eiwitsynthese en genregulatie" },
        { en: "Cell division", es: "División celular", de: "Zellteilung", nl: "Celdeling" },
        { en: "Energy production", es: "Producción de energía", de: "Energieproduktion", nl: "Energieproductie" }
      ],
      correct: 1,
      explanation: {
        en: "RNA plays crucial roles in protein synthesis (mRNA, tRNA, rRNA), gene regulation (miRNA, siRNA), and catalysis (ribozymes), serving as intermediary between DNA and proteins.",
        es: "El ARN juega papeles cruciales en la síntesis de proteínas (ARNm, ARNt, ARNr), regulación génica (miARN, siARN), y catálisis (ribozimas), sirviendo como intermediario entre ADN y proteínas.",
        de: "RNA spielt entscheidende Rollen in der Proteinsynthese (mRNA, tRNA, rRNA), Genregulation (miRNA, siRNA) und Katalyse (Ribozyme) und dient als Vermittler zwischen DNA und Proteinen.",
        nl: "RNA speelt cruciale rollen in eiwitsynthese (mRNA, tRNA, rRNA), genregulatie (miRNA, siRNA), en katalyse (ribozymen), dienend als tussenpersoon tussen DNA en eiwitten."
      }
    },
    {
      question: {
        en: "What is inbreeding depression?",
        es: "¿Qué es la depresión por consanguinidad?",
        de: "Was ist Inzuchtdepression?",
        nl: "Wat is inteeltdepressie?"
      },
      options: [
        { en: "Increased fitness in closely related individuals", es: "Mayor aptitud en individuos estrechamente relacionados", de: "Erhöhte Fitness bei eng verwandten Individuen", nl: "Verhoogde fitness bij nauw verwante individuen" },
        { en: "Reduced fitness due to mating between closely related individuals", es: "Aptitud reducida debido a apareamiento entre individuos estrechamente relacionados", de: "Reduzierte Fitness durch Paarung zwischen eng verwandten Individuen", nl: "Verminderde fitness door paring tussen nauw verwante individuen" },
        { en: "Genetic diversity increase", es: "Aumento de diversidad genética", de: "Erhöhung der genetischen Vielfalt", nl: "Toename van genetische diversiteit" },
        { en: "Natural selection process", es: "Proceso de selección natural", de: "Natürlicher Selektionsprozess", nl: "Natuurlijk selectieproces" }
      ],
      correct: 1,
      explanation: {
        en: "Inbreeding depression is the reduced biological fitness that results from mating between closely related individuals, often due to increased expression of harmful recessive alleles.",
        es: "La depresión por consanguinidad es la aptitud biológica reducida que resulta del apareamiento entre individuos estrechamente relacionados, a menudo debido a mayor expresión de alelos recesivos dañinos.",
        de: "Inzuchtdepression ist die reduzierte biologische Fitness, die aus der Paarung zwischen eng verwandten Individuen resultiert, oft aufgrund erhöhter Expression schädlicher rezessiver Allele.",
        nl: "Inteeltdepressie is de verminderde biologische fitness die resulteert uit paring tussen nauw verwante individuen, vaak door verhoogde expressie van schadelijke recessieve allelen."
      }
    },
    {
      question: {
        en: "What is population genetics?",
        es: "¿Qué es la genética de poblaciones?",
        de: "Was ist Populationsgenetik?",
        nl: "Wat is populatiegenetica?"
      },
      options: [
        { en: "Study of individual gene expression", es: "Estudio de expresión génica individual", de: "Studium individueller Genexpression", nl: "Studie van individuele genexpressie" },
        { en: "Study of allele frequencies and genetic variation in populations", es: "Estudio de frecuencias alélicas y variación genética en poblaciones", de: "Studium von Allelfrequenzen und genetischer Variation in Populationen", nl: "Studie van allel frequenties en genetische variatie in populaties" },
        { en: "Study of chromosome structure", es: "Estudio de estructura cromosómica", de: "Studium der Chromosomenstruktur", nl: "Studie van chromosoomstructuur" },
        { en: "Study of protein synthesis", es: "Estudio de síntesis proteica", de: "Studium der Proteinsynthese", nl: "Studie van eiwitsynthese" }
      ],
      correct: 1,
      explanation: {
        en: "Population genetics studies allele frequencies, genetic variation, and evolutionary changes within and between populations, including factors like gene flow, selection, and drift.",
        es: "La genética de poblaciones estudia frecuencias alélicas, variación genética y cambios evolutivos dentro y entre poblaciones, incluyendo factores como flujo génico, selección y deriva.",
        de: "Populationsgenetik studiert Allelfrequenzen, genetische Variation und evolutionäre Veränderungen innerhalb und zwischen Populationen, einschließlich Faktoren wie Genfluss, Selektion und Drift.",
        nl: "Populatiegenetica bestudeert allel frequenties, genetische variatie en evolutionaire veranderingen binnen en tussen populaties, inclusief factoren zoals genenstroom, selectie en drift."
      }
    },
    {
      question: {
        en: "What is Hardy-Weinberg equilibrium?",
        es: "¿Qué es el equilibrio de Hardy-Weinberg?",
        de: "Was ist das Hardy-Weinberg-Gleichgewicht?",
        nl: "Wat is het Hardy-Weinberg evenwicht?"
      },
      options: [
        { en: "Principle describing stable allele frequencies in populations", es: "Principio que describe frecuencias alélicas estables en poblaciones", de: "Prinzip, das stabile Allelfrequenzen in Populationen beschreibt", nl: "Principe dat stabiele allel frequenties in populaties beschrijft" },
        { en: "Method for gene sequencing", es: "Método para secuenciación génica", de: "Methode zur Gensequenzierung", nl: "Methode voor gensequencing" },
        { en: "Type of genetic mutation", es: "Tipo de mutación genética", de: "Art genetischer Mutation", nl: "Type genetische mutatie" },
        { en: "Chromosome pairing mechanism", es: "Mecanismo de emparejamiento cromosómico", de: "Chromosomenpaarungsmechanismus", nl: "Chromosoom paring mechanisme" }
      ],
      correct: 0,
      explanation: {
        en: "Hardy-Weinberg equilibrium describes a theoretical state where allele frequencies remain constant across generations in the absence of evolutionary forces like selection, mutation, or migration.",
        es: "El equilibrio de Hardy-Weinberg describe un estado teórico donde las frecuencias alélicas permanecen constantes a través de generaciones en ausencia de fuerzas evolutivas como selección, mutación o migración.",
        de: "Das Hardy-Weinberg-Gleichgewicht beschreibt einen theoretischen Zustand, in dem Allelfrequenzen über Generationen konstant bleiben, bei Abwesenheit evolutionärer Kräfte wie Selektion, Mutation oder Migration.",
        nl: "Het Hardy-Weinberg evenwicht beschrijft een theoretische toestand waarbij allel frequenties constant blijven over generaties bij afwezigheid van evolutionaire krachten zoals selectie, mutatie of migratie."
      }
    },
    {
      question: {
        en: "What is genetic linkage analysis used for?",
        es: "¿Para qué se usa el análisis de ligamiento genético?",
        de: "Wofür wird die genetische Kopplungsanalyse verwendet?",
        nl: "Waarvoor wordt genetische koppelingsanalyse gebruikt?"
      },
      options: [
        { en: "Creating new genes", es: "Crear nuevos genes", de: "Neue Gene erstellen", nl: "Nieuwe genen creëren" },
        { en: "Mapping gene locations and studying inheritance patterns", es: "Mapear ubicaciones génicas y estudiar patrones de herencia", de: "Genpositionen kartieren und Vererbungsmuster studieren", nl: "Genlocaties in kaart brengen en erfelijkheidspatronen bestuderen" },
        { en: "Destroying harmful genes", es: "Destruir genes dañinos", de: "Schädliche Gene zerstören", nl: "Schadelijke genen vernietigen" },
        { en: "Producing proteins", es: "Producir proteínas", de: "Proteine produzieren", nl: "Eiwitten produceren" }
      ],
      correct: 1,
      explanation: {
        en: "Genetic linkage analysis is used to map the locations of genes on chromosomes and study how traits are inherited together when genes are located close to each other.",
        es: "El análisis de ligamiento genético se usa para mapear las ubicaciones de genes en cromosomas y estudiar cómo los rasgos se heredan juntos cuando los genes están ubicados cerca uno del otro.",
        de: "Genetische Kopplungsanalyse wird verwendet, um die Positionen von Genen auf Chromosomen zu kartieren und zu studieren, wie Merkmale zusammen vererbt werden, wenn Gene nahe beieinander liegen.",
        nl: "Genetische koppelingsanalyse wordt gebruikt om de locaties van genen op chromosomen in kaart te brengen en te bestuderen hoe eigenschappen samen geërfd worden wanneer genen dicht bij elkaar liggen."
      }
    },
    {
      question: {
        en: "What is gene expression?",
        es: "¿Qué es la expresión génica?",
        de: "Was ist Genexpression?",
        nl: "Wat is genexpressie?"
      },
      options: [
        { en: "The process by which genetic information is used to synthesize proteins", es: "El proceso por el cual la información genética se usa para sintetizar proteínas", de: "Der Prozess, durch den genetische Informationen zur Proteinsynthese verwendet werden", nl: "Het proces waarbij genetische informatie wordt gebruikt om eiwitten te synthetiseren" },
        { en: "The movement of genes between cells", es: "El movimiento de genes entre células", de: "Die Bewegung von Genen zwischen Zellen", nl: "De beweging van genen tussen cellen" },
        { en: "The creation of new genes", es: "La creación de nuevos genes", de: "Die Erstellung neuer Gene", nl: "De creatie van nieuwe genen" },
        { en: "The destruction of old genes", es: "La destrucción de genes viejos", de: "Die Zerstörung alter Gene", nl: "De vernietiging van oude genen" }
      ],
      correct: 0,
      explanation: {
        en: "Gene expression is the process by which information from a gene is used to synthesize functional products, usually proteins, through transcription and translation.",
        es: "La expresión génica es el proceso por el cual la información de un gen se usa para sintetizar productos funcionales, usualmente proteínas, a través de transcripción y traducción.",
        de: "Genexpression ist der Prozess, durch den Informationen aus einem Gen zur Synthese funktionaler Produkte, meist Proteine, durch Transkription und Translation verwendet werden.",
        nl: "Genexpressie is het proces waarbij informatie van een gen wordt gebruikt om functionele producten, meestal eiwitten, te synthetiseren via transcriptie en translatie."
      }
    },
    {
      question: {
        en: "What is a genetic bottleneck?",
        es: "¿Qué es un cuello de botella genético?",
        de: "Was ist ein genetischer Flaschenhals?",
        nl: "Wat is een genetische knelpunt?"
      },
      options: [
        { en: "Increase in population size", es: "Aumento en tamaño poblacional", de: "Zunahme der Populationsgröße", nl: "Toename in populatiegrootte" },
        { en: "Sharp reduction in population size leading to reduced genetic diversity", es: "Reducción aguda en tamaño poblacional llevando a diversidad genética reducida", de: "Scharfe Reduktion der Populationsgröße führt zu reduzierter genetischer Vielfalt", nl: "Scherpe reductie in populatiegrootte leidend tot verminderde genetische diversiteit" },
        { en: "Gene flow between populations", es: "Flujo génico entre poblaciones", de: "Genfluss zwischen Populationen", nl: "Genenstroom tussen populaties" },
        { en: "Optimal population growth", es: "Crecimiento poblacional óptimo", de: "Optimales Populationswachstum", nl: "Optimale populatiegroei" }
      ],
      correct: 1,
      explanation: {
        en: "A genetic bottleneck occurs when a population's size is significantly reduced, leading to decreased genetic diversity and increased genetic drift effects.",
        es: "Un cuello de botella genético ocurre cuando el tamaño de una población se reduce significativamente, llevando a diversidad genética disminuida y efectos aumentados de deriva genética.",
        de: "Ein genetischer Flaschenhals tritt auf, wenn die Populationsgröße signifikant reduziert wird, was zu verringerter genetischer Vielfalt und verstärkten genetischen Drifteffekten führt.",
        nl: "Een genetische knelpunt treedt op wanneer de grootte van een populatie significant wordt gereduceerd, leidend tot verminderde genetische diversiteit en verhoogde genetische drift effecten."
      }
    },
    {
      question: {
        en: "What is the significance of the Human Genome Project?",
        es: "¿Cuál es la importancia del Proyecto Genoma Humano?",
        de: "Was ist die Bedeutung des Human-Genom-Projekts?",
        nl: "Wat is de betekenis van het Menselijk Genoom Project?"
      },
      options: [
        { en: "First successful gene therapy", es: "Primera terapia génica exitosa", de: "Erste erfolgreiche Gentherapie", nl: "Eerste succesvolle gentherapie" },
        { en: "Complete sequencing of human DNA", es: "Secuenciación completa del ADN humano", de: "Vollständige Sequenzierung menschlicher DNA", nl: "Volledige sequencing van menselijk DNA" },
        { en: "Discovery of genes", es: "Descubrimiento de genes", de: "Entdeckung von Genen", nl: "Ontdekking van genen" },
        { en: "Creation of artificial chromosomes", es: "Creación de cromosomas artificiales", de: "Erstellung künstlicher Chromosomen", nl: "Creatie van kunstmatige chromosomen" }
      ],
      correct: 1,
      explanation: {
        en: "The Human Genome Project successfully mapped and sequenced the entire human genome, providing a complete reference for human DNA and revolutionizing genetics research.",
        es: "El Proyecto Genoma Humano mapeó y secuenció exitosamente todo el genoma humano, proporcionando una referencia completa para el ADN humano y revolucionando la investigación genética.",
        de: "Das Human-Genom-Projekt kartierte und sequenzierte erfolgreich das gesamte menschliche Genom, stellte eine vollständige Referenz für menschliche DNA bereit und revolutionierte die Genetikforschung.",
        nl: "Het Menselijk Genoom Project bracht succesvol het gehele menselijke genoom in kaart en sequenceerde het, wat een volledige referentie voor menselijk DNA verschafte en genetisch onderzoek revolutioneerde."
      }
    },
    {
      question: {
        en: "What is a transgenic organism?",
        es: "¿Qué es un organismo transgénico?",
        de: "Was ist ein transgener Organismus?",
        nl: "Wat is een transgeen organisme?"
      },
      options: [
        { en: "An organism with genes from another species", es: "Un organismo con genes de otra especie", de: "Ein Organismus mit Genen einer anderen Art", nl: "Een organisme met genen van een andere soort" },
        { en: "An organism with no mutations", es: "Un organismo sin mutaciones", de: "Ein Organismus ohne Mutationen", nl: "Een organisme zonder mutaties" },
        { en: "An organism with extra chromosomes", es: "Un organismo con cromosomas extra", de: "Ein Organismus mit zusätzlichen Chromosomen", nl: "Een organisme met extra chromosomen" },
        { en: "An organism without DNA", es: "Un organismo sin ADN", de: "Ein Organismus ohne DNA", nl: "Een organisme zonder DNA" }
      ],
      correct: 0,
      explanation: {
        en: "A transgenic organism contains genetic material from another species that has been artificially introduced, often used in research and biotechnology applications.",
        es: "Un organismo transgénico contiene material genético de otra especie que ha sido introducido artificialmente, a menudo usado en investigación y aplicaciones biotecnológicas.",
        de: "Ein transgener Organismus enthält genetisches Material einer anderen Art, das künstlich eingeführt wurde, oft in Forschung und Biotechnologie-Anwendungen verwendet.",
        nl: "Een transgeen organisme bevat genetisch materiaal van een andere soort dat kunstmatig is geïntroduceerd, vaak gebruikt in onderzoek en biotechnologie toepassingen."
      }
    },
    {
      question: {
        en: "What is genetic drift?",
        es: "¿Qué es la deriva genética?",
        de: "Was ist genetische Drift?",
        nl: "Wat is genetische drift?"
      },
      options: [
        { en: "Random changes in gene frequencies in small populations", es: "Cambios aleatorios en frecuencias génicas en poblaciones pequeñas", de: "Zufällige Änderungen der Genfrequenzen in kleinen Populationen", nl: "Willekeurige veranderingen in genfrequenties in kleine populaties" },
        { en: "Directed evolution toward better traits", es: "Evolución dirigida hacia mejores rasgos", de: "Gerichtete Evolution zu besseren Merkmalen", nl: "Gerichte evolutie naar betere eigenschappen" },
        { en: "Gene flow between populations", es: "Flujo génico entre poblaciones", de: "Genfluss zwischen Populationen", nl: "Genenstroom tussen populaties" },
        { en: "Controlled breeding programs", es: "Programas de reproducción controlada", de: "Kontrollierte Zuchtprogramme", nl: "Gecontroleerde fokprogramma's" }
      ],
      correct: 0,
      explanation: {
        en: "Genetic drift refers to random fluctuations in allele frequencies that occur in finite populations, having stronger effects in smaller populations.",
        es: "La deriva genética se refiere a fluctuaciones aleatorias en las frecuencias alélicas que ocurren en poblaciones finitas, teniendo efectos más fuertes en poblaciones más pequeñas.",
        de: "Genetische Drift bezieht sich auf zufällige Schwankungen der Allelfrequenzen, die in endlichen Populationen auftreten und stärkere Effekte in kleineren Populationen haben.",
        nl: "Genetische drift verwijst naar willekeurige fluctuaties in allel frequenties die optreden in eindige populaties, met sterkere effecten in kleinere populaties."
      }
    },
    {
      question: {
        en: "What is the role of telomeres?",
        es: "¿Cuál es el papel de los telómeros?",
        de: "Was ist die Rolle der Telomere?",
        nl: "Wat is de rol van telomeren?"
      },
      options: [
        { en: "Protect chromosome ends and regulate cell division", es: "Proteger los extremos cromosómicos y regular la división celular", de: "Schützen Chromosomenenden und regulieren Zellteilung", nl: "Beschermen chromosoomuiteinden en reguleren celdeling" },
        { en: "Code for proteins", es: "Codificar proteínas", de: "Kodieren für Proteine", nl: "Coderen voor eiwitten" },
        { en: "Join different chromosomes", es: "Unir cromosomas diferentes", de: "Verschiedene Chromosomen verbinden", nl: "Verschillende chromosomen verbinden" },
        { en: "Store energy for the cell", es: "Almacenar energía para la célula", de: "Energie für die Zelle speichern", nl: "Energie opslaan voor de cel" }
      ],
      correct: 0,
      explanation: {
        en: "Telomeres are protective DNA-protein structures at chromosome ends that shorten with each cell division and are associated with cellular aging and lifespan.",
        es: "Los telómeros son estructuras protectoras de ADN-proteína en los extremos cromosómicos que se acortan con cada división celular y están asociados con el envejecimiento celular y la esperanza de vida.",
        de: "Telomere sind schützende DNA-Protein-Strukturen an Chromosomenenden, die sich mit jeder Zellteilung verkürzen und mit zellulärer Alterung und Lebensspanne assoziiert sind.",
        nl: "Telomeren zijn beschermende DNA-eiwit structuren aan chromosoomuiteinden die verkorten met elke celdeling en geassocieerd zijn met cellulaire veroudering en levensduur."
      }
    },
    {
      question: {
        en: "What is CRISPR-Cas9?",
        es: "¿Qué es CRISPR-Cas9?",
        de: "Was ist CRISPR-Cas9?",
        nl: "Wat is CRISPR-Cas9?"
      },
      options: [
        { en: "A gene editing tool that can cut and modify DNA sequences", es: "Una herramienta de edición genética que puede cortar y modificar secuencias de ADN", de: "Ein Gen-Editing-Werkzeug, das DNA-Sequenzen schneiden und modifizieren kann", nl: "Een gen-editingtool die DNA-sequenties kan knippen en modificeren" },
        { en: "A type of chromosome", es: "Un tipo de cromosoma", de: "Eine Art Chromosom", nl: "Een type chromosoom" },
        { en: "A genetic disease", es: "Una enfermedad genética", de: "Eine genetische Krankheit", nl: "Een genetische ziekte" },
        { en: "A sequencing technology", es: "Una tecnología de secuenciación", de: "Eine Sequenzierungstechnologie", nl: "Een sequentietechnologie" }
      ],
      correct: 0,
      explanation: {
        en: "CRISPR-Cas9 is a revolutionary gene editing system that allows precise cutting and modification of DNA sequences, enabling targeted genetic engineering.",
        es: "CRISPR-Cas9 es un sistema revolucionario de edición genética que permite el corte preciso y modificación de secuencias de ADN, habilitando la ingeniería genética dirigida.",
        de: "CRISPR-Cas9 ist ein revolutionäres Gen-Editing-System, das präzises Schneiden und Modifizieren von DNA-Sequenzen ermöglicht und gezielte genetische Manipulation erlaubt.",
        nl: "CRISPR-Cas9 is een revolutionair gen-editingsysteem dat precieze knippen en modificatie van DNA-sequenties mogelijk maakt, waardoor gerichte genetische manipulatie mogelijk wordt."
      }
    },
    {
      question: {
        en: "What is pharmacogenomics?",
        es: "¿Qué es la farmacogenómica?",
        de: "Was ist Pharmakogenomik?",
        nl: "Wat is farmacogenomica?"
      },
      options: [
        { en: "Study of how genes affect drug responses", es: "Estudio de cómo los genes afectan las respuestas a medicamentos", de: "Studium, wie Gene Arzneimittelreaktionen beeinflussen", nl: "Studie van hoe genen geneesmiddelreacties beïnvloeden" },
        { en: "Development of new drugs", es: "Desarrollo de nuevos medicamentos", de: "Entwicklung neuer Medikamente", nl: "Ontwikkeling van nieuwe geneesmiddelen" },
        { en: "Study of drug manufacturing", es: "Estudio de fabricación de medicamentos", de: "Studium der Arzneimittelherstellung", nl: "Studie van geneesmiddelproductie" },
        { en: "Analysis of drug side effects", es: "Análisis de efectos secundarios de medicamentos", de: "Analyse von Arzneimittelnebenwirkungen", nl: "Analyse van bijwerkingen van geneesmiddelen" }
      ],
      correct: 0,
      explanation: {
        en: "Pharmacogenomics studies how individual genetic variations affect responses to medications, enabling personalized medicine approaches for optimal drug selection and dosing.",
        es: "La farmacogenómica estudia cómo las variaciones genéticas individuales afectan las respuestas a medicamentos, habilitando enfoques de medicina personalizada para selección y dosificación óptima de medicamentos.",
        de: "Pharmakogenomik untersucht, wie individuelle genetische Variationen die Reaktionen auf Medikamente beeinflussen und ermöglicht personalisierte Medizinansätze für optimale Arzneimittelauswahl und -dosierung.",
        nl: "Farmacogenomica bestudeert hoe individuele genetische variaties reacties op medicijnen beïnvloeden, wat gepersonaliseerde geneeskunde benaderingen mogelijk maakt voor optimale medicijnselectie en dosering."
      }
    },
    {
      question: {
        en: "What is genome-wide association study (GWAS)?",
        es: "¿Qué es un estudio de asociación de genoma completo (GWAS)?",
        de: "Was ist eine genomweite Assoziationsstudie (GWAS)?",
        nl: "Wat is een genoom-brede associatiestudie (GWAS)?"
      },
      options: [
        { en: "A method to identify genetic variants associated with diseases or traits", es: "Un método para identificar variantes genéticas asociadas con enfermedades o rasgos", de: "Eine Methode zur Identifikation genetischer Varianten, die mit Krankheiten oder Merkmalen assoziiert sind", nl: "Een methode om genetische varianten te identificeren die geassocieerd zijn met ziekten of eigenschappen" },
        { en: "A technique for gene therapy", es: "Una técnica para terapia génica", de: "Eine Technik für Gentherapie", nl: "Een techniek voor gentherapie" },
        { en: "A chromosome mapping method", es: "Un método de mapeo cromosómico", de: "Eine Chromosomenkartierungsmethode", nl: "Een chromosoomkaarttechniek" },
        { en: "A protein analysis tool", es: "Una herramienta de análisis de proteínas", de: "Ein Protein-Analysewerkzeug", nl: "Een eiwit-analysetool" }
      ],
      correct: 0,
      explanation: {
        en: "GWAS examines genetic variants across the entire genome to identify those associated with specific diseases or traits, helping understand genetic contributions to complex conditions.",
        es: "GWAS examina variantes genéticas a través de todo el genoma para identificar aquellas asociadas con enfermedades o rasgos específicos, ayudando a entender las contribuciones genéticas a condiciones complejas.",
        de: "GWAS untersucht genetische Varianten über das gesamte Genom hinweg, um diejenigen zu identifizieren, die mit spezifischen Krankheiten oder Merkmalen assoziiert sind, und hilft beim Verständnis genetischer Beiträge zu komplexen Zuständen.",
        nl: "GWAS onderzoekt genetische varianten over het hele genoom om die te identificeren die geassocieerd zijn met specifieke ziekten of eigenschappen, wat helpt bij het begrijpen van genetische bijdragen aan complexe aandoeningen."
      }
    },
    {
      question: {
        en: "What is genomic imprinting?",
        es: "¿Qué es la impronta genómica?",
        de: "Was ist genomische Prägung?",
        nl: "Wat is genomische imprinting?"
      },
      options: [
        { en: "Parent-specific gene expression patterns", es: "Patrones de expresión génica específicos del progenitor", de: "Elternspezifische Genexpressionsmuster", nl: "Ouder-specifieke genexpressiepatronen" },
        { en: "Random gene activation", es: "Activación génica aleatoria", de: "Zufällige Genaktivierung", nl: "Willekeurige genactivatie" },
        { en: "Gene duplication process", es: "Proceso de duplicación génica", de: "Genvervielfältigungsprozess", nl: "Gen duplicatieproces" },
        { en: "DNA repair mechanism", es: "Mecanismo de reparación de ADN", de: "DNA-Reparaturmechanismus", nl: "DNA-reparatiemechanisme" }
      ],
      correct: 0,
      explanation: {
        en: "Genomic imprinting is an epigenetic phenomenon where gene expression depends on which parent the gene was inherited from, affecting development and disease susceptibility.",
        es: "La impronta genómica es un fenómeno epigenético donde la expresión génica depende de qué progenitor se heredó el gen, afectando el desarrollo y la susceptibilidad a enfermedades.",
        de: "Genomische Prägung ist ein epigenetisches Phänomen, bei dem die Genexpression davon abhängt, von welchem Elternteil das Gen vererbt wurde, was Entwicklung und Krankheitsanfälligkeit beeinflusst.",
        nl: "Genomische imprinting is een epigenetisch fenomeen waarbij genexpressie afhangt van van welke ouder het gen geërfd werd, wat ontwikkeling en ziektegevoeligheid beïnvloedt."
      }
    },
    {
      question: {
        en: "What is a genetic mosaic?",
        es: "¿Qué es un mosaico genético?",
        de: "Was ist ein genetisches Mosaik?",
        nl: "Wat is een genetisch mozaïek?"
      },
      options: [
        { en: "An organism with cells containing different genetic compositions", es: "Un organismo con células que contienen composiciones genéticas diferentes", de: "Ein Organismus mit Zellen, die verschiedene genetische Zusammensetzungen enthalten", nl: "Een organisme met cellen die verschillende genetische samenstellingen bevatten" },
        { en: "A colorful chromosome arrangement", es: "Un arreglo cromosómico colorido", de: "Eine bunte Chromosomenanordnung", nl: "Een kleurrijke chromosoomrangschikking" },
        { en: "A type of gene therapy", es: "Un tipo de terapia génica", de: "Eine Art Gentherapie", nl: "Een type gentherapie" },
        { en: "A DNA sequencing pattern", es: "Un patrón de secuenciación de ADN", de: "Ein DNA-Sequenzierungsmuster", nl: "Een DNA-sequentiepatroon" }
      ],
      correct: 0,
      explanation: {
        en: "Genetic mosaicism occurs when an individual has two or more genetically distinct cell populations, often resulting from mutations during development.",
        es: "El mosaicismo genético ocurre cuando un individuo tiene dos o más poblaciones celulares genéticamente distintas, a menudo resultando de mutaciones durante el desarrollo.",
        de: "Genetisches Mosaik tritt auf, wenn ein Individuum zwei oder mehr genetisch verschiedene Zellpopulationen hat, oft als Folge von Mutationen während der Entwicklung.",
        nl: "Genetisch mozaïcisme treedt op wanneer een individu twee of meer genetisch verschillende celpopulaties heeft, vaak als gevolg van mutaties tijdens de ontwikkeling."
      }
    },
    {
      question: {
        en: "What is a SNP (Single Nucleotide Polymorphism)?",
        es: "¿Qué es un SNP (Polimorfismo de Nucleótido Simple)?",
        de: "Was ist ein SNP (Einzelnukleotid-Polymorphismus)?",
        nl: "Wat is een SNP (Enkelvoudige Nucleotide Polymorfisme)?"
      },
      options: [
        { en: "A DNA sequence variation at a single nucleotide position", es: "Una variación de secuencia de ADN en una posición de nucleótido simple", de: "Eine DNA-Sequenzvariation an einer einzelnen Nukleotidposition", nl: "Een DNA-sequentievariatie op een enkele nucleotidepositie" },
        { en: "A type of chromosome", es: "Un tipo de cromosoma", de: "Eine Art Chromosom", nl: "Een type chromosoom" },
        { en: "A genetic disease", es: "Una enfermedad genética", de: "Eine genetische Krankheit", nl: "Een genetische ziekte" },
        { en: "A laboratory technique", es: "Una técnica de laboratorio", de: "Eine Labortechnik", nl: "Een laboratoriumtechniek" }
      ],
      correct: 0,
      explanation: {
        en: "SNPs are the most common type of genetic variation, occurring when a single nucleotide differs between individuals at the same genomic position.",
        es: "Los SNP son el tipo más común de variación genética, ocurriendo cuando un solo nucleótido difiere entre individuos en la misma posición genómica.",
        de: "SNPs sind die häufigste Art genetischer Variation und treten auf, wenn sich ein einzelnes Nukleotid zwischen Individuen an derselben genomischen Position unterscheidet.",
        nl: "SNPs zijn de meest voorkomende vorm van genetische variatie, die optreedt wanneer een enkel nucleotide verschilt tussen individuen op dezelfde genomische positie."
      }
    },
    {
      question: {
        en: "What is the significance of mitochondrial DNA inheritance?",
        es: "¿Cuál es la importancia de la herencia del ADN mitocondrial?",
        de: "Was ist die Bedeutung der mitochondrialen DNA-Vererbung?",
        nl: "Wat is de betekenis van mitochondriaal DNA-overerving?"
      },
      options: [
        { en: "Maternal inheritance only, useful for tracing maternal lineages", es: "Herencia materna únicamente, útil para rastrear linajes maternos", de: "Nur mütterliche Vererbung, nützlich zur Verfolgung mütterlicher Abstammungslinien", nl: "Alleen moederlijke overerving, nuttig voor het traceren van moederlijke afstammingslijnen" },
        { en: "Paternal inheritance only", es: "Herencia paterna únicamente", de: "Nur väterliche Vererbung", nl: "Alleen vaderlijke overerving" },
        { en: "Equal inheritance from both parents", es: "Herencia igual de ambos padres", de: "Gleiche Vererbung von beiden Eltern", nl: "Gelijke overerving van beide ouders" },
        { en: "Random inheritance pattern", es: "Patrón de herencia aleatorio", de: "Zufälliges Vererbungsmuster", nl: "Willekeurig overervingspatroon" }
      ],
      correct: 0,
      explanation: {
        en: "Mitochondrial DNA is inherited exclusively from the mother, making it valuable for studying maternal ancestry and evolutionary relationships.",
        es: "El ADN mitocondrial se hereda exclusivamente de la madre, haciéndolo valioso para estudiar la ascendencia materna y las relaciones evolutivas.",
        de: "Mitochondriale DNA wird ausschließlich von der Mutter vererbt, was sie wertvoll für das Studium mütterlicher Abstammung und evolutionärer Beziehungen macht.",
        nl: "Mitochondriaal DNA wordt uitsluitend van de moeder geërfd, waardoor het waardevol is voor het bestuderen van moederlijke afkomst en evolutionaire relaties."
      }
    },
    {
      question: {
        en: "What is gene therapy?",
        es: "¿Qué es la terapia génica?",
        de: "Was ist Gentherapie?",
        nl: "Wat is gentherapie?"
      },
      options: [
        { en: "Treatment of disease by introducing therapeutic genes into patient cells", es: "Tratamiento de enfermedades introduciendo genes terapéuticos en células del paciente", de: "Behandlung von Krankheiten durch Einführung therapeutischer Gene in Patientenzellen", nl: "Behandeling van ziekten door therapeutische genen in patiëntcellen te introduceren" },
        { en: "Surgery to remove damaged genes", es: "Cirugía para remover genes dañados", de: "Chirurgie zur Entfernung beschädigter Gene", nl: "Chirurgie om beschadigde genen te verwijderen" },
        { en: "Medication to suppress gene expression", es: "Medicación para suprimir la expresión génica", de: "Medikamente zur Unterdrückung der Genexpression", nl: "Medicatie om genexpressie te onderdrukken" },
        { en: "Physical therapy for genetic conditions", es: "Fisioterapia para condiciones genéticas", de: "Physiotherapie für genetische Zustände", nl: "Fysiotherapie voor genetische aandoeningen" }
      ],
      correct: 0,
      explanation: {
        en: "Gene therapy involves introducing genetic material into a patient's cells to treat or prevent disease, often by correcting defective genes or providing new cellular functions.",
        es: "La terapia génica involucra introducir material genético en las células de un paciente para tratar o prevenir enfermedades, a menudo corrigiendo genes defectuosos o proporcionando nuevas funciones celulares.",
        de: "Gentherapie beinhaltet die Einführung genetischen Materials in Patientenzellen zur Behandlung oder Vorbeugung von Krankheiten, oft durch Korrektur defekter Gene oder Bereitstellung neuer zellulärer Funktionen.",
        nl: "Gentherapie houdt in dat genetisch materiaal wordt geïntroduceerd in patiëntcellen om ziekte te behandelen of voorkomen, vaak door defecte genen te corrigeren of nieuwe cellulaire functies te bieden."
      }
    },
    {
      question: {
        en: "What is epigenetics?",
        es: "¿Qué es la epigenética?",
        de: "Was ist Epigenetik?",
        nl: "Wat is epigenetica?"
      },
      options: [
        { en: "Study of heritable changes in gene expression without DNA sequence changes", es: "Estudio de cambios hereditarios en la expresión génica sin cambios en la secuencia de ADN", de: "Studium vererbbarer Änderungen der Genexpression ohne DNA-Sequenzänderungen", nl: "Studie van erfelijke veranderingen in genexpressie zonder DNA-sequentieveranderingen" },
        { en: "Study of genetic mutations", es: "Estudio de mutaciones genéticas", de: "Studium genetischer Mutationen", nl: "Studie van genetische mutaties" },
        { en: "Study of chromosome structure", es: "Estudio de estructura cromosómica", de: "Studium der Chromosomenstruktur", nl: "Studie van chromosoomstructuur" },
        { en: "Study of protein synthesis", es: "Estudio de síntesis de proteínas", de: "Studium der Proteinsynthese", nl: "Studie van eiwitsynthese" }
      ],
      correct: 0,
      explanation: {
        en: "Epigenetics studies heritable changes in gene expression that don't involve alterations to the DNA sequence itself, including DNA methylation and histone modifications.",
        es: "La epigenética estudia cambios hereditarios en la expresión génica que no involucran alteraciones en la secuencia de ADN misma, incluyendo metilación de ADN y modificaciones de histonas.",
        de: "Epigenetik untersucht vererbbare Änderungen der Genexpression, die keine Veränderungen der DNA-Sequenz selbst beinhalten, einschließlich DNA-Methylierung und Histonmodifikationen.",
        nl: "Epigenetica bestudeert erfelijke veranderingen in genexpressie die geen veranderingen in de DNA-sequentie zelf inhouden, inclusief DNA-methylatie en histonmodificaties."
      }
    }
  ]
});
