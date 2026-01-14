// AI Ethics Quiz - Level 7: Algorithmic Decision-Making Ethics
(function() {
  const level7 = {
    name: {
      en: "AI Ethics Level 7",
      es: "Etica de IA Nivel 7",
      de: "KI-Ethik Stufe 7",
      nl: "AI Ethiek Level 7"
    },
    questions: [
      {
        question: {
          en: "What is the 'right to explanation' in automated decision-making?",
          es: "Que es el 'derecho a explicacion' en toma de decisiones automatizada?",
          de: "Was ist das 'Recht auf Erklaerung' bei automatisierten Entscheidungen?",
          nl: "Wat is het 'recht op uitleg' bij geautomatiseerde besluitvorming?"
        },
        options: [
          { en: "The legal right for individuals to understand how automated decisions affecting them were made", es: "El derecho legal de individuos a entender como se tomaron decisiones automatizadas que les afectan", de: "Das gesetzliche Recht von Individuen zu verstehen wie automatisierte Entscheidungen die sie betreffen getroffen wurden", nl: "Het wettelijke recht van individuen om te begrijpen hoe geautomatiseerde beslissingen die hen beïnvloeden werden genomen" },
          { en: "The right to explain AI systems to others", es: "El derecho a explicar sistemas de IA a otros", de: "Das Recht KI-Systeme anderen zu erklaeren", nl: "Het recht om AI systemen aan anderen uit te leggen" },
          { en: "The obligation to justify all automated processes", es: "La obligacion de justificar todos los procesos automatizados", de: "Die Verpflichtung alle automatisierten Prozesse zu rechtfertigen", nl: "De verplichting om alle geautomatiseerde processen te rechtvaardigen" },
          { en: "The right to teach AI systems", es: "El derecho a ensenar sistemas de IA", de: "Das Recht KI-Systeme zu unterrichten", nl: "Het recht om AI systemen te onderwijzen" }
        ],
        correct: 0,
        explanation: {
          en: "The right to explanation grants individuals the ability to receive meaningful information about the logic, significance, and consequences of automated decision-making that affects them, particularly in high-stakes contexts.",
          es: "El derecho a explicacion otorga a individuos la capacidad de recibir informacion significativa sobre la logica, significancia y consecuencias de toma de decisiones automatizada que les afecta, particularmente en contextos de alto riesgo.",
          de: "Das Recht auf Erklaerung gewaehrt Individuen die Faehigkeit bedeutungsvolle Informationen ueber die Logik, Bedeutung und Konsequenzen automatisierter Entscheidungsfindung zu erhalten die sie betrifft, besonders in risikoreicheren Kontexten.",
          nl: "Het recht op uitleg verleent individuen het vermogen om betekenisvolle informatie te ontvangen over de logica, betekenis en gevolgen van geautomatiseerde besluitvorming die hen beïnvloedt, vooral in situaties met hoge inzet."
        }
      },
      {
        question: {
          en: "What does 'human-in-the-loop' (HITL) mean in algorithmic decision-making?",
          es: "Que significa 'humano en el bucle' (HITL) en toma de decisiones algoritmica?",
          de: "Was bedeutet 'Human-in-the-Loop' (HITL) bei algorithmischer Entscheidungsfindung?",
          nl: "Wat betekent 'human-in-the-loop' (HITL) bij algoritmische besluitvorming?"
        },
        options: [
          { en: "Ensuring human oversight and intervention capability in automated decision processes", es: "Asegurar supervision humana y capacidad de intervencion en procesos de decision automatizados", de: "Menschliche Aufsicht und Interventionsfaehigkeit in automatisierten Entscheidungsprozessen sicherstellen", nl: "Menselijk toezicht en interventievermogen waarborgen in geautomatiseerde beslissingsprocessen" },
          { en: "Having humans physically connected to AI systems", es: "Tener humanos fisicamente conectados a sistemas de IA", de: "Menschen physisch mit KI-Systemen verbunden haben", nl: "Mensen fysiek verbonden hebben met AI systemen" },
          { en: "Creating circular decision-making processes", es: "Crear procesos circulares de toma de decisiones", de: "Zirkulaere Entscheidungsprozesse erstellen", nl: "Circulaire besluitvormingsprocessen creëren" },
          { en: "Replacing all AI decisions with human decisions", es: "Reemplazar todas las decisiones de IA con decisiones humanas", de: "Alle KI-Entscheidungen durch menschliche Entscheidungen ersetzen", nl: "Alle AI beslissingen vervangen door menselijke beslissingen" }
        ],
        correct: 0,
        explanation: {
          en: "Human-in-the-loop ensures that critical automated decisions maintain human oversight, allowing for intervention, validation, or override when necessary, especially in high-stakes scenarios affecting individual rights.",
          es: "Humano en el bucle asegura que decisiones automatizadas criticas mantengan supervision humana, permitiendo intervencion, validacion o anulacion cuando sea necesario, especialmente en escenarios de alto riesgo que afectan derechos individuales.",
          de: "Human-in-the-Loop stellt sicher dass kritische automatisierte Entscheidungen menschliche Aufsicht beibehalten und Intervention, Validierung oder Uebersteuerung wenn noetig ermoeglichen, besonders in risikoreichen Szenarien die individuelle Rechte betreffen.",
          nl: "Human-in-the-loop zorgt ervoor dat kritieke geautomatiseerde beslissingen menselijk toezicht behouden, wat interventie, validatie of overschrijving mogelijk maakt wanneer nodig, vooral in situaties met hoge inzet die individuele rechten beïnvloeden."
        }
      },
      {
        question: {
          en: "What is 'algorithmic due process' in automated decision systems?",
          es: "Que es 'debido proceso algoritmico' en sistemas de decision automatizada?",
          de: "Was ist 'algorithmisches ordentliches Verfahren' in automatisierten Entscheidungssystemen?",
          nl: "Wat is 'algoritmische rechtsgang' in geautomatiseerde beslissingsystemen?"
        },
        options: [
          { en: "Ensuring fair procedures and appeal mechanisms for algorithmic decisions affecting individuals", es: "Asegurar procedimientos justos y mecanismos de apelacion para decisiones algoritmicas que afectan individuos", de: "Faire Verfahren und Berufungsmechanismen fuer algorithmische Entscheidungen die Individuen betreffen sicherstellen", nl: "Eerlijke procedures en beroepsmechanismen waarborgen voor algoritmische beslissingen die individuen beïnvloeden" },
          { en: "Processing algorithms faster", es: "Procesar algoritmos mas rapido", de: "Algorithmen schneller verarbeiten", nl: "Algoritmes sneller verwerken" },
          { en: "Creating legal procedures for algorithm development", es: "Crear procedimientos legales para desarrollo de algoritmos", de: "Rechtliche Verfahren fuer Algorithmus-Entwicklung erstellen", nl: "Juridische procedures voor algoritme ontwikkeling creëren" },
          { en: "Documenting all algorithmic processes", es: "Documentar todos los procesos algoritmicos", de: "Alle algorithmischen Prozesse dokumentieren", nl: "Alle algoritmische processen documenteren" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic due process extends traditional due process rights to automated decision-making, ensuring individuals have notice, opportunity to be heard, and access to appeal processes when algorithms significantly impact their lives.",
          es: "El debido proceso algoritmico extiende derechos tradicionales de debido proceso a toma de decisiones automatizada, asegurando que individuos tengan notificacion, oportunidad de ser escuchados y acceso a procesos de apelacion cuando algoritmos impactan significativamente sus vidas.",
          de: "Algorithmisches ordentliches Verfahren erweitert traditionelle Verfahrensrechte auf automatisierte Entscheidungsfindung und stellt sicher dass Individuen Benachrichtigung, Gelegenheit gehoert zu werden und Zugang zu Berufungsverfahren haben wenn Algorithmen ihr Leben erheblich beeinflussen.",
          nl: "Algoritmische rechtsgang breidt traditionele rechtsgangrechten uit naar geautomatiseerde besluitvorming, waarbij individuen kennisgeving, de mogelijkheid om gehoord te worden en toegang tot beroepsprocedures krijgen wanneer algoritmes hun leven significant beïnvloeden."
        }
      },
      {
        question: {
          en: "What is 'informed consent' in the context of algorithmic decision-making?",
          es: "Que es 'consentimiento informado' en el contexto de toma de decisiones algoritmica?",
          de: "Was ist 'informierte Einwilligung' im Kontext algorithmischer Entscheidungsfindung?",
          nl: "Wat is 'geïnformeerde toestemming' in de context van algoritmische besluitvorming?"
        },
        options: [
          { en: "Individuals understanding and agreeing to how their data will be used in automated decisions", es: "Individuos entendiendo y acordando como sus datos seran usados en decisiones automatizadas", de: "Individuen verstehen und zustimmen wie ihre Daten in automatisierten Entscheidungen verwendet werden", nl: "Individuen begrijpen en instemmen met hoe hun data gebruikt zal worden in geautomatiseerde beslissingen" },
          { en: "AI systems asking permission before every decision", es: "Sistemas de IA pidiendo permiso antes de cada decision", de: "KI-Systeme fragen vor jeder Entscheidung um Erlaubnis", nl: "AI systemen vragen toestemming voor elke beslissing" },
          { en: "Informing users about algorithm existence", es: "Informar usuarios sobre existencia de algoritmos", de: "Benutzer ueber Algorithmus-Existenz informieren", nl: "Gebruikers informeren over het bestaan van algoritmes" },
          { en: "Getting consent from algorithm developers", es: "Obtener consentimiento de desarrolladores de algoritmos", de: "Zustimmung von Algorithmus-Entwicklern erhalten", nl: "Toestemming krijgen van algoritme ontwikkelaars" }
        ],
        correct: 0,
        explanation: {
          en: "Informed consent in algorithmic decision-making requires that individuals understand the scope, purpose, and potential consequences of automated processing of their data, and can meaningfully choose whether to participate.",
          es: "El consentimiento informado en toma de decisiones algoritmica requiere que individuos entiendan el alcance, proposito y consecuencias potenciales del procesamiento automatizado de sus datos, y puedan elegir significativamente si participar.",
          de: "Informierte Einwilligung in algorithmischer Entscheidungsfindung erfordert dass Individuen den Umfang, Zweck und potentielle Konsequenzen der automatisierten Verarbeitung ihrer Daten verstehen und bedeutungsvoll waehlen koennen ob sie teilnehmen.",
          nl: "Geïnformeerde toestemming bij algoritmische besluitvorming vereist dat individuen de reikwijdte, het doel en potentiële gevolgen van geautomatiseerde verwerking van hun data begrijpen, en betekenisvol kunnen kiezen of ze willen deelnemen."
        }
      },
      {
        question: {
          en: "What does 'algorithmic recourse' provide to individuals?",
          es: "Que proporciona el 'recurso algoritmico' a individuos?",
          de: "Was bietet 'algorithmischer Rechtsbehelf' Individuen?",
          nl: "Wat biedt 'algoritmische verhaal' aan individuen?"
        },
        options: [
          { en: "The ability to change their circumstances to achieve a different algorithmic outcome", es: "La capacidad de cambiar sus circunstancias para lograr un resultado algoritmico diferente", de: "Die Faehigkeit ihre Umstaende zu aendern um ein anderes algorithmisches Ergebnis zu erzielen", nl: "Het vermogen om hun omstandigheden te veranderen om een ander algoritmisch resultaat te bereiken" },
          { en: "Access to algorithm source code", es: "Acceso al codigo fuente del algoritmo", de: "Zugang zum Algorithmus-Quellcode", nl: "Toegang tot algoritme broncode" },
          { en: "The right to delete algorithmic decisions", es: "El derecho a eliminar decisiones algoritmicas", de: "Das Recht algorithmische Entscheidungen zu loeschen", nl: "Het recht om algoritmische beslissingen te verwijderen" },
          { en: "Training in algorithmic development", es: "Entrenamiento en desarrollo algoritmico", de: "Schulung in Algorithmus-Entwicklung", nl: "Training in algoritme ontwikkeling" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic recourse enables individuals to understand what actions they could take to change an unfavorable algorithmic decision, providing actionable pathways for improvement rather than just explanations.",
          es: "El recurso algoritmico permite a individuos entender que acciones podrian tomar para cambiar una decision algoritmica desfavorable, proporcionando caminos accionables para mejora en lugar de solo explicaciones.",
          de: "Algorithmischer Rechtsbehelf ermoeglicht es Individuen zu verstehen welche Handlungen sie ergreifen koennten um eine unguenstige algorithmische Entscheidung zu aendern, wodurch umsetzbare Verbesserungswege anstatt nur Erklaerungen geboten werden.",
          nl: "Algoritmische verhaal stelt individuen in staat te begrijpen welke acties ze zouden kunnen ondernemen om een ongunstige algoritmische beslissing te veranderen, wat uitvoerbare verbeteringswegen biedt in plaats van alleen uitleg."
        }
      },
      {
        question: {
          en: "What is 'predictive policing' and what are its ethical concerns?",
          es: "Que es 'policia predictiva' y cuales son sus preocupaciones eticas?",
          de: "Was ist 'predictive Policing' und was sind seine ethischen Bedenken?",
          nl: "Wat is 'predictive policing' en wat zijn de ethische zorgen?"
        },
        options: [
          { en: "Using algorithms to predict where crimes might occur, risking bias reinforcement and over-policing of certain communities", es: "Algoritmos para predecir donde podrian ocurrir crimenes, arriesgando refuerzo de sesgo y sobre-vigilancia", de: "Algorithmen um vorherzusagen wo Verbrechen auftreten koennten, mit Risiko von Bias-Verstaerkung und Ueberueberwachung", nl: "Algoritmes om te voorspellen waar misdaden plaatsvinden, met risico op bias versterking en overbeveiliging" },
          { en: "Training police officers to predict the future", es: "Entrenar oficiales de policia para predecir el futuro", de: "Polizeibeamte trainieren die Zukunft vorherzusagen", nl: "Politieagenten trainen om de toekomst te voorspellen" },
          { en: "Using crystal balls in law enforcement", es: "Usar bolas de cristal en aplicacion de la ley", de: "Kristallkugeln in der Strafverfolgung verwenden", nl: "Kristallen bollen gebruiken in rechtshandhaving" },
          { en: "Preventing all crimes before they happen", es: "Prevenir todos los crimenes antes de que sucedan", de: "Alle Verbrechen verhindern bevor sie passieren", nl: "Alle misdaden voorkomen voordat ze gebeuren" }
        ],
        correct: 0,
        explanation: {
          en: "Predictive policing uses data analytics to forecast potential criminal activity, but raises concerns about perpetuating historical biases, targeting marginalized communities, and creating feedback loops that worsen inequality.",
          es: "La policia predictiva usa analitica de datos para pronosticar actividad criminal potencial, pero genera preocupaciones sobre perpetuar sesgos historicos, dirigirse a comunidades marginalizadas y crear bucles de retroalimentacion que empeoran la desigualdad.",
          de: "Predictive Policing nutzt Datenanalyse um potentielle kriminelle Aktivitaet vorherzusagen, wirft aber Bedenken auf ueber die Verewigung historischer Voreingenommenheit, das Anvisieren marginalisierter Gemeinschaften und das Schaffen von Rueckkopplungsschleifen die Ungleichheit verschlechtern.",
          nl: "Predictive policing gebruikt data-analyse om potentiële criminele activiteit te voorspellen, maar roept zorgen op over het bestendigen van historische vooroordelen, het targeten van gemarginaliseerde gemeenschappen en het creëren van feedback loops die ongelijkheid verergeren."
        }
      },
      {
        question: {
          en: "What is 'automated hiring' and what ethical issues does it raise?",
          es: "Que es 'contratacion automatizada' y que problemas eticos plantea?",
          de: "Was ist 'automatisierte Einstellung' und welche ethischen Probleme wirft sie auf?",
          nl: "Wat is 'geautomatiseerde werving' en welke ethische problemen brengt het met zich mee?"
        },
        options: [
          { en: "Using AI to screen and select job candidates, potentially introducing bias and reducing human judgment in hiring decisions", es: "IA para screenen en selecteren van sollicitanten, mogelijk introducerend bias en reducerend menselijk oordeel", de: "KI um Stellenbewerber zu pruefen und auszuwaehlen, moeglicherweise mit Bias und reduziertem menschlichem Urteil", nl: "AI om sollicitanten te screenen en selecteren, mogelijk introducerend bias en reducerend menselijk oordeel" },
          { en: "Robots physically interviewing job candidates", es: "Robots entrevistando fisicamente candidatos de trabajo", de: "Roboter fuehren physisch Vorstellungsgespraeche mit Stellenbewerbern", nl: "Robots die fysiek sollicitatiegesprekken voeren" },
          { en: "Automatically creating job positions", es: "Crear automaticamente posiciones de trabajo", de: "Automatisch Stellenpositionen erstellen", nl: "Automatisch functies creëren" },
          { en: "Hiring only people who can work with AI", es: "Contratar solo personas que puedan trabajar con IA", de: "Nur Menschen einstellen die mit KI arbeiten koennen", nl: "Alleen mensen aannemen die met AI kunnen werken" }
        ],
        correct: 0,
        explanation: {
          en: "Automated hiring systems use algorithms to evaluate resumes, conduct initial screenings, and rank candidates, but can perpetuate employment discrimination, reduce diversity, and lack transparency in decision-making processes.",
          es: "Los sistemas de contratacion automatizada usan algoritmos para evaluar curriculos, conducir examenes iniciales y clasificar candidatos, pero pueden perpetuar discriminacion laboral, reducir diversidad y carecer de transparencia en procesos de toma de decisiones.",
          de: "Automatisierte Einstellungssysteme verwenden Algorithmen um Lebenslaeufe zu bewerten, erste Screenings durchzufuehren und Kandidaten zu bewerten, koennen aber Beschaeftigungsdiskriminierung verewigen, Vielfalt reduzieren und Transparenz in Entscheidungsprozessen fehlen lassen.",
          nl: "Geautomatiseerde wervingssystemen gebruiken algoritmes om cv's te evalueren, initiële screenings uit te voeren en kandidaten te rangschikken, maar kunnen werkgelegenheidsdiscriminatie bestendigen, diversiteit verminderen en transparantie in besluitvormingsprocessen missen."
        }
      },
      {
        question: {
          en: "What is 'algorithmic nudging' and what are its ethical implications?",
          es: "Que es 'empujon algoritmico' y cuales son sus implicaciones eticas?",
          de: "Was ist 'algorithmisches Nudging' und was sind seine ethischen Implikationen?",
          nl: "Wat is 'algoritmisch nudging' en wat zijn de ethische implicaties?"
        },
        options: [
          { en: "Using algorithms to subtly influence behavior while preserving choice, raising questions about manipulation and autonomy", es: "Algoritmos para influir sutilmente comportamiento preservando eleccion, planteando preguntas sobre manipulacion", de: "Algorithmen um Verhalten subtil zu beeinflussen waehrend Wahlfreiheit bewahrt wird, was Fragen aufwirft", nl: "Algoritmes om gedrag subtiel te beïnvloeden terwijl keuze behouden blijft, wat vragen oproept" },
          { en: "AI systems physically pushing users", es: "Sistemas de IA empujando fisicamente usuarios", de: "KI-Systeme schieben Benutzer physisch", nl: "AI systemen die gebruikers fysiek duwen" },
          { en: "Algorithms making sudden movements", es: "Algoritmos haciendo movimientos repentinos", de: "Algorithmen machen ploetzliche Bewegungen", nl: "Algoritmes die plotselinge bewegingen maken" },
          { en: "Nudging algorithms to work faster", es: "Empujar algoritmos para trabajar mas rapido", de: "Algorithmen anstossen schneller zu arbeiten", nl: "Algoritmes aansporen om sneller te werken" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic nudging uses behavioral insights and personalized algorithms to guide user choices in preferred directions while maintaining freedom of choice, but raises concerns about manipulation, consent, and who decides what constitutes 'beneficial' behavior.",
          es: "El empujon algoritmico usa insights de comportamiento y algoritmos personalizados para guiar elecciones de usuarios en direcciones preferidas mientras mantiene libertad de eleccion, pero genera preocupaciones sobre manipulacion, consentimiento y quien decide que constituye comportamiento 'beneficioso'.",
          de: "Algorithmisches Nudging nutzt Verhaltenserkenntnisse und personalisierte Algorithmen um Benutzerentscheidungen in bevorzugte Richtungen zu lenken waehrend Wahlfreiheit beibehalten wird, wirft aber Bedenken auf ueber Manipulation, Zustimmung und wer entscheidet was 'vorteilhaftes' Verhalten ausmacht.",
          nl: "Algoritmisch nudging gebruikt gedragsinzichten en gepersonaliseerde algoritmes om gebruikerskeuzes in gewenste richtingen te sturen terwijl vrijheid van keuze behouden blijft, maar roept zorgen op over manipulatie, toestemming en wie bepaalt wat 'gunstig' gedrag vormt."
        }
      },
      {
        question: {
          en: "What is 'counterfactual fairness' in algorithmic decision-making?",
          es: "Que es 'equidad contrafactual' en toma de decisiones algoritmica?",
          de: "Was ist 'kontrafaktische Fairness' bei algorithmischer Entscheidungsfindung?",
          nl: "Wat is 'contrafeitelijke eerlijkheid' bij algoritmische besluitvorming?"
        },
        options: [
          { en: "Ensuring decisions would be the same for individuals in a counterfactual world where they belonged to different demographic groups", es: "Asegurar que decisiones serian iguales para individuos en mundo contrafactual con diferentes grupos demograficos", de: "Sicherstellen dass Entscheidungen gleich waeren in kontrafaktischer Welt mit verschiedenen demografischen Gruppen", nl: "Ervoor zorgen dat beslissingen hetzelfde zouden zijn in contrafeitelijke wereld met verschillende demografische groepen" },
          { en: "Making decisions based on false information", es: "Tomar decisiones basadas en informacion falsa", de: "Entscheidungen basierend auf falschen Informationen treffen", nl: "Beslissingen nemen gebaseerd op valse informatie" },
          { en: "Creating algorithms that work backwards", es: "Crear algoritmos que funcionen al reves", de: "Algorithmen erstellen die rueckwaerts funktionieren", nl: "Algoritmes creëren die achterwaarts werken" },
          { en: "Ensuring all decisions are fair to everyone", es: "Asegurar que todas las decisiones sean justas para todos", de: "Sicherstellen dass alle Entscheidungen fuer jeden fair sind", nl: "Ervoor zorgen dat alle beslissingen eerlijk zijn voor iedereen" }
        ],
        correct: 0,
        explanation: {
          en: "Counterfactual fairness requires that algorithmic decisions for an individual would remain the same in a hypothetical world where only their protected characteristics (like race or gender) were different, helping address indirect discrimination.",
          es: "La equidad contrafactual requiere que decisiones algoritmicas para un individuo permanezcan iguales en un mundo hipotetico donde solo sus caracteristicas protegidas (como raza o genero) fueran diferentes, ayudando a abordar discriminacion indirecta.",
          de: "Kontrafaktische Fairness erfordert dass algorithmische Entscheidungen fuer ein Individuum in einer hypothetischen Welt wo nur ihre geschuetzten Eigenschaften (wie Rasse oder Geschlecht) anders waeren gleich bleiben wuerden, was hilft indirekte Diskriminierung anzugehen.",
          nl: "Contrafeitelijke eerlijkheid vereist dat algoritmische beslissingen voor een individu hetzelfde zouden blijven in een hypothetische wereld waar alleen hun beschermde kenmerken (zoals ras of geslacht) anders waren, wat helpt indirecte discriminatie aan te pakken."
        }
      },
      {
        question: {
          en: "What is 'procedural fairness' in automated decision systems?",
          es: "Que es 'equidad procesal' en sistemas de decision automatizada?",
          de: "Was ist 'Verfahrensfairness' in automatisierten Entscheidungssystemen?",
          nl: "Wat is 'procedurele eerlijkheid' in geautomatiseerde beslissingsystemen?"
        },
        options: [
          { en: "Ensuring the decision-making process itself is fair, transparent, and consistent across all individuals", es: "Asegurar que proceso de decision sea justo, transparente y consistente para todos", de: "Sicherstellen dass der Entscheidungsprozess selbst fair, transparent und konsistent fuer alle Individuen ist", nl: "Ervoor zorgen dat het besluitvormingsproces zelf eerlijk, transparant en consistent is voor alle individuen" },
          { en: "Making sure all procedures are automated", es: "Asegurar que todos los procedimientos esten automatizados", de: "Sicherstellen dass alle Verfahren automatisiert sind", nl: "Ervoor zorgen dat alle procedures geautomatiseerd zijn" },
          { en: "Following legal procedures exactly", es: "Seguir procedimientos legales exactamente", de: "Rechtliche Verfahren genau befolgen", nl: "Juridische procedures precies volgen" },
          { en: "Creating fair procedures for algorithm development", es: "Crear procedimientos justos para desarrollo de algoritmos", de: "Faire Verfahren fuer Algorithmus-Entwicklung erstellen", nl: "Eerlijke procedures creëren voor algoritme ontwikkeling" }
        ],
        correct: 0,
        explanation: {
          en: "Procedural fairness focuses on whether the process used to make decisions is fair, rather than just the outcomes, emphasizing transparency, consistency, accuracy, and the opportunity for individuals to understand and challenge decisions.",
          es: "La equidad procesal se enfoca en si el proceso usado para tomar decisiones es justo, en lugar de solo los resultados, enfatizando transparencia, consistencia, precision y la oportunidad para individuos de entender y desafiar decisiones.",
          de: "Verfahrensfairness konzentriert sich darauf ob der Prozess zur Entscheidungsfindung fair ist, anstatt nur auf die Ergebnisse, und betont Transparenz, Konsistenz, Genauigkeit und die Gelegenheit fuer Individuen Entscheidungen zu verstehen und anzufechten.",
          nl: "Procedurele eerlijkheid richt zich op of het proces dat gebruikt wordt om beslissingen te nemen eerlijk is, in plaats van alleen de uitkomsten, waarbij transparantie, consistentie, nauwkeurigheid en de mogelijkheid voor individuen om beslissingen te begrijpen en aan te vechten wordt benadrukt."
        }
      },
      {
        question: {
          en: "What is 'automation bias' and how does it affect decision-making?",
          es: "Que es 'sesgo de automatizacion' y como afecta la toma de decisiones?",
          de: "Was ist 'Automatisierungsvoreingenommenheit' und wie beeinflusst sie Entscheidungsfindung?",
          nl: "Wat is 'automatisering bias' en hoe beïnvloedt het besluitvorming?"
        },
        options: [
          { en: "The tendency to over-rely on automated systems and under-scrutinize their recommendations", es: "La tendencia a depender excesivamente de sistemas automatizados y escrutar insuficientemente sus recomendaciones", de: "Die Tendenz sich uebermaeßig auf automatisierte Systeme zu verlassen und ihre Empfehlungen unzureichend zu pruefn", nl: "De neiging om te veel te vertrouwen op geautomatiseerde systemen en hun aanbevelingen onvoldoende te onderzoeken" },
          { en: "Algorithms being biased against automation", es: "Algoritmos siendo sesgados contra automatizacion", de: "Algorithmen sind voreingenommen gegen Automatisierung", nl: "Algoritmes die bevooroordeeld zijn tegen automatisering" },
          { en: "Preferring manual processes over automated ones", es: "Preferir procesos manuales sobre automatizados", de: "Manuelle Prozesse automatisierten vorziehen", nl: "Handmatige processen verkiezen boven geautomatiseerde" },
          { en: "Automating biased human decisions", es: "Automatizar decisiones humanas sesgadas", de: "Voreingenommene menschliche Entscheidungen automatisieren", nl: "Bevooroordeelde menselijke beslissingen automatiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Automation bias leads people to over-trust algorithmic systems and fail to adequately monitor or question their outputs, potentially resulting in poor decisions when algorithms make errors or operate outside their intended scope.",
          es: "El sesgo de automatizacion lleva a personas a confiar excesivamente en sistemas algoritmicos y fallar en monitorear o cuestionar adecuadamente sus resultados, potencialmente resultando en decisiones pobres cuando algoritmos cometen errores u operan fuera de su alcance previsto.",
          de: "Automatisierungsvoreingenommenheit fuehrt dazu dass Menschen algorithmischen Systemen uebermaeßig vertrauen und versagen ihre Ausgaben angemessen zu ueberwachen oder zu hinterfragen, was moeglicherweise zu schlechten Entscheidungen fuehrt wenn Algorithmen Fehler machen oder außerhalb ihres beabsichtigten Bereichs operieren.",
          nl: "Automatisering bias leidt ertoe dat mensen te veel vertrouwen hebben in algoritmische systemen en falen om hun outputs adequaat te monitoren of te bevragen, wat mogelijk resulteert in slechte beslissingen wanneer algoritmes fouten maken of buiten hun beoogde bereik opereren."
        }
      },
      {
        question: {
          en: "What does 'meaningful human control' require in automated decision-making?",
          es: "Que requiere 'control humano significativo' en toma de decisiones automatizada?",
          de: "Was erfordert 'bedeutungsvolle menschliche Kontrolle' bei automatisierter Entscheidungsfindung?",
          nl: "Wat vereist 'betekenisvolle menselijke controle' bij geautomatiseerde besluitvorming?"
        },
        options: [
          { en: "Humans having sufficient knowledge, capability, and authority to oversee and intervene in automated decisions", es: "Humanos teniendo conocimiento suficiente, capacidad y autoridad para supervisar e intervenir en decisiones automatizadas", de: "Menschen mit ausreichend Wissen, Faehigkeit und Autoritaet um automatisierte Entscheidungen zu ueberwachen", nl: "Mensen hebben voldoende kennis, vermogen en autoriteit om geautomatiseerde beslissingen te overzien en in te grijpen" },
          { en: "Humans controlling AI system hardware", es: "Humanos controlando hardware de sistemas de IA", de: "Menschen kontrollieren KI-System-Hardware", nl: "Mensen controleren AI systeem hardware" },
          { en: "Having humans approve every automated decision", es: "Tener humanos aprobando cada decision automatizada", de: "Menschen jede automatisierte Entscheidung genehmigen lassen", nl: "Mensen elke geautomatiseerde beslissing laten goedkeuren" },
          { en: "Ensuring humans understand programming languages", es: "Asegurar que humanos entiendan lenguajes de programacion", de: "Sicherstellen dass Menschen Programmiersprachen verstehen", nl: "Ervoor zorgen dat mensen programmeertalen begrijpen" }
        ],
        correct: 0,
        explanation: {
          en: "Meaningful human control requires that human operators have the necessary understanding, capability, and authority to effectively oversee automated systems, make informed decisions about their use, and intervene when necessary.",
          es: "El control humano significativo requiere que operadores humanos tengan el entendimiento necesario, capacidad y autoridad para supervisar efectivamente sistemas automatizados, tomar decisiones informadas sobre su uso e intervenir cuando sea necesario.",
          de: "Bedeutungsvolle menschliche Kontrolle erfordert dass menschliche Operatoren das notwendige Verstaendnis, die Faehigkeit und Autoritaet haben um automatisierte Systeme effektiv zu ueberwachen, informierte Entscheidungen ueber ihre Nutzung zu treffen und bei Bedarf einzugreifen.",
          nl: "Betekenisvolle menselijke controle vereist dat menselijke operators het noodzakelijke begrip, vermogen en autoriteit hebben om geautomatiseerde systemen effectief te overzien, geïnformeerde beslissingen te nemen over hun gebruik en in te grijpen wanneer nodig."
        }
      },
      {
        question: {
          en: "What is 'algorithmic impact assessment' and why is it important?",
          es: "Que es 'evaluacion de impacto algoritmico' y por que es importante?",
          de: "Was ist 'algorithmische Folgenabschaetzung' und warum ist sie wichtig?",
          nl: "Wat is 'algoritmische impact beoordeling' en waarom is het belangrijk?"
        },
        options: [
          { en: "Systematic evaluation of potential risks, benefits, and societal impacts before deploying algorithmic systems", es: "Evaluacion sistematica de riesgos potenciales, beneficios e impactos sociales antes de desplegar sistemas algoritmicos", de: "Systematische Bewertung potentieller Risiken, Vorteile und Auswirkungen vor Bereitstellung algorithmischer Systeme", nl: "Systematische evaluatie van potentiële risico's, voordelen en impact voor implementeren van algoritmische systemen" },
          { en: "Measuring algorithm processing speed", es: "Medir velocidad de procesamiento de algoritmos", de: "Algorithmus-Verarbeitungsgeschwindigkeit messen", nl: "Algoritme verwerkingssnelheid meten" },
          { en: "Testing algorithm accuracy only", es: "Probar solo precision de algoritmos", de: "Nur Algorithmus-Genauigkeit testen", nl: "Alleen algoritme nauwkeurigheid testen" },
          { en: "Assessing financial impact of algorithms", es: "Evaluar impacto financiero de algoritmos", de: "Finanzielle Auswirkungen von Algorithmen bewerten", nl: "Financiële impact van algoritmes beoordelen" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic impact assessments help identify potential harms, biases, and unintended consequences before deployment, enabling organizations to mitigate risks and ensure algorithmic systems serve the public interest responsibly.",
          es: "Las evaluaciones de impacto algoritmico ayudan a identificar danos potenciales, sesgos y consecuencias no intencionadas antes del despliegue, permitiendo a organizaciones mitigar riesgos y asegurar que sistemas algoritmicos sirvan al interes publico responsablemente.",
          de: "Algorithmische Folgenabschaetzungen helfen potentielle Schaeden, Voreingenommenheiten und unbeabsichtigte Konsequenzen vor der Bereitstellung zu identifizieren, wodurch Organisationen Risiken mindern und sicherstellen koennen dass algorithmische Systeme dem oeffentlichen Interesse verantwortlich dienen.",
          nl: "Algoritmische impact beoordelingen helpen potentiële schade, vooroordelen en onbedoelde gevolgen te identificeren voor implementatie, waardoor organisaties risico's kunnen beperken en ervoor zorgen dat algoritmische systemen het publieke belang verantwoordelijk dienen."
        }
      },
      {
        question: {
          en: "What is 'consent fatigue' in algorithmic decision-making contexts?",
          es: "Que es 'fatiga de consentimiento' en contextos de toma de decisiones algoritmica?",
          de: "Was ist 'Einwilligungsmuedigkeit' in Kontexten algorithmischer Entscheidungsfindung?",
          nl: "Wat is 'toestemmingsmoeheid' in contexten van algoritmische besluitvorming?"
        },
        options: [
          { en: "When individuals become overwhelmed by constant consent requests and stop making informed decisions", es: "Cuando individuos se abruman por solicitudes constantes de consentimiento y dejan decisiones informadas", de: "Wenn Individuen von Einwilligungsanfragen ueberwaeltigt werden und informierte Entscheidungen aufhoeren", nl: "Wanneer individuen overweldigd raken door toestemmingsverzoeken en stoppen met geïnformeerde beslissingen" },
          { en: "Algorithms getting tired of asking for consent", es: "Algoritmos cansandose de pedir consentimiento", de: "Algorithmen werden muede Einwilligung zu verlangen", nl: "Algoritmes die moe worden van het vragen om toestemming" },
          { en: "People refusing to give any consent", es: "Personas negandose a dar cualquier consentimiento", de: "Menschen verweigern jede Einwilligung zu geben", nl: "Mensen weigeren enige toestemming te geven" },
          { en: "Consent systems breaking down", es: "Sistemas de consentimiento descomponiendose", de: "Einwilligungssysteme brechen zusammen", nl: "Toestemmingssystemen breken af" }
        ],
        correct: 0,
        explanation: {
          en: "Consent fatigue occurs when people are bombarded with so many consent requests that they develop 'click-through' behavior, automatically agreeing without reading or understanding terms, undermining the principle of informed consent.",
          es: "La fatiga de consentimiento ocurre cuando personas son bombardeadas con tantas solicitudes de consentimiento que desarrollan comportamiento de 'click-through', acordando automaticamente sin leer o entender terminos, socavando el principio de consentimiento informado.",
          de: "Einwilligungsmuedigkeit tritt auf wenn Menschen mit so vielen Einwilligungsanfragen bombardiert werden dass sie 'Click-Through'-Verhalten entwickeln, automatisch zustimmen ohne Bedingungen zu lesen oder zu verstehen, was das Prinzip der informierten Einwilligung untergräbt.",
          nl: "Toestemmingsmoeheid treedt op wanneer mensen gebombardeerd worden met zoveel toestemmingsverzoeken dat ze 'doorklik' gedrag ontwikkelen, automatisch akkoord gaan zonder voorwaarden te lezen of begrijpen, wat het principe van geïnformeerde toestemming ondermijnt."
        }
      },
      {
        question: {
          en: "What is 'distributed responsibility' in algorithmic decision-making?",
          es: "Que es 'responsabilidad distribuida' en toma de decisiones algoritmica?",
          de: "Was ist 'verteilte Verantwortung' bei algorithmischer Entscheidungsfindung?",
          nl: "Wat is 'gedistribueerde verantwoordelijkheid' bij algoritmische besluitvorming?"
        },
        options: [
          { en: "The challenge of assigning accountability when multiple actors contribute to algorithmic decisions", es: "El desafio de asignar responsabilidad cuando multiples actores contribuyen a decisiones algoritmicas", de: "Die Herausforderung Verantwortlichkeit zuzuweisen wenn mehrere Akteure zu algorithmischen Entscheidungen beitragen", nl: "Uitdaging van toewijzen verantwoordelijkheid wanneer meerdere actoren bijdragen aan algoritmische beslissingen" },
          { en: "Spreading algorithms across multiple computers", es: "Distribuir algoritmos en multiples computadoras", de: "Algorithmen auf mehrere Computer verteilen", nl: "Algoritmes verspreiden over meerdere computers" },
          { en: "Making everyone equally responsible", es: "Hacer a todos igualmente responsables", de: "Jeden gleich verantwortlich machen", nl: "Iedereen even verantwoordelijk maken" },
          { en: "Distributing decisions to different departments", es: "Distribuir decisiones a diferentes departamentos", de: "Entscheidungen an verschiedene Abteilungen verteilen", nl: "Beslissingen verdelen over verschillende afdelingen" }
        ],
        correct: 0,
        explanation: {
          en: "Distributed responsibility occurs when algorithmic decision-making involves multiple stakeholders (developers, deployers, users, data providers) making it difficult to assign clear accountability for outcomes, potentially creating 'responsibility gaps'.",
          es: "La responsabilidad distribuida ocurre cuando toma de decisiones algoritmica involucra multiples partes interesadas (desarrolladores, implementadores, usuarios, proveedores de datos) haciendo dificil asignar responsabilidad clara por resultados, potencialmente creando 'brechas de responsabilidad'.",
          de: "Verteilte Verantwortung tritt auf wenn algorithmische Entscheidungsfindung mehrere Stakeholder (Entwickler, Bereitsteller, Benutzer, Datenanbieter) involviert wodurch es schwierig wird klare Verantwortlichkeit fuer Ergebnisse zuzuweisen, was moeglicherweise 'Verantwortungsluecken' schafft.",
          nl: "Gedistribueerde verantwoordelijkheid treedt op wanneer algoritmische besluitvorming meerdere stakeholders (ontwikkelaars, implementeerders, gebruikers, dataverschaffers) behelst waardoor het moeilijk wordt om duidelijke verantwoordelijkheid voor uitkomsten toe te wijzen, wat mogelijk 'verantwoordelijkheidsgaten' creëert."
        }
      },
      {
        question: {
          en: "What does 'contextual integrity' mean in algorithmic decision-making?",
          es: "Que significa 'integridad contextual' en toma de decisiones algoritmica?",
          de: "Was bedeutet 'kontextuelle Integritaet' bei algorithmischer Entscheidungsfindung?",
          nl: "Wat betekent 'contextuele integriteit' bij algoritmische besluitvorming?"
        },
        options: [
          { en: "Ensuring data and decisions respect the norms and expectations of their original context", es: "Asegurar que datos y decisiones respeten las normas y expectativas de su contexto original", de: "Sicherstellen dass Daten und Entscheidungen die Normen und Erwartungen ihres urspruenglichen Kontexts respektieren", nl: "Ervoor zorgen dat data en beslissingen de normen en verwachtingen van hun oorspronkelijke context respecteren" },
          { en: "Keeping algorithms consistent across all contexts", es: "Mantener algoritmos consistentes en todos los contextos", de: "Algorithmen in allen Kontexten konsistent halten", nl: "Algoritmes consistent houden over alle contexten" },
          { en: "Protecting algorithm integrity from corruption", es: "Proteger integridad de algoritmos de corrupcion", de: "Algorithmus-Integritaet vor Korruption schuetzen", nl: "Algoritme integriteit beschermen tegen corruptie" },
          { en: "Using the same standards everywhere", es: "Usar los mismos estandares en todas partes", de: "Ueberall die gleichen Standards verwenden", nl: "Overal dezelfde standaarden gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Contextual integrity recognizes that information has different meanings and appropriate uses depending on context, requiring algorithmic systems to respect the specific norms, expectations, and constraints of different social and institutional settings.",
          es: "La integridad contextual reconoce que informacion tiene diferentes significados y usos apropiados dependiendo del contexto, requiriendo que sistemas algoritmicos respeten las normas especificas, expectativas y restricciones de diferentes entornos sociales e institucionales.",
          de: "Kontextuelle Integritaet erkennt dass Information verschiedene Bedeutungen und angemessene Verwendungen je nach Kontext hat und erfordert dass algorithmische Systeme die spezifischen Normen, Erwartungen und Beschraenkungen verschiedener sozialer und institutioneller Umgebungen respektieren.",
          nl: "Contextuele integriteit erkent dat informatie verschillende betekenissen en juiste toepassingen heeft afhankelijk van de context, wat vereist dat algoritmische systemen de specifieke normen, verwachtingen en beperkingen van verschillende sociale en institutionele omgevingen respecteren."
        }
      },
      {
        question: {
          en: "What is 'decision provenance' in algorithmic systems?",
          es: "Que es 'procedencia de decision' en sistemas algoritmicos?",
          de: "Was ist 'Entscheidungsherkunft' in algorithmischen Systemen?",
          nl: "Wat is 'beslissingsherkomst' in algoritmische systemen?"
        },
        options: [
          { en: "The ability to trace and document the complete history of how an algorithmic decision was made", es: "La capacidad de rastrear y documentar la historia completa de como se tomo una decision algoritmica", de: "Faehigkeit vollstaendige Geschichte zu verfolgen wie algorithmische Entscheidung getroffen wurde", nl: "Het vermogen om de volledige geschiedenis van hoe een algoritmische beslissing werd genomen te traceren en documenteren" },
          { en: "Where algorithms come from geographically", es: "De donde vienen geograficamente los algoritmos", de: "Woher Algorithmen geografisch kommen", nl: "Waar algoritmes geografisch vandaan komen" },
          { en: "The origin of training data", es: "El origen de datos de entrenamiento", de: "Die Herkunft der Trainingsdaten", nl: "De oorsprong van trainingsdata" },
          { en: "Who invented the algorithm", es: "Quien invento el algoritmo", de: "Wer den Algorithmus erfunden hat", nl: "Wie het algoritme heeft uitgevonden" }
        ],
        correct: 0,
        explanation: {
          en: "Decision provenance involves maintaining comprehensive records of the data inputs, processing steps, model versions, and human interventions that contributed to specific algorithmic decisions, enabling accountability and debugging.",
          es: "La procedencia de decision involucra mantener registros comprensivos de las entradas de datos, pasos de procesamiento, versiones de modelo e intervenciones humanas que contribuyeron a decisiones algoritmicas especificas, permitiendo responsabilidad y depuracion.",
          de: "Entscheidungsherkunft beinhaltet die Fuehrung umfassender Aufzeichnungen der Dateneingaben, Verarbeitungsschritte, Modellversionen und menschlichen Interventionen die zu spezifischen algorithmischen Entscheidungen beitrugen, was Verantwortlichkeit und Debugging ermoeglicht.",
          nl: "Beslissingsherkomst houdt het bijhouden van uitgebreide registraties in van data-invoer, verwerkingsstappen, modelversies en menselijke interventies die bijdroegen aan specifieke algoritmische beslissingen, wat verantwoording en debugging mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is 'participatory design' in the context of algorithmic decision systems?",
          es: "Que es 'diseno participativo' en el contexto de sistemas de decision algoritmica?",
          de: "Was ist 'partizipatives Design' im Kontext algorithmischer Entscheidungssysteme?",
          nl: "Wat is 'participatief ontwerp' in de context van algoritmische beslissingssystemen?"
        },
        options: [
          { en: "Involving affected communities and stakeholders in the design and evaluation of algorithmic systems", es: "Involucrar comunidades afectadas y partes interesadas en el diseno y evaluacion de sistemas algoritmicos", de: "Betroffene Gemeinschaften und Stakeholder in das Design und die Bewertung algorithmischer Systeme einbeziehen", nl: "Betrokken gemeenschappen en stakeholders betrekken bij het ontwerp en de evaluatie van algoritmische systemen" },
          { en: "Having multiple people participate in coding", es: "Tener multiples personas participando en codificacion", de: "Mehrere Personen an der Codierung teilnehmen lassen", nl: "Meerdere mensen laten deelnemen aan het programmeren" },
          { en: "Designing systems that encourage participation", es: "Disenar sistemas que fomenten participacion", de: "Systeme entwerfen die Teilnahme foerdern", nl: "Systemen ontwerpen die participatie aanmoedigen" },
          { en: "Using crowd-sourced design ideas", es: "Usar ideas de diseno de origen colaborativo", de: "Crowd-Source-Design-Ideen verwenden", nl: "Crowd-sourced ontwerpideeën gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Participatory design ensures that those who will be affected by algorithmic systems have meaningful input into their development, helping identify potential harms, cultural considerations, and alternative approaches that might not be apparent to developers.",
          es: "El diseno participativo asegura que aquellos que seran afectados por sistemas algoritmicos tengan aporte significativo en su desarrollo, ayudando a identificar danos potenciales, consideraciones culturales y enfoques alternativos que podrian no ser aparentes para desarrolladores.",
          de: "Partizipatives Design stellt sicher dass diejenigen die von algorithmischen Systemen betroffen sein werden bedeutungsvolle Eingaben in ihre Entwicklung haben, was hilft potentielle Schaeden, kulturelle Ueberlegungen und alternative Ansaetze zu identifizieren die Entwicklern moeglicherweise nicht offensichtlich sind.",
          nl: "Participatief ontwerp zorgt ervoor dat degenen die beïnvloed zullen worden door algoritmische systemen betekenisvolle input hebben in hun ontwikkeling, wat helpt bij het identificeren van potentiële schade, culturele overwegingen en alternatieve benaderingen die mogelijk niet duidelijk zijn voor ontwikkelaars."
        }
      },
      {
        question: {
          en: "What does 'algorithmic sovereignty' mean for marginalized communities?",
          es: "Que significa 'soberania algoritmica' para comunidades marginalizadas?",
          de: "Was bedeutet 'algorithmische Souveraenitaet' fuer marginalisierte Gemeinschaften?",
          nl: "Wat betekent 'algoritmische soevereiniteit' voor gemarginaliseerde gemeenschappen?"
        },
        options: [
          { en: "The right to self-determination over how algorithmic systems affect their communities and data", es: "El derecho a autodeterminacion sobre como sistemas algoritmicos afectan sus comunidades y datos", de: "Das Recht auf Selbstbestimmung darueber wie algorithmische Systeme ihre Gemeinschaften und Daten beeinflussen", nl: "Het recht op zelfbeschikking over hoe algoritmische systemen hun gemeenschappen en data beïnvloeden" },
          { en: "Creating separate algorithms for each community", es: "Crear algoritmos separados para cada comunidad", de: "Separate Algorithmen fuer jede Gemeinschaft erstellen", nl: "Aparte algoritmes creëren voor elke gemeenschap" },
          { en: "Giving communities control over AI companies", es: "Dar a comunidades control sobre empresas de IA", de: "Gemeinschaften Kontrolle ueber KI-Unternehmen geben", nl: "Gemeenschappen controle geven over AI bedrijven" },
          { en: "Preventing algorithm use in certain areas", es: "Prevenir uso de algoritmos en ciertas areas", de: "Algorithmus-Nutzung in bestimmten Bereichen verhindern", nl: "Algoritme gebruik in bepaalde gebieden voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic sovereignty empowers marginalized communities to have control over algorithmic systems that impact them, including data governance, system design input, and the right to reject or modify algorithmic interventions that don't align with community values.",
          es: "La soberania algoritmica empodera a comunidades marginalizadas para tener control sobre sistemas algoritmicos que les impactan, incluyendo gobernanza de datos, aporte en diseno de sistemas y el derecho a rechazar o modificar intervenciones algoritmicas que no se alineen con valores comunitarios.",
          de: "Algorithmische Souveraenitaet befaehigt marginalisierte Gemeinschaften Kontrolle ueber algorithmische Systeme zu haben die sie beeinflussen, einschliesslich Daten-Governance, System-Design-Input und dem Recht algorithmische Interventionen abzulehnen oder zu modifizieren die nicht mit Gemeinschaftswerten uebereinstimmen.",
          nl: "Algoritmische soevereiniteit stelt gemarginaliseerde gemeenschappen in staat om controle te hebben over algoritmische systemen die hen beïnvloeden, inclusief data governance, systeem ontwerp input en het recht om algoritmische interventies af te wijzen of te wijzigen die niet aansluiten bij gemeenschapswaarden."
        }
      },
      {
        question: {
          en: "What is 'algorithmic due process' in automated decision-making?",
          es: "Que es 'debido proceso algoritmico' en toma de decisiones automatizada?",
          de: "Was ist 'algorithmisches ordentliches Verfahren' bei automatisierten Entscheidungen?",
          nl: "Wat is 'algoritmisch behoorlijk bestuur' in geautomatiseerde besluitvorming?"
        },
        options: [
          { en: "Fair procedures ensuring transparency, accountability, and appeal rights in AI-driven decisions", es: "Procedimientos justos asegurando transparencia, responsabilidad y derechos de apelacion en decisiones impulsadas por IA", de: "Faire Verfahren die Transparenz, Verantwortlichkeit und Berufungsrechte bei KI-gesteuerten Entscheidungen sicherstellen", nl: "Eerlijke procedures die transparantie, verantwoordelijkheid en beroepsrechten waarborgen in AI-gedreven beslissingen" },
          { en: "Programming algorithms in proper sequence", es: "Programar algoritmos en secuencia apropiada", de: "Algorithmen in ordnungsgemaeßer Reihenfolge programmieren", nl: "Algoritmes in juiste volgorde programmeren" },
          { en: "Testing AI systems before deployment", es: "Probar sistemas de IA antes del despliegue", de: "KI-Systeme vor dem Einsatz testen", nl: "AI systemen testen voor implementatie" },
          { en: "Following software development best practices", es: "Seguir mejores practicas de desarrollo de software", de: "Best Practices der Softwareentwicklung befolgen", nl: "Best practices voor software ontwikkeling volgen" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic due process refers to the procedural safeguards necessary when AI systems make decisions affecting individuals, including rights to explanation, review, appeal, and human oversight to ensure fairness and protect against arbitrary or discriminatory outcomes.",
          es: "El debido proceso algoritmico se refiere a las salvaguardas procesales necesarias cuando los sistemas de IA toman decisiones que afectan a individuos, incluyendo derechos a explicacion, revision, apelacion y supervision humana para asegurar equidad y proteger contra resultados arbitrarios o discriminatorios.",
          de: "Algorithmisches ordentliches Verfahren bezieht sich auf die verfahrensrechtlichen Schutzmaßnahmen die notwendig sind wenn KI-Systeme Entscheidungen treffen die Individuen betreffen, einschließlich Rechte auf Erklaerung, Ueberpruefung, Berufung und menschliche Aufsicht um Fairness sicherzustellen und vor willkuerlichen oder diskriminierenden Ergebnissen zu schuetzen.",
          nl: "Algoritmisch behoorlijk bestuur verwijst naar de procedurele waarborgen die nodig zijn wanneer AI systemen beslissingen nemen die individuen beïnvloeden, inclusief rechten op uitleg, herziening, beroep en menselijk toezicht om eerlijkheid te waarborgen en te beschermen tegen willekeurige of discriminerende uitkomsten."
        }
      },
      {
        question: {
          en: "What is 'group fairness' versus 'individual fairness' in algorithmic decisions?",
          es: "Que es 'equidad grupal' versus 'equidad individual' en decisiones algoritmicas?",
          de: "Was ist 'Gruppenfairness' versus 'individuelle Fairness' bei algorithmischen Entscheidungen?",
          nl: "Wat is 'groep eerlijkheid' versus 'individuele eerlijkheid' bij algoritmische beslissingen?"
        },
        options: [
          { en: "Group fairness focuses on equal outcomes across demographics; individual fairness treats similar people similarly", es: "Equidad grupal se enfoca en resultados iguales entre demografias; equidad individual trata personas similares similarmente", de: "Gruppenfairness fokussiert auf gleiche Ergebnisse ueber Demografien; individuelle Fairness behandelt aehnliche Menschen aehnlich", nl: "Groep eerlijkheid richt zich op gelijke uitkomsten tussen demografieën; individuele eerlijkheid behandelt vergelijkbare mensen vergelijkbaar" },
          { en: "Both concepts mean exactly the same thing", es: "Ambos conceptos significan exactamente lo mismo", de: "Beide Konzepte bedeuten genau dasselbe", nl: "Beide concepten betekenen precies hetzelfde" },
          { en: "Group fairness is for organizations; individual fairness is for people", es: "Equidad grupal es para organizaciones; equidad individual es para personas", de: "Gruppenfairness ist fuer Organisationen; individuelle Fairness ist fuer Menschen", nl: "Groep eerlijkheid is voor organisaties; individuele eerlijkheid is voor mensen" },
          { en: "Group fairness applies to large datasets; individual fairness to small ones", es: "Equidad grupal aplica a grandes conjuntos de datos; equidad individual a pequenos", de: "Gruppenfairness gilt fuer grosse Datensaetze; individuelle Fairness fuer kleine", nl: "Groep eerlijkheid geldt voor grote datasets; individuele eerlijkheid voor kleine" }
        ],
        correct: 0,
        explanation: {
          en: "Group fairness ensures statistical parity or equal error rates across demographic groups, while individual fairness requires that similar individuals receive similar algorithmic treatment regardless of group membership, creating tension between these two fairness notions.",
          es: "La equidad grupal asegura paridad estadistica o tasas de error iguales entre grupos demograficos, mientras que equidad individual requiere que individuos similares reciban trato algoritmico similar independientemente de pertenencia grupal, creando tension entre estas dos nociones de equidad.",
          de: "Gruppenfairness stellt statistische Paritaet oder gleiche Fehlerraten ueber demografische Gruppen sicher, waehrend individuelle Fairness erfordert dass aehnliche Individuen aehnliche algorithmische Behandlung erhalten unabhaengig von Gruppenzugehoerigkeit, was Spannung zwischen diesen beiden Fairness-Vorstellungen schafft.",
          nl: "Groep eerlijkheid waarborgt statistische pariteit of gelijke foutpercentages tussen demografische groepen, terwijl individuele eerlijkheid vereist dat vergelijkbare individuen vergelijkbare algoritmische behandeling krijgen ongeacht groepslidmaatschap, wat spanning creëert tussen deze twee eerlijkheidsnoties."
        }
      },
      {
        question: {
          en: "What is 'demographic parity' in algorithmic fairness?",
          es: "Que es 'paridad demografica' en equidad algoritmica?",
          de: "Was ist 'demografische Paritaet' bei algorithmischer Fairness?",
          nl: "Wat is 'demografische pariteit' bij algoritmische eerlijkheid?"
        },
        options: [
          { en: "Ensuring algorithms produce similar positive outcome rates across different demographic groups", es: "Asegurar que algoritmos produzcan tasas de resultados positivos similares entre grupos demograficos diferentes", de: "Sicherstellen dass Algorithmen aehnliche positive Ergebnisraten ueber verschiedene demografische Gruppen produzieren", nl: "Ervoor zorgen dat algoritmes vergelijkbare positieve uitkomstpercentages produceren over verschillende demografische groepen" },
          { en: "Making sure all demographics have equal data representation", es: "Asegurar que todas las demografias tengan representacion de datos igual", de: "Sicherstellen dass alle Demografien gleiche Datenrepraesentation haben", nl: "Ervoor zorgen dat alle demografieën gelijke data representatie hebben" },
          { en: "Treating all demographic groups identically", es: "Tratar todos los grupos demograficos identicamente", de: "Alle demografischen Gruppen identisch behandeln", nl: "Alle demografische groepen identiek behandelen" },
          { en: "Balancing demographic variables in algorithms", es: "Balancear variables demograficas en algoritmos", de: "Demografische Variablen in Algorithmen ausbalancieren", nl: "Demografische variabelen in algoritmes balanceren" }
        ],
        correct: 0,
        explanation: {
          en: "Demographic parity requires that algorithmic decisions produce equal acceptance rates, approval rates, or other positive outcomes across different demographic groups, regardless of base rates or other factors, aiming to prevent disparate impact.",
          es: "La paridad demografica requiere que decisiones algoritmicas produzcan tasas de aceptacion, aprobacion u otros resultados positivos iguales entre diferentes grupos demograficos, independientemente de tasas base u otros factores, apuntando a prevenir impacto dispar.",
          de: "Demografische Paritaet erfordert dass algorithmische Entscheidungen gleiche Akzeptanzraten, Genehmigungsraten oder andere positive Ergebnisse ueber verschiedene demografische Gruppen produzieren, unabhaengig von Basisraten oder anderen Faktoren, mit dem Ziel unterschiedliche Auswirkungen zu verhindern.",
          nl: "Demografische pariteit vereist dat algoritmische beslissingen gelijke acceptatiepercentages, goedkeuringspercentages of andere positieve uitkomsten produceren over verschillende demografische groepen, ongeacht basispercentages of andere factoren, met als doel ongelijke impact te voorkomen."
        }
      },
      {
        question: {
          en: "What is 'equalized odds' in fair machine learning?",
          es: "Que es 'probabilidades equalizadas' en aprendizaje automatico justo?",
          de: "Was sind 'ausgeglichene Gewinnchancen' im fairen maschinellen Lernen?",
          nl: "Wat is 'gelijkgestelde kansen' in eerlijk machine learning?"
        },
        options: [
          { en: "Requiring equal true positive and false positive rates across demographic groups", es: "Requerir tasas de verdaderos positivos y falsos positivos iguales entre grupos demograficos", de: "Gleiche Richtig-Positiv- und Falsch-Positiv-Raten ueber demografische Gruppen erfordern", nl: "Vereisen van gelijke true positive en false positive percentages over demografische groepen" },
          { en: "Making all predictions equally probable", es: "Hacer todas las predicciones igualmente probables", de: "Alle Vorhersagen gleich wahrscheinlich machen", nl: "Alle voorspellingen even waarschijnlijk maken" },
          { en: "Balancing positive and negative outcomes equally", es: "Balancear resultados positivos y negativos igualmente", de: "Positive und negative Ergebnisse gleich ausbalancieren", nl: "Positieve en negatieve uitkomsten gelijk balanceren" },
          { en: "Ensuring equal accuracy across all groups", es: "Asegurar precision igual en todos los grupos", de: "Gleiche Genauigkeit ueber alle Gruppen sicherstellen", nl: "Gelijke nauwkeurigheid over alle groepen waarborgen" }
        ],
        correct: 0,
        explanation: {
          en: "Equalized odds requires that algorithmic classifiers have equal true positive rates and equal false positive rates across protected groups, ensuring that prediction errors are distributed fairly regardless of demographic characteristics.",
          es: "Las probabilidades equalizadas requieren que clasificadores algoritmicos tengan tasas de verdaderos positivos iguales y tasas de falsos positivos iguales entre grupos protegidos, asegurando que errores de prediccion se distribuyan justamente independientemente de caracteristicas demograficas.",
          de: "Ausgeglichene Gewinnchancen erfordern dass algorithmische Klassifikatoren gleiche Richtig-Positiv-Raten und gleiche Falsch-Positiv-Raten ueber geschuetzte Gruppen haben, was sicherstellt dass Vorhersagefehler fair verteilt werden unabhaengig von demografischen Merkmalen.",
          nl: "Gelijkgestelde kansen vereisen dat algoritmische classificeerders gelijke true positive percentages en gelijke false positive percentages hebben over beschermde groepen, wat waarborgt dat voorspellingsfouten eerlijk verdeeld worden ongeacht demografische kenmerken."
        }
      },
      {
        question: {
          en: "What is 'proxy discrimination' in algorithmic decision-making?",
          es: "Que es 'discriminacion por proxy' en toma de decisiones algoritmica?",
          de: "Was ist 'Proxy-Diskriminierung' bei algorithmischer Entscheidungsfindung?",
          nl: "Wat is 'proxy discriminatie' bij algoritmische besluitvorming?"
        },
        options: [
          { en: "Using seemingly neutral variables that correlate with protected characteristics to discriminate indirectly", es: "Usar variables aparentemente neutrales que correlacionan con caracteristicas protegidas para discriminar indirectamente", de: "Scheinbar neutrale Variablen verwenden die mit geschuetzten Merkmalen korrelieren um indirekt zu diskriminieren", nl: "Schijnbaar neutrale variabelen gebruiken die correleren met beschermde kenmerken om indirect te discrimineren" },
          { en: "Discrimination conducted through proxy servers", es: "Discriminacion conducida a traves de servidores proxy", de: "Diskriminierung durch Proxy-Server durchgefuehrt", nl: "Discriminatie uitgevoerd via proxy servers" },
          { en: "Having representatives discriminate on behalf of others", es: "Tener representantes discriminando en nombre de otros", de: "Vertreter im Namen anderer diskriminieren lassen", nl: "Vertegenwoordigers laten discrimineren namens anderen" },
          { en: "Using intermediary algorithms for discrimination", es: "Usar algoritmos intermediarios para discriminacion", de: "Vermittler-Algorithmen fuer Diskriminierung verwenden", nl: "Tussenliggende algoritmes gebruiken voor discriminatie" }
        ],
        correct: 0,
        explanation: {
          en: "Proxy discrimination occurs when algorithms use variables like zip code, purchasing patterns, or language that correlate with protected attributes (race, gender) to make discriminatory decisions, even when protected attributes aren't directly used.",
          es: "La discriminacion por proxy ocurre cuando algoritmos usan variables como codigo postal, patrones de compra o idioma que correlacionan con atributos protegidos (raza, genero) para tomar decisiones discriminatorias, incluso cuando atributos protegidos no se usan directamente.",
          de: "Proxy-Diskriminierung tritt auf wenn Algorithmen Variablen wie Postleitzahl, Kaufmuster oder Sprache verwenden die mit geschuetzten Attributen (Rasse, Geschlecht) korrelieren um diskriminierende Entscheidungen zu treffen, selbst wenn geschuetzte Attribute nicht direkt verwendet werden.",
          nl: "Proxy discriminatie treedt op wanneer algoritmes variabelen zoals postcode, aankooppatronen of taal gebruiken die correleren met beschermde attributen (ras, geslacht) om discriminerende beslissingen te nemen, zelfs wanneer beschermde attributen niet direct gebruikt worden."
        }
      },
      {
        question: {
          en: "What is 'calibration' in the context of fair algorithms?",
          es: "Que es 'calibracion' en el contexto de algoritmos justos?",
          de: "Was ist 'Kalibrierung' im Kontext fairer Algorithmen?",
          nl: "Wat is 'calibratie' in de context van eerlijke algoritmes?"
        },
        options: [
          { en: "Ensuring predicted probabilities match actual outcomes equally well across different groups", es: "Asegurar que probabilidades predichas coincidan con resultados reales igualmente bien entre grupos diferentes", de: "Sicherstellen dass vorhergesagte Wahrscheinlichkeiten tatsaechliche Ergebnisse gleichmaessig gut ueber verschiedene Gruppen entsprechen", nl: "Ervoor zorgen dat voorspelde kansen even goed overeenkomen met werkelijke uitkomsten over verschillende groepen" },
          { en: "Adjusting algorithm parameters for optimal performance", es: "Ajustar parametros de algoritmo para rendimiento optimo", de: "Algorithmus-Parameter fuer optimale Leistung anpassen", nl: "Algoritme parameters aanpassen voor optimale prestaties" },
          { en: "Setting the same threshold for all predictions", es: "Establecer el mismo umbral para todas las predicciones", de: "Den gleichen Schwellenwert fuer alle Vorhersagen setzen", nl: "Dezelfde drempel instellen voor alle voorspellingen" },
          { en: "Normalizing algorithm outputs", es: "Normalizar salidas de algoritmos", de: "Algorithmus-Ausgaben normalisieren", nl: "Algoritme outputs normaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Calibration requires that when an algorithm assigns a probability score (e.g., 70% risk), that probability is accurate across different demographic groups, meaning predicted risks should match observed outcomes equally well for all groups.",
          es: "La calibracion requiere que cuando un algoritmo asigna una puntuacion de probabilidad (ej. 70% de riesgo), esa probabilidad sea precisa entre diferentes grupos demograficos, significando que riesgos predichos deberian coincidir con resultados observados igualmente bien para todos los grupos.",
          de: "Kalibrierung erfordert dass wenn ein Algorithmus eine Wahrscheinlichkeitsbewertung zuweist (z.B. 70% Risiko), diese Wahrscheinlichkeit ueber verschiedene demografische Gruppen genau ist, was bedeutet dass vorhergesagte Risiken beobachteten Ergebnissen fuer alle Gruppen gleich gut entsprechen sollten.",
          nl: "Calibratie vereist dat wanneer een algoritme een kans score toekent (bijv. 70% risico), die kans nauwkeurig is over verschillende demografische groepen, wat betekent dat voorspelde risico's even goed moeten overeenkomen met waargenomen uitkomsten voor alle groepen."
        }
      },
      {
        question: {
          en: "What is 'disparate impact' in algorithmic decision-making?",
          es: "Que es 'impacto dispar' en toma de decisiones algoritmica?",
          de: "Was ist 'unterschiedliche Auswirkung' bei algorithmischer Entscheidungsfindung?",
          nl: "Wat is 'ongelijke impact' bij algoritmische besluitvorming?"
        },
        options: [
          { en: "When facially neutral policies disproportionately harm certain protected groups", es: "Cuando politicas aparentemente neutrales danan desproporcionadamente ciertos grupos protegidos", de: "Wenn scheinbar neutrale Richtlinien bestimmte geschuetzte Gruppen unverhaeltnismaessig schaedigen", nl: "Wanneer schijnbaar neutrale beleidslijnen bepaalde beschermde groepen onevenredig schaden" },
          { en: "Different algorithms producing different impacts", es: "Diferentes algoritmos produciendo diferentes impactos", de: "Verschiedene Algorithmen produzieren verschiedene Auswirkungen", nl: "Verschillende algoritmes die verschillende impacts produceren" },
          { en: "Algorithms impacting various sectors differently", es: "Algoritmos impactando varios sectores diferentemente", de: "Algorithmen beeinflussen verschiedene Sektoren unterschiedlich", nl: "Algoritmes die verschillende sectoren anders beïnvloeden" },
          { en: "Unequal distribution of algorithm benefits", es: "Distribucion desigual de beneficios de algoritmos", de: "Ungleiche Verteilung von Algorithmus-Vorteilen", nl: "Ongelijke verdeling van algoritme voordelen" }
        ],
        correct: 0,
        explanation: {
          en: "Disparate impact occurs when algorithmic systems that appear neutral on their face have significantly different adverse effects on protected groups compared to others, even without discriminatory intent, violating anti-discrimination laws.",
          es: "El impacto dispar ocurre cuando sistemas algoritmicos que parecen neutrales en su superficie tienen efectos adversos significativamente diferentes en grupos protegidos comparados con otros, incluso sin intencion discriminatoria, violando leyes anti-discriminacion.",
          de: "Unterschiedliche Auswirkung tritt auf wenn algorithmische Systeme die an der Oberflaeche neutral erscheinen signifikant unterschiedliche nachteilige Auswirkungen auf geschuetzte Gruppen im Vergleich zu anderen haben, selbst ohne diskriminierende Absicht, was Anti-Diskriminierungsgesetze verletzt.",
          nl: "Ongelijke impact treedt op wanneer algoritmische systemen die neutraal lijken significant verschillende nadelige effecten hebben op beschermde groepen vergeleken met anderen, zelfs zonder discriminerende intentie, wat anti-discriminatiewetten schendt."
        }
      },
      {
        question: {
          en: "What is 'feedback loop bias' in algorithmic systems?",
          es: "Que es 'sesgo de bucle de retroalimentacion' en sistemas algoritmicos?",
          de: "Was ist 'Rueckkopplungsschleifen-Voreingenommenheit' in algorithmischen Systemen?",
          nl: "Wat is 'feedback loop bias' in algoritmische systemen?"
        },
        options: [
          { en: "When algorithmic decisions create data that reinforces and amplifies existing biases over time", es: "Cuando decisiones algoritmicas crean datos que refuerzan y amplifican sesgos existentes con el tiempo", de: "Wenn algorithmische Entscheidungen Daten schaffen die existierende Voreingenommenheiten im Laufe der Zeit verstaerken", nl: "Wanneer algoritmische beslissingen data creëren die bestaande vooroordelen versterken en vergroten in de loop van de tijd" },
          { en: "Users providing biased feedback to algorithms", es: "Usuarios proporcionando retroalimentacion sesgada a algoritmos", de: "Benutzer geben voreingenommenes Feedback an Algorithmen", nl: "Gebruikers die bevooroordeelde feedback geven aan algoritmes" },
          { en: "Algorithms getting stuck in loops", es: "Algoritmos quedandose atascados en bucles", de: "Algorithmen bleiben in Schleifen stecken", nl: "Algoritmes die vast komen te zitten in loops" },
          { en: "Circular logic in algorithm design", es: "Logica circular en diseno de algoritmos", de: "Zirkulaere Logik im Algorithmus-Design", nl: "Circulaire logica in algoritme ontwerp" }
        ],
        correct: 0,
        explanation: {
          en: "Feedback loop bias occurs when algorithmic predictions influence future behavior and data collection, which then trains future models, creating self-fulfilling prophecies that perpetuate and worsen initial biases (e.g., predictive policing targeting the same neighborhoods repeatedly).",
          es: "El sesgo de bucle de retroalimentacion ocurre cuando predicciones algoritmicas influyen comportamiento futuro y recoleccion de datos, que luego entrena modelos futuros, creando profecias autocumplidas que perpetuan y empeoran sesgos iniciales (ej. policia predictiva dirigiendose repetidamente a los mismos vecindarios).",
          de: "Rueckkopplungsschleifen-Voreingenommenheit tritt auf wenn algorithmische Vorhersagen zukuenftiges Verhalten und Datensammlung beeinflussen, was dann zukuenftige Modelle trainiert, selbsterfuellende Prophezeiungen schafft die anfaengliche Voreingenommenheiten verewigen und verschlechtern (z.B. Predictive Policing zielt wiederholt auf dieselben Nachbarschaften).",
          nl: "Feedback loop bias treedt op wanneer algoritmische voorspellingen toekomstig gedrag en datacollectie beïnvloeden, wat vervolgens toekomstige modellen traint, zelfvervullende voorspellingen creëert die initiële vooroordelen bestendigen en verergeren (bijv. predictive policing die herhaaldelijk dezelfde buurten target)."
        }
      },
      {
        question: {
          en: "What is 'explainable AI' (XAI) and why is it important for decision-making?",
          es: "Que es 'IA explicable' (XAI) y por que es importante para toma de decisiones?",
          de: "Was ist 'erklaerbare KI' (XAI) und warum ist sie wichtig fuer Entscheidungsfindung?",
          nl: "Wat is 'uitlegbare AI' (XAI) en waarom is het belangrijk voor besluitvorming?"
        },
        options: [
          { en: "AI systems designed to provide understandable reasoning for their decisions to human users", es: "Sistemas de IA disenados para proporcionar razonamiento comprensible para sus decisiones a usuarios humanos", de: "KI-Systeme entworfen um verstaendliche Begruendung fuer ihre Entscheidungen an menschliche Nutzer zu liefern", nl: "AI systemen ontworpen om begrijpelijke redeneringen te bieden voor hun beslissingen aan menselijke gebruikers" },
          { en: "AI that can explain other AI systems", es: "IA que puede explicar otros sistemas de IA", de: "KI die andere KI-Systeme erklaeren kann", nl: "AI die andere AI systemen kan uitleggen" },
          { en: "AI systems that only use simple algorithms", es: "Sistemas de IA que solo usan algoritmos simples", de: "KI-Systeme die nur einfache Algorithmen verwenden", nl: "AI systemen die alleen eenvoudige algoritmes gebruiken" },
          { en: "AI with built-in teaching capabilities", es: "IA con capacidades de ensenanza incorporadas", de: "KI mit eingebauten Lehrfaehigkeiten", nl: "AI met ingebouwde lesmogelijkheden" }
        ],
        correct: 0,
        explanation: {
          en: "Explainable AI enables users to understand how and why algorithmic decisions are made, supporting accountability, trust, debugging, and compliance with regulations requiring transparency in automated decision-making, especially for high-stakes applications.",
          es: "La IA explicable permite a usuarios entender como y por que se toman decisiones algoritmicas, apoyando responsabilidad, confianza, depuracion y cumplimiento con regulaciones que requieren transparencia en toma de decisiones automatizada, especialmente para aplicaciones de alto riesgo.",
          de: "Erklaerbare KI ermoeglicht es Nutzern zu verstehen wie und warum algorithmische Entscheidungen getroffen werden, unterstuetzt Verantwortlichkeit, Vertrauen, Debugging und Einhaltung von Vorschriften die Transparenz in automatisierter Entscheidungsfindung erfordern, besonders fuer Hochrisiko-Anwendungen.",
          nl: "Uitlegbare AI stelt gebruikers in staat te begrijpen hoe en waarom algoritmische beslissingen worden genomen, wat verantwoordelijkheid, vertrouwen, debugging en naleving van regelgeving die transparantie in geautomatiseerde besluitvorming vereisen ondersteunt, vooral voor hoog-risico toepassingen."
        }
      },
      {
        question: {
          en: "What is 'opacity' in algorithmic decision-making and why is it problematic?",
          es: "Que es 'opacidad' en toma de decisiones algoritmica y por que es problematico?",
          de: "Was ist 'Undurchsichtigkeit' bei algorithmischer Entscheidungsfindung und warum ist sie problematisch?",
          nl: "Wat is 'ondoorzichtigheid' bij algoritmische besluitvorming en waarom is het problematisch?"
        },
        options: [
          { en: "When decision-making processes are hidden or incomprehensible, undermining accountability and trust", es: "Cuando procesos de toma de decisiones estan ocultos o son incomprensibles, socavando responsabilidad y confianza", de: "Wenn Entscheidungsprozesse verborgen oder unverstaendlich sind, was Verantwortlichkeit und Vertrauen untergräbt", nl: "Wanneer besluitvormingsprocessen verborgen of onbegrijpelijk zijn, wat verantwoordelijkheid en vertrouwen ondermijnt" },
          { en: "Visual opacity of AI interfaces", es: "Opacidad visual de interfaces de IA", de: "Visuelle Undurchsichtigkeit von KI-Schnittstellen", nl: "Visuele ondoorzichtigheid van AI interfaces" },
          { en: "Algorithms running slowly", es: "Algoritmos ejecutandose lentamente", de: "Algorithmen laufen langsam", nl: "Algoritmes die langzaam draaien" },
          { en: "Unclear documentation of AI systems", es: "Documentacion poco clara de sistemas de IA", de: "Unklare Dokumentation von KI-Systemen", nl: "Onduidelijke documentatie van AI systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic opacity—whether due to complexity, proprietary secrecy, or technical barriers—prevents stakeholders from understanding how decisions are made, making it difficult to identify bias, contest decisions, or ensure accountability.",
          es: "La opacidad algoritmica—ya sea por complejidad, secreto propietario o barreras tecnicas—previene que partes interesadas entiendan como se toman decisiones, haciendo dificil identificar sesgo, contestar decisiones o asegurar responsabilidad.",
          de: "Algorithmische Undurchsichtigkeit—ob durch Komplexitaet, proprietaere Geheimhaltung oder technische Barrieren—verhindert dass Stakeholder verstehen wie Entscheidungen getroffen werden, was es schwierig macht Voreingenommenheit zu identifizieren, Entscheidungen anzufechten oder Verantwortlichkeit sicherzustellen.",
          nl: "Algoritmische ondoorzichtigheid—of het nu door complexiteit, eigendomsgeheimhouding of technische barrières is—voorkomt dat belanghebbenden begrijpen hoe beslissingen worden genomen, wat het moeilijk maakt om bias te identificeren, beslissingen aan te vechten of verantwoordelijkheid te waarborgen."
        }
      },
      {
        question: {
          en: "What is 'model inversion' and what privacy risks does it pose?",
          es: "Que es 'inversion de modelo' y que riesgos de privacidad plantea?",
          de: "Was ist 'Modellinversion' und welche Datenschutzrisiken birgt sie?",
          nl: "Wat is 'model inversie' en welke privacyrisico's brengt het met zich mee?"
        },
        options: [
          { en: "Technique to reconstruct training data or infer sensitive attributes from model outputs", es: "Tecnica para reconstruir datos de entrenamiento o inferir atributos sensibles de salidas de modelo", de: "Technik um Trainingsdaten zu rekonstruieren oder sensible Attribute aus Modellausgaben zu folgern", nl: "Techniek om trainingsdata te reconstrueren of gevoelige attributen af te leiden uit model outputs" },
          { en: "Reversing algorithm logic to make opposite predictions", es: "Revertir logica de algoritmo para hacer predicciones opuestas", de: "Algorithmus-Logik umkehren um gegenteilige Vorhersagen zu machen", nl: "Algoritme logica omkeren om tegenovergestelde voorspellingen te maken" },
          { en: "Using models in reverse chronological order", es: "Usar modelos en orden cronologico inverso", de: "Modelle in umgekehrter chronologischer Reihenfolge verwenden", nl: "Modellen in omgekeerde chronologische volgorde gebruiken" },
          { en: "Inverting model parameters for optimization", es: "Invertir parametros de modelo para optimizacion", de: "Modellparameter fuer Optimierung invertieren", nl: "Model parameters inverteren voor optimalisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Model inversion attacks exploit algorithmic decision systems to extract information about training data or infer sensitive attributes about individuals, demonstrating that even deployed models can leak private information through their decision patterns.",
          es: "Los ataques de inversion de modelo explotan sistemas de decision algoritmica para extraer informacion sobre datos de entrenamiento o inferir atributos sensibles sobre individuos, demostrando que incluso modelos desplegados pueden filtrar informacion privada a traves de sus patrones de decision.",
          de: "Modellinversionsangriffe nutzen algorithmische Entscheidungssysteme aus um Informationen ueber Trainingsdaten zu extrahieren oder sensible Attribute ueber Individuen zu folgern, was demonstriert dass selbst bereitgestellte Modelle private Informationen durch ihre Entscheidungsmuster durchsickern lassen koennen.",
          nl: "Model inversie aanvallen misbruiken algoritmische beslissingssystemen om informatie over trainingsdata te extraheren of gevoelige attributen over individuen af te leiden, wat aantoont dat zelfs geïmplementeerde modellen privé-informatie kunnen lekken via hun beslissingspatronen."
        }
      },
      {
        question: {
          en: "What is 'algorithmic determinism' and what are its implications?",
          es: "Que es 'determinismo algoritmico' y cuales son sus implicaciones?",
          de: "Was ist 'algorithmischer Determinismus' und was sind seine Implikationen?",
          nl: "Wat is 'algoritmisch determinisme' en wat zijn de implicaties?"
        },
        options: [
          { en: "The belief that algorithmic predictions define or constrain individual futures, limiting agency and opportunity", es: "La creencia de que predicciones algoritmicas definen o restringen futuros individuales, limitando agencia y oportunidad", de: "Der Glaube dass algorithmische Vorhersagen individuelle Zukuenfte definieren oder einschraenken, was Handlungsfaehigkeit begrenzt", nl: "De overtuiging dat algoritmische voorspellingen individuele toekomsten definiëren of beperken, wat handelingsvermogen beperkt" },
          { en: "Algorithms that always produce the same output", es: "Algoritmos que siempre producen la misma salida", de: "Algorithmen die immer die gleiche Ausgabe produzieren", nl: "Algoritmes die altijd dezelfde output produceren" },
          { en: "Predetermined algorithm behavior", es: "Comportamiento predeterminado de algoritmos", de: "Vorbestimmtes Algorithmus-Verhalten", nl: "Vooraf bepaald algoritme gedrag" },
          { en: "Using deterministic rather than probabilistic models", es: "Usar modelos deterministicos en lugar de probabilisticos", de: "Deterministische anstatt probabilistische Modelle verwenden", nl: "Deterministische in plaats van probabilistische modellen gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic determinism emerges when risk scores or predictions are treated as definitive judgments rather than probabilistic estimates, potentially creating self-fulfilling prophecies and denying individuals opportunities for change or redemption.",
          es: "El determinismo algoritmico emerge cuando puntuaciones de riesgo o predicciones son tratadas como juicios definitivos en lugar de estimaciones probabilisticas, potencialmente creando profecias autocumplidas y negando a individuos oportunidades de cambio o redencion.",
          de: "Algorithmischer Determinismus entsteht wenn Risikobewertungen oder Vorhersagen als definitive Urteile anstatt probabilistische Schaetzungen behandelt werden, was moeglicherweise selbsterfuellende Prophezeiungen schafft und Individuen Chancen auf Veraenderung oder Erloesung verweigert.",
          nl: "Algoritmisch determinisme ontstaat wanneer risicoscores of voorspellingen behandeld worden als definitieve oordelen in plaats van probabilistische schattingen, wat mogelijk zelfvervullende voorspellingen creëert en individuen kansen op verandering of verlossing ontzegt."
        }
      },
      {
        question: {
          en: "What is 'right to contest' in automated decision-making?",
          es: "Que es 'derecho a contestar' en toma de decisiones automatizada?",
          de: "Was ist 'Recht auf Anfechtung' bei automatisierten Entscheidungen?",
          nl: "Wat is 'recht op betwisting' bij geautomatiseerde besluitvorming?"
        },
        options: [
          { en: "The ability to challenge and appeal algorithmic decisions through human review", es: "La capacidad de desafiar y apelar decisiones algoritmicas a traves de revision humana", de: "Die Faehigkeit algorithmische Entscheidungen durch menschliche Ueberpruefung anzufechten und zu berufen", nl: "Het vermogen om algoritmische beslissingen aan te vechten en in beroep te gaan via menselijke review" },
          { en: "The right to participate in algorithm competitions", es: "El derecho a participar en competiciones de algoritmos", de: "Das Recht an Algorithmus-Wettbewerben teilzunehmen", nl: "Het recht om deel te nemen aan algoritme wedstrijden" },
          { en: "The ability to dispute algorithm ownership", es: "La capacidad de disputar propiedad de algoritmos", de: "Die Faehigkeit Algorithmus-Eigentum anzufechten", nl: "Het vermogen om algoritme eigendom te betwisten" },
          { en: "The right to question algorithm developers", es: "El derecho a cuestionar desarrolladores de algoritmos", de: "Das Recht Algorithmus-Entwickler zu befragen", nl: "Het recht om algoritme ontwikkelaars te ondervragen" }
        ],
        correct: 0,
        explanation: {
          en: "The right to contest ensures individuals can challenge automated decisions that significantly affect them, requiring mechanisms for human review, explanation of the decision basis, and potential correction or reversal of erroneous algorithmic outcomes.",
          es: "El derecho a contestar asegura que individuos puedan desafiar decisiones automatizadas que les afectan significativamente, requiriendo mecanismos para revision humana, explicacion de la base de decision y correccion o reversion potencial de resultados algoritmicos erroneos.",
          de: "Das Recht auf Anfechtung stellt sicher dass Individuen automatisierte Entscheidungen die sie erheblich betreffen anfechten koennen, was Mechanismen fuer menschliche Ueberpruefung, Erklaerung der Entscheidungsgrundlage und potentielle Korrektur oder Umkehrung fehlerhafter algorithmischer Ergebnisse erfordert.",
          nl: "Het recht op betwisting waarborgt dat individuen geautomatiseerde beslissingen die hen significant beïnvloeden kunnen aanvechten, wat mechanismen vereist voor menselijke review, uitleg van de beslissingsbasis en potentiële correctie of omkering van foutieve algoritmische uitkomsten."
        }
      },
      {
        question: {
          en: "What is 'temporal validity' in algorithmic models and why does it matter?",
          es: "Que es 'validez temporal' en modelos algoritmicos y por que importa?",
          de: "Was ist 'zeitliche Gueltigkeit' bei algorithmischen Modellen und warum ist sie wichtig?",
          nl: "Wat is 'temporele validiteit' bij algoritmische modellen en waarom is het belangrijk?"
        },
        options: [
          { en: "How long a model remains accurate as the world changes, affecting fairness and reliability of decisions", es: "Cuanto tiempo un modelo permanece preciso mientras el mundo cambia, afectando equidad y confiabilidad de decisiones", de: "Wie lange ein Modell genau bleibt waehrend die Welt sich aendert, was Fairness und Zuverlaessigkeit von Entscheidungen beeinflusst", nl: "Hoe lang een model nauwkeurig blijft terwijl de wereld verandert, wat eerlijkheid en betrouwbaarheid van beslissingen beïnvloedt" },
          { en: "The time it takes for algorithms to make decisions", es: "El tiempo que toma a algoritmos tomar decisiones", de: "Die Zeit die Algorithmen brauchen um Entscheidungen zu treffen", nl: "De tijd die algoritmes nodig hebben om beslissingen te nemen" },
          { en: "When algorithms should be updated", es: "Cuando algoritmos deberian actualizarse", de: "Wann Algorithmen aktualisiert werden sollten", nl: "Wanneer algoritmes bijgewerkt moeten worden" },
          { en: "The lifespan of algorithm deployment", es: "La vida util del despliegue de algoritmos", de: "Die Lebensdauer der Algorithmus-Bereitstellung", nl: "De levensduur van algoritme implementatie" }
        ],
        correct: 0,
        explanation: {
          en: "Temporal validity concerns how algorithmic models degrade over time as patterns in data and society shift, requiring continuous monitoring and updating to prevent decisions based on outdated patterns that may become unfair or inaccurate.",
          es: "La validez temporal concierne como modelos algoritmicos se degradan con el tiempo mientras patrones en datos y sociedad cambian, requiriendo monitoreo y actualizacion continua para prevenir decisiones basadas en patrones obsoletos que pueden volverse injustos o inexactos.",
          de: "Zeitliche Gueltigkeit betrifft wie algorithmische Modelle im Laufe der Zeit degradieren waehrend Muster in Daten und Gesellschaft sich verschieben, was kontinuierliche Ueberwachung und Aktualisierung erfordert um Entscheidungen basierend auf veralteten Mustern zu verhindern die unfair oder ungenau werden koennen.",
          nl: "Temporele validiteit betreft hoe algoritmische modellen degraderen in de loop van de tijd terwijl patronen in data en samenleving verschuiven, wat continue monitoring en updating vereist om beslissingen gebaseerd op verouderde patronen die oneerlijk of onnauwkeurig kunnen worden te voorkomen."
        }
      },
      {
        question: {
          en: "What is 'algorithmic monoculture' and what risks does it pose?",
          es: "Que es 'monocultivo algoritmico' y que riesgos plantea?",
          de: "Was ist 'algorithmische Monokultur' und welche Risiken birgt sie?",
          nl: "Wat is 'algoritmische monocultuur' en welke risico's brengt het met zich mee?"
        },
        options: [
          { en: "When similar algorithms are widely deployed, creating systemic risks and reducing diversity of decision-making", es: "Cuando algoritmos similares se despliegan ampliamente, creando riesgos sistemicos y reduciendo diversidad de toma de decisiones", de: "Wenn aehnliche Algorithmen weit verbreitet werden, was systemische Risiken schafft und Vielfalt der Entscheidungsfindung reduziert", nl: "Wanneer vergelijkbare algoritmes breed worden ingezet, wat systemische risico's creëert en diversiteit van besluitvorming vermindert" },
          { en: "Using algorithms only in agricultural applications", es: "Usar algoritmos solo en aplicaciones agricolas", de: "Algorithmen nur in landwirtschaftlichen Anwendungen verwenden", nl: "Algoritmes alleen gebruiken in landbouwtoepassingen" },
          { en: "Algorithms that produce uniform outputs", es: "Algoritmos que producen salidas uniformes", de: "Algorithmen die einheitliche Ausgaben produzieren", nl: "Algoritmes die uniforme outputs produceren" },
          { en: "Single-purpose algorithm deployment", es: "Despliegue de algoritmos de proposito unico", de: "Einzweck-Algorithmus-Bereitstellung", nl: "Enkel-doeleinden algoritme implementatie" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic monoculture occurs when many organizations adopt similar algorithmic approaches, creating correlated failures, reducing resilience, amplifying biases across systems, and making it difficult for individuals to escape algorithmic judgments.",
          es: "El monocultivo algoritmico ocurre cuando muchas organizaciones adoptan enfoques algoritmicos similares, creando fallas correlacionadas, reduciendo resiliencia, amplificando sesgos entre sistemas y haciendo dificil que individuos escapen juicios algoritmicos.",
          de: "Algorithmische Monokultur tritt auf wenn viele Organisationen aehnliche algorithmische Ansaetze uebernehmen, was korrelierte Ausfaelle schafft, Widerstandsfaehigkeit reduziert, Voreingenommenheiten ueber Systeme verstaerkt und es Individuen schwer macht algorithmischen Urteilen zu entkommen.",
          nl: "Algoritmische monocultuur treedt op wanneer veel organisaties vergelijkbare algoritmische benaderingen adopteren, wat gecorreleerde mislukkingen creëert, veerkracht vermindert, vooroordelen over systemen versterkt en het moeilijk maakt voor individuen om aan algoritmische oordelen te ontsnappen."
        }
      },
      {
        question: {
          en: "What is 'value-sensitive design' in algorithmic systems?",
          es: "Que es 'diseno sensible a valores' en sistemas algoritmicos?",
          de: "Was ist 'wertesensitives Design' bei algorithmischen Systemen?",
          nl: "Wat is 'waarde-sensitief ontwerp' bij algoritmische systemen?"
        },
        options: [
          { en: "Proactively accounting for human values like fairness, privacy, and autonomy in system design", es: "Tener en cuenta proactivamente valores humanos como equidad, privacidad y autonomia en diseno de sistemas", de: "Menschliche Werte wie Fairness, Privatsphaere und Autonomie proaktiv im Systemdesign beruecksichtigen", nl: "Proactief rekening houden met menselijke waarden zoals eerlijkheid, privacy en autonomie in systeemontwerp" },
          { en: "Designing algorithms that maximize economic value", es: "Disenar algoritmos que maximicen valor economico", de: "Algorithmen entwerfen die wirtschaftlichen Wert maximieren", nl: "Algoritmes ontwerpen die economische waarde maximaliseren" },
          { en: "Creating systems sensitive to price changes", es: "Crear sistemas sensibles a cambios de precio", de: "Systeme erstellen die preissensitiv sind", nl: "Systemen creëren die gevoelig zijn voor prijsveranderingen" },
          { en: "Building algorithms that respect data values", es: "Construir algoritmos que respeten valores de datos", de: "Algorithmen bauen die Datenwerte respektieren", nl: "Algoritmes bouwen die datawaarden respecteren" }
        ],
        correct: 0,
        explanation: {
          en: "Value-sensitive design integrates ethical values and stakeholder concerns throughout the algorithmic development process, from initial conception through deployment, ensuring technical decisions reflect and respect human values rather than just optimizing for efficiency.",
          es: "El diseno sensible a valores integra valores eticos y preocupaciones de partes interesadas a lo largo del proceso de desarrollo algoritmico, desde concepcion inicial hasta despliegue, asegurando que decisiones tecnicas reflejen y respeten valores humanos en lugar de solo optimizar para eficiencia.",
          de: "Wertesensitives Design integriert ethische Werte und Stakeholder-Anliegen waehrend des gesamten algorithmischen Entwicklungsprozesses, von der anfaenglichen Konzeption bis zur Bereitstellung, und stellt sicher dass technische Entscheidungen menschliche Werte reflektieren und respektieren anstatt nur fuer Effizienz zu optimieren.",
          nl: "Waarde-sensitief ontwerp integreert ethische waarden en stakeholder zorgen gedurende het hele algoritmische ontwikkelingsproces, van initiële conceptie tot implementatie, wat waarborgt dat technische beslissingen menselijke waarden reflecteren en respecteren in plaats van alleen optimaliseren voor efficiëntie."
        }
      },
      {
        question: {
          en: "What is 'consequential decision' in algorithmic ethics?",
          es: "Que es 'decision consecuencial' en etica algoritmica?",
          de: "Was ist 'folgenreiche Entscheidung' in algorithmischer Ethik?",
          nl: "Wat is 'consequente beslissing' in algoritmische ethiek?"
        },
        options: [
          { en: "Automated decisions that significantly affect individuals' rights, opportunities, or well-being", es: "Decisiones automatizadas que afectan significativamente derechos, oportunidades o bienestar de individuos", de: "Automatisierte Entscheidungen die Rechte, Chancen oder Wohlergehen von Individuen erheblich beeinflussen", nl: "Geautomatiseerde beslissingen die rechten, kansen of welzijn van individuen significant beïnvloeden" },
          { en: "Decisions about the consequences of algorithm failures", es: "Decisiones sobre las consecuencias de fallas de algoritmos", de: "Entscheidungen ueber die Konsequenzen von Algorithmus-Fehlern", nl: "Beslissingen over de gevolgen van algoritme mislukkingen" },
          { en: "Sequential algorithmic decisions", es: "Decisiones algoritmicas secuenciales", de: "Sequenzielle algorithmische Entscheidungen", nl: "Sequentiële algoritmische beslissingen" },
          { en: "Decisions based on consequence analysis", es: "Decisiones basadas en analisis de consecuencias", de: "Entscheidungen basierend auf Konsequenzanalyse", nl: "Beslissingen gebaseerd op consequentie analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Consequential decisions are those that produce legal or similarly significant effects on individuals—such as credit denials, job rejections, or criminal sentencing—requiring heightened procedural protections, transparency, and human oversight.",
          es: "Las decisiones consecuenciales son aquellas que producen efectos legales o similarmente significativos en individuos—como denegaciones de credito, rechazos de trabajo o sentencias criminales—requiriendo protecciones procedurales elevadas, transparencia y supervision humana.",
          de: "Folgenreiche Entscheidungen sind solche die rechtliche oder aehnlich bedeutende Auswirkungen auf Individuen produzieren—wie Kreditablehnungen, Jobablehnungen oder strafrechtliche Verurteilungen—was erhoehte verfahrensrechtliche Schutzmaßnahmen, Transparenz und menschliche Aufsicht erfordert.",
          nl: "Consequente beslissingen zijn die welke juridische of vergelijkbaar significante effecten op individuen produceren—zoals kredietafwijzingen, baanafwijzingen of strafrechtelijke veroordelingen—wat verhoogde procedurele bescherming, transparantie en menselijk toezicht vereist."
        }
      },
      {
        question: {
          en: "What is 'algorithmic paternalism' and why is it concerning?",
          es: "Que es 'paternalismo algoritmico' y por que es preocupante?",
          de: "Was ist 'algorithmischer Paternalismus' und warum ist er besorgniserregend?",
          nl: "Wat is 'algoritmisch paternalisme' en waarom is het zorgwekkend?"
        },
        options: [
          { en: "When algorithms make decisions 'for people's own good' without their meaningful input or consent", es: "Cuando algoritmos toman decisiones 'por el bien de las personas' sin su aporte significativo o consentimiento", de: "Wenn Algorithmen Entscheidungen 'zum Wohl der Menschen' treffen ohne ihre bedeutungsvolle Eingabe oder Zustimmung", nl: "Wanneer algoritmes beslissingen nemen 'voor het eigen goed van mensen' zonder hun betekenisvolle input of toestemming" },
          { en: "Algorithms designed by paternal figures", es: "Algoritmos disenados por figuras paternas", de: "Algorithmen entworfen von vaterlichen Figuren", nl: "Algoritmes ontworpen door vaderlijke figuren" },
          { en: "AI systems that protect like fathers", es: "Sistemas de IA que protegen como padres", de: "KI-Systeme die wie Vaeter schuetzen", nl: "AI systemen die beschermen als vaders" },
          { en: "Hierarchical algorithm structures", es: "Estructuras jerarquicas de algoritmos", de: "Hierarchische Algorithmus-Strukturen", nl: "Hiërarchische algoritme structuren" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic paternalism occurs when systems override individual preferences or autonomy based on algorithmic judgments about what's best for people, raising concerns about freedom, dignity, and the appropriateness of automated systems making value-laden choices for individuals.",
          es: "El paternalismo algoritmico ocurre cuando sistemas anulan preferencias individuales o autonomia basadas en juicios algoritmicos sobre lo que es mejor para las personas, generando preocupaciones sobre libertad, dignidad y lo apropiado de sistemas automatizados haciendo elecciones cargadas de valores para individuos.",
          de: "Algorithmischer Paternalismus tritt auf wenn Systeme individuelle Praeferenzen oder Autonomie basierend auf algorithmischen Urteilen darueber was am besten fuer Menschen ist uebersteuern, was Bedenken ueber Freiheit, Wuerde und die Angemessenheit automatisierter Systeme die wertbeladene Entscheidungen fuer Individuen treffen aufwirft.",
          nl: "Algoritmisch paternalisme treedt op wanneer systemen individuele voorkeuren of autonomie overschrijven gebaseerd op algoritmische oordelen over wat het beste is voor mensen, wat zorgen oproept over vrijheid, waardigheid en de geschiktheid van geautomatiseerde systemen die waarde-geladen keuzes maken voor individuen."
        }
      },
      {
        question: {
          en: "What is 'data minimization' in algorithmic decision-making contexts?",
          es: "Que es 'minimizacion de datos' en contextos de toma de decisiones algoritmica?",
          de: "Was ist 'Datenminimierung' in Kontexten algorithmischer Entscheidungsfindung?",
          nl: "Wat is 'data minimalisatie' in contexten van algoritmische besluitvorming?"
        },
        options: [
          { en: "Collecting and using only the data necessary for the specific decision purpose", es: "Recolectar y usar solo los datos necesarios para el proposito de decision especifico", de: "Nur die fuer den spezifischen Entscheidungszweck notwendigen Daten sammeln und verwenden", nl: "Alleen de data verzamelen en gebruiken die nodig is voor het specifieke beslissingsdoel" },
          { en: "Reducing file sizes of algorithmic data", es: "Reducir tamanos de archivo de datos algoritmicos", de: "Dateigroessen von algorithmischen Daten reduzieren", nl: "Bestandsgroottes van algoritmische data verkleinen" },
          { en: "Using minimal computational resources", es: "Usar recursos computacionales minimos", de: "Minimale Rechenressourcen verwenden", nl: "Minimale computationele middelen gebruiken" },
          { en: "Simplifying algorithms to use less data", es: "Simplificar algoritmos para usar menos datos", de: "Algorithmen vereinfachen um weniger Daten zu verwenden", nl: "Algoritmes vereenvoudigen om minder data te gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Data minimization limits data collection and processing to what is strictly necessary for the stated purpose, reducing privacy risks, limiting potential for function creep, and constraining the scope for algorithmic decision-making to appropriate bounds.",
          es: "La minimizacion de datos limita recoleccion y procesamiento de datos a lo estrictamente necesario para el proposito declarado, reduciendo riesgos de privacidad, limitando potencial de desplazamiento de funcion y restringiendo el alcance de toma de decisiones algoritmica a limites apropiados.",
          de: "Datenminimierung begrenzt Datensammlung und -verarbeitung auf das fuer den angegebenen Zweck strikt Notwendige, reduziert Datenschutzrisiken, begrenzt das Potenzial fuer Funktionsausweitung und beschraenkt den Umfang algorithmischer Entscheidungsfindung auf angemessene Grenzen.",
          nl: "Data minimalisatie beperkt datacollectie en -verwerking tot wat strikt noodzakelijk is voor het aangegeven doel, wat privacyrisico's vermindert, potentieel voor functie-uitbreiding beperkt en de reikwijdte van algoritmische besluitvorming beperkt tot passende grenzen."
        }
      },
      {
        question: {
          en: "What is 'consent theater' in algorithmic decision contexts?",
          es: "Que es 'teatro de consentimiento' en contextos de decision algoritmica?",
          de: "Was ist 'Einwilligungs-Theater' in algorithmischen Entscheidungskontexten?",
          nl: "Wat is 'toestemmingstheater' in algoritmische beslissingscontexten?"
        },
        options: [
          { en: "Superficial consent mechanisms that give illusion of control without meaningful choice or understanding", es: "Mecanismos de consentimiento superficiales que dan ilusion de control sin eleccion significativa o comprension", de: "Oberflaechliche Einwilligungsmechanismen die Illusion von Kontrolle ohne bedeutungsvolle Wahl oder Verstaendnis geben", nl: "Oppervlakkige toestemmingsmechanismen die illusie van controle geven zonder betekenisvolle keuze of begrip" },
          { en: "Public performances about consent requirements", es: "Actuaciones publicas sobre requisitos de consentimiento", de: "Oeffentliche Auffuehrungen ueber Einwilligungsanforderungen", nl: "Publieke voorstellingen over toestemmingsvereisten" },
          { en: "Theatrical presentations of algorithm consent forms", es: "Presentaciones teatrales de formularios de consentimiento de algoritmos", de: "Theatralische Praesentationen von Algorithmus-Einwilligungsformularen", nl: "Theatrale presentaties van algoritme toestemmingsformulieren" },
          { en: "Drama around consent violations", es: "Drama alrededor de violaciones de consentimiento", de: "Drama um Einwilligungsverletzungen", nl: "Drama rondom toestemmingsschendingen" }
        ],
        correct: 0,
        explanation: {
          en: "Consent theater describes situations where organizations collect consent through complex terms of service, buried settings, or take-it-or-leave-it scenarios that technically fulfill legal requirements but don't provide genuine informed consent or meaningful user control.",
          es: "El teatro de consentimiento describe situaciones donde organizaciones recolectan consentimiento a traves de terminos de servicio complejos, configuraciones ocultas o escenarios de tomar-o-dejar que tecnicamente cumplen requisitos legales pero no proporcionan consentimiento informado genuino o control significativo del usuario.",
          de: "Einwilligungs-Theater beschreibt Situationen wo Organisationen Einwilligung durch komplexe Nutzungsbedingungen, versteckte Einstellungen oder Friss-oder-Stirb-Szenarien sammeln die technisch rechtliche Anforderungen erfuellen aber keine echte informierte Einwilligung oder bedeutungsvolle Benutzerkontrolle bieten.",
          nl: "Toestemmingstheater beschrijft situaties waar organisaties toestemming verzamelen via complexe gebruiksvoorwaarden, verborgen instellingen of neem-het-of-laat-het scenario's die technisch aan wettelijke vereisten voldoen maar geen echte geïnformeerde toestemming of betekenisvolle gebruikerscontrole bieden."
        }
      },
      {
        question: {
          en: "What is 'strategic gaming' of algorithmic systems?",
          es: "Que es 'juego estrategico' de sistemas algoritmicos?",
          de: "Was ist 'strategisches Gaming' von algorithmischen Systemen?",
          nl: "Wat is 'strategisch gamen' van algoritmische systemen?"
        },
        options: [
          { en: "Deliberately manipulating behavior or data to achieve favorable algorithmic outcomes", es: "Manipular deliberadamente comportamiento o datos para lograr resultados algoritmicos favorables", de: "Absichtlich Verhalten oder Daten manipulieren um guenstige algorithmische Ergebnisse zu erzielen", nl: "Opzettelijk gedrag of data manipuleren om gunstige algoritmische uitkomsten te bereiken" },
          { en: "Using algorithms for gaming applications", es: "Usar algoritmos para aplicaciones de juegos", de: "Algorithmen fuer Gaming-Anwendungen verwenden", nl: "Algoritmes gebruiken voor gaming toepassingen" },
          { en: "Developing strategic AI for games", es: "Desarrollar IA estrategica para juegos", de: "Strategische KI fuer Spiele entwickeln", nl: "Strategische AI ontwikkelen voor games" },
          { en: "Competitive algorithm optimization", es: "Optimizacion competitiva de algoritmos", de: "Wettbewerbsorientierte Algorithmus-Optimierung", nl: "Competitieve algoritme optimalisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Strategic gaming emerges when individuals or organizations learn to exploit algorithmic decision rules—such as resume keyword stuffing for hiring algorithms or teaching to the test in educational metrics—potentially undermining the system's original purpose.",
          es: "El juego estrategico emerge cuando individuos u organizaciones aprenden a explotar reglas de decision algoritmica—como rellenar palabras clave en curriculos para algoritmos de contratacion o ensenar para el examen en metricas educativas—potencialmente socavando el proposito original del sistema.",
          de: "Strategisches Gaming entsteht wenn Individuen oder Organisationen lernen algorithmische Entscheidungsregeln auszunutzen—wie Lebenslauf-Keyword-Stuffing fuer Einstellungsalgorithmen oder Teaching-to-the-Test bei Bildungsmetriken—was moeglicherweise den urspruenglichen Zweck des Systems untergräbt.",
          nl: "Strategisch gamen ontstaat wanneer individuen of organisaties leren algoritmische beslissingsregels te exploiteren—zoals cv sleutelwoord vulling voor wervingsalgoritmes of lesgeven voor de test in onderwijsmetrieken—wat mogelijk het oorspronkelijke doel van het systeem ondermijnt."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();