// Bekende circuits Quiz - Level 5
(function() {
  const level5 = {
    name: {
      en: "Bekende circuits Level 5",
      es: "Bekende circuits Nivel 5",
      de: "Bekende circuits Stufe 5",
      nl: "Bekende circuits Level 5"
    },
    questions: [
      {
        question: {
          en: "What is the kerb height specification limit at FIA Grade 1 circuits?",
          es: "¿Cuál es el límite de especificación de altura de piano en circuitos FIA Grado 1?",
          de: "Was ist die Randstein-Höhen-Spezifikationsgrenze bei FIA Grad 1-Strecken?",
          nl: "Wat is de kerb hoogte specificatie limiet bij FIA Grade 1 circuits?"
        },
        options: ["25mm", "50mm maximum height", "75mm", "100mm"],
        correct: 1,
        explanation: {
          en: "FIA regulations limit kerb height to 50mm maximum at Grade 1 circuits to prevent cars from launching or sustaining damage when running over them.",
          es: "Las regulaciones FIA limitan la altura de pianos a 50mm máximo en circuitos Grado 1 para prevenir que autos se lancen o sufran daño al correr sobre ellos.",
          de: "FIA-Vorschriften begrenzen Randstein-Höhe auf maximal 50mm bei Grad 1-Strecken um zu verhindern dass Autos sich aufschwingen oder Schaden nehmen beim Überfahren.",
          nl: "FIA regels limiteren kerb hoogte tot 50mm maximum bij Grade 1 circuits om te voorkomen dat auto's lanceren of schade oplopen bij het over rijden."
        }
      },
      {
        question: {
          en: "Which circuit uses the most concrete instead of asphalt in its construction?",
          es: "¿Qué circuito usa más concreto en lugar de asfalto en su construcción?",
          de: "Welche Strecke nutzt am meisten Beton statt Asphalt in ihrer Konstruktion?",
          nl: "Welk circuit gebruikt het meeste beton in plaats van asfalt in zijn constructie?"
        },
        options: ["Monaco", "Singapore", "Long Beach (former F1 venue with extensive concrete surface)", "Miami"],
        correct: 2,
        explanation: {
          en: "The former Long Beach circuit used extensive concrete surfaces on public roads, characteristic of many American street circuits before asphalt overlays became standard.",
          es: "El antiguo circuito de Long Beach usaba extensas superficies de concreto en caminos públicos, característico de muchos circuitos callejeros americanos antes que las superposiciones de asfalto se volvieran estándar.",
          de: "Die frühere Long Beach-Strecke nutzte umfangreiche Betonoberflächen auf öffentlichen Straßen, charakteristisch für viele amerikanische Straßenstrecken bevor Asphalt-Überzüge Standard wurden.",
          nl: "Het voormalige Long Beach circuit gebruikte uitgebreide beton oppervlakken op openbare wegen, karakteristiek voor veel Amerikaanse stratencircuits voordat asfalt overlagen standaard werden."
        }
      },
      {
        question: {
          en: "What minimum pit lane width is required by FIA for F1 circuits?",
          es: "¿Qué ancho mínimo de pit lane es requerido por FIA para circuitos F1?",
          de: "Welche minimale Boxengassen-Breite ist von FIA für F1-Strecken erforderlich?",
          nl: "Wat is de minimale pitlane breedte vereist door FIA voor F1 circuits?"
        },
        options: ["8 meters", "10 meters", "12 meters throughout", "15 meters"],
        correct: 2,
        explanation: {
          en: "FIA requires pit lanes to be minimum 12 meters wide throughout their length at Grade 1 circuits to allow safe car movements and crew operations.",
          es: "FIA requiere que los pit lanes tengan mínimo 12 metros de ancho en toda su longitud en circuitos Grado 1 para permitir movimientos seguros de autos y operaciones de equipo.",
          de: "FIA verlangt dass Boxengassen mindestens 12 Meter breit sind über ihre gesamte Länge bei Grad 1-Strecken um sichere Fahrzeugbewegungen und Crew-Operationen zu ermöglichen.",
          nl: "FIA vereist dat pitlanes minimaal 12 meter breed zijn over hun volledige lengte bij Grade 1 circuits om veilige auto bewegingen en crew operaties mogelijk te maken."
        }
      },
      {
        question: {
          en: "Which circuit has the steepest downhill gradient in current F1?",
          es: "¿Qué circuito tiene el gradiente cuesta abajo más pronunciado en F1 actual?",
          de: "Welche Strecke hat das steilste Bergab-Gefälle in der aktuellen F1?",
          nl: "Welk circuit heeft de steilste bergafwaartse helling in huidige F1?"
        },
        options: ["Spa-Francorchamps", "Interlagos descent at 15% grade", "Circuit of the Americas", "Red Bull Ring"],
        correct: 1,
        explanation: {
          en: "Interlagos features the steepest downhill section in F1 with approximately 15% gradient descending from Turn 1 (Descida do Lago) down to Turn 2.",
          es: "Interlagos presenta la sección cuesta abajo más pronunciada en F1 con aproximadamente 15% de gradiente descendiendo de Curva 1 (Descida do Lago) hasta Curva 2.",
          de: "Interlagos hat den steilsten Bergab-Abschnitt in F1 mit etwa 15% Gefälle absteigend von Kurve 1 (Descida do Lago) hinunter zu Kurve 2.",
          nl: "Interlagos heeft de steilste bergafwaartse sectie in F1 met ongeveer 15% helling dalend van Bocht 1 (Descida do Lago) naar Bocht 2."
        }
      },
      {
        question: {
          en: "What drainage capacity requirement exists for F1 circuits during wet conditions?",
          es: "¿Qué requisito de capacidad de drenaje existe para circuitos F1 durante condiciones húmedas?",
          de: "Welche Entwässerungskapazitäts-Anforderung existiert für F1-Strecken bei Nässe?",
          nl: "Welke drainage capaciteit eis bestaat voor F1 circuits tijdens natte omstandigheden?"
        },
        options: ["10mm/hour", "25mm/hour minimum rainfall drainage", "50mm/hour", "No specific requirement"],
        correct: 1,
        explanation: {
          en: "FIA Grade 1 circuits must be capable of draining at least 25mm of rainfall per hour through proper track camber and drainage systems.",
          es: "Los circuitos FIA Grado 1 deben ser capaces de drenar al menos 25mm de lluvia por hora a través de peralte de pista adecuado y sistemas de drenaje.",
          de: "FIA Grad 1-Strecken müssen mindestens 25mm Niederschlag pro Stunde durch geeignete Streckenneigung und Entwässerungssysteme ableiten können.",
          nl: "FIA Grade 1 circuits moeten in staat zijn minimaal 25mm regenval per uur af te voeren door juiste baan camber en drainage systemen."
        }
      },
      {
        question: {
          en: "Which turn at Suzuka generates the highest sustained lateral g-force?",
          es: "¿Qué curva en Suzuka genera la mayor fuerza g lateral sostenida?",
          de: "Welche Kurve bei Suzuka erzeugt die höchste anhaltende Seiten-g-Kraft?",
          nl: "Welke bocht op Suzuka genereert de hoogste aanhoudende zijwaartse g-kracht?"
        },
        options: ["130R", "Spoon Curve", "Degner", "Turn 7 (Dunlop Curve) at ~4.5G sustained"],
        correct: 3,
        explanation: {
          en: "Turn 7 (Dunlop Curve) is a long, fast left-hander that generates approximately 4.5G of sustained lateral force, testing both driver endurance and car aerodynamics.",
          es: "Curva 7 (Dunlop Curve) es una larga y rápida curva izquierda que genera aproximadamente 4.5G de fuerza lateral sostenida, probando tanto resistencia del piloto como aerodinámica del auto.",
          de: "Kurve 7 (Dunlop Curve) ist eine lange, schnelle Linkskurve die etwa 4,5G anhaltende Seitenkraft erzeugt, testet Fahrer-Ausdauer und Auto-Aerodynamik.",
          nl: "Bocht 7 (Dunlop Curve) is een lange, snelle linkerbocht die ongeveer 4,5G aanhoudende zijwaartse kracht genereert, wat zowel coureur uithoudingsvermogen als auto aerodynamica test."
        }
      },
      {
        question: {
          en: "What is the typical track camber angle at high-speed corners on modern circuits?",
          es: "¿Cuál es el ángulo típico de peralte de pista en curvas de alta velocidad en circuitos modernos?",
          de: "Was ist der typische Streckenneigungswinkel bei Hochgeschwindigkeitskurven auf modernen Strecken?",
          nl: "Wat is de typische baan camber hoek bij hoge-snelheid bochten op moderne circuits?"
        },
        options: ["1-2 degrees", "2-3 degrees optimal for water drainage and grip", "5-6 degrees", "8-10 degrees"],
        correct: 1,
        explanation: {
          en: "Modern F1 circuits typically use 2-3 degrees of camber at high-speed corners to optimize water drainage while maintaining grip and allowing natural racing lines.",
          es: "Los circuitos F1 modernos típicamente usan 2-3 grados de peralte en curvas de alta velocidad para optimizar drenaje de agua mientras mantienen agarre y permiten líneas de carrera naturales.",
          de: "Moderne F1-Strecken nutzen typisch 2-3 Grad Neigung bei Hochgeschwindigkeitskurven um Wasserabfluss zu optimieren während Grip erhalten bleibt und natürliche Fahrlinien erlaubt werden.",
          nl: "Moderne F1 circuits gebruiken typisch 2-3 graden camber bij hoge-snelheid bochten om water afvoer te optimaliseren terwijl grip behouden blijft en natuurlijke racelijnen mogelijk zijn."
        }
      },
      {
        question: {
          en: "Which circuit feature at Monaco makes medical intervention uniquely challenging?",
          es: "¿Qué característica del circuito en Mónaco hace que la intervención médica sea únicamente desafiante?",
          de: "Welches Strecken-Merkmal in Monaco macht medizinische Intervention einzigartig herausfordernd?",
          nl: "Welke circuit eigenschap bij Monaco maakt medische interventie uniek uitdagend?"
        },
        options: ["Narrow streets", "Tunnel section blocks helicopter access to 40% of circuit", "No medical center", "Barriers too close"],
        correct: 1,
        explanation: {
          en: "Monaco's tunnel section prevents helicopter access to approximately 40% of the circuit, requiring strategically positioned medical posts and ambulances throughout the venue.",
          es: "La sección del túnel de Mónaco previene acceso de helicóptero a aproximadamente 40% del circuito, requiriendo puestos médicos y ambulancias posicionados estratégicamente en todo el lugar.",
          de: "Monacos Tunnel-Abschnitt verhindert Hubschrauber-Zugang zu etwa 40% der Strecke, erfordert strategisch positionierte medizinische Posten und Krankenwagen im gesamten Gelände.",
          nl: "Monaco's tunnel sectie voorkomt helikopter toegang tot ongeveer 40% van het circuit, wat strategisch gepositioneerde medische posten en ambulances vereist door het hele terrein."
        }
      },
      {
        question: {
          en: "What is the minimum medical intervention response time required at F1 circuits?",
          es: "¿Cuál es el tiempo mínimo de respuesta de intervención médica requerido en circuitos F1?",
          de: "Was ist die minimale medizinische Interventions-Reaktionszeit erforderlich bei F1-Strecken?",
          nl: "Wat is de minimale medische interventie reactie tijd vereist op F1 circuits?"
        },
        options: ["30 seconds", "60 seconds to any point on track", "90 seconds", "2 minutes"],
        correct: 1,
        explanation: {
          en: "FIA requires medical intervention vehicles to reach any point on the circuit within 60 seconds, with medical helicopter evacuation available within minutes.",
          es: "FIA requiere que vehículos de intervención médica alcancen cualquier punto del circuito en 60 segundos, con evacuación médica por helicóptero disponible en minutos.",
          de: "FIA verlangt dass medizinische Interventionsfahrzeuge jeden Punkt der Strecke binnen 60 Sekunden erreichen, mit medizinischer Hubschrauber-Evakuierung verfügbar innerhalb von Minuten.",
          nl: "FIA vereist dat medische interventie voertuigen elk punt op het circuit binnen 60 seconden bereiken, met medische helikopter evacuatie beschikbaar binnen minuten."
        }
      },
      {
        question: {
          en: "Which circuit modification technique is used to increase grip at newly resurfaced tracks?",
          es: "¿Qué técnica de modificación de circuito se usa para aumentar agarre en pistas recién resuperficiadas?",
          de: "Welche Streckenmodifikations-Technik wird genutzt um Grip bei neu asphaltierten Strecken zu erhöhen?",
          nl: "Welke circuit modificatie techniek wordt gebruikt om grip te verhogen op nieuw geasfalteerde circuits?"
        },
        options: ["Watering", "Jet washing", "Rubber laying with support race series before F1", "Chemical treatment"],
        correct: 2,
        explanation: {
          en: "Support race series (F2, F3, Porsche Supercup) lay down rubber on newly resurfaced circuits before F1 sessions to build grip and reduce initial slipperiness.",
          es: "Series de apoyo (F2, F3, Porsche Supercup) depositan caucho en circuitos recién resuperficiados antes de sesiones F1 para construir agarre y reducir deslizamiento inicial.",
          de: "Unterstützungsrennserien (F2, F3, Porsche Supercup) legen Gummi auf neu asphaltierte Strecken vor F1-Sessions ab um Grip aufzubauen und anfängliche Rutschigkeit zu reduzieren.",
          nl: "Ondersteuning race series (F2, F3, Porsche Supercup) leggen rubber neer op nieuw geasfalteerde circuits voor F1 sessies om grip op te bouwen en initiële gladheid te verminderen."
        }
      },
      {
        question: {
          en: "What sensor technology is embedded in modern circuit safety barriers?",
          es: "¿Qué tecnología de sensor está integrada en barreras de seguridad de circuitos modernos?",
          de: "Welche Sensor-Technologie ist in modernen Strecken-Sicherheitsbarrieren eingebettet?",
          nl: "Welke sensor technologie is ingebed in moderne circuit veiligheidsbarrières?"
        },
        options: ["None", "Temperature sensors", "Impact force sensors measuring collision energy", "GPS trackers"],
        correct: 2,
        explanation: {
          en: "Modern TecPro and SAFER barriers often include impact force sensors that measure collision energy, helping track officials assess incident severity immediately.",
          es: "Barreras TecPro y SAFER modernas a menudo incluyen sensores de fuerza de impacto que miden energía de colisión, ayudando a oficiales de pista evaluar severidad de incidente inmediatamente.",
          de: "Moderne TecPro- und SAFER-Barrieren enthalten oft Aufprallkraft-Sensoren die Kollisionsenergie messen, helfen Streckenoffiziellen Vorfallschwere sofort einzuschätzen.",
          nl: "Moderne TecPro en SAFER barrières bevatten vaak impact kracht sensoren die botsing energie meten, wat track officials helpt incident ernst onmiddellijk te beoordelen."
        }
      },
      {
        question: {
          en: "What is the required fire marshal coverage at F1 circuits?",
          es: "¿Cuál es la cobertura requerida de comisarios de incendios en circuitos F1?",
          de: "Was ist die erforderliche Feuerwehrmann-Abdeckung bei F1-Strecken?",
          nl: "Wat is de vereiste brandweer marshal dekking op F1 circuits?"
        },
        options: ["10 posts", "15 posts", "Minimum one fire intervention post every 500 meters", "25 posts"],
        correct: 2,
        explanation: {
          en: "FIA requires fire intervention posts positioned every 500 meters maximum around the circuit, each with trained marshals and fire suppression equipment.",
          es: "FIA requiere puestos de intervención contra incendios posicionados cada 500 metros máximo alrededor del circuito, cada uno con comisarios entrenados y equipo de supresión de fuego.",
          de: "FIA verlangt Feuer-Interventionsposten positioniert alle 500 Meter maximal um die Strecke, jeder mit trainierten Marshals und Feuer-Unterdrückungsausrüstung.",
          nl: "FIA vereist brand interventie posten gepositioneerd elke 500 meter maximum rond het circuit, elk met getrainde marshals en brand suppressie apparatuur."
        }
      },
      {
        question: {
          en: "Which circuit uses geothermal heating to prevent ice formation?",
          es: "¿Qué circuito usa calefacción geotérmica para prevenir formación de hielo?",
          de: "Welche Strecke nutzt geothermische Heizung um Eisbildung zu verhindern?",
          nl: "Welk circuit gebruikt geothermische verwarming om ijsvorming te voorkomen?"
        },
        options: ["Spa-Francorchamps sections", "Silverstone", "Zandvoort", "No F1 circuit currently uses this"],
        correct: 0,
        explanation: {
          en: "Certain sections of Spa-Francorchamps use geothermal heating systems in the track surface to prevent ice formation during cold Belgian winters.",
          es: "Ciertas secciones de Spa-Francorchamps usan sistemas de calefacción geotérmica en la superficie de pista para prevenir formación de hielo durante fríos inviernos belgas.",
          de: "Bestimmte Abschnitte von Spa-Francorchamps nutzen geothermische Heizsysteme in der Streckenoberfläche um Eisbildung während kalter belgischer Winter zu verhindern.",
          nl: "Bepaalde secties van Spa-Francorchamps gebruiken geothermische verwarmingssystemen in het baanoppervlak om ijsvorming te voorkomen tijdens koude Belgische winters."
        }
      },
      {
        question: {
          en: "What lighting intensity is required for night races per FIA regulations?",
          es: "¿Qué intensidad de iluminación se requiere para carreras nocturnas según regulaciones FIA?",
          de: "Welche Beleuchtungsstärke ist für Nachtrennen nach FIA-Vorschriften erforderlich?",
          nl: "Welke verlichtings intensiteit is vereist voor nachtraces volgens FIA regels?"
        },
        options: ["500 lux", "1000 lux", "Minimum 1500 lux on track surface", "2500 lux"],
        correct: 2,
        explanation: {
          en: "Night race circuits must provide minimum 1500 lux illumination on the track surface, equivalent to daylight conditions, with minimal shadowing.",
          es: "Circuitos de carreras nocturnas deben proporcionar iluminación mínima de 1500 lux en superficie de pista, equivalente a condiciones de luz diurna, con sombras mínimas.",
          de: "Nachtrenn-Strecken müssen mindestens 1500 Lux Beleuchtung auf Streckenoberfläche bieten, äquivalent zu Tageslichtbedingungen, mit minimaler Schattenbildung.",
          nl: "Nachtrace circuits moeten minimaal 1500 lux verlichting bieden op het baanoppervlak, equivalent aan daglicht omstandigheden, met minimale schaduwvorming."
        }
      },
      {
        question: {
          en: "Which circuit's track surface contains the highest percentage of recycled materials?",
          es: "¿Qué superficie de circuito contiene el mayor porcentaje de materiales reciclados?",
          de: "Welche Streckenoberfläche enthält den höchsten Prozentsatz recycelter Materialien?",
          nl: "Welk circuit oppervlak bevat het hoogste percentage gerecyclede materialen?"
        },
        options: ["Monaco", "Silverstone asphalt uses 30% recycled content", "Monza", "Barcelona"],
        correct: 1,
        explanation: {
          en: "Silverstone's recent resurfacing projects have incorporated up to 30% recycled asphalt content as part of its sustainability initiatives while maintaining grip standards.",
          es: "Los proyectos recientes de resuperficiado de Silverstone han incorporado hasta 30% de contenido de asfalto reciclado como parte de sus iniciativas de sostenibilidad mientras mantienen estándares de agarre.",
          de: "Silverstones jüngste Neuasphaltierungs-Projekte haben bis zu 30% recycelten Asphalt-Gehalt eingebaut als Teil seiner Nachhaltigkeitsinitiativen während Grip-Standards beibehalten werden.",
          nl: "Silverstone's recente herasfaltering projecten hebben tot 30% gerecycled asfalt inhoud geïntegreerd als onderdeel van zijn duurzaamheids initiatieven terwijl grip standaarden behouden blijven."
        }
      },
      {
        question: {
          en: "What minimum spectator capacity is required for a circuit to host F1?",
          es: "¿Qué capacidad mínima de espectadores se requiere para que un circuito aloje F1?",
          de: "Welche minimale Zuschauer-Kapazität ist erforderlich damit eine Strecke F1 ausrichten kann?",
          nl: "Wat is de minimale toeschouwer capaciteit vereist voor een circuit om F1 te hosten?"
        },
        options: ["10,000", "25,000", "No specific minimum - depends on commercial agreement", "100,000"],
        correct: 2,
        explanation: {
          en: "FIA has no specific minimum spectator capacity requirement; circuit approval depends on safety standards and commercial agreements with Formula 1 Management.",
          es: "FIA no tiene requisito mínimo específico de capacidad de espectadores; aprobación de circuito depende de estándares de seguridad y acuerdos comerciales con Formula 1 Management.",
          de: "FIA hat keine spezifische minimale Zuschauer-Kapazitäts-Anforderung; Strecken-Genehmigung hängt von Sicherheitsstandards und kommerziellen Vereinbarungen mit Formula 1 Management ab.",
          nl: "FIA heeft geen specifieke minimale toeschouwer capaciteit eis; circuit goedkeuring hangt af van veiligheids standaarden en commerciële overeenkomsten met Formula 1 Management."
        }
      },
      {
        question: {
          en: "Which street circuit modification requires the most extensive temporary infrastructure installation?",
          es: "¿Qué modificación de circuito callejero requiere la instalación de infraestructura temporal más extensa?",
          de: "Welche Straßenstrecken-Modifikation erfordert die umfangreichste temporäre Infrastruktur-Installation?",
          nl: "Welke stratencircuit modificatie vereist de meest uitgebreide tijdelijke infrastructuur installatie?"
        },
        options: ["Monaco", "Singapore with 8km of barrier installation over 5 weeks", "Miami", "Baku"],
        correct: 1,
        explanation: {
          en: "Singapore Marina Bay requires approximately 8 kilometers of barrier installation taking 5 weeks to construct, making it the most extensive temporary circuit setup in F1.",
          es: "Singapore Marina Bay requiere aproximadamente 8 kilómetros de instalación de barreras tomando 5 semanas para construir, haciéndola la configuración de circuito temporal más extensa en F1.",
          de: "Singapore Marina Bay erfordert etwa 8 Kilometer Barrieren-Installation die 5 Wochen dauert zu konstruieren, macht sie zum umfangreichsten temporären Strecken-Aufbau in F1.",
          nl: "Singapore Marina Bay vereist ongeveer 8 kilometer barrière installatie wat 5 weken duurt om te bouwen, waardoor het de meest uitgebreide tijdelijke circuit setup in F1 is."
        }
      },
      {
        question: {
          en: "What track temperature differential can cause significant grip variation during a race day?",
          es: "¿Qué diferencial de temperatura de pista puede causar variación significativa de agarre durante un día de carrera?",
          de: "Welcher Streckentemperatur-Unterschied kann signifikante Grip-Variation während eines Renntags verursachen?",
          nl: "Welk baantemperatuur verschil kan significante grip variatie veroorzaken tijdens een race dag?"
        },
        options: ["5°C", "10°C", "15-20°C between morning and afternoon sessions", "30°C"],
        correct: 2,
        explanation: {
          en: "Track temperature differentials of 15-20°C between morning practice and afternoon qualifying are common, significantly affecting tire performance and car setup requirements.",
          es: "Diferenciales de temperatura de pista de 15-20°C entre práctica matutina y clasificación vespertina son comunes, afectando significativamente rendimiento de neumáticos y requisitos de configuración de auto.",
          de: "Streckentemperatur-Unterschiede von 15-20°C zwischen Morgen-Training und Nachmittags-Qualifikation sind üblich, beeinflussen signifikant Reifenleistung und Auto-Setup-Anforderungen.",
          nl: "Baantemperatuur verschillen van 15-20°C tussen ochtend training en middag kwalificatie zijn gebruikelijk, wat significant prestaties van banden en auto setup vereisten beïnvloedt."
        }
      },
      {
        question: {
          en: "Which circuit uses the most advanced weather prediction systems?",
          es: "¿Qué circuito usa los sistemas de predicción meteorológica más avanzados?",
          de: "Welche Strecke nutzt die fortschrittlichsten Wettervorhersage-Systeme?",
          nl: "Welk circuit gebruikt de meest geavanceerde weer voorspelling systemen?"
        },
        options: ["Monaco", "Silverstone", "Spa-Francorchamps with multiple microclimate monitoring stations", "Interlagos"],
        correct: 2,
        explanation: {
          en: "Spa-Francorchamps employs multiple weather monitoring stations across its 7km length to track microclimates, as different sections can have vastly different conditions simultaneously.",
          es: "Spa-Francorchamps emplea múltiples estaciones de monitoreo meteorológico a lo largo de sus 7km para rastrear microclimas, ya que diferentes secciones pueden tener condiciones muy diferentes simultáneamente.",
          de: "Spa-Francorchamps setzt mehrere Wetter-Überwachungsstationen über seine 7km Länge ein um Mikroklimate zu verfolgen, da verschiedene Abschnitte gleichzeitig sehr unterschiedliche Bedingungen haben können.",
          nl: "Spa-Francorchamps gebruikt meerdere weer monitoring stations over zijn 7km lengte om microklimaten te volgen, omdat verschillende secties zeer verschillende omstandigheden kunnen hebben tegelijkertijd."
        }
      },
      {
        question: {
          en: "What is the maximum permitted gradient change at F1 circuits?",
          es: "¿Cuál es el cambio de gradiente máximo permitido en circuitos F1?",
          de: "Was ist die maximal erlaubte Gradientenänderung bei F1-Strecken?",
          nl: "Wat is de maximaal toegestane helling verandering op F1 circuits?"
        },
        options: ["5%", "10%", "No specific limit - depends on runoff availability", "20%"],
        correct: 2,
        explanation: {
          en: "FIA has no specific maximum gradient limit; approval depends on corner design, runoff areas, and safety infrastructure rather than gradient alone.",
          es: "FIA no tiene límite máximo específico de gradiente; aprobación depende de diseño de curva, áreas de escape e infraestructura de seguridad en lugar de solo gradiente.",
          de: "FIA hat keine spezifische maximale Gradienten-Grenze; Genehmigung hängt von Kurvendesign, Auslaufzonen und Sicherheitsinfrastruktur ab statt Gradient allein.",
          nl: "FIA heeft geen specifieke maximale helling limiet; goedkeuring hangt af van bocht ontwerp, uitloopzones en veiligheids infrastructuur in plaats van alleen helling."
        }
      },
      {
        question: {
          en: "Which circuit characteristic creates the most significant aerodynamic challenges?",
          es: "¿Qué característica del circuito crea los desafíos aerodinámicos más significativos?",
          de: "Welches Strecken-Merkmal schafft die signifikantesten aerodynamischen Herausforderungen?",
          nl: "Welke circuit karakteristiek creëert de meest significante aerodynamische uitdagingen?"
        },
        options: ["Long straights", "High altitude reducing downforce by 20% (Mexico City)", "Banking", "Narrow sections"],
        correct: 1,
        explanation: {
          en: "Mexico City's 2,285m altitude reduces air density by approximately 20%, dramatically decreasing aerodynamic downforce and requiring unique wing configurations.",
          es: "La altitud de 2,285m de Ciudad de México reduce densidad de aire aproximadamente 20%, disminuyendo dramáticamente carga aerodinámica y requiriendo configuraciones de alerón únicas.",
          de: "Mexico Citys 2.285m Höhe reduziert Luftdichte um etwa 20%, verringert dramatisch aerodynamischen Abtrieb und erfordert einzigartige Flügel-Konfigurationen.",
          nl: "Mexico City's 2.285m hoogte vermindert luchtdichtheid met ongeveer 20%, wat aerodynamische downforce dramatisch verlaagt en unieke vleugel configuraties vereist."
        }
      },
      {
        question: {
          en: "What circuit feature causes the most tire temperature management challenges?",
          es: "¿Qué característica del circuito causa los mayores desafíos de gestión de temperatura de neumáticos?",
          de: "Welches Strecken-Merkmal verursacht die größten Reifentemperatur-Management-Herausforderungen?",
          nl: "Welke circuit eigenschap veroorzaakt de meeste band temperatuur beheer uitdagingen?"
        },
        options: ["High-speed corners", "Long straights causing cooling then overheating in braking zones", "Chicanes", "Elevation changes"],
        correct: 1,
        explanation: {
          en: "Circuits with very long straights (Monza, Baku, Jeddah) cause tires to cool during straights then overheat rapidly in heavy braking zones, creating management challenges.",
          es: "Circuitos con rectas muy largas (Monza, Bakú, Jeddah) causan que neumáticos se enfríen durante rectas luego se sobrecalienten rápidamente en zonas de frenado fuerte, creando desafíos de gestión.",
          de: "Strecken mit sehr langen Geraden (Monza, Baku, Jeddah) lassen Reifen während Geraden kühlen dann in starken Bremszonen schnell überhitzen, schaffen Management-Herausforderungen.",
          nl: "Circuits met zeer lange rechte stukken (Monza, Baku, Jeddah) veroorzaken dat banden koelen tijdens rechte stukken en dan snel oververhitten in zware remzones, wat beheer uitdagingen creëert."
        }
      },
      {
        question: {
          en: "Which circuit uses the most extensive CCTV monitoring system?",
          es: "¿Qué circuito usa el sistema de monitoreo CCTV más extenso?",
          de: "Welche Strecke nutzt das umfangreichste CCTV-Überwachungssystem?",
          nl: "Welk circuit gebruikt het meest uitgebreide CCTV monitoring systeem?"
        },
        options: ["Monaco", "Singapore with 200+ cameras covering every angle", "Silverstone", "Spa"],
        correct: 1,
        explanation: {
          en: "Singapore Marina Bay employs over 200 CCTV cameras to monitor the entire 5km street circuit from race control, ensuring comprehensive incident detection.",
          es: "Singapore Marina Bay emplea más de 200 cámaras CCTV para monitorear todo el circuito callejero de 5km desde control de carrera, asegurando detección comprensiva de incidentes.",
          de: "Singapore Marina Bay setzt über 200 CCTV-Kameras ein um die gesamte 5km Straßenstrecke von Rennleitung zu überwachen, gewährleistet umfassende Vorfallserkennung.",
          nl: "Singapore Marina Bay gebruikt meer dan 200 CCTV camera's om het gehele 5km stratencircuit te monitoren vanaf race control, wat uitgebreide incident detectie waarborgt."
        }
      },
      {
        question: {
          en: "What brake cooling air temperature increase occurs at Mexico City due to altitude?",
          es: "¿Qué aumento de temperatura de aire de enfriamiento de frenos ocurre en Ciudad de México debido a altitud?",
          de: "Welcher Bremskühlungs-Lufttemperatur-Anstieg tritt in Mexico City wegen Höhe auf?",
          nl: "Welke rem koeling luchttemperatuur stijging treedt op bij Mexico City vanwege hoogte?"
        },
        options: ["No effect", "10°C increase", "Approximately 30°C higher inlet temperatures", "50°C increase"],
        correct: 2,
        explanation: {
          en: "Mexico's thin air at altitude causes brake cooling air inlet temperatures to be approximately 30°C higher than sea level, requiring larger ducts and different materials.",
          es: "El aire delgado de México en altitud causa que temperaturas de entrada de aire de enfriamiento de frenos sean aproximadamente 30°C más altas que nivel del mar, requiriendo conductos más grandes y materiales diferentes.",
          de: "Mexikos dünne Luft in Höhe verursacht dass Bremskühlungs-Lufteinlass-Temperaturen etwa 30°C höher sind als Meeresspiegel, erfordert größere Kanäle und verschiedene Materialien.",
          nl: "Mexico's dunne lucht op hoogte veroorzaakt dat rem koeling lucht inlaat temperaturen ongeveer 30°C hoger zijn dan zeeniveau, wat grotere kanalen en verschillende materialen vereist."
        }
      },
      {
        question: {
          en: "Which circuit modification improved overtaking by adding multiple racing lines?",
          es: "¿Qué modificación de circuito mejoró adelantamientos al agregar múltiples líneas de carrera?",
          de: "Welche Streckenmodifikation verbesserte Überholen durch Hinzufügen mehrerer Fahrlinien?",
          nl: "Welke circuit modificatie verbeterde inhalen door meerdere racelijnen toe te voegen?"
        },
        options: ["Monaco 2004", "Yas Marina 2021 corner widening", "Barcelona Turn 10", "Silverstone"],
        correct: 1,
        explanation: {
          en: "Yas Marina's 2021 modifications widened several corners to create multiple racing lines, allowing side-by-side racing where previously only one line was viable.",
          es: "Las modificaciones 2021 de Yas Marina ampliaron varias curvas para crear múltiples líneas de carrera, permitiendo carreras lado a lado donde previamente solo una línea era viable.",
          de: "Yas Marinas 2021-Modifikationen verbreiterten mehrere Kurven um multiple Fahrlinien zu schaffen, erlauben Side-by-Side-Rennen wo vorher nur eine Linie machbar war.",
          nl: "Yas Marina's 2021 aanpassingen verbreedden meerdere bochten om meerdere racelijnen te creëren, waardoor naast-elkaar racen mogelijk werd waar voorheen slechts één lijn levensvatbaar was."
        }
      },
      {
        question: {
          en: "What is the typical asphalt aggregate size specification for F1 circuits?",
          es: "¿Cuál es la especificación típica de tamaño de agregado de asfalto para circuitos F1?",
          de: "Was ist die typische Asphalt-Aggregat-Größen-Spezifikation für F1-Strecken?",
          nl: "Wat is de typische asfalt aggregaat grootte specificatie voor F1 circuits?"
        },
        options: ["2-4mm", "6-10mm for optimal grip and durability", "12-15mm", "20mm+"],
        correct: 1,
        explanation: {
          en: "Modern F1 circuits typically use 6-10mm aggregate size in asphalt mix, balancing mechanical grip, durability, and water drainage characteristics.",
          es: "Los circuitos F1 modernos típicamente usan tamaño de agregado de 6-10mm en mezcla de asfalto, equilibrando agarre mecánico, durabilidad y características de drenaje de agua.",
          de: "Moderne F1-Strecken nutzen typisch 6-10mm Aggregat-Größe in Asphalt-Mischung, balancieren mechanischen Grip, Haltbarkeit und Wasserabfluss-Eigenschaften.",
          nl: "Moderne F1 circuits gebruiken typisch 6-10mm aggregaat grootte in asfalt mix, wat mechanische grip, duurzaamheid en water afvoer karakteristieken balanceert."
        }
      },
      {
        question: {
          en: "Which circuit characteristic creates the most challenging qualifying strategy?",
          es: "¿Qué característica del circuito crea la estrategia de clasificación más desafiante?",
          de: "Welches Strecken-Merkmal schafft die herausforderndste Qualifikations-Strategie?",
          nl: "Welke circuit karakteristiek creëert de meest uitdagende kwalificatie strategie?"
        },
        options: ["Long lap times", "Rapid track evolution with limited sessions (street circuits)", "High-speed sections", "Elevation changes"],
        correct: 1,
        explanation: {
          en: "Street circuits undergo rapid track evolution as rubber is laid down, with limited practice time making it critical to time qualifying runs as late as possible for maximum grip.",
          es: "Los circuitos callejeros experimentan evolución rápida de pista a medida que se deposita caucho, con tiempo de práctica limitado haciendo crítico cronometrar carreras de clasificación lo más tarde posible para máximo agarre.",
          de: "Straßenstrecken durchlaufen schnelle Streckenentwicklung während Gummi abgelegt wird, mit begrenzter Trainingszeit macht es kritisch Qualifikations-Läufe so spät wie möglich zu timen für maximalen Grip.",
          nl: "Stratencircuits ondergaan snelle circuit evolutie naarmate rubber wordt neergelegd, met beperkte training tijd waardoor het cruciaal is kwalificatie runs zo laat mogelijk te timen voor maximale grip."
        }
      },
      {
        question: {
          en: "What minimum number of garage spaces is required in F1 pit buildings?",
          es: "¿Qué número mínimo de espacios de garaje se requiere en edificios de pit F1?",
          de: "Was ist die minimale Anzahl Garagen-Plätze erforderlich in F1-Boxengebäuden?",
          nl: "Wat is het minimale aantal garage ruimtes vereist in F1 pit gebouwen?"
        },
        options: ["10", "20", "30 garages (for 10 teams with spares)", "40"],
        correct: 2,
        explanation: {
          en: "FIA Grade 1 circuits must provide minimum 30 garage spaces to accommodate all 10 F1 teams (3 garages per team including spare space) plus support facilities.",
          es: "Los circuitos FIA Grado 1 deben proporcionar mínimo 30 espacios de garaje para acomodar todos los 10 equipos F1 (3 garajes por equipo incluyendo espacio de repuesto) más instalaciones de apoyo.",
          de: "FIA Grad 1-Strecken müssen mindestens 30 Garagen-Plätze bereitstellen um alle 10 F1-Teams (3 Garagen pro Team einschließlich Reserve-Platz) plus Unterstützungseinrichtungen unterzubringen.",
          nl: "FIA Grade 1 circuits moeten minimaal 30 garage ruimtes bieden om alle 10 F1 teams (3 garages per team inclusief reserve ruimte) plus ondersteunings faciliteiten te huisvesten."
        }
      },
      {
        question: {
          en: "Which circuit uses the most advanced tire temperature monitoring for surface conditions?",
          es: "¿Qué circuito usa el monitoreo de temperatura de neumáticos más avanzado para condiciones de superficie?",
          de: "Welche Strecke nutzt das fortschrittlichste Reifentemperatur-Überwachung für Oberflächenbedingungen?",
          nl: "Welk circuit gebruikt de meest geavanceerde band temperatuur monitoring voor oppervlak condities?"
        },
        options: ["Monaco", "Silverstone", "Paul Ricard with embedded surface temperature sensors", "Monza"],
        correct: 2,
        explanation: {
          en: "Paul Ricard has embedded track surface temperature sensors throughout the circuit providing real-time data to help teams optimize tire strategies based on surface conditions.",
          es: "Paul Ricard tiene sensores de temperatura de superficie de pista integrados en todo el circuito proporcionando datos en tiempo real para ayudar a equipos optimizar estrategias de neumáticos basadas en condiciones de superficie.",
          de: "Paul Ricard hat eingebettete Streckenoberflächen-Temperatursensoren im gesamten Circuit die Echtzeit-Daten liefern um Teams zu helfen Reifen-Strategien basierend auf Oberflächenbedingungen zu optimieren.",
          nl: "Paul Ricard heeft ingebedde baanoppervlak temperatuur sensoren door het hele circuit die real-time data leveren om teams te helpen band strategieën te optimaliseren gebaseerd op oppervlak condities."
        }
      },
      {
        question: {
          en: "What circuit modification technique reduces marbling off the racing line?",
          es: "¿Qué técnica de modificación de circuito reduce marbling fuera de la línea de carrera?",
          de: "Welche Streckenmodifikations-Technik reduziert Marbling außerhalb der Fahrlinie?",
          nl: "Welke circuit modificatie techniek vermindert marbling buiten de racinglijn?"
        },
        options: ["Watering", "Diamond grinding to create micro-texture", "Chemical treatment", "Rubber removal"],
        correct: 1,
        explanation: {
          en: "Diamond grinding creates micro-textured surface grooves that help disperse rubber marbles and improve off-line grip, used at circuits like Austin after resurfacing.",
          es: "El pulido con diamante crea surcos de superficie micro-texturizados que ayudan a dispersar bolitas de caucho y mejorar agarre fuera de línea, usado en circuitos como Austin después de resurficiado.",
          de: "Diamant-Schleifen schafft mikro-texturierte Oberflächenrillen die helfen Gummi-Marbles zu zerstreuen und Off-Line-Grip zu verbessern, genutzt bei Strecken wie Austin nach Neuasphaltierung.",
          nl: "Diamant slijpen creëert micro-getextureerde oppervlak groeven die helpen rubber marbles te verspreiden en off-line grip te verbeteren, gebruikt op circuits zoals Austin na herasfaltering."
        }
      },
      {
        question: {
          en: "Which street circuit requires the most extensive utility relocation for race weekend?",
          es: "¿Qué circuito callejero requiere la reubicación de servicios públicos más extensa para fin de semana de carrera?",
          de: "Welche Straßenstrecke erfordert die umfangreichste Versorgungsleitungs-Verlegung für Rennwochenende?",
          nl: "Welk stratencircuit vereist de meest uitgebreide nutsvoorzieningen verplaatsing voor race weekend?"
        },
        options: ["Monaco - minimal as permanent setup", "Baku", "Singapore", "Miami"],
        correct: 0,
        explanation: {
          en: "Monaco has permanent infrastructure modifications including relocated manhole covers and utility access, while other street circuits must temporarily modify utilities each year.",
          es: "Mónaco tiene modificaciones de infraestructura permanentes incluyendo tapas de alcantarilla reubicadas y acceso a servicios, mientras otros circuitos callejeros deben modificar servicios temporalmente cada año.",
          de: "Monaco hat permanente Infrastruktur-Modifikationen einschließlich verlegter Kanaldeckel und Versorgungszugang, während andere Straßenstrecken Versorgungsleitungen jedes Jahr temporär modifizieren müssen.",
          nl: "Monaco heeft permanente infrastructuur wijzigingen inclusief verplaatste putdeksels en nuts toegang, terwijl andere stratencircuits elk jaar tijdelijk nutsvoorzieningen moeten wijzigen."
        }
      },
      {
        question: {
          en: "What wind speed threshold triggers qualifying postponement at circuits?",
          es: "¿Qué umbral de velocidad del viento desencadena posponer clasificación en circuitos?",
          de: "Welche Windgeschwindigkeits-Schwelle löst Qualifikations-Verschiebung bei Strecken aus?",
          nl: "Welke windsnelheid drempel triggert kwalificatie uitstel op circuits?"
        },
        options: ["30 km/h", "50 km/h", "No fixed threshold - Race Director discretion", "80 km/h"],
        correct: 2,
        explanation: {
          en: "There's no fixed wind speed threshold; the Race Director assesses conditions including gusts, direction changes, and safety based on real-time circuit-specific factors.",
          es: "No hay umbral fijo de velocidad del viento; el Director de Carrera evalúa condiciones incluyendo ráfagas, cambios de dirección y seguridad basándose en factores específicos del circuito en tiempo real.",
          de: "Es gibt keine feste Windgeschwindigkeits-Schwelle; der Renndirektor bewertet Bedingungen einschließlich Böen, Richtungsänderungen und Sicherheit basierend auf Echtzeit-streckenspezifischen Faktoren.",
          nl: "Er is geen vaste windsnelheid drempel; de Race Director beoordeelt omstandigheden inclusief windstoten, richting veranderingen en veiligheid gebaseerd op real-time circuit-specifieke factoren."
        }
      },
      {
        question: {
          en: "Which circuit characteristic creates the most significant power unit cooling challenges?",
          es: "¿Qué característica del circuito crea los desafíos de enfriamiento de unidad de potencia más significativos?",
          de: "Welches Strecken-Merkmal schafft die signifikantesten Antriebseinheit-Kühlungs-Herausforderungen?",
          nl: "Welke circuit karakteristiek creëert de meest significante power unit koeling uitdagingen?"
        },
        options: ["High-speed corners", "Low-speed tight corners with sustained full throttle (Singapore, Monaco)", "Long straights", "Elevation changes"],
        correct: 1,
        explanation: {
          en: "Circuits like Singapore and Monaco with slow corners requiring sustained full throttle create maximum cooling challenges due to high power output with minimal airflow.",
          es: "Circuitos como Singapur y Mónaco con curvas lentas requiriendo acelerador a fondo sostenido crean desafíos máximos de enfriamiento debido a alta potencia con flujo de aire mínimo.",
          de: "Strecken wie Singapur und Monaco mit langsamen Kurven die anhaltend Vollgas erfordern schaffen maximale Kühlungs-Herausforderungen wegen hoher Leistung mit minimalem Luftstrom.",
          nl: "Circuits zoals Singapore en Monaco met langzame bochten die aanhoudend vol gas vereisen creëren maximale koeling uitdagingen vanwege hoog vermogen met minimale luchtstroom."
        }
      },
      {
        question: {
          en: "What is the FIA requirement for medical center location at circuits?",
          es: "¿Cuál es el requisito FIA para ubicación de centro médico en circuitos?",
          de: "Was ist die FIA-Anforderung für Medizin-Zentrum-Standort bei Strecken?",
          nl: "Wat is de FIA eis voor medisch centrum locatie op circuits?"
        },
        options: ["Pit lane", "Within 500m of any track point", "Adjacent to paddock with helicopter access", "Turn 1 area"],
        correct: 2,
        explanation: {
          en: "FIA requires the medical center to be adjacent to the paddock with direct helicopter landing pad access for rapid evacuation to trauma hospitals.",
          es: "FIA requiere que el centro médico esté adyacente al paddock con acceso directo a plataforma de aterrizaje de helicóptero para evacuación rápida a hospitales de trauma.",
          de: "FIA verlangt dass das Medizin-Zentrum neben dem Paddock liegt mit direktem Hubschrauber-Landeplatz-Zugang für schnelle Evakuierung zu Trauma-Krankenhäusern.",
          nl: "FIA vereist dat het medisch centrum naast de paddock ligt met directe helikopter landingsplaats toegang voor snelle evacuatie naar trauma ziekenhuizen."
        }
      },
      {
        question: {
          en: "Which circuit modification improved drainage most significantly?",
          es: "¿Qué modificación de circuito mejoró drenaje más significativamente?",
          de: "Welche Streckenmodifikation verbesserte Entwässerung am signifikantesten?",
          nl: "Welke circuit modificatie verbeterde drainage het meest significant?"
        },
        options: ["Monaco", "Silverstone 2018 resurfacing with increased camber", "Spa", "Monza"],
        correct: 1,
        explanation: {
          en: "Silverstone's 2018 resurfacing increased track camber by 1-2 degrees and installed improved drainage systems, reducing standing water issues significantly.",
          es: "El resurficiado 2018 de Silverstone aumentó peralte de pista en 1-2 grados e instaló sistemas de drenaje mejorados, reduciendo problemas de agua estancada significativamente.",
          de: "Silverstones 2018-Neuasphaltierung erhöhte Streckenneigung um 1-2 Grad und installierte verbesserte Entwässerungssysteme, reduzierte Stehwasser-Probleme signifikant.",
          nl: "Silverstone's 2018 herasfaltering verhoogde baan camber met 1-2 graden en installeerde verbeterde drainage systemen, wat staand water problemen significant verminderde."
        }
      },
      {
        question: {
          en: "What parc fermé facility size is required at F1 circuits?",
          es: "¿Qué tamaño de instalación de parc fermé se requiere en circuitos F1?",
          de: "Was ist die erforderliche Parc Fermé-Einrichtungs-Größe bei F1-Strecken?",
          nl: "Wat is de vereiste parc fermé faciliteit grootte op F1 circuits?"
        },
        options: ["100 m²", "200 m²", "Minimum 400 m² covered area for 20 cars", "600 m²"],
        correct: 2,
        explanation: {
          en: "Circuits must provide minimum 400 square meters of covered parc fermé area to securely house all 20 cars post-qualifying and post-race under FIA supervision.",
          es: "Los circuitos deben proporcionar mínimo 400 metros cuadrados de área cubierta de parc fermé para albergar de forma segura todos los 20 autos después de clasificación y carrera bajo supervisión FIA.",
          de: "Strecken müssen mindestens 400 Quadratmeter überdachte Parc Fermé-Fläche bereitstellen um alle 20 Autos nach Qualifikation und Rennen sicher unter FIA-Aufsicht unterzubringen.",
          nl: "Circuits moeten minimaal 400 vierkante meter overdekte parc fermé ruimte bieden om alle 20 auto's veilig te huisvesten na kwalificatie en race onder FIA toezicht."
        }
      },
      {
        question: {
          en: "Which circuit uses active track heating systems during winter months?",
          es: "¿Qué circuito usa sistemas activos de calefacción de pista durante meses de invierno?",
          de: "Welche Strecke nutzt aktive Streckenheizungs-Systeme während Wintermonaten?",
          nl: "Welk circuit gebruikt actieve baan verwarmings systemen tijdens winter maanden?"
        },
        options: ["Silverstone in critical sections", "Spa-Francorchamps", "Red Bull Ring", "Zandvoort"],
        correct: 0,
        explanation: {
          en: "Silverstone has installed active heating systems in critical braking zones and corners to prevent ice formation during winter testing and early season preparation.",
          es: "Silverstone ha instalado sistemas de calefacción activos en zonas de frenado críticas y curvas para prevenir formación de hielo durante pruebas de invierno y preparación de temporada temprana.",
          de: "Silverstone hat aktive Heizsysteme in kritischen Bremszonen und Kurven installiert um Eisbildung während Wintertests und früher Saisonvorbereitung zu verhindern.",
          nl: "Silverstone heeft actieve verwarmings systemen geïnstalleerd in kritieke remzones en bochten om ijsvorming te voorkomen tijdens winter testen en vroege seizoen voorbereiding."
        }
      },
      {
        question: {
          en: "What minimum run-off area is required at high-speed corners exceeding 250 km/h?",
          es: "¿Qué área de escape mínima se requiere en curvas de alta velocidad excediendo 250 km/h?",
          de: "Was ist die minimale Auslaufzone erforderlich bei Hochgeschwindigkeitskurven über 250 km/h?",
          nl: "Wat is de minimale uitloopzone vereist bij hoge-snelheid bochten boven 250 km/h?"
        },
        options: ["10 meters", "20 meters", "Minimum 30 meters gravel or equivalent energy absorption", "50 meters"],
        correct: 2,
        explanation: {
          en: "FIA requires minimum 30 meters of gravel trap or equivalent energy-absorbing runoff (like TecPro-backed asphalt) at corners where speeds exceed 250 km/h.",
          es: "FIA requiere mínimo 30 metros de trampa de grava o escape equivalente que absorba energía (como asfalto respaldado por TecPro) en curvas donde velocidades exceden 250 km/h.",
          de: "FIA verlangt mindestens 30 Meter Kiesbett oder äquivalente energieabsorbierende Auslaufzone (wie TecPro-gestütztes Asphalt) bei Kurven wo Geschwindigkeiten 250 km/h übersteigen.",
          nl: "FIA vereist minimaal 30 meter grindbak of equivalente energie-absorberende uitloopzone (zoals TecPro-ondersteund asfalt) bij bochten waar snelheden 250 km/h overschrijden."
        }
      },
      {
        question: {
          en: "Which circuit characteristic creates the most tire deg variation between compounds?",
          es: "¿Qué característica del circuito crea la mayor variación de degradación de neumáticos entre compuestos?",
          de: "Welches Strecken-Merkmal schafft die größte Reifenverschleiß-Variation zwischen Mischungen?",
          nl: "Welke circuit karakteristiek creëert de meeste band degradatie variatie tussen compounds?"
        },
        options: ["Smooth asphalt", "Abrasive surface with high lateral loads (Barcelona, Bahrain)", "Low-grip surface", "Street circuits"],
        correct: 1,
        explanation: {
          en: "Circuits with abrasive asphalt and high lateral g-forces like Barcelona and Bahrain create maximum degradation differences between tire compounds, crucial for strategy.",
          es: "Circuitos con asfalto abrasivo y altas fuerzas g laterales como Barcelona y Bahréin crean diferencias máximas de degradación entre compuestos de neumáticos, crucial para estrategia.",
          de: "Strecken mit abrasivem Asphalt und hohen Seiten-g-Kräften wie Barcelona und Bahrain schaffen maximale Verschleiß-Unterschiede zwischen Reifenmischungen, entscheidend für Strategie.",
          nl: "Circuits met schurend asfalt en hoge zijwaartse g-krachten zoals Barcelona en Bahrain creëren maximale degradatie verschillen tussen band compounds, cruciaal voor strategie."
        }
      },
      {
        question: {
          en: "What safety car deployment time standard must circuits meet?",
          es: "¿Qué estándar de tiempo de despliegue del safety car deben cumplir los circuitos?",
          de: "Welchen Safety Car-Einsatz-Zeit-Standard müssen Strecken erfüllen?",
          nl: "Welke safety car inzet tijd standaard moeten circuits voldoen?"
        },
        options: ["30 seconds", "60 seconds from pit lane to incident", "90 seconds", "2 minutes"],
        correct: 1,
        explanation: {
          en: "Safety car must be capable of deploying from pit lane and reaching any point on circuit within 60 seconds to quickly neutralize the race during incidents.",
          es: "El safety car debe ser capaz de desplegarse desde pit lane y alcanzar cualquier punto del circuito en 60 segundos para neutralizar rápidamente la carrera durante incidentes.",
          de: "Safety Car muss fähig sein sich von Boxengasse einzusetzen und jeden Punkt der Strecke binnen 60 Sekunden zu erreichen um Rennen schnell während Vorfällen zu neutralisieren.",
          nl: "Safety car moet in staat zijn zich vanaf pitlane in te zetten en elk punt op het circuit binnen 60 seconden te bereiken om de race snel te neutraliseren tijdens incidenten."
        }
      },
      {
        question: {
          en: "Which circuit uses the most sophisticated timing loops for data collection?",
          es: "¿Qué circuito usa los bucles de cronometraje más sofisticados para recopilación de datos?",
          de: "Welche Strecke nutzt die ausgefeiltesten Zeitmess-Schleifen für Datenerfassung?",
          nl: "Welk circuit gebruikt de meest geavanceerde timing loops voor data verzameling?"
        },
        options: ["Monaco", "All Grade 1 circuits use 20+ timing sectors", "Silverstone only", "Monza"],
        correct: 1,
        explanation: {
          en: "All FIA Grade 1 circuits must install minimum 20 timing loop sectors throughout the track for precise speed, position, and performance data collection.",
          es: "Todos los circuitos FIA Grado 1 deben instalar mínimo 20 sectores de bucle de cronometraje en toda la pista para recopilación precisa de datos de velocidad, posición y rendimiento.",
          de: "Alle FIA Grad 1-Strecken müssen mindestens 20 Zeitmess-Schleifen-Sektoren durch die Strecke installieren für präzise Geschwindigkeits-, Positions- und Leistungsdatenerfassung.",
          nl: "Alle FIA Grade 1 circuits moeten minimaal 20 timing loop sectoren door het circuit installeren voor precieze snelheid, positie en prestatie data verzameling."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
