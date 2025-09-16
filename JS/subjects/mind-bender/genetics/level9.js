(function() {
  const level9 = {
    name: {
      en: "Population Genetics & Evolutionary Genomics",
      es: "Genética de Poblaciones y Genómica Evolutiva",
      de: "Populationsgenetik und Evolutionäre Genomik",
      nl: "Populatiegenetica en Evolutionaire Genomica"
    },
    questions: [
    {
      question: {
        en: "What is cancer?",
        es: "¿Qué es el cáncer?",
        de: "Was ist Krebs?",
        nl: "Wat is kanker?"
      },
      options: [
        { en: "Disease characterized by uncontrolled cell growth and division", es: "Enfermedad caracterizada por crecimiento y división celular descontrolado", de: "Krankheit charakterisiert durch unkontrolliertes Zellwachstum und -teilung", nl: "Ziekte gekenmerkt door ongecontroleerde celgroei en -deling" },
        { en: "Genetic disorder affecting only children", es: "Trastorno genético que afecta solo a niños", de: "Genetische Störung, die nur Kinder betrifft", nl: "Genetische aandoening die alleen kinderen treft" },
        { en: "Infectious disease caused by bacteria", es: "Enfermedad infecciosa causada por bacterias", de: "Infektionskrankheit verursacht durch Bakterien", nl: "Infectieziekte veroorzaakt door bacteriën" },
        { en: "Autoimmune condition only", es: "Solo condición autoinmune", de: "Nur Autoimmunkrankheit", nl: "Alleen auto-immuunaandoening" }
      ],
      correct: 0,
      explanation: {
        en: "Cancer is a group of diseases characterized by uncontrolled cell growth and division, with the ability to invade other tissues and spread to distant sites (metastasis).",
        es: "El cáncer es un grupo de enfermedades caracterizado por crecimiento y división celular descontrolado, con la capacidad de invadir otros tejidos y extenderse a sitios distantes.",
        de: "Krebs ist eine Gruppe von Krankheiten, die durch unkontrolliertes Zellwachstum und -teilung charakterisiert sind, mit der Fähigkeit, andere Gewebe zu invasieren.",
        nl: "Kanker is een groep ziekten gekenmerkt door ongecontroleerde celgroei en -deling, met het vermogen om andere weefsels binnen te dringen en zich te verspreiden."
      }
    },
    {
      question: {
        en: "What are oncogenes?",
        es: "¿Qué son los oncogenes?",
        de: "Was sind Onkogene?",
        nl: "Wat zijn oncogenen?"
      },
      options: [
        { en: "Genes that promote cell growth and can cause cancer when mutated or overexpressed", es: "Genes que promueven el crecimiento celular y pueden causar cáncer cuando están mutados o sobreexpresados", de: "Gene, die Zellwachstum fördern und Krebs verursachen können, wenn sie mutiert oder überexprimiert sind", nl: "Genen die celgroei bevorderen en kanker kunnen veroorzaken wanneer gemuteerd of overgeexprimeerd" },
        { en: "Genes that always prevent cancer formation", es: "Genes que siempre previenen la formación de cáncer", de: "Gene, die immer Krebsbildung verhindern", nl: "Genen die altijd kankervorming voorkomen" },
        { en: "Genes involved only in DNA repair", es: "Genes involucrados solo en reparación de ADN", de: "Gene, die nur an DNA-Reparatur beteiligt sind", nl: "Genen alleen betrokken bij DNA-reparatie" },
        { en: "Genes that cause cell death", es: "Genes que causan muerte celular", de: "Gene, die Zelltod verursachen", nl: "Genen die celdood veroorzaken" }
      ],
      correct: 0,
      explanation: {
        en: "Oncogenes are genes that normally promote cell growth and division. When mutated, amplified, or overexpressed, they can contribute to cancer development by driving excessive cell proliferation.",
        es: "Los oncogenes son genes que normalmente promueven el crecimiento y división celular. Cuando están mutados, amplificados o sobreexpresados, pueden contribuir al desarrollo del cáncer.",
        de: "Onkogene sind Gene, die normalerweise Zellwachstum und -teilung fördern. Wenn sie mutiert, amplifiziert oder überexprimiert sind, können sie zur Krebsentwicklung beitragen.",
        nl: "Oncogenen zijn genen die normaal celgroei en -deling bevorderen. Wanneer gemuteerd, geamplificeerd of overgeexprimeerd, kunnen ze bijdragen aan kankerontwikkeling."
      }
    },
    {
      question: {
        en: "What are tumor suppressor genes?",
        es: "¿Qué son los genes supresores de tumores?",
        de: "Was sind Tumorsuppressor-Gene?",
        nl: "Wat zijn tumorsuppressor-genen?"
      },
      options: [
        { en: "Genes that normally prevent uncontrolled cell growth and tumor formation", es: "Genes que normalmente previenen el crecimiento celular descontrolado y la formación de tumores", de: "Gene, die normalerweise unkontrolliertes Zellwachstum und Tumorbildung verhindern", nl: "Genen die normaal ongecontroleerde celgroei en tumorvorming voorkomen" },
        { en: "Genes that promote tumor growth", es: "Genes que promueven el crecimiento de tumores", de: "Gene, die Tumorwachstum fördern", nl: "Genen die tumorgroei bevorderen" },
        { en: "Genes that only affect immune cells", es: "Genes que solo afectan células inmunes", de: "Gene, die nur Immunzellen beeinflussen", nl: "Genen die alleen immuuncellen beïnvloeden" },
        { en: "Genes involved in metabolism only", es: "Genes involucrados solo en metabolismo", de: "Gene, die nur am Stoffwechsel beteiligt sind", nl: "Genen alleen betrokken bij metabolisme" }
      ],
      correct: 0,
      explanation: {
        en: "Tumor suppressor genes normally function to prevent cancer by controlling cell division, promoting DNA repair, and triggering cell death when cells are irreparably damaged.",
        es: "Los genes supresores de tumores funcionan normalmente para prevenir el cáncer controlando la división celular, promoviendo la reparación del ADN y activando la muerte celular.",
        de: "Tumorsuppressor-Gene funktionieren normalerweise zur Krebsprävention durch Kontrolle der Zellteilung, Förderung der DNA-Reparatur und Auslösung des Zelltods.",
        nl: "Tumorsuppressor-genen functioneren normaal om kanker te voorkomen door celdeling te controleren, DNA-reparatie te bevorderen en celdood te activeren."
      }
    },
    {
      question: {
        en: "What is the p53 gene?",
        es: "¿Qué es el gen p53?",
        de: "Was ist das p53-Gen?",
        nl: "Wat is het p53-gen?"
      },
      options: [
        { en: "Tumor suppressor gene called 'guardian of the genome'", es: "Gen supresor de tumores llamado 'guardián del genoma'", de: "Tumorsuppressor-Gen genannt 'Wächter des Genoms'", nl: "Tumorsuppressor-gen genoemd 'bewaker van het genoom'" },
        { en: "Oncogene promoting cell division", es: "Oncogén promoviendo división celular", de: "Onkogen, das Zellteilung fördert", nl: "Oncogen dat celdeling bevordert" },
        { en: "Gene involved only in protein synthesis", es: "Gen involucrado solo en síntesis de proteínas", de: "Gen, das nur an Proteinsynthese beteiligt ist", nl: "Gen alleen betrokken bij eiwitynthese" },
        { en: "Gene regulating metabolism", es: "Gen regulando metabolismo", de: "Gen, das Stoffwechsel reguliert", nl: "Gen dat metabolisme reguleert" }
      ],
      correct: 0,
      explanation: {
        en: "p53 is a crucial tumor suppressor gene known as the 'guardian of the genome' because it monitors DNA integrity and can halt cell division or trigger apoptosis in response to DNA damage.",
        es: "p53 es un gen supresor de tumores crucial conocido como el 'guardián del genoma' porque monitorea la integridad del ADN y puede detener la división celular.",
        de: "p53 ist ein entscheidendes Tumorsuppressor-Gen, bekannt als 'Wächter des Genoms', weil es DNA-Integrität überwacht und Zellteilung stoppen oder Apoptose auslösen kann.",
        nl: "p53 is een cruciaal tumorsuppressor-gen bekend als de 'bewaker van het genoom' omdat het DNA-integriteit monitort en celdeling kan stoppen of apoptose kan activeren."
      }
    },
    {
      question: {
        en: "What is the Rb gene?",
        es: "¿Qué es el gen Rb?",
        de: "Was ist das Rb-Gen?",
        nl: "Wat is het Rb-gen?"
      },
      options: [
        { en: "Tumor suppressor gene controlling cell cycle progression", es: "Gen supresor de tumores controlando la progresión del ciclo celular", de: "Tumorsuppressor-Gen, das die Zellzyklusprogression kontrolliert", nl: "Tumorsuppressor-gen dat celcyclus progressie controleert" },
        { en: "Gene promoting DNA replication", es: "Gen promoviendo replicación de ADN", de: "Gen, das DNA-Replikation fördert", nl: "Gen dat DNA-replicatie bevordert" },
        { en: "Oncogene causing rapid cell division", es: "Oncogén causando división celular rápida", de: "Onkogen, das schnelle Zellteilung verursacht", nl: "Oncogen dat snelle celdeling veroorzaakt" },
        { en: "Gene involved in immune response", es: "Gen involucrado en respuesta inmune", de: "Gen, das an Immunantwort beteiligt ist", nl: "Gen betrokken bij immuunreactie" }
      ],
      correct: 0,
      explanation: {
        en: "The Rb (retinoblastoma) gene is a tumor suppressor that controls the G1/S checkpoint of the cell cycle, preventing cells from entering S phase until appropriate conditions are met.",
        es: "El gen Rb (retinoblastoma) es un supresor de tumores que controla el punto de control G1/S del ciclo celular, previniendo que las células entren en fase S.",
        de: "Das Rb (Retinoblastom)-Gen ist ein Tumorsuppressor, der den G1/S-Kontrollpunkt des Zellzyklus kontrolliert und verhindert, dass Zellen in die S-Phase eintreten.",
        nl: "Het Rb (retinoblastoom)-gen is een tumorsuppressor dat het G1/S-controlepunt van de celcyclus controleert, voorkomend dat cellen de S-fase betreden."
      }
    },
    {
      question: {
        en: "What is metastasis?",
        es: "¿Qué es la metástasis?",
        de: "Was ist Metastase?",
        nl: "Wat is metastase?"
      },
      options: [
        { en: "Spread of cancer cells from primary tumor to distant sites", es: "Propagación de células cancerosas del tumor primario a sitios distantes", de: "Ausbreitung von Krebszellen vom primären Tumor zu entfernten Stellen", nl: "Verspreiding van kankercellen van primaire tumor naar verafgelegen plaatsen" },
        { en: "Initial formation of a tumor", es: "Formación inicial de un tumor", de: "Anfängliche Tumorbildung", nl: "Initiële vorming van een tumor" },
        { en: "Death of cancer cells", es: "Muerte de células cancerosas", de: "Tod von Krebszellen", nl: "Dood van kankercellen" },
        { en: "DNA repair in tumor cells", es: "Reparación de ADN en células tumorales", de: "DNA-Reparatur in Tumorzellen", nl: "DNA-reparatie in tumorcellen" }
      ],
      correct: 0,
      explanation: {
        en: "Metastasis is the process by which cancer cells spread from the primary tumor site to establish secondary tumors in distant organs or tissues.",
        es: "La metástasis es el proceso por el cual las células cancerosas se extienden desde el sitio del tumor primario para establecer tumores secundarios en órganos o tejidos distantes.",
        de: "Metastase ist der Prozess, durch den sich Krebszellen vom primären Tumorort ausbreiten, um sekundäre Tumoren in entfernten Organen oder Geweben zu etablieren.",
        nl: "Metastase is het proces waarbij kankercellen zich verspreiden van de primaire tumorplaats om secundaire tumoren te vestigen in verafgelegen organen of weefsels."
      }
    },
    {
      question: {
        en: "What is angiogenesis?",
        es: "¿Qué es la angiogénesis?",
        de: "Was ist Angiogenese?",
        nl: "Wat is angiogenese?"
      },
      options: [
        { en: "Formation of new blood vessels to supply growing tumors", es: "Formación de nuevos vasos sanguíneos para suministrar tumores en crecimiento", de: "Bildung neuer Blutgefäße zur Versorgung wachsender Tumoren", nl: "Vorming van nieuwe bloedvaten om groeiende tumoren te voorzien" },
        { en: "Death of blood vessels", es: "Muerte de vasos sanguíneos", de: "Tod von Blutgefäßen", nl: "Dood van bloedvaten" },
        { en: "Formation of cancer cells", es: "Formación de células cancerosas", de: "Bildung von Krebszellen", nl: "Vorming van kankercellen" },
        { en: "Repair of existing blood vessels", es: "Reparación de vasos sanguíneos existentes", de: "Reparatur bestehender Blutgefäße", nl: "Reparatie van bestaande bloedvaten" }
      ],
      correct: 0,
      explanation: {
        en: "Angiogenesis is the process of forming new blood vessels from existing ones, which tumors stimulate to ensure adequate blood supply for their growth and survival.",
        es: "La angiogénesis es el proceso de formar nuevos vasos sanguíneos a partir de los existentes, que los tumores estimulan para asegurar suministro de sangre adecuado.",
        de: "Angiogenese ist der Prozess der Bildung neuer Blutgefäße aus bestehenden, den Tumoren stimulieren, um eine angemessene Blutversorgung zu gewährleisten.",
        nl: "Angiogenese is het proces van het vormen van nieuwe bloedvaten uit bestaande, wat tumoren stimuleren om adequate bloedtoevoer voor hun groei te verzekeren."
      }
    },
    {
      question: {
        en: "What is apoptosis in cancer?",
        es: "¿Qué es la apoptosis en el cáncer?",
        de: "Was ist Apoptose bei Krebs?",
        nl: "Wat is apoptose bij kanker?"
      },
      options: [
        { en: "Programmed cell death that cancer cells often evade", es: "Muerte celular programada que las células cancerosas a menudo evitan", de: "Programmierter Zelltod, den Krebszellen oft umgehen", nl: "Geprogrammeerde celdood die kankercellen vaak ontwijken" },
        { en: "Uncontrolled cell division", es: "División celular descontrolada", de: "Unkontrollierte Zellteilung", nl: "Ongecontroleerde celdeling" },
        { en: "Formation of new tumors", es: "Formación de nuevos tumores", de: "Bildung neuer Tumoren", nl: "Vorming van nieuwe tumoren" },
        { en: "Migration of cancer cells", es: "Migración de células cancerosas", de: "Migration von Krebszellen", nl: "Migratie van kankercellen" }
      ],
      correct: 0,
      explanation: {
        en: "Apoptosis is programmed cell death that normally eliminates damaged or abnormal cells. Cancer cells often acquire mutations that allow them to evade apoptosis and continue dividing.",
        es: "La apoptosis es muerte celular programada que normalmente elimina células dañadas o anormales. Las células cancerosas a menudo adquieren mutaciones que les permiten evitar la apoptosis.",
        de: "Apoptose ist programmierter Zelltod, der normalerweise beschädigte oder abnormale Zellen eliminiert. Krebszellen erwerben oft Mutationen, die es ihnen ermöglichen, Apoptose zu umgehen.",
        nl: "Apoptose is geprogrammeerde celdood die normaal beschadigde of abnormale cellen elimineert. Kankercellen verwerven vaak mutaties die hen toestaan apoptose te ontwijken."
      }
    },
    {
      question: {
        en: "What is the two-hit hypothesis?",
        es: "¿Qué es la hipótesis de los dos golpes?",
        de: "Was ist die Zwei-Treffer-Hypothese?",
        nl: "Wat is de twee-slag hypothese?"
      },
      options: [
        { en: "Theory that both copies of a tumor suppressor gene must be inactivated for cancer to develop", es: "Teoría de que ambas copias de un gen supresor de tumores deben inactivarse para que se desarrolle cáncer", de: "Theorie, dass beide Kopien eines Tumorsuppressor-Gens inaktiviert werden müssen, damit sich Krebs entwickelt", nl: "Theorie dat beide kopieën van een tumorsuppressor-gen geïnactiveerd moeten worden voor kankerontwikkeling" },
        { en: "Theory requiring two oncogenes to cause cancer", es: "Teoría requiriendo dos oncogenes para causar cáncer", de: "Theorie, die zwei Onkogene benötigt, um Krebs zu verursachen", nl: "Theorie die twee oncogenen vereist om kanker te veroorzaken" },
        { en: "Requirement for two types of chemotherapy", es: "Requerimiento de dos tipos de quimioterapia", de: "Erfordernis für zwei Arten von Chemotherapie", nl: "Vereiste voor twee soorten chemotherapie" },
        { en: "Need for two surgical procedures", es: "Necesidad de dos procedimientos quirúrgicos", de: "Bedarf für zwei chirurgische Eingriffe", nl: "Behoefte aan twee chirurgische procedures" }
      ],
      correct: 0,
      explanation: {
        en: "Knudson's two-hit hypothesis explains that for recessive tumor suppressor genes, both alleles must be inactivated (two 'hits') for cancer to develop in that cell.",
        es: "La hipótesis de los dos golpes de Knudson explica que para genes supresores de tumores recesivos, ambos alelos deben inactivarse (dos 'golpes') para que se desarrolle cáncer.",
        de: "Knudsons Zwei-Treffer-Hypothese erklärt, dass für rezessive Tumorsuppressor-Gene beide Allele inaktiviert werden müssen (zwei 'Treffer'), damit sich Krebs entwickelt.",
        nl: "Knudson's twee-slag hypothese verklaart dat voor recessieve tumorsuppressor-genen beide allelen geïnactiveerd moeten worden (twee 'slagen') voor kankerontwikkeling."
      }
    },
    {
      question: {
        en: "What is genomic instability?",
        es: "¿Qué es la inestabilidad genómica?",
        de: "Was ist genomische Instabilität?",
        nl: "Wat is genomische instabiliteit?"
      },
      options: [
        { en: "Increased rate of genetic mutations and chromosomal alterations", es: "Tasa aumentada de mutaciones genéticas y alteraciones cromosómicas", de: "Erhöhte Rate genetischer Mutationen und chromosomaler Veränderungen", nl: "Verhoogde snelheid van genetische mutaties en chromosomale veranderingen" },
        { en: "Normal DNA repair mechanisms", es: "Mecanismos normales de reparación de ADN", de: "Normale DNA-Reparaturmechanismen", nl: "Normale DNA-reparatiemechanismen" },
        { en: "Stable chromosome structure", es: "Estructura cromosómica estable", de: "Stabile Chromosomenstruktur", nl: "Stabiele chromosoomstructuur" },
        { en: "Perfect DNA replication", es: "Replicación perfecta de ADN", de: "Perfekte DNA-Replikation", nl: "Perfecte DNA-replicatie" }
      ],
      correct: 0,
      explanation: {
        en: "Genomic instability is a hallmark of cancer characterized by an increased tendency to acquire genetic mutations and chromosomal abnormalities during cell division.",
        es: "La inestabilidad genómica es una característica del cáncer caracterizada por una tendencia aumentada a adquirir mutaciones genéticas y anormalidades cromosómicas.",
        de: "Genomische Instabilität ist ein Kennzeichen von Krebs, charakterisiert durch eine erhöhte Tendenz, genetische Mutationen und chromosomale Abnormitäten zu erwerben.",
        nl: "Genomische instabiliteit is een kenmerk van kanker gekenmerkt door een verhoogde neiging om genetische mutaties en chromosomale abnormaliteiten te verwerven."
      }
    },
    {
      question: {
        en: "What are DNA mismatch repair genes?",
        es: "¿Qué son los genes de reparación de emparejamiento erróneo de ADN?",
        de: "Was sind DNA-Mismatch-Reparatur-Gene?",
        nl: "Wat zijn DNA-mismatch reparatie-genen?"
      },
      options: [
        { en: "Genes that correct DNA replication errors and prevent mutations", es: "Genes que corrigen errores de replicación de ADN y previenen mutaciones", de: "Gene, die DNA-Replikationsfehler korrigieren und Mutationen verhindern", nl: "Genen die DNA-replicatiefouten corrigeren en mutaties voorkomen" },
        { en: "Genes that cause DNA damage", es: "Genes que causan daño al ADN", de: "Gene, die DNA-Schäden verursachen", nl: "Genen die DNA-schade veroorzaken" },
        { en: "Genes that promote cell division", es: "Genes que promueven división celular", de: "Gene, die Zellteilung fördern", nl: "Genen die celdeling bevorderen" },
        { en: "Genes involved in protein synthesis only", es: "Genes involucrados solo en síntesis de proteínas", de: "Gene, die nur an Proteinsynthese beteiligt sind", nl: "Genen alleen betrokken bij eiwitynthese" }
      ],
      correct: 0,
      explanation: {
        en: "DNA mismatch repair genes encode proteins that detect and correct errors made during DNA replication, preventing the accumulation of mutations that could lead to cancer.",
        es: "Los genes de reparación de emparejamiento erróneo de ADN codifican proteínas que detectan y corrigen errores hechos durante la replicación de ADN.",
        de: "DNA-Mismatch-Reparatur-Gene kodieren Proteine, die Fehler während der DNA-Replikation erkennen und korrigieren, um die Ansammlung von Mutationen zu verhindern.",
        nl: "DNA-mismatch reparatie-genen coderen eiwitten die fouten tijdens DNA-replicatie detecteren en corrigeren, voorkomen van mutatieophoping die tot kanker kan leiden."
      }
    },
    {
      question: {
        en: "What is microsatellite instability (MSI)?",
        es: "¿Qué es la inestabilidad de microsatélites (MSI)?",
        de: "Was ist Mikrosatellit-Instabilität (MSI)?",
        nl: "Wat is microsatelliet-instabiliteit (MSI)?"
      },
      options: [
        { en: "Condition caused by defective DNA mismatch repair leading to length changes in repetitive DNA sequences", es: "Condición causada por reparación defectuosa de emparejamiento erróneo de ADN llevando a cambios de longitud en secuencias repetitivas", de: "Zustand verursacht durch defekte DNA-Mismatch-Reparatur, die zu Längenänderungen in repetitiven DNA-Sequenzen führt", nl: "Aandoening veroorzaakt door defecte DNA-mismatch reparatie leidend tot lengteveranderingen in repetitieve DNA-sequenties" },
        { en: "Normal DNA replication process", es: "Proceso normal de replicación de ADN", de: "Normaler DNA-Replikationsprozess", nl: "Normaal DNA-replicatieproces" },
        { en: "Stable chromosome structure", es: "Estructura cromosómica estable", de: "Stabile Chromosomenstruktur", nl: "Stabiele chromosoomstructuur" },
        { en: "Perfect DNA repair mechanism", es: "Mecanismo perfecto de reparación de ADN", de: "Perfekter DNA-Reparaturmechanismus", nl: "Perfect DNA-reparatiemechanisme" }
      ],
      correct: 0,
      explanation: {
        en: "MSI occurs when DNA mismatch repair systems are defective, leading to instability in microsatellite sequences and increased mutation rates, often seen in colorectal cancers.",
        es: "MSI ocurre cuando los sistemas de reparación de emparejamiento erróneo de ADN son defectuosos, llevando a inestabilidad en secuencias de microsatélites.",
        de: "MSI tritt auf, wenn DNA-Mismatch-Reparatursysteme defekt sind, was zu Instabilität in Mikrosatellit-Sequenzen und erhöhten Mutationsraten führt.",
        nl: "MSI treedt op wanneer DNA-mismatch reparatiesystemen defect zijn, leidend tot instabiliteit in microsatellietsequenties en verhoogde mutatiesnelheden."
      }
    },
    {
      question: {
        en: "What is hereditary cancer syndrome?",
        es: "¿Qué es el síndrome de cáncer hereditario?",
        de: "Was ist hereditäres Krebssyndrom?",
        nl: "Wat is erfelijk kankersyndroom?"
      },
      options: [
        { en: "Inherited genetic predisposition to developing certain types of cancer", es: "Predisposición genética heredada a desarrollar ciertos tipos de cáncer", de: "Vererbte genetische Prädisposition zur Entwicklung bestimmter Krebsarten", nl: "Geërfde genetische predispositie tot het ontwikkelen van bepaalde kankersoorten" },
        { en: "Cancer that only affects children", es: "Cáncer que solo afecta a niños", de: "Krebs, der nur Kinder betrifft", nl: "Kanker die alleen kinderen treft" },
        { en: "Cancer caused only by environmental factors", es: "Cáncer causado solo por factores ambientales", de: "Krebs, der nur durch Umweltfaktoren verursacht wird", nl: "Kanker veroorzaakt alleen door omgevingsfactoren" },
        { en: "Non-genetic form of cancer", es: "Forma no genética de cáncer", de: "Nicht-genetische Form von Krebs", nl: "Niet-genetische vorm van kanker" }
      ],
      correct: 0,
      explanation: {
        en: "Hereditary cancer syndromes are caused by inherited mutations in genes that normally protect against cancer, significantly increasing the risk of developing specific cancers.",
        es: "Los síndromes de cáncer hereditarios son causados por mutaciones heredadas en genes que normalmente protegen contra el cáncer, aumentando significativamente el riesgo.",
        de: "Hereditäre Krebssyndrome werden durch vererbte Mutationen in Genen verursacht, die normalerweise vor Krebs schützen, was das Risiko erheblich erhöht.",
        nl: "Erfelijke kankersyndromen worden veroorzaakt door geërfde mutaties in genen die normaal tegen kanker beschermen, het risico aanzienlijk verhogend."
      }
    },
    {
      question: {
        en: "What is Lynch syndrome?",
        es: "¿Qué es el síndrome de Lynch?",
        de: "Was ist Lynch-Syndrom?",
        nl: "Wat is Lynch-syndroom?"
      },
      options: [
        { en: "Hereditary cancer syndrome caused by mismatch repair gene mutations", es: "Síndrome de cáncer hereditario causado por mutaciones en genes de reparación de emparejamiento erróneo", de: "Hereditäres Krebssyndrom verursacht durch Mismatch-Reparatur-Gen-Mutationen", nl: "Erfelijk kankersyndroom veroorzaakt door mismatch reparatie-genmutaties" },
        { en: "Syndrome affecting only the nervous system", es: "Síndrome que afecta solo al sistema nervioso", de: "Syndrom, das nur das Nervensystem betrifft", nl: "Syndroom dat alleen het zenuwstelsel treft" },
        { en: "Metabolic disorder unrelated to cancer", es: "Trastorno metabólico no relacionado con cáncer", de: "Stoffwechselstörung, die nicht mit Krebs zusammenhängt", nl: "Stofwisselingsaandoening ongerelateerd aan kanker" },
        { en: "Autoimmune condition only", es: "Solo condición autoinmune", de: "Nur Autoimmunerkrankung", nl: "Alleen auto-immuunaandoening" }
      ],
      correct: 0,
      explanation: {
        en: "Lynch syndrome is the most common hereditary colorectal cancer syndrome, caused by mutations in DNA mismatch repair genes (MLH1, MSH2, MSH6, PMS2).",
        es: "El síndrome de Lynch es el síndrome de cáncer colorrectal hereditario más común, causado por mutaciones en genes de reparación de emparejamiento erróneo.",
        de: "Lynch-Syndrom ist das häufigste hereditäre kolorektale Krebssyndrom, verursacht durch Mutationen in DNA-Mismatch-Reparatur-Genen.",
        nl: "Lynch-syndroom is het meest voorkomende erfelijke colorectale kankersyndroom, veroorzaakt door mutaties in DNA-mismatch reparatie-genen."
      }
    },
    {
      question: {
        en: "What is familial adenomatous polyposis (FAP)?",
        es: "¿Qué es la poliposis adenomatosa familiar (FAP)?",
        de: "Was ist familiäre adenomatöse Polyposis (FAP)?",
        nl: "Wat is familiaire adenomateuze polyposis (FAP)?"
      },
      options: [
        { en: "Inherited condition causing hundreds of colorectal polyps due to APC gene mutations", es: "Condición heredada causando cientos de pólipos colorrectales debido a mutaciones del gen APC", de: "Vererbte Erkrankung, die Hunderte von kolorektalen Polypen durch APC-Gen-Mutationen verursacht", nl: "Erfelijke aandoening die honderden colorectale poliepen veroorzaakt door APC-genmutaties" },
        { en: "Benign skin condition", es: "Condición cutánea benigna", de: "Gutartige Hauterkrankung", nl: "Goedaardige huidaandoening" },
        { en: "Neurological disorder", es: "Trastorno neurológico", de: "Neurologische Störung", nl: "Neurologische aandoening" },
        { en: "Blood clotting disorder", es: "Trastorno de coagulación sanguínea", de: "Blutgerinnungsstörung", nl: "Bloedstollingsaandoening" }
      ],
      correct: 0,
      explanation: {
        en: "FAP is caused by mutations in the APC gene and results in the development of hundreds to thousands of adenomatous polyps in the colon, with nearly 100% risk of colorectal cancer.",
        es: "FAP es causada por mutaciones en el gen APC y resulta en el desarrollo de cientos a miles de pólipos adenomatosos en el colon, con casi 100% de riesgo de cáncer colorrectal.",
        de: "FAP wird durch Mutationen im APC-Gen verursacht und führt zur Entwicklung von Hunderten bis Tausenden adenomatöser Polypen im Dickdarm.",
        nl: "FAP wordt veroorzaakt door mutaties in het APC-gen en resulteert in de ontwikkeling van honderden tot duizenden adenomateuze poliepen in de dikke darm."
      }
    },
    {
      question: {
        en: "What is Li-Fraumeni syndrome?",
        es: "¿Qué es el síndrome de Li-Fraumeni?",
        de: "Was ist Li-Fraumeni-Syndrom?",
        nl: "Wat is Li-Fraumeni-syndroom?"
      },
      options: [
        { en: "Rare hereditary cancer syndrome caused by p53 gene mutations", es: "Síndrome de cáncer hereditario raro causado por mutaciones del gen p53", de: "Seltenes hereditäres Krebssyndrom verursacht durch p53-Gen-Mutationen", nl: "Zeldzaam erfelijk kankersyndroom veroorzaakt door p53-genmutaties" },
        { en: "Common metabolic disorder", es: "Trastorno metabólico común", de: "Häufige Stoffwechselstörung", nl: "Veel voorkomende stofwisselingsaandoening" },
        { en: "Infectious disease", es: "Enfermedad infecciosa", de: "Infektionskrankheit", nl: "Infectieziekte" },
        { en: "Developmental disorder", es: "Trastorno del desarrollo", de: "Entwicklungsstörung", nl: "Ontwikkelingsaandoening" }
      ],
      correct: 0,
      explanation: {
        en: "Li-Fraumeni syndrome is a rare hereditary cancer syndrome caused by germline p53 mutations, predisposing individuals to multiple cancer types at young ages.",
        es: "El síndrome de Li-Fraumeni es un síndrome de cáncer hereditario raro causado por mutaciones germinales de p53, predisponiendo a individuos a múltiples tipos de cáncer.",
        de: "Li-Fraumeni-Syndrom ist ein seltenes hereditäres Krebssyndrom verursacht durch Keimbahn-p53-Mutationen, das Individuen zu verschiedenen Krebsarten prädisponiert.",
        nl: "Li-Fraumeni-syndroom is een zeldzaam erfelijk kankersyndroom veroorzaakt door kiembaan-p53-mutaties, individuen predisponerend tot meerdere kankersoorten."
      }
    },
    {
      question: {
        en: "What is the role of telomeres in cancer?",
        es: "¿Cuál es el papel de los telómeros en el cáncer?",
        de: "Was ist die Rolle von Telomeren bei Krebs?",
        nl: "Wat is de rol van telomeren bij kanker?"
      },
      options: [
        { en: "Chromosome caps that cancer cells maintain to achieve unlimited replicative potential", es: "Capuchones de cromosomas que las células cancerosas mantienen para lograr potencial replicativo ilimitado", de: "Chromosomenenden, die Krebszellen aufrechterhalten, um unbegrenztes replikatives Potenzial zu erreichen", nl: "Chromosoomuiteinden die kankercellen behouden om onbeperkt replicatief potentieel te bereiken" },
        { en: "DNA sequences that always prevent cancer", es: "Secuencias de ADN que siempre previenen el cáncer", de: "DNA-Sequenzen, die immer Krebs verhindern", nl: "DNA-sequenties die altijd kanker voorkomen" },
        { en: "Proteins involved in DNA repair only", es: "Proteínas involucradas solo en reparación de ADN", de: "Proteine, die nur an DNA-Reparatur beteiligt sind", nl: "Eiwitten alleen betrokken bij DNA-reparatie" },
        { en: "Cellular organelles for energy production", es: "Organelos celulares para producción de energía", de: "Zelluläre Organellen für Energieproduktion", nl: "Cellulaire organellen voor energieproductie" }
      ],
      correct: 0,
      explanation: {
        en: "Telomeres normally shorten with each cell division, limiting cellular lifespan. Cancer cells often reactivate telomerase to maintain telomeres and achieve unlimited replicative potential.",
        es: "Los telómeros normalmente se acortan con cada división celular, limitando la vida celular. Las células cancerosas a menudo reactivan la telomerasa para mantener telómeros.",
        de: "Telomere verkürzen sich normalerweise mit jeder Zellteilung und begrenzen die Zelllebensdauer. Krebszellen reaktivieren oft Telomerase, um Telomere aufrechtzuerhalten.",
        nl: "Telomeren verkorten normaal bij elke celdeling, de cellulaire levensduur beperkend. Kankercellen reactiveren vaak telomerase om telomeren te behouden."
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
        { en: "Cancer cells' preference for glycolysis even in presence of oxygen", es: "Preferencia de células cancerosas por glucólisis aún en presencia de oxígeno", de: "Bevorzugung der Glykolyse durch Krebszellen auch bei Sauerstoffanwesenheit", nl: "Voorkeur van kankercellen voor glycolyse zelfs bij aanwezigheid van zuurstof" },
        { en: "Normal cellular respiration process", es: "Proceso normal de respiración celular", de: "Normaler zellulärer Atmungsprozess", nl: "Normaal cellulair ademhalingsproces" },
        { en: "Enhanced DNA repair in cancer cells", es: "Reparación mejorada de ADN en células cancerosas", de: "Verbesserte DNA-Reparatur in Krebszellen", nl: "Verbeterde DNA-reparatie in kankercellen" },
        { en: "Increased apoptosis in tumors", es: "Apoptosis aumentada en tumores", de: "Erhöhte Apoptose in Tumoren", nl: "Verhoogde apoptose in tumoren" }
      ],
      correct: 0,
      explanation: {
        en: "The Warburg effect describes cancer cells' altered metabolism, where they preferentially use glycolysis for energy production even when oxygen is available, supporting rapid proliferation.",
        es: "El efecto Warburg describe el metabolismo alterado de células cancerosas, donde usan preferencialmente glucólisis para producción de energía aún cuando hay oxígeno disponible.",
        de: "Der Warburg-Effekt beschreibt den veränderten Stoffwechsel von Krebszellen, die bevorzugt Glykolyse zur Energieproduktion nutzen, auch wenn Sauerstoff verfügbar ist.",
        nl: "Het Warburg-effect beschrijft het veranderde metabolisme van kankercellen, waarbij ze bij voorkeur glycolyse gebruiken voor energieproductie zelfs wanneer zuurstof beschikbaar is."
      }
    },
    {
      question: {
        en: "What is tumor heterogeneity?",
        es: "¿Qué es la heterogeneidad tumoral?",
        de: "Was ist Tumorheterogeneität?",
        nl: "Wat is tumorheterogeniteit?"
      },
      options: [
        { en: "Genetic and phenotypic diversity within and between tumors", es: "Diversidad genética y fenotípica dentro y entre tumores", de: "Genetische und phänotypische Vielfalt innerhalb und zwischen Tumoren", nl: "Genetische en fenotypische diversiteit binnen en tussen tumoren" },
        { en: "Uniform genetic composition of all tumor cells", es: "Composición genética uniforme de todas las células tumorales", de: "Einheitliche genetische Zusammensetzung aller Tumorzellen", nl: "Uniforme genetische samenstelling van alle tumorcellen" },
        { en: "Identical response to all treatments", es: "Respuesta idéntica a todos los tratamientos", de: "Identische Reaktion auf alle Behandlungen", nl: "Identieke reactie op alle behandelingen" },
        { en: "Single mutation in all cancer cells", es: "Mutación única en todas las células cancerosas", de: "Einzelmutation in allen Krebszellen", nl: "Enkele mutatie in alle kankercellen" }
      ],
      correct: 0,
      explanation: {
        en: "Tumor heterogeneity refers to the genetic and phenotypic diversity found within individual tumors and between different tumors, complicating treatment strategies.",
        es: "La heterogeneidad tumoral se refiere a la diversidad genética y fenotípica encontrada dentro de tumores individuales y entre diferentes tumores, complicando estrategias de tratamiento.",
        de: "Tumorheterogeneität bezieht sich auf die genetische und phänotypische Vielfalt innerhalb einzelner Tumoren und zwischen verschiedenen Tumoren.",
        nl: "Tumorheterogeniteit verwijst naar de genetische en fenotypische diversiteit gevonden binnen individuele tumoren en tussen verschillende tumoren."
      }
    },
    {
      question: {
        en: "What are cancer stem cells?",
        es: "¿Qué son las células madre cancerosas?",
        de: "Was sind Krebs-Stammzellen?",
        nl: "Wat zijn kankerstamcellen?"
      },
      options: [
        { en: "Small population of cancer cells with self-renewal and differentiation abilities", es: "Población pequeña de células cancerosas con capacidades de auto-renovación y diferenciación", de: "Kleine Population von Krebszellen mit Selbsterneuerungs- und Differenzierungsfähigkeiten", nl: "Kleine populatie kankercellen met zelfvernieuwings- en differentiatievermogens" },
        { en: "Normal stem cells that never become cancerous", es: "Células madre normales que nunca se vuelven cancerosas", de: "Normale Stammzellen, die niemals kanzerös werden", nl: "Normale stamcellen die nooit kankerachtig worden" },
        { en: "Cells that only exist in healthy tissues", es: "Células que solo existen en tejidos sanos", de: "Zellen, die nur in gesunden Geweben existieren", nl: "Cellen die alleen bestaan in gezonde weefsels" },
        { en: "Cells that always respond to chemotherapy", es: "Células que siempre responden a quimioterapia", de: "Zellen, die immer auf Chemotherapie reagieren", nl: "Cellen die altijd reageren op chemotherapie" }
      ],
      correct: 0,
      explanation: {
        en: "Cancer stem cells are a small subpopulation within tumors that retain stem cell properties, including self-renewal and the ability to generate diverse cancer cell types.",
        es: "Las células madre cancerosas son una subpoblación pequeña dentro de tumores que retienen propiedades de células madre, incluyendo auto-renovación y capacidad de generar diversos tipos de células cancerosas.",
        de: "Krebs-Stammzellen sind eine kleine Subpopulation innerhalb von Tumoren, die Stammzelleigenschaften behalten, einschließlich Selbsterneuerung und der Fähigkeit zur Generierung verschiedener Krebszelltypen.",
        nl: "Kankerstamcellen zijn een kleine subpopulatie binnen tumoren die stamceleigenschappen behouden, inclusief zelfvernieuwing en het vermogen om diverse kankerceltypen te genereren."
      }
    },
    {
      question: {
        en: "What is epithelial-mesenchymal transition (EMT)?",
        es: "¿Qué es la transición epitelio-mesenquimatosa (EMT)?",
        de: "Was ist epithelial-mesenchymale Transition (EMT)?",
        nl: "Wat is epitheliale-mesenchymale transitie (EMT)?"
      },
      options: [
        { en: "Process where epithelial cells acquire mesenchymal properties and become motile", es: "Proceso donde células epiteliales adquieren propiedades mesenquimatosas y se vuelven mótiles", de: "Prozess, bei dem epitheliale Zellen mesenchymale Eigenschaften erwerben und beweglich werden", nl: "Proces waarbij epitheliale cellen mesenchymale eigenschappen verwerven en mobiel worden" },
        { en: "Normal development of epithelial tissues", es: "Desarrollo normal de tejidos epiteliales", de: "Normale Entwicklung epithelialer Gewebe", nl: "Normale ontwikkeling van epitheliale weefsels" },
        { en: "Formation of new blood vessels", es: "Formación de nuevos vasos sanguíneos", de: "Bildung neuer Blutgefäße", nl: "Vorming van nieuwe bloedvaten" },
        { en: "Cell death in tumor tissues", es: "Muerte celular en tejidos tumorales", de: "Zelltod in Tumorgewebe", nl: "Celdood in tumorweefsels" }
      ],
      correct: 0,
      explanation: {
        en: "EMT is a process where polarized epithelial cells lose their cell-cell adhesion and acquire mesenchymal characteristics, enabling invasion and metastasis in cancer.",
        es: "EMT es un proceso donde células epiteliales polarizadas pierden su adhesión célula-célula y adquieren características mesenquimatosas, permitiendo invasión y metástasis en cáncer.",
        de: "EMT ist ein Prozess, bei dem polarisierte epitheliale Zellen ihre Zell-Zell-Adhäsion verlieren und mesenchymale Eigenschaften erwerben, was Invasion und Metastase ermöglicht.",
        nl: "EMT is een proces waarbij gepolariseerde epitheliale cellen hun cel-cel adhesie verliezen en mesenchymale eigenschappen verwerven, invasie en metastase in kanker mogelijk makend."
      }
    },
    {
      question: {
        en: "What is the tumor microenvironment?",
        es: "¿Qué es el microambiente tumoral?",
        de: "Was ist die Tumormikroumgebung?",
        nl: "Wat is de tumormicro-omgeving?"
      },
      options: [
        { en: "Complex ecosystem of cancer cells, stromal cells, blood vessels, and immune cells surrounding tumors", es: "Ecosistema complejo de células cancerosas, células estromales, vasos sanguíneos y células inmunes rodeando tumores", de: "Komplexes Ökosystem aus Krebszellen, Stromazellen, Blutgefäßen und Immunzellen um Tumoren", nl: "Complex ecosysteem van kankercellen, stromale cellen, bloedvaten en immuuncellen rondom tumoren" },
        { en: "Only cancer cells within tumors", es: "Solo células cancerosas dentro de tumores", de: "Nur Krebszellen innerhalb von Tumoren", nl: "Alleen kankercellen binnen tumoren" },
        { en: "Normal healthy tissue surrounding tumors", es: "Tejido sano normal rodeando tumores", de: "Normales gesundes Gewebe um Tumoren", nl: "Normaal gezond weefsel rond tumoren" },
        { en: "Laboratory conditions for growing cancer cells", es: "Condiciones de laboratorio para cultivar células cancerosas", de: "Laborbedingungen für das Züchten von Krebszellen", nl: "Laboratoriumomstandigheden voor het kweken van kankercellen" }
      ],
      correct: 0,
      explanation: {
        en: "The tumor microenvironment consists of various cell types including fibroblasts, immune cells, endothelial cells, and extracellular matrix components that interact with cancer cells.",
        es: "El microambiente tumoral consiste en varios tipos celulares incluyendo fibroblastos, células inmunes, células endoteliales y componentes de matriz extracelular que interactúan con células cancerosas.",
        de: "Die Tumormikroumgebung besteht aus verschiedenen Zelltypen einschließlich Fibroblasten, Immunzellen, Endothelzellen und extrazellulären Matrixkomponenten.",
        nl: "De tumormicro-omgeving bestaat uit verschillende celtypen inclusief fibroblasten, immuuncellen, endotheliale cellen en extracellulaire matrixcomponenten die interacteren met kankercellen."
      }
    },
    {
      question: {
        en: "What is targeted therapy in cancer treatment?",
        es: "¿Qué es la terapia dirigida en el tratamiento del cáncer?",
        de: "Was ist zielgerichtete Therapie in der Krebsbehandlung?",
        nl: "Wat is gerichte therapie in kankerbehandeling?"
      },
      options: [
        { en: "Treatment approach using drugs that specifically target molecular alterations in cancer cells", es: "Enfoque de tratamiento usando medicamentos que específicamente se dirigen a alteraciones moleculares en células cancerosas", de: "Behandlungsansatz mit Medikamenten, die spezifisch molekulare Veränderungen in Krebszellen angreifen", nl: "Behandelbenadering met medicijnen die specifiek moleculaire veranderingen in kankercellen targeten" },
        { en: "Surgical removal of tumors only", es: "Solo remoción quirúrgica de tumores", de: "Nur chirurgische Tumorentfernung", nl: "Alleen chirurgische tumorverwijdering" },
        { en: "Radiation therapy exclusively", es: "Exclusivamente radioterapia", de: "Ausschließlich Strahlentherapie", nl: "Uitsluitend radiotherapie" },
        { en: "General chemotherapy for all cancers", es: "Quimioterapia general para todos los cánceres", de: "Allgemeine Chemotherapie für alle Krebsarten", nl: "Algemene chemotherapie voor alle kankers" }
      ],
      correct: 0,
      explanation: {
        en: "Targeted therapy uses drugs designed to interfere with specific molecules involved in tumor growth and progression, offering more precise treatment with potentially fewer side effects.",
        es: "La terapia dirigida usa medicamentos diseñados para interferir con moléculas específicas involucradas en crecimiento y progresión tumoral, ofreciendo tratamiento más preciso.",
        de: "Zielgerichtete Therapie nutzt Medikamente, die darauf ausgelegt sind, spezifische Moleküle zu stören, die an Tumorwachstum und -progression beteiligt sind.",
        nl: "Gerichte therapie gebruikt medicijnen ontworpen om specifieke moleculen te verstoren die betrokken zijn bij tumorgroei en -progressie, meer precieze behandeling biedend."
      }
    },
    {
      question: {
        en: "What is immunotherapy in cancer treatment?",
        es: "¿Qué es la inmunoterapia en el tratamiento del cáncer?",
        de: "Was ist Immuntherapie in der Krebsbehandlung?",
        nl: "Wat is immunotherapie in kankerbehandeling?"
      },
      options: [
        { en: "Treatment that harnesses the body's immune system to fight cancer", es: "Tratamiento que aprovecha el sistema inmunitario del cuerpo para combatir el cáncer", de: "Behandlung, die das körpereigene Immunsystem nutzt, um Krebs zu bekämpfen", nl: "Behandeling die het lichaamseigen immuunsysteem benut om kanker te bestrijden" },
        { en: "Surgery to remove immune organs", es: "Cirugía para remover órganos inmunes", de: "Operation zur Entfernung von Immunorganen", nl: "Chirurgie om immuunorganen te verwijderen" },
        { en: "Suppression of all immune responses", es: "Supresión de todas las respuestas inmunes", de: "Unterdrückung aller Immunantworten", nl: "Onderdrukking van alle immuunreacties" },
        { en: "Antibiotic treatment for infections", es: "Tratamiento antibiótico para infecciones", de: "Antibiotika-Behandlung für Infektionen", nl: "Antibiotische behandeling voor infecties" }
      ],
      correct: 0,
      explanation: {
        en: "Immunotherapy works by stimulating or enhancing the immune system's ability to recognize and attack cancer cells, including checkpoint inhibitors and CAR-T cell therapy.",
        es: "La inmunoterapia funciona estimulando o mejorando la capacidad del sistema inmunitario para reconocer y atacar células cancerosas, incluyendo inhibidores de puntos de control.",
        de: "Immuntherapie funktioniert durch Stimulierung oder Verbesserung der Fähigkeit des Immunsystems, Krebszellen zu erkennen und anzugreifen.",
        nl: "Immunotherapie werkt door het stimuleren of verbeteren van het vermogen van het immuunsysteem om kankercellen te herkennen en aan te vallen."
      }
    },
    {
      question: {
        en: "What is the significance of driver mutations in cancer?",
        es: "¿Cuál es la importancia de las mutaciones conductoras en el cáncer?",
        de: "Was ist die Bedeutung von Treibermutationen bei Krebs?",
        nl: "Wat is het belang van bestuursmutaties bij kanker?"
      },
      options: [
        { en: "Mutations that directly contribute to cancer development and progression", es: "Mutaciones que contribuyen directamente al desarrollo y progresión del cáncer", de: "Mutationen, die direkt zur Krebsentwicklung und -progression beitragen", nl: "Mutaties die direct bijdragen aan kankerontwikkeling en -progressie" },
        { en: "Mutations that have no effect on cancer", es: "Mutaciones que no tienen efecto en el cáncer", de: "Mutationen, die keinen Einfluss auf Krebs haben", nl: "Mutaties die geen effect hebben op kanker" },
        { en: "Mutations that always prevent cancer", es: "Mutaciones que siempre previenen el cáncer", de: "Mutationen, die immer Krebs verhindern", nl: "Mutaties die altijd kanker voorkomen" },
        { en: "Random mutations with unknown function", es: "Mutaciones aleatorias con función desconocida", de: "Zufällige Mutationen mit unbekannter Funktion", nl: "Willekeurige mutaties met onbekende functie" }
      ],
      correct: 0,
      explanation: {
        en: "Driver mutations are key genetic alterations that provide cancer cells with growth advantages and drive tumor development, distinguished from passenger mutations that don't contribute to cancer.",
        es: "Las mutaciones conductoras son alteraciones genéticas clave que proporcionan ventajas de crecimiento a células cancerosas y impulsan el desarrollo tumoral.",
        de: "Treibermutationen sind wichtige genetische Veränderungen, die Krebszellen Wachstumsvorteile verschaffen und Tumorentwicklung antreiben.",
        nl: "Bestuursmutaties zijn belangrijke genetische veranderingen die kankercellen groeivoordelen verschaffen en tumorontwikkeling aandrijven."
      }
    },
    {
      question: {
        en: "What is the Hardy-Weinberg equilibrium principle?",
        es: "¿Cuál es el principio del equilibrio de Hardy-Weinberg?",
        de: "Was ist das Hardy-Weinberg-Gleichgewichtsprinzip?",
        nl: "Wat is het Hardy-Weinberg evenwichtsprincipe?"
      },
      options: [
        { en: "Model predicting allele and genotype frequencies in populations under specific conditions", es: "Modelo prediciendo frecuencias alélicas y genotípicas en poblaciones bajo condiciones específicas", de: "Modell zur Vorhersage von Allel- und Genotypfrequenzen in Populationen unter bestimmten Bedingungen", nl: "Model dat allel- en genotype frequenties voorspelt in populaties onder specifieke omstandigheden" },
        { en: "Law governing DNA replication accuracy", es: "Ley que gobierna la precisión de replicación del ADN", de: "Gesetz, das die DNA-Replikationsgenauigkeit regelt", nl: "Wet die DNA-replicatie nauwkeurigheid regelt" },
        { en: "Principle of protein folding", es: "Principio de plegamiento de proteínas", de: "Prinzip der Proteinfaltung", nl: "Principe van eiwitvouwing" },
        { en: "Rule for chromosome segregation", es: "Regla para segregación cromosómica", de: "Regel für Chromosomentrennung", nl: "Regel voor chromosoomsegregatie" }
      ],
      correct: 0,
      explanation: {
        en: "The Hardy-Weinberg equilibrium describes conditions under which allele frequencies remain constant across generations: no mutation, migration, selection, or genetic drift, and random mating.",
        es: "El equilibrio de Hardy-Weinberg describe condiciones bajo las cuales las frecuencias alélicas permanecen constantes a través de generaciones: sin mutación, migración, selección o deriva genética.",
        de: "Das Hardy-Weinberg-Gleichgewicht beschreibt Bedingungen, unter denen Allelfrequenzen über Generationen konstant bleiben: keine Mutation, Migration, Selektion oder genetische Drift.",
        nl: "Het Hardy-Weinberg evenwicht beschrijft omstandigheden waarbij allelfrequenties constant blijven over generaties: geen mutatie, migratie, selectie of genetische drift."
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
        { en: "Random changes in allele frequencies in populations, especially small ones", es: "Cambios aleatorios en frecuencias alélicas en poblaciones, especialmente pequeñas", de: "Zufällige Änderungen der Allelfrequenzen in Populationen, besonders kleinen", nl: "Willekeurige veranderingen in allelfrequenties in populaties, vooral kleine" },
        { en: "Directed evolution toward specific traits", es: "Evolución dirigida hacia rasgos específicos", de: "Gerichtete Evolution zu bestimmten Merkmalen", nl: "Gerichte evolutie naar specifieke eigenschappen" },
        { en: "Migration of individuals between populations", es: "Migración de individuos entre poblaciones", de: "Migration von Individuen zwischen Populationen", nl: "Migratie van individuen tussen populaties" },
        { en: "Increase in genetic diversity over time", es: "Aumento en diversidad genética con el tiempo", de: "Zunahme der genetischen Vielfalt über die Zeit", nl: "Toename in genetische diversiteit over tijd" }
      ],
      correct: 0,
      explanation: {
        en: "Genetic drift refers to random fluctuations in allele frequencies from generation to generation, with stronger effects in smaller populations, potentially leading to allele fixation or loss.",
        es: "La deriva genética se refiere a fluctuaciones aleatorias en frecuencias alélicas de generación en generación, con efectos más fuertes en poblaciones más pequeñas.",
        de: "Genetische Drift bezieht sich auf zufällige Schwankungen der Allelfrequenzen von Generation zu Generation, mit stärkeren Effekten in kleineren Populationen.",
        nl: "Genetische drift verwijst naar willekeurige fluctuaties in allelfrequenties van generatie tot generatie, met sterkere effecten in kleinere populaties."
      }
    },
    {
      question: {
        en: "What is the bottleneck effect in population genetics?",
        es: "¿Qué es el efecto cuello de botella en genética de poblaciones?",
        de: "Was ist der Flaschenhals-Effekt in der Populationsgenetik?",
        nl: "Wat is het bottleneck-effect in populatiegenetica?"
      },
      options: [
        { en: "Severe reduction in population size causing loss of genetic diversity", es: "Reducción severa en tamaño poblacional causando pérdida de diversidad genética", de: "Starke Reduzierung der Populationsgröße, die zu Verlust genetischer Vielfalt führt", nl: "Ernstige vermindering in populatiegrootte die verlies van genetische diversiteit veroorzaakt" },
        { en: "Increase in population growth rate", es: "Aumento en tasa de crecimiento poblacional", de: "Zunahme der Populationswachstumsrate", nl: "Toename in populatie groeisnelheid" },
        { en: "Enhanced genetic diversity through mixing", es: "Diversidad genética mejorada a través de mezcla", de: "Verbesserte genetische Vielfalt durch Vermischung", nl: "Verbeterde genetische diversiteit door vermenging" },
        { en: "Stable population size over time", es: "Tamaño poblacional estable con el tiempo", de: "Stabile Populationsgröße über die Zeit", nl: "Stabiele populatiegrootte over tijd" }
      ],
      correct: 0,
      explanation: {
        en: "The bottleneck effect occurs when a population's size is significantly reduced for at least one generation, leading to decreased genetic diversity and increased genetic drift effects.",
        es: "El efecto cuello de botella ocurre cuando el tamaño de una población se reduce significativamente por al menos una generación, llevando a diversidad genética disminuida.",
        de: "Der Flaschenhals-Effekt tritt auf, wenn die Größe einer Population für mindestens eine Generation erheblich reduziert wird, was zu verringerter genetischer Vielfalt führt.",
        nl: "Het bottleneck-effect treedt op wanneer de grootte van een populatie significant vermindert voor ten minste één generatie, leidend tot verminderde genetische diversiteit."
      }
    },
    {
      question: {
        en: "What is the founder effect?",
        es: "¿Qué es el efecto fundador?",
        de: "Was ist der Gründereffekt?",
        nl: "Wat is het stichtereffect?"
      },
      options: [
        { en: "Reduced genetic diversity when small group establishes new population", es: "Diversidad genética reducida cuando un grupo pequeño establece nueva población", de: "Reduzierte genetische Vielfalt, wenn eine kleine Gruppe eine neue Population gründet", nl: "Verminderde genetische diversiteit wanneer kleine groep nieuwe populatie vestigt" },
        { en: "Increase in mutation rate in new populations", es: "Aumento en tasa de mutación en nuevas poblaciones", de: "Zunahme der Mutationsrate in neuen Populationen", nl: "Toename in mutatiesnelheid in nieuwe populaties" },
        { en: "Enhanced fitness in founding individuals", es: "Aptitud mejorada en individuos fundadores", de: "Verbesserte Fitness in Gründungsindividuen", nl: "Verbeterde fitness in stichtende individuen" },
        { en: "Stabilization of genetic frequencies", es: "Estabilización de frecuencias genéticas", de: "Stabilisierung genetischer Frequenzen", nl: "Stabilisatie van genetische frequenties" }
      ],
      correct: 0,
      explanation: {
        en: "The founder effect describes the loss of genetic variation when a new population is established by a small number of individuals from a larger population, creating genetic bottlenecks.",
        es: "El efecto fundador describe la pérdida de variación genética cuando una nueva población es establecida por un pequeño número de individuos de una población más grande.",
        de: "Der Gründereffekt beschreibt den Verlust genetischer Variation, wenn eine neue Population von einer kleinen Anzahl von Individuen aus einer größeren Population gegründet wird.",
        nl: "Het stichtereffect beschrijft het verlies van genetische variatie wanneer een nieuwe populatie gevestigd wordt door een klein aantal individuen uit een grotere populatie."
      }
    },
    {
      question: {
        en: "What is gene flow in population genetics?",
        es: "¿Qué es el flujo génico en genética de poblaciones?",
        de: "Was ist Genfluss in der Populationsgenetik?",
        nl: "Wat is genenstroom in populatiegenetica?"
      },
      options: [
        { en: "Transfer of genetic material between populations through migration and interbreeding", es: "Transferencia de material genético entre poblaciones a través de migración y cruzamiento", de: "Übertragung genetischen Materials zwischen Populationen durch Migration und Kreuzung", nl: "Overdracht van genetisch materiaal tussen populaties door migratie en kruising" },
        { en: "Movement of genes within chromosomes", es: "Movimiento de genes dentro de cromosomas", de: "Bewegung von Genen innerhalb von Chromosomen", nl: "Beweging van genen binnen chromosomen" },
        { en: "Gene expression regulation", es: "Regulación de expresión génica", de: "Regulation der Genexpression", nl: "Regulatie van genexpressie" },
        { en: "DNA replication process", es: "Proceso de replicación de ADN", de: "DNA-Replikationsprozess", nl: "DNA-replicatieproces" }
      ],
      correct: 0,
      explanation: {
        en: "Gene flow involves the exchange of genes between populations through migration of individuals and subsequent reproduction, potentially homogenizing allele frequencies across populations.",
        es: "El flujo génico involucra el intercambio de genes entre poblaciones a través de migración de individuos y reproducción subsecuente, potencialmente homogeneizando frecuencias alélicas.",
        de: "Genfluss beinhaltet den Austausch von Genen zwischen Populationen durch Migration von Individuen und nachfolgende Fortpflanzung, was Allelfrequenzen homogenisieren kann.",
        nl: "Genenstroom behelst de uitwisseling van genen tussen populaties door migratie van individuen en daaropvolgende voortplanting, mogelijk allelfrequenties homogeniserend."
      }
    },
    {
      question: {
        en: "What is FST in population genetics?",
        es: "¿Qué es FST en genética de poblaciones?",
        de: "Was ist FST in der Populationsgenetik?",
        nl: "Wat is FST in populatiegenetica?"
      },
      options: [
        { en: "Fixation index measuring genetic differentiation between populations", es: "Índice de fijación midiendo diferenciación genética entre poblaciones", de: "Fixationsindex zur Messung genetischer Differenzierung zwischen Populationen", nl: "Fixatie-index die genetische differentiatie tussen populaties meet" },
        { en: "Gene mutation frequency in populations", es: "Frecuencia de mutación génica en poblaciones", de: "Häufigkeit von Genmutationen in Populationen", nl: "Genmutatie frequentie in populaties" },
        { en: "Population growth rate coefficient", es: "Coeficiente de tasa de crecimiento poblacional", de: "Koeffizient der Populationswachstumsrate", nl: "Populatiegroei coëfficiënt" },
        { en: "Selection pressure measurement", es: "Medición de presión de selección", de: "Messung des Selektionsdrucks", nl: "Selectiedruk meting" }
      ],
      correct: 0,
      explanation: {
        en: "FST quantifies population structure by measuring the proportion of genetic diversity due to allele frequency differences between populations relative to the total genetic diversity.",
        es: "FST cuantifica la estructura poblacional midiendo la proporción de diversidad genética debido a diferencias de frecuencias alélicas entre poblaciones relativa a la diversidad genética total.",
        de: "FST quantifiziert Populationsstruktur durch Messung des Anteils genetischer Vielfalt aufgrund von Allelfrequenzunterschieden zwischen Populationen relativ zur gesamten genetischen Vielfalt.",
        nl: "FST kwantificeert populatiestructuur door het meten van het aandeel genetische diversiteit door allelfrequentieverschillen tussen populaties relatief tot de totale genetische diversiteit."
      }
    },
    {
      question: {
        en: "What is effective population size (Ne)?",
        es: "¿Qué es el tamaño efectivo de población (Ne)?",
        de: "Was ist die effektive Populationsgröße (Ne)?",
        nl: "Wat is de effectieve populatiegrootte (Ne)?"
      },
      options: [
        { en: "Number of individuals contributing to the gene pool of the next generation", es: "Número de individuos contribuyendo al acervo génico de la próxima generación", de: "Anzahl der Individuen, die zum Genpool der nächsten Generation beitragen", nl: "Aantal individuen dat bijdraagt aan de genenpool van de volgende generatie" },
        { en: "Total number of individuals in a population", es: "Número total de individuos en una población", de: "Gesamtzahl der Individuen in einer Population", nl: "Totaal aantal individuen in een populatie" },
        { en: "Number of breeding pairs only", es: "Solo número de parejas reproductoras", de: "Nur Anzahl der Brutpaare", nl: "Alleen aantal broedparen" },
        { en: "Population density per unit area", es: "Densidad poblacional por unidad de área", de: "Populationsdichte pro Flächeneinheit", nl: "Populatiedichtheid per oppervlakte-eenheid" }
      ],
      correct: 0,
      explanation: {
        en: "Effective population size represents the number of individuals in an idealized population that would experience the same amount of genetic drift as the population being studied.",
        es: "El tamaño efectivo de población representa el número de individuos en una población idealizada que experimentaría la misma cantidad de deriva genética que la población estudiada.",
        de: "Die effektive Populationsgröße stellt die Anzahl der Individuen in einer idealisierten Population dar, die die gleiche Menge genetischer Drift erfahren würde wie die untersuchte Population.",
        nl: "Effectieve populatiegrootte vertegenwoordigt het aantal individuen in een geïdealiseerde populatie die dezelfde hoeveelheid genetische drift zou ervaren als de bestudeerde populatie."
      }
    },
    {
      question: {
        en: "What is balancing selection?",
        es: "¿Qué es la selección balanceada?",
        de: "Was ist balancierende Selektion?",
        nl: "Wat is balancerende selectie?"
      },
      options: [
        { en: "Selection mechanism maintaining multiple alleles in a population at intermediate frequencies", es: "Mecanismo de selección manteniendo múltiples alelos en una población a frecuencias intermedias", de: "Selektionsmechanismus, der mehrere Allele in einer Population bei mittleren Frequenzen aufrechterhält", nl: "Selectiemechanisme dat meerdere allelen in een populatie op tussenfrequenties behoudt" },
        { en: "Selection favoring extreme phenotypes", es: "Selección favoreciendo fenotipos extremos", de: "Selektion, die extreme Phänotypen bevorzugt", nl: "Selectie die extreme fenotypes bevoordeelt" },
        { en: "Random elimination of genetic variants", es: "Eliminación aleatoria de variantes genéticas", de: "Zufällige Elimination genetischer Varianten", nl: "Willekeurige eliminatie van genetische varianten" },
        { en: "Selection for a single optimal genotype", es: "Selección para un genotipo óptimo único", de: "Selektion für einen einzigen optimalen Genotyp", nl: "Selectie voor één optimaal genotype" }
      ],
      correct: 0,
      explanation: {
        en: "Balancing selection includes mechanisms like heterozygote advantage, frequency-dependent selection, and spatial/temporal variation that maintain genetic diversity in populations.",
        es: "La selección balanceada incluye mecanismos como ventaja del heterocigoto, selección dependiente de frecuencia y variación espacial/temporal que mantienen diversidad genética.",
        de: "Balancierende Selektion umfasst Mechanismen wie Heterozygotenvorteil, frequenzabhängige Selektion und räumlich/zeitliche Variation, die genetische Vielfalt in Populationen aufrechterhalten.",
        nl: "Balancerende selectie omvat mechanismen zoals heterozygoot voordeel, frequentie-afhankelijke selectie en ruimtelijke/temporele variatie die genetische diversiteit in populaties behouden."
      }
    },
    {
      question: {
        en: "What is directional selection?",
        es: "¿Qué es la selección direccional?",
        de: "Was ist gerichtete Selektion?",
        nl: "Wat is directionele selectie?"
      },
      options: [
        { en: "Selection favoring one extreme phenotype over others", es: "Selección favoreciendo un fenotipo extremo sobre otros", de: "Selektion, die einen extremen Phänotyp gegenüber anderen bevorzugt", nl: "Selectie die één extreem fenotype boven anderen bevoordeelt" },
        { en: "Selection maintaining intermediate phenotypes", es: "Selección manteniendo fenotipos intermedios", de: "Selektion, die mittlere Phänotypen aufrechterhält", nl: "Selectie die tussenliggende fenotypes behoudt" },
        { en: "Random changes in allele frequencies", es: "Cambios aleatorios en frecuencias alélicas", de: "Zufällige Änderungen der Allelfrequenzen", nl: "Willekeurige veranderingen in allelfrequenties" },
        { en: "Selection against all variants equally", es: "Selección contra todas las variantes por igual", de: "Selektion gegen alle Varianten gleichermaßen", nl: "Selectie tegen alle varianten gelijk" }
      ],
      correct: 0,
      explanation: {
        en: "Directional selection occurs when environmental conditions favor individuals with a particular extreme phenotype, leading to a shift in the population's phenotypic distribution over time.",
        es: "La selección direccional ocurre cuando las condiciones ambientales favorecen individuos con un fenotipo extremo particular, llevando a un cambio en la distribución fenotípica poblacional.",
        de: "Gerichtete Selektion tritt auf, wenn Umweltbedingungen Individuen mit einem bestimmten extremen Phänotyp begünstigen, was zu einer Verschiebung in der phänotypischen Verteilung führt.",
        nl: "Directionele selectie treedt op wanneer omgevingsomstandigheden individuen met een bepaald extreem fenotype bevoordelen, leidend tot een verschuiving in de fenotypische verdeling."
      }
    },
    {
      question: {
        en: "What is disruptive selection?",
        es: "¿Qué es la selección disruptiva?",
        de: "Was ist disruptive Selektion?",
        nl: "Wat is verstorende selectie?"
      },
      options: [
        { en: "Selection favoring extreme phenotypes while selecting against intermediate ones", es: "Selección favoreciendo fenotipos extremos mientras selecciona contra los intermedios", de: "Selektion, die extreme Phänotypen bevorzugt und gegen mittlere selektiert", nl: "Selectie die extreme fenotypes bevoordeelt terwijl geselecteerd wordt tegen tussenliggende" },
        { en: "Selection for intermediate phenotypes only", es: "Selección solo para fenotipos intermedios", de: "Selektion nur für mittlere Phänotypen", nl: "Selectie alleen voor tussenliggende fenotypes" },
        { en: "Random elimination of all phenotypes", es: "Eliminación aleatoria de todos los fenotipos", de: "Zufällige Elimination aller Phänotypen", nl: "Willekeurige eliminatie van alle fenotypes" },
        { en: "Selection favoring only one extreme", es: "Selección favoreciendo solo un extremo", de: "Selektion, die nur ein Extrem bevorzugt", nl: "Selectie die alleen één uiterste bevoordeelt" }
      ],
      correct: 0,
      explanation: {
        en: "Disruptive selection occurs when environmental conditions favor individuals at both extremes of a phenotypic distribution, potentially leading to population splitting or increased genetic diversity.",
        es: "La selección disruptiva ocurre cuando las condiciones ambientales favorecen individuos en ambos extremos de una distribución fenotípica, potencialmente llevando a división poblacional.",
        de: "Disruptive Selektion tritt auf, wenn Umweltbedingungen Individuen an beiden Extremen einer phänotypischen Verteilung begünstigen, was zu Populationsspaltung führen kann.",
        nl: "Verstorende selectie treedt op wanneer omgevingsomstandigheden individuen aan beide uitersten van een fenotypische verdeling bevoordelen, mogelijk leidend tot populatiesplitsing."
      }
    },
    {
      question: {
        en: "What is the coalescent theory?",
        es: "¿Qué es la teoría coalescente?",
        de: "Was ist die Koaleszenztheorie?",
        nl: "Wat is de coalescente theorie?"
      },
      options: [
        { en: "Mathematical model tracing lineages backward to common ancestors", es: "Modelo matemático rastreando linajes hacia atrás hasta ancestros comunes", de: "Mathematisches Modell, das Abstammungslinien rückwärts zu gemeinsamen Vorfahren verfolgt", nl: "Wiskundig model dat afstammingslijnen terugvolgt naar gemeenschappelijke voorouders" },
        { en: "Theory of protein-protein interactions", es: "Teoría de interacciones proteína-proteína", de: "Theorie von Protein-Protein-Wechselwirkungen", nl: "Theorie van eiwit-eiwit interacties" },
        { en: "Model of gene expression regulation", es: "Modelo de regulación de expresión génica", de: "Modell der Genexpressionsregulation", nl: "Model van genexpressie regulatie" },
        { en: "Framework for predicting mutation rates", es: "Marco para predecir tasas de mutación", de: "Rahmen zur Vorhersage von Mutationsraten", nl: "Raamwerk voor het voorspellen van mutatiesnelheden" }
      ],
      correct: 0,
      explanation: {
        en: "Coalescent theory models the ancestry of genes in a population by working backward in time, providing insights into population history, effective size, and demographic events.",
        es: "La teoría coalescente modela la ancestría de genes en una población trabajando hacia atrás en el tiempo, proporcionando insights sobre historia poblacional, tamaño efectivo y eventos demográficos.",
        de: "Die Koaleszenztheorie modelliert die Abstammung von Genen in einer Population durch Rückwärtsarbeitung in der Zeit, und bietet Einblicke in Populationsgeschichte und demografische Ereignisse.",
        nl: "Coalescente theorie modelleert de voorouders van genen in een populatie door achterwaarts in tijd te werken, inzichten verschaffend in populatiegeschiedenis en demografische gebeurtenissen."
      }
    },
    {
      question: {
        en: "What is population stratification in genomic studies?",
        es: "¿Qué es la estratificación poblacional en estudios genómicos?",
        de: "Was ist Populationsstratifizierung in genomischen Studien?",
        nl: "Wat is populatiestratificatie in genomische studies?"
      },
      options: [
        { en: "Systematic ancestry differences between cases and controls causing spurious associations", es: "Diferencias sistemáticas de ancestría entre casos y controles causando asociaciones espurias", de: "Systematische Abstammungsunterschiede zwischen Fällen und Kontrollen, die falsche Assoziationen verursachen", nl: "Systematische afstammingsverschillen tussen gevallen en controles die schijnbare associaties veroorzaken" },
        { en: "Random sampling of individuals from populations", es: "Muestreo aleatorio de individuos de poblaciones", de: "Zufällige Stichprobennahme von Individuen aus Populationen", nl: "Willekeurige steekproeftrekking van individuen uit populaties" },
        { en: "Equal representation of all ethnic groups", es: "Representación igual de todos los grupos étnicos", de: "Gleiche Vertretung aller ethnischen Gruppen", nl: "Gelijke vertegenwoordiging van alle etnische groepen" },
        { en: "Standardization of sample collection methods", es: "Estandarización de métodos de recolección de muestras", de: "Standardisierung von Probenentnahmemethoden", nl: "Standaardisatie van steekproefverzameling methoden" }
      ],
      correct: 0,
      explanation: {
        en: "Population stratification occurs when there are systematic differences in ancestry between cases and controls in association studies, potentially leading to false positive or negative results.",
        es: "La estratificación poblacional ocurre cuando hay diferencias sistemáticas en ancestría entre casos y controles en estudios de asociación, potencialmente llevando a resultados falsos positivos o negativos.",
        de: "Populationsstratifizierung tritt auf, wenn systematische Abstammungsunterschiede zwischen Fällen und Kontrollen in Assoziationsstudien bestehen, was zu falsch-positiven oder -negativen Ergebnissen führen kann.",
        nl: "Populatiestratificatie treedt op wanneer er systematische verschillen in afstamming bestaan tussen gevallen en controles in associatiestudies, mogelijk leidend tot vals-positieve of -negatieve resultaten."
      }
    },
    {
      question: {
        en: "What is linkage disequilibrium (LD)?",
        es: "¿Qué es el desequilibrio de enlace (LD)?",
        de: "Was ist Kopplungsungleichgewicht (LD)?",
        nl: "Wat is koppelingsdisequilibrium (LD)?"
      },
      options: [
        { en: "Non-random association of alleles at different loci in populations", es: "Asociación no aleatoria de alelos en diferentes loci en poblaciones", de: "Nicht-zufällige Assoziation von Allelen an verschiedenen Loci in Populationen", nl: "Niet-willekeurige associatie van allelen op verschillende loci in populaties" },
        { en: "Random distribution of alleles across chromosomes", es: "Distribución aleatoria de alelos a través de cromosomas", de: "Zufällige Verteilung von Allelen über Chromosomen", nl: "Willekeurige verdeling van allelen over chromosomen" },
        { en: "Equal frequencies of all allelic combinations", es: "Frecuencias iguales de todas las combinaciones alélicas", de: "Gleiche Frequenzen aller allelischen Kombinationen", nl: "Gelijke frequenties van alle allelische combinaties" },
        { en: "Independent assortment of all genetic markers", es: "Distribución independiente de todos los marcadores genéticos", de: "Unabhängige Verteilung aller genetischen Marker", nl: "Onafhankelijke verdeling van alle genetische markers" }
      ],
      correct: 0,
      explanation: {
        en: "Linkage disequilibrium describes the tendency for alleles at nearby loci to be inherited together more often than would be expected by chance, influenced by recombination, population history, and selection.",
        es: "El desequilibrio de enlace describe la tendencia de alelos en loci cercanos a ser heredados juntos más a menudo de lo esperado por casualidad, influenciado por recombinación, historia poblacional y selección.",
        de: "Kopplungsungleichgewicht beschreibt die Tendenz, dass Allele an nahegelegenen Loci häufiger zusammen vererbt werden, als zufällig erwartet würde, beeinflusst durch Rekombination, Populationsgeschichte und Selektion.",
        nl: "Koppelingsdisequilibrium beschrijft de tendens van allelen op nabijgelegen loci om vaker samen geërfd te worden dan verwacht door toeval, beïnvloed door recombinatie, populatiegeschiedenis en selectie."
      }
    },
    {
      question: {
        en: "What is the molecular clock hypothesis?",
        es: "¿Qué es la hipótesis del reloj molecular?",
        de: "Was ist die Molekularuhr-Hypothese?",
        nl: "Wat is de moleculaire klok hypothese?"
      },
      options: [
        { en: "Concept that molecular evolution occurs at relatively constant rates over time", es: "Concepto de que la evolución molecular ocurre a tasas relativamente constantes con el tiempo", de: "Konzept, dass molekulare Evolution mit relativ konstanten Raten über die Zeit stattfindet", nl: "Concept dat moleculaire evolutie plaatsvindt met relatief constante snelheden over tijd" },
        { en: "Theory that all genes mutate simultaneously", es: "Teoría de que todos los genes mutan simultáneamente", de: "Theorie, dass alle Gene gleichzeitig mutieren", nl: "Theorie dat alle genen gelijktijdig muteren" },
        { en: "Model of circadian rhythm regulation", es: "Modelo de regulación del ritmo circadiano", de: "Modell der zirkadianen Rhythmusregulation", nl: "Model van circadiaanse ritme regulatie" },
        { en: "Framework for predicting protein folding times", es: "Marco para predecir tiempos de plegamiento de proteínas", de: "Rahmen zur Vorhersage von Proteinfaltungszeiten", nl: "Raamwerk voor het voorspellen van eiwitvouwtijden" }
      ],
      correct: 0,
      explanation: {
        en: "The molecular clock hypothesis proposes that neutral mutations accumulate at roughly constant rates, allowing estimation of divergence times between species and populations from genetic sequence data.",
        es: "La hipótesis del reloj molecular propone que las mutaciones neutrales se acumulan a tasas aproximadamente constantes, permitiendo estimación de tiempos de divergencia entre especies y poblaciones.",
        de: "Die Molekularuhr-Hypothese schlägt vor, dass sich neutrale Mutationen mit etwa konstanten Raten ansammeln, was die Schätzung von Divergenzzeiten zwischen Arten und Populationen ermöglicht.",
        nl: "De moleculaire klok hypothese stelt voor dat neutrale mutaties accumuleren met ongeveer constante snelheden, schattingen van divergentietijden tussen soorten en populaties mogelijk makend."
      }
    },
    {
      question: {
        en: "What is adaptive introgression?",
        es: "¿Qué es la introgresión adaptativa?",
        de: "Was ist adaptive Introgression?",
        nl: "Wat is adaptieve introgressie?"
      },
      options: [
        { en: "Transfer of beneficial alleles between species or populations through hybridization", es: "Transferencia de alelos beneficiosos entre especies o poblaciones a través de hibridización", de: "Übertragung vorteilhafter Allele zwischen Arten oder Populationen durch Hybridisierung", nl: "Overdracht van gunstige allelen tussen soorten of populaties door hybridisatie" },
        { en: "Random genetic drift between isolated populations", es: "Deriva genética aleatoria entre poblaciones aisladas", de: "Zufällige genetische Drift zwischen isolierten Populationen", nl: "Willekeurige genetische drift tussen geïsoleerde populaties" },
        { en: "Accumulation of deleterious mutations", es: "Acumulación de mutaciones deletéreas", de: "Ansammlung schädlicher Mutationen", nl: "Ophoping van schadelijke mutaties" },
        { en: "Loss of genetic diversity through bottlenecks", es: "Pérdida de diversidad genética a través de cuellos de botella", de: "Verlust genetischer Vielfalt durch Engpässe", nl: "Verlies van genetische diversiteit door bottlenecks" }
      ],
      correct: 0,
      explanation: {
        en: "Adaptive introgression involves the incorporation of advantageous genetic variants from one population or species into another through gene flow, contributing to local adaptation and evolution.",
        es: "La introgresión adaptativa involucra la incorporación de variantes genéticas ventajosas de una población o especie a otra a través del flujo génico, contribuyendo a adaptación local y evolución.",
        de: "Adaptive Introgression beinhaltet die Eingliederung vorteilhafter genetischer Varianten von einer Population oder Art in eine andere durch Genfluss, was zu lokaler Anpassung und Evolution beiträgt.",
        nl: "Adaptieve introgressie behelst de incorporatie van voordelige genetische varianten van één populatie of soort in een andere door genenstroom, bijdragend aan lokale aanpassing en evolutie."
      }
    },
    {
      question: {
        en: "What is the neutral theory of molecular evolution?",
        es: "¿Qué es la teoría neutral de la evolución molecular?",
        de: "Was ist die neutrale Theorie der molekularen Evolution?",
        nl: "Wat is de neutrale theorie van moleculaire evolutie?"
      },
      options: [
        { en: "Theory that most evolutionary changes at molecular level are due to neutral mutations and genetic drift", es: "Teoría de que la mayoría de cambios evolutivos a nivel molecular se deben a mutaciones neutrales y deriva genética", de: "Theorie, dass die meisten evolutionären Veränderungen auf molekularer Ebene auf neutrale Mutationen und genetische Drift zurückzuführen sind", nl: "Theorie dat de meeste evolutionaire veranderingen op moleculair niveau te wijten zijn aan neutrale mutaties en genetische drift" },
        { en: "Model where all mutations are beneficial", es: "Modelo donde todas las mutaciones son beneficiosas", de: "Modell, bei dem alle Mutationen vorteilhaft sind", nl: "Model waarbij alle mutaties voordelig zijn" },
        { en: "Theory that selection drives all molecular changes", es: "Teoría de que la selección impulsa todos los cambios moleculares", de: "Theorie, dass Selektion alle molekularen Veränderungen antreibt", nl: "Theorie dat selectie alle moleculaire veranderingen aandrijft" },
        { en: "Framework explaining only deleterious mutations", es: "Marco explicando solo mutaciones deletéreas", de: "Rahmen, der nur schädliche Mutationen erklärt", nl: "Raamwerk dat alleen schadelijke mutaties verklaart" }
      ],
      correct: 0,
      explanation: {
        en: "The neutral theory, proposed by Motoo Kimura, suggests that the majority of evolutionary changes and genetic diversity within populations are due to neutral mutations that neither benefit nor harm fitness.",
        es: "La teoría neutral, propuesta por Motoo Kimura, sugiere que la mayoría de cambios evolutivos y diversidad genética dentro de poblaciones se deben a mutaciones neutrales que no benefician ni dañan la aptitud.",
        de: "Die neutrale Theorie, vorgeschlagen von Motoo Kimura, legt nahe, dass die Mehrheit evolutionärer Veränderungen und genetischer Vielfalt innerhalb von Populationen auf neutrale Mutationen zurückzuführen ist.",
        nl: "De neutrale theorie, voorgesteld door Motoo Kimura, suggereert dat de meerderheid van evolutionaire veranderingen en genetische diversiteit binnen populaties te wijten zijn aan neutrale mutaties."
      }
    },
    {
      question: {
        en: "What is a selective sweep?",
        es: "¿Qué es un barrido selectivo?",
        de: "Was ist ein selektiver Sweep?",
        nl: "Wat is een selectieve sweep?"
      },
      options: [
        { en: "Rapid increase in frequency of a beneficial allele and linked variants through positive selection", es: "Aumento rápido en frecuencia de un alelo beneficioso y variantes enlazadas a través de selección positiva", de: "Schneller Anstieg der Häufigkeit eines vorteilhaften Allels und verknüpfter Varianten durch positive Selektion", nl: "Snelle toename in frequentie van een gunstig allel en gekoppelde varianten door positieve selectie" },
        { en: "Random elimination of genetic variants", es: "Eliminación aleatoria de variantes genéticas", de: "Zufällige Elimination genetischer Varianten", nl: "Willekeurige eliminatie van genetische varianten" },
        { en: "Maintenance of genetic diversity through balancing selection", es: "Mantenimiento de diversidad genética a través de selección balanceada", de: "Aufrechterhaltung genetischer Vielfalt durch balancierende Selektion", nl: "Behoud van genetische diversiteit door balancerende selectie" },
        { en: "Accumulation of neutral mutations over time", es: "Acumulación de mutaciones neutrales con el tiempo", de: "Ansammlung neutraler Mutationen über die Zeit", nl: "Ophoping van neutrale mutaties over tijd" }
      ],
      correct: 0,
      explanation: {
        en: "A selective sweep occurs when a new beneficial mutation increases rapidly in frequency, reducing genetic diversity in the surrounding genomic region due to genetic hitchhiking.",
        es: "Un barrido selectivo ocurre cuando una nueva mutación beneficiosa aumenta rápidamente en frecuencia, reduciendo diversidad genética en la región genómica circundante debido a autostop genético.",
        de: "Ein selektiver Sweep tritt auf, wenn eine neue vorteilhafte Mutation schnell an Häufigkeit zunimmt und die genetische Vielfalt in der umgebenden genomischen Region durch genetic hitchhiking reduziert.",
        nl: "Een selectieve sweep treedt op wanneer een nieuwe gunstige mutatie snel toeneemt in frequentie, genetische diversiteit reducerend in de omringende genomische regio door genetic hitchhiking."
      }
    },
    {
      question: {
        en: "What is ancient DNA (aDNA) analysis?",
        es: "¿Qué es el análisis de ADN antiguo (aDNA)?",
        de: "Was ist alte DNA (aDNA) Analyse?",
        nl: "Wat is oude DNA (aDNA) analyse?"
      },
      options: [
        { en: "Study of genetic material from archaeological and paleontological specimens", es: "Estudio de material genético de especímenes arqueológicos y paleontológicos", de: "Studium genetischen Materials aus archäologischen und paläontologischen Proben", nl: "Studie van genetisch materiaal uit archeologische en paleontologische specimens" },
        { en: "Analysis of current human population genetics", es: "Análisis de genética poblacional humana actual", de: "Analyse aktueller menschlicher Populationsgenetik", nl: "Analyse van huidige menselijke populatiegenetica" },
        { en: "Study of modern species evolutionary relationships", es: "Estudio de relaciones evolutivas de especies modernas", de: "Studium evolutionärer Beziehungen moderner Arten", nl: "Studie van evolutionaire relaties van moderne soorten" },
        { en: "Investigation of contemporary genetic diseases", es: "Investigación de enfermedades genéticas contemporáneas", de: "Untersuchung zeitgenössischer Genetikkrankheiten", nl: "Onderzoek naar hedendaagse genetische ziekten" }
      ],
      correct: 0,
      explanation: {
        en: "Ancient DNA analysis involves extracting and sequencing genetic material from historical specimens, providing insights into past populations, migrations, and evolutionary processes over thousands of years.",
        es: "El análisis de ADN antiguo involucra extraer y secuenciar material genético de especímenes históricos, proporcionando insights sobre poblaciones pasadas, migraciones y procesos evolutivos.",
        de: "Alte DNA-Analyse beinhaltet die Extraktion und Sequenzierung genetischen Materials aus historischen Proben und bietet Einblicke in vergangene Populationen, Migrationen und evolutionäre Prozesse.",
        nl: "Oude DNA-analyse behelst het extraheren en sequencen van genetisch materiaal uit historische specimens, inzichten verschaffend in vroegere populaties, migraties en evolutionaire processen."
      }
    },
    {
      question: {
        en: "What is phylogeography?",
        es: "¿Qué es la filogeografía?",
        de: "Was ist Phylogeographie?",
        nl: "Wat is fylogeografie?"
      },
      options: [
        { en: "Study of historical processes responsible for contemporary geographic distribution of genealogical lineages", es: "Estudio de procesos históricos responsables de la distribución geográfica contemporánea de linajes genealógicos", de: "Studium historischer Prozesse, die für die zeitgenössische geografische Verteilung genealogischer Linien verantwortlich sind", nl: "Studie van historische processen verantwoordelijk voor hedendaagse geografische verdeling van genealogische lijnen" },
        { en: "Analysis of current species distributions only", es: "Análisis solo de distribuciones actuales de especies", de: "Analyse nur aktueller Artenverteilungen", nl: "Analyse van alleen huidige soortenverdelingen" },
        { en: "Study of geological formations", es: "Estudio de formaciones geológicas", de: "Studium geologischer Formationen", nl: "Studie van geologische formaties" },
        { en: "Investigation of climate patterns", es: "Investigación de patrones climáticos", de: "Untersuchung von Klimamustern", nl: "Onderzoek naar klimaatpatronen" }
      ],
      correct: 0,
      explanation: {
        en: "Phylogeography integrates phylogenetics with geographic distribution patterns to understand how historical events like glaciations, mountain formation, and sea level changes shaped genetic diversity.",
        es: "La filogeografía integra filogenética con patrones de distribución geográfica para entender cómo eventos históricos como glaciaciones, formación de montañas y cambios del nivel del mar moldearon la diversidad genética.",
        de: "Phylogeographie integriert Phylogenetik mit geografischen Verteilungsmustern, um zu verstehen, wie historische Ereignisse wie Vereisungen, Bergbildung und Meeresspiegeländerungen die genetische Vielfalt formten.",
        nl: "Fylogeografie integreert fylogenetica met geografische verdelingspatronen om te begrijpen hoe historische gebeurtenissen zoals ijstijden, bergvorming en zeespiegelveranderingen genetische diversiteit vormden."
      }
    },
    {
      question: {
        en: "What are demographic inference methods in population genetics?",
        es: "¿Qué son los métodos de inferencia demográfica en genética de poblaciones?",
        de: "Was sind demografische Inferenzmethoden in der Populationsgenetik?",
        nl: "Wat zijn demografische inferentiemethoden in populatiegenetica?"
      },
      options: [
        { en: "Statistical approaches to reconstruct population history from genetic data", es: "Enfoques estadísticos para reconstruir historia poblacional a partir de datos genéticos", de: "Statistische Ansätze zur Rekonstruktion der Populationsgeschichte aus genetischen Daten", nl: "Statistische benaderingen om populatiegeschiedenis te reconstrueren uit genetische data" },
        { en: "Methods for counting individuals in populations", es: "Métodos para contar individuos en poblaciones", de: "Methoden zum Zählen von Individuen in Populationen", nl: "Methoden voor het tellen van individuen in populaties" },
        { en: "Techniques for measuring birth and death rates", es: "Técnicas para medir tasas de nacimiento y muerte", de: "Techniken zur Messung von Geburts- und Sterberaten", nl: "Technieken voor het meten van geboorte- en sterftecijfers" },
        { en: "Approaches to predict future population sizes", es: "Enfoques para predecir tamaños poblacionales futuros", de: "Ansätze zur Vorhersage zukünftiger Populationsgrößen", nl: "Benaderingen om toekomstige populatiegroottes te voorspellen" }
      ],
      correct: 0,
      explanation: {
        en: "Demographic inference uses coalescent theory and other statistical models to infer past population sizes, migration rates, and timing of demographic events from patterns of genetic variation.",
        es: "La inferencia demográfica usa teoría coalescente y otros modelos estadísticos para inferir tamaños poblacionales pasados, tasas de migración y timing de eventos demográficos a partir de patrones de variación genética.",
        de: "Demografische Inferenz nutzt Koaleszenztheorie und andere statistische Modelle, um vergangene Populationsgrößen, Migrationsraten und Zeitpunkte demografischer Ereignisse aus genetischen Variationsmustern zu erschließen.",
        nl: "Demografische inferentie gebruikt coalescente theorie en andere statistische modellen om vroegere populatiegroottes, migratiesnelheden en timing van demografische gebeurtenissen af te leiden uit patronen van genetische variatie."
      }
    },
    {
      question: {
        en: "What is the role of recombination hotspots in human evolution?",
        es: "¿Cuál es el papel de los puntos calientes de recombinación en la evolución humana?",
        de: "Was ist die Rolle von Rekombinations-Hotspots in der menschlichen Evolution?",
        nl: "Wat is de rol van recombinatie hotspots in menselijke evolutie?"
      },
      options: [
        { en: "Regions of high recombination frequency that shape patterns of linkage disequilibrium and genetic diversity", es: "Regiones de alta frecuencia de recombinación que moldean patrones de desequilibrio de enlace y diversidad genética", de: "Regionen hoher Rekombinationsfrequenz, die Muster des Kopplungsungleichgewichts und genetischer Vielfalt formen", nl: "Regio's van hoge recombinatie frequentie die patronen van koppelingsdisequilibrium en genetische diversiteit vormen" },
        { en: "Areas of chromosome instability causing diseases", es: "Áreas de inestabilidad cromosómica causando enfermedades", de: "Bereiche chromosomaler Instabilität, die Krankheiten verursachen", nl: "Gebieden van chromosomale instabiliteit die ziekten veroorzaken" },
        { en: "Sites of DNA repair mechanisms only", es: "Sitios solo de mecanismos de reparación de ADN", de: "Stellen nur von DNA-Reparaturmechanismen", nl: "Plaatsen van alleen DNA-reparatiemechanismen" },
        { en: "Regions where no genetic variation occurs", es: "Regiones donde no ocurre variación genética", de: "Regionen, wo keine genetische Variation auftritt", nl: "Regio's waar geen genetische variatie voorkomt" }
      ],
      correct: 0,
      explanation: {
        en: "Recombination hotspots are genomic regions with elevated crossover rates, creating boundaries between haplotype blocks and influencing the distribution of genetic diversity across the genome.",
        es: "Los puntos calientes de recombinación son regiones genómicas con tasas elevadas de entrecruzamiento, creando límites entre bloques de haplotipos e influenciando la distribución de diversidad genética.",
        de: "Rekombinations-Hotspots sind genomische Regionen mit erhöhten Crossover-Raten, die Grenzen zwischen Haplotyp-Blöcken schaffen und die Verteilung genetischer Vielfalt im Genom beeinflussen.",
        nl: "Recombinatie hotspots zijn genomische regio's met verhoogde crossover snelheden, grenzen creërend tussen haplotype blokken en de verdeling van genetische diversiteit beïnvloedend."
      }
    },
    {
      question: {
        en: "What is speciation genetics?",
        es: "¿Qué es la genética de la especiación?",
        de: "Was ist Speziationsgenetik?",
        nl: "Wat is speciatiegenetica?"
      },
      options: [
        { en: "Study of genetic mechanisms underlying the formation of new species", es: "Estudio de mecanismos genéticos subyacentes a la formación de nuevas especies", de: "Studium genetischer Mechanismen, die der Bildung neuer Arten zugrunde liegen", nl: "Studie van genetische mechanismen onderliggend aan de vorming van nieuwe soorten" },
        { en: "Analysis of single species genetics only", es: "Análisis solo de genética de una sola especie", de: "Analyse nur der Genetik einzelner Arten", nl: "Analyse van alleen enkelvoudige soortengenetica" },
        { en: "Study of extinct species characteristics", es: "Estudio de características de especies extintas", de: "Studium von Merkmalen ausgestorbener Arten", nl: "Studie van eigenschappen van uitgestorven soorten" },
        { en: "Investigation of species conservation strategies", es: "Investigación de estrategias de conservación de especies", de: "Untersuchung von Artenschutzstrategien", nl: "Onderzoek naar soortenbeschermingsstrategieën" }
      ],
      correct: 0,
      explanation: {
        en: "Speciation genetics examines how genetic changes contribute to reproductive isolation and the evolution of new species, including roles of chromosomal rearrangements, gene duplications, and regulatory changes.",
        es: "La genética de la especiación examina cómo los cambios genéticos contribuyen al aislamiento reproductivo y la evolución de nuevas especies, incluyendo roles de reordenamientos cromosómicos.",
        de: "Speziationsgenetik untersucht, wie genetische Veränderungen zur reproduktiven Isolation und Evolution neuer Arten beitragen, einschließlich Rollen chromosomaler Umlagerungen und Genduplikationen.",
        nl: "Speciatiegenetica onderzoekt hoe genetische veranderingen bijdragen aan reproductieve isolatie en evolutie van nieuwe soorten, inclusief rollen van chromosomale herschikkingen en genduplicaties."
      }
    },
    {
      question: {
        en: "What is the mechanism of retrotransposon-mediated genome evolution?",
        es: "¿Cuál es el mecanismo de evolución del genoma mediada por retrotransposones?",
        de: "Was ist der Mechanismus der Retrotransposon-vermittelten Genomevolution?",
        nl: "Wat is het mechanisme van retrotransposon-gemedieerde genoomevolutie?"
      },
      options: [
        { en: "Mobile genetic elements that transpose via RNA intermediate and reverse transcription, creating structural variation, gene disruption, and driving genome plasticity", es: "Elementos genéticos móviles que se transponen vía intermedio de ARN y transcripción inversa, creando variación estructural, disrupción génica y promoviendo plasticidad del genoma", de: "Mobile genetische Elemente, die über RNA-Zwischenprodukt und Reverse Transkription transponieren, strukturelle Variation schaffen und Genomplastizität antreiben", nl: "Mobiele genetische elementen die transponeren via RNA-tussenproduct en reverse transcriptie, structurele variatie creërend en genoomplasticiteit aandrijvend" },
        { en: "Direct DNA recombination without RNA involvement", es: "Recombinación directa de ADN sin participación de ARN", de: "Direkte DNA-Rekombination ohne RNA-Beteiligung", nl: "Directe DNA-recombinatie zonder RNA-betrokkenheid" },
        { en: "Protein-mediated chromosome inversions only", es: "Solo inversiones cromosómicas mediadas por proteínas", de: "Nur protein-vermittelte Chromosomeninversionen", nl: "Alleen eiwit-gemedieerde chromosoominversies" },
        { en: "Simple point mutations in coding regions", es: "Mutaciones puntuales simples en regiones codificantes", de: "Einfache Punktmutationen in kodierenden Regionen", nl: "Eenvoudige puntmutaties in coderende regio's" }
      ],
      correct: 0,
      explanation: {
        en: "Retrotransposons are mobile DNA sequences that replicate through an RNA intermediate using reverse transcriptase, contributing significantly to genome size variation, gene regulation evolution, and structural genomic rearrangements across species.",
        es: "Los retrotransposones son secuencias de ADN móviles que se replican a través de un intermedio de ARN usando transcriptasa inversa, contribuyendo significativamente a la variación del tamaño del genoma.",
        de: "Retrotransposons sind mobile DNA-Sequenzen, die sich über einen RNA-Zwischenschritt mit Reverse Transkriptase replizieren und erheblich zur Genomgrößenvariation beitragen.",
        nl: "Retrotransposons zijn mobiele DNA-sequenties die repliceren via een RNA-tussenproduct met reverse transcriptase, significant bijdragend aan genoomgroottevariantie."
      }
    },
    {
      question: {
        en: "What is the role of ancient whole-genome duplications in evolutionary biology?",
        es: "¿Cuál es el papel de las duplicaciones antiguas del genoma completo en la biología evolutiva?",
        de: "Was ist die Rolle alter Gesamtgenom-Duplikationen in der Evolutionsbiologie?",
        nl: "Wat is de rol van oude geheel-genoom duplicaties in de evolutionaire biologie?"
      },
      options: [
        { en: "Polyploidy events that provide genetic raw material for evolutionary innovation through gene duplication, subfunctionalization, and neofunctionalization", es: "Eventos de poliploidía que proporcionan material genético crudo para innovación evolutiva através de duplicación génica, subfuncionalización y neofuncionalización", de: "Polyploidie-Ereignisse, die genetisches Rohmaterial für evolutionäre Innovation durch Genduplikation, Subfunktionalisierung und Neofunktionalisierung liefern", nl: "Polyploïdie gebeurtenissen die genetisch ruw materiaal leveren voor evolutionaire innovatie door genduplicatie, subfunctionalisatie en neofunctionalisatie" },
        { en: "Simple increase in genome size without functional consequences", es: "Aumento simple en tamaño del genoma sin consecuencias funcionales", de: "Einfache Vergrößerung der Genomgröße ohne funktionelle Konsequenzen", nl: "Eenvoudige toename van genoomgrootte zonder functionele gevolgen" },
        { en: "Reduction of genetic diversity through bottlenecks", es: "Reducción de diversidad genética através de cuellos de botella", de: "Reduktion genetischer Vielfalt durch Flaschenhälse", nl: "Reductie van genetische diversiteit door knelpunten" },
        { en: "Elimination of regulatory sequences", es: "Eliminación de secuencias reguladoras", de: "Elimination regulatorischer Sequenzen", nl: "Eliminatie van regulatoire sequenties" }
      ],
      correct: 0,
      explanation: {
        en: "Ancient whole-genome duplications create duplicated gene copies that can evolve new functions (neofunctionalization) or divide ancestral functions (subfunctionalization), contributing to evolutionary complexity and adaptation in many lineages including plants and vertebrates.",
        es: "Las duplicaciones antiguas del genoma completo crean copias génicas duplicadas que pueden evolucionar nuevas funciones (neofuncionalización) o dividir funciones ancestrales (subfuncionalización).",
        de: "Alte Gesamtgenom-Duplikationen schaffen duplizierte Genkopien, die neue Funktionen entwickeln (Neofunktionalisierung) oder ancestrale Funktionen teilen (Subfunktionalisierung) können.",
        nl: "Oude geheel-genoom duplicaties creëren gedupliceerde gencopieën die nieuwe functies kunnen ontwikkelen (neofunctionalisatie) of voorouderlijke functies kunnen verdelen (subfunctionalisatie)."
      }
    },
    {
      question: {
        en: "What is the mechanism of hybrid zone dynamics in evolutionary genetics?",
        es: "¿Cuál es el mecanismo de dinámicas de zonas híbridas en genética evolutiva?",
        de: "Was ist der Mechanismus der Hybridzonen-Dynamik in der Evolutionsgenetik?",
        nl: "Wat is het mechanisme van hybride zone-dynamiek in evolutionaire genetica?"
      },
      options: [
        { en: "Geographic regions where genetically distinct populations interbreed, creating clines of allele frequency changes that reveal selection, gene flow, and reproductive barriers", es: "Regiones geográficas donde poblaciones genéticamente distintas se cruzan, creando clinas de cambios de frecuencia alélica que revelan selección, flujo génico y barreras reproductivas", de: "Geografische Regionen, wo genetisch unterschiedliche Populationen sich kreuzen und Klinen von Allelfrequenz-Änderungen schaffen, die Selektion und Genfluss offenbaren", nl: "Geografische regio's waar genetisch verschillende populaties kruisen, clines van allelfrequentieveranderingen creërend die selectie, genenstroom en reproductieve barrières onthullen" },
        { en: "Areas where only one species can survive", es: "Áreas donde solo una especie puede sobrevivir", de: "Gebiete, wo nur eine Art überleben kann", nl: "Gebieden waar slechts één soort kan overleven" },
        { en: "Regions with complete reproductive isolation", es: "Regiones con aislamiento reproductivo completo", de: "Regionen mit vollständiger reproduktiver Isolation", nl: "Regio's met volledige reproductieve isolatie" },
        { en: "Zones of random genetic drift only", es: "Zonas solo de deriva genética aleatoria", de: "Zonen nur zufälliger genetischer Drift", nl: "Zones van alleen willekeurige genetische drift" }
      ],
      correct: 0,
      explanation: {
        en: "Hybrid zones are natural laboratories for studying evolutionary processes where different species or subspecies meet and interbreed, creating gradients of genetic variation that help researchers understand selection pressure, gene flow patterns, and the maintenance of species boundaries.",
        es: "Las zonas híbridas son laboratorios naturales para estudiar procesos evolutivos donde diferentes especies o subespecies se encuentran y cruzan, creando gradientes de variación genética.",
        de: "Hybridzonen sind natürliche Labore für die Untersuchung evolutionärer Prozesse, wo verschiedene Arten oder Unterarten sich treffen und kreuzen.",
        nl: "Hybride zones zijn natuurlijke laboratoria voor het bestuderen van evolutionaire processen waar verschillende soorten of ondersoorten elkaar ontmoeten en kruisen."
      }
    }
  ]
};

if (typeof window.addLevel === 'function') {
  window.addLevel('mind-bender/genetics', level9);
}
})();
