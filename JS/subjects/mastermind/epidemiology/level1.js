// Epidemiology - Level 1: Advanced Disease Surveillance & Biostatistics
(function() {
  const level1 = {
    name: {
      en: "Advanced Disease Surveillance & Biostatistics",
      es: "Vigilancia Avanzada de Enfermedades y Bioestadísticas",
      de: "Fortgeschrittene Krankheitsüberwachung und Biostatistik",
      nl: "Geavanceerde Ziektebewaking en Biostatistiek"
    },
    questions: [
      {
        question: {
          en: "What is the key difference between incidence and prevalence in epidemiological studies?",
          es: "¿Cuál es la diferencia clave entre incidencia y prevalencia en estudios epidemiológicos?",
          de: "Was ist der Hauptunterschied zwischen Inzidenz und Prävalenz in epidemiologischen Studien?",
          nl: "Wat is het belangrijkste verschil tussen incidentie en prevalentie in epidemiologische studies?"
        },
        options: [
          { en: "Incidence measures new cases over time, prevalence measures total existing cases at a point", es: "La incidencia mide casos nuevos en el tiempo, la prevalencia mide casos totales existentes en un punto", de: "Inzidenz misst neue Fälle über Zeit, Prävalenz misst bestehende Gesamtfälle zu einem Zeitpunkt", nl: "Incidentie meet nieuwe gevallen over tijd, prevalentie meet totale bestaande gevallen op een moment" },
          { en: "Incidence is used for chronic diseases, prevalence for acute diseases", es: "La incidencia se usa para enfermedades crónicas, la prevalencia para enfermedades agudas", de: "Inzidenz wird für chronische Krankheiten verwendet, Prävalenz für akute Krankheiten", nl: "Incidentie wordt gebruikt voor chronische ziekten, prevalentie voor acute ziekten" },
          { en: "Incidence measures severity, prevalence measures frequency", es: "La incidencia mide gravedad, la prevalencia mide frecuencia", de: "Inzidenz misst Schweregrad, Prävalenz misst Häufigkeit", nl: "Incidentie meet ernst, prevalentie meet frequentie" },
          { en: "Incidence is population-based, prevalence is individual-based", es: "La incidencia es basada en población, la prevalencia es basada en individuos", de: "Inzidenz ist populationsbasiert, Prävalenz ist individuell basiert", nl: "Incidentie is populatie-gebaseerd, prevalentie is individueel-gebaseerd" }
        ],
        correct: 0,
        explanation: {
          en: "Incidence measures the rate of new cases developing in a population over a specific time period, while prevalence measures the total number of existing cases (both new and old) in a population at a specific point in time or period.",
          es: "La incidencia mide la tasa de casos nuevos que se desarrollan en una población durante un período específico, mientras que la prevalencia mide el número total de casos existentes en una población en un punto específico en el tiempo.",
          de: "Inzidenz misst die Rate neuer Fälle, die in einer Population über einen bestimmten Zeitraum auftreten, während Prävalenz die Gesamtzahl bestehender Fälle in einer Population zu einem bestimmten Zeitpunkt misst.",
          nl: "Incidentie meet het aantal nieuwe gevallen dat zich ontwikkelt in een populatie gedurende een specifieke tijdsperiode, terwijl prevalentie het totale aantal bestaande gevallen in een populatie op een specifiek tijdstip meet."
        }
      },
      {
        question: {
          en: "What does a relative risk (RR) of 2.5 indicate in a cohort study?",
          es: "¿Qué indica un riesgo relativo (RR) de 2.5 en un estudio de cohorte?",
          de: "Was zeigt ein relatives Risiko (RR) von 2,5 in einer Kohortenstudie an?",
          nl: "Wat duidt een relatief risico (RR) van 2,5 aan in een cohortstudie?"
        },
        options: [
          { en: "The exposed group has 2.5 times the risk of disease compared to the unexposed group", es: "El grupo expuesto tiene 2.5 veces el riesgo de enfermedad comparado con el grupo no expuesto", de: "Die exponierte Gruppe hat ein 2,5-mal höheres Krankheitsrisiko als die nicht exponierte Gruppe", nl: "De blootgestelde groep heeft 2,5 keer het risico op ziekte vergeleken met de niet-blootgestelde groep" },
          { en: "The disease occurs 2.5% more often in the exposed group", es: "La enfermedad ocurre 2.5% más a menudo en el grupo expuesto", de: "Die Krankheit tritt 2,5% häufiger in der exponierten Gruppe auf", nl: "De ziekte komt 2,5% vaker voor in de blootgestelde groep" },
          { en: "The exposed group has 250% higher absolute risk", es: "El grupo expuesto tiene 250% mayor riesgo absoluto", de: "Die exponierte Gruppe hat 250% höheres absolutes Risiko", nl: "De blootgestelde groep heeft 250% hoger absoluut risico" },
          { en: "The odds of exposure are 2.5 times higher in cases", es: "Las probabilidades de exposición son 2.5 veces mayores en los casos", de: "Die Wahrscheinlichkeit der Exposition ist 2,5-mal höher bei Fällen", nl: "De kans op blootstelling is 2,5 keer hoger bij gevallen" }
        ],
        correct: 0,
        explanation: {
          en: "Relative risk is the ratio of the risk in the exposed group to the risk in the unexposed group. An RR of 2.5 means the exposed group has 2.5 times (or 150% higher) risk of developing the disease compared to the unexposed group.",
          es: "El riesgo relativo es la razón del riesgo en el grupo expuesto al riesgo en el grupo no expuesto. Un RR de 2.5 significa que el grupo expuesto tiene 2.5 veces el riesgo de desarrollar la enfermedad comparado con el grupo no expuesto.",
          de: "Relatives Risiko ist das Verhältnis des Risikos in der exponierten Gruppe zum Risiko in der nicht exponierten Gruppe. Ein RR von 2,5 bedeutet, dass die exponierte Gruppe ein 2,5-mal höheres Risiko hat, die Krankheit zu entwickeln.",
          nl: "Relatief risico is de verhouding van het risico in de blootgestelde groep tot het risico in de niet-blootgestelde groep. Een RR van 2,5 betekent dat de blootgestelde groep 2,5 keer het risico heeft om de ziekte te ontwikkelen."
        }
      },
      {
        question: {
          en: "What is the Bradford Hill criteria used for in epidemiology?",
          es: "¿Para qué se usan los criterios de Bradford Hill en epidemiología?",
          de: "Wofür werden die Bradford Hill-Kriterien in der Epidemiologie verwendet?",
          nl: "Waarvoor worden de Bradford Hill criteria gebruikt in de epidemiologie?"
        },
        options: [
          { en: "Assessing causal relationships between exposure and disease", es: "Evaluar relaciones causales entre exposición y enfermedad", de: "Bewertung kausaler Beziehungen zwischen Exposition und Krankheit", nl: "Het beoordelen van causale relaties tussen blootstelling en ziekte" },
          { en: "Calculating sample sizes for epidemiological studies", es: "Calcular tamaños de muestra para estudios epidemiológicos", de: "Berechnung von Stichprobengrößen für epidemiologische Studien", nl: "Het berekenen van steekproefgroottes voor epidemiologische studies" },
          { en: "Determining the most appropriate study design", es: "Determinar el diseño de estudio más apropiado", de: "Bestimmung des am besten geeigneten Studiendesigns", nl: "Het bepalen van het meest geschikte studieontwerp" },
          { en: "Standardizing disease classification systems", es: "Estandarizar sistemas de clasificación de enfermedades", de: "Standardisierung von Krankheitsklassifikationssystemen", nl: "Het standaardiseren van ziekteclassificatiesystemen" }
        ],
        correct: 0,
        explanation: {
          en: "The Bradford Hill criteria are a set of nine guidelines used to assess whether an observed association between an exposure and disease is likely to be causal. These include strength, consistency, temporality, biological gradient, plausibility, and others.",
          es: "Los criterios de Bradford Hill son un conjunto de nueve directrices usadas para evaluar si una asociación observada entre una exposición y enfermedad es probable que sea causal, incluyendo fuerza, consistencia, temporalidad y gradiente biológico.",
          de: "Die Bradford Hill-Kriterien sind neun Richtlinien zur Bewertung, ob ein beobachteter Zusammenhang zwischen Exposition und Krankheit wahrscheinlich kausal ist, einschließlich Stärke, Konsistenz, Zeitlichkeit und biologischem Gradienten.",
          nl: "De Bradford Hill criteria zijn negen richtlijnen gebruikt om te beoordelen of een waargenomen verband tussen blootstelling en ziekte waarschijnlijk causaal is, inclusief sterkte, consistentie, temporaliteit en biologische gradiënt."
        }
      },
      {
        question: {
          en: "What is the concept of 'herd immunity' threshold?",
          es: "¿Qué es el concepto de umbral de 'inmunidad de rebaño'?",
          de: "Was ist das Konzept der 'Herdenimmunitäts'-Schwelle?",
          nl: "Wat is het concept van 'kudde-immuniteit' drempel?"
        },
        options: [
          { en: "The proportion of immune individuals needed to prevent sustained transmission", es: "La proporción de individuos inmunes necesaria para prevenir transmisión sostenida", de: "Der Anteil immuner Individuen, der zur Verhinderung anhaltender Übertragung benötigt wird", nl: "Het aandeel immune individuen nodig om aanhoudende transmissie te voorkomen" },
          { en: "The minimum vaccine efficacy required for population protection", es: "La eficacia mínima de vacuna requerida para protección poblacional", de: "Die minimale Impfstoffwirksamkeit, die für Populationsschutz erforderlich ist", nl: "De minimale vaccin effectiviteit vereist voor populatiebescherming" },
          { en: "The point where disease incidence starts declining", es: "El punto donde la incidencia de enfermedad comienza a declinar", de: "Der Punkt, wo die Krankheitsinzidenz zu sinken beginnt", nl: "Het punt waar ziekte-incidentie begint te dalen" },
          { en: "The critical population density for disease spread", es: "La densidad poblacional crítica para propagación de enfermedad", de: "Die kritische Populationsdichte für Krankheitsausbreitung", nl: "De kritische populatiedichtheid voor ziekteverspreiding" }
        ],
        correct: 0,
        explanation: {
          en: "Herd immunity threshold is the proportion of a population that must be immune to an infectious disease to prevent sustained transmission. It's calculated as 1-(1/R₀), where R₀ is the basic reproduction number. When this threshold is reached, even susceptible individuals are protected.",
          es: "El umbral de inmunidad de rebaño es la proporción de una población que debe ser inmune a una enfermedad infecciosa para prevenir transmisión sostenida. Se calcula como 1-(1/R₀), donde R₀ es el número básico de reproducción.",
          de: "Die Herdenimmunitätsschwelle ist der Anteil einer Population, der gegen eine Infektionskrankheit immun sein muss, um anhaltende Übertragung zu verhindern. Sie wird als 1-(1/R₀) berechnet, wobei R₀ die Basisreproduktionszahl ist.",
          nl: "Kudde-immuniteit drempel is het aandeel van een populatie dat immuun moet zijn tegen een infectieziekte om aanhoudende transmissie te voorkomen. Het wordt berekend als 1-(1/R₀), waarbij R₀ het basis reproductiegetal is."
        }
      },
      {
        question: {
          en: "What is selection bias in epidemiological studies?",
          es: "¿Qué es el sesgo de selección en estudios epidemiológicos?",
          de: "Was ist Selektionsbias in epidemiologischen Studien?",
          nl: "Wat is selectiebias in epidemiologische studies?"
        },
        options: [
          { en: "Systematic error arising from procedures used to select subjects or follow-up", es: "Error sistemático que surge de procedimientos usados para seleccionar sujetos o seguimiento", de: "Systematischer Fehler durch Verfahren zur Subjektauswahl oder Nachverfolgung", nl: "Systematische fout ontstaan uit procedures gebruikt om onderwerpen te selecteren of op te volgen" },
          { en: "Researcher preference for certain study outcomes", es: "Preferencia del investigador por ciertos resultados de estudio", de: "Forscherpräferenz für bestimmte Studienergebnisse", nl: "Onderzoeker voorkeur voor bepaalde studie-uitkomsten" },
          { en: "Random variation in subject characteristics", es: "Variación aleatoria en características de sujetos", de: "Zufällige Variation in Subjektcharakteristika", nl: "Willekeurige variatie in onderwerp kenmerken" },
          { en: "Errors in data collection instruments", es: "Errores en instrumentos de recolección de datos", de: "Fehler in Datensammungsinstrumenten", nl: "Fouten in data verzameling instrumenten" }
        ],
        correct: 0,
        explanation: {
          en: "Selection bias occurs when the way study participants are selected or retained results in a sample that is not representative of the target population. This can include participation bias, loss to follow-up bias, and survival bias.",
          es: "El sesgo de selección ocurre cuando la forma en que se seleccionan o retienen los participantes del estudio resulta en una muestra que no es representativa de la población objetivo, incluyendo sesgo de participación y pérdida de seguimiento.",
          de: "Selektionsbias tritt auf, wenn die Art der Auswahl oder Beibehaltung von Studienteilnehmern zu einer Stichprobe führt, die nicht repräsentativ für die Zielpopulation ist, einschließlich Teilnahme- und Nachverfolgungsbias.",
          nl: "Selectiebias treedt op wanneer de manier waarop studiedeelnemers worden geselecteerd of behouden resulteert in een steekproef die niet representatief is voor de doelpopulatie, inclusief deelname en verlies-tot-follow-up bias."
        }
      },
      {
        question: {
          en: "What is the difference between attributable risk and population attributable risk?",
          es: "¿Cuál es la diferencia entre riesgo atribuible y riesgo atribuible poblacional?",
          de: "Was ist der Unterschied zwischen attributablem Risiko und populationsattributablem Risiko?",
          nl: "Wat is het verschil tussen toerekenbaar risico en populatie toerekenbaar risico?"
        },
        options: [
          { en: "Attributable risk measures excess risk in exposed individuals; population attributable risk measures impact on entire population", es: "El riesgo atribuible mide riesgo excesivo en individuos expuestos; el riesgo atribuible poblacional mide impacto en toda la población", de: "Attributables Risiko misst Überschussrisiko in exponierten Individuen; populationsattributables Risiko misst Auswirkung auf gesamte Population", nl: "Toerekenbaar risico meet overtollig risico in blootgestelde individuen; populatie toerekenbaar risico meet impact op hele populatie" },
          { en: "Attributable risk is for cohort studies; population attributable risk is for case-control studies", es: "El riesgo atribuible es para estudios de cohorte; el riesgo atribuible poblacional es para estudios de casos y controles", de: "Attributables Risiko ist für Kohortenstudien; populationsattributables Risiko ist für Fall-Kontroll-Studien", nl: "Toerekenbaar risico is voor cohortstudies; populatie toerekenbaar risico is voor case-control studies" },
          { en: "Attributable risk measures genetic factors; population attributable risk measures environmental factors", es: "El riesgo atribuible mide factores genéticos; el riesgo atribuible poblacional mide factores ambientales", de: "Attributables Risiko misst genetische Faktoren; populationsattributables Risiko misst Umweltfaktoren", nl: "Toerekenbaar risico meet genetische factoren; populatie toerekenbaar risico meet omgevingsfactoren" },
          { en: "Attributable risk is absolute; population attributable risk is relative", es: "El riesgo atribuible es absoluto; el riesgo atribuible poblacional es relativo", de: "Attributables Risiko ist absolut; populationsattributables Risiko ist relativ", nl: "Toerekenbaar risico is absoluut; populatie toerekenbaar risico is relatief" }
        ],
        correct: 0,
        explanation: {
          en: "Attributable risk (AR) measures the excess risk in exposed individuals that can be attributed to the exposure. Population attributable risk (PAR) measures the proportion of disease incidence in the total population that can be attributed to the exposure, considering both the strength of association and prevalence of exposure.",
          es: "El riesgo atribuible mide el riesgo excesivo en individuos expuestos que puede atribuirse a la exposición. El riesgo atribuible poblacional mide la proporción de incidencia de enfermedad en la población total atribuible a la exposición.",
          de: "Attributables Risiko misst das Überschussrisiko in exponierten Individuen, das der Exposition zugeschrieben werden kann. Populationsattributables Risiko misst den Anteil der Krankheitsinzidenz in der Gesamtpopulation, der der Exposition zugeschrieben werden kann.",
          nl: "Toerekenbaar risico meet het overtollige risico in blootgestelde individuen dat kan worden toegeschreven aan de blootstelling. Populatie toerekenbaar risico meet het aandeel van ziekte-incidentie in de totale populatie dat kan worden toegeschreven aan de blootstelling."
        }
      },
      {
        question: {
          en: "What is confounding in epidemiological studies?",
          es: "¿Qué es la confusión en estudios epidemiológicos?",
          de: "Was ist Konfundierung in epidemiologischen Studien?",
          nl: "Wat is confounding in epidemiologische studies?"
        },
        options: [
          { en: "A third variable associated with both exposure and outcome that distorts the true relationship", es: "Una tercera variable asociada con exposición y resultado que distorsiona la verdadera relación", de: "Eine dritte Variable, die mit Exposition und Ergebnis assoziiert ist und die wahre Beziehung verzerrt", nl: "Een derde variabele geassocieerd met zowel blootstelling als uitkomst die de ware relatie verstoort" },
          { en: "Random error in measurement instruments", es: "Error aleatorio en instrumentos de medición", de: "Zufälliger Fehler in Messinstrumenten", nl: "Willekeurige fout in meetinstrumenten" },
          { en: "Difficulty in recruiting study participants", es: "Dificultad en reclutar participantes del estudio", de: "Schwierigkeit bei der Rekrutierung von Studienteilnehmern", nl: "Moeilijkheid bij het rekruteren van studiedeelnemers" },
          { en: "Inability to measure all relevant variables", es: "Incapacidad de medir todas las variables relevantes", de: "Unfähigkeit, alle relevanten Variablen zu messen", nl: "Onvermogen om alle relevante variabelen te meten" }
        ],
        correct: 0,
        explanation: {
          en: "Confounding occurs when a third variable (confounder) is associated with both the exposure and the outcome, and is not in the causal pathway. This can make it appear that there is an association between exposure and outcome when there isn't, or mask a true association.",
          es: "La confusión ocurre cuando una tercera variable está asociada tanto con la exposición como con el resultado, y no está en la vía causal. Esto puede hacer parecer que hay asociación entre exposición y resultado cuando no la hay.",
          de: "Konfundierung tritt auf, wenn eine dritte Variable sowohl mit der Exposition als auch mit dem Ergebnis assoziiert ist und nicht im kausalen Pfad liegt. Dies kann eine Assoziation vortäuschen oder eine echte Assoziation maskieren.",
          nl: "Confounding treedt op wanneer een derde variabele geassocieerd is met zowel de blootstelling als de uitkomst, en niet in het causale pad ligt. Dit kan een associatie doen lijken te bestaan waar die er niet is, of een echte associatie maskeren."
        }
      },
      {
        question: {
          en: "What is the basic reproduction number (R₀) in infectious disease epidemiology?",
          es: "¿Qué es el número básico de reproducción (R₀) en epidemiología de enfermedades infecciosas?",
          de: "Was ist die Basisreproduktionszahl (R₀) in der Epidemiologie von Infektionskrankheiten?",
          nl: "Wat is het basis reproductiegetal (R₀) in infectieziekte epidemiologie?"
        },
        options: [
          { en: "Average number of secondary infections caused by one infected individual in a completely susceptible population", es: "Número promedio de infecciones secundarias causadas por un individuo infectado en una población completamente susceptible", de: "Durchschnittliche Anzahl sekundärer Infektionen durch eine infizierte Person in einer vollständig anfälligen Population", nl: "Gemiddeld aantal secundaire infecties veroorzaakt door een geïnfecteerd individu in een volledig vatbare populatie" },
          { en: "The mutation rate of the pathogen per generation", es: "La tasa de mutación del patógeno por generación", de: "Die Mutationsrate des Erregers pro Generation", nl: "Het mutatiesnelheid van de ziekteverwekker per generatie" },
          { en: "The minimum infectious dose required for transmission", es: "La dosis infecciosa mínima requerida para transmisión", de: "Die minimale Infektionsdosis, die für Übertragung erforderlich ist", nl: "De minimale infectieuze dosis vereist voor transmissie" },
          { en: "The time between exposure and symptom onset", es: "El tiempo entre exposición e inicio de síntomas", de: "Die Zeit zwischen Exposition und Symptombeginn", nl: "De tijd tussen blootstelling en symptoombegin" }
        ],
        correct: 0,
        explanation: {
          en: "R₀ represents the average number of secondary infections that result from one infected individual in a completely susceptible population with no interventions. If R₀ > 1, the infection spreads; if R₀ < 1, it dies out. It depends on transmission probability, contact rate, and infectious period.",
          es: "R₀ representa el número promedio de infecciones secundarias que resultan de un individuo infectado en una población completamente susceptible sin intervenciones. Si R₀ > 1, la infección se propaga; si R₀ < 1, se extingue.",
          de: "R₀ repräsentiert die durchschnittliche Anzahl sekundärer Infektionen, die von einer infizierten Person in einer vollständig anfälligen Population ohne Interventionen resultieren. Wenn R₀ > 1, breitet sich die Infektion aus; wenn R₀ < 1, stirbt sie aus.",
          nl: "R₀ vertegenwoordigt het gemiddeld aantal secundaire infecties dat resulteert van een geïnfecteerd individu in een volledig vatbare populatie zonder interventies. Als R₀ > 1, verspreidt de infectie zich; als R₀ < 1, sterft het uit."
        }
      },
      {
        question: {
          en: "What is the difference between a cohort study and a case-control study?",
          es: "¿Cuál es la diferencia entre un estudio de cohorte y un estudio de casos y controles?",
          de: "Was ist der Unterschied zwischen einer Kohortenstudie und einer Fall-Kontroll-Studie?",
          nl: "Wat is het verschil tussen een cohortstudie en een case-control studie?"
        },
        options: [
          { en: "Cohort studies start with exposure and follow to outcome; case-control studies start with outcome and look back to exposure", es: "Los estudios de cohorte comienzan con exposición y siguen hasta el resultado; los estudios de casos y controles comienzan con resultado y miran hacia atrás a la exposición", de: "Kohortenstudien beginnen mit Exposition und folgen bis zum Ergebnis; Fall-Kontroll-Studien beginnen mit Ergebnis und schauen zurück zur Exposition", nl: "Cohortstudies beginnen met blootstelling en volgen tot uitkomst; case-control studies beginnen met uitkomst en kijken terug naar blootstelling" },
          { en: "Cohort studies are always prospective; case-control studies are always retrospective", es: "Los estudios de cohorte son siempre prospectivos; los estudios de casos y controles son siempre retrospectivos", de: "Kohortenstudien sind immer prospektiv; Fall-Kontroll-Studien sind immer retrospektiv", nl: "Cohortstudies zijn altijd prospectief; case-control studies zijn altijd retrospectief" },
          { en: "Cohort studies use random sampling; case-control studies use convenience sampling", es: "Los estudios de cohorte usan muestreo aleatorio; los estudios de casos y controles usan muestreo por conveniencia", de: "Kohortenstudien verwenden Zufallsstichproben; Fall-Kontroll-Studien verwenden Gelegenheitsstichproben", nl: "Cohortstudies gebruiken willekeurige steekproeven; case-control studies gebruiken gemakssteekproeven" },
          { en: "Cohort studies measure prevalence; case-control studies measure incidence", es: "Los estudios de cohorte miden prevalencia; los estudios de casos y controles miden incidencia", de: "Kohortenstudien messen Prävalenz; Fall-Kontroll-Studien messen Inzidenz", nl: "Cohortstudies meten prevalentie; case-control studies meten incidentie" }
        ],
        correct: 0,
        explanation: {
          en: "The fundamental difference is the direction of inquiry: cohort studies start with exposure status and follow subjects over time to see who develops the outcome, while case-control studies start with disease status and look backward to determine past exposure history.",
          es: "La diferencia fundamental es la dirección de investigación: los estudios de cohorte comienzan con estado de exposición y siguen sujetos en el tiempo para ver quién desarrolla el resultado, mientras que estudios de casos y controles comienzan con estado de enfermedad.",
          de: "Der grundlegende Unterschied ist die Untersuchungsrichtung: Kohortenstudien beginnen mit Expositionsstatus und folgen Subjekten über Zeit, um zu sehen, wer das Ergebnis entwickelt, während Fall-Kontroll-Studien mit Krankheitsstatus beginnen.",
          nl: "Het fundamentele verschil is de richting van onderzoek: cohortstudies beginnen met blootstellingsstatus en volgen onderwerpen over tijd om te zien wie de uitkomst ontwikkelt, terwijl case-control studies beginnen met ziektestatus."
        }
      },
      {
        question: {
          en: "What is information bias in epidemiological research?",
          es: "¿Qué es el sesgo de información en investigación epidemiológica?",
          de: "Was ist Informationsbias in epidemiologischer Forschung?",
          nl: "Wat is informatiebias in epidemiologisch onderzoek?"
        },
        options: [
          { en: "Systematic error in measurement or classification of exposure or outcome", es: "Error sistemático en medición o clasificación de exposición o resultado", de: "Systematischer Fehler in Messung oder Klassifikation von Exposition oder Ergebnis", nl: "Systematische fout in meting of classificatie van blootstelling of uitkomst" },
          { en: "Lack of sufficient information about study participants", es: "Falta de información suficiente sobre participantes del estudio", de: "Mangel an ausreichenden Informationen über Studienteilnehmer", nl: "Gebrek aan voldoende informatie over studiedeelnemers" },
          { en: "Incorrect statistical analysis methods", es: "Métodos de análisis estadístico incorrectos", de: "Falsche statistische Analysemethoden", nl: "Onjuiste statistische analysemethoden" },
          { en: "Failure to obtain informed consent", es: "Falla en obtener consentimiento informado", de: "Versäumnis, informierte Zustimmung zu erhalten", nl: "Falen om geïnformeerde toestemming te verkrijgen" }
        ],
        correct: 0,
        explanation: {
          en: "Information bias (also called measurement bias) occurs when there is systematic error in the way exposure or outcome is measured or classified. This includes recall bias, interviewer bias, instrument error, and misclassification bias.",
          es: "El sesgo de información ocurre cuando hay error sistemático en la forma en que se mide o clasifica la exposición o resultado. Incluye sesgo de recuerdo, sesgo del entrevistador, error de instrumento y sesgo de clasificación errónea.",
          de: "Informationsbias tritt auf, wenn systematische Fehler in der Art auftreten, wie Exposition oder Ergebnis gemessen oder klassifiziert werden. Dies umfasst Erinnerungsbias, Interviewerbias, Instrumentenfehler und Fehlklassifikationsbias.",
          nl: "Informatiebias treedt op wanneer er systematische fout is in de manier waarop blootstelling of uitkomst wordt gemeten of geclassificeerd. Dit omvat herinneringsbias, interviewerbias, instrumentfout en misclassificatiebias."
        }
      },
      {
        question: {
          en: "What is the purpose of standardization in epidemiological studies?",
          es: "¿Cuál es el propósito de la estandarización en estudios epidemiológicos?",
          de: "Was ist der Zweck der Standardisierung in epidemiologischen Studien?",
          nl: "Wat is het doel van standaardisatie in epidemiologische studies?"
        },
        options: [
          { en: "To adjust for differences in population characteristics when comparing disease rates", es: "Ajustar las diferencias en características poblacionales al comparar tasas de enfermedad", de: "Anpassung für Unterschiede in Populationscharakteristika beim Vergleich von Krankheitsraten", nl: "Om te corrigeren voor verschillen in populatiekenmerken bij het vergelijken van ziektecijfers" },
          { en: "To ensure all studies use the same measurement techniques", es: "Asegurar que todos los estudios usen las mismas técnicas de medición", de: "Sicherstellen, dass alle Studien die gleichen Messtechniken verwenden", nl: "Om ervoor te zorgen dat alle studies dezelfde meettechnieken gebruiken" },
          { en: "To create uniform diagnostic criteria across different hospitals", es: "Crear criterios de diagnóstico uniformes entre diferentes hospitales", de: "Einheitliche Diagnosekriterien in verschiedenen Krankenhäusern schaffen", nl: "Om uniforme diagnostische criteria te creëren in verschillende ziekenhuizen" },
          { en: "To eliminate all sources of bias in the study", es: "Eliminar todas las fuentes de sesgo en el estudio", de: "Alle Quellen von Bias in der Studie eliminieren", nl: "Om alle bronnen van bias in de studie te elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "Standardization allows fair comparison of disease rates between populations that differ in important characteristics like age, sex, or socioeconomic status. Direct standardization applies the age-specific rates to a standard population, while indirect standardization calculates expected cases based on standard rates.",
          es: "La estandarización permite comparación justa de tasas de enfermedad entre poblaciones que difieren en características importantes como edad, sexo o estatus socioeconómico. La estandarización directa aplica tasas específicas por edad a una población estándar.",
          de: "Standardisierung ermöglicht faire Vergleiche von Krankheitsraten zwischen Populationen, die sich in wichtigen Charakteristika wie Alter, Geschlecht oder sozioökonomischem Status unterscheiden. Direkte Standardisierung wendet altersspezifische Raten auf eine Standardpopulation an.",
          nl: "Standaardisatie staat eerlijke vergelijking toe van ziektecijfers tussen populaties die verschillen in belangrijke kenmerken zoals leeftijd, geslacht of sociaaleconomische status. Directe standaardisatie past leeftijdsspecifieke cijfers toe op een standaardpopulatie."
        }
      },
      {
        question: {
          en: "What is effect modification (interaction) in epidemiology?",
          es: "¿Qué es la modificación de efecto (interacción) en epidemiología?",
          de: "Was ist Effektmodifikation (Interaktion) in der Epidemiologie?",
          nl: "Wat is effect modificatie (interactie) in epidemiologie?"
        },
        options: [
          { en: "When the effect of an exposure on an outcome varies across levels of a third variable", es: "Cuando el efecto de una exposición en un resultado varía a través de niveles de una tercera variable", de: "Wenn der Effekt einer Exposition auf ein Ergebnis über Ebenen einer dritten Variable variiert", nl: "Wanneer het effect van een blootstelling op een uitkomst varieert over niveaus van een derde variabele" },
          { en: "When the exposure itself is modified by environmental factors", es: "Cuando la exposición misma es modificada por factores ambientales", de: "Wenn die Exposition selbst durch Umweltfaktoren modifiziert wird", nl: "Wanneer de blootstelling zelf wordt gewijzigd door omgevingsfactoren" },
          { en: "When the outcome measure is changed during the study", es: "Cuando la medida de resultado se cambia durante el estudio", de: "Wenn das Ergebnismaß während der Studie geändert wird", nl: "Wanneer de uitkomstmaat wordt veranderd tijdens de studie" },
          { en: "When statistical analysis methods alter the study results", es: "Cuando métodos de análisis estadístico alteran los resultados del estudio", de: "Wenn statistische Analysemethoden die Studienergebnisse verändern", nl: "Wanneer statistische analysemethoden de studieresultaten veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Effect modification occurs when the magnitude of the association between exposure and outcome differs depending on the level of a third variable (effect modifier). Unlike confounding, effect modification is a biological phenomenon that should be reported rather than controlled for.",
          es: "La modificación de efecto ocurre cuando la magnitud de la asociación entre exposición y resultado difiere dependiendo del nivel de una tercera variable. A diferencia de la confusión, la modificación de efecto es un fenómeno biológico que debe reportarse.",
          de: "Effektmodifikation tritt auf, wenn die Stärke der Assoziation zwischen Exposition und Ergebnis je nach Ebene einer dritten Variable unterschiedlich ist. Im Gegensatz zur Konfundierung ist Effektmodifikation ein biologisches Phänomen, das berichtet werden sollte.",
          nl: "Effect modificatie treedt op wanneer de grootte van de associatie tussen blootstelling en uitkomst verschilt afhankelijk van het niveau van een derde variabele. In tegenstelling tot confounding is effect modificatie een biologisch fenomeen dat gerapporteerd moet worden."
        }
      },
      {
        question: {
          en: "What is the epidemiological triad model?",
          es: "¿Qué es el modelo de tríada epidemiológica?",
          de: "Was ist das epidemiologische Triadenmodell?",
          nl: "Wat is het epidemiologische triade model?"
        },
        options: [
          { en: "Host, agent, and environment interact to cause disease", es: "Huésped, agente y ambiente interactúan para causar enfermedad", de: "Wirt, Erreger und Umwelt interagieren, um Krankheit zu verursachen", nl: "Gastheer, agent en omgeving interacteren om ziekte te veroorzaken" },
          { en: "Exposure, outcome, and confounders form the study design", es: "Exposición, resultado y confusores forman el diseño del estudio", de: "Exposition, Ergebnis und Störfaktoren bilden das Studiendesign", nl: "Blootstelling, uitkomst en confounders vormen het studieontwerp" },
          { en: "Person, place, and time are the three dimensions of epidemiology", es: "Persona, lugar y tiempo son las tres dimensiones de la epidemiología", de: "Person, Ort und Zeit sind die drei Dimensionen der Epidemiologie", nl: "Persoon, plaats en tijd zijn de drie dimensies van epidemiologie" },
          { en: "Primary, secondary, and tertiary prevention strategies", es: "Estrategias de prevención primaria, secundaria y terciaria", de: "Primäre, sekundäre und tertiäre Präventionsstrategien", nl: "Primaire, secundaire en tertiaire preventiestrategieën" }
        ],
        correct: 0,
        explanation: {
          en: "The epidemiological triad is a classic model describing how infectious diseases occur through the interaction of three components: the host (susceptible person), the agent (pathogen), and the environment (conditions that allow transmission). Disease occurs when these three factors interact favorably for transmission.",
          es: "La tríada epidemiológica es un modelo clásico que describe cómo ocurren las enfermedades infecciosas a través de la interacción de tres componentes: el huésped, el agente y el ambiente. La enfermedad ocurre cuando estos factores interactúan favorablemente.",
          de: "Die epidemiologische Triade ist ein klassisches Modell, das beschreibt, wie Infektionskrankheiten durch die Interaktion von drei Komponenten auftreten: Wirt, Erreger und Umwelt. Krankheit tritt auf, wenn diese Faktoren günstig für Übertragung interagieren.",
          nl: "De epidemiologische triade is een klassiek model dat beschrijft hoe infectieziekten optreden door de interactie van drie componenten: de gastheer, de agent en de omgeving. Ziekte treedt op wanneer deze factoren gunstig interacteren voor transmissie."
        }
      },
      {
        question: {
          en: "What is the difference between attack rate and incidence rate?",
          es: "¿Cuál es la diferencia entre tasa de ataque y tasa de incidencia?",
          de: "Was ist der Unterschied zwischen Befallsrate und Inzidenzrate?",
          nl: "Wat is het verschil tussen aanvalspercentage en incidentiecijfer?"
        },
        options: [
          { en: "Attack rate is for specific outbreaks in defined populations; incidence rate is for general populations over time", es: "La tasa de ataque es para brotes específicos en poblaciones definidas; la tasa de incidencia es para poblaciones generales en el tiempo", de: "Befallsrate ist für spezifische Ausbrüche in definierten Populationen; Inzidenzrate ist für allgemeine Populationen über Zeit", nl: "Aanvalspercentage is voor specifieke uitbraken in gedefinieerde populaties; incidentiecijfer is voor algemene populaties over tijd" },
          { en: "Attack rate measures severity; incidence rate measures frequency", es: "La tasa de ataque mide gravedad; la tasa de incidencia mide frecuencia", de: "Befallsrate misst Schweregrad; Inzidenzrate misst Häufigkeit", nl: "Aanvalspercentage meet ernst; incidentiecijfer meet frequentie" },
          { en: "Attack rate is retrospective; incidence rate is prospective", es: "La tasa de ataque es retrospectiva; la tasa de incidencia es prospectiva", de: "Befallsrate ist retrospektiv; Inzidenzrate ist prospektiv", nl: "Aanvalspercentage is retrospectief; incidentiecijfer is prospectief" },
          { en: "Attack rate includes prevalent cases; incidence rate only includes new cases", es: "La tasa de ataque incluye casos prevalentes; la tasa de incidencia solo incluye casos nuevos", de: "Befallsrate schließt prävalente Fälle ein; Inzidenzrate schließt nur neue Fälle ein", nl: "Aanvalspercentage omvat prevalente gevallen; incidentiecijfer omvat alleen nieuwe gevallen" }
        ],
        correct: 0,
        explanation: {
          en: "Attack rate is typically used for acute outbreaks in well-defined populations (like food poisoning at a dinner party) and is calculated as the number of cases divided by the population at risk. Incidence rate is used for general disease surveillance over longer periods and includes person-time in the denominator.",
          es: "La tasa de ataque se usa típicamente para brotes agudos en poblaciones bien definidas y se calcula como el número de casos dividido por la población en riesgo. La tasa de incidencia se usa para vigilancia general de enfermedades por períodos más largos.",
          de: "Befallsrate wird typischerweise für akute Ausbrüche in gut definierten Populationen verwendet und als Anzahl der Fälle geteilt durch die Risikopopulation berechnet. Inzidenzrate wird für allgemeine Krankheitsüberwachung über längere Zeiträume verwendet.",
          nl: "Aanvalspercentage wordt typisch gebruikt voor acute uitbraken in goed gedefinieerde populaties en wordt berekend als het aantal gevallen gedeeld door de populatie in risico. Incidentiecijfer wordt gebruikt voor algemene ziektetoezicht over langere perioden."
        }
      },
      {
        question: {
          en: "What is ecological fallacy in epidemiological research?",
          es: "¿Qué es la falacia ecológica en investigación epidemiológica?",
          de: "Was ist der ökologische Fehlschluss in epidemiologischer Forschung?",
          nl: "Wat is ecologische drogreden in epidemiologisch onderzoek?"
        },
        options: [
          { en: "Incorrectly inferring individual-level associations from group-level data", es: "Inferir incorrectamente asociaciones a nivel individual de datos a nivel grupal", de: "Fälschliche Inferenz individueller Assoziationen aus Gruppendaten", nl: "Onjuist afleiden van individuele associaties uit groepsgegevens" },
          { en: "Studying environmental factors instead of genetic factors", es: "Estudiar factores ambientales en lugar de factores genéticos", de: "Untersuchung von Umweltfaktoren anstatt genetischer Faktoren", nl: "Het bestuderen van omgevingsfactoren in plaats van genetische factoren" },
          { en: "Using inappropriate statistical tests for ecological data", es: "Usar pruebas estadísticas inapropiadas para datos ecológicos", de: "Verwendung ungeeigneter statistischer Tests für ökologische Daten", nl: "Het gebruik van ongepaste statistische tests voor ecologische gegevens" },
          { en: "Failing to consider ecosystem impacts on health", es: "Fallar en considerar impactos del ecosistema en la salud", de: "Versäumnis, Ökosystemauswirkungen auf die Gesundheit zu berücksichtigen", nl: "Falen om ecosysteem impacts op gezondheid te overwegen" }
        ],
        correct: 0,
        explanation: {
          en: "Ecological fallacy occurs when researchers incorrectly assume that associations found at the group or population level also exist at the individual level. For example, finding that countries with higher coffee consumption have lower heart disease rates doesn't mean individuals who drink more coffee have lower risk.",
          es: "La falacia ecológica ocurre cuando investigadores asumen incorrectamente que asociaciones encontradas a nivel grupal o poblacional también existen a nivel individual. Por ejemplo, encontrar que países con mayor consumo de café tienen menores tasas de enfermedad cardíaca.",
          de: "Ökologischer Fehlschluss tritt auf, wenn Forscher fälschlicherweise annehmen, dass Assoziationen auf Gruppen- oder Populationsebene auch auf individueller Ebene existieren. Zum Beispiel bedeutet höherer Kaffeekonsum auf Länderebene nicht individuell niedrigeres Risiko.",
          nl: "Ecologische drogreden treedt op wanneer onderzoekers ten onrechte aannemen dat associaties gevonden op groeps- of populatieniveau ook bestaan op individueel niveau. Bijvoorbeeld, landen met hoger koffieconsumptie hebben lagere hartziekte maar dit geldt niet per individu."
        }
      },
      {
        question: {
          en: "What is survival bias in epidemiological studies?",
          es: "¿Qué es el sesgo de supervivencia en estudios epidemiológicos?",
          de: "Was ist Überlebensbias in epidemiologischen Studien?",
          nl: "Wat is overlevingsbias in epidemiologische studies?"
        },
        options: [
          { en: "Including only subjects who survived long enough to be enrolled or remain in the study", es: "Incluir solo sujetos que sobrevivieron lo suficiente para ser inscritos o permanecer en el estudio", de: "Einschluss nur von Subjekten, die lange genug überlebten, um eingeschrieben zu werden oder in der Studie zu bleiben", nl: "Alleen onderwerpen opnemen die lang genoeg overleefden om ingeschreven te worden of in de studie te blijven" },
          { en: "Focusing only on subjects with the best prognosis", es: "Enfocarse solo en sujetos con el mejor pronóstico", de: "Fokussierung nur auf Subjekte mit der besten Prognose", nl: "Alleen focussen op onderwerpen met de beste prognose" },
          { en: "Excluding subjects who die during the follow-up period", es: "Excluir sujetos que mueren durante el período de seguimiento", de: "Ausschluss von Subjekten, die während der Nachverfolgungsperiode sterben", nl: "Onderwerpen uitsluiten die sterven tijdens de follow-up periode" },
          { en: "Overestimating survival rates in the general population", es: "Sobrestimar tasas de supervivencia en la población general", de: "Überschätzung von Überlebensraten in der Allgemeinbevölkerung", nl: "Overschatten van overlevingspercentages in de algemene populatie" }
        ],
        correct: 0,
        explanation: {
          en: "Survival bias occurs when a study systematically excludes subjects who died or were lost before enrollment or during early follow-up. This can lead to overestimation of survival or underestimation of the true effect of exposures that cause rapid death or disease progression.",
          es: "El sesgo de supervivencia ocurre cuando un estudio excluye sistemáticamente sujetos que murieron o se perdieron antes de la inscripción o durante seguimiento temprano. Esto puede llevar a sobreestimación de supervivencia o subestimación del verdadero efecto.",
          de: "Überlebensbias tritt auf, wenn eine Studie systematisch Subjekte ausschließt, die vor Einschreibung oder während früher Nachverfolgung starben oder verloren gingen. Dies kann zu Überschätzung des Überlebens oder Unterschätzung wahrer Effekte führen.",
          nl: "Overlevingsbias treedt op wanneer een studie systematisch onderwerpen uitsluit die stierven of verloren gingen voor inschrijving of tijdens vroege follow-up. Dit kan leiden tot overschatting van overleving of onderschatting van ware effecten."
        }
      },
      {
        question: {
          en: "What is the purpose of matching in case-control studies?",
          es: "¿Cuál es el propósito del emparejamiento en estudios de casos y controles?",
          de: "Was ist der Zweck des Matchings in Fall-Kontroll-Studien?",
          nl: "Wat is het doel van matchen in case-control studies?"
        },
        options: [
          { en: "To control for confounding by making cases and controls similar on matched variables", es: "Controlar la confusión haciendo que casos y controles sean similares en variables emparejadas", de: "Kontrolle der Konfundierung durch Ähnlichmachung von Fällen und Kontrollen bei gematchten Variablen", nl: "Om confounding te controleren door cases en controls vergelijkbaar te maken op gematchte variabelen" },
          { en: "To ensure equal sample sizes between cases and controls", es: "Asegurar tamaños de muestra iguales entre casos y controles", de: "Sicherstellung gleicher Stichprobengrößen zwischen Fällen und Kontrollen", nl: "Om gelijke steekproefgroottes tussen cases en controls te verzekeren" },
          { en: "To increase the statistical power of the study", es: "Aumentar el poder estadístico del estudio", de: "Erhöhung der statistischen Power der Studie", nl: "Om de statistische power van de studie te verhogen" },
          { en: "To reduce the cost of data collection", es: "Reducir el costo de recolección de datos", de: "Reduzierung der Kosten der Datensammlung", nl: "Om de kosten van gegevensverzameling te verlagen" }
        ],
        correct: 0,
        explanation: {
          en: "Matching in case-control studies is used to control for confounding by ensuring that cases and controls are similar with respect to potential confounding variables. This can improve study efficiency and control known confounders, but the matched variables cannot be studied as risk factors.",
          es: "El emparejamiento en estudios de casos y controles se usa para controlar la confusión asegurando que casos y controles sean similares respecto a variables confusoras potenciales. Esto puede mejorar eficiencia del estudio y controlar confusores conocidos.",
          de: "Matching in Fall-Kontroll-Studien wird verwendet, um Konfundierung zu kontrollieren, indem sichergestellt wird, dass Fälle und Kontrollen ähnlich sind bezüglich potenzieller Konfundierungsvariablen. Dies kann Studieneffizienz verbessern und bekannte Konfunder kontrollieren.",
          nl: "Matchen in case-control studies wordt gebruikt om confounding te controleren door ervoor te zorgen dat cases en controls vergelijkbaar zijn met betrekking tot potentiële confounding variabelen. Dit kan studieëfficiëntie verbeteren en bekende confounders controleren."
        }
      },
      {
        question: {
          en: "What is the healthy worker effect?",
          es: "¿Qué es el efecto del trabajador sano?",
          de: "Was ist der Healthy-Worker-Effekt?",
          nl: "Wat is het gezonde werker effect?"
        },
        options: [
          { en: "Working populations appear healthier than the general population due to selection and survivor bias", es: "Las poblaciones trabajadoras parecen más sanas que la población general debido a sesgo de selección y supervivencia", de: "Arbeitende Populationen erscheinen gesünder als die Allgemeinbevölkerung aufgrund von Selektions- und Überlebensbias", nl: "Werkende populaties lijken gezonder dan de algemene populatie door selectie en overlevingsbias" },
          { en: "Workers have better access to healthcare than unemployed individuals", es: "Los trabajadores tienen mejor acceso a atención médica que individuos desempleados", de: "Arbeiter haben besseren Zugang zu Gesundheitsversorgung als Arbeitslose", nl: "Werknemers hebben betere toegang tot gezondheidszorg dan werklozen" },
          { en: "Employment provides protective factors against disease", es: "El empleo proporciona factores protectores contra enfermedad", de: "Beschäftigung bietet Schutzfaktoren gegen Krankheit", nl: "Werk biedt beschermende factoren tegen ziekte" },
          { en: "Workers are more motivated to maintain their health", es: "Los trabajadores están más motivados para mantener su salud", de: "Arbeiter sind motivierter, ihre Gesundheit zu erhalten", nl: "Werknemers zijn meer gemotiveerd om hun gezondheid te behouden" }
        ],
        correct: 0,
        explanation: {
          en: "The healthy worker effect is a form of selection bias where working populations appear to have lower morbidity and mortality than the general population. This occurs because healthier individuals are more likely to be employed and remain employed, while those with health problems may leave the workforce.",
          es: "El efecto del trabajador sano es una forma de sesgo de selección donde poblaciones trabajadoras parecen tener menor morbilidad y mortalidad que la población general. Esto ocurre porque individuos más sanos tienen más probabilidad de estar empleados.",
          de: "Der Healthy-Worker-Effekt ist eine Form von Selektionsbias, wo arbeitende Populationen geringere Morbidität und Mortalität als die Allgemeinbevölkerung zu haben scheinen. Dies tritt auf, weil gesündere Individuen eher beschäftigt sind und bleiben.",
          nl: "Het gezonde werker effect is een vorm van selectiebias waarbij werkende populaties lagere morbiditeit en mortaliteit lijken te hebben dan de algemene populatie. Dit treedt op omdat gezondere individuen meer kans hebben om werk te hebben en te behouden."
        }
      },
      {
        question: {
          en: "What is recall bias in epidemiological studies?",
          es: "¿Qué es el sesgo de recuerdo en estudios epidemiológicos?",
          de: "Was ist Erinnerungsbias in epidemiologischen Studien?",
          nl: "Wat is herinneringsbias in epidemiologische studies?"
        },
        options: [
          { en: "Systematic difference in accuracy of recall between cases and controls about past exposures", es: "Diferencia sistemática en precisión de recuerdo entre casos y controles sobre exposiciones pasadas", de: "Systematischer Unterschied in Erinnerungsgenauigkeit zwischen Fällen und Kontrollen über vergangene Expositionen", nl: "Systematisch verschil in nauwkeurigheid van herinnering tussen cases en controls over eerdere blootstellingen" },
          { en: "Participants forgetting to attend follow-up appointments", es: "Participantes olvidando asistir a citas de seguimiento", de: "Teilnehmer vergessen Nachverfolgungstermine", nl: "Deelnemers vergeten follow-up afspraken bij te wonen" },
          { en: "Researchers forgetting to collect important data", es: "Investigadores olvidando recopilar datos importantes", de: "Forscher vergessen wichtige Daten zu sammeln", nl: "Onderzoekers vergeten belangrijke gegevens te verzamelen" },
          { en: "Loss of study records or documentation", es: "Pérdida de registros o documentación del estudio", de: "Verlust von Studienunterlagen oder Dokumentation", nl: "Verlies van studiegegevens of documentatie" }
        ],
        correct: 0,
        explanation: {
          en: "Recall bias occurs when cases and controls differ systematically in their ability or willingness to recall past exposures. Cases may be more likely to remember potential exposures as they search for explanations for their illness, while controls may not recall exposures as accurately.",
          es: "El sesgo de recuerdo ocurre cuando casos y controles difieren sistemáticamente en su habilidad o disposición para recordar exposiciones pasadas. Los casos pueden ser más propensos a recordar exposiciones potenciales mientras buscan explicaciones para su enfermedad.",
          de: "Erinnerungsbias tritt auf, wenn Fälle und Kontrollen systematisch in ihrer Fähigkeit oder Bereitschaft unterscheiden, sich an vergangene Expositionen zu erinnern. Fälle können eher potenzielle Expositionen erinnern, während sie nach Erklärungen suchen.",
          nl: "Herinneringsbias treedt op wanneer cases en controls systematisch verschillen in hun vermogen of bereidheid om eerdere blootstellingen te herinneren. Cases kunnen eerder geneigd zijn om potentiële blootstellingen te herinneren terwijl ze zoeken naar verklaringen."
        }
      },
      {
        question: {
          en: "What is the difference between crude and adjusted rates in epidemiology?",
          es: "¿Cuál es la diferencia entre tasas crudas y ajustadas en epidemiología?",
          de: "Was ist der Unterschied zwischen rohen und angepassten Raten in der Epidemiologie?",
          nl: "Wat is het verschil tussen ruwe en aangepaste cijfers in epidemiologie?"
        },
        options: [
          { en: "Crude rates are unadjusted; adjusted rates account for differences in population characteristics", es: "Las tasas crudas no están ajustadas; las tasas ajustadas consideran diferencias en características poblacionales", de: "Rohe Raten sind unangepasst; angepasste Raten berücksichtigen Unterschiede in Populationscharakteristika", nl: "Ruwe cijfers zijn niet aangepast; aangepaste cijfers houden rekening met verschillen in populatiekenmerken" },
          { en: "Crude rates include all cases; adjusted rates exclude certain cases", es: "Las tasas crudas incluyen todos los casos; las tasas ajustadas excluyen ciertos casos", de: "Rohe Raten schließen alle Fälle ein; angepasste Raten schließen bestimmte Fälle aus", nl: "Ruwe cijfers omvatten alle gevallen; aangepaste cijfers sluiten bepaalde gevallen uit" },
          { en: "Crude rates are for short-term studies; adjusted rates are for long-term studies", es: "Las tasas crudas son para estudios a corto plazo; las tasas ajustadas son para estudios a largo plazo", de: "Rohe Raten sind für kurzfristige Studien; angepasste Raten sind für langfristige Studien", nl: "Ruwe cijfers zijn voor korte-termijn studies; aangepaste cijfers zijn voor lange-termijn studies" },
          { en: "Crude rates use original data; adjusted rates use estimated data", es: "Las tasas crudas usan datos originales; las tasas ajustadas usan datos estimados", de: "Rohe Raten verwenden ursprüngliche Daten; angepasste Raten verwenden geschätzte Daten", nl: "Ruwe cijfers gebruiken originele gegevens; aangepaste cijfers gebruiken geschatte gegevens" }
        ],
        correct: 0,
        explanation: {
          en: "Crude rates are the actual observed rates in a population without any adjustment. Adjusted rates are modified to account for differences in population characteristics (like age, sex, or race) that might affect the comparison between populations, allowing for more valid comparisons.",
          es: "Las tasas crudas son las tasas observadas reales en una población sin ningún ajuste. Las tasas ajustadas son modificadas para considerar diferencias en características poblacionales que podrían afectar la comparación entre poblaciones.",
          de: "Rohe Raten sind die tatsächlich beobachteten Raten in einer Population ohne Anpassung. Angepasste Raten werden modifiziert, um Unterschiede in Populationscharakteristika zu berücksichtigen, die den Vergleich zwischen Populationen beeinflussen könnten.",
          nl: "Ruwe cijfers zijn de werkelijk waargenomen cijfers in een populatie zonder enige aanpassing. Aangepaste cijfers zijn gewijzigd om rekening te houden met verschillen in populatiekenmerken die vergelijking tussen populaties zouden kunnen beïnvloeden."
        }
      },
      {
        question: {
          en: "What is the latency period in epidemiology?",
          es: "¿Qué es el período de latencia en epidemiología?",
          de: "Was ist die Latenzzeit in der Epidemiologie?",
          nl: "Wat is de latentieperiode in epidemiologie?"
        },
        options: [
          { en: "Time between exposure and onset of detectable disease", es: "Tiempo entre exposición e inicio de enfermedad detectable", de: "Zeit zwischen Exposition und Beginn nachweisbarer Krankheit", nl: "Tijd tussen blootstelling en begin van detecteerbare ziekte" },
          { en: "Time between symptom onset and diagnosis", es: "Tiempo entre inicio de síntomas y diagnóstico", de: "Zeit zwischen Symptombeginn und Diagnose", nl: "Tijd tussen symptoombegin en diagnose" },
          { en: "Time between diagnosis and treatment", es: "Tiempo entre diagnóstico y tratamiento", de: "Zeit zwischen Diagnose und Behandlung", nl: "Tijd tussen diagnose en behandeling" },
          { en: "Time between exposure and symptom onset", es: "Tiempo entre exposición e inicio de síntomas", de: "Zeit zwischen Exposition und Symptombeginn", nl: "Tijd tussen blootstelling en symptoombegin" }
        ],
        correct: 0,
        explanation: {
          en: "The latency period is the time interval between initial exposure to a causal agent and the earliest detectable evidence of disease. This can range from minutes (for acute poisoning) to decades (for some cancers). Understanding latency is crucial for identifying disease causes and planning intervention timing.",
          es: "El período de latencia es el intervalo de tiempo entre exposición inicial a un agente causal y la evidencia más temprana detectable de enfermedad. Puede ir desde minutos hasta décadas. Entender la latencia es crucial para identificar causas de enfermedad.",
          de: "Die Latenzzeit ist das Zeitintervall zwischen initialer Exposition gegenüber einem kausalen Agens und dem frühesten nachweisbaren Nachweis von Krankheit. Sie kann von Minuten bis Jahrzehnten reichen. Das Verständnis der Latenz ist entscheidend für die Identifikation von Krankheitsursachen.",
          nl: "De latentieperiode is het tijdsinterval tussen initiële blootstelling aan een causaal agens en het vroegst detecteerbare bewijs van ziekte. Dit kan variëren van minuten tot decennia. Begrip van latentie is cruciaal voor het identificeren van ziekteoorzaken."
        }
      },
      {
        question: {
          en: "What is an ecological study in epidemiology?",
          es: "¿Qué es un estudio ecológico en epidemiología?",
          de: "Was ist eine ökologische Studie in der Epidemiologie?",
          nl: "Wat is een ecologische studie in epidemiologie?"
        },
        options: [
          { en: "A study that examines associations between exposures and outcomes at the population level", es: "Un estudio que examina asociaciones entre exposiciones y resultados a nivel poblacional", de: "Eine Studie, die Assoziationen zwischen Expositionen und Ergebnissen auf Populationsebene untersucht", nl: "Een studie die associaties tussen blootstellingen en uitkomsten op populatieniveau onderzoekt" },
          { en: "A study of environmental factors affecting human health", es: "Un estudio de factores ambientales que afectan la salud humana", de: "Eine Studie von Umweltfaktoren, die die menschliche Gesundheit beeinflussen", nl: "Een studie van omgevingsfactoren die de menselijke gezondheid beïnvloeden" },
          { en: "A study conducted in natural outdoor settings", es: "Un estudio realizado en entornos naturales al aire libre", de: "Eine Studie, die in natürlichen Außenumgebungen durchgeführt wird", nl: "Een studie uitgevoerd in natuurlijke buitenomgevingen" },
          { en: "A study examining ecosystem impacts on disease transmission", es: "Un estudio que examina impactos del ecosistema en transmisión de enfermedades", de: "Eine Studie, die Ökosystemauswirkungen auf Krankheitsübertragung untersucht", nl: "Een studie die ecosysteem impacts op ziektetransmissie onderzoekt" }
        ],
        correct: 0,
        explanation: {
          en: "An ecological study analyzes the relationship between exposures and outcomes using population-level or group-level data rather than individual-level data. For example, comparing cancer rates between countries with different dietary patterns. These studies are useful for generating hypotheses but susceptible to ecological fallacy.",
          es: "Un estudio ecológico analiza la relación entre exposiciones y resultados usando datos a nivel poblacional o grupal en lugar de datos a nivel individual. Por ejemplo, comparar tasas de cáncer entre países con diferentes patrones dietéticos.",
          de: "Eine ökologische Studie analysiert die Beziehung zwischen Expositionen und Ergebnissen unter Verwendung von Daten auf Populations- oder Gruppenebene anstatt individueller Daten. Zum Beispiel Vergleich von Krebsraten zwischen Ländern mit verschiedenen Ernährungsmustern.",
          nl: "Een ecologische studie analyseert de relatie tussen blootstellingen en uitkomsten met behulp van gegevens op populatie- of groepsniveau in plaats van individuele gegevens. Bijvoorbeeld, het vergelijken van kankerpercentages tussen landen met verschillende voedingspatronen."
        }
      },
      {
        question: {
          en: "What is the concept of lead-time bias in screening studies?",
          es: "¿Qué es el concepto de sesgo de tiempo de adelanto en estudios de tamizaje?",
          de: "Was ist das Konzept des Lead-Time-Bias in Screening-Studien?",
          nl: "Wat is het concept van lead-time bias in screeningsstudies?"
        },
        options: [
          { en: "Apparent improvement in survival due to earlier detection without actual change in disease course", es: "Mejora aparente en supervivencia debido a detección más temprana sin cambio real en el curso de la enfermedad", de: "Scheinbare Verbesserung des Überlebens durch frühere Erkennung ohne tatsächliche Änderung im Krankheitsverlauf", nl: "Schijnbare verbetering in overleving door eerdere detectie zonder werkelijke verandering in ziekteverloop" },
          { en: "Delay in implementing screening programs", es: "Retraso en implementar programas de tamizaje", de: "Verzögerung bei der Implementierung von Screening-Programmen", nl: "Vertraging in het implementeren van screeningsprogramma's" },
          { en: "Time taken to analyze screening test results", es: "Tiempo tomado para analizar resultados de pruebas de tamizaje", de: "Zeit zur Analyse von Screening-Testergebnissen", nl: "Tijd genomen om screeningtestresultaten te analyseren" },
          { en: "Participants starting screening earlier than recommended", es: "Participantes comenzando tamizaje más temprano de lo recomendado", de: "Teilnehmer beginnen Screening früher als empfohlen", nl: "Deelnemers beginnen screening eerder dan aanbevolen" }
        ],
        correct: 0,
        explanation: {
          en: "Lead-time bias occurs when screening detects disease earlier than it would have been diagnosed clinically, making it appear that survival is improved when in fact the time from diagnosis to death is simply longer because diagnosis occurred earlier. The natural course of the disease hasn't changed.",
          es: "El sesgo de tiempo de adelanto ocurre cuando el tamizaje detecta enfermedad más temprano de lo que habría sido diagnosticada clínicamente, haciendo parecer que la supervivencia mejora cuando en realidad el tiempo desde diagnóstico hasta muerte es simplemente más largo.",
          de: "Lead-Time-Bias tritt auf, wenn Screening Krankheit früher erkennt als sie klinisch diagnostiziert worden wäre, wodurch es scheint, dass das Überleben verbessert ist, obwohl tatsächlich die Zeit von Diagnose bis Tod einfach länger ist.",
          nl: "Lead-time bias treedt op wanneer screening ziekte eerder detecteert dan het klinisch zou zijn gediagnosticeerd, waardoor het lijkt alsof overleving verbeterd is terwijl in feite de tijd van diagnose tot dood gewoon langer is omdat diagnose eerder plaatsvond."
        }
      },
      {
        question: {
          en: "What is length-time bias in screening studies?",
          es: "¿Qué es el sesgo de tiempo de duración en estudios de tamizaje?",
          de: "Was ist Length-Time-Bias in Screening-Studien?",
          nl: "Wat is length-time bias in screeningsstudies?"
        },
        options: [
          { en: "Screening preferentially detects slower-progressing diseases that have better prognosis", es: "El tamizaje detecta preferentemente enfermedades de progresión lenta que tienen mejor pronóstico", de: "Screening erkennt vorzugsweise langsamer fortschreitende Krankheiten mit besserer Prognose", nl: "Screening detecteert bij voorkeur langzamer voortschrijdende ziekten die een betere prognose hebben" },
          { en: "Longer follow-up periods produce different results than shorter periods", es: "Períodos de seguimiento más largos producen resultados diferentes que períodos más cortos", de: "Längere Nachverfolgungsperioden erzeugen andere Ergebnisse als kürzere Perioden", nl: "Langere follow-up perioden produceren andere resultaten dan kortere perioden" },
          { en: "Time between screening tests affects detection rates", es: "El tiempo entre pruebas de tamizaje afecta tasas de detección", de: "Zeit zwischen Screening-Tests beeinflusst Erkennungsraten", nl: "Tijd tussen screeningtests beïnvloedt detectiepercentages" },
          { en: "Duration of the screening program influences participant compliance", es: "La duración del programa de tamizaje influye en cumplimiento de participantes", de: "Dauer des Screening-Programms beeinflusst Teilnehmer-Compliance", nl: "Duur van het screeningsprogramma beïnvloedt deelnemers compliance" }
        ],
        correct: 0,
        explanation: {
          en: "Length-time bias occurs because screening is more likely to detect slow-growing, less aggressive diseases that remain detectable for longer periods, while rapidly progressive diseases may be missed between screening intervals. This makes screening appear more effective than it actually is.",
          es: "El sesgo de tiempo de duración ocurre porque el tamizaje es más probable que detecte enfermedades de crecimiento lento y menos agresivas que permanecen detectables por períodos más largos, mientras que enfermedades de progresión rápida pueden perderse.",
          de: "Length-Time-Bias tritt auf, weil Screening eher langsam wachsende, weniger aggressive Krankheiten erkennt, die länger nachweisbar bleiben, während schnell fortschreitende Krankheiten zwischen Screening-Intervallen verpasst werden können.",
          nl: "Length-time bias treedt op omdat screening meer kans heeft om langzaam groeiende, minder agressieve ziekten te detecteren die langer detecteerbaar blijven, terwijl snel voortschrijdende ziekten kunnen worden gemist tussen screeningsintervallen."
        }
      },
      {
        question: {
          en: "What is the person-time concept in epidemiology?",
          es: "¿Qué es el concepto de persona-tiempo en epidemiología?",
          de: "Was ist das Personenzeit-Konzept in der Epidemiologie?",
          nl: "Wat is het persoon-tijd concept in epidemiologie?"
        },
        options: [
          { en: "A measure that accounts for both the number of people and the time each person is observed", es: "Una medida que considera tanto el número de personas como el tiempo que cada persona es observada", de: "Ein Maß, das sowohl die Anzahl der Personen als auch die Zeit berücksichtigt, die jede Person beobachtet wird", nl: "Een maat die rekening houdt met zowel het aantal mensen als de tijd dat elke persoon wordt geobserveerd" },
          { en: "The time each individual spends in the study", es: "El tiempo que cada individuo pasa en el estudio", de: "Die Zeit, die jede Einzelperson in der Studie verbringt", nl: "De tijd die elk individu in de studie doorbrengt" },
          { en: "The chronological age of study participants", es: "La edad cronológica de participantes del estudio", de: "Das chronologische Alter der Studienteilnehmer", nl: "De chronologische leeftijd van studiedeelnemers" },
          { en: "The duration of disease development", es: "La duración del desarrollo de enfermedad", de: "Die Dauer der Krankheitsentwicklung", nl: "De duur van ziekteontwikkeling" }
        ],
        correct: 0,
        explanation: {
          en: "Person-time is the sum of individual time periods during which people are at risk and under observation. It's used as the denominator in incidence rate calculations, allowing for different observation periods among study participants. For example, if 100 people are followed for an average of 2 years, the person-time is 200 person-years.",
          es: "Persona-tiempo es la suma de períodos de tiempo individuales durante los cuales las personas están en riesgo y bajo observación. Se usa como denominador en cálculos de tasa de incidencia, permitiendo diferentes períodos de observación entre participantes.",
          de: "Personenzeit ist die Summe individueller Zeitperioden, während derer Menschen gefährdet und unter Beobachtung sind. Sie wird als Nenner in Inzidenzraten-Berechnungen verwendet und erlaubt verschiedene Beobachtungsperioden unter Studienteilnehmern.",
          nl: "Persoon-tijd is de som van individuele tijdsperioden waarin mensen risico lopen en onder observatie staan. Het wordt gebruikt als noemer in incidentiecijfer berekeningen, waardoor verschillende observatieperioden tussen studiedeelnemers mogelijk zijn."
        }
      },
      {
        question: {
          en: "What is the difference between analytic and descriptive epidemiology?",
          es: "¿Cuál es la diferencia entre epidemiología analítica y descriptiva?",
          de: "Was ist der Unterschied zwischen analytischer und deskriptiver Epidemiologie?",
          nl: "Wat is het verschil tussen analytische en beschrijvende epidemiologie?"
        },
        options: [
          { en: "Descriptive epidemiology describes disease patterns; analytic epidemiology tests hypotheses about disease causes", es: "La epidemiología descriptiva describe patrones de enfermedad; la epidemiología analítica prueba hipótesis sobre causas de enfermedad", de: "Deskriptive Epidemiologie beschreibt Krankheitsmuster; analytische Epidemiologie testet Hypothesen über Krankheitsursachen", nl: "Beschrijvende epidemiologie beschrijft ziektepatronen; analytische epidemiologie test hypotheses over ziekteoorzaken" },
          { en: "Descriptive epidemiology uses qualitative data; analytic epidemiology uses quantitative data", es: "La epidemiología descriptiva usa datos cualitativos; la epidemiología analítica usa datos cuantitativos", de: "Deskriptive Epidemiologie verwendet qualitative Daten; analytische Epidemiologie verwendet quantitative Daten", nl: "Beschrijvende epidemiologie gebruikt kwalitatieve gegevens; analytische epidemiologie gebruikt kwantitatieve gegevens" },
          { en: "Descriptive epidemiology studies individuals; analytic epidemiology studies populations", es: "La epidemiología descriptiva estudia individuos; la epidemiología analítica estudia poblaciones", de: "Deskriptive Epidemiologie studiert Individuen; analytische Epidemiologie studiert Populationen", nl: "Beschrijvende epidemiologie bestudeert individuen; analytische epidemiologie bestudeert populaties" },
          { en: "Descriptive epidemiology is retrospective; analytic epidemiology is prospective", es: "La epidemiología descriptiva es retrospectiva; la epidemiología analítica es prospectiva", de: "Deskriptive Epidemiologie ist retrospektiv; analytische Epidemiologie ist prospektiv", nl: "Beschrijvende epidemiologie is retrospectief; analytische epidemiologie is prospectief" }
        ],
        correct: 0,
        explanation: {
          en: "Descriptive epidemiology characterizes disease occurrence by person, place, and time to identify patterns and generate hypotheses. Analytic epidemiology tests specific hypotheses about the relationship between exposures and health outcomes using study designs like cohort and case-control studies.",
          es: "La epidemiología descriptiva caracteriza la ocurrencia de enfermedad por persona, lugar y tiempo para identificar patrones y generar hipótesis. La epidemiología analítica prueba hipótesis específicas sobre la relación entre exposiciones y resultados de salud.",
          de: "Deskriptive Epidemiologie charakterisiert Krankheitsauftreten nach Person, Ort und Zeit, um Muster zu identifizieren und Hypothesen zu generieren. Analytische Epidemiologie testet spezifische Hypothesen über Beziehungen zwischen Expositionen und Gesundheitsergebnissen.",
          nl: "Beschrijvende epidemiologie karakteriseert ziekte voorkomen naar persoon, plaats en tijd om patronen te identificeren en hypotheses te genereren. Analytische epidemiologie test specifieke hypotheses over de relatie tussen blootstellingen en gezondheidsuitkomsten."
        }
      },
      {
        question: {
          en: "What is publication bias in epidemiological research?",
          es: "¿Qué es el sesgo de publicación en investigación epidemiológica?",
          de: "Was ist Publikationsbias in epidemiologischer Forschung?",
          nl: "Wat is publicatiebias in epidemiologisch onderzoek?"
        },
        options: [
          { en: "Tendency for studies with significant or positive results to be published more often than negative studies", es: "Tendencia a que estudios con resultados significativos o positivos se publiquen más a menudo que estudios negativos", de: "Tendenz, dass Studien mit signifikanten oder positiven Ergebnissen häufiger veröffentlicht werden als negative Studien", nl: "Neiging van studies met significante of positieve resultaten om vaker gepubliceerd te worden dan negatieve studies" },
          { en: "Bias introduced by the choice of journal for publication", es: "Sesgo introducido por la elección de revista para publicación", de: "Bias durch die Wahl der Zeitschrift für Veröffentlichung", nl: "Bias geïntroduceerd door de keuze van tijdschrift voor publicatie" },
          { en: "Errors made during the publication process", es: "Errores hechos durante el proceso de publicación", de: "Fehler während des Veröffentlichungsprozesses", nl: "Fouten gemaakt tijdens het publicatieproces" },
          { en: "Studies published before peer review is completed", es: "Estudios publicados antes de que se complete la revisión por pares", de: "Studien, die vor Abschluss der Peer-Review veröffentlicht werden", nl: "Studies gepubliceerd voordat peer review is voltooid" }
        ],
        correct: 0,
        explanation: {
          en: "Publication bias occurs when studies with statistically significant, positive, or novel findings are more likely to be submitted for publication and accepted by journals than studies with negative or non-significant results. This can lead to overestimation of effects in meta-analyses and systematic reviews.",
          es: "El sesgo de publicación ocurre cuando estudios con hallazgos estadísticamente significativos, positivos o novedosos tienen más probabilidad de ser enviados para publicación y aceptados por revistas que estudios con resultados negativos o no significativos.",
          de: "Publikationsbias tritt auf, wenn Studien mit statistisch signifikanten, positiven oder neuartigen Befunden eher zur Veröffentlichung eingereicht und von Zeitschriften akzeptiert werden als Studien mit negativen oder nicht-signifikanten Ergebnissen.",
          nl: "Publicatiebias treedt op wanneer studies met statistisch significante, positieve of nieuwe bevindingen meer kans hebben om te worden ingediend voor publicatie en geaccepteerd door tijdschriften dan studies met negatieve of niet-significante resultaten."
        }
      },
      {
        question: {
          en: "What is the intention-to-treat principle in epidemiological analysis?",
          es: "¿Qué es el principio de intención de tratar en análisis epidemiológico?",
          de: "Was ist das Intention-to-Treat-Prinzip in epidemiologischer Analyse?",
          nl: "Wat is het intention-to-treat principe in epidemiologische analyse?"
        },
        options: [
          { en: "Analyzing participants according to their original group assignment regardless of compliance", es: "Analizar participantes según su asignación de grupo original independientemente del cumplimiento", de: "Analyse von Teilnehmern entsprechend ihrer ursprünglichen Gruppenzuteilung unabhängig von der Compliance", nl: "Deelnemers analyseren volgens hun oorspronkelijke groepstoewijzing ongeacht compliance" },
          { en: "Including only participants who completed the study protocol", es: "Incluir solo participantes que completaron el protocolo del estudio", de: "Einschluss nur von Teilnehmern, die das Studienprotokoll abgeschlossen haben", nl: "Alleen deelnemers opnemen die het studieprotocol hebben voltooid" },
          { en: "Analyzing participants based on the treatment they actually received", es: "Analizar participantes basándose en el tratamiento que realmente recibieron", de: "Analyse von Teilnehmern basierend auf der Behandlung, die sie tatsächlich erhielten", nl: "Deelnemers analyseren gebaseerd op de behandeling die ze daadwerkelijk ontvingen" },
          { en: "Excluding participants who experienced adverse events", es: "Excluir participantes que experimentaron eventos adversos", de: "Ausschluss von Teilnehmern, die unerwünschte Ereignisse erlebten", nl: "Deelnemers uitsluiten die bijwerkingen ervoeren" }
        ],
        correct: 0,
        explanation: {
          en: "The intention-to-treat principle means analyzing study participants according to the group they were originally assigned to, regardless of whether they actually received the assigned treatment or complied with the protocol. This preserves randomization and provides a more realistic estimate of treatment effectiveness in real-world settings.",
          es: "El principio de intención de tratar significa analizar participantes del estudio según el grupo al que fueron originalmente asignados, independientemente de si realmente recibieron el tratamiento asignado o cumplieron con el protocolo.",
          de: "Das Intention-to-Treat-Prinzip bedeutet, Studienteilnehmer entsprechend der Gruppe zu analysieren, der sie ursprünglich zugeordnet wurden, unabhängig davon, ob sie tatsächlich die zugewiesene Behandlung erhielten oder das Protokoll befolgten.",
          nl: "Het intention-to-treat principe betekent studiedeelnemers analyseren volgens de groep waaraan ze oorspronkelijk werden toegewezen, ongeacht of ze daadwerkelijk de toegewezen behandeling ontvingen of het protocol volgden."
        }
      },
      {
        question: {
          en: "What is the difference between Type I and Type II errors in epidemiological studies?",
          es: "¿Cuál es la diferencia entre errores Tipo I y Tipo II en estudios epidemiológicos?",
          de: "Was ist der Unterschied zwischen Typ-I- und Typ-II-Fehlern in epidemiologischen Studien?",
          nl: "Wat is het verschil tussen Type I en Type II fouten in epidemiologische studies?"
        },
        options: [
          { en: "Type I: falsely rejecting a true null hypothesis; Type II: falsely accepting a false null hypothesis", es: "Tipo I: rechazar falsamente una hipótesis nula verdadera; Tipo II: aceptar falsamente una hipótesis nula falsa", de: "Typ I: fälschliche Ablehnung einer wahren Nullhypothese; Typ II: fälschliche Annahme einer falschen Nullhypothese", nl: "Type I: ten onrechte verwerpen van een ware nulhypothese; Type II: ten onrechte accepteren van een valse nulhypothese" },
          { en: "Type I: selection bias; Type II: information bias", es: "Tipo I: sesgo de selección; Tipo II: sesgo de información", de: "Typ I: Selektionsbias; Typ II: Informationsbias", nl: "Type I: selectiebias; Type II: informatiebias" },
          { en: "Type I: confounding; Type II: effect modification", es: "Tipo I: confusión; Tipo II: modificación de efecto", de: "Typ I: Konfundierung; Typ II: Effektmodifikation", nl: "Type I: confounding; Type II: effect modificatie" },
          { en: "Type I: random error; Type II: systematic error", es: "Tipo I: error aleatorio; Tipo II: error sistemático", de: "Typ I: Zufallsfehler; Typ II: systematischer Fehler", nl: "Type I: willekeurige fout; Type II: systematische fout" }
        ],
        correct: 0,
        explanation: {
          en: "Type I error (α) is the probability of rejecting a true null hypothesis (finding an association when none exists - false positive). Type II error (β) is the probability of accepting a false null hypothesis (missing a true association - false negative). Statistical power = 1-β.",
          es: "El error Tipo I es la probabilidad de rechazar una hipótesis nula verdadera (encontrar una asociación cuando no existe). El error Tipo II es la probabilidad de aceptar una hipótesis nula falsa (perder una asociación verdadera).",
          de: "Typ-I-Fehler ist die Wahrscheinlichkeit, eine wahre Nullhypothese abzulehnen (eine Assoziation finden, wo keine existiert). Typ-II-Fehler ist die Wahrscheinlichkeit, eine falsche Nullhypothese anzunehmen (eine wahre Assoziation übersehen).",
          nl: "Type I fout is de waarschijnlijkheid van het verwerpen van een ware nulhypothese (een associatie vinden waar er geen is). Type II fout is de waarschijnlijkheid van het accepteren van een valse nulhypothese (een ware associatie missen)."
        }
      },
      {
        question: {
          en: "What is the difference between surveillance and monitoring in public health?",
          es: "¿Cuál es la diferencia entre vigilancia y monitoreo en salud pública?",
          de: "Was ist der Unterschied zwischen Überwachung und Monitoring im öffentlichen Gesundheitswesen?",
          nl: "Wat is het verschil tussen surveillance en monitoring in de volksgezondheid?"
        },
        options: [
          { en: "Surveillance is ongoing systematic collection for public health action, monitoring tracks progress toward goals", es: "La vigilancia es recolección sistemática continua para acción de salud pública, el monitoreo rastrea progreso hacia objetivos", de: "Überwachung ist kontinuierliche systematische Sammlung für öffentliche Gesundheitsmaßnahmen, Monitoring verfolgt Fortschritte zu Zielen", nl: "Surveillance is doorlopende systematische verzameling voor volksgezondheidsactie, monitoring volgt voortgang naar doelen" },
          { en: "Surveillance is short-term, monitoring is long-term", es: "La vigilancia es a corto plazo, el monitoreo es a largo plazo", de: "Überwachung ist kurzfristig, Monitoring ist langfristig", nl: "Surveillance is korte termijn, monitoring is lange termijn" },
          { en: "They are essentially the same concept", es: "Son esencialmente el mismo concepto", de: "Sie sind im Wesentlichen das gleiche Konzept", nl: "Ze zijn in wezen hetzelfde concept" },
          { en: "Surveillance is for infectious diseases, monitoring is for chronic diseases", es: "La vigilancia es para enfermedades infecciosas, el monitoreo es para enfermedades crónicas", de: "Überwachung ist für Infektionskrankheiten, Monitoring für chronische Krankheiten", nl: "Surveillance is voor infectieziekten, monitoring is voor chronische ziekten" }
        ],
        correct: 0,
        explanation: {
          en: "Surveillance is the ongoing systematic collection, analysis, and interpretation of health data for planning, implementing, and evaluating public health practice. Monitoring specifically tracks progress toward achieving predetermined goals and targets, often using surveillance data as input.",
          es: "La vigilancia es la recolección, análisis e interpretación sistemática continua de datos de salud para planificar, implementar y evaluar la práctica de salud pública. El monitoreo específicamente rastrea el progreso hacia el logro de objetivos y metas predeterminados, a menudo usando datos de vigilancia como entrada.",
          de: "Überwachung ist die kontinuierliche systematische Sammlung, Analyse und Interpretation von Gesundheitsdaten zur Planung, Umsetzung und Bewertung öffentlicher Gesundheitspraktiken. Monitoring verfolgt spezifisch den Fortschritt zum Erreichen vorbestimmter Ziele und Vorgaben, oft unter Verwendung von Überwachungsdaten als Input.",
          nl: "Surveillance is de doorlopende systematische verzameling, analyse en interpretatie van gezondheidsdata voor het plannen, implementeren en evalueren van volksgezondheidsaanpak. Monitoring volgt specifiek de voortgang naar het bereiken van vooraf bepaalde doelen en targets, vaak met surveillance data als input."
        }
      },
      {
        question: {
          en: "What is the attributable risk (AR) and what does it measure?",
          es: "¿Qué es el riesgo atribuible (AR) y qué mide?",
          de: "Was ist das zurechenbare Risiko (AR) und was misst es?",
          nl: "Wat is het toeschrijfbare risico (AR) en wat meet het?"
        },
        options: [
          { en: "The incidence of disease among exposed minus incidence among unexposed; measures excess risk due to exposure", es: "La incidencia de enfermedad entre expuestos menos incidencia entre no expuestos; mide riesgo excesivo debido a exposición", de: "Die Krankheitsinzidenz bei Exponierten minus Inzidenz bei Nicht-Exponierten; misst Überschussrisiko aufgrund von Exposition", nl: "De incidentie van ziekte onder blootgestelden minus incidentie onder niet-blootgestelden; meet overtollig risico door blootstelling" },
          { en: "The ratio of incidence in exposed to incidence in unexposed", es: "La razón de incidencia en expuestos a incidencia en no expuestos", de: "Das Verhältnis der Inzidenz bei Exponierten zur Inzidenz bei Nicht-Exponierten", nl: "De verhouding van incidentie bij blootgestelden tot incidentie bij niet-blootgestelden" },
          { en: "The proportion of cases that can be attributed to the exposure", es: "La proporción de casos que pueden atribuirse a la exposición", de: "Der Anteil der Fälle, der der Exposition zugeschrieben werden kann", nl: "Het aandeel van gevallen dat toegeschreven kan worden aan de blootstelling" },
          { en: "The odds of exposure among cases versus controls", es: "Las probabilidades de exposición entre casos versus controles", de: "Die Odds der Exposition bei Fällen versus Kontrollen", nl: "De kansen op blootstelling bij gevallen versus controles" }
        ],
        correct: 0,
        explanation: {
          en: "Attributable risk (AR) is calculated as the incidence rate in the exposed group minus the incidence rate in the unexposed group (Ie - Iu). It represents the excess incidence of disease that can be attributed to the exposure, providing a measure of the absolute impact of the risk factor.",
          es: "El riesgo atribuible (AR) se calcula como la tasa de incidencia en el grupo expuesto menos la tasa de incidencia en el grupo no expuesto (Ie - Iu). Representa la incidencia excesiva de enfermedad que puede atribuirse a la exposición, proporcionando una medida del impacto absoluto del factor de riesgo.",
          de: "Das zurechenbare Risiko (AR) wird als Inzidenzrate in der exponierten Gruppe minus Inzidenzrate in der nicht-exponierten Gruppe (Ie - Iu) berechnet. Es repräsentiert die überschüssige Krankheitsinzidenz, die der Exposition zugeschrieben werden kann, und bietet ein Maß für die absolute Auswirkung des Risikofaktors.",
          nl: "Toeschrijfbaar risico (AR) wordt berekend als de incidentiegraad in de blootgestelde groep minus de incidentiegraad in de niet-blootgestelde groep (Ie - Iu). Het vertegenwoordigt de overtollige incidentie van ziekte die toegeschreven kan worden aan de blootstelling, wat een maat geeft voor de absolute impact van de risicofactor."
        }
      },
      {
        question: {
          en: "What is a case-crossover study design and when is it most appropriate?",
          es: "¿Qué es un diseño de estudio de caso-cruzado y cuándo es más apropiado?",
          de: "Was ist ein Fall-Crossover-Studiendesign und wann ist es am geeignetsten?",
          nl: "Wat is een case-crossover studie ontwerp en wanneer is het meest geschikt?"
        },
        options: [
          { en: "Each case serves as their own control at different time periods; ideal for acute effects of intermittent exposures", es: "Cada caso sirve como su propio control en diferentes períodos de tiempo; ideal para efectos agudos de exposiciones intermitentes", de: "Jeder Fall dient als seine eigene Kontrolle zu verschiedenen Zeitperioden; ideal für akute Effekte intermittierender Expositionen", nl: "Elke case dient als hun eigen controle op verschillende tijdsperioden; ideaal voor acute effecten van intermitterende blootstellingen" },
          { en: "Cases are matched with controls from the same family", es: "Los casos se emparejan con controles de la misma familia", de: "Fälle werden mit Kontrollen aus derselben Familie gematcht", nl: "Cases worden gematcht met controles uit dezelfde familie" },
          { en: "The same individuals are studied across multiple diseases", es: "Los mismos individuos se estudian a través de múltiples enfermedades", de: "Dieselben Personen werden über mehrere Krankheiten hinweg untersucht", nl: "Dezelfde individuen worden bestudeerd over meerdere ziekten" },
          { en: "Cases switch between treatment and control groups", es: "Los casos alternan entre grupos de tratamiento y control", de: "Fälle wechseln zwischen Behandlungs- und Kontrollgruppen", nl: "Cases wisselen tussen behandelings- en controlegroepen" }
        ],
        correct: 0,
        explanation: {
          en: "A case-crossover study compares each subject's exposure during a hazard period (just before disease onset) with their exposure during control periods. This design is particularly useful for studying acute effects of intermittent exposures where the onset is well-defined, as it controls for stable confounders within individuals.",
          es: "Un estudio de caso-cruzado compara la exposición de cada sujeto durante un período de peligro (justo antes del inicio de la enfermedad) con su exposición durante períodos de control. Este diseño es particularmente útil para estudiar efectos agudos de exposiciones intermitentes donde el inicio está bien definido, ya que controla factores de confusión estables dentro de individuos.",
          de: "Eine Fall-Crossover-Studie vergleicht die Exposition jedes Subjekts während einer Gefahrenperiode (kurz vor Krankheitsbeginn) mit ihrer Exposition während Kontrollperioden. Dieses Design ist besonders nützlich für die Untersuchung akuter Effekte intermittierender Expositionen, bei denen der Beginn gut definiert ist, da es für stabile Störfaktoren innerhalb von Individuen kontrolliert.",
          nl: "Een case-crossover studie vergelijkt de blootstelling van elk subject tijdens een gevaarperiode (net voor ziekte onset) met hun blootstelling tijdens controle perioden. Dit ontwerp is bijzonder nuttig voor het bestuderen van acute effecten van intermitterende blootstellingen waar de onset goed gedefinieerd is, omdat het controleert voor stabiele confounders binnen individuen."
        }
      },
      {
        question: {
          en: "What is the difference between direct and indirect age standardization?",
          es: "¿Cuál es la diferencia entre estandarización de edad directa e indirecta?",
          de: "Was ist der Unterschied zwischen direkter und indirekter Altersstandardisierung?",
          nl: "Wat is het verschil tussen directe en indirecte leeftijdsstandardisatie?"
        },
        options: [
          { en: "Direct uses a standard population's age structure; indirect uses a standard population's rates", es: "Directa usa la estructura de edad de una población estándar; indirecta usa las tasas de una población estándar", de: "Direkte verwendet die Altersstruktur einer Standardpopulation; indirekte verwendet die Raten einer Standardpopulation", nl: "Direct gebruikt een standaard populatie's leeftijdsstructuur; indirect gebruikt een standaard populatie's tarieven" },
          { en: "Direct standardization is more accurate than indirect", es: "La estandarización directa es más precisa que la indirecta", de: "Direkte Standardisierung ist genauer als indirekte", nl: "Directe standardisatie is nauwkeuriger dan indirecte" },
          { en: "Direct is used for mortality, indirect for morbidity", es: "Directa se usa para mortalidad, indirecta para morbilidad", de: "Direkte wird für Sterblichkeit verwendet, indirekte für Morbidität", nl: "Direct wordt gebruikt voor mortaliteit, indirect voor morbiditeit" },
          { en: "They produce identical results", es: "Producen resultados idénticos", de: "Sie produzieren identische Ergebnisse", nl: "Ze produceren identieke resultaten" }
        ],
        correct: 0,
        explanation: {
          en: "Direct standardization applies the age-specific rates of the study populations to a common standard population structure. Indirect standardization applies the age-specific rates of a standard population to the age structure of the study populations. Indirect is used when age-specific rates are unavailable or unstable in the study population.",
          es: "La estandarización directa aplica las tasas específicas por edad de las poblaciones de estudio a una estructura de población estándar común. La estandarización indirecta aplica las tasas específicas por edad de una población estándar a la estructura de edad de las poblaciones de estudio. La indirecta se usa cuando las tasas específicas por edad no están disponibles o son inestables en la población de estudio.",
          de: "Direkte Standardisierung wendet die altersspezifischen Raten der Studienpopulationen auf eine gemeinsame Standardpopulationsstruktur an. Indirekte Standardisierung wendet die altersspezifischen Raten einer Standardpopulation auf die Altersstruktur der Studienpopulationen an. Indirekte wird verwendet, wenn altersspezifische Raten in der Studienpopulation nicht verfügbar oder instabil sind.",
          nl: "Directe standardisatie past de leeftijdsspecifieke tarieven van de studie populaties toe op een gemeenschappelijke standaard populatiestructuur. Indirecte standardisatie past de leeftijdsspecifieke tarieven van een standaard populatie toe op de leeftijdsstructuur van de studie populaties. Indirect wordt gebruikt wanneer leeftijdsspecifieke tarieven niet beschikbaar of instabiel zijn in de studiepopulatie."
        }
      },
      {
        question: {
          en: "What is the purpose of propensity score matching in epidemiological studies?",
          es: "¿Cuál es el propósito del emparejamiento por puntaje de propensión en estudios epidemiológicos?",
          de: "Was ist der Zweck des Propensity-Score-Matchings in epidemiologischen Studien?",
          nl: "Wat is het doel van propensity score matching in epidemiologische studies?"
        },
        options: [
          { en: "To balance observed confounders between exposed and unexposed groups in observational studies", es: "Para equilibrar factores de confusión observados entre grupos expuestos y no expuestos en estudios observacionales", de: "Um beobachtete Störfaktoren zwischen exponierten und nicht-exponierten Gruppen in Beobachtungsstudien auszugleichen", nl: "Om geobserveerde confounders tussen blootgestelde en niet-blootgestelde groepen in observationele studies in balans te brengen" },
          { en: "To increase the sample size of the study", es: "Para aumentar el tamaño de muestra del estudio", de: "Um die Stichprobengröße der Studie zu erhöhen", nl: "Om de steekproefgrootte van de studie te vergroten" },
          { en: "To randomize treatment assignment", es: "Para aleatorizar la asignación del tratamiento", de: "Um die Behandlungszuweisung zu randomisieren", nl: "Om behandelingstoewijzing te randomiseren" },
          { en: "To measure the strength of association", es: "Para medir la fuerza de asociación", de: "Um die Stärke der Assoziation zu messen", nl: "Om de sterkte van associatie te meten" }
        ],
        correct: 0,
        explanation: {
          en: "Propensity score matching estimates the probability of treatment assignment based on observed baseline characteristics, then matches treated and untreated subjects with similar propensity scores. This helps reduce confounding in observational studies by creating groups that are more comparable on observed covariates.",
          es: "El emparejamiento por puntaje de propensión estima la probabilidad de asignación de tratamiento basada en características basales observadas, luego empareja sujetos tratados y no tratados con puntajes de propensión similares. Esto ayuda a reducir la confusión en estudios observacionales creando grupos que son más comparables en covariables observadas.",
          de: "Propensity-Score-Matching schätzt die Wahrscheinlichkeit der Behandlungszuweisung basierend auf beobachteten Baseline-Charakteristika und matcht dann behandelte und unbehandelte Subjekte mit ähnlichen Propensity-Scores. Dies hilft, Störfaktoren in Beobachtungsstudien zu reduzieren, indem Gruppen geschaffen werden, die bei beobachteten Kovariaten vergleichbarer sind.",
          nl: "Propensity score matching schat de waarschijnlijkheid van behandelingstoewijzing gebaseerd op geobserveerde baseline kenmerken, dan matcht behandelde en onbehandelde subjecten met vergelijkbare propensity scores. Dit helpt confounding in observationele studies te verminderen door groepen te creëren die meer vergelijkbaar zijn op geobserveerde covariaten."
        }
      },
      {
        question: {
          en: "What is a time-to-event analysis and when is it used?",
          es: "¿Qué es un análisis de tiempo hasta evento y cuándo se usa?",
          de: "Was ist eine Zeit-bis-Ereignis-Analyse und wann wird sie verwendet?",
          nl: "Wat is een tijd-tot-gebeurtenis analyse en wanneer wordt het gebruikt?"
        },
        options: [
          { en: "Statistical method analyzing time until a specific event occurs, used when outcome timing is important", es: "Método estadístico que analiza tiempo hasta que ocurre un evento específico, usado cuando el tiempo del resultado es importante", de: "Statistische Methode zur Analyse der Zeit bis zum Auftreten eines spezifischen Ereignisses, verwendet wenn das Timing des Outcomes wichtig ist", nl: "Statistische methode die tijd analyseert tot een specifieke gebeurtenis optreedt, gebruikt wanneer outcome timing belangrijk is" },
          { en: "Method for analyzing repeated measurements over time", es: "Método para analizar mediciones repetidas a lo largo del tiempo", de: "Methode zur Analyse wiederholter Messungen über die Zeit", nl: "Methode voor het analyseren van herhaalde metingen over tijd" },
          { en: "Technique for measuring disease duration only", es: "Técnica para medir solo la duración de la enfermedad", de: "Technik zur Messung nur der Krankheitsdauer", nl: "Techniek voor het meten van alleen ziekteduur" },
          { en: "Analysis method for cross-sectional studies", es: "Método de análisis para estudios transversales", de: "Analysemethode für Querschnittsstudien", nl: "Analyse methode voor cross-sectionele studies" }
        ],
        correct: 0,
        explanation: {
          en: "Time-to-event analysis (survival analysis) examines the time until a specific event occurs (death, disease recurrence, etc.). It's particularly valuable because it can handle censored data (incomplete follow-up) and provides insights into both the probability and timing of events. Common methods include Kaplan-Meier estimation and Cox regression.",
          es: "El análisis de tiempo hasta evento (análisis de supervivencia) examina el tiempo hasta que ocurre un evento específico (muerte, recurrencia de enfermedad, etc.). Es particularmente valioso porque puede manejar datos censurados (seguimiento incompleto) y proporciona insights tanto sobre la probabilidad como el tiempo de eventos. Métodos comunes incluyen estimación Kaplan-Meier y regresión de Cox.",
          de: "Zeit-bis-Ereignis-Analyse (Überlebensanalyse) untersucht die Zeit bis zum Auftreten eines spezifischen Ereignisses (Tod, Krankheitsrückfall, etc.). Sie ist besonders wertvoll, weil sie zensierte Daten (unvollständige Nachverfolgung) handhaben kann und Einblicke sowohl in die Wahrscheinlichkeit als auch das Timing von Ereignissen bietet. Gängige Methoden sind Kaplan-Meier-Schätzung und Cox-Regression.",
          nl: "Tijd-tot-gebeurtenis analyse (overlevingsanalyse) onderzoekt de tijd tot een specifieke gebeurtenis optreedt (overlijden, ziekte recidief, etc.). Het is bijzonder waardevol omdat het gecensureerde data (incomplete follow-up) kan hanteren en inzichten geeft in zowel de waarschijnlijkheid als timing van gebeurtenissen. Veelgebruikte methoden zijn Kaplan-Meier schatting en Cox regressie."
        }
      },
      {
        question: {
          en: "What is the difference between selection bias and information bias?",
          es: "¿Cuál es la diferencia entre sesgo de selección y sesgo de información?",
          de: "Was ist der Unterschied zwischen Selektionsbias und Informationsbias?",
          nl: "Wat is het verschil tussen selectie bias en informatie bias?"
        },
        options: [
          { en: "Selection bias occurs during participant recruitment; information bias occurs during data collection", es: "El sesgo de selección ocurre durante reclutamiento de participantes; sesgo de información ocurre durante recolección de datos", de: "Selektionsbias tritt während der Teilnehmerrekrutierung auf; Informationsbias tritt während der Datensammlung auf", nl: "Selectie bias treedt op tijdens deelnemer werving; informatie bias treedt op tijdens data verzameling" },
          { en: "Selection bias affects internal validity; information bias affects external validity", es: "El sesgo de selección afecta validez interna; sesgo de información afecta validez externa", de: "Selektionsbias beeinflusst interne Validität; Informationsbias beeinflusst externe Validität", nl: "Selectie bias beïnvloedt interne validiteit; informatie bias beïnvloedt externe validiteit" },
          { en: "Selection bias is systematic; information bias is random", es: "El sesgo de selección es sistemático; sesgo de información es aleatorio", de: "Selektionsbias ist systematisch; Informationsbias ist zufällig", nl: "Selectie bias is systematisch; informatie bias is willekeurig" },
          { en: "They are the same type of bias", es: "Son el mismo tipo de sesgo", de: "Sie sind dieselbe Art von Bias", nl: "Het is hetzelfde type bias" }
        ],
        correct: 0,
        explanation: {
          en: "Selection bias occurs when there are systematic differences in characteristics between those selected for study and those not selected, or between comparison groups. Information bias (measurement bias) occurs when there are systematic errors in how data are collected, measured, or classified. Both can lead to incorrect conclusions but arise at different stages of research.",
          es: "El sesgo de selección ocurre cuando hay diferencias sistemáticas en características entre aquellos seleccionados para estudio y aquellos no seleccionados, o entre grupos de comparación. El sesgo de información (sesgo de medición) ocurre cuando hay errores sistemáticos en cómo se recolectan, miden o clasifican los datos. Ambos pueden llevar a conclusiones incorrectas pero surgen en diferentes etapas de investigación.",
          de: "Selektionsbias tritt auf, wenn systematische Unterschiede in Charakteristika zwischen den für die Studie ausgewählten und nicht ausgewählten Personen oder zwischen Vergleichsgruppen bestehen. Informationsbias (Messbias) tritt auf, wenn systematische Fehler bei der Datensammlung, -messung oder -klassifikation vorliegen. Beide können zu falschen Schlüssen führen, entstehen aber in verschiedenen Forschungsphasen.",
          nl: "Selectie bias treedt op wanneer er systematische verschillen zijn in kenmerken tussen degenen die geselecteerd zijn voor onderzoek en degenen die niet geselecteerd zijn, of tussen vergelijkingsgroepen. Informatie bias (meetbias) treedt op wanneer er systematische fouten zijn in hoe data wordt verzameld, gemeten of geclassificeerd. Beide kunnen leiden tot onjuiste conclusies maar ontstaan in verschillende fasen van onderzoek."
        }
      },
      {
        question: {
          en: "What is the concept of herd immunity and its threshold?",
          es: "¿Qué es el concepto de inmunidad de rebaño y su umbral?",
          de: "Was ist das Konzept der Herdenimmunität und ihre Schwelle?",
          nl: "Wat is het concept van kudde-immuniteit en zijn drempel?"
        },
        options: [
          { en: "Indirect protection when sufficient population is immune; threshold = 1 - (1/R₀)", es: "Protección indirecta cuando suficiente población es inmune; umbral = 1 - (1/R₀)", de: "Indirekter Schutz wenn ausreichend Population immun ist; Schwelle = 1 - (1/R₀)", nl: "Indirecte bescherming wanneer voldoende populatie immuun is; drempel = 1 - (1/R₀)" },
          { en: "When 50% of the population is vaccinated", es: "Cuando 50% de la población está vacunada", de: "Wenn 50% der Bevölkerung geimpft ist", nl: "Wanneer 50% van de populatie gevaccineerd is" },
          { en: "Protection only for vaccinated individuals", es: "Protección solo para individuos vacunados", de: "Schutz nur für geimpfte Personen", nl: "Bescherming alleen voor gevaccineerde individuen" },
          { en: "Immunity that lasts for life", es: "Inmunidad que dura toda la vida", de: "Immunität, die ein Leben lang anhält", nl: "Immuniteit die levenslang duurt" }
        ],
        correct: 0,
        explanation: {
          en: "Herd immunity occurs when a sufficient proportion of a population is immune (through vaccination or previous infection) to provide indirect protection to susceptible individuals. The herd immunity threshold is calculated as 1 - (1/R₀), where R₀ is the basic reproduction number. For example, if R₀ = 4, the threshold is 75%.",
          es: "La inmunidad de rebaño ocurre cuando una proporción suficiente de población es inmune (a través de vacunación o infección previa) para proporcionar protección indirecta a individuos susceptibles. El umbral de inmunidad de rebaño se calcula como 1 - (1/R₀), donde R₀ es el número básico de reproducción. Por ejemplo, si R₀ = 4, el umbral es 75%.",
          de: "Herdenimmunität tritt auf, wenn ein ausreichender Anteil einer Population immun ist (durch Impfung oder vorherige Infektion), um indirekten Schutz für anfällige Personen zu bieten. Die Herdenimmunitätsschwelle wird als 1 - (1/R₀) berechnet, wobei R₀ die Basisreproduktionszahl ist. Zum Beispiel, wenn R₀ = 4, ist die Schwelle 75%.",
          nl: "Kudde-immuniteit treedt op wanneer een voldoende deel van een populatie immuun is (door vaccinatie of eerdere infectie) om indirecte bescherming te bieden aan vatbare individuen. De kudde-immuniteit drempel wordt berekend als 1 - (1/R₀), waar R₀ het basis reproductie nummer is. Bijvoorbeeld, als R₀ = 4, is de drempel 75%."
        }
      },
      {
        question: {
          en: "What is the difference between ecological and individual-level studies?",
          es: "¿Cuál es la diferencia entre estudios ecológicos y de nivel individual?",
          de: "Was ist der Unterschied zwischen ökologischen und individuellen Studien?",
          nl: "Wat is het verschil tussen ecologische en individuele niveau studies?"
        },
        options: [
          { en: "Ecological studies analyze aggregate data from populations; individual-level studies analyze data from individuals", es: "Los estudios ecológicos analizan datos agregados de poblaciones; estudios de nivel individual analizan datos de individuos", de: "Ökologische Studien analysieren aggregierte Daten von Populationen; individuelle Studien analysieren Daten von Einzelpersonen", nl: "Ecologische studies analyseren geaggregeerde data van populaties; individuele niveau studies analyseren data van individuen" },
          { en: "Ecological studies are always superior to individual studies", es: "Los estudios ecológicos son siempre superiores a estudios individuales", de: "Ökologische Studien sind immer überlegen gegenüber individuellen Studien", nl: "Ecologische studies zijn altijd superieur aan individuele studies" },
          { en: "Ecological studies focus on environmental factors only", es: "Los estudios ecológicos se enfocan solo en factores ambientales", de: "Ökologische Studien fokussieren nur auf Umweltfaktoren", nl: "Ecologische studies richten zich alleen op omgevingsfactoren" },
          { en: "Individual studies cannot establish causation", es: "Los estudios individuales no pueden establecer causación", de: "Individuelle Studien können keine Kausalität etablieren", nl: "Individuele studies kunnen geen oorzakelijkheid vaststellen" }
        ],
        correct: 0,
        explanation: {
          en: "Ecological studies examine associations between exposures and outcomes using aggregate data from groups or populations (e.g., comparing disease rates between countries). Individual-level studies collect data on exposure and outcome from individual participants. Ecological studies are prone to ecological fallacy - inferring individual-level associations from group-level data.",
          es: "Los estudios ecológicos examinan asociaciones entre exposiciones y resultados usando datos agregados de grupos o poblaciones (ej. comparando tasas de enfermedad entre países). Los estudios de nivel individual recolectan datos sobre exposición y resultado de participantes individuales. Los estudios ecológicos son propensos a falacia ecológica - inferir asociaciones de nivel individual de datos de nivel grupal.",
          de: "Ökologische Studien untersuchen Assoziationen zwischen Expositionen und Outcomes unter Verwendung aggregierter Daten von Gruppen oder Populationen (z.B. Vergleich von Krankheitsraten zwischen Ländern). Individuelle Studien sammeln Daten zu Exposition und Outcome von einzelnen Teilnehmern. Ökologische Studien neigen zum ökologischen Fehlschluss - Schlussfolgerung individueller Assoziationen aus Gruppendaten.",
          nl: "Ecologische studies onderzoeken associaties tussen blootstellingen en uitkomsten met geaggregeerde data van groepen of populaties (bijv. vergelijken van ziektecijfers tussen landen). Individuele niveau studies verzamelen data over blootstelling en uitkomst van individuele deelnemers. Ecologische studies zijn gevoelig voor ecologische drogreden - afleiden van individuele niveau associaties uit groepsniveau data."
        }
      },
      {
        question: {
          en: "What is the concept of lead-time bias in screening studies?",
          es: "¿Qué es el concepto de sesgo de tiempo de anticipación en estudios de tamizaje?",
          de: "Was ist das Konzept des Lead-Time-Bias in Screening-Studien?",
          nl: "Wat is het concept van lead-time bias in screenings studies?"
        },
        options: [
          { en: "Apparent survival benefit due to earlier detection without actual improvement in disease outcome", es: "Beneficio aparente de supervivencia debido a detección temprana sin mejora real en el resultado de la enfermedad", de: "Scheinbarer Überlebensvorteil aufgrund früherer Erkennung ohne tatsächliche Verbesserung des Krankheitsverlaufs", nl: "Schijnbaar overlevingsvoordeel door eerdere detectie zonder werkelijke verbetering in ziekte uitkomst" },
          { en: "Delay in starting screening programs", es: "Retraso en iniciar programas de tamizaje", de: "Verzögerung beim Start von Screening-Programmen", nl: "Vertraging in het starten van screeningsprogramma's" },
          { en: "Time needed to train screening personnel", es: "Tiempo necesario para entrenar personal de tamizaje", de: "Zeit, die für die Schulung von Screening-Personal benötigt wird", nl: "Tijd nodig om screeningspersoneel te trainen" },
          { en: "The interval between screening tests", es: "El intervalo entre pruebas de tamizaje", de: "Das Intervall zwischen Screening-Tests", nl: "Het interval tussen screeningstests" }
        ],
        correct: 0,
        explanation: {
          en: "Lead-time bias occurs when screening detects disease earlier than it would be clinically apparent, making it appear that screened individuals live longer when measured from diagnosis, even if screening doesn't actually extend life. The apparent survival time includes the lead-time (time between screen detection and when symptoms would have appeared).",
          es: "El sesgo de tiempo de anticipación ocurre cuando el tamizaje detecta enfermedad más temprano de lo que sería clínicamente aparente, haciendo parecer que individuos tamizados viven más cuando se mide desde el diagnóstico, incluso si el tamizaje no extiende realmente la vida. El tiempo aparente de supervivencia incluye el tiempo de anticipación (tiempo entre detección por tamizaje y cuando habrían aparecido síntomas).",
          de: "Lead-Time-Bias tritt auf, wenn Screening Krankheit früher entdeckt als sie klinisch apparent wäre, wodurch es scheint, dass gescreente Personen länger leben, wenn vom Diagnosezeitpunkt gemessen, auch wenn Screening das Leben nicht tatsächlich verlängert. Die scheinbare Überlebenszeit schließt die Lead-Time ein (Zeit zwischen Screen-Erkennung und Symptomauftreten).",
          nl: "Lead-time bias treedt op wanneer screening ziekte eerder detecteert dan het klinisch zichtbaar zou zijn, waardoor het lijkt dat gescreende individuen langer leven wanneer gemeten vanaf diagnose, zelfs als screening het leven niet werkelijk verlengt. De schijnbare overlevingstijd bevat de lead-time (tijd tussen screen detectie en wanneer symptomen zouden zijn verschenen)."
        }
      },
      {
        question: {
          en: "What is the purpose of standardized mortality ratio (SMR) in epidemiology?",
          es: "¿Cuál es el propósito del ratio de mortalidad estandarizado (SMR) en epidemiología?",
          de: "Was ist der Zweck der standardisierten Mortalitätsrate (SMR) in der Epidemiologie?",
          nl: "Wat is het doel van de gestandaardiseerde mortaliteitsratio (SMR) in epidemiologie?"
        },
        options: [
          { en: "Compares observed deaths in a study population to expected deaths based on a reference population", es: "Compara muertes observadas en una población de estudio con muertes esperadas basadas en una población de referencia", de: "Vergleicht beobachtete Todesfälle in einer Studienpopulation mit erwarteten Todesfällen basierend auf einer Referenzpopulation", nl: "Vergelijkt geobserveerde sterfgevallen in een studiepopulatie met verwachte sterfgevallen gebaseerd op een referentiepopulatie" },
          { en: "Calculates the crude mortality rate", es: "Calcula la tasa de mortalidad bruta", de: "Berechnet die rohe Sterblichkeitsrate", nl: "Berekent het ruwe sterftecijfer" },
          { en: "Measures the quality of medical care", es: "Mide la calidad de la atención médica", de: "Misst die Qualität der medizinischen Versorgung", nl: "Meet de kwaliteit van medische zorg" },
          { en: "Determines sample size for studies", es: "Determina el tamaño de muestra para estudios", de: "Bestimmt die Stichprobengröße für Studien", nl: "Bepaalt steekproefgrootte voor studies" }
        ],
        correct: 0,
        explanation: {
          en: "The Standardized Mortality Ratio (SMR) is calculated as the ratio of observed deaths to expected deaths (SMR = observed/expected × 100). Expected deaths are calculated by applying age-specific death rates from a reference population to the age structure of the study population. An SMR > 100 indicates higher mortality than expected, SMR < 100 indicates lower mortality.",
          es: "El Ratio de Mortalidad Estandarizado (SMR) se calcula como la proporción de muertes observadas a muertes esperadas (SMR = observadas/esperadas × 100). Las muertes esperadas se calculan aplicando tasas de muerte específicas por edad de una población de referencia a la estructura de edad de la población de estudio. Un SMR > 100 indica mortalidad más alta de lo esperado, SMR < 100 indica mortalidad más baja.",
          de: "Die Standardisierte Mortalitätsrate (SMR) wird als Verhältnis von beobachteten zu erwarteten Todesfällen berechnet (SMR = beobachtet/erwartet × 100). Erwartete Todesfälle werden berechnet, indem altersspezifische Sterberaten einer Referenzpopulation auf die Altersstruktur der Studienpopulation angewendet werden. SMR > 100 zeigt höhere Sterblichkeit als erwartet an, SMR < 100 zeigt niedrigere Sterblichkeit an.",
          nl: "De Gestandaardiseerde Mortaliteitsratio (SMR) wordt berekend als de verhouding van geobserveerde tot verwachte sterfgevallen (SMR = geobserveerd/verwacht × 100). Verwachte sterfgevallen worden berekend door leeftijdsspecifieke sterftecijfers van een referentiepopulatie toe te passen op de leeftijdsstructuur van de studiepopulatie. SMR > 100 geeft hogere mortaliteit dan verwacht aan, SMR < 100 geeft lagere mortaliteit aan."
        }
      },
      {
        question: {
          en: "What is the concept of effect modification (interaction) in epidemiology?",
          es: "¿Qué es el concepto de modificación del efecto (interacción) en epidemiología?",
          de: "Was ist das Konzept der Effektmodifikation (Interaktion) in der Epidemiologie?",
          nl: "Wat is het concept van effect modificatie (interactie) in epidemiologie?"
        },
        options: [
          { en: "When the effect of an exposure on an outcome varies across levels of another variable", es: "Cuando el efecto de una exposición en un resultado varía a través de niveles de otra variable", de: "Wenn der Effekt einer Exposition auf ein Outcome über verschiedene Ebenen einer anderen Variable variiert", nl: "Wanneer het effect van een blootstelling op een uitkomst varieert over niveaus van een andere variabele" },
          { en: "When one exposure cancels out another exposure", es: "Cuando una exposición cancela otra exposición", de: "Wenn eine Exposition eine andere Exposition aufhebt", nl: "Wanneer één blootstelling een andere blootstelling teniet doet" },
          { en: "When confounding variables are present", es: "Cuando variables de confusión están presentes", de: "Wenn Störvariablen vorhanden sind", nl: "Wanneer confounding variabelen aanwezig zijn" },
          { en: "When measurement error occurs", es: "Cuando ocurre error de medición", de: "Wenn Messfehler auftreten", nl: "Wanneer meetfouten optreden" }
        ],
        correct: 0,
        explanation: {
          en: "Effect modification (interaction) occurs when the magnitude or direction of the association between an exposure and outcome differs according to the level of a third variable (effect modifier). Unlike confounding, effect modification is a biological phenomenon that should be reported and described, not controlled for in analysis.",
          es: "La modificación del efecto (interacción) ocurre cuando la magnitud o dirección de la asociación entre una exposición y resultado difiere según el nivel de una tercera variable (modificador del efecto). A diferencia de la confusión, la modificación del efecto es un fenómeno biológico que debe reportarse y describirse, no controlarse en el análisis.",
          de: "Effektmodifikation (Interaktion) tritt auf, wenn die Größe oder Richtung der Assoziation zwischen einer Exposition und einem Outcome je nach Ebene einer dritten Variable (Effektmodifikator) unterschiedlich ist. Im Gegensatz zu Confounding ist Effektmodifikation ein biologisches Phänomen, das berichtet und beschrieben werden sollte, nicht in der Analyse kontrolliert.",
          nl: "Effect modificatie (interactie) treedt op wanneer de grootte of richting van de associatie tussen een blootstelling en uitkomst verschilt volgens het niveau van een derde variabele (effect modifier). In tegenstelling tot confounding is effect modificatie een biologisch fenomeen dat gerapporteerd en beschreven moet worden, niet gecontroleerd in analyse."
        }
      },
      {
        question: {
          en: "What is the difference between active and passive surveillance systems?",
          es: "¿Cuál es la diferencia entre sistemas de vigilancia activa y pasiva?",
          de: "Was ist der Unterschied zwischen aktiven und passiven Überwachungssystemen?",
          nl: "Wat is het verschil tussen actieve en passieve surveillance systemen?"
        },
        options: [
          { en: "Active surveillance proactively seeks cases; passive surveillance relies on voluntary reporting", es: "La vigilancia activa busca casos proactivamente; vigilancia pasiva depende de reportes voluntarios", de: "Aktive Überwachung sucht proaktiv nach Fällen; passive Überwachung beruht auf freiwilliger Meldung", nl: "Actieve surveillance zoekt proactief naar gevallen; passieve surveillance vertrouwt op vrijwillige rapportage" },
          { en: "Active surveillance is automated; passive surveillance is manual", es: "La vigilancia activa es automatizada; vigilancia pasiva es manual", de: "Aktive Überwachung ist automatisiert; passive Überwachung ist manuell", nl: "Actieve surveillance is geautomatiseerd; passieve surveillance is handmatig" },
          { en: "Active surveillance is more expensive; passive surveillance is cheaper", es: "La vigilancia activa es más costosa; vigilancia pasiva es más barata", de: "Aktive Überwachung ist teurer; passive Überwachung ist billiger", nl: "Actieve surveillance is duurder; passieve surveillance is goedkoper" },
          { en: "Active surveillance uses laboratory data; passive uses clinical data", es: "La vigilancia activa usa datos de laboratorio; pasiva usa datos clínicos", de: "Aktive Überwachung verwendet Labordaten; passive verwendet klinische Daten", nl: "Actieve surveillance gebruikt laboratoriumdata; passieve gebruikt klinische data" }
        ],
        correct: 0,
        explanation: {
          en: "Active surveillance involves public health authorities proactively contacting healthcare providers, laboratories, or other sources to identify and collect information about cases. Passive surveillance relies on healthcare providers and others to voluntarily report cases to public health authorities. Active surveillance generally provides more complete case ascertainment but requires more resources.",
          es: "La vigilancia activa involucra autoridades de salud pública contactando proactivamente a proveedores de salud, laboratorios u otras fuentes para identificar y recolectar información sobre casos. La vigilancia pasiva depende de que proveedores de salud y otros reporten voluntariamente casos a autoridades de salud pública. La vigilancia activa generalmente proporciona identificación de casos más completa pero requiere más recursos.",
          de: "Aktive Überwachung beinhaltet, dass Gesundheitsbehörden proaktiv Gesundheitsdienstleister, Labore oder andere Quellen kontaktieren, um Fälle zu identifizieren und Informationen zu sammeln. Passive Überwachung beruht darauf, dass Gesundheitsdienstleister und andere freiwillig Fälle an Gesundheitsbehörden melden. Aktive Überwachung bietet im Allgemeinen vollständigere Fallerkennung, erfordert aber mehr Ressourcen.",
          nl: "Actieve surveillance houdt in dat volksgezondheidsautoriteiten proactief contact opnemen met zorgverleners, laboratoria of andere bronnen om gevallen te identificeren en informatie te verzamelen. Passieve surveillance vertrouwt erop dat zorgverleners en anderen vrijwillig gevallen rapporteren aan volksgezondheidsautoriteiten. Actieve surveillance biedt over het algemeen meer volledige case ascertainment maar vereist meer middelen."
        }
      },
      {
        question: {
          en: "What is the basic reproduction number (R₀) and its significance?",
          es: "¿Qué es el número básico de reproducción (R₀) y su significado?",
          de: "Was ist die Basisreproduktionszahl (R₀) und ihre Bedeutung?",
          nl: "Wat is het basis reproductie nummer (R₀) en zijn betekenis?"
        },
        options: [
          { en: "Average number of secondary infections from one infected individual in a susceptible population; R₀ > 1 indicates epidemic potential", es: "Número promedio de infecciones secundarias de un individuo infectado en población susceptible; R₀ > 1 indica potencial epidémico", de: "Durchschnittliche Anzahl sekundärer Infektionen von einer infizierten Person in einer anfälligen Population; R₀ > 1 zeigt epidemisches Potenzial an", nl: "Gemiddeld aantal secundaire infecties van één geïnfecteerd individu in een vatbare populatie; R₀ > 1 geeft epidemisch potentieel aan" },
          { en: "The total number of infected individuals", es: "El número total de individuos infectados", de: "Die Gesamtzahl infizierter Personen", nl: "Het totale aantal geïnfecteerde individuen" },
          { en: "The mortality rate of the disease", es: "La tasa de mortalidad de la enfermedad", de: "Die Sterblichkeitsrate der Krankheit", nl: "Het sterftecijfer van de ziekte" },
          { en: "The time from infection to symptoms", es: "El tiempo de infección a síntomas", de: "Die Zeit von Infektion zu Symptomen", nl: "De tijd van infectie tot symptomen" }
        ],
        correct: 0,
        explanation: {
          en: "R₀ represents the average number of secondary cases generated by one infected individual in a completely susceptible population. If R₀ > 1, each infected person infects more than one other person on average, leading to epidemic growth. If R₀ < 1, the infection will eventually die out. R₀ depends on infectiousness, contact patterns, and duration of infectivity.",
          es: "R₀ representa el número promedio de casos secundarios generados por un individuo infectado en una población completamente susceptible. Si R₀ > 1, cada persona infectada infecta a más de una persona en promedio, llevando a crecimiento epidémico. Si R₀ < 1, la infección eventualmente desaparecerá. R₀ depende de infectividad, patrones de contacto y duración de infectividad.",
          de: "R₀ repräsentiert die durchschnittliche Anzahl sekundärer Fälle, die von einer infizierten Person in einer vollständig anfälligen Population erzeugt werden. Wenn R₀ > 1, infiziert jede infizierte Person im Durchschnitt mehr als eine andere Person, was zu epidemischem Wachstum führt. Wenn R₀ < 1, wird die Infektion schließlich aussterben. R₀ hängt von Infektiosität, Kontaktmustern und Dauer der Infektiosität ab.",
          nl: "R₀ vertegenwoordigt het gemiddelde aantal secundaire gevallen gegenereerd door één geïnfecteerd individu in een volledig vatbare populatie. Als R₀ > 1, infecteert elke geïnfecteerde persoon gemiddeld meer dan één andere persoon, wat leidt tot epidemische groei. Als R₀ < 1, zal de infectie uiteindelijk uitsterven. R₀ hangt af van infectiositeit, contactpatronen en duur van infectiviteit."
        }
      },
      {
        question: {
          en: "What is the purpose of meta-analysis in epidemiology?",
          es: "¿Cuál es el propósito del metaanálisis en epidemiología?",
          de: "Was ist der Zweck der Meta-Analyse in der Epidemiologie?",
          nl: "Wat is het doel van meta-analyse in epidemiologie?"
        },
        options: [
          { en: "Quantitatively combines results from multiple studies to increase statistical power and provide pooled estimates", es: "Combina cuantitativamente resultados de múltiples estudios para aumentar poder estadístico y proporcionar estimaciones agrupadas", de: "Kombiniert quantitativ Ergebnisse mehrerer Studien zur Erhöhung der statistischen Power und Bereitstellung gepoolter Schätzungen", nl: "Combineert kwantitatief resultaten van meerdere studies om statistische power te verhogen en gepoolde schattingen te bieden" },
          { en: "Replaces the need for new primary research", es: "Reemplaza la necesidad de nueva investigación primaria", de: "Ersetzt die Notwendigkeit neuer Primärforschung", nl: "Vervangt de noodzaak voor nieuw primair onderzoek" },
          { en: "Only summarizes qualitative findings", es: "Solo resume hallazgos cualitativos", de: "Fasst nur qualitative Befunde zusammen", nl: "Vat alleen kwalitatieve bevindingen samen" },
          { en: "Analyzes only randomized controlled trials", es: "Analiza solo ensayos controlados aleatorios", de: "Analysiert nur randomisierte kontrollierte Studien", nl: "Analyseert alleen gerandomiseerde gecontroleerde trials" }
        ],
        correct: 0,
        explanation: {
          en: "Meta-analysis is a statistical technique that quantitatively combines results from multiple independent studies addressing the same research question. It increases statistical power by pooling data, provides more precise estimates of effect sizes, explores heterogeneity between studies, and can identify overall patterns that individual studies might miss due to limited sample sizes.",
          es: "El metaanálisis es una técnica estadística que combina cuantitativamente resultados de múltiples estudios independientes que abordan la misma pregunta de investigación. Aumenta el poder estadístico agrupando datos, proporciona estimaciones más precisas de tamaños de efecto, explora heterogeneidad entre estudios, y puede identificar patrones generales que estudios individuales podrían perder debido a tamaños de muestra limitados.",
          de: "Meta-Analyse ist eine statistische Technik, die quantitativ Ergebnisse mehrerer unabhängiger Studien zur gleichen Forschungsfrage kombiniert. Sie erhöht die statistische Power durch Datenpooling, liefert präzisere Schätzungen von Effektgrößen, untersucht Heterogenität zwischen Studien und kann Gesamtmuster identifizieren, die einzelne Studien aufgrund begrenzter Stichprobengrößen übersehen könnten.",
          nl: "Meta-analyse is een statistische techniek die kwantitatief resultaten combineert van meerdere onafhankelijke studies die dezelfde onderzoeksvraag behandelen. Het verhoogt statistische power door data te poolen, biedt meer precieze schattingen van effect grootten, verkent heterogeniteit tussen studies, en kan algemene patronen identificeren die individuele studies zouden kunnen missen door beperkte steekproefgrootten."
        }
      },
      {
        question: {
          en: "What is the difference between point prevalence and period prevalence?",
          es: "¿Cuál es la diferencia entre prevalencia puntual y prevalencia de período?",
          de: "Was ist der Unterschied zwischen Punktprävalenz und Periodenprävalenz?",
          nl: "Wat is het verschil tussen punt prevalentie en periode prevalentie?"
        },
        options: [
          { en: "Point prevalence measures disease frequency at a specific time; period prevalence measures frequency during a time interval", es: "Prevalencia puntual mide frecuencia de enfermedad en un tiempo específico; prevalencia de período mide frecuencia durante un intervalo de tiempo", de: "Punktprävalenz misst Krankheitshäufigkeit zu einem bestimmten Zeitpunkt; Periodenprävalenz misst Häufigkeit während eines Zeitintervalls", nl: "Punt prevalentie meet ziekte frequentie op een specifiek tijdstip; periode prevalentie meet frequentie gedurende een tijdsinterval" },
          { en: "Point prevalence is more accurate than period prevalence", es: "La prevalencia puntual es más precisa que la prevalencia de período", de: "Punktprävalenz ist genauer als Periodenprävalenz", nl: "Punt prevalentie is nauwkeuriger dan periode prevalentie" },
          { en: "Point prevalence measures incidence; period prevalence measures mortality", es: "La prevalencia puntual mide incidencia; prevalencia de período mide mortalidad", de: "Punktprävalenz misst Inzidenz; Periodenprävalenz misst Mortalität", nl: "Punt prevalentie meet incidentie; periode prevalentie meet mortaliteit" },
          { en: "They are calculated using different denominators", es: "Se calculan usando diferentes denominadores", de: "Sie werden mit verschiedenen Nennern berechnet", nl: "Ze worden berekend met verschillende noemers" }
        ],
        correct: 0,
        explanation: {
          en: "Point prevalence measures the proportion of a population that has a disease at a single point in time (like a snapshot). Period prevalence measures the proportion of a population that has the disease at any time during a specified period (includes both existing cases and new cases that develop during the period). Period prevalence is always equal to or higher than point prevalence.",
          es: "La prevalencia puntual mide la proporción de población que tiene enfermedad en un solo punto en el tiempo (como una instantánea). La prevalencia de período mide la proporción de población que tiene la enfermedad en cualquier momento durante un período específico (incluye casos existentes y nuevos casos que se desarrollan durante el período). La prevalencia de período es siempre igual o mayor que la prevalencia puntual.",
          de: "Punktprävalenz misst den Anteil einer Population, der zu einem einzelnen Zeitpunkt eine Krankheit hat (wie ein Schnappschuss). Periodenprävalenz misst den Anteil einer Population, der zu irgendeinem Zeitpunkt während einer bestimmten Periode die Krankheit hat (umfasst sowohl bestehende Fälle als auch neue Fälle, die während der Periode auftreten). Periodenprävalenz ist immer gleich oder höher als Punktprävalenz.",
          nl: "Punt prevalentie meet het aandeel van een populatie dat een ziekte heeft op één enkel tijdstip (zoals een momentopname). Periode prevalentie meet het aandeel van een populatie dat de ziekte heeft op enig moment gedurende een gespecificeerde periode (omvat zowel bestaande gevallen als nieuwe gevallen die zich ontwikkelen tijdens de periode). Periode prevalentie is altijd gelijk aan of hoger dan punt prevalentie."
        }
      },
      {
        question: {
          en: "What is syndromic surveillance and its advantages?",
          es: "¿Qué es la vigilancia sindrómica y sus ventajas?",
          de: "Was ist syndromische Überwachung und ihre Vorteile?",
          nl: "Wat is syndromische surveillance en zijn voordelen?"
        },
        options: [
          { en: "Monitors symptoms/syndromes before specific diagnosis; provides early outbreak detection and real-time monitoring", es: "Monitorea síntomas/síndromes antes de diagnóstico específico; proporciona detección temprana de brotes y monitoreo en tiempo real", de: "Überwacht Symptome/Syndrome vor spezifischer Diagnose; bietet frühe Ausbruchserkennung und Echtzeit-Monitoring", nl: "Monitort symptomen/syndromen voor specifieke diagnose; biedt vroege uitbraak detectie en real-time monitoring" },
          { en: "Only monitors confirmed diagnosed cases", es: "Solo monitorea casos confirmados diagnosticados", de: "Überwacht nur bestätigte diagnostizierte Fälle", nl: "Monitort alleen bevestigde gediagnosticeerde gevallen" },
          { en: "Is less sensitive than traditional surveillance", es: "Es menos sensible que vigilancia tradicional", de: "Ist weniger sensibel als traditionelle Überwachung", nl: "Is minder gevoelig dan traditionele surveillance" },
          { en: "Requires laboratory confirmation for all cases", es: "Requiere confirmación de laboratorio para todos los casos", de: "Erfordert Laborbestätigung für alle Fälle", nl: "Vereist laboratorium bevestiging voor alle gevallen" }
        ],
        correct: 0,
        explanation: {
          en: "Syndromic surveillance monitors health indicators (symptoms, syndromes, or other health-related data) that precede diagnosis and signal a sufficient probability of a case or outbreak to warrant further public health response. Advantages include earlier detection of outbreaks, real-time monitoring, ability to detect unknown pathogens, and reduced dependence on laboratory confirmation.",
          es: "La vigilancia sindrómica monitorea indicadores de salud (síntomas, síndromes u otros datos relacionados con salud) que preceden al diagnóstico y señalan probabilidad suficiente de caso o brote para justificar respuesta adicional de salud pública. Las ventajas incluyen detección más temprana de brotes, monitoreo en tiempo real, capacidad de detectar patógenos desconocidos y dependencia reducida de confirmación de laboratorio.",
          de: "Syndromische Überwachung monitort Gesundheitsindikatoren (Symptome, Syndrome oder andere gesundheitsbezogene Daten), die der Diagnose vorausgehen und eine ausreichende Wahrscheinlichkeit eines Falls oder Ausbruchs signalisieren, um weitere öffentliche Gesundheitsmaßnahmen zu rechtfertigen. Vorteile umfassen frühere Ausbruchserkennung, Echtzeit-Monitoring, Fähigkeit zur Erkennung unbekannter Pathogene und reduzierte Abhängigkeit von Laborbestätigung.",
          nl: "Syndromische surveillance monitort gezondheidsfidicatoren (symptomen, syndromen of andere gezondheidsgerelateerde data) die voorafgaan aan diagnose en voldoende waarschijnlijkheid van een geval of uitbraak signaleren om verdere volksgezondheidsresponse te rechtvaardigen. Voordelen omvatten eerdere detectie van uitbraken, real-time monitoring, vermogen om onbekende pathogenen te detecteren, en verminderde afhankelijkheid van laboratorium bevestiging."
        }
      },
      {
        question: {
          en: "What is the concept of confounding by indication in pharmacoepidemiology?",
          es: "¿Qué es el concepto de confusión por indicación en farmacoepidemiología?",
          de: "Was ist das Konzept des Confounding by Indication in der Pharmakoepidemiologie?",
          nl: "Wat is het concept van confounding by indication in farmaco-epidemiologie?"
        },
        options: [
          { en: "When the indication for treatment is associated with the outcome, creating spurious associations", es: "Cuando la indicación para tratamiento está asociada con el resultado, creando asociaciones espurias", de: "Wenn die Indikation für die Behandlung mit dem Outcome assoziiert ist und scheinbare Assoziationen schafft", nl: "Wanneer de indicatie voor behandeling geassocieerd is met de uitkomst, wat schijnbare associaties creëert" },
          { en: "When patients don't follow prescribed medication regimens", es: "Cuando pacientes no siguen regímenes de medicación prescritos", de: "Wenn Patienten verschriebene Medikationsregime nicht befolgen", nl: "Wanneer patiënten voorgeschreven medicatie regimes niet volgen" },
          { en: "When drug interactions occur", es: "Cuando ocurren interacciones de medicamentos", de: "Wenn Arzneimittelinteraktionen auftreten", nl: "Wanneer medicijn interacties optreden" },
          { en: "When the wrong medication is prescribed", es: "Cuando se prescribe la medicación incorrecta", de: "Wenn die falsche Medikation verschrieben wird", nl: "Wanneer de verkeerde medicatie wordt voorgeschreven" }
        ],
        correct: 0,
        explanation: {
          en: "Confounding by indication occurs when the clinical indication (reason) for prescribing a medication is itself a risk factor for the outcome being studied. For example, if studying heart attacks and antihypertensive medications, having hypertension (the indication) is itself a risk factor for heart attacks, potentially creating a spurious association between the medication and the outcome.",
          es: "La confusión por indicación ocurre cuando la indicación clínica (razón) para prescribir un medicamento es en sí misma un factor de riesgo para el resultado estudiado. Por ejemplo, si se estudian ataques cardíacos y medicamentos antihipertensivos, tener hipertensión (la indicación) es en sí mismo un factor de riesgo para ataques cardíacos, potencialmente creando una asociación espuria entre el medicamento y el resultado.",
          de: "Confounding by Indication tritt auf, wenn die klinische Indikation (Grund) für die Verschreibung eines Medikaments selbst ein Risikofaktor für das untersuchte Outcome ist. Zum Beispiel, beim Studieren von Herzinfarkten und blutdrucksenkenden Medikamenten ist Bluthochdruck (die Indikation) selbst ein Risikofaktor für Herzinfarkte, was potenziell eine scheinbare Assoziation zwischen dem Medikament und dem Outcome schafft.",
          nl: "Confounding by indication treedt op wanneer de klinische indicatie (reden) voor het voorschrijven van een medicijn zelf een risicofactor is voor de bestudeerde uitkomst. Bijvoorbeeld, bij het bestuderen van hartaanvallen en antihypertensiva, is hypertensie hebben (de indicatie) zelf een risicofactor voor hartaanvallen, wat mogelijk een schijnbare associatie creëert tussen het medicijn en de uitkomst."
        }
      },
      {
        question: {
          en: "What is the healthy worker effect in occupational epidemiology?",
          es: "¿Qué es el efecto del trabajador sano en epidemiología ocupacional?",
          de: "Was ist der Healthy-Worker-Effekt in der Arbeitsepidemiologie?",
          nl: "Wat is het healthy worker effect in arbeidsepidemiologie?"
        },
        options: [
          { en: "Workers tend to be healthier than the general population, leading to underestimation of occupational health risks", es: "Los trabajadores tienden a ser más sanos que la población general, llevando a subestimación de riesgos de salud ocupacional", de: "Arbeiter neigen dazu, gesünder zu sein als die Allgemeinbevölkerung, was zu Unterschätzung beruflicher Gesundheitsrisiken führt", nl: "Werknemers zijn meestal gezonder dan de algemene bevolking, wat leidt tot onderschatting van beroepsmatige gezondheidsrisico's" },
          { en: "Workers become healthier after starting employment", es: "Los trabajadores se vuelven más sanos después de comenzar empleo", de: "Arbeiter werden gesünder nach Arbeitsbeginn", nl: "Werknemers worden gezonder na het beginnen van werk" },
          { en: "Only healthy workers are exposed to occupational hazards", es: "Solo trabajadores sanos están expuestos a riesgos ocupacionales", de: "Nur gesunde Arbeiter sind beruflichen Gefahren ausgesetzt", nl: "Alleen gezonde werknemers worden blootgesteld aan beroepsrisico's" },
          { en: "Work environments improve worker health", es: "Los ambientes de trabajo mejoran la salud del trabajador", de: "Arbeitsumgebungen verbessern die Gesundheit der Arbeiter", nl: "Werkomgevingen verbeteren werknemersgezondheid" }
        ],
        correct: 0,
        explanation: {
          en: "The healthy worker effect occurs because workers must be healthy enough to work and maintain employment, making them generally healthier than the general population. This selection bias can lead to underestimation of occupational health risks when workers are compared to the general population. The effect is strongest at hire and decreases with time as workers age and develop health problems.",
          es: "El efecto del trabajador sano ocurre porque los trabajadores deben estar suficientemente sanos para trabajar y mantener empleo, haciéndolos generalmente más sanos que la población general. Este sesgo de selección puede llevar a subestimación de riesgos de salud ocupacional cuando trabajadores se comparan con la población general. El efecto es más fuerte al contratar y disminuye con el tiempo mientras trabajadores envejecen y desarrollan problemas de salud.",
          de: "Der Healthy-Worker-Effekt tritt auf, weil Arbeiter gesund genug sein müssen, um zu arbeiten und ihre Beschäftigung aufrechtzuerhalten, was sie im Allgemeinen gesünder macht als die Allgemeinbevölkerung. Diese Selektionsbias kann zu Unterschätzung beruflicher Gesundheitsrisiken führen, wenn Arbeiter mit der Allgemeinbevölkerung verglichen werden. Der Effekt ist bei der Einstellung am stärksten und nimmt mit der Zeit ab, während Arbeiter altern und Gesundheitsprobleme entwickeln.",
          nl: "Het healthy worker effect treedt op omdat werknemers gezond genoeg moeten zijn om te werken en werkgelegenheid te behouden, waardoor ze over het algemeen gezonder zijn dan de algemene bevolking. Deze selectie bias kan leiden tot onderschatting van beroepsmatige gezondheidsrisico's wanneer werknemers vergeleken worden met de algemene bevolking. Het effect is het sterkst bij aanname en vermindert met tijd naarmate werknemers ouder worden en gezondheidsproblemen ontwikkelen."
        }
      },
      {
        question: {
          en: "What is the difference between random error and systematic error in epidemiological studies?",
          es: "¿Cuál es la diferencia entre error aleatorio y error sistemático en estudios epidemiológicos?",
          de: "Was ist der Unterschied zwischen zufälligem Fehler und systematischem Fehler in epidemiologischen Studien?",
          nl: "Wat is het verschil tussen willekeurige fout en systematische fout in epidemiologische studies?"
        },
        options: [
          { en: "Random error affects precision (confidence intervals); systematic error affects validity (accuracy of results)", es: "Error aleatorio afecta precisión (intervalos de confianza); error sistemático afecta validez (exactitud de resultados)", de: "Zufälliger Fehler beeinflusst Präzision (Konfidenzintervalle); systematischer Fehler beeinflusst Validität (Genauigkeit der Ergebnisse)", nl: "Willekeurige fout beïnvloedt precisie (betrouwbaarheidsintervallen); systematische fout beïnvloedt validiteit (nauwkeurigheid van resultaten)" },
          { en: "Random error is more serious than systematic error", es: "El error aleatorio es más serio que error sistemático", de: "Zufälliger Fehler ist ernster als systematischer Fehler", nl: "Willekeurige fout is ernstiger dan systematische fout" },
          { en: "Random error can be prevented; systematic error cannot", es: "El error aleatorio puede prevenirse; error sistemático no puede", de: "Zufälliger Fehler kann verhindert werden; systematischer Fehler nicht", nl: "Willekeurige fout kan voorkomen worden; systematische fout niet" },
          { en: "They have the same impact on study results", es: "Tienen el mismo impacto en resultados del estudio", de: "Sie haben dieselbe Auswirkung auf Studienergebnisse", nl: "Ze hebben dezelfde impact op studie resultaten" }
        ],
        correct: 0,
        explanation: {
          en: "Random error is due to chance and affects the precision of study results - it makes confidence intervals wider but doesn't bias the results in any particular direction. Systematic error (bias) affects the validity/accuracy of results by consistently pushing estimates away from the true value in one direction. Random error decreases with larger sample sizes; systematic error does not.",
          es: "El error aleatorio se debe al azar y afecta la precisión de resultados del estudio - hace intervalos de confianza más amplios pero no sesga los resultados en ninguna dirección particular. El error sistemático (sesgo) afecta la validez/exactitud de resultados empujando consistentemente estimaciones alejándose del valor verdadero en una dirección. El error aleatorio disminuye con tamaños de muestra más grandes; error sistemático no.",
          de: "Zufälliger Fehler ist dem Zufall geschuldet und beeinflusst die Präzision von Studienergebnissen - er macht Konfidenzintervalle breiter, aber verzerrt die Ergebnisse nicht in eine bestimmte Richtung. Systematischer Fehler (Bias) beeinflusst die Validität/Genauigkeit von Ergebnissen, indem er Schätzungen konsistent vom wahren Wert in eine Richtung wegdrückt. Zufälliger Fehler nimmt mit größeren Stichproben ab; systematischer Fehler nicht.",
          nl: "Willekeurige fout is te wijten aan toeval en beïnvloedt de precisie van studie resultaten - het maakt betrouwbaarheidsintervallen wijder maar vertekent de resultaten niet in een bepaalde richting. Systematische fout (bias) beïnvloedt de validiteit/nauwkeurigheid van resultaten door schattingen consistent weg te duwen van de ware waarde in één richting. Willekeurige fout neemt af met grotere steekproefgroottes; systematische fout niet."
        }
      },
      {
        question: {
          en: "What is the attributable fraction (population attributable fraction) and how is it calculated?",
          es: "¿Qué es la fracción atribuible (fracción atribuible poblacional) y cómo se calcula?",
          de: "Was ist der attributable Anteil (populationsattribuierbarer Anteil) und wie wird er berechnet?",
          nl: "Wat is de toerekenbare fractie (populatie toerekenbare fractie) en hoe wordt het berekend?"
        },
        options: [
          { en: "The proportion of disease incidence in the population that can be attributed to exposure; calculated as (Incidence in population - Incidence in unexposed) / Incidence in population", es: "La proporción de incidencia de enfermedad en la población que puede atribuirse a exposición; calculada como (Incidencia en población - Incidencia en no expuestos) / Incidencia en población", de: "Der Anteil der Krankheitsinzidenz in der Population, der der Exposition zugeschrieben werden kann; berechnet als (Inzidenz in Population - Inzidenz in Unbelasteten) / Inzidenz in Population", nl: "Het aandeel van ziekte incidentie in de populatie dat toegeschreven kan worden aan blootstelling; berekend als (Incidentie in populatie - Incidentie in niet-blootgestelden) / Incidentie in populatie" },
          { en: "The total number of cases caused by exposure", es: "El número total de casos causados por exposición", de: "Die Gesamtzahl der durch Exposition verursachten Fälle", nl: "Het totale aantal gevallen veroorzaakt door blootstelling" },
          { en: "The relative risk minus one", es: "El riesgo relativo menos uno", de: "Das relative Risiko minus eins", nl: "Het relatieve risico min één" },
          { en: "The odds ratio divided by the prevalence", es: "La razón de momios dividida por la prevalencia", de: "Das Odds Ratio geteilt durch die Prävalenz", nl: "De odds ratio gedeeld door de prevalentie" }
        ],
        correct: 0,
        explanation: {
          en: "The population attributable fraction (PAF) represents the proportion of disease incidence in the total population that can be attributed to a specific exposure. It answers 'What proportion of disease could be prevented if the exposure were eliminated?' The formula is PAF = (I_pop - I_0) / I_pop, where I_pop is incidence in the population and I_0 is incidence in the unexposed. It can also be calculated as PAF = P_e × (RR - 1) / [1 + P_e × (RR - 1)], where P_e is exposure prevalence and RR is relative risk.",
          es: "La fracción atribuible poblacional (PAF) representa la proporción de incidencia de enfermedad en la población total que puede atribuirse a una exposición específica. Responde '¿Qué proporción de enfermedad podría prevenirse si se eliminara la exposición?' La fórmula es PAF = (I_pob - I_0) / I_pob, donde I_pob es incidencia en población e I_0 es incidencia en no expuestos. También puede calcularse como PAF = P_e × (RR - 1) / [1 + P_e × (RR - 1)], donde P_e es prevalencia de exposición y RR es riesgo relativo.",
          de: "Der populationsattribuierbare Anteil (PAF) stellt den Anteil der Krankheitsinzidenz in der Gesamtpopulation dar, der einer spezifischen Exposition zugeschrieben werden kann. Er beantwortet 'Welcher Anteil der Krankheit könnte verhindert werden, wenn die Exposition eliminiert würde?' Die Formel ist PAF = (I_pop - I_0) / I_pop, wobei I_pop die Inzidenz in der Population und I_0 die Inzidenz bei Unbelasteten ist. Es kann auch als PAF = P_e × (RR - 1) / [1 + P_e × (RR - 1)] berechnet werden, wobei P_e die Expositionsprävalenz und RR das relative Risiko ist.",
          nl: "De populatie toerekenbare fractie (PAF) vertegenwoordigt het aandeel van ziekte incidentie in de totale populatie dat toegeschreven kan worden aan een specifieke blootstelling. Het beantwoordt 'Welk aandeel van ziekte zou voorkomen kunnen worden als de blootstelling werd weggenomen?' De formule is PAF = (I_pop - I_0) / I_pop, waar I_pop incidentie in de populatie is en I_0 incidentie bij niet-blootgestelden. Het kan ook berekend worden als PAF = P_e × (RR - 1) / [1 + P_e × (RR - 1)], waar P_e blootstellingsprevalentie is en RR relatief risico."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/epidemiology', level1);
  }
})();
