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
