(function() {
    const level6Questions = [
        {
            question: {
                en: "What is the Coanda exhaust effect?",
                es: "¿Qué es el efecto Coanda de escape?",
                de: "Was ist der Coanda-Auspuff-Effekt?",
                nl: "Wat is het Coanda-uitlaateffect?"
            },
            options: ["Engine cooling method", "Exhaust gases following curved bodywork to energize airflow", "Fuel injection system", "Turbo technology"],
            correct: 1,
            explanation: {
                en: "The Coanda effect uses exhaust gases that follow curved bodywork surfaces to energize airflow over aerodynamic surfaces.",
                es: "El efecto Coanda usa gases de escape que siguen superficies curvas de carrocería para energizar flujo sobre superficies aerodinámicas.",
                de: "Der Coanda-Effekt nutzt Abgase, die gekrümmten Karosserieflächen folgen, um Luftstrom zu energetisieren.",
                nl: "Het Coanda-effect gebruikt uitlaatgassen die gebogen carrosserieoppervlakken volgen om luchtstroom over aerodynamische oppervlakken te energiseren."
            }
        },
        {
            question: {
                en: "What is the Y250 vortex?",
                es: "¿Qué es el vórtice Y250?",
                de: "Was ist der Y250-Wirbel?",
                nl: "Wat is de Y250-vortex?"
            },
            options: ["Engine component", "Vortex generated 250mm from car centerline by front wing", "Tire compound", "Brake system"],
            correct: 1,
            explanation: {
                en: "The Y250 vortex is generated 250mm from the car's centerline by the front wing, helping manage airflow along the car.",
                es: "El vórtice Y250 se genera a 250mm de la línea central del coche por el ala delantera, ayudando a gestionar flujo de aire.",
                de: "Der Y250-Wirbel wird 250mm von der Mittellinie durch den Frontflügel erzeugt und hilft, Luftstrom zu steuern.",
                nl: "De Y250-vortex wordt 250mm vanaf de middellijn van de auto gegenereerd door de voorvleugel, wat helpt luchtstroom te beheren."
            }
        },
        {
            question: {
                en: "What were bargeboards used for before being banned?",
                es: "¿Para qué se usaban los bargeboards antes de ser prohibidos?",
                de: "Wofür wurden Bargeboards vor dem Verbot verwendet?",
                nl: "Waarvoor werden bargeboards gebruikt voordat ze verboden werden?"
            },
            options: ["Engine cooling", "Complex airflow management around sidepods", "Structural support", "Brake cooling"],
            correct: 1,
            explanation: {
                en: "Bargeboards were complex vertical elements that managed and conditioned airflow around the sidepods and underbody.",
                es: "Los bargeboards eran elementos verticales complejos que gestionaban y condicionaban flujo de aire alrededor de pontones.",
                de: "Bargeboards waren komplexe vertikale Elemente zur Steuerung des Luftstroms um Seitenkästen und Unterboden.",
                nl: "Bargeboards waren complexe verticale elementen die luchtstroom rond de sidepods en onderkant beheerden en conditioneerden."
            }
        },
        {
            question: {
                en: "What is the outwash philosophy in aerodynamics?",
                es: "¿Qué es la filosofía outwash en aerodinámica?",
                de: "Was ist die Outwash-Philosophie in der Aerodynamik?",
                nl: "Wat is de outwash-filosofie in aerodynamica?"
            },
            options: ["Directing air outward away from car", "Directing air inward toward car", "Cooling strategy", "Brake philosophy"],
            correct: 0,
            explanation: {
                en: "Outwash philosophy directs airflow outward away from the car's sides to manage wake and protect underbody flow.",
                es: "La filosofía outwash dirige el flujo de aire hacia afuera lejos de los lados del coche para gestionar estela.",
                de: "Outwash-Philosophie leitet Luftstrom nach außen von den Seiten weg, um Wake zu steuern.",
                nl: "Outwash-filosofie stuurt luchtstroom naar buiten weg van de zijkanten van de auto om wake te beheren en onderkant te beschermen."
            }
        },
        {
            question: {
                en: "What is the inwash philosophy in aerodynamics?",
                es: "¿Qué es la filosofía inwash en aerodinámica?",
                de: "Was ist die Inwash-Philosophie in der Aerodynamik?",
                nl: "Wat is de inwash-filosofie in aerodynamica?"
            },
            options: ["Directing air inward toward underbody", "Directing air outward", "Engine cooling method", "Tire cooling strategy"],
            correct: 0,
            explanation: {
                en: "Inwash philosophy directs airflow inward toward the underbody and diffuser to maximize ground effect downforce.",
                es: "La filosofía inwash dirige el flujo de aire hacia adentro hacia el fondo y difusor para maximizar carga de efecto suelo.",
                de: "Inwash-Philosophie leitet Luftstrom nach innen zu Unterboden und Diffusor für maximalen Bodeneffekt-Abtrieb.",
                nl: "Inwash-filosofie stuurt luchtstroom naar binnen richting onderkant en diffuser om grondeffect neerwaartse druk te maximaliseren."
            }
        },
        {
            question: {
                en: "What was Red Bull's high rake philosophy?",
                es: "¿Qué era la filosofía de alto rake de Red Bull?",
                de: "Was war Red Bulls High-Rake-Philosophie?",
                nl: "Wat was Red Bull's hoge rake-filosofie?"
            },
            options: ["High front, low rear ride height", "Low front, high rear ride height", "Level ride height", "Adjustable ride height"],
            correct: 0,
            explanation: {
                en: "High rake means higher front and lower rear ride height, creating a steep rake angle that Red Bull exploited for diffuser performance.",
                es: "Alto rake significa mayor altura delantera y menor trasera, creando ángulo pronunciado que Red Bull explotó para difusor.",
                de: "High Rake bedeutet höhere Vorder- und niedrigere Heckfahrhöhe für steilen Winkel, den Red Bull für Diffusor nutzte.",
                nl: "Hoge rake betekent hogere voor- en lagere achterrijhoogte, wat een steile hoek creëert die Red Bull uitbuitte voor diffuserprestaties."
            }
        },
        {
            question: {
                en: "What are flow conditioning devices?",
                es: "¿Qué son los dispositivos de acondicionamiento de flujo?",
                de: "Was sind Strömungskonditionierungsvorrichtungen?",
                nl: "Wat zijn flow conditioning apparaten?"
            },
            options: ["Engine parts", "Aerodynamic elements that guide and shape airflow", "Cooling systems", "Suspension components"],
            correct: 1,
            explanation: {
                en: "Flow conditioning devices are aerodynamic elements like vanes and fins that guide, shape, and prepare airflow for downstream components.",
                es: "Los dispositivos de acondicionamiento son elementos aerodinámicos como aletas que guían y preparan flujo para componentes.",
                de: "Strömungskonditionierungsvorrichtungen sind aerodynamische Elemente wie Finnen, die Luftstrom für nachfolgende Komponenten lenken.",
                nl: "Flow conditioning apparaten zijn aerodynamische elementen zoals vinnen die luchtstroom leiden en voorbereiden voor componenten stroomafwaarts."
            }
        },
        {
            question: {
                en: "What are vortex generators in F1?",
                es: "¿Qué son los generadores de vórtice en F1?",
                de: "Was sind Wirbel-Generatoren in F1?",
                nl: "Wat zijn vortex generators in F1?"
            },
            options: ["Engine components", "Small aerodynamic fins that create controlled vortices", "Cooling fans", "Brake ducts"],
            correct: 1,
            explanation: {
                en: "Vortex generators are small fins that create controlled vortices to energize airflow and prevent separation over surfaces.",
                es: "Los generadores de vórtice son pequeñas aletas que crean vórtices controlados para energizar flujo y prevenir separación.",
                de: "Wirbel-Generatoren sind kleine Finnen, die kontrollierte Wirbel erzeugen, um Luftstrom zu energetisieren.",
                nl: "Vortex generators zijn kleine vinnen die gecontroleerde vortexen creëren om luchtstroom te energiseren en scheiding te voorkomen."
            }
        },
        {
            question: {
                en: "What is slot gap optimization?",
                es: "¿Qué es la optimización de espacio entre ranuras?",
                de: "Was ist Schlitzspalt-Optimierung?",
                nl: "Wat is slot gap optimalisatie?"
            },
            options: ["Engine tuning", "Precise spacing between wing elements to maximize airflow", "Tire pressure adjustment", "Suspension setting"],
            correct: 1,
            explanation: {
                en: "Slot gap optimization involves precisely spacing wing elements to allow optimal airflow between them for maximum downforce.",
                es: "La optimización de espacio implica espaciar precisamente elementos de ala para permitir flujo óptimo entre ellos.",
                de: "Schlitzspalt-Optimierung bedeutet präzise Abstände zwischen Flügelelementen für optimalen Luftstrom.",
                nl: "Slot gap optimalisatie houdt in dat vleugelelementen precies worden geplaatst voor optimale luchtstroom ertussen voor maximale neerwaartse druk."
            }
        },
        {
            question: {
                en: "How did teams use Coanda exhaust positioning?",
                es: "¿Cómo usaban los equipos el posicionamiento de escape Coanda?",
                de: "Wie nutzten Teams die Coanda-Auspuff-Positionierung?",
                nl: "Hoe gebruikten teams Coanda-uitlaatpositionering?"
            },
            options: ["For cooling", "Exhausts angled to follow bodywork and energize diffuser", "For noise reduction", "For weight distribution"],
            correct: 1,
            explanation: {
                en: "Teams positioned exhausts to angle gases along curved bodywork, using the Coanda effect to energize flow to the diffuser.",
                es: "Los equipos posicionaban escapes para dirigir gases por carrocería curva, usando efecto Coanda para energizar flujo al difusor.",
                de: "Teams positionierten Auspuffe so, dass Gase entlang gekrümmter Karosserie zum Diffusor geleitet wurden.",
                nl: "Teams positioneerden uitlaten om gassen langs gebogen carrosserie te leiden, gebruikmakend van het Coanda-effect om flow naar diffuser te energiseren."
            }
        },
        {
            question: {
                en: "What advantage did high rake provide Red Bull?",
                es: "¿Qué ventaja proporcionaba el alto rake a Red Bull?",
                de: "Welchen Vorteil bot High Rake für Red Bull?",
                nl: "Welk voordeel bood hoge rake Red Bull?"
            },
            options: ["Better fuel economy", "Larger effective diffuser area and expansion", "Lower drag only", "Better tire wear"],
            correct: 1,
            explanation: {
                en: "High rake created a larger effective diffuser expansion area, generating more downforce from ground effect.",
                es: "El alto rake creaba un área de expansión de difusor efectiva más grande, generando más carga del efecto suelo.",
                de: "High Rake schuf größeren effektiven Diffusor-Expansionsbereich für mehr Abtrieb durch Bodeneffekt.",
                nl: "Hoge rake creëerde een groter effectief diffuser-expansiegebied, wat meer neerwaartse druk genereerde door grondeffect."
            }
        },
        {
            question: {
                en: "What is the purpose of bargeboard vortices?",
                es: "¿Cuál es el propósito de los vórtices de bargeboard?",
                de: "Was ist der Zweck von Bargeboard-Wirbeln?",
                nl: "Wat is het doel van bargeboard vortexen?"
            },
            options: ["Cooling", "Seal and energize underbody airflow", "Reduce drag only", "Improve aesthetics"],
            correct: 1,
            explanation: {
                en: "Bargeboard vortices helped seal underbody flow from turbulent wheel wake and energized airflow to the diffuser.",
                es: "Los vórtices de bargeboard ayudaban a sellar flujo inferior de turbulencia de ruedas y energizaban flujo al difusor.",
                de: "Bargeboard-Wirbel halfen, Unterbodenströmung von turbulentem Radnachlauf zu versiegeln.",
                nl: "Bargeboard vortexen hielpen onderkant flow te verzegelen van turbulente wielwake en energiseerden luchtstroom naar diffuser."
            }
        },
        {
            question: {
                en: "Why is the Y250 vortex so important?",
                es: "¿Por qué es tan importante el vórtice Y250?",
                de: "Warum ist der Y250-Wirbel so wichtig?",
                nl: "Waarom is de Y250-vortex zo belangrijk?"
            },
            options: ["It reduces weight", "It manages airflow along entire car length", "It cools brakes", "It improves fuel economy"],
            correct: 1,
            explanation: {
                en: "The Y250 vortex helps manage and condition airflow along the entire car length, influencing downstream aerodynamics.",
                es: "El vórtice Y250 ayuda a gestionar y condicionar flujo a lo largo de toda la longitud del coche.",
                de: "Der Y250-Wirbel hilft, Luftstrom über die gesamte Fahrzeuglänge zu steuern und nachgelagerte Aerodynamik zu beeinflussen.",
                nl: "De Y250-vortex helpt luchtstroom langs de gehele autolengte te beheren en te conditioneren, wat stroomafwaartse aerodynamica beïnvloedt."
            }
        },
        {
            question: {
                en: "What is the difference between outwash and inwash front wing designs?",
                es: "¿Cuál es la diferencia entre diseños de ala delantera outwash e inwash?",
                de: "Was ist der Unterschied zwischen Outwash- und Inwash-Frontflügel-Designs?",
                nl: "Wat is het verschil tussen outwash en inwash voorvleugelontwerpen?"
            },
            options: ["No difference", "Outwash pushes air wide, inwash channels it under car", "Only aesthetic difference", "Different materials"],
            correct: 1,
            explanation: {
                en: "Outwash designs push air outward around wheels, while inwash channels air inward under the car for ground effect.",
                es: "Diseños outwash empujan aire hacia afuera alrededor de ruedas, mientras inwash canaliza hacia adentro bajo el coche.",
                de: "Outwash-Designs drücken Luft nach außen um Räder, Inwash kanalisiert sie nach innen unter das Auto.",
                nl: "Outwash-ontwerpen duwen lucht naar buiten rond wielen, terwijl inwash het naar binnen onder de auto kanalisiert voor grondeffect."
            }
        },
        {
            question: {
                en: "How many cascade elements could front wings have before 2019?",
                es: "¿Cuántos elementos en cascada podían tener las alas delanteras antes de 2019?",
                de: "Wie viele Kaskaden-Elemente konnten Frontflügel vor 2019 haben?",
                nl: "Hoeveel cascade-elementen konden voorvleugels hebben voor 2019?"
            },
            options: ["1-2", "3-5", "6 or more complex elements", "None allowed"],
            correct: 2,
            explanation: {
                en: "Pre-2019 front wings had 6 or more complex cascade elements to manage airflow, creating significant wake.",
                es: "Antes de 2019 las alas tenían 6 o más elementos en cascada complejos para gestionar flujo, creando estela significativa.",
                de: "Vor 2019 hatten Frontflügel 6 oder mehr komplexe Kaskaden-Elemente, die erheblichen Windschatten erzeugten.",
                nl: "Pre-2019 voorvleugels hadden 6 of meer complexe cascade-elementen om luchtstroom te beheren, wat aanzienlijke wake creëerde."
            }
        },
        {
            question: {
                en: "What do vortex generators prevent?",
                es: "¿Qué previenen los generadores de vórtice?",
                de: "Was verhindern Wirbel-Generatoren?",
                nl: "Wat voorkomen vortex generators?"
            },
            options: ["Engine overheating", "Airflow separation from surfaces", "Tire wear", "Brake fade"],
            correct: 1,
            explanation: {
                en: "Vortex generators prevent airflow separation by energizing the boundary layer, keeping flow attached to surfaces.",
                es: "Los generadores de vórtice previenen separación de flujo energizando la capa límite, manteniendo flujo adherido.",
                de: "Wirbel-Generatoren verhindern Strömungsabriss durch Energetisierung der Grenzschicht.",
                nl: "Vortex generators voorkomen luchtstromscheiding door de grenslaag te energiseren, wat flow aan oppervlakken gehecht houdt."
            }
        },
        {
            question: {
                en: "How precise is slot gap adjustment on multi-element wings?",
                es: "¿Qué tan preciso es el ajuste de espacio de ranura en alas de múltiples elementos?",
                de: "Wie präzise ist die Schlitzspalt-Einstellung bei Mehrfach-Flügeln?",
                nl: "Hoe nauwkeurig is slot gap aanpassing op multi-element vleugels?"
            },
            options: ["Within centimeters", "Within millimeters", "Within micrometers", "Not critical"],
            correct: 1,
            explanation: {
                en: "Slot gaps are adjusted within millimeters to optimize airflow between wing elements for maximum performance.",
                es: "Los espacios se ajustan dentro de milímetros para optimizar flujo entre elementos de ala para máximo rendimiento.",
                de: "Schlitzspalte werden auf Millimeter genau eingestellt, um Luftstrom zwischen Flügelelementen zu optimieren.",
                nl: "Slot gaps worden binnen millimeters aangepast om luchtstroom tussen vleugelelementen te optimaliseren voor maximale prestaties."
            }
        },
        {
            question: {
                en: "What determines whether a team uses outwash or inwash?",
                es: "¿Qué determina si un equipo usa outwash o inwash?",
                de: "Was bestimmt, ob ein Team Outwash oder Inwash nutzt?",
                nl: "Wat bepaalt of een team outwash of inwash gebruikt?"
            },
            options: ["Random choice", "Overall aerodynamic philosophy and car concept", "Driver preference", "Track type only"],
            correct: 1,
            explanation: {
                en: "The choice depends on the team's overall aerodynamic philosophy and how they balance front vs. rear downforce generation.",
                es: "La elección depende de la filosofía aerodinámica general y cómo equilibran generación de carga delantera vs trasera.",
                de: "Die Wahl hängt von der aerodynamischen Gesamtphilosophie und der Balance zwischen vorderem und hinterem Abtrieb ab.",
                nl: "De keuze hangt af van de algemene aerodynamische filosofie en hoe ze voorwaartse versus achterwaartse neerwaartse druk balanceren."
            }
        },
        {
            question: {
                en: "Why did Mercedes favor low rake compared to Red Bull?",
                es: "¿Por qué Mercedes favorecía bajo rake comparado con Red Bull?",
                de: "Warum bevorzugte Mercedes Low Rake im Vergleich zu Red Bull?",
                nl: "Waarom gaf Mercedes de voorkeur aan lage rake vergeleken met Red Bull?"
            },
            options: ["Easier to drive", "Different aerodynamic concept focusing on floor efficiency", "Better fuel economy", "Cheaper to develop"],
            correct: 1,
            explanation: {
                en: "Mercedes' low rake philosophy focused on floor efficiency and stability with less sensitivity to ride height changes.",
                es: "La filosofía de bajo rake de Mercedes se enfocaba en eficiencia de piso y estabilidad con menos sensibilidad a cambios de altura.",
                de: "Mercedes' Low-Rake-Philosophie fokussierte auf Bodeneffizienz und Stabilität mit weniger Fahrhöhen-Sensitivität.",
                nl: "Mercedes' lage rake-filosofie richtte zich op vloerefficiëntie en stabiliteit met minder gevoeligheid voor rijhoogteveranderingen."
            }
        },
        {
            question: {
                en: "How do flow conditioning devices improve overall aerodynamics?",
                es: "¿Cómo mejoran los dispositivos de acondicionamiento la aerodinámica general?",
                de: "Wie verbessern Strömungskonditionierungsvorrichtungen die Gesamtaerodynamik?",
                nl: "Hoe verbeteren flow conditioning apparaten de algehele aerodynamica?"
            },
            options: ["They reduce weight", "They prepare airflow for optimal interaction with downstream components", "They cool the engine", "They reduce tire wear"],
            correct: 1,
            explanation: {
                en: "Flow conditioning devices guide and prepare airflow so it arrives at downstream components in optimal condition for performance.",
                es: "Los dispositivos guían y preparan el flujo para que llegue a componentes posteriores en condición óptima.",
                de: "Strömungskonditionierungsvorrichtungen lenken und bereiten Luftstrom vor, damit er nachfolgende Komponenten optimal erreicht.",
                nl: "Flow conditioning apparaten leiden en bereiden luchtstroom voor zodat het bij stroomafwaartse componenten aankomt in optimale conditie."
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
    window.questionsByLevel['1 F1']['Auto-innovaties']['level6'] = level6Questions;
})();
