(function() {
    const level2Questions = [
        {
            question: {
                en: "What is a semi-automatic gearbox in Formula 1?",
                es: "¿Qué es una caja de cambios semiautomática en la Fórmula 1?",
                de: "Was ist ein halbautomatisches Getriebe in der Formel 1?",
                nl: "Wat is een semi-automatische versnellingsbak in Formule 1?"
            },
            options: ["Fully automatic transmission", "Manual clutch with automatic shifting", "Electronically controlled shifts without clutch pedal", "Voice-activated shifting"],
            correct: 2,
            explanation: {
                en: "Semi-automatic gearboxes use electronic control for gear changes without requiring a clutch pedal.",
                es: "Las cajas semiautomáticas usan control electrónico para cambios de marcha sin requerir pedal de embrague.",
                de: "Halbautomatische Getriebe nutzen elektronische Steuerung für Schaltvorgänge ohne Kupplungspedal.",
                nl: "Semi-automatische versnellingsbakken gebruiken elektronische besturing voor schakelen zonder koppelingspedaal."
            }
        },
        {
            question: {
                en: "What was active suspension in Formula 1?",
                es: "¿Qué era la suspensión activa en la Fórmula 1?",
                de: "Was war aktive Federung in der Formel 1?",
                nl: "Wat was actieve ophanging in Formule 1?"
            },
            options: ["Harder springs", "Computer-controlled hydraulic suspension", "Manual adjustment system", "Air suspension"],
            correct: 1,
            explanation: {
                en: "Active suspension used computer-controlled hydraulics to maintain optimal ride height and handling.",
                es: "La suspensión activa usaba hidráulica controlada por ordenador para mantener altura y manejo óptimos.",
                de: "Aktive Federung nutzte computergesteuerte Hydraulik für optimale Fahrhöhe und Handling.",
                nl: "Actieve ophanging gebruikte computergestuurde hydrauliek om optimale rijhoogte en handling te behouden."
            }
        },
        {
            question: {
                en: "When was ABS (Anti-lock Braking System) used in Formula 1?",
                es: "¿Cuándo se usó el ABS (Sistema de Frenos Antibloqueo) en la Fórmula 1?",
                de: "Wann wurde ABS (Antiblockiersystem) in der Formel 1 verwendet?",
                nl: "Wanneer werd ABS (Anti-blokkeer Remsysteem) gebruikt in Formule 1?"
            },
            options: ["Still in use today", "Briefly in early 1990s, then banned", "Never allowed", "Only in wet conditions"],
            correct: 1,
            explanation: {
                en: "ABS was briefly used in the early 1990s but was banned in 1994 along with other driver aids.",
                es: "El ABS se usó brevemente a principios de los 90 pero se prohibió en 1994 junto con otras ayudas al piloto.",
                de: "ABS wurde Anfang der 1990er kurz verwendet, aber 1994 zusammen mit anderen Fahrhilfen verboten.",
                nl: "ABS werd kort gebruikt in het begin van de jaren 90 maar werd in 1994 verboden samen met andere rijhulpsystemen."
            }
        },
        {
            question: {
                en: "What is traction control in Formula 1?",
                es: "¿Qué es el control de tracción en la Fórmula 1?",
                de: "Was ist Traktionskontrolle in der Formel 1?",
                nl: "Wat is tractiecontrole in Formule 1?"
            },
            options: ["Tire pressure adjustment", "System to prevent wheel spin under acceleration", "Enhanced braking system", "Aerodynamic adjustment"],
            correct: 1,
            explanation: {
                en: "Traction control prevents wheel spin by automatically adjusting engine power during acceleration.",
                es: "El control de tracción previene el patinaje de ruedas ajustando automáticamente la potencia del motor.",
                de: "Traktionskontrolle verhindert Radschlupf durch automatische Anpassung der Motorleistung.",
                nl: "Tractiecontrole voorkomt wielslip door automatisch het motorvermogen aan te passen tijdens acceleratie."
            }
        },
        {
            question: {
                en: "Where are paddle shifters located on an F1 steering wheel?",
                es: "¿Dónde están ubicadas las levas de cambio en un volante de F1?",
                de: "Wo befinden sich die Schaltpaddles am F1-Lenkrad?",
                nl: "Waar bevinden de paddle shifters zich op een F1-stuur?"
            },
            options: ["On the dashboard", "Behind the steering wheel", "On the side of the seat", "On the gear stick"],
            correct: 1,
            explanation: {
                en: "Paddle shifters are mounted behind the steering wheel, allowing drivers to shift while keeping hands on the wheel.",
                es: "Las levas están montadas detrás del volante, permitiendo cambiar sin quitar las manos del volante.",
                de: "Schaltpaddles sind hinter dem Lenkrad montiert, sodass Fahrer schalten können ohne die Hände zu entfernen.",
                nl: "Paddle shifters zijn achter het stuur gemonteerd, waardoor coureurs kunnen schakelen met hun handen aan het stuur."
            }
        },
        {
            question: {
                en: "How many different tire compounds does Pirelli typically bring to each race?",
                es: "¿Cuántos compuestos de neumáticos diferentes trae típicamente Pirelli a cada carrera?",
                de: "Wie viele verschiedene Reifenmischungen bringt Pirelli typischerweise zu jedem Rennen?",
                nl: "Hoeveel verschillende bandcompounds brengt Pirelli doorgaans mee naar elke race?"
            },
            options: ["2", "3", "4", "5"],
            correct: 1,
            explanation: {
                en: "Pirelli typically brings three different tire compounds to each race: soft, medium, and hard.",
                es: "Pirelli típicamente trae tres compuestos diferentes a cada carrera: blando, medio y duro.",
                de: "Pirelli bringt typischerweise drei verschiedene Mischungen zu jedem Rennen: weich, mittel und hart.",
                nl: "Pirelli brengt doorgaans drie verschillende compounds naar elke race: zacht, medium en hard."
            }
        },
        {
            question: {
                en: "Why was refueling banned in 2010?",
                es: "¿Por qué se prohibió el repostaje en 2010?",
                de: "Warum wurde das Nachtanken 2010 verboten?",
                nl: "Waarom werd tanken in 2010 verboden?"
            },
            options: ["Too expensive", "Safety concerns and cost reduction", "Environmental reasons only", "To make cars faster"],
            correct: 1,
            explanation: {
                en: "Refueling was banned primarily for safety reasons and to reduce costs for teams.",
                es: "El repostaje se prohibió principalmente por razones de seguridad y para reducir costos de los equipos.",
                de: "Nachtanken wurde hauptsächlich aus Sicherheitsgründen und zur Kostensenkung verboten.",
                nl: "Tanken werd verboden voornamelijk om veiligheidsredenen en om kosten voor teams te verlagen."
            }
        },
        {
            question: {
                en: "What type of hybrid engine was introduced in 2014?",
                es: "¿Qué tipo de motor híbrido se introdujo en 2014?",
                de: "Welcher Hybrid-Motortyp wurde 2014 eingeführt?",
                nl: "Welk type hybride motor werd in 2014 geïntroduceerd?"
            },
            options: ["V8 naturally aspirated", "V6 turbocharged hybrid", "V10 hybrid", "V12 turbocharged"],
            correct: 1,
            explanation: {
                en: "The 2014 regulations introduced 1.6L V6 turbocharged hybrid power units with energy recovery systems.",
                es: "Las regulaciones de 2014 introdujeron unidades de potencia híbridas V6 turbo de 1.6L con sistemas de recuperación.",
                de: "Die 2014-Regeln führten 1,6L V6-Turbohybrid-Antriebseinheiten mit Energierückgewinnung ein.",
                nl: "De regels van 2014 introduceerden 1.6L V6 turbohybride aandrijfeenheden met energieterugwinningssystemen."
            }
        },
        {
            question: {
                en: "What is the Halo device introduced in 2018?",
                es: "¿Qué es el dispositivo Halo introducido en 2018?",
                de: "Was ist das 2018 eingeführte Halo-System?",
                nl: "Wat is het Halo-apparaat dat in 2018 werd geïntroduceerd?"
            },
            options: ["Aerodynamic device", "Protective cockpit structure", "Engine component", "Suspension part"],
            correct: 1,
            explanation: {
                en: "The Halo is a protective titanium structure above the cockpit to protect the driver's head.",
                es: "El Halo es una estructura protectora de titanio sobre la cabina para proteger la cabeza del piloto.",
                de: "Der Halo ist eine schützende Titanstruktur über dem Cockpit zum Schutz des Fahrerkopfes.",
                nl: "De Halo is een beschermende titanium structuur boven de cockpit om het hoofd van de coureur te beschermen."
            }
        },
        {
            question: {
                en: "What information do LED lights on the steering wheel display?",
                es: "¿Qué información muestran las luces LED en el volante?",
                de: "Welche Informationen zeigen die LED-Leuchten am Lenkrad an?",
                nl: "Welke informatie tonen de LED-lampjes op het stuur?"
            },
            options: ["Only speed", "RPM, gear position, and various warnings", "Only fuel level", "Radio messages"],
            correct: 1,
            explanation: {
                en: "LED lights on the steering wheel display RPM, gear position, DRS status, and various system warnings.",
                es: "Las luces LED en el volante muestran RPM, posición de marcha, estado DRS y varias advertencias.",
                de: "LED-Leuchten am Lenkrad zeigen Drehzahl, Gang, DRS-Status und verschiedene Systemwarnungen.",
                nl: "LED-lampjes op het stuur tonen toerental, versnelling, DRS-status en verschillende systeemwaarschuwingen."
            }
        },
        {
            question: {
                en: "When were semi-automatic gearboxes first introduced to F1?",
                es: "¿Cuándo se introdujeron por primera vez las cajas semiautomáticas en F1?",
                de: "Wann wurden halbautomatische Getriebe erstmals in F1 eingeführt?",
                nl: "Wanneer werden semi-automatische versnellingsbakken voor het eerst geïntroduceerd in F1?"
            },
            options: ["1980s", "Early 1990s", "2000s", "2010s"],
            correct: 1,
            explanation: {
                en: "Ferrari introduced the first semi-automatic gearbox in 1989, revolutionizing F1 transmissions.",
                es: "Ferrari introdujo la primera caja semiautomática en 1989, revolucionando las transmisiones de F1.",
                de: "Ferrari führte 1989 das erste halbautomatische Getriebe ein und revolutionierte F1-Getriebe.",
                nl: "Ferrari introduceerde de eerste semi-automatische versnellingsbak in 1989, wat F1-transmissies revolutioneerde."
            }
        },
        {
            question: {
                en: "What advantage did active suspension provide?",
                es: "¿Qué ventaja proporcionaba la suspensión activa?",
                de: "Welchen Vorteil bot aktive Federung?",
                nl: "Welk voordeel bood actieve ophanging?"
            },
            options: ["Lighter car weight", "Constant optimal ride height regardless of conditions", "Better fuel economy", "Faster pit stops"],
            correct: 1,
            explanation: {
                en: "Active suspension maintained constant optimal ride height, maximizing aerodynamic efficiency in all conditions.",
                es: "La suspensión activa mantenía altura óptima constante, maximizando eficiencia aerodinámica en todas condiciones.",
                de: "Aktive Federung hielt konstante optimale Fahrhöhe und maximierte aerodynamische Effizienz unter allen Bedingungen.",
                nl: "Actieve ophanging hield constante optimale rijhoogte aan, wat aerodynamische efficiëntie maximaliseerde onder alle omstandigheden."
            }
        },
        {
            question: {
                en: "How are different tire compounds identified visually?",
                es: "¿Cómo se identifican visualmente los diferentes compuestos de neumáticos?",
                de: "Wie werden verschiedene Reifenmischungen visuell identifiziert?",
                nl: "Hoe worden verschillende bandcompounds visueel geïdentificeerd?"
            },
            options: ["By tire size", "By colored sidewall markings", "By wheel rim color", "They all look the same"],
            correct: 1,
            explanation: {
                en: "Different tire compounds are identified by colored markings on the sidewall (red=soft, yellow=medium, white=hard).",
                es: "Los diferentes compuestos se identifican por marcas de colores en el lateral (rojo=blando, amarillo=medio, blanco=duro).",
                de: "Verschiedene Mischungen werden durch farbige Markierungen an der Seitenwand identifiziert (rot=weich, gelb=mittel, weiß=hart).",
                nl: "Verschillende compounds worden geïdentificeerd door gekleurde markeringen op de zijkant (rood=zacht, geel=medium, wit=hard)."
            }
        },
        {
            question: {
                en: "What component of the hybrid engine stores recovered energy?",
                es: "¿Qué componente del motor híbrido almacena la energía recuperada?",
                de: "Welche Komponente des Hybridmotors speichert zurückgewonnene Energie?",
                nl: "Welk onderdeel van de hybride motor slaat teruggewonnen energie op?"
            },
            options: ["Fuel tank", "Battery (Energy Store)", "Turbocharger", "Alternator"],
            correct: 1,
            explanation: {
                en: "The Energy Store (battery) stores recovered energy from the MGU-K and MGU-H for later deployment.",
                es: "El Energy Store (batería) almacena energía recuperada del MGU-K y MGU-H para uso posterior.",
                de: "Der Energy Store (Batterie) speichert zurückgewonnene Energie von MGU-K und MGU-H für späteren Einsatz.",
                nl: "De Energy Store (batterij) slaat teruggewonnen energie van de MGU-K en MGU-H op voor later gebruik."
            }
        },
        {
            question: {
                en: "How much does the Halo weigh approximately?",
                es: "¿Cuánto pesa aproximadamente el Halo?",
                de: "Wie viel wiegt der Halo ungefähr?",
                nl: "Hoeveel weegt de Halo ongeveer?"
            },
            options: ["3 kg", "7 kg", "12 kg", "20 kg"],
            correct: 1,
            explanation: {
                en: "The Halo device weighs approximately 7 kilograms but can withstand loads equivalent to a double-decker bus.",
                es: "El dispositivo Halo pesa aproximadamente 7 kilogramos pero puede soportar cargas equivalentes a un autobús de dos pisos.",
                de: "Das Halo-System wiegt etwa 7 Kilogramm, kann aber Lasten eines Doppeldeckerbusses standhalten.",
                nl: "Het Halo-apparaat weegt ongeveer 7 kilogram maar kan belastingen weerstaan gelijk aan een dubbeldekker bus."
            }
        },
        {
            question: {
                en: "What is the main purpose of paddle shifters?",
                es: "¿Cuál es el propósito principal de las levas de cambio?",
                de: "Was ist der Hauptzweck von Schaltpaddles?",
                nl: "Wat is het hoofddoel van paddle shifters?"
            },
            options: ["Decoration", "Allow gear changes without removing hands from steering wheel", "Control DRS", "Adjust brake balance"],
            correct: 1,
            explanation: {
                en: "Paddle shifters allow drivers to change gears instantly while keeping both hands on the steering wheel.",
                es: "Las levas permiten a los pilotos cambiar marchas instantáneamente manteniendo ambas manos en el volante.",
                de: "Schaltpaddles ermöglichen Fahrern sofortiges Schalten bei beiden Händen am Lenkrad.",
                nl: "Paddle shifters stellen coureurs in staat om direct te schakelen terwijl beide handen aan het stuur blijven."
            }
        },
        {
            question: {
                en: "Why was traction control banned in Formula 1?",
                es: "¿Por qué se prohibió el control de tracción en la Fórmula 1?",
                de: "Warum wurde Traktionskontrolle in der Formel 1 verboten?",
                nl: "Waarom werd tractiecontrole verboden in Formule 1?"
            },
            options: ["Too expensive", "To increase driver skill requirement", "It didn't work well", "Safety concerns"],
            correct: 1,
            explanation: {
                en: "Traction control was banned to increase the importance of driver skill in managing wheel spin.",
                es: "El control de tracción se prohibió para aumentar la importancia de la habilidad del piloto al manejar el patinaje.",
                de: "Traktionskontrolle wurde verboten, um die Bedeutung des Fahrerkönnens beim Radschlupf zu erhöhen.",
                nl: "Tractiecontrole werd verboden om het belang van de vaardigheid van de coureur bij het beheersen van wielslip te vergroten."
            }
        },
        {
            question: {
                en: "What does the softer tire compound provide?",
                es: "¿Qué proporciona el compuesto de neumático más blando?",
                de: "Was bietet die weichere Reifenmischung?",
                nl: "Wat biedt de zachtere bandcompound?"
            },
            options: ["Longer life but less grip", "More grip but shorter life", "Same as harder compounds", "Better in wet conditions only"],
            correct: 1,
            explanation: {
                en: "Softer tire compounds provide more grip but wear out faster than harder compounds.",
                es: "Los compuestos más blandos proporcionan más agarre pero se desgastan más rápido que los duros.",
                de: "Weichere Mischungen bieten mehr Grip, verschleißen aber schneller als härtere Mischungen.",
                nl: "Zachtere compounds bieden meer grip maar slijten sneller dan hardere compounds."
            }
        },
        {
            question: {
                en: "How many gears does a modern F1 gearbox have?",
                es: "¿Cuántas marchas tiene una caja de cambios moderna de F1?",
                de: "Wie viele Gänge hat ein modernes F1-Getriebe?",
                nl: "Hoeveel versnellingen heeft een moderne F1-versnellingsbak?"
            },
            options: ["6 forward gears", "7 forward gears", "8 forward gears", "9 forward gears"],
            correct: 2,
            explanation: {
                en: "Modern F1 gearboxes have 8 forward gears and 1 reverse gear as mandated by regulations.",
                es: "Las cajas de cambios modernas de F1 tienen 8 marchas hacia adelante y 1 marcha atrás según regulaciones.",
                de: "Moderne F1-Getriebe haben laut Reglement 8 Vorwärtsgänge und 1 Rückwärtsgang.",
                nl: "Moderne F1-versnellingsbakken hebben 8 voorwaartse versnellingen en 1 achteruit volgens de reglementen."
            }
        },
        {
            question: {
                en: "What safety benefit does the Halo provide?",
                es: "¿Qué beneficio de seguridad proporciona el Halo?",
                de: "Welchen Sicherheitsvorteil bietet der Halo?",
                nl: "Welk veiligheidsvoordeel biedt de Halo?"
            },
            options: ["Prevents fire", "Protects driver's head from large debris and impacts", "Improves aerodynamics", "Reduces car weight"],
            correct: 1,
            explanation: {
                en: "The Halo protects the driver's head from large debris, flying objects, and impacts in accidents.",
                es: "El Halo protege la cabeza del piloto de escombros grandes, objetos voladores e impactos en accidentes.",
                de: "Der Halo schützt den Fahrerkopf vor großen Trümmern, fliegenden Objekten und Aufprällen bei Unfällen.",
                nl: "De Halo beschermt het hoofd van de coureur tegen groot puin, vliegende objecten en impact bij ongevallen."
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
    window.questionsByLevel['1 F1']['Auto-innovaties']['level2'] = level2Questions;
})();
