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
      },
      {
        question: {
          en: "What is the role of phosphates in commercial meat injections?",
          es: "¿Cuál es el papel de los fosfatos en las inyecciones de carne comerciales?",
          de: "Was ist die Rolle von Phosphaten in kommerziellen Fleischinjektionen?",
          nl: "Wat is de rol van fosfaten in commerciële vlees injecties?"
        },
        options: [
          { en: "Increase pH to improve water-holding capacity and prevent moisture loss", es: "Aumentan el pH para mejorar la capacidad de retención de agua y prevenir pérdida de humedad", de: "Erhöhen pH-Wert zur Verbesserung der Wasserhaltungskapazität und Verhinderung von Feuchtigkeitsverlust", nl: "Verhogen pH om waterbindend vermogen te verbeteren en vochtverlies te voorkomen" },
          { en: "Add flavor through enzymatic breakdown", es: "Añaden sabor a través de descomposición enzimática", de: "Fügen Geschmack durch enzymatischen Abbau hinzu", nl: "Voegen smaak toe via enzymatische afbraak" },
          { en: "Kill bacteria on meat surface", es: "Matan bacterias en la superficie de la carne", de: "Töten Bakterien auf Fleischoberfläche", nl: "Doden bacteriën op vleeoppervlak" },
          { en: "Create smoke ring artificially", es: "Crean anillo de humo artificialmente", de: "Erzeugen Rauchring künstlich", nl: "Creëren rook ring kunstmatig" }
        ],
        correct: 0,
        explanation: {
          en: "Sodium phosphate and other phosphates raise meat's pH from ~5.5 toward neutral (6.0-6.5), moving it away from the isoelectric point where proteins hold water poorly. This increases water-binding capacity significantly, helping injected moisture stay in the meat during cooking. Commercial pork producers use this extensively; competition BBQ teams use it in injections for moisture retention.",
          es: "El fosfato de sodio y otros fosfatos elevan el pH de la carne de ~5.5 hacia neutro (6.0-6.5), alejándolo del punto isoeléctrico donde las proteínas retienen agua pobremente. Esto aumenta significativamente la capacidad de unión de agua, ayudando a que la humedad inyectada permanezca en la carne durante la cocción. Los productores comerciales de cerdo usan esto extensamente; los equipos de BBQ de competencia lo usan en inyecciones para retención de humedad.",
          de: "Natriumphosphat und andere Phosphate erhöhen den pH-Wert von Fleisch von ~5.5 in Richtung neutral (6.0-6.5) und bewegen ihn vom isoelektrischen Punkt weg, wo Proteine Wasser schlecht halten. Dies erhöht die Wasserbindungskapazität erheblich und hilft, injizierte Feuchtigkeit während des Kochens im Fleisch zu halten. Kommerzielle Schweineproduzenten verwenden dies ausgiebig; Wettbewerbs-BBQ-Teams verwenden es in Injektionen zur Feuchtigkeitsspeicherung.",
          nl: "Natriumfosfaat en andere fosfaten verhogen de pH van vlees van ~5.5 naar neutraal (6.0-6.5), waarbij het van het isoelektrisch punt wordt verplaatst waar eiwitten water slecht vasthouden. Dit verhoogt de waterbinding aanzienlijk, helpt geïnjecteerd vocht in het vlees te blijven tijdens het koken. Commerciële varkensproducenten gebruiken dit uitgebreid; wedstrijd-BBQ teams gebruiken het in injecties voor vochtbehoud."
        }
      },
      {
        question: {
          en: "Why does meat 'sweat' during the stall phase of smoking?",
          es: "¿Por qué 'suda' la carne durante la fase de estancamiento del ahumado?",
          de: "Warum 'schwitzt' Fleisch während der Stall-Phase des Räucherns?",
          nl: "Waarom 'zweet' vlees tijdens de stall fase van het roken?"
        },
        options: [
          { en: "Heat-induced moisture migration from interior to surface where it evaporates, cooling meat", es: "Migración de humedad inducida por calor del interior a la superficie donde se evapora, enfriando la carne", de: "Hitzeinduzierte Feuchtigkeitswanderung vom Inneren zur Oberfläche, wo sie verdunstet und Fleisch kühlt", nl: "Door hitte geïnduceerde vocht migratie van binnenin naar oppervlak waar het verdampt, koelt vlees" },
          { en: "Fat melting and dripping out of meat", es: "Grasa derritiéndose y goteando fuera de la carne", de: "Fett schmilzt und tropft aus Fleisch", nl: "Vet smelt en druipt uit vlees" },
          { en: "Collagen dissolving into liquid", es: "Colágeno disolviéndose en líquido", de: "Kollagen löst sich in Flüssigkeit auf", nl: "Collageen lost op in vloeistof" },
          { en: "Brine from injection leaking out", es: "Salmuera de inyección filtrándose", de: "Lake aus Injektion tritt aus", nl: "Pekel van injectie lekt eruit" }
        ],
        correct: 0,
        explanation: {
          en: "During the stall, heat drives moisture from the meat's cooler interior toward the hotter surface. This moisture accumulates on the surface and evaporates, creating evaporative cooling similar to human sweating. The evaporation requires energy (heat), which it takes from the meat, preventing temperature rise. Wrapping stops evaporation, allowing temperature to climb past the stall.",
          es: "Durante el estancamiento, el calor impulsa la humedad del interior más frío de la carne hacia la superficie más caliente. Esta humedad se acumula en la superficie y se evapora, creando enfriamiento evaporativo similar al sudor humano. La evaporación requiere energía (calor), que toma de la carne, previniendo el aumento de temperatura. Envolver detiene la evaporación, permitiendo que la temperatura supere el estancamiento.",
          de: "Während des Stalls treibt Hitze Feuchtigkeit vom kühleren Inneren des Fleisches zur heißeren Oberfläche. Diese Feuchtigkeit sammelt sich auf der Oberfläche und verdunstet, wodurch Verdunstungskühlung ähnlich wie beim menschlichen Schwitzen entsteht. Die Verdunstung erfordert Energie (Hitze), die sie vom Fleisch nimmt und den Temperaturanstieg verhindert. Einwickeln stoppt die Verdunstung und ermöglicht, dass die Temperatur über den Stall steigt.",
          nl: "Tijdens de stall drijft warmte vocht van het koelere binnenste van het vlees naar het hetere oppervlak. Dit vocht verzamelt zich op het oppervlak en verdampt, waardoor verdampingskoeling ontstaat vergelijkbaar met menselijk zweten. De verdamping vereist energie (warmte), die het van het vlees neemt, waardoor temperatuurstijging wordt voorkomen. Inwikkelen stopt verdamping, waardoor de temperatuur voorbij de stall kan klimmen."
        }
      },
      {
        question: {
          en: "What causes 'hot spots' in offset smokers and how does heat transfer explain them?",
          es: "¿Qué causa 'puntos calientes' en ahumadores offset y cómo la transferencia de calor los explica?",
          de: "Was verursacht 'heiße Stellen' in Offset-Smokern und wie erklärt Wärmeübertragung sie?",
          nl: "Wat veroorzaakt 'hot spots' in offset smokers en hoe verklaart warmteoverdracht ze?"
        },
        options: [
          { en: "Uneven convection currents and radiant heat create temperature zones, hottest near firebox", es: "Corrientes de convección desiguales y calor radiante crean zonas de temperatura, más caliente cerca de la caja de fuego", de: "Ungleichmäßige Konvektionsströmungen und Strahlungswärme erzeugen Temperaturzonen, am heißesten in Feuerboxnähe", nl: "Ongelijke convectie stromingen en stralende warmte creëren temperatuurzones, heetst bij firebox" },
          { en: "Metal thickness varies across the cooking chamber", es: "El grosor del metal varía a través de la cámara de cocción", de: "Metalldicke variiert über die Kochkammer", nl: "Metaaldikte varieert over de kookkamer" },
          { en: "Smoke concentration differences", es: "Diferencias de concentración de humo", de: "Rauchkonzentrationsunterschiede", nl: "Rook concentratie verschillen" },
          { en: "Moisture distribution in the meat", es: "Distribución de humedad en la carne", de: "Feuchtigkeitsverteilung im Fleisch", nl: "Vocht verdeling in het vlees" }
        ],
        correct: 0,
        explanation: {
          en: "Offset smokers have hot spots due to heat transfer physics: (1) Convection - hot air/smoke enters from firebox and rises, creating temperature gradient, (2) Radiation - firebox wall radiates intense heat to nearby meat, (3) Areas closer to firebox receive more direct heat. Understanding these zones lets pitmasters position different meats strategically and rotate for even cooking.",
          es: "Los ahumadores offset tienen puntos calientes debido a la física de transferencia de calor: (1) Convección - aire/humo caliente entra de la caja de fuego y sube, creando gradiente de temperatura, (2) Radiación - pared de caja de fuego irradia calor intenso a carne cercana, (3) Áreas más cercanas a la caja de fuego reciben más calor directo. Entender estas zonas permite a los pitmasters posicionar diferentes carnes estratégicamente y rotar para cocción uniforme.",
          de: "Offset-Smoker haben heiße Stellen aufgrund der Wärmeübertragungsphysik: (1) Konvektion - heiße Luft/Rauch tritt von Feuerbox ein und steigt, erzeugt Temperaturgradient, (2) Strahlung - Feuerbox-Wand strahlt intensive Hitze zu nahem Fleisch, (3) Bereiche näher an Feuerbox erhalten mehr direkte Hitze. Das Verständnis dieser Zonen ermöglicht Pitmasters, verschiedene Fleischsorten strategisch zu positionieren und für gleichmäßiges Garen zu rotieren.",
          nl: "Offset smokers hebben hot spots door warmteoverdracht fysica: (1) Convectie - hete lucht/rook komt binnen van firebox en stijgt, creëert temperatuurgradiënt, (2) Straling - firebox wand straalt intense warmte naar nabij vlees, (3) Gebieden dichter bij firebox ontvangen meer directe warmte. Het begrijpen van deze zones laat pitmasters verschillende vlees soorten strategisch plaatsen en roteren voor gelijkmatig koken."
        }
      },
      {
        question: {
          en: "How do wood lignin compounds contribute to smoke flavor?",
          es: "¿Cómo contribuyen los compuestos de lignina de madera al sabor del humo?",
          de: "Wie tragen Holzligninverbindungen zum Rauchgeschmack bei?",
          nl: "Hoe dragen hout lignine verbindingen bij aan rooksmaak?"
        },
        options: [
          { en: "Lignin breaks down into phenolic compounds (syringol, guaiacol) providing smoky, vanilla, spicy notes", es: "La lignina se descompone en compuestos fenólicos (siringol, guaiacol) proporcionando notas ahumadas, vainilla, picantes", de: "Lignin zerfällt in phenolische Verbindungen (Syringol, Guaiacol), die rauchige, Vanille-, würzige Noten liefern", nl: "Lignine breekt af in fenolische verbindingen (syringol, guaiacol) die rokerige, vanille, pittige tonen leveren" },
          { en: "Lignin creates the smoke ring through nitrogen compounds", es: "La lignina crea el anillo de humo a través de compuestos de nitrógeno", de: "Lignin erzeugt den Rauchring durch Stickstoffverbindungen", nl: "Lignine creëert de rook ring via stikstofverbindingen" },
          { en: "Lignin provides only the brown color, no flavor", es: "La lignina solo proporciona el color marrón, sin sabor", de: "Lignin liefert nur die braune Farbe, keinen Geschmack", nl: "Lignine levert alleen de bruine kleur, geen smaak" },
          { en: "Lignin breaks down into simple sugars", es: "La lignina se descompone en azúcares simples", de: "Lignin zerfällt in einfache Zucker", nl: "Lignine breekt af in eenvoudige suikers" }
        ],
        correct: 0,
        explanation: {
          en: "Lignin, a complex polymer in wood cell walls, decomposes during combustion into phenolic compounds like guaiacol (smoky, spicy), syringol (woody, sweet), and vanillin (vanilla notes). Hardwoods have more syringol; softwoods more guaiacol. These compounds adhere to meat and provide the characteristic BBQ smoke flavor. Different woods have different lignin compositions, explaining flavor variations between oak, hickory, fruitwoods.",
          es: "La lignina, un polímero complejo en las paredes celulares de la madera, se descompone durante la combustión en compuestos fenólicos como guaiacol (ahumado, picante), siringol (maderoso, dulce) y vainillina (notas de vainilla). Las maderas duras tienen más siringol; las maderas blandas más guaiacol. Estos compuestos se adhieren a la carne y proporcionan el sabor característico a humo BBQ. Diferentes maderas tienen diferentes composiciones de lignina, explicando las variaciones de sabor entre roble, nogal, maderas frutales.",
          de: "Lignin, ein komplexes Polymer in Holzzellwänden, zersetzt sich während der Verbrennung in phenolische Verbindungen wie Guaiacol (rauchig, würzig), Syringol (holzig, süß) und Vanillin (Vanillenoten). Harthölzer haben mehr Syringol; Weichhölzer mehr Guaiacol. Diese Verbindungen haften am Fleisch und liefern den charakteristischen BBQ-Rauchgeschmack. Verschiedene Hölzer haben unterschiedliche Ligninzusammensetzungen, was Geschmacksvariationen zwischen Eiche, Hickory, Obsthölzern erklärt.",
          nl: "Lignine, een complex polymeer in hout celwanden, breekt af tijdens verbranding in fenolische verbindingen zoals guaiacol (rokerig, pittig), syringol (houtig, zoet) en vanilline (vanille tonen). Hardhout heeft meer syringol; zachthout meer guaiacol. Deze verbindingen hechten aan vlees en leveren de karakteristieke BBQ rooksmaak. Verschillende houtsoorten hebben verschillende lignine samenstellingen, wat smaakvariaties verklaart tussen eik, hickory, fruitbomen."
        }
      },
      {
        question: {
          en: "What is the relationship between myoglobin concentration and meat color?",
          es: "¿Cuál es la relación entre la concentración de mioglobina y el color de la carne?",
          de: "Was ist die Beziehung zwischen Myoglobinkonzentration und Fleischfarbe?",
          nl: "Wat is de relatie tussen myoglobine concentratie en vleeskleur?"
        },
        options: [
          { en: "Higher myoglobin concentration creates darker red meat; varies by animal age, muscle use, and species", es: "Mayor concentración de mioglobina crea carne roja más oscura; varía por edad del animal, uso muscular y especie", de: "Höhere Myoglobinkonzentration erzeugt dunkleres rotes Fleisch; variiert nach Tieralter, Muskelnutzung und Art", nl: "Hogere myoglobine concentratie creëert donkerder rood vlees; varieert per dierleeftijd, spiergebruik en soort" },
          { en: "Myoglobin concentration is identical in all meat types", es: "La concentración de mioglobina es idéntica en todos los tipos de carne", de: "Myoglobinkonzentration ist in allen Fleischsorten identisch", nl: "Myoglobine concentratie is identiek in alle vleessoorten" },
          { en: "Only blood hemoglobin determines meat color", es: "Solo la hemoglobina de la sangre determina el color de la carne", de: "Nur Bluthämoglobin bestimmt die Fleischfarbe", nl: "Alleen bloedhemoglobine bepaalt vleeskleur" },
          { en: "Fat content determines meat redness", es: "El contenido de grasa determina el enrojecimiento de la carne", de: "Fettgehalt bestimmt Fleischrötung", nl: "Vetgehalte bepaalt vlees roodheid" }
        ],
        correct: 0,
        explanation: {
          en: "Myoglobin is the iron-containing protein that stores oxygen in muscle cells and determines meat color. More active muscles and older animals have higher myoglobin concentrations, creating darker meat. Beef has ~8mg/g (dark red), pork ~2mg/g (pink), chicken breast ~0.2mg/g (pale). Duck and game birds have much higher myoglobin. Myoglobin's chemical state (oxymyoglobin=bright red, metmyoglobin=brown, deoxymyoglobin=purple) also affects color.",
          es: "La mioglobina es la proteína que contiene hierro que almacena oxígeno en las células musculares y determina el color de la carne. Los músculos más activos y los animales más viejos tienen mayores concentraciones de mioglobina, creando carne más oscura. La res tiene ~8mg/g (rojo oscuro), el cerdo ~2mg/g (rosado), la pechuga de pollo ~0.2mg/g (pálido). El pato y las aves de caza tienen mucha más mioglobina. El estado químico de la mioglobina (oximioglobina=rojo brillante, metamioglobina=marrón, desoximioglobina=púrpura) también afecta el color.",
          de: "Myoglobin ist das eisenhaltige Protein, das Sauerstoff in Muskelzellen speichert und die Fleischfarbe bestimmt. Aktivere Muskeln und ältere Tiere haben höhere Myoglobinkonzentrationen, was dunkleres Fleisch erzeugt. Rindfleisch hat ~8mg/g (dunkelrot), Schwein ~2mg/g (rosa), Hähnchenbrust ~0.2mg/g (blass). Ente und Wildvögel haben viel höheres Myoglobin. Der chemische Zustand von Myoglobin (Oxymyoglobin=hellrot, Metmyoglobin=braun, Deoxymyoglobin=lila) beeinflusst auch die Farbe.",
          nl: "Myoglobine is het ijzerhoudende eiwit dat zuurstof opslaat in spiercellen en vleeskleur bepaalt. Actievere spieren en oudere dieren hebben hogere myoglobine concentraties, waardoor donkerder vlees ontstaat. Rundvlees heeft ~8mg/g (donkerrood), varken ~2mg/g (roze), kippenborst ~0.2mg/g (bleek). Eend en wild gevogelte hebben veel hoger myoglobine. De chemische toestand van myoglobine (oxymyoglobine=helderrood, metmyoglobine=bruin, deoxymyoglobine=paars) beïnvloedt ook kleur."
        }
      },
      {
        question: {
          en: "Why does wrapping meat in foil (Texas Crutch) speed cooking but soften bark?",
          es: "¿Por qué envolver carne en papel aluminio (Texas Crutch) acelera la cocción pero suaviza la corteza?",
          de: "Warum beschleunigt Einwickeln von Fleisch in Folie (Texas Crutch) das Kochen, macht aber Bark weicher?",
          nl: "Waarom versnelt het inwikkelen van vlees in folie (Texas Crutch) het koken maar verzacht het bark?"
        },
        options: [
          { en: "Traps moisture stopping evaporative cooling, but steam softens crispy bark surface", es: "Atrapa humedad deteniendo enfriamiento evaporativo, pero vapor suaviza superficie de corteza crujiente", de: "Fängt Feuchtigkeit ein, stoppt Verdunstungskühlung, aber Dampf macht knusprige Bark-Oberfläche weicher", nl: "Vangt vocht op stopt verdampingskoeling, maar stoom verzacht knapperig bark oppervlak" },
          { en: "Foil conducts heat faster than air", es: "El papel aluminio conduce calor más rápido que el aire", de: "Folie leitet Wärme schneller als Luft", nl: "Folie geleidt warmte sneller dan lucht" },
          { en: "Creates acidic environment that breaks down meat faster", es: "Crea ambiente ácido que descompone la carne más rápido", de: "Erzeugt saure Umgebung, die Fleisch schneller abbaut", nl: "Creëert zure omgeving die vlees sneller afbreekt" },
          { en: "Reflects infrared radiation back onto meat", es: "Refleja radiación infrarroja de vuelta a la carne", de: "Reflektiert Infrarotstrahlung zurück auf Fleisch", nl: "Reflecteert infrarode straling terug op vlees" }
        ],
        correct: 0,
        explanation: {
          en: "Wrapping in foil eliminates evaporative cooling by trapping moisture, allowing internal temperature to rise past the stall quickly. However, the trapped moisture/steam prevents bark from staying dry and crispy, softening it. Butcher paper is a compromise - breathable enough to maintain some bark, but still reduces evaporation. Many pitmasters unwrap for the last hour to re-crisp bark.",
          es: "Envolver en papel aluminio elimina el enfriamiento evaporativo al atrapar humedad, permitiendo que la temperatura interna suba más allá del estancamiento rápidamente. Sin embargo, la humedad/vapor atrapado evita que la corteza permanezca seca y crujiente, suavizándola. El papel de carnicero es un compromiso - lo suficientemente transpirable para mantener algo de corteza, pero aún reduce la evaporación. Muchos pitmasters desenvuelven durante la última hora para re-crujir la corteza.",
          de: "Einwickeln in Folie eliminiert Verdunstungskühlung durch Einfangen von Feuchtigkeit, wodurch die Innentemperatur schnell über den Stall steigen kann. Die eingeschlossene Feuchtigkeit/Dampf verhindert jedoch, dass Bark trocken und knusprig bleibt, macht sie weicher. Metzgerpapier ist ein Kompromiss - atmungsaktiv genug, um etwas Bark zu erhalten, reduziert aber dennoch Verdunstung. Viele Pitmasters wickeln für die letzte Stunde aus, um Bark wieder knusprig zu machen.",
          nl: "Inwikkelen in folie elimineert verdampingskoeling door vocht op te vangen, waardoor interne temperatuur snel voorbij de stall kan stijgen. Het opgesloten vocht/stoom voorkomt echter dat bark droog en knapperig blijft, verzacht het. Slagerspapier is een compromis - ademend genoeg om wat bark te behouden, maar reduceert nog steeds verdamping. Veel pitmasters pakken het laatste uur uit om bark weer knapperig te maken."
        }
      },
      {
        question: {
          en: "What chemical process occurs during meat aging and how does it tenderize?",
          es: "¿Qué proceso químico ocurre durante el envejecimiento de la carne y cómo ablanda?",
          de: "Welcher chemische Prozess tritt während der Fleischalterung auf und wie macht er zart?",
          nl: "Welk chemisch proces vindt plaats tijdens vlees rijping en hoe maakt het mals?"
        },
        options: [
          { en: "Endogenous enzymes (calpains, cathepsins) break down muscle fiber proteins over time", es: "Enzimas endógenas (calpaínas, catepsinas) descomponen proteínas de fibra muscular con el tiempo", de: "Endogene Enzyme (Calpaine, Cathepsine) bauen Muskelfaserproteine im Laufe der Zeit ab", nl: "Endogene enzymen (calpaïnen, cathepsinen) breken spiervezel eiwitten af in de loop van tijd" },
          { en: "Bacteria digest the meat externally", es: "Las bacterias digieren la carne externamente", de: "Bakterien verdauen das Fleisch extern", nl: "Bacteriën verteren het vlees extern" },
          { en: "Oxidation hardens meat fibers", es: "La oxidación endurece las fibras de la carne", de: "Oxidation härtet Fleischfasern", nl: "Oxidatie verhardt vleesvezels" },
          { en: "Water content increases through osmosis", es: "El contenido de agua aumenta a través de ósmosis", de: "Wassergehalt steigt durch Osmose", nl: "Watergehalte stijgt door osmose" }
        ],
        correct: 0,
        explanation: {
          en: "Dry and wet aging work through enzymatic autolysis - the meat's own enzymes (primarily calpains and cathepsins) gradually break down muscle proteins and connective tissue after slaughter. This proteolysis weakens muscle structure, tenderizing meat and developing deeper flavors. Dry aging also dehydrates meat, concentrating flavors. Aging is most effective at 34-38°F; too warm causes spoilage, too cold slows enzymes.",
          es: "El envejecimiento en seco y húmedo funciona a través de autólisis enzimática - las propias enzimas de la carne (principalmente calpaínas y catepsinas) descomponen gradualmente las proteínas musculares y tejido conectivo después del sacrificio. Esta proteólisis debilita la estructura muscular, ablandando la carne y desarrollando sabores más profundos. El envejecimiento en seco también deshidrata la carne, concentrando sabores. El envejecimiento es más efectivo a 34-38°F; demasiado caliente causa deterioro, demasiado frío ralentiza las enzimas.",
          de: "Trocken- und Nassalterung funktionieren durch enzymatische Autolyse - die eigenen Enzyme des Fleisches (hauptsächlich Calpaine und Cathepsine) bauen nach der Schlachtung allmählich Muskelproteine und Bindegewebe ab. Diese Proteolyse schwächt die Muskelstruktur, macht Fleisch zart und entwickelt tiefere Aromen. Trockenalterung dehydriert auch Fleisch, konzentriert Aromen. Alterung ist am effektivsten bei 1-3°C; zu warm verursacht Verderb, zu kalt verlangsamt Enzyme.",
          nl: "Droge en natte rijping werken via enzymatische autolyse - de eigen enzymen van het vlees (voornamelijk calpaïnen en cathepsinen) breken geleidelijk spiereiwitten en bindweefsel af na slachten. Deze proteolyse verzwakt spierstructuur, maakt vlees mals en ontwikkelt diepere smaken. Droge rijping dehydreert ook vlees, concentreert smaken. Rijping is meest effectief bij 1-3°C; te warm veroorzaakt bederf, te koud vertraagt enzymen."
        }
      },
      {
        question: {
          en: "How does acidic marinade (vinegar, citrus) affect meat texture chemically?",
          es: "¿Cómo afecta químicamente la marinada ácida (vinagre, cítricos) la textura de la carne?",
          de: "Wie beeinflusst saure Marinade (Essig, Zitrus) die Fleischtextur chemisch?",
          nl: "Hoe beïnvloedt zure marinade (azijn, citrus) vlees textuur chemisch?"
        },
        options: [
          { en: "Denatures surface proteins initially tenderizing, but extended exposure causes mushy texture", es: "Desnaturaliza proteínas superficiales inicialmente ablandando, pero exposición prolongada causa textura blanda", de: "Denaturiert Oberflächenproteine zunächst zart machend, aber längere Exposition verursacht matschige Textur", nl: "Denatureert oppervlakte eiwitten aanvankelijk malsend, maar langdurige blootstelling veroorzaakt zachte textuur" },
          { en: "Acid only adds flavor without affecting texture", es: "El ácido solo añade sabor sin afectar la textura", de: "Säure fügt nur Geschmack hinzu ohne Textur zu beeinflussen", nl: "Zuur voegt alleen smaak toe zonder textuur te beïnvloeden" },
          { en: "Permanently toughens meat at any duration", es: "Endurece permanentemente la carne en cualquier duración", de: "Härtet Fleisch dauerhaft bei jeder Dauer", nl: "Verhardt vlees permanent bij elke duur" },
          { en: "Increases water retention indefinitely", es: "Aumenta la retención de agua indefinidamente", de: "Erhöht Wasserretention unbegrenzt", nl: "Verhoogt waterbehoud onbeperkt" }
        ],
        correct: 0,
        explanation: {
          en: "Acids (pH 3-4) denature surface proteins, initially breaking some bonds and tenderizing the outer layer. However, acid penetration is limited and prolonged exposure (over 2-4 hours) causes proteins to bond tightly, squeezing out moisture and creating mushy, ceviche-like texture. Salt is better for tenderizing; use acid marinades briefly for flavor or choose enzymatic tenderizers instead.",
          es: "Los ácidos (pH 3-4) desnaturalizan proteínas superficiales, inicialmente rompiendo algunos enlaces y ablandando la capa exterior. Sin embargo, la penetración de ácido es limitada y la exposición prolongada (más de 2-4 horas) causa que las proteínas se unan firmemente, exprimiendo humedad y creando textura blanda, similar al ceviche. La sal es mejor para ablandar; use marinadas ácidas brevemente para sabor o elija ablandadores enzimáticos en su lugar.",
          de: "Säuren (pH 3-4) denaturieren Oberflächenproteine, brechen zunächst einige Bindungen und machen die äußere Schicht zart. Die Säurepenetration ist jedoch begrenzt und längere Exposition (über 2-4 Stunden) führt dazu, dass Proteine sich fest verbinden, Feuchtigkeit auspressen und eine matschige, ceviche-ähnliche Textur erzeugen. Salz ist besser zum Zartmachen; verwenden Sie saure Marinaden kurz für Geschmack oder wählen Sie stattdessen enzymatische Zartmacher.",
          nl: "Zuren (pH 3-4) denatureren oppervlakte eiwitten, breken aanvankelijk enkele bindingen en maken de buitenlaag mals. Zuurpenetratie is echter beperkt en langdurige blootstelling (meer dan 2-4 uur) zorgt ervoor dat eiwitten stevig binden, vocht uitpersen en zachte, ceviche-achtige textuur creëren. Zout is beter voor malsen; gebruik zure marinades kort voor smaak of kies in plaats daarvan enzymatische malsers."
        }
      },
      {
        question: {
          en: "What is the role of glucose and fructose in BBQ rubs regarding browning?",
          es: "¿Cuál es el papel de la glucosa y fructosa en los condimentos BBQ respecto al dorado?",
          de: "Was ist die Rolle von Glukose und Fruktose in BBQ-Rubs bezüglich Bräunung?",
          nl: "Wat is de rol van glucose en fructose in BBQ-rubs met betrekking tot bruining?"
        },
        options: [
          { en: "They are reducing sugars essential for Maillard reaction, fructose browns faster than glucose", es: "Son azúcares reductores esenciales para la reacción de Maillard, la fructosa se dora más rápido que la glucosa", de: "Sie sind reduzierende Zucker, essentiell für Maillard-Reaktion, Fruktose bräunt schneller als Glukose", nl: "Het zijn reducerende suikers essentieel voor Maillard reactie, fructose bruint sneller dan glucose" },
          { en: "Only sucrose (table sugar) can participate in browning", es: "Solo la sacarosa (azúcar de mesa) puede participar en el dorado", de: "Nur Saccharose (Haushaltszucker) kann an Bräunung teilnehmen", nl: "Alleen sucrose (tafelsuiker) kan deelnemen aan bruining" },
          { en: "They prevent browning by blocking protein reactions", es: "Previenen el dorado bloqueando reacciones de proteínas", de: "Sie verhindern Bräunung durch Blockierung von Proteinreaktionen", nl: "Ze voorkomen bruining door eiwit reacties te blokkeren" },
          { en: "They only provide sweetness without chemical reactions", es: "Solo proporcionan dulzura sin reacciones químicas", de: "Sie liefern nur Süße ohne chemische Reaktionen", nl: "Ze leveren alleen zoetheid zonder chemische reacties" }
        ],
        correct: 0,
        explanation: {
          en: "Glucose and fructose are 'reducing sugars' with free aldehyde/ketone groups that react with amino acids in the Maillard reaction. Fructose (ketose) browns significantly faster than glucose (aldose) at the same temperature. Sucrose must first break into glucose+fructose to participate. This is why honey (fructose-rich) and brown sugar create faster, darker bark than white sugar.",
          es: "La glucosa y fructosa son 'azúcares reductores' con grupos aldehído/cetona libres que reaccionan con aminoácidos en la reacción de Maillard. La fructosa (cetosa) se dora significativamente más rápido que la glucosa (aldosa) a la misma temperatura. La sacarosa debe primero descomponerse en glucosa+fructosa para participar. Por eso la miel (rica en fructosa) y el azúcar morena crean corteza más rápida y oscura que el azúcar blanca.",
          de: "Glukose und Fruktose sind 'reduzierende Zucker' mit freien Aldehyd-/Ketongruppen, die mit Aminosäuren in der Maillard-Reaktion reagieren. Fruktose (Ketose) bräunt bei gleicher Temperatur deutlich schneller als Glukose (Aldose). Saccharose muss zuerst in Glukose+Fruktose zerfallen, um teilzunehmen. Deshalb erzeugen Honig (fruktosereich) und brauner Zucker schnellere, dunklere Bark als weißer Zucker.",
          nl: "Glucose en fructose zijn 'reducerende suikers' met vrije aldehyde/keton groepen die reageren met aminozuren in de Maillard reactie. Fructose (ketose) bruint aanzienlijk sneller dan glucose (aldose) bij dezelfde temperatuur. Sucrose moet eerst afbreken in glucose+fructose om deel te nemen. Daarom creëren honing (fructose-rijk) en bruine suiker snellere, donkerdere bark dan witte suiker."
        }
      },
      {
        question: {
          en: "What causes the difference between 'clean' and 'dirty' smoke chemically?",
          es: "¿Qué causa la diferencia entre humo 'limpio' y 'sucio' químicamente?",
          de: "Was verursacht chemisch den Unterschied zwischen 'sauberem' und 'schmutzigem' Rauch?",
          nl: "Wat veroorzaakt chemisch het verschil tussen 'schone' en 'vuile' rook?"
        },
        options: [
          { en: "Complete combustion produces simple compounds (CO₂, H₂O, phenols), incomplete creates PAHs and creosote", es: "Combustión completa produce compuestos simples (CO₂, H₂O, fenoles), incompleta crea HAP y creosota", de: "Vollständige Verbrennung produziert einfache Verbindungen (CO₂, H₂O, Phenole), unvollständige erzeugt PAK und Kreosot", nl: "Volledige verbranding produceert eenvoudige verbindingen (CO₂, H₂O, fenolen), onvolledige creëert PAK's en creosoot" },
          { en: "Wood species determines smoke color exclusively", es: "La especie de madera determina exclusivamente el color del humo", de: "Holzart bestimmt ausschließlich Rauchfarbe", nl: "Houtsoort bepaalt uitsluitend rookkleur" },
          { en: "Temperature has no effect on smoke composition", es: "La temperatura no tiene efecto en la composición del humo", de: "Temperatur hat keine Auswirkung auf Rauchzusammensetzung", nl: "Temperatuur heeft geen effect op rook samenstelling" },
          { en: "Only moisture content affects smoke quality", es: "Solo el contenido de humedad afecta la calidad del humo", de: "Nur Feuchtigkeitsgehalt beeinflusst Rauchqualität", nl: "Alleen vochtgehalte beïnvloedt rook kwaliteit" }
        ],
        correct: 0,
        explanation: {
          en: "Clean 'thin blue' smoke results from complete combustion with adequate oxygen at proper temperature (500-750°F), producing primarily CO₂, water vapor, and desirable phenolic compounds. Dirty 'white/black' smoke from incomplete combustion creates polycyclic aromatic hydrocarbons (PAHs), creosote, and soot - bitter and potentially carcinogenic. Proper airflow management ensures complete combustion for good smoke flavor.",
          es: "El humo 'azul delgado' limpio resulta de combustión completa con oxígeno adecuado a temperatura apropiada (500-750°F), produciendo principalmente CO₂, vapor de agua y compuestos fenólicos deseables. El humo 'blanco/negro' sucio de combustión incompleta crea hidrocarburos aromáticos policíclicos (HAP), creosota y hollín - amargo y potencialmente cancerígeno. El manejo apropiado del flujo de aire asegura combustión completa para buen sabor a humo.",
          de: "Sauberer 'dünner blauer' Rauch resultiert aus vollständiger Verbrennung mit ausreichend Sauerstoff bei richtiger Temperatur (260-400°C), wobei hauptsächlich CO₂, Wasserdampf und wünschenswerte phenolische Verbindungen erzeugt werden. Schmutziger 'weißer/schwarzer' Rauch aus unvollständiger Verbrennung erzeugt polyzyklische aromatische Kohlenwasserstoffe (PAK), Kreosot und Ruß - bitter und potenziell krebserregend. Richtige Luftströmungsverwaltung gewährleistet vollständige Verbrennung für guten Rauchgeschmack.",
          nl: "Schone 'dunne blauwe' rook resulteert uit volledige verbranding met voldoende zuurstof bij juiste temperatuur (260-400°C), waarbij voornamelijk CO₂, waterdamp en gewenste fenolische verbindingen worden geproduceerd. Vuile 'witte/zwarte' rook van onvolledige verbranding creëert polycyclische aromatische koolwaterstoffen (PAK's), creosoot en roet - bitter en potentieel kankerverwekkend. Juist luchtstroommanagement zorgt voor volledige verbranding voor goede rooksmaak."
        }
      },
      {
        question: {
          en: "What thermodynamic principle explains why opening smoker lid causes temperature drop?",
          es: "¿Qué principio termodinámico explica por qué abrir la tapa del ahumador causa caída de temperatura?",
          de: "Welches thermodynamische Prinzip erklärt, warum das Öffnen des Smoker-Deckels einen Temperaturabfall verursacht?",
          nl: "Welk thermodynamisch principe verklaart waarom het openen van smoker deksel temperatuurdaling veroorzaakt?"
        },
        options: [
          { en: "Heat loss through convection (hot air escapes), radiation, and introduction of cool ambient air", es: "Pérdida de calor a través de convección (aire caliente escapa), radiación e introducción de aire ambiente frío", de: "Wärmeverlust durch Konvektion (heiße Luft entweicht), Strahlung und Einführung kühler Umgebungsluft", nl: "Warmteverlies door convectie (hete lucht ontsnapt), straling en introductie van koele omgevingslucht" },
          { en: "Chemical reaction stops when oxygen enters", es: "La reacción química se detiene cuando entra oxígeno", de: "Chemische Reaktion stoppt, wenn Sauerstoff eintritt", nl: "Chemische reactie stopt wanneer zuurstof binnenkomt" },
          { en: "Smoke particles absorb all heat energy", es: "Las partículas de humo absorben toda la energía térmica", de: "Rauchpartikel absorbieren alle Wärmeenergie", nl: "Rookdeeltjes absorberen alle warmte energie" },
          { en: "Meat releases cold air when exposed", es: "La carne libera aire frío cuando se expone", de: "Fleisch setzt kalte Luft frei, wenn es freigelegt wird", nl: "Vlees geeft koude lucht af wanneer blootgesteld" }
        ],
        correct: 0,
        explanation: {
          en: "Opening the lid causes rapid heat loss through: (1) Convection - hot air (less dense) rises and escapes, replaced by cool ambient air sinking in, (2) Radiation - heat radiates outward from hot surfaces, (3) Disrupted combustion from airflow change. The phrase 'if you're lookin', you ain't cookin'' reflects how each opening requires 10-15 minutes to restabilize temperature, extending cook time significantly.",
          es: "Abrir la tapa causa pérdida rápida de calor a través de: (1) Convección - aire caliente (menos denso) sube y escapa, reemplazado por aire ambiente frío que se hunde, (2) Radiación - el calor irradia hacia afuera de superficies calientes, (3) Combustión interrumpida por cambio de flujo de aire. La frase 'si estás mirando, no estás cocinando' refleja cómo cada apertura requiere 10-15 minutos para reestabilizar temperatura, extendiendo significativamente el tiempo de cocción.",
          de: "Das Öffnen des Deckels verursacht schnellen Wärmeverlust durch: (1) Konvektion - heiße Luft (weniger dicht) steigt und entweicht, wird durch kühle Umgebungsluft ersetzt, die sinkt, (2) Strahlung - Wärme strahlt von heißen Oberflächen nach außen, (3) Gestörte Verbrennung durch Luftströmungsänderung. Der Satz 'wenn du schaust, kochst du nicht' spiegelt wider, wie jedes Öffnen 10-15 Minuten zur Temperaturrestabilisierung benötigt, was die Kochzeit erheblich verlängert.",
          nl: "Het openen van het deksel veroorzaakt snel warmteverlies door: (1) Convectie - hete lucht (minder dicht) stijgt en ontsnapt, vervangen door koele omgevingslucht die zakt, (2) Straling - warmte straalt naar buiten van hete oppervlakken, (3) Verstoorde verbranding door luchtstroom verandering. De uitdrukking 'als je kijkt, kook je niet' weerspiegelt hoe elke opening 10-15 minuten nodig heeft om temperatuur te herstabiliseren, wat kooktijd aanzienlijk verlengt."
        }
      },
      {
        question: {
          en: "How does sous vide pre-cooking affect BBQ finish smoking scientifically?",
          es: "¿Cómo afecta científicamente la precocción sous vide al acabado de ahumado BBQ?",
          de: "Wie beeinflusst Sous-Vide-Vorkochen wissenschaftlich das BBQ-Finish-Räuchern?",
          nl: "Hoe beïnvloedt sous vide voorkoken wetenschappelijk BBQ afwerking roken?"
        },
        options: [
          { en: "Precisely controls collagen breakdown, then smoking adds flavor/bark without overcooking", es: "Controla precisamente la descomposición del colágeno, luego ahumar añade sabor/corteza sin sobrecocinar", de: "Kontrolliert präzise Kollagenabbau, dann fügt Räuchern Geschmack/Bark hinzu ohne Überkochen", nl: "Controleert nauwkeurig collageen afbraak, dan voegt roken smaak/bark toe zonder overkoken" },
          { en: "Eliminates need for any smoke exposure", es: "Elimina la necesidad de cualquier exposición al humo", de: "Eliminiert Bedarf an jeglicher Rauchexposition", nl: "Elimineert behoefte aan rook blootstelling" },
          { en: "Prevents Maillard reaction from occurring", es: "Previene que ocurra la reacción de Maillard", de: "Verhindert, dass Maillard-Reaktion auftritt", nl: "Voorkomt dat Maillard reactie optreedt" },
          { en: "Makes bark impossible to form", es: "Hace imposible formar corteza", de: "Macht Bark-Bildung unmöglich", nl: "Maakt bark vorming onmogelijk" }
        ],
        correct: 0,
        explanation: {
          en: "Sous vide allows precise temperature control (e.g., 165°F for 24 hours) to fully convert collagen to gelatin without risk of overcooking. The sealed environment retains moisture. Then finish smoking at higher heat develops Maillard reaction bark and smoke flavor in 1-2 hours without extended cook time. This separates tenderization (time+temperature) from flavor development (smoke+browning).",
          es: "Sous vide permite control de temperatura preciso (ej., 165°F por 24 horas) para convertir completamente colágeno en gelatina sin riesgo de sobrecocinar. El ambiente sellado retiene humedad. Luego terminar ahumando a calor más alto desarrolla corteza de reacción de Maillard y sabor a humo en 1-2 horas sin tiempo de cocción extendido. Esto separa el ablandamiento (tiempo+temperatura) del desarrollo de sabor (humo+dorado).",
          de: "Sous Vide ermöglicht präzise Temperaturkontrolle (z.B. 74°C für 24 Stunden), um Kollagen vollständig in Gelatine umzuwandeln ohne Überkochen-Risiko. Die versiegelte Umgebung hält Feuchtigkeit. Dann entwickelt Finish-Räuchern bei höherer Hitze Maillard-Reaktion-Bark und Rauchgeschmack in 1-2 Stunden ohne verlängerte Kochzeit. Dies trennt Zartmachen (Zeit+Temperatur) von Geschmacksentwicklung (Rauch+Bräunung).",
          nl: "Sous vide maakt nauwkeurige temperatuurcontrole mogelijk (bijv. 74°C voor 24 uur) om collageen volledig om te zetten in gelatine zonder risico van overkoken. De afgesloten omgeving behoudt vocht. Dan ontwikkelt afwerking roken bij hogere hitte Maillard reactie bark en rooksmaak in 1-2 uur zonder verlengde kooktijd. Dit scheidt malsen (tijd+temperatuur) van smaak ontwikkeling (rook+bruining)."
        }
      },
      {
        question: {
          en: "What is the relationship between water activity (aw) and bacterial growth in BBQ?",
          es: "¿Cuál es la relación entre la actividad del agua (aw) y el crecimiento bacteriano en BBQ?",
          de: "Was ist die Beziehung zwischen Wasseraktivität (aw) und Bakterienwachstum beim BBQ?",
          nl: "Wat is de relatie tussen wateractiviteit (aw) en bacteriegroei in BBQ?"
        },
        options: [
          { en: "Most bacteria need aw above 0.90; surface dehydration and salt reduce aw, inhibiting growth", es: "La mayoría de bacterias necesitan aw por encima de 0.90; deshidratación superficial y sal reducen aw, inhibiendo crecimiento", de: "Die meisten Bakterien brauchen aw über 0.90; Oberflächendehydration und Salz reduzieren aw, hemmen Wachstum", nl: "De meeste bacteriën hebben aw boven 0.90 nodig; oppervlakte dehydratie en zout verlagen aw, remmen groei" },
          { en: "Water activity has no relationship to food safety", es: "La actividad del agua no tiene relación con la seguridad alimentaria", de: "Wasseraktivität hat keine Beziehung zur Lebensmittelsicherheit", nl: "Wateractiviteit heeft geen relatie met voedselveiligheid" },
          { en: "Higher water activity always improves meat quality", es: "Mayor actividad del agua siempre mejora la calidad de la carne", de: "Höhere Wasseraktivität verbessert immer Fleischqualität", nl: "Hogere wateractiviteit verbetert altijd vleeskwaliteit" },
          { en: "Only temperature affects bacterial growth", es: "Solo la temperatura afecta el crecimiento bacteriano", de: "Nur Temperatur beeinflusst Bakterienwachstum", nl: "Alleen temperatuur beïnvloedt bacteriegroei" }
        ],
        correct: 0,
        explanation: {
          en: "Water activity (aw) measures available water for microbial growth (scale 0-1.0). Most pathogenic bacteria require aw > 0.90. During BBQ, surface dehydration (bark formation) and salt penetration reduce aw, creating a hostile environment for bacteria. This, combined with temperature >140°F, makes properly smoked meat safe. Jerky and cured meats rely heavily on low aw for preservation.",
          es: "La actividad del agua (aw) mide el agua disponible para crecimiento microbiano (escala 0-1.0). La mayoría de bacterias patógenas requieren aw > 0.90. Durante BBQ, la deshidratación superficial (formación de corteza) y penetración de sal reducen aw, creando un ambiente hostil para bacterias. Esto, combinado con temperatura >140°F, hace que la carne correctamente ahumada sea segura. El jerky y carnes curadas dependen en gran medida de aw bajo para conservación.",
          de: "Wasseraktivität (aw) misst verfügbares Wasser für mikrobielles Wachstum (Skala 0-1.0). Die meisten pathogenen Bakterien benötigen aw > 0.90. Während des BBQ reduzieren Oberflächendehydration (Bark-Bildung) und Salzpenetration aw, wodurch eine feindliche Umgebung für Bakterien entsteht. Dies, kombiniert mit Temperatur >60°C, macht richtig geräuchertes Fleisch sicher. Jerky und gepökelte Fleischsorten verlassen sich stark auf niedrige aw zur Konservierung.",
          nl: "Wateractiviteit (aw) meet beschikbaar water voor microbiële groei (schaal 0-1.0). De meeste pathogene bacteriën hebben aw > 0.90 nodig. Tijdens BBQ verlagen oppervlakte dehydratie (bark vorming) en zoutpenetratie aw, creëren een vijandige omgeving voor bacteriën. Dit, gecombineerd met temperatuur >60°C, maakt correct gerookt vlees veilig. Jerky en gepekeld vlees zijn sterk afhankelijk van lage aw voor conservering."
        }
      },
      {
        question: {
          en: "How do wood sugars (hemicellulose breakdown) contribute to smoke flavor differently than lignin?",
          es: "¿Cómo contribuyen los azúcares de madera (descomposición de hemicelulosa) al sabor del humo diferente a la lignina?",
          de: "Wie tragen Holzzucker (Hemicellulose-Abbau) anders zum Rauchgeschmack bei als Lignin?",
          nl: "Hoe dragen hout suikers (hemicellulose afbraak) anders bij aan rooksmaak dan lignine?"
        },
        options: [
          { en: "Hemicelluloses create sweet, caramel notes through sugar pyrolysis; lignin provides smoky phenols", es: "Las hemicelulosas crean notas dulces, de caramelo a través de pirólisis de azúcar; lignina proporciona fenoles ahumados", de: "Hemicellulosen erzeugen süße, Karamellnoten durch Zuckerpyrolyse; Lignin liefert rauchige Phenole", nl: "Hemicellulosen creëren zoete, karamel tonen via suiker pyrolyse; lignine levert rokerige fenolen" },
          { en: "Both produce identical flavor compounds", es: "Ambos producen compuestos de sabor idénticos", de: "Beide produzieren identische Geschmacksverbindungen", nl: "Beide produceren identieke smaakverbindingen" },
          { en: "Hemicelluloses only affect smoke color", es: "Las hemicelulosas solo afectan el color del humo", de: "Hemicellulosen beeinflussen nur Rauchfarbe", nl: "Hemicellulosen beïnvloeden alleen rookkleur" },
          { en: "Lignin creates sweetness, hemicelluloses create bitterness", es: "La lignina crea dulzura, las hemicelulosas crean amargura", de: "Lignin erzeugt Süße, Hemicellulosen erzeugen Bitterkeit", nl: "Lignine creëert zoetheid, hemicellulosen creëren bitterheid" }
        ],
        correct: 0,
        explanation: {
          en: "Wood contains cellulose (structure), hemicellulose (15-25%, breaks down into sugars), and lignin (polymer). Hemicellulose thermal decomposition creates simple sugars that undergo pyrolysis and caramelization, producing sweet, caramel, toffee-like aromatics. Lignin breakdown produces phenolic compounds (guaiacol, syringol) providing smoky, spicy, bacon-like flavors. Together they create complex smoke flavor profile - fruitwoods are sweeter (more hemicellulose), hardwoods more phenolic.",
          es: "La madera contiene celulosa (estructura), hemicelulosa (15-25%, se descompone en azúcares) y lignina (polímero). La descomposición térmica de hemicelulosa crea azúcares simples que sufren pirólisis y caramelización, produciendo aromáticos dulces, de caramelo, tipo toffee. La descomposición de lignina produce compuestos fenólicos (guaiacol, siringol) proporcionando sabores ahumados, picantes, tipo tocino. Juntos crean perfil de sabor a humo complejo - maderas frutales son más dulces (más hemicelulosa), maderas duras más fenólicas.",
          de: "Holz enthält Cellulose (Struktur), Hemicellulose (15-25%, zerfällt in Zucker) und Lignin (Polymer). Thermische Zersetzung von Hemicellulose erzeugt einfache Zucker, die Pyrolyse und Karamellisierung durchlaufen, wodurch süße, Karamell-, Toffee-ähnliche Aromaten entstehen. Ligninabbau produziert phenolische Verbindungen (Guaiacol, Syringol), die rauchige, würzige, speck-ähnliche Aromen liefern. Zusammen erzeugen sie komplexes Raucharomaprofil - Obsthölzer sind süßer (mehr Hemicellulose), Harthölzer phenolischer.",
          nl: "Hout bevat cellulose (structuur), hemicellulose (15-25%, breekt af in suikers) en lignine (polymeer). Hemicellulose thermische afbraak creëert eenvoudige suikers die pyrolyse en karamelisatie ondergaan, waarbij zoete, karamel, toffee-achtige aromaten ontstaan. Lignine afbraak produceert fenolische verbindingen (guaiacol, syringol) die rokerige, pittige, spek-achtige smaken leveren. Samen creëren ze complex rooksmaak profiel - fruitbomen zijn zoeter (meer hemicellulose), hardhout meer fenolisch."
        }
      },
      {
        question: {
          en: "What causes protein 'weeping' (syneresis) in over-cured or over-smoked meat?",
          es: "¿Qué causa el 'llanto' de proteínas (sinéresis) en carne sobre-curada o sobre-ahumada?",
          de: "Was verursacht Protein-'Weinen' (Synerese) in überpökeltem oder überräuchertem Fleisch?",
          nl: "Wat veroorzaakt eiwit 'wenen' (synerese) in over-gepekeld of over-gerookt vlees?"
        },
        options: [
          { en: "Excessive salt/smoke causes proteins to contract tightly, expelling bound water", es: "Sal/humo excesivo causa que proteínas se contraigan fuertemente, expulsando agua unida", de: "Übermäßiges Salz/Rauch führt dazu, dass Proteine sich fest zusammenziehen und gebundenes Wasser ausstoßen", nl: "Overmatig zout/rook zorgt ervoor dat eiwitten strak samentrekken, gebonden water uitdrijven" },
          { en: "Bacterial fermentation produces excess moisture", es: "La fermentación bacteriana produce exceso de humedad", de: "Bakterielle Fermentation produziert überschüssige Feuchtigkeit", nl: "Bacteriële fermentatie produceert overtollig vocht" },
          { en: "Fat melting creates liquid pools", es: "El derretimiento de grasa crea charcos líquidos", de: "Fettschmelzen erzeugt Flüssigkeitspfützen", nl: "Vet smelten creëert vloeibare plassen" },
          { en: "Collagen converts to water molecules", es: "El colágeno se convierte en moléculas de agua", de: "Kollagen verwandelt sich in Wassermoleküle", nl: "Collageen converteert naar watermoleculen" }
        ],
        correct: 0,
        explanation: {
          en: "Syneresis occurs when proteins are over-denatured by excessive salt, heat, or smoke acids, causing them to coagulate too tightly. This squeezes out previously bound water, creating liquid 'weeping' on the surface. It's the same principle as squeezing a sponge. Over-cured bacon, overly salty pastrami, or meat smoked too long at too low temperature can exhibit this. Proper curing balance prevents syneresis.",
          es: "La sinéresis ocurre cuando las proteínas están sobre-desnaturalizadas por sal excesiva, calor o ácidos del humo, causando que coagulen demasiado fuertemente. Esto exprime el agua previamente unida, creando 'llanto' líquido en la superficie. Es el mismo principio que exprimir una esponja. Tocino sobre-curado, pastrami excesivamente salado o carne ahumada demasiado tiempo a temperatura demasiado baja pueden exhibir esto. El equilibrio adecuado de curado previene la sinéresis.",
          de: "Synerese tritt auf, wenn Proteine durch übermäßiges Salz, Hitze oder Rauchsäuren überdenaturiert werden, wodurch sie zu fest koagulieren. Dies presst zuvor gebundenes Wasser heraus und erzeugt flüssiges 'Weinen' auf der Oberfläche. Es ist dasselbe Prinzip wie das Auspressen eines Schwamms. Überpökelter Speck, übermäßig salziges Pastrami oder zu lange bei zu niedriger Temperatur geräuchertes Fleisch können dies zeigen. Richtige Pökelbalance verhindert Synerese.",
          nl: "Synerese treedt op wanneer eiwitten te veel worden gedenatureerd door overmatig zout, hitte of rookzuren, waardoor ze te strak coaguleren. Dit perst eerder gebonden water eruit, creëert vloeibaar 'wenen' op het oppervlak. Het is hetzelfde principe als een spons uitknijpen. Over-gepekeld spek, te zout pastrami of vlees te lang gerookt bij te lage temperatuur kunnen dit vertonen. Juiste pekel balans voorkomt synerese."
        }
      },
      {
        question: {
          en: "How does the specific heat capacity of meat affect smoking time calculations?",
          es: "¿Cómo afecta la capacidad calorífica específica de la carne los cálculos de tiempo de ahumado?",
          de: "Wie beeinflusst die spezifische Wärmekapazität von Fleisch die Berechnung der Räucherzeit?",
          nl: "Hoe beïnvloedt de specifieke warmtecapaciteit van vlees rook tijd berekeningen?"
        },
        options: [
          { en: "Meat's high water content (specific heat ~3.5 kJ/kg°C) means it heats slowly, requiring extended cook times", es: "El alto contenido de agua de la carne (calor específico ~3.5 kJ/kg°C) significa que se calienta lentamente, requiriendo tiempos de cocción extendidos", de: "Hoher Wassergehalt von Fleisch (spezifische Wärme ~3.5 kJ/kg°C) bedeutet langsame Erwärmung, erfordert verlängerte Kochzeiten", nl: "Hoog watergehalte van vlees (specifieke warmte ~3.5 kJ/kg°C) betekent langzaam opwarmen, vereist verlengde kooktijden" },
          { en: "Specific heat has no impact on cooking time", es: "El calor específico no tiene impacto en el tiempo de cocción", de: "Spezifische Wärme hat keine Auswirkung auf Kochzeit", nl: "Specifieke warmte heeft geen impact op kooktijd" },
          { en: "Only fat content determines heat absorption", es: "Solo el contenido de grasa determina la absorción de calor", de: "Nur Fettgehalt bestimmt Wärmeaufnahme", nl: "Alleen vetgehalte bepaalt warmte absorptie" },
          { en: "Meat heats faster than water", es: "La carne se calienta más rápido que el agua", de: "Fleisch erwärmt sich schneller als Wasser", nl: "Vlees verwarmt sneller dan water" }
        ],
        correct: 0,
        explanation: {
          en: "Specific heat capacity is the energy required to raise 1kg of material by 1°C. Meat's high water content gives it specific heat around 3.5 kJ/kg°C (similar to water's 4.18), meaning it requires substantial energy to heat. Combined with poor thermal conductivity, large cuts heat slowly and unevenly. This explains the '1-1.5 hours per pound' guideline and why thicker cuts take disproportionately longer than thin ones.",
          es: "La capacidad calorífica específica es la energía requerida para elevar 1kg de material en 1°C. El alto contenido de agua de la carne le da un calor específico alrededor de 3.5 kJ/kg°C (similar a los 4.18 del agua), significando que requiere energía sustancial para calentar. Combinado con pobre conductividad térmica, los cortes grandes se calientan lenta y desigualmente. Esto explica la guía de '1-1.5 horas por libra' y por qué los cortes más gruesos toman desproporcionadamente más tiempo que los delgados.",
          de: "Spezifische Wärmekapazität ist die Energie, die benötigt wird, um 1kg Material um 1°C zu erhöhen. Der hohe Wassergehalt von Fleisch ergibt eine spezifische Wärme von etwa 3.5 kJ/kg°C (ähnlich den 4.18 von Wasser), was bedeutet, dass erhebliche Energie zum Erhitzen erforderlich ist. Kombiniert mit schlechter Wärmeleitfähigkeit erwärmen sich große Stücke langsam und ungleichmäßig. Dies erklärt die '1-1.5 Stunden pro Pfund'-Richtlinie und warum dickere Stücke unverhältnismäßig länger brauchen als dünne.",
          nl: "Specifieke warmtecapaciteit is de energie die nodig is om 1kg materiaal met 1°C te verhogen. Het hoge watergehalte van vlees geeft het een specifieke warmte van ongeveer 3.5 kJ/kg°C (vergelijkbaar met water's 4.18), wat betekent dat het aanzienlijke energie nodig heeft om te verwarmen. Gecombineerd met slechte thermische geleidbaarheid, verwarmen grote stukken langzaam en ongelijkmatig. Dit verklaart de '1-1.5 uur per pond' richtlijn en waarom dikkere stukken onevenredig langer duren dan dunne."
        }
      },
      {
        question: {
          en: "What is the role of free radicals in meat oxidation and smoke antioxidants?",
          es: "¿Cuál es el papel de los radicales libres en la oxidación de la carne y antioxidantes del humo?",
          de: "Was ist die Rolle freier Radikale bei Fleischoxidation und Rauch-Antioxidantien?",
          nl: "Wat is de rol van vrije radicalen bij vlees oxidatie en rook antioxidanten?"
        },
        options: [
          { en: "Free radicals cause rancidity; smoke phenols act as antioxidants preventing fat oxidation", es: "Los radicales libres causan rancidez; fenoles del humo actúan como antioxidantes previniendo oxidación de grasa", de: "Freie Radikale verursachen Ranzigkeit; Rauchphenole wirken als Antioxidantien, verhindern Fettoxidation", nl: "Vrije radicalen veroorzaken ranzigheid; rook fenolen werken als antioxidanten voorkomen vet oxidatie" },
          { en: "Smoke increases free radical formation", es: "El humo aumenta la formación de radicales libres", de: "Rauch erhöht Bildung freier Radikale", nl: "Rook verhoogt vrije radicaal vorming" },
          { en: "Free radicals improve meat tenderness", es: "Los radicales libres mejoran la ternura de la carne", de: "Freie Radikale verbessern Fleischzartheit", nl: "Vrije radicalen verbeteren vlees malheid" },
          { en: "Oxidation has no effect on meat quality", es: "La oxidación no tiene efecto en la calidad de la carne", de: "Oxidation hat keine Auswirkung auf Fleischqualität", nl: "Oxidatie heeft geen effect op vleeskwaliteit" }
        ],
        correct: 0,
        explanation: {
          en: "Lipid oxidation occurs when free radicals attack unsaturated fatty acids, causing rancidity and off-flavors in meat, especially during storage. Smoke contains phenolic compounds (from lignin breakdown) that act as antioxidants, donating electrons to neutralize free radicals. This is why smoked meats have extended shelf life - smoke provides chemical preservation beyond just surface dehydration and salt.",
          es: "La oxidación de lípidos ocurre cuando los radicales libres atacan ácidos grasos insaturados, causando rancidez y sabores desagradables en la carne, especialmente durante el almacenamiento. El humo contiene compuestos fenólicos (de descomposición de lignina) que actúan como antioxidantes, donando electrones para neutralizar radicales libres. Por eso las carnes ahumadas tienen vida útil extendida - el humo proporciona preservación química más allá de solo deshidratación superficial y sal.",
          de: "Lipidoxidation tritt auf, wenn freie Radikale ungesättigte Fettsäuren angreifen, was Ranzigkeit und Fehlaromen im Fleisch verursacht, besonders während der Lagerung. Rauch enthält phenolische Verbindungen (aus Ligninabbau), die als Antioxidantien wirken und Elektronen spenden, um freie Radikale zu neutralisieren. Deshalb haben geräucherte Fleischsorten verlängerte Haltbarkeit - Rauch bietet chemische Konservierung über bloße Oberflächendehydration und Salz hinaus.",
          nl: "Lipide oxidatie treedt op wanneer vrije radicalen onverzadigde vetzuren aanvallen, wat ranzigheid en off-smaken in vlees veroorzaakt, vooral tijdens opslag. Rook bevat fenolische verbindingen (van lignine afbraak) die werken als antioxidanten, elektronen doneren om vrije radicalen te neutraliseren. Daarom hebben gerookte vlees soorten verlengde houdbaarheid - rook biedt chemische conservering naast alleen oppervlakte dehydratie en zout."
        }
      },
      {
        question: {
          en: "How does thermal conductivity explain the difference between smoking chicken and brisket?",
          es: "¿Cómo explica la conductividad térmica la diferencia entre ahumar pollo y brisket?",
          de: "Wie erklärt Wärmeleitfähigkeit den Unterschied zwischen Räuchern von Hähnchen und Brisket?",
          nl: "Hoe verklaart thermische geleidbaarheid het verschil tussen roken van kip en brisket?"
        },
        options: [
          { en: "Chicken's smaller size and higher surface-to-volume ratio allows faster heat penetration than dense brisket", es: "El tamaño más pequeño del pollo y mayor relación superficie-volumen permite penetración de calor más rápida que brisket denso", de: "Hähnchens kleinere Größe und höheres Oberflächen-Volumen-Verhältnis ermöglicht schnellere Wärmedurchdringung als dichtes Brisket", nl: "Kip's kleinere formaat en hogere oppervlakte-volume verhouding maakt snellere warmte penetratie mogelijk dan dichte brisket" },
          { en: "Chicken has higher thermal conductivity than beef", es: "El pollo tiene mayor conductividad térmica que la res", de: "Hähnchen hat höhere Wärmeleitfähigkeit als Rind", nl: "Kip heeft hogere thermische geleidbaarheid dan rundvlees" },
          { en: "Only moisture content matters, not size", es: "Solo importa el contenido de humedad, no el tamaño", de: "Nur Feuchtigkeitsgehalt ist wichtig, nicht Größe", nl: "Alleen vochtgehalte is belangrijk, niet grootte" },
          { en: "Brisket cooks faster due to more fat", es: "El brisket se cocina más rápido debido a más grasa", de: "Brisket kocht schneller wegen mehr Fett", nl: "Brisket kookt sneller vanwege meer vet" }
        ],
        correct: 0,
        explanation: {
          en: "Thermal conductivity in meat is poor (~0.5 W/m·K), meaning heat travels slowly through tissue. Chicken's small size and high surface-to-volume ratio means the center is close to the surface, allowing quick heat penetration (1-2 hours). A thick brisket has low surface-to-volume ratio with the center far from surface, requiring 12+ hours for heat to reach the core at low temperatures. Geometry matters as much as material properties.",
          es: "La conductividad térmica en la carne es pobre (~0.5 W/m·K), significando que el calor viaja lentamente a través del tejido. El tamaño pequeño del pollo y alta relación superficie-volumen significa que el centro está cerca de la superficie, permitiendo rápida penetración de calor (1-2 horas). Un brisket grueso tiene baja relación superficie-volumen con el centro lejos de la superficie, requiriendo 12+ horas para que el calor alcance el núcleo a bajas temperaturas. La geometría importa tanto como las propiedades del material.",
          de: "Wärmeleitfähigkeit in Fleisch ist schlecht (~0.5 W/m·K), was bedeutet, dass Wärme langsam durch Gewebe wandert. Hähnchens kleine Größe und hohes Oberflächen-Volumen-Verhältnis bedeutet, dass das Zentrum nahe der Oberfläche ist, wodurch schnelle Wärmedurchdringung (1-2 Stunden) ermöglicht wird. Ein dickes Brisket hat niedriges Oberflächen-Volumen-Verhältnis mit dem Zentrum weit von der Oberfläche, was 12+ Stunden erfordert, damit Wärme den Kern bei niedrigen Temperaturen erreicht. Geometrie ist so wichtig wie Materialeigenschaften.",
          nl: "Thermische geleidbaarheid in vlees is slecht (~0.5 W/m·K), wat betekent dat warmte langzaam door weefsel reist. Kip's kleine formaat en hoge oppervlakte-volume verhouding betekent dat het centrum dicht bij het oppervlak is, wat snelle warmte penetratie mogelijk maakt (1-2 uur). Een dikke brisket heeft lage oppervlakte-volume verhouding met het centrum ver van het oppervlak, vereist 12+ uur voor warmte om de kern te bereiken bij lage temperaturen. Geometrie is even belangrijk als materiaaleigenschappen."
        }
      },
      {
        question: {
          en: "What chemical process creates 'off-flavors' from resinous woods like pine?",
          es: "¿Qué proceso químico crea 'sabores desagradables' de maderas resinosas como el pino?",
          de: "Welcher chemische Prozess erzeugt 'Fehlaromen' von harzigen Hölzern wie Kiefer?",
          nl: "Welk chemisch proces creëert 'off-smaken' van harsachtig hout zoals den?"
        },
        options: [
          { en: "Terpene resins break down into turpentine-like compounds creating acrid, chemical flavors", es: "Las resinas de terpeno se descomponen en compuestos tipo trementina creando sabores acres, químicos", de: "Terpenharze zerfallen in terpentinähnliche Verbindungen, erzeugen beißende, chemische Aromen", nl: "Terpeen harsen breken af in terpentijn-achtige verbindingen die scherpe, chemische smaken creëren" },
          { en: "Pine has too much moisture content", es: "El pino tiene demasiado contenido de humedad", de: "Kiefer hat zu viel Feuchtigkeitsgehalt", nl: "Den heeft te veel vochtgehalte" },
          { en: "Softwoods lack any flavor compounds", es: "Las maderas blandas carecen de compuestos de sabor", de: "Weichhölzer fehlen jegliche Geschmacksverbindungen", nl: "Zachthout mist smaakverbindingen" },
          { en: "Only bark creates bad flavors", es: "Solo la corteza crea sabores malos", de: "Nur Rinde erzeugt schlechte Aromen", nl: "Alleen bast creëert slechte smaken" }
        ],
        correct: 0,
        explanation: {
          en: "Resinous softwoods (pine, fir, spruce, cedar) contain high concentrations of terpenes - volatile organic compounds in sap and resin. When burned, these break down into turpentine, pinene, and other compounds that taste acrid, chemical, and medicinal. Hardwoods and fruitwoods lack significant resin, instead providing pleasant smoke from lignin and cellulose pyrolysis. Exception: cedar is sometimes used for planking since it's not burning, just smoldering.",
          es: "Las maderas blandas resinosas (pino, abeto, pícea, cedro) contienen altas concentraciones de terpenos - compuestos orgánicos volátiles en savia y resina. Cuando se queman, estos se descomponen en trementina, pineno y otros compuestos que saben acre, químico y medicinal. Las maderas duras y maderas frutales carecen de resina significativa, en cambio proporcionan humo agradable de pirólisis de lignina y celulosa. Excepción: el cedro a veces se usa para tablones ya que no se está quemando, solo humeando.",
          de: "Harzige Weichhölzer (Kiefer, Tanne, Fichte, Zeder) enthalten hohe Konzentrationen von Terpenen - flüchtige organische Verbindungen in Saft und Harz. Beim Verbrennen zerfallen diese in Terpentin, Pinen und andere Verbindungen, die beißend, chemisch und medizinisch schmecken. Harthölzer und Obsthölzer haben kein signifikantes Harz, liefern stattdessen angenehmen Rauch aus Lignin- und Cellulosepyrolyse. Ausnahme: Zeder wird manchmal für Planken verwendet, da sie nicht brennt, sondern nur glimmt.",
          nl: "Harsachtig zachthout (den, spar, zilverspar, ceder) bevat hoge concentraties terpenen - vluchtige organische verbindingen in sap en hars. Wanneer verbrand, breken deze af in terpentijn, pineen en andere verbindingen die scherp, chemisch en medicinaal smaken. Hardhout en fruitbomen missen significant hars, leveren in plaats daarvan aangename rook van lignine en cellulose pyrolyse. Uitzondering: ceder wordt soms gebruikt voor planken omdat het niet brandt, alleen smeult."
        }
      },
      {
        question: {
          en: "How does the Maillard reaction temperature requirement explain why boiling doesn't brown meat?",
          es: "¿Cómo explica el requisito de temperatura de la reacción de Maillard por qué hervir no dora la carne?",
          de: "Wie erklärt die Temperaturanforderung der Maillard-Reaktion, warum Kochen Fleisch nicht bräunt?",
          nl: "Hoe verklaart de Maillard reactie temperatuur vereiste waarom koken vlees niet bruint?"
        },
        options: [
          { en: "Maillard requires 300°F+; boiling water maxes at 212°F, too low for reaction to occur", es: "Maillard requiere 300°F+; agua hirviendo alcanza máximo 212°F, demasiado bajo para que ocurra la reacción", de: "Maillard erfordert 148°C+; kochendes Wasser erreicht maximal 100°C, zu niedrig für Reaktion", nl: "Maillard vereist 148°C+; kokend water bereikt maximaal 100°C, te laag voor reactie" },
          { en: "Water prevents all chemical reactions", es: "El agua previene todas las reacciones químicas", de: "Wasser verhindert alle chemischen Reaktionen", nl: "Water voorkomt alle chemische reacties" },
          { en: "Boiling removes all proteins from meat", es: "Hervir elimina todas las proteínas de la carne", de: "Kochen entfernt alle Proteine aus Fleisch", nl: "Koken verwijdert alle eiwitten uit vlees" },
          { en: "Maillard reaction only happens with sugar", es: "La reacción de Maillard solo ocurre con azúcar", de: "Maillard-Reaktion geschieht nur mit Zucker", nl: "Maillard reactie gebeurt alleen met suiker" }
        ],
        correct: 0,
        explanation: {
          en: "The Maillard reaction requires temperatures above 300°F (149°C) to proceed at meaningful rates. Boiling water is limited to 212°F (100°C) at sea level - well below the threshold. This is why boiled/steamed meat stays gray and bland while grilled/roasted meat browns. The water's presence also keeps surface wet, preventing the dry conditions needed. Pressure cookers reach higher temps but still don't brown well due to moisture.",
          es: "La reacción de Maillard requiere temperaturas superiores a 300°F (149°C) para proceder a tasas significativas. El agua hirviendo está limitada a 212°F (100°C) al nivel del mar - muy por debajo del umbral. Por eso la carne hervida/al vapor permanece gris y suave mientras que la carne asada/a la parrilla se dora. La presencia de agua también mantiene la superficie húmeda, previniendo las condiciones secas necesarias. Las ollas a presión alcanzan temperaturas más altas pero aún no se doran bien debido a la humedad.",
          de: "Die Maillard-Reaktion erfordert Temperaturen über 149°C, um mit bedeutenden Raten fortzuschreiten. Kochendes Wasser ist auf Meereshöhe auf 100°C begrenzt - weit unter der Schwelle. Deshalb bleibt gekochtes/gedämpftes Fleisch grau und fade, während gegrilltes/gebratenes Fleisch bräunt. Die Anwesenheit von Wasser hält auch die Oberfläche nass und verhindert die benötigten trockenen Bedingungen. Schnellkochtöpfe erreichen höhere Temperaturen, bräunen aber aufgrund von Feuchtigkeit immer noch nicht gut.",
          nl: "De Maillard reactie vereist temperaturen boven 149°C om met betekenisvolle snelheden voort te gaan. Kokend water is beperkt tot 100°C op zeeniveau - ruim onder de drempel. Daarom blijft gekookt/gestoomd vlees grijs en flauw terwijl gegrild/geroosterd vlees bruint. De aanwezigheid van water houdt ook het oppervlak nat, voorkomt de droge omstandigheden die nodig zijn. Snelkookpannen bereiken hogere temps maar bruinen nog steeds niet goed door vocht."
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
