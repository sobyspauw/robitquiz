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
        },
        {
            question: {
                en: "What is the Coanda effect in F1 aerodynamics?",
                es: "¿Qué es el efecto Coanda en la aerodinámica de F1?",
                de: "Was ist der Coanda-Effekt in der F1-Aerodynamik?",
                nl: "Wat is het Coanda-effect in F1-aerodynamica?"
            },
            options: ["Tire grip effect", "Airflow tendency to follow curved surfaces", "Engine cooling effect", "Brake efficiency"],
            correct: 1,
            explanation: {
                en: "The Coanda effect describes how airflow tends to follow curved surfaces, used to direct exhaust gases and improve aerodynamics.",
                es: "El efecto Coanda describe cómo el flujo de aire tiende a seguir superficies curvas, usado para dirigir gases de escape.",
                de: "Der Coanda-Effekt beschreibt wie Luftstrom gekrümmten Oberflächen folgt, genutzt um Abgase zu lenken.",
                nl: "Het Coanda-effect beschrijft hoe luchtstroom de neiging heeft gebogen oppervlakken te volgen, gebruikt om uitlaatgassen te leiden."
            }
        },
        {
            question: {
                en: "What is a seamless-shift gearbox?",
                es: "¿Qué es una caja de cambios de cambio sin interrupciones?",
                de: "Was ist ein nahtloses Schaltgetriebe?",
                nl: "Wat is een seamless-shift versnellingsbak?"
            },
            options: ["Automatic gearbox", "Gearbox that shifts without power interruption", "Manual gearbox", "CVT transmission"],
            correct: 1,
            explanation: {
                en: "Seamless-shift gearboxes can change gears without any interruption in power delivery, maintaining acceleration through shifts.",
                es: "Las cajas de cambio sin interrupciones cambian marchas sin interrupción en la entrega de potencia.",
                de: "Nahtlose Schaltgetriebe können Gänge ohne Unterbrechung der Kraftübertragung wechseln.",
                nl: "Seamless-shift versnellingsbakken kunnen schakelen zonder onderbreking van vermogensafgifte."
            }
        },
        {
            question: {
                en: "What is porpoising in ground effect cars?",
                es: "¿Qué es el porpoising en coches de efecto suelo?",
                de: "Was ist Porpoising bei Bodeneffekt-Autos?",
                nl: "Wat is porpoising bij grondeffect-auto's?"
            },
            options: ["Tire vibration", "Bouncing caused by aerodynamic stalling", "Engine vibration", "Brake judder"],
            correct: 1,
            explanation: {
                en: "Porpoising is vertical bouncing caused when ground effect tunnels stall and recover repeatedly at high speed.",
                es: "Porpoising es el rebote vertical causado cuando los túneles de efecto suelo se anulan y recuperan repetidamente.",
                de: "Porpoising ist vertikales Hüpfen wenn Bodeneffekt-Tunnel bei hoher Geschwindigkeit wiederholt abbrechen und sich erholen.",
                nl: "Porpoising is verticaal stuiteren veroorzaakt wanneer grondeffecttunnels herhaaldelijk stallen en herstellen bij hoge snelheid."
            }
        },
        {
            question: {
                en: "What are bargeboards used for?",
                es: "¿Para qué se usan las bargeboards?",
                de: "Wofür werden Bargeboards verwendet?",
                nl: "Waarvoor worden bargeboards gebruikt?"
            },
            options: ["Driver protection", "Direct airflow around sidepods", "Support rear wing", "Cool brakes"],
            correct: 1,
            explanation: {
                en: "Bargeboards are vertical aerodynamic elements that direct and condition airflow around the car's sidepods and floor.",
                es: "Las bargeboards son elementos aerodinámicos verticales que dirigen el flujo de aire alrededor de los pontones.",
                de: "Bargeboards sind vertikale aerodynamische Elemente die Luftstrom um Seitenkästen und Boden lenken.",
                nl: "Bargeboards zijn verticale aerodynamische elementen die luchtstroom rond de sidepods en vloer leiden en conditioneren."
            }
        },
        {
            question: {
                en: "What is the energy store in hybrid F1 cars?",
                es: "¿Qué es el almacén de energía en coches híbridos de F1?",
                de: "Was ist der Energiespeicher in Hybrid-F1-Autos?",
                nl: "Wat is de energieopslag in hybride F1-auto's?"
            },
            options: ["Extra fuel tank", "High-performance battery for ERS", "Flywheel system", "Compressed air tank"],
            correct: 1,
            explanation: {
                en: "The energy store is a lithium-ion battery that stores electrical energy recovered by MGU-K and MGU-H for deployment.",
                es: "El almacén de energía es una batería de iones de litio que almacena energía eléctrica recuperada por MGU-K y MGU-H.",
                de: "Der Energiespeicher ist eine Lithium-Ionen-Batterie die von MGU-K und MGU-H zurückgewonnene Energie speichert.",
                nl: "De energieopslag is een lithium-ion batterij die elektrische energie opslaat teruggewonnen door MGU-K en MGU-H."
            }
        },
        {
            question: {
                en: "What is the maximum fuel capacity in modern F1 cars?",
                es: "¿Cuál es la capacidad máxima de combustible en coches modernos de F1?",
                de: "Was ist die maximale Kraftstoffkapazität in modernen F1-Autos?",
                nl: "Wat is de maximale brandstofcapaciteit in moderne F1-auto's?"
            },
            options: ["80 kg", "100 kg", "110 kg", "120 kg"],
            correct: 2,
            explanation: {
                en: "F1 cars can carry a maximum of 110 kg of fuel, with fuel flow limited to 100 kg/hour during the race.",
                es: "Los coches de F1 pueden llevar un máximo de 110 kg de combustible, con flujo limitado a 100 kg/hora.",
                de: "F1-Autos können maximal 110 kg Kraftstoff mitführen, der Durchfluss ist auf 100 kg/Stunde begrenzt.",
                nl: "F1-auto's kunnen maximaal 110 kg brandstof meenemen, met brandstofstroom beperkt tot 100 kg/uur."
            }
        },
        {
            question: {
                en: "What is the control electronics (ECU) regulation?",
                es: "¿Qué es la regulación de la electrónica de control (ECU)?",
                de: "Was ist die Regelung für Steuerungselektronik (ECU)?",
                nl: "Wat is de regeling voor besturingselektronica (ECU)?"
            },
            options: ["Teams design own ECU", "Standard McLaren-supplied ECU for all teams", "No ECU allowed", "Each engine manufacturer provides ECU"],
            correct: 1,
            explanation: {
                en: "All teams must use a standard ECU supplied by McLaren Electronics to ensure fairness and prevent hidden electronic aids.",
                es: "Todos los equipos deben usar un ECU estándar suministrado por McLaren Electronics para asegurar equidad.",
                de: "Alle Teams müssen ein Standard-ECU von McLaren Electronics verwenden um Fairness zu gewährleisten.",
                nl: "Alle teams moeten een standaard ECU gebruiken geleverd door McLaren Electronics om eerlijkheid te waarborgen."
            }
        },
        {
            question: {
                en: "How does tire degradation affect strategy?",
                es: "¿Cómo afecta la degradación de neumáticos a la estrategia?",
                de: "Wie beeinflusst Reifenverschleiß die Strategie?",
                nl: "Hoe beïnvloedt bandenslijtage de strategie?"
            },
            options: ["No effect", "Teams must balance speed vs tire life for pit stop timing", "Only affects qualifying", "Random factor only"],
            correct: 1,
            explanation: {
                en: "Teams must balance pushing for speed with managing tire degradation to optimize pit stop windows and race pace.",
                es: "Los equipos deben equilibrar velocidad con gestión de degradación para optimizar ventanas de pit stop.",
                de: "Teams müssen Geschwindigkeit mit Reifenverschleiß-Management ausbalancieren um Boxenstopp-Zeitfenster zu optimieren.",
                nl: "Teams moeten snelheid balanceren met bandenslijtagebeheer om pit stop tijden en racetempo te optimaliseren."
            }
        },
        {
            question: {
                en: "What is the minimum car weight in modern F1?",
                es: "¿Cuál es el peso mínimo del coche en F1 moderna?",
                de: "Was ist das Mindestgewicht des Autos in modernem F1?",
                nl: "Wat is het minimumgewicht van de auto in moderne F1?"
            },
            options: ["640 kg", "710 kg", "796 kg", "850 kg"],
            correct: 2,
            explanation: {
                en: "The minimum weight is 796 kg including driver but excluding fuel, increased to accommodate safety features like the Halo.",
                es: "El peso mínimo es 796 kg incluyendo piloto pero excluyendo combustible, aumentado para acomodar el Halo.",
                de: "Das Mindestgewicht beträgt 796 kg inklusive Fahrer aber ohne Kraftstoff, erhöht für Sicherheitsmerkmale wie Halo.",
                nl: "Het minimumgewicht is 796 kg inclusief coureur maar exclusief brandstof, verhoogd voor veiligheidsvoorzieningen zoals de Halo."
            }
        },
        {
            question: {
                en: "What is the DRS detection point?",
                es: "¿Qué es el punto de detección DRS?",
                de: "Was ist der DRS-Erkennungspunkt?",
                nl: "Wat is het DRS-detectiepunt?"
            },
            options: ["Where DRS activates", "Point before DRS zone measuring 1-second gap", "Finish line only", "Pit lane entry"],
            correct: 1,
            explanation: {
                en: "The detection point is located before the DRS activation zone to measure if a car is within 1 second of the car ahead.",
                es: "El punto de detección está antes de la zona DRS para medir si un coche está a menos de 1 segundo del de delante.",
                de: "Der Erkennungspunkt liegt vor der DRS-Aktivierungszone um zu messen ob ein Auto weniger als 1 Sekunde hinter dem Vordermann ist.",
                nl: "Het detectiepunt ligt voor de DRS-activatiezone om te meten of een auto binnen 1 seconde van de auto ervoor zit."
            }
        },
        {
            question: {
                en: "What are flow-vis paints used for?",
                es: "¿Para qué se usan las pinturas flow-vis?",
                de: "Wofür werden Flow-Vis-Farben verwendet?",
                nl: "Waarvoor worden flow-vis verven gebruikt?"
            },
            options: ["Decoration", "Visualizing airflow patterns during testing", "Weight reduction", "Protecting carbon fiber"],
            correct: 1,
            explanation: {
                en: "Flow-vis is fluorescent paint that shows airflow patterns on the car, helping teams analyze and optimize aerodynamics.",
                es: "Flow-vis es pintura fluorescente que muestra patrones de flujo de aire, ayudando a analizar aerodinámica.",
                de: "Flow-Vis ist fluoreszierende Farbe die Luftströmungsmuster zeigt und Teams hilft Aerodynamik zu analysieren.",
                nl: "Flow-vis is fluorescerende verf die luchtstroom patronen toont, wat teams helpt aerodynamica te analyseren en optimaliseren."
            }
        },
        {
            question: {
                en: "What is the wastegate in turbocharged engines?",
                es: "¿Qué es la wastegate en motores turboalimentados?",
                de: "Was ist das Wastegate in Turbomotoren?",
                nl: "Wat is de wastegate in turbomotoren?"
            },
            options: ["Fuel valve", "Valve controlling boost pressure by bypassing exhaust", "Air filter", "Cooling system"],
            correct: 1,
            explanation: {
                en: "The wastegate controls turbo boost pressure by allowing some exhaust to bypass the turbine when needed.",
                es: "La wastegate controla la presión del turbo permitiendo que escape pase por alto la turbina cuando sea necesario.",
                de: "Das Wastegate kontrolliert Turbodruck indem es bei Bedarf Abgas an der Turbine vorbeileitet.",
                nl: "De wastegate regelt turbodruk door indien nodig uitlaatgas langs de turbine te leiden."
            }
        },
        {
            question: {
                en: "What is thermal efficiency in F1 hybrid engines?",
                es: "¿Qué es la eficiencia térmica en motores híbridos de F1?",
                de: "Was ist thermische Effizienz in F1-Hybridmotoren?",
                nl: "Wat is thermische efficiëntie in F1-hybride motoren?"
            },
            options: ["Engine temperature", "Percentage of fuel energy converted to power", "Cooling efficiency", "Exhaust temperature"],
            correct: 1,
            explanation: {
                en: "Modern F1 hybrid engines achieve over 50% thermal efficiency, converting more than half of fuel energy into power.",
                es: "Los motores híbridos modernos logran más del 50% de eficiencia térmica, convirtiendo más de la mitad de energía en potencia.",
                de: "Moderne F1-Hybridmotoren erreichen über 50% thermische Effizienz und wandeln mehr als die Hälfte der Kraftstoffenergie in Leistung um.",
                nl: "Moderne F1-hybride motoren behalen meer dan 50% thermische efficiëntie, wat meer dan de helft van brandstofenergie omzet in vermogen."
            }
        },
        {
            question: {
                en: "What are wheel tethers designed to prevent?",
                es: "¿Qué están diseñados para prevenir los cables de rueda?",
                de: "Was sollen Radkabel verhindern?",
                nl: "Wat zijn wielbevestigingen ontworpen om te voorkomen?"
            },
            options: ["Tire punctures", "Wheels detaching in accidents", "Brake overheating", "Suspension failure"],
            correct: 1,
            explanation: {
                en: "Wheel tethers are strong cables connecting wheels to the chassis to prevent them from flying off in accidents.",
                es: "Los cables de rueda son cables fuertes que conectan ruedas al chasis para evitar que salgan volando en accidentes.",
                de: "Radkabel sind starke Kabel die Räder mit dem Chassis verbinden um zu verhindern dass sie bei Unfällen wegfliegen.",
                nl: "Wielbevestigingen zijn sterke kabels die wielen verbinden met het chassis om te voorkomen dat ze bij ongevallen wegvliegen."
            }
        },
        {
            question: {
                en: "What is the purpose of the safety cell (survival cell)?",
                es: "¿Cuál es el propósito de la célula de seguridad?",
                de: "Was ist der Zweck der Sicherheitszelle?",
                nl: "Wat is het doel van de veiligheidscel?"
            },
            options: ["Hold fuel", "Protect driver in impacts with strong carbon structure", "Store batteries", "Cool the engine"],
            correct: 1,
            explanation: {
                en: "The safety cell is the reinforced carbon fiber structure around the driver designed to withstand massive impacts.",
                es: "La célula de seguridad es la estructura reforzada de fibra de carbono alrededor del piloto para resistir impactos masivos.",
                de: "Die Sicherheitszelle ist die verstärkte Kohlefaserstruktur um den Fahrer zum Schutz bei massiven Aufprällen.",
                nl: "De veiligheidscel is de versterkte carbon fiber structuur rond de coureur ontworpen om massieve impacts te weerstaan."
            }
        },
        {
            question: {
                en: "What is anti-stall in F1 engines?",
                es: "¿Qué es el anti-stall en motores de F1?",
                de: "Was ist Anti-Stall in F1-Motoren?",
                nl: "Wat is anti-stall in F1-motoren?"
            },
            options: ["Cooling system", "Prevents engine from stalling when stopped", "Turbo boost system", "Fuel injection mode"],
            correct: 1,
            explanation: {
                en: "Anti-stall automatically engages the clutch and keeps the engine running if it would otherwise stall during incidents.",
                es: "El anti-stall activa automáticamente el embrague y mantiene el motor funcionando si se pararía durante incidentes.",
                de: "Anti-Stall aktiviert automatisch die Kupplung und hält den Motor am Laufen wenn er sonst bei Zwischenfällen absterben würde.",
                nl: "Anti-stall activeert automatisch de koppeling en houdt de motor draaiende als deze anders zou afslaan tijdens incidenten."
            }
        },
        {
            question: {
                en: "What is the fuel flow meter's purpose?",
                es: "¿Cuál es el propósito del medidor de flujo de combustible?",
                de: "Was ist der Zweck des Kraftstoffdurchflussmessers?",
                nl: "Wat is het doel van de brandstofstroommeter?"
            },
            options: ["Calculate remaining fuel", "Ensure teams don't exceed 100 kg/h fuel flow limit", "Measure fuel temperature", "Control fuel pressure"],
            correct: 1,
            explanation: {
                en: "The FIA-mandated fuel flow meter ensures teams comply with the 100 kg/hour maximum fuel flow regulation.",
                es: "El medidor de flujo mandatorio de la FIA asegura que los equipos cumplan con el límite de 100 kg/hora.",
                de: "Der von der FIA vorgeschriebene Durchflussmesser stellt sicher dass Teams die 100 kg/Stunde-Grenze einhalten.",
                nl: "De door FIA verplichte brandstofstroommeter zorgt dat teams voldoen aan de 100 kg/uur maximum brandstofstroom regeling."
            }
        },
        {
            question: {
                en: "What are floor edges (floor fences) designed for?",
                es: "¿Para qué están diseñados los bordes del piso?",
                de: "Wofür sind Bodenkanten konzipiert?",
                nl: "Waarvoor zijn vloeranden ontworpen?"
            },
            options: ["Structural strength", "Control airflow under the car", "Protect against debris", "Reduce weight"],
            correct: 1,
            explanation: {
                en: "Floor edges create vortices and seal the floor edges to prevent air from escaping, maximizing ground effect.",
                es: "Los bordes del piso crean vórtices y sellan los bordes para evitar que escape aire, maximizando efecto suelo.",
                de: "Bodenkanten erzeugen Wirbel und versiegeln die Bodenkanten um Luftaustritt zu verhindern und Bodeneffekt zu maximieren.",
                nl: "Vloeranden creëren vortexen en verzegelen de vloerkanten om te voorkomen dat lucht ontsnapt, wat grondeffect maximaliseert."
            }
        },
        {
            question: {
                en: "What is the beam wing's function?",
                es: "¿Cuál es la función del beam wing?",
                de: "Was ist die Funktion des Beam Wing?",
                nl: "Wat is de functie van de beam wing?"
            },
            options: ["Structural support only", "Small rear wing element generating additional downforce", "Exhaust pipe", "DRS mechanism"],
            correct: 1,
            explanation: {
                en: "The beam wing is a small horizontal element above the diffuser that generates additional rear downforce.",
                es: "El beam wing es un pequeño elemento horizontal sobre el difusor que genera carga aerodinámica trasera adicional.",
                de: "Der Beam Wing ist ein kleines horizontales Element über dem Diffusor das zusätzlichen Heck-Abtrieb erzeugt.",
                nl: "De beam wing is een klein horizontaal element boven de diffuser dat extra achterwaartse neerwaartse druk genereert."
            }
        },
        {
            question: {
                en: "What is the function of turning vanes?",
                es: "¿Cuál es la función de las turning vanes?",
                de: "Was ist die Funktion von Turning Vanes?",
                nl: "Wat is de functie van turning vanes?"
            },
            options: ["Steering assistance", "Direct airflow to optimal areas", "Support suspension", "Cool brakes"],
            correct: 1,
            explanation: {
                en: "Turning vanes are small aerodynamic elements that redirect and condition airflow to different parts of the car.",
                es: "Las turning vanes son pequeños elementos aerodinámicos que redirigen el flujo de aire a diferentes partes del coche.",
                de: "Turning Vanes sind kleine aerodynamische Elemente die Luftstrom zu verschiedenen Autoteilen umleiten.",
                nl: "Turning vanes zijn kleine aerodynamische elementen die luchtstroom omleiden naar verschillende delen van de auto."
            }
        },
        {
            question: {
                en: "What is the purpose of ride height sensors?",
                es: "¿Cuál es el propósito de los sensores de altura de marcha?",
                de: "Was ist der Zweck von Fahrhöhensensoren?",
                nl: "Wat is het doel van rijhoogtesensoren?"
            },
            options: ["Measure speed", "Monitor car's distance from ground for optimal aerodynamics", "Control suspension", "Measure tire pressure"],
            correct: 1,
            explanation: {
                en: "Ride height sensors measure the car's distance from the ground, helping teams optimize aerodynamic performance and prevent floor strikes.",
                es: "Los sensores de altura miden la distancia del coche al suelo, ayudando a optimizar rendimiento aerodinámico.",
                de: "Fahrhöhensensoren messen die Distanz des Autos vom Boden und helfen aerodynamische Leistung zu optimieren.",
                nl: "Rijhoogtesensoren meten de afstand van de auto tot de grond, wat teams helpt aerodynamische prestaties te optimaliseren en vloercontact te voorkomen."
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
