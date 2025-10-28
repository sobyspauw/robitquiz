// Dinosaur Fossils Quiz - Level 4: Knowledge about Dinosaur Fossils
(function() {
  const level4 = {
    name: {
      en: "Dinosaur Fossils Level 4",
      es: "Fosiles de Dinosaurios Nivel 4",
      de: "Dinosaurier Fossilien Stufe 4",
      nl: "Dino Fossielen Level 4"
    },
    questions: [
      {
        question: {
          en: "What are trace fossils (ichnofossils)?",
          es: "¿Qué son los fósiles traza (icnofósiles)?",
          de: "Was sind Spurenfossilien (Ichnofossilien)?",
          nl: "Wat zijn sporenfossielen (ichnofossielen)?"
        },
        options: [
          { en: "Evidence of organism activity without body parts", es: "Evidencia de actividad del organismo sin partes del cuerpo", de: "Nachweis von Organismus-Aktivität ohne Körperteile", nl: "Bewijs van organisme-activiteit zonder lichaamsdelen" },
          { en: "Only preserved bones and teeth", es: "Solo huesos y dientes preservados", de: "Nur erhaltene Knochen und Zähne", nl: "Alleen bewaarde botten en tanden" },
          { en: "Chemical traces in rocks", es: "Trazas químicas en las rocas", de: "Chemische Spuren in Gestein", nl: "Chemische sporen in gesteente" },
          { en: "Microscopic fossil fragments", es: "Fragmentos fósiles microscópicos", de: "Mikroskopische Fossil-Fragmente", nl: "Microscopische fossiel-fragmenten" }
        ],
        correct: 0,
        explanation: {
          en: "Trace fossils preserve evidence of ancient life activities like footprints, burrows, nests, and bite marks, rather than actual body parts.",
          es: "Los fósiles traza preservan evidencia de actividades de vida antigua como huellas, madrigueras, nidos y marcas de mordeduras, en lugar de partes corporales reales.",
          de: "Spurenfossilien bewahren Beweise für Aktivitäten des alten Lebens wie Fußspuren, Bauten, Nester und Bissspuren, anstatt tatsächliche Körperteile.",
          nl: "Sporenfossielen bewaren bewijs van oude levensactiviteiten zoals voetstappen, holen, nesten en bijtwonden, in plaats van werkelijke lichaamsdelen."
        }
      },
      {
        question: {
          en: "What is the difference between body fossils and molecular fossils?",
          es: "¿Cuál es la diferencia entre fósiles corporales y fósiles moleculares?",
          de: "Was ist der Unterschied zwischen Körperfossilien und Molekularfossilien?",
          nl: "Wat is het verschil tussen lichaamsfossielen en moleculaire fossielen?"
        },
        options: [
          { en: "Body fossils are physical remains, molecular fossils are chemical signatures", es: "Los fósiles corporales son restos físicos, los fósiles moleculares son firmas químicas", de: "Körperfossilien sind physische Überreste, Molekularfossilien sind chemische Signaturen", nl: "Lichaamsfossielen zijn fysieke resten, moleculaire fossielen zijn chemische signaturen" },
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" },
          { en: "Body fossils are smaller than molecular fossils", es: "Los fósiles corporales son más pequeños que los fósiles moleculares", de: "Körperfossilien sind kleiner als Molekularfossilien", nl: "Lichaamsfossielen zijn kleiner dan moleculaire fossielen" },
          { en: "Molecular fossils only exist in laboratories", es: "Los fósiles moleculares solo existen en laboratorios", de: "Molekularfossilien existieren nur in Labors", nl: "Moleculaire fossielen bestaan alleen in laboratoria" }
        ],
        correct: 0,
        explanation: {
          en: "Body fossils preserve actual physical parts like bones and shells, while molecular fossils (biomarkers) are organic chemical compounds that indicate past life.",
          es: "Los fósiles corporales preservan partes físicas reales como huesos y conchas, mientras que los fósiles moleculares (biomarcadores) son compuestos químicos orgánicos que indican vida pasada.",
          de: "Körperfossilien bewahren tatsächliche physische Teile wie Knochen und Schalen, während Molekularfossilien (Biomarker) organische chemische Verbindungen sind, die auf vergangenes Leben hinweisen.",
          nl: "Lichaamsfossielen bewaren werkelijke fysieke delen zoals botten en schelpen, terwijl moleculaire fossielen (biomarkers) organische chemische verbindingen zijn die wijzen op verleden leven."
        }
      },
      {
        question: {
          en: "What type of fossil preservation is petrification?",
          es: "¿Qué tipo de preservación de fósil es la petrificación?",
          de: "Welche Art der Fossilerhaltung ist Versteinerung?",
          nl: "Welk type fossielpreservatie is versteining?"
        },
        options: [
          { en: "Permineralization with complete replacement", es: "Permineralización con reemplazo completo", de: "Permineralisation mit vollständigem Ersatz", nl: "Permineralisatie met volledige vervanging" },
          { en: "Freezing in ice", es: "Congelación en hielo", de: "Einfrieren in Eis", nl: "Bevriezen in ijs" },
          { en: "Preservation in amber", es: "Preservación en ámbar", de: "Erhaltung in Bernstein", nl: "Preservatie in barnsteen" },
          { en: "Mummification in dry conditions", es: "Momificación en condiciones secas", de: "Mumifizierung unter trockenen Bedingungen", nl: "Mummificatie onder droge omstandigheden" }
        ],
        correct: 0,
        explanation: {
          en: "Petrification occurs when organic matter is completely replaced by minerals, typically silica, creating stone-like fossils that preserve detailed structure.",
          es: "La petrificación ocurre cuando la materia orgánica es completamente reemplazada por minerales, típicamente sílice, creando fósiles parecidos a piedras que preservan estructura detallada.",
          de: "Versteinerung tritt auf, wenn organische Materie vollständig durch Mineralien, typischerweise Kieselsäure, ersetzt wird und steinähnliche Fossilien entstehen, die detaillierte Strukturen bewahren.",
          nl: "Versteining treedt op wanneer organisch materiaal volledig wordt vervangen door mineralen, typisch silica, waardoor steenachtige fossielen ontstaan die gedetailleerde structuur bewaren."
        }
      },
      {
        question: {
          en: "What are index fossils (guide fossils)?",
          es: "¿Qué son los fósiles índice (fósiles guía)?",
          de: "Was sind Leitfossilien?",
          nl: "Wat zijn indexfossielen (gidsfossielen)?"
        },
        options: [
          { en: "Fossils used to date and correlate rock layers", es: "Fósiles usados para datar y correlacionar capas de roca", de: "Fossilien, die zur Datierung und Korrelation von Gesteinsschichten verwendet werden", nl: "Fossielen gebruikt om gesteentelagen te dateren en correleren" },
          { en: "The largest fossils ever found", es: "Los fósiles más grandes jamás encontrados", de: "Die größten jemals gefundenen Fossilien", nl: "De grootste fossielen ooit gevonden" },
          { en: "Fossils found only in museums", es: "Fósiles encontrados solo en museos", de: "Nur in Museen gefundene Fossilien", nl: "Fossielen die alleen in musea gevonden worden" },
          { en: "The first fossil discovered", es: "El primer fósil descubierto", de: "Das erste entdeckte Fossil", nl: "Het eerste ontdekte fossiel" }
        ],
        correct: 0,
        explanation: {
          en: "Index fossils are species that lived for short time periods but were geographically widespread, making them useful for dating and correlating rock formations.",
          es: "Los fósiles índice son especies que vivieron por períodos cortos pero fueron geográficamente extensas, haciéndolos útiles para datar y correlacionar formaciones rocosas.",
          de: "Leitfossilien sind Arten, die kurze Zeiträume lebten, aber geografisch weit verbreitet waren, was sie nützlich für die Datierung und Korrelation von Gesteinsformationen macht.",
          nl: "Indexfossielen zijn soorten die korte tijdsperioden leefden maar geografisch wijdverspreid waren, waardoor ze nuttig zijn voor het dateren en correleren van gesteenteformaties."
        }
      },
      {
        question: {
          en: "What is a pseudofossil?",
          es: "¿Qué es un pseudofósil?",
          de: "Was ist ein Pseudofossil?",
          nl: "Wat is een pseudofossiel?"
        },
        options: [
          { en: "A rock formation that looks like a fossil but isn't biological", es: "Una formación rocosa que parece un fósil pero no es biológica", de: "Eine Gesteinsformation, die wie ein Fossil aussieht, aber nicht biologisch ist", nl: "Een gesteenteformatie die eruitziet als een fossiel maar niet biologisch is" },
          { en: "A very old fossil", es: "Un fósil muy antiguo", de: "Ein sehr altes Fossil", nl: "Een zeer oud fossiel" },
          { en: "A fake fossil made by humans", es: "Un fósil falso hecho por humanos", de: "Ein gefälschtes, von Menschen gemachtes Fossil", nl: "Een nep-fossiel gemaakt door mensen" },
          { en: "A fossil of an unknown species", es: "Un fósil de una especie desconocida", de: "Ein Fossil einer unbekannten Art", nl: "Een fossiel van een onbekende soort" }
        ],
        correct: 0,
        explanation: {
          en: "Pseudofossils are mineral formations or rock patterns that resemble fossils but formed through geological processes rather than biological ones.",
          es: "Los pseudofósiles son formaciones minerales o patrones de roca que se asemejan a fósiles pero se formaron a través de procesos geológicos en lugar de biológicos.",
          de: "Pseudofossilien sind Mineralformationen oder Gesteinsmuster, die Fossilien ähneln, aber durch geologische Prozesse anstatt biologische entstanden sind.",
          nl: "Pseudofossielen zijn mineraalformaties of gesteentepatronen die op fossielen lijken maar ontstaan zijn door geologische processen in plaats van biologische."
        }
      },
      {
        question: {
          en: "What are living fossils?",
          es: "¿Qué son los fósiles vivientes?",
          de: "Was sind lebende Fossilien?",
          nl: "Wat zijn levende fossielen?"
        },
        options: [
          { en: "Modern organisms that closely resemble their ancient ancestors", es: "Organismos modernos que se parecen mucho a sus ancestros antiguos", de: "Moderne Organismen, die ihren alten Vorfahren stark ähneln", nl: "Moderne organismen die sterk lijken op hun oude voorouders" },
          { en: "Fossils that are still growing", es: "Fósiles que todavía están creciendo", de: "Fossilien, die noch wachsen", nl: "Fossielen die nog groeien" },
          { en: "Fossils found in living trees", es: "Fósiles encontrados en árboles vivos", de: "In lebenden Bäumen gefundene Fossilien", nl: "Fossielen gevonden in levende bomen" },
          { en: "Recently discovered fossils", es: "Fósiles recientemente descubiertos", de: "Kürzlich entdeckte Fossilien", nl: "Recent ontdekte fossielen" }
        ],
        correct: 0,
        explanation: {
          en: "Living fossils are modern species that have changed very little from their ancient forms, like coelacanths, horseshoe crabs, and ginkgo trees.",
          es: "Los fósiles vivientes son especies modernas que han cambiado muy poco de sus formas antiguas, como los celacantos, cangrejos herradura y árboles ginkgo.",
          de: "Lebende Fossilien sind moderne Arten, die sich sehr wenig von ihren alten Formen verändert haben, wie Quastenflosser, Pfeilschwanzkrebse und Ginkgo-Bäume.",
          nl: "Levende fossielen zijn moderne soorten die heel weinig zijn veranderd ten opzichte van hun oude vormen, zoals coelacanten, degenkrabben en ginkgo-bomen."
        }
      },
      {
        question: {
          en: "What is the difference between original remains and altered remains in fossils?",
          es: "¿Cuál es la diferencia entre restos originales y restos alterados en los fósiles?",
          de: "Was ist der Unterschied zwischen ursprünglichen und veränderten Überresten in Fossilien?",
          nl: "Wat is het verschil tussen oorspronkelijke resten en veranderde resten in fossielen?"
        },
        options: [
          { en: "Original remains keep some organic material, altered remains are completely mineralized", es: "Los restos originales mantienen algo de material orgánico, los restos alterados están completamente mineralizados", de: "Ursprüngliche Überreste behalten organisches Material, veränderte Überreste sind völlig mineralisiert", nl: "Oorspronkelijke resten behouden organisch materiaal, veranderde resten zijn volledig gemineraliseerd" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" },
          { en: "Original remains are always older", es: "Los restos originales son siempre más antiguos", de: "Ursprüngliche Überreste sind immer älter", nl: "Oorspronkelijke resten zijn altijd ouder" },
          { en: "Altered remains are always fake", es: "Los restos alterados son siempre falsos", de: "Veränderte Überreste sind immer gefälscht", nl: "Veranderde resten zijn altijd nep" }
        ],
        correct: 0,
        explanation: {
          en: "Original remains preserve some original organic material like chitin or collagen, while altered remains have had all organic material replaced by minerals.",
          es: "Los restos originales preservan algo de material orgánico original como quitina o colágeno, mientras que los restos alterados han tenido todo el material orgánico reemplazado por minerales.",
          de: "Ursprüngliche Überreste bewahren organisches Originalmaterial wie Chitin oder Kollagen, während veränderte Überreste alles organische Material durch Mineralien ersetzt haben.",
          nl: "Oorspronkelijke resten bewaren wat oorspronkelijk organisch materiaal zoals chitine of collageen, terwijl veranderde resten al het organische materiaal vervangen hebben door mineralen."
        }
      },
      {
        question: {
          en: "What are Lagerstätten in paleontology?",
          es: "¿Qué son los Lagerstätten en paleontología?",
          de: "Was sind Lagerstätten in der Paläontologie?",
          nl: "Wat zijn Lagerstätten in de paleontologie?"
        },
        options: [
          { en: "Fossil deposits with exceptional preservation quality", es: "Depósitos fósiles con calidad de preservación excepcional", de: "Fossil-Lagerstätten mit außergewöhnlicher Erhaltungsqualität", nl: "Fossielafzettingen met uitzonderlijke preservatiekwaliteit" },
          { en: "Large dinosaur bones", es: "Huesos grandes de dinosaurios", de: "Große Dinosaurier-Knochen", nl: "Grote dinosaurusbotten" },
          { en: "Fossil hunting tools", es: "Herramientas de búsqueda de fósiles", de: "Fossilsuch-Werkzeuge", nl: "Fossielzoek-gereedschap" },
          { en: "Museums with fossil collections", es: "Museos con colecciones de fósiles", de: "Museen mit Fossilsammlungen", nl: "Musea met fossielcollecties" }
        ],
        correct: 0,
        explanation: {
          en: "Lagerstätten are rare fossil-bearing rock formations that preserve organisms in exceptional detail, often including soft tissues and complete ecosystems.",
          es: "Los Lagerstätten son formaciones rocosas fosilíferas raras que preservan organismos en detalle excepcional, a menudo incluyendo tejidos blandos y ecosistemas completos.",
          de: "Lagerstätten sind seltene fossilführende Gesteinsformationen, die Organismen in außergewöhnlichem Detail bewahren, oft einschließlich Weichgewebe und vollständiger Ökosysteme.",
          nl: "Lagerstätten zijn zeldzame fossielvoerende gesteenteformaties die organismen bewaren in uitzonderlijk detail, vaak inclusief zachte weefsels en complete ecosystemen."
        }
      },
      {
        question: {
          en: "What is taphofacies analysis?",
          es: "¿Qué es el análisis de tafofacies?",
          de: "Was ist Taphofazies-Analyse?",
          nl: "Wat is tafofacies-analyse?"
        },
        options: [
          { en: "Study of preservation patterns to understand depositional environments", es: "Estudio de patrones de preservación para entender ambientes deposicionales", de: "Studie von Erhaltungsmustern zum Verständnis von Ablagerungsumgebungen", nl: "Studie van preservatiepatronen om afzettingsomgevingen te begrijpen" },
          { en: "Counting fossil fragments", es: "Conteo de fragmentos fósiles", de: "Zählung von Fossil-Fragmenten", nl: "Tellen van fossiel-fragmenten" },
          { en: "Measuring fossil colors", es: "Medición de colores de fósiles", de: "Messung von Fossilfarben", nl: "Meting van fossielkleuren" },
          { en: "Classification of fossil sizes", es: "Clasificación de tamaños de fósiles", de: "Klassifizierung von Fossilgrößen", nl: "Classificatie van fossielgroottes" }
        ],
        correct: 0,
        explanation: {
          en: "Taphofacies analysis studies the patterns of fossil preservation to reconstruct ancient environmental conditions and depositional processes.",
          es: "El análisis de tafofacies estudia los patrones de preservación de fósiles para reconstruir condiciones ambientales antiguas y procesos deposicionales.",
          de: "Taphofazies-Analyse untersucht die Muster der Fossilerhaltung, um alte Umweltbedingungen und Ablagerungsprozesse zu rekonstruieren.",
          nl: "Tafofacies-analyse bestudeert de patronen van fossielpreservatie om oude omgevingsomstandigheden en afzettingsprocessen te reconstrueren."
        }
      },
      {
        question: {
          en: "What are microfossils?",
          es: "¿Qué son los microfósiles?",
          de: "Was sind Mikrofossilien?",
          nl: "Wat zijn microfossielen?"
        },
        options: [
          { en: "Fossils requiring microscopic examination to study", es: "Fósiles que requieren examen microscópico para estudiar", de: "Fossilien, die mikroskopische Untersuchung zum Studium erfordern", nl: "Fossielen die microscopisch onderzoek vereisen om te bestuderen" },
          { en: "Very small dinosaurs", es: "Dinosaurios muy pequeños", de: "Sehr kleine Dinosaurier", nl: "Zeer kleine dinosaurussen" },
          { en: "Broken pieces of large fossils", es: "Pedazos rotos de fósiles grandes", de: "Zerbrochene Stücke großer Fossilien", nl: "Gebroken stukken van grote fossielen" },
          { en: "Fossils found in microscopes", es: "Fósiles encontrados en microscopios", de: "In Mikroskopen gefundene Fossilien", nl: "Fossielen gevonden in microscopen" }
        ],
        correct: 0,
        explanation: {
          en: "Microfossils are fossils so small they require microscopic magnification to study, including foraminifera, diatoms, pollen, and spores.",
          es: "Los microfósiles son fósiles tan pequeños que requieren magnificación microscópica para estudiar, incluyendo foraminíferos, diatomeas, polen y esporas.",
          de: "Mikrofossilien sind Fossilien, die so klein sind, dass sie mikroskopische Vergrößerung zum Studium erfordern, einschließlich Foraminiferen, Diatomeen, Pollen und Sporen.",
          nl: "Microfossielen zijn fossielen die zo klein zijn dat ze microscopische vergroting vereisen om te bestuderen, inclusief foraminiferen, diatomeeën, pollen en sporen."
        }
      },
      {
        question: {
          en: "What is the difference between compression and impression fossils?",
          es: "¿Cuál es la diferencia entre fósiles de compresión e impresión?",
          de: "Was ist der Unterschied zwischen Kompressions- und Abdruckfossilien?",
          nl: "Wat is het verschil tussen compressie- en afdrukfossielen?"
        },
        options: [
          { en: "Compression fossils retain organic matter, impression fossils are just outlines", es: "Los fósiles de compresión retienen materia orgánica, los fósiles de impresión son solo contornos", de: "Kompressionsfossilien behalten organische Materie, Abdruckfossilien sind nur Umrisse", nl: "Compressiefossielen behouden organisch materiaal, afdrukfossielen zijn alleen omtrekken" },
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" },
          { en: "Compression fossils are always larger", es: "Los fósiles de compresión son siempre más grandes", de: "Kompressionsfossilien sind immer größer", nl: "Compressiefossielen zijn altijd groter" },
          { en: "Impression fossils are always older", es: "Los fósiles de impresión son siempre más antiguos", de: "Abdruckfossilien sind immer älter", nl: "Afdrukfossielen zijn altijd ouder" }
        ],
        correct: 0,
        explanation: {
          en: "Compression fossils preserve flattened organic remains with some original material, while impression fossils show only the surface features or outlines.",
          es: "Los fósiles de compresión preservan restos orgánicos aplanados con algo de material original, mientras que los fósiles de impresión muestran solo las características superficiales o contornos.",
          de: "Kompressionsfossilien bewahren abgeflachte organische Überreste mit etwas Originalmaterial, während Abdruckfossilien nur Oberflächenmerkmale oder Umrisse zeigen.",
          nl: "Compressiefossielen bewaren platgedrukte organische resten met wat oorspronkelijk materiaal, terwijl afdrukfossielen alleen oppervlaktekenmerken of omtrekken tonen."
        }
      },
      {
        question: {
          en: "What are subfossils?",
          es: "¿Qué son los subfósiles?",
          de: "Was sind Subfossilien?",
          nl: "Wat zijn subfossielen?"
        },
        options: [
          { en: "Remains that are fossilized but geologically recent", es: "Restos que están fosilizados pero geológicamente recientes", de: "Überreste, die fossiliert, aber geologisch jung sind", nl: "Resten die gefossiliseerd maar geologisch recent zijn" },
          { en: "Fossils found underwater", es: "Fósiles encontrados bajo el agua", de: "Unter Wasser gefundene Fossilien", nl: "Fossielen gevonden onder water" },
          { en: "Very small fossil fragments", es: "Fragmentos fósiles muy pequeños", de: "Sehr kleine Fossil-Fragmente", nl: "Zeer kleine fossiel-fragmenten" },
          { en: "Fossils of unknown age", es: "Fósiles de edad desconocida", de: "Fossilien unbekannten Alters", nl: "Fossielen van onbekende leeftijd" }
        ],
        correct: 0,
        explanation: {
          en: "Subfossils are remains that are partially fossilized or are geologically recent (typically less than 10,000 years old), retaining more original organic material.",
          es: "Los subfósiles son restos que están parcialmente fosilizados o son geológicamente recientes (típicamente menos de 10,000 años), reteniendo más material orgánico original.",
          de: "Subfossilien sind Überreste, die teilweise fossiliert oder geologisch jung sind (typischerweise weniger als 10.000 Jahre alt) und mehr organisches Originalmaterial behalten.",
          nl: "Subfossielen zijn resten die gedeeltelijk gefossiliseerd of geologisch recent zijn (typisch minder dan 10.000 jaar oud), waarbij meer oorspronkelijk organisch materiaal behouden blijft."
        }
      },
      {
        question: {
          en: "What is the concept of fossil assemblages?",
          es: "¿Qué es el concepto de conjuntos fósiles?",
          de: "Was ist das Konzept der Fossilvergesellschaftungen?",
          nl: "Wat is het concept van fossielassemblages?"
        },
        options: [
          { en: "Groups of fossils found together that represent ancient communities", es: "Grupos de fósiles encontrados juntos que representan comunidades antiguas", de: "Gruppen von Fossilien, die zusammen gefunden werden und alte Gemeinschaften repräsentieren", nl: "Groepen fossielen die samen gevonden worden en oude gemeenschappen vertegenwoordigen" },
          { en: "Individual fossils arranged by scientists", es: "Fósiles individuales organizados por científicos", de: "Einzelne Fossilien, die von Wissenschaftlern angeordnet werden", nl: "Individuele fossielen gerangschikt door wetenschappers" },
          { en: "Only the largest fossils in a collection", es: "Solo los fósiles más grandes en una colección", de: "Nur die größten Fossilien in einer Sammlung", nl: "Alleen de grootste fossielen in een collectie" },
          { en: "Fossils from different time periods", es: "Fósiles de diferentes períodos de tiempo", de: "Fossilien aus verschiedenen Zeitperioden", nl: "Fossielen uit verschillende tijdperioden" }
        ],
        correct: 0,
        explanation: {
          en: "Fossil assemblages are collections of fossils found together that help scientists understand ancient ecosystems, food webs, and environmental conditions.",
          es: "Los conjuntos fósiles son colecciones de fósiles encontrados juntos que ayudan a los científicos a entender ecosistemas antiguos, redes alimentarias y condiciones ambientales.",
          de: "Fossilvergesellschaftungen sind Sammlungen von zusammen gefundenen Fossilien, die Wissenschaftlern helfen, alte Ökosysteme, Nahrungsnetze und Umweltbedingungen zu verstehen.",
          nl: "Fossielassemblages zijn collecties van samen gevonden fossielen die wetenschappers helpen oude ecosystemen, voedselketens en omgevingsomstandigheden te begrijpen."
        }
      },
      {
        question: {
          en: "What are chemofossils (chemical fossils)?",
          es: "¿Qué son los quimiofósiles (fósiles químicos)?",
          de: "Was sind Chemofossilien (chemische Fossilien)?",
          nl: "Wat zijn chemofossielen (chemische fossielen)?"
        },
        options: [
          { en: "Organic molecules preserved in rocks as evidence of past life", es: "Moléculas orgánicas preservadas en rocas como evidencia de vida pasada", de: "Organische Moleküle, die in Gestein als Beweis für vergangenes Leben erhalten sind", nl: "Organische moleculen bewaard in gesteente als bewijs van verleden leven" },
          { en: "Fossils treated with chemicals", es: "Fósiles tratados con químicos", de: "Mit Chemikalien behandelte Fossilien", nl: "Fossielen behandeld met chemicaliën" },
          { en: "Artificially created fossils", es: "Fósiles creados artificialmente", de: "Künstlich geschaffene Fossilien", nl: "Kunstmatig gemaakte fossielen" },
          { en: "Fossils that glow under UV light", es: "Fósiles que brillan bajo luz UV", de: "Fossilien, die unter UV-Licht leuchten", nl: "Fossielen die gloeien onder UV-licht" }
        ],
        correct: 0,
        explanation: {
          en: "Chemofossils are organic chemical compounds like sterols and hydrocarbons that persist in rocks and provide biochemical evidence of ancient life.",
          es: "Los quimiofósiles son compuestos químicos orgánicos como esteroles e hidrocarburos que persisten en las rocas y proporcionan evidencia bioquímica de vida antigua.",
          de: "Chemofossilien sind organische chemische Verbindungen wie Sterole und Kohlenwasserstoffe, die in Gestein bestehen und biochemischen Beweis für altes Leben liefern.",
          nl: "Chemofossielen zijn organische chemische verbindingen zoals sterolen en koolwaterstoffen die in gesteente blijven bestaan en biochemisch bewijs leveren van oud leven."
        }
      },
      {
        question: {
          en: "What is the difference between steinkerns and external molds?",
          es: "¿Cuál es la diferencia entre steinkerns y moldes externos?",
          de: "Was ist der Unterschied zwischen Steinkernen und äußeren Abformen?",
          nl: "Wat is het verschil tussen steinkerns en externe afdrukken?"
        },
        options: [
          { en: "Steinkerns preserve internal structures, external molds preserve outer surfaces", es: "Los steinkerns preservan estructuras internas, los moldes externos preservan superficies externas", de: "Steinkerne bewahren innere Strukturen, äußere Abformen bewahren äußere Oberflächen", nl: "Steinkerns bewaren interne structuren, externe afdrukken bewaren buitenoppervlakken" },
          { en: "They are identical", es: "Son idénticos", de: "Sie sind identisch", nl: "Ze zijn identiek" },
          { en: "Steinkerns are always larger", es: "Los steinkerns son siempre más grandes", de: "Steinkerne sind immer größer", nl: "Steinkerns zijn altijd groter" },
          { en: "External molds are always older", es: "Los moldes externos son siempre más antiguos", de: "Äußere Abformen sind immer älter", nl: "Externe afdrukken zijn altijd ouder" }
        ],
        correct: 0,
        explanation: {
          en: "Steinkerns (internal molds) form when sediment fills a hollow structure, preserving internal features, while external molds preserve the outer surface details.",
          es: "Los steinkerns (moldes internos) se forman cuando el sedimento llena una estructura hueca, preservando características internas, mientras que los moldes externos preservan los detalles de la superficie exterior.",
          de: "Steinkerne (innere Abformen) entstehen, wenn Sediment eine hohle Struktur füllt und innere Merkmale bewahrt, während äußere Abformen die äußeren Oberflächendetails bewahren.",
          nl: "Steinkerns (interne afdrukken) vormen wanneer sediment een holle structuur vult en interne kenmerken bewaart, terwijl externe afdrukken de buitenste oppervlaktedetails bewaren."
        }
      },
      {
        question: {
          en: "What is taphonomic bias in the fossil record?",
          es: "¿Qué es el sesgo tafonómico en el registro fósil?",
          de: "Was ist taphonomische Verzerrung im Fossilbeleg?",
          nl: "Wat is tafonomische bias in het fossielenbestand?"
        },
        options: [
          { en: "Unequal preservation of different organisms and environments", es: "Preservación desigual de diferentes organismos y ambientes", de: "Ungleiche Erhaltung verschiedener Organismen und Umgebungen", nl: "Ongelijke preservatie van verschillende organismen en omgevingen" },
          { en: "Deliberate hiding of fossils by collectors", es: "Ocultación deliberada de fósiles por coleccionistas", de: "Absichtliches Verstecken von Fossilien durch Sammler", nl: "Opzettelijk verbergen van fossielen door verzamelaars" },
          { en: "Scientific prejudice against certain fossils", es: "Prejuicio científico contra ciertos fósiles", de: "Wissenschaftliche Voreingenommenheit gegen bestimmte Fossilien", nl: "Wetenschappelijke vooringenomenheid tegen bepaalde fossielen" },
          { en: "Political influence on fossil interpretation", es: "Influencia política en la interpretación de fósiles", de: "Politischer Einfluss auf Fossil-Interpretation", nl: "Politieke invloed op fossielinterpretatie" }
        ],
        correct: 0,
        explanation: {
          en: "Taphonomic bias results from the fact that hard-shelled marine organisms preserve much better than soft-bodied terrestrial organisms, skewing our view of ancient life.",
          es: "El sesgo tafonómico resulta del hecho de que los organismos marinos con conchas duras se preservan mucho mejor que los organismos terrestres de cuerpo blando, sesgando nuestra visión de la vida antigua.",
          de: "Taphonomische Verzerrung entsteht dadurch, dass hartschalige Meeresorganismen viel besser erhalten bleiben als weichkörperige Landorganismen, was unsere Sicht auf das alte Leben verzerrt.",
          nl: "Tafonomische bias ontstaat doordat hardschalige mariene organismen veel beter bewaren dan zachte terrestrische organismen, wat ons beeld van het oude leven vertekent."
        }
      },
      {
        question: {
          en: "What are transitional fossils?",
          es: "¿Qué son los fósiles transicionales?",
          de: "Was sind Übergangsfossilien?",
          nl: "Wat zijn overgangsfossielen?"
        },
        options: [
          { en: "Fossils showing intermediate characteristics between major groups", es: "Fósiles que muestran características intermedias entre grupos principales", de: "Fossilien, die Zwischenmerkmale zwischen Hauptgruppen zeigen", nl: "Fossielen die tussenkenmerken tonen tussen hoofdgroepen" },
          { en: "Fossils currently being excavated", es: "Fósiles actualmente siendo excavados", de: "Fossilien, die derzeit ausgegraben werden", nl: "Fossielen die momenteel worden opgegraven" },
          { en: "Fossils moved between museums", es: "Fósiles movidos entre museos", de: "Zwischen Museen bewegte Fossilien", nl: "Fossielen verplaatst tussen musea" },
          { en: "Fossils changing color over time", es: "Fósiles cambiando color con el tiempo", de: "Fossilien, die über die Zeit die Farbe ändern", nl: "Fossielen die van kleur veranderen over tijd" }
        ],
        correct: 0,
        explanation: {
          en: "Transitional fossils show intermediate features between ancestral and descendant groups, providing evidence for evolutionary relationships and changes over time.",
          es: "Los fósiles transicionales muestran características intermedias entre grupos ancestrales y descendientes, proporcionando evidencia para relaciones evolutivas y cambios a través del tiempo.",
          de: "Übergangsfossilien zeigen Zwischenmerkmale zwischen Vorfahren- und Nachfahrengruppen und liefern Beweise für evolutionäre Beziehungen und Veränderungen über die Zeit.",
          nl: "Overgangsfossielen tonen tussenkenmerken tussen voorouder- en nakomelingengroepen, wat bewijs levert voor evolutionaire relaties en veranderingen door de tijd."
        }
      },
      {
        question: {
          en: "What is biostratigraphy based on?",
          es: "¿En qué se basa la bioestratigrafía?",
          de: "Worauf basiert Biostratigraphie?",
          nl: "Waarop is biostratigrafie gebaseerd?"
        },
        options: [
          { en: "The evolutionary succession of fossil species through time", es: "La sucesión evolutiva de especies fósiles a través del tiempo", de: "Die evolutionäre Abfolge fossiler Arten durch die Zeit", nl: "De evolutionaire opvolging van fossielsoorten door de tijd" },
          { en: "The size of fossils only", es: "Solo el tamaño de los fósiles", de: "Nur die Größe der Fossilien", nl: "Alleen de grootte van fossielen" },
          { en: "The color of fossil-bearing rocks", es: "El color de las rocas que contienen fósiles", de: "Die Farbe fossilführender Gesteine", nl: "De kleur van fossielvoerende gesteenten" },
          { en: "The weight of fossil specimens", es: "El peso de especímenes fósiles", de: "Das Gewicht fossiler Exemplare", nl: "Het gewicht van fossielspecimens" }
        ],
        correct: 0,
        explanation: {
          en: "Biostratigraphy uses the known evolutionary history and time ranges of fossil species to date rock layers and correlate geological formations.",
          es: "La bioestratigrafía usa la historia evolutiva conocida y los rangos de tiempo de especies fósiles para datar capas de roca y correlacionar formaciones geológicas.",
          de: "Biostratigraphie verwendet die bekannte Evolutionsgeschichte und Zeiträume fossiler Arten, um Gesteinsschichten zu datieren und geologische Formationen zu korrelieren.",
          nl: "Biostratigrafie gebruikt de bekende evolutionaire geschiedenis en tijdsbereiken van fossielsoorten om gesteentelagen te dateren en geologische formaties te correleren."
        }
      },
      {
        question: {
          en: "What are assemblage zones in biostratigraphy?",
          es: "¿Qué son las zonas de conjunto en bioestratigrafía?",
          de: "Was sind Vergesellschaftungszonen in der Biostratigraphie?",
          nl: "Wat zijn assemblage-zones in biostratigrafie?"
        },
        options: [
          { en: "Rock units characterized by distinctive fossil assemblages", es: "Unidades rocosas caracterizadas por conjuntos fósiles distintivos", de: "Gesteinseinheiten, die durch charakteristische Fossilvergesellschaftungen gekennzeichnet sind", nl: "Gesteente-eenheden gekenmerkt door onderscheidende fossielassemblages" },
          { en: "Areas where fossils are assembled by scientists", es: "Áreas donde los fósiles son ensamblados por científicos", de: "Bereiche, wo Fossilien von Wissenschaftlern zusammengefügt werden", nl: "Gebieden waar fossielen door wetenschappers worden samengesteld" },
          { en: "Museums with large fossil collections", es: "Museos con grandes colecciones de fósiles", de: "Museen mit großen Fossilsammlungen", nl: "Musea met grote fossielcollecties" },
          { en: "Geographic regions with similar climates", es: "Regiones geográficas con climas similares", de: "Geografische Regionen mit ähnlichen Klimata", nl: "Geografische regio's met vergelijkbare klimaten" }
        ],
        correct: 0,
        explanation: {
          en: "Assemblage zones are stratigraphic units defined by the association of multiple fossil taxa that lived together during specific time intervals.",
          es: "Las zonas de conjunto son unidades estratigráficas definidas por la asociación de múltiples taxones fósiles que vivieron juntos durante intervalos de tiempo específicos.",
          de: "Vergesellschaftungszonen sind stratigraphische Einheiten, die durch die Assoziation mehrerer fossiler Taxa definiert sind, die während bestimmter Zeitintervalle zusammen lebten.",
          nl: "Assemblage-zones zijn stratigrafische eenheden gedefinieerd door de associatie van meerdere fossiele taxa die tijdens specifieke tijdsintervallen samen leefden."
        }
      },
      {
        question: {
          en: "What is radiometric dating and how is it used with dinosaur fossils?",
          es: "¿Qué es la datación radiométrica y cómo se usa con fósiles de dinosaurios?",
          de: "Was ist radiometrische Datierung und wie wird sie bei Dinosaurier-Fossilien verwendet?",
          nl: "Wat is radiometrische datering en hoe wordt het gebruikt bij dinosaurusfossielen?"
        },
        options: [
          { en: "Dating volcanic rocks above and below fossil layers to bracket their age", es: "Datar rocas volcánicas arriba y abajo de capas fósiles para delimitar su edad", de: "Datierung vulkanischer Gesteine über und unter Fossilschichten zur Altersabgrenzung", nl: "Datering van vulkanische gesteenten boven en onder fossiellagen om hun leeftijd af te bakenen" },
          { en: "Direct dating of dinosaur bones using carbon-14", es: "Datación directa de huesos de dinosaurios usando carbono-14", de: "Direkte Datierung von Dinosaurierknochen mit Kohlenstoff-14", nl: "Directe datering van dinosaurusbotten met koolstof-14" },
          { en: "Measuring the radioactivity of fossils themselves", es: "Midiendo la radioactividad de los fósiles mismos", de: "Messung der Radioaktivität der Fossilien selbst", nl: "Meting van de radioactiviteit van de fossielen zelf" },
          { en: "Using X-rays to determine fossil composition", es: "Usando rayos X para determinar composición fósil", de: "Verwendung von Röntgenstrahlen zur Fossilzusammensetzungsbestimmung", nl: "Gebruik van röntgenstralen om fossielsamenstellling te bepalen" }
        ],
        correct: 0,
        explanation: {
          en: "Radiometric dating cannot directly date fossils, but dates volcanic ash layers or lava flows that bracket fossil-bearing sediments, providing maximum and minimum ages.",
          es: "La datación radiométrica no puede datar directamente fósiles, pero data capas de ceniza volcánica o flujos de lava que delimitan sedimentos con fósiles, proporcionando edades máximas y mínimas.",
          de: "Radiometrische Datierung kann Fossilien nicht direkt datieren, aber datiert vulkanische Ascheschichten oder Lavaströme, die fossilführende Sedimente eingrenzen und maximale und minimale Alter liefern.",
          nl: "Radiometrische datering kan fossielen niet direct dateren, maar dateert vulkanische aslagen of lavastromen die fossielvoerende sedimenten omsluiten, wat maximale en minimale leeftijden verschaft."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
