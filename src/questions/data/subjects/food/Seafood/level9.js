// Seafood Quiz - Level 9
(function() {
  const level9 = {
    name: {
      en: "Seafood Level 9",
      es: "Mariscos Nivel 9",
      de: "Meeresfrüchte Stufe 9",
      nl: "Zeevruchten Level 9"
    },
    questions: [
{
        question: {
          en: "What is 'sashimi-zukuri' technique and its different cuts?",
          es: "¿Qué es la técnica 'sashimi-zukuri' y sus diferentes cortes?",
          de: "Was ist 'Sashimi-Zukuri' Technik und ihre verschiedenen Schnitte?",
          nl: "Wat is 'sashimi-zukuri' techniek en zijn verschillende snedes?"
        },
        options: [
          { en: "Japanese slicing methods: hira-zukuri (rectangular), usu-zukuri (paper-thin), sogi-giri (angled), kaku-zukuri (cubes) - each for specific fish textures", es: "Métodos de rebanado japoneses: hira-zukuri (rectangular), usu-zukuri (delgado como papel), sogi-giri (en ángulo), kaku-zukuri (cubos) - cada uno para texturas específicas de pescado", de: "Japanische Schneidemethoden: Hira-Zukuri (rechteckig), Usu-Zukuri (papierdünn), Sogi-Giri (schräg), Kaku-Zukuri (Würfel) - jeweils für spezifische Fischtexturen", nl: "Japanse snijmethoden: hira-zukuri (rechthoekig), usu-zukuri (papierdun), sogi-giri (schuin), kaku-zukuri (blokjes) - elk voor specifieke vis texturen" },
          { en: "One standard cut only", es: "Solo un corte estándar", de: "Nur ein Standard-Schnitt", nl: "Slechts één standaard snede" },
          { en: "Random slicing", es: "Rebanado aleatorio", de: "Zufälliges Schneiden", nl: "Willekeurig snijden" },
          { en: "Cube cutting only", es: "Solo corte en cubos", de: "Nur Würfelschnitt", nl: "Alleen kubus snijden" }
        ],
        correct: 0,
        explanation: {
          en: "Sashimi-zukuri cuts: Hira-zukuri (standard) - 1/4-inch thick rectangles for most fish. Usu-zukuri (thin) - paper-thin for firm fish like fugu, fluke. Sogi-giri (angled) - diagonal slices for texture. Kaku-zukuri (cubes) - for tuna tartare style. Technique: single pull stroke with yanagiba knife, no sawing. Cut against grain for tender texture. Each cut showcases fish differently - thin slices for delicate, thick for rich fish.",
          es: "Cortes sashimi-zukuri: Hira-zukuri (estándar) - rectángulos de 1/4 pulgada de grosor para la mayoría de pescados. Usu-zukuri (delgado) - delgado como papel para pescado firme como fugu, lenguado. Sogi-giri (en ángulo) - rebanadas diagonales para textura. Kaku-zukuri (cubos) - para estilo tartare de atún. Técnica: golpe de tracción único con cuchillo yanagiba, sin serrar. Cortar contra grano para textura tierna. Cada corte muestra pescado diferentemente - rebanadas delgadas para delicado, grueso para pescado rico.",
          de: "Sashimi-Zukuri Schnitte: Hira-Zukuri (Standard) - 6mm dicke Rechtecke für die meisten Fische. Usu-Zukuri (dünn) - papierdünn für festen Fisch wie Fugu, Flunder. Sogi-Giri (schräg) - diagonale Scheiben für Textur. Kaku-Zukuri (Würfel) - für Thunfisch-Tartare-Stil. Technik: einzelner Zugstrich mit Yanagiba-Messer, kein Sägen. Gegen Faser schneiden für zarte Textur. Jeder Schnitt zeigt Fisch anders - dünne Scheiben für zart, dick für reichen Fisch.",
          nl: "Sashimi-zukuri snedes: Hira-zukuri (standaard) - 6mm dikke rechthoeken voor meeste vis. Usu-zukuri (dun) - papierdun voor stevige vis zoals fugu, bot. Sogi-giri (schuin) - diagonale plakken voor textuur. Kaku-zukuri (blokjes) - voor tonijn tartare stijl. Techniek: enkele trek slag met yanagiba mes, geen zagen. Snijd tegen draad voor zachte textuur. Elke snede toont vis anders - dunne plakken voor delicaat, dik voor rijke vis."
        }
      },
      {
        question: {
          en: "What is 'kobujime' aging technique?",
          es: "¿Qué es la técnica de envejecimiento 'kobujime'?",
          de: "Was ist 'Kobujime' Alterungstechnik?",
          nl: "Wat is 'kobujime' verouderingstechniek?"
        },
        options: [
          { en: "Japanese method of aging fish between kombu seaweed sheets, draws moisture, concentrates umami, firms texture - 6-24 hours produces silky, intense flavor", es: "Método japonés de envejecer pescado entre láminas de alga kombu, extrae humedad, concentra umami, firma textura - 6-24 horas produce sabor sedoso e intenso", de: "Japanische Methode des Fisch-Alterns zwischen Kombu-Algenblättern, zieht Feuchtigkeit, konzentriert Umami, festigt Textur - 6-24 Stunden produziert seidigen, intensiven Geschmack", nl: "Japanse methode van vis verouderen tussen kombu zeewier vellen, trekt vocht, concentreert umami, verstevigt textuur - 6-24 uur produceert zijdeachtige, intense smaak" },
          { en: "Freezing technique", es: "Técnica de congelación", de: "Gefrier-Technik", nl: "Vriestechniek" },
          { en: "Salt curing", es: "Curado en sal", de: "Salzpökelung", nl: "Zout curen" },
          { en: "Smoking method", es: "Método de ahumar", de: "Räucher-Methode", nl: "Rook methode" }
        ],
        correct: 0,
        explanation: {
          en: "Kobujime: advanced Japanese aging. Wipe kombu (kelp), lightly dampen. Salt fish lightly, sandwich between kombu sheets, wrap, refrigerate 6-24 hrs. Kombu draws moisture (firms texture), infuses umami glutamates, adds subtle ocean flavor. Result: concentrated taste, silky texture, improved mouthfeel. Used for white fish (tai, hirame, halibut), octopus. Technique: remove before kombu flavor overpowers. Modern sushi chefs' secret for elevating nigiri. Different from regular aging.",
          es: "Kobujime: envejecimiento japonés avanzado. Limpiar kombu (kelp), humedecer ligeramente. Salar pescado ligeramente, intercalar entre láminas de kombu, envolver, refrigerar 6-24 hrs. Kombu extrae humedad (firma textura), infunde glutamatos umami, añade sabor sutil de océano. Resultado: sabor concentrado, textura sedosa, sensación en boca mejorada. Usado para pescado blanco (tai, hirame, halibut), pulpo. Técnica: eliminar antes de que sabor de kombu abrume. Secreto de chefs de sushi modernos para elevar nigiri. Diferente de envejecimiento regular.",
          de: "Kobujime: fortgeschrittenes japanisches Altern. Wische Kombu (Seetang) ab, befeuchte leicht. Salze Fisch leicht, lege zwischen Kombu-Blätter, wickle, kühle 6-24 Std. Kombu zieht Feuchtigkeit (festigt Textur), durchdringt Umami-Glutamate, fügt subtilen Ozeangeschmack hinzu. Ergebnis: konzentrierter Geschmack, seidige Textur, verbessertes Mundgefühl. Für Weißfisch (Tai, Hirame, Heilbutt), Oktopus verwendet. Technik: entferne bevor Kombu-Geschmack überwältigt. Geheimnis moderner Sushi-Köche für Nigiri-Aufwertung. Anders als reguläres Altern.",
          nl: "Kobujime: geavanceerde Japanse veroudering. Veeg kombu (kelp) af, bevochtig licht. Zout vis licht, sandwich tussen kombu vellen, wikkel, koel 6-24 uur. Kombu trekt vocht (verstevigt textuur), doordringt umami glutamaten, voegt subtiele oceaan smaak toe. Resultaat: geconcentreerde smaak, zijdeachtige textuur, verbeterd mondgevoel. Gebruikt voor witte vis (tai, hirame, heilbot), octopus. Techniek: verwijder voordat kombu smaak overweldigt. Geheim van moderne sushi chefs voor nigiri verhoging. Anders dan reguliere veroudering."
        }
      },
      {
        question: {
          en: "What is 'zuke' marinating technique for sushi?",
          es: "¿Qué es la técnica de marinado 'zuke' para sushi?",
          de: "Was ist 'Zuke' Marinier-Technik für Sushi?",
          nl: "Wat is 'zuke' marineer techniek voor sushi?"
        },
        options: [
          { en: "Marinating lean fish (tuna, bonito) in soy-mirin-sake mixture 10-30 min, seasons deeply, prevents oxidation, extends freshness - traditional Edo sushi technique", es: "Marinar pescado magro (atún, bonito) en mezcla de soja-mirin-sake 10-30 min, sazona profundamente, previene oxidación, extiende frescura - técnica tradicional de sushi Edo", de: "Marinieren von magerem Fisch (Thunfisch, Bonito) in Soja-Mirin-Sake-Mischung 10-30 Min, würzt tief, verhindert Oxidation, verlängert Frische - traditionelle Edo-Sushi-Technik", nl: "Marineren van magere vis (tonijn, bonito) in soja-mirin-sake mengsel 10-30 min, kruidt diep, voorkomt oxidatie, verlengt versheid - traditionele Edo sushi techniek" },
          { en: "Salt curing only", es: "Solo curado en sal", de: "Nur Salzpökelung", nl: "Alleen zout curen" },
          { en: "Vinegar pickling", es: "Encurtido en vinagre", de: "Essig-Einlegen", nl: "Azijn inmaken" },
          { en: "Oil marinating", es: "Marinado en aceite", de: "Öl-Marinieren", nl: "Olie marineren" }
        ],
        correct: 0,
        explanation: {
          en: "Zuke (漬け): Edo-era preservation technique, now flavor enhancement. Mix soy sauce, mirin, sake (ratio 3:1:1). Marinate lean fish (especially akami tuna, bonito, skipjack) 10-30 min. Don't over-marinate (too salty). Benefits: seasons throughout (not just surface), prevents oxidation/browning, extends usable time, adds umami depth. Pat dry before forming nigiri. Modern chefs adjust marinade strength, time for balance. Essential for maguro zuke (marinated tuna). Pre-refrigeration necessity, now culinary choice.",
          es: "Zuke (漬け): técnica de conservación de era Edo, ahora mejora de sabor. Mezclar salsa de soja, mirin, sake (proporción 3:1:1). Marinar pescado magro (especialmente atún akami, bonito, listado) 10-30 min. No marinar demasiado (demasiado salado). Beneficios: sazona completamente (no solo superficie), previene oxidación/dorado, extiende tiempo utilizable, añade profundidad umami. Secar antes de formar nigiri. Chefs modernos ajustan fuerza de marinada, tiempo para equilibrio. Esencial para maguro zuke (atún marinado). Necesidad pre-refrigeración, ahora elección culinaria.",
          de: "Zuke (漬け): Edo-Ära Konservierungstechnik, jetzt Geschmacksverstärkung. Mische Sojasauce, Mirin, Sake (Verhältnis 3:1:1). Mariniere mageren Fisch (besonders Akami-Thunfisch, Bonito, Skipjack) 10-30 Min. Nicht über-marinieren (zu salzig). Vorteile: würzt durchgängig (nicht nur Oberfläche), verhindert Oxidation/Bräunung, verlängert nutzbare Zeit, fügt Umami-Tiefe hinzu. Tupfe trocken vor Nigiri-Formung. Moderne Köche passen Marinaden-Stärke, Zeit für Balance an. Wesentlich für Maguro Zuke (marinierter Thunfisch). Vor-Kühlschrank-Notwendigkeit, jetzt kulinarische Wahl.",
          nl: "Zuke (漬け): Edo-tijdperk conserveringstechniek, nu smaak verbetering. Mix sojasaus, mirin, sake (ratio 3:1:1). Marineer magere vis (vooral akami tonijn, bonito, skipjack) 10-30 min. Niet over-marineren (te zout). Voordelen: kruidt helemaal (niet alleen oppervlakte), voorkomt oxidatie/bruinen, verlengt bruikbare tijd, voegt umami diepte toe. Dep droog voor nigiri vormen. Moderne chefs passen marinade sterkte, tijd aan voor balans. Essentieel voor maguro zuke (gemarineerde tonijn). Pre-koeling noodzaak, nu culinaire keuze."
        }
      },
      {
        question: {
          en: "What is 'shimofuri' technique and when is it used?",
          es: "¿Qué es la técnica 'shimofuri' y cuándo se usa?",
          de: "Was ist 'Shimofuri' Technik und wann wird sie verwendet?",
          nl: "Wat is 'shimofuri' techniek en wanneer wordt het gebruikt?"
        },
        options: [
          { en: "Pouring boiling water over fish skin side, shocking in ice water - tightens skin, removes slime, creates texture contrast for sushi, sashimi", es: "Verter agua hirviendo sobre lado de piel de pescado, enfriar en agua helada - aprieta piel, elimina baba, crea contraste de textura para sushi, sashimi", de: "Kochendes Wasser über Fischhautseite gießen, in Eiswasser schockieren - strafft Haut, entfernt Schleim, schafft Texturkontrast für Sushi, Sashimi", nl: "Kokend water gieten over visvel kant, schokken in ijswater - verstevigt vel, verwijdert slijm, creëert textuur contrast voor sushi, sashimi" },
          { en: "Deep frying technique", es: "Técnica de freír", de: "Frittier-Technik", nl: "Frituur techniek" },
          { en: "Raw serving only", es: "Solo servir crudo", de: "Nur roh servieren", nl: "Alleen rauw serveren" },
          { en: "Grilling method", es: "Método de asar", de: "Grill-Methode", nl: "Grill methode" }
        ],
        correct: 0,
        explanation: {
          en: "Shimofuri (霜降り - 'frost-falling'): partial cooking technique. Pour boiling water over skin side of fish (tai, yellowtail, mackerel), immediately plunge in ice bath. Effect: skin tightens, becomes translucent-white (like frost), removes fishy slime/odor, partially cooks skin while flesh stays raw. Creates texture contrast - tender cooked skin, raw flesh. Enhances presentation (silver-white shimmer). Used for yuzuke (skin-on sashimi), aburi (seared) preparations. Shows technical skill, transforms oily fish.",
          es: "Shimofuri (霜降り - 'caída de escarcha'): técnica de cocción parcial. Verter agua hirviendo sobre lado de piel de pescado (tai, cola amarilla, caballa), sumergir inmediatamente en baño de hielo. Efecto: piel se aprieta, se vuelve translúcida-blanca (como escarcha), elimina baba/olor de pescado, cocina parcialmente piel mientras carne permanece cruda. Crea contraste de textura - piel tierna cocida, carne cruda. Mejora presentación (brillo blanco-plateado). Usado para yuzuke (sashimi con piel), preparaciones aburi (sellado). Muestra habilidad técnica, transforma pescado graso.",
          de: "Shimofuri (霜降り - 'Frost-Fallen'): partielle Kochtechnik. Gieße kochendes Wasser über Hautseite des Fisches (Tai, Gelbschwanz, Makrele), tauche sofort in Eisbad. Effekt: Haut strafft, wird durchscheinend-weiß (wie Frost), entfernt fischigen Schleim/Geruch, kocht Haut teilweise während Fleisch roh bleibt. Schafft Texturkontrast - zarte gekochte Haut, rohes Fleisch. Verbessert Präsentation (silber-weißer Schimmer). Verwendet für Yuzuke (Sashimi mit Haut), Aburi (angebraten) Zubereitungen. Zeigt technisches Können, transformiert öligen Fisch.",
          nl: "Shimofuri (霜降り - 'vorst-vallen'): gedeeltelijke kook techniek. Giet kokend water over vel kant van vis (tai, geelstaart, makreel), dompel onmiddellijk onder in ijsbad. Effect: vel verstevigt, wordt doorschijnend-wit (zoals vorst), verwijdert vissig slijm/geur, kookt vel gedeeltelijk terwijl vlees rauw blijft. Creëert textuur contrast - zachte gekookte vel, rauw vlees. Verbetert presentatie (zilver-witte glans). Gebruikt voor yuzuke (sashimi met vel), aburi (aangebraden) bereidingen. Toont technische vaardigheid, transformeert vette vis."
        }
      },
      {
        question: {
          en: "What is 'aburi' sushi preparation?",
          es: "¿Qué es la preparación de sushi 'aburi'?",
          de: "Was ist 'Aburi' Sushi-Zubereitung?",
          nl: "Wat is 'aburi' sushi bereiding?"
        },
        options: [
          { en: "Torch-searing fish surface with blow torch, caramelizes fat, creates smoky flavor, slightly cooks exterior while keeping interior raw - modern technique for fatty fish", es: "Sellar superficie de pescado con soplete, carameliza grasa, crea sabor ahumado, cocina ligeramente exterior mientras mantiene interior crudo - técnica moderna para pescado graso", de: "Oberfläche von Fisch mit Lötlampe anbraten, karamellisiert Fett, schafft rauchigen Geschmack, kocht leicht Äußeres während Inneres roh bleibt - moderne Technik für fetten Fisch", nl: "Vis oppervlakte aanbranden met brander, karameliseert vet, creëert rokerige smaak, kookt licht buitenkant terwijl binnenkant rauw blijft - moderne techniek voor vette vis" },
          { en: "Raw preparation only", es: "Solo preparación cruda", de: "Nur rohe Zubereitung", nl: "Alleen rauwe bereiding" },
          { en: "Deep frying", es: "Freír profundo", de: "Frittieren", nl: "Frituren" },
          { en: "Boiling technique", es: "Técnica de hervir", de: "Koch-Technik", nl: "Kook techniek" }
        ],
        correct: 0,
        explanation: {
          en: "Aburi (炙り - 'flame-seared'): modern sushi innovation. Use kitchen blow torch to quickly sear fish surface (toro, salmon belly, mackerel). Benefits: melts/caramelizes fat creating rich, buttery texture; adds smoky, charred flavor; transforms chewy fish to tender; visually appealing browning. Technique: pat dry, torch 2-3 seconds until browned, don't overcook interior. Often finish with yuzu, ponzu, or flavored salt. Popular in contemporary sushi bars. Different from tataki (fully seared). Elevates fatty fish dramatically.",
          es: "Aburi (炙り - 'sellado a la llama'): innovación moderna de sushi. Usar soplete de cocina para sellar rápidamente superficie de pescado (toro, vientre de salmón, caballa). Beneficios: derrite/carameliza grasa creando textura rica y mantecosa; añade sabor ahumado, carbonizado; transforma pescado masticable a tierno; dorado visualmente atractivo. Técnica: secar, soplete 2-3 segundos hasta dorado, no sobrecocinar interior. A menudo terminar con yuzu, ponzu o sal saborizada. Popular en bares de sushi contemporáneos. Diferente de tataki (completamente sellado). Eleva pescado graso dramáticamente.",
          de: "Aburi (炙り - 'flammen-angebraten'): moderne Sushi-Innovation. Verwende Küchenlötlampe um Fischoberfläche schnell anzubraten (Toro, Lachsbauch, Makrele). Vorteile: schmilzt/karamellisiert Fett schafft reiche, buttrige Textur; fügt rauchigen, verkohlten Geschmack hinzu; transformiert zähen Fisch zu zart; visuell ansprechende Bräunung. Technik: tupfe trocken, fackel 2-3 Sekunden bis gebräunt, koche Inneres nicht über. Oft mit Yuzu, Ponzu oder gewürztem Salz abschließen. Beliebt in zeitgenössischen Sushi-Bars. Anders als Tataki (voll angebraten). Hebt fetten Fisch dramatisch.",
          nl: "Aburi (炙り - 'vlam-aangebraden'): moderne sushi innovatie. Gebruik keuken brander om vis oppervlakte snel aan te branden (toro, zalm buik, makreel). Voordelen: smelt/karameliseert vet creërend rijke, boterachtige textuur; voegt rokerige, verkoold smaak toe; transformeert taaie vis tot zacht; visueel aantrekkelijke bruining. Techniek: dep droog, brand 2-3 seconden tot gebruind, kook binnenkant niet over. Vaak afwerken met yuzu, ponzu of gearomatiseerd zout. Populair in hedendaagse sushi bars. Anders dan tataki (volledig aangebraden). Verheft vette vis dramatisch."
        }
      },
      {
        question: {
          en: "What is 'nitsume' sauce for eel and anago?",
          es: "¿Qué es la salsa 'nitsume' para anguila y anago?",
          de: "Was ist 'Nitsume' Sauce für Aal und Anago?",
          nl: "Wat is 'nitsume' saus voor paling en anago?"
        },
        options: [
          { en: "Sweet glaze from eel bones, soy, mirin, sugar reduced to syrup - glossy, caramelized coating for grilled eel, traditional unagi sauce", es: "Glaseado dulce de huesos de anguila, soja, mirin, azúcar reducido a almíbar - recubrimiento brillante y caramelizado para anguila asada, salsa tradicional de unagi", de: "Süße Glasur aus Aalknochen, Soja, Mirin, Zucker zu Sirup reduziert - glänzende, karamellisierte Beschichtung für gegrillten Aal, traditionelle Unagi-Sauce", nl: "Zoete glazuur van paling botten, soja, mirin, suiker gereduceerd tot siroop - glanzende, gekarameliseerde coating voor gegrilde paling, traditionele unagi saus" },
          { en: "Tomato-based sauce", es: "Salsa a base de tomate", de: "Tomatenbasierte Sauce", nl: "Tomaat-gebaseerde saus" },
          { en: "Cream sauce", es: "Salsa de crema", de: "Sahnesauce", nl: "Room saus" },
          { en: "Plain soy sauce", es: "Salsa de soja simple", de: "Einfache Sojasauce", nl: "Gewone sojasaus" }
        ],
        correct: 0,
        explanation: {
          en: "Nitsume (煮詰め - 'boiled down'): essential unagi/anago sauce. Make dashi from eel bones, add soy sauce, mirin, sugar (ratio varies by shop - family secrets). Simmer 1-2 hours, reduce to thick, syrupy glaze. Brush on grilled eel multiple times during cooking. Result: glossy, caramelized, sweet-savory coating. Each shop's nitsume is unique (passed down generations). Quality depends on: eel bone stock richness, reduction time, balance. Store-bought 'eel sauce' is inferior. True nitsume requires time, skill.",
          es: "Nitsume (煮詰め - 'hervido'): salsa esencial de unagi/anago. Hacer dashi de huesos de anguila, añadir salsa de soja, mirin, azúcar (proporción varía por tienda - secretos familiares). Cocinar a fuego lento 1-2 horas, reducir a glaseado espeso y almibarado. Cepillar en anguila asada múltiples veces durante cocción. Resultado: recubrimiento brillante, caramelizado, dulce-salado. Nitsume de cada tienda es único (pasado generaciones). Calidad depende de: riqueza de caldo de hueso de anguila, tiempo de reducción, equilibrio. 'Salsa de anguila' comprada es inferior. Verdadero nitsume requiere tiempo, habilidad.",
          de: "Nitsume (煮詰め - 'eingekocht'): wesentliche Unagi/Anago-Sauce. Mache Dashi aus Aalknochen, füge Sojasauce, Mirin, Zucker hinzu (Verhältnis variiert je Laden - Familiengeheimnisse). Köchle 1-2 Stunden, reduziere zu dicker, sirupartiger Glasur. Streiche mehrfach während Grillen auf Aal. Ergebnis: glänzende, karamellisierte, süß-herzhafte Beschichtung. Jedes Ladens Nitsume ist einzigartig (über Generationen weitergegeben). Qualität hängt ab von: Aalknochen-Fond-Fülle, Reduktionszeit, Balance. Gekaufte 'Aal-Sauce' ist minderwertig. Wahres Nitsume erfordert Zeit, Können.",
          nl: "Nitsume (煮詰め - 'ingekookt'): essentiële unagi/anago saus. Maak dashi van paling botten, voeg sojasaus, mirin, suiker toe (ratio varieert per winkel - familie geheimen). Sudder 1-2 uur, reduceer tot dikke, siroop glazuur. Borstel op gegrilde paling meerdere keren tijdens koken. Resultaat: glanzende, gekarameliseerde, zoet-hartige coating. Elke winkel's nitsume is uniek (doorgegeven generaties). Kwaliteit hangt af van: paling bot bouillon rijkdom, reductie tijd, balans. Gekochte 'paling saus' is inferieur. Ware nitsume vereist tijd, vaardigheid."
        }
      },
      {
        question: {
          en: "What is 'kabutoyaki' grilling technique for fish heads?",
          es: "¿Qué es la técnica de asado 'kabutoyaki' para cabezas de pescado?",
          de: "Was ist 'Kabutoyaki' Grill-Technik für Fischköpfe?",
          nl: "Wat is 'kabutoyaki' grill techniek voor viskoppen?"
        },
        options: [
          { en: "Splitting fish head, salting, grilling until skin crisps, meat falls from bone - extracts maximum flavor from collar, cheeks, eyes", es: "Dividir cabeza de pescado, salar, asar hasta que piel se vuelva crujiente, carne se caiga del hueso - extrae máximo sabor de collar, mejillas, ojos", de: "Fischkopf teilen, salzen, grillen bis Haut knusprig wird, Fleisch vom Knochen fällt - extrahiert maximalen Geschmack aus Kragen, Wangen, Augen", nl: "Viskop splitsen, zouten, grillen tot vel knapperig wordt, vlees van bot valt - extraheert maximale smaak van kraag, wangen, ogen" },
          { en: "Boiling heads only", es: "Solo hervir cabezas", de: "Nur Köpfe kochen", nl: "Alleen koppen koken" },
          { en: "Raw serving", es: "Servir crudo", de: "Roh servieren", nl: "Rauw serveren" },
          { en: "Deep frying technique", es: "Técnica de freír", de: "Frittier-Technik", nl: "Frituur techniek" }
        },
        correct: 0,
        explanation: {
          en: "Kabutoyaki (兜焼き - 'helmet grilling'): prized technique for large fish heads (yellowtail, sea bream, salmon). Split head vertically, salt generously, let rest 20 min. Grill over charcoal skin-side first until crispy, flip, cook until meat easily removes. Most prized parts: collar (fatty, tender), cheeks (sweet, gelatinous), eyes (rich, creamy). Serve with grated daikon, ponzu. Kabuto (helmet) shape resembles samurai headgear. Nothing wasted - nose-to-tail philosophy. Shows respect for ingredient.",
          es: "Kabutoyaki (兜焼き - 'asado de casco'): técnica preciada para cabezas grandes de pescado (cola amarilla, besugo, salmón). Dividir cabeza verticalmente, salar generosamente, dejar reposar 20 min. Asar sobre carbón lado de piel primero hasta crujiente, voltear, cocinar hasta que carne se retire fácilmente. Partes más preciadas: collar (graso, tierno), mejillas (dulces, gelatinosas), ojos (ricos, cremosos). Servir con daikon rallado, ponzu. Forma kabuto (casco) se asemeja a tocado de samurái. Nada desperdiciado - filosofía de nariz a cola. Muestra respeto por ingrediente.",
          de: "Kabutoyaki (兜焼き - 'Helm-Grillen'): geschätzte Technik für große Fischköpfe (Gelbschwanz, Seebrasse, Lachs). Teile Kopf vertikal, salze großzügig, lasse 20 Min ruhen. Grille über Holzkohle Hautseite zuerst bis knusprig, wende, koche bis Fleisch leicht entfernt. Am meisten geschätzte Teile: Kragen (fettig, zart), Wangen (süß, gelatinös), Augen (reich, cremig). Serviere mit geriebenem Daikon, Ponzu. Kabuto (Helm) Form ähnelt Samurai-Kopfbedeckung. Nichts verschwendet - Nase-zu-Schwanz-Philosophie. Zeigt Respekt für Zutat.",
          nl: "Kabutoyaki (兜焼き - 'helm grillen'): gewaardeerde techniek voor grote viskoppen (geelstaart, zeebrasem, zalm). Splits kop verticaal, zout royaal, laat 20 min rusten. Grill over houtskool vel-kant eerst tot knapperig, draai om, kook tot vlees gemakkelijk verwijdert. Meest gewaardeerde delen: kraag (vet, zacht), wangen (zoet, gelatineus), ogen (rijk, romig). Serveer met geraspte daikon, ponzu. Kabuto (helm) vorm lijkt op samurai hoofddeksel. Niets verspild - neus-tot-staart filosofie. Toont respect voor ingrediënt."
        }
      },
      {
        question: {
          en: "What is 'kama' and why is it prized?",
          es: "¿Qué es 'kama' y por qué se valora?",
          de: "Was ist 'Kama' und warum ist es geschätzt?",
          nl: "Wat is 'kama' en waarom is het gewaardeerd?"
        },
        options: [
          { en: "Fish collar - fatty, well-exercised muscle around gills and pectoral fins, grilled or braised for rich, tender, flavorful meat - often most delicious part", es: "Collar de pescado - músculo graso y bien ejercitado alrededor de branquias y aletas pectorales, asado o estofado para carne rica, tierna y sabrosa - a menudo parte más deliciosa", de: "Fischkragen - fettiger, gut trainierter Muskel um Kiemen und Brustflossen, gegrillt oder geschmort für reiches, zartes, aromatisches Fleisch - oft köstlichster Teil", nl: "Viskraag - vet, goed getrainde spier rond kieuwen en borstvinnen, gegrild of gestooft voor rijk, zacht, smaakvol vlees - vaak lekkerste deel" },
          { en: "Fish tail only", es: "Solo cola de pescado", de: "Nur Fischschwanz", nl: "Alleen visstaart" },
          { en: "Fish bones", es: "Huesos de pescado", de: "Fischknochen", nl: "Visbotten" },
          { en: "Fish skin", es: "Piel de pescado", de: "Fischhaut", nl: "Visvel" }
        ],
        correct: 0,
        explanation: {
          en: "Kama (カマ): fish collar, surrounding gills/pectoral fin attachment. Why prized: constant fin movement creates well-marbled, fatty, tender muscle; connective tissue breaks down to gelatin when cooked; rich, complex flavor. Preparation: salt-grill (shioyaki), teriyaki glaze, or braise. Popular: hamachi kama (yellowtail), sake kama (salmon), tai kama (sea bream). Often cheaper than fillets but more flavorful. Requires hands/picking around bones - casual dining. Chef's/fishmonger's secret cut. True delicacy.",
          es: "Kama (カマ): collar de pescado, rodeando branquias/unión de aleta pectoral. Por qué valorado: movimiento constante de aletas crea músculo bien veteado, graso, tierno; tejido conectivo se descompone en gelatina al cocinar; sabor rico y complejo. Preparación: asar con sal (shioyaki), glaseado teriyaki o estofar. Popular: hamachi kama (cola amarilla), sake kama (salmón), tai kama (besugo). A menudo más barato que filetes pero más sabroso. Requiere manos/escoger alrededor de huesos - comida casual. Corte secreto de chef/pescadero. Verdadera delicia.",
          de: "Kama (カマ): Fischkragen, um Kiemen/Brustflossen-Ansatz. Warum geschätzt: konstante Flossenbewegung schafft gut marmoriertes, fettiges, zartes Muskelfleisch; Bindegewebe bricht zu Gelatine beim Kochen; reicher, komplexer Geschmack. Zubereitung: Salz-Grill (Shioyaki), Teriyaki-Glasur oder Schmoren. Beliebt: Hamachi Kama (Gelbschwanz), Sake Kama (Lachs), Tai Kama (Seebrasse). Oft billiger als Filets aber aromatischer. Erfordert Hände/Pflücken um Knochen - lässiges Essen. Geheimer Schnitt des Kochs/Fischhändlers. Wahre Delikatesse.",
          nl: "Kama (カマ): viskraag, rond kieuwen/borstvin aanhechting. Waarom gewaardeerd: constante vin beweging creëert goed gemarmerd, vet, zacht spiervlees; bindweefsel breekt af tot gelatine bij koken; rijke, complexe smaak. Bereiding: zout-grill (shioyaki), teriyaki glazuur of stoven. Populair: hamachi kama (geelstaart), sake kama (zalm), tai kama (zeebrasem). Vaak goedkoper dan filets maar smakelijker. Vereist handen/plukken rond botten - casual eten. Geheim snede van chef/visboer. Ware delicatesse."
        }
      },
      {
        question: {
          en: "What is 'tataki' preparation method?",
          es: "¿Qué es el método de preparación 'tataki'?",
          de: "Was ist 'Tataki' Zubereitungsmethode?",
          nl: "Wat is 'tataki' bereidings methode?"
        },
        options: [
          { en: "Searing fish surface over high heat, leaving center rare, slicing thin, serving with citrus-soy - Kochi prefecture specialty, showcases quality fish", es: "Sellar superficie de pescado sobre calor alto, dejando centro poco cocido, rebanar delgado, servir con cítricos-soja - especialidad de prefectura Kochi, muestra pescado de calidad", de: "Fischoberfläche über hoher Hitze anbraten, Mitte rare lassen, dünn schneiden, mit Zitrus-Soja servieren - Kochi-Präfektur-Spezialität, zeigt Qualitätsfisch", nl: "Vis oppervlakte aanbranden op hoge hitte, centrum rauw laten, dun snijden, serveren met citrus-soja - Kochi prefectuur specialiteit, toont kwaliteit vis" },
          { en: "Boiling technique", es: "Técnica de hervir", de: "Koch-Technik", nl: "Kook techniek" },
          { en: "Raw serving only", es: "Solo servir crudo", de: "Nur roh servieren", nl: "Alleen rauw serveren" },
          { en: "Deep frying", es: "Freír profundo", de: "Frittieren", nl: "Frituren" }
        ],
        correct: 0,
        explanation: {
          en: "Tataki (たたき): Kochi-style searing. Method: season bonito/tuna loin, sear all sides over high heat (straw fire traditional) 30-60 seconds until browned, immediately ice bath to stop cooking. Center stays rare/raw. Slice 1/4-inch, arrange, garnish with grated ginger, scallions, garlic chips. Serve with ponzu. Benefits: searing adds smoky depth, seals surface, creates texture contrast, partially cooks fishy outer layer. Famous: katsuo no tataki (bonito). Modern: torch method. Shows fish quality (must be impeccably fresh).",
          es: "Tataki (たたき): sellado estilo Kochi. Método: sazonar lomo de bonito/atún, sellar todos lados sobre calor alto (fuego de paja tradicional) 30-60 segundos hasta dorado, inmediatamente baño de hielo para detener cocción. Centro permanece poco cocido/crudo. Rebanar 1/4 pulgada, organizar, adornar con jengibre rallado, cebollas verdes, chips de ajo. Servir con ponzu. Beneficios: sellado añade profundidad ahumada, sella superficie, crea contraste de textura, cocina parcialmente capa exterior de pescado. Famoso: katsuo no tataki (bonito). Moderno: método de soplete. Muestra calidad de pescado (debe ser impecablemente fresco).",
          de: "Tataki (たたき): Kochi-Stil Anbraten. Methode: würze Bonito/Thunfisch-Lende, brate alle Seiten über hoher Hitze (Strohfeuer traditionell) 30-60 Sekunden bis gebräunt, sofort Eisbad um Kochen zu stoppen. Mitte bleibt rare/roh. Schneide 6mm dick, arrangiere, garniere mit geriebenem Ingwer, Frühlingszwiebeln, Knoblauch-Chips. Serviere mit Ponzu. Vorteile: Anbraten fügt rauchige Tiefe hinzu, versiegelt Oberfläche, schafft Texturkontrast, kocht fischige Außenschicht teilweise. Berühmt: Katsuo no Tataki (Bonito). Modern: Lötlampen-Methode. Zeigt Fischqualität (muss tadellos frisch sein).",
          nl: "Tataki (たたき): Kochi-stijl aanbraden. Methode: kruid bonito/tonijn lende, brand alle kanten op hoge hitte (stro vuur traditioneel) 30-60 seconden tot gebruind, onmiddellijk ijsbad om koken te stoppen. Centrum blijft rauw/rauw. Snijd 6mm dik, rangschik, garneer met geraspte gember, lente-uien, knoflook chips. Serveer met ponzu. Voordelen: aanbranden voegt rokerige diepte toe, verzegelt oppervlakte, creëert textuur contrast, kookt gedeeltelijk vissig buitenlaag. Beroemd: katsuo no tataki (bonito). Modern: brander methode. Toont vis kwaliteit (moet onberispelijk vers zijn)."
        }
      },
      {
        question: {
          en: "What is 'konbu-jime' versus 'su-jime' curing?",
          es: "¿Qué es el curado 'konbu-jime' versus 'su-jime'?",
          de: "Was ist 'Konbu-Jime' versus 'Su-Jime' Pökelung?",
          nl: "Wat is 'konbu-jime' versus 'su-jime' curen?"
        },
        options: [
          { en: "Konbu-jime: kombu seaweed aging for umami; su-jime: vinegar curing for preservation, firming - different purposes, techniques for sushi fish", es: "Konbu-jime: envejecimiento con alga kombu para umami; su-jime: curado en vinagre para preservación, firmeza - diferentes propósitos, técnicas para pescado de sushi", de: "Konbu-Jime: Kombu-Algen-Alterung für Umami; Su-Jime: Essig-Pökelung für Konservierung, Festigung - verschiedene Zwecke, Techniken für Sushi-Fisch", nl: "Konbu-jime: kombu zeewier veroudering voor umami; su-jime: azijn curen voor conservering, stevigheid - verschillende doelen, technieken voor sushi vis" },
          { en: "Same technique", es: "Misma técnica", de: "Gleiche Technik", nl: "Zelfde techniek" },
          { en: "Both use salt only", es: "Ambos usan solo sal", de: "Beide nutzen nur Salz", nl: "Beide gebruiken alleen zout" },
          { en: "Both use sugar", es: "Ambos usan azúcar", de: "Beide nutzen Zucker", nl: "Beide gebruiken suiker" }
        ],
        correct: 0,
        explanation: {
          en: "Two distinct techniques: KONBU-JIME (昆布締め): wrap fish in dampened kombu, refrigerate 6-24 hrs. Kombu draws moisture, infuses umami, firms texture. For flavor enhancement. Modern technique. SU-JIME (酢締め): salt fish lightly, rinse, marinate in sweetened vinegar (sushi-zu) 15-30 min. Vinegar partially 'cooks' protein, preserves, firms, adds tang. Pre-refrigeration preservation (like kohada, mackerel). Both transform fish but different goals: konbu = umami depth, vinegar = preservation + flavor.",
          es: "Dos técnicas distintas: KONBU-JIME (昆布締め): envolver pescado en kombu humedecido, refrigerar 6-24 hrs. Kombu extrae humedad, infunde umami, firma textura. Para mejora de sabor. Técnica moderna. SU-JIME (酢締め): salar pescado ligeramente, enjuagar, marinar en vinagre endulzado (sushi-zu) 15-30 min. Vinagre 'cocina' parcialmente proteína, preserva, firma, añade acidez. Preservación pre-refrigeración (como kohada, caballa). Ambos transforman pescado pero objetivos diferentes: kombu = profundidad umami, vinagre = preservación + sabor.",
          de: "Zwei unterschiedliche Techniken: KONBU-JIME (昆布締め): wickle Fisch in befeuchtetes Kombu, kühle 6-24 Std. Kombu zieht Feuchtigkeit, durchdringt Umami, festigt Textur. Für Geschmacksverstärkung. Moderne Technik. SU-JIME (酢締め): salze Fisch leicht, spüle, mariniere in gesüßtem Essig (Sushi-Zu) 15-30 Min. Essig 'kocht' Protein teilweise, konserviert, festigt, fügt Säure hinzu. Vor-Kühlschrank-Konservierung (wie Kohada, Makrele). Beide transformieren Fisch aber verschiedene Ziele: Kombu = Umami-Tiefe, Essig = Konservierung + Geschmack.",
          nl: "Twee onderscheiden technieken: KONBU-JIME (昆布締め): wikkel vis in bevochtigde kombu, koel 6-24 uur. Kombu trekt vocht, doordringt umami, verstevigt textuur. Voor smaak verbetering. Moderne techniek. SU-JIME (酢締め): zout vis licht, spoel, marineer in gezoete azijn (sushi-zu) 15-30 min. Azijn 'kookt' eiwit gedeeltelijk, conserveert, verstevigt, voegt zuur toe. Pre-koeling conservering (zoals kohada, makreel). Beide transformeren vis maar verschillende doelen: kombu = umami diepte, azijn = conservering + smaak."
        }
      },
      {
        question: {
          en: "What is 'narezushi' versus modern sushi?",
          es: "¿Qué es 'narezushi' versus sushi moderno?",
          de: "Was ist 'Narezushi' versus modernes Sushi?",
          nl: "Wat is 'narezushi' versus moderne sushi?"
        },
        options: [
          { en: "Narezushi: ancient fermented fish-rice (months), funky, preserved; modern sushi: fresh fish, vinegared rice, immediate consumption - evolution shows 1200-year journey", es: "Narezushi: pescado-arroz fermentado antiguo (meses), funky, preservado; sushi moderno: pescado fresco, arroz con vinagre, consumo inmediato - evolución muestra viaje de 1200 años", de: "Narezushi: alter fermentierter Fisch-Reis (Monate), funky, konserviert; modernes Sushi: frischer Fisch, Essig-Reis, sofortiger Konsum - Evolution zeigt 1200-jährige Reise", nl: "Narezushi: oud gefermenteerde vis-rijst (maanden), funky, geconserveerd; moderne sushi: verse vis, azijn rijst, onmiddellijke consumptie - evolutie toont 1200-jarige reis" },
          { en: "Same preparation", es: "Misma preparación", de: "Gleiche Zubereitung", nl: "Zelfde bereiding" },
          { en: "Only difference is rice", es: "Solo diferencia es arroz", de: "Nur Unterschied ist Reis", nl: "Alleen verschil is rijst" },
          { en: "Modern is fermented", es: "Moderno es fermentado", de: "Modern ist fermentiert", nl: "Modern is gefermenteerd" }
        ],
        correct: 0,
        explanation: {
          en: "Narezushi (馴れ鮨): original 'sushi' from 8th century. Pack fish in rice-salt, ferment 6 months-3 years. Lactic acid preserves fish, creates pungent, cheesy, funky flavor. Discard rice (just fermentation medium), eat preserved fish. Still exists: funa-zushi (crucian carp). Evolution: 1) Narezushi (fermented) → 2) Han-nare (half-fermented, eat rice) → 3) Haya-zushi (quick, vinegared rice) → 4) Edo-mae (fresh fish, vinegar rice). Modern sushi = fresh, not fermented. 1200-year transformation.",
          es: "Narezushi (馴れ鮨): 'sushi' original del siglo 8. Empacar pescado en arroz-sal, fermentar 6 meses-3 años. Ácido láctico preserva pescado, crea sabor pungente, a queso, funky. Descartar arroz (solo medio de fermentación), comer pescado preservado. Aún existe: funa-zushi (carpa cruciana). Evolución: 1) Narezushi (fermentado) → 2) Han-nare (semi-fermentado, comer arroz) → 3) Haya-zushi (rápido, arroz con vinagre) → 4) Edo-mae (pescado fresco, arroz con vinagre). Sushi moderno = fresco, no fermentado. Transformación de 1200 años.",
          de: "Narezushi (馴れ鮨): ursprüngliches 'Sushi' aus 8. Jahrhundert. Packe Fisch in Reis-Salz, fermentiere 6 Monate-3 Jahre. Milchsäure konserviert Fisch, schafft stechenden, käsigen, funky Geschmack. Verwerfe Reis (nur Fermentationsmedium), esse konservierten Fisch. Existiert noch: Funa-Zushi (Karausche). Evolution: 1) Narezushi (fermentiert) → 2) Han-Nare (halb-fermentiert, esse Reis) → 3) Haya-Zushi (schnell, Essig-Reis) → 4) Edo-Mae (frischer Fisch, Essig-Reis). Modernes Sushi = frisch, nicht fermentiert. 1200-jährige Transformation.",
          nl: "Narezushi (馴れ鮨): originele 'sushi' van 8e eeuw. Pak vis in rijst-zout, fermenteer 6 maanden-3 jaar. Melkzuur conserveert vis, creëert scherpe, kaasachtige, funky smaak. Gooi rijst weg (alleen fermentatie medium), eet geconserveerde vis. Bestaat nog: funa-zushi (karper). Evolutie: 1) Narezushi (gefermenteerd) → 2) Han-nare (half-gefermenteerd, eet rijst) → 3) Haya-zushi (snel, azijn rijst) → 4) Edo-mae (verse vis, azijn rijst). Moderne sushi = vers, niet gefermenteerd. 1200-jarige transformatie."
        }
      },
      {
        question: {
          en: "What is 'edomae' sushi philosophy?",
          es: "¿Qué es la filosofía de sushi 'edomae'?",
          de: "Was ist 'Edomae' Sushi-Philosophie?",
          nl: "Wat is 'edomae' sushi filosofie?"
        },
        options: [
          { en: "Tokyo Bay tradition: use local fish, apply technique (aging, curing, marinating) to enhance each fish's character, showcase craftsmanship over raw fish alone", es: "Tradición de Bahía de Tokio: usar pescado local, aplicar técnica (envejecimiento, curado, marinado) para mejorar carácter de cada pescado, mostrar artesanía sobre pescado crudo solo", de: "Tokio-Bucht-Tradition: nutze lokalen Fisch, wende Technik an (Altern, Pökeln, Marinieren) um Charakter jedes Fisches zu verbessern, zeige Handwerk über rohen Fisch allein", nl: "Tokyo Baai traditie: gebruik lokale vis, pas techniek toe (verouderen, curen, marineren) om karakter van elke vis te verbeteren, toon vakmanschap boven rauwe vis alleen" },
          { en: "Raw fish only", es: "Solo pescado crudo", de: "Nur roher Fisch", nl: "Alleen rauwe vis" },
          { en: "Western style sushi", es: "Sushi estilo occidental", de: "Westlicher Sushi-Stil", nl: "Westerse stijl sushi" },
          { en: "Vegetarian sushi", es: "Sushi vegetariano", de: "Vegetarisches Sushi", nl: "Vegetarische sushi" }
        ],
        correct: 0,
        explanation: {
          en: "Edomae (江戸前 - 'in front of Edo'): classical Tokyo Bay sushi. Philosophy: fish from Edo Bay (now Tokyo Bay), each species gets specific treatment to peak flavor. Techniques: kobujime (kombu aging), zuke (soy marinade), aburi (torch searing), su-jime (vinegar cure), nitsume (eel sauce). Not just slicing raw fish - transform through craft. Rice-to-fish balance crucial. Nigiri shaped by hand (not pressed). Small, refined portions. Modern high-end sushi follows Edomae principles. Contrast: modern Western 'just raw fish' approach.",
          es: "Edomae (江戸前 - 'frente a Edo'): sushi clásico de Bahía de Tokio. Filosofía: pescado de Bahía de Edo (ahora Bahía de Tokio), cada especie recibe tratamiento específico para máximo sabor. Técnicas: kobujime (envejecimiento kombu), zuke (marinada de soja), aburi (sellado con soplete), su-jime (curado en vinagre), nitsume (salsa de anguila). No solo rebanar pescado crudo - transformar a través de artesanía. Equilibrio arroz-pescado crucial. Nigiri formado a mano (no prensado). Porciones pequeñas y refinadas. Sushi moderno de alta gama sigue principios Edomae. Contraste: enfoque occidental moderno 'solo pescado crudo'.",
          de: "Edomae (江戸前 - 'vor Edo'): klassisches Tokio-Bucht-Sushi. Philosophie: Fisch aus Edo-Bucht (jetzt Tokio-Bucht), jede Art bekommt spezifische Behandlung für Spitzengeschmack. Techniken: Kobujime (Kombu-Alterung), Zuke (Soja-Marinade), Aburi (Lötlampen-Anbraten), Su-Jime (Essig-Pökelung), Nitsume (Aal-Sauce). Nicht nur rohen Fisch schneiden - durch Handwerk transformieren. Reis-zu-Fisch-Balance entscheidend. Nigiri von Hand geformt (nicht gepresst). Kleine, raffinierte Portionen. Modernes High-End-Sushi folgt Edomae-Prinzipien. Kontrast: moderner westlicher 'nur roher Fisch' Ansatz.",
          nl: "Edomae (江戸前 - 'voor Edo'): klassieke Tokyo Baai sushi. Filosofie: vis van Edo Baai (nu Tokyo Baai), elke soort krijgt specifieke behandeling voor piek smaak. Technieken: kobujime (kombu veroudering), zuke (soja marinade), aburi (brander aanbranden), su-jime (azijn curen), nitsume (paling saus). Niet alleen rauwe vis snijden - transformeren door vakmanschap. Rijst-tot-vis balans cruciaal. Nigiri gevormd met hand (niet geperst). Kleine, verfijnde porties. Moderne high-end sushi volgt Edomae principes. Contrast: moderne westerse 'alleen rauwe vis' benadering."
        }
      },
      {
        question: {
          en: "What is 'tane' versus 'neta' in sushi terminology?",
          es: "¿Qué es 'tane' versus 'neta' en terminología de sushi?",
          de: "Was ist 'Tane' versus 'Neta' in Sushi-Terminologie?",
          nl: "Wat is 'tane' versus 'neta' in sushi terminologie?"
        },
        options: [
          { en: "Both mean topping/fish on sushi; 'neta' is reversed 'tane' (sushi slang), commonly used in Tokyo - linguistic wordplay in sushi culture", es: "Ambos significan cobertura/pescado en sushi; 'neta' es 'tane' invertido (jerga de sushi), comúnmente usado en Tokio - juego de palabras lingüístico en cultura de sushi", de: "Beide bedeuten Belag/Fisch auf Sushi; 'Neta' ist umgekehrtes 'Tane' (Sushi-Slang), häufig in Tokio verwendet - linguistisches Wortspiel in Sushi-Kultur", nl: "Beide betekenen topping/vis op sushi; 'neta' is omgekeerde 'tane' (sushi slang), algemeen gebruikt in Tokyo - linguïstisch woordspel in sushi cultuur" },
          { en: "Tane is rice, neta is fish", es: "Tane es arroz, neta es pescado", de: "Tane ist Reis, Neta ist Fisch", nl: "Tane is rijst, neta is vis" },
          { en: "Different fish types", es: "Diferentes tipos de pescado", de: "Verschiedene Fischarten", nl: "Verschillende vis types" },
          { en: "Preparation methods", es: "Métodos de preparación", de: "Zubereitungsmethoden", nl: "Bereidingsmethoden" }
        ],
        correct: 0,
        explanation: {
          en: "Linguistic curiosity: TANE (種): standard Japanese for 'seed/topping' - fish/seafood on nigiri. NETA (ネタ): reverse syllables of 'tane' (ta-ne → ne-ta), sushi bar slang. Both mean same thing. Neta more common in Tokyo sushi shops. Similar wordplay: 'shari' (rice) from Buddha's bones metaphor. Sushi culture rich in specialized vocabulary. Other terms: 'murasaki' (soy sauce), 'gari' (ginger), 'agari' (tea). Understanding terminology shows cultural knowledge, respect for craft.",
          es: "Curiosidad lingüística: TANE (種): japonés estándar para 'semilla/cobertura' - pescado/mariscos en nigiri. NETA (ネタ): sílabas invertidas de 'tane' (ta-ne → ne-ta), jerga de bar de sushi. Ambos significan lo mismo. Neta más común en tiendas de sushi de Tokio. Juego de palabras similar: 'shari' (arroz) de metáfora de huesos de Buda. Cultura de sushi rica en vocabulario especializado. Otros términos: 'murasaki' (salsa de soja), 'gari' (jengibre), 'agari' (té). Comprender terminología muestra conocimiento cultural, respeto por artesanía.",
          de: "Linguistische Kuriosität: TANE (種): Standard-Japanisch für 'Samen/Belag' - Fisch/Meeresfrüchte auf Nigiri. NETA (ネタ): umgekehrte Silben von 'Tane' (ta-ne → ne-ta), Sushi-Bar-Slang. Beide bedeuten dasselbe. Neta häufiger in Tokio-Sushi-Läden. Ähnliches Wortspiel: 'Shari' (Reis) von Buddha-Knochen-Metapher. Sushi-Kultur reich an spezialisiertem Vokabular. Andere Begriffe: 'Murasaki' (Sojasauce), 'Gari' (Ingwer), 'Agari' (Tee). Terminologie verstehen zeigt kulturelles Wissen, Respekt für Handwerk.",
          nl: "Linguïstische curiositeit: TANE (種): standaard Japans voor 'zaad/topping' - vis/zeevruchten op nigiri. NETA (ネタ): omgekeerde lettergrepen van 'tane' (ta-ne → ne-ta), sushi bar slang. Beide betekenen hetzelfde. Neta gebruikelijker in Tokyo sushi winkels. Vergelijkbaar woordspel: 'shari' (rijst) van Boeddha's botten metafoor. Sushi cultuur rijk aan gespecialiseerde vocabulaire. Andere termen: 'murasaki' (sojasaus), 'gari' (gember), 'agari' (thee). Terminologie begrijpen toont culturele kennis, respect voor vakmanschap."
        }
      },
      {
        question: {
          en: "What is 'otoro' versus 'chutoro' versus 'akami' in tuna?",
          es: "¿Qué es 'otoro' versus 'chutoro' versus 'akami' en atún?",
          de: "Was ist 'Otoro' versus 'Chutoro' versus 'Akami' bei Thunfisch?",
          nl: "Wat is 'otoro' versus 'chutoro' versus 'akami' bij tonijn?"
        },
        options: [
          { en: "Otoro: fatty belly, buttery, most prized; chutoro: medium fatty; akami: lean, red meat - different cuts reflect fat content, price, flavor intensity", es: "Otoro: vientre graso, mantecoso, más preciado; chutoro: medianamente graso; akami: magro, carne roja - diferentes cortes reflejan contenido de grasa, precio, intensidad de sabor", de: "Otoro: fettiger Bauch, buttrig, am meisten geschätzt; Chutoro: mittel-fettig; Akami: mager, rotes Fleisch - verschiedene Schnitte reflektieren Fettgehalt, Preis, Geschmacksintensität", nl: "Otoro: vette buik, boterachtig, meest gewaardeerd; chutoro: medium vet; akami: mager, rood vlees - verschillende snedes weerspiegelen vetgehalte, prijs, smaak intensiteit" },
          { en: "Different tuna species", es: "Diferentes especies de atún", de: "Verschiedene Thunfischarten", nl: "Verschillende tonijn soorten" },
          { en: "Cooking methods", es: "Métodos de cocción", de: "Kochmethoden", nl: "Kookmethoden" },
          { en: "Age classifications", es: "Clasificaciones de edad", de: "Alters-Klassifizierungen", nl: "Leeftijd classificaties" }
        ],
        correct: 0,
        explanation: {
          en: "Tuna grading by fat content: AKAMI (赤身): lean, dark red loin meat. Firm, meaty, iron flavor. Cheapest. Traditional favorite. CHUTORO (中トロ): medium fatty, from belly sides. Balance of fat-lean, pink-red. Mid-price. OTORO (大トロ): super fatty belly, near head or tail end. Marbled, pale pink, melts-in-mouth, buttery. Most expensive (can be $100+/piece). Modern preference for otoro, but traditionalists love akami's clean flavor. Best tuna has all three cuts - complete experience.",
          es: "Clasificación de atún por contenido de grasa: AKAMI (赤身): magro, carne de lomo rojo oscuro. Firme, carnoso, sabor a hierro. Más barato. Favorito tradicional. CHUTORO (中トロ): medianamente graso, de lados de vientre. Equilibrio de grasa-magro, rosa-rojo. Precio medio. OTORO (大トロ): súper graso de vientre, cerca de cabeza o extremo de cola. Marmoleado, rosa pálido, se derrite en boca, mantecoso. Más caro (puede ser $100+/pieza). Preferencia moderna por otoro, pero tradicionalistas aman sabor limpio de akami. Mejor atún tiene los tres cortes - experiencia completa.",
          de: "Thunfisch-Einstufung nach Fettgehalt: AKAMI (赤身): mager, dunkelrotes Lendenfleisch. Fest, fleischig, Eisen-Geschmack. Am billigsten. Traditioneller Favorit. CHUTORO (中トロ): mittel-fettig, von Bauchseiten. Balance von Fett-Mager, rosa-rot. Mittelpreis. OTORO (大トロ): super-fettig Bauch, nahe Kopf oder Schwanzende. Marmoriert, blassrosa, schmilzt im Mund, buttrig. Teuerste (kann $100+/Stück sein). Moderne Vorliebe für Otoro, aber Traditionalisten lieben Akamis sauberen Geschmack. Bester Thunfisch hat alle drei Schnitte - komplettes Erlebnis.",
          nl: "Tonijn gradering per vetgehalte: AKAMI (赤身): mager, donker rood lende vlees. Stevig, vlezend, ijzer smaak. Goedkoopst. Traditionele favoriet. CHUTORO (中トロ): medium vet, van buik kanten. Balans van vet-mager, roze-rood. Middel-prijs. OTORO (大トロ): super vet buik, nabij kop of staart einde. Gemarmerd, bleek roze, smelt in mond, boterachtig. Duurste (kan $100+/stuk zijn). Moderne voorkeur voor otoro, maar traditionalisten houden van akami's schone smaak. Beste tonijn heeft alle drie snedes - complete ervaring."
        }
      },
      {
        question: {
          en: "What is 'tsume' or 'nikiri' sauce preparation?",
          es: "¿Qué es la preparación de salsa 'tsume' o 'nikiri'?",
          de: "Was ist 'Tsume' oder 'Nikiri' Saucen-Zubereitung?",
          nl: "Wat is 'tsume' of 'nikiri' saus bereiding?"
        },
        options: [
          { en: "Cooked soy-mirin-sake sauce for brushing sushi, less salty than raw soy, pre-applied by chef - professional finishing touch", es: "Salsa cocida de soja-mirin-sake para cepillar sushi, menos salada que soja cruda, pre-aplicada por chef - toque final profesional", de: "Gekochte Soja-Mirin-Sake-Sauce zum Bestreichen von Sushi, weniger salzig als rohe Soja, vom Koch vorab aufgetragen - professioneller Finishing-Touch", nl: "Gekookte soja-mirin-sake saus voor borstelen sushi, minder zout dan rauwe soja, vooraf aangebracht door chef - professionele afwerkings toets" },
          { en: "Raw soy sauce", es: "Salsa de soja cruda", de: "Rohe Sojasauce", nl: "Rauwe sojasaus" },
          { en: "Vinegar only", es: "Solo vinagre", de: "Nur Essig", nl: "Alleen azijn" },
          { en: "Mayonnaise based", es: "A base de mayonesa", de: "Mayonnaise-basiert", nl: "Mayonaise gebaseerd" }
        ],
        correct: 0,
        explanation: {
          en: "Tsume/Nikiri (煮切り): cooked soy sauce for sushi. Heat soy sauce, mirin, sake (sometimes dashi), simmer until alcohol burns off, cool. Result: mellower, less salty, slightly sweet glaze. Chef brushes on nigiri before serving (tsuke-joyu style). Benefits: controlled seasoning (no over-dunking), elegant presentation, brings out fish flavor without overpowering. Different from table soy sauce (shoyu). High-end sushi bars make house nikiri. Shows chef's attention to balance. Alternative to customer dipping.",
          es: "Tsume/Nikiri (煮切り): salsa de soja cocida para sushi. Calentar salsa de soja, mirin, sake (a veces dashi), cocinar a fuego lento hasta que alcohol se queme, enfriar. Resultado: más suave, menos salado, glaseado ligeramente dulce. Chef cepilla en nigiri antes de servir (estilo tsuke-joyu). Beneficios: condimento controlado (sin exceso de inmersión), presentación elegante, resalta sabor de pescado sin abrumar. Diferente de salsa de soja de mesa (shoyu). Bares de sushi de alta gama hacen nikiri casero. Muestra atención del chef al equilibrio. Alternativa a inmersión del cliente.",
          de: "Tsume/Nikiri (煮切り): gekochte Sojasauce für Sushi. Erhitze Sojasauce, Mirin, Sake (manchmal Dashi), köchle bis Alkohol abbrennt, kühle. Ergebnis: milder, weniger salzig, leicht süße Glasur. Koch pinselt auf Nigiri vor Servieren (Tsuke-Joyu-Stil). Vorteile: kontrollierte Würzung (kein Über-Eintauchen), elegante Präsentation, bringt Fischgeschmack heraus ohne zu überwältigen. Anders als Tisch-Sojasauce (Shoyu). High-End-Sushi-Bars machen Haus-Nikiri. Zeigt Kochs Aufmerksamkeit für Balance. Alternative zum Kunden-Eintauchen.",
          nl: "Tsume/Nikiri (煮切り): gekookte sojasaus voor sushi. Verhit sojasaus, mirin, sake (soms dashi), sudder tot alcohol afbrandt, koel. Resultaat: milder, minder zout, licht zoet glazuur. Chef borstelt op nigiri voor serveren (tsuke-joyu stijl). Voordelen: gecontroleerde kruiding (geen over-dippen), elegante presentatie, brengt vis smaak naar voren zonder te overheersen. Anders dan tafel sojasaus (shoyu). High-end sushi bars maken huis nikiri. Toont chef's aandacht voor balans. Alternatief voor klant dippen."
        }
      },
      {
        question: {
          en: "What is 'hikarimono' classification in sushi?",
          es: "¿Qué es la clasificación 'hikarimono' en sushi?",
          de: "Was ist 'Hikarimono' Klassifizierung bei Sushi?",
          nl: "Wat is 'hikarimono' classificatie bij sushi?"
        },
        options: [
          { en: "Silver-skinned fish (mackerel, sardine, horse mackerel, gizzard shad) - oily, strong-flavored, require vinegar curing or careful prep", es: "Pescado de piel plateada (caballa, sardina, jurel, sábalo molleja) - graso, sabor fuerte, requiere curado en vinagre o preparación cuidadosa", de: "Silber-häutige Fische (Makrele, Sardine, Stöcker, Gizzard Shad) - ölig, stark aromatisch, erfordern Essig-Pökelung oder sorgfältige Vorbereitung", nl: "Zilver-gevilde vis (makreel, sardine, horsmakreel, gizzard shad) - vet, sterk gearomatiseerd, vereisen azijn curen of zorgvuldige prep" },
          { en: "White fish only", es: "Solo pescado blanco", de: "Nur Weißfisch", nl: "Alleen witte vis" },
          { en: "Shellfish category", es: "Categoría de mariscos", de: "Schalentier-Kategorie", nl: "Schaaldier categorie" },
          { en: "Freshwater fish", es: "Pescado de agua dulce", de: "Süßwasserfisch", nl: "Zoetwatervis" }
        ],
        correct: 0,
        explanation: {
          en: "Hikarimono (光り物 - 'shiny things'): silver-skinned fish category. Includes: saba (mackerel), iwashi (sardine), aji (horse mackerel), kohada (gizzard shad), sanma (Pacific saury), sayori (halfbeak). Characteristics: shiny silver skin, oily flesh, strong ocean flavor, spoils quickly. Traditional preparation: salt-cure briefly, vinegar-cure (su-jime) to firm, preserve, mellow fishiness. Challenging for sushi chefs - must be ultra-fresh, perfectly timed curing. Shows technical skill. Acquired taste but beloved by connoisseurs.",
          es: "Hikarimono (光り物 - 'cosas brillantes'): categoría de pescado de piel plateada. Incluye: saba (caballa), iwashi (sardina), aji (jurel), kohada (sábalo molleja), sanma (saury del Pacífico), sayori (halfbeak). Características: piel plateada brillante, carne grasa, sabor fuerte de océano, se echa a perder rápidamente. Preparación tradicional: curar brevemente con sal, curar con vinagre (su-jime) para firmar, preservar, suavizar sabor a pescado. Desafiante para chefs de sushi - debe ser ultra-fresco, curado perfectamente cronometrado. Muestra habilidad técnica. Gusto adquirido pero amado por conocedores.",
          de: "Hikarimono (光り物 - 'glänzende Dinge'): Silber-häutige Fisch-Kategorie. Enthält: Saba (Makrele), Iwashi (Sardine), Aji (Stöcker), Kohada (Gizzard Shad), Sanma (Pazifik-Saury), Sayori (Halbschnäbler). Eigenschaften: glänzende silberne Haut, öliges Fleisch, starker Ozeangeschmack, verdirbt schnell. Traditionelle Zubereitung: kurz salz-pökeln, essig-pökeln (Su-Jime) zum Festigen, Konservieren, Mildern von Fischigkeit. Herausfordernd für Sushi-Köche - muss ultra-frisch sein, perfekt getimte Pökelung. Zeigt technisches Können. Erworbener Geschmack aber von Kennern geliebt.",
          nl: "Hikarimono (光り物 - 'glanzende dingen'): zilver-gevilde vis categorie. Bevat: saba (makreel), iwashi (sardine), aji (horsmakreel), kohada (gizzard shad), sanma (Pacifische saury), sayori (halfbek). Kenmerken: glanzend zilver vel, vet vlees, sterke oceaan smaak, bederft snel. Traditionele bereiding: zout-curen kort, azijn-curen (su-jime) om te stevigen, conserveren, verzachten vissigheid. Uitdagend voor sushi chefs - moet ultra-vers zijn, perfect getimede curing. Toont technische vaardigheid. Verworven smaak maar geliefd door kenners."
        }
      },
      {
        question: {
          en: "What is 'shiromi' versus 'akami' fish classification?",
          es: "¿Qué es la clasificación de pescado 'shiromi' versus 'akami'?",
          de: "Was ist 'Shiromi' versus 'Akami' Fisch-Klassifizierung?",
          nl: "Wat is 'shiromi' versus 'akami' vis classificatie?"
        },
        options: [
          { en: "Shiromi: white-fleshed fish (tai, hirame, suzuki) - delicate, mild, showcases knife work; akami: red-fleshed (tuna, bonito) - meaty, iron-rich", es: "Shiromi: pescado de carne blanca (tai, hirame, suzuki) - delicado, suave, muestra trabajo de cuchillo; akami: carne roja (atún, bonito) - carnoso, rico en hierro", de: "Shiromi: weißfleischiger Fisch (Tai, Hirame, Suzuki) - zart, mild, zeigt Messerarbeit; Akami: rotfleischig (Thunfisch, Bonito) - fleischig, eisenreich", nl: "Shiromi: wit-vlezende vis (tai, hirame, suzuki) - delicaat, mild, toont meswerk; akami: rood-vlezend (tonijn, bonito) - vlezend, ijzerrijk" },
          { en: "Preparation methods", es: "Métodos de preparación", de: "Zubereitungsmethoden", nl: "Bereidingsmethoden" },
          { en: "Size categories", es: "Categorías de tamaño", de: "Größen-Kategorien", nl: "Grootte categorieën" },
          { en: "Price levels", es: "Niveles de precio", de: "Preis-Stufen", nl: "Prijs niveaus" }
        ],
        correct: 0,
        explanation: {
          en: "Fundamental sushi classifications: SHIROMI (白身 - 'white body'): white-fleshed fish. Examples: tai (sea bream), hirame (flounder/halibut), suzuki (sea bass), fugu (pufferfish), isaki (grunt). Characteristics: delicate flavor, lean, showcases cutting technique, often benefits from kombu-jime. AKAMI (赤身 - 'red body'): red-fleshed fish. Examples: maguro (tuna), katsuo (bonito), kajiki (marlin). Characteristics: high myoglobin, meaty texture, iron/mineral taste, rich. Both valid but different presentations. Also: hikarimono (silver-skin), nimono (cooked).",
          es: "Clasificaciones fundamentales de sushi: SHIROMI (白身 - 'cuerpo blanco'): pescado de carne blanca. Ejemplos: tai (besugo), hirame (platija/halibut), suzuki (lubina), fugu (pez globo), isaki (grunt). Características: sabor delicado, magro, muestra técnica de corte, a menudo se beneficia de kombu-jime. AKAMI (赤身 - 'cuerpo rojo'): pescado de carne roja. Ejemplos: maguro (atún), katsuo (bonito), kajiki (marlín). Características: alta mioglobina, textura carnosa, sabor a hierro/mineral, rico. Ambos válidos pero diferentes presentaciones. También: hikarimono (piel plateada), nimono (cocido).",
          de: "Fundamentale Sushi-Klassifizierungen: SHIROMI (白身 - 'weißer Körper'): weißfleischiger Fisch. Beispiele: Tai (Seebrasse), Hirame (Flunder/Heilbutt), Suzuki (Seebarsch), Fugu (Kugelfisch), Isaki (Grunt). Eigenschaften: zarter Geschmack, mager, zeigt Schneidetechnik, profitiert oft von Kombu-Jime. AKAMI (赤身 - 'roter Körper'): rotfleischiger Fisch. Beispiele: Maguro (Thunfisch), Katsuo (Bonito), Kajiki (Marlin). Eigenschaften: hohes Myoglobin, fleischige Textur, Eisen-/Mineral-Geschmack, reich. Beide gültig aber verschiedene Präsentationen. Auch: Hikarimono (Silber-Haut), Nimono (gekocht).",
          nl: "Fundamentele sushi classificaties: SHIROMI (白身 - 'wit lichaam'): wit-vlezende vis. Voorbeelden: tai (zeebrasem), hirame (bot/heilbot), suzuki (zeebaars), fugu (kogelvis), isaki (grunt). Kenmerken: delicate smaak, mager, toont snij techniek, profiteert vaak van kombu-jime. AKAMI (赤身 - 'rood lichaam'): rood-vlezende vis. Voorbeelden: maguro (tonijn), katsuo (bonito), kajiki (marlijn). Kenmerken: hoog myoglobine, vlezende textuur, ijzer/mineraal smaak, rijk. Beide geldig maar verschillende presentaties. Ook: hikarimono (zilver-vel), nimono (gekookt)."
        }
      },
      {
        question: {
          en: "What is 'hosomaki' versus 'futomaki' versus 'temaki'?",
          es: "¿Qué es 'hosomaki' versus 'futomaki' versus 'temaki'?",
          de: "Was ist 'Hosomaki' versus 'Futomaki' versus 'Temaki'?",
          nl: "Wat is 'hosomaki' versus 'futomaki' versus 'temaki'?"
        },
        options: [
          { en: "Hosomaki: thin roll (1-2 ingredients); futomaki: thick roll (multiple ingredients); temaki: hand-rolled cone - different formats for maki sushi", es: "Hosomaki: rollo delgado (1-2 ingredientes); futomaki: rollo grueso (múltiples ingredientes); temaki: cono enrollado a mano - diferentes formatos para maki sushi", de: "Hosomaki: dünne Rolle (1-2 Zutaten); Futomaki: dicke Rolle (mehrere Zutaten); Temaki: handgerollter Kegel - verschiedene Formate für Maki-Sushi", nl: "Hosomaki: dunne rol (1-2 ingrediënten); futomaki: dikke rol (meerdere ingrediënten); temaki: handgerolde kegel - verschillende formaten voor maki sushi" },
          { en: "Different fish types", es: "Diferentes tipos de pescado", de: "Verschiedene Fischarten", nl: "Verschillende vis types" },
          { en: "Cooking methods", es: "Métodos de cocción", de: "Kochmethoden", nl: "Kookmethoden" },
          { en: "Rice preparations", es: "Preparaciones de arroz", de: "Reis-Zubereitungen", nl: "Rijst bereidingen" }
        ],
        correct: 0,
        explanation: {
          en: "Maki (巻き - 'roll') categories by size/format: HOSOMAKI (細巻き - 'thin roll'): 1-1.5 inch diameter, half nori sheet, 1-2 ingredients (tekkamaki/tuna, kappamaki/cucumber). Clean, simple. FUTOMAKI (太巻き - 'fat roll'): 2-2.5 inch diameter, full nori sheet, 5-7 ingredients (vegetables, egg, fish). Festive, colorful. Cut into 6-8 pieces. TEMAKI (手巻き - 'hand roll'): cone-shaped, hand-held, full sheet rolled into ice cream cone shape. Casual, immediate eating. Each format has purpose, tradition.",
          es: "Categorías de maki (巻き - 'rollo') por tamaño/formato: HOSOMAKI (細巻き - 'rollo delgado'): diámetro 1-1.5 pulgada, media hoja de nori, 1-2 ingredientes (tekkamaki/atún, kappamaki/pepino). Limpio, simple. FUTOMAKI (太巻き - 'rollo gordo'): diámetro 2-2.5 pulgada, hoja completa de nori, 5-7 ingredientes (vegetales, huevo, pescado). Festivo, colorido. Cortar en 6-8 piezas. TEMAKI (手巻き - 'rollo de mano'): forma de cono, sostenido con mano, hoja completa enrollada en forma de cono de helado. Casual, comer inmediato. Cada formato tiene propósito, tradición.",
          de: "Maki (巻き - 'Rolle') Kategorien nach Größe/Format: HOSOMAKI (細巻き - 'dünne Rolle'): 2.5-4cm Durchmesser, halbes Nori-Blatt, 1-2 Zutaten (Tekkamaki/Thunfisch, Kappamaki/Gurke). Sauber, einfach. FUTOMAKI (太巻き - 'dicke Rolle'): 5-6cm Durchmesser, volles Nori-Blatt, 5-7 Zutaten (Gemüse, Ei, Fisch). Festlich, farbenfroh. In 6-8 Stücke schneiden. TEMAKI (手巻き - 'Hand-Rolle'): kegelförmig, handgehalten, volles Blatt zu Eistütenform gerollt. Lässig, sofortiges Essen. Jedes Format hat Zweck, Tradition.",
          nl: "Maki (巻き - 'rol') categorieën per grootte/formaat: HOSOMAKI (細巻き - 'dunne rol'): 2.5-4cm diameter, half nori vel, 1-2 ingrediënten (tekkamaki/tonijn, kappamaki/komkommer). Schoon, simpel. FUTOMAKI (太巻き - 'dikke rol'): 5-6cm diameter, vol nori vel, 5-7 ingrediënten (groenten, ei, vis). Feestelijk, kleurrijk. Snijd in 6-8 stukken. TEMAKI (手巻き - 'hand rol'): kegelvormig, handvast, vol vel gerold in ijshoorn vorm. Casual, onmiddellijk eten. Elk formaat heeft doel, traditie."
        }
      },
      {
        question: {
          en: "What is 'gunkanmaki' and when was it invented?",
          es: "¿Qué es 'gunkanmaki' y cuándo se inventó?",
          de: "Was ist 'Gunkanmaki' und wann wurde es erfunden?",
          nl: "Wat is 'gunkanmaki' en wanneer werd het uitgevonden?"
        },
        options: [
          { en: "Battleship roll - rice oval wrapped with nori strip, topped with loose ingredients (ikura, uni) - invented 1941 at Ginza Kyubey for sea urchin", es: "Rollo acorazado - óvalo de arroz envuelto con tira de nori, cubierto con ingredientes sueltos (ikura, uni) - inventado 1941 en Ginza Kyubey para erizo de mar", de: "Schlachtschiff-Rolle - Reis-Oval mit Nori-Streifen umwickelt, belegt mit losen Zutaten (Ikura, Uni) - erfunden 1941 im Ginza Kyubey für Seeigel", nl: "Slagschip rol - rijst ovaal gewikkeld met nori strook, bedekt met losse ingrediënten (ikura, uni) - uitgevonden 1941 in Ginza Kyubey voor zee-egel" },
          { en: "Ancient technique", es: "Técnica antigua", de: "Alte Technik", nl: "Oude techniek" },
          { en: "Western invention", es: "Invención occidental", de: "Westliche Erfindung", nl: "Westerse uitvinding" },
          { en: "Chinese style", es: "Estilo chino", de: "Chinesischer Stil", nl: "Chinese stijl" }
        ],
        correct: 0,
        explanation: {
          en: "Gunkanmaki (軍艦巻き - 'battleship roll'): modern sushi innovation. Invented 1941 by Kyubey sushi restaurant (Ginza, Tokyo) to serve sea urchin (uni). Problem: uni too soft/delicate to form traditional nigiri. Solution: shape rice oval, wrap nori strip around sides (creates 'boat'), spoon uni on top. Looks like battleship from above. Now used for: ikura (salmon roe), uni, negitoro (chopped tuna), other loose toppings. Relatively recent - shows sushi evolution continues.",
          es: "Gunkanmaki (軍艦巻き - 'rollo acorazado'): innovación moderna de sushi. Inventado 1941 por restaurante de sushi Kyubey (Ginza, Tokio) para servir erizo de mar (uni). Problema: uni demasiado suave/delicado para formar nigiri tradicional. Solución: dar forma a óvalo de arroz, envolver tira de nori alrededor de lados (crea 'barco'), poner uni encima con cuchara. Parece acorazado desde arriba. Ahora usado para: ikura (huevas de salmón), uni, negitoro (atún picado), otras coberturas sueltas. Relativamente reciente - muestra evolución de sushi continúa.",
          de: "Gunkanmaki (軍艦巻き - 'Schlachtschiff-Rolle'): moderne Sushi-Innovation. Erfunden 1941 von Kyubey Sushi-Restaurant (Ginza, Tokio) um Seeigel (Uni) zu servieren. Problem: Uni zu weich/zart um traditionelles Nigiri zu formen. Lösung: forme Reis-Oval, wickle Nori-Streifen um Seiten (schafft 'Boot'), löffle Uni oben drauf. Sieht aus wie Schlachtschiff von oben. Jetzt verwendet für: Ikura (Lachsrogen), Uni, Negitoro (gehackter Thunfisch), andere lose Beläge. Relativ neu - zeigt Sushi-Evolution geht weiter.",
          nl: "Gunkanmaki (軍艦巻き - 'slagschip rol'): moderne sushi innovatie. Uitgevonden 1941 door Kyubey sushi restaurant (Ginza, Tokyo) om zee-egel (uni) te serveren. Probleem: uni te zacht/delicaat om traditionele nigiri te vormen. Oplossing: vorm rijst ovaal, wikkel nori strook rond zijkanten (creëert 'boot'), lepel uni op bovenkant. Lijkt op slagschip van boven. Nu gebruikt voor: ikura (zalm kuit), uni, negitoro (gehakte tonijn), andere losse toppings. Relatief recent - toont sushi evolutie gaat door."
        }
      },
      {
        question: {
          en: "What is 'sushi-meshi' versus 'gohan' rice?",
          es: "¿Qué es arroz 'sushi-meshi' versus 'gohan'?",
          de: "Was ist 'Sushi-Meshi' versus 'Gohan' Reis?",
          nl: "Wat is 'sushi-meshi' versus 'gohan' rijst?"
        },
        options: [
          { en: "Sushi-meshi: seasoned with vinegar, sugar, salt (shari); gohan: plain steamed rice - seasoning is critical difference for sushi", es: "Sushi-meshi: sazonado con vinagre, azúcar, sal (shari); gohan: arroz al vapor simple - condimento es diferencia crítica para sushi", de: "Sushi-Meshi: gewürzt mit Essig, Zucker, Salz (Shari); Gohan: einfacher gedämpfter Reis - Würzung ist kritischer Unterschied für Sushi", nl: "Sushi-meshi: gekruid met azijn, suiker, zout (shari); gohan: gewoon gestoomde rijst - kruiding is kritisch verschil voor sushi" },
          { en: "Different rice varieties", es: "Diferentes variedades de arroz", de: "Verschiedene Reissorten", nl: "Verschillende rijst variëteiten" },
          { en: "Cooking methods differ", es: "Métodos de cocción difieren", de: "Kochmethoden unterscheiden sich", nl: "Kookmethoden verschillen" },
          { en: "Same preparation", es: "Misma preparación", de: "Gleiche Zubereitung", nl: "Zelfde bereiding" }
        ],
        correct: 0,
        explanation: {
          en: "Critical distinction: SUSHI-MESHI/SHARI (酢飯/シャリ): sushi rice. Cook short-grain rice, while hot fold in sushi-zu (rice vinegar, sugar, salt mixture). Fan to cool, create glossy finish. Slightly sour, sweet, seasoned. Body temp when serving (not cold). GOHAN (ご飯): plain steamed rice for meals. No seasoning. The vinegar seasoning is what makes it 'sushi' rice. Ratio varies by shop (secret recipe). Proper sushi-meshi is half the battle - balances fish, provides structure, contributes flavor.",
          es: "Distinción crítica: SUSHI-MESHI/SHARI (酢飯/シャリ): arroz de sushi. Cocinar arroz de grano corto, mientras caliente doblar en sushi-zu (vinagre de arroz, mezcla de azúcar, sal). Abanicar para enfriar, crear acabado brillante. Ligeramente ácido, dulce, sazonado. Temperatura corporal al servir (no frío). GOHAN (ご飯): arroz al vapor simple para comidas. Sin condimento. El condimento de vinagre es lo que lo hace arroz de 'sushi'. Proporción varía por tienda (receta secreta). Sushi-meshi adecuado es mitad de batalla - equilibra pescado, proporciona estructura, contribuye sabor.",
          de: "Kritischer Unterschied: SUSHI-MESHI/SHARI (酢飯/シャリ): Sushi-Reis. Koche kurzkorn Reis, während heiß falte in Sushi-Zu (Reisessig, Zucker, Salz Mischung). Fächle zum Kühlen, schaffe glänzendes Finish. Leicht sauer, süß, gewürzt. Körpertemperatur beim Servieren (nicht kalt). GOHAN (ご飯): einfacher gedämpfter Reis für Mahlzeiten. Keine Würzung. Die Essig-Würzung macht es zu 'Sushi'-Reis. Verhältnis variiert je Laden (Geheim-Rezept). Richtiger Sushi-Meshi ist halbe Schlacht - balanciert Fisch, bietet Struktur, trägt Geschmack bei.",
          nl: "Kritisch onderscheid: SUSHI-MESHI/SHARI (酢飯/シャリ): sushi rijst. Kook korte korrel rijst, terwijl warm vouw in sushi-zu (rijst azijn, suiker, zout mengsel). Waaier om te koelen, creëer glanzend finish. Licht zuur, zoet, gekruid. Lichaams temp bij serveren (niet koud). GOHAN (ご飯): gewone gestoomde rijst voor maaltijden. Geen kruiding. De azijn kruiding maakt het 'sushi' rijst. Ratio varieert per winkel (geheim recept). Juiste sushi-meshi is halve strijd - balanceert vis, biedt structuur, draagt smaak bij."
        }
      },
{
        question: {
          en: "What is 'torching' (aburi) technique for premium cuts?",
          es: "¿Qué es la técnica de 'soplete' (aburi) para cortes premium?",
          de: "Was ist 'Abflammen' (Aburi) Technik für Premium-Schnitte?",
          nl: "Wat is 'branden' (aburi) techniek voor premium snedes?"
        },
        options: [
          { en: "Quick blow-torch searing of fatty fish (otoro, salmon belly) to caramelize fat, create smoky aroma, improve texture - modern high-end technique", es: "Sellado rápido con soplete de pescado graso (otoro, vientre de salmón) para caramelizar grasa, crear aroma ahumado, mejorar textura - técnica moderna de alta gama", de: "Schnelles Lötlampen-Anbraten von fettem Fisch (Otoro, Lachsbauch) um Fett zu karamellisieren, rauchiges Aroma schaffen, Textur verbessern - moderne High-End-Technik", nl: "Snelle brander aanbraden van vette vis (otoro, zalm buik) om vet te karameliseren, rokerig aroma creëren, textuur verbeteren - moderne high-end techniek" },
          { en: "Deep frying method", es: "Método de freír", de: "Frittier-Methode", nl: "Frituur methode" },
          { en: "Boiling technique", es: "Técnica de hervir", de: "Koch-Technik", nl: "Kook techniek" },
          { en: "Raw serving only", es: "Solo servir crudo", de: "Nur roh servieren", nl: "Alleen rauw serveren" }
        ],
        correct: 0,
        explanation: {
          en: "Aburi premium application: Pat fish dry. Torch 2-3 seconds until surface browns, fat bubbles. Don't overcook interior. Benefits: melts intramuscular fat creating buttery mouthfeel, adds smoky/charred notes, transforms texture from soft to crisp-tender, visually dramatic browning. Best for: otoro (super fatty tuna), salmon belly/toro, saba (mackerel), engawa (flounder fin). Often finished with sea salt, yuzu, or ponzu. Modern technique that elevates fatty cuts dramatically. Shows contemporary sushi innovation.",
          es: "Aplicación premium de aburi: Secar pescado. Soplete 2-3 segundos hasta que superficie se dore, grasa burbujee. No sobrecocinar interior. Beneficios: derrite grasa intramuscular creando sensación mantecosa en boca, añade notas ahumadas/carbonizadas, transforma textura de suave a crujiente-tierno, dorado visualmente dramático. Mejor para: otoro (atún súper graso), vientre/toro de salmón, saba (caballa), engawa (aleta de platija). A menudo terminado con sal marina, yuzu o ponzu. Técnica moderna que eleva cortes grasos dramáticamente. Muestra innovación contemporánea de sushi.",
          de: "Aburi Premium-Anwendung: Tupfe Fisch trocken. Fackel 2-3 Sekunden bis Oberfläche bräunt, Fett blubbert. Koche Inneres nicht über. Vorteile: schmilzt intramuskuläres Fett schafft buttrigen Mundgefühl, fügt rauchige/verkohlte Noten hinzu, transformiert Textur von weich zu knusprig-zart, visuell dramatische Bräunung. Am besten für: Otoro (super-fetter Thunfisch), Lachsbauch/Toro, Saba (Makrele), Engawa (Flunder-Flosse). Oft mit Meersalz, Yuzu oder Ponzu abgeschlossen. Moderne Technik die fette Schnitte dramatisch hebt. Zeigt zeitgenössische Sushi-Innovation.",
          nl: "Aburi premium toepassing: Dep vis droog. Brand 2-3 seconden tot oppervlakte bruint, vet borrelt. Kook binnenkant niet over. Voordelen: smelt intramusculair vet creërend boterachtig mondgevoel, voegt rokerige/verkoold noten toe, transformeert textuur van zacht tot knapperig-zacht, visueel dramatische bruining. Best voor: otoro (super vette tonijn), zalm buik/toro, saba (makreel), engawa (bot vin). Vaak afgewerkt met zeezout, yuzu of ponzu. Moderne techniek die vette snedes dramatisch verheft. Toont hedendaagse sushi innovatie."
        }
      },
      {
        question: {
          en: "What is 'shirako' and how is it prepared?",
          es: "¿Qué es 'shirako' y cómo se prepara?",
          de: "Was ist 'Shirako' und wie wird es zubereitet?",
          nl: "Wat is 'shirako' en hoe wordt het bereid?"
        },
        options: [
          { en: "Fish sperm sacs (milt), creamy texture, delicate flavor - served raw as sashimi, grilled, or in ponzu, winter delicacy", es: "Sacos de esperma de pescado (lecha), textura cremosa, sabor delicado - servido crudo como sashimi, asado o en ponzu, manjar de invierno", de: "Fisch-Samensäcke (Milch), cremige Textur, zarter Geschmack - roh als Sashimi serviert, gegrillt oder in Ponzu, Winter-Delikatesse", nl: "Vis sperma zakken (hom), romige textuur, delicate smaak - geserveerd rauw als sashimi, gegrild of in ponzu, winter delicatesse" },
          { en: "Fish eggs only", es: "Solo huevas de pescado", de: "Nur Fischeier", nl: "Alleen viseieren" },
          { en: "Fish liver", es: "Hígado de pescado", de: "Fischleber", nl: "Vislever" },
          { en: "Fish bones", es: "Huesos de pescado", de: "Fischknochen", nl: "Visbotten" }
        ],
        correct: 0,
        explanation: {
          en: "Shirako (白子 - 'white children'): fish milt (sperm sacs). Most prized: cod (tara), pufferfish (fugu), anglerfish. Season: winter when fish spawn. Texture: incredibly creamy, custard-like, melts in mouth. Flavor: delicate, slightly sweet, ocean-clean. Preparations: raw sashimi with ponzu, grilled (yakishirako), tempura, hot pot. Blanch briefly to firm if too soft. Acquired taste - rich, unusual texture. High in protein. Japanese delicacy, less common in West. Shows nose-to-tail philosophy.",
          es: "Shirako (白子 - 'niños blancos'): lecha de pescado (sacos de esperma). Más preciado: bacalao (tara), pez globo (fugu), rape. Temporada: invierno cuando pescado desova. Textura: increíblemente cremosa, como natilla, se derrite en boca. Sabor: delicado, ligeramente dulce, limpio de océano. Preparaciones: sashimi crudo con ponzu, asado (yakishirako), tempura, olla caliente. Escaldar brevemente para firmar si demasiado suave. Gusto adquirido - rico, textura inusual. Alto en proteína. Delicia japonesa, menos común en Occidente. Muestra filosofía de nariz a cola.",
          de: "Shirako (白子 - 'weiße Kinder'): Fischmilch (Samensäcke). Am meisten geschätzt: Kabeljau (Tara), Kugelfisch (Fugu), Seeteufel. Saison: Winter wenn Fische laichen. Textur: unglaublich cremig, puddingähnlich, schmilzt im Mund. Geschmack: zart, leicht süß, ozean-rein. Zubereitungen: rohes Sashimi mit Ponzu, gegrillt (Yakishirako), Tempura, Feuertopf. Kurz blanchieren um zu festigen wenn zu weich. Erworbener Geschmack - reich, ungewöhnliche Textur. Hoher Proteingehalt. Japanische Delikatesse, weniger verbreitet im Westen. Zeigt Nase-zu-Schwanz-Philosophie.",
          nl: "Shirako (白子 - 'witte kinderen'): vis hom (sperma zakken). Meest gewaardeerd: kabeljauw (tara), kogelvis (fugu), zeeduivel. Seizoen: winter wanneer vis paait. Textuur: ongelooflijk romig, vla-achtig, smelt in mond. Smaak: delicaat, licht zoet, oceaan-schoon. Bereidingen: rauwe sashimi met ponzu, gegrild (yakishirako), tempura, hot pot. Blancheer kort om te stevigen als te zacht. Verworven smaak - rijk, ongewone textuur. Hoog in eiwit. Japanse delicatesse, minder gebruikelijk in Westen. Toont neus-tot-staart filosofie."
        }
      },
      {
        question: {
          en: "What is 'mentaiko' versus 'tarako' roe?",
          es: "¿Qué es huevas 'mentaiko' versus 'tarako'?",
          de: "Was ist 'Mentaiko' versus 'Tarako' Rogen?",
          nl: "Wat is 'mentaiko' versus 'tarako' kuit?"
        },
        options: [
          { en: "Both are pollock roe; tarako: salted only; mentaiko: salted and spiced with chili, more complex flavor - Fukuoka specialty", es: "Ambos son huevas de abadejo; tarako: solo salado; mentaiko: salado y especiado con chile, sabor más complejo - especialidad de Fukuoka", de: "Beide sind Seelachs-Rogen; Tarako: nur gesalzen; Mentaiko: gesalzen und gewürzt mit Chili, komplexerer Geschmack - Fukuoka-Spezialität", nl: "Beide zijn koolvis kuit; tarako: alleen gezouten; mentaiko: gezouten en gekruid met chili, meer complexe smaak - Fukuoka specialiteit" },
          { en: "Different fish species", es: "Diferentes especies de peces", de: "Verschiedene Fischarten", nl: "Verschillende vis soorten" },
          { en: "Same preparation", es: "Misma preparación", de: "Gleiche Zubereitung", nl: "Zelfde bereiding" },
          { en: "One is fake", es: "Uno es falso", de: "Einer ist falsch", nl: "Een is nep" }
        ],
        correct: 0,
        explanation: {
          en: "Pollock roe preparations: TARAKO (鱈子): plain salted pollock/cod roe. Bright orange-pink, salty, briny. Traditional. MENTAIKO (明太子): spicy marinated pollock roe. Fukuoka specialty from Korean influence. Cured in salt-chili-sake brine, sometimes yuzu. Spicy, complex, addictive. Uses: onigiri filling, pasta (mentaiko spaghetti - fusion), rice topping, eaten straight. Both popular but mentaiko more trendy. Whole sacs, pop when bitten. High umami, rich. Related: ikura (salmon roe), tobiko (flying fish roe).",
          es: "Preparaciones de huevas de abadejo: TARAKO (鱈子): huevas de abadejo/bacalao saladas simples. Naranja-rosa brillante, saladas, salinas. Tradicional. MENTAIKO (明太子): huevas de abadejo marinadas picantes. Especialidad de Fukuoka de influencia coreana. Curadas en salmuera de sal-chile-sake, a veces yuzu. Picante, complejo, adictivo. Usos: relleno de onigiri, pasta (espagueti mentaiko - fusión), cobertura de arroz, comer directo. Ambos populares pero mentaiko más de moda. Sacos enteros, explotan al morder. Alto umami, rico. Relacionado: ikura (huevas de salmón), tobiko (huevas de pez volador).",
          de: "Seelachs-Rogen-Zubereitungen: TARAKO (鱈子): einfach gesalzener Seelachs/Kabeljau-Rogen. Leuchtend orange-rosa, salzig, salzig. Traditionell. MENTAIKO (明太子): würziger marinierter Seelachs-Rogen. Fukuoka-Spezialität aus koreanischem Einfluss. In Salz-Chili-Sake-Lake gepökelt, manchmal Yuzu. Würzig, komplex, süchtig machend. Verwendung: Onigiri-Füllung, Pasta (Mentaiko-Spaghetti - Fusion), Reis-Belag, direkt gegessen. Beide beliebt aber Mentaiko trendiger. Ganze Säcke, platzen beim Beißen. Hohes Umami, reich. Verwandt: Ikura (Lachsrogen), Tobiko (Fliegenfisch-Rogen).",
          nl: "Koolvis kuit bereidingen: TARAKO (鱈子): gewoon gezouten koolvis/kabeljauw kuit. Helder oranje-roze, zout, zilt. Traditioneel. MENTAIKO (明太子): pittige gemarineerde koolvis kuit. Fukuoka specialiteit van Koreaanse invloed. Gecured in zout-chili-sake pekel, soms yuzu. Pittig, complex, verslavend. Gebruik: onigiri vulling, pasta (mentaiko spaghetti - fusie), rijst topping, direct gegeten. Beide populair maar mentaiko meer trendy. Hele zakken, ploppen bij bijten. Hoge umami, rijk. Gerelateerd: ikura (zalm kuit), tobiko (vliegende vis kuit)."
        }
      },
      {
        question: {
          en: "What is 'engawa' and why is it prized?",
          es: "¿Qué es 'engawa' y por qué se valora?",
          de: "Was ist 'Engawa' und warum ist es geschätzt?",
          nl: "Wat is 'engawa' en waarom is het gewaardeerd?"
        },
        options: [
          { en: "Flounder/halibut fin muscle - constantly moving creates marbled, gelatinous, crunchy texture, rich flavor - only 4 small pieces per fish", es: "Músculo de aleta de platija/halibut - movimiento constante crea textura marmoleada, gelatinosa, crujiente, sabor rico - solo 4 piezas pequeñas por pescado", de: "Flunder/Heilbutt-Flossen-Muskel - ständige Bewegung schafft marmorierte, gelatinöse, knusprige Textur, reicher Geschmack - nur 4 kleine Stücke pro Fisch", nl: "Bot/heilbot vin spier - constant bewegen creëert gemarmerde, gelatineuze, knapperige textuur, rijke smaak - slechts 4 kleine stukken per vis" },
          { en: "Fish tail only", es: "Solo cola de pescado", de: "Nur Fischschwanz", nl: "Alleen visstaart" },
          { en: "Fish liver", es: "Hígado de pescado", de: "Fischleber", nl: "Vislever" },
          { en: "Fish bones", es: "Huesos de pescado", de: "Fischknochen", nl: "Visbotten" }
        ],
        correct: 0,
        explanation: {
          en: "Engawa (縁側 - 'veranda'): prized flatfish fin muscle. Location: thin strip along dorsal/ventral fins (where fish propels). Only 4 pieces per fish (2 per side). Why special: constant fin movement creates highly-exercised, collagen-rich, marbled muscle. Texture: crunchy-gelatinous (unique!), slightly chewy, tender. Flavor: rich, fatty, clean. Best from: hirame (flounder), karei (flatfish), halibut. Often torched (aburi). Expensive due to scarcity. Connoisseur favorite - texture unlike any other cut.",
          es: "Engawa (縁側 - 'veranda'): músculo de aleta de pez plano preciado. Ubicación: tira delgada a lo largo de aletas dorsales/ventrales (donde pescado se propulsa). Solo 4 piezas por pescado (2 por lado). Por qué especial: movimiento constante de aleta crea músculo altamente ejercitado, rico en colágeno, marmoleado. Textura: crujiente-gelatinosa (¡única!), ligeramente masticable, tierna. Sabor: rico, graso, limpio. Mejor de: hirame (platija), karei (pez plano), halibut. A menudo con soplete (aburi). Caro debido a escasez. Favorito de conocedores - textura diferente a cualquier otro corte.",
          de: "Engawa (縁側 - 'Veranda'): geschätzter Plattfisch-Flossen-Muskel. Lage: dünner Streifen entlang Rücken-/Bauchflossen (wo Fisch sich antreibt). Nur 4 Stücke pro Fisch (2 pro Seite). Warum besonders: ständige Flossenbewegung schafft hoch-trainiertes, kollagenreiches, marmoriertes Muskelfleisch. Textur: knusprig-gelatinös (einzigartig!), leicht zäh, zart. Geschmack: reich, fettig, sauber. Am besten von: Hirame (Flunder), Karei (Plattfisch), Heilbutt. Oft gefackelt (Aburi). Teuer wegen Knappheit. Kenner-Favorit - Textur ungleich jedem anderen Schnitt.",
          nl: "Engawa (縁側 - 'veranda'): gewaardeerde platvis vin spier. Locatie: dunne strook langs rug/buik vinnen (waar vis zich voortstuwt). Slechts 4 stukken per vis (2 per kant). Waarom speciaal: constant vin beweging creëert hoog-getrainde, collageen-rijke, gemarmerde spier. Textuur: knapperig-gelatineus (uniek!), licht taai, zacht. Smaak: rijk, vet, schoon. Best van: hirame (bot), karei (platvis), heilbot. Vaak geflambe (aburi). Duur vanwege schaarste. Kenner favoriet - textuur anders dan elke andere snede."
        }
      },
      {
        question: {
          en: "What is 'kazunoko' and its significance?",
          es: "¿Qué es 'kazunoko' y su significado?",
          de: "Was ist 'Kazunoko' und seine Bedeutung?",
          nl: "Wat is 'kazunoko' en zijn betekenis?"
        },
        options: [
          { en: "Herring roe clusters, crunchy texture, symbolizes fertility/prosperity in osechi New Year's food - expensive traditional delicacy", es: "Racimos de huevas de arenque, textura crujiente, simboliza fertilidad/prosperidad en comida de Año Nuevo osechi - manjar tradicional caro", de: "Hering-Rogen-Cluster, knusprige Textur, symbolisiert Fruchtbarkeit/Wohlstand im Osechi-Neujahrs-Essen - teure traditionelle Delikatesse", nl: "Haring kuit clusters, knapperige textuur, symboliseert vruchtbaarheid/voorspoed in osechi Nieuwjaars eten - dure traditionele delicatesse" },
          { en: "Fish paste", es: "Pasta de pescado", de: "Fischpaste", nl: "Vis pasta" },
          { en: "Seaweed type", es: "Tipo de alga", de: "Algen-Art", nl: "Zeewier type" },
          { en: "Dried fish", es: "Pescado seco", de: "Getrockneter Fisch", nl: "Gedroogde vis" }
        ],
        correct: 0,
        explanation: {
          en: "Kazunoko (数の子 - 'many children'): herring roe still in ovary membrane (cluster intact). Golden-yellow, thousands of tiny eggs, crunchy pop texture. Preparation: soak in water to remove salt (if salted), marinate in dashi-soy-mirin. Significance: essential osechi-ryori (New Year's food) - symbolizes fertility, many offspring, prosperity. Expensive (premium can be $100+/lb). Season: New Year's. Prized for: intact clusters, golden color, firm texture, satisfying crunch. Different from loose ikura (salmon roe). Cultural importance beyond flavor.",
          es: "Kazunoko (数の子 - 'muchos niños'): huevas de arenque aún en membrana de ovario (racimo intacto). Amarillo-dorado, miles de huevos diminutos, textura crujiente al explotar. Preparación: remojar en agua para eliminar sal (si salado), marinar en dashi-soja-mirin. Significado: esencial osechi-ryori (comida de Año Nuevo) - simboliza fertilidad, muchos hijos, prosperidad. Caro (premium puede ser $100+/lb). Temporada: Año Nuevo. Valorado por: racimos intactos, color dorado, textura firme, crujido satisfactorio. Diferente de ikura suelto (huevas de salmón). Importancia cultural más allá de sabor.",
          de: "Kazunoko (数の子 - 'viele Kinder'): Hering-Rogen noch in Eierstock-Membran (Cluster intakt). Golden-gelb, Tausende winzige Eier, knusprige Pop-Textur. Zubereitung: in Wasser einweichen um Salz zu entfernen (wenn gesalzen), in Dashi-Soja-Mirin marinieren. Bedeutung: wesentliches Osechi-Ryori (Neujahrs-Essen) - symbolisiert Fruchtbarkeit, viele Nachkommen, Wohlstand. Teuer (Premium kann $100+/Pfund sein). Saison: Neujahr. Geschätzt für: intakte Cluster, goldene Farbe, feste Textur, befriedigender Crunch. Anders als loser Ikura (Lachsrogen). Kulturelle Bedeutung über Geschmack hinaus.",
          nl: "Kazunoko (数の子 - 'vele kinderen'): haring kuit nog in ovarium membraan (cluster intact). Gouden-geel, duizenden kleine eieren, knapperige pop textuur. Bereiding: week in water om zout te verwijderen (als gezouten), marineer in dashi-soja-mirin. Betekenis: essentieel osechi-ryori (Nieuwjaars eten) - symboliseert vruchtbaarheid, vele nakomelingen, voorspoed. Duur (premium kan $100+/pond zijn). Seizoen: Nieuwjaar. Gewaardeerd voor: intacte clusters, gouden kleur, stevige textuur, bevredigende crunch. Anders dan losse ikura (zalm kuit). Culturele belang boven smaak."
        }
      },
      {
        question: {
          en: "What is 'kohada' preparation and why is it challenging?",
          es: "¿Qué es la preparación de 'kohada' y por qué es desafiante?",
          de: "Was ist 'Kohada' Zubereitung und warum ist sie herausfordernd?",
          nl: "Wat is 'kohada' bereiding en waarom is het uitdagend?"
        },
        options: [
          { en: "Gizzard shad requiring precise salt-vinegar curing to balance oiliness, remove bones, achieve proper texture - test of sushi chef's skill", es: "Sábalo molleja que requiere curado preciso de sal-vinagre para equilibrar grasa, eliminar huesos, lograr textura adecuada - prueba de habilidad del chef de sushi", de: "Gizzard Shad erfordert präzise Salz-Essig-Pökelung um Öligkeit zu balancieren, Knochen zu entfernen, richtige Textur zu erreichen - Test der Sushi-Koch-Fähigkeit", nl: "Gizzard shad vereist precieze zout-azijn curing om vetheid te balanceren, botten te verwijderen, juiste textuur te bereiken - test van sushi chef vaardigheid" },
          { en: "Simple raw preparation", es: "Preparación cruda simple", de: "Einfache rohe Zubereitung", nl: "Simpele rauwe bereiding" },
          { en: "Always grilled", es: "Siempre asado", de: "Immer gegrillt", nl: "Altijd gegrild" },
          { en: "Pre-made frozen", es: "Pre-hecho congelado", de: "Vorgefertigt gefroren", nl: "Voorgemaakt bevroren" }
        ],
        correct: 0,
        explanation: {
          en: "Kohada (小鰭 - gizzard shad): traditional Edomae fish, test of chef skill. Challenges: small, bony, oily, spoils quickly. Process: 1) Scale carefully (scales embed). 2) Fillet (many small bones). 3) Salt 20-40 min (draws moisture, firms). 4) Rinse, vinegar cure 10-20 min (too long = mushy, too short = fishy). 5) Remove tiny bones with tweezers. 6) Score skin decoratively (zigzag pattern). Result: firm, tangy, balanced, beautiful. Timing critical - varies by size, season, temperature. Mastering kohada = respected chef.",
          es: "Kohada (小鰭 - sábalo molleja): pescado tradicional Edomae, prueba de habilidad de chef. Desafíos: pequeño, huesudo, graso, se echa a perder rápidamente. Proceso: 1) Escalar cuidadosamente (escamas se incrustan). 2) Filetear (muchos huesos pequeños). 3) Sal 20-40 min (extrae humedad, firma). 4) Enjuagar, curar con vinagre 10-20 min (demasiado largo = blando, demasiado corto = a pescado). 5) Eliminar huesos diminutos con pinzas. 6) Marcar piel decorativamente (patrón zigzag). Resultado: firme, ácido, equilibrado, hermoso. Tiempo crítico - varía por tamaño, temporada, temperatura. Dominar kohada = chef respetado.",
          de: "Kohada (小鰭 - Gizzard Shad): traditioneller Edomae-Fisch, Test der Koch-Fähigkeit. Herausforderungen: klein, knochig, ölig, verdirbt schnell. Prozess: 1) Sorgfältig schuppen (Schuppen einbetten). 2) Filetieren (viele kleine Knochen). 3) Salz 20-40 Min (zieht Feuchtigkeit, festigt). 4) Spülen, Essig-Pökelung 10-20 Min (zu lang = matschig, zu kurz = fischig). 5) Winzige Knochen mit Pinzette entfernen. 6) Haut dekorativ einritzen (Zickzack-Muster). Ergebnis: fest, säuerlich, ausgewogen, schön. Timing kritisch - variiert nach Größe, Saison, Temperatur. Kohada meistern = respektierter Koch.",
          nl: "Kohada (小鰭 - gizzard shad): traditionele Edomae vis, test van chef vaardigheid. Uitdagingen: klein, botig, vet, bederft snel. Proces: 1) Schub zorgvuldig (schubben inbedden). 2) Fileer (vele kleine botten). 3) Zout 20-40 min (trekt vocht, verstevigt). 4) Spoel, azijn curen 10-20 min (te lang = papperig, te kort = vissig). 5) Verwijder kleine botjes met pincet. 6) Score vel decoratief (zigzag patroon). Resultaat: stevig, pittig, gebalanceerd, mooi. Timing kritisch - varieert per grootte, seizoen, temperatuur. Kohada beheersen = gerespecteerde chef."
        }
      },
      {
        question: {
          en: "What is 'akami-zuke' marinating tradition?",
          es: "¿Qué es la tradición de marinado 'akami-zuke'?",
          de: "Was ist 'Akami-Zuke' Marinier-Tradition?",
          nl: "Wat is 'akami-zuke' marineer traditie?"
        },
        options: [
          { en: "Marinating lean tuna in soy-mirin-sake to preserve, season, prevent oxidation - Edo-era technique still practiced, transforms lean fish", es: "Marinar atún magro en soja-mirin-sake para preservar, sazonar, prevenir oxidación - técnica de era Edo aún practicada, transforma pescado magro", de: "Marinieren von magerem Thunfisch in Soja-Mirin-Sake um zu konservieren, würzen, Oxidation verhindern - Edo-Ära-Technik noch praktiziert, transformiert mageren Fisch", nl: "Marineren van magere tonijn in soja-mirin-sake om te conserveren, kruiden, oxidatie voorkomen - Edo-tijdperk techniek nog gepraktiseerd, transformeert magere vis" },
          { en: "Raw serving only", es: "Solo servir crudo", de: "Nur roh servieren", nl: "Alleen rauw serveren" },
          { en: "Deep frying method", es: "Método de freír", de: "Frittier-Methode", nl: "Frituur methode" },
          { en: "Salt curing only", es: "Solo curado en sal", de: "Nur Salz-Pökelung", nl: "Alleen zout curen" }
        ],
        correct: 0,
        explanation: {
          en: "Akami-zuke historical context: Pre-refrigeration, lean tuna (akami) oxidized, turned brown quickly. Solution: marinate in soy-mirin-sake (zuke-joyu) 15-30 min. Benefits: seasons throughout, prevents browning, extends life, adds umami depth, mellows iron taste. Modern: unnecessary for preservation but kept for flavor. Technique variations: light (10 min), medium (20 min), deep (30+ min). Too long = overly salty/dark. Best with: chu-toro, akami. Shows evolution: necessity → artistry. High-end shops still practice traditional zuke.",
          es: "Contexto histórico de akami-zuke: Pre-refrigeración, atún magro (akami) se oxidaba, se volvía marrón rápidamente. Solución: marinar en soja-mirin-sake (zuke-joyu) 15-30 min. Beneficios: sazona completamente, previene dorado, extiende vida, añade profundidad umami, suaviza sabor a hierro. Moderno: innecesario para preservación pero mantenido por sabor. Variaciones de técnica: ligero (10 min), medio (20 min), profundo (30+ min). Demasiado largo = demasiado salado/oscuro. Mejor con: chu-toro, akami. Muestra evolución: necesidad → arte. Tiendas de alta gama aún practican zuke tradicional.",
          de: "Akami-Zuke historischer Kontext: Vor-Kühlung, magerer Thunfisch (Akami) oxidierte, wurde schnell braun. Lösung: mariniere in Soja-Mirin-Sake (Zuke-Joyu) 15-30 Min. Vorteile: würzt durchgängig, verhindert Bräunung, verlängert Leben, fügt Umami-Tiefe hinzu, mildert Eisen-Geschmack. Modern: unnötig für Konservierung aber für Geschmack beibehalten. Technik-Variationen: leicht (10 Min), mittel (20 Min), tief (30+ Min). Zu lang = übermäßig salzig/dunkel. Am besten mit: Chu-Toro, Akami. Zeigt Evolution: Notwendigkeit → Kunstfertigkeit. High-End-Läden praktizieren noch traditionelles Zuke.",
          nl: "Akami-zuke historische context: Pre-koeling, magere tonijn (akami) oxideerde, werd snel bruin. Oplossing: marineer in soja-mirin-sake (zuke-joyu) 15-30 min. Voordelen: kruidt helemaal, voorkomt bruinen, verlengt leven, voegt umami diepte toe, verzacht ijzer smaak. Modern: onnodig voor conservering maar behouden voor smaak. Techniek variaties: licht (10 min), medium (20 min), diep (30+ min). Te lang = te zout/donker. Best met: chu-toro, akami. Toont evolutie: noodzaak → kunstzinnigheid. High-end winkels praktiseren nog traditionele zuke."
        }
      },
      {
        question: {
          en: "What is 'kamasu' and its preparation challenges?",
          es: "¿Qué es 'kamasu' y sus desafíos de preparación?",
          de: "Was ist 'Kamasu' und seine Zubereitungs-Herausforderungen?",
          nl: "Wat is 'kamasu' en zijn bereidings uitdagingen?"
        },
        options: [
          { en: "Barracuda - delicate white fish prone to parasites, requires blowtorching or careful inspection, sweet when fresh, spoils quickly", es: "Barracuda - pescado blanco delicado propenso a parásitos, requiere soplete o inspección cuidadosa, dulce cuando fresco, se echa a perder rápidamente", de: "Barrakuda - zarter Weißfisch anfällig für Parasiten, erfordert Abflammen oder sorgfältige Inspektion, süß wenn frisch, verdirbt schnell", nl: "Barracuda - delicate witte vis vatbaar voor parasieten, vereist branden of zorgvuldige inspectie, zoet wanneer vers, bederft snel" },
          { en: "Shellfish only", es: "Solo mariscos", de: "Nur Schalentiere", nl: "Alleen schaaldieren" },
          { en: "Freshwater fish", es: "Pescado de agua dulce", de: "Süßwasserfisch", nl: "Zoetwatervis" },
          { en: "Tuna variety", es: "Variedad de atún", de: "Thunfisch-Varietät", nl: "Tonijn variëteit" }
        ],
        correct: 0,
        explanation: {
          en: "Kamasu (カマス - barracuda): delicate white fish, seasonal (autumn best). Challenges: 1) Parasite risk (anisakis) - requires visual inspection, freezing (-20°C/24hrs), or surface torching. 2) Spoils extremely fast - must be ultra-fresh. 3) Delicate flesh - careful handling. Preparation: often aburi (torch skin side) to kill surface parasites, add smoky flavor, crisp skin. Flavor: sweet, clean, mild when fresh. Texture: soft, tender. Less common in sushi due to challenges, but prized by knowledgeable chefs/customers. Shows food safety importance.",
          es: "Kamasu (カマス - barracuda): pescado blanco delicado, estacional (otoño mejor). Desafíos: 1) Riesgo de parásitos (anisakis) - requiere inspección visual, congelación (-20°C/24hrs) o soplete de superficie. 2) Se echa a perder extremadamente rápido - debe ser ultra-fresco. 3) Carne delicada - manejo cuidadoso. Preparación: a menudo aburi (soplete lado de piel) para matar parásitos de superficie, añadir sabor ahumado, piel crujiente. Sabor: dulce, limpio, suave cuando fresco. Textura: suave, tierna. Menos común en sushi debido a desafíos, pero valorado por chefs/clientes conocedores. Muestra importancia de seguridad alimentaria.",
          de: "Kamasu (カマス - Barrakuda): zarter Weißfisch, saisonal (Herbst am besten). Herausforderungen: 1) Parasiten-Risiko (Anisakis) - erfordert visuelle Inspektion, Einfrieren (-20°C/24Std) oder Oberflächen-Abflammen. 2) Verdirbt extrem schnell - muss ultra-frisch sein. 3) Zartheit Fleisch - sorgfältige Handhabung. Zubereitung: oft Aburi (Fackel Hautseite) um Oberflächen-Parasiten zu töten, rauchigen Geschmack hinzufügen, Haut knusprig machen. Geschmack: süß, sauber, mild wenn frisch. Textur: weich, zart. Weniger verbreitet in Sushi wegen Herausforderungen, aber von kennenden Köchen/Kunden geschätzt. Zeigt Lebensmittelsicherheit-Wichtigkeit.",
          nl: "Kamasu (カマス - barracuda): delicate witte vis, seizoensgebonden (herfst best). Uitdagingen: 1) Parasiet risico (anisakis) - vereist visuele inspectie, vriezen (-20°C/24uur) of oppervlakte branden. 2) Bederft extreem snel - moet ultra-vers zijn. 3) Delicaat vlees - zorgvuldige behandeling. Bereiding: vaak aburi (brand vel kant) om oppervlakte parasieten te doden, rokerige smaak toevoegen, vel knapperig maken. Smaak: zoet, schoon, mild wanneer vers. Textuur: zacht, zacht. Minder gebruikelijk in sushi vanwege uitdagingen, maar gewaardeerd door kundige chefs/klanten. Toont voedselveiligheid belang."
        }
      },
      {
        question: {
          en: "What is 'nori' grading and quality factors?",
          es: "¿Qué es la clasificación de 'nori' y factores de calidad?",
          de: "Was ist 'Nori' Einstufung und Qualitätsfaktoren?",
          nl: "Wat is 'nori' gradering en kwaliteit factoren?"
        },
        options: [
          { en: "Graded A-C by color (dark=best), holes (fewer=better), aroma, origin - Ariake Bay premium, used for high-end sushi", es: "Clasificado A-C por color (oscuro=mejor), agujeros (menos=mejor), aroma, origen - Bahía de Ariake premium, usado para sushi de alta gama", de: "Eingestuft A-C nach Farbe (dunkel=am besten), Löcher (weniger=besser), Aroma, Herkunft - Ariake-Bucht Premium, für High-End-Sushi verwendet", nl: "Gegraded A-C per kleur (donker=best), gaten (minder=beter), aroma, oorsprong - Ariake Baai premium, gebruikt voor high-end sushi" },
          { en: "All same quality", es: "Toda misma calidad", de: "Alle gleiche Qualität", nl: "Alle zelfde kwaliteit" },
          { en: "Price only matters", es: "Solo importa precio", de: "Nur Preis zählt", nl: "Alleen prijs telt" },
          { en: "No grading system", es: "Sin sistema de clasificación", de: "Kein Einstufungssystem", nl: "Geen graderingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Nori quality factors: COLOR: deep black-green (high chlorophyll) = premium. Pale/brown = low grade. HOLES/TEARS: fewer = better. Clean sheets prized. AROMA: ocean-fresh, not fishy/musty. ORIGIN: Ariake Bay (Kyushu) most prized - perfect salinity, nutrients. HARVEST: first harvest (shin-nori) best. TEXTURE: thin but strong, crisp when toasted. Grading: A (gold), B (silver), C (standard). High-end sushi uses only A-grade. Proper storage crucial (humidity destroys crispness). Quality directly affects sushi taste, appearance. Yakinori (toasted) vs raw.",
          es: "Factores de calidad de nori: COLOR: negro-verde profundo (alta clorofila) = premium. Pálido/marrón = bajo grado. AGUJEROS/RASGADURAS: menos = mejor. Láminas limpias preciadas. AROMA: fresco de océano, no a pescado/moho. ORIGEN: Bahía de Ariake (Kyushu) más preciada - salinidad perfecta, nutrientes. COSECHA: primera cosecha (shin-nori) mejor. TEXTURA: delgado pero fuerte, crujiente cuando tostado. Clasificación: A (oro), B (plata), C (estándar). Sushi de alta gama usa solo grado A. Almacenamiento adecuado crucial (humedad destruye frescura). Calidad afecta directamente sabor de sushi, apariencia. Yakinori (tostado) vs crudo.",
          de: "Nori-Qualitätsfaktoren: FARBE: tiefes schwarz-grün (hohes Chlorophyll) = Premium. Blass/braun = niedriger Grad. LÖCHER/RISSE: weniger = besser. Saubere Blätter geschätzt. AROMA: ozean-frisch, nicht fischig/muffig. HERKUNFT: Ariake-Bucht (Kyushu) am meisten geschätzt - perfekte Salinität, Nährstoffe. ERNTE: erste Ernte (Shin-Nori) am besten. TEXTUR: dünn aber stark, knusprig wenn geröstet. Einstufung: A (Gold), B (Silber), C (Standard). High-End-Sushi nutzt nur A-Grad. Richtige Lagerung entscheidend (Feuchtigkeit zerstört Knusprigkeit). Qualität beeinflusst direkt Sushi-Geschmack, Aussehen. Yakinori (geröstet) vs roh.",
          nl: "Nori kwaliteit factoren: KLEUR: diep zwart-groen (hoog chlorofyl) = premium. Bleek/bruin = lage graad. GATEN/SCHEUREN: minder = beter. Schone vellen gewaardeerd. AROMA: oceaan-vers, niet vissig/muf. OORSPRONG: Ariake Baai (Kyushu) meest gewaardeerd - perfecte zoutgehalte, voedingsstoffen. OOGST: eerste oogst (shin-nori) best. TEXTUUR: dun maar sterk, knapperig wanneer geroosterd. Gradering: A (goud), B (zilver), C (standaard). High-end sushi gebruikt alleen A-graad. Juiste opslag cruciaal (vochtigheid vernietigt knapperigheid). Kwaliteit beïnvloedt direct sushi smaak, uiterlijk. Yakinori (geroosterd) vs rauw."
        }
      },
      {
        question: {
          en: "What is 'wasabi' quality differences - hon-wasabi vs seiyo-wasabi?",
          es: "¿Cuáles son las diferencias de calidad de 'wasabi' - hon-wasabi vs seiyo-wasabi?",
          de: "Was sind 'Wasabi' Qualitätsunterschiede - Hon-Wasabi vs Seiyo-Wasabi?",
          nl: "Wat zijn 'wasabi' kwaliteit verschillen - hon-wasabi vs seiyo-wasabi?"
        },
        options: [
          { en: "Hon-wasabi: true Japanese wasabi root, fresh-grated, complex sweet-spicy-herbal; seiyo-wasabi: Western horseradish powder, harsh, one-dimensional - $100+ vs $5 difference", es: "Hon-wasabi: raíz de wasabi japonés verdadero, rallado fresco, complejo dulce-picante-herbal; seiyo-wasabi: polvo de rábano picante occidental, áspero, unidimensional - diferencia $100+ vs $5", de: "Hon-Wasabi: echte japanische Wasabi-Wurzel, frisch gerieben, komplex süß-scharf-kräuterig; Seiyo-Wasabi: westliches Meerrettich-Pulver, harsch, eindimensional - $100+ vs $5 Unterschied", nl: "Hon-wasabi: echte Japanse wasabi wortel, vers geraspt, complex zoet-pittig-kruidig; seiyo-wasabi: westers mierikswortel poeder, hard, eendimensionaal - $100+ vs $5 verschil" },
          { en: "Same quality", es: "Misma calidad", de: "Gleiche Qualität", nl: "Zelfde kwaliteit" },
          { en: "Only color differs", es: "Solo color difiere", de: "Nur Farbe unterscheidet sich", nl: "Alleen kleur verschilt" },
          { en: "Both synthetic", es: "Ambos sintéticos", de: "Beide synthetisch", nl: "Beide synthetisch" }
        ],
        correct: 0,
        explanation: {
          en: "Critical wasabi distinction: HON-WASABI (本山葵 - 'true wasabi'): Wasabia japonica root. Grown in mountain streams (2-3 years). Fresh-grated on sharkskin (oroshi). Flavor: complex - initial sweetness, delayed heat, herbal/floral notes, clears sinuses not tongue. Expensive ($100-150/lb, $200+ for premium). SEIYO-WASABI (西洋山葵 - 'Western wasabi'): Horseradish powder + mustard + green dye. Harsh, instant burn, one-note. Cheap. Most restaurants use this. Hon-wasabi loses potency 15 min after grating - must be fresh. High-end sushi only uses hon-wasabi.",
          es: "Distinción crítica de wasabi: HON-WASABI (本山葵 - 'wasabi verdadero'): raíz de Wasabia japonica. Cultivado en arroyos de montaña (2-3 años). Rallado fresco en piel de tiburón (oroshi). Sabor: complejo - dulzura inicial, calor retardado, notas herbales/florales, despeja senos nasales no lengua. Caro ($100-150/lb, $200+ para premium). SEIYO-WASABI (西洋山葵 - 'wasabi occidental'): polvo de rábano picante + mostaza + colorante verde. Áspero, ardor instantáneo, una nota. Barato. Mayoría de restaurantes usa esto. Hon-wasabi pierde potencia 15 min después de rallar - debe ser fresco. Sushi de alta gama solo usa hon-wasabi.",
          de: "Kritischer Wasabi-Unterschied: HON-WASABI (本山葵 - 'echtes Wasabi'): Wasabia japonica Wurzel. In Gebirgsbächen gezüchtet (2-3 Jahre). Frisch gerieben auf Haifischhaut (Oroshi). Geschmack: komplex - anfängliche Süße, verzögerte Hitze, kräuterige/blumige Noten, reinigt Nebenhöhlen nicht Zunge. Teuer ($100-150/Pfund, $200+ für Premium). SEIYO-WASABI (西洋山葵 - 'westliches Wasabi'): Meerrettich-Pulver + Senf + grüner Farbstoff. Harsch, sofortiges Brennen, Ein-Ton. Billig. Meiste Restaurants nutzen dies. Hon-Wasabi verliert Potenz 15 Min nach Reiben - muss frisch sein. High-End-Sushi nutzt nur Hon-Wasabi.",
          nl: "Kritisch wasabi onderscheid: HON-WASABI (本山葵 - 'echt wasabi'): Wasabia japonica wortel. Gekweekt in berg stromen (2-3 jaar). Vers geraspt op haaienhuid (oroshi). Smaak: complex - initiële zoetheid, vertraagde hitte, kruidige/bloemen noten, reinigt neuzen niet tong. Duur ($100-150/pond, $200+ voor premium). SEIYO-WASABI (西洋山葵 - 'westers wasabi'): Mierikswortel poeder + mosterd + groene kleurstof. Hard, directe brand, één noot. Goedkoop. Meeste restaurants gebruiken dit. Hon-wasabi verliest kracht 15 min na raspen - moet vers zijn. High-end sushi gebruikt alleen hon-wasabi."
        }
      },
      {
        question: {
          en: "What is 'gari' (pickled ginger) purpose and proper use?",
          es: "¿Cuál es el propósito y uso adecuado de 'gari' (jengibre encurtido)?",
          de: "Was ist 'Gari' (eingelegter Ingwer) Zweck und richtige Verwendung?",
          nl: "Wat is 'gari' (ingemaakte gember) doel en juist gebruik?"
        },
        options: [
          { en: "Palate cleanser between different fish types, aids digestion, has antimicrobial properties - eaten between bites, NOT mixed with sushi", es: "Limpiador de paladar entre diferentes tipos de pescado, ayuda digestión, tiene propiedades antimicrobianas - comido entre bocados, NO mezclado con sushi", de: "Gaumen-Reiniger zwischen verschiedenen Fisch-Arten, hilft Verdauung, hat antimikrobielle Eigenschaften - zwischen Bissen gegessen, NICHT mit Sushi gemischt", nl: "Gehemelte reiniger tussen verschillende vis types, helpt vertering, heeft antimicrobiële eigenschappen - gegeten tussen happen, NIET gemengd met sushi" },
          { en: "Garnish only", es: "Solo guarnición", de: "Nur Garnierung", nl: "Alleen garnering" },
          { en: "Mix with soy sauce", es: "Mezclar con salsa de soja", de: "Mit Sojasauce mischen", nl: "Mix met sojasaus" },
          { en: "Put on every piece", es: "Poner en cada pieza", de: "Auf jedes Stück legen", nl: "Plaats op elk stuk" }
        ],
        correct: 0,
        explanation: {
          en: "Gari (ガリ - pickled ginger) functions: 1) PALATE CLEANSER: eat between different fish types (not every piece) to reset taste. Especially between strong→delicate or oily→lean. 2) DIGESTIVE AID: ginger aids digestion, settles stomach. 3) ANTIMICROBIAL: natural antibacterial (important pre-refrigeration). Color: young ginger = pink (natural), older = beige (may be dyed pink). PROPER USE: pick up with fingers/chopsticks, eat small amount between fish. IMPROPER: placing gari on sushi, mixing with wasabi/soy. Shows sushi etiquette knowledge.",
          es: "Funciones de gari (ガリ - jengibre encurtido): 1) LIMPIADOR DE PALADAR: comer entre diferentes tipos de pescado (no cada pieza) para resetear sabor. Especialmente entre fuerte→delicado o graso→magro. 2) AYUDA DIGESTIVA: jengibre ayuda digestión, asienta estómago. 3) ANTIMICROBIANO: antibacteriano natural (importante pre-refrigeración). Color: jengibre joven = rosa (natural), mayor = beige (puede ser teñido rosa). USO ADECUADO: tomar con dedos/palillos, comer pequeña cantidad entre pescado. USO INADECUADO: colocar gari en sushi, mezclar con wasabi/soja. Muestra conocimiento de etiqueta de sushi.",
          de: "Gari (ガリ - eingelegter Ingwer) Funktionen: 1) GAUMEN-REINIGER: zwischen verschiedenen Fisch-Arten essen (nicht jedes Stück) um Geschmack zurückzusetzen. Besonders zwischen stark→zart oder ölig→mager. 2) VERDAUUNGSHILFE: Ingwer hilft Verdauung, beruhigt Magen. 3) ANTIMIKROBIELL: natürliches Antibakteriell (wichtig vor Kühlung). Farbe: junger Ingwer = rosa (natürlich), älterer = beige (kann rosa gefärbt sein). RICHTIGE VERWENDUNG: mit Fingern/Stäbchen aufnehmen, kleine Menge zwischen Fisch essen. FALSCHE VERWENDUNG: Gari auf Sushi legen, mit Wasabi/Soja mischen. Zeigt Sushi-Etikette-Wissen.",
          nl: "Gari (ガリ - ingemaakte gember) functies: 1) GEHEMELTE REINIGER: eet tussen verschillende vis types (niet elk stuk) om smaak te resetten. Vooral tussen sterk→delicaat of vet→mager. 2) VERTERINGSHELP: gember helpt vertering, kalmeert maag. 3) ANTIMICROBIEEL: natuurlijk antibacterieel (belangrijk pre-koeling). Kleur: jonge gember = roze (natuurlijk), ouder = beige (kan roze geverfd zijn). JUIST GEBRUIK: pak met vingers/eetstokjes, eet kleine hoeveelheid tussen vis. VERKEERD GEBRUIK: gari op sushi plaatsen, mengen met wasabi/soja. Toont sushi etiquette kennis."
        }
      },
      {
        question: {
          en: "What is 'mebachi' versus 'kihada' versus 'binnaga' tuna?",
          es: "¿Qué es atún 'mebachi' versus 'kihada' versus 'binnaga'?",
          de: "Was ist 'Mebachi' versus 'Kihada' versus 'Binnaga' Thunfisch?",
          nl: "Wat is 'mebachi' versus 'kihada' versus 'binnaga' tonijn?"
        },
        options: [
          { en: "Mebachi: bigeye tuna (deep red, fatty); kihada: yellowfin (bright red, lean); binnaga: albacore (pale, mild) - different species, colors, fat content, prices", es: "Mebachi: atún ojo grande (rojo profundo, graso); kihada: aleta amarilla (rojo brillante, magro); binnaga: albacora (pálido, suave) - diferentes especies, colores, contenido de grasa, precios", de: "Mebachi: Großaugen-Thunfisch (tiefrot, fettig); Kihada: Gelbflossen (hellrot, mager); Binnaga: Weißer Thun (blass, mild) - verschiedene Arten, Farben, Fettgehalt, Preise", nl: "Mebachi: grootoog tonijn (diep rood, vet); kihada: geelvin (helder rood, mager); binnaga: witte tonijn (bleek, mild) - verschillende soorten, kleuren, vetgehalte, prijzen" },
          { en: "Same fish, different ages", es: "Mismo pescado, diferentes edades", de: "Gleicher Fisch, verschiedene Alter", nl: "Zelfde vis, verschillende leeftijden" },
          { en: "All bluefin tuna", es: "Todo atún aleta azul", de: "Alles Blauflossen-Thunfisch", nl: "Alle blauwvin tonijn" },
          { en: "Cooking methods", es: "Métodos de cocción", de: "Kochmethoden", nl: "Kookmethoden" }
        ],
        correct: 0,
        explanation: {
          en: "Tuna species comparison: MEBACHI (メバチ - bigeye tuna): deep red, fatty (though less than bluefin), rich flavor. Mid-high price. Good sashimi quality. KIHADA (キハダ - yellowfin tuna): bright cherry-red, very lean, clean flavor. Less expensive. Popular for poke, sashimi. Lighter taste. BINNAGA (ビンナガ - albacore/tombo): pale pink/white, very mild, lean. Cheapest tuna. Often used for canned 'white tuna.' Sushi: less common, lighter. Best: Bluefin (hon-maguro) > Bigeye > Yellowfin > Albacore. Color, fat, flavor intensity descend.",
          es: "Comparación de especies de atún: MEBACHI (メバチ - atún ojo grande): rojo profundo, graso (aunque menos que aleta azul), sabor rico. Precio medio-alto. Buena calidad sashimi. KIHADA (キハダ - atún aleta amarilla): rojo cereza brillante, muy magro, sabor limpio. Menos caro. Popular para poke, sashimi. Sabor más ligero. BINNAGA (ビンナガ - albacora/tombo): rosa pálido/blanco, muy suave, magro. Atún más barato. A menudo usado para atún blanco enlatado. Sushi: menos común, más ligero. Mejor: Atún aleta azul (hon-maguro) > Ojo grande > Aleta amarilla > Albacora. Color, grasa, intensidad de sabor descienden.",
          de: "Thunfisch-Arten-Vergleich: MEBACHI (メバチ - Großaugen-Thunfisch): tiefrot, fettig (obwohl weniger als Blauflossen), reicher Geschmack. Mittel-hoher Preis. Gute Sashimi-Qualität. KIHADA (キハダ - Gelbflossen-Thunfisch): leuchtend kirschrot, sehr mager, sauberer Geschmack. Weniger teuer. Beliebt für Poke, Sashimi. Leichterer Geschmack. BINNAGA (ビンナガ - Weißer Thun/Tombo): blassrosa/weiß, sehr mild, mager. Billigster Thunfisch. Oft für Dosen 'weißer Thunfisch' verwendet. Sushi: weniger verbreitet, heller. Am besten: Blauflossen (Hon-Maguro) > Großaugen > Gelbflossen > Weißer Thun. Farbe, Fett, Geschmacksintensität absteigend.",
          nl: "Tonijn soorten vergelijking: MEBACHI (メバチ - grootoog tonijn): diep rood, vet (hoewel minder dan blauwvin), rijke smaak. Middel-hoge prijs. Goede sashimi kwaliteit. KIHADA (キハダ - geelvin tonijn): helder kersen-rood, zeer mager, schone smaak. Minder duur. Populair voor poke, sashimi. Lichtere smaak. BINNAGA (ビンナガ - witte tonijn/tombo): bleek roze/wit, zeer mild, mager. Goedkoopste tonijn. Vaak gebruikt voor ingeblikte 'witte tonijn.' Sushi: minder gebruikelijk, lichter. Best: Blauwvin (hon-maguro) > Grootoog > Geelvin > Witte tonijn. Kleur, vet, smaak intensiteit dalend."
        }
      },
      {
        question: {
          en: "What is 'oboro' and its traditional use?",
          es: "¿Qué es 'oboro' y su uso tradicional?",
          de: "Was ist 'Oboro' und seine traditionelle Verwendung?",
          nl: "Wat is 'oboro' en zijn traditionele gebruik?"
        },
        options: [
          { en: "Sweet pink fish floss from white fish, cooked with sugar-mirin, used in chirashi, oshi-zushi, decorative topping - traditional Edo-mae ingredient", es: "Hilo dulce rosa de pescado de pescado blanco, cocido con azúcar-mirin, usado en chirashi, oshi-zushi, cobertura decorativa - ingrediente tradicional Edo-mae", de: "Süßer rosa Fisch-Floss aus Weißfisch, gekocht mit Zucker-Mirin, in Chirashi, Oshi-Zushi verwendet, dekorativer Belag - traditionelle Edo-Mae-Zutat", nl: "Zoete roze vis draad van witte vis, gekookt met suiker-mirin, gebruikt in chirashi, oshi-zushi, decoratieve topping - traditionele Edo-mae ingrediënt" },
          { en: "Rice seasoning", es: "Condimento de arroz", de: "Reis-Würzung", nl: "Rijst kruiding" },
          { en: "Soy sauce type", es: "Tipo de salsa de soja", de: "Sojasauce-Art", nl: "Sojasaus type" },
          { en: "Fish cutting style", es: "Estilo de corte de pescado", de: "Fisch-Schneidestil", nl: "Vis snij stijl" }
        ],
        correct: 0,
        explanation: {
          en: "Oboro (おぼろ - 'hazy/fluffy'): traditional Edo-mae ingredient. Made from: white fish (tai, cod) poached, flaked, cooked with sugar, mirin, salt, food coloring (pink). Result: sweet, fluffy, cotton-candy-like fish floss. Uses: 1) Chirashi-zushi topping (scattered sushi). 2) Oshi-zushi (pressed sushi) layer. 3) Decorative element. 4) Inari-zushi filling. Less common modern sushi bars (labor-intensive, sweet profile not trendy). Traditional shops still make fresh. Shows Edo-era creativity with preserved fish.",
          es: "Oboro (おぼろ - 'nebuloso/esponjoso'): ingrediente tradicional Edo-mae. Hecho de: pescado blanco (tai, bacalao) escalfado, desmenuzado, cocido con azúcar, mirin, sal, colorante alimentario (rosa). Resultado: hilo de pescado dulce, esponjoso, como algodón de azúcar. Usos: 1) Cobertura de chirashi-zushi (sushi esparcido). 2) Capa de oshi-zushi (sushi prensado). 3) Elemento decorativo. 4) Relleno de inari-zushi. Menos común en bares de sushi modernos (laborioso, perfil dulce no de moda). Tiendas tradicionales aún hacen fresco. Muestra creatividad de era Edo con pescado preservado.",
          de: "Oboro (おぼろ - 'dunstig/flauschig'): traditionelle Edo-Mae-Zutat. Hergestellt aus: Weißfisch (Tai, Kabeljau) pochiert, geflakt, mit Zucker, Mirin, Salz, Lebensmittelfarbe (rosa) gekocht. Ergebnis: süßer, flauschiger, zuckerwatte-ähnlicher Fisch-Floss. Verwendung: 1) Chirashi-Zushi-Belag (verstreutes Sushi). 2) Oshi-Zushi (gepresstes Sushi) Schicht. 3) Dekoratives Element. 4) Inari-Zushi-Füllung. Weniger verbreitet moderne Sushi-Bars (arbeitsintensiv, süßes Profil nicht trendy). Traditionelle Läden machen noch frisch. Zeigt Edo-Ära-Kreativität mit konserviertem Fisch.",
          nl: "Oboro (おぼろ - 'wazig/pluizig'): traditionele Edo-mae ingrediënt. Gemaakt van: witte vis (tai, kabeljauw) gepocheerd, geflakt, gekookt met suiker, mirin, zout, voedselkleuring (roze). Resultaat: zoete, pluizige, suikerspin-achtige vis draad. Gebruik: 1) Chirashi-zushi topping (verspreid sushi). 2) Oshi-zushi (geperst sushi) laag. 3) Decoratief element. 4) Inari-zushi vulling. Minder gebruikelijk moderne sushi bars (arbeidsintensief, zoet profiel niet trendy). Traditionele winkels maken nog vers. Toont Edo-tijdperk creativiteit met geconserveerde vis."
        }
      },
      {
        question: {
          en: "What is 'nama-gaki' versus 'kaki-furai' oyster preparations?",
          es: "¿Qué son las preparaciones de ostras 'nama-gaki' versus 'kaki-furai'?",
          de: "Was sind 'Nama-Gaki' versus 'Kaki-Furai' Austern-Zubereitungen?",
          nl: "Wat zijn 'nama-gaki' versus 'kaki-furai' oester bereidingen?"
        },
        options: [
          { en: "Nama-gaki: raw oysters showcasing terroir/merroir; kaki-furai: panko-breaded deep-fried oysters, crispy outside, creamy inside - raw vs cooked contrast", es: "Nama-gaki: ostras crudas mostrando terroir/merroir; kaki-furai: ostras fritas empanizadas con panko, crujientes fuera, cremosas dentro - contraste crudo vs cocido", de: "Nama-Gaki: rohe Austern zeigen Terroir/Merroir; Kaki-Furai: Panko-panierte frittierte Austern, knusprig außen, cremig innen - roh vs gekocht Kontrast", nl: "Nama-gaki: rauwe oesters tonen terroir/merroir; kaki-furai: panko-gepaneerde gefrituurde oesters, knapperig buiten, romig binnen - rauw vs gekookt contrast" },
          { en: "Same preparation", es: "Misma preparación", de: "Gleiche Zubereitung", nl: "Zelfde bereiding" },
          { en: "Both raw", es: "Ambos crudos", de: "Beide roh", nl: "Beide rauw" },
          { en: "Both cooked", es: "Ambos cocidos", de: "Beide gekocht", nl: "Beide gekookt" }
        ],
        correct: 0,
        explanation: {
          en: "Oyster preparation contrast: NAMA-GAKI (生牡蠣 - 'raw oysters'): shucked fresh, served on half-shell with ponzu or lemon. Showcases oyster's natural flavor - briny, sweet, mineral notes vary by origin (Hiroshima, Miyagi famous). Merroir (like terroir for sea). Eaten raw from shell. KAKI-FURAI (牡蠣フライ - 'fried oysters'): oysters breaded in panko, deep-fried until golden. Texture: crispy exterior, creamy hot interior. Served with tonkatsu sauce, lemon. Popular winter dish. Shows oyster versatility - raw highlights delicate flavor, fried creates comfort food.",
          es: "Contraste de preparación de ostras: NAMA-GAKI (生牡蠣 - 'ostras crudas'): abiertas frescas, servidas en media concha con ponzu o limón. Muestra sabor natural de ostra - notas salinas, dulces, minerales varían por origen (Hiroshima, Miyagi famosas). Merroir (como terroir para mar). Comidas crudas de concha. KAKI-FURAI (牡蠣フライ - 'ostras fritas'): ostras empanizadas en panko, fritas hasta doradas. Textura: exterior crujiente, interior cremoso caliente. Servido con salsa tonkatsu, limón. Plato popular de invierno. Muestra versatilidad de ostra - crudo resalta sabor delicado, frito crea comida reconfortante.",
          de: "Austern-Zubereitungs-Kontrast: NAMA-GAKI (生牡蠣 - 'rohe Austern'): frisch geschält, auf halber Schale mit Ponzu oder Zitrone serviert. Zeigt natürlichen Austern-Geschmack - salzige, süße, mineralische Noten variieren nach Herkunft (Hiroshima, Miyagi berühmt). Merroir (wie Terroir für Meer). Roh aus Schale gegessen. KAKI-FURAI (牡蠣フライ - 'frittierte Austern'): Austern in Panko paniert, frittiert bis golden. Textur: knuspriges Äußeres, cremiges heißes Inneres. Mit Tonkatsu-Sauce, Zitrone serviert. Beliebtes Winter-Gericht. Zeigt Austern-Vielseitigkeit - roh hebt zarten Geschmack hervor, frittiert schafft Wohlfühl-Essen.",
          nl: "Oester bereiding contrast: NAMA-GAKI (生牡蠣 - 'rauwe oesters'): vers geopend, geserveerd op halve schelp met ponzu of citroen. Toont oester's natuurlijke smaak - zilte, zoete, mineraal noten variëren per oorsprong (Hiroshima, Miyagi beroemd). Merroir (zoals terroir voor zee). Rauw gegeten van schelp. KAKI-FURAI (牡蠣フライ - 'gefrituurde oesters'): oesters gepaneerd in panko, gefrituurd tot goudkleurig. Textuur: knapperig buitenkant, romig warm binnenkant. Geserveerd met tonkatsu saus, citroen. Populair winter gerecht. Toont oester veelzijdigheid - rauw benadrukt delicate smaak, gefrituurd creëert comfort food."
        }
      },
      {
        question: {
          en: "What is 'tekkamaki' origin and cultural significance?",
          es: "¿Cuál es el origen y significado cultural de 'tekkamaki'?",
          de: "Was ist 'Tekkamaki' Ursprung und kulturelle Bedeutung?",
          nl: "Wat is 'tekkamaki' oorsprong en culturele betekenis?"
        },
        options: [
          { en: "Tuna roll named after gambling houses ('tekka-ba') where served to keep hands clean while playing - simple, iconic, tests rice-to-fish ratio mastery", es: "Rollo de atún nombrado por casas de juego ('tekka-ba') donde se servía para mantener manos limpias mientras jugaban - simple, icónico, prueba dominio de proporción arroz-pescado", de: "Thunfisch-Rolle benannt nach Spielhäusern ('Tekka-Ba') wo serviert um Hände sauber zu halten während Spielen - einfach, ikonisch, testet Reis-zu-Fisch-Verhältnis-Meisterschaft", nl: "Tonijn rol genoemd naar gokhuizen ('tekka-ba') waar geserveerd om handen schoon te houden tijdens spelen - simpel, iconisch, test rijst-tot-vis ratio meesterschap" },
          { en: "Modern invention", es: "Invención moderna", de: "Moderne Erfindung", nl: "Moderne uitvinding" },
          { en: "Western creation", es: "Creación occidental", de: "Westliche Schöpfung", nl: "Westerse creatie" },
          { en: "Chinese origin", es: "Origen chino", de: "Chinesischer Ursprung", nl: "Chinese oorsprong" }
        ],
        correct: 0,
        explanation: {
          en: "Tekkamaki (鉄火巻き) etymology and history: ORIGIN: 'Tekka' = gambling house/iron fire (red-hot iron color like tuna). Created for tekka-ba (gambling dens) - customers could eat one-handed without getting cards dirty. Simple: tuna, rice, nori roll. SIGNIFICANCE: iconic, essential sushi. Tests chef's fundamentals: rice seasoning, rolling technique, fish quality, ratio balance. Deceptively simple. VARIATIONS: negitoro-maki (chopped fatty tuna + scallion), similar concept. Shows sushi's practical origins - not originally haute cuisine, but street/gambling food. Evolution to art form.",
          es: "Etimología e historia de tekkamaki (鉄火巻き): ORIGEN: 'Tekka' = casa de juego/fuego de hierro (color hierro al rojo vivo como atún). Creado para tekka-ba (antros de juego) - clientes podían comer con una mano sin ensuciar cartas. Simple: atún, arroz, rollo de nori. SIGNIFICADO: icónico, sushi esencial. Prueba fundamentos del chef: condimento de arroz, técnica de enrollado, calidad de pescado, equilibrio de proporción. Engañosamente simple. VARIACIONES: negitoro-maki (atún graso picado + cebolla verde), concepto similar. Muestra orígenes prácticos de sushi - no originalmente alta cocina, sino comida de calle/juego. Evolución a forma de arte.",
          de: "Tekkamaki (鉄火巻き) Etymologie und Geschichte: URSPRUNG: 'Tekka' = Spielhaus/Eisenfeuer (rotglühende Eisen-Farbe wie Thunfisch). Für Tekka-Ba (Spielhöllen) geschaffen - Kunden konnten einhändig essen ohne Karten schmutzig zu machen. Einfach: Thunfisch, Reis, Nori-Rolle. BEDEUTUNG: ikonisch, wesentliches Sushi. Testet Kochs Grundlagen: Reis-Würzung, Roll-Technik, Fisch-Qualität, Verhältnis-Balance. Täuschend einfach. VARIATIONEN: Negitoro-Maki (gehackter fetter Thunfisch + Frühlingszwiebel), ähnliches Konzept. Zeigt Sushis praktische Ursprünge - nicht ursprünglich Haute Cuisine, sondern Straßen-/Spiel-Essen. Evolution zur Kunstform.",
          nl: "Tekkamaki (鉄火巻き) etymologie en geschiedenis: OORSPRONG: 'Tekka' = gokhuis/ijzer vuur (roodgloeiend ijzer kleur zoals tonijn). Gecreëerd voor tekka-ba (gok holen) - klanten konden met één hand eten zonder kaarten vuil te maken. Simpel: tonijn, rijst, nori rol. BETEKENIS: iconisch, essentieel sushi. Test chef's fundamentals: rijst kruiding, rol techniek, vis kwaliteit, ratio balans. Bedrieglijk simpel. VARIATIES: negitoro-maki (gehakte vette tonijn + lente-ui), vergelijkbaar concept. Toont sushi's praktische oorsprong - niet oorspronkelijk haute cuisine, maar straat/gok eten. Evolutie tot kunstvorm."
        }
      },
      {
        question: {
          en: "What is 'sayori' and its preparation challenges?",
          es: "¿Qué es 'sayori' y sus desafíos de preparación?",
          de: "Was ist 'Sayori' und seine Zubereitungs-Herausforderungen?",
          nl: "Wat is 'sayori' en zijn bereidings uitdagingen?"
        },
        options: [
          { en: "Halfbeak fish with long lower jaw - delicate, translucent flesh, difficult filleting due to thin body, served with silver skin showing, spring seasonal fish", es: "Pez halfbeak con mandíbula inferior larga - carne delicada y translúcida, fileteado difícil debido a cuerpo delgado, servido con piel plateada visible, pescado estacional de primavera", de: "Halbschnäbler-Fisch mit langer Unterkiefer - zartheit, durchscheinendes Fleisch, schwierige Filetierung wegen dünnem Körper, mit silberner Haut serviert, Frühlings-Saisonfisch", nl: "Halfbek vis met lange onderkaak - delicaat, doorschijnend vlees, moeilijk fileren vanwege dun lichaam, geserveerd met zilver vel zichtbaar, lente seizoens vis" },
          { en: "Shellfish type", es: "Tipo de mariscos", de: "Schalentier-Art", nl: "Schaaldier type" },
          { en: "Seaweed variety", es: "Variedad de alga", de: "Algen-Varietät", nl: "Zeewier variëteit" },
          { en: "Squid family", es: "Familia de calamar", de: "Kalmar-Familie", nl: "Inktvis familie" }
        ],
        correct: 0,
        explanation: {
          en: "Sayori (サヨリ - halfbeak/needlefish): elegant spring seasonal fish. Characteristics: long thin body (12-14 inches), extended lower jaw, silver skin, translucent flesh. Challenges: 1) Extremely delicate - tears easily. 2) Thin body makes filleting difficult (requires skill). 3) Many small bones. 4) Silver skin left on (decorative, edible). Preparation: three-piece fillet, remove bones, score flesh slightly. Presentation: often tied in knot or curved for visual appeal. Flavor: clean, delicate, sweet, mild. Prized for: elegance, skill display, seasonal celebration. Spring delicacy.",
          es: "Sayori (サヨリ - halfbeak/pez aguja): elegante pez estacional de primavera. Características: cuerpo largo y delgado (12-14 pulgadas), mandíbula inferior extendida, piel plateada, carne translúcida. Desafíos: 1) Extremadamente delicado - se rasga fácilmente. 2) Cuerpo delgado hace fileteado difícil (requiere habilidad). 3) Muchos huesos pequeños. 4) Piel plateada dejada (decorativa, comestible). Preparación: filete de tres piezas, eliminar huesos, marcar carne ligeramente. Presentación: a menudo atado en nudo o curvado para atractivo visual. Sabor: limpio, delicado, dulce, suave. Preciado por: elegancia, exhibición de habilidad, celebración estacional. Delicia de primavera.",
          de: "Sayori (サヨリ - Halbschnäbler/Nadelfisch): eleganter Frühlings-Saisonfisch. Eigenschaften: langer dünner Körper (30-36cm), verlängerter Unterkiefer, silberne Haut, durchscheinendes Fleisch. Herausforderungen: 1) Extrem zart - reißt leicht. 2) Dünner Körper macht Filetierung schwierig (erfordert Können). 3) Viele kleine Knochen. 4) Silberne Haut bleibt (dekorativ, essbar). Zubereitung: Drei-Stück-Filet, entferne Knochen, ritze Fleisch leicht ein. Präsentation: oft in Knoten gebunden oder gekrümmt für visuelle Anziehung. Geschmack: sauber, zart, süß, mild. Geschätzt für: Eleganz, Können-Darstellung, saisonale Feier. Frühlings-Delikatesse.",
          nl: "Sayori (サヨリ - halfbek/naaldvis): elegante lente seizoens vis. Kenmerken: lang dun lichaam (30-36cm), verlengde onderkaak, zilver vel, doorschijnend vlees. Uitdagingen: 1) Extreem delicaat - scheurt gemakkelijk. 2) Dun lichaam maakt fileren moeilijk (vereist vaardigheid). 3) Vele kleine botten. 4) Zilver vel blijft (decoratief, eetbaar). Bereiding: drie-stuk filet, verwijder botten, score vlees licht. Presentatie: vaak gebonden in knoop of gekromd voor visuele aantrekkelijkheid. Smaak: schoon, delicaat, zoet, mild. Gewaardeerd voor: elegantie, vaardigheid display, seizoens viering. Lente delicatesse."
        }
      },
      {
        question: {
          en: "What is 'ankimo' preparation and why is it called 'foie gras of the sea'?",
          es: "¿Qué es la preparación de 'ankimo' y por qué se llama 'foie gras del mar'?",
          de: "Was ist 'Ankimo' Zubereitung und warum heißt es 'Foie Gras des Meeres'?",
          nl: "Wat is 'ankimo' bereiding en waarom wordt het 'foie gras van de zee' genoemd?"
        },
        options: [
          { en: "Monkfish liver steamed in sake, chilled, sliced - incredibly creamy, buttery, rich texture like foie gras, served with ponzu and condiments", es: "Hígado de rape al vapor en sake, enfriado, rebanado - increíblemente cremoso, mantecoso, textura rica como foie gras, servido con ponzu y condimentos", de: "Seeteufel-Leber in Sake gedämpft, gekühlt, geschnitten - unglaublich cremig, buttrig, reiche Textur wie Foie Gras, mit Ponzu und Würzmitteln serviert", nl: "Zeeduivel lever gestoomd in sake, gekoeld, gesneden - ongelooflijk romig, boterachtig, rijke textuur zoals foie gras, geserveerd met ponzu en condimenten" },
          { en: "Fish muscle", es: "Músculo de pescado", de: "Fischmuskel", nl: "Vis spier" },
          { en: "Fish eggs", es: "Huevas de pescado", de: "Fischeier", nl: "Viseieren" },
          { en: "Fish bones", es: "Huesos de pescado", de: "Fischknochen", nl: "Visbotten" }
        ],
        correct: 0,
        explanation: {
          en: "Ankimo (鮟肝 - monkfish liver) preparation: Remove veins/blood from fresh liver, salt lightly, marinate in sake 30 min. Roll tightly in cheesecloth, secure both ends. Steam 20-30 min until firm. Cool completely, refrigerate. Slice 1/2-inch thick. Serve cold with: ponzu, grated daikon, scallions, momiji oroshi (chili daikon). Why 'foie gras of sea': texture incredibly smooth, creamy, buttery, rich, melts in mouth. Flavor: delicate, ocean-clean, umami-rich. Luxury item. Winter delicacy. Shows Japanese appreciation for offal.",
          es: "Preparación de ankimo (鮟肝 - hígado de rape): Eliminar venas/sangre de hígado fresco, salar ligeramente, marinar en sake 30 min. Enrollar firmemente en estopilla, asegurar ambos extremos. Vapor 20-30 min hasta firme. Enfriar completamente, refrigerar. Rebanar 1/2 pulgada de grosor. Servir frío con: ponzu, daikon rallado, cebollas verdes, momiji oroshi (daikon con chile). Por qué 'foie gras del mar': textura increíblemente suave, cremosa, mantecosa, rica, se derrite en boca. Sabor: delicado, limpio de océano, rico en umami. Artículo de lujo. Delicia de invierno. Muestra aprecio japonés por vísceras.",
          de: "Ankimo (鮟肝 - Seeteufel-Leber) Zubereitung: Entferne Venen/Blut aus frischer Leber, salze leicht, mariniere in Sake 30 Min. Rolle fest in Käsetuch, sichere beide Enden. Dämpfe 20-30 Min bis fest. Kühle vollständig, kühle. Schneide 1,2cm dick. Serviere kalt mit: Ponzu, geriebenem Daikon, Frühlingszwiebeln, Momiji Oroshi (Chili-Daikon). Warum 'Foie Gras des Meeres': Textur unglaublich glatt, cremig, buttrig, reich, schmilzt im Mund. Geschmack: zart, ozean-sauber, umami-reich. Luxusartikel. Winter-Delikatesse. Zeigt japanische Wertschätzung für Innereien.",
          nl: "Ankimo (鮟肝 - zeeduivel lever) bereiding: Verwijder aderen/bloed van verse lever, zout licht, marineer in sake 30 min. Rol stevig in kaasdoek, beveilig beide uiteinden. Stoom 20-30 min tot stevig. Koel volledig, koel. Snijd 1,2cm dik. Serveer koud met: ponzu, geraspte daikon, lente-uien, momiji oroshi (chili daikon). Waarom 'foie gras van zee': textuur ongelooflijk glad, romig, boterachtig, rijk, smelt in mond. Smaak: delicaat, oceaan-schoon, umami-rijk. Luxe artikel. Winter delicatesse. Toont Japanse waardering voor orgaanvlees."
        }
      },
      {
        question: {
          en: "What is 'shari' (sushi rice) ideal temperature and why?",
          es: "¿Cuál es la temperatura ideal de 'shari' (arroz de sushi) y por qué?",
          de: "Was ist 'Shari' (Sushi-Reis) ideale Temperatur und warum?",
          nl: "Wat is 'shari' (sushi rijst) ideale temperatuur en waarom?"
        },
        options: [
          { en: "Body temperature (98.6°F/37°C) - matches mouth temp, enhances flavor release, prevents masking fish taste with cold rice", es: "Temperatura corporal (98.6°F/37°C) - coincide con temperatura de boca, mejora liberación de sabor, previene enmascarar sabor de pescado con arroz frío", de: "Körpertemperatur (37°C) - passt zu Mundtemperatur, verbessert Geschmacksfreisetzung, verhindert Maskierung des Fischgeschmacks mit kaltem Reis", nl: "Lichaamstemperatuur (37°C) - past bij mond temp, verbetert smaak vrijgave, voorkomt maskeren vis smaak met koude rijst" },
          { en: "Cold from refrigerator", es: "Frío de refrigerador", de: "Kalt aus Kühlschrank", nl: "Koud uit koelkast" },
          { en: "Hot from cooker", es: "Caliente de olla arrocera", de: "Heiß aus Kocher", nl: "Warm van rijstkoker" },
          { en: "Room temperature", es: "Temperatura ambiente", de: "Raumtemperatur", nl: "Kamertemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Shari temperature science: Traditional Edomae: body temperature (hadahada - skin-touching warmth, ~98°F/37°C). Why critical: 1) Matches mouth temperature - seamless eating experience. 2) Warm rice releases aromatics, vinegar notes better. 3) Cold rice hardens, masks flavors, dominates fish. 4) Too hot cooks fish, uncomfortable. 5) Proper temp allows rice to melt slightly on tongue. High-end shops use hangiri (wooden tub) to maintain temp, paddle constantly. Never refrigerate sushi rice. Test: touch rice to wrist - should feel neutral (body temp). Shows attention to detail.",
          es: "Ciencia de temperatura de shari: Edomae tradicional: temperatura corporal (hadahada - calor de tocar piel, ~98°F/37°C). Por qué crítico: 1) Coincide con temperatura de boca - experiencia de comer sin costuras. 2) Arroz tibio libera aromáticos, notas de vinagre mejor. 3) Arroz frío se endurece, enmascara sabores, domina pescado. 4) Demasiado caliente cocina pescado, incómodo. 5) Temperatura adecuada permite que arroz se derrita ligeramente en lengua. Tiendas de alta gama usan hangiri (tina de madera) para mantener temperatura, paleta constantemente. Nunca refrigerar arroz de sushi. Prueba: tocar arroz a muñeca - debe sentirse neutral (temperatura corporal). Muestra atención al detalle.",
          de: "Shari-Temperatur-Wissenschaft: Traditionelles Edomae: Körpertemperatur (Hadahada - Haut-berührende Wärme, ~37°C). Warum kritisch: 1) Passt zu Mundtemperatur - nahtloses Ess-Erlebnis. 2) Warmer Reis setzt Aromen, Essignoten besser frei. 3) Kalter Reis härtet, maskiert Aromen, dominiert Fisch. 4) Zu heiß kocht Fisch, unbequem. 5) Richtige Temp erlaubt Reis leicht auf Zunge zu schmelzen. High-End-Läden nutzen Hangiri (Holz-Wanne) um Temp zu halten, paddeln ständig. Niemals Sushi-Reis kühlen. Test: berühre Reis am Handgelenk - sollte neutral fühlen (Körpertemp). Zeigt Aufmerksamkeit zum Detail.",
          nl: "Shari temperatuur wetenschap: Traditionele Edomae: lichaamstemperatuur (hadahada - huid-rakende warmte, ~37°C). Waarom kritisch: 1) Past bij mond temperatuur - naadloze eet ervaring. 2) Warme rijst geeft aromaten, azijn noten beter af. 3) Koude rijst verhardt, maskeert smaken, domineert vis. 4) Te warm kookt vis, oncomfortabel. 5) Juiste temp laat rijst licht smelten op tong. High-end winkels gebruiken hangiri (houten kuip) om temp te behouden, roer constant. Nooit sushi rijst koelen. Test: raak rijst aan pols - moet neutraal voelen (lichaams temp). Toont aandacht voor detail."
        }
      },
      {
        question: {
          en: "What is 'omakase' dining philosophy and etiquette?",
          es: "¿Qué es la filosofía y etiqueta de comer 'omakase'?",
          de: "Was ist 'Omakase' Ess-Philosophie und Etikette?",
          nl: "Wat is 'omakase' eet filosofie en etiquette?"
        },
        options: [
          { en: "'Chef's choice' - trust chef to select fish, pacing, order based on seasonality and your preferences, eat immediately when served, minimal customization", es: "'Elección del chef' - confiar en chef para seleccionar pescado, ritmo, orden basado en estacionalidad y tus preferencias, comer inmediatamente cuando se sirve, personalización mínima", de: "'Chefs Wahl' - vertraue Koch Fisch, Tempo, Reihenfolge basierend auf Saisonalität und deinen Vorlieben zu wählen, essen sofort wenn serviert, minimale Anpassung", nl: "'Chefs keuze' - vertrouw chef om vis te selecteren, tempo, volgorde gebaseerd op seizoensgebondenheid en jouw voorkeuren, eet onmiddellijk wanneer geserveerd, minimale aanpassing" },
          { en: "All-you-can-eat menu", es: "Menú todo lo que puedas comer", de: "All-you-can-eat-Menü", nl: "All-you-can-eat menu" },
          { en: "Order anything you want", es: "Ordenar lo que quieras", de: "Bestelle was du willst", nl: "Bestel wat je wilt" },
          { en: "Fixed standard menu", es: "Menú estándar fijo", de: "Festes Standard-Menü", nl: "Vast standaard menu" }
        ],
        correct: 0,
        explanation: {
          en: "Omakase (お任せ - 'I leave it to you') philosophy: Ultimate trust in chef. Chef selects best seasonal fish, determines order (usually: light→rich, white→red→fatty), paces meal. Etiquette: 1) EAT IMMEDIATELY when served (rice still body temp). 2) Trust chef's seasoning (minimal soy sauce, often pre-applied). 3) Communicate preferences/allergies at start, then trust. 4) Don't re-order same fish (shows lack of trust). 5) Engage respectfully with chef. 6) Pay attention (put phone away). High-end experience - showcases chef's skill, seasonal awareness, relationship. Expensive but ultimate sushi experience.",
          es: "Filosofía de omakase (お任せ - 'Lo dejo a ti'): Confianza máxima en chef. Chef selecciona mejor pescado estacional, determina orden (usualmente: ligero→rico, blanco→rojo→graso), marca ritmo de comida. Etiqueta: 1) COMER INMEDIATAMENTE cuando se sirve (arroz aún temperatura corporal). 2) Confiar en condimento de chef (salsa de soja mínima, a menudo pre-aplicada). 3) Comunicar preferencias/alergias al inicio, luego confiar. 4) No re-ordenar mismo pescado (muestra falta de confianza). 5) Interactuar respetuosamente con chef. 6) Prestar atención (guardar teléfono). Experiencia de alta gama - muestra habilidad de chef, conciencia estacional, relación. Caro pero experiencia máxima de sushi.",
          de: "Omakase (お任せ - 'Ich überlasse es dir') Philosophie: Ultimatives Vertrauen in Koch. Koch wählt besten saisonalen Fisch, bestimmt Reihenfolge (üblicherweise: leicht→reich, weiß→rot→fettig), bestimmt Tempo der Mahlzeit. Etikette: 1) SOFORT ESSEN wenn serviert (Reis noch Körpertemp). 2) Vertraue Kochs Würzung (minimale Sojasauce, oft vorab aufgetragen). 3) Kommuniziere Vorlieben/Allergien am Anfang, dann vertraue. 4) Bestelle nicht gleichen Fisch neu (zeigt Mangel an Vertrauen). 5) Interagiere respektvoll mit Koch. 6) Achte auf (lege Telefon weg). High-End-Erlebnis - zeigt Kochs Können, saisonales Bewusstsein, Beziehung. Teuer aber ultimatives Sushi-Erlebnis.",
          nl: "Omakase (お任せ - 'Ik laat het aan jou over') filosofie: Ultiem vertrouwen in chef. Chef selecteert beste seizoens vis, bepaalt volgorde (meestal: licht→rijk, wit→rood→vet), bepaalt tempo van maaltijd. Etiquette: 1) EET ONMIDDELLIJK wanneer geserveerd (rijst nog lichaams temp). 2) Vertrouw chef's kruiding (minimale sojasaus, vaak vooraf aangebracht). 3) Communiceer voorkeuren/allergieën aan start, dan vertrouw. 4) Bestel niet zelfde vis opnieuw (toont gebrek aan vertrouwen). 5) Ga respectvol om met chef. 6) Let op (leg telefoon weg). High-end ervaring - toont chef's vaardigheid, seizoens bewustzijn, relatie. Duur maar ultieme sushi ervaring."
        }
      },
      {
        question: {
          en: "What is 'ikejime' technique and why is it critical for sushi quality?",
          es: "¿Qué es la técnica 'ikejime' y por qué es crítica para la calidad del sushi?",
          de: "Was ist 'Ikejime' Technik und warum ist sie kritisch für Sushi-Qualität?",
          nl: "Wat is 'ikejime' techniek en waarom is het kritisch voor sushi kwaliteit?"
        },
        options: [
          { en: "Japanese instant brain-spiking method that prevents stress hormones, reduces lactic acid, preserves ATP, extends freshness 2-3x - produces clearer flavor, firmer texture", es: "Método japonés de punción cerebral instantánea que previene hormonas de estrés, reduce ácido láctico, preserva ATP, extiende frescura 2-3x - produce sabor más claro, textura más firme", de: "Japanische sofortige Gehirn-Stich-Methode die Stresshormone verhindert, Milchsäure reduziert, ATP bewahrt, Frische 2-3x verlängert - produziert klareren Geschmack, festere Textur", nl: "Japanse onmiddellijke brein-prik methode die stress hormonen voorkomt, melkzuur vermindert, ATP behoudt, versheid 2-3x verlengt - produceert helderder smaak, stevigere textuur" },
          { en: "Simple cutting method", es: "Método de corte simple", de: "Einfache Schnitt-Methode", nl: "Simpele snij methode" },
          { en: "Freezing technique", es: "Técnica de congelación", de: "Gefrier-Technik", nl: "Vriestechniek" },
          { en: "Boiling preparation", es: "Preparación hirviendo", de: "Koch-Vorbereitung", nl: "Kook bereiding" }
        ],
        correct: 0,
        explanation: {
          en: "Ikejime (活け締め - 'alive締め'): humane killing produces superior fish. Process: 1) Spike brain instantly (immediate unconsciousness, no stress hormones like cortisol/adrenaline). 2) Sever spinal cord. 3) Insert wire through spinal canal (shinkeijime) to prevent nerve firings. 4) Bleed out in ice water. Benefits: Prevents lactic acid buildup (causes sour taste, soft texture), preserves ATP (energy compound - delays rigor mortis), maintains pH (prevents bacterial growth), extends shelf life 2-3x (5-7 days vs 2 days). Result: sweeter, cleaner flavor, firmer texture, better color. High-end sushi requires ikejime fish. Shows respect for ingredient. Japanese innovation that revolutionized seafood quality.",
          es: "Ikejime (活け締め - 'vivo締め'): muerte humanitaria produce pescado superior. Proceso: 1) Punzar cerebro instantáneamente (inconsciencia inmediata, sin hormonas de estrés como cortisol/adrenalina). 2) Cortar médula espinal. 3) Insertar alambre por canal espinal (shinkeijime) para prevenir disparos nerviosos. 4) Desangrar en agua con hielo. Beneficios: Previene acumulación de ácido láctico (causa sabor agrio, textura suave), preserva ATP (compuesto energía - retrasa rigor mortis), mantiene pH (previene crecimiento bacteriano), extiende vida útil 2-3x (5-7 días vs 2 días). Resultado: sabor más dulce y limpio, textura más firme, mejor color. Sushi de alta gama requiere pescado ikejime. Muestra respeto por ingrediente. Innovación japonesa que revolucionó calidad de mariscos.",
          de: "Ikejime (活け締め - 'lebendig締め'): humanes Töten produziert überlegenen Fisch. Prozess: 1) Gehirn sofort durchstechen (sofortige Bewusstlosigkeit, keine Stresshormone wie Cortisol/Adrenalin). 2) Rückenmark durchtrennen. 3) Draht durch Spinalkanal einführen (Shinkeijime) um Nervenfeuerungen zu verhindern. 4) In Eiswasser ausbluten. Vorteile: Verhindert Milchsäure-Aufbau (verursacht sauren Geschmack, weiche Textur), bewahrt ATP (Energie-Verbindung - verzögert Totenstarre), erhält pH (verhindert Bakterienwachstum), verlängert Haltbarkeit 2-3x (5-7 Tage vs 2 Tage). Ergebnis: süßerer, sauberer Geschmack, festere Textur, bessere Farbe. High-End-Sushi erfordert Ikejime-Fisch. Zeigt Respekt für Zutat. Japanische Innovation die Meeresfrüchte-Qualität revolutionierte.",
          nl: "Ikejime (活け締め - 'levend締め'): humaan doden produceert superieure vis. Proces: 1) Prik brein onmiddellijk (onmiddellijke bewusteloosheid, geen stress hormonen zoals cortisol/adrenaline). 2) Doorkruip ruggenmerg. 3) Voeg draad door spinaal kanaal (shinkeijime) om zenuw vuringen te voorkomen. 4) Laat bloeden in ijswater. Voordelen: Voorkomt melkzuur opbouw (veroorzaakt zure smaak, zachte textuur), behoudt ATP (energie verbinding - vertraagt lijkstijfheid), handhaaft pH (voorkomt bacteriële groei), verlengt houdbaarheid 2-3x (5-7 dagen vs 2 dagen). Resultaat: zoetere, helderder smaak, steviger textuur, betere kleur. High-end sushi vereist ikejime vis. Toont respect voor ingrediënt. Japanse innovatie die zeevruchten kwaliteit revolutioneerde."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
