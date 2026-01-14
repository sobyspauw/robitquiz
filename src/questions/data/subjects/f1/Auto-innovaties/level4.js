(function() {
    const level4Questions = [
        {
            question: {
                en: "When was active suspension banned in Formula 1?",
                es: "¿Cuándo se prohibió la suspensión activa en la Fórmula 1?",
                de: "Wann wurde aktive Federung in der Formel 1 verboten?",
                nl: "Wanneer werd actieve ophanging verboden in Formule 1?"
            },
            options: ["1990", "1992", "1994", "1996"],
            correct: 2,
            explanation: {
                en: "Active suspension was banned at the end of 1993, effective from the 1994 season as part of driver aid bans.",
                es: "La suspensión activa se prohibió a finales de 1993, efectiva desde la temporada 1994 como parte de prohibiciones de ayudas.",
                es: "Aktive Federung wurde Ende 1993 verboten, wirksam ab der Saison 1994 als Teil der Fahrhilfen-Verbote.",
                nl: "Actieve ophanging werd eind 1993 verboden, effectief vanaf het seizoen 1994 als onderdeel van rijhulpverboden."
            }
        },
        {
            question: {
                en: "When was traction control banned in Formula 1?",
                es: "¿Cuándo se prohibió el control de tracción en la Fórmula 1?",
                de: "Wann wurde Traktionskontrolle in der Formel 1 verboten?",
                nl: "Wanneer werd tractiecontrole verboden in Formule 1?"
            },
            options: ["2004", "2006", "2008", "2010"],
            correct: 2,
            explanation: {
                en: "Traction control was finally banned from the 2008 season to increase driver skill importance.",
                es: "El control de tracción fue finalmente prohibido desde la temporada 2008 para aumentar importancia de habilidad.",
                de: "Traktionskontrolle wurde ab der Saison 2008 endgültig verboten, um die Fahrerleistung wichtiger zu machen.",
                nl: "Tractiecontrole werd uiteindelijk verboden vanaf het seizoen 2008 om het belang van rijvaardigheid te verhogen."
            }
        },
        {
            question: {
                en: "What was the mass damper system that was banned?",
                es: "¿Qué era el sistema de amortiguador de masa que se prohibió?",
                de: "Was war das verbotene Massendämpfer-System?",
                nl: "Wat was het massademper systeem dat verboden werd?"
            },
            options: ["Engine component", "Weighted device to reduce vibrations", "Suspension spring", "Brake system"],
            correct: 1,
            explanation: {
                en: "The mass damper was a weighted device that reduced chassis vibrations, improving tire contact. Renault used it in 2005-2006.",
                es: "El amortiguador de masa era un dispositivo con peso que reducía vibraciones del chasis. Renault lo usó en 2005-2006.",
                de: "Der Massendämpfer war ein Gewicht zur Reduzierung von Chassis-Vibrationen. Renault nutzte ihn 2005-2006.",
                nl: "De massademper was een gewogen apparaat dat chassistrillingen verminderde. Renault gebruikte het in 2005-2006."
            }
        },
        {
            question: {
                en: "When was the F-duct system banned?",
                es: "¿Cuándo se prohibió el sistema F-duct?",
                de: "Wann wurde das F-Duct-System verboten?",
                nl: "Wanneer werd het F-duct systeem verboden?"
            },
            options: ["2009", "2010", "2011", "2012"],
            correct: 2,
            explanation: {
                en: "The F-duct was banned from the 2011 season due to safety concerns about drivers taking hands off the wheel.",
                es: "El F-duct se prohibió desde la temporada 2011 por preocupaciones de seguridad sobre pilotos quitando manos del volante.",
                de: "Das F-Duct wurde ab 2011 verboten wegen Sicherheitsbedenken, da Fahrer Hände vom Lenkrad nahmen.",
                nl: "Het F-duct werd vanaf seizoen 2011 verboden vanwege veiligheidszorgen over coureurs die handen van het stuur haalden."
            }
        },
        {
            question: {
                en: "How did the FIA rule on the double diffuser legality in 2009?",
                es: "¿Cómo dictaminó la FIA sobre la legalidad del difusor doble en 2009?",
                de: "Wie entschied die FIA über die Legalität des Double-Diffusors 2009?",
                nl: "Hoe oordeelde de FIA over de legaliteit van de dubbele diffuser in 2009?"
            },
            options: ["Immediately banned it", "Declared it legal", "Allowed it for one race only", "Required team to pay fine"],
            correct: 1,
            explanation: {
                en: "The FIA declared the double diffuser legal, forcing other teams to quickly develop their own versions.",
                es: "La FIA declaró el difusor doble legal, forzando a otros equipos a desarrollar rápidamente sus propias versiones.",
                de: "Die FIA erklärte den Double-Diffusor für legal, was andere Teams zwang, schnell eigene Versionen zu entwickeln.",
                nl: "De FIA verklaarde de dubbele diffuser legaal, wat andere teams dwong snel hun eigen versies te ontwikkelen."
            }
        },
        {
            question: {
                en: "How does the FIA test for flexible bodywork?",
                es: "¿Cómo prueba la FIA las carrocerías flexibles?",
                de: "Wie testet die FIA auf flexible Karosserieteile?",
                nl: "Hoe test de FIA op flexibele carrosserie?"
            },
            options: ["Visual inspection only", "Static load tests with deflection limits", "Only wind tunnel testing", "Dynamic track testing only"],
            correct: 1,
            explanation: {
                en: "The FIA applies specific static loads to bodywork and measures deflection against regulatory limits.",
                es: "La FIA aplica cargas estáticas específicas a la carrocería y mide la deflexión contra límites reglamentarios.",
                de: "Die FIA wendet spezifische statische Lasten auf Karosserieteile an und misst die Durchbiegung.",
                nl: "De FIA past specifieke statische belastingen toe op carrosserie en meet de doorbuiging tegen regellimieten."
            }
        },
        {
            question: {
                en: "What are parc fermé rules?",
                es: "¿Qué son las reglas de parc fermé?",
                de: "Was sind die Parc-Fermé-Regeln?",
                nl: "Wat zijn parc fermé regels?"
            },
            options: ["Parking rules", "Restrictions on car modifications between qualifying and race", "Team budget limits", "Driver conduct rules"],
            correct: 1,
            explanation: {
                en: "Parc fermé rules prevent major car changes between qualifying and race, ensuring cars race in qualifying specification.",
                es: "Las reglas de parc fermé previenen cambios mayores entre clasificación y carrera, asegurando misma especificación.",
                de: "Parc-Fermé-Regeln verhindern größere Änderungen zwischen Qualifying und Rennen.",
                nl: "Parc fermé regels voorkomen grote wijzigingen tussen kwalificatie en race, wat zorgt dat auto's in kwalificatiespecificatie racen."
            }
        },
        {
            question: {
                en: "What movable aerodynamic devices are currently allowed in F1?",
                es: "¿Qué dispositivos aerodinámicos móviles están actualmente permitidos en F1?",
                de: "Welche beweglichen aerodynamischen Vorrichtungen sind derzeit in F1 erlaubt?",
                nl: "Welke beweegbare aerodynamische apparaten zijn momenteel toegestaan in F1?"
            },
            options: ["DRS only", "DRS and active suspension", "All movable aero", "None are allowed"],
            correct: 0,
            explanation: {
                en: "Currently, only DRS (Drag Reduction System) is allowed as a movable aerodynamic device in specific zones.",
                es: "Actualmente, solo el DRS está permitido como dispositivo aerodinámico móvil en zonas específicas.",
                de: "Derzeit ist nur DRS als bewegliche aerodynamische Vorrichtung in bestimmten Zonen erlaubt.",
                nl: "Momenteel is alleen DRS toegestaan als beweegbaar aerodynamisch apparaat in specifieke zones."
            }
        },
        {
            question: {
                en: "What radio communication restrictions exist in F1?",
                es: "¿Qué restricciones de comunicación por radio existen en F1?",
                de: "Welche Funkbeschränkungen gibt es in F1?",
                nl: "Welke radiocommunicatiebeperkingen bestaan er in F1?"
            },
            options: ["No restrictions", "Teams cannot give specific driving instructions", "Radio completely banned", "Only pit stop communication allowed"],
            correct: 1,
            explanation: {
                en: "Teams are restricted from giving specific driving instructions like brake points, gear selections, or ideal racing lines.",
                es: "Los equipos no pueden dar instrucciones específicas de conducción como puntos de frenado o selecciones de marcha.",
                de: "Teams dürfen keine spezifischen Fahranweisungen wie Bremspunkte oder Gangwahl geben.",
                nl: "Teams mogen geen specifieke rijinstructies geven zoals rempunten, versnellingskeuzes of ideale racelijnen."
            }
        },
        {
            question: {
                en: "Why was active suspension so dominant?",
                es: "¿Por qué era tan dominante la suspensión activa?",
                de: "Warum war aktive Federung so dominant?",
                nl: "Waarom was actieve ophanging zo dominant?"
            },
            options: ["Lighter weight", "Maintained perfect ride height for optimal aerodynamics", "Improved fuel economy", "Better tire wear"],
            correct: 1,
            explanation: {
                en: "Active suspension maintained perfect ride height in all conditions, maximizing aerodynamic efficiency constantly.",
                es: "La suspensión activa mantenía altura perfecta en todas condiciones, maximizando eficiencia aerodinámica constantemente.",
                de: "Aktive Federung hielt perfekte Fahrhöhe unter allen Bedingungen und maximierte aerodynamische Effizienz.",
                nl: "Actieve ophanging hield perfecte rijhoogte aan onder alle omstandigheden, wat aerodynamische efficiëntie maximaliseerde."
            }
        },
        {
            question: {
                en: "Which team famously used active suspension in the early 1990s?",
                es: "¿Qué equipo usó famosamente la suspensión activa a principios de los 90?",
                de: "Welches Team nutzte Anfang der 1990er berühmt aktive Federung?",
                nl: "Welk team gebruikte beroemd actieve ophanging in het begin van de jaren 90?"
            },
            options: ["Ferrari", "McLaren", "Williams", "Benetton"],
            correct: 2,
            explanation: {
                en: "Williams pioneered and perfected active suspension, dominating 1992-1993 with FW14B and FW15C.",
                es: "Williams fue pionero y perfeccionó la suspensión activa, dominando 1992-1993 con FW14B y FW15C.",
                de: "Williams war Pionier und perfektionierte aktive Federung, dominierte 1992-1993 mit FW14B und FW15C.",
                nl: "Williams was pionier en perfecteerde actieve ophanging, domineerde 1992-1993 met FW14B en FW15C."
            }
        },
        {
            question: {
                en: "What other driver aids were banned alongside active suspension in 1994?",
                es: "¿Qué otras ayudas al piloto se prohibieron junto con la suspensión activa en 1994?",
                de: "Welche anderen Fahrhilfen wurden 1994 zusammen mit aktiver Federung verboten?",
                nl: "Welke andere rijhulpsystemen werden in 1994 samen met actieve ophanging verboden?"
            },
            options: ["ABS, traction control, launch control", "Power steering only", "Paddle shifters", "Telemetry"],
            correct: 0,
            explanation: {
                en: "The 1994 regulations banned active suspension, ABS, traction control, and launch control to increase driver skill importance.",
                es: "Las regulaciones de 1994 prohibieron suspensión activa, ABS, control de tracción y control de lanzamiento.",
                de: "Die 1994-Regeln verboten aktive Federung, ABS, Traktionskontrolle und Startkontrolle.",
                nl: "De regels van 1994 verboden actieve ophanging, ABS, tractiecontrole en startcontrole om rijvaardigheid belangrijker te maken."
            }
        },
        {
            question: {
                en: "When was the mass damper banned?",
                es: "¿Cuándo se prohibió el amortiguador de masa?",
                de: "Wann wurde der Massendämpfer verboten?",
                nl: "Wanneer werd de massademper verboden?"
            },
            options: ["2004", "2006", "2008", "2010"],
            correct: 1,
            explanation: {
                en: "The mass damper was banned mid-season in 2006 after rivals protested its legality.",
                es: "El amortiguador de masa se prohibió a mitad de temporada en 2006 después de protestas de rivales.",
                de: "Der Massendämpfer wurde 2006 in der Mitte der Saison nach Protesten verboten.",
                nl: "De massademper werd halverwege het seizoen 2006 verboden na protesten van rivalen over legaliteit."
            }
        },
        {
            question: {
                en: "Which team developed the F-duct system?",
                es: "¿Qué equipo desarrolló el sistema F-duct?",
                de: "Welches Team entwickelte das F-Duct-System?",
                nl: "Welk team ontwikkelde het F-duct systeem?"
            },
            options: ["Red Bull", "Ferrari", "McLaren", "Mercedes"],
            correct: 2,
            explanation: {
                en: "McLaren developed the innovative F-duct system for the 2010 season, providing a significant straight-line speed advantage.",
                es: "McLaren desarrolló el innovador sistema F-duct para la temporada 2010, proporcionando ventaja significativa en rectas.",
                de: "McLaren entwickelte das innovative F-Duct-System für die Saison 2010 mit großem Vorteil auf Geraden.",
                nl: "McLaren ontwikkelde het innovatieve F-duct systeem voor het seizoen 2010, wat een significant voordeel op rechte stukken bood."
            }
        },
        {
            question: {
                en: "What is the deflection limit for front wings under FIA testing?",
                es: "¿Cuál es el límite de deflexión para alas delanteras bajo pruebas FIA?",
                de: "Was ist die Durchbiegungsgrenze für Frontflügel bei FIA-Tests?",
                nl: "Wat is de doorbuigingslimiet voor voorvleugels bij FIA-testen?"
            },
            options: ["No deflection allowed", "Maximum 5mm under specified load", "Maximum 20mm", "No specific limit"],
            correct: 1,
            explanation: {
                en: "The FIA allows maximum 5mm deflection on front wings when a 50kg load is applied at specific points.",
                es: "La FIA permite máximo 5mm de deflexión en alas delanteras cuando se aplica carga de 50kg en puntos específicos.",
                de: "Die FIA erlaubt maximal 5mm Durchbiegung am Frontflügel bei 50kg Last an bestimmten Punkten.",
                nl: "De FIA staat maximaal 5mm doorbuiging toe op voorvleugels wanneer 50kg belasting wordt toegepast op specifieke punten."
            }
        },
        {
            question: {
                en: "What can teams change under parc fermé conditions?",
                es: "¿Qué pueden cambiar los equipos bajo condiciones de parc fermé?",
                de: "Was können Teams unter Parc-Fermé-Bedingungen ändern?",
                nl: "Wat kunnen teams veranderen onder parc fermé omstandigheden?"
            },
            options: ["Everything", "Only tires and fuel", "Only engine settings", "Absolutely nothing"],
            correct: 1,
            explanation: {
                en: "Under parc fermé, teams can only change tires, fuel, and make minor adjustments to front wing angle and brake balance.",
                es: "Bajo parc fermé, los equipos solo pueden cambiar neumáticos, combustible y ajustes menores de ala y balance de frenos.",
                de: "Unter Parc Fermé können Teams nur Reifen, Kraftstoff und geringfügige Frontflügel- und Bremsbalance-Anpassungen ändern.",
                nl: "Onder parc fermé kunnen teams alleen banden, brandstof wijzigen en kleine aanpassingen maken aan voorvleugelhoek en rembalans."
            }
        },
        {
            question: {
                en: "Why were double diffusers ultimately banned?",
                es: "¿Por qué se prohibieron finalmente los difusores dobles?",
                de: "Warum wurden Double-Diffusoren letztendlich verboten?",
                nl: "Waarom werden dubbele diffusers uiteindelijk verboden?"
            },
            options: ["Too expensive", "New regulations closed the loophole for 2011", "Safety concerns", "Environmental reasons"],
            correct: 1,
            explanation: {
                en: "The 2011 regulations specifically closed the bodywork loophole that allowed double diffusers to exist.",
                es: "Las regulaciones de 2011 específicamente cerraron la laguna de carrocería que permitía difusores dobles.",
                de: "Die 2011-Regeln schlossen gezielt die Karosserie-Lücke, die Double-Diffusoren ermöglichte.",
                nl: "De regels van 2011 sloten specifiek de maas in de carrosserieregels die dubbele diffusers mogelijk maakten."
            }
        },
        {
            question: {
                en: "What is considered 'driver coaching' that is banned over radio?",
                es: "¿Qué se considera 'asesoramiento al piloto' que está prohibido por radio?",
                de: "Was gilt als verbotenes 'Fahrer-Coaching' über Funk?",
                nl: "Wat wordt beschouwd als 'coureur coaching' dat verboden is via de radio?"
            },
            options: ["All communication", "Specific technical instructions on how to drive", "Strategy information", "Weather updates"],
            correct: 1,
            explanation: {
                en: "Banned coaching includes specific instructions like 'brake 10 meters later' or 'use 7th gear in turn 3'.",
                es: "El asesoramiento prohibido incluye instrucciones específicas como 'frena 10 metros más tarde' o 'usa 7ª en curva 3'.",
                de: "Verbotenes Coaching umfasst spezifische Anweisungen wie '10 Meter später bremsen' oder '7. Gang in Kurve 3'.",
                nl: "Verboden coaching omvat specifieke instructies zoals 'rem 10 meter later' of 'gebruik 7e versnelling in bocht 3'."
            }
        },
        {
            question: {
                en: "When did DRS become the only allowed movable aerodynamic device?",
                es: "¿Cuándo se convirtió el DRS en el único dispositivo aerodinámico móvil permitido?",
                de: "Wann wurde DRS die einzige erlaubte bewegliche aerodynamische Vorrichtung?",
                nl: "Wanneer werd DRS het enige toegestane beweegbare aerodynamische apparaat?"
            },
            options: ["2009", "2011", "2014", "2017"],
            correct: 1,
            explanation: {
                en: "DRS was introduced in 2011 as the only permitted movable aerodynamic device to aid overtaking.",
                es: "El DRS se introdujo en 2011 como el único dispositivo aerodinámico móvil permitido para ayudar adelantamientos.",
                de: "DRS wurde 2011 als einzige erlaubte bewegliche aerodynamische Vorrichtung zur Überholhilfe eingeführt.",
                nl: "DRS werd in 2011 geïntroduceerd als het enige toegestane beweegbare aerodynamische apparaat om inhalen te helpen."
            }
        },
        {
            question: {
                en: "What happens if a team violates parc fermé rules?",
                es: "¿Qué sucede si un equipo viola las reglas de parc fermé?",
                de: "Was passiert, wenn ein Team die Parc-Fermé-Regeln verletzt?",
                nl: "Wat gebeurt er als een team de parc fermé regels overtreedt?"
            },
            options: ["Warning only", "Must start from pit lane", "Disqualification", "Time penalty"],
            correct: 1,
            explanation: {
                en: "Violating parc fermé rules typically requires the car to start from the pit lane as penalty.",
                es: "Violar las reglas de parc fermé típicamente requiere que el coche arranque desde el pit lane como penalización.",
                de: "Verstöße gegen Parc-Fermé-Regeln erfordern typischerweise Start aus der Boxengasse als Strafe.",
                nl: "Het overtreden van parc fermé regels vereist doorgaans dat de auto vanaf de pitlane start als straf."
            }
        },
        {
            question: {
                en: "What was the fan car developed by Brabham in 1978?",
                es: "¿Qué era el coche con ventilador desarrollado por Brabham en 1978?",
                de: "Was war das Fan-Car das Brabham 1978 entwickelte?",
                nl: "Wat was de fan car ontwikkeld door Brabham in 1978?"
            },
            options: ["Cooling system", "Large fan sucking car to ground for downforce", "Turbocharger", "Engine component"],
            correct: 1,
            explanation: {
                en: "The Brabham BT46B used a large fan to suck the car to the ground, creating massive downforce. Won once before being voluntarily withdrawn.",
                es: "El Brabham BT46B usó un gran ventilador para succionar el coche al suelo. Ganó una vez antes de retirarse voluntariamente.",
                de: "Der Brabham BT46B nutzte einen großen Lüfter um das Auto zum Boden zu saugen. Gewann einmal bevor er freiwillig zurückgezogen wurde.",
                nl: "De Brabham BT46B gebruikte een grote ventilator om de auto naar de grond te zuigen. Won eens voor vrijwillige terugtrekking."
            }
        },
        {
            question: {
                en: "What was the Tyrrell P34 six-wheeler innovation?",
                es: "¿Qué era la innovación del Tyrrell P34 de seis ruedas?",
                de: "Was war die Tyrrell P34 Sechsrad-Innovation?",
                nl: "Wat was de Tyrrell P34 zeswieler innovatie?"
            },
            options: ["Four rear wheels", "Four small front wheels for better grip and less drag", "Six wheels same size", "Extra wheels for stability"],
            correct: 1,
            explanation: {
                en: "The Tyrrell P34 used four small front wheels to increase contact patch while reducing frontal drag. Used 1976-1977.",
                es: "El Tyrrell P34 usó cuatro ruedas delanteras pequeñas para aumentar contacto y reducir resistencia. Usado 1976-1977.",
                de: "Der Tyrrell P34 nutzte vier kleine Vorderräder für mehr Auflagefläche bei weniger Frontaldrag. 1976-1977 genutzt.",
                nl: "De Tyrrell P34 gebruikte vier kleine voorwielen voor meer contactoppervlak bij minder frontale luchtweerstand. Gebruikt 1976-1977."
            }
        },
        {
            question: {
                en: "When were blown diffusers banned?",
                es: "¿Cuándo se prohibieron los difusores soplados?",
                de: "Wann wurden angeblasene Diffusoren verboten?",
                nl: "Wanneer werden geblazen diffusers verboden?"
            },
            options: ["2009", "2010", "2012", "2014"],
            correct: 2,
            explanation: {
                en: "Blown diffusers were banned from the 2012 season after dominating 2010-2011, particularly with Red Bull Racing.",
                es: "Los difusores soplados se prohibieron desde la temporada 2012 después de dominar 2010-2011, particularmente con Red Bull Racing.",
                de: "Angeblasene Diffusoren wurden ab 2012 verboten nach Dominanz 2010-2011, besonders bei Red Bull Racing.",
                nl: "Geblazen diffusers werden verboden vanaf seizoen 2012 na dominantie 2010-2011, vooral met Red Bull Racing."
            }
        },
        {
            question: {
                en: "What is the purpose of CFD (Computational Fluid Dynamics) restrictions?",
                es: "¿Cuál es el propósito de las restricciones CFD?",
                de: "Was ist der Zweck von CFD-Beschränkungen?",
                nl: "Wat is het doel van CFD-beperkingen?"
            },
            options: ["No purpose", "Control costs and level playing field between teams", "Improve safety only", "Environmental concerns"],
            correct: 1,
            explanation: {
                en: "CFD restrictions limit simulation time to control development costs and help smaller teams compete with larger budgets.",
                es: "Las restricciones CFD limitan tiempo de simulación para controlar costos y ayudar a equipos pequeños competir.",
                de: "CFD-Beschränkungen limitieren Simulationszeit um Kosten zu kontrollieren und kleineren Teams zu helfen.",
                nl: "CFD-beperkingen beperken simulatietijd om kosten te beheersen en kleinere teams te helpen concurreren met grotere budgetten."
            }
        },
        {
            question: {
                en: "What is the wind tunnel testing restriction?",
                es: "¿Cuál es la restricción de pruebas en túnel de viento?",
                de: "Was ist die Windkanal-Testbeschränkung?",
                nl: "Wat is de windtunnel-testbeperking?"
            },
            options: ["No restrictions", "Limited runs based on championship position", "Completely banned", "Only for new teams"],
            correct: 1,
            explanation: {
                en: "Teams are allocated sliding scale of wind tunnel runs based on championship position - lower teams get more testing time.",
                es: "Los equipos reciben tiempo de túnel variable según posición en campeonato - equipos bajos obtienen más tiempo.",
                de: "Teams erhalten gestaffelte Windkanaltests basierend auf Meisterschaftsposition - untere Teams bekommen mehr Zeit.",
                nl: "Teams krijgen variabele windtunneltijd gebaseerd op kampioenschap positie - lagere teams krijgen meer testtijd."
            }
        },
        {
            question: {
                en: "What was the DAS (Dual Axis Steering) system?",
                es: "¿Qué era el sistema DAS (Dual Axis Steering)?",
                de: "Was war das DAS (Dual Axis Steering) System?",
                nl: "Wat was het DAS (Dual Axis Steering) systeem?"
            },
            options: ["Power steering", "Toe angle adjustment by pushing/pulling steering wheel", "Active suspension", "DRS activation"],
            correct: 1,
            explanation: {
                en: "DAS allowed Mercedes to adjust front toe angle by pushing/pulling the steering wheel. Used in 2020 before being banned for 2021.",
                es: "DAS permitía a Mercedes ajustar ángulo de convergencia empujando/tirando del volante. Usado en 2020 antes de prohibirse en 2021.",
                de: "DAS erlaubte Mercedes Sturzwinkel durch Drücken/Ziehen des Lenkrads anzupassen. 2020 genutzt dann 2021 verboten.",
                nl: "DAS stelde Mercedes in staat toe-hoek aan te passen door stuur te duwen/trekken. Gebruikt in 2020 voor het werd verboden in 2021."
            }
        },
        {
            question: {
                en: "What is the technical directive process in F1?",
                es: "¿Qué es el proceso de directiva técnica en F1?",
                de: "Was ist der Prozess technischer Direktiven in F1?",
                nl: "Wat is het technische richtlijn proces in F1?"
            },
            options: ["Team decisions", "FIA clarifications on rules and regulations", "Driver instructions", "Media guidelines"],
            correct: 1,
            explanation: {
                en: "Technical directives are FIA clarifications on technical regulations, often issued to close loopholes or address grey areas.",
                es: "Las directivas técnicas son aclaraciones de la FIA sobre regulaciones, emitidas para cerrar lagunas o áreas grises.",
                de: "Technische Direktiven sind FIA-Klarstellungen zu Regeln, oft erlassen um Lücken zu schließen oder Grauzonen zu adressieren.",
                nl: "Technische richtlijnen zijn FIA-verduidelijkingen over technische regels, vaak uitgegeven om mazen te dichten of grijze gebieden aan te pakken."
            }
        },
        {
            question: {
                en: "What is plank wear measurement for?",
                es: "¿Para qué es la medición del desgaste del plank?",
                de: "Wofür ist die Plank-Verschleißmessung?",
                nl: "Waarvoor is plank slijtage meting?"
            },
            options: ["Tire wear", "Ensure minimum ride height compliance", "Engine wear", "Brake wear"],
            correct: 1,
            explanation: {
                en: "The wooden plank underneath the car is measured post-race; excessive wear indicates illegal low ride height.",
                es: "El plank de madera bajo el coche se mide post-carrera; desgaste excesivo indica altura ilegal baja.",
                de: "Die Holzplatte unter dem Auto wird nach dem Rennen gemessen; übermäßiger Verschleiß zeigt illegale niedrige Fahrhöhe.",
                nl: "De houten plank onder de auto wordt na de race gemeten; overmatige slijtage wijst op illegaal lage rijhoogte."
            }
        },
        {
            question: {
                en: "What is the fuel temperature regulation?",
                es: "¿Cuál es la regulación de temperatura del combustible?",
                de: "Was ist die Kraftstofftemperatur-Regelung?",
                nl: "Wat is de brandstoftemperatuur regeling?"
            },
            options: ["No limit", "Must not be more than 10°C below ambient", "Must be frozen", "Must be heated"],
            correct: 1,
            explanation: {
                en: "Fuel temperature cannot be more than 10°C below ambient to prevent cooling fuel for extra density and power.",
                es: "La temperatura del combustible no puede ser más de 10°C bajo ambiente para prevenir enfriamiento para densidad extra.",
                de: "Kraftstofftemperatur darf nicht mehr als 10°C unter Umgebung sein um Kühlung für Extra-Dichte zu verhindern.",
                nl: "Brandstoftemperatuur mag niet meer dan 10°C onder omgevingstemperatuur zijn om koeling voor extra dichtheid te voorkomen."
            }
        },
        {
            question: {
                en: "What are skid blocks (planks) made of?",
                es: "¿De qué están hechos los skid blocks (planks)?",
                de: "Woraus bestehen Skid Blocks (Planks)?",
                nl: "Waar zijn skid blocks (planks) van gemaakt?"
            },
            options: ["Carbon fiber", "Titanium", "Jabroc (wood-based material)", "Aluminum"],
            correct: 2,
            explanation: {
                en: "Skid blocks are made of Jabroc, a wood-based material, and must not wear more than 1mm to ensure ride height compliance.",
                es: "Los skid blocks están hechos de Jabroc, material a base de madera, y no deben desgastarse más de 1mm.",
                de: "Skid Blocks bestehen aus Jabroc, einem Holzmaterial, und dürfen nicht mehr als 1mm abnutzen.",
                nl: "Skid blocks zijn gemaakt van Jabroc, een houtgebaseerd materiaal, en mogen niet meer dan 1mm slijten om rijhoogte naleving te waarborgen."
            }
        },
        {
            question: {
                en: "When were V10 engines phased out?",
                es: "¿Cuándo se eliminaron progresivamente los motores V10?",
                de: "Wann wurden V10-Motoren ausgemustert?",
                nl: "Wanneer werden V10-motoren uitgefaseerd?"
            },
            options: ["2004", "2006", "2008", "2010"],
            correct: 1,
            explanation: {
                en: "V10 engines were replaced by V8 engines for the 2006 season as part of cost reduction measures.",
                es: "Los motores V10 fueron reemplazados por V8 para la temporada 2006 como medida de reducción de costos.",
                de: "V10-Motoren wurden 2006 durch V8-Motoren ersetzt als Teil von Kostensenkungsmaßnahmen.",
                nl: "V10-motoren werden vervangen door V8-motoren voor het seizoen 2006 als onderdeel van kostenbesparingsmaatregelen."
            }
        },
        {
            question: {
                en: "What was the maximum RPM limit for V8 engines?",
                es: "¿Cuál era el límite máximo de RPM para motores V8?",
                de: "Was war die maximale Drehzahlgrenze für V8-Motoren?",
                nl: "Wat was de maximale RPM-limiet voor V8-motoren?"
            },
            options: ["15,000 RPM", "18,000 RPM", "19,000 RPM", "No limit"],
            correct: 1,
            explanation: {
                en: "V8 engines (2006-2013) were limited to 18,000 RPM to control costs and reduce noise.",
                es: "Los motores V8 (2006-2013) estaban limitados a 18,000 RPM para controlar costos y reducir ruido.",
                de: "V8-Motoren (2006-2013) waren auf 18.000 U/min begrenzt um Kosten zu kontrollieren und Lärm zu reduzieren.",
                nl: "V8-motoren (2006-2013) werden beperkt tot 18.000 RPM om kosten te beheersen en geluid te verminderen."
            }
        },
        {
            question: {
                en: "What is the cost cap introduced in 2021?",
                es: "¿Cuál es el tope de costos introducido en 2021?",
                de: "Was ist die 2021 eingeführte Budgetobergrenze?",
                nl: "Wat is de kostenbeperking geïntroduceerd in 2021?"
            },
            options: ["No limit", "$145 million per team per season", "£100 million", "€200 million"],
            correct: 1,
            explanation: {
                en: "The cost cap started at $145 million in 2021, excluding driver salaries, marketing, and top management salaries.",
                es: "El tope de costos comenzó en $145 millones en 2021, excluyendo salarios de pilotos, marketing y alta gerencia.",
                de: "Die Budgetobergrenze begann 2021 bei $145 Millionen, ohne Fahrer-, Marketing- und Top-Management-Gehälter.",
                nl: "De kostenbeperking begon op $145 miljoen in 2021, exclusief coureurssalarissen, marketing en top management salarissen."
            }
        },
        {
            question: {
                en: "What is the penalty for exceeding the cost cap?",
                es: "¿Cuál es la penalización por exceder el tope de costos?",
                de: "Was ist die Strafe für Überschreitung der Budgetobergrenze?",
                nl: "Wat is de straf voor overschrijding van de kostenbeperking?"
            },
            options: ["Warning only", "Financial penalties and/or points deductions", "Immediate disqualification", "No penalty"],
            correct: 1,
            explanation: {
                en: "Exceeding the cost cap can result in financial penalties, points deductions, wind tunnel time restrictions, or even exclusion.",
                es: "Exceder el tope puede resultar en multas financieras, deducciones de puntos, restricciones de túnel o exclusión.",
                de: "Überschreitung kann zu Geldstrafen, Punktabzug, Windkanal-Einschränkungen oder Ausschluss führen.",
                nl: "Overschrijding kan leiden tot financiële boetes, puntenaftrek, windtunnel-tijdbeperkingen of zelfs uitsluiting."
            }
        },
        {
            question: {
                en: "What is the minimum weight distribution regulation?",
                es: "¿Cuál es la regulación de distribución de peso mínima?",
                de: "Was ist die Mindestgewichtsverteilungsregelung?",
                nl: "Wat is de minimum gewichtsverdelingsregeling?"
            },
            options: ["No regulation", "Minimum weight on each axle to prevent extreme bias", "Must be 50/50", "All weight at rear"],
            correct: 1,
            explanation: {
                en: "Regulations specify minimum weight that must be on each axle to prevent teams from creating extreme weight distribution.",
                es: "Las regulaciones especifican peso mínimo en cada eje para prevenir distribuciones de peso extremas.",
                de: "Regeln spezifizieren Mindestgewicht pro Achse um extreme Gewichtsverteilungen zu verhindern.",
                nl: "Regelgeving specificeert minimumgewicht per as om te voorkomen dat teams extreme gewichtsverdelingen creëren."
            }
        },
        {
            question: {
                en: "What is the power unit allocation system?",
                es: "¿Qué es el sistema de asignación de unidades de potencia?",
                de: "Was ist das Antriebseinheit-Zuweisungssystem?",
                nl: "Wat is het power unit allocatiesysteem?"
            },
            options: ["Unlimited engines", "Limited number of components per season with grid penalties for extras", "One engine per race", "Two engines per season"],
            correct: 1,
            explanation: {
                en: "Drivers get limited power unit components (ICE, turbo, MGU-K, MGU-H, etc.) per season; exceeding allocation incurs grid penalties.",
                es: "Los pilotos reciben componentes limitados por temporada; exceder la asignación incurre en penalizaciones de parrilla.",
                de: "Fahrer erhalten begrenzte Antriebskomponenten pro Saison; Überschreitung führt zu Gridstrafen.",
                nl: "Coureurs krijgen beperkte power unit componenten per seizoen; overschrijding levert grid penalties op."
            }
        },
        {
            question: {
                en: "What is the scrutineering process?",
                es: "¿Qué es el proceso de scrutineering?",
                de: "Was ist der Scrutineering-Prozess?",
                nl: "Wat is het scrutineering proces?"
            },
            options: ["Media inspection", "Technical inspection to verify car compliance", "Driver medical check", "Team budget review"],
            correct: 1,
            explanation: {
                en: "Scrutineering is the FIA's technical inspection process to verify cars meet all technical regulations before competition.",
                es: "Scrutineering es el proceso de inspección técnica de la FIA para verificar cumplimiento antes de competición.",
                de: "Scrutineering ist der technische Inspektionsprozess der FIA zur Regelkonformität vor dem Wettbewerb.",
                nl: "Scrutineering is het technische inspectieproces van de FIA om te verifiëren dat auto's voldoen aan alle technische regels voor competitie."
            }
        },
        {
            question: {
                en: "What are crash test requirements?",
                es: "¿Cuáles son los requisitos de pruebas de choque?",
                de: "Was sind die Crashtest-Anforderungen?",
                nl: "Wat zijn de crashtest vereisten?"
            },
            options: ["No tests required", "Extensive static and dynamic tests for safety certification", "Only frontal impact", "Optional tests"],
            correct: 1,
            explanation: {
                en: "All F1 cars must pass extensive FIA crash tests including frontal, side, and rear impacts before racing.",
                es: "Todos los coches de F1 deben pasar extensas pruebas de choque FIA incluyendo impactos frontales, laterales y traseros.",
                de: "Alle F1-Autos müssen umfangreiche FIA-Crashtests bestehen einschließlich Front-, Seiten- und Heckaufprällen.",
                nl: "Alle F1-auto's moeten uitgebreide FIA crashtests doorstaan inclusief frontale, zij- en achterimpacts voor ze mogen racen."
            }
        },
        {
            question: {
                en: "What is the homologation process?",
                es: "¿Qué es el proceso de homologación?",
                de: "Was ist der Homologationsprozess?",
                nl: "Wat is het homologatieproces?"
            },
            options: ["Team registration", "Official FIA approval and certification of car components", "Driver licensing", "Circuit approval"],
            correct: 1,
            explanation: {
                en: "Homologation is the FIA's official approval process where teams submit components for testing and certification.",
                es: "La homologación es el proceso de aprobación oficial donde equipos someten componentes para pruebas y certificación.",
                de: "Homologation ist der offizielle FIA-Genehmigungsprozess wo Teams Komponenten zur Prüfung und Zertifizierung einreichen.",
                nl: "Homologatie is het officiële FIA-goedkeuringsproces waarbij teams componenten indienen voor testen en certificering."
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
    window.questionsByLevel['1 F1']['Auto-innovaties']['level4'] = level4Questions;
})();
