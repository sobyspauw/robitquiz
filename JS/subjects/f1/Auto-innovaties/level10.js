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
            options: ["Tire vibration", "Aerodynamic bouncing caused by ground effect stall-reattachment cycle", "Engine issue", "Suspension problem"],
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
