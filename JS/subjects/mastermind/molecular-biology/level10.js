// Molecular Biology - Level 10: Advanced Applications and Clinical Translation
(function() {
  const level10 = {
    name: {
      en: "Advanced Applications and Clinical Translation",
      es: "Aplicaciones Avanzadas y Traducción Clínica",
      de: "Fortgeschrittene Anwendungen und Klinische Übertragung",
      nl: "Geavanceerde Toepassingen en Klinische Translatie"
    },
    questions: [
      {
        question: {
          en: "What is the main challenge in translating CRISPR therapies to clinical applications?",
          es: "¿Cuál es el principal desafío en traducir las terapias CRISPR a aplicaciones clínicas?",
          de: "Was ist die Hauptherausforderung bei der Übertragung von CRISPR-Therapien in klinische Anwendungen?",
          nl: "Wat is de hoofduitdaging bij het vertalen van CRISPR-therapieën naar klinische toepassingen?"
        },
        options: [
          {
            en: "Safe and efficient in vivo delivery to target tissues",
            es: "Entrega segura y eficiente in vivo a tejidos objetivo",
            de: "Sichere und effiziente In-vivo-Abgabe an Zielgewebe",
            nl: "Veilige en efficiënte in vivo aflevering aan doelweefsels"
          },
          {
            en: "High cost of guide RNA synthesis",
            es: "Alto costo de síntesis de ARN guía",
            de: "Hohe Kosten der Guide-RNA-Synthese",
            nl: "Hoge kosten van gids-RNA synthese"
          },
          {
            en: "Limited availability of Cas proteins",
            es: "Disponibilidad limitada de proteínas Cas",
            de: "Begrenzte Verfügbarkeit von Cas-Proteinen",
            nl: "Beperkte beschikbaarheid van Cas-eiwitten"
          },
          {
            en: "Slow editing kinetics",
            es: "Cinética de edición lenta",
            de: "Langsame Editierungskinetik",
            nl: "Trage bewerking kinetiek"
          }
        ],
        correct: 0,
        explanation: {
          en: "The primary challenge for clinical CRISPR applications is developing safe, efficient delivery systems that can transport CRISPR components to specific target tissues while avoiding off-target effects and immune responses.",
          es: "El desafío principal para las aplicaciones clínicas de CRISPR es desarrollar sistemas de entrega seguros y eficientes que puedan transportar componentes CRISPR a tejidos objetivo específicos mientras evitan efectos fuera del objetivo y respuestas inmunes.",
          de: "Die Hauptherausforderung für klinische CRISPR-Anwendungen ist die Entwicklung sicherer, effizienter Abgabesysteme, die CRISPR-Komponenten an spezifische Zielgewebe transportieren können, während Off-Target-Effekte und Immunantworten vermieden werden.",
          nl: "De hoofduitdaging voor klinische CRISPR-toepassingen is het ontwikkelen van veilige, efficiënte afleversystemen die CRISPR-componenten naar specifieke doelweefsels kunnen transporteren terwijl off-target effecten en immuunresponses worden vermeden."
        }
      },
      {
        question: {
          en: "What is the primary application of CAR-T cell therapy?",
          es: "¿Cuál es la aplicación principal de la terapia de células CAR-T?",
          de: "Was ist die Hauptanwendung der CAR-T-Zelltherapie?",
          nl: "Wat is de primaire toepassing van CAR-T celtherapie?"
        },
        options: [
          {
            en: "Treating hematological malignancies with engineered immune cells",
            es: "Tratar malignidades hematológicas con células inmunes modificadas",
            de: "Behandlung hämatologischer Malignome mit konstruierten Immunzellen",
            nl: "Behandeling van hematologische maligniteiten met gemanipuleerde immuuncellen"
          },
          {
            en: "Gene therapy for genetic disorders",
            es: "Terapia génica para trastornos genéticos",
            de: "Gentherapie für genetische Störungen",
            nl: "Gentherapie voor genetische aandoeningen"
          },
          {
            en: "Tissue regeneration applications",
            es: "Aplicaciones de regeneración de tejidos",
            de: "Geweberegeneration-Anwendungen",
            nl: "Weefselregeneratie toepassingen"
          },
          {
            en: "Vaccine development",
            es: "Desarrollo de vacunas",
            de: "Impfstoffentwicklung",
            nl: "Vaccin ontwikkeling"
          }
        ],
        correct: 0,
        explanation: {
          en: "CAR-T cell therapy involves genetically modifying patient T cells to express chimeric antigen receptors that specifically target cancer cells, primarily used for treating blood cancers like leukemia and lymphoma.",
          es: "La terapia de células CAR-T involucra modificar genéticamente las células T del paciente para expresar receptores de antígenos quiméricos que se dirigen específicamente a células cancerosas, principalmente usada para tratar cánceres de sangre como leucemia y linfoma.",
          de: "CAR-T-Zelltherapie beinhaltet die genetische Modifikation von Patienten-T-Zellen zur Expression chimärer Antigenrezeptoren, die spezifisch Krebszellen angreifen, hauptsächlich zur Behandlung von Blutkrebsarten wie Leukämie und Lymphom verwendet.",
          nl: "CAR-T celtherapie houdt genetische modificatie van patiënt T-cellen in om chimere antigen receptoren tot expressie te brengen die specifiek kankercellen targeten, voornamelijk gebruikt voor behandeling van bloedkankers zoals leukemie en lymfoom."
        }
      },
      {
        question: {
          en: "What is the key advantage of mRNA vaccines over traditional vaccines?",
          es: "¿Cuál es la ventaja clave de las vacunas de mRNA sobre las vacunas tradicionales?",
          de: "Was ist der Hauptvorteil von mRNA-Impfstoffen gegenüber traditionellen Impfstoffen?",
          nl: "Wat is het belangrijkste voordeel van mRNA-vaccins ten opzichte van traditionele vaccins?"
        },
        options: [
          {
            en: "Rapid development and scalable manufacturing",
            es: "Desarrollo rápido y fabricación escalable",
            de: "Schnelle Entwicklung und skalierbare Herstellung",
            nl: "Snelle ontwikkeling en schaalbare productie"
          },
          {
            en: "Longer shelf life at room temperature",
            es: "Mayor vida útil a temperatura ambiente",
            de: "Längere Haltbarkeit bei Raumtemperatur",
            nl: "Langere houdbaarheid bij kamertemperatuur"
          },
          {
            en: "Lower production costs",
            es: "Menores costos de producción",
            de: "Niedrigere Produktionskosten",
            nl: "Lagere productiekosten"
          },
          {
            en: "No need for cold chain storage",
            es: "No necesita almacenamiento de cadena fría",
            de: "Keine Kühlkette erforderlich",
            nl: "Geen koude keten opslag nodig"
          }
        ],
        correct: 0,
        explanation: {
          en: "mRNA vaccines can be rapidly designed and manufactured once the genetic sequence of a pathogen is known, enabling quick responses to emerging diseases and easy adaptation to new variants without growing live pathogens.",
          es: "Las vacunas de mRNA pueden diseñarse y fabricarse rápidamente una vez que se conoce la secuencia genética de un patógeno, permitiendo respuestas rápidas a enfermedades emergentes y fácil adaptación a nuevas variantes sin cultivar patógenos vivos.",
          de: "mRNA-Impfstoffe können schnell entworfen und hergestellt werden, sobald die genetische Sequenz eines Erregers bekannt ist, was schnelle Reaktionen auf neue Krankheiten und einfache Anpassung an neue Varianten ohne Anzucht lebender Erreger ermöglicht.",
          nl: "mRNA-vaccins kunnen snel worden ontworpen en geproduceerd zodra de genetische sequentie van een pathogeen bekend is, wat snelle reacties op opkomende ziekten en eenvoudige aanpassing aan nieuwe varianten mogelijk maakt zonder levende pathogenen te kweken."
        }
      },
      {
        question: {
          en: "What is the primary goal of precision oncology?",
          es: "¿Cuál es el objetivo principal de la oncología de precisión?",
          de: "Was ist das Hauptziel der Präzisionsonkologie?",
          nl: "Wat is het hoofddoel van precisie oncologie?"
        },
        options: [
          {
            en: "Personalized treatment based on tumor molecular profiles",
            es: "Tratamiento personalizado basado en perfiles moleculares del tumor",
            de: "Personalisierte Behandlung basierend auf molekularen Tumorprofilen",
            nl: "Gepersonaliseerde behandeling gebaseerd op tumor moleculaire profielen"
          },
          {
            en: "Reducing overall treatment costs",
            es: "Reducir los costos generales del tratamiento",
            de: "Reduzierung der Gesamtbehandlungskosten",
            nl: "Verlagen van algemene behandelingskosten"
          },
          {
            en: "Standardizing cancer treatments",
            es: "Estandarizar tratamientos de cáncer",
            de: "Standardisierung von Krebsbehandlungen",
            nl: "Standaardisering van kankerbehandelingen"
          },
          {
            en: "Developing universal cancer drugs",
            es: "Desarrollar medicamentos universales contra el cáncer",
            de: "Entwicklung universeller Krebsmedikamente",
            nl: "Ontwikkeling van universele kankermedicijnen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Precision oncology aims to tailor cancer treatment to individual patients based on the genetic, epigenetic, and molecular characteristics of their tumors, selecting the most effective therapies while minimizing side effects.",
          es: "La oncología de precisión busca adaptar el tratamiento del cáncer a pacientes individuales basándose en las características genéticas, epigenéticas y moleculares de sus tumores, seleccionando las terapias más efectivas mientras minimiza los efectos secundarios.",
          de: "Präzisionsonkologie zielt darauf ab, die Krebsbehandlung auf individuelle Patienten basierend auf den genetischen, epigenetischen und molekularen Eigenschaften ihrer Tumoren anzupassen und die effektivsten Therapien bei minimalen Nebenwirkungen auszuwählen.",
          nl: "Precisie oncologie streeft ernaar kankerbehandeling af te stemmen op individuele patiënten gebaseerd op de genetische, epigenetische en moleculaire kenmerken van hun tumoren, waarbij de meest effectieve therapieën worden gekozen terwijl bijwerkingen worden geminimaliseerd."
        }
      },
      {
        question: {
          en: "What is the main application of induced pluripotent stem cells (iPSCs) in clinical medicine?",
          es: "¿Cuál es la aplicación principal de las células madre pluripotentes inducidas (iPSCs) en medicina clínica?",
          de: "Was ist die Hauptanwendung induzierter pluripotenter Stammzellen (iPSCs) in der klinischen Medizin?",
          nl: "Wat is de hoofdtoepassing van geïnduceerde pluripotente stamcellen (iPSCs) in de klinische geneeskunde?"
        },
        options: [
          {
            en: "Disease modeling and regenerative medicine applications",
            es: "Modelado de enfermedades y aplicaciones de medicina regenerativa",
            de: "Krankheitsmodellierung und regenerative Medizin-Anwendungen",
            nl: "Ziekte modellering en regeneratieve geneeskunde toepassingen"
          },
          {
            en: "Direct cancer treatment",
            es: "Tratamiento directo del cáncer",
            de: "Direkte Krebsbehandlung",
            nl: "Directe kankerbehandeling"
          },
          {
            en: "Antibiotic production",
            es: "Producción de antibióticos",
            de: "Antibiotikaproduktion",
            nl: "Antibiotica productie"
          },
          {
            en: "Vaccine manufacturing",
            es: "Fabricación de vacunas",
            de: "Impfstoffherstellung",
            nl: "Vaccin productie"
          }
        ],
        correct: 0,
        explanation: {
          en: "iPSCs can differentiate into any cell type, making them valuable for modeling diseases in patient-specific cells, drug testing, and potentially regenerating damaged tissues without immune rejection concerns.",
          es: "Las iPSCs pueden diferenciarse en cualquier tipo celular, haciéndolas valiosas para modelar enfermedades en células específicas del paciente, pruebas de fármacos y potencialmente regenerar tejidos dañados sin preocupaciones de rechazo inmune.",
          de: "iPSCs können sich in jeden Zelltyp differenzieren, was sie wertvoll für die Modellierung von Krankheiten in patientenspezifischen Zellen, Arzneimitteltests und möglicherweise Regeneration beschädigter Gewebe ohne Immunabstoßung macht.",
          nl: "iPSCs kunnen differentiëren in elk celtype, waardoor ze waardevol zijn voor het modelleren van ziekten in patiënt-specifieke cellen, medicijntesten en mogelijk regeneratie van beschadigd weefsel zonder zorgen over immuunafstoting."
        }
      },
      {
        question: {
          en: "What is the primary advantage of antibody-drug conjugates (ADCs) in cancer therapy?",
          es: "¿Cuál es la principal ventaja de los conjugados anticuerpo-fármaco (ADCs) en terapia del cáncer?",
          de: "Was ist der Hauptvorteil von Antikörper-Wirkstoff-Konjugaten (ADCs) in der Krebstherapie?",
          nl: "Wat is het hoofdvoordeel van antilichaam-medicijn conjugaten (ADCs) in kankertherapie?"
        },
        options: [
          {
            en: "Targeted delivery of cytotoxic drugs to tumor cells",
            es: "Entrega dirigida de fármacos citotóxicos a células tumorales",
            de: "Gezielte Abgabe zytotoxischer Medikamente an Tumorzellen",
            nl: "Gerichte aflevering van cytotoxische medicijnen aan tumorcellen"
          },
          {
            en: "Lower manufacturing costs",
            es: "Menores costos de fabricación",
            de: "Niedrigere Herstellungskosten",
            nl: "Lagere productiekosten"
          },
          {
            en: "Oral administration capability",
            es: "Capacidad de administración oral",
            de: "Orale Verabreichungsmöglichkeit",
            nl: "Orale toediening mogelijkheid"
          },
          {
            en: "Longer shelf life",
            es: "Mayor vida útil",
            de: "Längere Haltbarkeit",
            nl: "Langere houdbaarheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "ADCs combine the targeting specificity of monoclonal antibodies with the cytotoxic power of chemotherapy drugs, delivering potent drugs directly to cancer cells while sparing healthy tissue.",
          es: "Los ADCs combinan la especificidad de direccionamiento de anticuerpos monoclonales con el poder citotóxico de fármacos de quimioterapia, entregando fármacos potentes directamente a células cancerosas mientras preservan tejido sano.",
          de: "ADCs kombinieren die Zielspezifität monoklonaler Antikörper mit der zytotoxischen Kraft von Chemotherapie-Medikamenten und liefern potente Medikamente direkt an Krebszellen, während gesundes Gewebe geschont wird.",
          nl: "ADCs combineren de targeting specificiteit van monoklonale antilichamen met de cytotoxische kracht van chemotherapie medicijnen, waarbij krachtige medicijnen direct aan kankercellen worden afgeleverd terwijl gezond weefsel wordt gespaard."
        }
      },
      {
        question: {
          en: "What is the main challenge in developing gene therapies for neurological disorders?",
          es: "¿Cuál es el principal desafío en desarrollar terapias génicas para trastornos neurológicos?",
          de: "Was ist die Hauptherausforderung bei der Entwicklung von Gentherapien für neurologische Erkrankungen?",
          nl: "Wat is de hoofduitdaging bij het ontwikkelen van gentherapieën voor neurologische aandoeningen?"
        },
        options: [
          {
            en: "Crossing the blood-brain barrier for effective delivery",
            es: "Cruzar la barrera hematoencefálica para entrega efectiva",
            de: "Überwindung der Blut-Hirn-Schranke für effektive Abgabe",
            nl: "Oversteken van de bloed-hersen barrière voor effectieve aflevering"
          },
          {
            en: "High cost of vector production",
            es: "Alto costo de producción de vectores",
            de: "Hohe Kosten der Vektorproduktion",
            nl: "Hoge kosten van vector productie"
          },
          {
            en: "Limited understanding of brain anatomy",
            es: "Comprensión limitada de la anatomía cerebral",
            de: "Begrenztes Verständnis der Gehirnanatomie",
            nl: "Beperkt begrip van hersenanatomie"
          },
          {
            en: "Lack of suitable animal models",
            es: "Falta de modelos animales adecuados",
            de: "Mangel an geeigneten Tiermodellen",
            nl: "Gebrek aan geschikte diermodellen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The blood-brain barrier prevents most therapeutic agents from reaching the brain, making it extremely challenging to deliver gene therapy vectors to neural tissues effectively and safely.",
          es: "La barrera hematoencefálica previene que la mayoría de agentes terapéuticos alcancen el cerebro, haciendo extremadamente desafiante entregar vectores de terapia génica a tejidos neurales de manera efectiva y segura.",
          de: "Die Blut-Hirn-Schranke verhindert, dass die meisten therapeutischen Wirkstoffe das Gehirn erreichen, was es extrem herausfordernd macht, Gentherapie-Vektoren effektiv und sicher an Nervengewebe abzugeben.",
          nl: "De bloed-hersen barrière voorkomt dat de meeste therapeutische middelen de hersenen bereiken, waardoor het extreem uitdagend is om gentherapie vectoren effectief en veilig af te leveren aan neurale weefsels."
        }
      },
      {
        question: {
          en: "What is the primary application of pharmacogenomics in clinical practice?",
          es: "¿Cuál es la aplicación principal de la farmacogenómica en la práctica clínica?",
          de: "Was ist die Hauptanwendung der Pharmakogenomik in der klinischen Praxis?",
          nl: "Wat is de primaire toepassing van farmacogenomics in de klinische praktijk?"
        },
        options: [
          {
            en: "Optimizing drug selection and dosing based on genetic variants",
            es: "Optimizar la selección de fármacos y dosificación basada en variantes genéticas",
            de: "Optimierung der Arzneimittelauswahl und -dosierung basierend auf genetischen Varianten",
            nl: "Optimaliseren van medicijn selectie en dosering gebaseerd op genetische varianten"
          },
          {
            en: "Developing new drug compounds",
            es: "Desarrollar nuevos compuestos farmacológicos",
            de: "Entwicklung neuer Arzneimittelverbindungen",
            nl: "Ontwikkeling van nieuwe medicijn verbindingen"
          },
          {
            en: "Studying drug side effects",
            es: "Estudiar efectos secundarios de fármacos",
            de: "Untersuchung von Arzneimittelnebenwirkungen",
            nl: "Bestudering van medicijn bijwerkingen"
          },
          {
            en: "Manufacturing generic drugs",
            es: "Fabricar medicamentos genéricos",
            de: "Herstellung von Generika",
            nl: "Productie van generieke medicijnen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Pharmacogenomics uses genetic information to predict how patients will respond to specific medications, enabling personalized drug selection, optimal dosing, and reduction of adverse drug reactions.",
          es: "La farmacogenómica usa información genética para predecir cómo los pacientes responderán a medicamentos específicos, permitiendo selección personalizada de fármacos, dosificación óptima y reducción de reacciones adversas a medicamentos.",
          de: "Pharmakogenomik verwendet genetische Informationen zur Vorhersage, wie Patienten auf spezifische Medikamente reagieren werden, wodurch personalisierte Arzneimittelauswahl, optimale Dosierung und Reduzierung unerwünschter Arzneimittelreaktionen ermöglicht werden.",
          nl: "Farmacogenomics gebruikt genetische informatie om te voorspellen hoe patiënten zullen reageren op specifieke medicijnen, wat gepersonaliseerde medicijn selectie, optimale dosering en vermindering van ongewenste medicijn reacties mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the key advantage of organ-on-chip models in drug development?",
          es: "¿Cuál es la ventaja clave de los modelos de órgano en chip en el desarrollo de fármacos?",
          de: "Was ist der Hauptvorteil von Organ-on-Chip-Modellen in der Arzneimittelentwicklung?",
          nl: "Wat is het belangrijkste voordeel van orgaan-op-chip modellen in medicijnontwikkeling?"
        },
        options: [
          {
            en: "More physiologically relevant preclinical testing",
            es: "Pruebas preclínicas más fisiológicamente relevantes",
            de: "Physiologisch relevantere präklinische Tests",
            nl: "Fysiologisch relevantere preklinische testen"
          },
          {
            en: "Lower development costs only",
            es: "Solo menores costos de desarrollo",
            de: "Nur niedrigere Entwicklungskosten",
            nl: "Alleen lagere ontwikkelingskosten"
          },
          {
            en: "Faster drug synthesis",
            es: "Síntesis de fármacos más rápida",
            de: "Schnellere Arzneimittelsynthese",
            nl: "Snellere medicijn synthese"
          },
          {
            en: "Automated data collection",
            es: "Recolección automatizada de datos",
            de: "Automatisierte Datensammlung",
            nl: "Geautomatiseerde data verzameling"
          }
        ],
        correct: 0,
        explanation: {
          en: "Organ-on-chip models recreate human organ functions more accurately than traditional cell cultures or animal models, providing better predictions of drug efficacy and toxicity before human trials.",
          es: "Los modelos de órgano en chip recrean las funciones de órganos humanos más precisamente que cultivos celulares tradicionales o modelos animales, proporcionando mejores predicciones de eficacia y toxicidad de fármacos antes de ensayos humanos.",
          de: "Organ-on-Chip-Modelle bilden menschliche Organfunktionen genauer nach als traditionelle Zellkulturen oder Tiermodelle und bieten bessere Vorhersagen der Arzneimittelwirksamkeit und -toxizität vor menschlichen Studien.",
          nl: "Orgaan-op-chip modellen recreëren menselijke orgaanfuncties nauwkeuriger dan traditionele celkweken of diermodellen, wat betere voorspellingen van medicijn werkzaamheid en toxiciteit biedt voor menselijke trials."
        }
      },
      {
        question: {
          en: "What is the primary goal of companion diagnostics in personalized medicine?",
          es: "¿Cuál es el objetivo principal de los diagnósticos complementarios en medicina personalizada?",
          de: "Was ist das Hauptziel der Begleitdiagnostik in der personalisierten Medizin?",
          nl: "Wat is het hoofddoel van companion diagnostics in gepersonaliseerde geneeskunde?"
        },
        options: [
          {
            en: "Identify patients who will benefit from specific targeted therapies",
            es: "Identificar pacientes que se beneficiarán de terapias dirigidas específicas",
            de: "Patienten identifizieren, die von spezifischen zielgerichteten Therapien profitieren werden",
            nl: "Patiënten identificeren die baat zullen hebben bij specifieke gerichte therapieën"
          },
          {
            en: "Reduce healthcare costs globally",
            es: "Reducir costos de atención médica globalmente",
            de: "Gesundheitskosten global reduzieren",
            nl: "Wereldwijd zorgkosten verlagen"
          },
          {
            en: "Speed up drug approval processes",
            es: "Acelerar procesos de aprobación de fármacos",
            de: "Arzneimittelzulassungsverfahren beschleunigen",
            nl: "Medicijn goedkeuringsprocedures versnellen"
          },
          {
            en: "Replace all traditional diagnostic methods",
            es: "Reemplazar todos los métodos diagnósticos tradicionales",
            de: "Alle traditionellen Diagnosemethoden ersetzen",
            nl: "Alle traditionele diagnostische methoden vervangen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Companion diagnostics test for specific biomarkers to determine which patients are most likely to respond to particular targeted therapies, ensuring more effective treatment selection and better patient outcomes.",
          es: "Los diagnósticos complementarios prueban biomarcadores específicos para determinar qué pacientes tienen más probabilidades de responder a terapias dirigidas particulares, asegurando selección de tratamiento más efectiva y mejores resultados para pacientes.",
          de: "Begleitdiagnostik testet auf spezifische Biomarker, um zu bestimmen, welche Patienten am wahrscheinlichsten auf bestimmte zielgerichtete Therapien ansprechen, wodurch effektivere Behandlungsauswahl und bessere Patientenergebnisse gewährleistet werden.",
          nl: "Companion diagnostics testen voor specifieke biomarkers om te bepalen welke patiënten het meest waarschijnlijk zullen reageren op bepaalde gerichte therapieën, wat effectievere behandeling selectie en betere patiënt uitkomsten verzekert."
        }
      },
      {
        question: {
          en: "What is the main application of CRISPR base editing in clinical trials?",
          es: "¿Cuál es la aplicación principal de la edición de bases CRISPR en ensayos clínicos?",
          de: "Was ist die Hauptanwendung von CRISPR-Base-Editing in klinischen Studien?",
          nl: "Wat is de hoofdtoepassing van CRISPR base editing in klinische trials?"
        },
        options: [
          {
            en: "Correcting single nucleotide mutations causing genetic diseases",
            es: "Corregir mutaciones de un solo nucleótido que causan enfermedades genéticas",
            de: "Korrektur von Einzelnukleotid-Mutationen, die genetische Krankheiten verursachen",
            nl: "Corrigeren van enkele nucleotide mutaties die genetische ziekten veroorzaken"
          },
          {
            en: "Large DNA deletions and insertions",
            es: "Grandes deleciones e inserciones de ADN",
            de: "Große DNA-Deletionen und -Insertionen",
            nl: "Grote DNA-deleties en inserties"
          },
          {
            en: "Whole chromosome replacements",
            es: "Reemplazos completos de cromosomas",
            de: "Vollständige Chromosomenersetzungen",
            nl: "Volledige chromosoom vervangingen"
          },
          {
            en: "Mitochondrial DNA editing",
            es: "Edición de ADN mitocondrial",
            de: "Mitochondriale DNA-Editierung",
            nl: "Mitochondriaal DNA bewerking"
          }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR base editors are being tested in clinical trials for correcting point mutations that cause genetic diseases like sickle cell disease and beta-thalassemia, offering precise single-base corrections without double-strand breaks.",
          es: "Los editores de bases CRISPR están siendo probados en ensayos clínicos para corregir mutaciones puntuales que causan enfermedades genéticas como enfermedad de células falciformes y beta-talasemia, ofreciendo correcciones precisas de una sola base sin roturas de doble cadena.",
          de: "CRISPR-Base-Editoren werden in klinischen Studien zur Korrektur von Punktmutationen getestet, die genetische Krankheiten wie Sichelzellanämie und Beta-Thalassämie verursachen, und bieten präzise Einzelbasen-Korrekturen ohne Doppelstrangbrüche.",
          nl: "CRISPR base editors worden getest in klinische trials voor het corrigeren van puntmutaties die genetische ziekten zoals sikkelcelanemie en bèta-thalassemie veroorzaken, wat precieze enkele-base correcties biedt zonder dubbelstrengs breuken."
        }
      },
      {
        question: {
          en: "What is the primary challenge in scaling up cell therapy manufacturing?",
          es: "¿Cuál es el principal desafío en escalar la fabricación de terapia celular?",
          de: "Was ist die Hauptherausforderung bei der Skalierung der Zelltherapie-Herstellung?",
          nl: "Wat is de hoofduitdaging bij het opschalen van celtherapie productie?"
        },
        options: [
          {
            en: "Maintaining cell quality and consistency at large scale",
            es: "Mantener la calidad y consistencia celular a gran escala",
            de: "Aufrechterhaltung der Zellqualität und -konsistenz im großen Maßstab",
            nl: "Behoud van celkwaliteit en consistentie op grote schaal"
          },
          {
            en: "Finding enough raw materials",
            es: "Encontrar suficientes materias primas",
            de: "Ausreichende Rohstoffe finden",
            nl: "Voldoende grondstoffen vinden"
          },
          {
            en: "Training manufacturing personnel",
            es: "Entrenar personal de fabricación",
            de: "Herstellungspersonal ausbilden",
            nl: "Productie personeel trainen"
          },
          {
            en: "Obtaining regulatory approvals",
            es: "Obtener aprobaciones regulatorias",
            de: "Behördliche Genehmigungen erhalten",
            nl: "Regulatoire goedkeuringen verkrijgen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cell therapies require living cells that must maintain viability, potency, and safety characteristics throughout the manufacturing process, making it challenging to scale up while preserving therapeutic properties.",
          es: "Las terapias celulares requieren células vivas que deben mantener viabilidad, potencia y características de seguridad durante todo el proceso de fabricación, haciendo desafiante escalar mientras se preservan las propiedades terapéuticas.",
          de: "Zelltherapien erfordern lebende Zellen, die Viabilität, Potenz und Sicherheitseigenschaften während des gesamten Herstellungsprozesses beibehalten müssen, was es herausfordernd macht, zu skalieren, während therapeutische Eigenschaften erhalten bleiben.",
          nl: "Celtherapieën vereisen levende cellen die levensvatbaarheid, potentie en veiligheidseigenschappen moeten behouden gedurende het hele productieproces, wat het uitdagend maakt om op te schalen terwijl therapeutische eigenschappen behouden blijven."
        }
      },
      {
        question: {
          en: "What is the key advantage of using viral vectors in gene therapy?",
          es: "¿Cuál es la ventaja clave de usar vectores virales en terapia génica?",
          de: "Was ist der Hauptvorteil der Verwendung viraler Vektoren in der Gentherapie?",
          nl: "Wat is het belangrijkste voordeel van het gebruik van virale vectoren in gentherapie?"
        },
        options: [
          {
            en: "High transduction efficiency and tissue-specific targeting",
            es: "Alta eficiencia de transducción y direccionamiento específico de tejido",
            de: "Hohe Transduktionseffizienz und gewebsspezifische Zielsteuerung",
            nl: "Hoge transductie efficiëntie en weefsel-specifieke targeting"
          },
          {
            en: "No immunogenicity concerns",
            es: "Sin preocupaciones de inmunogenicidad",
            de: "Keine Immunogenitätsprobleme",
            nl: "Geen immunogeniteit zorgen"
          },
          {
            en: "Easy large-scale production",
            es: "Producción fácil a gran escala",
            de: "Einfache Großproduktion",
            nl: "Eenvoudige grootschalige productie"
          },
          {
            en: "Low manufacturing costs",
            es: "Bajos costos de fabricación",
            de: "Niedrige Herstellungskosten",
            nl: "Lage productiekosten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Viral vectors have evolved natural mechanisms for efficient cell entry and can be engineered to target specific cell types, making them highly effective delivery systems for therapeutic genes.",
          es: "Los vectores virales han evolucionado mecanismos naturales para entrada celular eficiente y pueden diseñarse para dirigirse a tipos celulares específicos, haciéndolos sistemas de entrega altamente efectivos para genes terapéuticos.",
          de: "Virale Vektoren haben natürliche Mechanismen für effizienten Zelleintritt entwickelt und können für spezifische Zelltypen entwickelt werden, was sie zu hocheffektiven Abgabesystemen für therapeutische Gene macht.",
          nl: "Virale vectoren hebben natuurlijke mechanismen voor efficiënte celentree ontwikkeld en kunnen worden ontworpen om specifieke celtypes te targeten, waardoor ze zeer effectieve afleversystemen voor therapeutische genen zijn."
        }
      },
      {
        question: {
          en: "What is the primary application of tissue engineering in regenerative medicine?",
          es: "¿Cuál es la aplicación principal de la ingeniería de tejidos en medicina regenerativa?",
          de: "Was ist die Hauptanwendung des Tissue Engineering in der regenerativen Medizin?",
          nl: "Wat is de primaire toepassing van tissue engineering in regeneratieve geneeskunde?"
        },
        options: [
          {
            en: "Creating functional tissue replacements for damaged organs",
            es: "Crear reemplazos de tejido funcionales para órganos dañados",
            de: "Funktionelle Gewebeersätze für beschädigte Organe schaffen",
            nl: "Functionele weefsel vervangingen creëren voor beschadigde organen"
          },
          {
            en: "Developing new surgical instruments",
            es: "Desarrollar nuevos instrumentos quirúrgicos",
            de: "Neue chirurgische Instrumente entwickeln",
            nl: "Nieuwe chirurgische instrumenten ontwikkelen"
          },
          {
            en: "Manufacturing artificial blood",
            es: "Fabricar sangre artificial",
            de: "Künstliches Blut herstellen",
            nl: "Kunstmatig bloed produceren"
          },
          {
            en: "Producing synthetic hormones",
            es: "Producir hormonas sintéticas",
            de: "Synthetische Hormone produzieren",
            nl: "Synthetische hormonen produceren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Tissue engineering combines scaffolds, cells, and bioactive factors to create functional tissue constructs that can replace or repair damaged organs and tissues, addressing organ shortage and transplant rejection issues.",
          es: "La ingeniería de tejidos combina andamios, células y factores bioactivos para crear constructos de tejido funcionales que pueden reemplazar o reparar órganos y tejidos dañados, abordando problemas de escasez de órganos y rechazo de trasplantes.",
          de: "Tissue Engineering kombiniert Gerüste, Zellen und bioaktive Faktoren, um funktionelle Gewebekonstrukte zu schaffen, die beschädigte Organe und Gewebe ersetzen oder reparieren können, wodurch Organmangel und Transplantatabstoßung angegangen werden.",
          nl: "Tissue engineering combineert scaffolds, cellen en bioactieve factoren om functionele weefsel constructen te creëren die beschadigde organen en weefsels kunnen vervangen of repareren, wat orgaantekort en transplantaat afstoting problemen aanpakt."
        }
      },
      {
        question: {
          en: "What is the main advantage of using lipid nanoparticles for drug delivery?",
          es: "¿Cuál es la principal ventaja de usar nanopartículas lipídicas para entrega de fármacos?",
          de: "Was ist der Hauptvorteil der Verwendung von Lipid-Nanopartikeln für die Arzneimittelabgabe?",
          nl: "Wat is het hoofdvoordeel van het gebruik van lipide nanodeeltjes voor medicijn aflevering?"
        },
        options: [
          {
            en: "Enhanced cellular uptake and protection of therapeutic cargo",
            es: "Captación celular mejorada y protección de carga terapéutica",
            de: "Verbesserte zelluläre Aufnahme und Schutz der therapeutischen Fracht",
            nl: "Verbeterde cellulaire opname en bescherming van therapeutische lading"
          },
          {
            en: "Lower production complexity",
            es: "Menor complejidad de producción",
            de: "Geringere Produktionskomplexität",
            nl: "Lagere productie complexiteit"
          },
          {
            en: "Room temperature stability",
            es: "Estabilidad a temperatura ambiente",
            de: "Raumtemperaturstabilität",
            nl: "Kamertemperatuur stabiliteit"
          },
          {
            en: "Unlimited shelf life",
            es: "Vida útil ilimitada",
            de: "Unbegrenzte Haltbarkeit",
            nl: "Onbeperkte houdbaarheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "Lipid nanoparticles can fuse with cell membranes to facilitate cellular uptake and protect sensitive therapeutic molecules like mRNA and siRNA from degradation, improving delivery efficiency.",
          es: "Las nanopartículas lipídicas pueden fusionarse con membranas celulares para facilitar la captación celular y proteger moléculas terapéuticas sensibles como mRNA y siRNA de la degradación, mejorando la eficiencia de entrega.",
          de: "Lipid-Nanopartikel können mit Zellmembranen fusionieren, um die zelluläre Aufnahme zu erleichtern und empfindliche therapeutische Moleküle wie mRNA und siRNA vor Abbau zu schützen, wodurch die Abgabeeffizienz verbessert wird.",
          nl: "Lipide nanodeeltjes kunnen fuseren met celmembranen om cellulaire opname te faciliteren en gevoelige therapeutische moleculen zoals mRNA en siRNA te beschermen tegen degradatie, wat de aflever efficiëntie verbetert."
        }
      },
      {
        question: {
          en: "What is the primary goal of digital therapeutics in healthcare?",
          es: "¿Cuál es el objetivo principal de las terapéuticas digitales en atención médica?",
          de: "Was ist das Hauptziel digitaler Therapeutika im Gesundheitswesen?",
          nl: "Wat is het hoofddoel van digitale therapeutics in de gezondheidszorg?"
        },
        options: [
          {
            en: "Delivering evidence-based therapeutic interventions through software",
            es: "Entregar intervenciones terapéuticas basadas en evidencia a través de software",
            de: "Evidenzbasierte therapeutische Interventionen durch Software liefern",
            nl: "Evidence-gebaseerde therapeutische interventies leveren via software"
          },
          {
            en: "Replacing all traditional medications",
            es: "Reemplazar todos los medicamentos tradicionales",
            de: "Alle traditionellen Medikamente ersetzen",
            nl: "Alle traditionele medicijnen vervangen"
          },
          {
            en: "Reducing healthcare provider workload",
            es: "Reducir la carga de trabajo de proveedores de salud",
            de: "Arbeitsbelastung der Gesundheitsdienstleister reduzieren",
            nl: "Werkdruk van zorgverleners verminderen"
          },
          {
            en: "Automating medical procedures",
            es: "Automatizar procedimientos médicos",
            de: "Medizinische Verfahren automatisieren",
            nl: "Medische procedures automatiseren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Digital therapeutics use software applications to deliver clinically validated therapeutic interventions, often for behavioral and mental health conditions, providing accessible and scalable treatment options.",
          es: "Las terapéuticas digitales usan aplicaciones de software para entregar intervenciones terapéuticas clínicamente validadas, a menudo para condiciones de salud mental y conductual, proporcionando opciones de tratamiento accesibles y escalables.",
          de: "Digitale Therapeutika verwenden Software-Anwendungen zur Bereitstellung klinisch validierter therapeutischer Interventionen, oft für Verhaltens- und psychische Gesundheitszustände, und bieten zugängliche und skalierbare Behandlungsoptionen.",
          nl: "Digitale therapeutics gebruiken software applicaties om klinisch gevalideerde therapeutische interventies te leveren, vaak voor gedrag en mentale gezondheidsomstandigheden, wat toegankelijke en schaalbare behandeling opties biedt."
        }
      },
      {
        question: {
          en: "What is the main challenge in developing universal cancer vaccines?",
          es: "¿Cuál es el principal desafío en desarrollar vacunas universales contra el cáncer?",
          de: "Was ist die Hauptherausforderung bei der Entwicklung universeller Krebsimpfstoffe?",
          nl: "Wat is de hoofduitdaging bij het ontwikkelen van universele kankervaccins?"
        },
        options: [
          {
            en: "Identifying shared tumor antigens across different cancer types",
            es: "Identificar antígenos tumorales compartidos entre diferentes tipos de cáncer",
            de: "Identifizierung geteilter Tumorantigene über verschiedene Krebsarten hinweg",
            nl: "Gedeelde tumor antigenen identificeren over verschillende kankertypes"
          },
          {
            en: "Manufacturing at sufficient scale",
            es: "Fabricar a escala suficiente",
            de: "Herstellung in ausreichendem Maßstab",
            nl: "Produceren op voldoende schaal"
          },
          {
            en: "Reducing production costs",
            es: "Reducir costos de producción",
            de: "Produktionskosten reduzieren",
            nl: "Productiekosten verlagen"
          },
          {
            en: "Ensuring cold chain distribution",
            es: "Asegurar distribución de cadena fría",
            de: "Kühlketten-Verteilung sicherstellen",
            nl: "Koude keten distributie verzekeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cancer cells are highly heterogeneous and each tumor type has unique characteristics, making it challenging to identify common antigens that could serve as targets for a universal cancer vaccine effective across different malignancies.",
          es: "Las células cancerosas son altamente heterogéneas y cada tipo de tumor tiene características únicas, haciendo desafiante identificar antígenos comunes que podrían servir como objetivos para una vacuna universal contra el cáncer efectiva en diferentes malignidades.",
          de: "Krebszellen sind hochgradig heterogen und jeder Tumortyp hat einzigartige Eigenschaften, was es herausfordernd macht, gemeinsame Antigene zu identifizieren, die als Ziele für einen universellen Krebsimpfstoff dienen könnten, der bei verschiedenen Malignomen wirksam ist.",
          nl: "Kankercellen zijn zeer heterogeen en elk tumortype heeft unieke kenmerken, waardoor het uitdagend is om gemeenschappelijke antigenen te identificeren die zouden kunnen dienen als doelen voor een universeel kankervaccin dat effectief is over verschillende maligniteiten."
        }
      },
      {
        question: {
          en: "What is the primary advantage of using artificial intelligence in drug discovery?",
          es: "¿Cuál es la principal ventaja de usar inteligencia artificial en descubrimiento de fármacos?",
          de: "Was ist der Hauptvorteil der Verwendung künstlicher Intelligenz in der Arzneimittelforschung?",
          nl: "Wat is het hoofdvoordeel van het gebruik van kunstmatige intelligentie in medicijnontdekking?"
        },
        options: [
          {
            en: "Accelerating compound identification and optimization processes",
            es: "Acelerar procesos de identificación y optimización de compuestos",
            de: "Beschleunigung von Verbindungsidentifizierungs- und Optimierungsprozessen",
            nl: "Versnelling van verbinding identificatie en optimalisatie processen"
          },
          {
            en: "Eliminating the need for clinical trials",
            es: "Eliminar la necesidad de ensayos clínicos",
            de: "Beseitigung der Notwendigkeit klinischer Studien",
            nl: "Elimineren van de behoefte aan klinische trials"
          },
          {
            en: "Reducing laboratory space requirements",
            es: "Reducir requisitos de espacio de laboratorio",
            de: "Reduzierung der Laborraum-Anforderungen",
            nl: "Vermindering van laboratorium ruimte vereisten"
          },
          {
            en: "Automated drug manufacturing",
            es: "Fabricación automatizada de fármacos",
            de: "Automatisierte Arzneimittelherstellung",
            nl: "Geautomatiseerde medicijn productie"
          }
        ],
        correct: 0,
        explanation: {
          en: "AI can analyze vast datasets to predict molecular properties, identify promising drug targets, and optimize lead compounds much faster than traditional methods, significantly reducing the time and cost of early drug discovery phases.",
          es: "La IA puede analizar vastos conjuntos de datos para predecir propiedades moleculares, identificar objetivos prometedores de fármacos y optimizar compuestos líder mucho más rápido que métodos tradicionales, reduciendo significativamente el tiempo y costo de las fases tempranas de descubrimiento de fármacos.",
          de: "KI kann riesige Datensätze analysieren, um molekulare Eigenschaften vorherzusagen, vielversprechende Arzneimittelziele zu identifizieren und Leitverbindungen viel schneller als traditionelle Methoden zu optimieren, wodurch Zeit und Kosten früher Arzneimittelentdeckungsphasen erheblich reduziert werden.",
          nl: "AI kan uitgebreide datasets analyseren om moleculaire eigenschappen te voorspellen, veelbelovende medicijn doelen te identificeren en lead verbindingen veel sneller te optimaliseren dan traditionele methoden, wat de tijd en kosten van vroege medicijn ontdekkingsfasen aanzienlijk vermindert."
        }
      },
      {
        question: {
          en: "What is the key innovation of next-generation CAR-T cell therapies?",
          es: "¿Cuál es la innovación clave de las terapias de células CAR-T de siguiente generación?",
          de: "Was ist die Schlüsselinnovation der nächsten Generation von CAR-T-Zelltherapien?",
          nl: "Wat is de belangrijkste innovatie van volgende generatie CAR-T celtherapieën?"
        },
        options: [
          {
            en: "Enhanced safety switches and improved tumor targeting",
            es: "Interruptores de seguridad mejorados y direccionamiento tumoral mejorado",
            de: "Verbesserte Sicherheitsschalter und verbessertes Tumor-Targeting",
            nl: "Verbeterde veiligheidsschakelaars en verbeterde tumor targeting"
          },
          {
            en: "Lower manufacturing costs only",
            es: "Solo menores costos de fabricación",
            de: "Nur niedrigere Herstellungskosten",
            nl: "Alleen lagere productiekosten"
          },
          {
            en: "Faster cell expansion rates",
            es: "Tasas de expansión celular más rápidas",
            de: "Schnellere Zellexpansionsraten",
            nl: "Snellere cel expansie snelheden"
          },
          {
            en: "Simpler administration protocols",
            es: "Protocolos de administración más simples",
            de: "Einfachere Verabreichungsprotokolle",
            nl: "Eenvoudigere toediening protocollen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Next-generation CAR-T cells incorporate safety mechanisms like suicide switches to control potential toxicities, improved CAR designs for better tumor recognition, and enhanced persistence to provide more effective and safer treatments.",
          es: "Las células CAR-T de siguiente generación incorporan mecanismos de seguridad como interruptores suicidas para controlar toxicidades potenciales, diseños CAR mejorados para mejor reconocimiento tumoral y persistencia mejorada para proporcionar tratamientos más efectivos y seguros.",
          de: "CAR-T-Zellen der nächsten Generation integrieren Sicherheitsmechanismen wie Selbstzerstörungsschalter zur Kontrolle potenzieller Toxizitäten, verbesserte CAR-Designs für bessere Tumorerkennung und verbesserte Persistenz für effektivere und sicherere Behandlungen.",
          nl: "Volgende generatie CAR-T cellen incorporeren veiligheidsmechanismen zoals zelfmoordschakelaars om potentiële toxiciteiten te controleren, verbeterde CAR-ontwerpen voor betere tumorherkenning en verbeterde persistentie om effectievere en veiligere behandelingen te bieden."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/molecular-biology', level10);
  }
})();
