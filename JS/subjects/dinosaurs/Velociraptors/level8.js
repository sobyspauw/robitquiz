// Velociraptors Quiz - Level 8: Advanced Knowledge
(function() {
  const level8 = {
    name: {
      en: "Velociraptors Level 8",
      es: "Velociraptors Nivel 8",
      de: "Velociraptors Stufe 8",
      nl: "Velociraptors Level 8"
    },
    questions: [
      {
        question: {
          en: "What amino acid sequences in Velociraptor collagen proteins have been most successfully recovered through advanced mass spectrometry techniques?",
          es: "¿Qué secuencias de aminoácidos en las proteínas de colágeno de Velociraptor han sido recuperadas con mayor éxito mediante técnicas avanzadas de espectrometría de masas?",
          de: "Welche Aminosäuresequenzen in Velociraptor-Kollagenproteinen wurden durch fortgeschrittene Massenspektrometrie-Techniken am erfolgreichsten gewonnen?",
          nl: "Welke aminozuursequenties in Velociraptor-collageeneiwitten zijn het meest succesvol teruggewonnen via geavanceerde massaspectrometrie-technieken?"
        },
        options: [
          { en: "Hydroxyproline-rich sequences in Type I collagen", es: "Secuencias ricas en hidroxiprolina en colágeno Tipo I", de: "Hydroxyprolin-reiche Sequenzen in Kollagen Typ I", nl: "Hydroxyproline-rijke sequenties in Type I collageen" },
          { en: "Glycine-proline-alanine triplets in Type II collagen", es: "Tripletes glicina-prolina-alanina en colágeno Tipo II", de: "Glycin-Prolin-Alanin-Tripletts in Kollagen Typ II", nl: "Glycine-proline-alanine tripletten in Type II collageen" },
          { en: "C-terminal telopeptides in Type X collagen", es: "Telopéptidos C-terminales en colágeno Tipo X", de: "C-terminale Telopeptide in Kollagen Typ X", nl: "C-terminale telopeptiden in Type X collageen" },
          { en: "Cross-linking aldehydes in elastin-associated proteins", es: "Aldehídos de entrecruzamiento en proteínas asociadas a elastina", de: "Vernetzende Aldehyde in elastin-assoziierten Proteinen", nl: "Cross-linkende aldehyden in elastine-geassocieerde eiwitten" }
        ],
        correct: 0,
        explanation: {
          en: "Hydroxyproline-rich sequences in Type I collagen are most stable and have been successfully recovered from Velociraptor specimens using advanced LC-MS/MS techniques, providing insights into theropod protein evolution.",
          es: "Las secuencias ricas en hidroxiprolina en el colágeno Tipo I son las más estables y han sido recuperadas exitosamente de especímenes de Velociraptor usando técnicas avanzadas de LC-MS/MS, proporcionando información sobre la evolución de proteínas de terópodos.",
          de: "Hydroxyprolin-reiche Sequenzen in Kollagen Typ I sind am stabilsten und wurden erfolgreich aus Velociraptor-Exemplaren mit fortgeschrittenen LC-MS/MS-Techniken gewonnen, was Einblicke in die Theropoden-Protein-Evolution liefert.",
          nl: "Hydroxyproline-rijke sequenties in Type I collageen zijn het meest stabiel en zijn succesvol teruggewonnen uit Velociraptor-specimens met geavanceerde LC-MS/MS-technieken, wat inzichten geeft in theropode eiwit-evolutie."
        }
      },
      {
        question: {
          en: "According to phylogenomic analyses using maximum likelihood methods, which taxon represents the sister group to Velociraptorinae within Dromaeosauridae?",
          es: "Según los análisis filogenómicos usando métodos de máxima verosimilitud, ¿qué taxón representa el grupo hermano de Velociraptorinae dentro de Dromaeosauridae?",
          de: "Welcher Taxon stellt laut phylogenomischen Analysen mit Maximum-Likelihood-Methoden die Schwestergruppe zu Velociraptorinae innerhalb der Dromaeosauridae dar?",
          nl: "Volgens phylogenomische analyses met maximum likelihood-methoden, welk taxon vertegenwoordigt de zustergroep van Velociraptorinae binnen Dromaeosauridae?"
        },
        options: [
          { en: "Saurornitholestinae", es: "Saurornitholestinae", de: "Saurornitholestinae", nl: "Saurornitholestinae" },
          { en: "Dromaeosaurinae", es: "Dromaeosaurinae", de: "Dromaeosaurinae", nl: "Dromaeosaurinae" },
          { en: "Microraptorinae", es: "Microraptorinae", de: "Microraptorinae", nl: "Microraptorinae" },
          { en: "Unenlagiinae", es: "Unenlagiinae", de: "Unenlagiinae", nl: "Unenlagiinae" }
        ],
        correct: 1,
        explanation: {
          en: "Recent phylogenomic studies consistently recover Dromaeosaurinae as the sister group to Velociraptorinae, with both forming a well-supported clade distinct from other dromaeosaurid subfamilies.",
          es: "Los estudios filogenómicos recientes recuperan consistentemente a Dromaeosaurinae como grupo hermano de Velociraptorinae, formando ambos un clado bien soportado distinto de otras subfamilias de dromeosáuridos.",
          de: "Neuere phylogenomische Studien zeigen konsistent Dromaeosaurinae als Schwestergruppe zu Velociraptorinae, wobei beide eine gut unterstützte Klade bilden, die sich von anderen Dromaeosauriden-Unterfamilien unterscheidet.",
          nl: "Recente phylogenomische studies tonen consistent aan dat Dromaeosaurinae de zustergroep is van Velociraptorinae, waarbij beide een goed ondersteunde clade vormen die verschilt van andere dromaeosauride subfamilies."
        }
      },
      {
        question: {
          en: "What is the calculated bite force of Velociraptor mongoliensis based on finite element analysis of complete skull reconstructions?",
          es: "¿Cuál es la fuerza de mordida calculada de Velociraptor mongoliensis basada en análisis de elementos finitos de reconstrucciones completas del cráneo?",
          de: "Welche Beißkraft wurde für Velociraptor mongoliensis basierend auf Finite-Elemente-Analyse kompletter Schädelrekonstruktionen berechnet?",
          nl: "Wat is de berekende bijtkracht van Velociraptor mongoliensis gebaseerd op eindige-elementen-analyse van complete schedelreconstructies?"
        },
        options: [
          { en: "1,500-2,200 N at the carnassials", es: "1,500-2,200 N en los carniceros", de: "1,500-2,200 N an den Reißzähnen", nl: "1,500-2,200 N bij de carnassials" },
          { en: "3,200-4,100 N at the posterior teeth", es: "3,200-4,100 N en los dientes posteriores", de: "3,200-4,100 N an den hinteren Zähnen", nl: "3,200-4,100 N bij de achterste tanden" },
          { en: "240-380 N at the tip of the rostrum", es: "240-380 N en la punta del rostro", de: "240-380 N an der Spitze des Rostrums", nl: "240-380 N aan de punt van het rostrum" },
          { en: "850-1,100 N at the mid-maxillary region", es: "850-1,100 N en la región medio-maxilar", de: "850-1,100 N in der mittleren Oberkieferregion", nl: "850-1,100 N in de mid-maxillaire regio" }
        ],
        correct: 2,
        explanation: {
          en: "Finite element analysis indicates Velociraptor had a relatively weak bite force of 240-380 N at the rostral tip, reflecting its specialization for precision strikes rather than crushing prey through brute force.",
          es: "El análisis de elementos finitos indica que Velociraptor tenía una fuerza de mordida relativamente débil de 240-380 N en la punta rostral, reflejando su especialización en golpes de precisión más que en aplastar presas por fuerza bruta.",
          de: "Die Finite-Elemente-Analyse zeigt, dass Velociraptor eine relativ schwache Beißkraft von 240-380 N an der rostralen Spitze hatte, was seine Spezialisierung auf Präzisionsschläge statt auf das Zermalmen von Beute durch rohe Gewalt widerspiegelt.",
          nl: "Eindige-elementen-analyse toont aan dat Velociraptor een relatief zwakke bijtkracht had van 240-380 N aan de rostrale tip, wat zijn specialisatie in precisie-aanvallen weergeeft in plaats van het verpletteren van prooien door brute kracht."
        }
      },
      {
        question: {
          en: "Which HOX gene expression patterns in modern birds most closely mirror the inferred developmental cascade responsible for Velociraptor sickle claw morphogenesis?",
          es: "¿Qué patrones de expresión de genes HOX en aves modernas reflejan más estrechamente la cascada de desarrollo inferida responsable de la morfogénesis de la garra en forma de hoz de Velociraptor?",
          de: "Welche HOX-Genexpressionsmuster in modernen Vögeln spiegeln am ehesten die abgeleitete Entwicklungskaskade wider, die für die Sichelkrallen-Morphogenese von Velociraptor verantwortlich ist?",
          nl: "Welke HOX-genexpressiepatronen in moderne vogels weerspiegelen het beste de afgeleide ontwikkelingscascade die verantwoordelijk is voor Velociraptor sikkelklauw-morfogenese?"
        },
        options: [
          { en: "HOXD13 and HOXD12 co-expression in digit II unguals", es: "Co-expresión de HOXD13 y HOXD12 en las ungueales del dígito II", de: "HOXD13- und HOXD12-Koexpression in Digit-II-Ungualien", nl: "HOXD13 en HOXD12 co-expressie in digit II ungualen" },
          { en: "HOXA11 and HOXA13 gradient expression in metatarsals", es: "Expresión en gradiente de HOXA11 y HOXA13 en metatarsianos", de: "HOXA11- und HOXA13-Gradientenexpression in Metatarsalien", nl: "HOXA11 en HOXA13 gradiënt-expressie in metatarsalen" },
          { en: "HOXC8 upregulation during pedal digit development", es: "Regulación positiva de HOXC8 durante el desarrollo de dígitos pedales", de: "HOXC8-Hochregulation während der Entwicklung der Fußzehen", nl: "HOXC8 upregulatie tijdens pedale digit-ontwikkeling" },
          { en: "HOXB7 and HOXB8 sequential activation in phalangeal segments", es: "Activación secuencial de HOXB7 y HOXB8 en segmentos falangeales", de: "Sequenzielle Aktivierung von HOXB7 und HOXB8 in Phalangensegmenten", nl: "HOXB7 en HOXB8 sequentiële activatie in falangeale segmenten" }
        ],
        correct: 0,
        explanation: {
          en: "HOXD13 and HOXD12 co-expression patterns in modern bird digit II unguals (claws) provide the closest developmental analog to the genetic cascade that likely produced Velociraptor's enlarged sickle claw on pedal digit II.",
          es: "Los patrones de co-expresión de HOXD13 y HOXD12 en las ungueales del dígito II de aves modernas proporcionan el análogo de desarrollo más cercano a la cascada genética que probablemente produjo la garra en forma de hoz agrandada de Velociraptor en el dígito pedal II.",
          de: "HOXD13- und HOXD12-Koexpressionsmuster in modernen Vogeldigit-II-Ungualien bieten die nächste Entwicklungsanalogie zur genetischen Kaskade, die wahrscheinlich Velociraptors vergrößerte Sichelkralle am Fußdigit II erzeugte.",
          nl: "HOXD13 en HOXD12 co-expressiepatronen in moderne vogel digit II ungualen bieden de dichtstbijzijnde ontwikkelingsanaloog voor de genetische cascade die waarschijnlijk Velociraptor's vergrote sikkelklauw op pedale digit II produceerde."
        }
      },
      {
        question: {
          en: "What isotopic signature (δ18O and δ13C) patterns in Velociraptor tooth enamel indicate about their thermoregulatory physiology?",
          es: "¿Qué patrones de firma isotópica (δ18O y δ13C) en el esmalte dental de Velociraptor indican sobre su fisiología termorreguladora?",
          de: "Welche isotopischen Signaturen (δ18O und δ13C) in Velociraptor-Zahnschmelz deuten auf ihre thermoregulatorische Physiologie hin?",
          nl: "Welke isotopische signatuurpatronen (δ18O en δ13C) in Velociraptor-tandglazuur duiden op hun thermoregulatoire fysiologie?"
        },
        options: [
          { en: "Stable δ18O values suggest ectothermic metabolism", es: "Valores estables de δ18O sugieren metabolismo ectotérmico", de: "Stabile δ18O-Werte deuten auf ektothermen Stoffwechsel hin", nl: "Stabiele δ18O-waarden suggereren ectotherme metabolisme" },
          { en: "Variable δ18O with narrow δ13C range indicates mesothermy", es: "δ18O variable con rango estrecho de δ13C indica mesotermia", de: "Variables δ18O mit engem δ13C-Bereich deutet auf Mesothermie hin", nl: "Variabele δ18O met smal δ13C-bereik duidt op mesothermie" },
          { en: "Consistent δ18O depletion indicates endothermic homeothermy", es: "Agotamiento consistente de δ18O indica homeotermia endotérmica", de: "Konsistente δ18O-Verarmung deutet auf endotherme Homoiothermie hin", nl: "Consistente δ18O-uitputting duidt op endotherme homeothermie" },
          { en: "Seasonal δ18O oscillations suggest behavioral thermoregulation", es: "Oscilaciones estacionales de δ18O sugieren termorregulación conductual", de: "Saisonale δ18O-Schwankungen deuten auf Verhaltensthermoregulation hin", nl: "Seizoensgebonden δ18O-oscillaties suggereren gedragsthermoregulatie" }
        ],
        correct: 2,
        explanation: {
          en: "Consistent δ18O depletion in Velociraptor tooth enamel, similar to modern endothermic animals, indicates they maintained stable body temperatures through metabolic heat production, supporting evidence for advanced thermoregulation.",
          es: "El agotamiento consistente de δ18O en el esmalte dental de Velociraptor, similar a los animales endotérmicos modernos, indica que mantenían temperaturas corporal estables mediante producción de calor metabólico, apoyando evidencia de termorregulación avanzada.",
          de: "Konsistente δ18O-Verarmung im Velociraptor-Zahnschmelz, ähnlich modernen endothermen Tieren, deutet darauf hin, dass sie stabile Körpertemperaturen durch metabolische Wärmeerzeugung aufrechterhielten, was die Evidenz für fortgeschrittene Thermoregulation stützt.",
          nl: "Consistente δ18O-uitputting in Velociraptor-tandglazuur, vergelijkbaar met moderne endotherme dieren, geeft aan dat ze stabiele lichaamstemperaturen handhaafden door metabolische warmteproductie, wat bewijs ondersteunt voor geavanceerde thermoregulatie."
        }
      },
      {
        question: {
          en: "Which taphonomic process best explains the preferential preservation of Velociraptor specimens in aeolian sandstone formations of the Djadokhta Formation?",
          es: "¿Qué proceso tafonómico explica mejor la preservación preferencial de especímenes de Velociraptor en formaciones de arenisca eólica de la Formación Djadokhta?",
          de: "Welcher taphonomische Prozess erklärt am besten die bevorzugte Erhaltung von Velociraptor-Exemplaren in äolischen Sandsteinformationen der Djadokhta-Formation?",
          nl: "Welk tafonomisch proces verklaart het best de preferentiële preservatie van Velociraptor-specimens in eolische zandsteen-formaties van de Djadokhta-formatie?"
        },
        options: [
          { en: "Rapid burial by catastrophic sandstorm events", es: "Entierro rápido por eventos catastróficos de tormenta de arena", de: "Schnelle Einbettung durch katastrophale Sandsturmereignisse", nl: "Snelle begraving door catastrofale zandstorm-gebeurtenissen" },
          { en: "Desiccation and mummification in arid microenvironments", es: "Desecación y momificación en microambientes áridos", de: "Austrocknung und Mumifizierung in ariden Mikroumgebungen", nl: "Uitdroging en mummificatie in droge micro-omgevingen" },
          { en: "Permineralization through groundwater carbonate precipitation", es: "Permineralización a través de precipitación de carbonato de agua subterránea", de: "Permineralisation durch Grundwasser-Karbonat-Fällung", nl: "Permineralisatie door grondwater-carbonaat-precipitatie" },
          { en: "Anaerobic decomposition in temporary alkaline lakes", es: "Descomposición anaeróbica en lagos alcalinos temporales", de: "Anaerobe Zersetzung in temporären alkalinen Seen", nl: "Anaerobe decompositie in tijdelijke alkalische meren" }
        ],
        correct: 0,
        explanation: {
          en: "Rapid burial by catastrophic sandstorm events best explains the exceptional preservation of articulated Velociraptor skeletons, as sudden sand inundation prevented scavenging and provided the anoxic conditions necessary for soft tissue preservation.",
          es: "El entierro rápido por eventos catastróficos de tormenta de arena explica mejor la preservación excepcional de esqueletos articulados de Velociraptor, ya que la inundación súbita de arena previno el carroñeo y proporcionó las condiciones anóxicas necesarias para la preservación de tejidos blandos.",
          de: "Schnelle Einbettung durch katastrophale Sandsturmereignisse erklärt am besten die außergewöhnliche Erhaltung artikulierter Velociraptor-Skelette, da plötzliche Sandüberschwemmung Aasfressung verhinderte und die anoxischen Bedingungen für die Weichteilerhaltung schuf.",
          nl: "Snelle begraving door catastrofale zandstorm-gebeurtenissen verklaart het best de uitzonderlijke preservatie van gearticuleerde Velociraptor-skeletten, omdat plotselinge zandoverstromingen aaseters verhinderde en de anoxische omstandigheden creëerde die nodig waren voor zachte weefselpreservatie."
        }
      },
      {
        question: {
          en: "Based on high-resolution CT scanning and digital endocast reconstruction, what is the estimated encephalization quotient (EQ) of Velociraptor mongoliensis?",
          es: "Basándose en tomografía computarizada de alta resolución y reconstrucción digital de endocraneales, ¿cuál es el cociente de encefalización (EQ) estimado de Velociraptor mongoliensis?",
          de: "Basierend auf hochauflösender CT-Untersuchung und digitaler Endokranium-Rekonstruktion, wie hoch ist der geschätzte Enzephalisationsquotient (EQ) von Velociraptor mongoliensis?",
          nl: "Gebaseerd op hoge-resolutie CT-scanning en digitale endocast-reconstructie, wat is de geschatte encefalisatiequotiënt (EQ) van Velociraptor mongoliensis?"
        },
        options: [
          { en: "0.8-1.2 (similar to modern crocodilians)", es: "0.8-1.2 (similar a cocodrilos modernos)", de: "0.8-1.2 (ähnlich modernen Krokodilen)", nl: "0.8-1.2 (vergelijkbaar met moderne krokodillen)" },
          { en: "2.1-3.4 (intermediate between reptiles and birds)", es: "2.1-3.4 (intermedio entre reptiles y aves)", de: "2.1-3.4 (zwischen Reptilien und Vögeln)", nl: "2.1-3.4 (tussenin tussen reptielen en vogels)" },
          { en: "4.8-6.2 (approaching modern ratite birds)", es: "4.8-6.2 (acercándose a aves ratites modernas)", de: "4.8-6.2 (annähernd moderne Laufvögel)", nl: "4.8-6.2 (nadert moderne loopvogels)" },
          { en: "7.5-9.1 (comparable to corvids and parrots)", es: "7.5-9.1 (comparable a córvidos y loros)", de: "7.5-9.1 (vergleichbar mit Rabenvögeln und Papageien)", nl: "7.5-9.1 (vergelijkbaar met kraaien en papegaaien)" }
        ],
        correct: 2,
        explanation: {
          en: "High-resolution CT reconstructions reveal an EQ of 4.8-6.2 for Velociraptor, approaching modern ratite birds and suggesting advanced cognitive capabilities including complex social behaviors, problem-solving, and sophisticated hunting strategies.",
          es: "Las reconstrucciones de CT de alta resolución revelan un EQ de 4.8-6.2 para Velociraptor, acercándose a las aves ratites modernas y sugiriendo capacidades cognitivas avanzadas incluyendo comportamientos sociales complejos, resolución de problemas y estrategias de caza sofisticadas.",
          de: "Hochauflösende CT-Rekonstruktionen zeigen einen EQ von 4.8-6.2 für Velociraptor, der sich modernen Laufvögeln nähert und fortgeschrittene kognitive Fähigkeiten einschließlich komplexer sozialer Verhaltensweisen, Problemlösung und raffinierter Jagdstrategien nahelegt.",
          nl: "Hoge-resolutie CT-reconstructies onthullen een EQ van 4.8-6.2 voor Velociraptor, nadert moderne loopvogels en suggereert geavanceerde cognitieve capaciteiten inclusief complexe sociale gedragingen, probleemoplossing en geavanceerde jachtstrategieën."
        }
      },
      {
        question: {
          en: "Which specific microstructural features in Velociraptor feather fossils provide the strongest evidence for complex branching rachis architecture?",
          es: "¿Qué características microestructurales específicas en los fósiles de plumas de Velociraptor proporcionan la evidencia más fuerte de arquitectura compleja de raquis ramificado?",
          de: "Welche spezifischen mikrostrukturellen Merkmale in Velociraptor-Federfossilien liefern die stärksten Belege für komplexe verzweigte Rachis-Architektur?",
          nl: "Welke specifieke microstructurele kenmerken in Velociraptor-veerfossielen leveren het sterkste bewijs voor complexe vertakkende rachis-architectuur?"
        },
        options: [
          { en: "Melanosomes arranged in ordered arrays within barb cells", es: "Melanosomas organizados en matrices ordenadas dentro de células de bárbula", de: "Melanosomen in geordneten Anordnungen innerhalb von Bartenzellen", nl: "Melanosomen gerangschikt in geordende arrays binnen baardcellen" },
          { en: "Keratin β-sheet crystal preservation in barbule hooklets", es: "Preservación de cristales de lámina β de queratina en ganchitos de bárbula", de: "Keratin-β-Faltblatt-Kristallerhaltung in Häkchen der Nebenstrahlen", nl: "Keratine β-sheet kristalpreservatie in barbule haakjes" },
          { en: "Hierarchical branching nodes with vascular canal impressions", es: "Nodos de ramificación jerárquica con impresiones de canales vasculares", de: "Hierarchische Verzweigungsknoten mit Gefäßkanalabdrücken", nl: "Hiërarchische vertakkingsknooppunten met vasculaire kanaalafdrukken" },
          { en: "Phosphatized integumentary scales with follicle attachments", es: "Escamas tegumentarias fosfatizadas con uniones foliculares", de: "Phosphatisierte Integumentärschuppen mit Follikelanhängen", nl: "Gefosfateerde integumentaire schubben met follikel-aanhechtingen" }
        ],
        correct: 2,
        explanation: {
          en: "Hierarchical branching nodes with vascular canal impressions provide the strongest evidence for complex feather architecture, as these structures demonstrate the sophisticated developmental program required for asymmetric flight feathers with aerodynamic properties.",
          es: "Los nodos de ramificación jerárquica con impresiones de canales vasculares proporcionan la evidencia más fuerte de arquitectura compleja de plumas, ya que estas estructuras demuestran el programa de desarrollo sofisticado requerido para plumas de vuelo asimétricas con propiedades aerodinámicas.",
          de: "Hierarchische Verzweigungsknoten mit Gefäßkanalabdrücken liefern die stärksten Belege für komplexe Federarchitektur, da diese Strukturen das raffinierte Entwicklungsprogramm demonstrieren, das für asymmetrische Flugfedern mit aerodynamischen Eigenschaften erforderlich ist.",
          nl: "Hiërarchische vertakkingsknooppunten met vasculaire kanaalafdrukken leveren het sterkste bewijs voor complexe veerarchitectuur, omdat deze structuren het geavanceerde ontwikkelingsprogramma demonstreren dat vereist is voor asymmetrische vluchtveren met aerodynamische eigenschappen."
        }
      },
      {
        question: {
          en: "What does the analysis of rare earth element (REE) concentrations in Velociraptor bone hydroxyapatite reveal about diagenetic alteration processes?",
          es: "¿Qué revela el análisis de concentraciones de elementos de tierras raras (REE) en la hidroxiapatita ósea de Velociraptor sobre los procesos de alteración diagenética?",
          de: "Was enthüllt die Analyse der Seltenen Erden (REE)-Konzentrationen in Velociraptor-Knochen-Hydroxylapatit über diagenetische Alterationsprozesse?",
          nl: "Wat onthult de analyse van zeldzame aardeelementen (REE) concentraties in Velociraptor-been-hydroxyapatiet over diagenetische alteratieprocessen?"
        },
        options: [
          { en: "Uniform REE uptake indicates rapid fossilization", es: "Captación uniforme de REE indica fosilización rápida", de: "Einheitliche REE-Aufnahme deutet auf schnelle Fossilisation hin", nl: "Uniforme REE-opname duidt op snelle fossilisatie" },
          { en: "LREE depletion suggests acidic groundwater interaction", es: "Agotamiento de LREE sugiere interacción con agua subterránea ácida", de: "LREE-Verarmung deutet auf saure Grundwasserinteraktion hin", nl: "LREE-uitputting suggereert zure grondwater-interactie" },
          { en: "Eu anomalies reflect original biogenic signatures", es: "Anomalías de Eu reflejan firmas biogénicas originales", de: "Eu-Anomalien spiegeln ursprüngliche biogene Signaturen wider", nl: "Eu-anomalieën reflecteren oorspronkelijke biogene signaturen" },
          { en: "HREE enrichment indicates late-stage mineral replacement", es: "Enriquecimiento de HREE indica reemplazo mineral tardío", de: "HREE-Anreicherung deutet auf späte Mineralersetzung hin", nl: "HREE-verrijking duidt op late-stadium mineraalvervanging" }
        ],
        correct: 3,
        explanation: {
          en: "HREE enrichment patterns in Velociraptor bones indicate late-stage diagenetic mineral replacement, suggesting prolonged interaction with evolving pore fluids during burial and providing insights into post-mortem taphonomic history.",
          es: "Los patrones de enriquecimiento de HREE en huesos de Velociraptor indican reemplazo mineral diagenético tardío, sugiriendo interacción prolongada con fluidos porales en evolución durante el enterramiento y proporcionando información sobre la historia tafonómica post-mortem.",
          de: "HREE-Anreicherungsmuster in Velociraptor-Knochen deuten auf späte diagenetische Mineralersetzung hin, was eine längere Interaktion mit sich entwickelnden Porenfluiden während der Einbettung nahelegt und Einblicke in die postmortale taphonomische Geschichte liefert.",
          nl: "HREE-verrijkingspatronen in Velociraptor-botten duiden op late-stadium diagenetische mineraalvervanging, wat langdurige interactie suggereert met evoluerende poriefolievloeistoffen tijdens begraving en inzichten biedt in post-mortem tafonomische geschiedenis."
        }
      },
      {
        question: {
          en: "Based on geometric morphometric analysis of the semi-lunate carpal, what does the shape variation in Velociraptor wrist joints suggest about flight capability evolution?",
          es: "Basándose en el análisis morfométrico geométrico del carpo semilunar, ¿qué sugiere la variación de forma en las articulaciones de muñeca de Velociraptor sobre la evolución de la capacidad de vuelo?",
          de: "Was deutet die Formvariation in Velociraptor-Handgelenkverbindungen basierend auf geometrisch-morphometrischer Analyse des semilunaren Karpals über die Evolution der Flugfähigkeit an?",
          nl: "Gebaseerd op geometrische morfometrische analyse van het semi-lunaire carpaal, wat suggereert de vormvariatie in Velociraptor-polsgewrichten over vluchtcapaciteit-evolutie?"
        },
        options: [
          { en: "Convergent evolution toward avian wrist morphology", es: "Evolución convergente hacia morfología de muñeca aviar", de: "Konvergente Evolution zur aviären Handgelenkmorphologie", nl: "Convergente evolutie richting aviaire polsmorfologie" },
          { en: "Retention of primitive archosaurian joint architecture", es: "Retención de arquitectura articular arcosaurina primitiva", de: "Beibehaltung primitiver archosaurischer Gelenkarchitektur", nl: "Behoud van primitieve archosauriële gewrichtsarchitectuur" },
          { en: "Specialized adaptation for grappling and prey manipulation", es: "Adaptación especializada para agarrar y manipular presas", de: "Spezialisierte Anpassung für Greifen und Beutemanipulation", nl: "Gespecialiseerde adaptatie voor grijpen en prooi-manipulatie" },
          { en: "Transitional morphology between climbing and powered flight", es: "Morfología transicional entre trepar y vuelo propulsado", de: "Übergangsmorphologie zwischen Klettern und Motorflug", nl: "Transitionele morfologie tussen klimmen en aangedreven vlucht" }
        ],
        correct: 2,
        explanation: {
          en: "Geometric morphometric analysis reveals that Velociraptor's semi-lunate carpal shows specialized adaptations for grappling and prey manipulation rather than flight, with robust attachment sites for flexor muscles and limited range of motion inconsistent with wing-folding mechanics.",
          es: "El análisis morfométrico geométrico revela que el carpo semilunar de Velociraptor muestra adaptaciones especializadas para agarrar y manipular presas más que para volar, con sitios de inserción robustos para músculos flexores y rango de movimiento limitado inconsistente con la mecánica de plegado de alas.",
          de: "Die geometrisch-morphometrische Analyse zeigt, dass Velociraptors semilunarer Karpal spezialisierte Anpassungen für Greifen und Beutemanipulation statt für Flug zeigt, mit robusten Ansatzstellen für Beugemuskeln und begrenztem Bewegungsbereich, der nicht mit der Flügelfaltmechanik übereinstimmt.",
          nl: "Geometrische morfometrische analyse toont aan dat Velociraptor's semi-lunaire carpaal gespecialiseerde adaptaties toont voor grijpen en prooi-manipulatie in plaats van vlucht, met robuuste aanhechtingsplaatsen voor flexor-spieren en beperkt bewegingsbereik dat inconsistent is met vleugelvouw-mechanica."
        }
      },
      {
        question: {
          en: "Which molecular clock calibrations using ancient DNA degradation rates suggest the most accurate divergence time for Velociraptorinae from other dromaeosaurid lineages?",
          es: "¿Qué calibraciones de reloj molecular usando tasas de degradación de ADN antiguo sugieren el tiempo de divergencia más preciso para Velociraptorinae de otros linajes de dromeosáuridos?",
          de: "Welche molekularen Uhrkalibrierungen mit antiken DNA-Abbauraten deuten die genaueste Divergenzzeit für Velociraptorinae von anderen Dromaeosauriden-Linien an?",
          nl: "Welke moleculaire klok-kalibraties met oude DNA-degradatierates suggereren de meest accurate divergentietijd voor Velociraptorinae van andere dromaeosauride-lijnen?"
        },
        options: [
          { en: "95-102 million years ago (mid-Cretaceous)", es: "95-102 millones de años atrás (Cretácico medio)", de: "95-102 Millionen Jahre (mittlere Kreide)", nl: "95-102 miljoen jaar geleden (midden-Krijt)" },
          { en: "78-85 million years ago (late Cretaceous)", es: "78-85 millones de años atrás (Cretácico tardío)", de: "78-85 Millionen Jahre (späte Kreide)", nl: "78-85 miljoen jaar geleden (laat-Krijt)" },
          { en: "112-125 million years ago (early Cretaceous)", es: "112-125 millones de años atrás (Cretácico temprano)", de: "112-125 Millionen Jahre (frühe Kreide)", nl: "112-125 miljoen jaar geleden (vroeg-Krijt)" },
          { en: "68-72 million years ago (terminal Cretaceous)", es: "68-72 millones de años atrás (Cretácico terminal)", de: "68-72 Millionen Jahre (terminale Kreide)", nl: "68-72 miljoen jaar geleden (terminaal Krijt)" }
        ],
        correct: 0,
        explanation: {
          en: "Molecular clock analyses calibrated with ancient protein degradation kinetics suggest Velociraptorinae diverged 95-102 million years ago during the mid-Cretaceous, consistent with the earliest fossil evidence and biogeographic patterns of dromaeosaurid diversification.",
          es: "Los análisis de reloj molecular calibrados con cinéticas de degradación de proteínas antiguas sugieren que Velociraptorinae divergió hace 95-102 millones de años durante el Cretácico medio, consistente con la evidencia fósil más temprana y patrones biogeográficos de diversificación de dromeosáuridos.",
          de: "Molekulare Uhrenanalysen, die mit antiken Protein-Abbaukinetiken kalibriert wurden, deuten darauf hin, dass Velociraptorinae vor 95-102 Millionen Jahren während der mittleren Kreide divergierte, konsistent mit den frühesten fossilen Belegen und biogeographischen Mustern der Dromaeosauriden-Diversifikation.",
          nl: "Moleculaire klok-analyses gekalibreerd met oude eiwit-degradatiekinetiek suggereren dat Velociraptorinae 95-102 miljoen jaar geleden divergeerde tijdens het midden-Krijt, consistent met het vroegste fossiele bewijs en biogeografische patronen van dromaeosauride diversificatie."
        }
      },
      {
        question: {
          en: "What does synchrotron-based phase contrast X-ray tomography reveal about the internal microvasculature of Velociraptor long bones?",
          es: "¿Qué revela la tomografía de rayos X de contraste de fase basada en sincrotrón sobre la microvasculatura interna de los huesos largos de Velociraptor?",
          de: "Was enthüllt synchrotronbasierte Phasenkontrast-Röntgentomographie über die interne Mikrovaskulatur der Velociraptor-Röhrenknochen?",
          nl: "Wat onthult synchrotron-gebaseerde fase-contrast röntgentomografie over de interne microvasculatuur van Velociraptor-lange botten?"
        },
        options: [
          { en: "Simple radial vascular organization similar to crocodilians", es: "Organización vascular radial simple similar a cocodrilos", de: "Einfache radiale Gefäßorganisation ähnlich Krokodilen", nl: "Eenvoudige radiale vasculaire organisatie vergelijkbaar met krokodillen" },
          { en: "Complex longitudinal-circumferential network resembling avian bone", es: "Red longitudinal-circunferencial compleja parecida al hueso aviar", de: "Komplexes longitudinal-zirumferentielles Netzwerk ähnlich Vogelknochen", nl: "Complex longitudinaal-circumferentieel netwerk dat lijkt op vogelbot" },
          { en: "Dense reticular vascular plexus indicating rapid bone turnover", es: "Plexo vascular reticular denso indicando recambio óseo rápido", de: "Dichter retikulärer Gefäßplexus zeigt schnellen Knochenumsatz an", nl: "Dichte reticulaire vasculaire plexus die snelle botomzet aanduidt" },
          { en: "Concentric lamellar pattern with minimal vascularization", es: "Patrón lamelar concéntrico con vascularización mínima", de: "Konzentrisches lamellares Muster mit minimaler Vaskularisation", nl: "Concentrisch lamellaire patroon met minimale vascularisatie" }
        ],
        correct: 2,
        explanation: {
          en: "Synchrotron phase contrast imaging reveals dense reticular vascular plexuses in Velociraptor bones, indicating rapid bone turnover rates consistent with endothermic metabolism and fast growth patterns typical of active predators.",
          es: "Las imágenes de contraste de fase de sincrotrón revelan plexos vasculares reticulares densos en huesos de Velociraptor, indicando tasas rápidas de recambio óseo consistentes con metabolismo endotérmico y patrones de crecimiento rápido típicos de depredadores activos.",
          de: "Synchrotron-Phasenkontrastbildgebung enthüllt dichte retikuläre Gefäßplexe in Velociraptor-Knochen, was schnelle Knochenumsatzraten anzeigt, die mit endothermem Stoffwechsel und schnellen Wachstumsmustern typisch für aktive Raubtiere übereinstimmen.",
          nl: "Synchrotron fase-contrast beeldvorming onthult dichte reticulaire vasculaire plexussen in Velociraptor-botten, wat snelle botomzet-snelheden aanduidt die consistent zijn met endotherme metabolisme en snelle groeipatronen typisch voor actieve roofdieren."
        }
      },
      {
        question: {
          en: "Based on computational fluid dynamics modeling of nasal cavity airflow, what specialized respiratory adaptations did Velociraptor possess?",
          es: "Basándose en modelado de dinámica de fluidos computacional del flujo de aire en la cavidad nasal, ¿qué adaptaciones respiratorias especializadas poseía Velociraptor?",
          de: "Basierend auf rechnerischer Strömungsdynamik-Modellierung des Nasenhöhlen-Luftstroms, welche spezialisierten Atemanpassungen besaß Velociraptor?",
          nl: "Gebaseerd op computationele vloeistofdynamica-modellering van neusholte-luchtstroom, welke gespecialiseerde ademhalingsadaptaties bezat Velociraptor?"
        },
        options: [
          { en: "Enhanced olfactory turbinates for chemical detection", es: "Turbinados olfativos mejorados para detección química", de: "Verbesserte olfaktorische Turbinate für chemische Detektion", nl: "Verbeterde olfactorische turbinaten voor chemische detectie" },
          { en: "Respiratory turbinates for efficient heat and moisture exchange", es: "Turbinados respiratorios para intercambio eficiente de calor y humedad", de: "Respiratorische Turbinate für effizienten Wärme- und Feuchtigkeitsaustausch", nl: "Respiratoire turbinaten voor efficiënte warmte- en vochtuitwisseling" },
          { en: "Enlarged frontal sinuses for sound resonance amplification", es: "Senos frontales agrandados para amplificación de resonancia sonora", de: "Vergrößerte Stirnhöhlen für Schallresonanzverstärkung", nl: "Vergrote frontale sinussen voor geluidsresonantie-versterking" },
          { en: "Simplified nasal passages optimized for high airflow rates", es: "Pasajes nasales simplificados optimizados para altas tasas de flujo de aire", de: "Vereinfachte Nasengänge optimiert für hohe Luftstromraten", nl: "Vereenvoudigde neuspassages geoptimaliseerd voor hoge luchtstroom-snelheden" }
        ],
        correct: 1,
        explanation: {
          en: "CFD modeling reveals that Velociraptor possessed well-developed respiratory turbinates that created complex airflow patterns optimized for heat and moisture recovery, supporting evidence for elevated metabolic rates and endothermic physiology.",
          es: "El modelado CFD revela que Velociraptor poseía turbinados respiratorios bien desarrollados que creaban patrones complejos de flujo de aire optimizados para la recuperación de calor y humedad, apoyando evidencia de tasas metabólicas elevadas y fisiología endotérmica.",
          de: "CFD-Modellierung zeigt, dass Velociraptor gut entwickelte respiratorische Turbinate besaß, die komplexe Luftstrommuster schufen, die für Wärme- und Feuchtigkeitsrückgewinnung optimiert waren, was Belege für erhöhte Stoffwechselraten und endotherme Physiologie stützt.",
          nl: "CFD-modellering toont aan dat Velociraptor goed ontwikkelde respiratoire turbinaten bezat die complexe luchtstroom-patronen creëerden geoptimaliseerd voor warmte- en vochtterugwinning, wat bewijs ondersteunt voor verhoogde metabole snelheden en endotherme fysiologie."
        }
      },
      {
        question: {
          en: "Which amino acid racemization patterns in Velociraptor eggshell proteins provide the most reliable geochronological constraints?",
          es: "¿Qué patrones de racemización de aminoácidos en proteínas de cáscara de huevo de Velociraptor proporcionan las limitaciones geocronológicas más confiables?",
          de: "Welche Aminosäure-Racemisierungsmuster in Velociraptor-Eierschalenproteinen liefern die zuverlässigsten geochronologischen Beschränkungen?",
          nl: "Welke aminozuur-racemisatiepatronen in Velociraptor-eierschaaleiwitten leveren de meest betrouwbare geochronologische beperkingen?"
        },
        options: [
          { en: "Aspartic acid racemization in calcitic shell matrix", es: "Racemización de ácido aspártico en matriz calcítica de cáscara", de: "Asparaginsäure-Racemisierung in kalzitischer Schalenmatrix", nl: "Asparaginezuur-racemisatie in calcitische schaalmatrix" },
          { en: "Alanine epimerization in organic membrane components", es: "Epimerización de alanina en componentes de membrana orgánica", de: "Alanin-Epimerisierung in organischen Membrankomponenten", nl: "Alanine-epimerisatie in organische membraancomponenten" },
          { en: "Glycine stability in preserved collagen cross-links", es: "Estabilidad de glicina en enlaces cruzados de colágeno preservados", de: "Glycin-Stabilität in erhaltenen Kollagen-Querverbindungen", nl: "Glycine-stabiliteit in gepreserveerde collageen-crosslinks" },
          { en: "Leucine/isoleucine ratios in crystalline carbonate inclusions", es: "Relaciones leucina/isoleucina en inclusiones de carbonato cristalino", de: "Leucin/Isoleucin-Verhältnisse in kristallinen Karbonat-Einschlüssen", nl: "Leucine/isoleucine-verhoudingen in kristallijne carbonaat-insluitsels" }
        ],
        correct: 0,
        explanation: {
          en: "Aspartic acid racemization in the calcitic shell matrix provides the most reliable geochronological constraints because it occurs at predictable rates under specific temperature conditions and is protected from contamination by the mineral matrix.",
          es: "La racemización de ácido aspártico en la matriz calcítica de la cáscara proporciona las limitaciones geocronológicas más confiables porque ocurre a tasas predecibles bajo condiciones específicas de temperatura y está protegida de la contaminación por la matriz mineral.",
          de: "Asparaginsäure-Racemisierung in der kalzitischen Schalenmatrix liefert die zuverlässigsten geochronologischen Beschränkungen, da sie bei vorhersagbaren Raten unter spezifischen Temperaturbedingungen auftritt und durch die Mineralmatrix vor Kontamination geschützt ist.",
          nl: "Asparaginezuur-racemisatie in de calcitische schaalmatrix levert de meest betrouwbare geochronologische beperkingen omdat het optreedt bij voorspelbare snelheden onder specifieke temperatuuromstandigheden en beschermd wordt tegen contaminatie door de mineraalmatrix."
        }
      },
      {
        question: {
          en: "What does stable isotope analysis (δ15N, δ13C, δ34S) of Velociraptor bone collagen reveal about their position in Late Cretaceous food webs?",
          es: "¿Qué revela el análisis de isótopos estables (δ15N, δ13C, δ34S) del colágeno óseo de Velociraptor sobre su posición en las redes alimentarias del Cretácico Tardío?",
          de: "Was enthüllt die Stable-Isotopen-Analyse (δ15N, δ13C, δ34S) von Velociraptor-Knochenkollagen über ihre Position in spätkreitezeitlichen Nahrungsnetzen?",
          nl: "Wat onthult stabiele isotopen-analyse (δ15N, δ13C, δ34S) van Velociraptor-beencollageen over hun positie in laat-Krijt voedselwebben?"
        },
        options: [
          { en: "Primary carnivore with minimal scavenging behavior", es: "Carnívoro primario con comportamiento carroñero mínimo", de: "Primärkarnivore mit minimalem Aasverhalten", nl: "Primaire carnivoor met minimaal aasgedrag" },
          { en: "Apex predator with high trophic level positioning", es: "Depredador ápice con posicionamiento de nivel trófico alto", de: "Spitzenprädator mit hoher trophischer Ebene", nl: "Top-predator met hoge trofische niveau-positionering" },
          { en: "Mesopredator with mixed diet including fish and small vertebrates", es: "Mesodepredador con dieta mixta incluyendo peces y pequeños vertebrados", de: "Mesoprädator mit gemischter Diät einschließlich Fischen und kleinen Wirbeltieren", nl: "Mesopredator met gemengd dieet inclusief vis en kleine gewervelden" },
          { en: "Opportunistic omnivore with significant plant material consumption", es: "Omnívoro oportunista con consumo significativo de material vegetal", de: "Opportunistischer Omnivore mit signifikantem Pflanzenmaterialverbrauch", nl: "Opportunistische omnivoor met significante plantmateriaal-consumptie" }
        ],
        correct: 2,
        explanation: {
          en: "Multi-isotope analysis indicates Velociraptor was a mesopredator with δ15N values suggesting consumption of fish and small vertebrates, δ13C patterns indicating mixed terrestrial-aquatic prey sources, and δ34S signatures consistent with coastal ecosystem exploitation.",
          es: "El análisis multi-isotópico indica que Velociraptor era un mesodepredador con valores de δ15N sugiriendo consumo de peces y pequeños vertebrados, patrones de δ13C indicando fuentes mixtas de presas terrestres-acuáticas, y firmas de δ34S consistentes con explotación de ecosistemas costeros.",
          de: "Multi-Isotopen-Analyse zeigt, dass Velociraptor ein Mesoprädator mit δ15N-Werten war, die Verzehr von Fischen und kleinen Wirbeltieren nahelegen, δ13C-Muster zeigen gemischte terrestrisch-aquatische Beutequellen, und δ34S-Signaturen sind konsistent mit Küstenökosystem-Nutzung.",
          nl: "Multi-isotopen-analyse toont aan dat Velociraptor een mesopredator was met δ15N-waarden die consumptie van vis en kleine gewervelden suggereren, δ13C-patronen die gemengde terrestrisch-aquatische prooibronnen aangeven, en δ34S-signaturen consistent met kustecosysteem-exploitatie."
        }
      },
      {
        question: {
          en: "Based on quantitative trait evolution models, which morphological characters in Velociraptorinae show the strongest phylogenetic signal for dromaeosaurid relationships?",
          es: "Basándose en modelos de evolución de caracteres cuantitativos, ¿qué caracteres morfológicos en Velociraptorinae muestran la señal filogenética más fuerte para las relaciones de dromeosáuridos?",
          de: "Welche morphologischen Merkmale in Velociraptorinae zeigen basierend auf quantitativen Merkmals-Evolutionsmodellen das stärkste phylogenetische Signal für Dromaeosauriden-Verwandtschaften?",
          nl: "Gebaseerd op kwantitatieve eigenschap-evolutiemodellen, welke morfologische kenmerken in Velociraptorinae tonen het sterkste fylogenetische signaal voor dromaeosauride verwantschappen?"
        },
        options: [
          { en: "Cranial fenestration patterns and pneumaticity indices", es: "Patrones de fenestración craneal e índices de neumaticidad", de: "Kraniale Fenestrierungsmuster und Pneumatizitätsindizes", nl: "Craniale venstratiepatronen en pneumaticiteitsindices" },
          { en: "Pedal ungual curvature and cross-sectional geometry", es: "Curvatura ungueal pedal y geometría de sección transversal", de: "Pedale Ungual-Krümmung und Querschnittsgeometrie", nl: "Pedale unguale kromming en dwarsdoorsnede-geometrie" },
          { en: "Vertebral centrum proportions and neural arch morphology", es: "Proporciones del centro vertebral y morfología del arco neural", de: "Wirbel-Zentrum-Proportionen und Neuralbogen-Morphologie", nl: "Vertebraal centrum-proporties en neurale boog-morfologie" },
          { en: "Manual digit length ratios and phalangeal articulations", es: "Relaciones de longitud de dígitos manuales y articulaciones falangeales", de: "Manuelle Digit-Längenverhältnisse und Phalangen-Artikulationen", nl: "Handmatige digit-lengteverhoudingen en falangeale articulaties" }
        ],
        correct: 1,
        explanation: {
          en: "Pedal ungual curvature and cross-sectional geometry show the strongest phylogenetic signal in Velociraptorinae, as these functional morphological traits are directly linked to predatory behavior and show clear evolutionary trends within dromaeosaurid clades.",
          es: "La curvatura ungueal pedal y la geometría de sección transversal muestran la señal filogenética más fuerte en Velociraptorinae, ya que estos rasgos morfológicos funcionales están directamente vinculados al comportamiento depredador y muestran tendencias evolutivas claras dentro de los clados de dromeosáuridos.",
          de: "Pedale Ungual-Krümmung und Querschnittsgeometrie zeigen das stärkste phylogenetische Signal in Velociraptorinae, da diese funktionsmorphologischen Merkmale direkt mit Raubverhalten verbunden sind und klare evolutionäre Trends innerhalb von Dromaeosauriden-Kladen zeigen.",
          nl: "Pedale unguale kromming en dwarsdoorsnede-geometrie tonen het sterkste fylogenetische signaal in Velociraptorinae, omdat deze functioneel-morfologische kenmerken direct verbonden zijn met predatiegedrag en duidelijke evolutionaire trends tonen binnen dromaeosauride clades."
        }
      },
      {
        question: {
          en: "What does laser-induced breakdown spectroscopy (LIBS) of Velociraptor tooth enamel reveal about trace element incorporation during biomineralization?",
          es: "¿Qué revela la espectroscopia de ruptura inducida por láser (LIBS) del esmalte dental de Velociraptor sobre la incorporación de elementos traza durante la biomineralización?",
          de: "Was enthüllt Laser-induzierte Breakdown-Spektroskopie (LIBS) von Velociraptor-Zahnschmelz über Spurenelementeinbau während der Biomineralisation?",
          nl: "Wat onthult laser-geïnduceerde breakdown-spectroscopie (LIBS) van Velociraptor-tandglazuur over sporenelement-incorporatie tijdens biomineralisatie?"
        },
        options: [
          { en: "Elevated strontium levels indicating marine dietary components", es: "Niveles elevados de estroncio indicando componentes dietarios marinos", de: "Erhöhte Strontiumwerte zeigen marine Diätkomponenten an", nl: "Verhoogde strontiumniveaus die mariene voedingscomponenten aangeven" },
          { en: "Zinc and manganese gradients reflecting seasonal feeding patterns", es: "Gradientes de zinc y manganeso reflejando patrones de alimentación estacionales", de: "Zink- und Mangan-Gradienten spiegeln saisonale Fütterungsmuster wider", nl: "Zink- en mangaangradiënten die seizoensgebonden voedingspatronen weerspiegelen" },
          { en: "Barium incorporation patterns consistent with freshwater ecology", es: "Patrones de incorporación de bario consistentes con ecología de agua dulce", de: "Barium-Einbaumuster konsistent mit Süßwasser-Ökologie", nl: "Barium-incorporatiepatronen consistent met zoetwaterecologie" },
          { en: "Fluorine enrichment zones indicating arid environmental conditions", es: "Zonas de enriquecimiento de flúor indicando condiciones ambientales áridas", de: "Fluor-Anreicherungszonen zeigen aride Umweltbedingungen an", nl: "Fluorverrijkingszones die aride omgevingscondities aangeven" }
        ],
        correct: 3,
        explanation: {
          en: "LIBS analysis reveals fluorine enrichment zones in Velociraptor tooth enamel that correlate with growth increments, indicating periodic exposure to arid conditions consistent with the semi-desert paleoenvironments of the Djadokhta Formation.",
          es: "El análisis LIBS revela zonas de enriquecimiento de flúor en el esmalte dental de Velociraptor que se correlacionan con incrementos de crecimiento, indicando exposición periódica a condiciones áridas consistentes con los paleoambientes semi-desérticos de la Formación Djadokhta.",
          de: "LIBS-Analyse enthüllt Fluor-Anreicherungszonen in Velociraptor-Zahnschmelz, die mit Wachstumszuwächsen korrelieren und periodische Exposition gegenüber ariden Bedingungen anzeigen, die mit den Halbwüsten-Paläoumgebungen der Djadokhta-Formation übereinstimmen.",
          nl: "LIBS-analyse onthult fluorverrijkingszones in Velociraptor-tandglazuur die correleren met groei-incrementen, wat periodieke blootstelling aan aride omstandigheden aangeeft die consistent zijn met de semi-woestijn-paleoomgevingen van de Djadokhta-formatie."
        }
      },
      {
        question: {
          en: "Based on comparative developmental biology studies, which regulatory gene networks show conserved expression between Velociraptor-like theropods and modern bird embryos?",
          es: "Basándose en estudios de biología del desarrollo comparativa, ¿qué redes de genes reguladores muestran expresión conservada entre terópodos similares a Velociraptor y embriones de aves modernas?",
          de: "Welche regulatorischen Gennetzwerke zeigen basierend auf vergleichenden Entwicklungsbiologie-Studien konservierte Expression zwischen Velociraptor-ähnlichen Theropoden und modernen Vogelembryonen?",
          nl: "Gebaseerd op vergelijkende ontwikkelingsbiologie-studies, welke regulatoire gennetwerken tonen geconserveerde expressie tussen Velociraptor-achtige theropoden en moderne vogelembryos?"
        },
        options: [
          { en: "TBX3 and MSX1 in limb bud patterning pathways", es: "TBX3 y MSX1 en vías de patrones de brotes de extremidades", de: "TBX3 und MSX1 in Extremitätenknospen-Musterungswegen", nl: "TBX3 en MSX1 in ledemaat-knop-patroneringspaden" },
          { en: "DLX5 and DLX6 in craniofacial development cascades", es: "DLX5 y DLX6 en cascadas de desarrollo craneofacial", de: "DLX5 und DLX6 in kraniofazialen Entwicklungskaskaden", nl: "DLX5 en DLX6 in craniofaciale ontwikkelingscascades" },
          { en: "FGF8 and WNT signaling in feather follicle morphogenesis", es: "Señalización FGF8 y WNT en morfogénesis de folículos de plumas", de: "FGF8- und WNT-Signaling in Federfollikel-Morphogenese", nl: "FGF8 en WNT-signalering in veerfollikel-morfogenese" },
          { en: "PITX1 and PITX2 in hindlimb identity specification", es: "PITX1 y PITX2 en especificación de identidad de miembros posteriores", de: "PITX1 und PITX2 in Hinterbein-Identitätsspezifikation", nl: "PITX1 en PITX2 in achterpoot-identiteitsspecificatie" }
        ],
        correct: 2,
        explanation: {
          en: "FGF8 and WNT signaling pathways show highly conserved expression patterns in feather follicle morphogenesis, with molecular evidence suggesting these same regulatory networks controlled integumentary appendage development in Velociraptor and other feathered theropods.",
          es: "Las vías de señalización FGF8 y WNT muestran patrones de expresión altamente conservados en la morfogénesis de folículos de plumas, con evidencia molecular sugiriendo que estas mismas redes reguladoras controlaban el desarrollo de apéndices tegumentarios en Velociraptor y otros terópodos emplumados.",
          de: "FGF8- und WNT-Signalwege zeigen hochkonservierte Expressionsmuster in der Federfollikel-Morphogenese, mit molekularen Belegen, die nahelegen, dass dieselben regulatorischen Netzwerke die Entwicklung integumentärer Anhänge in Velociraptor und anderen befiederten Theropoden kontrollierten.",
          nl: "FGF8 en WNT-signaleringspaden tonen hooggeconserveerde expressiepatronen in veerfollikel-morfogenese, met moleculair bewijs dat suggereert dat dezelfde regulatoire netwerken de ontwikkeling van integumentaire aanhangsels controleerden in Velociraptor en andere gevederde theropoden."
        }
      },
      {
        question: {
          en: "What does quantitative analysis of bone histological features reveal about the growth rate and metabolic scaling of Velociraptor mongoliensis?",
          es: "¿Qué revela el análisis cuantitativo de características histológicas óseas sobre la tasa de crecimiento y escalado metabólico de Velociraptor mongoliensis?",
          de: "Was enthüllt die quantitative Analyse histologischer Knochenmerkmale über die Wachstumsrate und metabolische Skalierung von Velociraptor mongoliensis?",
          nl: "Wat onthult kwantitatieve analyse van bothistologische kenmerken over de groeisnelheid en metabole schaling van Velociraptor mongoliensis?"
        },
        options: [
          { en: "Laminar bone with growth rates of 15-25 mm/year", es: "Hueso laminar con tasas de crecimiento de 15-25 mm/año", de: "Laminärer Knochen mit Wachstumsraten von 15-25 mm/Jahr", nl: "Laminair bot met groeisnelheden van 15-25 mm/jaar" },
          { en: "Fibrolamellar bone with growth rates of 45-68 mm/year", es: "Hueso fibrolamelar con tasas de crecimiento de 45-68 mm/año", de: "Fibrolamellärer Knochen mit Wachstumsraten von 45-68 mm/Jahr", nl: "Fibrolaminair bot met groeisnelheden van 45-68 mm/jaar" },
          { en: "Woven bone with growth rates exceeding 80 mm/year", es: "Hueso entretejido con tasas de crecimiento superiores a 80 mm/año", de: "Geflechtknochen mit Wachstumsraten über 80 mm/Jahr", nl: "Geweven bot met groeisnelheden boven 80 mm/jaar" },
          { en: "Parallel-fibered bone with growth rates of 8-12 mm/year", es: "Hueso de fibras paralelas con tasas de crecimiento de 8-12 mm/año", de: "Parallel-faseriger Knochen mit Wachstumsraten von 8-12 mm/Jahr", nl: "Parallel-vezelbot met groeisnelheden van 8-12 mm/jaar" }
        ],
        correct: 1,
        explanation: {
          en: "Quantitative histological analysis reveals fibrolamellar bone tissue with growth rates of 45-68 mm/year, indicating rapid growth comparable to modern endothermic animals and suggesting elevated metabolic rates consistent with active predatory lifestyles.",
          es: "El análisis histológico cuantitativo revela tejido óseo fibrolamelar con tasas de crecimiento de 45-68 mm/año, indicando crecimiento rápido comparable a animales endotérmicos modernos y sugiriendo tasas metabólicas elevadas consistentes con estilos de vida depredadores activos.",
          de: "Quantitative histologische Analyse zeigt fibrolamelläres Knochengewebe mit Wachstumsraten von 45-68 mm/Jahr, was schnelles Wachstum vergleichbar mit modernen endothermen Tieren anzeigt und erhöhte Stoffwechselraten nahelegt, die mit aktiven räuberischen Lebensweisen übereinstimmen.",
          nl: "Kwantitatieve histologische analyse onthult fibrolaminair botweefsel met groeisnelheden van 45-68 mm/jaar, wat snelle groei aangeeft vergelijkbaar met moderne endotherme dieren en suggereert verhoogde metabole snelheden consistent met actieve predatoire levensstijlen."
        }
      },
      {
        question: {
          en: "How do micro-CT scan analyses of Velociraptor semicircular canal morphology inform our understanding of their vestibular system capabilities?",
          es: "¿Cómo informan los análisis de micro-tomografía de la morfología del canal semicircular del Velociraptor nuestra comprensión de las capacidades de su sistema vestibular?",
          de: "Wie informieren Mikro-CT-Scan-Analysen der Velociraptor-Bogengang-Morphologie unser Verständnis ihrer Vestibularsystem-Fähigkeiten?",
          nl: "Hoe informeren micro-CT scan analyses van Velociraptor semicirculaire kanaal morfologie ons begrip van hun vestibulair systeem capaciteiten?"
        },
        options: [
          { en: "Enlarged lateral semicircular canal indicates enhanced angular acceleration detection for rapid head movements during prey pursuit", es: "Canal semicircular lateral agrandado indica detección mejorada de aceleración angular para movimientos rápidos de cabeza durante persecución de presas", de: "Vergrößerter lateraler Bogengang zeigt verbesserte Winkelbeschleunigungserkennung für schnelle Kopfbewegungen während Beuteverfolgung", nl: "Vergroot lateraal semicirculair kanaal geeft verbeterde angulaire acceleratie detectie aan voor snelle hoofdbewegingen tijdens prooi achtervolging" },
          { en: "Reduced semicircular canals indicating poor balance", es: "Canales semicirculares reducidos indicando mal equilibrio", de: "Reduzierte Bogengänge zeigen schlechte Balance", nl: "Gereduceerde semicirculaire kanalen die slechte balans aangeven" },
          { en: "Standard reptilian semicircular canal proportions", es: "Proporciones estándar de canales semicirculares reptilianos", de: "Standard-Reptilien-Bogengang-Proportionen", nl: "Standaard reptiliaanse semicirculaire kanaal proporties" },
          { en: "Aquatic adaptation in semicircular canal structure", es: "Adaptación acuática en estructura de canal semicircular", de: "Aquatische Anpassung in Bogengang-Struktur", nl: "Aquatische aanpassing in semicirculaire kanaal structuur" }
        ],
        correct: 0,
        explanation: {
          en: "Micro-CT analysis reveals enlarged lateral semicircular canals in Velociraptor, indicating enhanced sensitivity to angular head movements, crucial for maintaining visual tracking during rapid pursuit maneuvers and complex predatory behaviors.",
          es: "El análisis de micro-tomografía revela canales semicirculares laterales agrandados en Velociraptor, indicando sensibilidad mejorada a movimientos angulares de cabeza, crucial para mantener seguimiento visual durante maniobras de persecución rápidas y comportamientos depredadores complejos.",
          de: "Mikro-CT-Analyse zeigt vergrößerte laterale Bogengänge in Velociraptor, was verbesserte Empfindlichkeit für Winkelkopfbewegungen anzeigt, entscheidend für die Aufrechterhaltung visueller Verfolgung während schneller Verfolgungsmanöver und komplexer räuberischer Verhaltensweisen.",
          nl: "Micro-CT analyse onthult vergrote laterale semicirculaire kanalen in Velociraptor, wat verbeterde gevoeligheid voor angulaire hoofdbewegingen aangeeft, cruciaal voor het behouden van visuele tracking tijdens snelle achtervolging manoeuvres en complexe predatoire gedragingen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
