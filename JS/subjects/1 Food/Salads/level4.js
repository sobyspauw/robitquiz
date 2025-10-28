// Salads Quiz - Level 4: Lettuce & Leafy Greens Varieties
(function() {
  "use strict";

  const level4 = {
    name: {
      en: "Salads Level 4: Lettuce & Leafy Greens",
      es: "Ensaladas Nivel 4: Lechuga y Verduras de Hoja",
      de: "Salate Stufe 4: Salat und Blattgemüse",
      nl: "Salades Level 4: Sla en Bladgroenten"
    },
    questions: [
      {
        question: {
          en: "What type of lettuce is characterized by its tightly packed, crisp leaves and mild flavor?",
          es: "¿Qué tipo de lechuga se caracteriza por sus hojas crujientes y densamente empacadas con sabor suave?",
          de: "Welche Art von Salat ist durch ihre eng gepackten, knackigen Blätter und milden Geschmack charakterisiert?",
          nl: "Welk type sla wordt gekenmerkt door stevig verpakte, knapperige bladeren en een milde smaak?"
        },
        options: [
          { en: "Iceberg lettuce", es: "Lechuga iceberg", de: "Eisbergsalat", nl: "Ijsbergsla" },
          { en: "Arugula", es: "Rúcula", de: "Rucola", nl: "Rucola" },
          { en: "Radicchio", es: "Radicchio", de: "Radicchio", nl: "Radicchio" },
          { en: "Endive", es: "Endibia", de: "Endivie", nl: "Andijvie" }
        ],
        correct: 0,
        explanation: {
          en: "Iceberg lettuce is known for its compact head of tightly packed, crisp leaves with a very mild, refreshing flavor. It's the most common lettuce variety in many countries.",
          es: "La lechuga iceberg se conoce por su cabeza compacta de hojas crujientes densamente empacadas con un sabor muy suave y refrescante. Es la variedad de lechuga más común en muchos países.",
          de: "Eisbergsalat ist bekannt für seinen kompakten Kopf aus eng gepackten, knackigen Blättern mit einem sehr milden, erfrischenden Geschmack. Es ist die häufigste Salatsorte in vielen Ländern.",
          nl: "Ijsbergsla staat bekend om zijn compacte krop met stevig verpakte, knapperige bladeren met een zeer milde, verfrissende smaak. Het is de meest voorkomende slasoort in veel landen."
        }
      },
      {
        question: {
          en: "Which leafy green has a distinctive peppery, slightly bitter taste and is often used in Italian cuisine?",
          es: "¿Qué verdura de hoja tiene un sabor picante y ligeramente amargo distintivo y se usa a menudo en la cocina italiana?",
          de: "Welches Blattgrün hat einen charakteristisch pfeffrigen, leicht bitteren Geschmack und wird oft in der italienischen Küche verwendet?",
          nl: "Welke bladgroente heeft een kenmerkende pittige, licht bittere smaak en wordt vaak gebruikt in de Italiaanse keuken?"
        },
        options: [
          { en: "Spinach", es: "Espinaca", de: "Spinat", nl: "Spinazie" },
          { en: "Arugula (Rocket)", es: "Rúcula", de: "Rucola", nl: "Rucola" },
          { en: "Swiss chard", es: "Acelga", de: "Mangold", nl: "Snijbiet" },
          { en: "Kale", es: "Col rizada", de: "Grünkohl", nl: "Boerenkool" }
        ],
        correct: 1,
        explanation: {
          en: "Arugula, also known as rocket, has a distinctive peppery, nutty flavor with a slight bitterness. It's a staple in Italian cuisine and adds a sharp, peppery note to salads and dishes.",
          es: "La rúcula, también conocida como rocket, tiene un sabor distintivo picante y a nuez con un ligero amargor. Es básica en la cocina italiana y añade una nota picante y aguda a ensaladas y platos.",
          de: "Rucola hat einen charakteristischen pfeffrigen, nussigen Geschmack mit einer leichten Bitterkeit. Es ist ein Grundnahrungsmittel in der italienischen Küche und verleiht Salaten und Gerichten eine scharfe, pfeffrige Note.",
          nl: "Rucola heeft een kenmerkende pittige, nootachtige smaak met een lichte bitterheid. Het is een hoofdbestanddeel in de Italiaanse keuken en voegt een scherpe, pittige toon toe aan salades en gerechten."
        }
      },
      {
        question: {
          en: "What is the difference between curly endive (frisée) and Belgian endive?",
          es: "¿Cuál es la diferencia entre la endibia rizada (frisée) y la endibia belga?",
          de: "Was ist der Unterschied zwischen Krausendivie (Frisée) und belgischer Endivie?",
          nl: "Wat is het verschil tussen krullandijvie (frisée) en Belgische witlof?"
        },
        options: [
          { en: "Curly endive has frilly leaves and bitter taste; Belgian endive has smooth, white leaves", es: "La endibia rizada tiene hojas onduladas y sabor amargo; la endibia belga tiene hojas lisas y blancas", de: "Krausendivie hat krause Blätter und bitteren Geschmack; belgische Endivie hat glatte, weiße Blätter", nl: "Krullandijvie heeft gekrulde bladeren en bittere smaak; Belgische witlof heeft gladde, witte bladeren" },
          { en: "They are exactly the same vegetable", es: "Son exactamente la misma verdura", de: "Es ist genau dasselbe Gemüse", nl: "Het zijn precies dezelfde groente" },
          { en: "Belgian endive is spicier than curly endive", es: "La endibia belga es más picante que la endibia rizada", de: "Belgische Endivie ist würziger als Krausendivie", nl: "Belgische witlof is pittiger dan krullandijvie" },
          { en: "Curly endive is only grown in summer", es: "La endibia rizada solo se cultiva en verano", de: "Krausendivie wird nur im Sommer angebaut", nl: "Krullandijvie wordt alleen in de zomer gekweekt" }
        ],
        correct: 0,
        explanation: {
          en: "Curly endive (frisée) has frilly, curly leaves with a slightly bitter taste, while Belgian endive has tight, boat-shaped white leaves that are grown in darkness to maintain their pale color and mild flavor.",
          es: "La endibia rizada (frisée) tiene hojas onduladas y rizadas con sabor ligeramente amargo, mientras que la endibia belga tiene hojas blancas apretadas en forma de bote que se cultivan en la oscuridad para mantener su color pálido y sabor suave.",
          de: "Krausendivie (Frisée) hat krause, lockige Blätter mit einem leicht bitteren Geschmack, während belgische Endivie feste, bootförmige weiße Blätter hat, die im Dunkeln angebaut werden, um ihre blasse Farbe und milden Geschmack zu bewahren.",
          nl: "Krullandijvie (frisée) heeft gekrulde bladeren met een licht bittere smaak, terwijl Belgische witlof strakke, bootvormige witte bladeren heeft die in het donker worden gekweekt om hun bleke kleur en milde smaak te behouden."
        }
      },
      {
        question: {
          en: "Which variety of lettuce has red-tinged leaves and forms loose, open heads?",
          es: "¿Qué variedad de lechuga tiene hojas con tintes rojos y forma cabezas sueltas y abiertas?",
          de: "Welche Salatsorte hat rötlich gefärbte Blätter und bildet lockere, offene Köpfe?",
          nl: "Welke slasoort heeft roodgetinte bladeren en vormt losse, open kroppen?"
        },
        options: [
          { en: "Red leaf lettuce", es: "Lechuga de hoja roja", de: "Roter Blattsalat", nl: "Rode bladsla" },
          { en: "Romaine lettuce", es: "Lechuga romana", de: "Römersalat", nl: "Romeinse sla" },
          { en: "Butterhead lettuce", es: "Lechuga mantequilla", de: "Butterkopfsalat", nl: "Kropsla" },
          { en: "Oakleaf lettuce", es: "Lechuga hoja de roble", de: "Eichblattsalat", nl: "Eikenbladsla" }
        ],
        correct: 0,
        explanation: {
          en: "Red leaf lettuce is characterized by its burgundy or red-tinged outer leaves that transition to green toward the center. It forms loose, open heads and has a mild, sweet flavor.",
          es: "La lechuga de hoja roja se caracteriza por sus hojas exteriores bordeaux o con tintes rojos que se vuelven verdes hacia el centro. Forma cabezas sueltas y abiertas y tiene un sabor suave y dulce.",
          de: "Roter Blattsalat ist durch seine burgunderfarbenen oder rötlich gefärbten äußeren Blätter charakterisiert, die zur Mitte hin grün werden. Er bildet lockere, offene Köpfe und hat einen milden, süßlichen Geschmack.",
          nl: "Rode bladsla wordt gekenmerkt door zijn bordeauxrode of roodgetinte buitenste bladeren die naar het midden toe groen worden. Het vormt losse, open kroppen en heeft een milde, zoete smaak."
        }
      },
      {
        question: {
          en: "What makes romaine lettuce particularly suitable for Caesar salads?",
          es: "¿Qué hace que la lechuga romana sea particularmente adecuada para las ensaladas César?",
          de: "Was macht Römersalat besonders geeignet für Caesar-Salate?",
          nl: "Wat maakt romeinse sla bijzonder geschikt voor Caesar salades?"
        },
        options: [
          { en: "Its long, sturdy leaves and crisp texture hold dressing well", es: "Sus hojas largas y resistentes y textura crujiente mantienen bien el aderezo", de: "Seine langen, robusten Blätter und knackige Textur halten Dressing gut", nl: "De lange, stevige bladeren en knapperige textuur houden dressing goed vast" },
          { en: "It has the strongest flavor of all lettuces", es: "Tiene el sabor más fuerte de todas las lechugas", de: "Es hat den stärksten Geschmack aller Salate", nl: "Het heeft de sterkste smaak van alle slasorten" },
          { en: "It naturally contains anchovies flavor", es: "Naturalmente contiene sabor a anchoas", de: "Es enthält natürlich Sardellen-Geschmack", nl: "Het bevat van nature ansjovis smaak" },
          { en: "It's the only lettuce that grows in Italy", es: "Es la única lechuga que crece en Italia", de: "Es ist der einzige Salat, der in Italien wächst", nl: "Het is de enige sla die in Italië groeit" }
        ],
        correct: 0,
        explanation: {
          en: "Romaine lettuce's long, sturdy leaves and crisp texture make it ideal for Caesar salad because the leaves can hold the heavy dressing without wilting, and the crunchy texture provides a perfect contrast to the creamy dressing.",
          es: "Las hojas largas y resistentes de la lechuga romana y su textura crujiente la hacen ideal para la ensalada César porque las hojas pueden mantener el aderezo pesado sin marchitarse, y la textura crujiente proporciona un contraste perfecto al aderezo cremoso.",
          de: "Die langen, robusten Blätter und die knackige Textur des Römersalats machen ihn ideal für Caesar-Salat, da die Blätter das schwere Dressing halten können, ohne zu welken, und die knackige Textur einen perfekten Kontrast zum cremigen Dressing bietet.",
          nl: "De lange, stevige bladeren en knapperige textuur van romeinse sla maken het ideaal voor Caesar salade omdat de bladeren de zware dressing kunnen vasthouden zonder te verwelken, en de knapperige textuur biedt een perfect contrast met de romige dressing."
        }
      },
      {
        question: {
          en: "Which leafy green is often called a 'superfood' due to its high nutrient density?",
          es: "¿Qué verdura de hoja se llama a menudo 'superalimento' debido a su alta densidad de nutrientes?",
          de: "Welches Blattgrün wird oft als 'Superfood' bezeichnet aufgrund seiner hohen Nährstoffdichte?",
          nl: "Welke bladgroente wordt vaak een 'superfood' genoemd vanwege zijn hoge voedingsdichtheid?"
        },
        options: [
          { en: "Lettuce", es: "Lechuga", de: "Salat", nl: "Sla" },
          { en: "Kale", es: "Col rizada", de: "Grünkohl", nl: "Boerenkool" },
          { en: "Cabbage", es: "Repollo", de: "Kohl", nl: "Kool" },
          { en: "Celery", es: "Apio", de: "Sellerie", nl: "Selderij" }
        ],
        correct: 1,
        explanation: {
          en: "Kale is often called a superfood because it's extremely nutrient-dense, containing high levels of vitamins A, C, and K, iron, calcium, and antioxidants. It has more nutrients per calorie than most other leafy greens.",
          es: "La col rizada se llama a menudo superalimento porque es extremadamente densa en nutrientes, conteniendo altos niveles de vitaminas A, C y K, hierro, calcio y antioxidantes. Tiene más nutrientes por caloría que la mayoría de otras verduras de hoja.",
          de: "Grünkohl wird oft als Superfood bezeichnet, weil er extrem nährstoffreich ist und hohe Mengen an Vitaminen A, C und K, Eisen, Kalzium und Antioxidantien enthält. Er hat mehr Nährstoffe pro Kalorie als die meisten anderen Blattgrünen.",
          nl: "Boerenkool wordt vaak een superfood genoemd omdat het extreem voedingsdicht is, met hoge niveaus van vitamines A, C en K, ijzer, calcium en antioxidanten. Het heeft meer voedingsstoffen per calorie dan de meeste andere bladgroenten."
        }
      },
      {
        question: {
          en: "What is the main characteristic of butterhead lettuce varieties like Boston and Bibb?",
          es: "¿Cuál es la característica principal de las variedades de lechuga mantequilla como Boston y Bibb?",
          de: "Was ist das Hauptmerkmal von Butterkopfsalat-Sorten wie Boston und Bibb?",
          nl: "Wat is het hoofdkenmerk van kropsla variëteiten zoals Boston en Bibb?"
        },
        options: [
          { en: "Extremely bitter taste", es: "Sabor extremadamente amargo", de: "Extrem bitterer Geschmack", nl: "Extreem bittere smaak" },
          { en: "Soft, tender leaves with a buttery texture", es: "Hojas suaves y tiernas con textura mantequillosa", de: "Weiche, zarte Blätter mit butteriger Textur", nl: "Zachte, tedere bladeren met een botertige textuur" },
          { en: "Very thick, chewy leaves", es: "Hojas muy gruesas y masticables", de: "Sehr dicke, zähe Blätter", nl: "Zeer dikke, taaie bladeren" },
          { en: "Spicy, peppery flavor", es: "Sabor picante", de: "Würziger, pfeffriger Geschmack", nl: "Pittige, pepperige smaak" }
        ],
        correct: 1,
        explanation: {
          en: "Butterhead lettuce varieties like Boston and Bibb are characterized by their soft, tender leaves that feel almost buttery to the touch. They have a mild, sweet flavor and form loose, rounded heads.",
          es: "Las variedades de lechuga mantequilla como Boston y Bibb se caracterizan por sus hojas suaves y tiernas que se sienten casi mantequillosas al tacto. Tienen un sabor suave y dulce y forman cabezas sueltas y redondeadas.",
          de: "Butterkopfsalat-Sorten wie Boston und Bibb sind durch ihre weichen, zarten Blätter charakterisiert, die sich fast butterig anfühlen. Sie haben einen milden, süßlichen Geschmack und bilden lockere, rundliche Köpfe.",
          nl: "Kropsla variëteiten zoals Boston en Bibb worden gekenmerkt door hun zachte, tedere bladeren die bijna botertig aanvoelen. Ze hebben een milde, zoete smaak en vormen losse, ronde kroppen."
        }
      },
      {
        question: {
          en: "Which leafy green has distinctive lobed leaves resembling oak tree leaves?",
          es: "¿Qué verdura de hoja tiene hojas lobuladas distintivas que se parecen a las hojas de roble?",
          de: "Welches Blattgrün hat charakteristische gelappte Blätter, die Eichenblättern ähneln?",
          nl: "Welke bladgroente heeft kenmerkende gelobde bladeren die lijken op eikenbladeren?"
        },
        options: [
          { en: "Red leaf lettuce", es: "Lechuga de hoja roja", de: "Roter Blattsalat", nl: "Rode bladsla" },
          { en: "Oakleaf lettuce", es: "Lechuga hoja de roble", de: "Eichblattsalat", nl: "Eikenbladsla" },
          { en: "Iceberg lettuce", es: "Lechuga iceberg", de: "Eisbergsalat", nl: "IJsbergsla" },
          { en: "Spinach", es: "Espinaca", de: "Spinat", nl: "Spinazie" }
        ],
        correct: 1,
        explanation: {
          en: "Oakleaf lettuce gets its name from its distinctive lobed leaves that closely resemble oak tree leaves. It comes in both green and red varieties and has a mild, nutty flavor.",
          es: "La lechuga hoja de roble recibe su nombre por sus hojas lobuladas distintivas que se parecen mucho a las hojas de roble. Viene en variedades tanto verdes como rojas y tiene un sabor suave y a nuez.",
          de: "Eichblattsalat erhält seinen Namen von seinen charakteristischen gelappten Blättern, die Eichenblättern sehr ähneln. Er gibt es sowohl in grünen als auch roten Sorten und hat einen milden, nussigen Geschmack.",
          nl: "Eikenbladsla dankt zijn naam aan zijn kenmerkende gelobde bladeren die veel lijken op eikenbladeren. Het komt voor in zowel groene als rode variëteiten en heeft een milde, nootachtige smaak."
        }
      },
      {
        question: {
          en: "What is radicchio and how is it typically used in salads?",
          es: "¿Qué es el radicchio y cómo se usa típicamente en ensaladas?",
          de: "Was ist Radicchio und wie wird es normalerweise in Salaten verwendet?",
          nl: "Wat is radicchio en hoe wordt het typisch gebruikt in salades?"
        },
        options: [
          { en: "A purple-red chicory with bitter flavor, used to add color and bite to mixed salads", es: "Una achicoria púrpura-roja con sabor amargo, usada para añadir color y mordida a ensaladas mixtas", de: "Eine purpur-rote Zichorie mit bitterem Geschmack, verwendet um Farbe und Biss zu gemischten Salaten hinzuzufügen", nl: "Een paars-rode witlof met bittere smaak, gebruikt om kleur en bite toe te voegen aan gemengde salades" },
          { en: "A sweet, green lettuce perfect for delicate salads", es: "Una lechuga verde y dulce perfecta para ensaladas delicadas", de: "Ein süßer, grüner Salat perfekt für zarte Salate", nl: "Een zoete, groene sla perfect voor delicate salades" },
          { en: "A type of spinach with large leaves", es: "Un tipo de espinaca con hojas grandes", de: "Eine Art Spinat mit großen Blättern", nl: "Een soort spinazie met grote bladeren" },
          { en: "A herb used only for garnishing", es: "Una hierba usada solo para decorar", de: "Ein Kraut nur zur Dekoration verwendet", nl: "Een kruid dat alleen voor garnering wordt gebruikt" }
        ],
        correct: 0,
        explanation: {
          en: "Radicchio is a purple-red variety of chicory with a distinctive bitter, slightly peppery flavor. It's commonly used in mixed salads to add vibrant color contrast and a sharp, assertive taste that balances milder greens.",
          es: "El radicchio es una variedad púrpura-roja de achicoria con un sabor amargo y ligeramente picante distintivo. Se usa comúnmente en ensaladas mixtas para añadir contraste de color vibrante y un sabor agudo y asertivo que equilibra verduras más suaves.",
          de: "Radicchio ist eine purpur-rote Zichorienvarietät mit einem charakteristischen bitteren, leicht pfeffrigen Geschmack. Es wird häufig in gemischten Salaten verwendet, um lebendigen Farbkontrast und einen scharfen, durchsetzungsfähigen Geschmack hinzuzufügen, der mildere Grüns ausbalanciert.",
          nl: "Radicchio is een paars-rode witlofvariëteit met een kenmerkende bittere, licht pepperige smaak. Het wordt vaak gebruikt in gemengde salades om levendige kleurcontrast toe te voegen en een scherpe, assertieve smaak die mildere groenten equilibreert."
        }
      },
      {
        question: {
          en: "Which leafy green is known for its high iron content and tender leaves when young?",
          es: "¿Qué verdura de hoja se conoce por su alto contenido de hierro y hojas tiernas cuando es joven?",
          de: "Welches Blattgrün ist bekannt für seinen hohen Eisengehalt und zarte Blätter wenn jung?",
          nl: "Welke bladgroente staat bekend om zijn hoge ijzergehalte en tedere bladeren wanneer jong?"
        },
        options: [
          { en: "Lettuce", es: "Lechuga", de: "Salat", nl: "Sla" },
          { en: "Cabbage", es: "Repollo", de: "Kohl", nl: "Kool" },
          { en: "Spinach", es: "Espinaca", de: "Spinat", nl: "Spinazie" },
          { en: "Celery", es: "Apio", de: "Sellerie", nl: "Selderij" }
        ],
        correct: 2,
        explanation: {
          en: "Spinach is renowned for its high iron content and other nutrients. Baby spinach leaves are particularly tender and have a mild flavor, making them excellent for both raw salads and cooked dishes.",
          es: "La espinaca es reconocida por su alto contenido de hierro y otros nutrientes. Las hojas de espinaca bebé son particularmente tiernas y tienen un sabor suave, haciéndolas excelentes tanto para ensaladas crudas como platos cocinados.",
          de: "Spinat ist bekannt für seinen hohen Eisengehalt und andere Nährstoffe. Baby-Spinatblätter sind besonders zart und haben einen milden Geschmack, was sie sowohl für rohe Salate als auch für gekochte Gerichte ausgezeichnet macht.",
          nl: "Spinazie staat bekend om zijn hoge ijzergehalte en andere voedingsstoffen. Baby spinaziebladeren zijn bijzonder teder en hebben een milde smaak, waardoor ze uitstekend zijn voor zowel rauwe salades als gekookte gerechten."
        }
      },
      {
        question: {
          en: "What are microgreens and how do they differ from regular leafy greens?",
          es: "¿Qué son los microvegetales y en qué se diferencian de las verduras de hoja regulares?",
          de: "Was sind Mikrogrüns und wie unterscheiden sie sich von regulären Blattgrüns?",
          nl: "Wat zijn microgroenten en hoe verschillen ze van gewone bladgroenten?"
        },
        options: [
          { en: "Young seedlings harvested 7-14 days after germination with intense flavors", es: "Plántulas jóvenes cosechadas 7-14 días después de la germinación con sabores intensos", de: "Junge Keimlinge die 7-14 Tage nach der Keimung geerntet werden mit intensiven Aromen", nl: "Jonge zaailingen geoogst 7-14 dagen na ontkieming met intense smaken" },
          { en: "Tiny versions of regular lettuce grown in small pots", es: "Versiones pequeñas de lechuga regular cultivada en macetas pequeñas", de: "Kleine Versionen von normalem Salat in kleinen Töpfen angebaut", nl: "Kleine versies van gewone sla gekweekt in kleine potten" },
          { en: "Genetically modified vegetables made smaller", es: "Verduras genéticamente modificadas hechas más pequeñas", de: "Genetisch veränderte Gemüse kleiner gemacht", nl: "Genetisch gemodificeerde groenten kleiner gemaakt" },
          { en: "Herbs that only grow in winter", es: "Hierbas que solo crecen en invierno", de: "Kräuter die nur im Winter wachsen", nl: "Kruiden die alleen in de winter groeien" }
        ],
        correct: 0,
        explanation: {
          en: "Microgreens are young vegetable and herb seedlings harvested when they're 7-14 days old, just after the first true leaves develop. They have concentrated, intense flavors and are packed with nutrients, often containing higher nutrient levels than mature plants.",
          es: "Los microvegetales son plántulas jóvenes de verduras y hierbas cosechadas cuando tienen 7-14 días de edad, justo después de que se desarrollen las primeras hojas verdaderas. Tienen sabores concentrados e intensos y están llenos de nutrientes, a menudo conteniendo niveles de nutrientes más altos que las plantas maduras.",
          de: "Mikrogrüns sind junge Gemüse- und Kräuterkeimlinge, die geerntet werden, wenn sie 7-14 Tage alt sind, kurz nachdem sich die ersten echten Blätter entwickelt haben. Sie haben konzentrierte, intensive Aromen und sind voller Nährstoffe, oft mit höheren Nährstoffgehalten als ausgewachsene Pflanzen.",
          nl: "Microgroenten zijn jonge groente- en kruidenzaailingen die worden geoogst wanneer ze 7-14 dagen oud zijn, net nadat de eerste echte bladeren zich hebben ontwikkeld. Ze hebben geconcentreerde, intense smaken en zitten vol voedingsstoffen, vaak met hogere voedingsstofniveaus dan volwassen planten."
        }
      },
      {
        question: {
          en: "Which characteristic makes Swiss chard unique among leafy greens?",
          es: "¿Qué característica hace única a la acelga entre las verduras de hoja?",
          de: "Welches Merkmal macht Mangold einzigartig unter den Blattgrüns?",
          nl: "Welke eigenschap maakt snijbiet uniek onder de bladgroenten?"
        },
        options: [
          { en: "It only grows in Switzerland", es: "Solo crece en Suiza", de: "Es wächst nur in der Schweiz", nl: "Het groeit alleen in Zwitserland" },
          { en: "Its colorful stems and ribs in red, yellow, or white", es: "Sus tallos y nervaduras coloridas en rojo, amarillo o blanco", de: "Seine farbigen Stiele und Rippen in rot, gelb oder weiß", nl: "Zijn kleurrijke stelen en nerven in rood, geel of wit" },
          { en: "It has the strongest bitter taste", es: "Tiene el sabor amargo más fuerte", de: "Es hat den stärksten bitteren Geschmack", nl: "Het heeft de sterkste bittere smaak" },
          { en: "It's the smallest leafy green", es: "Es la verdura de hoja más pequeña", de: "Es ist das kleinste Blattgrün", nl: "Het is de kleinste bladgroente" }
        ],
        correct: 1,
        explanation: {
          en: "Swiss chard is distinctive for its thick, colorful stems and leaf ribs that come in vibrant colors like bright red, yellow, orange, or white. Both the leaves and colorful stems are edible and add visual appeal to salads.",
          es: "La acelga es distintiva por sus tallos gruesos y coloridos y nervaduras de hojas que vienen en colores vibrantes como rojo brillante, amarillo, naranja o blanco. Tanto las hojas como los tallos coloridos son comestibles y añaden atractivo visual a las ensaladas.",
          de: "Mangold ist charakteristisch für seine dicken, farbigen Stiele und Blattrippen, die in lebendigen Farben wie hellem Rot, Gelb, Orange oder Weiß kommen. Sowohl die Blätter als auch die farbigen Stiele sind essbar und verleihen Salaten visuelle Attraktivität.",
          nl: "Snijbiet is onderscheidend vanwege zijn dikke, kleurrijke stelen en bladnerven die komen in levendige kleuren zoals helder rood, geel, oranje of wit. Zowel de bladeren als de kleurrijke stelen zijn eetbaar en voegen visuele aantrekkingskracht toe aan salades."
        }
      },
      {
        question: {
          en: "What is the best way to store different types of leafy greens to maintain freshness?",
          es: "¿Cuál es la mejor manera de almacenar diferentes tipos de verduras de hoja para mantener la frescura?",
          de: "Was ist der beste Weg, verschiedene Arten von Blattgrüns zu lagern, um Frische zu bewahren?",
          nl: "Wat is de beste manier om verschillende soorten bladgroenten te bewaren om de versheid te behouden?"
        },
        options: [
          { en: "All leafy greens should be stored at room temperature", es: "Todas las verduras de hoja deben almacenarse a temperatura ambiente", de: "Alle Blattgrüns sollten bei Raumtemperatur gelagert werden", nl: "Alle bladgroenten moeten op kamertemperatuur bewaard worden" },
          { en: "In the refrigerator, washed and in airtight containers with paper towels", es: "En el refrigerador, lavadas y en contenedores herméticos con toallas de papel", de: "Im Kühlschrank, gewaschen und in luftdichten Behältern mit Papiertüchern", nl: "In de koelkast, gewassen en in luchtdichte containers met keukenpapier" },
          { en: "Frozen immediately after purchase", es: "Congeladas inmediatamente después de la compra", de: "Sofort nach dem Kauf eingefroren", nl: "Onmiddellijk na aankoop ingevroren" },
          { en: "In direct sunlight to keep them fresh", es: "En luz solar directa para mantenerlas frescas", de: "In direktem Sonnenlicht um sie frisch zu halten", nl: "In direct zonlicht om ze vers te houden" }
        ],
        correct: 1,
        explanation: {
          en: "Leafy greens should be stored in the refrigerator after being gently washed and dried. Store them in airtight containers with paper towels to absorb excess moisture, which helps prevent wilting and extends freshness for several days.",
          es: "Las verduras de hoja deben almacenarse en el refrigerador después de ser lavadas suavemente y secadas. Almacénalas en contenedores herméticos con toallas de papel para absorber el exceso de humedad, lo que ayuda a prevenir el marchitamiento y extiende la frescura por varios días.",
          de: "Blattgrüns sollten im Kühlschrank gelagert werden, nachdem sie sanft gewaschen und getrocknet wurden. Lagern Sie sie in luftdichten Behältern mit Papiertüchern, um überschüssige Feuchtigkeit zu absorbieren, was das Welken verhindert und die Frische für mehrere Tage verlängert.",
          nl: "Bladgroenten moeten in de koelkast bewaard worden nadat ze voorzichtig gewassen en gedroogd zijn. Bewaar ze in luchtdichte containers met keukenpapier om overtollig vocht op te nemen, wat verwelking voorkomt en de versheid meerdere dagen verlengt."
        }
      },
      {
        question: {
          en: "Which leafy green is commonly blanched before use to reduce bitterness?",
          es: "¿Qué verdura de hoja se blanquea comúnmente antes del uso para reducir el amargor?",
          de: "Welches Blattgrün wird häufig vor der Verwendung blanchiert, um Bitterkeit zu reduzieren?",
          nl: "Welke bladgroente wordt vaak geblancheerd voor gebruik om bitterheid te verminderen?"
        },
        options: [
          { en: "Iceberg lettuce", es: "Lechuga iceberg", de: "Eisbergsalat", nl: "Ijsbergsla" },
          { en: "Spinach", es: "Espinaca", de: "Spinat", nl: "Spinazie" },
          { en: "Endive or escarole", es: "Endibia o escarola", de: "Endivie oder Eskariol", nl: "Andijvie of escarole" },
          { en: "Romaine lettuce", es: "Lechuga romana", de: "Römersalat", nl: "Romeinse sla" }
        ],
        correct: 2,
        explanation: {
          en: "Endive and escarole are often blanched (grown in darkness or covered) to reduce their natural bitterness and create more tender, pale leaves. This process makes them milder and more palatable for salads.",
          es: "La endibia y la escarola a menudo se blanquean (se cultivan en la oscuridad o cubiertas) para reducir su amargor natural y crear hojas más tiernas y pálidas. Este proceso las hace más suaves y más apetitosas para ensaladas.",
          de: "Endivie und Eskariol werden oft gebleicht (im Dunkeln angebaut oder abgedeckt), um ihre natürliche Bitterkeit zu reduzieren und zartere, blasse Blätter zu erzeugen. Dieser Prozess macht sie milder und schmackhafter für Salate.",
          nl: "Andijvie en escarole worden vaak geblancheerd (gekweekt in het donker of afgedekt) om hun natuurlijke bitterheid te verminderen en tederere, bleke bladeren te creëren. Dit proces maakt ze milder en smakelijker voor salades."
        }
      },
      {
        question: {
          en: "What is the difference between mature spinach and baby spinach in terms of taste and texture?",
          es: "¿Cuál es la diferencia entre la espinaca madura y la espinaca bebé en términos de sabor y textura?",
          de: "Was ist der Unterschied zwischen ausgereiftem Spinat und Baby-Spinat in Bezug auf Geschmack und Textur?",
          nl: "Wat is het verschil tussen volwassen spinazie en baby spinazie wat betreft smaak en textuur?"
        },
        options: [
          { en: "Baby spinach is more bitter and tougher than mature spinach", es: "La espinaca bebé es más amarga y más dura que la espinaca madura", de: "Baby-Spinat ist bitterer und zäher als ausgereifter Spinat", nl: "Baby spinazie is bitterder en taaier dan volwassen spinazie" },
          { en: "There is no difference between them", es: "No hay diferencia entre ellas", de: "Es gibt keinen Unterschied zwischen ihnen", nl: "Er is geen verschil tussen hen" },
          { en: "Baby spinach is more tender and milder, while mature spinach is tougher with stronger flavor", es: "La espinaca bebé es más tierna y suave, mientras que la espinaca madura es más dura con sabor más fuerte", de: "Baby-Spinat ist zarter und milder, während ausgereifter Spinat zäher mit stärkerem Geschmack ist", nl: "Baby spinazie is tederder en milder, terwijl volwassen spinazie taaier is met sterkere smaak" },
          { en: "Mature spinach is always sweeter than baby spinach", es: "La espinaca madura es siempre más dulce que la espinaca bebé", de: "Ausgereifter Spinat ist immer süßer als Baby-Spinat", nl: "Volwassen spinazie is altijd zoeter dan baby spinazie" }
        ],
        correct: 2,
        explanation: {
          en: "Baby spinach consists of young, tender leaves with a mild, sweet flavor perfect for raw salads. Mature spinach has larger, tougher leaves with a stronger, more pronounced flavor that's often better suited for cooking.",
          es: "La espinaca bebé consiste en hojas jóvenes y tiernas con un sabor suave y dulce perfecto para ensaladas crudas. La espinaca madura tiene hojas más grandes y duras con un sabor más fuerte y pronunciado que a menudo es mejor para cocinar.",
          de: "Baby-Spinat besteht aus jungen, zarten Blättern mit einem milden, süßen Geschmack, der perfekt für rohe Salate ist. Ausgereifter Spinat hat größere, zähere Blätter mit einem stärkeren, ausgeprägteren Geschmack, der oft besser zum Kochen geeignet ist.",
          nl: "Baby spinazie bestaat uit jonge, tedere bladeren met een milde, zoete smaak perfect voor rauwe salades. Volwassen spinazie heeft grotere, taaiëre bladeren met een sterkere, meer uitgesproken smaak die vaak beter geschikt is voor koken."
        }
      },
      {
        question: {
          en: "Which traditional method is used to grow Belgian endive to achieve its characteristic pale color?",
          es: "¿Qué método tradicional se usa para cultivar la endibia belga para lograr su color pálido característico?",
          de: "Welche traditionelle Methode wird verwendet, um belgische Endivie anzubauen, um ihre charakteristische blasse Farbe zu erreichen?",
          nl: "Welke traditionele methode wordt gebruikt om Belgische witlof te kweken om zijn karakteristieke bleke kleur te bereiken?"
        },
        options: [
          { en: "Growing in bright sunlight with frequent watering", es: "Cultivando en luz solar brillante con riego frecuente", de: "In hellem Sonnenlicht mit häufigem Gießen anbauen", nl: "Kweken in helder zonlicht met frequent water geven" },
          { en: "Forcing in darkness using sand or soil to cover the growing shoots", es: "Forzando en la oscuridad usando arena o tierra para cubrir los brotes en crecimiento", de: "In Dunkelheit forcieren mit Sand oder Erde um die wachsenden Triebe zu bedecken", nl: "Forceren in het donker met zand of grond om de groeiende scheuten te bedekken" },
          { en: "Adding chemicals to change the color", es: "Añadiendo químicos para cambiar el color", de: "Chemikalien hinzufügen um die Farbe zu ändern", nl: "Chemicaliën toevoegen om de kleur te veranderen" },
          { en: "Growing only in winter temperatures", es: "Cultivando solo en temperaturas de invierno", de: "Nur bei Wintertemperaturen anbauen", nl: "Alleen kweken bij wintertemperaturen" }
        ],
        correct: 1,
        explanation: {
          en: "Belgian endive is grown using a traditional forcing method where the chicory roots are placed in darkness and covered with sand or soil. This prevents chlorophyll development, resulting in the characteristic pale, white-yellow color and mild flavor.",
          es: "La endibia belga se cultiva usando un método de forzado tradicional donde las raíces de achicoria se colocan en la oscuridad y se cubren con arena o tierra. Esto previene el desarrollo de clorofila, resultando en el color pálido, blanco-amarillo característico y sabor suave.",
          de: "Belgische Endivie wird mit einer traditionellen Treibmethode angebaut, bei der die Zichorienwurzeln in Dunkelheit platziert und mit Sand oder Erde bedeckt werden. Dies verhindert die Chlorophyllentwicklung und führt zu der charakteristischen blassen, weiß-gelben Farbe und mildem Geschmack.",
          nl: "Belgische witlof wordt gekweekt met een traditionele forceer methode waarbij de witlofwortels in het donker geplaatst en bedekt worden met zand of grond. Dit voorkomt chlorofylontwikkeling, wat resulteert in de karakteristieke bleke, wit-gele kleur en milde smaak."
        }
      },
      {
        question: {
          en: "What makes watercress unique among leafy greens in terms of growing conditions and flavor?",
          es: "¿Qué hace único al berro entre las verduras de hoja en términos de condiciones de cultivo y sabor?",
          de: "Was macht Brunnenkresse unter den Blattgrüns in Bezug auf Wachstumsbedingungen und Geschmack einzigartig?",
          nl: "Wat maakt waterkers uniek onder de bladgroenten wat betreft groeiomstandigheden en smaak?"
        },
        options: [
          { en: "It grows in or near water and has a peppery, tangy flavor", es: "Crece en o cerca del agua y tiene un sabor picante y ácido", de: "Es wächst in oder nahe Wasser und hat einen pfeffrigen, scharfen Geschmack", nl: "Het groeit in of nabij water en heeft een pittige, scherpe smaak" },
          { en: "It only grows in desert conditions", es: "Solo crece en condiciones desérticas", de: "Es wächst nur unter Wüstenbedingungen", nl: "Het groeit alleen onder woestijnomstandigheden" },
          { en: "It has the mildest flavor of all leafy greens", es: "Tiene el sabor más suave de todas las verduras de hoja", de: "Es hat den mildesten Geschmack aller Blattgrüns", nl: "Het heeft de mildste smaak van alle bladgroenten" },
          { en: "It grows only in winter and is very bitter", es: "Solo crece en invierno y es muy amargo", de: "Es wächst nur im Winter und ist sehr bitter", nl: "Het groeit alleen in de winter en is erg bitter" }
        ],
        correct: 0,
        explanation: {
          en: "Watercress is unique because it grows naturally in flowing water or very moist soil near streams and springs. It has a distinctive peppery, slightly spicy flavor with a fresh, clean taste that adds a sharp accent to salads.",
          es: "El berro es único porque crece naturalmente en agua corriente o suelo muy húmedo cerca de arroyos y manantiales. Tiene un sabor distintivo picante, ligeramente especiado con un sabor fresco y limpio que añade un acento agudo a las ensaladas.",
          de: "Brunnenkresse ist einzigartig, weil sie natürlich in fließendem Wasser oder sehr feuchtem Boden in der Nähe von Bächen und Quellen wächst. Sie hat einen charakteristischen pfeffrigen, leicht würzigen Geschmack mit einem frischen, sauberen Geschmack, der Salaten einen scharfen Akzent verleiht.",
          nl: "Waterkers is uniek omdat het van nature groeit in stromend water of zeer vochtige grond nabij beken en bronnen. Het heeft een kenmerkende pittige, licht kruidige smaak met een frisse, schone smaak die een scherp accent toevoegt aan salades."
        }
      },
      {
        question: {
          en: "Which technique helps revive wilted lettuce and other leafy greens?",
          es: "¿Qué técnica ayuda a revivir la lechuga marchita y otras verduras de hoja?",
          de: "Welche Technik hilft dabei, welken Salat und andere Blattgrüns wiederzubeleben?",
          nl: "Welke techniek helpt om verwelkte sla en andere bladgroenten te herstellen?"
        },
        options: [
          { en: "Heating them in the microwave", es: "Calentándolas en el microondas", de: "Sie in der Mikrowelle erhitzen", nl: "Ze opwarmen in de magnetron" },
          { en: "Soaking in ice water for 15-30 minutes", es: "Remojando en agua helada por 15-30 minutos", de: "15-30 Minuten in Eiswasser einweichen", nl: "Weken in ijswater gedurende 15-30 minuten" },
          { en: "Exposing to direct sunlight", es: "Exponiendo a luz solar directa", de: "Direktem Sonnenlicht aussetzen", nl: "Blootstellen aan direct zonlicht" },
          { en: "Adding salt directly to the leaves", es: "Añadiendo sal directamente a las hojas", de: "Salz direkt auf die Blätter geben", nl: "Zout direct op de bladeren toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Soaking wilted leafy greens in ice water for 15-30 minutes helps restore their crispness by allowing the plant cells to rehydrate and regain their structure. The cold temperature also helps firm up the cell walls.",
          es: "Remojar las verduras de hoja marchitas en agua helada por 15-30 minutos ayuda a restaurar su frescura permitiendo que las células de la planta se rehidraten y recuperen su estructura. La temperatura fría también ayuda a endurecer las paredes celulares.",
          de: "Das Einweichen welker Blattgrüns in Eiswasser für 15-30 Minuten hilft dabei, ihre Knackigkeit wiederherzustellen, indem es den Pflanzenzellen ermöglicht sich zu rehydrieren und ihre Struktur zurückzugewinnen. Die kalte Temperatur hilft auch dabei, die Zellwände zu festigen.",
          nl: "Het weken van verwelkte bladgroenten in ijswater gedurende 15-30 minuten helpt hun knapperigheid te herstellen door de plantencellen toe te staan te rehydrateren en hun structuur terug te krijgen. De koude temperatuur helpt ook om de celwanden steviger te maken."
        }
      },
      {
        question: {
          en: "What is the main difference between curly kale and Lacinato (dinosaur) kale?",
          es: "¿Cuál es la principal diferencia entre la col rizada rizada y la col rizada Lacinato (dinosaurio)?",
          de: "Was ist der Hauptunterschied zwischen Grünkohl und Lacinato (Dinosaurier) Grünkohl?",
          nl: "Wat is het hoofdverschil tussen gekrulde boerenkool en Lacinato (dinosaurus) boerenkool?"
        },
        options: [
          { en: "Curly kale has ruffled, curly leaves; Lacinato has flat, dark blue-green leaves", es: "La col rizada tiene hojas onduladas y rizadas; Lacinato tiene hojas planas, verde azul oscuro", de: "Grünkohl hat gekräuselte Blätter; Lacinato hat flache, dunkel blaugrüne Blätter", nl: "Gekrulde boerenkool heeft gekrulde bladeren; Lacinato heeft platte, donker blauwgroene bladeren" },
          { en: "They are exactly the same plant", es: "Son exactamente la misma planta", de: "Sie sind genau dieselbe Pflanze", nl: "Het zijn precies dezelfde plant" },
          { en: "Lacinato kale is spicier than curly kale", es: "La col rizada Lacinato es más picante que la col rizada", de: "Lacinato Grünkohl ist würziger als Grünkohl", nl: "Lacinato boerenkool is pittiger dan gekrulde boerenkool" },
          { en: "Curly kale only grows in winter", es: "La col rizada solo crece en invierno", de: "Grünkohl wächst nur im Winter", nl: "Gekrulde boerenkool groeit alleen in de winter" }
        ],
        correct: 0,
        explanation: {
          en: "Curly kale has distinctively ruffled, curly-edged leaves with a bright green color, while Lacinato kale (also called dinosaur or Tuscan kale) has flat, elongated, dark blue-green leaves with a bumpy texture resembling dinosaur skin.",
          es: "La col rizada tiene hojas distintivamente onduladas y con bordes rizados de color verde brillante, mientras que la col rizada Lacinato (también llamada dinosaurio o toscana) tiene hojas planas, alargadas, de color verde azul oscuro con textura rugosa que se asemeja a la piel de dinosaurio.",
          de: "Grünkohl hat charakteristisch gekräuselte Blätter mit hellgrüner Farbe, während Lacinato Grünkohl (auch Dinosaurier- oder Toskanischer Grünkohl genannt) flache, längliche, dunkel blaugrüne Blätter mit einer holprigen Textur hat, die Dinosaurierhaut ähnelt.",
          nl: "Gekrulde boerenkool heeft kenmerkend gekrulde bladeren met een heldergroene kleur, terwijl Lacinato boerenkool (ook dinosaurus of Toscaanse boerenkool genoemd) platte, langwerpige, donker blauwgroene bladeren heeft met een bobbelige textuur die lijkt op dinosaurushuid."
        }
      },
      {
        question: {
          en: "What type of lettuce is characterized by its tightly packed, crisp leaves and mild flavor?",
          es: "¿Qué tipo de lechuga se caracteriza por sus hojas crujientes y densamente empacadas con sabor suave?",
          de: "Welche Art von Salat ist durch ihre eng gepackten, knackigen Blätter und milden Geschmack charakterisiert?",
          nl: "Welk type sla wordt gekenmerkt door stevig verpakte, knapperige bladeren en een milde smaak?"
        },
        options: [
          { en: "Iceberg lettuce", es: "Lechuga iceberg", de: "Eisbergsalat", nl: "Ijsbergsla" },
          { en: "Arugula", es: "Rúcula", de: "Rucola", nl: "Rucola" },
          { en: "Radicchio", es: "Radicchio", de: "Radicchio", nl: "Radicchio" },
          { en: "Endive", es: "Endibia", de: "Endivie", nl: "Andijvie" }
        ],
        correct: 0,
        explanation: {
          en: "Iceberg lettuce is known for its compact head of tightly packed, crisp leaves with a very mild, refreshing flavor. It's the most common lettuce variety in many countries.",
          es: "La lechuga iceberg se conoce por su cabeza compacta de hojas crujientes densamente empacadas con un sabor muy suave y refrescante. Es la variedad de lechuga más común en muchos países.",
          de: "Eisbergsalat ist bekannt für seinen kompakten Kopf aus eng gepackten, knackigen Blättern mit einem sehr milden, erfrischenden Geschmack. Es ist die häufigste Salatsorte in vielen Ländern.",
          nl: "Ijsbergsla staat bekend om zijn compacte krop met stevig verpakte, knapperige bladeren met een zeer milde, verfrissende smaak. Het is de meest voorkomende slasoort in veel landen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  }
  return level4;
})();