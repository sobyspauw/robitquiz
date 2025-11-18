// Barbecue Quiz - Level 4: Expert BBQ and Regional Styles
(function() {
  const level4 = {
    name: {
      en: "Barbecue Level 4: Expert Techniques & Regional Styles",
      es: "Barbacoa Nivel 4: Técnicas Expertas y Estilos Regionales",
      de: "Grillen Stufe 4: Experten-Techniken & Regionale Stile",
      nl: "Barbecue Level 4: Expert Technieken & Regionale Stijlen"
    },
    questions: [
      {
        question: {
          en: "What is 'kamado' style cooking and what makes it unique?",
          es: "¿Qué es la cocción estilo 'kamado' y qué la hace única?",
          de: "Was ist 'Kamado'-Style Kochen und was macht es einzigartig?",
          nl: "Wat is 'kamado' stijl koken en wat maakt het uniek?"
        },
        options: [
          { en: "Ceramic egg-shaped cooker with excellent heat retention and airflow control", es: "Cocinero de cerámica en forma de huevo con excelente retención de calor y control de flujo de aire", de: "Keramischer eiförmiger Kocher mit ausgezeichneter Wärmespeicherung und Luftstromkontrolle", nl: "Keramische eivormige kooktoestel met uitstekende warmte retentie en luchtstroom controle" },
          { en: "Japanese grilling over open flames", es: "Asado japonés sobre llamas abiertas", de: "Japanisches Grillen über offenen Flammen", nl: "Japans grillen boven open vlammen" },
          { en: "Using only bamboo charcoal", es: "Usar solo carbón de bambú", de: "Nur Bambuskohle verwenden", nl: "Alleen bamboe houtskool gebruiken" },
          { en: "Smoking with sake-soaked wood", es: "Ahumar con madera empapada en sake", de: "Räuchern mit Sake-getränktem Holz", nl: "Roken met sake-doordrenkt hout" }
        ],
        correct: 0,
        explanation: {
          en: "Kamado grills are ceramic, egg-shaped cookers that originated in Japan. Their thick ceramic walls provide exceptional heat retention, even temperature distribution, and precise airflow control for both high-heat grilling and low-and-slow smoking.",
          es: "Las parrillas kamado son cocedores de cerámica en forma de huevo que se originaron en Japón. Sus gruesas paredes de cerámica proporcionan retención de calor excepcional, distribución uniforme de temperatura y control preciso del flujo de aire para asado a alta temperatura y ahumado lento.",
          de: "Kamado-Grills sind keramische, eiförmige Kocher, die aus Japan stammen. Ihre dicken Keramikwände bieten außergewöhnliche Wärmespeicherung, gleichmäßige Temperaturverteilung und präzise Luftstromkontrolle für sowohl Hochtemperatur-Grillen als auch Low-and-Slow-Räuchern.",
          nl: "Kamado grills zijn keramische, eivormige kooktoestellen die uit Japan komen. Hun dikke keramische wanden bieden uitzonderlijke warmte retentie, gelijkmatige temperatuurverdeling en precieze luchtstroom controle voor zowel hoge temperatuur grillen als laag-en-langzaam roken."
        }
      },
      {
        question: {
          en: "What is 'Santa Maria' style barbecue known for?",
          es: "¿Por qué es conocida la barbacoa estilo 'Santa Maria'?",
          de: "Wofür ist 'Santa Maria' Style Barbecue bekannt?",
          nl: "Waar staat 'Santa Maria' stijl barbecue bekend om?"
        },
        options: [
          { en: "Tri-tip beef grilled over red oak coals with simple salt, pepper, and garlic seasoning", es: "Tri-tip de res asado sobre carbones de roble rojo con condimento simple de sal, pimienta y ajo", de: "Tri-Tip Rindfleisch über roten Eichenkohlen gegrillt mit einfacher Salz-, Pfeffer- und Knoblauch-Würzung", nl: "Tri-tip rundvlees gegrild over rode eiken kolen met eenvoudige zout, peper en knoflook kruiding" },
          { en: "Pork ribs with mustard-based sauce", es: "Costillas de cerdo con salsa a base de mostaza", de: "Schweinerippchen mit senfbasierter Sauce", nl: "Varkensribs met op mosterd gebaseerde saus" },
          { en: "Chicken smoked with fruit woods", es: "Pollo ahumado con maderas de frutas", de: "Hähnchen mit Obstholz geräuchert", nl: "Kip gerookt met fruithouten" },
          { en: "Whole hog over mesquite", es: "Cerdo entero sobre mezquite", de: "Ganzes Schwein über Mesquite", nl: "Heel varken over mesquite" }
        ],
        correct: 0,
        explanation: {
          en: "Santa Maria style barbecue from California features tri-tip beef (bottom sirloin) grilled over red oak coals, seasoned simply with salt, pepper, and garlic powder. It's traditionally served with salsa, French bread, and pinquito beans.",
          es: "La barbacoa estilo Santa Maria de California presenta tri-tip de res (solomillo inferior) asado sobre carbones de roble rojo, sazonado simplemente con sal, pimienta y ajo en polvo. Tradicionalmente se sirve con salsa, pan francés y frijoles pinquito.",
          de: "Santa Maria Style Barbecue aus Kalifornien zeigt Tri-Tip Rindfleisch (unteres Roastbeef) über roten Eichenkohlen gegrillt, einfach mit Salz, Pfeffer und Knoblauchpulver gewürzt. Es wird traditionell mit Salsa, französischem Brot und Pinquito-Bohnen serviert.",
          nl: "Santa Maria stijl barbecue uit Californië toont tri-tip rundvlees (onderste sirloin) gegrild over rode eiken kolen, eenvoudig gekruid met zout, peper en knoflookpoeder. Het wordt traditioneel geserveerd met salsa, Frans brood en pinquito bonen."
        }
      },
      {
        question: {
          en: "What is the 'bend test' for checking rib doneness?",
          es: "¿Qué es la 'prueba de flexión' para verificar la cocción de las costillas?",
          de: "Was ist der 'Biegetest' zur Überprüfung der Rippengarung?",
          nl: "Wat is de 'buigtest' voor het controleren van rib gaarheid?"
        },
        options: [
          { en: "Pick up ribs with tongs - they should bend and crack slightly but not break", es: "Levantar costillas con pinzas - deben doblarse y agrietarse ligeramente pero no romperse", de: "Rippen mit Zange aufheben - sie sollten sich biegen und leicht reißen aber nicht brechen", nl: "Ribs oppakken met tang - ze moeten buigen en licht scheuren maar niet breken" },
          { en: "Bend the rib rack in half", es: "Doblar la rejilla de costillas por la mitad", de: "Das Rippengestell in der Mitte biegen", nl: "Het rib rek doormidden buigen" },
          { en: "Test flexibility of individual bones", es: "Probar flexibilidad de huesos individuales", de: "Flexibilität einzelner Knochen testen", nl: "Flexibiliteit van individuele botten testen" },
          { en: "Check how much the meat bends when pressed", es: "Verificar cuánto se dobla la carne al presionar", de: "Prüfen wie sehr sich das Fleisch beim Drücken biegt", nl: "Controleren hoeveel het vlees buigt bij druk" }
        ],
        correct: 0,
        explanation: {
          en: "The bend test involves picking up the rack of ribs with tongs from one end. Properly cooked ribs will bend and the meat may crack slightly on the surface, but they shouldn't break completely in half. This indicates the right balance of tenderness.",
          es: "La prueba de flexión implica levantar la rejilla de costillas con pinzas de un extremo. Las costillas cocidas correctamente se doblarán y la carne puede agrietarse ligeramente en la superficie, pero no deben romperse completamente por la mitad. Esto indica el equilibrio correcto de ternura.",
          de: "Der Biegetest beinhaltet das Aufheben des Rippengestells mit einer Zange von einem Ende. Richtig gekochte Rippen werden sich biegen und das Fleisch kann an der Oberfläche leicht reißen, aber sie sollten nicht vollständig in der Mitte brechen. Dies zeigt das richtige Gleichgewicht der Zartheit an.",
          nl: "De buigtest houdt in dat je het rib rek met een tang aan één kant oppakt. Goed gekookte ribs zullen buigen en het vlees kan licht scheuren aan het oppervlak, maar ze mogen niet volledig doormidden breken. Dit geeft de juiste balans van malheid aan."
        }
      },
      {
        question: {
          en: "What is the difference between 'burnt ends' and regular brisket?",
          es: "¿Cuál es la diferencia entre 'burnt ends' y brisket regular?",
          de: "Was ist der Unterschied zwischen 'Burnt Ends' und normalem Brisket?",
          nl: "Wat is het verschil tussen 'burnt ends' en gewone brisket?"
        },
        options: [
          { en: "Burnt ends are cubed point muscle, re-seasoned and smoked until caramelized", es: "Los burnt ends son músculo point en cubos, re-sazonado y ahumado hasta caramelizar", de: "Burnt Ends sind gewürfelte Point-Muskeln, neu gewürzt und geräuchert bis karamelisiert", nl: "Burnt ends zijn blokjes point spier, opnieuw gekruid en gerookt tot gekarameliseerd" },
          { en: "They're just overcooked brisket pieces", es: "Son solo pedazos de brisket sobrecocidos", de: "Sie sind nur übergekochte Brisketstücke", nl: "Het zijn gewoon overbereide brisket stukken" },
          { en: "Burnt ends use a different cut of beef", es: "Los burnt ends usan un corte diferente de res", de: "Burnt Ends verwenden einen anderen Rindfleisch-Schnitt", nl: "Burnt ends gebruiken een andere snit rundvlees" },
          { en: "They're cooked at higher temperature", es: "Se cocinan a temperatura más alta", de: "Sie werden bei höherer Temperatur gekocht", nl: "Ze worden op hogere temperatuur gekookt" }
        ],
        correct: 0,
        explanation: {
          en: "Burnt ends are made from the point muscle of a cooked brisket, cubed, re-seasoned with rub and sauce, then returned to the smoker until deeply caramelized and 'burnt' on the outside while remaining tender inside. They're a Kansas City specialty.",
          es: "Los burnt ends se hacen del músculo point de un brisket cocido, cortado en cubos, re-sazonado con rub y salsa, luego devuelto al ahumador hasta que esté profundamente caramelizado y 'quemado' por fuera mientras permanece tierno por dentro. Son una especialidad de Kansas City.",
          de: "Burnt Ends werden aus dem Point-Muskel eines gekochten Briskets gemacht, gewürfelt, mit Rub und Sauce neu gewürzt, dann zurück in den Smoker bis tief karamelisiert und außen 'verbrannt' bei zartem Inneren. Sie sind eine Kansas City Spezialität.",
          nl: "Burnt ends worden gemaakt van de point spier van een gekookte brisket, in blokjes gesneden, opnieuw gekruid met rub en saus, dan terug naar de smoker tot diep gekarameliseerd en 'verbrand' aan de buitenkant terwijl ze van binnen mals blijven. Het is een Kansas City specialiteit."
        }
      },
      {
        question: {
          en: "What temperature should lamb be cooked to for medium-rare doneness?",
          es: "¿A qué temperatura debe cocinarse el cordero para cocción medio cruda?",
          de: "Auf welche Temperatur sollte Lamm für medium-rare Garung gekocht werden?",
          nl: "Op welke temperatuur moet lam worden gekookt voor medium-rare gaarheid?"
        },
        options: [
          { en: "130-135°F (54-57°C)", es: "130-135°F (54-57°C)", de: "130-135°F (54-57°C)", nl: "130-135°F (54-57°C)" },
          { en: "120-125°F (49-52°C)", es: "120-125°F (49-52°C)", de: "120-125°F (49-52°C)", nl: "120-125°F (49-52°C)" },
          { en: "145°F (63°C)", es: "145°F (63°C)", de: "145°F (63°C)", nl: "145°F (63°C)" },
          { en: "160°F (71°C)", es: "160°F (71°C)", de: "160°F (71°C)", nl: "160°F (71°C)" }
        ],
        correct: 0,
        explanation: {
          en: "Medium-rare lamb should reach an internal temperature of 130-135°F (54-57°C). This results in a warm red center with good flavor and tenderness. Lamb is safe to eat at lower temperatures than pork or chicken.",
          es: "El cordero medio crudo debe alcanzar una temperatura interna de 130-135°F (54-57°C). Esto resulta en un centro rojo tibio con buen sabor y ternura. El cordero es seguro para comer a temperaturas más bajas que el cerdo o pollo.",
          de: "Medium-rare Lamm sollte eine Innentemperatur von 130-135°F (54-57°C) erreichen. Dies ergibt eine warme rote Mitte mit gutem Geschmack und Zartheit. Lamm ist sicher zu essen bei niedrigeren Temperaturen als Schwein oder Hähnchen.",
          nl: "Medium-rare lam moet een interne temperatuur van 130-135°F (54-57°C) bereiken. Dit resulteert in een warm rood centrum met goede smaak en malheid. Lam is veilig om te eten bij lagere temperaturen dan varkensvlees of kip."
        }
      },
      {
        question: {
          en: "What is 'Alabama white sauce' and what is it used for?",
          es: "¿Qué es la 'salsa blanca de Alabama' y para qué se usa?",
          de: "Was ist 'Alabama White Sauce' und wofür wird sie verwendet?",
          nl: "Wat is 'Alabama white sauce' en waarvoor wordt het gebruikt?"
        },
        options: [
          { en: "Mayonnaise-based sauce with vinegar and spices, traditionally used on chicken", es: "Salsa a base de mayonesa con vinagre y especias, tradicionalmente usada en pollo", de: "Mayonnaise-basierte Sauce mit Essig und Gewürzen, traditionell für Hähnchen verwendet", nl: "Op mayonaise gebaseerde saus met azijn en kruiden, traditioneel gebruikt voor kip" },
          { en: "Cream-based sauce for pork", es: "Salsa a base de crema para cerdo", de: "Sahne-basierte Sauce für Schwein", nl: "Op room gebaseerde saus voor varkensvlees" },
          { en: "White wine reduction sauce", es: "Salsa de reducción de vino blanco", de: "Weißwein-Reduktionssauce", nl: "Witte wijn reductie saus" },
          { en: "Buttermilk marinade", es: "Marinada de suero de leche", de: "Buttermilch-Marinade", nl: "Karnemelk marinade" }
        ],
        correct: 0,
        explanation: {
          en: "Alabama white sauce is a unique regional BBQ sauce made primarily from mayonnaise, vinegar, lemon juice, and spices. It was created by Big Bob Gibson and is traditionally used on smoked chicken, providing a tangy, creamy complement to the smoky flavor.",
          es: "La salsa blanca de Alabama es una salsa BBQ regional única hecha principalmente de mayonesa, vinagre, jugo de limón y especias. Fue creada por Big Bob Gibson y tradicionalmente se usa en pollo ahumado, proporcionando un complemento ácido y cremoso al sabor ahumado.",
          de: "Alabama White Sauce ist eine einzigartige regionale BBQ-Sauce, die hauptsächlich aus Mayonnaise, Essig, Zitronensaft und Gewürzen besteht. Sie wurde von Big Bob Gibson kreiert und wird traditionell für geräuchertes Hähnchen verwendet, was eine würzige, cremige Ergänzung zum Rauchgeschmack bietet.",
          nl: "Alabama white sauce is een unieke regionale BBQ saus gemaakt voornamelijk van mayonaise, azijn, citroensap en kruiden. Het werd gecreëerd door Big Bob Gibson en wordt traditioneel gebruikt voor gerookte kip, wat een pittige, romige aanvulling biedt op de rooksmaak."
        }
      },
      {
        question: {
          en: "What is the 'toothpick test' for brisket doneness?",
          es: "¿Qué es la 'prueba del palillo' para la cocción del brisket?",
          de: "Was ist der 'Zahnstocher-Test' für Brisket-Garung?",
          nl: "Wat is de 'tandenstoker test' voor brisket gaarheid?"
        },
        options: [
          { en: "A toothpick should slide in and out with little resistance, like probing warm butter", es: "Un palillo debe deslizarse dentro y fuera con poca resistencia, como sondear mantequilla tibia", de: "Ein Zahnstocher sollte mit geringem Widerstand hinein- und herausgleiten, wie beim Sondieren warmer Butter", nl: "Een tandenstoker moet met weinig weerstand in en uit glijden, zoals het sonderen van warme boter" },
          { en: "The toothpick should break when inserted", es: "El palillo debe romperse al insertarse", de: "Der Zahnstocher sollte beim Einführen brechen", nl: "De tandenstoker moet breken bij inbrengen" },
          { en: "You should feel strong resistance", es: "Debes sentir resistencia fuerte", de: "Du solltest starken Widerstand spüren", nl: "Je moet sterke weerstand voelen" },
          { en: "The toothpick should come out clean", es: "El palillo debe salir limpio", de: "Der Zahnstocher sollte sauber herauskommen", nl: "De tandenstoker moet schoon uitkomen" }
        ],
        correct: 0,
        explanation: {
          en: "The toothpick or probe test involves inserting a toothpick or thermometer probe into the thickest part of the brisket. When done, it should slide in and out smoothly with minimal resistance, similar to probing room-temperature butter.",
          es: "La prueba del palillo o sonda implica insertar un palillo o sonda de termómetro en la parte más gruesa del brisket. Cuando está listo, debe deslizarse dentro y fuera suavemente con resistencia mínima, similar a sondear mantequilla a temperatura ambiente.",
          de: "Der Zahnstocher- oder Sondentest beinhaltet das Einführen eines Zahnstochers oder einer Thermometersonde in den dicksten Teil des Briskets. Wenn fertig, sollte es glatt mit minimalem Widerstand hinein- und herausgleiten, ähnlich dem Sondieren von Butter bei Raumtemperatur.",
          nl: "De tandenstoker of sonde test houdt het inbrengen van een tandenstoker of thermometer sonde in het dikste deel van de brisket in. Wanneer gaar, moet het soepel met minimale weerstand in en uit glijden, vergelijkbaar met het sonderen van boter op kamertemperatuur."
        }
      },
      {
        question: {
          en: "What is 'South Carolina mustard sauce' traditionally served with?",
          es: "¿Con qué se sirve tradicionalmente la 'salsa de mostaza de Carolina del Sur'?",
          de: "Womit wird 'South Carolina Senfsauce' traditionell serviert?",
          nl: "Waarmee wordt 'South Carolina mosterd saus' traditioneel geserveerd?"
        },
        options: [
          { en: "Pulled pork and whole hog barbecue", es: "Pulled pork y barbacoa de cerdo entero", de: "Pulled Pork und Ganzes-Schwein-Barbecue", nl: "Pulled pork en heel varken barbecue" },
          { en: "Beef brisket", es: "Pecho de res", de: "Rindfleisch-Brisket", nl: "Rundvlees brisket" },
          { en: "Chicken wings", es: "Alitas de pollo", de: "Hähnchenflügel", nl: "Kippenvleugels" },
          { en: "Smoked fish", es: "Pescado ahumado", de: "Geräucherter Fisch", nl: "Gerookte vis" }
        ],
        correct: 0,
        explanation: {
          en: "South Carolina's yellow mustard barbecue sauce, influenced by German immigration, is traditionally served with pulled pork and whole hog barbecue. The mustard base provides a tangy, slightly sweet flavor that complements pork well.",
          es: "La salsa barbacoa de mostaza amarilla de Carolina del Sur, influenciada por la inmigración alemana, se sirve tradicionalmente con pulled pork y barbacoa de cerdo entero. La base de mostaza proporciona un sabor ácido y ligeramente dulce que complementa bien el cerdo.",
          de: "South Carolinas gelbe Senf-Barbecue-Sauce, beeinflusst durch deutsche Einwanderung, wird traditionell mit Pulled Pork und Ganzes-Schwein-Barbecue serviert. Die Senfbasis bietet einen würzigen, leicht süßen Geschmack, der Schweinefleisch gut ergänzt.",
          nl: "South Carolina's gele mosterd barbecue saus, beïnvloed door Duitse immigratie, wordt traditioneel geserveerd met pulled pork en heel varken barbecue. De mosterd basis biedt een pittige, licht zoete smaak die varkensvlees goed aanvult."
        }
      },
      {
        question: {
          en: "What is the purpose of using a 'temperature ramp' when smoking large cuts?",
          es: "¿Cuál es el propósito de usar una 'rampa de temperatura' al ahumar cortes grandes?",
          de: "Was ist der Zweck der Verwendung einer 'Temperaturrampe' beim Räuchern großer Stücke?",
          nl: "Wat is het doel van het gebruik van een 'temperatuur ramp' bij het roken van grote stukken?"
        },
        options: [
          { en: "Gradually increase temperature to push through the stall and finish faster", es: "Aumentar gradualmente la temperatura para empujar a través del estancamiento y terminar más rápido", de: "Temperatur schrittweise erhöhen um durch den Stall zu drücken und schneller zu beenden", nl: "Geleidelijk temperatuur verhogen om door de stall heen te duwen en sneller af te werken" },
          { en: "Cool down the meat slowly", es: "Enfriar la carne lentamente", de: "Das Fleisch langsam abkühlen", nl: "Het vlees langzaam afkoelen" },
          { en: "Maintain exact temperature throughout", es: "Mantener temperatura exacta durante todo", de: "Genaue Temperatur durchgehend halten", nl: "Exacte temperatuur gedurende aanhouden" },
          { en: "Alternate between high and low heat", es: "Alternar entre calor alto y bajo", de: "Zwischen hoher und niedriger Hitze wechseln", nl: "Afwisselen tussen hoge en lage hitte" }
        ],
        correct: 0,
        explanation: {
          en: "A temperature ramp involves gradually increasing the cooking temperature during the cook, often starting at 225°F and ramping up to 275°F or higher. This technique helps push through the stall and reduces overall cooking time while maintaining quality.",
          es: "Una rampa de temperatura implica aumentar gradualmente la temperatura de cocción durante la cocción, a menudo comenzando a 225°F y subiendo a 275°F o más. Esta técnica ayuda a empujar a través del estancamiento y reduce el tiempo total de cocción mientras mantiene la calidad.",
          de: "Eine Temperaturrampe beinhaltet das schrittweise Erhöhen der Kochtemperatur während des Kochens, oft beginnend bei 225°F und ansteigend auf 275°F oder höher. Diese Technik hilft durch den Stall zu drücken und reduziert die Gesamtkochzeit bei Qualitätserhaltung.",
          nl: "Een temperatuur ramp houdt het geleidelijk verhogen van de kooktemperatuur tijdens het koken in, vaak beginnend bij 225°F en oplopend naar 275°F of hoger. Deze techniek helpt door de stall heen te duwen en vermindert de totale kooktijd terwijl kwaliteit behouden blijft."
        }
      },
      {
        question: {
          en: "What does 'pitmaster' traditionally refer to in barbecue culture?",
          es: "¿A qué se refiere tradicionalmente 'pitmaster' en la cultura de la barbacoa?",
          de: "Worauf bezieht sich 'Pitmaster' traditionell in der Barbecue-Kultur?",
          nl: "Waar verwijst 'pitmaster' traditioneel naar in barbecue cultuur?"
        },
        options: [
          { en: "The experienced person responsible for managing the fire and cooking process", es: "La persona experimentada responsable de manejar el fuego y el proceso de cocción", de: "Die erfahrene Person, die für das Verwalten des Feuers und Kochprozesses verantwortlich ist", nl: "De ervaren persoon verantwoordelijk voor het beheren van het vuur en kookproces" },
          { en: "The owner of a barbecue restaurant", es: "El dueño de un restaurante de barbacoa", de: "Der Besitzer eines Barbecue-Restaurants", nl: "De eigenaar van een barbecue restaurant" },
          { en: "Someone who judges barbecue competitions", es: "Alguien que juzga competencias de barbacoa", de: "Jemand, der Barbecue-Wettbewerbe beurteilt", nl: "Iemand die barbecue competities beoordeelt" },
          { en: "A type of barbecue sauce maker", es: "Un tipo de fabricante de salsa barbacoa", de: "Eine Art Barbecue-Sauce-Hersteller", nl: "Een soort barbecue saus maker" }
        ],
        correct: 0,
        explanation: {
          en: "A pitmaster is traditionally the skilled person responsible for tending the fire, managing temperatures, timing the cook, and ensuring quality in barbecue preparation. It's a role that requires experience, intuition, and deep understanding of the craft.",
          es: "Un pitmaster es tradicionalmente la persona hábil responsable de atender el fuego, manejar temperaturas, cronometrar la cocción y asegurar calidad en la preparación de barbacoa. Es un rol que requiere experiencia, intuición y comprensión profunda del oficio.",
          de: "Ein Pitmaster ist traditionell die geschickte Person, die für das Hüten des Feuers, das Verwalten von Temperaturen, das Timing des Kochens und die Qualitätssicherung bei der Barbecue-Zubereitung verantwortlich ist. Es ist eine Rolle, die Erfahrung, Intuition und tiefes Verständnis des Handwerks erfordert.",
          nl: "Een pitmaster is traditioneel de vaardige persoon verantwoordelijk voor het onderhouden van het vuur, temperaturen beheren, timing van het koken en kwaliteit verzekeren in barbecue voorbereiding. Het is een rol die ervaring, intuïtie en diep begrip van het vak vereist."
        }
      },
      {
        question: {
          en: "What is the difference between 'hot and fast' vs 'low and slow' cooking methods?",
          es: "¿Cuál es la diferencia entre los métodos de cocción 'caliente y rápido' vs 'bajo y lento'?",
          de: "Was ist der Unterschied zwischen 'heiß und schnell' vs 'niedrig und langsam' Kochmethoden?",
          nl: "Wat is het verschil tussen 'heet en snel' vs 'laag en langzaam' kookmethoden?"
        },
        options: [
          { en: "Hot and fast (300°F+) cooks faster but may sacrifice some tenderness; low and slow (225-250°F) takes longer but breaks down connective tissue better", es: "Caliente y rápido (300°F+) cocina más rápido pero puede sacrificar algo de ternura; bajo y lento (225-250°F) toma más tiempo pero descompone mejor el tejido conectivo", de: "Heiß und schnell (300°F+) kocht schneller aber kann etwas Zartheit opfern; niedrig und langsam (225-250°F) dauert länger aber baut Bindegewebe besser ab", nl: "Heet en snel (300°F+) kookt sneller maar kan wat malheid opofferen; laag en langzaam (225-250°F) duurt langer maar breekt bindweefsel beter af" },
          { en: "There's no real difference in results", es: "No hay diferencia real en los resultados", de: "Es gibt keinen wirklichen Unterschied in den Ergebnissen", nl: "Er is geen echt verschil in resultaten" },
          { en: "Hot and fast only works for beef", es: "Caliente y rápido solo funciona para res", de: "Heiß und schnell funktioniert nur für Rindfleisch", nl: "Heet en snel werkt alleen voor rundvlees" },
          { en: "Low and slow uses more wood", es: "Bajo y lento usa más madera", de: "Niedrig und langsam verwendet mehr Holz", nl: "Laag en langzaam gebruikt meer hout" }
        ],
        correct: 0,
        explanation: {
          en: "Hot and fast cooking (300°F+) reduces cooking time but may not fully break down tough connective tissues. Low and slow (225-250°F) takes longer but allows collagen to fully convert to gelatin, resulting in more tender, succulent meat.",
          es: "La cocción caliente y rápida (300°F+) reduce el tiempo de cocción pero puede no descomponer completamente los tejidos conectivos duros. Bajo y lento (225-250°F) toma más tiempo pero permite que el colágeno se convierta completamente en gelatina, resultando en carne más tierna y suculenta.",
          de: "Heißes und schnelles Kochen (300°F+) reduziert die Kochzeit, kann aber zähe Bindegewebe nicht vollständig abbauen. Niedrig und langsam (225-250°F) dauert länger, ermöglicht aber dem Kollagen, sich vollständig in Gelatine umzuwandeln, was zu zarterem, saftigerem Fleisch führt.",
          nl: "Heet en snel koken (300°F+) vermindert kooktijd maar kan taai bindweefsel niet volledig afbreken. Laag en langzaam (225-250°F) duurt langer maar laat collageen volledig omzetten naar gelatine, resulterend in malser, sappiger vlees."
        }
      },
      {
        question: {
          en: "What is the 'paper crutch' method and when is it preferred over foil?",
          es: "¿Qué es el método 'paper crutch' y cuándo se prefiere sobre el papel aluminio?",
          de: "Was ist die 'Paper Crutch' Methode und wann wird sie Folie vorgezogen?",
          nl: "Wat is de 'paper crutch' methode en wanneer heeft het de voorkeur boven folie?"
        },
        options: [
          { en: "Wrapping meat in butcher paper; it's breathable so maintains better bark texture than foil", es: "Envolver carne en papel de carnicero; es transpirable así mantiene mejor textura de corteza que el papel aluminio", de: "Fleisch in Metzgerpapier wickeln; es ist atmungsaktiv und erhält bessere Rindentextur als Folie", nl: "Vlees inwikkelen in slagerspapier; het is ademend dus behoudt betere korst textuur dan folie" },
          { en: "Using newspaper instead of foil", es: "Usar periódico en lugar de papel aluminio", de: "Zeitungspapier statt Folie verwenden", nl: "Krant gebruiken in plaats van folie" },
          { en: "Wrapping only with parchment paper", es: "Envolver solo con papel pergamino", de: "Nur mit Pergamentpapier wickeln", nl: "Alleen inwikkelen met bakpapier" },
          { en: "Using paper towels to dry the meat", es: "Usar toallas de papel para secar la carne", de: "Papiertücher zum Trocknen des Fleisches verwenden", nl: "Papieren handdoeken gebruiken om vlees te drogen" }
        ],
        correct: 0,
        explanation: {
          en: "The paper crutch uses unbleached butcher paper instead of foil to wrap meat during the stall. Butcher paper is porous, allowing some moisture to escape while still speeding cooking, which helps maintain a better bark texture compared to non-porous foil.",
          es: "El paper crutch usa papel de carnicero sin blanquear en lugar de papel aluminio para envolver carne durante el estancamiento. El papel de carnicero es poroso, permitiendo que escape algo de humedad mientras acelera la cocción, lo que ayuda a mantener mejor textura de corteza comparado con papel aluminio no poroso.",
          de: "Die Paper Crutch verwendet ungebleichtes Metzgerpapier statt Folie um Fleisch während des Stalls zu wickeln. Metzgerpapier ist porös und lässt etwas Feuchtigkeit entweichen während es das Kochen beschleunigt, was hilft, eine bessere Rindentextur im Vergleich zu nicht-poröser Folie zu erhalten.",
          nl: "De paper crutch gebruikt ongebleekt slagerspapier in plaats van folie om vlees tijdens de stall in te wikkelen. Slagerspapier is poreus en laat wat vocht ontsnappen terwijl het koken versnelt wordt, wat helpt een betere korst textuur te behouden vergeleken met niet-poreuze folie."
        }
      },
      {
        question: {
          en: "What is 'cowboy caviar' in barbecue terminology?",
          es: "¿Qué es 'cowboy caviar' en terminología de barbacoa?",
          de: "Was ist 'Cowboy Caviar' in der Barbecue-Terminologie?",
          nl: "Wat is 'cowboy caviar' in barbecue terminologie?"
        },
        options: [
          { en: "Burnt ends - cubed, caramelized pieces of brisket point", es: "Burnt ends - pedazos en cubos y caramelizados de point de brisket", de: "Burnt Ends - gewürfelte, karamelisierte Stücke von Brisket Point", nl: "Burnt ends - blokjes, gekarameliseerde stukken van brisket point" },
          { en: "A black bean salad served with barbecue", es: "Una ensalada de frijoles negros servida con barbacoa", de: "Ein schwarzer Bohnensalat, der mit Barbecue serviert wird", nl: "Een zwarte bonen salade geserveerd met barbecue" },
          { en: "Spicy barbecue sauce with black pepper", es: "Salsa barbacoa picante con pimienta negra", de: "Scharfe Barbecue-Sauce mit schwarzem Pfeffer", nl: "Pittige barbecue saus met zwarte peper" },
          { en: "Charred corn kernels", es: "Granos de maíz carbonizados", de: "Verkohlte Maiskörner", nl: "Verkoold maïs korrels" }
        ],
        correct: 0,
        explanation: {
          en: "Cowboy caviar is a nickname for burnt ends - the cubed, re-seasoned, and twice-smoked pieces of brisket point that become deeply caramelized and 'burnt' on the outside. They're considered a delicacy in Kansas City barbecue.",
          es: "Cowboy caviar es un apodo para burnt ends - los pedazos en cubos, re-sazonados y doblemente ahumados de point de brisket que se vuelven profundamente caramelizados y 'quemados' por fuera. Se consideran una delicia en la barbacoa de Kansas City.",
          de: "Cowboy Caviar ist ein Spitzname für Burnt Ends - die gewürfelten, neu gewürzten und doppelt geräucherten Stücke von Brisket Point, die tief karamelisiert und außen 'verbrannt' werden. Sie gelten als Delikatesse im Kansas City Barbecue.",
          nl: "Cowboy caviar is een bijnaam voor burnt ends - de blokjes, opnieuw gekruide en dubbel gerookte stukken van brisket point die diep gekarameliseerd en 'verbrand' aan de buitenkant worden. Ze worden beschouwd als een delicatesse in Kansas City barbecue."
        }
      },
      {
        question: {
          en: "What is the ideal fat content for ground beef when making smoked burgers?",
          es: "¿Cuál es el contenido de grasa ideal para carne molida al hacer hamburguesas ahumadas?",
          de: "Was ist der ideale Fettgehalt für Hackfleisch beim Zubereiten geräucherter Burger?",
          nl: "Wat is het ideale vetgehalte voor gehakt vlees bij het maken van gerookte burgers?"
        },
        options: [
          { en: "80/20 (80% lean, 20% fat)", es: "80/20 (80% magro, 20% grasa)", de: "80/20 (80% mager, 20% Fett)", nl: "80/20 (80% mager, 20% vet)" },
          { en: "90/10 (90% lean, 10% fat)", es: "90/10 (90% magro, 10% grasa)", de: "90/10 (90% mager, 10% Fett)", nl: "90/10 (90% mager, 10% vet)" },
          { en: "70/30 (70% lean, 30% fat)", es: "70/30 (70% magro, 30% grasa)", de: "70/30 (70% mager, 30% Fett)", nl: "70/30 (70% mager, 30% vet)" },
          { en: "95/5 (95% lean, 5% fat)", es: "95/5 (95% magro, 5% grasa)", de: "95/5 (95% mager, 5% Fett)", nl: "95/5 (95% mager, 5% vet)" }
        ],
        correct: 0,
        explanation: {
          en: "80/20 ground beef is ideal for burgers because it provides enough fat to keep the patty moist and flavorful during cooking, while not being so fatty that it causes excessive flare-ups or shrinkage.",
          es: "La carne molida 80/20 es ideal para hamburguesas porque proporciona suficiente grasa para mantener la hamburguesa húmeda y sabrosa durante la cocción, sin ser tan grasa que cause llamaradas excesivas o encogimiento.",
          de: "80/20 Hackfleisch ist ideal für Burger, weil es genug Fett bietet, um das Patty während des Kochens feucht und geschmackvoll zu halten, ohne so fettig zu sein, dass es übermäßige Stichflammen oder Schrumpfung verursacht.",
          nl: "80/20 gehakt vlees is ideaal voor burgers omdat het genoeg vet biedt om de hamburger vochtig en smaakvol te houden tijdens het koken, zonder zo vet te zijn dat het overmatige vlammen of krimp veroorzaakt."
        }
      },
      {
        question: {
          en: "What does 'competition trim' mean for brisket preparation?",
          es: "¿Qué significa 'competition trim' para la preparación de brisket?",
          de: "Was bedeutet 'Competition Trim' für die Brisket-Vorbereitung?",
          nl: "Wat betekent 'competition trim' voor brisket voorbereiding?"
        },
        options: [
          { en: "Precise trimming of fat to ¼ inch, removing hard fat, and shaping for optimal presentation and cooking", es: "Recorte preciso de grasa a ¼ pulgada, removiendo grasa dura, y moldeando para presentación y cocción óptimas", de: "Präzises Trimmen von Fett auf ¼ Zoll, Entfernung hartem Fett, und Formen für optimale Präsentation und Kochen", nl: "Precieze afwerking van vet tot ¼ inch, harde vet verwijderen, en vorm geven voor optimale presentatie en koken" },
          { en: "Removing all fat from the brisket", es: "Quitar toda la grasa del brisket", de: "Alles Fett vom Brisket entfernen", nl: "Al het vet van de brisket verwijderen" },
          { en: "Cutting the brisket into competition-sized portions", es: "Cortar el brisket en porciones de tamaño de competencia", de: "Das Brisket in wettkampfgroße Portionen schneiden", nl: "De brisket snijden in competitie-grootte porties" },
          { en: "Marinating the brisket for competition", es: "Marinar el brisket para competencia", de: "Das Brisket für den Wettbewerb marinieren", nl: "De brisket marineren voor competitie" }
        ],
        correct: 0,
        explanation: {
          en: "Competition trim involves meticulously trimming the brisket to remove hard fat, silver skin, and excess fat while leaving about ¼ inch of fat cap. The goal is optimal cooking, even smoke penetration, and attractive presentation for judges.",
          es: "El competition trim implica recortar meticulosamente el brisket para remover grasa dura, piel plateada y exceso de grasa mientras se deja aproximadamente ¼ pulgada de capa de grasa. El objetivo es cocción óptima, penetración uniforme de humo y presentación atractiva para jueces.",
          de: "Competition Trim beinhaltet das akribische Trimmen des Briskets um hartes Fett, Silberhaut und überschüssiges Fett zu entfernen, während etwa ¼ Zoll Fettkappe belassen wird. Das Ziel ist optimales Kochen, gleichmäßige Rauchpenetration und attraktive Präsentation für Richter.",
          nl: "Competition trim houdt nauwgezet bijsnijden van de brisket in om hard vet, zilvervlies en overtollig vet te verwijderen terwijl ongeveer ¼ inch vetlaag wordt achtergelaten. Het doel is optimaal koken, gelijkmatige rookpenetratie en aantrekkelijke presentatie voor juryleden."
        }
      },
      {
        question: {
          en: "What is the traditional accompaniment to Texas-style brisket?",
          es: "¿Cuál es el acompañamiento tradicional para el brisket estilo Texas?",
          de: "Was ist die traditionelle Beilage zu Texas-Style Brisket?",
          nl: "Wat is de traditionele begeleiding bij Texas-stijl brisket?"
        },
        options: [
          { en: "White bread, pickles, and onions - sauce served on the side", es: "Pan blanco, pepinillos y cebollas - salsa servida aparte", de: "Weißbrot, Gurken und Zwiebeln - Sauce separat serviert", nl: "Wit brood, augurken en uien - saus apart geserveerd" },
          { en: "Coleslaw and baked beans", es: "Ensalada de col y frijoles horneados", de: "Krautsalat und gebackene Bohnen", nl: "Koolsla en gebakken bonen" },
          { en: "French fries and salad", es: "Papas fritas y ensalada", de: "Pommes frites und Salat", nl: "Friet en salade" },
          { en: "Corn bread and mashed potatoes", es: "Pan de maíz y puré de papas", de: "Maisbrot und Kartoffelpüree", nl: "Maïsbrood en aardappelpuree" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional Texas brisket is served with white bread, pickles, and raw white onions, with sauce on the side (if any). This simple presentation lets the quality of the meat and smoke flavor speak for itself.",
          es: "El brisket tradicional de Texas se sirve con pan blanco, pepinillos y cebollas blancas crudas, con salsa aparte (si la hay). Esta presentación simple permite que la calidad de la carne y el sabor a humo hablen por sí mismos.",
          de: "Traditionelles Texas Brisket wird mit Weißbrot, Gurken und rohen weißen Zwiebeln serviert, mit Sauce separat (falls vorhanden). Diese einfache Präsentation lässt die Qualität des Fleisches und den Rauchgeschmack für sich sprechen.",
          nl: "Traditionele Texas brisket wordt geserveerd met wit brood, augurken en rauwe witte uien, met saus apart (indien aanwezig). Deze eenvoudige presentatie laat de kwaliteit van het vlees en rooksmaak voor zichzelf spreken."
        }
      },
      {
        question: {
          en: "What is the purpose of 'boat foiling' in barbecue?",
          es: "¿Cuál es el propósito del 'boat foiling' en barbacoa?",
          de: "Was ist der Zweck des 'Boat Foiling' beim Barbecue?",
          nl: "Wat is het doel van 'boat foiling' bij barbecue?"
        },
        options: [
          { en: "Creating a foil boat to collect juices while allowing the top to remain exposed to smoke", es: "Crear un bote de papel aluminio para recoger jugos mientras permite que la parte superior permanezca expuesta al humo", de: "Ein Foilboot erstellen um Säfte zu sammeln während die Oberseite dem Rauch ausgesetzt bleibt", nl: "Een folie boot maken om sappen te verzamelen terwijl de bovenkant blootgesteld blijft aan rook" },
          { en: "Wrapping meat completely in foil", es: "Envolver carne completamente en papel aluminio", de: "Fleisch vollständig in Folie wickeln", nl: "Vlees volledig inwikkelen in folie" },
          { en: "Using foil to reflect heat", es: "Usar papel aluminio para reflejar calor", de: "Folie verwenden um Hitze zu reflektieren", nl: "Folie gebruiken om hitte te reflecteren" },
          { en: "Covering only the bottom of the meat", es: "Cubrir solo la parte inferior de la carne", de: "Nur die Unterseite des Fleisches bedecken", nl: "Alleen de onderkant van het vlees bedekken" }
        ],
        correct: 0,
        explanation: {
          en: "Boat foiling involves creating a foil 'boat' or tray that sits under the meat to catch drippings and juices, while leaving the top exposed to continue receiving smoke. This method preserves bark while collecting flavorful drippings.",
          es: "El boat foiling implica crear un 'bote' o bandeja de papel aluminio que se sienta bajo la carne para atrapar goteos y jugos, mientras deja la parte superior expuesta para continuar recibiendo humo. Este método preserva la corteza mientras recolecta goteos sabrosos.",
          de: "Boat Foiling beinhaltet das Erstellen eines Foil-'Boots' oder einer Schale, die unter dem Fleisch sitzt um Tropfen und Säfte aufzufangen, während die Oberseite exponiert bleibt um weiter Rauch zu erhalten. Diese Methode bewahrt die Rinde während geschmackvolle Tropfen gesammelt werden.",
          nl: "Boat foiling houdt het maken van een folie 'boot' of schaal in die onder het vlees zit om druppels en sappen op te vangen, terwijl de bovenkant blootgesteld blijft om rook te blijven ontvangen. Deze methode behoudt korst terwijl smaakvolle druppels worden verzameld."
        }
      },
      {
        question: {
          en: "What is 'kamado' style cooking and what makes it unique?",
          es: "¿Qué es la cocción estilo 'kamado' y qué la hace única?",
          de: "Was ist 'Kamado'-Style Kochen und was macht es einzigartig?",
          nl: "Wat is 'kamado' stijl koken en wat maakt het uniek?"
        },
        options: [
          { en: "Ceramic egg-shaped cooker with excellent heat retention and airflow control", es: "Cocinero de cerámica en forma de huevo con excelente retención de calor y control de flujo de aire", de: "Keramischer eiförmiger Kocher mit ausgezeichneter Wärmespeicherung und Luftstromkontrolle", nl: "Keramische eivormige kooktoestel met uitstekende warmte retentie en luchtstroom controle" },
          { en: "Japanese grilling over open flames", es: "Asado japonés sobre llamas abiertas", de: "Japanisches Grillen über offenen Flammen", nl: "Japans grillen boven open vlammen" },
          { en: "Using only bamboo charcoal", es: "Usar solo carbón de bambú", de: "Nur Bambuskohle verwenden", nl: "Alleen bamboe houtskool gebruiken" },
          { en: "Smoking with sake-soaked wood", es: "Ahumar con madera empapada en sake", de: "Räuchern mit Sake-getränktem Holz", nl: "Roken met sake-doordrenkt hout" }
        ],
        correct: 0,
        explanation: {
          en: "Kamado grills are ceramic, egg-shaped cookers that originated in Japan. Their thick ceramic walls provide exceptional heat retention, even temperature distribution, and precise airflow control for both high-heat grilling and low-and-slow smoking.",
          es: "Las parrillas kamado son cocedores de cerámica en forma de huevo que se originaron en Japón. Sus gruesas paredes de cerámica proporcionan retención de calor excepcional, distribución uniforme de temperatura y control preciso del flujo de aire para asado a alta temperatura y ahumado lento.",
          de: "Kamado-Grills sind keramische, eiförmige Kocher, die aus Japan stammen. Ihre dicken Keramikwände bieten außergewöhnliche Wärmespeicherung, gleichmäßige Temperaturverteilung und präzise Luftstromkontrolle für sowohl Hochtemperatur-Grillen als auch Low-and-Slow-Räuchern.",
          nl: "Kamado grills zijn keramische, eivormige kooktoestellen die uit Japan komen. Hun dikke keramische wanden bieden uitzonderlijke warmte retentie, gelijkmatige temperatuurverdeling en precieze luchtstroom controle voor zowel hoge temperatuur grillen als laag-en-langzaam roken."
        }
      },
      {
        question: {
          en: "What is 'Santa Maria' style barbecue known for?",
          es: "¿Por qué es conocida la barbacoa estilo 'Santa Maria'?",
          de: "Wofür ist 'Santa Maria' Style Barbecue bekannt?",
          nl: "Waar staat 'Santa Maria' stijl barbecue bekend om?"
        },
        options: [
          { en: "Tri-tip beef grilled over red oak coals with simple salt, pepper, and garlic seasoning", es: "Tri-tip de res asado sobre carbones de roble rojo con condimento simple de sal, pimienta y ajo", de: "Tri-Tip Rindfleisch über roten Eichenkohlen gegrillt mit einfacher Salz-, Pfeffer- und Knoblauch-Würzung", nl: "Tri-tip rundvlees gegrild over rode eiken kolen met eenvoudige zout, peper en knoflook kruiding" },
          { en: "Pork ribs with mustard-based sauce", es: "Costillas de cerdo con salsa a base de mostaza", de: "Schweinerippchen mit senfbasierter Sauce", nl: "Varkensribs met op mosterd gebaseerde saus" },
          { en: "Chicken smoked with fruit woods", es: "Pollo ahumado con maderas de frutas", de: "Hähnchen mit Obstholz geräuchert", nl: "Kip gerookt met fruithouten" },
          { en: "Whole hog over mesquite", es: "Cerdo entero sobre mezquite", de: "Ganzes Schwein über Mesquite", nl: "Heel varken over mesquite" }
        ],
        correct: 0,
        explanation: {
          en: "Santa Maria style barbecue from California features tri-tip beef (bottom sirloin) grilled over red oak coals, seasoned simply with salt, pepper, and garlic powder. It's traditionally served with salsa, French bread, and pinquito beans.",
          es: "La barbacoa estilo Santa Maria de California presenta tri-tip de res (solomillo inferior) asado sobre carbones de roble rojo, sazonado simplemente con sal, pimienta y ajo en polvo. Tradicionalmente se sirve con salsa, pan francés y frijoles pinquito.",
          de: "Santa Maria Style Barbecue aus Kalifornien zeigt Tri-Tip Rindfleisch (unteres Roastbeef) über roten Eichenkohlen gegrillt, einfach mit Salz, Pfeffer und Knoblauchpulver gewürzt. Es wird traditionell mit Salsa, französischem Brot und Pinquito-Bohnen serviert.",
          nl: "Santa Maria stijl barbecue uit Californië toont tri-tip rundvlees (onderste sirloin) gegrild over rode eiken kolen, eenvoudig gekruid met zout, peper en knoflookpoeder. Het wordt traditioneel geserveerd met salsa, Frans brood en pinquito bonen."
        }
      },
      {
        question: {
          en: "What is the 'bend test' for checking rib doneness?",
          es: "¿Qué es la 'prueba de flexión' para verificar la cocción de las costillas?",
          de: "Was ist der 'Biegetest' zur Überprüfung der Rippengarung?",
          nl: "Wat is de 'buigtest' voor het controleren van rib gaarheid?"
        },
        options: [
          { en: "Pick up ribs with tongs - they should bend and crack slightly but not break", es: "Levantar costillas con pinzas - deben doblarse y agrietarse ligeramente pero no romperse", de: "Rippen mit Zange aufheben - sie sollten sich biegen und leicht reißen aber nicht brechen", nl: "Ribs oppakken met tang - ze moeten buigen en licht scheuren maar niet breken" },
          { en: "Bend the rib rack in half", es: "Doblar la rejilla de costillas por la mitad", de: "Das Rippengestell in der Mitte biegen", nl: "Het rib rek doormidden buigen" },
          { en: "Test flexibility of individual bones", es: "Probar flexibilidad de huesos individuales", de: "Flexibilität einzelner Knochen testen", nl: "Flexibiliteit van individuele botten testen" },
          { en: "Check how much the meat bends when pressed", es: "Verificar cuánto se dobla la carne al presionar", de: "Prüfen wie sehr sich das Fleisch beim Drücken biegt", nl: "Controleren hoeveel het vlees buigt bij druk" }
        ],
        correct: 0,
        explanation: {
          en: "The bend test involves picking up the rack of ribs with tongs from one end. Properly cooked ribs will bend and the meat may crack slightly on the surface, but they shouldn't break completely in half. This indicates the right balance of tenderness.",
          es: "La prueba de flexión implica levantar la rejilla de costillas con pinzas de un extremo. Las costillas cocidas correctamente se doblarán y la carne puede agrietarse ligeramente en la superficie, pero no deben romperse completamente por la mitad. Esto indica el equilibrio correcto de ternura.",
          de: "Der Biegetest beinhaltet das Aufheben des Rippengestells mit einer Zange von einem Ende. Richtig gekochte Rippen werden sich biegen und das Fleisch kann an der Oberfläche leicht reißen, aber sie sollten nicht vollständig in der Mitte brechen. Dies zeigt das richtige Gleichgewicht der Zartheit an.",
          nl: "De buigtest houdt in dat je het rib rek met een tang aan één kant oppakt. Goed gekookte ribs zullen buigen en het vlees kan licht scheuren aan het oppervlak, maar ze mogen niet volledig doormidden breken. Dit geeft de juiste balans van malheid aan."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else {
    window.barbecueLevel4 = level4;
  }
})();