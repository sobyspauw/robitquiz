// AI ethiek Quiz - Level 2
(function() {
  const level2 = {
    name: {
          "en": "AI Ethics Level 2",
          "es": "Etica de IA Nivel 2",
          "de": "KI-Ethik Stufe 2",
          "nl": "AI Ethiek Level 2"
    },
    questions: [
      {
        question: {
                  "en": "What is the 'black box' problem in AI ethics?",
                  "es": "Cual es el problema de la 'caja negra' en la etica de IA?",
                  "de": "Was ist das 'Black Box' Problem in der KI-Ethik?",
                  "nl": "Wat is het 'black box' probleem in AI ethiek?"
        },
        options: [
        {
                  "en": "AI systems that are painted black",
                  "es": "Sistemas de IA que estan pintados de negro",
                  "de": "KI-Systeme die schwarz angestrichen sind",
                  "nl": "AI systemen die zwart geverfd zijn"
        },
        {
                  "en": "Broken AI systems",
                  "es": "Sistemas de IA rotos",
                  "de": "Kaputte KI-Systeme",
                  "nl": "Kapotte AI systemen"
        },
        {
                  "en": "AI decisions that cannot be understood or explained",
                  "es": "Decisiones de IA que no pueden ser entendidas o explicadas",
                  "de": "KI-Entscheidungen die nicht verstanden oder erklaert werden koennen",
                  "nl": "AI beslissingen die niet begrepen of uitgelegd kunnen worden"
        },
        {
                  "en": "AI that only works in dark rooms",
                  "es": "IA que solo funciona en habitaciones oscuras",
                  "de": "KI die nur in dunklen Raeumen funktioniert",
                  "nl": "AI die alleen in donkere kamers werkt"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The black box problem refers to AI systems whose decision-making processes are opaque and cannot be easily understood, making it difficult to explain why certain decisions were made.",
                  "es": "El problema de la caja negra se refiere a sistemas de IA cuyos procesos de toma de decisiones son opacos y no pueden ser facilmente entendidos, haciendo dificil explicar por que se tomaron ciertas decisiones.",
                  "de": "Das Black Box Problem bezieht sich auf KI-Systeme, deren Entscheidungsprozesse undurchsichtig und nicht leicht verstaendlich sind, was es schwierig macht zu erklaeren, warum bestimmte Entscheidungen getroffen wurden.",
                  "nl": "Het black box probleem verwijst naar AI systemen waarvan de besluitvormingsprocessen ondoorzichtig zijn en niet gemakkelijk begrepen kunnen worden, waardoor het moeilijk is uit te leggen waarom bepaalde beslissingen genomen werden."
        }
      },
      {
        question: {
                  "en": "What does 'fairness' mean in the context of AI systems?",
                  "es": "Que significa 'equidad' en el contexto de sistemas de IA?",
                  "de": "Was bedeutet 'Fairness' im Kontext von KI-Systemen?",
                  "nl": "Wat betekent 'eerlijkheid' in de context van AI systemen?"
        },
        options: [
        {
                  "en": "AI should treat all groups and individuals equitably without discrimination",
                  "es": "La IA debe tratar a todos los grupos e individuos de manera equitativa sin discriminacion",
                  "de": "KI sollte alle Gruppen und Individuen gerecht ohne Diskriminierung behandeln",
                  "nl": "AI moet alle groepen en individuen rechtvaardig behandelen zonder discriminatie"
        },
        {
                  "en": "AI should work the same speed for everyone",
                  "es": "La IA debe trabajar a la misma velocidad para todos",
                  "de": "KI sollte fuer alle gleich schnell arbeiten",
                  "nl": "AI moet voor iedereen even snel werken"
        },
        {
                  "en": "AI should use the same amount of electricity",
                  "es": "La IA debe usar la misma cantidad de electricidad",
                  "de": "KI sollte die gleiche Menge Strom verbrauchen",
                  "nl": "AI moet dezelfde hoeveelheid elektriciteit gebruiken"
        },
        {
                  "en": "AI should always choose the cheapest option",
                  "es": "La IA siempre debe elegir la opcion mas barata",
                  "de": "KI sollte immer die guenstigste Option waehlen",
                  "nl": "AI moet altijd de goedkoopste optie kiezen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Fairness in AI means ensuring equal treatment and avoiding discrimination based on protected characteristics like race, gender, age, or other sensitive attributes.",
                  "es": "La equidad en IA significa asegurar trato igual y evitar discriminacion basada en caracteristicas protegidas como raza, genero, edad u otros atributos sensibles.",
                  "de": "Fairness in der KI bedeutet gleichberechtigte Behandlung sicherzustellen und Diskriminierung basierend auf geschuetzten Eigenschaften wie Rasse, Geschlecht, Alter oder anderen sensiblen Attributen zu vermeiden.",
                  "nl": "Eerlijkheid in AI betekent gelijke behandeling verzekeren en discriminatie voorkomen gebaseerd op beschermde kenmerken zoals ras, geslacht, leeftijd of andere gevoelige eigenschappen."
        }
      },
      {
        question: {
                  "en": "What is 'informed consent' in AI data collection?",
                  "es": "Que es el 'consentimiento informado' en la recoleccion de datos de IA?",
                  "de": "Was ist 'informierte Einwilligung' bei der KI-Datensammlung?",
                  "nl": "Wat is 'geÃ¯nformeerde toestemming' bij AI data verzameling?"
        },
        options: [
        {
                  "en": "Telling people after using their data",
                  "es": "Decirle a las personas despues de usar sus datos",
                  "de": "Menschen nach der Verwendung ihrer Daten Bescheid geben",
                  "nl": "Mensen vertellen nadat hun data gebruikt is"
        },
        {
                  "en": "Asking permission before using someone's personal data",
                  "es": "Pedir permiso antes de usar los datos personales de alguien",
                  "de": "Um Erlaubnis fragen bevor jemandes persoenliche Daten verwendet werden",
                  "nl": "Toestemming vragen voordat iemands persoonlijke data gebruikt wordt"
        },
        {
                  "en": "Using data without permission",
                  "es": "Usar datos sin permiso",
                  "de": "Daten ohne Erlaubnis verwenden",
                  "nl": "Data gebruiken zonder toestemming"
        },
        {
                  "en": "People clearly understanding what their data will be used for before agreeing",
                  "es": "Las personas entienden claramente para que se usaran sus datos antes de estar de acuerdo",
                  "de": "Menschen verstehen klar wofuer ihre Daten verwendet werden bevor sie zustimmen",
                  "nl": "Mensen begrijpen duidelijk waarvoor hun data gebruikt zal worden voordat ze instemmen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Informed consent means people should fully understand how their data will be collected, used, and shared before they agree to participate, not just give permission blindly.",
                  "es": "El consentimiento informado significa que las personas deben entender completamente como sus datos seran recolectados, usados y compartidos antes de aceptar participar, no solo dar permiso a ciegas.",
                  "de": "Informierte Einwilligung bedeutet, dass Menschen vollstaendig verstehen sollten, wie ihre Daten gesammelt, verwendet und geteilt werden, bevor sie zustimmen teilzunehmen, nicht nur blind Erlaubnis geben.",
                  "nl": "GeÃ¯nformeerde toestemming betekent dat mensen volledig moeten begrijpen hoe hun data verzameld, gebruikt en gedeeld zal worden voordat ze instemmen om deel te nemen, niet alleen blindelings toestemming geven."
        }
      },
      {
        question: {
                  "en": "What is an ethical concern with facial recognition technology?",
                  "es": "Cual es una preocupacion etica con la tecnologia de reconocimiento facial?",
                  "de": "Was ist ein ethisches Bedenken bei Gesichtserkennungstechnologie?",
                  "nl": "Wat is een ethische zorg bij gezichtsherkenning technologie?"
        },
        options: [
        {
                  "en": "It makes photos look blurry",
                  "es": "Hace que las fotos se vean borrosas",
                  "de": "Es macht Fotos unscharf",
                  "nl": "Het maakt foto's wazig"
        },
        {
                  "en": "It uses too much computer memory",
                  "es": "Usa demasiada memoria de computadora",
                  "de": "Es verbraucht zu viel Computerspeicher",
                  "nl": "Het gebruikt te veel computergeheugen"
        },
        {
                  "en": "It can violate privacy and enable mass surveillance",
                  "es": "Puede violar la privacidad y permitir vigilancia masiva",
                  "de": "Es kann Privatsphaere verletzen und Massenueberwachung ermoeglichen",
                  "nl": "Het kan privacy schenden en massale surveillance mogelijk maken"
        },
        {
                  "en": "It only works with expensive cameras",
                  "es": "Solo funciona con camaras caras",
                  "de": "Es funktioniert nur mit teuren Kameras",
                  "nl": "Het werkt alleen met dure camera's"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Facial recognition raises serious privacy concerns as it can be used to track people's movements and activities without their knowledge, potentially enabling authoritarian surveillance.",
                  "es": "El reconocimiento facial genera serias preocupaciones de privacidad ya que puede usarse para rastrear movimientos y actividades de las personas sin su conocimiento, potencialmente permitiendo vigilancia autoritaria.",
                  "de": "Gesichtserkennung wirft ernsthafte Datenschutzbedenken auf, da sie verwendet werden kann, um Bewegungen und Aktivitaeten von Menschen ohne ihr Wissen zu verfolgen, was moeglicherweise autoritaere Ueberwachung ermoeglichen kann.",
                  "nl": "Gezichtsherkenning roept serieuze privacyzorgen op omdat het gebruikt kan worden om mensen's bewegingen en activiteiten te volgen zonder hun medeweten, wat mogelijk autoritaire surveillance kan mogelijk maken."
        }
      },
      {
        question: {
                  "en": "What does 'AI for social good' mean?",
                  "es": "Que significa 'IA para el bien social'?",
                  "de": "Was bedeutet 'KI fuer das Gemeinwohl'?",
                  "nl": "Wat betekent 'AI voor maatschappelijk welzijn'?"
        },
        options: [
        {
                  "en": "Using AI to solve social problems and help communities",
                  "es": "Usar IA para resolver problemas sociales y ayudar comunidades",
                  "de": "KI verwenden um soziale Probleme zu loesen und Gemeinschaften zu helfen",
                  "nl": "AI gebruiken om sociale problemen op te lossen en gemeenschappen te helpen"
        },
        {
                  "en": "Making AI systems more social and talkative",
                  "es": "Hacer sistemas de IA mas sociales y conversadores",
                  "de": "KI-Systeme sozialer und gesprachiger machen",
                  "nl": "AI systemen socialer en praatgragiger maken"
        },
        {
                  "en": "Teaching AI to be polite",
                  "es": "Ensenar a la IA a ser educada",
                  "de": "KI beibringen hoeflich zu sein",
                  "nl": "AI leren om beleefd te zijn"
        },
        {
                  "en": "Using AI only on social media platforms",
                  "es": "Usar IA solo en plataformas de redes sociales",
                  "de": "KI nur auf Social-Media-Plattformen verwenden",
                  "nl": "AI alleen gebruiken op sociale media platformen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AI for social good refers to using AI technologies to address societal challenges like healthcare, education, climate change, and poverty to benefit humanity.",
                  "es": "IA para el bien social se refiere a usar tecnologias de inteligencia artificial para abordar desafios sociales como salud, educacion, cambio climatico y pobreza para beneficiar a la humanidad.",
                  "de": "KI fuer das Gemeinwohl bezieht sich darauf, kuenstliche Intelligenz-Technologien zu nutzen, um gesellschaftliche Herausforderungen wie Gesundheitswesen, Bildung, Klimawandel und Armut anzugehen, um der Menschheit zu nutzen.",
                  "nl": "AI voor maatschappelijk welzijn verwijst naar het gebruik van kunstmatige intelligentie technologieÃ«n om maatschappelijke uitdagingen zoals gezondheidszorg, onderwijs, klimaatverandering en armoede aan te pakken ten voordele van de mensheid."
        }
      },
      {
        question: {
                  "en": "What is 'historical bias' in AI training data?",
                  "es": "Que es el 'sesgo historico' en datos de entrenamiento de IA?",
                  "de": "Was ist 'historische Verzerrung' in KI-Trainingsdaten?",
                  "nl": "Wat is 'historische bias' in AI trainingsdata?"
        },
        options: [
        {
                  "en": "When AI learns about historical events",
                  "es": "Cuando la IA aprende sobre eventos historicos",
                  "de": "Wenn KI ueber historische Ereignisse lernt",
                  "nl": "Wanneer AI leert over historische gebeurtenissen"
        },
        {
                  "en": "When AI studies history books",
                  "es": "Cuando la IA estudia libros de historia",
                  "de": "Wenn KI Geschichtsbuecher studiert",
                  "nl": "Wanneer AI geschiedenisboeken bestudeert"
        },
        {
                  "en": "When data is very old",
                  "es": "Cuando los datos son muy antiguos",
                  "de": "Wenn Daten sehr alt sind",
                  "nl": "Wanneer data zeer oud is"
        },
        {
                  "en": "When training data reflects past discrimination and inequities",
                  "es": "Cuando los datos de entrenamiento reflejan discriminacion e inequidades pasadas",
                  "de": "Wenn Trainingsdaten vergangene Diskriminierung und Ungerechtigkeiten widerspiegeln",
                  "nl": "Wanneer trainingsdata vroegere discriminatie en ongelijkheden weergeeft"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Historical bias occurs when training data contains patterns of past discrimination, causing AI systems to perpetuate unfair treatment that existed in historical practices.",
                  "es": "El sesgo historico ocurre cuando los datos de entrenamiento contienen patrones de discriminacion pasada, causando que sistemas de IA perpetuen trato injusto que existia en practicas historicas.",
                  "de": "Historische Verzerrung tritt auf wenn Trainingsdaten Muster vergangener Diskriminierung enthalten, was dazu fuehrt dass KI-Systeme unfaire Behandlung fortsetzen die in historischen Praktiken existierte.",
                  "nl": "Historische bias ontstaat wanneer trainingsdata patronen van vroegere discriminatie bevat, waardoor AI systemen oneerlijke behandeling bestendigen die bestond in historische praktijken."
        }
      },
      {
        question: {
                  "en": "What is 'confirmation bias' in AI systems?",
                  "es": "Que es el 'sesgo de confirmacion' en sistemas de IA?",
                  "de": "Was ist 'Bestatigungsverzerrung' in KI-Systemen?",
                  "nl": "Wat is 'bevestigingsbias' in AI systemen?"
        },
        options: [
        {
                  "en": "When AI systems reinforce existing beliefs or stereotypes",
                  "es": "Cuando sistemas de IA refuerzan creencias o estereotipos existentes",
                  "de": "Wenn KI-Systeme bestehende Ueberzeugungen oder Stereotypen verstaerken",
                  "nl": "Wanneer AI systemen bestaande overtuigingen of stereotypen versterken"
        },
        {
                  "en": "When AI double-checks its answers",
                  "es": "Cuando la IA verifica dos veces sus respuestas",
                  "de": "Wenn KI ihre Antworten doppelt ueberprueft",
                  "nl": "Wanneer AI zijn antwoorden dubbel controleert"
        },
        {
                  "en": "When AI asks for confirmation before acting",
                  "es": "Cuando la IA pide confirmacion antes de actuar",
                  "de": "Wenn KI um Bestaetigung bittet bevor sie handelt",
                  "nl": "Wanneer AI om bevestiging vraagt voor het handelt"
        },
        {
                  "en": "When AI confirms passwords",
                  "es": "Cuando la IA confirma contrasenas",
                  "de": "Wenn KI Passwoerter bestaetigt",
                  "nl": "Wanneer AI wachtwoorden bevestigt"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Confirmation bias in AI occurs when systems are designed or trained in ways that reinforce existing prejudices or stereotypes rather than challenging them with diverse perspectives.",
                  "es": "El sesgo de confirmacion en IA ocurre cuando sistemas son disenados o entrenados de maneras que refuerzan prejuicios o estereotipos existentes en lugar de desafiarlos con perspectivas diversas.",
                  "de": "Bestatigungsverzerrung in KI tritt auf wenn Systeme so entworfen oder trainiert werden dass sie bestehende Vorurteile oder Stereotypen verstaerken anstatt sie mit diversen Perspektiven herauszufordern.",
                  "nl": "Bevestigingsbias in AI ontstaat wanneer systemen ontworpen of getraind worden op manieren die bestaande vooroordelen of stereotypen versterken in plaats van ze uit te dagen met diverse perspectieven."
        }
      },
      {
        question: {
                  "en": "What does 'algorithmic discrimination' mean?",
                  "es": "Que significa 'discriminacion algoritmica'?",
                  "de": "Was bedeutet 'algorithmische Diskriminierung'?",
                  "nl": "Wat betekent 'algoritmische discriminatie'?"
        },
        options: [
        {
                  "en": "When algorithms compete with each other",
                  "es": "Cuando algoritmos compiten entre si",
                  "de": "Wenn Algorithmen miteinander konkurrieren",
                  "nl": "Wanneer algoritmes met elkaar concurreren"
        },
        {
                  "en": "When AI chooses between different algorithms",
                  "es": "Cuando la IA elige entre diferentes algoritmos",
                  "de": "Wenn KI zwischen verschiedenen Algorithmen waehlt",
                  "nl": "Wanneer AI kiest tussen verschillende algoritmes"
        },
        {
                  "en": "When AI systems work slowly",
                  "es": "Cuando sistemas de IA trabajan lentamente",
                  "de": "Wenn KI-Systeme langsam arbeiten",
                  "nl": "Wanneer AI systemen langzaam werken"
        },
        {
                  "en": "When AI systems unfairly treat people based on protected characteristics",
                  "es": "Cuando sistemas de IA tratan injustamente a personas basado en caracteristicas protegidas",
                  "de": "Wenn KI-Systeme Menschen unfair basierend auf geschuetzten Eigenschaften behandeln",
                  "nl": "Wanneer AI systemen mensen oneerlijk behandelen gebaseerd op beschermde kenmerken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Algorithmic discrimination occurs when AI systems systematically disadvantage certain groups based on race, gender, age, or other protected characteristics, often reproducing societal biases.",
                  "es": "La discriminacion algoritmica ocurre cuando sistemas de IA sistematicamente desventajan ciertos grupos basados en raza, genero, edad u otras caracteristicas protegidas, a menudo reproduciendo sesgos sociales.",
                  "de": "Algorithmische Diskriminierung tritt auf wenn KI-Systeme systematisch bestimmte Gruppen basierend auf Rasse, Geschlecht, Alter oder anderen geschuetzten Eigenschaften benachteiligen, oft gesellschaftliche Verzerrungen reproduzierend.",
                  "nl": "Algoritmische discriminatie ontstaat wanneer AI systemen systematisch bepaalde groepen benadelen gebaseerd op ras, geslacht, leeftijd of andere beschermde kenmerken, vaak maatschappelijke vooroordelen reproducerend."
        }
      },
      {
        question: {
                  "en": "What is 'selection bias' in machine learning?",
                  "es": "Que es el 'sesgo de seleccion' en aprendizaje automatico?",
                  "de": "Was ist 'Auswahlverzerrung' im maschinellen Lernen?",
                  "nl": "Wat is 'selectiebias' in machine learning?"
        },
        options: [
        {
                  "en": "When users select biased options",
                  "es": "Cuando usuarios seleccionan opciones sesgadas",
                  "de": "Wenn Nutzer verzerrte Optionen auswaehlen",
                  "nl": "Wanneer gebruikers bevooroordeelde opties selecteren"
        },
        {
                  "en": "When AI selects the wrong answers",
                  "es": "Cuando la IA selecciona respuestas incorrectas",
                  "de": "Wenn KI falsche Antworten auswaehlt",
                  "nl": "Wanneer AI verkeerde antwoorden selecteert"
        },
        {
                  "en": "When training data doesn't represent the full population",
                  "es": "Cuando datos de entrenamiento no representan la poblacion completa",
                  "de": "Wenn Trainingsdaten nicht die gesamte Bevoelkerung repraesentieren",
                  "nl": "Wanneer trainingsdata niet de volledige populatie vertegenwoordigt"
        },
        {
                  "en": "When AI randomly selects data",
                  "es": "Cuando la IA selecciona datos aleatoriamente",
                  "de": "Wenn KI zufaellig Daten auswaehlt",
                  "nl": "Wanneer AI willekeurig data selecteert"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Selection bias occurs when the training dataset is not representative of the broader population the AI will serve, leading to poor performance for underrepresented groups.",
                  "es": "El sesgo de seleccion ocurre cuando el conjunto de datos de entrenamiento no es representativo de la poblacion mas amplia que la IA servira, llevando a mal rendimiento para grupos subrepresentados.",
                  "de": "Auswahlverzerrung tritt auf wenn der Trainingsdatensatz nicht repraesentativ fuer die breitere Bevoelkerung ist die die KI bedienen wird, was zu schlechter Leistung fuer unterrepraesentierte Gruppen fuehrt.",
                  "nl": "Selectiebias ontstaat wanneer de trainingsdataset niet representatief is voor de bredere populatie die de AI zal bedienen, wat leidt tot slechte prestaties voor ondervertegenwoordigde groepen."
        }
      },
      {
        question: {
                  "en": "What is 'intersectionality' in the context of AI bias?",
                  "es": "Que es la 'interseccionalidad' en el contexto de sesgo de IA?",
                  "de": "Was ist 'Intersektionalitaet' im Kontext von KI-Verzerrung?",
                  "nl": "Wat is 'intersectionaliteit' in de context van AI bias?"
        },
        options: [
        {
                  "en": "When roads intersect",
                  "es": "Cuando las carreteras se cruzan",
                  "de": "Wenn Strassen sich kreuzen",
                  "nl": "Wanneer wegen kruisen"
        },
        {
                  "en": "When people experience multiple overlapping forms of bias simultaneously",
                  "es": "Cuando personas experimentan multiples formas superpuestas de sesgo simultaneamente",
                  "de": "Wenn Menschen mehrere ueberlappende Formen von Verzerrung gleichzeitig erfahren",
                  "nl": "Wanneer mensen meerdere overlappende vormen van bias tegelijkertijd ervaren"
        },
        {
                  "en": "When AI systems work together",
                  "es": "Cuando sistemas de IA trabajan juntos",
                  "de": "Wenn KI-Systeme zusammenarbeiten",
                  "nl": "Wanneer AI systemen samenwerken"
        },
        {
                  "en": "When data flows intersect",
                  "es": "Cuando flujos de datos se cruzan",
                  "de": "Wenn Datenfluesse sich kreuzen",
                  "nl": "Wanneer datastromen kruisen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Intersectionality recognizes that individuals may face compound discrimination based on multiple identity characteristics (e.g., being both a racial minority and female), requiring AI systems to consider these overlapping biases.",
                  "es": "La interseccionalidad reconoce que individuos pueden enfrentar discriminacion compuesta basada en multiples caracteristicas de identidad (ej., ser tanto minoria racial como mujer), requiriendo que sistemas de IA consideren estos sesgos superpuestos.",
                  "de": "Intersektionalitaet erkennt dass Individuen zusammengesetzte Diskriminierung basierend auf mehreren Identitaetsmerkmalen erfahren koennen (z.B. sowohl Rassenmischung als auch weiblich), was erfordert dass KI-Systeme diese ueberlappenden Verzerrungen beruecksichtigen.",
                  "nl": "Intersectionaliteit erkent dat individuen samengestelde discriminatie kunnen ondervinden gebaseerd op meerdere identiteitskenmerken (bijv. zowel raciale minderheid als vrouw), wat vereist dat AI systemen deze overlappende vooroordelen overwegen."
        }
      },
      {
        question: {
                  "en": "What does 'fairness through awareness' mean in AI?",
                  "es": "Que significa 'equidad a traves de conciencia' en IA?",
                  "de": "Was bedeutet 'Fairness durch Bewusstsein' in der KI?",
                  "nl": "Wat betekent 'eerlijkheid door bewustzijn' in AI?"
        },
        options: [
        {
                  "en": "Making AI systems more aware of their surroundings",
                  "es": "Hacer sistemas de IA mas conscientes de su entorno",
                  "de": "KI-Systeme bewusster fuer ihre Umgebung machen",
                  "nl": "AI systemen bewuster maken van hun omgeving"
        },
        {
                  "en": "Explicitly considering protected attributes to ensure fair outcomes",
                  "es": "Considerar explicitamente atributos protegidos para asegurar resultados justos",
                  "de": "Geschuetzte Attribute explizit beruecksichtigen um faire Ergebnisse sicherzustellen",
                  "nl": "Expliciet beschermde kenmerken overwegen om eerlijke uitkomsten te waarborgen"
        },
        {
                  "en": "Teaching AI to be self-aware",
                  "es": "Ensenar a la IA a ser autoconsciente",
                  "de": "KI beibringen selbstbewusst zu sein",
                  "nl": "AI leren zelfbewust te zijn"
        },
        {
                  "en": "Increasing AI processing speed",
                  "es": "Aumentar velocidad de procesamiento de IA",
                  "de": "KI-Verarbeitungsgeschwindigkeit erhoehen",
                  "nl": "AI verwerkingssnelheid verhogen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Fairness through awareness involves explicitly using information about protected characteristics (like race or gender) during model training to ensure equitable treatment across different groups.",
                  "es": "Equidad a traves de conciencia involucra usar explicitamente informacion sobre caracteristicas protegidas (como raza o genero) durante entrenamiento del modelo para asegurar trato equitativo entre diferentes grupos.",
                  "de": "Fairness durch Bewusstsein beinhaltet die explizite Verwendung von Informationen ueber geschuetzte Eigenschaften (wie Rasse oder Geschlecht) waehrend des Modelltrainings um gerechte Behandlung verschiedener Gruppen sicherzustellen.",
                  "nl": "Eerlijkheid door bewustzijn houdt in dat expliciet informatie over beschermde kenmerken (zoals ras of geslacht) gebruikt wordt tijdens modeltraining om rechtvaardige behandeling tussen verschillende groepen te waarborgen."
        }
      },
      {
        question: {
                  "en": "What is 'fairness through unawareness' in AI?",
                  "es": "Que es 'equidad a traves de desconocimiento' en IA?",
                  "de": "Was ist 'Fairness durch Unwissen' in der KI?",
                  "nl": "Wat is 'eerlijkheid door onwetendheid' in AI?"
        },
        options: [
        {
                  "en": "Training AI without supervision",
                  "es": "Entrenar IA sin supervision",
                  "de": "KI ohne Aufsicht trainieren",
                  "nl": "AI trainen zonder toezicht"
        },
        {
                  "en": "Hiding AI processes from users",
                  "es": "Ocultar procesos de IA de usuarios",
                  "de": "KI-Prozesse vor Nutzern verbergen",
                  "nl": "AI processen verbergen voor gebruikers"
        },
        {
                  "en": "Making AI unaware of its decisions",
                  "es": "Hacer que la IA no sea consciente de sus decisiones",
                  "de": "KI sich ihrer Entscheidungen nicht bewusst machen",
                  "nl": "AI onbewust maken van zijn beslissingen"
        },
        {
                  "en": "Removing protected attributes from the model, which may not guarantee fairness",
                  "es": "Remover atributos protegidos del modelo, lo cual puede no garantizar equidad",
                  "de": "Geschuetzte Attribute aus dem Modell entfernen, was Fairness moeglicherweise nicht garantiert",
                  "nl": "Beschermde kenmerken uit het model verwijderen, wat eerlijkheid mogelijk niet garandeert"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Fairness through unawareness attempts to achieve fairness by excluding protected attributes from the model, but this approach often fails because proxy variables can still lead to discriminatory outcomes.",
                  "es": "Equidad a traves de desconocimiento intenta lograr equidad excluyendo atributos protegidos del modelo, pero este enfoque a menudo falla porque variables proxy pueden aun llevar a resultados discriminatorios.",
                  "de": "Fairness durch Unwissen versucht Fairness zu erreichen indem geschuetzte Attribute aus dem Modell ausgeschlossen werden, aber dieser Ansatz versagt oft weil Proxy-Variablen immer noch zu diskriminierenden Ergebnissen fuehren koennen.",
                  "nl": "Eerlijkheid door onwetendheid probeert eerlijkheid te bereiken door beschermde kenmerken uit het model uit te sluiten, maar deze aanpak faalt vaak omdat proxy variabelen nog steeds tot discriminerende uitkomsten kunnen leiden."
        }
      },
      {
        question: {
                  "en": "What are 'proxy variables' in the context of AI bias?",
                  "es": "Que son 'variables proxy' en el contexto de sesgo de IA?",
                  "de": "Was sind 'Proxy-Variablen' im Kontext von KI-Verzerrung?",
                  "nl": "Wat zijn 'proxy variabelen' in de context van AI bias?"
        },
        options: [
        {
                  "en": "Temporary storage variables",
                  "es": "Variables de almacenamiento temporal",
                  "de": "Temporaere Speichervariablen",
                  "nl": "Tijdelijke opslagvariabelen"
        },
        {
                  "en": "Variables that represent server addresses",
                  "es": "Variables que representan direcciones de servidor",
                  "de": "Variablen die Serveradressen repraesentieren",
                  "nl": "Variabelen die serveradressen vertegenwoordigen"
        },
        {
                  "en": "Variables that indirectly reveal protected characteristics",
                  "es": "Variables que indirectamente revelan caracteristicas protegidas",
                  "de": "Variablen die indirekt geschuetzte Eigenschaften preisgeben",
                  "nl": "Variabelen die indirect beschermde kenmerken onthullen"
        },
        {
                  "en": "Variables that speed up processing",
                  "es": "Variables que aceleran el procesamiento",
                  "de": "Variablen die die Verarbeitung beschleunigen",
                  "nl": "Variabelen die verwerking versnellen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Proxy variables are data points that correlate with protected characteristics (like ZIP code correlating with race) and can lead to discriminatory outcomes even when protected attributes are not directly used.",
                  "es": "Variables proxy son puntos de datos que se correlacionan con caracteristicas protegidas (como codigo postal correlacionandose con raza) y pueden llevar a resultados discriminatorios aun cuando atributos protegidos no se usan directamente.",
                  "de": "Proxy-Variablen sind Datenpunkte die mit geschuetzten Eigenschaften korrelieren (wie Postleitzahl mit Rasse korreliert) und koennen zu diskriminierenden Ergebnissen fuehren auch wenn geschuetzte Attribute nicht direkt verwendet werden.",
                  "nl": "Proxy variabelen zijn datapunten die correleren met beschermde kenmerken (zoals postcode die correleert met ras) en kunnen leiden tot discriminerende uitkomsten zelfs wanneer beschermde kenmerken niet direct gebruikt worden."
        }
      },
      {
        question: {
                  "en": "What is 'demographic parity' in AI fairness?",
                  "es": "Que es 'paridad demografica' en equidad de IA?",
                  "de": "Was ist 'demografische Paritaet' in KI-Fairness?",
                  "nl": "Wat is 'demografische pariteit' in AI eerlijkheid?"
        },
        options: [
        {
                  "en": "Having equal numbers of people in each group",
                  "es": "Tener numeros iguales de personas en cada grupo",
                  "de": "Gleiche Anzahl von Personen in jeder Gruppe haben",
                  "nl": "Gelijke aantallen mensen in elke groep hebben"
        },
        {
                  "en": "Studying population statistics",
                  "es": "Estudiar estadisticas de poblacion",
                  "de": "Bevoelkerungsstatistiken studieren",
                  "nl": "Bevolkingsstatistieken bestuderen"
        },
        {
                  "en": "Ensuring equal positive outcomes across different demographic groups",
                  "es": "Asegurar resultados positivos iguales entre diferentes grupos demograficos",
                  "de": "Gleiche positive Ergebnisse fuer verschiedene demografische Gruppen sicherstellen",
                  "nl": "Gelijke positieve uitkomsten tussen verschillende demografische groepen waarborgen"
        },
        {
                  "en": "Balancing server loads",
                  "es": "Equilibrar cargas de servidor",
                  "de": "Serverlasten ausbalancieren",
                  "nl": "Serverbelastingen balanceren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Demographic parity requires that AI systems provide equal positive outcome rates (like loan approvals or job recommendations) across different demographic groups, regardless of other factors.",
                  "es": "La paridad demografica requiere que sistemas de IA proporcionen tasas de resultados positivos iguales (como aprobaciones de prestamos o recomendaciones de trabajo) entre diferentes grupos demograficos, sin importar otros factores.",
                  "de": "Demografische Paritaet erfordert dass KI-Systeme gleiche positive Ergebnisraten (wie Kreditgenehmigungen oder Stellenempfehlungen) fuer verschiedene demografische Gruppen bieten, unabhaengig von anderen Faktoren.",
                  "nl": "Demografische pariteit vereist dat AI systemen gelijke positieve uitkomstpercentages (zoals leninggodkeuringen of baanaanbevelingen) bieden voor verschillende demografische groepen, ongeacht andere factoren."
        }
      },
      {
        question: {
                  "en": "What does 'equalized odds' mean in AI fairness?",
                  "es": "Que significa 'probabilidades igualadas' en equidad de IA?",
                  "de": "Was bedeuten 'ausgeglichene Chancen' in KI-Fairness?",
                  "nl": "Wat betekent 'gelijke kansen' in AI eerlijkheid?"
        },
        options: [
        {
                  "en": "Balancing computational resources",
                  "es": "Equilibrar recursos computacionales",
                  "de": "Rechenressourcen ausbalancieren",
                  "nl": "Computationele middelen balanceren"
        },
        {
                  "en": "Equal processing time for all users",
                  "es": "Tiempo de procesamiento igual para todos los usuarios",
                  "de": "Gleiche Verarbeitungszeit fuer alle Nutzer",
                  "nl": "Gelijke verwerkingstijd voor alle gebruikers"
        },
        {
                  "en": "Making gambling odds the same for everyone",
                  "es": "Hacer que las probabilidades de apuesta sean iguales para todos",
                  "de": "Gluecksspielquoten fuer alle gleich machen",
                  "nl": "Gokodds voor iedereen gelijk maken"
        },
        {
                  "en": "Equal true positive and false positive rates across groups for the same actual outcome",
                  "es": "Tasas iguales de verdaderos positivos y falsos positivos entre grupos para el mismo resultado real",
                  "de": "Gleiche wahre/falsche positive Raten zwischen Gruppen fuer gleiches tatsaechliches Ergebnis",
                  "nl": "Gelijke echte/vals positieve percentages tussen groepen voor hetzelfde werkelijke resultaat"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Equalized odds ensures that for any given true outcome, the AI system has the same true positive rate and false positive rate across different demographic groups, providing procedural fairness.",
                  "es": "Las probabilidades igualadas aseguran que para cualquier resultado verdadero dado, el sistema de IA tenga la misma tasa de verdaderos positivos y falsos positivos entre diferentes grupos demograficos, proporcionando equidad procesal.",
                  "de": "Ausgeglichene Chancen stellen sicher dass fuer jedes gegebene wahre Ergebnis das KI-System die gleiche wahre positive Rate und falsche positive Rate zwischen verschiedenen demografischen Gruppen hat, was prozedurale Fairness bietet.",
                  "nl": "Gelijke kansen zorgen ervoor dat voor elke gegeven werkelijke uitkomst het AI systeem hetzelfde echte positieve percentage en vals positieve percentage heeft tussen verschillende demografische groepen, wat procedurele eerlijkheid biedt."
        }
      },
      {
        question: {
                  "en": "What is 'calibration' in the context of AI fairness?",
                  "es": "Que es 'calibracion' en el contexto de equidad de IA?",
                  "de": "Was ist 'Kalibrierung' im Kontext von KI-Fairness?",
                  "nl": "Wat is 'kalibratie' in de context van AI eerlijkheid?"
        },
        options: [
        {
                  "en": "Ensuring predicted probabilities match actual outcomes equally across groups",
                  "es": "Asegurar que probabilidades predichas coincidan con resultados reales igualmente entre grupos",
                  "de": "Sicherstellen dass Vorhersagen tatsaechlichen Ergebnissen gleich zwischen Gruppen entsprechen",
                  "nl": "Ervoor zorgen dat voorspellingen overeenkomen met werkelijke uitkomsten tussen groepen"
        },
        {
                  "en": "Measuring system performance",
                  "es": "Medir rendimiento del sistema",
                  "de": "Systemleistung messen",
                  "nl": "Systeemprestaties meten"
        },
        {
                  "en": "Setting up hardware correctly",
                  "es": "Configurar hardware correctamente",
                  "de": "Hardware korrekt einrichten",
                  "nl": "Hardware correct instellen"
        },
        {
                  "en": "Adjusting computer settings",
                  "es": "Ajustar configuraciones de computadora",
                  "de": "Computereinstellungen anpassen",
                  "nl": "Computerinstellingen aanpassen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Calibration in AI fairness means that when the system predicts a certain probability of an outcome, that probability should be equally accurate across different demographic groups.",
                  "es": "Calibracion en equidad de IA significa que cuando el sistema predice cierta probabilidad de un resultado, esa probabilidad deberia ser igualmente precisa entre diferentes grupos demograficos.",
                  "de": "Kalibrierung in KI-Fairness bedeutet dass wenn das System eine bestimmte Wahrscheinlichkeit eines Ergebnisses vorhersagt, diese Wahrscheinlichkeit zwischen verschiedenen demografischen Gruppen gleich genau sein sollte.",
                  "nl": "Kalibratie in AI eerlijkheid betekent dat wanneer het systeem een bepaalde kans op een uitkomst voorspelt, die kans even nauwkeurig zou moeten zijn tussen verschillende demografische groepen."
        }
      },
      {
        question: {
                  "en": "What is 'individual fairness' in AI systems?",
                  "es": "Que es 'equidad individual' en sistemas de IA?",
                  "de": "Was ist 'individuelle Fairness' in KI-Systemen?",
                  "nl": "Wat is 'individuele eerlijkheid' in AI systemen?"
        },
        options: [
        {
                  "en": "Giving each person a unique response",
                  "es": "Dar a cada persona una respuesta unica",
                  "de": "Jeder Person eine einzigartige Antwort geben",
                  "nl": "Elke persoon een unieke reactie geven"
        },
        {
                  "en": "Treating similar individuals similarly, regardless of group membership",
                  "es": "Tratar individuos similares de manera similar, sin importar pertenencia a grupo",
                  "de": "Aehnliche Individuen aehnlich behandeln, unabhaengig von Gruppenmitgliedschaft",
                  "nl": "Vergelijkbare individuen op vergelijkbare wijze behandelen, ongeacht groepslidmaatschap"
        },
        {
                  "en": "Personalizing AI interfaces",
                  "es": "Personalizar interfaces de IA",
                  "de": "KI-Schnittstellen personalisieren",
                  "nl": "AI interfaces personaliseren"
        },
        {
                  "en": "Processing one person at a time",
                  "es": "Procesar una persona a la vez",
                  "de": "Eine Person nach der anderen verarbeiten",
                  "nl": "Een persoon tegelijk verwerken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Individual fairness focuses on ensuring that people who are similar in relevant ways receive similar treatment from AI systems, emphasizing consistency in decision-making.",
                  "es": "La equidad individual se enfoca en asegurar que personas que son similares en maneras relevantes reciban trato similar de sistemas de IA, enfatizando consistencia en toma de decisiones.",
                  "de": "Individuelle Fairness konzentriert sich darauf sicherzustellen dass Menschen die auf relevante Weise aehnlich sind aehnliche Behandlung von KI-Systemen erhalten, wobei Konsistenz in der Entscheidungsfindung betont wird.",
                  "nl": "Individuele eerlijkheid richt zich op het waarborgen dat mensen die op relevante manieren vergelijkbaar zijn vergelijkbare behandeling krijgen van AI systemen, met nadruk op consistentie in besluitvorming."
        }
      },
      {
        question: {
                  "en": "What is 'bias amplification' in AI systems?",
                  "es": "Que es 'amplificacion de sesgo' en sistemas de IA?",
                  "de": "Was ist 'Verzerrungsverstaerkung' in KI-Systemen?",
                  "nl": "Wat is 'bias versterking' in AI systemen?"
        },
        options: [
        {
                  "en": "When AI systems make existing biases worse than in the original data",
                  "es": "Cuando sistemas de IA hacen sesgos existentes peores que en los datos originales",
                  "de": "Wenn KI-Systeme bestehende Verzerrungen schlimmer machen als in den urspruenglichen Daten",
                  "nl": "Wanneer AI systemen bestaande vooroordelen erger maken dan in de oorspronkelijke data"
        },
        {
                  "en": "When bias detection becomes more accurate",
                  "es": "Cuando deteccion de sesgo se vuelve mas precisa",
                  "de": "Wenn Verzerrungserkennung genauer wird",
                  "nl": "Wanneer biasdetectie nauwkeuriger wordt"
        },
        {
                  "en": "When AI systems become louder",
                  "es": "Cuando sistemas de IA se vuelven mas ruidosos",
                  "de": "Wenn KI-Systeme lauter werden",
                  "nl": "Wanneer AI systemen luider worden"
        },
        {
                  "en": "When more bias examples are collected",
                  "es": "Cuando se recolectan mas ejemplos de sesgo",
                  "de": "Wenn mehr Verzerrungsbeispiele gesammelt werden",
                  "nl": "Wanneer meer biasvoorbeelden verzameld worden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Bias amplification occurs when ML systems not only reproduce existing biases from training data but actually make them stronger or more pronounced in their outputs.",
                  "es": "La amplificacion de sesgo ocurre cuando sistemas de aprendizaje automatico no solo reproducen sesgos existentes de datos de entrenamiento sino que realmente los hacen mas fuertes o pronunciados en sus salidas.",
                  "de": "Verzerrungsverstaerkung tritt auf wenn maschinelle Lernsysteme nicht nur bestehende Verzerrungen aus Trainingsdaten reproduzieren sondern sie tatsaechlich staerker oder ausgespraegter in ihren Ausgaben machen.",
                  "nl": "Bias versterking ontstaat wanneer machine learning systemen niet alleen bestaande vooroordelen uit trainingsdata reproduceren maar ze daadwerkelijk sterker of uitgesproken maken in hun output."
        }
      },
      {
        question: {
                  "en": "What is 'disparate impact' in AI decision-making?",
                  "es": "Que es 'impacto dispar' en toma de decisiones de IA?",
                  "de": "Was ist 'unterschiedliche Auswirkung' in KI-Entscheidungsfindung?",
                  "nl": "Wat is 'onevenredige impact' in AI besluitvorming?"
        },
        options: [
        {
                  "en": "When AI systems crash unexpectedly",
                  "es": "Cuando sistemas de IA fallan inesperadamente",
                  "de": "Wenn KI-Systeme unerwartet abstuerzen",
                  "nl": "Wanneer AI systemen onverwacht crashen"
        },
        {
                  "en": "When AI impacts are scattered randomly",
                  "es": "Cuando impactos de IA se dispersan aleatoriamente",
                  "de": "Wenn KI-Auswirkungen zufaellig verstreut sind",
                  "nl": "Wanneer AI impacts willekeurig verspreid zijn"
        },
        {
                  "en": "When AI decisions disproportionately affect certain groups negatively",
                  "es": "Cuando decisiones de IA afectan desproporcionadamente ciertos grupos negativamente",
                  "de": "Wenn KI-Entscheidungen bestimmte Gruppen unverhaeltnismaessig negativ betreffen",
                  "nl": "Wanneer AI beslissingen bepaalde groepen onevenredig negatief treffen"
        },
        {
                  "en": "When decisions are made too quickly",
                  "es": "Cuando decisiones se toman demasiado rapido",
                  "de": "Wenn Entscheidungen zu schnell getroffen werden",
                  "nl": "Wanneer beslissingen te snel genomen worden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Disparate impact occurs when an AI system's decisions, while appearing neutral, result in significantly different outcomes for different protected groups, even without intentional discrimination.",
                  "es": "El impacto dispar ocurre cuando decisiones de un sistema de IA, aunque parezcan neutrales, resultan en resultados significativamente diferentes para diferentes grupos protegidos, aun sin discriminacion intencional.",
                  "de": "Unterschiedliche Auswirkung tritt auf wenn Entscheidungen eines KI-Systems, obwohl sie neutral erscheinen, zu signifikant unterschiedlichen Ergebnissen fuer verschiedene geschuetzte Gruppen fuehren, auch ohne beabsichtigte Diskriminierung.",
                  "nl": "Onevenredige impact ontstaat wanneer beslissingen van een AI systeem, hoewel ze neutraal lijken, resulteren in significant verschillende uitkomsten voor verschillende beschermde groepen, zelfs zonder opzettelijke discriminatie."
        }
      },
      {
        question: {
                  "en": "What is 'counterfactual fairness' in AI?",
                  "es": "Que es 'equidad contrafactual' en IA?",
                  "de": "Was ist 'kontrafaktische Fairness' in der KI?",
                  "nl": "Wat is 'contrafeitelijke eerlijkheid' in AI?"
        },
        options: [
        {
                  "en": "Ensuring decisions would be the same if sensitive attributes were different",
                  "es": "Asegurar que decisiones serian iguales si atributos sensibles fueran diferentes",
                  "de": "Sicherstellen dass Entscheidungen gleich waeren wenn sensible Attribute anders waeren",
                  "nl": "Ervoor zorgen dat beslissingen hetzelfde zouden zijn als gevoelige kenmerken anders waren"
        },
        {
                  "en": "Reversing AI decisions",
                  "es": "Revertir decisiones de IA",
                  "de": "KI-Entscheidungen rueckgaengig machen",
                  "nl": "AI beslissingen omkeren"
        },
        {
                  "en": "Creating alternative AI scenarios",
                  "es": "Crear escenarios alternativos de IA",
                  "de": "Alternative KI-Szenarien erstellen",
                  "nl": "Alternatieve AI scenario's creëren"
        },
        {
                  "en": "Testing AI with fake data",
                  "es": "Probar IA con datos falsos",
                  "de": "KI mit gefaelschten Daten testen",
                  "nl": "AI testen met nep data"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Counterfactual fairness asks whether an individual would receive the same decision from an AI system in a hypothetical world where their sensitive attributes (like race or gender) were different.",
                  "es": "La equidad contrafactual pregunta si un individuo recibiria la misma decision de un sistema de IA en un mundo hipotetico donde sus atributos sensibles (como raza o genero) fueran diferentes.",
                  "de": "Kontrafaktische Fairness fragt ob ein Individuum die gleiche Entscheidung von einem KI-System in einer hypothetischen Welt erhalten wuerde wo ihre sensiblen Attribute (wie Rasse oder Geschlecht) anders waeren.",
                  "nl": "Contrafeitelijke eerlijkheid vraagt of een individu dezelfde beslissing zou krijgen van een AI systeem in een hypothetische wereld waar hun gevoelige kenmerken (zoals ras of geslacht) anders waren."
        }
      },
      {
        question: {
                  "en": "What is 'data sovereignty' in AI ethics?",
                  "es": "Que es 'soberania de datos' en etica de IA?",
                  "de": "Was ist 'Datensouveraenitaet' in der KI-Ethik?",
                  "nl": "Wat is 'datasoevereiniteit' in AI ethiek?"
        },
        options: [
        {
                  "en": "The right of individuals or communities to control their own data",
                  "es": "El derecho de individuos o comunidades a controlar sus propios datos",
                  "de": "Das Recht von Individuen oder Gemeinschaften ihre eigenen Daten zu kontrollieren",
                  "nl": "Het recht van individuen of gemeenschappen om hun eigen data te controleren"
        },
        {
                  "en": "Government ownership of all data",
                  "es": "Propiedad gubernamental de todos los datos",
                  "de": "Regierungseigentum an allen Daten",
                  "nl": "Overheidseigendom van alle data"
        },
        {
                  "en": "Data storage in specific countries",
                  "es": "Almacenamiento de datos en paises especificos",
                  "de": "Datenspeicherung in bestimmten Laendern",
                  "nl": "Dataopslag in specifieke landen"
        },
        {
                  "en": "The supremacy of certain datasets",
                  "es": "La supremacia de ciertos conjuntos de datos",
                  "de": "Die Vorherrschaft bestimmter Datensaetze",
                  "nl": "De suprematie van bepaalde datasets"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Data sovereignty recognizes that individuals and communities should have the right to determine how their personal or cultural data is collected, used, and shared, particularly important for indigenous and marginalized groups.",
                  "es": "La soberania de datos reconoce que individuos y comunidades deberian tener derecho a determinar como sus datos personales o culturales son recolectados, usados y compartidos, particularmente importante para grupos indigenas y marginados.",
                  "de": "Datensouveraenitaet erkennt dass Individuen und Gemeinschaften das Recht haben sollten zu bestimmen wie ihre persoenlichen oder kulturellen Daten gesammelt, verwendet und geteilt werden, besonders wichtig fuer indigene und marginalisierte Gruppen.",
                  "nl": "Datasoevereiniteit erkent dat individuen en gemeenschappen het recht zouden moeten hebben om te bepalen hoe hun persoonlijke of culturele data verzameld, gebruikt en gedeeld wordt, bijzonder belangrijk voor inheemse en gemarginaliseerde groepen."
        }
      },
      {
        question: {
                  "en": "What is the 'right to be forgotten' in AI systems?",
                  "es": "Que es el 'derecho al olvido' en sistemas de IA?",
                  "de": "Was ist das 'Recht auf Vergessenwerden' in KI-Systemen?",
                  "nl": "Wat is het 'recht om vergeten te worden' in AI systemen?"
        },
        options: [
        {
                  "en": "Hiding data from search engines",
                  "es": "Ocultar datos de motores de busqueda",
                  "de": "Daten vor Suchmaschinen verbergen",
                  "nl": "Data verbergen voor zoekmachines"
        },
        {
                  "en": "Users forgetting their passwords",
                  "es": "Usuarios olvidando sus contrasenas",
                  "de": "Benutzer vergessen ihre Passwoerter",
                  "nl": "Gebruikers die hun wachtwoorden vergeten"
        },
        {
                  "en": "AI systems automatically forgetting old information",
                  "es": "Sistemas de IA olvidando automaticamente informacion antigua",
                  "de": "KI-Systeme vergessen automatisch alte Informationen",
                  "nl": "AI systemen die automatisch oude informatie vergeten"
        },
        {
                  "en": "The right to request deletion of personal data from AI systems",
                  "es": "El derecho a solicitar eliminacion de datos personales de sistemas de IA",
                  "de": "Das Recht auf Loeschung persoenlicher Daten aus KI-Systemen zu erbitten",
                  "nl": "Het recht om verwijdering van persoonlijke data uit AI systemen aan te vragen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The right to be forgotten, established in regulations like GDPR, allows individuals to request erasure of their personal data from databases and AI systems under certain conditions.",
                  "es": "El derecho al olvido, establecido en regulaciones como GDPR, permite a individuos solicitar eliminacion de sus datos personales de bases de datos y sistemas de IA bajo ciertas condiciones.",
                  "de": "Das Recht auf Vergessenwerden, etabliert in Vorschriften wie GDPR, erlaubt Individuen die Loeschung ihrer persoenlichen Daten aus Datenbanken und KI-Systemen unter bestimmten Bedingungen zu erbitten.",
                  "nl": "Het recht om vergeten te worden, vastgesteld in regelgeving zoals GDPR, stelt individuen in staat om verwijdering van hun persoonlijke data uit databases en AI systemen aan te vragen onder bepaalde voorwaarden."
        }
      },
      {
        question: {
                  "en": "What is 'dual use' concern in AI ethics?",
                  "es": "Que es la preocupacion de 'doble uso' en etica de IA?",
                  "de": "Was ist das 'Dual-Use' Bedenken in der KI-Ethik?",
                  "nl": "Wat is de 'dubbel gebruik' zorg in AI ethiek?"
        },
        options: [
        {
                  "en": "AI technology developed for beneficial purposes that could also be used for harm",
                  "es": "Tecnologia de IA desarrollada para propositos beneficos que tambien podria usarse para danar",
                  "de": "KI-Technologie entwickelt fuer nuetzliche Zwecke die auch fuer Schaden verwendet werden koennte",
                  "nl": "AI technologie ontwikkeld voor nuttige doeleinden die ook voor schade gebruikt zou kunnen worden"
        },
        {
                  "en": "Running AI on two processors",
                  "es": "Ejecutar IA en dos procesadores",
                  "de": "KI auf zwei Prozessoren laufen lassen",
                  "nl": "AI draaien op twee processors"
        },
        {
                  "en": "Using AI for two tasks simultaneously",
                  "es": "Usar IA para dos tareas simultaneamente",
                  "de": "KI fuer zwei Aufgaben gleichzeitig verwenden",
                  "nl": "AI voor twee taken tegelijk gebruiken"
        },
        {
                  "en": "Having backup AI systems",
                  "es": "Tener sistemas de IA de respaldo",
                  "de": "Backup-KI-Systeme haben",
                  "nl": "Backup AI systemen hebben"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Dual use refers to AI technologies that have legitimate beneficial applications but could also be weaponized or misused for harmful purposes, requiring careful consideration of development and deployment.",
                  "es": "Doble uso se refiere a tecnologias de IA que tienen aplicaciones beneficas legitimas pero tambien podrian ser armadas o mal usadas para propositos daninos, requiriendo consideracion cuidadosa de desarrollo y despliegue.",
                  "de": "Dual-Use bezieht sich auf KI-Technologien die legitime nuetzliche Anwendungen haben aber auch bewaffnet oder missbraucht werden koennten fuer schaedliche Zwecke, was sorgfaeltige Ueberlegung bei Entwicklung und Einsatz erfordert.",
                  "nl": "Dubbel gebruik verwijst naar AI technologieën die legitieme nuttige toepassingen hebben maar ook bewapend of misbruikt zouden kunnen worden voor schadelijke doeleinden, wat zorgvuldige overweging van ontwikkeling en inzet vereist."
        }
      },
      {
        question: {
                  "en": "What is 'model interpretability' in AI ethics?",
                  "es": "Que es 'interpretabilidad de modelo' en etica de IA?",
                  "de": "Was ist 'Modellinterpretierbarkeit' in der KI-Ethik?",
                  "nl": "Wat is 'model interpreteerbaarheid' in AI ethiek?"
        },
        options: [
        {
                  "en": "Translating AI outputs to different languages",
                  "es": "Traducir salidas de IA a diferentes idiomas",
                  "de": "KI-Ausgaben in verschiedene Sprachen uebersetzen",
                  "nl": "AI outputs vertalen naar verschillende talen"
        },
        {
                  "en": "The ability to understand and explain how an AI model makes decisions",
                  "es": "La capacidad de entender y explicar como un modelo de IA toma decisiones",
                  "de": "Die Faehigkeit zu verstehen und zu erklaeren wie ein KI-Modell Entscheidungen trifft",
                  "nl": "Het vermogen om te begrijpen en uit te leggen hoe een AI model beslissingen neemt"
        },
        {
                  "en": "Making AI speak clearly",
                  "es": "Hacer que la IA hable claramente",
                  "de": "KI klar sprechen lassen",
                  "nl": "AI duidelijk laten spreken"
        },
        {
                  "en": "Converting AI models to code",
                  "es": "Convertir modelos de IA a codigo",
                  "de": "KI-Modelle in Code konvertieren",
                  "nl": "AI modellen converteren naar code"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Model interpretability refers to the degree to which humans can understand the reasoning behind AI decisions, crucial for trust, debugging, and accountability in high-stakes applications.",
                  "es": "La interpretabilidad de modelo se refiere al grado en que humanos pueden entender el razonamiento detras de decisiones de IA, crucial para confianza, depuracion y responsabilidad en aplicaciones de alto riesgo.",
                  "de": "Modellinterpretierbarkeit bezieht sich auf den Grad zu dem Menschen das Reasoning hinter KI-Entscheidungen verstehen koennen, entscheidend fuer Vertrauen, Debugging und Verantwortlichkeit in Hochrisiko-Anwendungen.",
                  "nl": "Model interpreteerbaarheid verwijst naar de mate waarin mensen de redenering achter AI beslissingen kunnen begrijpen, cruciaal voor vertrouwen, debugging en verantwoordelijkheid in toepassingen met hoge inzet."
        }
      },
      {
        question: {
                  "en": "What is 'algorithmic transparency'?",
                  "es": "Que es 'transparencia algoritmica'?",
                  "de": "Was ist 'algorithmische Transparenz'?",
                  "nl": "Wat is 'algoritmische transparantie'?"
        },
        options: [
        {
                  "en": "Using clear glass in computer cases",
                  "es": "Usar vidrio transparente en cajas de computadora",
                  "de": "Klares Glas in Computergehaeuse verwenden",
                  "nl": "Helder glas gebruiken in computerbehuizingen"
        },
        {
                  "en": "Making AI decision processes visible and understandable to stakeholders",
                  "es": "Hacer procesos de decision de IA visibles y comprensibles para partes interesadas",
                  "de": "KI-Entscheidungsprozesse fuer Stakeholder sichtbar und verstaendlich machen",
                  "nl": "AI besluitvormingsprocessen zichtbaar en begrijpelijk maken voor belanghebbenden"
        },
        {
                  "en": "Publishing all source code publicly",
                  "es": "Publicar todo el codigo fuente publicamente",
                  "de": "Alle Quellcodes oeffentlich veroeffentlichen",
                  "nl": "Alle broncode publiek publiceren"
        },
        {
                  "en": "Making data files visible",
                  "es": "Hacer archivos de datos visibles",
                  "de": "Datendateien sichtbar machen",
                  "nl": "Databestanden zichtbaar maken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Algorithmic transparency involves making information about how AI systems work, including their logic, data sources, and decision criteria, accessible to relevant parties for scrutiny and accountability.",
                  "es": "La transparencia algoritmica involucra hacer informacion sobre como funcionan sistemas de IA, incluyendo su logica, fuentes de datos y criterios de decision, accesible a partes relevantes para escrutinio y responsabilidad.",
                  "de": "Algorithmische Transparenz beinhaltet Informationen darueber wie KI-Systeme funktionieren einschliesslich ihrer Logik, Datenquellen und Entscheidungskriterien fuer relevante Parteien zur Pruefung und Verantwortlichkeit zugaenglich zu machen.",
                  "nl": "Algoritmische transparantie houdt in dat informatie over hoe AI systemen werken, inclusief hun logica, databronnen en beslissingscriteria, toegankelijk wordt gemaakt voor relevante partijen voor onderzoek en verantwoordelijkheid."
        }
      },
      {
        question: {
                  "en": "What is 'environmental impact' concern in AI ethics?",
                  "es": "Cual es la preocupacion de 'impacto ambiental' en etica de IA?",
                  "de": "Was ist das 'Umweltauswirkung' Bedenken in der KI-Ethik?",
                  "nl": "Wat is de 'milieu-impact' zorg in AI ethiek?"
        },
        options: [
        {
                  "en": "Using AI for weather prediction",
                  "es": "Usar IA para prediccion del clima",
                  "de": "KI fuer Wettervorhersage verwenden",
                  "nl": "AI gebruiken voor weersvoorspelling"
        },
        {
                  "en": "How AI affects natural ecosystems",
                  "es": "Como la IA afecta ecosistemas naturales",
                  "de": "Wie KI natuerliche Oekosysteme beeinflusst",
                  "nl": "Hoe AI natuurlijke ecosystemen beïnvloedt"
        },
        {
                  "en": "The energy consumption and carbon footprint of training and running AI systems",
                  "es": "El consumo de energia y huella de carbono de entrenar y ejecutar sistemas de IA",
                  "de": "Der Energieverbrauch und CO2-Fussabdruck des Trainierens und Betreibens von KI-Systemen",
                  "nl": "Het energieverbruik en de koolstofvoetafdruk van het trainen en draaien van AI systemen"
        },
        {
                  "en": "AI monitoring environmental conditions",
                  "es": "IA monitoreando condiciones ambientales",
                  "de": "KI ueberwacht Umweltbedingungen",
                  "nl": "AI die omgevingscondities monitort"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Training large AI models can consume massive amounts of electricity and produce significant carbon emissions, raising ethical concerns about sustainability and climate impact that need to be balanced against benefits.",
                  "es": "Entrenar modelos grandes de IA puede consumir cantidades masivas de electricidad y producir emisiones significativas de carbono, generando preocupaciones eticas sobre sostenibilidad e impacto climatico que necesitan balancearse contra beneficios.",
                  "de": "Das Trainieren grosser KI-Modelle kann massive Mengen Elektrizitaet verbrauchen und erhebliche CO2-Emissionen produzieren, was ethische Bedenken ueber Nachhaltigkeit und Klimaauswirkung aufwirft die gegen Nutzen abgewogen werden muessen.",
                  "nl": "Het trainen van grote AI modellen kan enorme hoeveelheden elektriciteit verbruiken en aanzienlijke koolstofemissies produceren, wat ethische zorgen over duurzaamheid en klimaatimpact oproept die afgewogen moeten worden tegen voordelen."
        }
      },
      {
        question: {
                  "en": "What is 'consent washing' in AI development?",
                  "es": "Que es 'lavado de consentimiento' en desarrollo de IA?",
                  "de": "Was ist 'Consent Washing' in der KI-Entwicklung?",
                  "nl": "Wat is 'consent washing' in AI ontwikkeling?"
        },
        options: [
        {
                  "en": "Washing consent forms regularly",
                  "es": "Lavar formularios de consentimiento regularmente",
                  "de": "Einwilligungsformulare regelmaessig waschen",
                  "nl": "Toestemmingsformulieren regelmatig wassen"
        },
        {
                  "en": "Removing old consents from databases",
                  "es": "Eliminar consentimientos antiguos de bases de datos",
                  "de": "Alte Einwilligungen aus Datenbanken entfernen",
                  "nl": "Oude toestemmingen uit databases verwijderen"
        },
        {
                  "en": "Using overly complex consent forms to obscure how data will actually be used",
                  "es": "Usar formularios de consentimiento demasiado complejos para oscurecer como los datos realmente seran usados",
                  "de": "Uebermaeessig komplexe Einwilligungsformulare verwenden um zu verschleiern wie Daten tatsaechlich verwendet werden",
                  "nl": "Te complexe toestemmingsformulieren gebruiken om te verhullen hoe data daadwerkelijk gebruikt zal worden"
        },
        {
                  "en": "Cleaning user data before processing",
                  "es": "Limpiar datos de usuario antes de procesarlos",
                  "de": "Benutzerdaten vor der Verarbeitung reinigen",
                  "nl": "Gebruikersdata schoonmaken voor verwerking"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Consent washing occurs when organizations obtain consent through deliberately unclear, lengthy, or complex agreements that people don't fully understand, creating the appearance of ethical practice without genuine informed consent.",
                  "es": "El lavado de consentimiento ocurre cuando organizaciones obtienen consentimiento a traves de acuerdos deliberadamente poco claros, largos o complejos que las personas no entienden completamente, creando apariencia de practica etica sin consentimiento genuinamente informado.",
                  "de": "Consent Washing tritt auf wenn Organisationen Einwilligung durch absichtlich unklare, lange oder komplexe Vereinbarungen erhalten die Menschen nicht vollstaendig verstehen, was den Anschein ethischer Praxis ohne echte informierte Einwilligung erzeugt.",
                  "nl": "Consent washing ontstaat wanneer organisaties toestemming verkrijgen via opzettelijk onduidelijke, lange of complexe overeenkomsten die mensen niet volledig begrijpen, wat de schijn wekt van ethische praktijk zonder echte geïnformeerde toestemming."
        }
      },
      {
        question: {
                  "en": "What is 'automation bias' in AI-assisted decision making?",
                  "es": "Que es 'sesgo de automatizacion' en toma de decisiones asistida por IA?",
                  "de": "Was ist 'Automatisierungsverzerrung' in KI-unterstuetzter Entscheidungsfindung?",
                  "nl": "Wat is 'automatiseringsbias' in AI-ondersteunde besluitvorming?"
        },
        options: [
        {
                  "en": "The tendency to favor AI suggestions over contradicting information even when AI is wrong",
                  "es": "La tendencia a favorecer sugerencias de IA sobre informacion contradictoria incluso cuando la IA esta equivocada",
                  "de": "Die Tendenz KI-Vorschlaege gegenueber widersprechenden Informationen zu bevorzugen selbst wenn KI falsch liegt",
                  "nl": "De neiging om AI suggesties te verkiezen boven tegenstrijdige informatie zelfs wanneer AI fout is"
        },
        {
                  "en": "AI systems preferring automated tasks",
                  "es": "Sistemas de IA prefiriendo tareas automatizadas",
                  "de": "KI-Systeme bevorzugen automatisierte Aufgaben",
                  "nl": "AI systemen die geautomatiseerde taken verkiezen"
        },
        {
                  "en": "Bias toward automating all processes",
                  "es": "Sesgo hacia automatizar todos los procesos",
                  "de": "Verzerrung zur Automatisierung aller Prozesse",
                  "nl": "Bias naar het automatiseren van alle processen"
        },
        {
                  "en": "Discrimination against manual workers",
                  "es": "Discriminacion contra trabajadores manuales",
                  "de": "Diskriminierung gegen manuelle Arbeiter",
                  "nl": "Discriminatie tegen handarbeiders"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Automation bias is the human tendency to over-rely on automated systems and ignore contradictory information from non-automated sources, even when the automated system is making errors.",
                  "es": "El sesgo de automatizacion es la tendencia humana a depender excesivamente de sistemas automatizados e ignorar informacion contradictoria de fuentes no automatizadas, incluso cuando el sistema automatizado esta cometiendo errores.",
                  "de": "Automatisierungsverzerrung ist die menschliche Tendenz sich uebermaeessig auf automatisierte Systeme zu verlassen und widersprechende Informationen aus nicht-automatisierten Quellen zu ignorieren, selbst wenn das automatisierte System Fehler macht.",
                  "nl": "Automatiseringsbias is de menselijke neiging om overmatig te vertrouwen op geautomatiseerde systemen en tegenstrijdige informatie van niet-geautomatiseerde bronnen te negeren, zelfs wanneer het geautomatiseerde systeem fouten maakt."
        }
      },
      {
        question: {
                  "en": "What is 'value alignment' in AI systems?",
                  "es": "Que es 'alineacion de valores' en sistemas de IA?",
                  "de": "Was ist 'Werteausrichtung' in KI-Systemen?",
                  "nl": "Wat is 'waardenafstemming' in AI systemen?"
        },
        options: [
        {
                  "en": "Setting the same price for AI services",
                  "es": "Establecer el mismo precio para servicios de IA",
                  "de": "Den gleichen Preis fuer KI-Dienste festlegen",
                  "nl": "Dezelfde prijs instellen voor AI diensten"
        },
        {
                  "en": "Synchronizing AI processing speeds",
                  "es": "Sincronizar velocidades de procesamiento de IA",
                  "de": "KI-Verarbeitungsgeschwindigkeiten synchronisieren",
                  "nl": "AI verwerkingssnelheden synchroniseren"
        },
        {
                  "en": "Ensuring AI systems act according to human values and ethical principles",
                  "es": "Asegurar que sistemas de IA actuen segun valores humanos y principios eticos",
                  "de": "Sicherstellen dass KI-Systeme nach menschlichen Werten und ethischen Prinzipien handeln",
                  "nl": "Ervoor zorgen dat AI systemen handelen volgens menselijke waarden en ethische principes"
        },
        {
                  "en": "Aligning data values in databases",
                  "es": "Alinear valores de datos en bases de datos",
                  "de": "Datenwerte in Datenbanken ausrichten",
                  "nl": "Datawaarden in databases op één lijn brengen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Value alignment is the challenge of designing AI systems that pursue goals and exhibit behaviors consistent with human values, ethics, and preferences, preventing unintended harmful outcomes.",
                  "es": "La alineacion de valores es el desafio de disenar sistemas de IA que persigan objetivos y exhiban comportamientos consistentes con valores, etica y preferencias humanas, previniendo resultados daninos no intencionados.",
                  "de": "Werteausrichtung ist die Herausforderung KI-Systeme zu entwerfen die Ziele verfolgen und Verhalten zeigen das mit menschlichen Werten, Ethik und Praeferenzen uebereinstimmt, um unbeabsichtigte schaedliche Ergebnisse zu verhindern.",
                  "nl": "Waardenafstemming is de uitdaging om AI systemen te ontwerpen die doelen nastreven en gedrag vertonen dat consistent is met menselijke waarden, ethiek en voorkeuren, om onbedoelde schadelijke uitkomsten te voorkomen."
        }
      },
      {
        question: {
                  "en": "What is 'explainability' versus 'interpretability' in AI?",
                  "es": "Que es 'explicabilidad' versus 'interpretabilidad' en IA?",
                  "de": "Was ist 'Erklaerbarkeit' versus 'Interpretierbarkeit' in der KI?",
                  "nl": "Wat is 'verklaarbaarheid' versus 'interpreteerbaarheid' in AI?"
        },
        options: [
        {
                  "en": "They mean exactly the same thing",
                  "es": "Significan exactamente lo mismo",
                  "de": "Sie bedeuten genau dasselbe",
                  "nl": "Ze betekenen precies hetzelfde"
        },
        {
                  "en": "Explainability is for users, interpretability is for developers",
                  "es": "Explicabilidad es para usuarios, interpretabilidad es para desarrolladores",
                  "de": "Erklaerbarkeit ist fuer Benutzer, Interpretierbarkeit ist fuer Entwickler",
                  "nl": "Verklaarbaarheid is voor gebruikers, interpreteerbaarheid is voor ontwikkelaars"
        },
        {
                  "en": "Interpretability is easier to achieve",
                  "es": "Interpretabilidad es mas facil de lograr",
                  "de": "Interpretierbarkeit ist einfacher zu erreichen",
                  "nl": "Interpreteerbaarheid is gemakkelijker te bereiken"
        },
        {
                  "en": "Explainability describes what happened, interpretability explains why it happened",
                  "es": "Explicabilidad describe que sucedio, interpretabilidad explica por que sucedio",
                  "de": "Erklaerbarkeit beschreibt was passierte, Interpretierbarkeit erklaert warum es passierte",
                  "nl": "Verklaarbaarheid beschrijft wat er gebeurde, interpreteerbaarheid legt uit waarom het gebeurde"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Explainability provides post-hoc descriptions of AI decisions (what the model did), while interpretability refers to understanding the internal mechanics and logic (why the model made that decision).",
                  "es": "La explicabilidad proporciona descripciones post-hoc de decisiones de IA (que hizo el modelo), mientras que interpretabilidad se refiere a entender la mecanica interna y logica (por que el modelo tomo esa decision).",
                  "de": "Erklaerbarkeit liefert nachtraegliche Beschreibungen von KI-Entscheidungen (was das Modell tat), waehrend Interpretierbarkeit sich auf das Verstaendnis der internen Mechanik und Logik bezieht (warum das Modell diese Entscheidung traf).",
                  "nl": "Verklaarbaarheid biedt achteraf beschrijvingen van AI beslissingen (wat het model deed), terwijl interpreteerbaarheid verwijst naar het begrijpen van de interne mechanica en logica (waarom het model die beslissing nam)."
        }
      },
      {
        question: {
                  "en": "What is 'privacy-preserving machine learning'?",
                  "es": "Que es 'aprendizaje automatico preservando privacidad'?",
                  "de": "Was ist 'Datenschutz-bewahrendes maschinelles Lernen'?",
                  "nl": "Wat is 'privacy-behoudend machine learning'?"
        },
        options: [
        {
                  "en": "Keeping AI models private and secret",
                  "es": "Mantener modelos de IA privados y secretos",
                  "de": "KI-Modelle privat und geheim halten",
                  "nl": "AI modellen privé en geheim houden"
        },
        {
                  "en": "Training AI only on public datasets",
                  "es": "Entrenar IA solo en conjuntos de datos publicos",
                  "de": "KI nur auf oeffentlichen Datensaetzen trainieren",
                  "nl": "AI alleen trainen op publieke datasets"
        },
        {
                  "en": "Using encryption for all AI files",
                  "es": "Usar encriptacion para todos los archivos de IA",
                  "de": "Verschluesselung fuer alle KI-Dateien verwenden",
                  "nl": "Encryptie gebruiken voor alle AI bestanden"
        },
        {
                  "en": "Techniques that train AI models without exposing individual data points",
                  "es": "Tecnicas que entrenan modelos de IA sin exponer puntos de datos individuales",
                  "de": "Techniken die KI-Modelle trainieren ohne einzelne Datenpunkte preiszugeben",
                  "nl": "Technieken die AI modellen trainen zonder individuele datapunten bloot te stellen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Privacy-preserving ML includes techniques like federated learning, differential privacy, and homomorphic encryption that allow models to learn from data while protecting individual privacy.",
                  "es": "El aprendizaje automatico preservando privacidad incluye tecnicas como aprendizaje federado, privacidad diferencial y encriptacion homomorfica que permiten a modelos aprender de datos mientras protegen privacidad individual.",
                  "de": "Datenschutz-bewahrendes ML umfasst Techniken wie foederiertes Lernen, differentielle Privatsphaere und homomorphe Verschluesselung die es Modellen ermoeglichen aus Daten zu lernen waehrend individuelle Privatsphaere geschuetzt wird.",
                  "nl": "Privacy-behoudend ML omvat technieken zoals federated learning, differential privacy en homomorphic encryption die modellen in staat stellen te leren van data terwijl individuele privacy beschermd wordt."
        }
      },
      {
        question: {
                  "en": "What is 'federated learning' in privacy-preserving AI?",
                  "es": "Que es 'aprendizaje federado' en IA preservando privacidad?",
                  "de": "Was ist 'foederiertes Lernen' in Datenschutz-bewahrender KI?",
                  "nl": "Wat is 'federated learning' in privacy-behoudende AI?"
        },
        options: [
        {
                  "en": "Combining multiple AI models into one",
                  "es": "Combinar multiples modelos de IA en uno",
                  "de": "Mehrere KI-Modelle zu einem kombinieren",
                  "nl": "Meerdere AI modellen combineren tot één"
        },
        {
                  "en": "Training AI models in government buildings",
                  "es": "Entrenar modelos de IA en edificios gubernamentales",
                  "de": "KI-Modelle in Regierungsgebaeuden trainieren",
                  "nl": "AI modellen trainen in overheidsgebouwen"
        },
        {
                  "en": "Distributing AI processing across countries",
                  "es": "Distribuir procesamiento de IA entre paises",
                  "de": "KI-Verarbeitung ueber Laender verteilen",
                  "nl": "AI verwerking verdelen over landen"
        },
        {
                  "en": "Training models across decentralized devices without centralizing raw data",
                  "es": "Entrenar modelos en dispositivos descentralizados sin centralizar datos brutos",
                  "de": "Modelle ueber dezentrale Geraete trainieren ohne Rohdaten zu zentralisieren",
                  "nl": "Modellen trainen over gedecentraliseerde apparaten zonder ruwe data te centraliseren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Federated learning trains AI models by sending the model to where data lives (edge devices) rather than collecting all data centrally, preserving privacy while enabling collaborative learning.",
                  "es": "El aprendizaje federado entrena modelos de IA enviando el modelo a donde viven los datos (dispositivos edge) en lugar de recolectar todos los datos centralmente, preservando privacidad mientras permite aprendizaje colaborativo.",
                  "de": "Foederiertes Lernen trainiert KI-Modelle indem das Modell dorthin gesendet wird wo Daten leben (Edge-Geraete) anstatt alle Daten zentral zu sammeln, bewahrt Privatsphaere waehrend kollaboratives Lernen ermoeglicht wird.",
                  "nl": "Federated learning traint AI modellen door het model te sturen naar waar data zich bevindt (edge apparaten) in plaats van alle data centraal te verzamelen, behoudt privacy terwijl collaboratief leren mogelijk gemaakt wordt."
        }
      },
      {
        question: {
                  "en": "What is 'differential privacy'?",
                  "es": "Que es 'privacidad diferencial'?",
                  "de": "Was ist 'differentielle Privatsphaere'?",
                  "nl": "Wat is 'differential privacy'?"
        },
        options: [
        {
                  "en": "Treating VIP users with more privacy",
                  "es": "Tratar usuarios VIP con mas privacidad",
                  "de": "VIP-Nutzer mit mehr Privatsphaere behandeln",
                  "nl": "VIP gebruikers behandelen met meer privacy"
        },
        {
                  "en": "Having different privacy settings for different users",
                  "es": "Tener diferentes configuraciones de privacidad para diferentes usuarios",
                  "de": "Verschiedene Datenschutzeinstellungen fuer verschiedene Nutzer haben",
                  "nl": "Verschillende privacy-instellingen hebben voor verschillende gebruikers"
        },
        {
                  "en": "Calculating the difference in privacy levels",
                  "es": "Calcular la diferencia en niveles de privacidad",
                  "de": "Den Unterschied in Privatsphaere-Ebenen berechnen",
                  "nl": "Het verschil in privacyniveaus berekenen"
        },
        {
                  "en": "Adding controlled noise to data so individual records cannot be identified",
                  "es": "Anadir ruido controlado a datos para que registros individuales no puedan ser identificados",
                  "de": "Kontrolliertes Rauschen zu Daten hinzufuegen damit einzelne Datensaetze nicht identifiziert werden koennen",
                  "nl": "Gecontroleerde ruis toevoegen aan data zodat individuele records niet geïdentificeerd kunnen worden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Differential privacy is a mathematical framework that adds carefully calibrated noise to datasets or query results to protect individual privacy while maintaining overall statistical accuracy.",
                  "es": "La privacidad diferencial es un marco matematico que anade ruido cuidadosamente calibrado a conjuntos de datos o resultados de consultas para proteger privacidad individual mientras mantiene precision estadistica general.",
                  "de": "Differentielle Privatsphaere ist ein mathematisches Framework das sorgfaeltig kalibriertes Rauschen zu Datensaetzen oder Abfrageergebnissen hinzufuegt um individuelle Privatsphaere zu schuetzen waehrend allgemeine statistische Genauigkeit erhalten bleibt.",
                  "nl": "Differential privacy is een wiskundig raamwerk dat zorgvuldig gekalibreerde ruis toevoegt aan datasets of query resultaten om individuele privacy te beschermen terwijl algemene statistische nauwkeurigheid behouden blijft."
        }
      },
      {
        question: {
                  "en": "What is 'data minimization' principle in AI ethics?",
                  "es": "Que es el principio de 'minimizacion de datos' en etica de IA?",
                  "de": "Was ist das 'Datenminimierung' Prinzip in der KI-Ethik?",
                  "nl": "Wat is het 'dataminimalisatie' principe in AI ethiek?"
        },
        options: [
        {
                  "en": "Collecting only the minimum data necessary for the specific purpose",
                  "es": "Recolectar solo los datos minimos necesarios para el proposito especifico",
                  "de": "Nur die minimal notwendigen Daten fuer den spezifischen Zweck sammeln",
                  "nl": "Alleen de minimaal benodigde data verzamelen voor het specifieke doel"
        },
        {
                  "en": "Minimizing data processing time",
                  "es": "Minimizar tiempo de procesamiento de datos",
                  "de": "Datenverarbeitungszeit minimieren",
                  "nl": "Dataverwerkingstijd minimaliseren"
        },
        {
                  "en": "Reducing file sizes of datasets",
                  "es": "Reducir tamanos de archivo de conjuntos de datos",
                  "de": "Dateigroessen von Datensaetzen reduzieren",
                  "nl": "Bestandsgroottes van datasets verkleinen"
        },
        {
                  "en": "Using the smallest possible database",
                  "es": "Usar la base de datos mas pequena posible",
                  "de": "Die kleinstmoegliche Datenbank verwenden",
                  "nl": "De kleinst mogelijke database gebruiken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Data minimization is the ethical principle that organizations should collect only the personal data that is adequate, relevant, and limited to what is necessary for the intended purpose.",
                  "es": "La minimizacion de datos es el principio etico de que organizaciones deberian recolectar solo datos personales que sean adecuados, relevantes y limitados a lo necesario para el proposito previsto.",
                  "de": "Datenminimierung ist das ethische Prinzip dass Organisationen nur personenbezogene Daten sammeln sollten die angemessen, relevant und auf das Notwendige fuer den beabsichtigten Zweck beschraenkt sind.",
                  "nl": "Dataminimalisatie is het ethische principe dat organisaties alleen persoonlijke data zouden moeten verzamelen die adequaat, relevant en beperkt is tot wat noodzakelijk is voor het beoogde doel."
        }
      },
      {
        question: {
                  "en": "What are 'deepfakes' and why are they an ethical concern?",
                  "es": "Que son los 'deepfakes' y por que son una preocupacion etica?",
                  "de": "Was sind 'Deepfakes' und warum sind sie ein ethisches Bedenken?",
                  "nl": "Wat zijn 'deepfakes' en waarom zijn ze een ethische zorg?"
        },
        options: [
        {
                  "en": "Fake social media profiles",
                  "es": "Perfiles falsos de redes sociales",
                  "de": "Gefaelschte Social-Media-Profile",
                  "nl": "Nep social media profielen"
        },
        {
                  "en": "AI-generated fake videos/audio that can spread misinformation and harm reputations",
                  "es": "Videos/audio falsos generados por IA que pueden difundir desinformacion y danar reputaciones",
                  "de": "KI-generierte gefaelschte Videos/Audio die Fehlinformationen verbreiten und Reputationen schaedigen koennen",
                  "nl": "AI-gegenereerde nep video's/audio die misinformatie kunnen verspreiden en reputaties kunnen schaden"
        },
        {
                  "en": "Very deep neural networks",
                  "es": "Redes neuronales muy profundas",
                  "de": "Sehr tiefe neuronale Netze",
                  "nl": "Zeer diepe neurale netwerken"
        },
        {
                  "en": "Counterfeit AI hardware",
                  "es": "Hardware de IA falsificado",
                  "de": "Gefaelschte KI-Hardware",
                  "nl": "Namaak AI hardware"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Deepfakes use AI to create realistic fake videos or audio of people saying or doing things they never did, raising concerns about misinformation, consent, reputation damage, and erosion of trust in media.",
                  "es": "Los deepfakes usan IA para crear videos o audio falsos realistas de personas diciendo o haciendo cosas que nunca hicieron, generando preocupaciones sobre desinformacion, consentimiento, dano a reputacion y erosion de confianza en medios.",
                  "de": "Deepfakes verwenden KI um realistische gefaelschte Videos oder Audio von Personen zu erstellen die Dinge sagen oder tun die sie nie taten, was Bedenken ueber Fehlinformation, Einwilligung, Reputationsschaeden und Vertrauensverlust in Medien aufwirft.",
                  "nl": "Deepfakes gebruiken AI om realistische nep video's of audio te creëren van mensen die dingen zeggen of doen die ze nooit deden, wat zorgen oproept over misinformatie, toestemming, reputatieschade en erosie van vertrouwen in media."
        }
      },
      {
        question: {
                  "en": "What is 'AI washing' or 'AI ethics washing'?",
                  "es": "Que es 'lavado de IA' o 'lavado de etica de IA'?",
                  "de": "Was ist 'AI Washing' oder 'KI-Ethik Washing'?",
                  "nl": "Wat is 'AI washing' of 'AI ethiek washing'?"
        },
        options: [
        {
                  "en": "Making superficial ethical claims about AI without meaningful action or accountability",
                  "es": "Hacer afirmaciones eticas superficiales sobre IA sin accion significativa o responsabilidad",
                  "de": "Oberflaechliche ethische Behauptungen ueber KI machen ohne bedeutsame Massnahmen oder Verantwortlichkeit",
                  "nl": "Oppervlakkige ethische claims maken over AI zonder betekenisvolle actie of verantwoordelijkheid"
        },
        {
                  "en": "Removing biases from AI models",
                  "es": "Eliminar sesgos de modelos de IA",
                  "de": "Verzerrungen aus KI-Modellen entfernen",
                  "nl": "Vooroordelen uit AI modellen verwijderen"
        },
        {
                  "en": "Regular auditing of AI systems",
                  "es": "Auditoria regular de sistemas de IA",
                  "de": "Regelmaessige Pruefung von KI-Systemen",
                  "nl": "Regelmatige controle van AI systemen"
        },
        {
                  "en": "Cleaning AI training data",
                  "es": "Limpiar datos de entrenamiento de IA",
                  "de": "KI-Trainingsdaten reinigen",
                  "nl": "AI trainingsdata schoonmaken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AI ethics washing is when companies make public commitments to ethical AI principles primarily for marketing purposes without implementing substantial changes or being held accountable.",
                  "es": "El lavado de etica de IA es cuando companias hacen compromisos publicos con principios de IA etica principalmente para propositos de marketing sin implementar cambios sustanciales o ser responsables.",
                  "de": "KI-Ethik Washing ist wenn Unternehmen oeffentliche Verpflichtungen zu ethischen KI-Prinzipien hauptsaechlich fuer Marketingzwecke eingehen ohne substanzielle Aenderungen umzusetzen oder zur Verantwortung gezogen zu werden.",
                  "nl": "AI ethiek washing is wanneer bedrijven publieke toezeggingen doen aan ethische AI principes voornamelijk voor marketingdoeleinden zonder substantiële veranderingen door te voeren of verantwoordelijk gehouden te worden."
        }
      },
      {
        question: {
                  "en": "What is the 'trolley problem' in AI ethics?",
                  "es": "Cual es el 'problema del tranvia' en etica de IA?",
                  "de": "Was ist das 'Trolley-Problem' in der KI-Ethik?",
                  "nl": "Wat is het 'trolley probleem' in AI ethiek?"
        },
        options: [
        {
                  "en": "A thought experiment about how AI should make life-or-death decisions in unavoidable harm scenarios",
                  "es": "Un experimento mental sobre como IA deberia tomar decisiones de vida o muerte en escenarios de dano inevitable",
                  "de": "Ein Gedankenexperiment darueber wie KI Leben-oder-Tod-Entscheidungen in unvermeidbaren Schadensszenarien treffen sollte",
                  "nl": "Een gedachte-experiment over hoe AI leven-of-dood beslissingen zou moeten nemen in onvermijdbare schade scenario's"
        },
        {
                  "en": "Debugging train scheduling systems",
                  "es": "Depurar sistemas de programacion de trenes",
                  "de": "Zugplanungssysteme debuggen",
                  "nl": "Treinplanning systemen debuggen"
        },
        {
                  "en": "Problems with shopping cart algorithms",
                  "es": "Problemas con algoritmos de carrito de compras",
                  "de": "Probleme mit Einkaufswagen-Algorithmen",
                  "nl": "Problemen met winkelwagen algoritmes"
        },
        {
                  "en": "Issues with public transportation AI",
                  "es": "Problemas con IA de transporte publico",
                  "de": "Probleme mit oeffentlichem Verkehr-KI",
                  "nl": "Problemen met openbaar vervoer AI"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The trolley problem explores ethical dilemmas in autonomous vehicles and AI systems: when harm is unavoidable, how should AI decide who gets harmed, highlighting tensions between utilitarian and deontological ethics.",
                  "es": "El problema del tranvia explora dilemas eticos en vehiculos autonomos y sistemas de IA: cuando el dano es inevitable, como deberia IA decidir quien resulta danado, destacando tensiones entre etica utilitaria y deontologica.",
                  "de": "Das Trolley-Problem erforscht ethische Dilemmata in autonomen Fahrzeugen und KI-Systemen: wenn Schaden unvermeidbar ist, wie sollte KI entscheiden wer geschaedigt wird, wobei Spannungen zwischen utilitaristischer und deontologischer Ethik hervorgehoben werden.",
                  "nl": "Het trolley probleem verkent ethische dilemma's in autonome voertuigen en AI systemen: wanneer schade onvermijdelijk is, hoe zou AI moeten beslissen wie schade oploopt, wat spanningen tussen utilitaire en deontologische ethiek benadrukt."
        }
      },
      {
        question: {
                  "en": "What is 'accountability gap' in autonomous AI systems?",
                  "es": "Que es la 'brecha de responsabilidad' en sistemas de IA autonomos?",
                  "de": "Was ist die 'Verantwortungsluecke' in autonomen KI-Systemen?",
                  "nl": "Wat is de 'verantwoordelijkheidskloof' in autonome AI systemen?"
        },
        options: [
        {
                  "en": "Gaps in AI training data",
                  "es": "Brechas en datos de entrenamiento de IA",
                  "de": "Luecken in KI-Trainingsdaten",
                  "nl": "Hiaten in AI trainingsdata"
        },
        {
                  "en": "Missing audit logs in AI systems",
                  "es": "Registros de auditoria faltantes en sistemas de IA",
                  "de": "Fehlende Audit-Logs in KI-Systemen",
                  "nl": "Ontbrekende audit logs in AI systemen"
        },
        {
                  "en": "Difficulty determining who is responsible when autonomous AI causes harm",
                  "es": "Dificultad para determinar quien es responsable cuando IA autonoma causa dano",
                  "de": "Schwierigkeit zu bestimmen wer verantwortlich ist wenn autonome KI Schaden verursacht",
                  "nl": "Moeilijkheid om te bepalen wie verantwoordelijk is wanneer autonome AI schade veroorzaakt"
        },
        {
                  "en": "Insufficient processing power",
                  "es": "Poder de procesamiento insuficiente",
                  "de": "Unzureichende Rechenleistung",
                  "nl": "Onvoldoende rekenkracht"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The accountability gap arises when AI systems operate autonomously - it becomes unclear whether to blame developers, deployers, users, or the AI itself when things go wrong, creating legal and ethical challenges.",
                  "es": "La brecha de responsabilidad surge cuando sistemas de IA operan autonomamente - se vuelve poco claro si culpar a desarrolladores, implementadores, usuarios o la IA misma cuando las cosas salen mal, creando desafios legales y eticos.",
                  "de": "Die Verantwortungsluecke entsteht wenn KI-Systeme autonom operieren - es wird unklar ob Entwickler, Betreiber, Nutzer oder die KI selbst schuld sind wenn etwas schief geht, was rechtliche und ethische Herausforderungen schafft.",
                  "nl": "De verantwoordelijkheidskloof ontstaat wanneer AI systemen autonoom opereren - het wordt onduidelijk of ontwikkelaars, implementeerders, gebruikers of de AI zelf de schuld krijgen wanneer dingen misgaan, wat juridische en ethische uitdagingen creëert."
        }
      },
      {
        question: {
                  "en": "What is 'moral machine' research in AI ethics?",
                  "es": "Que es la investigacion de 'maquina moral' en etica de IA?",
                  "de": "Was ist 'Moral Machine' Forschung in der KI-Ethik?",
                  "nl": "Wat is 'moral machine' onderzoek in AI ethiek?"
        },
        options: [
        {
                  "en": "Research gathering global perspectives on ethical decisions autonomous vehicles should make",
                  "es": "Investigacion recopilando perspectivas globales sobre decisiones eticas que vehiculos autonomos deberian tomar",
                  "de": "Forschung die globale Perspektiven sammelt ueber ethische Entscheidungen die autonome Fahrzeuge treffen sollten",
                  "nl": "Onderzoek dat wereldwijde perspectieven verzamelt over ethische beslissingen die autonome voertuigen zouden moeten nemen"
        },
        {
                  "en": "Teaching AI about morality",
                  "es": "Ensenar a IA sobre moralidad",
                  "de": "KI ueber Moralitaet unterrichten",
                  "nl": "AI leren over moraliteit"
        },
        {
                  "en": "Building machines that can feel emotions",
                  "es": "Construir maquinas que puedan sentir emociones",
                  "de": "Maschinen bauen die Emotionen fuehlen koennen",
                  "nl": "Machines bouwen die emoties kunnen voelen"
        },
        {
                  "en": "Creating ethical guidelines for robots",
                  "es": "Crear guias eticas para robots",
                  "de": "Ethische Richtlinien fuer Roboter erstellen",
                  "nl": "Ethische richtlijnen creëren voor robots"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Moral Machine project collected millions of decisions from people worldwide on ethical dilemmas autonomous vehicles might face, revealing cultural differences in moral preferences and informing AI ethics policy.",
                  "es": "El proyecto Maquina Moral recopio millones de decisiones de personas en todo el mundo sobre dilemas eticos que vehiculos autonomos podrian enfrentar, revelando diferencias culturales en preferencias morales e informando politica de etica de IA.",
                  "de": "Das Moral Machine Projekt sammelte Millionen von Entscheidungen von Menschen weltweit ueber ethische Dilemmata denen autonome Fahrzeuge begegnen koennten, enthuelltekulturelle Unterschiede in moralischen Praeferenzen und informierte KI-Ethikpolitik.",
                  "nl": "Het Moral Machine project verzamelde miljoenen beslissingen van mensen wereldwijd over ethische dilemma's die autonome voertuigen zouden kunnen tegenkomen, wat culturele verschillen in morele voorkeuren onthulde en AI ethiek beleid informeerde."
        }
      },
      {
        question: {
                  "en": "What is 'value alignment' in AI ethics?",
                  "es": "Que es la 'alineacion de valores' en etica de IA?",
                  "de": "Was ist 'Werte-Ausrichtung' in der KI-Ethik?",
                  "nl": "Wat is 'waarde-alignment' in AI ethiek?"
        },
        options: [
        {
                  "en": "Synchronizing multiple AI models",
                  "es": "Sincronizar multiples modelos de IA",
                  "de": "Mehrere KI-Modelle synchronisieren",
                  "nl": "Meerdere AI modellen synchroniseren"
        },
        {
                  "en": "Ensuring AI systems pursue goals and values that match human intentions and wellbeing",
                  "es": "Asegurar que sistemas de IA persiguen metas y valores que coinciden con intenciones y bienestar humanos",
                  "de": "Sicherstellen dass KI-Systeme Ziele und Werte verfolgen die menschlichen Absichten und Wohlergehen entsprechen",
                  "nl": "Waarborgen dat AI systemen doelen en waarden nastreven die overeenkomen met menselijke intenties en welzijn"
        },
        {
                  "en": "Matching AI processing speeds",
                  "es": "Igualar velocidades de procesamiento de IA",
                  "de": "KI-Verarbeitungsgeschwindigkeiten angleichen",
                  "nl": "AI verwerkingssnelheden matchen"
        },
        {
                  "en": "Aligning AI hardware components correctly",
                  "es": "Alinear componentes de hardware de IA correctamente",
                  "de": "KI-Hardware-Komponenten korrekt ausrichten",
                  "nl": "AI hardware componenten correct uitlijnen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Value alignment is the challenge of creating AI systems that truly understand and pursue human values, preventing unintended consequences from AI optimizing for goals that don't reflect what we actually want.",
                  "es": "La alineacion de valores es el desafio de crear sistemas de IA que verdaderamente entiendan y persigan valores humanos, previniendo consecuencias no deseadas de IA optimizando para metas que no reflejan lo que realmente queremos.",
                  "de": "Werte-Ausrichtung ist die Herausforderung KI-Systeme zu schaffen die menschliche Werte wirklich verstehen und verfolgen, um unbeabsichtigte Konsequenzen zu verhindern wenn KI fuer Ziele optimiert die nicht widerspiegeln was wir tatsaechlich wollen.",
                  "nl": "Waarde-alignment is de uitdaging om AI systemen te creëren die menselijke waarden echt begrijpen en nastreven, om onbedoelde gevolgen te voorkomen wanneer AI optimaliseert voor doelen die niet weerspiegelen wat we werkelijk willen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();