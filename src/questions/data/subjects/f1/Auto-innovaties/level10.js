(function() {
    const level10Questions = [
        {
            question: {
                en: "What are CFD mesh resolution limits in F1?",
                es: "¿Cuáles son los límites de resolución de malla CFD en F1?",
                de: "Was sind CFD-Netzauflösungsgrenzen in F1?",
                nl: "Wat zijn CFD mesh-resolutielimieten in F1?"
            },
            options: ["No limits", "Limited to specific cell counts and refinement levels", "Unlimited resolution allowed", "Only 2D modeling"],
            correct: 1,
            explanation: {
                en: "FIA regulations limit CFD mesh cell counts and refinement levels to control computational resources and costs.",
                es: "Las regulaciones FIA limitan recuentos de celdas de malla CFD y niveles de refinamiento para controlar recursos.",
                de: "FIA-Regeln begrenzen CFD-Netz-Zellzahlen und Verfeinerungsstufen zur Kontrolle von Rechenressourcen.",
                nl: "FIA-reglementen beperken CFD mesh-celaantallen en verfijningsniveaus om computerbronnen en kosten te beheersen."
            }
        },
        {
            question: {
                en: "What is the wind tunnel moving ground belt?",
                es: "¿Qué es la cinta de suelo móvil del túnel de viento?",
                de: "Was ist das bewegliche Bodenband im Windkanal?",
                nl: "Wat is de bewegende grondband in de windtunnel?"
            },
            options: ["Conveyor for models", "Belt that moves to simulate ground effect accurately", "Safety feature", "Cooling system"],
            correct: 1,
            explanation: {
                en: "The moving ground belt simulates the relative motion between car and track, critical for accurate ground effect testing.",
                es: "La cinta de suelo móvil simula el movimiento relativo entre coche y pista, crítico para pruebas precisas de efecto suelo.",
                de: "Das bewegliche Bodenband simuliert relative Bewegung zwischen Auto und Strecke, kritisch für genaue Bodeneffekt-Tests.",
                nl: "De bewegende grondband simuleert de relatieve beweging tussen auto en circuit, cruciaal voor nauwkeurige grondeffecttests."
            }
        },
        {
            question: {
                en: "What is the maximum scale model size restriction?",
                es: "¿Cuál es la restricción de tamaño máximo del modelo a escala?",
                de: "Was ist die maximale Maßstabsmodell-Größenbeschränkung?",
                nl: "Wat is de maximale schaalmodel groottebeperking?"
            },
            options: ["40%", "50%", "60%", "80%"],
            correct: 2,
            explanation: {
                en: "F1 teams are limited to 60% scale models in wind tunnels to control costs and computational complexity.",
                es: "Los equipos de F1 están limitados a modelos a escala del 60% en túneles de viento para controlar costos.",
                de: "F1-Teams sind auf 60%-Maßstabsmodelle in Windkanälen begrenzt zur Kosten- und Komplexitätskontrolle.",
                nl: "F1-teams zijn beperkt tot 60% schaalmodellen in windtunnels om kosten en computationele complexiteit te beheersen."
            }
        },
        {
            question: {
                en: "What are Reynolds number scaling issues?",
                es: "¿Qué son los problemas de escala del número de Reynolds?",
                de: "Was sind Reynolds-Zahl-Skalierungsprobleme?",
                nl: "Wat zijn Reynolds-getal schaalprobleem­en?"
            },
            options: ["No issues", "Airflow behavior differs between scale model and full-size car", "Weight problems only", "Cost issues"],
            correct: 1,
            explanation: {
                en: "Reynolds number differences mean airflow behaves differently at model scale vs. full scale, requiring correlation adjustments.",
                es: "Diferencias en número de Reynolds significan que flujo de aire se comporta diferente a escala de modelo vs. escala completa.",
                de: "Reynolds-Zahl-Unterschiede bedeuten, dass sich Luftstrom im Modellmaßstab anders verhält als in Originalgröße.",
                nl: "Reynolds-getalverschillen betekenen dat luchtstroom zich anders gedraagt op modelschaal versus volledige schaal, wat correlatie-aanpassingen vereist."
            }
        },
        {
            question: {
                en: "Why is correlation between wind tunnel and track important?",
                es: "¿Por qué es importante la correlación entre túnel de viento y pista?",
                de: "Warum ist Korrelation zwischen Windkanal und Strecke wichtig?",
                nl: "Waarom is correlatie tussen windtunnel en circuit belangrijk?"
            },
            options: ["Not important", "Ensures development improvements translate to real-world performance", "Only for marketing", "Regulatory requirement only"],
            correct: 1,
            explanation: {
                en: "Good correlation ensures aerodynamic improvements found in wind tunnel actually work on track in real conditions.",
                es: "Buena correlación asegura que mejoras aerodinámicas en túnel funcionen en pista en condiciones reales.",
                de: "Gute Korrelation stellt sicher, dass aerodynamische Verbesserungen aus dem Windkanal auf der Strecke funktionieren.",
                nl: "Goede correlatie verzekert dat aerodynamische verbeteringen gevonden in windtunnel daadwerkelijk werken op circuit in echte omstandigheden."
            }
        },
        {
            question: {
                en: "How does aero balance change with fuel load?",
                es: "¿Cómo cambia el balance aerodinámico con la carga de combustible?",
                de: "Wie ändert sich die Aero-Balance mit Kraftstoffladung?",
                nl: "Hoe verandert aerobalans met brandstofbelading?"
            },
            options: ["Doesn't change", "Car gets lighter and ride height increases, affecting downforce distribution", "Only affects speed", "Only affects braking"],
            correct: 1,
            explanation: {
                en: "As fuel burns, car becomes lighter and ride height increases, changing aerodynamic platform and balance throughout race.",
                es: "A medida que se quema combustible, coche se vuelve más ligero y altura aumenta, cambiando plataforma aerodinámica.",
                de: "Wenn Kraftstoff verbrennt, wird Auto leichter und Fahrhöhe steigt, was aerodynamische Plattform und Balance ändert.",
                nl: "Naarmate brandstof verbrandt, wordt de auto lichter en rijhoogte neemt toe, wat aerodynamisch platform en balans verandert gedurende de race."
            }
        },
        {
            question: {
                en: "What is porpoising phenomenon?",
                es: "¿Qué es el fenómeno de porpoising?",
                de: "Was ist das Porpoising-Phänomen?",
                nl: "Wat is het porpoising-fenomeen?"
            },
            options: [
                { en: "Tire vibration", es: "Vibración de neumáticos", de: "Reifenvibration", nl: "Bandvibratie" },
                { en: "Aerodynamic bouncing from ground effect stall-reattachment cycle", es: "Rebote aerodinámico por ciclo de pérdida-readherencia efecto suelo", de: "Aerodynamisches Hüpfen durch Bodeneffekt-Abreiß-Wiederanhaft-Zyklus", nl: "Aerodynamisch stuiteren door grondeffect stal-heraansluiting cyclus" },
                { en: "Engine issue", es: "Problema de motor", de: "Motorproblem", nl: "Motorprobleem" },
                { en: "Suspension problem", es: "Problema de suspensión", de: "Aufhängungsproblem", nl: "Ophanging probleem" }
            ],
            correct: 1,
            explanation: {
                en: "Porpoising is vertical bouncing caused by ground effect repeatedly stalling and reattaching as ride height oscillates.",
                es: "Porpoising es rebote vertical causado por efecto suelo que repetidamente se anula y readhiere mientras altura oscila.",
                de: "Porpoising ist vertikales Hüpfen durch wiederholtes Abreißen und Wiederanhaften des Bodeneffekts bei Fahrhöhenoszillation.",
                nl: "Porpoising is verticaal stuiteren veroorzaakt door grondeffect dat herhaaldelijk stalt en weer aansluit terwijl rijhoogte oscilleert."
            }
        },
        {
            question: {
                en: "What causes porpoising in ground effect cars?",
                es: "¿Qué causa el porpoising en coches de efecto suelo?",
                de: "Was verursacht Porpoising bei Bodeneffekt-Autos?",
                nl: "Wat veroorzaakt porpoising in grondeffect-auto's?"
            },
            options: ["Bad tires", "Too much downforce lowers car, stalling floor; loss of downforce raises car, cycle repeats", "Engine problems", "Driver error"],
            correct: 1,
            explanation: {
                en: "Excessive downforce compresses suspension lowering car until floor stalls; downforce loss raises car, restarting cycle.",
                es: "Carga excesiva comprime suspensión bajando coche hasta que piso se anula; pérdida de carga eleva coche, reiniciando ciclo.",
                de: "Übermäßiger Abtrieb komprimiert Federung und senkt Auto bis Boden abreißt; Abtriebsverlust hebt Auto, Zyklus wiederholt sich.",
                nl: "Overmatige neerwaartse druk comprimeert ophanging waardoor auto daalt tot vloer stalt; verlies van druk verhoogt auto, cyclus herhaalt."
            }
        },
        {
            question: {
                en: "Why is 60% scale model limitation significant?",
                es: "¿Por qué es significativa la limitación del modelo a escala del 60%?",
                de: "Warum ist die 60%-Maßstabs-Begrenzung bedeutsam?",
                nl: "Waarom is de 60% schaalmodelbeperking significant?"
            },
            options: ["Easier to build", "Smaller models can't capture fine detail as accurately", "Cheaper materials", "Faster testing"],
            correct: 1,
            explanation: {
                en: "Smaller models cannot capture fine aerodynamic details as accurately, limiting development resolution and requiring correlation work.",
                es: "Modelos más pequeños no pueden capturar detalles aerodinámicos finos tan precisamente, limitando resolución de desarrollo.",
                de: "Kleinere Modelle können feine aerodynamische Details nicht so genau erfassen, was Entwicklungsauflösung begrenzt.",
                nl: "Kleinere modellen kunnen fijne aerodynamische details niet zo nauwkeurig vastleggen, wat ontwikkelingsresolutie beperkt en correlatiewerk vereist."
            }
        },
        {
            question: {
                en: "What is the wind tunnel speed limit in F1 testing?",
                es: "¿Cuál es el límite de velocidad del túnel de viento en pruebas de F1?",
                de: "Was ist das Windkanal-Geschwindigkeitslimit bei F1-Tests?",
                nl: "Wat is de windtunnel snelheidslimiet bij F1-testen?"
            },
            options: ["No limit", "50 m/s maximum", "100 m/s maximum", "150 m/s maximum"],
            correct: 1,
            explanation: {
                en: "F1 regulations limit wind tunnel testing to a maximum airspeed of 50 meters per second to control costs.",
                es: "Las regulaciones de F1 limitan pruebas de túnel de viento a velocidad máxima de aire de 50 metros por segundo.",
                de: "F1-Regeln begrenzen Windkanaltests auf maximal 50 Meter pro Sekunde Luftgeschwindigkeit zur Kostenkontrolle.",
                nl: "F1-reglementen beperken windtunneltests tot een maximum luchtsnelheid van 50 meter per seconde om kosten te beheersen."
            }
        },
        {
            question: {
                en: "How do teams address Reynolds number scaling issues?",
                es: "¿Cómo abordan los equipos los problemas de escala del número de Reynolds?",
                de: "Wie gehen Teams mit Reynolds-Zahl-Skalierungsproblemen um?",
                nl: "Hoe pakken teams Reynolds-getal schaalprobleem­en aan?"
            },
            options: ["Ignore them", "Use correlation factors developed from track data comparison", "Only use CFD", "Guess randomly"],
            correct: 1,
            explanation: {
                en: "Teams develop correlation factors by comparing wind tunnel predictions with actual track performance data.",
                es: "Los equipos desarrollan factores de correlación comparando predicciones de túnel con datos reales de rendimiento en pista.",
                de: "Teams entwickeln Korrelationsfaktoren durch Vergleich von Windkanal-Vorhersagen mit tatsächlichen Streckendaten.",
                nl: "Teams ontwikkelen correlatiefactoren door windtunnelvoorspellingen te vergelijken met werkelijke circuitprestatie data."
            }
        },
        {
            question: {
                en: "What is the purpose of moving ground belt's wheel rotation simulation?",
                es: "¿Cuál es el propósito de la simulación de rotación de ruedas de la cinta de suelo móvil?",
                de: "Was ist der Zweck der Radrotations-Simulation des beweglichen Bodenbands?",
                nl: "Wat is het doel van de wielrotatiesimulatie van de bewegende grondband?"
            },
            options: ["Decoration", "Accurately simulate tire-road interaction and wake", "Save energy", "Cool the model"],
            correct: 1,
            explanation: {
                en: "Rotating wheels on moving belt accurately simulate real tire-road interaction, critical for wake and underbody flow.",
                es: "Ruedas giratorias en cinta móvil simulan con precisión interacción neumático-carretera, crítico para estela y flujo inferior.",
                de: "Rotierende Räder auf beweglichem Band simulieren genau Reifen-Straße-Interaktion für Wake und Unterbodenströmung.",
                nl: "Roterende wielen op bewegende band simuleren nauwkeurig band-weginteractie, cruciaal voor wake en onderkant flow."
            }
        },
        {
            question: {
                en: "Why does fuel load affect ride height?",
                es: "¿Por qué la carga de combustible afecta la altura de conducción?",
                de: "Warum beeinflusst Kraftstoffladung die Fahrhöhe?",
                nl: "Waarom beïnvloedt brandstofbelading de rijhoogte?"
            },
            options: ["It doesn't", "Heavy fuel compresses suspension; as fuel burns, car rises", "Fuel changes tire pressure", "Aerodynamic effect only"],
            correct: 1,
            explanation: {
                en: "100+ kg of fuel compresses suspension at race start; as fuel burns, car becomes lighter and suspension extends, raising ride height.",
                es: "Más de 100 kg de combustible comprimen suspensión al inicio; al quemar combustible, coche se vuelve más ligero y sube.",
                de: "100+ kg Kraftstoff komprimieren Federung beim Start; beim Verbrennen wird Auto leichter und Federung dehnt sich aus.",
                nl: "100+ kg brandstof comprimeert ophanging bij racestart; naarmate brandstof verbrandt, wordt auto lichter en ophanging strekt uit, wat rijhoogte verhoogt."
            }
        },
        {
            question: {
                en: "What is CFD's advantage over wind tunnel testing?",
                es: "¿Cuál es la ventaja del CFD sobre las pruebas en túnel de viento?",
                de: "Was ist der Vorteil von CFD gegenüber Windkanaltests?",
                nl: "Wat is het voordeel van CFD ten opzichte van windtunneltesten?"
            },
            options: ["More accurate always", "Can visualize entire flow field and test more configurations quickly", "Cheaper only", "No advantages"],
            correct: 1,
            explanation: {
                en: "CFD allows visualization of entire flow field and rapid testing of many configurations without building physical models.",
                es: "CFD permite visualización de todo el campo de flujo y prueba rápida de muchas configuraciones sin construir modelos físicos.",
                de: "CFD ermöglicht Visualisierung des gesamten Strömungsfelds und schnelle Tests vieler Konfigurationen ohne Modellbau.",
                nl: "CFD maakt visualisatie van het gehele stromingsveld mogelijk en snelle tests van vele configuraties zonder fysieke modellen te bouwen."
            }
        },
        {
            question: {
                en: "How is porpoising mitigated aerodynamically?",
                es: "¿Cómo se mitiga el porpoising aerodinámicamente?",
                de: "Wie wird Porpoising aerodynamisch gemildert?",
                nl: "Hoe wordt porpoising aerodynamisch beperkt?"
            },
            options: ["Can't be fixed", "Raising ride height, reducing floor sensitivity, or adding stiffness", "Removing downforce completely", "Changing tires"],
            correct: 1,
            explanation: {
                en: "Teams raise ride height, reduce floor sensitivity to height changes, or stiffen suspension to break the oscillation cycle.",
                es: "Los equipos elevan altura, reducen sensibilidad del piso a cambios de altura, o endurecen suspensión para romper ciclo.",
                de: "Teams erhöhen Fahrhöhe, reduzieren Boden-Höhensensitivität oder versteifen Federung zum Durchbrechen des Oszillationszyklus.",
                nl: "Teams verhogen rijhoogte, verminderen vloergevoeligheid voor hoogtewijzigingen, of verstijven ophanging om de oscillatiecyclus te doorbreken."
            }
        },
        {
            question: {
                en: "What computational resource is most limited in CFD regulations?",
                es: "¿Qué recurso computacional está más limitado en las regulaciones CFD?",
                de: "Welche Rechenressource ist in CFD-Regeln am stärksten begrenzt?",
                nl: "Welke computerbron is het meest beperkt in CFD-reglementen?"
            },
            options: ["Memory", "Processing time/core hours", "Storage space", "Network bandwidth"],
            correct: 1,
            explanation: {
                en: "The FIA limits the number of CPU core hours teams can use for CFD simulations, controlling computational power.",
                es: "La FIA limita el número de horas de núcleo de CPU que los equipos pueden usar para simulaciones CFD.",
                de: "Die FIA begrenzt CPU-Kernstunden, die Teams für CFD-Simulationen nutzen können, zur Kontrolle von Rechenleistung.",
                nl: "De FIA beperkt het aantal CPU-kernuren dat teams kunnen gebruiken voor CFD-simulaties, wat computerkracht beheerst."
            }
        },
        {
            question: {
                en: "Why is correlation work between CFD and wind tunnel important?",
                es: "¿Por qué es importante el trabajo de correlación entre CFD y túnel de viento?",
                de: "Warum ist Korrelationsarbeit zwischen CFD und Windkanal wichtig?",
                nl: "Waarom is correlatiewerk tussen CFD en windtunnel belangrijk?"
            },
            options: ["Not important", "Validates both methods and improves confidence in predictions", "Legal requirement only", "Marketing purposes"],
            correct: 1,
            explanation: {
                en: "Correlation between CFD and wind tunnel validates both methods and increases confidence that predictions match reality.",
                es: "La correlación entre CFD y túnel valida ambos métodos y aumenta confianza de que predicciones coincidan con realidad.",
                de: "Korrelation zwischen CFD und Windkanal validiert beide Methoden und erhöht Vertrauen in realitätsnahe Vorhersagen.",
                nl: "Correlatie tussen CFD en windtunnel valideert beide methoden en vergroot vertrouwen dat voorspellingen overeenkomen met werkelijkheid."
            }
        },
        {
            question: {
                en: "What physical phenomenon limits ground effect at very low ride heights?",
                es: "¿Qué fenómeno físico limita el efecto suelo a alturas muy bajas?",
                de: "Welches physikalische Phänomen begrenzt Bodeneffekt bei sehr niedrigen Fahrhöhen?",
                nl: "Welk fysisch fenomeen beperkt grondeffect bij zeer lage rijhoogtes?"
            },
            options: ["Nothing", "Flow separation/stall when floor gets too close to ground", "Tire contact", "Engine cooling"],
            correct: 1,
            explanation: {
                en: "At extremely low ride heights, airflow under the floor can separate or stall, suddenly losing downforce and triggering porpoising.",
                es: "A alturas extremadamente bajas, flujo bajo el piso puede separarse o anularse, perdiendo carga repentinamente.",
                de: "Bei extrem niedriger Fahrhöhe kann Luftstrom unter dem Boden abreißen, plötzlich Abtrieb verlieren und Porpoising auslösen.",
                nl: "Bij extreem lage rijhoogte kan luchtstroom onder de vloer scheiden of stallen, plotseling neerwaartse druk verliezen en porpoising triggeren."
            }
        },
        {
            question: {
                en: "How does aero balance shift from start to end of race?",
                es: "¿Cómo cambia el balance aerodinámico desde el inicio hasta el final de la carrera?",
                de: "Wie verschiebt sich die Aero-Balance vom Start zum Rennende?",
                nl: "Hoe verschuift aerobalans van start tot einde van de race?"
            },
            options: ["Doesn't change", "Typically becomes more front-limited as rear rises with fuel burn", "Always improves", "Becomes worse"],
            correct: 1,
            explanation: {
                en: "As fuel burns and rear ride height increases, rear floor loses efficiency faster than front, shifting balance forward.",
                es: "A medida que se quema combustible y altura trasera aumenta, piso trasero pierde eficiencia más rápido que delantero.",
                de: "Beim Kraftstoffverbrennen steigt Heckhöhe, hinterer Boden verliert schneller Effizienz als vorderer, Balance verschiebt nach vorn.",
                nl: "Naarmate brandstof verbrandt en achterrijhoogte toeneemt, verliest achtervloer sneller efficiëntie dan voorkant, wat balans naar voren verschuift."
            }
        },
        {
            question: {
                en: "What is the fundamental limitation of scale model testing?",
                es: "¿Cuál es la limitación fundamental de las pruebas con modelos a escala?",
                de: "Was ist die grundlegende Einschränkung von Maßstabsmodell-Tests?",
                nl: "Wat is de fundamentele beperking van schaalmodeltesten?"
            },
            options: ["Cost", "Cannot perfectly replicate full-scale physics due to Reynolds number effects", "Time", "Accuracy is perfect"],
            correct: 1,
            explanation: {
                en: "Scale models cannot perfectly replicate full-scale aerodynamic behavior due to Reynolds number differences affecting boundary layers.",
                es: "Modelos a escala no pueden replicar perfectamente comportamiento aerodinámico de escala completa debido a diferencias de número de Reynolds.",
                de: "Maßstabsmodelle können aerodynamisches Verhalten in Originalgröße nicht perfekt nachbilden wegen Reynolds-Zahl-Unterschieden.",
                nl: "Schaalmodellen kunnen volledig-schaal aerodynamisch gedrag niet perfect repliceren door Reynolds-getalverschillen die grenslagen beïnvloeden."
            }
        },
        {
            question: {
                en: "What is the ATR (Aerodynamic Testing Restriction) sliding scale system?",
                es: "¿Qué es el sistema de escala deslizante ATR (Restricción de Pruebas Aerodinámicas)?",
                de: "Was ist das ATR (Aerodynamic Testing Restriction) Sliding-Scale-System?",
                nl: "Wat is het ATR (Aerodynamic Testing Restriction) glijdende schaal systeem?"
            },
            options: ["Equal testing for all teams", "Lower-ranked teams get more CFD/wind tunnel time than winners", "Winners get more time", "Random allocation"],
            correct: 1,
            explanation: {
                en: "ATR gives lower-ranked teams more aerodynamic development resources (CFD/wind tunnel time) to promote competitive balance.",
                es: "ATR da a equipos de menor rango más recursos de desarrollo aerodinámico para promover equilibrio competitivo.",
                de: "ATR gibt niedriger platzierten Teams mehr aerodynamische Entwicklungsressourcen für Wettbewerbsbalance.",
                nl: "ATR geeft lager gerangschikt teams meer aerodynamische ontwikkelingsbronnen (CFD/windtunnel tijd) om competitieve balans te bevorderen."
            }
        },
        {
            question: {
                en: "What is Y+ value in CFD mesh generation and why is it critical?",
                es: "¿Qué es el valor Y+ en generación de malla CFD y por qué es crítico?",
                de: "Was ist der Y+ Wert bei CFD-Netzerzeugung und warum ist er kritisch?",
                nl: "Wat is Y+ waarde in CFD mesh-generatie en waarom is dit kritisch?"
            },
            options: ["Random number", "Dimensionless wall distance determining boundary layer resolution quality", "Temperature value", "Pressure coefficient"],
            correct: 1,
            explanation: {
                en: "Y+ is dimensionless wall distance controlling first cell height; proper Y+ values are critical for accurate boundary layer prediction.",
                es: "Y+ es distancia adimensional de pared controlando altura de primera celda; valores Y+ apropiados son críticos para predicción precisa de capa límite.",
                de: "Y+ ist dimensionslose Wanddistanz für erste Zellenhöhe; korrekte Y+-Werte sind kritisch für genaue Grenzschichtvorhersage.",
                nl: "Y+ is dimensieloze wandafstand die eerste celhoogte bepaalt; juiste Y+ waarden zijn cruciaal voor nauwkeurige grenslaagvoorspelling."
            }
        },
        {
            question: {
                en: "What turbulence models are commonly used in F1 CFD?",
                es: "¿Qué modelos de turbulencia se usan comúnmente en CFD de F1?",
                de: "Welche Turbulenzmodelle werden häufig in F1-CFD verwendet?",
                nl: "Welke turbulentiemodellen worden vaak gebruikt in F1 CFD?"
            },
            options: ["No turbulence modeling", "RANS (k-ε, k-ω, SST) and sometimes LES/DES for critical areas", "Only laminar flow", "Random models"],
            correct: 1,
            explanation: {
                en: "Teams use RANS models (k-epsilon, k-omega, SST) for efficiency; LES/DES for high-fidelity critical flow regions within budget.",
                es: "Equipos usan modelos RANS para eficiencia; LES/DES para regiones de flujo críticas de alta fidelidad dentro del presupuesto.",
                de: "Teams nutzen RANS-Modelle für Effizienz; LES/DES für hochauflösende kritische Strömungsbereiche im Budget.",
                nl: "Teams gebruiken RANS-modellen (k-epsilon, k-omega, SST) voor efficiëntie; LES/DES voor hoge-fideliteit kritieke stromingsgebieden binnen budget."
            }
        },
        {
            question: {
                en: "How does yaw angle affect aerodynamic performance in F1?",
                es: "¿Cómo afecta el ángulo de guiñada al rendimiento aerodinámico en F1?",
                de: "Wie beeinflusst der Gierwinkel die aerodynamische Leistung in F1?",
                nl: "Hoe beïnvloedt gierhoek aerodynamische prestaties in F1?"
            },
            options: ["No effect", "Yaw changes flow over car asymmetrically, significantly affecting balance and drag", "Only affects aesthetics", "Improves performance always"],
            correct: 1,
            explanation: {
                en: "Yaw (steering angle or crosswind) creates asymmetric flow, changing downforce balance and increasing drag significantly.",
                es: "Guiñada (ángulo de dirección o viento cruzado) crea flujo asimétrico, cambiando balance de carga y aumentando resistencia.",
                de: "Gierwinkel (Lenkwinkel oder Seitenwind) erzeugt asymmetrische Strömung und ändert Abtriebsbalance und erhöht Widerstand.",
                nl: "Gierhoek (stuurhoek of zijwind) creëert asymmetrische stroming, wat neerwaartse drukbalans verandert en weerstand significant verhoogt."
            }
        },
        {
            question: {
                en: "What is the 'aero map' and why do teams create it?",
                es: "¿Qué es el 'mapa aerodinámico' y por qué lo crean los equipos?",
                de: "Was ist die 'Aero-Map' und warum erstellen Teams sie?",
                nl: "Wat is de 'aero map' en waarom maken teams deze?"
            },
            options: ["Track layout", "Matrix of downforce/drag across ride heights, speeds, and attitudes", "Driver seating position", "Tire data"],
            correct: 1,
            explanation: {
                en: "Aero map is a comprehensive database showing how downforce and drag vary with ride height, pitch, roll, yaw, and speed.",
                es: "El mapa aerodinámico es base de datos mostrando cómo varían carga y resistencia con altura, cabeceo, balanceo, guiñada y velocidad.",
                de: "Aero-Map ist Datenbank, die zeigt, wie Abtrieb und Widerstand mit Fahrhöhe, Nick-, Roll-, Gierwinkel und Geschwindigkeit variieren.",
                nl: "Aero map is uitgebreide database die toont hoe neerwaartse druk en weerstand variëren met rijhoogte, pitch, roll, yaw en snelheid."
            }
        },
        {
            question: {
                en: "Why is pitch sensitivity critical in ground effect cars?",
                es: "¿Por qué es crítica la sensibilidad al cabeceo en coches de efecto suelo?",
                de: "Warum ist Nick-Sensitivität bei Bodeneffekt-Autos kritisch?",
                nl: "Waarom is pitch-gevoeligheid kritisch in grondeffect-auto's?"
            },
            options: ["Not important", "Small pitch changes drastically affect floor performance and balance", "Only affects aesthetics", "Improves stability"],
            correct: 1,
            explanation: {
                en: "Ground effect floors are extremely sensitive to pitch angle; small changes in pitch dramatically alter downforce and balance.",
                es: "Pisos de efecto suelo son extremadamente sensibles al ángulo de cabeceo; pequeños cambios alteran dramáticamente carga y balance.",
                de: "Bodeneffekt-Böden sind extrem nick-sensitiv; kleine Nick-Änderungen verändern Abtrieb und Balance dramatisch.",
                nl: "Grondeffect vloeren zijn extreem gevoelig voor pitch-hoek; kleine veranderingen in pitch veranderen dramatisch neerwaartse druk en balans."
            }
        },
        {
            question: {
                en: "What is the purpose of 'aero rake' measurements on track?",
                es: "¿Cuál es el propósito de las mediciones de 'aero rake' en pista?",
                de: "Was ist der Zweck von 'Aero-Rake'-Messungen auf der Strecke?",
                nl: "Wat is het doel van 'aero rake' metingen op circuit?"
            },
            options: ["Cleaning the car", "Measure actual airflow velocities and pressures to validate CFD/wind tunnel", "Decoration", "Weight measurement"],
            correct: 1,
            explanation: {
                en: "Aero rakes are instrumented sensor arrays measuring real-world flow velocities and pressures to validate and correlate simulations.",
                es: "Aero rakes son arreglos de sensores instrumentados midiendo velocidades de flujo y presiones reales para validar simulaciones.",
                de: "Aero-Rakes sind instrumentierte Sensor-Arrays zur Messung realer Strömungsgeschwindigkeiten und Drücke für Simulationsvalidierung.",
                nl: "Aero rakes zijn geïnstrumenteerde sensor arrays die echte stroomsnelheden en drukken meten om simulaties te valideren en correleren."
            }
        },
        {
            question: {
                en: "How does tire deformation affect aerodynamics?",
                es: "¿Cómo afecta la deformación del neumático a la aerodinámica?",
                de: "Wie beeinflusst Reifenverformung die Aerodynamik?",
                nl: "Hoe beïnvloedt bandenvervorming de aerodynamica?"
            },
            options: ["No effect", "Loaded tire shape changes contact patch and affects flow under car and wheel wake", "Only affects grip", "Improves downforce always"],
            correct: 1,
            explanation: {
                en: "Tire deformation under load changes contact patch shape, ride height, and affects critical underbody flow and wheel wake patterns.",
                es: "La deformación del neumático bajo carga cambia forma del parche de contacto, altura y afecta flujo inferior y estela de rueda.",
                de: "Reifenverformung unter Last ändert Kontaktflächenform, Fahrhöhe und beeinflusst kritischen Unterbodenfluss und Radnachlauf.",
                nl: "Bandenvervorming onder belasting verandert contactpatch vorm, rijhoogte en beïnvloedt kritieke onderkant stroom en wielwake patronen."
            }
        },
        {
            question: {
                en: "What is the 'outwash' vs 'inwash' front wing philosophy?",
                es: "¿Qué es la filosofía de ala delantera 'outwash' vs 'inwash'?",
                de: "Was ist die 'Outwash' vs 'Inwash' Frontflügel-Philosophie?",
                nl: "Wat is de 'outwash' vs 'inwash' voorvleugel filosofie?"
            },
            options: ["No difference", "Outwash pushes air around tires; inwash directs air under car for floor", "Only aesthetic choice", "Random design"],
            correct: 1,
            explanation: {
                en: "Outwash philosophy pushes air outboard around front tires; inwash directs more air under car to feed floor and diffuser.",
                es: "Filosofía outwash empuja aire alrededor de neumáticos delanteros; inwash dirige más aire bajo coche para alimentar piso y difusor.",
                de: "Outwash-Philosophie drückt Luft außen um Vorderreifen; Inwash leitet mehr Luft unter Auto für Boden und Diffusor.",
                nl: "Outwash filosofie duwt lucht buitenboord rond voorbanden; inwash stuurt meer lucht onder auto om vloer en diffuser te voeden."
            }
        },
        {
            question: {
                en: "What causes 'aero balance shift' during braking?",
                es: "¿Qué causa el 'cambio de balance aerodinámico' durante el frenado?",
                de: "Was verursacht 'Aero-Balance-Shift' beim Bremsen?",
                nl: "Wat veroorzaakt 'aerobalans verschuiving' tijdens remmen?"
            },
            options: ["Nothing changes", "Weight transfer pitches car nose-down, changing front/rear floor gaps and downforce", "Only mechanical", "Driver input only"],
            correct: 1,
            explanation: {
                en: "Braking weight transfer pitches car forward, closing front ride height and opening rear, changing front-to-rear aero balance.",
                es: "Transferencia de peso en frenado inclina coche hacia adelante, cerrando altura frontal y abriendo trasera, cambiando balance aero.",
                de: "Bremsen-Gewichtsverlagerung kippt Auto nach vorn, schließt vordere Fahrhöhe und öffnet hintere, ändert Aero-Balance.",
                nl: "Remmen gewichtsoverdracht kantelt auto naar voren, sluit voor rijhoogte en opent achter, wat voor-naar-achter aerobalans verandert."
            }
        },
        {
            question: {
                en: "What is the 'Kutta condition' in aerodynamics?",
                es: "¿Qué es la 'condición de Kutta' en aerodinámica?",
                de: "Was ist die 'Kutta-Bedingung' in der Aerodynamik?",
                nl: "Wat is de 'Kutta-voorwaarde' in aerodynamica?"
            },
            options: ["Random theory", "Flow leaves trailing edge smoothly, determining circulation and lift", "Engine parameter", "Tire condition"],
            correct: 1,
            explanation: {
                en: "Kutta condition states flow must leave a sharp trailing edge smoothly, which determines circulation around wing and lift generated.",
                es: "La condición de Kutta establece que flujo debe dejar borde de salida afilado suavemente, determinando circulación y sustentación.",
                de: "Kutta-Bedingung besagt, dass Strömung scharfe Hinterkante glatt verlassen muss, was Zirkulation um Flügel und Auftrieb bestimmt.",
                nl: "Kutta-voorwaarde stelt dat stroming een scherpe trailing edge soepel moet verlaten, wat circulatie rond vleugel en lift bepaalt."
            }
        },
        {
            question: {
                en: "How does brake cooling duct sizing affect aerodynamics?",
                es: "¿Cómo afecta el tamaño del conducto de enfriamiento de frenos a la aerodinámica?",
                de: "Wie beeinflusst Bremskühlkanal-Größe die Aerodynamik?",
                nl: "Hoe beïnvloedt remkoeling kanaalgrootte de aerodynamica?"
            },
            options: ["No aerodynamic effect", "Larger ducts cool better but increase drag; smaller ducts reduce drag but risk overheating", "Only cooling matters", "Always bigger is better"],
            correct: 1,
            explanation: {
                en: "Brake cooling is a critical aero-thermal compromise: larger ducts cool brakes but add drag; teams minimize duct size for aero efficiency.",
                es: "Enfriamiento de frenos es compromiso aero-térmico crítico: conductos grandes enfrían pero añaden resistencia; equipos minimizan tamaño.",
                de: "Bremskühlung ist kritischer Aero-Thermo-Kompromiss: größere Kanäle kühlen besser aber erhöhen Widerstand; Teams minimieren Größe.",
                nl: "Remkoeling is kritische aero-thermische compromis: grotere kanalen koelen beter maar verhogen weerstand; teams minimaliseren kanaalgrootte voor aero-efficiëntie."
            }
        },
        {
            question: {
                en: "What is 'flow conditioning' and why is it important?",
                es: "¿Qué es el 'acondicionamiento de flujo' y por qué es importante?",
                de: "Was ist 'Flow Conditioning' und warum ist es wichtig?",
                nl: "Wat is 'flow conditioning' en waarom is dit belangrijk?"
            },
            options: ["Cleaning airflow", "Manipulating upstream flow to optimize performance of downstream components", "Temperature control", "Weight reduction"],
            correct: 1,
            explanation: {
                en: "Flow conditioning uses upstream elements (bargeboards, vanes) to manipulate airflow structure, optimizing conditions for floor/diffuser.",
                es: "El acondicionamiento de flujo usa elementos upstream para manipular estructura de flujo, optimizando condiciones para piso/difusor.",
                de: "Flow Conditioning nutzt vorgelagerte Elemente um Strömungsstruktur zu manipulieren und Bedingungen für Boden/Diffusor zu optimieren.",
                nl: "Flow conditioning gebruikt upstream elementen (bargeboards, vanes) om luchtstroom structuur te manipuleren, wat condities voor vloer/diffuser optimaliseert."
            }
        },
        {
            question: {
                en: "What is the relationship between drag coefficient (Cd) and downforce coefficient (Cl)?",
                es: "¿Cuál es la relación entre coeficiente de resistencia (Cd) y coeficiente de carga aerodinámica (Cl)?",
                de: "Was ist die Beziehung zwischen Widerstandsbeiwert (Cd) und Abtriebsbeiwert (Cl)?",
                nl: "Wat is de relatie tussen weerstandscoëfficiënt (Cd) en neerwaartse druk coëfficiënt (Cl)?"
            },
            options: ["No relationship", "Generally trade-off: increasing Cl typically increases Cd (more downforce = more drag)", "Always proportional", "Independent always"],
            correct: 1,
            explanation: {
                en: "Downforce and drag are generally coupled: adding downforce typically increases drag. Teams optimize the Cl/Cd ratio (efficiency).",
                es: "Carga y resistencia están generalmente acopladas: agregar carga típicamente aumenta resistencia. Equipos optimizan relación Cl/Cd.",
                de: "Abtrieb und Widerstand sind meist gekoppelt: mehr Abtrieb erhöht typisch Widerstand. Teams optimieren Cl/Cd-Verhältnis.",
                nl: "Neerwaartse druk en weerstand zijn over het algemeen gekoppeld: toevoegen van downforce verhoogt typisch weerstand. Teams optimaliseren Cl/Cd ratio (efficiëntie)."
            }
        },
        {
            question: {
                en: "How does suspension kinematics affect aerodynamic platform?",
                es: "¿Cómo afecta la cinemática de suspensión a la plataforma aerodinámica?",
                de: "Wie beeinflusst Fahrwerkskinematik die aerodynamische Plattform?",
                nl: "Hoe beïnvloedt ophanging kinematica het aerodynamisch platform?"
            },
            options: ["No effect", "Suspension geometry changes ride height, pitch, and roll under load, directly affecting aero", "Only affects comfort", "Random relationship"],
            correct: 1,
            explanation: {
                en: "Suspension kinematics determine how car's aerodynamic platform (ride height, pitch, roll) changes under cornering, braking, and acceleration.",
                es: "Cinemática de suspensión determina cómo cambia plataforma aerodinámica del coche bajo curvas, frenado y aceleración.",
                de: "Fahrwerkskinematik bestimmt, wie sich aerodynamische Plattform (Fahrhöhe, Nick-, Rollwinkel) unter Kurven, Bremsen ändert.",
                nl: "Ophanging kinematica bepaalt hoe auto's aerodynamisch platform (rijhoogte, pitch, roll) verandert onder bochten, remmen en acceleratie."
            }
        },
        {
            question: {
                en: "What is 'aero elasticity' and why does it matter in F1?",
                es: "¿Qué es la 'aeroelasticidad' y por qué importa en F1?",
                de: "Was ist 'Aeroelastizität' und warum ist sie in F1 wichtig?",
                nl: "Wat is 'aero-elasticiteit' en waarom is dit belangrijk in F1?"
            },
            options: ["Tire flex only", "Interaction between aerodynamic loads and structural deflection of components", "Engine vibration", "Not relevant"],
            correct: 1,
            explanation: {
                en: "Aeroelasticity is coupling between aero loads and structural flex; teams design components to flex advantageously within regulations.",
                es: "Aeroelasticidad es acoplamiento entre cargas aero y flexión estructural; equipos diseñan componentes para flexionar ventajosamente.",
                de: "Aeroelastizität ist Kopplung zwischen Aero-Lasten und struktureller Flexion; Teams designen Komponenten für vorteilhafte Flexion.",
                nl: "Aero-elasticiteit is koppeling tussen aero-belastingen en structurele deflectie; teams ontwerpen componenten om voordelig te buigen binnen reglementen."
            }
        },
        {
            question: {
                en: "How do teams use 'aero sensors' during practice sessions?",
                es: "¿Cómo usan los equipos 'sensores aerodinámicos' durante sesiones de práctica?",
                de: "Wie nutzen Teams 'Aero-Sensoren' während Trainingssitzungen?",
                nl: "Hoe gebruiken teams 'aero-sensoren' tijdens vrije trainingen?"
            },
            options: ["Not allowed", "Pitot tubes, pressure sensors, and rakes measure real-world flow for correlation", "Only for decoration", "Random placement"],
            correct: 1,
            explanation: {
                en: "Teams use pitot tubes, pressure taps, and sensor rakes during practice to measure actual airflow and validate CFD/wind tunnel predictions.",
                es: "Equipos usan tubos pitot, tomas de presión y rakes de sensores para medir flujo real y validar predicciones CFD/túnel.",
                de: "Teams nutzen Pitot-Rohre, Drucksensoren und Sensor-Rakes zum Messen echter Strömung und Validieren von CFD/Windkanal-Vorhersagen.",
                nl: "Teams gebruiken pitot tubes, druksensoren en sensor rakes tijdens trainingen om werkelijke luchtstroom te meten en CFD/windtunnel voorspellingen te valideren."
            }
        },
        {
            question: {
                en: "What is 'blockage correction' in wind tunnel testing?",
                es: "¿Qué es la 'corrección de bloqueo' en pruebas de túnel de viento?",
                de: "Was ist 'Blockierungskorrektur' bei Windkanaltests?",
                nl: "Wat is 'blokkering correctie' in windtunnel testen?"
            },
            options: ["Not needed", "Correction for model blocking tunnel flow, affecting pressure and velocity readings", "Cooling adjustment", "Weight correction"],
            correct: 1,
            explanation: {
                en: "Blockage correction accounts for model blocking tunnel cross-section, artificially increasing velocity and pressures; must be corrected for accuracy.",
                es: "Corrección de bloqueo compensa que modelo bloquea sección de túnel, aumentando artificialmente velocidad y presiones.",
                de: "Blockierungskorrektur berücksichtigt, dass Modell Tunnelquerschnitt blockiert und Geschwindigkeit/Druck künstlich erhöht.",
                nl: "Blokkering correctie compenseert voor model dat tunnel doorsnede blokkeert, wat kunstmatig snelheid en drukken verhoogt; moet gecorrigeerd voor nauwkeurigheid."
            }
        },
        {
            question: {
                en: "How does ambient temperature affect aerodynamic testing?",
                es: "¿Cómo afecta la temperatura ambiente a las pruebas aerodinámicas?",
                de: "Wie beeinflusst Umgebungstemperatur aerodynamische Tests?",
                nl: "Hoe beïnvloedt omgevingstemperatuur aerodynamische testen?"
            },
            options: ["No effect on aero", "Temperature changes air density, affecting Reynolds number and dynamic pressure", "Only affects engines", "Random effect"],
            correct: 1,
            explanation: {
                en: "Temperature affects air density and viscosity, changing Reynolds number, dynamic pressure, and ultimately aerodynamic forces measured.",
                es: "Temperatura afecta densidad y viscosidad del aire, cambiando número de Reynolds, presión dinámica y fuerzas aerodinámicas medidas.",
                de: "Temperatur beeinflusst Luftdichte und Viskosität, ändert Reynolds-Zahl, dynamischen Druck und gemessene aerodynamische Kräfte.",
                nl: "Temperatuur beïnvloedt luchtdichtheid en viscositeit, wat Reynolds-getal, dynamische druk en uiteindelijk gemeten aerodynamische krachten verandert."
            }
        },
        {
            question: {
                en: "What is the principle behind 'vortex generators' on F1 cars and their optimal placement strategy?",
                es: "¿Cuál es el principio detrás de los 'generadores de vórtice' en autos F1 y su estrategia óptima de colocación?",
                de: "Was ist das Prinzip hinter 'Wirbelgeneratoren' an F1-Autos und ihre optimale Platzierungsstrategie?",
                nl: "Wat is het principe achter 'vortex generators' op F1 auto's en hun optimale plaatsing strategie?"
            },
            options: [
                {
                    en: "Create small vortices that energize boundary layer, delaying separation and allowing steeper surface angles",
                    es: "Crear pequeños vórtices que energizan capa límite, retrasando separación y permitiendo ángulos de superficie más pronunciados",
                    de: "Kleine Wirbel erzeugen die Grenzschicht energetisieren, Ablösung verzögern und steilere Oberflächenwinkel ermöglichen",
                    nl: "Kleine vortices creëren die grenslaag energetiseren, scheiding vertragen en steilere oppervlakte hoeken toestaan"
                },
                {
                    en: "Reduce drag directly",
                    es: "Reducir resistencia directamente",
                    de: "Widerstand direkt reduzieren",
                    nl: "Weerstand direct verminderen"
                },
                {
                    en: "Cool brake ducts",
                    es: "Enfriar conductos de freno",
                    de: "Bremskanäle kühlen",
                    nl: "Rem kanalen koelen"
                },
                {
                    en: "Generate random turbulence",
                    es: "Generar turbulencia aleatoria",
                    de: "Zufällige Turbulenz erzeugen",
                    nl: "Willekeurige turbulentie genereren"
                }
            ],
            correct: 0,
            explanation: {
                en: "Vortex generators create small counter-rotating vortices that mix high-momentum freestream air into the boundary layer, energizing it and preventing flow separation. This allows designers to use more aggressive diffuser angles and surface curvatures. Optimal placement is just upstream of expected separation zones, typically 5-10 boundary layer thicknesses tall, spaced 3-5 heights apart at 15-20° angles to flow.",
                es: "Generadores de vórtice crean pequeños vórtices contra-rotativos que mezclan aire de flujo libre de alto momento en la capa límite, energizándola y previniendo separación de flujo. Esto permite diseñadores usar ángulos de difusor más agresivos y curvaturas de superficie. Colocación óptima es justo aguas arriba de zonas de separación esperadas, típicamente 5-10 espesores de capa límite de altura, espaciados 3-5 alturas aparte a ángulos 15-20° al flujo.",
                de: "Wirbelgeneratoren erzeugen kleine gegenrotierende Wirbel die hochmomentige Freistrom-Luft in Grenzschicht mischen, sie energetisieren und Strömungsablösung verhindern. Dies erlaubt Designern aggressivere Diffusor-Winkel und Oberflächenkrümmungen. Optimale Platzierung ist stromaufwärts erwarteter Ablösungszonen, typisch 5-10 Grenzschicht-Dicken hoch, 3-5 Höhen auseinander in 15-20° Winkeln zur Strömung.",
                nl: "Vortex generators creëren kleine tegen-roterende vortices die hoog-momentum vrije stroom lucht in de grenslaag mengen, het energetiserend en stroom scheiding voorkomend. Dit staat ontwerpers toe agressievere diffusor hoeken en oppervlakte krommingen te gebruiken. Optimale plaatsing is net stroomopwaarts van verwachte scheidings zones, typisch 5-10 grenslaag diktes hoog, 3-5 hoogtes uit elkaar op 15-20° hoeken tot stroom."
            }
        }
    ];

    if (typeof window.questionsByLevel === 'undefined') {
        window.questionsByLevel = {};
    }
    if (typeof window.questionsByLevel['1 F1'] === 'undefined') {
        window.questionsByLevel['1 F1'] = {};
    }
    if (typeof window.questionsByLevel['1 F1']['Auto-innovaties'] === 'undefined') {
        window.questionsByLevel['1 F1']['Auto-innovaties'] = {};
    }
    window.questionsByLevel['1 F1']['Auto-innovaties']['level10'] = level10Questions;
})();
