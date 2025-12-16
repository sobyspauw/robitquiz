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
      
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();