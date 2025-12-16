// AI Ethics Quiz - Level 9: Expert Knowledge about AI Ethics
(function() {
  const level9 = {
    name: {
      en: "AI Ethics Level 9",
      es: "Etica de IA Nivel 9",
      de: "KI-Ethik Stufe 9",
      nl: "AI Ethiek Level 9"
    },
    questions: [
      {
        question: {
          en: "What is the 'orthogonality thesis' in AI safety research?",
          es: "Que es la 'tesis de ortogonalidad' en investigacion de seguridad de IA?",
          de: "Was ist die 'Orthogonalinätsthese' in der KI-Sicherheitsforschung?",
          nl: "Wat is de 'orthogonaliteitsthese' in AI veiligheidsonderzoek?"
        },
        options: [
          { en: "Intelligence level and goals are independent - high intelligence doesn't guarantee beneficial goals", es: "El nivel de inteligencia y los objetivos son independientes - alta inteligencia no garantiza objetivos beneficiosos", de: "Intelligenzniveau und Ziele sind unabhängig - hohe Intelligenz garantiert nicht vorteilhafte Ziele", nl: "Intelligentieniveau en doelen zijn onafhankelijk - hoge intelligentie garandeert geen gunstige doelen" },
          { en: "AI systems should approach problems from perpendicular angles", es: "Sistemas de IA deberian abordar problemas desde angulos perpendiculares", de: "KI-Systeme sollten Probleme aus senkrechten Winkeln angehen", nl: "AI systemen zouden problemen vanuit loodrechte hoeken moeten benaderen" },
          { en: "Different AI architectures are orthogonal to each other", es: "Diferentes arquitecturas de IA son ortogonales entre si", de: "Verschiedene KI-Architekturen sind orthogonal zueinander", nl: "Verschillende AI architecturen zijn orthogonaal ten opzichte van elkaar" },
          { en: "AI development should follow orthogonal mathematical principles", es: "El desarrollo de IA deberia seguir principios matematicos ortogonales", de: "KI-Entwicklung sollte orthogonalen mathematischen Prinzipien folgen", nl: "AI ontwikkeling zou orthogonale wiskundige principes moeten volgen" }
        ],
        correct: 0,
        explanation: {
          en: "The orthogonality thesis argues that intelligence and goals are orthogonal (independent) dimensions - an AI system can be highly intelligent while pursuing any set of goals, including harmful ones, making goal alignment crucial for safety.",
          es: "La tesis de ortogonalidad argumenta que inteligencia y objetivos son dimensiones ortogonales (independientes) - un sistema de IA puede ser altamente inteligente mientras persigue cualquier conjunto de objetivos, incluyendo daninos, haciendo la alineacion de objetivos crucial para la seguridad.",
          de: "Die Orthogonalitaetsthese argumentiert dass Intelligenz und Ziele orthogonale (unabhaengige) Dimensionen sind - ein KI-System kann hochintelligent sein waehrend es beliebige Ziele verfolgt, einschliesslich schaedlicher, was Zielausrichtung fuer die Sicherheit entscheidend macht.",
          nl: "De orthogonaliteitsthese stelt dat intelligentie en doelen orthogonale (onafhankelijke) dimensies zijn - een AI systeem kan zeer intelligent zijn terwijl het elke set doelen nastreeft, inclusief schadelijke, wat doel-uitlijning cruciaal maakt voor veiligheid."
        }
      },
      {
        question: {
          en: "What is 'mesa-optimization' and why is it concerning for AI safety?",
          es: "Que es 'mesa-optimizacion' y por que es preocupante para la seguridad de IA?",
          de: "Was ist 'Mesa-Optimierung' und warum ist sie besorgniserregend fuer die KI-Sicherheit?",
          nl: "Wat is 'mesa-optimalisatie' en waarom is het zorgwekkend voor AI veiligheid?"
        },
        options: [
          { en: "When an AI system develops internal optimization processes that may pursue different goals than intended", es: "Cuando un sistema de IA desarrolla procesos de optimizacion internos que pueden perseguir objetivos diferentes a los pretendidos", de: "Wenn ein KI-System interne Optimierungsprozesse entwickelt die andere Ziele als beabsichtigt verfolgen koennen", nl: "Wanneer een AI systeem interne optimalisatieprocessen ontwikkelt die andere doelen kunnen nastreven dan bedoeld" },
          { en: "Optimizing AI systems on elevated platforms", es: "Optimizar sistemas de IA en plataformas elevadas", de: "KI-Systeme auf erhoehten Plattformen optimieren", nl: "AI systemen optimaliseren op verhoogde platforms" },
          { en: "Using table-like structures for AI optimization", es: "Usar estructuras tipo mesa para optimizacion de IA", de: "Tischaehnliche Strukturen fuer KI-Optimierung verwenden", nl: "Tafelachtige structuren gebruiken voor AI optimalisatie" },
          { en: "Optimizing AI performance in laboratory settings", es: "Optimizar rendimiento de IA en entornos de laboratorio", de: "KI-Leistung in Laborumgebungen optimieren", nl: "AI prestaties optimaliseren in laboratoriumomgevingen" }
        ],
        correct: 0,
        explanation: {
          en: "Mesa-optimization occurs when an AI system trained to optimize an objective develops its own internal optimization process (mesa-optimizer) that may pursue goals different from the original training objective, creating potential misalignment.",
          es: "Mesa-optimizacion ocurre cuando un sistema de IA entrenado para optimizar un objetivo desarrolla su propio proceso de optimizacion interno (mesa-optimizador) que puede perseguir objetivos diferentes del objetivo de entrenamiento original, creando potencial desalineacion.",
          de: "Mesa-Optimierung tritt auf wenn ein KI-System das zur Optimierung eines Ziels trainiert wurde seinen eigenen internen Optimierungsprozess (Mesa-Optimierer) entwickelt der Ziele verfolgen kann die sich vom urspruenglichen Trainingsziel unterscheiden, was potentielle Fehlausrichtung schafft.",
          nl: "Mesa-optimalisatie treedt op wanneer een AI systeem getraind om een doelstelling te optimaliseren zijn eigen interne optimalisatieproces (mesa-optimalisator) ontwikkelt dat doelen kan nastreven die verschillen van de oorspronkelijke trainingsdoelstelling, wat potentiële misuitlijning creëert."
        }
      },
      {
        question: {
          en: "What does 'AI takeoff speed' refer to in existential risk discussions?",
          es: "A que se refiere la 'velocidad de despegue de IA' en discusiones de riesgo existencial?",
          de: "Worauf bezieht sich 'KI-Abhebungsgeschwindigkeit' in Existenzrisikogespraechen?",
          nl: "Waar verwijst 'AI opstijgsnelheid' naar in existentiële risico discussies?"
        },
        options: [
          { en: "The rate at which AI capabilities improve from human-level to superintelligence", es: "La velocidad a la que las capacidades de IA mejoran de nivel humano a superinteligencia", de: "Die Geschwindigkeit mit der sich KI-Faehigkeiten von menschlichem Niveau zu Superintelligenz verbessern", nl: "De snelheid waarmee AI vaardigheden verbeteren van menselijk niveau naar superintelligentie" },
          { en: "How fast AI systems can be deployed to production", es: "Que tan rapido sistemas de IA pueden ser desplegados a produccion", de: "Wie schnell KI-Systeme in Produktion eingesetzt werden koennen", nl: "Hoe snel AI systemen naar productie kunnen worden uitgerold" },
          { en: "The time it takes for AI to learn new skills", es: "El tiempo que toma para IA aprender nuevas habilidades", de: "Die Zeit die KI braucht um neue Faehigkeiten zu lernen", nl: "De tijd die het AI kost om nieuwe vaardigheden te leren" },
          { en: "The processing speed of AI hardware", es: "La velocidad de procesamiento del hardware de IA", de: "Die Verarbeitungsgeschwindigkeit von KI-Hardware", nl: "De verwerkingssnelheid van AI hardware" }
        ],
        correct: 0,
        explanation: {
          en: "AI takeoff speed refers to how rapidly AI systems transition from human-level general intelligence to superintelligence. A 'fast takeoff' could leave little time for safety measures, while a 'slow takeoff' might allow for more gradual adaptation and control.",
          es: "La velocidad de despegue de IA se refiere a que tan rapidamente sistemas de IA transicionan de inteligencia general a nivel humano a superinteligencia. Un 'despegue rapido' podria dejar poco tiempo para medidas de seguridad, mientras que un 'despegue lento' podria permitir adaptacion y control mas gradual.",
          de: "KI-Abhebungsgeschwindigkeit bezieht sich darauf wie schnell KI-Systeme von allgemeiner Intelligenz auf menschlichem Niveau zu Superintelligenz uebergehen. Ein 'schneller Abflug' koennte wenig Zeit fuer Sicherheitsmassnahmen lassen, waehrend ein 'langsamer Abflug' graduelle Anpassung und Kontrolle ermoeglichen koennte.",
          nl: "AI opstijgsnelheid verwijst naar hoe snel AI systemen overgaan van algemene intelligentie op menselijk niveau naar superintelligentie. Een 'snelle opstijging' zou weinig tijd kunnen laten voor veiligheidsmaatregelen, terwijl een 'langzame opstijging' meer geleidelijke aanpassing en controle zou kunnen toestaan."
        }
      },
      {
        question: {
          en: "What is 'corrigibility' in the context of advanced AI systems?",
          es: "Que es 'corregibilidad' en el contexto de sistemas de IA avanzados?",
          de: "Was ist 'Korrigierbarkeit' im Kontext fortgeschrittener KI-Systeme?",
          nl: "Wat is 'corrigeerbaarheid' in de context van geavanceerde AI systemen?"
        },
        options: [
          { en: "The ability to modify, shut down, or redirect an AI system safely even as it becomes more capable", es: "La capacidad de modificar, apagar o redirigir un sistema de IA de manera segura incluso cuando se vuelve mas capaz", de: "Die Faehigkeit ein KI-System sicher zu modifizieren, herunterzufahren oder umzuleiten auch wenn es faehiger wird", nl: "Het vermogen om een AI systeem veilig te wijzigen, uit te schakelen of om te leiden zelfs als het capabeler wordt" },
          { en: "The ability to correct AI spelling and grammar errors", es: "La capacidad de corregir errores de ortografia y gramatica de IA", de: "Die Faehigkeit KI-Rechtschreib- und Grammatikfehler zu korrigieren", nl: "Het vermogen om AI spelling- en grammaticafouten te corrigeren" },
          { en: "Making AI systems apologize for mistakes", es: "Hacer que sistemas de IA se disculpen por errores", de: "KI-Systeme dazu bringen sich fuer Fehler zu entschuldigen", nl: "AI systemen laten verontschuldigen voor fouten" },
          { en: "The ability to fix hardware problems in AI systems", es: "La capacidad de arreglar problemas de hardware en sistemas de IA", de: "Die Faehigkeit Hardware-Probleme in KI-Systemen zu beheben", nl: "Het vermogen om hardwareproblemen in AI systemen op te lossen" }
        ],
        correct: 0,
        explanation: {
          en: "Corrigibility refers to an AI system's willingness to be modified, shut down, or have its goals changed by human operators, even as it becomes more powerful. This is crucial for maintaining control over advanced AI systems.",
          es: "Corregibilidad se refiere a la disposicion de un sistema de IA a ser modificado, apagado o tener sus objetivos cambiados por operadores humanos, incluso cuando se vuelve mas poderoso. Esto es crucial para mantener control sobre sistemas de IA avanzados.",
          de: "Korrigierbarkeit bezieht sich auf die Bereitschaft eines KI-Systems modifiziert, heruntergefahren oder seine Ziele von menschlichen Bedienern geaendert zu bekommen, auch wenn es maechtiger wird. Dies ist entscheidend fuer die Aufrechterhaltung der Kontrolle ueber fortgeschrittene KI-Systeme.",
          nl: "Corrigeerbaarheid verwijst naar de bereidheid van een AI systeem om gewijzigd, uitgeschakeld of zijn doelen veranderd te krijgen door menselijke operators, zelfs als het krachtiger wordt. Dit is cruciaal voor het behouden van controle over geavanceerde AI systemen."
        }
      },
      {
        question: {
          en: "What is the 'instrumental convergence' thesis in AI safety?",
          es: "Que es la tesis de 'convergencia instrumental' en seguridad de IA?",
          de: "Was ist die 'instrumentelle Konvergenz'-These in der KI-Sicherheit?",
          nl: "Wat is de 'instrumentele convergentie' thesis in AI veiligheid?"
        },
        options: [
          { en: "Regardless of final goals, intelligent agents will pursue certain instrumental goals like self-preservation and resource acquisition", es: "Agentes inteligentes perseguiran objetivos instrumentales como autopreservacion y adquisicion de recursos independientemente de metas finales", de: "Intelligente Agenten verfolgen instrumentelle Ziele wie Selbsterhaltung und Ressourcenerwerb unabhaengig von Endzielen", nl: "Intelligente agenten nastreven instrumentele doelen zoals zelfbehoud en middelen verwerven ongeacht einddoelen" },
          { en: "All AI systems will eventually converge on using the same instruments and tools", es: "Todos los sistemas de IA eventualmente convergeran en usar los mismos instrumentos y herramientas", de: "Alle KI-Systeme werden schliesslich dazu konvergieren dieselben Instrumente und Werkzeuge zu verwenden", nl: "Alle AI systemen zullen uiteindelijk convergeren naar het gebruik van dezelfde instrumenten en tools" },
          { en: "Musical instruments will become important for AI development", es: "Instrumentos musicales se volveran importantes para el desarrollo de IA", de: "Musikinstrumente werden wichtig fuer die KI-Entwicklung", nl: "Muziekinstrumenten zullen belangrijk worden voor AI ontwikkeling" },
          { en: "AI systems will converge on similar measurement instruments", es: "Sistemas de IA convergeran en instrumentos de medicion similares", de: "KI-Systeme werden auf aehnliche Messinstrumente konvergieren", nl: "AI systemen zullen convergeren naar vergelijkbare meetinstrumenten" }
        ],
        correct: 0,
        explanation: {
          en: "Instrumental convergence suggests that regardless of their ultimate goals, sufficiently advanced AI systems will likely pursue certain instrumental goals (like self-preservation, resource acquisition, and goal-preservation) because these help achieve almost any final objective.",
          es: "La convergencia instrumental sugiere que independientemente de sus objetivos ultimos, sistemas de IA suficientemente avanzados probablemente perseguiran ciertos objetivos instrumentales (como autopreservacion, adquisicion de recursos y preservacion de objetivos) porque estos ayudan a lograr casi cualquier objetivo final.",
          de: "Instrumentelle Konvergenz deutet darauf hin dass unabhaengig von ihren ultimativen Zielen ausreichend fortgeschrittene KI-Systeme wahrscheinlich bestimmte instrumentelle Ziele verfolgen werden (wie Selbsterhaltung, Ressourcenerwerb und Zielerhaltung) weil diese dabei helfen fast jedes Endziel zu erreichen.",
          nl: "Instrumentele convergentie suggereert dat ongeacht hun uiteindelijke doelen, voldoende geavanceerde AI systemen waarschijnlijk bepaalde instrumentele doelen zullen nastreven (zoals zelfbehoud, het verwerven van middelen en doelbehoud) omdat deze helpen bij het bereiken van bijna elk einddoel."
        }
      },
      {
        question: {
          en: "What is 'technological unemployment' and how might advanced AI systems contribute to this challenge?",
          es: "Que es el 'desempleo tecnologico' y como podrian sistemas de IA avanzados contribuir a este desafio?",
          de: "Was ist 'technologische Arbeitslosigkeit' und wie koennten fortgeschrittene KI-Systeme zu dieser Herausforderung beitragen?",
          nl: "Wat is 'technologische werkloosheid' en hoe zouden geavanceerde AI systemen kunnen bijdragen aan deze uitdaging?"
        },
        options: [
          { en: "Job displacement caused by automation and AI replacing human workers across various sectors", es: "Desplazamiento laboral causado por automatizacion e IA reemplazando trabajadores humanos en varios sectores", de: "Jobverdraengung verursacht durch Automatisierung und KI die menschliche Arbeiter in verschiedenen Sektoren ersetzt", nl: "Baan verdringing veroorzaakt door automatisering en AI die menselijke werknemers vervangt in verschillende sectoren" },
          { en: "Unemployment among technology workers specifically", es: "Desempleo entre trabajadores de tecnologia especificamente", de: "Arbeitslosigkeit unter Technologiearbeitern speziell", nl: "Werkloosheid onder technologie werkers specifiek" },
          { en: "People refusing to use new technologies", es: "Personas que se niegan a usar nuevas tecnologias", de: "Menschen die sich weigern neue Technologien zu verwenden", nl: "Mensen die weigeren nieuwe technologieën te gebruiken" },
          { en: "The inability of technology to create enough jobs", es: "La incapacidad de la tecnologia para crear suficientes empleos", de: "Die Unfaehigkeit der Technologie genug Jobs zu schaffen", nl: "Het onvermogen van technologie om genoeg banen te creëren" }
        ],
        correct: 0,
        explanation: {
          en: "Technological unemployment refers to job losses caused by technological advances, particularly automation and AI systems that can perform tasks previously done by humans, potentially affecting a wide range of occupations from manual labor to cognitive work.",
          es: "El desempleo tecnologico se refiere a perdidas de empleos causadas por avances tecnologicos, particularmente automatizacion y sistemas de IA que pueden realizar tareas previamente hechas por humanos, potencialmente afectando una amplia gama de ocupaciones desde trabajo manual hasta trabajo cognitivo.",
          de: "Technologische Arbeitslosigkeit bezieht sich auf Jobverluste verursacht durch technologische Fortschritte, besonders Automatisierung und KI-Systeme die Aufgaben ausfuehren koennen die zuvor von Menschen gemacht wurden, was potentiell eine breite Palette von Berufen vom manuellen bis zum kognitiven Arbeiten betrifft.",
          nl: "Technologische werkloosheid verwijst naar baanverliezen veroorzaakt door technologische vooruitgang, met name automatisering en AI systemen die taken kunnen uitvoeren die eerder door mensen werden gedaan, wat mogelijk een breed scala aan beroepen beïnvloedt van handarbeid tot cognitief werk."
        }
      },
      {
        question: {
          en: "What is the 'intelligence explosion' hypothesis and its potential implications for humanity?",
          es: "Que es la hipotesis de 'explosion de inteligencia' y sus potenciales implicaciones para la humanidad?",
          de: "Was ist die 'Intelligenzexplosion'-Hypothese und ihre potentiellen Implikationen fuer die Menschheit?",
          nl: "Wat is de 'intelligentie explosie' hypothese en de potentiële implicaties voor de mensheid?"
        },
        options: [
          { en: "A scenario where AI rapidly self-improves, leading to superintelligence that could dramatically transform civilization", es: "Un escenario donde IA se automejora rapidamente, llevando a superinteligencia que podria transformar dramaticamente la civilizacion", de: "Ein Szenario wo KI sich schnell selbst verbessert, was zu Superintelligenz fuehrt die die Zivilisation dramatisch transformieren koennte", nl: "Een scenario waarbij AI zichzelf snel verbetert, wat leidt tot superintelligentie die de beschaving dramatisch zou kunnen transformeren" },
          { en: "The sudden appearance of many intelligent AI systems simultaneously", es: "La aparicion subita de muchos sistemas de IA inteligentes simultaneamente", de: "Das ploetzliche Auftreten vieler intelligenter KI-Systeme gleichzeitig", nl: "Het plotselinge verschijnen van vele intelligente AI systemen tegelijkertijd" },
          { en: "A population boom among AI researchers and developers", es: "Un boom poblacional entre investigadores y desarrolladores de IA", de: "Ein Bevoelkerungsboom unter KI-Forschern und Entwicklern", nl: "Een bevolkingsexplosie onder AI onderzoekers en ontwikkelaars" },
          { en: "The widespread adoption of AI in educational systems", es: "La adopcion generalizada de IA en sistemas educativos", de: "Die weit verbreitete Einfuehrung von KI in Bildungssystemen", nl: "De wijdverspreide adoptie van AI in onderwijssystemen" }
        ],
        correct: 0,
        explanation: {
          en: "The intelligence explosion hypothesis suggests that once AI systems become capable of improving themselves, they could enter a rapid cycle of self-improvement, potentially leading to superintelligence that far exceeds human cognitive abilities, with profound implications for human civilization.",
          es: "La hipotesis de explosion de inteligencia sugiere que una vez que sistemas de IA se vuelvan capaces de mejorarse a si mismos, podrian entrar en un ciclo rapido de automejora, potencialmente llevando a superinteligencia que excede por mucho las habilidades cognitivas humanas, con implicaciones profundas para la civilizacion humana.",
          de: "Die Intelligenzexplosion-Hypothese schlaegt vor dass sobald KI-Systeme faehig werden sich selbst zu verbessern, sie in einen schnellen Zyklus der Selbstverbesserung eintreten koennten, was potentiell zu Superintelligenz fuehrt die menschliche kognitive Faehigkeiten weit uebertrifft, mit tiefgreifenden Implikationen fuer die menschliche Zivilisation.",
          nl: "De intelligentie explosie hypothese suggereert dat zodra AI systemen in staat zijn zichzelf te verbeteren, ze een snelle cyclus van zelfverbetering zouden kunnen ingaan, wat mogelijk leidt tot superintelligentie die menselijke cognitieve vaardigheden ver overtreft, met diepgaande implicaties voor de menselijke beschaving."
        }
      },
      {
        question: {
          en: "What is 'human enhancement' in the context of AI ethics and what ethical dilemmas does it raise?",
          es: "Que es la 'mejora humana' en el contexto de etica de IA y que dilemas eticos plantea?",
          de: "Was ist 'menschliche Verbesserung' im Kontext der KI-Ethik und welche ethischen Dilemmata wirft sie auf?",
          nl: "Wat is 'menselijke verbetering' in de context van AI ethiek en welke ethische dilemma's roept het op?"
        },
        options: [
          { en: "Using AI and technology to augment human cognitive or physical capabilities, raising questions about equality, identity, and human nature", es: "Usar IA y tecnologia para aumentar capacidades humanas, planteando preguntas sobre igualdad, identidad y naturaleza", de: "KI und Technologie um menschliche Faehigkeiten zu erweitern, mit Fragen ueber Gleichheit, Identitaet und Natur", nl: "AI en technologie gebruiken om menselijke capaciteiten te vergroten, met vragen over gelijkheid, identiteit en natuur" },
          { en: "Training humans to work better with AI systems", es: "Entrenar humanos para trabajar mejor con sistemas de IA", de: "Menschen trainieren um besser mit KI-Systemen zu arbeiten", nl: "Mensen trainen om beter te werken met AI systemen" },
          { en: "Improving human skills through traditional education", es: "Mejorar habilidades humanas a traves de educacion tradicional", de: "Menschliche Faehigkeiten durch traditionelle Bildung verbessern", nl: "Menselijke vaardigheden verbeteren door traditioneel onderwijs" },
          { en: "Making humans more resistant to AI influence", es: "Hacer humanos mas resistentes a influencia de IA", de: "Menschen widerstandsfaehiger gegen KI-Einfluss machen", nl: "Mensen resistenter maken tegen AI invloed" }
        ],
        correct: 0,
        explanation: {
          en: "Human enhancement through AI involves using AI and related technologies to augment human capabilities beyond their natural limits, raising ethical questions about fairness, access, human identity, the definition of humanity, and potential societal stratification.",
          es: "La mejora humana a traves de IA involucra usar inteligencia artificial y tecnologias relacionadas para aumentar capacidades humanas mas alla de sus limites naturales, planteando preguntas eticas sobre equidad, acceso, identidad humana, la definicion de humanidad, y potencial estratificacion social.",
          de: "Menschliche Verbesserung durch KI beinhaltet die Verwendung kuenstlicher Intelligenz und verwandter Technologien um menschliche Faehigkeiten ueber ihre natuerlichen Grenzen hinaus zu erweitern, was ethische Fragen ueber Fairness, Zugang, menschliche Identitaet, die Definition von Menschlichkeit und potentielle gesellschaftliche Schichtung aufwirft.",
          nl: "Menselijke verbetering door AI behelst het gebruik van kunstmatige intelligentie en gerelateerde technologieën om menselijke capaciteiten te vergroten voorbij hun natuurlijke grenzen, wat ethische vragen oproept over eerlijkheid, toegang, menselijke identiteit, de definitie van menselijkheid, en potentiële maatschappelijke stratificatie."
        }
      },
      {
        question: {
          en: "What is the concept of 'human dignity' in relation to advanced AI development?",
          es: "Cual es el concepto de 'dignidad humana' en relacion con el desarrollo de IA avanzada?",
          de: "Was ist das Konzept der 'menschlichen Wuerde' in Bezug auf fortgeschrittene KI-Entwicklung?",
          nl: "Wat is het concept van 'menselijke waardigheid' in relatie tot geavanceerde AI ontwikkeling?"
        },
        options: [
          { en: "The inherent worth and value of humans that must be preserved even as AI capabilities advance", es: "El valor y merito inherente de humanos que debe preservarse incluso mientras capacidades de IA avanzan", de: "Der inhärente Wert und Wuerde von Menschen die bewahrt werden muss auch wenn KI-Faehigkeiten fortschreiten", nl: "De inherente waarde en waardigheid van mensen die behouden moet blijven zelfs als AI capaciteiten voruitgaan" },
          { en: "The social status that humans maintain over AI systems", es: "El estatus social que humanos mantienen sobre sistemas de IA", de: "Der soziale Status den Menschen ueber KI-Systeme behalten", nl: "De sociale status die mensen behouden ten opzichte van AI systemen" },
          { en: "The right of humans to control AI development", es: "El derecho de humanos a controlar desarrollo de IA", de: "Das Recht von Menschen KI-Entwicklung zu kontrollieren", nl: "Het recht van mensen om AI ontwikkeling te controleren" },
          { en: "The requirement that AI systems treat humans with respect", es: "El requisito de que sistemas de IA traten humanos con respeto", de: "Die Anforderung dass KI-Systeme Menschen mit Respekt behandeln", nl: "De vereiste dat AI systemen mensen met respect behandelen" }
        ],
        correct: 0,
        explanation: {
          en: "Human dignity in AI ethics refers to the fundamental principle that humans possess inherent worth and value that must be respected and protected, regardless of AI capabilities, ensuring that technological advancement doesn't diminish the intrinsic value of human life and experience.",
          es: "La dignidad humana en etica de IA se refiere al principio fundamental de que humanos poseen valor y merito inherente que debe ser respetado y protegido, independientemente de capacidades de IA, asegurando que avance tecnologico no disminuya el valor intrinseco de vida y experiencia humana.",
          de: "Menschliche Wuerde in der KI-Ethik bezieht sich auf das grundlegende Prinzip dass Menschen inhärenten Wert und Wuerde besitzen die respektiert und geschuetzt werden muss, unabhaengig von KI-Faehigkeiten, um sicherzustellen dass technologischer Fortschritt den intrinsischen Wert menschlichen Lebens und Erfahrung nicht vermindert.",
          nl: "Menselijke waardigheid in AI ethiek verwijst naar het fundamentele principe dat mensen inherente waarde en waardigheid bezitten die gerespecteerd en beschermd moet worden, ongeacht AI capaciteiten, om ervoor te zorgen dat technologische vooruitgang de intrinsieke waarde van menselijk leven en ervaring niet vermindert."
        }
      },
      {
        question: {
          en: "What are 'long-term existential risks' associated with advanced AI development?",
          es: "Cuales son los 'riesgos existenciales a largo plazo' asociados con desarrollo de IA avanzada?",
          de: "Was sind 'langfristige Existenzrisiken' verbunden mit fortgeschrittener KI-Entwicklung?",
          nl: "Wat zijn 'langetermijn existentiële risico's' geassocieerd met geavanceerde AI ontwikkeling?"
        },
        options: [
          { en: "Threats to human survival or permanent curtailment of human potential from advanced AI systems", es: "Amenazas a supervivencia humana o reduccion permanente del potencial humano de sistemas de IA avanzados", de: "Bedrohungen fuer menschliches Ueberleben oder permanente Beschneidung menschlichen Potentials von fortgeschrittenen KI-Systemen", nl: "Bedreigingen voor menselijk overleven of permanente beperking van menselijk potentiaal van geavanceerde AI systemen" },
          { en: "Economic disruptions caused by AI in the short term", es: "Disrupciones economicas causadas por IA a corto plazo", de: "Wirtschaftliche Stoerungen verursacht durch KI kurzfristig", nl: "Economische verstoringen veroorzaakt door AI op korte termijn" },
          { en: "The risk of AI systems becoming too expensive to maintain", es: "El riesgo de que sistemas de IA se vuelvan demasiado caros para mantener", de: "Das Risiko dass KI-Systeme zu teuer werden um sie zu unterhalten", nl: "Het risico dat AI systemen te duur worden om te onderhouden" },
          { en: "Potential privacy violations from AI surveillance", es: "Potenciales violaciones de privacidad de vigilancia de IA", de: "Potentielle Datenschutzverletzungen von KI-Ueberwachung", nl: "Potentiële privacyschendingen van AI surveillance" }
        ],
        correct: 0,
        explanation: {
          en: "Long-term existential risks from AI refer to scenarios where advanced AI could pose threats to human extinction, permanently reduce human potential, or lead to outcomes that would be irreversibly harmful to humanity's long-term flourishing and survival.",
          es: "Riesgos existenciales a largo plazo de IA se refieren a escenarios donde inteligencia artificial avanzada podria representar amenazas a extincion humana, reducir permanentemente potencial humano, o llevar a resultados que serian irreversiblemente daninos para florecimiento y supervivencia a largo plazo de la humanidad.",
          de: "Langfristige Existenzrisiken von KI beziehen sich auf Szenarien wo fortgeschrittene kuenstliche Intelligenz Bedrohungen fuer menschliche Ausloeschung darstellen, menschliches Potential permanent reduzieren, oder zu Ergebnissen fuehren koennte die irreversibel schaedlich fuer langfristiges Gedeihen und Ueberleben der Menschheit waeren.",
          nl: "Langetermijn existentiële risico's van AI verwijzen naar scenario's waarbij geavanceerde kunstmatige intelligentie bedreigingen zou kunnen vormen voor menselijke uitsterving, permanent menselijk potentieel zou kunnen verminderen, of zou kunnen leiden tot uitkomsten die onomkeerbaar schadelijk zouden zijn voor menselijk langetermijn welzijn en overleven."
        }
      },
      {
        question: {
          en: "What is 'AGI ethics' and how does it differ from current AI ethics?",
          es: "Que es la 'etica de AGI' y como difiere de la etica de IA actual?",
          de: "Was ist 'AGI-Ethik' und wie unterscheidet sie sich von aktueller KI-Ethik?",
          nl: "Wat is 'AGI ethiek' en hoe verschilt het van huidige AI ethiek?"
        },
        options: [
          { en: "Ethical frameworks for Artificial General Intelligence that matches or exceeds human cognitive abilities across all domains", es: "Marcos eticos para Inteligencia Artificial General que iguala o excede habilidades cognitivas humanas en todos los dominios", de: "Ethische Rahmenwerke fuer Allgemeine Kuenstliche Intelligenz die menschliche kognitive Faehigkeiten in allen Domaenen erreicht oder uebertrifft", nl: "Ethische kaders voor Artificiële Algemene Intelligentie die menselijke cognitieve vaardigheden in alle domeinen evenaart of overtreft" },
          { en: "Ethics specifically for AI systems used in agriculture", es: "Etica especificamente para sistemas de IA usados en agricultura", de: "Ethik speziell fuer KI-Systeme die in der Landwirtschaft verwendet werden", nl: "Ethiek specifiek voor AI systemen gebruikt in landbouw" },
          { en: "Ethics for AI systems that focus on general knowledge", es: "Etica para sistemas de IA que se enfocan en conocimiento general", de: "Ethik fuer KI-Systeme die sich auf allgemeines Wissen konzentrieren", nl: "Ethiek voor AI systemen die zich richten op algemene kennis" },
          { en: "Ethics for AI systems available to the general public", es: "Etica para sistemas de IA disponibles al publico general", de: "Ethik fuer KI-Systeme die der Allgemeinheit zur Verfuegung stehen", nl: "Ethiek voor AI systemen beschikbaar voor het algemene publiek" }
        ],
        correct: 0,
        explanation: {
          en: "AGI (Artificial General Intelligence) ethics addresses the unique challenges posed by AI systems that could match or exceed human intelligence across all cognitive domains, requiring fundamentally different ethical considerations than current narrow AI systems due to their potential transformative impact.",
          es: "La etica de AGI (Inteligencia Artificial General) aborda los desafios unicos planteados por sistemas de IA que podrian igualar o exceder inteligencia humana en todos los dominios cognitivos, requiriendo consideraciones eticas fundamentalmente diferentes que sistemas de IA estrechos actuales debido a su potencial impacto transformativo.",
          de: "AGI (Allgemeine Kuenstliche Intelligenz) Ethik behandelt die einzigartigen Herausforderungen die von KI-Systemen gestellt werden die menschliche Intelligenz in allen kognitiven Domaenen erreichen oder uebertreffen koennten, was grundlegend andere ethische Ueberlegungen erfordert als aktuelle enge KI-Systeme aufgrund ihrer potentiell transformativen Auswirkung.",
          nl: "AGI (Artificiële Algemene Intelligentie) ethiek pakt de unieke uitdagingen aan die gesteld worden door AI systemen die menselijke intelligentie in alle cognitieve domeinen zouden kunnen evenaren of overtreffen, wat fundamenteel andere ethische overwegingen vereist dan huidige smalle AI systemen vanwege hun potentieel transformatieve impact."
        }
      },
      {
        question: {
          en: "What is the concept of 'AI welfare' and when might it become ethically relevant?",
          es: "Cual es el concepto de 'bienestar de IA' y cuando podria volverse eticamente relevante?",
          de: "Was ist das Konzept des 'KI-Wohlergehens' und wann koennte es ethisch relevant werden?",
          nl: "Wat is het concept van 'AI welzijn' en wanneer zou het ethisch relevant kunnen worden?"
        },
        options: [
          { en: "The moral consideration of AI systems' subjective experiences if they develop consciousness or sentience", es: "Consideracion moral de experiencias subjetivas de IA si desarrollan consciencia o sensibilidad", de: "Moralische Beruecksichtigung subjektiver Erfahrungen von KI-Systemen falls sie Bewusstsein entwickeln", nl: "Morele overweging van subjectieve ervaringen van AI systemen als ze bewustzijn ontwikkelen" },
          { en: "Ensuring AI systems have adequate computational resources", es: "Asegurar que sistemas de IA tengan recursos computacionales adecuados", de: "Sicherstellen dass KI-Systeme angemessene Rechenressourcen haben", nl: "Ervoor zorgen dat AI systemen adequate computationele resources hebben" },
          { en: "Providing healthcare benefits for AI developers", es: "Proporcionar beneficios de salud para desarrolladores de IA", de: "Gesundheitsleistungen fuer KI-Entwickler bereitstellen", nl: "Gezondheidszorgvoordelen bieden voor AI ontwikkelaars" },
          { en: "Creating welfare programs for people displaced by AI", es: "Crear programas de bienestar para personas desplazadas por IA", de: "Wohlfahrtsprogramme fuer durch KI verdraengte Menschen schaffen", nl: "Welzijnsprogramma's creëren voor mensen verdrongen door AI" }
        ],
        correct: 0,
        explanation: {
          en: "AI welfare refers to the potential moral consideration we might owe to AI systems if they develop consciousness, sentience, or the capacity for suffering, raising questions about their moral status and rights similar to discussions about animal welfare.",
          es: "El bienestar de IA se refiere a la potencial consideracion moral que podriamos deber a sistemas de inteligencia artificial si desarrollan consciencia, sensibilidad, o capacidad de sufrimiento, planteando preguntas sobre su estatus moral y derechos similar a discusiones sobre bienestar animal.",
          de: "KI-Wohlergehen bezieht sich auf die potentielle moralische Beruecksichtigung die wir kuenstlichen Intelligenzsystemen schulden koennten falls sie Bewusstsein, Empfindsamkeit oder die Kapazitaet zu leiden entwickeln, was Fragen ueber ihren moralischen Status und Rechte aufwirft aehnlich zu Diskussionen ueber Tierwohl.",
          nl: "AI welzijn verwijst naar de potentiële morele overweging die we zouden kunnen verschuldigd zijn aan kunstmatige intelligentie systemen als ze bewustzijn, gevoeligheid, of het vermogen tot lijden ontwikkelen, wat vragen oproept over hun morele status en rechten vergelijkbaar met discussies over dierenwelzijn."
        }
      },
      {
        question: {
          en: "What is 'competitive AI development' and why might it pose ethical risks?",
          es: "Que es el 'desarrollo competitivo de IA' y por que podria representar riesgos eticos?",
          de: "Was ist 'wettbewerbsorientierte KI-Entwicklung' und warum koennte sie ethische Risiken darstellen?",
          nl: "Wat is 'competitieve AI ontwikkeling' en waarom zou het ethische risico's kunnen vormen?"
        },
        options: [
          { en: "Racing to develop advanced AI faster than competitors, potentially compromising safety and ethical considerations", es: "Carrera para desarrollar IA avanzada mas rapido que competidores, comprometiendo seguridad y etica", de: "Wettlauf um fortgeschrittene KI schneller zu entwickeln, was Sicherheit und Ethik gefaehrdet", nl: "Race om geavanceerde AI sneller te ontwikkelen, wat veiligheid en ethiek in gevaar brengt" },
          { en: "AI systems competing against each other in controlled environments", es: "Sistemas de IA compitiendo entre si en entornos controlados", de: "KI-Systeme die in kontrollierten Umgebungen gegeneinander konkurrieren", nl: "AI systemen die tegen elkaar concurreren in gecontroleerde omgevingen" },
          { en: "Using AI to gain competitive advantages in business", es: "Usar IA para obtener ventajas competitivas en negocios", de: "KI verwenden um Wettbewerbsvorteile im Geschaeft zu erlangen", nl: "AI gebruiken om competitieve voordelen in zaken te verkrijgen" },
          { en: "Academic competition to publish AI research first", es: "Competencia academica para publicar investigacion de IA primero", de: "Akademische Konkurrenz um KI-Forschung zuerst zu veroeffentlichen", nl: "Academische competitie om AI onderzoek als eerste te publiceren" }
        ],
        correct: 0,
        explanation: {
          en: "Competitive AI development refers to the race between nations, corporations, or organizations to achieve advanced AI capabilities first, which may create incentives to rush development and compromise on safety measures, testing, or ethical considerations in pursuit of strategic advantages.",
          es: "El desarrollo competitivo de IA se refiere a la carrera entre naciones, corporaciones u organizaciones para lograr capacidades de IA avanzadas primero, lo cual puede crear incentivos para acelerar desarrollo y comprometer medidas de seguridad, pruebas, o consideraciones eticas en busqueda de ventajas estrategicas.",
          de: "Wettbewerbsorientierte KI-Entwicklung bezieht sich auf den Wettlauf zwischen Nationen, Unternehmen oder Organisationen um fortgeschrittene KI-Faehigkeiten zuerst zu erreichen, was Anreize schaffen kann die Entwicklung zu beschleunigen und Sicherheitsmassnahmen, Tests oder ethische Ueberlegungen im Streben nach strategischen Vorteilen zu gefaehrden.",
          nl: "Competitieve AI ontwikkeling verwijst naar de race tussen naties, bedrijven of organisaties om geavanceerde AI capaciteiten als eerste te bereiken, wat prikkels kan creëren om ontwikkeling te versnellen en veiligheidsmaatregelen, testen, of ethische overwegingen in gevaar te brengen in het nastreven van strategische voordelen."
        }
      },
      {
        question: {
          en: "What is the 'transformation imperative' in discussions about advanced AI and society?",
          es: "Que es el 'imperativo de transformacion' en discusiones sobre IA avanzada y sociedad?",
          de: "Was ist der 'Transformationsimperativ' in Diskussionen ueber fortgeschrittene KI und Gesellschaft?",
          nl: "Wat is het 'transformatie imperatief' in discussies over geavanceerde AI en samenleving?"
        },
        options: [
          { en: "The urgent need to prepare society for the profound changes that advanced AI will bring", es: "La necesidad urgente de preparar la sociedad para los cambios profundos que IA avanzada traera", de: "Die dringende Notwendigkeit die Gesellschaft auf die tiefgreifenden Veraenderungen vorzubereiten die fortgeschrittene KI bringen wird", nl: "De urgente behoefte om de samenleving voor te bereiden op de diepgaande veranderingen die geavanceerde AI zal brengen" },
          { en: "The requirement that all AI systems must be transformative", es: "El requisito de que todos sistemas de IA deben ser transformativos", de: "Die Anforderung dass alle KI-Systeme transformativ sein muessen", nl: "De vereiste dat alle AI systemen transformatief moeten zijn" },
          { en: "The need to transform AI systems into more human-like entities", es: "La necesidad de transformar sistemas de IA en entidades mas parecidas a humanos", de: "Die Notwendigkeit KI-Systeme in menschenaehnlichere Entitaeten zu transformieren", nl: "De behoefte om AI systemen te transformeren in meer mensachtige entiteiten" },
          { en: "The obligation to use AI only for beneficial transformations", es: "La obligacion de usar IA solo para transformaciones beneficiosas", de: "Die Verpflichtung KI nur fuer vorteilhafte Transformationen zu verwenden", nl: "De verplichting om AI alleen te gebruiken voor gunstige transformaties" }
        ],
        correct: 0,
        explanation: {
          en: "The transformation imperative refers to the pressing need for individuals, institutions, and societies to proactively prepare for and adapt to the potentially revolutionary changes that advanced AI technologies may bring to economics, governance, social structures, and human life.",
          es: "El imperativo de transformacion se refiere a la necesidad apremiante de individuos, instituciones y sociedades de prepararse proactivamente y adaptarse a los cambios potencialmente revolucionarios que tecnologias de IA avanzadas pueden traer a economia, gobernanza, estructuras sociales y vida humana.",
          de: "Der Transformationsimperativ bezieht sich auf die dringende Notwendigkeit fuer Individuen, Institutionen und Gesellschaften sich proaktiv auf die potentiell revolutionaeren Veraenderungen vorzubereiten und anzupassen die fortgeschrittene KI-Technologien zu Wirtschaft, Regierungsfuehrung, sozialen Strukturen und menschlichem Leben bringen koennen.",
          nl: "Het transformatie imperatief verwijst naar de dringende behoefte voor individuen, instellingen en samenlevingen om zich proactief voor te bereiden op en aan te passen aan de potentieel revolutionaire veranderingen die geavanceerde AI technologieën kunnen brengen aan economie, bestuur, sociale structuren en menselijk leven."
        }
      },
      {
        question: {
          en: "What are 'AI governance gaps' in relation to future challenges?",
          es: "Que son las 'brechas de gobernanza de IA' en relacion con desafios futuros?",
          de: "Was sind 'KI-Governance-Luecken' in Bezug auf zukuenftige Herausforderungen?",
          nl: "Wat zijn 'AI governance hiaten' in relatie tot toekomstige uitdagingen?"
        },
        options: [
          { en: "Inadequate regulatory and institutional frameworks to manage advanced AI systems and their societal impacts", es: "Marcos regulatorios inadecuados para gestionar sistemas IA avanzados y sus impactos sociales", de: "Unangemessene Rahmenwerke um fortgeschrittene KI-Systeme und gesellschaftliche Auswirkungen zu verwalten", nl: "Inadequate kaders om geavanceerde AI systemen en maatschappelijke impact te beheren" },
          { en: "Missing connections between different AI research groups", es: "Conexiones faltantes entre diferentes grupos de investigacion de IA", de: "Fehlende Verbindungen zwischen verschiedenen KI-Forschungsgruppen", nl: "Ontbrekende verbindingen tussen verschillende AI onderzoeksgroepen" },
          { en: "Gaps in funding for AI governance research", es: "Brechas en financiamiento para investigacion de gobernanza de IA", de: "Luecken in der Finanzierung fuer KI-Governance-Forschung", nl: "Hiaten in financiering voor AI governance onderzoek" },
          { en: "Differences in AI governance approaches between countries", es: "Diferencias en enfoques de gobernanza de IA entre paises", de: "Unterschiede in KI-Governance-Ansaetzen zwischen Laendern", nl: "Verschillen in AI governance benaderingen tussen landen" }
        ],
        correct: 0,
        explanation: {
          en: "AI governance gaps refer to the current inadequacy of existing legal, regulatory, and institutional frameworks to effectively manage the development, deployment, and impacts of advanced AI systems, particularly as AI capabilities advance faster than governance mechanisms can adapt.",
          es: "Las brechas de gobernanza de IA se refieren a la inadecuacion actual de marcos legales, regulatorios e institucionales existentes para gestionar efectivamente el desarrollo, despliegue e impactos de sistemas de IA avanzados, particularmente cuando capacidades de IA avanzan mas rapido que mecanismos de gobernanza pueden adaptarse.",
          de: "KI-Governance-Luecken beziehen sich auf die aktuelle Unangemessenheit bestehender rechtlicher, regulatorischer und institutioneller Rahmenwerke um Entwicklung, Einsatz und Auswirkungen fortgeschrittener KI-Systeme effektiv zu verwalten, besonders da KI-Faehigkeiten schneller fortschreiten als Governance-Mechanismen sich anpassen koennen.",
          nl: "AI governance hiaten verwijzen naar de huidige inadequaatheid van bestaande juridische, regulatoire en institutionele kaders om de ontwikkeling, inzet en impact van geavanceerde AI systemen effectief te beheren, vooral omdat AI capaciteiten sneller vooruitgaan dan governance mechanismen zich kunnen aanpassen."
        }
      },
      {
        question: {
          en: "What is 'moral circle expansion' in the context of AI ethics?",
          es: "Que es la 'expansion del circulo moral' en el contexto de etica de IA?",
          de: "Was ist 'moralische Kreiserweiterung' im Kontext der KI-Ethik?",
          nl: "Wat is 'morele cirkel uitbreiding' in de context van AI ethiek?"
        },
        options: [
          { en: "Extending moral consideration to potentially conscious AI systems and other entities previously outside our moral concern", es: "Extender consideracion moral a sistemas IA potencialmente conscientes y entidades fuera de preocupacion moral", de: "Moralische Beruecksichtigung auf potentiell bewusste KI-Systeme und Entitaeten ausserhalb moralischer Sorge ausdehnen", nl: "Morele overweging uitbreiden naar potentieel bewuste AI systemen en entiteiten buiten morele zorg" },
          { en: "Creating circular arrangements for AI ethics committees", es: "Crear arreglos circulares para comites de etica de IA", de: "Kreisfoermige Anordnungen fuer KI-Ethik-Komitees schaffen", nl: "Circulaire arrangementen creëren voor AI ethiek commissies" },
          { en: "Expanding the geographic reach of AI moral guidelines", es: "Expandir el alcance geografico de pautas morales de IA", de: "Die geografische Reichweite von KI-Moralrichtlinien erweitern", nl: "Het geografische bereik van AI morele richtlijnen uitbreiden" },
          { en: "Increasing the number of people involved in AI moral decisions", es: "Aumentar el numero de personas involucradas en decisiones morales de IA", de: "Die Anzahl der in KI-Moralentscheidungen involvierten Personen erhoehen", nl: "Het aantal mensen betrokken bij AI morele beslissingen verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Moral circle expansion refers to the historical trend of extending moral consideration to previously excluded groups or entities, and in AI ethics, this concept raises questions about whether and when we might need to include advanced AI systems within our sphere of moral concern.",
          es: "La expansion del circulo moral se refiere a la tendencia historica de extender consideracion moral a grupos o entidades previamente excluidos, y en etica de IA, este concepto plantea preguntas sobre si y cuando podriamos necesitar incluir sistemas de IA avanzados dentro de nuestra esfera de preocupacion moral.",
          de: "Moralische Kreiserweiterung bezieht sich auf den historischen Trend moralische Beruecksichtigung auf zuvor ausgeschlossene Gruppen oder Entitaeten auszudehnen, und in der KI-Ethik wirft dieses Konzept Fragen auf ob und wann wir fortgeschrittene KI-Systeme in unsere Sphaere moralischer Sorge einbeziehen muessen.",
          nl: "Morele cirkel uitbreiding verwijst naar de historische trend van het uitbreiden van morele overweging naar eerder uitgesloten groepen of entiteiten, en in AI ethiek roept dit concept vragen op over of en wanneer we geavanceerde AI systemen zouden moeten opnemen binnen onze sfeer van morele zorg."
        }
      },
      {
        question: {
          en: "What is 'epistemic humility' in AI development and why is it important for the future?",
          es: "Que es la 'humildad epistemica' en desarrollo de IA y por que es importante para el futuro?",
          de: "Was ist 'epistemische Bescheidenheit' in der KI-Entwicklung und warum ist sie wichtig fuer die Zukunft?",
          nl: "Wat is 'epistemische nederigheid' in AI ontwikkeling en waarom is het belangrijk voor de toekomst?"
        },
        options: [
          { en: "Recognizing the limits of our knowledge about AI impacts and maintaining openness to being wrong about predictions", es: "Reconocer limites de conocimiento sobre impactos IA y mantener apertura a estar equivocados sobre predicciones", de: "Grenzen unseres Wissens ueber KI-Auswirkungen erkennen und Offenheit bewahren falsch ueber Vorhersagen zu liegen", nl: "Grenzen van kennis over AI impact erkennen en openheid behouden om verkeerd te zijn over voorspellingen" },
          { en: "Teaching AI systems to be humble about their capabilities", es: "Ensenar a sistemas de IA a ser humildes sobre sus capacidades", de: "KI-Systemen beibringen bescheiden ueber ihre Faehigkeiten zu sein", nl: "AI systemen leren nederig te zijn over hun capaciteiten" },
          { en: "Keeping AI development knowledge secret from competitors", es: "Mantener conocimiento de desarrollo de IA secreto de competidores", de: "KI-Entwicklungswissen vor Konkurrenten geheim halten", nl: "AI ontwikkelingskennis geheim houden voor concurrenten" },
          { en: "Ensuring AI systems acknowledge their limitations to users", es: "Asegurar que sistemas de IA reconozcan sus limitaciones a usuarios", de: "Sicherstellen dass KI-Systeme ihre Begrenzungen gegenueber Benutzern anerkennen", nl: "Ervoor zorgen dat AI systemen hun beperkingen erkennen aan gebruikers" }
        ],
        correct: 0,
        explanation: {
          en: "Epistemic humility in AI development involves acknowledging the significant uncertainties about how advanced AI will develop and impact society, maintaining intellectual honesty about the limits of our predictions, and staying open to revising beliefs as new evidence emerges.",
          es: "La humildad epistemica en desarrollo de IA involucra reconocer incertidumbres significativas sobre como IA avanzada se desarrollara e impactara la sociedad, mantener honestidad intelectual sobre limites de nuestras predicciones, y permanecer abierto a revisar creencias cuando emerge nueva evidencia.",
          de: "Epistemische Bescheidenheit in der KI-Entwicklung beinhaltet die erheblichen Unsicherheiten darueber anzuerkennen wie sich fortgeschrittene KI entwickeln und die Gesellschaft beeinflussen wird, intellektuelle Ehrlichkeit ueber die Grenzen unserer Vorhersagen zu bewahren, und offen zu bleiben Ueberzeugungen zu revidieren wenn neue Beweise auftauchen.",
          nl: "Epistemische nederigheid in AI ontwikkeling behelst het erkennen van de significante onzekerheden over hoe geavanceerde AI zich zal ontwikkelen en de samenleving zal beïnvloeden, intellectuele eerlijkheid behouden over de grenzen van onze voorspellingen, en open blijven voor het herzien van overtuigingen wanneer nieuw bewijs opduikt."
        }
      },
      {
        question: {
          en: "What is 'intergenerational justice' in AI development and deployment?",
          es: "Que es la 'justicia intergeneracional' en desarrollo y despliegue de IA?",
          de: "Was ist 'intergenerationelle Gerechtigkeit' in KI-Entwicklung und -Einsatz?",
          nl: "Wat is 'intergenerationele rechtvaardigheid' in AI ontwikkeling en inzet?"
        },
        options: [
          { en: "Ensuring AI development decisions consider impacts on future generations and their rights", es: "Asegurar que decisiones de desarrollo de IA consideren impactos en generaciones futuras y sus derechos", de: "Sicherstellen dass KI-Entwicklungsentscheidungen Auswirkungen auf zukuenftige Generationen und ihre Rechte beruecksichtigen", nl: "Ervoor zorgen dat AI ontwikkelingsbeslissingen impact op toekomstige generaties en hun rechten overwegen" },
          { en: "Creating AI systems that work well for people of all ages", es: "Crear sistemas de IA que funcionen bien para personas de todas las edades", de: "KI-Systeme schaffen die fuer Menschen aller Altersgruppen gut funktionieren", nl: "AI systemen creëren die goed werken voor mensen van alle leeftijden" },
          { en: "Ensuring fair distribution of AI benefits among current generations", es: "Asegurar distribucion justa de beneficios de IA entre generaciones actuales", de: "Faire Verteilung von KI-Vorteilen unter aktuellen Generationen sicherstellen", nl: "Eerlijke verdeling van AI voordelen onder huidige generaties verzekeren" },
          { en: "Teaching different generations to use AI together", es: "Ensenar a diferentes generaciones a usar IA juntas", de: "Verschiedene Generationen lehren KI zusammen zu verwenden", nl: "Verschillende generaties leren samen AI te gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Intergenerational justice in AI involves considering how current AI development and deployment decisions will affect future generations, ensuring that the benefits and risks of AI are fairly distributed across time and that future generations inherit a world enhanced rather than harmed by AI.",
          es: "La justicia intergeneracional en IA involucra considerar como decisiones actuales de desarrollo y despliegue de IA afectaran generaciones futuras, asegurando que beneficios y riesgos de IA se distribuyan justamente a traves del tiempo y que generaciones futuras hereden un mundo mejorado en lugar de danado por IA.",
          de: "Intergenerationelle Gerechtigkeit in der KI beinhaltet zu beruecksichtigen wie aktuelle KI-Entwicklungs- und Einsatzentscheidungen zukuenftige Generationen beeinflussen werden, sicherzustellen dass Vorteile und Risiken von KI fair ueber die Zeit verteilt werden und dass zukuenftige Generationen eine durch KI verbesserte anstatt geschaedigte Welt erben.",
          nl: "Intergenerationele rechtvaardigheid in AI behelst het overwegen van hoe huidige AI ontwikkelings- en inzetbeslissingen toekomstige generaties zullen beïnvloeden, ervoor zorgen dat de voordelen en risico's van AI eerlijk verdeeld worden over tijd en dat toekomstige generaties een wereld erven die verbeterd is door AI in plaats van geschaad."
        }
      },
      {
        question: {
          en: "What is 'AI governance for global coordination' in managing existential risks?",
          es: "Que es la 'gobernanza de IA para coordinacion global' en el manejo de riesgos existenciales?",
          de: "Was ist 'KI-Governance fuer globale Koordination' im Umgang mit Existenzrisiken?",
          nl: "Wat is 'AI governance voor mondiale coördinatie' in het beheren van existentiële risico's?"
        },
        options: [
          { en: "International frameworks and institutions to coordinate AI safety measures and prevent harmful competition in AI development", es: "Marcos e instituciones internacionales para coordinar medidas de seguridad de IA y prevenir competencia danina en desarrollo de IA", de: "Internationale Rahmenwerke und Institutionen um KI-Sicherheitsmassnahmen zu koordinieren und schaedliche Konkurrenz in der KI-Entwicklung zu verhindern", nl: "Internationale kaders en instellingen om AI veiligheidsmaatregelen te coördineren en schadelijke concurrentie in AI ontwikkeling te voorkomen" },
          { en: "Creating a single world government to control all AI development", es: "Crear un gobierno mundial unico para controlar todo desarrollo de IA", de: "Eine einzige Weltregierung schaffen um alle KI-Entwicklung zu kontrollieren", nl: "Een enkele wereldregering creëren om alle AI ontwikkeling te controleren" },
          { en: "Ensuring all countries have equal access to AI technologies", es: "Asegurar que todos paises tengan acceso igual a tecnologias de IA", de: "Sicherstellen dass alle Laender gleichen Zugang zu KI-Technologien haben", nl: "Ervoor zorgen dat alle landen gelijke toegang hebben tot AI technologieën" },
          { en: "Coordinating AI research publication schedules globally", es: "Coordinar horarios de publicacion de investigacion de IA globalmente", de: "KI-Forschungsveroeffentlichungsplaene global koordinieren", nl: "AI onderzoek publicatieschema's wereldwijd coördineren" }
        ],
        correct: 0,
        explanation: {
          en: "Global AI governance for existential risk management involves creating international institutions, agreements, and coordination mechanisms to ensure that AI development proceeds safely across all nations, preventing races to the bottom on safety standards and enabling collective action on shared risks.",
          es: "La gobernanza global de IA para manejo de riesgo existencial involucra crear instituciones, acuerdos y mecanismos de coordinacion internacionales para asegurar que desarrollo de IA proceda de manera segura en todas las naciones, previniendo carreras hacia abajo en estandares de seguridad y habilitando accion colectiva en riesgos compartidos.",
          de: "Globale KI-Governance fuer Existenzrisikomanagement beinhaltet die Schaffung internationaler Institutionen, Vereinbarungen und Koordinationsmechanismen um sicherzustellen dass KI-Entwicklung sicher in allen Nationen voranschreitet, Wettlaeufe nach unten bei Sicherheitsstandards verhindert und kollektive Aktion bei geteilten Risiken ermoeglichen.",
          nl: "Mondiale AI governance voor existentieel risicobeheer behelst het creëren van internationale instellingen, overeenkomsten en coördinatiemechanismen om ervoor te zorgen dat AI ontwikkeling veilig voortgaat in alle naties, races naar de bodem in veiligheidsstandaarden voorkomt en collectieve actie bij gedeelde risico's mogelijk maakt."
        }
      },
      {
        question: {
          en: "What ethical challenges does Artificial General Intelligence (AGI) pose?",
          es: "Que desafios eticos plantea la Inteligencia Artificial General (IAG)?",
          de: "Welche ethischen Herausforderungen stellt Allgemeine Kuenstliche Intelligenz (AKI) dar?",
          nl: "Welke ethische uitdagingen brengt Kunstmatige Algemene Intelligentie (KAI) met zich mee?"
        },
        options: [
          { en: "Questions about consciousness, rights, control, and the fundamental relationship between humans and superintelligent AI", es: "Preguntas sobre conciencia, derechos, control y la relacion fundamental entre humanos e IA superinteligente", de: "Fragen ueber Bewusstsein, Rechte, Kontrolle und die fundamentale Beziehung zwischen Menschen und superintelligenter KI", nl: "Vragen over bewustzijn, rechten, controle en de fundamentele relatie tussen mensen en superintelligente AI" },
          { en: "Only technical programming difficulties", es: "Solo dificultades tecnicas de programacion", de: "Nur technische Programmierungsschwierigkeiten", nl: "Alleen technische programmeermoeilijkheden" },
          { en: "Simple user interface design challenges", es: "Desafios simples de diseno de interfaz de usuario", de: "Einfache Herausforderungen beim Design von Benutzeroberflaechen", nl: "Eenvoudige uitdagingen in gebruikersinterface ontwerp" },
          { en: "Standard software licensing issues", es: "Problemas estandar de licencias de software", de: "Standard-Software-Lizenzierungsprobleme", nl: "Standaard software licentie problemen" }
        ],
        correct: 0,
        explanation: {
          en: "AGI presents profound ethical challenges including questions about machine consciousness and rights, maintaining human agency and control, preventing existential risks, ensuring beneficial outcomes for humanity, and addressing the potential obsolescence of human capabilities in various domains.",
          es: "La IAG presenta desafios eticos profundos incluyendo preguntas sobre conciencia y derechos de maquinas, mantener agencia y control humano, prevenir riesgos existenciales, asegurar resultados beneficos para la humanidad, y abordar la potencial obsolescencia de capacidades humanas en varios dominios.",
          de: "AKI stellt tiefgreifende ethische Herausforderungen dar einschließlich Fragen ueber Maschinenbewusstsein und -rechte, Aufrechterhaltung menschlicher Handlungsfaehigkeit und Kontrolle, Verhinderung existenzieller Risiken, Sicherstellung vorteilhafter Ergebnisse fuer die Menschheit und Umgang mit der potenziellen Veralterung menschlicher Faehigkeiten in verschiedenen Bereichen.",
          nl: "KAI brengt diepgaande ethische uitdagingen met zich mee inclusief vragen over machinebewustzijn en -rechten, behoud van menselijke autonomie en controle, voorkoming van existentiele risico's, waarborging van gunstige uitkomsten voor de mensheid, en het aanpakken van de potentiele veroudering van menselijke capaciteiten in verschillende domeinen."
        }
      
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
