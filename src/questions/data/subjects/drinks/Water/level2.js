// Quiz - Level 2: Drinken - Water (Watersoorten en eigenschappen)
(function() {
  const level2 = {
    name: {
      en: "Water Types and Properties",
      es: "Tipos y Propiedades del Agua",
      de: "Wassertypen und Eigenschaften",
      nl: "Watersoorten en Eigenschappen"
    },
    questions: [
      {
        question: {
          en: "What is the main difference between mineral water and spring water?",
          es: "¿Cuál es la principal diferencia entre agua mineral y agua de manantial?",
          de: "Was ist der Hauptunterschied zwischen Mineralwasser und Quellwasser?",
          nl: "Wat is het belangrijkste verschil tussen mineraalwater en bronwater?"
        },
        options: [
          { en: "Spring water has more minerals", es: "El agua de manantial tiene más minerales", de: "Quellwasser hat mehr Mineralien", nl: "Bronwater heeft meer mineralen" },
          { en: "Mineral water has a guaranteed mineral content", es: "El agua mineral tiene un contenido mineral garantizado", de: "Mineralwasser hat einen garantierten Mineralgehalt", nl: "Mineraalwater heeft een gegarandeerd mineralengehalte" },
          { en: "Spring water is carbonated", es: "El agua de manantial está carbonatada", de: "Quellwasser ist mit Kohlensäure versetzt", nl: "Bronwater is koolzuurhoudend" },
          { en: "They are exactly the same", es: "Son exactamente lo mismo", de: "Sie sind genau dasselbe", nl: "Ze zijn precies hetzelfde" }
        ],
        correct: 1,
        explanation: {
          en: "Mineral water must contain a consistent, naturally occurring mineral content that meets specific standards, while spring water only needs to come from a natural spring.",
          es: "El agua mineral debe contener un contenido mineral natural y constante que cumpla estándares específicos, mientras que el agua de manantial solo necesita provenir de un manantial natural.",
          de: "Mineralwasser muss einen konstanten, natürlich vorkommenden Mineralgehalt haben, der bestimmte Standards erfüllt, während Quellwasser nur aus einer natürlichen Quelle stammen muss.",
          nl: "Mineraalwater moet een consistent, natuurlijk voorkomend mineralengehalte hebben dat aan specifieke normen voldoet, terwijl bronwater alleen uit een natuurlijke bron hoeft te komen."
        }
      },
      {
        question: {
          en: "What makes distilled water different from regular tap water?",
          es: "¿Qué hace que el agua destilada sea diferente del agua del grifo normal?",
          de: "Was macht destilliertes Wasser anders als normales Leitungswasser?",
          nl: "Wat maakt gedestilleerd water anders dan gewoon kraanwater?"
        },
        options: [
          { en: "It contains more minerals", es: "Contiene más minerales", de: "Es enthält mehr Mineralien", nl: "Het bevat meer mineralen" },
          { en: "It has been boiled and condensed to remove impurities", es: "Ha sido hervida y condensada para eliminar impurezas", de: "Es wurde gekocht und kondensiert, um Verunreinigungen zu entfernen", nl: "Het is gekookt en gecondenseerd om onzuiverheden te verwijderen" },
          { en: "It comes from underground sources", es: "Proviene de fuentes subterráneas", de: "Es stammt aus unterirdischen Quellen", nl: "Het komt uit ondergrondse bronnen" },
          { en: "It has chlorine added", es: "Tiene cloro añadido", de: "Es hat Chlor hinzugefügt", nl: "Er is chloor aan toegevoegd" }
        ],
        correct: 1,
        explanation: {
          en: "Distilled water is created by boiling water and then condensing the steam, which removes virtually all minerals, chemicals, and impurities.",
          es: "El agua destilada se crea hirviendo agua y luego condensando el vapor, lo que elimina prácticamente todos los minerales, químicos e impurezas.",
          de: "Destilliertes Wasser wird durch Kochen von Wasser und anschließende Kondensation des Dampfes hergestellt, wodurch praktisch alle Mineralien, Chemikalien und Verunreinigungen entfernt werden.",
          nl: "Gedestilleerd water wordt gemaakt door water te koken en vervolgens de stoom te condenseren, waardoor vrijwel alle mineralen, chemicaliën en onzuiverheden worden weggenomen."
        }
      },
      {
        question: {
          en: "What is the pH level of pure water?",
          es: "¿Cuál es el nivel de pH del agua pura?",
          de: "Wie hoch ist der pH-Wert von reinem Wasser?",
          nl: "Wat is de pH-waarde van zuiver water?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "9", es: "9", de: "9", nl: "9" }
        ],
        correct: 1,
        explanation: {
          en: "Pure water has a neutral pH of 7, which means it's neither acidic (below 7) nor alkaline (above 7).",
          es: "El agua pura tiene un pH neutro de 7, lo que significa que no es ni ácida (por debajo de 7) ni alcalina (por encima de 7).",
          de: "Reines Wasser hat einen neutralen pH-Wert von 7, was bedeutet, dass es weder sauer (unter 7) noch alkalisch (über 7) ist.",
          nl: "Zuiver water heeft een neutrale pH van 7, wat betekent dat het noch zuur (onder 7) noch alkalisch (boven 7) is."
        }
      },
      {
        question: {
          en: "What gives carbonated water its fizz?",
          es: "¿Qué le da el gas al agua carbonatada?",
          de: "Was verleiht kohlensäurehaltigem Wasser seine Kohlensäure?",
          nl: "Wat geeft koolzuurhoudend water zijn bruisend effect?"
        },
        options: [
          { en: "Oxygen gas", es: "Gas oxígeno", de: "Sauerstoffgas", nl: "Zuurstofgas" },
          { en: "Nitrogen gas", es: "Gas nitrógeno", de: "Stickstoffgas", nl: "Stikstofgas" },
          { en: "Carbon dioxide gas", es: "Gas dióxido de carbono", de: "Kohlendioxidgas", nl: "Koolstofdioxide gas" },
          { en: "Hydrogen gas", es: "Gas hidrógeno", de: "Wasserstoffgas", nl: "Waterstofgas" }
        ],
        correct: 2,
        explanation: {
          en: "Carbon dioxide (CO₂) gas is dissolved into water under pressure to create carbonated water, which releases bubbles when the pressure is reduced.",
          es: "El gas dióxido de carbono (CO₂) se disuelve en agua bajo presión para crear agua carbonatada, que libera burbujas cuando se reduce la presión.",
          de: "Kohlendioxid (CO₂) wird unter Druck in Wasser gelöst, um kohlensäurehaltiges Wasser zu erzeugen, das Blasen freisetzt, wenn der Druck reduziert wird.",
          nl: "Koolstofdioxide (CO₂) gas wordt onder druk in water opgelost om koolzuurhoudend water te maken, dat bellen vrijgeeft wanneer de druk wordt verminderd."
        }
      },
      {
        question: {
          en: "What is hard water characterized by?",
          es: "¿Por qué se caracteriza el agua dura?",
          de: "Wodurch ist hartes Wasser charakterisiert?",
          nl: "Waar wordt hard water door gekenmerkt?"
        },
        options: [
          { en: "High temperature", es: "Alta temperatura", de: "Hohe Temperatur", nl: "Hoge temperatuur" },
          { en: "High mineral content, especially calcium and magnesium", es: "Alto contenido mineral, especialmente calcio y magnesio", de: "Hoher Mineralgehalt, besonders Kalzium und Magnesium", nl: "Hoog mineralengehalte, vooral calcium en magnesium" },
          { en: "High acidity", es: "Alta acidez", de: "Hohe Säure", nl: "Hoge zuurgraad" },
          { en: "High salt content", es: "Alto contenido de sal", de: "Hoher Salzgehalt", nl: "Hoog zoutgehalte" }
        ],
        correct: 1,
        explanation: {
          en: "Hard water contains high concentrations of dissolved minerals, particularly calcium and magnesium ions, which can cause soap scum and scale buildup.",
          es: "El agua dura contiene altas concentraciones de minerales disueltos, particularmente iones de calcio y magnesio, que pueden causar espuma de jabón y acumulación de cal.",
          de: "Hartes Wasser enthält hohe Konzentrationen gelöster Mineralien, insbesondere Kalzium- und Magnesiumionen, die Seifenschaum und Kalkablagerungen verursachen können.",
          nl: "Hard water bevat hoge concentraties opgeloste mineralen, vooral calcium- en magnesiumionen, die zeepschuim en kalkaanslag kunnen veroorzaken."
        }
      },
      {
        question: {
          en: "What is the main purpose of fluoride in drinking water?",
          es: "¿Cuál es el propósito principal del fluoruro en el agua potable?",
          de: "Was ist der Hauptzweck von Fluorid im Trinkwasser?",
          nl: "Wat is het hoofddoel van fluoride in drinkwater?"
        },
        options: [
          { en: "To improve taste", es: "Para mejorar el sabor", de: "Um den Geschmack zu verbessern", nl: "Om de smaak te verbeteren" },
          { en: "To prevent tooth decay", es: "Para prevenir la caries dental", de: "Um Karies zu verhindern", nl: "Om tandvlees te voorkomen" },
          { en: "To kill bacteria", es: "Para matar bacterias", de: "Um Bakterien zu töten", nl: "Om bacteriën te doden" },
          { en: "To add color", es: "Para añadir color", de: "Um Farbe hinzuzufügen", nl: "Om kleur toe te voegen" }
        ],
        correct: 1,
        explanation: {
          en: "Fluoride is added to drinking water in many countries as a public health measure to help prevent tooth decay and cavities.",
          es: "El fluoruro se añade al agua potable en muchos países como medida de salud pública para ayudar a prevenir la caries dental y las cavidades.",
          de: "Fluorid wird in vielen Ländern dem Trinkwasser als Maßnahme der öffentlichen Gesundheit zugesetzt, um Karies und Löcher in den Zähnen zu verhindern.",
          nl: "Fluoride wordt in veel landen aan drinkwater toegevoegd als volksgezondheidsmatregel om tandvlees en gaatjes te helpen voorkomen."
        }
      },
      {
        question: {
          en: "What is reverse osmosis water?",
          es: "¿Qué es el agua de ósmosis inversa?",
          de: "Was ist Umkehrosmose-Wasser?",
          nl: "Wat is omgekeerde osmose water?"
        },
        options: [
          { en: "Water that flows backwards", es: "Agua que fluye hacia atrás", de: "Wasser, das rückwärts fließt", nl: "Water dat achterwaarts stroomt" },
          { en: "Water filtered through a semi-permeable membrane", es: "Agua filtrada a través de una membrana semipermeable", de: "Wasser, das durch eine halbdurchlässige Membran gefiltert wird", nl: "Water gefilterd door een semi-permeabel membraan" },
          { en: "Artificially carbonated water", es: "Agua artificialmente carbonatada", de: "Künstlich kohlensäurehaltiges Wasser", nl: "Kunstmatig koolzuurhoudend water" },
          { en: "Water with added electrolytes", es: "Agua con electrolitos añadidos", de: "Wasser mit zugesetzten Elektrolyten", nl: "Water met toegevoegde elektrolieten" }
        ],
        correct: 1,
        explanation: {
          en: "Reverse osmosis uses pressure to force water through a semi-permeable membrane, removing most dissolved substances, contaminants, and particles.",
          es: "La ósmosis inversa usa presión para forzar el agua a través de una membrana semipermeable, eliminando la mayoría de sustancias disueltas, contaminantes y partículas.",
          de: "Umkehrosmose verwendet Druck, um Wasser durch eine halbdurchlässige Membran zu pressen und dabei die meisten gelösten Stoffe, Verunreinigungen und Partikel zu entfernen.",
          nl: "Omgekeerde osmose gebruikt druk om water door een semi-permeabel membraan te persen, waarbij de meeste opgeloste stoffen, verontreinigingen en deeltjes worden weggenomen."
        }
      },
      {
        question: {
          en: "What temperature does water reach its maximum density?",
          es: "¿A qué temperatura alcanza el agua su máxima densidad?",
          de: "Bei welcher Temperatur erreicht Wasser seine maximale Dichte?",
          nl: "Bij welke temperatuur bereikt water zijn maximale dichtheid?"
        },
        options: [
          { en: "0°C (32°F)", es: "0°C (32°F)", de: "0°C (32°F)", nl: "0°C (32°F)" },
          { en: "4°C (39°F)", es: "4°C (39°F)", de: "4°C (39°F)", nl: "4°C (39°F)" },
          { en: "10°C (50°F)", es: "10°C (50°F)", de: "10°C (50°F)", nl: "10°C (50°F)" },
          { en: "20°C (68°F)", es: "20°C (68°F)", de: "20°C (68°F)", nl: "20°C (68°F)" }
        ],
        correct: 1,
        explanation: {
          en: "Water reaches its maximum density at 4°C (39°F). This is why ice floats on water - it's less dense than the water below.",
          es: "El agua alcanza su máxima densidad a 4°C (39°F). Por eso el hielo flota en el agua: es menos denso que el agua de abajo.",
          de: "Wasser erreicht seine maximale Dichte bei 4°C (39°F). Deshalb schwimmt Eis auf Wasser - es ist weniger dicht als das Wasser darunter.",
          nl: "Water bereikt zijn maximale dichtheid bij 4°C (39°F). Daarom drijft ijs op water - het is minder dicht dan het water eronder."
        }
      },
      {
        question: {
          en: "What is alkaline water?",
          es: "¿Qué es el agua alcalina?",
          de: "Was ist alkalisches Wasser?",
          nl: "Wat is alkalisch water?"
        },
        options: [
          { en: "Water with a pH below 7", es: "Agua con un pH por debajo de 7", de: "Wasser mit einem pH-Wert unter 7", nl: "Water met een pH onder 7" },
          { en: "Water with a pH above 7", es: "Agua with un pH por encima de 7", de: "Wasser mit einem pH-Wert über 7", nl: "Water met een pH boven 7" },
          { en: "Water with added salt", es: "Agua con sal añadida", de: "Wasser mit zugesetztem Salz", nl: "Water met toegevoegd zout" },
          { en: "Water without minerals", es: "Agua sin minerales", de: "Wasser ohne Mineralien", nl: "Water zonder mineralen" }
        ],
        correct: 1,
        explanation: {
          en: "Alkaline water has a pH level above 7, making it less acidic than regular water. Some believe it offers health benefits, though this is debated.",
          es: "El agua alcalina tiene un nivel de pH por encima de 7, haciéndola menos ácida que el agua regular. Algunos creen que ofrece beneficios para la salud, aunque esto es debatido.",
          de: "Alkalisches Wasser hat einen pH-Wert über 7, was es weniger sauer als normales Wasser macht. Einige glauben, es bietet gesundheitliche Vorteile, obwohl dies umstritten ist.",
          nl: "Alkalisch water heeft een pH-niveau boven 7, waardoor het minder zuur is dan gewoon water. Sommigen geloven dat het gezondheidsvoordelen biedt, hoewel dit omstreden is."
        }
      },
      {
        question: {
          en: "What is the main difference between soft and hard water for household use?",
          es: "¿Cuál es la principal diferencia entre agua blanda y dura para uso doméstico?",
          de: "Was ist der Hauptunterschied zwischen weichem und hartem Wasser für den Haushaltsgebrauch?",
          nl: "Wat is het belangrijkste verschil tussen zacht en hard water voor huishoudelijk gebruik?"
        },
        options: [
          { en: "Soft water creates more soap lather", es: "El agua blanda crea más espuma de jabón", de: "Weiches Wasser erzeugt mehr Seifenschaum", nl: "Zacht water maakt meer zeepschuim" },
          { en: "Hard water is better for drinking", es: "El agua dura es mejor para beber", de: "Hartes Wasser ist besser zum Trinken", nl: "Hard water is beter om te drinken" },
          { en: "Soft water is always hot", es: "El agua blanda siempre está caliente", de: "Weiches Wasser ist immer heiß", nl: "Zacht water is altijd warm" },
          { en: "Hard water cleans better", es: "El agua dura limpia mejor", de: "Hartes Wasser reinigt besser", nl: "Hard water reinigt beter" }
        ],
        correct: 0,
        explanation: {
          en: "Soft water has fewer dissolved minerals, allowing soap to lather more easily and preventing soap scum buildup that occurs with hard water.",
          es: "El agua blanda tiene menos minerales disueltos, permitiendo que el jabón haga espuma más fácilmente y previniendo la acumulación de espuma que ocurre con el agua dura.",
          de: "Weiches Wasser hat weniger gelöste Mineralien, wodurch Seife leichter schäumt und die Bildung von Seifenschaum verhindert wird, die bei hartem Wasser auftritt.",
          nl: "Zacht water heeft minder opgeloste mineralen, waardoor zeep gemakkelijker schuimt en zeepschuim ophoping wordt voorkomen die optreedt bij hard water."
        }
      },
      {
        question: {
          en: "What is sparkling water?",
          es: "¿Qué es agua con gas?",
          de: "Was ist Sprudelwasser?",
          nl: "Wat is bruisend water?"
        },
        options: [
          { en: "Water with added sparkles", es: "Agua con destellos añadidos", de: "Wasser mit zugesetzten Funken", nl: "Water met toegevoegde glitters" },
          { en: "Water with dissolved carbon dioxide creating bubbles", es: "Agua con dióxido de carbono disuelto creando burbujas", de: "Wasser mit gelöstem Kohlendioxid, das Blasen bildet", nl: "Water met opgelost koolstofdioxide dat bellen maakt" },
          { en: "Water with added minerals", es: "Agua con minerales añadidos", de: "Wasser mit zugesetzten Mineralien", nl: "Water met toegevoegde mineralen" },
          { en: "Water that glows", es: "Agua que brilla", de: "Wasser, das leuchtet", nl: "Water dat gloeit" }
        ],
        correct: 1,
        explanation: {
          en: "Sparkling water is water infused with carbon dioxide gas under pressure, which creates carbonation (bubbles). It can be naturally carbonated or artificially carbonated.",
          es: "El agua con gas es agua infundida con gas de dióxido de carbono bajo presión, lo que crea carbonatación (burbujas). Puede ser carbonatada naturalmente o artificialmente.",
          de: "Sprudelwasser ist Wasser, das unter Druck mit Kohlendioxidgas versetzt wird, wodurch Kohlensäure (Blasen) entsteht. Es kann natürlich oder künstlich karbonisiert sein.",
          nl: "Bruisend water is water dat onder druk is geïnfuseerd met koolstofdioxide gas, wat carbonatatie (bellen) creëert. Het kan natuurlijk of kunstmatig gecarboneerd zijn."
        }
      },
      {
        question: {
          en: "What is purified water?",
          es: "¿Qué es agua purificada?",
          de: "Was ist gereinigtes Wasser?",
          nl: "Wat is gezuiverd water?"
        },
        options: [
          { en: "Water from pure mountain springs only", es: "Agua solo de manantiales de montaña puros", de: "Wasser nur aus reinen Bergquellen", nl: "Water alleen uit pure bergbronnen" },
          { en: "Water that has been mechanically filtered or processed to remove impurities", es: "Agua que ha sido filtrada mecánicamente o procesada para eliminar impurezas", de: "Wasser, das mechanisch gefiltert oder verarbeitet wurde, um Verunreinigungen zu entfernen", nl: "Water dat mechanisch is gefilterd of verwerkt om onzuiverheden te verwijderen" },
          { en: "Water with added purifying chemicals", es: "Agua con químicos purificadores añadidos", de: "Wasser mit zugesetzten Reinigungschemikalien", nl: "Water met toegevoegde zuiverende chemicaliën" },
          { en: "Water that is 100% pure H2O", es: "Agua que es 100% H2O puro", de: "Wasser, das zu 100% reines H2O ist", nl: "Water dat 100% puur H2O is" }
        ],
        correct: 1,
        explanation: {
          en: "Purified water is water that has been filtered or processed to remove contaminants like chemicals, bacteria, and dissolved solids. Common methods include reverse osmosis, distillation, and deionization.",
          es: "El agua purificada es agua que ha sido filtrada o procesada para eliminar contaminantes como químicos, bacterias y sólidos disueltos. Los métodos comunes incluyen ósmosis inversa, destilación y desionización.",
          de: "Gereinigtes Wasser ist Wasser, das gefiltert oder verarbeitet wurde, um Verunreinigungen wie Chemikalien, Bakterien und gelöste Feststoffe zu entfernen. Gängige Methoden umfassen Umkehrosmose, Destillation und Entionisierung.",
          nl: "Gezuiverd water is water dat is gefilterd of verwerkt om verontreinigingen zoals chemicaliën, bacteriën en opgeloste vaste stoffen te verwijderen. Gebruikelijke methoden zijn omgekeerde osmose, destillatie en deïonisatie."
        }
      },
      {
        question: {
          en: "What is glacial water?",
          es: "¿Qué es agua glacial?",
          de: "Was ist Gletscherwasser?",
          nl: "Wat is gletsjerwater?"
        },
        options: [
          { en: "Very cold tap water", es: "Agua del grifo muy fría", de: "Sehr kaltes Leitungswasser", nl: "Zeer koud kraanwater" },
          { en: "Water from melted glaciers and ice caps", es: "Agua de glaciares e hielo derretidos", de: "Wasser aus geschmolzenen Gletschern und Eiskappen", nl: "Water uit gesmolten gletsjers en ijskappen" },
          { en: "Water frozen for thousands of yrs", es: "Agua congelada durante miles de años", de: "Wasser, das tausende Jahre gefroren war", nl: "Water dat duizenden jaren bevroren is geweest" },
          { en: "Artificially frozen water", es: "Agua congelada artificialmente", de: "Künstlich gefrorenes Wasser", nl: "Kunstmatig bevroren water" }
        ],
        correct: 1,
        explanation: {
          en: "Glacial water comes from melted ice from glaciers or ice caps. It's often considered very pure because it's been naturally filtered and has been isolated from modern pollutants for long periods.",
          es: "El agua glacial proviene de hielo derretido de glaciares o capas de hielo. A menudo se considera muy pura porque ha sido filtrada naturalmente y ha estado aislada de contaminantes modernos durante largos períodos.",
          de: "Gletscherwasser stammt aus geschmolzenem Eis von Gletschern oder Eiskappen. Es wird oft als sehr rein angesehen, weil es natürlich gefiltert wurde und lange Zeit von modernen Schadstoffen isoliert war.",
          nl: "Gletsjerwater komt van gesmolten ijs uit gletsjers of ijskappen. Het wordt vaak als zeer puur beschouwd omdat het natuurlijk is gefilterd en lange tijd geïsoleerd is geweest van moderne vervuilende stoffen."
        }
      },
      {
        question: {
          en: "What is deionized water?",
          es: "¿Qué es agua desionizada?",
          de: "Was ist entionisiertes Wasser?",
          nl: "Wat is gedeïoniseerd water?"
        },
        options: [
          { en: "Water with added ions", es: "Agua con iones añadidos", de: "Wasser mit zugesetzten Ionen", nl: "Water met toegevoegde ionen" },
          { en: "Water with minerals and ions removed", es: "Agua con minerales e iones eliminados", de: "Wasser mit entfernten Mineralien und Ionen", nl: "Water waaruit mineralen en ionen zijn verwijderd" },
          { en: "Water treated with iodine", es: "Agua tratada con yodo", de: "Mit Jod behandeltes Wasser", nl: "Water behandeld met jodium" },
          { en: "Water with negative charge", es: "Agua con carga negativa", de: "Wasser mit negativer Ladung", nl: "Water met negatieve lading" }
        ],
        correct: 1,
        explanation: {
          en: "Deionized water has had nearly all of its mineral ions removed through ion exchange resins. It's commonly used in laboratories, industrial processes, and cooling systems where mineral deposits would cause problems.",
          es: "El agua desionizada ha tenido casi todos sus iones minerales eliminados mediante resinas de intercambio iónico. Se usa comúnmente en laboratorios, procesos industriales y sistemas de enfriamiento donde los depósitos minerales causarían problemas.",
          de: "Entionisiertes Wasser hat fast alle seine Mineralionen durch Ionenaustauschharze entfernt bekommen. Es wird häufig in Laboren, industriellen Prozessen und Kühlsystemen verwendet, wo Mineralablagerungen Probleme verursachen würden.",
          nl: "Gedeïoniseerd water heeft bijna al zijn minerale ionen verwijderd gekregen door ionenwisselingsharsen. Het wordt vaak gebruikt in laboratoria, industriële processen en koelsystemen waar minerale afzettingen problemen zouden veroorzaken."
        }
      },
      {
        question: {
          en: "What is artesian water?",
          es: "¿Qué es agua artesiana?",
          de: "Was ist artesisches Wasser?",
          nl: "Wat is artesisch water?"
        },
        options: [
          { en: "Water made by artisans", es: "Agua hecha por artesanos", de: "Wasser von Kunsthandwerkern hergestellt", nl: "Water gemaakt door ambachtslieden" },
          { en: "Water from a well tapping a confined aquifer where natural pressure brings water to the surface", es: "Agua de un pozo que aprovecha un acuífero confinado donde la presión natural lleva el agua a la superficie", de: "Wasser aus einem Brunnen, der einen begrenzten Grundwasserleiter anzapft, wo natürlicher Druck das Wasser an die Oberfläche bringt", nl: "Water uit een put die een afgesloten watervoerende laag aanboort waar natuurlijke druk het water naar het oppervlak brengt" },
          { en: "Artificially flavored water", es: "Agua con sabor artificial", de: "Künstlich aromatisiertes Wasser", nl: "Kunstmatig gearomatiseerd water" },
          { en: "Water from ancient wells", es: "Agua de pozos antiguos", de: "Wasser aus alten Brunnen", nl: "Water uit oude putten" }
        ],
        correct: 1,
        explanation: {
          en: "Artesian water comes from a well that taps into a confined aquifer where the water is under pressure. This pressure naturally forces the water up through the well, sometimes reaching the surface without pumping.",
          es: "El agua artesiana proviene de un pozo que aprovecha un acuífero confinado donde el agua está bajo presión. Esta presión fuerza naturalmente el agua hacia arriba a través del pozo, a veces alcanzando la superficie sin bombeo.",
          de: "Artesisches Wasser stammt aus einem Brunnen, der einen begrenzten Grundwasserleiter anzapft, in dem das Wasser unter Druck steht. Dieser Druck drückt das Wasser natürlich durch den Brunnen nach oben, manchmal bis zur Oberfläche ohne Pumpen.",
          nl: "Artesisch water komt uit een put die een afgesloten watervoerende laag aanboort waar het water onder druk staat. Deze druk dwingt het water natuurlijk omhoog door de put, soms tot aan het oppervlak zonder pompen."
        }
      },
      {
        question: {
          en: "What causes water to have a metallic taste?",
          es: "¿Qué hace que el agua tenga un sabor metálico?",
          de: "Was verursacht einen metallischen Geschmack im Wasser?",
          nl: "Wat veroorzaakt dat water een metaalachtige smaak heeft?"
        },
        options: [
          { en: "High oxygen content", es: "Alto contenido de oxígeno", de: "Hoher Sauerstoffgehalt", nl: "Hoog zuurstofgehalte" },
          { en: "Dissolved metals like iron, copper, or zinc", es: "Metales disueltos como hierro, cobre o zinc", de: "Gelöste Metalle wie Eisen, Kupfer oder Zink", nl: "Opgeloste metalen zoals ijzer, koper of zink" },
          { en: "Too much chlorine", es: "Demasiado cloro", de: "Zu viel Chlor", nl: "Te veel chloor" },
          { en: "High temperature", es: "Alta temperatura", de: "Hohe Temperatur", nl: "Hoge temperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "A metallic taste in water is typically caused by dissolved metals such as iron, copper, zinc, or manganese. This can occur from corroded pipes, natural mineral content, or industrial contamination.",
          es: "Un sabor metálico en el agua típicamente es causado por metales disueltos como hierro, cobre, zinc o manganeso. Esto puede ocurrir por tuberías corroídas, contenido mineral natural o contaminación industrial.",
          de: "Ein metallischer Geschmack im Wasser wird typischerweise durch gelöste Metalle wie Eisen, Kupfer, Zink oder Mangan verursacht. Dies kann durch korrodierte Rohre, natürlichen Mineralgehalt oder industrielle Verschmutzung entstehen.",
          nl: "Een metaalachtige smaak in water wordt typisch veroorzaakt door opgeloste metalen zoals ijzer, koper, zink of mangaan. Dit kan ontstaan door gecorrodeerde leidingen, natuurlijk mineraalgehalte of industriële vervuiling."
        }
      },
      {
        question: {
          en: "What is the difference between still and sparkling mineral water?",
          es: "¿Cuál es la diferencia entre agua mineral sin gas y con gas?",
          de: "Was ist der Unterschied zwischen stillem und sprudelndem Mineralwasser?",
          nl: "Wat is het verschil tussen stil en bruisend mineraalwater?"
        },
        options: [
          { en: "Mineral content", es: "Contenido mineral", de: "Mineralgehalt", nl: "Mineraalgehalte" },
          { en: "Carbonation (CO₂ content)", es: "Carbonatación (contenido de CO₂)", de: "Kohlensäure (CO₂-Gehalt)", nl: "Carbonatatie (CO₂-gehalte)" },
          { en: "Temperature", es: "Temperatura", de: "Temperatur", nl: "Temperatuur" },
          { en: "Source location", es: "Ubicación de la fuente", de: "Quellenstandort", nl: "Bronlocatie" }
        ],
        correct: 1,
        explanation: {
          en: "The main difference is carbonation. Still mineral water has no added carbon dioxide, while sparkling mineral water contains dissolved CO₂ that creates bubbles. Both can have the same mineral content.",
          es: "La principal diferencia es la carbonatación. El agua mineral sin gas no tiene dióxido de carbono añadido, mientras que el agua mineral con gas contiene CO₂ disuelto que crea burbujas. Ambas pueden tener el mismo contenido mineral.",
          de: "Der Hauptunterschied ist die Kohlensäure. Stilles Mineralwasser hat kein zugesetztes Kohlendioxid, während sprudelndes Mineralwasser gelöstes CO₂ enthält, das Blasen erzeugt. Beide können den gleichen Mineralgehalt haben.",
          nl: "Het belangrijkste verschil is carbonatatie. Stil mineraalwater heeft geen toegevoegd koolstofdioxide, terwijl bruisend mineraalwater opgelost CO₂ bevat dat bellen creëert. Beide kunnen hetzelfde mineraalgehalte hebben."
        }
      },
      {
        question: {
          en: "What is well water?",
          es: "¿Qué es agua de pozo?",
          de: "Was ist Brunnenwasser?",
          nl: "Wat is putwater?"
        },
        options: [
          { en: "Water that has been treated well", es: "Agua que ha sido bien tratada", de: "Wasser, das gut behandelt wurde", nl: "Water dat goed is behandeld" },
          { en: "Water extracted from underground aquifers through a drilled well", es: "Agua extraída de acuíferos subterráneos a través de un pozo perforado", de: "Wasser, das durch einen gebohrten Brunnen aus unterirdischen Grundwasserleitern gewonnen wird", nl: "Water gewonnen uit ondergrondse watervoerende lagen door een geboorde put" },
          { en: "Water stored in a well", es: "Agua almacenada en un pozo", de: "Wasser, das in einem Brunnen gespeichert ist", nl: "Water opgeslagen in een put" },
          { en: "Healthy water", es: "Agua saludable", de: "Gesundes Wasser", nl: "Gezond water" }
        ],
        correct: 1,
        explanation: {
          en: "Well water is groundwater that is extracted from aquifers through a drilled or dug well. It's often untreated and its quality depends on the local geology and potential contamination sources.",
          es: "El agua de pozo es agua subterránea que se extrae de acuíferos a través de un pozo perforado o excavado. A menudo no está tratada y su calidad depende de la geología local y las posibles fuentes de contaminación.",
          de: "Brunnenwasser ist Grundwasser, das durch einen gebohrten oder gegrabenen Brunnen aus Grundwasserleitern gewonnen wird. Es ist oft unbehandelt und seine Qualität hängt von der lokalen Geologie und möglichen Kontaminationsquellen ab.",
          nl: "Putwater is grondwater dat wordt gewonnen uit watervoerende lagen door een geboorde of gegraven put. Het is vaak onbehandeld en de kwaliteit hangt af van de lokale geologie en mogelijke vervuilingsbronnen."
        }
      },
      {
        question: {
          en: "What makes water 'heavy'?",
          es: "¿Qué hace que el agua sea 'pesada'?",
          de: "Was macht Wasser 'schwer'?",
          nl: "Wat maakt water 'zwaar'?"
        },
        options: [
          { en: "High mineral content", es: "Alto contenido mineral", de: "Hoher Mineralgehalt", nl: "Hoog mineraalgehalte" },
          { en: "Deuterium instead of regular hydrogen atoms", es: "Deuterio en lugar de átomos de hidrógeno regulares", de: "Deuterium statt normaler Wasserstoffatome", nl: "Deuterium in plaats van gewone waterstofatomen" },
          { en: "High pressure", es: "Alta presión", de: "Hoher Druck", nl: "Hoge druk" },
          { en: "Low temperature", es: "Baja temperatura", de: "Niedrige Temperatur", nl: "Lage temperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "Heavy water (D₂O) contains deuterium, a heavier isotope of hydrogen, instead of the common protium isotope. It's about 11% denser than regular water and is used in nuclear reactors and scientific research.",
          es: "El agua pesada (D₂O) contiene deuterio, un isótopo más pesado del hidrógeno, en lugar del isótopo común protio. Es aproximadamente un 11% más densa que el agua regular y se usa en reactores nucleares e investigación científica.",
          de: "Schweres Wasser (D₂O) enthält Deuterium, ein schwereres Isotop des Wasserstoffs, anstelle des gewöhnlichen Protium-Isotops. Es ist etwa 11% dichter als normales Wasser und wird in Kernreaktoren und wissenschaftlicher Forschung verwendet.",
          nl: "Zwaar water (D₂O) bevat deuterium, een zwaarder isotoop van waterstof, in plaats van het gewone protium-isotoop. Het is ongeveer 11% dichter dan gewoon water en wordt gebruikt in kernreactoren en wetenschappelijk onderzoek."
        }
      },
      {
        question: {
          en: "What is the conductivity of pure water?",
          es: "¿Cuál es la conductividad del agua pura?",
          de: "Was ist die Leitfähigkeit von reinem Wasser?",
          nl: "Wat is de geleidbaarheid van puur water?"
        },
        options: [
          { en: "Very high - pure water is an excellent conductor", es: "Muy alta - el agua pura es un excelente conductor", de: "Sehr hoch - reines Wasser ist ein ausgezeichneter Leiter", nl: "Zeer hoog - puur water is een uitstekende geleider" },
          { en: "Very low - pure water is a poor conductor", es: "Muy baja - el agua pura es un conductor pobre", de: "Sehr niedrig - reines Wasser ist ein schlechter Leiter", nl: "Zeer laag - puur water is een slechte geleider" },
          { en: "Medium conductivity", es: "Conductividad media", de: "Mittlere Leitfähigkeit", nl: "Gemiddelde geleidbaarheid" },
          { en: "Zero - pure water cannot conduct electricity", es: "Cero - el agua pura no puede conducir electricidad", de: "Null - reines Wasser kann keine Elektrizität leiten", nl: "Nul - puur water kan geen elektriciteit geleiden" }
        ],
        correct: 1,
        explanation: {
          en: "Pure water is actually a poor conductor of electricity because it lacks dissolved ions. The conductivity of water increases with dissolved minerals and salts, which is why tap water conducts electricity better than pure water.",
          es: "El agua pura es en realidad un conductor pobre de electricidad porque carece de iones disueltos. La conductividad del agua aumenta con minerales y sales disueltos, por eso el agua del grifo conduce mejor la electricidad que el agua pura.",
          de: "Reines Wasser ist tatsächlich ein schlechter Leiter für Elektrizität, weil es keine gelösten Ionen enthält. Die Leitfähigkeit von Wasser nimmt mit gelösten Mineralien und Salzen zu, weshalb Leitungswasser Elektrizität besser leitet als reines Wasser.",
          nl: "Puur water is eigenlijk een slechte geleider van elektriciteit omdat het geen opgeloste ionen bevat. De geleidbaarheid van water neemt toe met opgeloste mineralen en zouten, daarom geleidt kraanwater elektriciteit beter dan puur water."
        }
      },
      {
        question: {
          en: "What is alkaline water?",
          es: "¿Qué es el agua alcalina?",
          de: "Was ist alkalisches Wasser?",
          nl: "Wat is alkalisch water?"
        },
        options: [
          { en: "Water with a pH above 7", es: "Agua con un pH superior a 7", de: "Wasser mit einem pH-Wert über 7", nl: "Water met een pH boven 7" },
          { en: "Water with a pH below 7", es: "Agua con un pH inferior a 7", de: "Wasser mit einem pH-Wert unter 7", nl: "Water met een pH onder 7" },
          { en: "Water with added alkaline metals", es: "Agua con metales alcalinos añadidos", de: "Wasser mit zugesetzten Alkalimetallen", nl: "Water met toegevoegde alkalimetalen" },
          { en: "Water from alkaline springs only", es: "Agua solo de manantiales alcalinos", de: "Wasser nur aus alkalischen Quellen", nl: "Water alleen uit alkalische bronnen" }
        ],
        correct: 0,
        explanation: {
          en: "Alkaline water has a pH level above 7, making it less acidic than neutral water (pH 7). It may contain alkaline minerals like calcium, potassium, and magnesium.",
          es: "El agua alcalina tiene un nivel de pH superior a 7, haciéndola menos ácida que el agua neutra (pH 7). Puede contener minerales alcalinos como calcio, potasio y magnesio.",
          de: "Alkalisches Wasser hat einen pH-Wert über 7, was es weniger sauer macht als neutrales Wasser (pH 7). Es kann alkalische Mineralien wie Kalzium, Kalium und Magnesium enthalten.",
          nl: "Alkalisch water heeft een pH-niveau boven 7, waardoor het minder zuur is dan neutraal water (pH 7). Het kan alkalische mineralen bevatten zoals calcium, kalium en magnesium."
        }
      },
      {
        question: {
          en: "What is carbonated water?",
          es: "¿Qué es el agua carbonatada?",
          de: "Was ist kohlensäurehaltiges Wasser?",
          nl: "Wat is koolzuurhoudend water?"
        },
        options: [
          { en: "Water with dissolved carbon dioxide", es: "Agua con dióxido de carbono disuelto", de: "Wasser mit gelöstem Kohlendioxid", nl: "Water met opgelost koolstofdioxide" },
          { en: "Water from carbon-rich areas", es: "Agua de áreas ricas en carbono", de: "Wasser aus kohlenstoffreichen Gebieten", nl: "Water uit koolstofrijke gebieden" },
          { en: "Water with carbon particles", es: "Agua con partículas de carbono", de: "Wasser mit Kohlenstoffpartikeln", nl: "Water met koolstofdeeltjes" },
          { en: "Filtered water", es: "Agua filtrada", de: "Gefiltertes Wasser", nl: "Gefilterd water" }
        ],
        correct: 0,
        explanation: {
          en: "Carbonated water contains dissolved carbon dioxide gas under pressure, which creates bubbles and a fizzy sensation. It can occur naturally or be artificially carbonated.",
          es: "El agua carbonatada contiene gas de dióxido de carbono disuelto bajo presión, lo que crea burbujas y una sensación efervescente. Puede ocurrir naturalmente o ser carbonatada artificialmente.",
          de: "Kohlensäurehaltiges Wasser enthält unter Druck gelöstes Kohlendioxid-Gas, das Blasen und ein sprudelndes Gefühl erzeugt. Es kann natürlich vorkommen oder künstlich mit Kohlensäure versetzt werden.",
          nl: "Koolzuurhoudend water bevat opgelost koolstofdioxide gas onder druk, wat bubbels en een bruisend gevoel creëert. Het kan van nature voorkomen of kunstmatig met koolzuur worden verrijkt."
        }
      },
      {
        question: {
          en: "What is hard water?",
          es: "¿Qué es el agua dura?",
          de: "Was ist hartes Wasser?",
          nl: "Wat is hard water?"
        },
        options: [
          { en: "Water with high mineral content (calcium and magnesium)", es: "Agua con alto contenido mineral (calcio y magnesio)", de: "Wasser mit hohem Mineralgehalt (Kalzium und Magnesium)", nl: "Water met hoog mineralengehalte (calcium en magnesium)" },
          { en: "Frozen water", es: "Agua congelada", de: "Gefrorenes Wasser", nl: "Bevroren water" },
          { en: "Water under high pressure", es: "Agua bajo alta presión", de: "Wasser unter hohem Druck", nl: "Water onder hoge druk" },
          { en: "Water with a hard surface layer", es: "Agua con una capa superficial dura", de: "Wasser mit einer harten Oberflächenschicht", nl: "Water met een harde oppervlaktelaag" }
        ],
        correct: 0,
        explanation: {
          en: "Hard water contains high concentrations of dissolved minerals, primarily calcium and magnesium. It can cause limescale buildup and makes soap less effective.",
          es: "El agua dura contiene altas concentraciones de minerales disueltos, principalmente calcio y magnesio. Puede causar acumulación de cal y hace que el jabón sea menos efectivo.",
          de: "Hartes Wasser enthält hohe Konzentrationen gelöster Mineralien, hauptsächlich Kalzium und Magnesium. Es kann Kalkablagerungen verursachen und macht Seife weniger wirksam.",
          nl: "Hard water bevat hoge concentraties opgeloste mineralen, voornamelijk calcium en magnesium. Het kan kalkaanslag veroorzaken en maakt zeep minder effectief."
        }
      },
      {
        question: {
          en: "What is soft water?",
          es: "¿Qué es el agua blanda?",
          de: "Was ist weiches Wasser?",
          nl: "Wat is zacht water?"
        },
        options: [
          { en: "Water with low mineral content", es: "Agua con bajo contenido mineral", de: "Wasser mit niedrigem Mineralgehalt", nl: "Water met laag mineralengehalte" },
          { en: "Water that feels smooth", es: "Agua que se siente suave", de: "Wasser, das sich glatt anfühlt", nl: "Water dat zacht aanvoelt" },
          { en: "Warm water", es: "Agua tibia", de: "Warmes Wasser", nl: "Warm water" },
          { en: "Liquid water (not frozen)", es: "Agua líquida (no congelada)", de: "Flüssiges Wasser (nicht gefroren)", nl: "Vloeibaar water (niet bevroren)" }
        ],
        correct: 0,
        explanation: {
          en: "Soft water has low concentrations of calcium and magnesium ions. It lathers better with soap and doesn't cause mineral buildup in pipes or appliances.",
          es: "El agua blanda tiene bajas concentraciones de iones de calcio y magnesio. Hace más espuma con el jabón y no causa acumulación mineral en tuberías o electrodomésticos.",
          de: "Weiches Wasser hat niedrige Konzentrationen von Kalzium- und Magnesium-Ionen. Es schäumt besser mit Seife und verursacht keine Mineralablagerungen in Rohren oder Geräten.",
          nl: "Zacht water heeft lage concentraties calcium- en magnesiumionen. Het schuimt beter met zeep en veroorzaakt geen minerale ophoping in leidingen of apparaten."
        }
      },
      {
        question: {
          en: "What is deionized water?",
          es: "¿Qué es el agua desionizada?",
          de: "Was ist deionisiertes Wasser?",
          nl: "Wat is gedeïoniseerd water?"
        },
        options: [
          { en: "Water with ions removed through ion exchange", es: "Agua con iones eliminados mediante intercambio iónico", de: "Wasser mit durch Ionenaustausch entfernten Ionen", nl: "Water met ionen verwijderd door ionenwisseling" },
          { en: "Water with negative charge only", es: "Agua solo con carga negativa", de: "Wasser nur mit negativer Ladung", nl: "Water alleen met negatieve lading" },
          { en: "Water without oxygen", es: "Agua sin oxígeno", de: "Wasser ohne Sauerstoff", nl: "Water zonder zuurstof" },
          { en: "Water at neutral pH", es: "Agua a pH neutro", de: "Wasser bei neutralem pH", nl: "Water bij neutrale pH" }
        ],
        correct: 0,
        explanation: {
          en: "Deionized water has had its mineral ions removed through an ion exchange process. It's very pure and used in laboratories, electronics manufacturing, and medical applications.",
          es: "El agua desionizada ha tenido sus iones minerales eliminados mediante un proceso de intercambio iónico. Es muy pura y se usa en laboratorios, fabricación de electrónicos y aplicaciones médicas.",
          de: "Deionisiertes Wasser hat seine Mineralionen durch einen Ionenaustauschprozess entfernt. Es ist sehr rein und wird in Labors, Elektronikfertigung und medizinischen Anwendungen verwendet.",
          nl: "Gedeïoniseerd water heeft zijn mineraalionen verwijderd door een ionenwisselingsproces. Het is zeer zuiver en wordt gebruikt in laboratoria, elektronica-fabricage en medische toepassingen."
        }
      },
      {
        question: {
          en: "What is purified water?",
          es: "¿Qué es el agua purificada?",
          de: "Was ist gereinigtes Wasser?",
          nl: "Wat is gezuiverd water?"
        },
        options: [
          { en: "Water processed to remove impurities and contaminants", es: "Agua procesada para eliminar impurezas y contaminantes", de: "Wasser, das verarbeitet wurde, um Verunreinigungen zu entfernen", nl: "Water verwerkt om onzuiverheden en verontreinigingen te verwijderen" },
          { en: "Water blessed by religious ceremony", es: "Agua bendecida por ceremonia religiosa", de: "Wasser, das durch religiöse Zeremonie gesegnet wurde", nl: "Water gezegend door religieuze ceremonie" },
          { en: "Water from pure mountain streams", es: "Agua de arroyos de montaña puros", de: "Wasser aus reinen Bergbächen", nl: "Water uit pure bergstromen" },
          { en: "Water with added purifying agents", es: "Agua con agentes purificadores añadidos", de: "Wasser mit zugesetzten Reinigungsmitteln", nl: "Water met toegevoegde zuiverende middelen" }
        ],
        correct: 0,
        explanation: {
          en: "Purified water has been mechanically filtered or processed to remove impurities, chemicals, and contaminants. Methods include reverse osmosis, distillation, deionization, or carbon filtration.",
          es: "El agua purificada ha sido filtrada mecánicamente o procesada para eliminar impurezas, químicos y contaminantes. Los métodos incluyen ósmosis inversa, destilación, desionización o filtración de carbón.",
          de: "Gereinigtes Wasser wurde mechanisch gefiltert oder verarbeitet, um Verunreinigungen, Chemikalien und Schadstoffe zu entfernen. Methoden umfassen Umkehrosmose, Destillation, Deionisierung oder Kohlefiltration.",
          nl: "Gezuiverd water is mechanisch gefilterd of verwerkt om onzuiverheden, chemicaliën en verontreinigingen te verwijderen. Methoden omvatten omgekeerde osmose, destillatie, deïonisatie of koolstoffiltratie."
        }
      },
      {
        question: {
          en: "What is reverse osmosis water?",
          es: "¿Qué es el agua de ósmosis inversa?",
          de: "Was ist Umkehrosmose-Wasser?",
          nl: "Wat is omgekeerde osmose water?"
        },
        options: [
          { en: "Water filtered through a semipermeable membrane", es: "Agua filtrada a través de una membrana semipermeable", de: "Wasser, das durch eine halbdurchlässige Membran gefiltert wurde", nl: "Water gefilterd door een semi-permeabel membraan" },
          { en: "Water flowing backward", es: "Agua fluyendo hacia atrás", de: "Rückwärts fließendes Wasser", nl: "Water dat achterwaarts stroomt" },
          { en: "Water from osmosis plants", es: "Agua de plantas de ósmosis", de: "Wasser aus Osmoseanlagen", nl: "Water uit osmose-installaties" },
          { en: "Water with reversed pH", es: "Agua con pH invertido", de: "Wasser mit umgekehrtem pH", nl: "Water met omgekeerde pH" }
        ],
        correct: 0,
        explanation: {
          en: "Reverse osmosis water is purified by forcing it through a semipermeable membrane that removes up to 99% of dissolved salts, minerals, and contaminants. It's one of the most effective purification methods.",
          es: "El agua de ósmosis inversa se purifica forzándola a través de una membrana semipermeable que elimina hasta el 99% de sales disueltas, minerales y contaminantes. Es uno de los métodos de purificación más efectivos.",
          de: "Umkehrosmose-Wasser wird gereinigt, indem es durch eine halbdurchlässige Membran gepresst wird, die bis zu 99% der gelösten Salze, Mineralien und Schadstoffe entfernt. Es ist eine der effektivsten Reinigungsmethoden.",
          nl: "Omgekeerde osmose water wordt gezuiverd door het door een semi-permeabel membraan te persen dat tot 99% van opgeloste zouten, mineralen en verontreinigingen verwijdert. Het is een van de meest effectieve zuiveringsmethoden."
        }
      },
      {
        question: {
          en: "What is artesian water?",
          es: "¿Qué es el agua artesiana?",
          de: "Was ist artesisches Wasser?",
          nl: "Wat is artesisch water?"
        },
        options: [
          { en: "Water from a confined aquifer under natural pressure", es: "Agua de un acuífero confinado bajo presión natural", de: "Wasser aus einem begrenzten Grundwasserleiter unter natürlichem Druck", nl: "Water uit een afgesloten watervoerende laag onder natuurlijke druk" },
          { en: "Water made by artisans", es: "Agua hecha por artesanos", de: "Wasser von Kunsthandwerkern hergestellt", nl: "Water gemaakt door ambachtslieden" },
          { en: "Water from ancient wells", es: "Agua de pozos antiguos", de: "Wasser aus alten Brunnen", nl: "Water uit oude putten" },
          { en: "Water with artistic minerals", es: "Agua con minerales artísticos", de: "Wasser mit künstlerischen Mineralien", nl: "Water met artistieke mineralen" }
        ],
        correct: 0,
        explanation: {
          en: "Artesian water comes from a well that taps a confined aquifer where water is under enough natural pressure to rise to the surface without pumping. It's naturally filtered through rock layers.",
          es: "El agua artesiana proviene de un pozo que aprovecha un acuífero confinado donde el agua está bajo suficiente presión natural para subir a la superficie sin bombeo. Se filtra naturalmente a través de capas de roca.",
          de: "Artesisches Wasser stammt aus einem Brunnen, der einen begrenzten Grundwasserleiter anzapft, in dem Wasser unter ausreichendem natürlichem Druck steht, um ohne Pumpen an die Oberfläche zu steigen. Es wird natürlich durch Gesteinsschichten gefiltert.",
          nl: "Artesisch water komt uit een put die een afgesloten watervoerende laag aanboort waar water onder voldoende natuurlijke druk staat om zonder pompen naar het oppervlak te stijgen. Het wordt natuurlijk gefilterd door rotslagen."
        }
      },
      {
        question: {
          en: "What is sparkling water?",
          es: "¿Qué es el agua con gas?",
          de: "Was ist Sprudelwasser?",
          nl: "Wat is bruisend water?"
        },
        options: [
          { en: "Water with carbon dioxide bubbles", es: "Agua con burbujas de dióxido de carbono", de: "Wasser mit Kohlendioxid-Blasen", nl: "Water met koolstofdioxidebubbels" },
          { en: "Water that sparkles in sunlight", es: "Agua que brilla bajo la luz del sol", de: "Wasser, das im Sonnenlicht funkelt", nl: "Water dat in zonlicht schittert" },
          { en: "Water with added glitter", es: "Agua con purpurina añadida", de: "Wasser mit zugesetztem Glitzer", nl: "Water met toegevoegde glitters" },
          { en: "Filtered spring water", es: "Agua de manantial filtrada", de: "Gefiltertes Quellwasser", nl: "Gefilterd bronwater" }
        ],
        correct: 0,
        explanation: {
          en: "Sparkling water is water containing dissolved carbon dioxide gas, either naturally occurring or artificially added. The CO2 creates bubbles and a tingling sensation on the tongue.",
          es: "El agua con gas es agua que contiene gas de dióxido de carbono disuelto, ya sea de origen natural o añadido artificialmente. El CO2 crea burbujas y una sensación de hormigueo en la lengua.",
          de: "Sprudelwasser ist Wasser, das gelöstes Kohlendioxid-Gas enthält, entweder natürlich vorkommend oder künstlich zugesetzt. Das CO2 erzeugt Blasen und ein prickelndes Gefühl auf der Zunge.",
          nl: "Bruisend water is water dat opgelost koolstofdioxidegas bevat, hetzij van nature voorkomend of kunstmatig toegevoegd. De CO2 creëert bubbels en een tintelend gevoel op de tong."
        }
      },
      {
        question: {
          en: "What is the difference between still and sparkling water?",
          es: "¿Cuál es la diferencia entre agua sin gas y agua con gas?",
          de: "Was ist der Unterschied zwischen stillem und sprudelndem Wasser?",
          nl: "Wat is het verschil tussen stil en bruisend water?"
        },
        options: [
          { en: "Sparkling water contains carbon dioxide gas", es: "El agua con gas contiene dióxido de carbono", de: "Sprudelndes Wasser enthält Kohlendioxid-Gas", nl: "Bruisend water bevat koolstofdioxidegas" },
          { en: "Still water is colder", es: "El agua sin gas es más fría", de: "Stilles Wasser ist kälter", nl: "Stil water is kouder" },
          { en: "Sparkling water has more minerals", es: "El agua con gas tiene más minerales", de: "Sprudelndes Wasser hat mehr Mineralien", nl: "Bruisend water heeft meer mineralen" },
          { en: "Still water comes from bottles only", es: "El agua sin gas solo viene en botellas", de: "Stilles Wasser kommt nur aus Flaschen", nl: "Stil water komt alleen uit flessen" }
        ],
        correct: 0,
        explanation: {
          en: "The main difference is that sparkling water contains dissolved carbon dioxide gas that creates bubbles, while still water has no carbonation. Both can have similar mineral content.",
          es: "La principal diferencia es que el agua con gas contiene dióxido de carbono disuelto que crea burbujas, mientras que el agua sin gas no tiene carbonatación. Ambas pueden tener contenido mineral similar.",
          de: "Der Hauptunterschied ist, dass sprudelndes Wasser gelöstes Kohlendioxid-Gas enthält, das Blasen erzeugt, während stilles Wasser keine Kohlensäure hat. Beide können ähnlichen Mineralgehalt haben.",
          nl: "Het belangrijkste verschil is dat bruisend water opgelost koolstofdioxidegas bevat dat bubbels creëert, terwijl stil water geen koolzuur heeft. Beide kunnen vergelijkbare minerale inhoud hebben."
        }
      },
      {
        question: {
          en: "What is glacial water?",
          es: "¿Qué es el agua glacial?",
          de: "Was ist Gletscherwasser?",
          nl: "Wat is gletsjerswater?"
        },
        options: [
          { en: "Water from melted glaciers or ice caps", es: "Agua de glaciares o capas de hielo derretidas", de: "Wasser von geschmolzenen Gletschern oder Eiskappen", nl: "Water van gesmolten gletsjers of ijskappen" },
          { en: "Very cold tap water", es: "Agua del grifo muy fría", de: "Sehr kaltes Leitungswasser", nl: "Zeer koud kraanwater" },
          { en: "Water with ice cubes", es: "Agua con cubitos de hielo", de: "Wasser mit Eiswürfeln", nl: "Water met ijsblokjes" },
          { en: "Ancient frozen water", es: "Agua congelada antigua", de: "Uraltes gefrorenes Wasser", nl: "Oud bevroren water" }
        ],
        correct: 0,
        explanation: {
          en: "Glacial water is naturally pure water that comes from melting glaciers or ice caps. It has been naturally filtered through ice and rock for thousands of years and typically has very low mineral content.",
          es: "El agua glacial es agua naturalmente pura que proviene del derretimiento de glaciares o capas de hielo. Ha sido filtrada naturalmente a través de hielo y roca durante miles de años y típicamente tiene muy bajo contenido mineral.",
          de: "Gletscherwasser ist natürlich reines Wasser, das von schmelzenden Gletschern oder Eiskappen stammt. Es wurde über Tausende von Jahren natürlich durch Eis und Gestein gefiltert und hat typischerweise einen sehr niedrigen Mineralgehalt.",
          nl: "Gletsjerswater is natuurlijk zuiver water dat afkomstig is van smeltende gletsjers of ijskappen. Het is duizenden jaren lang natuurlijk gefilterd door ijs en rotsen en heeft meestal een zeer laag mineralengehalte."
        }
      },
      {
        question: {
          en: "What is fluoridated water?",
          es: "¿Qué es el agua fluorada?",
          de: "Was ist fluoridiertes Wasser?",
          nl: "Wat is gefluorideerd water?"
        },
        options: [
          { en: "Water with added fluoride to prevent tooth decay", es: "Agua con fluoruro añadido para prevenir caries", de: "Wasser mit zugesetztem Fluorid zur Kariesprävention", nl: "Water met toegevoegd fluoride om tandbederf te voorkomen" },
          { en: "Water from fluorine-rich rocks", es: "Agua de rocas ricas en flúor", de: "Wasser aus fluorhaltigen Gesteinen", nl: "Water uit fluorrijke rotsen" },
          { en: "Water that glows under UV light", es: "Agua que brilla bajo luz UV", de: "Wasser, das unter UV-Licht leuchtet", nl: "Water dat gloeit onder UV-licht" },
          { en: "Water purified with fluorine gas", es: "Agua purificada con gas flúor", de: "Wasser, das mit Fluorgas gereinigt wurde", nl: "Water gezuiverd met fluoorgas" }
        ],
        correct: 0,
        explanation: {
          en: "Fluoridated water has fluoride compounds added to reduce tooth decay in communities. The optimal level is typically 0.7-1.2 mg/L. It's a common public health measure in many countries.",
          es: "El agua fluorada tiene compuestos de fluoruro añadidos para reducir las caries dentales en las comunidades. El nivel óptimo es típicamente 0.7-1.2 mg/L. Es una medida común de salud pública en muchos países.",
          de: "Fluoridiertes Wasser hat zugesetzte Fluoridverbindungen, um Karies in Gemeinden zu reduzieren. Der optimale Gehalt liegt typischerweise bei 0,7-1,2 mg/L. Es ist eine gängige Maßnahme der öffentlichen Gesundheit in vielen Ländern.",
          nl: "Gefluorideerd water heeft fluorideverbindingen toegevoegd om tandbederf in gemeenschappen te verminderen. Het optimale niveau is meestal 0,7-1,2 mg/L. Het is een veelvoorkomende volksgezondheidsmaatres in veel landen."
        }
      },
      {
        question: {
          en: "What is the main characteristic of brackish water?",
          es: "¿Cuál es la característica principal del agua salobre?",
          de: "Was ist die Haupteigenschaft von Brackwasser?",
          nl: "Wat is de belangrijkste eigenschap van brak water?"
        },
        options: [
          { en: "Saltier than fresh water but less salty than seawater", es: "Más salada que el agua dulce pero menos salada que el agua de mar", de: "Salziger als Süßwasser, aber weniger salzig als Meerwasser", nl: "Zouter dan zoet water maar minder zout dan zeewater" },
          { en: "Water with broken minerals", es: "Agua con minerales rotos", de: "Wasser mit gebrochenen Mineralien", nl: "Water met gebroken mineralen" },
          { en: "Very cold water", es: "Agua muy fría", de: "Sehr kaltes Wasser", nl: "Zeer koud water" },
          { en: "Water from broken pipes", es: "Agua de tuberías rotas", de: "Wasser aus kaputten Rohren", nl: "Water uit kapotte leidingen" }
        ],
        correct: 0,
        explanation: {
          en: "Brackish water has salinity between fresh water (less than 0.5 ppt) and seawater (about 35 ppt), typically 0.5-30 ppt. It's found in estuaries where rivers meet the sea.",
          es: "El agua salobre tiene una salinidad entre el agua dulce (menos de 0.5 ppt) y el agua de mar (alrededor de 35 ppt), típicamente 0.5-30 ppt. Se encuentra en estuarios donde los ríos se encuentran con el mar.",
          de: "Brackwasser hat einen Salzgehalt zwischen Süßwasser (weniger als 0,5 ppt) und Meerwasser (etwa 35 ppt), typischerweise 0,5-30 ppt. Es findet sich in Mündungsgebieten, wo Flüsse auf das Meer treffen.",
          nl: "Brak water heeft een zoutgehalte tussen zoet water (minder dan 0,5 ppt) en zeewater (ongeveer 35 ppt), meestal 0,5-30 ppt. Het wordt gevonden in estuaria waar rivieren de zee ontmoeten."
        }
      },
      {
        question: {
          en: "What is oxygenated water?",
          es: "¿Qué es el agua oxigenada?",
          de: "Was ist sauerstoffangereichertes Wasser?",
          nl: "Wat is zuurstofrijk water?"
        },
        options: [
          { en: "Water with extra dissolved oxygen added", es: "Agua con oxígeno disuelto extra añadido", de: "Wasser mit zusätzlichem gelöstem Sauerstoff", nl: "Water met extra opgelost zuurstof toegevoegd" },
          { en: "Water used for oxygen therapy", es: "Agua utilizada para terapia de oxígeno", de: "Wasser für Sauerstofftherapie verwendet", nl: "Water gebruikt voor zuurstoftherapie" },
          { en: "Water from oxygen-rich areas", es: "Agua de áreas ricas en oxígeno", de: "Wasser aus sauerstoffreichen Gebieten", nl: "Water uit zuurstofrijke gebieden" },
          { en: "Hydrogen peroxide solution", es: "Solución de peróxido de hidrógeno", de: "Wasserstoffperoxidlösung", nl: "Waterstofperoxide oplossing" }
        ],
        correct: 0,
        explanation: {
          en: "Oxygenated water has had extra oxygen dissolved into it under pressure. While marketed for health benefits, the body gets oxygen primarily through breathing, not drinking water.",
          es: "El agua oxigenada tiene oxígeno extra disuelto bajo presión. Aunque se comercializa por beneficios de salud, el cuerpo obtiene oxígeno principalmente respirando, no bebiendo agua.",
          de: "Sauerstoffangereichertes Wasser hat zusätzlichen Sauerstoff unter Druck gelöst. Obwohl es für gesundheitliche Vorteile vermarktet wird, erhält der Körper Sauerstoff hauptsächlich durch Atmung, nicht durch Trinkwasser.",
          nl: "Zuurstofrijk water heeft extra zuurstof onder druk opgelost. Hoewel het wordt verkocht voor gezondheidsvoordelen, krijgt het lichaam zuurstof voornamelijk door ademhaling, niet door drinkwater."
        }
      },
      {
        question: {
          en: "What is the specific heat capacity of water?",
          es: "¿Cuál es la capacidad calorífica específica del agua?",
          de: "Was ist die spezifische Wärmekapazität von Wasser?",
          nl: "Wat is de soortelijke warmte van water?"
        },
        options: [
          { en: "High - water resists temperature changes", es: "Alta - el agua resiste cambios de temperatura", de: "Hoch - Wasser widersteht Temperaturänderungen", nl: "Hoog - water weerstaat temperatuurveranderingen" },
          { en: "Low - water changes temperature easily", es: "Baja - el agua cambia de temperatura fácilmente", de: "Niedrig - Wasser ändert leicht die Temperatur", nl: "Laag - water verandert gemakkelijk van temperatuur" },
          { en: "Zero - water has no heat capacity", es: "Cero - el agua no tiene capacidad calorífica", de: "Null - Wasser hat keine Wärmekapazität", nl: "Nul - water heeft geen warmtecapaciteit" },
          { en: "Variable - depends on mineral content", es: "Variable - depende del contenido mineral", de: "Variabel - abhängig vom Mineralgehalt", nl: "Variabel - afhankelijk van mineralengehalte" }
        ],
        correct: 0,
        explanation: {
          en: "Water has a very high specific heat capacity (4.18 J/g°C), meaning it takes a lot of energy to change its temperature. This property helps regulate Earth's climate and our body temperature.",
          es: "El agua tiene una capacidad calorífica específica muy alta (4.18 J/g°C), lo que significa que se necesita mucha energía para cambiar su temperatura. Esta propiedad ayuda a regular el clima de la Tierra y nuestra temperatura corporal.",
          de: "Wasser hat eine sehr hohe spezifische Wärmekapazität (4,18 J/g°C), was bedeutet, dass viel Energie benötigt wird, um seine Temperatur zu ändern. Diese Eigenschaft hilft, das Erdklima und unsere Körpertemperatur zu regulieren.",
          nl: "Water heeft een zeer hoge soortelijke warmte (4,18 J/g°C), wat betekent dat er veel energie nodig is om de temperatuur te veranderen. Deze eigenschap helpt het klimaat van de aarde en onze lichaamstemperatuur te reguleren."
        }
      },
      {
        question: {
          en: "What is the surface tension of water?",
          es: "¿Cuál es la tensión superficial del agua?",
          de: "Was ist die Oberflächenspannung von Wasser?",
          nl: "Wat is de oppervlaktespanning van water?"
        },
        options: [
          { en: "High - creates a skin-like surface", es: "Alta - crea una superficie similar a una piel", de: "Hoch - erzeugt eine hautartige Oberfläche", nl: "Hoog - creëert een huidachtig oppervlak" },
          { en: "Low - water spreads easily", es: "Baja - el agua se extiende fácilmente", de: "Niedrig - Wasser verteilt sich leicht", nl: "Laag - water verspreidt zich gemakkelijk" },
          { en: "Zero - no surface effects", es: "Cero - sin efectos superficiales", de: "Null - keine Oberflächeneffekte", nl: "Nul - geen oppervlakte-effecten" },
          { en: "Negative - water repels itself", es: "Negativa - el agua se repele a sí misma", de: "Negativ - Wasser stößt sich selbst ab", nl: "Negatief - water stoot zichzelf af" }
        ],
        correct: 0,
        explanation: {
          en: "Water has high surface tension due to hydrogen bonding between molecules. This allows insects to walk on water, water droplets to form, and capillary action to occur in plants.",
          es: "El agua tiene alta tensión superficial debido a los enlaces de hidrógeno entre moléculas. Esto permite que los insectos caminen sobre el agua, se formen gotas de agua y ocurra acción capilar en las plantas.",
          de: "Wasser hat eine hohe Oberflächenspannung aufgrund von Wasserstoffbrückenbindungen zwischen Molekülen. Dies ermöglicht Insekten, auf Wasser zu laufen, Wassertropfen zu bilden und Kapillarwirkung in Pflanzen.",
          nl: "Water heeft een hoge oppervlaktespanning door waterstofbruggen tussen moleculen. Dit stelt insecten in staat op water te lopen, waterdruppels te vormen en capillaire werking in planten mogelijk te maken."
        }
      },
      {
        question: {
          en: "What is the density of water at 4°C?",
          es: "¿Cuál es la densidad del agua a 4°C?",
          de: "Was ist die Dichte von Wasser bei 4°C?",
          nl: "Wat is de dichtheid van water bij 4°C?"
        },
        options: [
          { en: "Maximum density (1.0 g/cm³)", es: "Densidad máxima (1.0 g/cm³)", de: "Maximale Dichte (1,0 g/cm³)", nl: "Maximale dichtheid (1,0 g/cm³)" },
          { en: "Minimum density", es: "Densidad mínima", de: "Minimale Dichte", nl: "Minimale dichtheid" },
          { en: "Zero density", es: "Densidad cero", de: "Null-Dichte", nl: "Nul dichtheid" },
          { en: "Variable density", es: "Densidad variable", de: "Variable Dichte", nl: "Variabele dichtheid" }
        ],
        correct: 0,
        explanation: {
          en: "Water reaches its maximum density at 4°C (1.0 g/cm³). Above and below this temperature, water becomes less dense. This unique property allows ice to float and prevents lakes from freezing solid from bottom up.",
          es: "El agua alcanza su densidad máxima a 4°C (1.0 g/cm³). Por encima y por debajo de esta temperatura, el agua se vuelve menos densa. Esta propiedad única permite que el hielo flote y evita que los lagos se congelen completamente de abajo hacia arriba.",
          de: "Wasser erreicht seine maximale Dichte bei 4°C (1,0 g/cm³). Über und unter dieser Temperatur wird Wasser weniger dicht. Diese einzigartige Eigenschaft ermöglicht Eis zu schwimmen und verhindert, dass Seen von unten nach oben durchfrieren.",
          nl: "Water bereikt zijn maximale dichtheid bij 4°C (1,0 g/cm³). Boven en onder deze temperatuur wordt water minder dicht. Deze unieke eigenschap stelt ijs in staat te drijven en voorkomt dat meren van onder naar boven volledig bevriezen."
        }
      },
      {
        question: {
          en: "What is the viscosity of water compared to other liquids?",
          es: "¿Cuál es la viscosidad del agua comparada con otros líquidos?",
          de: "Was ist die Viskosität von Wasser im Vergleich zu anderen Flüssigkeiten?",
          nl: "Wat is de viscositeit van water vergeleken met andere vloeistoffen?"
        },
        options: [
          { en: "Relatively low - water flows easily", es: "Relativamente baja - el agua fluye fácilmente", de: "Relativ niedrig - Wasser fließt leicht", nl: "Relatief laag - water stroomt gemakkelijk" },
          { en: "Very high - water is thick like honey", es: "Muy alta - el agua es espesa como la miel", de: "Sehr hoch - Wasser ist dick wie Honig", nl: "Zeer hoog - water is dik als honing" },
          { en: "Zero - perfect fluidity", es: "Cero - fluidez perfecta", de: "Null - perfekte Fluidität", nl: "Nul - perfecte vloeibaarheid" },
          { en: "Variable - changes with minerals", es: "Variable - cambia con minerales", de: "Variabel - ändert sich mit Mineralien", nl: "Variabel - verandert met mineralen" }
        ],
        correct: 0,
        explanation: {
          en: "Water has relatively low viscosity (about 1 centipoise at 20°C), making it flow easily. For comparison, honey has viscosity about 10,000 times higher, while motor oil is about 100 times more viscous.",
          es: "El agua tiene una viscosidad relativamente baja (aproximadamente 1 centipoise a 20°C), lo que hace que fluya fácilmente. Para comparación, la miel tiene una viscosidad aproximadamente 10,000 veces mayor, mientras que el aceite de motor es aproximadamente 100 veces más viscoso.",
          de: "Wasser hat eine relativ niedrige Viskosität (etwa 1 Centipoise bei 20°C), was es leicht fließen lässt. Zum Vergleich: Honig hat eine etwa 10.000 Mal höhere Viskosität, während Motoröl etwa 100 Mal viskoser ist.",
          nl: "Water heeft een relatief lage viscositeit (ongeveer 1 centipoise bij 20°C), waardoor het gemakkelijk stroomt. Ter vergelijking: honing heeft een viscositeit ongeveer 10.000 keer hoger, terwijl motorolie ongeveer 100 keer viskeuzer is."
        }
      },
      {
        question: {
          en: "What is the capillary action of water?",
          es: "¿Qué es la acción capilar del agua?",
          de: "Was ist die Kapillarwirkung von Wasser?",
          nl: "Wat is de capillaire werking van water?"
        },
        options: [
          { en: "Water's ability to move through narrow spaces against gravity", es: "La capacidad del agua para moverse a través de espacios estrechos contra la gravedad", de: "Die Fähigkeit von Wasser, sich durch enge Räume gegen die Schwerkraft zu bewegen", nl: "Het vermogen van water om door nauwe ruimtes tegen de zwaartekracht in te bewegen" },
          { en: "Water collecting in hair follicles", es: "Agua acumulándose en folículos pilosos", de: "Wasser sammelt sich in Haarfollikeln", nl: "Water verzamelt zich in haarzakjes" },
          { en: "Water flowing through blood capillaries", es: "Agua fluyendo a través de capilares sanguíneos", de: "Wasser fließt durch Blutkapillaren", nl: "Water stroomt door bloedhaarvaten" },
          { en: "Water's surface tension only", es: "Solo la tensión superficial del agua", de: "Nur die Oberflächenspannung von Wasser", nl: "Alleen de oppervlaktespanning van water" }
        ],
        correct: 0,
        explanation: {
          en: "Capillary action allows water to move through narrow tubes or porous materials against gravity due to cohesion and adhesion. This is how plants draw water from roots to leaves and how paper towels absorb water.",
          es: "La acción capilar permite que el agua se mueva a través de tubos estrechos o materiales porosos contra la gravedad debido a la cohesión y adhesión. Así es como las plantas extraen agua de las raíces a las hojas y cómo las toallas de papel absorben agua.",
          de: "Die Kapillarwirkung ermöglicht es Wasser, sich durch enge Röhren oder poröse Materialien gegen die Schwerkraft zu bewegen aufgrund von Kohäsion und Adhäsion. So ziehen Pflanzen Wasser von Wurzeln zu Blättern und Papierhandtücher absorbieren Wasser.",
          nl: "Capillaire werking stelt water in staat om door nauwe buizen of poreuze materialen tegen de zwaartekracht in te bewegen door cohesie en adhesie. Zo halen planten water van wortels naar bladeren en absorberen papieren handdoeken water."
        }
      },
      {
        question: {
          en: "What is the thermal conductivity of water?",
          es: "¿Cuál es la conductividad térmica del agua?",
          de: "Was ist die Wärmeleitfähigkeit von Wasser?",
          nl: "Wat is de thermische geleidbaarheid van water?"
        },
        options: [
          { en: "Moderate - better than air, worse than metals", es: "Moderada - mejor que el aire, peor que los metales", de: "Moderat - besser als Luft, schlechter als Metalle", nl: "Gematigd - beter dan lucht, slechter dan metalen" },
          { en: "Highest of all liquids", es: "La más alta de todos los líquidos", de: "Höchste aller Flüssigkeiten", nl: "Hoogste van alle vloeistoffen" },
          { en: "Zero - water cannot conduct heat", es: "Cero - el agua no puede conducir calor", de: "Null - Wasser kann keine Wärme leiten", nl: "Nul - water kan geen warmte geleiden" },
          { en: "Perfect insulator", es: "Aislante perfecto", de: "Perfekter Isolator", nl: "Perfecte isolator" }
        ],
        correct: 0,
        explanation: {
          en: "Water has moderate thermal conductivity (0.6 W/m·K). It conducts heat better than air but much worse than metals. This property makes water useful for cooling and heating systems.",
          es: "El agua tiene una conductividad térmica moderada (0.6 W/m·K). Conduce el calor mejor que el aire pero mucho peor que los metales. Esta propiedad hace que el agua sea útil para sistemas de enfriamiento y calefacción.",
          de: "Wasser hat eine moderate Wärmeleitfähigkeit (0,6 W/m·K). Es leitet Wärme besser als Luft, aber viel schlechter als Metalle. Diese Eigenschaft macht Wasser nützlich für Kühl- und Heizsysteme.",
          nl: "Water heeft een gematigde thermische geleidbaarheid (0,6 W/m·K). Het geleidt warmte beter dan lucht maar veel slechter dan metalen. Deze eigenschap maakt water nuttig voor koel- en verwarmingssystemen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
