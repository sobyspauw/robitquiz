// AI in transport - level3
// Total questions: 100
// Advanced level transport AI concepts

module.exports = {
    questions: [
        {
            question: {
                en: "What defines Level 3 autonomous driving?",
                es: "¿Qué define la conducción autónoma de Nivel 3?",
                de: "Was definiert autonomes Fahren der Stufe 3?",
                nl: "Wat definieert niveau 3 autonoom rijden?"
            },
            options: [
                { en: "Conditional automation with handover capability", es: "Automatización condicional con capacidad de transferencia", de: "Bedingte Automatisierung mit Übergabefähigkeit", nl: "Voorwaardelijke automatisering met overdracht mogelijkheid" },
                { en: "Full automation without driver", es: "Automatización total sin conductor", de: "Vollautomatisierung ohne Fahrer", nl: "Volledige automatisering zonder bestuurder" },
                { en: "Manual driving only", es: "Solo conducción manual", de: "Nur manuelles Fahren", nl: "Alleen handmatig rijden" },
                { en: "Basic cruise control", es: "Control de crucero básico", de: "Einfacher Tempomat", nl: "Basis cruisecontrol" }
            ],
            correct: 0,
            explanation: {
                en: "Level 3 vehicles can drive themselves but require driver readiness to take control when requested by the system.",
                es: "Los vehículos de Nivel 3 pueden conducirse solos pero requieren que el conductor esté listo para tomar control.",
                de: "Stufe-3-Fahrzeuge können selbst fahren, benötigen aber Fahrerbereitschaft zur Übernahme auf Anforderung.",
                nl: "Niveau 3 voertuigen kunnen zelfstandig rijden maar vereisen dat de bestuurder klaar is om over te nemen."
            }
        },
        {
            question: {
                en: "What is neural network architecture in transport AI?",
                es: "¿Qué es la arquitectura de redes neuronales en IA de transporte?",
                de: "Was ist neuronale Netzwerkarchitektur in Verkehrs-KI?",
                nl: "Wat is neurale netwerkarchitectuur in transport AI?"
            },
            options: [
                { en: "Deep learning models for perception and control", es: "Modelos de aprendizaje profundo para percepción y control", de: "Deep-Learning-Modelle für Wahrnehmung und Steuerung", nl: "Deep learning modellen voor perceptie en controle" },
                { en: "Physical road networks", es: "Redes viales físicas", de: "Physische Straßennetze", nl: "Fysieke wegennetwerken" },
                { en: "Internet connections", es: "Conexiones a internet", de: "Internetverbindungen", nl: "Internetverbindingen" },
                { en: "Social networks", es: "Redes sociales", de: "Soziale Netzwerke", nl: "Sociale netwerken" }
            ],
            correct: 0,
            explanation: {
                en: "Neural networks in transport use multiple layers to process sensor data for object detection, path planning, and decision making.",
                es: "Las redes neuronales en transporte usan múltiples capas para procesar datos de sensores para detección y decisiones.",
                de: "Neuronale Netze im Verkehr nutzen mehrere Schichten zur Sensordatenverarbeitung für Objekterkennung und Entscheidungen.",
                nl: "Neurale netwerken in transport gebruiken meerdere lagen om sensordata te verwerken voor objectdetectie en besluitvorming."
            }
        },
        {
            question: {
                en: "How does reinforcement learning improve autonomous driving?",
                es: "¿Cómo mejora el aprendizaje por refuerzo la conducción autónoma?",
                de: "Wie verbessert Reinforcement Learning autonomes Fahren?",
                nl: "Hoe verbetert reinforcement learning autonoom rijden?"
            },
            options: [
                { en: "Learns optimal driving strategies through trial and reward", es: "Aprende estrategias óptimas mediante prueba y recompensa", de: "Lernt optimale Fahrstrategien durch Versuch und Belohnung", nl: "Leert optimale rijstrategieën door trial en beloning" },
                { en: "Forces drivers to learn", es: "Obliga a conductores a aprender", de: "Zwingt Fahrer zu lernen", nl: "Dwingt bestuurders te leren" },
                { en: "Reinforces car structure", es: "Refuerza estructura del auto", de: "Verstärkt Fahrzeugstruktur", nl: "Versterkt autostructuur" },
                { en: "Strengthens roads", es: "Fortalece carreteras", de: "Verstärkt Straßen", nl: "Versterkt wegen" }
            ],
            correct: 0,
            explanation: {
                en: "RL algorithms enable vehicles to learn complex driving behaviors by maximizing rewards for safe and efficient actions.",
                es: "Los algoritmos RL permiten a vehículos aprender comportamientos complejos maximizando recompensas por acciones seguras.",
                de: "RL-Algorithmen ermöglichen Fahrzeugen, komplexe Fahrverhalten durch Belohnungsmaximierung zu lernen.",
                nl: "RL-algoritmen stellen voertuigen in staat complexe rijgedragingen te leren door beloningen te maximaliseren."
            }
        },
        {
            question: {
                en: "What is simultaneous localization and mapping (SLAM)?",
                es: "¿Qué es localización y mapeo simultáneos (SLAM)?",
                de: "Was ist simultane Lokalisierung und Kartierung (SLAM)?",
                nl: "Wat is simultane lokalisatie en mapping (SLAM)?"
            },
            options: [
                { en: "Building maps while determining position", es: "Construir mapas mientras determina posición", de: "Karten erstellen während Positionsbestimmung", nl: "Kaarten maken terwijl positie wordt bepaald" },
                { en: "Slamming on brakes", es: "Frenar bruscamente", de: "Vollbremsung", nl: "Hard remmen" },
                { en: "Door closing system", es: "Sistema de cierre de puertas", de: "Türschließsystem", nl: "Deursluit systeem" },
                { en: "Sound dampening", es: "Amortiguación de sonido", de: "Schalldämpfung", nl: "Geluidsdemping" }
            ],
            correct: 0,
            explanation: {
                en: "SLAM allows vehicles to create detailed maps of unknown environments while tracking their position within those maps.",
                es: "SLAM permite a vehículos crear mapas detallados de entornos desconocidos mientras rastrean su posición.",
                de: "SLAM ermöglicht Fahrzeugen, detaillierte Karten unbekannter Umgebungen zu erstellen und ihre Position zu verfolgen.",
                nl: "SLAM stelt voertuigen in staat gedetailleerde kaarten te maken van onbekende omgevingen terwijl ze hun positie volgen."
            }
        },
        {
            question: {
                en: "What is occupancy grid mapping in autonomous vehicles?",
                es: "¿Qué es el mapeo de cuadrícula de ocupación en vehículos autónomos?",
                de: "Was ist Belegungsgitterkartierung in autonomen Fahrzeugen?",
                nl: "Wat is bezettingsraster mapping in autonome voertuigen?"
            },
            options: [
                { en: "Probabilistic representation of environment obstacles", es: "Representación probabilística de obstáculos del entorno", de: "Probabilistische Darstellung von Umgebungshindernissen", nl: "Probabilistische weergave van omgevingsobstakels" },
                { en: "Seat occupancy detection", es: "Detección de ocupación de asientos", de: "Sitzbelegungserkennung", nl: "Stoelbezetting detectie" },
                { en: "Parking lot maps", es: "Mapas de estacionamiento", de: "Parkplatzkarten", nl: "Parkeerplaats kaarten" },
                { en: "Grid pattern roads", es: "Carreteras en patrón de cuadrícula", de: "Gittermuster-Straßen", nl: "Rasterpatroon wegen" }
            ],
            correct: 0,
            explanation: {
                en: "Occupancy grids divide space into cells with probability values indicating likelihood of obstacles for path planning.",
                es: "Las cuadrículas de ocupación dividen el espacio en celdas con valores de probabilidad de obstáculos para planificación.",
                de: "Belegungsgitter teilen Raum in Zellen mit Wahrscheinlichkeitswerten für Hindernisse zur Pfadplanung.",
                nl: "Bezettingsrasters verdelen ruimte in cellen met waarschijnlijkheidswaarden voor obstakels voor padplanning."
            }
        },
        {
            question: {
                en: "How does Kalman filtering work in vehicle tracking?",
                es: "¿Cómo funciona el filtro de Kalman en seguimiento vehicular?",
                de: "Wie funktioniert Kalman-Filterung bei der Fahrzeugverfolgung?",
                nl: "Hoe werkt Kalman filtering bij voertuigtracking?"
            },
            options: [
                { en: "Predicts and corrects position estimates using sensor fusion", es: "Predice y corrige estimaciones de posición usando fusión de sensores", de: "Prognostiziert und korrigiert Positionsschätzungen durch Sensorfusion", nl: "Voorspelt en corrigeert positieschattingen met sensorfusie" },
                { en: "Filters air in cabin", es: "Filtra aire en cabina", de: "Filtert Kabinenluft", nl: "Filtert cabinelucht" },
                { en: "Removes noise from radio", es: "Elimina ruido de radio", de: "Entfernt Radiorauschen", nl: "Verwijdert radioruis" },
                { en: "Cleans sensor lenses", es: "Limpia lentes de sensores", de: "Reinigt Sensorlinsen", nl: "Reinigt sensorlenzen" }
            ],
            correct: 0,
            explanation: {
                en: "Kalman filters combine noisy sensor measurements with motion models to produce accurate vehicle state estimates.",
                es: "Los filtros de Kalman combinan mediciones ruidosas con modelos de movimiento para estimaciones precisas del estado.",
                de: "Kalman-Filter kombinieren verrauschte Sensormessungen mit Bewegungsmodellen für genaue Zustandsschätzungen.",
                nl: "Kalman filters combineren ruizige sensormetingen met bewegingsmodellen voor nauwkeurige toestandsschattingen."
            }
        },
        {
            question: {
                en: "What is behavior prediction in autonomous driving?",
                es: "¿Qué es la predicción de comportamiento en conducción autónoma?",
                de: "Was ist Verhaltensvorhersage beim autonomen Fahren?",
                nl: "Wat is gedragsvoorspelling bij autonoom rijden?"
            },
            options: [
                { en: "Forecasting actions of other road users", es: "Pronosticar acciones de otros usuarios viales", de: "Vorhersage der Aktionen anderer Verkehrsteilnehmer", nl: "Voorspellen van acties van andere weggebruikers" },
                { en: "Predicting weather", es: "Predecir el clima", de: "Wettervorhersage", nl: "Weer voorspellen" },
                { en: "Driver mood detection", es: "Detección del humor del conductor", de: "Fahrerstimmungserkennung", nl: "Bestuurder stemming detectie" },
                { en: "Fuel consumption forecast", es: "Pronóstico de consumo de combustible", de: "Kraftstoffverbrauchsprognose", nl: "Brandstofverbruik voorspelling" }
            ],
            correct: 0,
            explanation: {
                en: "AI models predict trajectories and intentions of pedestrians, cyclists, and other vehicles for safe path planning.",
                es: "Los modelos IA predicen trayectorias e intenciones de peatones, ciclistas y otros vehículos para planificación segura.",
                de: "KI-Modelle prognostizieren Trajektorien und Absichten von Fußgängern und Fahrzeugen für sichere Pfadplanung.",
                nl: "AI-modellen voorspellen trajecten en intenties van voetgangers, fietsers en voertuigen voor veilige padplanning."
            }
        },
        {
            question: {
                en: "What is motion planning in autonomous vehicles?",
                es: "¿Qué es la planificación de movimiento en vehículos autónomos?",
                de: "Was ist Bewegungsplanung in autonomen Fahrzeugen?",
                nl: "Wat is bewegingsplanning in autonome voertuigen?"
            },
            options: [
                { en: "Computing safe trajectories considering dynamics", es: "Calcular trayectorias seguras considerando dinámica", de: "Berechnung sicherer Trajektorien unter Berücksichtigung der Dynamik", nl: "Berekenen van veilige trajecten met inachtneming van dynamiek" },
                { en: "Planning car movies", es: "Planificar películas de autos", de: "Autofilme planen", nl: "Autofilms plannen" },
                { en: "Exercise routines", es: "Rutinas de ejercicio", de: "Übungsroutinen", nl: "Oefenroutines" },
                { en: "Animation sequences", es: "Secuencias de animación", de: "Animationssequenzen", nl: "Animatiereeksen" }
            ],
            correct: 0,
            explanation: {
                en: "Motion planning generates smooth, feasible paths that respect vehicle dynamics, traffic rules, and safety constraints.",
                es: "La planificación de movimiento genera rutas suaves y factibles respetando dinámica, reglas y restricciones de seguridad.",
                de: "Bewegungsplanung erzeugt glatte, machbare Pfade unter Beachtung von Fahrzeugdynamik und Sicherheit.",
                nl: "Bewegingsplanning genereert vloeiende, haalbare paden met respect voor voertuigdynamiek en veiligheid."
            }
        },
        {
            question: {
                en: "How does semantic segmentation help autonomous driving?",
                es: "¿Cómo ayuda la segmentación semántica a la conducción autónoma?",
                de: "Wie hilft semantische Segmentierung beim autonomen Fahren?",
                nl: "Hoe helpt semantische segmentatie bij autonoom rijden?"
            },
            options: [
                { en: "Classifies each pixel in images by object type", es: "Clasifica cada píxel en imágenes por tipo de objeto", de: "Klassifiziert jeden Pixel in Bildern nach Objekttyp", nl: "Classificeert elke pixel in beelden per objecttype" },
                { en: "Segments trip duration", es: "Segmenta duración del viaje", de: "Segmentiert Reisedauer", nl: "Segmenteert reisduur" },
                { en: "Divides fuel tank", es: "Divide tanque de combustible", de: "Teilt Kraftstofftank", nl: "Verdeelt brandstoftank" },
                { en: "Separates car parts", es: "Separa partes del auto", de: "Trennt Autoteile", nl: "Scheidt auto-onderdelen" }
            ],
            correct: 0,
            explanation: {
                en: "Semantic segmentation identifies road, sidewalk, vehicles, pedestrians, and signs at pixel level for scene understanding.",
                es: "La segmentación semántica identifica carretera, acera, vehículos y señales a nivel de píxel para comprensión de escena.",
                de: "Semantische Segmentierung identifiziert Straße, Gehweg, Fahrzeuge auf Pixelebene für Szenenverständnis.",
                nl: "Semantische segmentatie identificeert weg, stoep, voertuigen op pixelniveau voor scènebegrip."
            }
        },
        {
            question: {
                en: "What is end-to-end learning in autonomous driving?",
                es: "¿Qué es el aprendizaje de extremo a extremo en conducción autónoma?",
                de: "Was ist End-to-End-Learning beim autonomen Fahren?",
                nl: "Wat is end-to-end learning bij autonoom rijden?"
            },
            options: [
                { en: "Direct mapping from sensors to control commands", es: "Mapeo directo de sensores a comandos de control", de: "Direkte Zuordnung von Sensoren zu Steuerbefehlen", nl: "Directe mapping van sensoren naar stuurcommando's" },
                { en: "Learning from start to finish line", es: "Aprender de inicio a meta", de: "Lernen von Start bis Ziel", nl: "Leren van start tot finish" },
                { en: "Complete driver education", es: "Educación completa del conductor", de: "Vollständige Fahrerausbildung", nl: "Complete bestuurdersopleiding" },
                { en: "Full car assembly", es: "Ensamblaje completo del auto", de: "Vollständige Automontage", nl: "Volledige auto-assemblage" }
            ],
            correct: 0,
            explanation: {
                en: "End-to-end learning trains neural networks to directly output steering and acceleration from raw sensor inputs.",
                es: "El aprendizaje extremo a extremo entrena redes para generar dirección y aceleración desde entradas de sensores.",
                de: "End-to-End-Learning trainiert Netze zur direkten Ausgabe von Lenkung aus Sensoreingaben.",
                nl: "End-to-end learning traint netwerken om direct sturen en acceleratie uit sensorinput te genereren."
            }
        },
        {
            question: {
                en: "What is probabilistic robotics in transport?",
                es: "¿Qué es la robótica probabilística en transporte?",
                de: "Was ist probabilistische Robotik im Verkehr?",
                nl: "Wat is probabilistische robotica in transport?"
            },
            options: [
                { en: "Handling uncertainty in perception and control", es: "Manejar incertidumbre en percepción y control", de: "Umgang mit Unsicherheit in Wahrnehmung und Steuerung", nl: "Omgaan met onzekerheid in perceptie en controle" },
                { en: "Probable robot failures", es: "Fallas probables de robots", de: "Wahrscheinliche Roboterausfälle", nl: "Waarschijnlijke robot storingen" },
                { en: "Random robot movements", es: "Movimientos aleatorios de robots", de: "Zufällige Roboterbewegungen", nl: "Willekeurige robot bewegingen" },
                { en: "Robot probability games", es: "Juegos de probabilidad de robots", de: "Roboter-Wahrscheinlichkeitsspiele", nl: "Robot kansspelen" }
            ],
            correct: 0,
            explanation: {
                en: "Probabilistic methods quantify uncertainty in sensor data and use Bayesian inference for robust decision making.",
                es: "Los métodos probabilísticos cuantifican incertidumbre en datos y usan inferencia bayesiana para decisiones robustas.",
                de: "Probabilistische Methoden quantifizieren Unsicherheit und nutzen Bayes'sche Inferenz für robuste Entscheidungen.",
                nl: "Probabilistische methoden kwantificeren onzekerheid en gebruiken Bayesiaanse inferentie voor robuuste besluitvorming."
            }
        },
        {
            question: {
                en: "How does graph neural networks help traffic prediction?",
                es: "¿Cómo ayudan las redes neuronales de grafos en predicción de tráfico?",
                de: "Wie helfen Graph Neural Networks bei der Verkehrsprognose?",
                nl: "Hoe helpen graph neural networks bij verkeersvoorspelling?"
            },
            options: [
                { en: "Models road networks as graphs for flow prediction", es: "Modela redes viales como grafos para predicción de flujo", de: "Modelliert Straßennetze als Graphen für Flussprognose", nl: "Modelleert wegennetwerken als grafen voor stroomvoorspelling" },
                { en: "Draws traffic graphs", es: "Dibuja gráficos de tráfico", de: "Zeichnet Verkehrsgrafiken", nl: "Tekent verkeersgrafieken" },
                { en: "Neural brain graphs", es: "Gráficos cerebrales neuronales", de: "Neuronale Gehirngraphen", nl: "Neurale hersengrafieken" },
                { en: "Network cable routing", es: "Enrutamiento de cables de red", de: "Netzwerkkabel-Routing", nl: "Netwerkkabel routing" }
            ],
            correct: 0,
            explanation: {
                en: "GNNs capture spatial-temporal dependencies in traffic networks to predict congestion and optimize routing.",
                es: "Las GNN capturan dependencias espacio-temporales en redes de tráfico para predecir congestión.",
                de: "GNNs erfassen räumlich-zeitliche Abhängigkeiten in Verkehrsnetzen zur Stauprognose.",
                nl: "GNN's vangen ruimtelijk-temporele afhankelijkheden in verkeersnetwerken voor congestievoorspelling."
            }
        },
        {
            question: {
                en: "What is model predictive control in autonomous vehicles?",
                es: "¿Qué es el control predictivo de modelo en vehículos autónomos?",
                de: "Was ist modellprädiktive Regelung in autonomen Fahrzeugen?",
                nl: "Wat is model predictive control in autonome voertuigen?"
            },
            options: [
                { en: "Optimizes control over future time horizon", es: "Optimiza control sobre horizonte temporal futuro", de: "Optimiert Steuerung über zukünftigen Zeithorizont", nl: "Optimaliseert controle over toekomstige tijdshorizon" },
                { en: "Predicts model car sales", es: "Predice ventas de modelos de autos", de: "Prognostiziert Modellautoverkäufe", nl: "Voorspelt modelauto verkopen" },
                { en: "Controls fashion models", es: "Controla modelos de moda", de: "Kontrolliert Modemodelle", nl: "Controleert modemodellen" },
                { en: "Weather prediction models", es: "Modelos de predicción del clima", de: "Wettervorhersagemodelle", nl: "Weervoorspellingsmodellen" }
            ],
            correct: 0,
            explanation: {
                en: "MPC solves optimization problems in real-time to compute optimal control actions considering future constraints.",
                es: "MPC resuelve problemas de optimización en tiempo real para calcular acciones óptimas considerando restricciones.",
                de: "MPC löst Optimierungsprobleme in Echtzeit zur Berechnung optimaler Steuerungen unter Nebenbedingungen.",
                nl: "MPC lost optimalisatieproblemen in real-time op voor optimale controle-acties met toekomstige beperkingen."
            }
        },
        {
            question: {
                en: "What is multi-agent coordination in traffic?",
                es: "¿Qué es la coordinación multiagente en tráfico?",
                de: "Was ist Multi-Agenten-Koordination im Verkehr?",
                nl: "Wat is multi-agent coördinatie in verkeer?"
            },
            options: [
                { en: "Vehicles cooperating to optimize flow", es: "Vehículos cooperando para optimizar flujo", de: "Fahrzeuge kooperieren zur Flussoptimierung", nl: "Voertuigen werken samen voor stroomoptimalisatie" },
                { en: "Multiple insurance agents", es: "Múltiples agentes de seguros", de: "Mehrere Versicherungsagenten", nl: "Meerdere verzekeringsagenten" },
                { en: "Secret agent vehicles", es: "Vehículos de agentes secretos", de: "Geheimagenten-Fahrzeuge", nl: "Geheim agent voertuigen" },
                { en: "Travel agency coordination", es: "Coordinación de agencias de viaje", de: "Reisebüro-Koordination", nl: "Reisbureau coördinatie" }
            ],
            correct: 0,
            explanation: {
                en: "Multi-agent systems enable vehicles to negotiate and coordinate actions for efficient intersection crossing and merging.",
                es: "Los sistemas multiagente permiten a vehículos negociar y coordinar acciones para cruces eficientes.",
                de: "Multi-Agenten-Systeme ermöglichen Fahrzeugen, Aktionen für effiziente Kreuzungen zu koordinieren.",
                nl: "Multi-agent systemen stellen voertuigen in staat te onderhandelen voor efficiënte kruispunten."
            }
        },
        {
            question: {
                en: "How does transfer learning accelerate autonomous driving development?",
                es: "¿Cómo acelera el aprendizaje por transferencia el desarrollo de conducción autónoma?",
                de: "Wie beschleunigt Transfer Learning die Entwicklung autonomen Fahrens?",
                nl: "Hoe versnelt transfer learning de ontwikkeling van autonoom rijden?"
            },
            options: [
                { en: "Applies knowledge from simulation to real world", es: "Aplica conocimiento de simulación al mundo real", de: "Überträgt Wissen aus Simulation in reale Welt", nl: "Past kennis van simulatie toe op echte wereld" },
                { en: "Transfers ownership", es: "Transfiere propiedad", de: "Überträgt Eigentum", nl: "Draagt eigendom over" },
                { en: "Money transfers", es: "Transferencias de dinero", de: "Geldtransfers", nl: "Geldoverdrachten" },
                { en: "Driver license transfer", es: "Transferencia de licencia", de: "Führerscheinübertragung", nl: "Rijbewijs overdracht" }
            ],
            correct: 0,
            explanation: {
                en: "Transfer learning uses pre-trained models from large datasets or simulations to reduce real-world training requirements.",
                es: "El aprendizaje por transferencia usa modelos preentrenados de grandes datasets para reducir requisitos de entrenamiento.",
                de: "Transfer Learning nutzt vortrainierte Modelle aus großen Datensätzen zur Reduzierung des Trainingsaufwands.",
                nl: "Transfer learning gebruikt voorgetrainde modellen uit grote datasets om trainingsbehoeften te verminderen."
            }
        },
        {
            question: {
                en: "What is adversarial testing in autonomous vehicles?",
                es: "¿Qué son las pruebas adversarias en vehículos autónomos?",
                de: "Was ist adversarisches Testen in autonomen Fahrzeugen?",
                nl: "Wat is adversarial testing in autonome voertuigen?"
            },
            options: [
                { en: "Testing with challenging edge cases", es: "Pruebas con casos extremos desafiantes", de: "Testen mit herausfordernden Randfällen", nl: "Testen met uitdagende randgevallen" },
                { en: "Testing against enemies", es: "Pruebas contra enemigos", de: "Testen gegen Feinde", nl: "Testen tegen vijanden" },
                { en: "Competitive racing", es: "Carreras competitivas", de: "Wettbewerbsrennen", nl: "Competitief racen" },
                { en: "Advertising tests", es: "Pruebas de publicidad", de: "Werbetests", nl: "Advertentietests" }
            ],
            correct: 0,
            explanation: {
                en: "Adversarial testing deliberately creates difficult scenarios to identify and fix weaknesses in AI driving systems.",
                es: "Las pruebas adversarias crean escenarios difíciles deliberadamente para identificar debilidades en sistemas IA.",
                de: "Adversarisches Testen erzeugt absichtlich schwierige Szenarien zur Identifikation von Schwächen.",
                nl: "Adversarial testing creëert opzettelijk moeilijke scenario's om zwakheden in AI-systemen te identificeren."
            }
        },
        {
            question: {
                en: "What is temporal convolutional networks in traffic?",
                es: "¿Qué son las redes convolucionales temporales en tráfico?",
                de: "Was sind temporale Faltungsnetzwerke im Verkehr?",
                nl: "Wat zijn temporele convolutionele netwerken in verkeer?"
            },
            options: [
                { en: "Processes time-series traffic data", es: "Procesa datos de tráfico de series temporales", de: "Verarbeitet Zeitreihen-Verkehrsdaten", nl: "Verwerkt tijdreeks verkeersdata" },
                { en: "Temporary network connections", es: "Conexiones de red temporales", de: "Temporäre Netzwerkverbindungen", nl: "Tijdelijke netwerkverbindingen" },
                { en: "Time travel networks", es: "Redes de viaje en el tiempo", de: "Zeitreise-Netzwerke", nl: "Tijdreis netwerken" },
                { en: "Temple construction", es: "Construcción de templos", de: "Tempelbau", nl: "Tempelbouw" }
            ],
            correct: 0,
            explanation: {
                en: "TCNs efficiently capture long-range temporal dependencies in traffic flow for accurate prediction.",
                es: "Las TCN capturan eficientemente dependencias temporales de largo alcance en flujo de tráfico.",
                de: "TCNs erfassen effizient langreichweitige zeitliche Abhängigkeiten im Verkehrsfluss.",
                nl: "TCN's vangen efficiënt lange-termijn temporele afhankelijkheden in verkeersstroom."
            }
        },
        {
            question: {
                en: "How does inverse reinforcement learning work in driving?",
                es: "¿Cómo funciona el aprendizaje por refuerzo inverso en conducción?",
                de: "Wie funktioniert inverses Reinforcement Learning beim Fahren?",
                nl: "Hoe werkt inverse reinforcement learning bij rijden?"
            },
            options: [
                { en: "Learns reward functions from expert demonstrations", es: "Aprende funciones de recompensa de demostraciones expertas", de: "Lernt Belohnungsfunktionen aus Expertenvorführungen", nl: "Leert beloningsfuncties van expertdemonstraties" },
                { en: "Drives in reverse", es: "Conduce en reversa", de: "Fährt rückwärts", nl: "Rijdt achteruit" },
                { en: "Inverts steering", es: "Invierte dirección", de: "Invertiert Lenkung", nl: "Inverteert sturen" },
                { en: "Reverses traffic flow", es: "Invierte flujo de tráfico", de: "Kehrt Verkehrsfluss um", nl: "Keert verkeersstroom om" }
            ],
            correct: 0,
            explanation: {
                en: "IRL infers the underlying objectives that expert drivers optimize, enabling more human-like driving behavior.",
                es: "IRL infiere los objetivos que optimizan conductores expertos, permitiendo comportamiento más humano.",
                de: "IRL leitet die Ziele ab, die Expertenfahrer optimieren, für menschenähnlicheres Fahrverhalten.",
                nl: "IRL leidt de onderliggende doelen af die expertbestuurders optimaliseren voor menselijker rijgedrag."
            }
        },
        {
            question: {
                en: "What is federated learning in connected vehicles?",
                es: "¿Qué es el aprendizaje federado en vehículos conectados?",
                de: "Was ist föderiertes Lernen in vernetzten Fahrzeugen?",
                nl: "Wat is federated learning in connected vehicles?"
            },
            options: [
                { en: "Collaborative learning without sharing raw data", es: "Aprendizaje colaborativo sin compartir datos crudos", de: "Kollaboratives Lernen ohne Rohdatenaustausch", nl: "Collaboratief leren zonder ruwe data delen" },
                { en: "Federal vehicle regulations", es: "Regulaciones federales de vehículos", de: "Bundesfahrzeugvorschriften", nl: "Federale voertuigregulaties" },
                { en: "Government learning programs", es: "Programas de aprendizaje gubernamental", de: "Regierungslernprogramme", nl: "Overheid leerprogramma's" },
                { en: "Federation of drivers", es: "Federación de conductores", de: "Fahrerverband", nl: "Federatie van bestuurders" }
            ],
            correct: 0,
            explanation: {
                en: "Federated learning trains shared models across vehicles while keeping sensitive driving data private and local.",
                es: "El aprendizaje federado entrena modelos compartidos entre vehículos manteniendo datos privados y locales.",
                de: "Föderiertes Lernen trainiert gemeinsame Modelle über Fahrzeuge bei lokaler Datenhaltung.",
                nl: "Federated learning traint gedeelde modellen over voertuigen terwijl gevoelige data lokaal blijft."
            }
        },
        {
            question: {
                en: "What is occlusion handling in computer vision?",
                es: "¿Qué es el manejo de oclusión en visión por computadora?",
                de: "Was ist Verdeckungsbehandlung in Computer Vision?",
                nl: "Wat is occlusie-afhandeling in computer vision?"
            },
            options: [
                { en: "Detecting objects partially hidden from view", es: "Detectar objetos parcialmente ocultos", de: "Erkennung teilweise verdeckter Objekte", nl: "Detecteren van gedeeltelijk verborgen objecten" },
                { en: "Occult practices", es: "Prácticas ocultas", de: "Okkulte Praktiken", nl: "Occulte praktijken" },
                { en: "Eye occlusion therapy", es: "Terapia de oclusión ocular", de: "Augenokklusionstherapie", nl: "Oog occlusie therapie" },
                { en: "Closing roads", es: "Cerrar carreteras", de: "Straßen schließen", nl: "Wegen afsluiten" }
            ],
            correct: 0,
            explanation: {
                en: "Occlusion handling uses context and partial features to track and predict positions of partially visible objects.",
                es: "El manejo de oclusión usa contexto y características parciales para rastrear objetos parcialmente visibles.",
                de: "Verdeckungsbehandlung nutzt Kontext und Teilmerkmale zur Verfolgung teilweise sichtbarer Objekte.",
                nl: "Occlusie-afhandeling gebruikt context en gedeeltelijke kenmerken om deels zichtbare objecten te volgen."
            }
        },
        {
            question: {
                en: "How does attention mechanism improve autonomous driving?",
                es: "¿Cómo mejora el mecanismo de atención la conducción autónoma?",
                de: "Wie verbessert der Aufmerksamkeitsmechanismus autonomes Fahren?",
                nl: "Hoe verbetert het attention mechanisme autonoom rijden?"
            },
            options: [
                { en: "Focuses processing on relevant scene regions", es: "Enfoca procesamiento en regiones relevantes de escena", de: "Fokussiert Verarbeitung auf relevante Szenenbereiche", nl: "Focust verwerking op relevante scènegebieden" },
                { en: "Gets driver's attention", es: "Obtiene atención del conductor", de: "Erhält Fahreraufmerksamkeit", nl: "Krijgt aandacht van bestuurder" },
                { en: "Attention deficit disorder", es: "Trastorno de déficit de atención", de: "Aufmerksamkeitsdefizit-Störung", nl: "Aandachtstekortstoornis" },
                { en: "Warning signals", es: "Señales de advertencia", de: "Warnsignale", nl: "Waarschuwingssignalen" }
            ],
            correct: 0,
            explanation: {
                en: "Attention mechanisms weight important features like pedestrians and traffic signs for better decision making.",
                es: "Los mecanismos de atención ponderan características importantes como peatones y señales para mejores decisiones.",
                de: "Aufmerksamkeitsmechanismen gewichten wichtige Merkmale wie Fußgänger und Schilder für bessere Entscheidungen.",
                nl: "Attention mechanismen wegen belangrijke kenmerken zoals voetgangers en borden voor betere besluitvorming."
            }
        },
        {
            question: {
                en: "What is V2X communication architecture?",
                es: "¿Qué es la arquitectura de comunicación V2X?",
                de: "Was ist V2X-Kommunikationsarchitektur?",
                nl: "Wat is V2X communicatie-architectuur?"
            },
            options: [
                { en: "Vehicle-to-everything connectivity framework", es: "Marco de conectividad vehículo a todo", de: "Fahrzeug-zu-Alles Konnektivitätsrahmen", nl: "Voertuig-naar-alles connectiviteitsraamwerk" },
                { en: "Version 2 extreme", es: "Versión 2 extrema", de: "Version 2 extrem", nl: "Versie 2 extreem" },
                { en: "Vertical to crossing", es: "Vertical a cruce", de: "Vertikal zu Kreuzung", nl: "Verticaal naar kruising" },
                { en: "Video to Xbox", es: "Video a Xbox", de: "Video zu Xbox", nl: "Video naar Xbox" }
            ],
            correct: 0,
            explanation: {
                en: "V2X enables vehicles to communicate with infrastructure, pedestrians, network, and other vehicles for safety.",
                es: "V2X permite a vehículos comunicarse con infraestructura, peatones, red y otros vehículos para seguridad.",
                de: "V2X ermöglicht Fahrzeugen die Kommunikation mit Infrastruktur, Fußgängern und anderen Fahrzeugen.",
                nl: "V2X stelt voertuigen in staat te communiceren met infrastructuur, voetgangers en andere voertuigen."
            }
        },
        {
            question: {
                en: "What is trajectory optimization in path planning?",
                es: "¿Qué es la optimización de trayectoria en planificación de rutas?",
                de: "Was ist Trajektorienoptimierung in der Pfadplanung?",
                nl: "Wat is trajectoptimalisatie in padplanning?"
            },
            options: [
                { en: "Finding smooth paths minimizing time and energy", es: "Encontrar rutas suaves minimizando tiempo y energía", de: "Glatte Pfade finden mit minimaler Zeit und Energie", nl: "Vinden van vloeiende paden met minimale tijd en energie" },
                { en: "Bullet trajectory", es: "Trayectoria de bala", de: "Geschossbahn", nl: "Kogelbaan" },
                { en: "Career trajectory", es: "Trayectoria profesional", de: "Karriereweg", nl: "Carrièretraject" },
                { en: "Trajectory of planets", es: "Trayectoria de planetas", de: "Planetenbahn", nl: "Planetenbanen" }
            ],
            correct: 0,
            explanation: {
                en: "Trajectory optimization computes paths that minimize cost functions like time, comfort, and energy consumption.",
                es: "La optimización de trayectoria calcula rutas que minimizan funciones de costo como tiempo y energía.",
                de: "Trajektorienoptimierung berechnet Pfade, die Kostenfunktionen wie Zeit und Energie minimieren.",
                nl: "Trajectoptimalisatie berekent paden die kostenfuncties zoals tijd en energie minimaliseren."
            }
        },
        {
            question: {
                en: "How does 5G enhance autonomous vehicle capabilities?",
                es: "¿Cómo mejora 5G las capacidades de vehículos autónomos?",
                de: "Wie verbessert 5G die Fähigkeiten autonomer Fahrzeuge?",
                nl: "Hoe verbetert 5G de mogelijkheden van autonome voertuigen?"
            },
            options: [
                { en: "Ultra-low latency for real-time coordination", es: "Latencia ultra baja para coordinación en tiempo real", de: "Ultra-niedrige Latenz für Echtzeitkoordination", nl: "Ultra-lage latentie voor real-time coördinatie" },
                { en: "5 gears in transmission", es: "5 marchas en transmisión", de: "5 Gänge im Getriebe", nl: "5 versnellingen in transmissie" },
                { en: "5 gigabytes storage", es: "5 gigabytes de almacenamiento", de: "5 Gigabyte Speicher", nl: "5 gigabyte opslag" },
                { en: "5th generation car", es: "Auto de 5ta generación", de: "5. Generation Auto", nl: "5e generatie auto" }
            ],
            correct: 0,
            explanation: {
                en: "5G provides millisecond latency and high bandwidth for V2X communication and edge computing applications.",
                es: "5G proporciona latencia de milisegundos y alto ancho de banda para comunicación V2X y computación edge.",
                de: "5G bietet Millisekunden-Latenz und hohe Bandbreite für V2X-Kommunikation und Edge-Computing.",
                nl: "5G biedt milliseconde latentie en hoge bandbreedte voor V2X-communicatie en edge computing."
            }
        },
        {
            question: {
                en: "What is continuous learning in autonomous systems?",
                es: "¿Qué es el aprendizaje continuo en sistemas autónomos?",
                de: "Was ist kontinuierliches Lernen in autonomen Systemen?",
                nl: "Wat is continu leren in autonome systemen?"
            },
            options: [
                { en: "Updating models with new driving scenarios", es: "Actualizar modelos con nuevos escenarios de conducción", de: "Modelle mit neuen Fahrszenarien aktualisieren", nl: "Modellen updaten met nieuwe rijscenario's" },
                { en: "Never stopping education", es: "Nunca detener educación", de: "Nie aufhörende Bildung", nl: "Nooit stoppend onderwijs" },
                { en: "Continuous driving", es: "Conducción continua", de: "Kontinuierliches Fahren", nl: "Continu rijden" },
                { en: "Learning curves", es: "Curvas de aprendizaje", de: "Lernkurven", nl: "Leercurves" }
            ],
            correct: 0,
            explanation: {
                en: "Continuous learning allows AI to adapt to new situations and improve performance over time without forgetting.",
                es: "El aprendizaje continuo permite a IA adaptarse a nuevas situaciones y mejorar sin olvidar.",
                de: "Kontinuierliches Lernen ermöglicht KI, sich an neue Situationen anzupassen ohne zu vergessen.",
                nl: "Continu leren stelt AI in staat zich aan te passen aan nieuwe situaties zonder te vergeten."
            }
        },
        {
            question: {
                en: "What is multi-sensor calibration in autonomous vehicles?",
                es: "¿Qué es la calibración multisensor en vehículos autónomos?",
                de: "Was ist Multisensor-Kalibrierung in autonomen Fahrzeugen?",
                nl: "Wat is multi-sensor kalibratie in autonome voertuigen?"
            },
            options: [
                { en: "Aligning coordinate systems of different sensors", es: "Alinear sistemas de coordenadas de diferentes sensores", de: "Koordinatensysteme verschiedener Sensoren ausrichten", nl: "Coördinaatsystemen van verschillende sensoren uitlijnen" },
                { en: "Calibrating speedometer", es: "Calibrar velocímetro", de: "Tachometer kalibrieren", nl: "Snelheidsmeter kalibreren" },
                { en: "Tire pressure calibration", es: "Calibración de presión de llantas", de: "Reifendruckkalibrierung", nl: "Bandenspanning kalibratie" },
                { en: "Engine calibration", es: "Calibración del motor", de: "Motorkalibrierung", nl: "Motor kalibratie" }
            ],
            correct: 0,
            explanation: {
                en: "Multi-sensor calibration ensures cameras, LIDAR, and radar data align spatially and temporally for accurate fusion.",
                es: "La calibración multisensor asegura que datos de cámaras, LIDAR y radar se alineen espacial y temporalmente.",
                de: "Multisensor-Kalibrierung stellt sicher, dass Kamera-, LIDAR- und Radardaten räumlich und zeitlich übereinstimmen.",
                nl: "Multi-sensor kalibratie zorgt dat camera-, LIDAR- en radardata ruimtelijk en temporeel uitgelijnd zijn."
            }
        },
        {
            question: {
                en: "How does uncertainty quantification work in autonomous driving?",
                es: "¿Cómo funciona la cuantificación de incertidumbre en conducción autónoma?",
                de: "Wie funktioniert Unsicherheitsquantifizierung beim autonomen Fahren?",
                nl: "Hoe werkt onzekerheidskwantificatie bij autonoom rijden?"
            },
            options: [
                { en: "Estimates confidence in predictions and decisions", es: "Estima confianza en predicciones y decisiones", de: "Schätzt Vertrauen in Vorhersagen und Entscheidungen", nl: "Schat vertrouwen in voorspellingen en beslissingen" },
                { en: "Uncertain about everything", es: "Incierto sobre todo", de: "Unsicher über alles", nl: "Onzeker over alles" },
                { en: "Quantum uncertainty", es: "Incertidumbre cuántica", de: "Quantenunsicherheit", nl: "Kwantum onzekerheid" },
                { en: "Financial uncertainty", es: "Incertidumbre financiera", de: "Finanzielle Unsicherheit", nl: "Financiële onzekerheid" }
            ],
            correct: 0,
            explanation: {
                en: "Uncertainty quantification provides probability distributions over outputs, enabling safer decision making under ambiguity.",
                es: "La cuantificación de incertidumbre proporciona distribuciones de probabilidad para decisiones más seguras.",
                de: "Unsicherheitsquantifizierung liefert Wahrscheinlichkeitsverteilungen für sicherere Entscheidungen.",
                nl: "Onzekerheidskwantificatie levert waarschijnlijkheidsverdelingen voor veiligere besluitvorming."
            }
        },
        {
            question: {
                en: "What is cooperative perception in connected vehicles?",
                es: "¿Qué es la percepción cooperativa en vehículos conectados?",
                de: "Was ist kooperative Wahrnehmung in vernetzten Fahrzeugen?",
                nl: "Wat is coöperatieve perceptie in connected vehicles?"
            },
            options: [
                { en: "Sharing sensor data between vehicles", es: "Compartir datos de sensores entre vehículos", de: "Sensordaten zwischen Fahrzeugen teilen", nl: "Sensordata delen tussen voertuigen" },
                { en: "Cooperative driving school", es: "Escuela de conducción cooperativa", de: "Kooperative Fahrschule", nl: "Coöperatieve rijschool" },
                { en: "Perceiving cooperation", es: "Percibir cooperación", de: "Kooperation wahrnehmen", nl: "Samenwerking waarnemen" },
                { en: "Group perception test", es: "Prueba de percepción grupal", de: "Gruppenwahrnehmungstest", nl: "Groepsperceptie test" }
            ],
            correct: 0,
            explanation: {
                en: "Cooperative perception extends sensing range by sharing data about obstacles and road conditions between vehicles.",
                es: "La percepción cooperativa extiende el rango de detección compartiendo datos sobre obstáculos entre vehículos.",
                de: "Kooperative Wahrnehmung erweitert Erfassungsbereich durch Datenaustausch über Hindernisse zwischen Fahrzeugen.",
                nl: "Coöperatieve perceptie breidt detectiebereik uit door data over obstakels te delen tussen voertuigen."
            }
        },
        {
            question: {
                en: "What is dynamic object tracking in autonomous vehicles?",
                es: "¿Qué es el seguimiento de objetos dinámicos en vehículos autónomos?",
                de: "Was ist dynamische Objektverfolgung in autonomen Fahrzeugen?",
                nl: "Wat is dynamische objecttracking in autonome voertuigen?"
            },
            options: [
                { en: "Following moving objects across frames", es: "Seguir objetos en movimiento a través de cuadros", de: "Bewegte Objekte über Frames verfolgen", nl: "Bewegende objecten volgen over frames" },
                { en: "Dynamic pricing tracking", es: "Seguimiento de precios dinámicos", de: "Dynamische Preisverfolgung", nl: "Dynamische prijs tracking" },
                { en: "Tracking packages", es: "Rastreo de paquetes", de: "Paketverfolgung", nl: "Pakket tracking" },
                { en: "Music track dynamics", es: "Dinámica de pistas musicales", de: "Musikspur-Dynamik", nl: "Muziektrack dynamiek" }
            ],
            correct: 0,
            explanation: {
                en: "Dynamic tracking maintains consistent identities of vehicles and pedestrians across time for prediction.",
                es: "El seguimiento dinámico mantiene identidades consistentes de vehículos y peatones para predicción.",
                de: "Dynamische Verfolgung erhält konsistente Identitäten von Fahrzeugen und Fußgängern für Vorhersage.",
                nl: "Dynamische tracking houdt consistente identiteiten van voertuigen en voetgangers voor voorspelling."
            }
        },
        {
            question: {
                en: "How does simulation-to-real transfer work?",
                es: "¿Cómo funciona la transferencia de simulación a realidad?",
                de: "Wie funktioniert der Transfer von Simulation zu Realität?",
                nl: "Hoe werkt simulatie-naar-werkelijkheid transfer?"
            },
            options: [
                { en: "Domain adaptation from virtual to physical", es: "Adaptación de dominio de virtual a físico", de: "Domänenanpassung von virtuell zu physisch", nl: "Domeinaanpassing van virtueel naar fysiek" },
                { en: "Transferring simulator software", es: "Transferir software de simulador", de: "Simulator-Software übertragen", nl: "Simulator software overdragen" },
                { en: "Real estate transfer", es: "Transferencia de bienes raíces", de: "Immobilientransfer", nl: "Onroerend goed overdracht" },
                { en: "Reality TV simulation", es: "Simulación de reality TV", de: "Reality-TV-Simulation", nl: "Reality TV simulatie" }
            ],
            correct: 0,
            explanation: {
                en: "Sim-to-real uses domain randomization and adaptation to transfer policies learned in simulation to real vehicles.",
                es: "Sim-to-real usa aleatorización de dominio para transferir políticas aprendidas en simulación a vehículos reales.",
                de: "Sim-to-Real nutzt Domänen-Randomisierung zum Transfer von Simulationsstrategien auf reale Fahrzeuge.",
                nl: "Sim-to-real gebruikt domein randomisatie om beleid uit simulatie naar echte voertuigen over te dragen."
            }
        },
        {
            question: {
                en: "What is hierarchical planning in autonomous navigation?",
                es: "¿Qué es la planificación jerárquica en navegación autónoma?",
                de: "Was ist hierarchische Planung in autonomer Navigation?",
                nl: "Wat is hiërarchische planning in autonome navigatie?"
            },
            options: [
                { en: "Multi-level planning from route to control", es: "Planificación multinivel de ruta a control", de: "Mehrstufige Planung von Route zu Steuerung", nl: "Multi-niveau planning van route tot controle" },
                { en: "Corporate hierarchy planning", es: "Planificación de jerarquía corporativa", de: "Unternehmenshierarchie-Planung", nl: "Bedrijfshiërarchie planning" },
                { en: "Hierarchical databases", es: "Bases de datos jerárquicas", de: "Hierarchische Datenbanken", nl: "Hiërarchische databases" },
                { en: "Planning hierarchy charts", es: "Planificar gráficos de jerarquía", de: "Hierarchiediagramme planen", nl: "Hiërarchie grafieken plannen" }
            ],
            correct: 0,
            explanation: {
                en: "Hierarchical planning decomposes navigation into strategic route, tactical maneuver, and operational control levels.",
                es: "La planificación jerárquica descompone navegación en niveles de ruta estratégica, maniobra táctica y control.",
                de: "Hierarchische Planung zerlegt Navigation in strategische Route, taktische Manöver und operative Steuerung.",
                nl: "Hiërarchische planning splitst navigatie op in strategische route, tactische manoeuvres en operationele controle."
            }
        },
        {
            question: {
                en: "What is imitation learning in autonomous driving?",
                es: "¿Qué es el aprendizaje por imitación en conducción autónoma?",
                de: "Was ist Imitationslernen beim autonomen Fahren?",
                nl: "Wat is imitatie leren bij autonoom rijden?"
            },
            options: [
                { en: "Learning from human driving demonstrations", es: "Aprender de demostraciones de conducción humana", de: "Lernen aus menschlichen Fahrvorführungen", nl: "Leren van menselijke rijdemonstraties" },
                { en: "Imitating car sounds", es: "Imitar sonidos de autos", de: "Autogeräusche imitieren", nl: "Auto geluiden imiteren" },
                { en: "Copying car designs", es: "Copiar diseños de autos", de: "Autodesigns kopieren", nl: "Auto ontwerpen kopiëren" },
                { en: "Mimicking animals", es: "Imitar animales", de: "Tiere nachahmen", nl: "Dieren nabootsen" }
            ],
            correct: 0,
            explanation: {
                en: "Imitation learning trains AI to replicate expert human driving behavior from recorded demonstrations.",
                es: "El aprendizaje por imitación entrena IA para replicar comportamiento experto de conducción humana.",
                de: "Imitationslernen trainiert KI zur Replikation von Experten-Fahrverhalten aus Aufzeichnungen.",
                nl: "Imitatie leren traint AI om expert menselijk rijgedrag te repliceren uit opgenomen demonstraties."
            }
        },
        {
            question: {
                en: "How does sparse convolution help LIDAR processing?",
                es: "¿Cómo ayuda la convolución dispersa al procesamiento LIDAR?",
                de: "Wie hilft dünnbesetzte Faltung bei der LIDAR-Verarbeitung?",
                nl: "Hoe helpt sparse convolutie bij LIDAR verwerking?"
            },
            options: [
                { en: "Efficiently processes 3D point clouds", es: "Procesa eficientemente nubes de puntos 3D", de: "Verarbeitet effizient 3D-Punktwolken", nl: "Verwerkt efficiënt 3D puntenwolken" },
                { en: "Sparse traffic conditions", es: "Condiciones de tráfico escaso", de: "Spärliche Verkehrsbedingungen", nl: "Schaarse verkeersomstandigheden" },
                { en: "Convolution of ideas", es: "Convolución de ideas", de: "Ideenfaltung", nl: "Convolutie van ideeën" },
                { en: "Sparse matrix math", es: "Matemáticas de matriz dispersa", de: "Dünnbesetzte Matrix-Mathematik", nl: "Sparse matrix wiskunde" }
            ],
            correct: 0,
            explanation: {
                en: "Sparse convolution only computes on occupied voxels, reducing computation for LIDAR's sparse 3D data.",
                es: "La convolución dispersa solo computa en vóxeles ocupados, reduciendo cómputo para datos 3D dispersos.",
                de: "Dünnbesetzte Faltung berechnet nur belegte Voxel, reduziert Berechnung für LIDARs dünnbesetzte Daten.",
                nl: "Sparse convolutie berekent alleen bezette voxels, vermindert berekening voor LIDAR's sparse 3D data."
            }
        },
        {
            question: {
                en: "What is cost-to-go estimation in path planning?",
                es: "¿Qué es la estimación de costo restante en planificación de rutas?",
                de: "Was ist Cost-to-Go-Schätzung in der Pfadplanung?",
                nl: "Wat is cost-to-go schatting in padplanning?"
            },
            options: [
                { en: "Heuristic estimate of remaining path cost", es: "Estimación heurística del costo de ruta restante", de: "Heuristische Schätzung der verbleibenden Pfadkosten", nl: "Heuristische schatting van resterende padkosten" },
                { en: "Cost of takeout food", es: "Costo de comida para llevar", de: "Kosten für Essen zum Mitnehmen", nl: "Kosten van afhaaleten" },
                { en: "Going cost calculation", es: "Cálculo de costo de ida", de: "Gehende Kostenberechnung", nl: "Gaande kosten berekening" },
                { en: "Travel expense estimate", es: "Estimación de gastos de viaje", de: "Reisekostenschätzung", nl: "Reiskosten schatting" }
            ],
            correct: 0,
            explanation: {
                en: "Cost-to-go provides admissible heuristics for A* and other search algorithms to find optimal paths efficiently.",
                es: "Cost-to-go proporciona heurísticas admisibles para A* y otros algoritmos para encontrar rutas óptimas.",
                de: "Cost-to-Go liefert zulässige Heuristiken für A* und andere Suchalgorithmen für optimale Pfade.",
                nl: "Cost-to-go levert toelaatbare heuristieken voor A* en andere zoekalgoritmen voor optimale paden."
            }
        },
        {
            question: {
                en: "What is receding horizon control?",
                es: "¿Qué es el control de horizonte móvil?",
                de: "Was ist gleitende Horizontregelung?",
                nl: "Wat is receding horizon control?"
            },
            options: [
                { en: "Replanning at each time step", es: "Replanificar en cada paso de tiempo", de: "Neuplanung bei jedem Zeitschritt", nl: "Herplannen bij elke tijdstap" },
                { en: "Horizon getting farther", es: "Horizonte alejándose", de: "Horizont wird ferner", nl: "Horizon wordt verder" },
                { en: "Receding hairline", es: "Línea de cabello retrocediendo", de: "Zurückweichender Haaransatz", nl: "Terugwijkende haarlijn" },
                { en: "Sunset horizon", es: "Horizonte del atardecer", de: "Sonnenuntergangshorizont", nl: "Zonsondergang horizon" }
            ],
            correct: 0,
            explanation: {
                en: "RHC optimizes control over a moving time window, applying only first actions before replanning.",
                es: "RHC optimiza control sobre una ventana de tiempo móvil, aplicando solo primeras acciones antes de replanificar.",
                de: "RHC optimiert Steuerung über bewegtes Zeitfenster, wendet nur erste Aktionen vor Neuplanung an.",
                nl: "RHC optimaliseert controle over bewegend tijdvenster, past alleen eerste acties toe voor herplanning."
            }
        },
        {
            question: {
                en: "How does active learning improve data efficiency?",
                es: "¿Cómo mejora el aprendizaje activo la eficiencia de datos?",
                de: "Wie verbessert aktives Lernen die Dateneffizienz?",
                nl: "Hoe verbetert actief leren data-efficiëntie?"
            },
            options: [
                { en: "Selects most informative examples for labeling", es: "Selecciona ejemplos más informativos para etiquetar", de: "Wählt informativste Beispiele zum Labeln", nl: "Selecteert meest informatieve voorbeelden voor labeling" },
                { en: "Active physical exercise", es: "Ejercicio físico activo", de: "Aktive körperliche Übung", nl: "Actieve fysieke oefening" },
                { en: "Learning while moving", es: "Aprender mientras se mueve", de: "Lernen während Bewegung", nl: "Leren tijdens bewegen" },
                { en: "Active voice grammar", es: "Gramática de voz activa", de: "Aktive Stimme Grammatik", nl: "Actieve stem grammatica" }
            ],
            correct: 0,
            explanation: {
                en: "Active learning queries uncertain cases for human annotation, reducing labeled data requirements.",
                es: "El aprendizaje activo consulta casos inciertos para anotación humana, reduciendo requisitos de datos.",
                de: "Aktives Lernen fragt unsichere Fälle für menschliche Annotation ab, reduziert Datenanforderungen.",
                nl: "Actief leren vraagt onzekere gevallen voor menselijke annotatie, vermindert datalabel vereisten."
            }
        },
        {
            question: {
                en: "What is scene flow estimation?",
                es: "¿Qué es la estimación de flujo de escena?",
                de: "Was ist Szenenfluss-Schätzung?",
                nl: "Wat is scene flow schatting?"
            },
            options: [
                { en: "3D motion field of all points", es: "Campo de movimiento 3D de todos los puntos", de: "3D-Bewegungsfeld aller Punkte", nl: "3D bewegingsveld van alle punten" },
                { en: "Theater scene changes", es: "Cambios de escena teatral", de: "Theaterszenenwechsel", nl: "Theater scène wisselingen" },
                { en: "Water flow in scenes", es: "Flujo de agua en escenas", de: "Wasserfluss in Szenen", nl: "Waterstroom in scènes" },
                { en: "Scene transition flow", es: "Flujo de transición de escena", de: "Szenenübergangsfluss", nl: "Scène overgang stroom" }
            ],
            correct: 0,
            explanation: {
                en: "Scene flow estimates 3D motion vectors for every point in the environment for dynamic scene understanding.",
                es: "El flujo de escena estima vectores de movimiento 3D para cada punto para comprensión dinámica.",
                de: "Szenenfluss schätzt 3D-Bewegungsvektoren für jeden Punkt für dynamisches Szenenverständnis.",
                nl: "Scene flow schat 3D bewegingsvectoren voor elk punt voor dynamisch scènebegrip."
            }
        },
        {
            question: {
                en: "What is curriculum learning in autonomous systems?",
                es: "¿Qué es el aprendizaje curricular en sistemas autónomos?",
                de: "Was ist Curriculum-Lernen in autonomen Systemen?",
                nl: "Wat is curriculum leren in autonome systemen?"
            },
            options: [
                { en: "Training from simple to complex scenarios", es: "Entrenar de escenarios simples a complejos", de: "Training von einfachen zu komplexen Szenarien", nl: "Trainen van simpele naar complexe scenario's" },
                { en: "School curriculum", es: "Currículo escolar", de: "Schulcurriculum", nl: "School curriculum" },
                { en: "Learning courses", es: "Cursos de aprendizaje", de: "Lernkurse", nl: "Leercursussen" },
                { en: "Curriculum vitae", es: "Currículum vitae", de: "Lebenslauf", nl: "Curriculum vitae" }
            ],
            correct: 0,
            explanation: {
                en: "Curriculum learning gradually increases task difficulty, improving convergence and final performance.",
                es: "El aprendizaje curricular aumenta gradualmente la dificultad, mejorando convergencia y rendimiento.",
                de: "Curriculum-Lernen erhöht schrittweise Aufgabenschwierigkeit für bessere Konvergenz.",
                nl: "Curriculum leren verhoogt geleidelijk taakmoeilijkheid voor betere convergentie en prestaties."
            }
        },
        {
            question: {
                en: "How does meta-learning help autonomous driving?",
                es: "¿Cómo ayuda el meta-aprendizaje a la conducción autónoma?",
                de: "Wie hilft Meta-Learning beim autonomen Fahren?",
                nl: "Hoe helpt meta-leren bij autonoom rijden?"
            },
            options: [
                { en: "Learning to learn new driving tasks quickly", es: "Aprender a aprender nuevas tareas de conducción rápidamente", de: "Lernen, neue Fahraufgaben schnell zu lernen", nl: "Leren om nieuwe rijtaken snel te leren" },
                { en: "Learning about metadata", es: "Aprender sobre metadatos", de: "Über Metadaten lernen", nl: "Leren over metadata" },
                { en: "Facebook Meta learning", es: "Aprendizaje de Meta de Facebook", de: "Facebook Meta Lernen", nl: "Facebook Meta leren" },
                { en: "Metaphysical learning", es: "Aprendizaje metafísico", de: "Metaphysisches Lernen", nl: "Metafysisch leren" }
            ],
            correct: 0,
            explanation: {
                en: "Meta-learning enables quick adaptation to new environments and driving conditions with minimal data.",
                es: "El meta-aprendizaje permite adaptación rápida a nuevos entornos con datos mínimos.",
                de: "Meta-Learning ermöglicht schnelle Anpassung an neue Umgebungen mit minimalen Daten.",
                nl: "Meta-leren maakt snelle aanpassing aan nieuwe omgevingen mogelijk met minimale data."
            }
        },
        {
            question: {
                en: "What is differentiable rendering in autonomous vision?",
                es: "¿Qué es el renderizado diferenciable en visión autónoma?",
                de: "Was ist differenzierbares Rendering in autonomer Vision?",
                nl: "Wat is differentieerbare rendering in autonome visie?"
            },
            options: [
                { en: "Gradient-based optimization of 3D representations", es: "Optimización basada en gradientes de representaciones 3D", de: "Gradientenbasierte Optimierung von 3D-Darstellungen", nl: "Gradiënt-gebaseerde optimalisatie van 3D representaties" },
                { en: "Different rendering styles", es: "Diferentes estilos de renderizado", de: "Verschiedene Rendering-Stile", nl: "Verschillende rendering stijlen" },
                { en: "Differential equations", es: "Ecuaciones diferenciales", de: "Differentialgleichungen", nl: "Differentiaalvergelijkingen" },
                { en: "Rendering differences", es: "Diferencias de renderizado", de: "Rendering-Unterschiede", nl: "Rendering verschillen" }
            ],
            correct: 0,
            explanation: {
                en: "Differentiable rendering enables learning 3D scene representations from 2D images through backpropagation.",
                es: "El renderizado diferenciable permite aprender representaciones 3D desde imágenes 2D mediante retropropagación.",
                de: "Differenzierbares Rendering ermöglicht Lernen von 3D-Szenen aus 2D-Bildern durch Backpropagation.",
                nl: "Differentieerbare rendering maakt leren van 3D scènes uit 2D beelden mogelijk via backpropagation."
            }
        },
        {
            question: {
                en: "What is online trajectory optimization?",
                es: "¿Qué es la optimización de trayectoria en línea?",
                de: "Was ist Online-Trajektorienoptimierung?",
                nl: "Wat is online traject optimalisatie?"
            },
            options: [
                { en: "Real-time path adjustment during execution", es: "Ajuste de ruta en tiempo real durante ejecución", de: "Echtzeit-Pfadanpassung während Ausführung", nl: "Real-time pad aanpassing tijdens uitvoering" },
                { en: "Online course trajectory", es: "Trayectoria de curso en línea", de: "Online-Kurs-Trajektorie", nl: "Online cursus traject" },
                { en: "Internet optimization", es: "Optimización de internet", de: "Internet-Optimierung", nl: "Internet optimalisatie" },
                { en: "Online shopping path", es: "Ruta de compras en línea", de: "Online-Shopping-Pfad", nl: "Online shopping pad" }
            ],
            correct: 0,
            explanation: {
                en: "Online optimization continuously refines trajectories based on latest sensor data and predictions.",
                es: "La optimización en línea refina continuamente trayectorias basándose en datos de sensores más recientes.",
                de: "Online-Optimierung verfeinert kontinuierlich Trajektorien basierend auf neuesten Sensordaten.",
                nl: "Online optimalisatie verfijnt continu trajecten gebaseerd op laatste sensordata."
            }
        },
        {
            question: {
                en: "How does transformer architecture help autonomous driving?",
                es: "¿Cómo ayuda la arquitectura transformer a la conducción autónoma?",
                de: "Wie hilft Transformer-Architektur beim autonomen Fahren?",
                nl: "Hoe helpt transformer architectuur bij autonoom rijden?"
            },
            options: [
                { en: "Captures long-range dependencies in sequences", es: "Captura dependencias de largo alcance en secuencias", de: "Erfasst langreichweitige Abhängigkeiten in Sequenzen", nl: "Vangt lange-afstand afhankelijkheden in sequenties" },
                { en: "Transforms electricity", es: "Transforma electricidad", de: "Transformiert Elektrizität", nl: "Transformeert elektriciteit" },
                { en: "Robot transformers", es: "Transformers robots", de: "Roboter-Transformer", nl: "Robot transformers" },
                { en: "Car transformation", es: "Transformación de autos", de: "Auto-Transformation", nl: "Auto transformatie" }
            ],
            correct: 0,
            explanation: {
                en: "Transformers process temporal sequences and spatial relationships for trajectory prediction and planning.",
                es: "Los transformers procesan secuencias temporales y relaciones espaciales para predicción de trayectorias.",
                de: "Transformer verarbeiten zeitliche Sequenzen und räumliche Beziehungen für Trajektorienvorhersage.",
                nl: "Transformers verwerken temporele sequenties en ruimtelijke relaties voor trajectvoorspelling."
            }
        },
        {
            question: {
                en: "What is Gaussian process regression in vehicle dynamics?",
                es: "¿Qué es la regresión de procesos gaussianos en dinámica vehicular?",
                de: "Was ist Gauß-Prozess-Regression in der Fahrzeugdynamik?",
                nl: "Wat is Gaussische proces regressie in voertuigdynamiek?"
            },
            options: [
                { en: "Non-parametric modeling of uncertain dynamics", es: "Modelado no paramétrico de dinámica incierta", de: "Nicht-parametrische Modellierung unsicherer Dynamik", nl: "Niet-parametrische modellering van onzekere dynamiek" },
                { en: "Gaussian distribution", es: "Distribución gaussiana", de: "Gaußsche Verteilung", nl: "Gaussische verdeling" },
                { en: "Process regression testing", es: "Pruebas de regresión de procesos", de: "Prozess-Regressionstests", nl: "Proces regressie testen" },
                { en: "Gas process regression", es: "Regresión de proceso de gas", de: "Gasprozess-Regression", nl: "Gas proces regressie" }
            ],
            correct: 0,
            explanation: {
                en: "GP regression provides uncertainty-aware predictions of vehicle behavior for robust control.",
                es: "La regresión GP proporciona predicciones con incertidumbre del comportamiento vehicular para control robusto.",
                de: "GP-Regression liefert unsicherheitsbewusste Vorhersagen des Fahrzeugverhaltens für robuste Steuerung.",
                nl: "GP regressie levert onzekerheidsbewuste voorspellingen van voertuiggedrag voor robuuste controle."
            }
        },
        {
            question: {
                en: "What is belief space planning?",
                es: "¿Qué es la planificación en espacio de creencias?",
                de: "Was ist Glaubensraumplanung?",
                nl: "Wat is belief space planning?"
            },
            options: [
                { en: "Planning under uncertainty using probability distributions", es: "Planificación bajo incertidumbre usando distribuciones de probabilidad", de: "Planung unter Unsicherheit mit Wahrscheinlichkeitsverteilungen", nl: "Planning onder onzekerheid met waarschijnlijkheidsverdelingen" },
                { en: "Religious belief planning", es: "Planificación de creencias religiosas", de: "Religiöse Glaubensplanung", nl: "Religieuze geloof planning" },
                { en: "Space mission planning", es: "Planificación de misiones espaciales", de: "Weltraummissionsplanung", nl: "Ruimtemissie planning" },
                { en: "Believing in plans", es: "Creer en planes", de: "An Pläne glauben", nl: "Geloven in plannen" }
            ],
            correct: 0,
            explanation: {
                en: "Belief space planning reasons over probability distributions of states rather than single state estimates.",
                es: "La planificación en espacio de creencias razona sobre distribuciones de probabilidad de estados.",
                de: "Glaubensraumplanung arbeitet mit Wahrscheinlichkeitsverteilungen von Zuständen.",
                nl: "Belief space planning redeneert over waarschijnlijkheidsverdelingen van toestanden."
            }
        },
        {
            question: {
                en: "How does contrastive learning improve perception?",
                es: "¿Cómo mejora el aprendizaje contrastivo la percepción?",
                de: "Wie verbessert kontrastives Lernen die Wahrnehmung?",
                nl: "Hoe verbetert contrastief leren perceptie?"
            },
            options: [
                { en: "Learns representations by comparing similar and different examples", es: "Aprende representaciones comparando ejemplos similares y diferentes", de: "Lernt Darstellungen durch Vergleich ähnlicher und verschiedener Beispiele", nl: "Leert representaties door vergelijken van gelijke en verschillende voorbeelden" },
                { en: "High contrast images", es: "Imágenes de alto contraste", de: "Hochkontrastbilder", nl: "Hoog contrast beelden" },
                { en: "Contrasting opinions", es: "Opiniones contrastantes", de: "Kontrastierende Meinungen", nl: "Contrasterende meningen" },
                { en: "Color contrast", es: "Contraste de color", de: "Farbkontrast", nl: "Kleurcontrast" }
            ],
            correct: 0,
            explanation: {
                en: "Contrastive learning creates robust features by maximizing similarity between augmented views of same objects.",
                es: "El aprendizaje contrastivo crea características robustas maximizando similitud entre vistas del mismo objeto.",
                de: "Kontrastives Lernen erzeugt robuste Merkmale durch Maximierung der Ähnlichkeit augmentierter Ansichten.",
                nl: "Contrastief leren creëert robuuste features door gelijkenis tussen augmented views te maximaliseren."
            }
        },
        {
            question: {
                en: "What is zero-shot learning in traffic sign recognition?",
                es: "¿Qué es el aprendizaje sin ejemplos en reconocimiento de señales?",
                de: "Was ist Zero-Shot-Learning bei Verkehrszeichenerkennung?",
                nl: "Wat is zero-shot learning bij verkeersbord herkenning?"
            },
            options: [
                { en: "Recognizing new sign types without training examples", es: "Reconocer nuevos tipos de señales sin ejemplos de entrenamiento", de: "Neue Schildertypen ohne Trainingsbeispiele erkennen", nl: "Nieuwe bordtypes herkennen zonder trainingsvoorbeelden" },
                { en: "Zero visibility shots", es: "Disparos de visibilidad cero", de: "Null-Sichtbarkeits-Aufnahmen", nl: "Nul zichtbaarheid shots" },
                { en: "No shooting signs", es: "Señales de no disparar", de: "Keine-Schießen-Schilder", nl: "Niet schieten borden" },
                { en: "Zero speed zones", es: "Zonas de velocidad cero", de: "Null-Geschwindigkeitszonen", nl: "Nul snelheid zones" }
            ],
            correct: 0,
            explanation: {
                en: "Zero-shot learning uses semantic descriptions to recognize previously unseen traffic sign categories.",
                es: "El aprendizaje sin ejemplos usa descripciones semánticas para reconocer categorías de señales no vistas.",
                de: "Zero-Shot-Learning nutzt semantische Beschreibungen zur Erkennung ungesehener Schilderkategorien.",
                nl: "Zero-shot learning gebruikt semantische beschrijvingen om ongeziene bordcategorieën te herkennen."
            }
        },
        {
            question: {
                en: "What is distributed computing in autonomous fleets?",
                es: "¿Qué es la computación distribuida en flotas autónomas?",
                de: "Was ist verteiltes Rechnen in autonomen Flotten?",
                nl: "Wat is gedistribueerd rekenen in autonome vloten?"
            },
            options: [
                { en: "Sharing computational tasks across multiple vehicles", es: "Compartir tareas computacionales entre múltiples vehículos", de: "Rechenaufgaben über mehrere Fahrzeuge verteilen", nl: "Computationele taken delen over meerdere voertuigen" },
                { en: "Distributing vehicles", es: "Distribuir vehículos", de: "Fahrzeuge verteilen", nl: "Voertuigen distribueren" },
                { en: "Computer distribution", es: "Distribución de computadoras", de: "Computerverteilung", nl: "Computer distributie" },
                { en: "Fleet management software", es: "Software de gestión de flotas", de: "Flottenmanagement-Software", nl: "Vlootbeheer software" }
            ],
            correct: 0,
            explanation: {
                en: "Distributed computing enables fleet-wide learning and complex computations by pooling vehicle resources.",
                es: "La computación distribuida permite aprendizaje de flota y cómputos complejos agrupando recursos.",
                de: "Verteiltes Rechnen ermöglicht flottenweites Lernen durch Bündelung von Fahrzeugressourcen.",
                nl: "Gedistribueerd rekenen maakt vloot-breed leren mogelijk door voertuigbronnen te bundelen."
            }
        },
        {
            question: {
                en: "How does neuro-symbolic AI enhance autonomous reasoning?",
                es: "¿Cómo mejora la IA neuro-simbólica el razonamiento autónomo?",
                de: "Wie verbessert neuro-symbolische KI autonomes Reasoning?",
                nl: "Hoe verbetert neuro-symbolische AI autonoom redeneren?"
            },
            options: [
                { en: "Combines neural networks with logical reasoning", es: "Combina redes neuronales con razonamiento lógico", de: "Kombiniert neuronale Netze mit logischem Reasoning", nl: "Combineert neurale netwerken met logisch redeneren" },
                { en: "Brain symbols", es: "Símbolos cerebrales", de: "Gehirnsymbole", nl: "Hersen symbolen" },
                { en: "Neurological testing", es: "Pruebas neurológicas", de: "Neurologische Tests", nl: "Neurologische testen" },
                { en: "Symbolic gestures", es: "Gestos simbólicos", de: "Symbolische Gesten", nl: "Symbolische gebaren" }
            ],
            correct: 0,
            explanation: {
                en: "Neuro-symbolic AI integrates deep learning perception with symbolic reasoning for interpretable decisions.",
                es: "La IA neuro-simbólica integra percepción de aprendizaje profundo con razonamiento simbólico.",
                de: "Neuro-symbolische KI integriert Deep Learning mit symbolischem Reasoning für interpretierbare Entscheidungen.",
                nl: "Neuro-symbolische AI integreert deep learning perceptie met symbolisch redeneren voor interpreteerbare beslissingen."
            }
        },
        {
            question: {
                en: "What is causal inference in accident prediction?",
                es: "¿Qué es la inferencia causal en predicción de accidentes?",
                de: "Was ist kausale Inferenz bei der Unfallvorhersage?",
                nl: "Wat is causale inferentie bij ongevalvoorspelling?"
            },
            options: [
                { en: "Understanding cause-effect relationships in crashes", es: "Entender relaciones causa-efecto en choques", de: "Ursache-Wirkung-Beziehungen bei Unfällen verstehen", nl: "Oorzaak-gevolg relaties begrijpen bij ongelukken" },
                { en: "Casual predictions", es: "Predicciones casuales", de: "Beiläufige Vorhersagen", nl: "Terloopse voorspellingen" },
                { en: "Causing accidents", es: "Causar accidentes", de: "Unfälle verursachen", nl: "Ongevallen veroorzaken" },
                { en: "Inference engines", es: "Motores de inferencia", de: "Inferenzmaschinen", nl: "Inferentie motoren" }
            ],
            correct: 0,
            explanation: {
                en: "Causal inference identifies true risk factors rather than correlations for better accident prevention.",
                es: "La inferencia causal identifica factores de riesgo verdaderos en lugar de correlaciones para prevención.",
                de: "Kausale Inferenz identifiziert wahre Risikofaktoren statt Korrelationen für bessere Unfallverhütung.",
                nl: "Causale inferentie identificeert echte risicofactoren in plaats van correlaties voor betere ongevalpreventie."
            }
        },
        {
            question: {
                en: "What is physics-informed neural networks in vehicle control?",
                es: "¿Qué son las redes neuronales informadas por física en control vehicular?",
                de: "Was sind physik-informierte neuronale Netze in der Fahrzeugsteuerung?",
                nl: "Wat zijn physics-informed neural networks in voertuigcontrole?"
            },
            options: [
                { en: "Neural networks constrained by physical laws", es: "Redes neuronales restringidas por leyes físicas", de: "Neuronale Netze beschränkt durch physikalische Gesetze", nl: "Neurale netwerken beperkt door natuurkundige wetten" },
                { en: "Physics teacher networks", es: "Redes de profesores de física", de: "Physiklehrer-Netzwerke", nl: "Natuurkunde leraar netwerken" },
                { en: "Information physics", es: "Física de la información", de: "Informationsphysik", nl: "Informatie natuurkunde" },
                { en: "Neural physics", es: "Física neural", de: "Neurale Physik", nl: "Neurale fysica" }
            ],
            correct: 0,
            explanation: {
                en: "PINNs incorporate vehicle dynamics equations into neural network training for physically consistent predictions.",
                es: "Las PINN incorporan ecuaciones de dinámica vehicular en entrenamiento para predicciones físicamente consistentes.",
                de: "PINNs integrieren Fahrzeugdynamik-Gleichungen ins Training für physikalisch konsistente Vorhersagen.",
                nl: "PINN's integreren voertuigdynamica vergelijkingen in training voor fysisch consistente voorspellingen."
            }
        },
        {
            question: {
                en: "How does evolutionary algorithms optimize traffic systems?",
                es: "¿Cómo optimizan los algoritmos evolutivos los sistemas de tráfico?",
                de: "Wie optimieren evolutionäre Algorithmen Verkehrssysteme?",
                nl: "Hoe optimaliseren evolutionaire algoritmen verkeerssystemen?"
            },
            options: [
                { en: "Population-based search for optimal configurations", es: "Búsqueda basada en población para configuraciones óptimas", de: "Populationsbasierte Suche nach optimalen Konfigurationen", nl: "Populatie-gebaseerd zoeken naar optimale configuraties" },
                { en: "Evolution of traffic", es: "Evolución del tráfico", de: "Verkehrsentwicklung", nl: "Evolutie van verkeer" },
                { en: "Darwin's theory", es: "Teoría de Darwin", de: "Darwins Theorie", nl: "Darwin's theorie" },
                { en: "Revolutionary algorithms", es: "Algoritmos revolucionarios", de: "Revolutionäre Algorithmen", nl: "Revolutionaire algoritmen" }
            ],
            correct: 0,
            explanation: {
                en: "Evolutionary algorithms evolve populations of solutions through selection and mutation for traffic optimization.",
                es: "Los algoritmos evolutivos evolucionan poblaciones de soluciones mediante selección y mutación.",
                de: "Evolutionäre Algorithmen entwickeln Lösungspopulationen durch Selektion und Mutation.",
                nl: "Evolutionaire algoritmen evolueren populaties van oplossingen door selectie en mutatie."
            }
        },
        {
            question: {
                en: "What is multi-task learning in autonomous perception?",
                es: "¿Qué es el aprendizaje multitarea en percepción autónoma?",
                de: "Was ist Multi-Task-Learning in autonomer Wahrnehmung?",
                nl: "Wat is multi-task learning in autonome perceptie?"
            },
            options: [
                { en: "Single network for detection, segmentation, and depth", es: "Red única para detección, segmentación y profundidad", de: "Ein Netzwerk für Detektion, Segmentierung und Tiefe", nl: "Enkel netwerk voor detectie, segmentatie en diepte" },
                { en: "Multiple driving tasks", es: "Múltiples tareas de conducción", de: "Mehrere Fahraufgaben", nl: "Meerdere rijtaken" },
                { en: "Task management", es: "Gestión de tareas", de: "Aufgabenverwaltung", nl: "Taakbeheer" },
                { en: "Multitasking while driving", es: "Multitarea mientras conduce", de: "Multitasking beim Fahren", nl: "Multitasken tijdens rijden" }
            ],
            correct: 0,
            explanation: {
                en: "Multi-task learning trains one model to perform multiple perception tasks, sharing representations efficiently.",
                es: "El aprendizaje multitarea entrena un modelo para múltiples tareas de percepción compartiendo representaciones.",
                de: "Multi-Task-Learning trainiert ein Modell für mehrere Wahrnehmungsaufgaben mit geteilten Darstellungen.",
                nl: "Multi-task learning traint één model voor meerdere perceptietaken, deelt representaties efficiënt."
            }
        },
        {
            question: {
                en: "What is world models in autonomous driving?",
                es: "¿Qué son los modelos del mundo en conducción autónoma?",
                de: "Was sind Weltmodelle beim autonomen Fahren?",
                nl: "Wat zijn wereldmodellen in autonoom rijden?"
            },
            options: [
                { en: "Internal representations for planning in imagination", es: "Representaciones internas para planificar en imaginación", de: "Interne Darstellungen zur Planung in Imagination", nl: "Interne representaties voor planning in verbeelding" },
                { en: "Global car models", es: "Modelos de autos globales", de: "Globale Automodelle", nl: "Wereldwijde automodellen" },
                { en: "World maps", es: "Mapas del mundo", de: "Weltkarten", nl: "Wereldkaarten" },
                { en: "Fashion models worldwide", es: "Modelos de moda mundiales", de: "Weltweite Modemodelle", nl: "Wereldwijde modemodellen" }
            ],
            correct: 0,
            explanation: {
                en: "World models learn environment dynamics enabling vehicles to simulate and plan actions mentally before execution.",
                es: "Los modelos del mundo aprenden dinámica del entorno permitiendo simular y planificar acciones mentalmente.",
                de: "Weltmodelle lernen Umgebungsdynamik für mentale Simulation und Planung vor Ausführung.",
                nl: "Wereldmodellen leren omgevingsdynamiek voor mentale simulatie en planning voor uitvoering."
            }
        },
        {
            question: {
                en: "How does self-supervised learning reduce labeling costs?",
                es: "¿Cómo reduce el aprendizaje auto-supervisado los costos de etiquetado?",
                de: "Wie reduziert selbstüberwachtes Lernen Etikettierungskosten?",
                nl: "Hoe vermindert self-supervised learning labelkosten?"
            },
            options: [
                { en: "Learns from unlabeled data using pretext tasks", es: "Aprende de datos sin etiquetar usando tareas pretexto", de: "Lernt aus unbeschrifteten Daten mit Vorwandaufgaben", nl: "Leert van ongelabelde data met pretext taken" },
                { en: "Self-service labeling", es: "Etiquetado de autoservicio", de: "Selbstbedienungs-Etikettierung", nl: "Zelfbediening labeling" },
                { en: "Supervised by self", es: "Supervisado por uno mismo", de: "Selbst überwacht", nl: "Zelf gesuperviseerd" },
                { en: "Learning supervision", es: "Aprender supervisión", de: "Aufsicht lernen", nl: "Toezicht leren" }
            ],
            correct: 0,
            explanation: {
                en: "Self-supervised learning creates supervision signals from data itself through rotation, masking, or temporal tasks.",
                es: "El aprendizaje auto-supervisado crea señales de supervisión desde los datos mediante rotación o enmascaramiento.",
                de: "Selbstüberwachtes Lernen erzeugt Überwachungssignale aus Daten durch Rotation oder Maskierung.",
                nl: "Self-supervised learning creëert supervisiesignalen uit data zelf door rotatie, masking of temporele taken."
            }
        },
        {
            question: {
                en: "What is panoptic segmentation for scene understanding?",
                es: "¿Qué es la segmentación panóptica para comprensión de escena?",
                de: "Was ist panoptische Segmentierung für Szenenverständnis?",
                nl: "Wat is panoptische segmentatie voor scènebegrip?"
            },
            options: [
                { en: "Unified instance and semantic segmentation", es: "Segmentación de instancia y semántica unificada", de: "Vereinte Instanz- und semantische Segmentierung", nl: "Verenigde instance en semantische segmentatie" },
                { en: "Panoramic views", es: "Vistas panorámicas", de: "Panoramaansichten", nl: "Panoramische views" },
                { en: "Optical segmentation", es: "Segmentación óptica", de: "Optische Segmentierung", nl: "Optische segmentatie" },
                { en: "Pan and tilt cameras", es: "Cámaras pan y tilt", de: "Schwenk- und Neigekameras", nl: "Pan en tilt camera's" }
            ],
            correct: 0,
            explanation: {
                en: "Panoptic segmentation assigns every pixel a semantic label and instance ID for complete scene parsing.",
                es: "La segmentación panóptica asigna a cada píxel una etiqueta semántica e ID de instancia para análisis completo.",
                de: "Panoptische Segmentierung weist jedem Pixel ein semantisches Label und Instanz-ID für vollständiges Parsing zu.",
                nl: "Panoptische segmentatie wijst elke pixel een semantisch label en instance ID toe voor complete scène parsing."
            }
        },
        {
            question: {
                en: "What is domain randomization in sim-to-real transfer?",
                es: "¿Qué es la aleatorización de dominio en transferencia sim-a-real?",
                de: "Was ist Domänen-Randomisierung bei Sim-to-Real-Transfer?",
                nl: "Wat is domein randomisatie in sim-to-real transfer?"
            },
            options: [
                { en: "Varying simulation parameters for robust policies", es: "Variar parámetros de simulación para políticas robustas", de: "Simulationsparameter variieren für robuste Strategien", nl: "Variëren van simulatieparameters voor robuuste policies" },
                { en: "Random domain names", es: "Nombres de dominio aleatorios", de: "Zufällige Domainnamen", nl: "Willekeurige domeinnamen" },
                { en: "Domain registration", es: "Registro de dominio", de: "Domain-Registrierung", nl: "Domein registratie" },
                { en: "Randomizing websites", es: "Aleatorizar sitios web", de: "Websites randomisieren", nl: "Websites randomiseren" }
            ],
            correct: 0,
            explanation: {
                en: "Domain randomization trains on diverse simulated environments to generalize to real-world variation.",
                es: "La aleatorización de dominio entrena en entornos simulados diversos para generalizar a variación real.",
                de: "Domänen-Randomisierung trainiert in diversen simulierten Umgebungen für Generalisierung.",
                nl: "Domein randomisatie traint op diverse gesimuleerde omgevingen om te generaliseren naar echte variatie."
            }
        },
        {
            question: {
                en: "How does graph SLAM improve mapping accuracy?",
                es: "¿Cómo mejora graph SLAM la precisión del mapeo?",
                de: "Wie verbessert Graph-SLAM die Kartierungsgenauigkeit?",
                nl: "Hoe verbetert graph SLAM mapping nauwkeurigheid?"
            },
            options: [
                { en: "Optimizes pose graph with loop closures", es: "Optimiza grafo de poses con cierres de bucle", de: "Optimiert Pose-Graph mit Schleifenschlüssen", nl: "Optimaliseert pose graph met loop closures" },
                { en: "Drawing graph maps", es: "Dibujar mapas de grafos", de: "Graphkarten zeichnen", nl: "Graaf kaarten tekenen" },
                { en: "Slamming graphs", es: "Golpear grafos", de: "Graphen schlagen", nl: "Grafen slaan" },
                { en: "Graph theory", es: "Teoría de grafos", de: "Graphentheorie", nl: "Grafentheorie" }
            ],
            correct: 0,
            explanation: {
                en: "Graph SLAM represents robot trajectory as a graph, optimizing all poses simultaneously when detecting revisited locations.",
                es: "Graph SLAM representa la trayectoria como grafo, optimizando todas las poses al detectar lugares revisitados.",
                de: "Graph-SLAM stellt Trajektorie als Graph dar, optimiert alle Posen bei Wiedererkennung von Orten.",
                nl: "Graph SLAM representeert traject als graaf, optimaliseert alle poses bij herkenning van bezochte locaties."
            }
        },
        {
            question: {
                en: "What is Monte Carlo tree search in decision making?",
                es: "¿Qué es la búsqueda de árbol Monte Carlo en toma de decisiones?",
                de: "Was ist Monte-Carlo-Baumsuche bei Entscheidungsfindung?",
                nl: "Wat is Monte Carlo tree search in besluitvorming?"
            },
            options: [
                { en: "Explores decision trees using random simulations", es: "Explora árboles de decisión usando simulaciones aleatorias", de: "Erkundet Entscheidungsbäume mit Zufallssimulationen", nl: "Verkent beslissingsbomen met random simulaties" },
                { en: "Monte Carlo casino", es: "Casino Monte Carlo", de: "Monte Carlo Kasino", nl: "Monte Carlo casino" },
                { en: "Tree climbing search", es: "Búsqueda escalando árboles", de: "Baumklettersuche", nl: "Boom klimmen zoeken" },
                { en: "Mountain search", es: "Búsqueda de montaña", de: "Bergsuche", nl: "Berg zoeken" }
            ],
            correct: 0,
            explanation: {
                en: "MCTS balances exploration and exploitation to find optimal action sequences through simulated rollouts.",
                es: "MCTS balancea exploración y explotación para encontrar secuencias óptimas mediante simulaciones.",
                de: "MCTS balanciert Exploration und Exploitation für optimale Aktionssequenzen durch Simulationen.",
                nl: "MCTS balanceert exploratie en exploitatie om optimale actiesequenties te vinden door simulaties."
            }
        },
        {
            question: {
                en: "What is ensemble learning in autonomous perception?",
                es: "¿Qué es el aprendizaje conjunto en percepción autónoma?",
                de: "Was ist Ensemble-Learning in autonomer Wahrnehmung?",
                nl: "Wat is ensemble learning in autonome perceptie?"
            },
            options: [
                { en: "Combining multiple models for robust predictions", es: "Combinar múltiples modelos para predicciones robustas", de: "Mehrere Modelle für robuste Vorhersagen kombinieren", nl: "Combineren van meerdere modellen voor robuuste voorspellingen" },
                { en: "Musical ensemble", es: "Conjunto musical", de: "Musikalisches Ensemble", nl: "Muziek ensemble" },
                { en: "Fashion ensemble", es: "Conjunto de moda", de: "Mode-Ensemble", nl: "Mode ensemble" },
                { en: "Group learning", es: "Aprendizaje grupal", de: "Gruppenlernen", nl: "Groep leren" }
            ],
            correct: 0,
            explanation: {
                en: "Ensemble methods aggregate predictions from diverse models to reduce errors and increase reliability.",
                es: "Los métodos de conjunto agregan predicciones de modelos diversos para reducir errores.",
                de: "Ensemble-Methoden aggregieren Vorhersagen diverser Modelle zur Fehlerreduktion.",
                nl: "Ensemble methoden aggregeren voorspellingen van diverse modellen om fouten te verminderen."
            }
        },
        {
            question: {
                en: "How does topological mapping complement metric maps?",
                es: "¿Cómo complementa el mapeo topológico los mapas métricos?",
                de: "Wie ergänzt topologische Kartierung metrische Karten?",
                nl: "Hoe complementeert topologische mapping metrische kaarten?"
            },
            options: [
                { en: "Represents connectivity rather than exact geometry", es: "Representa conectividad en lugar de geometría exacta", de: "Stellt Konnektivität statt exakter Geometrie dar", nl: "Representeert connectiviteit in plaats van exacte geometrie" },
                { en: "Mountain topology", es: "Topología de montañas", de: "Bergtopologie", nl: "Berg topologie" },
                { en: "Top level maps", es: "Mapas de nivel superior", de: "Top-Level-Karten", nl: "Top niveau kaarten" },
                { en: "Metric system", es: "Sistema métrico", de: "Metrisches System", nl: "Metrisch systeem" }
            ],
            correct: 0,
            explanation: {
                en: "Topological maps capture place relationships and navigation routes without requiring precise measurements.",
                es: "Los mapas topológicos capturan relaciones de lugares y rutas sin requerir medidas precisas.",
                de: "Topologische Karten erfassen Ortsbeziehungen und Routen ohne präzise Messungen.",
                nl: "Topologische kaarten vangen plaatsrelaties en navigatieroutes zonder precieze metingen."
            }
        },
        {
            question: {
                en: "What is affordance learning in autonomous driving?",
                es: "¿Qué es el aprendizaje de affordances en conducción autónoma?",
                de: "Was ist Affordanz-Lernen beim autonomen Fahren?",
                nl: "Wat is affordance learning in autonoom rijden?"
            },
            options: [
                { en: "Learning what actions are possible in situations", es: "Aprender qué acciones son posibles en situaciones", de: "Lernen welche Aktionen in Situationen möglich sind", nl: "Leren welke acties mogelijk zijn in situaties" },
                { en: "Affordable learning", es: "Aprendizaje asequible", de: "Erschwingliches Lernen", nl: "Betaalbaar leren" },
                { en: "Learning affordability", es: "Aprender asequibilidad", de: "Erschwinglichkeit lernen", nl: "Betaalbaarheid leren" },
                { en: "Dance learning", es: "Aprendizaje de baile", de: "Tanzlernen", nl: "Dans leren" }
            ],
            correct: 0,
            explanation: {
                en: "Affordance learning identifies drivable surfaces, parking spots, and passable gaps directly from sensor data.",
                es: "El aprendizaje de affordances identifica superficies conducibles y espacios directamente de datos de sensores.",
                de: "Affordanz-Lernen identifiziert befahrbare Flächen und Lücken direkt aus Sensordaten.",
                nl: "Affordance learning identificeert berijdbare oppervlakken en openingen direct uit sensordata."
            }
        },
        {
            question: {
                en: "What is value iteration in path planning?",
                es: "¿Qué es la iteración de valor en planificación de rutas?",
                de: "Was ist Wertiteration in der Pfadplanung?",
                nl: "Wat is value iteration in padplanning?"
            },
            options: [
                { en: "Computing optimal costs for all states", es: "Calcular costos óptimos para todos los estados", de: "Optimale Kosten für alle Zustände berechnen", nl: "Optimale kosten berekenen voor alle toestanden" },
                { en: "Iterating values", es: "Iterar valores", de: "Werte iterieren", nl: "Waarden itereren" },
                { en: "Value pricing", es: "Fijación de precios de valor", de: "Wertpreisgestaltung", nl: "Waarde prijsstelling" },
                { en: "Iteration count", es: "Conteo de iteraciones", de: "Iterationszählung", nl: "Iteratie telling" }
            ],
            correct: 0,
            explanation: {
                en: "Value iteration propagates costs backward from goal to find optimal paths for all starting positions.",
                es: "La iteración de valor propaga costos hacia atrás desde la meta para encontrar rutas óptimas.",
                de: "Wertiteration propagiert Kosten rückwärts vom Ziel für optimale Pfade von allen Startpositionen.",
                nl: "Value iteration propageert kosten achterwaarts vanaf doel voor optimale paden vanaf alle startposities."
            }
        },
        {
            question: {
                en: "How does batch normalization stabilize training?",
                es: "¿Cómo estabiliza el entrenamiento la normalización por lotes?",
                de: "Wie stabilisiert Batch-Normalisierung das Training?",
                nl: "Hoe stabiliseert batch normalisatie training?"
            },
            options: [
                { en: "Normalizes layer inputs to reduce internal covariate shift", es: "Normaliza entradas de capa para reducir cambio de covarianza", de: "Normalisiert Schichteingaben zur Reduktion interner Kovarianzverschiebung", nl: "Normaliseert laaginputs om interne covariate shift te verminderen" },
                { en: "Batching cars", es: "Agrupar autos", de: "Autos stapeln", nl: "Auto's batchen" },
                { en: "Normal distribution", es: "Distribución normal", de: "Normalverteilung", nl: "Normale verdeling" },
                { en: "Batch processing", es: "Procesamiento por lotes", de: "Stapelverarbeitung", nl: "Batch verwerking" }
            ],
            correct: 0,
            explanation: {
                en: "Batch normalization standardizes inputs to each layer, enabling faster training and higher learning rates.",
                es: "La normalización por lotes estandariza entradas a cada capa, permitiendo entrenamiento más rápido.",
                de: "Batch-Normalisierung standardisiert Eingaben jeder Schicht für schnelleres Training.",
                nl: "Batch normalisatie standaardiseert inputs naar elke laag voor snellere training en hogere leersnelheden."
            }
        },
        {
            question: {
                en: "What is attention-based trajectory prediction?",
                es: "¿Qué es la predicción de trayectoria basada en atención?",
                de: "Was ist aufmerksamkeitsbasierte Trajektorienvorhersage?",
                nl: "Wat is attention-gebaseerde trajectvoorspelling?"
            },
            options: [
                { en: "Focuses on relevant agents for prediction", es: "Se enfoca en agentes relevantes para predicción", de: "Fokussiert auf relevante Agenten für Vorhersage", nl: "Focust op relevante agenten voor voorspelling" },
                { en: "Paying attention to trajectory", es: "Prestar atención a la trayectoria", de: "Auf Trajektorie achten", nl: "Aandacht voor traject" },
                { en: "Attention deficit", es: "Déficit de atención", de: "Aufmerksamkeitsdefizit", nl: "Aandachtstekort" },
                { en: "Trajectory attention", es: "Atención de trayectoria", de: "Trajektorienaufmerksamkeit", nl: "Traject aandacht" }
            ],
            correct: 0,
            explanation: {
                en: "Attention mechanisms weight importance of surrounding vehicles and context for accurate trajectory forecasting.",
                es: "Los mecanismos de atención ponderan importancia de vehículos circundantes para pronóstico preciso.",
                de: "Aufmerksamkeitsmechanismen gewichten Wichtigkeit umgebender Fahrzeuge für genaue Vorhersage.",
                nl: "Attention mechanismen wegen belang van omringende voertuigen voor nauwkeurige trajectvoorspelling."
            }
        },
        {
            question: {
                en: "What is stochastic model predictive control?",
                es: "¿Qué es el control predictivo de modelo estocástico?",
                de: "Was ist stochastische modellprädiktive Regelung?",
                nl: "Wat is stochastische model predictive control?"
            },
            options: [
                { en: "MPC accounting for uncertainty in predictions", es: "MPC considerando incertidumbre en predicciones", de: "MPC mit Berücksichtigung von Unsicherheit", nl: "MPC met onzekerheid in voorspellingen" },
                { en: "Random control", es: "Control aleatorio", de: "Zufällige Steuerung", nl: "Willekeurige controle" },
                { en: "Stock market prediction", es: "Predicción del mercado de valores", de: "Aktienmarktvorhersage", nl: "Aandelenmarkt voorspelling" },
                { en: "Chaotic control", es: "Control caótico", de: "Chaotische Steuerung", nl: "Chaotische controle" }
            ],
            correct: 0,
            explanation: {
                en: "Stochastic MPC optimizes expected performance considering probabilistic disturbances and model uncertainty.",
                es: "MPC estocástico optimiza rendimiento esperado considerando perturbaciones probabilísticas.",
                de: "Stochastische MPC optimiert erwartete Leistung unter probabilistischen Störungen.",
                nl: "Stochastische MPC optimaliseert verwachte prestaties met probabilistische verstoringen."
            }
        },
        {
            question: {
                en: "How does visual odometry estimate vehicle motion?",
                es: "¿Cómo estima la odometría visual el movimiento vehicular?",
                de: "Wie schätzt visuelle Odometrie Fahrzeugbewegung?",
                nl: "Hoe schat visuele odometrie voertuigbeweging?"
            },
            options: [
                { en: "Tracks features across camera frames", es: "Rastrea características a través de cuadros de cámara", de: "Verfolgt Merkmale über Kameraframes", nl: "Volgt features over camera frames" },
                { en: "Odometer readings", es: "Lecturas del odómetro", de: "Kilometerzähler-Anzeigen", nl: "Kilometerteller metingen" },
                { en: "Visual estimation", es: "Estimación visual", de: "Visuelle Schätzung", nl: "Visuele schatting" },
                { en: "Motion blur", es: "Desenfoque de movimiento", de: "Bewegungsunschärfe", nl: "Bewegingsonscherpte" }
            ],
            correct: 0,
            explanation: {
                en: "Visual odometry estimates ego-motion by tracking image features and computing relative camera poses.",
                es: "La odometría visual estima movimiento propio rastreando características y calculando poses relativas.",
                de: "Visuelle Odometrie schätzt Eigenbewegung durch Merkmalsverfolgung und relative Posen.",
                nl: "Visuele odometrie schat eigen beweging door features te volgen en relatieve camera poses te berekenen."
            }
        },
        {
            question: {
                en: "What is occupancy flow prediction?",
                es: "¿Qué es la predicción de flujo de ocupación?",
                de: "Was ist Belegungsflussvorhersage?",
                nl: "Wat is bezettingsstroom voorspelling?"
            },
            options: [
                { en: "Predicting future occupancy grid evolution", es: "Predecir evolución futura de cuadrícula de ocupación", de: "Zukünftige Belegungsgitter-Evolution vorhersagen", nl: "Voorspellen van toekomstige bezettingsraster evolutie" },
                { en: "Occupancy rates", es: "Tasas de ocupación", de: "Belegungsraten", nl: "Bezettingsgraden" },
                { en: "Flow meters", es: "Medidores de flujo", de: "Durchflussmesser", nl: "Stromingsmeters" },
                { en: "Occupation prediction", es: "Predicción de ocupación", de: "Berufsvorhersage", nl: "Beroep voorspelling" }
            ],
            correct: 0,
            explanation: {
                en: "Occupancy flow predicts how occupied and free spaces will move over time for collision-free planning.",
                es: "El flujo de ocupación predice cómo espacios ocupados y libres se moverán para planificación sin colisiones.",
                de: "Belegungsfluss prognostiziert Bewegung belegter und freier Räume für kollisionsfreie Planung.",
                nl: "Bezettingsstroom voorspelt hoe bezette en vrije ruimtes bewegen voor botsingsvrije planning."
            }
        }
    ]
};