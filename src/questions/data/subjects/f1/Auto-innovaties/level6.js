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
        },
        {
            question: {
                en: "What is the purpose of floor edge vortices?",
                es: "¿Cuál es el propósito de los vórtices del borde del piso?",
                de: "Was ist der Zweck von Bodenkanten-Wirbeln?",
                nl: "Wat is het doel van vloerrand vortexen?"
            },
            options: ["Decoration", "Seal floor edges preventing air leakage and maximizing ground effect", "Cooling", "Structural support"],
            correct: 1,
            explanation: {
                en: "Floor edge vortices create aerodynamic seals preventing high-pressure air from leaking under the floor, maximizing ground effect.",
                es: "Los vórtices del borde del piso crean sellos aerodinámicos previniendo que aire de alta presión se filtre bajo el piso.",
                de: "Bodenkanten-Wirbel schaffen aerodynamische Abdichtungen und verhindern dass Hochdruckluft unter den Boden dringt.",
                nl: "Vloerrand vortexen creëren aerodynamische afsluitingen die voorkomen dat hogedruk lucht onder de vloer lekt, wat grondeffect maximaliseert."
            }
        },
        {
            question: {
                en: "What is the venturi effect in F1 underbody aerodynamics?",
                es: "¿Qué es el efecto venturi en la aerodinámica inferior de F1?",
                de: "Was ist der Venturi-Effekt in der F1-Unterboden-Aerodynamik?",
                nl: "Wat is het venturi-effect in F1-onderkant aerodynamica?"
            },
            options: ["Engine cooling", "Accelerating air through narrowing channel creates low pressure", "Brake cooling", "Fuel injection"],
            correct: 1,
            explanation: {
                en: "The venturi effect accelerates air through narrowing channels, reducing pressure and sucking the car to the ground.",
                es: "El efecto venturi acelera el aire a través de canales estrechos, reduciendo presión y succionando el coche al suelo.",
                de: "Der Venturi-Effekt beschleunigt Luft durch verengende Kanäle, reduziert Druck und saugt das Auto zum Boden.",
                nl: "Het venturi-effect versnelt lucht door vernauwende kanalen, wat druk vermindert en de auto naar de grond zuigt."
            }
        },
        {
            question: {
                en: "What are edge floors and how do they work?",
                es: "¿Qué son los pisos con bordes y cómo funcionan?",
                de: "Was sind Kantenboden und wie funktionieren sie?",
                nl: "Wat zijn rand-vloeren en hoe werken ze?"
            },
            options: ["Flat floors", "Sculpted floor edges creating vortices for sealing", "Reinforced floors", "Adjustable floors"],
            correct: 1,
            explanation: {
                en: "Edge floors feature sculpted geometries along edges that generate vortices, creating aerodynamic skirts sealing the floor.",
                es: "Los pisos con bordes tienen geometrías esculpidas en los bordes que generan vórtices, creando faldones aerodinámicos.",
                de: "Kantenboden haben geformte Geometrien an Kanten die Wirbel erzeugen und aerodynamische Schürzen bilden.",
                nl: "Rand-vloeren hebben gebeeldhouwde geometrieën langs randen die vortexen genereren, wat aerodynamische rokken creëert die de vloer verzegelen."
            }
        },
        {
            question: {
                en: "What is the boundary layer and why is it important?",
                es: "¿Qué es la capa límite y por qué es importante?",
                de: "Was ist die Grenzschicht und warum ist sie wichtig?",
                nl: "Wat is de grenslaag en waarom is het belangrijk?"
            },
            options: ["Track boundary", "Thin layer of slow-moving air near surfaces affecting flow separation", "Safety barrier", "Floor material"],
            correct: 1,
            explanation: {
                en: "The boundary layer is slow-moving air near surfaces; managing it prevents flow separation and maintains downforce.",
                es: "La capa límite es aire de movimiento lento cerca de superficies; gestionarla previene separación y mantiene carga.",
                de: "Die Grenzschicht ist langsam bewegte Luft nahe Oberflächen; ihre Steuerung verhindert Strömungsabriss.",
                nl: "De grenslaag is langzaam bewegende lucht nabij oppervlakken; het beheren ervan voorkomt flow-scheiding en handhaaft neerwaartse druk."
            }
        },
        {
            question: {
                en: "What is adverse pressure gradient in diffusers?",
                es: "¿Qué es el gradiente de presión adverso en difusores?",
                de: "Was ist adverser Druckgradient in Diffusoren?",
                nl: "Wat is nadelige drukgradiënt in diffusers?"
            },
            options: ["Positive effect", "Pressure increase causing potential flow separation", "Cooling problem", "Structural issue"],
            correct: 1,
            explanation: {
                en: "Adverse pressure gradient is increasing pressure in diffuser expansion that can cause flow separation if too aggressive.",
                es: "El gradiente adverso es aumento de presión en expansión del difusor que puede causar separación si es muy agresivo.",
                de: "Adverser Druckgradient ist Druckanstieg in Diffusor-Expansion der Strömungsabriss verursachen kann.",
                nl: "Nadelige drukgradiënt is toenemende druk in diffuser-expansie die flow-scheiding kan veroorzaken als te agressief."
            }
        },
        {
            question: {
                en: "What are floor fences or strakes?",
                es: "¿Qué son las vallas o strakes del piso?",
                de: "Was sind Bodenzäune oder Strakes?",
                nl: "Wat zijn vloerhekken of strakes?"
            },
            options: ["Decorative lines", "Vertical elements generating vortices to seal floor flow", "Structural beams", "Cooling ducts"],
            correct: 1,
            explanation: {
                en: "Floor fences are vertical elements that generate vortices along the floor edges, preventing air spillage and maximizing downforce.",
                es: "Las vallas del piso son elementos verticales que generan vórtices a lo largo de los bordes, previniendo fuga de aire.",
                de: "Bodenzäune sind vertikale Elemente die Wirbel an Bodenkanten erzeugen und Luftverlust verhindern.",
                nl: "Vloerhekken zijn verticale elementen die vortexen genereren langs vloerranden, wat luchtlekkage voorkomt en neerwaartse druk maximaliseert."
            }
        },
        {
            question: {
                en: "What is the diffuser throat and its importance?",
                es: "¿Qué es la garganta del difusor y su importancia?",
                de: "Was ist der Diffusor-Hals und seine Bedeutung?",
                nl: "Wat is de diffuser keel en het belang ervan?"
            },
            options: ["Entry point", "Narrowest point where air accelerates most before expansion", "Exit point", "Cooling channel"],
            correct: 1,
            explanation: {
                en: "The diffuser throat is the narrowest point where airflow reaches maximum velocity before expanding, creating low pressure.",
                es: "La garganta del difusor es el punto más estrecho donde el flujo alcanza velocidad máxima antes de expandirse.",
                de: "Der Diffusor-Hals ist der engste Punkt wo Luftstrom maximale Geschwindigkeit erreicht vor Expansion.",
                nl: "De diffuser keel is het smalste punt waar luchtstroom maximale snelheid bereikt voor expansie, wat lage druk creëert."
            }
        },
        {
            question: {
                en: "What are turning vanes and their function?",
                es: "¿Qué son las turning vanes y su función?",
                de: "Was sind Turning Vanes und ihre Funktion?",
                nl: "Wat zijn turning vanes en hun functie?"
            },
            options: ["Steering aids", "Complex aerodynamic fins redirecting airflow to specific areas", "Brake ducts", "Suspension parts"],
            correct: 1,
            explanation: {
                en: "Turning vanes are intricate aerodynamic fins that redirect and condition airflow to sidepods, floor, and rear of car.",
                es: "Las turning vanes son aletas aerodinámicas intrincadas que redirigen y condicionan flujo a pontones, piso y parte trasera.",
                de: "Turning Vanes sind komplexe aerodynamische Finnen die Luftstrom zu Seitenkästen, Boden und Heck umleiten.",
                nl: "Turning vanes zijn ingewikkelde aerodynamische vinnen die luchtstroom omleiden en conditioneren naar sidepods, vloer en achterkant."
            }
        },
        {
            question: {
                en: "What is the delta wing section on sidepods?",
                es: "¿Qué es la sección delta wing en los pontones?",
                de: "Was ist der Delta-Wing-Abschnitt an Seitenkästen?",
                nl: "Wat is de delta wing sectie op sidepods?"
            },
            options: ["Decorative element", "Swept leading edge creating vortex for flow management", "Cooling inlet", "Structural component"],
            correct: 1,
            explanation: {
                en: "Delta wing sections on sidepods create strong vortices that help manage airflow around and under the car.",
                es: "Las secciones delta wing en pontones crean vórtices fuertes que ayudan a gestionar flujo alrededor y debajo del coche.",
                de: "Delta-Wing-Abschnitte an Seitenkästen erzeugen starke Wirbel zur Luftstromsteuerung um und unter dem Auto.",
                nl: "Delta wing secties op sidepods creëren sterke vortexen die helpen luchtstroom rond en onder de auto te beheren."
            }
        },
        {
            question: {
                en: "What is the undercut design philosophy?",
                es: "¿Qué es la filosofía de diseño de undercut?",
                de: "Was ist die Undercut-Design-Philosophie?",
                nl: "Wat is de undercut ontwerp filosofie?"
            },
            options: ["Engine placement", "Narrowing sidepods to maximize floor airflow", "Fuel tank shape", "Cockpit design"],
            correct: 1,
            explanation: {
                en: "Undercut narrows sidepods dramatically to allow maximum airflow to reach the floor and diffuser for downforce.",
                es: "El undercut estrecha los pontones dramáticamente para permitir máximo flujo al piso y difusor para carga.",
                de: "Undercut verengt Seitenkästen dramatisch um maximalen Luftstrom zu Boden und Diffusor zu ermöglichen.",
                nl: "Undercut vernauwt sidepods dramatisch om maximale luchtstroom naar vloer en diffuser toe te staan voor neerwaartse druk."
            }
        },
        {
            question: {
                en: "What are S-ducts and their purpose?",
                es: "¿Qué son los S-ducts y su propósito?",
                de: "Was sind S-Ducts und ihr Zweck?",
                nl: "Wat zijn S-ducts en hun doel?"
            },
            options: ["Brake cooling", "Nose inlet channeling air through to upper surface for downforce", "Engine cooling", "Fuel lines"],
            correct: 1,
            explanation: {
                en: "S-ducts take air in through nose, route it through S-shaped channel, and exit on top creating downforce via acceleration.",
                es: "Los S-ducts toman aire por la nariz, lo enrutan por canal en S y salen arriba creando carga por aceleración.",
                de: "S-Ducts nehmen Luft durch die Nase auf, leiten sie durch S-förmigen Kanal und erzeugen Abtrieb durch Beschleunigung.",
                nl: "S-ducts nemen lucht in via neus, leiden het door S-vormig kanaal en komen uit bovenop wat neerwaartse druk creëert via versnelling."
            }
        },
        {
            question: {
                en: "What is the purpose of cape and sidepod winglets?",
                es: "¿Cuál es el propósito de las cape y winglets de pontones?",
                de: "Was ist der Zweck von Cape und Seitenkasten-Winglets?",
                nl: "Wat is het doel van cape en sidepod winglets?"
            },
            options: ["Aesthetics", "Generate vortices managing tire wake and floor feed", "Structural support", "Driver visibility"],
            correct: 1,
            explanation: {
                en: "Cape and sidepod winglets generate vortices that manage turbulent tire wake and feed clean air to the floor.",
                es: "Las cape y winglets generan vórtices que gestionan turbulencia de ruedas y alimentan aire limpio al piso.",
                de: "Cape und Winglets erzeugen Wirbel die turbulenten Radnachlauf steuern und saubere Luft zum Boden führen.",
                nl: "Cape en sidepod winglets genereren vortexen die turbulente wielwake beheren en schone lucht naar de vloer voeden."
            }
        },
        {
            question: {
                en: "What is vortex shedding and why is it problematic?",
                es: "¿Qué es el desprendimiento de vórtice y por qué es problemático?",
                de: "Was ist Wirbelablösung und warum ist es problematisch?",
                nl: "Wat is vortex shedding en waarom is het problematisch?"
            },
            options: ["Positive effect", "Uncontrolled vortex release causing wake turbulence", "Cooling effect", "Weight reduction"],
            correct: 1,
            explanation: {
                en: "Vortex shedding is uncontrolled vortex release creating turbulent wake that disturbs following cars and reduces efficiency.",
                es: "El desprendimiento de vórtice es liberación descontrolada que crea estela turbulenta perturbando coches siguientes.",
                de: "Wirbelablösung ist unkontrollierte Wirbelfreisetzung die turbulenten Nachlauf erzeugt und nachfolgende Autos stört.",
                nl: "Vortex shedding is ongecontroleerde vortex-afgifte die turbulente wake creëert wat volgende auto's verstoort en efficiëntie vermindert."
            }
        },
        {
            question: {
                en: "What is the concept of beam wing loading?",
                es: "¿Qué es el concepto de carga del beam wing?",
                de: "Was ist das Konzept der Beam-Wing-Belastung?",
                nl: "Wat is het concept van beam wing loading?"
            },
            options: ["Weight distribution", "Aerodynamic load distribution on small rear wing element", "Structural stress", "Fuel distribution"],
            correct: 1,
            explanation: {
                en: "Beam wing loading refers to how aerodynamic load is distributed across the small horizontal element above the diffuser.",
                es: "La carga del beam wing se refiere a cómo se distribuye la carga aerodinámica en el pequeño elemento horizontal.",
                de: "Beam-Wing-Belastung bezieht sich auf Verteilung der aerodynamischen Last auf dem kleinen horizontalen Element.",
                nl: "Beam wing loading verwijst naar hoe aerodynamische belasting verdeeld wordt over het kleine horizontale element boven de diffuser."
            }
        },
        {
            question: {
                en: "What are floor scrolls and their aerodynamic function?",
                es: "¿Qué son los scrolls del piso y su función aerodinámica?",
                de: "Was sind Boden-Scrolls und ihre aerodynamische Funktion?",
                nl: "Wat zijn vloer-scrolls en hun aerodynamische functie?"
            },
            options: ["Decorative curves", "Curved floor edges creating strong sealing vortices", "Structural ribs", "Cooling channels"],
            correct: 1,
            explanation: {
                en: "Floor scrolls are aggressively curved floor edges that generate powerful vortices sealing the floor from air leakage.",
                es: "Los scrolls del piso son bordes curvados agresivamente que generan vórtices poderosos sellando el piso de fugas.",
                de: "Boden-Scrolls sind aggressiv gekrümmte Bodenkanten die starke Wirbel zur Bodenversiegelung erzeugen.",
                nl: "Vloer-scrolls zijn agressief gebogen vloerranden die krachtige vortexen genereren die de vloer verzegelen tegen luchtlekkage."
            }
        },
        {
            question: {
                en: "What is the throat area ratio in diffusers?",
                es: "¿Qué es la relación de área de garganta en difusores?",
                de: "Was ist das Hals-Flächenverhältnis in Diffusoren?",
                nl: "Wat is de keel-oppervlakte verhouding in diffusers?"
            },
            options: ["Random measurement", "Ratio between throat and exit determining expansion rate", "Structural measurement", "Cooling ratio"],
            correct: 1,
            explanation: {
                en: "Throat area ratio compares narrowest point to exit, determining expansion rate and maximum downforce potential without separation.",
                es: "La relación de área de garganta compara punto más estrecho con salida, determinando tasa de expansión y potencial máximo.",
                de: "Hals-Flächenverhältnis vergleicht engsten Punkt mit Ausgang und bestimmt Expansionsrate und Abtriebspotenzial.",
                nl: "Keel-oppervlakte verhouding vergelijkt smalste punt met uitgang, wat expansiesnelheid en maximale neerwaartse druk potentieel bepaalt zonder scheiding."
            }
        },
        {
            question: {
                en: "What is the significance of diffuser kicker elements?",
                es: "¿Cuál es la importancia de los elementos kicker del difusor?",
                de: "Was ist die Bedeutung von Diffusor-Kicker-Elementen?",
                nl: "Wat is de betekenis van diffuser kicker-elementen?"
            },
            options: ["Decorative", "Upturned rear sections increasing expansion angle", "Structural", "Cooling"],
            correct: 1,
            explanation: {
                en: "Diffuser kickers are aggressively upturned rear sections that maximize expansion angle at the last moment for peak downforce.",
                es: "Los kickers del difusor son secciones traseras muy levantadas que maximizan ángulo de expansión al final para máxima carga.",
                de: "Diffusor-Kicker sind aggressiv aufgebogene Heckabschnitte die Expansionswinkel im letzten Moment maximieren.",
                nl: "Diffuser kickers zijn agressief opgebogen achterse secties die expansiehoek op het laatste moment maximaliseren voor piek neerwaartse druk."
            }
        },
        {
            question: {
                en: "What is the purpose of floor stays in 2023+ regulations?",
                es: "¿Cuál es el propósito de los refuerzos de piso en regulaciones 2023+?",
                de: "Was ist der Zweck von Bodenversteifungen in 2023+ Regeln?",
                nl: "Wat is het doel van vloersteun in 2023+ reglementen?"
            },
            options: ["Add weight", "Prevent excessive floor flex and porpoising", "Improve aesthetics", "Increase downforce"],
            correct: 1,
            explanation: {
                en: "Floor stays are mandatory metal supports limiting floor flexibility to reduce porpoising and prevent extreme ride height manipulation.",
                es: "Los refuerzos de piso son soportes metálicos obligatorios que limitan flexibilidad para reducir porpoising.",
                de: "Bodenversteifungen sind verpflichtende Metallstützen die Bodenflexibilität begrenzen um Porpoising zu reduzieren.",
                nl: "Vloersteun zijn verplichte metalen steunen die vloerflexibiliteit beperken om porpoising te verminderen en extreme rijhoogte-manipulatie te voorkomen."
            }
        },
        {
            question: {
                en: "What is flow separation and how do teams prevent it?",
                es: "¿Qué es la separación de flujo y cómo la previenen los equipos?",
                de: "Was ist Strömungsabriss und wie verhindern Teams ihn?",
                nl: "Wat is flow-scheiding en hoe voorkomen teams het?"
            },
            options: ["Positive effect", "Airflow detaching from surfaces; prevented by vortex generators and careful shaping", "Cooling issue", "Structural problem"],
            correct: 1,
            explanation: {
                en: "Flow separation occurs when airflow detaches from surfaces, losing downforce; teams use vortex generators and careful contouring to prevent it.",
                es: "La separación ocurre cuando el flujo se desprende de superficies perdiendo carga; equipos usan generadores de vórtice para prevenirlo.",
                de: "Strömungsabriss tritt auf wenn Luftstrom sich von Oberflächen löst; Teams nutzen Wirbel-Generatoren zur Verhinderung.",
                nl: "Flow-scheiding treedt op wanneer luchtstroom zich losmaakt van oppervlakken, wat neerwaartse druk verliest; teams gebruiken vortex generators om het te voorkomen."
            }
        },
        {
            question: {
                en: "What innovation did McLaren introduce with 'brake steer' in the 1990s before it was banned?",
                es: "¿Qué innovación introdujo McLaren con el 'brake steer' en los años 90 antes de ser prohibido?",
                de: "Welche Innovation führte McLaren mit 'Brake Steer' in den 1990ern ein, bevor es verboten wurde?",
                nl: "Welke innovatie introduceerde McLaren met 'brake steer' in de jaren 90 voordat het verboden werd?"
            },
            options: [
                { en: "A system allowing the driver to brake individual rear wheels to tighten cornering", es: "Un sistema que permitía al piloto frenar ruedas traseras individuales para cerrar curvas", de: "Ein System das dem Fahrer erlaubte einzelne Hinterräder zu bremsen für engere Kurvenfahrt", nl: "Een systeem dat de coureur toestond individuele achterwielen te remmen voor scherpere bochten" },
                { en: "Automatic braking on corner entry", es: "Frenado automático en entrada de curva", de: "Automatisches Bremsen beim Kurveneingang", nl: "Automatisch remmen bij bocht ingang" },
                { en: "Steering wheel mounted brake controls", es: "Controles de freno montados en volante", de: "Am Lenkrad montierte Bremssteuerung", nl: "Remcontroles gemonteerd op stuurwiel" },
                { en: "Rear-only braking system", es: "Sistema de frenado solo trasero", de: "Nur-Hinterrad-Bremssystem", nl: "Alleen-achter remsysteem" }
            ],
            correct: 0,
            explanation: {
                en: "McLaren's brake steer system allowed drivers to brake individual rear wheels via a second pedal, effectively steering the car through differential braking. This provided significant cornering advantage before being banned by FIA in 1998 for being a moveable aerodynamic device.",
                es: "El sistema brake steer de McLaren permitía a los pilotos frenar ruedas traseras individuales vía un segundo pedal, efectivamente dirigiendo el auto mediante frenado diferencial. Esto proporcionó ventaja significativa en curvas antes de ser prohibido por FIA en 1998 por ser dispositivo aerodinámico móvil.",
                de: "McLarens Brake-Steer-System erlaubte Fahrern einzelne Hinterräder über ein zweites Pedal zu bremsen, wodurch das Auto effektiv durch Differenzialbremsung gesteuert wurde. Dies bot erheblichen Kurven-Vorteil bevor es 1998 von der FIA als bewegliches aerodynamisches Gerät verboten wurde.",
                nl: "McLaren's brake steer systeem stelde coureurs in staat individuele achterwielen te remmen via een tweede pedaal, effectief het sturen van de auto door differentieel remmen. Dit bood significant bocht voordeel voordat het in 1998 door FIA verboden werd als bewegend aerodynamisch apparaat."
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
