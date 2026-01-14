// AI Ethics Quiz - Level 1: Basic Knowledge about AI Ethics
(function() {
  const level1 = {
    name: {
      en: "AI Ethics Level 1",
      es: "Etica de IA Nivel 1",
      de: "KI-Ethik Stufe 1",
      nl: "AI Ethiek Level 1"
    },
    questions: [
      {
        question: {
          en: "What is AI bias in ML systems?",
          es: "Que es el sesgo de IA en los sistemas de aprendizaje automatico?",
          de: "Was ist KI-Verzerrung in maschinellen Lernsystemen?",
          nl: "Wat is AI-bias in machine learning systemen?"
        },
        options: [
          { en: "AI makes unfair decisions from biased data", es: "IA toma decisiones injustas basadas en datos sesgados", de: "KI trifft unfaire Entscheidungen basierend auf verzerrten Daten", nl: "AI neemt oneerlijke beslissingen gebaseerd op bevooroordeelde data" },
          { en: "When AI runs too fast", es: "Cuando la IA corre demasiado rapido", de: "Wenn KI zu schnell laeuft", nl: "Wanneer AI te snel werkt" },
          { en: "When AI uses too much electricity", es: "Cuando la IA usa demasiada electricidad", de: "Wenn KI zu viel Strom verbraucht", nl: "Wanneer AI te veel elektriciteit gebruikt" },
          { en: "When AI costs too much money", es: "Cuando la IA cuesta demasiado dinero", de: "Wenn KI zu viel Geld kostet", nl: "Wanneer AI te veel geld kost" }
        ],
        correct: 0,
        explanation: {
          en: "AI bias occurs when ML systems make unfair decisions, often because they were trained on biased historical data reflecting past prejudices.",
          es: "Sesgo IA ocurre cuando sistemas ML toman decisiones injustas, a menudo por entrenamiento con datos sesgados que reflejan prejuicios.",
          de: "KI-Verzerrung tritt auf wenn ML-Systeme unfaire Entscheidungen treffen, oft durch Training mit verzerrten historischen Daten.",
          nl: "AI-bias ontstaat wanneer ML systemen oneerlijke beslissingen nemen, vaak door training op bevooroordeelde historische data."
        }
      },
      {
        question: {
          en: "What does 'algo transparency' mean in AI ethics?",
          es: "Que significa 'transparencia algoritmica' en la etica de IA?",
          de: "Was bedeutet 'algorithmische Transparenz' in der KI-Ethik?",
          nl: "Wat betekent 'algoritmische transparantie' in AI ethiek?"
        },
        options: [
          { en: "Making AI algorithms invisible", es: "Hacer invisibles los algoritmos de IA", de: "KI-Algorithmen unsichtbar machen", nl: "AI algoritmes onzichtbaar maken" },
          { en: "Understanding how AI decides", es: "Entender y explicar como IA decide", de: "Verstehen und erklaeren wie KI entscheidet", nl: "Begrijpen en uitleggen hoe AI beslist" },
          { en: "Using glass computers", es: "Usar computadoras de vidrio", de: "Glascomputer verwenden", nl: "Glazen computers gebruiken" },
          { en: "Making AI code public", es: "Hacer publico el codigo de IA", de: "KI-Code oeffentlich machen", nl: "AI code openbaar maken" }
        ],
        correct: 1,
        explanation: {
          en: "Algorithmic transparency means AI systems should be explainable, so people can understand how and why decisions were made.",
          es: "Transparencia algoritmica significa que IA debe ser explicable para que personas entiendan como y por que se tomaron decisiones.",
          de: "Algorithmische Transparenz bedeutet dass KI-Systeme erklaerbar sein sollten, damit Menschen Entscheidungen verstehen koennen.",
          nl: "Algoritmische transparantie betekent dat AI uitlegbaar moet zijn zodat mensen beslissingen kunnen begrijpen."
        }
      },
      {
        question: {
          en: "What is the main concern about AI replacing human jobs?",
          es: "Cual es la principal preocupacion sobre la IA reemplazando trabajos humanos?",
          de: "Was ist die Hauptsorge bezueglich KI, die menschliche Arbeitsplaetze ersetzt?",
          nl: "Wat is de hoofdzorg over AI die menselijke banen vervangt?"
        },
        options: [
          { en: "AI will become too expensive", es: "La IA se volvera demasiado cara", de: "KI wird zu teuer werden", nl: "AI wordt te duur" },
          { en: "Job loss & rising inequality", es: "Perdida de empleos y aumento de desigualdad economica", de: "Arbeitsplatzverlust und zunehmende Ungleichheit", nl: "Banenverlies en toenemende economische ongelijkheid" },
          { en: "AI will run out of electricity", es: "La IA se quedara sin electricidad", de: "KI wird keinen Strom mehr haben", nl: "AI raakt zonder stroom" },
          { en: "Robots will take up too much space", es: "Los robots ocuparan demasiado espacio", de: "Roboter werden zu viel Platz einnehmen", nl: "Robots nemen te veel ruimte in" }
        ],
        correct: 1,
        explanation: {
          en: "Widespread AI automation could cause mass unemployment, affecting people's livelihoods and potentially increasing social and economic inequality.",
          es: "La automatizacion IA generalizada podria causar desempleo masivo, afectando sustento de personas y aumentando desigualdad social y economica.",
          de: "Weit verbreitete KI-Automatisierung koennte Massenarbeitslosigkeit verursachen, Lebensunterhalt beeintraechtigen und soziale und wirtschaftliche Ungleichheit erhoehen.",
          nl: "Wijdverspreide AI automatisering kan massale werkloosheid veroorzaken, levensonderhoud aantasten en sociale en economische ongelijkheid vergroten."
        }
      },
      {
        question: {
          en: "What does 'AI accountability' mean?",
          es: "Que significa 'responsabilidad de IA'?",
          de: "Was bedeutet 'KI-Verantwortlichkeit'?",
          nl: "Wat betekent 'AI verantwoordelijkheid'?"
        },
        options: [
          { en: "AI systems should count numbers accurately", es: "Los sistemas de IA deben contar numeros con precision", de: "KI-Systeme sollten Zahlen genau zaehlen", nl: "AI systemen moeten nummers nauwkeurig tellen" },
          { en: "Assign responsibility when AI causes harm", es: "Asignar responsabilidad cuando IA causa dano", de: "Verantwortung zuweisen wenn KI Schaden verursacht", nl: "Verantwoordelijkheid toewijzen als AI schade veroorzaakt" },
          { en: "AI should keep financial records", es: "La IA debe mantener registros financieros", de: "KI sollte Finanzaufzeichnungen fuehren", nl: "AI moet financiele administratie bijhouden" },
          { en: "AI must pay taxes", es: "La IA debe pagar impuestos", de: "KI muss Steuern zahlen", nl: "AI moet belasting betalen" }
        ],
        correct: 1,
        explanation: {
          en: "AI accountability means establishing clear responsibility for AI decisions, ensuring humans remain accountable for AI system outcomes.",
          es: "Responsabilidad IA significa establecer responsabilidad clara por decisiones IA, asegurando que humanos sean responsables por resultados.",
          de: "KI-Verantwortlichkeit bedeutet klare Verantwortung fuer KI-Entscheidungen etablieren und sicherstellen dass Menschen verantwortlich bleiben.",
          nl: "AI verantwoordelijkheid betekent duidelijke verantwoordelijkheid voor AI beslissingen en mensen blijven verantwoordelijk voor uitkomsten."
        }
      },
      {
        question: {
          en: "What is a key principle of ethical AI development?",
          es: "Cual es un principio clave del desarrollo etico de IA?",
          de: "Was ist ein Schluesselprinzip ethischer KI-Entwicklung?",
          nl: "Wat is een kernprincipe van ethische AI ontwikkeling?"
        },
        options: [
          { en: "AI should be as fast as possible", es: "La IA debe ser lo mas rapida posible", de: "KI sollte so schnell wie moeglich sein", nl: "AI moet zo snel mogelijk zijn" },
          { en: "Benefit humanity, minimize harm", es: "Beneficiar humanidad mientras minimiza dano", de: "Menschheit nutzen waehrend Schaden minimiert", nl: "Mensheid helpen terwijl schade geminimaliseerd" },
          { en: "AI should make maximum profit", es: "La IA debe generar maximas ganancias", de: "KI sollte maximalen Gewinn erzielen", nl: "AI moet maximale winst maken" },
          { en: "AI should replace all human workers", es: "La IA debe reemplazar a todos los trabajadores humanos", de: "KI sollte alle menschlichen Arbeiter ersetzen", nl: "AI moet alle menselijke werknemers vervangen" }
        ],
        correct: 1,
        explanation: {
          en: "Ethical AI develops systems that benefit humanity while actively preventing or minimizing potential harms and negative consequences.",
          es: "IA etica desarrolla sistemas que benefician humanidad mientras previene o minimiza posibles danos y consecuencias negativas.",
          de: "Ethische KI entwickelt Systeme die Menschheit nutzen waehrend potentielle Schaeden und negative Konsequenzen verhindert werden.",
          nl: "Ethische AI ontwikkelt systemen die mensheid helpen terwijl potentiele schade en negatieve gevolgen voorkomen worden."
        }
      },
      {
        question: {
          en: "What does 'machine learning ethics' primarily focus on?",
          es: "En que se enfoca principalmente la 'etica del aprendizaje automatico'?",
          de: "Worauf konzentriert sich 'Machine Learning Ethik' hauptsaechlich?",
          nl: "Waar richt 'machine learning ethiek' zich hoofdzakelijk op?"
        },
        options: [
          { en: "Fair, safe & beneficial AI", es: "Asegurar que IA sea justa, segura y beneficiosa", de: "Sicherstellen dass KI fair, sicher und vorteilhaft ist", nl: "Zorgen dat AI eerlijk, veilig en voordelig is" },
          { en: "Making AI run faster", es: "Hacer que la IA funcione mas rapido", de: "KI schneller laufen lassen", nl: "AI sneller laten werken" },
          { en: "Reducing computer costs", es: "Reducir costos de computadora", de: "Computerkosten reduzieren", nl: "Computerkosten verlagen" },
          { en: "Teaching machines to think like humans", es: "Ensenar a las maquinas a pensar como humanos", de: "Maschinen beibringen wie Menschen zu denken", nl: "Machines leren denken zoals mensen" }
        ],
        correct: 0,
        explanation: {
          en: "ML ethics ensures AI systems are fair, safe, transparent, and beneficial to society while minimizing potential harms.",
          es: "Etica ML asegura que sistemas IA sean justos, seguros, transparentes y beneficiosos para sociedad minimizando danos.",
          de: "ML-Ethik stellt sicher dass KI-Systeme fair, sicher, transparent und gesellschaftlich vorteilhaft sind waehrend Schaeden minimiert werden.",
          nl: "ML ethiek zorgt dat AI systemen eerlijk, veilig, transparant en voordelig zijn voor samenleving terwijl schade geminimaliseerd."
        }
      },
      {
        question: {
          en: "What is a potential ethical issue with AI recommendation systems?",
          es: "Cual es un problema etico potencial con sistemas de recomendacion de IA?",
          de: "Was ist ein potentielles ethisches Problem mit KI-Empfehlungssystemen?",
          nl: "Wat is een mogelijk ethisch probleem met AI aanbevelingssystemen?"
        },
        options: [
          { en: "They use too much internet bandwidth", es: "Usan demasiado ancho de banda de internet", de: "Sie verbrauchen zu viel Internet-Bandbreite", nl: "Ze gebruiken te veel internetbandbreedte" },
          { en: "Create filter bubbles & reinforce beliefs", es: "Crear burbujas filtro y reforzar creencias", de: "Filterblasen schaffen und Ueberzeugungen verstaerken", nl: "Filterbubbles creeren en overtuigingen versterken" },
          { en: "They are too slow to load", es: "Son demasiado lentos para cargar", de: "Sie laden zu langsam", nl: "Ze laden te langzaam" },
          { en: "They require too many clicks", es: "Requieren demasiados clics", de: "Sie erfordern zu viele Klicks", nl: "Ze vereisen te veel klikken" }
        ],
        correct: 1,
        explanation: {
          en: "AI recommendation systems can create filter bubbles showing only similar content, limiting exposure to diverse viewpoints and reinforcing existing biases.",
          es: "Sistemas recomendacion IA pueden crear burbujas filtro mostrando solo contenido similar, limitando exposicion a puntos vista diversos y reforzando sesgos.",
          de: "KI-Empfehlungssysteme koennen Filterblasen schaffen durch Zeigen aehnlicher Inhalte, begrenzen Exposition zu diversen Standpunkten und verstaerken Verzerrungen.",
          nl: "AI aanbevelingssystemen kunnen filterbubbles creeren door alleen vergelijkbare content, beperken blootstelling aan diverse standpunten en versterken vooroordelen."
        }
      },
      {
        question: {
          en: "What does 'human-centered AI' mean?",
          es: "Que significa 'IA centrada en el humano'?",
          de: "Was bedeutet 'menschenzentrierte KI'?",
          nl: "Wat betekent 'mensgerichte AI'?"
        },
        options: [
          { en: "AI that looks like humans", es: "IA que parece humanos", de: "KI die wie Menschen aussieht", nl: "AI die eruitziet als mensen" },
          { en: "Augment & empower humans, not replace", es: "IA para aumentar y empoderar humanos, no reemplazar", de: "KI um Menschen zu befaehigen, nicht ersetzen", nl: "AI om mensen te versterken, niet vervangen" },
          { en: "AI that only works in human buildings", es: "IA que solo funciona en edificios humanos", de: "KI die nur in menschlichen Gebaeuden funktioniert", nl: "AI die alleen werkt in menselijke gebouwen" },
          { en: "AI controlled by human voices only", es: "IA controlada solo por voces humanas", de: "KI die nur durch menschliche Stimmen kontrolliert wird", nl: "AI die alleen door menselijke stemmen gecontroleerd wordt" }
        ],
        correct: 1,
        explanation: {
          en: "Human-centered AI prioritizes human values and well-being, focusing on augmenting human capabilities and serving humanity's best interests.",
          es: "IA centrada en humano prioriza valores y bienestar humanos, enfocandose en aumentar capacidades y servir mejores intereses humanidad.",
          de: "Menschenzentrierte KI priorisiert menschliche Werte und Wohlbefinden, fokussiert auf Erweiterung Faehigkeiten und Dienst an Menschheit.",
          nl: "Mensgerichte AI geeft prioriteit aan menselijke waarden en welzijn, richt zich op versterken capaciteiten en dient beste belangen mensheid."
        }
      },
      {
        question: {
          en: "What is an important consideration when AI is used in hiring processes?",
          es: "Cual es una consideracion importante cuando se usa IA en procesos de contratacion?",
          de: "Was ist eine wichtige Ueberlegung wenn KI in Einstellungsprozessen verwendet wird?",
          nl: "Wat is een belangrijke overweging wanneer AI gebruikt wordt in aanwervingsprocessen?"
        },
        options: [
          { en: "No discrimination vs protected groups", es: "IA no discrimine contra grupos protegidos", de: "KI nicht gegen geschuetzte Gruppen diskriminiert", nl: "AI niet discrimineert tegen beschermde groepen" },
          { en: "Making sure AI works 24/7", es: "Asegurar que la IA funcione 24/7", de: "Sicherstellen dass KI 24/7 funktioniert", nl: "Ervoor zorgen dat AI 24/7 werkt" },
          { en: "Using the cheapest AI system available", es: "Usar el sistema de IA mas barato disponible", de: "Das guenstigste verfuegbare KI-System verwenden", nl: "Het goedkoopste beschikbare AI systeem gebruiken" },
          { en: "Processing applications as quickly as possible", es: "Procesar aplicaciones lo mas rapido posible", de: "Bewerbungen so schnell wie moeglich bearbeiten", nl: "Aanvragen zo snel mogelijk verwerken" }
        ],
        correct: 0,
        explanation: {
          en: "When AI is used in hiring, it's crucial to ensure the system doesn't perpetuate bias or discrimination against protected groups like race, gender, age, or disability status.",
          es: "Cuando se usa IA en contratacion, es crucial asegurar que el sistema no perpetue sesgo o discriminacion contra grupos protegidos como raza, genero, edad o estado de discapacidad.",
          de: "Wenn KI bei der Einstellung verwendet wird ist es entscheidend sicherzustellen dass das System keine Verzerrung oder Diskriminierung gegen geschuetzte Gruppen wie Rasse, Geschlecht, Alter oder Behinderungsstatus fortsetzt.",
          nl: "Wanneer AI gebruikt wordt bij aanwerving is het cruciaal ervoor te zorgen dat het systeem geen vooroordelen of discriminatie bestendigt tegen beschermde groepen zoals ras, geslacht, leeftijd of handicapstatus."
        }
      },
      {
        question: {
          en: "What does 'ethical AI governance' involve?",
          es: "Que involucra la 'gobernanza etica de IA'?",
          de: "Was beinhaltet 'ethische KI-Governance'?",
          nl: "Wat houdt 'ethische AI governance' in?"
        },
        options: [
          { en: "Rules & oversight for responsible AI", es: "Reglas y supervision para desarrollo responsable IA", de: "Regeln und Aufsicht fuer verantwortliche KI", nl: "Regels en toezicht voor verantwoordelijke AI" },
          { en: "Making AI systems run government websites", es: "Hacer que sistemas de IA ejecuten sitios web gubernamentales", de: "KI-Systeme Regierungs-Websites betreiben lassen", nl: "AI systemen overheidswebsites laten beheren" },
          { en: "Teaching AI about politics", es: "Ensenar a la IA sobre politica", de: "KI ueber Politik unterrichten", nl: "AI leren over politiek" },
          { en: "Using AI only in government offices", es: "Usar IA solo en oficinas gubernamentales", de: "KI nur in Regierungsbueros verwenden", nl: "AI alleen gebruiken in overheidskantoren" }
        ],
        correct: 0,
        explanation: {
          en: "Ethical AI governance involves establishing frameworks, policies, and oversight mechanisms to ensure AI is developed and deployed responsibly with appropriate safeguards and accountability measures.",
          es: "La gobernanza etica de IA involucra establecer marcos, politicas y mecanismos de supervision para asegurar que la IA se desarrolle e implemente responsablemente con salvaguardas apropiadas y medidas de responsabilidad.",
          de: "Ethische KI-Governance beinhaltet die Einrichtung von Rahmenwerken, Richtlinien und Aufsichtsmechanismen um sicherzustellen dass KI verantwortlich entwickelt und eingesetzt wird mit angemessenen Sicherheitsvorkehrungen und Verantwortlichkeitsmassnahmen.",
          nl: "Ethische AI governance houdt het vaststellen van frameworks, beleid en toezichtmechanismen in om ervoor te zorgen dat AI verantwoordelijk ontwikkeld en ingezet wordt met juiste waarborgen en verantwoordingsmaatregelen."
        }
      },
      {
        question: {
          en: "What is the main concern about deepfake technology?",
          es: "Cual es la principal preocupacion sobre la tecnologia deepfake?",
          de: "Was ist die Hauptsorge bezueglich Deepfake-Technologie?",
          nl: "Wat is de hoofdzorg over deepfake technologie?"
        },
        options: [
          { en: "It uses too much computer processing power", es: "Usa demasiado poder de procesamiento de computadora", de: "Es verbraucht zu viel Computerrechenleistung", nl: "Het gebruikt te veel computerverwerkingskracht" },
          { en: "Spread misinfo & undermine trust", es: "Difundir desinformacion y socavar confianza", de: "Fehlinformationen verbreiten und Vertrauen untergraben", nl: "Verkeerde info verspreiden en vertrouwen ondermijnen" },
          { en: "It only works on expensive equipment", es: "Solo funciona en equipos caros", de: "Es funktioniert nur auf teurer Ausruestung", nl: "Het werkt alleen op dure apparatuur" },
          { en: "It makes videos look blurry", es: "Hace que los videos se vean borrosos", de: "Es macht Videos unscharf", nl: "Het maakt video's wazig" }
        ],
        correct: 1,
        explanation: {
          en: "Deepfakes can create convincing fake videos or audio that can be used to spread false information, manipulate public opinion, or damage someone's reputation, threatening truth and trust in media.",
          es: "Los deepfakes pueden crear videos o audio falsos convincentes que pueden usarse para difundir informacion falsa, manipular opinion publica o danar la reputacion de alguien, amenazando la verdad y confianza en los medios.",
          de: "Deepfakes koennen ueberzeugende gefaelschte Videos oder Audio erstellen die verwendet werden koennen um falsche Informationen zu verbreiten, oeffentliche Meinung zu manipulieren oder jemandes Ruf zu schaedigen, was Wahrheit und Vertrauen in Medien bedroht.",
          nl: "Deepfakes kunnen overtuigende nep video's of audio creeren die gebruikt kunnen worden om valse informatie te verspreiden, publieke opinie te manipuleren of iemands reputatie te schaden, wat waarheid en vertrouwen in media bedreigt."
        }
      },
      {
        question: {
          en: "What does 'AI safety' primarily concern itself with?",
          es: "De que se preocupa principalmente la 'seguridad de IA'?",
          de: "Womit beschaeftigt sich 'KI-Sicherheit' hauptsaechlich?",
          nl: "Waar houdt 'AI veiligheid' zich hoofdzakelijk mee bezig?"
        },
        options: [
          { en: "Prevent unintended AI harm", es: "Prevenir dano no intencionado de IA", de: "Unbeabsichtigten KI-Schaden verhindern", nl: "Onbedoelde AI schade voorkomen" },
          { en: "Protecting AI from computer viruses", es: "Proteger IA de virus informaticos", de: "KI vor Computerviren schuetzen", nl: "AI beschermen tegen computervirussen" },
          { en: "Making sure AI servers don't overheat", es: "Asegurar que los servidores de IA no se sobrecalienten", de: "Sicherstellen dass KI-Server nicht ueberhitzen", nl: "Ervoor zorgen dat AI servers niet oververhitten" },
          { en: "Keeping AI software up to date", es: "Mantener actualizado el software de IA", de: "KI-Software auf dem neuesten Stand halten", nl: "AI software up-to-date houden" }
        ],
        correct: 0,
        explanation: {
          en: "AI safety focuses on ensuring AI systems behave as intended and don't cause unintended harmful consequences, especially as AI becomes more powerful and autonomous.",
          es: "La seguridad de IA se enfoca en asegurar que los sistemas de IA se comporten como se pretende y no causen consecuencias daninas no intencionadas, especialmente cuando la IA se vuelve mas poderosa y autonoma.",
          de: "KI-Sicherheit konzentriert sich darauf sicherzustellen dass KI-Systeme sich wie beabsichtigt verhalten und keine unbeabsichtigten schaedlichen Konsequenzen verursachen, besonders wenn KI maechtigere und autonomer wird.",
          nl: "AI veiligheid richt zich op het waarborgen dat AI systemen zich gedragen zoals bedoeld en geen onbedoelde schadelijke gevolgen veroorzaken, vooral naarmate AI krachtiger en autonomer wordt."
        }
      },
      {
        question: {
          en: "What is important about data diversity in AI training?",
          es: "Que es importante sobre la diversidad de datos en entrenamiento de IA?",
          de: "Was ist wichtig an Datenvielfalt beim KI-Training?",
          nl: "Wat is belangrijk aan data diversiteit bij AI training?"
        },
        options: [
          { en: "Ensure AI works fairly for all groups", es: "Asegurar que IA funcione justamente para todos", de: "Sicherstellen dass KI fair fuer alle funktioniert", nl: "Zorgen dat AI eerlijk werkt voor alle groepen" },
          { en: "It makes AI training take longer", es: "Hace que el entrenamiento de IA tome mas tiempo", de: "Es laesst KI-Training laenger dauern", nl: "Het zorgt ervoor dat AI training langer duurt" },
          { en: "It requires more storage space", es: "Requiere mas espacio de almacenamiento", de: "Es erfordert mehr Speicherplatz", nl: "Het vereist meer opslagruimte" },
          { en: "It makes the AI system more expensive", es: "Hace que el sistema de IA sea mas caro", de: "Es macht das KI-System teurer", nl: "Het maakt het AI systeem duurder" }
        ],
        correct: 0,
        explanation: {
          en: "Diverse training data helps ensure AI systems can perform fairly and accurately across different demographics, cultures, and contexts, reducing bias and improving inclusivity.",
          es: "Los datos de entrenamiento diversos ayudan a asegurar que los sistemas de IA puedan funcionar justa y precisamente en diferentes demografias, culturas y contextos, reduciendo sesgo y mejorando inclusividad.",
          de: "Diverse Trainingsdaten helfen sicherzustellen dass KI-Systeme fair und genau bei verschiedenen Demografien, Kulturen und Kontexten funktionieren koennen, was Verzerrung reduziert und Inklusivitaet verbessert.",
          nl: "Diverse trainingsdata helpt ervoor te zorgen dat AI systemen eerlijk en nauwkeurig kunnen presteren voor verschillende demografieën, culturen en contexten, wat vooroordelen vermindert en inclusiviteit verbetert."
        }
      },
      {
        question: {
          en: "What does 'algorithmic justice' aim to achieve?",
          es: "Que busca lograr la 'justicia algoritmica'?",
          de: "Was zielt 'algorithmische Gerechtigkeit' darauf ab zu erreichen?",
          nl: "Wat beoogt 'algoritmische rechtvaardigheid' te bereiken?"
        },
        options: [
          { en: "Fair & equitable AI outcomes", es: "Resultados justos y equitativos de IA", de: "Faire und gerechte KI-Ergebnisse", nl: "Eerlijke en rechtvaardige AI uitkomsten" },
          { en: "Making algorithms solve legal cases", es: "Hacer que algoritmos resuelvan casos legales", de: "Algorithmen Rechtsfaelle loesen lassen", nl: "Algoritmes juridische zaken laten oplossen" },
          { en: "Teaching AI about court procedures", es: "Ensenar a la IA sobre procedimientos judiciales", de: "KI ueber Gerichtsverfahren unterrichten", nl: "AI leren over gerechtelijke procedures" },
          { en: "Using AI only in justice systems", es: "Usar IA solo en sistemas de justicia", de: "KI nur in Justizsystemen verwenden", nl: "AI alleen gebruiken in rechtssystemen" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic justice seeks to ensure that AI and automated decision-making systems produce fair, unbiased outcomes that don't perpetuate or amplify existing social inequalities.",
          es: "La justicia algoritmica busca asegurar que la IA y sistemas automatizados de toma de decisiones produzcan resultados justos e imparciales que no perpetuen o amplifiquen desigualdades sociales existentes.",
          de: "Algorithmische Gerechtigkeit strebt danach sicherzustellen dass KI und automatisierte Entscheidungssysteme faire, unvoreingenommene Ergebnisse produzieren die bestehende soziale Ungleichheiten nicht fortsetzen oder verstaerken.",
          nl: "Algoritmische rechtvaardigheid streeft ernaar ervoor te zorgen dat AI en geautomatiseerde besluitvormingssystemen eerlijke, onbevooroordeelde uitkomsten produceren die bestaande sociale ongelijkheden niet bestendigen of versterken."
        }
      },
      {
        question: {
          en: "Why is it important to consider the environmental impact of AI?",
          es: "Por que es importante considerar el impacto ambiental de la IA?",
          de: "Warum ist es wichtig die Umweltauswirkungen von KI zu betrachten?",
          nl: "Waarom is het belangrijk om de milieu-impact van AI te overwegen?"
        },
        options: [
          { en: "Training & deployment use significant energy", es: "Entrenamiento e implementacion consumen mucha energia", de: "Training und Einsatz verbrauchen viel Energie", nl: "Training en inzet verbruiken veel energie" },
          { en: "AI systems are always bad for the environment", es: "Los sistemas de IA siempre son malos para el medio ambiente", de: "KI-Systeme sind immer schlecht fuer die Umwelt", nl: "AI systemen zijn altijd slecht voor het milieu" },
          { en: "AI only works in air-conditioned rooms", es: "La IA solo funciona en habitaciones con aire acondicionado", de: "KI funktioniert nur in klimatisierten Raeumen", nl: "AI werkt alleen in geklimatiseerde ruimtes" },
          { en: "Environmental laws prohibit AI use", es: "Las leyes ambientales prohiben el uso de IA", de: "Umweltgesetze verbieten KI-Nutzung", nl: "Milieuwetten verbieden AI gebruik" }
        ],
        correct: 0,
        explanation: {
          en: "Training large AI models requires substantial computational resources and energy, contributing to carbon emissions. Sustainable AI development considers environmental impact and seeks energy-efficient approaches.",
          es: "Entrenar modelos grandes de IA requiere recursos computacionales y energia sustanciales, contribuyendo a emisiones de carbono. El desarrollo sostenible de IA considera impacto ambiental y busca enfoques energeticamente eficientes.",
          de: "Das Training grosser KI-Modelle erfordert erhebliche Rechenressourcen und Energie, was zu Kohlenstoffemissionen beitraegt. Nachhaltige KI-Entwicklung betrachtet Umweltauswirkungen und sucht energieeffiziente Ansaetze.",
          nl: "Het trainen van grote AI modellen vereist aanzienlijke computationele middelen en energie, wat bijdraagt aan koolstofemissies. Duurzame AI ontwikkeling overweegt milieu-impact en zoekt energie-efficiënte benaderingen."
        }
      },
      {
        question: {
          en: "What is 'AI literacy' and why is it important?",
          es: "Que es la 'alfabetizacion en IA' y por que es importante?",
          de: "Was ist 'KI-Alphabetisierung' und warum ist sie wichtig?",
          nl: "Wat is 'AI geletterdheid' en waarom is het belangrijk?"
        },
        options: [
          { en: "Understanding AI to make informed decisions", es: "Entender IA para tomar decisiones informadas", de: "KI verstehen um informierte Entscheidungen treffen", nl: "AI begrijpen om geïnformeerde beslissingen te nemen" },
          { en: "Teaching AI systems to read and write", es: "Ensenar a sistemas de IA a leer y escribir", de: "KI-Systemen beibringen zu lesen und zu schreiben", nl: "AI systemen leren lezen en schrijven" },
          { en: "Using AI only by people with computer science degrees", es: "Usar IA solo por personas con titulos en ciencias de la computacion", de: "KI nur von Personen mit Informatikabschluessen verwenden", nl: "AI alleen gebruiken door mensen met informaticadiploma's" },
          { en: "Reading books about AI technology", es: "Leer libros sobre tecnologia de IA", de: "Buecher ueber KI-Technologie lesen", nl: "Boeken lezen over AI technologie" }
        ],
        correct: 0,
        explanation: {
          en: "AI literacy means having the knowledge and skills to understand AI capabilities, limitations, and implications, enabling people to engage thoughtfully with AI technologies in their personal and professional lives.",
          es: "La alfabetizacion en IA significa tener el conocimiento y habilidades para entender capacidades, limitaciones e implicaciones de IA, permitiendo a las personas involucrarse reflexivamente con tecnologias de IA en sus vidas personales y profesionales.",
          de: "KI-Alphabetisierung bedeutet das Wissen und die Faehigkeiten zu haben um KI-Faehigkeiten, Einschraenkungen und Auswirkungen zu verstehen, was Menschen ermoeglicht sich durchdacht mit KI-Technologien in ihrem persoenlichen und beruflichen Leben zu beschaeftigen.",
          nl: "AI geletterdheid betekent de kennis en vaardigheden hebben om AI capaciteiten, beperkingen en implicaties te begrijpen, waardoor mensen weloverwogen kunnen omgaan met AI technologieën in hun persoonlijke en professionele leven."
        }
      },
      {
        question: {
          en: "What is the significance of 'consent' in AI data use?",
          es: "Cual es la importancia del 'consentimiento' en el uso de datos de IA?",
          de: "Was ist die Bedeutung von 'Einwilligung' bei der KI-Datennutzung?",
          nl: "Wat is het belang van 'toestemming' bij AI data gebruik?"
        },
        options: [
          { en: "Control over personal data use", es: "Control sobre uso de datos personales", de: "Kontrolle ueber persoenliche Datennutzung", nl: "Controle over gebruik persoonlijke data" },
          { en: "AI systems should agree with each other", es: "Los sistemas de IA deberian estar de acuerdo entre si", de: "KI-Systeme sollten miteinander uebereinstimmen", nl: "AI systemen zouden het met elkaar eens moeten zijn" },
          { en: "All data should be public by default", es: "Todos los datos deberian ser publicos por defecto", de: "Alle Daten sollten standardmaessig oeffentlich sein", nl: "Alle data zou standaard openbaar moeten zijn" },
          { en: "Consent is only needed for government data", es: "El consentimiento solo se necesita para datos gubernamentales", de: "Einwilligung wird nur fuer Regierungsdaten benoetigt", nl: "Toestemming is alleen nodig voor overheidsdata" }
        ],
        correct: 0,
        explanation: {
          en: "Consent ensures individuals have autonomy over their personal information and can make informed decisions about how their data is collected, used, and shared by AI systems.",
          es: "El consentimiento asegura que los individuos tengan autonomia sobre su informacion personal y puedan tomar decisiones informadas sobre como sus datos son recolectados, usados y compartidos por sistemas de IA.",
          de: "Einwilligung stellt sicher dass Individuen Autonomie ueber ihre persoenlichen Informationen haben und informierte Entscheidungen darueber treffen koennen wie ihre Daten von KI-Systemen gesammelt, verwendet und geteilt werden.",
          nl: "Toestemming zorgt ervoor dat individuen autonomie hebben over hun persoonlijke informatie en geïnformeerde beslissingen kunnen nemen over hoe hun data verzameld, gebruikt en gedeeld wordt door AI systemen."
        }
      },
      {
        question: {
          en: "What makes AI decision-making 'interpretable'?",
          es: "Que hace que la toma de decisiones de IA sea 'interpretable'?",
          de: "Was macht KI-Entscheidungsfindung 'interpretierbar'?",
          nl: "Wat maakt AI besluitvorming 'interpreteerbaar'?"
        },
        options: [
          { en: "Understanding AI reasoning", es: "Entender razonamiento detras de decisiones IA", de: "Begruendung hinter KI-Entscheidungen verstehen", nl: "Redenering achter AI beslissingen begrijpen" },
          { en: "When AI speaks multiple languages", es: "Cuando la IA habla multiples idiomas", de: "Wenn KI mehrere Sprachen spricht", nl: "Wanneer AI meerdere talen spreekt" },
          { en: "When AI decisions are translated to different languages", es: "Cuando las decisiones de IA se traducen a diferentes idiomas", de: "Wenn KI-Entscheidungen in verschiedene Sprachen uebersetzt werden", nl: "Wanneer AI beslissingen vertaald worden naar verschillende talen" },
          { en: "When AI uses simple mathematics only", es: "Cuando la IA usa solo matematicas simples", de: "Wenn KI nur einfache Mathematik verwendet", nl: "Wanneer AI alleen eenvoudige wiskunde gebruikt" }
        ],
        correct: 0,
        explanation: {
          en: "Interpretable AI means the decision-making process can be understood and explained in human terms, allowing people to comprehend why specific decisions were made and build appropriate trust.",
          es: "IA interpretable significa que el proceso de toma de decisiones puede ser entendido y explicado en terminos humanos, permitiendo a las personas comprender por que se tomaron decisiones especificas y construir confianza apropiada.",
          de: "Interpretierbare KI bedeutet dass der Entscheidungsprozess in menschlichen Begriffen verstanden und erklaert werden kann, was Menschen ermoeglicht zu verstehen warum spezifische Entscheidungen getroffen wurden und angemessenes Vertrauen aufzubauen.",
          nl: "Interpreteerbare AI betekent dat het besluitvormingsproces begrepen en uitgelegd kan worden in menselijke termen, waardoor mensen kunnen begrijpen waarom specifieke beslissingen genomen werden en passend vertrouwen kunnen opbouwen."
        }
      },
      {
        question: {
          en: "Why is diversity important in AI development teams?",
          es: "Por que es importante la diversidad en equipos de desarrollo de IA?",
          de: "Warum ist Vielfalt in KI-Entwicklungsteams wichtig?",
          nl: "Waarom is diversiteit belangrijk in AI ontwikkelingsteams?"
        },
        options: [
          { en: "Diverse perspectives prevent bias", es: "Perspectivas diversas ayudan prevenir sesgo IA", de: "Diverse Perspektiven helfen KI-Verzerrung verhindern", nl: "Diverse perspectieven helpen AI bias voorkomen" },
          { en: "Teams work faster with more people", es: "Los equipos trabajan mas rapido con mas personas", de: "Teams arbeiten schneller mit mehr Personen", nl: "Teams werken sneller met meer mensen" },
          { en: "Diverse teams cost less money", es: "Equipos diversos cuestan menos dinero", de: "Diverse Teams kosten weniger Geld", nl: "Diverse teams kosten minder geld" },
          { en: "AI systems require different programming languages", es: "Los sistemas de IA requieren diferentes lenguajes de programacion", de: "KI-Systeme erfordern verschiedene Programmiersprachen", nl: "AI systemen vereisen verschillende programmeertalen" }
        ],
        correct: 0,
        explanation: {
          en: "Diverse development teams bring varied experiences and perspectives that help identify potential biases, consider different use cases, and create more inclusive and fair AI systems for all users.",
          es: "Equipos de desarrollo diversos aportan experiencias y perspectivas variadas que ayudan a identificar sesgos potenciales, considerar diferentes casos de uso y crear sistemas de IA mas inclusivos y justos para todos los usuarios.",
          de: "Diverse Entwicklungsteams bringen verschiedene Erfahrungen und Perspektiven mit die helfen potentielle Verzerrungen zu identifizieren, verschiedene Anwendungsfaelle zu betrachten und inklusivere und fairere KI-Systeme fuer alle Nutzer zu schaffen.",
          nl: "Diverse ontwikkelingsteams brengen gevarieerde ervaringen en perspectieven mee die helpen potentiele vooroordelen te identificeren, verschillende use cases te overwegen en meer inclusieve en eerlijke AI systemen te creëren voor alle gebruikers."
        }
      },
      {
        question: {
          en: "What does 'responsible AI deployment' mean?",
          es: "Que significa 'implementacion responsable de IA'?",
          de: "Was bedeutet 'verantwortlicher KI-Einsatz'?",
          nl: "Wat betekent 'verantwoordelijke AI inzet'?"
        },
        options: [
          { en: "Test & monitor AI pre & post release", es: "Probar y monitorear IA antes y despues lanzamiento", de: "KI vor und nach Veroeffentlichung testen/ueberwachen", nl: "AI testen en monitoren voor en na uitrol" },
          { en: "Releasing AI as quickly as possible", es: "Lanzar IA lo mas rapido posible", de: "KI so schnell wie moeglich veroeffentlichen", nl: "AI zo snel mogelijk uitbrengen" },
          { en: "Using AI only by trained professionals", es: "Usar IA solo por profesionales entrenados", de: "KI nur von ausgebildeten Fachkraeften verwenden", nl: "AI alleen door getrainde professionals gebruiken" },
          { en: "Making AI systems as complex as possible", es: "Hacer sistemas de IA lo mas complejos posible", de: "KI-Systeme so komplex wie moeglich machen", nl: "AI systemen zo complex mogelijk maken" }
        ],
        correct: 0,
        explanation: {
          en: "Responsible AI deployment involves thorough testing, gradual rollouts, continuous monitoring, and having safeguards in place to identify and address potential issues or unintended consequences.",
          es: "La implementacion responsable de IA involucra pruebas exhaustivas, lanzamientos graduales, monitoreo continuo y tener salvaguardas en su lugar para identificar y abordar problemas potenciales o consecuencias no intencionadas.",
          de: "Verantwortlicher KI-Einsatz beinhaltet gruendliche Tests, schrittweise Einfuehrungen, kontinuierliche Ueberwachung und Sicherheitsvorkehrungen um potentielle Probleme oder unbeabsichtigte Konsequenzen zu identifizieren und anzugehen.",
          nl: "Verantwoordelijke AI inzet houdt grondige tests, geleidelijke uitrol, continue monitoring en waarborgen in om potentiele problemen of onbedoelde gevolgen te identificeren en aan te pakken."
        }
      },
      {
        question: {
          en: "What is privacy in the context of AI?",
          es: "Que es la privacidad en el contexto de la IA?",
          de: "Was ist Privatsphaere im Kontext von KI?",
          nl: "Wat is privacy in de context van AI?"
        },
        options: [
          { en: "Protecting personal info from misuse", es: "Proteger informacion personal de mal uso", de: "Persoenliche Informationen vor Missbrauch schuetzen", nl: "Persoonlijke info beschermen tegen misbruik" },
          { en: "Keeping AI algorithms secret", es: "Mantener secretos los algoritmos de IA", de: "KI-Algorithmen geheim halten", nl: "AI algoritmes geheim houden" },
          { en: "Using AI only in private buildings", es: "Usar IA solo en edificios privados", de: "KI nur in privaten Gebaeuden verwenden", nl: "AI alleen in prive gebouwen gebruiken" },
          { en: "Making AI invisible to users", es: "Hacer IA invisible para usuarios", de: "KI fuer Benutzer unsichtbar machen", nl: "AI onzichtbaar maken voor gebruikers" }
        ],
        correct: 0,
        explanation: {
          en: "Privacy in AI means protecting personal data from unauthorized collection, use, or disclosure, ensuring individuals maintain control over their information.",
          es: "Privacidad en IA significa proteger datos personales de recoleccion, uso o divulgacion no autorizados, asegurando que individuos mantengan control sobre su informacion.",
          de: "Privatsphaere in KI bedeutet persoenliche Daten vor unbefugter Sammlung, Nutzung oder Offenlegung zu schuetzen und sicherzustellen dass Individuen Kontrolle ueber ihre Informationen behalten.",
          nl: "Privacy in AI betekent persoonlijke data beschermen tegen ongeautoriseerde verzameling, gebruik of openbaarmaking, zorgen dat individuen controle behouden over hun informatie."
        }
      },
      {
        question: {
          en: "What is fairness in AI?",
          es: "Que es la equidad en IA?",
          de: "Was ist Fairness in KI?",
          nl: "Wat is eerlijkheid in AI?"
        },
        options: [
          { en: "Treating all groups equally without bias", es: "Tratar todos grupos igualmente sin sesgo", de: "Alle Gruppen gleich ohne Verzerrung behandeln", nl: "Alle groepen gelijk behandelen zonder vooroordeel" },
          { en: "Giving everyone the same AI hardware", es: "Dar a todos el mismo hardware de IA", de: "Allen die gleiche KI-Hardware geben", nl: "Iedereen dezelfde AI hardware geven" },
          { en: "AI systems that cost the same price", es: "Sistemas IA que cuestan el mismo precio", de: "KI-Systeme die gleich viel kosten", nl: "AI systemen die dezelfde prijs kosten" },
          { en: "Making sure all AI runs at same speed", es: "Asegurar que toda IA funcione a misma velocidad", de: "Sicherstellen dass alle KI gleich schnell laeuft", nl: "Ervoor zorgen dat alle AI met dezelfde snelheid werkt" }
        ],
        correct: 0,
        explanation: {
          en: "Fairness in AI means systems should treat all individuals and groups equitably, without discrimination based on sensitive attributes like race, gender, or age.",
          es: "Equidad en IA significa que sistemas deben tratar todos individuos y grupos equitativamente, sin discriminacion basada en atributos sensibles como raza, genero o edad.",
          de: "Fairness in KI bedeutet dass Systeme alle Individuen und Gruppen gerecht behandeln sollten, ohne Diskriminierung basierend auf sensiblen Attributen wie Rasse, Geschlecht oder Alter.",
          nl: "Eerlijkheid in AI betekent dat systemen alle individuen en groepen rechtvaardig moeten behandelen, zonder discriminatie op basis van gevoelige kenmerken zoals ras, geslacht of leeftijd."
        }
      },
      {
        question: {
          en: "What is explainability in AI?",
          es: "Que es la explicabilidad en IA?",
          de: "Was ist Erklaerbarkeit in KI?",
          nl: "Wat is verklaarbaarheid in AI?"
        },
        options: [
          { en: "Ability to explain how AI reached decisions", es: "Capacidad de explicar como IA llego a decisiones", de: "Faehigkeit zu erklaeren wie KI Entscheidungen traf", nl: "Vermogen om uit te leggen hoe AI beslissingen nam" },
          { en: "AI that can speak clearly", es: "IA que puede hablar claramente", de: "KI die klar sprechen kann", nl: "AI die duidelijk kan spreken" },
          { en: "Writing documentation for AI code", es: "Escribir documentacion para codigo IA", de: "Dokumentation fuer KI-Code schreiben", nl: "Documentatie schrijven voor AI code" },
          { en: "Teaching AI to explain things to users", es: "Ensenar a IA explicar cosas a usuarios", de: "KI beibringen Dinge Benutzern zu erklaeren", nl: "AI leren dingen uit te leggen aan gebruikers" }
        ],
        correct: 0,
        explanation: {
          en: "Explainability means being able to understand and describe in human terms how an AI system arrived at a particular decision or prediction.",
          es: "Explicabilidad significa poder entender y describir en terminos humanos como un sistema IA llego a una decision o prediccion particular.",
          de: "Erklaerbarkeit bedeutet in menschlichen Begriffen verstehen und beschreiben zu koennen wie ein KI-System zu einer bestimmten Entscheidung oder Vorhersage kam.",
          nl: "Verklaarbaarheid betekent kunnen begrijpen en beschrijven in menselijke termen hoe een AI systeem tot een bepaalde beslissing of voorspelling kwam."
        }
      },
      {
        question: {
          en: "What is a concern with AI in criminal justice?",
          es: "Cual es una preocupacion con IA en justicia penal?",
          de: "Was ist eine Sorge bei KI in Strafjustiz?",
          nl: "Wat is een zorg met AI in strafrecht?"
        },
        options: [
          { en: "Bias may unfairly impact sentencing", es: "Sesgo puede impactar injustamente sentencias", de: "Verzerrung kann Strafmass unfair beeinflussen", nl: "Vooroordeel kan straffen oneerlijk beïnvloeden" },
          { en: "AI is too expensive for courts", es: "IA es demasiado cara para tribunales", de: "KI ist zu teuer fuer Gerichte", nl: "AI is te duur voor rechtbanken" },
          { en: "Criminals can hack AI systems", es: "Criminales pueden hackear sistemas IA", de: "Kriminelle koennen KI-Systeme hacken", nl: "Criminelen kunnen AI systemen hacken" },
          { en: "AI makes court proceedings too fast", es: "IA hace procedimientos judiciales demasiado rapidos", de: "KI macht Gerichtsverfahren zu schnell", nl: "AI maakt rechtszaken te snel" }
        ],
        correct: 0,
        explanation: {
          en: "AI used in criminal justice (like risk assessment tools) can perpetuate historical biases, potentially leading to unfair treatment of certain demographic groups.",
          es: "IA usada en justicia penal (como herramientas evaluacion riesgo) puede perpetuar sesgos historicos, potencialmente llevando a trato injusto de ciertos grupos demograficos.",
          de: "KI in Strafjustiz (wie Risikobewertungstools) kann historische Verzerrungen fortsetzen, was potentiell zu unfairer Behandlung bestimmter demografischer Gruppen fuehrt.",
          nl: "AI gebruikt in strafrecht (zoals risico beoordelingstools) kan historische vooroordelen bestendigen, mogelijk leidend tot oneerlijke behandeling van bepaalde demografische groepen."
        }
      },
      {
        question: {
          en: "Why should AI systems have human oversight?",
          es: "Por que sistemas IA deberian tener supervision humana?",
          de: "Warum sollten KI-Systeme menschliche Aufsicht haben?",
          nl: "Waarom moeten AI systemen menselijk toezicht hebben?"
        },
        options: [
          { en: "Prevent errors & ensure accountability", es: "Prevenir errores y asegurar responsabilidad", de: "Fehler verhindern und Verantwortlichkeit sichern", nl: "Fouten voorkomen en verantwoording waarborgen" },
          { en: "Humans work slower than AI", es: "Humanos trabajan mas lento que IA", de: "Menschen arbeiten langsamer als KI", nl: "Mensen werken langzamer dan AI" },
          { en: "AI needs constant supervision to function", es: "IA necesita supervision constante para funcionar", de: "KI braucht staendige Aufsicht um zu funktionieren", nl: "AI heeft constant toezicht nodig om te werken" },
          { en: "Humans understand technology better than AI", es: "Humanos entienden tecnologia mejor que IA", de: "Menschen verstehen Technologie besser als KI", nl: "Mensen begrijpen technologie beter dan AI" }
        ],
        correct: 0,
        explanation: {
          en: "Human oversight helps catch AI errors, ensures decisions align with ethical values, and maintains accountability, especially for high-stakes decisions affecting people's lives.",
          es: "Supervision humana ayuda detectar errores IA, asegura decisiones alineen con valores eticos y mantiene responsabilidad, especialmente para decisiones importantes que afectan vidas.",
          de: "Menschliche Aufsicht hilft KI-Fehler zu erkennen, stellt sicher dass Entscheidungen mit ethischen Werten uebereinstimmen und erhaelt Verantwortlichkeit, besonders fuer wichtige Entscheidungen die Leben beeinflussen.",
          nl: "Menselijk toezicht helpt AI fouten opvangen, zorgt dat beslissingen aansluiten bij ethische waarden en handhaaft verantwoording, vooral voor belangrijke beslissingen die levens beïnvloeden."
        }
      },
      {
        question: {
          en: "What is informed consent in AI?",
          es: "Que es el consentimiento informado en IA?",
          de: "Was ist informierte Einwilligung in KI?",
          nl: "Wat is geïnformeerde toestemming in AI?"
        },
        options: [
          { en: "Users understand data use before agreeing", es: "Usuarios entienden uso datos antes de aceptar", de: "Benutzer verstehen Datennutzung vor Zustimmung", nl: "Gebruikers begrijpen data gebruik voor akkoord" },
          { en: "AI systems inform each other automatically", es: "Sistemas IA se informan automaticamente", de: "KI-Systeme informieren sich automatisch", nl: "AI systemen informeren elkaar automatisch" },
          { en: "Consent forms must be digital", es: "Formularios consentimiento deben ser digitales", de: "Einwilligungsformulare muessen digital sein", nl: "Toestemmingsformulieren moeten digitaal zijn" },
          { en: "Only experts can give consent for AI use", es: "Solo expertos pueden dar consentimiento para uso IA", de: "Nur Experten koennen Einwilligung fuer KI-Nutzung geben", nl: "Alleen experts kunnen toestemming geven voor AI gebruik" }
        ],
        correct: 0,
        explanation: {
          en: "Informed consent means people should understand what data is being collected, how it will be used by AI, and potential consequences before agreeing to participate.",
          es: "Consentimiento informado significa que personas deben entender que datos se recopilan, como seran usados por IA y consecuencias potenciales antes de aceptar participar.",
          de: "Informierte Einwilligung bedeutet dass Menschen verstehen sollten welche Daten gesammelt werden, wie sie von KI verwendet werden und potentielle Konsequenzen bevor sie zustimmen teilzunehmen.",
          nl: "Geïnformeerde toestemming betekent dat mensen moeten begrijpen welke data verzameld wordt, hoe het door AI gebruikt wordt en potentiele gevolgen voordat ze akkoord gaan met deelname."
        }
      },
      {
        question: {
          en: "What does 'AI for good' mean?",
          es: "Que significa 'IA para el bien'?",
          de: "Was bedeutet 'KI fuer das Gute'?",
          nl: "Wat betekent 'AI voor het goede'?"
        },
        options: [
          { en: "Using AI to solve social & environmental problems", es: "Usar IA para resolver problemas sociales y ambientales", de: "KI nutzen um soziale und Umweltprobleme zu loesen", nl: "AI gebruiken om sociale en milieuproblemen op te lossen" },
          { en: "AI that never makes mistakes", es: "IA que nunca comete errores", de: "KI die nie Fehler macht", nl: "AI die nooit fouten maakt" },
          { en: "AI that is morally perfect", es: "IA que es moralmente perfecta", de: "KI die moralisch perfekt ist", nl: "AI die moreel perfect is" },
          { en: "Using only ethical algorithms", es: "Usar solo algoritmos eticos", de: "Nur ethische Algorithmen verwenden", nl: "Alleen ethische algoritmes gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "AI for good refers to applying AI technologies to address important challenges like healthcare, education, climate change, and poverty to benefit society.",
          es: "IA para el bien se refiere a aplicar tecnologias IA para abordar desafios importantes como salud, educacion, cambio climatico y pobreza para beneficiar sociedad.",
          de: "KI fuer das Gute bezieht sich auf Anwendung von KI-Technologien um wichtige Herausforderungen wie Gesundheit, Bildung, Klimawandel und Armut anzugehen um Gesellschaft zu nutzen.",
          nl: "AI voor het goede verwijst naar het toepassen van AI technologieën om belangrijke uitdagingen zoals gezondheidszorg, onderwijs, klimaatverandering en armoede aan te pakken ten behoeve van de samenleving."
        }
      },
      {
        question: {
          en: "What is algorithmic discrimination?",
          es: "Que es la discriminacion algoritmica?",
          de: "Was ist algorithmische Diskriminierung?",
          nl: "Wat is algoritmische discriminatie?"
        },
        options: [
          { en: "AI unfairly treats groups differently", es: "IA trata injustamente grupos de forma diferente", de: "KI behandelt Gruppen unfair unterschiedlich", nl: "AI behandelt groepen oneerlijk verschillend" },
          { en: "Algorithms that select data carefully", es: "Algoritmos que seleccionan datos cuidadosamente", de: "Algorithmen die Daten sorgfaeltig auswaehlen", nl: "Algoritmes die data zorgvuldig selecteren" },
          { en: "AI that can distinguish between objects", es: "IA que puede distinguir entre objetos", de: "KI die zwischen Objekten unterscheiden kann", nl: "AI die tussen objecten kan onderscheiden" },
          { en: "Different AI algorithms competing", es: "Diferentes algoritmos IA compitiendo", de: "Verschiedene KI-Algorithmen konkurrieren", nl: "Verschillende AI algoritmes concurreren" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic discrimination occurs when AI systems systematically disadvantage certain groups of people based on characteristics like race, gender, age, or socioeconomic status.",
          es: "Discriminacion algoritmica ocurre cuando sistemas IA sistematicamente desfavorecen ciertos grupos personas basado en caracteristicas como raza, genero, edad o estatus socioeconomico.",
          de: "Algorithmische Diskriminierung tritt auf wenn KI-Systeme systematisch bestimmte Personengruppen aufgrund von Merkmalen wie Rasse, Geschlecht, Alter oder sozioekonomischem Status benachteiligen.",
          nl: "Algoritmische discriminatie treedt op wanneer AI systemen systematisch bepaalde groepen mensen benadelen op basis van kenmerken zoals ras, geslacht, leeftijd of sociaaleconomische status."
        }
      },
      {
        question: {
          en: "What is the right to explanation in AI?",
          es: "Que es el derecho a explicacion en IA?",
          de: "Was ist das Recht auf Erklaerung in KI?",
          nl: "Wat is het recht op uitleg in AI?"
        },
        options: [
          { en: "Understanding why AI made a decision about you", es: "Entender por que IA tomo decision sobre ti", de: "Verstehen warum KI Entscheidung ueber Sie traf", nl: "Begrijpen waarom AI een beslissing over jou nam" },
          { en: "AI must explain all its code", es: "IA debe explicar todo su codigo", de: "KI muss ihren gesamten Code erklaeren", nl: "AI moet al zijn code uitleggen" },
          { en: "Users can explain AI to others", es: "Usuarios pueden explicar IA a otros", de: "Benutzer koennen KI anderen erklaeren", nl: "Gebruikers kunnen AI aan anderen uitleggen" },
          { en: "Right to receive AI training materials", es: "Derecho a recibir materiales entrenamiento IA", de: "Recht auf KI-Trainingsmaterialien", nl: "Recht op AI trainingsmaterialen" }
        ],
        correct: 0,
        explanation: {
          en: "The right to explanation means individuals should be able to receive meaningful information about the logic behind automated decisions that significantly affect them.",
          es: "El derecho a explicacion significa que individuos deberian poder recibir informacion significativa sobre la logica detras de decisiones automatizadas que les afectan significativamente.",
          de: "Das Recht auf Erklaerung bedeutet dass Individuen bedeutungsvolle Informationen ueber die Logik hinter automatisierten Entscheidungen erhalten koennen sollten die sie erheblich betreffen.",
          nl: "Het recht op uitleg betekent dat individuen betekenisvolle informatie moeten kunnen ontvangen over de logica achter geautomatiseerde beslissingen die hen aanzienlijk beïnvloeden."
        }
      },
      {
        question: {
          en: "What are ethical guidelines for AI?",
          es: "Que son las directrices eticas para IA?",
          de: "Was sind ethische Richtlinien fuer KI?",
          nl: "Wat zijn ethische richtlijnen voor AI?"
        },
        options: [
          { en: "Principles to ensure responsible AI development", es: "Principios para asegurar desarrollo responsable IA", de: "Prinzipien um verantwortliche KI-Entwicklung sicherzustellen", nl: "Principes om verantwoordelijke AI ontwikkeling te waarborgen" },
          { en: "Rules about AI electricity usage", es: "Reglas sobre uso electricidad IA", de: "Regeln ueber KI-Stromverbrauch", nl: "Regels over AI elektriciteitsgebruik" },
          { en: "Guidelines for AI programming languages", es: "Directrices para lenguajes programacion IA", de: "Richtlinien fuer KI-Programmiersprachen", nl: "Richtlijnen voor AI programmeertalen" },
          { en: "Instructions for installing AI software", es: "Instrucciones para instalar software IA", de: "Anweisungen zur Installation von KI-Software", nl: "Instructies voor installeren AI software" }
        ],
        correct: 0,
        explanation: {
          en: "Ethical guidelines are principles and best practices designed to guide AI developers and users toward creating and deploying AI systems that are safe, fair, and beneficial.",
          es: "Directrices eticas son principios y mejores practicas disenadas para guiar desarrolladores y usuarios IA hacia crear e implementar sistemas IA seguros, justos y beneficiosos.",
          de: "Ethische Richtlinien sind Prinzipien und Best Practices die KI-Entwickler und Nutzer anleiten sollen sichere, faire und vorteilhafte KI-Systeme zu erstellen und einzusetzen.",
          nl: "Ethische richtlijnen zijn principes en best practices ontworpen om AI ontwikkelaars en gebruikers te leiden naar het creëren en inzetten van AI systemen die veilig, eerlijk en voordelig zijn."
        }
      },
      {
        question: {
          en: "What is digital rights in the context of AI?",
          es: "Que son los derechos digitales en contexto de IA?",
          de: "Was sind digitale Rechte im Kontext von KI?",
          nl: "Wat zijn digitale rechten in de context van AI?"
        },
        options: [
          { en: "Protection of personal freedoms in digital age", es: "Proteccion libertades personales en era digital", de: "Schutz persoenlicher Freiheiten im digitalen Zeitalter", nl: "Bescherming persoonlijke vrijheden in digitaal tijdperk" },
          { en: "Right to own digital devices", es: "Derecho a poseer dispositivos digitales", de: "Recht digitale Geraete zu besitzen", nl: "Recht op digitale apparaten bezitten" },
          { en: "Copyright for digital content only", es: "Derechos autor solo contenido digital", de: "Urheberrecht nur fuer digitale Inhalte", nl: "Auteursrecht alleen voor digitale content" },
          { en: "Permission to use the internet", es: "Permiso para usar internet", de: "Erlaubnis das Internet zu nutzen", nl: "Toestemming om internet te gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Digital rights include privacy, freedom of expression, access to information, and protection from discrimination in the digital and AI-driven world.",
          es: "Derechos digitales incluyen privacidad, libertad expresion, acceso informacion y proteccion contra discriminacion en mundo digital e impulsado por IA.",
          de: "Digitale Rechte umfassen Privatsphaere, Meinungsfreiheit, Informationszugang und Schutz vor Diskriminierung in der digitalen und KI-getriebenen Welt.",
          nl: "Digitale rechten omvatten privacy, vrijheid van meningsuiting, toegang tot informatie en bescherming tegen discriminatie in de digitale en AI-gedreven wereld."
        }
      },
      {
        question: {
          en: "What is a major concern about facial recognition AI?",
          es: "Cual es una preocupacion mayor sobre IA reconocimiento facial?",
          de: "Was ist eine grosse Sorge bezueglich Gesichtserkennungs-KI?",
          nl: "Wat is een grote zorg over gezichtsherkenning AI?"
        },
        options: [
          { en: "Privacy invasion & potential misuse", es: "Invasion privacidad y potencial mal uso", de: "Privatsphaerenverletzung und potentieller Missbrauch", nl: "Privacy invasie en mogelijk misbruik" },
          { en: "It works too slowly", es: "Funciona demasiado lento", de: "Es funktioniert zu langsam", nl: "Het werkt te langzaam" },
          { en: "It only recognizes certain face shapes", es: "Solo reconoce ciertas formas cara", de: "Es erkennt nur bestimmte Gesichtsformen", nl: "Het herkent alleen bepaalde gezichtsvormen" },
          { en: "Cameras are too expensive", es: "Camaras son demasiado caras", de: "Kameras sind zu teuer", nl: "Camera's zijn te duur" }
        ],
        correct: 0,
        explanation: {
          en: "Facial recognition raises serious privacy concerns including mass surveillance, tracking without consent, and potential for authoritarian misuse or discrimination.",
          es: "Reconocimiento facial plantea serias preocupaciones privacidad incluyendo vigilancia masiva, rastreo sin consentimiento y potencial para mal uso autoritario o discriminacion.",
          de: "Gesichtserkennung wirft ernste Privatsphaerebedenken auf einschliesslich Massenueberwachung, Tracking ohne Zustimmung und Potenzial fuer autoritaeren Missbrauch oder Diskriminierung.",
          nl: "Gezichtsherkenning roept ernstige privacyzorgen op inclusief massasurveillance, volgen zonder toestemming en potentieel voor autoritair misbruik of discriminatie."
        }
      },
      {
        question: {
          en: "What does 'value alignment' mean in AI ethics?",
          es: "Que significa 'alineacion de valores' en etica IA?",
          de: "Was bedeutet 'Wertausrichtung' in KI-Ethik?",
          nl: "Wat betekent 'waarde afstemming' in AI ethiek?"
        },
        options: [
          { en: "AI goals match human values & interests", es: "Objetivos IA coinciden valores e intereses humanos", de: "KI-Ziele mit menschlichen Werten und Interessen uebereinstimmen", nl: "AI doelen komen overeen met menselijke waarden en belangen" },
          { en: "All AI systems cost the same amount", es: "Todos sistemas IA cuestan misma cantidad", de: "Alle KI-Systeme kosten gleich viel", nl: "Alle AI systemen kosten hetzelfde bedrag" },
          { en: "Aligning computer code properly", es: "Alinear codigo computadora correctamente", de: "Computercode richtig ausrichten", nl: "Computercode correct uitlijnen" },
          { en: "AI that shares the same programming language", es: "IA que comparte mismo lenguaje programacion", de: "KI die gleiche Programmiersprache teilt", nl: "AI die dezelfde programmeertaal deelt" }
        ],
        correct: 0,
        explanation: {
          en: "Value alignment ensures AI systems pursue goals and outcomes that reflect human values, ethics, and societal priorities rather than potentially harmful objectives.",
          es: "Alineacion valores asegura que sistemas IA persigan objetivos y resultados que reflejen valores humanos, etica y prioridades sociales en lugar de objetivos potencialmente daninos.",
          de: "Wertausrichtung stellt sicher dass KI-Systeme Ziele und Ergebnisse verfolgen die menschliche Werte, Ethik und gesellschaftliche Prioritaeten widerspiegeln statt potentiell schaedlicher Ziele.",
          nl: "Waarde afstemming zorgt ervoor dat AI systemen doelen en resultaten nastreven die menselijke waarden, ethiek en maatschappelijke prioriteiten weerspiegelen in plaats van potentieel schadelijke doelstellingen."
        }
      },
      {
        question: {
          en: "What is an AI ethics committee?",
          es: "Que es un comite de etica IA?",
          de: "Was ist ein KI-Ethikkomitee?",
          nl: "Wat is een AI ethiek commissie?"
        },
        options: [
          { en: "Group overseeing ethical AI development & use", es: "Grupo supervisando desarrollo y uso etico IA", de: "Gruppe die ethische KI-Entwicklung und Nutzung beaufsichtigt", nl: "Groep die ethische AI ontwikkeling en gebruik overziet" },
          { en: "Committee that builds AI systems", es: "Comite que construye sistemas IA", de: "Komitee das KI-Systeme baut", nl: "Commissie die AI systemen bouwt" },
          { en: "Group that tests AI speed", es: "Grupo que prueba velocidad IA", de: "Gruppe die KI-Geschwindigkeit testet", nl: "Groep die AI snelheid test" },
          { en: "Experts who sell AI products", es: "Expertos que venden productos IA", de: "Experten die KI-Produkte verkaufen", nl: "Experts die AI producten verkopen" }
        ],
        correct: 0,
        explanation: {
          en: "An AI ethics committee is a diverse group of experts who review AI projects to ensure they align with ethical principles, identify potential harms, and recommend safeguards.",
          es: "Un comite etica IA es grupo diverso expertos que revisan proyectos IA para asegurar alineen con principios eticos, identificar danos potenciales y recomendar salvaguardas.",
          de: "Ein KI-Ethikkomitee ist eine diverse Gruppe von Experten die KI-Projekte ueberpruefen um sicherzustellen dass sie mit ethischen Prinzipien uebereinstimmen, potentielle Schaeden identifizieren und Sicherheitsmassnahmen empfehlen.",
          nl: "Een AI ethiek commissie is een diverse groep experts die AI projecten beoordelen om te waarborgen dat ze aansluiten bij ethische principes, potentiele schade identificeren en waarborgen aanbevelen."
        }
      },
      {
        question: {
          en: "What does 'AI transparency' include?",
          es: "Que incluye la 'transparencia IA'?",
          de: "Was beinhaltet 'KI-Transparenz'?",
          nl: "Wat omvat 'AI transparantie'?"
        },
        options: [
          { en: "Clear info about AI capabilities & limitations", es: "Info clara sobre capacidades y limitaciones IA", de: "Klare Informationen ueber KI-Faehigkeiten und Einschraenkungen", nl: "Duidelijke info over AI capaciteiten en beperkingen" },
          { en: "Making all AI code open source", es: "Hacer todo codigo IA codigo abierto", de: "Allen KI-Code open source machen", nl: "Alle AI code open source maken" },
          { en: "Using glass computer cases", es: "Usar cajas computadora vidrio", de: "Glas-Computergehaeuse verwenden", nl: "Glazen computerbehuizingen gebruiken" },
          { en: "AI that works in the cloud only", es: "IA que funciona solo en nube", de: "KI die nur in Cloud funktioniert", nl: "AI die alleen in cloud werkt" }
        ],
        correct: 0,
        explanation: {
          en: "AI transparency means providing clear information about what an AI system does, how it works, its limitations, and potential impacts, enabling informed decision-making.",
          es: "Transparencia IA significa proporcionar informacion clara sobre que hace sistema IA, como funciona, limitaciones e impactos potenciales, permitiendo toma decisiones informada.",
          de: "KI-Transparenz bedeutet klare Informationen darueber bereitzustellen was ein KI-System tut, wie es funktioniert, seine Einschraenkungen und potentiellen Auswirkungen, was informierte Entscheidungsfindung ermoeglicht.",
          nl: "AI transparantie betekent duidelijke informatie verstrekken over wat een AI systeem doet, hoe het werkt, zijn beperkingen en potentiele impact, wat geïnformeerde besluitvorming mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is algorithmic auditing?",
          es: "Que es la auditoria algoritmica?",
          de: "Was ist algorithmische Pruefung?",
          nl: "Wat is algoritmische controle?"
        },
        options: [
          { en: "Testing AI for bias, fairness & accuracy", es: "Probar IA por sesgo, equidad y precision", de: "KI auf Verzerrung, Fairness und Genauigkeit testen", nl: "AI testen op vooroordeel, eerlijkheid en nauwkeurigheid" },
          { en: "Counting how many algorithms exist", es: "Contar cuantos algoritmos existen", de: "Zaehlen wie viele Algorithmen existieren", nl: "Tellen hoeveel algoritmes bestaan" },
          { en: "Financial auditing of AI companies", es: "Auditoria financiera empresas IA", de: "Finanzpruefung von KI-Unternehmen", nl: "Financiele controle van AI bedrijven" },
          { en: "Checking AI processing speed", es: "Verificar velocidad procesamiento IA", de: "KI-Verarbeitungsgeschwindigkeit pruefen", nl: "AI verwerkingssnelheid controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic auditing is the systematic examination of AI systems to assess whether they meet standards for fairness, accuracy, transparency, and compliance with regulations.",
          es: "Auditoria algoritmica es examen sistematico sistemas IA para evaluar si cumplen estandares equidad, precision, transparencia y cumplimiento regulaciones.",
          de: "Algorithmische Pruefung ist systematische Untersuchung von KI-Systemen um zu bewerten ob sie Standards fuer Fairness, Genauigkeit, Transparenz und Einhaltung von Vorschriften erfuellen.",
          nl: "Algoritmische controle is de systematische beoordeling van AI systemen om te evalueren of ze voldoen aan normen voor eerlijkheid, nauwkeurigheid, transparantie en naleving van regelgeving."
        }
      },
      {
        question: {
          en: "What is the digital divide in AI context?",
          es: "Que es la brecha digital en contexto IA?",
          de: "Was ist die digitale Kluft im KI-Kontext?",
          nl: "Wat is de digitale kloof in AI context?"
        },
        options: [
          { en: "Unequal access to AI technology & benefits", es: "Acceso desigual a tecnologia y beneficios IA", de: "Ungleicher Zugang zu KI-Technologie und Vorteilen", nl: "Ongelijke toegang tot AI technologie en voordelen" },
          { en: "Separation between analog and digital AI", es: "Separacion entre IA analogica y digital", de: "Trennung zwischen analoger und digitaler KI", nl: "Scheiding tussen analoge en digitale AI" },
          { en: "Gap in AI processing power", es: "Brecha en poder procesamiento IA", de: "Luecke in KI-Verarbeitungsleistung", nl: "Kloof in AI verwerkingskracht" },
          { en: "Different AI programming languages", es: "Diferentes lenguajes programacion IA", de: "Verschiedene KI-Programmiersprachen", nl: "Verschillende AI programmeertalen" }
        ],
        correct: 0,
        explanation: {
          en: "The digital divide refers to inequality in access to AI technologies, creating disparities where some groups benefit from AI while others are left behind or disadvantaged.",
          es: "Brecha digital se refiere a desigualdad en acceso a tecnologias IA, creando disparidades donde algunos grupos benefician de IA mientras otros quedan atras o desfavorecidos.",
          de: "Die digitale Kluft bezieht sich auf Ungleichheit beim Zugang zu KI-Technologien, was Disparitaeten schafft wo einige Gruppen von KI profitieren waehrend andere zurueckbleiben oder benachteiligt werden.",
          nl: "De digitale kloof verwijst naar ongelijkheid in toegang tot AI technologieën, wat ongelijkheden creëert waar sommige groepen profiteren van AI terwijl anderen achterblijven of benadeeld worden."
        }
      },
      {
        question: {
          en: "Why is cultural sensitivity important in AI?",
          es: "Por que es importante sensibilidad cultural en IA?",
          de: "Warum ist kulturelle Sensibilitaet in KI wichtig?",
          nl: "Waarom is culturele gevoeligheid belangrijk in AI?"
        },
        options: [
          { en: "AI should respect diverse cultural values", es: "IA debe respetar diversos valores culturales", de: "KI sollte diverse kulturelle Werte respektieren", nl: "AI moet diverse culturele waarden respecteren" },
          { en: "AI needs to learn all languages", es: "IA necesita aprender todos idiomas", de: "KI muss alle Sprachen lernen", nl: "AI moet alle talen leren" },
          { en: "Different cultures use different computers", es: "Diferentes culturas usan diferentes computadoras", de: "Verschiedene Kulturen nutzen verschiedene Computer", nl: "Verschillende culturen gebruiken verschillende computers" },
          { en: "Cultural data takes more storage space", es: "Datos culturales requieren mas espacio almacenamiento", de: "Kulturelle Daten benoetigen mehr Speicherplatz", nl: "Culturele data vereist meer opslagruimte" }
        ],
        correct: 0,
        explanation: {
          en: "AI systems should be designed and trained to respect cultural differences, avoid cultural biases, and work appropriately across diverse cultural contexts and norms.",
          es: "Sistemas IA deben disenarse y entrenar para respetar diferencias culturales, evitar sesgos culturales y funcionar apropiadamente en diversos contextos y normas culturales.",
          de: "KI-Systeme sollten entworfen und trainiert werden um kulturelle Unterschiede zu respektieren, kulturelle Verzerrungen zu vermeiden und angemessen in diversen kulturellen Kontexten und Normen zu funktionieren.",
          nl: "AI systemen moeten ontworpen en getraind worden om culturele verschillen te respecteren, culturele vooroordelen te vermijden en passend te werken in diverse culturele contexten en normen."
        }
      },
      {
        question: {
          en: "What is the purpose of AI impact assessments?",
          es: "Cual es el proposito de evaluaciones impacto IA?",
          de: "Was ist der Zweck von KI-Folgenabschaetzungen?",
          nl: "Wat is het doel van AI impact beoordelingen?"
        },
        options: [
          { en: "Evaluate potential risks & benefits before deployment", es: "Evaluar riesgos y beneficios potenciales antes implementacion", de: "Potentielle Risiken und Vorteile vor Einsatz bewerten", nl: "Potentiele risico's en voordelen evalueren voor inzet" },
          { en: "Measure AI processing speed", es: "Medir velocidad procesamiento IA", de: "KI-Verarbeitungsgeschwindigkeit messen", nl: "AI verwerkingssnelheid meten" },
          { en: "Calculate AI development costs", es: "Calcular costos desarrollo IA", de: "KI-Entwicklungskosten berechnen", nl: "AI ontwikkelingskosten berekenen" },
          { en: "Test if AI can make an impact", es: "Probar si IA puede tener impacto", de: "Testen ob KI Auswirkungen haben kann", nl: "Testen of AI impact kan maken" }
        ],
        correct: 0,
        explanation: {
          en: "AI impact assessments systematically identify and evaluate potential positive and negative consequences of AI systems on individuals, communities, and society before deployment.",
          es: "Evaluaciones impacto IA identifican y evaluan sistematicamente consecuencias positivas y negativas potenciales de sistemas IA en individuos, comunidades y sociedad antes implementacion.",
          de: "KI-Folgenabschaetzungen identifizieren und bewerten systematisch potentielle positive und negative Konsequenzen von KI-Systemen auf Individuen, Gemeinschaften und Gesellschaft vor Einsatz.",
          nl: "AI impact beoordelingen identificeren en evalueren systematisch potentiele positieve en negatieve gevolgen van AI systemen op individuen, gemeenschappen en samenleving voor inzet."
        }
      },
      {
        question: {
          en: "What is AI regulation?",
          es: "Que es la regulacion IA?",
          de: "Was ist KI-Regulierung?",
          nl: "Wat is AI regelgeving?"
        },
        options: [
          { en: "Laws & rules governing AI development & use", es: "Leyes y reglas gobernando desarrollo y uso IA", de: "Gesetze und Regeln die KI-Entwicklung und Nutzung regeln", nl: "Wetten en regels die AI ontwikkeling en gebruik regelen" },
          { en: "Adjusting AI speed settings", es: "Ajustar configuraciones velocidad IA", de: "KI-Geschwindigkeitseinstellungen anpassen", nl: "AI snelheidsinstellingen aanpassen" },
          { en: "Regular maintenance of AI systems", es: "Mantenimiento regular sistemas IA", de: "Regelmaessige Wartung von KI-Systemen", nl: "Regelmatig onderhoud van AI systemen" },
          { en: "Making AI work on schedule", es: "Hacer IA funcionar segun calendario", de: "KI nach Zeitplan funktionieren lassen", nl: "AI volgens schema laten werken" }
        ],
        correct: 0,
        explanation: {
          en: "AI regulation involves government laws, industry standards, and policies that establish requirements and boundaries for responsible AI development, deployment, and use.",
          es: "Regulacion IA involucra leyes gubernamentales, estandares industria y politicas que establecen requisitos y limites para desarrollo, implementacion y uso responsable IA.",
          de: "KI-Regulierung beinhaltet Regierungsgesetze, Industriestandards und Richtlinien die Anforderungen und Grenzen fuer verantwortliche KI-Entwicklung, Einsatz und Nutzung festlegen.",
          nl: "AI regelgeving omvat overheidswetten, industrienormen en beleid die eisen en grenzen vaststellen voor verantwoordelijke AI ontwikkeling, inzet en gebruik."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
