(function() {
  const level3 = {
    name: {
      en: "Architecture & Design",
      es: "Arquitectura y Diseño",
      de: "Architektur & Design",
      nl: "Architectuur & Ontwerp"
    },
    questions: [
      {
        question: {
          en: "What type of structural design does the Eiffel Tower use?",
          es: "¿Qué tipo de diseño estructural usa la Torre Eiffel?",
          de: "Welche Art von Strukturdesign verwendet der Eiffelturm?",
          nl: "Welk type structureel ontwerp gebruikt de Eiffeltoren?"
        },
        options: [
          { en: "Lattice tower with open framework", es: "Torre de celosía con marco abierto", de: "Gitterturm mit offenem Rahmen", nl: "Traliemast met open raamwerk" },
          { en: "Solid stone tower", es: "Torre de piedra sólida", de: "Massiver Steinturm", nl: "Massieve stenen toren" },
          { en: "Cantilever design", es: "Diseño en voladizo", de: "Kragarmentwurf", nl: "Cantilever ontwerp" },
          { en: "Suspension structure", es: "Estructura de suspensión", de: "Hängestruktur", nl: "Hangende structuur" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower uses a lattice framework design, creating an open structure that minimizes wind resistance while maintaining strength.",
          es: "La Torre Eiffel usa un diseño de marco de celosía, creando una estructura abierta que minimiza la resistencia al viento mientras mantiene la fuerza.",
          de: "Der Eiffelturm verwendet ein Gitterrahmendesign, das eine offene Struktur schafft, die den Windwiderstand minimiert und gleichzeitig die Festigkeit beibehält.",
          nl: "De Eiffeltoren gebruikt een tralie-raamwerk ontwerp, waardoor een open structuur ontstaat die windweerstand minimaliseert terwijl de sterkte behouden blijft."
        }
      },
      {
        question: {
          en: "How many platforms does the Eiffel Tower have?",
          es: "¿Cuántas plataformas tiene la Torre Eiffel?",
          de: "Wie viele Plattformen hat der Eiffelturm?",
          nl: "Hoeveel platforms heeft de Eiffeltoren?"
        },
        options: [
          { en: "3 platforms", es: "3 plataformas", de: "3 Plattformen", nl: "3 platforms" },
          { en: "2 platforms", es: "2 plataformas", de: "2 Plattformen", nl: "2 platforms" },
          { en: "4 platforms", es: "4 plataformas", de: "4 Plattformen", nl: "4 platforms" },
          { en: "5 platforms", es: "5 plataformas", de: "5 Plattformen", nl: "5 platforms" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower has three platforms at different heights: the first at 57m, the second at 115m, and the third at 276m.",
          es: "La Torre Eiffel tiene tres plataformas a diferentes alturas: la primera a 57m, la segunda a 115m y la tercera a 276m.",
          de: "Der Eiffelturm hat drei Plattformen in unterschiedlichen Höhen: die erste bei 57m, die zweite bei 115m und die dritte bei 276m.",
          nl: "De Eiffeltoren heeft drie platforms op verschillende hoogtes: het eerste op 57m, het tweede op 115m en het derde op 276m."
        }
      },
      {
        question: {
          en: "What is the base width of each leg of the Eiffel Tower?",
          es: "¿Cuál es el ancho de la base de cada pierna de la Torre Eiffel?",
          de: "Wie breit ist die Basis jedes Beins des Eiffelturms?",
          nl: "Wat is de basisbreedte van elk been van de Eiffeltoren?"
        },
        options: [
          { en: "About 125 meters apart", es: "Aproximadamente 125 metros de separación", de: "Etwa 125 Meter auseinander", nl: "Ongeveer 125 meter uit elkaar" },
          { en: "About 50 meters apart", es: "Aproximadamente 50 metros de separación", de: "Etwa 50 Meter auseinander", nl: "Ongeveer 50 meter uit elkaar" },
          { en: "About 200 meters apart", es: "Aproximadamente 200 metros de separación", de: "Etwa 200 Meter auseinander", nl: "Ongeveer 200 meter uit elkaar" },
          { en: "About 75 meters apart", es: "Aproximadamente 75 metros de separación", de: "Etwa 75 Meter auseinander", nl: "Ongeveer 75 meter uit elkaar" }
        ],
        correct: 0,
        explanation: {
          en: "The four legs of the Eiffel Tower are positioned approximately 125 meters apart at ground level, forming a square base.",
          es: "Las cuatro patas de la Torre Eiffel están posicionadas aproximadamente a 125 metros de distancia a nivel del suelo, formando una base cuadrada.",
          de: "Die vier Beine des Eiffelturms sind auf Bodenhöhe etwa 125 Meter voneinander entfernt und bilden eine quadratische Basis.",
          nl: "De vier poten van de Eiffeltoren staan op grondniveau ongeveer 125 meter uit elkaar en vormen een vierkante basis."
        }
      },
      {
        question: {
          en: "What shape do the arches at the base of the tower create?",
          es: "¿Qué forma crean los arcos en la base de la torre?",
          de: "Welche Form bilden die Bögen an der Basis des Turms?",
          nl: "Welke vorm creëren de bogen aan de basis van de toren?"
        },
        options: [
          { en: "Parabolic arches", es: "Arcos parabólicos", de: "Parabolische Bögen", nl: "Parabolische bogen" },
          { en: "Semicircular arches", es: "Arcos semicirculares", de: "Halbkreisförmige Bögen", nl: "Halfronde bogen" },
          { en: "Pointed Gothic arches", es: "Arcos góticos puntiagudos", de: "Spitze gotische Bögen", nl: "Puntige gotische bogen" },
          { en: "Flat arches", es: "Arcos planos", de: "Flache Bögen", nl: "Platte bogen" }
        ],
        correct: 0,
        explanation: {
          en: "The decorative arches at the base are parabolic in shape, designed both for aesthetic appeal and structural support.",
          es: "Los arcos decorativos en la base tienen forma parabólica, diseñados tanto para el atractivo estético como para el soporte estructural.",
          de: "Die dekorativen Bögen an der Basis sind parabolisch geformt und wurden sowohl für ästhetischen Reiz als auch für strukturelle Unterstützung entworfen.",
          nl: "De decoratieve bogen aan de basis zijn parabolisch van vorm, ontworpen voor zowel esthetische aantrekkingskracht als structurele ondersteuning."
        }
      },
      {
        question: {
          en: "How does the tower's structure resist wind forces?",
          es: "¿Cómo resiste la estructura de la torre las fuerzas del viento?",
          de: "Wie widersteht die Turmstruktur Windkräften?",
          nl: "Hoe weerstaat de structuur van de toren windkrachten?"
        },
        options: [
          { en: "Open lattice allows wind to pass through", es: "La celosía abierta permite que el viento pase", de: "Offenes Gitter lässt Wind durchströmen", nl: "Open tralie laat wind erdoor gaan" },
          { en: "Solid walls deflect wind", es: "Paredes sólidas desvían el viento", de: "Feste Wände lenken Wind ab", nl: "Massieve muren leiden wind af" },
          { en: "Heavy weight anchors it down", es: "El peso pesado lo ancla", de: "Schweres Gewicht verankert ihn", nl: "Zwaar gewicht verankert hem" },
          { en: "Underground cables stabilize it", es: "Cables subterráneos lo estabilizan", de: "Unterirdische Kabel stabilisieren ihn", nl: "Ondergrondse kabels stabiliseren hem" }
        ],
        correct: 0,
        explanation: {
          en: "The open lattice framework allows wind to pass through the structure, reducing wind pressure and making it more stable in high winds.",
          es: "El marco de celosía abierta permite que el viento pase a través de la estructura, reduciendo la presión del viento y haciéndola más estable en vientos fuertes.",
          de: "Der offene Gitterrahmen lässt Wind durch die Struktur strömen, wodurch der Winddruck reduziert und die Stabilität bei starkem Wind erhöht wird.",
          nl: "Het open tralie-raamwerk laat wind door de structuur gaan, waardoor winddruk wordt verminderd en hij stabieler wordt bij harde wind."
        }
      },
      {
        question: {
          en: "What material innovation allowed such a tall iron structure?",
          es: "¿Qué innovación de material permitió una estructura de hierro tan alta?",
          de: "Welche Materialinnovation ermöglichte eine so hohe Eisenstruktur?",
          nl: "Welke materiaalinnovatie maakte zo'n hoge ijzeren structuur mogelijk?"
        },
        options: [
          { en: "Puddled iron with high tensile strength", es: "Hierro pudelado con alta resistencia a la tracción", de: "Puddelstahl mit hoher Zugfestigkeit", nl: "Puddelijzer met hoge treksterkte" },
          { en: "Cast iron blocks", es: "Bloques de hierro fundido", de: "Gusseisenblöcke", nl: "Gietijzeren blokken" },
          { en: "Bronze reinforcements", es: "Refuerzos de bronce", de: "Bronzeverstärkungen", nl: "Bronzen versterkingen" },
          { en: "Aluminum alloys", es: "Aleaciones de aluminio", de: "Aluminiumlegierungen", nl: "Aluminiumlegeringen" }
        ],
        correct: 0,
        explanation: {
          en: "The tower was built using puddled wrought iron, which had superior tensile strength compared to cast iron, making such a tall structure possible.",
          es: "La torre se construyó con hierro forjado pudelado, que tenía una resistencia a la tracción superior al hierro fundido, haciendo posible una estructura tan alta.",
          de: "Der Turm wurde aus Puddelschmiedeeisen gebaut, das im Vergleich zu Gusseisen eine überlegene Zugfestigkeit hatte und eine so hohe Struktur ermöglichte.",
          nl: "De toren werd gebouwd met gepuddeld smeedijzer, dat superieure treksterkte had vergeleken met gietijzer, waardoor zo'n hoge structuur mogelijk werd."
        }
      },
      {
        question: {
          en: "How many iron pieces were prefabricated for the tower?",
          es: "¿Cuántas piezas de hierro se prefabricaron para la torre?",
          de: "Wie viele Eisenteile wurden für den Turm vorgefertigt?",
          nl: "Hoeveel ijzeren delen werden geprefabriceerd voor de toren?"
        },
        options: [
          { en: "About 18,000 pieces", es: "Aproximadamente 18,000 piezas", de: "Etwa 18.000 Teile", nl: "Ongeveer 18.000 stuks" },
          { en: "About 5,000 pieces", es: "Aproximadamente 5,000 piezas", de: "Etwa 5.000 Teile", nl: "Ongeveer 5.000 stuks" },
          { en: "About 50,000 pieces", es: "Aproximadamente 50,000 piezas", de: "Etwa 50.000 Teile", nl: "Ongeveer 50.000 stuks" },
          { en: "About 100,000 pieces", es: "Aproximadamente 100,000 piezas", de: "Etwa 100.000 Teile", nl: "Ongeveer 100.000 stuks" }
        ],
        correct: 0,
        explanation: {
          en: "Approximately 18,000 individual iron pieces were prefabricated in Eiffel's factory and then assembled on site with extreme precision.",
          es: "Aproximadamente 18,000 piezas individuales de hierro se prefabricaron en la fábrica de Eiffel y luego se ensamblaron en el sitio con extrema precisión.",
          de: "Etwa 18.000 einzelne Eisenteile wurden in Eiffels Fabrik vorgefertigt und dann vor Ort mit extremer Präzision zusammengebaut.",
          nl: "Ongeveer 18.000 individuele ijzeren delen werden geprefabriceerd in Eiffels fabriek en vervolgens ter plaatse met extreme precisie gemonteerd."
        }
      },
      {
        question: {
          en: "What is unique about the tower's tapering design?",
          es: "¿Qué es único sobre el diseño cónico de la torre?",
          de: "Was ist einzigartig am konischen Design des Turms?",
          nl: "Wat is uniek aan het taps toelopende ontwerp van de toren?"
        },
        options: [
          { en: "It follows an exponential curve for optimal wind resistance", es: "Sigue una curva exponencial para una resistencia óptima al viento", de: "Es folgt einer exponentiellen Kurve für optimalen Windwiderstand", nl: "Het volgt een exponentiële curve voor optimale windweerstand" },
          { en: "It is perfectly straight", es: "Es perfectamente recto", de: "Es ist vollkommen gerade", nl: "Het is perfect recht" },
          { en: "It has random angles", es: "Tiene ángulos aleatorios", de: "Es hat zufällige Winkel", nl: "Het heeft willekeurige hoeken" },
          { en: "It widens at the top", es: "Se ensancha en la parte superior", de: "Es wird oben breiter", nl: "Het wordt breder aan de top" }
        ],
        correct: 0,
        explanation: {
          en: "The tower's profile follows a precise exponential curve, mathematically calculated to provide optimal resistance to wind forces.",
          es: "El perfil de la torre sigue una curva exponencial precisa, calculada matemáticamente para proporcionar resistencia óptima a las fuerzas del viento.",
          de: "Das Profil des Turms folgt einer präzisen exponentiellen Kurve, die mathematisch berechnet wurde, um optimalen Widerstand gegen Windkräfte zu bieten.",
          nl: "Het profiel van de toren volgt een precieze exponentiële curve, wiskundig berekend om optimale weerstand tegen windkrachten te bieden."
        }
      },
      {
        question: {
          en: "At what height is the first platform located?",
          es: "¿A qué altura se encuentra la primera plataforma?",
          de: "In welcher Höhe befindet sich die erste Plattform?",
          nl: "Op welke hoogte bevindt zich het eerste platform?"
        },
        options: [
          { en: "57 m", es: "57 metros", de: "57 Meter", nl: "57 meter" },
          { en: "115 m", es: "115 metros", de: "115 Meter", nl: "115 meter" },
          { en: "30 m", es: "30 metros", de: "30 Meter", nl: "30 meter" },
          { en: "90 m", es: "90 metros", de: "90 Meter", nl: "90 meter" }
        ],
        correct: 0,
        explanation: {
          en: "The first platform is located at 57 meters above ground and has a surface area of 4,200 square meters.",
          es: "La primera plataforma se encuentra a 57 metros sobre el suelo y tiene una superficie de 4,200 metros cuadrados.",
          de: "Die erste Plattform befindet sich 57 Meter über dem Boden und hat eine Fläche von 4.200 Quadratmetern.",
          nl: "Het eerste platform bevindt zich op 57 meter boven de grond en heeft een oppervlakte van 4.200 vierkante meter."
        }
      },
      {
        question: {
          en: "How many stairs lead to the top of the tower?",
          es: "¿Cuántas escaleras conducen a la cima de la torre?",
          de: "Wie viele Treppen führen zur Spitze des Turms?",
          nl: "Hoeveel trappen leiden naar de top van de toren?"
        },
        options: [
          { en: "1,665 steps to the top platform", es: "1,665 escalones hasta la plataforma superior", de: "1.665 Stufen zur obersten Plattform", nl: "1.665 treden naar het bovenste platform" },
          { en: "1,000 steps to the top platform", es: "1,000 escalones hasta la plataforma superior", de: "1.000 Stufen zur obersten Plattform", nl: "1.000 treden naar het bovenste platform" },
          { en: "2,500 steps to the top platform", es: "2,500 escalones hasta la plataforma superior", de: "2.500 Stufen zur obersten Plattform", nl: "2.500 treden naar het bovenste platform" },
          { en: "500 steps to the top platform", es: "500 escalones hasta la plataforma superior", de: "500 Stufen zur obersten Plattform", nl: "500 treden naar het bovenste platform" }
        ],
        correct: 0,
        explanation: {
          en: "There are 1,665 steps from ground level to the top platform, though visitors can only climb stairs to the second platform.",
          es: "Hay 1,665 escalones desde el nivel del suelo hasta la plataforma superior, aunque los visitantes solo pueden subir escaleras hasta la segunda plataforma.",
          de: "Es gibt 1.665 Stufen vom Bodenniveau zur obersten Plattform, obwohl Besucher nur bis zur zweiten Plattform Treppen steigen können.",
          nl: "Er zijn 1.665 treden van grondniveau naar het bovenste platform, hoewel bezoekers alleen trappen kunnen beklimmen tot het tweede platform."
        }
      },
      {
        question: {
          en: "What feature was added to the top in 1957?",
          es: "¿Qué característica se añadió a la cima en 1957?",
          de: "Welches Merkmal wurde 1957 an der Spitze hinzugefügt?",
          nl: "Welke functie werd in 1957 aan de top toegevoegd?"
        },
        options: [
          { en: "Broadcasting antenna", es: "Antena de transmisión", de: "Sendeantenne", nl: "Zendantenne" },
          { en: "Weather station", es: "Estación meteorológica", de: "Wetterstation", nl: "Weerstation" },
          { en: "Restaurant", es: "Restaurante", de: "Restaurant", nl: "Restaurant" },
          { en: "Observatory", es: "Observatorio", de: "Observatorium", nl: "Observatorium" }
        ],
        correct: 0,
        explanation: {
          en: "A broadcasting antenna was added in 1957, increasing the tower's total height and making it essential for radio and television transmission.",
          es: "Se añadió una antena de transmisión en 1957, aumentando la altura total de la torre y haciéndola esencial para la transmisión de radio y televisión.",
          de: "Eine Sendeantenne wurde 1957 hinzugefügt, wodurch die Gesamthöhe des Turms erhöht und er für Radio- und Fernsehübertragungen unverzichtbar wurde.",
          nl: "Een zendantenne werd in 1957 toegevoegd, waardoor de totale hoogte van de toren toenam en hij essentieel werd voor radio- en televisie-uitzendingen."
        }
      },
      {
        question: {
          en: "How does the tower's height change with temperature?",
          es: "¿Cómo cambia la altura de la torre con la temperatura?",
          de: "Wie ändert sich die Höhe des Turms mit der Temperatur?",
          nl: "Hoe verandert de hoogte van de toren met de temperatuur?"
        },
        options: [
          { en: "Can vary up to 15 cm due to thermal expansion", es: "Puede variar hasta 15 cm debido a la expansión térmica", de: "Kann durch Wärmeausdehnung bis zu 15 cm variieren", nl: "Kan tot 15 cm variëren door thermische uitzetting" },
          { en: "Remains exactly the same", es: "Permanece exactamente igual", de: "Bleibt genau gleich", nl: "Blijft precies hetzelfde" },
          { en: "Can vary up to 1 meter", es: "Puede variar hasta 1 metro", de: "Kann bis zu 1 Meter variieren", nl: "Kan tot 1 meter variëren" },
          { en: "Decreases in heat", es: "Disminuye con el calor", de: "Nimmt bei Hitze ab", nl: "Neemt af bij hitte" }
        ],
        correct: 0,
        explanation: {
          en: "The iron structure expands in heat and contracts in cold, causing the tower's height to vary by up to 15 centimeters.",
          es: "La estructura de hierro se expande con el calor y se contrae con el frío, causando que la altura de la torre varíe hasta 15 centímetros.",
          de: "Die Eisenstruktur dehnt sich bei Hitze aus und zieht sich bei Kälte zusammen, wodurch die Höhe des Turms um bis zu 15 Zentimeter variiert.",
          nl: "De ijzeren structuur zet uit bij hitte en krimpt bij koude, waardoor de hoogte van de toren tot 15 centimeter kan variëren."
        }
      },
      {
        question: {
          en: "What precision was achieved in the tower's construction?",
          es: "¿Qué precisión se logró en la construcción de la torre?",
          de: "Welche Präzision wurde beim Bau des Turms erreicht?",
          nl: "Welke precisie werd bereikt bij de bouw van de toren?"
        },
        options: [
          { en: "Parts fit within millimeters", es: "Las piezas encajan dentro de milímetros", de: "Teile passen auf Millimeter genau", nl: "Onderdelen passen binnen millimeters" },
          { en: "Parts required extensive on-site modification", es: "Las piezas requirieron modificación extensa en el sitio", de: "Teile erforderten umfangreiche Anpassungen vor Ort", nl: "Onderdelen vereisten uitgebreide aanpassingen ter plaatse" },
          { en: "Only approximate measurements were used", es: "Solo se usaron medidas aproximadas", de: "Nur ungefähre Messungen wurden verwendet", nl: "Alleen geschatte metingen werden gebruikt" },
          { en: "Parts fit within several centimeters", es: "Las piezas encajan dentro de varios centímetros", de: "Teile passen auf mehrere Zentimeter genau", nl: "Onderdelen passen binnen enkele centimeters" }
        ],
        correct: 0,
        explanation: {
          en: "The prefabricated parts were manufactured with such precision that they fit together with only millimeters of tolerance, remarkable for the era.",
          es: "Las piezas prefabricadas se fabricaron con tal precisión que encajaban con solo milímetros de tolerancia, notable para la época.",
          de: "Die vorgefertigten Teile wurden mit solcher Präzision hergestellt, dass sie mit nur Millimetern Toleranz zusammenpassten, bemerkenswert für die Zeit.",
          nl: "De geprefabriceerde onderdelen werden met zo'n precisie vervaardigd dat ze met slechts millimeters tolerantie op elkaar pasten, opmerkelijk voor die tijd."
        }
      },
      {
        question: {
          en: "What foundation system supports the tower?",
          es: "¿Qué sistema de cimentación soporta la torre?",
          de: "Welches Fundamentsystem trägt den Turm?",
          nl: "Welk funderingssysteem ondersteunt de toren?"
        },
        options: [
          { en: "Concrete foundations with hydraulic jacks", es: "Cimientos de concreto con gatos hidráulicos", de: "Betonfundamente mit hydraulischen Hebern", nl: "Betonnen funderingen met hydraulische vijzels" },
          { en: "Wooden piles only", es: "Solo pilotes de madera", de: "Nur Holzpfähle", nl: "Alleen houten palen" },
          { en: "Floating foundation", es: "Cimentación flotante", de: "Schwimmendes Fundament", nl: "Drijvende fundering" },
          { en: "No foundation, just surface placement", es: "Sin cimentación, solo colocación superficial", de: "Kein Fundament, nur Oberflächenplatzierung", nl: "Geen fundering, alleen oppervlakteplaatsing" }
        ],
        correct: 0,
        explanation: {
          en: "Each leg sits on concrete foundations that were positioned using hydraulic jacks to ensure perfect alignment despite uneven ground.",
          es: "Cada pierna se asienta sobre cimientos de concreto que se posicionaron usando gatos hidráulicos para asegurar una alineación perfecta a pesar del terreno irregular.",
          de: "Jedes Bein ruht auf Betonfundamenten, die mithilfe hydraulischer Heber positioniert wurden, um trotz unebenen Bodens eine perfekte Ausrichtung zu gewährleisten.",
          nl: "Elk been rust op betonnen funderingen die met hydraulische vijzels werden gepositioneerd om perfecte uitlijning te garanderen ondanks ongelijke grond."
        }
      },
      {
        question: {
          en: "What safety feature protects the tower from lightning?",
          es: "¿Qué característica de seguridad protege la torre de los rayos?",
          de: "Welches Sicherheitsmerkmal schützt den Turm vor Blitzen?",
          nl: "Welke veiligheidsfunctie beschermt de toren tegen bliksem?"
        },
        options: [
          { en: "Lightning conductors connected to ground", es: "Conductores de rayos conectados a tierra", de: "Blitzableiter mit Erdung verbunden", nl: "Bliksemafleiders verbonden met de grond" },
          { en: "Rubber insulation", es: "Aislamiento de goma", de: "Gummiisolierung", nl: "Rubberen isolatie" },
          { en: "No protection needed", es: "No se necesita protección", de: "Kein Schutz erforderlich", nl: "Geen bescherming nodig" },
          { en: "Plastic coating", es: "Recubrimiento de plástico", de: "Kunststoffbeschichtung", nl: "Plastic coating" }
        ],
        correct: 0,
        explanation: {
          en: "The tower has lightning conductors that safely direct electrical charges to the ground, protecting the structure and visitors from lightning strikes.",
          es: "La torre tiene conductores de rayos que dirigen de manera segura las cargas eléctricas a tierra, protegiendo la estructura y los visitantes de las descargas de rayos.",
          de: "Der Turm hat Blitzableiter, die elektrische Ladungen sicher zur Erde leiten und so die Struktur und Besucher vor Blitzschlägen schützen.",
          nl: "De toren heeft bliksemafleiders die elektrische ladingen veilig naar de grond leiden, waardoor de structuur en bezoekers worden beschermd tegen blikseminslagen."
        }
      },
      {
        question: {
          en: "How many elevators serve the tower today?",
          es: "¿Cuántos ascensores sirven la torre hoy?",
          de: "Wie viele Aufzüge bedienen heute den Turm?",
          nl: "Hoeveel liften bedienen de toren vandaag?"
        },
        options: [
          { en: "5 elevators", es: "5 ascensores", de: "5 Aufzüge", nl: "5 liften" },
          { en: "2 elevators", es: "2 ascensores", de: "2 Aufzüge", nl: "2 liften" },
          { en: "10 elevators", es: "10 ascensores", de: "10 Aufzüge", nl: "10 liften" },
          { en: "3 elevators", es: "3 ascensores", de: "3 Aufzüge", nl: "3 liften" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower currently has five elevators: two in the east and west pillars, and one double-deck elevator serving the summit.",
          es: "La Torre Eiffel actualmente tiene cinco ascensores: dos en los pilares este y oeste, y un ascensor de doble cubierta que sirve a la cumbre.",
          de: "Der Eiffelturm hat derzeit fünf Aufzüge: zwei in den Ost- und Westpfeilern und einen Doppeldeckeraufzug zur Spitze.",
          nl: "De Eiffeltoren heeft momenteel vijf liften: twee in de oostelijke en westelijke pilaren, en één dubbeldeks lift die de top bedient."
        }
      },
      {
        question: {
          en: "What unique structural challenge did the tower's height present?",
          es: "¿Qué desafío estructural único presentó la altura de la torre?",
          de: "Welche einzigartige strukturelle Herausforderung stellte die Höhe des Turms dar?",
          nl: "Welke unieke structurele uitdaging presenteerde de hoogte van de toren?"
        },
        options: [
          { en: "Maintaining vertical alignment during construction", es: "Mantener la alineación vertical durante la construcción", de: "Aufrechterhaltung der vertikalen Ausrichtung während des Baus", nl: "Verticale uitlijning behouden tijdens de bouw" },
          { en: "Finding enough workers", es: "Encontrar suficientes trabajadores", de: "Genügend Arbeiter finden", nl: "Genoeg arbeiders vinden" },
          { en: "Obtaining materials", es: "Obtener materiales", de: "Materialien beschaffen", nl: "Materialen verkrijgen" },
          { en: "Getting building permits", es: "Obtener permisos de construcción", de: "Baugenehmigungen erhalten", nl: "Bouwvergunningen verkrijgen" }
        ],
        correct: 0,
        explanation: {
          en: "Maintaining perfect vertical alignment as the structure rose to unprecedented heights required innovative scaffolding and precise engineering calculations.",
          es: "Mantener una alineación vertical perfecta a medida que la estructura se elevaba a alturas sin precedentes requería andamios innovadores y cálculos de ingeniería precisos.",
          de: "Die Aufrechterhaltung einer perfekten vertikalen Ausrichtung, während die Struktur auf beispiellose Höhen stieg, erforderte innovative Gerüste und präzise Ingenieurberechnungen.",
          nl: "Het behouden van perfecte verticale uitlijning terwijl de structuur tot ongekende hoogtes steeg, vereiste innovatieve steigers en precieze technische berekeningen."
        }
      },
      {
        question: {
          en: "What decorative elements were added to make the tower more appealing?",
          es: "¿Qué elementos decorativos se añadieron para hacer la torre más atractiva?",
          de: "Welche dekorativen Elemente wurden hinzugefügt, um den Turm ansprechender zu machen?",
          nl: "Welke decoratieve elementen werden toegevoegd om de toren aantrekkelijker te maken?"
        },
        options: [
          { en: "Ornamental arches and Art Nouveau ironwork", es: "Arcos ornamentales y herrería Art Nouveau", de: "Ornamentale Bögen und Jugendstil-Eisenarbeiten", nl: "Ornamentele bogen en Art Nouveau ijzerwerk" },
          { en: "Marble statues", es: "Estatuas de mármol", de: "Marmorstatuen", nl: "Marmeren beelden" },
          { en: "Gold leaf coating", es: "Recubrimiento de pan de oro", de: "Blattgoldvergoldung", nl: "Bladgoud coating" },
          { en: "Stained glass windows", es: "Ventanas de vidrio emplomado", de: "Glasmalereien", nl: "Gebrandschilderde ramen" }
        ],
        correct: 0,
        explanation: {
          en: "Stephen Sauvestre added ornamental arches at the base and Art Nouveau style ironwork decorations to soften the industrial appearance.",
          es: "Stephen Sauvestre añadió arcos ornamentales en la base y decoraciones de herrería estilo Art Nouveau para suavizar la apariencia industrial.",
          de: "Stephen Sauvestre fügte ornamentale Bögen an der Basis und Jugendstil-Eisenarbeiten hinzu, um das industrielle Aussehen zu mildern.",
          nl: "Stephen Sauvestre voegde ornamentele bogen aan de basis en Art Nouveau-stijl ijzerwerk decoraties toe om het industriële uiterlijk te verzachten."
        }
      },
      {
        question: {
          en: "What viewing capacity does the second platform have?",
          es: "¿Qué capacidad de visualización tiene la segunda plataforma?",
          de: "Welche Besucherkapazität hat die zweite Plattform?",
          nl: "Welke kijkcapaciteit heeft het tweede platform?"
        },
        options: [
          { en: "Can accommodate about 1,600 people", es: "Puede acomodar aproximadamente 1,600 personas", de: "Kann etwa 1.600 Personen aufnehmen", nl: "Kan ongeveer 1.600 mensen opnemen" },
          { en: "Can accommodate about 500 people", es: "Puede acomodar aproximadamente 500 personas", de: "Kann etwa 500 Personen aufnehmen", nl: "Kan ongeveer 500 mensen opnemen" },
          { en: "Can accommodate about 5,000 people", es: "Puede acomodar aproximadamente 5,000 personas", de: "Kann etwa 5.000 Personen aufnehmen", nl: "Kan ongeveer 5.000 mensen opnemen" },
          { en: "Can accommodate about 100 people", es: "Puede acomodar aproximadamente 100 personas", de: "Kann etwa 100 Personen aufnehmen", nl: "Kan ongeveer 100 mensen opnemen" }
        ],
        correct: 0,
        explanation: {
          en: "The second platform, located at 115 meters, can accommodate approximately 1,600 visitors at once and offers panoramic views of Paris.",
          es: "La segunda plataforma, ubicada a 115 metros, puede acomodar aproximadamente 1,600 visitantes a la vez y ofrece vistas panorámicas de París.",
          de: "Die zweite Plattform auf 115 Metern kann etwa 1.600 Besucher gleichzeitig aufnehmen und bietet Panoramablicke auf Paris.",
          nl: "Het tweede platform, gelegen op 115 meter, kan ongeveer 1.600 bezoekers tegelijk opnemen en biedt panoramische uitzichten op Parijs."
        }
      },
      {
        question: {
          en: "How does the tower sway in strong winds?",
          es: "¿Cómo se balancea la torre en vientos fuertes?",
          de: "Wie schwankt der Turm bei starkem Wind?",
          nl: "Hoe zwaait de toren bij harde wind?"
        },
        options: [
          { en: "Maximum sway of about 12 cm at the top", es: "Balanceo máximo de aproximadamente 12 cm en la cima", de: "Maximales Schwanken von etwa 12 cm an der Spitze", nl: "Maximale zwaai van ongeveer 12 cm aan de top" },
          { en: "No movement at all", es: "Ningún movimiento en absoluto", de: "Überhaupt keine Bewegung", nl: "Helemaal geen beweging" },
          { en: "Maximum sway of 1 meter", es: "Balanceo máximo de 1 metro", de: "Maximales Schwanken von 1 Meter", nl: "Maximale zwaai van 1 meter" },
          { en: "Maximum sway of 50 cm", es: "Balanceo máximo de 50 cm", de: "Maximales Schwanken von 50 cm", nl: "Maximale zwaai van 50 cm" }
        ],
        correct: 0,
        explanation: {
          en: "In strong winds, the top of the Eiffel Tower can sway up to 12 centimeters, which is normal and accounted for in the design.",
          es: "En vientos fuertes, la cima de la Torre Eiffel puede balancearse hasta 12 centímetros, lo cual es normal y se tuvo en cuenta en el diseño.",
          de: "Bei starkem Wind kann die Spitze des Eiffelturms bis zu 12 Zentimeter schwanken, was normal ist und im Design berücksichtigt wurde.",
          nl: "Bij harde wind kan de top van de Eiffeltoren tot 12 centimeter zwaaien, wat normaal is en in het ontwerp is meegenomen."
        }
      }
    ]
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  }
  if (typeof window !== 'undefined') {
    window.level3Data = level3;
  }
  return level3;
})();
