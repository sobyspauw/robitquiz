// Cretaceous Dinosaurs Quiz - Level 6: Advanced Knowledge
(function() {
  const level6 = {
    name: {
      en: "Cretaceous Dinosaurs Level 6",
      es: "Dinosaurios del Cretácico Nivel 6",
      de: "Kreidezeit Dinosaurier Stufe 6",
      nl: "Krijt Dino's Level 6"
    },
    questions: [
      {
        question: {
          en: "What does the microstructure of Carnotaurus vertebrae reveal about its locomotory adaptations?",
          es: "¿Qué revela la microestructura de las vértebras de Carnotaurus sobre sus adaptaciones locomotoras?",
          de: "Was verrät die Mikrostruktur der Carnotaurus-Wirbel über seine lokomotorischen Anpassungen?",
          nl: "Wat onthult de microstructuur van Carnotaurus wervels over zijn locomotorische aanpassingen?"
        },
        options: [
          { en: "Pneumatized vertebrae reducing body weight for enhanced cursorial performance", es: "Vértebras neumatizadas reduciendo peso corporal para rendimiento cursorial mejorado", de: "Pneumatisierte Wirbel reduzieren Körpergewicht für verbesserte kursoriale Leistung", nl: "Gepneumatiseerde wervels die lichaamsgewicht verminderen voor verbeterde cursoriale prestaties" },
          { en: "Solid bone structure for aquatic diving", es: "Estructura ósea sólida para buceo acuático", de: "Solide Knochenstruktur für aquatisches Tauchen", nl: "Solide botstructuur voor aquatisch duiken" },
          { en: "Enlarged neural canals for enhanced balance", es: "Canales neurales agrandados para equilibrio mejorado", de: "Vergrößerte Neuralkanäle für verbessertes Gleichgewicht", nl: "Vergrote neurale kanalen voor verbeterd evenwicht" },
          { en: "Dense mineralization for impact resistance", es: "Mineralización densa para resistencia al impacto", de: "Dichte Mineralisierung für Schlagfestigkeit", nl: "Dichte mineralisatie voor impactweerstand" }
        ],
        correct: 0,
        explanation: {
          en: "Carnotaurus vertebrae show extensive pneumatization (air-filled spaces) that reduced skeletal weight while maintaining structural integrity, a key adaptation for its extreme cursorial lifestyle.",
          es: "Las vértebras de Carnotaurus muestran neumatización extensiva (espacios llenos de aire) que redujo el peso esquelético mientras mantenía la integridad estructural, una adaptación clave para su estilo de vida cursorial extremo.",
          de: "Carnotaurus-Wirbel zeigen extensive Pneumatisierung (luftgefüllte Räume), die das Skelettgewicht reduzierten während die strukturelle Integrität erhalten blieb, eine Schlüsselanpassung für seinen extremen kursorialen Lebensstil.",
          nl: "Carnotaurus wervels tonen uitgebreide pneumatisatie (lucht-gevulde ruimtes) die skeletaal gewicht verminderde terwijl structurele integriteit behouden bleef, een sleutelaanpassing voor zijn extreme cursoriale levensstijl."
        }
      },
      {
        question: {
          en: "What phylogenetic analysis reveals about the position of Therizinosaurus within Maniraptora?",
          es: "¿Qué revela el análisis filogenético sobre la posición de Therizinosaurus dentro de Maniraptora?",
          de: "Was enthüllt die phylogenetische Analyse über die Position von Therizinosaurus innerhalb Maniraptora?",
          nl: "Wat onthult fylogenetische analyse over de positie van Therizinosaurus binnen Maniraptora?"
        },
        options: [
          { en: "Sister taxon to Oviraptorosauria, confirming herbivorous maniraptoran clade", es: "Taxón hermano de Oviraptorosauria, confirmando clado maniraptor herbívoro", de: "Schwestertaxon zu Oviraptorosauria, bestätigt herbivoren Maniraptoran-Klade", nl: "Zuster taxon van Oviraptorosauria, bevestigend herbivore maniraptoran clade" },
          { en: "Basal position within Dromaeosauridae", es: "Posición basal dentro de Dromaeosauridae", de: "Basale Position innerhalb Dromaeosauridae", nl: "Basale positie binnen Dromaeosauridae" },
          { en: "Sister group to modern birds", es: "Grupo hermano de aves modernas", de: "Schwestergruppe zu modernen Vögeln", nl: "Zustergroep van moderne vogels" },
          { en: "Outside Maniraptora entirely", es: "Completamente fuera de Maniraptora", de: "Vollständig außerhalb Maniraptora", nl: "Volledig buiten Maniraptora" }
        ],
        correct: 0,
        explanation: {
          en: "Phylogenetic studies place Therizinosaurus and other therizinosauroids as sister taxa to Oviraptorosauria, forming a clade of herbivorous maniraptorans that evolved from carnivorous ancestors.",
          es: "Los estudios filogenéticos colocan a Therizinosaurus y otros therizinosaróideos como taxa hermanos de Oviraptorosauria, formando un clado de maniraptores herbívoros que evolucionaron de ancestros carnívoros.",
          de: "Phylogenetische Studien platzieren Therizinosaurus und andere Therizinosauroidea als Schwestertaxa zu Oviraptorosauria und bilden einen Klade herbivorer Maniraptorans, die sich aus fleischfressenden Vorfahren entwickelten.",
          nl: "Fylogenetische studies plaatsen Therizinosaurus en andere therizinosauroidea als zuster taxa van Oviraptorosauria, vormend een clade van herbivore maniraptoren die evolueerden uit carnivore voorouders."
        }
      },
      {
        question: {
          en: "What does the postcranial anatomy of Giganotosaurus suggest about its ecological niche compared to Tyrannosaurus?",
          es: "¿Qué sugiere la anatomía postcraneal de Giganotosaurus sobre su nicho ecológico comparado con Tyrannosaurus?",
          de: "Was deutet die postkranielle Anatomie von Giganotosaurus über seine ökologische Nische im Vergleich zu Tyrannosaurus an?",
          nl: "Wat suggereert de postcraniële anatomie van Giganotosaurus over zijn ecologische niche vergeleken met Tyrannosaurus?"
        },
        options: [
          { en: "Specialized for hunting massive sauropods in open environments", es: "Especializado para cazar saurópodos masivos en ambientes abiertos", de: "Spezialisiert auf die Jagd nach massiven Sauropoden in offenen Umgebungen", nl: "Gespecialiseerd voor jagen op massieve sauropoden in open omgevingen" },
          { en: "Adapted for scavenging in forest environments", es: "Adaptado para carroñeo en ambientes forestales", de: "Angepasst für Aasfresser in Waldumgebungen", nl: "Aangepast voor aaseten in bosomgevingen" },
          { en: "Exclusively piscivorous lifestyle", es: "Estilo de vida exclusivamente piscívoro", de: "Ausschließlich fischfressender Lebensstil", nl: "Exclusief piscivore levensstijl" },
          { en: "Primarily insectivorous diet", es: "Dieta principalmente insectívora", de: "Hauptsächlich insektenfressende Ernährung", nl: "Voornamelijk insectivoor dieet" }
        ],
        correct: 0,
        explanation: {
          en: "Giganotosaurus shows adaptations for active predation of large prey, with longer limbs for pursuing massive sauropods across open landscapes, contrasting with T. rex's more robust build for ambush hunting.",
          es: "Giganotosaurus muestra adaptaciones para depredación activa de presas grandes, con extremidades más largas para perseguir saurópodos masivos a través de paisajes abiertos, contrastando con la construcción más robusta de T. rex para caza de emboscada.",
          de: "Giganotosaurus zeigt Anpassungen für aktive Beute großer Tiere mit längeren Gliedmaßen für die Verfolgung massiver Sauropoden über offene Landschaften, im Gegensatz zu T. rex' robusterem Bau für Hinterhalts-Jagd.",
          nl: "Giganotosaurus toont aanpassingen voor actieve predatie van grote prooi, met langere ledematen voor het achtervolgen van massieve sauropoden over open landschappen, contrasterend met T. rex's meer robuuste bouw voor hinderlaag jacht."
        }
      },
      {
        question: {
          en: "What does palynological evidence suggest about angiosperm-dinosaur coevolution during the Cretaceous?",
          es: "¿Qué sugiere la evidencia palinológica sobre la coevolución angiosperma-dinosaurio durante el Cretácico?",
          de: "Was deutet palynologische Evidenz über Angiospermen-Dinosaurier-Koevolution während der Kreidezeit an?",
          nl: "Wat suggereert palynologisch bewijs over angiosperm-dinosaurus co-evolutie tijdens het Krijt?"
        },
        options: [
          { en: "Radiation of flowering plants drove diversification of specialized herbivorous dinosaurs", es: "La radiación de plantas con flores impulsó la diversificación de dinosaurios herbívoros especializados", de: "Die Radiation von Blütenpflanzen trieb die Diversifikation spezialisierter herbivorer Dinosaurier an", nl: "Straling van bloeiende planten dreef diversificatie van gespecialiseerde herbivore dinosaurussen aan" },
          { en: "Dinosaurs prevented flowering plant evolution", es: "Los dinosaurios previno la evolución de plantas con flores", de: "Dinosaurier verhinderten die Evolution von Blütenpflanzen", nl: "Dinosaurussen voorkwamen bloeiende planten evolutie" },
          { en: "No interaction between plants and herbivorous dinosaurs", es: "Sin interacción entre plantas y dinosaurios herbívoros", de: "Keine Interaktion zwischen Pflanzen und herbivoren Dinosauriern", nl: "Geen interactie tussen planten en herbivore dinosaurussen" },
          { en: "Flowering plants appeared only after dinosaur extinction", es: "Las plantas con flores aparecieron solo después de la extinción de dinosaurios", de: "Blütenpflanzen erschienen erst nach dem Dinosaurier-Aussterben", nl: "Bloeiende planten verschenen alleen na dinosaurus uitsterven" }
        ],
        correct: 0,
        explanation: {
          en: "Palynological studies show the rapid diversification of angiosperms in the mid-Cretaceous coincided with the evolution of new herbivorous dinosaur lineages with specialized feeding adaptations for processing these new plant types.",
          es: "Los estudios palinológicos muestran que la diversificación rápida de angiospermas en el Cretácico medio coincidió con la evolución de nuevos linajes de dinosaurios herbívoros con adaptaciones alimentarias especializadas para procesar estos nuevos tipos de plantas.",
          de: "Palynologische Studien zeigen, dass die schnelle Diversifikation von Angiospermen in der mittleren Kreidezeit mit der Evolution neuer herbivorer Dinosaurier-Linien mit spezialisierten Fressanpassungen für die Verarbeitung dieser neuen Pflanzentypen zusammenfiel.",
          nl: "Palynologische studies tonen dat de snelle diversificatie van angiospermen in het midden-Krijt samenviel met de evolutie van nieuwe herbivore dinosaurus lijnen met gespecialiseerde voedings aanpassingen voor het verwerken van deze nieuwe planttypes."
        }
      },
      {
        question: {
          en: "What taphonomic processes account for the exceptional soft tissue preservation in some Cretaceous dinosaur fossils?",
          es: "¿Qué procesos tafonómicos explican la preservación excepcional de tejidos blandos en algunos fósiles de dinosaurios del Cretácico?",
          de: "Welche taphonomischen Prozesse erklären die außergewöhnliche Weichgewebe-Erhaltung bei einigen Kreidezeit-Dinosaurier-Fossilien?",
          nl: "Welke tafonomische processen verklaren de uitzonderlijke zachte weefsel bewaring in sommige Krijt dinosaurus fossielen?"
        },
        options: [
          { en: "Rapid anoxic burial preventing bacterial decay and mineral replacement", es: "Enterramiento anóxico rápido previniendo descomposición bacterial y reemplazo mineral", de: "Schnelle anoxische Einbettung verhindert bakteriellen Zerfall und Mineralersatz", nl: "Snelle anoxische begraving voorkomend bacteriële verval en mineraal vervanging" },
          { en: "Freeze-drying in polar climates", es: "Liofilización en climas polares", de: "Gefriertrocknung in polaren Klimaten", nl: "Vriesdraging in polaire klimaten" },
          { en: "Artificial preservation by ancient civilizations", es: "Preservación artificial por civilizaciones antiguas", de: "Künstliche Konservierung durch alte Zivilisationen", nl: "Kunstmatige bewaring door oude beschavingen" },
          { en: "Chemical mummification in desert environments", es: "Momificación química en ambientes desérticos", de: "Chemische Mumifizierung in Wüstenumgebungen", nl: "Chemische mummificatie in woestijn omgevingen" }
        ],
        correct: 0,
        explanation: {
          en: "Exceptional soft tissue preservation occurs when rapid burial in anoxic conditions prevents bacterial decomposition, followed by early mineral precipitation that replaces organic compounds while preserving cellular structure.",
          es: "La preservación excepcional de tejidos blandos ocurre cuando el enterramiento rápido en condiciones anóxicas previene la descomposición bacteriana, seguido por precipitación mineral temprana que reemplaza compuestos orgánicos mientras preserva la estructura celular.",
          de: "Außergewöhnliche Weichgewebe-Erhaltung tritt auf, wenn schnelle Einbettung in anoxischen Bedingungen bakterielle Zersetzung verhindert, gefolgt von früher Mineralfällung, die organische Verbindungen ersetzt während die Zellstruktur erhalten bleibt.",
          nl: "Uitzonderlijke zachte weefsel bewaring treedt op wanneer snelle begraving in anoxische omstandigheden bacteriële ontbinding voorkomt, gevolgd door vroege mineraal neerslag die organische verbindingen vervangt terwijl cellulaire structuur behouden blijft."
        }
      },
      {
        question: {
          en: "What does the endocranial anatomy of Parasaurolophus reveal about its acoustic capabilities?",
          es: "¿Qué revela la anatomía endocraneal de Parasaurolophus sobre sus capacidades acústicas?",
          de: "Was verrät die endokraniale Anatomie von Parasaurolophus über seine akustischen Fähigkeiten?",
          nl: "Wat onthult de endocraniale anatomie van Parasaurolophus over zijn akoestische capaciteiten?"
        },
        options: [
          { en: "Enlarged eighth cranial nerve indicating enhanced auditory processing", es: "Nervio craneal octavo agrandado indicando procesamiento auditivo mejorado", de: "Vergrößerter achter Hirnnerv zeigt verbesserte auditive Verarbeitung", nl: "Vergrote achtste hersenzenuw wijzend op verbeterde auditieve verwerking" },
          { en: "Reduced brain size limiting sound production", es: "Tamaño cerebral reducido limitando producción de sonido", de: "Reduzierte Gehirngröße begrenzt Schallerzeugung", nl: "Verminderde hersengrootte beperkend geluid productie" },
          { en: "Lack of auditory processing centers", es: "Falta de centros de procesamiento auditivo", de: "Mangel an auditiven Verarbeitungszentren", nl: "Gebrek aan auditieve verwerkingscentra" },
          { en: "Visual cortex dominance over auditory regions", es: "Dominancia de corteza visual sobre regiones auditivas", de: "Visuelle Cortex-Dominanz über auditive Regionen", nl: "Visuele cortex dominantie over auditieve regio's" }
        ],
        correct: 0,
        explanation: {
          en: "Endocranial casts of Parasaurolophus show enlarged eighth cranial nerve canals and expanded regions associated with auditory processing, supporting the acoustic communication hypothesis for their hollow crests.",
          es: "Los moldes endocraneales de Parasaurolophus muestran canales agrandados del octavo nervio craneal y regiones expandidas asociadas con procesamiento auditivo, apoyando la hipótesis de comunicación acústica para sus crestas huecas.",
          de: "Endokraniale Abgüsse von Parasaurolophus zeigen vergrößerte achte Hirnnervkanäle und erweiterte Regionen, die mit auditiver Verarbeitung verbunden sind, und unterstützen die akustische Kommunikationshypothese für ihre hohlen Kämme.",
          nl: "Endocraniale afgietsels van Parasaurolophus tonen vergrote achtste hersenzenuw kanalen en uitgebreide regio's geassocieerd met auditieve verwerking, ondersteunend de akoestische communicatie hypothese voor hun holle kammen."
        }
      },
      {
        question: {
          en: "What does isotopic analysis of Spinosaurus bone phosphate reveal about its aquatic behavior?",
          es: "¿Qué revela el análisis isotópico del fosfato óseo de Spinosaurus sobre su comportamiento acuático?",
          de: "Was enthüllt die Isotopen-Analyse des Knochenphosphats von Spinosaurus über sein aquatisches Verhalten?",
          nl: "Wat onthult isotopische analyse van Spinosaurus botfosfaat over zijn aquatisch gedrag?"
        },
        options: [
          { en: "δ18O values consistent with semi-aquatic crocodilian lifestyle", es: "Valores δ18O consistentes con estilo de vida semi-acuático de cocodrilo", de: "δ18O-Werte konsistent mit halb-aquatischem Krokodil-Lebensstil", nl: "δ18O waarden consistent met semi-aquatische krokodilachtige levensstijl" },
          { en: "Terrestrial isotope signatures only", es: "Solo firmas isotópicas terrestres", de: "Nur terrestrische Isotopensignaturen", nl: "Alleen terrestrische isotoop handtekeningen" },
          { en: "Deep marine habitat indicators", es: "Indicadores de hábitat marino profundo", de: "Tiefmarine Lebensraum-Indikatoren", nl: "Diepe marine habitat indicatoren" },
          { en: "Exclusively aerial lifestyle markers", es: "Marcadores de estilo de vida exclusivamente aéreo", de: "Ausschließlich luftige Lebensstil-Marker", nl: "Exclusief luchtige levensstijl markers" }
        ],
        correct: 0,
        explanation: {
          en: "Oxygen isotope ratios in Spinosaurus bone phosphate match those of semi-aquatic animals, indicating it spent considerable time in aquatic environments, similar to modern hippos and crocodiles.",
          es: "Las relaciones de isótopos de oxígeno en el fosfato óseo de Spinosaurus coinciden con las de animales semi-acuáticos, indicando que pasó considerable tiempo en ambientes acuáticos, similar a hipopótamos y cocodrilos modernos.",
          de: "Sauerstoff-Isotopenverhältnisse im Knochenphosphat von Spinosaurus stimmen mit denen halb-aquatischer Tiere überein, was darauf hinweist, dass er beträchtliche Zeit in aquatischen Umgebungen verbrachte, ähnlich wie moderne Flusspferde und Krokodile.",
          nl: "Zuurstof isotoop verhoudingen in Spinosaurus botfosfaat komen overeen met die van semi-aquatische dieren, wijzend dat hij aanzienlijke tijd doorbracht in aquatische omgevingen, vergelijkbaar met moderne nijlpaarden en krokodillen."
        }
      },
      {
        question: {
          en: "What does the biomechanical analysis of ceratopsian frill attachment sites suggest about their function?",
          es: "¿Qué sugiere el análisis biomecánico de los sitios de unión de la cresta ceratópsida sobre su función?",
          de: "Was deutet die biomechanische Analyse der Ceratopsier-Halskrausen-Ansatzstellen über ihre Funktion an?",
          nl: "Wat suggereert biomechanische analyse van ceratopsiër kraag bevestigingsplaatsen over hun functie?"
        },
        options: [
          { en: "Muscle attachment patterns indicating display rather than defensive function", es: "Patrones de unión muscular indicando exhibición más que función defensiva", de: "Muskelansatz-Muster zeigen Zur-Schau-Stellung statt Verteidigungsfunktion", nl: "Spier bevestigings patronen wijzend op vertoon eerder dan verdedigingsfunctie" },
          { en: "Exclusively defensive armor optimization", es: "Optimización de armadura exclusivamente defensiva", de: "Ausschließlich defensive Panzerungsoptimierung", nl: "Exclusief defensieve pantser optimalisatie" },
          { en: "Locomotive muscle attachment points", es: "Puntos de unión muscular locomotora", de: "Lokomotorische Muskelansatzstellen", nl: "Locomotorische spier bevestigingspunten" },
          { en: "Respiratory system support structures", es: "Estructuras de soporte del sistema respiratorio", de: "Atemwegsstützstrukturen", nl: "Ademhalingssysteem ondersteuningsstructuren" }
        ],
        correct: 0,
        explanation: {
          en: "Analysis of muscle attachment sites on ceratopsian frills reveals patterns more consistent with display muscles for visual signaling rather than defensive muscles for protection, supporting sexual selection hypotheses.",
          es: "El análisis de sitios de unión muscular en crestas de ceratópsidos revela patrones más consistentes con músculos de exhibición para señalización visual más que músculos defensivos para protección, apoyando hipótesis de selección sexual.",
          de: "Die Analyse von Muskelansatzstellen an Ceratopsier-Halskrausen enthüllt Muster, die eher mit Zur-Schau-Stellungs-Muskeln für visuelle Signale als mit Verteidigungsmuskeln für Schutz übereinstimmen, und unterstützt sexuelle Selektionshypothesen.",
          nl: "Analyse van spier bevestigingsplaatsen op ceratopsiër kragen onthult patronen meer consistent met vertoon spieren voor visuele signalering eerder dan verdedigingsspieren voor bescherming, ondersteunend seksuele selectie hypotheses."
        }
      },
      {
        question: {
          en: "What does the discovery of melanosomes in Anchiornis fossils reveal about Cretaceous theropod coloration?",
          es: "¿Qué revela el descubrimiento de melanosomas en fósiles de Anchiornis sobre la coloración de terópodos del Cretácico?",
          de: "Was enthüllt die Entdeckung von Melanosomen in Anchiornis-Fossilien über die Färbung von Kreidezeit-Theropoden?",
          nl: "Wat onthult de ontdekking van melanosomen in Anchiornis fossielen over Krijt theropode kleuring?"
        },
        options: [
          { en: "Complex plumage patterns with iridescent black feathers and white wing markings", es: "Patrones de plumaje complejos con plumas negras iridiscentes y marcas blancas en las alas", de: "Komplexe Gefieder-Muster mit irisierenden schwarzen Federn und weißen Flügelmarkierungen", nl: "Complexe verenkleed patronen met iridescente zwarte veren en witte vleugel markeringen" },
          { en: "Uniform brown coloration throughout body", es: "Coloración marrón uniforme en todo el cuerpo", de: "Einheitliche braune Färbung am ganzen Körper", nl: "Uniforme bruine kleuring door het hele lichaam" },
          { en: "Transparent feathers for camouflage", es: "Plumas transparentes para camuflaje", de: "Transparente Federn zur Tarnung", nl: "Transparante veren voor camouflage" },
          { en: "Absence of any pigmentation", es: "Ausencia de cualquier pigmentación", de: "Abwesenheit jeglicher Pigmentierung", nl: "Afwezigheid van enige pigmentatie" }
        ],
        correct: 0,
        explanation: {
          en: "Analysis of fossilized melanosomes in Anchiornis revealed it had predominantly black iridescent plumage with distinctive white patches on the wings, representing the first definitive color reconstruction of a dinosaur.",
          es: "El análisis de melanosomas fosilizados en Anchiornis reveló que tenía plumaje predominantemente negro iridiscente con parches blancos distintivos en las alas, representando la primera reconstrucción de color definitiva de un dinosaurio.",
          de: "Die Analyse versteinerter Melanosomen in Anchiornis enthüllte, dass er überwiegend schwarzes, irisierendes Gefieder mit charakteristischen weißen Flecken auf den Flügeln hatte, was die erste definitive Farbrekonstruktion eines Dinosauriers darstellt.",
          nl: "Analyse van gefossiliseerde melanosomen in Anchiornis onthulde dat hij voornamelijk zwart iridescent verenkleed had met onderscheidende witte vlekken op de vleugels, representerende de eerste definitieve kleur reconstructie van een dinosaurus."
        }
      },
      {
        question: {
          en: "What does the functional morphology of Amargasaurus neural spines indicate about their biomechanical role?",
          es: "¿Qué indica la morfología funcional de las espinas neurales de Amargasaurus sobre su papel biomecánico?",
          de: "Was zeigt die funktionelle Morphologie der Amargasaurus-Dornfortsätze über ihre biomechanische Rolle an?",
          nl: "Wat toont de functionele morfologie van Amargasaurus neurale stekels aan over hun biomechanische rol?"
        },
        options: [
          { en: "Insufficient structural support for muscle attachment, favoring display sail hypothesis", es: "Soporte estructural insuficiente para unión muscular, favoreciendo hipótesis de vela de exhibición", de: "Unzureichende strukturelle Unterstützung für Muskelansatz, begünstigt Zur-Schau-Stellungs-Segel-Hypothese", nl: "Onvoldoende structurele ondersteuning voor spier bevestiging, begunstigt vertoon zeil hypothese" },
          { en: "Robust muscle attachment points for neck support", es: "Puntos de unión muscular robustos para soporte del cuello", de: "Robuste Muskelansatzpunkte zur Nackenstütze", nl: "Robuuste spier bevestigingspunten voor nek ondersteuning" },
          { en: "Vertebral fusion preventing neck movement", es: "Fusión vertebral previniendo movimiento del cuello", de: "Wirbelverschmelzung verhindert Nackenbewegung", nl: "Wervel fusie voorkomend nek beweging" },
          { en: "Pneumatic chambers for buoyancy control", es: "Cámaras neumáticas para control de flotabilidad", de: "Pneumatische Kammern zur Auftriebskontrolle", nl: "Pneumatische kamers voor drijfvermogen controle" }
        ],
        correct: 0,
        explanation: {
          en: "The elongated neural spines of Amargasaurus lack the robust muscle attachment sites expected if they supported massive neck muscles, instead showing features consistent with supporting skin sails for display purposes.",
          es: "Las espinas neurales alargadas de Amargasaurus carecen de los sitios de unión muscular robustos esperados si sostuvieran músculos masivos del cuello, en su lugar mostrando características consistentes con sostener velas de piel para propósitos de exhibición.",
          de: "Die verlängerten Dornfortsätze von Amargasaurus fehlen die robusten Muskelansatzstellen, die erwartet würden, wenn sie massive Nackenmuskeln stützten, sondern zeigen Merkmale, die mit der Unterstützung von Hautsegeln für Zur-Schau-Stellungszwecke übereinstimmen.",
          nl: "De verlengde neurale stekels van Amargasaurus missen de robuuste spier bevestigingsplaatsen die verwacht zouden worden als ze massieve nekspieren ondersteunden, in plaats daarvan tonend kenmerken consistent met het ondersteunen van huidzeilen voor vertoon doeleinden."
        }
      },
      {
        question: {
          en: "What does the histological analysis of hadrosaur dental batteries reveal about their processing capabilities?",
          es: "¿Qué revela el análisis histológico de las baterías dentales de hadrosaurios sobre sus capacidades de procesamiento?",
          de: "Was enthüllt die histologische Analyse von Hadrosaurier-Zahnbatterien über ihre Verarbeitungsfähigkeiten?",
          nl: "Wat onthult histologische analyse van hadrosauriër tandenbatterijen over hun verwerkingscapaciteiten?"
        },
        options: [
          { en: "Differential wear patterns optimizing grinding efficiency for varied plant textures", es: "Patrones de desgaste diferencial optimizando eficiencia de molienda para texturas vegetales variadas", de: "Differentielle Abnutzungsmuster optimieren Mahleffizienz für verschiedene Pflanzentexturen", nl: "Differentiële slijtage patronen optimaliseren maalefficientie voor gevarieerde planten texturen" },
          { en: "Uniform tooth structure limiting dietary range", es: "Estructura dental uniforme limitando rango dietético", de: "Einheitliche Zahnstruktur begrenzt Nahrungsbereich", nl: "Uniforme tandstructuur beperkt dieet bereik" },
          { en: "Carnivorous tooth adaptations", es: "Adaptaciones dentales carnívoras", de: "Fleischfressende Zahnanpassungen", nl: "Carnivore tand aanpassingen" },
          { en: "Non-functional decorative teeth", es: "Dientes decorativos no funcionales", de: "Nicht-funktionale dekorative Zähne", nl: "Niet-functionele decoratieve tanden" }
        ],
        correct: 0,
        explanation: {
          en: "Histological studies show hadrosaur dental batteries had complex wear patterns with different tooth surfaces optimized for cutting, shredding, and grinding various plant materials, enabling processing of diverse Cretaceous vegetation.",
          es: "Los estudios histológicos muestran que las baterías dentales de hadrosaurios tenían patrones de desgaste complejos con diferentes superficies dentales optimizadas para cortar, desmenuzar y moler varios materiales vegetales, permitiendo el procesamiento de vegetación diversa del Cretácico.",
          de: "Histologische Studien zeigen, dass Hadrosaurier-Zahnbatterien komplexe Abnutzungsmuster mit verschiedenen Zahnoberflächen hatten, die für das Schneiden, Zerkleinern und Mahlen verschiedener Pflanzenmaterialien optimiert waren, wodurch die Verarbeitung verschiedener Kreidezeit-Vegetation ermöglicht wurde.",
          nl: "Histologische studies tonen dat hadrosauriër tandenbatterijen complexe slijtage patronen hadden met verschillende tandoppervlakken geoptimaliseerd voor snijden, verscheuren en malen van verschillende plantenmateriaal, mogelijk makend verwerking van diverse Krijt vegetatie."
        }
      },
      {
        question: {
          en: "What does the pneumatic system architecture in large theropods reveal about their respiratory physiology?",
          es: "¿Qué revela la arquitectura del sistema neumático en grandes terópodos sobre su fisiología respiratoria?",
          de: "Was enthüllt die pneumatische Systemarchitektur bei großen Theropoden über ihre Atmungsphysiologie?",
          nl: "Wat onthult de pneumatische systeem architectuur bij grote theropoden over hun respiratoire fysiologie?"
        },
        options: [
          { en: "Avian-like air sac system enabling efficient unidirectional airflow", es: "Sistema de sacos aéreos similar a aves permitiendo flujo de aire unidireccional eficiente", de: "Vogelähnliches Luftsacksystem ermöglicht effizienten unidirektionalen Luftstrom", nl: "Vogelachtig luchtzak systeem mogelijk makend efficiente unidirectionele luchtstroom" },
          { en: "Simple mammalian lung structure", es: "Estructura pulmonar mamífera simple", de: "Einfache Säugetierlungenstruktur", nl: "Eenvoudige zoogdier long structuur" },
          { en: "Aquatic gill-like respiration", es: "Respiración similar a branquias acuáticas", de: "Aquatische kiemenartige Atmung", nl: "Aquatische kieuw-achtige ademhaling" },
          { en: "Cutaneous oxygen absorption", es: "Absorción cutánea de oxígeno", de: "Kutane Sauerstoffaufnahme", nl: "Cutane zuurstof absorptie" }
        ],
        correct: 0,
        explanation: {
          en: "The extensive pneumatic systems in large theropods mirror those of modern birds, indicating they possessed sophisticated air sac respiratory systems that provided highly efficient oxygen extraction and thermoregulation.",
          es: "Los sistemas neumáticos extensivos en grandes terópodos reflejan los de aves modernas, indicando que poseían sistemas respiratorios de sacos aéreos sofisticados que proporcionaban extracción de oxígeno altamente eficiente y termorregulación.",
          de: "Die ausgedehnten pneumatischen Systeme bei großen Theropoden spiegeln die moderner Vögel wider und zeigen an, dass sie hochentwickelte Luftsack-Atmungssysteme besaßen, die hocheffiziente Sauerstoffextraktion und Thermoregulation boten.",
          nl: "De uitgebreide pneumatische systemen bij grote theropoden spiegelen die van moderne vogels, wijzend dat ze geavanceerde luchtzak ademhalingssystemen bezaten die zeer efficiënte zuurstof extractie en thermoregulatie verschaften."
        }
      },
      {
        question: {
          en: "What does the comparative osteology of Cretaceous titanosaurs indicate about their evolutionary relationships?",
          es: "¿Qué indica la osteología comparativa de titanosaurios del Cretácico sobre sus relaciones evolutivas?",
          de: "Was zeigt die vergleichende Osteologie von Kreidezeit-Titanosauriern über ihre evolutionären Beziehungen an?",
          nl: "Wat toont de vergelijkende osteologie van Krijt titanosauriërs aan over hun evolutionaire relaties?"
        },
        options: [
          { en: "Rapid adaptive radiation following isolation of Gondwanan landmasses", es: "Radiación adaptativa rápida siguiendo el aislamiento de masas terrestres gondwánicas", de: "Schnelle adaptive Radiation nach Isolation gondwanischer Landmassen", nl: "Snelle adaptieve straling volgend op isolatie van Gondwaanse landmassa's" },
          { en: "Single lineage with minimal morphological variation", es: "Linaje único con variación morfológica mínima", de: "Einzelne Abstammungslinie mit minimaler morphologischer Variation", nl: "Enkele lijn met minimale morfologische variatie" },
          { en: "Convergent evolution from multiple sauropod groups", es: "Evolución convergente de múltiples grupos de saurópodos", de: "Konvergente Evolution aus mehreren Sauropoden-Gruppen", nl: "Convergente evolutie uit meerdere sauropoden groepen" },
          { en: "Direct ancestry to modern elephants", es: "Ancestro directo de elefantes modernos", de: "Direkte Abstammung zu modernen Elefanten", nl: "Directe voorouders van moderne olifanten" }
        ],
        correct: 0,
        explanation: {
          en: "Comparative osteological studies show titanosaurs underwent rapid diversification as Gondwanan continents separated, evolving distinct regional faunas with specialized adaptations to local environments and ecological niches.",
          es: "Los estudios osteológicos comparativos muestran que los titanosaurios experimentaron diversificación rápida mientras los continentes gondwánicos se separaron, evolucionando faunas regionales distintas con adaptaciones especializadas a ambientes locales y nichos ecológicos.",
          de: "Vergleichende osteologische Studien zeigen, dass Titanosaurier eine schnelle Diversifikation durchliefen, als sich die gondwanischen Kontinente trennten, und entwickelten unterschiedliche regionale Faunen mit spezialisierten Anpassungen an lokale Umgebungen und ökologische Nischen.",
          nl: "Vergelijkende osteologische studies tonen dat titanosauriërs snelle diversificatie ondergingen als Gondwaanse continenten scheidden, evoluerende onderscheidende regionale fauna's met gespecialiseerde aanpassingen aan lokale omgevingen en ecologische niches."
        }
      },
      {
        question: {
          en: "What does sedimentological analysis of the Kem Kem Beds reveal about Spinosaurus paleoenvironment?",
          es: "¿Qué revela el análisis sedimentológico de los Lechos Kem Kem sobre el paleoambiente de Spinosaurus?",
          de: "Was enthüllt die sedimentologische Analyse der Kem Kem-Schichten über Spinosaurus' Paläoumwelt?",
          nl: "Wat onthult sedimentologische analyse van de Kem Kem Bedden over Spinosaurus paleoomgeving?"
        },
        options: [
          { en: "Large fluvial system with meandering rivers, oxbow lakes, and seasonal flooding", es: "Sistema fluvial grande con ríos serpenteantes, lagos de herradura e inundaciones estacionales", de: "Großes Flusssystem mit mäandernden Flüssen, Altwasserseen und saisonalen Überschwemmungen", nl: "Groot rivieren systeem met meanderende rivieren, boogmeren en seizoensgebonden overstromingen" },
          { en: "Deep marine environment with coral reefs", es: "Ambiente marino profundo con arrecifes de coral", de: "Tiefe Meeresumgebung mit Korallenriffen", nl: "Diepe marine omgeving met koraalriffen" },
          { en: "Arid desert with rare oases", es: "Desierto árido con oasis raros", de: "Trockene Wüste mit seltenen Oasen", nl: "Droge woestijn met zeldzame oases" },
          { en: "Alpine mountain environment", es: "Ambiente montañoso alpino", de: "Alpine Bergumgebung", nl: "Alpiene berg omgeving" }
        ],
        correct: 0,
        explanation: {
          en: "Sedimentological analysis reveals the Kem Kem Beds were deposited in a large fluvial system with extensive river networks, creating the perfect semi-aquatic habitat for Spinosaurus and associated fauna.",
          es: "El análisis sedimentológico revela que los Lechos Kem Kem se depositaron en un gran sistema fluvial con extensas redes de ríos, creando el hábitat semi-acuático perfecto para Spinosaurus y fauna asociada.",
          de: "Sedimentologische Analysen zeigen, dass die Kem Kem-Schichten in einem großen Flusssystem mit ausgedehnten Flussnetzwerken abgelagert wurden, was den perfekten halb-aquatischen Lebensraum für Spinosaurus und die dazugehörige Fauna schuf.",
          nl: "Sedimentologische analyse onthult dat de Kem Kem Bedden werden afgezet in een groot rivieren systeem met uitgebreide rivier netwerken, creërend de perfecte semi-aquatische habitat voor Spinosaurus en geassocieerde fauna."
        }
      },
      {
        question: {
          en: "What does the analysis of coprolites from the Hell Creek Formation reveal about Late Cretaceous food webs?",
          es: "¿Qué revela el análisis de coprolitos de la Formación Hell Creek sobre las redes alimentarias del Cretácico Tardío?",
          de: "Was enthüllt die Analyse von Koprolithen aus der Hell Creek Formation über die Nahrungsnetze der Oberkreide?",
          nl: "Wat onthult analyse van coprolieten uit de Hell Creek Formatie over Laat-Krijt voedselwebben?"
        },
        options: [
          { en: "Complex trophic interactions with evidence of fish consumption by terrestrial predators", es: "Interacciones tróficas complejas con evidencia de consumo de peces por depredadores terrestres", de: "Komplexe trophische Interaktionen mit Beweisen für Fischkonsum durch terrestrische Räuber", nl: "Complexe trofische interacties met bewijs van vis consumptie door terrestrische roofdieren" },
          { en: "Simple linear food chains with no overlap", es: "Cadenas alimentarias lineales simples sin superposición", de: "Einfache lineare Nahrungsketten ohne Überlappung", nl: "Eenvoudige lineaire voedselketens zonder overlap" },
          { en: "Exclusively herbivorous dinosaur diets", es: "Dietas de dinosaurios exclusivamente herbívoras", de: "Ausschließlich herbivore Dinosaurier-Diäten", nl: "Exclusief herbivore dinosaurus diëten" },
          { en: "No preserved organic matter", es: "Sin materia orgánica preservada", de: "Keine erhaltene organische Materie", nl: "Geen bewaarde organische materie" }
        ],
        correct: 0,
        explanation: {
          en: "Coprolite analysis from Hell Creek reveals complex food webs with evidence that some theropods consumed fish, indicating connections between aquatic and terrestrial ecosystems in Late Cretaceous North America.",
          es: "El análisis de coprolitos de Hell Creek revela redes alimentarias complejas con evidencia de que algunos terópodos consumían peces, indicando conexiones entre ecosistemas acuáticos y terrestres en el Cretácico Tardío de América del Norte.",
          de: "Koprolith-Analysen aus Hell Creek enthüllen komplexe Nahrungsnetze mit Beweisen, dass einige Theropoden Fische konsumierten, was Verbindungen zwischen aquatischen und terrestrischen Ökosystemen in der Oberkreide Nordamerikas anzeigt.",
          nl: "Coproliet analyse uit Hell Creek onthult complexe voedselwebben met bewijs dat sommige theropoden vissen consumeerden, wijzend op verbindingen tussen aquatische en terrestrische ecosystemen in Laat-Krijt Noord-Amerika."
        }
      },
      {
        question: {
          en: "What does the microstructural analysis of Argentinosaurus vertebrae indicate about sauropod gigantism constraints?",
          es: "¿Qué indica el análisis microestructural de las vértebras de Argentinosaurus sobre las limitaciones del gigantismo en saurópodos?",
          de: "Was zeigt die mikrostrukturelle Analyse von Argentinosaurus-Wirbeln über die Beschränkungen des Sauropoden-Gigantismus an?",
          nl: "Wat toont microstructurele analyse van Argentinosaurus wervels aan over sauropoden gigantisme beperkingen?"
        },
        options: [
          { en: "Structural compromises approaching biomechanical limits of vertebrate architecture", es: "Compromisos estructurales acercándose a límites biomecánicos de arquitectura vertebrada", de: "Strukturelle Kompromisse nähern sich biomechanischen Grenzen der Wirbeltier-Architektur", nl: "Structurele compromissen naderend biomechanische limieten van gewervelde architectuur" },
          { en: "Unlimited potential for further size increase", es: "Potencial ilimitado para mayor aumento de tamaño", de: "Unbegrenztes Potenzial für weitere Größenzunahme", nl: "Onbeperkte potentie voor verdere grootte toename" },
          { en: "Primarily hollow bones with no structural integrity", es: "Principalmente huesos huecos sin integridad estructural", de: "Hauptsächlich hohle Knochen ohne strukturelle Integrität", nl: "Voornamelijk holle botten zonder structurele integriteit" },
          { en: "Dense solid bone throughout skeleton", es: "Hueso sólido denso en todo el esqueleto", de: "Dichter massiver Knochen im ganzen Skelett", nl: "Dichte solide bot door het hele skelet" }
        ],
        correct: 0,
        explanation: {
          en: "Microstructural analysis shows Argentinosaurus vertebrae had extensive pneumatization and thin-walled architecture that approached the physical limits of bone strength, suggesting sauropod gigantism was constrained by biomechanical factors.",
          es: "El análisis microestructural muestra que las vértebras de Argentinosaurus tenían neumatización extensiva y arquitectura de paredes delgadas que se acercó a los límites físicos de la fuerza ósea, sugiriendo que el gigantismo de saurópodos estaba limitado por factores biomecánicos.",
          de: "Mikrostrukturelle Analysen zeigen, dass Argentinosaurus-Wirbel extensive Pneumatisierung und dünnwandige Architektur hatten, die sich den physischen Grenzen der Knochenstärke näherten, was darauf hindeutet, dass der Sauropoden-Gigantismus durch biomechanische Faktoren begrenzt war.",
          nl: "Microstructurele analyse toont dat Argentinosaurus wervels uitgebreide pneumatisatie en dunwandige architectuur hadden die de fysische limieten van botsterkte naderden, suggererend dat sauropoden gigantisme beperkt werd door biomechanische factoren."
        }
      },
      {
        question: {
          en: "What does the preservation of melanosomes in Cretaceous dinosaur feathers reveal about thermoregulatory strategies?",
          es: "¿Qué revela la preservación de melanosomas en plumas de dinosaurios del Cretácico sobre estrategias termorregulatorias?",
          de: "Was enthüllt die Erhaltung von Melanosomen in Kreidezeit-Dinosaurierfedern über Thermoregulationsstrategien?",
          nl: "Wat onthult de bewaring van melanosomen in Krijt dinosaurus veren over thermoregulatoire strategieën?"
        },
        options: [
          { en: "Complex plumage patterns for behavioral thermoregulation and social signaling", es: "Patrones complejos de plumaje para termorregulación conductual y señalización social", de: "Komplexe Gefiedermuster für Verhaltensthermoregulation und soziale Signalgebung", nl: "Complexe verenpatronen voor gedragsthermoregulatie en sociale signalering" },
          { en: "Simple monochromatic feathers for basic insulation only", es: "Plumas monocromáticas simples solo para aislamiento básico", de: "Einfache monochrome Federn nur für Grundisolierung", nl: "Eenvoudige monochromatische veren alleen voor basis isolatie" },
          { en: "No thermoregulatory function", es: "Sin función termorreguladora", de: "Keine thermoregulatorische Funktion", nl: "Geen thermoregulatoire functie" },
          { en: "Exclusively aquatic adaptations", es: "Adaptaciones exclusivamente acuáticas", de: "Ausschließlich aquatische Anpassungen", nl: "Exclusief aquatische aanpassingen" }
        ],
        correct: 0,
        explanation: {
          en: "Preserved melanosomes in Cretaceous feathers show complex pigmentation patterns that suggest sophisticated behavioral thermoregulation, with different colors and patterns potentially used for temperature control and social display.",
          es: "Los melanosomas preservados en plumas del Cretácico muestran patrones complejos de pigmentación que sugieren termorregulación conductual sofisticada, con diferentes colores y patrones potencialmente usados para control de temperatura y exhibición social.",
          de: "Erhaltene Melanosomen in Kreidezeit-Federn zeigen komplexe Pigmentierungsmuster, die ausgeklügelte Verhaltensthermoregulation nahelegen, wobei verschiedene Farben und Muster möglicherweise für Temperaturkontrolle und soziale Zurschaustellung verwendet wurden.",
          nl: "Bewaarde melanosomen in Krijt veren tonen complexe pigmentatie patronen die geavanceerde gedragsthermoregulatie suggereren, met verschillende kleuren en patronen mogelijk gebruikt voor temperatuurcontrole en sociale vertoning."
        }
      },
      {
        question: {
          en: "What does geochemical analysis of Cretaceous soil horizons reveal about dinosaur ecosystem engineering?",
          es: "¿Qué revela el análisis geoquímico de horizontes de suelo del Cretácico sobre ingeniería de ecosistemas de dinosaurios?",
          de: "Was enthüllt die geochemische Analyse von Kreidezeit-Bodenhorizonten über Dinosaurier-Ökosystem-Engineering?",
          nl: "Wat onthult geochemische analyse van Krijt bodem horizonten over dinosaurus ecosysteem engineering?"
        },
        options: [
          { en: "Large herbivores significantly altered nutrient cycling and soil chemistry through trampling and waste deposition", es: "Grandes herbívoros alteraron significativamente el ciclo de nutrientes y química del suelo a través de pisoteo y deposición de desechos", de: "Große Herbivoren veränderten den Nährstoffkreislauf und die Bodenchemie erheblich durch Zertrampeln und Abfallablagerung", nl: "Grote herbivoren veranderden nutriëntencycling en bodemchemie significant door vertrapping en afvalafzetting" },
          { en: "No detectable impact on soil systems", es: "Sin impacto detectable en sistemas de suelo", de: "Kein nachweisbarer Einfluss auf Bodensysteme", nl: "Geen detecteerbare impact op bodensystemen" },
          { en: "Only minor surface disturbances", es: "Solo perturbaciones superficiales menores", de: "Nur geringfügige Oberflächenstörungen", nl: "Alleen kleine oppervlakte verstoringen" },
          { en: "Exclusively negative impacts on plant communities", es: "Impactos exclusivamente negativos en comunidades vegetales", de: "Ausschließlich negative Auswirkungen auf Pflanzengemeinschaften", nl: "Exclusief negatieve impacts op plantengemeenschappen" }
        ],
        correct: 0,
        explanation: {
          en: "Geochemical signatures in Cretaceous paleosols show evidence that large dinosaur herbivores created nutrient hotspots through waste deposition and affected plant community structure through selective browsing and trampling, functioning as ecosystem engineers.",
          es: "Las firmas geoquímicas en paleosuelos del Cretácico muestran evidencia de que grandes dinosaurios herbívoros crearon zonas calientes de nutrientes a través de deposición de desechos y afectaron la estructura de comunidades vegetales a través de ramoneo selectivo y pisoteo, funcionando como ingenieros de ecosistemas.",
          de: "Geochemische Signaturen in Kreidezeit-Paläoböden zeigen Beweise, dass große Dinosaurier-Herbivoren Nährstoff-Hotspots durch Abfallablagerung schufen und Pflanzengemeinschaftsstrukturen durch selektives Abweiden und Zertrampeln beeinflussten, als Ökosystem-Ingenieure funktionierend.",
          nl: "Geochemische handtekeningen in Krijt paleosolen tonen bewijs dat grote dinosaurus herbivoren nutriënt hotspots creëerden door afvalafzetting en plantengemeenschap structuur beïnvloedden door selectief grazen en vertrapping, functionerend als ecosysteem ingenieurs."
        }
      },
      {
        question: {
          en: "What does the three-dimensional reconstruction of Parasaurolophus cranial anatomy reveal about acoustic communication capabilities?",
          es: "¿Qué revela la reconstrucción tridimensional de la anatomía craneal de Parasaurolophus sobre capacidades de comunicación acústica?",
          de: "Was enthüllt die dreidimensionale Rekonstruktion der Schädelanatomie von Parasaurolophus über akustische Kommunikationsfähigkeiten?",
          nl: "Wat onthult driedimensionale reconstructie van Parasaurolophus schedel anatomie over akoestische communicatie vermogens?"
        },
        options: [
          { en: "Complex resonating chambers capable of producing species-specific harmonic frequencies", es: "Cámaras de resonancia complejas capaces de producir frecuencias armónicas específicas de especie", de: "Komplexe Resonanzkammern, die artspezifische harmonische Frequenzen erzeugen können", nl: "Complexe resonantiekamers capabel tot het produceren van soort-specifieke harmonische frequenties" },
          { en: "Simple air passages with no acoustic function", es: "Pasajes de aire simples sin función acústica", de: "Einfache Luftdurchgänge ohne akustische Funktion", nl: "Eenvoudige luchtdoorgangen zonder akoestische functie" },
          { en: "Only visual display structures", es: "Solo estructuras de exhibición visual", de: "Nur visuelle Zurschaustellungsstrukturen", nl: "Alleen visuele vertoon structuren" },
          { en: "Chemoreceptor organs for scent detection", es: "Órganos quimiorreceptores para detección de olores", de: "Chemorezeptor-Organe für Geruchserkennung", nl: "Chemoreceptor organen voor geur detectie" }
        ],
        correct: 0,
        explanation: {
          en: "CT scanning and 3D modeling of Parasaurolophus crests reveals complex internal passages that functioned as sophisticated resonating chambers, capable of producing specific tonal frequencies for intraspecific communication.",
          es: "El escaneo CT y modelado 3D de crestas de Parasaurolophus revela pasajes internos complejos que funcionaban como cámaras de resonancia sofisticadas, capaces de producir frecuencias tonales específicas para comunicación intraespecífica.",
          de: "CT-Scanning und 3D-Modellierung von Parasaurolophus-Kämmen enthüllt komplexe interne Durchgänge, die als ausgeklügelte Resonanzkammern funktionierten und spezifische Tonfrequenzen für intraspezifische Kommunikation erzeugen konnten.",
          nl: "CT scanning en 3D modellering van Parasaurolophus kammen onthult complexe interne doorgangen die functioneerden als geavanceerde resonantiekamers, capabel tot het produceren van specifieke toonfrequenties voor intraspecifieke communicatie."
        }
      },
      {
        question: {
          en: "What does the biomolecular analysis of Cretaceous amber inclusions reveal about dinosaur-ecosystem interactions?",
          es: "¿Qué revela el análisis biomolecular de inclusiones en ámbar del Cretácico sobre interacciones dinosaurio-ecosistema?",
          de: "Was enthüllt die biomolekulare Analyse von Kreidezeit-Bernstein-Einschlüssen über Dinosaurier-Ökosystem-Interaktionen?",
          nl: "Wat onthult biomoleculaire analyse van Krijt barnsteen insluitsels over dinosaurus-ecosysteem interacties?"
        },
        options: [
          { en: "Complex trophic networks with dinosaurs as keystone species affecting multiple ecosystem levels", es: "Redes tróficas complejas con dinosaurios como especies clave afectando múltiples niveles ecosistémicos", de: "Komplexe trophische Netzwerke mit Dinosauriern als Schlüsselarten, die mehrere Ökosystemebenen beeinflussen", nl: "Complexe trofische netwerken met dinosaurussen als sleutelsoorten die meerdere ecosysteem niveaus beïnvloeden" },
          { en: "Isolated dinosaur populations with minimal ecosystem impact", es: "Poblaciones de dinosaurios aisladas con impacto ecosistémico mínimo", de: "Isolierte Dinosaurier-Populationen mit minimalem Ökosystem-Einfluss", nl: "Geïsoleerde dinosaurus populaties met minimale ecosysteem impact" },
          { en: "Only predator-prey relationships", es: "Solo relaciones depredador-presa", de: "Nur Räuber-Beute-Beziehungen", nl: "Alleen roofdier-prooi relaties" },
          { en: "No preserved organic material", es: "Sin material orgánico preservado", de: "Kein erhaltenes organisches Material", nl: "Geen bewaard organisch materiaal" }
        ],
        correct: 0,
        explanation: {
          en: "DNA and protein analysis from Cretaceous amber reveals complex ecological networks where dinosaurs served as keystone species, with their activities affecting plant pollination, seed dispersal, and nutrient cycling across multiple trophic levels.",
          es: "El análisis de ADN y proteínas del ámbar del Cretácico revela redes ecológicas complejas donde los dinosaurios sirvieron como especies clave, con sus actividades afectando polinización de plantas, dispersión de semillas y ciclado de nutrientes a través de múltiples niveles tróficos.",
          de: "DNA- und Proteinanalysen aus Kreidezeit-Bernstein enthüllen komplexe ökologische Netzwerke, in denen Dinosaurier als Schlüsselarten dienten, wobei ihre Aktivitäten Pflanzenbestäubung, Samenverteilung und Nährstoffkreislauf über mehrere trophische Ebenen beeinflussten.",
          nl: "DNA en proteïne analyse uit Krijt barnsteen onthult complexe ecologische netwerken waar dinosaurussen dienden als sleutelsoorten, met hun activiteiten die plantenbestuiving, zaadverspreiding en nutriëntencycling beïnvloedden over meerdere trofische niveaus."
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