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
        },
        {
            question: {
                en: "What is the maximum energy storage capacity of the Energy Store?",
                es: "¿Cuál es la capacidad máxima de almacenamiento de energía del Energy Store?",
                de: "Was ist die maximale Energiespeicherkapazität des Energy Store?",
                nl: "Wat is de maximale energieopslagcapaciteit van de Energy Store?"
            },
            options: ["2 MJ", "4 MJ", "6 MJ", "8 MJ"],
            correct: 1,
            explanation: {
                en: "The Energy Store can hold a maximum of 4 megajoules of electrical energy at any given time.",
                es: "El Energy Store puede contener un máximo de 4 megajulios de energía eléctrica en cualquier momento.",
                de: "Der Energy Store kann maximal 4 Megajoule elektrische Energie zu jedem Zeitpunkt speichern.",
                nl: "De Energy Store kan maximaal 4 megajoules elektrische energie bevatten op elk gegeven moment."
            }
        },
        {
            question: {
                en: "What is Jet Ignition technology?",
                es: "¿Qué es la tecnología Jet Ignition?",
                de: "Was ist Jet-Ignition-Technologie?",
                nl: "Wat is Jet Ignition technologie?"
            },
            options: ["Fuel injection system", "Pre-chamber combustion creating plasma jets", "Turbocharger type", "Spark plug design"],
            correct: 1,
            explanation: {
                en: "Jet Ignition uses pre-chambers to create multiple plasma jets that ignite the main combustion chamber extremely rapidly.",
                es: "Jet Ignition usa precámaras para crear múltiples chorros de plasma que encienden la cámara principal extremadamente rápido.",
                de: "Jet Ignition nutzt Vorkammern um mehrere Plasmastrahlen zu erzeugen die Hauptkammer extrem schnell zünden.",
                nl: "Jet Ignition gebruikt voorkamers om meerdere plasmastralen te creëren die de hoofdverbrandingskamer extreem snel ontsteken."
            }
        },
        {
            question: {
                en: "How much power does the ICE produce in current F1 power units?",
                es: "¿Cuánta potencia produce el ICE en las unidades de potencia actuales de F1?",
                de: "Wie viel Leistung produziert der Verbrennungsmotor in aktuellen F1-Antrieben?",
                nl: "Hoeveel vermogen produceert de ICE in huidige F1 aandrijfeenheden?"
            },
            options: ["650 HP", "750 HP", "850 HP", "950 HP"],
            correct: 2,
            explanation: {
                en: "The internal combustion engine produces approximately 850 horsepower, with MGU-K adding another 160 HP for total ~1000 HP.",
                es: "El motor de combustión interna produce aproximadamente 850 caballos, con MGU-K añadiendo otros 160 para total ~1000.",
                de: "Der Verbrennungsmotor produziert etwa 850 PS, MGU-K fügt weitere 160 PS für insgesamt ~1000 PS hinzu.",
                nl: "De verbrandingsmotor produceert ongeveer 850 pk, met MGU-K die nog eens 160 pk toevoegt voor totaal ~1000 pk."
            }
        },
        {
            question: {
                en: "What is the compression ratio limit in F1 engines?",
                es: "¿Cuál es el límite de relación de compresión en motores de F1?",
                de: "Was ist das Verdichtungsverhältnis-Limit in F1-Motoren?",
                nl: "Wat is de compressieverhouding limiet in F1-motoren?"
            },
            options: ["10:1", "12:1", "18:1 maximum", "No limit"],
            correct: 2,
            explanation: {
                en: "F1 engines are limited to a maximum compression ratio of 18:1 to control power output and promote efficiency.",
                es: "Los motores de F1 están limitados a una relación de compresión máxima de 18:1 para controlar potencia y promover eficiencia.",
                de: "F1-Motoren sind auf ein maximales Verdichtungsverhältnis von 18:1 begrenzt um Leistung zu kontrollieren.",
                nl: "F1-motoren zijn beperkt tot een maximale compressieverhouding van 18:1 om vermogen te controleren en efficiëntie te bevorderen."
            }
        },
        {
            question: {
                en: "What is Turbulent Jet Ignition (TJI)?",
                es: "¿Qué es la Ignición por Chorro Turbulento (TJI)?",
                de: "Was ist Turbulent Jet Ignition (TJI)?",
                nl: "Wat is Turbulent Jet Ignition (TJI)?"
            },
            options: ["Fuel injection", "Pre-chamber creating turbulent flame jets for ultra-lean combustion", "Turbocharger boost", "Exhaust system"],
            correct: 1,
            explanation: {
                en: "TJI creates turbulent flame jets from a pre-chamber enabling ultra-lean combustion for maximum efficiency.",
                es: "TJI crea chorros de llama turbulentos desde precámara permitiendo combustión ultra pobre para máxima eficiencia.",
                de: "TJI erzeugt turbulente Flammenstrahlen aus Vorkammer für ultra-magere Verbrennung und maximale Effizienz.",
                nl: "TJI creëert turbulente vlamstralen vanuit een voorkamer wat ultra-magere verbranding mogelijk maakt voor maximale efficiëntie."
            }
        },
        {
            question: {
                en: "How is the Control Electronics (ECU) standardized?",
                es: "¿Cómo se estandariza la Electrónica de Control (ECU)?",
                de: "Wie ist die Steuerungselektronik (ECU) standardisiert?",
                nl: "Hoe is de besturingselektronica (ECU) gestandaardiseerd?"
            },
            options: ["Each team designs own", "McLaren Applied Technologies supplies standard ECU to all", "FIA provides ECU", "Engine manufacturers provide"],
            correct: 1,
            explanation: {
                en: "All teams must use the same standard ECU supplied by McLaren Applied Technologies to ensure fairness.",
                es: "Todos los equipos deben usar la misma ECU estándar suministrada por McLaren Applied Technologies para asegurar equidad.",
                de: "Alle Teams müssen dieselbe Standard-ECU von McLaren Applied Technologies verwenden für Fairness.",
                nl: "Alle teams moeten dezelfde standaard ECU gebruiken geleverd door McLaren Applied Technologies om eerlijkheid te waarborgen."
            }
        },
        {
            question: {
                en: "What is the V angle of F1 V6 engines?",
                es: "¿Cuál es el ángulo V de los motores V6 de F1?",
                de: "Was ist der V-Winkel von F1-V6-Motoren?",
                nl: "Wat is de V-hoek van F1 V6-motoren?"
            },
            options: ["60 degrees", "90 degrees", "120 degrees", "Teams choose"],
            correct: 1,
            explanation: {
                en: "F1 V6 turbo hybrid engines must have a 90-degree V angle as specified in the regulations.",
                es: "Los motores V6 turbo híbridos de F1 deben tener un ángulo V de 90 grados según las regulaciones.",
                de: "F1-V6-Turbo-Hybridmotoren müssen einen 90-Grad-V-Winkel haben laut Reglement.",
                nl: "F1 V6 turbo hybride motoren moeten een 90-graden V-hoek hebben zoals gespecificeerd in de reglementen."
            }
        },
        {
            question: {
                en: "What is the minimum weight of the complete power unit?",
                es: "¿Cuál es el peso mínimo de la unidad de potencia completa?",
                de: "Was ist das Mindestgewicht der kompletten Antriebseinheit?",
                nl: "Wat is het minimumgewicht van de complete aandrijfeenheid?"
            },
            options: ["95 kg", "135 kg", "145 kg", "No minimum"],
            correct: 2,
            explanation: {
                en: "The complete power unit including ICE, turbo, MGU-K, MGU-H, and Energy Store must weigh at least 145 kg.",
                es: "La unidad de potencia completa incluyendo ICE, turbo, MGU-K, MGU-H y Energy Store debe pesar al menos 145 kg.",
                de: "Die komplette Antriebseinheit mit Verbrennungsmotor, Turbo, MGU-K, MGU-H und Energy Store muss mindestens 145 kg wiegen.",
                nl: "De complete aandrijfeenheid inclusief ICE, turbo, MGU-K, MGU-H en Energy Store moet minstens 145 kg wegen."
            }
        },
        {
            question: {
                en: "How many fuel injectors per cylinder are allowed?",
                es: "¿Cuántos inyectores de combustible por cilindro están permitidos?",
                de: "Wie viele Kraftstoffinjektoren pro Zylinder sind erlaubt?",
                nl: "Hoeveel brandstofinjectoren per cilinder zijn toegestaan?"
            },
            options: ["One injector maximum", "Two injectors allowed", "Three injectors", "No limit"],
            correct: 0,
            explanation: {
                en: "Regulations allow only one fuel injector per cylinder, positioned to inject directly into the combustion chamber.",
                es: "Las regulaciones permiten solo un inyector de combustible por cilindro, posicionado para inyectar directamente en la cámara.",
                de: "Regeln erlauben nur einen Kraftstoffinjektor pro Zylinder, positioniert für direkte Einspritzung.",
                nl: "Reglementen staan slechts één brandstofinjector per cilinder toe, gepositioneerd om direct in de verbrandingskamer te injecteren."
            }
        },
        {
            question: {
                en: "What is the maximum RPM limit for V6 turbo engines?",
                es: "¿Cuál es el límite máximo de RPM para motores V6 turbo?",
                de: "Was ist das maximale Drehzahllimit für V6-Turbomotoren?",
                nl: "Wat is de maximale RPM-limiet voor V6 turbo motoren?"
            },
            options: ["12,000 RPM", "15,000 RPM", "18,000 RPM", "No limit"],
            correct: 1,
            explanation: {
                en: "V6 turbo hybrid engines are limited to a maximum of 15,000 RPM to control costs and stress on components.",
                es: "Los motores V6 turbo híbridos están limitados a un máximo de 15,000 RPM para controlar costos y estrés.",
                de: "V6-Turbo-Hybridmotoren sind auf maximal 15.000 U/min begrenzt um Kosten und Belastung zu kontrollieren.",
                nl: "V6 turbo hybride motoren zijn beperkt tot maximaal 15.000 RPM om kosten en stress op componenten te beheersen."
            }
        },
        {
            question: {
                en: "What is the bore and stroke configuration mandated?",
                es: "¿Cuál es la configuración de diámetro y carrera obligatoria?",
                de: "Welche Bohrung-Hub-Konfiguration ist vorgeschrieben?",
                nl: "Wat is de voorgeschreven boring- en slagconfiguratie?"
            },
            options: ["Teams choose freely", "80mm bore, 53mm stroke maximum", "100mm bore, 80mm stroke", "No regulations"],
            correct: 1,
            explanation: {
                en: "F1 regulations mandate a maximum bore of 80mm and maximum stroke of 53mm for the V6 engines.",
                es: "Las regulaciones de F1 exigen un diámetro máximo de 80mm y carrera máxima de 53mm para motores V6.",
                de: "F1-Regeln schreiben maximal 80mm Bohrung und 53mm Hub für V6-Motoren vor.",
                nl: "F1-reglementen verplichten een maximale boring van 80mm en maximale slag van 53mm voor de V6-motoren."
            }
        },
        {
            question: {
                en: "What is direct fuel injection pressure in F1?",
                es: "¿Cuál es la presión de inyección directa de combustible en F1?",
                de: "Was ist der Direkteinspritz-Kraftstoffdruck in F1?",
                nl: "Wat is de directe brandstof injectiedruk in F1?"
            },
            options: ["50 bar", "200 bar", "500 bar maximum", "1000 bar"],
            correct: 2,
            explanation: {
                en: "Fuel injection pressure is limited to a maximum of 500 bar to control combustion characteristics.",
                es: "La presión de inyección está limitada a un máximo de 500 bar para controlar características de combustión.",
                de: "Kraftstoffeinspritzdruck ist auf maximal 500 bar begrenzt um Verbrennungscharakteristik zu kontrollieren.",
                nl: "Brandstof injectiedruk is beperkt tot maximaal 500 bar om verbrandingskenmerken te controleren."
            }
        },
        {
            question: {
                en: "How many spark plugs per cylinder are allowed?",
                es: "¿Cuántas bujías por cilindro están permitidas?",
                de: "Wie viele Zündkerzen pro Zylinder sind erlaubt?",
                nl: "Hoeveel bougies per cilinder zijn toegestaan?"
            },
            options: ["One maximum", "Two allowed", "Three allowed", "No limit"],
            correct: 0,
            explanation: {
                en: "Each cylinder can have only one spark plug, though pre-chamber ignition systems are permitted.",
                es: "Cada cilindro puede tener solo una bujía, aunque se permiten sistemas de ignición de precámara.",
                de: "Jeder Zylinder darf nur eine Zündkerze haben, obwohl Vorkammer-Zündsysteme erlaubt sind.",
                nl: "Elke cilinder mag slechts één bougie hebben, hoewel voorkamer ontstekingssystemen zijn toegestaan."
            }
        },
        {
            question: {
                en: "What is the purpose of Anti-Lag systems in F1?",
                es: "¿Cuál es el propósito de los sistemas Anti-Lag en F1?",
                de: "Was ist der Zweck von Anti-Lag-Systemen in F1?",
                nl: "Wat is het doel van Anti-Lag systemen in F1?"
            },
            options: ["Reduce weight", "Maintain turbo speed between shifts and off-throttle", "Cool engine", "Improve fuel economy"],
            correct: 1,
            explanation: {
                en: "Anti-lag systems maintain turbo speed during gear changes and off-throttle moments to eliminate response lag.",
                es: "Los sistemas anti-lag mantienen velocidad del turbo durante cambios de marcha para eliminar retraso de respuesta.",
                de: "Anti-Lag-Systeme halten Turbodrehzahl bei Schaltvorgängen aufrecht um Reaktionsverzögerung zu eliminieren.",
                nl: "Anti-lag systemen houden turbosnelheid vast tijdens schakelmomenten om reactielag te elimineren."
            }
        },
        {
            question: {
                en: "What cooling system is used for the Energy Store?",
                es: "¿Qué sistema de enfriamiento se usa para el Energy Store?",
                de: "Welches Kühlsystem wird für den Energy Store verwendet?",
                nl: "Welk koelsysteem wordt gebruikt voor de Energy Store?"
            },
            options: ["Air cooling only", "Liquid cooling with dedicated heat exchangers", "No cooling needed", "Phase-change cooling"],
            correct: 1,
            explanation: {
                en: "The Energy Store uses sophisticated liquid cooling with dedicated heat exchangers to manage high heat loads.",
                es: "El Energy Store usa enfriamiento líquido sofisticado con intercambiadores de calor dedicados para gestionar altas cargas térmicas.",
                de: "Der Energy Store nutzt ausgeklügelte Flüssigkeitskühlung mit dedizierten Wärmetauschern für hohe Wärmelasten.",
                nl: "De Energy Store gebruikt geavanceerde vloeistofkoeling met toegewijde warmtewisselaars om hoge warmtebelastingen te beheren."
            }
        },
        {
            question: {
                en: "What is variable trumpet length technology?",
                es: "¿Qué es la tecnología de longitud variable de trompeta?",
                de: "Was ist variable Saugrohr-Längen-Technologie?",
                nl: "Wat is variabele trompetlengte technologie?"
            },
            options: ["Exhaust tuning", "Intake runners that change length for optimal resonance at different RPM", "Turbo adjustment", "Fuel system"],
            correct: 1,
            explanation: {
                en: "Variable trumpet length adjusts intake runner length to optimize acoustic resonance and charging efficiency across RPM range.",
                es: "La longitud variable de trompeta ajusta longitud de conductos de admisión para optimizar resonancia acústica en rango de RPM.",
                de: "Variable Saugrohr-Länge passt Ansaugkanallänge an um akustische Resonanz über Drehzahlbereich zu optimieren.",
                nl: "Variabele trompetlengte past inlaatkanalenlengte aan om akoestische resonantie en laadefficiëntie over RPM-bereik te optimaliseren."
            }
        },
        {
            question: {
                en: "How does exhaust energy recovery work with MGU-H?",
                es: "¿Cómo funciona la recuperación de energía de escape con MGU-H?",
                de: "Wie funktioniert Abgasenergie-Rückgewinnung mit MGU-H?",
                nl: "Hoe werkt uitlaatgas energie terugwinning met MGU-H?"
            },
            options: ["Captures heat only", "Converts turbine shaft rotation to electrical energy", "Compresses exhaust", "Redirects exhaust"],
            correct: 1,
            explanation: {
                en: "MGU-H connects to the turbo shaft between compressor and turbine, converting rotational energy to electricity.",
                es: "MGU-H se conecta al eje del turbo entre compresor y turbina, convirtiendo energía rotacional en electricidad.",
                de: "MGU-H verbindet sich mit Turbowelle zwischen Kompressor und Turbine und wandelt Rotationsenergie in Strom um.",
                nl: "MGU-H verbindt met de turboas tussen compressor en turbine, wat rotatie-energie omzet in elektriciteit."
            }
        },
        {
            question: {
                en: "What is the purpose of the wastegate in F1 turbo systems?",
                es: "¿Cuál es el propósito de la wastegate en sistemas turbo de F1?",
                de: "Was ist der Zweck des Wastegate in F1-Turbosystemen?",
                nl: "Wat is het doel van de wastegate in F1 turbosystemen?"
            },
            options: ["Waste disposal", "Control boost pressure by bypassing exhaust around turbine", "Cool the turbo", "Reduce noise"],
            correct: 1,
            explanation: {
                en: "The wastegate controls boost pressure by allowing exhaust to bypass the turbine when maximum boost is reached.",
                es: "La wastegate controla presión de turbo permitiendo que escape pase por alto la turbina cuando se alcanza turbo máximo.",
                de: "Das Wastegate kontrolliert Ladedruck indem es Abgas an der Turbine vorbei leitet wenn maximaler Ladedruck erreicht ist.",
                nl: "De wastegate regelt turbodruk door uitlaatgas langs de turbine te laten gaan wanneer maximale boost is bereikt."
            }
        },
        {
            question: {
                en: "What is knock detection and prevention in F1 engines?",
                es: "¿Qué es la detección y prevención de detonación en motores de F1?",
                de: "Was ist Klopferkennung und -vermeidung in F1-Motoren?",
                nl: "Wat is klopdetectie en -preventie in F1-motoren?"
            },
            options: ["Structural monitoring", "Detecting abnormal combustion and adjusting timing/mixture to prevent damage", "Vibration damping", "Noise reduction"],
            correct: 1,
            explanation: {
                en: "Advanced sensors detect combustion knock, triggering immediate adjustments to ignition timing and fuel mixture to prevent engine damage.",
                es: "Sensores avanzados detectan detonación, activando ajustes inmediatos de tiempo de ignición y mezcla para prevenir daño.",
                de: "Fortschrittliche Sensoren erkennen Klopfen und lösen sofortige Anpassungen von Zündzeitpunkt und Gemisch aus.",
                nl: "Geavanceerde sensoren detecteren verbrandingsklop, wat directe aanpassingen van ontstekingstiming en brandstofmengsel triggert om motorschade te voorkomen."
            }
        },
        {
            question: {
                en: "What is the purpose of 'porpoising' countermeasures introduced in modern ground effect cars?",
                es: "¿Cuál es el propósito de las contramedidas contra el 'porpoising' introducidas en autos modernos de efecto suelo?",
                de: "Was ist der Zweck von 'Porpoising'-Gegenmaßnahmen in modernen Bodeneffekt-Autos?",
                nl: "Wat is het doel van 'porpoising' tegenmaatregelen geïntroduceerd in moderne grondeffect auto's?"
            },
            options: [
                { en: "Prevent bouncing oscillations caused by ground effect floors stalling and reattaching", es: "Prevenir oscilaciones de rebote causadas por pisos de efecto suelo que se detienen y vuelven a adherirse", de: "Verhinderung von Sprungoszillationen durch Bodeneffekt-Böden die abreißen und wieder ansetzen", nl: "Voorkomen van stuiterende oscillaties veroorzaakt door grondeffect vloeren die stallen en opnieuw hechten" },
                { en: "Improve straight-line speed", es: "Mejorar velocidad en recta", de: "Verbesserung der Geraden-Geschwindigkeit", nl: "Verbeteren van rechte lijn snelheid" },
                { en: "Reduce tire wear", es: "Reducir desgaste de neumáticos", de: "Reduzierung des Reifenverschleißes", nl: "Verminderen van band slijtage" },
                { en: "Increase fuel efficiency", es: "Aumentar eficiencia de combustible", de: "Erhöhung der Kraftstoffeffizienz", nl: "Verhogen van brandstof efficiëntie" }
            ],
            correct: 0,
            explanation: {
                en: "Porpoising is a bouncing phenomenon where ground effect floors alternately stall (losing downforce, car rises) and reattach (gaining downforce, car drops) creating violent oscillations. Teams use flexible floors, ride height sensors, and suspension adjustments to minimize this effect introduced with 2022 regulations.",
                es: "Porpoising es fenómeno de rebote donde pisos de efecto suelo alternativamente se detienen (perdiendo carga, auto sube) y se vuelven a adherir (ganando carga, auto baja) creando oscilaciones violentas. Equipos usan pisos flexibles, sensores de altura y ajustes de suspensión para minimizar este efecto introducido con regulaciones 2022.",
                de: "Porpoising ist ein Sprungphänomen wo Bodeneffekt-Böden abwechselnd abreißen (Abtriebsverlust, Auto steigt) und wieder ansetzen (Abtriebsgewinn, Auto fällt) und gewaltsame Oszillationen erzeugen. Teams nutzen flexible Böden, Fahrhöhen-Sensoren und Fahrwerks-Anpassungen um diesen Effekt der 2022-Regulierung zu minimieren.",
                nl: "Porpoising is een stuiterfenomeen waar grondeffect vloeren afwisselend stallen (neerwaartse druk verliezend, auto stijgt) en opnieuw hechten (neerwaartse druk winnend, auto daalt) wat gewelddadige oscillaties creëert. Teams gebruiken flexibele vloeren, rijhoogte sensoren en ophanging aanpassingen om dit effect geïntroduceerd met 2022 regels te minimaliseren."
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
