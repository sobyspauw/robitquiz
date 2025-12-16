// AI Ethics Quiz - Level 2: Intermediate Knowledge about AI Ethics
(function() {
  const level2 = {
    name: {
      en: "AI Ethics Level 2",
      es: "Etica de IA Nivel 2",
      de: "KI-Ethik Stufe 2",
      nl: "AI Ethiek Level 2"
    },
    questions: [
      {
        question: {
          en: "What is the 'black box' problem in AI ethics?",
          es: "Cual es el problema de la 'caja negra' en la etica de IA?",
          de: "Was ist das 'Black Box' Problem in der KI-Ethik?",
          nl: "Wat is het 'black box' probleem in AI ethiek?"
        },
        options: [
          { en: "AI systems that are painted black", es: "Sistemas de IA que estan pintados de negro", de: "KI-Systeme die schwarz angestrichen sind", nl: "AI systemen die zwart geverfd zijn" },
          { en: "AI decisions that cannot be understood or explained", es: "Decisiones de IA que no pueden ser entendidas o explicadas", de: "KI-Entscheidungen die nicht verstanden oder erklaert werden koennen", nl: "AI beslissingen die niet begrepen of uitgelegd kunnen worden" },
          { en: "AI that only works in dark rooms", es : "IA que solo funciona en habitaciones oscuras", de : "KI die nur in dunklen Raeumen funktioniert", nl : "AI die alleen in donkere kamers werkt" },
          { en : "Broken AI systems", es : "Sistemas de IA rotos", de : "Kaputte KI-Systeme", nl : "Kapotte AI systemen" }
        ],
        correct: 1,
        explanation: {
          en: "The black box problem refers to AI systems whose decision-making processes are opaque and cannot be easily understood, making it difficult to explain why certain decisions were made.",
          es: "El problema de la caja negra se refiere a sistemas de IA cuyos procesos de toma de decisiones son opacos y no pueden ser facilmente entendidos, haciendo dificil explicar por que se tomaron ciertas decisiones.",
          de: "Das Black Box Problem bezieht sich auf KI-Systeme, deren Entscheidungsprozesse undurchsichtig und nicht leicht verstaendlich sind, was es schwierig macht zu erklaeren, warum bestimmte Entscheidungen getroffen wurden.",
          nl: "Het black box probleem verwijst naar AI systemen waarvan de besluitvormingsprocessen ondoorzichtig zijn en niet gemakkelijk begrepen kunnen worden, waardoor het moeilijk is uit te leggen waarom bepaalde beslissingen genomen werden."
        }
      },
      {
        question: {
          en: "What does 'fairness' mean in the context of AI systems?",
          es: "Que significa 'equidad' en el contexto de sistemas de IA?",
          de: "Was bedeutet 'Fairness' im Kontext von KI-Systemen?",
          nl: "Wat betekent 'eerlijkheid' in de context van AI systemen?"
        },
        options: [
          { en: "AI should treat all groups and individuals equitably without discrimination", es: "La IA debe tratar a todos los grupos e individuos de manera equitativa sin discriminacion", de: "KI sollte alle Gruppen und Individuen gerecht ohne Diskriminierung behandeln", nl: "AI moet alle groepen en individuen rechtvaardig behandelen zonder discriminatie" },
          { en: "AI should always choose the cheapest option", es : "La IA siempre debe elegir la opcion mas barata", de : "KI sollte immer die guenstigste Option waehlen", nl : "AI moet altijd de goedkoopste optie kiezen" },
          { en : "AI should work the same speed for everyone", es : "La IA debe trabajar a la misma velocidad para todos", de : "KI sollte fuer alle gleich schnell arbeiten", nl : "AI moet voor iedereen even snel werken" },
          { en : "AI should use the same amount of electricity", es : "La IA debe usar la misma cantidad de electricidad", de : "KI sollte die gleiche Menge Strom verbrauchen", nl : "AI moet dezelfde hoeveelheid elektriciteit gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Fairness in AI means ensuring equal treatment and avoiding discrimination based on protected characteristics like race, gender, age, or other sensitive attributes.",
          es: "La equidad en IA significa asegurar trato igual y evitar discriminacion basada en caracteristicas protegidas como raza, genero, edad u otros atributos sensibles.",
          de: "Fairness in der KI bedeutet gleichberechtigte Behandlung sicherzustellen und Diskriminierung basierend auf geschuetzten Eigenschaften wie Rasse, Geschlecht, Alter oder anderen sensiblen Attributen zu vermeiden.",
          nl: "Eerlijkheid in AI betekent gelijke behandeling verzekeren en discriminatie voorkomen gebaseerd op beschermde kenmerken zoals ras, geslacht, leeftijd of andere gevoelige eigenschappen."
        }
      },
      {
        question: {
          en: "What is 'informed consent' in AI data collection?",
          es: "Que es el 'consentimiento informado' en la recoleccion de datos de IA?",
          de: "Was ist 'informierte Einwilligung' bei der KI-Datensammlung?",
          nl: "Wat is 'geÃ¯nformeerde toestemming' bij AI data verzameling?"
        },
        options: [
          { en: "Asking permission before using someone's personal data", es : "Pedir permiso antes de usar los datos personales de alguien", de : "Um Erlaubnis fragen bevor jemandes persoenliche Daten verwendet werden", nl : "Toestemming vragen voordat iemands persoonlijke data gebruikt wordt" },
          { en : "People clearly understanding what their data will be used for before agreeing", es: "Las personas entienden claramente para que se usaran sus datos antes de estar de acuerdo", de: "Menschen verstehen klar wofuer ihre Daten verwendet werden bevor sie zustimmen", nl: "Mensen begrijpen duidelijk waarvoor hun data gebruikt zal worden voordat ze instemmen" },
          { en : "Telling people after using their data", es : "Decirle a las personas despues de usar sus datos", de : "Menschen nach der Verwendung ihrer Daten Bescheid geben", nl : "Mensen vertellen nadat hun data gebruikt is" },
          { en : "Using data without permission", es : "Usar datos sin permiso", de : "Daten ohne Erlaubnis verwenden", nl : "Data gebruiken zonder toestemming" }
        ],
        correct: 1,
        explanation: {
          en: "Informed consent means people should fully understand how their data will be collected, used, and shared before they agree to participate, not just give permission blindly.",
          es: "El consentimiento informado significa que las personas deben entender completamente como sus datos seran recolectados, usados y compartidos antes de aceptar participar, no solo dar permiso a ciegas.",
          de: "Informierte Einwilligung bedeutet, dass Menschen vollstaendig verstehen sollten, wie ihre Daten gesammelt, verwendet und geteilt werden, bevor sie zustimmen teilzunehmen, nicht nur blind Erlaubnis geben.",
          nl: "GeÃ¯nformeerde toestemming betekent dat mensen volledig moeten begrijpen hoe hun data verzameld, gebruikt en gedeeld zal worden voordat ze instemmen om deel te nemen, niet alleen blindelings toestemming geven."
        }
      },
      {
        question: {
          en: "What is an ethical concern with facial recognition technology?",
          es: "Cual es una preocupacion etica con la tecnologia de reconocimiento facial?",
          de: "Was ist ein ethisches Bedenken bei Gesichtserkennungstechnologie?",
          nl: "Wat is een ethische zorg bij gezichtsherkenning technologie?"
        },
        options: [
          { en: "It uses too much computer memory", es : "Usa demasiada memoria de computadora", de : "Es verbraucht zu viel Computerspeicher", nl : "Het gebruikt te veel computergeheugen" },
          { en : "It can violate privacy and enable mass surveillance", es : "Puede violar la privacidad y permitir vigilancia masiva", de : "Es kann Privatsphaere verletzen und Massenueberwachung ermoeglichen", nl : "Het kan privacy schenden en massale surveillance mogelijk maken" },
          { en : "It only works with expensive cameras", es : "Solo funciona con camaras caras", de : "Es funktioniert nur mit teuren Kameras", nl : "Het werkt alleen met dure camera's" },
          { en : "It makes photos look blurry", es : "Hace que las fotos se vean borrosas", de : "Es macht Fotos unscharf", nl : "Het maakt foto's wazig" }
        ],
        correct: 1,
        explanation: {
          en: "Facial recognition raises serious privacy concerns as it can be used to track people's movements and activities without their knowledge, potentially enabling authoritarian surveillance.",
          es: "El reconocimiento facial genera serias preocupaciones de privacidad ya que puede usarse para rastrear movimientos y actividades de las personas sin su conocimiento, potencialmente permitiendo vigilancia autoritaria.",
          de: "Gesichtserkennung wirft ernsthafte Datenschutzbedenken auf, da sie verwendet werden kann, um Bewegungen und Aktivitaeten von Menschen ohne ihr Wissen zu verfolgen, was moeglicherweise autoritaere Ueberwachung ermoeglichen kann.",
          nl: "Gezichtsherkenning roept serieuze privacyzorgen op omdat het gebruikt kan worden om mensen's bewegingen en activiteiten te volgen zonder hun medeweten, wat mogelijk autoritaire surveillance kan mogelijk maken."
        }
      },
      {
        question: {
          en: "What does 'AI for social good' mean?",
          es: "Que significa 'IA para el bien social'?",
          de: "Was bedeutet 'KI fuer das Gemeinwohl'?",
          nl: "Wat betekent 'AI voor maatschappelijk welzijn'?"
        },
        options: [
          { en: "Using AI to solve social problems and help communities", es: "Usar IA para resolver problemas sociales y ayudar comunidades", de: "KI verwenden um soziale Probleme zu loesen und Gemeinschaften zu helfen", nl: "AI gebruiken om sociale problemen op te lossen en gemeenschappen te helpen" },
          { en: "Making AI systems more social and talkative", es : "Hacer sistemas de IA mas sociales y conversadores", de : "KI-Systeme sozialer und gesprachiger machen", nl : "AI systemen socialer en praatgragiger maken" },
          { en : "Using AI only on social media platforms", es : "Usar IA solo en plataformas de redes sociales", de : "KI nur auf Social-Media-Plattformen verwenden", nl : "AI alleen gebruiken op sociale media platformen" },
          { en : "Teaching AI to be polite", es : "Ensenar a la IA a ser educada", de : "KI beibringen hoeflich zu sein", nl : "AI leren om beleefd te zijn" }
        ],
        correct: 0,
        explanation: {
          en: "AI for social good refers to using AI technologies to address societal challenges like healthcare, education, climate change, and poverty to benefit humanity.",
          es: "IA para el bien social se refiere a usar tecnologias de inteligencia artificial para abordar desafios sociales como salud, educacion, cambio climatico y pobreza para beneficiar a la humanidad.",
          de: "KI fuer das Gemeinwohl bezieht sich darauf, kuenstliche Intelligenz-Technologien zu nutzen, um gesellschaftliche Herausforderungen wie Gesundheitswesen, Bildung, Klimawandel und Armut anzugehen, um der Menschheit zu nutzen.",
          nl: "AI voor maatschappelijk welzijn verwijst naar het gebruik van kunstmatige intelligentie technologieÃ«n om maatschappelijke uitdagingen zoals gezondheidszorg, onderwijs, klimaatverandering en armoede aan te pakken ten voordele van de mensheid."
        }
      },
      {
        question: {
          en: "What is 'historical bias' in AI training data?",
          es: "Que es el 'sesgo historico' en datos de entrenamiento de IA?",
          de: "Was ist 'historische Verzerrung' in KI-Trainingsdaten?",
          nl: "Wat is 'historische bias' in AI trainingsdata?"
        },
        options: [
          { en: "When training data reflects past discrimination and inequities", es: "Cuando los datos de entrenamiento reflejan discriminacion e inequidades pasadas", de: "Wenn Trainingsdaten vergangene Diskriminierung und Ungerechtigkeiten widerspiegeln", nl: "Wanneer trainingsdata vroegere discriminatie en ongelijkheden weergeeft" },
          { en: "When AI learns about historical events", es: "Cuando la IA aprende sobre eventos historicos", de: "Wenn KI ueber historische Ereignisse lernt", nl: "Wanneer AI leert over historische gebeurtenissen" },
          { en: "When data is very old", es: "Cuando los datos son muy antiguos", de: "Wenn Daten sehr alt sind", nl: "Wanneer data zeer oud is" },
          { en: "When AI studies history books", es: "Cuando la IA estudia libros de historia", de: "Wenn KI Geschichtsbuecher studiert", nl: "Wanneer AI geschiedenisboeken bestudeert" }
        ],
        correct: 0,
        explanation: {
          en: "Historical bias occurs when training data contains patterns of past discrimination, causing AI systems to perpetuate unfair treatment that existed in historical practices.",
          es: "El sesgo historico ocurre cuando los datos de entrenamiento contienen patrones de discriminacion pasada, causando que sistemas de IA perpetuen trato injusto que existia en practicas historicas.",
          de: "Historische Verzerrung tritt auf wenn Trainingsdaten Muster vergangener Diskriminierung enthalten, was dazu fuehrt dass KI-Systeme unfaire Behandlung fortsetzen die in historischen Praktiken existierte.",
          nl: "Historische bias ontstaat wanneer trainingsdata patronen van vroegere discriminatie bevat, waardoor AI systemen oneerlijke behandeling bestendigen die bestond in historische praktijken."
        }
      },
      {
        question: {
          en: "What is 'confirmation bias' in AI systems?",
          es: "Que es el 'sesgo de confirmacion' en sistemas de IA?",
          de: "Was ist 'Bestatigungsverzerrung' in KI-Systemen?",
          nl: "Wat is 'bevestigingsbias' in AI systemen?"
        },
        options: [
          { en: "When AI systems reinforce existing beliefs or stereotypes", es: "Cuando sistemas de IA refuerzan creencias o estereotipos existentes", de: "Wenn KI-Systeme bestehende Ueberzeugungen oder Stereotypen verstaerken", nl: "Wanneer AI systemen bestaande overtuigingen of stereotypen versterken" },
          { en: "When AI confirms passwords", es: "Cuando la IA confirma contrasenas", de: "Wenn KI Passwoerter bestaetigt", nl: "Wanneer AI wachtwoorden bevestigt" },
          { en: "When AI double-checks its answers", es: "Cuando la IA verifica dos veces sus respuestas", de: "Wenn KI ihre Antworten doppelt ueberprueft", nl: "Wanneer AI zijn antwoorden dubbel controleert" },
          { en: "When AI asks for confirmation before acting", es: "Cuando la IA pide confirmacion antes de actuar", de: "Wenn KI um Bestaetigung bittet bevor sie handelt", nl: "Wanneer AI om bevestiging vraagt voor het handelt" }
        ],
        correct: 0,
        explanation: {
          en: "Confirmation bias in AI occurs when systems are designed or trained in ways that reinforce existing prejudices or stereotypes rather than challenging them with diverse perspectives.",
          es: "El sesgo de confirmacion en IA ocurre cuando sistemas son disenados o entrenados de maneras que refuerzan prejuicios o estereotipos existentes en lugar de desafiarlos con perspectivas diversas.",
          de: "Bestatigungsverzerrung in KI tritt auf wenn Systeme so entworfen oder trainiert werden dass sie bestehende Vorurteile oder Stereotypen verstaerken anstatt sie mit diversen Perspektiven herauszufordern.",
          nl: "Bevestigingsbias in AI ontstaat wanneer systemen ontworpen of getraind worden op manieren die bestaande vooroordelen of stereotypen versterken in plaats van ze uit te dagen met diverse perspectieven."
        }
      },
      {
        question: {
          en: "What does 'algorithmic discrimination' mean?",
          es: "Que significa 'discriminacion algoritmica'?",
          de: "Was bedeutet 'algorithmische Diskriminierung'?",
          nl: "Wat betekent 'algoritmische discriminatie'?"
        },
        options: [
          { en: "When AI systems unfairly treat people based on protected characteristics", es: "Cuando sistemas de IA tratan injustamente a personas basado en caracteristicas protegidas", de: "Wenn KI-Systeme Menschen unfair basierend auf geschuetzten Eigenschaften behandeln", nl: "Wanneer AI systemen mensen oneerlijk behandelen gebaseerd op beschermde kenmerken" },
          { en: "When AI chooses between different algorithms", es: "Cuando la IA elige entre diferentes algoritmos", de: "Wenn KI zwischen verschiedenen Algorithmen waehlt", nl: "Wanneer AI kiest tussen verschillende algoritmes" },
          { en: "When AI systems work slowly", es: "Cuando sistemas de IA trabajan lentamente", de: "Wenn KI-Systeme langsam arbeiten", nl: "Wanneer AI systemen langzaam werken" },
          { en: "When algorithms compete with each other", es: "Cuando algoritmos compiten entre si", de: "Wenn Algorithmen miteinander konkurrieren", nl: "Wanneer algoritmes met elkaar concurreren" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic discrimination occurs when AI systems systematically disadvantage certain groups based on race, gender, age, or other protected characteristics, often reproducing societal biases.",
          es: "La discriminacion algoritmica ocurre cuando sistemas de IA sistematicamente desventajan ciertos grupos basados en raza, genero, edad u otras caracteristicas protegidas, a menudo reproduciendo sesgos sociales.",
          de: "Algorithmische Diskriminierung tritt auf wenn KI-Systeme systematisch bestimmte Gruppen basierend auf Rasse, Geschlecht, Alter oder anderen geschuetzten Eigenschaften benachteiligen, oft gesellschaftliche Verzerrungen reproduzierend.",
          nl: "Algoritmische discriminatie ontstaat wanneer AI systemen systematisch bepaalde groepen benadelen gebaseerd op ras, geslacht, leeftijd of andere beschermde kenmerken, vaak maatschappelijke vooroordelen reproducerend."
        }
      },
      {
        question: {
          en: "What is 'selection bias' in machine learning?",
          es: "Que es el 'sesgo de seleccion' en aprendizaje automatico?",
          de: "Was ist 'Auswahlverzerrung' im maschinellen Lernen?",
          nl: "Wat is 'selectiebias' in machine learning?"
        },
        options: [
          { en: "When training data doesn't represent the full population", es: "Cuando datos de entrenamiento no representan la poblacion completa", de: "Wenn Trainingsdaten nicht die gesamte Bevoelkerung repraesentieren", nl: "Wanneer trainingsdata niet de volledige populatie vertegenwoordigt" },
          { en: "When AI selects the wrong answers", es: "Cuando la IA selecciona respuestas incorrectas", de: "Wenn KI falsche Antworten auswaehlt", nl: "Wanneer AI verkeerde antwoorden selecteert" },
          { en: "When users select biased options", es: "Cuando usuarios seleccionan opciones sesgadas", de: "Wenn Nutzer verzerrte Optionen auswaehlen", nl: "Wanneer gebruikers bevooroordeelde opties selecteren" },
          { en: "When AI randomly selects data", es: "Cuando la IA selecciona datos aleatoriamente", de: "Wenn KI zufaellig Daten auswaehlt", nl: "Wanneer AI willekeurig data selecteert" }
        ],
        correct: 0,
        explanation: {
          en: "Selection bias occurs when the training dataset is not representative of the broader population the AI will serve, leading to poor performance for underrepresented groups.",
          es: "El sesgo de seleccion ocurre cuando el conjunto de datos de entrenamiento no es representativo de la poblacion mas amplia que la IA servira, llevando a mal rendimiento para grupos subrepresentados.",
          de: "Auswahlverzerrung tritt auf wenn der Trainingsdatensatz nicht repraesentativ fuer die breitere Bevoelkerung ist die die KI bedienen wird, was zu schlechter Leistung fuer unterrepraesentierte Gruppen fuehrt.",
          nl: "Selectiebias ontstaat wanneer de trainingsdataset niet representatief is voor de bredere populatie die de AI zal bedienen, wat leidt tot slechte prestaties voor ondervertegenwoordigde groepen."
        }
      },
      {
        question: {
          en: "What is 'intersectionality' in the context of AI bias?",
          es: "Que es la 'interseccionalidad' en el contexto de sesgo de IA?",
          de: "Was ist 'Intersektionalitaet' im Kontext von KI-Verzerrung?",
          nl: "Wat is 'intersectionaliteit' in de context van AI bias?"
        },
        options: [
          { en: "When people experience multiple overlapping forms of bias simultaneously", es: "Cuando personas experimentan multiples formas superpuestas de sesgo simultaneamente", de: "Wenn Menschen mehrere ueberlappende Formen von Verzerrung gleichzeitig erfahren", nl: "Wanneer mensen meerdere overlappende vormen van bias tegelijkertijd ervaren" },
          { en: "When roads intersect", es: "Cuando las carreteras se cruzan", de: "Wenn Strassen sich kreuzen", nl: "Wanneer wegen kruisen" },
          { en: "When AI systems work together", es: "Cuando sistemas de IA trabajan juntos", de: "Wenn KI-Systeme zusammenarbeiten", nl: "Wanneer AI systemen samenwerken" },
          { en: "When data flows intersect", es: "Cuando flujos de datos se cruzan", de: "Wenn Datenfluesse sich kreuzen", nl: "Wanneer datastromen kruisen" }
        ],
        correct: 0,
        explanation: {
          en: "Intersectionality recognizes that individuals may face compound discrimination based on multiple identity characteristics (e.g., being both a racial minority and female), requiring AI systems to consider these overlapping biases.",
          es: "La interseccionalidad reconoce que individuos pueden enfrentar discriminacion compuesta basada en multiples caracteristicas de identidad (ej., ser tanto minoria racial como mujer), requiriendo que sistemas de IA consideren estos sesgos superpuestos.",
          de: "Intersektionalitaet erkennt dass Individuen zusammengesetzte Diskriminierung basierend auf mehreren Identitaetsmerkmalen erfahren koennen (z.B. sowohl Rassenmischung als auch weiblich), was erfordert dass KI-Systeme diese ueberlappenden Verzerrungen beruecksichtigen.",
          nl: "Intersectionaliteit erkent dat individuen samengestelde discriminatie kunnen ondervinden gebaseerd op meerdere identiteitskenmerken (bijv. zowel raciale minderheid als vrouw), wat vereist dat AI systemen deze overlappende vooroordelen overwegen."
        }
      },
      {
        question: {
          en: "What does 'fairness through awareness' mean in AI?",
          es: "Que significa 'equidad a traves de conciencia' en IA?",
          de: "Was bedeutet 'Fairness durch Bewusstsein' in der KI?",
          nl: "Wat betekent 'eerlijkheid door bewustzijn' in AI?"
        },
        options: [
          { en: "Explicitly considering protected attributes to ensure fair outcomes", es: "Considerar explicitamente atributos protegidos para asegurar resultados justos", de: "Geschuetzte Attribute explizit beruecksichtigen um faire Ergebnisse sicherzustellen", nl: "Expliciet beschermde kenmerken overwegen om eerlijke uitkomsten te waarborgen" },
          { en: "Making AI systems more aware of their surroundings", es: "Hacer sistemas de IA mas conscientes de su entorno", de: "KI-Systeme bewusster fuer ihre Umgebung machen", nl: "AI systemen bewuster maken van hun omgeving" },
          { en: "Teaching AI to be self-aware", es: "Ensenar a la IA a ser autoconsciente", de: "KI beibringen selbstbewusst zu sein", nl: "AI leren zelfbewust te zijn" },
          { en: "Increasing AI processing speed", es: "Aumentar velocidad de procesamiento de IA", de: "KI-Verarbeitungsgeschwindigkeit erhoehen", nl: "AI verwerkingssnelheid verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Fairness through awareness involves explicitly using information about protected characteristics (like race or gender) during model training to ensure equitable treatment across different groups.",
          es: "Equidad a traves de conciencia involucra usar explicitamente informacion sobre caracteristicas protegidas (como raza o genero) durante entrenamiento del modelo para asegurar trato equitativo entre diferentes grupos.",
          de: "Fairness durch Bewusstsein beinhaltet die explizite Verwendung von Informationen ueber geschuetzte Eigenschaften (wie Rasse oder Geschlecht) waehrend des Modelltrainings um gerechte Behandlung verschiedener Gruppen sicherzustellen.",
          nl: "Eerlijkheid door bewustzijn houdt in dat expliciet informatie over beschermde kenmerken (zoals ras of geslacht) gebruikt wordt tijdens modeltraining om rechtvaardige behandeling tussen verschillende groepen te waarborgen."
        }
      },
      {
        question: {
          en: "What is 'fairness through unawareness' in AI?",
          es: "Que es 'equidad a traves de desconocimiento' en IA?",
          de: "Was ist 'Fairness durch Unwissen' in der KI?",
          nl: "Wat is 'eerlijkheid door onwetendheid' in AI?"
        },
        options: [
          { en: "Removing protected attributes from the model, which may not guarantee fairness", es: "Remover atributos protegidos del modelo, lo cual puede no garantizar equidad", de: "Geschuetzte Attribute aus dem Modell entfernen, was Fairness moeglicherweise nicht garantiert", nl: "Beschermde kenmerken uit het model verwijderen, wat eerlijkheid mogelijk niet garandeert" },
          { en: "Making AI unaware of its decisions", es: "Hacer que la IA no sea consciente de sus decisiones", de: "KI sich ihrer Entscheidungen nicht bewusst machen", nl: "AI onbewust maken van zijn beslissingen" },
          { en: "Hiding AI processes from users", es: "Ocultar procesos de IA de usuarios", de: "KI-Prozesse vor Nutzern verbergen", nl: "AI processen verbergen voor gebruikers" },
          { en: "Training AI without supervision", es: "Entrenar IA sin supervision", de: "KI ohne Aufsicht trainieren", nl: "AI trainen zonder toezicht" }
        ],
        correct: 0,
        explanation: {
          en: "Fairness through unawareness attempts to achieve fairness by excluding protected attributes from the model, but this approach often fails because proxy variables can still lead to discriminatory outcomes.",
          es: "Equidad a traves de desconocimiento intenta lograr equidad excluyendo atributos protegidos del modelo, pero este enfoque a menudo falla porque variables proxy pueden aun llevar a resultados discriminatorios.",
          de: "Fairness durch Unwissen versucht Fairness zu erreichen indem geschuetzte Attribute aus dem Modell ausgeschlossen werden, aber dieser Ansatz versagt oft weil Proxy-Variablen immer noch zu diskriminierenden Ergebnissen fuehren koennen.",
          nl: "Eerlijkheid door onwetendheid probeert eerlijkheid te bereiken door beschermde kenmerken uit het model uit te sluiten, maar deze aanpak faalt vaak omdat proxy variabelen nog steeds tot discriminerende uitkomsten kunnen leiden."
        }
      },
      {
        question: {
          en: "What are 'proxy variables' in the context of AI bias?",
          es: "Que son 'variables proxy' en el contexto de sesgo de IA?",
          de: "Was sind 'Proxy-Variablen' im Kontext von KI-Verzerrung?",
          nl: "Wat zijn 'proxy variabelen' in de context van AI bias?"
        },
        options: [
          { en: "Variables that indirectly reveal protected characteristics", es: "Variables que indirectamente revelan caracteristicas protegidas", de: "Variablen die indirekt geschuetzte Eigenschaften preisgeben", nl: "Variabelen die indirect beschermde kenmerken onthullen" },
          { en: "Variables that represent server addresses", es: "Variables que representan direcciones de servidor", de: "Variablen die Serveradressen repraesentieren", nl: "Variabelen die serveradressen vertegenwoordigen" },
          { en: "Temporary storage variables", es: "Variables de almacenamiento temporal", de: "Temporaere Speichervariablen", nl: "Tijdelijke opslagvariabelen" },
          { en: "Variables that speed up processing", es: "Variables que aceleran el procesamiento", de: "Variablen die die Verarbeitung beschleunigen", nl: "Variabelen die verwerking versnellen" }
        ],
        correct: 0,
        explanation: {
          en: "Proxy variables are data points that correlate with protected characteristics (like ZIP code correlating with race) and can lead to discriminatory outcomes even when protected attributes are not directly used.",
          es: "Variables proxy son puntos de datos que se correlacionan con caracteristicas protegidas (como codigo postal correlacionandose con raza) y pueden llevar a resultados discriminatorios aun cuando atributos protegidos no se usan directamente.",
          de: "Proxy-Variablen sind Datenpunkte die mit geschuetzten Eigenschaften korrelieren (wie Postleitzahl mit Rasse korreliert) und koennen zu diskriminierenden Ergebnissen fuehren auch wenn geschuetzte Attribute nicht direkt verwendet werden.",
          nl: "Proxy variabelen zijn datapunten die correleren met beschermde kenmerken (zoals postcode die correleert met ras) en kunnen leiden tot discriminerende uitkomsten zelfs wanneer beschermde kenmerken niet direct gebruikt worden."
        }
      },
      {
        question: {
          en: "What is 'demographic parity' in AI fairness?",
          es: "Que es 'paridad demografica' en equidad de IA?",
          de: "Was ist 'demografische Paritaet' in KI-Fairness?",
          nl: "Wat is 'demografische pariteit' in AI eerlijkheid?"
        },
        options: [
          { en: "Ensuring equal positive outcomes across different demographic groups", es: "Asegurar resultados positivos iguales entre diferentes grupos demograficos", de: "Gleiche positive Ergebnisse fuer verschiedene demografische Gruppen sicherstellen", nl: "Gelijke positieve uitkomsten tussen verschillende demografische groepen waarborgen" },
          { en: "Having equal numbers of people in each group", es: "Tener numeros iguales de personas en cada grupo", de: "Gleiche Anzahl von Personen in jeder Gruppe haben", nl: "Gelijke aantallen mensen in elke groep hebben" },
          { en: "Studying population statistics", es: "Estudiar estadisticas de poblacion", de: "Bevoelkerungsstatistiken studieren", nl: "Bevolkingsstatistieken bestuderen" },
          { en: "Balancing server loads", es: "Equilibrar cargas de servidor", de: "Serverlasten ausbalancieren", nl: "Serverbelastingen balanceren" }
        ],
        correct: 0,
        explanation: {
          en: "Demographic parity requires that AI systems provide equal positive outcome rates (like loan approvals or job recommendations) across different demographic groups, regardless of other factors.",
          es: "La paridad demografica requiere que sistemas de IA proporcionen tasas de resultados positivos iguales (como aprobaciones de prestamos o recomendaciones de trabajo) entre diferentes grupos demograficos, sin importar otros factores.",
          de: "Demografische Paritaet erfordert dass KI-Systeme gleiche positive Ergebnisraten (wie Kreditgenehmigungen oder Stellenempfehlungen) fuer verschiedene demografische Gruppen bieten, unabhaengig von anderen Faktoren.",
          nl: "Demografische pariteit vereist dat AI systemen gelijke positieve uitkomstpercentages (zoals leninggodkeuringen of baanaanbevelingen) bieden voor verschillende demografische groepen, ongeacht andere factoren."
        }
      },
      {
        question: {
          en: "What does 'equalized odds' mean in AI fairness?",
          es: "Que significa 'probabilidades igualadas' en equidad de IA?",
          de: "Was bedeuten 'ausgeglichene Chancen' in KI-Fairness?",
          nl: "Wat betekent 'gelijke kansen' in AI eerlijkheid?"
        },
        options: [
          { en: "Equal true positive and false positive rates across groups for the same actual outcome", es: "Tasas iguales de verdaderos positivos y falsos positivos entre grupos para el mismo resultado real", de: "Gleiche wahre/falsche positive Raten zwischen Gruppen fuer gleiches tatsaechliches Ergebnis", nl: "Gelijke echte/vals positieve percentages tussen groepen voor hetzelfde werkelijke resultaat" },
          { en: "Making gambling odds the same for everyone", es: "Hacer que las probabilidades de apuesta sean iguales para todos", de: "Gluecksspielquoten fuer alle gleich machen", nl: "Gokodds voor iedereen gelijk maken" },
          { en: "Balancing computational resources", es: "Equilibrar recursos computacionales", de: "Rechenressourcen ausbalancieren", nl: "Computationele middelen balanceren" },
          { en: "Equal processing time for all users", es: "Tiempo de procesamiento igual para todos los usuarios", de: "Gleiche Verarbeitungszeit fuer alle Nutzer", nl: "Gelijke verwerkingstijd voor alle gebruikers" }
        ],
        correct: 0,
        explanation: {
          en: "Equalized odds ensures that for any given true outcome, the AI system has the same true positive rate and false positive rate across different demographic groups, providing procedural fairness.",
          es: "Las probabilidades igualadas aseguran que para cualquier resultado verdadero dado, el sistema de IA tenga la misma tasa de verdaderos positivos y falsos positivos entre diferentes grupos demograficos, proporcionando equidad procesal.",
          de: "Ausgeglichene Chancen stellen sicher dass fuer jedes gegebene wahre Ergebnis das KI-System die gleiche wahre positive Rate und falsche positive Rate zwischen verschiedenen demografischen Gruppen hat, was prozedurale Fairness bietet.",
          nl: "Gelijke kansen zorgen ervoor dat voor elke gegeven werkelijke uitkomst het AI systeem hetzelfde echte positieve percentage en vals positieve percentage heeft tussen verschillende demografische groepen, wat procedurele eerlijkheid biedt."
        }
      },
      {
        question: {
          en: "What is 'calibration' in the context of AI fairness?",
          es: "Que es 'calibracion' en el contexto de equidad de IA?",
          de: "Was ist 'Kalibrierung' im Kontext von KI-Fairness?",
          nl: "Wat is 'kalibratie' in de context van AI eerlijkheid?"
        },
        options: [
          { en: "Ensuring predicted probabilities match actual outcomes equally across groups", es: "Asegurar que probabilidades predichas coincidan con resultados reales igualmente entre grupos", de: "Sicherstellen dass Vorhersagen tatsaechlichen Ergebnissen gleich zwischen Gruppen entsprechen", nl: "Ervoor zorgen dat voorspellingen overeenkomen met werkelijke uitkomsten tussen groepen" },
          { en: "Adjusting computer settings", es: "Ajustar configuraciones de computadora", de: "Computereinstellungen anpassen", nl: "Computerinstellingen aanpassen" },
          { en: "Measuring system performance", es: "Medir rendimiento del sistema", de: "Systemleistung messen", nl: "Systeemprestaties meten" },
          { en: "Setting up hardware correctly", es: "Configurar hardware correctamente", de: "Hardware korrekt einrichten", nl: "Hardware correct instellen" }
        ],
        correct: 0,
        explanation: {
          en: "Calibration in AI fairness means that when the system predicts a certain probability of an outcome, that probability should be equally accurate across different demographic groups.",
          es: "Calibracion en equidad de IA significa que cuando el sistema predice cierta probabilidad de un resultado, esa probabilidad deberia ser igualmente precisa entre diferentes grupos demograficos.",
          de: "Kalibrierung in KI-Fairness bedeutet dass wenn das System eine bestimmte Wahrscheinlichkeit eines Ergebnisses vorhersagt, diese Wahrscheinlichkeit zwischen verschiedenen demografischen Gruppen gleich genau sein sollte.",
          nl: "Kalibratie in AI eerlijkheid betekent dat wanneer het systeem een bepaalde kans op een uitkomst voorspelt, die kans even nauwkeurig zou moeten zijn tussen verschillende demografische groepen."
        }
      },
      {
        question: {
          en: "What is 'individual fairness' in AI systems?",
          es: "Que es 'equidad individual' en sistemas de IA?",
          de: "Was ist 'individuelle Fairness' in KI-Systemen?",
          nl: "Wat is 'individuele eerlijkheid' in AI systemen?"
        },
        options: [
          { en: "Treating similar individuals similarly, regardless of group membership", es: "Tratar individuos similares de manera similar, sin importar pertenencia a grupo", de: "Aehnliche Individuen aehnlich behandeln, unabhaengig von Gruppenmitgliedschaft", nl: "Vergelijkbare individuen op vergelijkbare wijze behandelen, ongeacht groepslidmaatschap" },
          { en: "Giving each person a unique response", es: "Dar a cada persona una respuesta unica", de: "Jeder Person eine einzigartige Antwort geben", nl: "Elke persoon een unieke reactie geven" },
          { en: "Processing one person at a time", es: "Procesar una persona a la vez", de: "Eine Person nach der anderen verarbeiten", nl: "Een persoon tegelijk verwerken" },
          { en: "Personalizing AI interfaces", es: "Personalizar interfaces de IA", de: "KI-Schnittstellen personalisieren", nl: "AI interfaces personaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Individual fairness focuses on ensuring that people who are similar in relevant ways receive similar treatment from AI systems, emphasizing consistency in decision-making.",
          es: "La equidad individual se enfoca en asegurar que personas que son similares en maneras relevantes reciban trato similar de sistemas de IA, enfatizando consistencia en toma de decisiones.",
          de: "Individuelle Fairness konzentriert sich darauf sicherzustellen dass Menschen die auf relevante Weise aehnlich sind aehnliche Behandlung von KI-Systemen erhalten, wobei Konsistenz in der Entscheidungsfindung betont wird.",
          nl: "Individuele eerlijkheid richt zich op het waarborgen dat mensen die op relevante manieren vergelijkbaar zijn vergelijkbare behandeling krijgen van AI systemen, met nadruk op consistentie in besluitvorming."
        }
      },
      {
        question: {
          en: "What is 'bias amplification' in AI systems?",
          es: "Que es 'amplificacion de sesgo' en sistemas de IA?",
          de: "Was ist 'Verzerrungsverstaerkung' in KI-Systemen?",
          nl: "Wat is 'bias versterking' in AI systemen?"
        },
        options: [
          { en: "When AI systems make existing biases worse than in the original data", es: "Cuando sistemas de IA hacen sesgos existentes peores que en los datos originales", de: "Wenn KI-Systeme bestehende Verzerrungen schlimmer machen als in den urspruenglichen Daten", nl: "Wanneer AI systemen bestaande vooroordelen erger maken dan in de oorspronkelijke data" },
          { en: "When AI systems become louder", es: "Cuando sistemas de IA se vuelven mas ruidosos", de: "Wenn KI-Systeme lauter werden", nl: "Wanneer AI systemen luider worden" },
          { en: "When bias detection becomes more accurate", es: "Cuando deteccion de sesgo se vuelve mas precisa", de: "Wenn Verzerrungserkennung genauer wird", nl: "Wanneer biasdetectie nauwkeuriger wordt" },
          { en: "When more bias examples are collected", es: "Cuando se recolectan mas ejemplos de sesgo", de: "Wenn mehr Verzerrungsbeispiele gesammelt werden", nl: "Wanneer meer biasvoorbeelden verzameld worden" }
        ],
        correct: 0,
        explanation: {
          en: "Bias amplification occurs when ML systems not only reproduce existing biases from training data but actually make them stronger or more pronounced in their outputs.",
          es: "La amplificacion de sesgo ocurre cuando sistemas de aprendizaje automatico no solo reproducen sesgos existentes de datos de entrenamiento sino que realmente los hacen mas fuertes o pronunciados en sus salidas.",
          de: "Verzerrungsverstaerkung tritt auf wenn maschinelle Lernsysteme nicht nur bestehende Verzerrungen aus Trainingsdaten reproduzieren sondern sie tatsaechlich staerker oder ausgespraegter in ihren Ausgaben machen.",
          nl: "Bias versterking ontstaat wanneer machine learning systemen niet alleen bestaande vooroordelen uit trainingsdata reproduceren maar ze daadwerkelijk sterker of uitgesproken maken in hun output."
        }
      },
      {
        question: {
          en: "What is 'disparate impact' in AI decision-making?",
          es: "Que es 'impacto dispar' en toma de decisiones de IA?",
          de: "Was ist 'unterschiedliche Auswirkung' in KI-Entscheidungsfindung?",
          nl: "Wat is 'onevenredige impact' in AI besluitvorming?"
        },
        options: [
          { en: "When AI decisions disproportionately affect certain groups negatively", es: "Cuando decisiones de IA afectan desproporcionadamente ciertos grupos negativamente", de: "Wenn KI-Entscheidungen bestimmte Gruppen unverhaeltnismaessig negativ betreffen", nl: "Wanneer AI beslissingen bepaalde groepen onevenredig negatief treffen" },
          { en: "When AI systems crash unexpectedly", es: "Cuando sistemas de IA fallan inesperadamente", de: "Wenn KI-Systeme unerwartet abstuerzen", nl: "Wanneer AI systemen onverwacht crashen" },
          { en: "When decisions are made too quickly", es: "Cuando decisiones se toman demasiado rapido", de: "Wenn Entscheidungen zu schnell getroffen werden", nl: "Wanneer beslissingen te snel genomen worden" },
          { en: "When AI impacts are scattered randomly", es: "Cuando impactos de IA se dispersan aleatoriamente", de: "Wenn KI-Auswirkungen zufaellig verstreut sind", nl: "Wanneer AI impacts willekeurig verspreid zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Disparate impact occurs when an AI system's decisions, while appearing neutral, result in significantly different outcomes for different protected groups, even without intentional discrimination.",
          es: "El impacto dispar ocurre cuando decisiones de un sistema de IA, aunque parezcan neutrales, resultan en resultados significativamente diferentes para diferentes grupos protegidos, aun sin discriminacion intencional.",
          de: "Unterschiedliche Auswirkung tritt auf wenn Entscheidungen eines KI-Systems, obwohl sie neutral erscheinen, zu signifikant unterschiedlichen Ergebnissen fuer verschiedene geschuetzte Gruppen fuehren, auch ohne beabsichtigte Diskriminierung.",
          nl: "Onevenredige impact ontstaat wanneer beslissingen van een AI systeem, hoewel ze neutraal lijken, resulteren in significant verschillende uitkomsten voor verschillende beschermde groepen, zelfs zonder opzettelijke discriminatie."
        }
      },
      {
        question: {
          en: "What is 'counterfactual fairness' in AI?",
          es: "Que es 'equidad contrafactual' en IA?",
          de: "Was ist 'kontrafaktische Fairness' in der KI?",
          nl: "Wat is 'contrafeitelijke eerlijkheid' in AI?"
        },
        options: [
          { en: "Ensuring decisions would be the same if sensitive attributes were different", es: "Asegurar que decisiones serian iguales si atributos sensibles fueran diferentes", de: "Sicherstellen dass Entscheidungen gleich waeren wenn sensible Attribute anders waeren", nl: "Ervoor zorgen dat beslissingen hetzelfde zouden zijn als gevoelige kenmerken anders waren" },
          { en: "Testing AI with fake data", es: "Probar IA con datos falsos", de: "KI mit gefaelschten Daten testen", nl: "AI testen met nep data" },
          { en: "Creating alternative AI scenarios", es: "Crear escenarios alternativos de IA", de: "Alternative KI-Szenarien erstellen", nl: "Alternatieve AI scenario's creëren" },
          { en: "Reversing AI decisions", es: "Revertir decisiones de IA", de: "KI-Entscheidungen rueckgaengig machen", nl: "AI beslissingen omkeren" }
        ],
        correct: 0,
        explanation: {
          en: "Counterfactual fairness asks whether an individual would receive the same decision from an AI system in a hypothetical world where their sensitive attributes (like race or gender) were different.",
          es: "La equidad contrafactual pregunta si un individuo recibiria la misma decision de un sistema de IA en un mundo hipotetico donde sus atributos sensibles (como raza o genero) fueran diferentes.",
          de: "Kontrafaktische Fairness fragt ob ein Individuum die gleiche Entscheidung von einem KI-System in einer hypothetischen Welt erhalten wuerde wo ihre sensiblen Attribute (wie Rasse oder Geschlecht) anders waeren.",
          nl: "Contrafeitelijke eerlijkheid vraagt of een individu dezelfde beslissing zou krijgen van een AI systeem in een hypothetische wereld waar hun gevoelige kenmerken (zoals ras of geslacht) anders waren."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
