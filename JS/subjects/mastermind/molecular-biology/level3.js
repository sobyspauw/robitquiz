// Molecular Biology - Level 3: Gene Expression and Regulation
(function() {
  const level3 = {
    name: {
      en: "Gene Expression and Regulation",
      es: "Expresión Génica y Regulación",
      de: "Genexpression und Regulation",
      nl: "Genexpressie en Regulatie"
    },
    questions: [
      {
        question: {
          en: "What is the central dogma of molecular biology?",
          es: "¿Cuál es el dogma central de la biología molecular?",
          de: "Was ist das zentrale Dogma der Molekularbiologie?",
          nl: "Wat is het centrale dogma van de moleculaire biologie?"
        },
        options: [
          {
            en: "DNA → RNA → Protein",
            es: "ADN → ARN → Proteína",
            de: "DNA → RNA → Protein",
            nl: "DNA → RNA → Eiwit"
          },
          {
            en: "Protein → RNA → DNA",
            es: "Proteína → ARN → ADN",
            de: "Protein → RNA → DNA",
            nl: "Eiwit → RNA → DNA"
          },
          {
            en: "RNA → DNA → Protein",
            es: "ARN → ADN → Proteína",
            de: "RNA → DNA → Protein",
            nl: "RNA → DNA → Eiwit"
          },
          {
            en: "DNA → Protein → RNA",
            es: "ADN → Proteína → ARN",
            de: "DNA → Protein → RNA",
            nl: "DNA → Eiwit → RNA"
          }
        ],
        correct: 0,
        explanation: {
          en: "The central dogma describes the flow of genetic information from DNA to RNA through transcription, and from RNA to proteins through translation.",
          es: "El dogma central describe el flujo de información genética del ADN al ARN mediante transcripción, y del ARN a las proteínas mediante traducción.",
          de: "Das zentrale Dogma beschreibt den Fluss genetischer Information von DNA zu RNA durch Transkription und von RNA zu Proteinen durch Translation.",
          nl: "Het centrale dogma beschrijft de stroom van genetische informatie van DNA naar RNA door transcriptie, en van RNA naar eiwitten door translatie."
        }
      },
      {
        question: {
          en: "Which RNA polymerase is responsible for transcribing mRNA in eukaryotes?",
          es: "¿Qué ARN polimerasa es responsable de transcribir ARNm en eucariotas?",
          de: "Welche RNA-Polymerase ist für die Transkription von mRNA in Eukaryoten verantwortlich?",
          nl: "Welk RNA-polymerase is verantwoordelijk voor het transcriberen van mRNA in eukaryoten?"
        },
        options: [
          {
            en: "RNA polymerase II",
            es: "ARN polimerasa II",
            de: "RNA-Polymerase II",
            nl: "RNA-polymerase II"
          },
          {
            en: "RNA polymerase I",
            es: "ARN polimerasa I",
            de: "RNA-Polymerase I",
            nl: "RNA-polymerase I"
          },
          {
            en: "RNA polymerase III",
            es: "ARN polimerasa III",
            de: "RNA-Polymerase III",
            nl: "RNA-polymerase III"
          },
          {
            en: "DNA polymerase",
            es: "ADN polimerasa",
            de: "DNA-Polymerase",
            nl: "DNA-polymerase"
          }
        ],
        correct: 0,
        explanation: {
          en: "RNA polymerase II specifically transcribes protein-coding genes to produce mRNA in eukaryotic cells.",
          es: "La ARN polimerasa II específicamente transcribe genes codificadores de proteínas para producir ARNm en células eucariotas.",
          de: "RNA-Polymerase II transkribiert spezifisch proteincodierende Gene zur Produktion von mRNA in eukaryotischen Zellen.",
          nl: "RNA-polymerase II transcribeert specifiek eiwit-coderende genen om mRNA te produceren in eukaryotische cellen."
        }
      },
      {
        question: {
          en: "What is the function of the TATA box in gene transcription?",
          es: "¿Cuál es la función de la caja TATA en la transcripción génica?",
          de: "Was ist die Funktion der TATA-Box bei der Gentranskription?",
          nl: "Wat is de functie van de TATA-box bij gentranscriptie?"
        },
        options: [
          {
            en: "It helps position RNA polymerase at the transcription start site",
            es: "Ayuda a posicionar la ARN polimerasa en el sitio de inicio de la transcripción",
            de: "Es hilft, die RNA-Polymerase an der Transkriptionsstartseite zu positionieren",
            nl: "Het helpt RNA-polymerase te positioneren bij de transcriptiestartplaats"
          },
          {
            en: "It terminates transcription",
            es: "Termina la transcripción",
            de: "Es beendet die Transkription",
            nl: "Het beëindigt transcriptie"
          },
          {
            en: "It splices introns",
            es: "Empalma intrones",
            de: "Es spleißt Introns",
            nl: "Het splicet intronen"
          },
          {
            en: "It translates mRNA",
            es: "Traduce ARNm",
            de: "Es übersetzt mRNA",
            nl: "Het vertaalt mRNA"
          }
        ],
        correct: 0,
        explanation: {
          en: "The TATA box is a DNA sequence found in many gene promoters that helps position RNA polymerase II at the correct transcription start site.",
          es: "La caja TATA es una secuencia de ADN encontrada en muchos promotores génicos que ayuda a posicionar la ARN polimerasa II en el sitio correcto de inicio de transcripción.",
          de: "Die TATA-Box ist eine DNA-Sequenz, die in vielen Genpromotoren gefunden wird und hilft, RNA-Polymerase II an der korrekten Transkriptionsstartseite zu positionieren.",
          nl: "De TATA-box is een DNA-sequentie die in veel genpromotoren wordt gevonden en helpt RNA-polymerase II te positioneren bij de juiste transcriptiestartplaats."
        }
      },
      {
        question: {
          en: "What are enhancers in gene regulation?",
          es: "¿Qué son los potenciadores en la regulación génica?",
          de: "Was sind Enhancer in der Genregulation?",
          nl: "Wat zijn enhancers in genregulatie?"
        },
        options: [
          {
            en: "DNA sequences that increase transcription when bound by activators",
            es: "Secuencias de ADN que aumentan la transcripción cuando son unidas por activadores",
            de: "DNA-Sequenzen, die die Transkription erhöhen, wenn sie von Aktivatoren gebunden werden",
            nl: "DNA-sequenties die transcriptie verhogen wanneer ze door activatoren worden gebonden"
          },
          {
            en: "Proteins that degrade mRNA",
            es: "Proteínas que degradan ARNm",
            de: "Proteine, die mRNA abbauen",
            nl: "Eiwitten die mRNA afbreken"
          },
          {
            en: "Enzymes that replicate DNA",
            es: "Enzimas que replican ADN",
            de: "Enzyme, die DNA replizieren",
            nl: "Enzymen die DNA repliceren"
          },
          {
            en: "RNA molecules that code for proteins",
            es: "Moléculas de ARN que codifican proteínas",
            de: "RNA-Moleküle, die für Proteine codieren",
            nl: "RNA-moleculen die coderen voor eiwitten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Enhancers are regulatory DNA sequences that can increase the rate of transcription when bound by transcriptional activators, regardless of their distance from the promoter.",
          es: "Los potenciadores son secuencias regulatorias de ADN que pueden aumentar la tasa de transcripción cuando son unidas por activadores transcripcionales, independientemente de su distancia del promotor.",
          de: "Enhancer sind regulatorische DNA-Sequenzen, die die Transkriptionsrate erhöhen können, wenn sie von Transkriptionsaktivatoren gebunden werden, unabhängig von ihrer Entfernung zum Promoter.",
          nl: "Enhancers zijn regulatoire DNA-sequenties die de transcriptiesnelheid kunnen verhogen wanneer ze door transcriptionele activatoren worden gebonden, ongeacht hun afstand tot de promotor."
        }
      },
      {
        question: {
          en: "What is alternative splicing?",
          es: "¿Qué es el empalme alternativo?",
          de: "Was ist alternatives Spleißen?",
          nl: "Wat is alternatieve splicing?"
        },
        options: [
          {
            en: "The process by which different combinations of exons are joined together",
            es: "El proceso por el cual diferentes combinaciones de exones se unen",
            de: "Der Prozess, bei dem verschiedene Kombinationen von Exons zusammengefügt werden",
            nl: "Het proces waarbij verschillende combinaties van exonen worden samengevoegd"
          },
          {
            en: "The process of DNA replication",
            es: "El proceso de replicación del ADN",
            de: "Der Prozess der DNA-Replikation",
            nl: "Het proces van DNA-replicatie"
          },
          {
            en: "The process of protein folding",
            es: "El proceso de plegamiento de proteínas",
            de: "Der Prozess der Proteinfaltung",
            nl: "Het proces van eiwitvouwing"
          },
          {
            en: "The process of chromosome condensation",
            es: "El proceso de condensación cromosómica",
            de: "Der Prozess der Chromosomenkondensation",
            nl: "Het proces van chromosoomcondensatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Alternative splicing allows a single gene to produce multiple protein isoforms by including or excluding different exons during pre-mRNA processing.",
          es: "El empalme alternativo permite que un solo gen produzca múltiples isoformas proteicas al incluir o excluir diferentes exones durante el procesamiento del pre-ARNm.",
          de: "Alternatives Spleißen ermöglicht es einem einzelnen Gen, mehrere Proteinisoformen zu produzieren, indem verschiedene Exons während der prä-mRNA-Verarbeitung eingeschlossen oder ausgeschlossen werden.",
          nl: "Alternatieve splicing stelt een enkel gen in staat om meerdere eiwitvormen te produceren door verschillende exonen in te sluiten of uit te sluiten tijdens pre-mRNA-verwerking."
        }
      },
      {
        question: {
          en: "What role do histones play in gene regulation?",
          es: "¿Qué papel juegan las histonas en la regulación génica?",
          de: "Welche Rolle spielen Histone bei der Genregulation?",
          nl: "Welke rol spelen histonen bij genregulatie?"
        },
        options: [
          {
            en: "They package DNA and their modifications affect gene accessibility",
            es: "Empaquetan el ADN y sus modificaciones afectan la accesibilidad génica",
            de: "Sie verpacken DNA und ihre Modifikationen beeinflussen die Genzugänglichkeit",
            nl: "Ze verpakken DNA en hun modificaties beïnvloeden de toegankelijkheid van genen"
          },
          {
            en: "They directly translate mRNA into proteins",
            es: "Traducen directamente ARNm en proteínas",
            de: "Sie übersetzen mRNA direkt in Proteine",
            nl: "Ze vertalen mRNA direct naar eiwitten"
          },
          {
            en: "They replicate DNA during cell division",
            es: "Replican el ADN durante la división celular",
            de: "Sie replizieren DNA während der Zellteilung",
            nl: "Ze repliceren DNA tijdens celdeling"
          },
          {
            en: "They transport mRNA out of the nucleus",
            es: "Transportan ARNm fuera del núcleo",
            de: "Sie transportieren mRNA aus dem Kern",
            nl: "Ze transporteren mRNA uit de kern"
          }
        ],
        correct: 0,
        explanation: {
          en: "Histones package DNA into chromatin and their chemical modifications (like methylation and acetylation) can make genes more or less accessible for transcription.",
          es: "Las histonas empaquetan el ADN en cromatina y sus modificaciones químicas (como metilación y acetilación) pueden hacer que los genes sean más o menos accesibles para la transcripción.",
          de: "Histone verpacken DNA in Chromatin und ihre chemischen Modifikationen (wie Methylierung und Acetylierung) können Gene für die Transkription mehr oder weniger zugänglich machen.",
          nl: "Histonen verpakken DNA in chromatine en hun chemische modificaties (zoals methylering en acetylering) kunnen genen meer of minder toegankelijk maken voor transcriptie."
        }
      },
      {
        question: {
          en: "What is a promoter in gene expression?",
          es: "¿Qué es un promotor en la expresión génica?",
          de: "Was ist ein Promoter in der Genexpression?",
          nl: "Wat is een promotor bij genexpressie?"
        },
        options: [
          {
            en: "A DNA sequence where transcription initiation occurs",
            es: "Una secuencia de ADN donde ocurre la iniciación de la transcripción",
            de: "Eine DNA-Sequenz, wo die Transkriptionsinitiation stattfindet",
            nl: "Een DNA-sequentie waar transcriptie-initiatie plaatsvindt"
          },
          {
            en: "A protein that activates genes",
            es: "Una proteína que activa genes",
            de: "Ein Protein, das Gene aktiviert",
            nl: "Een eiwit dat genen activeert"
          },
          {
            en: "An RNA molecule that regulates translation",
            es: "Una molécula de ARN que regula la traducción",
            de: "Ein RNA-Molekül, das die Translation reguliert",
            nl: "Een RNA-molecuul dat translatie reguleert"
          },
          {
            en: "A chromosome structure",
            es: "Una estructura cromosómica",
            de: "Eine Chromosomenstruktur",
            nl: "Een chromosoomstructuur"
          }
        ],
        correct: 0,
        explanation: {
          en: "A promoter is a DNA sequence located near the transcription start site that serves as a binding site for RNA polymerase and transcription factors.",
          es: "Un promotor es una secuencia de ADN ubicada cerca del sitio de inicio de transcripción que sirve como sitio de unión para la ARN polimerasa y factores de transcripción.",
          de: "Ein Promoter ist eine DNA-Sequenz in der Nähe der Transkriptionsstartseite, die als Bindungsstelle für RNA-Polymerase und Transkriptionsfaktoren dient.",
          nl: "Een promotor is een DNA-sequentie nabij de transcriptiestartplaats die dient als bindingsplaats voor RNA-polymerase en transcriptiefactoren."
        }
      },
      {
        question: {
          en: "What is the difference between constitutive and inducible gene expression?",
          es: "¿Cuál es la diferencia entre expresión génica constitutiva e inducible?",
          de: "Was ist der Unterschied zwischen konstitutiver und induzierbarer Genexpression?",
          nl: "Wat is het verschil tussen constitutieve en induceerbare genexpressie?"
        },
        options: [
          {
            en: "Constitutive genes are always expressed; inducible genes are expressed when needed",
            es: "Los genes constitutivos siempre se expresan; los genes inducibles se expresan cuando es necesario",
            de: "Konstitutive Gene werden immer exprimiert; induzierbare Gene werden bei Bedarf exprimiert",
            nl: "Constitutieve genen worden altijd tot expressie gebracht; induceerbare genen worden tot expressie gebracht wanneer nodig"
          },
          {
            en: "Constitutive genes are never expressed; inducible genes are always expressed",
            es: "Los genes constitutivos nunca se expresan; los genes inducibles siempre se expresan",
            de: "Konstitutive Gene werden nie exprimiert; induzierbare Gene werden immer exprimiert",
            nl: "Constitutieve genen worden nooit tot expressie gebracht; induceerbare genen worden altijd tot expressie gebracht"
          },
          {
            en: "Both types are expressed only during cell division",
            es: "Ambos tipos se expresan solo durante la división celular",
            de: "Beide Typen werden nur während der Zellteilung exprimiert",
            nl: "Beide typen komen alleen tot expressie tijdens celdeling"
          },
          {
            en: "There is no difference between them",
            es: "No hay diferencia entre ellos",
            de: "Es gibt keinen Unterschied zwischen ihnen",
            nl: "Er is geen verschil tussen hen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Constitutive genes (housekeeping genes) are continuously expressed at relatively constant levels, while inducible genes are expressed only when their products are needed.",
          es: "Los genes constitutivos (genes de mantenimiento) se expresan continuamente a niveles relativamente constantes, mientras que los genes inducibles se expresan solo cuando se necesitan sus productos.",
          de: "Konstitutive Gene (Haushalts-Gene) werden kontinuierlich auf relativ konstanten Niveaus exprimiert, während induzierbare Gene nur exprimiert werden, wenn ihre Produkte benötigt werden.",
          nl: "Constitutieve genen (huishoudgenen) worden continu tot expressie gebracht op relatief constante niveaus, terwijl induceerbare genen alleen tot expressie komen wanneer hun producten nodig zijn."
        }
      },
      {
        question: {
          en: "What is the lac operon?",
          es: "¿Qué es el operón lac?",
          de: "Was ist das lac-Operon?",
          nl: "Wat is het lac-operon?"
        },
        options: [
          {
            en: "A bacterial gene cluster regulated by lactose availability",
            es: "Un grupo de genes bacterianos regulado por la disponibilidad de lactosa",
            de: "Ein bakterieller Gencluster, der durch Laktoseverfügbarkeit reguliert wird",
            nl: "Een bacteriële gencluster gereguleerd door lactosebeschikbaarheid"
          },
          {
            en: "A eukaryotic chromosome",
            es: "Un cromosoma eucariota",
            de: "Ein eukaryotisches Chromosom",
            nl: "Een eukaryotisch chromosoom"
          },
          {
            en: "A type of RNA polymerase",
            es: "Un tipo de ARN polimerasa",
            de: "Ein Typ von RNA-Polymerase",
            nl: "Een type RNA-polymerase"
          },
          {
            en: "A protein synthesis mechanism",
            es: "Un mecanismo de síntesis proteica",
            de: "Ein Proteinsynthese-Mechanismus",
            nl: "Een eiwitsynthesemechanisme"
          }
        ],
        correct: 0,
        explanation: {
          en: "The lac operon is a classic example of gene regulation in bacteria, controlling the expression of genes needed for lactose metabolism based on lactose availability.",
          es: "El operón lac es un ejemplo clásico de regulación génica en bacterias, controlando la expresión de genes necesarios para el metabolismo de lactosa basado en la disponibilidad de lactosa.",
          de: "Das lac-Operon ist ein klassisches Beispiel für Genregulation in Bakterien, das die Expression von Genen kontrolliert, die für den Laktosemetabolismus benötigt werden, basierend auf der Laktoseverfügbarkeit.",
          nl: "Het lac-operon is een klassiek voorbeeld van genregulatie in bacteriën, dat de expressie controleert van genen die nodig zijn voor lactosemetabolisme gebaseerd op lactosebeschikbaarheid."
        }
      },
      {
        question: {
          en: "What are transcription factors?",
          es: "¿Qué son los factores de transcripción?",
          de: "Was sind Transkriptionsfaktoren?",
          nl: "Wat zijn transcriptiefactoren?"
        },
        options: [
          {
            en: "Proteins that regulate gene transcription by binding to DNA",
            es: "Proteínas que regulan la transcripción génica uniéndose al ADN",
            de: "Proteine, die die Gentranskription durch Bindung an DNA regulieren",
            nl: "Eiwitten die gentranscriptie reguleren door binding aan DNA"
          },
          {
            en: "RNA molecules that translate proteins",
            es: "Moléculas de ARN que traducen proteínas",
            de: "RNA-Moleküle, die Proteine übersetzen",
            nl: "RNA-moleculen die eiwitten vertalen"
          },
          {
            en: "Enzymes that replicate chromosomes",
            es: "Enzimas que replican cromosomas",
            de: "Enzyme, die Chromosomen replizieren",
            nl: "Enzymen die chromosomen repliceren"
          },
          {
            en: "Membrane proteins that transport molecules",
            es: "Proteínas de membrana que transportan moléculas",
            de: "Membranproteine, die Moleküle transportieren",
            nl: "Membraaneiwitten die moleculen transporteren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Transcription factors are proteins that bind to specific DNA sequences and regulate the transcription of genes by either activating or repressing RNA polymerase activity.",
          es: "Los factores de transcripción son proteínas que se unen a secuencias específicas de ADN y regulan la transcripción de genes activando o reprimiendo la actividad de la ARN polimerasa.",
          de: "Transkriptionsfaktoren sind Proteine, die an spezifische DNA-Sequenzen binden und die Transkription von Genen regulieren, indem sie die RNA-Polymerase-Aktivität aktivieren oder reprimieren.",
          nl: "Transcriptiefactoren zijn eiwitten die binden aan specifieke DNA-sequenties en de transcriptie van genen reguleren door RNA-polymerase-activiteit te activeren of te onderdrukken."
        }
      },
      {
        question: {
          en: "What is chromatin remodeling?",
          es: "¿Qué es la remodelación de la cromatina?",
          de: "Was ist Chromatin-Remodeling?",
          nl: "Wat is chromatine-remodeling?"
        },
        options: [
          {
            en: "The process of altering chromatin structure to regulate gene accessibility",
            es: "El proceso de alterar la estructura de la cromatina para regular la accesibilidad génica",
            de: "Der Prozess der Veränderung der Chromatinstruktur zur Regulierung der Genzugänglichkeit",
            nl: "Het proces van het veranderen van chromatinestructuur om genentoegankelijkheid te reguleren"
          },
          {
            en: "The process of DNA mutation",
            es: "El proceso de mutación del ADN",
            de: "Der Prozess der DNA-Mutation",
            nl: "Het proces van DNA-mutatie"
          },
          {
            en: "The process of protein degradation",
            es: "El proceso de degradación proteica",
            de: "Der Prozess des Proteinabbaus",
            nl: "Het proces van eiwitafbraak"
          },
          {
            en: "The process of cell division",
            es: "El proceso de división celular",
            de: "Der Prozess der Zellteilung",
            nl: "Het proces van celdeling"
          }
        ],
        correct: 0,
        explanation: {
          en: "Chromatin remodeling involves the dynamic restructuring of chromatin architecture to make DNA more or less accessible for transcription and other DNA-related processes.",
          es: "La remodelación de cromatina involucra la reestructuración dinámica de la arquitectura de la cromatina para hacer el ADN más o menos accesible para la transcripción y otros procesos relacionados con el ADN.",
          de: "Chromatin-Remodeling beinhaltet die dynamische Umstrukturierung der Chromatinarchitektur, um DNA für Transkription und andere DNA-bezogene Prozesse mehr oder weniger zugänglich zu machen.",
          nl: "Chromatine-remodeling behelst de dynamische herstructurering van chromatinearchitectuur om DNA meer of minder toegankelijk te maken voor transcriptie en andere DNA-gerelateerde processen."
        }
      },
      {
        question: {
          en: "What is post-transcriptional regulation?",
          es: "¿Qué es la regulación post-transcripcional?",
          de: "Was ist post-transkriptionale Regulation?",
          nl: "Wat is post-transcriptionele regulatie?"
        },
        options: [
          {
            en: "Regulation of gene expression after mRNA is transcribed",
            es: "Regulación de la expresión génica después de que el ARNm es transcrito",
            de: "Regulation der Genexpression nachdem mRNA transkribiert wurde",
            nl: "Regulatie van genexpressie nadat mRNA is getranscribeerd"
          },
          {
            en: "Regulation during DNA replication",
            es: "Regulación durante la replicación del ADN",
            de: "Regulation während der DNA-Replikation",
            nl: "Regulatie tijdens DNA-replicatie"
          },
          {
            en: "Regulation during protein folding",
            es: "Regulación durante el plegamiento de proteínas",
            de: "Regulation während der Proteinfaltung",
            nl: "Regulatie tijdens eiwitvouwing"
          },
          {
            en: "Regulation during cell division",
            es: "Regulación durante la división celular",
            de: "Regulation während der Zellteilung",
            nl: "Regulatie tijdens celdeling"
          }
        ],
        correct: 0,
        explanation: {
          en: "Post-transcriptional regulation includes mechanisms like mRNA splicing, editing, stability, localization, and translation control that occur after transcription.",
          es: "La regulación post-transcripcional incluye mecanismos como el empalme del ARNm, edición, estabilidad, localización y control de traducción que ocurren después de la transcripción.",
          de: "Post-transkriptionale Regulation umfasst Mechanismen wie mRNA-Spleißen, Editierung, Stabilität, Lokalisation und Translationskontrolle, die nach der Transkription auftreten.",
          nl: "Post-transcriptionele regulatie omvat mechanismen zoals mRNA-splicing, bewerking, stabiliteit, lokalisatie en translatiecontrole die optreden na transcriptie."
        }
      },
      {
        question: {
          en: "What are riboswitches?",
          es: "¿Qué son los riboswitches?",
          de: "Was sind Riboswitches?",
          nl: "Wat zijn riboswitches?"
        },
        options: [
          {
            en: "RNA elements that directly bind small molecules and regulate gene expression",
            es: "Elementos de ARN que se unen directamente a moléculas pequeñas y regulan la expresión génica",
            de: "RNA-Elemente, die direkt kleine Moleküle binden und die Genexpression regulieren",
            nl: "RNA-elementen die direct kleine moleculen binden en genexpressie reguleren"
          },
          {
            en: "Proteins that switch between active and inactive forms",
            es: "Proteínas que cambian entre formas activas e inactivas",
            de: "Proteine, die zwischen aktiven und inaktiven Formen wechseln",
            nl: "Eiwitten die schakelen tussen actieve en inactieve vormen"
          },
          {
            en: "DNA sequences that control replication timing",
            es: "Secuencias de ADN que controlan el tiempo de replicación",
            de: "DNA-Sequenzen, die das Replikationszeitpunkt kontrollieren",
            nl: "DNA-sequenties die replicatietiming controleren"
          },
          {
            en: "Enzymes that modify histones",
            es: "Enzimas que modifican histonas",
            de: "Enzyme, die Histone modifizieren",
            nl: "Enzymen die histonen modificeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Riboswitches are structured RNA elements that can directly bind to specific small molecules and undergo conformational changes that affect gene expression.",
          es: "Los riboswitches son elementos de ARN estructurados que pueden unirse directamente a moléculas pequeñas específicas y sufrir cambios conformacionales que afectan la expresión génica.",
          de: "Riboswitches sind strukturierte RNA-Elemente, die direkt an spezifische kleine Moleküle binden können und Konformationsänderungen durchlaufen, die die Genexpression beeinflussen.",
          nl: "Riboswitches zijn gestructureerde RNA-elementen die direct kunnen binden aan specifieke kleine moleculen en conformatieveranderingen ondergaan die genexpressie beïnvloeden."
        }
      },
      {
        question: {
          en: "What is the role of the mediator complex in transcription?",
          es: "¿Cuál es el papel del complejo mediador en la transcripción?",
          de: "Was ist die Rolle des Mediator-Komplexes in der Transkription?",
          nl: "Wat is de rol van het mediator-complex bij transcriptie?"
        },
        options: [
          {
            en: "It facilitates communication between transcription factors and RNA polymerase II",
            es: "Facilita la comunicación entre factores de transcripción y la ARN polimerasa II",
            de: "Es erleichtert die Kommunikation zwischen Transkriptionsfaktoren und RNA-Polymerase II",
            nl: "Het faciliteert communicatie tussen transcriptiefactoren en RNA-polymerase II"
          },
          {
            en: "It degrades mRNA molecules",
            es: "Degrada moléculas de ARNm",
            de: "Es baut mRNA-Moleküle ab",
            nl: "Het breekt mRNA-moleculen af"
          },
          {
            en: "It replicates DNA during S phase",
            es: "Replica el ADN durante la fase S",
            de: "Es repliziert DNA während der S-Phase",
            nl: "Het repliceert DNA tijdens de S-fase"
          },
          {
            en: "It packages DNA into nucleosomes",
            es: "Empaqueta el ADN en nucleosomas",
            de: "Es verpackt DNA in Nukleosomen",
            nl: "Het verpakt DNA in nucleosomen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The mediator complex serves as a bridge between sequence-specific transcription factors and the RNA polymerase II transcriptional machinery, helping to regulate gene expression.",
          es: "El complejo mediador sirve como puente entre factores de transcripción específicos de secuencia y la maquinaria transcripcional de la ARN polimerasa II, ayudando a regular la expresión génica.",
          de: "Der Mediator-Komplex dient als Brücke zwischen sequenzspezifischen Transkriptionsfaktoren und der RNA-Polymerase II-Transkriptionsmaschinerie und hilft bei der Regulierung der Genexpression.",
          nl: "Het mediator-complex dient als brug tussen sequentie-specifieke transcriptiefactoren en het RNA-polymerase II transcriptiemechanisme, en helpt bij het reguleren van genexpressie."
        }
      },
      {
        question: {
          en: "What is DNA methylation's primary role in gene regulation?",
          es: "¿Cuál es el papel principal de la metilación del ADN en la regulación génica?",
          de: "Was ist die Hauptrolle der DNA-Methylierung in der Genregulation?",
          nl: "Wat is de primaire rol van DNA-methylering bij genregulatie?"
        },
        options: [
          {
            en: "It typically represses gene transcription",
            es: "Típicamente reprime la transcripción génica",
            de: "Sie unterdrückt typischerweise die Gentranskription",
            nl: "Het onderdrukt doorgaans gentranscriptie"
          },
          {
            en: "It always activates gene expression",
            es: "Siempre activa la expresión génica",
            de: "Sie aktiviert immer die Genexpression",
            nl: "Het activeert altijd genexpressie"
          },
          {
            en: "It has no effect on transcription",
            es: "No tiene efecto en la transcripción",
            de: "Sie hat keinen Effekt auf die Transkription",
            nl: "Het heeft geen effect op transcriptie"
          },
          {
            en: "It only affects DNA replication",
            es: "Solo afecta la replicación del ADN",
            de: "Sie beeinflusst nur die DNA-Replikation",
            nl: "Het beïnvloedt alleen DNA-replicatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "DNA methylation, particularly at cytosine bases in CpG dinucleotides, is generally associated with gene silencing and heterochromatin formation.",
          es: "La metilación del ADN, particularmente en bases de citosina en dinucleótidos CpG, generalmente se asocia con silenciamiento génico y formación de heterocromatina.",
          de: "DNA-Methylierung, insbesondere an Cytosinbasen in CpG-Dinukleotiden, ist allgemein mit Gensilencing und Heterochromatinbildung verbunden.",
          nl: "DNA-methylering, vooral bij cytosinebasen in CpG-dinucleotiden, wordt algemeen geassocieerd met het onderdrukken van genen en heterochromatinevorming."
        }
      },
      {
        question: {
          en: "What are CpG islands?",
          es: "¿Qué son las islas CpG?",
          de: "Was sind CpG-Inseln?",
          nl: "Wat zijn CpG-eilanden?"
        },
        options: [
          {
            en: "DNA regions with high density of CpG dinucleotides, often found in gene promoters",
            es: "Regiones de ADN con alta densidad de dinucleótidos CpG, a menudo encontradas en promotores génicos",
            de: "DNA-Regionen mit hoher Dichte an CpG-Dinukleotiden, oft in Genpromotoren gefunden",
            nl: "DNA-regio's met hoge dichtheid van CpG-dinucleotiden, vaak gevonden in genpromotors"
          },
          {
            en: "Protein complexes that bind to DNA",
            es: "Complejos proteicos que se unen al ADN",
            de: "Proteinkomplexe, die an DNA binden",
            nl: "Eiwitcomplexen die binden aan DNA"
          },
          {
            en: "RNA molecules that regulate splicing",
            es: "Moléculas de ARN que regulan el empalme",
            de: "RNA-Moleküle, die das Spleißen regulieren",
            nl: "RNA-moleculen die splicing reguleren"
          },
          {
            en: "Chromosome structures during mitosis",
            es: "Estructuras cromosómicas durante la mitosis",
            de: "Chromosomenstrukturen während der Mitose",
            nl: "Chromosoomstructuren tijdens mitose"
          }
        ],
        correct: 0,
        explanation: {
          en: "CpG islands are genomic regions with unusually high frequency of CpG dinucleotides, typically unmethylated and associated with gene promoters.",
          es: "Las islas CpG son regiones genómicas con frecuencia inusualmente alta de dinucleótidos CpG, típicamente no metiladas y asociadas con promotores génicos.",
          de: "CpG-Inseln sind genomische Regionen mit ungewöhnlich hoher Frequenz von CpG-Dinukleotiden, typischerweise unmethyliert und mit Genpromotoren assoziiert.",
          nl: "CpG-eilanden zijn genomische regio's met ongewoon hoge frequentie van CpG-dinucleotiden, doorgaans ongemethyleerd en geassocieerd met genpromotors."
        }
      },
      {
        question: {
          en: "What is the difference between euchromatin and heterochromatin?",
          es: "¿Cuál es la diferencia entre eucromatina y heterocromatina?",
          de: "Was ist der Unterschied zwischen Euchromatin und Heterochromatin?",
          nl: "Wat is het verschil tussen euchromatine en heterochromatine?"
        },
        options: [
          {
            en: "Euchromatin is loosely packed and transcriptionally active; heterochromatin is tightly packed and inactive",
            es: "La eucromatina está empaquetada de manera suelta y es transcripcionalmente activa; la heterocromatina está empaquetada firmemente e inactiva",
            de: "Euchromatin ist locker verpackt und transkriptionell aktiv; Heterochromatin ist dicht verpackt und inaktiv",
            nl: "Euchromatine is losjes verpakt en transcriptioneel actief; heterochromatine is dicht verpakt en inactief"
          },
          {
            en: "Both have identical functions",
            es: "Ambos tienen funciones idénticas",
            de: "Beide haben identische Funktionen",
            nl: "Beide hebben identieke functies"
          },
          {
            en: "Euchromatin is found only in prokaryotes",
            es: "La eucromatina se encuentra solo en procariotas",
            de: "Euchromatin kommt nur in Prokaryoten vor",
            nl: "Euchromatine komt alleen voor in prokaryoten"
          },
          {
            en: "Heterochromatin contains only rRNA genes",
            es: "La heterocromatina contiene solo genes de ARNr",
            de: "Heterochromatin enthält nur rRNA-Gene",
            nl: "Heterochromatine bevat alleen rRNA-genen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Euchromatin represents the loosely packed, transcriptionally active form of chromatin, while heterochromatin is highly condensed and generally transcriptionally silent.",
          es: "La eucromatina representa la forma de cromatina empaquetada de manera suelta y transcripcionalmente activa, mientras que la heterocromatina está altamente condensada y generalmente transcripcionalmente silenciosa.",
          de: "Euchromatin repräsentiert die locker verpackte, transkriptionell aktive Form von Chromatin, während Heterochromatin hochkondensiert und allgemein transkriptionell stumm ist.",
          nl: "Euchromatine vertegenwoordigt de losjes verpakte, transcriptioneel actieve vorm van chromatine, terwijl heterochromatine sterk gecondenseerd en over het algemeen transcriptioneel stil is."
        }
      },
      {
        question: {
          en: "What is epigenetic inheritance?",
          es: "¿Qué es la herencia epigenética?",
          de: "Was ist epigenetische Vererbung?",
          nl: "Wat is epigenetische overerving?"
        },
        options: [
          {
            en: "Inheritance of gene expression patterns without changes in DNA sequence",
            es: "Herencia de patrones de expresión génica sin cambios en la secuencia de ADN",
            de: "Vererbung von Genexpressionsmustern ohne Veränderungen in der DNA-Sequenz",
            nl: "Overerving van genexpressiepatronen zonder veranderingen in DNA-sequentie"
          },
          {
            en: "Inheritance of DNA mutations",
            es: "Herencia de mutaciones del ADN",
            de: "Vererbung von DNA-Mutationen",
            nl: "Overerving van DNA-mutaties"
          },
          {
            en: "Inheritance of chromosome number changes",
            es: "Herencia de cambios en el número de cromosomas",
            de: "Vererbung von Chromosomenzahlveränderungen",
            nl: "Overerving van chromosoomaantalveranderingen"
          },
          {
            en: "Inheritance of protein sequences",
            es: "Herencia de secuencias proteicas",
            de: "Vererbung von Proteinsequenzen",
            nl: "Overerving van eiwitsequenties"
          }
        ],
        correct: 0,
        explanation: {
          en: "Epigenetic inheritance involves the transmission of gene activity states from parent to offspring through modifications like DNA methylation and histone modifications, without altering the underlying DNA sequence.",
          es: "La herencia epigenética involucra la transmisión de estados de actividad génica de padres a descendencia a través de modificaciones como metilación del ADN y modificaciones de histonas, sin alterar la secuencia subyacente de ADN.",
          de: "Epigenetische Vererbung beinhaltet die Übertragung von Genaktivitätszuständen von Eltern zu Nachkommen durch Modifikationen wie DNA-Methylierung und Histon-Modifikationen, ohne die zugrunde liegende DNA-Sequenz zu verändern.",
          nl: "Epigenetische overerving houdt de overdracht van genactiviteitsstaten van ouder naar nageslacht in door modificaties zoals DNA-methylering en histonmodificaties, zonder de onderliggende DNA-sequentie te veranderen."
        }
      },
      {
        question: {
          en: "What is the role of long non-coding RNAs (lncRNAs) in gene regulation?",
          es: "¿Cuál es el papel de los ARN largos no codificantes (lncRNAs) en la regulación génica?",
          de: "Was ist die Rolle von langen nicht-kodierenden RNAs (lncRNAs) in der Genregulation?",
          nl: "Wat is de rol van lange niet-coderende RNA's (lncRNA's) bij genregulatie?"
        },
        options: [
          {
            en: "They regulate gene expression through various mechanisms including chromatin modification",
            es: "Regulan la expresión génica a través de varios mecanismos incluyendo modificación de cromatina",
            de: "Sie regulieren die Genexpression durch verschiedene Mechanismen einschließlich Chromatinmodifikation",
            nl: "Ze reguleren genexpressie door verschillende mechanismen inclusief chromatinemodificatie"
          },
          {
            en: "They code for essential proteins",
            es: "Codifican proteínas esenciales",
            de: "Sie kodieren für essentielle Proteine",
            nl: "Ze coderen voor essentiële eiwitten"
          },
          {
            en: "They only function during DNA replication",
            es: "Solo funcionan durante la replicación del ADN",
            de: "Sie funktionieren nur während der DNA-Replikation",
            nl: "Ze functioneren alleen tijdens DNA-replicatie"
          },
          {
            en: "They have no biological function",
            es: "No tienen función biológica",
            de: "Sie haben keine biologische Funktion",
            nl: "Ze hebben geen biologische functie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Long non-coding RNAs play important regulatory roles in gene expression through mechanisms such as chromatin remodeling, transcriptional regulation, and post-transcriptional control.",
          es: "Los ARN largos no codificantes juegan papeles regulatorios importantes en la expresión génica a través de mecanismos como remodelación de cromatina, regulación transcripcional y control post-transcripcional.",
          de: "Lange nicht-kodierende RNAs spielen wichtige regulatorische Rollen in der Genexpression durch Mechanismen wie Chromatin-Remodeling, Transkriptionsregulation und post-transkriptionale Kontrolle.",
          nl: "Lange niet-coderende RNA's spelen belangrijke regulatoire rollen bij genexpressie door mechanismen zoals chromatine-remodeling, transcriptionele regulatie en post-transcriptionele controle."
        }
      },
      {
        question: {
          en: "What is X-chromosome inactivation?",
          es: "¿Qué es la inactivación del cromosoma X?",
          de: "Was ist X-Chromosom-Inaktivierung?",
          nl: "Wat is X-chromosoom-inactivering?"
        },
        options: [
          {
            en: "A dosage compensation mechanism where one X chromosome is silenced in female mammals",
            es: "Un mecanismo de compensación de dosis donde un cromosoma X es silenciado en mamíferos hembra",
            de: "Ein Dosiskompensationsmechanismus, bei dem ein X-Chromosom in weiblichen Säugetieren stumm geschaltet wird",
            nl: "Een dosiscompensatiemechanisme waarbij één X-chromosoom wordt stilgelegd in vrouwelijke zoogdieren"
          },
          {
            en: "A process that occurs only in males",
            es: "Un proceso que ocurre solo en machos",
            de: "Ein Prozess, der nur bei Männchen auftritt",
            nl: "Een proces dat alleen bij mannetjes voorkomt"
          },
          {
            en: "The complete loss of X chromosomes",
            es: "La pérdida completa de cromosomas X",
            de: "Der vollständige Verlust von X-Chromosomen",
            nl: "Het volledige verlies van X-chromosomen"
          },
          {
            en: "A type of chromosome mutation",
            es: "Un tipo de mutación cromosómica",
            de: "Ein Typ von Chromosomenmutation",
            nl: "Een type chromosoommutatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "X-chromosome inactivation is an epigenetic process that randomly silences one of the two X chromosomes in female mammalian cells to achieve dosage compensation with males (XY).",
          es: "La inactivación del cromosoma X es un proceso epigenético que silencia aleatoriamente uno de los dos cromosomas X en células de mamíferos hembra para lograr compensación de dosis con los machos (XY).",
          de: "X-Chromosom-Inaktivierung ist ein epigenetischer Prozess, der zufällig eines der beiden X-Chromosomen in weiblichen Säugetierzellen stumm schaltet, um Dosiskompensation mit Männchen (XY) zu erreichen.",
          nl: "X-chromosoom-inactivering is een epigenetisch proces dat willekeurig één van de twee X-chromosomen in vrouwelijke zoogdiercellen stilzet om dosiscompensatie te bereiken met mannetjes (XY)."
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
          {
            en: "Parent-specific gene expression based on which parent the allele was inherited from",
            es: "Expresión génica específica del progenitor basada en de cuál progenitor se heredó el alelo",
            de: "Elternspezifische Genexpression basierend darauf, von welchem Elternteil das Allel vererbt wurde",
            nl: "Ouder-specifieke genexpressie gebaseerd op van welke ouder het allel werd geërfd"
          },
          {
            en: "The physical structure of chromosomes",
            es: "La estructura física de los cromosomas",
            de: "Die physische Struktur von Chromosomen",
            nl: "De fysieke structuur van chromosomen"
          },
          {
            en: "The process of DNA fingerprinting",
            es: "El proceso de huella dactilar del ADN",
            de: "Der Prozess des DNA-Fingerprints",
            nl: "Het proces van DNA-fingerprinting"
          },
          {
            en: "A type of genetic recombination",
            es: "Un tipo de recombinación genética",
            de: "Ein Typ genetischer Rekombination",
            nl: "Een type genetische recombinatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Genomic imprinting is an epigenetic phenomenon where genes are expressed in a parent-of-origin-dependent manner, with only the maternal or paternal allele being expressed.",
          es: "La impronta genómica es un fenómeno epigenético donde los genes se expresan de manera dependiente del progenitor de origen, con solo el alelo materno o paterno siendo expresado.",
          de: "Genomische Prägung ist ein epigenetisches Phänomen, bei dem Gene in einer vom Elternteil abhängigen Weise exprimiert werden, wobei nur das mütterliche oder väterliche Allel exprimiert wird.",
          nl: "Genomische imprinting is een epigenetisch fenomeen waarbij genen worden tot expressie gebracht op een ouder-van-oorsprong-afhankelijke manier, waarbij alleen het moederlijke of vaderlijke allel wordt tot expressie gebracht."
        }
      },
      {
        question: {
          en: "What are histone deacetylases (HDACs)?",
          es: "¿Qué son las histona desacetilasas (HDACs)?",
          de: "Was sind Histon-Deacetylasen (HDACs)?",
          nl: "Wat zijn histon-deacetylasen (HDAC's)?"
        },
        options: [
          {
            en: "Enzymes that remove acetyl groups from histones, typically leading to gene repression",
            es: "Enzimas que remueven grupos acetilo de las histonas, típicamente llevando a represión génica",
            de: "Enzyme, die Acetylgruppen von Histonen entfernen, was typischerweise zu Genrepression führt",
            nl: "Enzymen die acetylgroepen van histonen verwijderen, doorgaans leidend tot genonderdrukking"
          },
          {
            en: "Proteins that add acetyl groups to DNA",
            es: "Proteínas que añaden grupos acetilo al ADN",
            de: "Proteine, die Acetylgruppen zu DNA hinzufügen",
            nl: "Eiwitten die acetylgroepen aan DNA toevoegen"
          },
          {
            en: "RNA molecules that regulate splicing",
            es: "Moléculas de ARN que regulan el empalme",
            de: "RNA-Moleküle, die das Spleißen regulieren",
            nl: "RNA-moleculen die splicing reguleren"
          },
          {
            en: "Structures that package DNA during mitosis",
            es: "Estructuras que empaquetan ADN durante la mitosis",
            de: "Strukturen, die DNA während der Mitose verpacken",
            nl: "Structuren die DNA verpakken tijdens mitose"
          }
        ],
        correct: 0,
        explanation: {
          en: "Histone deacetylases are enzymes that catalyze the removal of acetyl groups from histone proteins, generally resulting in chromatin condensation and transcriptional repression.",
          es: "Las histona desacetilasas son enzimas que catalizan la remoción de grupos acetilo de las proteínas histonas, generalmente resultando en condensación de cromatina y represión transcripcional.",
          de: "Histon-Deacetylasen sind Enzyme, die die Entfernung von Acetylgruppen von Histonproteinen katalysieren, was allgemein zu Chromatinkondensation und Transkriptionsrepression führt.",
          nl: "Histon-deacetylasen zijn enzymen die de verwijdering van acetylgroepen van histoneiwitten katalyseren, wat over het algemeen resulteert in chromatinecondensatie en transcriptionele onderdrukking."
        }
      },
      {
        question: {
          en: "What is the CRISPR-Cas9 system's role in gene regulation research?",
          es: "¿Cuál es el papel del sistema CRISPR-Cas9 en la investigación de regulación génica?",
          de: "Was ist die Rolle des CRISPR-Cas9-Systems in der Genregulationsforschung?",
          nl: "Wat is de rol van het CRISPR-Cas9-systeem in genregulatieonderzoek?"
        },
        options: [
          {
            en: "It allows precise editing and manipulation of genes and regulatory elements",
            es: "Permite la edición precisa y manipulación de genes y elementos regulatorios",
            de: "Es ermöglicht präzise Editierung und Manipulation von Genen und regulatorischen Elementen",
            nl: "Het stelt precieze bewerking en manipulatie van genen en regulatoire elementen mogelijk"
          },
          {
            en: "It only sequences DNA",
            es: "Solo secuencia ADN",
            de: "Es sequenziert nur DNA",
            nl: "Het sequentieert alleen DNA"
          },
          {
            en: "It produces proteins directly",
            es: "Produce proteínas directamente",
            de: "Es produziert Proteine direkt",
            nl: "Het produceert eiwitten direct"
          },
          {
            en: "It has no application in gene regulation",
            es: "No tiene aplicación en regulación génica",
            de: "Es hat keine Anwendung in der Genregulation",
            nl: "Het heeft geen toepassing bij genregulatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR-Cas9 has revolutionized gene regulation research by providing a powerful tool for precise genome editing, allowing researchers to study gene function and regulatory mechanisms.",
          es: "CRISPR-Cas9 ha revolucionado la investigación de regulación génica proporcionando una herramienta poderosa para edición precisa del genoma, permitiendo a los investigadores estudiar la función génica y mecanismos regulatorios.",
          de: "CRISPR-Cas9 hat die Genregulationsforschung revolutioniert, indem es ein mächtiges Werkzeug für präzise Genombearbeitung bereitstellte, das es Forschern ermöglicht, Genfunktion und regulatorische Mechanismen zu studieren.",
          nl: "CRISPR-Cas9 heeft genregulatieonderzoek gerevolutioneerd door een krachtig gereedschap te bieden voor precieze genoombewerking, waardoor onderzoekers genfunctie en regulatoire mechanismen kunnen bestuderen."
        }
      },
      {
        question: {
          en: "What is the difference between positive and negative gene regulation?",
          es: "¿Cuál es la diferencia entre regulación génica positiva y negativa?",
          de: "Was ist der Unterschied zwischen positiver und negativer Genregulation?",
          nl: "Wat is het verschil tussen positieve en negatieve genregulatie?"
        },
        options: [
          {
            en: "Positive regulation increases transcription; negative regulation decreases it",
            es: "La regulación positiva aumenta la transcripción; la regulación negativa la disminuye",
            de: "Positive Regulation erhöht die Transkription; negative Regulation verringert sie",
            nl: "Positieve regulatie verhoogt transcriptie; negatieve regulatie verlaagt deze"
          },
          {
            en: "Both types increase transcription equally",
            es: "Ambos tipos aumentan la transcripción igualmente",
            de: "Beide Typen erhöhen die Transkription gleichermaßen",
            nl: "Beide typen verhogen transcriptie gelijk"
          },
          {
            en: "Negative regulation only occurs in prokaryotes",
            es: "La regulación negativa solo ocurre en procariotas",
            de: "Negative Regulation tritt nur in Prokaryoten auf",
            nl: "Negatieve regulatie komt alleen voor bij prokaryoten"
          },
          {
            en: "There is no functional difference",
            es: "No hay diferencia funcional",
            de: "Es gibt keinen funktionellen Unterschied",
            nl: "Er is geen functioneel verschil"
          }
        ],
        correct: 0,
        explanation: {
          en: "Positive regulation involves activators that enhance transcription when bound to DNA, while negative regulation involves repressors that inhibit transcription when bound.",
          es: "La regulación positiva involucra activadores que aumentan la transcripción cuando se unen al ADN, mientras que la regulación negativa involucra represores que inhiben la transcripción cuando se unen.",
          de: "Positive Regulation beinhaltet Aktivatoren, die die Transkription verstärken, wenn sie an DNA gebunden sind, während negative Regulation Repressoren beinhaltet, die die Transkription hemmen, wenn sie gebunden sind.",
          nl: "Positieve regulatie behelst activatoren die transcriptie verbeteren wanneer ze aan DNA gebonden zijn, terwijl negatieve regulatie repressors behelst die transcriptie remmen wanneer ze gebonden zijn."
        }
      },
      {
        question: {
          en: "What is tissue-specific gene expression?",
          es: "¿Qué es la expresión génica específica de tejido?",
          de: "Was ist gewebespezifische Genexpression?",
          nl: "Wat is weefsel-specifieke genexpressie?"
        },
        options: [
          {
            en: "Gene expression patterns that vary between different cell types and tissues",
            es: "Patrones de expresión génica que varían entre diferentes tipos celulares y tejidos",
            de: "Genexpressionsmuster, die zwischen verschiedenen Zelltypen und Geweben variieren",
            nl: "Genexpressiepatronen die variëren tussen verschillende celtypen en weefsels"
          },
          {
            en: "Genes that are expressed only during development",
            es: "Genes que se expresan solo durante el desarrollo",
            de: "Gene, die nur während der Entwicklung exprimiert werden",
            nl: "Genen die alleen tijdens ontwikkeling tot expressie komen"
          },
          {
            en: "Genes that are never expressed",
            es: "Genes que nunca se expresan",
            de: "Gene, die nie exprimiert werden",
            nl: "Genen die nooit tot expressie komen"
          },
          {
            en: "Universal gene expression in all cells",
            es: "Expresión génica universal en todas las células",
            de: "Universelle Genexpression in allen Zellen",
            nl: "Universele genexpressie in alle cellen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Tissue-specific gene expression refers to the differential expression of genes across different tissues and cell types, allowing for specialized cellular functions.",
          es: "La expresión génica específica de tejido se refiere a la expresión diferencial de genes a través de diferentes tejidos y tipos celulares, permitiendo funciones celulares especializadas.",
          de: "Gewebespezifische Genexpression bezieht sich auf die unterschiedliche Expression von Genen in verschiedenen Geweben und Zelltypen, was spezialisierte zelluläre Funktionen ermöglicht.",
          nl: "Weefsel-specifieke genexpressie verwijst naar de differentiële expressie van genen in verschillende weefsels en celtypen, waardoor gespecialiseerde cellulaire functies mogelijk zijn."
        }
      },
      {
        question: {
          en: "What is the role of microRNAs (miRNAs) in gene regulation?",
          es: "¿Cuál es el papel de los microARNs (miRNAs) en la regulación génica?",
          de: "Was ist die Rolle von microRNAs (miRNAs) in der Genregulation?",
          nl: "Wat is de rol van microRNA's (miRNA's) bij genregulatie?"
        },
        options: [
          {
            en: "They bind to complementary mRNA sequences and regulate translation or mRNA stability",
            es: "Se unen a secuencias complementarias de ARNm y regulan la traducción o estabilidad del ARNm",
            de: "Sie binden an komplementäre mRNA-Sequenzen und regulieren Translation oder mRNA-Stabilität",
            nl: "Ze binden aan complementaire mRNA-sequenties en reguleren translatie of mRNA-stabiliteit"
          },
          {
            en: "They directly code for essential proteins",
            es: "Codifican directamente proteínas esenciales",
            de: "Sie kodieren direkt für essentielle Proteine",
            nl: "Ze coderen direct voor essentiële eiwitten"
          },
          {
            en: "They only function during DNA replication",
            es: "Solo funcionan durante la replicación del ADN",
            de: "Sie funktionieren nur während der DNA-Replikation",
            nl: "Ze functioneren alleen tijdens DNA-replicatie"
          },
          {
            en: "They have no regulatory function",
            es: "No tienen función regulatoria",
            de: "Sie haben keine regulatorische Funktion",
            nl: "Ze hebben geen regulatoire functie"
          }
        ],
        correct: 0,
        explanation: {
          en: "MicroRNAs are small regulatory RNAs that control gene expression post-transcriptionally by binding to target mRNAs, leading to either translational repression or mRNA degradation.",
          es: "Los microARNs son pequeños ARNs regulatorios que controlan la expresión génica post-transcripcionalmente uniéndose a ARNms objetivo, llevando a represión translacional o degradación del ARNm.",
          de: "MicroRNAs sind kleine regulatorische RNAs, die die Genexpression post-transkriptional kontrollieren, indem sie an Ziel-mRNAs binden, was zu translationaler Repression oder mRNA-Abbau führt.",
          nl: "MicroRNA's zijn kleine regulatoire RNA's die genexpressie post-transcriptioneel controleren door binding aan doel-mRNA's, wat leidt tot translationele onderdrukking of mRNA-afbraak."
        }
      },
      {
        question: {
          en: "What is the significance of the 5' cap and 3' poly-A tail in mRNA regulation?",
          es: "¿Cuál es la significancia de la caperuza 5' y la cola poli-A 3' en la regulación del ARNm?",
          de: "Was ist die Bedeutung der 5'-Kappe und des 3'-Poly-A-Schwanzes in der mRNA-Regulation?",
          nl: "Wat is de betekenis van de 5'-cap en 3'-poly-A-staart bij mRNA-regulatie?"
        },
        options: [
          {
            en: "They protect mRNA from degradation and enhance translation efficiency",
            es: "Protegen al ARNm de la degradación y aumentan la eficiencia de traducción",
            de: "Sie schützen mRNA vor Abbau und verstärken die Translationseffizienz",
            nl: "Ze beschermen mRNA tegen afbraak en verbeteren de translatie-efficiëntie"
          },
          {
            en: "They initiate DNA replication",
            es: "Inician la replicación del ADN",
            de: "Sie initiieren die DNA-Replikation",
            nl: "Ze initiëren DNA-replicatie"
          },
          {
            en: "They only function during cell division",
            es: "Solo funcionan durante la división celular",
            de: "Sie funktionieren nur während der Zellteilung",
            nl: "Ze functioneren alleen tijdens celdeling"
          },
          {
            en: "They have no effect on mRNA function",
            es: "No tienen efecto en la función del ARNm",
            de: "Sie haben keinen Effekt auf die mRNA-Funktion",
            nl: "Ze hebben geen effect op mRNA-functie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The 5' cap and 3' poly-A tail are crucial for mRNA stability, protection from exonucleases, nuclear export, and efficient translation initiation by the ribosome.",
          es: "La caperuza 5' y la cola poli-A 3' son cruciales para la estabilidad del ARNm, protección de exonucleasas, exportación nuclear y iniciación eficiente de traducción por el ribosoma.",
          de: "Die 5'-Kappe und der 3'-Poly-A-Schwanz sind entscheidend für mRNA-Stabilität, Schutz vor Exonukleasen, nukleären Export und effiziente Translationsinitiation durch das Ribosom.",
          nl: "De 5'-cap en 3'-poly-A-staart zijn cruciaal voor mRNA-stabiliteit, bescherming tegen exonucleasen, nucleaire export en efficiënte translatie-initiatie door het ribosoom."
        }
      },
      {
        question: {
          en: "What is chromatin immunoprecipitation (ChIP) used for?",
          es: "¿Para qué se usa la inmunoprecipitación de cromatina (ChIP)?",
          de: "Wofür wird Chromatin-Immunpräzipitation (ChIP) verwendet?",
          nl: "Waarvoor wordt chromatine-immunoprecipitatie (ChIP) gebruikt?"
        },
        options: [
          {
            en: "To study protein-DNA interactions and histone modifications in living cells",
            es: "Para estudiar interacciones proteína-ADN y modificaciones de histonas en células vivas",
            de: "Um Protein-DNA-Interaktionen und Histonmodifikationen in lebenden Zellen zu studieren",
            nl: "Om eiwit-DNA-interacties en histonmodificaties in levende cellen te bestuderen"
          },
          {
            en: "To sequence entire genomes",
            es: "Para secuenciar genomas completos",
            de: "Um ganze Genome zu sequenzieren",
            nl: "Om hele genomen te sequentieëren"
          },
          {
            en: "To synthesize proteins in vitro",
            es: "Para sintetizar proteínas in vitro",
            de: "Um Proteine in vitro zu synthetisieren",
            nl: "Om eiwitten in vitro te synthetiseren"
          },
          {
            en: "To clone DNA fragments",
            es: "Para clonar fragmentos de ADN",
            de: "Um DNA-Fragmente zu klonieren",
            nl: "Om DNA-fragmenten te kloneren"
          }
        ],
        correct: 0,
        explanation: {
          en: "ChIP is a powerful technique that allows researchers to investigate which proteins are bound to specific DNA regions and to map histone modifications across the genome.",
          es: "ChIP es una técnica poderosa que permite a los investigadores investigar qué proteínas están unidas a regiones específicas de ADN y mapear modificaciones de histonas a través del genoma.",
          de: "ChIP ist eine mächtige Technik, die es Forschern ermöglicht zu untersuchen, welche Proteine an spezifische DNA-Regionen gebunden sind und Histonmodifikationen über das Genom zu kartieren.",
          nl: "ChIP is een krachtige techniek die onderzoekers in staat stelt te onderzoeken welke eiwitten gebonden zijn aan specifieke DNA-regio's en histonmodificaties over het genoom in kaart te brengen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/molecular-biology', level3);
  }
})();