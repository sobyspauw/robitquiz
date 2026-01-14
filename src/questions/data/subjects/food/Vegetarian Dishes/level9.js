// Vegetarian Dishes Quiz - Level 9
(function() {
  const level9 = {
    name: {
          "en": "Vegetarian Level 9",
          "es": "Vegetariano Nivel 9",
          "de": "Vegetarisch Stufe 9",
          "nl": "Vegetarisch Level 9"
    },
    questions: [
      {
        question: {
                  "en": "What dining trend focuses on vegetables as the star of the plate?",
                  "es": "¿Qué tendencia gastronómica enfoca las verduras como la estrella del plato?",
                  "de": "Welcher Gastro-Trend stellt Gemüse als den Star des Tellers in den Mittelpunkt?",
                  "nl": "Welke eettrend focust op groenten als de ster van het bord?"
        },
        options: [
        {
                  "en": "Vegetable-forward dining",
                  "es": "Cocina centrada en verduras",
                  "de": "Gemüseorientiertes Essen",
                  "nl": "Groente-georiënteerd dineren"
        },
        {
                  "en": "Fine dining",
                  "es": "Alta cocina",
                  "de": "Gehobene Gastronomie",
                  "nl": "Fine dining"
        },
        {
                  "en": "Molecular gastronomy",
                  "es": "Gastronomía molecular",
                  "de": "Molekulargastronomie",
                  "nl": "Moleculaire gastronomie"
        },
        {
                  "en": "Fast casual",
                  "es": "Casual rápido",
                  "de": "Fast-Casual",
                  "nl": "Fast casual"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Vegetable-forward dining treats vegetables as the main attraction rather than side dishes, showcasing their flavors, textures, and preparations with the same attention given to meat dishes.",
                  "es": "La cocina centrada en verduras trata las verduras como la atracción principal en lugar de guarniciones, mostrando sus sabores, texturas y preparaciones con la misma atención dada a los platos de carne.",
                  "de": "Gemüseorientiertes Essen behandelt Gemüse als Hauptattraktion und nicht als Beilage, und zeigt ihre Aromen, Texturen und Zubereitungen mit derselben Aufmerksamkeit, die Fleischgerichten gewidmet wird.",
                  "nl": "Groente-georiënteerd dineren behandelt groenten als hoofdattractie in plaats van bijgerechten, toont hun smaken, texturen en bereidingen met dezelfde aandacht die aan vleesgerechten wordt gegeven."
        }
      },
      {
        question: {
                  "en": "Which restaurant concept has gained popularity by offering customizable bowls?",
                  "es": "¿Qué concepto de restaurante ha ganado popularidad ofreciendo bowls personalizables?",
                  "de": "Welches Restaurantkonzept hat durch das Angebot anpassbarer Bowls an Popularität gewonnen?",
                  "nl": "Welk restaurantconcept heeft populariteit gewonnen door het aanbieden van aanpasbare bowls?"
        },
        options: [
        {
                  "en": "Pizza chains",
                  "es": "Cadenas de pizza",
                  "de": "Pizzaketten",
                  "nl": "Pizza ketens"
        },
        {
                  "en": "Traditional steakhouses",
                  "es": "Asadores tradicionales",
                  "de": "Traditionelle Steakhäuser",
                  "nl": "Traditionele steakhouses"
        },
        {
                  "en": "Burger joints",
                  "es": "Hamburgueserías",
                  "de": "Burger-Läden",
                  "nl": "Burger restaurants"
        },
        {
                  "en": "Build-your-own bowl restaurants",
                  "es": "Restaurantes de arma-tu-propio-bowl",
                  "de": "Stell-dir-deine-Bowl-zusammen Restaurants",
                  "nl": "Bouw-je-eigen-bowl restaurants"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Build-your-own bowl restaurants like Sweetgreen, Chipotle, and Freshii have revolutionized fast-casual dining by letting customers customize healthy, vegetarian-friendly meals with fresh ingredients.",
                  "es": "Los restaurantes de arma-tu-propio-bowl como Sweetgreen, Chipotle y Freshii han revolucionado la comida casual rápida permitiendo a los clientes personalizar comidas saludables y amigables para vegetarianos con ingredientes frescos.",
                  "de": "Stell-dir-deine-Bowl-zusammen Restaurants wie Sweetgreen, Chipotle und Freshii haben die Fast-Casual-Gastronomie revolutioniert, indem sie Kunden ermöglichen, gesunde, vegetarierfreundliche Mahlzeiten mit frischen Zutaten anzupassen.",
                  "nl": "Bouw-je-eigen-bowl restaurants zoals Sweetgreen, Chipotle en Freshii hebben fast-casual dining gerevolutioneerd door klanten gezonde, vegetariërvriendelijke maaltijden te laten samenstellen met verse ingrediënten."
        }
      },
      {
        question: {
                  "en": "What is 'ghost kitchen' concept in relation to vegetarian food?",
                  "es": "¿Qué es el concepto de 'cocina fantasma' en relación con la comida vegetariana?",
                  "de": "Was ist das 'Ghost Kitchen'-Konzept in Bezug auf vegetarisches Essen?",
                  "nl": "Wat is het 'ghost kitchen' concept in relatie tot vegetarisch eten?"
        },
        options: [
        {
                  "en": "Delivery-only kitchens without physical dining spaces",
                  "es": "Cocinas solo para entrega sin espacios físicos para cenar",
                  "de": "Nur-Lieferküchen ohne physische Speiseräume",
                  "nl": "Alleen-bezorg keukens zonder fysieke eetruimtes"
        },
        {
                  "en": "Halloween-themed restaurants",
                  "es": "Restaurantes temáticos de Halloween",
                  "de": "Halloween-thematische Restaurants",
                  "nl": "Halloween-thema restaurants"
        },
        {
                  "en": "Restaurants that serve spicy food",
                  "es": "Restaurantes que sirven comida picante",
                  "de": "Restaurants, die scharfes Essen servieren",
                  "nl": "Restaurants die pittig eten serveren"
        },
        {
                  "en": "Restaurants that only serve white food",
                  "es": "Restaurantes que solo sirven comida blanca",
                  "de": "Restaurants, die nur weißes Essen servieren",
                  "nl": "Restaurants die alleen wit eten serveren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Ghost kitchens focus solely on delivery and takeout, allowing vegetarian restaurants to reach more customers without expensive storefronts, leading to growth in plant-based delivery options.",
                  "es": "Las cocinas fantasma se enfocan únicamente en entrega y para llevar, permitiendo a los restaurantes vegetarianos llegar a más clientes sin costosos locales, llevando al crecimiento en opciones de entrega de comida vegetal.",
                  "de": "Ghost Kitchens konzentrieren sich ausschließlich auf Lieferung und Abholung, wodurch vegetarische Restaurants mehr Kunden erreichen können ohne teure Ladenlokale, was zum Wachstum bei pflanzlichen Lieferoptionen führt.",
                  "nl": "Ghost kitchens focussen uitsluitend op bezorging en afhaal, waardoor vegetarische restaurants meer klanten kunnen bereiken zonder dure winkelpanden, leidend tot groei in plantaardige bezorgopties."
        }
      },
      {
        question: {
                  "en": "Which dining trend emphasizes locally sourced, seasonal ingredients?",
                  "es": "¿Qué tendencia gastronómica enfatiza ingredientes locales y de temporada?",
                  "de": "Welcher Gastro-Trend betont lokal beschaffte, saisonale Zutaten?",
                  "nl": "Welke eettrend benadrukt lokaal geproduceerde, seizoensgebonden ingrediënten?"
        },
        options: [
        {
                  "en": "Molecular gastronomy",
                  "es": "Gastronomía molecular",
                  "de": "Molekulargastronomie",
                  "nl": "Moleculaire gastronomie"
        },
        {
                  "en": "Fast food",
                  "es": "Comida rápida",
                  "de": "Fast Food",
                  "nl": "Fast food"
        },
        {
                  "en": "Fusion cuisine",
                  "es": "Cocina fusión",
                  "de": "Fusionsküche",
                  "nl": "Fusiekeuken"
        },
        {
                  "en": "Farm-to-table movement",
                  "es": "Movimiento de la granja a la mesa",
                  "de": "Vom-Hof-auf-den-Tisch-Bewegung",
                  "nl": "Van-boer-tot-bord beweging"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The farm-to-table movement prioritizes fresh, locally sourced, seasonal ingredients, often featuring vegetables at their peak flavor and supporting local agriculture and sustainability.",
                  "es": "El movimiento de la granja a la mesa prioriza ingredientes frescos, locales y de temporada, a menudo presentando verduras en su punto máximo de sabor y apoyando la agricultura local y la sostenibilidad.",
                  "de": "Die Vom-Hof-auf-den-Tisch-Bewegung priorisiert frische, lokal beschaffte, saisonale Zutaten, oft mit Gemüse bei optimalem Geschmack und unterstützt lokale Landwirtschaft und Nachhaltigkeit.",
                  "nl": "De van-boer-tot-bord beweging geeft prioriteit aan verse, lokaal geproduceerde, seizoensgebonden ingrediënten, vaak met groenten op hun smaakhoogtepunt en ondersteunt lokale landbouw en duurzaamheid."
        }
      },
      {
        question: {
                  "en": "What is 'flexitarian' dining?",
                  "es": "¿Qué es la comida 'flexitariana'?",
                  "de": "Was ist 'Flexitarier'-Essen?",
                  "nl": "Wat is 'flexitarisch' eten?"
        },
        options: [
        {
                  "en": "Primarily vegetarian with occasional meat consumption",
                  "es": "Principalmente vegetariano con consumo ocasional de carne",
                  "de": "Hauptsächlich vegetarisch mit gelegentlichem Fleischkonsum",
                  "nl": "Voornamelijk vegetarisch met af en toe vleesconsumptie"
        },
        {
                  "en": "Changing diets daily",
                  "es": "Cambiar dietas diariamente",
                  "de": "Täglich die Ernährung wechseln",
                  "nl": "Dagelijks van dieet wisselen"
        },
        {
                  "en": "Eating at flexible times",
                  "es": "Comer en horarios flexibles",
                  "de": "Zu flexiblen Zeiten essen",
                  "nl": "Eten op flexibele tijden"
        },
        {
                  "en": "Only eating flexible foods",
                  "es": "Solo comer alimentos flexibles",
                  "de": "Nur flexible Lebensmittel essen",
                  "nl": "Alleen flexibele voedingsmiddelen eten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Flexitarian dining caters to people who eat mostly vegetarian but occasionally include meat. Restaurants are adapting menus to appeal to this growing demographic with more plant-forward options.",
                  "es": "La comida flexitariana atiende a personas que comen principalmente vegetariano pero ocasionalmente incluyen carne. Los restaurantes están adaptando menús para atraer a esta demografía creciente con más opciones centradas en plantas.",
                  "de": "Flexitarier-Essen richtet sich an Menschen, die meist vegetarisch essen, aber gelegentlich Fleisch einschließen. Restaurants passen Menüs an, um diese wachsende Zielgruppe mit mehr pflanzenorientierten Optionen anzusprechen.",
                  "nl": "Flexitarisch eten richt zich op mensen die meestal vegetarisch eten maar af en toe vlees includeren. Restaurants passen menu's aan om deze groeiende doelgroep aan te spreken met meer plantgerichte opties."
        }
      },
      {
        question: {
                  "en": "Which trend involves restaurants growing their own produce?",
                  "es": "¿Qué tendencia implica que los restaurantes cultiven sus propios productos?",
                  "de": "Welcher Trend beinhaltet, dass Restaurants ihre eigenen Produkte anbauen?",
                  "nl": "Welke trend houdt in dat restaurants hun eigen producten kweken?"
        },
        options: [
        {
                  "en": "Frozen food usage",
                  "es": "Uso de comida congelada",
                  "de": "Tiefkühlkost-Nutzung",
                  "nl": "Bevroren voedsel gebruik"
        },
        {
                  "en": "Wholesale purchasing",
                  "es": "Compra al por mayor",
                  "de": "Großhandelseinkauf",
                  "nl": "Groothandel inkoop"
        },
        {
                  "en": "Imported ingredients",
                  "es": "Ingredientes importados",
                  "de": "Importierte Zutaten",
                  "nl": "Geïmporteerde ingrediënten"
        },
        {
                  "en": "On-site urban farming",
                  "es": "Agricultura urbana en el sitio",
                  "de": "Vor-Ort-Stadtlandwirtschaft",
                  "nl": "Ter plaatse stadslandbouw"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Many restaurants are implementing rooftop gardens, hydroponic systems, or partnerships with urban farms to grow their own herbs and vegetables, ensuring maximum freshness and sustainability.",
                  "es": "Muchos restaurantes están implementando jardines en azoteas, sistemas hidropónicos o asociaciones con granjas urbanas para cultivar sus propias hierbas y verduras, asegurando máxima frescura y sostenibilidad.",
                  "de": "Viele Restaurants implementieren Dachgärten, hydroponische Systeme oder Partnerschaften mit Stadtfarmen, um ihre eigenen Kräuter und Gemüse zu züchten und maximale Frische und Nachhaltigkeit zu gewährleisten.",
                  "nl": "Veel restaurants implementeren daktuinen, hydroponische systemen of partnerschappen met stadsboerderijen om hun eigen kruiden en groenten te kweken, maximale versheid en duurzaamheid verzekerd."
        }
      },
      {
        question: {
                  "en": "What is the 'plant-based fine dining' trend?",
                  "es": "¿Qué es la tendencia de 'alta cocina basada en plantas'?",
                  "de": "Was ist der 'pflanzliche Fine-Dining'-Trend?",
                  "nl": "Wat is de 'plantaardige fine dining' trend?"
        },
        options: [
        {
                  "en": "Cheap vegetarian food",
                  "es": "Comida vegetariana barata",
                  "de": "Billiges vegetarisches Essen",
                  "nl": "Goedkoop vegetarisch eten"
        },
        {
                  "en": "Upscale restaurants creating sophisticated vegetarian tasting menus",
                  "es": "Restaurantes de lujo creando menús de degustación vegetarianos sofisticados",
                  "de": "Gehobene Restaurants erstellen ausgeklügelte vegetarische Verkostungsmenüs",
                  "nl": "Luxe restaurants creëren geavanceerde vegetarische proeverij menu's"
        },
        {
                  "en": "Expensive meat dishes",
                  "es": "Platos de carne caros",
                  "de": "Teure Fleischgerichte",
                  "nl": "Dure vleesgerechten"
        },
        {
                  "en": "Fast food with vegetables",
                  "es": "Comida rápida con verduras",
                  "de": "Fast Food mit Gemüse",
                  "nl": "Fast food met groenten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Plant-based fine dining elevates vegetarian cuisine to gourmet status, with Michelin-starred chefs creating elaborate, artistic dishes that showcase vegetables with techniques traditionally reserved for meat.",
                  "es": "La alta cocina basada en plantas eleva la cocina vegetariana a estatus gourmet, con chefs con estrella Michelin creando platos elaborados y artísticos que muestran verduras con técnicas tradicionalmente reservadas para la carne.",
                  "de": "Pflanzliche Fine-Dining hebt vegetarische Küche auf Gourmet-Status, mit Michelin-Sterne-Köchen, die aufwendige, künstlerische Gerichte schaffen, die Gemüse mit Techniken zeigen, die traditionell für Fleisch reserviert sind.",
                  "nl": "Plantaardige fine dining verheft vegetarische keuken tot gourmet status, met Michelin-sterren chefs die uitgebreide, artistieke gerechten creëren die groenten tonen met technieken traditioneel gereserveerd voor vlees."
        }
      },
      {
        question: {
                  "en": "Which technology is being used to enhance vegetarian restaurant experiences?",
                  "es": "¿Qué tecnología se está usando para mejorar las experiencias de restaurantes vegetarianos?",
                  "de": "Welche Technologie wird verwendet, um vegetarische Restauranterfahrungen zu verbessern?",
                  "nl": "Welke technologie wordt gebruikt om vegetarische restaurant ervaringen te verbeteren?"
        },
        options: [
        {
                  "en": "No technology at all",
                  "es": "Ninguna tecnología en absoluto",
                  "de": "Überhaupt keine Technologie",
                  "nl": "Helemaal geen technologie"
        },
        {
                  "en": "Traditional paper menus only",
                  "es": "Solo menús de papel tradicionales",
                  "de": "Nur traditionelle Papiermenüs",
                  "nl": "Alleen traditionele papieren menu's"
        },
        {
                  "en": "AI-powered menu recommendations based on dietary preferences",
                  "es": "Recomendaciones de menú con IA basadas en preferencias dietéticas",
                  "de": "KI-gesteuerte Menüempfehlungen basierend auf Ernährungsvorlieben",
                  "nl": "AI-aangedreven menu aanbevelingen gebaseerd op dieetvoorkeuren"
        },
        {
                  "en": "Cash-only payments",
                  "es": "Solo pagos en efectivo",
                  "de": "Nur Barzahlungen",
                  "nl": "Alleen contante betalingen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Restaurants are using AI to analyze customer preferences and dietary restrictions to suggest personalized vegetarian dishes, while apps help diners find plant-based options and track nutritional information.",
                  "es": "Los restaurantes están usando IA para analizar preferencias de clientes y restricciones dietéticas para sugerir platos vegetarianos personalizados, mientras las apps ayudan a comensales a encontrar opciones vegetales y rastrear información nutricional.",
                  "de": "Restaurants verwenden KI, um Kundenvorlieben und Ernährungseinschränkungen zu analysieren und personalisierte vegetarische Gerichte vorzuschlagen, während Apps Gästen helfen, pflanzliche Optionen zu finden und Ernährungsinformationen zu verfolgen.",
                  "nl": "Restaurants gebruiken AI om klantvoorkeuren en dieetbeperkingen te analyseren om gepersonaliseerde vegetarische gerechten voor te stellen, terwijl apps gasten helpen plantaardige opties te vinden en voedingsinformatie bij te houden."
        }
      },
      {
        question: {
                  "en": "What is the 'zero-waste' movement in vegetarian restaurants?",
                  "es": "¿Qué es el movimiento de 'cero desperdicio' en restaurantes vegetarianos?",
                  "de": "Was ist die 'Zero-Waste'-Bewegung in vegetarischen Restaurants?",
                  "nl": "Wat is de 'zero-waste' beweging in vegetarische restaurants?"
        },
        options: [
        {
                  "en": "Not serving food at all",
                  "es": "No servir comida en absoluto",
                  "de": "Überhaupt kein Essen servieren",
                  "nl": "Helemaal geen eten serveren"
        },
        {
                  "en": "Only using expensive ingredients",
                  "es": "Solo usar ingredientes caros",
                  "de": "Nur teure Zutaten verwenden",
                  "nl": "Alleen dure ingrediënten gebruiken"
        },
        {
                  "en": "Serving tiny portions",
                  "es": "Servir porciones pequeñas",
                  "de": "Winzige Portionen servieren",
                  "nl": "Kleine porties serveren"
        },
        {
                  "en": "Using all parts of ingredients and minimizing food waste",
                  "es": "Usar todas las partes de los ingredientes y minimizar el desperdicio de comida",
                  "de": "Alle Teile der Zutaten verwenden und Lebensmittelverschwendung minimieren",
                  "nl": "Alle delen van ingrediënten gebruiken en voedselverspilling minimaliseren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Zero-waste vegetarian restaurants use vegetable scraps for stocks, fruit peels for garnishes, and stems for seasonings, while composting unavoidable waste and minimizing packaging.",
                  "es": "Los restaurantes vegetarianos de cero desperdicio usan restos de verduras para caldos, cáscaras de frutas para guarniciones y tallos para condimentos, mientras compostan desechos inevitables y minimizan el empaque.",
                  "de": "Zero-Waste vegetarische Restaurants verwenden Gemüseabfälle für Brühen, Fruchtschalen für Garnituren und Stiele für Gewürze, während sie unvermeidbare Abfälle kompostieren und Verpackungen minimieren.",
                  "nl": "Zero-waste vegetarische restaurants gebruiken groente restjes voor bouillon, fruitschillen voor garnituur en stelen voor kruiden, terwijl ze onvermijdelijk afval composteren en verpakkingen minimaliseren."
        }
      },
      {
        question: {
                  "en": "Which dining format has become popular for showcasing vegetarian creativity?",
                  "es": "¿Qué formato gastronómico se ha vuelto popular para mostrar la creatividad vegetariana?",
                  "de": "Welches Gastronomieformat ist beliebt geworden, um vegetarische Kreativität zu zeigen?",
                  "nl": "Welk eetformaat is populair geworden voor het tonen van vegetarische creativiteit?"
        },
        options: [
        {
                  "en": "Drive-through only",
                  "es": "Solo autoservicio",
                  "de": "Nur Drive-Through",
                  "nl": "Alleen drive-through"
        },
        {
                  "en": "Buffet only",
                  "es": "Solo buffet",
                  "de": "Nur Buffet",
                  "nl": "Alleen buffet"
        },
        {
                  "en": "Cafeteria style",
                  "es": "Estilo cafetería",
                  "de": "Cafeteria-Stil",
                  "nl": "Cafetaria stijl"
        },
        {
                  "en": "Pop-up restaurants and chef collaborations",
                  "es": "Restaurantes pop-up y colaboraciones de chefs",
                  "de": "Pop-up-Restaurants und Koch-Kollaborationen",
                  "nl": "Pop-up restaurants en chef samenwerkingen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Pop-up vegetarian restaurants and chef collaborations allow for experimental menus, unique dining experiences, and creative partnerships that push the boundaries of plant-based cuisine.",
                  "es": "Los restaurantes vegetarianos pop-up y colaboraciones de chefs permiten menús experimentales, experiencias gastronómicas únicas y asociaciones creativas que empujan los límites de la cocina vegetal.",
                  "de": "Pop-up vegetarische Restaurants und Koch-Kollaborationen ermöglichen experimentelle Menüs, einzigartige Speiseerlebnisse und kreative Partnerschaften, die die Grenzen der pflanzlichen Küche erweitern.",
                  "nl": "Pop-up vegetarische restaurants en chef samenwerkingen maken experimentele menu's, unieke eet ervaringen en creatieve partnerschappen mogelijk die de grenzen van plantaardige keuken verleggen."
        }
      },
      {
        question: {
                  "en": "What is 'veggie-centric' menu design?",
                  "es": "¿Qué es el diseño de menú 'centrado en verduras'?",
                  "de": "Was ist 'gemüsezentrierte' Menügestaltung?",
                  "nl": "Wat is 'groente-centrisch' menu ontwerp?"
        },
        options: [
        {
                  "en": "Only listing expensive items",
                  "es": "Solo listar artículos caros",
                  "de": "Nur teure Artikel auflisten",
                  "nl": "Alleen dure items vermelden"
        },
        {
                  "en": "Having no meat options",
                  "es": "No tener opciones de carne",
                  "de": "Keine Fleischoptionen haben",
                  "nl": "Geen vlees opties hebben"
        },
        {
                  "en": "Organizing menus around vegetables rather than protein categories",
                  "es": "Organizar menús alrededor de verduras en lugar de categorías de proteína",
                  "de": "Menüs um Gemüse anstatt um Proteinkategorien organisieren",
                  "nl": "Menu's organiseren rond groenten in plaats van eiwit categorieën"
        },
        {
                  "en": "Using green color only",
                  "es": "Usar solo color verde",
                  "de": "Nur grüne Farbe verwenden",
                  "nl": "Alleen groene kleur gebruiken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Veggie-centric menu design features vegetables as main dishes rather than sides, organizing sections by cooking methods or vegetable types rather than traditional protein categories.",
                  "es": "El diseño de menú centrado en verduras presenta las verduras como platos principales en lugar de acompañamientos, organizando secciones por métodos de cocción o tipos de verduras en lugar de categorías tradicionales de proteína.",
                  "de": "Gemüsezentrierte Menügestaltung stellt Gemüse als Hauptgerichte anstatt als Beilagen dar und organisiert Abschnitte nach Kochmethoden oder Gemüsearten anstatt nach traditionellen Proteinkategorien.",
                  "nl": "Groente-centrisch menu ontwerp toont groenten als hoofdgerechten in plaats van bijgerechten, organiseert secties naar kookmethoden of groente soorten in plaats van traditionele eiwit categorieën."
        }
      },
      {
        question: {
                  "en": "Which service model has grown in response to dietary restrictions?",
                  "es": "¿Qué modelo de servicio ha crecido en respuesta a las restricciones dietéticas?",
                  "de": "Welches Servicemodell ist als Antwort auf Ernährungseinschränkungen gewachsen?",
                  "nl": "Welk service model is gegroeid in reactie op dieet beperkingen?"
        },
        options: [
        {
                  "en": "Traditional butcher shops",
                  "es": "Carnicerías tradicionales",
                  "de": "Traditionelle Metzgereien",
                  "nl": "Traditionele slagerijen"
        },
        {
                  "en": "Allergen-free and customizable meal prep services",
                  "es": "Servicios de preparación de comidas sin alérgenos y personalizables",
                  "de": "Allergenfreie und anpassbare Mahlzeiten-Vorbereitungsservice",
                  "nl": "Allergeenvrije en aanpasbare maaltijd bereidingsdiensten"
        },
        {
                  "en": "Seafood-only restaurants",
                  "es": "Restaurantes solo de mariscos",
                  "de": "Nur-Meeresfrüchte-Restaurants",
                  "nl": "Alleen-zeevruchten restaurants"
        },
        {
                  "en": "Standard chain restaurants",
                  "es": "Restaurantes de cadena estándar",
                  "de": "Standard-Kettenrestaurants",
                  "nl": "Standaard keten restaurants"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Meal prep services specializing in vegetarian, vegan, gluten-free, and other dietary restrictions have grown rapidly, offering convenient, customized healthy meals delivered to customers.",
                  "es": "Los servicios de preparación de comidas especializados en vegetarianos, veganos, sin gluten y otras restricciones dietéticas han crecido rápidamente, ofreciendo comidas saludables convenientes y personalizadas entregadas a los clientes.",
                  "de": "Mahlzeiten-Vorbereitungsservice, die sich auf vegetarische, vegane, glutenfreie und andere Ernährungseinschränkungen spezialisieren, sind schnell gewachsen und bieten bequeme, angepasste gesunde Mahlzeiten an Kunden geliefert.",
                  "nl": "Maaltijd bereidingsdiensten gespecialiseerd in vegetarisch, veganistisch, glutenvrij en andere dieet beperkingen zijn snel gegroeid, biedend handige, aangepaste gezonde maaltijden geleverd aan klanten."
        }
      },
      {
        question: {
                  "en": "What is 'ingredient transparency' in modern vegetarian restaurants?",
                  "es": "¿Qué es la 'transparencia de ingredientes' en restaurantes vegetarianos modernos?",
                  "de": "Was ist 'Zutaten-Transparenz' in modernen vegetarischen Restaurants?",
                  "nl": "Wat is 'ingrediënt transparantie' in moderne vegetarische restaurants?"
        },
        options: [
        {
                  "en": "Clearly listing all ingredients, sources, and preparation methods",
                  "es": "Listar claramente todos los ingredientes, fuentes y métodos de preparación",
                  "de": "Alle Zutaten, Quellen und Zubereitungsmethoden klar auflisten",
                  "nl": "Duidelijk alle ingrediënten, bronnen en bereidingsmethoden vermelden"
        },
        {
                  "en": "Hiding ingredient information",
                  "es": "Ocultar información de ingredientes",
                  "de": "Zutatinformationen verstecken",
                  "nl": "Ingrediënt informatie verbergen"
        },
        {
                  "en": "Using complex ingredient names",
                  "es": "Usar nombres complejos de ingredientes",
                  "de": "Komplexe Zutatennamen verwenden",
                  "nl": "Complexe ingrediënt namen gebruiken"
        },
        {
                  "en": "Using only clear ingredients",
                  "es": "Usar solo ingredientes transparentes",
                  "de": "Nur durchsichtige Zutaten verwenden",
                  "nl": "Alleen doorzichtige ingrediënten gebruiken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Ingredient transparency involves detailed menu descriptions, sourcing information, allergen warnings, and preparation methods, allowing customers to make informed choices about their vegetarian meals.",
                  "es": "La transparencia de ingredientes involucra descripciones detalladas del menú, información de fuentes, advertencias de alérgenos y métodos de preparación, permitiendo a los clientes tomar decisiones informadas sobre sus comidas vegetarianas.",
                  "de": "Zutaten-Transparenz beinhaltet detaillierte Menübeschreibungen, Beschaffungsinformationen, Allergenwarnungen und Zubereitungsmethoden, wodurch Kunden informierte Entscheidungen über ihre vegetarischen Mahlzeiten treffen können.",
                  "nl": "Ingrediënt transparantie houdt gedetailleerde menu beschrijvingen, herkomst informatie, allergeen waarschuwingen en bereidingsmethoden in, waardoor klanten geïnformeerde keuzes kunnen maken over hun vegetarische maaltijden."
        }
      },
      {
        question: {
                  "en": "Which trend focuses on the environmental impact of food choices?",
                  "es": "¿Qué tendencia se enfoca en el impacto ambiental de las opciones alimentarias?",
                  "de": "Welcher Trend konzentriert sich auf die Umweltauswirkungen von Lebensmittelentscheidungen?",
                  "nl": "Welke trend focust op de milieuimpact van voedselkeuzes?"
        },
        options: [
        {
                  "en": "Fast food emphasis",
                  "es": "Énfasis en comida rápida",
                  "de": "Fast-Food-Betonung",
                  "nl": "Fast food nadruk"
        },
        {
                  "en": "Expensive ingredient promotion",
                  "es": "Promoción de ingredientes caros",
                  "de": "Teure Zutatenwerbung",
                  "nl": "Dure ingrediënt promotie"
        },
        {
                  "en": "Carbon footprint labeling on menus",
                  "es": "Etiquetado de huella de carbono en menús",
                  "de": "CO2-Fußabdruck-Kennzeichnung auf Menüs",
                  "nl": "CO2 voetafdruk labeling op menu's"
        },
        {
                  "en": "Portion size increase",
                  "es": "Aumento del tamaño de la porción",
                  "de": "Vergrößerung der Portionsgröße",
                  "nl": "Portie grootte verhoging"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Some progressive restaurants now include carbon footprint information on menus, helping environmentally conscious diners understand the climate impact of their food choices and promoting lower-impact options.",
                  "es": "Algunos restaurantes progresistas ahora incluyen información de huella de carbono en menús, ayudando a comensales conscientes del ambiente a entender el impacto climático de sus opciones alimentarias y promoviendo opciones de menor impacto.",
                  "de": "Einige progressive Restaurants enthalten jetzt CO2-Fußabdruck-Informationen auf Menüs, die umweltbewussten Gästen helfen, die Klimaauswirkungen ihrer Lebensmittelentscheidungen zu verstehen und Optionen mit geringeren Auswirkungen fördern.",
                  "nl": "Sommige vooruitstrevende restaurants bevatten nu CO2 voetafdruk informatie op menu's, helpend milieubewuste gasten de klimaatimpact van hun voedselkeuzes te begrijpen en opties met lagere impact te promoten."
        }
      },
      {
        question: {
                  "en": "What is 'social media-driven' menu development?",
                  "es": "¿Qué es el desarrollo de menú 'impulsado por redes sociales'?",
                  "de": "Was ist 'Social-Media-getriebene' Menüentwicklung?",
                  "nl": "Wat is 'social media-gedreven' menu ontwikkeling?"
        },
        options: [
        {
                  "en": "Creating visually appealing dishes designed for sharing online",
                  "es": "Crear platos visualmente atractivos diseñados para compartir en línea",
                  "de": "Visuell ansprechende Gerichte schaffen, die zum Online-Teilen entwickelt wurden",
                  "nl": "Visueel aantrekkelijke gerechten creëren ontworpen voor online delen"
        },
        {
                  "en": "Using only black and white presentations",
                  "es": "Usar solo presentaciones en blanco y negro",
                  "de": "Nur Schwarz-Weiß-Präsentationen verwenden",
                  "nl": "Alleen zwart-wit presentaties gebruiken"
        },
        {
                  "en": "Avoiding any food photography",
                  "es": "Evitar cualquier fotografía de comida",
                  "de": "Jede Essensfotografie vermeiden",
                  "nl": "Elke voedselfotografie vermijden"
        },
        {
                  "en": "Only serving traditional dishes",
                  "es": "Solo servir platos tradicionales",
                  "de": "Nur traditionelle Gerichte servieren",
                  "nl": "Alleen traditionele gerechten serveren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Restaurants design Instagram-worthy vegetarian dishes with vibrant colors, artistic plating, and unique presentations that encourage customers to share photos, creating organic marketing and social proof.",
                  "es": "Los restaurantes diseñan platos vegetarianos dignos de Instagram con colores vibrantes, emplatado artístico y presentaciones únicas que animan a los clientes a compartir fotos, creando marketing orgánico y prueba social.",
                  "de": "Restaurants entwerfen Instagram-würdige vegetarische Gerichte mit lebendigen Farben, künstlerischem Anrichten und einzigartigen Präsentationen, die Kunden ermutigen, Fotos zu teilen und organisches Marketing und sozialen Beweis zu schaffen.",
                  "nl": "Restaurants ontwerpen Instagram-waardige vegetarische gerechten met levendige kleuren, artistieke opmaak en unieke presentaties die klanten aanmoedigen foto's te delen, organische marketing en sociale bewijsvoering creërend."
        }
      },
      {
        question: {
                  "en": "Which dining trend emphasizes minimal processing of ingredients?",
                  "es": "¿Qué tendencia gastronómica enfatiza el procesamiento mínimo de ingredientes?",
                  "de": "Welcher Gastro-Trend betont minimale Verarbeitung von Zutaten?",
                  "nl": "Welke eettrend benadrukt minimale verwerking van ingrediënten?"
        },
        options: [
        {
                  "en": "Molecular gastronomy",
                  "es": "Gastronomía molecular",
                  "de": "Molekulargastronomie",
                  "nl": "Moleculaire gastronomie"
        },
        {
                  "en": "Artificial ingredient emphasis",
                  "es": "Énfasis en ingredientes artificiales",
                  "de": "Künstliche Zutatbetonung",
                  "nl": "Kunstmatige ingrediënt nadruk"
        },
        {
                  "en": "Ultra-processed food focus",
                  "es": "Enfoque en alimentos ultraprocesados",
                  "de": "Ultra-verarbeiteter Lebensmittelfokus",
                  "nl": "Ultra-verwerkt voedsel focus"
        },
        {
                  "en": "Whole food, plant-based movement",
                  "es": "Movimiento de alimentos integrales basados en plantas",
                  "de": "Vollwert-pflanzliche Bewegung",
                  "nl": "Hele voeding, plantaardige beweging"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The whole food, plant-based movement emphasizes vegetables, fruits, grains, and legumes in their most natural state, avoiding processed foods and focusing on nutritional density.",
                  "es": "El movimiento de alimentos integrales basados en plantas enfatiza verduras, frutas, granos y legumbres en su estado más natural, evitando alimentos procesados y enfocándose en densidad nutricional.",
                  "de": "Die Vollwert-pflanzliche Bewegung betont Gemüse, Früchte, Getreide und Hülsenfrüchte in ihrem natürlichsten Zustand, vermeidet verarbeitete Lebensmittel und konzentriert sich auf Nährstoffdichte.",
                  "nl": "De hele voeding, plantaardige beweging benadrukt groenten, fruit, granen en peulvruchten in hun meest natuurlijke staat, vermijdt verwerkte voedingsmiddelen en focust op voedingsdichtheid."
        }
      },
      {
        question: {
                  "en": "What is 'community-supported agriculture' (CSA) in restaurant context?",
                  "es": "¿Qué es la 'agricultura apoyada por la comunidad' (CSA) en contexto de restaurante?",
                  "de": "Was ist 'gemeinschaftlich unterstützte Landwirtschaft' (CSA) im Restaurantkontext?",
                  "nl": "Wat is 'door de gemeenschap ondersteunde landbouw' (CSA) in restaurant context?"
        },
        options: [
        {
                  "en": "Government food programs",
                  "es": "Programas gubernamentales de alimentos",
                  "de": "Regierungsernährungsprogramme",
                  "nl": "Overheidsvoedingsprogramma's"
        },
        {
                  "en": "International food imports",
                  "es": "Importaciones internacionales de alimentos",
                  "de": "Internationale Lebensmittelimporte",
                  "nl": "Internationale voedselimporten"
        },
        {
                  "en": "Customers growing their own food",
                  "es": "Clientes cultivando su propia comida",
                  "de": "Kunden bauen ihr eigenes Essen an",
                  "nl": "Klanten kweken hun eigen voedsel"
        },
        {
                  "en": "Restaurants partnering directly with local farms for seasonal produce",
                  "es": "Restaurantes asociándose directamente con granjas locales para productos de temporada",
                  "de": "Restaurants, die direkt mit lokalen Farmen für saisonale Produkte kooperieren",
                  "nl": "Restaurants die direct samenwerken met lokale boerderijen voor seizoensproducten"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "CSA partnerships allow restaurants to receive fresh, seasonal produce directly from local farms, often influencing menu changes based on what's available and supporting local agriculture.",
                  "es": "Las asociaciones CSA permiten a los restaurantes recibir productos frescos y de temporada directamente de granjas locales, a menudo influyendo cambios de menú basados en lo que está disponible y apoyando la agricultura local.",
                  "de": "CSA-Partnerschaften ermöglichen es Restaurants, frische, saisonale Produkte direkt von lokalen Farmen zu erhalten, oft Menüänderungen basierend auf dem Verfügbaren zu beeinflussen und lokale Landwirtschaft zu unterstützen.",
                  "nl": "CSA partnerschappen stellen restaurants in staat verse, seizoensproducten direct van lokale boerderijen te ontvangen, vaak menu veranderingen beïnvloedend gebaseerd op wat beschikbaar is en lokale landbouw ondersteunend."
        }
      },
      {
        question: {
                  "en": "Which trend involves chefs traveling to source ingredients personally?",
                  "es": "¿Qué tendencia involucra a chefs viajando para obtener ingredientes personalmente?",
                  "de": "Welcher Trend beinhaltet, dass Köche reisen, um Zutaten persönlich zu beschaffen?",
                  "nl": "Welke trend houdt in dat chefs reizen om ingrediënten persoonlijk te verkrijgen?"
        },
        options: [
        {
                  "en": "Convenience food usage",
                  "es": "Uso de alimentos de conveniencia",
                  "de": "Verwendung von Fertignahrung",
                  "nl": "Gebruik van gemaksvoedsels"
        },
        {
                  "en": "Processed ingredient focus",
                  "es": "Enfoque en ingredientes procesados",
                  "de": "Fokus auf verarbeitete Zutaten",
                  "nl": "Focus op verwerkte ingrediënten"
        },
        {
                  "en": "Foraging and terroir-focused cooking",
                  "es": "Cocina enfocada en forrajeo y terroir",
                  "de": "Sammeln und Terroir-fokussiertes Kochen",
                  "nl": "Foerageren en terroir-gericht koken"
        },
        {
                  "en": "Frozen food emphasis",
                  "es": "Énfasis en alimentos congelados",
                  "de": "Betonung auf Tiefkühlkost",
                  "nl": "Nadruk op bevroren voedsel"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Some high-end vegetarian restaurants feature chefs who forage for wild ingredients or travel to specific regions to source unique vegetables, herbs, and other plant-based ingredients that express local terroir.",
                  "es": "Algunos restaurantes vegetarianos de alta gama presentan chefs que buscan ingredientes silvestres o viajan a regiones específicas para obtener verduras únicas, hierbas y otros ingredientes vegetales que expresan el terroir local.",
                  "de": "Einige gehobene vegetarische Restaurants zeigen Köche, die nach wilden Zutaten sammeln oder zu spezifischen Regionen reisen, um einzigartige Gemüse, Kräuter und andere pflanzliche Zutaten zu beschaffen, die lokales Terroir ausdrücken.",
                  "nl": "Sommige high-end vegetarische restaurants tonen chefs die foerageren naar wilde ingrediënten of reizen naar specifieke regio's om unieke groenten, kruiden en andere plantaardige ingrediënten te verkrijgen die lokaal terroir uitdrukken."
        }
      },
      {
        question: {
                  "en": "What is the 'plant-based butcher' concept in modern retail?",
                  "es": "¿Qué es el concepto de 'carnicería vegetal' en el comercio moderno?",
                  "de": "Was ist das 'pflanzliche Metzgerei'-Konzept im modernen Einzelhandel?",
                  "nl": "Wat is het 'plantaardige slagerij' concept in de moderne detailhandel?"
        },
        options: [
        {
                  "en": "Stores selling only vegetables",
                  "es": "Tiendas que venden solo verduras",
                  "de": "Geschäfte, die nur Gemüse verkaufen",
                  "nl": "Winkels die alleen groenten verkopen"
        },
        {
                  "en": "Shops specializing exclusively in plant-based meat alternatives with traditional butcher shop presentation",
                  "es": "Tiendas especializadas exclusivamente en alternativas de carne vegetal con presentación tradicional de carnicería",
                  "de": "Geschäfte, die sich ausschließlich auf pflanzliche Fleischalternativen mit traditioneller Metzgerei-Präsentation spezialisieren",
                  "nl": "Winkels gespecialiseerd uitsluitend in plantaardige vleesvervanger met traditionele slagerij presentatie"
        },
        {
                  "en": "Traditional meat shops",
                  "es": "Tiendas tradicionales de carne",
                  "de": "Traditionelle Fleischläden",
                  "nl": "Traditionele vleesw inkels"
        },
        {
                  "en": "Grocery stores with no specialty",
                  "es": "Tiendas de comestibles sin especialidad",
                  "de": "Lebensmittelgeschäfte ohne Spezialität",
                  "nl": "Kruidenierswinkels zonder specialiteit"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Plant-based butchers like The Herbivorous Butcher mimic traditional butcher shops but sell only plant-based meats, sausages, and cheeses, making vegan products accessible to mainstream consumers.",
                  "es": "Las carnicerías vegetales como The Herbivorous Butcher imitan carnicerías tradicionales pero venden solo carnes, salchichas y quesos vegetales, haciendo productos veganos accesibles a consumidores convencionales.",
                  "de": "Pflanzliche Metzgereien wie The Herbivorous Butcher ahmen traditionelle Metzgereien nach, verkaufen aber nur pflanzliche Fleischwaren, Würste und Käse, und machen vegane Produkte für Mainstream-Konsumenten zugänglich.",
                  "nl": "Plantaardige slagerijen zoals The Herbivorous Butcher bootsen traditionele slagerijen na maar verkopen alleen plantaardig vlees, worsten en kazen, veganistische producten toegankelijk makend voor mainstream consumenten."
        }
      },
      {
        question: {
                  "en": "Which dining trend involves restaurants disclosing nutritional metrics in real-time?",
                  "es": "¿Qué tendencia gastronómica involucra a restaurantes revelando métricas nutricionales en tiempo real?",
                  "de": "Welcher Gastro-Trend beinhaltet, dass Restaurants Nährstoffmetriken in Echtzeit offenlegen?",
                  "nl": "Welke eettrend houdt in dat restaurants voedingswaarden in real-time bekendmaken?"
        },
        options: [
        {
                  "en": "Digital nutrition tracking with QR code menu integration showing calories, macros, and allergens",
                  "es": "Seguimiento nutricional digital con integración de menú de código QR mostrando calorías, macros y alérgenos",
                  "de": "Digitale Ernährungsverfolgung mit QR-Code-Menüintegration, die Kalorien, Makros und Allergene zeigt",
                  "nl": "Digitale voedingstracking met QR code menu integratie die calorieën, macro's en allergenen toont"
        },
        {
                  "en": "Only listing prices",
                  "es": "Solo listar precios",
                  "de": "Nur Preise auflisten",
                  "nl": "Alleen prijzen vermelden"
        },
        {
                  "en": "Hiding all nutritional information",
                  "es": "Ocultar toda información nutricional",
                  "de": "Alle Nährstoffinformationen verstecken",
                  "nl": "Alle voedingsinformatie verbergen"
        },
        {
                  "en": "Using paper menus only",
                  "es": "Usar solo menús de papel",
                  "de": "Nur Papiermenüs verwenden",
                  "nl": "Alleen papieren menu's gebruiken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Modern restaurants use QR codes linked to digital menus that display comprehensive nutritional information, allowing health-conscious diners to make informed vegetarian choices with instant access to detailed data.",
                  "es": "Los restaurantes modernos usan códigos QR vinculados a menús digitales que muestran información nutricional completa, permitiendo a comensales conscientes de la salud tomar decisiones vegetarianas informadas con acceso instantáneo a datos detallados.",
                  "de": "Moderne Restaurants verwenden QR-Codes, die mit digitalen Menüs verknüpft sind und umfassende Nährstoffinformationen anzeigen, wodurch gesundheitsbewusste Gäste informierte vegetarische Entscheidungen mit sofortigem Zugriff auf detaillierte Daten treffen können.",
                  "nl": "Moderne restaurants gebruiken QR codes gekoppeld aan digitale menu's die uitgebreide voedingsinformatie tonen, waardoor gezondheidsbewuste gasten geïnformeerde vegetarische keuzes kunnen maken met directe toegang tot gedetailleerde gegevens."
        }
      },
      {
        question: {
                  "en": "What is 'plant-based brunch culture' in urban dining?",
                  "es": "¿Qué es la 'cultura de brunch vegetal' en la gastronomía urbana?",
                  "de": "Was ist die 'pflanzliche Brunch-Kultur' in der städtischen Gastronomie?",
                  "nl": "Wat is de 'plantaardige brunch cultuur' in stedelijk dineren?"
        },
        options: [
        {
                  "en": "Weekend social dining focused on creative vegetarian breakfast and lunch fusion dishes",
                  "es": "Cena social de fin de semana enfocada en platos de fusión creativos vegetarianos de desayuno y almuerzo",
                  "de": "Wochenend-Social-Dining mit kreativen vegetarischen Frühstücks- und Mittagessen-Fusion-Gerichten",
                  "nl": "Weekend sociaal dineren gericht op creatieve vegetarische ontbijt en lunch fusie gerechten"
        },
        {
                  "en": "Late-night dining",
                  "es": "Cena tarde en la noche",
                  "de": "Spätabend-Essen",
                  "nl": "Laat-nacht dineren"
        },
        {
                  "en": "Only breakfast foods",
                  "es": "Solo alimentos de desayuno",
                  "de": "Nur Frühstücksspeisen",
                  "nl": "Alleen ontbijtvoedsel"
        },
        {
                  "en": "Fast food meals",
                  "es": "Comidas rápidas",
                  "de": "Fast-Food-Mahlzeiten",
                  "nl": "Fast food maaltijden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Plant-based brunch has become a social phenomenon in cities, featuring innovative vegetarian dishes like avocado toast variations, plant-based eggs benedict, and artisanal smoothie bowls in Instagram-worthy settings.",
                  "es": "El brunch vegetal se ha convertido en un fenómeno social en ciudades, presentando platos vegetarianos innovadores como variaciones de tostada con aguacate, huevos benedictinos vegetales y bowls de smoothie artesanales en entornos dignos de Instagram.",
                  "de": "Pflanzlicher Brunch ist zu einem sozialen Phänomen in Städten geworden und bietet innovative vegetarische Gerichte wie Avocado-Toast-Variationen, pflanzliche Eier Benedict und handwerkliche Smoothie-Bowls in Instagram-würdigen Umgebungen.",
                  "nl": "Plantaardige brunch is een sociaal fenomeen geworden in steden, met innovatieve vegetarische gerechten zoals avocado toast variaties, plantaardige eggs benedict en ambachtelijke smoothie bowls in Instagram-waardige settings."
        }
      },
      {
        question: {
                  "en": "Which business model allows restaurants to test vegetarian concepts with minimal risk?",
                  "es": "¿Qué modelo de negocio permite a los restaurantes probar conceptos vegetarianos con riesgo mínimo?",
                  "de": "Welches Geschäftsmodell ermöglicht es Restaurants, vegetarische Konzepte mit minimalem Risiko zu testen?",
                  "nl": "Welk bedrijfsmodel stelt restaurants in staat vegetarische concepten te testen met minimaal risico?"
        },
        options: [
        {
                  "en": "Building permanent locations immediately",
                  "es": "Construir ubicaciones permanentes inmediatamente",
                  "de": "Sofort permanente Standorte bauen",
                  "nl": "Direct permanente locaties bouwen"
        },
        {
                  "en": "Pop-up restaurants and temporary residencies in existing venues",
                  "es": "Restaurantes pop-up y residencias temporales en locales existentes",
                  "de": "Pop-up-Restaurants und temporäre Residenzen in bestehenden Locations",
                  "nl": "Pop-up restaurants en tijdelijke residenties in bestaande locaties"
        },
        {
                  "en": "Investing in expensive equipment first",
                  "es": "Invertir primero en equipo caro",
                  "de": "Zuerst in teure Ausrüstung investieren",
                  "nl": "Eerst investeren in dure apparatuur"
        },
        {
                  "en": "Opening chain restaurants",
                  "es": "Abrir restaurantes de cadena",
                  "de": "Kettenrestaurants eröffnen",
                  "nl": "Keten restaurants openen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Pop-ups allow chefs to experiment with vegetarian menus in temporary spaces, building audience and refining concepts before committing to permanent locations, reducing financial risk and fostering innovation.",
                  "es": "Los pop-ups permiten a los chefs experimentar con menús vegetarianos en espacios temporales, construyendo audiencia y refinando conceptos antes de comprometerse con ubicaciones permanentes, reduciendo riesgo financiero y fomentando innovación.",
                  "de": "Pop-ups ermöglichen Köchen, mit vegetarischen Menüs in temporären Räumen zu experimentieren, Publikum aufzubauen und Konzepte zu verfeinern, bevor sie sich auf permanente Standorte festlegen, wodurch finanzielles Risiko reduziert und Innovation gefördert wird.",
                  "nl": "Pop-ups stellen chefs in staat te experimenteren met vegetarische menu's in tijdelijke ruimtes, publiek opbouwend en concepten verfijnend voordat ze zich committeren aan permanente locaties, financieel risico verlaagd en innovatie bevorderend."
        }
      },
      {
        question: {
                  "en": "What is 'plant-based catering' growth driven by?",
                  "es": "¿Por qué crece el 'catering vegetal'?",
                  "de": "Was treibt das Wachstum von 'pflanzlichem Catering' an?",
                  "nl": "Wat drijft de groei van 'plantaardige catering' aan?"
        },
        options: [
        {
                  "en": "Government mandates",
                  "es": "Mandatos gubernamentales",
                  "de": "Regierungsmandate",
                  "nl": "Overheidsvoorschriften"
        },
        {
                  "en": "Corporate wellness initiatives and event planners offering inclusive dietary options for diverse attendees",
                  "es": "Iniciativas de bienestar corporativo y planificadores de eventos ofreciendo opciones dietéticas inclusivas para asistentes diversos",
                  "de": "Corporate Wellness-Initiativen und Veranstaltungsplaner bieten inklusive Ernährungsoptionen für vielfältige Teilnehmer",
                  "nl": "Bedrijfswelzijnsinitiatieven en evenementenplanners die inclusieve dieetopties bieden voor diverse deelnemers"
        },
        {
                  "en": "Decreased demand for food",
                  "es": "Demanda disminuida de comida",
                  "de": "Verringerte Nachfrage nach Essen",
                  "nl": "Verminderde vraag naar voedsel"
        },
        {
                  "en": "Higher meat prices only",
                  "es": "Solo precios más altos de carne",
                  "de": "Nur höhere Fleischpreise",
                  "nl": "Alleen hogere vleesprijzen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Corporations and event planners increasingly choose plant-based catering to accommodate various dietary needs (vegan, vegetarian, kosher, halal), promote sustainability goals, and appeal to health-conscious attendees.",
                  "es": "Las corporaciones y planificadores de eventos cada vez más eligen catering vegetal para acomodar varias necesidades dietéticas (vegano, vegetariano, kosher, halal), promover objetivos de sostenibilidad y atraer a asistentes conscientes de la salud.",
                  "de": "Unternehmen und Veranstaltungsplaner wählen zunehmend pflanzliches Catering, um verschiedene Ernährungsbedürfnisse (vegan, vegetarisch, koscher, halal) zu berücksichtigen, Nachhaltigkeitsziele zu fördern und gesundheitsbewusste Teilnehmer anzusprechen.",
                  "nl": "Bedrijven en evenementenplanners kiezen steeds vaker voor plantaardige catering om verschillende dieetbehoeften (veganistisch, vegetarisch, koosjer, halal) te accommoderen, duurzaamheidsdoelen te promoten en gezondheidsbewuste deelnemers aan te spreken."
        }
      },
      {
        question: {
                  "en": "Which trend involves restaurants composting and recycling all waste?",
                  "es": "¿Qué tendencia involucra a restaurantes compostando y reciclando todos los desechos?",
                  "de": "Welcher Trend beinhaltet, dass Restaurants alle Abfälle kompostieren und recyceln?",
                  "nl": "Welke trend houdt in dat restaurants al het afval composteren en recyclen?"
        },
        options: [
        {
                  "en": "Single-use everything",
                  "es": "Todo de un solo uso",
                  "de": "Alles Einweg",
                  "nl": "Alles eenmalig gebruik"
        },
        {
                  "en": "No waste management",
                  "es": "Sin gestión de desechos",
                  "de": "Keine Abfallwirtschaft",
                  "nl": "Geen afvalbeheer"
        },
        {
                  "en": "Circular economy restaurant operations with closed-loop waste systems",
                  "es": "Operaciones de restaurante de economía circular con sistemas de desechos de ciclo cerrado",
                  "de": "Kreislaufwirtschafts-Restaurantbetriebe mit geschlossenen Abfallsystemen",
                  "nl": "Circulaire economie restaurant operaties met gesloten afvalsystemen"
        },
        {
                  "en": "Landfill-focused disposal",
                  "es": "Eliminación enfocada en vertederos",
                  "de": "Deponie-fokussierte Entsorgung",
                  "nl": "Stortplaats-gerichte afvoer"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Circular economy restaurants eliminate waste by composting organic matter, recycling packaging, partnering with local farms to use scraps for animal feed, and designing systems where nothing goes to landfills.",
                  "es": "Los restaurantes de economía circular eliminan desechos compostando materia orgánica, reciclando empaques, asociándose con granjas locales para usar restos como alimento animal y diseñando sistemas donde nada va a vertederos.",
                  "de": "Kreislaufwirtschafts-Restaurants eliminieren Abfälle durch Kompostierung organischer Stoffe, Recycling von Verpackungen, Partnerschaften mit lokalen Farmen zur Verwendung von Resten als Tierfutter und Gestaltung von Systemen, wo nichts auf Deponien gelangt.",
                  "nl": "Circulaire economie restaurants elimineren afval door organisch materiaal te composteren, verpakkingen te recyclen, samen te werken met lokale boerderijen om restjes als diervoeder te gebruiken en systemen te ontwerpen waar niets naar stortplaatsen gaat."
        }
      },
      {
        question: {
                  "en": "What is the 'hyper-local' restaurant trend?",
                  "es": "¿Qué es la tendencia de restaurante 'hiperlocal'?",
                  "de": "Was ist der 'hyperlokal' Restaurant-Trend?",
                  "nl": "Wat is de 'hyper-lokale' restaurant trend?"
        },
        options: [
        {
                  "en": "Serving only exotic cuisine",
                  "es": "Servir solo cocina exótica",
                  "de": "Nur exotische Küche servieren",
                  "nl": "Alleen exotische keuken serveren"
        },
        {
                  "en": "Using only frozen foods",
                  "es": "Usar solo alimentos congelados",
                  "de": "Nur Tiefkühlkost verwenden",
                  "nl": "Alleen bevroren voedsel gebruiken"
        },
        {
                  "en": "Sourcing all ingredients from within a specific radius (often 50-100 miles) emphasizing regional cuisine",
                  "es": "Obtener todos los ingredientes dentro de un radio específico (a menudo 50-100 millas) enfatizando cocina regional",
                  "de": "Beschaffung aller Zutaten innerhalb eines bestimmten Radius (oft 50-100 Meilen) mit Betonung regionaler Küche",
                  "nl": "Alle ingrediënten verkrijgen binnen een specifieke straal (vaak 50-100 mijl) met nadruk op regionale keuken"
        },
        {
                  "en": "Importing all ingredients internationally",
                  "es": "Importar todos los ingredientes internacionalmente",
                  "de": "Alle Zutaten international importieren",
                  "nl": "Alle ingrediënten internationaal importeren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Hyper-local restaurants commit to sourcing ingredients exclusively from nearby farms and producers, reducing food miles, supporting local economies, and creating menus that reflect true regional terroir and seasonality.",
                  "es": "Los restaurantes hiperlocales se comprometen a obtener ingredientes exclusivamente de granjas y productores cercanos, reduciendo millas de alimentos, apoyando economías locales y creando menús que reflejan verdadero terroir regional y estacionalidad.",
                  "de": "Hyperlokale Restaurants verpflichten sich, Zutaten ausschließlich von nahen Farmen und Produzenten zu beziehen, Lebensmittelmeilen zu reduzieren, lokale Wirtschaften zu unterstützen und Menüs zu erstellen, die echtes regionales Terroir und Saisonalität widerspiegeln.",
                  "nl": "Hyper-lokale restaurants committeren zich aan het verkrijgen van ingrediënten uitsluitend van nabijgelegen boerderijen en producenten, voedselkilometers verlaagd, lokale economieën ondersteunend en menu's creërend die echte regionale terroir en seizoensgebondenheid weerspiegelen."
        }
      },
      {
        question: {
                  "en": "Which technology helps reduce food waste in vegetarian restaurants?",
                  "es": "¿Qué tecnología ayuda a reducir el desperdicio de comida en restaurantes vegetarianos?",
                  "de": "Welche Technologie hilft, Lebensmittelverschwendung in vegetarischen Restaurants zu reduzieren?",
                  "nl": "Welke technologie helpt voedselverspilling in vegetarische restaurants te verminderen?"
        },
        options: [
        {
                  "en": "AI-powered inventory management predicting demand and optimizing ordering",
                  "es": "Gestión de inventario con IA prediciendo demanda y optimizando pedidos",
                  "de": "KI-gesteuerte Bestandsverwaltung, die Nachfrage vorhersagt und Bestellungen optimiert",
                  "nl": "AI-aangedreven voorraadbeheer die vraag voorspelt en bestellingen optimaliseert"
        },
        {
                  "en": "Ignoring expiration dates",
                  "es": "Ignorar fechas de vencimiento",
                  "de": "Ablaufdaten ignorieren",
                  "nl": "Vervaldatums negeren"
        },
        {
                  "en": "Ordering more than needed",
                  "es": "Ordenar más de lo necesario",
                  "de": "Mehr bestellen als nötig",
                  "nl": "Meer bestellen dan nodig"
        },
        {
                  "en": "Manual guessing only",
                  "es": "Solo adivinación manual",
                  "de": "Nur manuelles Raten",
                  "nl": "Alleen handmatig raden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AI systems analyze historical sales data, weather patterns, events, and trends to predict demand accurately, helping restaurants order optimal ingredient quantities and reduce spoilage of perishable vegetables.",
                  "es": "Los sistemas de IA analizan datos históricos de ventas, patrones climáticos, eventos y tendencias para predecir demanda con precisión, ayudando a restaurantes a ordenar cantidades óptimas de ingredientes y reducir deterioro de verduras perecederas.",
                  "de": "KI-Systeme analysieren historische Verkaufsdaten, Wettermuster, Ereignisse und Trends, um Nachfrage genau vorherzusagen und Restaurants zu helfen, optimale Zutatmengen zu bestellen und Verderb verderblicher Gemüse zu reduzieren.",
                  "nl": "AI-systemen analyseren historische verkoopgegevens, weerpatronen, evenementen en trends om vraag nauwkeurig te voorspellen, restaurants helpend optimale ingrediënt hoeveelheden te bestellen en bederf van bederfbare groenten te verminderen."
        }
      },
      {
        question: {
                  "en": "What is 'experiential dining' in vegetarian restaurants?",
                  "es": "¿Qué es la 'cena experiencial' en restaurantes vegetarianos?",
                  "de": "Was ist 'erlebnisorientiertes Essen' in vegetarischen Restaurants?",
                  "nl": "Wat is 'ervarings dineren' in vegetarische restaurants?"
        },
        options: [
        {
                  "en": "Takeout only",
                  "es": "Solo para llevar",
                  "de": "Nur zum Mitnehmen",
                  "nl": "Alleen afhaal"
        },
        {
                  "en": "Fast food service",
                  "es": "Servicio de comida rápida",
                  "de": "Fast-Food-Service",
                  "nl": "Fast food service"
        },
        {
                  "en": "Traditional table service only",
                  "es": "Solo servicio de mesa tradicional",
                  "de": "Nur traditioneller Tischservice",
                  "nl": "Alleen traditionele tafelservice"
        },
        {
                  "en": "Immersive multi-sensory dining experiences with themed environments, storytelling, and interactive elements",
                  "es": "Experiencias gastronómicas multisensoriales inmersivas con entornos temáticos, narración y elementos interactivos",
                  "de": "Immersive multisensorische Speiseerlebnisse mit thematischen Umgebungen, Storytelling und interaktiven Elementen",
                  "nl": "Meeslepende multisensorische eet ervaringen met thematische omgevingen, storytelling en interactieve elementen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Experiential vegetarian dining creates memorable events through theatrical presentations, chef interactions, farm-to-fork storytelling, and sensory elements like aromatherapy or sound design paired with courses.",
                  "es": "La cena vegetariana experiencial crea eventos memorables a través de presentaciones teatrales, interacciones con chef, narración de granja a tenedor y elementos sensoriales como aromaterapia o diseño de sonido emparejado con platos.",
                  "de": "Erlebnisorientiertes vegetarisches Essen schafft unvergessliche Ereignisse durch theatralische Präsentationen, Koch-Interaktionen, Vom-Hof-zur-Gabel-Storytelling und sensorische Elemente wie Aromatherapie oder Klangdesign in Kombination mit Gängen.",
                  "nl": "Ervarings vegetarisch dineren creëert memorabele evenementen door theatrale presentaties, chef interacties, van-boer-tot-vork storytelling en zintuiglijke elementen zoals aromatherapie of geluidsontwerp gekoppeld aan gangen."
        }
      },
      {
        question: {
                  "en": "Which subscription model is growing in vegetarian dining?",
                  "es": "¿Qué modelo de suscripción está creciendo en gastronomía vegetariana?",
                  "de": "Welches Abonnementmodell wächst in der vegetarischen Gastronomie?",
                  "nl": "Welk abonnementsmodel groeit in vegetarisch dineren?"
        },
        options: [
        {
                  "en": "Pay-per-meal only",
                  "es": "Solo pago por comida",
                  "de": "Nur Bezahlung pro Mahlzeit",
                  "nl": "Alleen betalen per maaltijd"
        },
        {
                  "en": "Annual payments only",
                  "es": "Solo pagos anuales",
                  "de": "Nur jährliche Zahlungen",
                  "nl": "Alleen jaarlijkse betalingen"
        },
        {
                  "en": "No membership options",
                  "es": "Sin opciones de membresía",
                  "de": "Keine Mitgliedschaftsoptionen",
                  "nl": "Geen lidmaatschapsopties"
        },
        {
                  "en": "Monthly meal club memberships offering priority reservations, exclusive menus, and perks",
                  "es": "Membresías mensuales de club de comidas ofreciendo reservas prioritarias, menús exclusivos y beneficios",
                  "de": "Monatliche Essens-Club-Mitgliedschaften mit vorrangigen Reservierungen, exklusiven Menüs und Vergünstigungen",
                  "nl": "Maandelijkse maaltijd club lidmaatschappen biedend prioriteit reserveringen, exclusieve menu's en voordelen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Restaurants offer subscription memberships providing regular diners with benefits like guaranteed tables, special tasting menus, cooking classes, and discounts, creating steady revenue and community loyalty.",
                  "es": "Los restaurantes ofrecen membresías de suscripción proporcionando a comensales regulares beneficios como mesas garantizadas, menús de degustación especiales, clases de cocina y descuentos, creando ingresos estables y lealtad comunitaria.",
                  "de": "Restaurants bieten Abonnement-Mitgliedschaften an, die regelmäßigen Gästen Vorteile wie garantierte Tische, spezielle Verkostungsmenüs, Kochkurse und Rabatte bieten und stabile Einnahmen und Gemeinschaftstreue schaffen.",
                  "nl": "Restaurants bieden abonnementslidmaatschappen aan die regelmatige gasten voordelen bieden zoals gegarandeerde tafels, speciale proeverij menu's, kooklessen en kortingen, stabiele inkomsten en gemeenschapsloyaliteit creërend."
        }
      },
      {
        question: {
                  "en": "What is 'plant-based fast-casual' dining segment?",
                  "es": "¿Qué es el segmento gastronómico 'casual rápido vegetal'?",
                  "de": "Was ist das 'pflanzliche Fast-Casual'-Gastronomiensegment?",
                  "nl": "Wat is het 'plantaardige fast-casual' dineren segment?"
        },
        options: [
        {
                  "en": "Quick-service restaurants offering higher-quality vegetarian food than traditional fast food with counter ordering",
                  "es": "Restaurantes de servicio rápido ofreciendo comida vegetariana de mayor calidad que comida rápida tradicional con pedido en mostrador",
                  "de": "Schnellservice-Restaurants, die hochwertigeres vegetarisches Essen als traditionelles Fast Food mit Theken-Bestellung anbieten",
                  "nl": "Snelle service restaurants die hogere kwaliteit vegetarisch eten bieden dan traditioneel fast food met balie bestelling"
        },
        {
                  "en": "Slow table service",
                  "es": "Servicio lento de mesa",
                  "de": "Langsamer Tischservice",
                  "nl": "Langzame tafelservice"
        },
        {
                  "en": "Traditional fast food",
                  "es": "Comida rápida tradicional",
                  "de": "Traditionelles Fast Food",
                  "nl": "Traditioneel fast food"
        },
        {
                  "en": "Fine dining only",
                  "es": "Solo alta cocina",
                  "de": "Nur Fine Dining",
                  "nl": "Alleen fine dining"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Fast-casual vegetarian chains like Veggie Grill and By Chloe bridge the gap between fast food convenience and quality dining, offering fresh, customizable plant-based meals at affordable prices with quick turnaround.",
                  "es": "Las cadenas vegetarianas casuales rápidas como Veggie Grill y By Chloe cierran la brecha entre la conveniencia de comida rápida y gastronomía de calidad, ofreciendo comidas frescas, personalizables vegetales a precios asequibles con respuesta rápida.",
                  "de": "Fast-Casual vegetarische Ketten wie Veggie Grill und By Chloe schließen die Lücke zwischen Fast-Food-Bequemlichkeit und Qualitätsgastronomie und bieten frische, anpassbare pflanzliche Mahlzeiten zu erschwinglichen Preisen mit schnellem Durchsatz.",
                  "nl": "Fast-casual vegetarische ketens zoals Veggie Grill en By Chloe overbruggen de kloof tussen fast food gemak en kwaliteit dineren, biedend verse, aanpasbare plantaardige maaltijden tegen betaalbare prijzen met snelle doorlooptijd."
        }
      },
      {
        question: {
                  "en": "Which trend involves chefs creating dishes around specific heirloom vegetables?",
                  "es": "¿Qué tendencia involucra a chefs creando platos alrededor de verduras reliquia específicas?",
                  "de": "Welcher Trend beinhaltet, dass Köche Gerichte um spezifische Erbstück-Gemüse herum kreieren?",
                  "nl": "Welke trend houdt in dat chefs gerechten creëren rond specifieke erfstuk groenten?"
        },
        options: [
        {
                  "en": "Standard grocery store vegetables only",
                  "es": "Solo verduras de supermercado estándar",
                  "de": "Nur Standard-Supermarkt-Gemüse",
                  "nl": "Alleen standaard supermarkt groenten"
        },
        {
                  "en": "Avoiding specialty produce",
                  "es": "Evitar productos especializados",
                  "de": "Spezialprodukte vermeiden",
                  "nl": "Specialiteitenproducten vermijden"
        },
        {
                  "en": "Using only modern hybrid vegetables",
                  "es": "Usar solo verduras híbridas modernas",
                  "de": "Nur moderne Hybrid-Gemüse verwenden",
                  "nl": "Alleen moderne hybride groenten gebruiken"
        },
        {
                  "en": "Heritage vegetable showcasing with seasonal tasting menus featuring rare cultivars",
                  "es": "Exhibición de verduras patrimoniales con menús de degustación estacionales presentando cultivares raros",
                  "de": "Erbstück-Gemüse-Präsentation mit saisonalen Verkostungsmenüs mit seltenen Kultivaren",
                  "nl": "Erfstuk groente tonen met seizoensgebonden proeverij menu's met zeldzame cultivars"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Chefs partner with specialty growers to source rare heirloom vegetables like purple carrots, striped tomatoes, and ancient grains, celebrating biodiversity and creating unique dishes that preserve culinary heritage.",
                  "es": "Los chefs se asocian con cultivadores especializados para obtener verduras reliquia raras como zanahorias moradas, tomates rayados y granos antiguos, celebrando biodiversidad y creando platos únicos que preservan patrimonio culinario.",
                  "de": "Köche arbeiten mit spezialisierten Züchtern zusammen, um seltene Erbstück-Gemüse wie lila Karotten, gestreifte Tomaten und alte Getreide zu beschaffen, Biodiversität zu feiern und einzigartige Gerichte zu schaffen, die kulinarisches Erbe bewahren.",
                  "nl": "Chefs werken samen met gespecialiseerde telers om zeldzame erfstuk groenten te verkrijgen zoals paarse wortelen, gestreepte tomaten en oude granen, biodiversiteit vierend en unieke gerechten creërend die culinair erfgoed behouden."
        }
      },
      {
        question: {
                  "en": "What is 'plant-based hotel dining' evolution?",
                  "es": "¿Qué es la evolución de 'gastronomía hotelera vegetal'?",
                  "de": "Was ist die Entwicklung des 'pflanzlichen Hotel-Essens'?",
                  "nl": "Wat is de evolutie van 'plantaardig hotel dineren'?"
        },
        options: [
        {
                  "en": "No vegetarian options",
                  "es": "Sin opciones vegetarianas",
                  "de": "Keine vegetarischen Optionen",
                  "nl": "Geen vegetarische opties"
        },
        {
                  "en": "Hotels offering fully plant-based room service, breakfast buffets, and fine dining options as standard",
                  "es": "Hoteles ofreciendo servicio a habitación, buffets de desayuno y opciones de alta cocina completamente vegetales como estándar",
                  "de": "Hotels bieten vollständig pflanzlichen Zimmerservice, Frühstücksbuffets und Fine-Dining-Optionen als Standard an",
                  "nl": "Hotels bieden volledig plantaardige roomservice, ontbijtbuffetten en fine dining opties als standaard"
        },
        {
                  "en": "Expensive add-ons only",
                  "es": "Solo complementos caros",
                  "de": "Nur teure Ergänzungen",
                  "nl": "Alleen dure toevoegingen"
        },
        {
                  "en": "Limited salad choices only",
                  "es": "Solo opciones limitadas de ensalada",
                  "de": "Nur begrenzte Salatauswahl",
                  "nl": "Alleen beperkte salade keuzes"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Luxury hotels now feature dedicated plant-based menus across all dining venues, hire specialized vegetarian chefs, and some like 1 Hotels are entirely plant-forward, reflecting changing guest preferences.",
                  "es": "Los hoteles de lujo ahora presentan menús vegetales dedicados en todos los lugares gastronómicos, contratan chefs vegetarianos especializados y algunos como 1 Hotels son completamente centrados en plantas, reflejando preferencias cambiantes de huéspedes.",
                  "de": "Luxushotels bieten jetzt dedizierte pflanzliche Menüs in allen Gastronomiebereichen, stellen spezialisierte vegetarische Köche ein, und einige wie 1 Hotels sind vollständig pflanzenorientiert, was veränderte Gästepräferenzen widerspiegelt.",
                  "nl": "Luxe hotels bieden nu toegewijde plantaardige menu's in alle eet locaties, huren gespecialiseerde vegetarische chefs in, en sommige zoals 1 Hotels zijn volledig plant-gericht, veranderende gastvoorkeuren weerspiegelend."
        }
      },
      {
        question: {
                  "en": "Which trend uses fermentation to create unique vegetarian flavors?",
                  "es": "¿Qué tendencia usa fermentación para crear sabores vegetarianos únicos?",
                  "de": "Welcher Trend verwendet Fermentation, um einzigartige vegetarische Aromen zu schaffen?",
                  "nl": "Welke trend gebruikt fermentatie om unieke vegetarische smaken te creëren?"
        },
        options: [
        {
                  "en": "Artisan fermentation labs creating house-made miso, kimchi, kombucha, and fermented vegetables",
                  "es": "Laboratorios de fermentación artesanal creando miso, kimchi, kombucha y verduras fermentadas caseras",
                  "de": "Handwerkliche Fermentationslabore erstellen hauseigenes Miso, Kimchi, Kombucha und fermentiertes Gemüse",
                  "nl": "Ambachtelijke fermentatie labs creërend huisgemaakte miso, kimchi, kombucha en gefermenteerde groenten"
        },
        {
                  "en": "Avoiding all fermented foods",
                  "es": "Evitar todos los alimentos fermentados",
                  "de": "Alle fermentierten Lebensmittel vermeiden",
                  "nl": "Alle gefermenteerde voedingsmiddelen vermijden"
        },
        {
                  "en": "Only using commercial products",
                  "es": "Solo usar productos comerciales",
                  "de": "Nur kommerzielle Produkte verwenden",
                  "nl": "Alleen commerciële producten gebruiken"
        },
        {
                  "en": "No specialty flavors",
                  "es": "Sin sabores especiales",
                  "de": "Keine Spezialgeschmäcker",
                  "nl": "Geen speciale smaken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Restaurants establish in-house fermentation programs to develop complex umami flavors, probiotics, and unique tastes, creating signature condiments and dishes that showcase vegetable transformation through traditional techniques.",
                  "es": "Los restaurantes establecen programas de fermentación internos para desarrollar sabores umami complejos, probióticos y sabores únicos, creando condimentos y platos distintivos que muestran transformación vegetal a través de técnicas tradicionales.",
                  "de": "Restaurants etablieren hauseigene Fermentationsprogramme, um komplexe Umami-Aromen, Probiotika und einzigartige Geschmäcker zu entwickeln, und schaffen charakteristische Würzmittel und Gerichte, die Gemüsetransformation durch traditionelle Techniken zeigen.",
                  "nl": "Restaurants vestigen interne fermentatieprogramma's om complexe umami smaken, probiotica en unieke smaken te ontwikkelen, kenmerkende condimenten en gerechten creërend die groente transformatie tonen door traditionele technieken."
        }
      },
      {
        question: {
                  "en": "What is 'plant-based sports nutrition' dining trend?",
                  "es": "¿Qué es la tendencia gastronómica de 'nutrición deportiva vegetal'?",
                  "de": "Was ist der 'pflanzliche Sporternährungs'-Gastrotrend?",
                  "nl": "Wat is de 'plantaardige sportvoeding' eettrend?"
        },
        options: [
        {
                  "en": "Restaurants partnering with gyms and athletes offering high-protein vegetarian performance meals",
                  "es": "Restaurantes asociándose con gimnasios y atletas ofreciendo comidas vegetarianas de alto rendimiento y alta proteína",
                  "de": "Restaurants kooperieren mit Fitnessstudios und Athleten und bieten proteinreiche vegetarische Leistungsmahlzeiten an",
                  "nl": "Restaurants samenwerkend met sportscholen en atleten biedend hoog-eiwit vegetarische prestatie maaltijden"
        },
        {
                  "en": "Low-calorie foods only",
                  "es": "Solo alimentos bajos en calorías",
                  "de": "Nur kalorienarme Lebensmittel",
                  "nl": "Alleen lage-calorie voedingsmiddelen"
        },
        {
                  "en": "Only desserts and snacks",
                  "es": "Solo postres y bocadillos",
                  "de": "Nur Desserts und Snacks",
                  "nl": "Alleen desserts en snacks"
        },
        {
                  "en": "No macro tracking",
                  "es": "Sin seguimiento de macros",
                  "de": "Keine Makro-Verfolgung",
                  "nl": "Geen macro tracking"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Restaurants target fitness enthusiasts with macro-balanced vegetarian meals rich in plant proteins, complex carbs, and healthy fats, often providing detailed nutritional breakdowns and recovery-focused options.",
                  "es": "Los restaurantes se enfocan en entusiastas del fitness con comidas vegetarianas equilibradas en macros ricas en proteínas vegetales, carbohidratos complejos y grasas saludables, a menudo proporcionando desgloses nutricionales detallados y opciones enfocadas en recuperación.",
                  "de": "Restaurants richten sich an Fitness-Enthusiasten mit makro-ausgewogenen vegetarischen Mahlzeiten, die reich an Pflanzenproteinen, komplexen Kohlenhydraten und gesunden Fetten sind, und bieten oft detaillierte Nährstoffaufschlüsselungen und erholungsorientierte Optionen.",
                  "nl": "Restaurants richten zich op fitness liefhebbers met macro-gebalanceerde vegetarische maaltijden rijk aan plantaardige eiwitten, complexe koolhydraten en gezonde vetten, vaak gedetailleerde voedingsuitsplitsingen en herstel-gerichte opties biedend."
        }
      },
      {
        question: {
                  "en": "Which dining format allows customers to vote on next menu items?",
                  "es": "¿Qué formato gastronómico permite a los clientes votar por los próximos elementos del menú?",
                  "de": "Welches Gastronomieformat ermöglicht es Kunden, über die nächsten Menüpunkte abzustimmen?",
                  "nl": "Welk eetformaat stelt klanten in staat te stemmen op volgende menu items?"
        },
        options: [
        {
                  "en": "Random selections",
                  "es": "Selecciones aleatorias",
                  "de": "Zufällige Auswahlen",
                  "nl": "Willekeurige selecties"
        },
        {
                  "en": "Corporate mandates only",
                  "es": "Solo mandatos corporativos",
                  "de": "Nur Unternehmensmandate",
                  "nl": "Alleen bedrijfsvoorschriften"
        },
        {
                  "en": "Crowd-sourced menu development using social media polls and customer feedback platforms",
                  "es": "Desarrollo de menú de fuente colectiva usando encuestas de redes sociales y plataformas de retroalimentación de clientes",
                  "de": "Crowd-sourced Menüentwicklung unter Verwendung von Social-Media-Umfragen und Kunden-Feedback-Plattformen",
                  "nl": "Crowd-sourced menu ontwikkeling gebruik makend van social media polls en klant feedback platforms"
        },
        {
                  "en": "Chef decides everything with no input",
                  "es": "Chef decide todo sin aportes",
                  "de": "Koch entscheidet alles ohne Input",
                  "nl": "Chef beslist alles zonder input"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Progressive restaurants engage customers in menu creation through Instagram polls, taste-testing events, and feedback apps, democratizing the dining experience and ensuring dishes align with customer preferences.",
                  "es": "Los restaurantes progresistas involucran a los clientes en la creación de menús a través de encuestas de Instagram, eventos de degustación y apps de retroalimentación, democratizando la experiencia gastronómica y asegurando que los platos se alineen con las preferencias de los clientes.",
                  "de": "Progressive Restaurants binden Kunden in die Menüerstellung durch Instagram-Umfragen, Verkostungsveranstaltungen und Feedback-Apps ein, demokratisieren das Speiseerlebnis und stellen sicher, dass Gerichte mit Kundenpräferenzen übereinstimmen.",
                  "nl": "Progressieve restaurants betrekken klanten bij menu creatie door Instagram polls, proefeventi en feedback apps, de eetervaring democratiserend en ervoor zorgend dat gerechten aansluiten bij klantvoorkeuren."
        }
      },
      {
        question: {
                  "en": "What is the future of 'plant-based meal kits' in restaurant context?",
                  "es": "¿Cuál es el futuro de 'kits de comida vegetales' en contexto de restaurante?",
                  "de": "Was ist die Zukunft von 'pflanzlichen Mahlzeiten-Kits' im Restaurantkontext?",
                  "nl": "Wat is de toekomst van 'plantaardige maaltijdpakketten' in restaurant context?"
        },
        options: [
        {
                  "en": "Restaurants offering DIY meal kits of signature dishes for home cooking with chef video tutorials",
                  "es": "Restaurantes ofreciendo kits de comida DIY de platos distintivos para cocinar en casa con tutoriales en video de chef",
                  "de": "Restaurants bieten DIY-Mahlzeiten-Kits von Signature-Gerichten zum Kochen zu Hause mit Koch-Video-Tutorials an",
                  "nl": "Restaurants bieden DIY maaltijdpakketten van kenmerkende gerechten voor thuis koken met chef video tutorials"
        },
        {
                  "en": "No take-home options",
                  "es": "Sin opciones para llevar a casa",
                  "de": "Keine Mitnahmeoptionen",
                  "nl": "Geen meeneem opties"
        },
        {
                  "en": "Only selling finished meals",
                  "es": "Solo vender comidas terminadas",
                  "de": "Nur fertige Mahlzeiten verkaufen",
                  "nl": "Alleen afgewerkte maaltijden verkopen"
        },
        {
                  "en": "Avoiding home cooking trends",
                  "es": "Evitar tendencias de cocina casera",
                  "de": "Heimkoch-Trends vermeiden",
                  "nl": "Thuis kook trends vermijden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Restaurants diversify revenue by selling pre-portioned ingredient kits of popular vegetarian dishes with step-by-step instructions, allowing customers to recreate restaurant experiences at home while learning cooking techniques.",
                  "es": "Los restaurantes diversifican ingresos vendiendo kits de ingredientes pre-porcionados de platos vegetarianos populares con instrucciones paso a paso, permitiendo a los clientes recrear experiencias de restaurante en casa mientras aprenden técnicas de cocina.",
                  "de": "Restaurants diversifizieren Einnahmen durch Verkauf vorportionierter Zutaten-Kits beliebter vegetarischer Gerichte mit Schritt-für-Schritt-Anleitungen, wodurch Kunden Restaurant-Erlebnisse zu Hause nachbilden können, während sie Kochtechniken lernen.",
                  "nl": "Restaurants diversifiëren inkomsten door voorgeportioneerde ingrediënt pakketten van populaire vegetarische gerechten te verkopen met stap-voor-stap instructies, klanten in staat stellend restaurant ervaringen thuis na te maken terwijl ze kooktechnieken leren."
        }
      },
      {
        question: {
                  "en": "Which emerging technology promises to revolutionize vegetarian restaurant supply chains?",
                  "es": "¿Qué tecnología emergente promete revolucionar las cadenas de suministro de restaurantes vegetarianos?",
                  "de": "Welche aufkommende Technologie verspricht, Lieferketten vegetarischer Restaurants zu revolutionieren?",
                  "nl": "Welke opkomende technologie belooft de toeleveringsketens van vegetarische restaurants te revolutioneren?"
        },
        options: [
        {
                  "en": "Manual phone calls only",
                  "es": "Solo llamadas telefónicas manuales",
                  "de": "Nur manuelle Telefonanrufe",
                  "nl": "Alleen handmatige telefoongesprekken"
        },
        {
                  "en": "Blockchain for transparent ingredient sourcing and farm-to-table verification",
                  "es": "Blockchain para abastecimiento transparente de ingredientes y verificación de granja a mesa",
                  "de": "Blockchain für transparente Zutaten-Beschaffung und Vom-Hof-zum-Tisch-Überprüfung",
                  "nl": "Blockchain voor transparante ingrediënt sourcing en van-boer-tot-tafel verificatie"
        },
        {
                  "en": "Paper tracking only",
                  "es": "Solo seguimiento en papel",
                  "de": "Nur Papierverfolgung",
                  "nl": "Alleen papier tracking"
        },
        {
                  "en": "No supply chain tracking",
                  "es": "Sin seguimiento de cadena de suministro",
                  "de": "Keine Lieferkettenverfolgung",
                  "nl": "Geen toeleveringsketen tracking"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Blockchain technology enables restaurants to provide customers with complete transparency about ingredient origins, farming practices, and supply chain journey, building trust and verifying sustainability claims.",
                  "es": "La tecnología blockchain permite a los restaurantes proporcionar a los clientes transparencia completa sobre orígenes de ingredientes, prácticas agrícolas y viaje de cadena de suministro, construyendo confianza y verificando afirmaciones de sostenibilidad.",
                  "de": "Blockchain-Technologie ermöglicht Restaurants, Kunden vollständige Transparenz über Zutatenherkünfte, Anbaumethoden und Lieferkettenweg zu bieten, Vertrauen aufzubauen und Nachhaltigkeitsansprüche zu verifizieren.",
                  "nl": "Blockchain technologie stelt restaurants in staat klanten volledige transparantie te bieden over ingrediënt oorsprongen, landbouwpraktijken en toeleveringsketen reis, vertrouwen opbouwend en duurzaamheidsclaims verifiërend."
        }
      },
      {
        question: {
                  "en": "What is the 'plant-based fine wine pairing' trend?",
                  "es": "¿Qué es la tendencia de 'maridaje de vinos finos vegetales'?",
                  "de": "Was ist der 'pflanzliche Feinwein-Pairing'-Trend?",
                  "nl": "Wat is de 'plantaardige fijne wijn pairing' trend?"
        },
        options: [
        {
                  "en": "Random wine selections",
                  "es": "Selecciones aleatorias de vino",
                  "de": "Zufällige Weinauswahlen",
                  "nl": "Willekeurige wijn selecties"
        },
        {
                  "en": "Sommeliers creating sophisticated wine pairings specifically designed for vegetable-based dishes",
                  "es": "Sommeliers creando maridajes de vino sofisticados específicamente diseñados para platos basados en verduras",
                  "de": "Sommeliers erstellen ausgeklügelte Wein-Pairings speziell für gemüsebasierte Gerichte",
                  "nl": "Sommeliers creëren geavanceerde wijn pairings specifiek ontworpen voor op groente gebaseerde gerechten"
        },
        {
                  "en": "Only beer options",
                  "es": "Solo opciones de cerveza",
                  "de": "Nur Bieroptionen",
                  "nl": "Alleen bier opties"
        },
        {
                  "en": "No wine service",
                  "es": "Sin servicio de vino",
                  "de": "Kein Weinservice",
                  "nl": "Geen wijn service"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Expert sommeliers develop specialized vegetable-focused wine pairing principles, matching terroir, acidity, and flavor profiles of wines with plant-based dishes, elevating vegetarian dining to fine wine standards.",
                  "es": "Sommeliers expertos desarrollan principios especializados de maridaje de vino enfocados en verduras, emparejando terroir, acidez y perfiles de sabor de vinos con platos vegetales, elevando la gastronomía vegetariana a estándares de vinos finos.",
                  "de": "Experten-Sommeliers entwickeln spezialisierte gemüsefokussierte Wein-Pairing-Prinzipien, passen Terroir, Säure und Geschmacksprofile von Weinen mit pflanzlichen Gerichten an und heben vegetarisches Essen auf Feinwein-Standards.",
                  "nl": "Expert sommeliers ontwikkelen gespecialiseerde groente-gerichte wijn pairing principes, terroir, zuurgraad en smaakprofielen van wijnen matchend met plantaardige gerechten, vegetarisch dineren verheffend tot fijne wijn standaarden."
        }
      },
      {
        question: {
                  "en": "Which trend addresses food accessibility in underserved communities?",
                  "es": "¿Qué tendencia aborda la accesibilidad alimentaria en comunidades desatendidas?",
                  "de": "Welcher Trend befasst sich mit Lebensmittelzugänglichkeit in unterversorgten Gemeinschaften?",
                  "nl": "Welke trend behandelt voedsel toegankelijkheid in ondervertegenwoordigde gemeenschappen?"
        },
        options: [
        {
                  "en": "Only upscale locations",
                  "es": "Solo ubicaciones de lujo",
                  "de": "Nur gehobene Standorte",
                  "nl": "Alleen luxe locaties"
        },
        {
                  "en": "Expensive restaurants only",
                  "es": "Solo restaurantes caros",
                  "de": "Nur teure Restaurants",
                  "nl": "Alleen dure restaurants"
        },
        {
                  "en": "Mobile vegetarian food trucks and pop-ups bringing healthy options to food deserts",
                  "es": "Camiones móviles de comida vegetariana y pop-ups trayendo opciones saludables a desiertos alimentarios",
                  "de": "Mobile vegetarische Food Trucks und Pop-ups bringen gesunde Optionen in Lebensmittelwüsten",
                  "nl": "Mobiele vegetarische food trucks en pop-ups brengen gezonde opties naar voedsel woestijnen"
        },
        {
                  "en": "Ignoring community needs",
                  "es": "Ignorar necesidades comunitarias",
                  "de": "Gemeinschaftsbedürfnisse ignorieren",
                  "nl": "Gemeenschapsbehoeften negeren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Social entrepreneurs operate mobile vegetarian kitchens and pop-ups in food deserts, providing affordable, nutritious plant-based meals and nutrition education to underserved communities lacking healthy food options.",
                  "es": "Los emprendedores sociales operan cocinas vegetarianas móviles y pop-ups en desiertos alimentarios, proporcionando comidas vegetales nutritivas y asequibles y educación nutricional a comunidades desatendidas que carecen de opciones de alimentos saludables.",
                  "de": "Sozialunternehmer betreiben mobile vegetarische Küchen und Pop-ups in Lebensmittelwüsten und bieten erschwingliche, nahrhafte pflanzliche Mahlzeiten und Ernährungsbildung für unterversorgte Gemeinschaften ohne gesunde Lebensmitteloptionen.",
                  "nl": "Sociale ondernemers opereren mobiele vegetarische keukens en pop-ups in voedselwoestijnen, betaalbare, voedzame plantaardige maaltijden en voedingseducatie biedend aan ondervertegenwoordigde gemeenschappen die gezonde voedselopties missen."
        }
      },
      {
        question: {
                  "en": "What is the ultimate vision for vegetarian restaurant sustainability?",
                  "es": "¿Cuál es la visión definitiva para la sostenibilidad de restaurantes vegetarianos?",
                  "de": "Was ist die ultimative Vision für die Nachhaltigkeit vegetarischer Restaurants?",
                  "nl": "Wat is de ultieme visie voor vegetarisch restaurant duurzaamheid?"
        },
        options: [
        {
                  "en": "Ignoring environmental impact",
                  "es": "Ignorar impacto ambiental",
                  "de": "Umweltauswirkungen ignorieren",
                  "nl": "Milieueffect negeren"
        },
        {
                  "en": "Traditional business models",
                  "es": "Modelos de negocio tradicionales",
                  "de": "Traditionelle Geschäftsmodelle",
                  "nl": "Traditionele bedrijfsmodellen"
        },
        {
                  "en": "Maximum profit only",
                  "es": "Solo máximo beneficio",
                  "de": "Nur maximaler Gewinn",
                  "nl": "Alleen maximale winst"
        },
        {
                  "en": "Regenerative restaurants that actively improve ecosystems through sourcing, composting, and carbon-negative operations",
                  "es": "Restaurantes regenerativos que mejoran activamente ecosistemas a través de abastecimiento, compostaje y operaciones carbono-negativas",
                  "de": "Regenerative Restaurants, die Ökosysteme durch Beschaffung, Kompostierung und CO2-negative Betriebe aktiv verbessern",
                  "nl": "Regeneratieve restaurants die ecosystemen actief verbeteren door sourcing, composteren en koolstof-negatieve operaties"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The future of vegetarian restaurants involves regenerative practices that go beyond sustainability to actively restore soil health, sequester carbon, support biodiversity, and create positive environmental impact through every operation.",
                  "es": "El futuro de los restaurantes vegetarianos involucra prácticas regenerativas que van más allá de la sostenibilidad para restaurar activamente la salud del suelo, secuestrar carbono, apoyar biodiversidad y crear impacto ambiental positivo a través de cada operación.",
                  "de": "Die Zukunft vegetarischer Restaurants umfasst regenerative Praktiken, die über Nachhaltigkeit hinausgehen, um aktiv Bodengesundheit wiederherzustellen, Kohlenstoff zu binden, Biodiversität zu unterstützen und positive Umweltauswirkungen durch jeden Betrieb zu schaffen.",
                  "nl": "De toekomst van vegetarische restaurants omvat regeneratieve praktijken die verder gaan dan duurzaamheid om actief bodemgezondheid te herstellen, koolstof vast te leggen, biodiversiteit te ondersteunen en positieve milieueffecten te creëren door elke operatie."
        }
      },
      {
        question: {
                  "en": "What role does augmented reality (AR) play in modern vegetarian restaurant experiences?",
                  "es": "¿Qué papel juega la realidad aumentada (AR) en las experiencias modernas de restaurantes vegetarianos?",
                  "de": "Welche Rolle spielt Augmented Reality (AR) in modernen vegetarischen Restaurant-Erlebnissen?",
                  "nl": "Welke rol speelt augmented reality (AR) in moderne vegetarische restaurant ervaringen?"
        },
        options: [
        {
                  "en": "Interactive menus showing 3D dish visualizations, ingredient origins, and nutritional animations before ordering",
                  "es": "Menús interactivos mostrando visualizaciones 3D de platos, orígenes de ingredientes y animaciones nutricionales antes de ordenar",
                  "de": "Interaktive Menüs zeigen 3D-Gericht-Visualisierungen, Zutatenherkunft und Ernährungsanimationen vor der Bestellung",
                  "nl": "Interactieve menu's die 3D gerecht visualisaties, ingrediënt oorsprongen en voedingsanimaties tonen voor bestellen"
        },
        {
                  "en": "Replacing human service entirely",
                  "es": "Reemplazando servicio humano completamente",
                  "de": "Menschlichen Service vollständig ersetzen",
                  "nl": "Menselijke service volledig vervangen"
        },
        {
                  "en": "Only for gaming purposes",
                  "es": "Solo para propósitos de juegos",
                  "de": "Nur für Spielzwecke",
                  "nl": "Alleen voor game doeleinden"
        },
        {
                  "en": "No technology use",
                  "es": "Sin uso de tecnología",
                  "de": "Keine Technologienutzung",
                  "nl": "Geen technologie gebruik"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Progressive restaurants use AR technology through smartphone apps or smart glasses to display photorealistic 3D models of dishes, show farm locations, animate cooking processes, and provide interactive nutritional breakdowns, enhancing decision-making and engagement.",
                  "es": "Los restaurantes progresistas usan tecnología AR a través de apps de smartphone o gafas inteligentes para mostrar modelos 3D fotorrealistas de platos, mostrar ubicaciones de granjas, animar procesos de cocción y proporcionar desgloses nutricionales interactivos, mejorando toma de decisiones y compromiso.",
                  "de": "Progressive Restaurants verwenden AR-Technologie durch Smartphone-Apps oder Smart Glasses, um fotorealistische 3D-Modelle von Gerichten anzuzeigen, Farmstandorte zu zeigen, Kochprozesse zu animieren und interaktive Nährstoffaufschlüsselungen bereitzustellen, wodurch Entscheidungsfindung und Engagement verbessert werden.",
                  "nl": "Progressieve restaurants gebruiken AR technologie via smartphone apps of smart glasses om fotorealistische 3D modellen van gerechten te tonen, boerderij locaties te laten zien, kookprocessen te animeren en interactieve voedingsuitsplitsingen te bieden, besluitvorming en betrokkenheid verbeterend."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  }
})();