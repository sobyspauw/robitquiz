// Dinosaur Fossils Quiz - Level 7: Complex Paleontology Concepts
(function() {
  const level7 = {
    name: {
      en: "Dinosaur Fossils Level 7",
      es: "Fosiles de Dinosaurios Nivel 7",
      de: "Dinosaurier Fossilien Stufe 7",
      nl: "Dino Fossielen Level 7"
    },
    questions: [
      {
        question: {
          en: "What is phylogenetic analysis in paleontology?",
          es: "¿Qué es el análisis filogenético en paleontología?",
          de: "Was ist phylogenetische Analyse in der Paläontologie?",
          nl: "Wat is fylogenetische analyse in de paleontologie?"
        },
        options: [
          { en: "Reconstructing evolutionary relationships between species", es: "Reconstruir relaciones evolutivas entre especies", de: "Rekonstruktion evolutionärer Beziehungen zwischen Arten", nl: "Reconstructie van evolutionaire verwantschappen tussen soorten" },
          { en: "Measuring fossil size variations", es: "Medir variaciones de tamaño de fósiles", de: "Messung von Fossilgrößenvariationen", nl: "Meten van fossielgroottevariaties" },
          { en: "Dating fossil specimens", es: "Datar especímenes fósiles", de: "Datierung von Fossilexemplaren", nl: "Datering van fossielspecimens" },
          { en: "Analyzing fossil coloration", es: "Analizar coloración de fósiles", de: "Analyse der Fossilfarbe", nl: "Analyseren van fossielkleuring" }
        ],
        correct: 0,
        explanation: {
          en: "Phylogenetic analysis uses morphological and molecular data to construct evolutionary trees showing how different species are related and how they evolved from common ancestors.",
          es: "El análisis filogenético utiliza datos morfológicos y moleculares para construir árboles evolutivos que muestran cómo diferentes especies están relacionadas y cómo evolucionaron desde ancestros comunes.",
          de: "Die phylogenetische Analyse verwendet morphologische und molekulare Daten zur Konstruktion evolutionärer Bäume, die zeigen, wie verschiedene Arten verwandt sind und wie sie sich von gemeinsamen Vorfahren entwickelt haben.",
          nl: "Fylogenetische analyse gebruikt morfologische en moleculaire gegevens om evolutionaire bomen te construeren die laten zien hoe verschillende soorten verwant zijn en hoe ze evolueerden vanaf gemeenschappelijke voorouders."
        }
      },
      {
        question: {
          en: "What is cladistics and how does it apply to dinosaur classification?",
          es: "¿Qué es la cladística y cómo se aplica a la clasificación de dinosaurios?",
          de: "Was ist Kladistik und wie wendet sie sich auf die Dinosaurier-Klassifikation an?",
          nl: "Wat is cladistiek en hoe wordt het toegepast op dinosaurusclassificatie?"
        },
        options: [
          { en: "A method of grouping organisms by shared derived characteristics", es: "Un método de agrupar organismos por características derivadas compartidas", de: "Eine Methode zur Gruppierung von Organismen nach gemeinsamen abgeleiteten Merkmalen", nl: "Een methode om organismen te groeperen op basis van gedeelde afgeleide kenmerken" },
          { en: "A technique for fossil preservation", es: "Una técnica para preservación de fósiles", de: "Eine Technik zur Fossilerhaltung", nl: "Een techniek voor fossielbewaring" },
          { en: "A system for measuring fossil age", es: "Un sistema para medir edad de fósiles", de: "Ein System zur Messung des Fossilalters", nl: "Een systeem voor het meten van fossielleeftijd" },
          { en: "A method for determining fossil location", es: "Un método para determinar ubicación de fósiles", de: "Eine Methode zur Bestimmung des Fossilstandorts", nl: "Een methode voor het bepalen van fossiellocatie" }
        ],
        correct: 0,
        explanation: {
          en: "Cladistics groups organisms into clades based on synapomorphies (shared derived characteristics), creating nested hierarchical classifications that reflect evolutionary history rather than overall similarity.",
          es: "La cladística agrupa organismos en clados basados en sinapomorfías (características derivadas compartidas), creando clasificaciones jerárquicas anidadas que reflejan la historia evolutiva en lugar de la similitud general.",
          de: "Die Kladistik gruppiert Organismen in Kladen basierend auf Synapomorphien (gemeinsamen abgeleiteten Merkmalen) und schafft verschachtelte hierarchische Klassifikationen, die die Evolutionsgeschichte und nicht die allgemeine Ähnlichkeit widerspiegeln.",
          nl: "Cladistiek groepeert organismen in clades gebaseerd op synapomorfieën (gedeelde afgeleide kenmerken), waarbij geneste hiërarchische classificaties worden gecreëerd die evolutionaire geschiedenis weerspiegelen in plaats van algehele gelijkenis."
        }
      },
      {
        question: {
          en: "What is biostratigraphy and its importance in dinosaur fossil dating?",
          es: "¿Qué es la bioestratigrafía y su importancia en la datación de fósiles de dinosaurios?",
          de: "Was ist Biostratigraphie und ihre Bedeutung bei der Dinosaurier-Fossildatierung?",
          nl: "Wat is biostratigrafie en het belang ervan bij dinosaurusfossieldatering?"
        },
        options: [
          { en: "Dating rock layers using characteristic fossil assemblages", es: "Datar capas rocosas usando ensamblajes fósiles característicos", de: "Datierung von Gesteinsschichten anhand charakteristischer Fossilversammlungen", nl: "Datering van gesteentelagen met behulp van karakteristieke fossielassemblages" },
          { en: "Measuring the thickness of fossil bones", es: "Medir el grosor de huesos fósiles", de: "Messung der Dicke von fossilen Knochen", nl: "Het meten van de dikte van fossiele botten" },
          { en: "Analyzing fossil chemical composition", es: "Analizar composición química de fósiles", de: "Analyse der chemischen Zusammensetzung von Fossilien", nl: "Analyseren van fossiele chemische samenstelling" },
          { en: "Studying fossil surface textures", es: "Estudiar texturas superficiales de fósiles", de: "Untersuchung von Fossiloberflächentexturen", nl: "Bestuderen van fossiele oppervlaktetexturen" }
        ],
        correct: 0,
        explanation: {
          en: "Biostratigraphy uses index fossils with known temporal ranges to date rock formations and correlate geological sequences, providing relative ages for dinosaur-bearing strata.",
          es: "La bioestratigrafía utiliza fósiles índice con rangos temporales conocidos para datar formaciones rocosas y correlacionar secuencias geológicas, proporcionando edades relativas para estratos que contienen dinosaurios.",
          de: "Die Biostratigraphie verwendet Leitfossilien mit bekannten zeitlichen Bereichen, um Gesteinsformationen zu datieren und geologische Sequenzen zu korrelieren, und liefert relative Alter für dinosaurierführende Schichten.",
          nl: "Biostratigrafie gebruikt indexfossielen met bekende temporele bereiken om gesteenteformaties te dateren en geologische sequenties te correleren, waarbij relatieve leeftijden voor dinosaurusdragende lagen worden verschaft."
        }
      },
      {
        question: {
          en: "What is paleobiogeography in the context of dinosaur evolution?",
          es: "¿Qué es la paleobiogeografía en el contexto de la evolución de los dinosaurios?",
          de: "Was ist Paläobiogeographie im Kontext der Dinosaurier-Evolution?",
          nl: "Wat is paleobiogeografie in de context van dinosaurusevolutie?"
        },
        options: [
          { en: "Study of ancient geographic distribution and dispersal patterns", es: "Estudio de distribución geográfica antigua y patrones de dispersión", de: "Studie der alten geografischen Verteilung und Ausbreitungsmuster", nl: "Studie van oude geografische verspreiding en verspreidingspatronen" },
          { en: "Analysis of fossil preservation conditions", es: "Análisis de condiciones de preservación de fósiles", de: "Analyse der Fossilerhaltungsbedingungen", nl: "Analyse van fossielbewaringsomstandigheden" },
          { en: "Measurement of fossil diversity metrics", es: "Medición de métricas de diversidad de fósiles", de: "Messung von Fossildiversitätsmetriken", nl: "Meting van fossiele diversiteitsmetrieken" },
          { en: "Classification of fossil morphologies", es: "Clasificación de morfologías fósiles", de: "Klassifikation von Fossimorphologien", nl: "Classificatie van fossiele morfologieën" }
        ],
        correct: 0,
        explanation: {
          en: "Paleobiogeography reconstructs how dinosaur populations were distributed across ancient continents, tracking migration routes, vicariance events, and the effects of continental drift on evolution.",
          es: "La paleobiogeografía reconstruye cómo las poblaciones de dinosaurios se distribuyeron a través de continentes antiguos, rastreando rutas migratorias, eventos de vicarianza y los efectos de la deriva continental en la evolución.",
          de: "Die Paläobiogeographie rekonstruiert, wie Dinosaurierpopulationen über alte Kontinente verteilt waren, verfolgt Migrationswege, Vikarianz-Ereignisse und die Auswirkungen der Kontinentaldrift auf die Evolution.",
          nl: "Paleobiogeografie reconstrueert hoe dinosauruspopulaties verspreid waren over oude continenten, waarbij migratieroutes, vicariëntiegebeurtenissen en de effecten van continentale drift op evolutie worden gevolgd."
        }
      },
      {
        question: {
          en: "What is evolutionary developmental biology (evo-devo) in paleontology?",
          es: "¿Qué es la biología evolutiva del desarrollo (evo-devo) en paleontología?",
          de: "Was ist Evolutionäre Entwicklungsbiologie (Evo-Devo) in der Paläontologie?",
          nl: "Wat is evolutionaire ontwikkelingsbiologie (evo-devo) in de paleontologie?"
        },
        options: [
          { en: "Study of how developmental changes drive evolutionary patterns", es: "Estudio de cómo los cambios de desarrollo impulsan patrones evolutivos", de: "Studie darüber, wie Entwicklungsveränderungen evolutionäre Muster antreiben", nl: "Studie van hoe ontwikkelingsveranderingen evolutionaire patronen aandrijven" },
          { en: "Analysis of fossil growth rates", es: "Análisis de tasas de crecimiento de fósiles", de: "Analyse von Fossil-Wachstumsraten", nl: "Analyse van fossiele groeisnelheden" },
          { en: "Measurement of developmental stages", es: "Medición de etapas de desarrollo", de: "Messung von Entwicklungsstadien", nl: "Meting van ontwikkelingsstadia" },
          { en: "Classification of juvenile specimens", es: "Clasificación de especímenes juveniles", de: "Klassifikation juveniler Exemplare", nl: "Classificatie van juveniele specimens" }
        ],
        correct: 0,
        explanation: {
          en: "Evo-devo examines how changes in developmental genes and processes led to the evolution of new morphological features, explaining phenomena like the origin of feathers and the evolution of bird flight.",
          es: "Evo-devo examina cómo los cambios en genes y procesos de desarrollo llevaron a la evolución de nuevas características morfológicas, explicando fenómenos como el origen de las plumas y la evolución del vuelo de las aves.",
          de: "Evo-Devo untersucht, wie Veränderungen in Entwicklungsgenen und -prozessen zur Evolution neuer morphologischer Merkmale führten und erklärt Phänomene wie den Ursprung der Federn und die Evolution des Vogelflugs.",
          nl: "Evo-devo onderzoekt hoe veranderingen in ontwikkelingsgenen en -processen leidden tot de evolutie van nieuwe morfologische kenmerken, waarbij fenomenen zoals de oorsprong van veren en de evolutie van vogelvlucht worden verklaard."
        }
      },
      {
        question: {
          en: "How are molecular clocks used in dinosaur evolutionary studies?",
          es: "¿Cómo se utilizan los relojes moleculares en los estudios evolutivos de dinosaurios?",
          de: "Wie werden molekulare Uhren in Dinosaurier-Evolutionsstudien verwendet?",
          nl: "Hoe worden moleculaire klokken gebruikt in dinosaurusevolutiestudies?"
        },
        options: [
          { en: "Estimating divergence times using mutation rates in living relatives", es: "Estimar tiempos de divergencia usando tasas de mutación en parientes vivos", de: "Schätzung von Divergenzzeiten unter Verwendung von Mutationsraten lebender Verwandter", nl: "Schatten van divergentietijden met behulp van mutatiesnelheden in levende verwanten" },
          { en: "Measuring fossil radioactive decay", es: "Medir desintegración radiactiva de fósiles", de: "Messung des radioaktiven Zerfalls von Fossilien", nl: "Meten van fossiele radioactieve verval" },
          { en: "Analyzing fossil DNA directly", es: "Analizar ADN fósil directamente", de: "Direkte Analyse fossiler DNA", nl: "Direct analyseren van fossiel DNA" },
          { en: "Counting growth rings in bones", es: "Contar anillos de crecimiento en huesos", de: "Zählung von Wachstumsringen in Knochen", nl: "Tellen van groeiringen in botten" }
        ],
        correct: 0,
        explanation: {
          en: "Molecular clocks use known mutation rates in genes of modern birds and crocodilians to estimate when dinosaur lineages diverged, providing temporal frameworks for evolutionary events when fossil evidence is limited.",
          es: "Los relojes moleculares utilizan tasas de mutación conocidas en genes de aves modernas y cocodrilos para estimar cuándo divergieron los linajes de dinosaurios, proporcionando marcos temporales para eventos evolutivos cuando la evidencia fósil es limitada.",
          de: "Molekulare Uhren verwenden bekannte Mutationsraten in Genen moderner Vögel und Krokodile, um zu schätzen, wann sich Dinosaurier-Linien trennten, und liefern zeitliche Rahmen für evolutionäre Ereignisse, wenn fossile Belege begrenzt sind.",
          nl: "Moleculaire klokken gebruiken bekende mutatiesnelheden in genen van moderne vogels en krokodillen om te schatten wanneer dinosauruslijnen divergeerden, waarbij temporele kaders voor evolutionaire gebeurtenissen worden verschaft wanneer fossiel bewijs beperkt is."
        }
      },
      {
        question: {
          en: "What is convergent evolution in dinosaur paleontology?",
          es: "¿Qué es la evolución convergente en paleontología de dinosaurios?",
          de: "Was ist konvergente Evolution in der Dinosaurier-Paläontologie?",
          nl: "Wat is convergente evolutie in dinosauruspaleontologie?"
        },
        options: [
          { en: "Independent evolution of similar traits in unrelated lineages", es: "Evolución independiente de rasgos similares en linajes no relacionados", de: "Unabhängige Evolution ähnlicher Merkmale in nicht verwandten Linien", nl: "Onafhankelijke evolutie van soortgelijke eigenschappen in niet-verwante lijnen" },
          { en: "Rapid evolutionary change in populations", es: "Cambio evolutivo rápido en poblaciones", de: "Schneller evolutionärer Wandel in Populationen", nl: "Snelle evolutionaire verandering in populaties" },
          { en: "Reversal of evolutionary trends", es: "Reversión de tendencias evolutivas", de: "Umkehrung evolutionärer Trends", nl: "Omkering van evolutionaire trends" },
          { en: "Gradual morphological transformation", es: "Transformación morfológica gradual", de: "Graduelle morphologische Transformation", nl: "Geleidelijke morfologische transformatie" }
        ],
        correct: 0,
        explanation: {
          en: "Convergent evolution occurs when similar environmental pressures lead to the independent evolution of similar adaptations, such as the development of similar body plans in unrelated dinosaur groups.",
          es: "La evolución convergente ocurre cuando presiones ambientales similares llevan a la evolución independiente de adaptaciones similares, como el desarrollo de planes corporales similares en grupos de dinosaurios no relacionados.",
          de: "Konvergente Evolution tritt auf, wenn ähnliche Umweltdrücke zur unabhängigen Evolution ähnlicher Anpassungen führen, wie die Entwicklung ähnlicher Körperpläne in nicht verwandten Dinosauriergruppen.",
          nl: "Convergente evolutie treedt op wanneer soortgelijke milieudruk leidt tot de onafhankelijke evolutie van soortgelijke aanpassingen, zoals de ontwikkeling van soortgelijke lichaamsplannen in niet-verwante dinosaurusgroepen."
        }
      },
      {
        question: {
          en: "What is the concept of mosaic evolution in dinosaur studies?",
          es: "¿Qué es el concepto de evolución en mosaico en los estudios de dinosaurios?",
          de: "Was ist das Konzept der Mosaik-Evolution in Dinosaurier-Studien?",
          nl: "Wat is het concept van mozaïekevolutie in dinosaurusstudies?"
        },
        options: [
          { en: "Different body parts evolving at different rates and times", es: "Diferentes partes del cuerpo evolucionando a diferentes tasas y tiempos", de: "Verschiedene Körperteile entwickeln sich mit unterschiedlichen Raten und Zeiten", nl: "Verschillende lichaamsdelen evolueren met verschillende snelheden en tijden" },
          { en: "Evolution occurring only in specific geographic regions", es: "Evolución que ocurre solo en regiones geográficas específicas", de: "Evolution, die nur in bestimmten geografischen Regionen auftritt", nl: "Evolutie die alleen in specifieke geografische regio's plaatsvindt" },
          { en: "Simultaneous evolution of all body systems", es: "Evolución simultánea de todos los sistemas corporales", de: "Gleichzeitige Evolution aller Körpersysteme", nl: "Gelijktijdige evolutie van alle lichaamssystemen" },
          { en: "Cyclical patterns of evolutionary change", es: "Patrones cíclicos de cambio evolutivo", de: "Zyklische Muster evolutionärer Veränderung", nl: "Cyclische patronen van evolutionaire verandering" }
        ],
        correct: 0,
        explanation: {
          en: "Mosaic evolution describes how different anatomical systems can evolve independently and at different rates, as seen in early birds where flight-related features evolved before other avian characteristics.",
          es: "La evolución en mosaico describe cómo diferentes sistemas anatómicos pueden evolucionar independientemente y a diferentes tasas, como se ve en las aves primitivas donde las características relacionadas con el vuelo evolucionaron antes que otras características aviares.",
          de: "Mosaik-Evolution beschreibt, wie sich verschiedene anatomische Systeme unabhängig und mit unterschiedlichen Raten entwickeln können, wie bei frühen Vögeln zu sehen ist, wo flugbezogene Merkmale vor anderen aviären Charakteristika evolvierten.",
          nl: "Mozaïekevolutie beschrijft hoe verschillende anatomische systemen onafhankelijk en met verschillende snelheden kunnen evolueren, zoals te zien bij vroege vogels waar vlieggerelateerde kenmerken evolueerden vóór andere avische kenmerken."
        }
      },
      {
        question: {
          en: "What is heterochrony and its significance in dinosaur evolution?",
          es: "¿Qué es la heterocronia y su significado en la evolución de dinosaurios?",
          de: "Was ist Heterochronie und ihre Bedeutung in der Dinosaurier-Evolution?",
          nl: "Wat is heterochronie en de betekenis ervan in dinosaurusevolutie?"
        },
        options: [
          { en: "Changes in timing of developmental processes affecting adult form", es: "Cambios en el tiempo de procesos de desarrollo que afectan la forma adulta", de: "Änderungen im Timing von Entwicklungsprozessen, die die Erwachsenenform beeinflussen", nl: "Veranderingen in timing van ontwikkelingsprocessen die volwassen vorm beïnvloeden" },
          { en: "Geographic isolation of populations", es: "Aislamiento geográfico de poblaciones", de: "Geografische Isolation von Populationen", nl: "Geografische isolatie van populaties" },
          { en: "Rapid speciation events", es: "Eventos de especiación rápida", de: "Schnelle Artbildungsereignisse", nl: "Snelle soortformingsgebeurtenissen" },
          { en: "Environmental adaptation strategies", es: "Estrategias de adaptación ambiental", de: "Umweltanpassungsstrategien", nl: "Milieuaanpassingsstrategieën" }
        ],
        correct: 0,
        explanation: {
          en: "Heterochrony involves evolutionary changes in the relative timing of developmental events, such as paedomorphosis (juvenile traits retained in adults) or peramorphosis (extended development), influencing dinosaur morphological evolution.",
          es: "La heterocronia involucra cambios evolutivos en el tiempo relativo de eventos de desarrollo, como paedomorphosis (rasgos juveniles retenidos en adultos) o peramorphosis (desarrollo extendido), influyendo en la evolución morfológica de dinosaurios.",
          de: "Heterochronie beinhaltet evolutionäre Veränderungen im relativen Timing von Entwicklungsereignissen, wie Paedomorphose (juvenile Merkmale bleiben bei Erwachsenen erhalten) oder Peramorphose (verlängerte Entwicklung), die die morphologische Evolution der Dinosaurier beeinflussen.",
          nl: "Heterochronie behelst evolutionaire veranderingen in de relatieve timing van ontwikkelingsgebeurtenissen, zoals paedomorfose (juveniele eigenschappen behouden in volwassenen) of peramorfose (verlengde ontwikkeling), die dinosaurusmorfologische evolutie beïnvloeden."
        }
      },
      {
        question: {
          en: "What is punctuated equilibrium and its application to dinosaur evolution?",
          es: "¿Qué es el equilibrio puntuado y su aplicación a la evolución de dinosaurios?",
          de: "Was ist punktiertes Gleichgewicht und seine Anwendung auf die Dinosaurier-Evolution?",
          nl: "Wat is onderbroken evenwicht en de toepassing ervan op dinosaurusevolutie?"
        },
        options: [
          { en: "Periods of rapid evolutionary change alternating with stasis", es: "Períodos de cambio evolutivo rápido alternando con estasis", de: "Perioden schneller evolutionärer Veränderung im Wechsel mit Stase", nl: "Periodes van snelle evolutionaire verandering afgewisseld met stase" },
          { en: "Steady gradual evolutionary transformation", es: "Transformación evolutiva gradual constante", de: "Stetige graduelle evolutionäre Transformation", nl: "Gestage geleidelijke evolutionaire transformatie" },
          { en: "Cyclical extinction and radiation events", es: "Eventos cíclicos de extinción y radiación", de: "Zyklische Extinktions- und Strahlungsereignisse", nl: "Cyclische extinctie- en stralingsgebeurtenissen" },
          { en: "Random evolutionary changes over time", es: "Cambios evolutivos aleatorios a lo largo del tiempo", de: "Zufällige evolutionäre Veränderungen über die Zeit", nl: "Willekeurige evolutionaire veranderingen over tijd" }
        ],
        correct: 0,
        explanation: {
          en: "Punctuated equilibrium suggests that species remain relatively unchanged for long periods, with rapid evolutionary changes occurring during brief intervals, often corresponding to speciation events in the fossil record.",
          es: "El equilibrio puntuado sugiere que las especies permanecen relativamente sin cambios durante largos períodos, con cambios evolutivos rápidos ocurriendo durante intervalos breves, a menudo correspondiendo a eventos de especiación en el registro fósil.",
          de: "Punktiertes Gleichgewicht legt nahe, dass Arten über lange Zeiträume relativ unverändert bleiben, wobei schnelle evolutionäre Veränderungen während kurzer Intervalle auftreten, die oft Artbildungsereignissen im Fossilbericht entsprechen.",
          nl: "Onderbroken evenwicht suggereert dat soorten gedurende lange periodes relatief onveranderd blijven, met snelle evolutionaire veranderingen die optreden tijdens korte intervallen, vaak overeenkomend met soortformingsgebeurtenissen in het fossielrecord."
        }
      },
      {
        question: {
          en: "What is taxonomic diversity analysis in paleontology?",
          es: "¿Qué es el análisis de diversidad taxonómica en paleontología?",
          de: "Was ist taxonomische Diversitätsanalyse in der Paläontologie?",
          nl: "Wat is taxonomische diversiteitsanalyse in de paleontologie?"
        },
        options: [
          { en: "Quantifying species richness and evolutionary patterns through time", es: "Cuantificar riqueza de especies y patrones evolutivos a través del tiempo", de: "Quantifizierung von Artenreichtum und evolutionären Mustern durch die Zeit", nl: "Kwantificeren van soortenrijkdom en evolutionaire patronen door de tijd" },
          { en: "Classifying fossils by morphological similarity", es: "Clasificar fósiles por similitud morfológica", de: "Klassifikation von Fossilien nach morphologischer Ähnlichkeit", nl: "Classificeren van fossielen naar morfologische gelijkenis" },
          { en: "Measuring fossil preservation quality", es: "Medir calidad de preservación de fósiles", de: "Messung der Qualität der Fossilerhaltung", nl: "Meten van kwaliteit van fossielbewaring" },
          { en: "Analyzing geographic distribution patterns", es: "Analizar patrones de distribución geográfica", de: "Analyse geografischer Verteilungsmuster", nl: "Analyseren van geografische verspreidingspatronen" }
        ],
        correct: 0,
        explanation: {
          en: "Taxonomic diversity analysis examines patterns of origination, extinction, and species turnover rates to understand macroevolutionary trends and the factors driving biodiversity changes over geological time.",
          es: "El análisis de diversidad taxonómica examina patrones de originación, extinción y tasas de renovación de especies para entender tendencias macroevolutivas y los factores que impulsan cambios de biodiversidad a lo largo del tiempo geológico.",
          de: "Die taxonomische Diversitätsanalyse untersucht Muster der Entstehung, des Aussterbens und der Artenwechselraten, um makroevolutionäre Trends und die Faktoren zu verstehen, die Biodiversitätsänderungen über geologische Zeiten antreiben.",
          nl: "Taxonomische diversiteitsanalyse onderzoekt patronen van ontstaan, extinctie en soorten-omzetsnelheden om macro-evolutionaire trends en de factoren die biodiversiteitsveranderingen over geologische tijd aandrijven te begrijpen."
        }
      },
      {
        question: {
          en: "What is adaptive radiation in dinosaur evolution?",
          es: "¿Qué es la radiación adaptiva en la evolución de dinosaurios?",
          de: "Was ist adaptive Radiation in der Dinosaurier-Evolution?",
          nl: "Wat is adaptieve radiatie in dinosaurusevolutie?"
        },
        options: [
          { en: "Rapid diversification into multiple ecological niches", es: "Diversificación rápida en múltiples nichos ecológicos", de: "Schnelle Diversifizierung in mehrere ökologische Nischen", nl: "Snelle diversificatie in meerdere ecologische niches" },
          { en: "Gradual size increase over time", es: "Aumento gradual de tamaño con el tiempo", de: "Allmähliche Größenzunahme über die Zeit", nl: "Geleidelijke groottevergroting over tijd" },
          { en: "Development of defensive mechanisms", es: "Desarrollo de mecanismos defensivos", de: "Entwicklung von Abwehrmechanismen", nl: "Ontwikkeling van verdedigingsmechanismen" },
          { en: "Migration to new geographic regions", es: "Migración a nuevas regiones geográficas", de: "Migration in neue geografische Regionen", nl: "Migratie naar nieuwe geografische regio's" }
        ],
        correct: 0,
        explanation: {
          en: "Adaptive radiation occurs when a lineage rapidly evolves into many species adapted to different ecological roles, as seen in early dinosaur evolution when they diversified into various feeding strategies and body plans.",
          es: "La radiación adaptiva ocurre cuando un linaje evoluciona rápidamente en muchas especies adaptadas a diferentes roles ecológicos, como se ve en la evolución temprana de dinosaurios cuando se diversificaron en varias estrategias alimentarias y planes corporales.",
          de: "Adaptive Radiation tritt auf, wenn sich eine Linie schnell zu vielen Arten entwickelt, die an verschiedene ökologische Rollen angepasst sind, wie in der frühen Dinosaurier-Evolution zu sehen ist, als sie sich in verschiedene Ernährungsstrategien und Körperpläne diversifizierten.",
          nl: "Adaptieve radiatie treedt op wanneer een lijn snel evolueert in vele soorten aangepast aan verschillende ecologische rollen, zoals te zien in vroege dinosaurusevolutie toen ze diversifieerden in verschillende voedingsstrategieën en lichaamsplannen."
        }
      },
      {
        question: {
          en: "What is the role of functional morphology in understanding dinosaur ecology?",
          es: "¿Cuál es el papel de la morfología funcional en entender la ecología de dinosaurios?",
          de: "Welche Rolle spielt die funktionale Morphologie beim Verständnis der Dinosaurier-Ökologie?",
          nl: "Wat is de rol van functionele morfologie in het begrijpen van dinosaurusecologie?"
        },
        options: [
          { en: "Relating anatomical structures to their biological functions and behaviors", es: "Relacionar estructuras anatómicas con sus funciones biológicas y comportamientos", de: "Verknüpfung anatomischer Strukturen mit ihren biologischen Funktionen und Verhaltensweisen", nl: "Het relateren van anatomische structuren aan hun biologische functies en gedragingen" },
          { en: "Classifying species by size categories", es: "Clasificar especies por categorías de tamaño", de: "Klassifikation von Arten nach Größenkategorien", nl: "Classificeren van soorten naar groottecategorieën" },
          { en: "Measuring fossil completeness", es: "Medir completitud de fósiles", de: "Messung der Vollständigkeit von Fossilien", nl: "Meten van fossielcompltletheid" },
          { en: "Determining preservation pathways", es: "Determinar vías de preservación", de: "Bestimmung von Erhaltungswegen", nl: "Bepalen van bewaringswegen" }
        ],
        correct: 0,
        explanation: {
          en: "Functional morphology analyzes how anatomical features relate to specific functions, allowing paleontologists to infer feeding behaviors, locomotion styles, sensory capabilities, and ecological roles from fossil morphology.",
          es: "La morfología funcional analiza cómo las características anatómicas se relacionan con funciones específicas, permitiendo a los paleontólogos inferir comportamientos alimentarios, estilos de locomoción, capacidades sensoriales y roles ecológicos a partir de la morfología fósil.",
          de: "Die funktionale Morphologie analysiert, wie anatomische Merkmale mit spezifischen Funktionen zusammenhängen, und ermöglicht es Paläontologen, Fressverhalten, Bewegungsstile, sensorische Fähigkeiten und ökologische Rollen aus der fossilen Morphologie zu schließen.",
          nl: "Functionele morfologie analyseert hoe anatomische kenmerken gerelateerd zijn aan specifieke functies, waardoor paleontologen voedingsgedrag, voortbewegingsstijlen, sensorische mogelijkheden en ecologische rollen kunnen afleiden uit fossiele morfologie."
        }
      },
      {
        question: {
          en: "What is morphospace analysis in dinosaur studies?",
          es: "¿Qué es el análisis de morfoespacio en los estudios de dinosaurios?",
          de: "Was ist Morphospace-Analyse in Dinosaurier-Studien?",
          nl: "Wat is morfospace-analyse in dinosaurusstudies?"
        },
        options: [
          { en: "Quantifying and visualizing morphological variation and evolutionary trends", es: "Cuantificar y visualizar variación morfológica y tendencias evolutivas", de: "Quantifizierung und Visualisierung morphologischer Variation und evolutionärer Trends", nl: "Kwantificeren en visualiseren van morfologische variatie en evolutionaire trends" },
          { en: "Mapping fossil discovery locations", es: "Mapear ubicaciones de descubrimiento de fósiles", de: "Kartierung von Fossilfundorten", nl: "Mappen van fossielontdekkingslocaties" },
          { en: "Analyzing stratigraphic sequences", es: "Analizar secuencias estratigráficas", de: "Analyse stratigraphischer Sequenzen", nl: "Analyseren van stratigrafische sequenties" },
          { en: "Measuring sediment composition", es: "Medir composición de sedimentos", de: "Messung der Sedimentzusammensetzung", nl: "Meten van sedimentsamenstelling" }
        ],
        correct: 0,
        explanation: {
          en: "Morphospace analysis uses mathematical techniques to map morphological diversity in multi-dimensional space, revealing patterns of evolution, constraint, and the exploration of form through time.",
          es: "El análisis de morfoespacio utiliza técnicas matemáticas para mapear diversidad morfológica en espacio multidimensional, revelando patrones de evolución, restricción y la exploración de forma a través del tiempo.",
          de: "Die Morphospace-Analyse verwendet mathematische Techniken, um morphologische Vielfalt in mehrdimensionalem Raum zu kartieren und Muster der Evolution, Einschränkungen und die Erforschung der Form durch die Zeit zu enthüllen.",
          nl: "Morfospace-analyse gebruikt mathematische technieken om morfologische diversiteit in multidimensionale ruimte in kaart te brengen, waarbij patronen van evolutie, beperking en de verkenning van vorm door de tijd worden onthuld."
        }
      },
      {
        question: {
          en: "What is the significance of stratigraphic paleobiology in dinosaur research?",
          es: "¿Cuál es la importancia de la paleobiología estratigráfica en la investigación de dinosaurios?",
          de: "Welche Bedeutung hat die stratigraphische Paläobiologie in der Dinosaurier-Forschung?",
          nl: "Wat is de betekenis van stratigrafische paleobiologie in dinosaurusonderzoek?"
        },
        options: [
          { en: "Integrating fossil data with geological and environmental context", es: "Integrar datos fósiles con contexto geológico y ambiental", de: "Integration fossiler Daten mit geologischem und Umweltkontext", nl: "Integreren van fossielgegevens met geologische en milieucontext" },
          { en: "Creating detailed fossil illustrations", es: "Crear ilustraciones detalladas de fósiles", de: "Erstellung detaillierter Fossilillustrations", nl: "Creëren van gedetailleerde fossielillustraties" },
          { en: "Measuring bone density variations", es: "Medir variaciones de densidad ósea", de: "Messung von Knochendichtevariationen", nl: "Meten van botdichtheidsvariaties" },
          { en: "Analyzing fossil color patterns", es: "Analizar patrones de color de fósiles", de: "Analyse von Fossilfarbenmustern", nl: "Analyseren van fossielkleurpatronen" }
        ],
        correct: 0,
        explanation: {
          en: "Stratigraphic paleobiology combines high-resolution stratigraphic data with paleontological information to understand how environmental changes influenced dinosaur evolution, extinction, and community structure.",
          es: "La paleobiología estratigráfica combina datos estratigráficos de alta resolución con información paleontológica para entender cómo los cambios ambientales influyeron en la evolución, extinción y estructura comunitaria de dinosaurios.",
          de: "Die stratigraphische Paläobiologie kombiniert hochauflösende stratigraphische Daten mit paläontologischen Informationen, um zu verstehen, wie Umweltveränderungen die Evolution, das Aussterben und die Gemeinschaftsstruktur der Dinosaurier beeinflussten.",
          nl: "Stratigrafische paleobiologie combineert hoge-resolutie stratigrafische gegevens met paleontologische informatie om te begrijpen hoe milieuveranderingen dinosaurusevolutie, extinctie en gemeenschapsstructuur beïnvloedden."
        }
      },
      {
        question: {
          en: "What is allometry and its importance in dinosaur growth studies?",
          es: "¿Qué es la alometría y su importancia en los estudios de crecimiento de dinosaurios?",
          de: "Was ist Allometrie und ihre Bedeutung in Dinosaurier-Wachstumsstudien?",
          nl: "Wat is allometrie en het belang ervan in dinosaurusgroeistudies?"
        },
        options: [
          { en: "Study of how body proportions change with size during growth", es: "Estudio de cómo las proporciones corporales cambian con el tamaño durante el crecimiento", de: "Studie darüber, wie sich Körperproportionen mit der Größe während des Wachstums ändern", nl: "Studie van hoe lichaamsproporties veranderen met grootte tijdens groei" },
          { en: "Analysis of metabolic rate variations", es: "Análisis de variaciones de tasa metabólica", de: "Analyse von Stoffwechselrate-Variationen", nl: "Analyse van stofwisselingssnelheidsvariaties" },
          { en: "Measurement of bone mineralization", es: "Medición de mineralización ósea", de: "Messung der Knochenmineralisierung", nl: "Meting van botmineralisatie" },
          { en: "Classification of developmental stages", es: "Clasificación de etapas de desarrollo", de: "Klassifikation von Entwicklungsstadien", nl: "Classificatie van ontwikkelingsstadia" }
        ],
        correct: 0,
        explanation: {
          en: "Allometry examines scaling relationships between different body parts as organisms grow, helping paleontologists distinguish between juvenile and adult specimens and understand developmental constraints on evolution.",
          es: "La alometría examina relaciones de escala entre diferentes partes del cuerpo mientras los organismos crecen, ayudando a los paleontólogos a distinguir entre especímenes juveniles y adultos y entender restricciones de desarrollo en la evolución.",
          de: "Allometrie untersucht Skalierungsbeziehungen zwischen verschiedenen Körperteilen, während Organismen wachsen, und hilft Paläontologen dabei, zwischen juvenilen und erwachsenen Exemplaren zu unterscheiden und Entwicklungseinschränkungen der Evolution zu verstehen.",
          nl: "Allometrie onderzoekt schalingsverhoudingen tussen verschillende lichaamsdelen terwijl organismen groeien, waardoor paleontologen kunnen onderscheiden tussen juveniele en volwassen specimens en ontwikkelingsbeperkingen op evolutie kunnen begrijpen."
        }
      },
      {
        question: {
          en: "What is the role of taphonomy in understanding dinosaur fossil assemblages?",
          es: "¿Cuál es el papel de la tafonomía en entender ensamblajes de fósiles de dinosaurios?",
          de: "Welche Rolle spielt die Taphonomie beim Verständnis von Dinosaurier-Fossilversammlungen?",
          nl: "Wat is de rol van tafonomie in het begrijpen van dinosaurusfossielassemblages?"
        },
        options: [
          { en: "Understanding post-mortem processes affecting fossil preservation and bias", es: "Entender procesos post-mortem que afectan la preservación fósil y sesgo", de: "Verständnis postmortaler Prozesse, die Fossilerhaltung und Verzerrung beeinflussen", nl: "Begrijpen van postmortale processen die fossielbewaring en bias beïnvloeden" },
          { en: "Analyzing living ecosystem dynamics", es: "Analizar dinámicas de ecosistemas vivos", de: "Analyse lebender Ökosystem-Dynamiken", nl: "Analyseren van levende ecosysteerdynamiek" },
          { en: "Measuring fossil chemical composition", es: "Medir composición química de fósiles", de: "Messung der chemischen Zusammensetzung von Fossilien", nl: "Meten van fossiele chemische samenstelling" },
          { en: "Calculating species diversity indices", es: "Calcular índices de diversidad de especies", de: "Berechnung von Artendiversitätsindizes", nl: "Berekenen van soortendiversiteitsindices" }
        ],
        correct: 0,
        explanation: {
          en: "Taphonomy studies what happens to organisms after death, including decay, transport, burial, and diagenesis, helping paleontologists interpret fossil assemblages and understand preservation biases in the geological record.",
          es: "La tafonomía estudia qué pasa a los organismos después de la muerte, incluyendo descomposición, transporte, entierro y diagénesis, ayudando a los paleontólogos a interpretar ensamblajes fósiles y entender sesgos de preservación en el registro geológico.",
          de: "Die Taphonomie untersucht, was mit Organismen nach dem Tod geschieht, einschließlich Verfall, Transport, Bestattung und Diagenese, und hilft Paläontologen dabei, Fossilversammlungen zu interpretieren und Erhaltungsverzerrungen im geologischen Rekord zu verstehen.",
          nl: "Tafonomie bestudeert wat er gebeurt met organismen na de dood, inclusief verval, transport, begraving en diagenese, waardoor paleontologen fossielassemblages kunnen interpreteren en bewaringsbias in het geologisch record kunnen begrijpen."
        }
      },
      {
        question: {
          en: "What is morphological disparity and how does it differ from taxonomic diversity?",
          es: "¿Qué es la disparidad morfológica y en qué se diferencia de la diversidad taxonómica?",
          de: "Was ist morphologische Disparität und wie unterscheidet sie sich von taxonomischer Diversität?",
          nl: "Wat is morfologische dispariteit en hoe verschilt het van taxonomische diversiteit?"
        },
        options: [
          { en: "Disparity measures morphological variety; diversity counts species numbers", es: "La disparidad mide variedad morfológica; la diversidad cuenta números de especies", de: "Disparität misst morphologische Vielfalt; Diversität zählt Artenzahlen", nl: "Dispariteit meet morfologische variatie; diversiteit telt aantallen soorten" },
          { en: "Disparity measures temporal distribution; diversity measures geographic range", es: "La disparidad mide distribución temporal; la diversidad mide rango geográfico", de: "Disparität misst zeitliche Verteilung; Diversität misst geografischen Bereich", nl: "Dispariteit meet temporele verdeling; diversiteit meet geografisch bereik" },
          { en: "Disparity measures preservation quality; diversity measures completeness", es: "La disparidad mide calidad de preservación; la diversidad mide completitud", de: "Disparität misst Erhaltungsqualität; Diversität misst Vollständigkeit", nl: "Dispariteit meet bewaringskwaliteit; diversiteit meet compleetheid" },
          { en: "Disparity measures ecological roles; diversity measures feeding strategies", es: "La disparidad mide roles ecológicos; la diversidad mide estrategias alimentarias", de: "Disparität misst ökologische Rollen; Diversität misst Ernährungsstrategien", nl: "Dispariteit meet ecologische rollen; diversiteit meet voedingsstrategieën" }
        ],
        correct: 0,
        explanation: {
          en: "Morphological disparity quantifies the range and variety of anatomical forms, while taxonomic diversity simply counts the number of species. High diversity doesn't necessarily mean high disparity, and vice versa.",
          es: "La disparidad morfológica cuantifica el rango y variedad de formas anatómicas, mientras que la diversidad taxonómica simplemente cuenta el número de especies. Alta diversidad no necesariamente significa alta disparidad, y viceversa.",
          de: "Morphologische Disparität quantifiziert den Bereich und die Vielfalt anatomischer Formen, während taxonomische Diversität einfach die Anzahl der Arten zählt. Hohe Diversität bedeutet nicht unbedingt hohe Disparität und umgekehrt.",
          nl: "Morfologische dispariteit kwantificeert het bereik en de variëteit van anatomische vormen, terwijl taxonomische diversiteit simpelweg het aantal soorten telt. Hoge diversiteit betekent niet noodzakelijkerwijs hoge dispariteit, en omgekeerd."
        }
      },
      {
        question: {
          en: "What is character optimization in phylogenetic analysis?",
          es: "¿Qué es la optimización de caracteres en análisis filogenético?",
          de: "Was ist Charakteroptimierung in der phylogenetischen Analyse?",
          nl: "Wat is karakteroptimalisatie in fylogenetische analyse?"
        },
        options: [
          { en: "Reconstructing ancestral states and evolutionary transitions along phylogenetic trees", es: "Reconstruir estados ancestrales y transiciones evolutivas a lo largo de árboles filogenéticos", de: "Rekonstruktion ancestraler Zustände und evolutionärer Übergänge entlang phylogenetischer Bäume", nl: "Reconstructie van voorouderlijke toestanden en evolutionaire overgangen langs fylogenetische bomen" },
          { en: "Selecting the most informative morphological features", es: "Seleccionar las características morfológicas más informativas", de: "Auswahl der informativsten morphologischen Merkmale", nl: "Selecteren van de meest informatieve morfologische kenmerken" },
          { en: "Measuring the reliability of fossil data", es: "Medir la confiabilidad de datos fósiles", de: "Messung der Zuverlässigkeit fossiler Daten", nl: "Meten van de betrouwbaarheid van fossielgegevens" },
          { en: "Calculating evolutionary rates of change", es: "Calcular tasas evolutivas de cambio", de: "Berechnung evolutionärer Veränderungsraten", nl: "Berekenen van evolutionaire veranderingssnelheden" }
        ],
        correct: 0,
        explanation: {
          en: "Character optimization maps character states onto phylogenetic trees to infer ancestral conditions and trace evolutionary changes, helping understand how and when specific traits evolved in dinosaur lineages.",
          es: "La optimización de caracteres mapea estados de caracteres en árboles filogenéticos para inferir condiciones ancestrales y rastrear cambios evolutivos, ayudando a entender cómo y cuándo evolucionaron rasgos específicos en linajes de dinosaurios.",
          de: "Charakteroptimierung kartiert Charakterzustände auf phylogenetische Bäume, um ancestrale Bedingungen zu schließen und evolutionäre Veränderungen zu verfolgen, und hilft zu verstehen, wie und wann spezifische Merkmale in Dinosaurier-Linien evolvierten.",
          nl: "Karakteroptimalisatie brengt karaktertoestanden in kaart op fylogenetische bomen om voorouderlijke condities af te leiden en evolutionaire veranderingen te traceren, wat helpt begrijpen hoe en wanneer specifieke eigenschappen evolueerden in dinosauruslijnen."
        }
      },
      {
        question: {
          en: "How do integrative approaches combining molecular and morphological data enhance dinosaur phylogeny reconstruction?",
          es: "¿Cómo mejoran los enfoques integrativos que combinan datos moleculares y morfológicos la reconstrucción filogenética de dinosaurios?",
          de: "Wie verbessern integrative Ansätze, die molekulare und morphologische Daten kombinieren, die Dinosaurier-Phylogenie-Rekonstruktion?",
          nl: "Hoe verbeteren integratieve benaderingen die moleculaire en morfologische gegevens combineren de reconstructie van dinosaurusfylogenieën?"
        },
        options: [
          { en: "Providing calibration points and resolving deep nodes with fossil constraints", es: "Proporcionando puntos de calibración y resolviendo nodos profundos con restricciones fósiles", de: "Bereitstellung von Kalibrierungspunkten und Auflösung tiefer Knoten mit Fossil-Beschränkungen", nl: "Verstrekken van kalibratiepunten en oplossen van diepe knooppunten met fossielconstraints" },
          { en: "Simply increasing the amount of data available", es: "Simplemente incrementando la cantidad de datos disponibles", de: "Einfach die Menge verfügbarer Daten erhöhen", nl: "Simpelweg de hoeveelheid beschikbare gegevens verhogen" },
          { en: "Eliminating the need for morphological characters", es: "Eliminando la necesidad de caracteres morfológicos", de: "Eliminierung des Bedarfs an morphologischen Merkmalen", nl: "Elimineren van de behoefte aan morfologische kenmerken" },
          { en: "Reducing computational complexity", es: "Reduciendo complejidad computacional", de: "Reduzierung rechnerischer Komplexität", nl: "Verminderen van computationele complexiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Total-evidence approaches use living relatives to calibrate molecular clocks and provide temporal frameworks, while fossils add morphological diversity and constrain deep evolutionary relationships that molecules alone cannot resolve.",
          es: "Los enfoques de evidencia total usan parientes vivientes para calibrar relojes moleculares y proporcionar marcos temporales, mientras los fósiles añaden diversidad morfológica y restringen relaciones evolutivas profundas que las moléculas solas no pueden resolver.",
          de: "Total-Evidence-Ansätze nutzen lebende Verwandte zur Kalibrierung molekularer Uhren und bieten zeitliche Rahmen, während Fossilien morphologische Diversität hinzufügen und tiefe evolutionäre Beziehungen einschränken, die Moleküle allein nicht auflösen können.",
          nl: "Total-evidence benaderingen gebruiken levende verwanten om moleculaire klokken te kalibreren en temporele raamwerken te bieden, terwijl fossielen morfologische diversiteit toevoegen en diepe evolutionaire relaties beperken die moleculen alleen niet kunnen oplossen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();