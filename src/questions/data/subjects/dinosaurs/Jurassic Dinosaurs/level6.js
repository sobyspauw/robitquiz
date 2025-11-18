// Jurassic Dinosaurs Quiz - Level 6: Advanced Knowledge
(function() {
  const level6 = {
    name: {
      en: "Jurassic Dinosaurs Level 6",
      es: "Dinosaurios Jurásicos Nivel 6",
      de: "Jura Dinosaurier Stufe 6",
      nl: "Jura Dino's Level 6"
    },
    questions: [
      {
        question: {
          en: "What molecular clock evidence constrains the divergence timing of major theropod lineages during the Jurassic?",
          es: "¿Qué evidencia de reloj molecular restringe el tiempo de divergencia de los principales linajes de terópodos durante el Jurásico?",
          de: "Welche molekulare Uhr-Belege begrenzen die Divergenz-Zeitpunkte großer Theropoden-Linien während des Jura?",
          nl: "Welk moleculaire klok bewijs beperkt de divergentietiming van grote theropode lijnen tijdens het Jura?"
        },
        options: [
          { en: "Coalescent analysis suggests Tetanurae radiation at 190-180 Ma with rapid crown group diversification", es: "Análisis coalescente sugiere radiación de Tetanurae a 190-180 Ma con diversificación rápida del grupo corona", de: "Koaleszenz-Analyse deutet auf Tetanurae-Radiation bei 190-180 Ma mit schneller Kronengruppen-Diversifizierung", nl: "Coalescent analyse suggereert Tetanurae radiatie op 190-180 Ma met snelle kroongroep diversificatie" },
          { en: "Linear evolution throughout the period", es: "Evolución lineal durante todo el período", de: "Lineare Evolution während der gesamten Periode", nl: "Lineaire evolutie gedurende de hele periode" },
          { en: "No divergence during Jurassic", es: "Sin divergencia durante el Jurásico", de: "Keine Divergenz während des Jura", nl: "Geen divergentie tijdens het Jura" },
          { en: "Single radiation event at end-Jurassic", es: "Evento de radiación único al final del Jurásico", de: "Einzelnes Radiationsereignis am Ende des Jura", nl: "Enkele radiatie gebeurtenis aan eind-Jura" }
        ],
        correct: 0,
        explanation: {
          en: "Molecular phylogenetic analysis combined with fossil calibration points indicates rapid theropod diversification in the Early-Middle Jurassic, establishing major lineages that dominated Mesozoic ecosystems.",
          es: "El análisis filogenético molecular combinado con puntos de calibración fósil indica diversificación rápida de terópodos en el Jurásico Temprano-Medio, estableciendo linajes principales que dominaron ecosistemas mesozoicos.",
          de: "Molekulare phylogenetische Analyse kombiniert mit fossilen Kalibrierungspunkten zeigt schnelle Theropoden-Diversifizierung im Früh-Mittleren Jura, wodurch Hauptlinien etabliert wurden, die mesozoische Ökosysteme dominierten.",
          nl: "Moleculaire fylogenetische analyse gecombineerd met fossiele calibratiepunten wijst op snelle theropode diversificatie in het Vroeg-Midden Jura, waarbij hoofdlijnen werden vastgesteld die Mesozoïsche ecosystemen domineerden."
        }
      },
      {
        question: {
          en: "What does analysis of Morrison Formation ichnofossils reveal about sauropod herding behavior patterns?",
          es: "¿Qué revela el análisis de icnofósiles de la Formación Morrison sobre patrones de comportamiento de manada de saurópodos?",
          de: "Was zeigt die Analyse von Morrison-Formation-Ichnofossilien über Sauropoden-Herdenverhalten?",
          nl: "Wat onthult analyse van Morrison Formatie ichnofossielen over sauropode kuddegedragpatronen?"
        },
        options: [
          { en: "Size-segregated parallel trackways indicating age-structured social groups with preferential spatial positioning", es: "Pistas paralelas segregadas por tamaño indicando grupos sociales estructurados por edad con posicionamiento espacial preferencial", de: "Größenseparierte parallele Fährten zeigen altersstrukturierte soziale Gruppen mit bevorzugter räumlicher Positionierung", nl: "Grootte-gescheiden parallelle spoorwegen die leeftijd-gestructureerde sociale groepen aangeven met preferentiële ruimtelijke positionering" },
          { en: "Random individual movement only", es: "Solo movimiento individual aleatorio", de: "Nur zufällige individuelle Bewegung", nl: "Alleen willekeurige individuele beweging" },
          { en: "No evidence of social behavior", es: "Sin evidencia de comportamiento social", de: "Keine Belege für Sozialverhalten", nl: "Geen bewijs van sociaal gedrag" },
          { en: "Territorial spacing patterns", es: "Patrones de espaciamiento territorial", de: "Territoriale Abstandsmuster", nl: "Territoriale afstandspatronen" }
        ],
        correct: 0,
        explanation: {
          en: "Morrison Formation trackway analysis reveals sophisticated sauropod social structure with adults at periphery, juveniles protected centrally, and consistent group composition over multiple trackways.",
          es: "El análisis de pistas de la Formación Morrison revela estructura social sofisticada de saurópodos con adultos en la periferia, juveniles protegidos centralmente y composición grupal consistente en múltiples pistas.",
          de: "Morrison-Formation-Fährten-Analyse enthüllt ausgeklügelte Sauropoden-Sozialstruktur mit Erwachsenen an der Peripherie, zentral geschützten Jungtieren und konsistenter Gruppenzusammensetzung über mehrere Fährten.",
          nl: "Morrison Formatie spoorweganalyse onthult geavanceerde sauropode sociale structuur met volwassenen aan de periferie, juvenielen centraal beschermd en consistente groepssamenstelling over meerdere spoorwegen."
        }
      },
      {
        question: {
          en: "What constraints did atmospheric pressure variations impose on Jurassic megafauna respiratory physiology?",
          es: "¿Qué restricciones impusieron las variaciones de presión atmosférica en la fisiología respiratoria de la megafauna jurásica?",
          de: "Welche Einschränkungen legten atmosphärische Druckvariationen der Atmungsphysiologie der Jura-Megafauna auf?",
          nl: "Welke beperkingen legden atmosferische drukvariaties op aan Jura megafauna ademhalingsfysiologie?"
        },
        options: [
          { en: "Lower atmospheric pressure (0.8-0.9 atm) required enhanced respiratory efficiency and cardiovascular adaptations", es: "Presión atmosférica menor (0.8-0.9 atm) requería eficiencia respiratoria mejorada y adaptaciones cardiovasculares", de: "Niedrigerer atmosphärischer Druck (0.8-0.9 atm) erforderte verbesserte Atemeffizienz und kardiovaskuläre Anpassungen", nl: "Lagere atmosferische druk (0.8-0.9 atm) vereiste verbeterde ademhalingsefficiëntie en cardiovasculaire aanpassingen" },
          { en: "Higher pressure aided respiration", es: "Mayor presión ayudó a la respiración", de: "Höherer Druck half der Atmung", nl: "Hogere druk hielp de ademhaling" },
          { en: "No pressure effects on physiology", es: "Sin efectos de presión en fisiología", de: "Keine Druckeffekte auf Physiologie", nl: "Geen drukeffecten op fysiologie" },
          { en: "Pressure prevented large body sizes", es: "Presión previno tamaños corporales grandes", de: "Druck verhinderte große Körpergrößen", nl: "Druk voorkwam grote lichaamsgroottes" }
        ],
        correct: 0,
        explanation: {
          en: "Jurassic atmospheric pressure was 10-20% lower than present, requiring large dinosaurs to evolve highly efficient air sac respiratory systems and enhanced cardiovascular performance for adequate oxygen delivery.",
          es: "La presión atmosférica jurásica era 10-20% menor que la presente, requiriendo que los grandes dinosaurios evolucionaran sistemas respiratorios de sacos aéreos altamente eficientes y rendimiento cardiovascular mejorado para suministro adecuado de oxígeno.",
          de: "Der Jura-Atmosphärendruck war 10-20% niedriger als heute, was große Dinosaurier dazu zwang, hocheffiziente Luftsack-Atmungssysteme und verbesserte kardiovaskuläre Leistung für angemessene Sauerstoffversorgung zu entwickeln.",
          nl: "Jura atmosferische druk was 10-20% lager dan vandaag, wat grote dinosaurussen dwong om zeer efficiënte luchtzak ademhalingssystemen en verbeterde cardiovasculaire prestaties te evolueren voor adequate zuurstoflevering."
        }
      },
      {
        question: {
          en: "What does finite element analysis reveal about Diplodocus neck stress distribution during feeding?",
          es: "¿Qué revela el análisis de elementos finitos sobre la distribución de estrés en el cuello de Diplodocus durante la alimentación?",
          de: "Was zeigt die Finite-Elemente-Analyse über die Spannungsverteilung im Diplodocus-Hals während der Fütterung?",
          nl: "Wat onthult eindige elementen analyse over Diplodocus nek stressverdeling tijdens het voeden?"
        },
        options: [
          { en: "Maximum stress concentration at C7-C10 vertebrae with optimal feeding angles of 0-30° below horizontal", es: "Concentración de estrés máximo en vértebras C7-C10 con ángulos de alimentación óptimos de 0-30° bajo horizontal", de: "Maximale Spannungskonzentration bei C7-C10 Wirbeln mit optimalen Fütterungswinkeln von 0-30° unter horizontal", nl: "Maximale stressconcentratie bij C7-C10 wervels met optimale voedingshoeken van 0-30° onder horizontaal" },
          { en: "Uniform stress distribution throughout neck", es: "Distribución uniforme de estrés en todo el cuello", de: "Gleichmäßige Spannungsverteilung im gesamten Hals", nl: "Uniforme stressverdeling door de hele nek" },
          { en: "No mechanical constraints identified", es: "Sin restricciones mecánicas identificadas", de: "Keine mechanischen Einschränkungen identifiziert", nl: "Geen mechanische beperkingen geïdentificeerd" },
          { en: "Stress only at skull attachment", es: "Estrés solo en la unión del cráneo", de: "Spannung nur an Schädelanheftung", nl: "Stress alleen bij schedel bevestiging" }
        ],
        correct: 0,
        explanation: {
          en: "FEA modeling demonstrates critical stress points in the mid-cervical region during feeding, supporting low-angle browsing rather than extreme vertical neck extension as the primary feeding mode.",
          es: "El modelado FEA demuestra puntos de estrés críticos en la región cervical media durante la alimentación, apoyando el ramoneo de ángulo bajo en lugar de extensión vertical extrema del cuello como modo principal de alimentación.",
          de: "FEA-Modellierung zeigt kritische Stresspunkte in der mittleren Halsregion während der Fütterung und unterstützt niedrigwinkliges Fressen statt extremer vertikaler Halsstreckung als primären Fütterungsmodus.",
          nl: "FEA modellering toont kritieke stresspunten in de midden-cervicale regio tijdens voeding, wat lage-hoek grazen ondersteunt in plaats van extreme verticale nekuitrekking als primaire voedingswijze."
        }
      },
      {
        question: {
          en: "What phylogenetic signal do Jurassic stegosaur osteoderms provide for understanding armored dinosaur evolution?",
          es: "¿Qué señal filogenética proporcionan los osteodermos de estegosaurios jurásicos para entender la evolución de dinosaurios acorazados?",
          de: "Welches phylogenetische Signal liefern Jura-Stegosaurier-Osteoderme für das Verständnis der Panzerdinosaurier-Evolution?",
          nl: "Welk fylogenetisch signaal leveren Jura stegosaurus osteoderms voor het begrijpen van gepantserde dinosaurus evolutie?"
        },
        options: [
          { en: "Osteoderm microstructure and arrangement patterns support independent evolution of defensive strategies across thyreophoran lineages", es: "Microestructura y patrones de disposición de osteodermos apoyan evolución independiente de estrategias defensivas en linajes tireóforos", de: "Osteoderm-Mikrostruktur und Anordnungsmuster unterstützen unabhängige Evolution von Verteidigungsstrategien in Thyreophoran-Linien", nl: "Osteoderm microstructuur en rangschikkingspatronen ondersteunen onafhankelijke evolutie van verdedigingsstrategieën over thyreophoran lijnen" },
          { en: "All armor evolved from single ancestor", es: "Toda armadura evolucionó de un solo ancestro", de: "Alle Panzerung entwickelte sich von einem einzigen Vorfahren", nl: "Alle pantser evolueerde van een enkele voorouder" },
          { en: "No phylogenetic information in osteoderms", es: "Sin información filogenética en osteodermos", de: "Keine phylogenetische Information in Osteodermen", nl: "Geen fylogenetische informatie in osteoderms" },
          { en: "Osteoderms show convergent evolution only", es: "Osteodermos muestran solo evolución convergente", de: "Osteoderme zeigen nur konvergente Evolution", nl: "Osteoderms tonen alleen convergente evolutie" }
        ],
        correct: 0,
        explanation: {
          en: "Detailed analysis of stegosaur osteoderm histology and developmental patterns reveals complex evolutionary relationships within Thyreophora, with multiple independent innovations in defensive morphology.",
          es: "El análisis detallado de histología y patrones de desarrollo de osteodermos de estegosaurios revela relaciones evolutivas complejas dentro de Thyreophora, con múltiples innovaciones independientes en morfología defensiva.",
          de: "Detaillierte Analyse der Stegosaurier-Osteoderm-Histologie und Entwicklungsmuster enthüllt komplexe evolutionäre Beziehungen innerhalb der Thyreophora mit mehrfachen unabhängigen Innovationen in Verteidigungsmorphologie.",
          nl: "Gedetailleerde analyse van stegosaurus osteoderm histologie en ontwikkelingspatronen onthult complexe evolutionaire relaties binnen Thyreophora, met meerdere onafhankelijke innovaties in verdedigingsmorfologie."
        }
      },
      {
        question: {
          en: "What does comparative biomechanical analysis reveal about Morrison Formation theropod ecological niche partitioning?",
          es: "¿Qué revela el análisis biomecánico comparativo sobre la partición de nichos ecológicos de terópodos de la Formación Morrison?",
          de: "Was zeigt vergleichende biomechanische Analyse über ökologische Nischenteilung der Morrison-Formation-Theropoden?",
          nl: "Wat onthult vergelijkende biomechanische analyse over Morrison Formatie theropode ecologische niche-verdeling?"
        },
        options: [
          { en: "Distinct functional morphologies: Allosaurus for large prey processing, Ceratosaurus for aquatic/semi-aquatic hunting, smaller theropods for different prey sizes", es: "Morfologías funcionales distintas: Allosaurus para procesamiento de presas grandes, Ceratosaurus para caza acuática/semiacuática, terópodos menores para diferentes tamaños de presa", de: "Unterschiedliche funktionelle Morphologien: Allosaurus für große Beuteverarbeitung, Ceratosaurus für aquatische/semi-aquatische Jagd, kleinere Theropoden für verschiedene Beutegrößen", nl: "Verschillende functionele morfologieën: Allosaurus voor grote prooi verwerking, Ceratosaurus voor aquatische/semi-aquatische jacht, kleinere theropoden voor verschillende prooi groottes" },
          { en: "All theropods occupied identical niches", es: "Todos los terópodos ocuparon nichos idénticos", de: "Alle Theropoden besetzten identische Nischen", nl: "Alle theropoden bezetten identieke niches" },
          { en: "Random ecological distribution", es: "Distribución ecológica aleatoria", de: "Zufällige ökologische Verteilung", nl: "Willekeurige ecologische verdeling" },
          { en: "Size-based competition only", es: "Solo competencia basada en tamaño", de: "Nur größenbasierte Konkurrenz", nl: "Alleen grootte-gebaseerde competitie" }
        ],
        correct: 0,
        explanation: {
          en: "Morphometric analysis of skull and limb proportions, combined with bite force modeling, demonstrates clear ecological specialization among Morrison theropods, reducing interspecific competition.",
          es: "El análisis morfométrico de proporciones de cráneo y extremidades, combinado con modelado de fuerza de mordida, demuestra especialización ecológica clara entre terópodos de Morrison, reduciendo competencia interespecífica.",
          de: "Morphometrische Analyse von Schädel- und Gliedmaßenproportionen, kombiniert mit Beißkraft-Modellierung, zeigt klare ökologische Spezialisierung unter Morrison-Theropoden und reduziert interspezifische Konkurrenz.",
          nl: "Morfometrische analyse van schedel- en ledematenproporties, gecombineerd met bijtkrachtmodellering, toont duidelijke ecologische specialisatie onder Morrison theropoden, wat interspecifieke competitie vermindert."
        }
      },
      {
        question: {
          en: "What evidence supports coordinated migration patterns among Morrison Formation herbivore communities?",
          es: "¿Qué evidencia apoya patrones de migración coordinados entre comunidades de herbívoros de la Formación Morrison?",
          de: "Welche Belege unterstützen koordinierte Wanderungsmuster zwischen Morrison-Formation-Pflanzenfresser-Gemeinschaften?",
          nl: "Welk bewijs ondersteunt gecoördineerde migratiepatronen onder Morrison Formatie herbivore gemeenschappen?"
        },
        options: [
          { en: "Synchronous bone bed occurrences, isotopic evidence for seasonal movement, and trackway orientations suggesting directional travel", es: "Ocurrencias sincrónicas de lechos óseos, evidencia isotópica para movimiento estacional y orientaciones de pistas sugiriendo viaje direccional", de: "Synchrone Knochenbett-Vorkommen, isotopische Belege für saisonale Bewegung und Fährten-Orientierungen deuten auf gerichtetes Reisen", nl: "Synchrone botbedvorkomsten, isotopisch bewijs voor seizoensgebonden beweging en spoorweg oriëntaties die directioneel reizen suggereren" },
          { en: "No evidence of coordinated movement", es: "Sin evidencia de movimiento coordinado", de: "Keine Belege für koordinierte Bewegung", nl: "Geen bewijs van gecoördineerde beweging" },
          { en: "Only predator migration patterns", es: "Solo patrones de migración de depredadores", de: "Nur Raubtier-Wanderungsmuster", nl: "Alleen predator migratiepatronen" },
          { en: "Random dispersal events", es: "Eventos de dispersión aleatoria", de: "Zufällige Ausbreitungsereignisse", nl: "Willekeurige verspreidingsgebeurtenissen" }
        ],
        correct: 0,
        explanation: {
          en: "Multiple lines of evidence including mass mortality events, strontium isotope analysis, and consistent trackway directions support large-scale seasonal migrations comparable to modern African megafauna.",
          es: "Múltiples líneas de evidencia incluyendo eventos de mortalidad masiva, análisis de isótopos de estroncio y direcciones consistentes de pistas apoyan migraciones estacionales a gran escala comparables a megafauna africana moderna.",
          de: "Mehrere Beweislinien einschließlich Massensterbeereignisse, Strontium-Isotopen-Analyse und konsistente Fährtenrichtungen unterstützen großflächige saisonale Wanderungen vergleichbar mit moderner afrikanischer Megafauna.",
          nl: "Meerdere bewijslijnen inclusief massa-sterfte gebeurtenissen, strontium isotopenanalyse en consistente spoorwegrichtingen ondersteunen grootschalige seizoensmigraties vergelijkbaar met moderne Afrikaanse megafauna."
        }
      },
      {
        question: {
          en: "What constraints did Late Jurassic atmospheric composition place on dinosaur gigantism?",
          es: "¿Qué restricciones impuso la composición atmosférica del Jurásico Tardío en el gigantismo de dinosaurios?",
          de: "Welche Einschränkungen legte die spätjurassische Atmosphärenzusammensetzung dem Dinosaurier-Gigantismus auf?",
          nl: "Welke beperkingen legde Laat-Jura atmosferische samenstelling op aan dinosaurus gigantisme?"
        },
        options: [
          { en: "Elevated CO2 (1000-1500 ppm) and reduced O2 pressure required enhanced respiratory systems but supported large body sizes through increased plant productivity", es: "CO2 elevado (1000-1500 ppm) y presión de O2 reducida requirió sistemas respiratorios mejorados pero apoyó tamaños corporales grandes através de productividad vegetal aumentada", de: "Erhöhtes CO2 (1000-1500 ppm) und reduzierter O2-Druck erforderten verbesserte Atemsysteme, unterstützten aber große Körpergrößen durch erhöhte Pflanzenproduktivität", nl: "Verhoogde CO2 (1000-1500 ppm) en verminderde O2 druk vereiste verbeterde ademhalingssystemen maar ondersteunde grote lichaamsgroottes door verhoogde plantenproductiviteit" },
          { en: "Atmospheric composition prevented large sizes", es: "Composición atmosférica previno tamaños grandes", de: "Atmosphärenzusammensetzung verhinderte große Größen", nl: "Atmosferische samenstelling voorkwam grote maten" },
          { en: "No atmospheric constraints on size", es: "Sin restricciones atmosféricas en tamaño", de: "Keine atmosphärischen Größenbeschränkungen", nl: "Geen atmosferische beperkingen op grootte" },
          { en: "Only temperature affected body size", es: "Solo temperatura afectó tamaño corporal", de: "Nur Temperatur beeinflusste Körpergröße", nl: "Alleen temperatuur beïnvloedde lichaamsgrootte" }
        ],
        correct: 0,
        explanation: {
          en: "Late Jurassic atmospheric conditions created a paradox: reduced oxygen partial pressure challenged respiratory physiology, while elevated CO2 and warm temperatures boosted primary productivity, ultimately enabling unprecedented dinosaur gigantism through evolutionary respiratory innovations.",
          es: "Las condiciones atmosféricas del Jurásico Tardío crearon una paradoja: presión parcial de oxígeno reducida desafió la fisiología respiratoria, mientras CO2 elevado y temperaturas cálidas aumentaron productividad primaria, finalmente permitiendo gigantismo de dinosaurios sin precedentes através de innovaciones respiratorias evolutivas.",
          de: "Spätjurassische Atmosphärenbedingungen schufen ein Paradox: reduzierter Sauerstoffpartialdruck stellte die Atmungsphysiologie vor Herausforderungen, während erhöhtes CO2 und warme Temperaturen die Primärproduktivität steigerten und letztendlich beispiellosen Dinosaurier-Gigantismus durch evolutionäre Atmungsinnovationen ermöglichten.",
          nl: "Laat-Jura atmosferische omstandigheden creëerden een paradox: verminderde zuurstofpartiële druk daagde ademhalingsfysiologie uit, terwijl verhoogde CO2 en warme temperaturen primaire productiviteit verhoogden, uiteindelijk ongekend dinosaurus gigantisme mogelijk makend door evolutionaire ademhalingsinnovaties."
        }
      },
      {
        question: {
          en: "What does analysis of Morrison Formation predator-prey ratios reveal about ecosystem energetics?",
          es: "¿Qué revela el análisis de proporciones depredador-presa de la Formación Morrison sobre energética del ecosistema?",
          de: "Was zeigt die Analyse der Morrison-Formation-Räuber-Beute-Verhältnisse über Ökosystem-Energetik?",
          nl: "Wat onthult analyse van Morrison Formatie predator-prooi verhoudingen over ecosysteem energetica?"
        },
        options: [
          { en: "Low predator-prey biomass ratios (1:50-100) suggesting ectothermic-mesothermic metabolism with high ecological efficiency", es: "Proporciones bajas de biomasa depredador-presa (1:50-100) sugiriendo metabolismo ectotérmico-mesotérmico con alta eficiencia ecológica", de: "Niedrige Räuber-Beute-Biomasse-Verhältnisse (1:50-100) deuten auf ektotherm-mesothermen Stoffwechsel mit hoher ökologischer Effizienz", nl: "Lage predator-prooi biomassa verhoudingen (1:50-100) die ectotherm-mesotherm metabolisme suggereren met hoge ecologische efficiëntie" },
          { en: "High ratios like modern mammalian systems", es: "Proporciones altas como sistemas mamíferos modernos", de: "Hohe Verhältnisse wie moderne Säugetiersysteme", nl: "Hoge verhoudingen zoals moderne zoogdiersystemen" },
          { en: "Equal predator and prey biomass", es: "Biomasa igual de depredadores y presas", de: "Gleiche Räuber- und Beute-Biomasse", nl: "Gelijke predator en prooi biomassa" },
          { en: "No clear patterns identifiable", es: "Sin patrones claros identificables", de: "Keine klaren Muster identifizierbar", nl: "Geen duidelijke patronen identificeerbaar" }
        ],
        correct: 0,
        explanation: {
          en: "Morrison Formation predator-prey biomass ratios support intermediate metabolic strategies in large dinosaurs, with energy transfer efficiency between ectothermic and endothermic extremes, maximizing ecosystem carrying capacity.",
          es: "Las proporciones de biomasa depredador-presa de la Formación Morrison apoyan estrategias metabólicas intermedias en grandes dinosaurios, con eficiencia de transferencia de energía entre extremos ectotérmicos y endotérmicos, maximizando capacidad de carga del ecosistema.",
          de: "Morrison-Formation-Räuber-Beute-Biomasse-Verhältnisse unterstützen Zwischenstoffwechselstrategien in großen Dinosauriern mit Energieübertragungseffizienz zwischen ektothermen und endothermen Extremen, was die Ökosystem-Tragfähigkeit maximiert.",
          nl: "Morrison Formatie predator-prooi biomassa verhoudingen ondersteunen intermediaire metabolische strategieën in grote dinosaurussen, met energie-overdrachtsefficiëntie tussen ectotherme en endotherme extremen, wat ecosysteem draagkracht maximaliseert."
        }
      },
      {
        question: {
          en: "What role did Jurassic volcanic CO2 emissions play in driving sauropod evolutionary trends?",
          es: "¿Qué papel jugaron las emisiones volcánicas de CO2 jurásicas en impulsar tendencias evolutivas de saurópodos?",
          de: "Welche Rolle spielten Jura-vulkanische CO2-Emissionen beim Antrieb von Sauropoden-Evolutionstrends?",
          nl: "Welke rol speelden Jura vulkanische CO2 emissies bij het aandrijven van sauropode evolutionaire trends?"
        },
        options: [
          { en: "Elevated atmospheric CO2 increased plant C:N ratios, selecting for enhanced digestive efficiency and larger gut capacity in sauropod lineages", es: "CO2 atmosférico elevado aumentó proporciones C:N de plantas, seleccionando eficiencia digestiva mejorada y mayor capacidad intestinal en linajes de saurópodos", de: "Erhöhtes atmosphärisches CO2 steigerte Pflanzen-C:N-Verhältnisse und selektierte für verbesserte Verdauungseffizienz und größere Darmkapazität in Sauropoden-Linien", nl: "Verhoogde atmosferische CO2 verhoogde plant C:N verhoudingen, selecterend voor verbeterde spijsverteringsefficiëntie en grotere darmcapaciteit in sauropode lijnen" },
          { en: "No relationship between CO2 and evolution", es: "Sin relación entre CO2 y evolución", de: "Keine Beziehung zwischen CO2 und Evolution", nl: "Geen relatie tussen CO2 en evolutie" },
          { en: "CO2 prevented sauropod evolution", es: "CO2 previno evolución de saurópodos", de: "CO2 verhinderte Sauropoden-Evolution", nl: "CO2 voorkwam sauropode evolutie" },
          { en: "Only affected plant evolution", es: "Solo afectó evolución de plantas", de: "Beeinflusste nur Pflanzenevolution", nl: "Beïnvloedde alleen plantenevolutie" }
        ],
        correct: 0,
        explanation: {
          en: "Jurassic volcanic emissions drove atmospheric CO2 to levels that reduced plant nutritional quality, creating selective pressure for sauropod gigantism and enhanced digestive systems to process larger volumes of lower-quality plant matter.",
          es: "Las emisiones volcánicas jurásicas impulsaron CO2 atmosférico a niveles que redujeron calidad nutricional de plantas, creando presión selectiva para gigantismo de saurópodos y sistemas digestivos mejorados para procesar mayores volúmenes de materia vegetal de menor calidad.",
          de: "Jura-vulkanische Emissionen trieben atmosphärisches CO2 auf Niveaus, die die Pflanzen-Nährqualität reduzierten und Selektionsdruck für Sauropoden-Gigantismus und verbesserte Verdauungssysteme schufen, um größere Mengen minderwertiger Pflanzenmasse zu verarbeiten.",
          nl: "Jura vulkanische emissies dreven atmosferische CO2 naar niveaus die plantenvoedingskwaliteit verminderden, wat selectiedruk creëerde voor sauropode gigantisme en verbeterde spijsverteringssystemen om grotere volumes lagere-kwaliteit plantenmaterie te verwerken."
        }
      },
      {
        question: {
          en: "What does three-dimensional morphometric analysis reveal about Morrison Formation dinosaur sexual dimorphism?",
          es: "¿Qué revela el análisis morfométrico tridimensional sobre dimorfismo sexual de dinosaurios de la Formación Morrison?",
          de: "Was zeigt dreidimensionale morphometrische Analyse über Morrison-Formation-Dinosaurier-Geschlechtsdimorphismus?",
          nl: "Wat onthult driedimensionale morfometrische analyse over Morrison Formatie dinosaurus seksueel dimorfisme?"
        },
        options: [
          { en: "Subtle but consistent size and robusticity differences in Allosaurus specimens suggest sexual dimorphism with larger, more robust morphs representing females", es: "Diferencias sutiles pero consistentes de tamaño y robustez en especímenes de Allosaurus sugieren dimorfismo sexual con morfos más grandes y robustos representando hembras", de: "Subtile aber konsistente Größen- und Robustheitsunterschiede in Allosaurus-Exemplaren deuten auf Geschlechtsdimorphismus mit größeren, robusteren Morphen als Weibchen", nl: "Subtiele maar consistente grootte en robuustheidsverschillen in Allosaurus specimens suggereren seksueel dimorfisme met grotere, robuustere morfen die vrouwtjes vertegenwoordigen" },
          { en: "No sexual dimorphism detected", es: "Sin dimorfismo sexual detectado", de: "Kein Geschlechtsdimorphismus entdeckt", nl: "Geen seksueel dimorfisme gedetecteerd" },
          { en: "Extreme sexual dimorphism in all species", es: "Dimorfismo sexual extremo en todas las especies", de: "Extremer Geschlechtsdimorphismus in allen Arten", nl: "Extreem seksueel dimorfisme in alle soorten" },
          { en: "Only display structures show dimorphism", es: "Solo estructuras de exhibición muestran dimorfismo", de: "Nur Anzeigestrukturen zeigen Dimorphismus", nl: "Alleen vertoonstructuren tonen dimorfisme" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced morphometric techniques reveal patterns consistent with sexual dimorphism in Morrison theropods, with size and robusticity differences suggesting female-biased size dimorphism as seen in many modern reptiles and birds.",
          es: "Técnicas morfométricas avanzadas revelan patrones consistentes con dimorfismo sexual en terópodos de Morrison, con diferencias de tamaño y robustez sugiriendo dimorfismo de tamaño sesgado hacia hembras como se ve en muchos reptiles y aves modernos.",
          de: "Fortgeschrittene morphometrische Techniken enthüllen Muster, die mit Geschlechtsdimorphismus in Morrison-Theropoden übereinstimmen, mit Größen- und Robustheitsunterschieden, die weibchen-lastigen Größendimorphismus wie bei vielen modernen Reptilien und Vögeln nahelegen.",
          nl: "Geavanceerde morfometrische technieken onthullen patronen consistent met seksueel dimorfisme in Morrison theropoden, met grootte en robuustheidsverschillen die vrouwelijk-vooringenomen grootte dimorfisme suggereren zoals gezien in veel moderne reptielen en vogels."
        }
      },
      {
        question: {
          en: "What constraints did Jurassic plant biochemistry place on herbivore digestive evolution?",
          es: "¿Qué restricciones impuso la bioquímica de plantas jurásicas en la evolución digestiva de herbívoros?",
          de: "Welche Einschränkungen legte die Jura-Pflanzenbiochemie der Pflanzenfresser-Verdauungsevolution auf?",
          nl: "Welke beperkingen legde Jura plantenbiochemie op aan herbivoor spijsverteringsevolutie?"
        },
        options: [
          { en: "High tannin and fiber content in conifers and ferns required extended gut residence times and symbiotic fermentation systems", es: "Alto contenido de taninos y fibra en coníferas y helechos requirió tiempos de residencia intestinal extendidos y sistemas de fermentación simbiótica", de: "Hoher Tannin- und Fasergehalt in Nadelbäumen und Farnen erforderte verlängerte Darm-Verweilzeiten und symbiotische Fermentationssysteme", nl: "Hoog tannine en vezelgehalte in naaldbomen en varens vereiste verlengde darm verblijftijden en symbiotische fermentatiesystemen" },
          { en: "Easy-to-digest plant matter", es: "Materia vegetal fácil de digerir", de: "Leicht verdauliche Pflanzenmasse", nl: "Gemakkelijk verteerbaar plantenmateriaal" },
          { en: "No biochemical constraints", es: "Sin restricciones bioquímicas", de: "Keine biochemischen Einschränkungen", nl: "Geen biochemische beperkingen" },
          { en: "Toxic plants prevented herbivory", es: "Plantas tóxicas previnieron herbivoría", de: "Giftige Pflanzen verhinderten Pflanzenfresser", nl: "Giftige planten voorkwamen herbivorie" }
        ],
        correct: 0,
        explanation: {
          en: "Jurassic plants contained high levels of defensive compounds and structural fibers, driving the evolution of large fermentation chambers, extended gut transit times, and specialized microbial symbionts in herbivorous dinosaurs.",
          es: "Las plantas jurásicas contenían altos niveles de compuestos defensivos y fibras estructurales, impulsando la evolución de grandes cámaras de fermentación, tiempos de tránsito intestinal extendidos y simbiontes microbianos especializados en dinosaurios herbívoros.",
          de: "Jura-Pflanzen enthielten hohe Mengen an Abwehrverbindungen und strukturellen Fasern, was die Evolution großer Fermentationskammern, verlängerte Darmtransitzeiten und spezialisierte mikrobielle Symbionten in pflanzenfressenden Dinosauriern antrieb.",
          nl: "Jura planten bevatten hoge niveaus van verdedigingsverbindingen en structurele vezels, wat de evolutie van grote fermentatiekamers, verlengde darmtransittijden en gespecialiseerde microbiële symbionten in herbivore dinosaurussen aandreef."
        }
      },
      {
        question: {
          en: "What does isotopic analysis of Morrison Formation dinosaur coprolites reveal about trophic interactions?",
          es: "¿Qué revela el análisis isotópico de coprolitos de dinosaurios de la Formación Morrison sobre interacciones tróficas?",
          de: "Was zeigt die Isotopen-Analyse von Morrison-Formation-Dinosaurier-Koprolithen über trophische Interaktionen?",
          nl: "Wat onthult isotopische analyse van Morrison Formatie dinosaurus coprolieten over trofische interacties?"
        },
        options: [
          { en: "Multi-isotope signatures indicate complex food webs with omnivory, scavenging, and specialized feeding behaviors across different size classes", es: "Firmas multi-isotópicas indican redes alimentarias complejas con omnivoría, carroñeo y comportamientos de alimentación especializados entre diferentes clases de tamaño", de: "Multi-Isotopen-Signaturen zeigen komplexe Nahrungsnetze mit Allesfresserei, Aasfressen und spezialisierten Fütterungsverhalten in verschiedenen Größenklassen", nl: "Multi-isotoop signaturen wijzen op complexe voedselnetwerken met omnivorie, aaseten en gespecialiseerde voedingsgedragingen over verschillende grootteklassen" },
          { en: "Simple linear food chains only", es: "Solo cadenas alimentarias lineales simples", de: "Nur einfache lineare Nahrungsketten", nl: "Alleen eenvoudige lineaire voedselketens" },
          { en: "No trophic structure evident", es: "Sin estructura trófica evidente", de: "Keine trophische Struktur erkennbar", nl: "Geen trofische structuur evident" },
          { en: "All dinosaurs were herbivorous", es: "Todos los dinosaurios eran herbívoros", de: "Alle Dinosaurier waren Pflanzenfresser", nl: "Alle dinosaurussen waren herbivoor" }
        ],
        correct: 0,
        explanation: {
          en: "Coprolite isotopic analysis reveals sophisticated Morrison ecosystem structure with multiple trophic levels, opportunistic feeding strategies, and complex predator-prey relationships that maximized resource utilization.",
          es: "El análisis isotópico de coprolitos revela estructura sofisticada del ecosistema Morrison con múltiples niveles tróficos, estrategias de alimentación oportunistas y relaciones depredador-presa complejas que maximizaron utilización de recursos.",
          de: "Koprolith-Isotopen-Analyse enthüllt ausgeklügelte Morrison-Ökosystem-Struktur mit mehreren trophischen Ebenen, opportunistischen Fütterungsstrategien und komplexen Räuber-Beute-Beziehungen, die Ressourcennutzung maximierten.",
          nl: "Coproliet isotopische analyse onthult geavanceerde Morrison ecosysteem structuur met meerdere trofische niveaus, opportunistische voedingsstrategieën en complexe predator-prooi relaties die hulpbronnutilisatie maximaliseerden."
        }
      },
      {
        question: {
          en: "What evidence supports episodic mass mortality events in Morrison Formation dinosaur populations?",
          es: "¿Qué evidencia apoya eventos de mortalidad masiva episódicos en poblaciones de dinosaurios de la Formación Morrison?",
          de: "Welche Belege unterstützen episodische Massensterben-Ereignisse in Morrison-Formation-Dinosaurier-Populationen?",
          nl: "Welk bewijs ondersteunt episodische massa-sterfte gebeurtenissen in Morrison Formatie dinosaurus populaties?"
        },
        options: [
          { en: "Monospecific bone beds with hydraulic concentration patterns and synchronized mortality signatures indicating drought-related mass deaths", es: "Lechos óseos monoespecíficos con patrones de concentración hidráulica y firmas de mortalidad sincronizada indicando muertes masivas relacionadas con sequía", de: "Monospezifische Knochenbetten mit hydraulischen Konzentrations-mustern und synchronisierten Sterblichkeitssignaturen zeigen dürre-bedingte Massentode", nl: "Monospecifieke botbedden met hydraulische concentratiepatronen en gesynchroniseerde sterfte signaturen die droogte-gerelateerde massa-sterften aangeven" },
          { en: "No mass mortality evidence", es: "Sin evidencia de mortalidad masiva", de: "Keine Massensterben-Belege", nl: "Geen massa-sterfte bewijs" },
          { en: "Only predation-related deaths", es: "Solo muertes relacionadas con depredación", de: "Nur raubtierbezogene Todesfälle", nl: "Alleen predatie-gerelateerde sterften" },
          { en: "Random individual deaths", es: "Muertes individuales aleatorias", de: "Zufällige individuelle Todesfälle", nl: "Willekeurige individuele sterften" }
        ],
        correct: 0,
        explanation: {
          en: "Multiple Morrison bone beds show evidence of catastrophic mortality events affecting entire populations, likely caused by severe droughts that concentrated animals around shrinking water sources, similar to modern African drought scenarios.",
          es: "Múltiples lechos óseos de Morrison muestran evidencia de eventos de mortalidad catastrófica afectando poblaciones enteras, probablemente causados por sequías severas que concentraron animales alrededor de fuentes de agua menguantes, similar a escenarios de sequía africanos modernos.",
          de: "Mehrere Morrison-Knochenbetten zeigen Belege katastrophaler Sterblichkeitsereignisse, die ganze Populationen betrafen, wahrscheinlich verursacht durch schwere Dürren, die Tiere um schwindende Wasserquellen konzentrierten, ähnlich modernen afrikanischen Dürre-Szenarien.",
          nl: "Meerdere Morrison botbedden tonen bewijs van catastrofale sterfte gebeurtenissen die hele populaties troffen, waarschijnlijk veroorzaakt door ernstige droogtes die dieren concentreerden rond krimpende waterbronnen, vergelijkbaar met moderne Afrikaanse droogte scenario's."
        }
      },
      {
        question: {
          en: "What does crystallographic analysis of Jurassic dinosaur bone apatite reveal about paleodiet and migration?",
          es: "¿Qué revela el análisis cristalográfico de apatita ósea de dinosaurios jurásicos sobre paleodieta y migración?",
          de: "Was zeigt kristallographische Analyse von Jura-Dinosaurier-Knochen-Apatit über Paläodiät und Migration?",
          nl: "Wat onthult kristallografische analyse van Jura dinosaurus bot apatiet over paleodieet en migratie?"
        },
        options: [
          { en: "Trace element substitution patterns record seasonal dietary shifts and geographic movement across isotopic gradients", es: "Patrones de sustitución de elementos traza registran cambios dietéticos estacionales y movimiento geográfico através de gradientes isotópicos", de: "Spurenelement-Substitutionsmuster zeichnen saisonale Ernährungsveränderungen und geographische Bewegung über isotopische Gradienten auf", nl: "Spoorelement substitutiepatronen registreren seizoensgebonden voedingsveranderingen en geografische beweging over isotopische gradiënten" },
          { en: "No chemical information preserved", es: "Sin información química preservada", de: "Keine chemische Information konserviert", nl: "Geen chemische informatie bewaard" },
          { en: "Only age determination possible", es: "Solo determinación de edad posible", de: "Nur Altersbestimmung möglich", nl: "Alleen leeftijdsbepaling mogelijk" },
          { en: "Uniform composition throughout", es: "Composición uniforme en todo", de: "Gleichmäßige Zusammensetzung durchgehend", nl: "Uniforme samenstelling overal" }
        ],
        correct: 0,
        explanation: {
          en: "High-resolution crystallographic analysis reveals that trace element incorporation into apatite crystals during bone formation preserves a detailed chemical record of dietary composition and geographic location.",
          es: "El análisis cristalográfico de alta resolución revela que la incorporación de elementos traza en cristales de apatita durante la formación ósea preserva un registro químico detallado de composición dietética y ubicación geográfica.",
          de: "Hochauflösende kristallographische Analyse zeigt, dass Spurenelement-Einbau in Apatit-Kristalle während der Knochenbildung eine detaillierte chemische Aufzeichnung der Ernährungszusammensetzung und geographischen Lage konserviert.",
          nl: "Hoge-resolutie kristallografische analyse onthult dat spoorelement incorporatie in apatiet kristallen tijdens botvorming een gedetailleerde chemische registratie van voedingssamenstelling en geografische locatie bewaart."
        }
      },
      {
        question: {
          en: "What was the role of endosymbiotic relationships in Jurassic dinosaur digestive physiology?",
          es: "¿Cuál era el papel de las relaciones endosimbióticas en la fisiología digestiva de dinosaurios jurásicos?",
          de: "Was war die Rolle endosymbiotischer Beziehungen in der Verdauungsphysiologie von Jura-Dinosauriern?",
          nl: "Wat was de rol van endosymbiotische relaties in Jura dinosaurus spijsverteringsfysiologie?"
        },
        options: [
          { en: "Specialized microbial communities enabled cellulose breakdown and synthesis of essential amino acids in enlarged gut chambers", es: "Comunidades microbianas especializadas permitieron descomposición de celulosa y síntesis de aminoácidos esenciales en cámaras intestinales agrandadas", de: "Spezialisierte mikrobielle Gemeinschaften ermöglichten Zellulose-Abbau und Synthese essentieller Aminosäuren in vergrößerten Darmkammern", nl: "Gespecialiseerde microbiële gemeenschappen maakten cellulose afbraak en synthese van essentiële aminozuren mogelijk in vergrote darmkamers" },
          { en: "No microbial assistance required", es: "Sin asistencia microbiana requerida", de: "Keine mikrobielle Unterstützung erforderlich", nl: "Geen microbiële assistentie vereist" },
          { en: "Only pathogenic relationships existed", es: "Solo existían relaciones patogénicas", de: "Nur pathogene Beziehungen existierten", nl: "Alleen pathogene relaties bestonden" },
          { en: "External digestion only", es: "Solo digestión externa", de: "Nur externe Verdauung", nl: "Alleen externe vertering" }
        ],
        correct: 0,
        explanation: {
          en: "Coprolite analysis and comparative physiology suggest sauropods relied on complex gut microbiomes for fiber digestion, similar to modern herbivorous megafauna, enabling exploitation of low-quality Jurassic plant resources.",
          es: "El análisis de coprolitos y fisiología comparativa sugiere que los saurópodos dependían de microbiomas intestinales complejos para digestión de fibra, similar a megafauna herbívora moderna, permitiendo explotación de recursos vegetales jurásicos de baja calidad.",
          de: "Koprolith-Analyse und vergleichende Physiologie deuten darauf hin, dass Sauropoden auf komplexe Darm-Mikrobiome für Faserverdauung angewiesen waren, ähnlich moderner herbivorer Megafauna, was Ausbeutung minderwertiger Jura-Pflanzenressourcen ermöglichte.",
          nl: "Coproliet analyse en vergelijkende fysiologie suggereren dat sauropoden afhankelijk waren van complexe darm microbiomen voor vezelvertering, vergelijkbaar met moderne herbivore megafauna, wat exploitatie van lage-kwaliteit Jura plantenhulpbronnen mogelijk maakte."
        }
      },
      {
        question: {
          en: "What does theoretical modeling reveal about the biomechanical limits of Jurassic gigantism?",
          es: "¿Qué revela el modelado teórico sobre los límites biomecánicos del gigantismo jurásico?",
          de: "Was zeigt theoretische Modellierung über biomechanische Grenzen des Jura-Gigantismus?",
          nl: "Wat onthult theoretische modellering over biomechanische grenzen van Jura gigantisme?"
        },
        options: [
          { en: "Square-cube law constraints required fundamental skeletal redesign with hollow bones and air-sac respiratory systems", es: "Restricciones de ley cuadrado-cubo requirieron rediseño esquelético fundamental con huesos huecos y sistemas respiratorios de sacos aéreos", de: "Quadrat-Kubik-Gesetz-Beschränkungen erforderten fundamentale Skelett-Neugestaltung mit hohlen Knochen und Luftsack-Atmungssystemen", nl: "Kwadraat-kubus wet beperkingen vereisten fundamenteel skelet herontwerp met holle botten en luchtzak ademhalingssystemen" },
          { en: "No physical constraints on size", es: "Sin restricciones físicas en tamaño", de: "Keine physischen Größenbeschränkungen", nl: "Geen fysieke groottebeperkingen" },
          { en: "Only environmental limits existed", es: "Solo existían límites ambientales", de: "Nur Umweltgrenzen existierten", nl: "Alleen omgevingsgrenzen bestonden" },
          { en: "Metabolic constraints only", es: "Solo restricciones metabólicas", de: "Nur metabolische Beschränkungen", nl: "Alleen metabolische beperkingen" }
        ],
        correct: 0,
        explanation: {
          en: "Biomechanical modeling demonstrates that the square-cube law imposed severe constraints on large dinosaurs, requiring evolutionary innovations in bone architecture, respiratory efficiency, and circulatory systems to achieve unprecedented body sizes.",
          es: "El modelado biomecánico demuestra que la ley cuadrado-cubo impuso restricciones severas en grandes dinosaurios, requiriendo innovaciones evolutivas en arquitectura ósea, eficiencia respiratoria y sistemas circulatorios para lograr tamaños corporales sin precedentes.",
          de: "Biomechanische Modellierung zeigt, dass das Quadrat-Kubik-Gesetz schwere Beschränkungen für große Dinosaurier auferlegte und evolutionäre Innovationen in Knochenarchitektur, Atmungseffizienz und Kreislaufsystemen erforderte, um beispiellose Körpergrößen zu erreichen.",
          nl: "Biomechanische modellering toont dat de kwadraat-kubus wet zware beperkingen oplegde aan grote dinosaurussen, vereisend evolutionaire innovaties in botarchitectuur, ademhalingsefficiëntie en circulatiesystemen om ongekende lichaamsgroottes te bereiken."
        }
      },
      {
        question: {
          en: "How did Jurassic atmospheric chemistry influence dinosaur respiratory evolution?",
          es: "¿Cómo influyó la química atmosférica jurásica en la evolución respiratoria de dinosaurios?",
          de: "Wie beeinflusste die Jura-Atmosphärenchemie die Atmungsevolution der Dinosaurier?",
          nl: "Hoe beïnvloedde Jura atmosferische chemie de ademhalings evolutie van dinosaurussen?"
        },
        options: [
          { en: "Elevated CO2 and reduced O2 partial pressure drove evolution of highly efficient unidirectional airflow systems", es: "CO2 elevado y presión parcial de O2 reducida impulsaron evolución de sistemas de flujo aéreo unidireccional altamente eficientes", de: "Erhöhtes CO2 und reduzierter O2-Partialdruck trieben die Evolution hocheffizienter unidirektionaler Luftstrom-Systeme an", nl: "Verhoogde CO2 en verminderde O2 partiële druk dreven evolutie van zeer efficiënte unidirectionele luchtstroom systemen aan" },
          { en: "Atmospheric composition had no effect", es: "Composición atmosférica no tuvo efecto", de: "Atmosphärenzusammensetzung hatte keinen Effekt", nl: "Atmosferische samenstelling had geen effect" },
          { en: "Only temperature affected respiration", es: "Solo temperatura afectó respiración", de: "Nur Temperatur beeinflusste Atmung", nl: "Alleen temperatuur beïnvloedde ademhaling" },
          { en: "Simpler respiratory systems evolved", es: "Evolucionaron sistemas respiratorios más simples", de: "Einfachere Atmungssysteme entwickelten sich", nl: "Eenvoudigere ademhalingssystemen evolueerden" }
        ],
        correct: 0,
        explanation: {
          en: "Jurassic atmospheric conditions with high CO2 (>1000ppm) and lower oxygen availability created strong selective pressure for respiratory innovations, leading to the evolution of avian-style air sac systems in dinosaurs.",
          es: "Las condiciones atmosféricas jurásicas con alto CO2 (>1000ppm) y menor disponibilidad de oxígeno crearon fuerte presión selectiva para innovaciones respiratorias, llevando a la evolución de sistemas de sacos aéreos de estilo aviar en dinosaurios.",
          de: "Jura-Atmosphärenbedingungen mit hohem CO2 (>1000ppm) und geringerer Sauerstoffverfügbarkeit schufen starken Selektionsdruck für Atmungsinnovationen, was zur Evolution aviärer Luftsack-Systeme in Dinosauriern führte.",
          nl: "Jura atmosferische omstandigheden met hoge CO2 (>1000ppm) en lagere zuurstofbeschikbaarheid creëerden sterke selectiedruk voor ademhalingsinnovaties, leidend tot evolutie van vogel-achtige luchtzak systemen in dinosaurussen."
        }
      },
      {
        question: {
          en: "What role did Jurassic volcanic Large Igneous Province eruptions play in dinosaur macroevolution?",
          es: "¿Qué papel jugaron las erupciones de Provincia Ígnea Grande volcánica jurásica en la macroevolución de dinosaurios?",
          de: "Welche Rolle spielten vulkanische Große Magmatische Provinz-Eruptionen des Jura in der Dinosaurier-Makroevolution?",
          nl: "Welke rol speelden Jura vulkanische Grote Igneous Provincie erupties in dinosaurus macroevolutie?"
        },
        options: [
          { en: "Episodic volcanic events triggered adaptive radiations through habitat fragmentation and environmental stress", es: "Eventos volcánicos episódicos desencadenaron radiaciones adaptativas através de fragmentación de hábitat y estrés ambiental", de: "Episodische vulkanische Ereignisse lösten adaptive Radiationen durch Habitat-Fragmentierung und Umweltstress aus", nl: "Episodische vulkanische gebeurtenissen veroorzaakten adaptieve radiaties door habitat fragmentatie en omgevingsstress" },
          { en: "Volcanism had no evolutionary impact", es: "Volcanismo no tuvo impacto evolutivo", de: "Vulkanismus hatte keinen evolutionären Einfluss", nl: "Vulkanisme had geen evolutionaire impact" },
          { en: "Only caused immediate extinctions", es: "Solo causó extinciones inmediatas", de: "Verursachte nur sofortige Aussterben", nl: "Veroorzaakte alleen onmiddellijke extincties" },
          { en: "Prevented all dinosaur evolution", es: "Previno toda evolución de dinosaurios", de: "Verhinderte alle Dinosaurier-Evolution", nl: "Voorkwam alle dinosaurus evolutie" }
        ],
        correct: 0,
        explanation: {
          en: "Large Igneous Province volcanism during the Jurassic created pulses of environmental change that fragmented populations and created new ecological niches, driving rapid diversification in dinosaur lineages.",
          es: "El volcanismo de Provincia Ígnea Grande durante el Jurásico creó pulsos de cambio ambiental que fragmentaron poblaciones y crearon nuevos nichos ecológicos, impulsando diversificación rápida en linajes de dinosaurios.",
          de: "Große Magmatische Provinz-Vulkanismus während des Jura schuf Umweltveränderungs-Impulse, die Populationen fragmentierten und neue ökologische Nischen schufen, was schnelle Diversifizierung in Dinosaurier-Linien antrieb.",
          nl: "Grote Igneous Provincie vulkanisme tijdens het Jura creëerde pulsen van omgevingsverandering die populaties fragmenteerden en nieuwe ecologische niches creëerden, aandrijvend snelle diversificatie in dinosaurus lijnen."
        }
      },
      {
        question: {
          en: "What does proteomics analysis of exceptionally preserved Jurassic dinosaur specimens reveal?",
          es: "¿Qué revela el análisis proteómico de especímenes de dinosaurios jurásicos excepcionalmente preservados?",
          de: "Was zeigt proteomische Analyse außergewöhnlich erhaltener Jura-Dinosaurier-Exemplare?",
          nl: "Wat onthult proteomics analyse van uitzonderlijk bewaarde Jura dinosaurus specimens?"
        },
        options: [
          { en: "Collagen sequence data supporting close phylogenetic relationships between dinosaurs and modern birds", es: "Datos de secuencia de colágeno apoyando relaciones filogenéticas cercanas entre dinosaurios y aves modernas", de: "Kollagen-Sequenzdaten unterstützen enge phylogenetische Beziehungen zwischen Dinosauriern und modernen Vögeln", nl: "Collageen sequentie data ondersteunend nauwe fylogenetische relaties tussen dinosaurussen en moderne vogels" },
          { en: "No protein preservation possible", es: "Sin preservación de proteínas posible", de: "Keine Proteinkonservierung möglich", nl: "Geen eiwit bewaring mogelijk" },
          { en: "Only DNA sequences recovered", es: "Solo secuencias de ADN recuperadas", de: "Nur DNA-Sequenzen wiedergewonnen", nl: "Alleen DNA sequenties hersteld" },
          { en: "Uniform protein degradation", es: "Degradación uniforme de proteínas", de: "Gleichmäßiger Proteinabbau", nl: "Uniforme eiwit degradatie" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced mass spectrometry techniques have recovered amino acid sequences from exceptionally preserved dinosaur bone collagen, providing molecular evidence for dinosaur-bird evolutionary relationships and ancient protein stability.",
          es: "Técnicas avanzadas de espectrometría de masas han recuperado secuencias de aminoácidos de colágeno óseo de dinosaurio excepcionalmente preservado, proporcionando evidencia molecular para relaciones evolutivas dinosaurio-ave y estabilidad de proteínas antiguas.",
          de: "Fortgeschrittene Massenspektrometrie-Techniken haben Aminosäure-Sequenzen aus außergewöhnlich erhaltenem Dinosaurier-Knochen-Kollagen gewonnen und liefern molekulare Belege für Dinosaurier-Vogel-Evolutionsbeziehungen und alte Proteinstabilität.",
          nl: "Geavanceerde massaspectrometrie technieken hebben aminozuur sequenties hersteld van uitzonderlijk bewaard dinosaurus bot collageen, moleculair bewijs leverend voor dinosaurus-vogel evolutionaire relaties en oude eiwit stabiliteit."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();