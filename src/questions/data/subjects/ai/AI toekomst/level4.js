// AI Future Quiz - Level 4: Advanced AI Future Concepts
(function() {
  const level4 = {
    name: {
      en: "AI Future Level 4",
      es: "Futuro de IA Nivel 4",
      de: "KI-Zukunft Stufe 4",
      nl: "AI Toekomst Level 4"
    },
    questions: [
      {
        question: {
          en: "What is 'precision medicine' and how might AI revolutionize it?",
          es: "¿Qué es la 'medicina de precisión' y cómo podría la IA revolucionarla?",
          de: "Was ist 'Präzisionsmedizin' und wie könnte KI sie revolutionieren?",
          nl: "Wat is 'precisiegeneeskunde' en hoe zou AI het kunnen revolutioneren?"
        },
        options: [
          { en: "Tailoring medical treatments to individual genetic and health profiles using AI analysis", es: "Adaptar tratamientos médicos a perfiles genéticos y de salud individuales usando análisis de IA", de: "Medizinische Behandlungen auf individuelle genetische und Gesundheitsprofile mittels KI-Analyse anpassen", nl: "Medische behandelingen afstemmen op individuele genetische en gezondheidsprofielen met AI-analyse" },
          { en: "Using robots to perform all surgeries", es: "Usar robots para realizar todas las cirugías", de: "Roboter für alle Operationen verwenden", nl: "Robots gebruiken om alle operaties uit te voeren" },
          { en: "Making medicine more expensive but accurate", es: "Hacer la medicina más cara pero precisa", de: "Medizin teurer aber genauer machen", nl: "Geneeskunde duurder maar nauwkeuriger maken" },
          { en: "Replacing doctors with AI completely", es: "Reemplazar completamente a los doctores con IA", de: "Ärzte vollständig durch KI ersetzen", nl: "Artsen volledig vervangen door AI" }
        ],
        correct: 0,
        explanation: {
          en: "Precision medicine uses AI to analyze vast amounts of genetic, lifestyle, and environmental data to create personalized treatment plans that are more effective for each individual patient.",
          es: "La medicina de precisión usa IA para analizar vastas cantidades de datos genéticos, de estilo de vida y ambientales para crear planes de tratamiento personalizados que son más efectivos para cada paciente individual.",
          de: "Präzisionsmedizin nutzt KI zur Analyse riesiger Mengen genetischer, Lebensstil- und Umweltdaten um personalisierte Behandlungspläne zu erstellen die für jeden einzelnen Patienten effektiver sind.",
          nl: "Precisiegeneeskunde gebruikt AI om enorme hoeveelheden genetische, levensstijl- en omgevingsgegevens te analyseren om gepersonaliseerde behandelplannen te maken die effectiever zijn voor elke individuele patiënt."
        }
      },
      {
        question: {
          en: "How might AI transform drug discovery in the future?",
          es: "¿Cómo podría la IA transformar el descubrimiento de medicamentos en el futuro?",
          de: "Wie könnte KI die Medikamentenentdeckung in Zukunft verändern?",
          nl: "Hoe zou AI de medicijnontwikkeling in de toekomst kunnen transformeren?"
        },
        options: [
          { en: "Accelerating discovery by predicting molecular interactions and reducing testing time", es: "Acelerando el descubrimiento prediciendo interacciones moleculares y reduciendo tiempo de pruebas", de: "Entdeckung beschleunigen durch Vorhersage molekularer Wechselwirkungen und Reduzierung der Testzeit", nl: "Ontdekking versnellen door moleculaire interacties te voorspellen en testtijd te verminderen" },
          { en: "Making all drugs free", es: "Hacer todos los medicamentos gratuitos", de: "Alle Medikamente kostenlos machen", nl: "Alle medicijnen gratis maken" },
          { en: "Eliminating the need for clinical trials", es: "Eliminando la necesidad de ensayos clínicos", de: "Die Notwendigkeit klinischer Studien eliminieren", nl: "De noodzaak van klinische proeven elimineren" },
          { en: "Creating drugs that work for everyone the same way", es: "Creando medicamentos que funcionen igual para todos", de: "Medikamente entwickeln die für alle gleich wirken", nl: "Medicijnen maken die voor iedereen hetzelfde werken" }
        ],
        correct: 0,
        explanation: {
          en: "AI can simulate molecular behavior, predict drug-target interactions, and identify promising compounds faster than traditional methods, potentially reducing the 10-15 year drug development timeline significantly.",
          es: "La IA puede simular comportamiento molecular, predecir interacciones medicamento-objetivo e identificar compuestos prometedores más rápido que métodos tradicionales, potencialmente reduciendo significativamente la línea de tiempo de desarrollo de medicamentos de 10-15 años.",
          de: "KI kann molekulares Verhalten simulieren, Medikament-Ziel-Wechselwirkungen vorhersagen und vielversprechende Verbindungen schneller identifizieren als traditionelle Methoden, wodurch die 10-15-jährige Medikamentenentwicklungszeit erheblich reduziert werden könnte.",
          nl: "AI kan moleculair gedrag simuleren, medicijn-doelinteracties voorspellen en veelbelovende verbindingen sneller identificeren dan traditionele methoden, waardoor de 10-15 jaar medicijnontwikkelingstijd aanzienlijk kan worden verkort."
        }
      },
      {
        question: {
          en: "What role might AI play in early disease detection?",
          es: "¿Qué papel podría jugar la IA en la detección temprana de enfermedades?",
          de: "Welche Rolle könnte KI bei der Früherkennung von Krankheiten spielen?",
          nl: "Welke rol zou AI kunnen spelen bij vroege ziektedetectie?"
        },
        options: [
          { en: "Analyzing medical images and biomarkers to detect diseases before symptoms appear", es: "Analizando imágenes médicas y biomarcadores para detectar enfermedades antes de que aparezcan síntomas", de: "Medizinische Bilder und Biomarker analysieren um Krankheiten vor Symptomauftreten zu erkennen", nl: "Medische beelden en biomarkers analyseren om ziektes te detecteren voordat symptomen verschijnen" },
          { en: "Reading patients' minds to know when they feel sick", es: "Leyendo las mentes de los pacientes para saber cuándo se sienten enfermos", de: "Patientengedanken lesen um zu wissen wann sie sich krank fühlen", nl: "De gedachten van patiënten lezen om te weten wanneer ze zich ziek voelen" },
          { en: "Preventing all diseases from ever occurring", es: "Previniendo que todas las enfermedades ocurran", de: "Verhindern dass alle Krankheiten auftreten", nl: "Voorkomen dat alle ziektes ooit optreden" },
          { en: "Only working after patients already show symptoms", es: "Solo funcionando después de que los pacientes ya muestren síntomas", de: "Nur funktionieren nachdem Patienten bereits Symptome zeigen", nl: "Alleen werken nadat patiënten al symptomen vertonen" }
        ],
        correct: 0,
        explanation: {
          en: "AI can detect subtle patterns in medical scans, blood tests, and other data that humans might miss, potentially identifying cancer, heart disease, and neurological conditions years before traditional diagnosis.",
          es: "La IA puede detectar patrones sutiles en escaneos médicos, análisis de sangre y otros datos que los humanos podrían pasar por alto, potencialmente identificando cáncer, enfermedades cardíacas y condiciones neurológicas años antes del diagnóstico tradicional.",
          de: "KI kann subtile Muster in medizinischen Scans, Bluttests und anderen Daten erkennen die Menschen übersehen könnten, wodurch Krebs, Herzerkrankungen und neurologische Zustände Jahre vor der traditionellen Diagnose identifiziert werden könnten.",
          nl: "AI kan subtiele patronen detecteren in medische scans, bloedtests en andere gegevens die mensen zouden kunnen missen, waardoor kanker, hartziekten en neurologische aandoeningen jaren voor traditionele diagnose kunnen worden geïdentificeerd."
        }
      },
      {
        question: {
          en: "How might 'digital twins' be used in healthcare AI?",
          es: "¿Cómo podrían usarse los 'gemelos digitales' en la IA de atención médica?",
          de: "Wie könnten 'digitale Zwillinge' in der Gesundheits-KI verwendet werden?",
          nl: "Hoe zouden 'digitale tweeling' gebruikt kunnen worden in de gezondheidszorg AI?"
        },
        options: [
          { en: "Creating virtual models of patients to simulate treatments and predict outcomes", es: "Creando modelos virtuales de pacientes para simular tratamientos y predecir resultados", de: "Virtuelle Patientenmodelle erstellen um Behandlungen zu simulieren und Ergebnisse vorherzusagen", nl: "Virtuele modellen van patiënten maken om behandelingen te simuleren en uitkomsten te voorspellen" },
          { en: "Cloning patients to have backup organs", es: "Clonando pacientes para tener órganos de respaldo", de: "Patienten klonen um Ersatzorgane zu haben", nl: "Patiënten klonen om reserveorganen te hebben" },
          { en: "Using twin siblings for medical testing", es: "Usando hermanos gemelos para pruebas médicas", de: "Zwillingsgeschwister für medizinische Tests verwenden", nl: "Tweelingbroers of -zussen gebruiken voor medische tests" },
          { en: "Creating two identical hospitals", es: "Creando dos hospitales idénticos", de: "Zwei identische Krankenhäuser erstellen", nl: "Twee identieke ziekenhuizen maken" }
        ],
        correct: 0,
        explanation: {
          en: "Digital twins are virtual replicas of a patient's physiology that can be used to test different treatment scenarios, drug interactions, and surgical procedures safely before applying them to the real patient.",
          es: "Los gemelos digitales son réplicas virtuales de la fisiología de un paciente que pueden usarse para probar diferentes escenarios de tratamiento, interacciones de medicamentos y procedimientos quirúrgicos de manera segura antes de aplicarlos al paciente real.",
          de: "Digitale Zwillinge sind virtuelle Nachbildungen der Physiologie eines Patienten die verwendet werden können um verschiedene Behandlungsszenarien, Medikamentenwechselwirkungen und chirurgische Verfahren sicher zu testen bevor sie am echten Patienten angewendet werden.",
          nl: "Digitale tweelingen zijn virtuele replica's van de fysiologie van een patiënt die gebruikt kunnen worden om verschillende behandelingsscenario's, medicijninteracties en chirurgische procedures veilig te testen voordat ze op de echte patiënt worden toegepast."
        }
      },
      {
        question: {
          en: "What is the potential of AI in mental health treatment?",
          es: "¿Cuál es el potencial de la IA en el tratamiento de la salud mental?",
          de: "Was ist das Potenzial von KI in der psychischen Gesundheitsbehandlung?",
          nl: "Wat is het potentieel van AI in de behandeling van geestelijke gezondheid?"
        },
        options: [
          { en: "Providing 24/7 therapeutic support and early intervention through conversational AI", es: "Proporcionando apoyo terapéutico 24/7 e intervención temprana a través de IA conversacional", de: "24/7 therapeutische Unterstützung und Frühintervention durch Konversations-KI bieten", nl: "24/7 therapeutische ondersteuning en vroege interventie bieden via conversationele AI" },
          { en: "Reading people's thoughts to control their emotions", es: "Leyendo los pensamientos de la gente para controlar sus emociones", de: "Gedanken der Menschen lesen um ihre Emotionen zu kontrollieren", nl: "De gedachten van mensen lezen om hun emoties te controleren" },
          { en: "Replacing all human therapists immediately", es: "Reemplazando inmediatamente a todos los terapeutas humanos", de: "Alle menschlichen Therapeuten sofort ersetzen", nl: "Alle menselijke therapeuten onmiddellijk vervangen" },
          { en: "Only treating physical symptoms of mental illness", es: "Solo tratando síntomas físicos de enfermedad mental", de: "Nur körperliche Symptome psychischer Erkrankungen behandeln", nl: "Alleen fysieke symptomen van geestesziekte behandelen" }
        ],
        correct: 0,
        explanation: {
          en: "AI chatbots and virtual therapists can provide immediate support, monitor mood patterns, detect crisis situations, and complement human therapists to make mental health care more accessible and responsive.",
          es: "Los chatbots de IA y terapeutas virtuales pueden proporcionar apoyo inmediato, monitorear patrones de humor, detectar situaciones de crisis y complementar a terapeutas humanos para hacer la atención de salud mental más accesible y receptiva.",
          de: "KI-Chatbots und virtuelle Therapeuten können sofortige Unterstützung bieten, Stimmungsmuster überwachen, Krisensituationen erkennen und menschliche Therapeuten ergänzen um die psychische Gesundheitsversorgung zugänglicher und reaktionsfähiger zu machen.",
          nl: "AI-chatbots en virtuele therapeuten kunnen onmiddellijke ondersteuning bieden, stemmingspatronen monitoren, crisissituaties detecteren en menselijke therapeuten aanvullen om de geestelijke gezondheidszorg toegankelijker en responsiever te maken."
        }
      },
      {
        question: {
          en: "What is 'algorithmic governance' and how might it shape public policy by 2030?",
          es: "¿Qué es la 'gobernanza algorítmica' y cómo podría moldear las políticas públicas para 2030?",
          de: "Was ist 'algorithmische Governance' und wie könnte sie die öffentliche Politik bis 2030 prägen?",
          nl: "Wat is 'algoritmische governance' en hoe zou het het overheidsbeleid tegen 2030 kunnen vormgeven?"
        },
        options: [
          { en: "AI systems automatically making policy decisions based on data analysis and citizen feedback", es: "Sistemas de IA tomando automáticamente decisiones políticas basadas en análisis de datos y retroalimentación ciudadana", de: "KI-Systeme treffen automatisch politische Entscheidungen basierend auf Datenanalyse und Bürgerfeedback", nl: "AI-systemen maken automatisch beleidsbeslissingen op basis van data-analyse en feedback van burgers" },
          { en: "Replacing all government officials with robots", es: "Reemplazar a todos los funcionarios gubernamentales con robots", de: "Alle Regierungsbeamten durch Roboter ersetzen", nl: "Alle overheidsfunctionarissen vervangen door robots" },
          { en: "Using AI only for tax collection", es: "Usar IA solo para recaudación de impuestos", de: "KI nur für Steuererhebung verwenden", nl: "AI alleen gebruiken voor belastinginning" },
          { en: "Banning all AI from government use", es: "Prohibir toda IA del uso gubernamental", de: "Alle KI vom Regierungsgebrauch verbieten", nl: "Alle AI verbieden voor regeringsgebruik" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithmic governance uses AI to analyze vast amounts of data to inform policy decisions, optimize resource allocation, and create more responsive government services based on real-time citizen needs and feedback.",
          es: "La gobernanza algorítmica usa IA para analizar vastas cantidades de datos para informar decisiones políticas, optimizar la asignación de recursos y crear servicios gubernamentales más receptivos basados en necesidades y retroalimentación ciudadana en tiempo real.",
          de: "Algorithmische Governance nutzt KI zur Analyse riesiger Datenmengen um politische Entscheidungen zu informieren, Ressourcenallokation zu optimieren und reaktionsfähigere Regierungsdienstleistungen basierend auf Echtzeitbedürfnissen und Bürgerfeedback zu schaffen.",
          nl: "Algoritmische governance gebruikt AI om enorme hoeveelheden data te analyseren om beleidsbeslissingen te informeren, middelen optimaal toe te wijzen en meer responsieve overheidsdiensten te creëren gebaseerd op realtime behoeften en feedback van burgers."
        }
      },
      {
        question: {
          en: "How might AI impact democratic participation by 2035?",
          es: "¿Cómo podría la IA impactar la participación democrática para 2035?",
          de: "Wie könnte KI die demokratische Teilhabe bis 2035 beeinflussen?",
          nl: "Hoe zou AI de democratische participatie tegen 2035 kunnen beïnvloeden?"
        },
        options: [
          { en: "Enabling real-time digital voting, citizen assemblies, and AI-moderated public debates", es: "Habilitando votación digital en tiempo real, asambleas ciudadanas y debates públicos moderados por IA", de: "Ermöglichung von Echtzeitdigitalabstimmungen, Bürgerversammlungen und KI-moderierten öffentlichen Debatten", nl: "Het mogelijk maken van realtime digitaal stemmen, burgerassemblees en door AI gemodereerde publieke debatten" },
          { en: "Eliminating all elections permanently", es: "Eliminando permanentemente todas las elecciones", de: "Alle Wahlen dauerhaft eliminieren", nl: "Alle verkiezingen permanent elimineren" },
          { en: "Making voting mandatory for everyone", es: "Hacer el voto obligatorio para todos", de: "Wahlpflicht für alle einführen", nl: "Stemmen verplicht maken voor iedereen" },
          { en: "Restricting voting to AI experts only", es: "Restringir el voto solo a expertos en IA", de: "Wahlrecht nur auf KI-Experten beschränken", nl: "Stemrecht beperken tot alleen AI-experts" }
        ],
        correct: 0,
        explanation: {
          en: "AI could enable more sophisticated forms of digital democracy, including secure online voting, AI-facilitated citizen panels that represent diverse viewpoints, and intelligent moderation of public discourse to reduce polarization.",
          es: "La IA podría habilitar formas más sofisticadas de democracia digital, incluyendo votación en línea segura, paneles ciudadanos facilitados por IA que representen diversos puntos de vista y moderación inteligente del discurso público para reducir la polarización.",
          de: "KI könnte ausgefeiltere Formen der digitalen Demokratie ermöglichen, einschließlich sicherer Online-Abstimmungen, KI-unterstützter Bürgerpanels die diverse Standpunkte repräsentieren und intelligenter Moderation des öffentlichen Diskurses zur Reduzierung der Polarisierung.",
          nl: "AI zou meer geavanceerde vormen van digitale democratie mogelijk kunnen maken, inclusief veilig online stemmen, door AI gefaciliteerde burgerpanels die diverse standpunten vertegenwoordigen, en intelligente moderatie van publiek discours om polarisatie te verminderen."
        }
      },
      {
        question: {
          en: "What role might AI play in addressing social inequality by 2030?",
          es: "¿Qué papel podría jugar la IA en abordar la desigualdad social para 2030?",
          de: "Welche Rolle könnte KI bei der Bekämpfung sozialer Ungleichheit bis 2030 spielen?",
          nl: "Welke rol zou AI kunnen spelen bij het aanpakken van sociale ongelijkheid tegen 2030?"
        },
        options: [
          { en: "Providing personalized education, healthcare access, and economic opportunities to underserved communities", es: "Proporcionando educación personalizada, acceso a atención médica y oportunidades económicas a comunidades desatendidas", de: "Personalisierte Bildung, Gesundheitszugang und wirtschaftliche Möglichkeiten für unterversorgte Gemeinden bereitstellen", nl: "Gepersonaliseerd onderwijs, toegang tot gezondheidszorg en economische kansen bieden aan onderbedeelde gemeenschappen" },
          { en: "Making everyone equally poor", es: "Haciendo a todos igualmente pobres", de: "Alle gleich arm machen", nl: "Iedereen even arm maken" },
          { en: "Only helping wealthy individuals", es: "Solo ayudando a individuos adinerados", de: "Nur wohlhabenden Personen helfen", nl: "Alleen rijke individuen helpen" },
          { en: "Ignoring social problems completely", es: "Ignorando completamente los problemas sociales", de: "Soziale Probleme vollständig ignorieren", nl: "Sociale problemen volledig negeren" }
        ],
        correct: 0,
        explanation: {
          en: "AI can democratize access to high-quality education through personalized tutoring, improve healthcare delivery in remote areas, and create new economic opportunities through digital platforms and micro-entrepreneurship support.",
          es: "La IA puede democratizar el acceso a educación de alta calidad a través de tutoría personalizada, mejorar la entrega de atención médica en áreas remotas y crear nuevas oportunidades económicas a través de plataformas digitales y apoyo al microemprendimiento.",
          de: "KI kann den Zugang zu hochwertiger Bildung durch personalisierte Betreuung demokratisieren, die Gesundheitsversorgung in abgelegenen Gebieten verbessern und neue wirtschaftliche Möglichkeiten durch digitale Plattformen und Mikrounternehmertum schaffen.",
          nl: "AI kan toegang tot hoogwaardige educatie democratiseren door gepersonaliseerde begeleiding, gezondheidszorg verbeteren in afgelegen gebieden, en nieuwe economische kansen creëren via digitale platforms en ondersteuning van micro-ondernemerschap."
        }
      },
      {
        question: {
          en: "How might AI transform urban planning and smart cities by 2035?",
          es: "¿Cómo podría la IA transformar la planificación urbana y las ciudades inteligentes para 2035?",
          de: "Wie könnte KI die Stadtplanung und Smart Cities bis 2035 verändern?",
          nl: "Hoe zou AI stadsplanning en slimme steden tegen 2035 kunnen transformeren?"
        },
        options: [
          { en: "Optimizing traffic flow, energy distribution, and resource allocation in real-time based on citizen behavior", es: "Optimizando flujo de tráfico, distribución de energía y asignación de recursos en tiempo real basado en comportamiento ciudadano", de: "Verkehrsfluss, Energieverteilung und Ressourcenallokation in Echtzeit basierend auf Bürgerverhalten optimieren", nl: "Verkeersstroom, energieverdeling en toewijzing van middelen in realtime optimaliseren op basis van burgergedrag" },
          { en: "Building only identical buildings everywhere", es: "Construyendo solo edificios idénticos en todas partes", de: "Nur identische Gebäude überall bauen", nl: "Alleen identieke gebouwen overal bouwen" },
          { en: "Eliminating all cars from cities", es: "Eliminando todos los autos de las ciudades", de: "Alle Autos aus Städten eliminieren", nl: "Alle auto's uit steden elimineren" },
          { en: "Making cities completely automated without human input", es: "Haciendo ciudades completamente automatizadas sin entrada humana", de: "Städte vollständig automatisiert ohne menschlichen Input machen", nl: "Steden volledig geautomatiseerd maken zonder menselijke input" }
        ],
        correct: 0,
        explanation: {
          en: "AI-powered smart cities can dynamically adjust infrastructure systems, predict maintenance needs, optimize public services, and create more sustainable and livable urban environments by analyzing patterns in citizen movement, energy use, and resource consumption.",
          es: "Las ciudades inteligentes impulsadas por IA pueden ajustar dinámicamente sistemas de infraestructura, predecir necesidades de mantenimiento, optimizar servicios públicos y crear entornos urbanos más sostenibles y habitables analizando patrones en movimiento ciudadano, uso de energía y consumo de recursos.",
          de: "KI-gestützte Smart Cities können Infrastruktursysteme dynamisch anpassen, Wartungsbedarf vorhersagen, öffentliche Dienstleistungen optimieren und nachhaltigere und lebenswertere städtische Umgebungen schaffen durch Analyse von Mustern in Bürgerbewegung, Energienutzung und Ressourcenverbrauch.",
          nl: "Door AI aangedreven slimme steden kunnen infrastructuursystemen dynamisch aanpassen, onderhoudsbehoeften voorspellen, openbare diensten optimaliseren en meer duurzame en leefbare stedelijke omgevingen creëren door patronen in burgerbeweging, energiegebruik en middelenverbruik te analyseren."
        }
      },
      {
        question: {
          en: "What challenges might arise from AI-driven social credit systems?",
          es: "¿Qué desafíos podrían surgir de los sistemas de crédito social impulsados por IA?",
          de: "Welche Herausforderungen könnten durch KI-gesteuerte Sozialkreditsysteme entstehen?",
          nl: "Welke uitdagingen zouden kunnen ontstaan door AI-gedreven sociale creditsystemen?"
        },
        options: [
          { en: "Privacy concerns, potential for discrimination, and restriction of individual freedoms", es: "Preocupaciones de privacidad, potencial de discriminación y restricción de libertades individuales", de: "Datenschutzbedenken, Diskriminierungspotenzial und Einschränkung individueller Freiheiten", nl: "Privacyzorgen, potentieel voor discriminatie en beperking van individuele vrijheden" },
          { en: "Making everyone perfectly behaved citizens", es: "Haciendo a todos ciudadanos perfectamente comportados", de: "Alle zu perfekt benahmen Bürgern machen", nl: "Iedereen tot perfect gedragende burgers maken" },
          { en: "Eliminating all crime permanently", es: "Eliminando permanentemente todo crimen", de: "Alle Verbrechen dauerhaft eliminieren", nl: "Alle criminaliteit permanent elimineren" },
          { en: "Creating universal happiness", es: "Creando felicidad universal", de: "Universelles Glück schaffen", nl: "Universeel geluk creëren" }
        ],
        correct: 0,
        explanation: {
          en: "AI social credit systems could lead to surveillance states, algorithmic bias affecting life opportunities, suppression of dissent, and the creation of social hierarchies based on AI interpretation of behavior rather than merit or justice.",
          es: "Los sistemas de crédito social de IA podrían llevar a estados de vigilancia, sesgo algorítmico afectando oportunidades de vida, supresión de disidencia y creación de jerarquías sociales basadas en interpretación de IA del comportamiento en lugar de mérito o justicia.",
          de: "KI-Sozialkreditsysteme könnten zu Überwachungsstaaten, algorithmischer Verzerrung die Lebenschancen beeinflusst, Unterdrückung von Dissens und Schaffung sozialer Hierarchien basierend auf KI-Interpretation von Verhalten statt Verdienst oder Gerechtigkeit führen.",
          nl: "AI sociale creditsystemen zouden kunnen leiden tot surveillance staten, algoritmische vooringenomenheid die levenskansen beïnvloedt, onderdrukking van dissidentie, en het creëren van sociale hiërarchieën gebaseerd op AI-interpretatie van gedrag in plaats van verdienste of rechtvaardigheid."
        }
      },
      {
        question: {
          en: "How might AI impact cultural preservation and diversity by 2040?",
          es: "¿Cómo podría la IA impactar la preservación cultural y la diversidad para 2040?",
          de: "Wie könnte KI die Kulturerhaltung und Vielfalt bis 2040 beeinflussen?",
          nl: "Hoe zou AI culturele behoud en diversiteit tegen 2040 kunnen beïnvloeden?"
        },
        options: [
          { en: "Digitizing endangered languages and customs while potentially homogenizing global culture", es: "Digitalizando idiomas y costumbres en peligro de extinción mientras potencialmente homogeniza la cultura global", de: "Bedrohte Sprachen und Bräuche digitalisieren während möglicherweise die globale Kultur homogenisiert wird", nl: "Bedreigde talen en gebruiken digitaliseren terwijl mogelijk de mondiale cultuur wordt gehomogeniseerd" },
          { en: "Making all cultures identical worldwide", es: "Haciendo todas las culturas idénticas mundialmente", de: "Alle Kulturen weltweit identisch machen", nl: "Alle culturen wereldwijd identiek maken" },
          { en: "Eliminating traditional practices completely", es: "Eliminando completamente las prácticas tradicionales", de: "Traditionelle Praktiken vollständig eliminieren", nl: "Traditionele praktijken volledig elimineren" },
          { en: "Only preserving Western culture", es: "Solo preservando la cultura occidental", de: "Nur westliche Kultur bewahren", nl: "Alleen westerse cultuur behouden" }
        ],
        correct: 0,
        explanation: {
          en: "AI can help document and preserve endangered languages and cultural practices through digital archives and translation tools, but may also contribute to cultural homogenization as dominant AI models reflect the biases of their training data and creators.",
          es: "La IA puede ayudar a documentar y preservar idiomas y prácticas culturales en peligro de extinción a través de archivos digitales y herramientas de traducción, pero también puede contribuir a la homogenización cultural ya que los modelos de IA dominantes reflejan los sesgos de sus datos de entrenamiento y creadores.",
          de: "KI kann helfen, bedrohte Sprachen und kulturelle Praktiken durch digitale Archive und Übersetzungstools zu dokumentieren und zu bewahren, könnte aber auch zur kulturellen Homogenisierung beitragen da dominante KI-Modelle die Verzerrungen ihrer Trainingsdaten und Schöpfer widerspiegeln.",
          nl: "AI kan helpen bij het documenteren en behouden van bedreigde talen en culturele praktijken via digitale archieven en vertaaltools, maar kan ook bijdragen aan culturele homogenisatie omdat dominante AI-modellen de vooroordelen van hun trainingsdata en makers weerspiegelen."
        }
      },
      {
        question: {
          en: "What role might AI play in combating misinformation by 2035?",
          es: "¿Qué papel podría jugar la IA en combatir la desinformación para 2035?",
          de: "Welche Rolle könnte KI bei der Bekämpfung von Fehlinformationen bis 2035 spielen?",
          nl: "Welke rol zou AI kunnen spelen bij het bestrijden van misinformatie tegen 2035?"
        },
        options: [
          { en: "Real-time fact-checking and source verification, while raising concerns about censorship and truth determination", es: "Verificación de hechos en tiempo real y verificación de fuentes, mientras genera preocupaciones sobre censura y determinación de la verdad", de: "Echtzeit-Faktenprüfung und Quellenverifikation, während Bedenken über Zensur und Wahrheitsbestimmung aufkommen", nl: "Realtime factchecking en bronverificatie, terwijl zorgen over censuur en waarheidsvaststelling ontstaan" },
          { en: "Blocking all information except government-approved content", es: "Bloqueando toda información excepto contenido aprobado por el gobierno", de: "Alle Informationen außer regierungsgenehmigten Inhalten blockieren", nl: "Alle informatie blokkeren behalve door de regering goedgekeurde inhoud" },
          { en: "Making everyone believe the same things", es: "Haciendo que todos crean las mismas cosas", de: "Alle dazu bringen dieselben Dinge zu glauben", nl: "Iedereen dezelfde dingen laten geloven" },
          { en: "Eliminating all news media", es: "Eliminando todos los medios de comunicación", de: "Alle Nachrichtenmedien eliminieren", nl: "Alle nieuwsmedia elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "AI can help identify false information patterns and verify sources quickly, but this raises complex questions about who determines truth, potential algorithmic bias in fact-checking, and the balance between combating misinformation and preserving free speech.",
          es: "La IA puede ayudar a identificar patrones de información falsa y verificar fuentes rápidamente, pero esto plantea preguntas complejas sobre quién determina la verdad, posible sesgo algorítmico en verificación de hechos y el equilibrio entre combatir desinformación y preservar la libertad de expresión.",
          de: "KI kann helfen, Falschinformationsmuster zu identifizieren und Quellen schnell zu verifizieren, aber dies wirft komplexe Fragen auf über wer Wahrheit bestimmt, mögliche algorithmische Verzerrung bei Faktenprüfung und die Balance zwischen Bekämpfung von Fehlinformationen und Bewahrung der Meinungsfreiheit.",
          nl: "AI kan helpen bij het identificeren van valse informatiepatronen en het snel verifiëren van bronnen, maar dit roept complexe vragen op over wie de waarheid bepaalt, mogelijke algoritmische vooringenomenheid bij factchecking en de balans tussen het bestrijden van misinformatie en het behouden van vrije meningsuiting."
        }
      },
      {
        question: {
          en: "How might AI affect intergenerational relationships and social cohesion?",
          es: "¿Cómo podría la IA afectar las relaciones intergeneracionales y la cohesión social?",
          de: "Wie könnte KI zwischengenerationelle Beziehungen und sozialen Zusammenhalt beeinflussen?",
          nl: "Hoe zou AI intergenerationele relaties en sociale cohesie kunnen beïnvloeden?"
        },
        options: [
          { en: "Creating digital divides between generations while offering new ways to connect and share knowledge", es: "Creando brechas digitales entre generaciones mientras ofrece nuevas formas de conectarse y compartir conocimiento", de: "Digitale Kluft zwischen Generationen schaffen während neue Wege zum Verbinden und Wissensaustausch geboten werden", nl: "Digitale kloven tussen generaties creëren terwijl nieuwe manieren worden geboden om te verbinden en kennis te delen" },
          { en: "Making all generations think exactly the same", es: "Haciendo que todas las generaciones piensen exactamente igual", de: "Alle Generationen dazu bringen genau gleich zu denken", nl: "Alle generaties precies hetzelfde laten denken" },
          { en: "Eliminating older generations from society", es: "Eliminando generaciones mayores de la sociedad", de: "Ältere Generationen aus der Gesellschaft eliminieren", nl: "Oudere generaties uit de samenleving elimineren" },
          { en: "Preventing any technological change", es: "Previniendo cualquier cambio tecnológico", de: "Jeden technologischen Wandel verhindern", nl: "Elke technologische verandering voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "AI may widen generational gaps as younger people adapt faster to new technologies, but it could also bridge connections through AI-powered translation of generational perspectives, digital storytelling platforms, and tools that help preserve and share intergenerational wisdom.",
          es: "La IA puede ampliar las brechas generacionales ya que las personas más jóvenes se adaptan más rápido a nuevas tecnologías, pero también podría tender puentes a través de traducción de perspectivas generacionales impulsada por IA, plataformas de narración digital y herramientas que ayudan a preservar y compartir sabiduría intergeneracional.",
          de: "KI könnte Generationslücken vergrößern da jüngere Menschen sich schneller an neue Technologien anpassen, könnte aber auch Verbindungen schaffen durch KI-gestützte Übersetzung generationeller Perspektiven, digitale Erzählplattformen und Tools die helfen intergenerationelle Weisheit zu bewahren und zu teilen.",
          nl: "AI kan generatiekloven vergroten omdat jongere mensen zich sneller aanpassen aan nieuwe technologieën, maar zou ook verbindingen kunnen overbruggen door AI-aangedreven vertaling van generationele perspectieven, digitale vertelplatforms en tools die helpen intergenerationele wijsheid te behouden en te delen."
        }
      },
      {
        question: {
          en: "What impact might AI have on religious and spiritual practices by 2035?",
          es: "¿Qué impacto podría tener la IA en las prácticas religiosas y espirituales para 2035?",
          de: "Welchen Einfluss könnte KI auf religiöse und spirituelle Praktiken bis 2035 haben?",
          nl: "Welke impact zou AI kunnen hebben op religieuze en spirituele praktijken tegen 2035?"
        },
        options: [
          { en: "Enabling virtual religious experiences and AI spiritual guidance while raising questions about digital faith", es: "Habilitando experiencias religiosas virtuales y guía espiritual de IA mientras plantea preguntas sobre fe digital", de: "Virtuelle religiöse Erfahrungen und KI-spirituelle Führung ermöglichen während Fragen über digitalen Glauben aufkommen", nl: "Virtuele religieuze ervaringen en AI spirituele begeleiding mogelijk maken terwijl vragen over digitaal geloof ontstaan" },
          { en: "Eliminating all religious beliefs completely", es: "Eliminando completamente todas las creencias religiosas", de: "Alle religiösen Überzeugungen vollständig eliminieren", nl: "Alle religieuze overtuigingen volledig elimineren" },
          { en: "Making AI the only object of worship", es: "Haciendo de la IA el único objeto de adoración", de: "KI zum einzigen Anbetungsobjekt machen", nl: "AI het enige object van aanbidding maken" },
          { en: "Forcing everyone to follow the same religion", es: "Forzando a todos a seguir la misma religión", de: "Alle dazu zwingen derselben Religion zu folgen", nl: "Iedereen dwingen dezelfde religie te volgen" }
        ],
        correct: 0,
        explanation: {
          en: "AI could enhance religious practice through virtual pilgrimages, AI-assisted prayer and meditation, and digital religious education, while also challenging traditional concepts of consciousness, soul, and divine creation as AI becomes more sophisticated.",
          es: "La IA podría mejorar la práctica religiosa a través de peregrinaciones virtuales, oración y meditación asistidas por IA y educación religiosa digital, mientras también desafía conceptos tradicionales de conciencia, alma y creación divina a medida que la IA se vuelve más sofisticada.",
          de: "KI könnte religiöse Praxis durch virtuelle Pilgerfahrten, KI-unterstützte Gebete und Meditation und digitale religiöse Bildung verbessern, während auch traditionelle Konzepte von Bewusstsein, Seele und göttlicher Schöpfung herausgefordert werden wenn KI sophistizierter wird.",
          nl: "AI zou religieuze praktijk kunnen verbeteren door virtuele bedevaarten, AI-ondersteund gebed en meditatie, en digitale religieuze educatie, terwijl het ook traditionele concepten van bewustzijn, ziel en goddelijke schepping uitdaagt naarmate AI meer geavanceerd wordt."
        }
      },
      {
        question: {
          en: "How might AI transform legal systems and justice delivery by 2040?",
          es: "¿Cómo podría la IA transformar los sistemas legales y la entrega de justicia para 2040?",
          de: "Wie könnte KI Rechtssysteme und Rechtsprechung bis 2040 verändern?",
          nl: "Hoe zou AI rechtssystemen en rechtvaardigheidsvoorziening tegen 2040 kunnen transformeren?"
        },
        options: [
          { en: "Automating case analysis, predicting outcomes, and ensuring consistent application of laws", es: "Automatizando análisis de casos, prediciendo resultados y asegurando aplicación consistente de leyes", de: "Fallanalyse automatisieren, Ergebnisse vorhersagen und konsistente Gesetzesanwendung sicherstellen", nl: "Casusanalyse automatiseren, uitkomsten voorspellen en consistente toepassing van wetten waarborgen" },
          { en: "Replacing all judges with robots immediately", es: "Reemplazando inmediatamente a todos los jueces con robots", de: "Alle Richter sofort durch Roboter ersetzen", nl: "Alle rechters onmiddellijk vervangen door robots" },
          { en: "Making all crimes punishable by the same sentence", es: "Haciendo todos los crímenes castigables con la misma sentencia", de: "Alle Verbrechen mit derselben Strafe bestrafen", nl: "Alle misdaden strafbaar maken met dezelfde straf" },
          { en: "Eliminating the need for any laws", es: "Eliminando la necesidad de cualquier ley", de: "Die Notwendigkeit für jegliche Gesetze eliminieren", nl: "De noodzaak voor alle wetten elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "AI can help analyze legal precedents, predict case outcomes, reduce bias in sentencing, and make legal services more accessible, but must be carefully implemented to ensure fairness, transparency, and protection of individual rights.",
          es: "La IA puede ayudar a analizar precedentes legales, predecir resultados de casos, reducir sesgo en sentencias y hacer servicios legales más accesibles, pero debe implementarse cuidadosamente para asegurar equidad, transparencia y protección de derechos individuales.",
          de: "KI kann helfen Rechtspräzedenzfälle zu analysieren, Fallausgänge vorherzusagen, Verzerrungen bei der Urteilsfindung zu reduzieren und Rechtsdienste zugänglicher zu machen, muss aber sorgfältig implementiert werden um Fairness, Transparenz und Schutz individueller Rechte zu gewährleisten.",
          nl: "AI kan helpen bij het analyseren van juridische precedenten, het voorspellen van case-uitkomsten, het verminderen van vooringenomenheid bij bestraffing en het toegankelijker maken van juridische diensten, maar moet zorgvuldig worden geïmplementeerd om eerlijkheid, transparantie en bescherming van individuele rechten te waarborgen."
        }
      },
      {
        question: {
          en: "What challenges might arise from AI-mediated social interactions by 2035?",
          es: "¿Qué desafíos podrían surgir de las interacciones sociales mediadas por IA para 2035?",
          de: "Welche Herausforderungen könnten durch KI-vermittelte soziale Interaktionen bis 2035 entstehen?",
          nl: "Welke uitdagingen zouden kunnen ontstaan door AI-gemedieerde sociale interacties tegen 2035?"
        },
        options: [
          { en: "Loss of authentic human connection and difficulty distinguishing between human and AI interactions", es: "Pérdida de conexión humana auténtica y dificultad para distinguir entre interacciones humanas y de IA", de: "Verlust authentischer menschlicher Verbindungen und Schwierigkeit zwischen menschlichen und KI-Interaktionen zu unterscheiden", nl: "Verlies van authentieke menselijke verbinding en moeilijkheid bij het onderscheiden tussen menselijke en AI-interacties" },
          { en: "Everyone becoming best friends with AI", es: "Todos volviéndose mejores amigos de la IA", de: "Alle werden beste Freunde mit KI", nl: "Iedereen wordt beste vrienden met AI" },
          { en: "Eliminating all social problems", es: "Eliminando todos los problemas sociales", de: "Alle sozialen Probleme eliminieren", nl: "Alle sociale problemen elimineren" },
          { en: "Making communication faster and easier only", es: "Solo haciendo la comunicación más rápida y fácil", de: "Kommunikation nur schneller und einfacher machen", nl: "Communicatie alleen sneller en gemakkelijker maken" }
        ],
        correct: 0,
        explanation: {
          en: "As AI becomes more sophisticated in mimicking human conversation and emotional responses, people may struggle to maintain authentic relationships, potentially leading to social isolation, emotional dependence on AI, and erosion of human empathy and social skills.",
          es: "A medida que la IA se vuelve más sofisticada imitando conversación humana y respuestas emocionales, las personas pueden tener dificultades para mantener relaciones auténticas, potencialmente llevando a aislamiento social, dependencia emocional de la IA y erosión de empatía humana y habilidades sociales.",
          de: "Da KI sophistizierter wird im Nachahmen menschlicher Konversation und emotionaler Reaktionen, könnten Menschen Schwierigkeiten haben authentische Beziehungen zu bewahren, was möglicherweise zu sozialer Isolation, emotionaler Abhängigkeit von KI und Erosion menschlicher Empathie und sozialer Fähigkeiten führt.",
          nl: "Naarmate AI meer geavanceerd wordt in het nabootsen van menselijke conversatie en emotionele reacties, kunnen mensen moeite hebben om authentieke relaties te onderhouden, wat mogelijk leidt tot sociale isolatie, emotionele afhankelijkheid van AI, en erosie van menselijke empathie en sociale vaardigheden."
        }
      },
      {
        question: {
          en: "How might AI influence global migration patterns by 2040?",
          es: "¿Cómo podría la IA influir en los patrones de migración global para 2040?",
          de: "Wie könnte KI globale Migrationsmuster bis 2040 beeinflussen?",
          nl: "Hoe zou AI wereldwijde migratiepatronen tegen 2040 kunnen beïnvloeden?"
        },
        options: [
          { en: "Creating new tech hubs while potentially displacing workers, leading to complex migration flows", es: "Creando nuevos centros tecnológicos mientras potencialmente desplaza trabajadores, llevando a flujos de migración complejos", de: "Neue Technologiezentren schaffen während möglicherweise Arbeiter verdrängt werden, was zu komplexen Migrationsströmen führt", nl: "Nieuwe tech-hubs creëren terwijl mogelijk werknemers worden verdrongen, wat leidt tot complexe migratiestromen" },
          { en: "Stopping all migration permanently", es: "Deteniendo permanentemente toda migración", de: "Alle Migration dauerhaft stoppen", nl: "Alle migratie permanent stoppen" },
          { en: "Making everyone move to the same city", es: "Haciendo que todos se muden a la misma ciudad", de: "Alle dazu bringen in dieselbe Stadt zu ziehen", nl: "Iedereen naar dezelfde stad laten verhuizen" },
          { en: "Only affecting rich countries", es: "Solo afectando países ricos", de: "Nur reiche Länder betreffen", nl: "Alleen rijke landen beïnvloeden" }
        ],
        correct: 0,
        explanation: {
          en: "AI development will create new economic centers attracting skilled workers, while automation may displace traditional industries, leading to both 'brain gain' in tech regions and economic migration from areas where jobs are automated away.",
          es: "El desarrollo de IA creará nuevos centros económicos atrayendo trabajadores calificados, mientras la automatización puede desplazar industrias tradicionales, llevando tanto a 'ganancia de cerebros' en regiones tecnológicas como migración económica de áreas donde trabajos son automatizados.",
          de: "KI-Entwicklung wird neue Wirtschaftszentren schaffen die qualifizierte Arbeiter anziehen, während Automatisierung traditionelle Industrien verdrängen könnte, was sowohl zu 'Brain Gain' in Technologieregionen als auch zu wirtschaftlicher Migration aus Gebieten führt wo Jobs wegautomatisiert werden.",
          nl: "AI-ontwikkeling zal nieuwe economische centra creëren die geschoolde werknemers aantrekken, terwijl automatisering traditionele industrieën kan verdringen, wat leidt tot zowel 'brain gain' in tech-regio's als economische migratie uit gebieden waar banen worden weggeautomatiseerd."
        }
      },
      {
        question: {
          en: "What role might AI play in disaster preparedness and response by 2035?",
          es: "¿Qué papel podría jugar la IA en la preparación y respuesta a desastres para 2035?",
          de: "Welche Rolle könnte KI bei Katastrophenvorsorge und -reaktion bis 2035 spielen?",
          nl: "Welke rol zou AI kunnen spelen bij rampenparaatheid en -reactie tegen 2035?"
        },
        options: [
          { en: "Predicting disasters, coordinating emergency responses, and optimizing evacuation routes in real-time", es: "Prediciendo desastres, coordinando respuestas de emergencia y optimizando rutas de evacuación en tiempo real", de: "Katastrophen vorhersagen, Notfallreaktionen koordinieren und Evakuierungsrouten in Echtzeit optimieren", nl: "Rampen voorspellen, noodresponsen coördineren en evacuatieroutes in realtime optimaliseren" },
          { en: "Preventing all natural disasters from occurring", es: "Previniendo que ocurran todos los desastres naturales", de: "Alle Naturkatastrophen verhindern", nl: "Alle natuurrampen voorkomen" },
          { en: "Only helping after disasters are completely over", es: "Solo ayudando después de que los desastres hayan terminado completamente", de: "Nur helfen nachdem Katastrophen vollständig vorbei sind", nl: "Alleen helpen nadat rampen volledig voorbij zijn" },
          { en: "Making disasters more severe", es: "Haciendo los desastres más severos", de: "Katastrophen schwerer machen", nl: "Rampen ernstiger maken" }
        ],
        correct: 0,
        explanation: {
          en: "AI can analyze weather patterns and seismic data to predict disasters earlier, optimize resource allocation during emergencies, coordinate rescue operations, and process real-time social media data to identify people in need of help during crises.",
          es: "La IA puede analizar patrones climáticos y datos sísmicos para predecir desastres más temprano, optimizar asignación de recursos durante emergencias, coordinar operaciones de rescate y procesar datos de redes sociales en tiempo real para identificar personas que necesitan ayuda durante crisis.",
          de: "KI kann Wettermuster und seismische Daten analysieren um Katastrophen früher vorherzusagen, Ressourcenallokation während Notfällen optimieren, Rettungsoperationen koordinieren und Echtzeitdaten sozialer Medien verarbeiten um Menschen zu identifizieren die Hilfe während Krisen benötigen.",
          nl: "AI kan weerpatronen en seismische data analyseren om rampen eerder te voorspellen, toewijzing van middelen tijdens noodsituaties optimaliseren, reddingsoperaties coördineren en realtime social media data verwerken om mensen te identificeren die hulp nodig hebben tijdens crises."
        }
      },
      {
        question: {
          en: "How might AI transform public health surveillance and disease prevention by 2040?",
          es: "¿Cómo podría la IA transformar la vigilancia de salud pública y la prevención de enfermedades para 2040?",
          de: "Wie könnte KI die öffentliche Gesundheitsüberwachung und Krankheitsprävention bis 2040 verändern?",
          nl: "Hoe zou AI de surveillance van de volksgezondheid en ziektepreventie tegen 2040 kunnen transformeren?"
        },
        options: [
          { en: "Enabling real-time disease tracking, early outbreak detection, and personalized prevention strategies", es: "Habilitando seguimiento de enfermedades en tiempo real, detección temprana de brotes y estrategias de prevención personalizadas", de: "Echtzeit-Krankheitsverfolgung, frühe Ausbruchserkennung und personalisierte Präventionsstrategien ermöglichen", nl: "Realtime ziektetracking, vroege uitbraakdetectie en gepersonaliseerde preventiestrategieën mogelijk maken" },
          { en: "Eliminating all diseases forever", es: "Eliminando todas las enfermedades para siempre", de: "Alle Krankheiten für immer eliminieren", nl: "Alle ziektes voor altijd elimineren" },
          { en: "Only treating diseases after they spread globally", es: "Solo tratando enfermedades después de que se extiendan globalmente", de: "Krankheiten nur behandeln nachdem sie sich global ausgebreitet haben", nl: "Alleen ziektes behandelen nadat ze zich wereldwijd hebben verspreid" },
          { en: "Making health surveillance illegal", es: "Haciendo ilegal la vigilancia de salud", de: "Gesundheitsüberwachung illegal machen", nl: "Gezondheidssurveillance illegaal maken" }
        ],
        correct: 0,
        explanation: {
          en: "AI will revolutionize public health by analyzing vast datasets from multiple sources (social media, search patterns, health records) to detect disease outbreaks early, predict epidemics, and create targeted intervention strategies before diseases spread widely.",
          es: "La IA revolucionará la salud pública analizando vastos conjuntos de datos de múltiples fuentes (redes sociales, patrones de búsqueda, registros de salud) para detectar brotes de enfermedades temprano, predecir epidemias y crear estrategias de intervención dirigidas antes de que las enfermedades se extiendan ampliamente.",
          de: "KI wird die öffentliche Gesundheit revolutionieren durch Analyse riesiger Datensätze aus mehreren Quellen (soziale Medien, Suchmuster, Gesundheitsakten) um Krankheitsausbrüche früh zu erkennen, Epidemien vorherzusagen und gezielte Interventionsstrategien zu erstellen bevor sich Krankheiten weit ausbreiten.",
          nl: "AI zal de volksgezondheid revolutioneren door het analyseren van enorme datasets uit meerdere bronnen (sociale media, zoekpatronen, gezondheidsregisters) om ziekteuitbraken vroeg te detecteren, epidemieën te voorspellen en gerichte interventiestrategieën te creëren voordat ziektes zich wijd verspreiden."
        }
      },
      {
        question: {
          en: "What ethical considerations will become most important for AI governance by 2035?",
          es: "¿Qué consideraciones éticas se volverán más importantes para la gobernanza de IA para 2035?",
          de: "Welche ethischen Überlegungen werden für KI-Governance bis 2035 am wichtigsten?",
          nl: "Welke ethische overwegingen zullen het belangrijkst worden voor AI-governance tegen 2035?"
        },
        options: [
          { en: "Ensuring AI transparency, preventing algorithmic discrimination, and protecting human agency", es: "Asegurando transparencia de IA, previniendo discriminación algorítmica y protegiendo agencia humana", de: "KI-Transparenz sicherstellen, algorithmische Diskriminierung verhindern und menschliche Handlungsfähigkeit schützen", nl: "AI-transparantie waarborgen, algoritmische discriminatie voorkomen en menselijke autonomie beschermen" },
          { en: "Making AI as powerful as possible without restrictions", es: "Haciendo la IA tan poderosa como sea posible sin restricciones", de: "KI so mächtig wie möglich ohne Einschränkungen machen", nl: "AI zo krachtig mogelijk maken zonder beperkingen" },
          { en: "Keeping all AI technology secret", es: "Manteniendo toda la tecnología de IA en secreto", de: "Alle KI-Technologie geheim halten", nl: "Alle AI-technologie geheim houden" },
          { en: "Only allowing corporations to control AI", es: "Solo permitiendo que las corporaciones controlen la IA", de: "Nur Unternehmen erlauben KI zu kontrollieren", nl: "Alleen bedrijven toestaan AI te controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Key ethical priorities will include ensuring AI systems are explainable and auditable, preventing bias and discrimination in automated decisions, maintaining human oversight and control, protecting privacy, and ensuring equitable access to AI benefits across society.",
          es: "Las prioridades éticas clave incluirán asegurar que los sistemas de IA sean explicables y auditables, prevenir sesgo y discriminación en decisiones automatizadas, mantener supervisión y control humano, proteger la privacidad y asegurar acceso equitativo a beneficios de IA en toda la sociedad.",
          de: "Wichtige ethische Prioritäten werden umfassen dass KI-Systeme erklärbar und überprüfbar sind, Verzerrung und Diskriminierung in automatisierten Entscheidungen verhindern, menschliche Überwachung und Kontrolle bewahren, Privatsphäre schützen und gerechten Zugang zu KI-Vorteilen in der gesamten Gesellschaft sicherstellen.",
          nl: "Belangrijke ethische prioriteiten zullen zijn ervoor zorgen dat AI-systemen uitlegbaar en controleerbaar zijn, vooringenomenheid en discriminatie in geautomatiseerde beslissingen voorkomen, menselijk toezicht en controle behouden, privacy beschermen en gelijke toegang tot AI-voordelen in de hele samenleving waarborgen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
