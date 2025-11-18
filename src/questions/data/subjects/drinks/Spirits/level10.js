// Quiz Level 10: Drinken - Sterke drank (Expert Production & Analysis)
(function() {
  const level10 = {
    name: {
      en: "Expert Production & Analysis",
      es: "Producción y Análisis Experto",
      de: "Experten Produktion und Analyse",
      nl: "Expert Productie en Analyse"
    },
    questions: [
      {
        question: {
          en: "What is the purpose of reflux in continuous column distillation systems?",
          es: "¿Cuál es el propósito del reflujo en sistemas de destilación de columna continua?",
          de: "Was ist der Zweck des Rückflusses in kontinuierlichen Säulendestillationssystemen?",
          nl: "Wat is het doel van reflux in continue kolomdestillatiesystemen?"
        },
        options: [
          { en: "To provide liquid for vapor-liquid contact and separation efficiency", es: "Para proporcionar líquido para el contacto vapor-líquido y eficiencia de separación", de: "Um Flüssigkeit für Dampf-Flüssigkeit-Kontakt und Trennungseffizienz zu liefern", nl: "Om vloeistof te leveren voor damp-vloeistofcontact en scheidingsefficiëntie" },
          { en: "To increase temperature throughout the column", es: "Para aumentar la temperatura en toda la columna", de: "Um die Temperatur in der ganzen Säule zu erhöhen", nl: "Om de temperatuur in de hele kolom te verhogen" },
          { en: "To remove impurities from the bottom", es: "Para eliminar impurezas del fondo", de: "Um Verunreinigungen vom Boden zu entfernen", nl: "Om verontreinigingen van de bodem te verwijderen" },
          { en: "To cool vapor before condensation", es: "Para enfriar el vapor antes de la condensación", de: "Um den Dampf vor der Kondensation zu kühlen", nl: "Om de damp te koelen voor condensatie" }
        ],
        correct: 0,
        explanation: {
          en: "Reflux provides liquid flow down the column, creating vapor-liquid contact on each tray. This countercurrent flow is essential for achieving high separation efficiency and controlling composition throughout the column.",
          es: "El reflujo proporciona flujo de líquido hacia abajo de la columna, creando contacto vapor-líquido en cada bandeja. Este flujo a contracorriente es esencial para lograr alta eficiencia de separación y controlar la composición en toda la columna.",
          de: "Der Rückfluss sorgt für Flüssigkeitsstrom abwärts in der Säule und schafft Dampf-Flüssigkeit-Kontakt auf jedem Boden. Dieser Gegenstrom ist wesentlich für hohe Trennungseffizienz und Kontrolle der Zusammensetzung in der ganzen Säule.",
          nl: "Reflux zorgt voor vloeistofstroom naar beneden in de kolom, waardoor damp-vloeistofcontact ontstaat op elke plaat. Deze tegenstroom is essentieel voor het bereiken van hoge scheidingsefficiëntie en het controleren van de samenstelling door de hele kolom."
        }
      },
      {
        question: {
          en: "How does congener content affect spirit character and analysis?",
          es: "¿Cómo afecta el contenido de congéneres el carácter del licor y el análisis?",
          de: "Wie beeinflusst der Kongenergehalt den Spirituosencharakter und die Analyse?",
          nl: "Hoe beïnvloedt congenergehalte spiritkarakter en analyse?"
        },
        options: [
          { en: "Congeners provide flavor complexity and can indicate production method and authenticity", es: "Los congéneres proporcionan complejidad de sabor y pueden indicar método de producción y autenticidad", de: "Kongenere bieten Geschmackskomplexität und können Produktionsmethode und Authentizität anzeigen", nl: "Congeners bieden smaakcomplexiteit en kunnen productiemethode en authenticiteit aangeven" },
          { en: "Congeners always indicate poor quality", es: "Los congéneres siempre indican mala calidad", de: "Kongenere zeigen immer schlechte Qualität an", nl: "Congeners duiden altijd op slechte kwaliteit" },
          { en: "All spirits should have identical congener profiles", es: "Todos los licores deben tener perfiles de congéneres idénticos", de: "Alle Spirituosen sollten identische Kongenerprofile haben", nl: "Alle spirits zouden identieke congenerprofielen moeten hebben" },
          { en: "Congeners have no effect on flavor", es: "Los congéneres no tienen efecto en el sabor", de: "Kongenere haben keine Wirkung auf den Geschmack", nl: "Congeners hebben geen effect op smaak" }
        ],
        correct: 0,
        explanation: {
          en: "Congeners are flavor compounds beyond ethanol that create the distinctive character of different spirits. Their analysis can reveal production methods, raw materials, and detect adulteration.",
          es: "Los congéneres son compuestos de sabor más allá del etanol que crean el carácter distintivo de diferentes licores. Su análisis puede revelar métodos de producción, materias primas y detectar adulteración.",
          de: "Kongenere sind Geschmacksverbindungen jenseits von Ethanol, die den charakteristischen Charakter verschiedener Spirituosen schaffen. Ihre Analyse kann Produktionsmethoden, Rohstoffe aufdecken und Verfälschung erkennen.",
          nl: "Congeners zijn smaakverbindingen naast ethanol die het onderscheidende karakter van verschillende spirits creëren. Hun analyse kan productiemethoden, grondstoffen onthullen en vervalsing detecteren."
        }
      },
      {
        question: {
          en: "What role does enzymatic activity play in whiskey mash bill optimization?",
          es: "¿Qué papel juega la actividad enzimática en la optimización del mash bill del whiskey?",
          de: "Welche Rolle spielt enzymatische Aktivität bei der Whiskey-Maischbill-Optimierung?",
          nl: "Welke rol speelt enzymatische activiteit bij whiskey mash bill optimalisatie?"
        },
        options: [
          { en: "Different grains contribute specific enzymes that affect conversion efficiency and flavor development", es: "Diferentes granos contribuyen enzimas específicas que afectan la eficiencia de conversión y desarrollo de sabor", de: "Verschiedene Getreide tragen spezifische Enzyme bei, die Umwandlungseffizienz und Geschmacksentwicklung beeinflussen", nl: "Verschillende granen dragen specifieke enzymen bij die conversie-efficiëntie en smaakontwikkeling beïnvloeden" },
          { en: "Enzymes only matter during final filtration", es: "Las enzimas solo importan durante la filtración final", de: "Enzyme sind nur während der finalen Filtration wichtig", nl: "Enzymen zijn alleen belangrijk tijdens finale filtratie" },
          { en: "All grains have identical enzymatic profiles", es: "Todos los granos tienen perfiles enzimáticos idénticos", de: "Alle Getreide haben identische enzymatische Profile", nl: "Alle granen hebben identieke enzymatische profielen" },
          { en: "Enzymatic activity decreases spirit quality", es: "La actividad enzimática disminuye la calidad del licor", de: "Enzymatische Aktivität verringert die Spirituosenqualität", nl: "Enzymatische activiteit vermindert spiritkwaliteit" }
        ],
        correct: 0,
        explanation: {
          en: "Different grains in the mash bill contribute varying levels of amylase, protease, and other enzymes that affect starch conversion efficiency, protein breakdown, and ultimately flavor compound formation during fermentation.",
          es: "Diferentes granos en el mash bill contribuyen niveles variables de amilasa, proteasa y otras enzimas que afectan la eficiencia de conversión de almidón, degradación de proteínas y finalmente formación de compuestos de sabor durante la fermentación.",
          de: "Verschiedene Getreide im Maischbill tragen unterschiedliche Mengen an Amylase, Protease und anderen Enzymen bei, die Stärkeumwandlungseffizienz, Proteinabbau und letztendlich Geschmacksverbindungsbildung während der Fermentation beeinflussen.",
          nl: "Verschillende granen in de mash bill dragen variërende niveaus van amylase, protease en andere enzymen bij die zetmeel conversie-efficiëntie, eiwitafbraak en uiteindelijk smaakverbinding vorming tijdens fermentatie beïnvloeden."
        }
      },
      {
        question: {
          en: "How does wood treatment affect barrel contribution to aged spirits?",
          es: "¿Cómo afecta el tratamiento de la madera la contribución del barril a los licores envejecidos?",
          de: "Wie beeinflusst die Holzbehandlung den Fassbeitrag zu gereiften Spirituosen?",
          nl: "Hoe beïnvloedt houtbehandeling de vatbijdrage aan gerijpte spirits?"
        },
        options: [
          { en: "Charring depth and toast level control extractable compound availability and flavor intensity", es: "La profundidad de carbonización y nivel de tostado controlan la disponibilidad de compuestos extraíbles e intensidad de sabor", de: "Verkohlungstiefe und Röstgrad kontrollieren die Verfügbarkeit extrahierbarer Verbindungen und Geschmacksintensität", nl: "Verkolingdiepte en roostergraad controleren de beschikbaarheid van extraheerbare verbindingen en smaakintensiteit" },
          { en: "All barrel treatments produce identical results", es: "Todos los tratamientos de barril producen resultados idénticos", de: "Alle Fassbehandlungen produzieren identische Ergebnisse", nl: "Alle vatbehandelingen produceren identieke resultaten" },
          { en: "Wood treatment only affects appearance", es: "El tratamiento de madera solo afecta la apariencia", de: "Holzbehandlung beeinflusst nur das Aussehen", nl: "Houtbehandeling beïnvloedt alleen uiterlijk" },
          { en: "Charring prevents any flavor extraction", es: "La carbonización previene cualquier extracción de sabor", de: "Verkohlung verhindert jede Geschmacksextraktion", nl: "Verkolen voorkomt alle smaakextractie" }
        ],
        correct: 0,
        explanation: {
          en: "Barrel charring creates a carbon filter layer while exposing fresh wood underneath. Toast levels control caramelization and lignin breakdown, determining which wood compounds (vanillin, tannins, lactones) are available for extraction.",
          es: "La carbonización del barril crea una capa de filtro de carbón mientras expone madera fresca debajo. Los niveles de tostado controlan la caramelización y degradación de lignina, determinando qué compuestos de madera (vainillina, taninos, lactonas) están disponibles para extracción.",
          de: "Fassverkohlung erzeugt eine Kohlenstofffilter-Schicht während frisches Holz darunter freigelegt wird. Röstgrade kontrollieren Karamelisierung und Ligninabbau und bestimmen, welche Holzverbindungen (Vanillin, Tannine, Lactone) für Extraktion verfügbar sind.",
          nl: "Vat verkolen creëert een koolstoffilterlaag terwijl vers hout eronder wordt blootgelegd. Roostergraden controleren karamelisatie en lignine afbraak, wat bepaalt welke houtverbindingen (vanilline, tannines, lactonen) beschikbaar zijn voor extractie."
        }
      },
      {
        question: {
          en: "What analytical technique best distinguishes between pot still and column still distillates?",
          es: "¿Qué técnica analítica distingue mejor entre destilados de alambique y de columna?",
          de: "Welche Analysetechnik unterscheidet am besten zwischen Pot Still und Column Still Destillaten?",
          nl: "Welke analytische techniek onderscheidt het best tussen pot still en column still destillaten?"
        },
        options: [
          { en: "Gas chromatography-mass spectrometry for congener profiling", es: "Cromatografía de gases-espectrometría de masas para perfilado de congéneres", de: "Gaschromatographie-Massenspektrometrie für Kongener-Profiling", nl: "Gaschromatografie-massaspectrometrie voor congener profilering" },
          { en: "Simple alcohol measurement only", es: "Solo medición simple de alcohol", de: "Nur einfache Alkoholmessung", nl: "Alleen eenvoudige alcoholmeting" },
          { en: "Visual color comparison", es: "Comparación visual de color", de: "Visueller Farbvergleich", nl: "Visuele kleurvergelijking" },
          { en: "pH testing alone", es: "Solo prueba de pH", de: "Nur pH-Test", nl: "Alleen pH testen" }
        ],
        correct: 0,
        explanation: {
          en: "GC-MS analysis reveals the congener fingerprint that distinguishes distillation methods. Pot stills retain more higher alcohols, esters, and aldehydes, while column stills produce cleaner profiles with fewer congeners.",
          es: "El análisis GC-MS revela la huella de congéneres que distingue los métodos de destilación. Los alambiques retienen más alcoholes superiores, ésteres y aldehídos, mientras que las columnas producen perfiles más limpios con menos congéneres.",
          de: "GC-MS-Analyse enthüllt den Kongener-Fingerabdruck, der Destillationsmethoden unterscheidet. Pot Stills behalten mehr höhere Alkohole, Ester und Aldehyde, während Column Stills sauberere Profile mit weniger Kongeneren produzieren.",
          nl: "GC-MS analyse onthult de congener vingerafdruk die destillatiemethoden onderscheidt. Pot stills behouden meer hogere alcoholen, esters en aldehyden, terwijl column stills schonere profielen met minder congeners produceren."
        }
      },
      {
        question: {
          en: "How does fermentation temperature control affect final spirit character?",
          es: "¿Cómo afecta el control de temperatura de fermentación el carácter final del licor?",
          de: "Wie beeinflusst die Fermentationstemperaturkontrolle den finalen Spirituosencharakter?",
          nl: "Hoe beïnvloedt fermentatietemperatuurcontrole het finale spiritkarakter?"
        },
        options: [
          { en: "Temperature affects yeast metabolism, ester formation, and congener development", es: "La temperatura afecta el metabolismo de levadura, formación de ésteres y desarrollo de congéneres", de: "Temperatur beeinflusst Hefemetabolismus, Esterbildung und Kongenerentwicklung", nl: "Temperatuur beïnvloedt gistmetabolisme, estervorming en congenerontwikkeling" },
          { en: "Temperature has no effect on final flavor", es: "La temperatura no tiene efecto en el sabor final", de: "Temperatur hat keine Wirkung auf den finalen Geschmack", nl: "Temperatuur heeft geen effect op eindspmaak" },
          { en: "Higher temperatures always produce better spirits", es: "Temperaturas más altas siempre producen mejores licores", de: "Höhere Temperaturen produzieren immer bessere Spirituosen", nl: "Hogere temperaturen produceren altijd betere spirits" },
          { en: "Yeast works identically at all temperatures", es: "La levadura funciona idénticamente a todas las temperaturas", de: "Hefe arbeitet bei allen Temperaturen identisch", nl: "Gist werkt identiek bij alle temperaturen" }
        ],
        correct: 0,
        explanation: {
          en: "Fermentation temperature significantly affects yeast behavior. Lower temperatures favor ester formation creating fruity notes, while higher temperatures promote fusel alcohol production. Temperature control is crucial for consistent flavor development.",
          es: "La temperatura de fermentación afecta significativamente el comportamiento de la levadura. Temperaturas más bajas favorecen la formación de ésteres creando notas frutales, mientras que temperaturas más altas promueven la producción de alcoholes de fusel. El control de temperatura es crucial para el desarrollo consistente de sabor.",
          de: "Fermentationstemperatur beeinflusst das Hefeverhalten erheblich. Niedrigere Temperaturen begünstigen Esterbildung und schaffen fruchtige Noten, während höhere Temperaturen Fuselalkohol-Produktion fördern. Temperaturkontrolle ist entscheidend für konsistente Geschmacksentwicklung.",
          nl: "Fermentatietemperatuur beïnvloedt gistgedrag aanzienlijk. Lagere temperaturen bevorderen estervorming waardoor fruitige tonen ontstaan, terwijl hogere temperaturen fuselalkohol productie bevorderen. Temperatuurcontrole is cruciaal voor consistente smaakontwikkeling."
        }
      },
      {
        question: {
          en: "What is the significance of theoretical plates in distillation column design?",
          es: "¿Cuál es la importancia de los platos teóricos en el diseño de columnas de destilación?",
          de: "Was ist die Bedeutung theoretischer Böden im Destillationssäulen-Design?",
          nl: "Wat is de betekenis van theoretische platen in distillatiekolomontwerp?"
        },
        options: [
          { en: "They determine separation efficiency and purity potential of the column", es: "Determinan la eficiencia de separación y potencial de pureza de la columna", de: "Sie bestimmen Trennungseffizienz und Reinheitspotenzial der Säule", nl: "Ze bepalen scheidingsefficiëntie en zuiverheidspotentieel van de kolom" },
          { en: "They only affect column height", es: "Solo afectan la altura de la columna", de: "Sie beeinflussen nur die Säulenhöhe", nl: "Ze beïnvloeden alleen kolomhoogte" },
          { en: "More plates always mean lower quality", es: "Más platos siempre significan menor calidad", de: "Mehr Böden bedeuten immer geringere Qualität", nl: "Meer platen betekent altijd lagere kwaliteit" },
          { en: "Theoretical plates have no practical application", es: "Los platos teóricos no tienen aplicación práctica", de: "Theoretische Böden haben keine praktische Anwendung", nl: "Theoretische platen hebben geen praktische toepassing" }
        ],
        correct: 0,
        explanation: {
          en: "Theoretical plates represent the number of vapor-liquid equilibrium stages in a column. More plates provide better separation capability, allowing for higher purity or more precise control over congener retention in spirit production.",
          es: "Los platos teóricos representan el número de etapas de equilibrio vapor-líquido en una columna. Más platos proporcionan mejor capacidad de separación, permitiendo mayor pureza o control más preciso sobre la retención de congéneres en la producción de licores.",
          de: "Theoretische Böden repräsentieren die Anzahl der Dampf-Flüssigkeit-Gleichgewichtsstufen in einer Säule. Mehr Böden bieten bessere Trennfähigkeit und ermöglichen höhere Reinheit oder präzisere Kontrolle über Kongener-Retention in der Spirituosenproduktion.",
          nl: "Theoretische platen vertegenwoordigen het aantal damp-vloeistof evenwichtsstadia in een kolom. Meer platen bieden betere scheidingscapaciteit, wat hogere zuiverheid of meer precieze controle over congener retentie in spiritproductie mogelijk maakt."
        }
      },
      {
        question: {
          en: "How does water chemistry affect spirit production and final quality?",
          es: "¿Cómo afecta la química del agua la producción de licores y la calidad final?",
          de: "Wie beeinflusst die Wasserchemie die Spirituosenproduktion und finale Qualität?",
          nl: "Hoe beïnvloedt waterchemie spiritproductie en eindkwaliteit?"
        },
        options: [
          { en: "Mineral content affects enzyme activity, yeast health, and extraction during aging", es: "El contenido mineral afecta la actividad enzimática, salud de levadura y extracción durante el envejecimiento", de: "Mineralgehalt beeinflusst Enzymaktivität, Hefegesundheit und Extraktion während der Reifung", nl: "Mineraalgehalte beïnvloedt enzymactiviteit, gistgezondheid en extractie tijdens rijping" },
          { en: "All water sources produce identical results", es: "Todas las fuentes de agua producen resultados idénticos", de: "Alle Wasserquellen produzieren identische Ergebnisse", nl: "Alle waterbronnen produceren identieke resultaten" },
          { en: "Water only affects color, not flavor", es: "El agua solo afecta el color, no el sabor", de: "Wasser beeinflusst nur Farbe, nicht Geschmack", nl: "Water beïnvloedt alleen kleur, niet smaak" },
          { en: "Distillation eliminates all water effects", es: "La destilación elimina todos los efectos del agua", de: "Destillation eliminiert alle Wassereffekte", nl: "Destillatie elimineert alle watereffecten" }
        ],
        correct: 0,
        explanation: {
          en: "Water mineral content affects mash pH, enzyme efficiency, yeast metabolism, and copper ion availability during distillation. It also influences extraction rates during barrel aging and final proofing characteristics.",
          es: "El contenido mineral del agua afecta el pH del mosto, eficiencia enzimática, metabolismo de levadura y disponibilidad de iones de cobre durante la destilación. También influye en las tasas de extracción durante el envejecimiento en barril y características finales de graduación.",
          de: "Wasser-Mineralgehalt beeinflusst Maische-pH, Enzymeffizienz, Hefemetabolismus und Kupferion-Verfügbarkeit während der Destillation. Es beeinflusst auch Extraktionsraten während der Fassreifung und finale Verdünnungscharakteristika.",
          nl: "Water mineraalgehalte beïnvloedt mash pH, enzymefficiëntie, gistmetabolisme en koperion beschikbaarheid tijdens destillatie. Het beïnvloedt ook extractiesnelheden tijdens vatrijping en finale verdunningskarakteristieken."
        }
      },
      {
        question: {
          en: "What causes the formation of ethyl carbamate in aged spirits and how is it controlled?",
          es: "¿Qué causa la formación de carbamato de etilo en licores envejecidos y cómo se controla?",
          de: "Was verursacht die Bildung von Ethylcarbamat in gereiften Spirituosen und wie wird es kontrolliert?",
          nl: "Wat veroorzaakt de vorming van ethylcarbamaat in gerijpte spirits en hoe wordt het gecontroleerd?"
        },
        options: [
          { en: "Urea from yeast reacts with ethanol during aging; controlled by yeast strain selection and nitrogen management", es: "La urea de levadura reacciona con etanol durante el envejecimiento; se controla mediante selección de cepas de levadura y manejo de nitrógeno", de: "Harnstoff aus Hefe reagiert mit Ethanol während der Reifung; kontrolliert durch Hefestamm-Auswahl und Stickstoff-Management", nl: "Ureum van gist reageert met ethanol tijdens rijping; gecontroleerd door giststam selectie en stikstofbeheer" },
          { en: "It's only formed by bacterial contamination", es: "Solo se forma por contaminación bacteriana", de: "Es wird nur durch bakterielle Kontamination gebildet", nl: "Het wordt alleen gevormd door bacteriële contaminatie" },
          { en: "Barrel char directly produces ethyl carbamate", es: "El carbón del barril produce directamente carbamato de etilo", de: "Fassverkohlung produziert direkt Ethylcarbamat", nl: "Vatverkolen produceert direct ethylcarbamaat" },
          { en: "It cannot be controlled in production", es: "No se puede controlar en la producción", de: "Es kann in der Produktion nicht kontrolliert werden", nl: "Het kan niet gecontroleerd worden in productie" }
        ],
        correct: 0,
        explanation: {
          en: "Ethyl carbamate forms when urea (produced by yeast during fermentation) reacts with ethanol over time. It's controlled by selecting low-urea producing yeast strains, managing fermentation nitrogen levels, and optimizing pH conditions.",
          es: "El carbamato de etilo se forma cuando la urea (producida por levadura durante la fermentación) reacciona con etanol con el tiempo. Se controla seleccionando cepas de levadura de baja producción de urea, manejando niveles de nitrógeno de fermentación y optimizando condiciones de pH.",
          de: "Ethylcarbamat entsteht, wenn Harnstoff (von Hefe während der Fermentation produziert) mit Ethanol über Zeit reagiert. Es wird durch Auswahl von Hefestämmen mit niedrigem Harnstoff, Management von Fermentations-Stickstoffleveln und Optimierung der pH-Bedingungen kontrolliert.",
          nl: "Ethylcarbamaat vormt zich wanneer ureum (geproduceerd door gist tijdens fermentatie) reageert met ethanol na verloop van tijd. Het wordt gecontroleerd door selectie van lage-ureum producerende giststammen, beheer van fermentatie stikstofniveaus en optimalisatie van pH condities."
        }
      },
      {
        question: {
          en: "How does maturation microclimate within rickhouses affect whiskey development?",
          es: "¿Cómo afecta el microclima de maduración dentro de las casas de barriles el desarrollo del whiskey?",
          de: "Wie beeinflusst das Reifungs-Mikroklima in Lagerhäusern die Whiskey-Entwicklung?",
          nl: "Hoe beïnvloedt rijpingsmicroklimat binnen opslaghuizen whiskey ontwikkeling?"
        },
        options: [
          { en: "Temperature and humidity gradients create varying extraction rates and flavor development patterns", es: "Los gradientes de temperatura y humedad crean tasas de extracción variables y patrones de desarrollo de sabor", de: "Temperatur- und Feuchtigkeitsgradienten schaffen unterschiedliche Extraktionsraten und Geschmacksentwicklungsmuster", nl: "Temperatuur en vochtigheidsgradiënten creëren variërende extractiesnelheden en smaakontwikkelingspatronen" },
          { en: "All barrels age identically regardless of location", es: "Todos los barriles envejecen idénticamente independientemente de la ubicación", de: "Alle Fässer reifen identisch unabhängig vom Standort", nl: "Alle vaten rijpen identiek ongeacht locatie" },
          { en: "Only the bottom floor affects aging", es: "Solo el piso inferior afecta el envejecimiento", de: "Nur das unterste Stockwerk beeinflusst die Reifung", nl: "Alleen de onderste verdieping beïnvloedt rijping" },
          { en: "Microclimate has no measurable effect", es: "El microclima no tiene efecto medible", de: "Mikroklima hat keine messbare Wirkung", nl: "Microklimat heeft geen meetbaar effect" }
        ],
        correct: 0,
        explanation: {
          en: "Rickhouse position creates significant microclimate variation. Upper floors experience higher temperatures promoting extraction and evaporation, while lower floors provide cooler, more stable conditions. This leads to different maturation profiles even within the same facility.",
          es: "La posición en la casa de barriles crea variación significativa de microclima. Los pisos superiores experimentan temperaturas más altas promoviendo extracción y evaporación, mientras que los pisos inferiores proporcionan condiciones más frescas y estables. Esto lleva a diferentes perfiles de maduración incluso dentro de la misma instalación.",
          de: "Lagerhausposition schafft signifikante Mikroklima-Variation. Obere Stockwerke erfahren höhere Temperaturen, die Extraktion und Verdunstung fördern, während untere Stockwerke kühlere, stabilere Bedingungen bieten. Dies führt zu unterschiedlichen Reifungsprofilen selbst innerhalb derselben Anlage.",
          nl: "Opslaghuis positie creëert significante microklimat variatie. Hogere verdiepingen ervaren hogere temperaturen die extractie en verdamping bevorderen, terwijl lagere verdiepingen koelere, stabielere omstandigheden bieden. Dit leidt tot verschillende rijpingsprofielen zelfs binnen dezelfde faciliteit."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
