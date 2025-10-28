// Seafood Quiz - Level 3
(function() {
  const level3 = {
    name: {
      en: "Seafood Level 3",
      es: "Mariscos Nivel 3",
      de: "Meeresfrüchte Stufe 3",
      nl: "Zeevruchten Level 3"
    },
    questions: [
      {
        question: {
          en: "What is the main difference between a green salad and a composed salad?",
          es: "¿Cuál es la principal diferencia entre una ensalada verde y una ensalada compuesta?",
          de: "Was ist der Hauptunterschied zwischen einem grünen Salat und einem komponierten Salat?",
          nl: "Wat is het belangrijkste verschil tussen een groene salade en een samengestelde salade?"
        },
        options: [
          { en: "Green salads use only leafy greens, composed salads include various ingredients arranged together", es: "Las ensaladas verdes usan solo hojas verdes, las ensaladas compuestas incluyen varios ingredientes organizados juntos", de: "Grüne Salate verwenden nur Blattgrün, komponierte Salate enthalten verschiedene zusammen arrangierte Zutaten", nl: "Groene salades gebruiken alleen bladgroenten, samengestelde salades bevatten verschillende ingrediënten samen gerangschikt" },
          { en: "Green salads are always cold, composed salads are warm", es: "Las ensaladas verdes siempre están frías, las ensaladas compuestas están calientes", de: "Grüne Salate sind immer kalt, komponierte Salate sind warm", nl: "Groene salades zijn altijd koud, samengestelde salades zijn warm" },
          { en: "Green salads have dressing, composed salads don't", es: "Las ensaladas verdes tienen aderezo, las ensaladas compuestas no", de: "Grüne Salate haben Dressing, komponierte Salate nicht", nl: "Groene salades hebben dressing, samengestelde salades niet" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Green salads primarily consist of leafy greens like lettuce, spinach, or arugula, while composed salads combine multiple ingredients like vegetables, proteins, fruits, nuts, and cheese arranged in an attractive presentation.",
          es: "Las ensaladas verdes consisten principalmente en hojas verdes como lechuga, espinaca o rúcula, mientras que las ensaladas compuestas combinan múltiples ingredientes como verduras, proteínas, frutas, nueces y queso organizados en una presentación atractiva.",
          de: "Grüne Salate bestehen hauptsächlich aus Blattgrün wie Kopfsalat, Spinat oder Rucola, während komponierte Salate mehrere Zutaten wie Gemüse, Proteine, Früchte, Nüsse und Käse in einer attraktiven Präsentation kombinieren.",
          nl: "Groene salades bestaan voornamelijk uit bladgroenten zoals sla, spinazie of rucola, terwijl samengestelde salades meerdere ingrediënten zoals groenten, eiwitten, fruit, noten en kaas combineren in een aantrekkelijke presentatie."
        }
      },
      {
        question: {
          en: "Which of these vegetables is NOT typically considered a salad green?",
          es: "¿Cuál de estas verduras NO se considera típicamente una hoja verde para ensalada?",
          de: "Welches dieser Gemüse gilt normalerweise NICHT als Salatgrün?",
          nl: "Welke van deze groenten wordt meestal NIET beschouwd als slagroente?"
        },
        options: [
          { en: "Lettuce", es: "Lechuga", de: "Kopfsalat", nl: "Sla" },
          { en: "Spinach", es: "Espinaca", de: "Spinat", nl: "Spinazie" },
          { en: "Broccoli", es: "Brócoli", de: "Brokkoli", nl: "Broccoli" },
          { en: "Arugula", es: "Rúcula", de: "Rucola", nl: "Rucola" }
        ],
        correct: 2,
        explanation: {
          en: "Broccoli is a cruciferous vegetable that's typically cooked before eating and is not commonly used as a raw salad green. Lettuce, spinach, and arugula are all common leafy greens used fresh in salads.",
          es: "El brócoli es una verdura crucífera que típicamente se cocina antes de comer y no se usa comúnmente como hoja verde cruda para ensalada. La lechuga, espinaca y rúcula son todas hojas verdes comunes usadas frescas en ensaladas.",
          de: "Brokkoli ist ein Kreuzblütengewächs, das typischerweise vor dem Verzehr gekocht wird und nicht häufig als rohes Salatgrün verwendet wird. Kopfsalat, Spinat und Rucola sind alle gängige Blattgrüns, die frisch in Salaten verwendet werden.",
          nl: "Broccoli is een kruisbloemige groente die gewoonlijk gekookt wordt voordat het gegeten wordt en wordt niet vaak gebruikt als rauwe slagroente. Sla, spinazie en rucola zijn allemaal veelgebruikte bladgroenten die vers in salades worden gebruikt."
        }
      },
      {
        question: {
          en: "What is the primary purpose of washing salad greens before eating?",
          es: "¿Cuál es el propósito principal de lavar las hojas verdes para ensalada antes de comer?",
          de: "Was ist der Hauptzweck des Waschens von Salatgrün vor dem Essen?",
          nl: "Wat is het hoofddoel van het wassen van slagroenten voor het eten?"
        },
        options: [
          { en: "To make them taste better", es: "Para que sepan mejor", de: "Damit sie besser schmecken", nl: "Om ze beter te laten smaken" },
          { en: "To remove dirt, bacteria, and pesticide residues", es: "Para quitar suciedad, bacterias y residuos de pesticidas", de: "Um Schmutz, Bakterien und Pestizidrückstände zu entfernen", nl: "Om vuil, bacteriën en pesticidenresten te verwijderen" },
          { en: "To make them last longer", es: "Para que duren más tiempo", de: "Damit sie länger halten", nl: "Om ze langer te laten meegaan" },
          { en: "To add moisture", es: "Para agregar humedad", de: "Um Feuchtigkeit hinzuzufügen", nl: "Om vocht toe te voegen" }
        ],
        correct: 1,
        explanation: {
          en: "Washing salad greens removes dirt, harmful bacteria like E. coli and Salmonella, and pesticide residues that may be present on the leaves. This is essential for food safety, especially since greens are eaten raw.",
          es: "Lavar las hojas verdes para ensalada elimina suciedad, bacterias dañinas como E. coli y Salmonella, y residuos de pesticidas que pueden estar presentes en las hojas. Esto es esencial para la seguridad alimentaria, especialmente porque las hojas verdes se comen crudas.",
          de: "Das Waschen von Salatgrün entfernt Schmutz, schädliche Bakterien wie E. coli und Salmonellen, sowie Pestizidrückstände, die auf den Blättern vorhanden sein können. Dies ist wesentlich für die Lebensmittelsicherheit, besonders da Grüns roh gegessen werden.",
          nl: "Het wassen van slagroenten verwijdert vuil, schadelijke bacteriën zoals E. coli en Salmonella, en pesticidenresten die aanwezig kunnen zijn op de bladeren. Dit is essentieel voor voedselveiligheid, vooral omdat groenten rauw worden gegeten."
        }
      },
      {
        question: {
          en: "Which of these is a root vegetable commonly used in salads?",
          es: "¿Cuál de estas es una verdura de raíz comúnmente usada en ensaladas?",
          de: "Welches davon ist ein Wurzelgemüse, das häufig in Salaten verwendet wird?",
          nl: "Welke van deze is een wortelgroente die vaak in salades wordt gebruikt?"
        },
        options: [
          { en: "Tomato", es: "Tomate", de: "Tomate", nl: "Tomaat" },
          { en: "Cucumber", es: "Pepino", de: "Gurke", nl: "Komkommer" },
          { en: "Carrot", es: "Zanahoria", de: "Karotte", nl: "Wortel" },
          { en: "Bell pepper", es: "Pimiento", de: "Paprika", nl: "Paprika" }
        ],
        correct: 2,
        explanation: {
          en: "Carrots are root vegetables that grow underground and are commonly grated or julienned for use in salads. Tomatoes are fruits, cucumbers are fruits of a vine plant, and bell peppers are fruits that grow above ground.",
          es: "Las zanahorias son verduras de raíz que crecen bajo tierra y comúnmente se rallan o se cortan en juliana para usar en ensaladas. Los tomates son frutas, los pepinos son frutas de una planta trepadora, y los pimientos son frutas que crecen sobre la tierra.",
          de: "Karotten sind Wurzelgemüse, das unterirdisch wächst und häufig gerieben oder julienne geschnitten für Salate verwendet wird. Tomaten sind Früchte, Gurken sind Früchte einer Rankenpflanze, und Paprika sind Früchte, die oberirdisch wachsen.",
          nl: "Wortels zijn wortelgroenten die ondergronds groeien en vaak geraspt of in julienne gesneden worden voor gebruik in salades. Tomaten zijn vruchten, komkommers zijn vruchten van een klimplant, en paprika's zijn vruchten die bovengronds groeien."
        }
      },
      {
        question: {
          en: "What does 'julienne' mean in salad preparation?",
          es: "¿Qué significa 'juliana' en la preparación de ensaladas?",
          de: "Was bedeutet 'Julienne' bei der Salatzubereitung?",
          nl: "Wat betekent 'julienne' bij saladebereiding?"
        },
        options: [
          { en: "Cutting vegetables into thin, matchstick-like strips", es: "Cortar verduras en tiras delgadas como palillos", de: "Gemüse in dünne, streichholzähnliche Streifen schneiden", nl: "Groenten snijden in dunne, lucifer-achtige reepjes" },
          { en: "Cutting vegetables into large chunks", es: "Cortar verduras en trozos grandes", de: "Gemüse in große Stücke schneiden", nl: "Groenten snijden in grote stukken" },
          { en: "Mashing vegetables into a paste", es: "Machacar verduras hasta hacer una pasta", de: "Gemüse zu einer Paste stampfen", nl: "Groenten pletten tot een pasta" },
          { en: "Cooking vegetables until soft", es: "Cocinar verduras hasta que estén suaves", de: "Gemüse weich kochen", nl: "Groenten koken tot ze zacht zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Julienne is a knife cut that creates thin, uniform strips about 1/8 inch thick and 2 inches long, resembling matchsticks. This technique is commonly used for carrots, bell peppers, and other vegetables in salads for both visual appeal and consistent texture.",
          es: "Juliana es un corte con cuchillo que crea tiras delgadas y uniformes de aproximadamente 1/8 de pulgada de grosor y 2 pulgadas de largo, parecidas a palillos. Esta técnica se usa comúnmente para zanahorias, pimientos y otras verduras en ensaladas tanto por atractivo visual como por textura consistente.",
          de: "Julienne ist ein Messerschnitt, der dünne, gleichmäßige Streifen von etwa 3 mm Dicke und 5 cm Länge erstellt, die Streichhölzern ähneln. Diese Technik wird häufig für Karotten, Paprika und anderes Gemüse in Salaten verwendet, sowohl für visuellen Reiz als auch für gleichmäßige Textur.",
          nl: "Julienne is een messnede die dunne, uniforme reepjes van ongeveer 3 mm dik en 5 cm lang creëert, die op lucifers lijken. Deze techniek wordt vaak gebruikt voor wortels, paprika's en andere groenten in salades voor zowel visuele aantrekkelijkheid als consistente textuur."
        }
      },
      {
        question: {
          en: "Which herb is most commonly used to add fresh flavor to green salads?",
          es: "¿Qué hierba se usa más comúnmente para agregar sabor fresco a las ensaladas verdes?",
          de: "Welches Kraut wird am häufigsten verwendet, um grünen Salaten frischen Geschmack zu verleihen?",
          nl: "Welk kruid wordt het meest gebruikt om verse smaak toe te voegen aan groene salades?"
        },
        options: [
          { en: "Rosemary", es: "Romero", de: "Rosmarin", nl: "Rozemarijn" },
          { en: "Basil", es: "Albahaca", de: "Basilikum", nl: "Basilicum" },
          { en: "Oregano", es: "Orégano", de: "Oregano", nl: "Oregano" },
          { en: "Thyme", es: "Tomillo", de: "Thymian", nl: "Tijm" }
        ],
        correct: 1,
        explanation: {
          en: "Basil is the most commonly used fresh herb in green salads due to its mild, sweet flavor that complements leafy greens without overpowering them. While other herbs can be used, basil's delicate taste makes it the most popular choice for everyday salads.",
          es: "La albahaca es la hierba fresca más comúnmente usada en ensaladas verdes debido a su sabor suave y dulce que complementa las hojas verdes sin abrumarlas. Aunque se pueden usar otras hierbas, el sabor delicado de la albahaca la convierte en la opción más popular para ensaladas cotidianas.",
          de: "Basilikum ist das am häufigsten verwendete frische Kraut in grünen Salaten aufgrund seines milden, süßen Geschmacks, der Blattgrün ergänzt, ohne es zu überwältigen. Während andere Kräuter verwendet werden können, macht Basilikums zarter Geschmack es zur beliebtesten Wahl für alltägliche Salate.",
          nl: "Basilicum is het meest gebruikte verse kruid in groene salades vanwege zijn milde, zoete smaak die bladgroenten aanvult zonder ze te overheersen. Hoewel andere kruiden gebruikt kunnen worden, maakt de delicate smaak van basilicum het de populairste keuze voor dagelijkse salades."
        }
      },
      {
        question: {
          en: "What is the best way to store fresh lettuce to keep it crisp?",
          es: "¿Cuál es la mejor manera de almacenar lechuga fresca para mantenerla crujiente?",
          de: "Was ist der beste Weg, frischen Kopfsalat zu lagern, um ihn knackig zu halten?",
          nl: "Wat is de beste manier om verse sla te bewaren om het knapperig te houden?"
        },
        options: [
          { en: "In the pantry at room temperature", es: "En la despensa a temperatura ambiente", de: "In der Speisekammer bei Raumtemperatur", nl: "In de voorraadkast bij kamertemperatuur" },
          { en: "In the refrigerator wrapped in paper towels", es: "En el refrigerador envuelta en toallas de papel", de: "Im Kühlschrank in Papiertücher eingewickelt", nl: "In de koelkast gewikkeld in papieren handdoeken" },
          { en: "In direct sunlight", es: "Bajo luz solar directa", de: "In direktem Sonnenlicht", nl: "In direct zonlicht" },
          { en: "Completely submerged in water", es: "Completamente sumergida en agua", de: "Vollständig in Wasser eingetaucht", nl: "Volledig ondergedompeld in water" }
        ],
        correct: 1,
        explanation: {
          en: "Fresh lettuce should be stored in the refrigerator wrapped in paper towels to absorb excess moisture while maintaining humidity. This prevents wilting while avoiding the rot that can occur from too much moisture. The cool temperature also helps preserve crispness.",
          es: "La lechuga fresca debe almacenarse en el refrigerador envuelta en toallas de papel para absorber el exceso de humedad mientras mantiene la humedad. Esto previene el marchitamiento mientras evita la putrefacción que puede ocurrir por demasiada humedad. La temperatura fría también ayuda a preservar la textura crujiente.",
          de: "Frischer Kopfsalat sollte im Kühlschrank in Papiertücher eingewickelt gelagert werden, um überschüssige Feuchtigkeit zu absorbieren und gleichzeitig die Luftfeuchtigkeit zu erhalten. Dies verhindert das Welken und vermeidet die Fäulnis, die durch zu viel Feuchtigkeit entstehen kann. Die kühle Temperatur hilft auch, die Knackigkeit zu bewahren.",
          nl: "Verse sla moet in de koelkast bewaard worden gewikkeld in papieren handdoeken om overtollig vocht te absorberen terwijl de vochtigheid behouden blijft. Dit voorkomt verwelking en vermijdt het bederf dat kan optreden door te veel vocht. De koele temperatuur helpt ook de knapperigheid te behouden."
        }
      },
      {
        question: {
          en: "Which of these nuts is most commonly added to salads?",
          es: "¿Cuál de estas nueces se agrega más comúnmente a las ensaladas?",
          de: "Welche dieser Nüsse wird am häufigsten zu Salaten hinzugefügt?",
          nl: "Welke van deze noten wordt het meest toegevoegd aan salades?"
        },
        options: [
          { en: "Brazil nuts", es: "Nueces de Brasil", de: "Paranüsse", nl: "Paranoten" },
          { en: "Walnuts", es: "Nueces", de: "Walnüsse", nl: "Walnoten" },
          { en: "Macadamia nuts", es: "Nueces de macadamia", de: "Macadamianüsse", nl: "Macadamianoten" },
          { en: "Chestnuts", es: "Castañas", de: "Kastanien", nl: "Kastanjes" }
        ],
        correct: 1,
        explanation: {
          en: "Walnuts are the most commonly used nuts in salads due to their mild flavor, pleasant crunch, and availability. They pair well with both sweet and savory ingredients and are particularly popular in green salads with fruits and cheese.",
          es: "Las nueces son las nueces más comúnmente usadas en ensaladas debido a su sabor suave, textura crujiente agradable y disponibilidad. Se combinan bien con ingredientes dulces y salados y son particularmente populares en ensaladas verdes con frutas y queso.",
          de: "Walnüsse sind die am häufigsten verwendeten Nüsse in Salaten aufgrund ihres milden Geschmacks, angenehmen Knirschen und Verfügbarkeit. Sie passen gut zu süßen und herzhaften Zutaten und sind besonders beliebt in grünen Salaten mit Früchten und Käse.",
          nl: "Walnoten zijn de meest gebruikte noten in salades vanwege hun milde smaak, aangename knapperigheid en beschikbaarheid. Ze passen goed bij zowel zoete als hartige ingrediënten en zijn bijzonder populair in groene salades met fruit en kaas."
        }
      },
      {
        question: {
          en: "What is the main function of oil in a salad dressing?",
          es: "¿Cuál es la función principal del aceite en un aderezo para ensalada?",
          de: "Was ist die Hauptfunktion von Öl in einem Salatdressing?",
          nl: "Wat is de hoofdfunctie van olie in een saladedressing?"
        },
        options: [
          { en: "To add sweetness", es: "Para agregar dulzura", de: "Um Süße hinzuzufügen", nl: "Om zoetheid toe te voegen" },
          { en: "To provide body, richness, and help coat the salad ingredients", es: "Para proporcionar cuerpo, riqueza y ayudar a cubrir los ingredientes de la ensalada", de: "Um Körper und Reichhaltigkeit zu bieten und zu helfen, die Salatzutaten zu umhüllen", nl: "Om body, rijkheid te bieden en te helpen de salade-ingrediënten te bedekken" },
          { en: "To make the salad crunchy", es: "Para hacer la ensalada crujiente", de: "Um den Salat knackig zu machen", nl: "Om de salade knapperig te maken" },
          { en: "To preserve the vegetables", es: "Para conservar las verduras", de: "Um das Gemüse zu konservieren", nl: "Om de groenten te conserveren" }
        ],
        correct: 1,
        explanation: {
          en: "Oil in salad dressing provides body and richness while helping to coat and distribute flavors evenly across all salad ingredients. It also helps the dressing adhere to the leaves and vegetables, ensuring each bite is properly seasoned.",
          es: "El aceite en el aderezo para ensalada proporciona cuerpo y riqueza mientras ayuda a cubrir y distribuir sabores uniformemente en todos los ingredientes de la ensalada. También ayuda a que el aderezo se adhiera a las hojas y verduras, asegurando que cada bocado esté apropiadamente sazonado.",
          de: "Öl im Salatdressing bietet Körper und Reichhaltigkeit und hilft dabei, Geschmäcker gleichmäßig über alle Salatzutaten zu umhüllen und zu verteilen. Es hilft auch dabei, dass das Dressing an den Blättern und Gemüse haftet und gewährleistet, dass jeder Bissen richtig gewürzt ist.",
          nl: "Olie in saladedressing biedt body en rijkheid terwijl het helpt om smaken gelijkmatig over alle salade-ingrediënten te bedekken en te verdelen. Het helpt ook de dressing te laten hechten aan de bladeren en groenten, waardoor elke hap goed op smaak is."
        }
      },
      {
        question: {
          en: "Which cheese is most commonly used in Caesar salad?",
          es: "¿Qué queso se usa más comúnmente en la ensalada César?",
          de: "Welcher Käse wird am häufigsten in Caesar-Salat verwendet?",
          nl: "Welke kaas wordt het meest gebruikt in Caesar salade?"
        },
        options: [
          { en: "Cheddar", es: "Cheddar", de: "Cheddar", nl: "Cheddar" },
          { en: "Mozzarella", es: "Mozzarella", de: "Mozzarella", nl: "Mozzarella" },
          { en: "Parmesan", es: "Parmesano", de: "Parmesan", nl: "Parmezaan" },
          { en: "Swiss", es: "Suizo", de: "Schweizer", nl: "Zwitserse kaas" }
        ],
        correct: 2,
        explanation: {
          en: "Parmesan cheese is the traditional and most commonly used cheese in Caesar salad. It's typically grated fresh over the salad, providing a sharp, nutty flavor that complements the garlic, anchovies, and lemon in the classic Caesar dressing.",
          es: "El queso parmesano es el queso tradicional y más comúnmente usado en la ensalada César. Típicamente se ralla fresco sobre la ensalada, proporcionando un sabor fuerte y a nuez que complementa el ajo, anchoas y limón en el aderezo César clásico.",
          de: "Parmesan-Käse ist der traditionelle und am häufigsten verwendete Käse in Caesar-Salat. Er wird typischerweise frisch über den Salat gerieben und bietet einen scharfen, nussigen Geschmack, der den Knoblauch, die Sardellen und die Zitrone im klassischen Caesar-Dressing ergänzt.",
          nl: "Parmezaanse kaas is de traditionele en meest gebruikte kaas in Caesar salade. Het wordt meestal vers over de salade geraspt en biedt een scherpe, nootachtige smaak die de knoflook, ansjovis en citroen in de klassieke Caesar dressing aanvult."
        }
      },
      {
        question: {
          en: "What is the purpose of salt in salad preparation?",
          es: "¿Cuál es el propósito de la sal en la preparación de ensaladas?",
          de: "Was ist der Zweck von Salz bei der Salatzubereitung?",
          nl: "Wat is het doel van zout bij saladebereiding?"
        },
        options: [
          { en: "To enhance flavors and draw out moisture from vegetables", es: "Para realzar sabores y extraer humedad de las verduras", de: "Um Geschmäcker zu verstärken und Feuchtigkeit aus Gemüse zu ziehen", nl: "Om smaken te versterken en vocht uit groenten te trekken" },
          { en: "To make vegetables grow larger", es: "Para hacer que las verduras crezcan más grandes", de: "Um Gemüse größer wachsen zu lassen", nl: "Om groenten groter te laten groeien" },
          { en: "To change the color of vegetables", es: "Para cambiar el color de las verduras", de: "Um die Farbe von Gemüse zu ändern", nl: "Om de kleur van groenten te veranderen" },
          { en: "To make the salad last longer", es: "Para hacer que la ensalada dure más tiempo", de: "Um den Salat länger haltbar zu machen", nl: "Om de salade langer te laten meegaan" }
        ],
        correct: 0,
        explanation: {
          en: "Salt serves two main purposes in salad preparation: it enhances and balances flavors of all ingredients, and it draws out excess moisture from vegetables through osmosis, which can help concentrate flavors and improve texture, especially in tomatoes and cucumbers.",
          es: "La sal sirve dos propósitos principales en la preparación de ensaladas: realza y equilibra los sabores de todos los ingredientes, y extrae el exceso de humedad de las verduras a través de ósmosis, lo que puede ayudar a concentrar sabores y mejorar la textura, especialmente en tomates y pepinos.",
          de: "Salz dient zwei Hauptzwecken bei der Salatzubereitung: es verstärkt und balanciert die Geschmäcker aller Zutaten, und es zieht überschüssige Feuchtigkeit aus Gemüse durch Osmose, was helfen kann, Geschmäcker zu konzentrieren und die Textur zu verbessern, besonders bei Tomaten und Gurken.",
          nl: "Zout dient twee hoofddoelen bij saladebereiding: het versterkt en balanceert de smaken van alle ingrediënten, en het trekt overtollig vocht uit groenten door osmose, wat kan helpen smaken te concentreren en textuur te verbeteren, vooral bij tomaten en komkommers."
        }
      },
      {
        question: {
          en: "Which vegetable is the main ingredient in coleslaw?",
          es: "¿Qué verdura es el ingrediente principal en la ensalada de col?",
          de: "Welches Gemüse ist die Hauptzutat in Krautsalat?",
          nl: "Welke groente is het hoofdingrediënt in koolsalade?"
        },
        options: [
          { en: "Lettuce", es: "Lechuga", de: "Kopfsalat", nl: "Sla" },
          { en: "Cabbage", es: "Col", de: "Kohl", nl: "Kool" },
          { en: "Spinach", es: "Espinaca", de: "Spinat", nl: "Spinazie" },
          { en: "Kale", es: "Col rizada", de: "Grünkohl", nl: "Boerenkool" }
        ],
        correct: 1,
        explanation: {
          en: "Cabbage is the main ingredient in coleslaw. The name 'coleslaw' comes from the Dutch 'koolsla,' which literally means 'cabbage salad.' Traditional coleslaw is made primarily from shredded cabbage mixed with a dressing, often mayonnaise-based.",
          es: "La col es el ingrediente principal en la ensalada de col. El nombre 'coleslaw' viene del holandés 'koolsla,' que literalmente significa 'ensalada de col.' La ensalada de col tradicional se hace principalmente de col rallada mezclada con un aderezo, a menudo a base de mayonesa.",
          de: "Kohl ist die Hauptzutat in Krautsalat. Der Name 'Coleslaw' stammt vom niederländischen 'koolsla,' was wörtlich 'Kohlsalat' bedeutet. Traditioneller Krautsalat wird hauptsächlich aus geriebenem Kohl gemacht, der mit einem Dressing, oft auf Mayonnaise-Basis, gemischt wird.",
          nl: "Kool is het hoofdingrediënt in koolsalade. De naam 'coleslaw' komt van het Nederlandse 'koolsla,' wat letterlijk 'koolsalade' betekent. Traditionele koolsalade wordt voornamelijk gemaakt van geraspte kool gemengd met een dressing, vaak op mayonaise-basis."
        }
      },
      {
        question: {
          en: "What does it mean to 'dress' a salad?",
          es: "¿Qué significa 'aderezar' una ensalada?",
          de: "Was bedeutet es, einen Salat zu 'anmachen'?",
          nl: "Wat betekent het om een salade te 'aankleden'?"
        },
        options: [
          { en: "To add dressing or sauce to coat the ingredients", es: "Agregar aderezo o salsa para cubrir los ingredientes", de: "Dressing oder Sauce hinzufügen, um die Zutaten zu umhüllen", nl: "Dressing of saus toevoegen om de ingrediënten te bedekken" },
          { en: "To arrange the salad in a decorative way", es: "Organizar la ensalada de manera decorativa", de: "Den Salat dekorativ anzurichten", nl: "De salade op een decoratieve manier arrangeren" },
          { en: "To remove unwanted parts from vegetables", es: "Quitar partes no deseadas de las verduras", de: "Unerwünschte Teile von Gemüse entfernen", nl: "Ongewenste delen van groenten verwijderen" },
          { en: "To cook the salad ingredients", es: "Cocinar los ingredientes de la ensalada", de: "Die Salatzutaten kochen", nl: "De salade-ingrediënten koken" }
        ],
        correct: 0,
        explanation: {
          en: "To 'dress' a salad means to add dressing, vinaigrette, or sauce to coat and flavor the salad ingredients. This should typically be done just before serving to prevent the greens from becoming soggy and to ensure optimal flavor distribution.",
          es: "Aderezar una ensalada significa agregar aderezo, vinagreta o salsa para cubrir y dar sabor a los ingredientes de la ensalada. Esto típicamente debe hacerse justo antes de servir para prevenir que las hojas verdes se pongan blandas y asegurar una distribución óptima del sabor.",
          de: "Einen Salat 'anmachen' bedeutet, Dressing, Vinaigrette oder Sauce hinzuzufügen, um die Salatzutaten zu umhüllen und zu würzen. Dies sollte typischerweise kurz vor dem Servieren geschehen, um zu verhindern, dass das Grünzeug matschig wird und um optimale Geschmacksverteilung zu gewährleisten.",
          nl: "Een salade 'aankleden' betekent dressing, vinaigrette of saus toevoegen om de salade-ingrediënten te bedekken en op smaak te brengen. Dit moet meestal vlak voor het serveren gebeuren om te voorkomen dat de groenten slap worden en om optimale smaakverdeling te waarborgen."
        }
      },
      {
        question: {
          en: "Which of these ingredients adds protein to a salad?",
          es: "¿Cuál de estos ingredientes agrega proteína a una ensalada?",
          de: "Welche dieser Zutaten fügt einem Salat Protein hinzu?",
          nl: "Welke van deze ingrediënten voegt eiwit toe aan een salade?"
        },
        options: [
          { en: "Croutons", es: "Picatostes", de: "Croutons", nl: "Croutons" },
          { en: "Hard-boiled eggs", es: "Huevos duros", de: "Hartgekochte Eier", nl: "Hardgekookte eieren" },
          { en: "Olive oil", es: "Aceite de oliva", de: "Olivenöl", nl: "Olijfolie" },
          { en: "Balsamic vinegar", es: "Vinagre balsámico", de: "Balsamico-Essig", nl: "Balsamico azijn" }
        ],
        correct: 1,
        explanation: {
          en: "Hard-boiled eggs are an excellent source of complete protein in salads, containing all essential amino acids. While croutons contain some protein from bread, eggs provide significantly more high-quality protein. Olive oil and balsamic vinegar are primarily fat and acid respectively.",
          es: "Los huevos duros son una excelente fuente de proteína completa en ensaladas, conteniendo todos los aminoácidos esenciales. Aunque los picatostes contienen algo de proteína del pan, los huevos proporcionan significativamente más proteína de alta calidad. El aceite de oliva y el vinagre balsámico son principalmente grasa y ácido respectivamente.",
          de: "Hartgekochte Eier sind eine ausgezeichnete Quelle für vollständiges Protein in Salaten und enthalten alle essentiellen Aminosäuren. Während Croutons etwas Protein aus Brot enthalten, bieten Eier deutlich mehr hochwertiges Protein. Olivenöl und Balsamico-Essig sind hauptsächlich Fett bzw. Säure.",
          nl: "Hardgekookte eieren zijn een uitstekende bron van compleet eiwit in salades, met alle essentiële aminozuren. Hoewel croutons wat eiwit uit brood bevatten, bieden eieren aanzienlijk meer hoogwaardig eiwit. Olijfolie en balsamico azijn zijn respectievelijk voornamelijk vet en zuur."
        }
      },
      {
        question: {
          en: "What is the best time to add salt to tomatoes in a salad?",
          es: "¿Cuál es el mejor momento para agregar sal a los tomates en una ensalada?",
          de: "Wann ist der beste Zeitpunkt, um Salz zu Tomaten in einem Salat hinzuzufügen?",
          nl: "Wat is het beste moment om zout toe te voegen aan tomaten in een salade?"
        },
        options: [
          { en: "Right before serving", es: "Justo antes de servir", de: "Direkt vor dem Servieren", nl: "Vlak voor het serveren" },
          { en: "10-15 minutes before serving to draw out juices", es: "10-15 minutos antes de servir para extraer jugos", de: "10-15 Minuten vor dem Servieren, um Säfte herauszuziehen", nl: "10-15 minuten voor het serveren om sappen eruit te trekken" },
          { en: "Several hours ahead", es: "Varias horas antes", de: "Mehrere Stunden im Voraus", nl: "Enkele uren van tevoren" },
          { en: "The day before", es: "El día anterior", de: "Am Tag zuvor", nl: "De dag ervoor" }
        ],
        correct: 1,
        explanation: {
          en: "Salting tomatoes 10-15 minutes before serving allows the salt to draw out some of the natural juices, which concentrates the tomato flavor and creates a light natural dressing that enhances the overall salad without making it too watery.",
          es: "Salar los tomates 10-15 minutos antes de servir permite que la sal extraiga algunos de los jugos naturales, lo que concentra el sabor del tomate y crea un aderezo natural ligero que realza la ensalada general sin hacerla demasiado aguada.",
          de: "Das Salzen von Tomaten 10-15 Minuten vor dem Servieren ermöglicht es dem Salz, einige der natürlichen Säfte herauszuziehen, was den Tomatengeschmack konzentriert und ein leichtes natürliches Dressing schafft, das den gesamten Salat verbessert, ohne ihn zu wässrig zu machen.",
          nl: "Tomaten zouten 10-15 minuten voor het serveren zorgt ervoor dat het zout enkele natuurlijke sappen eruit trekt, wat de tomatensmaak concentreert en een lichte natuurlijke dressing creëert die de hele salade verbetert zonder deze te waterig te maken."
        }
      },
      {
        question: {
          en: "Which leafy green has a slightly bitter, peppery taste?",
          es: "¿Qué hoja verde tiene un sabor ligeramente amargo y picante?",
          de: "Welches Blattgrün hat einen leicht bitteren, pfeffrigen Geschmack?",
          nl: "Welke bladgroente heeft een licht bittere, peperige smaak?"
        },
        options: [
          { en: "Iceberg lettuce", es: "Lechuga iceberg", de: "Eisbergsalat", nl: "IJsbergsla" },
          { en: "Butter lettuce", es: "Lechuga mantequilla", de: "Buttersalat", nl: "Botersla" },
          { en: "Arugula", es: "Rúcula", de: "Rucola", nl: "Rucola" },
          { en: "Romaine lettuce", es: "Lechuga romana", de: "Römersalat", nl: "Romeinse sla" }
        ],
        correct: 2,
        explanation: {
          en: "Arugula (also called rocket) has a distinctive slightly bitter and peppery flavor that adds complexity to salads. Unlike mild lettuces, arugula's bold taste makes it popular in gourmet salads and as a garnish for its unique flavor profile.",
          es: "La rúcula (también llamada rocket) tiene un sabor distintivo ligeramente amargo y picante que agrega complejidad a las ensaladas. A diferencia de las lechugas suaves, el sabor audaz de la rúcula la hace popular en ensaladas gourmet y como guarnición por su perfil de sabor único.",
          de: "Rucola (auch Rocket genannt) hat einen charakteristischen leicht bitteren und pfeffrigen Geschmack, der Salaten Komplexität verleiht. Im Gegensatz zu milden Salaten macht Rucolas kräftiger Geschmack es beliebt in Gourmet-Salaten und als Garnierung für sein einzigartiges Geschmacksprofil.",
          nl: "Rucola (ook wel rocket genoemd) heeft een kenmerkende licht bittere en peperige smaak die complexiteit toevoegt aan salades. In tegenstelling tot milde sla's maakt rucola's krachtige smaak het populair in gourmet salades en als garnering vanwege zijn unieke smaakprofiel."
        }
      },
      {
        question: {
          en: "What is the main purpose of adding acid (like lemon juice or vinegar) to a salad?",
          es: "¿Cuál es el propósito principal de agregar ácido (como jugo de limón o vinagre) a una ensalada?",
          de: "Was ist der Hauptzweck, Säure (wie Zitronensaft oder Essig) zu einem Salat hinzuzufügen?",
          nl: "Wat is het hoofddoel van het toevoegen van zuur (zoals citroensap of azijn) aan een salade?"
        },
        options: [
          { en: "To balance flavors and brighten the taste", es: "Para equilibrar sabores y avivar el gusto", de: "Um Geschmäcker zu balancieren und den Geschmack zu beleben", nl: "Om smaken te balanceren en de smaak te verhelderen" },
          { en: "To make the salad more filling", es: "Para hacer la ensalada más abundante", de: "Um den Salat sättigender zu machen", nl: "Om de salade meer verzadigend te maken" },
          { en: "To change the color of vegetables", es: "Para cambiar el color de las verduras", de: "Um die Farbe von Gemüse zu ändern", nl: "Om de kleur van groenten te veranderen" },
          { en: "To make the salad colder", es: "Para hacer la ensalada más fría", de: "Um den Salat kälter zu machen", nl: "Om de salade kouder te maken" }
        ],
        correct: 0,
        explanation: {
          en: "Acid brightens and balances flavors in salads by providing contrast to rich ingredients like oils and cheese. It enhances the natural flavors of vegetables and helps create a well-rounded taste profile. Acid also helps preserve color in some vegetables and aids in nutrient absorption.",
          es: "El ácido aviva y equilibra los sabores en las ensaladas proporcionando contraste a ingredientes ricos como aceites y queso. Realza los sabores naturales de las verduras y ayuda a crear un perfil de sabor bien equilibrado. El ácido también ayuda a preservar el color en algunas verduras y ayuda en la absorción de nutrientes.",
          de: "Säure belebt und balanciert Geschmäcker in Salaten, indem sie Kontrast zu reichen Zutaten wie Ölen und Käse bietet. Sie verstärkt die natürlichen Geschmäcker von Gemüse und hilft, ein ausgewogenes Geschmacksprofil zu schaffen. Säure hilft auch, die Farbe einiger Gemüse zu bewahren und unterstützt die Nährstoffaufnahme.",
          nl: "Zuur verheldert en balanceert smaken in salades door contrast te bieden met rijke ingrediënten zoals oliën en kaas. Het versterkt de natuurlijke smaken van groenten en helpt een goed afgerond smaakprofiel te creëren. Zuur helpt ook de kleur van sommige groenten te behouden en bevordert de opname van voedingsstoffen."
        }
      },
      {
        question: {
          en: "Which tool is best for mixing a large salad without bruising delicate greens?",
          es: "¿Qué herramienta es mejor para mezclar una ensalada grande sin magullar las hojas verdes delicadas?",
          de: "Welches Werkzeug ist am besten zum Mischen eines großen Salats, ohne zarte Grüns zu beschädigen?",
          nl: "Welk gereedschap is het best voor het mengen van een grote salade zonder delicate groenten te beschadigen?"
        },
        options: [
          { en: "A fork", es: "Un tenedor", de: "Eine Gabel", nl: "Een vork" },
          { en: "Salad tongs", es: "Pinzas para ensalada", de: "Salatzange", nl: "Saladetangen" },
          { en: "A wooden spoon", es: "Una cuchara de madera", de: "Ein Holzlöffel", nl: "Een houten lepel" },
          { en: "Your hands", es: "Tus manos", de: "Ihre Hände", nl: "Je handen" }
        ],
        correct: 1,
        explanation: {
          en: "Salad tongs are specifically designed for mixing salads gently and efficiently. They allow you to lift and toss ingredients without bruising delicate greens, provide good control for even distribution of dressing, and are long enough to reach all parts of a large salad bowl.",
          es: "Las pinzas para ensalada están específicamente diseñadas para mezclar ensaladas suave y eficientemente. Te permiten levantar y mezclar ingredientes sin magullar hojas verdes delicadas, proporcionan buen control para distribución uniforme del aderezo, y son lo suficientemente largas para alcanzar todas las partes de un tazón grande de ensalada.",
          de: "Salatzangen sind speziell zum sanften und effizienten Mischen von Salaten konzipiert. Sie ermöglichen es, Zutaten anzuheben und zu wenden, ohne zarte Grüns zu beschädigen, bieten gute Kontrolle für gleichmäßige Dressing-Verteilung und sind lang genug, um alle Teile einer großen Salatschüssel zu erreichen.",
          nl: "Saladetangen zijn speciaal ontworpen voor het voorzichtig en efficiënt mengen van salades. Ze stellen je in staat ingrediënten op te tillen en te mengen zonder delicate groenten te beschadigen, bieden goede controle voor gelijkmatige verdeling van dressing, en zijn lang genoeg om alle delen van een grote saladeschaal te bereiken."
        }
      },
      {
        question: {
          en: "What does 'blanching' vegetables mean in salad preparation?",
          es: "¿Qué significa 'escaldar' verduras en la preparación de ensaladas?",
          de: "Was bedeutet das 'Blanchieren' von Gemüse bei der Salatzubereitung?",
          nl: "Wat betekent 'blancheren' van groenten bij saladebereiding?"
        },
        options: [
          { en: "Briefly boiling then immediately cooling in ice water", es: "Hervir brevemente y luego enfriar inmediatamente en agua helada", de: "Kurz kochen und dann sofort in Eiswasser abkühlen", nl: "Kort koken en dan onmiddellijk afkoelen in ijswater" },
          { en: "Soaking vegetables in salt water", es: "Remojar verduras en agua salada", de: "Gemüse in Salzwasser einweichen", nl: "Groenten weken in zout water" },
          { en: "Cutting vegetables very thin", es: "Cortar verduras muy finamente", de: "Gemüse sehr dünn schneiden", nl: "Groenten heel dun snijden" },
          { en: "Removing the color from vegetables", es: "Quitar el color de las verduras", de: "Die Farbe von Gemüse entfernen", nl: "De kleur van groenten verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Blanching involves briefly boiling vegetables for 1-3 minutes, then immediately plunging them into ice water to stop the cooking process. This technique preserves color, enhances flavor, and creates a tender-crisp texture perfect for salads while keeping vegetables safe to eat.",
          es: "Escaldar involucra hervir brevemente las verduras por 1-3 minutos, luego sumergirlas inmediatamente en agua helada para detener el proceso de cocción. Esta técnica preserva el color, realza el sabor, y crea una textura tierna-crujiente perfecta para ensaladas mientras mantiene las verduras seguras para comer.",
          de: "Blanchieren beinhaltet das kurze Kochen von Gemüse für 1-3 Minuten und das sofortige Eintauchen in Eiswasser, um den Kochprozess zu stoppen. Diese Technik bewahrt Farbe, verstärkt Geschmack und schafft eine zart-knackige Textur, die perfekt für Salate ist, während das Gemüse sicher zu essen bleibt.",
          nl: "Blancheren houdt in dat groenten kort 1-3 minuten gekookt worden en dan onmiddellijk in ijswater gedompeld worden om het kookproces te stoppen. Deze techniek behoudt kleur, versterkt smaak en creëert een teder-knapperige textuur die perfect is voor salades terwijl groenten veilig blijven om te eten."
        }
      },
      {
        question: {
          en: "What is the main difference between a green salad and a composed salad?",
          es: "¿Cuál es la principal diferencia entre una ensalada verde y una ensalada compuesta?",
          de: "Was ist der Hauptunterschied zwischen einem grünen Salat und einem komponierten Salat?",
          nl: "Wat is het belangrijkste verschil tussen een groene salade en een samengestelde salade?"
        },
        options: [
          { en: "Green salads use only leafy greens, composed salads include various ingredients arranged together", es: "Las ensaladas verdes usan solo hojas verdes, las ensaladas compuestas incluyen varios ingredientes organizados juntos", de: "Grüne Salate verwenden nur Blattgrün, komponierte Salate enthalten verschiedene zusammen arrangierte Zutaten", nl: "Groene salades gebruiken alleen bladgroenten, samengestelde salades bevatten verschillende ingrediënten samen gerangschikt" },
          { en: "Green salads are always cold, composed salads are warm", es: "Las ensaladas verdes siempre están frías, las ensaladas compuestas están calientes", de: "Grüne Salate sind immer kalt, komponierte Salate sind warm", nl: "Groene salades zijn altijd koud, samengestelde salades zijn warm" },
          { en: "Green salads have dressing, composed salads don't", es: "Las ensaladas verdes tienen aderezo, las ensaladas compuestas no", de: "Grüne Salate haben Dressing, komponierte Salate nicht", nl: "Groene salades hebben dressing, samengestelde salades niet" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Green salads primarily consist of leafy greens like lettuce, spinach, or arugula, while composed salads combine multiple ingredients like vegetables, proteins, fruits, nuts, and cheese arranged in an attractive presentation.",
          es: "Las ensaladas verdes consisten principalmente en hojas verdes como lechuga, espinaca o rúcula, mientras que las ensaladas compuestas combinan múltiples ingredientes como verduras, proteínas, frutas, nueces y queso organizados en una presentación atractiva.",
          de: "Grüne Salate bestehen hauptsächlich aus Blattgrün wie Kopfsalat, Spinat oder Rucola, während komponierte Salate mehrere Zutaten wie Gemüse, Proteine, Früchte, Nüsse und Käse in einer attraktiven Präsentation kombinieren.",
          nl: "Groene salades bestaan voornamelijk uit bladgroenten zoals sla, spinazie of rucola, terwijl samengestelde salades meerdere ingrediënten zoals groenten, eiwitten, fruit, noten en kaas combineren in een aantrekkelijke presentatie."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
