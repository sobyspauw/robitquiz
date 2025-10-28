// AI Future Quiz - Level 1: Basic AI Future Concepts
(function() {
  const level1 = {
    name: {
      en: "AI Future Level 1",
      es: "Futuro de IA Nivel 1",
      de: "KI-Zukunft Stufe 1",
      nl: "AI Toekomst Level 1"
    },
    questions: [
      {
        question: {
          en: "What is one potential benefit of AI in the future?",
          es: "¿Cuál es un beneficio potencial de la IA en el futuro?",
          de: "Was ist ein potenzieller Vorteil von KI in der Zukunft?",
          nl: "Wat is een mogelijk voordeel van AI in de toekomst?"
        },
        options: [
          { en: "Helping doctors diagnose diseases faster", es: "Ayudar a doctores a diagnosticar enfermedades más rápido", de: "Ärzten helfen, Krankheiten schneller zu diagnostizieren", nl: "Dokters helpen ziektes sneller te diagnosticeren" },
          { en: "Making humans obsolete", es: "Hacer a los humanos obsoletos", de: "Menschen überflüssig machen", nl: "Mensen overbodig maken" },
          { en: "Eliminating all jobs", es: "Eliminar todos los empleos", de: "Alle Arbeitsplätze eliminieren", nl: "Alle banen elimineren" },
          { en: "Controlling human emotions", es: "Controlar emociones humanas", de: "Menschliche Emotionen kontrollieren", nl: "Menselijke emoties controleren" }
        ],
        correct: 0,
        explanation: {
          en: "AI can analyze medical data much faster than humans, potentially catching diseases earlier when they're easier to treat.",
          es: "La IA puede analizar datos médicos mucho más rápido que los humanos, potencialmente detectando enfermedades antes cuando son más fáciles de tratar.",
          de: "KI kann medizinische Daten viel schneller analysieren als Menschen, wodurch Krankheiten frÃ¼her erkannt werden kÃ¶nnen, wenn sie leichter zu behandeln sind.",
          nl: "AI kan medische gegevens veel sneller analyseren dan mensen, waardoor ziektes mogelijk eerder worden ontdekt wanneer ze gemakkelijker te behandelen zijn."
        }
      },
      {
        question: {
          en: "What is meant by 'smart cities' with AI?",
          es: "Â¿QuÃ© se entiende por 'ciudades inteligentes' con IA?",
          de: "Was ist mit 'Smart Cities' mit KI gemeint?",
          nl: "Wat wordt bedoeld met 'slimme steden' met AI?"
        },
        options: [
          { en: "Cities that use AI to manage traffic, energy, and services efficiently", es: "Ciudades que usan IA para gestionar trÃ¡fico, energÃ­a y servicios eficientemente", de: "StÃ¤dte die KI nutzen um Verkehr, Energie und Dienste effizient zu verwalten", nl: "Steden die AI gebruiken om verkeer, energie en diensten efficiÃ«nt te beheren" },
          { en: "Cities where only smart people live", es: "Ciudades donde solo vive gente inteligente", de: "StÃ¤dte wo nur kluge Menschen leben", nl: "Steden waar alleen slimme mensen wonen" },
          { en: "Cities with the fastest internet", es: "Ciudades con el internet más rápido", de: "StÃ¤dte mit dem schnellsten Internet", nl: "Steden met het snelste internet" },
          { en: "Cities that teach AI to robots", es: "Ciudades que enseÃ±an IA a robots", de: "StÃ¤dte die KI an Roboter lehren", nl: "Steden die AI aan robots leren" }
        ],
        correct: 0,
        explanation: {
          en: "Smart cities use AI to optimize everything from traffic lights to energy distribution, making urban life more efficient and sustainable.",
          es: "Las ciudades inteligentes usan IA para optimizar desde semÃ¡foros hasta distribuciÃ³n de energÃ­a, haciendo la vida urbana más eficiente y sostenible.",
          de: "Smart Cities nutzen KI um alles von Ampeln bis zur Energieverteilung zu optimieren, wodurch das stÃ¤dtische Leben effizienter und nachhaltiger wird.",
          nl: "Slimme steden gebruiken AI om alles van verkeerslichten tot energiedistributie te optimaliseren, waardoor het stadsleven efficiÃ«nter en duurzamer wordt."
        }
      },
      {
        question: {
          en: "How might AI help with climate change in the future?",
          es: "Â¿CÃ³mo podrÃ­a la IA ayudar con el cambio climÃ¡tico en el futuro?",
          de: "Wie kÃ¶nnte KI in Zukunft beim Klimawandel helfen?",
          nl: "Hoe zou AI in de toekomst kunnen helpen met klimaatverandering?"
        },
        options: [
          { en: "Optimizing energy use and predicting weather patterns", es: "Optimizando uso de energÃ­a y prediciendo patrones climÃ¡ticos", de: "Energieverbrauch optimieren und Wettermuster vorhersagen", nl: "Energiegebruik optimaliseren en weerpatronen voorspellen" },
          { en: "Making the weather colder", es: "Haciendo el clima más frÃ­o", de: "Das Wetter kÃ¤lter machen", nl: "Het weer kouder maken" },
          { en: "Stopping all factories", es: "Parando todas las fÃ¡bricas", de: "Alle Fabriken stoppen", nl: "Alle fabriken stoppen" },
          { en: "Moving people to Mars", es: "Llevando gente a Marte", de: "Menschen zum Mars bringen", nl: "Mensen naar Mars verhuizen" }
        ],
        correct: 0,
        explanation: {
          en: "AI can help reduce energy waste by optimizing power grids and predict climate changes to help us prepare better.",
          es: "La IA puede ayudar a reducir el desperdicio de energÃ­a optimizando redes elÃ©ctricas y predecir cambios climÃ¡ticos para ayudarnos a prepararnos mejor.",
          de: "KI kann helfen Energieverschwendung zu reduzieren durch Optimierung von Stromnetzen und KlimaÃ¤nderungen vorhersagen um uns besser vorzubereiten.",
          nl: "AI kan helpen energieverspilling te verminderen door stroomnetten te optimaliseren en klimaatveranderingen voorspellen om ons beter voor te bereiden."
        }
      },
      {
        question: {
          en: "What are 'autonomous vehicles' expected to do in the future?",
          es: "Â¿QuÃ© se espera que hagan los 'vehÃ­culos autÃ³nomos' en el futuro?",
          de: "Was sollen 'autonome Fahrzeuge' in der Zukunft tun?",
          nl: "Wat wordt van 'autonome voertuigen' verwacht in de toekomst?"
        },
        options: [
          { en: "Drive themselves without human control", es: "Conducirse solos sin control humano", de: "Sich selbst ohne menschliche Kontrolle fahren", nl: "Zichzelf besturen zonder menselijke controle" },
          { en: "Fly in the air", es: "Volar en el aire", de: "In der Luft fliegen", nl: "Door de lucht vliegen" },
          { en: "Swim underwater", es: "Nadar bajo el agua", de: "Unter Wasser schwimmen", nl: "Onderwater zwemmen" },
          { en: "Transform into robots", es: "Transformarse en robots", de: "Sich in Roboter verwandeln", nl: "Transformeren in robots" }
        ],
        correct: 0,
        explanation: {
          en: "Autonomous vehicles use AI sensors and decision-making to navigate roads safely without human drivers.",
          es: "Los vehÃ­culos autÃ³nomos usan sensores IA y toma de decisiones para navegar carreteras de manera segura sin conductores humanos.",
          de: "Autonome Fahrzeuge nutzen KI-Sensoren und Entscheidungsfindung um StraÃŸen sicher ohne menschliche Fahrer zu navigieren.",
          nl: "Autonome voertuigen gebruiken AI-sensoren en besluitvorming om wegen veilig te navigeren zonder menselijke bestuurders."
        }
      },
      {
        question: {
          en: "What might personal AI assistants do better in the future?",
          es: "Â¿QuÃ© podrÃ­an hacer mejor los asistentes IA personales en el futuro?",
          de: "Was kÃ¶nnten persÃ¶nliche KI-Assistenten in der Zukunft besser machen?",
          nl: "Wat zouden persoonlijke AI-assistenten in de toekomst beter kunnen doen?"
        },
        options: [
          { en: "Understand context and have natural conversations", es: "Entender contexto y tener conversaciones naturales", de: "Kontext verstehen und natÃ¼rliche GesprÃ¤che fÃ¼hren", nl: "Context begrijpen en natuurlijke gesprekken voeren" },
          { en: "Cook meals physically", es: "Cocinar comidas fÃ­sicamente", de: "Mahlzeiten physisch kochen", nl: "Maaltijden fysiek koken" },
          { en: "Replace all human friends", es: "Reemplazar todos los amigos humanos", de: "Alle menschlichen Freunde ersetzen", nl: "Alle menselijke vrienden vervangen" },
          { en: "Control people's thoughts", es: "Controlar los pensamientos de la gente", de: "Die Gedanken der Menschen kontrollieren", nl: "De gedachten van mensen controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Future AI assistants will better understand what we mean and respond more naturally, like having a conversation with a friend.",
          es: "Los futuros asistentes IA entenderÃ¡n mejor lo que queremos decir y responderÃ¡n más naturalmente, como tener una conversaciÃ³n con un amigo.",
          de: "ZukÃ¼nftige KI-Assistenten werden besser verstehen was wir meinen und natÃ¼rlicher antworten, wie ein GesprÃ¤ch mit einem Freund.",
          nl: "Toekomstige AI-assistenten zullen beter begrijpen wat we bedoelen en natuurlijker reageren, zoals een gesprek met een vriend."
        }
      },
      {
        question: {
          en: "What is 'AI tutoring' and how might it change education by 2030?",
          es: "¿Qué es la 'tutoría de IA' y cómo podría cambiar la educación para 2030?",
          de: "Was ist 'KI-Nachhilfe' und wie könnte sie Bildung bis 2030 verändern?",
          nl: "Wat is 'AI-bijles' en hoe zou het onderwijs kunnen veranderen tegen 2030?"
        },
        options: [
          { en: "Personalized learning that adapts to each student's pace and style", es: "Aprendizaje personalizado que se adapta al ritmo y estilo de cada estudiante", de: "Personalisiertes Lernen das sich an das Tempo und den Stil jedes Schülers anpasst", nl: "Gepersonaliseerd leren dat zich aanpast aan het tempo en de stijl van elke student" },
          { en: "Robots that physically teach in classrooms", es: "Robots que enseñan físicamente en las aulas", de: "Roboter die physisch in Klassenzimmern unterrichten", nl: "Robots die fysiek lesgeven in klaslokalen" },
          { en: "AI that does all homework for students", es: "IA que hace toda la tarea para los estudiantes", de: "KI die alle Hausaufgaben für Schüler macht", nl: "AI die alle huiswerk voor studenten maakt" },
          { en: "Computer programs that only test students", es: "Programas de computadora que solo examinan estudiantes", de: "Computerprogramme die nur Schüler testen", nl: "Computerprogramma's die alleen studenten testen" }
        ],
        correct: 0,
        explanation: {
          en: "AI tutoring systems can analyze how individual students learn best and provide customized instruction, practice problems, and feedback to help each student succeed at their own pace.",
          es: "Los sistemas de tutoría de IA pueden analizar cómo aprenden mejor los estudiantes individuales y proporcionar instrucción personalizada, problemas de práctica y retroalimentación para ayudar a cada estudiante a tener éxito a su propio ritmo.",
          de: "KI-Nachhilfesysteme können analysieren wie einzelne Schüler am besten lernen und maßgeschneiderte Anweisungen, Übungsaufgaben und Feedback bieten um jedem Schüler zu helfen in seinem eigenen Tempo erfolgreich zu sein.",
          nl: "AI-bijlessystemen kunnen analyseren hoe individuele studenten het beste leren en aangepaste instructie, oefenproblemen en feedback bieden om elke student te helpen slagen in hun eigen tempo."
        }
      },
      {
        question: {
          en: "How might AI help elderly people in their daily lives by 2025?",
          es: "¿Cómo podría la IA ayudar a las personas mayores en su vida diaria para 2025?",
          de: "Wie könnte KI älteren Menschen bis 2025 in ihrem täglichen Leben helfen?",
          nl: "Hoe zou AI ouderen kunnen helpen in hun dagelijks leven tegen 2025?"
        },
        options: [
          { en: "Smart home systems that remind about medications and detect emergencies", es: "Sistemas de hogar inteligente que recuerdan sobre medicamentos y detectan emergencias", de: "Intelligente Haussysteme die an Medikamente erinnern und Notfälle erkennen", nl: "Slimme huissystemen die herinneren aan medicijnen en noodsituaties detecteren" },
          { en: "AI that makes people younger", es: "IA que hace a las personas más jóvenes", de: "KI die Menschen jünger macht", nl: "AI die mensen jonger maakt" },
          { en: "Robots that replace all human caregivers", es: "Robots que reemplazan a todos los cuidadores humanos", de: "Roboter die alle menschlichen Pfleger ersetzen", nl: "Robots die alle menselijke verzorgers vervangen" },
          { en: "AI that controls elderly people's decisions", es: "IA que controla las decisiones de las personas mayores", de: "KI die die Entscheidungen älterer Menschen kontrolliert", nl: "AI die de beslissingen van ouderen controleert" }
        ],
        correct: 0,
        explanation: {
          en: "AI can help elderly people maintain independence by monitoring their health, reminding them about daily tasks, detecting falls or medical emergencies, and providing companionship through voice assistants.",
          es: "La IA puede ayudar a las personas mayores a mantener la independencia monitoreando su salud, recordándoles las tareas diarias, detectando caídas o emergencias médicas y brindando compañía a través de asistentes de voz.",
          de: "KI kann älteren Menschen helfen ihre Unabhängigkeit zu bewahren indem sie ihre Gesundheit überwacht, sie an tägliche Aufgaben erinnert, Stürze oder medizinische Notfälle erkennt und Gesellschaft durch Sprachassistenten bietet.",
          nl: "AI kan ouderen helpen hun onafhankelijkheid te behouden door hun gezondheid te monitoren, hen te herinneren aan dagelijkse taken, vallen of medische noodsituaties te detecteren en gezelschap te bieden via spraakassistenten."
        }
      },
      {
        question: {
          en: "What are 'recommendation algorithms' and how do they affect our choices?",
          es: "¿Qué son los 'algoritmos de recomendación' y cómo afectan nuestras decisiones?",
          de: "Was sind 'Empfehlungsalgorithmen' und wie beeinflussen sie unsere Entscheidungen?",
          nl: "Wat zijn 'aanbevelingsalgoritmen' en hoe beïnvloeden ze onze keuzes?"
        },
        options: [
          { en: "AI systems that suggest content, products, or services based on our preferences", es: "Sistemas de IA que sugieren contenido, productos o servicios basados en nuestras preferencias", de: "KI-Systeme die Inhalte, Produkte oder Dienstleistungen basierend auf unseren Präferenzen vorschlagen", nl: "AI-systemen die inhoud, producten of diensten voorstellen op basis van onze voorkeuren" },
          { en: "Programs that force us to buy specific items", es: "Programas que nos obligan a comprar artículos específicos", de: "Programme die uns zwingen bestimmte Artikel zu kaufen", nl: "Programma's die ons dwingen specifieke items te kopen" },
          { en: "AI that chooses our friends for us", es: "IA que elige nuestros amigos por nosotros", de: "KI die unsere Freunde für uns auswählt", nl: "AI die onze vrienden voor ons kiest" },
          { en: "Systems that only show us advertisements", es: "Sistemas que solo nos muestran publicidad", de: "Systeme die uns nur Werbung zeigen", nl: "Systemen die ons alleen advertenties tonen" }
        ],
        correct: 0,
        explanation: {
          en: "Recommendation algorithms analyze our past behavior, preferences, and similar users' patterns to suggest movies, music, products, or content we might like, influencing what we discover and consume.",
          es: "Los algoritmos de recomendación analizan nuestro comportamiento pasado, preferencias y patrones de usuarios similares para sugerir películas, música, productos o contenido que podríamos gustar, influyendo en lo que descubrimos y consumimos.",
          de: "Empfehlungsalgorithmen analysieren unser vergangenes Verhalten, Präferenzen und Muster ähnlicher Nutzer um Filme, Musik, Produkte oder Inhalte vorzuschlagen die uns gefallen könnten, wodurch sie beeinflussen was wir entdecken und konsumieren.",
          nl: "Aanbevelingsalgoritmen analyseren ons vorige gedrag, voorkeuren en patronen van vergelijkbare gebruikers om films, muziek, producten of inhoud voor te stellen die we leuk zouden kunnen vinden, waarbij ze beïnvloeden wat we ontdekken en consumeren."
        }
      },
      {
        question: {
          en: "How might 'voice assistants' become more helpful in the near future?",
          es: "¿Cómo podrían los 'asistentes de voz' volverse más útiles en el futuro cercano?",
          de: "Wie könnten 'Sprachassistenten' in naher Zukunft hilfreicher werden?",
          nl: "Hoe zouden 'spraakassistenten' nuttiger kunnen worden in de nabije toekomst?"
        },
        options: [
          { en: "Understanding emotions and having more natural conversations", es: "Entendiendo emociones y teniendo conversaciones más naturales", de: "Emotionen verstehen und natürlichere Gespräche führen", nl: "Emoties begrijpen en meer natuurlijke gesprekken voeren" },
          { en: "Taking physical control of our devices", es: "Tomando control físico de nuestros dispositivos", de: "Physische Kontrolle über unsere Geräte übernehmen", nl: "Fysieke controle over onze apparaten nemen" },
          { en: "Replacing all human communication", es: "Reemplazando toda la comunicación humana", de: "Alle menschliche Kommunikation ersetzen", nl: "Alle menselijke communicatie vervangen" },
          { en: "Only working when connected to the internet", es: "Solo funcionando cuando está conectado a internet", de: "Nur funktionieren wenn mit dem Internet verbunden", nl: "Alleen werken wanneer verbonden met internet" }
        ],
        correct: 0,
        explanation: {
          en: "Future voice assistants will better understand context, emotions, and nuanced requests, enabling more natural conversations and proactive assistance based on our needs and preferences.",
          es: "Los futuros asistentes de voz entenderán mejor el contexto, las emociones y las solicitudes matizadas, permitiendo conversaciones más naturales y asistencia proactiva basada en nuestras necesidades y preferencias.",
          de: "Zukünftige Sprachassistenten werden Kontext, Emotionen und nuancierte Anfragen besser verstehen, wodurch natürlichere Gespräche und proaktive Hilfe basierend auf unseren Bedürfnissen und Präferenzen ermöglicht werden.",
          nl: "Toekomstige spraakassistenten zullen context, emoties en genuanceerde verzoeken beter begrijpen, waardoor meer natuurlijke gesprekken en proactieve hulp mogelijk wordt op basis van onze behoeften en voorkeuren."
        }
      },
      {
        question: {
          en: "What is 'predictive text' and how might it evolve?",
          es: "¿Qué es el 'texto predictivo' y cómo podría evolucionar?",
          de: "Was ist 'vorausschauender Text' und wie könnte er sich entwickeln?",
          nl: "Wat is 'voorspellende tekst' en hoe zou het kunnen evolueren?"
        },
        options: [
          { en: "AI that suggests words and completes sentences as you type", es: "IA que sugiere palabras y completa oraciones mientras escribes", de: "KI die Wörter vorschlägt und Sätze vervollständigt während du tippst", nl: "AI die woorden voorstelt en zinnen voltooit terwijl je typt" },
          { en: "Software that predicts the weather from text", es: "Software que predice el clima a partir del texto", de: "Software die das Wetter aus Text vorhersagt", nl: "Software die het weer voorspelt uit tekst" },
          { en: "AI that writes everything for you automatically", es: "IA que escribe todo por ti automáticamente", de: "KI die automatisch alles für dich schreibt", nl: "AI die automatisch alles voor je schrijft" },
          { en: "Programs that only correct spelling mistakes", es: "Programas que solo corrigen errores de ortografía", de: "Programme die nur Rechtschreibfehler korrigieren", nl: "Programma's die alleen spelfouten corrigeren" }
        ],
        correct: 0,
        explanation: {
          en: "Predictive text uses AI to anticipate what you're trying to type and suggest completions, helping you write faster and more accurately. Future versions will understand context better and offer more relevant suggestions.",
          es: "El texto predictivo usa IA para anticipar lo que estás tratando de escribir y sugerir finalizaciones, ayudándote a escribir más rápido y con mayor precisión. Las versiones futuras entenderán mejor el contexto y ofrecerán sugerencias más relevantes.",
          de: "Vorausschauender Text nutzt KI um zu antizipieren was du zu tippen versuchst und Vervollständigungen vorzuschlagen, wodurch du schneller und genauer schreiben kannst. Zukünftige Versionen werden Kontext besser verstehen und relevantere Vorschläge bieten.",
          nl: "Voorspellende tekst gebruikt AI om te anticiperen wat je probeert te typen en voltooiingen voor te stellen, waardoor je sneller en nauwkeuriger kunt schrijven. Toekomstige versies zullen context beter begrijpen en meer relevante suggesties bieden."
        }
      },
      {
        question: {
          en: "How might AI improve online shopping experiences?",
          es: "¿Cómo podría la IA mejorar las experiencias de compra en línea?",
          de: "Wie könnte KI Online-Shopping-Erlebnisse verbessern?",
          nl: "Hoe zou AI online winkelervaringen kunnen verbeteren?"
        },
        options: [
          { en: "Virtual try-on features and personalized product recommendations", es: "Funciones de prueba virtual y recomendaciones personalizadas de productos", de: "Virtuelle Anprobe-Funktionen und personalisierte Produktempfehlungen", nl: "Virtuele pasfuncties en gepersonaliseerde productaanbevelingen" },
          { en: "AI that buys everything without asking", es: "IA que compra todo sin preguntar", de: "KI die alles ohne zu fragen kauft", nl: "AI die alles koopt zonder te vragen" },
          { en: "Making all online stores look identical", es: "Haciendo que todas las tiendas online se vean idénticas", de: "Alle Online-Shops identisch aussehen lassen", nl: "Alle online winkels er identiek uit laten zien" },
          { en: "Eliminating all human customer service", es: "Eliminando todo el servicio al cliente humano", de: "Allen menschlichen Kundenservice eliminieren", nl: "Alle menselijke klantenservice elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "AI can enhance online shopping through virtual try-on technology, better size recommendations, personalized product suggestions, chatbot assistance, and improved search functionality to find exactly what you're looking for.",
          es: "La IA puede mejorar las compras online a través de tecnología de prueba virtual, mejores recomendaciones de talla, sugerencias personalizadas de productos, asistencia de chatbot y funcionalidad de búsqueda mejorada para encontrar exactamente lo que buscas.",
          de: "KI kann Online-Shopping durch virtuelle Anprobe-Technologie, bessere Größenempfehlungen, personalisierte Produktvorschläge, Chatbot-Hilfe und verbesserte Suchfunktionalität verbessern um genau das zu finden was du suchst.",
          nl: "AI kan online winkelen verbeteren door virtuele pasbeurten, betere maataanbevelingen, gepersonaliseerde productsuggesties, chatbot-assistentie en verbeterde zoekfunctionaliteit om precies te vinden wat je zoekt."
        }
      },
      {
        question: {
          en: "What role might AI play in entertainment and gaming?",
          es: "¿Qué papel podría jugar la IA en el entretenimiento y los juegos?",
          de: "Welche Rolle könnte KI in Unterhaltung und Gaming spielen?",
          nl: "Welke rol zou AI kunnen spelen in entertainment en gaming?"
        },
        options: [
          { en: "Creating dynamic storylines and personalized gaming experiences", es: "Creando líneas argumentales dinámicas y experiencias de juego personalizadas", de: "Dynamische Handlungsstränge und personalisierte Gaming-Erfahrungen schaffen", nl: "Dynamische verhaallijnen en gepersonaliseerde game-ervaringen creëren" },
          { en: "Making all games exactly the same", es: "Haciendo que todos los juegos sean exactamente iguales", de: "Alle Spiele genau gleich machen", nl: "Alle games precies hetzelfde maken" },
          { en: "Preventing people from playing games", es: "Impidiendo que la gente juegue", de: "Menschen vom Spielen abhalten", nl: "Mensen ervan weerhouden games te spelen" },
          { en: "Only creating games about AI", es: "Solo creando juegos sobre IA", de: "Nur Spiele über KI erstellen", nl: "Alleen games over AI maken" }
        ],
        correct: 0,
        explanation: {
          en: "AI can create more engaging entertainment by generating unique storylines, adapting game difficulty to player skill, creating intelligent non-player characters, and personalizing content based on individual preferences.",
          es: "La IA puede crear entretenimiento más atractivo generando líneas argumentales únicas, adaptando la dificultad del juego a la habilidad del jugador, creando personajes no jugadores inteligentes y personalizando contenido basado en preferencias individuales.",
          de: "KI kann ansprechendere Unterhaltung schaffen durch das Generieren einzigartiger Handlungsstränge, Anpassen der Spielschwierigkeit an die Spielerfähigkeiten, Schaffen intelligenter Nicht-Spieler-Charaktere und Personalisieren von Inhalten basierend auf individuellen Vorlieben.",
          nl: "AI kan boeiendere entertainment creëren door unieke verhaallijnen te genereren, speldifficulteit aan te passen aan spelersvaardigheden, intelligente niet-speler personages te maken en inhoud te personaliseren op basis van individuele voorkeuren."
        }
      },
      {
        question: {
          en: "How might 'AI translators' change international communication?",
          es: "¿Cómo podrían los 'traductores de IA' cambiar la comunicación internacional?",
          de: "Wie könnten 'KI-Übersetzer' die internationale Kommunikation verändern?",
          nl: "Hoe zouden 'AI-vertalers' internationale communicatie kunnen veranderen?"
        },
        options: [
          { en: "Real-time translation breaking down language barriers worldwide", es: "Traducción en tiempo real rompiendo barreras idiomáticas mundialmente", de: "Echtzeitübersetzung bricht Sprachbarrieren weltweit ab", nl: "Real-time vertaling doorbreekt taalbarrières wereldwijd" },
          { en: "Making everyone speak the same language", es: "Haciendo que todos hablen el mismo idioma", de: "Alle dieselbe Sprache sprechen lassen", nl: "Iedereen dezelfde taal laten spreken" },
          { en: "Translating only written text, not speech", es: "Traduciendo solo texto escrito, no habla", de: "Nur geschriebenen Text übersetzen, nicht Sprache", nl: "Alleen geschreven tekst vertalen, geen spraak" },
          { en: "Working only between English and one other language", es: "Funcionando solo entre inglés y otro idioma", de: "Nur zwischen Englisch und einer anderen Sprache funktionieren", nl: "Alleen werken tussen Engels en één andere taal" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced AI translators will enable instant, accurate translation between any languages, allowing people worldwide to communicate naturally regardless of their native language, revolutionizing global collaboration and understanding.",
          es: "Los traductores avanzados de IA permitirán traducción instantánea y precisa entre cualquier idioma, permitiendo que personas mundialmente se comuniquen naturalmente independientemente de su idioma nativo, revolucionando la colaboración y comprensión global.",
          de: "Fortgeschrittene KI-Übersetzer werden sofortige, genaue Übersetzung zwischen beliebigen Sprachen ermöglichen, wodurch Menschen weltweit natürlich kommunizieren können unabhängig von ihrer Muttersprache, was globale Zusammenarbeit und Verständnis revolutioniert.",
          nl: "Geavanceerde AI-vertalers zullen directe, nauwkeurige vertaling mogelijk maken tussen alle talen, waardoor mensen wereldwijd natuurlijk kunnen communiceren ongeacht hun moedertaal, wat mondiale samenwerking en begrip revolutioneert."
        }
      },
      {
        question: {
          en: "What are 'deepfakes' and why are they important to understand?",
          es: "¿Qué son los 'deepfakes' y por qué es importante entenderlos?",
          de: "Was sind 'Deepfakes' und warum ist es wichtig sie zu verstehen?",
          nl: "Wat zijn 'deepfakes' en waarom is het belangrijk ze te begrijpen?"
        },
        options: [
          { en: "AI-generated fake videos or audio that look very realistic", es: "Videos o audio falsos generados por IA que se ven muy realistas", de: "KI-generierte gefälschte Videos oder Audio die sehr realistisch aussehen", nl: "Door AI gegenereerde nepvideo's of audio die er zeer realistisch uitzien" },
          { en: "Very deep swimming pools made by AI", es: "Piscinas muy profundas hechas por IA", de: "Sehr tiefe Schwimmbecken die von KI gemacht wurden", nl: "Zeer diepe zwembaden gemaakt door AI" },
          { en: "AI systems that are fake and don't work", es: "Sistemas de IA que son falsos y no funcionan", de: "KI-Systeme die falsch sind und nicht funktionieren", nl: "AI-systemen die nep zijn en niet werken" },
          { en: "Deep learning that only creates lies", es: "Aprendizaje profundo que solo crea mentiras", de: "Deep Learning das nur Lügen erschafft", nl: "Deep learning dat alleen leugens creëert" }
        ],
        correct: 0,
        explanation: {
          en: "Deepfakes are AI-created videos, images, or audio that convincingly show people saying or doing things they never actually did, raising important concerns about misinformation and the need for digital literacy.",
          es: "Los deepfakes son videos, imágenes o audio creados por IA que muestran convincentemente a personas diciendo o haciendo cosas que nunca realmente hicieron, planteando preocupaciones importantes sobre desinformación y la necesidad de alfabetización digital.",
          de: "Deepfakes sind von KI erstellte Videos, Bilder oder Audio die überzeugend Menschen zeigen wie sie Dinge sagen oder tun die sie nie wirklich getan haben, was wichtige Bedenken über Desinformation und die Notwendigkeit digitaler Kompetenz aufwirft.",
          nl: "Deepfakes zijn door AI gecreëerde video's, afbeeldingen of audio die overtuigend mensen tonen die dingen zeggen of doen die ze nooit echt hebben gedaan, wat belangrijke zorgen oproept over desinformatie en de behoefte aan digitale geletterdheid."
        }
      },
      {
        question: {
          en: "How might AI help with food delivery and restaurant services?",
          es: "¿Cómo podría la IA ayudar con la entrega de comida y servicios de restaurante?",
          de: "Wie könnte KI bei Essenslieferung und Restaurantdiensten helfen?",
          nl: "Hoe zou AI kunnen helpen met voedsellevering en restaurantdiensten?"
        },
        options: [
          { en: "Optimizing delivery routes and predicting customer preferences", es: "Optimizando rutas de entrega y prediciendo preferencias del cliente", de: "Lieferrouten optimieren und Kundenpräferenzen vorhersagen", nl: "Bezorgroutes optimaliseren en klantvoorkeuren voorspellen" },
          { en: "Cooking all food automatically without chefs", es: "Cocinando toda la comida automáticamente sin chefs", de: "Alles Essen automatisch ohne Köche kochen", nl: "Al het eten automatisch koken zonder koks" },
          { en: "Making food taste exactly the same everywhere", es: "Haciendo que la comida sepa exactamente igual en todas partes", de: "Essen überall genau gleich schmecken lassen", nl: "Voedsel overal precies hetzelfde laten smaken" },
          { en: "Only delivering food to certain people", es: "Solo entregando comida a ciertas personas", de: "Nur Essen an bestimmte Menschen liefern", nl: "Alleen voedsel leveren aan bepaalde mensen" }
        ],
        correct: 0,
        explanation: {
          en: "AI can improve food services by optimizing delivery routes for faster service, predicting popular dishes to reduce waste, personalizing menu recommendations, and managing inventory more efficiently.",
          es: "La IA puede mejorar los servicios de comida optimizando rutas de entrega para servicio más rápido, prediciendo platos populares para reducir desperdicio, personalizando recomendaciones de menú y gestionando inventario más eficientemente.",
          de: "KI kann Essensdienstleistungen verbessern durch Optimierung von Lieferrouten für schnelleren Service, Vorhersage beliebter Gerichte zur Abfallreduzierung, Personalisierung von Menüempfehlungen und effizientere Bestandsverwaltung.",
          nl: "AI kan voedseldiensten verbeteren door bezorgroutes te optimaliseren voor snellere service, populaire gerechten te voorspellen om verspilling te verminderen, menu-aanbevelingen te personaliseren en voorraad efficiënter te beheren."
        }
      },
      {
        question: {
          en: "What is 'computer vision' and how do we use it daily?",
          es: "¿Qué es la 'visión por computadora' y cómo la usamos diariamente?",
          de: "Was ist 'Computer Vision' und wie nutzen wir es täglich?",
          nl: "Wat is 'computer vision' en hoe gebruiken we het dagelijks?"
        },
        options: [
          { en: "AI that analyzes and understands images and videos", es: "IA que analiza y entiende imágenes y videos", de: "KI die Bilder und Videos analysiert und versteht", nl: "AI die afbeeldingen en video's analyseert en begrijpt" },
          { en: "Special glasses that help computers see", es: "Gafas especiales que ayudan a las computadoras a ver", de: "Spezielle Brillen die Computern beim Sehen helfen", nl: "Speciale brillen die computers helpen zien" },
          { en: "Computers that can only see in black and white", es: "Computadoras que solo pueden ver en blanco y negro", de: "Computer die nur in Schwarz-Weiß sehen können", nl: "Computers die alleen zwart-wit kunnen zien" },
          { en: "Software that makes computer screens brighter", es: "Software que hace las pantallas de computadora más brillantes", de: "Software die Computerbildschirme heller macht", nl: "Software die computerschermen helderder maakt" }
        ],
        correct: 0,
        explanation: {
          en: "Computer vision allows AI to recognize objects, faces, and scenes in photos and videos. We encounter it in photo tagging, security cameras, autonomous vehicles, and medical imaging.",
          es: "La visión por computadora permite que la IA reconozca objetos, rostros y escenas en fotos y videos. La encontramos en etiquetado de fotos, cámaras de seguridad, vehículos autónomos e imágenes médicas.",
          de: "Computer Vision ermöglicht KI Objekte, Gesichter und Szenen in Fotos und Videos zu erkennen. Wir begegnen ihr bei Foto-Tagging, Sicherheitskameras, autonomen Fahrzeugen und medizinischer Bildgebung.",
          nl: "Computer vision stelt AI in staat objecten, gezichten en scènes in foto's en video's te herkennen. We komen het tegen bij foto-labeling, beveiligingscamera's, autonome voertuigen en medische beeldvorming."
        }
      },
      {
        question: {
          en: "How might AI change music and content creation?",
          es: "¿Cómo podría la IA cambiar la música y creación de contenido?",
          de: "Wie könnte KI Musik und Content-Erstellung verändern?",
          nl: "Hoe zou AI muziek en contentcreatie kunnen veranderen?"
        },
        options: [
          { en: "Helping artists create new melodies and assisting with creative processes", es: "Ayudando a artistas a crear nuevas melodías y asistiendo con procesos creativos", de: "Künstlern helfen neue Melodien zu schaffen und bei kreativen Prozessen assistieren", nl: "Kunstenaars helpen nieuwe melodieën te creëren en assisteren bij creatieve processen" },
          { en: "Making all music sound exactly the same", es: "Haciendo que toda la música suene exactamente igual", de: "Alle Musik genau gleich klingen lassen", nl: "Alle muziek precies hetzelfde laten klinken" },
          { en: "Replacing all human musicians completely", es: "Reemplazando completamente a todos los músicos humanos", de: "Alle menschlichen Musiker vollständig ersetzen", nl: "Alle menselijke musici volledig vervangen" },
          { en: "Only creating music that sounds robotic", es: "Solo creando música que suena robótica", de: "Nur Musik schaffen die robotisch klingt", nl: "Alleen muziek maken die robotisch klinkt" }
        ],
        correct: 0,
        explanation: {
          en: "AI can assist musicians and creators by generating musical ideas, creating backing tracks, enhancing audio quality, and providing creative inspiration while preserving human artistic expression and creativity.",
          es: "La IA puede asistir a músicos y creadores generando ideas musicales, creando pistas de acompañamiento, mejorando calidad de audio y proporcionando inspiración creativa mientras preserva la expresión artística humana y creatividad.",
          de: "KI kann Musikern und Kreativen assistieren durch das Generieren musikalischer Ideen, Erstellen von Backing-Tracks, Verbesserung der Audioqualität und kreative Inspiration während menschliche künstlerische Expression und Kreativität bewahrt werden.",
          nl: "AI kan muzikanten en makers assisteren door muzikale ideeën te genereren, backing tracks te maken, audiokwaliteit te verbeteren en creatieve inspiratie te bieden terwijl menselijke artistieke expressie en creativiteit behouden blijven."
        }
      },
      {
        question: {
          en: "What might 'AI fitness trainers' offer in the near future?",
          es: "¿Qué podrían ofrecer los 'entrenadores de fitness con IA' en el futuro cercano?",
          de: "Was könnten 'KI-Fitnesstrainer' in naher Zukunft bieten?",
          nl: "Wat zouden 'AI-fitnesstrainers' in de nabije toekomst kunnen bieden?"
        },
        options: [
          { en: "Personalized workout plans that adapt to your progress and goals", es: "Planes de ejercicio personalizados que se adaptan a tu progreso y objetivos", de: "Personalisierte Trainingspläne die sich an deinen Fortschritt und Ziele anpassen", nl: "Gepersonaliseerde trainingsplannen die zich aanpassen aan je voortgang en doelen" },
          { en: "Forcing everyone to do the exact same exercises", es: "Obligando a todos a hacer exactamente los mismos ejercicios", de: "Alle dazu zwingen genau dieselben Übungen zu machen", nl: "Iedereen dwingen precies dezelfde oefeningen te doen" },
          { en: "Only working with professional athletes", es: "Solo funcionando con atletas profesionales", de: "Nur mit Profisportlern arbeiten", nl: "Alleen werken met professionele atleten" },
          { en: "Making exercise more difficult for everyone", es: "Haciendo el ejercicio más difícil para todos", de: "Übung für alle schwieriger machen", nl: "Oefening moeilijker maken voor iedereen" }
        ],
        correct: 0,
        explanation: {
          en: "AI fitness trainers can analyze your performance, track progress, adjust workouts based on your improvement, provide real-time feedback on form, and create motivating, personalized fitness experiences.",
          es: "Los entrenadores de fitness con IA pueden analizar tu rendimiento, rastrear progreso, ajustar entrenamientos basados en tu mejora, proporcionar retroalimentación en tiempo real sobre forma y crear experiencias de fitness motivadoras y personalizadas.",
          de: "KI-Fitnesstrainer können deine Leistung analysieren, Fortschritt verfolgen, Workouts basierend auf deiner Verbesserung anpassen, Echtzeit-Feedback zur Form geben und motivierende, personalisierte Fitness-Erfahrungen schaffen.",
          nl: "AI-fitnesstrainers kunnen je prestaties analyseren, voortgang bijhouden, trainingen aanpassen op basis van je verbetering, real-time feedback geven over vorm en motiverende, gepersonaliseerde fitnesservaringen creëren."
        }
      },
      {
        question: {
          en: "How might AI help with home security systems?",
          es: "¿Cómo podría la IA ayudar con los sistemas de seguridad del hogar?",
          de: "Wie könnte KI bei Haussicherheitssystemen helfen?",
          nl: "Hoe zou AI kunnen helpen bij thuisbeveiligingssystemen?"
        },
        options: [
          { en: "Smart cameras that can distinguish between family members and strangers", es: "Cámaras inteligentes que pueden distinguir entre miembros de la familia y extraños", de: "Intelligente Kameras die zwischen Familienmitgliedern und Fremden unterscheiden können", nl: "Slimme camera's die kunnen onderscheiden tussen familieleden en vreemden" },
          { en: "AI that locks people inside their homes", es: "IA que encierra a las personas dentro de sus hogares", de: "KI die Menschen in ihren Häusern einschließt", nl: "AI die mensen binnen hun huizen opsluit" },
          { en: "Security systems that spy on homeowners", es: "Sistemas de seguridad que espían a los propietarios", de: "Sicherheitssysteme die Hausbesitzer ausspionieren", nl: "Beveiligingssystemen die huiseigenaren bespioneren" },
          { en: "Cameras that only work during the day", es: "Cámaras que solo funcionan durante el día", de: "Kameras die nur tagsüber funktionieren", nl: "Camera's die alleen overdag werken" }
        ],
        correct: 0,
        explanation: {
          en: "AI-powered home security can recognize familiar faces, detect unusual activities, send smart alerts only when necessary, and integrate with other smart home devices to provide comprehensive protection while reducing false alarms.",
          es: "La seguridad del hogar impulsada por IA puede reconocer rostros familiares, detectar actividades inusuales, enviar alertas inteligentes solo cuando sea necesario e integrarse con otros dispositivos domésticos inteligentes para proporcionar protección integral mientras reduce falsas alarmas.",
          de: "KI-gestützte Haussicherheit kann vertraute Gesichter erkennen, ungewöhnliche Aktivitäten erkennen, intelligente Warnungen nur bei Bedarf senden und sich mit anderen Smart-Home-Geräten integrieren um umfassenden Schutz zu bieten während Fehlalarme reduziert werden.",
          nl: "AI-aangedreven thuisbeveiliging kan bekende gezichten herkennen, ongewone activiteiten detecteren, slimme waarschuwingen alleen versturen wanneer nodig en integreren met andere slimme thuisapparaten om uitgebreide bescherming te bieden terwijl valse alarmen worden verminderd."
        }
      },
      {
        question: {
          en: "What are 'chatbots' and how are they becoming more helpful?",
          es: "¿Qué son los 'chatbots' y cómo se están volviendo más útiles?",
          de: "Was sind 'Chatbots' und wie werden sie hilfreicher?",
          nl: "Wat zijn 'chatbots' en hoe worden ze nuttiger?"
        },
        options: [
          { en: "AI programs that can have text conversations and answer questions", es: "Programas de IA que pueden tener conversaciones de texto y responder preguntas", de: "KI-Programme die Textgespräche führen und Fragen beantworten können", nl: "AI-programma's die tekstgesprekken kunnen voeren en vragen kunnen beantwoorden" },
          { en: "Robots that physically chat with people", es: "Robots que charlan físicamente con las personas", de: "Roboter die physisch mit Menschen chatten", nl: "Robots die fysiek kletsen met mensen" },
          { en: "Programs that can only say 'hello'", es: "Programas que solo pueden decir 'hola'", de: "Programme die nur 'Hallo' sagen können", nl: "Programma's die alleen 'hallo' kunnen zeggen" },
          { en: "AI that only works through phone calls", es: "IA que solo funciona a través de llamadas telefónicas", de: "KI die nur durch Telefonanrufe funktioniert", nl: "AI die alleen werkt via telefoongesprekken" }
        ],
        correct: 0,
        explanation: {
          en: "Chatbots are becoming more sophisticated, understanding context better, providing more helpful responses, and being able to handle complex customer service tasks while being available 24/7 for instant assistance.",
          es: "Los chatbots se están volviendo más sofisticados, entendiendo mejor el contexto, proporcionando respuestas más útiles y siendo capaces de manejar tareas complejas de servicio al cliente mientras están disponibles 24/7 para asistencia instantánea.",
          de: "Chatbots werden ausgereifter, verstehen Kontext besser, bieten hilfreichere Antworten und können komplexe Kundenservice-Aufgaben bewältigen während sie 24/7 für sofortige Hilfe verfügbar sind.",
          nl: "Chatbots worden geavanceerder, begrijpen context beter, bieden helpere antwoorden en kunnen complexe klantenservicetaken afhandelen terwijl ze 24/7 beschikbaar zijn voor directe hulp."
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
