// AI toekomst Quiz - Level 4
(function() {
  const level4 = {
    name: {
          "en": "AI Future Level 4",
          "es": "Futuro de IA Nivel 4",
          "de": "KI-Zukunft Stufe 4",
          "nl": "AI Toekomst Level 4"
    },
    questions: [
      {
        question: {
                  "en": "What is 'precision medicine' and how might AI revolutionize it?",
                  "es": "¿Qué es la 'medicina de precisión' y cómo podría la IA revolucionarla?",
                  "de": "Was ist 'Präzisionsmedizin' und wie könnte KI sie revolutionieren?",
                  "nl": "Wat is 'precisiegeneeskunde' en hoe zou AI het kunnen revolutioneren?"
        },
        options: [
        {
                  "en": "Replacing doctors with AI completely",
                  "es": "Reemplazar completamente a los doctores con IA",
                  "de": "Ärzte vollständig durch KI ersetzen",
                  "nl": "Artsen volledig vervangen door AI"
        },
        {
                  "en": "Using robots to perform all surgeries",
                  "es": "Usar robots para realizar todas las cirugías",
                  "de": "Roboter für alle Operationen verwenden",
                  "nl": "Robots gebruiken om alle operaties uit te voeren"
        },
        {
                  "en": "Making medicine more expensive but accurate",
                  "es": "Hacer la medicina más cara pero precisa",
                  "de": "Medizin teurer aber genauer machen",
                  "nl": "Geneeskunde duurder maar nauwkeuriger maken"
        },
        {
                  "en": "Tailoring medical treatments to individual genetic and health profiles using AI analysis",
                  "es": "Adaptar tratamientos médicos a perfiles genéticos y de salud individuales usando análisis de IA",
                  "de": "Medizinische Behandlungen auf individuelle genetische und Gesundheitsprofile mittels KI-Analyse anpassen",
                  "nl": "Medische behandelingen afstemmen op individuele genetische en gezondheidsprofielen met AI-analyse"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Precision medicine uses AI to analyze vast amounts of genetic, lifestyle, and environmental data to create personalized treatment plans that are more effective for each individual patient.",
                  "es": "La medicina de precisión usa IA para analizar vastas cantidades de datos genéticos, de estilo de vida y ambientales para crear planes de tratamiento personalizados que son más efectivos para cada paciente individual.",
                  "de": "Präzisionsmedizin nutzt KI zur Analyse riesiger Mengen genetischer, Lebensstil- und Umweltdaten um personalisierte Behandlungspläne zu erstellen die für jeden einzelnen Patienten effektiver sind.",
                  "nl": "Precisiegeneeskunde gebruikt AI om enorme hoeveelheden genetische, levensstijl- en omgevingsgegevens te analyseren om gepersonaliseerde behandelplannen te maken die effectiever zijn voor elke individuele patiënt."
        }
      },
      {
        question: {
                  "en": "How might AI transform drug discovery in the future?",
                  "es": "¿Cómo podría la IA transformar el descubrimiento de medicamentos en el futuro?",
                  "de": "Wie könnte KI die Medikamentenentdeckung in Zukunft verändern?",
                  "nl": "Hoe zou AI de medicijnontwikkeling in de toekomst kunnen transformeren?"
        },
        options: [
        {
                  "en": "Eliminating the need for clinical trials",
                  "es": "Eliminando la necesidad de ensayos clínicos",
                  "de": "Die Notwendigkeit klinischer Studien eliminieren",
                  "nl": "De noodzaak van klinische proeven elimineren"
        },
        {
                  "en": "Accelerating discovery by predicting molecular interactions and reducing testing time",
                  "es": "Acelerando el descubrimiento prediciendo interacciones moleculares y reduciendo tiempo de pruebas",
                  "de": "Entdeckung beschleunigen durch Vorhersage molekularer Wechselwirkungen und Reduzierung der Testzeit",
                  "nl": "Ontdekking versnellen door moleculaire interacties te voorspellen en testtijd te verminderen"
        },
        {
                  "en": "Making all drugs free",
                  "es": "Hacer todos los medicamentos gratuitos",
                  "de": "Alle Medikamente kostenlos machen",
                  "nl": "Alle medicijnen gratis maken"
        },
        {
                  "en": "Creating drugs that work for everyone the same way",
                  "es": "Creando medicamentos que funcionen igual para todos",
                  "de": "Medikamente entwickeln die für alle gleich wirken",
                  "nl": "Medicijnen maken die voor iedereen hetzelfde werken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "AI can simulate molecular behavior, predict drug-target interactions, and identify promising compounds faster than traditional methods, potentially reducing the 10-15 year drug development timeline significantly.",
                  "es": "La IA puede simular comportamiento molecular, predecir interacciones medicamento-objetivo e identificar compuestos prometedores más rápido que métodos tradicionales, potencialmente reduciendo significativamente la línea de tiempo de desarrollo de medicamentos de 10-15 años.",
                  "de": "KI kann molekulares Verhalten simulieren, Medikament-Ziel-Wechselwirkungen vorhersagen und vielversprechende Verbindungen schneller identifizieren als traditionelle Methoden, wodurch die 10-15-jährige Medikamentenentwicklungszeit erheblich reduziert werden könnte.",
                  "nl": "AI kan moleculair gedrag simuleren, medicijn-doelinteracties voorspellen en veelbelovende verbindingen sneller identificeren dan traditionele methoden, waardoor de 10-15 jaar medicijnontwikkelingstijd aanzienlijk kan worden verkort."
        }
      },
      {
        question: {
                  "en": "What role might AI play in early disease detection?",
                  "es": "¿Qué papel podría jugar la IA en la detección temprana de enfermedades?",
                  "de": "Welche Rolle könnte KI bei der Früherkennung von Krankheiten spielen?",
                  "nl": "Welke rol zou AI kunnen spelen bij vroege ziektedetectie?"
        },
        options: [
        {
                  "en": "Analyzing medical images and biomarkers to detect diseases before symptoms appear",
                  "es": "Analizando imágenes médicas y biomarcadores para detectar enfermedades antes de que aparezcan síntomas",
                  "de": "Medizinische Bilder und Biomarker analysieren um Krankheiten vor Symptomauftreten zu erkennen",
                  "nl": "Medische beelden en biomarkers analyseren om ziektes te detecteren voordat symptomen verschijnen"
        },
        {
                  "en": "Reading patients' minds to know when they feel sick",
                  "es": "Leyendo las mentes de los pacientes para saber cuándo se sienten enfermos",
                  "de": "Patientengedanken lesen um zu wissen wann sie sich krank fühlen",
                  "nl": "De gedachten van patiënten lezen om te weten wanneer ze zich ziek voelen"
        },
        {
                  "en": "Only working after patients already show symptoms",
                  "es": "Solo funcionando después de que los pacientes ya muestren síntomas",
                  "de": "Nur funktionieren nachdem Patienten bereits Symptome zeigen",
                  "nl": "Alleen werken nadat patiënten al symptomen vertonen"
        },
        {
                  "en": "Preventing all diseases from ever occurring",
                  "es": "Previniendo que todas las enfermedades ocurran",
                  "de": "Verhindern dass alle Krankheiten auftreten",
                  "nl": "Voorkomen dat alle ziektes ooit optreden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AI can detect subtle patterns in medical scans, blood tests, and other data that humans might miss, potentially identifying cancer, heart disease, and neurological conditions years before traditional diagnosis.",
                  "es": "La IA puede detectar patrones sutiles en escaneos médicos, análisis de sangre y otros datos que los humanos podrían pasar por alto, potencialmente identificando cáncer, enfermedades cardíacas y condiciones neurológicas años antes del diagnóstico tradicional.",
                  "de": "KI kann subtile Muster in medizinischen Scans, Bluttests und anderen Daten erkennen die Menschen übersehen könnten, wodurch Krebs, Herzerkrankungen und neurologische Zustände Jahre vor der traditionellen Diagnose identifiziert werden könnten.",
                  "nl": "AI kan subtiele patronen detecteren in medische scans, bloedtests en andere gegevens die mensen zouden kunnen missen, waardoor kanker, hartziekten en neurologische aandoeningen jaren voor traditionele diagnose kunnen worden geïdentificeerd."
        }
      },
      {
        question: {
                  "en": "How might 'digital twins' be used in healthcare AI?",
                  "es": "¿Cómo podrían usarse los 'gemelos digitales' en la IA de atención médica?",
                  "de": "Wie könnten 'digitale Zwillinge' in der Gesundheits-KI verwendet werden?",
                  "nl": "Hoe zouden 'digitale tweeling' gebruikt kunnen worden in de gezondheidszorg AI?"
        },
        options: [
        {
                  "en": "Creating two identical hospitals",
                  "es": "Creando dos hospitales idénticos",
                  "de": "Zwei identische Krankenhäuser erstellen",
                  "nl": "Twee identieke ziekenhuizen maken"
        },
        {
                  "en": "Cloning patients to have backup organs",
                  "es": "Clonando pacientes para tener órganos de respaldo",
                  "de": "Patienten klonen um Ersatzorgane zu haben",
                  "nl": "Patiënten klonen om reserveorganen te hebben"
        },
        {
                  "en": "Using twin siblings for medical testing",
                  "es": "Usando hermanos gemelos para pruebas médicas",
                  "de": "Zwillingsgeschwister für medizinische Tests verwenden",
                  "nl": "Tweelingbroers of -zussen gebruiken voor medische tests"
        },
        {
                  "en": "Creating virtual models of patients to simulate treatments and predict outcomes",
                  "es": "Creando modelos virtuales de pacientes para simular tratamientos y predecir resultados",
                  "de": "Virtuelle Patientenmodelle erstellen um Behandlungen zu simulieren und Ergebnisse vorherzusagen",
                  "nl": "Virtuele modellen van patiënten maken om behandelingen te simuleren en uitkomsten te voorspellen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Digital twins are virtual replicas of a patient's physiology that can be used to test different treatment scenarios, drug interactions, and surgical procedures safely before applying them to the real patient.",
                  "es": "Los gemelos digitales son réplicas virtuales de la fisiología de un paciente que pueden usarse para probar diferentes escenarios de tratamiento, interacciones de medicamentos y procedimientos quirúrgicos de manera segura antes de aplicarlos al paciente real.",
                  "de": "Digitale Zwillinge sind virtuelle Nachbildungen der Physiologie eines Patienten die verwendet werden können um verschiedene Behandlungsszenarien, Medikamentenwechselwirkungen und chirurgische Verfahren sicher zu testen bevor sie am echten Patienten angewendet werden.",
                  "nl": "Digitale tweelingen zijn virtuele replica's van de fysiologie van een patiënt die gebruikt kunnen worden om verschillende behandelingsscenario's, medicijninteracties en chirurgische procedures veilig te testen voordat ze op de echte patiënt worden toegepast."
        }
      },
      {
        question: {
                  "en": "What is the potential of AI in mental health treatment?",
                  "es": "¿Cuál es el potencial de la IA en el tratamiento de la salud mental?",
                  "de": "Was ist das Potenzial von KI in der psychischen Gesundheitsbehandlung?",
                  "nl": "Wat is het potentieel van AI in de behandeling van geestelijke gezondheid?"
        },
        options: [
        {
                  "en": "Only treating physical symptoms of mental illness",
                  "es": "Solo tratando síntomas físicos de enfermedad mental",
                  "de": "Nur körperliche Symptome psychischer Erkrankungen behandeln",
                  "nl": "Alleen fysieke symptomen van geestesziekte behandelen"
        },
        {
                  "en": "Providing 24/7 therapeutic support and early intervention through conversational AI",
                  "es": "Proporcionando apoyo terapéutico 24/7 e intervención temprana a través de IA conversacional",
                  "de": "24/7 therapeutische Unterstützung und Frühintervention durch Konversations-KI bieten",
                  "nl": "24/7 therapeutische ondersteuning en vroege interventie bieden via conversationele AI"
        },
        {
                  "en": "Reading people's thoughts to control their emotions",
                  "es": "Leyendo los pensamientos de la gente para controlar sus emociones",
                  "de": "Gedanken der Menschen lesen um ihre Emotionen zu kontrollieren",
                  "nl": "De gedachten van mensen lezen om hun emoties te controleren"
        },
        {
                  "en": "Replacing all human therapists immediately",
                  "es": "Reemplazando inmediatamente a todos los terapeutas humanos",
                  "de": "Alle menschlichen Therapeuten sofort ersetzen",
                  "nl": "Alle menselijke therapeuten onmiddellijk vervangen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "AI chatbots and virtual therapists can provide immediate support, monitor mood patterns, detect crisis situations, and complement human therapists to make mental health care more accessible and responsive.",
                  "es": "Los chatbots de IA y terapeutas virtuales pueden proporcionar apoyo inmediato, monitorear patrones de humor, detectar situaciones de crisis y complementar a terapeutas humanos para hacer la atención de salud mental más accesible y receptiva.",
                  "de": "KI-Chatbots und virtuelle Therapeuten können sofortige Unterstützung bieten, Stimmungsmuster überwachen, Krisensituationen erkennen und menschliche Therapeuten ergänzen um die psychische Gesundheitsversorgung zugänglicher und reaktionsfähiger zu machen.",
                  "nl": "AI-chatbots en virtuele therapeuten kunnen onmiddellijke ondersteuning bieden, stemmingspatronen monitoren, crisissituaties detecteren en menselijke therapeuten aanvullen om de geestelijke gezondheidszorg toegankelijker en responsiever te maken."
        }
      },
      {
        question: {
                  "en": "What is 'algorithmic governance' and how might it shape public policy by 2030?",
                  "es": "¿Qué es la 'gobernanza algorítmica' y cómo podría moldear las políticas públicas para 2030?",
                  "de": "Was ist 'algorithmische Governance' und wie könnte sie die öffentliche Politik bis 2030 prägen?",
                  "nl": "Wat is 'algoritmische governance' en hoe zou het het overheidsbeleid tegen 2030 kunnen vormgeven?"
        },
        options: [
        {
                  "en": "Replacing all government officials with robots",
                  "es": "Reemplazar a todos los funcionarios gubernamentales con robots",
                  "de": "Alle Regierungsbeamten durch Roboter ersetzen",
                  "nl": "Alle overheidsfunctionarissen vervangen door robots"
        },
        {
                  "en": "Banning all AI from government use",
                  "es": "Prohibir toda IA del uso gubernamental",
                  "de": "Alle KI vom Regierungsgebrauch verbieten",
                  "nl": "Alle AI verbieden voor regeringsgebruik"
        },
        {
                  "en": "AI systems automatically making policy decisions based on data analysis and citizen feedback",
                  "es": "Sistemas de IA tomando automáticamente decisiones políticas basadas en análisis de datos y retroalimentación ciudadana",
                  "de": "KI-Systeme treffen automatisch politische Entscheidungen basierend auf Datenanalyse und Bürgerfeedback",
                  "nl": "AI-systemen maken automatisch beleidsbeslissingen op basis van data-analyse en feedback van burgers"
        },
        {
                  "en": "Using AI only for tax collection",
                  "es": "Usar IA solo para recaudación de impuestos",
                  "de": "KI nur für Steuererhebung verwenden",
                  "nl": "AI alleen gebruiken voor belastinginning"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Algorithmic governance uses AI to analyze vast amounts of data to inform policy decisions, optimize resource allocation, and create more responsive government services based on real-time citizen needs and feedback.",
                  "es": "La gobernanza algorítmica usa IA para analizar vastas cantidades de datos para informar decisiones políticas, optimizar la asignación de recursos y crear servicios gubernamentales más receptivos basados en necesidades y retroalimentación ciudadana en tiempo real.",
                  "de": "Algorithmische Governance nutzt KI zur Analyse riesiger Datenmengen um politische Entscheidungen zu informieren, Ressourcenallokation zu optimieren und reaktionsfähigere Regierungsdienstleistungen basierend auf Echtzeitbedürfnissen und Bürgerfeedback zu schaffen.",
                  "nl": "Algoritmische governance gebruikt AI om enorme hoeveelheden data te analyseren om beleidsbeslissingen te informeren, middelen optimaal toe te wijzen en meer responsieve overheidsdiensten te creëren gebaseerd op realtime behoeften en feedback van burgers."
        }
      },
      {
        question: {
                  "en": "How might AI impact democratic participation by 2035?",
                  "es": "¿Cómo podría la IA impactar la participación democrática para 2035?",
                  "de": "Wie könnte KI die demokratische Teilhabe bis 2035 beeinflussen?",
                  "nl": "Hoe zou AI de democratische participatie tegen 2035 kunnen beïnvloeden?"
        },
        options: [
        {
                  "en": "Enabling real-time digital voting, citizen assemblies, and AI-moderated public debates",
                  "es": "Habilitando votación digital en tiempo real, asambleas ciudadanas y debates públicos moderados por IA",
                  "de": "Ermöglichung von Echtzeitdigitalabstimmungen, Bürgerversammlungen und KI-moderierten öffentlichen Debatten",
                  "nl": "Het mogelijk maken van realtime digitaal stemmen, burgerassemblees en door AI gemodereerde publieke debatten"
        },
        {
                  "en": "Restricting voting to AI experts only",
                  "es": "Restringir el voto solo a expertos en IA",
                  "de": "Wahlrecht nur auf KI-Experten beschränken",
                  "nl": "Stemrecht beperken tot alleen AI-experts"
        },
        {
                  "en": "Making voting mandatory for everyone",
                  "es": "Hacer el voto obligatorio para todos",
                  "de": "Wahlpflicht für alle einführen",
                  "nl": "Stemmen verplicht maken voor iedereen"
        },
        {
                  "en": "Eliminating all elections permanently",
                  "es": "Eliminando permanentemente todas las elecciones",
                  "de": "Alle Wahlen dauerhaft eliminieren",
                  "nl": "Alle verkiezingen permanent elimineren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AI could enable more sophisticated forms of digital democracy, including secure online voting, AI-facilitated citizen panels that represent diverse viewpoints, and intelligent moderation of public discourse to reduce polarization.",
                  "es": "La IA podría habilitar formas más sofisticadas de democracia digital, incluyendo votación en línea segura, paneles ciudadanos facilitados por IA que representen diversos puntos de vista y moderación inteligente del discurso público para reducir la polarización.",
                  "de": "KI könnte ausgefeiltere Formen der digitalen Demokratie ermöglichen, einschließlich sicherer Online-Abstimmungen, KI-unterstützter Bürgerpanels die diverse Standpunkte repräsentieren und intelligenter Moderation des öffentlichen Diskurses zur Reduzierung der Polarisierung.",
                  "nl": "AI zou meer geavanceerde vormen van digitale democratie mogelijk kunnen maken, inclusief veilig online stemmen, door AI gefaciliteerde burgerpanels die diverse standpunten vertegenwoordigen, en intelligente moderatie van publiek discours om polarisatie te verminderen."
        }
      },
      {
        question: {
                  "en": "What role might AI play in addressing social inequality by 2030?",
                  "es": "¿Qué papel podría jugar la IA en abordar la desigualdad social para 2030?",
                  "de": "Welche Rolle könnte KI bei der Bekämpfung sozialer Ungleichheit bis 2030 spielen?",
                  "nl": "Welke rol zou AI kunnen spelen bij het aanpakken van sociale ongelijkheid tegen 2030?"
        },
        options: [
        {
                  "en": "Ignoring social problems completely",
                  "es": "Ignorando completamente los problemas sociales",
                  "de": "Soziale Probleme vollständig ignorieren",
                  "nl": "Sociale problemen volledig negeren"
        },
        {
                  "en": "Providing personalized education, healthcare access, and economic opportunities to underserved communities",
                  "es": "Proporcionando educación personalizada, acceso a atención médica y oportunidades económicas a comunidades desatendidas",
                  "de": "Personalisierte Bildung, Gesundheitszugang und wirtschaftliche Möglichkeiten für unterversorgte Gemeinden bereitstellen",
                  "nl": "Gepersonaliseerd onderwijs, toegang tot gezondheidszorg en economische kansen bieden aan onderbedeelde gemeenschappen"
        },
        {
                  "en": "Only helping wealthy individuals",
                  "es": "Solo ayudando a individuos adinerados",
                  "de": "Nur wohlhabenden Personen helfen",
                  "nl": "Alleen rijke individuen helpen"
        },
        {
                  "en": "Making everyone equally poor",
                  "es": "Haciendo a todos igualmente pobres",
                  "de": "Alle gleich arm machen",
                  "nl": "Iedereen even arm maken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "AI can democratize access to high-quality education through personalized tutoring, improve healthcare delivery in remote areas, and create new economic opportunities through digital platforms and micro-entrepreneurship support.",
                  "es": "La IA puede democratizar el acceso a educación de alta calidad a través de tutoría personalizada, mejorar la entrega de atención médica en áreas remotas y crear nuevas oportunidades económicas a través de plataformas digitales y apoyo al microemprendimiento.",
                  "de": "KI kann den Zugang zu hochwertiger Bildung durch personalisierte Betreuung demokratisieren, die Gesundheitsversorgung in abgelegenen Gebieten verbessern und neue wirtschaftliche Möglichkeiten durch digitale Plattformen und Mikrounternehmertum schaffen.",
                  "nl": "AI kan toegang tot hoogwaardige educatie democratiseren door gepersonaliseerde begeleiding, gezondheidszorg verbeteren in afgelegen gebieden, en nieuwe economische kansen creëren via digitale platforms en ondersteuning van micro-ondernemerschap."
        }
      },
      {
        question: {
                  "en": "How might AI transform urban planning and smart cities by 2035?",
                  "es": "¿Cómo podría la IA transformar la planificación urbana y las ciudades inteligentes para 2035?",
                  "de": "Wie könnte KI die Stadtplanung und Smart Cities bis 2035 verändern?",
                  "nl": "Hoe zou AI stadsplanning en slimme steden tegen 2035 kunnen transformeren?"
        },
        options: [
        {
                  "en": "Optimizing traffic flow, energy distribution, and resource allocation in real-time based on citizen behavior",
                  "es": "Optimizando flujo de tráfico, distribución de energía y asignación de recursos en tiempo real basado en comportamiento ciudadano",
                  "de": "Verkehrsfluss, Energieverteilung und Ressourcenallokation in Echtzeit basierend auf Bürgerverhalten optimieren",
                  "nl": "Verkeersstroom, energieverdeling en toewijzing van middelen in realtime optimaliseren op basis van burgergedrag"
        },
        {
                  "en": "Building only identical buildings everywhere",
                  "es": "Construyendo solo edificios idénticos en todas partes",
                  "de": "Nur identische Gebäude überall bauen",
                  "nl": "Alleen identieke gebouwen overal bouwen"
        },
        {
                  "en": "Making cities completely automated without human input",
                  "es": "Haciendo ciudades completamente automatizadas sin entrada humana",
                  "de": "Städte vollständig automatisiert ohne menschlichen Input machen",
                  "nl": "Steden volledig geautomatiseerd maken zonder menselijke input"
        },
        {
                  "en": "Eliminating all cars from cities",
                  "es": "Eliminando todos los autos de las ciudades",
                  "de": "Alle Autos aus Städten eliminieren",
                  "nl": "Alle auto's uit steden elimineren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AI-powered smart cities can dynamically adjust infrastructure systems, predict maintenance needs, optimize public services, and create more sustainable and livable urban environments by analyzing patterns in citizen movement, energy use, and resource consumption.",
                  "es": "Las ciudades inteligentes impulsadas por IA pueden ajustar dinámicamente sistemas de infraestructura, predecir necesidades de mantenimiento, optimizar servicios públicos y crear entornos urbanos más sostenibles y habitables analizando patrones en movimiento ciudadano, uso de energía y consumo de recursos.",
                  "de": "KI-gestützte Smart Cities können Infrastruktursysteme dynamisch anpassen, Wartungsbedarf vorhersagen, öffentliche Dienstleistungen optimieren und nachhaltigere und lebenswertere städtische Umgebungen schaffen durch Analyse von Mustern in Bürgerbewegung, Energienutzung und Ressourcenverbrauch.",
                  "nl": "Door AI aangedreven slimme steden kunnen infrastructuursystemen dynamisch aanpassen, onderhoudsbehoeften voorspellen, openbare diensten optimaliseren en meer duurzame en leefbare stedelijke omgevingen creëren door patronen in burgerbeweging, energiegebruik en middelenverbruik te analyseren."
        }
      },
      {
        question: {
                  "en": "What challenges might arise from AI-driven social credit systems?",
                  "es": "¿Qué desafíos podrían surgir de los sistemas de crédito social impulsados por IA?",
                  "de": "Welche Herausforderungen könnten durch KI-gesteuerte Sozialkreditsysteme entstehen?",
                  "nl": "Welke uitdagingen zouden kunnen ontstaan door AI-gedreven sociale creditsystemen?"
        },
        options: [
        {
                  "en": "Privacy concerns, potential for discrimination, and restriction of individual freedoms",
                  "es": "Preocupaciones de privacidad, potencial de discriminación y restricción de libertades individuales",
                  "de": "Datenschutzbedenken, Diskriminierungspotenzial und Einschränkung individueller Freiheiten",
                  "nl": "Privacyzorgen, potentieel voor discriminatie en beperking van individuele vrijheden"
        },
        {
                  "en": "Eliminating all crime permanently",
                  "es": "Eliminando permanentemente todo crimen",
                  "de": "Alle Verbrechen dauerhaft eliminieren",
                  "nl": "Alle criminaliteit permanent elimineren"
        },
        {
                  "en": "Creating universal happiness",
                  "es": "Creando felicidad universal",
                  "de": "Universelles Glück schaffen",
                  "nl": "Universeel geluk creëren"
        },
        {
                  "en": "Making everyone perfectly behaved citizens",
                  "es": "Haciendo a todos ciudadanos perfectamente comportados",
                  "de": "Alle zu perfekt benahmen Bürgern machen",
                  "nl": "Iedereen tot perfect gedragende burgers maken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AI social credit systems could lead to surveillance states, algorithmic bias affecting life opportunities, suppression of dissent, and the creation of social hierarchies based on AI interpretation of behavior rather than merit or justice.",
                  "es": "Los sistemas de crédito social de IA podrían llevar a estados de vigilancia, sesgo algorítmico afectando oportunidades de vida, supresión de disidencia y creación de jerarquías sociales basadas en interpretación de IA del comportamiento en lugar de mérito o justicia.",
                  "de": "KI-Sozialkreditsysteme könnten zu Überwachungsstaaten, algorithmischer Verzerrung die Lebenschancen beeinflusst, Unterdrückung von Dissens und Schaffung sozialer Hierarchien basierend auf KI-Interpretation von Verhalten statt Verdienst oder Gerechtigkeit führen.",
                  "nl": "AI sociale creditsystemen zouden kunnen leiden tot surveillance staten, algoritmische vooringenomenheid die levenskansen beïnvloedt, onderdrukking van dissidentie, en het creëren van sociale hiërarchieën gebaseerd op AI-interpretatie van gedrag in plaats van verdienste of rechtvaardigheid."
        }
      },
      {
        question: {
                  "en": "How might AI impact cultural preservation and diversity by 2040?",
                  "es": "¿Cómo podría la IA impactar la preservación cultural y la diversidad para 2040?",
                  "de": "Wie könnte KI die Kulturerhaltung und Vielfalt bis 2040 beeinflussen?",
                  "nl": "Hoe zou AI culturele behoud en diversiteit tegen 2040 kunnen beïnvloeden?"
        },
        options: [
        {
                  "en": "Digitizing endangered languages and customs while potentially homogenizing global culture",
                  "es": "Digitalizando idiomas y costumbres en peligro de extinción mientras potencialmente homogeniza la cultura global",
                  "de": "Bedrohte Sprachen und Bräuche digitalisieren während möglicherweise die globale Kultur homogenisiert wird",
                  "nl": "Bedreigde talen en gebruiken digitaliseren terwijl mogelijk de mondiale cultuur wordt gehomogeniseerd"
        },
        {
                  "en": "Eliminating traditional practices completely",
                  "es": "Eliminando completamente las prácticas tradicionales",
                  "de": "Traditionelle Praktiken vollständig eliminieren",
                  "nl": "Traditionele praktijken volledig elimineren"
        },
        {
                  "en": "Making all cultures identical worldwide",
                  "es": "Haciendo todas las culturas idénticas mundialmente",
                  "de": "Alle Kulturen weltweit identisch machen",
                  "nl": "Alle culturen wereldwijd identiek maken"
        },
        {
                  "en": "Only preserving Western culture",
                  "es": "Solo preservando la cultura occidental",
                  "de": "Nur westliche Kultur bewahren",
                  "nl": "Alleen westerse cultuur behouden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AI can help document and preserve endangered languages and cultural practices through digital archives and translation tools, but may also contribute to cultural homogenization as dominant AI models reflect the biases of their training data and creators.",
                  "es": "La IA puede ayudar a documentar y preservar idiomas y prácticas culturales en peligro de extinción a través de archivos digitales y herramientas de traducción, pero también puede contribuir a la homogenización cultural ya que los modelos de IA dominantes reflejan los sesgos de sus datos de entrenamiento y creadores.",
                  "de": "KI kann helfen, bedrohte Sprachen und kulturelle Praktiken durch digitale Archive und Übersetzungstools zu dokumentieren und zu bewahren, könnte aber auch zur kulturellen Homogenisierung beitragen da dominante KI-Modelle die Verzerrungen ihrer Trainingsdaten und Schöpfer widerspiegeln.",
                  "nl": "AI kan helpen bij het documenteren en behouden van bedreigde talen en culturele praktijken via digitale archieven en vertaaltools, maar kan ook bijdragen aan culturele homogenisatie omdat dominante AI-modellen de vooroordelen van hun trainingsdata en makers weerspiegelen."
        }
      },
      {
        question: {
                  "en": "What role might AI play in combating misinformation by 2035?",
                  "es": "¿Qué papel podría jugar la IA en combatir la desinformación para 2035?",
                  "de": "Welche Rolle könnte KI bei der Bekämpfung von Fehlinformationen bis 2035 spielen?",
                  "nl": "Welke rol zou AI kunnen spelen bij het bestrijden van misinformatie tegen 2035?"
        },
        options: [
        {
                  "en": "Making everyone believe the same things",
                  "es": "Haciendo que todos crean las mismas cosas",
                  "de": "Alle dazu bringen dieselben Dinge zu glauben",
                  "nl": "Iedereen dezelfde dingen laten geloven"
        },
        {
                  "en": "Real-time fact-checking and source verification, while raising concerns about censorship and truth determination",
                  "es": "Verificación de hechos en tiempo real y verificación de fuentes, mientras genera preocupaciones sobre censura y determinación de la verdad",
                  "de": "Echtzeit-Faktenprüfung und Quellenverifikation, während Bedenken über Zensur und Wahrheitsbestimmung aufkommen",
                  "nl": "Realtime factchecking en bronverificatie, terwijl zorgen over censuur en waarheidsvaststelling ontstaan"
        },
        {
                  "en": "Blocking all information except government-approved content",
                  "es": "Bloqueando toda información excepto contenido aprobado por el gobierno",
                  "de": "Alle Informationen außer regierungsgenehmigten Inhalten blockieren",
                  "nl": "Alle informatie blokkeren behalve door de regering goedgekeurde inhoud"
        },
        {
                  "en": "Eliminating all news media",
                  "es": "Eliminando todos los medios de comunicación",
                  "de": "Alle Nachrichtenmedien eliminieren",
                  "nl": "Alle nieuwsmedia elimineren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "AI can help identify false information patterns and verify sources quickly, but this raises complex questions about who determines truth, potential algorithmic bias in fact-checking, and the balance between combating misinformation and preserving free speech.",
                  "es": "La IA puede ayudar a identificar patrones de información falsa y verificar fuentes rápidamente, pero esto plantea preguntas complejas sobre quién determina la verdad, posible sesgo algorítmico en verificación de hechos y el equilibrio entre combatir desinformación y preservar la libertad de expresión.",
                  "de": "KI kann helfen, Falschinformationsmuster zu identifizieren und Quellen schnell zu verifizieren, aber dies wirft komplexe Fragen auf über wer Wahrheit bestimmt, mögliche algorithmische Verzerrung bei Faktenprüfung und die Balance zwischen Bekämpfung von Fehlinformationen und Bewahrung der Meinungsfreiheit.",
                  "nl": "AI kan helpen bij het identificeren van valse informatiepatronen en het snel verifiëren van bronnen, maar dit roept complexe vragen op over wie de waarheid bepaalt, mogelijke algoritmische vooringenomenheid bij factchecking en de balans tussen het bestrijden van misinformatie en het behouden van vrije meningsuiting."
        }
      },
      {
        question: {
                  "en": "How might AI affect intergenerational relationships and social cohesion?",
                  "es": "¿Cómo podría la IA afectar las relaciones intergeneracionales y la cohesión social?",
                  "de": "Wie könnte KI zwischengenerationelle Beziehungen und sozialen Zusammenhalt beeinflussen?",
                  "nl": "Hoe zou AI intergenerationele relaties en sociale cohesie kunnen beïnvloeden?"
        },
        options: [
        {
                  "en": "Eliminating older generations from society",
                  "es": "Eliminando generaciones mayores de la sociedad",
                  "de": "Ältere Generationen aus der Gesellschaft eliminieren",
                  "nl": "Oudere generaties uit de samenleving elimineren"
        },
        {
                  "en": "Preventing any technological change",
                  "es": "Previniendo cualquier cambio tecnológico",
                  "de": "Jeden technologischen Wandel verhindern",
                  "nl": "Elke technologische verandering voorkomen"
        },
        {
                  "en": "Making all generations think exactly the same",
                  "es": "Haciendo que todas las generaciones piensen exactamente igual",
                  "de": "Alle Generationen dazu bringen genau gleich zu denken",
                  "nl": "Alle generaties precies hetzelfde laten denken"
        },
        {
                  "en": "Creating digital divides between generations while offering new ways to connect and share knowledge",
                  "es": "Creando brechas digitales entre generaciones mientras ofrece nuevas formas de conectarse y compartir conocimiento",
                  "de": "Digitale Kluft zwischen Generationen schaffen während neue Wege zum Verbinden und Wissensaustausch geboten werden",
                  "nl": "Digitale kloven tussen generaties creëren terwijl nieuwe manieren worden geboden om te verbinden en kennis te delen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "AI may widen generational gaps as younger people adapt faster to new technologies, but it could also bridge connections through AI-powered translation of generational perspectives, digital storytelling platforms, and tools that help preserve and share intergenerational wisdom.",
                  "es": "La IA puede ampliar las brechas generacionales ya que las personas más jóvenes se adaptan más rápido a nuevas tecnologías, pero también podría tender puentes a través de traducción de perspectivas generacionales impulsada por IA, plataformas de narración digital y herramientas que ayudan a preservar y compartir sabiduría intergeneracional.",
                  "de": "KI könnte Generationslücken vergrößern da jüngere Menschen sich schneller an neue Technologien anpassen, könnte aber auch Verbindungen schaffen durch KI-gestützte Übersetzung generationeller Perspektiven, digitale Erzählplattformen und Tools die helfen intergenerationelle Weisheit zu bewahren und zu teilen.",
                  "nl": "AI kan generatiekloven vergroten omdat jongere mensen zich sneller aanpassen aan nieuwe technologieën, maar zou ook verbindingen kunnen overbruggen door AI-aangedreven vertaling van generationele perspectieven, digitale vertelplatforms en tools die helpen intergenerationele wijsheid te behouden en te delen."
        }
      },
      {
        question: {
                  "en": "What impact might AI have on religious and spiritual practices by 2035?",
                  "es": "¿Qué impacto podría tener la IA en las prácticas religiosas y espirituales para 2035?",
                  "de": "Welchen Einfluss könnte KI auf religiöse und spirituelle Praktiken bis 2035 haben?",
                  "nl": "Welke impact zou AI kunnen hebben op religieuze en spirituele praktijken tegen 2035?"
        },
        options: [
        {
                  "en": "Enabling virtual religious experiences and AI spiritual guidance while raising questions about digital faith",
                  "es": "Habilitando experiencias religiosas virtuales y guía espiritual de IA mientras plantea preguntas sobre fe digital",
                  "de": "Virtuelle religiöse Erfahrungen und KI-spirituelle Führung ermöglichen während Fragen über digitalen Glauben aufkommen",
                  "nl": "Virtuele religieuze ervaringen en AI spirituele begeleiding mogelijk maken terwijl vragen over digitaal geloof ontstaan"
        },
        {
                  "en": "Eliminating all religious beliefs completely",
                  "es": "Eliminando completamente todas las creencias religiosas",
                  "de": "Alle religiösen Überzeugungen vollständig eliminieren",
                  "nl": "Alle religieuze overtuigingen volledig elimineren"
        },
        {
                  "en": "Making AI the only object of worship",
                  "es": "Haciendo de la IA el único objeto de adoración",
                  "de": "KI zum einzigen Anbetungsobjekt machen",
                  "nl": "AI het enige object van aanbidding maken"
        },
        {
                  "en": "Forcing everyone to follow the same religion",
                  "es": "Forzando a todos a seguir la misma religión",
                  "de": "Alle dazu zwingen derselben Religion zu folgen",
                  "nl": "Iedereen dwingen dezelfde religie te volgen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AI could enhance religious practice through virtual pilgrimages, AI-assisted prayer and meditation, and digital religious education, while also challenging traditional concepts of consciousness, soul, and divine creation as AI becomes more sophisticated.",
                  "es": "La IA podría mejorar la práctica religiosa a través de peregrinaciones virtuales, oración y meditación asistidas por IA y educación religiosa digital, mientras también desafía conceptos tradicionales de conciencia, alma y creación divina a medida que la IA se vuelve más sofisticada.",
                  "de": "KI könnte religiöse Praxis durch virtuelle Pilgerfahrten, KI-unterstützte Gebete und Meditation und digitale religiöse Bildung verbessern, während auch traditionelle Konzepte von Bewusstsein, Seele und göttlicher Schöpfung herausgefordert werden wenn KI sophistizierter wird.",
                  "nl": "AI zou religieuze praktijk kunnen verbeteren door virtuele bedevaarten, AI-ondersteund gebed en meditatie, en digitale religieuze educatie, terwijl het ook traditionele concepten van bewustzijn, ziel en goddelijke schepping uitdaagt naarmate AI meer geavanceerd wordt."
        }
      },
      {
        question: {
                  "en": "How might AI transform legal systems and justice delivery by 2040?",
                  "es": "¿Cómo podría la IA transformar los sistemas legales y la entrega de justicia para 2040?",
                  "de": "Wie könnte KI Rechtssysteme und Rechtsprechung bis 2040 verändern?",
                  "nl": "Hoe zou AI rechtssystemen en rechtvaardigheidsvoorziening tegen 2040 kunnen transformeren?"
        },
        options: [
        {
                  "en": "Eliminating the need for any laws",
                  "es": "Eliminando la necesidad de cualquier ley",
                  "de": "Die Notwendigkeit für jegliche Gesetze eliminieren",
                  "nl": "De noodzaak voor alle wetten elimineren"
        },
        {
                  "en": "Making all crimes punishable by the same sentence",
                  "es": "Haciendo todos los crímenes castigables con la misma sentencia",
                  "de": "Alle Verbrechen mit derselben Strafe bestrafen",
                  "nl": "Alle misdaden strafbaar maken met dezelfde straf"
        },
        {
                  "en": "Automating case analysis, predicting outcomes, and ensuring consistent application of laws",
                  "es": "Automatizando análisis de casos, prediciendo resultados y asegurando aplicación consistente de leyes",
                  "de": "Fallanalyse automatisieren, Ergebnisse vorhersagen und konsistente Gesetzesanwendung sicherstellen",
                  "nl": "Casusanalyse automatiseren, uitkomsten voorspellen en consistente toepassing van wetten waarborgen"
        },
        {
                  "en": "Replacing all judges with robots immediately",
                  "es": "Reemplazando inmediatamente a todos los jueces con robots",
                  "de": "Alle Richter sofort durch Roboter ersetzen",
                  "nl": "Alle rechters onmiddellijk vervangen door robots"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "AI can help analyze legal precedents, predict case outcomes, reduce bias in sentencing, and make legal services more accessible, but must be carefully implemented to ensure fairness, transparency, and protection of individual rights.",
                  "es": "La IA puede ayudar a analizar precedentes legales, predecir resultados de casos, reducir sesgo en sentencias y hacer servicios legales más accesibles, pero debe implementarse cuidadosamente para asegurar equidad, transparencia y protección de derechos individuales.",
                  "de": "KI kann helfen Rechtspräzedenzfälle zu analysieren, Fallausgänge vorherzusagen, Verzerrungen bei der Urteilsfindung zu reduzieren und Rechtsdienste zugänglicher zu machen, muss aber sorgfältig implementiert werden um Fairness, Transparenz und Schutz individueller Rechte zu gewährleisten.",
                  "nl": "AI kan helpen bij het analyseren van juridische precedenten, het voorspellen van case-uitkomsten, het verminderen van vooringenomenheid bij bestraffing en het toegankelijker maken van juridische diensten, maar moet zorgvuldig worden geïmplementeerd om eerlijkheid, transparantie en bescherming van individuele rechten te waarborgen."
        }
      },
      {
        question: {
                  "en": "What challenges might arise from AI-mediated social interactions by 2035?",
                  "es": "¿Qué desafíos podrían surgir de las interacciones sociales mediadas por IA para 2035?",
                  "de": "Welche Herausforderungen könnten durch KI-vermittelte soziale Interaktionen bis 2035 entstehen?",
                  "nl": "Welke uitdagingen zouden kunnen ontstaan door AI-gemedieerde sociale interacties tegen 2035?"
        },
        options: [
        {
                  "en": "Loss of authentic human connection and difficulty distinguishing between human and AI interactions",
                  "es": "Pérdida de conexión humana auténtica y dificultad para distinguir entre interacciones humanas y de IA",
                  "de": "Verlust authentischer menschlicher Verbindungen und Schwierigkeit zwischen menschlichen und KI-Interaktionen zu unterscheiden",
                  "nl": "Verlies van authentieke menselijke verbinding en moeilijkheid bij het onderscheiden tussen menselijke en AI-interacties"
        },
        {
                  "en": "Everyone becoming best friends with AI",
                  "es": "Todos volviéndose mejores amigos de la IA",
                  "de": "Alle werden beste Freunde mit KI",
                  "nl": "Iedereen wordt beste vrienden met AI"
        },
        {
                  "en": "Eliminating all social problems",
                  "es": "Eliminando todos los problemas sociales",
                  "de": "Alle sozialen Probleme eliminieren",
                  "nl": "Alle sociale problemen elimineren"
        },
        {
                  "en": "Making communication faster and easier only",
                  "es": "Solo haciendo la comunicación más rápida y fácil",
                  "de": "Kommunikation nur schneller und einfacher machen",
                  "nl": "Communicatie alleen sneller en gemakkelijker maken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "As AI becomes more sophisticated in mimicking human conversation and emotional responses, people may struggle to maintain authentic relationships, potentially leading to social isolation, emotional dependence on AI, and erosion of human empathy and social skills.",
                  "es": "A medida que la IA se vuelve más sofisticada imitando conversación humana y respuestas emocionales, las personas pueden tener dificultades para mantener relaciones auténticas, potencialmente llevando a aislamiento social, dependencia emocional de la IA y erosión de empatía humana y habilidades sociales.",
                  "de": "Da KI sophistizierter wird im Nachahmen menschlicher Konversation und emotionaler Reaktionen, könnten Menschen Schwierigkeiten haben authentische Beziehungen zu bewahren, was möglicherweise zu sozialer Isolation, emotionaler Abhängigkeit von KI und Erosion menschlicher Empathie und sozialer Fähigkeiten führt.",
                  "nl": "Naarmate AI meer geavanceerd wordt in het nabootsen van menselijke conversatie en emotionele reacties, kunnen mensen moeite hebben om authentieke relaties te onderhouden, wat mogelijk leidt tot sociale isolatie, emotionele afhankelijkheid van AI, en erosie van menselijke empathie en sociale vaardigheden."
        }
      },
      {
        question: {
                  "en": "How might AI influence global migration patterns by 2040?",
                  "es": "¿Cómo podría la IA influir en los patrones de migración global para 2040?",
                  "de": "Wie könnte KI globale Migrationsmuster bis 2040 beeinflussen?",
                  "nl": "Hoe zou AI wereldwijde migratiepatronen tegen 2040 kunnen beïnvloeden?"
        },
        options: [
        {
                  "en": "Making everyone move to the same city",
                  "es": "Haciendo que todos se muden a la misma ciudad",
                  "de": "Alle dazu bringen in dieselbe Stadt zu ziehen",
                  "nl": "Iedereen naar dezelfde stad laten verhuizen"
        },
        {
                  "en": "Stopping all migration permanently",
                  "es": "Deteniendo permanentemente toda migración",
                  "de": "Alle Migration dauerhaft stoppen",
                  "nl": "Alle migratie permanent stoppen"
        },
        {
                  "en": "Creating new tech hubs while potentially displacing workers, leading to complex migration flows",
                  "es": "Creando nuevos centros tecnológicos mientras potencialmente desplaza trabajadores, llevando a flujos de migración complejos",
                  "de": "Neue Technologiezentren schaffen während möglicherweise Arbeiter verdrängt werden, was zu komplexen Migrationsströmen führt",
                  "nl": "Nieuwe tech-hubs creëren terwijl mogelijk werknemers worden verdrongen, wat leidt tot complexe migratiestromen"
        },
        {
                  "en": "Only affecting rich countries",
                  "es": "Solo afectando países ricos",
                  "de": "Nur reiche Länder betreffen",
                  "nl": "Alleen rijke landen beïnvloeden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "AI development will create new economic centers attracting skilled workers, while automation may displace traditional industries, leading to both 'brain gain' in tech regions and economic migration from areas where jobs are automated away.",
                  "es": "El desarrollo de IA creará nuevos centros económicos atrayendo trabajadores calificados, mientras la automatización puede desplazar industrias tradicionales, llevando tanto a 'ganancia de cerebros' en regiones tecnológicas como migración económica de áreas donde trabajos son automatizados.",
                  "de": "KI-Entwicklung wird neue Wirtschaftszentren schaffen die qualifizierte Arbeiter anziehen, während Automatisierung traditionelle Industrien verdrängen könnte, was sowohl zu 'Brain Gain' in Technologieregionen als auch zu wirtschaftlicher Migration aus Gebieten führt wo Jobs wegautomatisiert werden.",
                  "nl": "AI-ontwikkeling zal nieuwe economische centra creëren die geschoolde werknemers aantrekken, terwijl automatisering traditionele industrieën kan verdringen, wat leidt tot zowel 'brain gain' in tech-regio's als economische migratie uit gebieden waar banen worden weggeautomatiseerd."
        }
      },
      {
        question: {
                  "en": "What role might AI play in disaster preparedness and response by 2035?",
                  "es": "¿Qué papel podría jugar la IA en la preparación y respuesta a desastres para 2035?",
                  "de": "Welche Rolle könnte KI bei Katastrophenvorsorge und -reaktion bis 2035 spielen?",
                  "nl": "Welke rol zou AI kunnen spelen bij rampenparaatheid en -reactie tegen 2035?"
        },
        options: [
        {
                  "en": "Making disasters more severe",
                  "es": "Haciendo los desastres más severos",
                  "de": "Katastrophen schwerer machen",
                  "nl": "Rampen ernstiger maken"
        },
        {
                  "en": "Predicting disasters, coordinating emergency responses, and optimizing evacuation routes in real-time",
                  "es": "Prediciendo desastres, coordinando respuestas de emergencia y optimizando rutas de evacuación en tiempo real",
                  "de": "Katastrophen vorhersagen, Notfallreaktionen koordinieren und Evakuierungsrouten in Echtzeit optimieren",
                  "nl": "Rampen voorspellen, noodresponsen coördineren en evacuatieroutes in realtime optimaliseren"
        },
        {
                  "en": "Only helping after disasters are completely over",
                  "es": "Solo ayudando después de que los desastres hayan terminado completamente",
                  "de": "Nur helfen nachdem Katastrophen vollständig vorbei sind",
                  "nl": "Alleen helpen nadat rampen volledig voorbij zijn"
        },
        {
                  "en": "Preventing all natural disasters from occurring",
                  "es": "Previniendo que ocurran todos los desastres naturales",
                  "de": "Alle Naturkatastrophen verhindern",
                  "nl": "Alle natuurrampen voorkomen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "AI can analyze weather patterns and seismic data to predict disasters earlier, optimize resource allocation during emergencies, coordinate rescue operations, and process real-time social media data to identify people in need of help during crises.",
                  "es": "La IA puede analizar patrones climáticos y datos sísmicos para predecir desastres más temprano, optimizar asignación de recursos durante emergencias, coordinar operaciones de rescate y procesar datos de redes sociales en tiempo real para identificar personas que necesitan ayuda durante crisis.",
                  "de": "KI kann Wettermuster und seismische Daten analysieren um Katastrophen früher vorherzusagen, Ressourcenallokation während Notfällen optimieren, Rettungsoperationen koordinieren und Echtzeitdaten sozialer Medien verarbeiten um Menschen zu identifizieren die Hilfe während Krisen benötigen.",
                  "nl": "AI kan weerpatronen en seismische data analyseren om rampen eerder te voorspellen, toewijzing van middelen tijdens noodsituaties optimaliseren, reddingsoperaties coördineren en realtime social media data verwerken om mensen te identificeren die hulp nodig hebben tijdens crises."
        }
      },
      {
        question: {
                  "en": "How might AI transform public health surveillance and disease prevention by 2040?",
                  "es": "¿Cómo podría la IA transformar la vigilancia de salud pública y la prevención de enfermedades para 2040?",
                  "de": "Wie könnte KI die öffentliche Gesundheitsüberwachung und Krankheitsprävention bis 2040 verändern?",
                  "nl": "Hoe zou AI de surveillance van de volksgezondheid en ziektepreventie tegen 2040 kunnen transformeren?"
        },
        options: [
        {
                  "en": "Only treating diseases after they spread globally",
                  "es": "Solo tratando enfermedades después de que se extiendan globalmente",
                  "de": "Krankheiten nur behandeln nachdem sie sich global ausgebreitet haben",
                  "nl": "Alleen ziektes behandelen nadat ze zich wereldwijd hebben verspreid"
        },
        {
                  "en": "Making health surveillance illegal",
                  "es": "Haciendo ilegal la vigilancia de salud",
                  "de": "Gesundheitsüberwachung illegal machen",
                  "nl": "Gezondheidssurveillance illegaal maken"
        },
        {
                  "en": "Enabling real-time disease tracking, early outbreak detection, and personalized prevention strategies",
                  "es": "Habilitando seguimiento de enfermedades en tiempo real, detección temprana de brotes y estrategias de prevención personalizadas",
                  "de": "Echtzeit-Krankheitsverfolgung, frühe Ausbruchserkennung und personalisierte Präventionsstrategien ermöglichen",
                  "nl": "Realtime ziektetracking, vroege uitbraakdetectie en gepersonaliseerde preventiestrategieën mogelijk maken"
        },
        {
                  "en": "Eliminating all diseases forever",
                  "es": "Eliminando todas las enfermedades para siempre",
                  "de": "Alle Krankheiten für immer eliminieren",
                  "nl": "Alle ziektes voor altijd elimineren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "AI will revolutionize public health by analyzing vast datasets from multiple sources (social media, search patterns, health records) to detect disease outbreaks early, predict epidemics, and create targeted intervention strategies before diseases spread widely.",
                  "es": "La IA revolucionará la salud pública analizando vastos conjuntos de datos de múltiples fuentes (redes sociales, patrones de búsqueda, registros de salud) para detectar brotes de enfermedades temprano, predecir epidemias y crear estrategias de intervención dirigidas antes de que las enfermedades se extiendan ampliamente.",
                  "de": "KI wird die öffentliche Gesundheit revolutionieren durch Analyse riesiger Datensätze aus mehreren Quellen (soziale Medien, Suchmuster, Gesundheitsakten) um Krankheitsausbrüche früh zu erkennen, Epidemien vorherzusagen und gezielte Interventionsstrategien zu erstellen bevor sich Krankheiten weit ausbreiten.",
                  "nl": "AI zal de volksgezondheid revolutioneren door het analyseren van enorme datasets uit meerdere bronnen (sociale media, zoekpatronen, gezondheidsregisters) om ziekteuitbraken vroeg te detecteren, epidemieën te voorspellen en gerichte interventiestrategieën te creëren voordat ziektes zich wijd verspreiden."
        }
      },
      {
        question: {
                  "en": "What ethical considerations will become most important for AI governance by 2035?",
                  "es": "¿Qué consideraciones éticas se volverán más importantes para la gobernanza de IA para 2035?",
                  "de": "Welche ethischen Überlegungen werden für KI-Governance bis 2035 am wichtigsten?",
                  "nl": "Welke ethische overwegingen zullen het belangrijkst worden voor AI-governance tegen 2035?"
        },
        options: [
        {
                  "en": "Keeping all AI technology secret",
                  "es": "Manteniendo toda la tecnología de IA en secreto",
                  "de": "Alle KI-Technologie geheim halten",
                  "nl": "Alle AI-technologie geheim houden"
        },
        {
                  "en": "Ensuring AI transparency, preventing algorithmic discrimination, and protecting human agency",
                  "es": "Asegurando transparencia de IA, previniendo discriminación algorítmica y protegiendo agencia humana",
                  "de": "KI-Transparenz sicherstellen, algorithmische Diskriminierung verhindern und menschliche Handlungsfähigkeit schützen",
                  "nl": "AI-transparantie waarborgen, algoritmische discriminatie voorkomen en menselijke autonomie beschermen"
        },
        {
                  "en": "Making AI as powerful as possible without restrictions",
                  "es": "Haciendo la IA tan poderosa como sea posible sin restricciones",
                  "de": "KI so mächtig wie möglich ohne Einschränkungen machen",
                  "nl": "AI zo krachtig mogelijk maken zonder beperkingen"
        },
        {
                  "en": "Only allowing corporations to control AI",
                  "es": "Solo permitiendo que las corporaciones controlen la IA",
                  "de": "Nur Unternehmen erlauben KI zu kontrollieren",
                  "nl": "Alleen bedrijven toestaan AI te controleren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Key ethical priorities will include ensuring AI systems are explainable and auditable, preventing bias and discrimination in automated decisions, maintaining human oversight and control, protecting privacy, and ensuring equitable access to AI benefits across society.",
                  "es": "Las prioridades éticas clave incluirán asegurar que los sistemas de IA sean explicables y auditables, prevenir sesgo y discriminación en decisiones automatizadas, mantener supervisión y control humano, proteger la privacidad y asegurar acceso equitativo a beneficios de IA en toda la sociedad.",
                  "de": "Wichtige ethische Prioritäten werden umfassen dass KI-Systeme erklärbar und überprüfbar sind, Verzerrung und Diskriminierung in automatisierten Entscheidungen verhindern, menschliche Überwachung und Kontrolle bewahren, Privatsphäre schützen und gerechten Zugang zu KI-Vorteilen in der gesamten Gesellschaft sicherstellen.",
                  "nl": "Belangrijke ethische prioriteiten zullen zijn ervoor zorgen dat AI-systemen uitlegbaar en controleerbaar zijn, vooringenomenheid en discriminatie in geautomatiseerde beslissingen voorkomen, menselijk toezicht en controle behouden, privacy beschermen en gelijke toegang tot AI-voordelen in de hele samenleving waarborgen."
        }
      },
      {
        question: {
                  "en": "How might AI impact food security and agricultural sustainability by 2040?",
                  "es": "¿Cómo podría la IA impactar la seguridad alimentaria y la sostenibilidad agrícola para 2040?",
                  "de": "Wie könnte KI die Ernährungssicherheit und landwirtschaftliche Nachhaltigkeit bis 2040 beeinflussen?",
                  "nl": "Hoe zou AI voedselzekerheid en landbouwduurzaamheid tegen 2040 kunnen beïnvloeden?"
        },
        options: [
        {
                  "en": "Eliminating traditional farming entirely",
                  "es": "Eliminando completamente la agricultura tradicional",
                  "de": "Traditionelle Landwirtschaft vollständig eliminieren",
                  "nl": "Traditionele landbouw volledig elimineren"
        },
        {
                  "en": "Optimizing crop yields, reducing waste, and enabling vertical farming through precision agriculture",
                  "es": "Optimizando rendimientos de cultivos, reduciendo desperdicios y habilitando agricultura vertical a través de agricultura de precisión",
                  "de": "Ernteerträge optimieren, Verschwendung reduzieren und vertikale Landwirtschaft durch Präzisionslandwirtschaft ermöglichen",
                  "nl": "Oogstopbrengsten optimaliseren, verspilling verminderen en verticale landbouw mogelijk maken via precisielandbouw"
        },
        {
                  "en": "Only producing synthetic food",
                  "es": "Solo produciendo comida sintética",
                  "de": "Nur synthetische Nahrung produzieren",
                  "nl": "Alleen synthetisch voedsel produceren"
        },
        {
                  "en": "Making all farming completely automated without humans",
                  "es": "Haciendo toda la agricultura completamente automatizada sin humanos",
                  "de": "Gesamte Landwirtschaft vollständig ohne Menschen automatisieren",
                  "nl": "Alle landbouw volledig geautomatiseerd maken zonder mensen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "AI-driven agriculture can dramatically increase food production efficiency through precision monitoring of soil, weather, and crops, automated pest detection, optimized irrigation, and indoor vertical farms that produce food year-round with minimal environmental impact.",
                  "es": "La agricultura impulsada por IA puede aumentar dramáticamente la eficiencia de producción de alimentos a través de monitoreo de precisión de suelo, clima y cultivos, detección automatizada de plagas, riego optimizado y granjas verticales interiores que producen alimentos todo el año con impacto ambiental mínimo.",
                  "de": "KI-gesteuerte Landwirtschaft kann die Nahrungsmittelproduktionseffizienz dramatisch steigern durch Präzisionsüberwachung von Boden, Wetter und Pflanzen, automatisierte Schädlingserkennung, optimierte Bewässerung und Indoor-Vertikalfarmen die ganzjährig Nahrung mit minimaler Umweltbelastung produzieren.",
                  "nl": "AI-gedreven landbouw kan de efficiëntie van voedselproductie dramatisch verhogen door precisie monitoring van bodem, weer en gewassen, geautomatiseerde plaagdetectie, geoptimaliseerde irrigatie en indoor verticale boerderijen die het hele jaar door voedsel produceren met minimale milieu-impact."
        }
      },
      {
        question: {
                  "en": "What role might AI play in combating climate change by 2035?",
                  "es": "¿Qué papel podría jugar la IA en combatir el cambio climático para 2035?",
                  "de": "Welche Rolle könnte KI beim Kampf gegen den Klimawandel bis 2035 spielen?",
                  "nl": "Welke rol zou AI kunnen spelen bij het bestrijden van klimaatverandering tegen 2035?"
        },
        options: [
        {
                  "en": "Completely reversing climate change instantly",
                  "es": "Revirtiendo completamente el cambio climático instantáneamente",
                  "de": "Klimawandel sofort vollständig umkehren",
                  "nl": "Klimaatverandering volledig onmiddellijk omkeren"
        },
        {
                  "en": "Making climate change worse through energy consumption",
                  "es": "Empeorando el cambio climático a través del consumo de energía",
                  "de": "Klimawandel durch Energieverbrauch verschlimmern",
                  "nl": "Klimaatverandering verergeren door energieverbruik"
        },
        {
                  "en": "Optimizing energy grids, accelerating clean energy development, and modeling climate solutions",
                  "es": "Optimizando redes energéticas, acelerando desarrollo de energía limpia y modelando soluciones climáticas",
                  "de": "Energienetze optimieren, saubere Energieentwicklung beschleunigen und Klimalösungen modellieren",
                  "nl": "Energienetwerken optimaliseren, ontwikkeling van schone energie versnellen en klimaatoplossingen modelleren"
        },
        {
                  "en": "Only monitoring climate without taking action",
                  "es": "Solo monitoreando el clima sin tomar acción",
                  "de": "Nur Klima überwachen ohne Maßnahmen zu ergreifen",
                  "nl": "Alleen klimaat monitoren zonder actie te ondernemen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "AI can optimize renewable energy distribution, discover new materials for solar panels and batteries, model climate scenarios to guide policy, optimize transportation networks to reduce emissions, and accelerate carbon capture technology development.",
                  "es": "La IA puede optimizar la distribución de energía renovable, descubrir nuevos materiales para paneles solares y baterías, modelar escenarios climáticos para guiar políticas, optimizar redes de transporte para reducir emisiones y acelerar el desarrollo de tecnología de captura de carbono.",
                  "de": "KI kann erneuerbare Energieverteilung optimieren, neue Materialien für Solarpanele und Batterien entdecken, Klimaszenarien modellieren um Politik zu leiten, Transportnetze optimieren um Emissionen zu reduzieren und Kohlenstoffabscheidungstechnologieentwicklung beschleunigen.",
                  "nl": "AI kan distributie van hernieuwbare energie optimaliseren, nieuwe materialen voor zonnepanelen en batterijen ontdekken, klimaatscenario's modelleren om beleid te sturen, transportnetwerken optimaliseren om uitstoot te verminderen en ontwikkeling van koolstofafvangtechnologie versnellen."
        }
      },
      {
        question: {
                  "en": "How might AI transform education accessibility worldwide by 2040?",
                  "es": "¿Cómo podría la IA transformar la accesibilidad educativa mundialmente para 2040?",
                  "de": "Wie könnte KI die Bildungszugänglichkeit weltweit bis 2040 verändern?",
                  "nl": "Hoe zou AI de toegankelijkheid van onderwijs wereldwijd tegen 2040 kunnen transformeren?"
        },
        options: [
        {
                  "en": "Replacing all teachers immediately worldwide",
                  "es": "Reemplazando inmediatamente a todos los maestros mundialmente",
                  "de": "Alle Lehrer weltweit sofort ersetzen",
                  "nl": "Alle leraren wereldwijd onmiddellijk vervangen"
        },
        {
                  "en": "Providing personalized tutoring and quality education to remote and underserved populations",
                  "es": "Proporcionando tutoría personalizada y educación de calidad a poblaciones remotas y desatendidas",
                  "de": "Personalisierte Betreuung und hochwertige Bildung für abgelegene und unterversorgte Bevölkerungsgruppen bereitstellen",
                  "nl": "Gepersonaliseerde begeleiding en kwalitatief onderwijs bieden aan afgelegen en onderbedeelde bevolkingsgroepen"
        },
        {
                  "en": "Making education only available to the wealthy",
                  "es": "Haciendo la educación solo disponible para los ricos",
                  "de": "Bildung nur für Wohlhabende verfügbar machen",
                  "nl": "Onderwijs alleen beschikbaar maken voor de rijken"
        },
        {
                  "en": "Eliminating schools entirely",
                  "es": "Eliminando las escuelas completamente",
                  "de": "Schulen vollständig eliminieren",
                  "nl": "Scholen volledig elimineren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "AI-powered educational platforms can provide personalized, adaptive learning experiences at minimal cost, offer real-time translation for multilingual education, and bring quality instruction to areas without access to qualified teachers, potentially democratizing education globally.",
                  "es": "Las plataformas educativas impulsadas por IA pueden proporcionar experiencias de aprendizaje personalizadas y adaptativas a costo mínimo, ofrecer traducción en tiempo real para educación multilingüe y llevar instrucción de calidad a áreas sin acceso a maestros calificados, potencialmente democratizando la educación globalmente.",
                  "de": "KI-gestützte Bildungsplattformen können personalisierte, adaptive Lernerfahrungen zu minimalen Kosten bieten, Echtzeitübersetzung für mehrsprachige Bildung anbieten und hochwertige Anleitung in Gebiete ohne Zugang zu qualifizierten Lehrern bringen, wodurch Bildung global demokratisiert werden könnte.",
                  "nl": "AI-aangedreven educatieve platforms kunnen gepersonaliseerde, adaptieve leerervaringen bieden tegen minimale kosten, realtime vertaling bieden voor meertalig onderwijs en kwaliteitsonderwijs brengen naar gebieden zonder toegang tot gekwalificeerde leraren, waardoor onderwijs mogelijk wereldwijd wordt gedemocratiseerd."
        }
      },
      {
        question: {
                  "en": "What challenges might AI create for labor markets and employment by 2035?",
                  "es": "¿Qué desafíos podría crear la IA para los mercados laborales y el empleo para 2035?",
                  "de": "Welche Herausforderungen könnte KI für Arbeitsmärkte und Beschäftigung bis 2035 schaffen?",
                  "nl": "Welke uitdagingen zou AI kunnen creëren voor arbeidsmarkten en werkgelegenheid tegen 2035?"
        },
        options: [
        {
                  "en": "Creating unlimited jobs for everyone",
                  "es": "Creando trabajos ilimitados para todos",
                  "de": "Unbegrenzte Arbeitsplätze für alle schaffen",
                  "nl": "Onbeperkte banen creëren voor iedereen"
        },
        {
                  "en": "Having no impact on employment whatsoever",
                  "es": "Sin tener ningún impacto en el empleo en absoluto",
                  "de": "Überhaupt keine Auswirkung auf Beschäftigung haben",
                  "nl": "Helemaal geen impact hebben op werkgelegenheid"
        },
        {
                  "en": "Only affecting manual labor jobs",
                  "es": "Solo afectando trabajos de labor manual",
                  "de": "Nur manuelle Arbeitsplätze betreffen",
                  "nl": "Alleen handarbeidsbanen beïnvloeden"
        },
        {
                  "en": "Widespread job displacement requiring massive retraining and potential universal basic income programs",
                  "es": "Desplazamiento laboral generalizado requiriendo reentrenamiento masivo y programas potenciales de ingreso básico universal",
                  "de": "Weitverbreitete Arbeitsplatzverdrängung erfordert massive Umschulung und potenzielle Programme für universelles Grundeinkommen",
                  "nl": "Wijdverbreide banenverdwijning die massale omscholing en potentiële universele basisinkomensprogramma's vereist"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "AI automation will likely displace many jobs across sectors including white-collar professions, creating urgent needs for retraining programs, social safety nets, and potentially new economic models like universal basic income to address structural unemployment and income inequality.",
                  "es": "La automatización de IA probablemente desplazará muchos trabajos en todos los sectores incluyendo profesiones de cuello blanco, creando necesidades urgentes de programas de reentrenamiento, redes de seguridad social y potencialmente nuevos modelos económicos como ingreso básico universal para abordar desempleo estructural y desigualdad de ingresos.",
                  "de": "KI-Automatisierung wird wahrscheinlich viele Arbeitsplätze in allen Sektoren einschließlich Büroangestellten verdrängen, wodurch dringende Bedürfnisse für Umschulungsprogramme, soziale Sicherheitsnetze und potenziell neue Wirtschaftsmodelle wie universelles Grundeinkommen entstehen um strukturelle Arbeitslosigkeit und Einkommensungleichheit anzugehen.",
                  "nl": "AI-automatisering zal waarschijnlijk veel banen in alle sectoren verdringen inclusief kantoorberoepen, waardoor urgente behoeften ontstaan voor omscholingsprogramma's, sociale vangnettten en mogelijk nieuwe economische modellen zoals universeel basisinkomen om structurele werkloosheid en inkomensongelijkheid aan te pakken."
        }
      },
      {
        question: {
                  "en": "How might AI reshape creative industries and artistic production by 2040?",
                  "es": "¿Cómo podría la IA remodelar las industrias creativas y la producción artística para 2040?",
                  "de": "Wie könnte KI kreative Industrien und künstlerische Produktion bis 2040 umgestalten?",
                  "nl": "Hoe zou AI creatieve industrieën en artistieke productie tegen 2040 kunnen hervormen?"
        },
        options: [
        {
                  "en": "Making all art identical and formulaic",
                  "es": "Haciendo todo el arte idéntico y formulaico",
                  "de": "Alle Kunst identisch und formelhaft machen",
                  "nl": "Alle kunst identiek en formuleachtig maken"
        },
        {
                  "en": "Having no impact on creative work",
                  "es": "Sin tener impacto en el trabajo creativo",
                  "de": "Keine Auswirkung auf kreative Arbeit haben",
                  "nl": "Geen impact hebben op creatief werk"
        },
        {
                  "en": "Democratizing creative tools while challenging notions of authorship, originality, and artistic value",
                  "es": "Democratizando herramientas creativas mientras desafía nociones de autoría, originalidad y valor artístico",
                  "de": "Kreative Werkzeuge demokratisieren während Begriffe von Urheberschaft, Originalität und künstlerischem Wert herausgefordert werden",
                  "nl": "Creatieve tools democratiseren terwijl noties van auteurschap, originaliteit en artistieke waarde worden uitgedaagd"
        },
        {
                  "en": "Eliminating all human creativity",
                  "es": "Eliminando toda creatividad humana",
                  "de": "Alle menschliche Kreativität eliminieren",
                  "nl": "Alle menselijke creativiteit elimineren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "AI will enable more people to create music, art, and literature with sophisticated tools, but will also raise complex questions about copyright, what constitutes 'original' work, the value of human creativity, and how artists should be compensated in an AI-assisted creative landscape.",
                  "es": "La IA permitirá a más personas crear música, arte y literatura con herramientas sofisticadas, pero también planteará preguntas complejas sobre derechos de autor, qué constituye trabajo 'original', el valor de la creatividad humana y cómo los artistas deberían ser compensados en un paisaje creativo asistido por IA.",
                  "de": "KI wird mehr Menschen ermöglichen Musik, Kunst und Literatur mit ausgefeilten Werkzeugen zu schaffen, wird aber auch komplexe Fragen über Urheberrecht aufwerfen, was 'originale' Arbeit ausmacht, der Wert menschlicher Kreativität und wie Künstler in einer KI-unterstützten kreativen Landschaft entlohnt werden sollten.",
                  "nl": "AI zal meer mensen in staat stellen muziek, kunst en literatuur te creëren met geavanceerde tools, maar zal ook complexe vragen oproepen over auteursrecht, wat 'origineel' werk constitueert, de waarde van menselijke creativiteit en hoe kunstenaars gecompenseerd moeten worden in een AI-ondersteund creatief landschap."
        }
      },
      {
        question: {
                  "en": "What role might AI play in space exploration and colonization by 2040?",
                  "es": "¿Qué papel podría jugar la IA en la exploración espacial y colonización para 2040?",
                  "de": "Welche Rolle könnte KI bei Weltraumforschung und Kolonisierung bis 2040 spielen?",
                  "nl": "Welke rol zou AI kunnen spelen bij ruimteverkenning en kolonisatie tegen 2040?"
        },
        options: [
        {
                  "en": "Making space travel impossible",
                  "es": "Haciendo el viaje espacial imposible",
                  "de": "Weltraumreisen unmöglich machen",
                  "nl": "Ruimtereizen onmogelijk maken"
        },
        {
                  "en": "Replacing all astronauts with robots immediately",
                  "es": "Reemplazando inmediatamente a todos los astronautas con robots",
                  "de": "Alle Astronauten sofort durch Roboter ersetzen",
                  "nl": "Alle astronauten onmiddellijk vervangen door robots"
        },
        {
                  "en": "Only monitoring space from Earth",
                  "es": "Solo monitoreando el espacio desde la Tierra",
                  "de": "Nur Weltraum von der Erde überwachen",
                  "nl": "Alleen de ruimte monitoren vanaf de aarde"
        },
        {
                  "en": "Autonomous spacecraft, planetary habitat management, and real-time decision-making during missions",
                  "es": "Naves espaciales autónomas, gestión de hábitats planetarios y toma de decisiones en tiempo real durante misiones",
                  "de": "Autonome Raumschiffe, Verwaltung planetarer Lebensräume und Echtzeitentscheidungen während Missionen",
                  "nl": "Autonome ruimtevaartuigen, beheer van planetaire habitats en realtime besluitvorming tijdens missies"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "AI will be essential for autonomous spacecraft navigation, managing life support systems in space habitats, analyzing extraterrestrial environments, making split-second decisions during emergencies, and operating robotic systems for construction and resource extraction on other worlds.",
                  "es": "La IA será esencial para navegación autónoma de naves espaciales, gestionar sistemas de soporte vital en hábitats espaciales, analizar ambientes extraterrestres, tomar decisiones en fracciones de segundo durante emergencias y operar sistemas robóticos para construcción y extracción de recursos en otros mundos.",
                  "de": "KI wird wesentlich sein für autonome Raumschiffnavigation, Verwaltung von Lebenserhaltungssystemen in Weltraumhabitaten, Analyse außerirdischer Umgebungen, Sekundenbruchteil-Entscheidungen während Notfällen und Betrieb robotischer Systeme für Konstruktion und Ressourcengewinnung auf anderen Welten.",
                  "nl": "AI zal essentieel zijn voor autonome ruimtevaartuignavigatie, beheer van levensondersteunende systemen in ruimtehabitats, analyse van buitenaardse omgevingen, beslissingen in een fractie van een seconde tijdens noodsituaties en bediening van robotsystemen voor constructie en grondstofwinning op andere werelden."
        }
      },
      {
        question: {
                  "en": "How might AI impact financial systems and economic stability by 2035?",
                  "es": "¿Cómo podría la IA impactar los sistemas financieros y la estabilidad económica para 2035?",
                  "de": "Wie könnte KI Finanzsysteme und wirtschaftliche Stabilität bis 2035 beeinflussen?",
                  "nl": "Hoe zou AI financiële systemen en economische stabiliteit tegen 2035 kunnen beïnvloeden?"
        },
        options: [
        {
                  "en": "Enabling algorithmic trading, fraud detection, and personalized banking while creating systemic risks",
                  "es": "Habilitando trading algorítmico, detección de fraude y banca personalizada mientras crea riesgos sistémicos",
                  "de": "Algorithmischen Handel, Betrugserkennung und personalisiertes Banking ermöglichen während systemische Risiken entstehen",
                  "nl": "Algoritmische handel, fraudedetectie en gepersonaliseerd bankieren mogelijk maken terwijl systemische risico's worden gecreëerd"
        },
        {
                  "en": "Eliminating all financial institutions",
                  "es": "Eliminando todas las instituciones financieras",
                  "de": "Alle Finanzinstitutionen eliminieren",
                  "nl": "Alle financiële instellingen elimineren"
        },
        {
                  "en": "Only helping banks make more money",
                  "es": "Solo ayudando a los bancos a ganar más dinero",
                  "de": "Nur Banken helfen mehr Geld zu verdienen",
                  "nl": "Alleen banken helpen meer geld te verdienen"
        },
        {
                  "en": "Making everyone equally wealthy instantly",
                  "es": "Haciendo a todos igualmente ricos instantáneamente",
                  "de": "Alle sofort gleich wohlhabend machen",
                  "nl": "Iedereen onmiddellijk even rijk maken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AI will transform finance through high-frequency trading, predictive market analysis, automated fraud detection, and personalized financial services, but may also introduce new risks including market manipulation, flash crashes, and concentration of financial power in AI-driven institutions.",
                  "es": "La IA transformará las finanzas a través de trading de alta frecuencia, análisis predictivo de mercados, detección automatizada de fraude y servicios financieros personalizados, pero también puede introducir nuevos riesgos incluyendo manipulación de mercados, caídas relámpago y concentración de poder financiero en instituciones impulsadas por IA.",
                  "de": "KI wird Finanzen durch Hochfrequenzhandel, prädiktive Marktanalyse, automatisierte Betrugserkennung und personalisierte Finanzdienstleistungen transformieren, könnte aber auch neue Risiken einführen einschließlich Marktmanipulation, Flash Crashes und Konzentration finanzieller Macht in KI-gesteuerten Institutionen.",
                  "nl": "AI zal financiën transformeren door hoogfrequente handel, voorspellende marktanalyse, geautomatiseerde fraudedetectie en gepersonaliseerde financiële diensten, maar kan ook nieuwe risico's introduceren inclusief marktmanipulatie, flash crashes en concentratie van financiële macht in AI-gedreven instellingen."
        }
      },
      {
        question: {
                  "en": "What challenges might arise from AI-powered surveillance technologies by 2040?",
                  "es": "¿Qué desafíos podrían surgir de las tecnologías de vigilancia impulsadas por IA para 2040?",
                  "de": "Welche Herausforderungen könnten durch KI-gestützte Überwachungstechnologien bis 2040 entstehen?",
                  "nl": "Welke uitdagingen zouden kunnen ontstaan door AI-aangedreven surveillancetechnologieën tegen 2040?"
        },
        options: [
        {
                  "en": "Making everyone feel perfectly safe always",
                  "es": "Haciendo que todos se sientan perfectamente seguros siempre",
                  "de": "Alle immer perfekt sicher fühlen lassen",
                  "nl": "Iedereen zich altijd perfect veilig laten voelen"
        },
        {
                  "en": "Only monitoring public spaces harmlessly",
                  "es": "Solo monitoreando espacios públicos inofensivamente",
                  "de": "Nur öffentliche Räume harmlos überwachen",
                  "nl": "Alleen openbare ruimtes onschadelijk monitoren"
        },
        {
                  "en": "Erosion of privacy, potential for mass surveillance states, and chilling effects on free expression",
                  "es": "Erosión de privacidad, potencial para estados de vigilancia masiva y efectos escalofriantes en expresión libre",
                  "de": "Erosion der Privatsphäre, Potenzial für Massenüberwachungsstaaten und abschreckende Effekte auf freie Meinungsäußerung",
                  "nl": "Erosie van privacy, potentieel voor massa-surveillance staten en afschrikeffecten op vrije meningsuiting"
        },
        {
                  "en": "Complete elimination of all crime forever",
                  "es": "Eliminación completa de todo crimen para siempre",
                  "de": "Vollständige Eliminierung aller Verbrechen für immer",
                  "nl": "Volledige eliminatie van alle criminaliteit voor altijd"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Advanced AI surveillance combining facial recognition, behavior analysis, and predictive policing could enable unprecedented monitoring of citizens, potentially creating authoritarian control, suppressing dissent, and fundamentally altering the balance between security and individual freedom.",
                  "es": "La vigilancia avanzada de IA combinando reconocimiento facial, análisis de comportamiento y vigilancia predictiva podría permitir monitoreo sin precedentes de ciudadanos, potencialmente creando control autoritario, suprimiendo disidencia y alterando fundamentalmente el equilibrio entre seguridad y libertad individual.",
                  "de": "Fortgeschrittene KI-Überwachung die Gesichtserkennung, Verhaltensanalyse und prädiktive Polizeiarbeit kombiniert könnte beispiellose Überwachung von Bürgern ermöglichen, potenziell autoritäre Kontrolle schaffen, Dissens unterdrücken und das Gleichgewicht zwischen Sicherheit und individueller Freiheit fundamental verändern.",
                  "nl": "Geavanceerde AI-surveillance die gezichtsherkenning, gedragsanalyse en voorspellend politiewerk combineert, zou ongekende monitoring van burgers mogelijk kunnen maken, wat mogelijk autoritaire controle creëert, dissidentie onderdrukt en fundamenteel de balans tussen veiligheid en individuele vrijheid verandert."
        }
      },
      {
        question: {
                  "en": "How might AI change the nature of warfare and international security by 2035?",
                  "es": "¿Cómo podría la IA cambiar la naturaleza de la guerra y la seguridad internacional para 2035?",
                  "de": "Wie könnte KI die Natur von Kriegsführung und internationaler Sicherheit bis 2035 verändern?",
                  "nl": "Hoe zou AI de aard van oorlogsvoering en internationale veiligheid tegen 2035 kunnen veranderen?"
        },
        options: [
        {
                  "en": "Creating permanent world peace immediately",
                  "es": "Creando paz mundial permanente inmediatamente",
                  "de": "Sofort dauerhaften Weltfrieden schaffen",
                  "nl": "Onmiddellijk permanente wereldvrede creëren"
        },
        {
                  "en": "Only defending without any offensive capability",
                  "es": "Solo defendiendo sin ninguna capacidad ofensiva",
                  "de": "Nur verteidigen ohne offensive Fähigkeit",
                  "nl": "Alleen verdedigen zonder enige offensieve capaciteit"
        },
        {
                  "en": "Autonomous weapons, cyber warfare capabilities, and algorithmic defense systems raising ethical concerns",
                  "es": "Armas autónomas, capacidades de guerra cibernética y sistemas de defensa algorítmicos planteando preocupaciones éticas",
                  "de": "Autonome Waffen, Cyberkriegsfähigkeiten und algorithmische Verteidigungssysteme werfen ethische Bedenken auf",
                  "nl": "Autonome wapens, cyberoorlogscapaciteiten en algoritmische verdedigingssystemen roepen ethische zorgen op"
        },
        {
                  "en": "Making all weapons completely harmless",
                  "es": "Haciendo todas las armas completamente inofensivas",
                  "de": "Alle Waffen vollständig harmlos machen",
                  "nl": "Alle wapens volledig onschadelijk maken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "AI will enable autonomous weapon systems, sophisticated cyber attacks, and rapid decision-making in conflicts, raising urgent questions about accountability for AI decisions in warfare, the risk of AI arms races, and whether lethal autonomous weapons should be banned internationally.",
                  "es": "La IA permitirá sistemas de armas autónomas, ataques cibernéticos sofisticados y toma de decisiones rápida en conflictos, planteando preguntas urgentes sobre responsabilidad por decisiones de IA en guerra, el riesgo de carreras armamentistas de IA y si las armas autónomas letales deberían prohibirse internacionalmente.",
                  "de": "KI wird autonome Waffensysteme, ausgeklügelte Cyberangriffe und schnelle Entscheidungsfindung in Konflikten ermöglichen, wirft dringende Fragen über Verantwortlichkeit für KI-Entscheidungen in Kriegsführung auf, das Risiko von KI-Wettrüsten und ob tödliche autonome Waffen international verboten werden sollten.",
                  "nl": "AI zal autonome wapensystemen, geavanceerde cyberaanvallen en snelle besluitvorming in conflicten mogelijk maken, wat urgente vragen oproept over verantwoordelijkheid voor AI-beslissingen in oorlogsvoering, het risico van AI-wapenwedlopen en of dodelijke autonome wapens internationaal verboden moeten worden."
        }
      },
      {
        question: {
                  "en": "What role might AI play in eldercare and aging populations by 2040?",
                  "es": "¿Qué papel podría jugar la IA en el cuidado de ancianos y poblaciones envejecidas para 2040?",
                  "de": "Welche Rolle könnte KI bei Altenpflege und alternden Bevölkerungen bis 2040 spielen?",
                  "nl": "Welke rol zou AI kunnen spelen bij ouderenzorg en vergrijzende bevolkingen tegen 2040?"
        },
        options: [
        {
                  "en": "Companion robots, health monitoring, and assisted living systems enabling independent aging",
                  "es": "Robots compañeros, monitoreo de salud y sistemas de vida asistida permitiendo envejecimiento independiente",
                  "de": "Begleitroboter, Gesundheitsüberwachung und Systeme für betreutes Wohnen ermöglichen unabhängiges Altern",
                  "nl": "Gezelschapsrobots, gezondheidsmonitoring en systemen voor begeleid wonen die onafhankelijk ouder worden mogelijk maken"
        },
        {
                  "en": "Only providing basic medical monitoring",
                  "es": "Solo proporcionando monitoreo médico básico",
                  "de": "Nur grundlegende medizinische Überwachung bieten",
                  "nl": "Alleen basis medische monitoring bieden"
        },
        {
                  "en": "Replacing all human caregivers completely",
                  "es": "Reemplazando completamente a todos los cuidadores humanos",
                  "de": "Alle menschlichen Pflegekräfte vollständig ersetzen",
                  "nl": "Alle menselijke verzorgers volledig vervangen"
        },
        {
                  "en": "Eliminating the need for elderly care entirely",
                  "es": "Eliminando completamente la necesidad de cuidado de ancianos",
                  "de": "Den Bedarf an Altenpflege vollständig eliminieren",
                  "nl": "De noodzaak voor ouderenzorg volledig elimineren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AI-powered assistive technologies including companion robots, fall detection systems, medication reminders, and health monitoring can help elderly people maintain independence longer, but raise questions about social isolation, dignity, and the importance of human interaction in care.",
                  "es": "Las tecnologías asistivas impulsadas por IA incluyendo robots compañeros, sistemas de detección de caídas, recordatorios de medicamentos y monitoreo de salud pueden ayudar a personas ancianas a mantener independencia por más tiempo, pero plantean preguntas sobre aislamiento social, dignidad e importancia de interacción humana en el cuidado.",
                  "de": "KI-gestützte Hilfstechnologien einschließlich Begleitrobotern, Sturzerkennung, Medikamentenerinnerungen und Gesundheitsüberwachung können älteren Menschen helfen länger unabhängig zu bleiben, werfen aber Fragen über soziale Isolation, Würde und die Wichtigkeit menschlicher Interaktion in der Pflege auf.",
                  "nl": "AI-aangedreven assistentietechnologieën inclusief gezelschapsrobots, valsystemen, medicijnherinneringen en gezondheidsmonitoring kunnen oudere mensen helpen langer onafhankelijk te blijven, maar roepen vragen op over sociale isolatie, waardigheid en het belang van menselijke interactie in zorg."
        }
      },
      {
        question: {
                  "en": "How might AI impact scientific research and discovery by 2035?",
                  "es": "¿Cómo podría la IA impactar la investigación científica y el descubrimiento para 2035?",
                  "de": "Wie könnte KI wissenschaftliche Forschung und Entdeckung bis 2035 beeinflussen?",
                  "nl": "Hoe zou AI wetenschappelijk onderzoek en ontdekking tegen 2035 kunnen beïnvloeden?"
        },
        options: [
        {
                  "en": "Solving all scientific mysteries immediately",
                  "es": "Resolviendo todos los misterios científicos inmediatamente",
                  "de": "Alle wissenschaftlichen Mysterien sofort lösen",
                  "nl": "Alle wetenschappelijke mysteries onmiddellijk oplossen"
        },
        {
                  "en": "Replacing all human scientists permanently",
                  "es": "Reemplazando permanentemente a todos los científicos humanos",
                  "de": "Alle menschlichen Wissenschaftler dauerhaft ersetzen",
                  "nl": "Alle menselijke wetenschappers permanent vervangen"
        },
        {
                  "en": "Accelerating hypothesis generation, experimental design, and pattern discovery across all sciences",
                  "es": "Acelerando generación de hipótesis, diseño experimental y descubrimiento de patrones en todas las ciencias",
                  "de": "Hypothesengenerierung, experimentelles Design und Musterentdeckung in allen Wissenschaften beschleunigen",
                  "nl": "Hypothesegeneratie, experimenteel ontwerp en patroonontdekking in alle wetenschappen versnellen"
        },
        {
                  "en": "Only analyzing existing data without discoveries",
                  "es": "Solo analizando datos existentes sin descubrimientos",
                  "de": "Nur vorhandene Daten analysieren ohne Entdeckungen",
                  "nl": "Alleen bestaande gegevens analyseren zonder ontdekkingen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "AI is already discovering new drugs, materials, and scientific patterns faster than humans alone. By 2035, AI could autonomously design experiments, generate novel hypotheses, and potentially make breakthrough discoveries in physics, biology, and other fields that humans might never have conceived.",
                  "es": "La IA ya está descubriendo nuevos medicamentos, materiales y patrones científicos más rápido que los humanos solos. Para 2035, la IA podría diseñar autónomamente experimentos, generar hipótesis novedosas y potencialmente hacer descubrimientos revolucionarios en física, biología y otros campos que los humanos nunca hubieran concebido.",
                  "de": "KI entdeckt bereits neue Medikamente, Materialien und wissenschaftliche Muster schneller als Menschen allein. Bis 2035 könnte KI autonom Experimente entwerfen, neuartige Hypothesen generieren und potenziell bahnbrechende Entdeckungen in Physik, Biologie und anderen Feldern machen die Menschen nie konzipiert hätten.",
                  "nl": "AI ontdekt al nieuwe medicijnen, materialen en wetenschappelijke patronen sneller dan mensen alleen. Tegen 2035 zou AI autonoom experimenten kunnen ontwerpen, nieuwe hypotheses genereren en mogelijk baanbrekende ontdekkingen doen in natuurkunde, biologie en andere velden die mensen nooit hadden kunnen bedenken."
        }
      },
      {
        question: {
                  "en": "What ethical frameworks might guide AI development and deployment by 2040?",
                  "es": "¿Qué marcos éticos podrían guiar el desarrollo e implementación de IA para 2040?",
                  "de": "Welche ethischen Rahmenwerke könnten KI-Entwicklung und -Einsatz bis 2040 leiten?",
                  "nl": "Welke ethische kaders zouden AI-ontwikkeling en -implementatie tegen 2040 kunnen leiden?"
        },
        options: [
        {
                  "en": "International treaties, algorithmic auditing standards, and AI rights declarations balancing innovation with safety",
                  "es": "Tratados internacionales, estándares de auditoría algorítmica y declaraciones de derechos de IA equilibrando innovación con seguridad",
                  "de": "Internationale Verträge, algorithmische Prüfstandards und KI-Rechtserklärungen balancieren Innovation mit Sicherheit",
                  "nl": "Internationale verdragen, algoritmische auditnormen en AI-rechtenverklaringen die innovatie balanceren met veiligheid"
        },
        {
                  "en": "No regulations allowing unlimited AI development",
                  "es": "Sin regulaciones permitiendo desarrollo ilimitado de IA",
                  "de": "Keine Vorschriften erlauben unbegrenzte KI-Entwicklung",
                  "nl": "Geen regelgeving die onbeperkte AI-ontwikkeling toestaat"
        },
        {
                  "en": "Complete ban on all AI technologies",
                  "es": "Prohibición completa de todas las tecnologías de IA",
                  "de": "Vollständiges Verbot aller KI-Technologien",
                  "nl": "Volledig verbod op alle AI-technologieën"
        },
        {
                  "en": "Letting corporations decide all AI ethics",
                  "es": "Dejando que las corporaciones decidan toda la ética de IA",
                  "de": "Unternehmen alle KI-Ethik entscheiden lassen",
                  "nl": "Bedrijven alle AI-ethiek laten beslissen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "By 2040, comprehensive AI governance frameworks will likely include international agreements on AI safety, mandatory bias testing and transparency requirements, mechanisms for algorithmic accountability, protections for AI-affected populations, and standards balancing technological progress with human rights and societal values.",
                  "es": "Para 2040, marcos integrales de gobernanza de IA probablemente incluirán acuerdos internacionales sobre seguridad de IA, pruebas obligatorias de sesgo y requisitos de transparencia, mecanismos para responsabilidad algorítmica, protecciones para poblaciones afectadas por IA y estándares equilibrando progreso tecnológico con derechos humanos y valores sociales.",
                  "de": "Bis 2040 werden umfassende KI-Governance-Rahmenwerke wahrscheinlich internationale Abkommen über KI-Sicherheit, obligatorische Verzerrungstests und Transparenzanforderungen, Mechanismen für algorithmische Verantwortlichkeit, Schutz für von KI betroffene Bevölkerungen und Standards umfassen die technologischen Fortschritt mit Menschenrechten und gesellschaftlichen Werten balancieren.",
                  "nl": "Tegen 2040 zullen uitgebreide AI-governance kaders waarschijnlijk internationale overeenkomsten over AI-veiligheid, verplichte bias-testen en transparantievereisten, mechanismen voor algoritmische verantwoordelijkheid, bescherming voor door AI getroffen bevolkingsgroepen en normen omvatten die technologische vooruitgang balanceren met mensenrechten en maatschappelijke waarden."
        }
      },
      {
        question: {
                  "en": "How might AI transform transportation and mobility by 2035?",
                  "es": "¿Cómo podría la IA transformar el transporte y la movilidad para 2035?",
                  "de": "Wie könnte KI Transport und Mobilität bis 2035 verändern?",
                  "nl": "Hoe zou AI transport en mobiliteit tegen 2035 kunnen transformeren?"
        },
        options: [
        {
                  "en": "Making all cars drive at the same speed",
                  "es": "Haciendo que todos los autos conduzcan a la misma velocidad",
                  "de": "Alle Autos mit derselben Geschwindigkeit fahren lassen",
                  "nl": "Alle auto's met dezelfde snelheid laten rijden"
        },
        {
                  "en": "Autonomous vehicles, optimized traffic management, and on-demand transportation networks reducing congestion and emissions",
                  "es": "Vehículos autónomos, gestión optimizada de tráfico y redes de transporte bajo demanda reduciendo congestión y emisiones",
                  "de": "Autonome Fahrzeuge, optimierte Verkehrsverwaltung und On-Demand-Transportnetzwerke reduzieren Staus und Emissionen",
                  "nl": "Autonome voertuigen, geoptimaliseerd verkeersbeheer en on-demand transportnetwerken verminderen congestie en uitstoot"
        },
        {
                  "en": "Eliminating personal vehicle ownership only",
                  "es": "Solo eliminando la propiedad de vehículos personales",
                  "de": "Nur persönlichen Fahrzeugbesitz eliminieren",
                  "nl": "Alleen persoonlijk voertuigbezit elimineren"
        },
        {
                  "en": "Teleporting people instantly everywhere",
                  "es": "Teletransportando personas instantáneamente a todas partes",
                  "de": "Menschen sofort überall hin teleportieren",
                  "nl": "Mensen onmiddellijk overal naartoe teleporteren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "AI-powered autonomous vehicles and smart transportation systems will reshape cities by reducing traffic congestion, parking needs, and accidents. Integrated mobility networks will optimize routing, enable shared autonomous fleets, and potentially transform urban planning and reduce transportation's environmental impact.",
                  "es": "Los vehículos autónomos impulsados por IA y sistemas de transporte inteligentes remodelarán ciudades reduciendo congestión de tráfico, necesidades de estacionamiento y accidentes. Redes de movilidad integradas optimizarán rutas, habilitarán flotas autónomas compartidas y potencialmente transformarán planificación urbana y reducirán el impacto ambiental del transporte.",
                  "de": "KI-gestützte autonome Fahrzeuge und intelligente Transportsysteme werden Städte umgestalten durch Reduzierung von Verkehrsstaus, Parkbedarf und Unfällen. Integrierte Mobilitätsnetzwerke werden Routenplanung optimieren, gemeinsame autonome Flotten ermöglichen und potenziell Stadtplanung transformieren und Umweltauswirkungen des Transports reduzieren.",
                  "nl": "AI-aangedreven autonome voertuigen en slimme transportsystemen zullen steden hervormen door verkeerscongestie, parkeerbehoeften en ongevallen te verminderen. Geïntegreerde mobiliteitsnetwerken zullen routeplanning optimaliseren, gedeelde autonome vloten mogelijk maken en mogelijk stadsplanning transformeren en de milieu-impact van transport verminderen."
        }
      },
      {
        question: {
                  "en": "What challenges might AI create for privacy and data protection by 2040?",
                  "es": "¿Qué desafíos podría crear la IA para la privacidad y protección de datos para 2040?",
                  "de": "Welche Herausforderungen könnte KI für Datenschutz und Datenschutz bis 2040 schaffen?",
                  "nl": "Welke uitdagingen zou AI kunnen creëren voor privacy en gegevensbescherming tegen 2040?"
        },
        options: [
        {
                  "en": "Only affecting people who use social media",
                  "es": "Solo afectando a personas que usan redes sociales",
                  "de": "Nur Menschen betreffen die soziale Medien nutzen",
                  "nl": "Alleen mensen beïnvloeden die sociale media gebruiken"
        },
        {
                  "en": "Making everyone's data completely public",
                  "es": "Haciendo los datos de todos completamente públicos",
                  "de": "Die Daten aller vollständig öffentlich machen",
                  "nl": "De gegevens van iedereen volledig openbaar maken"
        },
        {
                  "en": "Unprecedented data collection, inference capabilities predicting intimate details, and erosion of anonymity",
                  "es": "Recolección de datos sin precedentes, capacidades de inferencia prediciendo detalles íntimos y erosión del anonimato",
                  "de": "Beispiellose Datensammlung, Inferenzfähigkeiten die intime Details vorhersagen und Erosion der Anonymität",
                  "nl": "Ongekende gegevensverzameling, inferentiecapaciteiten die intieme details voorspellen en erosie van anonimiteit"
        },
        {
                  "en": "Perfect protection of all personal information always",
                  "es": "Protección perfecta de toda información personal siempre",
                  "de": "Perfekter Schutz aller persönlichen Informationen immer",
                  "nl": "Perfecte bescherming van alle persoonlijke informatie altijd"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Advanced AI can infer sensitive information from seemingly innocuous data, predict behaviors and preferences, de-anonymize datasets, and create detailed profiles of individuals. This requires new privacy frameworks, data rights, and protections against algorithmic surveillance and discrimination.",
                  "es": "La IA avanzada puede inferir información sensible de datos aparentemente inocuos, predecir comportamientos y preferencias, des-anonimizar conjuntos de datos y crear perfiles detallados de individuos. Esto requiere nuevos marcos de privacidad, derechos de datos y protecciones contra vigilancia y discriminación algorítmica.",
                  "de": "Fortgeschrittene KI kann sensible Informationen aus scheinbar harmlosen Daten ableiten, Verhaltensweisen und Präferenzen vorhersagen, Datensätze de-anonymisieren und detaillierte Profile von Individuen erstellen. Dies erfordert neue Datenschutzrahmenwerke, Datenrechte und Schutz vor algorithmischer Überwachung und Diskriminierung.",
                  "nl": "Geavanceerde AI kan gevoelige informatie afleiden uit schijnbaar onschuldige gegevens, gedrag en voorkeuren voorspellen, datasets de-anonimiseren en gedetailleerde profielen van individuen creëren. Dit vereist nieuwe privacykaders, gegevensrechten en bescherming tegen algoritmische surveillance en discriminatie."
        }
      },
      {
        question: {
                  "en": "How might AI influence human identity and self-perception by 2040?",
                  "es": "¿Cómo podría la IA influir en la identidad humana y la autopercepción para 2040?",
                  "de": "Wie könnte KI menschliche Identität und Selbstwahrnehmung bis 2040 beeinflussen?",
                  "nl": "Hoe zou AI menselijke identiteit en zelfperceptie tegen 2040 kunnen beïnvloeden?"
        },
        options: [
        {
                  "en": "Making everyone identical to each other",
                  "es": "Haciendo a todos idénticos entre sí",
                  "de": "Alle identisch zueinander machen",
                  "nl": "Iedereen identiek aan elkaar maken"
        },
        {
                  "en": "Only affecting people who work with AI",
                  "es": "Solo afectando a personas que trabajan con IA",
                  "de": "Nur Menschen betreffen die mit KI arbeiten",
                  "nl": "Alleen mensen beïnvloeden die met AI werken"
        },
        {
                  "en": "Having no effect on how humans see themselves",
                  "es": "Sin tener efecto en cómo los humanos se ven a sí mismos",
                  "de": "Keine Wirkung darauf wie Menschen sich selbst sehen",
                  "nl": "Geen effect hebben op hoe mensen zichzelf zien"
        },
        {
                  "en": "Blurring boundaries between human and machine capabilities, challenging uniqueness of human intelligence",
                  "es": "Difuminando límites entre capacidades humanas y de máquina, desafiando la singularidad de la inteligencia humana",
                  "de": "Grenzen zwischen menschlichen und maschinellen Fähigkeiten verwischen, Einzigartigkeit menschlicher Intelligenz herausfordern",
                  "nl": "Grenzen vervagen tussen menselijke en machinecapaciteiten, uniciteit van menselijke intelligentie uitdagen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "As AI matches or exceeds human capabilities in creativity, problem-solving, and emotional understanding, humans may need to redefine what makes us unique and valuable. This could lead to existential questions about consciousness, purpose, and whether human intelligence is special or simply another form of computation.",
                  "es": "A medida que la IA iguala o supera capacidades humanas en creatividad, resolución de problemas y comprensión emocional, los humanos pueden necesitar redefinir qué nos hace únicos y valiosos. Esto podría llevar a preguntas existenciales sobre conciencia, propósito y si la inteligencia humana es especial o simplemente otra forma de computación.",
                  "de": "Da KI menschliche Fähigkeiten in Kreativität, Problemlösung und emotionalem Verständnis erreicht oder übertrifft, müssen Menschen möglicherweise neu definieren was uns einzigartig und wertvoll macht. Dies könnte zu existenziellen Fragen über Bewusstsein, Zweck und ob menschliche Intelligenz besonders ist oder einfach eine andere Form von Berechnung führen.",
                  "nl": "Naarmate AI menselijke capaciteiten in creativiteit, probleemoplossing en emotioneel begrip evenaart of overtreft, moeten mensen mogelijk herdefiniëren wat ons uniek en waardevol maakt. Dit zou kunnen leiden tot existentiële vragen over bewustzijn, doel en of menselijke intelligentie speciaal is of gewoon een andere vorm van berekening."
        }
      },
      {
        question: {
                  "en": "What role might AI play in addressing global inequality by 2035?",
                  "es": "¿Qué papel podría jugar la IA en abordar la desigualdad global para 2035?",
                  "de": "Welche Rolle könnte KI bei der Bewältigung globaler Ungleichheit bis 2035 spielen?",
                  "nl": "Welke rol zou AI kunnen spelen bij het aanpakken van mondiale ongelijkheid tegen 2035?"
        },
        options: [
        {
                  "en": "Only benefiting already developed countries",
                  "es": "Solo beneficiando a países ya desarrollados",
                  "de": "Nur bereits entwickelten Ländern zugutekommen",
                  "nl": "Alleen al ontwikkelde landen ten goede komen"
        },
        {
                  "en": "Making everyone in the world equally wealthy instantly",
                  "es": "Haciendo a todos en el mundo igualmente ricos instantáneamente",
                  "de": "Alle Menschen weltweit sofort gleich wohlhabend machen",
                  "nl": "Iedereen ter wereld onmiddellijk even rijk maken"
        },
        {
                  "en": "Having no impact on inequality whatsoever",
                  "es": "Sin tener ningún impacto en la desigualdad en absoluto",
                  "de": "Überhaupt keine Auswirkung auf Ungleichheit haben",
                  "nl": "Helemaal geen impact hebben op ongelijkheid"
        },
        {
                  "en": "Democratizing access to services while potentially widening digital divides and concentrating wealth",
                  "es": "Democratizando acceso a servicios mientras potencialmente amplía brechas digitales y concentra riqueza",
                  "de": "Zugang zu Dienstleistungen demokratisieren während potenziell digitale Kluft vergrößert und Wohlstand konzentriert wird",
                  "nl": "Toegang tot diensten democratiseren terwijl mogelijk digitale kloven worden vergroot en rijkdom wordt geconcentreerd"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "AI presents a paradox: it can provide affordable healthcare, education, and financial services to underserved populations, but may also concentrate wealth among those who control AI technology, create new forms of digital inequality, and displace workers in developing economies without safety nets.",
                  "es": "La IA presenta una paradoja: puede proporcionar atención médica, educación y servicios financieros asequibles a poblaciones desatendidas, pero también puede concentrar riqueza entre quienes controlan tecnología de IA, crear nuevas formas de desigualdad digital y desplazar trabajadores en economías en desarrollo sin redes de seguridad.",
                  "de": "KI präsentiert ein Paradox: sie kann erschwingliche Gesundheitsversorgung, Bildung und Finanzdienstleistungen für unterversorgte Bevölkerungen bereitstellen, könnte aber auch Wohlstand unter denen konzentrieren die KI-Technologie kontrollieren, neue Formen digitaler Ungleichheit schaffen und Arbeiter in Entwicklungsökonomien ohne Sicherheitsnetze verdrängen.",
                  "nl": "AI presenteert een paradox: het kan betaalbare gezondheidszorg, onderwijs en financiële diensten bieden aan onderbedeelde bevolkingsgroepen, maar kan ook rijkdom concentreren onder degenen die AI-technologie controleren, nieuwe vormen van digitale ongelijkheid creëren en werknemers in ontwikkelingslanden verdringen zonder vangnettten."
        }
      },
      {
        question: {
                  "en": "How might AI transform energy production and distribution by 2040?",
                  "es": "¿Cómo podría la IA transformar la producción y distribución de energía para 2040?",
                  "de": "Wie könnte KI Energieproduktion und -verteilung bis 2040 verändern?",
                  "nl": "Hoe zou AI energieproductie en -distributie tegen 2040 kunnen transformeren?"
        },
        options: [
        {
                  "en": "Creating unlimited free energy for everyone",
                  "es": "Creando energía ilimitada gratuita para todos",
                  "de": "Unbegrenzte kostenlose Energie für alle schaffen",
                  "nl": "Onbeperkte gratis energie creëren voor iedereen"
        },
        {
                  "en": "Smart grids balancing renewable sources, predicting demand, and optimizing storage for sustainable energy systems",
                  "es": "Redes inteligentes equilibrando fuentes renovables, prediciendo demanda y optimizando almacenamiento para sistemas energéticos sostenibles",
                  "de": "Intelligente Netze balancieren erneuerbare Quellen, sagen Nachfrage voraus und optimieren Speicherung für nachhaltige Energiesysteme",
                  "nl": "Slimme netwerken balanceren hernieuwbare bronnen, voorspellen vraag en optimaliseren opslag voor duurzame energiesystemen"
        },
        {
                  "en": "Making all energy production completely centralized",
                  "es": "Haciendo toda la producción de energía completamente centralizada",
                  "de": "Gesamte Energieproduktion vollständig zentralisieren",
                  "nl": "Alle energieproductie volledig centraliseren"
        },
        {
                  "en": "Only using AI to monitor existing power plants",
                  "es": "Solo usando IA para monitorear plantas de energía existentes",
                  "de": "Nur KI verwenden um bestehende Kraftwerke zu überwachen",
                  "nl": "Alleen AI gebruiken om bestaande energiecentrales te monitoren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "AI will enable intelligent energy grids that integrate intermittent renewable sources, predict consumption patterns, optimize battery storage, and coordinate distributed generation. This could accelerate the transition to sustainable energy while maintaining grid stability and reducing waste.",
                  "es": "La IA habilitará redes energéticas inteligentes que integran fuentes renovables intermitentes, predicen patrones de consumo, optimizan almacenamiento de baterías y coordinan generación distribuida. Esto podría acelerar la transición a energía sostenible mientras mantiene estabilidad de red y reduce desperdicios.",
                  "de": "KI wird intelligente Energienetze ermöglichen die intermittierende erneuerbare Quellen integrieren, Verbrauchsmuster vorhersagen, Batteriespeicherung optimieren und verteilte Erzeugung koordinieren. Dies könnte den Übergang zu nachhaltiger Energie beschleunigen während Netzstabilität erhalten und Verschwendung reduziert wird.",
                  "nl": "AI zal intelligente energienetwerken mogelijk maken die intermitterende hernieuwbare bronnen integreren, consumptiepatronen voorspellen, batterijopslag optimaliseren en gedistribueerde opwekking coördineren. Dit zou de transitie naar duurzame energie kunnen versnellen terwijl netwerkstabiliteit behouden blijft en verspilling wordt verminderd."
        }
      },
      {
        question: {
                  "en": "What future developments in AI might fundamentally change society by 2040?",
                  "es": "¿Qué desarrollos futuros en IA podrían cambiar fundamentalmente la sociedad para 2040?",
                  "de": "Welche zukünftigen Entwicklungen in KI könnten die Gesellschaft bis 2040 fundamental verändern?",
                  "nl": "Welke toekomstige ontwikkelingen in AI zouden de samenleving tegen 2040 fundamenteel kunnen veranderen?"
        },
        options: [
        {
                  "en": "AI technology being abandoned entirely",
                  "es": "Tecnología de IA siendo abandonada completamente",
                  "de": "KI-Technologie vollständig aufgegeben",
                  "nl": "AI-technologie volledig worden opgegeven"
        },
        {
                  "en": "AI remaining exactly as it is today",
                  "es": "IA permaneciendo exactamente como es hoy",
                  "de": "KI bleibt genau wie sie heute ist",
                  "nl": "AI blijft precies zoals het vandaag is"
        },
        {
                  "en": "AGI emergence, brain-computer integration, and AI-human collaboration reshaping work, creativity, and relationships",
                  "es": "Emergencia de AGI, integración cerebro-computadora y colaboración IA-humano remodelando trabajo, creatividad y relaciones",
                  "de": "AGI-Entstehung, Gehirn-Computer-Integration und KI-Mensch-Zusammenarbeit gestalten Arbeit, Kreativität und Beziehungen um",
                  "nl": "AGI-opkomst, brein-computer integratie en AI-mens samenwerking hervormen werk, creativiteit en relaties"
        },
        {
                  "en": "Complete replacement of humanity by machines",
                  "es": "Reemplazo completo de la humanidad por máquinas",
                  "de": "Vollständiger Ersatz der Menschheit durch Maschinen",
                  "nl": "Volledige vervanging van de mensheid door machines"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The path to 2040 may include artificial general intelligence, seamless brain-computer interfaces, and deep AI-human collaboration transforming how we work, create, learn, and relate to each other. These developments will require careful ethical consideration to ensure technology enhances rather than diminishes human flourishing.",
                  "es": "El camino hacia 2040 puede incluir inteligencia general artificial, interfaces cerebro-computadora sin fisuras y colaboración profunda IA-humano transformando cómo trabajamos, creamos, aprendemos y nos relacionamos. Estos desarrollos requerirán consideración ética cuidadosa para asegurar que la tecnología mejore en lugar de disminuir el florecimiento humano.",
                  "de": "Der Weg zu 2040 könnte künstliche allgemeine Intelligenz, nahtlose Gehirn-Computer-Schnittstellen und tiefe KI-Mensch-Zusammenarbeit umfassen die transformieren wie wir arbeiten, erschaffen, lernen und miteinander in Beziehung stehen. Diese Entwicklungen werden sorgfältige ethische Überlegungen erfordern um sicherzustellen dass Technologie menschliches Gedeihen verbessert statt vermindert.",
                  "nl": "Het pad naar 2040 kan kunstmatige algemene intelligentie, naadloze brein-computer interfaces en diepe AI-mens samenwerking omvatten die transformeren hoe we werken, creëren, leren en met elkaar omgaan. Deze ontwikkelingen zullen zorgvuldige ethische overweging vereisen om ervoor te zorgen dat technologie menselijke bloei verbetert in plaats van vermindert."
        }
      },
      {
        question: {
                  "en": "How might AI influence human evolution and biology by 2040?",
                  "es": "¿Cómo podría la IA influir en la evolución humana y la biología para 2040?",
                  "de": "Wie könnte KI menschliche Evolution und Biologie bis 2040 beeinflussen?",
                  "nl": "Hoe zou AI menselijke evolutie en biologie tegen 2040 kunnen beïnvloeden?"
        },
        options: [
        {
                  "en": "Instantly evolving humans into a new species",
                  "es": "Evolucionando instantáneamente a humanos en una nueva especie",
                  "de": "Menschen sofort zu einer neuen Spezies entwickeln",
                  "nl": "Mensen onmiddellijk evolueren naar een nieuwe soort"
        },
        {
                  "en": "Only affecting appearance superficially",
                  "es": "Solo afectando la apariencia superficialmente",
                  "de": "Nur Aussehen oberflächlich betreffen",
                  "nl": "Alleen uiterlijk oppervlakkig beïnvloeden"
        },
        {
                  "en": "Gene editing guidance, biological enhancement design, and potential directed evolution through AI-designed interventions",
                  "es": "Guía de edición genética, diseño de mejora biológica y evolución potencialmente dirigida a través de intervenciones diseñadas por IA",
                  "de": "Genbearbeitungsberatung, biologisches Verbesserungsdesign und potenzielle gerichtete Evolution durch KI-entwickelte Interventionen",
                  "nl": "Genbewerking begeleiding, biologisch verbeteringsontwerp en potentiële gerichte evolutie door AI-ontworpen interventies"
        },
        {
                  "en": "Having absolutely no effect on biology",
                  "es": "Sin tener absolutamente ningún efecto en la biología",
                  "de": "Absolut keine Auswirkung auf Biologie haben",
                  "nl": "Absoluut geen effect hebben op biologie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "AI will guide precise gene editing for disease prevention and enhancement, design biological modifications, and potentially enable directed evolution. This raises profound questions about human nature, equity of access to enhancements, and whether we should fundamentally alter our biology.",
                  "es": "La IA guiará edición genética precisa para prevención de enfermedades y mejora, diseñará modificaciones biológicas y potencialmente habilitará evolución dirigida. Esto plantea preguntas profundas sobre naturaleza humana, equidad de acceso a mejoras y si deberíamos alterar fundamentalmente nuestra biología.",
                  "de": "KI wird präzise Genbearbeitung für Krankheitsprävention und Verbesserung leiten, biologische Modifikationen entwerfen und potenziell gerichtete Evolution ermöglichen. Dies wirft tiefgreifende Fragen über menschliche Natur, Chancengleichheit beim Zugang zu Verbesserungen und ob wir unsere Biologie fundamental verändern sollten auf.",
                  "nl": "AI zal precieze genbewerking leiden voor ziektepreventie en verbetering, biologische modificaties ontwerpen en mogelijk gerichte evolutie mogelijk maken. Dit roept diepgaande vragen op over menselijke natuur, gelijke toegang tot verbeteringen en of we onze biologie fundamenteel zouden moeten veranderen."
        }
      },
      {
        question: {
                  "en": "What role might AI play in preserving and reviving endangered ecosystems by 2035?",
                  "es": "¿Qué papel podría jugar la IA en preservar y revivir ecosistemas en peligro para 2035?",
                  "de": "Welche Rolle könnte KI bei der Erhaltung und Wiederbelebung bedrohter Ökosysteme bis 2035 spielen?",
                  "nl": "Welke rol zou AI kunnen spelen bij het behouden en herstellen van bedreigde ecosystemen tegen 2035?"
        },
        options: [
        {
                  "en": "Replacing natural ecosystems with artificial ones",
                  "es": "Reemplazando ecosistemas naturales con artificiales",
                  "de": "Natürliche Ökosysteme durch künstliche ersetzen",
                  "nl": "Natuurlijke ecosystemen vervangen door kunstmatige"
        },
        {
                  "en": "Only documenting species extinction",
                  "es": "Solo documentando extinción de especies",
                  "de": "Nur Artensterben dokumentieren",
                  "nl": "Alleen uitsterven van soorten documenteren"
        },
        {
                  "en": "Monitoring biodiversity, predicting ecosystem collapse, and guiding conservation through precision environmental management",
                  "es": "Monitoreando biodiversidad, prediciendo colapso de ecosistemas y guiando conservación a través de gestión ambiental de precisión",
                  "de": "Biodiversität überwachen, Ökosystemkollaps vorhersagen und Naturschutz durch Präzisions-Umweltmanagement leiten",
                  "nl": "Biodiversiteit monitoren, ecosysteemcollaps voorspellen en natuurbehoud begeleiden via precisie milieumanagement"
        },
        {
                  "en": "Instantly restoring all damaged ecosystems perfectly",
                  "es": "Restaurando instantáneamente todos los ecosistemas dañados perfectamente",
                  "de": "Alle beschädigten Ökosysteme sofort perfekt wiederherstellen",
                  "nl": "Alle beschadigde ecosystemen onmiddellijk perfect herstellen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "AI can monitor vast ecosystems using satellite imagery and sensors, predict tipping points, optimize conservation interventions, track individual endangered animals, and even guide de-extinction efforts. This technology could be crucial for preventing biodiversity collapse and managing planetary-scale environmental challenges.",
                  "es": "La IA puede monitorear vastos ecosistemas usando imágenes satelitales y sensores, predecir puntos de inflexión, optimizar intervenciones de conservación, rastrear animales en peligro individuales e incluso guiar esfuerzos de des-extinción. Esta tecnología podría ser crucial para prevenir colapso de biodiversidad y gestionar desafíos ambientales a escala planetaria.",
                  "de": "KI kann riesige Ökosysteme mit Satellitenbildern und Sensoren überwachen, Kipppunkte vorhersagen, Naturschutzinterventionen optimieren, einzelne bedrohte Tiere verfolgen und sogar De-Extinktionsbemühungen leiten. Diese Technologie könnte entscheidend sein um Biodiversitätskollaps zu verhindern und Umweltherausforderungen auf planetarer Ebene zu bewältigen.",
                  "nl": "AI kan uitgestrekte ecosystemen monitoren met satellietbeelden en sensoren, kantelpunten voorspellen, natuurbehoudinterventies optimaliseren, individuele bedreigde dieren volgen en zelfs de-extinctie-inspanningen begeleiden. Deze technologie zou cruciaal kunnen zijn voor het voorkomen van biodiversiteitsinstorting en het beheren van milieu-uitdagingen op planetaire schaal."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  }
})();