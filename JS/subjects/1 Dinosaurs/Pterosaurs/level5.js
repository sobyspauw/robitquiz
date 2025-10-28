// Pterosaurs Quiz - Level 5: Advanced Pterosaur Knowledge
(function() {
  const level5 = {
    name: {
      en: "Pterosaurs Level 5",
      es: "Pterosaurios Nivel 5",
      de: "Pterosaurier Stufe 5",
      nl: "Pterosauriërs Level 5"
    },
    questions: [
      {
        question: {
          en: "Which pterosaur discovery revolutionized our understanding of pterosaur diversity?",
          es: "¿Qué descubrimiento de pterosaurio revolucionó nuestra comprensión de la diversidad de pterosaurios?",
          de: "Welche Pterosaurier-Entdeckung revolutionierte unser Verständnis der Pterosaurier-Vielfalt?",
          nl: "Welke pterosauriër ontdekking revolutioneerde ons begrip van pterosauriër diversiteit?"
        },
        options: [
          { en: "The Solnhofen pterosaurs of Germany", es: "Los pterosaurios de Solnhofen de Alemania", de: "Die Solnhofen-Pterosaurier Deutschlands", nl: "De Solnhofen pterosauriërs van Duitsland" },
          { en: "The Morrison Formation finds", es: "Los hallazgos de la Formación Morrison", de: "Die Morrison-Formation-Funde", nl: "De Morrison Formatie vondsten" },
          { en: "Antarctic pterosaur fossils", es: "Fósiles de pterosaurios antárticos", de: "Antarktische Pterosaurier-Fossilien", nl: "Antarctische pterosauriër fossielen" },
          { en: "Underwater cave discoveries", es: "Descubrimientos en cuevas submarinas", de: "Unterwasserhöhlen-Entdeckungen", nl: "Onderwatergrot ontdekkingen" }
        ],
        correct: 0,
        explanation: {
          en: "The exceptionally preserved pterosaur fossils from the Solnhofen limestone of Germany provided the first detailed understanding of pterosaur anatomy and flight capabilities.",
          es: "Los fósiles de pterosaurios excepcionalmente preservados de la caliza de Solnhofen de Alemania proporcionaron la primera comprensión detallada de la anatomía y capacidades de vuelo de los pterosaurios.",
          de: "Die außergewöhnlich erhaltenen Pterosaurier-Fossilien aus dem Solnhofener Kalkstein Deutschlands lieferten das erste detaillierte Verständnis der Pterosaurier-Anatomie und Flugfähigkeiten.",
          nl: "De uitzonderlijk geconserveerde pterosauriër fossielen uit de Solnhofen kalksteen van Duitsland boden het eerste gedetailleerde begrip van pterosauriër anatomie en vliegcapaciteiten."
        }
      },
      {
        question: {
          en: "What evidence suggests some pterosaurs practiced skim-feeding like modern pelicans?",
          es: "¿Qué evidencia sugiere que algunos pterosaurios practicaban alimentación de superficie como los pelícanos modernos?",
          de: "Welche Beweise deuten darauf hin, dass einige Pterosaurier Oberflächenfischerei wie moderne Pelikane betrieben?",
          nl: "Welk bewijs suggereert dat sommige pterosauriërs oppervlakte-voeding beoefenden zoals moderne pelikanen?"
        },
        options: [
          { en: "Specialized jaw shapes and wear patterns on teeth", es: "Formas especializadas de mandíbula y patrones de desgaste en dientes", de: "Spezialisierte Kieferformen und Abnutzungsmuster an Zähnen", nl: "Gespecialiseerde kaakvormen en slijtagepartronen op tanden" },
          { en: "Fossilized fishing nets found nearby", es: "Redes de pesca fosilizadas encontradas cerca", de: "Versteinerte Fischernetze in der Nähe gefunden", nl: "Gefossiliseerde visnetten gevonden in de buurt" },
          { en: "Ancient fish bones in their stomachs only", es: "Solo huesos de peces antiguos en sus estómagos", de: "Nur alte Fischknochen in ihren Mägen", nl: "Alleen oude visgraten in hun magen" },
          { en: "Written records from ancient civilizations", es: "Registros escritos de civilizaciones antiguas", de: "Schriftliche Aufzeichnungen alter Zivilisationen", nl: "Geschreven verslagen van oude beschavingen" }
        ],
        correct: 0,
        explanation: {
          en: "Some pterosaurs like Pteranodon show jaw adaptations and tooth wear patterns consistent with skim-feeding, where they would fly low over water and scoop up fish from the surface.",
          es: "Algunos pterosaurios como Pteranodon muestran adaptaciones de mandíbula y patrones de desgaste dental consistentes con alimentación de superficie, donde volarían bajo sobre el agua y recogerían peces de la superficie.",
          de: "Einige Pterosaurier wie Pteranodon zeigen Kieferanpassungen und Zahnabnutzungsmuster, die mit Oberflächenfischerei übereinstimmen, bei der sie niedrig über Wasser flogen und Fische von der Oberfläche aufsammelten.",
          nl: "Sommige pterosauriërs zoals Pteranodon tonen kaakaanpassingen en tandslijtagepartronen consistent met oppervlakte-voeding, waarbij ze laag over water vlogen en vis van het oppervlak schepten."
        }
      },
      {
        question: {
          en: "Which pterosaur family showed the most dramatic sexual dimorphism?",
          es: "¿Qué familia de pterosaurios mostró el dimorfismo sexual más dramático?",
          de: "Welche Pterosaurier-Familie zeigte den dramatischsten Geschlechtsdimorphismus?",
          nl: "Welke pterosauriër familie toonde het meest dramatische geslachtsdimorfisme?"
        },
        options: [
          { en: "Pteranodontidae", es: "Pteranodóntidos", de: "Pteranodontidae", nl: "Pteranodontidae" },
          { en: "Azhdarchidae", es: "Azdarquídeos", de: "Azhdarchidae", nl: "Azhdarchidae" },
          { en: "Rhamphorhynchidae", es: "Ramphorhínquidos", de: "Rhamphorhynchidae", nl: "Rhamphorhynchidae" },
          { en: "Dimorphodontidae", es: "Dimorfodóntidos", de: "Dimorphodontidae", nl: "Dimorphodontidae" }
        ],
        correct: 0,
        explanation: {
          en: "Pteranodontids showed extreme sexual dimorphism, with males having much larger crests and different skull proportions compared to females, similar to modern birds with elaborate displays.",
          es: "Los pteranodóntidos mostraron dimorfismo sexual extremo, con machos teniendo crestas mucho más grandes y diferentes proporciones de cráneo comparado con hembras, similar a aves modernas con exhibiciones elaboradas.",
          de: "Pteranodontiden zeigten extremen Geschlechtsdimorphismus, wobei Männchen viel größere Kämme und andere Schädelverhältnisse im Vergleich zu Weibchen hatten, ähnlich modernen Vögeln mit aufwendigen Balzdarstellungen.",
          nl: "Pteranodontiden toonden extreem geslachtsdimorfisme, waarbij mannetjes veel grotere kammen en andere schedelverhoudingen hadden vergeleken met vrouwtjes, vergelijkbaar met moderne vogels met uitgebreide vertoningen."
        }
      },
      {
        question: {
          en: "What was unique about the wing membrane of Sordes pilosus?",
          es: "¿Qué era único sobre la membrana del ala de Sordes pilosus?",
          de: "Was war einzigartig an der Flügelmembran von Sordes pilosus?",
          nl: "Wat was uniek aan het vleugelmembraan van Sordes pilosus?"
        },
        options: [
          { en: "It preserved evidence of dense fur covering the body", es: "Preservó evidencia de pelaje denso cubriendo el cuerpo", de: "Es erhielt Beweise für dichten Pelz, der den Körper bedeckte", nl: "Het bewaarde bewijs van dichte vacht die het lichaam bedekte" },
          { en: "It was made of metal instead of skin", es: "Estaba hecho de metal en lugar de piel", de: "Es bestand aus Metall statt aus Haut", nl: "Het was gemaakt van metaal in plaats van huid" },
          { en: "It could change color like a chameleon", es: "Podía cambiar de color como un camaleón", de: "Es konnte die Farbe wie ein Chamäleon wechseln", nl: "Het kon van kleur veranderen zoals een kameleon" },
          { en: "It was completely transparent", es: "Era completamente transparente", de: "Es war völlig durchsichtig", nl: "Het was volledig doorzichtig" }
        ],
        correct: 0,
        explanation: {
          en: "Sordes pilosus was the first pterosaur found with preserved pycnofibers (fur-like filaments), providing direct evidence that pterosaurs were covered in insulating fur for temperature regulation.",
          es: "Sordes pilosus fue el primer pterosaurio encontrado con picnofibras preservadas (filamentos parecidos al pelaje), proporcionando evidencia directa de que los pterosaurios estaban cubiertos de pelaje aislante para regulación de temperatura.",
          de: "Sordes pilosus war der erste Pterosaurier, der mit erhaltenen Pyknofasern (pelzähnlichen Filamenten) gefunden wurde und direkten Beweis lieferte, dass Pterosaurier mit isolierendem Pelz zur Temperaturregulierung bedeckt waren.",
          nl: "Sordes pilosus was de eerste pterosauriër gevonden met geconserveerde pycnovezels (vachtachtige filamenten), wat direct bewijs leverde dat pterosauriërs bedekt waren met isolerende vacht voor temperatuurregulatie."
        }
      },
      {
        question: {
          en: "Which pterosaur adaptation allowed for more efficient long-distance flight?",
          es: "¿Qué adaptación de pterosaurio permitió vuelo de larga distancia más eficiente?",
          de: "Welche Pterosaurier-Anpassung ermöglichte effizienteren Langstreckenflug?",
          nl: "Welke pterosauriër aanpassing maakte efficiëntere lange-afstand vlucht mogelijk?"
        },
        options: [
          { en: "Loss of tail and development of wrist joint for wing folding", es: "Pérdida de cola y desarrollo de articulación de muñeca para plegado de ala", de: "Verlust des Schwanzes und Entwicklung des Handgelenks zum Flügelfalten", nl: "Verlies van staart en ontwikkeling van polsgewricht voor vleugelplooiing" },
          { en: "Growing extra pairs of wings", es: "Creciendo pares extra de alas", de: "Wachsende zusätzliche Flügelpaare", nl: "Extra paren vleugels ontwikkelen" },
          { en: "Developing internal combustion engines", es: "Desarrollando motores de combustión interna", de: "Entwicklung von Verbrennungsmotoren", nl: "Interne verbrandingsmotoren ontwikkelen" },
          { en: "Shrinking to insect size", es: "Encogiéndose a tamaño de insecto", de: "Schrumpfung auf Insektengröße", nl: "Krimpen tot insectengrootte" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced pterosaurs developed sophisticated wing-folding mechanisms and lost their tails, creating more streamlined, efficient flying machines capable of long-distance soaring flight.",
          es: "Los pterosaurios avanzados desarrollaron mecanismos sofisticados de plegado de alas y perdieron sus colas, creando máquinas voladoras más aerodinámicas y eficientes capaces de vuelo de planeo de larga distancia.",
          de: "Fortgeschrittene Pterosaurier entwickelten ausgeklügelte Flügelfaltmechanismen und verloren ihre Schwänze, wodurch stromlinienförmigere, effizientere Flugmaschinen entstanden, die zu Langstrecken-Segelflug fähig waren.",
          nl: "Geavanceerde pterosauriërs ontwikkelden geavanceerde vleugelplooimechanismen en verloren hun staarten, waardoor meer gestroomlijnde, efficiënte vliegmachines ontstonden die lange-afstand zweefvlucht konden uitvoeren."
        }
      },
      {
        question: {
          en: "What was the probable function of the pneumatic bone system in large pterosaurs?",
          es: "¿Cuál era la función probable del sistema de huesos neumáticos en pterosaurios grandes?",
          de: "Was war die wahrscheinliche Funktion des pneumatischen Knochensystems bei großen Pterosauriern?",
          nl: "Wat was de waarschijnlijke functie van het pneumatische botsysteem in grote pterosauriërs?"
        },
        options: [
          { en: "Weight reduction while maintaining structural strength for flight", es: "Reducción de peso manteniendo fuerza estructural para vuelo", de: "Gewichtsreduktion bei Beibehaltung der Strukturfestigkeit für den Flug", nl: "Gewichtsvermindering terwijl structurele sterkte voor vlucht behouden bleef" },
          { en: "Storing helium to make them float", es: "Almacenar helio para hacerlos flotar", de: "Helium speichern um sie schweben zu lassen", nl: "Helium opslaan om ze te laten drijven" },
          { en: "Creating music for mating calls", es: "Crear música para llamadas de apareamiento", de: "Musik für Paarungsrufe erzeugen", nl: "Muziek maken voor paringsroepen" },
          { en: "Breathing underwater for diving", es: "Respirar bajo el agua para bucear", de: "Unterwasser atmen zum Tauchen", nl: "Onder water ademen voor duiken" }
        ],
        correct: 0,
        explanation: {
          en: "Pneumatic bones (filled with air spaces) reduced weight significantly while maintaining strength, crucial for large pterosaurs that needed to achieve powered flight despite their massive size.",
          es: "Los huesos neumáticos (llenos de espacios de aire) redujeron significativamente el peso manteniendo la fuerza, crucial para pterosaurios grandes que necesitaban lograr vuelo motorizado a pesar de su tamaño masivo.",
          de: "Pneumatische Knochen (mit Lufträumen gefüllt) reduzierten das Gewicht erheblich bei Beibehaltung der Festigkeit, entscheidend für große Pterosaurier, die trotz ihrer massiven Größe Motorflug erreichen mussten.",
          nl: "Pneumatische botten (gevuld met luchtruimtes) verminderde het gewicht aanzienlijk terwijl de sterkte behouden bleef, cruciaal voor grote pterosauriërs die gemotoriseerde vlucht moesten bereiken ondanks hun enorme grootte."
        }
      },
      {
        question: {
          en: "Which pterosaur showed evidence of possible pack hunting behavior?",
          es: "¿Qué pterosaurio mostró evidencia de posible comportamiento de caza en manada?",
          de: "Welcher Pterosaurier zeigte Beweise für mögliches Rudeljagtverhalten?",
          nl: "Welke pterosauriër toonde bewijs van mogelijk roedeljachtgedrag?"
        },
        options: [
          { en: "Coloborhynchus", es: "Coloborhynchus", de: "Coloborhynchus", nl: "Coloborhynchus" },
          { en: "Quetzalcoatlus", es: "Quetzalcoatlus", de: "Quetzalcoatlus", nl: "Quetzalcoatlus" },
          { en: "Pterodaustro", es: "Pterodaustro", de: "Pterodaustro", nl: "Pterodaustro" },
          { en: "Anurognathus", es: "Anurognathus", de: "Anurognathus", nl: "Anurognathus" }
        ],
        correct: 0,
        explanation: {
          en: "Fossil evidence suggests Coloborhynchus may have engaged in cooperative feeding behaviors, with multiple individuals found together in feeding sites, similar to modern pelican feeding flocks.",
          es: "La evidencia fósil sugiere que Coloborhynchus pudo haber participado en comportamientos de alimentación cooperativa, con múltiples individuos encontrados juntos en sitios de alimentación, similar a las bandadas de alimentación de pelícanos modernos.",
          de: "Fossile Beweise deuten darauf hin, dass Coloborhynchus möglicherweise an kooperativen Fressverhalten teilnahm, wobei mehrere Individuen zusammen an Fressstellen gefunden wurden, ähnlich modernen Pelikan-Fressschwärmen.",
          nl: "Fossiel bewijs suggereert dat Coloborhynchus mogelijk deelnam aan coöperatief voedingsgedrag, met meerdere individuen samen gevonden op voedingsplaatsen, vergelijkbaar met moderne pelikaan voedingszwermen."
        }
      },
      {
        question: {
          en: "What was the estimated brain-to-body ratio of advanced pterosaurs compared to modern birds?",
          es: "¿Cuál era la proporción estimada cerebro-cuerpo de pterosaurios avanzados comparado con aves modernas?",
          de: "Wie war das geschätzte Gehirn-zu-Körper-Verhältnis fortgeschrittener Pterosaurier im Vergleich zu modernen Vögeln?",
          nl: "Wat was de geschatte hersenen-lichaam verhouding van geavanceerde pterosauriërs vergeleken met moderne vogels?"
        },
        options: [
          { en: "Similar to modern birds, indicating high intelligence", es: "Similar a aves modernas, indicando alta inteligencia", de: "Ähnlich modernen Vögeln, was auf hohe Intelligenz hindeutet", nl: "Vergelijkbaar met moderne vogels, wat hoge intelligentie aangeeft" },
          { en: "Much smaller than any living animal", es: "Mucho más pequeño que cualquier animal viviente", de: "Viel kleiner als jedes lebende Tier", nl: "Veel kleiner dan enig levend dier" },
          { en: "Larger than whale brains", es: "Más grande que cerebros de ballena", de: "Größer als Walgehirne", nl: "Groter dan walvishersenen" },
          { en: "They had no brains at all", es: "No tenían cerebros en absoluto", de: "Sie hatten überhaupt keine Gehirne", nl: "Ze hadden helemaal geen hersenen" }
        ],
        correct: 0,
        explanation: {
          en: "CT scans of pterosaur skulls reveal brain-to-body ratios similar to modern birds, suggesting they had sophisticated neural processing capabilities necessary for complex flight behaviors and navigation.",
          es: "Las tomografías de cráneos de pterosaurios revelan proporciones cerebro-cuerpo similares a las aves modernas, sugiriendo que tenían capacidades de procesamiento neural sofisticadas necesarias para comportamientos de vuelo complejos y navegación.",
          de: "CT-Scans von Pterosaurier-Schädeln zeigen Gehirn-zu-Körper-Verhältnisse ähnlich modernen Vögeln, was darauf hindeutet, dass sie ausgeklügelte neurale Verarbeitungsfähigkeiten hatten, die für komplexe Flugverhaltensweisen und Navigation notwendig waren.",
          nl: "CT-scans van pterosauriër schedels onthullen hersenen-lichaam verhoudingen vergelijkbaar met moderne vogels, wat suggereert dat ze geavanceerde neurale verwerkingscapaciteiten hadden noodzakelijk voor complex vlieggedrag en navigatie."
        }
      },
      {
        question: {
          en: "Which discovery changed our understanding of pterosaur reproduction?",
          es: "¿Qué descubrimiento cambió nuestra comprensión de la reproducción de pterosaurios?",
          de: "Welche Entdeckung veränderte unser Verständnis der Pterosaurier-Fortpflanzung?",
          nl: "Welke ontdekking veranderde ons begrip van pterosauriër voortplanting?"
        },
        options: [
          { en: "Fossilized eggs with preserved embryos", es: "Huevos fosilizados con embriones preservados", de: "Versteinerte Eier mit erhaltenen Embryonen", nl: "Gefossiliseerde eieren met geconserveerde embryo's" },
          { en: "Live pterosaurs found in remote caves", es: "Pterosaurios vivos encontrados en cuevas remotas", de: "Lebende Pterosaurier in abgelegenen Höhlen gefunden", nl: "Levende pterosauriërs gevonden in afgelegen grotten" },
          { en: "Ancient breeding manuals", es: "Manuales de cría antiguos", de: "Alte Zuchthandbücher", nl: "Oude fokhandleidingen" },
          { en: "Time travel observations", es: "Observaciones de viajes en el tiempo", de: "Zeitreise-Beobachtungen", nl: "Tijdreizen observaties" }
        ],
        correct: 0,
        explanation: {
          en: "The discovery of pterosaur eggs with embryos revealed that babies had well-developed flight structures even before hatching, confirming they were capable of flight very early in life.",
          es: "El descubrimiento de huevos de pterosaurio con embriones reveló que los bebés tenían estructuras de vuelo bien desarrolladas incluso antes de nacer, confirmando que eran capaces de volar muy temprano en la vida.",
          de: "Die Entdeckung von Pterosaurier-Eiern mit Embryonen offenbarte, dass Babys schon vor dem Schlüpfen gut entwickelte Flugstrukturen hatten, was bestätigte, dass sie sehr früh im Leben flugfähig waren.",
          nl: "De ontdekking van pterosauriër eieren met embryo's onthulde dat baby's goed ontwikkelde vliegstructuren hadden zelfs voor het uitkomen, wat bevestigde dat ze zeer vroeg in het leven konden vliegen."
        }
      },
      {
        question: {
          en: "What was the maximum theoretical wingspan limit for pterosaurs based on biomechanical studies?",
          es: "¿Cuál era el límite teórico máximo de envergadura para pterosaurios basado en estudios biomecánicos?",
          de: "Was war die maximale theoretische Spannweitenbegrenzung für Pterosaurier basierend auf biomechanischen Studien?",
          nl: "Wat was de maximale theoretische spanwijdte limiet voor pterosauriërs gebaseerd op biomechanische studies?"
        },
        options: [
          { en: "12-15 meters due to structural and atmospheric constraints", es: "12-15 metros debido a restricciones estructurales y atmosféricas", de: "12-15 Meter aufgrund struktureller und atmosphärischer Beschränkungen", nl: "12-15 meter vanwege structurele en atmosferische beperkingen" },
          { en: "No limit - they could grow infinitely large", es: "Sin límite - podían crecer infinitamente grandes", de: "Keine Grenze - sie konnten unendlich groß werden", nl: "Geen limiet - ze konden oneindig groot worden" },
          { en: "Maximum 2 meters wingspan", es: "Máximo 2 metros de envergadura", de: "Maximal 2 Meter Spannweite", nl: "Maximum 2 meter spanwijdte" },
          { en: "50 meters like commercial aircraft", es: "50 metros como aviones comerciales", de: "50 Meter wie Verkehrsflugzeuge", nl: "50 meter zoals commerciële vliegtuigen" }
        ],
        correct: 0,
        explanation: {
          en: "Biomechanical analysis suggests pterosaurs were approaching their maximum possible size, with atmospheric conditions and structural limits preventing wingspans much larger than 12-15 meters.",
          es: "El análisis biomecánico sugiere que los pterosaurios se acercaban a su tamaño máximo posible, con condiciones atmosféricas y límites estructurales previniendo envergaduras mucho más grandes que 12-15 metros.",
          de: "Biomechanische Analysen deuten darauf hin, dass Pterosaurier sich ihrer maximal möglichen Größe näherten, wobei atmosphärische Bedingungen und strukturelle Grenzen Spannweiten weit über 12-15 Meter verhinderten.",
          nl: "Biomechanische analyse suggereert dat pterosauriërs hun maximaal mogelijke grootte naderden, waarbij atmosferische omstandigheden en structurele limieten spanwijdtes veel groter dan 12-15 meter verhinderden."
        }
      },
      {
        question: {
          en: "Which pterosaur family was most adapted for inland terrestrial environments?",
          es: "¿Qué familia de pterosaurios estaba más adaptada para ambientes terrestres del interior?",
          de: "Welche Pterosaurier-Familie war am besten an terrestrische Binnenlandumgebungen angepasst?",
          nl: "Welke pterosauriër familie was het best aangepast aan binnenlandse terrestrische omgevingen?"
        },
        options: [
          { en: "Azhdarchidae", es: "Azdarquidae", de: "Azhdarchidae", nl: "Azhdarchidae" },
          { en: "Pteranodontidae", es: "Pteranodóntidos", de: "Pteranodontidae", nl: "Pteranodontidae" },
          { en: "Ornithocheiridae", es: "Ornitoqueiridae", de: "Ornithocheiridae", nl: "Ornithocheiridae" },
          { en: "Rhamphorhynchidae", es: "Ramphorhínquidos", de: "Rhamphorhynchidae", nl: "Rhamphorhynchidae" }
        ],
        correct: 0,
        explanation: {
          en: "Azhdarchids were terrestrial stalkers with long necks and legs, adapted for hunting small animals on land rather than fishing in marine environments like other pterosaur families.",
          es: "Los azdarquidos eran acechadores terrestres con cuellos y patas largas, adaptados para cazar animales pequeños en tierra en lugar de pescar en ambientes marinos como otras familias de pterosaurios.",
          de: "Azhdarchiden waren terrestrische Pirschjäger mit langen Hälsen und Beinen, angepasst für die Jagd auf kleine Tiere an Land anstatt für das Fischen in Meeresumgebungen wie andere Pterosaurier-Familien.",
          nl: "Azhdarchiden waren terrestrische belopers met lange nekken en poten, aangepast voor het jagen op kleine dieren op land in plaats van vissen in mariene omgevingen zoals andere pterosauriër families."
        }
      },
      {
        question: {
          en: "What was the significance of the notarium in advanced pterosaurs?",
          es: "¿Cuál era la importancia del notario en pterosaurios avanzados?",
          de: "Was war die Bedeutung des Notariums bei fortgeschrittenen Pterosauriern?",
          nl: "Wat was de betekenis van het notarium in geavanceerde pterosauriërs?"
        },
        options: [
          { en: "Fused vertebrae providing rigid support for powerful flight muscles", es: "Vértebras fusionadas proporcionando soporte rígido para músculos de vuelo poderosos", de: "Verschmolzene Wirbel, die starre Unterstützung für kraftvolle Flugmuskeln boten", nl: "Versmolten wervels die rigide ondersteuning boden voor krachtige vliegspieren" },
          { en: "A special organ for producing sounds", es: "Un órgano especial para producir sonidos", de: "Ein spezielles Organ zur Schallerzeugung", nl: "Een speciaal orgaan voor het produceren van geluiden" },
          { en: "A storage compartment for extra food", es: "Un compartimento de almacenamiento para comida extra", de: "Ein Lagerraum für zusätzliche Nahrung", nl: "Een opslagcompartiment voor extra voedsel" },
          { en: "A cooling system for overheated flight", es: "Un sistema de enfriamiento para vuelo sobrecalentado", de: "Ein Kühlsystem für überhitzten Flug", nl: "Een koelsysteem voor oververhitte vlucht" }
        ],
        correct: 0,
        explanation: {
          en: "The notarium was a fusion of vertebrae that created a rigid shoulder region, providing essential structural support for the powerful flight muscles needed for large pterosaur flight.",
          es: "El notario era una fusión de vértebras que creaba una región de hombro rígida, proporcionando soporte estructural esencial para los músculos de vuelo poderosos necesarios para el vuelo de pterosaurios grandes.",
          de: "Das Notarium war eine Verschmelzung von Wirbeln, die eine starre Schulterregion schuf und wesentliche strukturelle Unterstützung für die kraftvollen Flugmuskeln bot, die für den Flug großer Pterosaurier benötigt wurden.",
          nl: "Het notarium was een versmelting van wervels die een rigide schouderregio creëerde, essentiële structurele ondersteuning biedend voor de krachtige vliegspieren nodig voor grote pterosauriër vlucht."
        }
      },
      {
        question: {
          en: "Which pterosaur fossil site provided evidence of seasonal migration patterns?",
          es: "¿Qué sitio de fósiles de pterosaurio proporcionó evidencia de patrones de migración estacional?",
          de: "Welche Pterosaurier-Fossilstätte lieferte Beweise für saisonale Wanderungsmuster?",
          nl: "Welke pterosauriër fossiellocatie leverde bewijs van seizoensgebonden migratiepatronen?"
        },
        options: [
          { en: "The Kem Kem beds of Morocco", es: "Los lechos Kem Kem de Marruecos", de: "Die Kem Kem-Schichten Marokkos", nl: "De Kem Kem lagen van Marokko" },
          { en: "Yellowstone National Park", es: "Parque Nacional Yellowstone", de: "Yellowstone-Nationalpark", nl: "Yellowstone Nationaal Park" },
          { en: "The Arctic ice sheets", es: "Las capas de hielo del Ártico", de: "Die arktischen Eisschichten", nl: "De Arctische ijslagen" },
          { en: "Urban construction sites", es: "Sitios de construcción urbana", de: "Städtische Baustellen", nl: "Stedelijke bouwplaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "The Kem Kem beds revealed seasonal concentrations of different pterosaur species, suggesting they may have followed migration routes similar to modern seabirds tracking seasonal food sources.",
          es: "Los lechos Kem Kem revelaron concentraciones estacionales de diferentes especies de pterosaurios, sugiriendo que pueden haber seguido rutas de migración similares a las aves marinas modernas siguiendo fuentes de alimento estacionales.",
          de: "Die Kem Kem-Schichten offenbarten saisonale Konzentrationen verschiedener Pterosaurier-Arten, was darauf hindeutet, dass sie Wanderungsrouten ähnlich modernen Seevögeln gefolgt sein könnten, die saisonalen Nahrungsquellen folgen.",
          nl: "De Kem Kem lagen onthulden seizoensconcentraties van verschillende pterosauriër soorten, wat suggereert dat ze migratieroutes volgden vergelijkbaar met moderne zeevogels die seizoensgebonden voedselbronnen volgen."
        }
      },
      {
        question: {
          en: "What was the probable cruising speed of large pterosaurs like Quetzalcoatlus?",
          es: "¿Cuál era la velocidad de crucero probable de pterosaurios grandes como Quetzalcoatlus?",
          de: "Was war die wahrscheinliche Reisegeschwindigkeit großer Pterosaurier wie Quetzalcoatlus?",
          nl: "Wat was de waarschijnlijke kruissnelheid van grote pterosauriërs zoals Quetzalcoatlus?"
        },
        options: [
          { en: "60-80 km/h (similar to large modern birds)", es: "60-80 km/h (similar a aves grandes modernas)", de: "60-80 km/h (ähnlich großen modernen Vögeln)", nl: "60-80 km/h (vergelijkbaar met grote moderne vogels)" },
          { en: "Over 500 km/h like jet aircraft", es: "Más de 500 km/h como aviones a reacción", de: "Über 500 km/h wie Düsenflugzeuge", nl: "Meer dan 500 km/h zoals straaljagers" },
          { en: "Only 5 km/h like a walking human", es: "Solo 5 km/h como un humano caminando", de: "Nur 5 km/h wie ein gehender Mensch", nl: "Slechts 5 km/h zoals een lopend mens" },
          { en: "They couldn't actually fly", es: "En realidad no podían volar", de: "Sie konnten eigentlich nicht fliegen", nl: "Ze konden eigenlijk niet vliegen" }
        ],
        correct: 0,
        explanation: {
          en: "Biomechanical models suggest large pterosaurs had cruising speeds of 60-80 km/h, similar to large modern soaring birds like albatrosses, allowing efficient long-distance travel.",
          es: "Los modelos biomecánicos sugieren que los pterosaurios grandes tenían velocidades de crucero de 60-80 km/h, similares a las aves grandes de planeo modernas como los albatros, permitiendo viajes eficientes de larga distancia.",
          de: "Biomechanische Modelle deuten darauf hin, dass große Pterosaurier Reisegeschwindigkeiten von 60-80 km/h hatten, ähnlich großen modernen Segelvögeln wie Albatrossen, was effizienten Langstreckenflug ermöglichte.",
          nl: "Biomechanische modellen suggereren dat grote pterosauriërs kruissnelheden van 60-80 km/h hadden, vergelijkbaar met grote moderne zweefvogels zoals albatrossen, wat efficiënte lange-afstand reizen mogelijk maakte."
        }
      },
      {
        question: {
          en: "Which pterosaur characteristic evolved independently multiple times (convergent evolution)?",
          es: "¿Qué característica de pterosaurio evolucionó independientemente múltiples veces (evolución convergente)?",
          de: "Welches Pterosaurier-Merkmal entwickelte sich mehrfach unabhängig (konvergente Evolution)?",
          nl: "Welk pterosauriër kenmerk evolueerde onafhankelijk meerdere keren (convergente evolutie)?"
        },
        options: [
          { en: "Large head crests for display", es: "Crestas de cabeza grandes para exhibición", de: "Große Kopfkämme zur Zurschaustellung", nl: "Grote hoofdkammen voor vertoon" },
          { en: "The ability to breathe fire", es: "La capacidad de respirar fuego", de: "Die Fähigkeit Feuer zu atmen", nl: "Het vermogen om vuur te ademen" },
          { en: "Metallic scales", es: "Escamas metálicas", de: "Metallische Schuppen", nl: "Metalen schubben" },
          { en: "Extra pairs of eyes", es: "Pares extra de ojos", de: "Zusätzliche Augenpaare", nl: "Extra paren ogen" }
        ],
        correct: 0,
        explanation: {
          en: "Head crests evolved independently in many different pterosaur lineages throughout their evolutionary history, suggesting strong selective pressure for visual display and species recognition.",
          es: "Las crestas de cabeza evolucionaron independientemente en muchos linajes diferentes de pterosaurios a lo largo de su historia evolutiva, sugiriendo una fuerte presión selectiva para exhibición visual y reconocimiento de especies.",
          de: "Kopfkämme entwickelten sich unabhängig in vielen verschiedenen Pterosaurier-Linien während ihrer Evolutionsgeschichte, was auf starken Selektionsdruck für visuelle Zurschaustellung und Artenerkennung hindeutet.",
          nl: "Hoofdkammen evolueerden onafhankelijk in vele verschillende pterosauriër lijnen gedurende hun evolutionaire geschiedenis, wat sterke selectiedruk suggereert voor visuele vertoning en soortherkenning."
        }
      },
      {
        question: {
          en: "What was the estimated metabolic rate of pterosaurs compared to modern reptiles?",
          es: "¿Cuál era la tasa metabólica estimada de los pterosaurios comparada con reptiles modernos?",
          de: "Wie war die geschätzte Stoffwechselrate von Pterosauriern im Vergleich zu modernen Reptilien?",
          nl: "Wat was de geschatte metabolische snelheid van pterosauriërs vergeleken met moderne reptielen?"
        },
        options: [
          { en: "Much higher, similar to modern birds and mammals", es: "Mucho más alta, similar a aves y mamíferos modernos", de: "Viel höher, ähnlich modernen Vögeln und Säugetieren", nl: "Veel hoger, vergelijkbaar met moderne vogels en zoogdieren" },
          { en: "Identical to cold-blooded lizards", es: "Idéntica a lagartos de sangre fría", de: "Identisch mit kaltblütigen Echsen", nl: "Identiek aan koudbloedige hagedissen" },
          { en: "Lower than any known animal", es: "Más baja que cualquier animal conocido", de: "Niedriger als jedes bekannte Tier", nl: "Lager dan enig bekend dier" },
          { en: "They had no metabolism", es: "No tenían metabolismo", de: "Sie hatten keinen Stoffwechsel", nl: "Ze hadden geen metabolisme" }
        ],
        correct: 0,
        explanation: {
          en: "Evidence from bone histology and flight requirements suggests pterosaurs had high metabolic rates similar to modern birds, necessary for sustained powered flight and active lifestyles.",
          es: "La evidencia de la histología ósea y requisitos de vuelo sugiere que los pterosaurios tenían tasas metabólicas altas similares a las aves modernas, necesarias para vuelo motorizado sostenido y estilos de vida activos.",
          de: "Beweise aus der Knochenhistologie und Fluganforderungen deuten darauf hin, dass Pterosaurier hohe Stoffwechselraten ähnlich modernen Vögeln hatten, notwendig für anhaltenden Motorflug und aktive Lebensweisen.",
          nl: "Bewijs uit bothistologie en vliegvereisten suggereert dat pterosauriërs hoge metabolische snelheden hadden vergelijkbaar met moderne vogels, noodzakelijk voor volgehouden gemotoriseerde vlucht en actieve levensstijlen."
        }
      },
      {
        question: {
          en: "Which pterosaur discovery challenged the idea that they were only fish-eaters?",
          es: "¿Qué descubrimiento de pterosaurio desafió la idea de que solo eran comedores de peces?",
          de: "Welche Pterosaurier-Entdeckung stellte die Idee in Frage, dass sie nur Fischfresser waren?",
          nl: "Welke pterosauriër ontdekking daagde het idee uit dat ze alleen viseters waren?"
        },
        options: [
          { en: "Hatzegopteryx with evidence of terrestrial predation", es: "Hatzegopteryx con evidencia de depredación terrestre", de: "Hatzegopteryx mit Beweisen für terrestrische Beutejagd", nl: "Hatzegopteryx met bewijs van terrestrische predatie" },
          { en: "Flying fish fossils in their stomachs", es: "Fósiles de peces voladores en sus estómagos", de: "Fliegende Fischfossilien in ihren Mägen", nl: "Vliegende vis fossielen in hun magen" },
          { en: "Ancient fishing equipment found nearby", es: "Equipo de pesca antiguo encontrado cerca", de: "Alte Fischereiausrüstung in der Nähe gefunden", nl: "Oude visspullen gevonden in de buurt" },
          { en: "Vegetarian diet evidence", es: "Evidencia de dieta vegetariana", de: "Beweis für vegetarische Ernährung", nl: "Vegetarisch dieet bewijs" }
        ],
        correct: 0,
        explanation: {
          en: "Hatzegopteryx fossils found inland with evidence of hunting terrestrial prey showed that some large pterosaurs were terrestrial predators rather than exclusively marine fish-eaters.",
          es: "Los fósiles de Hatzegopteryx encontrados en el interior con evidencia de caza de presas terrestres mostraron que algunos pterosaurios grandes eran depredadores terrestres en lugar de exclusivamente comedores de peces marinos.",
          de: "Hatzegopteryx-Fossilien, die im Landesinneren mit Beweisen für die Jagd auf terrestrische Beute gefunden wurden, zeigten, dass einige große Pterosaurier terrestrische Räuber waren, anstatt ausschließlich marine Fischfresser.",
          nl: "Hatzegopteryx fossielen gevonden binnenlands met bewijs van jacht op terrestrische prooi toonden dat sommige grote pterosauriërs terrestrische predatoren waren in plaats van uitsluitend mariene viseters."
        }
      },
      {
        question: {
          en: "What was the probable social structure of pterosaur colonies based on nesting sites?",
          es: "¿Cuál era la estructura social probable de las colonias de pterosaurios basada en sitios de anidación?",
          de: "Was war die wahrscheinliche Sozialstruktur von Pterosaurier-Kolonien basierend auf Niststätten?",
          nl: "Wat was de waarschijnlijke sociale structuur van pterosauriër kolonies gebaseerd op nestplaatsen?"
        },
        options: [
          { en: "Large communal nesting colonies like modern seabirds", es: "Grandes colonias de anidación comunal como aves marinas modernas", de: "Große Gemeinschaftsnistkolonien wie moderne Seevögel", nl: "Grote gemeenschappelijke nestkolonies zoals moderne zeevogels" },
          { en: "Solitary individuals with no social contact", es: "Individuos solitarios sin contacto social", de: "Einzelgänger ohne sozialen Kontakt", nl: "Solitaire individuen zonder sociaal contact" },
          { en: "Military-style hierarchical organizations", es: "Organizaciones jerárquicas de estilo militar", de: "Militärische hierarchische Organisationen", nl: "Militaire hiërarchische organisaties" },
          { en: "Underground city networks", es: "Redes de ciudades subterráneas", de: "Unterirdische Stadtnetzwerke", nl: "Ondergrondse stadsnetwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Fossil evidence from nesting sites suggests pterosaurs nested in large colonies similar to modern seabirds, providing protection through numbers and shared vigilance against predators.",
          es: "La evidencia fósil de sitios de anidación sugiere que los pterosaurios anidaban en grandes colonias similares a las aves marinas modernas, proporcionando protección a través del número y vigilancia compartida contra depredadores.",
          de: "Fossile Beweise von Niststätten deuten darauf hin, dass Pterosaurier in großen Kolonien ähnlich modernen Seevögeln nisteten und Schutz durch Anzahl und gemeinsame Wachsamkeit gegen Räuber boten.",
          nl: "Fossiel bewijs van nestplaatsen suggereert dat pterosauriërs nestten in grote kolonies vergelijkbaar met moderne zeevogels, bescherming biedend door aantallen en gedeelde waakzaamheid tegen predatoren."
        }
      },
      {
        question: {
          en: "Which pterosaur adaptation was most crucial for their success in Mesozoic skies?",
          es: "¿Qué adaptación de pterosaurio fue más crucial para su éxito en los cielos del Mesozoico?",
          de: "Welche Pterosaurier-Anpassung war am entscheidendsten für ihren Erfolg in mesozoischen Himmeln?",
          nl: "Welke pterosauriër aanpassing was het cruciaalst voor hun succes in Mesozoïsche luchten?"
        },
        options: [
          { en: "The evolution of powered flight before birds dominated the skies", es: "La evolución del vuelo motorizado antes de que las aves dominaran los cielos", de: "Die Evolution des Motorflugs bevor Vögel den Himmel dominierten", nl: "De evolutie van gemotoriseerde vlucht voordat vogels de luchten domineerden" },
          { en: "The ability to become invisible", es: "La capacidad de volverse invisible", de: "Die Fähigkeit unsichtbar zu werden", nl: "Het vermogen om onzichtbaar te worden" },
          { en: "Cooperation with dinosaurs", es: "Cooperación con dinosaurios", de: "Kooperation mit Dinosauriern", nl: "Samenwerking met dinosaurussen" },
          { en: "Time travel capabilities", es: "Capacidades de viaje en el tiempo", de: "Zeitreisefähigkeiten", nl: "Tijdreizen mogelijkheden" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs were the first vertebrates to achieve powered flight, giving them a 160-million-year head start in aerial ecosystems before birds became dominant flying animals.",
          es: "Los pterosaurios fueron los primeros vertebrados en lograr vuelo motorizado, dándoles una ventaja de 160 millones de años en ecosistemas aéreos antes de que las aves se convirtieran en animales voladores dominantes.",
          de: "Pterosaurier waren die ersten Wirbeltiere, die Motorflug erreichten, was ihnen einen 160-Millionen-Jahre-Vorsprung in Luftökosystemen gab, bevor Vögel dominierende fliegende Tiere wurden.",
          nl: "Pterosauriërs waren de eerste gewervelde dieren die gemotoriseerde vlucht bereikten, wat hen een voorsprong van 160 miljoen jaar gaf in luchtecosystemen voordat vogels dominante vliegende dieren werden."
        }
      },
      {
        question: {
          en: "How did pterosaur wing loading compare to modern flying animals?",
          es: "¿Cómo se comparaba la carga alar de los pterosaurios con los animales voladores modernos?",
          de: "Wie war die Flügelbelastung von Pterosauriern im Vergleich zu modernen fliegenden Tieren?",
          nl: "Hoe vergeleken pterosauriër vleugelbelasting met moderne vliegende dieren?"
        },
        options: [
          { en: "Low wing loading enabled efficient soaring and gliding like modern albatrosses", es: "Baja carga alar permitía planeo y deslizamiento eficientes como albatros modernos", de: "Niedrige Flügelbelastung ermöglichte effizientes Segeln und Gleiten wie moderne Albatrosse", nl: "Lage vleugelbelasting maakte efficiënt zweven en glijden mogelijk zoals moderne albatrossen" },
          { en: "Very high wing loading required constant flapping", es: "Carga alar muy alta requería aleteo constante", de: "Sehr hohe Flügelbelastung erforderte konstantes Flügelschlagen", nl: "Zeer hoge vleugelbelasting vereiste constant klapperen" },
          { en: "Wing loading was impossible to measure", es: "La carga alar era imposible de medir", de: "Flügelbelastung war unmöglich zu messen", nl: "Vleugelbelasting was onmogelijk te meten" },
          { en: "They had no wings at all", es: "No tenían alas en absoluto", de: "Sie hatten überhaupt keine Flügel", nl: "Ze hadden helemaal geen vleugels" }
        ],
        correct: 0,
        explanation: {
          en: "Most pterosaurs had relatively low wing loading (body weight divided by wing area), which made them excellent soarers and gliders, able to stay airborne with minimal energy expenditure like modern large seabirds.",
          es: "La mayoría de los pterosaurios tenían carga alar relativamente baja (peso corporal dividido por área de ala), lo que los hacía excelentes planeadores, capaces de mantenerse en el aire con gasto mínimo de energía como grandes aves marinas modernas.",
          de: "Die meisten Pterosaurier hatten relativ niedrige Flügelbelastung (Körpergewicht geteilt durch Flügelfläche), was sie zu ausgezeichneten Seglern machte, die mit minimalem Energieaufwand in der Luft bleiben konnten wie moderne große Seevögel.",
          nl: "De meeste pterosauriërs hadden relatief lage vleugelbelasting (lichaamsgewicht gedeeld door vleugeloppervlak), wat hen uitstekende zwevers maakte, in staat om in de lucht te blijven met minimaal energieverbruik zoals moderne grote zeevogels."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();