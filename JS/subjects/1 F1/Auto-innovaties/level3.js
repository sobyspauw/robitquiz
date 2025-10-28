(function() {
    const level3Questions = [
        {
            question: {
                en: "What are ground effect tunnels in modern F1 cars?",
                es: "¿Qué son los túneles de efecto suelo en los coches modernos de F1?",
                de: "Was sind Bodeneffekt-Tunnel in modernen F1-Autos?",
                nl: "Wat zijn grondeffecttunnels in moderne F1-auto's?"
            },
            options: ["Engine cooling ducts", "Venturi-shaped underbody channels", "Exhaust pipes", "Brake cooling channels"],
            correct: 1,
            explanation: {
                en: "Ground effect tunnels are Venturi-shaped underbody channels that accelerate air to create low pressure and downforce.",
                es: "Los túneles de efecto suelo son canales en forma de Venturi bajo el coche que aceleran el aire para crear baja presión.",
                de: "Bodeneffekt-Tunnel sind Venturi-förmige Unterbodenkanäle, die Luft beschleunigen und Unterdruck erzeugen.",
                nl: "Grondeffecttunnels zijn Venturi-vormige kanalen onder de auto die lucht versnellen om lage druk te creëren."
            }
        },
        {
            question: {
                en: "What are blown diffusers?",
                es: "¿Qué son los difusores soplados?",
                de: "Was sind angeblasene Diffusoren?",
                nl: "Wat zijn geblazen diffusers?"
            },
            options: ["Brake cooling system", "Exhaust gases directed at rear diffuser", "Tire warming technique", "DRS activation method"],
            correct: 1,
            explanation: {
                en: "Blown diffusers direct hot exhaust gases at the rear diffuser to increase downforce and improve aerodynamics.",
                es: "Los difusores soplados dirigen gases de escape calientes al difusor trasero para aumentar carga aerodinámica.",
                de: "Angeblasene Diffusoren leiten heiße Abgase zum hinteren Diffusor, um Abtrieb zu erhöhen.",
                nl: "Geblazen diffusers leiden hete uitlaatgassen naar de achterdiffuser om neerwaartse druk te verhogen."
            }
        },
        {
            question: {
                en: "What was the F-duct system?",
                es: "¿Qué era el sistema F-duct?",
                de: "Was war das F-Duct-System?",
                nl: "Wat was het F-duct systeem?"
            },
            options: ["Fuel injection system", "Driver-controlled airflow to stall rear wing", "Front wing adjustment", "Brake cooling duct"],
            correct: 1,
            explanation: {
                en: "The F-duct allowed drivers to redirect airflow to stall the rear wing, reducing drag on straights.",
                es: "El F-duct permitía a los pilotos redirigir el flujo de aire para anular el alerón trasero, reduciendo resistencia.",
                de: "Das F-Duct ermöglichte Fahrern, Luftstrom umzuleiten um den Heckflügel zu entlasten und Widerstand zu reduzieren.",
                nl: "Het F-duct stelde coureurs in staat luchtstroom om te leiden om de achtervleugel te laten stallen, wat weerstand verminderde."
            }
        },
        {
            question: {
                en: "What was the double diffuser controversy in 2009?",
                es: "¿Cuál fue la controversia del difusor doble en 2009?",
                de: "Was war die Double-Diffusor-Kontroverse 2009?",
                nl: "Wat was de dubbele diffuser controverse in 2009?"
            },
            options: ["Illegal engine modification", "Interpretation of diffuser regulations creating extra downforce", "Tire compound dispute", "Weight distribution issue"],
            correct: 1,
            explanation: {
                en: "The double diffuser exploited a loophole in regulations to create additional diffuser channels for more downforce.",
                es: "El difusor doble explotó una laguna en las regulaciones para crear canales adicionales y más carga aerodinámica.",
                de: "Der Double-Diffusor nutzte eine Regellücke für zusätzliche Diffusorkanäle und mehr Abtrieb.",
                nl: "De dubbele diffuser maakte gebruik van een maas in de regels om extra diffuserkanalen te creëren voor meer neerwaartse druk."
            }
        },
        {
            question: {
                en: "What are flexible wings in Formula 1?",
                es: "¿Qué son las alas flexibles en la Fórmula 1?",
                de: "Was sind flexible Flügel in der Formel 1?",
                nl: "Wat zijn flexibele vleugels in Formule 1?"
            },
            options: ["Wings made of rubber", "Wings that bend at high speed to reduce drag", "Adjustable wings", "Wings with movable flaps"],
            correct: 1,
            explanation: {
                en: "Flexible wings are designed to bend at high speeds, reducing their angle of attack and drag on straights.",
                es: "Las alas flexibles se diseñan para doblarse a altas velocidades, reduciendo su ángulo de ataque y resistencia.",
                de: "Flexible Flügel sind so konzipiert, dass sie sich bei hohen Geschwindigkeiten biegen und Anstellwinkel reduzieren.",
                nl: "Flexibele vleugels zijn ontworpen om bij hoge snelheden te buigen, waardoor hun aanvalshoek en weerstand vermindert."
            }
        },
        {
            question: {
                en: "What is the purpose of tire blankets?",
                es: "¿Cuál es el propósito de las mantas para neumáticos?",
                de: "Was ist der Zweck von Reifendecken?",
                nl: "Wat is het doel van bandenwarmers?"
            },
            options: ["Keep tires dry", "Pre-heat tires to optimal operating temperature", "Store tires safely", "Reduce tire wear"],
            correct: 1,
            explanation: {
                en: "Tire blankets heat tires to around 70-100°C before use, ensuring they provide optimal grip immediately.",
                es: "Las mantas calientan los neumáticos a 70-100°C antes de usar, asegurando agarre óptimo inmediatamente.",
                de: "Reifendecken heizen Reifen auf etwa 70-100°C vor, um sofort optimalen Grip zu gewährleisten.",
                nl: "Bandenwarmers verwarmen banden tot ongeveer 70-100°C voor gebruik, wat direct optimale grip garandeert."
            }
        },
        {
            question: {
                en: "How are DRS zones determined on a circuit?",
                es: "¿Cómo se determinan las zonas DRS en un circuito?",
                de: "Wie werden DRS-Zonen auf einer Strecke festgelegt?",
                nl: "Hoe worden DRS-zones op een circuit bepaald?"
            },
            options: ["Randomly placed", "On long straights after detection points", "Only on start/finish straight", "Wherever teams want"],
            correct: 1,
            explanation: {
                en: "DRS zones are placed on long straights, with detection points before them to measure the 1-second gap.",
                es: "Las zonas DRS se colocan en rectas largas, con puntos de detección antes para medir la diferencia de 1 segundo.",
                de: "DRS-Zonen liegen auf langen Geraden, mit Messpunkten davor um den 1-Sekunden-Abstand zu messen.",
                nl: "DRS-zones worden geplaatst op lange rechte stukken, met detectiepunten ervoor om het 1-seconde verschil te meten."
            }
        },
        {
            question: {
                en: "What is MGU-K in the hybrid power unit?",
                es: "¿Qué es MGU-K en la unidad de potencia híbrida?",
                de: "Was ist MGU-K in der Hybrid-Antriebseinheit?",
                nl: "Wat is MGU-K in de hybride aandrijfeenheid?"
            },
            options: ["Turbo cooling system", "Motor Generator Unit - Kinetic (recovers energy from braking)", "Fuel injection system", "Exhaust system"],
            correct: 1,
            explanation: {
                en: "MGU-K (Motor Generator Unit - Kinetic) recovers energy from the rear axle during braking and deploys it for acceleration.",
                es: "MGU-K recupera energía del eje trasero durante el frenado y la despliega para acelerar.",
                de: "MGU-K gewinnt Energie von der Hinterachse beim Bremsen zurück und setzt sie zur Beschleunigung ein.",
                nl: "MGU-K wint energie terug van de achteras tijdens het remmen en zet deze in voor acceleratie."
            }
        },
        {
            question: {
                en: "What is MGU-H in the hybrid power unit?",
                es: "¿Qué es MGU-H en la unidad de potencia híbrida?",
                de: "Was ist MGU-H in der Hybrid-Antriebseinheit?",
                nl: "Wat is MGU-H in de hybride aandrijfeenheid?"
            },
            options: ["Hydraulic pump", "Motor Generator Unit - Heat (recovers energy from turbo)", "Heating system", "Hybrid control unit"],
            correct: 1,
            explanation: {
                en: "MGU-H (Motor Generator Unit - Heat) recovers energy from exhaust heat via the turbocharger and eliminates turbo lag.",
                es: "MGU-H recupera energía del calor de escape a través del turbo y elimina el retraso del turbo.",
                de: "MGU-H gewinnt Energie von Abgaswärme über den Turbolader zurück und eliminiert Turbo-Lag.",
                nl: "MGU-H wint energie terug van uitlaathitte via de turbo en elimineert turbo-lag."
            }
        },
        {
            question: {
                en: "What is brake-by-wire technology?",
                es: "¿Qué es la tecnología brake-by-wire?",
                de: "Was ist Brake-by-Wire-Technologie?",
                nl: "Wat is brake-by-wire technologie?"
            },
            options: ["Wireless brakes", "Electronic brake force distribution system", "Automatic braking", "Emergency brake system"],
            correct: 1,
            explanation: {
                en: "Brake-by-wire electronically distributes braking force between mechanical brakes and MGU-K energy recovery.",
                es: "Brake-by-wire distribuye electrónicamente la fuerza de frenado entre frenos mecánicos y recuperación MGU-K.",
                de: "Brake-by-Wire verteilt Bremskraft elektronisch zwischen mechanischen Bremsen und MGU-K-Rückgewinnung.",
                nl: "Brake-by-wire verdeelt remkracht elektronisch tussen mechanische remmen en MGU-K energieterugwinning."
            }
        },
        {
            question: {
                en: "What are ERS deployment strategies?",
                es: "¿Qué son las estrategias de despliegue de ERS?",
                de: "Was sind ERS-Einsatzstrategien?",
                nl: "Wat zijn ERS-inzetstrategie��n?"
            },
            options: ["Random energy use", "Planned use of stored energy at optimal points", "Automatic energy distribution", "Energy saving only"],
            correct: 1,
            explanation: {
                en: "Teams strategically deploy stored ERS energy at key points like overtaking zones or defending positions.",
                es: "Los equipos despliegan estratégicamente energía ERS almacenada en puntos clave como zonas de adelantamiento.",
                de: "Teams setzen gespeicherte ERS-Energie strategisch an Schlüsselpunkten wie Überholzonen ein.",
                nl: "Teams zetten opgeslagen ERS-energie strategisch in op belangrijke punten zoals inhaalpunten of bij verdedigen."
            }
        },
        {
            question: {
                en: "Why were blown diffusers so effective?",
                es: "¿Por qué eran tan efectivos los difusores soplados?",
                de: "Warum waren angeblasene Diffusoren so effektiv?",
                nl: "Waarom waren geblazen diffusers zo effectief?"
            },
            options: ["They cooled the tires", "Hot exhaust gases energized airflow over diffuser", "They reduced weight", "They improved fuel economy"],
            correct: 1,
            explanation: {
                en: "Hot exhaust gases energized the airflow over the diffuser, creating more downforce especially in corners.",
                es: "Los gases calientes energizaban el flujo de aire sobre el difusor, creando más carga en curvas.",
                de: "Heiße Abgase energetisierten die Luftströmung über den Diffusor und erzeugten mehr Abtrieb in Kurven.",
                nl: "Hete uitlaatgassen energiseerden de luchtstroom over de diffuser, wat meer neerwaartse druk creëerde in bochten."
            }
        },
        {
            question: {
                en: "How did the F-duct work?",
                es: "¿Cómo funcionaba el F-duct?",
                de: "Wie funktionierte das F-Duct?",
                nl: "Hoe werkte het F-duct?"
            },
            options: ["Automatic system", "Driver blocked/unblocked duct with hand or knee", "Computer controlled", "Foot pedal operated"],
            correct: 1,
            explanation: {
                en: "Drivers manually blocked or unblocked an air duct, redirecting airflow to stall the rear wing on straights.",
                es: "Los pilotos bloqueaban manualmente un conducto de aire, redirigiendo flujo para anular el alerón en rectas.",
                de: "Fahrer blockierten manuell einen Luftkanal und leiteten Luftstrom um den Heckflügel auf Geraden zu entlasten.",
                nl: "Coureurs blokkeerden handmatig een luchtkanaal, wat luchtstroom omleidde om de achtervleugel te laten stallen op rechte stukken."
            }
        },
        {
            question: {
                en: "What teams successfully used the double diffuser in 2009?",
                es: "¿Qué equipos usaron exitosamente el difusor doble en 2009?",
                de: "Welche Teams nutzten 2009 erfolgreich den Double-Diffusor?",
                nl: "Welke teams gebruikten succesvol de dubbele diffuser in 2009?"
            },
            options: ["Ferrari and McLaren", "Brawn, Toyota, and Williams", "Red Bull and Mercedes", "Renault and BMW"],
            correct: 1,
            explanation: {
                en: "Brawn GP, Toyota, and Williams started 2009 with double diffusers, giving them a significant early advantage.",
                es: "Brawn GP, Toyota y Williams comenzaron 2009 con difusores dobles, dándoles ventaja significativa inicial.",
                de: "Brawn GP, Toyota und Williams starteten 2009 mit Double-Diffusoren und hatten einen großen Frühvorteil.",
                nl: "Brawn GP, Toyota en Williams begonnen 2009 met dubbele diffusers, wat hen een significant vroeg voordeel gaf."
            }
        },
        {
            question: {
                en: "How do teams test for flexible wings?",
                es: "¿Cómo prueban los equipos las alas flexibles?",
                de: "Wie testen Teams auf flexible Flügel?",
                nl: "Hoe testen teams op flexibele vleugels?"
            },
            options: ["Visual inspection only", "Load tests with specific forces applied", "Computer simulation only", "Wind tunnel only"],
            correct: 1,
            explanation: {
                en: "The FIA applies specific loads to wings and measures deflection to ensure compliance with flexibility limits.",
                es: "La FIA aplica cargas específicas a las alas y mide la deflexión para asegurar cumplimiento con límites.",
                de: "Die FIA wendet spezifische Lasten auf Flügel an und misst die Durchbiegung zur Regelkonformität.",
                nl: "De FIA past specifieke belastingen toe op vleugels en meet de doorbuiging om naleving van flexibiliteitslimieten te verzekeren."
            }
        },
        {
            question: {
                en: "What temperature are tire blankets typically set to?",
                es: "¿A qué temperatura se configuran típicamente las mantas de neumáticos?",
                de: "Auf welche Temperatur werden Reifendecken typischerweise eingestellt?",
                nl: "Op welke temperatuur worden bandenwarmers doorgaans ingesteld?"
            },
            options: ["40°C", "70°C", "100°C", "150°C"],
            correct: 1,
            explanation: {
                en: "Tire blankets are typically set to around 70-80°C for slicks, warming them to optimal operating temperature.",
                es: "Las mantas se configuran típicamente a 70-80°C para slicks, calentándolos a temperatura óptima.",
                de: "Reifendecken werden typischerweise auf etwa 70-80°C für Slicks eingestellt.",
                nl: "Bandenwarmers worden doorgaans ingesteld op ongeveer 70-80°C voor slicks, om ze op optimale werktemperatuur te krijgen."
            }
        },
        {
            question: {
                en: "How many DRS zones are typically on a circuit?",
                es: "¿Cuántas zonas DRS hay típicamente en un circuito?",
                de: "Wie viele DRS-Zonen gibt es typischerweise auf einer Strecke?",
                nl: "Hoeveel DRS-zones zijn er doorgaans op een circuit?"
            },
            options: ["Always 1", "1-3 zones", "4-5 zones", "Unlimited"],
            correct: 1,
            explanation: {
                en: "Most circuits have 1-3 DRS zones, strategically placed on long straights to aid overtaking.",
                es: "La mayoría de circuitos tienen 1-3 zonas DRS, ubicadas estratégicamente en rectas largas para ayudar adelantamientos.",
                de: "Die meisten Strecken haben 1-3 DRS-Zonen, strategisch auf langen Geraden platziert.",
                nl: "Meeste circuits hebben 1-3 DRS-zones, strategisch geplaatst op lange rechte stukken om inhalen te helpen."
            }
        },
        {
            question: {
                en: "What is the maximum power output of MGU-K?",
                es: "¿Cuál es la potencia máxima de salida del MGU-K?",
                de: "Was ist die maximale Leistungsabgabe des MGU-K?",
                nl: "Wat is het maximale vermogen van MGU-K?"
            },
            options: ["80 kW", "120 kW", "160 kW", "200 kW"],
            correct: 1,
            explanation: {
                en: "MGU-K can deploy a maximum of 120 kW (approximately 160 horsepower) of electrical power.",
                es: "MGU-K puede desplegar un máximo de 120 kW (aproximadamente 160 caballos) de potencia eléctrica.",
                de: "MGU-K kann maximal 120 kW (etwa 160 PS) elektrische Leistung abgeben.",
                nl: "MGU-K kan maximaal 120 kW (ongeveer 160 pk) elektrisch vermogen leveren."
            }
        },
        {
            question: {
                en: "What advantage does MGU-H provide over traditional turbos?",
                es: "¿Qué ventaja proporciona MGU-H sobre los turbos tradicionales?",
                de: "Welchen Vorteil bietet MGU-H gegenüber traditionellen Turbos?",
                nl: "Welk voordeel biedt MGU-H ten opzichte van traditionele turbo's?"
            },
            options: ["More power only", "Eliminates turbo lag", "Lighter weight", "Better fuel economy only"],
            correct: 1,
            explanation: {
                en: "MGU-H can spin up the turbo electrically, eliminating turbo lag and providing instant throttle response.",
                es: "MGU-H puede girar el turbo eléctricamente, eliminando el retraso y proporcionando respuesta instantánea.",
                de: "MGU-H kann den Turbo elektrisch beschleunigen und eliminiert so Turbo-Lag für sofortige Gasannahme.",
                nl: "MGU-H kan de turbo elektrisch laten draaien, wat turbo-lag elimineert en directe gasrespons biedt."
            }
        },
        {
            question: {
                en: "Why was the F-duct banned?",
                es: "¿Por qué se prohibió el F-duct?",
                de: "Warum wurde das F-Duct verboten?",
                nl: "Waarom werd het F-duct verboden?"
            },
            options: ["Too expensive", "Safety concerns - drivers taking hands off wheel", "It didn't work", "Environmental reasons"],
            correct: 1,
            explanation: {
                en: "The F-duct was banned because drivers had to take their hands off the wheel to operate it, creating safety concerns.",
                es: "El F-duct se prohibió porque los pilotos tenían que quitar las manos del volante para operarlo.",
                de: "Das F-Duct wurde verboten, weil Fahrer ihre Hände vom Lenkrad nehmen mussten, was Sicherheitsbedenken aufwarf.",
                nl: "Het F-duct werd verboden omdat coureurs hun handen van het stuur moesten halen om het te bedienen, wat veiligheidsproblemen opleverde."
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
    window.questionsByLevel['1 F1']['Auto-innovaties']['level3'] = level3Questions;
})();
