// Quiz Level 5: Hiërogliefen - Numbers & Dates in Hieroglyphs
(function() {
  "use strict";

  const level5 = {
    name: {
      en: "Numbers & Dates in Hieroglyphs",
      es: "Números y Fechas en Jeroglíficos",
      de: "Zahlen und Daten in Hieroglyphen",
      nl: "Nummers & Data in Hiërogliefen"
    },
    questions: [
      {
        question: {
          en: "How is the number 1 represented in hieroglyphic writing?",
          es: "¿Cómo se representa el número 1 en escritura jeroglífica?",
          de: "Wie wird die Zahl 1 in hieroglyphischer Schrift dargestellt?",
          nl: "Hoe wordt het getal 1 voorgesteld in hiëroglifisch schrift?"
        },
        options: [
          { en: "A single vertical stroke", es: "Un solo trazo vertical", de: "Ein einzelner vertikaler Strich", nl: "Een enkele verticale streep" },
          { en: "A circle", es: "Un círculo", de: "Ein Kreis", nl: "Een cirkel" },
          { en: "A horizontal line", es: "Una línea horizontal", de: "Eine horizontale Linie", nl: "Een horizontale lijn" },
          { en: "A dot", es: "Un punto", de: "Ein Punkt", nl: "Een punt" }
        ],
        correct: 0,
        explanation: {
          en: "The number 1 is represented by a single vertical stroke (𓏺). This is the basic unit from which other numbers are built in the Egyptian number system.",
          es: "El número 1 se representa con un solo trazo vertical (𓏺). Esta es la unidad básica a partir de la cual se construyen otros números en el sistema numérico egipcio.",
          de: "Die Zahl 1 wird durch einen einzelnen vertikalen Strich (𓏺) dargestellt. Dies ist die Grundeinheit, aus der andere Zahlen im ägyptischen Zahlensystem aufgebaut werden.",
          nl: "Het getal 1 wordt voorgesteld door een enkele verticale streep (𓏺). Dit is de basiseenheid waaruit andere getallen worden opgebouwd in het Egyptische getallensysteem."
        }
      },
      {
        question: {
          en: "What hieroglyph represents the number 10?",
          es: "¿Qué jeroglífico representa el número 10?",
          de: "Welche Hieroglyphe stellt die Zahl 10 dar?",
          nl: "Welke hiëroglief stelt het getal 10 voor?"
        },
        options: [
          { en: "Ten vertical strokes", es: "Diez trazos verticales", de: "Zehn vertikale Striche", nl: "Tien verticale strepen" },
          { en: "A hobble or heel bone", es: "Un hueso del talón", de: "Ein Fersenbein", nl: "Een hielbeen" },
          { en: "A coiled rope", es: "Una cuerda enrollada", de: "Ein aufgerolltes Seil", nl: "Een opgerold touw" },
          { en: "A lotus flower", es: "Una flor de loto", de: "Eine Lotusblume", nl: "Een lotusbloem" }
        ],
        correct: 1,
        explanation: {
          en: "The number 10 is represented by a hobble or heel bone (𓎆). This symbol was used to represent ten units and could be repeated to form larger numbers like 20, 30, etc.",
          es: "El número 10 se representa con un hueso del talón (𓎆). Este símbolo se usaba para representar diez unidades y podía repetirse para formar números más grandes como 20, 30, etc.",
          de: "Die Zahl 10 wird durch ein Fersenbein (𓎆) dargestellt. Dieses Symbol wurde verwendet, um zehn Einheiten darzustellen und konnte wiederholt werden, um größere Zahlen wie 20, 30, usw. zu bilden.",
          nl: "Het getal 10 wordt voorgesteld door een hielbeen (𓎆). Dit symbool werd gebruikt om tien eenheden voor te stellen en kon worden herhaald om grotere getallen zoals 20, 30, enz. te vormen."
        }
      },
      {
        question: {
          en: "Which symbol represents 100 in Egyptian hieroglyphs?",
          es: "¿Qué símbolo representa 100 en jeroglíficos egipcios?",
          de: "Welches Symbol stellt 100 in ägyptischen Hieroglyphen dar?",
          nl: "Welk symbool stelt 100 voor in Egyptische hiërogliefen?"
        },
        options: [
          { en: "A coiled rope", es: "Una cuerda enrollada", de: "Ein aufgerolltes Seil", nl: "Een opgerold touw" },
          { en: "A lotus flower", es: "Una flor de loto", de: "Eine Lotusblume", nl: "Een lotusbloem" },
          { en: "A finger", es: "Un dedo", de: "Ein Finger", nl: "Een vinger" },
          { en: "A tadpole", es: "Un renacuajo", de: "Eine Kaulquappe", nl: "Een kikkervisje" }
        ],
        correct: 0,
        explanation: {
          en: "The number 100 is represented by a coiled rope (𓍢). This symbol reflects the Egyptian decimal system where each power of ten had its own distinctive hieroglyph.",
          es: "El número 100 se representa con una cuerda enrollada (𓍢). Este símbolo refleja el sistema decimal egipcio donde cada potencia de diez tenía su propio jeroglífico distintivo.",
          de: "Die Zahl 100 wird durch ein aufgerolltes Seil (𓍢) dargestellt. Dieses Symbol spiegelt das ägyptische Dezimalsystem wider, bei dem jede Zehnerpotenz ihre eigene charakteristische Hieroglyphe hatte.",
          nl: "Het getal 100 wordt voorgesteld door een opgerold touw (𓍢). Dit symbool weerspiegelt het Egyptische decimale systeem waarbij elke macht van tien zijn eigen onderscheidende hiëroglief had."
        }
      },
      {
        question: {
          en: "What represents 1,000 in hieroglyphic numerals?",
          es: "¿Qué representa 1.000 en numerales jeroglíficos?",
          de: "Was stellt 1.000 in hieroglyphischen Zahlzeichen dar?",
          nl: "Wat stelt 1.000 voor in hiëroglifische cijfers?"
        },
        options: [
          { en: "A water lily or lotus flower", es: "Un nenúfar o flor de loto", de: "Eine Seerose oder Lotusblume", nl: "Een waterlelie of lotusbloem" },
          { en: "A bird", es: "Un pájaro", de: "Ein Vogel", nl: "Een vogel" },
          { en: "A human figure", es: "Una figura humana", de: "Eine menschliche Figur", nl: "Een menselijke figuur" },
          { en: "A tree", es: "Un árbol", de: "Ein Baum", nl: "Een boom" }
        ],
        correct: 0,
        explanation: {
          en: "The number 1,000 is represented by a water lily or lotus flower (𓆼). The lotus was significant in Egyptian culture, symbolizing rebirth and the sun, making it appropriate for representing large numbers.",
          es: "El número 1.000 se representa con un nenúfar o flor de loto (𓆼). El loto era significativo en la cultura egipcia, simbolizando el renacimiento y el sol, lo que lo hacía apropiado para representar números grandes.",
          de: "Die Zahl 1.000 wird durch eine Seerose oder Lotusblume (𓆼) dargestellt. Der Lotus war in der ägyptischen Kultur bedeutsam und symbolisierte Wiedergeburt und die Sonne, was ihn für die Darstellung großer Zahlen geeignet machte.",
          nl: "Het getal 1.000 wordt voorgesteld door een waterlelie of lotusbloem (𓆼). De lotus was belangrijk in de Egyptische cultuur, symboliserend wedergeboorte en de zon, waardoor het geschikt was om grote getallen voor te stellen."
        }
      },
      {
        question: {
          en: "How would you write the number 23 in hieroglyphs?",
          es: "¿Cómo escribirías el número 23 en jeroglíficos?",
          de: "Wie würden Sie die Zahl 23 in Hieroglyphen schreiben?",
          nl: "Hoe zou je het getal 23 schrijven in hiërogliefen?"
        },
        options: [
          { en: "Two heel bones and three vertical strokes", es: "Dos huesos del talón y tres trazos verticales", de: "Zwei Fersenbeine und drei vertikale Striche", nl: "Twee hielbeenderen en drie verticale strepen" },
          { en: "Twenty-three vertical strokes", es: "Veintitrés trazos verticales", de: "Dreiundzwanzig vertikale Striche", nl: "Drieëntwintig verticale strepen" },
          { en: "One coiled rope and three vertical strokes", es: "Una cuerda enrollada y tres trazos verticales", de: "Ein aufgerolltes Seil und drei vertikale Striche", nl: "Een opgerold touw en drie verticale strepen" },
          { en: "Two lotus flowers and three vertical strokes", es: "Dos flores de loto y tres trazos verticales", de: "Zwei Lotusblumen und drei vertikale Striche", nl: "Twee lotusbloemen en drie verticale strepen" }
        ],
        correct: 0,
        explanation: {
          en: "To write 23, you would use two heel bones (𓎆𓎆) for 20 and three vertical strokes (𓏺𓏺𓏺) for 3. Egyptian numbers were additive, combining symbols to represent the total value.",
          es: "Para escribir 23, usarías dos huesos del talón (𓎆𓎆) para 20 y tres trazos verticales (𓏺𓏺𓏺) para 3. Los números egipcios eran aditivos, combinando símbolos para representar el valor total.",
          de: "Um 23 zu schreiben, würden Sie zwei Fersenbeine (𓎆𓎆) für 20 und drei vertikale Striche (𓏺𓏺𓏺) für 3 verwenden. Ägyptische Zahlen waren additiv und kombinierten Symbole, um den Gesamtwert darzustellen.",
          nl: "Om 23 te schrijven, zou je twee hielbeenderen (𓎆𓎆) gebruiken voor 20 en drie verticale strepen (𓏺𓏺𓏺) voor 3. Egyptische getallen waren additief, waarbij symbolen werden gecombineerd om de totale waarde voor te stellen."
        }
      },
      {
        question: {
          en: "What symbol represents 10,000 in Egyptian numerals?",
          es: "¿Qué símbolo representa 10.000 en numerales egipcios?",
          de: "Welches Symbol stellt 10.000 in ägyptischen Zahlzeichen dar?",
          nl: "Welk symbool stelt 10.000 voor in Egyptische cijfers?"
        },
        options: [
          { en: "A pointing finger", es: "Un dedo señalando", de: "Ein zeigender Finger", nl: "Een wijzende vinger" },
          { en: "A frog or tadpole", es: "Una rana o renacuajo", de: "Ein Frosch oder eine Kaulquappe", nl: "Een kikker of kikkervisje" },
          { en: "A human figure", es: "Una figura humana", de: "Eine menschliche Figur", nl: "Een menselijke figuur" },
          { en: "An ostrich feather", es: "Una pluma de avestruz", de: "Eine Straußenfeder", nl: "Een struisvogelveer" }
        ],
        correct: 0,
        explanation: {
          en: "The number 10,000 is represented by a pointing finger (𓂭). This symbol continued the pattern of using distinctive hieroglyphs for each power of ten in the Egyptian numbering system.",
          es: "El número 10.000 se representa con un dedo señalando (𓂭). Este símbolo continuaba el patrón de usar jeroglíficos distintivos para cada potencia de diez en el sistema numérico egipcio.",
          de: "Die Zahl 10.000 wird durch einen zeigenden Finger (𓂭) dargestellt. Dieses Symbol setzte das Muster fort, charakteristische Hieroglyphen für jede Zehnerpotenz im ägyptischen Zahlensystem zu verwenden.",
          nl: "Het getal 10.000 wordt voorgesteld door een wijzende vinger (𓂭). Dit symbool zette het patroon voort van het gebruik van onderscheidende hiërogliefen voor elke macht van tien in het Egyptische getallensysteem."
        }
      },
      {
        question: {
          en: "Which hieroglyph represents 100,000?",
          es: "¿Qué jeroglífico representa 100.000?",
          de: "Welche Hieroglyphe stellt 100.000 dar?",
          nl: "Welke hiëroglief stelt 100.000 voor?"
        },
        options: [
          { en: "A bird", es: "Un pájaro", de: "Ein Vogel", nl: "Een vogel" },
          { en: "A frog or tadpole", es: "Una rana o renacuajo", de: "Ein Frosch oder eine Kaulquappe", nl: "Een kikker of kikkervisje" },
          { en: "A fish", es: "Un pez", de: "Ein Fisch", nl: "Een vis" },
          { en: "A snake", es: "Una serpiente", de: "Eine Schlange", nl: "Een slang" }
        ],
        correct: 1,
        explanation: {
          en: "The number 100,000 is represented by a frog or tadpole (𓆐). Frogs were associated with abundance and fertility in Egyptian culture, making them suitable for representing very large numbers.",
          es: "El número 100.000 se representa con una rana o renacuajo (𓆐). Las ranas se asociaban con abundancia y fertilidad en la cultura egipcia, lo que las hacía adecuadas para representar números muy grandes.",
          de: "Die Zahl 100.000 wird durch einen Frosch oder eine Kaulquappe (𓆐) dargestellt. Frösche wurden in der ägyptischen Kultur mit Überfluss und Fruchtbarkeit assoziiert, was sie für die Darstellung sehr großer Zahlen geeignet machte.",
          nl: "Het getal 100.000 wordt voorgesteld door een kikker of kikkervisje (𓆐). Kikkers werden geassocieerd met overvloed en vruchtbaarheid in de Egyptische cultuur, waardoor ze geschikt waren om zeer grote getallen voor te stellen."
        }
      },
      {
        question: {
          en: "What represents the highest number (1,000,000) in Egyptian hieroglyphs?",
          es: "¿Qué representa el número más alto (1.000.000) en jeroglíficos egipcios?",
          de: "Was stellt die höchste Zahl (1.000.000) in ägyptischen Hieroglyphen dar?",
          nl: "Wat stelt het hoogste getal (1.000.000) voor in Egyptische hiërogliefen?"
        },
        options: [
          { en: "A god with raised arms", es: "Un dios con brazos alzados", de: "Ein Gott mit erhobenen Armen", nl: "Een god met opgeheven armen" },
          { en: "A pyramid", es: "Una pirámide", de: "Eine Pyramide", nl: "Een piramide" },
          { en: "A sun disk", es: "Un disco solar", de: "Eine Sonnenscheibe", nl: "Een zonneschijf" },
          { en: "A palace", es: "Un palacio", de: "Ein Palast", nl: "Een paleis" }
        ],
        correct: 0,
        explanation: {
          en: "The number 1,000,000 is represented by a god with raised arms (𓁨), often interpreted as a figure supporting the sky. This symbolized infinity or the largest conceivable number in the Egyptian system.",
          es: "El número 1.000.000 se representa con un dios con brazos alzados (𓁨), a menudo interpretado como una figura que sostiene el cielo. Esto simbolizaba infinidad o el número más grande concebible en el sistema egipcio.",
          de: "Die Zahl 1.000.000 wird durch einen Gott mit erhobenen Armen (𓁨) dargestellt, oft als Figur interpretiert, die den Himmel stützt. Dies symbolisierte Unendlichkeit oder die größte vorstellbare Zahl im ägyptischen System.",
          nl: "Het getal 1.000.000 wordt voorgesteld door een god met opgeheven armen (𓁨), vaak geïnterpreteerd als een figuur die de hemel ondersteunt. Dit symboliseerde oneindigheid of het grootste denkbare getal in het Egyptische systeem."
        }
      },
      {
        question: {
          en: "How did Egyptians typically arrange number hieroglyphs when writing?",
          es: "¿Cómo organizaban típicamente los egipcios los jeroglíficos numéricos al escribir?",
          de: "Wie ordneten die Ägypter typischerweise Zahlen-Hieroglyphen beim Schreiben an?",
          nl: "Hoe ordenden Egyptenaren typisch getal-hiërogliefen bij het schrijven?"
        },
        options: [
          { en: "Largest values first, then smaller values", es: "Valores más grandes primero, luego valores más pequeños", de: "Größte Werte zuerst, dann kleinere Werte", nl: "Grootste waarden eerst, dan kleinere waarden" },
          { en: "Smallest values first, then larger values", es: "Valores más pequeños primero, luego valores más grandes", de: "Kleinste Werte zuerst, dann größere Werte", nl: "Kleinste waarden eerst, dan grotere waarden" },
          { en: "Random order", es: "Orden aleatorio", de: "Zufällige Reihenfolge", nl: "Willekeurige volgorde" },
          { en: "Only from left to right", es: "Solo de izquierda a derecha", de: "Nur von links nach rechts", nl: "Alleen van links naar rechts" }
        ],
        correct: 0,
        explanation: {
          en: "Egyptians wrote numbers with the largest values first, followed by smaller values, similar to our modern system. For example, 1,234 would show thousands first, then hundreds, tens, and units.",
          es: "Los egipcios escribían números con los valores más grandes primero, seguidos de valores más pequeños, similar a nuestro sistema moderno. Por ejemplo, 1.234 mostraría miles primero, luego centenas, decenas y unidades.",
          de: "Die Ägypter schrieben Zahlen mit den größten Werten zuerst, gefolgt von kleineren Werten, ähnlich unserem modernen System. Zum Beispiel würde 1.234 zuerst Tausende zeigen, dann Hunderte, Zehner und Einheiten.",
          nl: "Egyptenaren schreven getallen met de grootste waarden eerst, gevolgd door kleinere waarden, vergelijkbaar met ons moderne systeem. Bijvoorbeeld, 1.234 zou eerst duizenden tonen, dan honderden, tientallen en eenheden."
        }
      },
      {
        question: {
          en: "Which calendar system did ancient Egyptians primarily use?",
          es: "¿Qué sistema de calendario usaban principalmente los antiguos egipcios?",
          de: "Welches Kalendersystem verwendeten die alten Ägypter hauptsächlich?",
          nl: "Welk kalendersysteem gebruikten de oude Egyptenaren voornamelijk?"
        },
        options: [
          { en: "Lunar calendar only", es: "Solo calendario lunar", de: "Nur Mondkalender", nl: "Alleen maankalender" },
          { en: "Solar calendar of 365 days", es: "Calendario solar de 365 días", de: "Sonnenkalender von 365 Tagen", nl: "Zonnekalender van 365 dagen" },
          { en: "Seasonal calendar only", es: "Solo calendario estacional", de: "Nur Jahreszeitenkalender", nl: "Alleen seizoenskalender" },
          { en: "Random dating system", es: "Sistema de fechas aleatorio", de: "Zufälliges Datierungssystem", nl: "Willekeurig dateringssysteem" }
        ],
        correct: 1,
        explanation: {
          en: "Ancient Egyptians used a solar calendar of 365 days, divided into 12 months of 30 days each, plus 5 extra days. This was one of the earliest and most accurate calendar systems in the ancient world.",
          es: "Los antiguos egipcios usaban un calendario solar de 365 días, dividido en 12 meses de 30 días cada uno, más 5 días extra. Este fue uno de los sistemas de calendario más tempranos y precisos del mundo antiguo.",
          de: "Die alten Ägypter verwendeten einen Sonnenkalender von 365 Tagen, unterteilt in 12 Monate mit je 30 Tagen, plus 5 zusätzliche Tage. Dies war eines der frühesten und genauesten Kalendersysteme der antiken Welt.",
          nl: "Oude Egyptenaren gebruikten een zonnekalender van 365 dagen, verdeeld in 12 maanden van 30 dagen elk, plus 5 extra dagen. Dit was een van de vroegste en nauwkeurigste kalendersystemen in de oude wereld."
        }
      },
      {
        question: {
          en: "How many seasons did the Egyptian calendar year have?",
          es: "¿Cuántas estaciones tenía el año del calendario egipcio?",
          de: "Wie viele Jahreszeiten hatte das ägyptische Kalenderjahr?",
          nl: "Hoeveel seizoenen had het Egyptische kalenderjaar?"
        },
        options: [
          { en: "Two", es: "Dos", de: "Zwei", nl: "Twee" },
          { en: "Three", es: "Tres", de: "Drei", nl: "Drie" },
          { en: "Four", es: "Cuatro", de: "Vier", nl: "Vier" },
          { en: "Five", es: "Cinco", de: "Fünf", nl: "Vijf" }
        ],
        correct: 1,
        explanation: {
          en: "The Egyptian year had three seasons: Akhet (inundation), Peret (growing), and Shemu (harvest). Each season lasted four months and was tied to the Nile's annual flood cycle.",
          es: "El año egipcio tenía tres estaciones: Akhet (inundación), Peret (crecimiento) y Shemu (cosecha). Cada estación duraba cuatro meses y estaba ligada al ciclo anual de inundación del Nilo.",
          de: "Das ägyptische Jahr hatte drei Jahreszeiten: Achet (Überschwemmung), Peret (Wachstum) und Schemu (Ernte). Jede Jahreszeit dauerte vier Monate und war an den jährlichen Flutkreislauf des Nils gebunden.",
          nl: "Het Egyptische jaar had drie seizoenen: Akhet (overstroming), Peret (groei) en Shemu (oogst). Elk seizoen duurde vier maanden en was gebonden aan de jaarlijkse overstromingscyclus van de Nijl."
        }
      },
      {
        question: {
          en: "What was Akhet in the Egyptian calendar?",
          es: "¿Qué era Akhet en el calendario egipcio?",
          de: "Was war Achet im ägyptischen Kalender?",
          nl: "Wat was Akhet in de Egyptische kalender?"
        },
        options: [
          { en: "The harvest season", es: "La temporada de cosecha", de: "Die Erntezeit", nl: "Het oogstseizoen" },
          { en: "The planting season", es: "La temporada de siembra", de: "Die Pflanzzeit", nl: "Het zaai seizoen" },
          { en: "The flooding/inundation season", es: "La temporada de inundación", de: "Die Überschwemmungszeit", nl: "Het overstromingsseizoen" },
          { en: "The dry season", es: "La temporada seca", de: "Die Trockenzeit", nl: "Het droge seizoen" }
        ],
        correct: 2,
        explanation: {
          en: "Akhet was the flooding or inundation season when the Nile River overflowed its banks, depositing fertile silt across the farmlands. This season typically lasted from July to October.",
          es: "Akhet era la temporada de inundación cuando el río Nilo se desbordaba, depositando limo fértil a través de las tierras de cultivo. Esta temporada típicamente duraba de julio a octubre.",
          de: "Achet war die Überschwemmungszeit, wenn der Nil über seine Ufer trat und fruchtbaren Schlamm über die Ackerflächen verteilte. Diese Jahreszeit dauerte typischerweise von Juli bis Oktober.",
          nl: "Akhet was het overstromingsseizoen wanneer de Nijl over zijn oevers trad en vruchtbare slib over de akkergronden verspreidde. Dit seizoen duurde typisch van juli tot oktober."
        }
      },
      {
        question: {
          en: "Which star's rising marked the beginning of the Egyptian New Year?",
          es: "¿La salida de qué estrella marcaba el comienzo del Año Nuevo egipcio?",
          de: "Welcher Stern markierte mit seinem Aufgang den Beginn des ägyptischen Neuen Jahres?",
          nl: "Welke ster markeerde met zijn opkomst het begin van het Egyptische Nieuwe Jaar?"
        },
        options: [
          { en: "Polaris", es: "Polaris", de: "Polaris", nl: "Polaris" },
          { en: "Sirius", es: "Sirio", de: "Sirius", nl: "Sirius" },
          { en: "Vega", es: "Vega", de: "Wega", nl: "Vega" },
          { en: "Betelgeuse", es: "Betelgeuse", de: "Beteigeuze", nl: "Betelgeuze" }
        ],
        correct: 1,
        explanation: {
          en: "Sirius (called Sopdet by the Egyptians) marked the beginning of the Egyptian New Year. Its heliacal rising coincided with the annual Nile flood, making it crucial for predicting agricultural cycles.",
          es: "Sirio (llamado Sopdet por los egipcios) marcaba el comienzo del Año Nuevo egipcio. Su salida helíaca coincidía con la inundación anual del Nilo, haciéndolo crucial para predecir ciclos agrícolas.",
          de: "Sirius (von den Ägyptern Sopdet genannt) markierte den Beginn des ägyptischen Neuen Jahres. Sein heliakischer Aufgang fiel mit der jährlichen Nilflut zusammen, was ihn für die Vorhersage landwirtschaftlicher Zyklen entscheidend machte.",
          nl: "Sirius (Sopdet genoemd door de Egyptenaren) markeerde het begin van het Egyptische Nieuwe Jaar. Zijn heliacale opkomst viel samen met de jaarlijkse Nijloverstroming, waardoor het cruciaal was voor het voorspellen van landbouwcycli."
        }
      },
      {
        question: {
          en: "What were the five extra days called in the Egyptian calendar?",
          es: "¿Cómo se llamaban los cinco días extra en el calendario egipcio?",
          de: "Wie wurden die fünf zusätzlichen Tage im ägyptischen Kalender genannt?",
          nl: "Hoe werden de vijf extra dagen genoemd in de Egyptische kalender?"
        },
        options: [
          { en: "Epagomenal days", es: "Días epagomenales", de: "Epagomenale Tage", nl: "Epagomenale dagen" },
          { en: "Sacred days", es: "Días sagrados", de: "Heilige Tage", nl: "Heilige dagen" },
          { en: "Festival days", es: "Días de festival", de: "Festtage", nl: "Festivaldagen" },
          { en: "Bonus days", es: "Días bonus", de: "Bonus-Tage", nl: "Bonusdagen" }
        ],
        correct: 0,
        explanation: {
          en: "The five extra days were called epagomenal days (from Greek 'epagomenos' meaning 'brought in addition'). These days were considered the birthdays of the gods Osiris, Horus, Set, Isis, and Nephthys.",
          es: "Los cinco días extra se llamaban días epagomenales (del griego 'epagomenos' que significa 'traído adicionalmente'). Estos días se consideraban los cumpleaños de los dioses Osiris, Horus, Set, Isis y Neftis.",
          de: "Die fünf zusätzlichen Tage wurden epagomenale Tage genannt (vom griechischen 'epagomenos', was 'zusätzlich hinzugefügt' bedeutet). Diese Tage galten als Geburtstage der Götter Osiris, Horus, Set, Isis und Nephthys.",
          nl: "De vijf extra dagen werden epagomenale dagen genoemd (van het Griekse 'epagomenos' wat 'extra toegevoegd' betekent). Deze dagen werden beschouwd als de verjaardagen van de goden Osiris, Horus, Set, Isis en Nephthys."
        }
      },
      {
        question: {
          en: "How did Egyptians write ordinal numbers (first, second, third)?",
          es: "¿Cómo escribían los egipcios los números ordinales (primero, segundo, tercero)?",
          de: "Wie schrieben die Ägypter Ordnungszahlen (erste, zweite, dritte)?",
          nl: "Hoe schreven Egyptenaren rangtelwoorden (eerste, tweede, derde)?"
        },
        options: [
          { en: "Using special ordinal hieroglyphs", es: "Usando jeroglíficos ordinales especiales", de: "Mit speziellen Ordinal-Hieroglyphen", nl: "Met speciale ordinale hiërogliefen" },
          { en: "Adding a special determinative to cardinal numbers", es: "Agregando un determinativo especial a números cardinales", de: "Hinzufügung eines speziellen Determinativs zu Kardinalzahlen", nl: "Door een speciaal determinatief toe te voegen aan hoofdtelwoorden" },
          { en: "Writing the number twice", es: "Escribiendo el número dos veces", de: "Die Zahl zweimal schreiben", nl: "Het getal tweemaal schrijven" },
          { en: "Using Roman numerals", es: "Usando números romanos", de: "Mit römischen Zahlen", nl: "Met Romeinse cijfers" }
        ],
        correct: 1,
        explanation: {
          en: "Egyptians created ordinal numbers by adding a special determinative or suffix to cardinal numbers. This transformed 'three' into 'third', 'five' into 'fifth', and so on.",
          es: "Los egipcios creaban números ordinales agregando un determinativo especial o sufijo a los números cardinales. Esto transformaba 'tres' en 'tercero', 'cinco' en 'quinto', y así sucesivamente.",
          de: "Die Ägypter bildeten Ordnungszahlen, indem sie ein spezielles Determinativ oder Suffix zu Kardinalzahlen hinzufügten. Dies verwandelte 'drei' in 'dritte', 'fünf' in 'fünfte', und so weiter.",
          nl: "Egyptenaren maakten rangtelwoorden door een speciaal determinatief of achtervoegsel toe te voegen aan hoofdtelwoorden. Dit transformeerde 'drie' naar 'derde', 'vijf' naar 'vijfde', enzovoort."
        }
      },
      {
        question: {
          en: "What was the Egyptian word for 'year' in hieroglyphic writing?",
          es: "¿Cuál era la palabra egipcia para 'año' en escritura jeroglífica?",
          de: "Was war das ägyptische Wort für 'Jahr' in hieroglyphischer Schrift?",
          nl: "Wat was het Egyptische woord voor 'jaar' in hiëroglifisch schrift?"
        },
        options: [
          { en: "Renput", es: "Renput", de: "Renput", nl: "Renput" },
          { en: "Sopdet", es: "Sopdet", de: "Sopdet", nl: "Sopdet" },
          { en: "Akhet", es: "Akhet", de: "Achet", nl: "Akhet" },
          { en: "Djet", es: "Djet", de: "Djet", nl: "Djet" }
        ],
        correct: 0,
        explanation: {
          en: "Renput (𓂋𓎛𓊪𓅱𓏏) was the Egyptian word for 'year'. It was often written with a young shoot or branch, symbolizing renewal and the annual cycle of growth.",
          es: "Renput (𓂋𓎛𓊪𓅱𓏏) era la palabra egipcia para 'año'. A menudo se escribía con un brote joven o rama, simbolizando renovación y el ciclo anual de crecimiento.",
          de: "Renput (𓂋𓎛𓊪𓅱𓏏) war das ägyptische Wort für 'Jahr'. Es wurde oft mit einem jungen Trieb oder Zweig geschrieben, der Erneuerung und den jährlichen Wachstumskreislauf symbolisierte.",
          nl: "Renput (𓂋𓎛𓊪𓅱𓏏) was het Egyptische woord voor 'jaar'. Het werd vaak geschreven met een jonge scheut of tak, die vernieuwing en de jaarlijkse groeicyclus symboliseerde."
        }
      },
      {
        question: {
          en: "How were regnal years typically counted in pharaonic dating?",
          es: "¿Cómo se contaban típicamente los años de reinado en las fechas faraónicas?",
          de: "Wie wurden Regierungsjahre typischerweise in pharaonischer Datierung gezählt?",
          nl: "Hoe werden regeringsjaren typisch geteld in faraonische datering?"
        },
        options: [
          { en: "From the pharaoh's birth", es: "Desde el nacimiento del faraón", de: "Ab der Geburt des Pharaos", nl: "Vanaf de geboorte van de farao" },
          { en: "From the pharaoh's coronation", es: "Desde la coronación del faraón", de: "Ab der Krönung des Pharaos", nl: "Vanaf de kroning van de farao" },
          { en: "From January 1st", es: "Desde el 1 de enero", de: "Ab dem 1. Januar", nl: "Vanaf 1 januari" },
          { en: "From the Nile flood", es: "Desde la inundación del Nilo", de: "Ab der Nilflut", nl: "Vanaf de Nijloverstroming" }
        ],
        correct: 1,
        explanation: {
          en: "Regnal years were counted from the pharaoh's coronation or accession to the throne. Dates were often written as 'Year X of the reign of King Y', providing a chronological framework for events.",
          es: "Los años de reinado se contaban desde la coronación del faraón o acceso al trono. Las fechas a menudo se escribían como 'Año X del reinado del Rey Y', proporcionando un marco cronológico para eventos.",
          de: "Regierungsjahre wurden ab der Krönung oder Thronbesteigung des Pharaos gezählt. Daten wurden oft als 'Jahr X der Regierung von König Y' geschrieben, was einen chronologischen Rahmen für Ereignisse bot.",
          nl: "Regeringsjaren werden geteld vanaf de kroning of troonsbestijging van de farao. Data werden vaak geschreven als 'Jaar X van de regering van Koning Y', wat een chronologisch kader voor gebeurtenissen bood."
        }
      },
      {
        question: {
          en: "What fraction was most commonly used in Egyptian mathematics?",
          es: "¿Qué fracción se usaba más comúnmente en matemáticas egipcias?",
          de: "Welcher Bruch wurde am häufigsten in der ägyptischen Mathematik verwendet?",
          nl: "Welke breuk werd het meest gebruikt in Egyptische wiskunde?"
        },
        options: [
          { en: "1/2", es: "1/2", de: "1/2", nl: "1/2" },
          { en: "1/3", es: "1/3", de: "1/3", nl: "1/3" },
          { en: "1/4", es: "1/4", de: "1/4", nl: "1/4" },
          { en: "1/10", es: "1/10", de: "1/10", nl: "1/10" }
        ],
        correct: 0,
        explanation: {
          en: "The fraction 1/2 was most commonly used and had its own special hieroglyph (𓂧). Other unit fractions were written using the mouth symbol over the number, but 1/2 had this unique representation.",
          es: "La fracción 1/2 se usaba más comúnmente y tenía su propio jeroglífico especial (𓂧). Otras fracciones unitarias se escribían usando el símbolo de la boca sobre el número, pero 1/2 tenía esta representación única.",
          de: "Der Bruch 1/2 wurde am häufigsten verwendet und hatte seine eigene spezielle Hieroglyphe (𓂧). Andere Einheitsbrüche wurden mit dem Mundsymbol über der Zahl geschrieben, aber 1/2 hatte diese einzigartige Darstellung.",
          nl: "De breuk 1/2 werd het meest gebruikt en had zijn eigen speciale hiëroglief (𓂧). Andere eenheidsbreuken werden geschreven met het mondsymbool boven het getal, maar 1/2 had deze unieke voorstelling."
        }
      },
      {
        question: {
          en: "Which mathematical concept were the Egyptians among the first to use systematically?",
          es: "¿Qué concepto matemático fueron los egipcios de los primeros en usar sistemáticamente?",
          de: "Welches mathematische Konzept verwendeten die Ägypter als eine der ersten systematisch?",
          nl: "Welk wiskundig concept gebruikten de Egyptenaren als een van de eersten systematisch?"
        },
        options: [
          { en: "Negative numbers", es: "Números negativos", de: "Negative Zahlen", nl: "Negatieve getallen" },
          { en: "Decimal fractions", es: "Fracciones decimales", de: "Dezimalbrüche", nl: "Decimale breuken" },
          { en: "Unit fractions", es: "Fracciones unitarias", de: "Einheitsbrüche", nl: "Eenheidsbreuken" },
          { en: "Imaginary numbers", es: "Números imaginarios", de: "Imaginäre Zahlen", nl: "Imaginaire getallen" }
        ],
        correct: 2,
        explanation: {
          en: "Egyptians were among the first to use unit fractions (fractions with numerator 1) systematically. They could express almost any fraction as a sum of unit fractions, developing sophisticated calculation methods.",
          es: "Los egipcios fueron de los primeros en usar fracciones unitarias (fracciones con numerador 1) sistemáticamente. Podían expresar casi cualquier fracción como una suma de fracciones unitarias, desarrollando métodos de cálculo sofisticados.",
          de: "Die Ägypter waren unter den ersten, die Einheitsbrüche (Brüche mit Zähler 1) systematisch verwendeten. Sie konnten fast jeden Bruch als Summe von Einheitsbrüchen ausdrücken und entwickelten ausgeklügelte Berechnungsmethoden.",
          nl: "Egyptenaren waren een van de eersten die eenheidsbreuken (breuken met teller 1) systematisch gebruikten. Ze konden bijna elke breuk uitdrukken als een som van eenheidsbreuken, waarbij ze geavanceerde berekeningsmethoden ontwikkelden."
        }
      },
      {
        question: {
          en: "What is the 'Rhind Mathematical Papyrus' known for?",
          es: "¿Por qué es conocido el 'Papiro matemático de Rhind'?",
          de: "Wofür ist der 'Rhind-Mathematikpapyrus' bekannt?",
          nl: "Waarvoor is de 'Rhind Wiskundige Papyrus' bekend?"
        },
        options: [
          { en: "Religious spells", es: "Hechizos religiosos", de: "Religiöse Zaubersprüche", nl: "Religieuze spreuken" },
          { en: "Mathematical problems and solutions", es: "Problemas matemáticos y soluciones", de: "Mathematische Probleme und Lösungen", nl: "Wiskundige problemen en oplossingen" },
          { en: "Medical recipes", es: "Recetas médicas", de: "Medizinische Rezepte", nl: "Medische recepten" },
          { en: "Royal decrees", es: "Decretos reales", de: "Königliche Erlasse", nl: "Koninklijke decreten" }
        ],
        correct: 1,
        explanation: {
          en: "The Rhind Mathematical Papyrus (c. 1650 BCE) is one of the best-preserved ancient Egyptian mathematical documents. It contains 84 problems covering arithmetic, geometry, and algebra, written in hieratic script.",
          es: "El Papiro matemático de Rhind (c. 1650 a.C.) es uno de los documentos matemáticos egipcios antiguos mejor conservados. Contiene 84 problemas que cubren aritmética, geometría y álgebra, escritos en escritura hierática.",
          de: "Der Rhind-Mathematikpapyrus (ca. 1650 v. Chr.) ist eines der besterhaltenen altägyptischen mathematischen Dokumente. Er enthält 84 Probleme zu Arithmetik, Geometrie und Algebra, geschrieben in hieratischer Schrift.",
          nl: "De Rhind Wiskundige Papyrus (ca. 1650 v.Chr.) is een van de best bewaarde oude Egyptische wiskundige documenten. Het bevat 84 problemen over rekenkunde, meetkunde en algebra, geschreven in hieratisch schrift."
        }    },
    {
      question: {
        en: "What are hieroglyphs?",
        es: "What are hieroglyphs?",
        de: "What are hieroglyphs?",
        nl: "What are hieroglyphs?"
      },
      options: [
        { en: "Ancient Egyptian writing system", es: "Ancient Egyptian writing system", de: "Ancient Egyptian writing system", nl: "Ancient Egyptian writing system" },
        { en: "Egyptian gods", es: "Egyptian gods", de: "Egyptian gods", nl: "Egyptian gods" },
        { en: "Tomb decorations", es: "Tomb decorations", de: "Tomb decorations", nl: "Tomb decorations" },
        { en: "Pyramid designs", es: "Pyramid designs", de: "Pyramid designs", nl: "Pyramid designs" }
      ],
      correct: 0,
      explanation: {
        en: "Hieroglyphs are the formal writing system of ancient Egypt using pictorial symbols.",
        es: "Hieroglyphs are the formal writing system of ancient Egypt using pictorial symbols.",
        de: "Hieroglyphs are the formal writing system of ancient Egypt using pictorial symbols.",
        nl: "Hieroglyphs are the formal writing system of ancient Egypt using pictorial symbols."
      }
    },
    {
      question: {
        en: "What stone helped decode hieroglyphs?",
        es: "What stone helped decode hieroglyphs?",
        de: "What stone helped decode hieroglyphs?",
        nl: "What stone helped decode hieroglyphs?"
      },
      options: [
        { en: "Rosetta Stone", es: "Rosetta Stone", de: "Rosetta Stone", nl: "Rosetta Stone" },
        { en: "Pyramid Stone", es: "Pyramid Stone", de: "Pyramid Stone", nl: "Pyramid Stone" },
        { en: "Sphinx Stone", es: "Sphinx Stone", de: "Sphinx Stone", nl: "Sphinx Stone" },
        { en: "Nile Stone", es: "Nile Stone", de: "Nile Stone", nl: "Nile Stone" }
      ],
      correct: 0,
      explanation: {
        en: "The Rosetta Stone, discovered in 1799, provided the key to deciphering hieroglyphs.",
        es: "The Rosetta Stone, discovered in 1799, provided the key to deciphering hieroglyphs.",
        de: "The Rosetta Stone, discovered in 1799, provided the key to deciphering hieroglyphs.",
        nl: "The Rosetta Stone, discovered in 1799, provided the key to deciphering hieroglyphs."
      }
    },
    {
      question: {
        en: "Who deciphered hieroglyphs?",
        es: "Who deciphered hieroglyphs?",
        de: "Who deciphered hieroglyphs?",
        nl: "Who deciphered hieroglyphs?"
      },
      options: [
        { en: "Jean-François Champollion", es: "Jean-François Champollion", de: "Jean-François Champollion", nl: "Jean-François Champollion" },
        { en: "Howard Carter", es: "Howard Carter", de: "Howard Carter", nl: "Howard Carter" },
        { en: "Napoleon", es: "Napoleon", de: "Napoleon", nl: "Napoleon" },
        { en: "Ptolemy", es: "Ptolemy", de: "Ptolemy", nl: "Ptolemy" }
      ],
      correct: 0,
      explanation: {
        en: "French scholar Jean-François Champollion deciphered hieroglyphs in 1822.",
        es: "French scholar Jean-François Champollion deciphered hieroglyphs in 1822.",
        de: "French scholar Jean-François Champollion deciphered hieroglyphs in 1822.",
        nl: "French scholar Jean-François Champollion deciphered hieroglyphs in 1822."
      }
    },
    {
      question: {
        en: "How many hieroglyphic symbols existed?",
        es: "How many hieroglyphic symbols existed?",
        de: "How many hieroglyphic symbols existed?",
        nl: "How many hieroglyphic symbols existed?"
      },
      options: [
        { en: "Over 700", es: "Over 700", de: "Over 700", nl: "Over 700" },
        { en: "26 letters", es: "26 letters", de: "26 letters", nl: "26 letters" },
        { en: "100", es: "100", de: "100", nl: "100" },
        { en: "50", es: "50", de: "50", nl: "50" }
      ],
      correct: 0,
      explanation: {
        en: "Ancient Egyptian hieroglyphs included over 700 distinct symbols.",
        es: "Ancient Egyptian hieroglyphs included over 700 distinct symbols.",
        de: "Ancient Egyptian hieroglyphs included over 700 distinct symbols.",
        nl: "Ancient Egyptian hieroglyphs included over 700 distinct symbols."
      }
    },
    {
      question: {
        en: "What direction could hieroglyphs be written?",
        es: "What direction could hieroglyphs be written?",
        de: "What direction could hieroglyphs be written?",
        nl: "What direction could hieroglyphs be written?"
      },
      options: [
        { en: "Any direction (left, right, up, down)", es: "Any direction (left, right, up, down)", de: "Any direction (left, right, up, down)", nl: "Any direction (left, right, up, down)" },
        { en: "Left to right only", es: "Left to right only", de: "Left to right only", nl: "Left to right only" },
        { en: "Right to left only", es: "Right to left only", de: "Right to left only", nl: "Right to left only" },
        { en: "Top to bottom only", es: "Top to bottom only", de: "Top to bottom only", nl: "Top to bottom only" }
      ],
      correct: 0,
      explanation: {
        en: "Hieroglyphs could be written in multiple directions; the direction animals/people faced showed reading direction.",
        es: "Hieroglyphs could be written in multiple directions; the direction animals/people faced showed reading direction.",
        de: "Hieroglyphs could be written in multiple directions; the direction animals/people faced showed reading direction.",
        nl: "Hieroglyphs could be written in multiple directions; the direction animals/people faced showed reading direction."
      }
    },
    {
      question: {
        en: "What is hieratic script?",
        es: "What is hieratic script?",
        de: "What is hieratic script?",
        nl: "What is hieratic script?"
      },
      options: [
        { en: "Cursive form of hieroglyphs", es: "Cursive form of hieroglyphs", de: "Cursive form of hieroglyphs", nl: "Cursive form of hieroglyphs" },
        { en: "Sacred hieroglyphs", es: "Sacred hieroglyphs", de: "Sacred hieroglyphs", nl: "Sacred hieroglyphs" },
        { en: "Foreign script", es: "Foreign script", de: "Foreign script", nl: "Foreign script" },
        { en: "Number system", es: "Number system", de: "Number system", nl: "Number system" }
      ],
      correct: 0,
      explanation: {
        en: "Hieratic was a cursive, simplified form of hieroglyphic writing used for everyday documents.",
        es: "Hieratic was a cursive, simplified form of hieroglyphic writing used for everyday documents.",
        de: "Hieratic was a cursive, simplified form of hieroglyphic writing used for everyday documents.",
        nl: "Hieratic was a cursive, simplified form of hieroglyphic writing used for everyday documents."
      }
    },
    {
      question: {
        en: "What is demotic script?",
        es: "What is demotic script?",
        de: "What is demotic script?",
        nl: "What is demotic script?"
      },
      options: [
        { en: "Even more simplified Egyptian writing", es: "Even more simplified Egyptian writing", de: "Even more simplified Egyptian writing", nl: "Even more simplified Egyptian writing" },
        { en: "Sacred hieroglyphs", es: "Sacred hieroglyphs", de: "Sacred hieroglyphs", nl: "Sacred hieroglyphs" },
        { en: "Greek writing", es: "Greek writing", de: "Greek writing", nl: "Greek writing" },
        { en: "Royal script", es: "Royal script", de: "Royal script", nl: "Royal script" }
      ],
      correct: 0,
      explanation: {
        en: "Demotic was an even more simplified script that developed later, used for business and literature.",
        es: "Demotic was an even more simplified script that developed later, used for business and literature.",
        de: "Demotic was an even more simplified script that developed later, used for business and literature.",
        nl: "Demotic was an even more simplified script that developed later, used for business and literature."
      }
    },
    {
      question: {
        en: "What material did Egyptians write on?",
        es: "What material did Egyptians write on?",
        de: "What material did Egyptians write on?",
        nl: "What material did Egyptians write on?"
      },
      options: [
        { en: "Papyrus", es: "Papyrus", de: "Papyrus", nl: "Papyrus" },
        { en: "Paper", es: "Paper", de: "Paper", nl: "Paper" },
        { en: "Clay tablets", es: "Clay tablets", de: "Clay tablets", nl: "Clay tablets" },
        { en: "Animal skins", es: "Animal skins", de: "Animal skins", nl: "Animal skins" }
      ],
      correct: 0,
      explanation: {
        en: "Egyptians wrote on papyrus, a paper-like material made from papyrus plant.",
        es: "Egyptians wrote on papyrus, a paper-like material made from papyrus plant.",
        de: "Egyptians wrote on papyrus, a paper-like material made from papyrus plant.",
        nl: "Egyptians wrote on papyrus, a paper-like material made from papyrus plant."
      }
    },
    {
      question: {
        en: "What is a determinative in hieroglyphs?",
        es: "What is a determinative in hieroglyphs?",
        de: "What is a determinative in hieroglyphs?",
        nl: "What is a determinative in hieroglyphs?"
      },
      options: [
        { en: "Symbol clarifying meaning of words", es: "Symbol clarifying meaning of words", de: "Symbol clarifying meaning of words", nl: "Symbol clarifying meaning of words" },
        { en: "Vowel marker", es: "Vowel marker", de: "Vowel marker", nl: "Vowel marker" },
        { en: "Punctuation", es: "Punctuation", de: "Punctuation", nl: "Punctuation" },
        { en: "Number", es: "Number", de: "Number", nl: "Number" }
      ],
      correct: 0,
      explanation: {
        en: "Determinatives are symbols placed at word ends to clarify meaning and category.",
        es: "Determinatives are symbols placed at word ends to clarify meaning and category.",
        de: "Determinatives are symbols placed at word ends to clarify meaning and category.",
        nl: "Determinatives are symbols placed at word ends to clarify meaning and category."
      }
    },
    {
      question: {
        en: "What symbol represents the sound 'n'?",
        es: "What symbol represents the sound 'n'?",
        de: "What symbol represents the sound 'n'?",
        nl: "What symbol represents the sound 'n'?"
      },
      options: [
        { en: "Water ripple", es: "Water ripple", de: "Water ripple", nl: "Water ripple" },
        { en: "Reed", es: "Reed", de: "Reed", nl: "Reed" },
        { en: "Owl", es: "Owl", de: "Owl", nl: "Owl" },
        { en: "Mouth", es: "Mouth", de: "Mouth", nl: "Mouth" }
      ],
      correct: 0,
      explanation: {
        en: "The water ripple hieroglyph represented the sound 'n'.",
        es: "The water ripple hieroglyph represented the sound 'n'.",
        de: "The water ripple hieroglyph represented the sound 'n'.",
        nl: "The water ripple hieroglyph represented the sound 'n'."
      }
    },
    {
      question: {
        en: "What animal represents the sound 'm'?",
        es: "What animal represents the sound 'm'?",
        de: "What animal represents the sound 'm'?",
        nl: "What animal represents the sound 'm'?"
      },
      options: [
        { en: "Owl", es: "Owl", de: "Owl", nl: "Owl" },
        { en: "Bird", es: "Bird", de: "Bird", nl: "Bird" },
        { en: "Snake", es: "Snake", de: "Snake", nl: "Snake" },
        { en: "Lion", es: "Lion", de: "Lion", nl: "Lion" }
      ],
      correct: 0,
      explanation: {
        en: "The owl hieroglyph represented the sound 'm'.",
        es: "The owl hieroglyph represented the sound 'm'.",
        de: "The owl hieroglyph represented the sound 'm'.",
        nl: "The owl hieroglyph represented the sound 'm'."
      }
    },
    {
      question: {
        en: "Did hieroglyphs represent only pictures?",
        es: "Did hieroglyphs represent only pictures?",
        de: "Did hieroglyphs represent only pictures?",
        nl: "Did hieroglyphs represent only pictures?"
      },
      options: [
        { en: "No, they were phonetic too", es: "No, they were phonetic too", de: "No, they were phonetic too", nl: "No, they were phonetic too" },
        { en: "Yes, only pictures", es: "Yes, only pictures", de: "Yes, only pictures", nl: "Yes, only pictures" },
        { en: "Only sounds", es: "Only sounds", de: "Only sounds", nl: "Only sounds" },
        { en: "Only ideas", es: "Only ideas", de: "Only ideas", nl: "Only ideas" }
      ],
      correct: 0,
      explanation: {
        en: "Hieroglyphs functioned as logograms (concepts), phonograms (sounds), and determinatives.",
        es: "Hieroglyphs functioned as logograms (concepts), phonograms (sounds), and determinatives.",
        de: "Hieroglyphs functioned as logograms (concepts), phonograms (sounds), and determinatives.",
        nl: "Hieroglyphs functioned as logograms (concepts), phonograms (sounds), and determinatives."
      }
    },
    {
      question: {
        en: "What is a cartouche used for?",
        es: "What is a cartouche used for?",
        de: "What is a cartouche used for?",
        nl: "What is a cartouche used for?"
      },
      options: [
        { en: "Enclosing royal names", es: "Enclosing royal names", de: "Enclosing royal names", nl: "Enclosing royal names" },
        { en: "Marking tomb entrances", es: "Marking tomb entrances", de: "Marking tomb entrances", nl: "Marking tomb entrances" },
        { en: "Decorative borders", es: "Decorative borders", de: "Decorative borders", nl: "Decorative borders" },
        { en: "Mathematical symbols", es: "Mathematical symbols", de: "Mathematical symbols", nl: "Mathematical symbols" }
      ],
      correct: 0,
      explanation: {
        en: "Cartouches are oval frames that enclosed hieroglyphs spelling royal names.",
        es: "Cartouches are oval frames that enclosed hieroglyphs spelling royal names.",
        de: "Cartouches are oval frames that enclosed hieroglyphs spelling royal names.",
        nl: "Cartouches are oval frames that enclosed hieroglyphs spelling royal names."
      }
    },
    {
      question: {
        en: "What does the ankh symbol mean?",
        es: "What does the ankh symbol mean?",
        de: "What does the ankh symbol mean?",
        nl: "What does the ankh symbol mean?"
      },
      options: [
        { en: "Life", es: "Life", de: "Life", nl: "Life" },
        { en: "Death", es: "Death", de: "Death", nl: "Death" },
        { en: "Power", es: "Power", de: "Power", nl: "Power" },
        { en: "Water", es: "Water", de: "Water", nl: "Water" }
      ],
      correct: 0,
      explanation: {
        en: "The ankh hieroglyph symbolizes life and was often carried by gods and pharaohs.",
        es: "The ankh hieroglyph symbolizes life and was often carried by gods and pharaohs.",
        de: "The ankh hieroglyph symbolizes life and was often carried by gods and pharaohs.",
        nl: "The ankh hieroglyph symbolizes life and was often carried by gods and pharaohs."
      }
    },
    {
      question: {
        en: "When did hieroglyphic writing end?",
        es: "When did hieroglyphic writing end?",
        de: "When did hieroglyphic writing end?",
        nl: "When did hieroglyphic writing end?"
      },
      options: [
        { en: "Around 400 CE", es: "Around 400 CE", de: "Around 400 CE", nl: "Around 400 CE" },
        { en: "100 BCE", es: "100 BCE", de: "100 BCE", nl: "100 BCE" },
        { en: "1000 CE", es: "1000 CE", de: "1000 CE", nl: "1000 CE" },
        { en: "Still used today", es: "Still used today", de: "Still used today", nl: "Still used today" }
      ],
      correct: 0,
      explanation: {
        en: "The last known hieroglyphic inscription dates to 394 CE.",
        es: "The last known hieroglyphic inscription dates to 394 CE.",
        de: "The last known hieroglyphic inscription dates to 394 CE.",
        nl: "The last known hieroglyphic inscription dates to 394 CE."
      }
    },
    {
      question: {
        en: "What tool was used to write on papyrus?",
        es: "What tool was used to write on papyrus?",
        de: "What tool was used to write on papyrus?",
        nl: "What tool was used to write on papyrus?"
      },
      options: [
        { en: "Reed pen", es: "Reed pen", de: "Reed pen", nl: "Reed pen" },
        { en: "Quill", es: "Quill", de: "Quill", nl: "Quill" },
        { en: "Brush", es: "Brush", de: "Brush", nl: "Brush" },
        { en: "Stylus", es: "Stylus", de: "Stylus", nl: "Stylus" }
      ],
      correct: 0,
      explanation: {
        en: "Egyptians used reed pens cut and shaped for writing on papyrus.",
        es: "Egyptians used reed pens cut and shaped for writing on papyrus.",
        de: "Egyptians used reed pens cut and shaped for writing on papyrus.",
        nl: "Egyptians used reed pens cut and shaped for writing on papyrus."
      }
    },
    {
      question: {
        en: "What color ink was most common?",
        es: "What color ink was most common?",
        de: "What color ink was most common?",
        nl: "What color ink was most common?"
      },
      options: [
        { en: "Black and red", es: "Black and red", de: "Black and red", nl: "Black and red" },
        { en: "Blue and green", es: "Blue and green", de: "Blue and green", nl: "Blue and green" },
        { en: "Only black", es: "Only black", de: "Only black", nl: "Only black" },
        { en: "Only red", es: "Only red", de: "Only red", nl: "Only red" }
      ],
      correct: 0,
      explanation: {
        en: "Black ink (carbon) was standard; red ink (ochre) was used for headings and emphasis.",
        es: "Black ink (carbon) was standard; red ink (ochre) was used for headings and emphasis.",
        de: "Black ink (carbon) was standard; red ink (ochre) was used for headings and emphasis.",
        nl: "Black ink (carbon) was standard; red ink (ochre) was used for headings and emphasis."
      }
    },
    {
      question: {
        en: "What is a phonogram?",
        es: "What is a phonogram?",
        de: "What is a phonogram?",
        nl: "What is a phonogram?"
      },
      options: [
        { en: "Symbol representing a sound", es: "Symbol representing a sound", de: "Symbol representing a sound", nl: "Symbol representing a sound" },
        { en: "Picture symbol", es: "Picture symbol", de: "Picture symbol", nl: "Picture symbol" },
        { en: "Number symbol", es: "Number symbol", de: "Number symbol", nl: "Number symbol" },
        { en: "Punctuation", es: "Punctuation", de: "Punctuation", nl: "Punctuation" }
      ],
      correct: 0,
      explanation: {
        en: "Phonograms are hieroglyphs that represent sounds rather than objects or ideas.",
        es: "Phonograms are hieroglyphs that represent sounds rather than objects or ideas.",
        de: "Phonograms are hieroglyphs that represent sounds rather than objects or ideas.",
        nl: "Phonograms are hieroglyphs that represent sounds rather than objects or ideas."
      }
    },
    {
      question: {
        en: "What was hieroglyphic writing reserved for?",
        es: "What was hieroglyphic writing reserved for?",
        de: "What was hieroglyphic writing reserved for?",
        nl: "What was hieroglyphic writing reserved for?"
      },
      options: [
        { en: "Formal and sacred contexts", es: "Formal and sacred contexts", de: "Formal and sacred contexts", nl: "Formal and sacred contexts" },
        { en: "All writing", es: "All writing", de: "All writing", nl: "All writing" },
        { en: "Letters only", es: "Letters only", de: "Letters only", nl: "Letters only" },
        { en: "Numbers only", es: "Numbers only", de: "Numbers only", nl: "Numbers only" }
      ],
      correct: 0,
      explanation: {
        en: "Hieroglyphs were primarily used for formal inscriptions on monuments and sacred texts.",
        es: "Hieroglyphs were primarily used for formal inscriptions on monuments and sacred texts.",
        de: "Hieroglyphs were primarily used for formal inscriptions on monuments and sacred texts.",
        nl: "Hieroglyphs were primarily used for formal inscriptions on monuments and sacred texts."
      }
    },
    {
      question: {
        en: "What is a serekh?",
        es: "What is a serekh?",
        de: "What is a serekh?",
        nl: "What is a serekh?"
      },
      options: [
        { en: "Rectangular frame with falcon containing royal name", es: "Rectangular frame with falcon containing royal name", de: "Rectangular frame with falcon containing royal name", nl: "Rectangular frame with falcon containing royal name" },
        { en: "Type of cartouche", es: "Type of cartouche", de: "Type of cartouche", nl: "Type of cartouche" },
        { en: "Temple entrance", es: "Temple entrance", de: "Temple entrance", nl: "Temple entrance" },
        { en: "Tomb decoration", es: "Tomb decoration", de: "Tomb decoration", nl: "Tomb decoration" }
      ],
      correct: 0,
      explanation: {
        en: "A serekh is an early form of royal name frame, rectangular with palace facade design and Horus falcon on top.",
        es: "A serekh is an early form of royal name frame, rectangular with palace facade design and Horus falcon on top.",
        de: "A serekh is an early form of royal name frame, rectangular with palace facade design and Horus falcon on top.",
        nl: "A serekh is an early form of royal name frame, rectangular with palace facade design and Horus falcon on top."
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

  return level5;
})();