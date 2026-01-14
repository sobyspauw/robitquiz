// Quiz - Level 3: Drinken - Wijn (Wijnregio's)
(function() {
  const level3 = {
    name: {
      en: "Wine Regions",
      es: "Regiones Vinícolas",
      de: "Weinregionen",
      nl: "Wijnregio's"
    },
    questions: [
      {
        question: {
          en: "Which French region is famous for Champagne production?",
          es: "¿Qué región francesa es famosa por la producción de Champagne?",
          de: "Welche französische Region ist berühmt für die Champagnerproduktion?",
          nl: "Welke Franse regio is beroemd voor Champagneproductie?"
        },
        options: [
          { en: "Bordeaux", es: "Burdeos", de: "Bordeaux", nl: "Bordeaux" },
          { en: "Champagne", es: "Champagne", de: "Champagne", nl: "Champagne" },
          { en: "Burgundy", es: "Borgoña", de: "Burgund", nl: "Bourgogne" },
          { en: "Loire Valley", es: "Valle del Loira", de: "Loiretal", nl: "Loirevallei" }
        ],
        correct: 1,
        explanation: {
          en: "The Champagne region in northeastern France is the only region legally allowed to produce Champagne.",
          es: "La región de Champagne en el noreste de Francia es la única región legalmente autorizada para producir Champagne.",
          de: "Die Champagne-Region im Nordosten Frankreichs ist die einzige Region, die legal Champagner produzieren darf.",
          nl: "De Champagne-regio in noordoost Frankrijk is de enige regio die wettelijk Champagne mag produceren."
        }
      },
      {
        question: {
          en: "What are the five First Growth châteaux of Bordeaux's 1855 classification?",
          es: "¿Cuáles son los cinco châteaux de Primera Clasificación de Burdeos de 1855?",
          de: "Was sind die fünf Ersten Gewächse der Bordeaux-Klassifikation von 1855?",
          nl: "Wat zijn de vijf Premier Grand Cru châteaux van de Bordeaux 1855 classificatie?"
        },
        options: [
          { en: "Lafite, Latour, Margaux, Haut-Brion, Mouton", es: "Lafite, Latour, Margaux, Haut-Brion, Mouton", de: "Lafite, Latour, Margaux, Haut-Brion, Mouton", nl: "Lafite, Latour, Margaux, Haut-Brion, Mouton" },
          { en: "Pétrus, Le Pin, Cheval Blanc, Ausone, Figeac", es: "Pétrus, Le Pin, Cheval Blanc, Ausone, Figeac", de: "Pétrus, Le Pin, Cheval Blanc, Ausone, Figeac", nl: "Pétrus, Le Pin, Cheval Blanc, Ausone, Figeac" },
          { en: "Romanée-Conti, La Tâche, Richebourg, Romanée, Grands Échézeaux", es: "Romanée-Conti, La Tâche, Richebourg, Romanée, Grands Échézeaux", de: "Romanée-Conti, La Tâche, Richebourg, Romanée, Grands Échézeaux", nl: "Romanée-Conti, La Tâche, Richebourg, Romanée, Grands Échézeaux" },
          { en: "Yquem, Climens, Coutet, Guiraud, Rieussec", es: "Yquem, Climens, Coutet, Guiraud, Rieussec", de: "Yquem, Climens, Coutet, Guiraud, Rieussec", nl: "Yquem, Climens, Coutet, Guiraud, Rieussec" }
        ],
        correct: 0,
        explanation: {
          en: "The five First Growths are Château Lafite Rothschild, Latour, Margaux, Haut-Brion, and Mouton Rothschild (promoted in 1973).",
          es: "Los cinco Primeros Crecimientos son Château Lafite Rothschild, Latour, Margaux, Haut-Brion y Mouton Rothschild (promovido en 1973).",
          de: "Die fünf Ersten Gewächse sind Château Lafite Rothschild, Latour, Margaux, Haut-Brion und Mouton Rothschild (1973 befördert).",
          nl: "De vijf Premier Grand Crus zijn Château Lafite Rothschild, Latour, Margaux, Haut-Brion en Mouton Rothschild (gepromoveerd in 1973)."
        }
      },
      {
        question: {
          en: "Which Italian region is home to Brunello di Montalcino?",
          es: "¿Qué región italiana es el hogar del Brunello di Montalcino?",
          de: "Welche italienische Region ist die Heimat des Brunello di Montalcino?",
          nl: "Welke Italiaanse regio is de thuisbasis van Brunello di Montalcino?"
        },
        options: [
          { en: "Piedmont", es: "Piamonte", de: "Piemont", nl: "Piëmont" },
          { en: "Tuscany", es: "Toscana", de: "Toskana", nl: "Toscane" },
          { en: "Veneto", es: "Véneto", de: "Venetien", nl: "Veneto" },
          { en: "Sicily", es: "Sicilia", de: "Sizilien", nl: "Sicilië" }
        ],
        correct: 1,
        explanation: {
          en: "Brunello di Montalcino is produced in Tuscany, specifically in the town of Montalcino, using 100% Sangiovese grapes.",
          es: "El Brunello di Montalcino se produce en Toscana, específicamente en la ciudad de Montalcino, usando 100% uvas Sangiovese.",
          de: "Brunello di Montalcino wird in der Toskana produziert, speziell in der Stadt Montalcino, mit 100% Sangiovese-Trauben.",
          nl: "Brunello di Montalcino wordt geproduceerd in Toscane, specifiek in de stad Montalcino, met 100% Sangiovese druiven."
        }
      },
      {
        question: {
          en: "What is the most prestigious wine region in Germany?",
          es: "¿Cuál es la región vinícola más prestigiosa de Alemania?",
          de: "Was ist die prestigeträchtigste Weinregion Deutschlands?",
          nl: "Wat is de meest prestigieuze wijnregio van Duitsland?"
        },
        options: [
          { en: "Mosel", es: "Mosela", de: "Mosel", nl: "Moezel" },
          { en: "Rheingau", es: "Rheingau", de: "Rheingau", nl: "Rheingau" },
          { en: "Pfalz", es: "Pfalz", de: "Pfalz", nl: "Pfalz" },
          { en: "Baden", es: "Baden", de: "Baden", nl: "Baden" }
        ],
        correct: 0,
        explanation: {
          en: "Mosel is considered Germany's most prestigious region, famous for its steep slate slopes and exceptional Riesling wines.",
          es: "Mosela es considerada la región más prestigiosa de Alemania, famosa por sus empinadas laderas de pizarra y excepcionales vinos Riesling.",
          de: "Die Mosel gilt als Deutschlands prestigeträchtigste Region, berühmt für ihre steilen Schieferhänge und außergewöhnlichen Riesling-Weine.",
          nl: "Moezel wordt beschouwd als Duitsland's meest prestigieuze regio, beroemd om zijn steile leisteenhellingen en uitzonderlijke Riesling wijnen."
        }
      },
      {
        question: {
          en: "Which Spanish wine region is known for Albariño?",
          es: "¿Qué región vinícola española es conocida por el Albariño?",
          de: "Welche spanische Weinregion ist für Albariño bekannt?",
          nl: "Welke Spaanse wijnregio staat bekend om Albariño?"
        },
        options: [
          { en: "Rioja", es: "Rioja", de: "Rioja", nl: "Rioja" },
          { en: "Rías Baixas", es: "Rías Baixas", de: "Rías Baixas", nl: "Rías Baixas" },
          { en: "Priorat", es: "Priorato", de: "Priorat", nl: "Priorat" },
          { en: "Ribera del Duero", es: "Ribera del Duero", de: "Ribera del Duero", nl: "Ribera del Duero" }
        ],
        correct: 1,
        explanation: {
          en: "Rías Baixas in Galicia, northwestern Spain, is famous for its crisp, aromatic Albariño white wines.",
          es: "Rías Baixas en Galicia, noroeste de España, es famosa por sus vinos blancos Albariño frescos y aromáticos.",
          de: "Rías Baixas in Galizien, Nordwestspanien, ist berühmt für seine frischen, aromatischen Albariño-Weißweine.",
          nl: "Rías Baixas in Galicië, noordwest Spanje, is beroemd om zijn frisse, aromatische Albariño witte wijnen."
        }
      },
      {
        question: {
          en: "What is Napa Valley's most famous grape variety?",
          es: "¿Cuál es la variedad de uva más famosa del Valle de Napa?",
          de: "Was ist die berühmteste Rebsorte des Napa Valley?",
          nl: "Wat is Napa Valley's beroemdste druivensoort?"
        },
        options: [
          { en: "Pinot Noir", es: "Pinot Noir", de: "Pinot Noir", nl: "Pinot Noir" },
          { en: "Cabernet Sauvignon", es: "Cabernet Sauvignon", de: "Cabernet Sauvignon", nl: "Cabernet Sauvignon" },
          { en: "Zinfandel", es: "Zinfandel", de: "Zinfandel", nl: "Zinfandel" },
          { en: "Chardonnay", es: "Chardonnay", de: "Chardonnay", nl: "Chardonnay" }
        ],
        correct: 1,
        explanation: {
          en: "Cabernet Sauvignon is Napa Valley's signature grape, producing world-class wines that rival Bordeaux.",
          es: "Cabernet Sauvignon es la uva emblemática del Valle de Napa, produciendo vinos de clase mundial que rivalizan con Burdeos.",
          de: "Cabernet Sauvignon ist die charakteristische Traube des Napa Valley und produziert Weltklasse-Weine, die mit Bordeaux konkurrieren.",
          nl: "Cabernet Sauvignon is Napa Valley's kenmerkende druif, die wereldklasse wijnen produceert die wedijveren met Bordeaux."
        }
      },
      {
        question: {
          en: "Which Australian region is most famous for Shiraz?",
          es: "¿Qué región australiana es más famosa por el Shiraz?",
          de: "Welche australische Region ist am berühmtesten für Shiraz?",
          nl: "Welke Australische regio is het meest beroemd om Shiraz?"
        },
        options: [
          { en: "Hunter Valley", es: "Valle Hunter", de: "Hunter Valley", nl: "Hunter Valley" },
          { en: "Barossa Valley", es: "Valle Barossa", de: "Barossa Valley", nl: "Barossa Valley" },
          { en: "Margaret River", es: "Margaret River", de: "Margaret River", nl: "Margaret River" },
          { en: "Yarra Valley", es: "Valle Yarra", de: "Yarra Valley", nl: "Yarra Valley" }
        ],
        correct: 1,
        explanation: {
          en: "Barossa Valley in South Australia is renowned for its powerful, full-bodied Shiraz wines from old vines.",
          es: "El Valle Barossa en Australia del Sur es famoso por sus vinos Shiraz potentes y con cuerpo de viñas viejas.",
          de: "Das Barossa Valley in Südaustralien ist bekannt für seine kraftvollen, vollmundigen Shiraz-Weine von alten Reben.",
          nl: "Barossa Valley in Zuid-Australië staat bekend om zijn krachtige, volle Shiraz wijnen van oude wijnstokken."
        }
      },
      {
        question: {
          en: "What is the highest wine appellation in Burgundy's hierarchy?",
          es: "¿Cuál es la denominación de vino más alta en la jerarquía de Borgoña?",
          de: "Was ist die höchste Weinbezeichnung in der Hierarchie des Burgunds?",
          nl: "Wat is de hoogste wijnappellatie in Bourgogne's hiërarchie?"
        },
        options: [
          { en: "Village", es: "Village", de: "Village", nl: "Village" },
          { en: "Premier Cru", es: "Premier Cru", de: "Premier Cru", nl: "Premier Cru" },
          { en: "Grand Cru", es: "Grand Cru", de: "Grand Cru", nl: "Grand Cru" },
          { en: "Regional", es: "Regional", de: "Regional", nl: "Regionaal" }
        ],
        correct: 2,
        explanation: {
          en: "Grand Cru is the highest classification in Burgundy, representing only about 1% of total production.",
          es: "Grand Cru es la clasificación más alta en Borgoña, representando solo alrededor del 1% de la producción total.",
          de: "Grand Cru ist die höchste Klassifikation im Burgund und repräsentiert nur etwa 1% der Gesamtproduktion.",
          nl: "Grand Cru is de hoogste classificatie in Bourgogne, die slechts ongeveer 1% van de totale productie vertegenwoordigt."
        }
      },
      {
        question: {
          en: "Which Portuguese region produces Port wine?",
          es: "¿Qué región portuguesa produce vino de Oporto?",
          de: "Welche portugiesische Region produziert Portwein?",
          nl: "Welke Portugese regio produceert Port wijn?"
        },
        options: [
          { en: "Alentejo", es: "Alentejo", de: "Alentejo", nl: "Alentejo" },
          { en: "Douro Valley", es: "Valle del Duero", de: "Douro-Tal", nl: "Douro-vallei" },
          { en: "Vinho Verde", es: "Vinho Verde", de: "Vinho Verde", nl: "Vinho Verde" },
          { en: "Dão", es: "Dão", de: "Dão", nl: "Dão" }
        ],
        correct: 1,
        explanation: {
          en: "Port wine is exclusively produced in the Douro Valley of northern Portugal, one of the world's oldest demarcated wine regions.",
          es: "El vino de Oporto se produce exclusivamente en el Valle del Duero del norte de Portugal, una de las regiones vinícolas demarcadas más antiguas del mundo.",
          de: "Portwein wird ausschließlich im Douro-Tal in Nordportugal produziert, einer der ältesten abgegrenzten Weinregionen der Welt.",
          nl: "Port wijn wordt exclusief geproduceerd in de Douro-vallei van Noord-Portugal, een van 's werelds oudste afgebakende wijnregio's."
        }
      },
      {
        question: {
          en: "What are the two main wine regions of New Zealand?",
          es: "¿Cuáles son las dos principales regiones vinícolas de Nueva Zelanda?",
          de: "Was sind die zwei wichtigsten Weinregionen Neuseelands?",
          nl: "Wat zijn de twee belangrijkste wijnregio's van Nieuw-Zeeland?"
        },
        options: [
          { en: "North Island and South Island", es: "Isla Norte e Isla Sur", de: "Nordinsel und Südinsel", nl: "Noordereiland en Zuidereiland" },
          { en: "Auckland and Wellington", es: "Auckland y Wellington", de: "Auckland und Wellington", nl: "Auckland en Wellington" },
          { en: "Hawke's Bay and Central Otago", es: "Hawke's Bay y Central Otago", de: "Hawke's Bay und Central Otago", nl: "Hawke's Bay en Central Otago" },
          { en: "Marlborough and Canterbury", es: "Marlborough y Canterbury", de: "Marlborough und Canterbury", nl: "Marlborough en Canterbury" }
        ],
        correct: 0,
        explanation: {
          en: "New Zealand's wine regions are divided between North Island (warmer) and South Island (cooler), each with distinct terroirs.",
          es: "Las regiones vinícolas de Nueva Zelanda se dividen entre Isla Norte (más cálida) e Isla Sur (más fría), cada una con terroirs distintos.",
          de: "Neuseelands Weinregionen teilen sich zwischen Nordinsel (wärmer) und Südinsel (kühler) auf, jede mit eigenem Terroir.",
          nl: "Nieuw-Zeeland's wijnregio's zijn verdeeld tussen Noordereiland (warmer) en Zuidereiland (koeler), elk met onderscheidende terroirs."
        }
      },
      {
        question: {
          en: "Which Chilean wine valley is closest to the Pacific Ocean?",
          es: "¿Qué valle vinícola chileno está más cerca del Océano Pacífico?",
          de: "Welches chilenische Weintal liegt dem Pazifischen Ozean am nächsten?",
          nl: "Welke Chileense wijndal ligt het dichtst bij de Stille Oceaan?"
        },
        options: [
          { en: "Maipo Valley", es: "Valle de Maipo", de: "Maipo-Tal", nl: "Maipo-vallei" },
          { en: "Casablanca Valley", es: "Valle de Casablanca", de: "Casablanca-Tal", nl: "Casablanca-vallei" },
          { en: "Colchagua Valley", es: "Valle de Colchagua", de: "Colchagua-Tal", nl: "Colchagua-vallei" },
          { en: "Maule Valley", es: "Valle del Maule", de: "Maule-Tal", nl: "Maule-vallei" }
        ],
        correct: 1,
        explanation: {
          en: "Casablanca Valley is located close to the Pacific Ocean, benefiting from cool maritime influences ideal for white wines.",
          es: "El Valle de Casablanca está ubicado cerca del Océano Pacífico, beneficiándose de influencias marítimas frescas ideales para vinos blancos.",
          de: "Das Casablanca-Tal liegt nahe dem Pazifischen Ozean und profitiert von kühlen maritimen Einflüssen, ideal für Weißweine.",
          nl: "Casablanca-vallei ligt dicht bij de Stille Oceaan en profiteert van koele maritieme invloeden, ideaal voor witte wijnen."
        }
      },
      {
        question: {
          en: "What is the primary soil type in Chablis that gives the wine its mineral character?",
          es: "¿Cuál es el tipo de suelo principal en Chablis que le da al vino su carácter mineral?",
          de: "Was ist der primäre Bodentyp in Chablis, der dem Wein seinen mineralischen Charakter verleiht?",
          nl: "Wat is het primaire bodemtype in Chablis dat de wijn zijn minerale karakter geeft?"
        },
        options: [
          { en: "Limestone (Kimmeridgian)", es: "Caliza (Kimmeridgiense)", de: "Kalkstein (Kimmeridge)", nl: "Kalksteen (Kimmeridgian)" },
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" },
          { en: "Volcanic", es: "Volcánico", de: "Vulkanisch", nl: "Vulkanisch" },
          { en: "Schist", es: "Esquisto", de: "Schiefer", nl: "Schist" }
        ],
        correct: 0,
        explanation: {
          en: "Chablis is famous for its Kimmeridgian limestone soil, rich in fossilized oyster shells, which imparts distinctive mineral notes.",
          es: "Chablis es famoso por su suelo de caliza Kimmeridgiense, rico en conchas de ostras fossilizadas, que imparte notas minerales distintivas.",
          de: "Chablis ist berühmt für seinen Kimmeridge-Kalksteinboden, reich an fossilen Austernschalen, der charakteristische Mineralnoten verleiht.",
          nl: "Chablis is beroemd om zijn Kimmeridgian kalksteenbodem, rijk aan gefossiliseerde oesterschelpen, die kenmerkende minerale toetsen geeft."
        }
      },
      {
        question: {
          en: "Which wine region is known as the 'Napa Valley of Argentina'?",
          es: "¿Qué región vinícola es conocida como el 'Valle de Napa de Argentina'?",
          de: "Welche Weinregion wird als das 'Napa Valley Argentiniens' bezeichnet?",
          nl: "Welke wijnregio staat bekend als de 'Napa Valley van Argentinië'?"
        },
        options: [
          { en: "Salta", es: "Salta", de: "Salta", nl: "Salta" },
          { en: "Mendoza", es: "Mendoza", de: "Mendoza", nl: "Mendoza" },
          { en: "Patagonia", es: "Patagonia", de: "Patagonien", nl: "Patagonië" },
          { en: "San Juan", es: "San Juan", de: "San Juan", nl: "San Juan" }
        ],
        correct: 1,
        explanation: {
          en: "Mendoza produces over 70% of Argentina's wine and is the country's premier wine region, especially famous for Malbec.",
          es: "Mendoza produce más del 70% del vino de Argentina y es la principal región vinícola del país, especialmente famosa por el Malbec.",
          de: "Mendoza produziert über 70% des argentinischen Weins und ist die führende Weinregion des Landes, besonders berühmt für Malbec.",
          nl: "Mendoza produceert meer dan 70% van Argentinië's wijn en is 's lands belangrijkste wijnregio, vooral beroemd om Malbec."
        }
      },
      {
        question: {
          en: "What does the term 'terroir' primarily refer to?",
          es: "¿A qué se refiere principalmente el término 'terroir'?",
          de: "Worauf bezieht sich der Begriff 'Terroir' hauptsächlich?",
          nl: "Waar verwijst de term 'terroir' voornamelijk naar?"
        },
        options: [
          { en: "The winemaking technique", es: "La técnica de vinificación", de: "Die Weinherstellungstechnik", nl: "De wijnmaaktechniek" },
          { en: "The combination of soil, climate, and geography", es: "La combinación de suelo, clima y geografía", de: "Die Kombination aus Boden, Klima und Geografie", nl: "De combinatie van bodem, klimaat en geografie" },
          { en: "The age of the vineyard", es: "La edad del viñedo", de: "Das Alter des Weinbergs", nl: "De leeftijd van de wijngaard" },
          { en: "The grape variety used", es: "La variedad de uva utilizada", de: "Die verwendete Rebsorte", nl: "De gebruikte druivensoort" }
        ],
        correct: 1,
        explanation: {
          en: "Terroir encompasses all environmental factors including soil, climate, topography, and local traditions that influence wine character.",
          es: "Terroir abarca todos los factores ambientales incluyendo suelo, clima, topografía y tradiciones locales que influyen en el carácter del vino.",
          de: "Terroir umfasst alle Umweltfaktoren einschließlich Boden, Klima, Topografie und lokale Traditionen, die den Weincharakter beeinflussen.",
          nl: "Terroir omvat alle omgevingsfactoren inclusief bodem, klimaat, topografie en lokale tradities die het wijnkarakter beïnvloeden."
        }
      },
      {
        question: {
          en: "Which South African wine region is famous for Chenin Blanc?",
          es: "¿Qué región vinícola sudafricana es famosa por el Chenin Blanc?",
          de: "Welche südafrikanische Weinregion ist für Chenin Blanc berühmt?",
          nl: "Welke Zuid-Afrikaanse wijnregio is beroemd om Chenin Blanc?"
        },
        options: [
          { en: "Constantia", es: "Constantia", de: "Constantia", nl: "Constantia" },
          { en: "Stellenbosch", es: "Stellenbosch", de: "Stellenbosch", nl: "Stellenbosch" },
          { en: "Swartland", es: "Swartland", de: "Swartland", nl: "Swartland" },
          { en: "Walker Bay", es: "Walker Bay", de: "Walker Bay", nl: "Walker Bay" }
        ],
        correct: 2,
        explanation: {
          en: "Swartland has become renowned for producing exceptional old-vine Chenin Blanc, South Africa's signature white grape variety.",
          es: "Swartland se ha vuelto famoso por producir excepcional Chenin Blanc de viñas viejas, la variedad de uva blanca emblemática de Sudáfrica.",
          de: "Swartland ist bekannt geworden für die Produktion von außergewöhnlichem Chenin Blanc von alten Reben, Südafrikas charakteristische weiße Rebsorte.",
          nl: "Swartland is bekend geworden om het produceren van uitzonderlijke oude-stok Chenin Blanc, Zuid-Afrika's kenmerkende witte druivensoort."
        }
      },
      {
        question: {
          en: "What is the northernmost wine region in France?",
          es: "¿Cuál es la región vinícola más septentrional de Francia?",
          de: "Was ist die nördlichste Weinregion Frankreichs?",
          nl: "Wat is de meest noordelijke wijnregio van Frankrijk?"
        },
        options: [
          { en: "Champagne", es: "Champagne", de: "Champagne", nl: "Champagne" },
          { en: "Alsace", es: "Alsacia", de: "Elsass", nl: "Elzas" },
          { en: "Loire Valley", es: "Valle del Loira", de: "Loiretal", nl: "Loirevallei" },
          { en: "Burgundy", es: "Borgoña", de: "Burgund", nl: "Bourgogne" }
        ],
        correct: 0,
        explanation: {
          en: "Champagne is France's northernmost major wine region, where cool temperatures create ideal conditions for sparkling wine production.",
          es: "Champagne es la región vinícola principal más septentrional de Francia, donde las temperaturas frescas crean condiciones ideales para la producción de vino espumoso.",
          de: "Die Champagne ist Frankreichs nördlichste bedeutende Weinregion, wo kühle Temperaturen ideale Bedingungen für die Schaumweinproduktion schaffen.",
          nl: "Champagne is Frankrijk's meest noordelijke belangrijke wijnregio, waar koele temperaturen ideale omstandigheden creëren voor mousserende wijnproductie."
        }
      },
      {
        question: {
          en: "Which Austrian wine region is most famous for Grüner Veltliner?",
          es: "¿Qué región vinícola austriaca es más famosa por el Grüner Veltliner?",
          de: "Welche österreichische Weinregion ist am berühmtesten für Grüner Veltliner?",
          nl: "Welke Oostenrijkse wijnregio is het meest beroemd om Grüner Veltliner?"
        },
        options: [
          { en: "Burgenland", es: "Burgenland", de: "Burgenland", nl: "Burgenland" },
          { en: "Wachau", es: "Wachau", de: "Wachau", nl: "Wachau" },
          { en: "Styria", es: "Estiria", de: "Steiermark", nl: "Stiermarken" },
          { en: "Carnuntum", es: "Carnuntum", de: "Carnuntum", nl: "Carnuntum" }
        ],
        correct: 1,
        explanation: {
          en: "The Wachau Valley along the Danube River produces Austria's finest Grüner Veltliner wines from steep terraced vineyards.",
          es: "El Valle de Wachau a lo largo del río Danubio produce los mejores vinos Grüner Veltliner de Austria desde viñedos en terrazas empinadas.",
          de: "Das Wachau-Tal entlang der Donau produziert Österreichs feinste Grüner Veltliner-Weine von steilen Terrassenweinbergen.",
          nl: "De Wachau-vallei langs de Donau produceert Oostenrijk's beste Grüner Veltliner wijnen van steile terrasvormige wijngaarden."
        }
      },
      {
        question: {
          en: "What is Oregon's premier Pinot Noir region?",
          es: "¿Cuál es la principal región de Pinot Noir de Oregón?",
          de: "Was ist Oregons führende Pinot Noir-Region?",
          nl: "Wat is Oregon's belangrijkste Pinot Noir regio?"
        },
        options: [
          { en: "Columbia Valley", es: "Valle de Columbia", de: "Columbia Valley", nl: "Columbia Valley" },
          { en: "Willamette Valley", es: "Valle de Willamette", de: "Willamette Valley", nl: "Willamette Valley" },
          { en: "Umpqua Valley", es: "Valle de Umpqua", de: "Umpqua Valley", nl: "Umpqua Valley" },
          { en: "Rogue Valley", es: "Valle de Rogue", de: "Rogue Valley", nl: "Rogue Valley" }
        ],
        correct: 1,
        explanation: {
          en: "Willamette Valley is Oregon's most prestigious wine region, producing elegant Pinot Noir that rivals Burgundy.",
          es: "El Valle de Willamette es la región vinícola más prestigiosa de Oregón, produciendo elegante Pinot Noir que rivaliza con Borgoña.",
          de: "Das Willamette Valley ist Oregons prestigeträchtigste Weinregion und produziert eleganten Pinot Noir, der mit Burgund konkurriert.",
          nl: "Willamette Valley is Oregon's meest prestigieuze wijnregio, die elegante Pinot Noir produceert die wedijvert met Bourgogne."
        }
      },
      {
        question: {
          en: "Which Greek island is famous for its sweet Vinsanto wine?",
          es: "¿Qué isla griega es famosa por su vino dulce Vinsanto?",
          de: "Welche griechische Insel ist berühmt für ihren süßen Vinsanto-Wein?",
          nl: "Welk Grieks eiland is beroemd om zijn zoete Vinsanto wijn?"
        },
        options: [
          { en: "Crete", es: "Creta", de: "Kreta", nl: "Kreta" },
          { en: "Rhodes", es: "Rodas", de: "Rhodos", nl: "Rhodos" },
          { en: "Santorini", es: "Santorini", de: "Santorini", nl: "Santorini" },
          { en: "Corfu", es: "Corfú", de: "Korfu", nl: "Corfu" }
        ],
        correct: 2,
        explanation: {
          en: "Santorini produces exceptional Vinsanto from sun-dried Assyrtiko grapes, aged in oak barrels for at least two years.",
          es: "Santorini produce excepcional Vinsanto a partir de uvas Assyrtiko secadas al sol, envejecido en barricas de roble durante al menos dos años.",
          de: "Santorini produziert außergewöhnlichen Vinsanto aus sonnengetrockneten Assyrtiko-Trauben, mindestens zwei Jahre in Eichenfässern gereift.",
          nl: "Santorini produceert uitzonderlijke Vinsanto van zongedroogde Assyrtiko druiven, minimaal twee jaar gerijpt in eiken vaten."
        }
      },
      {
        question: {
          en: "What is the main climate influence on Marlborough, New Zealand?",
          es: "¿Cuál es la principal influencia climática en Marlborough, Nueva Zelanda?",
          de: "Was ist der hauptsächliche Klimaeinfluss auf Marlborough, Neuseeland?",
          nl: "Wat is de belangrijkste klimaatinvloed op Marlborough, Nieuw-Zeeland?"
        },
        options: [
          { en: "Pacific Ocean breezes", es: "Brisas del Océano Pacífico", de: "Pazifische Meeresbrise", nl: "Stille Oceaan briesjes" },
          { en: "Southern Alps protection", es: "Protección de los Alpes del Sur", de: "Schutz der Südalpen", nl: "Zuidelijke Alpen bescherming" },
          { en: "Desert heat", es: "Calor del desierto", de: "Wüstenhitze", nl: "Woestijnhitte" },
          { en: "Tropical monsoons", es: "Monzones tropicales", de: "Tropische Monsune", nl: "Tropische moessons" }
        ],
        correct: 1,
        explanation: {
          en: "The Southern Alps shield Marlborough from westerly rain, creating a sunny, dry climate ideal for Sauvignon Blanc production.",
          es: "Los Alpes del Sur protegen a Marlborough de la lluvia del oeste, creando un clima soleado y seco ideal para la producción de Sauvignon Blanc.",
          de: "Die Südalpen schützen Marlborough vor westlichem Regen und schaffen ein sonniges, trockenes Klima ideal für Sauvignon Blanc-Produktion.",
          nl: "De Zuidelijke Alpen beschermen Marlborough tegen westelijke regen, wat een zonnig, droog klimaat creëert ideaal voor Sauvignon Blanc productie."
        }
    },
    {
      question: {
        en: "Which region produces the most expensive wines in the world?",
        es: "¿Qué región produce los vinos más caros del mundo?",
        de: "Welche Region produziert die teuersten Weine der Welt?",
        nl: "Welke regio produceert de duurste wijnen ter wereld?"
      },
      options: [
        { en: "Bordeaux, France", es: "Burdeos, Francia", de: "Bordeaux, Frankreich", nl: "Bordeaux, Frankrijk" },
        { en: "Napa Valley, USA", es: "Valle de Napa, EE.UU.", de: "Napa Valley, USA", nl: "Napa Valley, VS" },
        { en: "Tuscany, Italy", es: "Toscana, Italia", de: "Toskana, Italien", nl: "Toscane, Italië" },
        { en: "Burgundy, France", es: "Borgoña, Francia", de: "Burgund, Frankreich", nl: "Bourgogne, Frankrijk" }
      ],
      correct: 3,
      explanation: {
        en: "Burgundy produces the world's most expensive wines, with Grand Crus like Romanée-Conti regularly exceeding $20,000 per bottle.",
        es: "Borgoña produce los vinos más caros del mundo, con Grand Crus como Romanée-Conti que regularmente superan los $20,000 por botella.",
        de: "Burgund produziert die teuersten Weine der Welt, wobei Grand Crus wie Romanée-Conti regelmäßig $20.000 pro Flasche übersteigen.",
        nl: "Bourgogne produceert 's werelds duurste wijnen, waarbij Grand Crus zoals Romanée-Conti regelmatig meer dan $20.000 per fles kosten."
      }
    },
    {
      question: {
        en: "Which Italian region is known as 'Super Tuscan' wine territory?",
        es: "¿Qué región italiana es conocida por los vinos 'Super Tuscans'?",
        de: "Welche italienische Region ist als 'Super Tuscan'-Weingebiet bekannt?",
        nl: "Welke Italiaanse regio staat bekend als 'Super Tuscan' wijngebied?"
      },
      options: [
        { en: "Piedmont", es: "Piamonte", de: "Piemont", nl: "Piëmont" },
        { en: "Bolgheri", es: "Bolgheri", de: "Bolgheri", nl: "Bolgheri" },
        { en: "Veneto", es: "Véneto", de: "Venetien", nl: "Veneto" },
        { en: "Sicily", es: "Sicilia", de: "Sizilien", nl: "Sicilië" }
      ],
      correct: 1,
      explanation: {
        en: "Bolgheri in Tuscany is famous for Super Tuscan wines like Sassicaia and Ornellaia, which blend international grape varieties.",
        es: "Bolgheri en Toscana es famoso por vinos Super Tuscans como Sassicaia y Ornellaia, que mezclan variedades de uva internacionales.",
        de: "Bolgheri in der Toskana ist berühmt für Super Tuscan-Weine wie Sassicaia und Ornellaia, die internationale Rebsorten mischen.",
        nl: "Bolgheri in Toscane is beroemd om Super Tuscan wijnen zoals Sassicaia en Ornellaia, die internationale druivenrassen mengen."
      }
    },
    {
      question: {
        en: "Which Rhône Valley appellation produces only white wine?",
        es: "¿Qué denominación del Valle del Ródano produce solo vino blanco?",
        de: "Welche Rhône-Tal-Appellation produziert nur Weißwein?",
        nl: "Welke Rhône-vallei appellation produceert alleen witte wijn?"
      },
      options: [
        { en: "Châteauneuf-du-Pape", es: "Châteauneuf-du-Pape", de: "Châteauneuf-du-Pape", nl: "Châteauneuf-du-Pape" },
        { en: "Condrieu", es: "Condrieu", de: "Condrieu", nl: "Condrieu" },
        { en: "Hermitage", es: "Hermitage", de: "Hermitage", nl: "Hermitage" },
        { en: "Gigondas", es: "Gigondas", de: "Gigondas", nl: "Gigondas" }
      ],
      correct: 1,
      explanation: {
        en: "Condrieu exclusively produces white wine from Viognier grapes, known for its aromatic, full-bodied character.",
        es: "Condrieu produce exclusivamente vino blanco de uvas Viognier, conocido por su carácter aromático y con cuerpo.",
        de: "Condrieu produziert ausschließlich Weißwein aus Viognier-Trauben, bekannt für seinen aromatischen, vollmundigen Charakter.",
        nl: "Condrieu produceert uitsluitend witte wijn van Viognier druiven, bekend om zijn aromatische, volle karakter."
      }
    },
    {
      question: {
        en: "What is the warmest major wine region in France?",
        es: "¿Cuál es la región vinícola principal más cálida de Francia?",
        de: "Was ist die wärmste bedeutende Weinregion in Frankreich?",
        nl: "Wat is de warmste belangrijke wijnregio in Frankrijk?"
      },
      options: [
        { en: "Bordeaux", es: "Burdeos", de: "Bordeaux", nl: "Bordeaux" },
        { en: "Languedoc-Roussillon", es: "Languedoc-Rosellón", de: "Languedoc-Roussillon", nl: "Languedoc-Roussillon" },
        { en: "Loire Valley", es: "Valle del Loira", de: "Loiretal", nl: "Loirevallei" },
        { en: "Alsace", es: "Alsacia", de: "Elsass", nl: "Elzas" }
      ],
      correct: 1,
      explanation: {
        en: "Languedoc-Roussillon in southern France has the warmest climate, producing robust reds and rosés.",
        es: "Languedoc-Rosellón en el sur de Francia tiene el clima más cálido, produciendo tintos y rosados robustos.",
        de: "Languedoc-Roussillon in Südfrankreich hat das wärmste Klima und produziert kräftige Rot- und Roséweine.",
        nl: "Languedoc-Roussillon in Zuid-Frankrijk heeft het warmste klimaat en produceert robuuste rode en rosé wijnen."
      }
    },
    {
      question: {
        en: "Which wine region spans both France and Germany?",
        es: "¿Qué región vinícola abarca tanto Francia como Alemania?",
        de: "Welche Weinregion erstreckt sich über Frankreich und Deutschland?",
        nl: "Welke wijnregio beslaat zowel Frankrijk als Duitsland?"
      },
      options: [
        { en: "Champagne", es: "Champagne", de: "Champagne", nl: "Champagne" },
        { en: "Alsace/Elsass", es: "Alsacia/Elsass", de: "Elsass/Alsace", nl: "Elzas/Elsass" },
        { en: "Burgundy", es: "Borgoña", de: "Burgund", nl: "Bourgogne" },
        { en: "Loire", es: "Loira", de: "Loire", nl: "Loire" }
      ],
      correct: 1,
      explanation: {
        en: "Alsace (France) and its German counterpart Elsass share similar grape varieties and winemaking traditions along the Rhine River.",
        es: "Alsacia (Francia) y su contraparte alemana Elsass comparten variedades de uva y tradiciones vinícolas similares a lo largo del río Rin.",
        de: "Das Elsass (Frankreich) und sein deutsches Pendant teilen ähnliche Rebsorten und Weintraditionen entlang des Rheins.",
        nl: "Elzas (Frankrijk) en zijn Duitse tegenhanger delen vergelijkbare druivenrassen en wijnmaagtradities langs de Rijn."
      }
    },
    {
      question: {
        en: "Which region is famous for ice wine production?",
        es: "¿Qué región es famosa por la producción de vino de hielo?",
        de: "Welche Region ist berühmt für die Eisweinproduktion?",
        nl: "Welke regio is beroemd om de productie van ijswijn?"
      },
      options: [
        { en: "Bordeaux, France", es: "Burdeos, Francia", de: "Bordeaux, Frankreich", nl: "Bordeaux, Frankrijk" },
        { en: "Niagara Peninsula, Canada", es: "Península del Niágara, Canadá", de: "Niagara-Halbinsel, Kanada", nl: "Niagara Schiereiland, Canada" },
        { en: "Tuscany, Italy", es: "Toscana, Italia", de: "Toskana, Italien", nl: "Toscane, Italië" },
        { en: "Mendoza, Argentina", es: "Mendoza, Argentina", de: "Mendoza, Argentinien", nl: "Mendoza, Argentinië" }
      ],
      correct: 1,
      explanation: {
        en: "The Niagara Peninsula is world-renowned for ice wine (Eiswein), made from grapes frozen on the vine at -8°C or colder.",
        es: "La Península del Niágara es mundialmente famosa por el vino de hielo (Eiswein), hecho de uvas congeladas en la vid a -8°C o más frío.",
        de: "Die Niagara-Halbinsel ist weltberühmt für Eiswein, der aus bei -8°C oder kälter am Rebstock gefrorenen Trauben hergestellt wird.",
        nl: "Het Niagara Schiereiland is wereldberoemd om ijswijn (Eiswein), gemaakt van druiven bevroren aan de wijnstok bij -8°C of kouder."
      }
    },
    {
      question: {
        en: "Which region produces Amarone della Valpolicella?",
        es: "¿Qué región produce Amarone della Valpolicella?",
        de: "Welche Region produziert Amarone della Valpolicella?",
        nl: "Welke regio produceert Amarone della Valpolicella?"
      },
      options: [
        { en: "Piedmont", es: "Piamonte", de: "Piemont", nl: "Piëmont" },
        { en: "Veneto", es: "Véneto", de: "Venetien", nl: "Veneto" },
        { en: "Tuscany", es: "Toscana", de: "Toskana", nl: "Toscane" },
        { en: "Lombardy", es: "Lombardía", de: "Lombardei", nl: "Lombardije" }
      ],
      correct: 1,
      explanation: {
        en: "Veneto produces Amarone using the appassimento method, where grapes are dried for 3-4 months before fermentation.",
        es: "Véneto produce Amarone usando el método appassimento, donde las uvas se secan durante 3-4 meses antes de la fermentación.",
        de: "Venetien produziert Amarone mit der Appassimento-Methode, bei der Trauben 3-4 Monate vor der Gärung getrocknet werden.",
        nl: "Veneto produceert Amarone met de appassimento methode, waarbij druiven 3-4 maanden worden gedroogd voor fermentatie."
      }
    },
    {
      question: {
        en: "Which wine region has the highest altitude vineyards?",
        es: "¿Qué región vinícola tiene los viñedos de mayor altitud?",
        de: "Welche Weinregion hat die höchstgelegenen Weinberge?",
        nl: "Welke wijnregio heeft de hoogstgelegen wijngaarden?"
      },
      options: [
        { en: "Rioja, Spain", es: "Rioja, España", de: "Rioja, Spanien", nl: "Rioja, Spanje" },
        { en: "Salta, Argentina", es: "Salta, Argentina", de: "Salta, Argentinien", nl: "Salta, Argentinië" },
        { en: "Douro, Portugal", es: "Duero, Portugal", de: "Douro, Portugal", nl: "Douro, Portugal" },
        { en: "Mosel, Germany", es: "Mosela, Alemania", de: "Mosel, Deutschland", nl: "Moezel, Duitsland" }
      ],
      correct: 1,
      explanation: {
        en: "Salta in northwest Argentina has vineyards reaching 3,000+ meters altitude, producing exceptional Torrontés and Malbec.",
        es: "Salta en el noroeste de Argentina tiene viñedos que alcanzan más de 3,000 metros de altitud, produciendo excepcionales Torrontés y Malbec.",
        de: "Salta im Nordwesten Argentiniens hat Weinberge in über 3.000 Metern Höhe und produziert außergewöhnlichen Torrontés und Malbec.",
        nl: "Salta in noordwest Argentinië heeft wijngaarden die meer dan 3.000 meter hoogte bereiken en uitzonderlijke Torrontés en Malbec produceren."
      }
    },
    {
      question: {
        en: "Which Hungarian region is famous for Tokaji dessert wine?",
        es: "¿Qué región húngara es famosa por el vino de postre Tokaji?",
        de: "Welche ungarische Region ist für Tokaji-Dessertwein berühmt?",
        nl: "Welke Hongaarse regio is beroemd om Tokaji dessertwijn?"
      },
      options: [
        { en: "Eger", es: "Eger", de: "Eger", nl: "Eger" },
        { en: "Villány", es: "Villány", de: "Villány", nl: "Villány" },
        { en: "Tokaj-Hegyalja", es: "Tokaj-Hegyalja", de: "Tokaj-Hegyalja", nl: "Tokaj-Hegyalja" },
        { en: "Sopron", es: "Sopron", de: "Sopron", nl: "Sopron" }
      ],
      correct: 2,
      explanation: {
        en: "Tokaj-Hegyalja produces the legendary Tokaji Aszú, made from botrytized grapes, treasured since the 16th century.",
        es: "Tokaj-Hegyalja produce el legendario Tokaji Aszú, hecho de uvas botritizadas, atesorado desde el siglo XVI.",
        de: "Tokaj-Hegyalja produziert den legendären Tokaji Aszú aus botrytisierten Trauben, geschätzt seit dem 16. Jahrhundert.",
        nl: "Tokaj-Hegyalja produceert de legendarische Tokaji Aszú, gemaakt van botrytis druiven, gekoesterd sinds de 16e eeuw."
      }
    },
    {
      question: {
        en: "Which Lebanese wine region is most internationally recognized?",
        es: "¿Qué región vinícola libanesa es más reconocida internacionalmente?",
        de: "Welche libanesische Weinregion ist international am bekanntesten?",
        nl: "Welke Libanese wijnregio is internationaal het meest erkend?"
      },
      options: [
        { en: "Bekaa Valley", es: "Valle de Bekaa", de: "Bekaa-Tal", nl: "Bekaa-vallei" },
        { en: "Batroun", es: "Batroun", de: "Batroun", nl: "Batroun" },
        { en: "Jezzine", es: "Jezzine", de: "Jezzine", nl: "Jezzine" },
        { en: "Mount Lebanon", es: "Monte Líbano", de: "Libanongebirge", nl: "Libanon Berg" }
      ],
      correct: 0,
      explanation: {
        en: "Bekaa Valley produces 90% of Lebanese wine, with estates like Château Musar gaining international acclaim.",
        es: "El Valle de Bekaa produce el 90% del vino libanés, con bodegas como Château Musar ganando aclamación internacional.",
        de: "Das Bekaa-Tal produziert 90% des libanesischen Weins, wobei Güter wie Château Musar internationale Anerkennung erlangen.",
        nl: "Bekaa-vallei produceert 90% van de Libanese wijn, waarbij landgoederen zoals Château Musar internationale erkenning krijgen."
      }
    },
    {
      question: {
        en: "Which Slovenian region is known for orange wine production?",
        es: "¿Qué región eslovena es conocida por la producción de vino naranja?",
        de: "Welche slowenische Region ist für die Orange-Weinproduktion bekannt?",
        nl: "Welke Sloveense regio staat bekend om de productie van oranje wijn?"
      },
      options: [
        { en: "Primorska", es: "Primorska", de: "Primorska", nl: "Primorska" },
        { en: "Podravje", es: "Podravje", de: "Podravje", nl: "Podravje" },
        { en: "Posavje", es: "Posavje", de: "Posavje", nl: "Posavje" },
        { en: "Prekmurje", es: "Prekmurje", de: "Prekmurje", nl: "Prekmurje" }
      ],
      correct: 0,
      explanation: {
        en: "Primorska, especially the Brda subregion, is famous for orange wines made by extended skin contact with white grapes.",
        es: "Primorska, especialmente la subregión de Brda, es famosa por los vinos naranjas hechos con contacto prolongado de piel con uvas blancas.",
        de: "Primorska, besonders die Subregion Brda, ist berühmt für Orange-Weine durch verlängerten Schalenkontakt mit weißen Trauben.",
        nl: "Primorska, vooral de subregio Brda, is beroemd om oranje wijnen gemaakt door verlengd schilcontact met witte druiven."
      }
    },
    {
      question: {
        en: "Which wine region in Washington State rivals Napa Valley?",
        es: "¿Qué región vinícola en el Estado de Washington rivaliza con Napa Valley?",
        de: "Welche Weinregion im Bundesstaat Washington konkurriert mit Napa Valley?",
        nl: "Welke wijnregio in Washington State wedijvert met Napa Valley?"
      },
      options: [
        { en: "Puget Sound", es: "Puget Sound", de: "Puget Sound", nl: "Puget Sound" },
        { en: "Columbia Gorge", es: "Columbia Gorge", de: "Columbia Gorge", nl: "Columbia Gorge" },
        { en: "Walla Walla Valley", es: "Valle de Walla Walla", de: "Walla Walla Valley", nl: "Walla Walla Valley" },
        { en: "Yakima Valley", es: "Valle de Yakima", de: "Yakima Valley", nl: "Yakima Valley" }
      ],
      correct: 2,
      explanation: {
        en: "Walla Walla Valley produces premium Cabernet Sauvignon and Syrah, earning recognition alongside Napa's finest wines.",
        es: "El Valle de Walla Walla produce Cabernet Sauvignon y Syrah premium, ganando reconocimiento junto a los mejores vinos de Napa.",
        de: "Das Walla Walla Valley produziert Premium-Cabernet Sauvignon und Syrah und erhält Anerkennung neben Napas besten Weinen.",
        nl: "Walla Walla Valley produceert premium Cabernet Sauvignon en Syrah en krijgt erkenning naast Napa's beste wijnen."
      }
    },
    {
      question: {
        en: "Which English wine region is gaining international recognition?",
        es: "¿Qué región vinícola inglesa está ganando reconocimiento internacional?",
        de: "Welche englische Weinregion gewinnt internationale Anerkennung?",
        nl: "Welke Engelse wijnregio krijgt internationale erkenning?"
      },
      options: [
        { en: "Yorkshire", es: "Yorkshire", de: "Yorkshire", nl: "Yorkshire" },
        { en: "Sussex", es: "Sussex", de: "Sussex", nl: "Sussex" },
        { en: "Cornwall", es: "Cornualles", de: "Cornwall", nl: "Cornwall" },
        { en: "Lake District", es: "Distrito de los Lagos", de: "Lake District", nl: "Lake District" }
      ],
      correct: 1,
      explanation: {
        en: "Sussex produces world-class sparkling wines on similar chalk soils to Champagne, winning international competitions.",
        es: "Sussex produce vinos espumosos de clase mundial en suelos calcáreos similares a Champagne, ganando competiciones internacionales.",
        de: "Sussex produziert erstklassige Schaumweine auf ähnlichen Kreideboden wie in der Champagne und gewinnt internationale Wettbewerbe.",
        nl: "Sussex produceert wereldklasse mousserende wijnen op vergelijkbare kalkbodems als Champagne en wint internationale wedstrijden."
      }
    },
    {
      question: {
        en: "Which Swiss wine region is largest by production?",
        es: "¿Qué región vinícola suiza es la más grande por producción?",
        de: "Welche Schweizer Weinregion ist die größte nach Produktion?",
        nl: "Welke Zwitserse wijnregio is de grootste qua productie?"
      },
      options: [
        { en: "Geneva", es: "Ginebra", de: "Genf", nl: "Genève" },
        { en: "Ticino", es: "Tesino", de: "Tessin", nl: "Ticino" },
        { en: "Valais", es: "Valais", de: "Wallis", nl: "Wallis" },
        { en: "Zurich", es: "Zúrich", de: "Zürich", nl: "Zürich" }
      ],
      correct: 2,
      explanation: {
        en: "Valais produces over one-third of Swiss wine, known for Fendant (Chasselas) white wine and Petite Arvine.",
        es: "Valais produce más de un tercio del vino suizo, conocido por el vino blanco Fendant (Chasselas) y Petite Arvine.",
        de: "Wallis produziert über ein Drittel des Schweizer Weins, bekannt für Fendant (Chasselas)-Weißwein und Petite Arvine.",
        nl: "Wallis produceert meer dan een derde van de Zwitserse wijn, bekend om Fendant (Chasselas) witte wijn en Petite Arvine."
      }
    },
    {
      question: {
        en: "Which Israeli wine region is considered the premier quality area?",
        es: "¿Qué región vinícola israelí se considera el área de calidad principal?",
        de: "Welche israelische Weinregion gilt als führendes Qualitätsgebiet?",
        nl: "Welke Israëlische wijnregio wordt beschouwd als het belangrijkste kwaliteitsgebied?"
      },
      options: [
        { en: "Galilee", es: "Galilea", de: "Galiläa", nl: "Galilea" },
        { en: "Negev", es: "Néguev", de: "Negev", nl: "Negev" },
        { en: "Judean Hills", es: "Colinas de Judea", de: "Judäische Hügel", nl: "Judese Heuvels" },
        { en: "Sharon Plain", es: "Llanura de Sarón", de: "Sharon-Ebene", nl: "Sharon-vlakte" }
      ],
      correct: 0,
      explanation: {
        en: "Galilee, particularly Upper Galilee and Golan Heights, produces Israel's finest wines with ideal elevation and climate.",
        es: "Galilea, particularmente la Alta Galilea y los Altos del Golán, produce los mejores vinos de Israel con elevación y clima ideales.",
        de: "Galiläa, besonders Obergaliläa und Golanhöhen, produziert Israels feinste Weine mit idealer Höhe und Klima.",
        nl: "Galilea, met name Boven-Galilea en Golan Heights, produceert Israël's beste wijnen met ideale hoogte en klimaat."
      }
    },
    {
      question: {
        en: "Which Croatian region produces Plavac Mali wine?",
        es: "¿Qué región croata produce vino Plavac Mali?",
        de: "Welche kroatische Region produziert Plavac Mali-Wein?",
        nl: "Welke Kroatische regio produceert Plavac Mali wijn?"
      },
      options: [
        { en: "Istria", es: "Istria", de: "Istrien", nl: "Istrië" },
        { en: "Slavonia", es: "Eslavonia", de: "Slawonien", nl: "Slavonië" },
        { en: "Dalmatia", es: "Dalmacia", de: "Dalmatien", nl: "Dalmatië" },
        { en: "Zagorje", es: "Zagorje", de: "Zagorje", nl: "Zagorje" }
      ],
      correct: 2,
      explanation: {
        en: "Dalmatia's coastal region, especially Pelješac Peninsula, is famous for robust Plavac Mali red wines.",
        es: "La región costera de Dalmacia, especialmente la Península de Pelješac, es famosa por los robustos vinos tintos Plavac Mali.",
        de: "Dalmatiens Küstenregion, besonders die Halbinsel Pelješac, ist berühmt für kräftige Plavac Mali-Rotweine.",
        nl: "Dalmatië's kustgebied, vooral het schiereiland Pelješac, is beroemd om robuuste Plavac Mali rode wijnen."
      }
    },
    {
      question: {
        en: "Which Georgian region is the birthplace of wine (8,000 years ago)?",
        es: "¿Qué región georgiana es el lugar de nacimiento del vino (hace 8,000 años)?",
        de: "Welche georgische Region ist die Geburtsstätte des Weins (vor 8.000 Jahren)?",
        nl: "Welke Georgische regio is de geboorteplaats van wijn (8.000 jaar geleden)?"
      },
      options: [
        { en: "Racha", es: "Racha", de: "Racha", nl: "Racha" },
        { en: "Kakheti", es: "Kajetia", de: "Kachetien", nl: "Kacheti" },
        { en: "Imereti", es: "Imereti", de: "Imeretien", nl: "Imereti" },
        { en: "Kartli", es: "Kartli", de: "Kartli", nl: "Kartli" }
      ],
      correct: 1,
      explanation: {
        en: "Kakheti produces 70% of Georgian wine and contains archaeological evidence of the world's oldest winemaking.",
        es: "Kajetia produce el 70% del vino georgiano y contiene evidencia arqueológica de la vinificación más antigua del mundo.",
        de: "Kachetien produziert 70% des georgischen Weins und enthält archäologische Beweise der ältesten Weinherstellung der Welt.",
        nl: "Kacheti produceert 70% van de Georgische wijn en bevat archeologisch bewijs van 's werelds oudste wijnmakerij."
      }
    },
    {
      question: {
        en: "Which Japanese wine region is most famous for quality production?",
        es: "¿Qué región vinícola japonesa es más famosa por la producción de calidad?",
        de: "Welche japanische Weinregion ist am berühmtesten für Qualitätsproduktion?",
        nl: "Welke Japanse wijnregio is het meest beroemd om kwaliteitsproductie?"
      },
      options: [
        { en: "Hokkaido", es: "Hokkaidō", de: "Hokkaidō", nl: "Hokkaido" },
        { en: "Yamanashi", es: "Yamanashi", de: "Yamanashi", nl: "Yamanashi" },
        { en: "Kyoto", es: "Kioto", de: "Kyōto", nl: "Kyoto" },
        { en: "Osaka", es: "Osaka", de: "Ōsaka", nl: "Osaka" }
      ],
      correct: 1,
      explanation: {
        en: "Yamanashi, at the foot of Mt. Fuji, produces 40% of Japanese wine, known for Koshu white wine.",
        es: "Yamanashi, al pie del Monte Fuji, produce el 40% del vino japonés, conocido por el vino blanco Koshu.",
        de: "Yamanashi am Fuße des Berges Fuji produziert 40% des japanischen Weins, bekannt für Koshu-Weißwein.",
        nl: "Yamanashi, aan de voet van de berg Fuji, produceert 40% van de Japanse wijn, bekend om Koshu witte wijn."
      }
    },
    {
      question: {
        en: "Which Tasmanian region is acclaimed for sparkling wine?",
        es: "¿Qué región de Tasmania es aclamada por el vino espumoso?",
        de: "Welche tasmanische Region ist für Schaumwein bekannt?",
        nl: "Welke Tasmaanse regio is geroemd om mousserende wijn?"
      },
      options: [
        { en: "Coal River Valley", es: "Valle del Río Coal", de: "Coal River Valley", nl: "Coal River Valley" },
        { en: "Tamar Valley", es: "Valle de Tamar", de: "Tamar Valley", nl: "Tamar Valley" },
        { en: "Derwent Valley", es: "Valle de Derwent", de: "Derwent Valley", nl: "Derwent Valley" },
        { en: "East Coast", es: "Costa Este", de: "Ostküste", nl: "Oostkust" }
      ],
      correct: 1,
      explanation: {
        en: "Tamar Valley's cool climate produces exceptional Champagne-method sparkling wines rivaling French quality.",
        es: "El clima fresco del Valle de Tamar produce excepcionales vinos espumosos de método Champagne que rivalizan con la calidad francesa.",
        de: "Das kühle Klima des Tamar Valley produziert außergewöhnliche Schaumweine nach Champagner-Methode, die mit französischer Qualität konkurrieren.",
        nl: "Het koele klimaat van Tamar Valley produceert uitzonderlijke mousserende wijnen volgens de Champagne-methode die wedijveren met Franse kwaliteit."
      }
    },
    {
      question: {
        en: "Which Uruguayan region is known for Tannat wine?",
        es: "¿Qué región uruguaya es conocida por el vino Tannat?",
        de: "Welche uruguayische Region ist für Tannat-Wein bekannt?",
        nl: "Welke Uruguayaanse regio staat bekend om Tannat wijn?"
      },
      options: [
        { en: "Maldonado", es: "Maldonado", de: "Maldonado", nl: "Maldonado" },
        { en: "Canelones", es: "Canelones", de: "Canelones", nl: "Canelones" },
        { en: "Colonia", es: "Colonia", de: "Colonia", nl: "Colonia" },
        { en: "Salto", es: "Salto", de: "Salto", nl: "Salto" }
      ],
      correct: 1,
      explanation: {
        en: "Canelones produces 60% of Uruguayan wine and is the heartland of the country's signature Tannat grape.",
        es: "Canelones produce el 60% del vino uruguayo y es el corazón de la uva Tannat emblemática del país.",
        de: "Canelones produziert 60% des uruguayischen Weins und ist das Herzland der charakteristischen Tannat-Traube des Landes.",
        nl: "Canelones produceert 60% van de Uruguayaanse wijn en is het hart van 's lands kenmerkende Tannat druif."
      }
    }
  ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
