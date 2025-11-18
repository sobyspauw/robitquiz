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