// Vegetarian Dishes Quiz - Level 9: Vegetarian Restaurant Trends
(function() {
  "use strict";
  const level9 = {
    name: {
      en: "Vegetarian Level 9",
      es: "Vegetariano Nivel 9",
      de: "Vegetarisch Stufe 9",
      nl: "Vegetarisch Level 9"
    },
    questions: [
      {
        question: {
          en: "What dining trend focuses on vegetables as the star of the plate?",
          es: "¿Qué tendencia gastronómica enfoca las verduras como la estrella del plato?",
          de: "Welcher Gastro-Trend stellt Gemüse als den Star des Tellers in den Mittelpunkt?",
          nl: "Welke eettrend focust op groenten als de ster van het bord?"
        },
        options: [
          { en: "Vegetable-forward dining", es: "Cocina centrada en verduras", de: "Gemüseorientiertes Essen", nl: "Groente-georiënteerd dineren" },
          { en: "Molecular gastronomy", es: "Gastronomía molecular", de: "Molekulargastronomie", nl: "Moleculaire gastronomie" },
          { en: "Fast casual", es: "Casual rápido", de: "Fast-Casual", nl: "Fast casual" },
          { en: "Fine dining", es: "Alta cocina", de: "Gehobene Gastronomie", nl: "Fine dining" }
        ],
        correct: 0,
        explanation: {
          en: "Vegetable-forward dining treats vegetables as the main attraction rather than side dishes, showcasing their flavors, textures, and preparations with the same attention given to meat dishes.",
          es: "La cocina centrada en verduras trata las verduras como la atracción principal en lugar de guarniciones, mostrando sus sabores, texturas y preparaciones con la misma atención dada a los platos de carne.",
          de: "Gemüseorientiertes Essen behandelt Gemüse als Hauptattraktion und nicht als Beilage, und zeigt ihre Aromen, Texturen und Zubereitungen mit derselben Aufmerksamkeit, die Fleischgerichten gewidmet wird.",
          nl: "Groente-georiënteerd dineren behandelt groenten als hoofdattractie in plaats van bijgerechten, toont hun smaken, texturen en bereidingen met dezelfde aandacht die aan vleesgerechten wordt gegeven."
        }
      },
      {
        question: {
          en: "Which restaurant concept has gained popularity by offering customizable bowls?",
          es: "¿Qué concepto de restaurante ha ganado popularidad ofreciendo bowls personalizables?",
          de: "Welches Restaurantkonzept hat durch das Angebot anpassbarer Bowls an Popularität gewonnen?",
          nl: "Welk restaurantconcept heeft populariteit gewonnen door het aanbieden van aanpasbare bowls?"
        },
        options: [
          { en: "Build-your-own bowl restaurants", es: "Restaurantes de arma-tu-propio-bowl", de: "Stell-dir-deine-Bowl-zusammen Restaurants", nl: "Bouw-je-eigen-bowl restaurants" },
          { en: "Traditional steakhouses", es: "Asadores tradicionales", de: "Traditionelle Steakhäuser", nl: "Traditionele steakhouses" },
          { en: "Pizza chains", es: "Cadenas de pizza", de: "Pizzaketten", nl: "Pizza ketens" },
          { en: "Burger joints", es: "Hamburgueserías", de: "Burger-Läden", nl: "Burger restaurants" }
        ],
        correct: 0,
        explanation: {
          en: "Build-your-own bowl restaurants like Sweetgreen, Chipotle, and Freshii have revolutionized fast-casual dining by letting customers customize healthy, vegetarian-friendly meals with fresh ingredients.",
          es: "Los restaurantes de arma-tu-propio-bowl como Sweetgreen, Chipotle y Freshii han revolucionado la comida casual rápida permitiendo a los clientes personalizar comidas saludables y amigables para vegetarianos con ingredientes frescos.",
          de: "Stell-dir-deine-Bowl-zusammen Restaurants wie Sweetgreen, Chipotle und Freshii haben die Fast-Casual-Gastronomie revolutioniert, indem sie Kunden ermöglichen, gesunde, vegetarierfreundliche Mahlzeiten mit frischen Zutaten anzupassen.",
          nl: "Bouw-je-eigen-bowl restaurants zoals Sweetgreen, Chipotle en Freshii hebben fast-casual dining gerevolutioneerd door klanten gezonde, vegetariërvriendelijke maaltijden te laten samenstellen met verse ingrediënten."
        }
      },
      {
        question: {
          en: "What is 'ghost kitchen' concept in relation to vegetarian food?",
          es: "¿Qué es el concepto de 'cocina fantasma' en relación con la comida vegetariana?",
          de: "Was ist das 'Ghost Kitchen'-Konzept in Bezug auf vegetarisches Essen?",
          nl: "Wat is het 'ghost kitchen' concept in relatie tot vegetarisch eten?"
        },
        options: [
          { en: "Delivery-only kitchens without physical dining spaces", es: "Cocinas solo para entrega sin espacios físicos para cenar", de: "Nur-Lieferküchen ohne physische Speiseräume", nl: "Alleen-bezorg keukens zonder fysieke eetruimtes" },
          { en: "Restaurants that serve spicy food", es: "Restaurantes que sirven comida picante", de: "Restaurants, die scharfes Essen servieren", nl: "Restaurants die pittig eten serveren" },
          { en: "Halloween-themed restaurants", es: "Restaurantes temáticos de Halloween", de: "Halloween-thematische Restaurants", nl: "Halloween-thema restaurants" },
          { en: "Restaurants that only serve white food", es: "Restaurantes que solo sirven comida blanca", de: "Restaurants, die nur weißes Essen servieren", nl: "Restaurants die alleen wit eten serveren" }
        ],
        correct: 0,
        explanation: {
          en: "Ghost kitchens focus solely on delivery and takeout, allowing vegetarian restaurants to reach more customers without expensive storefronts, leading to growth in plant-based delivery options.",
          es: "Las cocinas fantasma se enfocan únicamente en entrega y para llevar, permitiendo a los restaurantes vegetarianos llegar a más clientes sin costosos locales, llevando al crecimiento en opciones de entrega de comida vegetal.",
          de: "Ghost Kitchens konzentrieren sich ausschließlich auf Lieferung und Abholung, wodurch vegetarische Restaurants mehr Kunden erreichen können ohne teure Ladenlokale, was zum Wachstum bei pflanzlichen Lieferoptionen führt.",
          nl: "Ghost kitchens focussen uitsluitend op bezorging en afhaal, waardoor vegetarische restaurants meer klanten kunnen bereiken zonder dure winkelpanden, leidend tot groei in plantaardige bezorgopties."
        }
      },
      {
        question: {
          en: "Which dining trend emphasizes locally sourced, seasonal ingredients?",
          es: "¿Qué tendencia gastronómica enfatiza ingredientes locales y de temporada?",
          de: "Welcher Gastro-Trend betont lokal beschaffte, saisonale Zutaten?",
          nl: "Welke eettrend benadrukt lokaal geproduceerde, seizoensgebonden ingrediënten?"
        },
        options: [
          { en: "Farm-to-table movement", es: "Movimiento de la granja a la mesa", de: "Vom-Hof-auf-den-Tisch-Bewegung", nl: "Van-boer-tot-bord beweging" },
          { en: "Molecular gastronomy", es: "Gastronomía molecular", de: "Molekulargastronomie", nl: "Moleculaire gastronomie" },
          { en: "Fusion cuisine", es: "Cocina fusión", de: "Fusionsküche", nl: "Fusiekeuken" },
          { en: "Fast food", es: "Comida rápida", de: "Fast Food", nl: "Fast food" }
        ],
        correct: 0,
        explanation: {
          en: "The farm-to-table movement prioritizes fresh, locally sourced, seasonal ingredients, often featuring vegetables at their peak flavor and supporting local agriculture and sustainability.",
          es: "El movimiento de la granja a la mesa prioriza ingredientes frescos, locales y de temporada, a menudo presentando verduras en su punto máximo de sabor y apoyando la agricultura local y la sostenibilidad.",
          de: "Die Vom-Hof-auf-den-Tisch-Bewegung priorisiert frische, lokal beschaffte, saisonale Zutaten, oft mit Gemüse bei optimalem Geschmack und unterstützt lokale Landwirtschaft und Nachhaltigkeit.",
          nl: "De van-boer-tot-bord beweging geeft prioriteit aan verse, lokaal geproduceerde, seizoensgebonden ingrediënten, vaak met groenten op hun smaakhoogtepunt en ondersteunt lokale landbouw en duurzaamheid."
        }
      },
      {
        question: {
          en: "What is 'flexitarian' dining?",
          es: "¿Qué es la comida 'flexitariana'?",
          de: "Was ist 'Flexitarier'-Essen?",
          nl: "Wat is 'flexitarisch' eten?"
        },
        options: [
          { en: "Primarily vegetarian with occasional meat consumption", es: "Principalmente vegetariano con consumo ocasional de carne", de: "Hauptsächlich vegetarisch mit gelegentlichem Fleischkonsum", nl: "Voornamelijk vegetarisch met af en toe vleesconsumptie" },
          { en: "Only eating flexible foods", es: "Solo comer alimentos flexibles", de: "Nur flexible Lebensmittel essen", nl: "Alleen flexibele voedingsmiddelen eten" },
          { en: "Eating at flexible times", es: "Comer en horarios flexibles", de: "Zu flexiblen Zeiten essen", nl: "Eten op flexibele tijden" },
          { en: "Changing diets daily", es: "Cambiar dietas diariamente", de: "Täglich die Ernährung wechseln", nl: "Dagelijks van dieet wisselen" }
        ],
        correct: 0,
        explanation: {
          en: "Flexitarian dining caters to people who eat mostly vegetarian but occasionally include meat. Restaurants are adapting menus to appeal to this growing demographic with more plant-forward options.",
          es: "La comida flexitariana atiende a personas que comen principalmente vegetariano pero ocasionalmente incluyen carne. Los restaurantes están adaptando menús para atraer a esta demografía creciente con más opciones centradas en plantas.",
          de: "Flexitarier-Essen richtet sich an Menschen, die meist vegetarisch essen, aber gelegentlich Fleisch einschließen. Restaurants passen Menüs an, um diese wachsende Zielgruppe mit mehr pflanzenorientierten Optionen anzusprechen.",
          nl: "Flexitarisch eten richt zich op mensen die meestal vegetarisch eten maar af en toe vlees includeren. Restaurants passen menu's aan om deze groeiende doelgroep aan te spreken met meer plantgerichte opties."
        }
      },
      {
        question: {
          en: "Which trend involves restaurants growing their own produce?",
          es: "¿Qué tendencia implica que los restaurantes cultiven sus propios productos?",
          de: "Welcher Trend beinhaltet, dass Restaurants ihre eigenen Produkte anbauen?",
          nl: "Welke trend houdt in dat restaurants hun eigen producten kweken?"
        },
        options: [
          { en: "On-site urban farming", es: "Agricultura urbana en el sitio", de: "Vor-Ort-Stadtlandwirtschaft", nl: "Ter plaatse stadslandbouw" },
          { en: "Wholesale purchasing", es: "Compra al por mayor", de: "Großhandelseinkauf", nl: "Groothandel inkoop" },
          { en: "Frozen food usage", es: "Uso de comida congelada", de: "Tiefkühlkost-Nutzung", nl: "Bevroren voedsel gebruik" },
          { en: "Imported ingredients", es: "Ingredientes importados", de: "Importierte Zutaten", nl: "Geïmporteerde ingrediënten" }
        ],
        correct: 0,
        explanation: {
          en: "Many restaurants are implementing rooftop gardens, hydroponic systems, or partnerships with urban farms to grow their own herbs and vegetables, ensuring maximum freshness and sustainability.",
          es: "Muchos restaurantes están implementando jardines en azoteas, sistemas hidropónicos o asociaciones con granjas urbanas para cultivar sus propias hierbas y verduras, asegurando máxima frescura y sostenibilidad.",
          de: "Viele Restaurants implementieren Dachgärten, hydroponische Systeme oder Partnerschaften mit Stadtfarmen, um ihre eigenen Kräuter und Gemüse zu züchten und maximale Frische und Nachhaltigkeit zu gewährleisten.",
          nl: "Veel restaurants implementeren daktuinen, hydroponische systemen of partnerschappen met stadsboerderijen om hun eigen kruiden en groenten te kweken, maximale versheid en duurzaamheid verzekerd."
        }
      },
      {
        question: {
          en: "What is the 'plant-based fine dining' trend?",
          es: "¿Qué es la tendencia de 'alta cocina basada en plantas'?",
          de: "Was ist der 'pflanzliche Fine-Dining'-Trend?",
          nl: "Wat is de 'plantaardige fine dining' trend?"
        },
        options: [
          { en: "Upscale restaurants creating sophisticated vegetarian tasting menus", es: "Restaurantes de lujo creando menús de degustación vegetarianos sofisticados", de: "Gehobene Restaurants erstellen ausgeklügelte vegetarische Verkostungsmenüs", nl: "Luxe restaurants creëren geavanceerde vegetarische proeverij menu's" },
          { en: "Fast food with vegetables", es: "Comida rápida con verduras", de: "Fast Food mit Gemüse", nl: "Fast food met groenten" },
          { en: "Expensive meat dishes", es: "Platos de carne caros", de: "Teure Fleischgerichte", nl: "Dure vleesgerechten" },
          { en: "Cheap vegetarian food", es: "Comida vegetariana barata", de: "Billiges vegetarisches Essen", nl: "Goedkoop vegetarisch eten" }
        ],
        correct: 0,
        explanation: {
          en: "Plant-based fine dining elevates vegetarian cuisine to gourmet status, with Michelin-starred chefs creating elaborate, artistic dishes that showcase vegetables with techniques traditionally reserved for meat.",
          es: "La alta cocina basada en plantas eleva la cocina vegetariana a estatus gourmet, con chefs con estrella Michelin creando platos elaborados y artísticos que muestran verduras con técnicas tradicionalmente reservadas para la carne.",
          de: "Pflanzliche Fine-Dining hebt vegetarische Küche auf Gourmet-Status, mit Michelin-Sterne-Köchen, die aufwendige, künstlerische Gerichte schaffen, die Gemüse mit Techniken zeigen, die traditionell für Fleisch reserviert sind.",
          nl: "Plantaardige fine dining verheft vegetarische keuken tot gourmet status, met Michelin-sterren chefs die uitgebreide, artistieke gerechten creëren die groenten tonen met technieken traditioneel gereserveerd voor vlees."
        }
      },
      {
        question: {
          en: "Which technology is being used to enhance vegetarian restaurant experiences?",
          es: "¿Qué tecnología se está usando para mejorar las experiencias de restaurantes vegetarianos?",
          de: "Welche Technologie wird verwendet, um vegetarische Restauranterfahrungen zu verbessern?",
          nl: "Welke technologie wordt gebruikt om vegetarische restaurant ervaringen te verbeteren?"
        },
        options: [
          { en: "AI-powered menu recommendations based on dietary preferences", es: "Recomendaciones de menú con IA basadas en preferencias dietéticas", de: "KI-gesteuerte Menüempfehlungen basierend auf Ernährungsvorlieben", nl: "AI-aangedreven menu aanbevelingen gebaseerd op dieetvoorkeuren" },
          { en: "Traditional paper menus only", es: "Solo menús de papel tradicionales", de: "Nur traditionelle Papiermenüs", nl: "Alleen traditionele papieren menu's" },
          { en: "Cash-only payments", es: "Solo pagos en efectivo", de: "Nur Barzahlungen", nl: "Alleen contante betalingen" },
          { en: "No technology at all", es: "Ninguna tecnología en absoluto", de: "Überhaupt keine Technologie", nl: "Helemaal geen technologie" }
        ],
        correct: 0,
        explanation: {
          en: "Restaurants are using AI to analyze customer preferences and dietary restrictions to suggest personalized vegetarian dishes, while apps help diners find plant-based options and track nutritional information.",
          es: "Los restaurantes están usando IA para analizar preferencias de clientes y restricciones dietéticas para sugerir platos vegetarianos personalizados, mientras las apps ayudan a comensales a encontrar opciones vegetales y rastrear información nutricional.",
          de: "Restaurants verwenden KI, um Kundenvorlieben und Ernährungseinschränkungen zu analysieren und personalisierte vegetarische Gerichte vorzuschlagen, während Apps Gästen helfen, pflanzliche Optionen zu finden und Ernährungsinformationen zu verfolgen.",
          nl: "Restaurants gebruiken AI om klantvoorkeuren en dieetbeperkingen te analyseren om gepersonaliseerde vegetarische gerechten voor te stellen, terwijl apps gasten helpen plantaardige opties te vinden en voedingsinformatie bij te houden."
        }
      },
      {
        question: {
          en: "What is the 'zero-waste' movement in vegetarian restaurants?",
          es: "¿Qué es el movimiento de 'cero desperdicio' en restaurantes vegetarianos?",
          de: "Was ist die 'Zero-Waste'-Bewegung in vegetarischen Restaurants?",
          nl: "Wat is de 'zero-waste' beweging in vegetarische restaurants?"
        },
        options: [
          { en: "Using all parts of ingredients and minimizing food waste", es: "Usar todas las partes de los ingredientes y minimizar el desperdicio de comida", de: "Alle Teile der Zutaten verwenden und Lebensmittelverschwendung minimieren", nl: "Alle delen van ingrediënten gebruiken en voedselverspilling minimaliseren" },
          { en: "Not serving food at all", es: "No servir comida en absoluto", de: "Überhaupt kein Essen servieren", nl: "Helemaal geen eten serveren" },
          { en: "Only using expensive ingredients", es: "Solo usar ingredientes caros", de: "Nur teure Zutaten verwenden", nl: "Alleen dure ingrediënten gebruiken" },
          { en: "Serving tiny portions", es: "Servir porciones pequeñas", de: "Winzige Portionen servieren", nl: "Kleine porties serveren" }
        ],
        correct: 0,
        explanation: {
          en: "Zero-waste vegetarian restaurants use vegetable scraps for stocks, fruit peels for garnishes, and stems for seasonings, while composting unavoidable waste and minimizing packaging.",
          es: "Los restaurantes vegetarianos de cero desperdicio usan restos de verduras para caldos, cáscaras de frutas para guarniciones y tallos para condimentos, mientras compostan desechos inevitables y minimizan el empaque.",
          de: "Zero-Waste vegetarische Restaurants verwenden Gemüseabfälle für Brühen, Fruchtschalen für Garnituren und Stiele für Gewürze, während sie unvermeidbare Abfälle kompostieren und Verpackungen minimieren.",
          nl: "Zero-waste vegetarische restaurants gebruiken groente restjes voor bouillon, fruitschillen voor garnituur en stelen voor kruiden, terwijl ze onvermijdelijk afval composteren en verpakkingen minimaliseren."
        }
      },
      {
        question: {
          en: "Which dining format has become popular for showcasing vegetarian creativity?",
          es: "¿Qué formato gastronómico se ha vuelto popular para mostrar la creatividad vegetariana?",
          de: "Welches Gastronomieformat ist beliebt geworden, um vegetarische Kreativität zu zeigen?",
          nl: "Welk eetformaat is populair geworden voor het tonen van vegetarische creativiteit?"
        },
        options: [
          { en: "Pop-up restaurants and chef collaborations", es: "Restaurantes pop-up y colaboraciones de chefs", de: "Pop-up-Restaurants und Koch-Kollaborationen", nl: "Pop-up restaurants en chef samenwerkingen" },
          { en: "Drive-through only", es: "Solo autoservicio", de: "Nur Drive-Through", nl: "Alleen drive-through" },
          { en: "Cafeteria style", es: "Estilo cafetería", de: "Cafeteria-Stil", nl: "Cafetaria stijl" },
          { en: "Buffet only", es: "Solo buffet", de: "Nur Buffet", nl: "Alleen buffet" }
        ],
        correct: 0,
        explanation: {
          en: "Pop-up vegetarian restaurants and chef collaborations allow for experimental menus, unique dining experiences, and creative partnerships that push the boundaries of plant-based cuisine.",
          es: "Los restaurantes vegetarianos pop-up y colaboraciones de chefs permiten menús experimentales, experiencias gastronómicas únicas y asociaciones creativas que empujan los límites de la cocina vegetal.",
          de: "Pop-up vegetarische Restaurants und Koch-Kollaborationen ermöglichen experimentelle Menüs, einzigartige Speiseerlebnisse und kreative Partnerschaften, die die Grenzen der pflanzlichen Küche erweitern.",
          nl: "Pop-up vegetarische restaurants en chef samenwerkingen maken experimentele menu's, unieke eet ervaringen en creatieve partnerschappen mogelijk die de grenzen van plantaardige keuken verleggen."
        }
      },
      {
        question: {
          en: "What is 'veggie-centric' menu design?",
          es: "¿Qué es el diseño de menú 'centrado en verduras'?",
          de: "Was ist 'gemüsezentrierte' Menügestaltung?",
          nl: "Wat is 'groente-centrisch' menu ontwerp?"
        },
        options: [
          { en: "Organizing menus around vegetables rather than protein categories", es: "Organizar menús alrededor de verduras en lugar de categorías de proteína", de: "Menüs um Gemüse anstatt um Proteinkategorien organisieren", nl: "Menu's organiseren rond groenten in plaats van eiwit categorieën" },
          { en: "Only listing expensive items", es: "Solo listar artículos caros", de: "Nur teure Artikel auflisten", nl: "Alleen dure items vermelden" },
          { en: "Using green color only", es: "Usar solo color verde", de: "Nur grüne Farbe verwenden", nl: "Alleen groene kleur gebruiken" },
          { en: "Having no meat options", es: "No tener opciones de carne", de: "Keine Fleischoptionen haben", nl: "Geen vlees opties hebben" }
        ],
        correct: 0,
        explanation: {
          en: "Veggie-centric menu design features vegetables as main dishes rather than sides, organizing sections by cooking methods or vegetable types rather than traditional protein categories.",
          es: "El diseño de menú centrado en verduras presenta las verduras como platos principales en lugar de acompañamientos, organizando secciones por métodos de cocción o tipos de verduras en lugar de categorías tradicionales de proteína.",
          de: "Gemüsezentrierte Menügestaltung stellt Gemüse als Hauptgerichte anstatt als Beilagen dar und organisiert Abschnitte nach Kochmethoden oder Gemüsearten anstatt nach traditionellen Proteinkategorien.",
          nl: "Groente-centrisch menu ontwerp toont groenten als hoofdgerechten in plaats van bijgerechten, organiseert secties naar kookmethoden of groente soorten in plaats van traditionele eiwit categorieën."
        }
      },
      {
        question: {
          en: "Which service model has grown in response to dietary restrictions?",
          es: "¿Qué modelo de servicio ha crecido en respuesta a las restricciones dietéticas?",
          de: "Welches Servicemodell ist als Antwort auf Ernährungseinschränkungen gewachsen?",
          nl: "Welk service model is gegroeid in reactie op dieet beperkingen?"
        },
        options: [
          { en: "Allergen-free and customizable meal prep services", es: "Servicios de preparación de comidas sin alérgenos y personalizables", de: "Allergenfreie und anpassbare Mahlzeiten-Vorbereitungsservice", nl: "Allergeenvrije en aanpasbare maaltijd bereidingsdiensten" },
          { en: "Standard chain restaurants", es: "Restaurantes de cadena estándar", de: "Standard-Kettenrestaurants", nl: "Standaard keten restaurants" },
          { en: "Traditional butcher shops", es: "Carnicerías tradicionales", de: "Traditionelle Metzgereien", nl: "Traditionele slagerijen" },
          { en: "Seafood-only restaurants", es: "Restaurantes solo de mariscos", de: "Nur-Meeresfrüchte-Restaurants", nl: "Alleen-zeevruchten restaurants" }
        ],
        correct: 0,
        explanation: {
          en: "Meal prep services specializing in vegetarian, vegan, gluten-free, and other dietary restrictions have grown rapidly, offering convenient, customized healthy meals delivered to customers.",
          es: "Los servicios de preparación de comidas especializados en vegetarianos, veganos, sin gluten y otras restricciones dietéticas han crecido rápidamente, ofreciendo comidas saludables convenientes y personalizadas entregadas a los clientes.",
          de: "Mahlzeiten-Vorbereitungsservice, die sich auf vegetarische, vegane, glutenfreie und andere Ernährungseinschränkungen spezialisieren, sind schnell gewachsen und bieten bequeme, angepasste gesunde Mahlzeiten an Kunden geliefert.",
          nl: "Maaltijd bereidingsdiensten gespecialiseerd in vegetarisch, veganistisch, glutenvrij en andere dieet beperkingen zijn snel gegroeid, biedend handige, aangepaste gezonde maaltijden geleverd aan klanten."
        }
      },
      {
        question: {
          en: "What is 'ingredient transparency' in modern vegetarian restaurants?",
          es: "¿Qué es la 'transparencia de ingredientes' en restaurantes vegetarianos modernos?",
          de: "Was ist 'Zutaten-Transparenz' in modernen vegetarischen Restaurants?",
          nl: "Wat is 'ingrediënt transparantie' in moderne vegetarische restaurants?"
        },
        options: [
          { en: "Clearly listing all ingredients, sources, and preparation methods", es: "Listar claramente todos los ingredientes, fuentes y métodos de preparación", de: "Alle Zutaten, Quellen und Zubereitungsmethoden klar auflisten", nl: "Duidelijk alle ingrediënten, bronnen en bereidingsmethoden vermelden" },
          { en: "Using only clear ingredients", es: "Usar solo ingredientes transparentes", de: "Nur durchsichtige Zutaten verwenden", nl: "Alleen doorzichtige ingrediënten gebruiken" },
          { en: "Hiding ingredient information", es: "Ocultar información de ingredientes", de: "Zutatinformationen verstecken", nl: "Ingrediënt informatie verbergen" },
          { en: "Using complex ingredient names", es: "Usar nombres complejos de ingredientes", de: "Komplexe Zutatennamen verwenden", nl: "Complexe ingrediënt namen gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Ingredient transparency involves detailed menu descriptions, sourcing information, allergen warnings, and preparation methods, allowing customers to make informed choices about their vegetarian meals.",
          es: "La transparencia de ingredientes involucra descripciones detalladas del menú, información de fuentes, advertencias de alérgenos y métodos de preparación, permitiendo a los clientes tomar decisiones informadas sobre sus comidas vegetarianas.",
          de: "Zutaten-Transparenz beinhaltet detaillierte Menübeschreibungen, Beschaffungsinformationen, Allergenwarnungen und Zubereitungsmethoden, wodurch Kunden informierte Entscheidungen über ihre vegetarischen Mahlzeiten treffen können.",
          nl: "Ingrediënt transparantie houdt gedetailleerde menu beschrijvingen, herkomst informatie, allergeen waarschuwingen en bereidingsmethoden in, waardoor klanten geïnformeerde keuzes kunnen maken over hun vegetarische maaltijden."
        }
      },
      {
        question: {
          en: "Which trend focuses on the environmental impact of food choices?",
          es: "¿Qué tendencia se enfoca en el impacto ambiental de las opciones alimentarias?",
          de: "Welcher Trend konzentriert sich auf die Umweltauswirkungen von Lebensmittelentscheidungen?",
          nl: "Welke trend focust op de milieuimpact van voedselkeuzes?"
        },
        options: [
          { en: "Carbon footprint labeling on menus", es: "Etiquetado de huella de carbono en menús", de: "CO2-Fußabdruck-Kennzeichnung auf Menüs", nl: "CO2 voetafdruk labeling op menu's" },
          { en: "Expensive ingredient promotion", es: "Promoción de ingredientes caros", de: "Teure Zutatenwerbung", nl: "Dure ingrediënt promotie" },
          { en: "Fast food emphasis", es: "Énfasis en comida rápida", de: "Fast-Food-Betonung", nl: "Fast food nadruk" },
          { en: "Portion size increase", es: "Aumento del tamaño de la porción", de: "Vergrößerung der Portionsgröße", nl: "Portie grootte verhoging" }
        ],
        correct: 0,
        explanation: {
          en: "Some progressive restaurants now include carbon footprint information on menus, helping environmentally conscious diners understand the climate impact of their food choices and promoting lower-impact options.",
          es: "Algunos restaurantes progresistas ahora incluyen información de huella de carbono en menús, ayudando a comensales conscientes del ambiente a entender el impacto climático de sus opciones alimentarias y promoviendo opciones de menor impacto.",
          de: "Einige progressive Restaurants enthalten jetzt CO2-Fußabdruck-Informationen auf Menüs, die umweltbewussten Gästen helfen, die Klimaauswirkungen ihrer Lebensmittelentscheidungen zu verstehen und Optionen mit geringeren Auswirkungen fördern.",
          nl: "Sommige vooruitstrevende restaurants bevatten nu CO2 voetafdruk informatie op menu's, helpend milieubewuste gasten de klimaatimpact van hun voedselkeuzes te begrijpen en opties met lagere impact te promoten."
        }
      },
      {
        question: {
          en: "What is 'social media-driven' menu development?",
          es: "¿Qué es el desarrollo de menú 'impulsado por redes sociales'?",
          de: "Was ist 'Social-Media-getriebene' Menüentwicklung?",
          nl: "Wat is 'social media-gedreven' menu ontwikkeling?"
        },
        options: [
          { en: "Creating visually appealing dishes designed for sharing online", es: "Crear platos visualmente atractivos diseñados para compartir en línea", de: "Visuell ansprechende Gerichte schaffen, die zum Online-Teilen entwickelt wurden", nl: "Visueel aantrekkelijke gerechten creëren ontworpen voor online delen" },
          { en: "Only serving traditional dishes", es: "Solo servir platos tradicionales", de: "Nur traditionelle Gerichte servieren", nl: "Alleen traditionele gerechten serveren" },
          { en: "Avoiding any food photography", es: "Evitar cualquier fotografía de comida", de: "Jede Essensfotografie vermeiden", nl: "Elke voedselfotografie vermijden" },
          { en: "Using only black and white presentations", es: "Usar solo presentaciones en blanco y negro", de: "Nur Schwarz-Weiß-Präsentationen verwenden", nl: "Alleen zwart-wit presentaties gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Restaurants design Instagram-worthy vegetarian dishes with vibrant colors, artistic plating, and unique presentations that encourage customers to share photos, creating organic marketing and social proof.",
          es: "Los restaurantes diseñan platos vegetarianos dignos de Instagram con colores vibrantes, emplatado artístico y presentaciones únicas que animan a los clientes a compartir fotos, creando marketing orgánico y prueba social.",
          de: "Restaurants entwerfen Instagram-würdige vegetarische Gerichte mit lebendigen Farben, künstlerischem Anrichten und einzigartigen Präsentationen, die Kunden ermutigen, Fotos zu teilen und organisches Marketing und sozialen Beweis zu schaffen.",
          nl: "Restaurants ontwerpen Instagram-waardige vegetarische gerechten met levendige kleuren, artistieke opmaak en unieke presentaties die klanten aanmoedigen foto's te delen, organische marketing en sociale bewijsvoering creërend."
        }
      },
      {
        question: {
          en: "Which dining trend emphasizes minimal processing of ingredients?",
          es: "¿Qué tendencia gastronómica enfatiza el procesamiento mínimo de ingredientes?",
          de: "Welcher Gastro-Trend betont minimale Verarbeitung von Zutaten?",
          nl: "Welke eettrend benadrukt minimale verwerking van ingrediënten?"
        },
        options: [
          { en: "Whole food, plant-based movement", es: "Movimiento de alimentos integrales basados en plantas", de: "Vollwert-pflanzliche Bewegung", nl: "Hele voeding, plantaardige beweging" },
          { en: "Molecular gastronomy", es: "Gastronomía molecular", de: "Molekulargastronomie", nl: "Moleculaire gastronomie" },
          { en: "Ultra-processed food focus", es: "Enfoque en alimentos ultraprocesados", de: "Ultra-verarbeiteter Lebensmittelfokus", nl: "Ultra-verwerkt voedsel focus" },
          { en: "Artificial ingredient emphasis", es: "Énfasis en ingredientes artificiales", de: "Künstliche Zutatbetonung", nl: "Kunstmatige ingrediënt nadruk" }
        ],
        correct: 0,
        explanation: {
          en: "The whole food, plant-based movement emphasizes vegetables, fruits, grains, and legumes in their most natural state, avoiding processed foods and focusing on nutritional density.",
          es: "El movimiento de alimentos integrales basados en plantas enfatiza verduras, frutas, granos y legumbres en su estado más natural, evitando alimentos procesados y enfocándose en densidad nutricional.",
          de: "Die Vollwert-pflanzliche Bewegung betont Gemüse, Früchte, Getreide und Hülsenfrüchte in ihrem natürlichsten Zustand, vermeidet verarbeitete Lebensmittel und konzentriert sich auf Nährstoffdichte.",
          nl: "De hele voeding, plantaardige beweging benadrukt groenten, fruit, granen en peulvruchten in hun meest natuurlijke staat, vermijdt verwerkte voedingsmiddelen en focust op voedingsdichtheid."
        }
      },
      {
        question: {
          en: "What is 'community-supported agriculture' (CSA) in restaurant context?",
          es: "¿Qué es la 'agricultura apoyada por la comunidad' (CSA) en contexto de restaurante?",
          de: "Was ist 'gemeinschaftlich unterstützte Landwirtschaft' (CSA) im Restaurantkontext?",
          nl: "Wat is 'door de gemeenschap ondersteunde landbouw' (CSA) in restaurant context?"
        },
        options: [
          { en: "Restaurants partnering directly with local farms for seasonal produce", es: "Restaurantes asociándose directamente con granjas locales para productos de temporada", de: "Restaurants, die direkt mit lokalen Farmen für saisonale Produkte kooperieren", nl: "Restaurants die direct samenwerken met lokale boerderijen voor seizoensproducten" },
          { en: "Customers growing their own food", es: "Clientes cultivando su propia comida", de: "Kunden bauen ihr eigenes Essen an", nl: "Klanten kweken hun eigen voedsel" },
          { en: "Government food programs", es: "Programas gubernamentales de alimentos", de: "Regierungsernährungsprogramme", nl: "Overheidsvoedingsprogramma's" },
          { en: "International food imports", es: "Importaciones internacionales de alimentos", de: "Internationale Lebensmittelimporte", nl: "Internationale voedselimporten" }
        ],
        correct: 0,
        explanation: {
          en: "CSA partnerships allow restaurants to receive fresh, seasonal produce directly from local farms, often influencing menu changes based on what's available and supporting local agriculture.",
          es: "Las asociaciones CSA permiten a los restaurantes recibir productos frescos y de temporada directamente de granjas locales, a menudo influyendo cambios de menú basados en lo que está disponible y apoyando la agricultura local.",
          de: "CSA-Partnerschaften ermöglichen es Restaurants, frische, saisonale Produkte direkt von lokalen Farmen zu erhalten, oft Menüänderungen basierend auf dem Verfügbaren zu beeinflussen und lokale Landwirtschaft zu unterstützen.",
          nl: "CSA partnerschappen stellen restaurants in staat verse, seizoensproducten direct van lokale boerderijen te ontvangen, vaak menu veranderingen beïnvloedend gebaseerd op wat beschikbaar is en lokale landbouw ondersteunend."
        }
      },
      {
        question: {
          en: "Which trend involves chefs traveling to source ingredients personally?",
          es: "¿Qué tendencia involucra a chefs viajando para obtener ingredientes personalmente?",
          de: "Welcher Trend beinhaltet, dass Köche reisen, um Zutaten persönlich zu beschaffen?",
          nl: "Welke trend houdt in dat chefs reizen om ingrediënten persoonlijk te verkrijgen?"
        },
        options: [
          { en: "Foraging and terroir-focused cooking", es: "Cocina enfocada en forrajeo y terroir", de: "Sammeln und Terroir-fokussiertes Kochen", nl: "Foerageren en terroir-gericht koken" },
          { en: "Convenience food usage", es: "Uso de alimentos de conveniencia", de: "Verwendung von Fertignahrung", nl: "Gebruik van gemaksvoedsels" },
          { en: "Frozen food emphasis", es: "Énfasis en alimentos congelados", de: "Betonung auf Tiefkühlkost", nl: "Nadruk op bevroren voedsel" },
          { en: "Processed ingredient focus", es: "Enfoque en ingredientes procesados", de: "Fokus auf verarbeitete Zutaten", nl: "Focus op verwerkte ingrediënten" }
        ],
        correct: 0,
        explanation: {
          en: "Some high-end vegetarian restaurants feature chefs who forage for wild ingredients or travel to specific regions to source unique vegetables, herbs, and other plant-based ingredients that express local terroir.",
          es: "Algunos restaurantes vegetarianos de alta gama presentan chefs que buscan ingredientes silvestres o viajan a regiones específicas para obtener verduras únicas, hierbas y otros ingredientes vegetales que expresan el terroir local.",
          de: "Einige gehobene vegetarische Restaurants zeigen Köche, die nach wilden Zutaten sammeln oder zu spezifischen Regionen reisen, um einzigartige Gemüse, Kräuter und andere pflanzliche Zutaten zu beschaffen, die lokales Terroir ausdrücken.",
          nl: "Sommige high-end vegetarische restaurants tonen chefs die foerageren naar wilde ingrediënten of reizen naar specifieke regio's om unieke groenten, kruiden en andere plantaardige ingrediënten te verkrijgen die lokaal terroir uitdrukken."
        }
      },
      {
        question: {
          en: "What dining trend focuses on vegetables as the star of the plate?",
          es: "¿Qué tendencia gastronómica enfoca las verduras como la estrella del plato?",
          de: "Welcher Gastro-Trend stellt Gemüse als den Star des Tellers in den Mittelpunkt?",
          nl: "Welke eettrend focust op groenten als de ster van het bord?"
        },
        options: [
          { en: "Vegetable-forward dining", es: "Cocina centrada en verduras", de: "Gemüseorientiertes Essen", nl: "Groente-georiënteerd dineren" },
          { en: "Molecular gastronomy", es: "Gastronomía molecular", de: "Molekulargastronomie", nl: "Moleculaire gastronomie" },
          { en: "Fast casual", es: "Casual rápido", de: "Fast-Casual", nl: "Fast casual" },
          { en: "Fine dining", es: "Alta cocina", de: "Gehobene Gastronomie", nl: "Fine dining" }
        ],
        correct: 0,
        explanation: {
          en: "Vegetable-forward dining treats vegetables as the main attraction rather than side dishes, showcasing their flavors, textures, and preparations with the same attention given to meat dishes.",
          es: "La cocina centrada en verduras trata las verduras como la atracción principal en lugar de guarniciones, mostrando sus sabores, texturas y preparaciones con la misma atención dada a los platos de carne.",
          de: "Gemüseorientiertes Essen behandelt Gemüse als Hauptattraktion und nicht als Beilage, und zeigt ihre Aromen, Texturen und Zubereitungen mit derselben Aufmerksamkeit, die Fleischgerichten gewidmet wird.",
          nl: "Groente-georiënteerd dineren behandelt groenten als hoofdattractie in plaats van bijgerechten, toont hun smaken, texturen en bereidingen met dezelfde aandacht die aan vleesgerechten wordt gegeven."
        }
      },
      {
        question: {
          en: "Which restaurant concept has gained popularity by offering customizable bowls?",
          es: "¿Qué concepto de restaurante ha ganado popularidad ofreciendo bowls personalizables?",
          de: "Welches Restaurantkonzept hat durch das Angebot anpassbarer Bowls an Popularität gewonnen?",
          nl: "Welk restaurantconcept heeft populariteit gewonnen door het aanbieden van aanpasbare bowls?"
        },
        options: [
          { en: "Build-your-own bowl restaurants", es: "Restaurantes de arma-tu-propio-bowl", de: "Stell-dir-deine-Bowl-zusammen Restaurants", nl: "Bouw-je-eigen-bowl restaurants" },
          { en: "Traditional steakhouses", es: "Asadores tradicionales", de: "Traditionelle Steakhäuser", nl: "Traditionele steakhouses" },
          { en: "Pizza chains", es: "Cadenas de pizza", de: "Pizzaketten", nl: "Pizza ketens" },
          { en: "Burger joints", es: "Hamburgueserías", de: "Burger-Läden", nl: "Burger restaurants" }
        ],
        correct: 0,
        explanation: {
          en: "Build-your-own bowl restaurants like Sweetgreen, Chipotle, and Freshii have revolutionized fast-casual dining by letting customers customize healthy, vegetarian-friendly meals with fresh ingredients.",
          es: "Los restaurantes de arma-tu-propio-bowl como Sweetgreen, Chipotle y Freshii han revolucionado la comida casual rápida permitiendo a los clientes personalizar comidas saludables y amigables para vegetarianos con ingredientes frescos.",
          de: "Stell-dir-deine-Bowl-zusammen Restaurants wie Sweetgreen, Chipotle und Freshii haben die Fast-Casual-Gastronomie revolutioniert, indem sie Kunden ermöglichen, gesunde, vegetarierfreundliche Mahlzeiten mit frischen Zutaten anzupassen.",
          nl: "Bouw-je-eigen-bowl restaurants zoals Sweetgreen, Chipotle en Freshii hebben fast-casual dining gerevolutioneerd door klanten gezonde, vegetariërvriendelijke maaltijden te laten samenstellen met verse ingrediënten."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  }
  return level9;
})();