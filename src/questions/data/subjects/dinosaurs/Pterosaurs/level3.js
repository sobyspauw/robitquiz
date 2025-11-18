// Pterosaurs Quiz - Level 3: Pterosaur Evolution and Ecology
(function() {
  const level3 = {
    name: {
      en: "Pterosaurs Level 3",
      es: "Pterosaurios Nivel 3",
      de: "Pterosaurier Stufe 3",
      nl: "Pterosauriërs Level 3"
    },
    questions: [
      {
        question: {
          en: "Which pterosaur group dominated during the Jurassic period?",
          es: "¿Qué grupo de pterosaurios dominó durante el período Jurásico?",
          de: "Welche Pterosaurier-Gruppe dominierte während des Jura?",
          nl: "Welke pterosauriër groep domineerde tijdens het Jura?"
        },
        options: [
          { en: "Rhamphorhynchoids (long-tailed pterosaurs)", es: "Ramphorínquidos (pterosaurios de cola larga)", de: "Rhamphorhynchoidea (langschwänzige Pterosaurier)", nl: "Rhamphorhynchoiden (langstaart pterosauriërs)" },
          { en: "Pterodactyloids (short-tailed pterosaurs)", es: "Pterodactiloides (pterosaurios de cola corta)", de: "Pterodactyloidea (kurzschwänzige Pterosaurier)", nl: "Pterodactyloiden (kortstaart pterosauriërs)" },
          { en: "Azhdarchoids", es: "Azdarquidos", de: "Azhdarchoidea", nl: "Azhdarchoiden" },
          { en: "Dsungaripteroids", es: "Dsungaripteroides", de: "Dsungaripteroidea", nl: "Dsungaripteroiden" }
        ],
        correct: 0,
        explanation: {
          en: "During the Jurassic period, rhamphorhynchoids (early pterosaurs with long tails) were the dominant group, including species like Rhamphorhynchus and Dorygnathus.",
          es: "Durante el período Jurásico, los ramphorínquidos (pterosaurios tempranos con colas largas) fueron el grupo dominante, incluyendo especies como Rhamphorhynchus y Dorygnathus.",
          de: "Während des Jura waren die Rhamphorhynchoidea (frühe Pterosaurier mit langen Schwänzen) die dominante Gruppe, einschließlich Arten wie Rhamphorhynchus und Dorygnathus.",
          nl: "Tijdens het Jura waren de rhamphorhynchoiden (vroege pterosauriërs met lange staarten) de dominante groep, inclusief soorten zoals Rhamphorhynchus en Dorygnathus."
        }
      },
      {
        question: {
          en: "What evidence suggests pterosaurs were warm-blooded?",
          es: "¿Qué evidencia sugiere que los pterosaurios eran de sangre caliente?",
          de: "Welche Beweise deuten darauf hin, dass Pterosaurier warmblütig waren?",
          nl: "Welk bewijs suggereert dat pterosauriërs warmbloedig waren?"
        },
        options: [
          { en: "Pycnofibers, large brains, and active flight capabilities", es: "Picnofibras, cerebros grandes y capacidades de vuelo activo", de: "Pyknofasern, große Gehirne und aktive Flugfähigkeiten", nl: "Pycnovezels, grote hersenen en actieve vliegcapaciteiten" },
          { en: "Cold environments where they lived", es: "Ambientes fríos donde vivían", de: "Kalte Umgebungen, in denen sie lebten", nl: "Koude omgevingen waar ze leefden" },
          { en: "Their slow movement patterns", es: "Sus patrones de movimiento lento", de: "Ihre langsamen Bewegungsmuster", nl: "Hun langzame bewegingspatronen" },
          { en: "Their ability to hibernate", es: "Su capacidad de hibernar", de: "Ihre Fähigkeit zu überwintern", nl: "Hun vermogen om te hiberneren" }
        ],
        correct: 0,
        explanation: {
          en: "Multiple lines of evidence suggest pterosaurs were warm-blooded: pycnofibers for insulation, relatively large brains for high metabolism, and the energy demands of powered flight.",
          es: "Múltiples líneas de evidencia sugieren que los pterosaurios eran de sangre caliente: picnofibras para aislamiento, cerebros relativamente grandes para alto metabolismo, y las demandas energéticas del vuelo motorizado.",
          de: "Mehrere Beweislinien deuten darauf hin, dass Pterosaurier warmblütig waren: Pyknofasern zur Isolation, relativ große Gehirne für hohen Stoffwechsel und die Energieanforderungen des Motorflugs.",
          nl: "Meerdere bewijslijnen suggereren dat pterosauriërs warmbloedig waren: pycnovezels voor isolatie, relatief grote hersenen voor hoog metabolisme, en de energie-eisen van gemotoriseerde vlucht."
        }
      },
      {
        question: {
          en: "Which feeding strategy was NOT used by pterosaurs?",
          es: "¿Qué estrategia de alimentación NO fue usada por los pterosaurios?",
          de: "Welche Ernährungsstrategie wurde NICHT von Pterosauriern verwendet?",
          nl: "Welke voedingsstrategie werd NIET gebruikt door pterosauriërs?"
        },
        options: [
          { en: "Filter feeding like baleen whales", es: "Alimentación por filtración como ballenas barbadas", de: "Filterfütterung wie Bartenwale", nl: "Filtervoeders zoals baleinwalvissen" },
          { en: "Fish catching", es: "Captura de peces", de: "Fischfang", nl: "Visvangst" },
          { en: "Fruit eating", es: "Comer frutas", de: "Fruchtfressen", nl: "Vruchten eten" },
          { en: "Scavenging carrion", es: "Carroñeo", de: "Aasfressen", nl: "Aas eten" }
        ],
        correct: 0,
        explanation: {
          en: "While pterosaurs had diverse feeding strategies including piscivory, frugivory, and scavenging, there is no evidence they used filter feeding like modern baleen whales.",
          es: "Aunque los pterosaurios tenían diversas estrategias de alimentación incluyendo piscivoría, frugivoría y carroñeo, no hay evidencia de que usaran alimentación por filtración como las ballenas barbadas modernas.",
          de: "Obwohl Pterosaurier vielfältige Ernährungsstrategien hatten, einschließlich Fischfresserei, Fruchtfresserei und Aasfresserei, gibt es keine Beweise dafür, dass sie Filterfütterung wie moderne Bartenwale verwendeten.",
          nl: "Hoewel pterosauriërs diverse voedingsstrategieën hadden inclusief visserij, fruiteten en aaseten, is er geen bewijs dat ze filtervoeding gebruikten zoals moderne baleinwalvissen."
        }
      },
      {
        question: {
          en: "What was unique about Dsungaripterus pterosaurs?",
          es: "¿Qué era único sobre los pterosaurios Dsungaripterus?",
          de: "Was war einzigartig an Dsungaripterus-Pterosauriern?",
          nl: "Wat was uniek aan Dsungaripterus pterosauriërs?"
        },
        options: [
          { en: "Blunt, crushing beak for eating shellfish and crabs", es: "Pico romo y triturador para comer mariscos y cangrejos", de: "Stumpfer, zermalmender Schnabel zum Fressen von Schalentieren und Krabben", nl: "Stompe, verbrijzelende snavel voor het eten van schelpdieren en krabben" },
          { en: "Webbed feet for swimming", es: "Pies palmeados para nadar", de: "Schwimmhäute zum Schwimmen", nl: "Gezwommen voeten voor zwemmen" },
          { en: "Ability to change color", es: "Capacidad de cambiar de color", de: "Fähigkeit, die Farbe zu ändern", nl: "Vermogen om van kleur te veranderen" },
          { en: "Underground burrow living", es: "Vida en madrigueras subterráneas", de: "Leben in unterirdischen Höhlen", nl: "Ondergronds hol leven" }
        ],
        correct: 0,
        explanation: {
          en: "Dsungaripterus had a distinctive blunt, upturned beak with crushing teeth, specialized for feeding on hard-shelled invertebrates like mollusks and crustaceans.",
          es: "Dsungaripterus tenía un distintivo pico romo y hacia arriba con dientes trituradores, especializado para alimentarse de invertebrados de caparazón duro como moluscos y crustáceos.",
          de: "Dsungaripterus hatte einen charakteristischen stumpfen, nach oben gerichteten Schnabel mit zermalmenden Zähnen, spezialisiert auf das Fressen von hartschaligen Wirbellosen wie Weichtieren und Krebstieren.",
          nl: "Dsungaripterus had een kenmerkende stompe, opwaarts gerichte snavel met verbrijzelende tanden, gespecialiseerd in het eten van hardschalige ongewervelden zoals weekdieren en schaaldieren."
        }
      },
      {
        question: {
          en: "How did pterosaurs likely navigate during migration?",
          es: "¿Cómo navegaban probablemente los pterosaurios durante la migración?",
          de: "Wie navigierten Pterosaurier wahrscheinlich während der Wanderung?",
          nl: "Hoe navigeerden pterosauriërs waarschijnlijk tijdens migratie?"
        },
        options: [
          { en: "Using landmarks, sun position, and possibly magnetic fields", es: "Usando puntos de referencia, posición del sol y posiblemente campos magnéticos", de: "Mit Landmarken, Sonnenposition und möglicherweise Magnetfeldern", nl: "Gebruikmakend van herkenningspunten, zonpositie en mogelijk magnetische velden" },
          { en: "Following roads and human settlements", es: "Siguiendo caminos y asentamientos humanos", de: "Straßen und menschliche Siedlungen folgend", nl: "Wegen en menselijke nederzettingen volgend" },
          { en: "Using echolocation like bats", es: "Usando ecolocación como murciélagos", de: "Mit Echoortung wie Fledermäuse", nl: "Echolocatie gebruikend zoals vleermuizen" },
          { en: "They never migrated", es: "Nunca migraron", de: "Sie wanderten nie", nl: "Ze migreerden nooit" }
        ],
        correct: 0,
        explanation: {
          en: "Like modern birds, pterosaurs likely used multiple navigation methods including visual landmarks, solar compass, and possibly magnetic field detection for long-distance flight and seasonal migration.",
          es: "Como las aves modernas, los pterosaurios probablemente usaban múltiples métodos de navegación incluyendo puntos de referencia visuales, brújula solar y posiblemente detección de campos magnéticos para vuelos de larga distancia y migración estacional.",
          de: "Wie moderne Vögel verwendeten Pterosaurier wahrscheinlich mehrere Navigationsmethoden, einschließlich visueller Landmarken, Sonnenkompass und möglicherweise Magnetfelderkennung für Langstreckenflug und saisonale Wanderung.",
          nl: "Net als moderne vogels gebruikten pterosauriërs waarschijnlijk meerdere navigatiemethoden inclusief visuele herkenningspunten, zonnecompas en mogelijk magnetische velddetectie voor lange afstandsvluchten en seizoensmigratie."
        }
      },
      {
        question: {
          en: "What is the fossil site Solnhofen famous for regarding pterosaurs?",
          es: "¿Por qué es famoso el sitio fósil de Solnhofen respecto a los pterosaurios?",
          de: "Wofür ist die Fossilstätte Solnhofen in Bezug auf Pterosaurier berühmt?",
          nl: "Waarvoor is de fossielsite Solnhofen beroemd betreffende pterosauriërs?"
        },
        options: [
          { en: "Exceptional preservation showing wing membranes and soft tissues", es: "Preservación excepcional mostrando membranas alares y tejidos blandos", de: "Außergewöhnliche Erhaltung mit Flügelmembranen und Weichgewebe", nl: "Uitzonderlijke bewaring van vleugelmembranen en zachte weefsels" },
          { en: "Largest pterosaur fossils ever found", es: "Los fósiles de pterosaurios más grandes jamás encontrados", de: "Die größten jemals gefundenen Pterosaurier-Fossilien", nl: "Grootste pterosauriër fossielen ooit gevonden" },
          { en: "First evidence of pterosaur eggs", es: "Primera evidencia de huevos de pterosaurio", de: "Erste Beweise für Pterosaurier-Eier", nl: "Eerste bewijs van pterosauriër eieren" },
          { en: "Underwater pterosaur colonies", es: "Colonias subacuáticas de pterosaurios", de: "Unterwasser-Pterosaurier-Kolonien", nl: "Onderwater pterosauriër kolonies" }
        ],
        correct: 0,
        explanation: {
          en: "The Solnhofen limestone in Germany is famous for exceptional fossil preservation, including pterosaurs with intact wing membranes, pycnofibers, and other soft tissues rarely preserved elsewhere.",
          es: "La piedra caliza de Solnhofen en Alemania es famosa por la preservación excepcional de fósiles, incluyendo pterosaurios con membranas alares intactas, picnofibras y otros tejidos blandos raramente preservados en otros lugares.",
          de: "Der Solnhofener Kalkstein in Deutschland ist berühmt für außergewöhnliche Fossilerhaltung, einschließlich Pterosaurier mit intakten Flügelmembranen, Pyknofasern und anderen Weichgeweben, die selten anderswo erhalten sind.",
          nl: "De Solnhofen kalksteen in Duitsland is beroemd om uitzonderlijke fossielbewaring, inclusief pterosauriërs met intacte vleugelmembranen, pycnovezels en andere zachte weefsels die zelden elders bewaard blijven."
        }
      },
      {
        question: {
          en: "Which pterosaur adaptation helped with thermal regulation?",
          es: "¿Qué adaptación de pterosaurio ayudaba con la regulación térmica?",
          de: "Welche Pterosaurier-Anpassung half bei der Wärmeregulierung?",
          nl: "Welke pterosauriër aanpassing hielp bij thermische regulatie?"
        },
        options: [
          { en: "Large crests that could dissipate heat", es: "Crestas grandes que podían disipar calor", de: "Große Kämme, die Wärme ableiten konnten", nl: "Grote kammen die warmte konden afvoeren" },
          { en: "Ability to shed their skin", es: "Capacidad de mudar su piel", de: "Fähigkeit, ihre Haut abzuwerfen", nl: "Vermogen om hun huid af te werpen" },
          { en: "Hibernation in caves", es: "Hibernación en cuevas", de: "Winterschlaf in Höhlen", nl: "Hibernatie in grotten" },
          { en: "Burrowing underground", es: "Excavación subterránea", de: "Unterirdisches Graben", nl: "Ondergronds graven" }
        ],
        correct: 0,
        explanation: {
          en: "Many pterosaur crests were filled with blood vessels and likely served as thermoregulatory devices, helping to dissipate excess body heat during flight, similar to elephant ears.",
          es: "Muchas crestas de pterosaurio estaban llenas de vasos sanguíneos y probablemente servían como dispositivos termorreguladores, ayudando a disipar el exceso de calor corporal durante el vuelo, similar a las orejas de elefante.",
          de: "Viele Pterosaurier-Kämme waren voller Blutgefäße und dienten wahrscheinlich als thermoregulatorische Geräte, die halfen, überschüssige Körperwärme während des Fluges abzuleiten, ähnlich wie Elefantenohren.",
          nl: "Veel pterosauriër kammen waren gevuld met bloedvaten en dienden waarschijnlijk als thermoregulerende apparaten, helpend om overtollige lichaamswarmte tijdens de vlucht af te voeren, vergelijkbaar met olifantenoren."
        }
      },
      {
        question: {
          en: "What is the significance of Pteranodon sexual dimorphism?",
          es: "¿Cuál es la importancia del dimorfismo sexual de Pteranodon?",
          de: "Was ist die Bedeutung des Pteranodon-Geschlechtsdimorphismus?",
          nl: "Wat is het belang van Pteranodon seksuele dimorfisme?"
        },
        options: [
          { en: "Males had larger crests for display, females had smaller crests", es: "Los machos tenían crestas más grandes para exhibición, las hembras tenían crestas más pequeñas", de: "Männchen hatten größere Kämme zur Zurschaustellung, Weibchen hatten kleinere Kämme", nl: "Mannetjes hadden grotere kammen voor vertoon, vrouwtjes hadden kleinere kammen" },
          { en: "Females were much larger than males", es: "Las hembras eran mucho más grandes que los machos", de: "Weibchen waren viel größer als Männchen", nl: "Vrouwtjes waren veel groter dan mannetjes" },
          { en: "Males could fly but females couldn't", es: "Los machos podían volar pero las hembras no", de: "Männchen konnten fliegen, aber Weibchen nicht", nl: "Mannetjes konden vliegen maar vrouwtjes niet" },
          { en: "Only females had teeth", es: "Solo las hembras tenían dientes", de: "Nur Weibchen hatten Zähne", nl: "Alleen vrouwtjes hadden tanden" }
        ],
        correct: 0,
        explanation: {
          en: "Pteranodon showed clear sexual dimorphism with males having much larger, more elaborate crests used for species recognition and mating displays, while females had smaller, more practical crests.",
          es: "Pteranodon mostraba claro dimorfismo sexual con machos teniendo crestas mucho más grandes y elaboradas usadas para reconocimiento de especies y exhibiciones de apareamiento, mientras las hembras tenían crestas más pequeñas y prácticas.",
          de: "Pteranodon zeigte deutlichen Geschlechtsdimorphismus, wobei Männchen viel größere, elaborierte Kämme für Artenerkennung und Paarungsrituale hatten, während Weibchen kleinere, praktischere Kämme besaßen.",
          nl: "Pteranodon toonde duidelijk seksueel dimorfisme met mannetjes die veel grotere, meer uitgewerkte kammen hadden voor soortherkenning en paringsvertoningen, terwijl vrouwtjes kleinere, meer praktische kammen hadden."
        }
      },
      {
        question: {
          en: "How did pterosaur wing loading compare to modern birds?",
          es: "¿Cómo se comparaba la carga alar de los pterosaurios con las aves modernas?",
          de: "Wie verglich sich die Flügelbelastung der Pterosaurier mit modernen Vögeln?",
          nl: "Hoe vergeleken pterosauriër vleugelbela stringen met moderne vogels?"
        },
        options: [
          { en: "Lower wing loading, making them more efficient gliders", es: "Menor carga alar, haciéndolos planeadores más eficientes", de: "Geringere Flügelbelastung, was sie zu effizienteren Segelfliegern machte", nl: "Lagere vleugelbelasting, waardoor ze efficiëntere zweefvliegers waren" },
          { en: "Much higher wing loading, requiring constant flapping", es: "Carga alar mucho mayor, requiriendo aleteo constante", de: "Viel höhere Flügelbelastung, die ständiges Schlagen erforderte", nl: "Veel hogere vleugelbelasting, wat constant klapperen vereiste" },
          { en: "Identical to modern birds", es: "Idéntica a las aves modernas", de: "Identisch mit modernen Vögeln", nl: "Identiek aan moderne vogels" },
          { en: "Wing loading varied randomly", es: "La carga alar variaba aleatoriamente", de: "Flügelbelastung variierte zufällig", nl: "Vleugelbelasting varieerde willekeurig" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs generally had lower wing loading than most modern birds, meaning they had more wing area relative to their body weight, making them excellent soaring and gliding animals.",
          es: "Los pterosaurios generalmente tenían menor carga alar que la mayoría de las aves modernas, significa que tenían más área de ala relativa a su peso corporal, haciéndolos excelentes animales de planeo y vuelo sin aleteo.",
          de: "Pterosaurier hatten im Allgemeinen eine geringere Flügelbelastung als die meisten modernen Vögel, was bedeutete, dass sie mehr Flügelfläche im Verhältnis zu ihrem Körpergewicht hatten, was sie zu ausgezeichneten Segel- und Gleittieren machte.",
          nl: "Pterosauriërs hadden over het algemeen lagere vleugelbelasting dan de meeste moderne vogels, wat betekende dat ze meer vleugeloppervlak hadden ten opzichte van hun lichaamsgewicht, waardoor ze uitstekende zeil- en zweefvliegdieren waren."
        }
      },
      {
        question: {
          en: "What role did pterosaurs play in Mesozoic ecosystems?",
          es: "¿Qué papel jugaron los pterosaurios en los ecosistemas del Mesozoico?",
          de: "Welche Rolle spielten Pterosaurier in mesozoischen Ökosystemen?",
          nl: "Welke rol speelden pterosauriërs in Mesozoïsche ecosystemen?"
        },
        options: [
          { en: "Key aerial predators and important pollinators", es: "Depredadores aéreos clave e importantes polinizadores", de: "Wichtige Lufträuber und bedeutende Bestäuber", nl: "Belangrijke luchtpredatoren en belangrijke bestuivers" },
          { en: "Primarily scavengers with no ecological impact", es: "Principalmente carroñeros sin impacto ecológico", de: "Hauptsächlich Aasfresser ohne ökologischen Einfluss", nl: "Voornamelijk aaseters zonder ecologische impact" },
          { en: "Underground tunnel builders", es: "Constructores de túneles subterráneos", de: "Unterirdische Tunnelbauer", nl: "Ondergrondse tunnelbouwers" },
          { en: "Ocean floor cleaners", es: "Limpiadores del fondo oceánico", de: "Meeresbodenreiniger", nl: "Oceaanbodem schoonmakers" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs were crucial components of Mesozoic ecosystems, serving as aerial predators controlling insect and fish populations, and likely important pollinators of early flowering plants.",
          es: "Los pterosaurios fueron componentes cruciales de los ecosistemas del Mesozoico, sirviendo como depredadores aéreos controlando poblaciones de insectos y peces, y probablemente importantes polinizadores de plantas con flores tempranas.",
          de: "Pterosaurier waren entscheidende Komponenten mesozoischer Ökosysteme, dienten als Lufträuber zur Kontrolle von Insekten- und Fischpopulationen und waren wahrscheinlich wichtige Bestäuber früher blühender Pflanzen.",
          nl: "Pterosauriërs waren cruciale componenten van Mesozoïsche ecosystemen, dienend als luchtpredatoren die insecten- en vispopulaties controleerden, en waarschijnlijk belangrijke bestuivers van vroege bloemplanten."
        }
      },
      {
        question: {
          en: "Which pterosaur feature suggests they had complex social behaviors?",
          es: "¿Qué característica de pterosaurio sugiere que tenían comportamientos sociales complejos?",
          de: "Welches Pterosaurier-Merkmal deutet auf komplexe Sozialverhalten hin?",
          nl: "Welke pterosauriër eigenschap suggereert dat ze complex sociaal gedrag hadden?"
        },
        options: [
          { en: "Elaborate crests for visual communication and display", es: "Crestas elaboradas para comunicación visual y exhibición", de: "Aufwändige Kämme für visuelle Kommunikation und Zurschaustellung", nl: "Uitgewerkte kammen voor visuele communicatie en vertoon" },
          { en: "Sharp claws for fighting only", es: "Garras afiladas solo para luchar", de: "Scharfe Krallen nur zum Kämpfen", nl: "Scherpe klauwen alleen voor vechten" },
          { en: "Ability to build nests in trees", es: "Capacidad de construir nidos en árboles", de: "Fähigkeit, Nester in Bäumen zu bauen", nl: "Vermogen om nesten in bomen te bouwen" },
          { en: "Nocturnal hunting behavior", es: "Comportamiento de caza nocturno", de: "Nächtliches Jagdverhalten", nl: "Nachtelijk jaaggedrag" }
        ],
        correct: 0,
        explanation: {
          en: "The elaborate and diverse crests of many pterosaurs strongly suggest they were used for visual signaling, species recognition, and social displays similar to modern birds with complex social structures.",
          es: "Las crestas elaboradas y diversas de muchos pterosaurios sugieren fuertemente que se usaban para señalización visual, reconocimiento de especies y exhibiciones sociales similar a las aves modernas con estructuras sociales complejas.",
          de: "Die aufwändigen und vielfältigen Kämme vieler Pterosaurier deuten stark darauf hin, dass sie für visuelle Signalgebung, Artenerkennung und soziale Zurschaustellung verwendet wurden, ähnlich modernen Vögeln mit komplexen Sozialstrukturen.",
          nl: "De uitgewerkte en diverse kammen van veel pterosauriërs suggereren sterk dat ze gebruikt werden voor visuele signalering, soortherkenning en sociale vertoningen vergelijkbaar met moderne vogels met complexe sociale structuren."
        }
      },
      {
        question: {
          en: "How did pterosaur diversity change throughout the Mesozoic?",
          es: "¿Cómo cambió la diversidad de pterosaurios a lo largo del Mesozoico?",
          de: "Wie veränderte sich die Pterosaurier-Vielfalt während des Mesozoikums?",
          nl: "Hoe veranderde pterosauriër diversiteit gedurende het Mesozoïcum?"
        },
        options: [
          { en: "Peaked in Cretaceous with giant forms, then declined", es: "Alcanzó su pico en el Cretácico con formas gigantes, luego declinó", de: "Höhepunkt in der Kreidezeit mit Riesenformen, dann Rückgang", nl: "Piekte in Krijttijd met reuze vormen, daarna afgenomen" },
          { en: "Remained constant throughout", es: "Permaneció constante a lo largo", de: "Blieb durchgehend konstant", nl: "Bleef constant gedurende" },
          { en: "Highest in Triassic, then gradually decreased", es: "Más alta en Triásico, luego gradualmente disminuyó", de: "Am höchsten in der Trias, dann allmählich abnehmend", nl: "Hoogst in Trias, daarna geleidelijk afgenomen" },
          { en: "Only existed in Jurassic period", es: "Solo existió en el período Jurásico", de: "Existierte nur in der Jurazeit", nl: "Bestond alleen in Jura periode" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaur diversity reached its peak during the Cretaceous period with the evolution of giant azhdarchids and diverse ecological niches, but began declining before the final extinction event.",
          es: "La diversidad de pterosaurios alcanzó su pico durante el período Cretácico con la evolución de azdarquidos gigantes y diversos nichos ecológicos, pero comenzó a declinar antes del evento de extinción final.",
          de: "Die Pterosaurier-Vielfalt erreichte ihren Höhepunkt während der Kreidezeit mit der Evolution riesiger Azhdarchiden und vielfältiger ökologischer Nischen, begann aber vor dem finalen Aussterbeereignis zu sinken.",
          nl: "Pterosauriër diversiteit bereikte zijn hoogtepunt tijdens de Krijttijd met de evolutie van reuze azhdarchiden en diverse ecologische niches, maar begon af te nemen voor het finale uitsterven."
        }
      },
      {
        question: {
          en: "What can pterosaur bone histology tell us about their growth?",
          es: "¿Qué puede decirnos la histología ósea de los pterosaurios sobre su crecimiento?",
          de: "Was kann uns die Knochen-Histologie der Pterosaurier über ihr Wachstum sagen?",
          nl: "Wat kan pterosauriër bot histologie ons vertellen over hun groei?"
        },
        options: [
          { en: "They grew rapidly like birds, reaching adult size quickly", es: "Crecían rápidamente como las aves, alcanzando tamaño adulto rápidamente", de: "Sie wuchsen schnell wie Vögel und erreichten schnell die Erwachsenengröße", nl: "Ze groeiden snel zoals vogels, snel volwassen grootte bereikend" },
          { en: "They grew extremely slowly like crocodiles", es: "Crecían extremadamente lento como cocodrilos", de: "Sie wuchsen extrem langsam wie Krokodile", nl: "Ze groeiden extreem langzaam zoals krokodillen" },
          { en: "They never stopped growing throughout their lives", es: "Nunca dejaron de crecer durante sus vidas", de: "Sie hörten nie auf zu wachsen während ihres Lebens", nl: "Ze stopten nooit met groeien gedurende hun leven" },
          { en: "They shrunk as they aged", es: "Se encogían al envejecer", de: "Sie schrumpften beim Altern", nl: "Ze krompem bij het verouderen" }
        ],
        correct: 0,
        explanation: {
          en: "Bone histology studies show pterosaurs had fast-growing, bird-like bone tissue with high metabolic rates, allowing them to reach adult size relatively quickly compared to other reptiles.",
          es: "Los estudios de histología ósea muestran que los pterosaurios tenían tejido óseo de crecimiento rápido, similar al de las aves, con altas tasas metabólicas, permitiéndoles alcanzar el tamaño adulto relativamente rápido comparado con otros reptiles.",
          de: "Knochen-Histologie-Studien zeigen, dass Pterosaurier schnell wachsendes, vogelähnliches Knochengewebe mit hohen Stoffwechselraten hatten, wodurch sie im Vergleich zu anderen Reptilien relativ schnell die Erwachsenengröße erreichten.",
          nl: "Bot histologie studies tonen dat pterosauriërs snelgroeiend, vogelachtig botweefsel hadden met hoge metabole snelheden, waardoor ze relatief snel volwassen grootte bereikten vergeleken met andere reptielen."
        }
      },
      {
        question: {
          en: "Which environmental factor likely contributed to pterosaur gigantism?",
          es: "¿Qué factor ambiental probablemente contribuyó al gigantismo de los pterosaurios?",
          de: "Welcher Umweltfaktor trug wahrscheinlich zum Pterosaurier-Gigantismus bei?",
          nl: "Welke omgevingsfactor droeg waarschijnlijk bij aan pterosauriër gigantisme?"
        },
        options: [
          { en: "Higher atmospheric oxygen levels during the Mesozoic", es: "Niveles más altos de oxígeno atmosférico durante el Mesozoico", de: "Höhere atmosphärische Sauerstoffwerte während des Mesozoikums", nl: "Hogere atmosferische zuurstofniveaus tijdens het Mesozoïcum" },
          { en: "Colder global temperatures", es: "Temperaturas globales más frías", de: "Kältere globale Temperaturen", nl: "Koudere globale temperaturen" },
          { en: "Lack of vegetation", es: "Falta de vegetación", de: "Mangel an Vegetation", nl: "Gebrek aan vegetatie" },
          { en: "Increased gravity", es: "Gravedad aumentada", de: "Erhöhte Schwerkraft", nl: "Verhoogde zwaartekracht" }
        ],
        correct: 0,
        explanation: {
          en: "Higher atmospheric oxygen concentrations during parts of the Mesozoic may have supported the evolution of giant flying animals by improving respiratory efficiency and reducing the energetic costs of flight.",
          es: "Concentraciones más altas de oxígeno atmosférico durante partes del Mesozoico pueden haber apoyado la evolución de animales voladores gigantes mejorando la eficiencia respiratoria y reduciendo los costos energéticos del vuelo.",
          de: "Höhere atmosphärische Sauerstoffkonzentrationen während Teilen des Mesozoikums könnten die Evolution riesiger fliegender Tiere unterstützt haben, indem sie die Atemeffizienz verbesserten und die energetischen Kosten des Fluges reduzierten.",
          nl: "Hogere atmosferische zuurstofconcentraties tijdens delen van het Mesozoïcum kunnen de evolutie van reuze vliegende dieren ondersteund hebben door ademhalingsefficiëntie te verbeteren en energetische kosten van vliegen te verminderen."
        }
      },
      {
        question: {
          en: "What evidence supports pterosaur parental care?",
          es: "¿Qué evidencia apoya el cuidado parental de los pterosaurios?",
          de: "Welche Beweise unterstützen die elterliche Fürsorge der Pterosaurier?",
          nl: "Welk bewijs ondersteunt pterosauriër ouderlijke zorg?"
        },
        options: [
          { en: "Fossil evidence of eggs in organized nesting colonies", es: "Evidencia fósil de huevos en colonias de anidación organizadas", de: "Fossile Beweise für Eier in organisierten Nistkolonien", nl: "Fossiel bewijs van eieren in georganiseerde nestkolonies" },
          { en: "Young pterosaurs found with tools", es: "Pterosaurios jóvenes encontrados con herramientas", de: "Junge Pterosaurier mit Werkzeugen gefunden", nl: "Jonge pterosauriërs gevonden met gereedschap" },
          { en: "Evidence of milk production", es: "Evidencia de producción de leche", de: "Beweise für Milchproduktion", nl: "Bewijs van melkproductie" },
          { en: "Underground nursery chambers", es: "Cámaras de guardería subterráneas", de: "Unterirdische Kinderstubenkammern", nl: "Ondergrondse broedkamers" }
        ],
        correct: 0,
        explanation: {
          en: "Fossil sites in China and Argentina have revealed pterosaur nesting colonies with organized arrangements of eggs and evidence of adults returning to the same nesting areas, suggesting parental care behaviors.",
          es: "Sitios fósiles en China y Argentina han revelado colonias de anidación de pterosaurios con arreglos organizados de huevos y evidencia de adultos regresando a las mismas áreas de anidación, sugiriendo comportamientos de cuidado parental.",
          de: "Fossilstätten in China und Argentinien haben Pterosaurier-Nistkolonien mit organisierten Eieranordnungen und Beweise dafür offenbart, dass Erwachsene zu denselben Nistgebieten zurückkehrten, was auf elterliche Fürsorgeverhalten hindeutet.",
          nl: "Fossiellocaties in China en Argentinië hebben pterosauriër nestkolonies onthuld met georganiseerde eierregelingen en bewijs van volwassenen die terugkeerden naar dezelfde nestgebieden, wat ouderlijke zorggedragingen suggereert."
        }
      },
      {
        question: {
          en: "How did pterosaur flight capabilities compare across different species?",
          es: "¿Cómo se comparaban las capacidades de vuelo de los pterosaurios entre diferentes especies?",
          de: "Wie verglichen sich die Flugfähigkeiten der Pterosaurier zwischen verschiedenen Arten?",
          nl: "Hoe vergeleken pterosauriër vliegcapaciteiten tussen verschillende soorten?"
        },
        options: [
          { en: "Highly variable: from agile fliers to soaring specialists", es: "Muy variables: desde voladores ágiles hasta especialistas en planeo", de: "Sehr variabel: von wendigen Fliegern zu Segelspezialisten", nl: "Zeer variabel: van wendige vliegers tot zweefspecialisten" },
          { en: "All species had identical flight abilities", es: "Todas las especies tenían habilidades de vuelo idénticas", de: "Alle Arten hatten identische Flugfähigkeiten", nl: "Alle soorten hadden identieke vliegvaardigheden" },
          { en: "Only small species could fly well", es: "Solo las especies pequeñas podían volar bien", de: "Nur kleine Arten konnten gut fliegen", nl: "Alleen kleine soorten konden goed vliegen" },
          { en: "None could actually fly, only glide", es: "Ninguno podía realmente volar, solo planear", de: "Keiner konnte wirklich fliegen, nur gleiten", nl: "Geen kon werkelijk vliegen, alleen zweven" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs showed remarkable diversity in flight capabilities, from small agile insect-catchers to giant long-distance soarers, with wing shapes and body proportions adapted to their specific ecological niches.",
          es: "Los pterosaurios mostraron diversidad notable en capacidades de vuelo, desde pequeños cazadores ágiles de insectos hasta gigantes planeadores de larga distancia, con formas de alas y proporciones corporales adaptadas a sus nichos ecológicos específicos.",
          de: "Pterosaurier zeigten bemerkenswerte Vielfalt in Flugfähigkeiten, von kleinen wendigen Insektenjägern bis zu riesigen Langstrecken-Segelfliegern, mit Flügelformen und Körperproportionen, die an ihre spezifischen ökologischen Nischen angepasst waren.",
          nl: "Pterosauriërs toonden opmerkelijke diversiteit in vliegcapaciteiten, van kleine wendige insectenjagers tot reuze lange-afstand zwevers, met vleugelvormen en lichaamsverhouding aangepast aan hun specifieke ecologische niches."
        }
      },
      {
        question: {
          en: "What was the relationship between pterosaurs and early bird evolution?",
          es: "¿Cuál era la relación entre los pterosaurios y la evolución temprana de las aves?",
          de: "Was war die Beziehung zwischen Pterosauriern und der frühen Vogelevolution?",
          nl: "Wat was de relatie tussen pterosauriërs en vroege vogelevolutie?"
        },
        options: [
          { en: "They coexisted and competed for similar ecological niches", es: "Coexistieron y compitieron por nichos ecológicos similares", de: "Sie koexistierten und konkurrierten um ähnliche ökologische Nischen", nl: "Ze bestonden samen en concurreerden voor vergelijkbare ecologische niches" },
          { en: "Pterosaurs evolved directly into birds", es: "Los pterosaurios evolucionaron directamente a aves", de: "Pterosaurier entwickelten sich direkt zu Vögeln", nl: "Pterosauriërs evolueerden direct tot vogels" },
          { en: "Birds evolved before pterosaurs", es: "Las aves evolucionaron antes que los pterosaurios", de: "Vögel entwickelten sich vor Pterosauriern", nl: "Vogels evolueerden voor pterosauriërs" },
          { en: "They never existed at the same time", es: "Nunca existieron al mismo tiempo", de: "Sie existierten nie zur gleichen Zeit", nl: "Ze bestonden nooit tegelijkertijd" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs and early birds coexisted for over 100 million years, with both groups occupying aerial niches but developing different flight solutions and ecological specializations throughout the Mesozoic.",
          es: "Los pterosaurios y las aves tempranas coexistieron durante más de 100 millones de años, con ambos grupos ocupando nichos aéreos pero desarrollando diferentes soluciones de vuelo y especializaciones ecológicas a lo largo del Mesozoico.",
          de: "Pterosaurier und frühe Vögel koexistierten über 100 Millionen Jahre, wobei beide Gruppen Luftnischen besetzten, aber verschiedene Fluglösungen und ökologische Spezialisierungen während des Mesozoikums entwickelten.",
          nl: "Pterosauriërs en vroege vogels bestonden samen gedurende meer dan 100 miljoen jaar, waarbij beide groepen luchtniches bezetten maar verschillende vliegoplossingen en ecologische specialisaties ontwikkelden gedurende het Mesozoïcum."
        }
      },
      {
        question: {
          en: "Which pterosaur group was characterized by filter-feeding adaptations?",
          es: "¿Qué grupo de pterosaurios se caracterizó por adaptaciones de alimentación por filtración?",
          de: "Welche Pterosaurier-Gruppe war durch Filterfütterungs-Anpassungen charakterisiert?",
          nl: "Welke pterosauriër groep werd gekenmerkt door filtervoedingsaanpassingen?"
        },
        options: [
          { en: "None - no pterosaurs were filter feeders", es: "Ninguno - ningún pterosaurio era alimentador por filtración", de: "Keine - keine Pterosaurier waren Filtrierer", nl: "Geen - geen pterosauriërs waren filtervoeders" },
          { en: "Pteranodon and relatives", es: "Pteranodon y parientes", de: "Pteranodon und Verwandte", nl: "Pteranodon en verwanten" },
          { en: "Azhdarchids", es: "Azdarquidos", de: "Azhdarchiden", nl: "Azhdarchiden" },
          { en: "Rhamphorhynchoids", es: "Ramphorínquidos", de: "Rhamphorhynchoidea", nl: "Rhamphorhynchoiden" }
        ],
        correct: 0,
        explanation: {
          en: "Despite their aquatic lifestyle, no pterosaurs are known to have evolved filter-feeding adaptations like those seen in baleen whales or flamingos. They relied on other feeding strategies like piscivory and terrestrial hunting.",
          es: "A pesar de su estilo de vida acuático, no se conoce que ningún pterosaurio haya evolucionado adaptaciones de alimentación por filtración como las vistas en ballenas barbadas o flamencos. Dependían de otras estrategias de alimentación como piscivoría y caza terrestre.",
          de: "Trotz ihrer aquatischen Lebensweise entwickelten keine Pterosaurier Filterfütterungs-Anpassungen wie sie bei Bartenwalen oder Flamingos zu sehen sind. Sie verließen sich auf andere Ernährungsstrategien wie Fischfang und terrestrische Jagd.",
          nl: "Ondanks hun aquatische levensstijl ontwikkelden geen pterosauriërs filtervoedings aanpassingen zoals gezien bij baleinwalvissen of flamingo's. Ze vertrouwden op andere voedingsstrategieën zoals visserij en terrestrische jacht."
        }
      },
      {
        question: {
          en: "What anatomical feature suggests pterosaurs had excellent eyesight?",
          es: "¿Qué característica anatómica sugiere que los pterosaurios tenían excelente vista?",
          de: "Welches anatomische Merkmal deutet darauf hin, dass Pterosaurier ausgezeichnete Sehkraft hatten?",
          nl: "Welk anatomisch kenmerk suggereert dat pterosauriërs uitstekend zicht hadden?"
        },
        options: [
          { en: "Large brain regions dedicated to visual processing", es: "Grandes regiones cerebrales dedicadas al procesamiento visual", de: "Große Gehirnregionen für visuelle Verarbeitung", nl: "Grote hersengebieden gewijd aan visuele verwerking" },
          { en: "Multiple eyes like insects", es: "Múltiples ojos como insectos", de: "Mehrere Augen wie Insekten", nl: "Meerdere ogen zoals insecten" },
          { en: "Eyes that could rotate 360 degrees", es: "Ojos que podían rotar 360 grados", de: "Augen die 360 Grad rotieren konnten", nl: "Ogen die 360 graden konden roteren" },
          { en: "Eyes located on the bottom of their heads", es: "Ojos ubicados en la parte inferior de sus cabezas", de: "Augen am Kopfboden", nl: "Ogen aan de onderkant van hun hoofden" }
        ],
        correct: 0,
        explanation: {
          en: "CT scans of pterosaur skulls reveal enlarged optic lobes and brain regions associated with visual processing, indicating they had keen eyesight essential for aerial hunting and navigation.",
          es: "Las tomografías de cráneos de pterosaurios revelan lóbulos ópticos agrandados y regiones cerebrales asociadas con el procesamiento visual, indicando que tenían vista aguda esencial para la caza aérea y navegación.",
          de: "CT-Scans von Pterosaurier-Schädeln zeigen vergrößerte Optiklappen und Gehirnregionen für visuelle Verarbeitung, was darauf hindeutet, dass sie scharfe Sehkraft für Luftjagd und Navigation hatten.",
          nl: "CT-scans van pterosauriër schedels onthullen vergrote optische lobben en hersengebieden geassocieerd met visuele verwerking, wat aangeeft dat ze scherp zicht hadden essentieel voor luchtjacht en navigatie."
        }
      },
      {
        question: {
          en: "How did the wing structure of pterosaurs compare to modern hang gliders?",
          es: "¿Cómo se comparaba la estructura del ala de los pterosaurios con los planeadores modernos?",
          de: "Wie verglich sich die Flügelstruktur von Pterosauriern mit modernen Hängegleitern?",
          nl: "Hoe vergeleken de vleugelstructuur van pterosauriërs met moderne deltavliegers?"
        },
        options: [
          { en: "Remarkably similar - both use fabric membranes supported by rigid framework", es: "Notablemente similar - ambos usan membranas de tela sostenidas por un marco rígido", de: "Bemerkenswert ähnlich - beide nutzen Stoffmembranen mit starrem Rahmen", nl: "Opmerkelijk vergelijkbaar - beide gebruiken stoffen membranen ondersteund door stijf raamwerk" },
          { en: "Completely different - pterosaurs used feathers", es: "Completamente diferente - los pterosaurios usaban plumas", de: "Völlig anders - Pterosaurier nutzten Federn", nl: "Compleet anders - pterosauriërs gebruikten veren" },
          { en: "Pterosaurs had rigid wings like airplane wings", es: "Los pterosaurios tenían alas rígidas como alas de avión", de: "Pterosaurier hatten starre Flügel wie Flugzeugflügel", nl: "Pterosauriërs hadden stijve vleugels zoals vliegtuigvleugels" },
          { en: "Pterosaurs could only glide downward", es: "Los pterosaurios solo podían planear hacia abajo", de: "Pterosaurier konnten nur nach unten gleiten", nl: "Pterosauriërs konden alleen naar beneden zweven" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaur wing structure was remarkably similar to modern hang gliders, with a flexible membrane stretched over a rigid skeletal framework, allowing for efficient soaring and controlled flight.",
          es: "La estructura del ala de pterosaurio era notablemente similar a los planeadores modernos, con una membrana flexible estirada sobre un marco esquelético rígido, permitiendo planeo eficiente y vuelo controlado.",
          de: "Die Pterosaurier-Flügelstruktur war bemerkenswert ähnlich modernen Hängegleitern, mit einer flexiblen Membran über einem starren Skelettrahmen, was effizientes Gleiten und kontrollierten Flug ermöglichte.",
          nl: "Pterosauriër vleugelstructuur was opmerkelijk vergelijkbaar met moderne deltavliegers, met een flexibel membraan gespannen over een stijf skeletraamwerk, wat efficiënt zweven en gecontroleerde vlucht mogelijk maakte."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();