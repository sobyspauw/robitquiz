// AI Ethics Quiz - Level 3: Intermediate Knowledge about AI Ethics
(function() {
  const level3 = {
    name: {
      en: "AI Ethics Level 3",
      es: "Etica de IA Nivel 3",
      de: "KI-Ethik Stufe 3",
      nl: "AI Ethiek Level 3"
    },
    questions: [
      {
        question: {
          en: "What is 'data minimization' in ethical AI development?",
          es: "Que es la 'minimizacion de datos' en el desarrollo etico de IA?",
          de: "Was ist 'Datenminimierung' in der ethischen KI-Entwicklung?",
          nl: "Wat is 'data minimalisatie' in ethische AI ontwikkeling?"
        },
        options: [
          { en: "Collecting only the data necessary for a specific purpose", es: "Recolectar solo los datos necesarios para un proposito especifico", de: "Nur die fuer einen bestimmten Zweck notwendigen Daten sammeln", nl: "Alleen de data verzamelen die nodig is voor een specifiek doel" },
          { en: "Making databases smaller", es: "Hacer las bases de datos mas pequenas", de: "Datenbanken kleiner machen", nl: "Databases kleiner maken" },
          { en: "Reducing the cost of data storage", es: "Reducir el costo de almacenamiento de datos", de: "Die Kosten der Datenspeicherung reduzieren", nl: "De kosten van data opslag verminderen" },
          { en: "Using less internet bandwidth", es: "Usar menos ancho de banda de internet", de: "Weniger Internet-Bandbreite verwenden", nl: "Minder internet bandbreedte gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Data minimization is a privacy principle that requires organizations to collect and process only the minimum amount of personal data necessary to achieve their stated purpose, reducing privacy risks.",
          es: "La minimizacion de datos es un principio de privacidad que requiere que las organizaciones recolecten y procesen solo la cantidad minima de datos personales necesarios para lograr su proposito declarado, reduciendo riesgos de privacidad.",
          de: "Datenminimierung ist ein Datenschutzprinzip das erfordert dass Organisationen nur die minimale Menge an persoenlichen Daten sammeln und verarbeiten die notwendig ist um ihren angegebenen Zweck zu erreichen, wodurch Datenschutzrisiken reduziert werden.",
          nl: "Data minimalisatie is een privacy principe dat vereist dat organisaties alleen de minimale hoeveelheid persoonlijke data verzamelen en verwerken die nodig is om hun verklaarde doel te bereiken, waardoor privacy risico's verminderd worden."
        }
      },
      {
        question: {
          en: "What does 'human-in-the-loop' mean in AI decision-making?",
          es: "Que significa 'humano en el ciclo' en la toma de decisiones de IA?",
          de: "Was bedeutet 'Human-in-the-Loop' bei KI-Entscheidungen?",
          nl: "Wat betekent 'human-in-the-loop' bij AI besluitvorming?"
        },
        options: [
          { en: "A human physically inside a computer", es: "Un humano fisicamente dentro de una computadora", de: "Ein Mensch physisch in einem Computer", nl: "Een mens fysiek in een computer" },
          { en: "Keeping human oversight and intervention in AI processes", es: "Mantener supervision e intervencion humana en procesos de IA", de: "Menschliche Aufsicht und Intervention in KI-Prozessen beibehalten", nl: "Menselijk toezicht en interventie behouden in AI processen" },
          { en: "Training humans to think like AI", es: "Entrenar humanos para pensar como IA", de: "Menschen trainieren wie KI zu denken", nl: "Mensen trainen om te denken zoals AI" },
          { en: "Using circular reasoning in AI", es: "Usar razonamiento circular en IA", de: "Zirkulaeres Denken in KI verwenden", nl: "Circulair redeneren gebruiken in AI" }
        ],
        correct: 1,
        explanation: {
          en: "Human-in-the-loop refers to AI systems that include human judgment at critical points, allowing humans to review, validate, or override AI decisions, especially in high-stakes situations.",
          es: "Humano en el ciclo se refiere a sistemas de IA que incluyen juicio humano en puntos criticos, permitiendo a humanos revisar, validar o anular decisiones de IA, especialmente en situaciones de alto riesgo.",
          de: "Human-in-the-Loop bezieht sich auf KI-Systeme die menschliches Urteil an kritischen Punkten einbeziehen, wodurch Menschen KI-Entscheidungen ueberpruefen, validieren oder ueberstimmen koennen, besonders in Hochrisiko-Situationen.",
          nl: "Human-in-the-loop verwijst naar AI systemen die menselijk oordeel op kritieke punten insluiten, waardoor mensen AI beslissingen kunnen beoordelen, valideren of overrulen, vooral in hoog-risico situaties."
        }
      },
      {
        question: {
          en: "What is 'algorithmic discrimination' in AI systems?",
          es: "Que es la 'discriminacion algoritmica' en sistemas de IA?",
          de: "Was ist 'algorithmische Diskriminierung' in KI-Systemen?",
          nl: "Wat is 'algoritmische discriminatie' in AI systemen?"
        },
        options: [
          { en: "When AI unfairly treats people differently based on protected characteristics", es: "Cuando la IA trata injustamente a personas de manera diferente basado en caracteristicas protegidas", de: "Wenn KI Menschen unfair unterschiedlich behandelt basierend auf geschuetzten Merkmalen", nl: "Wanneer AI mensen oneerlijk verschillend behandelt gebaseerd op beschermde kenmerken" },
          { en: "When algorithms choose the best option", es: "Cuando los algoritmos eligen la mejor opcion", de: "Wenn Algorithmen die beste Option waehlen", nl: "Wanneer algoritmes de beste optie kiezen" },
          { en: "When AI systems compete with each other", es: "Cuando sistemas de IA compiten entre si", de: "Wenn KI-Systeme miteinander konkurrieren", nl: "Wanneer AI systemen met elkaar concurreren" },
          { en: "When algorithms are very selective", es: "Cuando los algoritmos son muy selectivos", de: "Wenn Algorithmen sehr selektiv sind", nl: "Wanneer algoritmes erg selectief zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic discrimination occurs when AI systems produce biased outcomes that unfairly disadvantage certain groups based on race, gender, age, or other protected characteristics, often due to biased training data or design.",
          es: "La discriminacion algoritmica ocurre cuando sistemas de IA producen resultados sesgados que perjudican injustamente a ciertos grupos basados en raza, genero, edad u otras caracteristicas protegidas, a menudo debido a datos de entrenamiento o diseno sesgados.",
          de: "Algorithmische Diskriminierung tritt auf wenn KI-Systeme voreingenommene Ergebnisse produzieren die bestimmte Gruppen unfair benachteiligen basierend auf Rasse, Geschlecht, Alter oder anderen geschuetzten Merkmalen, oft aufgrund voreingenommener Trainingsdaten oder Design.",
          nl: "Algoritmische discriminatie treedt op wanneer AI systemen bevooroordeelde uitkomsten produceren die bepaalde groepen oneerlijk benadelen gebaseerd op ras, geslacht, leeftijd of andere beschermde kenmerken, vaak door bevooroordeelde trainingsdata of ontwerp."
        }
      },
      {
        question: {
          en: "What is the purpose of an 'AI ethics committee' in organizations?",
          es: "Cual es el proposito de un 'comite de etica de IA' en las organizaciones?",
          de: "Was ist der Zweck eines 'KI-Ethik-Ausschusses' in Organisationen?",
          nl: "Wat is het doel van een 'AI ethiek commissie' in organisaties?"
        },
        options: [
          { en: "To slow down AI development", es: "Ralentizar el desarrollo de IA", de: "KI-Entwicklung verlangsamen", nl: "AI ontwikkeling vertragen" },
          { en: "To review and guide ethical AI development and deployment", es: "Revisar y guiar el desarrollo y despliegue etico de IA", de: "Ethische KI-Entwicklung und -Einsatz ueberpruefen und leiten", nl: "Ethische AI ontwikkeling en implementatie beoordelen en begeleiden" },
          { en: "To increase AI budgets", es: "Aumentar presupuestos de IA", de: "KI-Budgets erhoehen", nl: "AI budgetten verhogen" },
          { en: "To hire more programmers", es: "Contratar mas programadores", de: "Mehr Programmierer einstellen", nl: "Meer programmeurs aannemen" }
        ],
        correct: 1,
        explanation: {
          en: "AI ethics committees provide oversight, establish guidelines, and ensure that AI projects align with ethical principles and organizational values, helping to identify and mitigate potential ethical risks.",
          es: "Los comites de etica de IA proporcionan supervision, establecen pautas y aseguran que los proyectos de IA se alineen con principios eticos y valores organizacionales, ayudando a identificar y mitigar riesgos eticos potenciales.",
          de: "KI-Ethik-Ausschuesse bieten Aufsicht, etablieren Richtlinien und stellen sicher dass KI-Projekte mit ethischen Prinzipien und Organisationswerten uebereinstimmen, und helfen potenzielle ethische Risiken zu identifizieren und zu mindern.",
          nl: "AI ethiek commissies bieden toezicht, stellen richtlijnen vast en zorgen ervoor dat AI projecten aansluiten bij ethische principes en organisatiewaarden, en helpen potentiële ethische risico's te identificeren en te verminderen."
        }
      },
      {
        question: {
          en: "What does 'purpose limitation' mean in AI data usage?",
          es: "Que significa 'limitacion de proposito' en el uso de datos de IA?",
          de: "Was bedeutet 'Zweckbindung' bei der KI-Datennutzung?",
          nl: "Wat betekent 'doelbinding' bij AI data gebruik?"
        },
        options: [
          { en: "Data should only be used for the purpose it was originally collected", es: "Los datos solo deben usarse para el proposito para el que fueron recolectados originalmente", de: "Daten sollten nur fuer den Zweck verwendet werden fuer den sie urspruenglich gesammelt wurden", nl: "Data mag alleen gebruikt worden voor het doel waarvoor het oorspronkelijk verzameld werd" },
          { en: "AI should have limited purposes", es: "La IA debe tener propositos limitados", de: "KI sollte begrenzte Zwecke haben", nl: "AI moet beperkte doelen hebben" },
          { en: "Limiting how many times data can be accessed", es: "Limitar cuantas veces se pueden acceder los datos", de: "Begrenzen wie oft auf Daten zugegriffen werden kann", nl: "Beperken hoe vaak data toegankelijk is" },
          { en: "Using data for maximum profit", es: "Usar datos para maximo beneficio", de: "Daten fuer maximalen Profit nutzen", nl: "Data gebruiken voor maximale winst" }
        ],
        correct: 0,
        explanation: {
          en: "Purpose limitation is a privacy principle stating that personal data collected for one specific purpose should not be used for other unrelated purposes without explicit consent, protecting individuals from unexpected data use.",
          es: "La limitacion de proposito es un principio de privacidad que establece que los datos personales recolectados para un proposito especifico no deben usarse para otros propositos no relacionados sin consentimiento explicito, protegiendo a individuos del uso inesperado de datos.",
          de: "Zweckbindung ist ein Datenschutzprinzip das besagt dass persoenliche Daten die fuer einen bestimmten Zweck gesammelt wurden nicht fuer andere unverbundene Zwecke ohne explizite Zustimmung verwendet werden sollten, um Individuen vor unerwarteter Datennutzung zu schuetzen.",
          nl: "Doelbinding is een privacy principe dat stelt dat persoonlijke data verzameld voor een specifiek doel niet gebruikt mag worden voor andere ongerelateerde doelen zonder expliciete toestemming, wat individuen beschermt tegen onverwacht data gebruik."
        }
      },
      {
        question: {
          en: "What is 'anonymization' in AI data processing?",
          es: "Que es la 'anonimizacion' en el procesamiento de datos de IA?",
          de: "Was ist 'Anonymisierung' in der KI-Datenverarbeitung?",
          nl: "Wat is 'anonimisering' in AI data verwerking?"
        },
        options: [
          { en: "Removing or altering identifiable information to protect individual privacy", es: "Remover o alterar informacion identificable para proteger privacidad individual", de: "Identifizierbare Informationen entfernen oder aendern um individuelle Privatsphaere zu schuetzen", nl: "Identificeerbare informatie verwijderen of wijzigen om individuele privacy te beschermen" },
          { en: "Making AI systems work without names", es: "Hacer que sistemas de IA funcionen sin nombres", de: "KI-Systeme ohne Namen arbeiten lassen", nl: "AI systemen laten werken zonder namen" },
          { en: "Hiding the identity of AI developers", es: "Ocultar la identidad de desarrolladores de IA", de: "Die Identitaet von KI-Entwicklern verbergen", nl: "De identiteit van AI ontwikkelaars verbergen" },
          { en: "Using anonymous user accounts", es: "Usar cuentas de usuario anonimas", de: "Anonyme Benutzerkonten verwenden", nl: "Anonieme gebruikersaccounts gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Anonymization involves removing or modifying personal identifiers from data so that individuals cannot be identified, while preserving the data's utility for AI training and analysis.",
          es: "La anonimizacion involucra remover o modificar identificadores personales de datos para que individuos no puedan ser identificados, mientras preserva la utilidad de los datos para entrenamiento y analisis de IA.",
          de: "Anonymisierung beinhaltet das Entfernen oder Modifizieren persoenlicher Identifikatoren aus Daten damit Individuen nicht identifiziert werden koennen, waehrend die Nuetzlichkeit der Daten fuer KI-Training und Analyse erhalten bleibt.",
          nl: "Anonimisering houdt het verwijderen of wijzigen van persoonlijke identificatoren uit data in zodat individuen niet geïdentificeerd kunnen worden, terwijl de bruikbaarheid van de data voor AI training en analyse behouden blijft."
        }
      },
      {
        question: {
          en: "What is 'pseudonymization' in data privacy?",
          es: "Que es la 'seudonimizacion' en privacidad de datos?",
          de: "Was ist 'Pseudonymisierung' im Datenschutz?",
          nl: "Wat is 'pseudonimisering' in data privacy?"
        },
        options: [
          { en: "Replacing direct identifiers with artificial identifiers that can be reversed", es: "Reemplazar identificadores directos con identificadores artificiales que pueden ser revertidos", de: "Direkte IDs durch kuenstliche IDs ersetzen die rueckgaengig gemacht werden koennen", nl: "Directe identificatoren vervangen door kunstmatige identificatoren die omkeerbaar zijn" },
          { en: "Using fake names for everyone", es: "Usar nombres falsos para todos", de: "Gefaelschte Namen fuer alle verwenden", nl: "Valse namen gebruiken voor iedereen" },
          { en: "Creating fictional characters", es: "Crear personajes ficticios", de: "Fiktive Charaktere erstellen", nl: "Fictieve karakters creëren" },
          { en: "Using nicknames instead of real names", es: "Usar apodos en lugar de nombres reales", de: "Spitznamen anstatt echter Namen verwenden", nl: "Bijnamen gebruiken in plaats van echte namen" }
        ],
        correct: 0,
        explanation: {
          en: "Pseudonymization replaces identifying fields with artificial identifiers, allowing data to be processed while maintaining the ability to re-identify individuals when necessary and authorized.",
          es: "La seudonimizacion reemplaza campos identificadores con identificadores artificiales, permitiendo que los datos sean procesados mientras mantiene la capacidad de re-identificar individuos cuando sea necesario y autorizado.",
          de: "Pseudonymisierung ersetzt identifizierende Felder mit kuenstlichen Identifikatoren, wodurch Daten verarbeitet werden koennen waehrend die Faehigkeit erhalten bleibt Individuen bei Bedarf und Autorisierung re-zu-identifizieren.",
          nl: "Pseudonimisering vervangt identificerende velden met kunstmatige identificatoren, waardoor data verwerkt kan worden terwijl de mogelijkheid behouden blijft om individuen opnieuw te identificeren wanneer nodig en geautoriseerd."
        }
      },
      {
        question: {
          en: "What does 'data retention' mean in AI privacy practices?",
          es: "Que significa 'retencion de datos' en practicas de privacidad de IA?",
          de: "Was bedeutet 'Datenspeicherung' in KI-Datenschutzpraktiken?",
          nl: "Wat betekent 'data retentie' in AI privacy praktijken?"
        },
        options: [
          { en: "How long personal data is kept before deletion", es: "Cuanto tiempo se mantienen datos personales antes de eliminarlos", de: "Wie lange persoenliche Daten vor Loeschung aufbewahrt werden", nl: "Hoe lang persoonlijke data bewaard wordt voor verwijdering" },
          { en: "Keeping all data forever", es: "Mantener todos los datos para siempre", de: "Alle Daten fuer immer behalten", nl: "Alle data voor altijd bewaren" },
          { en: "Making multiple copies of data", es: "Hacer multiples copias de datos", de: "Mehrere Kopien von Daten erstellen", nl: "Meerdere kopieën van data maken" },
          { en: "Storing data in different locations", es: "Almacenar datos en diferentes ubicaciones", de: "Daten an verschiedenen Orten speichern", nl: "Data opslaan op verschillende locaties" }
        ],
        correct: 0,
        explanation: {
          en: "Data retention policies specify how long personal data should be kept for specific purposes and when it must be deleted, balancing business needs with privacy rights and regulatory requirements.",
          es: "Las politicas de retencion de datos especifican cuanto tiempo deben mantenerse datos personales para propositos especificos y cuando deben eliminarse, equilibrando necesidades comerciales con derechos de privacidad y requisitos regulatorios.",
          de: "Datenspeicherungsrichtlinien spezifizieren wie lange persoenliche Daten fuer bestimmte Zwecke aufbewahrt werden sollten und wann sie geloescht werden muessen, wobei Geschaeftsbeduerfnisse mit Datenschutzrechten und regulatorischen Anforderungen ausbalanciert werden.",
          nl: "Data retentie beleid specificeert hoe lang persoonlijke data bewaard moet worden voor specifieke doelen en wanneer het verwijderd moet worden, waarbij zakelijke behoeften gebalanceerd worden met privacy rechten en regulatoire vereisten."
        }
      },
      {
        question: {
          en: "What is the 'right to be forgotten' in AI systems?",
          es: "Que es el 'derecho al olvido' en sistemas de IA?",
          de: "Was ist das 'Recht auf Vergessenwerden' in KI-Systemen?",
          nl: "Wat is het 'recht om vergeten te worden' in AI systemen?"
        },
        options: [
          { en: "The ability for individuals to request deletion of their personal data", es: "La capacidad de individuos de solicitar eliminacion de sus datos personales", de: "Die Faehigkeit fuer Individuen die Loeschung ihrer persoenlichen Daten zu verlangen", nl: "De mogelijkheid voor individuen om verwijdering van hun persoonlijke data aan te vragen" },
          { en: "AI systems forgetting their training", es: "Sistemas de IA olvidando su entrenamiento", de: "KI-Systeme vergessen ihr Training", nl: "AI systemen hun training vergeten" },
          { en: "Deleting AI algorithms permanently", es: "Eliminar algoritmos de IA permanentemente", de: "KI-Algorithmen dauerhaft loeschen", nl: "AI algoritmes permanent verwijderen" },
          { en: "Making AI systems have memory problems", es: "Hacer que sistemas de IA tengan problemas de memoria", de: "KI-Systeme Gedaechtnisprobleme haben lassen", nl: "AI systemen geheugenproblemen laten hebben" }
        ],
        correct: 0,
        explanation: {
          en: "The right to be forgotten allows individuals to request that organizations delete their personal data under certain circumstances, which presents technical challenges for AI systems that have learned from this data.",
          es: "El derecho al olvido permite a individuos solicitar que organizaciones eliminen sus datos personales bajo ciertas circunstancias, lo que presenta desafios tecnicos para sistemas de IA que han aprendido de estos datos.",
          de: "Das Recht auf Vergessenwerden erlaubt Individuen zu verlangen dass Organisationen ihre persoenlichen Daten unter bestimmten Umstaenden loeschen, was technische Herausforderungen fuer KI-Systeme darstellt die von diesen Daten gelernt haben.",
          nl: "Het recht om vergeten te worden stelt individuen in staat om organisaties te vragen hun persoonlijke data te verwijderen onder bepaalde omstandigheden, wat technische uitdagingen biedt voor AI systemen die van deze data geleerd hebben."
        }
      },
      {
        question: {
          en: "What is 'federated learning' and how does it help privacy?",
          es: "Que es 'aprendizaje federado' y como ayuda a la privacidad?",
          de: "Was ist 'foederiertes Lernen' und wie hilft es der Privatsphaere?",
          nl: "Wat is 'federated learning' en hoe helpt het de privacy?"
        },
        options: [
          { en: "Training AI models locally without sharing raw data centrally", es: "Entrenar modelos de IA localmente sin compartir datos crudos centralmente", de: "KI-Modelle lokal trainieren ohne rohe Daten zentral zu teilen", nl: "AI modellen lokaal trainen zonder ruwe data centraal te delen" },
          { en: "Learning about government federations", es: "Aprender sobre federaciones gubernamentales", de: "Ueber Regierungsfoederationen lernen", nl: "Leren over overheidsföderaties" },
          { en: "Sharing all data with everyone", es: "Compartir todos los datos con todos", de: "Alle Daten mit allen teilen", nl: "Alle data met iedereen delen" },
          { en: "Using multiple AI systems together", es: "Usar multiples sistemas de IA juntos", de: "Mehrere KI-Systeme zusammen verwenden", nl: "Meerdere AI systemen samen gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Federated learning allows multiple parties to collaboratively train AI models while keeping their data local, sharing only model updates rather than raw data, thus preserving privacy.",
          es: "El aprendizaje federado permite a multiples partes entrenar colaborativamente modelos de IA mientras mantienen sus datos locales, compartiendo solo actualizaciones del modelo en lugar de datos crudos, preservando asi la privacidad.",
          de: "Foederiertes Lernen erlaubt mehreren Parteien kollaborativ KI-Modelle zu trainieren waehrend sie ihre Daten lokal behalten, nur Modell-Updates anstatt roher Daten teilen, wodurch Privatsphaere bewahrt wird.",
          nl: "Federated learning stelt meerdere partijen in staat om collaboratief AI modellen te trainen terwijl ze hun data lokaal houden, alleen model updates delen in plaats van ruwe data, waardoor privacy behouden wordt."
        }
      },
      {
        question: {
          en: "What is 'homomorphic encryption' in AI privacy?",
          es: "Que es 'encriptacion homomorfica' en privacidad de IA?",
          de: "Was ist 'homomorphe Verschluesselung' im KI-Datenschutz?",
          nl: "Wat is 'homomorfe encryptie' in AI privacy?"
        },
        options: [
          { en: "Performing computations on encrypted data without decrypting it", es: "Realizar computaciones en datos encriptados sin desencriptarlos", de: "Berechnungen an verschluesselten Daten durchfuehren ohne sie zu entschluesseln", nl: "Berekeningen uitvoeren op versleutelde data zonder het te ontsleutelen" },
          { en: "Making all encryption methods the same", es: "Hacer que todos los metodos de encriptacion sean iguales", de: "Alle Verschluesselungsmethoden gleich machen", nl: "Alle encryptiemethoden gelijk maken" },
          { en: "Encrypting data multiple times", es: "Encriptar datos multiples veces", de: "Daten mehrfach verschluesseln", nl: "Data meerdere keren versleutelen" },
          { en: "Using the same encryption key everywhere", es: "Usar la misma clave de encriptacion en todas partes", de: "Den gleichen Verschluesselungsschluessel ueberall verwenden", nl: "Dezelfde encryptiesleutel overal gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Homomorphic encryption allows computations to be performed on encrypted data, producing encrypted results that match what would be obtained if the operations were performed on unencrypted data, enabling privacy-preserving AI.",
          es: "La encriptacion homomorfica permite que computaciones sean realizadas en datos encriptados, produciendo resultados encriptados que coinciden con lo que se obtendria si las operaciones fueran realizadas en datos no encriptados, habilitando IA que preserva privacidad.",
          de: "Homomorphe Verschluesselung erlaubt Berechnungen an verschluesselten Daten durchzufuehren, verschluesselte Ergebnisse produzierend die dem entsprechen was erhalten wuerde wenn die Operationen an unverschluesselten Daten durchgefuehrt wuerden, was datenschutzbewahrende KI ermoeglicht.",
          nl: "Homomorfe encryptie maakt het mogelijk om berekeningen uit te voeren op versleutelde data, wat versleutelde resultaten oplevert die overeenkomen met wat verkregen zou worden als de operaties uitgevoerd werden op onversleutelde data, wat privacy-bewarende AI mogelijk maakt."
        }
      },
      {
        question: {
          en: "What does 'data portability' mean for AI users?",
          es: "Que significa 'portabilidad de datos' para usuarios de IA?",
          de: "Was bedeutet 'Datenportabilitaet' fuer KI-Nutzer?",
          nl: "Wat betekent 'data portabiliteit' voor AI gebruikers?"
        },
        options: [
          { en: "The right to receive and transfer personal data in a usable format", es: "El derecho de recibir y transferir datos personales en un formato utilizable", de: "Das Recht persoenliche Daten in einem nutzbaren Format zu erhalten und zu uebertragen", nl: "Het recht om persoonlijke data te ontvangen en over te dragen in een bruikbaar formaat" },
          { en: "Carrying laptops around easily", es: "Llevar laptops facilmente", de: "Laptops einfach herumtragen", nl: "Laptops gemakkelijk meenemen" },
          { en: "Using mobile AI applications", es: "Usar aplicaciones moviles de IA", de: "Mobile KI-Anwendungen verwenden", nl: "Mobiele AI applicaties gebruiken" },
          { en: "Moving AI systems to different servers", es: "Mover sistemas de IA a diferentes servidores", de: "KI-Systeme auf verschiedene Server verschieben", nl: "AI systemen naar verschillende servers verplaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "Data portability gives individuals the right to obtain their personal data from one service provider and transfer it to another, promoting competition and user control over their data.",
          es: "La portabilidad de datos da a individuos el derecho de obtener sus datos personales de un proveedor de servicios y transferirlos a otro, promoviendo competencia y control del usuario sobre sus datos.",
          de: "Datenportabilitaet gibt Individuen das Recht ihre persoenlichen Daten von einem Dienstanbieter zu erhalten und zu einem anderen zu uebertragen, was Wettbewerb und Nutzerkontrolle ueber ihre Daten foerdert.",
          nl: "Data portabiliteit geeft individuen het recht om hun persoonlijke data van een serviceprovider te verkrijgen en over te dragen naar een andere, wat concurrentie en gebruikerscontrole over hun data bevordert."
        }
      },
      {
        question: {
          en: "What is 'consent fatigue' in digital privacy?",
          es: "Que es 'fatiga de consentimiento' en privacidad digital?",
          de: "Was ist 'Einwilligungsmuedigkeit' im digitalen Datenschutz?",
          nl: "Wat is 'toestemmingsmoeheid' in digitale privacy?"
        },
        options: [
          { en: "When users become overwhelmed by frequent consent requests and stop reading them", es: "Cuando usuarios se sienten abrumados por solicitudes frecuentes de consentimiento y dejan de leerlas", de: "Wenn Nutzer von haeufigen Einwilligungsanfragen ueberwaeltigt werden und aufhoeren sie zu lesen", nl: "Wanneer gebruikers overweldigd raken door frequente toestemmingsverzoeken en ophouden ze te lezen" },
          { en: "When AI systems get tired of asking for permission", es: "Cuando sistemas de IA se cansan de pedir permiso", de: "Wenn KI-Systeme muede werden um Erlaubnis zu bitten", nl: "Wanneer AI systemen moe worden van het vragen om toestemming" },
          { en: "When batteries run out from too many notifications", es: "Cuando las baterias se agotan por demasiadas notificaciones", de: "Wenn Batterien durch zu viele Benachrichtigungen leer werden", nl: "Wanneer batterijen leegraken door te veel meldingen" },
          { en: "When consent forms are too long", es: "Cuando formularios de consentimiento son demasiado largos", de: "Wenn Einwilligungsformulare zu lang sind", nl: "Wanneer toestemmingsformulieren te lang zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Consent fatigue occurs when users are repeatedly asked for consent and become desensitized, often agreeing without proper consideration, undermining the effectiveness of consent mechanisms.",
          es: "La fatiga de consentimiento ocurre cuando usuarios son repetidamente solicitados para consentimiento y se vuelven insensibilizados, a menudo aceptando sin consideracion apropiada, socavando la efectividad de mecanismos de consentimiento.",
          de: "Einwilligungsmuedigkeit tritt auf wenn Nutzer wiederholt um Einwilligung gebeten werden und desensibilisiert werden, oft zustimmend ohne angemessene Beruecksichtigung, was die Wirksamkeit von Einwilligungsmechanismen untergraebt.",
          nl: "Toestemmingsmoeheid ontstaat wanneer gebruikers herhaaldelijk om toestemming gevraagd worden en gedesensibiliseerd raken, vaak instemmend zonder juiste overweging, wat de effectiviteit van toestemmingsmechanismen ondermijnt."
        }
      },
      {
        question: {
          en: "What is 'privacy by design' in AI development?",
          es: "Que es 'privacidad por diseno' en desarrollo de IA?",
          de: "Was ist 'Privacy by Design' in der KI-Entwicklung?",
          nl: "Wat is 'privacy by design' in AI ontwikkeling?"
        },
        options: [
          { en: "Building privacy protection into systems from the beginning", es: "Construir proteccion de privacidad en sistemas desde el principio", de: "Datenschutz von Anfang an in Systeme einbauen", nl: "Privacy bescherming vanaf het begin in systemen inbouwen" },
          { en: "Designing beautiful privacy interfaces", es: "Disenar interfaces hermosas de privacidad", de: "Schoene Datenschutz-Schnittstellen entwerfen", nl: "Mooie privacy interfaces ontwerpen" },
          { en: "Only thinking about privacy after building systems", es: "Solo pensar en privacidad despues de construir sistemas", de: "Nur nach dem Systembau an Datenschutz denken", nl: "Alleen aan privacy denken na het bouwen van systemen" },
          { en: "Making privacy settings optional", es: "Hacer configuraciones de privacidad opcionales", de: "Datenschutzeinstellungen optional machen", nl: "Privacy instellingen optioneel maken" }
        ],
        correct: 0,
        explanation: {
          en: "Privacy by design is an approach that embeds privacy considerations into the entire system development lifecycle, ensuring privacy is a core feature rather than an afterthought.",
          es: "Privacidad por diseno es un enfoque que integra consideraciones de privacidad en todo el ciclo de vida de desarrollo del sistema, asegurando que la privacidad sea una caracteristica central en lugar de una reflexion tardía.",
          de: "Privacy by Design ist ein Ansatz der Datenschutzueberlegungen in den gesamten Systementwicklungslebenszyklus einbettet, wodurch sichergestellt wird dass Datenschutz ein Kernmerkmal ist anstatt ein nachtraeglicher Gedanke.",
          nl: "Privacy by design is een aanpak die privacy overwegingen integreert in de hele systeem ontwikkelingslevenscyclus, wat ervoor zorgt dat privacy een kernfunctie is in plaats van een bijgedachte."
        }
      },
      {
        question: {
          en: "What are 'privacy-preserving technologies' in AI?",
          es: "Que son 'tecnologias que preservan privacidad' en IA?",
          de: "Was sind 'datenschutzbewahrende Technologien' in der KI?",
          nl: "Wat zijn 'privacy-bewarende technologieën' in AI?"
        },
        options: [
          { en: "Technical methods that enable AI functionality while protecting personal data", es: "Metodos tecnicos que habilitan funcionalidad de IA mientras protegen datos personales", de: "Technische Methoden die KI-Funktionalitaet ermoeglichen waehrend Daten geschuetzt werden", nl: "Technische methoden die AI functionaliteit mogelijk maken terwijl persoonlijke data beschermd wordt" },
          { en: "Old technologies that respect privacy", es: "Tecnologias antiguas que respetan privacidad", de: "Alte Technologien die Privatsphaere respektieren", nl: "Oude technologieën die privacy respecteren" },
          { en: "Only using public data", es: "Solo usar datos publicos", de: "Nur oeffentliche Daten verwenden", nl: "Alleen publieke data gebruiken" },
          { en: "Avoiding all personal information", es: "Evitar toda informacion personal", de: "Alle persoenlichen Informationen vermeiden", nl: "Alle persoonlijke informatie vermijden" }
        ],
        correct: 0,
        explanation: {
          en: "Privacy-preserving technologies include techniques like differential privacy, homomorphic encryption, and secure multi-party computation that allow AI systems to work with data while maintaining privacy.",
          es: "Tecnologias que preservan privacidad incluyen tecnicas como privacidad diferencial, encriptacion homomorfica y computacion segura multi-parte que permiten a sistemas de IA trabajar con datos mientras mantienen privacidad.",
          de: "Datenschutzbewahrende Technologien umfassen Techniken wie Differential Privacy, homomorphe Verschluesselung und sichere Mehrparteien-Berechnung die KI-Systemen erlauben mit Daten zu arbeiten waehrend Privatsphaere erhalten bleibt.",
          nl: "Privacy-bewarende technologieën omvatten technieken zoals differential privacy, homomorfe encryptie en veilige multi-party berekening die AI systemen toestaan om met data te werken terwijl privacy behouden wordt."
        }
      },
      {
        question: {
          en: "What is 'data governance' in AI systems?",
          es: "Que es 'gobernanza de datos' en sistemas de IA?",
          de: "Was ist 'Daten-Governance' in KI-Systemen?",
          nl: "Wat is 'data governance' in AI systemen?"
        },
        options: [
          { en: "Policies and processes for managing data throughout its lifecycle", es: "Politicas y procesos para gestionar datos a lo largo de su ciclo de vida", de: "Richtlinien und Prozesse zur Datenverwaltung waehrend ihres Lebenszyklus", nl: "Beleid en processen voor het beheren van data gedurende de levenscyclus" },
          { en: "Government control over all data", es: "Control gubernamental sobre todos los datos", de: "Regierungskontrolle ueber alle Daten", nl: "Overheidscontrole over alle data" },
          { en: "Making data publicly available", es: "Hacer datos disponibles publicamente", de: "Daten oeffentlich verfuegbar machen", nl: "Data publiek beschikbaar maken" },
          { en: "Using AI to govern countries", es: "Usar IA para gobernar paises", de: "KI verwenden um Laender zu regieren", nl: "AI gebruiken om landen te besturen" }
        ],
        correct: 0,
        explanation: {
          en: "Data governance establishes policies, standards, and procedures for data collection, storage, usage, sharing, and disposal to ensure compliance, quality, and security throughout the data lifecycle.",
          es: "La gobernanza de datos establece politicas, estandares y procedimientos para recoleccion, almacenamiento, uso, compartir y eliminacion de datos para asegurar cumplimiento, calidad y seguridad a lo largo del ciclo de vida de los datos.",
          de: "Daten-Governance etabliert Richtlinien, Standards und Verfahren fuer Datensammlung, -speicherung, -nutzung, -austausch und -entsorgung um Compliance, Qualitaet und Sicherheit waehrend des Datenlebenszyklus sicherzustellen.",
          nl: "Data governance stelt beleid, standaarden en procedures vast voor data verzameling, opslag, gebruik, deling en verwijdering om compliance, kwaliteit en beveiliging gedurende de data levenscyclus te waarborgen."
        }
      },
      {
        question: {
          en: "What is 'data subject rights' under privacy laws?",
          es: "Que son 'derechos del sujeto de datos' bajo leyes de privacidad?",
          de: "Was sind 'Rechte der betroffenen Person' unter Datenschutzgesetzen?",
          nl: "Wat zijn 'rechten van betrokkenen' onder privacy wetgeving?"
        },
        options: [
          { en: "Legal rights individuals have regarding their personal data", es: "Derechos legales que individuos tienen respecto a sus datos personales", de: "Gesetzliche Rechte die Individuen bezueglich ihrer persoenlichen Daten haben", nl: "Wettelijke rechten die individuen hebben betreffende hun persoonlijke data" },
          { en: "Rights of AI systems to access data", es: "Derechos de sistemas de IA para acceder datos", de: "Rechte von KI-Systemen auf Datenzugriff", nl: "Rechten van AI systemen om data te benaderen" },
          { en: "Rights to study any subject", es: "Derechos de estudiar cualquier tema", de: "Rechte jedes Thema zu studieren", nl: "Rechten om elk onderwerp te bestuderen" },
          { en: "Rights of data scientists", es: "Derechos de cientificos de datos", de: "Rechte von Datenwissenschaftlern", nl: "Rechten van data scientists" }
        ],
        correct: 0,
        explanation: {
          en: "Data subject rights include rights to access, rectification, erasure, portability, and objection to processing of personal data, giving individuals control over how their data is used.",
          es: "Los derechos del sujeto de datos incluyen derechos de acceso, rectificacion, eliminacion, portabilidad y objecion al procesamiento de datos personales, dando control a individuos sobre como se usan sus datos.",
          de: "Rechte der betroffenen Person umfassen Rechte auf Zugang, Berichtigung, Loeschung, Portabilitaet und Widerspruch gegen Verarbeitung persoenlicher Daten, wodurch Individuen Kontrolle ueber die Nutzung ihrer Daten erhalten.",
          nl: "Rechten van betrokkenen omvatten rechten op toegang, rectificatie, verwijdering, portabiliteit en bezwaar tegen verwerking van persoonlijke data, waardoor individuen controle krijgen over hoe hun data gebruikt wordt."
        }
      },
      {
        question: {
          en: "What is 'privacy impact assessment' for AI projects?",
          es: "Que es 'evaluacion de impacto de privacidad' para proyectos de IA?",
          de: "Was ist 'Datenschutz-Folgenabschaetzung' fuer KI-Projekte?",
          nl: "Wat is 'privacy impact assessment' voor AI projecten?"
        },
        options: [
          { en: "Systematic evaluation of privacy risks before implementing AI systems", es: "Evaluacion sistematica de riesgos de privacidad antes de implementar sistemas de IA", de: "Systematische Bewertung von Datenschutzrisiken vor Implementierung von KI-Systemen", nl: "Systematische evaluatie van privacy risico's voor het implementeren van AI systemen" },
          { en: "Measuring how much privacy costs", es: "Medir cuanto cuesta la privacidad", de: "Messen wie viel Privatsphaere kostet", nl: "Meten hoeveel privacy kost" },
          { en: "Testing if privacy features work", es: "Probar si caracteristicas de privacidad funcionan", de: "Testen ob Datenschutzfunktionen funktionieren", nl: "Testen of privacy functies werken" },
          { en: "Counting privacy violations", es: "Contar violaciones de privacidad", de: "Datenschutzverletzungen zaehlen", nl: "Privacy schendingen tellen" }
        ],
        correct: 0,
        explanation: {
          en: "Privacy impact assessments identify and evaluate potential privacy risks of AI systems before deployment, helping organizations implement appropriate safeguards and comply with regulations.",
          es: "Las evaluaciones de impacto de privacidad identifican y evaluan riesgos potenciales de privacidad de sistemas de IA antes del despliegue, ayudando a organizaciones implementar salvaguardas apropiadas y cumplir con regulaciones.",
          de: "Datenschutz-Folgenabschaetzungen identifizieren und bewerten potentielle Datenschutzrisiken von KI-Systemen vor dem Einsatz, wodurch Organisationen geholfen wird angemessene Sicherheitsvorkehrungen zu implementieren und Vorschriften einzuhalten.",
          nl: "Privacy impact assessments identificeren en evalueren potentiele privacy risico's van AI systemen voor implementatie, wat organisaties helpt om juiste waarborgen te implementeren en aan regelgeving te voldoen."
        }
      },
      {
        question: {
          en: "What is 'data minimization' in relation to AI model training?",
          es: "Que es 'minimizacion de datos' en relacion al entrenamiento de modelos de IA?",
          de: "Was ist 'Datenminimierung' in Bezug auf KI-Modelltraining?",
          nl: "Wat is 'data minimalisatie' in relatie tot AI model training?"
        },
        options: [
          { en: "Using only necessary data features and samples for training", es: "Usar solo caracteristicas y muestras de datos necesarias para entrenamiento", de: "Nur notwendige Datenmerkmale und Stichproben fuer Training verwenden", nl: "Alleen noodzakelijke data kenmerken en samples gebruiken voor training" },
          { en: "Training with the smallest possible dataset", es: "Entrenar con el conjunto de datos mas pequeno posible", de: "Mit dem kleinstmoeglichen Datensatz trainieren", nl: "Trainen met de kleinst mogelijke dataset" },
          { en: "Reducing model complexity", es: "Reducir complejidad del modelo", de: "Modellkomplexitaet reduzieren", nl: "Model complexiteit verminderen" },
          { en: "Using compressed data formats", es: "Usar formatos de datos comprimidos", de: "Komprimierte Datenformate verwenden", nl: "Gecomprimeerde data formaten gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Data minimization in AI training involves using only the data features and samples that are necessary and relevant for the specific AI task, reducing privacy exposure while maintaining model effectiveness.",
          es: "La minimizacion de datos en entrenamiento de IA involucra usar solo las caracteristicas y muestras de datos que son necesarias y relevantes para la tarea especifica de IA, reduciendo exposicion de privacidad mientras mantiene efectividad del modelo.",
          de: "Datenminimierung im KI-Training beinhaltet nur die Datenmerkmale und Stichproben zu verwenden die fuer die spezifische KI-Aufgabe notwendig und relevant sind, wodurch Datenschutzexposition reduziert wird waehrend Modelleffektivitaet erhalten bleibt.",
          nl: "Data minimalisatie in AI training houdt in dat alleen de data kenmerken en samples gebruikt worden die noodzakelijk en relevant zijn voor de specifieke AI taak, waardoor privacy blootstelling verminderd wordt terwijl model effectiviteit behouden blijft."
        }
      },
      {
        question: {
          en: "What is 'surveillance capitalism' in the context of AI and privacy?",
          es: "Que es 'capitalismo de vigilancia' en el contexto de IA y privacidad?",
          de: "Was ist 'Ueberwachungskapitalismus' im Kontext von KI und Privatsphaere?",
          nl: "Wat is 'surveillance kapitalisme' in de context van AI en privacy?"
        },
        options: [
          { en: "Business models that profit from collecting and analyzing personal data", es: "Modelos de negocio que se benefician de recolectar y analizar datos personales", de: "Geschaeftsmodelle die von der Sammlung und Analyse persoenlicher Daten profitieren", nl: "Bedrijfsmodellen die profiteren van het verzamelen en analyseren van persoonlijke data" },
          { en: "Using AI cameras for security", es: "Usar camaras de IA para seguridad", de: "KI-Kameras fuer Sicherheit verwenden", nl: "AI camera's gebruiken voor beveiliging" },
          { en: "Government surveillance systems", es: "Sistemas de vigilancia gubernamental", de: "Regierungs-Ueberwachungssysteme", nl: "Overheids surveillance systemen" },
          { en: "Monitoring employee productivity", es: "Monitorear productividad de empleados", de: "Mitarbeiterproduktivitaet ueberwachen", nl: "Werknemersproductiviteit monitoren" }
        ],
        correct: 0,
        explanation: {
          en: "Surveillance capitalism refers to business models where companies extract value from personal data through continuous monitoring and behavioral prediction, often without users' full awareness or meaningful consent.",
          es: "El capitalismo de vigilancia se refiere a modelos de negocio donde companias extraen valor de datos personales a traves de monitoreo continuo y prediccion de comportamiento, a menudo sin conciencia completa de usuarios o consentimiento significativo.",
          de: "Ueberwachungskapitalismus bezieht sich auf Geschaeftsmodelle wo Unternehmen Wert aus persoenlichen Daten durch kontinuierliche Ueberwachung und Verhaltensvorhersage extrahieren, oft ohne vollstaendiges Bewusstsein der Nutzer oder bedeutsame Zustimmung.",
          nl: "Surveillance kapitalisme verwijst naar bedrijfsmodellen waar bedrijven waarde extraheren uit persoonlijke data door continue monitoring en gedragsvoorspelling, vaak zonder volledig bewustzijn van gebruikers of betekenisvolle toestemming."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();