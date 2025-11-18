// Quiz Level 8: Street Food - Gourmet Street Food & Food Trucks
(function() {
  "use strict";

  const level8 = {
    name: {
      en: "Gourmet Street Food & Food Trucks",
      es: "Comida Callejera Gourmet y Food Trucks",
      de: "Gourmet-Straßenessen & Food Trucks",
      nl: "Gourmet Straatvoedsel & Foodtrucks"
    },
    questions: [
      {
        question: {
          en: "What distinguishes gourmet street food from traditional street food?",
          es: "¿Qué distingue la comida callejera gourmet de la comida callejera tradicional?",
          de: "Was unterscheidet Gourmet-Straßenessen von traditionellem Straßenessen?",
          nl: "Wat onderscheidt gourmet straatvoedsel van traditioneel straatvoedsel?"
        },
        options: [
          { en: "Higher prices only", es: "Solo precios más altos", de: "Nur höhere Preise", nl: "Alleen hogere prijzen" },
          { en: "Premium ingredients, refined techniques, and chef-driven creativity", es: "Ingredientes premium, técnicas refinadas y creatividad dirigida por chefs", de: "Premium-Zutaten, raffinierte Techniken und Chef-getriebene Kreativität", nl: "Premium ingrediënten, verfijnde technieken en chef-gedreven creativiteit" },
          { en: "Larger portion sizes", es: "Tamaños de porción más grandes", de: "Größere Portionsgrößen", nl: "Grotere portiegroottes" },
          { en: "Different locations only", es: "Solo ubicaciones diferentes", de: "Nur verschiedene Standorte", nl: "Alleen verschillende locaties" }
        ],
        correct: 1,
        explanation: {
          en: "Gourmet street food features premium ingredients, professional culinary techniques, innovative presentations, and chef-driven creativity while maintaining the accessibility and casual nature of street food.",
          es: "La comida callejera gourmet presenta ingredientes premium, técnicas culinarias profesionales, presentaciones innovadoras y creatividad dirigida por chefs mientras mantiene la accesibilidad y naturaleza casual de la comida callejera.",
          de: "Gourmet-Straßenessen zeichnet sich durch Premium-Zutaten, professionelle Kochtechniken, innovative Präsentationen und Chef-getriebene Kreativität aus, während es die Zugänglichkeit und ungezwungene Natur des Straßenessens beibehält.",
          nl: "Gourmet straatvoedsel kenmerkt zich door premium ingrediënten, professionele culinaire technieken, innovatieve presentaties en chef-gedreven creativiteit terwijl de toegankelijkheid en casual aard van straatvoedsel behouden blijft."
        }
      },
      {
        question: {
          en: "What role do celebrity chefs play in the gourmet street food movement?",
          es: "¿Qué papel juegan los chefs famosos en el movimiento de comida callejera gourmet?",
          de: "Welche Rolle spielen prominente Köche in der Gourmet-Straßenessen-Bewegung?",
          nl: "Welke rol spelen beroemde chefs in de gourmet straatvoedsel beweging?"
        },
        options: [
          { en: "No involvement in street food", es: "Sin participación en comida callejera", de: "Keine Beteiligung am Straßenessen", nl: "Geen betrokkenheid bij straatvoedsel" },
          { en: "Legitimize and elevate street food through high-profile food trucks and pop-ups", es: "Legitiman y elevan la comida callejera a través de food trucks de alto perfil y pop-ups", de: "Legitimieren und erheben Straßenessen durch hochkarätige Food Trucks und Pop-ups", nl: "Legitimeren en verheffen straatvoedsel door hoogwaardige foodtrucks en pop-ups" },
          { en: "Only serve in restaurants", es: "Solo sirven en restaurantes", de: "Servieren nur in Restaurants", nl: "Serveren alleen in restaurants" },
          { en: "Decrease food quality", es: "Disminuyen la calidad de la comida", de: "Verringern die Lebensmittelqualität", nl: "Verminderen voedselkwaliteit" }
        ],
        correct: 1,
        explanation: {
          en: "Celebrity chefs have legitimized and elevated street food by operating high-profile food trucks, creating innovative street food concepts, and bringing professional culinary standards to mobile dining.",
          es: "Los chefs famosos han legitimado y elevado la comida callejera operando food trucks de alto perfil, creando conceptos innovadores de comida callejera y trayendo estándares culinarios profesionales a la comida móvil.",
          de: "Prominente Köche haben Straßenessen legitimiert und erhoben, indem sie hochkarätige Food Trucks betreiben, innovative Straßenessen-Konzepte schaffen und professionelle kulinarische Standards in die mobile Gastronomie bringen.",
          nl: "Beroemde chefs hebben straatvoedsel gelegitimeerd en verheven door hoogwaardige foodtrucks te runnen, innovatieve straatvoedsel concepten te creëren en professionele culinaire standaarden naar mobiel dineren te brengen."
        }
      },
      {
        question: {
          en: "What is 'farm-to-truck' in gourmet street food?",
          es: "¿Qué es 'farm-to-truck' en comida callejera gourmet?",
          de: "Was ist 'Farm-to-Truck' bei Gourmet-Straßenessen?",
          nl: "Wat is 'farm-to-truck' bij gourmet straatvoedsel?"
        },
        options: [
          { en: "Transportation method only", es: "Solo método de transporte", de: "Nur Transportmethode", nl: "Alleen transportmethode" },
          { en: "Using locally sourced, fresh ingredients directly from farms", es: "Usar ingredientes locales y frescos directamente de granjas", de: "Lokale, frische Zutaten direkt von Bauernhöfen verwenden", nl: "Het gebruik van lokaal geproduceerde, verse ingrediënten direct van boerderijen" },
          { en: "Selling only vegetables", es: "Vender solo verduras", de: "Nur Gemüse verkaufen", nl: "Alleen groenten verkopen" },
          { en: "Farming on the truck", es: "Agricultura en el camión", de: "Landwirtschaft auf dem LKW", nl: "Boeren op de vrachtwagen" }
        ],
        correct: 1,
        explanation: {
          en: "Farm-to-truck emphasizes using locally sourced, seasonal, fresh ingredients directly from farms, supporting local agriculture while providing higher quality food with known provenance.",
          es: "Farm-to-truck enfatiza usar ingredientes locales, estacionales y frescos directamente de granjas, apoyando la agricultura local mientras proporciona comida de mayor calidad con procedencia conocida.",
          de: "Farm-to-Truck betont die Verwendung lokaler, saisonaler, frischer Zutaten direkt von Bauernhöfen, unterstützt die lokale Landwirtschaft und bietet hochwertigere Lebensmittel mit bekannter Herkunft.",
          nl: "Farm-to-truck benadrukt het gebruik van lokaal geproduceerde, seizoensgebonden, verse ingrediënten direct van boerderijen, ondersteunt lokale landbouw terwijl het voedsel van hogere kwaliteit biedt met bekende herkomst."
        }
      },
      {
        question: {
          en: "What advanced cooking techniques are used in gourmet food trucks?",
          es: "¿Qué técnicas de cocina avanzadas se usan en food trucks gourmet?",
          de: "Welche fortgeschrittenen Kochtechniken werden in Gourmet-Food-Trucks verwendet?",
          nl: "Welke geavanceerde kooktechnieken worden gebruikt in gourmet foodtrucks?"
        },
        options: [
          { en: "Only basic frying", es: "Solo freír básico", de: "Nur einfaches Braten", nl: "Alleen basis frituren" },
          { en: "Sous vide, molecular gastronomy, and precision temperature cooking", es: "Sous vide, gastronomía molecular y cocina de temperatura de precisión", de: "Sous Vide, Molekulargastronomie und Präzisions-Temperaturkochen", nl: "Sous vide, moleculaire gastronomie en precisie temperatuur koken" },
          { en: "Microwave cooking only", es: "Solo cocina de microondas", de: "Nur Mikrowellen-Kochen", nl: "Alleen magnetron koken" },
          { en: "No cooking techniques", es: "Sin técnicas de cocina", de: "Keine Kochtechniken", nl: "Geen kooktechnieken" }
        ],
        correct: 1,
        explanation: {
          en: "Gourmet food trucks employ advanced techniques like sous vide for precise cooking, molecular gastronomy for innovative presentations, and precision temperature control to achieve restaurant-quality results in mobile kitchens.",
          es: "Los food trucks gourmet emplean técnicas avanzadas como sous vide para cocina precisa, gastronomía molecular para presentaciones innovadoras y control de temperatura de precisión para lograr resultados de calidad de restaurante en cocinas móviles.",
          de: "Gourmet-Food-Trucks setzen fortgeschrittene Techniken wie Sous Vide für präzises Kochen, Molekulargastronomie für innovative Präsentationen und Präzisions-Temperaturkontrolle ein, um Restaurant-Qualität in mobilen Küchen zu erreichen.",
          nl: "Gourmet foodtrucks gebruiken geavanceerde technieken zoals sous vide voor precisie koken, moleculaire gastronomie voor innovatieve presentaties, en precisie temperatuurcontrole om restaurant-kwaliteit resultaten te bereiken in mobiele keukens."
        }
      },
      {
        question: {
          en: "What is the significance of food truck design in gourmet operations?",
          es: "¿Cuál es la importancia del diseño de food trucks en operaciones gourmet?",
          de: "Was ist die Bedeutung des Food-Truck-Designs in Gourmet-Betrieben?",
          nl: "Wat is de betekenis van foodtruck ontwerp in gourmet operaties?"
        },
        options: [
          { en: "Appearance doesn't matter", es: "La apariencia no importa", de: "Aussehen ist unwichtig", nl: "Uiterlijk doet er niet toe" },
          { en: "Professional aesthetics, efficient workflow, and brand identity create customer appeal and operational efficiency", es: "Estética profesional, flujo de trabajo eficiente e identidad de marca crean atractivo para el cliente y eficiencia operacional", de: "Professionelle Ästhetik, effizienter Arbeitsablauf und Markenidentität schaffen Kundenanziehung und operative Effizienz", nl: "Professionele esthetiek, efficiënte workflow en merkidentiteit creëren klantaantrekkingskracht en operationele efficiëntie" },
          { en: "Simple design is always best", es: "El diseño simple siempre es mejor", de: "Einfaches Design ist immer am besten", nl: "Eenvoudig ontwerp is altijd het beste" },
          { en: "Only color matters", es: "Solo el color importa", de: "Nur die Farbe ist wichtig", nl: "Alleen kleur is belangrijk" }
        ],
        correct: 1,
        explanation: {
          en: "Gourmet food truck design integrates professional aesthetics, efficient kitchen workflow, clear brand identity, and Instagram-worthy visuals to attract customers and support high-quality food preparation in limited space.",
          es: "El diseño de food trucks gourmet integra estética profesional, flujo de trabajo eficiente de cocina, identidad de marca clara y visuales dignos de Instagram para atraer clientes y apoyar preparación de comida de alta calidad en espacio limitado.",
          de: "Gourmet-Food-Truck-Design integriert professionelle Ästhetik, effizienten Küchenarbeitsablauf, klare Markenidentität und Instagram-würdige Visuals, um Kunden anzuziehen und hochwertige Lebensmittelzubereitung auf begrenztem Raum zu unterstützen.",
          nl: "Gourmet foodtruck ontwerp integreert professionele esthetiek, efficiënte keuken workflow, duidelijke merkidentiteit en Instagram-waardige visuals om klanten aan te trekken en hoogwaardige voedselbereiding in beperkte ruimte te ondersteunen."
        }
      },
      {
        question: {
          en: "How do gourmet food trucks price their offerings vs traditional street food?",
          es: "¿Cómo fijan precios los food trucks gourmet sus ofertas comparado con comida callejera tradicional?",
          de: "Wie bepreisen Gourmet-Food-Trucks ihre Angebote im Vergleich zu traditionellem Straßenessen?",
          nl: "Hoe prijzen gourmet foodtrucks hun aanbod in vergelijking met traditioneel straatvoedsel?"
        },
        options: [
          { en: "Same prices as traditional street food", es: "Mismos precios que comida callejera tradicional", de: "Gleiche Preise wie traditionelles Straßenessen", nl: "Dezelfde prijzen als traditioneel straatvoedsel" },
          { en: "Premium pricing reflecting higher ingredient costs and chef expertise", es: "Precios premium reflejando costos más altos de ingredientes y experiencia de chefs", de: "Premium-Preise, die höhere Zutatenkosten und Chef-Expertise widerspiegeln", nl: "Premium prijzen die hogere ingrediënten kosten en chef expertise weerspiegelen" },
          { en: "Always cheaper", es: "Siempre más barato", de: "Immer billiger", nl: "Altijd goedkoper" },
          { en: "No pricing strategy", es: "Sin estrategia de precios", de: "Keine Preisstrategie", nl: "Geen prijsstrategie" }
        ],
        correct: 1,
        explanation: {
          en: "Gourmet food trucks typically charge premium prices to reflect higher-quality ingredients, professional culinary training, sophisticated techniques, and elevated presentations while remaining more affordable than fine dining restaurants.",
          es: "Los food trucks gourmet típicamente cobran precios premium para reflejar ingredientes de mayor calidad, entrenamiento culinario profesional, técnicas sofisticadas y presentaciones elevadas mientras permanecen más asequibles que restaurantes de alta cocina.",
          de: "Gourmet-Food-Trucks verlangen normalerweise Premium-Preise, um hochwertige Zutaten, professionelle kulinarische Ausbildung, raffinierte Techniken und gehobene Präsentationen zu reflektieren, während sie erschwinglicher als gehobene Restaurants bleiben.",
          nl: "Gourmet foodtrucks rekenen meestal premium prijzen om ingrediënten van hogere kwaliteit, professionele culinaire training, geavanceerde technieken en verheven presentaties te weerspiegelen terwijl ze betaalbaarder blijven dan fine dining restaurants."
        }
      },
      {
        question: {
          en: "What is 'pop-up' dining in the context of gourmet street food?",
          es: "¿Qué es la comida 'pop-up' en el contexto de comida callejera gourmet?",
          de: "Was ist 'Pop-up'-Dining im Kontext von Gourmet-Straßenessen?",
          nl: "Wat is 'pop-up' dineren in de context van gourmet straatvoedsel?"
        },
        options: [
          { en: "Permanent restaurant locations", es: "Ubicaciones permanentes de restaurante", de: "Permanente Restaurant-Standorte", nl: "Permanente restaurant locaties" },
          { en: "Temporary, exclusive dining experiences in unique locations", es: "Experiencias gastronómicas temporales y exclusivas en ubicaciones únicas", de: "Temporäre, exklusive Essenserlebnisse an einzigartigen Orten", nl: "Tijdelijke, exclusieve eetervaring op unieke locaties" },
          { en: "Fast food chains", es: "Cadenas de comida rápida", de: "Fast-Food-Ketten", nl: "Fastfood ketens" },
          { en: "Home cooking", es: "Cocina casera", de: "Hausmannskost", nl: "Thuis koken" }
        ],
        correct: 1,
        explanation: {
          en: "Pop-up dining involves temporary, often exclusive dining experiences in unconventional locations, allowing chefs to experiment with concepts, test markets, and create buzz without long-term commitments.",
          es: "La comida pop-up involucra experiencias gastronómicas temporales, a menudo exclusivas en ubicaciones no convencionales, permitiendo a los chefs experimentar con conceptos, probar mercados y crear expectación sin compromisos a largo plazo.",
          de: "Pop-up-Dining beinhaltet temporäre, oft exklusive Essenserlebnisse an unkonventionellen Orten, die es Köchen ermöglichen, mit Konzepten zu experimentieren, Märkte zu testen und Aufmerksamkeit ohne langfristige Verpflichtungen zu schaffen.",
          nl: "Pop-up dineren behelst tijdelijke, vaak exclusieve eetervaring op onconventionele locaties, waardoor chefs kunnen experimenteren met concepten, markten kunnen testen en buzz kunnen creëren zonder langetermijnverbintenissen."
        }
      },
      {
        question: {
          en: "What equipment innovations enable gourmet cooking in food trucks?",
          es: "¿Qué innovaciones de equipo permiten cocina gourmet en food trucks?",
          de: "Welche Geräte-Innovationen ermöglichen Gourmet-Kochen in Food Trucks?",
          nl: "Welke uitrusting innovaties maken gourmet koken in foodtrucks mogelijk?"
        },
        options: [
          { en: "Only traditional equipment", es: "Solo equipo tradicional", de: "Nur traditionelle Ausrüstung", nl: "Alleen traditionele uitrusting" },
          { en: "Compact induction cooktops, immersion circulators, and space-efficient professional equipment", es: "Placas de inducción compactas, circuladores de inmersión y equipo profesional eficiente en espacio", de: "Kompakte Induktionskochplatten, Immersionszirkulatoren und platzsparende professionelle Geräte", nl: "Compacte inductiekookplaten, immersie circulators en ruimte-efficiënte professionele uitrusting" },
          { en: "Home kitchen appliances only", es: "Solo electrodomésticos de cocina doméstica", de: "Nur Haushaltsküchengeräte", nl: "Alleen huishoudelijke keukenapparatuur" },
          { en: "No special equipment needed", es: "No se necesita equipo especial", de: "Keine spezielle Ausrüstung erforderlich", nl: "Geen speciale uitrusting nodig" }
        ],
        correct: 1,
        explanation: {
          en: "Modern gourmet food trucks utilize compact induction cooktops for precise heat control, immersion circulators for sous vide cooking, conveyor ovens, and space-efficient professional equipment designed for mobile kitchens.",
          es: "Los food trucks gourmet modernos utilizan placas de inducción compactas para control preciso de calor, circuladores de inmersión para cocina sous vide, hornos de cinta transportadora y equipo profesional eficiente en espacio diseñado para cocinas móviles.",
          de: "Moderne Gourmet-Food-Trucks nutzen kompakte Induktionskochplatten für präzise Hitzekontrolle, Immersionszirkulatoren für Sous-Vide-Kochen, Förderbandöfen und platzsparende professionelle Geräte für mobile Küchen.",
          nl: "Moderne gourmet foodtrucks gebruiken compacte inductiekookplaten voor precieze warmtecontrole, immersie circulators voor sous vide koken, transportband ovens, en ruimte-efficiënte professionele uitrusting ontworpen voor mobiele keukens."
        }
      },
      {
        question: {
          en: "How do gourmet food trucks handle food presentation and plating?",
          es: "¿Cómo manejan los food trucks gourmet la presentación de comida y emplatado?",
          de: "Wie handhaben Gourmet-Food-Trucks Lebensmittelpräsentation und Anrichten?",
          nl: "Hoe hanteren gourmet foodtrucks voedsel presentatie en opmaak?"
        },
        options: [
          { en: "No attention to presentation", es: "Sin atención a la presentación", de: "Keine Aufmerksamkeit für Präsentation", nl: "Geen aandacht voor presentatie" },
          { en: "Instagram-worthy plating with artistic garnishes and premium disposable serviceware", es: "Emplatado digno de Instagram con guarniciones artísticas y vajilla desechable premium", de: "Instagram-würdiges Anrichten mit künstlerischen Garnierungen und Premium-Einweggeschirr", nl: "Instagram-waardig opdiening met artistieke garnering en premium wegwerp servies" },
          { en: "Simple paper wrapping only", es: "Solo envoltorio de papel simple", de: "Nur einfache Papierverpackung", nl: "Alleen eenvoudige papieren verpakking" },
          { en: "Presentation doesn't matter for street food", es: "La presentación no importa para comida callejera", de: "Präsentation ist für Straßenessen unwichtig", nl: "Presentatie doet er niet toe voor straatvoedsel" }
        ],
        correct: 1,
        explanation: {
          en: "Gourmet food trucks emphasize visual appeal with restaurant-quality plating, artistic garnishes, premium eco-friendly containers, and Instagram-worthy presentations that justify premium pricing and attract social media attention.",
          es: "Los food trucks gourmet enfatizan el atractivo visual con emplatado de calidad de restaurante, guarniciones artísticas, contenedores premium ecológicos y presentaciones dignas de Instagram que justifican precios premium y atraen atención en redes sociales.",
          de: "Gourmet-Food-Trucks betonen visuelle Anziehungskraft mit Restaurant-qualitäts Anrichtung, künstlerischen Garnierungen, Premium-umweltfreundlichen Behältern und Instagram-würdigen Präsentationen, die Premium-Preise rechtfertigen und Social-Media-Aufmerksamkeit anziehen.",
          nl: "Gourmet foodtrucks benadrukken visuele aantrekkingskracht met restaurant-kwaliteit opdiening, artistieke garnering, premium milieuvriendelijke containers, en Instagram-waardige presentaties die premium prijzen rechtvaardigen en sociale media aandacht aantrekken."
        }
      },
      {
        question: {
          en: "What is the role of social media in gourmet food truck success?",
          es: "¿Cuál es el papel de las redes sociales en el éxito de food trucks gourmet?",
          de: "Welche Rolle spielen soziale Medien für den Erfolg von Gourmet-Food-Trucks?",
          nl: "Wat is de rol van sociale media in gourmet foodtruck succes?"
        },
        options: [
          { en: "Minimal importance", es: "Importancia mínima", de: "Minimale Bedeutung", nl: "Minimaal belang" },
          { en: "Critical for location updates, visual marketing, and building brand community", es: "Crítico para actualizaciones de ubicación, marketing visual y construcción de comunidad de marca", de: "Kritisch für Standort-Updates, visuelles Marketing und Aufbau der Marken-Community", nl: "Cruciaal voor locatie updates, visuele marketing en het bouwen van merk gemeenschap" },
          { en: "Only for young customers", es: "Solo para clientes jóvenes", de: "Nur für junge Kunden", nl: "Alleen voor jonge klanten" },
          { en: "Negative impact only", es: "Solo impacto negativo", de: "Nur negative Auswirkungen", nl: "Alleen negatieve impact" }
        ],
        correct: 1,
        explanation: {
          en: "Social media is crucial for gourmet food trucks, enabling real-time location sharing, showcasing visually appealing food, building customer communities, creating buzz around limited offerings, and driving foot traffic through engagement.",
          es: "Las redes sociales son cruciales para food trucks gourmet, permitiendo compartir ubicación en tiempo real, mostrar comida visualmente atractiva, construir comunidades de clientes, crear expectación alrededor de ofertas limitadas y dirigir tráfico peatonal a través del engagement.",
          de: "Soziale Medien sind entscheidend für Gourmet-Food-Trucks, ermöglichen Echtzeit-Standort-Sharing, Präsentation visuell ansprechender Speisen, Aufbau von Kundencommunities, Schaffen von Aufmerksamkeit für limitierte Angebote und Generieren von Laufkundschaft durch Engagement.",
          nl: "Sociale media zijn cruciaal voor gourmet foodtrucks, waardoor real-time locatie delen mogelijk is, visueel aantrekkelijk voedsel wordt getoond, klantengemeenschappen worden opgebouwd, buzz wordt gecreëerd rond beperkte aanbiedingen, en voetgangersverkeer wordt aangetrokken door engagement."
        }
      },
      {
        question: {
          en: "What is 'ghost kitchen' or 'virtual restaurant' concept in mobile food service?",
          es: "¿Qué es el concepto de 'cocina fantasma' o 'restaurante virtual' en servicio de comida móvil?",
          de: "Was ist das 'Ghost Kitchen' oder 'Virtual Restaurant' Konzept im mobilen Food Service?",
          nl: "Wat is het 'ghost kitchen' of 'virtueel restaurant' concept in mobiele voedselservice?"
        },
        options: [
          { en: "Traditional dine-in restaurants", es: "Restaurantes tradicionales para cenar", de: "Traditionelle Restaurants zum Essen", nl: "Traditionele dine-in restaurants" },
          { en: "Delivery-only kitchens operating multiple brand concepts from one location", es: "Cocinas solo de entrega operando múltiples conceptos de marca desde una ubicación", de: "Nur-Lieferküchen, die mehrere Markenkonzepte von einem Standort aus betreiben", nl: "Alleen-bezorg keukens die meerdere merkconcepten vanuit één locatie bedienen" },
          { en: "Haunted restaurants", es: "Restaurantes embrujados", de: "Spukrestaurants", nl: "Spookrestaurants" },
          { en: "Pop-up events only", es: "Solo eventos pop-up", de: "Nur Pop-up-Events", nl: "Alleen pop-up evenementen" }
        ],
        correct: 1,
        explanation: {
          en: "Ghost kitchens are delivery-only operations that can run multiple virtual restaurant brands from a single kitchen space, maximizing efficiency and testing new concepts without physical storefronts.",
          es: "Las cocinas fantasma son operaciones solo de entrega que pueden ejecutar múltiples marcas de restaurantes virtuales desde un solo espacio de cocina, maximizando la eficiencia y probando nuevos conceptos sin locales físicos.",
          de: "Ghost Kitchens sind reine Lieferoperationen, die mehrere virtuelle Restaurant-Marken aus einem einzigen Küchenraum betreiben können, die Effizienz maximieren und neue Konzepte ohne physische Ladenlokale testen.",
          nl: "Ghost keukens zijn alleen-bezorg operaties die meerdere virtuele restaurant merken kunnen runnen vanuit één keukenruimte, efficiëntie maximaliseren en nieuwe concepten testen zonder fysieke winkelpanden."
        }
      },
      {
        question: {
          en: "How do gourmet food trucks approach menu development differently?",
          es: "¿Cómo abordan los food trucks gourmet el desarrollo de menú de manera diferente?",
          de: "Wie gehen Gourmet-Food-Trucks anders an die Menüentwicklung heran?",
          nl: "Hoe benaderen gourmet foodtrucks menu ontwikkeling anders?"
        },
        options: [
          { en: "Copy existing street food menus", es: "Copiar menús existentes de comida callejera", de: "Bestehende Straßenessen-Menüs kopieren", nl: "Bestaande straatvoedsel menu's kopiëren" },
          { en: "Seasonal menus, signature dishes, and limited-time offerings with professional culinary development", es: "Menús estacionales, platos estrella y ofertas por tiempo limitado con desarrollo culinario profesional", de: "Saisonale Menüs, Signature-Gerichte und zeitlich begrenzte Angebote mit professioneller kulinarischer Entwicklung", nl: "Seizoensgebonden menu's, signature gerechten en beperkte tijd aanbiedingen met professionele culinaire ontwikkeling" },
          { en: "Fixed menu never changes", es: "Menú fijo nunca cambia", de: "Festes Menü ändert sich nie", nl: "Vast menu verandert nooit" },
          { en: "Random food selections", es: "Selecciones aleatorias de comida", de: "Zufällige Essensauswahl", nl: "Willekeurige voedsel selecties" }
        ],
        correct: 1,
        explanation: {
          en: "Gourmet food trucks employ professional menu development with seasonal ingredients, signature dishes that showcase chef skills, limited-time offerings to create urgency, and careful consideration of mobile kitchen constraints.",
          es: "Los food trucks gourmet emplean desarrollo profesional de menú con ingredientes estacionales, platos estrella que muestran habilidades del chef, ofertas por tiempo limitado para crear urgencia y consideración cuidadosa de limitaciones de cocina móvil.",
          de: "Gourmet-Food-Trucks setzen professionelle Menüentwicklung mit saisonalen Zutaten, Signature-Gerichten, die Kochkünste zeigen, zeitlich begrenzten Angeboten zur Dringlichkeitserzeugung und sorgfältiger Berücksichtigung mobiler Küchenbeschränkungen ein.",
          nl: "Gourmet foodtrucks gebruiken professionele menu ontwikkeling met seizoensgebonden ingrediënten, signature gerechten die chef vaardigheden tonen, beperkte tijd aanbiedingen om urgentie te creëren, en zorgvuldige overweging van mobiele keuken beperkingen."
        }
      },
      {
        question: {
          en: "What sustainability practices do gourmet food trucks often adopt?",
          es: "¿Qué prácticas de sostenibilidad adoptan a menudo los food trucks gourmet?",
          de: "Welche Nachhaltigkeitspraktiken übernehmen Gourmet-Food-Trucks häufig?",
          nl: "Welke duurzaamheidspraktijken nemen gourmet foodtrucks vaak aan?"
        },
        options: [
          { en: "No sustainability focus", es: "Sin enfoque en sostenibilidad", de: "Kein Fokus auf Nachhaltigkeit", nl: "Geen focus op duurzaamheid" },
          { en: "Eco-friendly packaging, local sourcing, and waste reduction programs", es: "Empaques ecológicos, abastecimiento local y programas de reducción de residuos", de: "Umweltfreundliche Verpackungen, lokale Beschaffung und Abfallreduzierungsprogramme", nl: "Milieuvriendelijke verpakking, lokale inkoop en afvalvermindering programma's" },
          { en: "Only use plastic", es: "Solo usar plástico", de: "Nur Plastik verwenden", nl: "Alleen plastic gebruiken" },
          { en: "Ignore environmental concerns", es: "Ignorar preocupaciones ambientales", de: "Umweltbedenken ignorieren", nl: "Milieuzorgen negeren" }
        ],
        correct: 1,
        explanation: {
          en: "Many gourmet food trucks prioritize sustainability through biodegradable packaging, local ingredient sourcing, composting programs, solar power, and minimal waste practices to appeal to environmentally conscious consumers.",
          es: "Muchos food trucks gourmet priorizan la sostenibilidad a través de empaques biodegradables, abastecimiento de ingredientes locales, programas de compostaje, energía solar y prácticas de residuos mínimos para atraer consumidores conscientes del medio ambiente.",
          de: "Viele Gourmet-Food-Trucks priorisieren Nachhaltigkeit durch biologisch abbaubare Verpackungen, lokale Zutatenbe­schaffung, Kompostierungsprogramme, Solarstrom und minimale Abfallpraktiken, um umweltbewusste Verbraucher anzusprechen.",
          nl: "Veel gourmet foodtrucks geven prioriteit aan duurzaamheid door biologisch afbreekbare verpakking, lokale ingrediënten inkoop, compostering programma's, zonne-energie, en minimale afval praktijken om milieubewuste consumenten aan te spreken."
        }
      },
      {
        question: {
          en: "What challenges do gourmet food trucks face vs traditional ones?",
          es: "¿Qué desafíos enfrentan los food trucks gourmet comparados con los tradicionales?",
          de: "Welche Herausforderungen haben Gourmet-Food-Trucks im Vergleich zu traditionellen?",
          nl: "Welke uitdagingen ondervinden gourmet foodtrucks vergeleken met traditionele?"
        },
        options: [
          { en: "No additional challenges", es: "Sin desafíos adicionales", de: "Keine zusätzlichen Herausforderungen", nl: "Geen extra uitdagingen" },
          { en: "Higher ingredient costs, complex preparation, equipment constraints, and customer expectations", es: "Costos más altos de ingredientes, preparación compleja, limitaciones de equipo y expectativas del cliente", de: "Höhere Zutatenkosten, komplexe Zubereitung, Gerätebeschränkungen und Kundenerwartungen", nl: "Hogere ingrediënten kosten, complexe bereiding, uitrusting beperkingen en klant verwachtingen" },
          { en: "Lower costs only", es: "Solo costos menores", de: "Nur niedrigere Kosten", nl: "Alleen lagere kosten" },
          { en: "Easier operations", es: "Operaciones más fáciles", de: "Einfachere Operationen", nl: "Makkelijkere operaties" }
        ],
        correct: 1,
        explanation: {
          en: "Gourmet food trucks face higher ingredient costs, more complex preparation requiring skilled staff, space constraints for advanced equipment, elevated customer expectations, and need to justify premium pricing through consistent quality.",
          es: "Los food trucks gourmet enfrentan costos más altos de ingredientes, preparación más compleja requiriendo personal especializado, limitaciones de espacio para equipo avanzado, expectativas elevadas del cliente y necesidad de justificar precios premium a través de calidad consistente.",
          de: "Gourmet-Food-Trucks stehen vor höheren Zutatenkosten, komplexerer Zubereitung, die qualifiziertes Personal erfordert, Platzbeschränkungen für fortgeschrittene Ausrüstung, erhöhten Kundenerwartungen und der Notwendigkeit, Premium-Preise durch konsistente Qualität zu rechtfertigen.",
          nl: "Gourmet foodtrucks ondervinden hogere ingrediënten kosten, complexere bereiding die geschoold personeel vereist, ruimte beperkingen voor geavanceerde uitrusting, verhoogde klant verwachtingen, en de behoefte om premium prijzen te rechtvaardigen door consistente kwaliteit."
        }
      },
      {
        question: {
          en: "How do gourmet food trucks collaborate with other culinary businesses?",
          es: "¿Cómo colaboran los food trucks gourmet con otros negocios culinarios?",
          de: "Wie arbeiten Gourmet-Food-Trucks mit anderen kulinarischen Unternehmen zusammen?",
          nl: "Hoe werken gourmet foodtrucks samen met andere culinaire bedrijven?"
        },
        options: [
          { en: "Avoid all collaborations", es: "Evitar todas las colaboraciones", de: "Alle Kooperationen vermeiden", nl: "Alle samenwerkingen vermijden" },
          { en: "Partner with local breweries, farms, and restaurants for events and ingredient sourcing", es: "Asociarse con cervecerías locales, granjas y restaurantes para eventos y abastecimiento de ingredientes", de: "Partnerschaften mit lokalen Brauereien, Bauernhöfen und Restaurants für Events und Zutatenbe­schaffung", nl: "Samenwerken met lokale brouwerijen, boerderijen en restaurants voor evenementen en ingrediënten inkoop" },
          { en: "Only compete with others", es: "Solo competir con otros", de: "Nur mit anderen konkurrieren", nl: "Alleen concurreren met anderen" },
          { en: "Work independently always", es: "Trabajar independientemente siempre", de: "Immer unabhängig arbeiten", nl: "Altijd onafhankelijk werken" }
        ],
        correct: 1,
        explanation: {
          en: "Gourmet food trucks often collaborate with local breweries for beer pairing events, partner with farms for ingredient sourcing, work with restaurants for pop-up events, and participate in culinary festivals to expand reach and credibility.",
          es: "Los food trucks gourmet a menudo colaboran con cervecerías locales para eventos de maridaje de cerveza, se asocian con granjas para abastecimiento de ingredientes, trabajan con restaurantes para eventos pop-up y participan en festivales culinarios para expandir alcance y credibilidad.",
          de: "Gourmet-Food-Trucks arbeiten oft mit lokalen Brauereien für Bier-Pairing-Events zusammen, partnern mit Bauernhöfen für Zutatenbe­schaffung, arbeiten mit Restaurants für Pop-up-Events und nehmen an kulinarischen Festivals teil, um Reichweite und Glaubwürdigkeit zu erweitern.",
          nl: "Gourmet foodtrucks werken vaak samen met lokale brouwerijen voor bier pairing evenementen, partneren met boerderijen voor ingrediënten inkoop, werken met restaurants voor pop-up evenementen, en nemen deel aan culinaire festivals om bereik en geloofwaardigheid uit te breiden."
        }
      },
      {
        question: {
          en: "What technology integration is common in modern gourmet food trucks?",
          es: "¿Qué integración de tecnología es común en food trucks gourmet modernos?",
          de: "Welche Technologieintegration ist in modernen Gourmet-Food-Trucks üblich?",
          nl: "Welke technologie integratie is gewoon in moderne gourmet foodtrucks?"
        },
        options: [
          { en: "No technology used", es: "Sin tecnología usada", de: "Keine Technologie verwendet", nl: "Geen technologie gebruikt" },
          { en: "POS systems, GPS tracking, online ordering, and inventory management software", es: "Sistemas POS, rastreo GPS, pedidos en línea y software de gestión de inventario", de: "POS-Systeme, GPS-Tracking, Online-Bestellungen und Inventarmanagement-Software", nl: "POS systemen, GPS tracking, online bestellen, en voorraad management software" },
          { en: "Only cash registers", es: "Solo cajas registradoras", de: "Nur Registrierkassen", nl: "Alleen kassa's" },
          { en: "Avoid all modern technology", es: "Evitar toda tecnología moderna", de: "Alle moderne Technologie vermeiden", nl: "Alle moderne technologie vermijden" }
        ],
        correct: 1,
        explanation: {
          en: "Modern gourmet food trucks integrate advanced POS systems for payments, GPS tracking for location services, mobile apps for online ordering, inventory management software, and social media management tools for comprehensive business operations.",
          es: "Los food trucks gourmet modernos integran sistemas POS avanzados para pagos, rastreo GPS para servicios de ubicación, aplicaciones móviles para pedidos en línea, software de gestión de inventario y herramientas de gestión de redes sociales para operaciones comerciales comprehensivas.",
          de: "Moderne Gourmet-Food-Trucks integrieren fortgeschrittene POS-Systeme für Zahlungen, GPS-Tracking für Standortdienste, mobile Apps für Online-Bestellungen, Inventarmanagement-Software und Social-Media-Management-Tools für umfassende Geschäftsoperationen.",
          nl: "Moderne gourmet foodtrucks integreren geavanceerde POS systemen voor betalingen, GPS tracking voor locatie services, mobiele apps voor online bestellen, voorraad management software, en social media management tools voor uitgebreide bedrijfsoperaties."
        }
      },
      {
        question: {
          en: "What distinguishes a successful gourmet food truck brand?",
          es: "¿Qué distingue una marca exitosa de food truck gourmet?",
          de: "Was unterscheidet eine erfolgreiche Gourmet-Food-Truck-Marke?",
          nl: "Wat onderscheidt een succesvol gourmet foodtruck merk?"
        },
        options: [
          { en: "Low prices only", es: "Solo precios bajos", de: "Nur niedrige Preise", nl: "Alleen lage prijzen" },
          { en: "Consistent quality, unique concept, strong brand identity, and customer loyalty", es: "Calidad consistente, concepto único, identidad de marca fuerte y lealtad del cliente", de: "Konsistente Qualität, einzigartiges Konzept, starke Markenidentität und Kundentreue", nl: "Consistente kwaliteit, uniek concept, sterke merk identiteit, en klant loyaliteit" },
          { en: "Large menu selection", es: "Gran selección de menú", de: "Große Menüauswahl", nl: "Grote menu selectie" },
          { en: "Many locations", es: "Muchas ubicaciones", de: "Viele Standorte", nl: "Veel locaties" }
        ],
        correct: 1,
        explanation: {
          en: "Successful gourmet food truck brands are built on consistent quality, unique culinary concepts that differentiate from competitors, strong visual brand identity, excellent customer service, and building loyal customer communities through engagement.",
          es: "Las marcas exitosas de food trucks gourmet se construyen sobre calidad consistente, conceptos culinarios únicos que se diferencian de competidores, identidad visual de marca fuerte, excelente servicio al cliente y construcción de comunidades leales de clientes a través del engagement.",
          de: "Erfolgreiche Gourmet-Food-Truck-Marken basieren auf konsistenter Qualität, einzigartigen kulinarischen Konzepten, die sich von Konkurrenten unterscheiden, starker visueller Markenidentität, exzellentem Kundenservice und dem Aufbau treuer Kundencommunities durch Engagement.",
          nl: "Succesvolle gourmet foodtruck merken zijn gebouwd op consistente kwaliteit, unieke culinaire concepten die onderscheiden van concurrenten, sterke visuele merk identiteit, uitstekende klantenservice, en het bouwen van loyale klantengemeenschappen door engagement."
        }
      },
      {
        question: {
          en: "How has the gourmet food truck movement influenced traditional restaurants?",
          es: "¿Cómo ha influenciado el movimiento de food trucks gourmet los restaurantes tradicionales?",
          de: "Wie hat die Gourmet-Food-Truck-Bewegung traditionelle Restaurants beeinflusst?",
          nl: "Hoe heeft de gourmet foodtruck beweging traditionele restaurants beïnvloed?"
        },
        options: [
          { en: "No influence on restaurants", es: "Sin influencia en restaurantes", de: "Kein Einfluss auf Restaurants", nl: "Geen invloed op restaurants" },
          { en: "Encouraged casual fine dining, creative presentations, and social media marketing", es: "Fomentó la alta cocina casual, presentaciones creativas y marketing en redes sociales", de: "Förderte ungezwungene gehobene Küche, kreative Präsentationen und Social-Media-Marketing", nl: "Heeft casual fine dining aangemoedigd, creatieve presentaties en sociale media marketing" },
          { en: "Made restaurants more expensive", es: "Hizo los restaurantes más caros", de: "Machte Restaurants teurer", nl: "Maakte restaurants duurder" },
          { en: "Decreased restaurant quality", es: "Disminuyó la calidad de restaurantes", de: "Verringerte die Restaurantqualität", nl: "Verminderde restaurant kwaliteit" }
        ],
        correct: 1,
        explanation: {
          en: "The gourmet food truck movement has influenced traditional restaurants to adopt more casual fine dining approaches, emphasize visual food presentation for social media, embrace mobility concepts, and focus on chef personalities and brand storytelling.",
          es: "El movimiento de food trucks gourmet ha influenciado a restaurantes tradicionales a adoptar enfoques más casuales de alta cocina, enfatizar presentación visual de comida para redes sociales, abrazar conceptos de movilidad y enfocarse en personalidades de chefs y narrativa de marca.",
          de: "Die Gourmet-Food-Truck-Bewegung hat traditionelle Restaurants beeinflusst, ungezwungenere gehobene Küche-Ansätze zu übernehmen, visuelle Lebensmittelpräsentation für soziale Medien zu betonen, Mobilitätskonzepte zu umarmen und sich auf Chef-Persönlichkeiten und Marken-Storytelling zu konzentrieren.",
          nl: "De gourmet foodtruck beweging heeft traditionele restaurants beïnvloed om meer casual fine dining benaderingen aan te nemen, visuele voedsel presentatie voor sociale media te benadrukken, mobiliteit concepten te omarmen, en te focussen op chef persoonlijkheden en merk verhalen."
        }
      },
      {
        question: {
          en: "What distinguishes gourmet street food from traditional street food?",
          es: "¿Qué distingue la comida callejera gourmet de la comida callejera tradicional?",
          de: "Was unterscheidet Gourmet-Straßenessen von traditionellem Straßenessen?",
          nl: "Wat onderscheidt gourmet straatvoedsel van traditioneel straatvoedsel?"
        },
        options: [
          { en: "Higher prices only", es: "Solo precios más altos", de: "Nur höhere Preise", nl: "Alleen hogere prijzen" },
          { en: "Premium ingredients, refined techniques, and chef-driven creativity", es: "Ingredientes premium, técnicas refinadas y creatividad dirigida por chefs", de: "Premium-Zutaten, raffinierte Techniken und Chef-getriebene Kreativität", nl: "Premium ingrediënten, verfijnde technieken en chef-gedreven creativiteit" },
          { en: "Larger portion sizes", es: "Tamaños de porción más grandes", de: "Größere Portionsgrößen", nl: "Grotere portiegroottes" },
          { en: "Different locations only", es: "Solo ubicaciones diferentes", de: "Nur verschiedene Standorte", nl: "Alleen verschillende locaties" }
        ],
        correct: 1,
        explanation: {
          en: "Gourmet street food features premium ingredients, professional culinary techniques, innovative presentations, and chef-driven creativity while maintaining the accessibility and casual nature of street food.",
          es: "La comida callejera gourmet presenta ingredientes premium, técnicas culinarias profesionales, presentaciones innovadoras y creatividad dirigida por chefs mientras mantiene la accesibilidad y naturaleza casual de la comida callejera.",
          de: "Gourmet-Straßenessen zeichnet sich durch Premium-Zutaten, professionelle Kochtechniken, innovative Präsentationen und Chef-getriebene Kreativität aus, während es die Zugänglichkeit und ungezwungene Natur des Straßenessens beibehält.",
          nl: "Gourmet straatvoedsel kenmerkt zich door premium ingrediënten, professionele culinaire technieken, innovatieve presentaties en chef-gedreven creativiteit terwijl de toegankelijkheid en casual aard van straatvoedsel behouden blijft."
        }
      },
      {
        question: {
          en: "What role do celebrity chefs play in the gourmet street food movement?",
          es: "¿Qué papel juegan los chefs famosos en el movimiento de comida callejera gourmet?",
          de: "Welche Rolle spielen prominente Köche in der Gourmet-Straßenessen-Bewegung?",
          nl: "Welke rol spelen beroemde chefs in de gourmet straatvoedsel beweging?"
        },
        options: [
          { en: "No involvement in street food", es: "Sin participación en comida callejera", de: "Keine Beteiligung am Straßenessen", nl: "Geen betrokkenheid bij straatvoedsel" },
          { en: "Legitimize and elevate street food through high-profile food trucks and pop-ups", es: "Legitiman y elevan la comida callejera a través de food trucks de alto perfil y pop-ups", de: "Legitimieren und erheben Straßenessen durch hochkarätige Food Trucks und Pop-ups", nl: "Legitimeren en verheffen straatvoedsel door hoogwaardige foodtrucks en pop-ups" },
          { en: "Only serve in restaurants", es: "Solo sirven en restaurantes", de: "Servieren nur in Restaurants", nl: "Serveren alleen in restaurants" },
          { en: "Decrease food quality", es: "Disminuyen la calidad de la comida", de: "Verringern die Lebensmittelqualität", nl: "Verminderen voedselkwaliteit" }
        ],
        correct: 1,
        explanation: {
          en: "Celebrity chefs have legitimized and elevated street food by operating high-profile food trucks, creating innovative street food concepts, and bringing professional culinary standards to mobile dining.",
          es: "Los chefs famosos han legitimado y elevado la comida callejera operando food trucks de alto perfil, creando conceptos innovadores de comida callejera y trayendo estándares culinarios profesionales a la comida móvil.",
          de: "Prominente Köche haben Straßenessen legitimiert und erhoben, indem sie hochkarätige Food Trucks betreiben, innovative Straßenessen-Konzepte schaffen und professionelle kulinarische Standards in die mobile Gastronomie bringen.",
          nl: "Beroemde chefs hebben straatvoedsel gelegitimeerd en verheven door hoogwaardige foodtrucks te runnen, innovatieve straatvoedsel concepten te creëren en professionele culinaire standaarden naar mobiel dineren te brengen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  }

  return level8;
})();