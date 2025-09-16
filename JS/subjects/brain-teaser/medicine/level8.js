// Medicine - Level 8: Public Health and Epidemiology
(function() {
  const level8 = {
    name: {
      en: "Public Health and Epidemiology",
      es: "Salud Pública y Epidemiología",
      de: "Öffentliche Gesundheit und Epidemiologie",
      nl: "Volksgezondheid en Epidemiologie"
    },
    questions: [
      {
        question: {
          en: "What does 'incidence' mean in epidemiology?",
          es: "¿Qué significa 'incidencia' en epidemiología?",
          de: "Was bedeutet 'Inzidenz' in der Epidemiologie?",
          nl: "Wat betekent 'incidentie' in de epidemiologie?"
        },
        options: [
          { en: "Number of new cases in a specific time period", es: "Número de casos nuevos en un período específico", de: "Anzahl neuer Fälle in einem bestimmten Zeitraum", nl: "Aantal nieuwe gevallen in een specifieke tijdsperiode" },
          { en: "Total number of existing cases", es: "Número total de casos existentes", de: "Gesamtzahl bestehender Fälle", nl: "Totaal aantal bestaande gevallen" },
          { en: "Death rate from disease", es: "Tasa de mortalidad por enfermedad", de: "Sterblichkeitsrate durch Krankheit", nl: "Sterftecijfer door ziekte" },
          { en: "Recovery rate from disease", es: "Tasa de recuperación de la enfermedad", de: "Heilungsrate von Krankheiten", nl: "Herstelpercentage van ziekte" }
        ],
        correct: 0,
        explanation: {
          en: "Incidence refers to the number of new cases of a disease occurring in a specific population during a defined time period. It measures the risk of developing the disease.",
          es: "La incidencia se refiere al número de casos nuevos de una enfermedad que ocurren en una población específica durante un período de tiempo definido. Mide el riesgo de desarrollar la enfermedad.",
          de: "Inzidenz bezieht sich auf die Anzahl neuer Krankheitsfälle, die in einer bestimmten Population während eines definierten Zeitraums auftreten. Sie misst das Risiko, die Krankheit zu entwickeln.",
          nl: "Incidentie verwijst naar het aantal nieuwe gevallen van een ziekte die optreden in een specifieke populatie gedurende een gedefinieerde tijdsperiode. Het meet het risico op het ontwikkelen van de ziekte."
        }
      },
      {
        question: {
          en: "What is herd immunity?",
          es: "¿Qué es la inmunidad de rebaño?",
          de: "Was ist Herdenimmunität?",
          nl: "Wat is kudde-immuniteit?"
        },
        options: [
          { en: "Protection of community when high percentage is immune", es: "Protección de la comunidad cuando un alto porcentaje es inmune", de: "Schutz der Gemeinschaft bei hohem Immunisierungsgrad", nl: "Bescherming van gemeenschap wanneer hoog percentage immuun is" },
          { en: "Individual immunity after vaccination", es: "Inmunidad individual después de vacunación", de: "Individuelle Immunität nach Impfung", nl: "Individuele immuniteit na vaccinatie" },
          { en: "Natural immunity from birth", es: "Inmunidad natural desde el nacimiento", de: "Natürliche Immunität von Geburt an", nl: "Natuurlijke immuniteit vanaf geboorte" },
          { en: "Temporary immunity from medication", es: "Inmunidad temporal por medicación", de: "Temporäre Immunität durch Medikamente", nl: "Tijdelijke immuniteit door medicatie" }
        ],
        correct: 0,
        explanation: {
          en: "Herd immunity occurs when a large percentage of a population becomes immune to a disease, making its spread unlikely and protecting the entire community, including vulnerable individuals who cannot be vaccinated.",
          es: "La inmunidad de rebaño ocurre cuando un gran porcentaje de una población se vuelve inmune a una enfermedad, haciendo improbable su propagación y protegiendo a toda la comunidad, incluyendo individuos vulnerables que no pueden ser vacunados.",
          de: "Herdenimmunität tritt auf, wenn ein großer Prozentsatz einer Population gegen eine Krankheit immun wird, was ihre Ausbreitung unwahrscheinlich macht und die gesamte Gemeinschaft schützt, einschließlich vulnerabler Personen, die nicht geimpft werden können.",
          nl: "Kudde-immuniteit treedt op wanneer een groot percentage van een populatie immuun wordt voor een ziekte, waardoor verspreiding onwaarschijnlijk wordt en de hele gemeenschap wordt beschermd, inclusief kwetsbare individuen die niet gevaccineerd kunnen worden."
        }
      },
      {
        question: {
          en: "What does 'prevalence' measure in epidemiology?",
          es: "¿Qué mide la 'prevalencia' en epidemiología?",
          de: "Was misst 'Prävalenz' in der Epidemiologie?",
          nl: "Wat meet 'prevalentie' in de epidemiologie?"
        },
        options: [
          { en: "Total cases existing at a specific time", es: "Casos totales existentes en un momento específico", de: "Gesamte bestehende Fälle zu einem bestimmten Zeitpunkt", nl: "Totale gevallen die bestaan op een specifiek moment" },
          { en: "New cases occurring per year", es: "Casos nuevos que ocurren por año", de: "Neue Fälle pro Jahr", nl: "Nieuwe gevallen die per jaar optreden" },
          { en: "Death rate from disease", es: "Tasa de mortalidad por enfermedad", de: "Sterblichkeitsrate durch Krankheit", nl: "Sterftecijfer door ziekte" },
          { en: "Speed of disease transmission", es: "Velocidad de transmisión de la enfermedad", de: "Geschwindigkeit der Krankheitsübertragung", nl: "Snelheid van ziekteoverdracht" }
        ],
        correct: 0,
        explanation: {
          en: "Prevalence measures the total number of cases of a disease existing in a population at a specific point in time, regardless of when the disease began. It indicates the burden of disease in the population.",
          es: "La prevalencia mide el número total de casos de una enfermedad que existen en una población en un punto específico en el tiempo, independientemente de cuándo comenzó la enfermedad. Indica la carga de enfermedad en la población.",
          de: "Prävalenz misst die Gesamtzahl der Krankheitsfälle, die zu einem bestimmten Zeitpunkt in einer Population existieren, unabhängig davon, wann die Krankheit begann. Sie zeigt die Krankheitslast in der Population an.",
          nl: "Prevalentie meet het totale aantal gevallen van een ziekte dat bestaat in een populatie op een specifiek tijdstip, ongeacht wanneer de ziekte begon. Het geeft de ziektelast in de populatie aan."
        }
      },
      {
        question: {
          en: "What is the primary purpose of vaccination programs?",
          es: "¿Cuál es el propósito principal de los programas de vacunación?",
          de: "Was ist der Hauptzweck von Impfprogrammen?",
          nl: "Wat is het primaire doel van vaccinatieprogramma's?"
        },
        options: [
          { en: "Prevent infectious diseases in populations", es: "Prevenir enfermedades infecciosas en poblaciones", de: "Infektionskrankheiten in Populationen verhindern", nl: "Infectieziekten in populaties voorkomen" },
          { en: "Treat existing infections", es: "Tratar infecciones existentes", de: "Bestehende Infektionen behandeln", nl: "Bestaande infecties behandelen" },
          { en: "Diagnose diseases early", es: "Diagnosticar enfermedades temprano", de: "Krankheiten früh diagnostizieren", nl: "Ziekten vroeg diagnosticeren" },
          { en: "Reduce healthcare costs only", es: "Solo reducir costos de salud", de: "Nur Gesundheitskosten reduzieren", nl: "Alleen zorgkosten verlagen" }
        ],
        correct: 0,
        explanation: {
          en: "Vaccination programs aim to prevent infectious diseases by building immunity in populations before exposure to pathogens. This reduces disease incidence, prevents epidemics, and protects public health.",
          es: "Los programas de vacunación buscan prevenir enfermedades infecciosas construyendo inmunidad en poblaciones antes de la exposición a patógenos. Esto reduce la incidencia de enfermedades, previene epidemias y protege la salud pública.",
          de: "Impfprogramme zielen darauf ab, Infektionskrankheiten zu verhindern, indem sie Immunität in Populationen aufbauen, bevor eine Exposition gegenüber Krankheitserregern erfolgt. Dies reduziert die Krankheitsinzidenz, verhindert Epidemien und schützt die öffentliche Gesundheit.",
          nl: "Vaccinatieprogramma's beogen infectieziekten te voorkomen door immuniteit op te bouwen in populaties voordat blootstelling aan pathogenen plaatsvindt. Dit vermindert ziekte-incidentie, voorkomt epidemieën en beschermt de volksgezondheid."
        }
      },
      {
        question: {
          en: "What is an epidemic?",
          es: "¿Qué es una epidemia?",
          de: "Was ist eine Epidemie?",
          nl: "Wat is een epidemie?"
        },
        options: [
          { en: "Disease outbreak exceeding normal expected levels", es: "Brote de enfermedad que excede niveles normales esperados", de: "Krankheitsausbruch über normal erwartete Niveau", nl: "Ziekte-uitbraak die normale verwachte niveaus overschrijdt" },
          { en: "Single case of rare disease", es: "Caso único de enfermedad rara", de: "Einzelfall einer seltenen Krankheit", nl: "Enkel geval van zeldzame ziekte" },
          { en: "Normal seasonal illness pattern", es: "Patrón normal de enfermedad estacional", de: "Normales saisonales Krankheitsmuster", nl: "Normaal seizoensgebonden ziektepatroon" },
          { en: "Chronic disease in population", es: "Enfermedad crónica en población", de: "Chronische Krankheit in der Population", nl: "Chronische ziekte in populatie" }
        ],
        correct: 0,
        explanation: {
          en: "An epidemic is the occurrence of disease cases in a community or region that clearly exceed the normal expected frequency for that population, time, and place. It indicates an unusual increase in disease incidence.",
          es: "Una epidemia es la ocurrencia de casos de enfermedad en una comunidad o región que claramente excede la frecuencia normal esperada para esa población, tiempo y lugar. Indica un aumento inusual en la incidencia de enfermedad.",
          de: "Eine Epidemie ist das Auftreten von Krankheitsfällen in einer Gemeinschaft oder Region, das die normal erwartete Häufigkeit für diese Population, Zeit und Ort deutlich übersteigt. Sie zeigt eine ungewöhnliche Zunahme der Krankheitsinzidenz an.",
          nl: "Een epidemie is het voorkomen van ziektegvallen in een gemeenschap of regio die duidelijk de normale verwachte frequentie voor die populatie, tijd en plaats overschrijdt. Het duidt op een ongewone toename van ziekte-incidentie."
        }
      },
      {
        question: {
          en: "What is a pandemic?",
          es: "¿Qué es una pandemia?",
          de: "Was ist eine Pandemie?",
          nl: "Wat is een pandemie?"
        },
        options: [
          { en: "Worldwide spread of infectious disease", es: "Propagación mundial de enfermedad infecciosa", de: "Weltweite Ausbreitung einer Infektionskrankheit", nl: "Wereldwijde verspreiding van infectieziekte" },
          { en: "Local disease outbreak", es: "Brote local de enfermedad", de: "Lokaler Krankheitsausbruch", nl: "Lokale ziekte-uitbraak" },
          { en: "Seasonal illness increase", es: "Aumento estacional de enfermedad", de: "Saisonale Krankheitszunahme", nl: "Seizoensgebonden ziekteverhoging" },
          { en: "Single country epidemic", es: "Epidemia de un solo país", de: "Einzelland-Epidemie", nl: "Eén land epidemie" }
        ],
        correct: 0,
        explanation: {
          en: "A pandemic is an epidemic that has spread across multiple countries or continents and affects a large number of people worldwide. It represents the highest level of disease alert by health authorities.",
          es: "Una pandemia es una epidemia que se ha extendido a través de múltiples países o continentes y afecta a un gran número de personas en todo el mundo. Representa el nivel más alto de alerta de enfermedad por las autoridades sanitarias.",
          de: "Eine Pandemie ist eine Epidemie, die sich über mehrere Länder oder Kontinente ausgebreitet hat und eine große Anzahl von Menschen weltweit betrifft. Sie stellt die höchste Stufe des Krankheitsalarms durch Gesundheitsbehörden dar.",
          nl: "Een pandemie is een epidemie die zich heeft verspreid over meerdere landen of continenten en een groot aantal mensen wereldwijd treft. Het vertegenwoordigt het hoogste niveau van ziektealarm door gezondheidsautoriteiten."
        }
      },
      {
        question: {
          en: "What is the basic reproduction number (R0) in epidemiology?",
          es: "¿Qué es el número básico de reproducción (R0) en epidemiología?",
          de: "Was ist die Basisreproduktionszahl (R0) in der Epidemiologie?",
          nl: "Wat is het basis reproductiegetal (R0) in de epidemiologie?"
        },
        options: [
          { en: "Average number of people infected by one case", es: "Número promedio de personas infectadas por un caso", de: "Durchschnittliche Anzahl von Personen, die von einem Fall infiziert werden", nl: "Gemiddeld aantal mensen besmet door één geval" },
          { en: "Total number of infected people", es: "Número total de personas infectadas", de: "Gesamtzahl infizierter Personen", nl: "Totaal aantal besmette mensen" },
          { en: "Recovery rate from infection", es: "Tasa de recuperación de infección", de: "Heilungsrate von Infektion", nl: "Herstelpercentage van infectie" },
          { en: "Death rate from disease", es: "Tasa de mortalidad por enfermedad", de: "Sterblichkeitsrate durch Krankheit", nl: "Sterftecijfer door ziekte" }
        ],
        correct: 0,
        explanation: {
          en: "R0 represents the average number of secondary infections caused by one infected individual in a completely susceptible population. R0 > 1 indicates potential for epidemic spread, while R0 < 1 suggests disease decline.",
          es: "R0 representa el número promedio de infecciones secundarias causadas por un individuo infectado en una población completamente susceptible. R0 > 1 indica potencial de propagación epidémica, mientras que R0 < 1 sugiere declive de la enfermedad.",
          de: "R0 stellt die durchschnittliche Anzahl sekundärer Infektionen dar, die von einer infizierten Person in einer völlig anfälligen Population verursacht werden. R0 > 1 zeigt Potenzial für epidemische Ausbreitung an, während R0 < 1 einen Krankheitsrückgang nahelegt.",
          nl: "R0 vertegenwoordigt het gemiddelde aantal secundaire infecties veroorzaakt door één besmet individu in een volledig vatbare populatie. R0 > 1 duidt op potentieel voor epidemische verspreiding, terwijl R0 < 1 ziekte-afname suggereert."
        }
      },
      {
        question: {
          en: "What is primary prevention in public health?",
          es: "¿Qué es la prevención primaria en salud pública?",
          de: "Was ist Primärprävention in der öffentlichen Gesundheit?",
          nl: "Wat is primaire preventie in de volksgezondheid?"
        },
        options: [
          { en: "Preventing disease before it occurs", es: "Prevenir enfermedad antes de que ocurra", de: "Krankheit verhindern, bevor sie auftritt", nl: "Ziekte voorkomen voordat het optreedt" },
          { en: "Early detection of disease", es: "Detección temprana de enfermedad", de: "Früherkennung von Krankheiten", nl: "Vroege opsporing van ziekte" },
          { en: "Treatment of established disease", es: "Tratamiento de enfermedad establecida", de: "Behandlung etablierter Krankheiten", nl: "Behandeling van gevestigde ziekte" },
          { en: "Rehabilitation after illness", es: "Rehabilitación después de enfermedad", de: "Rehabilitation nach Krankheit", nl: "Revalidatie na ziekte" }
        ],
        correct: 0,
        explanation: {
          en: "Primary prevention aims to prevent disease or injury before it occurs through interventions like vaccination, healthy lifestyle promotion, and environmental modifications to eliminate disease causes.",
          es: "La prevención primaria busca prevenir enfermedad o lesión antes de que ocurra a través de intervenciones como vacunación, promoción de estilos de vida saludables y modificaciones ambientales para eliminar causas de enfermedad.",
          de: "Primärprävention zielt darauf ab, Krankheit oder Verletzung zu verhindern, bevor sie auftritt, durch Interventionen wie Impfung, Förderung gesunder Lebensweise und Umweltmodifikationen zur Eliminierung von Krankheitsursachen.",
          nl: "Primaire preventie beoogt ziekte of letsel te voorkomen voordat het optreedt door interventies zoals vaccinatie, bevordering van gezonde levensstijl en omgevingsmodificaties om ziekteoorzaken te elimineren."
        }
      },
      {
        question: {
          en: "What is secondary prevention?",
          es: "¿Qué es la prevención secundaria?",
          de: "Was ist Sekundärprävention?",
          nl: "Wat is secundaire preventie?"
        },
        options: [
          { en: "Early detection and treatment of disease", es: "Detección temprana y tratamiento de enfermedad", de: "Früherkennung und Behandlung von Krankheiten", nl: "Vroege opsporing en behandeling van ziekte" },
          { en: "Preventing disease before it occurs", es: "Prevenir enfermedad antes de que ocurra", de: "Krankheit verhindern, bevor sie auftritt", nl: "Ziekte voorkomen voordat het optreedt" },
          { en: "Rehabilitation after recovery", es: "Rehabilitación después de recuperación", de: "Rehabilitation nach Genesung", nl: "Revalidatie na herstel" },
          { en: "Managing chronic disease complications", es: "Manejar complicaciones de enfermedad crónica", de: "Komplikationen chronischer Krankheiten verwalten", nl: "Chronische ziekte complicaties beheren" }
        ],
        correct: 0,
        explanation: {
          en: "Secondary prevention focuses on early detection and treatment of disease in its initial stages through screening programs, regular check-ups, and diagnostic testing to prevent progression and complications.",
          es: "La prevención secundaria se enfoca en la detección temprana y tratamiento de enfermedad en sus etapas iniciales a través de programas de detección, chequeos regulares y pruebas diagnósticas para prevenir progresión y complicaciones.",
          de: "Sekundärprävention konzentriert sich auf Früherkennung und Behandlung von Krankheiten in ihren Anfangsstadien durch Screening-Programme, regelmäßige Untersuchungen und diagnostische Tests, um Fortschreiten und Komplikationen zu verhindern.",
          nl: "Secundaire preventie richt zich op vroege opsporing en behandeling van ziekte in de beginstadia door screeningprogramma's, regelmatige controles en diagnostische testen om progressie en complicaties te voorkomen."
        }
      },
      {
        question: {
          en: "What is tertiary prevention?",
          es: "¿Qué es la prevención terciaria?",
          de: "Was ist Tertiärprävention?",
          nl: "Wat is tertiaire preventie?"
        },
        options: [
          { en: "Managing established disease to prevent complications", es: "Manejar enfermedad establecida para prevenir complicaciones", de: "Etablierte Krankheiten verwalten, um Komplikationen zu verhindern", nl: "Gevestigde ziekte beheren om complicaties te voorkomen" },
          { en: "Preventing disease before it occurs", es: "Prevenir enfermedad antes de que ocurra", de: "Krankheit verhindern, bevor sie auftritt", nl: "Ziekte voorkomen voordat het optreedt" },
          { en: "Early detection through screening", es: "Detección temprana a través de tamizaje", de: "Früherkennung durch Screening", nl: "Vroege opsporing door screening" },
          { en: "Health promotion activities", es: "Actividades de promoción de salud", de: "Gesundheitsförderungsaktivitäten", nl: "Gezondheidsbevordering activiteiten" }
        ],
        correct: 0,
        explanation: {
          en: "Tertiary prevention involves managing and treating established diseases to slow progression, prevent complications, and improve quality of life through rehabilitation, treatment compliance, and symptom management.",
          es: "La prevención terciaria involucra manejar y tratar enfermedades establecidas para ralentizar la progresión, prevenir complicaciones y mejorar la calidad de vida a través de rehabilitación, cumplimiento del tratamiento y manejo de síntomas.",
          de: "Tertiärprävention beinhaltet die Verwaltung und Behandlung etablierter Krankheiten, um das Fortschreiten zu verlangsamen, Komplikationen zu verhindern und die Lebensqualität durch Rehabilitation, Therapietreue und Symptommanagement zu verbessern.",
          nl: "Tertiaire preventie behelst het beheren en behandelen van gevestigde ziekten om progressie te vertragen, complicaties te voorkomen en levenskwaliteit te verbeteren door revalidatie, therapietrouw en symptoombehandeling."
        }
      },
      {
        question: {
          en: "What is health promotion?",
          es: "¿Qué es la promoción de la salud?",
          de: "Was ist Gesundheitsförderung?",
          nl: "Wat is gezondheidsbevordering?"
        },
        options: [
          { en: "Enabling people to increase control over their health", es: "Permitir a las personas aumentar control sobre su salud", de: "Menschen ermöglichen, Kontrolle über ihre Gesundheit zu erhöhen", nl: "Mensen in staat stellen controle over hun gezondheid te vergroten" },
          { en: "Treating diseases after they occur", es: "Tratar enfermedades después de que ocurran", de: "Krankheiten behandeln, nachdem sie auftreten", nl: "Ziekten behandelen nadat ze optreden" },
          { en: "Screening for early disease detection", es: "Tamizaje para detección temprana de enfermedad", de: "Screening zur Früherkennung von Krankheiten", nl: "Screening voor vroege ziekteopsporing" },
          { en: "Emergency medical interventions", es: "Intervenciones médicas de emergencia", de: "Medizinische Notfallinterventionen", nl: "Medische noodinterventies" }
        ],
        correct: 0,
        explanation: {
          en: "Health promotion is the process of enabling people to increase control over and improve their health through education, policy changes, environmental modifications, and community engagement to address health determinants.",
          es: "La promoción de la salud es el proceso de permitir a las personas aumentar el control sobre y mejorar su salud a través de educación, cambios de política, modificaciones ambientales y participación comunitaria para abordar determinantes de salud.",
          de: "Gesundheitsförderung ist der Prozess, Menschen zu ermöglichen, die Kontrolle über ihre Gesundheit zu erhöhen und sie zu verbessern durch Bildung, Politikänderungen, Umweltmodifikationen und Gemeinschaftsengagement zur Behandlung von Gesundheitsdeterminanten.",
          nl: "Gezondheidsbevordering is het proces van mensen in staat stellen controle over hun gezondheid te vergroten en te verbeteren door onderwijs, beleidsveranderingen, omgevingsmodificaties en gemeenschapsbetrokkenheid om gezondheidsdeterminanten aan te pakken."
        }
      },
      {
        question: {
          en: "What are social determinants of health?",
          es: "¿Qué son los determinantes sociales de la salud?",
          de: "Was sind soziale Gesundheitsdeterminanten?",
          nl: "Wat zijn sociale gezondheidsdeterminanten?"
        },
        options: [
          { en: "Social and economic conditions affecting health", es: "Condiciones sociales y económicas que afectan la salud", de: "Soziale und wirtschaftliche Bedingungen, die die Gesundheit beeinflussen", nl: "Sociale en economische omstandigheden die gezondheid beïnvloeden" },
          { en: "Individual lifestyle choices only", es: "Solo decisiones de estilo de vida individual", de: "Nur individuelle Lebensstilentscheidungen", nl: "Alleen individuele levensstijlkeuzes" },
          { en: "Medical treatments and procedures", es: "Tratamientos y procedimientos médicos", de: "Medizinische Behandlungen und Verfahren", nl: "Medische behandelingen en procedures" },
          { en: "Genetic factors and heredity", es: "Factores genéticos y herencia", de: "Genetische Faktoren und Vererbung", nl: "Genetische factoren en erfelijkheid" }
        ],
        correct: 0,
        explanation: {
          en: "Social determinants of health are the conditions in which people are born, grow, live, work, and age, including income, education, employment, social support, and neighborhood conditions that influence health outcomes.",
          es: "Los determinantes sociales de la salud son las condiciones en las que las personas nacen, crecen, viven, trabajan y envejecen, incluyendo ingresos, educación, empleo, apoyo social y condiciones del vecindario que influyen en los resultados de salud.",
          de: "Soziale Gesundheitsdeterminanten sind die Bedingungen, unter denen Menschen geboren werden, aufwachsen, leben, arbeiten und altern, einschließlich Einkommen, Bildung, Beschäftigung, sozialer Unterstützung und Nachbarschaftsbedingungen, die Gesundheitsergebnisse beeinflussen.",
          nl: "Sociale gezondheidsdeterminanten zijn de omstandigheden waarin mensen worden geboren, opgroeien, leven, werken en ouder worden, inclusief inkomen, onderwijs, werkgelegenheid, sociale steun en buurtomstandigheden die gezondheidsuitkomsten beïnvloeden."
        }
      },
      {
        question: {
          en: "What is epidemiological surveillance?",
          es: "¿Qué es la vigilancia epidemiológica?",
          de: "Was ist epidemiologische Überwachung?",
          nl: "Wat is epidemiologische surveillance?"
        },
        options: [
          { en: "Systematic collection and analysis of health data", es: "Recolección y análisis sistemático de datos de salud", de: "Systematische Sammlung und Analyse von Gesundheitsdaten", nl: "Systematische verzameling en analyse van gezondheidsgegevens" },
          { en: "Individual patient monitoring", es: "Monitoreo individual de pacientes", de: "Individuelle Patientenüberwachung", nl: "Individuele patiëntbewaking" },
          { en: "Laboratory testing procedures", es: "Procedimientos de pruebas de laboratorio", de: "Labortestverfahren", nl: "Laboratoriumtest procedures" },
          { en: "Emergency response planning", es: "Planificación de respuesta de emergencia", de: "Notfallplanung", nl: "Noodrespons planning" }
        ],
        correct: 0,
        explanation: {
          en: "Epidemiological surveillance is the ongoing systematic collection, analysis, interpretation, and dissemination of health data to monitor disease patterns, detect outbreaks, and guide public health interventions.",
          es: "La vigilancia epidemiológica es la recolección, análisis, interpretación y diseminación sistemática y continua de datos de salud para monitorear patrones de enfermedad, detectar brotes y guiar intervenciones de salud pública.",
          de: "Epidemiologische Überwachung ist die fortlaufende systematische Sammlung, Analyse, Interpretation und Verbreitung von Gesundheitsdaten zur Überwachung von Krankheitsmustern, Ausbruchserkennung und Anleitung von Interventionen der öffentlichen Gesundheit.",
          nl: "Epidemiologische surveillance is de voortdurende systematische verzameling, analyse, interpretatie en verspreiding van gezondheidsgegevens om ziektepatronen te monitoren, uitbraken te detecteren en volksgezondheidsinterventies te sturen."
        }
      },
      {
        question: {
          en: "What is a case-control study?",
          es: "¿Qué es un estudio de casos y controles?",
          de: "Was ist eine Fall-Kontroll-Studie?",
          nl: "Wat is een case-control studie?"
        },
        options: [
          { en: "Study comparing diseased and healthy individuals", es: "Estudio que compara individuos enfermos y sanos", de: "Studie, die kranke und gesunde Personen vergleicht", nl: "Studie die zieke en gezonde individuen vergelijkt" },
          { en: "Study following people over time", es: "Estudio que sigue a personas a lo largo del tiempo", de: "Studie, die Menschen über Zeit verfolgt", nl: "Studie die mensen over tijd volgt" },
          { en: "Cross-sectional population survey", es: "Encuesta poblacional transversal", de: "Querschnittsbevölkerungsumfrage", nl: "Dwarsdoorsnede populatie enquête" },
          { en: "Randomized controlled trial", es: "Ensayo controlado aleatorizado", de: "Randomisierte kontrollierte Studie", nl: "Gerandomiseerde gecontroleerde trial" }
        ],
        correct: 0,
        explanation: {
          en: "A case-control study compares individuals with a disease (cases) to similar individuals without the disease (controls) to identify factors that may contribute to disease development by examining past exposures.",
          es: "Un estudio de casos y controles compara individuos con una enfermedad (casos) con individuos similares sin la enfermedad (controles) para identificar factores que pueden contribuir al desarrollo de la enfermedad examinando exposiciones pasadas.",
          de: "Eine Fall-Kontroll-Studie vergleicht Personen mit einer Krankheit (Fälle) mit ähnlichen Personen ohne die Krankheit (Kontrollen), um Faktoren zu identifizieren, die zur Krankheitsentwicklung beitragen könnten, indem vergangene Expositionen untersucht werden.",
          nl: "Een case-control studie vergelijkt individuen met een ziekte (cases) met vergelijkbare individuen zonder de ziekte (controls) om factoren te identificeren die kunnen bijdragen aan ziekteontwikkeling door het onderzoeken van vroegere blootstellingen."
        }
      },
      {
        question: {
          en: "What is a cohort study?",
          es: "¿Qué es un estudio de cohorte?",
          de: "Was ist eine Kohortenstudie?",
          nl: "Wat is een cohort studie?"
        },
        options: [
          { en: "Study following groups over time to observe outcomes", es: "Estudio que sigue grupos a lo largo del tiempo para observar resultados", de: "Studie, die Gruppen über Zeit verfolgt, um Ergebnisse zu beobachten", nl: "Studie die groepen over tijd volgt om uitkomsten te observeren" },
          { en: "Comparison of diseased vs healthy individuals", es: "Comparación de individuos enfermos vs sanos", de: "Vergleich kranker vs gesunder Personen", nl: "Vergelijking van zieke vs gezonde individuen" },
          { en: "Single time point population survey", es: "Encuesta poblacional en un solo momento", de: "Einmalige Bevölkerungsumfrage", nl: "Eenmalige populatie enquête" },
          { en: "Laboratory experimental study", es: "Estudio experimental de laboratorio", de: "Laborexperimentelle Studie", nl: "Laboratorium experimentele studie" }
        ],
        correct: 0,
        explanation: {
          en: "A cohort study follows a group of people over time to observe the development of disease outcomes and determine the relationship between exposures and health effects. It can be prospective or retrospective.",
          es: "Un estudio de cohorte sigue a un grupo de personas a lo largo del tiempo para observar el desarrollo de resultados de enfermedad y determinar la relación entre exposiciones y efectos de salud. Puede ser prospectivo o retrospectivo.",
          de: "Eine Kohortenstudie verfolgt eine Gruppe von Menschen über Zeit, um die Entwicklung von Krankheitsergebnissen zu beobachten und die Beziehung zwischen Expositionen und Gesundheitseffekten zu bestimmen. Sie kann prospektiv oder retrospektiv sein.",
          nl: "Een cohort studie volgt een groep mensen over tijd om de ontwikkeling van ziekte-uitkomsten te observeren en de relatie tussen blootstellingen en gezondheidseffecten te bepalen. Het kan prospectief of retrospectief zijn."
        }
      },
      {
        question: {
          en: "What is environmental health?",
          es: "¿Qué es la salud ambiental?",
          de: "Was ist Umweltgesundheit?",
          nl: "Wat is milieugezondheid?"
        },
        options: [
          { en: "Health effects of environmental factors on populations", es: "Efectos de salud de factores ambientales en poblaciones", de: "Gesundheitseffekte von Umweltfaktoren auf Populationen", nl: "Gezondheidseffecten van omgevingsfactoren op populaties" },
          { en: "Individual fitness and exercise", es: "Aptitud física individual y ejercicio", de: "Individuelle Fitness und Bewegung", nl: "Individuele fitness en oefening" },
          { en: "Mental health and psychology", es: "Salud mental y psicología", de: "Geistige Gesundheit und Psychologie", nl: "Geestelijke gezondheid en psychologie" },
          { en: "Hospital environmental controls", es: "Controles ambientales hospitalarios", de: "Krankenhaus-Umweltkontrollen", nl: "Ziekenhuis omgevingscontroles" }
        ],
        correct: 0,
        explanation: {
          en: "Environmental health focuses on the relationships between people and their environment, examining how physical, chemical, and biological factors in the environment affect human health and disease patterns.",
          es: "La salud ambiental se enfoca en las relaciones entre las personas y su ambiente, examinando cómo los factores físicos, químicos y biológicos en el ambiente afectan la salud humana y los patrones de enfermedad.",
          de: "Umweltgesundheit konzentriert sich auf die Beziehungen zwischen Menschen und ihrer Umwelt und untersucht, wie physische, chemische und biologische Faktoren in der Umwelt die menschliche Gesundheit und Krankheitsmuster beeinflussen.",
          nl: "Milieugezondheid richt zich op de relaties tussen mensen en hun omgeving, waarbij wordt onderzocht hoe fysieke, chemische en biologische factoren in de omgeving de menselijke gezondheid en ziektepatronen beïnvloeden."
        }
      },
      {
        question: {
          en: "What is occupational health?",
          es: "¿Qué es la salud ocupacional?",
          de: "Was ist Arbeitsmedizin?",
          nl: "Wat is arbeidsgezondheid?"
        },
        options: [
          { en: "Health and safety of workers in workplace", es: "Salud y seguridad de trabajadores en el lugar de trabajo", de: "Gesundheit und Sicherheit von Arbeitnehmern am Arbeitsplatz", nl: "Gezondheid en veiligheid van werknemers op de werkplek" },
          { en: "Career counseling services", es: "Servicios de orientación profesional", de: "Berufsberatungsdienste", nl: "Loopbaanbegeleidingsdiensten" },
          { en: "Employment and job placement", es: "Empleo y colocación laboral", de: "Beschäftigung und Stellenvermittlung", nl: "Werk en arbeidsbemiddeling" },
          { en: "Worker productivity management", es: "Gestión de productividad del trabajador", de: "Verwaltung der Arbeiterproduktivität", nl: "Productiviteitsbeheer van werknemers" }
        ],
        correct: 0,
        explanation: {
          en: "Occupational health focuses on preventing work-related injuries and illnesses, promoting worker health and safety through hazard identification, risk assessment, and implementation of protective measures in work environments.",
          es: "La salud ocupacional se enfoca en prevenir lesiones y enfermedades relacionadas con el trabajo, promoviendo la salud y seguridad del trabajador a través de identificación de peligros, evaluación de riesgos e implementación de medidas protectoras en ambientes de trabajo.",
          de: "Arbeitsmedizin konzentriert sich auf die Verhinderung arbeitsbedingter Verletzungen und Krankheiten und fördert Arbeitergesundheit und -sicherheit durch Gefahrenidentifikation, Risikobewertung und Umsetzung von Schutzmaßnahmen in Arbeitsumgebungen.",
          nl: "Arbeidsgezondheid richt zich op het voorkomen van werkgerelateerde verwondingen en ziekten, het bevorderen van werknemersgezondheid en -veiligheid door gevaaridentificatie, risicobeoordeling en implementatie van beschermende maatregelen in werkomgevingen."
        }
      },
      {
        question: {
          en: "What is health economics?",
          es: "¿Qué es la economía de la salud?",
          de: "Was ist Gesundheitsökonomie?",
          nl: "Wat is gezondheidseconomie?"
        },
        options: [
          { en: "Study of resource allocation in healthcare systems", es: "Estudio de asignación de recursos en sistemas de salud", de: "Studie der Ressourcenallokation in Gesundheitssystemen", nl: "Studie van resource-allocatie in zorgstelsels" },
          { en: "Hospital financial management", es: "Gestión financiera hospitalaria", de: "Krankenhausfinanzmanagement", nl: "Ziekenhuis financieel management" },
          { en: "Insurance claim processing", es: "Procesamiento de reclamos de seguro", de: "Versicherungsanspruchsbearbeitung", nl: "Verzekeringsclaimverwerking" },
          { en: "Pharmaceutical pricing strategies", es: "Estrategias de precios farmacéuticos", de: "Pharmazeutische Preisstrategien", nl: "Farmaceutische prijsstrategieën" }
        ],
        correct: 0,
        explanation: {
          en: "Health economics analyzes the efficiency, effectiveness, value, and behavior in the production and consumption of health and healthcare services, helping optimize resource allocation and healthcare policy decisions.",
          es: "La economía de la salud analiza la eficiencia, efectividad, valor y comportamiento en la producción y consumo de salud y servicios de atención médica, ayudando a optimizar la asignación de recursos y decisiones de política de salud.",
          de: "Gesundheitsökonomie analysiert Effizienz, Wirksamkeit, Wert und Verhalten bei der Produktion und dem Verbrauch von Gesundheit und Gesundheitsdiensten und hilft bei der Optimierung der Ressourcenallokation und gesundheitspolitischen Entscheidungen.",
          nl: "Gezondheidseconomie analyseert de efficiëntie, effectiviteit, waarde en gedrag bij de productie en consumptie van gezondheid en zorgdiensten, wat helpt bij het optimaliseren van resource-allocatie en zorgbeleidsbeslissingen."
        }
      },
      {
        question: {
          en: "What is health equity?",
          es: "¿Qué es la equidad en salud?",
          de: "Was ist Gesundheitsgerechtigkeit?",
          nl: "Wat is gezondheidsrechtvaardigheid?"
        },
        options: [
          { en: "Fair opportunity for everyone to achieve optimal health", es: "Oportunidad justa para que todos alcancen salud óptima", de: "Faire Chance für jeden, optimale Gesundheit zu erreichen", nl: "Eerlijke kans voor iedereen om optimale gezondheid te bereiken" },
          { en: "Equal healthcare spending per person", es: "Gasto igual en salud por persona", de: "Gleiche Gesundheitsausgaben pro Person", nl: "Gelijke zorguitgaven per persoon" },
          { en: "Identical healthcare services for all", es: "Servicios de salud idénticos para todos", de: "Identische Gesundheitsdienste für alle", nl: "Identieke zorgdiensten voor iedereen" },
          { en: "Universal health insurance coverage", es: "Cobertura universal de seguro de salud", de: "Universelle Krankenversicherung", nl: "Universele ziekteverzekering dekking" }
        ],
        correct: 0,
        explanation: {
          en: "Health equity means that everyone has a fair and just opportunity to be as healthy as possible, addressing systemic barriers and providing resources based on need to achieve equal health outcomes across populations.",
          es: "La equidad en salud significa que todos tienen una oportunidad justa y equitativa de ser lo más saludables posible, abordando barreras sistémicas y proporcionando recursos basados en necesidad para lograr resultados de salud iguales entre poblaciones.",
          de: "Gesundheitsgerechtigkeit bedeutet, dass jeder eine faire und gerechte Chance hat, so gesund wie möglich zu sein, indem systemische Barrieren angegangen und Ressourcen basierend auf Bedarf bereitgestellt werden, um gleiche Gesundheitsergebnisse zwischen Populationen zu erreichen.",
          nl: "Gezondheidsrechtvaardigheid betekent dat iedereen een eerlijke en rechtvaardige kans heeft om zo gezond mogelijk te zijn, door systemische barrières aan te pakken en middelen te bieden gebaseerd op behoefte om gelijke gezondheidsuitkomsten tussen populaties te bereiken."
        }
      },
      {
        question: {
          en: "What is global health?",
          es: "¿Qué es la salud global?",
          de: "Was ist globale Gesundheit?",
          nl: "Wat is mondiale gezondheid?"
        },
        options: [
          { en: "Health issues that transcend national boundaries", es: "Problemas de salud que trascienden fronteras nacionales", de: "Gesundheitsprobleme, die nationale Grenzen überschreiten", nl: "Gezondheidsproblemen die nationale grenzen overschrijden" },
          { en: "Healthcare systems in developed countries", es: "Sistemas de salud en países desarrollados", de: "Gesundheitssysteme in entwickelten Ländern", nl: "Zorgsystemen in ontwikkelde landen" },
          { en: "International trade in pharmaceuticals", es: "Comercio internacional de productos farmacéuticos", de: "Internationaler Handel mit Pharmazeutika", nl: "Internationale handel in farmaceutica" },
          { en: "World Health Organization policies", es: "Políticas de la Organización Mundial de la Salud", de: "Weltgesundheitsorganisation-Richtlinien", nl: "Wereldgezondheidsorganisatie beleid" }
        ],
        correct: 0,
        explanation: {
          en: "Global health focuses on health issues, determinants, and solutions that transcend national boundaries, requiring international cooperation to address challenges like pandemics, climate change effects, and health disparities worldwide.",
          es: "La salud global se enfoca en problemas de salud, determinantes y soluciones que trascienden fronteras nacionales, requiriendo cooperación internacional para abordar desafíos como pandemias, efectos del cambio climático y disparidades de salud mundiales.",
          de: "Globale Gesundheit konzentriert sich auf Gesundheitsprobleme, Determinanten und Lösungen, die nationale Grenzen überschreiten und internationale Zusammenarbeit erfordern, um Herausforderungen wie Pandemien, Klimawandeleffekte und weltweite Gesundheitsunterschiede anzugehen.",
          nl: "Mondiale gezondheid richt zich op gezondheidsproblemen, determinanten en oplossingen die nationale grenzen overschrijden, waarbij internationale samenwerking nodig is om uitdagingen zoals pandemieën, klimaatveranderingseffecten en wereldwijde gezondheidsverschillen aan te pakken."
        }
      },
      {
        question: {
          en: "What is disease prevention?",
          es: "¿Qué es la prevención de enfermedades?",
          de: "Was ist Krankheitsprävention?",
          nl: "Wat is ziektepreventie?"
        },
        options: [
          { en: "Actions to reduce likelihood of disease occurrence", es: "Acciones para reducir probabilidad de ocurrencia de enfermedad", de: "Maßnahmen zur Reduzierung der Wahrscheinlichkeit von Krankheitsauftreten", nl: "Acties om de waarschijnlijkheid van ziekte-optreden te verminderen" },
          { en: "Treatment of existing medical conditions", es: "Tratamiento de condiciones médicas existentes", de: "Behandlung bestehender medizinischer Zustände", nl: "Behandeling van bestaande medische aandoeningen" },
          { en: "Emergency medical interventions", es: "Intervenciones médicas de emergencia", de: "Medizinische Notfallinterventionen", nl: "Medische noodinterventies" },
          { en: "Rehabilitation after illness", es: "Rehabilitación después de enfermedad", de: "Rehabilitation nach Krankheit", nl: "Revalidatie na ziekte" }
        ],
        correct: 0,
        explanation: {
          en: "Disease prevention encompasses all measures taken to prevent diseases from occurring, progressing, or recurring, including lifestyle modifications, vaccination, screening, and environmental interventions to protect population health.",
          es: "La prevención de enfermedades abarca todas las medidas tomadas para prevenir que las enfermedades ocurran, progresen o recurran, incluyendo modificaciones de estilo de vida, vacunación, tamizaje e intervenciones ambientales para proteger la salud poblacional.",
          de: "Krankheitsprävention umfasst alle Maßnahmen zur Verhinderung des Auftretens, Fortschreitens oder Wiederauftretens von Krankheiten, einschließlich Lebensstilmodifikationen, Impfung, Screening und Umweltinterventionen zum Schutz der Bevölkerungsgesundheit.",
          nl: "Ziektepreventie omvat alle maatregelen om te voorkomen dat ziekten optreden, voortschrijden of terugkeren, inclusief levensstijlmodificaties, vaccinatie, screening en omgevingsinterventies om de volksgezondheid te beschermen."
        }
      },
      {
        question: {
          en: "What is the difference between mortality and morbidity?",
          es: "¿Cuál es la diferencia entre mortalidad y morbididad?",
          de: "Was ist der Unterschied zwischen Mortalität und Morbidität?",
          nl: "Wat is het verschil tussen mortaliteit en morbiditeit?"
        },
        options: [
          { en: "Mortality is death rate, morbidity is disease rate", es: "Mortalidad es tasa de muerte, morbididad es tasa de enfermedad", de: "Mortalität ist Sterberate, Morbidität ist Krankheitsrate", nl: "Mortaliteit is sterftecijfer, morbiditeit is ziektecijfer" },
          { en: "They measure the same thing", es: "Miden la misma cosa", de: "Sie messen dasselbe", nl: "Ze meten hetzelfde" },
          { en: "Mortality is disease rate, morbidity is death rate", es: "Mortalidad es tasa de enfermedad, morbididad es tasa de muerte", de: "Mortalität ist Krankheitsrate, Morbidität ist Sterberate", nl: "Mortaliteit is ziektecijfer, morbiditeit is sterftecijfer" },
          { en: "Both refer only to infectious diseases", es: "Ambas se refieren solo a enfermedades infecciosas", de: "Beide beziehen sich nur auf Infektionskrankheiten", nl: "Beide verwijzen alleen naar infectieziekten" }
        ],
        correct: 0,
        explanation: {
          en: "Mortality refers to death rates in a population, measuring the number of deaths from specific causes or overall. Morbidity refers to disease rates, measuring the frequency of illness or disease in a population.",
          es: "La mortalidad se refiere a las tasas de muerte en una población, midiendo el número de muertes por causas específicas o en general. La morbididad se refiere a tasas de enfermedad, midiendo la frecuencia de enfermedad en una población.",
          de: "Mortalität bezieht sich auf Sterberaten in einer Population und misst die Anzahl von Todesfällen durch spezifische Ursachen oder insgesamt. Morbidität bezieht sich auf Krankheitsraten und misst die Häufigkeit von Krankheiten in einer Population.",
          nl: "Mortaliteit verwijst naar sterftecijfers in een populatie, waarbij het aantal sterfgevallen door specifieke oorzaken of algemeen wordt gemeten. Morbiditeit verwijst naar ziektecijfers, waarbij de frequentie van ziekte in een populatie wordt gemeten."
        }
      },
      {
        question: {
          en: "What is contact tracing?",
          es: "¿Qué es el rastreo de contactos?",
          de: "Was ist Kontaktverfolgung?",
          nl: "Wat is contactonderzoek?"
        },
        options: [
          { en: "Identifying and monitoring people exposed to infectious disease", es: "Identificar y monitorear personas expuestas a enfermedad infecciosa", de: "Identifizierung und Überwachung von Personen, die einer Infektionskrankheit ausgesetzt waren", nl: "Identificatie en monitoring van mensen blootgesteld aan infectieziekte" },
          { en: "Social media surveillance", es: "Vigilancia de redes sociales", de: "Social-Media-Überwachung", nl: "Social media surveillance" },
          { en: "Geographic disease mapping", es: "Mapeo geográfico de enfermedades", de: "Geografische Krankheitskartierung", nl: "Geografische ziekte mapping" },
          { en: "Hospital patient tracking", es: "Seguimiento de pacientes hospitalarios", de: "Krankenhaus-Patientenverfolgung", nl: "Ziekenhuis patiënt tracking" }
        ],
        correct: 0,
        explanation: {
          en: "Contact tracing is the process of identifying, assessing, and managing people who have been exposed to a communicable disease to prevent further transmission by monitoring symptoms and implementing quarantine measures when necessary.",
          es: "El rastreo de contactos es el proceso de identificar, evaluar y manejar personas que han sido expuestas a una enfermedad transmisible para prevenir mayor transmisión monitoreando síntomas e implementando medidas de cuarentena cuando sea necesario.",
          de: "Kontaktverfolgung ist der Prozess der Identifizierung, Bewertung und Verwaltung von Personen, die einer übertragbaren Krankheit ausgesetzt waren, um weitere Übertragung zu verhindern durch Symptomüberwachung und Implementierung von Quarantänemaßnahmen wenn nötig.",
          nl: "Contactonderzoek is het proces van identificatie, beoordeling en beheer van mensen die zijn blootgesteld aan een overdraagbare ziekte om verdere overdracht te voorkomen door symptomen te monitoren en quarantainemaatregelen toe te passen wanneer nodig."
        }
      },
      {
        question: {
          en: "What is quarantine?",
          es: "¿Qué es la cuarentena?",
          de: "Was ist Quarantäne?",
          nl: "Wat is quarantaine?"
        },
        options: [
          { en: "Separation of potentially exposed individuals", es: "Separación de individuos potencialmente expuestos", de: "Trennung potenziell exponierter Personen", nl: "Scheiding van mogelijk blootgestelde individuen" },
          { en: "Treatment of confirmed cases", es: "Tratamiento de casos confirmados", de: "Behandlung bestätigter Fälle", nl: "Behandeling van bevestigde gevallen" },
          { en: "Mass vaccination program", es: "Programa de vacunación masiva", de: "Massenimpfprogramm", nl: "Massa vaccinatieprogramma" },
          { en: "Hospital infection control", es: "Control de infecciones hospitalarias", de: "Krankenhaus-Infektionskontrolle", nl: "Ziekenhuis infectiecontrole" }
        ],
        correct: 0,
        explanation: {
          en: "Quarantine is the separation and restriction of movement of people who may have been exposed to a contagious disease but are not yet showing symptoms, to prevent potential spread during the incubation period.",
          es: "La cuarentena es la separación y restricción de movimiento de personas que pueden haber sido expuestas a una enfermedad contagiosa pero aún no muestran síntomas, para prevenir propagación potencial durante el período de incubación.",
          de: "Quarantäne ist die Trennung und Bewegungseinschränkung von Personen, die möglicherweise einer ansteckenden Krankheit ausgesetzt waren, aber noch keine Symptome zeigen, um potenzielle Ausbreitung während der Inkubationszeit zu verhindern.",
          nl: "Quarantaine is de scheiding en bewegingsbeperking van mensen die mogelijk zijn blootgesteld aan een besmettelijke ziekte maar nog geen symptomen tonen, om potentiële verspreiding tijdens de incubatieperiode te voorkomen."
        }
      },
      {
        question: {
          en: "What is isolation in public health?",
          es: "¿Qué es el aislamiento en salud pública?",
          de: "Was ist Isolation in der öffentlichen Gesundheit?",
          nl: "Wat is isolatie in de volksgezondheid?"
        },
        options: [
          { en: "Separation of confirmed infectious disease cases", es: "Separación de casos confirmados de enfermedad infecciosa", de: "Trennung bestätigter Infektionskrankheitsfälle", nl: "Scheiding van bevestigde infectieziekte gevallen" },
          { en: "Social distancing measures", es: "Medidas de distanciamiento social", de: "Social-Distancing-Maßnahmen", nl: "Sociale afstand maatregelen" },
          { en: "Preventive vaccination", es: "Vacunación preventiva", de: "Präventive Impfung", nl: "Preventieve vaccinatie" },
          { en: "Population health screening", es: "Tamizaje de salud poblacional", de: "Bevölkerungsgesundheits-Screening", nl: "Populatie gezondheidsscreening" }
        ],
        correct: 0,
        explanation: {
          en: "Isolation is the separation of people who are confirmed to have a contagious disease from those who are healthy to prevent the spread of infection, typically continuing until the person is no longer infectious.",
          es: "El aislamiento es la separación de personas que están confirmadas de tener una enfermedad contagiosa de aquellos que están sanos para prevenir la propagación de infección, típicamente continuando hasta que la persona ya no sea infecciosa.",
          de: "Isolation ist die Trennung von Personen, die bestätigt eine ansteckende Krankheit haben, von denen, die gesund sind, um die Ausbreitung von Infektionen zu verhindern, typischerweise fortgesetzt bis die Person nicht mehr infektiös ist.",
          nl: "Isolatie is de scheiding van mensen waarvan bevestigd is dat ze een besmettelijke ziekte hebben van degenen die gezond zijn om verspreiding van infectie te voorkomen, doorgaans voortdurend totdat de persoon niet langer besmettelijk is."
        }
      },
      {
        question: {
          en: "What is the purpose of health impact assessment?",
          es: "¿Cuál es el propósito de la evaluación de impacto en salud?",
          de: "Was ist der Zweck der Gesundheitsfolgenabschätzung?",
          nl: "Wat is het doel van gezondheidsimpactassessment?"
        },
        options: [
          { en: "Evaluate health effects of policies and projects", es: "Evaluar efectos en salud de políticas y proyectos", de: "Gesundheitseffekte von Richtlinien und Projekten bewerten", nl: "Gezondheidseffecten van beleid en projecten evalueren" },
          { en: "Assess individual patient health status", es: "Evaluar estado de salud de paciente individual", de: "Individuellen Patientengesundheitsstatus bewerten", nl: "Individuele patiënt gezondheidsstatus beoordelen" },
          { en: "Monitor hospital quality metrics", es: "Monitorear métricas de calidad hospitalaria", de: "Krankenhausqualitätsmetriken überwachen", nl: "Ziekenhuis kwaliteitsmetrieken monitoren" },
          { en: "Evaluate medical device safety", es: "Evaluar seguridad de dispositivos médicos", de: "Medizinische Gerätesicherheit bewerten", nl: "Medische apparaat veiligheid evalueren" }
        ],
        correct: 0,
        explanation: {
          en: "Health impact assessment is a systematic process that evaluates the potential health effects of proposed policies, programs, or projects on populations, aiming to inform decision-making and promote healthier choices.",
          es: "La evaluación de impacto en salud es un proceso sistemático que evalúa los efectos potenciales en salud de políticas, programas o proyectos propuestos en poblaciones, buscando informar toma de decisiones y promover elecciones más saludables.",
          de: "Gesundheitsfolgenabschätzung ist ein systematischer Prozess, der die potenziellen Gesundheitseffekte vorgeschlagener Richtlinien, Programme oder Projekte auf Populationen bewertet, mit dem Ziel, Entscheidungsfindung zu informieren und gesündere Entscheidungen zu fördern.",
          nl: "Gezondheidsimpactassessment is een systematisch proces dat de potentiële gezondheidseffecten van voorgesteld beleid, programma's of projecten op populaties evalueert, gericht op het informeren van besluitvorming en het bevorderen van gezondere keuzes."
        }
      },
      {
        question: {
          en: "What is evidence-based public health?",
          es: "¿Qué es la salud pública basada en evidencia?",
          de: "Was ist evidenzbasierte öffentliche Gesundheit?",
          nl: "Wat is evidence-based volksgezondheid?"
        },
        options: [
          { en: "Using scientific evidence to guide public health decisions", es: "Usar evidencia científica para guiar decisiones de salud pública", de: "Wissenschaftliche Evidenz zur Anleitung von Entscheidungen der öffentlichen Gesundheit verwenden", nl: "Wetenschappelijke bewijs gebruiken om volksgezondheidsbesluiten te sturen" },
          { en: "Personal experience-based healthcare", es: "Atención médica basada en experiencia personal", de: "Auf persönlicher Erfahrung basierte Gesundheitsversorgung", nl: "Op persoonlijke ervaring gebaseerde zorgverlening" },
          { en: "Traditional medicine practices", es: "Prácticas de medicina tradicional", de: "Traditionelle Medizinpraktiken", nl: "Traditionele geneeskunde praktijken" },
          { en: "Intuitive clinical decision making", es: "Toma de decisiones clínicas intuitiva", de: "Intuitive klinische Entscheidungsfindung", nl: "Intuïtieve klinische besluitvorming" }
        ],
        correct: 0,
        explanation: {
          en: "Evidence-based public health involves making public health decisions based on the best available scientific evidence, systematic research reviews, and proven interventions to improve population health outcomes effectively.",
          es: "La salud pública basada en evidencia involucra tomar decisiones de salud pública basadas en la mejor evidencia científica disponible, revisiones sistemáticas de investigación e intervenciones probadas para mejorar efectivamente los resultados de salud poblacional.",
          de: "Evidenzbasierte öffentliche Gesundheit beinhaltet, Entscheidungen der öffentlichen Gesundheit basierend auf der besten verfügbaren wissenschaftlichen Evidenz, systematischen Forschungsübersichten und bewährten Interventionen zu treffen, um Bevölkerungsgesundheitsergebnisse effektiv zu verbessern.",
          nl: "Evidence-based volksgezondheid houdt in dat volksgezondheidsbesluiten worden genomen gebaseerd op het beste beschikbare wetenschappelijke bewijs, systematische onderzoeksoverzichten en bewezen interventies om populatiegezondheidsuitkomsten effectief te verbeteren."
        }
      },
      {
        question: {
          en: "What is risk assessment in public health?",
          es: "¿Qué es la evaluación de riesgos en salud pública?",
          de: "Was ist Risikobewertung in der öffentlichen Gesundheit?",
          nl: "Wat is risicobeoordeling in de volksgezondheid?"
        },
        options: [
          { en: "Evaluating likelihood and impact of health hazards", es: "Evaluar probabilidad e impacto de peligros para la salud", de: "Wahrscheinlichkeit und Auswirkung von Gesundheitsgefahren bewerten", nl: "Waarschijnlijkheid en impact van gezondheidsrisico's evalueren" },
          { en: "Insurance coverage determination", es: "Determinación de cobertura de seguros", de: "Bestimmung der Versicherungsabdeckung", nl: "Verzekeringsdekkingsbepaling" },
          { en: "Financial cost analysis", es: "Análisis de costos financieros", de: "Finanzielle Kostenanalyse", nl: "Financiële kostenanalyse" },
          { en: "Legal liability assessment", es: "Evaluación de responsabilidad legal", de: "Rechtliche Haftungsbewertung", nl: "Juridische aansprakelijkheidsbeoordeling" }
        ],
        correct: 0,
        explanation: {
          en: "Risk assessment in public health is the systematic evaluation of the likelihood and severity of adverse health effects from exposure to hazards, informing risk management decisions and protective interventions for populations.",
          es: "La evaluación de riesgos en salud pública es la evaluación sistemática de la probabilidad y severidad de efectos adversos en salud por exposición a peligros, informando decisiones de gestión de riesgos e intervenciones protectoras para poblaciones.",
          de: "Risikobewertung in der öffentlichen Gesundheit ist die systematische Bewertung der Wahrscheinlichkeit und Schwere von nachteiligen Gesundheitseffekten durch Exposition gegenüber Gefahren, die Risikomanagement-Entscheidungen und Schutzinterventionen für Populationen informiert.",
          nl: "Risicobeoordeling in de volksgezondheid is de systematische evaluatie van de waarschijnlijkheid en ernst van nadelige gezondheidseffecten door blootstelling aan gevaren, wat risicobeheer beslissingen en beschermende interventies voor populaties informeert."
        }
      },
      {
        question: {
          en: "What is risk communication in public health?",
          es: "¿Qué es la comunicación de riesgos en salud pública?",
          de: "Was ist Risikokommunikation in der öffentlichen Gesundheit?",
          nl: "Wat is risicocommunicatie in de volksgezondheid?"
        },
        options: [
          { en: "Sharing health risk information with public", es: "Compartir información de riesgos de salud con el público", de: "Gesundheitsrisiko-Informationen mit der Öffentlichkeit teilen", nl: "Gezondheidsrisico-informatie delen met het publiek" },
          { en: "Internal hospital communications", es: "Comunicaciones internas del hospital", de: "Interne Krankenhauskommunikation", nl: "Interne ziekenhuis communicaties" },
          { en: "Medical research publications", es: "Publicaciones de investigación médica", de: "Medizinische Forschungspublikationen", nl: "Medische onderzoekspublicaties" },
          { en: "Insurance claim reporting", es: "Reporte de reclamos de seguros", de: "Versicherungsanspruchsmeldung", nl: "Verzekeringsclaimrapportage" }
        ],
        correct: 0,
        explanation: {
          en: "Risk communication is the interactive process of exchanging information and opinions about health risks between public health officials, media, and the public to enable informed decision-making and appropriate protective behaviors.",
          es: "La comunicación de riesgos es el proceso interactivo de intercambio de información y opiniones sobre riesgos de salud entre funcionarios de salud pública, medios y el público para permitir toma de decisiones informadas y comportamientos protectores apropiados.",
          de: "Risikokommunikation ist der interaktive Prozess des Austauschs von Informationen und Meinungen über Gesundheitsrisiken zwischen Beamten der öffentlichen Gesundheit, Medien und der Öffentlichkeit, um informierte Entscheidungsfindung und angemessene Schutzverhalten zu ermöglichen.",
          nl: "Risicocommunicatie is het interactieve proces van uitwisseling van informatie en meningen over gezondheidsrisico's tussen volksgezondheidsambtenaren, media en het publiek om geïnformeerde besluitvorming en gepast beschermend gedrag mogelijk te maken."
        }
      },
      {
        question: {
          en: "What is health literacy?",
          es: "¿Qué es la alfabetización en salud?",
          de: "Was ist Gesundheitskompetenz?",
          nl: "Wat is gezondheidsgeletterdheid?"
        },
        options: [
          { en: "Ability to obtain, understand, and use health information", es: "Capacidad de obtener, entender y usar información de salud", de: "Fähigkeit, Gesundheitsinformationen zu beschaffen, zu verstehen und zu verwenden", nl: "Vermogen om gezondheidsinformatie te verkrijgen, begrijpen en gebruiken" },
          { en: "Medical degree or certification", es: "Título médico o certificación", de: "Medizinischer Abschluss oder Zertifizierung", nl: "Medische graad of certificering" },
          { en: "Reading medical textbooks", es: "Leer libros de texto médicos", de: "Medizinische Lehrbücher lesen", nl: "Medische tekstboeken lezen" },
          { en: "Working in healthcare field", es: "Trabajar en el campo de la salud", de: "Im Gesundheitswesen arbeiten", nl: "Werken in de zorgverlening" }
        ],
        correct: 0,
        explanation: {
          en: "Health literacy is the capacity to obtain, process, and understand basic health information and services needed to make appropriate health decisions, including reading, writing, numeracy, and critical thinking skills in health contexts.",
          es: "La alfabetización en salud es la capacidad de obtener, procesar y entender información y servicios básicos de salud necesarios para tomar decisiones apropiadas de salud, incluyendo habilidades de lectura, escritura, numeración y pensamiento crítico en contextos de salud.",
          de: "Gesundheitskompetenz ist die Fähigkeit, grundlegende Gesundheitsinformationen und -dienste zu beschaffen, zu verarbeiten und zu verstehen, die für angemessene Gesundheitsentscheidungen erforderlich sind, einschließlich Lese-, Schreib-, Rechen- und kritischen Denkfähigkeiten in Gesundheitskontexten.",
          nl: "Gezondheidsgeletterdheid is het vermogen om basis gezondheidsinformatie en -diensten te verkrijgen, verwerken en begrijpen die nodig zijn om gepaste gezondheidsbeslissingen te nemen, inclusief lees-, schrijf-, reken- en kritisch denkvaardigheden in gezondheidscontexten."
        }
      },
      {
        question: {
          en: "What is community health assessment?",
          es: "¿Qué es la evaluación de salud comunitaria?",
          de: "Was ist Gemeinschaftsgesundheitsbewertung?",
          nl: "Wat is gemeenschapsgezondheidsassessment?"
        },
        options: [
          { en: "Systematic evaluation of community health status and needs", es: "Evaluación sistemática del estado de salud y necesidades comunitarias", de: "Systematische Bewertung des Gemeinschaftsgesundheitsstatus und -bedarfs", nl: "Systematische evaluatie van gemeenschapsgezondheidsstatus en -behoeften" },
          { en: "Individual patient health screening", es: "Tamizaje de salud de paciente individual", de: "Individuelles Patientengesundheits-Screening", nl: "Individuele patiënt gezondheidsscreening" },
          { en: "Hospital facility inspection", es: "Inspección de instalaciones hospitalarias", de: "Krankenhaus-Anlageninspektion", nl: "Ziekenhuis faciliteit inspectie" },
          { en: "Medical equipment evaluation", es: "Evaluación de equipo médico", de: "Medizinische Gerätebewertung", nl: "Medische apparatuur evaluatie" }
        ],
        correct: 0,
        explanation: {
          en: "Community health assessment is a systematic process of collecting, analyzing, and disseminating data about the health status, resources, and needs of a community to inform health planning and resource allocation decisions.",
          es: "La evaluación de salud comunitaria es un proceso sistemático de recolección, análisis y diseminación de datos sobre el estado de salud, recursos y necesidades de una comunidad para informar planificación de salud y decisiones de asignación de recursos.",
          de: "Gemeinschaftsgesundheitsbewertung ist ein systematischer Prozess der Sammlung, Analyse und Verbreitung von Daten über den Gesundheitsstatus, Ressourcen und Bedürfnisse einer Gemeinschaft, um Gesundheitsplanung und Ressourcenallokationsentscheidungen zu informieren.",
          nl: "Gemeenschapsgezondheidsassessment is een systematisch proces van verzamelen, analyseren en verspreiden van gegevens over de gezondheidsstatus, middelen en behoeften van een gemeenschap om gezondheidsplanning en resource-allocatiebeslissingen te informeren."
        }
      },
      {
        question: {
          en: "What is outbreak investigation?",
          es: "¿Qué es la investigación de brotes?",
          de: "Was ist Ausbruchsuntersuchung?",
          nl: "Wat is uitbraakonderzoek?"
        },
        options: [
          { en: "Systematic study to identify source and control disease spread", es: "Estudio sistemático para identificar fuente y controlar propagación de enfermedad", de: "Systematische Studie zur Identifikation der Quelle und Kontrolle der Krankheitsausbreitung", nl: "Systematische studie om bron te identificeren en ziekteverpreiding te controleren" },
          { en: "Legal investigation of medical malpractice", es: "Investigación legal de malpráctica médica", de: "Rechtliche Untersuchung von ärztlichen Kunstfehlern", nl: "Juridisch onderzoek naar medische wanpraktijken" },
          { en: "Financial audit of healthcare costs", es: "Auditoría financiera de costos de salud", de: "Finanzielle Prüfung von Gesundheitskosten", nl: "Financiële audit van zorgkosten" },
          { en: "Research study recruitment", es: "Reclutamiento de estudio de investigación", de: "Forschungsstudie-Rekrutierung", nl: "Onderzoeksstudie rekrutering" }
        ],
        correct: 0,
        explanation: {
          en: "Outbreak investigation is a systematic epidemiological study conducted to identify the source, mode of transmission, and extent of a disease outbreak, implement control measures, and prevent further spread in the community.",
          es: "La investigación de brotes es un estudio epidemiológico sistemático conducido para identificar la fuente, modo de transmisión y extensión de un brote de enfermedad, implementar medidas de control y prevenir mayor propagación en la comunidad.",
          de: "Ausbruchsuntersuchung ist eine systematische epidemiologische Studie, die durchgeführt wird, um die Quelle, Übertragungsweise und das Ausmaß eines Krankheitsausbruchs zu identifizieren, Kontrollmaßnahmen zu implementieren und weitere Ausbreitung in der Gemeinschaft zu verhindern.",
          nl: "Uitbraakonderzoek is een systematische epidemiologische studie uitgevoerd om de bron, overdrachtswijze en omvang van een ziekte-uitbraak te identificeren, controlemaatregelen te implementeren en verdere verspreiding in de gemeenschap te voorkomen."
        }
      },
      {
        question: {
          en: "What is population health management?",
          es: "¿Qué es la gestión de salud poblacional?",
          de: "Was ist Bevölkerungsgesundheitsmanagement?",
          nl: "Wat is populatiegezondheidsmanagement?"
        },
        options: [
          { en: "Coordinated care approach to improve health outcomes of groups", es: "Enfoque de atención coordinada para mejorar resultados de salud de grupos", de: "Koordinierter Pflegeansatz zur Verbesserung der Gesundheitsergebnisse von Gruppen", nl: "Gecoördineerde zorgbenadering om gezondheidsuitkomsten van groepen te verbeteren" },
          { en: "Individual patient case management", es: "Gestión de casos de paciente individual", de: "Individuelles Patienten-Case-Management", nl: "Individuele patiënt case management" },
          { en: "Hospital administrative functions", es: "Funciones administrativas hospitalarias", de: "Krankenhausverwaltungsfunktionen", nl: "Ziekenhuis administratieve functies" },
          { en: "Medical record documentation", es: "Documentación de registros médicos", de: "Medizinische Aufzeichnungsdokumentation", nl: "Medische dossier documentatie" }
        ],
        correct: 0,
        explanation: {
          en: "Population health management is a coordinated healthcare delivery approach that focuses on improving health outcomes for defined groups of individuals through data-driven interventions, care coordination, and resource optimization.",
          es: "La gestión de salud poblacional es un enfoque coordinado de entrega de atención médica que se enfoca en mejorar resultados de salud para grupos definidos de individuos a través de intervenciones basadas en datos, coordinación de atención y optimización de recursos.",
          de: "Bevölkerungsgesundheitsmanagement ist ein koordinierter Gesundheitsversorgungsansatz, der sich auf die Verbesserung der Gesundheitsergebnisse für definierte Gruppen von Personen durch datengetriebene Interventionen, Pflegekoordination und Ressourcenoptimierung konzentriert.",
          nl: "Populatiegezondheidsmanagement is een gecoördineerde zorgverleningsbenadering die zich richt op het verbeteren van gezondheidsuitkomsten voor gedefinieerde groepen individuen door datagedreven interventies, zorgcoördinatie en resource-optimalisatie."
        }
      },
      {
        question: {
          en: "What is health disparities research?",
          es: "¿Qué es la investigación de disparidades en salud?",
          de: "Was ist Gesundheitsungleichheitsforschung?",
          nl: "Wat is gezondheidsongelijkhedenonderzoek?"
        },
        options: [
          { en: "Study of health differences between population groups", es: "Estudio de diferencias en salud entre grupos poblacionales", de: "Studie von Gesundheitsunterschieden zwischen Bevölkerungsgruppen", nl: "Studie van gezondheidsverschillen tussen populatiegroepen" },
          { en: "Comparison of medical treatment costs", es: "Comparación de costos de tratamiento médico", de: "Vergleich medizinischer Behandlungskosten", nl: "Vergelijking van medische behandelingskosten" },
          { en: "Analysis of hospital quality ratings", es: "Análisis de calificaciones de calidad hospitalaria", de: "Analyse von Krankenhaus-Qualitätsbewertungen", nl: "Analyse van ziekenhuis kwaliteitsbeoordelingen" },
          { en: "Research on medical device efficacy", es: "Investigación sobre eficacia de dispositivos médicos", de: "Forschung zur Wirksamkeit medizinischer Geräte", nl: "Onderzoek naar medische apparaat werkzaamheid" }
        ],
        correct: 0,
        explanation: {
          en: "Health disparities research examines differences in health outcomes and access to healthcare between different population groups, aiming to identify causes of inequities and develop interventions to reduce health gaps.",
          es: "La investigación de disparidades en salud examina diferencias en resultados de salud y acceso a atención médica entre diferentes grupos poblacionales, buscando identificar causas de inequidades y desarrollar intervenciones para reducir brechas de salud.",
          de: "Gesundheitsungleichheitsforschung untersucht Unterschiede in Gesundheitsergebnissen und Zugang zur Gesundheitsversorgung zwischen verschiedenen Bevölkerungsgruppen, mit dem Ziel, Ursachen von Ungerechtigkeiten zu identifizieren und Interventionen zur Reduzierung von Gesundheitslücken zu entwickeln.",
          nl: "Gezondheidsongelijkhedenonderzoek onderzoekt verschillen in gezondheidsuitkomsten en toegang tot zorgverlening tussen verschillende populatiegroepen, gericht op het identificeren van oorzaken van ongelijkheden en het ontwikkelen van interventies om gezondheidsgaps te verkleinen."
        }
      },
      {
        question: {
          en: "What is health policy?",
          es: "¿Qué es la política de salud?",
          de: "Was ist Gesundheitspolitik?",
          nl: "Wat is gezondheidsbeleid?"
        },
        options: [
          { en: "Decisions and actions to achieve health goals", es: "Decisiones y acciones para alcanzar objetivos de salud", de: "Entscheidungen und Maßnahmen zur Erreichung von Gesundheitszielen", nl: "Beslissingen en acties om gezondheidsdoelen te bereiken" },
          { en: "Individual health insurance plans", es: "Planes individuales de seguro de salud", de: "Individuelle Krankenversicherungspläne", nl: "Individuele ziekteverzekeringplannen" },
          { en: "Hospital operating procedures", es: "Procedimientos operativos hospitalarios", de: "Krankenhaus-Betriebsverfahren", nl: "Ziekenhuis operationele procedures" },
          { en: "Medical practice guidelines", es: "Guías de práctica médica", de: "Medizinische Praxisrichtlinien", nl: "Medische praktijk richtlijnen" }
        ],
        correct: 0,
        explanation: {
          en: "Health policy encompasses decisions, plans, and actions undertaken to achieve specific healthcare goals within a society, including legislation, regulations, and guidelines that shape healthcare delivery and population health outcomes.",
          es: "La política de salud abarca decisiones, planes y acciones emprendidas para alcanzar objetivos específicos de atención médica dentro de una sociedad, incluyendo legislación, regulaciones y guías que moldean la entrega de atención médica y resultados de salud poblacional.",
          de: "Gesundheitspolitik umfasst Entscheidungen, Pläne und Maßnahmen, die zur Erreichung spezifischer Gesundheitsziele innerhalb einer Gesellschaft unternommen werden, einschließlich Gesetzgebung, Vorschriften und Richtlinien, die Gesundheitsversorgung und Bevölkerungsgesundheitsergebnisse prägen.",
          nl: "Gezondheidsbeleid omvat beslissingen, plannen en acties ondernomen om specifieke zorgdoelen binnen een samenleving te bereiken, inclusief wetgeving, regelgeving en richtlijnen die zorgverlening en populatiegezondheidsuitkomsten vormgeven."
        }
      },
      {
        question: {
          en: "What is the role of biostatistics in public health?",
          es: "¿Cuál es el papel de la bioestadística en salud pública?",
          de: "Was ist die Rolle der Biostatistik in der öffentlichen Gesundheit?",
          nl: "Wat is de rol van biostatistiek in de volksgezondheid?"
        },
        options: [
          { en: "Statistical analysis of biological and health data", es: "Análisis estadístico de datos biológicos y de salud", de: "Statistische Analyse biologischer und Gesundheitsdaten", nl: "Statistische analyse van biologische en gezondheidsgegevens" },
          { en: "Laboratory equipment calibration", es: "Calibración de equipo de laboratorio", de: "Kalibrierung von Laborgeräten", nl: "Kalibratie van laboratoriumapparatuur" },
          { en: "Medical record documentation", es: "Documentación de registros médicos", de: "Medizinische Aufzeichnungsdokumentation", nl: "Medische dossier documentatie" },
          { en: "Healthcare financial management", es: "Gestión financiera de salud", de: "Gesundheitsfinanzmanagement", nl: "Zorgfinancieel management" }
        ],
        correct: 0,
        explanation: {
          en: "Biostatistics applies statistical methods to biological and health-related data to design studies, analyze results, and interpret findings in public health research, enabling evidence-based decision making and policy development.",
          es: "La bioestadística aplica métodos estadísticos a datos biológicos y relacionados con salud para diseñar estudios, analizar resultados e interpretar hallazgos en investigación de salud pública, permitiendo toma de decisiones basada en evidencia y desarrollo de políticas.",
          de: "Biostatistik wendet statistische Methoden auf biologische und gesundheitsbezogene Daten an, um Studien zu entwerfen, Ergebnisse zu analysieren und Befunde in der öffentlichen Gesundheitsforschung zu interpretieren, was evidenzbasierte Entscheidungsfindung und Politikentwicklung ermöglicht.",
          nl: "Biostatistiek past statistische methoden toe op biologische en gezondheidsgerelateerde gegevens om studies te ontwerpen, resultaten te analyseren en bevindingen in volksgezondheidsonderzoek te interpreteren, wat evidence-based besluitvorming en beleidsontwikkeling mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the precautionary principle in public health?",
          es: "¿Qué es el principio precautorio en salud pública?",
          de: "Was ist das Vorsorgeprinzip in der öffentlichen Gesundheit?",
          nl: "Wat is het voorzorgsbeginsel in de volksgezondheid?"
        },
        options: [
          { en: "Taking preventive action despite scientific uncertainty", es: "Tomar acción preventiva a pesar de incertidumbre científica", de: "Präventive Maßnahmen trotz wissenschaftlicher Unsicherheit ergreifen", nl: "Preventieve actie ondernemen ondanks wetenschappelijke onzekerheid" },
          { en: "Waiting for complete scientific proof", es: "Esperar prueba científica completa", de: "Auf vollständigen wissenschaftlichen Beweis warten", nl: "Wachten op volledig wetenschappelijk bewijs" },
          { en: "Following established protocols only", es: "Seguir solo protocolos establecidos", de: "Nur etablierte Protokolle befolgen", nl: "Alleen gevestigde protocollen volgen" },
          { en: "Avoiding all health interventions", es: "Evitar todas las intervenciones de salud", de: "Alle Gesundheitsinterventionen vermeiden", nl: "Alle gezondheidsinterventies vermijden" }
        ],
        correct: 0,
        explanation: {
          en: "The precautionary principle states that lack of full scientific certainty should not postpone action to prevent potential harm when there are threats of serious or irreversible damage to public health or the environment.",
          es: "El principio precautorio establece que la falta de certeza científica completa no debe posponer la acción para prevenir daño potencial cuando hay amenazas de daño serio o irreversible a la salud pública o el ambiente.",
          de: "Das Vorsorgeprinzip besagt, dass mangelnde vollständige wissenschaftliche Gewissheit keine Maßnahmen zur Verhinderung potenzieller Schäden hinauszögern sollte, wenn Bedrohungen durch schwere oder irreversible Schäden für die öffentliche Gesundheit oder die Umwelt bestehen.",
          nl: "Het voorzorgsbeginsel stelt dat gebrek aan volledige wetenschappelijke zekerheid geen actie om potentiële schade te voorkomen mag uitstellen wanneer er bedreigingen zijn van ernstige of onomkeerbare schade aan de volksgezondheid of het milieu."
        }
      },
      {
        question: {
          en: "What is the 'One Health' approach?",
          es: "¿Qué es el enfoque 'Una Salud'?",
          de: "Was ist der 'One Health'-Ansatz?",
          nl: "Wat is de 'One Health' benadering?"
        },
        options: [
          { en: "Integrated approach linking human, animal, and environmental health", es: "Enfoque integrado que vincula salud humana, animal y ambiental", de: "Integrierter Ansatz zur Verknüpfung von menschlicher, tierischer und Umweltgesundheit", nl: "Geïntegreerde benadering die menselijke, dierlijke en milieugezondheid verbindt" },
          { en: "Single healthcare provider system", es: "Sistema de proveedor único de atención médica", de: "Einziger Gesundheitsanbieter-System", nl: "Enkel zorgverlener systeem" },
          { en: "Universal health insurance coverage", es: "Cobertura universal de seguro de salud", de: "Universelle Krankenversicherung", nl: "Universele ziekteverzekering dekking" },
          { en: "Standardized medical protocols", es: "Protocolos médicos estandarizados", de: "Standardisierte medizinische Protokolle", nl: "Gestandaardiseerde medische protocollen" }
        ],
        correct: 0,
        explanation: {
          en: "One Health is a collaborative, multisectoral, and trans-disciplinary approach that recognizes the interconnection between people, animals, plants, and their shared environment to achieve optimal health outcomes for all.",
          es: "Una Salud es un enfoque colaborativo, multisectorial y transdisciplinario que reconoce la interconexión entre personas, animales, plantas y su ambiente compartido para alcanzar resultados óptimos de salud para todos.",
          de: "One Health ist ein kollaborativer, multisektoraler und transdisziplinärer Ansatz, der die Vernetzung zwischen Menschen, Tieren, Pflanzen und ihrer gemeinsamen Umwelt anerkennt, um optimale Gesundheitsergebnisse für alle zu erreichen.",
          nl: "One Health is een collaboratieve, multisectorale en transdisciplinaire benadering die de onderlinge verbinding tussen mensen, dieren, planten en hun gedeelde omgeving erkent om optimale gezondheidsuitkomsten voor allen te bereiken."
        }
      },
      {
        question: {
          en: "What is the concept of 'herd immunity' in epidemiology?",
          es: "¿Qué es el concepto de 'inmunidad de rebaño' en epidemiología?",
          de: "Was ist das Konzept der 'Herdenimmunität' in der Epidemiologie?",
          nl: "Wat is het concept van 'kudde-immuniteit' in de epidemiologie?"
        },
        options: [
          { en: "Individual immunity after vaccination", es: "Inmunidad individual después de vacunación", de: "Individuelle Immunität nach Impfung", nl: "Individuele immuniteit na vaccinatie" },
          { en: "Protection of unvaccinated individuals through high vaccination coverage", es: "Protección de individuos no vacunados a través de alta cobertura de vacunación", de: "Schutz ungeimpfter Personen durch hohe Impfabdeckung", nl: "Bescherming van niet-gevaccineerde individuen door hoge vaccinatiedekking" },
          { en: "Natural resistance to all diseases", es: "Resistencia natural a todas las enfermedades", de: "Natürliche Resistenz gegen alle Krankheiten", nl: "Natuurlijke weerstand tegen alle ziekten" },
          { en: "Immunity that lasts only one year", es: "Inmunidad que dura solo un año", de: "Immunität, die nur ein Jahr anhält", nl: "Immuniteit die maar één jaar duurt" }
        ],
        correct: 1,
        explanation: {
          en: "Herd immunity occurs when a high percentage of a community is immune to a disease, making spread unlikely and indirectly protecting those who are not immune, including those who cannot be vaccinated due to medical conditions.",
          es: "La inmunidad de rebaño ocurre cuando un alto porcentaje de una comunidad es inmune a una enfermedad, haciendo improbable la propagación y protegiendo indirectamente a quienes no son inmunes, incluyendo aquellos que no pueden ser vacunados por condiciones médicas.",
          de: "Herdenimmunität tritt auf, wenn ein hoher Prozentsatz einer Gemeinschaft gegen eine Krankheit immun ist, wodurch die Ausbreitung unwahrscheinlich wird und diejenigen indirekt geschützt werden, die nicht immun sind, einschließlich derer, die aus medizinischen Gründen nicht geimpft werden können.",
          nl: "Kudde-immuniteit treedt op wanneer een hoog percentage van een gemeenschap immuun is voor een ziekte, waardoor verspreiding onwaarschijnlijk wordt en degenen die niet immuun zijn indirect worden beschermd, inclusief degenen die om medische redenen niet gevaccineerd kunnen worden."
        }
      },
      {
        question: {
          en: "What is the difference between a pandemic and an epidemic?",
          es: "¿Cuál es la diferencia entre una pandemia y una epidemia?",
          de: "Was ist der Unterschied zwischen einer Pandemie und einer Epidemie?",
          nl: "Wat is het verschil tussen een pandemie en een epidemie?"
        },
        options: [
          { en: "No difference, terms are interchangeable", es: "No hay diferencia, los términos son intercambiables", de: "Kein Unterschied, Begriffe sind austauschbar", nl: "Geen verschil, termen zijn uitwisselbaar" },
          { en: "Pandemic affects multiple countries/continents, epidemic is localized", es: "Pandemia afecta múltiples países/continentes, epidemia es localizada", de: "Pandemie betrifft mehrere Länder/Kontinente, Epidemie ist lokalisiert", nl: "Pandemie beïnvloedt meerdere landen/continenten, epidemie is gelokaliseerd" },
          { en: "Pandemic is less severe than epidemic", es: "Pandemia es menos severa que epidemia", de: "Pandemie ist weniger schwerwiegend als Epidemie", nl: "Pandemie is minder ernstig dan epidemie" },
          { en: "Epidemic affects only animals, pandemic affects humans", es: "Epidemia afecta solo animales, pandemia afecta humanos", de: "Epidemie betrifft nur Tiere, Pandemie betrifft Menschen", nl: "Epidemie beïnvloedt alleen dieren, pandemie beïnvloedt mensen" }
        ],
        correct: 1,
        explanation: {
          en: "A pandemic is a disease outbreak that spreads across multiple countries or continents and affects a large number of people globally. An epidemic is an outbreak confined to a particular community, population, or region.",
          es: "Una pandemia es un brote de enfermedad que se extiende a través de múltiples países o continentes y afecta a un gran número de personas globalmente. Una epidemia es un brote confinado a una comunidad, población o región particular.",
          de: "Eine Pandemie ist ein Krankheitsausbruch, der sich über mehrere Länder oder Kontinente ausbreitet und eine große Anzahl von Menschen weltweit betrifft. Eine Epidemie ist ein Ausbruch, der auf eine bestimmte Gemeinschaft, Bevölkerung oder Region beschränkt ist.",
          nl: "Een pandemie is een ziekte-uitbraak die zich verspreidt over meerdere landen of continenten en een groot aantal mensen wereldwijd beïnvloedt. Een epidemie is een uitbraak beperkt tot een bepaalde gemeenschap, bevolking of regio."
        }
      },
      {
        question: {
          en: "What is the primary goal of contact tracing in public health?",
          es: "¿Cuál es el objetivo principal del rastreo de contactos en salud pública?",
          de: "Was ist das Hauptziel der Kontaktverfolgung im öffentlichen Gesundheitswesen?",
          nl: "Wat is het primaire doel van contactonderzoek in de volksgezondheid?"
        },
        options: [
          { en: "Punish people who spread disease", es: "Castigar personas que propagan enfermedad", de: "Menschen bestrafen, die Krankheiten verbreiten", nl: "Mensen straffen die ziekte verspreiden" },
          { en: "Identify and isolate exposed individuals to prevent transmission", es: "Identificar y aislar individuos expuestos para prevenir transmisión", de: "Exponierte Personen identifizieren und isolieren zur Übertragungsverhütung", nl: "Blootgestelde individuen identificeren en isoleren om overdracht te voorkomen" },
          { en: "Collect personal information for government surveillance", es: "Recopilar información personal para vigilancia gubernamental", de: "Persönliche Informationen für staatliche Überwachung sammeln", nl: "Persoonlijke informatie verzamelen voor overheidsbewaking" },
          { en: "Determine who pays for treatment", es: "Determinar quién paga por el tratamiento", de: "Bestimmen, wer für die Behandlung zahlt", nl: "Bepalen wie voor behandeling betaalt" }
        ],
        correct: 1,
        explanation: {
          en: "Contact tracing aims to identify individuals who have been exposed to an infectious disease, inform them of their exposure, and ensure appropriate testing, quarantine, or isolation to break the chain of transmission and prevent further spread.",
          es: "El rastreo de contactos busca identificar individuos que han sido expuestos a una enfermedad infecciosa, informarles de su exposición y asegurar pruebas apropiadas, cuarentena o aislamiento para romper la cadena de transmisión y prevenir mayor propagación.",
          de: "Kontaktverfolgung zielt darauf ab, Personen zu identifizieren, die einer Infektionskrankheit ausgesetzt waren, sie über ihre Exposition zu informieren und angemessene Tests, Quarantäne oder Isolation sicherzustellen, um die Übertragungskette zu unterbrechen und weitere Ausbreitung zu verhindern.",
          nl: "Contactonderzoek beoogt individuen te identificeren die zijn blootgesteld aan een infectieziekte, hen te informeren over hun blootstelling en passende testen, quarantaine of isolatie te verzekeren om de overdrachtketen te doorbreken en verdere verspreiding te voorkomen."
        }
      },
      {
        question: {
          en: "What does 'DALY' stand for in public health metrics?",
          es: "¿Qué significa 'AVAD' en métricas de salud pública?",
          de: "Wofür steht 'DALY' in öffentlichen Gesundheitsmetriken?",
          nl: "Waar staat 'DALY' voor in volksgezondheidsmetrieken?"
        },
        options: [
          { en: "Daily Activity Life Years", es: "Años de Vida de Actividad Diaria", de: "Tägliche Aktivitäts-Lebensjahre", nl: "Dagelijkse Activiteit Levensjaren" },
          { en: "Disability-Adjusted Life Years", es: "Años de Vida Ajustados por Discapacidad", de: "Behinderungsadjustierte Lebensjahre", nl: "Ziekte-Aangepaste Levensjaren" },
          { en: "Death and Life Years", es: "Años de Muerte y Vida", de: "Tod- und Lebensjahre", nl: "Dood en Levensjaren" },
          { en: "Disease Activity Life Years", es: "Años de Vida de Actividad de Enfermedad", de: "Krankheitsaktivitäts-Lebensjahre", nl: "Ziekte Activiteit Levensjaren" }
        ],
        correct: 1,
        explanation: {
          en: "DALY stands for Disability-Adjusted Life Years, a measure of overall disease burden that combines years of life lost due to premature mortality and years lived with disability, used to compare the impact of different diseases and health interventions.",
          es: "AVAD significa Años de Vida Ajustados por Discapacidad, una medida de carga general de enfermedad que combina años de vida perdidos por mortalidad prematura y años vividos con discapacidad, usado para comparar el impacto de diferentes enfermedades e intervenciones de salud.",
          de: "DALY steht für Behinderungsadjustierte Lebensjahre, ein Maß für die Gesamtkrankheitslast, das Jahre des durch vorzeitigen Tod verlorenen Lebens und Jahre mit Behinderung kombiniert, verwendet um die Auswirkungen verschiedener Krankheiten und Gesundheitsinterventionen zu vergleichen.",
          nl: "DALY staat voor Ziekte-Aangepaste Levensjaren, een maat voor de totale ziektelast die jaren van verloren leven door voortijdige sterfte en jaren geleefd met beperking combineert, gebruikt om de impact van verschillende ziekten en gezondheidsinterventies te vergelijken."
        }
      },
      {
        question: {
          en: "What is the concept of 'social determinants of health'?",
          es: "¿Qué es el concepto de 'determinantes sociales de la salud'?",
          de: "Was ist das Konzept der 'sozialen Determinanten der Gesundheit'?",
          nl: "Wat is het concept van 'sociale determinanten van gezondheid'?"
        },
        options: [
          { en: "Only genetic factors affecting health", es: "Solo factores genéticos que afectan la salud", de: "Nur genetische Faktoren, die die Gesundheit beeinflussen", nl: "Alleen genetische factoren die gezondheid beïnvloeden" },
          { en: "Social and economic conditions that influence health outcomes", es: "Condiciones sociales y económicas que influyen en resultados de salud", de: "Soziale und wirtschaftliche Bedingungen, die Gesundheitsergebnisse beeinflussen", nl: "Sociale en economische omstandigheden die gezondheidsuitkomsten beïnvloeden" },
          { en: "Medical treatments available in hospitals", es: "Tratamientos médicos disponibles en hospitales", de: "Medizinische Behandlungen in Krankenhäusern verfügbar", nl: "Medische behandelingen beschikbaar in ziekenhuizen" },
          { en: "Individual lifestyle choices only", es: "Solo elecciones de estilo de vida individual", de: "Nur individuelle Lebensstilentscheidungen", nl: "Alleen individuele levensstijlkeuzes" }
        ],
        correct: 1,
        explanation: {
          en: "Social determinants of health are the conditions in which people are born, grow, live, work, and age, including factors like education, income, housing, food security, and social support, which significantly impact health outcomes and health equity.",
          es: "Los determinantes sociales de la salud son las condiciones en las que las personas nacen, crecen, viven, trabajan y envejecen, incluyendo factores como educación, ingresos, vivienda, seguridad alimentaria y apoyo social, que impactan significativamente los resultados de salud y la equidad en salud.",
          de: "Soziale Determinanten der Gesundheit sind die Bedingungen, unter denen Menschen geboren werden, wachsen, leben, arbeiten und altern, einschließlich Faktoren wie Bildung, Einkommen, Wohnen, Nahrungssicherheit und soziale Unterstützung, die Gesundheitsergebnisse und Gesundheitsgerechtigkeit erheblich beeinflussen.",
          nl: "Sociale determinanten van gezondheid zijn de omstandigheden waarin mensen worden geboren, opgroeien, leven, werken en ouder worden, inclusief factoren zoals onderwijs, inkomen, huisvesting, voedselzekerheid en sociale ondersteuning, die gezondheidsuitkomsten en gezondheidsgelijkheid aanzienlijk beïnvloeden."
        }
      },
      {
        question: {
          en: "What is the purpose of a randomized controlled trial (RCT) in public health research?",
          es: "¿Cuál es el propósito de un ensayo controlado aleatorizado (ECA) en investigación de salud pública?",
          de: "Was ist der Zweck einer randomisierten kontrollierten Studie (RCT) in der öffentlichen Gesundheitsforschung?",
          nl: "Wat is het doel van een gerandomiseerde gecontroleerde trial (RCT) in volksgezondheidsonderzoek?"
        },
        options: [
          { en: "To observe natural disease progression", es: "Para observar progresión natural de enfermedad", de: "Um natürlichen Krankheitsverlauf zu beobachten", nl: "Om natuurlijk ziekteverloop te observeren" },
          { en: "To establish causal relationships by controlling for confounding variables", es: "Para establecer relaciones causales controlando variables de confusión", de: "Um kausale Beziehungen durch Kontrolle störender Variablen zu etablieren", nl: "Om causale relaties vast te stellen door verstorende variabelen te controleren" },
          { en: "To collect demographic information", es: "Para recopilar información demográfica", de: "Um demografische Informationen zu sammeln", nl: "Om demografische informatie te verzamelen" },
          { en: "To reduce research costs", es: "Para reducir costos de investigación", de: "Um Forschungskosten zu reduzieren", nl: "Om onderzoekskosten te verlagen" }
        ],
        correct: 1,
        explanation: {
          en: "Randomized controlled trials are the gold standard for establishing causal relationships because random assignment of participants to intervention and control groups helps eliminate selection bias and confounding variables, providing strong evidence for treatment effectiveness.",
          es: "Los ensayos controlados aleatorizados son el estándar de oro para establecer relaciones causales porque la asignación aleatoria de participantes a grupos de intervención y control ayuda a eliminar sesgo de selección y variables de confusión, proporcionando evidencia sólida para efectividad del tratamiento.",
          de: "Randomisierte kontrollierte Studien sind der Goldstandard für die Etablierung kausaler Beziehungen, da die zufällige Zuteilung von Teilnehmern zu Interventions- und Kontrollgruppen hilft, Selektionsverzerrung und störende Variablen zu eliminieren und starke Evidenz für Behandlungseffektivität zu liefern.",
          nl: "Gerandomiseerde gecontroleerde trials zijn de gouden standaard voor het vaststellen van causale relaties omdat willekeurige toewijzing van deelnemers aan interventie- en controlegroepen helpt selectiebias en verstorende variabelen te elimineren, wat sterke bewijskracht voor behandelingseffectiviteit biedt."
        }
      },
      {
        question: {
          en: "What is 'health equity' in public health?",
          es: "¿Qué es 'equidad en salud' en salud pública?",
          de: "Was ist 'Gesundheitsgerechtigkeit' im öffentlichen Gesundheitswesen?",
          nl: "Wat is 'gezondheidsgelijkheid' in de volksgezondheid?"
        },
        options: [
          { en: "Everyone receives identical healthcare services", es: "Todos reciben servicios de salud idénticos", de: "Jeder erhält identische Gesundheitsdienste", nl: "Iedereen krijgt identieke zorgdiensten" },
          { en: "Fair opportunity for everyone to attain their full health potential", es: "Oportunidad justa para que todos alcancen su potencial completo de salud", de: "Faire Chance für alle, ihr volles Gesundheitspotential zu erreichen", nl: "Eerlijke kans voor iedereen om hun volledige gezondheidspotentieel te bereiken" },
          { en: "Healthcare only for wealthy individuals", es: "Atención médica solo para individuos ricos", de: "Gesundheitsversorgung nur für wohlhabende Personen", nl: "Zorgverlening alleen voor rijke individuen" },
          { en: "Equal health outcomes regardless of effort", es: "Resultados de salud iguales independientemente del esfuerzo", de: "Gleiche Gesundheitsergebnisse unabhängig von Anstrengung", nl: "Gelijke gezondheidsuitkomsten ongeacht inspanning" }
        ],
        correct: 1,
        explanation: {
          en: "Health equity means everyone has a fair opportunity to achieve their best possible health, which requires addressing social determinants of health and removing obstacles like poverty, discrimination, and lack of access to good education, housing, and healthcare.",
          es: "La equidad en salud significa que todos tienen una oportunidad justa de alcanzar su mejor salud posible, lo que requiere abordar determinantes sociales de la salud y eliminar obstáculos como pobreza, discriminación y falta de acceso a buena educación, vivienda y atención médica.",
          de: "Gesundheitsgerechtigkeit bedeutet, dass jeder eine faire Chance hat, seine bestmögliche Gesundheit zu erreichen, was die Behandlung sozialer Determinanten der Gesundheit und die Beseitigung von Hindernissen wie Armut, Diskriminierung und mangelndem Zugang zu guter Bildung, Wohnen und Gesundheitsversorgung erfordert.",
          nl: "Gezondheidsgelijkheid betekent dat iedereen een eerlijke kans heeft om hun beste mogelijke gezondheid te bereiken, wat het aanpakken van sociale determinanten van gezondheid vereist en het wegwerken van obstakels zoals armoede, discriminatie en gebrek aan toegang tot goed onderwijs, huisvesting en zorgverlening."
        }
      },
      {
        question: {
          en: "What is the concept of 'risk stratification' in public health?",
          es: "¿Qué es el concepto de 'estratificación de riesgo' en salud pública?",
          de: "Was ist das Konzept der 'Risikostratifikation' im öffentlichen Gesundheitswesen?",
          nl: "Wat is het concept van 'risicostratificatie' in de volksgezondheid?"
        },
        options: [
          { en: "Treating all patients the same way", es: "Tratar a todos los pacientes de la misma manera", de: "Alle Patienten gleich behandeln", nl: "Alle patiënten op dezelfde manier behandelen" },
          { en: "Categorizing populations based on their likelihood of adverse outcomes", es: "Categorizar poblaciones basado en su probabilidad de resultados adversos", de: "Populationen basierend auf ihrer Wahrscheinlichkeit ungünstiger Ergebnisse kategorisieren", nl: "Populaties categoriseren gebaseerd op hun waarschijnlijkheid van ongunstige uitkomsten" },
          { en: "Creating social hierarchy in healthcare", es: "Crear jerarquía social en atención médica", de: "Soziale Hierarchie im Gesundheitswesen schaffen", nl: "Sociale hiërarchie creëren in de zorgverlening" },
          { en: "Eliminating all health risks", es: "Eliminar todos los riesgos de salud", de: "Alle Gesundheitsrisiken eliminieren", nl: "Alle gezondheidsrisico's elimineren" }
        ],
        correct: 1,
        explanation: {
          en: "Risk stratification involves categorizing individuals or populations into different risk levels based on factors like age, comorbidities, lifestyle, and genetics to tailor preventive measures, screening programs, and treatment interventions more effectively.",
          es: "La estratificación de riesgo involucra categorizar individuos o poblaciones en diferentes niveles de riesgo basado en factores como edad, comorbilidades, estilo de vida y genética para adaptar medidas preventivas, programas de detección e intervenciones de tratamiento más efectivamente.",
          de: "Risikostratifikation beinhaltet die Kategorisierung von Personen oder Populationen in verschiedene Risikoebenen basierend auf Faktoren wie Alter, Komorbiditäten, Lebensstil und Genetik, um präventive Maßnahmen, Screening-Programme und Behandlungsinterventionen effektiver anzupassen.",
          nl: "Risicostratificatie houdt in dat individuen of populaties worden gecategoriseerd in verschillende risiconiveaus gebaseerd op factoren zoals leeftijd, comorbiditeiten, levensstijl en genetica om preventieve maatregelen, screeningprogramma's en behandelingsinterventies effectiever aan te passen."
        }
      },
      {
        question: {
          en: "What is the purpose of health impact assessment (HIA)?",
          es: "¿Cuál es el propósito de la evaluación del impacto en salud (EIS)?",
          de: "Was ist der Zweck der Gesundheitsfolgenabschätzung (GFA)?",
          nl: "Wat is het doel van gezondheidseffectscreening (GES)?"
        },
        options: [
          { en: "To diagnose individual diseases", es: "Para diagnosticar enfermedades individuales", de: "Um individuelle Krankheiten zu diagnostizieren", nl: "Om individuele ziekten te diagnosticeren" },
          { en: "To evaluate potential health effects of policies, programs, or projects", es: "Para evaluar efectos potenciales en salud de políticas, programas o proyectos", de: "Um potenzielle Gesundheitseffekte von Politiken, Programmen oder Projekten zu bewerten", nl: "Om potentiële gezondheidseffecten van beleid, programma's of projecten te evalueren" },
          { en: "To calculate insurance premiums", es: "Para calcular primas de seguro", de: "Um Versicherungsprämien zu berechnen", nl: "Om verzekeringspremies te berekenen" },
          { en: "To monitor hospital performance", es: "Para monitorear desempeño hospitalario", de: "Um Krankenhausleistung zu überwachen", nl: "Om ziekenhuisprestaties te monitoren" }
        ],
        correct: 1,
        explanation: {
          en: "Health Impact Assessment is a systematic process used to judge the potential health effects of a policy, program, or project on a population, helping decision-makers make informed choices that promote health and reduce health inequities.",
          es: "La Evaluación del Impacto en Salud es un proceso sistemático usado para juzgar los efectos potenciales en salud de una política, programa o proyecto en una población, ayudando a tomadores de decisiones hacer elecciones informadas que promuevan la salud y reduzcan inequidades en salud.",
          de: "Gesundheitsfolgenabschätzung ist ein systematischer Prozess zur Beurteilung potenzieller Gesundheitseffekte einer Politik, eines Programms oder Projekts auf eine Population, der Entscheidungsträgern hilft, informierte Entscheidungen zu treffen, die Gesundheit fördern und Gesundheitsungleichheiten reduzieren.",
          nl: "Gezondheidseffectscreening is een systematisch proces gebruikt om potentiële gezondheidseffecten van een beleid, programma of project op een populatie te beoordelen, wat besluitvormers helpt geïnformeerde keuzes te maken die gezondheid bevorderen en gezondheidsonegelijkheden verminderen."
        }
      },
      {
        question: {
          en: "What is 'syndromic surveillance' in public health?",
          es: "¿Qué es 'vigilancia sindrómica' en salud pública?",
          de: "Was ist 'syndromische Überwachung' im öffentlichen Gesundheitswesen?",
          nl: "Wat is 'syndromische surveillance' in de volksgezondheid?"
        },
        options: [
          { en: "Monitoring genetic syndromes only", es: "Monitorear solo síndromes genéticos", de: "Nur genetische Syndrome überwachen", nl: "Alleen genetische syndromen monitoren" },
          { en: "Surveillance based on symptoms before laboratory confirmation", es: "Vigilancia basada en síntomas antes de confirmación de laboratorio", de: "Überwachung basierend auf Symptomen vor Laborbestätigung", nl: "Surveillance gebaseerd op symptomen voor laboratoriumbevestiging" },
          { en: "Following specific patients for life", es: "Seguir pacientes específicos de por vida", de: "Spezifische Patienten lebenslang verfolgen", nl: "Specifieke patiënten levenslang volgen" },
          { en: "Studying hospital administration", es: "Estudiar administración hospitalaria", de: "Krankenhausverwaltung studieren", nl: "Ziekenhuisadministratie bestuderen" }
        ],
        correct: 1,
        explanation: {
          en: "Syndromic surveillance monitors health-related data based on clinical signs and symptoms rather than confirmed diagnoses, allowing for early detection of disease outbreaks, bioterrorism events, or other public health emergencies before laboratory confirmation.",
          es: "La vigilancia sindrómica monitorea datos relacionados con salud basados en signos y síntomas clínicos más que diagnósticos confirmados, permitiendo detección temprana de brotes de enfermedad, eventos de bioterrorismo u otras emergencias de salud pública antes de confirmación de laboratorio.",
          de: "Syndromische Überwachung überwacht gesundheitsbezogene Daten basierend auf klinischen Zeichen und Symptomen statt bestätigten Diagnosen, was frühe Erkennung von Krankheitsausbrüchen, Bioterrorismus-Ereignissen oder anderen öffentlichen Gesundheitsnotfällen vor Laborbestätigung ermöglicht.",
          nl: "Syndromische surveillance monitort gezondheidsgegevens gebaseerd op klinische tekenen en symptomen in plaats van bevestigde diagnoses, wat vroege detectie van ziekte-uitbraken, bioterrorisme-gebeurtenissen of andere volksgezondheidsnoodsituaties mogelijk maakt voor laboratoriumbevestiging."
        }
      },
      {
        question: {
          en: "What is the concept of 'health in all policies' (HiAP)?",
          es: "¿Qué es el concepto de 'salud en todas las políticas' (STP)?",
          de: "Was ist das Konzept 'Gesundheit in allen Politikbereichen' (GiAP)?",
          nl: "Wat is het concept van 'gezondheid in alle beleidsgebieden' (GiAB)?"
        },
        options: [
          { en: "Only health sector makes decisions about health", es: "Solo el sector salud toma decisiones sobre salud", de: "Nur der Gesundheitssektor trifft Gesundheitsentscheidungen", nl: "Alleen gezondheidssector neemt beslissingen over gezondheid" },
          { en: "Collaborative approach considering health impacts across all government sectors", es: "Enfoque colaborativo considerando impactos en salud a través de todos los sectores gubernamentales", de: "Kollaborativer Ansatz unter Berücksichtigung von Gesundheitsauswirkungen in allen Regierungssektoren", nl: "Collaboratieve benadering waarbij gezondheidsimpact wordt overwogen in alle overheidssectoren" },
          { en: "Healthcare should be privatized", es: "La atención médica debería ser privatizada", de: "Gesundheitsversorgung sollte privatisiert werden", nl: "Zorgverlening zou geprivatiseerd moeten worden" },
          { en: "Focus only on disease treatment", es: "Enfocarse solo en tratamiento de enfermedades", de: "Nur auf Krankheitsbehandlung fokussieren", nl: "Alleen focussen op ziektebehandeling" }
        ],
        correct: 1,
        explanation: {
          en: "Health in All Policies is a collaborative approach that systematically takes into account the health implications of decisions across all policy sectors, seeking synergies and avoiding harmful health impacts to improve population health and health equity.",
          es: "Salud en Todas las Políticas es un enfoque colaborativo que sistemáticamente considera las implicaciones de salud de decisiones a través de todos los sectores de política, buscando sinergias y evitando impactos dañinos en salud para mejorar la salud poblacional y equidad en salud.",
          de: "Gesundheit in Allen Politikbereichen ist ein kollaborativer Ansatz, der systematisch die Gesundheitsimplikationen von Entscheidungen in allen Politikbereichen berücksichtigt, Synergien sucht und schädliche Gesundheitsauswirkungen vermeidet, um Bevölkerungsgesundheit und Gesundheitsgerechtigkeit zu verbessern.",
          nl: "Gezondheid in Alle Beleidsgebieden is een collaboratieve benadering die systematisch rekening houdt met gezondheidsimplicaties van beslissingen in alle beleidssectoren, synergieën zoekt en schadelijke gezondheidsimpact vermijdt om bevolkingsgezondheid en gezondheidsgelijkheid te verbeteren."
        }
      },
      {
        question: {
          en: "What is the 'inverse care law' in healthcare?",
          es: "¿Qué es la 'ley de atención inversa' en atención médica?",
          de: "Was ist das 'inverse Versorgungsgesetz' im Gesundheitswesen?",
          nl: "Wat is de 'omgekeerde zorgwet' in de gezondheidszorg?"
        },
        options: [
          { en: "Healthy people need more care than sick people", es: "Personas sanas necesitan más atención que personas enfermas", de: "Gesunde Menschen brauchen mehr Pflege als kranke Menschen", nl: "Gezonde mensen hebben meer zorg nodig dan zieke mensen" },
          { en: "Availability of good healthcare varies inversely with need for it", es: "Disponibilidad de buena atención médica varía inversamente con la necesidad de ella", de: "Verfügbarkeit guter Gesundheitsversorgung variiert umgekehrt mit dem Bedarf dafür", nl: "Beschikbaarheid van goede zorgverlening varieert omgekeerd met de behoefte eraan" },
          { en: "Private healthcare is better than public", es: "Atención médica privada es mejor que pública", de: "Private Gesundheitsversorgung ist besser als öffentliche", nl: "Particuliere zorgverlening is beter dan openbare" },
          { en: "Prevention is more expensive than treatment", es: "Prevención es más cara que tratamiento", de: "Prävention ist teurer als Behandlung", nl: "Preventie is duurder dan behandeling" }
        ],
        correct: 1,
        explanation: {
          en: "The inverse care law states that the availability of good medical care tends to vary inversely with the need for it in the population served - those who need healthcare most are least likely to receive it, often due to socioeconomic factors.",
          es: "La ley de atención inversa establece que la disponibilidad de buena atención médica tiende a variar inversamente con la necesidad de ella en la población servida - aquellos que más necesitan atención médica son menos propensos a recibirla, frecuentemente debido a factores socioeconómicos.",
          de: "Das inverse Versorgungsgesetz besagt, dass die Verfügbarkeit guter medizinischer Versorgung dazu neigt, umgekehrt mit dem Bedarf dafür in der versorgten Bevölkerung zu variieren - diejenigen, die Gesundheitsversorgung am meisten brauchen, erhalten sie am wenigsten, oft aufgrund sozioökonomischer Faktoren.",
          nl: "De omgekeerde zorgwet stelt dat de beschikbaarheid van goede medische zorg de neiging heeft omgekeerd te variëren met de behoefte eraan in de bediende bevolking - degenen die zorgverlening het meest nodig hebben zijn het minst waarschijnlijk deze te ontvangen, vaak vanwege socio-economische factoren."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/medicine', level8);
  }
})();
