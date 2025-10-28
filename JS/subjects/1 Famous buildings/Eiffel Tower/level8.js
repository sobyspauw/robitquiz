(function() {
  const level8 = {
    name: {
      en: "Modern Era",
      es: "Era Moderna",
      de: "Moderne Ära",
      nl: "Moderne Tijd"
    },
    questions: [
      {
        question: {
          en: "How many restaurants are currently in the Eiffel Tower?",
          es: "¿Cuántos restaurantes hay actualmente en la Torre Eiffel?",
          de: "Wie viele Restaurants gibt es derzeit im Eiffelturm?",
          nl: "Hoeveel restaurants zijn er momenteel in de Eiffeltoren?"
        },
        options: [
          { en: "3 restaurants", es: "3 restaurantes", de: "3 Restaurants", nl: "3 restaurants" },
          { en: "1 restaurant", es: "1 restaurante", de: "1 Restaurant", nl: "1 restaurant" },
          { en: "5 restaurants", es: "5 restaurantes", de: "5 Restaurants", nl: "5 restaurants" },
          { en: "2 restaurants", es: "2 restaurantes", de: "2 Restaurants", nl: "2 restaurants" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower currently has three restaurants: 58 Tour Eiffel on the first level, Le Jules Verne on the second level, and the Champagne Bar at the top.",
          es: "La Torre Eiffel actualmente tiene tres restaurantes: 58 Tour Eiffel en el primer nivel, Le Jules Verne en el segundo nivel, y el Champagne Bar en la cima.",
          de: "Der Eiffelturm hat derzeit drei Restaurants: 58 Tour Eiffel auf der ersten Ebene, Le Jules Verne auf der zweiten Ebene und die Champagner-Bar oben.",
          nl: "De Eiffeltoren heeft momenteel drie restaurants: 58 Tour Eiffel op de eerste verdieping, Le Jules Verne op de tweede verdieping, en de Champagne Bar bovenaan."
        }
      },
      {
        question: {
          en: "What major renovation was completed in 2014?",
          es: "¿Qué renovación importante se completó en 2014?",
          de: "Welche größere Renovierung wurde 2014 abgeschlossen?",
          nl: "Welke grote renovatie werd in 2014 voltooid?"
        },
        options: [
          { en: "Glass floor installation on first level", es: "Instalación de piso de vidrio en el primer nivel", de: "Installation eines Glasbodens auf der ersten Ebene", nl: "Installatie van glazen vloer op de eerste verdieping" },
          { en: "New elevator system", es: "Nuevo sistema de ascensores", de: "Neues Aufzugssystem", nl: "Nieuw liftsysteem" },
          { en: "Complete repainting", es: "Repintado completo", de: "Komplettes Neustreichen", nl: "Volledige herbeschildering" },
          { en: "Structural reinforcement", es: "Refuerzo estructural", de: "Strukturverstärkung", nl: "Structurele versterking" }
        ],
        correct: 0,
        explanation: {
          en: "In 2014, a transparent glass floor was installed on the first level, offering visitors a thrilling view 57 meters straight down.",
          es: "En 2014, se instaló un piso de vidrio transparente en el primer nivel, ofreciendo a los visitantes una vista emocionante de 57 metros hacia abajo.",
          de: "2014 wurde auf der ersten Ebene ein transparenter Glasboden installiert, der Besuchern einen aufregenden Blick 57 Meter nach unten bietet.",
          nl: "In 2014 werd een transparante glazen vloer geïnstalleerd op de eerste verdieping, wat bezoekers een opwindend uitzicht 57 meter naar beneden biedt."
        }
      },
      {
        question: {
          en: "What role did the Eiffel Tower play in the 2024 Paris Olympic Games?",
          es: "¿Qué papel desempeñó la Torre Eiffel en los Juegos Olímpicos de París 2024?",
          de: "Welche Rolle spielte der Eiffelturm bei den Olympischen Spielen 2024 in Paris?",
          nl: "Welke rol speelde de Eiffeltoren bij de Olympische Spelen van Parijs 2024?"
        },
        options: [
          { en: "Iconic backdrop for ceremonies and events", es: "Telón de fondo icónico para ceremonias y eventos", de: "Ikonische Kulisse für Zeremonien und Veranstaltungen", nl: "Iconische achtergrond voor ceremonies en evenementen" },
          { en: "Olympic flame holder", es: "Soporte de la llama olímpica", de: "Olympischer Flammenhalter", nl: "Olympische vlam houder" },
          { en: "Competition venue", es: "Sede de competiciones", de: "Wettkampfstätte", nl: "Wedstrijdlocatie" },
          { en: "Media center", es: "Centro de medios", de: "Medienzentrum", nl: "Mediacentrum" }
        ],
        correct: 0,
        explanation: {
          en: "During the 2024 Paris Olympics, the Eiffel Tower served as an iconic backdrop for various ceremonies and events, featuring in the global broadcast imagery.",
          es: "Durante las Olimpiadas de París 2024, la Torre Eiffel sirvió como telón de fondo icónico para varias ceremonias y eventos, apareciendo en las imágenes de transmisión global.",
          de: "Während der Olympischen Spiele 2024 in Paris diente der Eiffelturm als ikonische Kulisse für verschiedene Zeremonien und Veranstaltungen in den weltweiten Übertragungen.",
          nl: "Tijdens de Olympische Spelen van Parijs 2024 diende de Eiffeltoren als iconische achtergrond voor verschillende ceremonies en evenementen in de wereldwijde uitzendingen."
        }
      },
      {
        question: {
          en: "What sustainability initiative was implemented in recent years?",
          es: "¿Qué iniciativa de sostenibilidad se implementó en los últimos años?",
          de: "Welche Nachhaltigkeitsinitiative wurde in den letzten Jahren umgesetzt?",
          nl: "Welk duurzaamheidsinitiatief werd de afgelopen jaren geïmplementeerd?"
        },
        options: [
          { en: "LED lighting and renewable energy systems", es: "Iluminación LED y sistemas de energía renovable", de: "LED-Beleuchtung und erneuerbare Energiesysteme", nl: "LED-verlichting en hernieuwbare energiesystemen" },
          { en: "Solar panel roof installation", es: "Instalación de techo de paneles solares", de: "Installation von Solarpanel-Dach", nl: "Installatie van zonnepaneel dak" },
          { en: "Geothermal heating system", es: "Sistema de calefacción geotérmica", de: "Geothermisches Heizsystem", nl: "Geothermisch verwarmingssysteem" },
          { en: "Rainwater collection system", es: "Sistema de recolección de agua de lluvia", de: "Regenwassersammelsystem", nl: "Regenwater opvangsysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Recent renovations included LED lighting to reduce energy consumption and wind turbines plus solar panels to generate renewable energy.",
          es: "Las renovaciones recientes incluyeron iluminación LED para reducir el consumo de energía y turbinas eólicas más paneles solares para generar energía renovable.",
          de: "Zu den jüngsten Renovierungen gehörten LED-Beleuchtung zur Reduzierung des Energieverbrauchs sowie Windturbinen und Solarpaneele zur Erzeugung erneuerbarer Energie.",
          nl: "Recente renovaties omvatten LED-verlichting om het energieverbruik te verminderen en windturbines plus zonnepanelen om hernieuwbare energie op te wekken."
        }
      },
      {
        question: {
          en: "What special New Year's Eve event occurs at the Eiffel Tower?",
          es: "¿Qué evento especial de Nochevieja ocurre en la Torre Eiffel?",
          de: "Welches besondere Silvesterereignis findet am Eiffelturm statt?",
          nl: "Welk speciaal oudejaarsavondevenement vindt plaats bij de Eiffeltoren?"
        },
        options: [
          { en: "Midnight light show and countdown", es: "Espectáculo de luces a medianoche y cuenta regresiva", de: "Mitternachtslichtshow und Countdown", nl: "Middernacht lichtshow en aftelling" },
          { en: "Free admission all night", es: "Entrada gratuita toda la noche", de: "Freier Eintritt die ganze Nacht", nl: "Gratis toegang de hele nacht" },
          { en: "Champagne tasting event", es: "Evento de degustación de champán", de: "Champagner-Verkostungsveranstaltung", nl: "Champagne proeverij evenement" },
          { en: "Special dinner service only", es: "Solo servicio de cena especial", de: "Nur spezieller Dinnerservice", nl: "Alleen speciaal dinerservice" }
        ],
        correct: 0,
        explanation: {
          en: "Every New Year's Eve, the Eiffel Tower hosts a spectacular light show at midnight as part of Paris's celebration, attracting massive crowds.",
          es: "Cada Nochevieja, la Torre Eiffel presenta un espectacular espectáculo de luces a medianoche como parte de la celebración de París, atrayendo multitudes masivas.",
          de: "Jedes Silvester bietet der Eiffelturm um Mitternacht eine spektakuläre Lichtshow als Teil der Pariser Feierlichkeiten, die massive Menschenmengen anzieht.",
          nl: "Elke oudejaarsavond organiseert de Eiffeltoren om middernacht een spectaculaire lichtshow als onderdeel van de viering van Parijs, wat enorme menigten trekt."
        }
      },
      {
        question: {
          en: "What modern security feature was added after 2015?",
          es: "¿Qué característica de seguridad moderna se agregó después de 2015?",
          de: "Welche moderne Sicherheitsfunktion wurde nach 2015 hinzugefügt?",
          nl: "Welke moderne beveiligingsfunctie werd toegevoegd na 2015?"
        },
        options: [
          { en: "Bulletproof glass barriers", es: "Barreras de vidrio a prueba de balas", de: "Kugelsichere Glasbarrieren", nl: "Kogelvrije glazen barrières" },
          { en: "Metal detectors only", es: "Solo detectores de metales", de: "Nur Metalldetektoren", nl: "Alleen metaaldetectors" },
          { en: "CCTV cameras", es: "Cámaras CCTV", de: "CCTV-Kameras", nl: "CCTV-camera's" },
          { en: "Biometric scanners", es: "Escáneres biométricos", de: "Biometrische Scanner", nl: "Biometrische scanners" }
        ],
        correct: 0,
        explanation: {
          en: "After security concerns in 2015, bulletproof glass barriers were installed around the base of the tower to protect visitors while maintaining visibility.",
          es: "Después de las preocupaciones de seguridad en 2015, se instalaron barreras de vidrio a prueba de balas alrededor de la base de la torre para proteger a los visitantes mientras se mantiene la visibilidad.",
          de: "Nach Sicherheitsbedenken im Jahr 2015 wurden kugelsichere Glasbarrieren um die Basis des Turms installiert, um Besucher zu schützen und gleichzeitig die Sichtbarkeit zu erhalten.",
          nl: "Na veiligheidszorgen in 2015 werden kogelvrije glazen barrières geïnstalleerd rond de basis van de toren om bezoekers te beschermen met behoud van zichtbaarheid."
        }
      },
      {
        question: {
          en: "What famous restaurant is located on the second level?",
          es: "¿Qué restaurante famoso se encuentra en el segundo nivel?",
          de: "Welches berühmte Restaurant befindet sich auf der zweiten Ebene?",
          nl: "Welk beroemd restaurant bevindt zich op de tweede verdieping?"
        },
        options: [
          { en: "Le Jules Verne", es: "Le Jules Verne", de: "Le Jules Verne", nl: "Le Jules Verne" },
          { en: "La Tour d'Argent", es: "La Tour d'Argent", de: "La Tour d'Argent", nl: "La Tour d'Argent" },
          { en: "Maxim's", es: "Maxim's", de: "Maxim's", nl: "Maxim's" },
          { en: "Le Cinq", es: "Le Cinq", de: "Le Cinq", nl: "Le Cinq" }
        ],
        correct: 0,
        explanation: {
          en: "Le Jules Verne, a Michelin-starred restaurant named after the famous author, has been located on the second level since 1983.",
          es: "Le Jules Verne, un restaurante con estrellas Michelin que lleva el nombre del famoso autor, se encuentra en el segundo nivel desde 1983.",
          de: "Le Jules Verne, ein mit Michelin-Sternen ausgezeichnetes Restaurant, das nach dem berühmten Autor benannt ist, befindet sich seit 1983 auf der zweiten Ebene.",
          nl: "Le Jules Verne, een restaurant met Michelin-sterren genoemd naar de beroemde auteur, bevindt zich sinds 1983 op de tweede verdieping."
        }
      },
      {
        question: {
          en: "How is online ticketing changing visitor experience today?",
          es: "¿Cómo está cambiando la venta de boletos en línea la experiencia del visitante hoy?",
          de: "Wie verändert der Online-Ticketverkauf heute das Besuchererlebnis?",
          nl: "Hoe verandert online ticketing de bezoekerservaring vandaag?"
        },
        options: [
          { en: "Reduces wait times significantly", es: "Reduce significativamente los tiempos de espera", de: "Reduziert Wartezeiten erheblich", nl: "Vermindert wachttijden aanzienlijk" },
          { en: "Provides discounted prices", es: "Proporciona precios con descuento", de: "Bietet ermäßigte Preise", nl: "Biedt kortingsprijzen" },
          { en: "Offers virtual reality tours", es: "Ofrece tours de realidad virtual", de: "Bietet Virtual-Reality-Touren", nl: "Biedt virtual reality tours" },
          { en: "Guarantees weather protection", es: "Garantiza protección contra el clima", de: "Garantiert Wetterschutz", nl: "Garandeert weerbescherming" }
        ],
        correct: 0,
        explanation: {
          en: "Online advance booking has significantly reduced queue times, allowing visitors to schedule their visit and bypass long waiting lines.",
          es: "La reserva en línea anticipada ha reducido significativamente los tiempos de cola, permitiendo a los visitantes programar su visita y evitar largas filas de espera.",
          de: "Die Online-Vorbuchung hat die Wartezeiten erheblich reduziert und ermöglicht es Besuchern, ihren Besuch zu planen und lange Warteschlangen zu umgehen.",
          nl: "Online vooraf boeken heeft de wachttijden aanzienlijk verminderd, waardoor bezoekers hun bezoek kunnen plannen en lange wachtrijen kunnen omzeilen."
        }
      },
      {
        question: {
          en: "What type of events are regularly held at the Eiffel Tower today?",
          es: "¿Qué tipo de eventos se realizan regularmente en la Torre Eiffel hoy?",
          de: "Welche Art von Veranstaltungen werden heute regelmäßig am Eiffelturm abgehalten?",
          nl: "Wat voor soort evenementen worden vandaag regelmatig gehouden bij de Eiffeltoren?"
        },
        options: [
          { en: "Corporate events and private functions", es: "Eventos corporativos y funciones privadas", de: "Firmenveranstaltungen und private Feiern", nl: "Bedrijfsevenementen en privé evenementen" },
          { en: "Concerts only", es: "Solo conciertos", de: "Nur Konzerte", nl: "Alleen concerten" },
          { en: "Political rallies", es: "Mítines políticos", de: "Politische Kundgebungen", nl: "Politieke bijeenkomsten" },
          { en: "Sports competitions", es: "Competiciones deportivas", de: "Sportwettbewerbe", nl: "Sportwedstrijden" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower's venues can be rented for corporate events, private dinners, and special functions, offering unique experiences with panoramic views.",
          es: "Los espacios de la Torre Eiffel se pueden alquilar para eventos corporativos, cenas privadas y funciones especiales, ofreciendo experiencias únicas con vistas panorámicas.",
          de: "Die Veranstaltungsräume des Eiffelturms können für Firmenveranstaltungen, private Abendessen und besondere Feiern gemietet werden und bieten einzigartige Erlebnisse mit Panoramablick.",
          nl: "De locaties van de Eiffeltoren kunnen worden gehuurd voor bedrijfsevenementen, privé diners en speciale evenementen, met unieke ervaringen met panoramisch uitzicht."
        }
      },
      {
        question: {
          en: "What accessibility improvements have been made in recent years?",
          es: "¿Qué mejoras de accesibilidad se han realizado en los últimos años?",
          de: "Welche Verbesserungen der Barrierefreiheit wurden in den letzten Jahren vorgenommen?",
          nl: "Welke toegankelijkheidsverbeteringen zijn de afgelopen jaren aangebracht?"
        },
        options: [
          { en: "Wheelchair access to first and second levels", es: "Acceso en silla de ruedas a los niveles primero y segundo", de: "Rollstuhlzugang zu erster und zweiter Ebene", nl: "Rolstoeltoegang tot eerste en tweede verdieping" },
          { en: "Braille signage only", es: "Solo señalización en braille", de: "Nur Braille-Beschilderung", nl: "Alleen braille bewegwijzering" },
          { en: "Audio guides", es: "Audioguías", de: "Audioguides", nl: "Audiogidsen" },
          { en: "Ramps to all levels", es: "Rampas a todos los niveles", de: "Rampen zu allen Ebenen", nl: "Hellingen naar alle verdiepingen" }
        ],
        correct: 0,
        explanation: {
          en: "Modern elevators now provide wheelchair access to the first and second levels, making the Eiffel Tower more accessible to visitors with mobility challenges.",
          es: "Los ascensores modernos ahora proporcionan acceso en silla de ruedas a los niveles primero y segundo, haciendo que la Torre Eiffel sea más accesible para visitantes con desafíos de movilidad.",
          de: "Moderne Aufzüge bieten jetzt Rollstuhlzugang zur ersten und zweiten Ebene und machen den Eiffelturm für Besucher mit Mobilitätseinschränkungen zugänglicher.",
          nl: "Moderne liften bieden nu rolstoeltoegang tot de eerste en tweede verdieping, waardoor de Eiffeltoren toegankelijker wordt voor bezoekers met mobiliteitsproblemen."
        }
      },
      {
        question: {
          en: "What digital innovation was introduced for visitor engagement?",
          es: "¿Qué innovación digital se introdujo para la participación de los visitantes?",
          de: "Welche digitale Innovation wurde für das Besucherengagement eingeführt?",
          nl: "Welke digitale innovatie werd geïntroduceerd voor bezoekersinteractie?"
        },
        options: [
          { en: "Mobile app with augmented reality features", es: "Aplicación móvil con funciones de realidad aumentada", de: "Mobile App mit Augmented-Reality-Funktionen", nl: "Mobiele app met augmented reality functies" },
          { en: "Virtual reality headsets", es: "Cascos de realidad virtual", de: "Virtual-Reality-Headsets", nl: "Virtual reality headsets" },
          { en: "Holographic displays", es: "Pantallas holográficas", de: "Holografische Displays", nl: "Holografische displays" },
          { en: "Interactive touchscreens only", es: "Solo pantallas táctiles interactivas", de: "Nur interaktive Touchscreens", nl: "Alleen interactieve touchscreens" }
        ],
        correct: 0,
        explanation: {
          en: "A mobile app with augmented reality features was introduced to enhance visitor experience, providing historical information and interactive content.",
          es: "Se introdujo una aplicación móvil con funciones de realidad aumentada para mejorar la experiencia del visitante, proporcionando información histórica y contenido interactivo.",
          de: "Eine mobile App mit Augmented-Reality-Funktionen wurde eingeführt, um das Besuchererlebnis zu verbessern und historische Informationen sowie interaktive Inhalte bereitzustellen.",
          nl: "Een mobiele app met augmented reality functies werd geïntroduceerd om de bezoekerservaring te verbeteren, met historische informatie en interactieve inhoud."
        }
      },
      {
        question: {
          en: "How does the Eiffel Tower participate in environmental awareness?",
          es: "¿Cómo participa la Torre Eiffel en la conciencia ambiental?",
          de: "Wie beteiligt sich der Eiffelturm am Umweltbewusstsein?",
          nl: "Hoe neemt de Eiffeltoren deel aan milieubewustzijn?"
        },
        options: [
          { en: "Special colored lighting for climate causes", es: "Iluminación especial de colores para causas climáticas", de: "Spezielle farbige Beleuchtung für Klimathemen", nl: "Speciale gekleurde verlichting voor klimaatdoeleinden" },
          { en: "Solar panel installations only", es: "Solo instalaciones de paneles solares", de: "Nur Solarpanel-Installationen", nl: "Alleen zonnepaneel installaties" },
          { en: "Tree planting programs", es: "Programas de plantación de árboles", de: "Baumpflanzprogramme", nl: "Boomplantprogramma's" },
          { en: "Recycling bins placement", es: "Colocación de contenedores de reciclaje", de: "Platzierung von Recyclingbehältern", nl: "Plaatsing van recyclingbakken" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower uses special colored lighting displays to support environmental causes and raise awareness about climate change and sustainability.",
          es: "La Torre Eiffel utiliza exhibiciones especiales de iluminación de colores para apoyar causas ambientales y crear conciencia sobre el cambio climático y la sostenibilidad.",
          de: "Der Eiffelturm verwendet spezielle farbige Beleuchtungsanzeigen, um Umweltanliegen zu unterstützen und das Bewusstsein für Klimawandel und Nachhaltigkeit zu schärfen.",
          nl: "De Eiffeltoren gebruikt speciale gekleurde verlichtingsdisplays om milieuoorzaken te ondersteunen en bewustzijn te creëren over klimaatverandering en duurzaamheid."
        }
      },
      {
        question: {
          en: "What shopping experience is available at the Eiffel Tower today?",
          es: "¿Qué experiencia de compras está disponible en la Torre Eiffel hoy?",
          de: "Welches Einkaufserlebnis gibt es heute am Eiffelturm?",
          nl: "Welke winkelervaring is vandaag beschikbaar bij de Eiffeltoren?"
        },
        options: [
          { en: "Gift shops on multiple levels", es: "Tiendas de regalos en múltiples niveles", de: "Geschenkläden auf mehreren Ebenen", nl: "Cadeauwinkels op meerdere verdiepingen" },
          { en: "Single ground-level store", es: "Una sola tienda a nivel del suelo", de: "Ein einziger Laden auf Bodenhöhe", nl: "Enkele winkel op begane grond" },
          { en: "Online shopping only", es: "Solo compras en línea", de: "Nur Online-Shopping", nl: "Alleen online winkelen" },
          { en: "No shopping facilities", es: "Sin instalaciones de compras", de: "Keine Einkaufsmöglichkeiten", nl: "Geen winkelfaciliteiten" }
        ],
        correct: 0,
        explanation: {
          en: "Gift shops are located on multiple levels of the tower, offering souvenirs, books, jewelry, and Eiffel Tower merchandise to visitors.",
          es: "Las tiendas de regalos están ubicadas en múltiples niveles de la torre, ofreciendo souvenirs, libros, joyería y mercancía de la Torre Eiffel a los visitantes.",
          de: "Geschenkläden befinden sich auf mehreren Ebenen des Turms und bieten Besuchern Souvenirs, Bücher, Schmuck und Eiffelturm-Merchandise.",
          nl: "Cadeauwinkels bevinden zich op meerdere verdiepingen van de toren en bieden souvenirs, boeken, sieraden en Eiffeltoren merchandise aan bezoekers."
        }
      },
      {
        question: {
          en: "What winter attraction was introduced in recent years?",
          es: "¿Qué atracción de invierno se introdujo en los últimos años?",
          de: "Welche Winterattraktion wurde in den letzten Jahren eingeführt?",
          nl: "Welke winterattractie werd de afgelopen jaren geïntroduceerd?"
        },
        options: [
          { en: "Ice skating rink on first level", es: "Pista de patinaje sobre hielo en el primer nivel", de: "Eislaufbahn auf der ersten Ebene", nl: "Schaatsbaan op de eerste verdieping" },
          { en: "Christmas market", es: "Mercado de Navidad", de: "Weihnachtsmarkt", nl: "Kerstmarkt" },
          { en: "Ski slope", es: "Pista de esquí", de: "Skipiste", nl: "Skipiste" },
          { en: "Snow sculpture exhibition", es: "Exposición de esculturas de nieve", de: "Schneeskulpturenausstellung", nl: "Sneeuwsculptuur tentoonstelling" }
        ],
        correct: 0,
        explanation: {
          en: "During winter seasons, an ice skating rink has been installed on the first level, offering a unique skating experience 57 meters above ground.",
          es: "Durante las temporadas de invierno, se ha instalado una pista de patinaje sobre hielo en el primer nivel, ofreciendo una experiencia única de patinaje a 57 metros sobre el suelo.",
          de: "Während der Wintersaison wurde auf der ersten Ebene eine Eislaufbahn installiert, die ein einzigartiges Eislauferlebnis 57 Meter über dem Boden bietet.",
          nl: "Tijdens winterseizoen is een schaatsbaan geïnstalleerd op de eerste verdieping, wat een unieke schaatservaring biedt op 57 meter boven de grond."
        }
      },
      {
        question: {
          en: "What educational program does the Eiffel Tower offer to schools?",
          es: "¿Qué programa educativo ofrece la Torre Eiffel a las escuelas?",
          de: "Welches Bildungsprogramm bietet der Eiffelturm Schulen an?",
          nl: "Welk educatief programma biedt de Eiffeltoren aan scholen?"
        },
        options: [
          { en: "Guided educational tours", es: "Visitas guiadas educativas", de: "Geführte Bildungstouren", nl: "Begeleide educatieve rondleidingen" },
          { en: "Engineering workshops only", es: "Solo talleres de ingeniería", de: "Nur Ingenieurworkshops", nl: "Alleen technische workshops" },
          { en: "Science experiments", es: "Experimentos científicos", de: "Wissenschaftliche Experimente", nl: "Wetenschappelijke experimenten" },
          { en: "No educational programs", es: "Sin programas educativos", de: "Keine Bildungsprogramme", nl: "Geen educatieve programma's" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower offers guided educational tours specifically designed for school groups, covering history, engineering, and cultural significance.",
          es: "La Torre Eiffel ofrece visitas guiadas educativas diseñadas específicamente para grupos escolares, cubriendo historia, ingeniería y significado cultural.",
          de: "Der Eiffelturm bietet geführte Bildungstouren speziell für Schulgruppen an, die Geschichte, Ingenieurwesen und kulturelle Bedeutung abdecken.",
          nl: "De Eiffeltoren biedt begeleide educatieve rondleidingen speciaal ontworpen voor schoolgroepen, met geschiedenis, techniek en culturele betekenis."
        }
      },
      {
        question: {
          en: "How are visitors notified of special events and closures?",
          es: "¿Cómo se notifica a los visitantes sobre eventos especiales y cierres?",
          de: "Wie werden Besucher über besondere Veranstaltungen und Schließungen informiert?",
          nl: "Hoe worden bezoekers geïnformeerd over speciale evenementen en sluitingen?"
        },
        options: [
          { en: "Official website and social media", es: "Sitio web oficial y redes sociales", de: "Offizielle Website und soziale Medien", nl: "Officiële website en sociale media" },
          { en: "Newspaper announcements only", es: "Solo anuncios en periódicos", de: "Nur Zeitungsankündigungen", nl: "Alleen krantenberichten" },
          { en: "Radio broadcasts", es: "Transmisiones de radio", de: "Radiosendungen", nl: "Radio-uitzendingen" },
          { en: "Posted signs at the tower", es: "Carteles publicados en la torre", de: "Aushänge am Turm", nl: "Borden bij de toren" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower maintains an official website and active social media presence to keep visitors informed about events, closures, and special programs.",
          es: "La Torre Eiffel mantiene un sitio web oficial y una presencia activa en redes sociales para mantener informados a los visitantes sobre eventos, cierres y programas especiales.",
          de: "Der Eiffelturm unterhält eine offizielle Website und aktive Social-Media-Präsenz, um Besucher über Veranstaltungen, Schließungen und Sonderprogramme zu informieren.",
          nl: "De Eiffeltoren onderhoudt een officiële website en actieve sociale media aanwezigheid om bezoekers geïnformeerd te houden over evenementen, sluitingen en speciale programma's."
        }
      },
      {
        question: {
          en: "What health and safety measure was emphasized during the COVID-19 pandemic?",
          es: "¿Qué medida de salud y seguridad se enfatizó durante la pandemia de COVID-19?",
          de: "Welche Gesundheits- und Sicherheitsmaßnahme wurde während der COVID-19-Pandemie betont?",
          nl: "Welke gezondheids- en veiligheidsmaatregel werd benadrukt tijdens de COVID-19 pandemie?"
        },
        options: [
          { en: "Timed entry tickets and reduced capacity", es: "Boletos de entrada programada y capacidad reducida", de: "Zeitgesteuerte Eintrittskarten und reduzierte Kapazität", nl: "Getimede toegangstickets en verminderde capaciteit" },
          { en: "Mandatory health screenings", es: "Exámenes de salud obligatorios", de: "Obligatorische Gesundheitsuntersuchungen", nl: "Verplichte gezondheidscontroles" },
          { en: "Temperature check stations", es: "Estaciones de control de temperatura", de: "Temperaturmessstationen", nl: "Temperatuurcontrole stations" },
          { en: "Outdoor access only", es: "Solo acceso al exterior", de: "Nur Außenzugang", nl: "Alleen buiten toegang" }
        ],
        correct: 0,
        explanation: {
          en: "During the pandemic, the Eiffel Tower implemented timed entry tickets and reduced visitor capacity to ensure safe social distancing.",
          es: "Durante la pandemia, la Torre Eiffel implementó boletos de entrada programada y capacidad reducida de visitantes para garantizar el distanciamiento social seguro.",
          de: "Während der Pandemie führte der Eiffelturm zeitgesteuerte Eintrittskarten und reduzierte Besucherkapazität ein, um sichere soziale Distanzierung zu gewährleisten.",
          nl: "Tijdens de pandemie implementeerde de Eiffeltoren getimede toegangstickets en verminderde bezoekercapaciteit om veilige sociale afstand te garanderen."
        }
      },
      {
        question: {
          en: "What type of cultural exhibitions are held at the tower?",
          es: "¿Qué tipo de exposiciones culturales se realizan en la torre?",
          de: "Welche Art von Kulturausstellungen werden am Turm abgehalten?",
          nl: "Wat voor soort culturele tentoonstellingen worden gehouden bij de toren?"
        },
        options: [
          { en: "Photography and art exhibitions", es: "Exposiciones de fotografía y arte", de: "Fotografie- und Kunstausstellungen", nl: "Fotografie en kunsttentoonstellingen" },
          { en: "Fashion shows only", es: "Solo desfiles de moda", de: "Nur Modenschauen", nl: "Alleen modeshows" },
          { en: "Historical reenactments", es: "Recreaciones históricas", de: "Historische Nachstellungen", nl: "Historische nabootsingen" },
          { en: "No exhibitions", es: "Sin exposiciones", de: "Keine Ausstellungen", nl: "Geen tentoonstellingen" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower regularly hosts photography and art exhibitions on various levels, showcasing both historical and contemporary works.",
          es: "La Torre Eiffel regularmente alberga exposiciones de fotografía y arte en varios niveles, mostrando obras tanto históricas como contemporáneas.",
          de: "Der Eiffelturm beherbergt regelmäßig Fotografie- und Kunstausstellungen auf verschiedenen Ebenen, die sowohl historische als auch zeitgenössische Werke präsentieren.",
          nl: "De Eiffeltoren organiseert regelmatig fotografie en kunsttentoonstellingen op verschillende verdiepingen, met zowel historische als hedendaagse werken."
        }
      },
      {
        question: {
          en: "What transportation improvements have been made for visitors?",
          es: "¿Qué mejoras de transporte se han hecho para los visitantes?",
          de: "Welche Verkehrsverbesserungen wurden für Besucher vorgenommen?",
          nl: "Welke transportverbeteringen zijn aangebracht voor bezoekers?"
        },
        options: [
          { en: "Enhanced metro and bus connections", es: "Conexiones mejoradas de metro y autobús", de: "Verbesserte Metro- und Busverbindungen", nl: "Verbeterde metro- en busverbindingen" },
          { en: "Helicopter service", es: "Servicio de helicóptero", de: "Hubschrauberservice", nl: "Helikopterdienst" },
          { en: "Cable car installation", es: "Instalación de teleférico", de: "Seilbahninstallation", nl: "Kabelbaaninstallatie" },
          { en: "Private shuttle only", es: "Solo servicio de transporte privado", de: "Nur privater Shuttle", nl: "Alleen privé shuttle" }
        ],
        correct: 0,
        explanation: {
          en: "Public transportation to the Eiffel Tower has been enhanced with improved metro lines and bus routes, making access easier for visitors.",
          es: "El transporte público a la Torre Eiffel se ha mejorado con líneas de metro y rutas de autobús mejoradas, facilitando el acceso a los visitantes.",
          de: "Der öffentliche Verkehr zum Eiffelturm wurde mit verbesserten Metrolinien und Busrouten ausgebaut, um den Zugang für Besucher zu erleichtern.",
          nl: "Het openbaar vervoer naar de Eiffeltoren is verbeterd met verbeterde metrolijnen en busroutes, waardoor de toegang voor bezoekers gemakkelijker wordt."
        }
      },
      {
        question: {
          en: "What night-time experience enhancement was added in recent years?",
          es: "¿Qué mejora de experiencia nocturna se agregó en los últimos años?",
          de: "Welche Verbesserung des Nachterlebnisses wurde in den letzten Jahren hinzugefügt?",
          nl: "Welke nachtelijke ervaringsverbetering werd de afgelopen jaren toegevoegd?"
        },
        options: [
          { en: "Extended evening hours during summer", es: "Horario vespertino extendido durante el verano", de: "Verlängerte Abendöffnungszeiten im Sommer", nl: "Verlengde avonduren tijdens de zomer" },
          { en: "24-hour access", es: "Acceso las 24 horas", de: "24-Stunden-Zugang", nl: "24-uurs toegang" },
          { en: "Midnight tours only", es: "Solo tours de medianoche", de: "Nur Mitternachtstouren", nl: "Alleen middernachttours" },
          { en: "Sunset viewing reservations", es: "Reservas para ver el atardecer", de: "Sonnenuntergangs-Reservierungen", nl: "Zonsondergang reserveringen" }
        ],
        correct: 0,
        explanation: {
          en: "Extended evening hours during summer months allow visitors to enjoy the tower's illuminations and sparkling lights late into the night.",
          es: "El horario vespertino extendido durante los meses de verano permite a los visitantes disfrutar de las iluminaciones de la torre y las luces centelleantes hasta tarde en la noche.",
          de: "Verlängerte Abendöffnungszeiten in den Sommermonaten ermöglichen es Besuchern, die Beleuchtung und funkelnden Lichter des Turms bis spät in die Nacht zu genießen.",
          nl: "Verlengde avonduren tijdens de zomermaanden stellen bezoekers in staat om 's avonds laat te genieten van de verlichting en fonkelende lichten van de toren."
        }
      }
    ]
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  }
  if (typeof window !== 'undefined') {
    window.level8Data = level8;
  }
  return level8;
})();
