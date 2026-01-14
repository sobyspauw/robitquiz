// Dinosaur Fossils Quiz - Level 4
(function() {
  const level4 = {
    name: {
          "en": "Dinosaur Fossils Level 4",
          "es": "Fosiles de Dinosaurios Nivel 4",
          "de": "Dinosaurier Fossilien Stufe 4",
          "nl": "Dino Fossielen Level 4"
    },
    questions: [
      {
        question: {
                  "en": "What are trace fossils (ichnofossils)?",
                  "es": "¿Qué son los fósiles traza (icnofósiles)?",
                  "de": "Was sind Spurenfossilien (Ichnofossilien)?",
                  "nl": "Wat zijn sporenfossielen (ichnofossielen)?"
        },
        options: [
        {
                  "en": "Microscopic fossil fragments",
                  "es": "Fragmentos fósiles microscópicos",
                  "de": "Mikroskopische Fossil-Fragmente",
                  "nl": "Microscopische fossiel-fragmenten"
        },
        {
                  "en": "Only preserved bones and teeth",
                  "es": "Solo huesos y dientes preservados",
                  "de": "Nur erhaltene Knochen und Zähne",
                  "nl": "Alleen bewaarde botten en tanden"
        },
        {
                  "en": "Chemical traces in rocks",
                  "es": "Trazas químicas en las rocas",
                  "de": "Chemische Spuren in Gestein",
                  "nl": "Chemische sporen in gesteente"
        },
        {
                  "en": "Evidence of organism activity without body parts",
                  "es": "Evidencia de actividad del organismo sin partes del cuerpo",
                  "de": "Nachweis von Organismus-Aktivität ohne Körperteile",
                  "nl": "Bewijs van organisme-activiteit zonder lichaamsdelen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Trace fossils preserve evidence of ancient life activities like footprints, burrows, nests, and bite marks, rather than actual body parts.",
                  "es": "Los fósiles traza preservan evidencia de actividades de vida antigua como huellas, madrigueras, nidos y marcas de mordeduras, en lugar de partes corporales reales.",
                  "de": "Spurenfossilien bewahren Beweise für Aktivitäten des alten Lebens wie Fußspuren, Bauten, Nester und Bissspuren, anstatt tatsächliche Körperteile.",
                  "nl": "Sporenfossielen bewaren bewijs van oude levensactiviteiten zoals voetstappen, holen, nesten en bijtwonden, in plaats van werkelijke lichaamsdelen."
        }
      },
      {
        question: {
                  "en": "What is the difference between body fossils and molecular fossils?",
                  "es": "¿Cuál es la diferencia entre fósiles corporales y fósiles moleculares?",
                  "de": "Was ist der Unterschied zwischen Körperfossilien und Molekularfossilien?",
                  "nl": "Wat is het verschil tussen lichaamsfossielen en moleculaire fossielen?"
        },
        options: [
        {
                  "en": "They are the same thing",
                  "es": "Son la misma cosa",
                  "de": "Sie sind dasselbe",
                  "nl": "Ze zijn hetzelfde"
        },
        {
                  "en": "Body fossils are physical remains, molecular fossils are chemical signatures",
                  "es": "Los fósiles corporales son restos físicos, los fósiles moleculares son firmas químicas",
                  "de": "Körperfossilien sind physische Überreste, Molekularfossilien sind chemische Signaturen",
                  "nl": "Lichaamsfossielen zijn fysieke resten, moleculaire fossielen zijn chemische signaturen"
        },
        {
                  "en": "Molecular fossils only exist in laboratories",
                  "es": "Los fósiles moleculares solo existen en laboratorios",
                  "de": "Molekularfossilien existieren nur in Labors",
                  "nl": "Moleculaire fossielen bestaan alleen in laboratoria"
        },
        {
                  "en": "Body fossils are smaller than molecular fossils",
                  "es": "Los fósiles corporales son más pequeños que los fósiles moleculares",
                  "de": "Körperfossilien sind kleiner als Molekularfossilien",
                  "nl": "Lichaamsfossielen zijn kleiner dan moleculaire fossielen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Body fossils preserve actual physical parts like bones and shells, while molecular fossils (biomarkers) are organic chemical compounds that indicate past life.",
                  "es": "Los fósiles corporales preservan partes físicas reales como huesos y conchas, mientras que los fósiles moleculares (biomarcadores) son compuestos químicos orgánicos que indican vida pasada.",
                  "de": "Körperfossilien bewahren tatsächliche physische Teile wie Knochen und Schalen, während Molekularfossilien (Biomarker) organische chemische Verbindungen sind, die auf vergangenes Leben hinweisen.",
                  "nl": "Lichaamsfossielen bewaren werkelijke fysieke delen zoals botten en schelpen, terwijl moleculaire fossielen (biomarkers) organische chemische verbindingen zijn die wijzen op verleden leven."
        }
      },
      {
        question: {
                  "en": "What type of fossil preservation is petrification?",
                  "es": "¿Qué tipo de preservación de fósil es la petrificación?",
                  "de": "Welche Art der Fossilerhaltung ist Versteinerung?",
                  "nl": "Welk type fossielpreservatie is versteining?"
        },
        options: [
        {
                  "en": "Mummification in dry conditions",
                  "es": "Momificación en condiciones secas",
                  "de": "Mumifizierung unter trockenen Bedingungen",
                  "nl": "Mummificatie onder droge omstandigheden"
        },
        {
                  "en": "Preservation in amber",
                  "es": "Preservación en ámbar",
                  "de": "Erhaltung in Bernstein",
                  "nl": "Preservatie in barnsteen"
        },
        {
                  "en": "Permineralization with complete replacement",
                  "es": "Permineralización con reemplazo completo",
                  "de": "Permineralisation mit vollständigem Ersatz",
                  "nl": "Permineralisatie met volledige vervanging"
        },
        {
                  "en": "Freezing in ice",
                  "es": "Congelación en hielo",
                  "de": "Einfrieren in Eis",
                  "nl": "Bevriezen in ijs"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Petrification occurs when organic matter is completely replaced by minerals, typically silica, creating stone-like fossils that preserve detailed structure.",
                  "es": "La petrificación ocurre cuando la materia orgánica es completamente reemplazada por minerales, típicamente sílice, creando fósiles parecidos a piedras que preservan estructura detallada.",
                  "de": "Versteinerung tritt auf, wenn organische Materie vollständig durch Mineralien, typischerweise Kieselsäure, ersetzt wird und steinähnliche Fossilien entstehen, die detaillierte Strukturen bewahren.",
                  "nl": "Versteining treedt op wanneer organisch materiaal volledig wordt vervangen door mineralen, typisch silica, waardoor steenachtige fossielen ontstaan die gedetailleerde structuur bewaren."
        }
      },
      {
        question: {
                  "en": "What are index fossils (guide fossils)?",
                  "es": "¿Qué son los fósiles índice (fósiles guía)?",
                  "de": "Was sind Leitfossilien?",
                  "nl": "Wat zijn indexfossielen (gidsfossielen)?"
        },
        options: [
        {
                  "en": "Fossils found only in museums",
                  "es": "Fósiles encontrados solo en museos",
                  "de": "Nur in Museen gefundene Fossilien",
                  "nl": "Fossielen die alleen in musea gevonden worden"
        },
        {
                  "en": "The largest fossils ever found",
                  "es": "Los fósiles más grandes jamás encontrados",
                  "de": "Die größten jemals gefundenen Fossilien",
                  "nl": "De grootste fossielen ooit gevonden"
        },
        {
                  "en": "The first fossil discovered",
                  "es": "El primer fósil descubierto",
                  "de": "Das erste entdeckte Fossil",
                  "nl": "Het eerste ontdekte fossiel"
        },
        {
                  "en": "Fossils used to date and correlate rock layers",
                  "es": "Fósiles usados para datar y correlacionar capas de roca",
                  "de": "Fossilien, die zur Datierung und Korrelation von Gesteinsschichten verwendet werden",
                  "nl": "Fossielen gebruikt om gesteentelagen te dateren en correleren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Index fossils are species that lived for short time periods but were geographically widespread, making them useful for dating and correlating rock formations.",
                  "es": "Los fósiles índice son especies que vivieron por períodos cortos pero fueron geográficamente extensas, haciéndolos útiles para datar y correlacionar formaciones rocosas.",
                  "de": "Leitfossilien sind Arten, die kurze Zeiträume lebten, aber geografisch weit verbreitet waren, was sie nützlich für die Datierung und Korrelation von Gesteinsformationen macht.",
                  "nl": "Indexfossielen zijn soorten die korte tijdsperioden leefden maar geografisch wijdverspreid waren, waardoor ze nuttig zijn voor het dateren en correleren van gesteenteformaties."
        }
      },
      {
        question: {
                  "en": "What is a pseudofossil?",
                  "es": "¿Qué es un pseudofósil?",
                  "de": "Was ist ein Pseudofossil?",
                  "nl": "Wat is een pseudofossiel?"
        },
        options: [
        {
                  "en": "A fake fossil made by humans",
                  "es": "Un fósil falso hecho por humanos",
                  "de": "Ein gefälschtes, von Menschen gemachtes Fossil",
                  "nl": "Een nep-fossiel gemaakt door mensen"
        },
        {
                  "en": "A very old fossil",
                  "es": "Un fósil muy antiguo",
                  "de": "Ein sehr altes Fossil",
                  "nl": "Een zeer oud fossiel"
        },
        {
                  "en": "A fossil of an unknown species",
                  "es": "Un fósil de una especie desconocida",
                  "de": "Ein Fossil einer unbekannten Art",
                  "nl": "Een fossiel van een onbekende soort"
        },
        {
                  "en": "A rock formation that looks like a fossil but isn't biological",
                  "es": "Una formación rocosa que parece un fósil pero no es biológica",
                  "de": "Eine Gesteinsformation, die wie ein Fossil aussieht, aber nicht biologisch ist",
                  "nl": "Een gesteenteformatie die eruitziet als een fossiel maar niet biologisch is"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Pseudofossils are mineral formations or rock patterns that resemble fossils but formed through geological processes rather than biological ones.",
                  "es": "Los pseudofósiles son formaciones minerales o patrones de roca que se asemejan a fósiles pero se formaron a través de procesos geológicos en lugar de biológicos.",
                  "de": "Pseudofossilien sind Mineralformationen oder Gesteinsmuster, die Fossilien ähneln, aber durch geologische Prozesse anstatt biologische entstanden sind.",
                  "nl": "Pseudofossielen zijn mineraalformaties of gesteentepatronen die op fossielen lijken maar ontstaan zijn door geologische processen in plaats van biologische."
        }
      },
      {
        question: {
                  "en": "What are living fossils?",
                  "es": "¿Qué son los fósiles vivientes?",
                  "de": "Was sind lebende Fossilien?",
                  "nl": "Wat zijn levende fossielen?"
        },
        options: [
        {
                  "en": "Recently discovered fossils",
                  "es": "Fósiles recientemente descubiertos",
                  "de": "Kürzlich entdeckte Fossilien",
                  "nl": "Recent ontdekte fossielen"
        },
        {
                  "en": "Fossils found in living trees",
                  "es": "Fósiles encontrados en árboles vivos",
                  "de": "In lebenden Bäumen gefundene Fossilien",
                  "nl": "Fossielen gevonden in levende bomen"
        },
        {
                  "en": "Fossils that are still growing",
                  "es": "Fósiles que todavía están creciendo",
                  "de": "Fossilien, die noch wachsen",
                  "nl": "Fossielen die nog groeien"
        },
        {
                  "en": "Modern organisms that closely resemble their ancient ancestors",
                  "es": "Organismos modernos que se parecen mucho a sus ancestros antiguos",
                  "de": "Moderne Organismen, die ihren alten Vorfahren stark ähneln",
                  "nl": "Moderne organismen die sterk lijken op hun oude voorouders"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Living fossils are modern species that have changed very little from their ancient forms, like coelacanths, horseshoe crabs, and ginkgo trees.",
                  "es": "Los fósiles vivientes son especies modernas que han cambiado muy poco de sus formas antiguas, como los celacantos, cangrejos herradura y árboles ginkgo.",
                  "de": "Lebende Fossilien sind moderne Arten, die sich sehr wenig von ihren alten Formen verändert haben, wie Quastenflosser, Pfeilschwanzkrebse und Ginkgo-Bäume.",
                  "nl": "Levende fossielen zijn moderne soorten die heel weinig zijn veranderd ten opzichte van hun oude vormen, zoals coelacanten, degenkrabben en ginkgo-bomen."
        }
      },
      {
        question: {
                  "en": "What is the difference between original remains and altered remains in fossils?",
                  "es": "¿Cuál es la diferencia entre restos originales y restos alterados en los fósiles?",
                  "de": "Was ist der Unterschied zwischen ursprünglichen und veränderten Überresten in Fossilien?",
                  "nl": "Wat is het verschil tussen oorspronkelijke resten en veranderde resten in fossielen?"
        },
        options: [
        {
                  "en": "Original remains keep some organic material, altered remains are completely mineralized",
                  "es": "Los restos originales mantienen algo de material orgánico, los restos alterados están completamente mineralizados",
                  "de": "Ursprüngliche Überreste behalten organisches Material, veränderte Überreste sind völlig mineralisiert",
                  "nl": "Oorspronkelijke resten behouden organisch materiaal, veranderde resten zijn volledig gemineraliseerd"
        },
        {
                  "en": "Original remains are always older",
                  "es": "Los restos originales son siempre más antiguos",
                  "de": "Ursprüngliche Überreste sind immer älter",
                  "nl": "Oorspronkelijke resten zijn altijd ouder"
        },
        {
                  "en": "There is no difference",
                  "es": "No hay diferencia",
                  "de": "Es gibt keinen Unterschied",
                  "nl": "Er is geen verschil"
        },
        {
                  "en": "Altered remains are always fake",
                  "es": "Los restos alterados son siempre falsos",
                  "de": "Veränderte Überreste sind immer gefälscht",
                  "nl": "Veranderde resten zijn altijd nep"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Original remains preserve some original organic material like chitin or collagen, while altered remains have had all organic material replaced by minerals.",
                  "es": "Los restos originales preservan algo de material orgánico original como quitina o colágeno, mientras que los restos alterados han tenido todo el material orgánico reemplazado por minerales.",
                  "de": "Ursprüngliche Überreste bewahren organisches Originalmaterial wie Chitin oder Kollagen, während veränderte Überreste alles organische Material durch Mineralien ersetzt haben.",
                  "nl": "Oorspronkelijke resten bewaren wat oorspronkelijk organisch materiaal zoals chitine of collageen, terwijl veranderde resten al het organische materiaal vervangen hebben door mineralen."
        }
      },
      {
        question: {
                  "en": "What are Lagerstätten in paleontology?",
                  "es": "¿Qué son los Lagerstätten en paleontología?",
                  "de": "Was sind Lagerstätten in der Paläontologie?",
                  "nl": "Wat zijn Lagerstätten in de paleontologie?"
        },
        options: [
        {
                  "en": "Fossil deposits with exceptional preservation quality",
                  "es": "Depósitos fósiles con calidad de preservación excepcional",
                  "de": "Fossil-Lagerstätten mit außergewöhnlicher Erhaltungsqualität",
                  "nl": "Fossielafzettingen met uitzonderlijke preservatiekwaliteit"
        },
        {
                  "en": "Museums with fossil collections",
                  "es": "Museos con colecciones de fósiles",
                  "de": "Museen mit Fossilsammlungen",
                  "nl": "Musea met fossielcollecties"
        },
        {
                  "en": "Fossil hunting tools",
                  "es": "Herramientas de búsqueda de fósiles",
                  "de": "Fossilsuch-Werkzeuge",
                  "nl": "Fossielzoek-gereedschap"
        },
        {
                  "en": "Large dinosaur bones",
                  "es": "Huesos grandes de dinosaurios",
                  "de": "Große Dinosaurier-Knochen",
                  "nl": "Grote dinosaurusbotten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Lagerstätten are rare fossil-bearing rock formations that preserve organisms in exceptional detail, often including soft tissues and complete ecosystems.",
                  "es": "Los Lagerstätten son formaciones rocosas fosilíferas raras que preservan organismos en detalle excepcional, a menudo incluyendo tejidos blandos y ecosistemas completos.",
                  "de": "Lagerstätten sind seltene fossilführende Gesteinsformationen, die Organismen in außergewöhnlichem Detail bewahren, oft einschließlich Weichgewebe und vollständiger Ökosysteme.",
                  "nl": "Lagerstätten zijn zeldzame fossielvoerende gesteenteformaties die organismen bewaren in uitzonderlijk detail, vaak inclusief zachte weefsels en complete ecosystemen."
        }
      },
      {
        question: {
                  "en": "What is taphofacies analysis?",
                  "es": "¿Qué es el análisis de tafofacies?",
                  "de": "Was ist Taphofazies-Analyse?",
                  "nl": "Wat is tafofacies-analyse?"
        },
        options: [
        {
                  "en": "Classification of fossil sizes",
                  "es": "Clasificación de tamaños de fósiles",
                  "de": "Klassifizierung von Fossilgrößen",
                  "nl": "Classificatie van fossielgroottes"
        },
        {
                  "en": "Study of preservation patterns to understand depositional environments",
                  "es": "Estudio de patrones de preservación para entender ambientes deposicionales",
                  "de": "Studie von Erhaltungsmustern zum Verständnis von Ablagerungsumgebungen",
                  "nl": "Studie van preservatiepatronen om afzettingsomgevingen te begrijpen"
        },
        {
                  "en": "Counting fossil fragments",
                  "es": "Conteo de fragmentos fósiles",
                  "de": "Zählung von Fossil-Fragmenten",
                  "nl": "Tellen van fossiel-fragmenten"
        },
        {
                  "en": "Measuring fossil colors",
                  "es": "Medición de colores de fósiles",
                  "de": "Messung von Fossilfarben",
                  "nl": "Meting van fossielkleuren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Taphofacies analysis studies the patterns of fossil preservation to reconstruct ancient environmental conditions and depositional processes.",
                  "es": "El análisis de tafofacies estudia los patrones de preservación de fósiles para reconstruir condiciones ambientales antiguas y procesos deposicionales.",
                  "de": "Taphofazies-Analyse untersucht die Muster der Fossilerhaltung, um alte Umweltbedingungen und Ablagerungsprozesse zu rekonstruieren.",
                  "nl": "Tafofacies-analyse bestudeert de patronen van fossielpreservatie om oude omgevingsomstandigheden en afzettingsprocessen te reconstrueren."
        }
      },
      {
        question: {
                  "en": "What are microfossils?",
                  "es": "¿Qué son los microfósiles?",
                  "de": "Was sind Mikrofossilien?",
                  "nl": "Wat zijn microfossielen?"
        },
        options: [
        {
                  "en": "Fossils found in microscopes",
                  "es": "Fósiles encontrados en microscopios",
                  "de": "In Mikroskopen gefundene Fossilien",
                  "nl": "Fossielen gevonden in microscopen"
        },
        {
                  "en": "Very small dinosaurs",
                  "es": "Dinosaurios muy pequeños",
                  "de": "Sehr kleine Dinosaurier",
                  "nl": "Zeer kleine dinosaurussen"
        },
        {
                  "en": "Fossils requiring microscopic examination to study",
                  "es": "Fósiles que requieren examen microscópico para estudiar",
                  "de": "Fossilien, die mikroskopische Untersuchung zum Studium erfordern",
                  "nl": "Fossielen die microscopisch onderzoek vereisen om te bestuderen"
        },
        {
                  "en": "Broken pieces of large fossils",
                  "es": "Pedazos rotos de fósiles grandes",
                  "de": "Zerbrochene Stücke großer Fossilien",
                  "nl": "Gebroken stukken van grote fossielen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Microfossils are fossils so small they require microscopic magnification to study, including foraminifera, diatoms, pollen, and spores.",
                  "es": "Los microfósiles son fósiles tan pequeños que requieren magnificación microscópica para estudiar, incluyendo foraminíferos, diatomeas, polen y esporas.",
                  "de": "Mikrofossilien sind Fossilien, die so klein sind, dass sie mikroskopische Vergrößerung zum Studium erfordern, einschließlich Foraminiferen, Diatomeen, Pollen und Sporen.",
                  "nl": "Microfossielen zijn fossielen die zo klein zijn dat ze microscopische vergroting vereisen om te bestuderen, inclusief foraminiferen, diatomeeën, pollen en sporen."
        }
      },
      {
        question: {
                  "en": "What is the difference between compression and impression fossils?",
                  "es": "¿Cuál es la diferencia entre fósiles de compresión e impresión?",
                  "de": "Was ist der Unterschied zwischen Kompressions- und Abdruckfossilien?",
                  "nl": "Wat is het verschil tussen compressie- en afdrukfossielen?"
        },
        options: [
        {
                  "en": "Compression fossils retain organic matter, impression fossils are just outlines",
                  "es": "Los fósiles de compresión retienen materia orgánica, los fósiles de impresión son solo contornos",
                  "de": "Kompressionsfossilien behalten organische Materie, Abdruckfossilien sind nur Umrisse",
                  "nl": "Compressiefossielen behouden organisch materiaal, afdrukfossielen zijn alleen omtrekken"
        },
        {
                  "en": "Impression fossils are always older",
                  "es": "Los fósiles de impresión son siempre más antiguos",
                  "de": "Abdruckfossilien sind immer älter",
                  "nl": "Afdrukfossielen zijn altijd ouder"
        },
        {
                  "en": "Compression fossils are always larger",
                  "es": "Los fósiles de compresión son siempre más grandes",
                  "de": "Kompressionsfossilien sind immer größer",
                  "nl": "Compressiefossielen zijn altijd groter"
        },
        {
                  "en": "They are the same thing",
                  "es": "Son la misma cosa",
                  "de": "Sie sind dasselbe",
                  "nl": "Ze zijn hetzelfde"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Compression fossils preserve flattened organic remains with some original material, while impression fossils show only the surface features or outlines.",
                  "es": "Los fósiles de compresión preservan restos orgánicos aplanados con algo de material original, mientras que los fósiles de impresión muestran solo las características superficiales o contornos.",
                  "de": "Kompressionsfossilien bewahren abgeflachte organische Überreste mit etwas Originalmaterial, während Abdruckfossilien nur Oberflächenmerkmale oder Umrisse zeigen.",
                  "nl": "Compressiefossielen bewaren platgedrukte organische resten met wat oorspronkelijk materiaal, terwijl afdrukfossielen alleen oppervlaktekenmerken of omtrekken tonen."
        }
      },
      {
        question: {
                  "en": "What are subfossils?",
                  "es": "¿Qué son los subfósiles?",
                  "de": "Was sind Subfossilien?",
                  "nl": "Wat zijn subfossielen?"
        },
        options: [
        {
                  "en": "Fossils of unknown age",
                  "es": "Fósiles de edad desconocida",
                  "de": "Fossilien unbekannten Alters",
                  "nl": "Fossielen van onbekende leeftijd"
        },
        {
                  "en": "Fossils found underwater",
                  "es": "Fósiles encontrados bajo el agua",
                  "de": "Unter Wasser gefundene Fossilien",
                  "nl": "Fossielen gevonden onder water"
        },
        {
                  "en": "Remains that are fossilized but geologically recent",
                  "es": "Restos que están fosilizados pero geológicamente recientes",
                  "de": "Überreste, die fossiliert, aber geologisch jung sind",
                  "nl": "Resten die gefossiliseerd maar geologisch recent zijn"
        },
        {
                  "en": "Very small fossil fragments",
                  "es": "Fragmentos fósiles muy pequeños",
                  "de": "Sehr kleine Fossil-Fragmente",
                  "nl": "Zeer kleine fossiel-fragmenten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Subfossils are remains that are partially fossilized or are geologically recent (typically less than 10,000 years old), retaining more original organic material.",
                  "es": "Los subfósiles son restos que están parcialmente fosilizados o son geológicamente recientes (típicamente menos de 10,000 años), reteniendo más material orgánico original.",
                  "de": "Subfossilien sind Überreste, die teilweise fossiliert oder geologisch jung sind (typischerweise weniger als 10.000 Jahre alt) und mehr organisches Originalmaterial behalten.",
                  "nl": "Subfossielen zijn resten die gedeeltelijk gefossiliseerd of geologisch recent zijn (typisch minder dan 10.000 jaar oud), waarbij meer oorspronkelijk organisch materiaal behouden blijft."
        }
      },
      {
        question: {
                  "en": "What is the concept of fossil assemblages?",
                  "es": "¿Qué es el concepto de conjuntos fósiles?",
                  "de": "Was ist das Konzept der Fossilvergesellschaftungen?",
                  "nl": "Wat is het concept van fossielassemblages?"
        },
        options: [
        {
                  "en": "Individual fossils arranged by scientists",
                  "es": "Fósiles individuales organizados por científicos",
                  "de": "Einzelne Fossilien, die von Wissenschaftlern angeordnet werden",
                  "nl": "Individuele fossielen gerangschikt door wetenschappers"
        },
        {
                  "en": "Groups of fossils found together that represent ancient communities",
                  "es": "Grupos de fósiles encontrados juntos que representan comunidades antiguas",
                  "de": "Gruppen von Fossilien, die zusammen gefunden werden und alte Gemeinschaften repräsentieren",
                  "nl": "Groepen fossielen die samen gevonden worden en oude gemeenschappen vertegenwoordigen"
        },
        {
                  "en": "Fossils from different time periods",
                  "es": "Fósiles de diferentes períodos de tiempo",
                  "de": "Fossilien aus verschiedenen Zeitperioden",
                  "nl": "Fossielen uit verschillende tijdperioden"
        },
        {
                  "en": "Only the largest fossils in a collection",
                  "es": "Solo los fósiles más grandes en una colección",
                  "de": "Nur die größten Fossilien in einer Sammlung",
                  "nl": "Alleen de grootste fossielen in een collectie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Fossil assemblages are collections of fossils found together that help scientists understand ancient ecosystems, food webs, and environmental conditions.",
                  "es": "Los conjuntos fósiles son colecciones de fósiles encontrados juntos que ayudan a los científicos a entender ecosistemas antiguos, redes alimentarias y condiciones ambientales.",
                  "de": "Fossilvergesellschaftungen sind Sammlungen von zusammen gefundenen Fossilien, die Wissenschaftlern helfen, alte Ökosysteme, Nahrungsnetze und Umweltbedingungen zu verstehen.",
                  "nl": "Fossielassemblages zijn collecties van samen gevonden fossielen die wetenschappers helpen oude ecosystemen, voedselketens en omgevingsomstandigheden te begrijpen."
        }
      },
      {
        question: {
                  "en": "What are chemofossils (chemical fossils)?",
                  "es": "¿Qué son los quimiofósiles (fósiles químicos)?",
                  "de": "Was sind Chemofossilien (chemische Fossilien)?",
                  "nl": "Wat zijn chemofossielen (chemische fossielen)?"
        },
        options: [
        {
                  "en": "Artificially created fossils",
                  "es": "Fósiles creados artificialmente",
                  "de": "Künstlich geschaffene Fossilien",
                  "nl": "Kunstmatig gemaakte fossielen"
        },
        {
                  "en": "Organic molecules preserved in rocks as evidence of past life",
                  "es": "Moléculas orgánicas preservadas en rocas como evidencia de vida pasada",
                  "de": "Organische Moleküle, die in Gestein als Beweis für vergangenes Leben erhalten sind",
                  "nl": "Organische moleculen bewaard in gesteente als bewijs van verleden leven"
        },
        {
                  "en": "Fossils that glow under UV light",
                  "es": "Fósiles que brillan bajo luz UV",
                  "de": "Fossilien, die unter UV-Licht leuchten",
                  "nl": "Fossielen die gloeien onder UV-licht"
        },
        {
                  "en": "Fossils treated with chemicals",
                  "es": "Fósiles tratados con químicos",
                  "de": "Mit Chemikalien behandelte Fossilien",
                  "nl": "Fossielen behandeld met chemicaliën"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Chemofossils are organic chemical compounds like sterols and hydrocarbons that persist in rocks and provide biochemical evidence of ancient life.",
                  "es": "Los quimiofósiles son compuestos químicos orgánicos como esteroles e hidrocarburos que persisten en las rocas y proporcionan evidencia bioquímica de vida antigua.",
                  "de": "Chemofossilien sind organische chemische Verbindungen wie Sterole und Kohlenwasserstoffe, die in Gestein bestehen und biochemischen Beweis für altes Leben liefern.",
                  "nl": "Chemofossielen zijn organische chemische verbindingen zoals sterolen en koolwaterstoffen die in gesteente blijven bestaan en biochemisch bewijs leveren van oud leven."
        }
      },
      {
        question: {
                  "en": "What is the difference between steinkerns and external molds?",
                  "es": "¿Cuál es la diferencia entre steinkerns y moldes externos?",
                  "de": "Was ist der Unterschied zwischen Steinkernen und äußeren Abformen?",
                  "nl": "Wat is het verschil tussen steinkerns en externe afdrukken?"
        },
        options: [
        {
                  "en": "They are identical",
                  "es": "Son idénticos",
                  "de": "Sie sind identisch",
                  "nl": "Ze zijn identiek"
        },
        {
                  "en": "External molds are always older",
                  "es": "Los moldes externos son siempre más antiguos",
                  "de": "Äußere Abformen sind immer älter",
                  "nl": "Externe afdrukken zijn altijd ouder"
        },
        {
                  "en": "Steinkerns preserve internal structures, external molds preserve outer surfaces",
                  "es": "Los steinkerns preservan estructuras internas, los moldes externos preservan superficies externas",
                  "de": "Steinkerne bewahren innere Strukturen, äußere Abformen bewahren äußere Oberflächen",
                  "nl": "Steinkerns bewaren interne structuren, externe afdrukken bewaren buitenoppervlakken"
        },
        {
                  "en": "Steinkerns are always larger",
                  "es": "Los steinkerns son siempre más grandes",
                  "de": "Steinkerne sind immer größer",
                  "nl": "Steinkerns zijn altijd groter"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Steinkerns (internal molds) form when sediment fills a hollow structure, preserving internal features, while external molds preserve the outer surface details.",
                  "es": "Los steinkerns (moldes internos) se forman cuando el sedimento llena una estructura hueca, preservando características internas, mientras que los moldes externos preservan los detalles de la superficie exterior.",
                  "de": "Steinkerne (innere Abformen) entstehen, wenn Sediment eine hohle Struktur füllt und innere Merkmale bewahrt, während äußere Abformen die äußeren Oberflächendetails bewahren.",
                  "nl": "Steinkerns (interne afdrukken) vormen wanneer sediment een holle structuur vult en interne kenmerken bewaart, terwijl externe afdrukken de buitenste oppervlaktedetails bewaren."
        }
      },
      {
        question: {
                  "en": "What is taphonomic bias in the fossil record?",
                  "es": "¿Qué es el sesgo tafonómico en el registro fósil?",
                  "de": "Was ist taphonomische Verzerrung im Fossilbeleg?",
                  "nl": "Wat is tafonomische bias in het fossielenbestand?"
        },
        options: [
        {
                  "en": "Scientific prejudice against certain fossils",
                  "es": "Prejuicio científico contra ciertos fósiles",
                  "de": "Wissenschaftliche Voreingenommenheit gegen bestimmte Fossilien",
                  "nl": "Wetenschappelijke vooringenomenheid tegen bepaalde fossielen"
        },
        {
                  "en": "Unequal preservation of different organisms and environments",
                  "es": "Preservación desigual de diferentes organismos y ambientes",
                  "de": "Ungleiche Erhaltung verschiedener Organismen und Umgebungen",
                  "nl": "Ongelijke preservatie van verschillende organismen en omgevingen"
        },
        {
                  "en": "Political influence on fossil interpretation",
                  "es": "Influencia política en la interpretación de fósiles",
                  "de": "Politischer Einfluss auf Fossil-Interpretation",
                  "nl": "Politieke invloed op fossielinterpretatie"
        },
        {
                  "en": "Deliberate hiding of fossils by collectors",
                  "es": "Ocultación deliberada de fósiles por coleccionistas",
                  "de": "Absichtliches Verstecken von Fossilien durch Sammler",
                  "nl": "Opzettelijk verbergen van fossielen door verzamelaars"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Taphonomic bias results from the fact that hard-shelled marine organisms preserve much better than soft-bodied terrestrial organisms, skewing our view of ancient life.",
                  "es": "El sesgo tafonómico resulta del hecho de que los organismos marinos con conchas duras se preservan mucho mejor que los organismos terrestres de cuerpo blando, sesgando nuestra visión de la vida antigua.",
                  "de": "Taphonomische Verzerrung entsteht dadurch, dass hartschalige Meeresorganismen viel besser erhalten bleiben als weichkörperige Landorganismen, was unsere Sicht auf das alte Leben verzerrt.",
                  "nl": "Tafonomische bias ontstaat doordat hardschalige mariene organismen veel beter bewaren dan zachte terrestrische organismen, wat ons beeld van het oude leven vertekent."
        }
      },
      {
        question: {
                  "en": "What are transitional fossils?",
                  "es": "¿Qué son los fósiles transicionales?",
                  "de": "Was sind Übergangsfossilien?",
                  "nl": "Wat zijn overgangsfossielen?"
        },
        options: [
        {
                  "en": "Fossils moved between museums",
                  "es": "Fósiles movidos entre museos",
                  "de": "Zwischen Museen bewegte Fossilien",
                  "nl": "Fossielen verplaatst tussen musea"
        },
        {
                  "en": "Fossils showing intermediate characteristics between major groups",
                  "es": "Fósiles que muestran características intermedias entre grupos principales",
                  "de": "Fossilien, die Zwischenmerkmale zwischen Hauptgruppen zeigen",
                  "nl": "Fossielen die tussenkenmerken tonen tussen hoofdgroepen"
        },
        {
                  "en": "Fossils currently being excavated",
                  "es": "Fósiles actualmente siendo excavados",
                  "de": "Fossilien, die derzeit ausgegraben werden",
                  "nl": "Fossielen die momenteel worden opgegraven"
        },
        {
                  "en": "Fossils changing color over time",
                  "es": "Fósiles cambiando color con el tiempo",
                  "de": "Fossilien, die über die Zeit die Farbe ändern",
                  "nl": "Fossielen die van kleur veranderen over tijd"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Transitional fossils show intermediate features between ancestral and descendant groups, providing evidence for evolutionary relationships and changes over time.",
                  "es": "Los fósiles transicionales muestran características intermedias entre grupos ancestrales y descendientes, proporcionando evidencia para relaciones evolutivas y cambios a través del tiempo.",
                  "de": "Übergangsfossilien zeigen Zwischenmerkmale zwischen Vorfahren- und Nachfahrengruppen und liefern Beweise für evolutionäre Beziehungen und Veränderungen über die Zeit.",
                  "nl": "Overgangsfossielen tonen tussenkenmerken tussen voorouder- en nakomelingengroepen, wat bewijs levert voor evolutionaire relaties en veranderingen door de tijd."
        }
      },
      {
        question: {
                  "en": "What is biostratigraphy based on?",
                  "es": "¿En qué se basa la bioestratigrafía?",
                  "de": "Worauf basiert Biostratigraphie?",
                  "nl": "Waarop is biostratigrafie gebaseerd?"
        },
        options: [
        {
                  "en": "The evolutionary succession of fossil species through time",
                  "es": "La sucesión evolutiva de especies fósiles a través del tiempo",
                  "de": "Die evolutionäre Abfolge fossiler Arten durch die Zeit",
                  "nl": "De evolutionaire opvolging van fossielsoorten door de tijd"
        },
        {
                  "en": "The size of fossils only",
                  "es": "Solo el tamaño de los fósiles",
                  "de": "Nur die Größe der Fossilien",
                  "nl": "Alleen de grootte van fossielen"
        },
        {
                  "en": "The weight of fossil specimens",
                  "es": "El peso de especímenes fósiles",
                  "de": "Das Gewicht fossiler Exemplare",
                  "nl": "Het gewicht van fossielspecimens"
        },
        {
                  "en": "The color of fossil-bearing rocks",
                  "es": "El color de las rocas que contienen fósiles",
                  "de": "Die Farbe fossilführender Gesteine",
                  "nl": "De kleur van fossielvoerende gesteenten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Biostratigraphy uses the known evolutionary history and time ranges of fossil species to date rock layers and correlate geological formations.",
                  "es": "La bioestratigrafía usa la historia evolutiva conocida y los rangos de tiempo de especies fósiles para datar capas de roca y correlacionar formaciones geológicas.",
                  "de": "Biostratigraphie verwendet die bekannte Evolutionsgeschichte und Zeiträume fossiler Arten, um Gesteinsschichten zu datieren und geologische Formationen zu korrelieren.",
                  "nl": "Biostratigrafie gebruikt de bekende evolutionaire geschiedenis en tijdsbereiken van fossielsoorten om gesteentelagen te dateren en geologische formaties te correleren."
        }
      },
      {
        question: {
                  "en": "What are assemblage zones in biostratigraphy?",
                  "es": "¿Qué son las zonas de conjunto en bioestratigrafía?",
                  "de": "Was sind Vergesellschaftungszonen in der Biostratigraphie?",
                  "nl": "Wat zijn assemblage-zones in biostratigrafie?"
        },
        options: [
        {
                  "en": "Rock units characterized by distinctive fossil assemblages",
                  "es": "Unidades rocosas caracterizadas por conjuntos fósiles distintivos",
                  "de": "Gesteinseinheiten, die durch charakteristische Fossilvergesellschaftungen gekennzeichnet sind",
                  "nl": "Gesteente-eenheden gekenmerkt door onderscheidende fossielassemblages"
        },
        {
                  "en": "Museums with large fossil collections",
                  "es": "Museos con grandes colecciones de fósiles",
                  "de": "Museen mit großen Fossilsammlungen",
                  "nl": "Musea met grote fossielcollecties"
        },
        {
                  "en": "Areas where fossils are assembled by scientists",
                  "es": "Áreas donde los fósiles son ensamblados por científicos",
                  "de": "Bereiche, wo Fossilien von Wissenschaftlern zusammengefügt werden",
                  "nl": "Gebieden waar fossielen door wetenschappers worden samengesteld"
        },
        {
                  "en": "Geographic regions with similar climates",
                  "es": "Regiones geográficas con climas similares",
                  "de": "Geografische Regionen mit ähnlichen Klimata",
                  "nl": "Geografische regio's met vergelijkbare klimaten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Assemblage zones are stratigraphic units defined by the association of multiple fossil taxa that lived together during specific time intervals.",
                  "es": "Las zonas de conjunto son unidades estratigráficas definidas por la asociación de múltiples taxones fósiles que vivieron juntos durante intervalos de tiempo específicos.",
                  "de": "Vergesellschaftungszonen sind stratigraphische Einheiten, die durch die Assoziation mehrerer fossiler Taxa definiert sind, die während bestimmter Zeitintervalle zusammen lebten.",
                  "nl": "Assemblage-zones zijn stratigrafische eenheden gedefinieerd door de associatie van meerdere fossiele taxa die tijdens specifieke tijdsintervallen samen leefden."
        }
      },
      {
        question: {
                  "en": "What is radiometric dating and how is it used with dinosaur fossils?",
                  "es": "¿Qué es la datación radiométrica y cómo se usa con fósiles de dinosaurios?",
                  "de": "Was ist radiometrische Datierung und wie wird sie bei Dinosaurier-Fossilien verwendet?",
                  "nl": "Wat is radiometrische datering en hoe wordt het gebruikt bij dinosaurusfossielen?"
        },
        options: [
        {
                  "en": "Dating volcanic rocks above and below fossil layers to bracket their age",
                  "es": "Datar rocas volcánicas arriba y abajo de capas fósiles para delimitar su edad",
                  "de": "Datierung vulkanischer Gesteine über und unter Fossilschichten zur Altersabgrenzung",
                  "nl": "Datering van vulkanische gesteenten boven en onder fossiellagen om hun leeftijd af te bakenen"
        },
        {
                  "en": "Measuring the radioactivity of fossils themselves",
                  "es": "Midiendo la radioactividad de los fósiles mismos",
                  "de": "Messung der Radioaktivität der Fossilien selbst",
                  "nl": "Meting van de radioactiviteit van de fossielen zelf"
        },
        {
                  "en": "Direct dating of dinosaur bones using carbon-14",
                  "es": "Datación directa de huesos de dinosaurios usando carbono-14",
                  "de": "Direkte Datierung von Dinosaurierknochen mit Kohlenstoff-14",
                  "nl": "Directe datering van dinosaurusbotten met koolstof-14"
        },
        {
                  "en": "Using X-rays to determine fossil composition",
                  "es": "Usando rayos X para determinar composición fósil",
                  "de": "Verwendung von Röntgenstrahlen zur Fossilzusammensetzungsbestimmung",
                  "nl": "Gebruik van röntgenstralen om fossielsamenstellling te bepalen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Radiometric dating cannot directly date fossils, but dates volcanic ash layers or lava flows that bracket fossil-bearing sediments, providing maximum and minimum ages.",
                  "es": "La datación radiométrica no puede datar directamente fósiles, pero data capas de ceniza volcánica o flujos de lava que delimitan sedimentos con fósiles, proporcionando edades máximas y mínimas.",
                  "de": "Radiometrische Datierung kann Fossilien nicht direkt datieren, aber datiert vulkanische Ascheschichten oder Lavaströme, die fossilführende Sedimente eingrenzen und maximale und minimale Alter liefern.",
                  "nl": "Radiometrische datering kan fossielen niet direct dateren, maar dateert vulkanische aslagen of lavastromen die fossielvoerende sedimenten omsluiten, wat maximale en minimale leeftijden verschaft."
        }
      },
      {
        question: {
                  "en": "What is a fossil?",
                  "es": "What is a fossil?",
                  "de": "What is a fossil?",
                  "nl": "What is a fossil?"
        },
        options: [
        {
                  "en": "Preserved remains of ancient life",
                  "es": "Preserved remains of ancient life",
                  "de": "Preserved remains of ancient life",
                  "nl": "Preserved remains of ancient life"
        },
        {
                  "en": "Ancient tool",
                  "es": "Ancient tool",
                  "de": "Ancient tool",
                  "nl": "Ancient tool"
        },
        {
                  "en": "Type of rock",
                  "es": "Type of rock",
                  "de": "Type of rock",
                  "nl": "Type of rock"
        },
        {
                  "en": "Dinosaur bone",
                  "es": "Dinosaur bone",
                  "de": "Dinosaur bone",
                  "nl": "Dinosaur bone"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A fossil is any preserved remains, impression, or trace of once-living organisms from a past geological age.",
                  "es": "A fossil is any preserved remains, impression, or trace of once-living organisms from a past geological age.",
                  "de": "A fossil is any preserved remains, impression, or trace of once-living organisms from a past geological age.",
                  "nl": "A fossil is any preserved remains, impression, or trace of once-living organisms from a past geological age."
        }
      },
      {
        question: {
                  "en": "What is fossilization?",
                  "es": "What is fossilization?",
                  "de": "What is fossilization?",
                  "nl": "What is fossilization?"
        },
        options: [
        {
                  "en": "Finding fossils",
                  "es": "Finding fossils",
                  "de": "Finding fossils",
                  "nl": "Finding fossils"
        },
        {
                  "en": "Breaking fossils",
                  "es": "Breaking fossils",
                  "de": "Breaking fossils",
                  "nl": "Breaking fossils"
        },
        {
                  "en": "Studying fossils",
                  "es": "Studying fossils",
                  "de": "Studying fossils",
                  "nl": "Studying fossils"
        },
        {
                  "en": "Process of remains becoming fossils",
                  "es": "Process of remains becoming fossils",
                  "de": "Process of remains becoming fossils",
                  "nl": "Process of remains becoming fossils"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Fossilization is the process by which organic remains are preserved in rock over millions of years.",
                  "es": "Fossilization is the process by which organic remains are preserved in rock over millions of years.",
                  "de": "Fossilization is the process by which organic remains are preserved in rock over millions of years.",
                  "nl": "Fossilization is the process by which organic remains are preserved in rock over millions of years."
        }
      },
      {
        question: {
                  "en": "What is the most common way dinosaur fossils form?",
                  "es": "What is the most common way dinosaur fossils form?",
                  "de": "What is the most common way dinosaur fossils form?",
                  "nl": "What is the most common way dinosaur fossils form?"
        },
        options: [
        {
                  "en": "Amber preservation",
                  "es": "Amber preservation",
                  "de": "Amber preservation",
                  "nl": "Amber preservation"
        },
        {
                  "en": "Mummification",
                  "es": "Mummification",
                  "de": "Mummification",
                  "nl": "Mummification"
        },
        {
                  "en": "Permineralization",
                  "es": "Permineralization",
                  "de": "Permineralization",
                  "nl": "Permineralization"
        },
        {
                  "en": "Freezing",
                  "es": "Freezing",
                  "de": "Freezing",
                  "nl": "Freezing"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Permineralization occurs when minerals fill spaces in bones and tissues, turning them to stone over time.",
                  "es": "Permineralization occurs when minerals fill spaces in bones and tissues, turning them to stone over time.",
                  "de": "Permineralization occurs when minerals fill spaces in bones and tissues, turning them to stone over time.",
                  "nl": "Permineralization occurs when minerals fill spaces in bones and tissues, turning them to stone over time."
        }
      },
      {
        question: {
                  "en": "What is a trace fossil?",
                  "es": "What is a trace fossil?",
                  "de": "What is a trace fossil?",
                  "nl": "What is a trace fossil?"
        },
        options: [
        {
                  "en": "Bone fragment",
                  "es": "Bone fragment",
                  "de": "Bone fragment",
                  "nl": "Bone fragment"
        },
        {
                  "en": "Complete skeleton",
                  "es": "Complete skeleton",
                  "de": "Complete skeleton",
                  "nl": "Complete skeleton"
        },
        {
                  "en": "Evidence of activity, not body parts",
                  "es": "Evidence of activity, not body parts",
                  "de": "Evidence of activity, not body parts",
                  "nl": "Evidence of activity, not body parts"
        },
        {
                  "en": "Footprint only",
                  "es": "Footprint only",
                  "de": "Footprint only",
                  "nl": "Footprint only"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Trace fossils preserve evidence of activity like footprints, nests, or burrows rather than body parts.",
                  "es": "Trace fossils preserve evidence of activity like footprints, nests, or burrows rather than body parts.",
                  "de": "Trace fossils preserve evidence of activity like footprints, nests, or burrows rather than body parts.",
                  "nl": "Trace fossils preserve evidence of activity like footprints, nests, or burrows rather than body parts."
        }
      },
      {
        question: {
                  "en": "What are coprolites?",
                  "es": "What are coprolites?",
                  "de": "What are coprolites?",
                  "nl": "What are coprolites?"
        },
        options: [
        {
                  "en": "Fossilized feces",
                  "es": "Fossilized feces",
                  "de": "Fossilized feces",
                  "nl": "Fossilized feces"
        },
        {
                  "en": "Fossilized eggs",
                  "es": "Fossilized eggs",
                  "de": "Fossilized eggs",
                  "nl": "Fossilized eggs"
        },
        {
                  "en": "Fossilized skin",
                  "es": "Fossilized skin",
                  "de": "Fossilized skin",
                  "nl": "Fossilized skin"
        },
        {
                  "en": "Fossilized teeth",
                  "es": "Fossilized teeth",
                  "de": "Fossilized teeth",
                  "nl": "Fossilized teeth"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Coprolites are fossilized feces that provide information about dinosaur diets and digestive systems.",
                  "es": "Coprolites are fossilized feces that provide information about dinosaur diets and digestive systems.",
                  "de": "Coprolites are fossilized feces that provide information about dinosaur diets and digestive systems.",
                  "nl": "Coprolites are fossilized feces that provide information about dinosaur diets and digestive systems."
        }
      },
      {
        question: {
                  "en": "What is the best environment for fossilization?",
                  "es": "What is the best environment for fossilization?",
                  "de": "What is the best environment for fossilization?",
                  "nl": "What is the best environment for fossilization?"
        },
        options: [
        {
                  "en": "Mountain peaks",
                  "es": "Mountain peaks",
                  "de": "Mountain peaks",
                  "nl": "Mountain peaks"
        },
        {
                  "en": "Dry desert",
                  "es": "Dry desert",
                  "de": "Dry desert",
                  "nl": "Dry desert"
        },
        {
                  "en": "Rapid burial in sediment",
                  "es": "Rapid burial in sediment",
                  "de": "Rapid burial in sediment",
                  "nl": "Rapid burial in sediment"
        },
        {
                  "en": "Open plains",
                  "es": "Open plains",
                  "de": "Open plains",
                  "nl": "Open plains"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Rapid burial in sediment (like mud or sand) protects remains from scavengers and decay, ideal for fossilization.",
                  "es": "Rapid burial in sediment (like mud or sand) protects remains from scavengers and decay, ideal for fossilization.",
                  "de": "Rapid burial in sediment (like mud or sand) protects remains from scavengers and decay, ideal for fossilization.",
                  "nl": "Rapid burial in sediment (like mud or sand) protects remains from scavengers and decay, ideal for fossilization."
        }
      },
      {
        question: {
                  "en": "What is a cast fossil?",
                  "es": "What is a cast fossil?",
                  "de": "What is a cast fossil?",
                  "nl": "What is a cast fossil?"
        },
        options: [
        {
                  "en": "Amber-preserved organism",
                  "es": "Amber-preserved organism",
                  "de": "Amber-preserved organism",
                  "nl": "Amber-preserved organism"
        },
        {
                  "en": "Bone turned to stone",
                  "es": "Bone turned to stone",
                  "de": "Bone turned to stone",
                  "nl": "Bone turned to stone"
        },
        {
                  "en": "Fossilized impression",
                  "es": "Fossilized impression",
                  "de": "Fossilized impression",
                  "nl": "Fossilized impression"
        },
        {
                  "en": "Mineral filling of a mold",
                  "es": "Mineral filling of a mold",
                  "de": "Mineral filling of a mold",
                  "nl": "Mineral filling of a mold"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A cast fossil forms when minerals fill a mold (hollow space) left by dissolved organic material.",
                  "es": "A cast fossil forms when minerals fill a mold (hollow space) left by dissolved organic material.",
                  "de": "A cast fossil forms when minerals fill a mold (hollow space) left by dissolved organic material.",
                  "nl": "A cast fossil forms when minerals fill a mold (hollow space) left by dissolved organic material."
        }
      },
      {
        question: {
                  "en": "Who was Mary Anning?",
                  "es": "Who was Mary Anning?",
                  "de": "Who was Mary Anning?",
                  "nl": "Who was Mary Anning?"
        },
        options: [
        {
                  "en": "Museum curator",
                  "es": "Museum curator",
                  "de": "Museum curator",
                  "nl": "Museum curator"
        },
        {
                  "en": "First paleontologist",
                  "es": "First paleontologist",
                  "de": "First paleontologist",
                  "nl": "First paleontologist"
        },
        {
                  "en": "Famous fossil collector from the 1800s",
                  "es": "Famous fossil collector from the 1800s",
                  "de": "Famous fossil collector from the 1800s",
                  "nl": "Famous fossil collector from the 1800s"
        },
        {
                  "en": "Dinosaur namer",
                  "es": "Dinosaur namer",
                  "de": "Dinosaur namer",
                  "nl": "Dinosaur namer"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Mary Anning was a pioneering fossil collector and paleontologist who made significant discoveries in the early 1800s.",
                  "es": "Mary Anning was a pioneering fossil collector and paleontologist who made significant discoveries in the early 1800s.",
                  "de": "Mary Anning was a pioneering fossil collector and paleontologist who made significant discoveries in the early 1800s.",
                  "nl": "Mary Anning was a pioneering fossil collector and paleontologist who made significant discoveries in the early 1800s."
        }
      },
      {
        question: {
                  "en": "What does 'petrified' mean?",
                  "es": "What does 'petrified' mean?",
                  "de": "What does 'petrified' mean?",
                  "nl": "What does 'petrified' mean?"
        },
        options: [
        {
                  "en": "Well preserved",
                  "es": "Well preserved",
                  "de": "Well preserved",
                  "nl": "Well preserved"
        },
        {
                  "en": "Turned to stone",
                  "es": "Turned to stone",
                  "de": "Turned to stone",
                  "nl": "Turned to stone"
        },
        {
                  "en": "Very scared",
                  "es": "Very scared",
                  "de": "Very scared",
                  "nl": "Very scared"
        },
        {
                  "en": "Very old",
                  "es": "Very old",
                  "de": "Very old",
                  "nl": "Very old"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Petrified literally means 'turned to stone' through the fossilization process.",
                  "es": "Petrified literally means 'turned to stone' through the fossilization process.",
                  "de": "Petrified literally means 'turned to stone' through the fossilization process.",
                  "nl": "Petrified literally means 'turned to stone' through the fossilization process."
        }
      },
      {
        question: {
                  "en": "What is taphonomy?",
                  "es": "What is taphonomy?",
                  "de": "What is taphonomy?",
                  "nl": "What is taphonomy?"
        },
        options: [
        {
                  "en": "Study of fossilization process",
                  "es": "Study of fossilization process",
                  "de": "Study of fossilization process",
                  "nl": "Study of fossilization process"
        },
        {
                  "en": "Study of extinction",
                  "es": "Study of extinction",
                  "de": "Study of extinction",
                  "nl": "Study of extinction"
        },
        {
                  "en": "Study of rocks",
                  "es": "Study of rocks",
                  "de": "Study of rocks",
                  "nl": "Study of rocks"
        },
        {
                  "en": "Study of dinosaurs",
                  "es": "Study of dinosaurs",
                  "de": "Study of dinosaurs",
                  "nl": "Study of dinosaurs"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Taphonomy studies the processes that affect organisms from death to discovery as fossils.",
                  "es": "Taphonomy studies the processes that affect organisms from death to discovery as fossils.",
                  "de": "Taphonomy studies the processes that affect organisms from death to discovery as fossils.",
                  "nl": "Taphonomy studies the processes that affect organisms from death to discovery as fossils."
        }
      },
      {
        question: {
                  "en": "What percentage of organisms become fossils?",
                  "es": "What percentage of organisms become fossils?",
                  "de": "What percentage of organisms become fossils?",
                  "nl": "What percentage of organisms become fossils?"
        },
        options: [
        {
                  "en": "Less than 1%",
                  "es": "Less than 1%",
                  "de": "Less than 1%",
                  "nl": "Less than 1%"
        },
        {
                  "en": "About 10%",
                  "es": "About 10%",
                  "de": "About 10%",
                  "nl": "About 10%"
        },
        {
                  "en": "Most organisms",
                  "es": "Most organisms",
                  "de": "Most organisms",
                  "nl": "Most organisms"
        },
        {
                  "en": "About 50%",
                  "es": "About 50%",
                  "de": "About 50%",
                  "nl": "About 50%"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Less than 1% of all organisms that ever lived become fossils - fossilization is extremely rare.",
                  "es": "Less than 1% of all organisms that ever lived become fossils - fossilization is extremely rare.",
                  "de": "Less than 1% of all organisms that ever lived become fossils - fossilization is extremely rare.",
                  "nl": "Less than 1% of all organisms that ever lived become fossils - fossilization is extremely rare."
        }
      },
      {
        question: {
                  "en": "What tool do paleontologists use most in the field?",
                  "es": "What tool do paleontologists use most in the field?",
                  "de": "What tool do paleontologists use most in the field?",
                  "nl": "What tool do paleontologists use most in the field?"
        },
        options: [
        {
                  "en": "Jackhammers",
                  "es": "Jackhammers",
                  "de": "Jackhammers",
                  "nl": "Jackhammers"
        },
        {
                  "en": "Hammers",
                  "es": "Hammers",
                  "de": "Hammers",
                  "nl": "Hammers"
        },
        {
                  "en": "Small picks and brushes",
                  "es": "Small picks and brushes",
                  "de": "Small picks and brushes",
                  "nl": "Small picks and brushes"
        },
        {
                  "en": "Shovels",
                  "es": "Shovels",
                  "de": "Shovels",
                  "nl": "Shovels"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Paleontologists carefully use small picks, brushes, and dental tools to avoid damaging delicate fossils.",
                  "es": "Paleontologists carefully use small picks, brushes, and dental tools to avoid damaging delicate fossils.",
                  "de": "Paleontologists carefully use small picks, brushes, and dental tools to avoid damaging delicate fossils.",
                  "nl": "Paleontologists carefully use small picks, brushes, and dental tools to avoid damaging delicate fossils."
        }
      },
      {
        question: {
                  "en": "What is the oldest dinosaur fossil ever found?",
                  "es": "What is the oldest dinosaur fossil ever found?",
                  "de": "What is the oldest dinosaur fossil ever found?",
                  "nl": "What is the oldest dinosaur fossil ever found?"
        },
        options: [
        {
                  "en": "500 million years old",
                  "es": "500 million years old",
                  "de": "500 million years old",
                  "nl": "500 million years old"
        },
        {
                  "en": "100 million years old",
                  "es": "100 million years old",
                  "de": "100 million years old",
                  "nl": "100 million years old"
        },
        {
                  "en": "300 million years old",
                  "es": "300 million years old",
                  "de": "300 million years old",
                  "nl": "300 million years old"
        },
        {
                  "en": "Approximately 230 million years old",
                  "es": "Approximately 230 million years old",
                  "de": "Approximately 230 million years old",
                  "nl": "Approximately 230 million years old"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The oldest known dinosaur fossils date to approximately 230 million years ago, from the Late Triassic.",
                  "es": "The oldest known dinosaur fossils date to approximately 230 million years ago, from the Late Triassic.",
                  "de": "The oldest known dinosaur fossils date to approximately 230 million years ago, from the Late Triassic.",
                  "nl": "The oldest known dinosaur fossils date to approximately 230 million years ago, from the Late Triassic."
        }
      },
      {
        question: {
                  "en": "What is a fossil matrix?",
                  "es": "What is a fossil matrix?",
                  "de": "What is a fossil matrix?",
                  "nl": "What is a fossil matrix?"
        },
        options: [
        {
                  "en": "Fossil museum display",
                  "es": "Fossil museum display",
                  "de": "Fossil museum display",
                  "nl": "Fossil museum display"
        },
        {
                  "en": "Fossil classification system",
                  "es": "Fossil classification system",
                  "de": "Fossil classification system",
                  "nl": "Fossil classification system"
        },
        {
                  "en": "Rock surrounding a fossil",
                  "es": "Rock surrounding a fossil",
                  "de": "Rock surrounding a fossil",
                  "nl": "Rock surrounding a fossil"
        },
        {
                  "en": "Fossil database",
                  "es": "Fossil database",
                  "de": "Fossil database",
                  "nl": "Fossil database"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The matrix is the rock or sediment surrounding and encasing a fossil.",
                  "es": "The matrix is the rock or sediment surrounding and encasing a fossil.",
                  "de": "The matrix is the rock or sediment surrounding and encasing a fossil.",
                  "nl": "The matrix is the rock or sediment surrounding and encasing a fossil."
        }
      },
      {
        question: {
                  "en": "What is exceptional preservation?",
                  "es": "What is exceptional preservation?",
                  "de": "What is exceptional preservation?",
                  "nl": "What is exceptional preservation?"
        },
        options: [
        {
                  "en": "Perfect bone preservation",
                  "es": "Perfect bone preservation",
                  "de": "Perfect bone preservation",
                  "nl": "Perfect bone preservation"
        },
        {
                  "en": "Large fossil size",
                  "es": "Large fossil size",
                  "de": "Large fossil size",
                  "nl": "Large fossil size"
        },
        {
                  "en": "Complete skeletons",
                  "es": "Complete skeletons",
                  "de": "Complete skeletons",
                  "nl": "Complete skeletons"
        },
        {
                  "en": "Preservation of soft tissues",
                  "es": "Preservation of soft tissues",
                  "de": "Preservation of soft tissues",
                  "nl": "Preservation of soft tissues"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Exceptional preservation occurs when rare conditions allow soft tissues, skin, or feathers to fossilize.",
                  "es": "Exceptional preservation occurs when rare conditions allow soft tissues, skin, or feathers to fossilize.",
                  "de": "Exceptional preservation occurs when rare conditions allow soft tissues, skin, or feathers to fossilize.",
                  "nl": "Exceptional preservation occurs when rare conditions allow soft tissues, skin, or feathers to fossilize."
        }
      },
      {
        question: {
                  "en": "What is the La Brea Tar Pits famous for?",
                  "es": "What is the La Brea Tar Pits famous for?",
                  "de": "What is the La Brea Tar Pits famous for?",
                  "nl": "What is the La Brea Tar Pits famous for?"
        },
        options: [
        {
                  "en": "Dinosaur fossils",
                  "es": "Dinosaur fossils",
                  "de": "Dinosaur fossils",
                  "nl": "Dinosaur fossils"
        },
        {
                  "en": "Preserving Ice Age animals in asphalt",
                  "es": "Preserving Ice Age animals in asphalt",
                  "de": "Preserving Ice Age animals in asphalt",
                  "nl": "Preserving Ice Age animals in asphalt"
        },
        {
                  "en": "Marine fossils",
                  "es": "Marine fossils",
                  "de": "Marine fossils",
                  "nl": "Marine fossils"
        },
        {
                  "en": "Oldest fossils",
                  "es": "Oldest fossils",
                  "de": "Oldest fossils",
                  "nl": "Oldest fossils"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The La Brea Tar Pits in Los Angeles preserved numerous Ice Age animals in natural asphalt seeps.",
                  "es": "The La Brea Tar Pits in Los Angeles preserved numerous Ice Age animals in natural asphalt seeps.",
                  "de": "The La Brea Tar Pits in Los Angeles preserved numerous Ice Age animals in natural asphalt seeps.",
                  "nl": "The La Brea Tar Pits in Los Angeles preserved numerous Ice Age animals in natural asphalt seeps."
        }
      },
      {
        question: {
                  "en": "What is a type specimen?",
                  "es": "What is a type specimen?",
                  "de": "What is a type specimen?",
                  "nl": "What is a type specimen?"
        },
        options: [
        {
                  "en": "Individual fossil defining a species",
                  "es": "Individual fossil defining a species",
                  "de": "Individual fossil defining a species",
                  "nl": "Individual fossil defining a species"
        },
        {
                  "en": "First fossil found",
                  "es": "First fossil found",
                  "de": "First fossil found",
                  "nl": "First fossil found"
        },
        {
                  "en": "Largest fossil",
                  "es": "Largest fossil",
                  "de": "Largest fossil",
                  "nl": "Largest fossil"
        },
        {
                  "en": "Typical fossil example",
                  "es": "Typical fossil example",
                  "de": "Typical fossil example",
                  "nl": "Typical fossil example"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A type specimen is the individual fossil on which the description and name of a new species is based.",
                  "es": "A type specimen is the individual fossil on which the description and name of a new species is based.",
                  "de": "A type specimen is the individual fossil on which the description and name of a new species is based.",
                  "nl": "A type specimen is the individual fossil on which the description and name of a new species is based."
        }
      },
      {
        question: {
                  "en": "What technology helps find fossils without digging?",
                  "es": "What technology helps find fossils without digging?",
                  "de": "What technology helps find fossils without digging?",
                  "nl": "What technology helps find fossils without digging?"
        },
        options: [
        {
                  "en": "X-rays",
                  "es": "X-rays",
                  "de": "X-rays",
                  "nl": "X-rays"
        },
        {
                  "en": "Magnets",
                  "es": "Magnets",
                  "de": "Magnets",
                  "nl": "Magnets"
        },
        {
                  "en": "Ground-penetrating radar",
                  "es": "Ground-penetrating radar",
                  "de": "Ground-penetrating radar",
                  "nl": "Ground-penetrating radar"
        },
        {
                  "en": "Metal detectors",
                  "es": "Metal detectors",
                  "de": "Metal detectors",
                  "nl": "Metal detectors"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Ground-penetrating radar and other remote sensing technologies can detect fossil-bearing layers without excavation.",
                  "es": "Ground-penetrating radar and other remote sensing technologies can detect fossil-bearing layers without excavation.",
                  "de": "Ground-penetrating radar and other remote sensing technologies can detect fossil-bearing layers without excavation.",
                  "nl": "Ground-penetrating radar and other remote sensing technologies can detect fossil-bearing layers without excavation."
        }
      },
      {
        question: {
                  "en": "What is a fossil bed?",
                  "es": "What is a fossil bed?",
                  "de": "What is a fossil bed?",
                  "nl": "What is a fossil bed?"
        },
        options: [
        {
                  "en": "Layer of rock rich in fossils",
                  "es": "Layer of rock rich in fossils",
                  "de": "Layer of rock rich in fossils",
                  "nl": "Layer of rock rich in fossils"
        },
        {
                  "en": "Excavation site",
                  "es": "Excavation site",
                  "de": "Excavation site",
                  "nl": "Excavation site"
        },
        {
                  "en": "Museum display area",
                  "es": "Museum display area",
                  "de": "Museum display area",
                  "nl": "Museum display area"
        },
        {
                  "en": "Fossil storage",
                  "es": "Fossil storage",
                  "de": "Fossil storage",
                  "nl": "Fossil storage"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A fossil bed is a layer or stratum of sedimentary rock especially rich in fossils.",
                  "es": "A fossil bed is a layer or stratum of sedimentary rock especially rich in fossils.",
                  "de": "A fossil bed is a layer or stratum of sedimentary rock especially rich in fossils.",
                  "nl": "A fossil bed is a layer or stratum of sedimentary rock especially rich in fossils."
        }
      },
      {
        question: {
                  "en": "What famous fossil hunter found the first Iguanodon teeth?",
                  "es": "What famous fossil hunter found the first Iguanodon teeth?",
                  "de": "What famous fossil hunter found the first Iguanodon teeth?",
                  "nl": "What famous fossil hunter found the first Iguanodon teeth?"
        },
        options: [
        {
                  "en": "Charles Darwin",
                  "es": "Charles Darwin",
                  "de": "Charles Darwin",
                  "nl": "Charles Darwin"
        },
        {
                  "en": "Richard Owen",
                  "es": "Richard Owen",
                  "de": "Richard Owen",
                  "nl": "Richard Owen"
        },
        {
                  "en": "William Buckland",
                  "es": "William Buckland",
                  "de": "William Buckland",
                  "nl": "William Buckland"
        },
        {
                  "en": "Gideon Mantell (or his wife Mary Ann)",
                  "es": "Gideon Mantell (or his wife Mary Ann)",
                  "de": "Gideon Mantell (or his wife Mary Ann)",
                  "nl": "Gideon Mantell (or his wife Mary Ann)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Gideon Mantell and possibly his wife Mary Ann discovered Iguanodon teeth in 1822, among the first dinosaur fossils recognized.",
                  "es": "Gideon Mantell and possibly his wife Mary Ann discovered Iguanodon teeth in 1822, among the first dinosaur fossils recognized.",
                  "de": "Gideon Mantell and possibly his wife Mary Ann discovered Iguanodon teeth in 1822, among the first dinosaur fossils recognized.",
                  "nl": "Gideon Mantell and possibly his wife Mary Ann discovered Iguanodon teeth in 1822, among the first dinosaur fossils recognized."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  }
})();