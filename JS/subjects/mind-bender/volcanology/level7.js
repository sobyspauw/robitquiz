// Volcanology - Level 7: Advanced Volcanic Processes & Petrology
(function() {
  const level7 = {
    name: {
      en: "Advanced Volcanic Processes & Petrology",
      es: "Procesos Volcánicos Avanzados y Petrología",
      de: "Fortgeschrittene Vulkanische Prozesse und Petrologie",
      nl: "Geavanceerde Vulkanische Processen en Petrologie"
    },
    questions: [
      {
        question: {
          en: "What controls the degree of magma differentiation in crustal magma chambers?",
          es: "¿Qué controla el grado de diferenciación del magma en las cámaras magmáticas corticales?",
          de: "Was kontrolliert den Grad der Magma-Differenzierung in krustalen Magmakammern?",
          nl: "Wat controleert de mate van magma-differentiatie in kortale magmakamers?"
        },
        options: [
          { en: "Residence time, thermal gradient, and volatile content", es: "Tiempo de residencia, gradiente térmico y contenido de volátiles", de: "Verweilzeit, Temperaturgradient und Volatilgehalt", nl: "Verblijftijd, thermische gradiënt en vluchtige stoffen gehalte" },
          { en: "Only chamber depth", es: "Solo la profundidad de la cámara", de: "Nur Kammertiefe", nl: "Alleen kamerdiepte" },
          { en: "Tidal forces exclusively", es: "Fuerzas de marea exclusivamente", de: "Ausschließlich Gezeitenkräfte", nl: "Uitsluitend getijkrachten" },
          { en: "Surface atmospheric pressure", es: "Presión atmosférica superficial", de: "Oberflächenatmosphärendruck", nl: "Oppervlakte atmosferische druk" }
        ],
        correct: 0,
        explanation: {
          en: "Magma differentiation is controlled by residence time (allowing fractional crystallization), thermal gradient (controlling cooling rate and crystal settling), and volatile content (affecting mineral stability and melt structure). Longer residence times enable extensive fractionation, steep thermal gradients promote layered intrusions, and high volatile contents can suppress crystallization or enhance differentiation through fluid-assisted processes.",
          es: "La diferenciación del magma está controlada por el tiempo de residencia (permitiendo cristalización fraccionada), gradiente térmico (controlando la tasa de enfriamiento y asentamiento de cristales), y contenido de volátiles (afectando la estabilidad mineral y estructura del fundido). Tiempos de residencia más largos permiten fraccionamiento extenso, gradientes térmicos pronunciados promueven intrusiones estratificadas, y alto contenido de volátiles puede suprimir cristalización o mejorar diferenciación a través de procesos asistidos por fluidos.",
          de: "Magma-Differenzierung wird durch Verweilzeit (ermöglicht fraktionierte Kristallisation), Temperaturgradient (kontrolliert Abkühlrate und Kristallsetzung) und Volatilgehalt (beeinflusst Mineralstabilität und Schmelzstruktur) kontrolliert. Längere Verweilzeiten ermöglichen extensive Fraktionierung, steile Temperaturgradienten fördern geschichtete Intrusionen, und hoher Volatilgehalt kann Kristallisation unterdrücken oder Differenzierung durch fluidunterstützte Prozesse verstärken.",
          nl: "Magma-differentiatie wordt gecontroleerd door verblijftijd (maakt fractionele kristallisatie mogelijk), thermische gradiënt (controleert afkoelingssnelheid en kristalzetting), en vluchtige stoffen gehalte (beïnvloedt mineraalstabiliteit en smeltstructuur). Langere verblijftijden maken uitgebreide fractionering mogelijk, steile thermische gradiënten bevorderen gelaagde intrusies, en hoog vluchtige stoffen gehalte kan kristallisatie onderdrukken of differentiatie versterken door vloeistof-ondersteunde processen."
        }
      },
      {
        question: {
          en: "How does assimilation-fractional crystallization (AFC) affect magma evolution?",
          es: "¿Cómo afecta la cristalización fraccionada por asimilación (AFC) a la evolución del magma?",
          de: "Wie beeinflusst Assimilations-Fraktionierte Kristallisation (AFC) die Magmaevolution?",
          nl: "Hoe beïnvloedt assimilatie-fractionele kristallisatie (AFC) magma-evolutie?"
        },
        options: [
          { en: "Simultaneous assimilation of country rock and fractional crystallization modify both major and trace element signatures", es: "La asimilación simultánea de roca encajante y cristalización fraccionada modifican tanto las firmas de elementos mayores como de trazas", de: "Gleichzeitige Assimilation von Nebengestein und fraktionierte Kristallisation modifizieren sowohl Haupt- als auch Spurenelementsignaturen", nl: "Gelijktijdige assimilatie van omliggend gesteente en fractionele kristallisatie wijzigen zowel hoofd- als spoorelement signaturen" },
          { en: "Only changes magma temperature", es: "Solo cambia la temperatura del magma", de: "Ändert nur Magmatemperatur", nl: "Verandert alleen magma temperatuur" },
          { en: "Has no effect on geochemistry", es: "No tiene efecto en la geoquímica", de: "Hat keinen Effekt auf Geochemie", nl: "Heeft geen effect op geochemie" },
          { en: "Only affects volcanic gas emissions", es: "Solo afecta las emisiones de gases volcánicos", de: "Beeinflusst nur vulkanische Gasemissionen", nl: "Beïnvloedt alleen vulkanische gasemissies" }
        ],
        correct: 0,
        explanation: {
          en: "AFC processes involve simultaneous assimilation of wall rock and fractional crystallization, creating complex evolutionary paths. Assimilation adds components with different isotopic signatures (especially Sr, Nd, Pb isotopes), while fractional crystallization modifies major element chemistry and compatible/incompatible trace element ratios. This dual process can explain many natural magma suites that cannot be explained by simple fractional crystallization alone.",
          es: "Los procesos AFC involucran asimilación simultánea de roca de pared y cristalización fraccionada, creando caminos evolutivos complejos. La asimilación agrega componentes con diferentes firmas isotópicas (especialmente isótopos Sr, Nd, Pb), mientras la cristalización fraccionada modifica la química de elementos mayores y proporciones de elementos traza compatibles/incompatibles. Este proceso dual puede explicar muchas suites de magma naturales que no pueden explicarse solo por cristalización fraccionada simple.",
          de: "AFC-Prozesse beinhalten gleichzeitige Assimilation von Wandgestein und fraktionierte Kristallisation, wodurch komplexe Evolutionspfade entstehen. Assimilation fügt Komponenten mit verschiedenen isotopischen Signaturen hinzu (besonders Sr, Nd, Pb Isotope), während fraktionierte Kristallisation Hauptelementchemie und kompatible/inkompatible Spurenelementverhältnisse modifiziert. Dieser duale Prozess kann viele natürliche Magmasuiten erklären, die nicht durch einfache fraktionierte Kristallisation allein erklärt werden können.",
          nl: "AFC-processen omvatten gelijktijdige assimilatie van wandgesteente en fractionele kristallisatie, waardoor complexe evolutionaire paden ontstaan. Assimilatie voegt componenten toe met verschillende isotopische handtekeningen (vooral Sr, Nd, Pb isotopen), terwijl fractionele kristallisatie hoofdelement chemie en compatibele/incompatibele spoorelement verhoudingen wijzigt. Dit dubbele proces kan vele natuurlijke magma suites verklaren die niet kunnen worden verklaard door eenvoudige fractionele kristallisatie alleen."
        }
      },
      {
        question: {
          en: "What is the significance of liquidus temperature in volcanic petrology?",
          es: "¿Cuál es la importancia de la temperatura de liquidus en petrología volcánica?",
          de: "Was ist die Bedeutung der Liquidustemperatur in der Vulkanpetrologie?",
          nl: "Wat is de betekenis van liquidus temperatuur in vulkanische petrologie?"
        },
        options: [
          { en: "It defines the temperature above which the magma is completely molten and controls crystallization sequence", es: "Define la temperatura por encima de la cual el magma está completamente fundido y controla la secuencia de cristalización", de: "Sie definiert die Temperatur, oberhalb derer Magma vollständig geschmolzen ist und kontrolliert die Kristallisationssequenz", nl: "Het definieert de temperatuur waarboven het magma volledig gesmolten is en controleert de kristallisatiesequentie" },
          { en: "Only determines eruption column color", es: "Solo determina el color de la columna de erupción", de: "Bestimmt nur Eruptionssäulenfarbe", nl: "Bepaalt alleen eruptiekolomkleur" },
          { en: "Has no relationship to mineral crystallization", es: "No tiene relación con la cristalización mineral", de: "Hat keine Beziehung zur Mineralkristallisation", nl: "Heeft geen relatie tot mineraal kristallisatie" },
          { en: "Only affects lava flow velocity", es: "Solo afecta la velocidad del flujo de lava", de: "Beeinflusst nur Lavastromgeschwindigkeit", nl: "Beïnvloedt alleen lavastroom snelheid" }
        ],
        correct: 0,
        explanation: {
          en: "Liquidus temperature represents the temperature at which the first crystals begin to form from a cooling melt, marking the boundary between completely molten and partially crystalline states. It controls the crystallization sequence, determines which minerals crystallize first, affects magma rheology through crystal content, and is crucial for understanding magma storage conditions and eruption temperatures in natural systems.",
          es: "La temperatura de liquidus representa la temperatura a la cual los primeros cristales comienzan a formarse de un fundido que se enfría, marcando el límite entre estados completamente fundido y parcialmente cristalino. Controla la secuencia de cristalización, determina qué minerales cristalizan primero, afecta la reología del magma a través del contenido de cristal, y es crucial para entender las condiciones de almacenamiento de magma y temperaturas de erupción en sistemas naturales.",
          de: "Die Liquidustemperatur repräsentiert die Temperatur, bei der die ersten Kristalle aus einer abkühlenden Schmelze zu bilden beginnen und markiert die Grenze zwischen vollständig geschmolzenem und teilweise kristallinem Zustand. Sie kontrolliert die Kristallisationssequenz, bestimmt welche Minerale zuerst kristallisieren, beeinflusst Magmarheologie durch Kristallgehalt und ist entscheidend für das Verständnis von Magmaspeicherbedingungen und Eruptionstemperaturen in natürlichen Systemen.",
          nl: "Liquidus temperatuur vertegenwoordigt de temperatuur waarbij de eerste kristallen beginnen te vormen uit een afkoelende smelt, waarbij de grens wordt gemarkeerd tussen volledig gesmolten en gedeeltelijk kristallijne toestanden. Het controleert de kristallisatiesequentie, bepaalt welke mineralen eerst kristalliseren, beïnvloedt magma rheologie door kristalgehalte, en is cruciaal voor het begrijpen van magma opslagcondities en eruptietemperaturen in natuurlijke systemen."
        }
      },
      {
        question: {
          en: "How do volatile phases affect mineral stability and crystallization in silicate melts?",
          es: "¿Cómo afectan las fases volátiles la estabilidad mineral y cristalización en fundidos silicatados?",
          de: "Wie beeinflussen volatile Phasen Mineralstabilität und Kristallisation in Silikatschmelzen?",
          nl: "Hoe beïnvloeden vluchtige fasen mineraalstabiliteit en kristallisatie in silicaatsmelten?"
        },
        options: [
          { en: "Volatiles expand stability fields, lower crystallization temperatures, and can stabilize hydrous phases", es: "Los volátiles expanden campos de estabilidad, disminuyen temperaturas de cristalización y pueden estabilizar fases hidratadas", de: "Volatile erweitern Stabilitätsfelder, senken Kristallisationstemperaturen und können hydratisierte Phasen stabilisieren", nl: "Vluchtige stoffen breiden stabiliteitsgebieden uit, verlagen kristallisatietemperaturen en kunnen gehydrateerde fasen stabiliseren" },
          { en: "Volatiles only change melt color", es: "Los volátiles solo cambian el color del fundido", de: "Volatile ändern nur Schmelzfarbe", nl: "Vluchtige stoffen veranderen alleen smeltkleur" },
          { en: "They have no effect on crystallization", es: "No tienen efecto en la cristalización", de: "Sie haben keinen Effekt auf Kristallisation", nl: "Ze hebben geen effect op kristallisatie" },
          { en: "Volatiles prevent all mineral formation", es: "Los volátiles previenen toda formación mineral", de: "Volatile verhindern alle Mineralbildung", nl: "Vluchtige stoffen voorkomen alle mineraalvorming" }
        ],
        correct: 0,
        explanation: {
          en: "Volatile phases (H2O, CO2, S, halogens) dramatically affect mineral crystallization by: expanding stability fields of hydrous minerals (amphibole, biotite), lowering crystallization temperatures through fluxing, modifying melt structure and mineral-melt partition coefficients, enabling formation of volatile-bearing phases, and creating complex P-T-X phase relationships that control the sequence and composition of crystallizing phases.",
          es: "Las fases volátiles (H2O, CO2, S, halógenos) afectan dramáticamente la cristalización mineral: expandiendo campos de estabilidad de minerales hidratados (anfíbol, biotita), disminuyendo temperaturas de cristalización a través de flujo, modificando estructura del fundido y coeficientes de partición mineral-fundido, permitiendo formación de fases portadoras de volátiles, y creando relaciones de fase P-T-X complejas que controlan la secuencia y composición de fases cristalizantes.",
          de: "Volatile Phasen (H2O, CO2, S, Halogene) beeinflussen Mineralkristallisation dramatisch durch: Erweiterung von Stabilitätsfeldern hydratisierter Minerale (Amphibol, Biotit), Senkung von Kristallisationstemperaturen durch Fluxwirkung, Modifikation von Schmelzstruktur und Mineral-Schmelz-Verteilungskoeffizienten, Ermöglichung der Bildung volatil-haltiger Phasen, und Schaffung komplexer P-T-X Phasenbeziehungen, die Sequenz und Zusammensetzung kristallisierender Phasen kontrollieren.",
          nl: "Vluchtige fasen (H2O, CO2, S, halogenen) beïnvloeden mineraal kristallisatie dramatisch door: uitbreiding van stabiliteitsgebieden van gehydrateerde mineralen (amfibool, biotiet), verlaging van kristallisatietemperaturen door vloeimiddel werking, modificatie van smeltstructuur en mineraal-smelt verdelingscoëfficiënten, mogelijk maken van vorming van vluchtige-dragende fasen, en creëren van complexe P-T-X fase relaties die de sequentie en samenstelling van kristalliserende fasen controleren."
        }
      },
      {
        question: {
          en: "What role does oxygen fugacity play in magmatic processes and mineral assemblages?",
          es: "¿Qué papel juega la fugacidad de oxígeno en los procesos magmáticos y ensambles minerales?",
          de: "Welche Rolle spielt Sauerstofffugazität in magmatischen Prozessen und Mineralvergesellschaftungen?",
          nl: "Welke rol speelt zuurstofffugaciteit in magmatische processen en mineraal assemblages?"
        },
        options: [
          { en: "It controls Fe2+/Fe3+ ratios, affecting mineral stability, crystallization order, and sulfur speciation", es: "Controla las proporciones Fe2+/Fe3+, afectando estabilidad mineral, orden de cristalización y especiación de azufre", de: "Sie kontrolliert Fe2+/Fe3+-Verhältnisse und beeinflusst Mineralstabilität, Kristallisationsreihenfolge und Schwefelspeziation", nl: "Het controleert Fe2+/Fe3+ verhoudingen, beïnvloedt mineraalstabiliteit, kristallisatievolgorde en zwavelspeciatie" },
          { en: "Only affects magma viscosity", es: "Solo afecta la viscosidad del magma", de: "Beeinflusst nur Magmaviskosität", nl: "Beïnvloedt alleen magma viscositeit" },
          { en: "Has no impact on volcanic processes", es: "No tiene impacto en procesos volcánicos", de: "Hat keinen Einfluss auf vulkanische Prozesse", nl: "Heeft geen impact op vulkanische processen" },
          { en: "Only determines eruption timing", es: "Solo determina el momento de erupción", de: "Bestimmt nur Eruptionszeitpunkt", nl: "Bepaalt alleen eruptie timing" }
        ],
        correct: 0,
        explanation: {
          en: "Oxygen fugacity (fO2) is fundamental in controlling Fe2+/Fe3+ ratios in melts and minerals, directly affecting: mineral stability (magnetite vs. ilmenite crystallization), crystallization sequence (early vs. late Fe-Ti oxide formation), sulfur speciation (sulfide vs. sulfate), volatile behavior (SO2 vs. H2S degassing), and ultimately eruption style through effects on melt viscosity and volatile solubility.",
          es: "La fugacidad de oxígeno (fO2) es fundamental para controlar las proporciones Fe2+/Fe3+ en fundidos y minerales, afectando directamente: estabilidad mineral (cristalización de magnetita vs. ilmenita), secuencia de cristalización (formación temprana vs. tardía de óxidos Fe-Ti), especiación de azufre (sulfuro vs. sulfato), comportamiento de volátiles (desgasificación SO2 vs. H2S), y finalmente estilo de erupción a través de efectos en viscosidad de fundido y solubilidad de volátiles.",
          de: "Sauerstofffugazität (fO2) ist fundamental für die Kontrolle von Fe2+/Fe3+-Verhältnissen in Schmelzen und Mineralen und beeinflusst direkt: Mineralstabilität (Magnetit vs. Ilmenit Kristallisation), Kristallisationssequenz (frühe vs. späte Fe-Ti-Oxidbildung), Schwefelspeziation (Sulfid vs. Sulfat), Volatilverhalten (SO2 vs. H2S Entgasung), und letztendlich Eruptionsstil durch Effekte auf Schmelzviskosität und Volatillöslichkeit.",
          nl: "Zuurstofffugaciteit (fO2) is fundamenteel in het controleren van Fe2+/Fe3+ verhoudingen in smelten en mineralen, direct beïnvloedend: mineraalstabiliteit (magnetiet vs. ilmeniet kristallisatie), kristallisatiesequentie (vroege vs. late Fe-Ti oxide vorming), zwavelspeciatie (sulfide vs. sulfaat), vluchtige gedrag (SO2 vs. H2S ontgassing), en uiteindelijk eruptiestijl door effecten op smeltviscositeit en vluchtige oplosbaarheid."
        }
      },
      {
        question: {
          en: "How does pressure affect the crystallization behavior of silicate melts?",
          es: "¿Cómo afecta la presión el comportamiento de cristalización de fundidos silicatados?",
          de: "Wie beeinflusst Druck das Kristallisationsverhalten von Silikatschmelzen?",
          nl: "Hoe beïnvloedt druk het kristallisatiegedrag van silicaatsmelten?"
        },
        options: [
          { en: "Pressure affects mineral stability fields, changes reaction boundaries, and controls volatile solubility", es: "La presión afecta campos de estabilidad mineral, cambia límites de reacción y controla solubilidad de volátiles", de: "Druck beeinflusst Mineralstabilitätsfelder, ändert Reaktionsgrenzen und kontrolliert Volatillöslichkeit", nl: "Druk beïnvloedt mineraal stabiliteitsgebieden, verandert reactiegrenzen en controleert vluchtige oplosbaarheid" },
          { en: "Pressure only affects eruption height", es: "La presión solo afecta la altura de erupción", de: "Druck beeinflusst nur Eruptionshöhe", nl: "Druk beïnvloedt alleen eruptiehoogte" },
          { en: "Has no effect on mineral formation", es: "No tiene efecto en la formación mineral", de: "Hat keinen Effekt auf Mineralbildung", nl: "Heeft geen effect op mineraalvorming" },
          { en: "Only changes magma temperature", es: "Solo cambia la temperatura del magma", de: "Ändert nur Magmatemperatur", nl: "Verandert alleen magma temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Pressure profoundly affects crystallization through multiple mechanisms: shifting mineral stability fields (pyroxene vs. amphibole), changing reaction curves and cotectic lines, controlling volatile solubility (higher pressure = more dissolved H2O, CO2), affecting melt structure and viscosity, and determining which minerals can crystallize at depth vs. shallow levels, ultimately controlling differentiation paths and erupted magma composition.",
          es: "La presión afecta profundamente la cristalización a través de múltiples mecanismos: desplazando campos de estabilidad mineral (piroxeno vs. anfíbol), cambiando curvas de reacción y líneas cotécticas, controlando solubilidad de volátiles (mayor presión = más H2O, CO2 disuelto), afectando estructura y viscosidad de fundido, y determinando qué minerales pueden cristalizar en profundidad vs. niveles someros, controlando finalmente caminos de diferenciación y composición de magma eruptado.",
          de: "Druck beeinflusst Kristallisation tiefgreifend durch mehrere Mechanismen: Verschiebung von Mineralstabilitätsfeldern (Pyroxen vs. Amphibol), Änderung von Reaktionskurven und kotektischen Linien, Kontrolle von Volatillöslichkeit (höherer Druck = mehr gelöstes H2O, CO2), Beeinflussung von Schmelzstruktur und Viskosität, und Bestimmung welche Minerale in der Tiefe vs. oberflächennah kristallisieren können, wodurch letztendlich Differenzierungspfade und eruptierte Magmazusammensetzung kontrolliert werden.",
          nl: "Druk beïnvloedt kristallisatie diepgaand door meerdere mechanismen: verschuiving van mineraal stabiliteitsgebieden (pyroxeen vs. amfibool), verandering van reactiecurves en cotectische lijnen, controle van vluchtige oplosbaarheid (hogere druk = meer opgelost H2O, CO2), beïnvloeding van smeltstructuur en viscositeit, en bepaling welke mineralen kunnen kristalliseren op diepte vs. ondiepe niveaus, uiteindelijk controlerend differentiatiepaden en geërupteerde magma samenstelling."
        }
      },
      {
        question: {
          en: "What is the significance of trace element partitioning in petrogenetic studies?",
          es: "¿Cuál es la importancia de la partición de elementos traza en estudios petrogenéticos?",
          de: "Was ist die Bedeutung der Spurenelementverteilung in petrogenetischen Studien?",
          nl: "Wat is de betekenis van spoorelement verdeling in petrogenetische studies?"
        },
        options: [
          { en: "Partition coefficients reveal crystallization history, source characteristics, and differentiation processes", es: "Los coeficientes de partición revelan historia de cristalización, características de fuente y procesos de diferenciación", de: "Verteilungskoeffizienten enthüllen Kristallisationsgeschichte, Quellcharakteristika und Differenzierungsprozesse", nl: "Verdelingscoëfficiënten onthullen kristallisatiegeschiedenis, bronkenmerken en differentiatie processen" },
          { en: "Only useful for determining rock age", es: "Solo útil para determinar edad de roca", de: "Nur nützlich zur Gesteinsalterbestimmung", nl: "Alleen nuttig voor het bepalen van gesteente leeftijd" },
          { en: "Has no petrogenetic significance", es: "No tiene significado petrogenético", de: "Hat keine petrogenetische Bedeutung", nl: "Heeft geen petrogenetische betekenis" },
          { en: "Only affects mineral color", es: "Solo afecta el color mineral", de: "Beeinflusst nur Mineralfarbe", nl: "Beïnvloedt alleen mineraalkleur" }
        ],
        correct: 0,
        explanation: {
          en: "Trace element partition coefficients (D values) are crucial petrogenetic tools that reveal: degree of partial melting through incompatible element ratios, fractional crystallization through compatible element depletion, source rock composition through element signatures, crustal contamination through specific trace element patterns, and magma chamber processes through temporal variations in erupted compositions.",
          es: "Los coeficientes de partición de elementos traza (valores D) son herramientas petrogenéticas cruciales que revelan: grado de fusión parcial a través de proporciones de elementos incompatibles, cristalización fraccionada a través de agotamiento de elementos compatibles, composición de roca fuente a través de firmas de elementos, contaminación cortical a través de patrones específicos de elementos traza, y procesos de cámara magmática a través de variaciones temporales en composiciones eruptadas.",
          de: "Spurenelementverteilungskoeffizienten (D-Werte) sind entscheidende petrogenetische Werkzeuge, die enthüllen: Grad der partiellen Schmelzung durch inkompatible Elementverhältnisse, fraktionierte Kristallisation durch kompatible Elementverarmung, Quellgesteinzusammensetzung durch Elementsignaturen, Krustenkontamination durch spezifische Spurenelementmuster, und Magmakammerprozesse durch zeitliche Variationen in eruptierten Zusammensetzungen.",
          nl: "Spoorelement verdelingscoëfficiënten (D waarden) zijn cruciale petrogenetische tools die onthullen: mate van partiële smelting door incompatibele element verhoudingen, fractionele kristallisatie door compatibele element uitputting, brongesteente samenstelling door element handtekeningen, korstale contaminatie door specifieke spoorelement patronen, en magmakamer processen door temporele variaties in geërupteerde samenstellingen."
        }
      },
      {
        question: {
          en: "How do melt inclusions provide insights into pre-eruptive magma conditions?",
          es: "¿Cómo proporcionan las inclusiones de fundido información sobre las condiciones pre-eruptivas del magma?",
          de: "Wie bieten Schmelzeinschlüsse Einblicke in prä-eruptive Magmabedingungen?",
          nl: "Hoe bieden smeltinsluitsels inzichten in pre-eruptieve magmacondities?"
        },
        options: [
          { en: "They preserve original volatile contents, temperatures, and compositional evolution before degassing", es: "Preservan contenidos volátiles originales, temperaturas y evolución composicional antes de desgasificación", de: "Sie bewahren ursprüngliche Volatilgehalte, Temperaturen und kompositionelle Evolution vor Entgasung", nl: "Ze bewaren oorspronkelijke vluchtige gehaltes, temperaturen en compositionele evolutie voor ontgassing" },
          { en: "Only provide information about surface processes", es: "Solo proporcionan información sobre procesos superficiales", de: "Bieten nur Informationen über Oberflächenprozesse", nl: "Bieden alleen informatie over oppervlakte processen" },
          { en: "Are not useful for petrological studies", es: "No son útiles para estudios petrológicos", de: "Sind nicht nützlich für petrologische Studien", nl: "Zijn niet nuttig voor petrologische studies" },
          { en: "Only show post-eruption changes", es: "Solo muestran cambios post-erupción", de: "Zeigen nur Post-Eruptionsänderungen", nl: "Tonen alleen post-eruptie veranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Melt inclusions are microscopic pockets of melt trapped within crystals during growth, preserving pre-eruptive conditions. They provide invaluable data on: original volatile concentrations (H2O, CO2, S) before degassing, magma temperatures and pressures during crystallization, trace element evolution and source signatures, and temporal changes in magma chamber conditions, offering a 'fossil record' of magmatic processes unavailable from degassed erupted products.",
          es: "Las inclusiones de fundido son bolsas microscópicas de fundido atrapadas dentro de cristales durante el crecimiento, preservando condiciones pre-eruptivas. Proporcionan datos invaluables sobre: concentraciones volátiles originales (H2O, CO2, S) antes de desgasificación, temperaturas y presiones de magma durante cristalización, evolución de elementos traza y firmas de fuente, y cambios temporales en condiciones de cámara magmática, ofreciendo un 'registro fósil' de procesos magmáticos no disponible de productos eruptados desgasificados.",
          de: "Schmelzeinschlüsse sind mikroskopische Schmelztaschen, die während des Kristallwachstums eingeschlossen werden und prä-eruptive Bedingungen bewahren. Sie liefern unschätzbare Daten über: ursprüngliche Volatilkonzentrationen (H2O, CO2, S) vor Entgasung, Magmatemperaturen und -drücke während Kristallisation, Spurenelementevolution und Quellsignaturen, und zeitliche Änderungen in Magmakammerbedingungen, wodurch ein 'Fossilnachweis' magmatischer Prozesse geboten wird, der aus entgasten eruptierten Produkten nicht verfügbar ist.",
          nl: "Smeltinsluitsels zijn microscopische smeltzakken die gevangen zitten in kristallen tijdens groei, en bewaren pre-eruptieve condities. Ze bieden onschatbare gegevens over: oorspronkelijke vluchtige concentraties (H2O, CO2, S) voor ontgassing, magma temperaturen en drukken tijdens kristallisatie, spoorelement evolutie en bron handtekeningen, en temporele veranderingen in magmakamer condities, biedend een 'fossiel record' van magmatische processen die niet beschikbaar is van ontgaste geërupteerde producten."
        }
      },
      {
        question: {
          en: "What controls the formation of zoned crystals in volcanic rocks?",
          es: "¿Qué controla la formación de cristales zonados en rocas volcánicas?",
          de: "Was kontrolliert die Bildung zonierter Kristalle in vulkanischen Gesteinen?",
          nl: "Wat controleert de vorming van gezoneerde kristallen in vulkanische gesteenten?"
        },
        options: [
          { en: "Changing intensive parameters (T, P, fO2) and melt composition during crystal growth", es: "Cambio de parámetros intensivos (T, P, fO2) y composición de fundido durante crecimiento cristalino", de: "Änderung intensiver Parameter (T, P, fO2) und Schmelzzusammensetzung während Kristallwachstum", nl: "Veranderende intensieve parameters (T, P, fO2) en smelt samenstelling tijdens kristalgroei" },
          { en: "Only crystal size", es: "Solo el tamaño del cristal", de: "Nur Kristallgröße", nl: "Alleen kristalgrootte" },
          { en: "Atmospheric pressure variations", es: "Variaciones de presión atmosférica", de: "Atmosphärendruckvariationen", nl: "Atmosferische drukvariaties" },
          { en: "Time of day during crystallization", es: "Hora del día durante cristalización", de: "Tageszeit während Kristallisation", nl: "Tijdstip van de dag tijdens kristallisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Crystal zoning records changes in intensive parameters (temperature, pressure, oxygen fugacity) and melt composition during growth. Normal zoning reflects cooling/fractional crystallization, reverse zoning indicates heating/magma mixing, oscillatory zoning suggests cyclical changes in conditions, and complex zoning patterns reveal multiple magmatic events, resorption episodes, and changing crystallization environments within evolving magma systems.",
          es: "La zonación cristalina registra cambios en parámetros intensivos (temperatura, presión, fugacidad de oxígeno) y composición de fundido durante el crecimiento. Zonación normal refleja enfriamiento/cristalización fraccionada, zonación inversa indica calentamiento/mezcla de magma, zonación oscilatoria sugiere cambios cíclicos en condiciones, y patrones de zonación complejos revelan múltiples eventos magmáticos, episodios de reabsorción y ambientes de cristalización cambiantes dentro de sistemas de magma en evolución.",
          de: "Kristallzonierung zeichnet Änderungen in intensiven Parametern (Temperatur, Druck, Sauerstofffugazität) und Schmelzzusammensetzung während des Wachstums auf. Normale Zonierung reflektiert Abkühlung/fraktionierte Kristallisation, umgekehrte Zonierung zeigt Erwärmung/Magmamischung an, oszillatorische Zonierung deutet auf zyklische Bedingungsänderungen hin, und komplexe Zonierungsmuster enthüllen mehrere magmatische Ereignisse, Resorptionsepisoden und sich ändernde Kristallisationsumgebungen in sich entwickelnden Magmasystemen.",
          nl: "Kristalzonering registreert veranderingen in intensieve parameters (temperatuur, druk, zuurstofffugaciteit) en smelt samenstelling tijdens groei. Normale zonering reflecteert afkoeling/fractionele kristallisatie, omgekeerde zonering geeft opwarming/magma menging aan, oscillerende zonering suggereert cyclische veranderingen in condities, en complexe zoneringspatronen onthullen meerdere magmatische gebeurtenissen, resorptie episodes en veranderende kristallisatie omgevingen binnen evoluerende magma systemen."
        }
      },
      {
        question: {
          en: "How does magma mixing affect volcanic eruption dynamics and hazards?",
          es: "¿Cómo afecta la mezcla de magma a la dinámica de erupciones volcánicas y peligros?",
          de: "Wie beeinflusst Magmamischung vulkanische Eruptionsdynamik und Gefahren?",
          nl: "Hoe beïnvloedt magma menging vulkanische eruptie dynamiek en gevaren?"
        },
        options: [
          { en: "It can trigger eruptions, change eruption style, and modify volatile behavior through heating and mingling", es: "Puede activar erupciones, cambiar estilo de erupción y modificar comportamiento de volátiles a través de calentamiento y mezcla", de: "Sie kann Eruptionen auslösen, Eruptionsstil ändern und Volatilverhalten durch Erwärmung und Vermischung modifizieren", nl: "Het kan erupties activeren, eruptiestijl veranderen en vluchtige gedrag wijzigen door verwarming en vermenging" },
          { en: "Has no effect on eruption behavior", es: "No tiene efecto en el comportamiento de erupción", de: "Hat keinen Effekt auf Eruptionsverhalten", nl: "Heeft geen effect op eruptiegedrag" },
          { en: "Only changes lava color", es: "Solo cambia el color de la lava", de: "Ändert nur Lavafarbe", nl: "Verandert alleen lavakleur" },
          { en: "Prevents all explosive activity", es: "Previene toda actividad explosiva", de: "Verhindert alle explosive Aktivität", nl: "Voorkomt alle explosieve activiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Magma mixing is a critical eruption triggering mechanism that affects dynamics through: thermal effects (heating of cooler, more viscous magma), volatile transfer and exsolution, viscosity changes affecting flow behavior, chemical disequilibrium driving crystallization or dissolution, and pressure perturbations. This can escalate eruption intensity, change from effusive to explosive behavior, and create complex eruption sequences with varying hazard implications.",
          es: "La mezcla de magma es un mecanismo crítico de activación de erupciones que afecta la dinámica a través de: efectos térmicos (calentamiento de magma más frío y viscoso), transferencia y exsolución de volátiles, cambios de viscosidad que afectan comportamiento de flujo, desequilibrio químico que impulsa cristalización o disolución, y perturbaciones de presión. Esto puede escalar intensidad de erupción, cambiar de comportamiento efusivo a explosivo, y crear secuencias de erupción complejas con implicaciones de peligro variables.",
          de: "Magmamischung ist ein kritischer Eruptionsauslösemechanismus, der Dynamik beeinflusst durch: thermische Effekte (Erwärmung kühlerer, viskoserer Magma), Volatiltransfer und -entlösung, Viskositätsänderungen die Fließverhalten beeinflussen, chemisches Ungleichgewicht das Kristallisation oder Auflösung antreibt, und Druckstörungen. Dies kann Eruptionsintensität eskalieren, von effusivem zu explosivem Verhalten wechseln, und komplexe Eruptionssequenzen mit variierenden Gefahrenimplikationen schaffen.",
          nl: "Magma menging is een kritiek eruptie-activerings mechanisme dat dynamiek beïnvloedt door: thermische effecten (verwarming van koeler, meer viskeus magma), vluchtige overdracht en uitscheiding, viscositeit veranderingen die stromingsgedrag beïnvloeden, chemische onevenwichtigheid die kristallisatie of oplossing aandrijft, en drukverstoring. Dit kan eruptie-intensiteit escaleren, veranderen van effusief naar explosief gedrag, en complexe eruptiesequenties creëren met variërende gevaar implicaties."
        }
      },
      {
        question: {
          en: "What is the role of crystal-liquid separation in magmatic differentiation?",
          es: "¿Cuál es el papel de la separación cristal-líquido en la diferenciación magmática?",
          de: "Was ist die Rolle der Kristall-Flüssigkeitstrennung in magmatischer Differenzierung?",
          nl: "Wat is de rol van kristal-vloeistof scheiding in magmatische differentiatie?"
        },
        options: [
          { en: "It drives compositional evolution through gravitational settling, filter pressing, and convective processes", es: "Impulsa evolución composicional a través de asentamiento gravitacional, prensado de filtro y procesos convectivos", de: "Sie treibt kompositionelle Evolution durch Gravitationssetzung, Filterpressung und konvektive Prozesse voran", nl: "Het drijft compositionele evolutie aan door gravitationele bezinking, filterpers en convectieve processen" },
          { en: "Has no effect on magma composition", es: "No tiene efecto en la composición del magma", de: "Hat keinen Effekt auf Magmazusammensetzung", nl: "Heeft geen effect op magmasamenstelling" },
          { en: "Only affects eruption temperature", es: "Solo afecta la temperatura de erupción", de: "Beeinflusst nur Eruptionstemperatur", nl: "Beïnvloedt alleen eruptietemperatuur" },
          { en: "Prevents magma evolution", es: "Previene evolución de magma", de: "Verhindert Magmaevolution", nl: "Voorkomt magma evolutie" }
        ],
        correct: 0,
        explanation: {
          en: "Crystal-liquid separation is fundamental to magmatic differentiation, operating through: gravitational settling of dense crystals forming cumulate layers, filter pressing where residual melt is squeezed from crystal mushes, convective removal of evolved melts, and dynamic crystallization where flowing magma separates crystals. These processes create compositional gradients, produce evolved melts, and generate layered intrusions and diverse volcanic products.",
          es: "La separación cristal-líquido es fundamental para la diferenciación magmática, operando a través de: asentamiento gravitacional de cristales densos formando capas cumuladas, prensado de filtro donde fundido residual es exprimido de papillas cristalinas, remoción convectiva de fundidos evolucionados, y cristalización dinámica donde magma fluyente separa cristales. Estos procesos crean gradientes composicionales, producen fundidos evolucionados, y generan intrusiones estratificadas y productos volcánicos diversos.",
          de: "Kristall-Flüssigkeitstrennung ist fundamental für magmatische Differenzierung und operiert durch: Gravitationssetzung dichter Kristalle die Kumulatschichten bilden, Filterpressung wo Restschmelze aus Kristallbreien gepresst wird, konvektive Entfernung evolvierter Schmelzen, und dynamische Kristallisation wo fließende Magma Kristalle trennt. Diese Prozesse schaffen kompositionelle Gradienten, produzieren evolvierte Schmelzen, und generieren geschichtete Intrusionen und diverse vulkanische Produkte.",
          nl: "Kristal-vloeistof scheiding is fundamenteel voor magmatische differentiatie, werkend door: gravitationele bezinking van dichte kristallen die cumulaat lagen vormen, filter persen waar restsmelt uit kristalpap wordt geperst, convectieve verwijdering van geëvolueerde smelten, en dynamische kristallisatie waar stromend magma kristallen scheidt. Deze processen creëren compositionele gradiënten, produceren geëvolueerde smelten, en genereren gelaagde intrusies en diverse vulkanische producten."
        }
      },
      {
        question: {
          en: "How do volatile elements (C, S, Cl, F) behave differently during magmatic processes?",
          es: "¿Cómo se comportan de manera diferente los elementos volátiles (C, S, Cl, F) durante los procesos magmáticos?",
          de: "Wie verhalten sich volatile Elemente (C, S, Cl, F) unterschiedlich während magmatischer Prozesse?",
          nl: "Hoe gedragen vluchtige elementen (C, S, Cl, F) zich verschillend tijdens magmatische processen?"
        },
        options: [
          { en: "Each has unique solubility limits, speciation behavior, and partitioning between phases", es: "Cada uno tiene límites únicos de solubilidad, comportamiento de especiación y partición entre fases", de: "Jedes hat einzigartige Löslichkeitsgrenzen, Speziationsverhalten und Verteilung zwischen Phasen", nl: "Elk heeft unieke oplosbaarheidslimieten, speciatiegedrag en verdeling tussen fasen" },
          { en: "All volatiles behave identically", es: "Todos los volátiles se comportan idénticamente", de: "Alle Volatile verhalten sich identisch", nl: "Alle vluchtige stoffen gedragen zich identiek" },
          { en: "Only temperature affects their behavior", es: "Solo la temperatura afecta su comportamiento", de: "Nur Temperatur beeinflusst ihr Verhalten", nl: "Alleen temperatuur beïnvloedt hun gedrag" },
          { en: "They have no effect on magmatic processes", es: "No tienen efecto en procesos magmáticos", de: "Sie haben keinen Effekt auf magmatische Prozesse", nl: "Ze hebben geen effect op magmatische processen" }
        ],
        correct: 0,
        explanation: {
          en: "Volatile elements exhibit distinct behaviors: Carbon forms CO2 and CO3²⁻ species with low silicate melt solubility, sulfur exists as SO2, H2S, and sulfate/sulfide depending on fO2, chlorine forms HCl and metal-chloride complexes with high solubility in hydrous melts, and fluorine bonds strongly with silicates having intermediate solubility. These differences control degassing sequences, mineral crystallization, and ore formation processes.",
          es: "Los elementos volátiles exhiben comportamientos distintos: Carbono forma especies CO2 y CO3²⁻ con baja solubilidad en fundidos silicatados, azufre existe como SO2, H2S, y sulfato/sulfuro dependiendo de fO2, cloro forma HCl y complejos metal-cloruro con alta solubilidad en fundidos hidratados, y flúor se une fuertemente con silicatos teniendo solubilidad intermedia. Estas diferencias controlan secuencias de desgasificación, cristalización mineral y procesos de formación de menas.",
          de: "Volatile Elemente zeigen unterschiedliche Verhaltensweisen: Kohlenstoff bildet CO2- und CO3²⁻-Spezies mit niedriger Silikatschmelzlöslichkeit, Schwefel existiert als SO2, H2S und Sulfat/Sulfid abhängig von fO2, Chlor bildet HCl und Metall-Chlorid-Komplexe mit hoher Löslichkeit in wasserhaltigen Schmelzen, und Fluor bindet stark an Silikate mit mittlerer Löslichkeit. Diese Unterschiede kontrollieren Entgasungssequenzen, Mineralkristallisation und Erzbildungsprozesse.",
          nl: "Vluchtige elementen vertonen verschillende gedragingen: Koolstof vormt CO2 en CO3²⁻ soorten met lage silicaat smelt oplosbaarheid, zwavel bestaat als SO2, H2S, en sulfaat/sulfide afhankelijk van fO2, chloor vormt HCl en metaal-chloride complexen met hoge oplosbaarheid in waterhoudende smelten, en fluor bindt sterk met silicaten met intermediaire oplosbaarheid. Deze verschillen controleren ontgassingssequenties, mineraal kristallisatie en erts vormingsprocessen."
        }
      },
      {
        question: {
          en: "What controls the development of layered igneous intrusions?",
          es: "¿Qué controla el desarrollo de intrusiones ígneas estratificadas?",
          de: "Was kontrolliert die Entwicklung geschichteter magmatischer Intrusionen?",
          nl: "Wat controleert de ontwikkeling van gelaagde magmatische intrusies?"
        },
        options: [
          { en: "Fractional crystallization, gravitational settling, magma replenishment, and convective processes", es: "Cristalización fraccionada, asentamiento gravitacional, reabastecimiento de magma y procesos convectivos", de: "Fraktionierte Kristallisation, Gravitationssetzung, Magmanachschub und konvektive Prozesse", nl: "Fractionele kristallisatie, gravitationele bezinking, magma aanvulling en convectieve processen" },
          { en: "Only tectonic forces", es: "Solo fuerzas tectónicas", de: "Nur tektonische Kräfte", nl: "Alleen tektonische krachten" },
          { en: "Surface erosion processes", es: "Procesos de erosión superficial", de: "Oberflächenerosionsprozesse", nl: "Oppervlakte erosieprocessen" },
          { en: "Atmospheric pressure changes", es: "Cambios de presión atmosférica", de: "Atmosphärendruckänderungen", nl: "Atmosferische drukveranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Layered intrusions form through complex interplay of: fractional crystallization creating compositionally distinct layers, gravitational settling of dense crystals forming cumulate horizons, periodic magma replenishment introducing new compositions, convective overturn redistributing crystals and melts, compaction and filter pressing concentrating residual liquids, and in-situ crystallization at chamber margins, creating characteristic rhythmic layering and mineral zones.",
          es: "Las intrusiones estratificadas se forman a través de interacciones complejas de: cristalización fraccionada creando capas composicionalmente distintas, asentamiento gravitacional de cristales densos formando horizontes cumulados, reabastecimiento periódico de magma introduciendo nuevas composiciones, volcamiento convectivo redistribuyendo cristales y fundidos, compactación y prensado de filtro concentrando líquidos residuales, y cristalización in-situ en márgenes de cámara, creando estratificación rítmica característica y zonas minerales.",
          de: "Geschichtete Intrusionen entstehen durch komplexes Zusammenspiel von: fraktionierter Kristallisation die kompositionell unterschiedliche Schichten schafft, Gravitationssetzung dichter Kristalle die Kumulathorizonte bildet, periodischem Magmanachschub der neue Zusammensetzungen einführt, konvektivem Umwälzen das Kristalle und Schmelzen umverteilt, Kompaktion und Filterpressung die Restflüssigkeiten konzentriert, und In-situ-Kristallisation an Kammerrändern, wodurch charakteristische rhythmische Schichtung und Mineralzonen entstehen.",
          nl: "Gelaagde intrusies vormen door complexe wisselwerking van: fractionele kristallisatie die compositioneel verschillende lagen creëert, gravitationele bezinking van dichte kristallen die cumulaat horizonten vormt, periodieke magma aanvulling die nieuwe samenstellingen introduceert, convectieve omwenteling die kristallen en smelten herverdeelt, compactie en filter persen die resterende vloeistoffen concentreert, en in-situ kristallisatie aan kamer randen, creërend karakteristieke ritmische gelaagdheid en mineraal zones."
        }
      },
      {
        question: {
          en: "How does crustal anatexis contribute to volcanic petrogenesis?",
          es: "¿Cómo contribuye la anatexis cortical a la petrogénesis volcánica?",
          de: "Wie trägt krustale Anatexis zur vulkanischen Petrogenese bei?",
          nl: "Hoe draagt kortale anatexis bij aan vulkanische petrogenese?"
        },
        options: [
          { en: "Melting of crustal rocks produces evolved, volatile-rich magmas with distinct geochemical signatures", es: "La fusión de rocas corticales produce magmas evolucionados ricos en volátiles con firmas geoquímicas distintivas", de: "Schmelzung von Krustengesteinen produziert evolvierte, volatilreiche Magmen mit unterschiedlichen geochemischen Signaturen", nl: "Smelting van korstgesteenten produceert geëvolueerde, vluchtige-rijke magma's met verschillende geochemische handtekeningen" },
          { en: "Only produces basaltic magmas", es: "Solo produce magmas basálticos", de: "Produziert nur basaltische Magmen", nl: "Produceert alleen basaltische magma's" },
          { en: "Has no role in volcanism", es: "No tiene papel en vulcanismo", de: "Hat keine Rolle im Vulkanismus", nl: "Heeft geen rol in vulkanisme" },
          { en: "Only affects magma temperature", es: "Solo afecta la temperatura del magma", de: "Beeinflusst nur Magmatemperatur", nl: "Beïnvloedt alleen magmatemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Crustal anatexis (partial melting of crustal rocks) produces highly evolved, silicic magmas enriched in incompatible elements and volatiles. These melts show distinctive signatures: high K2O/Na2O ratios, elevated Rb, Th, U contents, negative Eu anomalies from feldspar retention, and enriched isotopic compositions. Anatectic magmas contribute significantly to explosive volcanism, producing evolved compositions that would be difficult to generate through fractional crystallization alone.",
          es: "La anatexis cortical (fusión parcial de rocas corticales) produce magmas silícicos altamente evolucionados enriquecidos en elementos incompatibles y volátiles. Estos fundidos muestran firmas distintivas: altas proporciones K2O/Na2O, contenidos elevados de Rb, Th, U, anomalías negativas de Eu por retención de feldespato, y composiciones isotópicas enriquecidas. Los magmas anatécticos contribuyen significativamente al vulcanismo explosivo, produciendo composiciones evolucionadas que serían difíciles de generar solo a través de cristalización fraccionada.",
          de: "Krustale Anatexis (partielle Schmelzung von Krustengesteinen) produziert hochevolvierte, silicische Magmen angereichert in inkompatiblen Elementen und Volatilen. Diese Schmelzen zeigen unterschiedliche Signaturen: hohe K2O/Na2O-Verhältnisse, erhöhte Rb-, Th-, U-Gehalte, negative Eu-Anomalien durch Feldspatretention und angereicherte isotopische Zusammensetzungen. Anatektische Magmen tragen signifikant zu explosivem Vulkanismus bei und produzieren evolvierte Zusammensetzungen, die durch fraktionierte Kristallisation allein schwer zu generieren wären.",
          nl: "Kortale anatexis (gedeeltelijke smelting van korstgesteenten) produceert hooggeëvolueerde, silicische magma's verrijkt in incompatibele elementen en vluchtige stoffen. Deze smelten tonen onderscheidende handtekeningen: hoge K2O/Na2O verhoudingen, verhoogde Rb, Th, U gehaltes, negatieve Eu anomalieën door veldspaat retentie, en verrijkte isotopische samenstellingen. Anatectische magma's dragen significant bij aan explosief vulkanisme, producerend geëvolueerde samenstellingen die moeilijk zouden zijn te genereren door fractionele kristallisatie alleen."
        }
      },
      {
        question: {
          en: "What is the significance of mineral reaction rims in volcanic rocks?",
          es: "¿Cuál es la importancia de los bordes de reacción mineral en rocas volcánicas?",
          de: "Was ist die Bedeutung von Mineralreaktionsrändern in vulkanischen Gesteinen?",
          nl: "Wat is de betekenis van mineraal reactieranden in vulkanische gesteenten?"
        },
        options: [
          { en: "They record disequilibrium conditions, magma mixing events, and changing P-T-X conditions", es: "Registran condiciones de desequilibrio, eventos de mezcla de magma y condiciones P-T-X cambiantes", de: "Sie zeichnen Ungleichgewichtsbedingungen, Magmamischungsereignisse und sich ändernde P-T-X-Bedingungen auf", nl: "Ze registreren onevenwichtigheidsomstandigheden, magma mengingsgebeurtenissen en veranderende P-T-X omstandigheden" },
          { en: "Are just weathering products", es: "Son solo productos de meteorización", de: "Sind nur Verwitterungsprodukte", nl: "Zijn alleen verwering producten" },
          { en: "Have no petrological significance", es: "No tienen significado petrológico", de: "Haben keine petrologische Bedeutung", nl: "Hebben geen petrologische betekenis" },
          { en: "Only form during surface alteration", es: "Solo se forman durante alteración superficial", de: "Bilden sich nur während Oberflächenalteration", nl: "Vormen alleen tijdens oppervlakte alteratie" }
        ],
        correct: 0,
        explanation: {
          en: "Mineral reaction rims form when crystals are out of equilibrium with their host melt due to changing conditions. They indicate: rapid pressure-temperature changes during magma ascent, magma mixing bringing together different compositions, volatile loss affecting mineral stability, and disequilibrium crystallization. These features provide crucial evidence for pre-eruptive processes, magma chamber dynamics, and the timing of volcanic events.",
          es: "Los bordes de reacción mineral se forman cuando los cristales están fuera de equilibrio con su fundido huésped debido a condiciones cambiantes. Indican: cambios rápidos de presión-temperatura durante ascenso de magma, mezcla de magma uniendo diferentes composiciones, pérdida de volátiles afectando estabilidad mineral, y cristalización de desequilibrio. Estas características proporcionan evidencia crucial para procesos pre-eruptivos, dinámica de cámara magmática, y momento de eventos volcánicos.",
          de: "Mineralreaktionsränder bilden sich, wenn Kristalle nicht im Gleichgewicht mit ihrer Wirtschmelze aufgrund sich ändernder Bedingungen stehen. Sie zeigen an: schnelle Druck-Temperatur-Änderungen während Magmaaufstieg, Magmamischung die verschiedene Zusammensetzungen zusammenbringt, Volatilverlust der Mineralstabilität beeinflusst, und Ungleichgewichtskristallisation. Diese Merkmale liefern entscheidende Evidenz für prä-eruptive Prozesse, Magmakammerdynamik und Zeitpunkt vulkanischer Ereignisse.",
          nl: "Mineraal reactieranden vormen wanneer kristallen uit evenwicht zijn met hun gastheer smelt door veranderende omstandigheden. Ze geven aan: snelle druk-temperatuur veranderingen tijdens magma opstijging, magma menging die verschillende samenstellingen samenbrengt, vluchtige verlies dat mineraal stabiliteit beïnvloedt, en onevenwichtigheids kristallisatie. Deze kenmerken bieden cruciale bewijs voor pre-eruptieve processen, magmakamer dynamiek, en timing van vulkanische gebeurtenissen."
        }
      },
      {
        question: {
          en: "How do experimental petrology studies contribute to understanding natural volcanic processes?",
          es: "¿Cómo contribuyen los estudios de petrología experimental a entender los procesos volcánicos naturales?",
          de: "Wie tragen experimentelle Petrologiestudien zum Verständnis natürlicher vulkanischer Prozesse bei?",
          nl: "Hoe dragen experimentele petrologie studies bij aan het begrijpen van natuurlijke vulkanische processen?"
        },
        options: [
          { en: "They calibrate phase relations, determine intensive parameters, and test petrogenetic models", es: "Calibran relaciones de fase, determinan parámetros intensivos y prueban modelos petrogenéticos", de: "Sie kalibrieren Phasenbeziehungen, bestimmen intensive Parameter und testen petrogenetische Modelle", nl: "Ze kalibreren fase relaties, bepalen intensieve parameters en testen petrogenetische modellen" },
          { en: "Are not applicable to natural systems", es: "No son aplicables a sistemas naturales", de: "Sind nicht anwendbar auf natürliche Systeme", nl: "Zijn niet toepasbaar op natuurlijke systemen" },
          { en: "Only measure mineral hardness", es: "Solo miden dureza mineral", de: "Messen nur Mineralhärte", nl: "Meten alleen mineraal hardheid" },
          { en: "Have no relevance to volcanism", es: "No tienen relevancia para vulcanismo", de: "Haben keine Relevanz für Vulkanismus", nl: "Hebben geen relevantie voor vulkanisme" }
        ],
        correct: 0,
        explanation: {
          en: "Experimental petrology provides fundamental constraints on natural volcanic processes by: determining phase equilibria and stability fields under controlled P-T-X conditions, calibrating mineral-melt partition coefficients for trace element modeling, measuring crystallization kinetics and nucleation rates, testing volatile solubility and degassing behavior, and validating thermodynamic models used for interpreting natural magmatic systems and predicting eruption behavior.",
          es: "La petrología experimental proporciona restricciones fundamentales sobre procesos volcánicos naturales: determinando equilibrios de fase y campos de estabilidad bajo condiciones P-T-X controladas, calibrando coeficientes de partición mineral-fundido para modelado de elementos traza, midiendo cinética de cristalización y tasas de nucleación, probando solubilidad de volátiles y comportamiento de desgasificación, y validando modelos termodinámicos usados para interpretar sistemas magmáticos naturales y predecir comportamiento de erupción.",
          de: "Experimentelle Petrologie liefert fundamentale Beschränkungen für natürliche vulkanische Prozesse durch: Bestimmung von Phasengleichgewichten und Stabilitätsfeldern unter kontrollierten P-T-X-Bedingungen, Kalibrierung von Mineral-Schmelz-Verteilungskoeffizienten für Spurenelementmodellierung, Messung von Kristallisationskinetik und Nukleationsraten, Test von Volatillöslichkeit und Entgasungsverhalten, und Validierung thermodynamischer Modelle zur Interpretation natürlicher magmatischer Systeme und Vorhersage von Eruptionsverhalten.",
          nl: "Experimentele petrologie biedt fundamentele beperkingen op natuurlijke vulkanische processen door: bepaling van fase evenwichten en stabiliteitsgebieden onder gecontroleerde P-T-X omstandigheden, kalibratie van mineraal-smelt verdelingscoëfficiënten voor spoorelement modellering, meting van kristallisatiekinetiek en nucleatiesnelheden, test van vluchtige oplosbaarheid en ontgassingsgedrag, en validatie van thermodynamische modellen gebruikt voor interpretatie van natuurlijke magmatische systemen en voorspelling van eruptiegedrag."
        }
      },
      {
        question: {
          en: "What controls the rheological evolution of magma during ascent and eruption?",
          es: "¿Qué controla la evolución reológica del magma durante ascenso y erupción?",
          de: "Was kontrolliert die rheologische Evolution von Magma während Aufstieg und Eruption?",
          nl: "Wat controleert de rheologische evolutie van magma tijdens opstijging en eruptie?"
        },
        options: [
          { en: "Temperature, crystal content, bubble content, and volatile exsolution during decompression", es: "Temperatura, contenido de cristal, contenido de burbujas y exsolución de volátiles durante descompresión", de: "Temperatur, Kristallgehalt, Blasengehalt und Volatilentlösung während Dekompression", nl: "Temperatuur, kristalgehalte, belgehalte en vluchtige uitscheiding tijdens decompressie" },
          { en: "Only magma age", es: "Solo la edad del magma", de: "Nur Magmaalter", nl: "Alleen magma leeftijd" },
          { en: "Surface wind conditions", es: "Condiciones de viento superficial", de: "Oberflächenwindbedingungen", nl: "Oppervlakte windomstandigheden" },
          { en: "Lunar gravitational effects", es: "Efectos gravitacionales lunares", de: "Lunare Gravitationseffekte", nl: "Maangravitatie effecten" }
        ],
        correct: 0,
        explanation: {
          en: "Magma rheology evolves dramatically during ascent through interconnected processes: cooling increases viscosity, degassing creates bubbles that initially decrease then increase viscosity depending on gas volume fraction, crystallization adds solid particles that increase viscosity non-linearly, and decompression-driven volatile exsolution can cause orders-of-magnitude viscosity changes, ultimately controlling whether magma flows effusively or fragments explosively.",
          es: "La reología del magma evoluciona dramáticamente durante el ascenso a través de procesos interconectados: enfriamiento aumenta viscosidad, desgasificación crea burbujas que inicialmente disminuyen luego aumentan viscosidad dependiendo de fracción de volumen de gas, cristalización agrega partículas sólidas que aumentan viscosidad no-linealmente, y exsolución de volátiles impulsada por descompresión puede causar cambios de viscosidad de órdenes de magnitud, controlando finalmente si magma fluye efusivamente o se fragmenta explosivamente.",
          de: "Magmarheologie entwickelt sich dramatisch während des Aufstiegs durch miteinander verbundene Prozesse: Abkühlung erhöht Viskosität, Entgasung schafft Blasen die anfangs Viskosität verringern dann erhöhen abhängig vom Gasvolumenanteil, Kristallisation fügt feste Partikel hinzu die Viskosität nicht-linear erhöhen, und dekompressions-getriebene Volatilentlösung kann Viskositätsänderungen um Größenordnungen verursachen, wodurch letztendlich kontrolliert wird ob Magma effusiv fließt oder explosiv fragmentiert.",
          nl: "Magma rheologie evolueert dramatisch tijdens opstijging door onderling verbonden processen: afkoeling verhoogt viscositeit, ontgassing creëert bellen die aanvankelijk viscositeit verminderen dan verhogen afhankelijk van gas volume fractie, kristallisatie voegt vaste deeltjes toe die viscositeit niet-lineair verhogen, en decompressie-gedreven vluchtige uitscheiding kan viscositeit veranderingen van orden van grootte veroorzaken, uiteindelijk controlerend of magma effusief stroomt of explosief fragmenteert."
        }
      },
      {
        question: {
          en: "How do isotopic systematics help understand magma source regions and processes?",
          es: "¿Cómo ayuda la sistemática isotópica a entender las regiones fuente de magma y procesos?",
          de: "Wie hilft Isotopensystematik beim Verständnis von Magmaquellregionen und -prozessen?",
          nl: "Hoe helpt isotopische systematiek bij het begrijpen van magma bronregio's en processen?"
        },
        options: [
          { en: "Isotope ratios fingerprint source composition, age, and differentiation processes while being largely immune to secondary alteration", es: "Las proporciones isotópicas identifican composición de fuente, edad y procesos de diferenciación siendo ampliamente inmunes a alteración secundaria", de: "Isotopenverhältnisse fingerprinting Quellzusammensetzung, Alter und Differenzierungsprozesse während sie weitgehend immun gegen sekundäre Alteration sind", nl: "Isotoop verhoudingen identificeren bron samenstelling, leeftijd en differentiatie processen terwijl ze grotendeels immuun zijn voor secundaire alteratie" },
          { en: "Isotopes only indicate eruption date", es: "Los isótopos solo indican fecha de erupción", de: "Isotope zeigen nur Eruptionsdatum an", nl: "Isotopen geven alleen eruptiedatum aan" },
          { en: "Have no relationship to magmatic processes", es: "No tienen relación con procesos magmáticos", de: "Haben keine Beziehung zu magmatischen Prozessen", nl: "Hebben geen relatie tot magmatische processen" },
          { en: "Only useful for dating volcanic events", es: "Solo útiles para datar eventos volcánicos", de: "Nur nützlich zur Datierung vulkanischer Ereignisse", nl: "Alleen nuttig voor het dateren van vulkanische gebeurtenissen" }
        ],
        correct: 0,
        explanation: {
          en: "Isotopic systematics (Sr, Nd, Pb, He, Os isotopes) are powerful tools that reveal: mantle source heterogeneity and composition, crustal contamination processes through distinct crustal vs. mantle signatures, age of source materials and differentiation events, extent of fractional crystallization and AFC processes, and volatile source characteristics. Unlike major elements, isotope ratios are largely unaffected by weathering and low-temperature alteration, preserving primary magmatic signatures.",
          es: "La sistemática isotópica (isótopos Sr, Nd, Pb, He, Os) son herramientas poderosas que revelan: heterogeneidad y composición de fuente mantélica, procesos de contaminación cortical a través de firmas distintivas corticales vs. mantélicas, edad de materiales fuente y eventos de diferenciación, extensión de cristalización fraccionada y procesos AFC, y características de fuente de volátiles. A diferencia de elementos mayores, las proporciones isotópicas son ampliamente no afectadas por meteorización y alteración de baja temperatura, preservando firmas magmáticas primarias.",
          de: "Isotopensystematik (Sr-, Nd-, Pb-, He-, Os-Isotope) sind mächtige Werkzeuge, die enthüllen: Mantequellenheterogenität und -zusammensetzung, Krustenkontaminationsprozesse durch unterscheidende Krusten- vs. Mantelsignaturen, Alter von Quellmaterialien und Differenzierungsereignissen, Ausmaß fraktionierter Kristallisation und AFC-Prozesse, und Volatilquellcharakteristika. Im Gegensatz zu Hauptelementen sind Isotopenverhältnisse weitgehend unberührt von Verwitterung und Niedrigtemperaturalteration und bewahren primäre magmatische Signaturen.",
          nl: "Isotopische systematiek (Sr, Nd, Pb, He, Os isotopen) zijn krachtige gereedschappen die onthullen: mantel bron heterogeniteit en samenstelling, kortale contaminatie processen door onderscheidende kortale vs. mantel handtekeningen, leeftijd van bron materialen en differentiatie gebeurtenissen, mate van fractionele kristallisatie en AFC processen, en vluchtige bron karakteristieken. In tegenstelling tot hoofdelementen zijn isotoop verhoudingen grotendeels onaangetast door verwering en lage temperatuur alteratie, bewarend primaire magmatische handtekeningen."
        }
      },
      {
        question: {
          en: "What role do volatiles play in explosive volcanic fragmentation processes?",
          es: "¿Qué papel juegan los volátiles en los procesos de fragmentación volcánica explosiva?",
          de: "Welche Rolle spielen Volatile in explosiven vulkanischen Fragmentierungsprozessen?",
          nl: "Welke rol spelen vluchtige stoffen in explosieve vulkanische fragmentatie processen?"
        },
        options: [
          { en: "Rapid volatile exsolution and expansion during decompression drives bubble growth and magma fragmentation", es: "Exsolución rápida de volátiles y expansión durante descompresión impulsa crecimiento de burbujas y fragmentación de magma", de: "Schnelle Volatilentlösung und -expansion während Dekompression treibt Blasenwachstum und Magmafragmentierung voran", nl: "Snelle vluchtige uitscheiding en expansie tijdens decompressie drijft belgroei en magma fragmentatie aan" },
          { en: "Volatiles prevent all explosive activity", es: "Los volátiles previenen toda actividad explosiva", de: "Volatile verhindern alle explosive Aktivität", nl: "Vluchtige stoffen voorkomen alle explosieve activiteit" },
          { en: "Only provide color to volcanic plumes", es: "Solo proporcionan color a plumas volcánicas", de: "Liefern nur Farbe für vulkanische Wolken", nl: "Bieden alleen kleur aan vulkanische pluimen" },
          { en: "Have no role in fragmentation", es: "No tienen papel en fragmentación", de: "Haben keine Rolle bei Fragmentierung", nl: "Hebben geen rol in fragmentatie" }
        ],
        correct: 0,
        explanation: {
          en: "Volatiles are the primary driver of explosive fragmentation through: rapid exsolution during magma decompression creating gas bubbles, bubble expansion and coalescence increasing gas volume fraction, viscous-brittle transition when gas fraction exceeds ~70-80%, acceleration-driven stretching and rupture of melt films between bubbles, and continuing expansion of gas during eruption maintaining fragmentation and driving pyroclastic flow formation.",
          es: "Los volátiles son el impulsor principal de fragmentación explosiva a través de: exsolución rápida durante descompresión de magma creando burbujas de gas, expansión y coalescencia de burbujas aumentando fracción de volumen de gas, transición viscosa-frágil cuando fracción de gas excede ~70-80%, estiramiento impulsado por aceleración y ruptura de películas de fundido entre burbujas, y expansión continua de gas durante erupción manteniendo fragmentación e impulsando formación de flujo piroclástico.",
          de: "Volatile sind der primäre Antrieb explosiver Fragmentierung durch: schnelle Entlösung während Magmadekompression die Gasblasen schafft, Blasenexpansion und -koaleszenz die Gasvolumenanteil erhöht, viskos-spröde Übergang wenn Gasanteil ~70-80% überschreitet, beschleunigungsgetriebene Dehnung und Ruptur von Schmelzfilmen zwischen Blasen, und fortgesetzte Gasexpansion während Eruption die Fragmentierung aufrechterhält und pyroklastische Strombildung antreibt.",
          nl: "Vluchtige stoffen zijn de primaire drijver van explosieve fragmentatie door: snelle uitscheiding tijdens magma decompressie die gasbellen creëert, bel expansie en samenvoeging die gas volume fractie verhoogt, viskeuze-brosse overgang wanneer gas fractie ~70-80% overschrijdt, acceleratie-gedreven uitrekking en breuk van smelt films tussen bellen, en voortgezette gas expansie tijdens eruptie die fragmentatie onderhoudt en pyroklastische stroom vorming aandrijft."
        }
      },
      {
        question: {
          en: "How do crystal size distributions (CSDs) reveal magma chamber dynamics and crystallization history?",
          es: "¿Cómo las distribuciones de tamaño de cristal (CSDs) revelan dinámica de cámara magmática e historia de cristalización?",
          de: "Wie enthüllen Kristallgrößenverteilungen (CSDs) Magmakammerdynamik und Kristallisationsgeschichte?",
          nl: "Hoe onthullen kristalgrootteverdelingen (CSDs) magmakamerdynamiek en kristallisatiegeschiedenis?"
        },
        options: [
          { en: "CSD slopes indicate nucleation rates, residence times, and crystallization kinetics in magma chambers", es: "Pendientes CSD indican tasas de nucleación, tiempos de residencia y cinética de cristalización en cámaras magmáticas", de: "CSD-Neigungen zeigen Nukleationsraten, Verweilzeiten und Kristallisationskinetik in Magmakammern an", nl: "CSD hellingen geven nucleatiesnelheden, verblijftijden en kristallisatiekinetiek in magmakamers aan" },
          { en: "Only show final crystal sizes", es: "Solo muestran tamaños finales de cristal", de: "Zeigen nur endgültige Kristallgrößen", nl: "Tonen alleen finale kristalgroottes" },
          { en: "Are unrelated to magmatic processes", es: "No están relacionadas con procesos magmáticos", de: "Stehen nicht mit magmatischen Prozessen in Verbindung", nl: "Zijn niet gerelateerd aan magmatische processen" },
          { en: "Only depend on eruption style", es: "Solo dependen del estilo de erupción", de: "Hängen nur vom Eruptionsstil ab", nl: "Hangen alleen af van eruptiestijl" }
        ],
        correct: 0,
        explanation: {
          en: "Crystal size distributions follow exponential relationships where the slope reflects nucleation density and growth rates. Steep slopes indicate high nucleation rates or short residence times, while shallow slopes suggest low nucleation rates or long residence times. CSD analysis reveals magma chamber thermal history, mixing events, and crystallization dynamics.",
          es: "Las distribuciones de tamaño de cristal siguen relaciones exponenciales donde la pendiente refleja densidad de nucleación y tasas de crecimiento. Pendientes pronunciadas indican altas tasas de nucleación o tiempos de residencia cortos, mientras pendientes suaves sugieren bajas tasas de nucleación o tiempos de residencia largos. El análisis CSD revela historia térmica de cámara magmática, eventos de mezcla y dinámica de cristalización.",
          de: "Kristallgrößenverteilungen folgen exponentiellen Beziehungen, wobei die Neigung Nukleationsdichte und Wachstumsraten widerspiegelt. Steile Neigungen zeigen hohe Nukleationsraten oder kurze Verweilzeiten an, während flache Neigungen niedrige Nukleationsraten oder lange Verweilzeiten nahelegen. CSD-Analyse enthüllt Magmakammer-Thermalgeschichte, Mischereignisse und Kristallisationsdynamik.",
          nl: "Kristalgrootteverdelingen volgen exponentiële relaties waarbij de helling nucleatiedichtheid en groeisnelheden weergeeft. Steile hellingen geven hoge nucleatiesnelheden of korte verblijftijden aan, terwijl vlakke hellingen lage nucleatiesnelheden of lange verblijftijden suggereren. CSD-analyse onthult magmakamer thermale geschiedenis, mengingsgebeurtenissen en kristallisatiedynamiek."
        }
      },
      {
        question: {
          en: "What is the significance of phenocryst-groundmass disequilibrium in volcanic rocks?",
          es: "¿Cuál es la importancia del desequilibrio fenocristal-matriz en rocas volcánicas?",
          de: "Was ist die Bedeutung des Phänokristall-Grundmasse-Ungleichgewichts in vulkanischen Gesteinen?",
          nl: "Wat is de betekenis van fenokrist-grondmassa onevenwichtigheid in vulkanische gesteenten?"
        },
        options: [
          { en: "It indicates rapid changes in magma conditions, mixing events, or crystal cargo from different sources", es: "Indica cambios rápidos en condiciones de magma, eventos de mezcla, o carga cristalina de diferentes fuentes", de: "Es zeigt schnelle Änderungen in Magmabedingungen, Mischereignisse oder Kristallfracht aus verschiedenen Quellen an", nl: "Het geeft snelle veranderingen in magmacondities, mengingsgebeurtenissen, of kristallading van verschillende bronnen aan" },
          { en: "Shows perfect equilibrium crystallization", es: "Muestra cristalización de equilibrio perfecto", de: "Zeigt perfekte Gleichgewichtskristallisation", nl: "Toont perfecte evenwichtskristallisatie" },
          { en: "Is only caused by weathering", es: "Solo es causado por meteorización", de: "Wird nur durch Verwitterung verursacht", nl: "Wordt alleen veroorzaakt door verwering" },
          { en: "Has no petrological meaning", es: "No tiene significado petrológico", de: "Hat keine petrologische Bedeutung", nl: "Heeft geen petrologische betekenis" }
        ],
        correct: 0,
        explanation: {
          en: "Phenocryst-groundmass disequilibrium occurs when large crystals (phenocrysts) and fine-grained matrix show different compositions or mineral assemblages, indicating they crystallized under different conditions. This reveals magma mixing, rapid ascent preventing equilibration, or inheritance of crystals from earlier crystallization episodes.",
          es: "El desequilibrio fenocristal-matriz ocurre cuando cristales grandes (fenocristales) y matriz de grano fino muestran diferentes composiciones o ensambles minerales, indicando que cristalizaron bajo condiciones diferentes. Esto revela mezcla de magma, ascenso rápido previniendo equilibración, o herencia de cristales de episodios de cristalización anteriores.",
          de: "Phänokristall-Grundmasse-Ungleichgewicht tritt auf, wenn große Kristalle (Phänokristalle) und feinkörnige Matrix verschiedene Zusammensetzungen oder Mineralvergesellschaftungen zeigen, was anzeigt, dass sie unter verschiedenen Bedingungen kristallisierten. Dies enthüllt Magmamischung, schnellen Aufstieg der Äquilibrierung verhindert, oder Vererbung von Kristallen aus früheren Kristallisationsepisoden.",
          nl: "Fenokrist-grondmassa onevenwichtigheid treedt op wanneer grote kristallen (fenokristallen) en fijnkorrelige matrix verschillende samenstellingen of mineraal assemblages tonen, wat aangeeft dat ze kristalliseerden onder verschillende omstandigheden. Dit onthult magma menging, snelle opstijging die evenwichtsvorming voorkomt, of overerving van kristallen uit eerdere kristallisatie episodes."
        }
      },
      {
        question: {
          en: "How do intensive parameters (P, T, fO2, aH2O) control mineral stability in magmatic systems?",
          es: "¿Cómo los parámetros intensivos (P, T, fO2, aH2O) controlan la estabilidad mineral en sistemas magmáticos?",
          de: "Wie kontrollieren intensive Parameter (P, T, fO2, aH2O) Mineralstabilität in magmatischen Systemen?",
          nl: "Hoe controleren intensieve parameters (P, T, fO2, aH2O) mineraalstabiliteit in magmatische systemen?"
        },
        options: [
          { en: "Each parameter defines stability fields and reaction boundaries that determine which minerals can crystallize", es: "Cada parámetro define campos de estabilidad y límites de reacción que determinan qué minerales pueden cristalizar", de: "Jeder Parameter definiert Stabilitätsfelder und Reaktionsgrenzen, die bestimmen, welche Minerale kristallisieren können", nl: "Elke parameter definieert stabiliteitsgebieden en reactiegrenzen die bepalen welke mineralen kunnen kristalliseren" },
          { en: "Only temperature matters for crystallization", es: "Solo la temperatura importa para cristalización", de: "Nur Temperatur ist wichtig für Kristallisation", nl: "Alleen temperatuur is belangrijk voor kristallisatie" },
          { en: "Pressure has no effect on mineral formation", es: "La presión no tiene efecto en formación mineral", de: "Druck hat keinen Effekt auf Mineralbildung", nl: "Druk heeft geen effect op mineraalvorming" },
          { en: "These parameters are constant in all magmas", es: "Estos parámetros son constantes en todos los magmas", de: "Diese Parameter sind konstant in allen Magmen", nl: "Deze parameters zijn constant in alle magma's" }
        ],
        correct: 0,
        explanation: {
          en: "Intensive parameters collectively control mineral stability through thermodynamic equilibria. Temperature and pressure shift reaction boundaries, oxygen fugacity controls Fe oxidation state affecting Fe-Ti oxide and silicate mineral stability, and water activity influences hydrous mineral formation and melt structure. These parameters interact to define unique mineral assemblages for specific conditions.",
          es: "Los parámetros intensivos controlan colectivamente la estabilidad mineral a través de equilibrios termodinámicos. Temperatura y presión desplazan límites de reacción, fugacidad de oxígeno controla estado de oxidación de Fe afectando estabilidad de óxidos Fe-Ti y minerales silicatados, y actividad de agua influye en formación de minerales hidratados y estructura de fundido. Estos parámetros interactúan para definir ensambles minerales únicos para condiciones específicas.",
          de: "Intensive Parameter kontrollieren kollektiv Mineralstabilität durch thermodynamische Gleichgewichte. Temperatur und Druck verschieben Reaktionsgrenzen, Sauerstofffugazität kontrolliert Fe-Oxidationszustand und beeinflusst Fe-Ti-Oxid- und Silikatmineralstabilität, und Wasseraktivität beeinflusst Bildung wasserhaltiger Minerale und Schmelzstruktur. Diese Parameter interagieren um einzigartige Mineralvergesellschaftungen für spezifische Bedingungen zu definieren.",
          nl: "Intensieve parameters controleren collectief mineraalstabiliteit door thermodynamische evenwichten. Temperatuur en druk verschuiven reactiegrenzen, zuurstofffugaciteit controleert Fe oxidatietoestand die Fe-Ti oxide en silicaat mineraal stabiliteit beïnvloedt, en water activiteit beïnvloedt hydratiseerde mineraalvorming en smeltstructuur. Deze parameters interacteren om unieke mineraal assemblages te definiëren voor specifieke omstandigheden."
        }
      },
      {
        question: {
          en: "What is the role of water in silicate melt structure and crystallization behavior?",
          es: "¿Cuál es el papel del agua en la estructura de fundidos silicatados y comportamiento de cristalización?",
          de: "Was ist die Rolle von Wasser in Silikatschmelzstruktur und Kristallisationsverhalten?",
          nl: "Wat is de rol van water in silicaat smeltstructuur en kristallisatiegedrag?"
        },
        options: [
          { en: "Water depolymerizes silicate networks, lowers viscosity and crystallization temperatures, and stabilizes hydrous phases", es: "Agua despolimeriza redes silicatadas, disminuye viscosidad y temperaturas de cristalización, y estabiliza fases hidratadas", de: "Wasser depolymerisiert Silikatnetzwerke, senkt Viskosität und Kristallisationstemperaturen, und stabilisiert hydratisierte Phasen", nl: "Water depolymeriseert silicaat netwerken, verlaagt viscositeit en kristallisatietemperaturen, en stabiliseert gehydrateerde fasen" },
          { en: "Water only affects magma color", es: "Agua solo afecta el color del magma", de: "Wasser beeinflusst nur Magmafarbe", nl: "Water beïnvloedt alleen magmakleur" },
          { en: "Has no effect on crystallization", es: "No tiene efecto en cristalización", de: "Hat keinen Effekt auf Kristallisation", nl: "Heeft geen effect op kristallisatie" },
          { en: "Only increases eruption violence", es: "Solo aumenta violencia de erupción", de: "Erhöht nur Eruptionsgewalt", nl: "Verhoogt alleen eruptiegeweld" }
        ],
        correct: 0,
        explanation: {
          en: "Water dramatically modifies silicate melt properties by breaking Si-O bonds, creating non-bridging oxygens that depolymerize the network structure. This reduces viscosity, lowers liquidus temperatures, expands mineral stability fields (especially hydrous phases like amphibole and mica), and affects crystallization kinetics and mineral-melt partition coefficients.",
          es: "Agua modifica dramáticamente las propiedades de fundidos silicatados rompiendo enlaces Si-O, creando oxígenos no-enlazantes que despolimerizan la estructura de red. Esto reduce viscosidad, disminuye temperaturas de liquidus, expande campos de estabilidad mineral (especialmente fases hidratadas como anfíbol y mica), y afecta cinética de cristalización y coeficientes de partición mineral-fundido.",
          de: "Wasser modifiziert dramatisch Silikatschmelzeigenschaften durch Brechen von Si-O-Bindungen, wodurch nicht-brückenbildende Sauerstoffe entstehen, die die Netzwerkstruktur depolymerisieren. Dies reduziert Viskosität, senkt Liquidustemperaturen, erweitert Mineralstabilitätsfelder (besonders hydratisierte Phasen wie Amphibol und Glimmer), und beeinflusst Kristallisationskinetik und Mineral-Schmelz-Verteilungskoeffizienten.",
          nl: "Water modificeert dramatisch silicaat smelt eigenschappen door Si-O bindingen te breken, creërend niet-bruggende zuurstofatomen die de netwerkstructuur depolymeriseren. Dit reduceert viscositeit, verlaagt liquidus temperaturen, breidt mineraal stabiliteitsgebieden uit (vooral gehydrateerde fasen zoals amfibool en mica), en beïnvloedt kristallisatiekinetiek en mineraal-smelt verdelingscoëfficiënten."
        }
      },
      {
        question: {
          en: "How do pressure-temperature paths recorded in metamorphic aureoles reveal intrusion emplacement dynamics?",
          es: "¿Cómo los caminos presión-temperatura registrados en aureolas metamórficas revelan dinámica de emplazamiento de intrusiones?",
          de: "Wie enthüllen in metamorphen Aureolen aufgezeichnete Druck-Temperatur-Pfade Intrusionsplatzierungsdynamik?",
          nl: "Hoe onthullen druk-temperatuur paden geregistreerd in metamorfe aureolen intrusie inplaatsing dynamiek?"
        },
        options: [
          { en: "P-T paths constrain intrusion depth, emplacement rate, and thermal evolution during magma crystallization", es: "Caminos P-T restringen profundidad de intrusión, tasa de emplazamiento y evolución térmica durante cristalización de magma", de: "P-T-Pfade beschränken Intrusionstiefe, Platzierungsrate und thermische Evolution während Magmakristallisation", nl: "P-T paden beperken intrusie diepte, inplaatsingssnelheid en thermische evolutie tijdens magma kristallisatie" },
          { en: "Only show surface temperature changes", es: "Solo muestran cambios de temperatura superficial", de: "Zeigen nur Oberflächentemperaturänderungen", nl: "Tonen alleen oppervlakte temperatuurveranderingen" },
          { en: "Are unrelated to igneous processes", es: "No están relacionados con procesos ígneos", de: "Stehen nicht mit ignärer Prozessen in Verbindung", nl: "Zijn niet gerelateerd aan igneuze processen" },
          { en: "Only indicate regional tectonics", es: "Solo indican tectónica regional", de: "Zeigen nur regionale Tektonik an", nl: "Geven alleen regionale tektoniek aan" }
        ],
        correct: 0,
        explanation: {
          en: "Metamorphic aureoles around intrusions record P-T-t paths that reveal: emplacement depth from peak pressure, thermal pulse duration from reaction progress, intrusion size from aureole width, and emplacement rate from heating vs. cooling rates. Fast emplacement shows rapid heating followed by slow cooling, while slow emplacement shows gradual temperature increase.",
          es: "Aureolas metamórficas alrededor de intrusiones registran caminos P-T-t que revelan: profundidad de emplazamiento desde presión pico, duración de pulso térmico desde progreso de reacción, tamaño de intrusión desde ancho de aureola, y tasa de emplazamiento desde tasas de calentamiento vs. enfriamiento. Emplazamiento rápido muestra calentamiento rápido seguido de enfriamiento lento, mientras emplazamiento lento muestra aumento gradual de temperatura.",
          de: "Metamorphe Aureolen um Intrusionen zeichnen P-T-t-Pfade auf, die enthüllen: Platzierungstiefe aus Spitzendruck, thermische Pulsdauer aus Reaktionsfortschritt, Intrusionsgröße aus Aurolbreite, und Platzierungsrate aus Aufheiz- vs. Abkühlraten. Schnelle Platzierung zeigt schnelle Erwärmung gefolgt von langsamer Abkühlung, während langsame Platzierung graduelle Temperaturzunahme zeigt.",
          nl: "Metamorfe aureolen rond intrusies registreren P-T-t paden die onthullen: inplaatsingsdiepte van piekdruk, thermische puls duur van reactievoortgang, intrusiegrootte van aureolbreedte, en inplaatsingssnelheid van verwarmings- vs. afkoelingssnelheden. Snelle inplaatsing toont snelle verwarming gevolgd door langzame afkoeling, terwijl langzame inplaatsing geleidelijke temperatuurtoename toont."
        }
      },
      {
        question: {
          en: "What controls the development of cumulate textures in layered intrusions?",
          es: "¿Qué controla el desarrollo de texturas cumuladas en intrusiones estratificadas?",
          de: "Was kontrolliert die Entwicklung von Kumulattexturen in geschichteten Intrusionen?",
          nl: "Wat controleert de ontwikkeling van cumulaat texturen in gelaagde intrusies?"
        },
        options: [
          { en: "Crystal accumulation, compaction, intercumulus crystallization, and post-cumulus reequilibration", es: "Acumulación cristalina, compactación, cristalización intercumular y reequilibración post-cumular", de: "Kristallakkumulation, Kompaktion, Interkumulus-Kristallisation und Post-Kumulus-Reäquilibrierung", nl: "Kristalaccumulatie, compactie, intercumulus kristallisatie en post-cumulus herequilibratie" },
          { en: "Only gravitational settling", es: "Solo asentamiento gravitacional", de: "Nur Gravitationssetzung", nl: "Alleen gravitationele bezinking" },
          { en: "Surface weathering processes", es: "Procesos de meteorización superficial", de: "Oberflächenverwitterungsprozesse", nl: "Oppervlakte verweringsprocessen" },
          { en: "Tectonic deformation alone", es: "Solo deformación tectónica", de: "Nur tektonische Deformation", nl: "Alleen tektonische deformatie" }
        ],
        correct: 0,
        explanation: {
          en: "Cumulate textures develop through multi-stage processes: initial crystal accumulation through settling or flow differentiation, compaction reducing pore space and expelling intercumulus liquid, continued crystallization from trapped melt, and post-cumulus reaction and reequilibration. These create characteristic adcumulate (tightly packed) vs. orthocumulate (preserved intercumulus phases) textures.",
          es: "Las texturas cumuladas se desarrollan a través de procesos multi-etapa: acumulación cristalina inicial a través de asentamiento o diferenciación de flujo, compactación reduciendo espacio de poro y expulsando líquido intercumular, cristalización continua de fundido atrapado, y reacción post-cumular y reequilibración. Estos crean texturas características adcumuladas (empaquetado apretado) vs. ortocumuladas (fases intercumulares preservadas).",
          de: "Kumulattexturen entwickeln sich durch mehrstufige Prozesse: anfängliche Kristallakkumulation durch Setzung oder Flussdifferenzierung, Kompaktion die Porenraum reduziert und Interkumulus-Flüssigkeit ausstößt, fortgesetzte Kristallisation aus eingeschlossener Schmelze, und Post-Kumulus-Reaktion und Reäquilibrierung. Diese schaffen charakteristische Adkumulat- (dicht gepackte) vs. Orthokumulat- (erhaltene Interkumulus-Phasen) Texturen.",
          nl: "Cumulaat texturen ontwikkelen door multi-stadium processen: initiële kristalaccumulatie door bezinking of stroomdifferentiatie, compactie die poriënruimte reduceert en intercumulus vloeistof uitstoot, voortgezette kristallisatie van gevangen smelt, en post-cumulus reactie en herequilibratie. Deze creëren karakteristieke adcumulaat (dicht verpakte) vs. orthocumulaat (bewaarde intercumulus fasen) texturen."
        }
      },
      {
        question: {
          en: "How do Ti-in-quartz and Ti-in-zircon thermometers constrain magmatic temperatures?",
          es: "¿Cómo los termómetros Ti-en-cuarzo y Ti-en-circón restringen temperaturas magmáticas?",
          de: "Wie beschränken Ti-in-Quarz- und Ti-in-Zirkon-Thermometer magmatische Temperaturen?",
          nl: "Hoe beperken Ti-in-kwarts en Ti-in-zircon thermometers magmatische temperaturen?"
        },
        options: [
          { en: "Ti substitution in crystal lattices is temperature-dependent, calibrated against experimental data", es: "Sustitución de Ti en redes cristalinas es dependiente de temperatura, calibrada contra datos experimentales", de: "Ti-Substitution in Kristallgittern ist temperaturabhängig, kalibriert gegen experimentelle Daten", nl: "Ti-substitutie in kristalroosters is temperatuurafhankelijk, gekalibreerd tegen experimentele gegevens" },
          { en: "Ti content is unrelated to temperature", es: "Contenido de Ti no está relacionado con temperatura", de: "Ti-Gehalt steht nicht mit Temperatur in Verbindung", nl: "Ti-gehalte is niet gerelateerd aan temperatuur" },
          { en: "Only pressure affects Ti incorporation", es: "Solo presión afecta incorporación de Ti", de: "Nur Druck beeinflusst Ti-Einbau", nl: "Alleen druk beïnvloedt Ti-inbouw" },
          { en: "Cannot be used for igneous systems", es: "No puede usarse para sistemas ígneos", de: "Kann nicht für ignäre Systeme verwendet werden", nl: "Kan niet gebruikt worden voor igneuze systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Ti-in-quartz and Ti-in-zircon thermometers exploit the temperature-dependent incorporation of Ti4+ into quartz and zircon crystal structures. These thermometers, calibrated through experimental studies, provide quantitative temperature estimates for magmatic crystallization, with typical uncertainties of ±50°C, making them valuable tools for constraining thermal conditions during igneous processes.",
          es: "Los termómetros Ti-en-cuarzo y Ti-en-circón explotan la incorporación dependiente de temperatura de Ti4+ en estructuras cristalinas de cuarzo y circón. Estos termómetros, calibrados a través de estudios experimentales, proporcionan estimaciones cuantitativas de temperatura para cristalización magmática, con incertidumbres típicas de ±50°C, haciéndolos herramientas valiosas para restringir condiciones térmicas durante procesos ígneos.",
          de: "Ti-in-Quarz- und Ti-in-Zirkon-Thermometer nutzen den temperaturabhängigen Einbau von Ti4+ in Quarz- und Zirkonkristallstrukturen. Diese Thermometer, durch experimentelle Studien kalibriert, liefern quantitative Temperaturschätzungen für magmatische Kristallisation mit typischen Unsicherheiten von ±50°C, was sie zu wertvollen Werkzeugen für die Beschränkung thermischer Bedingungen während ignärer Prozesse macht.",
          nl: "Ti-in-kwarts en Ti-in-zircon thermometers benutten de temperatuurafhankelijke inbouw van Ti4+ in kwarts en zircon kristalstructuren. Deze thermometers, gekalibreerd door experimentele studies, bieden kwantitatieve temperatuurschattingen voor magmatische kristallisatie, met typische onzekerheden van ±50°C, waardoor ze waardevolle instrumenten zijn voor het beperken van thermische omstandigheden tijdens igneuze processen."
        }
      },
      {
        question: {
          en: "What controls the formation of graphic granite textures in pegmatites?",
          es: "¿Qué controla la formación de texturas de granito gráfico en pegmatitas?",
          de: "Was kontrolliert die Bildung graphischer Granittexturen in Pegmatiten?",
          nl: "Wat controleert de vorming van grafische graniet texturen in pegmatieten?"
        },
        options: [
          { en: "Simultaneous crystallization of quartz and feldspar with specific growth rate ratios creating intergrowth patterns", es: "Cristalización simultánea de cuarzo y feldespato con proporciones específicas de tasa de crecimiento creando patrones de intercrecimiento", de: "Gleichzeitige Kristallisation von Quarz und Feldspat mit spezifischen Wachstumsratenverhältnissen, die Verwachsungsmuster schaffen", nl: "Gelijktijdige kristallisatie van kwarts en veldspaat met specifieke groeisnelheid verhoudingen die intergroei patronen creëren" },
          { en: "Post-crystallization deformation only", es: "Solo deformación post-cristalización", de: "Nur Post-Kristallisationsdeformation", nl: "Alleen post-kristallisatie deformatie" },
          { en: "Hydrothermal alteration processes", es: "Procesos de alteración hidrotermal", de: "Hydrothermale Alterationsprozesse", nl: "Hydrothermale alteratie processen" },
          { en: "Surface weathering effects", es: "Efectos de meteorización superficial", de: "Oberflächenverwitterungseffekte", nl: "Oppervlakte verwering effecten" }
        ],
        correct: 0,
        explanation: {
          en: "Graphic granite textures result from simultaneous crystallization of quartz and alkali feldspar at the cotectic minimum, where both phases nucleate and grow together. The characteristic angular intergrowth patterns reflect crystallographic control and similar growth rates, often enhanced by undercooling conditions in pegmatitic environments with high volatile contents.",
          es: "Las texturas de granito gráfico resultan de cristalización simultánea de cuarzo y feldespato alcalino en el mínimo cotéctico, donde ambas fases nuclean y crecen juntas. Los patrones de intercrecimiento angular característicos reflejan control cristalográfico y tasas de crecimiento similares, a menudo mejorados por condiciones de subenfriamiento en ambientes pegmatíticos con altos contenidos de volátiles.",
          de: "Graphische Granittexturen resultieren aus gleichzeitiger Kristallisation von Quarz und Alkalifeldspat am kotektischen Minimum, wo beide Phasen nukleieren und zusammen wachsen. Die charakteristischen eckigen Verwachsungsmuster reflektieren kristallographische Kontrolle und ähnliche Wachstumsraten, oft verstärkt durch Unterkühlungsbedingungen in pegmatitischen Umgebungen mit hohen Volatilgehalten.",
          nl: "Grafische graniet texturen resulteren uit gelijktijdige kristallisatie van kwarts en alkali veldspaat bij het cotectische minimum, waar beide fasen nucleëren en samen groeien. De karakteristieke hoekige intergroei patronen reflecteren kristallografische controle en vergelijkbare groeisnelheden, vaak versterkt door onderkoeling omstandigheden in pegmatitische omgevingen met hoge vluchtige gehaltes."
        }
      },
      {
        question: {
          en: "How do boron isotopes in tourmaline reveal magmatic-hydrothermal processes?",
          es: "¿Cómo los isótopos de boro en turmalina revelan procesos magmático-hidrotermales?",
          de: "Wie enthüllen Borisotope in Turmalin magmatisch-hydrothermale Prozesse?",
          nl: "Hoe onthullen boor isotopen in toermalijn magmatisch-hydrothermale processen?"
        },
        options: [
          { en: "δ11B values distinguish magmatic vs. hydrothermal sources and track fluid evolution during cooling", es: "Valores δ11B distinguen fuentes magmáticas vs. hidrotermales y rastrean evolución de fluidos durante enfriamiento", de: "δ11B-Werte unterscheiden magmatische vs. hydrothermale Quellen und verfolgen Fluidevolution während Abkühlung", nl: "δ11B waarden onderscheiden magmatische vs. hydrothermale bronnen en volgen vloeistof evolutie tijdens afkoeling" },
          { en: "All boron has identical isotopic composition", es: "Todo boro tiene composición isotópica idéntica", de: "Aller Bor hat identische isotopische Zusammensetzung", nl: "Alle boor heeft identieke isotopische samenstelling" },
          { en: "Boron isotopes only indicate pressure", es: "Isótopos de boro solo indican presión", de: "Borisotope zeigen nur Druck an", nl: "Boor isotopen geven alleen druk aan" },
          { en: "Tourmaline cannot preserve isotopic signatures", es: "Turmalina no puede preservar firmas isotópicas", de: "Turmalin kann isotopische Signaturen nicht bewahren", nl: "Toermalijn kan isotopische handtekeningen niet bewaren" }
        ],
        correct: 0,
        explanation: {
          en: "Boron isotopes in tourmaline provide powerful tracers of magmatic-hydrothermal processes. Magmatic boron typically shows δ11B values around -10‰, while seawater-derived fluids show +39‰. Tourmaline growing from mixed magmatic-meteoric fluids records intermediate values, and systematic variations within single crystals track fluid evolution, pH changes, and temperature-dependent fractionation during hydrothermal cooling.",
          es: "Isótopos de boro en turmalina proporcionan trazadores poderosos de procesos magmático-hidrotermales. Boro magmático típicamente muestra valores δ11B alrededor de -10‰, mientras fluidos derivados de agua marina muestran +39‰. Turmalina creciendo de fluidos mixtos magmático-meteóricos registra valores intermedios, y variaciones sistemáticas dentro de cristales únicos rastrean evolución de fluidos, cambios de pH, y fraccionamiento dependiente de temperatura durante enfriamiento hidrotermal.",
          de: "Borisotope in Turmalin liefern mächtige Tracer magmatisch-hydrothermaler Prozesse. Magmatischer Bor zeigt typisch δ11B-Werte um -10‰, während meerwasser-abgeleitete Fluide +39‰ zeigen. Turmalin, der aus gemischten magmatisch-meteorischen Fluiden wächst, zeichnet Zwischenwerte auf, und systematische Variationen innerhalb einzelner Kristalle verfolgen Fluidevolution, pH-Änderungen und temperaturabhängige Fraktionierung während hydrothermaler Abkühlung.",
          nl: "Boor isotopen in toermalijn bieden krachtige tracers van magmatisch-hydrothermale processen. Magmatisch boor toont typisch δ11B waarden rond -10‰, terwijl zeewaterafgeleide vloeistoffen +39‰ tonen. Toermalijn groeiend uit gemengde magmatisch-meteorische vloeistoffen registreert tussenwaarden, en systematische variaties binnen enkele kristallen volgen vloeistof evolutie, pH veranderingen, en temperatuurafhankelijke fractionering tijdens hydrothermale afkoeling."
        }
      },
      {
        question: {
          en: "What is the significance of Eu anomalies in REE patterns for understanding plagioclase fractionation?",
          es: "¿Cuál es la importancia de anomalías de Eu en patrones REE para entender fraccionamiento de plagioclasa?",
          de: "Was ist die Bedeutung von Eu-Anomalien in SEE-Mustern für das Verständnis von Plagioklas-Fraktionierung?",
          nl: "Wat is de betekenis van Eu-anomalieën in REE patronen voor het begrijpen van plagioklaas fractionering?"
        },
        options: [
          { en: "Eu2+ substitutes for Ca2+ in plagioclase, creating negative anomalies in residual melts during fractionation", es: "Eu2+ sustituye Ca2+ en plagioclasa, creando anomalías negativas en fundidos residuales durante fraccionamiento", de: "Eu2+ substituiert Ca2+ in Plagioklas und schafft negative Anomalien in Restschmelzen während Fraktionierung", nl: "Eu2+ vervangt Ca2+ in plagioklaas, negatieve anomalieën creërend in resterende smelten tijdens fractionering" },
          { en: "Eu anomalies are unrelated to crystallization", es: "Anomalías de Eu no están relacionadas con cristalización", de: "Eu-Anomalien stehen nicht mit Kristallisation in Verbindung", nl: "Eu-anomalieën zijn niet gerelateerd aan kristallisatie" },
          { en: "All REE behave identically", es: "Todos los REE se comportan idénticamente", de: "Alle SEE verhalten sich identisch", nl: "Alle REE gedragen zich identiek" },
          { en: "Plagioclase doesn't fractionate REE", es: "Plagioclasa no fracciona REE", de: "Plagioklas fraktioniert keine SEE", nl: "Plagioklaas fractioneert geen REE" }
        ],
        correct: 0,
        explanation: {
          en: "Europium anomalies in REE patterns are diagnostic of plagioclase fractionation because Eu can exist as Eu2+ under reducing conditions, allowing it to substitute for Ca2+ in plagioclase structure while other REE remain as 3+ ions and are incompatible. Negative Eu anomalies in evolved melts indicate plagioclase removal, while positive anomalies in cumulates show plagioclase accumulation.",
          es: "Anomalías de europio en patrones REE son diagnósticas de fraccionamiento de plagioclasa porque Eu puede existir como Eu2+ bajo condiciones reductoras, permitiéndole sustituir Ca2+ en estructura de plagioclasa mientras otros REE permanecen como iones 3+ y son incompatibles. Anomalías negativas de Eu en fundidos evolucionados indican remoción de plagioclasa, mientras anomalías positivas en cumulados muestran acumulación de plagioclasa.",
          de: "Europium-Anomalien in SEE-Mustern sind diagnostisch für Plagioklas-Fraktionierung, weil Eu als Eu2+ unter reduzierenden Bedingungen existieren kann und Ca2+ in der Plagioklasstruktur substituieren kann, während andere SEE als 3+-Ionen verbleiben und inkompatibel sind. Negative Eu-Anomalien in evolvierten Schmelzen zeigen Plagioklasremoval an, während positive Anomalien in Kumulaten Plagioklasakkumulation zeigen.",
          nl: "Europium anomalieën in REE patronen zijn diagnostisch voor plagioklaas fractionering omdat Eu kan bestaan als Eu2+ onder reducerende omstandigheden, waardoor het Ca2+ in plagioklaas structuur kan vervangen terwijl andere REE als 3+ ionen blijven en incompatibel zijn. Negatieve Eu anomalieën in geëvolueerde smelten geven plagioklaas verwijdering aan, terwijl positieve anomalieën in cumulaten plagioklaas accumulatie tonen."
        }
      },
      {
        question: {
          en: "How do lunar basalt compositions constrain early planetary differentiation processes?",
          es: "¿Cómo las composiciones de basalto lunar restringen procesos tempranos de diferenciación planetaria?",
          de: "Wie beschränken Mondbasaltzusammensetzungen frühe planetare Differenzierungsprozesse?",
          nl: "Hoe beperken maanbasalt samenstellingen vroege planetaire differentiatie processen?"
        },
        options: [
          { en: "Lunar basalts record magma ocean crystallization, mantle overturn, and absence of plate tectonics", es: "Basaltos lunares registran cristalización de océano de magma, volcamiento del manto y ausencia de tectónica de placas", de: "Mondbasalte zeichnen Magmaozean-Kristallisation, Mantelumkehr und Abwesenheit von Plattentektonik auf", nl: "Maanbasalten registreren magma oceaan kristallisatie, mantel omwenteling, en afwezigheid van plaattektoniek" },
          { en: "Lunar and terrestrial basalts are identical", es: "Basaltos lunares y terrestres son idénticos", de: "Mond- und terrestrische Basalte sind identisch", nl: "Maan- en terrestrische basalten zijn identiek" },
          { en: "Moon never had volcanic activity", es: "Luna nunca tuvo actividad volcánica", de: "Mond hatte nie vulkanische Aktivität", nl: "Maan had nooit vulkanische activiteit" },
          { en: "Lunar compositions only reflect impact processes", es: "Composiciones lunares solo reflejan procesos de impacto", de: "Mondzusammensetzungen reflektieren nur Impaktprozesse", nl: "Maan samenstellingen reflecteren alleen impact processen" }
        ],
        correct: 0,
        explanation: {
          en: "Lunar basalts provide unique insights into early planetary processes because the Moon lacks plate tectonics and atmospheric weathering. Mare basalts show: high-Ti and low-Ti varieties reflecting different source regions created by magma ocean crystallization and subsequent mantle overturn, very low volatile contents indicating formation in an anhydrous environment, and age relationships revealing prolonged magmatic activity from 4.2-1.2 Ga.",
          es: "Basaltos lunares proporcionan perspectivas únicas sobre procesos planetarios tempranos porque la Luna carece de tectónica de placas y meteorización atmosférica. Basaltos de mare muestran: variedades de alto-Ti y bajo-Ti reflejando diferentes regiones fuente creadas por cristalización de océano de magma y volcamiento subsecuente del manto, contenidos muy bajos de volátiles indicando formación en ambiente anhidro, y relaciones de edad revelando actividad magmática prolongada de 4.2-1.2 Ga.",
          de: "Mondbasalte bieten einzigartige Einblicke in frühe planetare Prozesse, weil der Mond keine Plattentektonik und atmosphärische Verwitterung hat. Mare-Basalte zeigen: Hoch-Ti- und Niedrig-Ti-Varietäten, die verschiedene Quellregionen reflektieren, die durch Magmaozean-Kristallisation und anschließende Mantelumkehr geschaffen wurden, sehr niedrige Volatilgehalte, die Bildung in anhydrer Umgebung anzeigen, und Altersbeziehungen, die verlängerte magmatische Aktivität von 4,2-1,2 Ga enthüllen.",
          nl: "Maanbasalten bieden unieke inzichten in vroege planetaire processen omdat de Maan geen plaattektoniek en atmosferische verwering heeft. Mare basalten tonen: hoge-Ti en lage-Ti variëteiten die verschillende bronregio's reflecteren gecreëerd door magma oceaan kristallisatie en daaropvolgende mantel omwenteling, zeer lage vluchtige gehaltes die formatie in watervrije omgeving aangeven, en leeftijdsrelaties die langdurige magmatische activiteit van 4.2-1.2 Ga onthullen."
        }
      },
      {
        question: {
          en: "What controls the timing and duration of magmatic episodes in large igneous provinces?",
          es: "¿Qué controla el momento y duración de episodios magmáticos en grandes provincias ígneas?",
          de: "Was kontrolliert Zeitpunkt und Dauer magmatischer Episoden in großen magmatischen Provinzen?",
          nl: "Wat controleert de timing en duur van magmatische episodes in grote igneuze provincies?"
        },
        options: [
          { en: "Mantle plume dynamics, lithospheric structure, and thermal evolution control pulse timing and volume", es: "Dinámica de pluma del manto, estructura litosférica y evolución térmica controlan momento de pulso y volumen", de: "Mantelplume-Dynamik, lithosphärische Struktur und thermische Evolution kontrollieren Pulszeitpunkt und -volumen", nl: "Mantel pluim dynamiek, lithosferische structuur en thermische evolutie controleren puls timing en volume" },
          { en: "All LIPs form instantaneously", es: "Todas las LIPs se forman instantáneamente", de: "Alle LIPs bilden sich instantan", nl: "Alle LIPs vormen zich instantaan" },
          { en: "Only tectonic forces control timing", es: "Solo fuerzas tectónicas controlan momento", de: "Nur tektonische Kräfte kontrollieren Zeitpunkt", nl: "Alleen tektonische krachten controleren timing" },
          { en: "Timing is completely random", es: "Momento es completamente aleatorio", de: "Zeitpunkt ist völlig zufällig", nl: "Timing is volledig willekeurig" }
        ],
        correct: 0,
        explanation: {
          en: "Large igneous provinces form through complex interplay of deep mantle dynamics and lithospheric processes. Mantle plume head arrival triggers initial massive volcanism, plume flux variations create episodic activity, lithospheric thickness affects melt extraction efficiency, and thermal decay of plume tails controls duration. Continental LIPs often show multiple pulses over 1-5 Myr periods.",
          es: "Grandes provincias ígneas se forman a través de interacción compleja de dinámica del manto profundo y procesos litosféricos. Llegada de cabeza de pluma del manto dispara vulcanismo masivo inicial, variaciones de flujo de pluma crean actividad episódica, espesor litosférico afecta eficiencia de extracción de fundido, y decaimiento térmico de colas de pluma controla duración. LIPs continentales a menudo muestran múltiples pulsos sobre períodos de 1-5 Ma.",
          de: "Große magmatische Provinzen bilden sich durch komplexes Zusammenspiel von tiefer Manteldynamik und lithosphärischen Prozessen. Ankunft von Mantelplume-Kopf löst anfänglichen massiven Vulkanismus aus, Plume-Fluxvariationen schaffen episodische Aktivität, lithosphärische Mächtigkeit beeinflusst Schmelzextraktionseffizienz, und thermischer Verfall von Plume-Schwänzen kontrolliert Dauer. Kontinentale LIPs zeigen oft multiple Pulse über 1-5 Ma Perioden.",
          nl: "Grote igneuze provincies vormen door complexe wisselwerking van diepe mantel dynamiek en lithosferische processen. Mantel pluim hoofd aankomst triggert initieel massief vulkanisme, pluim flux variaties creëren episodische activiteit, lithosferische dikte beïnvloedt smelt extractie efficiëntie, en thermisch verval van pluim staarten controleert duur. Continentale LIPs tonen vaak meerdere pulsen over 1-5 Ma perioden."
        }
      },
      {
        question: {
          en: "How do chromite compositions in ultramafic rocks constrain magmatic processes and mantle conditions?",
          es: "¿Cómo las composiciones de cromita en rocas ultramáficas restringen procesos magmáticos y condiciones del manto?",
          de: "Wie beschränken Chromitzusammensetzungen in ultramafischen Gesteinen magmatische Prozesse und Mantelbedingungen?",
          nl: "Hoe beperken chromiet samenstellingen in ultramafische gesteenten magmatische processen en mantel condities?"
        },
        options: [
          { en: "Cr/Al ratios and TiO2 contents reflect degree of melting, oxygen fugacity, and mantle source fertility", es: "Proporciones Cr/Al y contenidos TiO2 reflejan grado de fusión, fugacidad de oxígeno y fertilidad de fuente del manto", de: "Cr/Al-Verhältnisse und TiO2-Gehalte reflektieren Schmelzgrad, Sauerstofffugazität und Mantelquellenfertilität", nl: "Cr/Al verhoudingen en TiO2 gehaltes reflecteren mate van smelting, zuurstofffugaciteit en mantel bron vruchtbaarheid" },
          { en: "All chromites have identical composition", es: "Todas las cromitas tienen composición idéntica", de: "Alle Chromite haben identische Zusammensetzung", nl: "Alle chromieten hebben identieke samenstelling" },
          { en: "Chromite composition is unrelated to mantle processes", es: "Composición de cromita no está relacionada con procesos del manto", de: "Chromitzusammensetzung steht nicht mit Mantelprozessen in Verbindung", nl: "Chromiet samenstelling is niet gerelateerd aan mantel processen" },
          { en: "Only temperature affects chromite chemistry", es: "Solo temperatura afecta química de cromita", de: "Nur Temperatur beeinflusst Chromitchemie", nl: "Alleen temperatuur beïnvloedt chromiet chemie" }
        ],
        correct: 0,
        explanation: {
          en: "Chromite chemistry provides sensitive indicators of magmatic conditions: high Cr/Al ratios indicate high degrees of melting or refractory sources, low TiO2 contents suggest depleted mantle sources, variable Mg# reflects crystallization temperature and parental melt composition, and Fe3+/Fe2+ ratios constrain oxygen fugacity during crystallization, making chromite a valuable petrogenetic indicator.",
          es: "Química de cromita proporciona indicadores sensibles de condiciones magmáticas: altas proporciones Cr/Al indican altos grados de fusión o fuentes refractarias, bajos contenidos TiO2 sugieren fuentes de manto empobrecidas, Mg# variable refleja temperatura de cristalización y composición de fundido parental, y proporciones Fe3+/Fe2+ restringen fugacidad de oxígeno durante cristalización, haciendo cromita un indicador petrogenético valioso.",
          de: "Chromitchemie liefert sensitive Indikatoren magmatischer Bedingungen: hohe Cr/Al-Verhältnisse zeigen hohe Schmelzgrade oder refraktäre Quellen an, niedrige TiO2-Gehalte deuten auf verarmte Mantelquellen hin, variables Mg# reflektiert Kristallisationstemperatur und parentale Schmelzzusammensetzung, und Fe3+/Fe2+-Verhältnisse beschränken Sauerstofffugazität während Kristallisation, was Chromit zu einem wertvollen petrogenetischen Indikator macht.",
          nl: "Chromiet chemie biedt gevoelige indicatoren van magmatische condities: hoge Cr/Al verhoudingen geven hoge graden van smelting of refractaire bronnen aan, lage TiO2 gehaltes suggereren uitgeputte mantel bronnen, variabel Mg# reflecteert kristallisatietemperatuur en parentale smelt samenstelling, en Fe3+/Fe2+ verhoudingen beperken zuurstofffugaciteit tijdens kristallisatie, chromiet tot een waardevolle petrogenetische indicator makend."
        }
      },
      {
        question: {
          en: "What controls the volatile saturation sequence during progressive magma degassing?",
          es: "¿Qué controla la secuencia de saturación volátil durante desgasificación progresiva de magma?",
          de: "Was kontrolliert die Sequenz der Volatilsättigung während progressiver Magmaentgasung?",
          nl: "Wat controleert de vluchtige verzadigingssequentie tijdens progressieve magma ontgassing?"
        },
        options: [
          { en: "Solubility coefficients, pressure-dependent Henry's law constants, and melt composition effects", es: "Coeficientes de solubilidad, constantes de ley de Henry dependientes de presión y efectos de composición de fundido", de: "Löslichkeitskoeffizienten, druckabhängige Henry-Gesetz-Konstanten und Schmelzzusammensetzungseffekte", nl: "Oplosbaarheidscoëfficiënten, drukafhankelijke Henry's wet constanten en smelt samenstelling effecten" },
          { en: "Only temperature controls volatile behavior", es: "Solo temperatura controla comportamiento volátil", de: "Nur Temperatur kontrolliert Volatilverhalten", nl: "Alleen temperatuur controleert vluchtig gedrag" },
          { en: "All volatiles behave identically", es: "Todos los volátiles se comportan idénticamente", de: "Alle Volatile verhalten sich identisch", nl: "Alle vluchtige stoffen gedragen zich identiek" },
          { en: "Volatile saturation is random", es: "Saturación volátil es aleatoria", de: "Volatilsättigung ist zufällig", nl: "Vluchtige verzadiging is willekeurig" }
        ],
        correct: 0,
        explanation: {
          en: "Volatile saturation during magma degassing follows predictable sequences based on solubility differences: CO2 saturates first at high pressures due to low solubility, followed by SO2 at intermediate pressures, then H2O at lower pressures with high solubility. Melt composition affects volatile solubilities through structural changes, particularly silica content and alkali/alkaline earth ratios.",
          es: "Saturación volátil durante desgasificación de magma sigue secuencias predecibles basadas en diferencias de solubilidad: CO2 se satura primero a altas presiones debido a baja solubilidad, seguido por SO2 a presiones intermedias, luego H2O a presiones bajas con alta solubilidad. Composición de fundido afecta solubilidades volátiles a través de cambios estructurales, particularmente contenido de sílice y proporciones alcali/tierra alcalina.",
          de: "Volatilsättigung während Magmaentgasung folgt vorhersagbaren Sequenzen basierend auf Löslichkeitsunterschieden: CO2 sättigt zuerst bei hohen Drücken aufgrund niedriger Löslichkeit, gefolgt von SO2 bei mittleren Drücken, dann H2O bei niedrigeren Drücken mit hoher Löslichkeit. Schmelzzusammensetzung beeinflusst Volatillöslichkeiten durch strukturelle Änderungen, besonders Siliciumdioxidgehalt und Alkali/Erdalkaliverhältnisse.",
          nl: "Vluchtige verzadiging tijdens magma ontgassing volgt voorspelbare sequenties gebaseerd op oplosbaarheid verschillen: CO2 verzadigt eerst bij hoge drukken door lage oplosbaarheid, gevolgd door SO2 bij tussenliggende drukken, dan H2O bij lagere drukken met hoge oplosbaarheid. Smelt samenstelling beïnvloedt vluchtige oplosbaarheid door structurele veranderingen, vooral silica gehalte en alkali/aardalkalisch verhoudingen."
        }
      },
      {
        question: {
          en: "How do platinum group element (PGE) patterns in mafic-ultramafic complexes constrain sulfide saturation history?",
          es: "¿Cómo los patrones de elementos del grupo del platino (PGE) en complejos máficos-ultramáficos restringen historia de saturación de sulfuros?",
          de: "Wie beschränken Platinmetallmuster (PGE) in mafisch-ultramafischen Komplexen die Sulfidsättigungsgeschichte?",
          nl: "Hoe beperken platina groep element (PGE) patronen in mafische-ultramafische complexen sulfide verzadigingsgeschiedenis?"
        },
        options: [
          { en: "Pd/Ir ratios, PGE depletion patterns, and S/Se ratios indicate timing and extent of sulfide segregation", es: "Proporciones Pd/Ir, patrones de empobrecimiento PGE y proporciones S/Se indican momento y extensión de segregación de sulfuros", de: "Pd/Ir-Verhältnisse, PGE-Verarmungsmuster und S/Se-Verhältnisse zeigen Zeitpunkt und Ausmaß der Sulfidsegregation an", nl: "Pd/Ir verhoudingen, PGE uitputting patronen en S/Se verhoudingen geven timing en omvang van sulfide segregatie aan" },
          { en: "All PGE patterns are identical regardless of sulfide history", es: "Todos los patrones PGE son idénticos independientemente de historia de sulfuros", de: "Alle PGE-Muster sind identisch unabhängig von Sulfidgeschichte", nl: "Alle PGE patronen zijn identiek ongeacht sulfide geschiedenis" },
          { en: "PGE patterns only reflect source composition", es: "Patrones PGE solo reflejan composición de fuente", de: "PGE-Muster reflektieren nur Quellzusammensetzung", nl: "PGE patronen reflecteren alleen bron samenstelling" },
          { en: "Sulfide saturation doesn't affect PGE behavior", es: "Saturación de sulfuros no afecta comportamiento PGE", de: "Sulfidsättigung beeinflusst PGE-Verhalten nicht", nl: "Sulfide verzadiging beïnvloedt PGE gedrag niet" }
        ],
        correct: 0,
        explanation: {
          en: "PGE patterns provide sensitive indicators of sulfide saturation: high Pd/Ir ratios suggest early sulfide segregation removing IPGE, negative Pt-Pd anomalies indicate sulfide fractionation, low Cu/Pd ratios reflect sulfide-silicate melt equilibration, and elevated S/Se ratios (>3000) confirm sulfide saturation. These patterns help reconstruct magmatic processes and ore-forming potential.",
          es: "Patrones PGE proporcionan indicadores sensibles de saturación de sulfuros: altas proporciones Pd/Ir sugieren segregación temprana de sulfuros removiendo IPGE, anomalías negativas Pt-Pd indican fraccionamiento de sulfuros, bajas proporciones Cu/Pd reflejan equilibración de fundido sulfuro-silicato, y proporciones S/Se elevadas (>3000) confirman saturación de sulfuros. Estos patrones ayudan a reconstruir procesos magmáticos y potencial formador de menas.",
          de: "PGE-Muster liefern sensitive Indikatoren für Sulfidsättigung: hohe Pd/Ir-Verhältnisse deuten auf frühe Sulfidsegregation hin, die IPGE entfernt, negative Pt-Pd-Anomalien zeigen Sulfidfraktionierung an, niedrige Cu/Pd-Verhältnisse reflektieren Sulfid-Silikatschmelz-Equilibration, und erhöhte S/Se-Verhältnisse (>3000) bestätigen Sulfidsättigung. Diese Muster helfen, magmatische Prozesse und erzbildendes Potenzial zu rekonstruieren.",
          nl: "PGE patronen bieden gevoelige indicatoren van sulfide verzadiging: hoge Pd/Ir verhoudingen suggereren vroege sulfide segregatie die IPGE verwijdert, negatieve Pt-Pd anomalieën geven sulfide fractionering aan, lage Cu/Pd verhoudingen reflecteren sulfide-silicaat smelt equilibratie, en verhoogde S/Se verhoudingen (>3000) bevestigen sulfide verzadiging. Deze patronen helpen magmatische processen en erts-vormend potentieel te reconstrueren."
        }
      },
      {
        question: {
          en: "What processes control the development of layering in mafic-ultramafic intrusions?",
          es: "¿Qué procesos controlan desarrollo de estratificación en intrusiones máficas-ultramáficas?",
          de: "Welche Prozesse kontrollieren die Entwicklung von Schichtung in mafisch-ultramafischen Intrusionen?",
          nl: "Welke processen controleren de ontwikkeling van gelaagdheid in mafische-ultramafische intrusies?"
        },
        options: [
          { en: "Fractional crystallization, magma replenishment, compaction, and convective sorting of crystals", es: "Cristalización fraccionada, reabastecimiento de magma, compactación y clasificación convectiva de cristales", de: "Fraktionierte Kristallisation, Magma-Nachschub, Kompaktion und konvektive Sortierung von Kristallen", nl: "Fractionele kristallisatie, magma aanvulling, compactie en convectieve sortering van kristallen" },
          { en: "Only gravitational settling controls layering", es: "Solo sedimentación gravitacional controla estratificación", de: "Nur gravitationale Sedimentation kontrolliert Schichtung", nl: "Alleen gravitationele bezinking controleert gelaagdheid" },
          { en: "Layering forms randomly without systematic processes", es: "Estratificación se forma aleatoriamente sin procesos sistemáticos", de: "Schichtung bildet sich zufällig ohne systematische Prozesse", nl: "Gelaagdheid vormt willekeurig zonder systematische processen" },
          { en: "External tectonic forces create all layering", es: "Fuerzas tectónicas externas crean toda estratificación", de: "Externe tektonische Kräfte schaffen alle Schichtung", nl: "Externe tektonische krachten creëren alle gelaagdheid" }
        ],
        correct: 0,
        explanation: {
          en: "Layered intrusion development involves multiple processes: fractional crystallization creates compositional variations, magma replenishment introduces new thermal and chemical gradients, crystal settling and flotation produce density-controlled layering, compaction expels intercumulus liquid creating adcumulate textures, and convective processes sort crystals by size and density, creating rhythmic layering patterns observed in complexes like Bushveld and Stillwater.",
          es: "Desarrollo de intrusión estratificada involucra múltiples procesos: cristalización fraccionada crea variaciones composicionales, reabastecimiento de magma introduce nuevos gradientes térmicos y químicos, sedimentación y flotación de cristales produce estratificación controlada por densidad, compactación expulsa líquido intercúmulo creando texturas adcumuladas, y procesos convectivos clasifican cristales por tamaño y densidad, creando patrones de estratificación rítmica observados en complejos como Bushveld y Stillwater.",
          de: "Entwicklung geschichteter Intrusionen umfasst multiple Prozesse: fraktionierte Kristallisation schafft kompositionelle Variationen, Magma-Nachschub führt neue thermische und chemische Gradienten ein, Kristallsedimentation und -auftrieb produzieren dichtegesteuerte Schichtung, Kompaktion treibt Interkumulusflüssigkeit aus und schafft Adkumulattexturen, und konvektive Prozesse sortieren Kristalle nach Größe und Dichte, was rhythmische Schichtungsmuster schafft, die in Komplexen wie Bushveld und Stillwater beobachtet werden.",
          nl: "Gelaagde intrusie ontwikkeling behelst meerdere processen: fractionele kristallisatie creëert compositionele variaties, magma aanvulling introduceert nieuwe thermische en chemische gradiënten, kristal bezinking en drijving produceren dichtheid-gecontroleerde gelaagdheid, compactie drijft intercumulus vloeistof uit en creëert adcumulaat texturen, en convectieve processen sorteren kristallen op grootte en dichtheid, ritmische gelaagdheids patronen creërend die waargenomen worden in complexen zoals Bushveld en Stillwater."
        }
      },
      {
        question: {
          en: "How do amphibole compositions record magmatic evolution and volatile content?",
          es: "¿Cómo las composiciones de anfíbol registran evolución magmática y contenido volátil?",
          de: "Wie dokumentieren Amphibolzusammensetzungen magmatische Evolution und Volatilgehalt?",
          nl: "Hoe registreren amfibool samenstellingen magmatische evolutie en vluchtig gehalte?"
        },
        options: [
          { en: "Al content, Ti substitution, and F/Cl ratios reflect crystallization pressure, temperature, and melt volatile chemistry", es: "Contenido Al, sustitución Ti y proporciones F/Cl reflejan presión de cristalización, temperatura y química volátil de fundido", de: "Al-Gehalt, Ti-Substitution und F/Cl-Verhältnisse reflektieren Kristallisationsdruck, Temperatur und Schmelzvolatilchemie", nl: "Al gehalte, Ti substitutie en F/Cl verhoudingen reflecteren kristallisatie druk, temperatuur en smelt vluchtige chemie" },
          { en: "All amphiboles have identical composition", es: "Todos los anfíboles tienen composición idéntica", de: "Alle Amphibole haben identische Zusammensetzung", nl: "Alle amfibolen hebben identieke samenstelling" },
          { en: "Amphibole composition is unrelated to magmatic conditions", es: "Composición de anfíbol no está relacionada con condiciones magmáticas", de: "Amphibolzusammensetzung steht nicht mit magmatischen Bedingungen in Verbindung", nl: "Amfibool samenstelling is niet gerelateerd aan magmatische condities" },
          { en: "Only major elements matter in amphibole chemistry", es: "Solo elementos mayores importan en química de anfíbol", de: "Nur Hauptelemente sind wichtig in Amphibolchemie", nl: "Alleen hoofdelementen zijn belangrijk in amfibool chemie" }
        ],
        correct: 0,
        explanation: {
          en: "Amphibole chemistry provides detailed magmatic records: high Al content indicates high-pressure crystallization, Ti substitution reflects temperature and oxygen fugacity, F/Cl ratios record melt volatile evolution, Mg# tracks fractional crystallization, and trace element patterns (especially REE) constrain melt composition and differentiation processes. Amphibole stability requires H2O-rich conditions, making it a sensitive indicator of magma hydration state.",
          es: "Química de anfíbol proporciona registros magmáticos detallados: alto contenido Al indica cristalización de alta presión, sustitución Ti refleja temperatura y fugacidad de oxígeno, proporciones F/Cl registran evolución volátil de fundido, Mg# rastrea cristalización fraccionada, y patrones de elementos traza (especialmente REE) restringen composición de fundido y procesos de diferenciación. Estabilidad de anfíbol requiere condiciones ricas en H2O, haciéndolo indicador sensible de estado de hidratación de magma.",
          de: "Amphibolchemie liefert detaillierte magmatische Aufzeichnungen: hoher Al-Gehalt zeigt Hochdruckkristallisation an, Ti-Substitution reflektiert Temperatur und Sauerstofffugazität, F/Cl-Verhältnisse dokumentieren Schmelzvolatilentwicklung, Mg# verfolgt fraktionierte Kristallisation, und Spurenelementmuster (besonders REE) beschränken Schmelzzusammensetzung und Differenzierungsprozesse. Amphibolstabilität erfordert H2O-reiche Bedingungen, was es zu einem sensitiven Indikator für Magmahydratationszustand macht.",
          nl: "Amfibool chemie biedt gedetailleerde magmatische records: hoog Al gehalte geeft hoge-druk kristallisatie aan, Ti substitutie reflecteert temperatuur en zuurstofffugaciteit, F/Cl verhoudingen registreren smelt vluchtige evolutie, Mg# volgt fractionele kristallisatie, en sporenelement patronen (vooral REE) beperken smelt samenstelling en differentiatie processen. Amfibool stabiliteit vereist H2O-rijke condities, het tot een gevoelige indicator van magma hydratatie staat makend."
        }
      },
      {
        question: {
          en: "What controls nucleation kinetics and crystal size distribution in volcanic glasses?",
          es: "¿Qué controla cinética de nucleación y distribución de tamaño de cristales en vidrios volcánicos?",
          de: "Was kontrolliert Nukleationskinetik und Kristallgrößenverteilung in vulkanischen Gläsern?",
          nl: "Wat controleert nucleatie kinetiek en kristal grootte distributie in vulkanische glazen?"
        },
        options: [
          { en: "Undercooling degree, interfacial energy, diffusion rates, and nucleation site availability control crystal populations", es: "Grado de subenfriamiento, energía interfacial, tasas de difusión y disponibilidad de sitios de nucleación controlan poblaciones de cristales", de: "Unterkühlungsgrad, Grenzflächenenergie, Diffusionsraten und Nukleationsstellen-Verfügbarkeit kontrollieren Kristallpopulationen", nl: "Onderkoeling graad, grensvlak energie, diffusie snelheden en nucleatie site beschikbaarheid controleren kristal populaties" },
          { en: "All crystals nucleate simultaneously", es: "Todos los cristales nuclean simultáneamente", de: "Alle Kristalle nukleieren gleichzeitig", nl: "Alle kristallen nucleëren gelijktijdig" },
          { en: "Crystal size is completely random", es: "Tamaño de cristal es completamente aleatorio", de: "Kristallgröße ist völlig zufällig", nl: "Kristal grootte is volledig willekeurig" },
          { en: "Only temperature affects crystal nucleation", es: "Solo temperatura afecta nucleación de cristales", de: "Nur Temperatur beeinflusst Kristallnukleation", nl: "Alleen temperatuur beïnvloedt kristal nucleatie" }
        ],
        correct: 0,
        explanation: {
          en: "Crystal nucleation and growth in volcanic glasses follow classical nucleation theory: high undercooling promotes nucleation over growth, creating many small crystals, low interfacial energies favor heterogeneous nucleation on existing surfaces, diffusion-limited growth produces size distributions following power laws, and nucleation site density determines final crystal populations. Quench rates control which regime dominates, affecting final textures and crystal size distributions in volcanic rocks.",
          es: "Nucleación y crecimiento de cristales en vidrios volcánicos sigue teoría clásica de nucleación: alto subenfriamiento promueve nucleación sobre crecimiento, creando muchos cristales pequeños, bajas energías interfaciales favorecen nucleación heterogénea en superficies existentes, crecimiento limitado por difusión produce distribuciones de tamaño siguiendo leyes de potencia, y densidad de sitios de nucleación determina poblaciones finales de cristales. Tasas de temple controlan qué régimen domina, afectando texturas finales y distribuciones de tamaño de cristales en rocas volcánicas.",
          de: "Kristallnukleation und -wachstum in vulkanischen Gläsern folgen klassischer Nukleationstheorie: hohe Unterkühlung fördert Nukleation über Wachstum und schafft viele kleine Kristalle, niedrige Grenzflächenenergien begünstigen heterogene Nukleation auf existierenden Oberflächen, diffusionsbegrenztes Wachstum produziert Größenverteilungen nach Potenzgesetzen, und Nukleationsstellen-Dichte bestimmt finale Kristallpopulationen. Abschreckraten kontrollieren, welches Regime dominiert, und beeinflussen finale Texturen und Kristallgrößenverteilungen in vulkanischen Gesteinen.",
          nl: "Kristal nucleatie en groei in vulkanische glazen volgen klassieke nucleatie theorie: hoge onderkoeling bevordert nucleatie boven groei, vele kleine kristallen creërend, lage grensvlak energieën bevoordelen heterogene nucleatie op bestaande oppervlakken, diffusie-gelimiteerde groei produceert grootte distributies die macht wetten volgen, en nucleatie site dichtheid bepaalt finale kristal populaties. Afschrik snelheden controleren welk regime domineert, finale texturen en kristal grootte distributies in vulkanische gesteenten beïnvloedend."
        }
      },
      {
        question: {
          en: "How do olivine-hosted melt inclusions preserve pre-eruptive magmatic conditions?",
          es: "¿Cómo las inclusiones de fundido hospedadas en olivino preservan condiciones magmáticas pre-eruptivas?",
          de: "Wie bewahren olivin-gehostete Schmelzeinschlüsse prä-eruptive magmatische Bedingungen?",
          nl: "Hoe behouden olivijn-geherbergde smelt insluitsels pre-eruptieve magmatische condities?"
        },
        options: [
          { en: "Rapid olivine growth traps primitive melt compositions before degassing and crystallization", es: "Crecimiento rápido de olivino atrapa composiciones de fundido primitivas antes de desgasificación y cristalización", de: "Schnelles Olivinwachstum fängt primitive Schmelzzusammensetzungen vor Entgasung und Kristallisation ein", nl: "Snelle olivijn groei vangt primitieve smelt samenstellingen voor ontgassing en kristallisatie" },
          { en: "Melt inclusions form during eruption only", es: "Inclusiones de fundido se forman solo durante erupción", de: "Schmelzeinschlüsse bilden sich nur während Eruption", nl: "Smelt insluitsels vormen alleen tijdens eruptie" },
          { en: "All melt inclusions are contaminated", es: "Todas las inclusiones de fundido están contaminadas", de: "Alle Schmelzeinschlüsse sind kontaminiert", nl: "Alle smelt insluitsels zijn gecontamineerd" },
          { en: "Inclusions only record surface conditions", es: "Inclusiones solo registran condiciones superficiales", de: "Einschlüsse dokumentieren nur Oberflächenbedingungen", nl: "Insluitsels registreren alleen oppervlakte condities" }
        ],
        correct: 0,
        explanation: {
          en: "Olivine-hosted melt inclusions provide unique windows into deep magmatic processes by preserving primitive melt compositions: fast olivine crystallization encapsulates melt before significant degassing or fractionation, inclusions retain original volatile contents (CO2, H2O, S, Cl), major and trace element compositions reflect source characteristics and early differentiation, and high-pressure phases may be preserved, allowing reconstruction of pre-eruptive storage conditions and magma evolution pathways.",
          es: "Inclusiones de fundido hospedadas en olivino proporcionan ventanas únicas a procesos magmáticos profundos preservando composiciones de fundido primitivas: cristalización rápida de olivino encapsula fundido antes de desgasificación o fraccionamiento significativo, inclusiones retienen contenidos volátiles originales (CO2, H2O, S, Cl), composiciones de elementos mayores y traza reflejan características de fuente y diferenciación temprana, y fases de alta presión pueden preservarse, permitiendo reconstrucción de condiciones de almacenamiento pre-eruptivas y rutas de evolución de magma.",
          de: "Olivin-gehostete Schmelzeinschlüsse bieten einzigartige Fenster in tiefe magmatische Prozesse durch Bewahrung primitiver Schmelzzusammensetzungen: schnelle Olivinkristallisation kapselt Schmelze vor signifikanter Entgasung oder Fraktionierung ein, Einschlüsse behalten ursprüngliche Volatilgehalte (CO2, H2O, S, Cl), Haupt- und Spurenelementzusammensetzungen reflektieren Quellcharakteristika und frühe Differenzierung, und Hochdruckphasen können bewahrt werden, was Rekonstruktion prä-eruptiver Speicherbedingungen und Magmaevolutionspfade ermöglicht.",
          nl: "Olivijn-geherbergde smelt insluitsels bieden unieke vensters in diepe magmatische processen door primitieve smelt samenstellingen te behouden: snelle olivijn kristallisatie kapselt smelt in voor significante ontgassing of fractionering, insluitsels behouden originele vluchtige gehaltes (CO2, H2O, S, Cl), hoofd- en sporenelement samenstellingen reflecteren bron karakteristieken en vroege differentiatie, en hoge-druk fasen kunnen bewaard worden, reconstructie van pre-eruptieve opslag condities en magma evolutie paden toelatend."
        }
      },
      {
        question: {
          en: "What controls the rheological transition from effusive to explosive volcanic eruptions?",
          es: "¿Qué controla la transición reológica de erupciones volcánicas efusivas a explosivas?",
          de: "Was kontrolliert den rheologischen Übergang von effusiven zu explosiven vulkanischen Eruptionen?",
          nl: "Wat controleert de rheologische overgang van effusieve naar explosieve vulkanische erupties?"
        },
        options: [
          { en: "Magma viscosity, gas content, ascent rate, and conduit geometry determine eruption style transitions", es: "Viscosidad de magma, contenido de gas, tasa de ascenso y geometría de conducto determinan transiciones de estilo de erupción", de: "Magmaviskosität, Gasgehalt, Aufstiegsrate und Schlotgeometrie bestimmen Eruptionsstilübergänge", nl: "Magma viscositeit, gas gehalte, opstijging snelheid en leiding geometrie bepalen eruptie stijl overgangen" },
          { en: "Only magma temperature controls eruption style", es: "Solo temperatura de magma controla estilo de erupción", de: "Nur Magmatemperatur kontrolliert Eruptionsstil", nl: "Alleen magma temperatuur controleert eruptie stijl" },
          { en: "Eruption style is completely random", es: "Estilo de erupción es completamente aleatorio", de: "Eruptionsstil ist völlig zufällig", nl: "Eruptie stijl is volledig willekeurig" },
          { en: "External factors alone determine explosive potential", es: "Solo factores externos determinan potencial explosivo", de: "Nur externe Faktoren bestimmen explosives Potenzial", nl: "Alleen externe factoren bepalen explosief potentieel" }
        ],
        correct: 0,
        explanation: {
          en: "Eruption style transitions depend on complex interactions: high viscosity magmas trap gas bubbles leading to overpressure and explosive eruptions, rapid ascent rates prevent efficient degassing promoting explosivity, conduit geometry affects gas escape and magma acceleration, volatile saturation and bubble nucleation control gas expansion rates, and critical gas volume fractions (~75%) mark transitions from effusive to explosive behavior. These factors combine to determine whether magma fragments or flows.",
          es: "Transiciones de estilo de erupción dependen de interacciones complejas: magmas de alta viscosidad atrapan burbujas de gas llevando a sobrepresión y erupciones explosivas, tasas rápidas de ascenso previenen desgasificación eficiente promoviendo explosividad, geometría de conducto afecta escape de gas y aceleración de magma, saturación volátil y nucleación de burbujas controlan tasas de expansión de gas, y fracciones volúmenes críticas de gas (~75%) marcan transiciones de comportamiento efusivo a explosivo. Estos factores se combinan para determinar si magma se fragmenta o fluye.",
          de: "Eruptionsstilübergänge hängen von komplexen Wechselwirkungen ab: hochviskose Magmen fangen Gasblasen ein, was zu Überdruck und explosiven Eruptionen führt, schnelle Aufstiegsraten verhindern effiziente Entgasung und fördern Explosivität, Schlotgeometrie beeinflusst Gasentweichen und Magmabeschleunigung, Volatilsättigung und Blasennukleation kontrollieren Gasexpansionsraten, und kritische Gasvolumenfraktionen (~75%) markieren Übergänge von effusivem zu explosivem Verhalten. Diese Faktoren kombinieren sich, um zu bestimmen, ob Magma fragmentiert oder fließt.",
          nl: "Eruptie stijl overgangen hangen af van complexe interacties: hoge viscositeit magma's vangen gas bellen wat leidt tot overdruk en explosieve erupties, snelle opstijging snelheden voorkomen efficiënte ontgassing explosiviteit bevorderend, leiding geometrie beïnvloedt gas ontsnapping en magma versnelling, vluchtige verzadiging en bel nucleatie controleren gas expansie snelheden, en kritische gas volume fracties (~75%) markeren overgangen van effusief naar explosief gedrag. Deze factoren combineren om te bepalen of magma fragmenteert of stroomt."
        }
      },
      {
        question: {
          en: "How do spinel-group minerals record oxygen fugacity evolution in mafic magmatic systems?",
          es: "¿Cómo los minerales del grupo espinela registran evolución de fugacidad de oxígeno en sistemas magmáticos máficos?",
          de: "Wie dokumentieren Spinell-Gruppenminerale die Sauerstofffugacitätsentwicklung in mafischen magmatischen Systemen?",
          nl: "Hoe registreren spinel-groep mineralen zuurstof fugaciteit evolutie in mafische magmatische systemen?"
        },
        options: [
          { en: "Fe3+/Fe2+ ratios in chromite and magnetite reflect changing oxygen fugacity during crystallization", es: "Proporciones Fe3+/Fe2+ en cromita y magnetita reflejan fugacidad de oxígeno cambiante durante cristalización", de: "Fe3+/Fe2+-Verhältnisse in Chromit und Magnetit reflektieren sich ändernde Sauerstofffugacität während Kristallisation", nl: "Fe3+/Fe2+ verhoudingen in chromiet en magnetiet reflecteren veranderende zuurstof fugaciteit tijdens kristallisatie" },
          { en: "All spinels have identical oxidation states", es: "Todas las espinelas tienen estados de oxidación idénticos", de: "Alle Spinelle haben identische Oxidationszustände", nl: "Alle spinels hebben identieke oxidatie toestanden" },
          { en: "Spinel composition is unrelated to oxygen fugacity", es: "Composición de espinela no está relacionada con fugacidad de oxígeno", de: "Spinellzusammensetzung steht nicht mit Sauerstofffugacität in Verbindung", nl: "Spinel samenstelling is niet gerelateerd aan zuurstof fugaciteit" },
          { en: "Only temperature affects spinel chemistry", es: "Solo temperatura afecta química de espinela", de: "Nur Temperatur beeinflusst Spinellchemie", nl: "Alleen temperatuur beïnvloedt spinel chemie" }
        ],
        correct: 0,
        explanation: {
          en: "Spinel-group minerals are sensitive oxygen fugacity indicators: chromite Fe3+/Fe2+ ratios increase with oxygen fugacity, reflecting equilibrium with coexisting phases, magnetite-ulvöspinel exsolution textures record cooling and oxygen fugacity paths, Cr-spinel compositions track redox evolution during fractional crystallization, and V partitioning between spinels and melt depends strongly on oxidation state. These features make spinels powerful tools for reconstructing magmatic redox evolution.",
          es: "Minerales del grupo espinela son indicadores sensibles de fugacidad de oxígeno: proporciones Fe3+/Fe2+ de cromita aumentan con fugacidad de oxígeno, reflejando equilibrio con fases coexistentes, texturas de exsolución magnetita-ulvöespinela registran rutas de enfriamiento y fugacidad de oxígeno, composiciones Cr-espinela rastrean evolución redox durante cristalización fraccionada, y partición V entre espinelas y fundido depende fuertemente de estado de oxidación. Estas características hacen espinelas herramientas poderosas para reconstruir evolución redox magmática.",
          de: "Spinell-Gruppenminerale sind sensitive Sauerstofffugacitätsindikatoren: Chromit Fe3+/Fe2+-Verhältnisse steigen mit Sauerstofffugacität und reflektieren Gleichgewicht mit koexistierenden Phasen, Magnetit-Ulvöspinell-Entmischungstexturen dokumentieren Abkühlung und Sauerstofffugacitätspfade, Cr-Spinell-Zusammensetzungen verfolgen Redoxentwicklung während fraktionierter Kristallisation, und V-Verteilung zwischen Spinellen und Schmelze hängt stark vom Oxidationszustand ab. Diese Eigenschaften machen Spinelle zu mächtigen Werkzeugen zur Rekonstruktion magmatischer Redoxentwicklung.",
          nl: "Spinel-groep mineralen zijn gevoelige zuurstof fugaciteit indicatoren: chromiet Fe3+/Fe2+ verhoudingen stijgen met zuurstof fugaciteit, evenwicht met coexisterende fasen reflecterend, magnetiet-ulvöspinel ontmengings texturen registreren afkoeling en zuurstof fugaciteit paden, Cr-spinel samenstellingen volgen redox evolutie tijdens fractionele kristallisatie, en V verdeling tussen spinels en smelt hangt sterk af van oxidatie toestand. Deze eigenschappen maken spinels krachtige instrumenten voor reconstructie van magmatische redox evolutie."
        }
      },
      {
        question: {
          en: "What processes control the formation of pegmatitic segregations in mafic-ultramafic intrusions?",
          es: "¿Qué procesos controlan formación de segregaciones pegmatíticas en intrusiones máficas-ultramáficas?",
          de: "Welche Prozesse kontrollieren die Bildung pegmatitischer Segregationen in mafisch-ultramafischen Intrusionen?",
          nl: "Welke processen controleren de vorming van pegmatitische segregaties in mafische-ultramafische intrusies?"
        },
        options: [
          { en: "Late-stage melt segregation, volatile exsolution, and filter pressing of intercumulus liquids", es: "Segregación de fundido de etapa tardía, exsolución volátil y prensado por filtro de líquidos intercúmulo", de: "Spätstadium-Schmelzsegregation, Volatilexsolution und Filterpressung von Interkumulusflüssigkeiten", nl: "Late-stadium smelt segregatie, vluchtige exsolutie en filter persen van intercumulus vloeistoffen" },
          { en: "Pegmatites form randomly in all rock types", es: "Pegmatitas se forman aleatoriamente en todos tipos de roca", de: "Pegmatite bilden sich zufällig in allen Gesteinstypen", nl: "Pegmatieten vormen willekeurig in alle gesteente types" },
          { en: "External hydrothermal fluids create all pegmatites", es: "Fluidos hidrotermales externos crean todas las pegmatitas", de: "Externe hydrothermale Fluide schaffen alle Pegmatite", nl: "Externe hydrothermale vloeistoffen creëren alle pegmatieten" },
          { en: "Only tectonic processes form pegmatitic textures", es: "Solo procesos tectónicos forman texturas pegmatíticas", de: "Nur tektonische Prozesse bilden pegmatitische Texturen", nl: "Alleen tektonische processen vormen pegmatitische texturen" }
        ],
        correct: 0,
        explanation: {
          en: "Pegmatitic segregations in mafic-ultramafic intrusions form through several mechanisms: fractional crystallization concentrates incompatible elements and volatiles in residual melts, compaction and filter pressing expel evolved intercumulus liquids, volatile saturation reduces nucleation density allowing larger crystal growth, and late-stage melt migration into fractures or low-pressure zones creates coarse-grained assemblages. These processes concentrate rare elements and create distinctive textures in layered intrusions.",
          es: "Segregaciones pegmatíticas en intrusiones máficas-ultramáficas se forman a través de varios mecanismos: cristalización fraccionada concentra elementos incompatibles y volátiles en fundidos residuales, compactación y prensado por filtro expulsan líquidos intercúmulo evolucionados, saturación volátil reduce densidad de nucleación permitiendo crecimiento de cristales más grandes, y migración de fundido de etapa tardía a fracturas o zonas de baja presión crea ensamblajes de grano grueso. Estos procesos concentran elementos raros y crean texturas distintivas en intrusiones estratificadas.",
          de: "Pegmatitische Segregationen in mafisch-ultramafischen Intrusionen bilden sich durch mehrere Mechanismen: fraktionierte Kristallisation konzentriert inkompatible Elemente und Volatile in Restschmelzen, Kompaktion und Filterpressung treiben entwickelte Interkumulusflüssigkeiten aus, Volatilsättigung reduziert Nukleationsdichte und ermöglicht größeres Kristallwachstum, und Spätstadium-Schmelzmigration in Risse oder Niederdruckzonen schafft grobkörnige Assemblages. Diese Prozesse konzentrieren seltene Elemente und schaffen charakteristische Texturen in geschichteten Intrusionen.",
          nl: "Pegmatitische segregaties in mafische-ultramafische intrusies vormen door verschillende mechanismen: fractionele kristallisatie concentreert incompatibele elementen en vluchtige stoffen in residuele smelten, compactie en filter persen drijven geëvolueerde intercumulus vloeistoffen uit, vluchtige verzadiging reduceert nucleatie dichtheid grotere kristal groei toelatend, en late-stadium smelt migratie in breuken of lage-druk zones creëert grof-korrelige assemblages. Deze processen concentreren zeldzame elementen en creëren onderscheidende texturen in gelaagde intrusies."
        }
      },
      {
        question: {
          en: "How do trace element signatures in volcanic apatite record magmatic differentiation processes?",
          es: "¿Cómo las firmas de elementos traza en apatito volcánico registran procesos de diferenciación magmática?",
          de: "Wie dokumentieren Spurenelementsignaturen in vulkanischem Apatit magmatische Differenzierungsprozesse?",
          nl: "Hoe registreren sporenelement signaturen in vulkanisch apatiet magmatische differentiatie processen?"
        },
        options: [
          { en: "REE patterns, Sr/Y ratios, and volatile contents (F, Cl, OH) track melt evolution and crystallization history", es: "Patrones REE, proporciones Sr/Y y contenidos volátiles (F, Cl, OH) rastrean evolución de fundido e historia de cristalización", de: "REE-Muster, Sr/Y-Verhältnisse und Volatilgehalte (F, Cl, OH) verfolgen Schmelzentwicklung und Kristallisationsgeschichte", nl: "REE patronen, Sr/Y verhoudingen en vluchtige gehaltes (F, Cl, OH) volgen smelt evolutie en kristallisatie geschiedenis" },
          { en: "All apatites have identical trace element patterns", es: "Todos los apatitos tienen patrones de elementos traza idénticos", de: "Alle Apatite haben identische Spurenelementmuster", nl: "Alle apatieten hebben identieke sporenelement patronen" },
          { en: "Apatite chemistry is unrelated to magmatic processes", es: "Química de apatito no está relacionada con procesos magmáticos", de: "Apatitchemie steht nicht mit magmatischen Prozessen in Verbindung", nl: "Apatiet chemie is niet gerelateerd aan magmatische processen" },
          { en: "Only major elements matter in apatite", es: "Solo elementos mayores importan en apatito", de: "Nur Hauptelemente sind wichtig in Apatit", nl: "Alleen hoofdelementen zijn belangrijk in apatiet" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic apatite preserves detailed records of magmatic differentiation: REE patterns reflect coexisting mineral assemblages and degree of fractionation, high Sr/Y ratios indicate plagioclase suppression at high pressure or water content, F/Cl ratios track volatile evolution and degassing, LREE/HREE ratios constrain amphibole or garnet fractionation, and Eu anomalies record feldspar crystallization. These signatures make apatite a powerful petrogenetic indicator for reconstructing magmatic processes.",
          es: "Apatito volcánico preserva registros detallados de diferenciación magmática: patrones REE reflejan ensamblajes minerales coexistentes y grado de fraccionamiento, altas proporciones Sr/Y indican supresión de plagioclasa a alta presión o contenido de agua, proporciones F/Cl rastrean evolución volátil y desgasificación, proporciones LREE/HREE restringen fraccionamiento de anfíbol o granate, y anomalías Eu registran cristalización de feldespato. Estas firmas hacen apatito un indicador petrogenético poderoso para reconstruir procesos magmáticos.",
          de: "Vulkanischer Apatit bewahrt detaillierte Aufzeichnungen magmatischer Differenzierung: REE-Muster reflektieren koexistierende Mineralassemblages und Fraktionierungsgrad, hohe Sr/Y-Verhältnisse zeigen Plagioklas-Unterdrückung bei hohem Druck oder Wassergehalt an, F/Cl-Verhältnisse verfolgen Volatilentwicklung und Entgasung, LREE/HREE-Verhältnisse beschränken Amphibol- oder Granat-Fraktionierung, und Eu-Anomalien dokumentieren Feldspat-Kristallisation. Diese Signaturen machen Apatit zu einem mächtigen petrogenetischen Indikator zur Rekonstruktion magmatischer Prozesse.",
          nl: "Vulkanisch apatiet behoudt gedetailleerde records van magmatische differentiatie: REE patronen reflecteren coexisterende mineraal assemblages en mate van fractionering, hoge Sr/Y verhoudingen geven plagioklaas onderdrukking bij hoge druk of water gehalte aan, F/Cl verhoudingen volgen vluchtige evolutie en ontgassing, LREE/HREE verhoudingen beperken amfibool of granaat fractionering, en Eu anomalieën registreren veldspaat kristallisatie. Deze signaturen maken apatiet een krachtige petrogenetische indicator voor reconstructie van magmatische processen."
        }
      },
      {
        question: {
          en: "What controls the stability and composition of Fe-Ti oxide phases in mafic magmatic systems?",
          es: "¿Qué controla estabilidad y composición de fases óxido Fe-Ti en sistemas magmáticos máficos?",
          de: "Was kontrolliert Stabilität und Zusammensetzung von Fe-Ti-Oxidphasen in mafischen magmatischen Systemen?",
          nl: "Wat controleert stabiliteit en samenstelling van Fe-Ti oxide fasen in mafische magmatische systemen?"
        },
        options: [
          { en: "Temperature, oxygen fugacity, TiO2 activity, and silicate melt composition control oxide phase relations", es: "Temperatura, fugacidad de oxígeno, actividad TiO2 y composición de fundido silicato controlan relaciones de fases óxido", de: "Temperatur, Sauerstofffugacität, TiO2-Aktivität und Silikatschmelzzusammensetzung kontrollieren Oxidphasenbeziehungen", nl: "Temperatuur, zuurstof fugaciteit, TiO2 activiteit en silicaat smelt samenstelling controleren oxide fase relaties" },
          { en: "All Fe-Ti oxides have fixed compositions", es: "Todos los óxidos Fe-Ti tienen composiciones fijas", de: "Alle Fe-Ti-Oxide haben feste Zusammensetzungen", nl: "Alle Fe-Ti oxides hebben vaste samenstellingen" },
          { en: "Only pressure affects oxide stability", es: "Solo presión afecta estabilidad de óxido", de: "Nur Druck beeinflusst Oxidstabilität", nl: "Alleen druk beïnvloedt oxide stabiliteit" },
          { en: "Oxide composition is independent of host magma", es: "Composición de óxido es independiente de magma huésped", de: "Oxidzusammensetzung ist unabhängig von Wirtsmagma", nl: "Oxide samenstelling is onafhankelijk van gast magma" }
        ],
        correct: 0,
        explanation: {
          en: "Fe-Ti oxide stability and composition depend on multiple factors: temperature controls the stability field of magnetite vs. ilmenite, oxygen fugacity determines Fe3+/Fe2+ ratios and controls ulvöspinel-magnetite solid solutions, TiO2 activity in silicate melt affects Ti partitioning into oxides, melt composition influences oxide-melt equilibria through structural controls, and cooling rate determines exsolution textures and final oxide assemblages in slowly cooled intrusions.",
          es: "Estabilidad y composición de óxido Fe-Ti dependen de múltiples factores: temperatura controla campo de estabilidad de magnetita vs. ilmenita, fugacidad de oxígeno determina proporciones Fe3+/Fe2+ y controla soluciones sólidas ulvöespinela-magnetita, actividad TiO2 en fundido silicato afecta partición Ti en óxidos, composición de fundido influye equilibrios óxido-fundido a través de controles estructurales, y tasa de enfriamiento determina texturas de exsolución y ensamblajes óxido finales en intrusiones enfriadas lentamente.",
          de: "Fe-Ti-Oxidstabilität und -zusammensetzung hängen von mehreren Faktoren ab: Temperatur kontrolliert das Stabilitätsfeld von Magnetit vs. Ilmenit, Sauerstofffugacität bestimmt Fe3+/Fe2+-Verhältnisse und kontrolliert Ulvöspinell-Magnetit-Mischkristalle, TiO2-Aktivität in Silikatschmelze beeinflusst Ti-Verteilung in Oxide, Schmelzzusammensetzung beeinflusst Oxid-Schmelz-Gleichgewichte durch strukturelle Kontrollen, und Abkühlungsrate bestimmt Entmischungstexturen und finale Oxidassemblages in langsam abgekühlten Intrusionen.",
          nl: "Fe-Ti oxide stabiliteit en samenstelling hangen af van meerdere factoren: temperatuur controleert het stabiliteitsveld van magnetiet vs. ilmeniet, zuurstof fugaciteit bepaalt Fe3+/Fe2+ verhoudingen en controleert ulvöspinel-magnetiet vaste oplossingen, TiO2 activiteit in silicaat smelt beïnvloedt Ti verdeling in oxides, smelt samenstelling beïnvloedt oxide-smelt evenwichten door structurele controles, en afkoeling snelheid bepaalt exsolutie texturen en finale oxide assemblages in langzaam afgekoelde intrusies."
        }
      },
      {
        question: {
          en: "How do pyroxene exsolution textures record cooling history in mafic intrusions?",
          es: "¿Cómo las texturas de exsolución de piroxeno registran historia de enfriamiento en intrusiones máficas?",
          de: "Wie dokumentieren Pyroxen-Entmischungstexturen die Abkühlungsgeschichte in mafischen Intrusionen?",
          nl: "Hoe registreren pyroxeen exsolutie texturen afkoelingsgeschiedenis in mafische intrusies?"
        },
        options: [
          { en: "Lamellae spacing and composition reflect cooling rate and temperature-time paths through the miscibility gap", es: "Espaciamiento y composición de lamelas reflejan tasa de enfriamiento y rutas temperatura-tiempo a través de brecha de miscibilidad", de: "Lamellenabstand und -zusammensetzung reflektieren Abkühlungsrate und Temperatur-Zeit-Pfade durch die Mischbarkeitslücke", nl: "Lamellen afstand en samenstelling reflecteren afkoeling snelheid en temperatuur-tijd paden door de mengbaarheids opening" },
          { en: "All pyroxenes have identical exsolution patterns", es: "Todos los piroxenos tienen patrones de exsolución idénticos", de: "Alle Pyroxene haben identische Entmischungsmuster", nl: "Alle pyroxenen hebben identieke exsolutie patronen" },
          { en: "Exsolution textures form randomly", es: "Texturas de exsolución se forman aleatoriamente", de: "Entmischungstexturen bilden sich zufällig", nl: "Exsolutie texturen vormen willekeurig" },
          { en: "Only pressure controls pyroxene exsolution", es: "Solo presión controla exsolución de piroxeno", de: "Nur Druck kontrolliert Pyroxen-Entmischung", nl: "Alleen druk controleert pyroxeen exsolutie" }
        ],
        correct: 0,
        explanation: {
          en: "Pyroxene exsolution textures provide quantitative cooling rate indicators: fine lamellae indicate rapid cooling preserving metastable compositions, coarse exsolution suggests slow cooling allowing equilibration, augite-pigeonite relationships record intermediate cooling rates, and Ca-rich/Ca-poor pyroxene compositions reflect temperature-dependent miscibility gaps. These features make pyroxenes valuable geospeedometers for reconstructing thermal histories of intrusions.",
          es: "Texturas de exsolución de piroxeno proporcionan indicadores cuantitativos de tasa de enfriamiento: lamelas finas indican enfriamiento rápido preservando composiciones metaestables, exsolución gruesa sugiere enfriamiento lento permitiendo equilibración, relaciones augita-pigeonita registran tasas de enfriamiento intermedias, y composiciones de piroxeno ricas/pobres en Ca reflejan brechas de miscibilidad dependientes de temperatura. Estas características hacen piroxenos velocímetros geológicos valiosos para reconstruir historias térmicas de intrusiones.",
          de: "Pyroxen-Entmischungstexturen liefern quantitative Abkühlungsraten-Indikatoren: feine Lamellen zeigen schnelle Abkühlung an, die metastabile Zusammensetzungen bewahrt, grobe Entmischung deutet auf langsame Abkühlung hin, die Equilibration ermöglicht, Augit-Pigeonit-Beziehungen dokumentieren mittlere Abkühlungsraten, und Ca-reiche/Ca-arme Pyroxenzusammensetzungen reflektieren temperaturabhängige Mischbarkeitslücken. Diese Eigenschaften machen Pyroxene zu wertvollen Geospeedometern zur Rekonstruktion thermischer Geschichten von Intrusionen.",
          nl: "Pyroxeen exsolutie texturen bieden kwantitatieve afkoeling snelheid indicatoren: fijne lamellen geven snelle afkoeling aan die metastabiele samenstellingen behoudt, grove exsolutie suggereert langzame afkoeling die equilibratie toelaat, augiet-pigeoniet relaties registreren tussenliggende afkoeling snelheden, en Ca-rijke/Ca-arme pyroxeen samenstellingen reflecteren temperatuur-afhankelijke mengbaarheids openingen. Deze eigenschappen maken pyroxenen waardevolle geospeedometers voor reconstructie van thermische geschiedenissen van intrusies."
        }
      },
      {
        question: {
          en: "What controls the partitioning of chalcophile elements between sulfide and silicate melts?",
          es: "¿Qué controla la partición de elementos calcófilos entre fundidos sulfuro y silicato?",
          de: "Was kontrolliert die Verteilung chalkophiler Elemente zwischen Sulfid- und Silikatschmelzen?",
          nl: "Wat controleert de verdeling van chalkofiele elementen tussen sulfide en silicaat smelten?"
        },
        options: [
          { en: "Temperature, sulfur fugacity, silicate melt composition, and metal activities control partition coefficients", es: "Temperatura, fugacidad de azufre, composición de fundido silicato y actividades metálicas controlan coeficientes de partición", de: "Temperatur, Schwefelfugacität, Silikatschmelzzusammensetzung und Metallaktivitäten kontrollieren Verteilungskoeffizienten", nl: "Temperatuur, zwavel fugaciteit, silicaat smelt samenstelling en metaal activiteiten controleren verdelings coëfficiënten" },
          { en: "All elements partition equally", es: "Todos los elementos se particionan igualmente", de: "Alle Elemente verteilen sich gleich", nl: "Alle elementen verdelen gelijk" },
          { en: "Only temperature affects element partitioning", es: "Solo temperatura afecta partición de elementos", de: "Nur Temperatur beeinflusst Elementverteilung", nl: "Alleen temperatuur beïnvloedt element verdeling" },
          { en: "Partitioning is independent of melt composition", es: "Partición es independiente de composición de fundido", de: "Verteilung ist unabhängig von Schmelzzusammensetzung", nl: "Verdeling is onafhankelijk van smelt samenstelling" }
        ],
        correct: 0,
        explanation: {
          en: "Chalcophile element partitioning follows complex thermodynamic relationships: higher temperatures generally decrease partition coefficients favoring silicate melts, sulfur fugacity controls sulfide saturation and metal solubility, silicate melt composition affects activity coefficients through structural changes, and metal-metal interactions in sulfide liquids influence partitioning behavior. These factors determine ore element concentrations and economic potential of magmatic sulfide deposits.",
          es: "Partición de elementos calcófilos sigue relaciones termodinámicas complejas: temperaturas más altas generalmente disminuyen coeficientes de partición favoreciendo fundidos silicatos, fugacidad de azufre controla saturación de sulfuros y solubilidad metálica, composición de fundido silicato afecta coeficientes de actividad a través de cambios estructurales, e interacciones metal-metal en líquidos sulfuro influyen comportamiento de partición. Estos factores determinan concentraciones de elementos de mena y potencial económico de depósitos de sulfuros magmáticos.",
          de: "Chalkophile Elementverteilung folgt komplexen thermodynamischen Beziehungen: höhere Temperaturen verringern allgemein Verteilungskoeffizienten und begünstigen Silikatschmelzen, Schwefelfugacität kontrolliert Sulfidsättigung und Metalllöslichkeit, Silikatschmelzzusammensetzung beeinflusst Aktivitätskoeffizienten durch strukturelle Änderungen, und Metall-Metall-Wechselwirkungen in Sulfidschmelzen beeinflussen Verteilungsverhalten. Diese Faktoren bestimmen Erzelem entkonzentrationen und wirtschaftliches Potenzial magmatischer Sulfidlagerstätten.",
          nl: "Chalkofiele element verdeling volgt complexe thermodynamische relaties: hogere temperaturen verlagen over het algemeen verdelings coëfficiënten die silicaat smelten bevoordelen, zwavel fugaciteit controleert sulfide verzadiging en metaal oplosbaarheid, silicaat smelt samenstelling beïnvloedt activiteits coëfficiënten door structurele veranderingen, en metaal-metaal interacties in sulfide vloeistoffen beïnvloeden verdelings gedrag. Deze factoren bepalen erts element concentraties en economisch potentieel van magmatische sulfide afzettingen."
        }
      },
      {
        question: {
          en: "How do melt inclusion CO2 densities constrain magma storage pressures?",
          es: "¿Cómo las densidades de CO2 en inclusiones de fundido restringen presiones de almacenamiento de magma?",
          de: "Wie beschränken CO2-Dichten in Schmelzeinschlüssen Magma-Speicherdrücke?",
          nl: "Hoe beperken smelt insluitsels CO2 dichtheden magma opslag drukken?"
        },
        options: [
          { en: "CO2 density correlates with pressure through equation of state, allowing barometric calculations from Raman spectroscopy", es: "Densidad de CO2 se correlaciona con presión a través de ecuación de estado, permitiendo cálculos barométricos de espectroscopía Raman", de: "CO2-Dichte korreliert mit Druck durch Zustandsgleichung und ermöglicht barometrische Berechnungen aus Raman-Spektroskopie", nl: "CO2 dichtheid correleert met druk door toestandsvergelijking, barometrische berekeningen van Raman spectroscopie toelatend" },
          { en: "CO2 density is independent of pressure", es: "Densidad de CO2 es independiente de presión", de: "CO2-Dichte ist druckunabhängig", nl: "CO2 dichtheid is onafhankelijk van druk" },
          { en: "All melt inclusions have identical CO2 densities", es: "Todas las inclusiones de fundido tienen densidades de CO2 idénticas", de: "Alle Schmelzeinschlüsse haben identische CO2-Dichten", nl: "Alle smelt insluitsels hebben identieke CO2 dichtheden" },
          { en: "CO2 density only reflects temperature", es: "Densidad de CO2 solo refleja temperatura", de: "CO2-Dichte reflektiert nur Temperatur", nl: "CO2 dichtheid reflecteert alleen temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "CO2-rich melt inclusions serve as natural pressure gauges: CO2 density increases systematically with pressure following well-calibrated equations of state, Raman spectroscopy measures CO2 density through band splitting, homogenization temperatures provide independent temperature constraints, and combined P-T estimates reveal magma storage depths. This technique has revolutionized understanding of magma plumbing systems and pre-eruptive conditions.",
          es: "Inclusiones de fundido ricas en CO2 sirven como manómetros naturales: densidad de CO2 aumenta sistemáticamente con presión siguiendo ecuaciones de estado bien calibradas, espectroscopía Raman mide densidad de CO2 a través de división de bandas, temperaturas de homogeneización proporcionan restricciones de temperatura independientes, y estimaciones P-T combinadas revelan profundidades de almacenamiento de magma. Esta técnica ha revolucionado comprensión de sistemas de plomería de magma y condiciones pre-eruptivas.",
          de: "CO2-reiche Schmelzeinschlüsse dienen als natürliche Druckmessgeräte: CO2-Dichte steigt systematisch mit Druck nach gut kalibrierten Zustandsgleichungen, Raman-Spektroskopie misst CO2-Dichte durch Bandaufspaltung, Homogenisierungstemperaturen liefern unabhängige Temperaturbeschränkungen, und kombinierte P-T-Schätzungen offenbaren Magma-Speichertiefen. Diese Technik hat das Verständnis von Magma-Rohrleitungssystemen und prä-eruptiven Bedingungen revolutioniert.",
          nl: "CO2-rijke smelt insluitsels dienen als natuurlijke druk meters: CO2 dichtheid stijgt systematisch met druk volgens goed gekalibreerde toestandsvergelijkingen, Raman spectroscopie meet CO2 dichtheid door band splitsing, homogenisatie temperaturen bieden onafhankelijke temperatuur beperkingen, en gecombineerde P-T schattingen onthullen magma opslag dieptes. Deze techniek heeft begrip van magma leidingsystemen en pre-eruptieve condities gerevolutioneerd."
        }
      },
      {
        question: {
          en: "What processes control the development of cumulate textures in layered mafic intrusions?",
          es: "¿Qué procesos controlan desarrollo de texturas cumuladas en intrusiones máficas estratificadas?",
          de: "Welche Prozesse kontrollieren die Entwicklung von Kumulat-Texturen in geschichteten mafischen Intrusionen?",
          nl: "Welke processen controleren de ontwikkeling van cumulaat texturen in gelaagde mafische intrusies?"
        },
        options: [
          { en: "Crystal settling, in-situ crystallization, compaction, and intercumulus melt evolution create diverse cumulate textures", es: "Sedimentación de cristales, cristalización in-situ, compactación y evolución de fundido intercúmulo crean texturas cumuladas diversas", de: "Kristallsedimentation, In-situ-Kristallisation, Kompaktion und Interkumulus-Schmelzentwicklung schaffen diverse Kumulat-Texturen", nl: "Kristal bezinking, in-situ kristallisatie, compactie en intercumulus smelt evolutie creëren diverse cumulaat texturen" },
          { en: "All cumulates form through identical processes", es: "Todos los cumulados se forman a través de procesos idénticos", de: "Alle Kumulate bilden sich durch identische Prozesse", nl: "Alle cumulaten vormen door identieke processen" },
          { en: "Only gravitational settling creates cumulate textures", es: "Solo sedimentación gravitacional crea texturas cumuladas", de: "Nur gravitationale Sedimentation schafft Kumulat-Texturen", nl: "Alleen gravitationele bezinking creëert cumulaat texturen" },
          { en: "Cumulate textures are randomly distributed", es: "Texturas cumuladas están distribuidas aleatoriamente", de: "Kumulat-Texturen sind zufällig verteilt", nl: "Cumulaat texturen zijn willekeurig verdeeld" }
        ],
        correct: 0,
        explanation: {
          en: "Cumulate texture development involves multiple processes: orthocumulates form through crystal settling with trapped intercumulus melt, adcumulates result from continued crystallization expelling intercumulus liquid, mesocumulates show intermediate characteristics, and heteradcumulates form through overgrowth of primocrysts. Compaction, recrystallization, and post-cumulus modifications further modify original textures, creating the complex textural relationships observed in layered intrusions.",
          es: "Desarrollo de texturas cumuladas involucra múltiples procesos: ortocumulados se forman a través de sedimentación de cristales con fundido intercúmulo atrapado, adcumulados resultan de cristalización continua expulsando líquido intercúmulo, mesocumulados muestran características intermedias, y heteradcumulados se forman a través de sobrecrecimiento de primocristales. Compactación, recristalización y modificaciones post-cúmulo modifican adicionalmente texturas originales, creando relaciones texturales complejas observadas en intrusiones estratificadas.",
          de: "Kumulat-Texturentwicklung umfasst multiple Prozesse: Orthokumulate bilden sich durch Kristallsedimentation mit eingeschlossener Interkumulus-Schmelze, Adkumulate entstehen durch fortgesetzte Kristallisation, die Interkumulusflüssigkeit austreibt, Mesokumulate zeigen Zwischencharakteristika, und Heteradkumulate bilden sich durch Überwachsung von Primokristallen. Kompaktion, Rekristallisation und Post-Kumulus-Modifikationen verändern ursprüngliche Texturen weiter und schaffen die komplexen texturellen Beziehungen, die in geschichteten Intrusionen beobachtet werden.",
          nl: "Cumulaat textuur ontwikkeling behelst meerdere processen: orthocumulaten vormen door kristal bezinking met gevangen intercumulus smelt, adcumulaten resulteren van voortgezette kristallisatie die intercumulus vloeistof uitdrijft, mesocumulaten tonen tussenliggende karakteristieken, en heteradcumulaten vormen door overgroei van primokristallen. Compactie, herkristallisatie en post-cumulus modificaties modificeren verder originele texturen, complexe texturele relaties creërend die waargenomen worden in gelaagde intrusies."
        }
      },
      {
        question: {
          en: "How do volatile species interactions affect magma degassing pathways?",
          es: "¿Cómo las interacciones de especies volátiles afectan rutas de desgasificación de magma?",
          de: "Wie beeinflussen Wechselwirkungen flüchtiger Spezies Magma-Entgasungspfade?",
          nl: "Hoe beïnvloeden vluchtige soorten interacties magma ontgassing paden?"
        },
        options: [
          { en: "H2O-CO2-S interactions control solubility limits, gas phase composition, and degassing sequence", es: "Interacciones H2O-CO2-S controlan límites de solubilidad, composición de fase gaseosa y secuencia de desgasificación", de: "H2O-CO2-S-Wechselwirkungen kontrollieren Löslichkeitsgrenzen, Gasphasenzusammensetzung und Entgasungssequenz", nl: "H2O-CO2-S interacties controleren oplosbaarheids limieten, gas fase samenstelling en ontgassing sequentie" },
          { en: "All volatile species behave independently", es: "Todas las especies volátiles se comportan independientemente", de: "Alle flüchtigen Spezies verhalten sich unabhängig", nl: "Alle vluchtige soorten gedragen zich onafhankelijk" },
          { en: "Only H2O controls degassing behavior", es: "Solo H2O controla comportamiento de desgasificación", de: "Nur H2O kontrolliert Entgasungsverhalten", nl: "Alleen H2O controleert ontgassing gedrag" },
          { en: "Volatile interactions are negligible", es: "Interacciones volátiles son insignificantes", de: "Volatile Wechselwirkungen sind vernachlässigbar", nl: "Vluchtige interacties zijn verwaarloosbaar" }
        ],
        correct: 0,
        explanation: {
          en: "Volatile species interactions create complex degassing behaviors: H2O and CO2 show non-ideal mixing affecting total volatile solubility, sulfur speciation depends on oxygen fugacity and affects SO2 vs. H2S degassing, halogens (F, Cl) partition differently between gas and melt phases, and volatile interactions influence bubble nucleation and growth rates. These coupled processes control volcanic gas compositions and eruption dynamics.",
          es: "Interacciones de especies volátiles crean comportamientos de desgasificación complejos: H2O y CO2 muestran mezcla no ideal afectando solubilidad volátil total, especiación de azufre depende de fugacidad de oxígeno y afecta desgasificación SO2 vs. H2S, halógenos (F, Cl) se particionan diferentemente entre fases gaseosas y fundido, e interacciones volátiles influyen tasas de nucleación y crecimiento de burbujas. Estos procesos acoplados controlan composiciones de gases volcánicos y dinámica de erupciones.",
          de: "Wechselwirkungen flüchtiger Spezies schaffen komplexe Entgasungsverhalten: H2O und CO2 zeigen nicht-ideale Mischung, die die gesamte Volatillöslichkeit beeinflusst, Schwefelspeziation hängt von Sauerstofffugacität ab und beeinflusst SO2- vs. H2S-Entgasung, Halogene (F, Cl) verteilen sich unterschiedlich zwischen Gas- und Schmelzphasen, und Volatilwechselwirkungen beeinflussen Blasennukleation und Wachstumsraten. Diese gekoppelten Prozesse kontrollieren vulkanische Gaszusammensetzungen und Eruptionsdynamik.",
          nl: "Vluchtige soorten interacties creëren complexe ontgassing gedragingen: H2O en CO2 tonen niet-ideale menging die totale vluchtige oplosbaarheid beïnvloedt, zwavel speciatie hangt af van zuurstof fugaciteit en beïnvloedt SO2 vs. H2S ontgassing, halogenen (F, Cl) verdelen verschillend tussen gas en smelt fasen, en vluchtige interacties beïnvloeden bel nucleatie en groei snelheden. Deze gekoppelde processen controleren vulkanische gas samenstellingen en eruptie dynamiek."
        }
      },
      {
        question: {
          en: "What controls the formation and composition of immiscible Fe-rich liquids in mafic magmas?",
          es: "¿Qué controla formación y composición de líquidos inmiscibles ricos en Fe en magmas máficos?",
          de: "Was kontrolliert Bildung und Zusammensetzung nicht-mischbarer Fe-reicher Flüssigkeiten in mafischen Magmen?",
          nl: "Wat controleert vorming en samenstelling van niet-mengbare Fe-rijke vloeistoffen in mafische magma's?"
        },
        options: [
          { en: "Temperature, oxygen fugacity, silica activity, and P2O5 content control liquid immiscibility and Fe-Ti oxide saturation", es: "Temperatura, fugacidad de oxígeno, actividad de sílice y contenido P2O5 controlan inmiscibilidad líquida y saturación de óxido Fe-Ti", de: "Temperatur, Sauerstofffugacität, Kieselsäureaktivität und P2O5-Gehalt kontrollieren Flüssigkeitsimmiszibilität und Fe-Ti-Oxidsättigung", nl: "Temperatuur, zuurstof fugaciteit, silica activiteit en P2O5 gehalte controleren vloeistof onmengbaarheid en Fe-Ti oxide verzadiging" },
          { en: "All mafic magmas remain homogeneous", es: "Todos los magmas máficos permanecen homogéneos", de: "Alle mafischen Magmen bleiben homogen", nl: "Alle mafische magma's blijven homogeen" },
          { en: "Only temperature controls liquid separation", es: "Solo temperatura controla separación líquida", de: "Nur Temperatur kontrolliert Flüssigkeitstrennung", nl: "Alleen temperatuur controleert vloeistof scheiding" },
          { en: "Fe-rich liquids form randomly", es: "Líquidos ricos en Fe se forman aleatoriamente", de: "Fe-reiche Flüssigkeiten bilden sich zufällig", nl: "Fe-rijke vloeistoffen vormen willekeurig" }
        ],
        correct: 0,
        explanation: {
          en: "Immiscible Fe-rich liquid formation in mafic systems depends on critical conditions: low silica activity promotes liquid immiscibility by reducing network connectivity, high Fe/Mg ratios and advanced fractionation create favorable compositions, P2O5 enrichment acts as a flux promoting immiscibility, and oxidizing conditions stabilize Fe3+-rich melts. These processes concentrate Fe, Ti, V, and P in separate liquid phases, potentially forming oxide-apatite ores.",
          es: "Formación de líquido inmiscible rico en Fe en sistemas máficos depende de condiciones críticas: baja actividad de sílice promueve inmiscibilidad líquida reduciendo conectividad de red, altas proporciones Fe/Mg y fraccionamiento avanzado crean composiciones favorables, enriquecimiento P2O5 actúa como fundente promoviendo inmiscibilidad, y condiciones oxidantes estabilizan fundidos ricos en Fe3+. Estos procesos concentran Fe, Ti, V y P en fases líquidas separadas, potencialmente formando menas óxido-apatito.",
          de: "Bildung nicht-mischbarer Fe-reicher Flüssigkeiten in mafischen Systemen hängt von kritischen Bedingungen ab: niedrige Kieselsäureaktivität fördert Flüssigkeitsimmiszibilität durch Reduzierung der Netzwerkverbindungen, hohe Fe/Mg-Verhältnisse und fortgeschrittene Fraktionierung schaffen günstige Zusammensetzungen, P2O5-Anreicherung wirkt als Flussmittel, das Immiszibilität fördert, und oxidierende Bedingungen stabilisieren Fe3+-reiche Schmelzen. Diese Prozesse konzentrieren Fe, Ti, V und P in separaten Flüssigkeitsphasen und bilden potenziell Oxid-Apatit-Erze.",
          nl: "Niet-mengbare Fe-rijke vloeistof vorming in mafische systemen hangt af van kritische condities: lage silica activiteit bevordert vloeistof onmengbaarheid door netwerk connectiviteit te reduceren, hoge Fe/Mg verhoudingen en gevorderde fractionering creëren gunstige samenstellingen, P2O5 verrijking werkt als vloeimiddel dat onmengbaarheid bevordert, en oxiderende condities stabiliseren Fe3+-rijke smelten. Deze processen concentreren Fe, Ti, V en P in gescheiden vloeistof fasen, potentieel oxide-apatiet ertsen vormend."
        }
      },
      {
        question: {
          en: "How do clinopyroxene trace element patterns distinguish between mantle source characteristics?",
          es: "¿Cómo los patrones de elementos traza en clinopiroxeno distinguen entre características de fuente del manto?",
          de: "Wie unterscheiden Klinopyroxen-Spurenelementmuster zwischen Mantelquellcharakteristika?",
          nl: "Hoe onderscheiden clinopyroxeen sporenelement patronen tussen mantel bron karakteristieken?"
        },
        options: [
          { en: "REE patterns, HFSE ratios, and Ti/Zr signatures reflect degree of melting, source depletion, and metasomatic enrichment", es: "Patrones REE, proporciones HFSE y firmas Ti/Zr reflejan grado de fusión, empobrecimiento de fuente y enriquecimiento metasomático", de: "REE-Muster, HFSE-Verhältnisse und Ti/Zr-Signaturen reflektieren Schmelzgrad, Quellenverarmung und metasomatische Anreicherung", nl: "REE patronen, HFSE verhoudingen en Ti/Zr signaturen reflecteren mate van smelting, bron uitputting en metasomatische verrijking" },
          { en: "All clinopyroxenes have identical trace element signatures", es: "Todos los clinopiroxenos tienen firmas de elementos traza idénticas", de: "Alle Klinopyroxene haben identische Spurenelementsignaturen", nl: "Alle clinopyroxenen hebben identieke sporenelement signaturen" },
          { en: "Trace elements only reflect crystallization conditions", es: "Elementos traza solo reflejan condiciones de cristalización", de: "Spurenelemente reflektieren nur Kristallisationsbedingungen", nl: "Spoorelementen reflecteren alleen kristallisatie condities" },
          { en: "Mantle source characteristics cannot be determined from clinopyroxene", es: "Características de fuente del manto no pueden determinarse de clinopiroxeno", de: "Mantelquellcharakteristika können nicht aus Klinopyroxen bestimmt werden", nl: "Mantel bron karakteristieken kunnen niet bepaald worden van clinopyroxeen" }
        ],
        correct: 0,
        explanation: {
          en: "Clinopyroxene trace elements provide detailed mantle source information: flat REE patterns indicate low degrees of melting from fertile sources, depleted LREE patterns suggest high degrees of melting or depleted sources, elevated LILE/HFSE ratios indicate metasomatic enrichment, Ti/Zr and Nb/Y ratios constrain source lithology and degree of melting, and Cr-diopside compositions record interaction with refractory peridotites. These signatures allow reconstruction of mantle heterogeneity and melting processes.",
          es: "Elementos traza en clinopiroxeno proporcionan información detallada de fuente del manto: patrones REE planos indican bajos grados de fusión de fuentes fértiles, patrones LREE empobrecidos sugieren altos grados de fusión o fuentes empobrecidas, proporciones LILE/HFSE elevadas indican enriquecimiento metasomático, proporciones Ti/Zr y Nb/Y restringen litología de fuente y grado de fusión, y composiciones Cr-diopsido registran interacción con peridotitas refractarias. Estas firmas permiten reconstrucción de heterogeneidad del manto y procesos de fusión.",
          de: "Klinopyroxen-Spurenelemente liefern detaillierte Mantelquelleninformationen: flache REE-Muster zeigen niedrige Schmelzgrade von fruchtbaren Quellen an, verarmte LREE-Muster deuten auf hohe Schmelzgrade oder verarmte Quellen hin, erhöhte LILE/HFSE-Verhältnisse zeigen metasomatische Anreicherung an, Ti/Zr- und Nb/Y-Verhältnisse beschränken Quellenlithologie und Schmelzgrad, und Cr-Diopsid-Zusammensetzungen dokumentieren Wechselwirkung mit refraktären Peridotiten. Diese Signaturen ermöglichen Rekonstruktion von Mantelheterogenität und Schmelzprozessen.",
          nl: "Clinopyroxeen spoorelementen bieden gedetailleerde mantel bron informatie: vlakke REE patronen geven lage graden van smelting van vruchtbare bronnen aan, uitgeputte LREE patronen suggereren hoge graden van smelting of uitgeputte bronnen, verhoogde LILE/HFSE verhoudingen geven metasomatische verrijking aan, Ti/Zr en Nb/Y verhoudingen beperken bron lithologie en mate van smelting, en Cr-diopsied samenstellingen registreren interactie met refractaire peridotieten. Deze signaturen staan reconstructie van mantel heterogeniteit en smelt processen toe."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/volcanology', level7);
  }
})();
