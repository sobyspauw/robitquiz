// Barbecue Quiz - Level 7: BBQ Science & Chemistry
(function() {
  const level7 = {
    name: {
      en: "Barbecue Level 7",
      es: "Barbacoa Nivel 7",
      de: "Grillen Stufe 7",
      nl: "Barbecue Level 7"
    },
    questions: [
      {
        question: {
          en: "What chemical reaction creates the complex flavors and brown color in BBQ bark?",
          es: "¿Qué reacción química crea los sabores complejos y el color marrón en la corteza BBQ?",
          de: "Welche chemische Reaktion erzeugt die komplexen Aromen und braune Farbe in BBQ-Bark?",
          nl: "Welke chemische reactie creëert de complexe smaken en bruine kleur in BBQ bark?"
        },
        options: [
          { en: "Maillard reaction between amino acids and reducing sugars at 300-350°F", es: "Reacción de Maillard entre aminoácidos y azúcares reductores a 300-350°F", de: "Maillard-Reaktion zwischen Aminosäuren und reduzierenden Zuckern bei 148-177°C", nl: "Maillard reactie tussen aminozuren en reducerende suikers bij 148-177°C" },
          { en: "Oxidation of iron in meat", es: "Oxidación del hierro en la carne", de: "Oxidation von Eisen im Fleisch", nl: "Oxidatie van ijzer in vlees" },
          { en: "Caramelization of proteins", es: "Caramelización de proteínas", de: "Karamellisierung von Proteinen", nl: "Karamelisatie van eiwitten" },
          { en: "Fermentation of surface bacteria", es: "Fermentación de bacterias superficiales", de: "Fermentation von Oberflächenbakterien", nl: "Fermentatie van oppervlakte bacteriën" }
        ],
        correct: 0,
        explanation: {
          en: "The Maillard reaction occurs when amino acids (from proteins) react with reducing sugars at temperatures above 300°F, creating hundreds of flavor compounds and brown pigments (melanoidins). This differs from caramelization (sugar-only) and is responsible for the savory, complex flavors in BBQ bark, seared steaks, and toasted bread.",
          es: "La reacción de Maillard ocurre cuando los aminoácidos (de proteínas) reaccionan con azúcares reductores a temperaturas superiores a 300°F, creando cientos de compuestos de sabor y pigmentos marrones (melanoidinas). Esto difiere de la caramelización (solo azúcar) y es responsable de los sabores salados y complejos en la corteza BBQ, filetes sellados y pan tostado.",
          de: "Die Maillard-Reaktion tritt auf, wenn Aminosäuren (aus Proteinen) mit reduzierenden Zuckern bei Temperaturen über 148°C reagieren und Hunderte von Aromaverbindungen und braunen Pigmenten (Melanoidine) erzeugen. Dies unterscheidet sich von der Karamellisierung (nur Zucker) und ist verantwortlich für die herzhaften, komplexen Aromen in BBQ-Bark, angebratenen Steaks und geröstetem Brot.",
          nl: "De Maillard reactie vindt plaats wanneer aminozuren (van eiwitten) reageren met reducerende suikers bij temperaturen boven 148°C, waarbij honderden smaakverbindingen en bruine pigmenten (melanoidinen) ontstaan. Dit verschilt van karamelisatie (alleen suiker) en is verantwoordelijk voor de hartige, complexe smaken in BBQ bark, aangebraden steaks en geroosterd brood."
        }
      },
      {
        question: {
          en: "At what temperature does collagen in meat begin breaking down into gelatin?",
          es: "¿A qué temperatura comienza el colágeno en la carne a descomponerse en gelatina?",
          de: "Bei welcher Temperatur beginnt Kollagen im Fleisch, sich in Gelatine abzubauen?",
          nl: "Bij welke temperatuur begint collageen in vlees af te breken tot gelatine?"
        },
        options: [
          { en: "190-205°F (88-96°C) for complete conversion", es: "190-205°F (88-96°C) para conversión completa", de: "88-96°C für vollständige Umwandlung", nl: "88-96°C voor volledige conversie" },
          { en: "145°F (63°C)", es: "145°F (63°C)", de: "63°C", nl: "63°C" },
          { en: "250°F (121°C)", es: "250°F (121°C)", de: "121°C", nl: "121°C" },
          { en: "325°F (163°C)", es: "325°F (163°C)", de: "163°C", nl: "163°C" }
        ],
        correct: 0,
        explanation: {
          en: "Collagen, the tough connective tissue in meat, begins breaking down around 160°F but requires sustained temperatures of 190-205°F for complete conversion to gelatin. This process takes hours and is why BBQ low-and-slow works - tough cuts like brisket and pork shoulder become tender and moist as collagen transforms into gelatin.",
          es: "El colágeno, el tejido conectivo duro en la carne, comienza a descomponerse alrededor de 160°F pero requiere temperaturas sostenidas de 190-205°F para una conversión completa en gelatina. Este proceso toma horas y es por qué el BBQ bajo y lento funciona - cortes duros como brisket y paleta de cerdo se vuelven tiernos y húmedos a medida que el colágeno se transforma en gelatina.",
          de: "Kollagen, das zähe Bindegewebe im Fleisch, beginnt sich bei etwa 71°C abzubauen, benötigt aber anhaltende Temperaturen von 88-96°C für die vollständige Umwandlung in Gelatine. Dieser Prozess dauert Stunden und ist der Grund, warum BBQ niedrig und langsam funktioniert - zähe Stücke wie Brisket und Schweineschulter werden zart und saftig, wenn sich Kollagen in Gelatine verwandelt.",
          nl: "Collageen, het taaie bindweefsel in vlees, begint af te breken rond 71°C maar vereist aanhoudende temperaturen van 88-96°C voor volledige conversie naar gelatine. Dit proces duurt uren en is waarom BBQ laag-en-langzaam werkt - taaie stukken zoals brisket en varkensschouder worden mals en sappig naarmate collageen transformeert naar gelatine."
        }
      },
      {
        question: {
          en: "What causes the pink 'smoke ring' in properly smoked meat?",
          es: "¿Qué causa el 'anillo de humo' rosado en carne correctamente ahumada?",
          de: "Was verursacht den rosa 'Rauchring' in richtig geräuchertem Fleisch?",
          nl: "Wat veroorzaakt de roze 'rook ring' in correct gerookt vlees?"
        },
        options: [
          { en: "Nitric oxide from smoke reacting with myoglobin during the first hours of cooking", es: "Óxido nítrico del humo reaccionando con mioglobina durante las primeras horas de cocción", de: "Stickstoffmonoxid aus Rauch, das in den ersten Stunden des Kochens mit Myoglobin reagiert", nl: "Stikstofoxide uit rook reagerend met myoglobine tijdens de eerste uren van het koken" },
          { en: "Pink curing salt added to rubs", es: "Sal de curado rosada añadida a los condimentos", de: "Rosa Pökelsalz zu Rubs hinzugefügt", nl: "Roze pekelvlees zout toegevoegd aan rubs" },
          { en: "Blood remaining in the meat", es: "Sangre que permanece en la carne", de: "Blut, das im Fleisch verbleibt", nl: "Bloed dat in het vlees achterblijft" },
          { en: "Rare meat in the center", es: "Carne poco cocida en el centro", de: "Zartes Fleisch in der Mitte", nl: "Rauw vlees in het midden" }
        ],
        correct: 0,
        explanation: {
          en: "The smoke ring forms when nitric oxide (NO) from burning wood penetrates cold meat and binds with myoglobin, creating stable nitrosylmyoglobin with a pink-red color. This only happens when meat is below 140°F, so it develops early in cooking. The ring indicates good smoke penetration but doesn't affect flavor - it's purely visual.",
          es: "El anillo de humo se forma cuando el óxido nítrico (NO) de la madera quemada penetra la carne fría y se une con la mioglobina, creando nitrosilmioglobina estable con un color rosado-rojo. Esto solo sucede cuando la carne está por debajo de 140°F, por lo que se desarrolla temprano en la cocción. El anillo indica buena penetración de humo pero no afecta el sabor - es puramente visual.",
          de: "Der Rauchring bildet sich, wenn Stickstoffmonoxid (NO) aus brennendem Holz in kaltes Fleisch eindringt und sich mit Myoglobin verbindet, wodurch stabiles Nitrosylmyoglobin mit rosa-roter Farbe entsteht. Dies geschieht nur, wenn das Fleisch unter 60°C liegt, also entwickelt es sich früh beim Kochen. Der Ring zeigt gute Rauchpenetration an, beeinflusst aber nicht den Geschmack - er ist rein visuell.",
          nl: "De rook ring vormt zich wanneer stikstofoxide (NO) van brandend hout koud vlees binnendringt en bindt met myoglobine, waardoor stabiel nitrosylmyoglobine met een roze-rode kleur ontstaat. Dit gebeurt alleen wanneer vlees onder 60°C is, dus het ontwikkelt zich vroeg in het koken. De ring geeft goede rook penetratie aan maar beïnvloedt de smaak niet - het is puur visueel."
        }
      },
      {
        question: {
          en: "What four processes combine to create bark on smoked brisket?",
          es: "¿Qué cuatro procesos se combinan para crear corteza en brisket ahumado?",
          de: "Welche vier Prozesse kombinieren sich, um Bark auf geräuchertem Brisket zu erzeugen?",
          nl: "Welke vier processen combineren om bark te creëren op gerookte brisket?"
        },
        options: [
          { en: "Dehydration, Maillard reaction, sugar caramelization, and pellicle formation", es: "Deshidratación, reacción de Maillard, caramelización de azúcar y formación de película", de: "Dehydration, Maillard-Reaktion, Zuckerkaramellisierung und Pellicle-Bildung", nl: "Dehydratie, Maillard reactie, suiker karamelisatie en pellicle vorming" },
          { en: "Smoking, seasoning, wrapping, and resting", es: "Ahumar, sazonar, envolver y reposar", de: "Räuchern, Würzen, Einwickeln und Ruhen", nl: "Roken, kruiden, inwikkelen en rusten" },
          { en: "Brining, smoking, searing, and glazing", es: "Salmuera, ahumar, sellar y glasear", de: "Pökeln, Räuchern, Anbraten und Glasieren", nl: "Pekelen, roken, aanbraden en glazuren" },
          { en: "Marinating, grilling, basting, and charring", es: "Marinar, asar, rociar y carbonizar", de: "Marinieren, Grillen, Bestreichen und Verkohlen", nl: "Marineren, grillen, begieten en verkoelen" }
        ],
        correct: 0,
        explanation: {
          en: "Bark formation involves: (1) Surface dehydration from heat and airflow creating a dry layer, (2) Maillard reaction browning proteins and sugars, (3) Sugar caramelization from rub ingredients, and (4) Pellicle formation - a tacky protein layer that helps smoke particles adhere. These processes work together over hours to create the prized crunchy, flavorful bark.",
          es: "La formación de corteza implica: (1) Deshidratación superficial del calor y flujo de aire creando una capa seca, (2) Reacción de Maillard dorando proteínas y azúcares, (3) Caramelización de azúcar de ingredientes del condimento, y (4) Formación de película - una capa pegajosa de proteína que ayuda a adherir partículas de humo. Estos procesos trabajan juntos durante horas para crear la codiciada corteza crujiente y sabrosa.",
          de: "Bark-Bildung beinhaltet: (1) Oberflächendehydration durch Hitze und Luftstrom, die eine trockene Schicht erzeugt, (2) Maillard-Reaktion, die Proteine und Zucker bräunt, (3) Zuckerkaramellisierung aus Rub-Zutaten, und (4) Pellicle-Bildung - eine klebrige Proteinschicht, die hilft, Rauchpartikel zu halten. Diese Prozesse arbeiten über Stunden zusammen, um die geschätzte knusprige, aromatische Bark zu erzeugen.",
          nl: "Bark vorming omvat: (1) Oppervlakte dehydratie door hitte en luchtstroom die een droge laag creëert, (2) Maillard reactie die eiwitten en suikers bruint, (3) Suiker karamelisatie van rub ingrediënten, en (4) Pellicle vorming - een plakkerige eiwitlaag die helpt rookdeeltjes te laten hechten. Deze processen werken samen gedurende uren om de geprezen knapperige, smaakvolle bark te creëren."
        }
      },
      {
        question: {
          en: "At what temperature does pork back fat begin to render?",
          es: "¿A qué temperatura comienza a derretirse la grasa dorsal de cerdo?",
          de: "Bei welcher Temperatur beginnt Schweinerückenspeck zu schmelzen?",
          nl: "Bij welke temperatuur begint varkensrugvet te smelten?"
        },
        options: [
          { en: "130-140°F (54-60°C)", es: "130-140°F (54-60°C)", de: "54-60°C", nl: "54-60°C" },
          { en: "160-170°F (71-77°C)", es: "160-170°F (71-77°C)", de: "71-77°C", nl: "71-77°C" },
          { en: "190-200°F (88-93°C)", es: "190-200°F (88-93°C)", de: "88-93°C", nl: "88-93°C" },
          { en: "212°F (100°C)", es: "212°F (100°C)", de: "100°C", nl: "100°C" }
        ],
        correct: 0,
        explanation: {
          en: "Pork fat has a lower melting point than beef fat, beginning to render at 130-140°F. This is why pork shoulder becomes self-basting during long cooks. Beef brisket fat renders higher at 160-170°F. Understanding fat rendering temperatures helps predict when meat will become moist and when to wrap to retain moisture.",
          es: "La grasa de cerdo tiene un punto de fusión más bajo que la grasa de res, comenzando a derretirse a 130-140°F. Es por esto que la paleta de cerdo se auto-rocía durante cocciones largas. La grasa de brisket de res se derrite más alto a 160-170°F. Entender las temperaturas de fusión de grasa ayuda a predecir cuándo la carne se volverá húmeda y cuándo envolver para retener humedad.",
          de: "Schweinefett hat einen niedrigeren Schmelzpunkt als Rindfett und beginnt bei 54-60°C zu schmelzen. Deshalb wird Schweineschulter während langer Kochzeiten selbst begossen. Rinderbrust-Fett schmilzt höher bei 71-77°C. Das Verständnis der Fettschmelztemperaturen hilft vorherzusagen, wann Fleisch saftig wird und wann man einwickeln sollte, um Feuchtigkeit zu bewahren.",
          nl: "Varkensvet heeft een lager smeltpunt dan rundvet en begint te smelten bij 54-60°C. Daarom begiet varkensschouder zichzelf tijdens lange bereidingen. Runderbrisket vet smelt hoger bij 71-77°C. Het begrijpen van vet smelttemperaturen helpt voorspellen wanneer vlees vochtig wordt en wanneer in te wikkelen om vocht te behouden."
        }
      },
      {
        question: {
          en: "What causes 'the stall' during low-and-slow BBQ cooking?",
          es: "¿Qué causa 'el estancamiento' durante la cocción BBQ bajo y lento?",
          de: "Was verursacht 'den Stall' beim niedrigen und langsamen BBQ-Kochen?",
          nl: "Wat veroorzaakt 'de stall' tijdens laag-en-langzaam BBQ koken?"
        },
        options: [
          { en: "Evaporative cooling from moisture on meat surface balancing heat input at 150-170°F", es: "Enfriamiento evaporativo de la humedad en la superficie de la carne equilibrando la entrada de calor a 150-170°F", de: "Verdunstungskühlung von Feuchtigkeit auf der Fleischoberfläche, die Wärmezufuhr bei 65-77°C ausgleicht", nl: "Verdampingskoeling van vocht op vleeoppervlak dat warmte-inbreng bij 65-77°C balanceert" },
          { en: "Fat solidifying at medium temperatures", es: "Grasa solidificándose a temperaturas medias", de: "Fett, das bei mittleren Temperaturen fest wird", nl: "Vet dat stolt bij middelhoge temperaturen" },
          { en: "Collagen absorbing all the heat energy", es: "Colágeno absorbiendo toda la energía térmica", de: "Kollagen absorbiert die gesamte Wärmeenergie", nl: "Collageen absorbeert alle warmte energie" },
          { en: "Temperature probe touching bone", es: "Sonda de temperatura tocando hueso", de: "Temperaturfühler berührt Knochen", nl: "Temperatuur probe raakt bot" }
        ],
        correct: 0,
        explanation: {
          en: "The stall occurs when evaporative cooling from moisture evaporating off the meat's surface equals the heat input from the smoker, typically around 150-170°F. The meat 'sweats' and temperature plateaus for hours. The Texas Crutch (wrapping) stops evaporation, allowing temperature to rise. This is the same principle that keeps you cool when you sweat.",
          es: "El estancamiento ocurre cuando el enfriamiento evaporativo de la humedad que se evapora de la superficie de la carne iguala la entrada de calor del ahumador, típicamente alrededor de 150-170°F. La carne 'suda' y la temperatura se estabiliza durante horas. El Texas Crutch (envolver) detiene la evaporación, permitiendo que la temperatura suba. Este es el mismo principio que te mantiene fresco cuando sudas.",
          de: "Der Stall tritt auf, wenn die Verdunstungskühlung von Feuchtigkeit, die von der Fleischoberfläche verdunstet, der Wärmezufuhr vom Smoker entspricht, typischerweise um 65-77°C. Das Fleisch 'schwitzt' und die Temperatur stagniert stundenlang. Die Texas Crutch (Einwickeln) stoppt die Verdunstung und ermöglicht einen Temperaturanstieg. Dies ist das gleiche Prinzip, das Sie beim Schwitzen kühl hält.",
          nl: "De stall treedt op wanneer verdampingskoeling van vocht dat van het vleeoppervlak verdampt gelijk is aan de warmte-inbreng van de smoker, meestal rond 65-77°C. Het vlees 'zweet' en de temperatuur stagneert urenlang. De Texas Crutch (inwikkelen) stopt verdamping, waardoor de temperatuur kan stijgen. Dit is hetzelfde principe dat je koel houdt wanneer je zweet."
        }
      },
      {
        question: {
          en: "What is the optimal pH range for tender, juicy meat?",
          es: "¿Cuál es el rango de pH óptimo para carne tierna y jugosa?",
          de: "Was ist der optimale pH-Bereich für zartes, saftiges Fleisch?",
          nl: "Wat is het optimale pH-bereik voor mals, sappig vlees?"
        },
        options: [
          { en: "pH 5.4-5.7 for best water-holding capacity", es: "pH 5.4-5.7 para mejor capacidad de retención de agua", de: "pH 5.4-5.7 für beste Wasserhaltungskapazität", nl: "pH 5.4-5.7 voor beste waterbindend vermogen" },
          { en: "pH 7.0 (neutral)", es: "pH 7.0 (neutral)", de: "pH 7.0 (neutral)", nl: "pH 7.0 (neutraal)" },
          { en: "pH 4.0-4.5 (acidic)", es: "pH 4.0-4.5 (ácido)", de: "pH 4.0-4.5 (sauer)", nl: "pH 4.0-4.5 (zuur)" },
          { en: "pH 8.0-8.5 (alkaline)", es: "pH 8.0-8.5 (alcalino)", de: "pH 8.0-8.5 (alkalisch)", nl: "pH 8.0-8.5 (alkalisch)" }
        ],
        correct: 0,
        explanation: {
          en: "Fresh meat has pH around 5.4-5.7, which is optimal for water-holding capacity and tenderness. At this pH, muscle proteins bind water effectively. Stressed animals have higher pH (dark, firm, dry meat). Very low pH causes pale, soft, exudative meat. Understanding pH helps explain why some meat is naturally more tender and why aging improves quality.",
          es: "La carne fresca tiene un pH alrededor de 5.4-5.7, que es óptimo para la capacidad de retención de agua y ternura. A este pH, las proteínas musculares unen agua efectivamente. Los animales estresados tienen pH más alto (carne oscura, firme, seca). El pH muy bajo causa carne pálida, blanda, exudativa. Entender el pH ayuda a explicar por qué alguna carne es naturalmente más tierna y por qué el envejecimiento mejora la calidad.",
          de: "Frisches Fleisch hat einen pH-Wert um 5.4-5.7, was optimal für Wasserhaltungskapazität und Zartheit ist. Bei diesem pH-Wert binden Muskelproteine Wasser effektiv. Gestresste Tiere haben höheren pH-Wert (dunkles, festes, trockenes Fleisch). Sehr niedriger pH-Wert verursacht blasses, weiches, exsudatives Fleisch. Das Verständnis des pH-Werts hilft zu erklären, warum einiges Fleisch natürlich zarter ist und warum Alterung die Qualität verbessert.",
          nl: "Vers vlees heeft een pH rond 5.4-5.7, wat optimaal is voor waterbindend vermogen en malheid. Bij deze pH binden spiereiwitten water effectief. Gestresste dieren hebben hogere pH (donker, stevig, droog vlees). Zeer lage pH veroorzaakt bleek, zacht, exsudatief vlees. Het begrijpen van pH helpt verklaren waarom sommig vlees van nature malser is en waarom rijping de kwaliteit verbetert."
        }
      },
      {
        question: {
          en: "How does wood combustion chemistry affect smoke flavor?",
          es: "¿Cómo afecta la química de combustión de madera al sabor del humo?",
          de: "Wie beeinflusst die Holzverbrennungschemie den Rauchgeschmack?",
          nl: "Hoe beïnvloedt de verbrandingschemie van hout de rooksmaak?"
        },
        options: [
          { en: "Complete combustion (thin blue smoke) is ideal; incomplete combustion creates bitter creosote", es: "Combustión completa (humo azul delgado) es ideal; combustión incompleta crea creosota amarga", de: "Vollständige Verbrennung (dünner blauer Rauch) ist ideal; unvollständige Verbrennung erzeugt bitteres Kreosot", nl: "Volledige verbranding (dunne blauwe rook) is ideaal; onvolledige verbranding creëert bittere creosoot" },
          { en: "White smoke has the best flavor compounds", es: "El humo blanco tiene los mejores compuestos de sabor", de: "Weißer Rauch hat die besten Geschmacksverbindungen", nl: "Witte rook heeft de beste smaakverbindingen" },
          { en: "All smoke types produce identical flavors", es: "Todos los tipos de humo producen sabores idénticos", de: "Alle Rauchtypen erzeugen identische Aromen", nl: "Alle rooktypen produceren identieke smaken" },
          { en: "Black smoke provides the strongest smoke ring", es: "El humo negro proporciona el anillo de humo más fuerte", de: "Schwarzer Rauch liefert den stärksten Rauchring", nl: "Zwarte rook biedt de sterkste rook ring" }
        ],
        correct: 0,
        explanation: {
          en: "Clean-burning wood with sufficient oxygen produces 'thin blue smoke' from complete combustion, releasing pleasant phenolic compounds. Insufficient oxygen causes incomplete combustion, producing thick white/black smoke rich in creosote and bitter compounds. Temperature matters too - wood burning too cool creates acrid smoke. Good BBQ requires managing airflow for clean combustion.",
          es: "La madera que quema limpiamente con suficiente oxígeno produce 'humo azul delgado' de combustión completa, liberando compuestos fenólicos agradables. El oxígeno insuficiente causa combustión incompleta, produciendo humo blanco/negro espeso rico en creosota y compuestos amargos. La temperatura también importa - la madera que quema demasiado fría crea humo acre. El buen BBQ requiere manejar el flujo de aire para combustión limpia.",
          de: "Sauber brennendes Holz mit ausreichend Sauerstoff produziert 'dünnen blauen Rauch' aus vollständiger Verbrennung und setzt angenehme phenolische Verbindungen frei. Unzureichender Sauerstoff verursacht unvollständige Verbrennung und produziert dicken weißen/schwarzen Rauch, reich an Kreosot und bitteren Verbindungen. Die Temperatur ist auch wichtig - zu kalt brennendes Holz erzeugt beißenden Rauch. Gutes BBQ erfordert die Verwaltung des Luftstroms für saubere Verbrennung.",
          nl: "Schoon brandend hout met voldoende zuurstof produceert 'dunne blauwe rook' van volledige verbranding, waarbij aangename fenolische verbindingen vrijkomen. Onvoldoende zuurstof veroorzaakt onvolledige verbranding, waarbij dikke witte/zwarte rook wordt geproduceerd rijk aan creosoot en bittere verbindingen. Temperatuur is ook belangrijk - te koel brandend hout creëert scherpe rook. Goede BBQ vereist het beheren van luchtstroom voor schone verbranding."
        }
      },
      {
        question: {
          en: "What enzyme is found in papaya and how does it tenderize meat?",
          es: "¿Qué enzima se encuentra en la papaya y cómo ablanda la carne?",
          de: "Welches Enzym findet sich in Papaya und wie macht es Fleisch zart?",
          nl: "Welk enzym wordt gevonden in papaya en hoe maakt het vlees mals?"
        },
        options: [
          { en: "Papain - breaks down protein bonds, tenderizing tough muscle fibers", es: "Papaína - rompe enlaces de proteínas, ablandando fibras musculares duras", de: "Papain - bricht Proteinbindungen auf, macht zähe Muskelfasern zart", nl: "Papaïne - breekt eiwitbindingen af, maakt taaie spiervezels mals" },
          { en: "Amylase - converts starches to sugars", es: "Amilasa - convierte almidones en azúcares", de: "Amylase - wandelt Stärke in Zucker um", nl: "Amylase - zet zetmeel om in suikers" },
          { en: "Lipase - breaks down fats", es: "Lipasa - descompone grasas", de: "Lipase - baut Fette ab", nl: "Lipase - breekt vetten af" },
          { en: "Lactase - digests milk proteins", es: "Lactasa - digiere proteínas de la leche", de: "Laktase - verdaut Milchproteine", nl: "Lactase - verteert melkeiwitten" }
        ],
        correct: 0,
        explanation: {
          en: "Papain from papaya is a proteolytic enzyme that breaks peptide bonds in proteins, effectively pre-digesting tough muscle fibers. Bromelain (pineapple) and actinidin (kiwi) work similarly. These enzymes are used in marinades but must be timed carefully - too long causes mushy texture. They work at room temperature, so marinate refrigerated to slow action.",
          es: "La papaína de la papaya es una enzima proteolítica que rompe enlaces peptídicos en proteínas, efectivamente pre-digiriendo fibras musculares duras. La bromelaína (piña) y actinidina (kiwi) funcionan de manera similar. Estas enzimas se usan en marinadas pero deben cronometrarse cuidadosamente - demasiado tiempo causa textura blanda. Funcionan a temperatura ambiente, así que marina refrigerado para ralentizar la acción.",
          de: "Papain aus Papaya ist ein proteolytisches Enzym, das Peptidbindungen in Proteinen aufbricht und zähe Muskelfasern effektiv vorverdaut. Bromelain (Ananas) und Actinidin (Kiwi) wirken ähnlich. Diese Enzyme werden in Marinaden verwendet, müssen aber sorgfältig zeitlich abgestimmt werden - zu lange verursacht matschige Textur. Sie wirken bei Raumtemperatur, also im Kühlschrank marinieren, um die Wirkung zu verlangsamen.",
          nl: "Papaïne uit papaya is een proteolytisch enzym dat peptidebindingen in eiwitten afbreekt, waardoor taaie spiervezels effectief worden voorverteerd. Bromelaïne (ananas) en actinidine (kiwi) werken op vergelijkbare wijze. Deze enzymen worden gebruikt in marinades maar moeten zorgvuldig getimed worden - te lang veroorzaakt zachte textuur. Ze werken op kamertemperatuur, dus marineer gekoeld om de werking te vertragen."
        }
      },
      {
        question: {
          en: "What is the science behind salt penetration in dry brining?",
          es: "¿Cuál es la ciencia detrás de la penetración de sal en el salmuera seca?",
          de: "Was ist die Wissenschaft hinter der Salzpenetration beim Trockenpökeln?",
          nl: "Wat is de wetenschap achter zoutpenetratie bij droog pekelen?"
        },
        options: [
          { en: "Salt draws out moisture which dissolves salt, then reabsorbs carrying salt deep into meat via diffusion", es: "La sal extrae humedad que disuelve la sal, luego se reabsorbe llevando sal profundamente en la carne vía difusión", de: "Salz zieht Feuchtigkeit heraus, die Salz auflöst, dann wird es wieder absorbiert und trägt Salz tief ins Fleisch durch Diffusion", nl: "Zout trekt vocht aan dat zout oplost, dan wordt het weer opgenomen en draagt zout diep in het vlees via diffusie" },
          { en: "Salt molecules are small enough to pass through cell walls instantly", es: "Las moléculas de sal son lo suficientemente pequeñas para pasar instantáneamente a través de las paredes celulares", de: "Salzmoleküle sind klein genug, um sofort durch Zellwände zu passieren", nl: "Zoutmoleculen zijn klein genoeg om direct door celwanden te gaan" },
          { en: "Heat from the grill pushes salt into the meat", es: "El calor de la parrilla empuja la sal hacia la carne", de: "Hitze vom Grill drückt Salz ins Fleisch", nl: "Hitte van de grill duwt zout in het vlees" },
          { en: "Salt only seasons the surface, never penetrating", es: "La sal solo sazona la superficie, nunca penetrando", de: "Salz würzt nur die Oberfläche, dringt nie ein", nl: "Zout kruidt alleen het oppervlak, dringt nooit door" }
        ],
        correct: 0,
        explanation: {
          en: "Dry brining works through osmosis and diffusion: (1) Salt draws moisture from meat surface, (2) This moisture dissolves the salt creating brine, (3) The brine is reabsorbed into meat via diffusion, carrying dissolved salt deep inside, (4) Salt disrupts muscle proteins, improving water retention. This takes 12-24 hours. Larger rub molecules stay on surface, providing bark flavors.",
          es: "El salmuera seca funciona a través de ósmosis y difusión: (1) La sal extrae humedad de la superficie de la carne, (2) Esta humedad disuelve la sal creando salmuera, (3) La salmuera se reabsorbe en la carne vía difusión, llevando sal disuelta profundamente adentro, (4) La sal interrumpe proteínas musculares, mejorando la retención de agua. Esto toma 12-24 horas. Las moléculas más grandes del condimento permanecen en la superficie, proporcionando sabores de corteza.",
          de: "Trockenpökeln funktioniert durch Osmose und Diffusion: (1) Salz zieht Feuchtigkeit von der Fleischoberfläche, (2) Diese Feuchtigkeit löst das Salz auf und bildet Lake, (3) Die Lake wird durch Diffusion wieder ins Fleisch aufgenommen und trägt gelöstes Salz tief hinein, (4) Salz stört Muskelproteine und verbessert die Wasserbindung. Dies dauert 12-24 Stunden. Größere Rub-Moleküle bleiben auf der Oberfläche und liefern Bark-Aromen.",
          nl: "Droog pekelen werkt via osmose en diffusie: (1) Zout trekt vocht uit vleeoppervlak, (2) Dit vocht lost het zout op waardoor pekel ontstaat, (3) De pekel wordt weer opgenomen in vlees via diffusie, waarbij opgelost zout diep naar binnen wordt gedragen, (4) Zout verstoort spiereiwitten, verbetert waterbehoud. Dit duurt 12-24 uur. Grotere rub moleculen blijven op het oppervlak, leveren bark smaken."
        }
      },
      {
        question: {
          en: "How do nitrates and nitrites work in curing meat?",
          es: "¿Cómo funcionan los nitratos y nitritos en el curado de carne?",
          de: "Wie funktionieren Nitrate und Nitrite beim Pökeln von Fleisch?",
          nl: "Hoe werken nitraten en nitrieten bij het pekelen van vlees?"
        },
        options: [
          { en: "Convert to nitric oxide, preserving pink color and preventing botulism bacteria growth", es: "Se convierten en óxido nítrico, preservando el color rosado y previniendo el crecimiento de bacterias botulismo", de: "Wandeln sich in Stickstoffmonoxid um, bewahren rosa Farbe und verhindern Botulinusbakterien-Wachstum", nl: "Converteren naar stikstofoxide, behouden roze kleur en voorkomen botulisme bacteriegroei" },
          { en: "Add salt content to dehydrate meat", es: "Añaden contenido de sal para deshidratar la carne", de: "Fügen Salzgehalt hinzu, um Fleisch zu dehydrieren", nl: "Voegen zoutgehalte toe om vlees te dehydreren" },
          { en: "Break down proteins into amino acids", es: "Descomponen proteínas en aminoácidos", de: "Bauen Proteine zu Aminosäuren ab", nl: "Breken eiwitten af tot aminozuren" },
          { en: "Create acidic environment to preserve meat", es: "Crean ambiente ácido para preservar la carne", de: "Schaffen saure Umgebung zur Fleischkonservierung", nl: "Creëren zure omgeving om vlees te bewaren" }
        ],
        correct: 0,
        explanation: {
          en: "Curing salts (Prague Powder/pink salt) contain sodium nitrite or nitrate. These convert to nitric oxide (NO), which: (1) Binds with myoglobin creating stable pink color even when cooked, (2) Inhibits Clostridium botulinum bacteria preventing deadly botulism, (3) Provides characteristic 'cured' flavor in bacon, ham, pastrami. This is different from the smoke ring, though both involve NO and myoglobin.",
          es: "Las sales de curado (Polvo de Praga/sal rosada) contienen nitrito o nitrato de sodio. Estos se convierten en óxido nítrico (NO), que: (1) Se une con mioglobina creando color rosado estable incluso cuando se cocina, (2) Inhibe bacterias Clostridium botulinum previniendo botulismo mortal, (3) Proporciona sabor característico 'curado' en tocino, jamón, pastrami. Esto es diferente del anillo de humo, aunque ambos involucran NO y mioglobina.",
          de: "Pökelsalze (Prager Pulver/rosa Salz) enthalten Natriumnitrit oder -nitrat. Diese wandeln sich in Stickstoffmonoxid (NO) um, das: (1) Mit Myoglobin bindet und stabile rosa Farbe erzeugt, auch wenn gekocht, (2) Clostridium botulinum-Bakterien hemmt und tödlichen Botulismus verhindert, (3) Charakteristischen 'gepökelten' Geschmack in Speck, Schinken, Pastrami liefert. Dies unterscheidet sich vom Rauchring, obwohl beide NO und Myoglobin beinhalten.",
          nl: "Pekelvleeszout (Praagse Poeder/roze zout) bevat natriumnitriet of nitraat. Deze converteren naar stikstofoxide (NO), dat: (1) Bindt met myoglobine waardoor stabiele roze kleur ontstaat zelfs wanneer gekookt, (2) Clostridium botulinum bacteriën remt en dodelijk botulisme voorkomt, (3) Karakteristieke 'gepekelde' smaak levert in spek, ham, pastrami. Dit verschilt van de rook ring, hoewel beide NO en myoglobine betreffen."
        }
      },
      {
        question: {
          en: "Why can collagen break down at the same temperature using hot-and-fast or low-and-slow methods?",
          es: "¿Por qué puede descomponerse el colágeno a la misma temperatura usando métodos caliente-y-rápido o bajo-y-lento?",
          de: "Warum kann Kollagen bei derselben Temperatur mit heiß-und-schnell oder niedrig-und-langsam Methoden abgebaut werden?",
          nl: "Waarom kan collageen afbreken bij dezelfde temperatuur met heet-en-snel of laag-en-langzaam methoden?"
        },
        options: [
          { en: "Internal meat temperature matters, not cooking method - both reach 195-205°F inside", es: "La temperatura interna de la carne importa, no el método de cocción - ambos alcanzan 195-205°F adentro", de: "Die innere Fleischtemperatur ist wichtig, nicht die Kochmethode - beide erreichen 88-96°C innen", nl: "Interne vleestemperatuur is belangrijk, niet de kookmethode - beide bereiken 88-96°C binnenin" },
          { en: "Hot-and-fast uses enzymes while low-and-slow uses heat", es: "Caliente-y-rápido usa enzimas mientras bajo-y-lento usa calor", de: "Heiß-und-schnell nutzt Enzyme, während niedrig-und-langsam Hitze nutzt", nl: "Heet-en-snel gebruikt enzymen terwijl laag-en-langzaam hitte gebruikt" },
          { en: "They use different chemical reactions entirely", es: "Usan reacciones químicas completamente diferentes", de: "Sie nutzen völlig unterschiedliche chemische Reaktionen", nl: "Ze gebruiken volledig verschillende chemische reacties" },
          { en: "Hot-and-fast doesn't actually break down collagen", es: "Caliente-y-rápido en realidad no descompone el colágeno", de: "Heiß-und-schnell baut Kollagen tatsächlich nicht ab", nl: "Heet-en-snel breekt collageen eigenlijk niet af" }
        ],
        correct: 0,
        explanation: {
          en: "Collagen conversion depends on reaching and holding internal temperature of 195-205°F, not the ambient cooking temperature. Hot-and-fast (325°F+) cooks to this internal temp quickly, while low-and-slow (225°F) takes longer but reaches the same internal temp. Both methods work, but low-and-slow provides more smoke flavor and traditionally better bark development.",
          es: "La conversión de colágeno depende de alcanzar y mantener la temperatura interna de 195-205°F, no la temperatura ambiente de cocción. Caliente-y-rápido (325°F+) cocina a esta temperatura interna rápidamente, mientras bajo-y-lento (225°F) toma más tiempo pero alcanza la misma temperatura interna. Ambos métodos funcionan, pero bajo-y-lento proporciona más sabor a humo y tradicionalmente mejor desarrollo de corteza.",
          de: "Die Kollagenumwandlung hängt davon ab, eine Innentemperatur von 88-96°C zu erreichen und zu halten, nicht von der Umgebungstemperatur beim Kochen. Heiß-und-schnell (163°C+) kocht schnell zu dieser Innentemperatur, während niedrig-und-langsam (107°C) länger dauert, aber dieselbe Innentemperatur erreicht. Beide Methoden funktionieren, aber niedrig-und-langsam liefert mehr Rauchgeschmack und traditionell bessere Bark-Entwicklung.",
          nl: "Collageen conversie hangt af van het bereiken en vasthouden van interne temperatuur van 88-96°C, niet de omgevingstemperatuur bij het koken. Heet-en-snel (163°C+) kookt snel naar deze interne temp, terwijl laag-en-langzaam (107°C) langer duurt maar dezelfde interne temp bereikt. Beide methoden werken, maar laag-en-langzaam levert meer rooksmaak en traditioneel betere bark ontwikkeling."
        }
      },
      {
        question: {
          en: "What is the difference between injection and dry brining for moisture retention?",
          es: "¿Cuál es la diferencia entre inyección y salmuera seca para retención de humedad?",
          de: "Was ist der Unterschied zwischen Injektion und Trockenpökeln für Feuchtigkeitsretention?",
          nl: "Wat is het verschil tussen injectie en droog pekelen voor vochtbehoud?"
        },
        options: [
          { en: "Injection delivers moisture instantly to center, dry brining slowly seasons and restructures proteins", es: "La inyección entrega humedad instantáneamente al centro, la salmuera seca sazona lentamente y reestructura proteínas", de: "Injektion liefert Feuchtigkeit sofort ins Zentrum, Trockenpökeln würzt langsam und strukturiert Proteine um", nl: "Injectie levert vocht direct aan het centrum, droog pekelen kruidt langzaam en herstructureert eiwitten" },
          { en: "They achieve identical results through different processes", es: "Logran resultados idénticos a través de diferentes procesos", de: "Sie erzielen identische Ergebnisse durch verschiedene Prozesse", nl: "Ze bereiken identieke resultaten via verschillende processen" },
          { en: "Injection is for pork, dry brining is for beef only", es: "La inyección es para cerdo, la salmuera seca es solo para res", de: "Injektion ist für Schwein, Trockenpökeln nur für Rind", nl: "Injectie is voor varken, droog pekelen alleen voor rundvlees" },
          { en: "Dry brining adds more moisture than injection", es: "La salmuera seca añade más humedad que la inyección", de: "Trockenpökeln fügt mehr Feuchtigkeit hinzu als Injektion", nl: "Droog pekelen voegt meer vocht toe dan injectie" }
        ],
        correct: 0,
        explanation: {
          en: "Injection quickly delivers liquid (broth, butter, seasonings) deep into meat center using a syringe, adding moisture instantly. Dry brining uses salt's osmotic action over 12-24 hours to season, restructure proteins for better water-holding, and enhance natural juices. Injection adds moisture; dry brining helps meat retain its own moisture. Competition BBQ often uses both methods together.",
          es: "La inyección entrega rápidamente líquido (caldo, mantequilla, condimentos) profundamente en el centro de la carne usando una jeringa, añadiendo humedad instantáneamente. La salmuera seca usa la acción osmótica de la sal durante 12-24 horas para sazonar, reestructurar proteínas para mejor retención de agua y mejorar jugos naturales. La inyección añade humedad; la salmuera seca ayuda a la carne a retener su propia humedad. El BBQ de competencia a menudo usa ambos métodos juntos.",
          de: "Injektion liefert schnell Flüssigkeit (Brühe, Butter, Gewürze) tief ins Fleischzentrum mit einer Spritze und fügt sofort Feuchtigkeit hinzu. Trockenpökeln nutzt die osmotische Wirkung von Salz über 12-24 Stunden zum Würzen, Umstrukturieren von Proteinen für bessere Wasserbindung und Verbesserung natürlicher Säfte. Injektion fügt Feuchtigkeit hinzu; Trockenpökeln hilft Fleisch, seine eigene Feuchtigkeit zu bewahren. Wettbewerbs-BBQ verwendet oft beide Methoden zusammen.",
          nl: "Injectie levert snel vloeistof (bouillon, boter, kruiden) diep in het vleescentrum met een spuit, voegt direct vocht toe. Droog pekelen gebruikt de osmotische werking van zout gedurende 12-24 uur om te kruiden, eiwitten te herstructureren voor beter waterbehoud en natuurlijke sappen te verbeteren. Injectie voegt vocht toe; droog pekelen helpt vlees zijn eigen vocht te behouden. Wedstrijd-BBQ gebruikt vaak beide methoden samen."
        }
      },
      {
        question: {
          en: "What happens during 'carryover cooking' when meat rests?",
          es: "¿Qué sucede durante la 'cocción residual' cuando la carne reposa?",
          de: "Was passiert während des 'Nachgarens', wenn Fleisch ruht?",
          nl: "Wat gebeurt er tijdens 'nabereiden' wanneer vlees rust?"
        },
        options: [
          { en: "Internal temperature rises 5-10°F as heat from exterior moves to cooler center", es: "La temperatura interna sube 5-10°F mientras el calor del exterior se mueve al centro más frío", de: "Innentemperatur steigt 5-10°F, während Hitze von außen zum kühleren Zentrum wandert", nl: "Interne temperatuur stijgt 5-10°F terwijl warmte van buiten naar koeler centrum beweegt" },
          { en: "Meat continues cooking from ambient air temperature", es: "La carne continúa cocinándose por la temperatura del aire ambiente", de: "Fleisch kocht weiter durch Umgebungslufttemperatur", nl: "Vlees blijft koken door omgevingsluchttemperatuur" },
          { en: "Temperature drops immediately by 20°F", es: "La temperatura cae inmediatamente 20°F", de: "Temperatur fällt sofort um 10°C", nl: "Temperatuur daalt onmiddellijk 10°C" },
          { en: "Nothing happens, temperature stays constant", es: "No pasa nada, la temperatura permanece constante", de: "Nichts passiert, Temperatur bleibt konstant", nl: "Er gebeurt niets, temperatuur blijft constant" }
        ],
        correct: 0,
        explanation: {
          en: "During resting, heat continues migrating from the hotter exterior to the cooler center through thermal equilibration, raising internal temperature 5-10°F after removal from heat. This is why you pull meat 5-10° before target temp. Simultaneously, muscle fibers relax and juices redistribute throughout the meat rather than running out when sliced. Resting is crucial for juicy results.",
          es: "Durante el reposo, el calor continúa migrando del exterior más caliente al centro más frío a través de equilibración térmica, elevando la temperatura interna 5-10°F después de retirar del calor. Por eso retiras la carne 5-10° antes de la temperatura objetivo. Simultáneamente, las fibras musculares se relajan y los jugos se redistribuyen por toda la carne en lugar de salir cuando se corta. El reposo es crucial para resultados jugosos.",
          de: "Während des Ruhens wandert Hitze weiterhin vom heißeren Äußeren zum kühleren Zentrum durch thermische Gleichgewichtsbildung und erhöht die Innentemperatur um 5-10°F nach Entfernung von der Hitze. Deshalb nimmt man Fleisch 5-10° vor der Zieltemperatur. Gleichzeitig entspannen sich Muskelfasern und Säfte verteilen sich im ganzen Fleisch, anstatt beim Schneiden herauszulaufen. Ruhen ist entscheidend für saftige Ergebnisse.",
          nl: "Tijdens het rusten blijft warmte migreren van de hetere buitenkant naar het koelere centrum via thermische equilibratie, waarbij de interne temperatuur 5-10°F stijgt na verwijdering van de warmte. Daarom haal je vlees 5-10° voor doeltemperatuur eraf. Tegelijkertijd ontspannen spiervezels en herverdelen sappen zich door het vlees in plaats van eruit te lopen wanneer gesneden. Rusten is cruciaal voor sappige resultaten."
        }
      },
      {
        question: {
          en: "How does humidity control in a smoker affect the cooking process?",
          es: "¿Cómo afecta el control de humedad en un ahumador al proceso de cocción?",
          de: "Wie beeinflusst die Feuchtigkeitskontrolle in einem Smoker den Kochprozess?",
          nl: "Hoe beïnvloedt vochtregeling in een smoker het kookproces?"
        },
        options: [
          { en: "Moisture helps smoke particles adhere, but too much prevents bark formation", es: "La humedad ayuda a las partículas de humo a adherirse, pero demasiada previene la formación de corteza", de: "Feuchtigkeit hilft Rauchpartikeln zu haften, aber zu viel verhindert Bark-Bildung", nl: "Vocht helpt rookdeeltjes hechten, maar te veel voorkomt bark vorming" },
          { en: "Higher humidity always creates better bark", es: "Mayor humedad siempre crea mejor corteza", de: "Höhere Feuchtigkeit erzeugt immer bessere Bark", nl: "Hogere vochtigheid creëert altijd betere bark" },
          { en: "Humidity has no effect on BBQ results", es: "La humedad no tiene efecto en los resultados BBQ", de: "Feuchtigkeit hat keinen Effekt auf BBQ-Ergebnisse", nl: "Vochtigheid heeft geen effect op BBQ-resultaten" },
          { en: "Dry conditions produce more smoke ring", es: "Condiciones secas producen más anillo de humo", de: "Trockene Bedingungen produzieren mehr Rauchring", nl: "Droge omstandigheden produceren meer rook ring" }
        ],
        correct: 0,
        explanation: {
          en: "Humidity affects BBQ in two ways: (1) Moist air helps smoke particles stick to meat surface via condensation, improving smoke flavor penetration, (2) Too much humidity prevents surface dehydration needed for bark formation - meat stays wet and doesn't develop crust. Water pans add humidity early for smoke adhesion, but many pitmasters remove them later to dry the surface for bark development.",
          es: "La humedad afecta el BBQ de dos maneras: (1) El aire húmedo ayuda a las partículas de humo a pegarse a la superficie de la carne vía condensación, mejorando la penetración del sabor a humo, (2) Demasiada humedad previene la deshidratación superficial necesaria para la formación de corteza - la carne permanece húmeda y no desarrolla costra. Las bandejas de agua añaden humedad temprano para adhesión del humo, pero muchos pitmasters las retiran después para secar la superficie para desarrollo de corteza.",
          de: "Feuchtigkeit beeinflusst BBQ auf zwei Arten: (1) Feuchte Luft hilft Rauchpartikeln, über Kondensation an der Fleischoberfläche zu haften, verbessert Rauchgeschmackspenetration, (2) Zu viel Feuchtigkeit verhindert Oberflächendehydration, die für Bark-Bildung nötig ist - Fleisch bleibt nass und entwickelt keine Kruste. Wasserpfannen fügen früh Feuchtigkeit für Rauchhaftung hinzu, aber viele Pitmasters entfernen sie später, um die Oberfläche für Bark-Entwicklung zu trocknen.",
          nl: "Vochtigheid beïnvloedt BBQ op twee manieren: (1) Vochtige lucht helpt rookdeeltjes aan vleeoppervlak te plakken via condensatie, verbetert rooksmaak penetratie, (2) Te veel vochtigheid voorkomt oppervlakte dehydratie nodig voor bark vorming - vlees blijft nat en ontwikkelt geen korst. Waterpannen voegen vroeg vochtigheid toe voor rookhechting, maar veel pitmasters verwijderen ze later om het oppervlak te drogen voor bark ontwikkeling."
        }
      },
      {
        question: {
          en: "What is the role of salt in rub penetration beyond flavor?",
          es: "¿Cuál es el papel de la sal en la penetración del condimento más allá del sabor?",
          de: "Was ist die Rolle von Salz bei der Rub-Penetration jenseits des Geschmacks?",
          nl: "Wat is de rol van zout bij rub penetratie naast smaak?"
        },
        options: [
          { en: "Salt molecules diffuse into meat while larger spice molecules remain on surface", es: "Las moléculas de sal se difunden en la carne mientras las moléculas de especias más grandes permanecen en la superficie", de: "Salzmoleküle diffundieren ins Fleisch, während größere Gewürzmoleküle auf der Oberfläche bleiben", nl: "Zoutmoleculen diffunderen in vlees terwijl grotere kruidenmoleculen op oppervlak blijven" },
          { en: "All rub ingredients penetrate equally deep", es: "Todos los ingredientes del condimento penetran igualmente profundo", de: "Alle Rub-Zutaten dringen gleich tief ein", nl: "Alle rub ingrediënten dringen even diep door" },
          { en: "Salt prevents other spices from penetrating", es: "La sal evita que otras especias penetren", de: "Salz verhindert, dass andere Gewürze eindringen", nl: "Zout voorkomt dat andere kruiden doordringen" },
          { en: "Only oil-based ingredients can penetrate meat", es: "Solo los ingredientes a base de aceite pueden penetrar la carne", de: "Nur ölbasierte Zutaten können ins Fleisch eindringen", nl: "Alleen op olie gebaseerde ingrediënten kunnen vlees binnendringen" }
        ],
        correct: 0,
        explanation: {
          en: "Salt (NaCl) molecules are small and water-soluble, allowing them to diffuse deep into meat tissue over time through osmosis and equilibrium. Larger spice molecules (paprika, garlic, pepper) remain primarily on the surface, creating bark flavor. This is why competition pitmasters apply salt hours before other spices - it needs time to penetrate while spices stay surface for crust.",
          es: "Las moléculas de sal (NaCl) son pequeñas y solubles en agua, permitiéndoles difundirse profundamente en el tejido de la carne con el tiempo a través de ósmosis y equilibrio. Las moléculas de especias más grandes (pimentón, ajo, pimienta) permanecen principalmente en la superficie, creando sabor de corteza. Por eso los pitmasters de competencia aplican sal horas antes que otras especias - necesita tiempo para penetrar mientras las especias permanecen en superficie para la costra.",
          de: "Salz (NaCl)-Moleküle sind klein und wasserlöslich, wodurch sie im Laufe der Zeit durch Osmose und Gleichgewicht tief in das Fleischgewebe diffundieren können. Größere Gewürzmoleküle (Paprika, Knoblauch, Pfeffer) bleiben hauptsächlich auf der Oberfläche und erzeugen Bark-Geschmack. Deshalb tragen Wettbewerbs-Pitmasters Salz Stunden vor anderen Gewürzen auf - es braucht Zeit zum Eindringen, während Gewürze für die Kruste auf der Oberfläche bleiben.",
          nl: "Zout (NaCl) moleculen zijn klein en wateroplosbaar, waardoor ze in de loop van de tijd diep in vleesweefsel kunnen diffunderen via osmose en evenwicht. Grotere kruidenmoleculen (paprika, knoflook, peper) blijven voornamelijk op het oppervlak, creëren bark smaak. Daarom brengen wedstrijd-pitmasters uren voor andere kruiden zout aan - het heeft tijd nodig om door te dringen terwijl kruiden op oppervlak blijven voor korst."
        }
      },
      {
        question: {
          en: "What is the chemical difference between fat rendering and fat melting?",
          es: "¿Cuál es la diferencia química entre derretir grasa y fundir grasa?",
          de: "Was ist der chemische Unterschied zwischen Fettschmelzen und Fettrendern?",
          nl: "Wat is het chemische verschil tussen vet smelten en vet renderen?"
        },
        options: [
          { en: "Rendering breaks down connective tissue around fat cells, melting just liquefies fat", es: "Derretir descompone tejido conectivo alrededor de células grasas, fundir solo licúa grasa", de: "Rendern baut Bindegewebe um Fettzellen ab, Schmelzen verflüssigt nur Fett", nl: "Renderen breekt bindweefsel rond vetcellen af, smelten maakt vet alleen vloeibaar" },
          { en: "They are exactly the same process", es: "Son exactamente el mismo proceso", de: "Sie sind genau derselbe Prozess", nl: "Ze zijn precies hetzelfde proces" },
          { en: "Rendering happens at lower temperatures", es: "Derretir ocurre a temperaturas más bajas", de: "Rendern geschieht bei niedrigeren Temperaturen", nl: "Renderen gebeurt bij lagere temperaturen" },
          { en: "Melting requires enzymes, rendering does not", es: "Fundir requiere enzimas, derretir no", de: "Schmelzen erfordert Enzyme, Rendern nicht", nl: "Smelten vereist enzymen, renderen niet" }
        ],
        correct: 0,
        explanation: {
          en: "Fat melting is simply the phase change from solid to liquid at the fat's melting point. Fat rendering is the complete process of breaking down collagen and connective tissue surrounding fat cells, releasing the liquefied fat. Rendering requires sustained heat to dissolve the tough tissue matrix holding fat in place. This is why rendered fat is clearer and purer than simply melted fat.",
          es: "Fundir grasa es simplemente el cambio de fase de sólido a líquido en el punto de fusión de la grasa. Derretir grasa es el proceso completo de descomposición del colágeno y tejido conectivo que rodea las células grasas, liberando la grasa licuada. Derretir requiere calor sostenido para disolver la matriz de tejido duro que mantiene la grasa en su lugar. Por eso la grasa derretida es más clara y pura que la grasa simplemente fundida.",
          de: "Fettschmelzen ist einfach der Phasenwechsel von fest zu flüssig am Schmelzpunkt des Fetts. Fettrendern ist der vollständige Prozess des Abbaus von Kollagen und Bindegewebe um Fettzellen herum, wodurch das verflüssigte Fett freigesetzt wird. Rendern erfordert anhaltende Hitze, um die zähe Gewebematrix aufzulösen, die Fett an Ort und Stelle hält. Deshalb ist gerendertes Fett klarer und reiner als einfach geschmolzenes Fett.",
          nl: "Vet smelten is simpelweg de faseovergang van vast naar vloeibaar bij het smeltpunt van het vet. Vet renderen is het volledige proces van het afbreken van collageen en bindweefsel rondom vetcellen, waarbij het vloeibaar gemaakte vet vrijkomt. Renderen vereist aanhoudende warmte om de taaie weefselmatrix op te lossen die vet op zijn plaats houdt. Daarom is gerenderd vet helderder en puurder dan simpelweg gesmolten vet."
        }
      },
      {
        question: {
          en: "Why does smoke only penetrate meat effectively in the first few hours of cooking?",
          es: "¿Por qué el humo solo penetra la carne efectivamente en las primeras horas de cocción?",
          de: "Warum dringt Rauch nur in den ersten Stunden des Kochens effektiv ins Fleisch ein?",
          nl: "Waarom dringt rook alleen effectief in de eerste uren van het koken in vlees door?"
        },
        options: [
          { en: "Pellicle (tacky protein layer) forms early; once surface dries and crusts, smoke can't adhere", es: "La película (capa pegajosa de proteína) se forma temprano; una vez que la superficie se seca y forma costra, el humo no puede adherirse", de: "Pellicle (klebrige Proteinschicht) bildet sich früh; sobald Oberfläche trocknet und Kruste bildet, kann Rauch nicht haften", nl: "Pellicle (plakkerige eiwitlaag) vormt zich vroeg; zodra oppervlak droogt en korst vormt, kan rook niet hechten" },
          { en: "Meat stops absorbing smoke after reaching 140°F internal temperature", es: "La carne deja de absorber humo después de alcanzar 140°F de temperatura interna", de: "Fleisch hört auf, Rauch zu absorbieren, nachdem es 60°C Innentemperatur erreicht", nl: "Vlees stopt met rook absorberen na het bereiken van 60°C interne temperatuur" },
          { en: "Smoke compounds break down at high temperatures", es: "Los compuestos de humo se descomponen a altas temperaturas", de: "Rauchverbindungen zersetzen sich bei hohen Temperaturen", nl: "Rook verbindingen breken af bij hoge temperaturen" },
          { en: "Fat rendering washes smoke flavor away", es: "El derretimiento de grasa lava el sabor a humo", de: "Fettrendern wäscht Rauchgeschmack weg", nl: "Vet renderen spoelt rooksmaak weg" }
        ],
        correct: 0,
        explanation: {
          en: "Early in cooking, meat surface is moist with a tacky pellicle (protein layer) that smoke particles stick to. As cooking progresses, the surface dehydrates and bark forms, creating a barrier that prevents smoke adhesion. Additionally, smoke ring formation stops once meat exceeds 140°F. This is why continuous heavy smoke after the first few hours adds little flavor and may cause bitterness.",
          es: "Temprano en la cocción, la superficie de la carne está húmeda con una película pegajosa (capa de proteína) a la que se adhieren las partículas de humo. A medida que avanza la cocción, la superficie se deshidrata y se forma corteza, creando una barrera que previene la adhesión del humo. Además, la formación del anillo de humo se detiene una vez que la carne excede 140°F. Por eso el humo pesado continuo después de las primeras horas añade poco sabor y puede causar amargura.",
          de: "Früh beim Kochen ist die Fleischoberfläche feucht mit einem klebrigen Pellicle (Proteinschicht), an dem Rauchpartikel haften. Im Verlauf des Kochens dehydriert die Oberfläche und Bark bildet sich, was eine Barriere schafft, die Rauchhaftung verhindert. Zusätzlich stoppt die Rauchringbildung, sobald Fleisch 60°C überschreitet. Deshalb fügt kontinuierlicher starker Rauch nach den ersten Stunden wenig Geschmack hinzu und kann Bitterkeit verursachen.",
          nl: "Vroeg in het koken is het vleeoppervlak vochtig met een plakkerige pellicle (eiwitlaag) waar rookdeeltjes aan blijven plakken. Naarmate het koken vordert, droogt het oppervlak uit en vormt zich bark, wat een barrière creëert die rookhechting voorkomt. Bovendien stopt rook ring vorming zodra vlees 60°C overschrijdt. Daarom voegt continue zware rook na de eerste uren weinig smaak toe en kan bitterheid veroorzaken."
        }
      },
      {
        question: {
          en: "What chemical process causes sugar in BBQ rubs to caramelize?",
          es: "¿Qué proceso químico causa que el azúcar en los condimentos BBQ se caramelice?",
          de: "Welcher chemische Prozess verursacht die Karamellisierung von Zucker in BBQ-Rubs?",
          nl: "Welk chemisch proces veroorzaakt karamelisatie van suiker in BBQ-rubs?"
        },
        options: [
          { en: "Thermal decomposition of sugars at 320-360°F creates hundreds of flavor compounds", es: "La descomposición térmica de azúcares a 320-360°F crea cientos de compuestos de sabor", de: "Thermische Zersetzung von Zuckern bei 160-182°C erzeugt Hunderte von Aromaverbindungen", nl: "Thermische afbraak van suikers bij 160-182°C creëert honderden smaakverbindingen" },
          { en: "Sugar combines with oxygen to form carbon dioxide", es: "El azúcar se combina con oxígeno para formar dióxido de carbono", de: "Zucker verbindet sich mit Sauerstoff zu Kohlendioxid", nl: "Suiker combineert met zuurstof om kooldioxide te vormen" },
          { en: "Water evaporation from sugar crystals", es: "Evaporación de agua de cristales de azúcar", de: "Wasserverdunstung aus Zuckerkristallen", nl: "Waterverdamping uit suikerkristallen" },
          { en: "Fermentation of sugar by bacteria", es: "Fermentación de azúcar por bacterias", de: "Fermentation von Zucker durch Bakterien", nl: "Fermentatie van suiker door bacteriën" }
        ],
        correct: 0,
        explanation: {
          en: "Caramelization is the thermal decomposition (pyrolysis) of sugars starting around 320°F, where sugar molecules break down and recombine into hundreds of compounds including diacetyl, furans, and maltol. This creates complex sweet, nutty, bitter flavors and brown color. It's distinct from the Maillard reaction (requires amino acids). Both occur in BBQ bark, contributing to its complexity.",
          es: "La caramelización es la descomposición térmica (pirólisis) de azúcares comenzando alrededor de 320°F, donde las moléculas de azúcar se descomponen y recombinan en cientos de compuestos incluyendo diacetilo, furanos y maltol. Esto crea sabores complejos dulces, a nuez, amargos y color marrón. Es distinto de la reacción de Maillard (requiere aminoácidos). Ambos ocurren en la corteza BBQ, contribuyendo a su complejidad.",
          de: "Karamellisierung ist die thermische Zersetzung (Pyrolyse) von Zuckern ab etwa 160°C, wo Zuckermoleküle zerfallen und sich zu Hunderten von Verbindungen wie Diacetyl, Furanen und Maltol rekombinieren. Dies erzeugt komplexe süße, nussige, bittere Aromen und braune Farbe. Es ist verschieden von der Maillard-Reaktion (erfordert Aminosäuren). Beide treten in BBQ-Bark auf und tragen zu ihrer Komplexität bei.",
          nl: "Karamelisatie is de thermische afbraak (pyrolyse) van suikers beginnend rond 160°C, waar suikermoleculen afbreken en recombineren in honderden verbindingen inclusief diacetyl, furanen en maltol. Dit creëert complexe zoete, nootachtige, bittere smaken en bruine kleur. Het verschilt van de Maillard reactie (vereist aminozuren). Beide komen voor in BBQ bark, dragen bij aan de complexiteit."
        }
      },
      {
        question: {
          en: "How does resting meat affect juice redistribution at a cellular level?",
          es: "¿Cómo afecta el reposo de la carne a la redistribución de jugos a nivel celular?",
          de: "Wie beeinflusst das Ruhen von Fleisch die Saftverteilung auf zellulärer Ebene?",
          nl: "Hoe beïnvloedt het rusten van vlees de sapverdeling op cellulair niveau?"
        },
        options: [
          { en: "Muscle fibers relax and proteins reabsorb moisture expelled during cooking", es: "Las fibras musculares se relajan y las proteínas reabsorben la humedad expulsada durante la cocción", de: "Muskelfasern entspannen sich und Proteine absorbieren während des Kochens ausgestoßene Feuchtigkeit wieder", nl: "Spiervezels ontspannen en eiwitten absorberen vocht dat tijdens het koken is uitgedreven" },
          { en: "New moisture is created from fat breakdown", es: "Nueva humedad se crea a partir de la descomposición de grasa", de: "Neue Feuchtigkeit wird aus Fettabbau erzeugt", nl: "Nieuw vocht wordt gecreëerd uit vetafbraak" },
          { en: "Cells divide and multiply during resting", es: "Las células se dividen y multiplican durante el reposo", de: "Zellen teilen und vermehren sich während des Ruhens", nl: "Cellen delen en vermenigvuldigen tijdens het rusten" },
          { en: "Blood returns to the meat tissue", es: "La sangre regresa al tejido de la carne", de: "Blut kehrt zum Fleischgewebe zurück", nl: "Bloed keert terug naar het vleesweefsel" }
        ],
        correct: 0,
        explanation: {
          en: "During cooking, heat causes muscle proteins (actin and myosin) to contract tightly, squeezing moisture toward the meat's center and surface. During resting, as meat cools slightly, these proteins relax and regain some ability to hold water. Juices redistribute more evenly throughout the tissue instead of pooling in the center, resulting in moister, more uniformly juicy meat when sliced.",
          es: "Durante la cocción, el calor hace que las proteínas musculares (actina y miosina) se contraigan fuertemente, exprimiendo humedad hacia el centro y superficie de la carne. Durante el reposo, a medida que la carne se enfría ligeramente, estas proteínas se relajan y recuperan cierta capacidad para retener agua. Los jugos se redistribuyen más uniformemente por todo el tejido en lugar de acumularse en el centro, resultando en carne más húmeda y uniformemente jugosa cuando se corta.",
          de: "Während des Kochens führt Hitze dazu, dass Muskelproteine (Aktin und Myosin) sich fest zusammenziehen und Feuchtigkeit in Richtung Fleischmitte und -oberfläche pressen. Während des Ruhens, wenn Fleisch leicht abkühlt, entspannen sich diese Proteine und erlangen etwas Fähigkeit zurück, Wasser zu halten. Säfte verteilen sich gleichmäßiger im ganzen Gewebe, anstatt sich in der Mitte zu sammeln, was zu saftigerem, gleichmäßig saftigem Fleisch beim Schneiden führt.",
          nl: "Tijdens het koken zorgt hitte ervoor dat spiereiwitten (actine en myosine) strak samentrekken, waarbij vocht naar het centrum en oppervlak van het vlees wordt geperst. Tijdens het rusten, wanneer vlees licht afkoelt, ontspannen deze eiwitten en herkrijgen ze enig vermogen om water vast te houden. Sappen herverdelen zich gelijkmatiger door het weefsel in plaats van zich in het centrum te verzamelen, resulterend in sappiger, gelijkmatiger sappig vlees wanneer gesneden."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
