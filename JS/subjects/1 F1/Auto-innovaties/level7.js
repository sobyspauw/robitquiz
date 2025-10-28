(function() {
    const level7Questions = [
        {
            question: {
                en: "How does MGU-H recover energy from the turbocharger?",
                es: "¿Cómo recupera energía el MGU-H del turbocompresor?",
                de: "Wie gewinnt MGU-H Energie vom Turbolader zurück?",
                nl: "Hoe wint MGU-H energie terug van de turbo?"
            },
            options: ["From exhaust heat", "By acting as generator driven by turbine shaft", "From engine vibrations", "From fuel combustion"],
            correct: 1,
            explanation: {
                en: "MGU-H acts as a generator connected to the turbo shaft, converting rotational energy from exhaust gases into electrical energy.",
                es: "MGU-H actúa como generador conectado al eje del turbo, convirtiendo energía rotacional de gases en energía eléctrica.",
                de: "MGU-H fungiert als Generator am Turbo-Schaft und wandelt Rotationsenergie von Abgasen in elektrische Energie um.",
                nl: "MGU-H werkt als generator verbonden met de turboas, wat rotatie-energie van uitlaatgassen omzet in elektrische energie."
            }
        },
        {
            question: {
                en: "What is the maximum MGU-K deployment power?",
                es: "¿Cuál es la potencia máxima de despliegue del MGU-K?",
                de: "Was ist die maximale MGU-K-Einsatzleistung?",
                nl: "Wat is het maximale MGU-K inzetvermogen?"
            },
            options: ["80 kW", "100 kW", "120 kW", "150 kW"],
            correct: 2,
            explanation: {
                en: "MGU-K can deploy a maximum of 120 kW (approximately 160 horsepower) of electrical power to the drivetrain.",
                es: "MGU-K puede desplegar un máximo de 120 kW (aproximadamente 160 caballos) de potencia eléctrica al tren motriz.",
                de: "MGU-K kann maximal 120 kW (etwa 160 PS) elektrische Leistung an den Antriebsstrang abgeben.",
                nl: "MGU-K kan maximaal 120 kW (ongeveer 160 pk) elektrisch vermogen leveren aan de aandrijflijn."
            }
        },
        {
            question: {
                en: "What is the total ERS energy per lap limit?",
                es: "¿Cuál es el límite total de energía ERS por vuelta?",
                de: "Was ist das maximale ERS-Energie-Limit pro Runde?",
                nl: "Wat is de totale ERS-energielimiet per ronde?"
            },
            options: ["2 MJ", "4 MJ", "6 MJ", "8 MJ"],
            correct: 1,
            explanation: {
                en: "The regulations limit ERS deployment to 4 megajoules (4 MJ) of energy per lap from the Energy Store.",
                es: "Las regulaciones limitan el despliegue de ERS a 4 megajulios (4 MJ) de energía por vuelta del Energy Store.",
                de: "Die Regeln begrenzen ERS-Einsatz auf 4 Megajoule (4 MJ) Energie pro Runde vom Energy Store.",
                nl: "De reglementen beperken ERS-inzet tot 4 megajoules (4 MJ) energie per ronde vanuit de Energy Store."
            }
        },
        {
            question: {
                en: "What battery chemistry is used in F1 Energy Stores?",
                es: "¿Qué química de batería se usa en los Energy Stores de F1?",
                de: "Welche Batteriechemie wird in F1 Energy Stores verwendet?",
                nl: "Welke batterijchemie wordt gebruikt in F1 Energy Stores?"
            },
            options: ["Lead-acid", "Lithium-ion", "Nickel-metal hydride", "Solid-state"],
            correct: 1,
            explanation: {
                en: "F1 uses advanced lithium-ion battery technology for the Energy Store, balancing power density with weight and safety.",
                es: "F1 usa tecnología avanzada de batería de iones de litio para el Energy Store, equilibrando densidad de potencia con peso.",
                de: "F1 nutzt fortschrittliche Lithium-Ionen-Batterietechnologie für den Energy Store mit Balance aus Leistungsdichte und Gewicht.",
                nl: "F1 gebruikt geavanceerde lithium-ion batterijtechnologie voor de Energy Store, wat vermogensdichtheid balanceert met gewicht en veiligheid."
            }
        },
        {
            question: {
                en: "What is the fuel flow restriction in F1?",
                es: "¿Cuál es la restricción de flujo de combustible en F1?",
                de: "Was ist die Kraftstoff-Durchfluss-Beschränkung in F1?",
                nl: "Wat is de brandstofstroombeperking in F1?"
            },
            options: ["80 kg/hour", "100 kg/hour", "120 kg/hour", "No restriction"],
            correct: 1,
            explanation: {
                en: "The maximum fuel flow rate is restricted to 100 kilograms per hour at any RPM, limiting power output.",
                es: "El flujo máximo de combustible está restringido a 100 kilogramos por hora a cualquier RPM, limitando potencia.",
                de: "Die maximale Kraftstoffdurchflussrate ist auf 100 Kilogramm pro Stunde bei jeder Drehzahl begrenzt.",
                nl: "De maximale brandstofstroomsnelheid is beperkt tot 100 kilogram per uur bij elk toerental, wat vermogen beperkt."
            }
        },
        {
            question: {
                en: "What is Mercedes' split turbo design?",
                es: "¿Qué es el diseño de turbo dividido de Mercedes?",
                de: "Was ist Mercedes' Split-Turbo-Design?",
                nl: "Wat is Mercedes' split turbo-ontwerp?"
            },
            options: ["Two separate turbos", "Compressor and turbine separated with MGU-H between", "Turbo that splits exhaust flow", "Variable geometry turbo"],
            correct: 1,
            explanation: {
                en: "Mercedes places the compressor at the front and turbine at the rear with MGU-H in between, improving packaging and cooling.",
                es: "Mercedes coloca el compresor al frente y la turbina atrás con MGU-H en medio, mejorando empaquetado y enfriamiento.",
                de: "Mercedes platziert Kompressor vorn und Turbine hinten mit MGU-H dazwischen für besseres Packaging und Kühlung.",
                nl: "Mercedes plaatst de compressor vooraan en turbine achteraan met MGU-H ertussen, wat verpakking en koeling verbetert."
            }
        },
        {
            question: {
                en: "What is pre-chamber ignition?",
                es: "¿Qué es la ignición de precámara?",
                de: "Was ist Vorkammer-Zündung?",
                nl: "Wat is voorontsteking?"
            },
            options: ["Early ignition timing", "Small chamber where ignition starts before main combustion", "Double spark plugs", "Compression ignition"],
            correct: 1,
            explanation: {
                en: "Pre-chamber ignition uses a small chamber where combustion starts, creating multiple flame jets for faster, more efficient burning.",
                es: "La ignición de precámara usa una pequeña cámara donde comienza la combustión, creando múltiples chorros de llama.",
                de: "Vorkammer-Zündung nutzt kleine Kammer, wo Verbrennung startet und mehrere Flammenstrahlen für schnellere Verbrennung erzeugt.",
                nl: "Voorontsteking gebruikt een kleine kamer waar verbranding start, wat meerdere vlamstralen creëert voor snellere, efficiëntere verbranding."
            }
        },
        {
            question: {
                en: "How much energy can MGU-K recover per lap?",
                es: "¿Cuánta energía puede recuperar el MGU-K por vuelta?",
                de: "Wie viel Energie kann MGU-K pro Runde zurückgewinnen?",
                nl: "Hoeveel energie kan MGU-K per ronde terugwinnen?"
            },
            options: ["1 MJ", "2 MJ", "4 MJ", "Unlimited"],
            correct: 1,
            explanation: {
                en: "MGU-K is limited to recovering 2 MJ of energy per lap from braking, though MGU-H recovery is unlimited.",
                es: "MGU-K está limitado a recuperar 2 MJ de energía por vuelta del frenado, aunque la recuperación MGU-H es ilimitada.",
                de: "MGU-K ist auf 2 MJ Energierückgewinnung pro Runde vom Bremsen begrenzt, MGU-H-Rückgewinnung ist unbegrenzt.",
                nl: "MGU-K is beperkt tot het terugwinnen van 2 MJ energie per ronde van remmen, hoewel MGU-H terugwinning onbeperkt is."
            }
        },
        {
            question: {
                en: "Is MGU-H energy recovery limited per lap?",
                es: "¿Está limitada la recuperación de energía del MGU-H por vuelta?",
                de: "Ist MGU-H-Energierückgewinnung pro Runde begrenzt?",
                nl: "Is MGU-H energieterugwinning beperkt per ronde?"
            },
            options: ["Limited to 2 MJ", "Limited to 4 MJ", "Unlimited", "Limited to 6 MJ"],
            correct: 2,
            explanation: {
                en: "MGU-H energy recovery from the turbocharger is unlimited, allowing continuous harvesting from exhaust gases.",
                es: "La recuperación de energía MGU-H del turbocompresor es ilimitada, permitiendo cosecha continua de gases de escape.",
                de: "MGU-H-Energierückgewinnung vom Turbolader ist unbegrenzt und erlaubt kontinuierliche Ernte von Abgasen.",
                nl: "MGU-H energieterugwinning van de turbo is onbeperkt, wat continue oogsten van uitlaatgassen mogelijk maakt."
            }
        },
        {
            question: {
                en: "What is the minimum weight of the Energy Store?",
                es: "¿Cuál es el peso mínimo del Energy Store?",
                de: "Was ist das Mindestgewicht des Energy Store?",
                nl: "Wat is het minimumgewicht van de Energy Store?"
            },
            options: ["15 kg", "20 kg", "25 kg", "No minimum"],
            correct: 1,
            explanation: {
                en: "The Energy Store (battery) must weigh at least 20 kg to prevent extreme lightweight designs that could be unsafe.",
                es: "El Energy Store debe pesar al menos 20 kg para prevenir diseños extremadamente ligeros que podrían ser inseguros.",
                de: "Der Energy Store muss mindestens 20 kg wiegen, um extrem leichte unsichere Designs zu verhindern.",
                nl: "De Energy Store moet minstens 20 kg wegen om extreem lichtgewicht ontwerpen te voorkomen die onveilig kunnen zijn."
            }
        },
        {
            question: {
                en: "How does MGU-H eliminate turbo lag?",
                es: "¿Cómo elimina el MGU-H el retraso del turbo?",
                de: "Wie eliminiert MGU-H Turbo-Lag?",
                nl: "Hoe elimineert MGU-H turbo-lag?"
            },
            options: ["By cooling the turbo", "By electrically spinning up the compressor instantly", "By increasing fuel flow", "By changing exhaust routing"],
            correct: 1,
            explanation: {
                en: "MGU-H can act as a motor to instantly spin up the turbocharger compressor, eliminating lag when throttle is applied.",
                es: "MGU-H puede actuar como motor para girar instantáneamente el compresor del turbo, eliminando retraso al acelerar.",
                de: "MGU-H kann als Motor den Turbolader-Kompressor sofort beschleunigen und eliminiert Lag beim Gasgeben.",
                nl: "MGU-H kan werken als motor om de turbo-compressor direct te laten draaien, wat lag elimineert wanneer gas wordt gegeven."
            }
        },
        {
            question: {
                en: "What advantage does split turbo design provide?",
                es: "¿Qué ventaja proporciona el diseño de turbo dividido?",
                de: "Welchen Vorteil bietet das Split-Turbo-Design?",
                nl: "Welk voordeel biedt het split turbo-ontwerp?"
            },
            options: ["More power", "Better cooling and lower center of gravity", "Lighter weight", "Easier maintenance"],
            correct: 1,
            explanation: {
                en: "Split turbo allows better cooling by separating hot turbine from compressor and lowers center of gravity by optimal placement.",
                es: "El turbo dividido permite mejor enfriamiento al separar turbina caliente del compresor y baja centro de gravedad.",
                de: "Split-Turbo ermöglicht bessere Kühlung durch Trennung heißer Turbine vom Kompressor und senkt Schwerpunkt.",
                nl: "Split turbo maakt betere koeling mogelijk door hete turbine van compressor te scheiden en verlaagt zwaartepunt door optimale plaatsing."
            }
        },
        {
            question: {
                en: "What is the fuel flow rate measured at?",
                es: "¿En qué se mide la tasa de flujo de combustible?",
                de: "Womit wird die Kraftstoffdurchflussrate gemessen?",
                nl: "Waarop wordt de brandstofstroomsnelheid gemeten?"
            },
            options: ["Every 1000 RPM", "Continuously at all RPM", "Only at max RPM", "At idle only"],
            correct: 1,
            explanation: {
                en: "Fuel flow is continuously monitored at all engine speeds to ensure the 100 kg/hour limit is never exceeded.",
                es: "El flujo de combustible se monitorea continuamente a todas las velocidades del motor para asegurar que nunca se exceda el límite.",
                de: "Kraftstoffdurchfluss wird kontinuierlich bei allen Drehzahlen überwacht, um Einhaltung des 100 kg/h-Limits sicherzustellen.",
                nl: "Brandstofstroom wordt continu gemonitord bij alle motorsnelheden om te verzekeren dat de 100 kg/uur limiet nooit wordt overschreden."
            }
        },
        {
            question: {
                en: "What is the voltage of the F1 Energy Store?",
                es: "¿Cuál es el voltaje del Energy Store de F1?",
                de: "Was ist die Spannung des F1 Energy Store?",
                nl: "Wat is de spanning van de F1 Energy Store?"
            },
            options: ["12V", "48V", "Up to 1000V", "400V fixed"],
            correct: 2,
            explanation: {
                en: "The Energy Store operates at high voltage up to 1000V to efficiently transfer large amounts of electrical power.",
                es: "El Energy Store opera a alto voltaje hasta 1000V para transferir eficientemente grandes cantidades de potencia eléctrica.",
                de: "Der Energy Store arbeitet mit Hochspannung bis 1000V für effizienten Transfer großer elektrischer Leistung.",
                nl: "De Energy Store werkt op hoge spanning tot 1000V om grote hoeveelheden elektrisch vermogen efficiënt over te dragen."
            }
        },
        {
            question: {
                en: "How does pre-chamber ignition improve efficiency?",
                es: "¿Cómo mejora la eficiencia la ignición de precámara?",
                de: "Wie verbessert Vorkammer-Zündung die Effizienz?",
                nl: "Hoe verbetert voorontsteking de efficiëntie?"
            },
            options: ["Uses less fuel", "Creates faster, more complete combustion with leaner mixtures", "Reduces weight", "Lowers emissions only"],
            correct: 1,
            explanation: {
                en: "Pre-chamber ignition creates multiple flame jets that ignite the main charge faster and more completely, allowing leaner mixtures.",
                es: "La ignición de precámara crea múltiples chorros de llama que encienden la carga principal más rápido y completamente.",
                de: "Vorkammer-Zündung erzeugt mehrere Flammenstrahlen für schnellere, vollständigere Verbrennung mit magereren Gemischen.",
                nl: "Voorontsteking creëert meerdere vlamstralen die de hoofdlading sneller en completer ontsteken, wat magerder mengsels mogelijk maakt."
            }
        },
        {
            question: {
                en: "Can MGU-H transfer energy directly to MGU-K?",
                es: "¿Puede el MGU-H transferir energía directamente al MGU-K?",
                de: "Kann MGU-H Energie direkt an MGU-K übertragen?",
                nl: "Kan MGU-H energie direct overdragen aan MGU-K?"
            },
            options: ["No, must go through Energy Store", "Yes, directly without limits", "Only during braking", "Only at low speeds"],
            correct: 1,
            explanation: {
                en: "MGU-H can transfer energy directly to MGU-K without limit, bypassing the Energy Store for immediate power boost.",
                es: "MGU-H puede transferir energía directamente al MGU-K sin límite, evitando el Energy Store para impulso inmediato.",
                de: "MGU-H kann Energie direkt an MGU-K ohne Limit übertragen und umgeht Energy Store für sofortigen Leistungsschub.",
                nl: "MGU-H kan energie direct overdragen aan MGU-K zonder limiet, wat de Energy Store omzeilt voor directe vermogensboost."
            }
        },
        {
            question: {
                en: "What is the thermal efficiency of modern F1 hybrid engines?",
                es: "¿Cuál es la eficiencia térmica de los motores híbridos modernos de F1?",
                de: "Was ist der thermische Wirkungsgrad moderner F1-Hybridmotoren?",
                nl: "Wat is de thermische efficiëntie van moderne F1 hybride motoren?"
            },
            options: ["30%", "40%", "Over 50%", "60%"],
            correct: 2,
            explanation: {
                en: "Modern F1 hybrid power units achieve over 50% thermal efficiency, among the highest of any combustion engine.",
                es: "Las unidades de potencia híbridas modernas de F1 logran más del 50% de eficiencia térmica, entre las más altas.",
                de: "Moderne F1-Hybrid-Antriebseinheiten erreichen über 50% thermischen Wirkungsgrad, unter den höchsten aller Verbrennungsmotoren.",
                nl: "Moderne F1 hybride aandrijfeenheden bereiken meer dan 50% thermische efficiëntie, een van de hoogste van alle verbrandingsmotoren."
            }
        },
        {
            question: {
                en: "How is the 100 kg/hour fuel flow limit enforced?",
                es: "¿Cómo se hace cumplir el límite de flujo de combustible de 100 kg/hora?",
                de: "Wie wird das 100 kg/h-Kraftstoffdurchfluss-Limit durchgesetzt?",
                nl: "Hoe wordt de 100 kg/uur brandstofstroomlimiet gehandhaafd?"
            },
            options: ["Team monitoring only", "FIA-mandated fuel flow sensor", "Random checks", "Driver reports"],
            correct: 1,
            explanation: {
                en: "An FIA-mandated fuel flow sensor continuously monitors and transmits fuel flow data to ensure compliance.",
                es: "Un sensor de flujo de combustible mandado por FIA monitorea continuamente y transmite datos para asegurar cumplimiento.",
                de: "Ein FIA-vorgeschriebener Kraftstoffdurchfluss-Sensor überwacht kontinuierlich und übermittelt Daten zur Einhaltung.",
                nl: "Een FIA-verplichte brandstofstroomsensor monitort continu en zendt brandstofstroomdata om naleving te verzekeren."
            }
        },
        {
            question: {
                en: "What happens to excess energy recovered beyond deployment limits?",
                es: "¿Qué sucede con el exceso de energía recuperada más allá de los límites de despliegue?",
                de: "Was passiert mit überschüssiger zurückgewonnener Energie über Einsatzlimits hinaus?",
                nl: "Wat gebeurt er met overtollige teruggewonnen energie boven inzetlimieten?"
            },
            options: ["Lost as heat", "Stored for next lap", "Automatically deployed", "Converted to fuel"],
            correct: 1,
            explanation: {
                en: "Excess recovered energy is stored in the Energy Store for use in subsequent laps, up to storage capacity limits.",
                es: "El exceso de energía recuperada se almacena en el Energy Store para uso en vueltas subsiguientes, hasta límites de capacidad.",
                de: "Überschüssige zurückgewonnene Energie wird im Energy Store für nachfolgende Runden gespeichert.",
                nl: "Overtollige teruggewonnen energie wordt opgeslagen in de Energy Store voor gebruik in volgende rondes, tot opslagcapaciteitslimieten."
            }
        },
        {
            question: {
                en: "Why is MGU-H being removed in 2026 regulations?",
                es: "¿Por qué se elimina el MGU-H en las regulaciones de 2026?",
                de: "Warum wird MGU-H in den 2026-Regeln entfernt?",
                nl: "Waarom wordt MGU-H verwijderd in de regels van 2026?"
            },
            options: ["Too unreliable", "Too complex and expensive with limited road relevance", "Not effective", "Safety concerns"],
            correct: 1,
            explanation: {
                en: "MGU-H is being removed because it's extremely complex, expensive, and has limited application to road car technology.",
                es: "MGU-H se elimina porque es extremadamente complejo, caro y tiene aplicación limitada a tecnología de coches de calle.",
                de: "MGU-H wird entfernt, weil es extrem komplex, teuer und für Straßenautos wenig relevant ist.",
                nl: "MGU-H wordt verwijderd omdat het extreem complex en duur is en beperkte toepassing heeft voor straatauto technologie."
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
    window.questionsByLevel['1 F1']['Auto-innovaties']['level7'] = level7Questions;
})();
