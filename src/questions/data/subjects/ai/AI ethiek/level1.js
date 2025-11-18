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
          { en: "AI makes unfair decisions from biased data", es: "Cuando los sistemas de IA toman decisiones injustas basadas en datos prejuiciosos", de: "Wenn KI-Systeme unfaire Entscheidungen basierend auf voreingenommenen Daten treffen", nl: "Wanneer AI systemen oneerlijke beslissingen nemen gebaseerd op bevooroordeelde data" },
          { en: "When AI runs too fast", es: "Cuando la IA corre demasiado rapido", de: "Wenn KI zu schnell laeuft", nl: "Wanneer AI te snel werkt" },
          { en: "When AI uses too much electricity", es: "Cuando la IA usa demasiada electricidad", de: "Wenn KI zu viel Strom verbraucht", nl: "Wanneer AI te veel elektriciteit gebruikt" },
          { en: "When AI costs too much money", es: "Cuando la IA cuesta demasiado dinero", de: "Wenn KI zu viel Geld kostet", nl: "Wanneer AI te veel geld kost" }
        ],
        correct: 0,
        explanation: {
          en: "AI bias occurs when ML systems make unfair or discriminatory decisions, often because they were trained on biased historical data that reflects past prejudices.",
          es: "El sesgo de IA ocurre cuando los sistemas de aprendizaje automatico toman decisiones injustas o discriminatorias, a menudo porque fueron entrenados con datos historicos sesgados que reflejan prejuicios pasados.",
          de: "KI-Verzerrung tritt auf, wenn maschinelle Lernsysteme unfaire oder diskriminierende Entscheidungen treffen, oft weil sie mit verzerrten historischen Daten trainiert wurden, die vergangene Vorurteile widerspiegeln.",
          nl: "AI-bias ontstaat wanneer machine learning systemen oneerlijke of discriminerende beslissingen nemen, vaak omdat ze getraind zijn op bevooroordeelde historische data die oude vooroordelen weergeeft."
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
          { en: "Understanding how AI decides", es: "Poder entender y explicar como la IA toma decisiones", de: "Verstehen und erklaeren koennen wie KI Entscheidungen trifft", nl: "Kunnen begrijpen en uitleggen hoe AI beslissingen neemt" },
          { en: "Using glass computers", es: "Usar computadoras de vidrio", de: "Glascomputer verwenden", nl: "Glazen computers gebruiken" },
          { en: "Making AI code public", es: "Hacer publico el codigo de IA", de: "KI-Code oeffentlich machen", nl: "AI code openbaar maken" }
        ],
        correct: 1,
        explanation: {
          en: "Algorithmic transparency means that AI systems should be explainable and understandable, so people can know how and why certain decisions were made by the AI.",
          es: "La transparencia algoritmica significa que los sistemas de IA deben ser explicables y comprensibles, para que las personas puedan saber como y por que se tomaron ciertas decisiones por la IA.",
          de: "Algorithmische Transparenz bedeutet, dass KI-Systeme erklaerbar und verstaendlich sein sollten, damit Menschen wissen koennen, wie und warum bestimmte Entscheidungen von der KI getroffen wurden.",
          nl: "Algoritmische transparantie betekent dat AI systemen uitlegbaar en begrijpelijk moeten zijn, zodat mensen kunnen weten hoe en waarom bepaalde beslissingen door de AI zijn genomen."
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
          { en: "Job loss & rising inequality", es: "Las personas pueden perder sus medios de subsistencia y la desigualdad economica podria aumentar", de: "Menschen koennten ihre Lebensgrundlage verlieren und wirtschaftliche Ungleichheit koennte zunehmen", nl: "Mensen kunnen hun levensonderhoud verliezen en economische ongelijkheid zou kunnen toenemen" },
          { en: "AI will run out of electricity", es: "La IA se quedara sin electricidad", de: "KI wird keinen Strom mehr haben", nl: "AI raakt zonder stroom" },
          { en: "Robots will take up too much space", es: "Los robots ocuparan demasiado espacio", de: "Roboter werden zu viel Platz einnehmen", nl: "Robots nemen te veel ruimte in" }
        ],
        correct: 1,
        explanation: {
          en: "The main ethical concern is that widespread AI automation could lead to mass unemployment, affecting people's ability to earn a living and potentially increasing social and inequality.",
          es: "La principal preocupacion etica es que la automatizacion generalizada de IA podria llevar al desempleo masivo, afectando la capacidad de las personas para ganarse la vida y potencialmente aumentando la desigualdad social y economica.",
          de: "Die hauptsaechliche ethische Sorge ist, dass weit verbreitete KI-Automatisierung zu Massenarbeitslosigkeit fuehren koennte, was die Faehigkeit der Menschen beeintraechtigt, ihren Lebensunterhalt zu verdienen und moeglicherweise soziale und wirtschaftliche Ungleichheit vergroessert.",
          nl: "De belangrijkste ethische zorg is dat wijdverspreide AI automatisering tot massale werkloosheid zou kunnen leiden, wat de mogelijkheid van mensen om in hun levensonderhoud te voorzien aantast en mogelijk sociale en economische ongelijkheid vergroot."
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
          { en: "Assign responsibility when AI causes harm", es: "Alguien debe ser responsable cuando la IA toma decisiones daninas", de: "Jemand sollte verantwortlich sein wenn KI schaedliche Entscheidungen trifft", nl: "Iemand moet verantwoordelijk zijn wanneer AI schadelijke beslissingen neemt" },
          { en: "AI should keep financial records", es: "La IA debe mantener registros financieros", de: "KI sollte Finanzaufzeichnungen fuehren", nl: "AI moet financiele administratie bijhouden" },
          { en: "AI must pay taxes", es: "La IA debe pagar impuestos", de: "KI muss Steuern zahlen", nl: "AI moet belasting betalen" }
        ],
        correct: 1,
        explanation: {
          en: "AI accountability means establishing clear responsibility for AI decisions and actions, ensuring that humans remain accountable for the outcomes of AI systems they deploy.",
          es: "La responsabilidad de IA significa establecer responsabilidad clara por las decisiones y acciones de IA, asegurando que los humanos permanezcan responsables por los resultados de los sistemas de IA que despliegan.",
          de: "KI-Verantwortlichkeit bedeutet klare Verantwortung fuer KI-Entscheidungen und -Aktionen zu etablieren und sicherzustellen, dass Menschen verantwortlich bleiben fuer die Ergebnisse der KI-Systeme, die sie einsetzen.",
          nl: "AI verantwoordelijkheid betekent duidelijke verantwoordelijkheid vaststellen voor AI beslissingen en acties, en ervoor zorgen dat mensen verantwoordelijk blijven voor de uitkomsten van AI systemen die ze inzetten."
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
          { en: "Benefit humanity, minimize harm", es: "La IA debe beneficiar a la humanidad mientras minimiza el dano", de: "KI sollte der Menschheit nutzen waehrend Schaden minimiert wird", nl: "AI moet de mensheid ten goede komen terwijl schade geminimaliseerd wordt" },
          { en: "AI should make maximum profit", es: "La IA debe generar maximas ganancias", de: "KI sollte maximalen Gewinn erzielen", nl: "AI moet maximale winst maken" },
          { en: "AI should replace all human workers", es: "La IA debe reemplazar a todos los trabajadores humanos", de: "KI sollte alle menschlichen Arbeiter ersetzen", nl: "AI moet alle menselijke werknemers vervangen" }
        ],
        correct: 1,
        explanation: {
          en: "The fundamental principle of ethical AI is to develop systems that benefit humanity as a whole while actively working to prevent or minimize potential harms and negative consequences.",
          es: "El principio fundamental de IA etica es desarrollar sistemas que beneficien a la humanidad en su conjunto mientras se trabaja activamente para prevenir o minimizar posibles danos y consecuencias negativas.",
          de: "Das grundlegende Prinzip ethischer KI ist die Entwicklung von Systemen, die der gesamten Menschheit nutzen, waehrend aktiv daran gearbeitet wird, moegliche Schaeden und negative Konsequenzen zu verhindern oder zu minimieren.",
          nl: "Het fundamentele principe van ethische AI is het ontwikkelen van systemen die de mensheid als geheel ten goede komen terwijl actief gewerkt wordt aan het voorkomen of minimaliseren van mogelijke schade en negatieve gevolgen."
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
          { en: "Fair, safe & beneficial AI", es: "Asegurar que los sistemas de IA sean justos, seguros y beneficiosos", de: "Sicherstellen dass KI-Systeme fair, sicher und vorteilhaft sind", nl: "Ervoor zorgen dat AI systemen eerlijk, veilig en voordelig zijn" },
          { en: "Making AI run faster", es: "Hacer que la IA funcione mas rapido", de: "KI schneller laufen lassen", nl: "AI sneller laten werken" },
          { en: "Reducing computer costs", es: "Reducir costos de computadora", de: "Computerkosten reduzieren", nl: "Computerkosten verlagen" },
          { en: "Teaching machines to think like humans", es: "Ensenar a las maquinas a pensar como humanos", de: "Maschinen beibringen wie Menschen zu denken", nl: "Machines leren denken zoals mensen" }
        ],
        correct: 0,
        explanation: {
          en: "Machine learning ethics focuses on ensuring AI systems are developed and deployed in ways that are fair, safe, transparent, and beneficial to society while minimizing potential harms.",
          es: "La etica del aprendizaje automatico se enfoca en asegurar que los sistemas de IA se desarrollen e implementen de maneras que sean justas, seguras, transparentes y beneficiosas para la sociedad mientras minimizan posibles danos.",
          de: "Machine Learning Ethik konzentriert sich darauf sicherzustellen dass KI-Systeme auf faire, sichere, transparente und gesellschaftlich vorteilhafte Weise entwickelt und eingesetzt werden waehrend potentielle Schaeden minimiert werden.",
          nl: "Machine learning ethiek richt zich op het waarborgen dat AI systemen ontwikkeld en ingezet worden op manieren die eerlijk, veilig, transparant en voordelig zijn voor de samenleving terwijl potentiele schade geminimaliseerd wordt."
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
          { en: "Create filter bubbles & reinforce beliefs", es: "Pueden crear burbujas de filtro y reforzar creencias existentes", de: "Sie koennen Filterblasen schaffen und bestehende Ueberzeugungen verstaerken", nl: "Ze kunnen filterbubbles creeren en bestaande overtuigingen versterken" },
          { en: "They are too slow to load", es: "Son demasiado lentos para cargar", de: "Sie laden zu langsam", nl: "Ze laden te langzaam" },
          { en: "They require too many clicks", es: "Requieren demasiados clics", de: "Sie erfordern zu viele Klicks", nl: "Ze vereisen te veel klikken" }
        ],
        correct: 1,
        explanation: {
          en: "AI recommendation systems can create filter bubbles by only showing content similar to what users already consume, potentially limiting exposure to diverse viewpoints and reinforcing existing biases.",
          es: "Los sistemas de recomendacion de IA pueden crear burbujas de filtro mostrando solo contenido similar a lo que los usuarios ya consumen, potencialmente limitando la exposicion a puntos de vista diversos y reforzando sesgos existentes.",
          de: "KI-Empfehlungssysteme koennen Filterblasen schaffen indem sie nur Inhalte zeigen die dem aehnlich sind was Nutzer bereits konsumieren, was moeglicherweise die Exposition gegenueber diversen Standpunkten begrenzt und bestehende Verzerrungen verstaerkt.",
          nl: "AI aanbevelingssystemen kunnen filterbubbles creeren door alleen content te tonen die vergelijkbaar is met wat gebruikers al consumeren, wat mogelijk de blootstelling aan diverse standpunten beperkt en bestaande vooroordelen versterkt."
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
          { en: "Augment & empower humans, not replace", es: "IA disenada para aumentar y empoderar a los humanos en lugar de reemplazarlos", de: "KI die darauf ausgelegt ist Menschen zu erweitern und zu befaehigen anstatt sie zu ersetzen", nl: "AI ontworpen om mensen te versterken en te versterken in plaats van ze te vervangen" },
          { en: "AI that only works in human buildings", es: "IA que solo funciona en edificios humanos", de: "KI die nur in menschlichen Gebaeuden funktioniert", nl: "AI die alleen werkt in menselijke gebouwen" },
          { en: "AI controlled by human voices only", es: "IA controlada solo por voces humanas", de: "KI die nur durch menschliche Stimmen kontrolliert wird", nl: "AI die alleen door menselijke stemmen gecontroleerd wordt" }
        ],
        correct: 1,
        explanation: {
          en: "Human-centered AI prioritizes human values, needs, and well-being in AI design, focusing on augmenting human capabilities and ensuring AI serves humanity's best interests.",
          es: "La IA centrada en el humano prioriza valores, necesidades y bienestar humanos en el diseno de IA, enfocandose en aumentar capacidades humanas y asegurar que la IA sirva a los mejores intereses de la humanidad.",
          de: "Menschenzentrierte KI priorisiert menschliche Werte, Beduerfnisse und Wohlbefinden im KI-Design, fokussiert darauf menschliche Faehigkeiten zu erweitern und sicherzustellen dass KI der Menschheit bestmoegliche Interessen dient.",
          nl: "Mensgerichte AI geeft prioriteit aan menselijke waarden, behoeften en welzijn in AI ontwerp, richt zich op het versterken van menselijke capaciteiten en zorgt ervoor dat AI de beste belangen van de mensheid dient."
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
          { en: "No discrimination vs protected groups", es: "Asegurar que la IA no discrimine contra grupos protegidos", de: "Sicherstellen dass die KI nicht gegen geschuetzte Gruppen diskriminiert", nl: "Ervoor zorgen dat de AI niet discrimineert tegen beschermde groepen" },
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
          { en: "Rules & oversight for responsible AI", es: "Crear reglas y supervision para desarrollo y uso responsable de IA", de: "Regeln und Aufsicht fuer verantwortliche KI-Entwicklung und -Nutzung schaffen", nl: "Regels en toezicht creeren voor verantwoordelijke AI ontwikkeling en gebruik" },
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
          { en: "Spread misinfo & undermine trust", es: "Puede difundir desinformacion y socavar la confianza en contenido autentico", de: "Es kann Fehlinformationen verbreiten und das Vertrauen in authentische Inhalte untergraben", nl: "Het kan verkeerde informatie verspreiden en het vertrouwen in authentieke content ondermijnen" },
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
          { en: "Prevent unintended AI harm", es: "Prevenir que sistemas de IA causen dano no intencionado", de: "Verhindern dass KI-Systeme unbeabsichtigten Schaden verursachen", nl: "Voorkomen dat AI systemen onbedoelde schade veroorzaken" },
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
          { en: "Ensure AI works fairly for all groups", es: "Ayuda a asegurar que la IA funcione justamente en diferentes grupos de personas", de: "Es hilft sicherzustellen dass KI fair bei verschiedenen Menschengruppen funktioniert", nl: "Het helpt ervoor te zorgen dat AI eerlijk werkt voor verschillende groepen mensen" },
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
          { en: "Fair & equitable AI outcomes", es: "Resultados justos y equitativos de sistemas de toma de decisiones de IA", de: "Faire und gerechte Ergebnisse von KI-Entscheidungssystemen", nl: "Eerlijke en rechtvaardige uitkomsten van AI besluitvormingssystemen" },
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
          { en: "Training & deployment use significant energy", es: "El entrenamiento e implementacion de IA puede consumir energia y recursos significativos", de: "KI-Training und -Einsatz koennen erhebliche Energie und Ressourcen verbrauchen", nl: "AI training en inzet kunnen aanzienlijke energie en middelen verbruiken" },
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
          { en: "Understanding AI to make informed decisions", es: "Entender como funciona la IA para que las personas puedan tomar decisiones informadas sobre su uso", de: "Verstehen wie KI funktioniert damit Menschen informierte Entscheidungen ueber ihre Nutzung treffen koennen", nl: "Begrijpen hoe AI werkt zodat mensen geïnformeerde beslissingen kunnen nemen over het gebruik ervan" },
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
          { en: "Control over personal data use", es: "Las personas deberian tener control sobre como se usan sus datos personales", de: "Menschen sollten Kontrolle darueber haben wie ihre persoenlichen Daten verwendet werden", nl: "Mensen zouden controle moeten hebben over hoe hun persoonlijke data gebruikt wordt" },
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
          { en: "Understanding AI reasoning", es: "Cuando las personas pueden entender el razonamiento detras de las decisiones de IA", de: "Wenn Menschen die Begruendung hinter KI-Entscheidungen verstehen koennen", nl: "Wanneer mensen de redenering achter AI beslissingen kunnen begrijpen" },
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
          { en: "Diverse perspectives prevent bias", es: "Diferentes perspectivas ayudan a identificar y prevenir sesgo en sistemas de IA", de: "Verschiedene Perspektiven helfen Verzerrung in KI-Systemen zu identifizieren und zu verhindern", nl: "Verschillende perspectieven helpen bias in AI systemen te identificeren en voorkomen" },
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
          { en: "Test & monitor AI pre & post release", es: "Probar y monitorear cuidadosamente sistemas de IA antes y despues del lanzamiento", de: "KI-Systeme vor und nach der Veroeffentlichung sorgfaeltig testen und ueberwachen", nl: "AI systemen zorgvuldig testen en monitoren voor en na uitrol" },
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
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
