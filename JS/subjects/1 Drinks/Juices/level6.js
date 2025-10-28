// Quiz Level 6: Drinken - Sappen (Juice Types & Varieties)
(function() {
  const level6 = {
    name: {
      en: "Juice Types & Varieties",
      es: "Tipos y Variedades de Jugos",
      de: "Saftarten und Sorten",
      nl: "Saptypes en Variëteiten"
    },
    questions: [
      {
        question: {
          en: "What is the difference between juice and nectar?",
          es: "¿Cuál es la diferencia entre jugo y néctar?",
          de: "Was ist der Unterschied zwischen Saft und Nektar?",
          nl: "Wat is het verschil tussen sap en nectar?"
        },
        options: [
          { en: "Nectar contains less fruit and more water than juice", es: "El néctar contiene menos fruta y más agua que el jugo", de: "Nektar enthält weniger Frucht und mehr Wasser als Saft", nl: "Nectar bevat minder fruit en meer water dan sap" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau dasselbe", nl: "Ze zijn precies hetzelfde" },
          { en: "Nectar is always artificially flavored", es: "El néctar siempre tiene sabor artificial", de: "Nektar ist immer künstlich aromatisiert", nl: "Nectar is altijd kunstmatig gearomatiseerd" },
          { en: "Nectar contains more vitamins", es: "El néctar contiene más vitaminas", de: "Nektar enthält mehr Vitamine", nl: "Nectar bevat meer vitamines" }
        ],
        correct: 0,
        explanation: {
          en: "Nectar typically contains 25-50% fruit content with added water and sugar, while pure juice should contain 100% fruit content.",
          es: "El néctar típicamente contiene 25-50% contenido de fruta con agua y azúcar añadidos, mientras que el jugo puro debe contener 100% contenido de fruta.",
          de: "Nektar enthält typisch 25-50% Fruchtgehalt mit zugesetztem Wasser und Zucker, während reiner Saft 100% Fruchtgehalt enthalten sollte.",
          nl: "Nectar bevat typisch 25-50% fruitgehalte met toegevoegd water en suiker, terwijl puur sap 100% fruitgehalte zou moeten bevatten."
        }
      },
      {
        question: {
          en: "Which country is the world's largest producer of orange juice?",
          es: "¿Qué país es el mayor productor mundial de jugo de naranja?",
          de: "Welches Land ist der weltgrößte Produzent von Orangensaft?",
          nl: "Welk land is 's werelds grootste producent van sinaasappelsap?"
        },
        options: [
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" }
        ],
        correct: 0,
        explanation: {
          en: "Brazil produces approximately 60% of the world's orange juice, primarily from São Paulo state.",
          es: "Brasil produce aproximadamente el 60% del jugo de naranja mundial, principalmente del estado de São Paulo.",
          de: "Brasilien produziert etwa 60% des weltweiten Orangensafts, hauptsächlich aus dem Bundesstaat São Paulo.",
          nl: "Brazilië produceert ongeveer 60% van 's werelds sinaasappelsap, voornamelijk uit de staat São Paulo."
        }
      },
      {
        question: {
          en: "What does 'HPP' mean in juice processing?",
          es: "¿Qué significa 'HPP' en el procesamiento de jugos?",
          de: "Was bedeutet 'HPP' in der Saftverarbeitung?",
          nl: "Wat betekent 'HPP' in sapverwerking?"
        },
        options: [
          { en: "High Pressure Processing", es: "Procesamiento de Alta Presión", de: "Hochdruckverarbeitung", nl: "Hoge Druk Verwerking" },
          { en: "Heat Pasteurization Process", es: "Proceso de Pasteurización por Calor", de: "Wärmepasteurisierungsverfahren", nl: "Warmte Pasteurisatie Proces" },
          { en: "Healthy Product Processing", es: "Procesamiento de Productos Saludables", de: "Gesunde Produktverarbeitung", nl: "Gezonde Product Verwerking" },
          { en: "Home Preparation Process", es: "Proceso de Preparación Casera", de: "Hausgemachtes Zubereitungsverfahren", nl: "Thuis Bereidingsproces" }
        ],
        correct: 0,
        explanation: {
          en: "HPP (High Pressure Processing) uses intense pressure instead of heat to kill bacteria and extend shelf life while preserving nutrients and fresh taste.",
          es: "HPP (Procesamiento de Alta Presión) usa presión intensa en lugar de calor para matar bacterias y extender vida útil mientras preserva nutrientes y sabor fresco.",
          de: "HPP (Hochdruckverarbeitung) verwendet intensiven Druck statt Hitze, um Bakterien abzutöten und die Haltbarkeit zu verlängern, während Nährstoffe und frischer Geschmack erhalten bleiben.",
          nl: "HPP (Hoge Druk Verwerking) gebruikt intense druk in plaats van warmte om bacteriën te doden en houdbaarheid te verlengen terwijl voedingsstoffen en verse smaak behouden blijven."
        }
      },
      {
        question: {
          en: "What are functional juices?",
          es: "¿Qué son los jugos funcionales?",
          de: "Was sind funktionelle Säfte?",
          nl: "Wat zijn functionele sappen?"
        },
        options: [
          { en: "Juices with added health benefits beyond basic nutrition", es: "Jugos con beneficios adicionales para la salud más allá de la nutrición básica", de: "Säfte mit zusätzlichen gesundheitlichen Vorteilen über die Grundernährung hinaus", nl: "Sappen met toegevoegde gezondheidsvoordelen voorbij basisvoeding" },
          { en: "Juices that work better than others", es: "Jugos que funcionan mejor que otros", de: "Säfte, die besser funktionieren als andere", nl: "Sappen die beter werken dan andere" },
          { en: "Artificial juice substitutes", es: "Sustitutos artificiales de jugos", de: "Künstliche Saftersatzstoffe", nl: "Kunstmatige sapvervangers" },
          { en: "Juices for athletic performance only", es: "Jugos solo para rendimiento atlético", de: "Säfte nur für sportliche Leistung", nl: "Sappen alleen voor atletische prestaties" }
        ],
        correct: 0,
        explanation: {
          en: "Functional juices are enhanced with additional nutrients like probiotics, omega-3s, antioxidants, or vitamins to provide specific health benefits beyond normal nutrition.",
          es: "Los jugos funcionales están enriquecidos con nutrientes adicionales como probióticos, omega-3, antioxidantes o vitaminas para proporcionar beneficios específicos para la salud más allá de la nutrición normal.",
          de: "Funktionelle Säfte sind mit zusätzlichen Nährstoffen wie Probiotika, Omega-3-Fettsäuren, Antioxidantien oder Vitaminen angereichert, um spezifische gesundheitliche Vorteile über die normale Ernährung hinaus zu bieten.",
          nl: "Functionele sappen zijn verrijkt met extra voedingsstoffen zoals probiotica, omega-3's, antioxidanten, of vitamines om specifieke gezondheidsvoordelen te bieden voorbij normale voeding."
        }
      },
      {
        question: {
          en: "Which type of apple is most commonly used for commercial apple juice?",
          es: "¿Qué tipo de manzana se usa más comúnmente para jugo de manzana comercial?",
          de: "Welcher Apfeltyp wird am häufigsten für kommerziellen Apfelsaft verwendet?",
          nl: "Welk type appel wordt het meest gebruikt voor commercieel appelsap?"
        },
        options: [
          { en: "A blend of different apple varieties", es: "Una mezcla de diferentes variedades de manzana", de: "Eine Mischung verschiedener Apfelsorten", nl: "Een mix van verschillende appelvariëteiten" },
          { en: "Only Red Delicious apples", es: "Solo manzanas Red Delicious", de: "Nur Red Delicious Äpfel", nl: "Alleen Red Delicious appels" },
          { en: "Only Granny Smith apples", es: "Solo manzanas Granny Smith", de: "Nur Granny Smith Äpfel", nl: "Alleen Granny Smith appels" },
          { en: "Only Golden Delicious apples", es: "Solo manzanas Golden Delicious", de: "Nur Golden Delicious Äpfel", nl: "Alleen Golden Delicious appels" }
        ],
        correct: 0,
        explanation: {
          en: "Commercial apple juice typically uses a blend of different apple varieties to achieve consistent flavor, sweetness, and color throughout the year.",
          es: "El jugo de manzana comercial típicamente usa una mezcla de diferentes variedades de manzana para lograr sabor, dulzura y color consistentes durante todo el año.",
          de: "Kommerzieller Apfelsaft verwendet typisch eine Mischung verschiedener Apfelsorten, um ganzjährig konsistenten Geschmack, Süße und Farbe zu erreichen.",
          nl: "Commercieel appelsap gebruikt typisch een mix van verschillende appelvariëteiten om het hele jaar door consistente smaak, zoetheid en kleur te bereiken."
        }
      },
      {
        question: {
          en: "What is 'single-strength' juice?",
          es: "¿Qué es jugo de 'concentración simple'?",
          de: "Was ist 'einfachkonzentrierter' Saft?",
          nl: "Wat is 'enkele sterkte' sap?"
        },
        options: [
          { en: "Juice that has not been concentrated", es: "Jugo que no ha sido concentrado", de: "Saft, der nicht konzentriert wurde", nl: "Sap dat niet geconcentreerd is" },
          { en: "Juice with extra vitamins added", es: "Jugo con vitaminas extra añadidas", de: "Saft mit zugesetzten extra Vitaminen", nl: "Sap met extra vitamines toegevoegd" },
          { en: "Juice from one type of fruit only", es: "Jugo de solo un tipo de fruta", de: "Saft aus nur einer Fruchtart", nl: "Sap van slechts één fruittype" },
          { en: "The strongest flavored juice", es: "El jugo de sabor más fuerte", de: "Der geschmacksintensivste Saft", nl: "Het sterkst gearomatiseerde sap" }
        ],
        correct: 0,
        explanation: {
          en: "Single-strength juice is fresh juice that hasn't been concentrated and reconstituted, maintaining its original water content and natural consistency.",
          es: "El jugo de concentración simple es jugo fresco que no ha sido concentrado y reconstituido, manteniendo su contenido de agua original y consistencia natural.",
          de: "Einfachkonzentrierter Saft ist frischer Saft, der nicht konzentriert und rekonstituiert wurde, und seinen ursprünglichen Wassergehalt und natürliche Konsistenz beibehält.",
          nl: "Enkele sterkte sap is vers sap dat niet geconcentreerd en gereconstitueerd is, waarbij het oorspronkelijke watergehalte en natuurlijke consistentie behouden blijft."
        }
      },
      {
        question: {
          en: "Why are some juices fortified with calcium?",
          es: "¿Por qué algunos jugos están fortificados con calcio?",
          de: "Warum sind manche Säfte mit Calcium angereichert?",
          nl: "Waarom zijn sommige sappen verrijkt met calcium?"
        },
        options: [
          { en: "To provide bone health benefits", es: "Para proporcionar beneficios para la salud ósea", de: "Um Knochengesundheitsvorteile zu bieten", nl: "Om voordelen voor botgezondheid te bieden" },
          { en: "To make juice taste better", es: "Para hacer que el jugo sepa mejor", de: "Um den Saft besser schmecken zu lassen", nl: "Om sap beter te laten smaken" },
          { en: "To preserve juice longer", es: "Para preservar el jugo más tiempo", de: "Um Saft länger zu konservieren", nl: "Om sap langer te bewaren" },
          { en: "To change the color", es: "Para cambiar el color", de: "Um die Farbe zu ändern", nl: "Om de kleur te veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Calcium fortification helps people meet their daily calcium needs for strong bones and teeth, especially since natural fruit juices contain little calcium.",
          es: "La fortificación con calcio ayuda a las personas a satisfacer sus necesidades diarias de calcio para huesos y dientes fuertes, especialmente ya que los jugos de frutas naturales contienen poco calcio.",
          de: "Calcium-Anreicherung hilft Menschen, ihren täglichen Calciumbedarf für starke Knochen und Zähne zu decken, besonders da natürliche Fruchtsäfte wenig Calcium enthalten.",
          nl: "Calcium verrijking helpt mensen hun dagelijkse calcium behoeften te vervullen voor sterke botten en tanden, vooral omdat natuurlijke vruchtensappen weinig calcium bevatten."
        }
      },
      {
        question: {
          en: "What is cloudy apple juice?",
          es: "¿Qué es el jugo de manzana turbio?",
          de: "Was ist trüber Apfelsaft?",
          nl: "Wat is troebel appelsap?"
        },
        options: [
          { en: "Apple juice that retains natural pulp and fiber", es: "Jugo de manzana que retiene pulpa y fibra naturales", de: "Apfelsaft, der natürliches Fruchtfleisch und Ballaststoffe behält", nl: "Appelsap dat natuurlijke pulp en vezels behoudt" },
          { en: "Apple juice that has gone bad", es: "Jugo de manzana que se ha echado a perder", de: "Apfelsaft, der schlecht geworden ist", nl: "Appelsap dat bedorven is" },
          { en: "Apple juice with artificial cloudiness", es: "Jugo de manzana con turbidez artificial", de: "Apfelsaft mit künstlicher Trübung", nl: "Appelsap met kunstmatige troebeling" },
          { en: "Apple juice stored incorrectly", es: "Jugo de manzana almacenado incorrectamente", de: "Apfelsaft, der falsch gelagert wurde", nl: "Appelsap verkeerd opgeslagen" }
        ],
        correct: 0,
        explanation: {
          en: "Cloudy apple juice is unfiltered, retaining natural particles, pulp, and fiber that give it a cloudy appearance and often more complex flavor.",
          es: "El jugo de manzana turbio no está filtrado, reteniendo partículas naturales, pulpa y fibra que le dan una apariencia turbia y a menudo sabor más complejo.",
          de: "Trüber Apfelsaft ist ungefiltert und behält natürliche Partikel, Fruchtfleisch und Ballaststoffe, die ihm ein trübes Aussehen und oft komplexeren Geschmack verleihen.",
          nl: "Troebel appelsap is ongefilterd, waarbij natuurlijke deeltjes, pulp en vezels behouden blijven die het een troebel uiterlijk en vaak complexere smaak geven."
        }
      },
      {
        question: {
          en: "What seasonal factor most affects juice pricing?",
          es: "¿Qué factor estacional afecta más el precio de los jugos?",
          de: "Welcher saisonale Faktor beeinflusst die Saftpreise am meisten?",
          nl: "Welke seizoensfactor beïnvloedt sapprijzen het meest?"
        },
        options: [
          { en: "Fruit harvest seasons and crop yields", es: "Temporadas de cosecha de frutas y rendimientos de cultivos", de: "Fruchterntezeiten und Ernteerträge", nl: "Fruitoogst seizoenen en gewasopbrengsten" },
          { en: "Summer vacation patterns", es: "Patrones de vacaciones de verano", de: "Sommerurlaubsmuster", nl: "Zomervakantie patronen" },
          { en: "School calendar schedules", es: "Horarios del calendario escolar", de: "Schulkalender-Zeitpläne", nl: "Schoolkalender schema's" },
          { en: "Holiday shopping seasons", es: "Temporadas de compras navideñas", de: "Feiertagseinkaufszeiten", nl: "Feestdagen winkelseizoenen" }
        ],
        correct: 0,
        explanation: {
          en: "Juice prices are heavily influenced by fruit harvest seasons and crop yields. Poor harvests or off-seasons can significantly increase raw material costs.",
          es: "Los precios de los jugos están fuertemente influenciados por las temporadas de cosecha de frutas y rendimientos de cultivos. Malas cosechas o temporadas fuera pueden aumentar significativamente los costos de materias primas.",
          de: "Saftpreise werden stark von Fruchterntezeiten und Ernteerträgen beeinflusst. Schlechte Ernten oder Nebensaisons können die Rohstoffkosten erheblich erhöhen.",
          nl: "Sapprijzen worden sterk beïnvloed door fruitoogst seizoenen en gewasopbrengsten. Slechte oogsten of buiten-seizoenen kunnen grondstofkosten aanzienlijk verhogen."
        }
      },
      {
        question: {
          en: "What is the difference between filtered and unfiltered juice?",
          es: "¿Cuál es la diferencia entre jugo filtrado y no filtrado?",
          de: "Was ist der Unterschied zwischen gefiltertem und ungefiltertem Saft?",
          nl: "Wat is het verschil tussen gefilterd en ongefilterd sap?"
        },
        options: [
          { en: "Filtered juice is clear, unfiltered contains particles and pulp", es: "El jugo filtrado es claro, el no filtrado contiene partículas y pulpa", de: "Gefilterter Saft ist klar, ungefilterter enthält Partikel und Fruchtfleisch", nl: "Gefilterd sap is helder, ongefilterd bevat deeltjes en pulp" },
          { en: "Filtered juice has more vitamins", es: "El jugo filtrado tiene más vitaminas", de: "Gefilterter Saft hat mehr Vitamine", nl: "Gefilterd sap heeft meer vitamines" },
          { en: "They taste exactly the same", es: "Saben exactamente igual", de: "Sie schmecken genau gleich", nl: "Ze smaken precies hetzelfde" },
          { en: "Unfiltered juice lasts longer", es: "El jugo no filtrado dura más", de: "Ungefilterter Saft hält länger", nl: "Ongefilterd sap blijft langer goed" }
        ],
        correct: 0,
        explanation: {
          en: "Filtering removes pulp, particles, and sediment to create clear juice, while unfiltered juice retains these natural components for different texture and often more fiber.",
          es: "El filtrado remueve pulpa, partículas y sedimento para crear jugo claro, mientras que el jugo no filtrado retiene estos componentes naturales para diferente textura y a menudo más fibra.",
          de: "Filtern entfernt Fruchtfleisch, Partikel und Sediment, um klaren Saft zu erzeugen, während ungefilterter Saft diese natürlichen Komponenten für andere Textur und oft mehr Ballaststoffe behält.",
          nl: "Filteren verwijdert pulp, deeltjes en sediment om helder sap te creëren, terwijl ongefilterd sap deze natuurlijke componenten behoudt voor verschillende textuur en vaak meer vezels."
        }
      },
      {
        question: {
          en: "What is 'aseptic processing' in juice production?",
          es: "¿Qué es el 'procesamiento aséptico' en la producción de jugos?",
          de: "Was ist 'aseptische Verarbeitung' in der Saftproduktion?",
          nl: "Wat is 'aseptische verwerking' in sapproductie?"
        },
        options: [
          { en: "Sterilizing juice and packaging separately, then filling in sterile environment", es: "Esterilizar jugo y empaque por separado, luego llenar en ambiente estéril", de: "Saft und Verpackung separat sterilisieren, dann in steriler Umgebung abfüllen", nl: "Sap en verpakking apart steriliseren, dan vullen in steriele omgeving" },
          { en: "Adding preservatives to prevent spoilage", es: "Añadir conservantes para prevenir el deterioro", de: "Konservierungsstoffe hinzufügen, um Verderb zu verhindern", nl: "Conserveermiddelen toevoegen om bederf te voorkomen" },
          { en: "Refrigerating juice immediately after extraction", es: "Refrigerar jugo inmediatamente después de la extracción", de: "Saft unmittelbar nach der Extraktion kühlen", nl: "Sap onmiddellijk na extractie koelen" },
          { en: "Using only organic ingredients", es: "Usar solo ingredientes orgánicos", de: "Nur biologische Zutaten verwenden", nl: "Alleen biologische ingrediënten gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Aseptic processing sterilizes juice and packaging separately using heat, then fills the sterile product into sterile containers in a sterile environment, allowing shelf-stable juice without refrigeration.",
          es: "El procesamiento aséptico esteriliza jugo y empaque por separado usando calor, luego llena el producto estéril en contenedores estériles en un ambiente estéril, permitiendo jugo estable en almacenamiento sin refrigeración.",
          de: "Aseptische Verarbeitung sterilisiert Saft und Verpackung separat mit Hitze, füllt dann das sterile Produkt in sterile Behälter in einer sterilen Umgebung, was haltbaren Saft ohne Kühlung ermöglicht.",
          nl: "Aseptische verwerking steriliseert sap en verpakking apart met warmte, vult dan het steriele product in steriele containers in een steriele omgeving, waardoor houdbaar sap zonder koeling mogelijk is."
        }
      },
      {
        question: {
          en: "What causes 'juice gelation' or unwanted thickening?",
          es: "¿Qué causa la 'gelificación del jugo' o el espesamiento no deseado?",
          de: "Was verursacht 'Saftgelierung' oder unerwünschte Verdickung?",
          nl: "Wat veroorzaakt 'sapgelering' of ongewenste verdikking?"
        },
        options: [
          { en: "Incomplete pectin breakdown combined with calcium and sugar", es: "Descomposición incompleta de pectina combinada con calcio y azúcar", de: "Unvollständiger Pektinabbau kombiniert mit Kalzium und Zucker", nl: "Onvolledige pectineafbraak gecombineerd met calcium en suiker" },
          { en: "Too much water evaporation", es: "Demasiada evaporación de agua", de: "Zu viel Wasserdampfung", nl: "Te veel waterverdamping" },
          { en: "Bacterial contamination only", es: "Solo contaminación bacteriana", de: "Nur bakterielle Kontamination", nl: "Alleen bacteriële besmetting" },
          { en: "Freezing and thawing cycles", es: "Ciclos de congelación y descongelación", de: "Gefrier- und Auftauzyklen", nl: "Vries- en ontdooicycli" }
        ],
        correct: 0,
        explanation: {
          en: "Juice gelation occurs when residual pectin interacts with calcium ions and sugar, forming a gel network. Proper enzymatic depectinization prevents this quality defect.",
          es: "La gelificación del jugo ocurre cuando la pectina residual interactúa con iones de calcio y azúcar, formando una red de gel. La despectinización enzimática adecuada previene este defecto de calidad.",
          de: "Saftgelierung tritt auf, wenn restliches Pektin mit Calciumionen und Zucker interagiert und ein Gelnetzwerk bildet. Eine ordnungsgemäße enzymatische Entpektinisierung verhindert diesen Qualitätsmangel.",
          nl: "Sapgelering treedt op wanneer resterende pectine interacteert met calciumionen en suiker, wat een gelnetwerk vormt. Goede enzymatische depectinisatie voorkomt dit kwaliteitsgebrek."
        }
      },
      {
        question: {
          en: "What is 'HTST pasteurization' in juice processing?",
          es: "¿Qué es la 'pasteurización HTST' en el procesamiento de jugos?",
          de: "Was ist 'HTST-Pasteurisierung' in der Saftverarbeitung?",
          nl: "Wat is 'HTST-pasteurisatie' in sapverwerking?"
        },
        options: [
          { en: "High Temperature Short Time (typically 72°C for 15 seconds)", es: "Alta Temperatura Tiempo Corto (típicamente 72°C por 15 segundos)", de: "Hohe Temperatur Kurze Zeit (typischerweise 72°C für 15 Sekunden)", nl: "Hoge Temperatuur Korte Tijd (typisch 72°C voor 15 seconden)" },
          { en: "Hot Thermal Sterilization Treatment", es: "Tratamiento de Esterilización Térmica Caliente", de: "Heiße Thermische Sterilisationsbehandlung", nl: "Hete Thermische Sterilisatiebehandeling" },
          { en: "Heated Tank Storage Technique", es: "Técnica de Almacenamiento en Tanque Calentado", de: "Beheizte Tanklagertechnik", nl: "Verwarmde Tank Opslagtechniek" },
          { en: "Home Temperature Simplified Treatment", es: "Tratamiento Simplificado a Temperatura del Hogar", de: "Heimtemperatur-Vereinfachte Behandlung", nl: "Thuistemperatuur Vereenvoudigde Behandeling" }
        ],
        correct: 0,
        explanation: {
          en: "HTST (High Temperature Short Time) pasteurization heats juice to 72°C for 15 seconds, killing pathogens while preserving flavor and nutrients better than longer heat treatments.",
          es: "La pasteurización HTST (Alta Temperatura Tiempo Corto) calienta el jugo a 72°C por 15 segundos, matando patógenos mientras preserva el sabor y nutrientes mejor que tratamientos térmicos más largos.",
          de: "HTST-Pasteurisierung (Hohe Temperatur Kurze Zeit) erhitzt Saft auf 72°C für 15 Sekunden, tötet Krankheitserreger, während Geschmack und Nährstoffe besser erhalten bleiben als bei längeren Wärmebehandlungen.",
          nl: "HTST (Hoge Temperatuur Korte Tijd) pasteurisatie verwarmt sap tot 72°C voor 15 seconden, doodt pathogenen terwijl smaak en voedingsstoffen beter behouden blijven dan bij langere warmtebehandelingen."
        }
      },
      {
        question: {
          en: "What is 'juice standardization'?",
          es: "¿Qué es la 'estandarización de jugos'?",
          de: "Was ist 'Saftstandardisierung'?",
          nl: "Wat is 'sapstandardisatie'?"
        },
        options: [
          { en: "Adjusting Brix, acidity, and flavor to achieve consistent product specifications", es: "Ajustar Brix, acidez y sabor para lograr especificaciones de producto consistentes", de: "Anpassung von Brix, Säure und Geschmack zur Erzielung konsistenter Produktspezifikationen", nl: "Brix, zuurgraad en smaak aanpassen om consistente productspecificaties te bereiken" },
          { en: "Making all juices taste the same", es: "Hacer que todos los jugos sepan igual", de: "Alle Säfte gleich schmecken lassen", nl: "Alle sappen dezelfde smaak geven" },
          { en: "Following government regulations only", es: "Solo seguir regulaciones gubernamentales", de: "Nur staatliche Vorschriften befolgen", nl: "Alleen overheidsvoorschriften volgen" },
          { en: "Using standard size bottles", es: "Usar botellas de tamaño estándar", de: "Standardgrößenflaschen verwenden", nl: "Standaard maat flessen gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Juice standardization blends different batches and adjusts sugar content (Brix), acidity, and flavor profile to meet consistent specifications, ensuring uniform product quality year-round despite natural fruit variations.",
          es: "La estandarización de jugos mezcla diferentes lotes y ajusta el contenido de azúcar (Brix), acidez y perfil de sabor para cumplir especificaciones consistentes, asegurando calidad de producto uniforme todo el año a pesar de variaciones naturales de frutas.",
          de: "Saftstandardisierung mischt verschiedene Chargen und passt Zuckergehalt (Brix), Säure und Geschmacksprofil an, um konsistente Spezifikationen zu erfüllen und ganzjährig gleichbleibende Produktqualität trotz natürlicher Fruchtvariationen zu gewährleisten.",
          nl: "Sapstandardisatie mengt verschillende batches en past suikergehalte (Brix), zuurgraad en smaakprofiel aan om consistente specificaties te halen, waardoor uniforme productkwaliteit het hele jaar door gewaarborgd is ondanks natuurlijke fruitvariaties."
        }
      },
      {
        question: {
          en: "What is 'juice turbidity' and how is it measured?",
          es: "¿Qué es la 'turbidez del jugo' y cómo se mide?",
          de: "Was ist 'Safttrübung' und wie wird sie gemessen?",
          nl: "Wat is 'saptroebeling' en hoe wordt het gemeten?"
        },
        options: [
          { en: "Cloudiness from suspended particles, measured using a nephelometer or turbidimeter in NTU", es: "Turbidez por partículas suspendidas, medida usando un nefelómetro o turbidímetro en NTU", de: "Trübung durch schwebende Partikel, gemessen mit einem Nephelometer oder Trübungsmesser in NTU", nl: "Troebeling door zwevende deeltjes, gemeten met een nefelometer of troebelheidsmeter in NTU" },
          { en: "The color intensity of the juice", es: "La intensidad del color del jugo", de: "Die Farbintensität des Saftes", nl: "De kleurintensiteit van het sap" },
          { en: "The speed at which juice flows", es: "La velocidad a la que fluye el jugo", de: "Die Geschwindigkeit, mit der Saft fließt", nl: "De snelheid waarmee sap stroomt" },
          { en: "The temperature stability of juice", es: "La estabilidad de temperatura del jugo", de: "Die Temperaturstabilität des Saftes", nl: "De temperatuurstabiliteit van sap" }
        ],
        correct: 0,
        explanation: {
          en: "Turbidity refers to juice cloudiness caused by suspended particles. It's measured using a nephelometer or turbidimeter, which measures light scattering, with results reported in NTU (Nephelometric Turbidity Units).",
          es: "La turbidez se refiere a la turbidez del jugo causada por partículas suspendidas. Se mide usando un nefelómetro o turbidímetro, que mide la dispersión de luz, con resultados reportados en NTU (Unidades de Turbidez Nefelométrica).",
          de: "Trübung bezieht sich auf Safttrübung durch schwebende Partikel. Sie wird mit einem Nephelometer oder Trübungsmesser gemessen, der Lichtstreuung misst, mit Ergebnissen in NTU (Nephelometrische Trübungseinheiten).",
          nl: "Troebeling verwijst naar saptroebeling veroorzaakt door zwevende deeltjes. Het wordt gemeten met een nefelometer of troebelheidsmeter, die lichtverstrooiing meet, met resultaten gerapporteerd in NTU (Nefelometrische Troebelheidsunits)."
        }
      },
      {
        question: {
          en: "What is 'cold chain management' in juice distribution?",
          es: "¿Qué es la 'gestión de cadena de frío' en la distribución de jugos?",
          de: "Was ist 'Kühlkettenmanagement' in der Saftverteilung?",
          nl: "Wat is 'koudeketenbeheer' in sapdistributie?"
        },
        options: [
          { en: "Maintaining continuous refrigeration from production to consumer to preserve fresh juice quality", es: "Mantener refrigeración continua desde producción hasta consumidor para preservar calidad de jugo fresco", de: "Aufrechterhaltung kontinuierlicher Kühlung von Produktion bis Verbraucher zur Erhaltung frischer Saftqualität", nl: "Continue koeling handhaven van productie tot consument om verse sapkwaliteit te behouden" },
          { en: "Using ice in shipping containers", es: "Usar hielo en contenedores de envío", de: "Eis in Versandbehältern verwenden", nl: "IJs gebruiken in verzendcontainers" },
          { en: "Selling juice only in winter months", es: "Vender jugo solo en meses de invierno", de: "Saft nur in Wintermonaten verkaufen", nl: "Sap alleen in wintermaanden verkopen" },
          { en: "Freezing all juice products", es: "Congelar todos los productos de jugo", de: "Alle Saftprodukte einfrieren", nl: "Alle sapproducten bevriezen" }
        ],
        correct: 0,
        explanation: {
          en: "Cold chain management ensures fresh juice remains refrigerated at proper temperatures (typically 0-4°C) throughout production, storage, transportation, and retail display to maintain quality and prevent spoilage.",
          es: "La gestión de cadena de frío asegura que el jugo fresco permanezca refrigerado a temperaturas adecuadas (típicamente 0-4°C) durante producción, almacenamiento, transporte y exhibición minorista para mantener calidad y prevenir deterioro.",
          de: "Kühlkettenmanagement stellt sicher, dass frischer Saft bei angemessenen Temperaturen (typischerweise 0-4°C) während Produktion, Lagerung, Transport und Einzelhandelsauslage gekühlt bleibt, um Qualität zu erhalten und Verderb zu verhindern.",
          nl: "Koudeketenbeheer zorgt ervoor dat vers sap gekoeld blijft op juiste temperaturen (typisch 0-4°C) gedurende productie, opslag, transport en winkelpresentatie om kwaliteit te behouden en bederf te voorkomen."
        }
      },
      {
        question: {
          en: "What is 'Patulin' and why is it a concern in juice production?",
          es: "¿Qué es la 'Patulina' y por qué es una preocupación en la producción de jugos?",
          de: "Was ist 'Patulin' und warum ist es ein Problem in der Saftproduktion?",
          nl: "Wat is 'Patuline' en waarom is het een zorg in sapproductie?"
        },
        options: [
          { en: "A mycotoxin from moldy fruits (especially apples) that can contaminate juice", es: "Una micotoxina de frutas mohosas (especialmente manzanas) que puede contaminar el jugo", de: "Ein Mykotoxin aus schimmeligen Früchten (besonders Äpfeln), das Saft kontaminieren kann", nl: "Een mycotoxine uit beschimmeld fruit (vooral appels) dat sap kan verontreinigen" },
          { en: "A beneficial enzyme that improves clarity", es: "Una enzima beneficiosa que mejora la claridad", de: "Ein nützliches Enzym, das die Klarheit verbessert", nl: "Een nuttig enzym dat helderheid verbetert" },
          { en: "A natural preservative found in citrus", es: "Un conservante natural encontrado en cítricos", de: "Ein natürliches Konservierungsmittel in Zitrusfrüchten", nl: "Een natuurlijk conserveermiddel gevonden in citrus" },
          { en: "A vitamin added to fortified juices", es: "Una vitamina añadida a jugos fortificados", de: "Ein Vitamin, das angereicherten Säften zugesetzt wird", nl: "Een vitamine toegevoegd aan verrijkte sappen" }
        ],
        correct: 0,
        explanation: {
          en: "Patulin is a toxic mycotoxin produced by mold (especially Penicillium) on damaged or rotting fruits. Apple juice is most susceptible. Regulations limit patulin levels, requiring careful fruit inspection and rejection of moldy fruit.",
          es: "La patulina es una micotoxina tóxica producida por moho (especialmente Penicillium) en frutas dañadas o podridas. El jugo de manzana es más susceptible. Las regulaciones limitan niveles de patulina, requiriendo inspección cuidadosa de frutas y rechazo de fruta mohosa.",
          de: "Patulin ist ein giftiges Mykotoxin, das von Schimmel (besonders Penicillium) auf beschädigten oder faulenden Früchten produziert wird. Apfelsaft ist am anfälligsten. Vorschriften begrenzen Patulinwerte und erfordern sorgfältige Fruchtinspektion und Ablehnung schimmeliger Früchte.",
          nl: "Patuline is een giftige mycotoxine geproduceerd door schimmel (vooral Penicillium) op beschadigd of rottend fruit. Appelsap is het meest vatbaar. Regelgeving beperkt patulineniveaus, wat zorgvuldige fruitinspectie en afkeuring van beschimmeld fruit vereist."
        }
      },
      {
        question: {
          en: "What is 'enzymatic browning inhibition' in fresh juice?",
          es: "¿Qué es la 'inhibición del pardeamiento enzimático' en jugo fresco?",
          de: "Was ist 'enzymatische Bräunungshemmung' in frischem Saft?",
          nl: "Wat is 'enzymatische bruineringsremming' in vers sap?"
        },
        options: [
          { en: "Preventing oxidation by adding ascorbic acid or using HPP to deactivate polyphenol oxidase", es: "Prevenir oxidación añadiendo ácido ascórbico o usando HPP para desactivar polifenol oxidasa", de: "Oxidation verhindern durch Zugabe von Ascorbinsäure oder Verwendung von HPP zur Deaktivierung von Polyphenoloxidase", nl: "Oxidatie voorkomen door ascorbinezuur toe te voegen of HPP gebruiken om polyfenoloxidase te deactiveren" },
          { en: "Adding brown coloring to mask the change", es: "Añadir coloración marrón para enmascarar el cambio", de: "Braune Färbung hinzufügen, um die Veränderung zu maskieren", nl: "Bruine kleuring toevoegen om de verandering te maskeren" },
          { en: "Filtering out all brown particles", es: "Filtrar todas las partículas marrones", de: "Alle braunen Partikel herausfiltern", nl: "Alle bruine deeltjes uitfilteren" },
          { en: "Using only non-browning fruit varieties", es: "Usar solo variedades de frutas que no se pardean", de: "Nur nicht-bräunende Obstsorten verwenden", nl: "Alleen niet-bruinende fruitvariëteiten gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Enzymatic browning occurs when polyphenol oxidase enzymes react with oxygen. It's prevented by adding ascorbic acid (antioxidant), using HPP (High Pressure Processing) to deactivate enzymes, or removing oxygen through deaeration.",
          es: "El pardeamiento enzimático ocurre cuando enzimas polifenol oxidasa reaccionan con oxígeno. Se previene añadiendo ácido ascórbico (antioxidante), usando HPP (Procesamiento de Alta Presión) para desactivar enzimas, o removiendo oxígeno mediante desaireación.",
          de: "Enzymatische Bräunung tritt auf, wenn Polyphenoloxidase-Enzyme mit Sauerstoff reagieren. Sie wird verhindert durch Zugabe von Ascorbinsäure (Antioxidans), Verwendung von HPP (Hochdruckverarbeitung) zur Enzymdeaktivierung oder Sauerstoffentfernung durch Entlüftung.",
          nl: "Enzymatische bruinering treedt op wanneer polyfenoloxidase-enzymen reageren met zuurstof. Het wordt voorkomen door ascorbinezuur (antioxidant) toe te voegen, HPP (Hoge Druk Verwerking) te gebruiken om enzymen te deactiveren, of zuurstof te verwijderen door ontluchting."
        }
      },
      {
        question: {
          en: "What is 'juice yield percentage' and what factors affect it?",
          es: "¿Qué es el 'porcentaje de rendimiento de jugo' y qué factores lo afectan?",
          de: "Was ist 'Saftausbeuteprozentsatz' und welche Faktoren beeinflussen ihn?",
          nl: "Wat is 'sapopbrengstpercentage' en welke factoren beïnvloeden het?"
        },
        options: [
          { en: "Juice extracted per kg of fruit; affected by fruit ripeness, variety, extraction method, and enzyme treatment", es: "Jugo extraído por kg de fruta; afectado por madurez de fruta, variedad, método de extracción y tratamiento enzimático", de: "Extrahierter Saft pro kg Frucht; beeinflusst durch Fruchtreife, Sorte, Extraktionsmethode und Enzymbehandlung", nl: "Geëxtraheerd sap per kg fruit; beïnvloed door fruitrijpheid, variëteit, extractiemethode en enzymbehandeling" },
          { en: "The percentage of water in juice", es: "El porcentaje de agua en jugo", de: "Der Prozentsatz an Wasser im Saft", nl: "Het percentage water in sap" },
          { en: "How fast juice can be produced", es: "Qué tan rápido se puede producir jugo", de: "Wie schnell Saft produziert werden kann", nl: "Hoe snel sap geproduceerd kan worden" },
          { en: "The profit margin on juice sales", es: "El margen de ganancia en ventas de jugo", de: "Die Gewinnspanne beim Saftverkauf", nl: "De winstmarge op sapverkoop" }
        ],
        correct: 0,
        explanation: {
          en: "Juice yield is the amount of juice extracted per kilogram of raw fruit, expressed as percentage. It's maximized by using ripe fruit, appropriate varieties, enzyme pretreatment (pectinase), optimized pressing pressure and time.",
          es: "El rendimiento de jugo es la cantidad de jugo extraído por kilogramo de fruta cruda, expresado como porcentaje. Se maximiza usando fruta madura, variedades apropiadas, pretratamiento enzimático (pectinasa), presión y tiempo de prensado optimizados.",
          de: "Saftausbeute ist die Menge an extrahiertem Saft pro Kilogramm Rohfrucht, ausgedrückt als Prozentsatz. Sie wird maximiert durch Verwendung reifer Früchte, geeigneter Sorten, Enzymvorbehandlung (Pektinase), optimiertem Pressdruck und -zeit.",
          nl: "Sapopbrengst is de hoeveelheid geëxtraheerd sap per kilogram ruw fruit, uitgedrukt als percentage. Het wordt gemaximaliseerd door rijp fruit te gebruiken, geschikte variëteiten, enzymvoorbehandeling (pectinase), geoptimaliseerde persdruk en -tijd."
        }
      },
      {
        question: {
          en: "What is 'membrane filtration' in juice processing and what are its advantages?",
          es: "¿Qué es la 'filtración por membrana' en el procesamiento de jugos y cuáles son sus ventajas?",
          de: "Was ist 'Membranfiltration' in der Saftverarbeitung und was sind ihre Vorteile?",
          nl: "Wat is 'membraanfiltratie' in sapverwerking en wat zijn de voordelen?"
        },
        options: [
          { en: "Using semi-permeable membranes (microfiltration, ultrafiltration, nanofiltration) for clarification and concentration without heat", es: "Usar membranas semipermeables (microfiltración, ultrafiltración, nanofiltración) para clarificación y concentración sin calor", de: "Verwendung semipermeabler Membranen (Mikrofiltration, Ultrafiltration, Nanofiltration) zur Klärung und Konzentration ohne Hitze", nl: "Semi-permeabele membranen gebruiken (microfiltratie, ultrafiltratie, nanofiltratie) voor klaring en concentratie zonder warmte" },
          { en: "Using paper filters to remove large particles", es: "Usar filtros de papel para remover partículas grandes", de: "Papierfilter verwenden, um große Partikel zu entfernen", nl: "Papieren filters gebruiken om grote deeltjes te verwijderen" },
          { en: "A traditional cloth straining method", es: "Un método tradicional de colado con tela", de: "Eine traditionelle Stofffilterungsmethode", nl: "Een traditionele stoffen zeepmethode" },
          { en: "Centrifugal separation only", es: "Solo separación centrífuga", de: "Nur Zentrifugaltrennung", nl: "Alleen centrifugale scheiding" }
        ],
        correct: 0,
        explanation: {
          en: "Membrane filtration uses semi-permeable membranes with different pore sizes (microfiltration, ultrafiltration, nanofiltration, reverse osmosis) to clarify or concentrate juice without heat, preserving flavor and nutrients better than thermal methods.",
          es: "La filtración por membrana usa membranas semipermeables con diferentes tamaños de poro (microfiltración, ultrafiltración, nanofiltración, ósmosis inversa) para clarificar o concentrar jugo sin calor, preservando sabor y nutrientes mejor que métodos térmicos.",
          de: "Membranfiltration verwendet semipermeable Membranen mit unterschiedlichen Porengrößen (Mikrofiltration, Ultrafiltration, Nanofiltration, Umkehrosmose) zur Klärung oder Konzentration von Saft ohne Hitze, wobei Geschmack und Nährstoffe besser erhalten bleiben als bei thermischen Methoden.",
          nl: "Membraanfiltratie gebruikt semi-permeabele membranen met verschillende poriegrootten (microfiltratie, ultrafiltratie, nanofiltratie, omgekeerde osmose) om sap te klaren of concentreren zonder warmte, waarbij smaak en voedingsstoffen beter behouden blijven dan bij thermische methoden."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
