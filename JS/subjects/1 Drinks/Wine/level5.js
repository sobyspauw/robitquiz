// Quiz - Level 5: Drinken - Wijn (Wijnproeven)
(function() {
  const level5 = {
    name: {
      en: "Wine Tasting",
      es: "Cata de Vinos",
      de: "Weinprobe",
      nl: "Wijnproeven"
    },
    questions: [
      {
        question: {
          en: "What are the five basic tastes detected by the palate?",
          es: "¿Cuáles son los cinco sabores básicos detectados por el paladar?",
          de: "Was sind die fünf Grundgeschmäcker, die der Gaumen erkennt?",
          nl: "Wat zijn de vijf basisssmaken die door het gehemelte worden gedetecteerd?"
        },
        options: [
          { en: "Sweet, sour, bitter, salty, umami", es: "Dulce, agrio, amargo, salado, umami", de: "Süß, sauer, bitter, salzig, umami", nl: "Zoet, zuur, bitter, zout, umami" },
          { en: "Sweet, dry, fruity, earthy, spicy", es: "Dulce, seco, afrutado, terroso, especiado", de: "Süß, trocken, fruchtig, erdig, würzig", nl: "Zoet, droog, fruitig, aards, kruidig" },
          { en: "Floral, citrus, herbal, mineral, oaky", es: "Floral, cítrico, herbáceo, mineral, roble", de: "Blumig, zitrusartig, kräuterig, mineralisch, eichig", nl: "Bloemen, citrus, kruidig, mineraal, eiken" },
          { en: "Light, medium, full, crisp, smooth", es: "Ligero, medio, completo, fresco, suave", de: "Leicht, mittel, vollmundig, knackig, weich", nl: "Licht, medium, vol, knapperig, glad" }
        ],
        correct: 0,
        explanation: {
          en: "The five basic tastes are sweet, sour (acidity), bitter (tannins), salty, and umami (savory). These are detected by taste buds on the tongue.",
          es: "Los cinco sabores básicos son dulce, agrio (acidez), amargo (taninos), salado y umami (sabroso). Estos son detectados por las papilas gustativas en la lengua.",
          de: "Die fünf Grundgeschmäcker sind süß, sauer (Säure), bitter (Tannine), salzig und umami (herzhaft). Diese werden von Geschmacksknospen auf der Zunge erkannt.",
          nl: "De vijf basissmaken zijn zoet, zuur (zuurgraad), bitter (tannines), zout en umami (hartig). Deze worden gedetecteerd door smaakpapillen op de tong."
        }
      },
      {
        question: {
          en: "What does 'legs' or 'tears' on a wine glass indicate?",
          es: "¿Qué indican las 'lágrimas' o 'piernas' en una copa de vino?",
          de: "Was zeigen 'Tränen' oder 'Beine' am Weinglas an?",
          nl: "Wat geven 'benen' of 'tranen' op een wijnglas aan?"
        },
        options: [
          { en: "Wine quality", es: "Calidad del vino", de: "Weinqualität", nl: "Wijnkwaliteit" },
          { en: "Alcohol content and glycerol", es: "Contenido de alcohol y glicerol", de: "Alkoholgehalt und Glycerin", nl: "Alcoholgehalte en glycerol" },
          { en: "Age of the wine", es: "Edad del vino", de: "Alter des Weins", nl: "Leeftijd van de wijn" },
          { en: "Grape variety", es: "Variedad de uva", de: "Rebsorte", nl: "Druivensoort" }
        ],
        correct: 1,
        explanation: {
          en: "Wine legs indicate alcohol content and glycerol levels. Higher alcohol wines form more pronounced, slower-falling legs due to surface tension differences.",
          es: "Las lágrimas del vino indican contenido de alcohol y niveles de glicerol. Vinos con mayor alcohol forman lágrimas más pronunciadas y que caen más lentamente debido a diferencias de tensión superficial.",
          de: "Weintränen zeigen Alkoholgehalt und Glycerinwerte an. Höherprozentige Weine bilden ausgeprägtere, langsamer fallende Tränen aufgrund von Oberflächenspannungsunterschieden.",
          nl: "Wijnbenen geven alcoholgehalte en glycerolniveaus aan. Wijnen met hoger alcoholgehalte vormen meer uitgesproken, langzamer vallende benen door oppervlaktespanningsverschillen."
        }
      },
      {
        question: {
          en: "What is the correct order for wine tasting steps?",
          es: "¿Cuál es el orden correcto para los pasos de cata de vinos?",
          de: "Was ist die richtige Reihenfolge für Weinprobe-Schritte?",
          nl: "Wat is de juiste volgorde voor wijnproefstappen?"
        },
        options: [
          { en: "Taste, smell, see", es: "Probar, oler, ver", de: "Schmecken, riechen, sehen", nl: "Proeven, ruiken, zien" },
          { en: "See, smell, taste", es: "Ver, oler, probar", de: "Sehen, riechen, schmecken", nl: "Zien, ruiken, proeven" },
          { en: "Smell, see, taste", es: "Oler, ver, probar", de: "Riechen, sehen, schmecken", nl: "Ruiken, zien, proeven" },
          { en: "See, taste, smell", es: "Ver, probar, oler", de: "Sehen, schmecken, riechen", nl: "Zien, proeven, ruiken" }
        ],
        correct: 1,
        explanation: {
          en: "The proper wine tasting sequence is: See (visual examination), Smell (nose/aroma), Taste (palate evaluation). This systematic approach maximizes sensory analysis.",
          es: "La secuencia correcta de cata es: Ver (examen visual), Oler (nariz/aroma), Probar (evaluación del paladar). Este enfoque sistemático maximiza el análisis sensorial.",
          de: "Die richtige Weinprobe-Reihenfolge ist: Sehen (visuelle Prüfung), Riechen (Nase/Aroma), Schmecken (Gaumen-Bewertung). Dieser systematische Ansatz maximiert die Sinnesanalyse.",
          nl: "De juiste wijnproefvolgorde is: Zien (visueel onderzoek), Ruiken (neus/aroma), Proeven (smaakevaluatie). Deze systematische benadering maximaliseert sensorische analyse."
        }
      },
      {
        question: {
          en: "What does 'minerality' mean in wine tasting?",
          es: "¿Qué significa 'mineralidad' en la cata de vinos?",
          de: "Was bedeutet 'Mineralität' bei der Weinprobe?",
          nl: "Wat betekent 'mineraliteit' bij wijnproeven?"
        },
        options: [
          { en: "High mineral content", es: "Alto contenido mineral", de: "Hoher Mineralgehalt", nl: "Hoog mineraalgehalte" },
          { en: "Earthy, stony flavors and textures", es: "Sabores y texturas terrosos y pedregosos", de: "Erdige, steinige Aromen und Texturen", nl: "Aardse, steenachtige smaken en texturen" },
          { en: "Added minerals", es: "Minerales añadidos", de: "Zugesetzte Mineralien", nl: "Toegevoegde mineralen" },
          { en: "Metallic taste", es: "Sabor metálico", de: "Metallischer Geschmack", nl: "Metaalsmaak" }
        ],
        correct: 1,
        explanation: {
          en: "Minerality describes earthy, stony, or chalk-like flavors and textures in wine, often associated with specific terroir and vineyard soils.",
          es: "La mineralidad describe sabores y texturas terrosos, pedregosos o calcáreos en el vino, a menudo asociados con terroir específico y suelos de viñedo.",
          de: "Mineralität beschreibt erdige, steinige oder kreidige Aromen und Texturen im Wein, oft verbunden mit spezifischem Terroir und Weinbergböden.",
          nl: "Mineraliteit beschrijft aardse, steenachtige of krijtachtige smaken en texturen in wijn, vaak geassocieerd met specifiek terroir en wijngaardgronden."
        }
      },
      {
        question: {
          en: "What is the difference between aroma and bouquet?",
          es: "¿Cuál es la diferencia entre aroma y bouquet?",
          de: "Was ist der Unterschied zwischen Aroma und Bouquet?",
          nl: "Wat is het verschil tussen aroma en bouquet?"
        },
        options: [
          { en: "No difference - same thing", es: "No hay diferencia - es lo mismo", de: "Kein Unterschied - dasselbe", nl: "Geen verschil - hetzelfde" },
          { en: "Aroma from grapes, bouquet from winemaking/aging", es: "Aroma de uvas, bouquet de vinificación/envejecimiento", de: "Aroma von Trauben, Bouquet von Weinherstellung/Reifung", nl: "Aroma van druiven, bouquet van wijnmaken/rijping" },
          { en: "Bouquet is stronger than aroma", es: "Bouquet es más fuerte que aroma", de: "Bouquet ist stärker als Aroma", nl: "Bouquet is sterker dan aroma" },
          { en: "Aroma is for whites, bouquet for reds", es: "Aroma es para blancos, bouquet para tintos", de: "Aroma für Weiße, Bouquet für Rote", nl: "Aroma is voor wit, bouquet voor rood" }
        ],
        correct: 1,
        explanation: {
          en: "Aroma refers to scents from the grape variety itself, while bouquet describes complex scents developed through winemaking and aging processes.",
          es: "El aroma se refiere a los aromas de la variedad de uva misma, mientras que bouquet describe aromas complejos desarrollados a través de procesos de vinificación y envejecimiento.",
          de: "Aroma bezieht sich auf Düfte der Rebsorte selbst, während Bouquet komplexe Düfte beschreibt, die durch Weinherstellung und Reifungsprozesse entwickelt werden.",
          nl: "Aroma verwijst naar geuren van de druivensoort zelf, terwijl bouquet complexe geuren beschrijft die ontwikkeld zijn door wijnmaak- en rijpingsprocessen."
        }
      },
      {
        question: {
          en: "What does 'finish' mean in wine tasting?",
          es: "¿Qué significa 'final' en la cata de vinos?",
          de: "Was bedeutet 'Abgang' bei der Weinprobe?",
          nl: "Wat betekent 'afdronk' bij wijnproeven?"
        },
        options: [
          { en: "The final vintage year", es: "El año de cosecha final", de: "Das letzte Erntejahr", nl: "Het laatste oogstjaar" },
          { en: "When wine production is complete", es: "Cuando la producción de vino se completa", de: "Wenn die Weinproduktion abgeschlossen ist", nl: "Wanneer wijnproductie voltooid is" },
          { en: "Lingering flavors after swallowing", es: "Sabores persistentes después de tragar", de: "Anhaltende Geschmäcker nach dem Schlucken", nl: "Aanhoudende smaken na het slikken" },
          { en: "The last bottle in a case", es: "La última botella de una caja", de: "Die letzte Flasche in einem Karton", nl: "De laatste fles in een kist" }
        ],
        correct: 2,
        explanation: {
          en: "The finish is the lingering taste and sensation that remains in your mouth after swallowing wine. A long finish indicates quality.",
          es: "El final son los sabores y sensaciones persistentes que permanecen en la boca después de tragar el vino. Un final largo indica calidad.",
          de: "Der Abgang sind die anhaltenden Geschmäcker und Empfindungen, die nach dem Schlucken des Weins im Mund verbleiben. Ein langer Abgang zeigt Qualität an.",
          nl: "De afdronk zijn de aanhoudende smaak en sensatie die in je mond blijven na het slikken van wijn. Een lange afdronk duidt op kwaliteit."
        }
      },
      {
        question: {
          en: "What temperature should red wine be served for optimal tasting?",
          es: "¿A qué temperatura debe servirse el vino tinto para una cata óptima?",
          de: "Bei welcher Temperatur sollte Rotwein für optimale Verkostung serviert werden?",
          nl: "Op welke temperatuur moet rode wijn geserveerd worden voor optimaal proeven?"
        },
        options: [
          { en: "Ice cold (5-8°C)", es: "Muy frío (5-8°C)", de: "Eiskalt (5-8°C)", nl: "IJskoud (5-8°C)" },
          { en: "Cellar temperature (12-15°C)", es: "Temperatura de bodega (12-15°C)", de: "Kellertemperatur (12-15°C)", nl: "Keldertemperatuur (12-15°C)" },
          { en: "Room temperature (16-18°C)", es: "Temperatura ambiente (16-18°C)", de: "Zimmertemperatur (16-18°C)", nl: "Kamertemperatuur (16-18°C)" },
          { en: "Warm (22-25°C)", es: "Caliente (22-25°C)", de: "Warm (22-25°C)", nl: "Warm (22-25°C)" }
        ],
        correct: 2,
        explanation: {
          en: "Red wine is best tasted at 16-18°C (room temperature) to allow full expression of aromas and flavors without alcohol dominating.",
          es: "El vino tinto se prueba mejor a 16-18°C (temperatura ambiente) para permitir la expresión completa de aromas y sabores sin que domine el alcohol.",
          de: "Rotwein wird am besten bei 16-18°C (Zimmertemperatur) verkostet, um die vollständige Entfaltung von Aromen und Geschmäckern ohne Alkoholdominanz zu ermöglichen.",
          nl: "Rode wijn wordt het best geproefd op 16-18°C (kamertemperatuur) om volledige expressie van aroma's en smaken mogelijk te maken zonder dat alcohol domineert."
        }
      },
      {
        question: {
          en: "What is the purpose of swirling wine in the glass?",
          es: "¿Cuál es el propósito de hacer girar el vino en la copa?",
          de: "Was ist der Zweck des Schwenkens von Wein im Glas?",
          nl: "Wat is het doel van het wervelen van wijn in het glas?"
        },
        options: [
          { en: "To cool the wine", es: "Para enfriar el vino", de: "Um den Wein zu kühlen", nl: "Om de wijn te koelen" },
          { en: "To release aromas and oxygenate", es: "Para liberar aromas y oxigenar", de: "Um Aromen freizusetzen und zu belüften", nl: "Om aroma's vrij te maken en te beluchten" },
          { en: "To mix different wines", es: "Para mezclar diferentes vinos", de: "Um verschiedene Weine zu mischen", nl: "Om verschillende wijnen te mengen" },
          { en: "To check alcohol content", es: "Para verificar el contenido de alcohol", de: "Um den Alkoholgehalt zu prüfen", nl: "Om alcoholgehalte te controleren" }
        ],
        correct: 1,
        explanation: {
          en: "Swirling wine increases the surface area exposed to air, releasing volatile compounds that carry aromas and helping wine 'open up'.",
          es: "Hacer girar el vino aumenta la superficie expuesta al aire, liberando compuestos volátiles que llevan aromas y ayudando al vino a 'abrirse'.",
          de: "Das Schwenken von Wein vergrößert die Oberfläche, die der Luft ausgesetzt ist, setzt flüchtige Verbindungen frei, die Aromen tragen, und hilft dem Wein sich zu 'öffnen'.",
          nl: "Het wervelen van wijn vergroot het oppervlak dat wordt blootgesteld aan lucht, geeft vluchtige verbindingen vrij die aroma's dragen en helpt wijn 'open te gaan'."
        }
      },
      {
        question: {
          en: "What does 'body' refer to in wine tasting?",
          es: "¿A qué se refiere el 'cuerpo' en la cata de vinos?",
          de: "Worauf bezieht sich 'Körper' bei der Weinprobe?",
          nl: "Waar verwijst 'body' naar bij wijnproeven?"
        },
        options: [
          { en: "Wine color intensity", es: "Intensidad del color del vino", de: "Farbintensität des Weins", nl: "Wijnkleur intensiteit" },
          { en: "Alcohol percentage", es: "Porcentaje de alcohol", de: "Alkoholprozentsatz", nl: "Alcoholpercentage" },
          { en: "Weight and texture on the palate", es: "Peso y textura en el paladar", de: "Gewicht und Textur am Gaumen", nl: "Gewicht en textuur op het gehemelte" },
          { en: "Bottle size", es: "Tamaño de botella", de: "Flaschengröße", nl: "Flesgrootte" }
        ],
        correct: 2,
        explanation: {
          en: "Body describes the weight, richness, and texture of wine in your mouth - light, medium, or full-bodied, determined by alcohol, extract, and glycerol.",
          es: "El cuerpo describe el peso, riqueza y textura del vino en la boca - ligero, medio o con cuerpo completo, determinado por alcohol, extracto y glicerol.",
          de: "Körper beschreibt das Gewicht, die Reichhaltigkeit und Textur des Weins im Mund - leicht, mittel oder vollmundig, bestimmt durch Alkohol, Extrakt und Glycerin.",
          nl: "Body beschrijft het gewicht, rijkdom en textuur van wijn in je mond - licht, medium of vol, bepaald door alcohol, extract en glycerol."
        }
      },
      {
        question: {
          en: "What causes 'wine faults' like cork taint?",
          es: "¿Qué causa 'defectos del vino' como el sabor a corcho?",
          de: "Was verursacht 'Weinfehler' wie Korkschmecker?",
          nl: "Wat veroorzaakt 'wijngebreken' zoals kurksmaak?"
        },
        options: [
          { en: "Poor grape quality", es: "Mala calidad de uva", de: "Schlechte Traubenqualität", nl: "Slechte druivenkwaliteit" },
          { en: "Chemical compounds like TCA", es: "Compuestos químicos como TCA", de: "Chemische Verbindungen wie TCA", nl: "Chemische verbindingen zoals TCA" },
          { en: "High alcohol content", es: "Alto contenido de alcohol", de: "Hoher Alkoholgehalt", nl: "Hoog alcoholgehalte" },
          { en: "Old wine age", es: "Edad avanzada del vino", de: "Hohes Weinalter", nl: "Oude wijnleeftijd" }
        ],
        correct: 1,
        explanation: {
          en: "Cork taint is caused by TCA (2,4,6-trichloroanisole), a chemical compound that creates musty, wet cardboard aromas and kills fruit flavors.",
          es: "El sabor a corcho es causado por TCA (2,4,6-tricloroanisol), un compuesto químico que crea aromas mohosos de cartón húmedo y mata los sabores frutales.",
          de: "Korkschmecker wird durch TCA (2,4,6-Trichloranisol) verursacht, eine chemische Verbindung, die muffige, nasse Karton-Aromen erzeugt und Fruchtaromen abtötet.",
          nl: "Kurksmaak wordt veroorzaakt door TCA (2,4,6-trichloranisol), een chemische verbinding die muffe, natte karton aroma's creëert en fruitsmaken doodt."
        }
      },
      {
        question: {
          en: "What does 'balanced' mean when describing wine?",
          es: "¿Qué significa 'equilibrado' al describir el vino?",
          de: "Was bedeutet 'ausgewogen' bei der Beschreibung von Wein?",
          nl: "Wat betekent 'evenwichtig' bij het beschrijven van wijn?"
        },
        options: [
          { en: "Equal amounts of red and white grapes", es: "Cantidades iguales de uvas tintas y blancas", de: "Gleiche Mengen roter und weißer Trauben", nl: "Gelijke hoeveelheden rode en witte druiven" },
          { en: "Harmonious integration of components", es: "Integración armoniosa de componentes", de: "Harmonische Integration der Komponenten", nl: "Harmonieuze integratie van componenten" },
          { en: "Medium alcohol content", es: "Contenido medio de alcohol", de: "Mittlerer Alkoholgehalt", nl: "Medium alcoholgehalte" },
          { en: "Aged for exactly 5 years", es: "Envejecido exactamente 5 años", de: "Genau 5 Jahre gereift", nl: "Precies 5 jaar gerijpt" }
        ],
        correct: 1,
        explanation: {
          en: "A balanced wine has harmonious integration where no single element (acidity, tannins, alcohol, fruit, oak) dominates; all components work together.",
          es: "Un vino equilibrado tiene una integración armoniosa donde ningún elemento (acidez, taninos, alcohol, fruta, roble) domina; todos los componentes trabajan juntos.",
          de: "Ein ausgewogener Wein hat eine harmonische Integration, bei der kein einzelnes Element (Säure, Tannine, Alkohol, Frucht, Eiche) dominiert; alle Komponenten arbeiten zusammen.",
          nl: "Een evenwichtige wijn heeft een harmonieuze integratie waarbij geen enkel element (zuurgraad, tannines, alcohol, fruit, eiken) domineert; alle componenten werken samen."
        }
      },
      {
        question: {
          en: "What is 'oxidation' in wine and how does it affect taste?",
          es: "¿Qué es la 'oxidación' en el vino y cómo afecta el sabor?",
          de: "Was ist 'Oxidation' bei Wein und wie beeinflusst sie den Geschmack?",
          nl: "Wat is 'oxidatie' in wijn en hoe beïnvloedt het de smaak?"
        },
        options: [
          { en: "Exposure to oxygen; creates sherry-like, nutty flavors", es: "Exposición al oxígeno; crea sabores como jerez, a nuez", de: "Sauerstoffkontakt; erzeugt sherry-artige, nussige Aromen", nl: "Blootstelling aan zuurstof; creëert sherry-achtige, nootachtige smaken" },
          { en: "Adding oxygen; improves all wines", es: "Agregar oxígeno; mejora todos los vinos", de: "Sauerstoff hinzufügen; verbessert alle Weine", nl: "Zuurstof toevoegen; verbetert alle wijnen" },
          { en: "Wine turning to vinegar", es: "Vino convirtiéndose en vinagre", de: "Wein wird zu Essig", nl: "Wijn wordt azijn" },
          { en: "Natural aging process, always positive", es: "Proceso de envejecimiento natural, siempre positivo", de: "Natürlicher Alterungsprozess, immer positiv", nl: "Natuurlijk verouderingsproces, altijd positief" }
        ],
        correct: 0,
        explanation: {
          en: "Oxidation occurs when wine is excessively exposed to oxygen, resulting in browning and sherry-like, nutty flavors. While controlled oxidation can be desirable (as in sherry), uncontrolled oxidation is a wine fault.",
          es: "La oxidación ocurre cuando el vino está excesivamente expuesto al oxígeno, resultando en pardeamiento y sabores como jerez, a nuez. Aunque la oxidación controlada puede ser deseable (como en el jerez), la oxidación no controlada es un defecto del vino.",
          de: "Oxidation tritt auf, wenn Wein übermäßig Sauerstoff ausgesetzt ist, was zu Bräunung und sherry-artigen, nussigen Aromen führt. Während kontrollierte Oxidation wünschenswert sein kann (wie bei Sherry), ist unkontrollierte Oxidation ein Weinfehler.",
          nl: "Oxidatie treedt op wanneer wijn overmatig wordt blootgesteld aan zuurstof, wat resulteert in verkleuring en sherry-achtige, nootachtige smaken. Hoewel gecontroleerde oxidatie wenselijk kan zijn (zoals bij sherry), is ongecontroleerde oxidatie een wijngebrek."
        }
      },
      {
        question: {
          en: "What does 'structure' refer to in wine evaluation?",
          es: "¿A qué se refiere 'estructura' en la evaluación del vino?",
          de: "Worauf bezieht sich 'Struktur' bei der Weinbewertung?",
          nl: "Waar verwijst 'structuur' naar bij wijnevaluatie?"
        },
        options: [
          { en: "The bottle shape", es: "La forma de la botella", de: "Die Flaschenform", nl: "De flesvorm" },
          { en: "Framework of tannins, acidity, and body", es: "Marco de taninos, acidez y cuerpo", de: "Gerüst aus Tanninen, Säure und Körper", nl: "Kader van tannines, zuurgraad en body" },
          { en: "Vineyard organization", es: "Organización del viñedo", de: "Weinbergorganisation", nl: "Wijngaardorganisatie" },
          { en: "Chemical composition only", es: "Solo composición química", de: "Nur chemische Zusammensetzung", nl: "Alleen chemische samenstelling" }
        ],
        correct: 1,
        explanation: {
          en: "Structure refers to the framework provided by key components - tannins, acidity, and body - that give wine its backbone and aging potential.",
          es: "La estructura se refiere al marco proporcionado por componentes clave - taninos, acidez y cuerpo - que dan al vino su columna vertebral y potencial de envejecimiento.",
          de: "Struktur bezieht sich auf das Gerüst, das durch Schlüsselkomponenten bereitgestellt wird - Tannine, Säure und Körper - die dem Wein sein Rückgrat und Alterungspotenzial geben.",
          nl: "Structuur verwijst naar het kader dat wordt geleverd door belangrijke componenten - tannines, zuurgraad en body - die wijn zijn ruggengraat en verouderingspotentieel geven."
        }
      },
      {
        question: {
          en: "What is the purpose of aerating or decanting wine?",
          es: "¿Cuál es el propósito de airear o decantar el vino?",
          de: "Was ist der Zweck des Belüftens oder Dekantierens von Wein?",
          nl: "Wat is het doel van het beluchten of decanteren van wijn?"
        },
        options: [
          { en: "To cool the wine faster", es: "Para enfriar el vino más rápido", de: "Um den Wein schneller zu kühlen", nl: "Om de wijn sneller te koelen" },
          { en: "To separate sediment and allow wine to breathe", es: "Para separar sedimentos y permitir que el vino respire", de: "Um Sediment zu trennen und Wein atmen zu lassen", nl: "Om sediment te scheiden en wijn te laten ademen" },
          { en: "To increase alcohol content", es: "Para aumentar el contenido de alcohol", de: "Um den Alkoholgehalt zu erhöhen", nl: "Om alcoholgehalte te verhogen" },
          { en: "To add flavors", es: "Para agregar sabores", de: "Um Aromen hinzuzufügen", nl: "Om smaken toe te voegen" }
        ],
        correct: 1,
        explanation: {
          en: "Decanting separates sediment from aged wines and allows wine to breathe (oxygenate), softening tannins and opening up complex aromas and flavors.",
          es: "Decantar separa los sedimentos de vinos añejos y permite que el vino respire (oxigenar), suavizando taninos y abriendo aromas y sabores complejos.",
          de: "Dekantieren trennt Sediment von gealterten Weinen und lässt Wein atmen (oxidieren), wodurch Tannine weicher werden und komplexe Aromen und Geschmäcker sich öffnen.",
          nl: "Decanteren scheidt sediment van verouderde wijnen en laat wijn ademen (oxideren), waardoor tannines zachter worden en complexe aroma's en smaken zich openen."
        }
      },
      {
        question: {
          en: "What are 'primary aromas' in wine?",
          es: "¿Qué son los 'aromas primarios' en el vino?",
          de: "Was sind 'primäre Aromen' bei Wein?",
          nl: "Wat zijn 'primaire aroma's' in wijn?"
        },
        options: [
          { en: "The most important aromas", es: "Los aromas más importantes", de: "Die wichtigsten Aromen", nl: "De belangrijkste aroma's" },
          { en: "Aromas from grape variety and terroir", es: "Aromas de la variedad de uva y terroir", de: "Aromen von Rebsorte und Terroir", nl: "Aroma's van druivensoort en terroir" },
          { en: "First aromas you smell", es: "Primeros aromas que hueles", de: "Erste Aromen, die Sie riechen", nl: "Eerste aroma's die je ruikt" },
          { en: "Aromas from oak barrels", es: "Aromas de barricas de roble", de: "Aromen von Eichenfässern", nl: "Aroma's van eiken vaten" }
        ],
        correct: 1,
        explanation: {
          en: "Primary aromas come directly from the grape variety and terroir - fruity, floral, and herbal characteristics inherent to the grape itself.",
          es: "Los aromas primarios provienen directamente de la variedad de uva y terroir - características afrutadas, florales y herbáceas inherentes a la uva misma.",
          de: "Primäre Aromen stammen direkt von der Rebsorte und dem Terroir - fruchtige, blumige und kräuterige Eigenschaften, die der Traube selbst innewohnen.",
          nl: "Primaire aroma's komen direct van de druivensoort en terroir - fruitige, bloemen en kruidachtige kenmerken die inherent zijn aan de druif zelf."
        }
      },
      {
        question: {
          en: "What are 'secondary aromas' derived from?",
          es: "¿De dónde se derivan los 'aromas secundarios'?",
          de: "Woher stammen 'sekundäre Aromen'?",
          nl: "Waar komen 'secundaire aroma's' vandaan?"
        },
        options: [
          { en: "The second harvest", es: "La segunda cosecha", de: "Die zweite Ernte", nl: "De tweede oogst" },
          { en: "Fermentation and winemaking processes", es: "Procesos de fermentación y vinificación", de: "Gärung und Weinherstellungsprozesse", nl: "Fermentatie en wijnmaakprocessen" },
          { en: "Lower quality grapes", es: "Uvas de menor calidad", de: "Trauben von geringerer Qualität", nl: "Druiven van lagere kwaliteit" },
          { en: "Bottle aging", es: "Envejecimiento en botella", de: "Flaschenreifung", nl: "Flesrijping" }
        ],
        correct: 1,
        explanation: {
          en: "Secondary aromas develop during fermentation and winemaking - yeast-derived characteristics like bread, butter, cream, and aromas from oak aging.",
          es: "Los aromas secundarios se desarrollan durante la fermentación y vinificación - características derivadas de levadura como pan, mantequilla, crema, y aromas del envejecimiento en roble.",
          de: "Sekundäre Aromen entwickeln sich während der Gärung und Weinherstellung - von Hefe abgeleitete Eigenschaften wie Brot, Butter, Sahne und Aromen aus Eichenreifung.",
          nl: "Secundaire aroma's ontwikkelen zich tijdens fermentatie en wijnmaken - van gist afgeleide kenmerken zoals brood, boter, room, en aroma's van eikenrijping."
        }
      },
      {
        question: {
          en: "What are 'tertiary aromas' in wine?",
          es: "¿Qué son los 'aromas terciarios' en el vino?",
          de: "Was sind 'tertiäre Aromen' bei Wein?",
          nl: "Wat zijn 'tertiaire aroma's' in wijn?"
        },
        options: [
          { en: "The least important aromas", es: "Los aromas menos importantes", de: "Die unwichtigsten Aromen", nl: "De minst belangrijke aroma's" },
          { en: "Aromas that develop with bottle aging", es: "Aromas que se desarrollan con el envejecimiento en botella", de: "Aromen, die sich mit Flaschenreifung entwickeln", nl: "Aroma's die zich ontwikkelen met flesrijping" },
          { en: "Three types of grape blended together", es: "Tres tipos de uva mezclados", de: "Drei Traubensorten gemischt", nl: "Drie soorten druiven gemengd" },
          { en: "Defective wine aromas", es: "Aromas de vino defectuoso", de: "Fehlerhafte Weinaromen", nl: "Gebrekkige wijnaroma's" }
        ],
        correct: 1,
        explanation: {
          en: "Tertiary aromas develop during bottle aging - complex characteristics like leather, tobacco, earth, dried fruits, and spices that emerge over time.",
          es: "Los aromas terciarios se desarrollan durante el envejecimiento en botella - características complejas como cuero, tabaco, tierra, frutas secas y especias que emergen con el tiempo.",
          de: "Tertiäre Aromen entwickeln sich während der Flaschenreifung - komplexe Eigenschaften wie Leder, Tabak, Erde, Trockenfrüchte und Gewürze, die sich im Laufe der Zeit entwickeln.",
          nl: "Tertiaire aroma's ontwikkelen zich tijdens flesrijping - complexe kenmerken zoals leer, tabak, aarde, gedroogd fruit en kruiden die zich in de loop van de tijd ontwikkelen."
        }
      },
      {
        question: {
          en: "What does 'mouthfeel' describe in wine tasting?",
          es: "¿Qué describe la 'sensación en boca' en la cata de vinos?",
          de: "Was beschreibt das 'Mundgefühl' bei der Weinprobe?",
          nl: "Wat beschrijft 'mondgevoel' bij wijnproeven?"
        },
        options: [
          { en: "Temperature of the wine", es: "Temperatura del vino", de: "Temperatur des Weins", nl: "Temperatuur van de wijn" },
          { en: "Physical sensations and texture on the palate", es: "Sensaciones físicas y textura en el paladar", de: "Physische Empfindungen und Textur am Gaumen", nl: "Fysieke sensaties en textuur op het gehemelte" },
          { en: "Aftertaste duration", es: "Duración del retrogusto", de: "Nachgeschmacksdauer", nl: "Nasmaakduur" },
          { en: "Shape of the wine glass", es: "Forma de la copa de vino", de: "Form des Weinglases", nl: "Vorm van het wijnglas" }
        ],
        correct: 1,
        explanation: {
          en: "Mouthfeel refers to tactile sensations - smoothness, creaminess, astringency, weight, and texture - perceived in the mouth beyond taste.",
          es: "La sensación en boca se refiere a sensaciones táctiles - suavidad, cremosidad, astringencia, peso y textura - percibidas en la boca más allá del sabor.",
          de: "Mundgefühl bezieht sich auf taktile Empfindungen - Geschmeidigkeit, Cremigkeit, Adstringenz, Gewicht und Textur - die im Mund jenseits des Geschmacks wahrgenommen werden.",
          nl: "Mondgevoel verwijst naar tactiele sensaties - gladheid, romigheid, samentrekkendheid, gewicht en textuur - waargenomen in de mond naast smaak."
        }
      },
      {
        question: {
          en: "What is 'vertical tasting' in wine evaluation?",
          es: "¿Qué es la 'cata vertical' en la evaluación del vino?",
          de: "Was ist 'vertikale Verkostung' bei der Weinbewertung?",
          nl: "Wat is 'verticale proeverij' bij wijnevaluatie?"
        },
        options: [
          { en: "Tasting wine while standing up", es: "Probar vino de pie", de: "Wein im Stehen verkosten", nl: "Wijn proeven terwijl je staat" },
          { en: "Same wine from different vintages", es: "Mismo vino de diferentes añadas", de: "Gleicher Wein aus verschiedenen Jahrgängen", nl: "Zelfde wijn van verschillende jaargangen" },
          { en: "Comparing wines from high and low vineyards", es: "Comparar vinos de viñedos altos y bajos", de: "Vergleich von Weinen aus hohen und tiefen Weinbergen", nl: "Wijnen vergelijken van hoge en lage wijngaarden" },
          { en: "Tasting wines in price order", es: "Probar vinos en orden de precio", de: "Weine in Preisreihenfolge verkosten", nl: "Wijnen proeven in prijsvolgorde" }
        ],
        correct: 1,
        explanation: {
          en: "Vertical tasting compares the same wine from different vintages to evaluate how the wine evolves over years and how vintage conditions affect quality.",
          es: "La cata vertical compara el mismo vino de diferentes añadas para evaluar cómo evoluciona el vino a lo largo de los años y cómo las condiciones de la añada afectan la calidad.",
          de: "Vertikale Verkostung vergleicht denselben Wein aus verschiedenen Jahrgängen, um zu bewerten, wie sich der Wein über Jahre entwickelt und wie Jahrgangsbedingungen die Qualität beeinflussen.",
          nl: "Verticale proeverij vergelijkt dezelfde wijn van verschillende jaargangen om te evalueren hoe de wijn evolueert over jaren en hoe jaargangsomstandigheden de kwaliteit beïnvloeden."
        }
      },
      {
        question: {
          en: "What is 'horizontal tasting' in wine evaluation?",
          es: "¿Qué es la 'cata horizontal' en la evaluación del vino?",
          de: "Was ist 'horizontale Verkostung' bei der Weinbewertung?",
          nl: "Wat is 'horizontale proeverij' bij wijnevaluatie?"
        },
        options: [
          { en: "Tasting wine while lying down", es: "Probar vino acostado", de: "Wein im Liegen verkosten", nl: "Wijn proeven terwijl je ligt" },
          { en: "Different wines from the same vintage", es: "Diferentes vinos de la misma añada", de: "Verschiedene Weine aus demselben Jahrgang", nl: "Verschillende wijnen van dezelfde jaargang" },
          { en: "Wines from the same region only", es: "Vinos de la misma región solamente", de: "Nur Weine aus derselben Region", nl: "Alleen wijnen uit dezelfde regio" },
          { en: "Comparing wine at different temperatures", es: "Comparar vino a diferentes temperaturas", de: "Wein bei verschiedenen Temperaturen vergleichen", nl: "Wijn vergelijken bij verschillende temperaturen" }
        ],
        correct: 1,
        explanation: {
          en: "Horizontal tasting compares different wines (producers, regions, or styles) from the same vintage year to evaluate how various factors affect the wines.",
          es: "La cata horizontal compara diferentes vinos (productores, regiones o estilos) del mismo año de cosecha para evaluar cómo varios factores afectan los vinos.",
          de: "Horizontale Verkostung vergleicht verschiedene Weine (Produzenten, Regionen oder Stile) aus demselben Jahrgang, um zu bewerten, wie verschiedene Faktoren die Weine beeinflussen.",
          nl: "Horizontale proeverij vergelijkt verschillende wijnen (producenten, regio's of stijlen) van hetzelfde oogstjaar om te evalueren hoe verschillende factoren de wijnen beïnvloeden."
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
