// Barbecue Quiz - Level 5: Intermediate Barbecue Techniques
(function() {
  const level5 = {
    name: {
      en: "Barbecue Level 5",
      es: "Barbacoa Nivel 5",
      de: "Grillen Stufe 5",
      nl: "Barbecue Level 5"
    },
    questions: [
      {
        question: {
          en: "What is the ideal temperature range for smoking a pork shoulder?",
          es: "¿Cuál es el rango de temperatura ideal para ahumar una paleta de cerdo?",
          de: "Was ist der ideale Temperaturbereich zum Räuchern einer Schweineschulter?",
          nl: "Wat is het ideale temperatuurbereik voor het roken van een varkensschouder?"
        },
        options: [
          { en: "225-250°F (107-121°C)", es: "225-250°F (107-121°C)", de: "225-250°F (107-121°C)", nl: "225-250°F (107-121°C)" },
          { en: "300-350°F (149-177°C)", es: "300-350°F (149-177°C)", de: "300-350°F (149-177°C)", nl: "300-350°F (149-177°C)" },
          { en: "180-200°F (82-93°C)", es: "180-200°F (82-93°C)", de: "180-200°F (82-93°C)", nl: "180-200°F (82-93°C)" },
          { en: "400-450°F (204-232°C)", es: "400-450°F (204-232°C)", de: "400-450°F (204-232°C)", nl: "400-450°F (204-232°C)" }
        ],
        correct: 0,
        explanation: {
          en: "The sweet spot for smoking pork shoulder is 225-250°F. This temperature allows the tough connective tissues to break down slowly while developing a good bark.",
          es: "El punto ideal para ahumar paleta de cerdo es 225-250°F. Esta temperatura permite que los tejidos conectivos duros se descompongan lentamente mientras desarrolla una buena corteza.",
          de: "Der optimale Bereich zum Räuchern von Schweineschulter ist 225-250°F. Diese Temperatur ermöglicht es den zähen Bindegeweben, sich langsam abzubauen, während eine gute Rinde entwickelt wird.",
          nl: "Het perfecte bereik voor het roken van varkensschouder is 225-250°F. Deze temperatuur stelt het taaie bindweefsel in staat langzaam af te breken terwijl een goede korst ontwikkelt."
        }
      },
      {
        question: {
          en: "What does the '3-2-1 method' refer to in barbecue?",
          es: "¿A qué se refiere el 'método 3-2-1' en barbacoa?",
          de: "Worauf bezieht sich die '3-2-1 Methode' beim Barbecue?",
          nl: "Waar verwijst de '3-2-1 methode' naar bij barbecue?"
        },
        options: [
          { en: "A timing method for smoking ribs: 3 hours unwrapped, 2 hours wrapped, 1 hour unwrapped", es: "Un método de tiempo para ahumar costillas: 3 horas sin envolver, 2 horas envueltas, 1 hora sin envolver", de: "Eine Zeitmethode zum Räuchern von Rippen: 3 Stunden unverpackt, 2 Stunden verpackt, 1 Stunde unverpackt", nl: "Een timing methode voor het roken van ribs: 3 uur onverpakt, 2 uur verpakt, 1 uur onverpakt" },
          { en: "A seasoning ratio for dry rubs", es: "Una proporción de condimentos para aderezos secos", de: "Ein Gewürzverhältnis für Dry Rubs", nl: "Een kruidenverhouding voor dry rubs" },
          { en: "Temperature settings for different cooking phases", es: "Configuraciones de temperatura para diferentes fases de cocción", de: "Temperatureinstellungen für verschiedene Kochphasen", nl: "Temperatuurinstellingen voor verschillende kookfases" },
          { en: "The number of wood chunks to use", es: "El número de trozos de madera a usar", de: "Die Anzahl der zu verwendenden Holzstücke", nl: "Het aantal houtblokken om te gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "The 3-2-1 method is a popular technique for smoking pork ribs: 3 hours unwrapped for bark formation, 2 hours wrapped in foil to speed cooking, then 1 hour unwrapped to firm up the bark.",
          es: "El método 3-2-1 es una técnica popular para ahumar costillas de cerdo: 3 horas sin envolver para formación de corteza, 2 horas envueltas en papel aluminio para acelerar la cocción, luego 1 hora sin envolver para endurecer la corteza.",
          de: "Die 3-2-1 Methode ist eine beliebte Technik zum Räuchern von Schweinerippchen: 3 Stunden unverpackt für Rindenbildung, 2 Stunden in Folie verpackt zum schnelleren Garen, dann 1 Stunde unverpackt zum Festigen der Rinde.",
          nl: "De 3-2-1 methode is een populaire techniek voor het roken van varkensribs: 3 uur onverpakt voor korstvorming, 2 uur verpakt in folie om het koken te versnellen, dan 1 uur onverpakt om de korst te verstevigen."
        }
      },
      {
        question: {
          en: "Which wood gives the strongest smoke flavor?",
          es: "¿Qué madera da el sabor de humo más fuerte?",
          de: "Welches Holz verleiht den stärksten Rauchgeschmack?",
          nl: "Welk hout geeft de sterkste rooksmaak?"
        },
        options: [
          { en: "Mesquite", es: "Mezquite", de: "Mesquite", nl: "Mesquite" },
          { en: "Apple", es: "Manzana", de: "Apfel", nl: "Appel" },
          { en: "Cherry", es: "Cereza", de: "Kirsche", nl: "Kers" },
          { en: "Peach", es: "Durazno", de: "Pfirsich", nl: "Perzik" }
        ],
        correct: 0,
        explanation: {
          en: "Mesquite produces the strongest and most intense smoke flavor. It's popular in Texas but should be used sparingly as it can overpower delicate meats.",
          es: "El mezquite produce el sabor de humo más fuerte e intenso. Es popular en Texas pero debe usarse con moderación ya que puede dominar carnes delicadas.",
          de: "Mesquite produziert den stärksten und intensivsten Rauchgeschmack. Es ist in Texas beliebt, sollte aber sparsam verwendet werden, da es zartes Fleisch überwältigen kann.",
          nl: "Mesquite produceert de sterkste en meest intense rooksmaak. Het is populair in Texas maar moet spaarzaam worden gebruikt omdat het delicate vleeswaren kan overheersen."
        }
      },
      {
        question: {
          en: "What is 'bark' and why is it important in barbecue?",
          es: "¿Qué es 'bark' y por qué es importante en barbacoa?",
          de: "Was ist 'Bark' und warum ist es beim Barbecue wichtig?",
          nl: "Wat is 'bark' en waarom is het belangrijk bij barbecue?"
        },
        options: [
          { en: "The dark, flavorful crust that adds texture and concentrates taste", es: "La corteza oscura y sabrosa que añade textura y concentra el sabor", de: "Die dunkle, geschmackvolle Kruste, die Textur hinzufügt und Geschmack konzentriert", nl: "De donkere, smaakvolle korst die textuur toevoegt en smaak concentreert" },
          { en: "The outer layer of wood used for smoking", es: "La capa exterior de madera usada para ahumar", de: "Die äußere Schicht des zum Räuchern verwendeten Holzes", nl: "De buitenlaag van hout gebruikt voor roken" },
          { en: "A type of barbecue sauce", es: "Un tipo de salsa barbacoa", de: "Eine Art Barbecue-Sauce", nl: "Een soort barbecuesaus" },
          { en: "The sound meat makes when cooking", es: "El sonido que hace la carne al cocinar", de: "Das Geräusch, das Fleisch beim Kochen macht", nl: "Het geluid dat vlees maakt tijdens het koken" }
        ],
        correct: 0,
        explanation: {
          en: "Bark is the dark, caramelized crust that forms on smoked meat from the Maillard reaction, spice rub, and smoke. It provides intense flavor and appealing texture contrast.",
          es: "La bark es la corteza oscura y caramelizada que se forma en la carne ahumada por la reacción de Maillard, el aderezo de especias y el humo. Proporciona sabor intenso y contraste de textura atractivo.",
          de: "Bark ist die dunkle, karamelisierte Kruste, die sich auf geräuchertem Fleisch durch die Maillard-Reaktion, Gewürzrub und Rauch bildet. Sie bietet intensiven Geschmack und ansprechenden Texturkontrast.",
          nl: "Bark is de donkere, gekarameliseerde korst die zich vormt op gerookt vlees door de Maillard-reactie, kruidenrub en rook. Het biedt intense smaak en aantrekkelijk textuurcontrast."
        }
      },
      {
        question: {
          en: "What internal temperature should beef brisket reach for optimal tenderness?",
          es: "¿Qué temperatura interna debe alcanzar el brisket de res para ternura óptima?",
          de: "Welche Innentemperatur sollte Rinderbrust für optimale Zartheit erreichen?",
          nl: "Welke interne temperatuur moet runderbrisket bereiken voor optimale malheid?"
        },
        options: [
          { en: "195-205°F (90-96°C)", es: "195-205°F (90-96°C)", de: "195-205°F (90-96°C)", nl: "195-205°F (90-96°C)" },
          { en: "145°F (63°C)", es: "145°F (63°C)", de: "145°F (63°C)", nl: "145°F (63°C)" },
          { en: "160°F (71°C)", es: "160°F (71°C)", de: "160°F (71°C)", nl: "160°F (71°C)" },
          { en: "180°F (82°C)", es: "180°F (82°C)", de: "180°F (82°C)", nl: "180°F (82°C)" }
        ],
        correct: 0,
        explanation: {
          en: "Brisket needs to reach 195-205°F internally to fully break down the tough collagen into gelatin, making it tender enough to slice cleanly or pull apart.",
          es: "El brisket necesita alcanzar 195-205°F internamente para descomponer completamente el colágeno duro en gelatina, haciéndolo lo suficientemente tierno para cortar limpiamente o desmenuzar.",
          de: "Rinderbrust muss innen 195-205°F erreichen, um das zähe Kollagen vollständig in Gelatine zu zerlegen, wodurch es zart genug wird, um sauber zu schneiden oder auseinanderzuziehen.",
          nl: "Brisket moet intern 195-205°F bereiken om het taaie collageen volledig af te breken tot gelatine, waardoor het mals genoeg wordt om netjes te snijden of uit elkaar te trekken."
        }
      },
      {
        question: {
          en: "What is the purpose of a water pan in a smoker?",
          es: "¿Cuál es el propósito de una bandeja de agua en un ahumador?",
          de: "Was ist der Zweck einer Wasserschale in einem Räucherofen?",
          nl: "Wat is het doel van een waterpan in een roker?"
        },
        options: [
          { en: "To maintain moisture and stabilize temperature", es: "Para mantener humedad y estabilizar temperatura", de: "Um Feuchtigkeit zu erhalten und Temperatur zu stabilisieren", nl: "Om vocht te behouden en temperatuur te stabiliseren" },
          { en: "To add flavor to the meat", es: "Para añadir sabor a la carne", de: "Um dem Fleisch Geschmack hinzuzufügen", nl: "Om smaak aan het vlees toe te voegen" },
          { en: "To catch dripping fat", es: "Para atrapar grasa que gotea", de: "Um tropfendes Fett aufzufangen", nl: "Om druppelend vet op te vangen" },
          { en: "To cool down the smoker", es: "Para enfriar el ahumador", de: "Um den Räucherofen zu kühlen", nl: "Om de roker af te koelen" }
        ],
        correct: 0,
        explanation: {
          en: "A water pan serves as a heat sink to stabilize temperature fluctuations and adds humidity to prevent meat from drying out during long smoking sessions.",
          es: "Una bandeja de agua sirve como disipador de calor para estabilizar fluctuaciones de temperatura y añade humedad para evitar que la carne se seque durante largas sesiones de ahumado.",
          de: "Eine Wasserschale dient als Wärmespeicher zur Stabilisierung von Temperaturschwankungen und fügt Feuchtigkeit hinzu, um zu verhindern, dass Fleisch während langer Räuchersessions austrocknet.",
          nl: "Een waterpan dient als warmteopslag om temperatuurschommelingen te stabiliseren en voegt vochtigheid toe om te voorkomen dat vlees uitdroogt tijdens lange rooksessies."
        }
      },
      {
        question: {
          en: "What is the difference between baby back ribs and spare ribs?",
          es: "¿Cuál es la diferencia entre costillas baby back y costillas spare?",
          de: "Was ist der Unterschied zwischen Baby Back Ribs und Spare Ribs?",
          nl: "Wat is het verschil tussen baby back ribs en spare ribs?"
        },
        options: [
          { en: "Baby backs are from the back/loin area and are shorter; spare ribs are from the belly and are longer", es: "Las baby backs son del área de la espalda/lomo y son más cortas; las spare ribs son del vientre y son más largas", de: "Baby Backs sind aus dem Rücken-/Lendenbereich und sind kürzer; Spare Ribs sind aus dem Bauch und sind länger", nl: "Baby backs zijn van de rug/lende gebied en zijn korter; spare ribs zijn van de buik en zijn langer" },
          { en: "Baby backs are from younger pigs", es: "Las baby backs son de cerdos más jóvenes", de: "Baby Backs sind von jüngeren Schweinen", nl: "Baby backs zijn van jongere varkens" },
          { en: "Spare ribs are always boneless", es: "Las spare ribs siempre son sin hueso", de: "Spare Ribs sind immer ohne Knochen", nl: "Spare ribs zijn altijd zonder bot" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Baby back ribs come from the upper back near the loin and are shorter, more tender, and leaner. Spare ribs come from the lower belly area and are longer, meatier, with more fat and connective tissue.",
          es: "Las costillas baby back vienen de la parte superior de la espalda cerca del lomo y son más cortas, más tiernas y magras. Las spare ribs vienen del área inferior del vientre y son más largas, carnosas, con más grasa y tejido conectivo.",
          de: "Baby Back Ribs kommen aus dem oberen Rücken nahe der Lende und sind kürzer, zarter und magerer. Spare Ribs kommen aus dem unteren Bauchbereich und sind länger, fleischiger, mit mehr Fett und Bindegewebe.",
          nl: "Baby back ribs komen van de bovenrug nabij de lende en zijn korter, malser en magerder. Spare ribs komen van het onderbuikgebied en zijn langer, vleesiger, met meer vet en bindweefsel."
        }
      },
      {
        question: {
          en: "What is the 'money muscle' on a pork shoulder?",
          es: "¿Qué es el 'money muscle' en una paleta de cerdo?",
          de: "Was ist der 'Money Muscle' an einer Schweineschulter?",
          nl: "Wat is de 'money muscle' aan een varkensschouder?"
        },
        options: [
          { en: "The eye of the shoulder muscle that's perfectly round when sliced", es: "El ojo del músculo del hombro que es perfectamente redondo cuando se corta", de: "Das Auge des Schultermuskels, das beim Schneiden perfekt rund ist", nl: "Het oog van de schouder spier die perfect rond is wanneer gesneden" },
          { en: "The fattiest part of the shoulder", es: "La parte más grasa del hombro", de: "Der fetteste Teil der Schulter", nl: "Het vetste deel van de schouder" },
          { en: "The bone in the center", es: "El hueso en el centro", de: "Der Knochen in der Mitte", nl: "Het bot in het midden" },
          { en: "The skin on top", es: "La piel encima", de: "Die Haut oben", nl: "De huid bovenop" }
        ],
        correct: 0,
        explanation: {
          en: "The 'money muscle' is the teres major muscle at the end of a pork shoulder. When sliced, it creates perfect round slices that look impressive and are highly prized in barbecue competitions.",
          es: "El 'money muscle' es el músculo teres major al final de una paleta de cerdo. Cuando se corta, crea rebanadas redondas perfectas que se ven impresionantes y son muy valoradas en competencias de barbacoa.",
          de: "Der 'Money Muscle' ist der Teres-Major-Muskel am Ende einer Schweineschulter. Beim Schneiden entstehen perfekte runde Scheiben, die beeindruckend aussehen und bei Barbecue-Wettbewerben sehr geschätzt werden.",
          nl: "De 'money muscle' is de teres major spier aan het einde van een varkensschouder. Wanneer gesneden, creëert het perfecte ronde plakken die indrukwekkend uitzien en zeer gewaardeerd worden in barbecue competities."
        }
      },
      {
        question: {
          en: "What does 'hot and fast' barbecue mean?",
          es: "¿Qué significa barbacoa 'hot and fast'?",
          de: "Was bedeutet 'Hot and Fast' Barbecue?",
          nl: "Wat betekent 'hot and fast' barbecue?"
        },
        options: [
          { en: "Cooking at higher temperatures (300-350°F) for shorter time", es: "Cocinar a temperaturas más altas (300-350°F) durante menos tiempo", de: "Kochen bei höheren Temperaturen (300-350°F) für kürzere Zeit", nl: "Koken op hogere temperaturen (300-350°F) gedurende kortere tijd" },
          { en: "Using very spicy rubs", es: "Usar aderezos muy picantes", de: "Sehr scharfe Rubs verwenden", nl: "Zeer pittige rubs gebruiken" },
          { en: "Grilling over direct heat", es: "Asar sobre calor directo", de: "Grillen über direkter Hitze", nl: "Grillen over directe hitte" },
          { en: "Serving food immediately", es: "Servir comida inmediatamente", de: "Essen sofort servieren", nl: "Voedsel onmiddellijk serveren" }
        ],
        correct: 0,
        explanation: {
          en: "Hot and fast barbecue involves cooking at higher temperatures (300-350°F) instead of the traditional low and slow method. This reduces cooking time while still producing tender, flavorful results.",
          es: "La barbacoa hot and fast implica cocinar a temperaturas más altas (300-350°F) en lugar del método tradicional bajo y lento. Esto reduce el tiempo de cocción mientras aún produce resultados tiernos y sabrosos.",
          de: "Hot and Fast Barbecue beinhaltet das Kochen bei höheren Temperaturen (300-350°F) anstelle der traditionellen niedrigen und langsamen Methode. Dies reduziert die Kochzeit und produziert dennoch zarte, geschmackvolle Ergebnisse.",
          nl: "Hot and fast barbecue houdt in dat er gekookt wordt op hogere temperaturen (300-350°F) in plaats van de traditionele lage en langzame methode. Dit vermindert de kooktijd terwijl nog steeds malse, smaakvolle resultaten worden geproduceerd."
        }
      },
      {
        question: {
          en: "What is the purpose of injecting meat before smoking?",
          es: "¿Cuál es el propósito de inyectar carne antes de ahumar?",
          de: "Was ist der Zweck des Injizierens von Fleisch vor dem Räuchern?",
          nl: "Wat is het doel van het injecteren van vlees voor het roken?"
        },
        options: [
          { en: "To add moisture and flavor deep inside the meat", es: "Para añadir humedad y sabor profundo dentro de la carne", de: "Um Feuchtigkeit und Geschmack tief im Fleisch hinzuzufügen", nl: "Om vocht en smaak diep in het vlees toe te voegen" },
          { en: "To speed up the cooking process", es: "Para acelerar el proceso de cocción", de: "Um den Kochvorgang zu beschleunigen", nl: "Om het kookproces te versnellen" },
          { en: "To prevent bacteria growth", es: "Para prevenir el crecimiento de bacterias", de: "Um Bakterienwachstum zu verhindern", nl: "Om bacteriegroei te voorkomen" },
          { en: "To change the meat's color", es: "Para cambiar el color de la carne", de: "Um die Farbe des Fleisches zu ändern", nl: "Om de kleur van het vlees te veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Injecting meat with flavorful liquids (butter, broth, wine) adds moisture and flavor throughout the interior, not just the surface, and helps prevent drying during long cooking times.",
          es: "Inyectar carne con líquidos sabrosos (mantequilla, caldo, vino) añade humedad y sabor en todo el interior, no solo en la superficie, y ayuda a prevenir que se seque durante largos tiempos de cocción.",
          de: "Das Injizieren von Fleisch mit geschmackvollen Flüssigkeiten (Butter, Brühe, Wein) fügt Feuchtigkeit und Geschmack im ganzen Inneren hinzu, nicht nur an der Oberfläche, und hilft beim Austrocknen während langer Kochzeiten.",
          nl: "Het injecteren van vlees met smaakvolle vloeistoffen (boter, bouillon, wijn) voegt vocht en smaak toe door het hele interieur, niet alleen het oppervlak, en helpt uitdroging tijdens lange kooktijden te voorkomen."
        }
      },
      {
        question: {
          en: "What is the 'bend test' for determining rib doneness?",
          es: "¿Qué es la 'prueba de flexión' para determinar el punto de cocción de las costillas?",
          de: "Was ist der 'Bend Test' zur Bestimmung der Gare von Rippen?",
          nl: "Wat is de 'bend test' voor het bepalen van de gaarheid van ribs?"
        },
        options: [
          { en: "Picking up ribs with tongs - they should bend and crack slightly but not break", es: "Levantar costillas con pinzas - deben doblarse y agrietarse ligeramente pero no romperse", de: "Rippen mit einer Zange aufheben - sie sollten sich biegen und leicht rissig werden, aber nicht brechen", nl: "Ribs oppakken met tang - ze moeten buigen en licht barsten maar niet breken" },
          { en: "Bending the rib rack in half", es: "Doblar la rejilla de costillas por la mitad", de: "Das Rippengestell in der Hälfte biegen", nl: "Het rib rek in tweeën buigen" },
          { en: "Testing flexibility of individual bones", es: "Probar flexibilidad de huesos individuales", de: "Flexibilität einzelner Knochen testen", nl: "Flexibiliteit van individuele botten testen" },
          { en: "Checking if ribs bounce back when pressed", es: "Verificar si las costillas rebotan cuando se presionan", de: "Prüfen, ob Rippen zurückfedern, wenn sie gedrückt werden", nl: "Controleren of ribs terugveren wanneer ingedrukt" }
        ],
        correct: 0,
        explanation: {
          en: "The bend test involves picking up ribs from one end with tongs. Properly cooked ribs will bend and the surface may crack slightly, but they shouldn't fall apart completely.",
          es: "La prueba de flexión implica levantar costillas de un extremo con pinzas. Las costillas bien cocidas se doblarán y la superficie puede agrietarse ligeramente, pero no deben desmoronarse completamente.",
          de: "Der Bend Test beinhaltet das Aufheben von Rippen an einem Ende mit einer Zange. Richtig gekochte Rippen biegen sich und die Oberfläche kann leicht reißen, aber sie sollten nicht völlig auseinanderfallen.",
          nl: "De bend test houdt in dat ribs aan één kant worden opgepakt met een tang. Goed gekookte ribs zullen buigen en het oppervlak kan licht barsten, maar ze mogen niet volledig uit elkaar vallen."
        }
      },
      {
        question: {
          en: "What is a 'reverse sear' in barbecue?",
          es: "¿Qué es un 'reverse sear' en barbacoa?",
          de: "Was ist ein 'Reverse Sear' beim Barbecue?",
          nl: "Wat is een 'reverse sear' bij barbecue?"
        },
        options: [
          { en: "Smoking low and slow first, then searing at high heat to finish", es: "Ahumar bajo y lento primero, luego sellar a fuego alto para terminar", de: "Erst niedrig und langsam räuchern, dann bei hoher Hitze anbraten zum Abschluss", nl: "Eerst laag en langzaam roken, dan aanbraden op hoge hitte om af te maken" },
          { en: "Searing first, then finishing in the oven", es: "Sellar primero, luego terminar en el horno", de: "Erst anbraten, dann im Ofen fertigstellen", nl: "Eerst aanbraden, dan afmaken in de oven" },
          { en: "Cooking meat backwards", es: "Cocinar carne al revés", de: "Fleisch rückwärts kochen", nl: "Vlees achterstevoren koken" },
          { en: "Using the reverse side of the grill", es: "Usar el lado reverso de la parrilla", de: "Die Rückseite des Grills verwenden", nl: "De achterkant van de grill gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Reverse searing involves cooking meat slowly at low temperature until almost done, then finishing with high heat to create a perfect crust while maintaining even doneness throughout.",
          es: "El reverse sear implica cocinar carne lentamente a baja temperatura hasta casi terminar, luego finalizar con calor alto para crear una corteza perfecta mientras mantiene cocción uniforme en todo.",
          de: "Reverse Searing beinhaltet das langsame Kochen von Fleisch bei niedriger Temperatur bis fast fertig, dann mit hoher Hitze abschließen, um eine perfekte Kruste zu schaffen und gleichmäßige Gare beizubehalten.",
          nl: "Reverse searing houdt in dat vlees langzaam wordt gekookt op lage temperatuur tot bijna gaar, dan afgemaakt met hoge hitte om een perfecte korst te creëren terwijl gelijkmatige gaarheid behouden blijft."
        }
      },
      {
        question: {
          en: "What is the ideal cooking temperature for poultry in barbecue?",
          es: "¿Cuál es la temperatura ideal de cocción para aves en barbacoa?",
          de: "Was ist die ideale Kochtemperatur für Geflügel beim Barbecue?",
          nl: "Wat is de ideale kooktemperatuur voor gevogelte bij barbecue?"
        },
        options: [
          { en: "325-350°F (163-177°C) to ensure crispy skin", es: "325-350°F (163-177°C) para asegurar piel crujiente", de: "325-350°F (163-177°C) um knusprige Haut zu gewährleisten", nl: "325-350°F (163-177°C) om knapperige huid te verzekeren" },
          { en: "225-250°F (107-121°C) like other meats", es: "225-250°F (107-121°C) como otras carnes", de: "225-250°F (107-121°C) wie andere Fleischsorten", nl: "225-250°F (107-121°C) zoals andere vleeswaren" },
          { en: "400-450°F (204-232°C) for quick cooking", es: "400-450°F (204-232°C) para cocción rápida", de: "400-450°F (204-232°C) für schnelles Kochen", nl: "400-450°F (204-232°C) voor snel koken" },
          { en: "275-300°F (135-149°C) for safety", es: "275-300°F (135-149°C) por seguridad", de: "275-300°F (135-149°C) für Sicherheit", nl: "275-300°F (135-149°C) voor veiligheid" }
        ],
        correct: 0,
        explanation: {
          en: "Poultry benefits from higher temperatures (325-350°F) to render fat and achieve crispy skin while ensuring the meat reaches safe internal temperatures quickly.",
          es: "Las aves se benefician de temperaturas más altas (325-350°F) para derretir grasa y lograr piel crujiente mientras aseguran que la carne alcance temperaturas internas seguras rápidamente.",
          de: "Geflügel profitiert von höheren Temperaturen (325-350°F), um Fett zu rendern und knusprige Haut zu erreichen, während sichergestellt wird, dass das Fleisch schnell sichere Innentemperaturen erreicht.",
          nl: "Gevogelte heeft baat bij hogere temperaturen (325-350°F) om vet te smelten en knapperige huid te bereiken terwijl ervoor wordt gezorgd dat het vlees snel veilige interne temperaturen bereikt."
        }
      },
      {
        question: {
          en: "What is the purpose of 'mopping' during barbecue?",
          es: "¿Cuál es el propósito de 'mopear' durante la barbacoa?",
          de: "Was ist der Zweck des 'Moppens' während des Barbecues?",
          nl: "Wat is het doel van 'mopping' tijdens barbecue?"
        },
        options: [
          { en: "Applying liquid baste to keep meat moist and add flavor", es: "Aplicar líquido para mantener la carne húmeda y añadir sabor", de: "Flüssige Beize auftragen, um Fleisch feucht zu halten und Geschmack hinzuzufügen", nl: "Vloeibare saus aanbrengen om vlees vochtig te houden en smaak toe te voegen" },
          { en: "Cleaning the grill grates", es: "Limpiar las rejillas de la parrilla", de: "Die Grillroste reinigen", nl: "De grillroosters schoonmaken" },
          { en: "Removing excess fat", es: "Eliminar grasa excesiva", de: "Überschüssiges Fett entfernen", nl: "Overtollig vet verwijderen" },
          { en: "Checking internal temperature", es: "Verificar temperatura interna", de: "Innentemperatur prüfen", nl: "Interne temperatuur controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Mopping involves basting meat with flavored liquids (often containing vinegar, oil, spices) during cooking to add moisture, flavor, and help maintain bark formation.",
          es: "Mopear implica rociar carne con líquidos saborizados (a menudo conteniendo vinagre, aceite, especias) durante la cocción para añadir humedad, sabor y ayudar a mantener la formación de corteza.",
          de: "Moppen beinhaltet das Bestreichen von Fleisch mit aromatisierten Flüssigkeiten (oft mit Essig, Öl, Gewürzen) während des Kochens, um Feuchtigkeit und Geschmack hinzuzufügen und die Rindenbildung zu unterstützen.",
          nl: "Mopping houdt in dat vlees wordt bestreken met gearomatiseerde vloeistoffen (vaak met azijn, olie, kruiden) tijdens het koken om vocht, smaak toe te voegen en korstvorming te helpen behouden."
        }
      },
      {
        question: {
          en: "What causes the 'smoke ring' in barbecued meat?",
          es: "¿Qué causa el 'anillo de humo' en la carne barbacoa?",
          de: "Was verursacht den 'Rauchring' in gegrilltem Fleisch?",
          nl: "Wat veroorzaakt de 'rookring' in gebarbecued vlees?"
        },
        options: [
          { en: "Chemical reaction between nitric oxide in smoke and myoglobin in meat", es: "Reacción química entre óxido nítrico en humo y mioglobina en carne", de: "Chemische Reaktion zwischen Stickstoffmonoxid im Rauch und Myoglobin im Fleisch", nl: "Chemische reactie tussen stikstofmonoxide in rook en myoglobine in vlees" },
          { en: "High temperature burning the surface", es: "Alta temperatura quemando la superficie", de: "Hohe Temperatur, die die Oberfläche verbrennt", nl: "Hoge temperatuur die het oppervlak verbrandt" },
          { en: "Special seasonings in the rub", es: "Condimentos especiales en el aderezo", de: "Spezielle Gewürze im Rub", nl: "Speciale kruiden in de rub" },
          { en: "Moisture escaping from the meat", es: "Humedad escapando de la carne", de: "Feuchtigkeit, die aus dem Fleisch entweicht", nl: "Vocht dat uit het vlees ontsnapt" }
        ],
        correct: 0,
        explanation: {
          en: "The smoke ring is formed when nitric oxide from burning wood combines with myoglobin in the meat, creating a pink-red ring just below the surface. It's purely cosmetic but highly prized.",
          es: "El anillo de humo se forma cuando el óxido nítrico de la madera ardiendo se combina con mioglobina en la carne, creando un anillo rosado-rojo justo debajo de la superficie. Es puramente cosmético pero muy valorado.",
          de: "Der Rauchring entsteht, wenn Stickstoffmonoxid aus brennendem Holz sich mit Myoglobin im Fleisch verbindet und einen rosa-roten Ring knapp unter der Oberfläche bildet. Es ist rein kosmetisch, aber sehr geschätzt.",
          nl: "De rookring wordt gevormd wanneer stikstofmonoxide van brandend hout combineert met myoglobine in het vlees, wat een roze-rode ring net onder het oppervlak creëert. Het is puur cosmetisch maar zeer gewaardeerd."
        }
      },
      {
        question: {
          en: "What is the 'probe test' for checking meat tenderness?",
          es: "¿Qué es la 'prueba de sonda' para verificar la ternura de la carne?",
          de: "Was ist der 'Sonden-Test' zur Überprüfung der Fleischzartheit?",
          nl: "Wat is de 'probe test' voor het controleren van vleesmalheid?"
        },
        options: [
          { en: "Inserting a thermometer probe should feel like going through butter", es: "Insertar una sonda de termómetro debe sentirse como atravesar mantequilla", de: "Das Einführen einer Thermometersonde sollte sich anfühlen wie durch Butter zu gehen", nl: "Het inbrengen van een thermometer sonde moet voelen als door boter gaan" },
          { en: "Using a probe to measure thickness", es: "Usar una sonda para medir grosor", de: "Eine Sonde verwenden, um Dicke zu messen", nl: "Een sonde gebruiken om dikte te meten" },
          { en: "Testing electrical conductivity", es: "Probar conductividad eléctrica", de: "Elektrische Leitfähigkeit testen", nl: "Elektrische geleidbaarheid testen" },
          { en: "Checking for bone separation", es: "Verificar separación de hueso", de: "Knochentrennung überprüfen", nl: "Botscheiding controleren" }
        ],
        correct: 0,
        explanation: {
          en: "The probe test involves inserting a thermometer probe into the thickest part of the meat. When properly cooked, it should slide in with little resistance, like going through warm butter.",
          es: "La prueba de sonda implica insertar una sonda de termómetro en la parte más gruesa de la carne. Cuando está bien cocida, debe deslizarse con poca resistencia, como atravesar mantequilla tibia.",
          de: "Der Sonden-Test beinhaltet das Einführen einer Thermometersonde in den dicksten Teil des Fleisches. Wenn richtig gekocht, sollte sie mit wenig Widerstand hineingleiten, wie durch warme Butter.",
          nl: "De probe test houdt in dat een thermometer sonde wordt ingebracht in het dikste deel van het vlees. Wanneer goed gekookt, moet het met weinig weerstand erin glijden, zoals door warme boter gaan."
        }
      },
      {
        question: {
          en: "What is a 'plateau' or 'stall' and how long can it last?",
          es: "¿Qué es una 'meseta' o 'estancamiento' y cuánto puede durar?",
          de: "Was ist ein 'Plateau' oder 'Stall' und wie lange kann es dauern?",
          nl: "Wat is een 'plateau' of 'stall' en hoe lang kan het duren?"
        },
        options: [
          { en: "When internal temperature stops rising for 2-6 hours due to evaporative cooling", es: "Cuando la temperatura interna deja de subir por 2-6 horas debido al enfriamiento evaporativo", de: "Wenn die Innentemperatur 2-6 Stunden aufhört zu steigen aufgrund von Verdunstungskühlung", nl: "Wanneer interne temperatuur stopt met stijgen voor 2-6 uur vanwege verdampingskoeling" },
          { en: "A 30-minute rest period", es: "Un período de descanso de 30 minutos", de: "Eine 30-minütige Ruhepause", nl: "Een rustperiode van 30 minuten" },
          { en: "When the fire needs more fuel", es: "Cuando el fuego necesita más combustible", de: "Wenn das Feuer mehr Brennstoff braucht", nl: "Wanneer het vuur meer brandstof nodig heeft" },
          { en: "A cooking technique from Texas", es: "Una técnica de cocción de Texas", de: "Eine Kochtechnik aus Texas", nl: "Een kooktechniek uit Texas" }
        ],
        correct: 0,
        explanation: {
          en: "The stall occurs when moisture evaporating from the meat's surface creates cooling that balances heat input, causing temperature to plateau for several hours, typically around 150-170°F.",
          es: "El estancamiento ocurre cuando la humedad que se evapora de la superficie de la carne crea enfriamiento que equilibra la entrada de calor, causando que la temperatura se estabilice por varias horas, típicamente alrededor de 150-170°F.",
          de: "Der Stall tritt auf, wenn Feuchtigkeit, die von der Fleischoberfläche verdunstet, Kühlung erzeugt, die die Wärmezufuhr ausgleicht, wodurch die Temperatur für mehrere Stunden stagniert, typischerweise um 150-170°F.",
          nl: "De stall treedt op wanneer vocht dat verdampt van het vleeoppervlak koeling creëert die warmte-invoer balanceert, waardoor temperatuur voor meerdere uren stagneert, typisch rond 150-170°F."
        }
      },
      {
        question: {
          en: "What is the difference between wet and dry aging of meat for barbecue?",
          es: "¿Cuál es la diferencia entre maduración húmeda y seca de carne para barbacoa?",
          de: "Was ist der Unterschied zwischen nasser und trockener Reifung von Fleisch für Barbecue?",
          nl: "Wat is het verschil tussen natte en droge rijping van vlees voor barbecue?"
        },
        options: [
          { en: "Wet aging is in vacuum bags, dry aging is exposed to air in controlled conditions", es: "Maduración húmeda es en bolsas al vacío, maduración seca es expuesta al aire en condiciones controladas", de: "Nassreifung ist in Vakuumbeuteln, Trockenreifung ist Luftexposition unter kontrollierten Bedingungen", nl: "Natte rijping is in vacuümzakken, droge rijping is blootgesteld aan lucht onder gecontroleerde omstandigheden" },
          { en: "Wet aging uses water, dry aging uses salt", es: "Maduración húmeda usa agua, maduración seca usa sal", de: "Nassreifung verwendet Wasser, Trockenreifung verwendet Salz", nl: "Natte rijping gebruikt water, droge rijping gebruikt zout" },
          { en: "Wet aging is faster, dry aging is slower", es: "Maduración húmeda es más rápida, maduración seca es más lenta", de: "Nassreifung ist schneller, Trockenreifung ist langsamer", nl: "Natte rijping is sneller, droge rijping is langzamer" },
          { en: "They are the same process", es: "Son el mismo proceso", de: "Sie sind derselbe Prozess", nl: "Het zijn hetzelfde proces" }
        ],
        correct: 0,
        explanation: {
          en: "Wet aging occurs in vacuum-sealed packages where meat ages in its own juices. Dry aging exposes meat to controlled air flow, temperature, and humidity, developing concentrated flavors and tender texture.",
          es: "La maduración húmeda ocurre en paquetes sellados al vacío donde la carne madura en sus propios jugos. La maduración seca expone la carne a flujo de aire controlado, temperatura y humedad, desarrollando sabores concentrados y textura tierna.",
          de: "Nassreifung erfolgt in vakuumversiegelten Packungen, wo Fleisch in seinen eigenen Säften reift. Trockenreifung setzt Fleisch kontrolliertem Luftstrom, Temperatur und Feuchtigkeit aus und entwickelt konzentrierte Aromen und zarte Textur.",
          nl: "Natte rijping vindt plaats in vacuüm verzegelde verpakkingen waar vlees rijpt in zijn eigen sappen. Droge rijping stelt vlees bloot aan gecontroleerde luchtstroom, temperatuur en vochtigheid, wat geconcentreerde smaken en malse textuur ontwikkelt."
        }
      },
      {
        question: {
          en: "How does the '2-2-1 method' differ from '3-2-1' for ribs?",
          es: "¿Cómo difiere el 'método 2-2-1' del '3-2-1' para costillas?",
          de: "Wie unterscheidet sich die '2-2-1 Methode' von '3-2-1' für Rippen?",
          nl: "Hoe verschilt de '2-2-1 methode' van '3-2-1' voor ribs?"
        },
        options: [
          { en: "Shorter cooking time for baby backs vs spare ribs, 2 smoke + 2 wrapped + 1 sauce", es: "Tiempo de cocción más corto para baby backs vs spare ribs, 2 humo + 2 envueltas + 1 salsa", de: "Kürzere Kochzeit für Baby Backs vs Spare Ribs, 2 Rauch + 2 eingewickelt + 1 Sauce", nl: "Kortere kooktijd voor baby backs vs spare ribs, 2 rook + 2 verpakt + 1 saus" },
          { en: "Uses different wood types", es: "Usa tipos de madera diferentes", de: "Verwendet verschiedene Holzarten", nl: "Gebruikt verschillende houttypes" },
          { en: "Higher temperature throughout", es: "Temperatura más alta durante todo", de: "Höhere Temperatur durchgehend", nl: "Hogere temperatuur gedurende" },
          { en: "No wrapping phase at all", es: "Sin fase de envolver en absoluto", de: "Keine Einwickelphase überhaupt", nl: "Helemaal geen inpakfase" }
        ],
        correct: 0,
        explanation: {
          en: "The 2-2-1 method is used for baby back ribs which are smaller and more tender than spare ribs. It uses 2 hours unwrapped smoking, 2 hours wrapped in foil, and 1 hour unwrapped with sauce. The 3-2-1 method is for larger spare ribs that need more time.",
          es: "El método 2-2-1 se usa para costillas baby back que son más pequeñas y tiernas que las spare ribs. Usa 2 horas ahumado sin envolver, 2 horas envueltas en papel aluminio, y 1 hora sin envolver con salsa. El método 3-2-1 es para spare ribs más grandes que necesitan más tiempo.",
          de: "Die 2-2-1 Methode wird für Baby Back Rippen verwendet, die kleiner und zarter als Spare Ribs sind. Sie nutzt 2 Stunden unverpacktes Räuchern, 2 Stunden in Folie verpackt, und 1 Stunde unverpackt mit Sauce. Die 3-2-1 Methode ist für größere Spare Ribs die mehr Zeit brauchen.",
          nl: "De 2-2-1 methode wordt gebruikt voor baby back ribs die kleiner en malser zijn dan spare ribs. Het gebruikt 2 uur onverpakt roken, 2 uur verpakt in folie, en 1 uur onverpakt met saus. De 3-2-1 methode is voor grotere spare ribs die meer tijd nodig hebben."
        }
      },
      {
        question: {
          en: "What does 'pullback' mean when cooking ribs?",
          es: "¿Qué significa 'pullback' al cocinar costillas?",
          de: "Was bedeutet 'Pullback' beim Kochen von Rippen?",
          nl: "Wat betekent 'pullback' bij het koken van ribs?"
        },
        options: [
          { en: "Meat shrinking from bone ends exposing 1/4-1/2 inch, indicates doneness", es: "Carne encogiendo de extremos de hueso exponiendo 1/4-1/2 pulgada, indica cocción", de: "Fleisch schrumpft von Knochenenden und legt 1/4-1/2 Zoll frei, zeigt Garung an", nl: "Vlees krimpt van bot uiteinden en legt 1/4-1/2 inch bloot, geeft gaarheid aan" },
          { en: "Pulling ribs away from heat source", es: "Tirar costillas lejos de fuente de calor", de: "Rippen von Wärmequelle wegziehen", nl: "Ribs wegtrekken van warmtebron" },
          { en: "The technique of pulling meat off bones", es: "La técnica de tirar carne de huesos", de: "Die Technik Fleisch von Knochen zu ziehen", nl: "De techniek van vlees van botten trekken" },
          { en: "Removing the membrane from ribs", es: "Eliminar la membrana de las costillas", de: "Membran von Rippen entfernen", nl: "Membraan van ribs verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Pullback or retraction is when the meat shrinks away from the bone ends during cooking, exposing about 1/4 to 1/2 inch of bone. This visible indicator shows that fat and connective tissue have rendered properly and the ribs are likely done.",
          es: "Pullback o retracción es cuando la carne se encoge de los extremos de hueso durante la cocción, exponiendo aproximadamente 1/4 a 1/2 pulgada de hueso. Este indicador visible muestra que grasa y tejido conectivo se han renderizado correctamente y las costillas probablemente están listas.",
          de: "Pullback oder Retraktion ist wenn Fleisch während des Kochens von den Knochenenden schrumpft und etwa 1/4 bis 1/2 Zoll Knochen freilegt. Dieser sichtbare Indikator zeigt dass Fett und Bindegewebe richtig gerendert wurden und die Rippen wahrscheinlich fertig sind.",
          nl: "Pullback of retractie is wanneer vlees tijdens het koken van de bot uiteinden krimpt en ongeveer 1/4 tot 1/2 inch bot blootlegt. Deze zichtbare indicator toont dat vet en bindweefsel goed zijn gerenderd en de ribs waarschijnlijk klaar zijn."
        }
      },
      {
        question: {
          en: "What is the difference between 'direct' and 'indirect' grilling?",
          es: "¿Cuál es la diferencia entre asado 'directo' e 'indirecto'?",
          de: "Was ist der Unterschied zwischen 'direktem' und 'indirektem' Grillen?",
          nl: "Wat is het verschil tussen 'direct' en 'indirect' grillen?"
        },
        options: [
          { en: "Direct: meat over heat source; indirect: heat to the side of meat", es: "Directo: carne sobre fuente de calor; indirecto: calor al lado de carne", de: "Direkt: Fleisch über Hitzequelle; indirekt: Hitze seitlich vom Fleisch", nl: "Direct: vlees boven hittebron; indirect: hitte aan de zijkant van vlees" },
          { en: "Direct: high temp; indirect: low temp", es: "Directo: temperatura alta; indirecto: temperatura baja", de: "Direkt: hohe Temp; indirekt: niedrige Temp", nl: "Direct: hoge temp; indirect: lage temp" },
          { en: "Direct: with lid; indirect: without lid", es: "Directo: con tapa; indirecto: sin tapa", de: "Direkt: mit Deckel; indirekt: ohne Deckel", nl: "Direct: met deksel; indirect: zonder deksel" },
          { en: "Direct: gas grill; indirect: charcoal", es: "Directo: parrilla de gas; indirecto: carbón", de: "Direkt: Gasgrill; indirekt: Holzkohle", nl: "Direct: gasgrill; indirect: houtskool" }
        ],
        correct: 0,
        explanation: {
          en: "Direct grilling places food directly over the heat source for searing and quick cooking. Indirect grilling positions food to the side of heat, using convection like an oven for slower, gentler cooking.",
          es: "El asado directo coloca comida directamente sobre fuente de calor para sellar y cocción rápida. El asado indirecto posiciona comida al lado del calor, usando convección como horno para cocción más lenta y suave.",
          de: "Direktes Grillen platziert Essen direkt über Hitzequelle zum Anbraten und schnellem Kochen. Indirektes Grillen positioniert Essen seitlich von Hitze, nutzt Konvektion wie Ofen für langsameres, sanfteres Kochen.",
          nl: "Direct grillen plaatst voedsel direct boven hittebron voor dichtschroeien en snel koken. Indirect grillen positioneert voedsel aan zijkant van hitte, gebruikt convectie zoals oven voor langzamer, zachter koken."
        }
      },
      {
        question: {
          en: "What wood is best for smoking fish?",
          es: "¿Qué madera es mejor para ahumar pescado?",
          de: "Welches Holz ist am besten zum Räuchern von Fisch?",
          nl: "Welk hout is het beste voor het roken van vis?"
        },
        options: [
          { en: "Alder or fruit woods like apple", es: "Aliso o maderas frutales como manzana", de: "Erle oder Obsthölzer wie Apfel", nl: "Els of fruitbomen zoals appel" },
          { en: "Mesquite for strong flavor", es: "Mezquite para sabor fuerte", de: "Mesquite für starken Geschmack", nl: "Mesquite voor sterke smaak" },
          { en: "Oak for heavy smoke", es: "Roble para humo pesado", de: "Eiche für schweren Rauch", nl: "Eik voor zware rook" },
          { en: "Hickory for intensity", es: "Nogal para intensidad", de: "Hickory für Intensität", nl: "Hickory voor intensiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Delicate fish benefits from mild woods like alder (traditional for salmon) or fruit woods. These provide subtle smoke flavor without overpowering the fish's natural taste.",
          es: "El pescado delicado se beneficia de maderas suaves como aliso (tradicional para salmón) o maderas frutales. Estas proporcionan sabor sutil a humo sin dominar el sabor natural del pescado.",
          de: "Zarter Fisch profitiert von milden Hölzern wie Erle (traditionell für Lachs) oder Obsthölzern. Diese bieten subtilen Rauchgeschmack ohne den natürlichen Geschmack des Fisches zu überwältigen.",
          nl: "Delicate vis heeft baat bij milde houtsoorten zoals els (traditioneel voor zalm) of fruitbomen. Deze bieden subtiele rooksmaak zonder de natuurlijke smaak van vis te overheersen."
        }
      },
      {
        question: {
          en: "What is a 'rib rack' used for?",
          es: "¿Para qué se usa un 'rib rack'?",
          de: "Wofür wird ein 'Rib Rack' verwendet?",
          nl: "Waarvoor wordt een 'rib rack' gebruikt?"
        },
        options: [
          { en: "Holds ribs upright to maximize smoker space", es: "Sostiene costillas verticalmente para maximizar espacio del ahumador", de: "Hält Rippen aufrecht um Smoker-Platz zu maximieren", nl: "Houdt ribs rechtop om smoker ruimte te maximaliseren" },
          { en: "Stores ribs in refrigerator", es: "Almacena costillas en refrigerador", de: "Lagert Rippen im Kühlschrank", nl: "Bewaart ribs in koelkast" },
          { en: "Cuts ribs into portions", es: "Corta costillas en porciones", de: "Schneidet Rippen in Portionen", nl: "Snijdt ribs in porties" },
          { en: "Seasons ribs evenly", es: "Sazona costillas uniformemente", de: "Würzt Rippen gleichmäßig", nl: "Kruidt ribs gelijkmatig" }
        ],
        correct: 0,
        explanation: {
          en: "A rib rack holds multiple racks of ribs in an upright vertical position, allowing you to smoke more ribs in the same space while ensuring even smoke circulation.",
          es: "Un rib rack sostiene múltiples parrillas de costillas en posición vertical, permitiendo ahumar más costillas en el mismo espacio mientras asegura circulación uniforme de humo.",
          de: "Ein Rib Rack hält mehrere Rippenracks in aufrechter vertikaler Position, ermöglicht mehr Rippen im gleichen Raum zu räuchern während gleichmäßige Rauchzirkulation gewährleistet wird.",
          nl: "Een rib rack houdt meerdere racks ribs in rechtopstaande verticale positie, wat toestaat meer ribs te roken in dezelfde ruimte terwijl gelijkmatige rookcirculatie verzekerd is."
        }
      },
      {
        question: {
          en: "What is 'Alabama white sauce' traditionally served with?",
          es: "¿Con qué se sirve tradicionalmente la 'salsa blanca de Alabama'?",
          de: "Womit wird 'Alabama White Sauce' traditionell serviert?",
          nl: "Waarmee wordt 'Alabama white sauce' traditioneel geserveerd?"
        },
        options: [
          { en: "Smoked chicken", es: "Pollo ahumado", de: "Geräuchertes Hähnchen", nl: "Gerookte kip" },
          { en: "Brisket", es: "Pecho de res", de: "Brisket", nl: "Brisket" },
          { en: "Pork ribs", es: "Costillas de cerdo", de: "Schweinerippchen", nl: "Varkensribs" },
          { en: "Pulled pork", es: "Cerdo desmenuzado", de: "Pulled Pork", nl: "Pulled pork" }
        ],
        correct: 0,
        explanation: {
          en: "Alabama white sauce is a mayonnaise-based sauce with vinegar and spices, traditionally served with smoked chicken. It was created by Big Bob Gibson in northern Alabama.",
          es: "La salsa blanca de Alabama es una salsa a base de mayonesa con vinagre y especias, tradicionalmente servida con pollo ahumado. Fue creada por Big Bob Gibson en el norte de Alabama.",
          de: "Alabama White Sauce ist eine Mayonnaise-basierte Sauce mit Essig und Gewürzen, traditionell mit geräuchertem Hähnchen serviert. Sie wurde von Big Bob Gibson in Nord-Alabama kreiert.",
          nl: "Alabama white sauce is een mayonaise-gebaseerde saus met azijn en kruiden, traditioneel geserveerd met gerookte kip. Het werd gecreëerd door Big Bob Gibson in noord-Alabama."
        }
      },
      {
        question: {
          en: "What is the purpose of trimming brisket fat cap?",
          es: "¿Cuál es el propósito de recortar la capa de grasa del brisket?",
          de: "Was ist der Zweck des Trimmens der Brisket-Fettkappe?",
          nl: "Wat is het doel van het trimmen van brisket vetlaag?"
        },
        options: [
          { en: "Allow smoke and seasoning penetration, typically to 1/4 inch", es: "Permitir penetración de humo y condimento, típicamente a 1/4 pulgada", de: "Rauch- und Würzungspenetration ermöglichen, typisch auf 1/4 Zoll", nl: "Rook en kruiding penetratie toestaan, typisch tot 1/4 inch" },
          { en: "Remove all fat for health", es: "Eliminar toda grasa por salud", de: "Alles Fett für Gesundheit entfernen", nl: "Al het vet verwijderen voor gezondheid" },
          { en: "Make it cook faster", es: "Hacer que cocine más rápido", de: "Schneller garen lassen", nl: "Het sneller laten koken" },
          { en: "Reduce calorie content", es: "Reducir contenido calórico", de: "Kaloriengehalt reduzieren", nl: "Caloriegehalte verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Trimming the fat cap to about 1/4 inch allows smoke and rub to penetrate while still providing enough fat to baste the meat during cooking. Too much fat blocks flavor; too little leads to drying.",
          es: "Recortar la capa de grasa a aproximadamente 1/4 pulgada permite que humo y condimento penetren mientras proporciona suficiente grasa para rociar la carne durante cocción. Demasiada grasa bloquea sabor; muy poca lleva a secado.",
          de: "Das Trimmen der Fettkappe auf etwa 1/4 Zoll ermöglicht Rauch und Rub zu penetrieren während noch genug Fett zum Bestreichen des Fleisches während des Garens bereitgestellt wird. Zu viel Fett blockiert Geschmack; zu wenig führt zum Austrocknen.",
          nl: "Het trimmen van vetlaag tot ongeveer 1/4 inch staat rook en rub toe te penetreren terwijl nog genoeg vet wordt geboden om vlees tijdens koken te begieten. Te veel vet blokkeert smaak; te weinig leidt tot uitdrogen."
        }
      },
      {
        question: {
          en: "What temp should turkey reach when smoking?",
          es: "¿Qué temperatura debe alcanzar el pavo al ahumar?",
          de: "Welche Temperatur sollte Truthahn beim Räuchern erreichen?",
          nl: "Welke temperatuur moet kalkoen bereiken bij roken?"
        },
        options: [
          { en: "165°F (74°C) in the thickest part of breast", es: "165°F (74°C) en la parte más gruesa de la pechuga", de: "165°F (74°C) im dicksten Teil der Brust", nl: "165°F (74°C) in het dikste deel van de borst" },
          { en: "145°F (63°C) throughout", es: "145°F (63°C) en todo", de: "145°F (63°C) durchgehend", nl: "145°F (63°C) overal" },
          { en: "195°F (90°C) like brisket", es: "195°F (90°C) como brisket", de: "195°F (90°C) wie Brisket", nl: "195°F (90°C) zoals brisket" },
          { en: "180°F (82°C) minimum", es: "180°F (82°C) mínimo", de: "180°F (82°C) mindestens", nl: "180°F (82°C) minimaal" }
        ],
        correct: 0,
        explanation: {
          en: "Turkey must reach 165°F in the breast and 175°F in the thigh for food safety. The breast is the limiting factor as it's the last part to reach safe temp.",
          es: "El pavo debe alcanzar 165°F en la pechuga y 175°F en el muslo por seguridad alimentaria. La pechuga es el factor limitante ya que es la última parte en alcanzar temperatura segura.",
          de: "Truthahn muss 165°F in der Brust und 175°F im Schenkel für Lebensmittelsicherheit erreichen. Die Brust ist der limitierende Faktor da sie der letzte Teil ist der sichere Temp erreicht.",
          nl: "Kalkoen moet 165°F in de borst en 175°F in de dij bereiken voor voedselveiligheid. De borst is de beperkende factor omdat het het laatste deel is dat veilige temp bereikt."
        }
      },
      {
        question: {
          en: "What is 'pellicle' formation in smoking fish?",
          es: "¿Qué es la formación de 'pellicle' al ahumar pescado?",
          de: "Was ist 'Pellicle'-Bildung beim Räuchern von Fisch?",
          nl: "Wat is 'pellicle' vorming bij het roken van vis?"
        },
        options: [
          { en: "Tacky protein layer that helps smoke adhere", es: "Capa proteica pegajosa que ayuda al humo adherirse", de: "Klebrige Proteinschicht die Rauch beim Anhaften hilft", nl: "Plakkerige eiwitlaag die rook helpt hechten" },
          { en: "Crispy skin on smoked fish", es: "Piel crujiente en pescado ahumado", de: "Knusprige Haut auf geräuchertem Fisch", nl: "Knapperige huid op gerookte vis" },
          { en: "Salt cure layer", es: "Capa de curado con sal", de: "Salzreifungsschicht", nl: "Zoutcure laag" },
          { en: "Smoke ring in fish", es: "Anillo de humo en pescado", de: "Rauchring in Fisch", nl: "Rookring in vis" }
        ],
        correct: 0,
        explanation: {
          en: "Pellicle is a tacky, glossy coating that forms on fish surface after air-drying. It helps smoke particles adhere evenly and creates a barrier that seals in moisture during smoking.",
          es: "Pellicle es un recubrimiento pegajoso y brillante que se forma en superficie de pescado después de secar al aire. Ayuda a partículas de humo adherirse uniformemente y crea barrera que sella humedad durante ahumado.",
          de: "Pellicle ist eine klebrige, glänzende Beschichtung die sich auf Fischoberfläche nach Lufttrocknung bildet. Sie hilft Rauchpartikeln gleichmäßig zu haften und schafft Barriere die Feuchtigkeit während Räuchern versiegelt.",
          nl: "Pellicle is een plakkerige, glanzende coating die zich vormt op visoppervlak na luchtdrogen. Het helpt rookdeeltjes gelijkmatig hechten en creëert barrière die vocht tijdens roken verzegelt."
        }
      },
      {
        question: {
          en: "Why is pink smoke ring purely cosmetic?",
          es: "¿Por qué el anillo de humo rosa es puramente cosmético?",
          de: "Warum ist der rosa Rauchring rein kosmetisch?",
          nl: "Waarom is roze rookring puur cosmetisch?"
        },
        options: [
          { en: "It doesn't indicate doneness or add flavor, just visual appeal", es: "No indica cocción ni añade sabor, solo atractivo visual", de: "Es zeigt keine Garung an oder fügt Geschmack hinzu, nur visuellen Reiz", nl: "Het duidt geen gaarheid aan of voegt smaak toe, alleen visuele aantrekkelijkheid" },
          { en: "It means the meat is undercooked", es: "Significa que la carne está poco cocida", de: "Es bedeutet das Fleisch ist nicht durchgegart", nl: "Het betekent dat vlees niet gaar is" },
          { en: "It adds sweet flavor", es: "Añade sabor dulce", de: "Es fügt süßen Geschmack hinzu", nl: "Het voegt zoete smaak toe" },
          { en: "It makes meat more tender", es: "Hace la carne más tierna", de: "Es macht Fleisch zarter", nl: "Het maakt vlees malser" }
        ],
        correct: 0,
        explanation: {
          en: "The smoke ring is a chemical reaction between smoke and myoglobin that creates pink color, but doesn't affect flavor or tenderness. Some competitions no longer judge on it since it can be faked.",
          es: "El anillo de humo es una reacción química entre humo y mioglobina que crea color rosa, pero no afecta sabor o ternura. Algunas competencias ya no juzgan por ello ya que puede falsificarse.",
          de: "Der Rauchring ist eine chemische Reaktion zwischen Rauch und Myoglobin die rosa Farbe erzeugt, aber Geschmack oder Zartheit nicht beeinflusst. Einige Wettbewerbe beurteilen nicht mehr danach da es gefälscht werden kann.",
          nl: "De rookring is een chemische reactie tussen rook en myoglobine die roze kleur creëert, maar smaak of malsheid niet beïnvloedt. Sommige competities beoordelen er niet meer op omdat het kan worden vervalst."
        }
      },
      {
        question: {
          en: "What is 'rendering' in BBQ context?",
          es: "¿Qué es 'rendering' en contexto BBQ?",
          de: "Was ist 'Rendering' im BBQ-Kontext?",
          nl: "Wat is 'rendering' in BBQ context?"
        },
        options: [
          { en: "Fat melting and breaking down during cooking", es: "Grasa derritiéndose y descomponiéndose durante cocción", de: "Fett schmelzen und abbauen während Kochen", nl: "Vet smelten en afbreken tijdens koken" },
          { en: "Final plating presentation", es: "Presentación final en plato", de: "Finale Anrichtung", nl: "Finale opmaak presentatie" },
          { en: "Smoke production process", es: "Proceso de producción de humo", de: "Rauchproduktionsprozess", nl: "Rookproductie proces" },
          { en: "Temperature control method", es: "Método de control de temperatura", de: "Temperaturkontrollmethode", nl: "Temperatuur controle methode" }
        ],
        correct: 0,
        explanation: {
          en: "Rendering is the process where fat melts and breaks down during low and slow cooking. Proper rendering self-bastes meat, creates moisture, and develops flavor without leaving greasy fat.",
          es: "Rendering es el proceso donde grasa se derrite y descompone durante cocción baja y lenta. Rendering adecuado auto-riega carne, crea humedad y desarrolla sabor sin dejar grasa grasosa.",
          de: "Rendering ist der Prozess wo Fett schmilzt und abbaut während langsamem Garen. Richtiges Rendering begießt Fleisch selbst, schafft Feuchtigkeit und entwickelt Geschmack ohne fettiges Fett zu hinterlassen.",
          nl: "Rendering is het proces waar vet smelt en afbreekt tijdens laag en langzaam koken. Goed rendering begiet vlees zelf, creëert vocht en ontwikkelt smaak zonder vettig vet achter te laten."
        }
      },
      {
        question: {
          en: "What is a 'drip pan' primarily used for?",
          es: "¿Para qué se usa principalmente una 'bandeja de goteo'?",
          de: "Wofür wird eine 'Tropfschale' hauptsächlich verwendet?",
          nl: "Waarvoor wordt een 'druppelpan' voornamelijk gebruikt?"
        },
        options: [
          { en: "Catch drippings to prevent flare-ups and make gravy", es: "Atrapar goteos para prevenir llamaradas y hacer salsa", de: "Tropfen auffangen um Stichflammen zu verhindern und Soße zu machen", nl: "Druppels opvangen om vlammen te voorkomen en jus te maken" },
          { en: "Add moisture to smoker", es: "Añadir humedad al ahumador", de: "Feuchtigkeit zum Smoker hinzufügen", nl: "Vocht aan smoker toevoegen" },
          { en: "Hold wood chips", es: "Sostener astillas de madera", de: "Holzspäne halten", nl: "Houtsnippers houden" },
          { en: "Season the meat", es: "Sazonar la carne", de: "Fleisch würzen", nl: "Vlees kruiden" }
        ],
        correct: 0,
        explanation: {
          en: "A drip pan catches fat and juices falling from meat, preventing flare-ups and keeping the smoker clean. The drippings can be used to make au jus or gravy.",
          es: "Una bandeja de goteo atrapa grasa y jugos que caen de carne, previniendo llamaradas y manteniendo limpio el ahumador. Los goteos pueden usarse para hacer au jus o salsa.",
          de: "Eine Tropfschale fängt Fett und Säfte auf die vom Fleisch fallen, verhindert Stichflammen und hält Smoker sauber. Die Tropfen können für Au Jus oder Soße verwendet werden.",
          nl: "Een druppelpan vangt vet en sappen die van vlees vallen, voorkomt vlammen en houdt smoker schoon. De druppels kunnen gebruikt worden om au jus of jus te maken."
        }
      },
      {
        question: {
          en: "What is 'St. Louis style' ribs?",
          es: "¿Qué son las costillas 'estilo St. Louis'?",
          de: "Was sind 'St. Louis Style' Rippen?",
          nl: "Wat zijn 'St. Louis style' ribs?"
        },
        options: [
          { en: "Spare ribs trimmed to remove cartilage and rib tips for uniform shape", es: "Spare ribs recortadas para remover cartílago y puntas para forma uniforme", de: "Spare Ribs zugeschnitten um Knorpel und Rippenspitzen für gleichmäßige Form zu entfernen", nl: "Spare ribs getrimd om kraakbeen en ribbenpunten te verwijderen voor uniforme vorm" },
          { en: "Baby back ribs with special seasoning", es: "Costillas baby back con condimento especial", de: "Baby Back Ribs mit spezieller Würzung", nl: "Baby back ribs met speciale kruiding" },
          { en: "Beef ribs from St. Louis", es: "Costillas de res de St. Louis", de: "Rinderrippen aus St. Louis", nl: "Rundvlees ribs uit St. Louis" },
          { en: "Ribs cooked at specific temperature", es: "Costillas cocidas a temperatura específica", de: "Rippen bei spezifischer Temperatur gekocht", nl: "Ribs gekookt op specifieke temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "St. Louis style ribs are spare ribs with the sternum bone, cartilage, and rib tips removed, creating a rectangular rack that cooks more evenly and presents better.",
          es: "Las costillas estilo St. Louis son spare ribs con hueso esternón, cartílago y puntas removidas, creando rejilla rectangular que cocina más uniformemente y se presenta mejor.",
          de: "St. Louis Style Rippen sind Spare Ribs mit entferntem Brustbein, Knorpel und Rippenspitzen, was ein rechteckiges Rack schafft das gleichmäßiger gart und besser aussieht.",
          nl: "St. Louis style ribs zijn spare ribs met borstbeen, kraakbeen en ribbenpunten verwijderd, wat een rechthoekig rek creëert dat gelijkmatiger kookt en beter presenteert."
        }
      },
      {
        question: {
          en: "What is a 'two-zone fire' setup?",
          es: "¿Qué es una configuración de 'fuego de dos zonas'?",
          de: "Was ist ein 'Zwei-Zonen-Feuer' Setup?",
          nl: "Wat is een 'two-zone fire' opstelling?"
        },
        options: [
          { en: "Coals on one side for direct heat, empty side for indirect", es: "Carbones en un lado para calor directo, lado vacío para indirecto", de: "Kohlen auf einer Seite für direkte Hitze, leere Seite für indirekt", nl: "Kolen aan één kant voor directe hitte, lege kant voor indirect" },
          { en: "Two different temperature zones vertically", es: "Dos zonas de temperatura diferentes verticalmente", de: "Zwei verschiedene Temperaturzonen vertikal", nl: "Twee verschillende temperatuurzones verticaal" },
          { en: "Using two types of charcoal", es: "Usar dos tipos de carbón", de: "Zwei Kohlearten verwenden", nl: "Twee soorten houtskool gebruiken" },
          { en: "Two separate grills", es: "Dos parrillas separadas", de: "Zwei separate Grills", nl: "Twee afzonderlijke grills" }
        ],
        correct: 0,
        explanation: {
          en: "A two-zone fire has hot coals banked on one side for direct high-heat searing, and an empty side for indirect low-heat cooking. This versatile setup allows both techniques simultaneously.",
          es: "Un fuego de dos zonas tiene carbones calientes apilados en un lado para sellado directo de alta temperatura, y lado vacío para cocción indirecta de baja temperatura. Esta configuración versátil permite ambas técnicas simultáneamente.",
          de: "Ein Zwei-Zonen-Feuer hat heiße Kohlen auf einer Seite für direktes Hochtemperatur-Anbraten, und leere Seite für indirektes Niedrigtemperatur-Garen. Dieses vielseitige Setup ermöglicht beide Techniken gleichzeitig.",
          nl: "Een two-zone fire heeft hete kolen opgestapeld aan één kant voor direct hoge-temperatuur dichtschroeien, en lege kant voor indirect lage-temperatuur koken. Deze veelzijdige opstelling staat beide technieken tegelijkertijd toe."
        }
      },
      {
        question: {
          en: "What's the main difference between lump charcoal and briquettes?",
          es: "¿Cuál es la diferencia principal entre carbón en trozos y briquetas?",
          de: "Was ist der Hauptunterschied zwischen Stückkohle und Briketts?",
          nl: "Wat is het belangrijkste verschil tussen brokken houtskool en briketten?"
        },
        options: [
          { en: "Lump is pure wood, burns hotter/faster; briquettes have binders, burn longer/steadier", es: "Trozo es madera pura, quema más caliente/rápido; briquetas tienen aglutinantes, queman más largo/estable", de: "Stück ist reines Holz, brennt heißer/schneller; Briketts haben Bindemittel, brennen länger/gleichmäßiger", nl: "Brok is puur hout, brandt heter/sneller; briketten hebben bindmiddelen, branden langer/stabieler" },
          { en: "Lump is cheaper than briquettes", es: "Trozo es más barato que briquetas", de: "Stück ist billiger als Briketts", nl: "Brok is goedkoper dan briketten" },
          { en: "Briquettes produce more smoke", es: "Briquetas producen más humo", de: "Briketts produzieren mehr Rauch", nl: "Briketten produceren meer rook" },
          { en: "No real difference in performance", es: "No hay diferencia real en rendimiento", de: "Kein wirklicher Unterschied in Leistung", nl: "Geen echt verschil in prestatie" }
        ],
        correct: 0,
        explanation: {
          en: "Lump charcoal is pure carbonized wood that burns hotter and cleaner but faster. Briquettes contain binders and burn more consistently for longer, making them better for low and slow smoking.",
          es: "Carbón en trozos es madera pura carbonizada que quema más caliente y limpio pero más rápido. Briquetas contienen aglutinantes y queman más consistentemente por más tiempo, haciéndolas mejores para ahumado bajo y lento.",
          de: "Stückkohle ist reine karbonisierte Holz die heißer und sauberer aber schneller brennt. Briketts enthalten Bindemittel und brennen konsistenter länger, was sie besser für Low and Slow Räuchern macht.",
          nl: "Brokken houtskool is puur verkoolde hout die heter en schoner maar sneller brandt. Briketten bevatten bindmiddelen en branden consistenter langer, wat ze beter maakt voor low and slow roken."
        }
      },
      {
        question: {
          en: "What is 'cherry wood' smoke flavor profile?",
          es: "¿Cuál es el perfil de sabor de humo de 'madera de cerezo'?",
          de: "Was ist das 'Kirschholz' Rauchgeschmacks-Profil?",
          nl: "Wat is het 'kersenhout' rooksmaak profiel?"
        },
        options: [
          { en: "Mild, slightly sweet, fruity - good for poultry and pork", es: "Suave, ligeramente dulce, afrutado - bueno para aves y cerdo", de: "Mild, leicht süß, fruchtig - gut für Geflügel und Schwein", nl: "Mild, licht zoet, fruitig - goed voor gevogelte en varkensvlees" },
          { en: "Very strong and intense", es: "Muy fuerte e intenso", de: "Sehr stark und intensiv", nl: "Zeer sterk en intens" },
          { en: "Bitter and sharp", es: "Amargo y agudo", de: "Bitter und scharf", nl: "Bitter en scherp" },
          { en: "No distinct flavor", es: "Sin sabor distinto", de: "Kein ausgeprägter Geschmack", nl: "Geen onderscheidende smaak" }
        ],
        correct: 0,
        explanation: {
          en: "Cherry wood produces mild, slightly sweet, fruity smoke that pairs well with poultry, pork, and lighter meats. It also adds an attractive mahogany color to the meat.",
          es: "Madera de cerezo produce humo suave, ligeramente dulce y afrutado que combina bien con aves, cerdo y carnes más ligeras. También añade color caoba atractivo a la carne.",
          de: "Kirschholz produziert milden, leicht süßen, fruchtigen Rauch der gut zu Geflügel, Schwein und helleren Fleischsorten passt. Es fügt auch attraktive Mahagonifarbe zum Fleisch hinzu.",
          nl: "Kersenhout produceert milde, licht zoete, fruitige rook die goed past bij gevogelte, varkensvlees en lichtere vleeswaren. Het voegt ook aantrekkelijke mahonie kleur toe aan vlees."
        }
      },
      {
        question: {
          en: "What does 'carryover cooking' mean?",
          es: "¿Qué significa 'cocción residual'?",
          de: "Was bedeutet 'Nachgaren'?",
          nl: "Wat betekent 'nagaren'?"
        },
        options: [
          { en: "Meat continues cooking after removal from heat due to residual heat", es: "Carne continúa cocinando después de remover del calor debido a calor residual", de: "Fleisch gart weiter nach Entfernung von Hitze aufgrund Restwärme", nl: "Vlees blijft koken na verwijdering van hitte vanwege resterende warmte" },
          { en: "Transferring meat between grills", es: "Transferir carne entre parrillas", de: "Fleisch zwischen Grills transferieren", nl: "Vlees overbrengen tussen grills" },
          { en: "Leftover BBQ for next day", es: "Sobras de BBQ para día siguiente", de: "Übrige BBQ für nächsten Tag", nl: "Overgebleven BBQ voor volgende dag" },
          { en: "Using same rub on different meats", es: "Usar mismo condimento en diferentes carnes", de: "Gleichen Rub auf verschiedenen Fleischsorten verwenden", nl: "Zelfde rub gebruiken op verschillende vleeswaren" }
        ],
        correct: 0,
        explanation: {
          en: "Carryover cooking occurs when meat's internal temperature continues rising 5-10°F after removal from heat. This is why you should pull meat slightly before target temp and rest it.",
          es: "Cocción residual ocurre cuando temperatura interna de carne continúa subiendo 5-10°F después de remover del calor. Por esto debe sacar carne ligeramente antes de temperatura objetivo y reposarla.",
          de: "Nachgaren tritt auf wenn Fleischinnentemperatur weiter 5-10°F nach Entfernung von Hitze steigt. Deshalb sollte man Fleisch etwas vor Zieltemp entfernen und ruhen lassen.",
          nl: "Nagaren treedt op wanneer interne temperatuur van vlees blijft stijgen 5-10°F na verwijdering van hitte. Daarom moet je vlees iets voor doeltemp weghalen en laten rusten."
        }
      },
      {
        question: {
          en: "What is the 'Texas Crutch' technique?",
          es: "¿Qué es la técnica 'Texas Crutch'?",
          de: "Was ist die 'Texas Crutch' Technik?",
          nl: "Wat is de 'Texas Crutch' techniek?"
        },
        options: [
          { en: "Wrapping meat in foil during stall to push through faster", es: "Envolver carne en papel aluminio durante estancamiento para avanzar más rápido", de: "Fleisch in Folie während Stall wickeln um schneller durchzukommen", nl: "Vlees in folie wikkelen tijdens stall om sneller door te komen" },
          { en: "Using mesquite wood only", es: "Usar solo madera de mezquite", de: "Nur Mesquite-Holz verwenden", nl: "Alleen mesquite hout gebruiken" },
          { en: "Serving brisket with white bread", es: "Servir brisket con pan blanco", de: "Brisket mit Weißbrot servieren", nl: "Brisket serveren met wit brood" },
          { en: "Resting meat in cooler", es: "Reposar carne en hielera", de: "Fleisch in Kühlbox ruhen", nl: "Vlees in koelbox rusten" }
        ],
        correct: 0,
        explanation: {
          en: "The Texas Crutch wraps meat (usually brisket) in foil when it hits the stall around 150-170°F. This speeds cooking by trapping moisture and heat, though it can soften bark.",
          es: "El Texas Crutch envuelve carne (usualmente brisket) en papel aluminio cuando golpea estancamiento alrededor 150-170°F. Esto acelera cocción atrapando humedad y calor, aunque puede ablandar corteza.",
          de: "Die Texas Crutch wickelt Fleisch (meist Brisket) in Folie wenn es Stall um 150-170°F erreicht. Dies beschleunigt Garen durch Einschließen von Feuchtigkeit und Hitze, kann aber Bark weicher machen.",
          nl: "De Texas Crutch wikkelt vlees (meestal brisket) in folie wanneer het stall rond 150-170°F bereikt. Dit versnelt koken door vocht en hitte vast te houden, hoewel het bark zachter kan maken."
        }
      },
      {
        question: {
          en: "Why should you not use lighter fluid on charcoal?",
          es: "¿Por qué no deberías usar líquido encendedor en carbón?",
          de: "Warum sollte man kein Grillanzünder auf Holzkohle verwenden?",
          nl: "Waarom moet je geen aansteek vloeistof op houtskool gebruiken?"
        },
        options: [
          { en: "It imparts chemical taste to food if not fully burned off", es: "Imparte sabor químico a comida si no se quema completamente", de: "Es verleiht Essen chemischen Geschmack wenn nicht vollständig verbrannt", nl: "Het geeft chemische smaak aan voedsel als niet volledig verbrand" },
          { en: "It's too expensive", es: "Es demasiado caro", de: "Es ist zu teuer", nl: "Het is te duur" },
          { en: "It makes fire too hot", es: "Hace fuego demasiado caliente", de: "Es macht Feuer zu heiß", nl: "Het maakt vuur te heet" },
          { en: "It damages the grill", es: "Daña la parrilla", de: "Es beschädigt den Grill", nl: "Het beschadigt de grill" }
        ],
        correct: 0,
        explanation: {
          en: "Lighter fluid leaves chemical residue that can transfer unpleasant petroleum flavors to food. Better alternatives are chimney starters, electric starters, or natural fire starters.",
          es: "Líquido encendedor deja residuo químico que puede transferir sabores desagradables de petróleo a comida. Mejores alternativas son chimenea de arranque, arrancadores eléctricos o arrancadores naturales.",
          de: "Grillanzünder hinterlässt chemische Rückstände die unangenehme Petroleumaromen auf Essen übertragen können. Bessere Alternativen sind Anzündkamine, elektrische Anzünder oder natürliche Anzünder.",
          nl: "Aansteek vloeistof laat chemische resten achter die onaangename petroleum smaken aan voedsel kunnen overdragen. Betere alternatieven zijn schoorsteenstarters, elektrische starters of natuurlijke aanstekers."
        }
      },
      {
        question: {
          en: "What is a 'snake method' for charcoal arrangement?",
          es: "¿Qué es el 'método serpiente' para arreglo de carbón?",
          de: "Was ist die 'Schlangen-Methode' für Holzkohle-Anordnung?",
          nl: "Wat is de 'slang methode' voor houtskool rangschikking?"
        },
        options: [
          { en: "Arranging unlit coals in C-shape, lighting one end for slow burn", es: "Arreglar carbones sin encender en forma C, encender un extremo para quemado lento", de: "Unangezündete Kohlen in C-Form anordnen, ein Ende anzünden für langsames Brennen", nl: "Niet-aangestoken kolen in C-vorm rangschikken, één kant aansteken voor langzaam branden" },
          { en: "Zigzag pattern for even heat", es: "Patrón zigzag para calor uniforme", de: "Zickzackmuster für gleichmäßige Hitze", nl: "Zigzag patroon voor gelijke hitte" },
          { en: "Spiral arrangement from center", es: "Arreglo en espiral desde centro", de: "Spiralarrangement von Mitte", nl: "Spiraal rangschikking vanaf centrum" },
          { en: "Random scattered placement", es: "Colocación dispersa aleatoria", de: "Zufällige verstreute Platzierung", nl: "Willekeurige verspreide plaatsing" }
        ],
        correct: 0,
        explanation: {
          en: "The snake method arranges unlit charcoal in a C or semicircle shape around the grill. Light one end and it burns slowly down the line, providing 8-12 hours of steady heat for low and slow cooking.",
          es: "El método serpiente arregla carbón sin encender en forma C o semicírculo alrededor de parrilla. Enciende un extremo y quema lentamente por la línea, proporcionando 8-12 horas de calor constante para cocción baja y lenta.",
          de: "Die Schlangen-Methode ordnet unangezündete Holzkohle in C- oder Halbkreisform um Grill an. Ein Ende anzünden und es brennt langsam die Linie entlang, bietet 8-12 Stunden gleichmäßige Hitze für Low and Slow Garen.",
          nl: "De slang methode rangschikt niet-aangestoken houtskool in C of halve cirkel vorm rond grill. Steek één kant aan en het brandt langzaam langs de lijn, wat 8-12 uur stabiele hitte biedt voor low and slow koken."
        }
      },
      {
        question: {
          en: "What makes hickory wood popular for smoking?",
          es: "¿Qué hace popular la madera de nogal para ahumar?",
          de: "Was macht Hickory-Holz zum Räuchern beliebt?",
          nl: "Wat maakt hickory hout populair voor roken?"
        },
        options: [
          { en: "Strong, bacon-like flavor that pairs well with pork and ribs", es: "Sabor fuerte similar a tocino que combina bien con cerdo y costillas", de: "Starker, speckähnlicher Geschmack der gut zu Schwein und Rippen passt", nl: "Sterke, bacon-achtige smaak die goed past bij varkensvlees en ribs" },
          { en: "It's the cheapest wood available", es: "Es la madera más barata disponible", de: "Es ist das billigste verfügbare Holz", nl: "Het is het goedkoopste beschikbare hout" },
          { en: "Burns longer than other woods", es: "Quema más tiempo que otras maderas", de: "Brennt länger als andere Hölzer", nl: "Brandt langer dan andere houtsoorten" },
          { en: "Produces very mild flavor", es: "Produce sabor muy suave", de: "Produziert sehr milden Geschmack", nl: "Produceert zeer milde smaak" }
        ],
        correct: 0,
        explanation: {
          en: "Hickory is one of the most popular smoking woods due to its strong, sweet, bacon-like flavor. It's particularly well-suited for pork, ribs, and ham, but can overpower delicate meats if used too heavily.",
          es: "Nogal es una de las maderas más populares para ahumar debido a su sabor fuerte, dulce, similar a tocino. Es particularmente adecuado para cerdo, costillas y jamón, pero puede dominar carnes delicadas si se usa demasiado.",
          de: "Hickory ist eines der beliebtesten Räucherhölzer aufgrund seines starken, süßen, speckähnlichen Geschmacks. Es ist besonders geeignet für Schwein, Rippen und Schinken, kann aber zarte Fleischsorten überwältigen wenn zu stark verwendet.",
          nl: "Hickory is een van de populairste rookhoutsoorten vanwege zijn sterke, zoete, bacon-achtige smaak. Het is bijzonder geschikt voor varkensvlees, ribs en ham, maar kan delicate vleeswaren overheersen als te zwaar gebruikt."
        }
      },
      {
        question: {
          en: "What is 'competition trim' for brisket?",
          es: "¿Qué es el 'recorte de competición' para brisket?",
          de: "Was ist 'Competition Trim' für Brisket?",
          nl: "Wat is 'competitie trim' voor brisket?"
        },
        options: [
          { en: "Precise trimming of fat to 1/4 inch and removing hard fat for optimal presentation", es: "Recorte preciso de grasa a 1/4 pulgada y remover grasa dura para presentación óptima", de: "Präzises Trimmen von Fett auf 1/4 Zoll und Entfernung hartem Fett für optimale Präsentation", nl: "Precieze trim van vet tot 1/4 inch en verwijderen hard vet voor optimale presentatie" },
          { en: "Removing all fat completely", es: "Eliminar toda grasa completamente", de: "Alles Fett vollständig entfernen", nl: "Al het vet volledig verwijderen" },
          { en: "Cutting brisket into equal portions", es: "Cortar brisket en porciones iguales", de: "Brisket in gleiche Portionen schneiden", nl: "Brisket snijden in gelijke porties" },
          { en: "Leaving fat cap intact", es: "Dejar capa de grasa intacta", de: "Fettkappe intakt lassen", nl: "Vetlaag intact laten" }
        ],
        correct: 0,
        explanation: {
          en: "Competition trim involves carefully trimming fat cap to about 1/4 inch thickness, removing hard fat, silver skin, and shaping for even cooking and beautiful presentation that judges expect.",
          es: "Recorte de competición implica recortar cuidadosamente capa de grasa a aproximadamente 1/4 pulgada de grosor, remover grasa dura, piel plateada y dar forma para cocción uniforme y bella presentación que jueces esperan.",
          de: "Competition Trim beinhaltet sorgfältiges Trimmen der Fettkappe auf etwa 1/4 Zoll Dicke, Entfernung hartem Fett, Silberhaut und Formung für gleichmäßiges Garen und schöne Präsentation die Richter erwarten.",
          nl: "Competitie trim houdt zorgvuldig trimmen van vetlaag tot ongeveer 1/4 inch dikte in, verwijderen hard vet, zilvervlies en vormgeven voor gelijkmatig koken en mooie presentatie die juryleden verwachten."
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
})();
