// Quiz Level 7: Drinken - Frisdranken (Professional Beverage Industry Knowledge)
(function() {
  const level7 = {
    name: {
      en: "Professional Beverage Industry Knowledge",
      es: "Conocimiento Profesional de la Industria de Bebidas",
      de: "Professionelles Getränkeindustrie-Wissen",
      nl: "Professionele Drankenindustrie Kennis"
    },
    questions: [
      {
        question: {
          en: "What is the primary function of a beverage filling machine's counter-pressure system?",
          es: "¿Cuál es la función principal del sistema de contrapresión de una máquina llenadora de bebidas?",
          de: "Was ist die Hauptfunktion des Gegendrucksystems einer Getränkeabfüllmaschine?",
          nl: "Wat is de primaire functie van het tegendruksysteem van een drankenvulmachine?"
        },
        options: [
          { en: "To increase filling speed", es: "Para aumentar la velocidad de llenado", de: "Um die Füllgeschwindigkeit zu erhöhen", nl: "Om de vulsnelheid te verhogen" },
          { en: "To maintain CO2 levels during filling", es: "Para mantener los niveles de CO2 durante el llenado", de: "Um CO2-Werte während des Füllens zu erhalten", nl: "Om CO2-niveaus tijdens vullen te behouden" },
          { en: "To filter the beverage", es: "Para filtrar la bebida", de: "Um das Getränk zu filtern", nl: "Om de drank te filteren" },
          { en: "To add preservatives", es: "Para añadir conservantes", de: "Um Konservierungsmittel hinzuzufügen", nl: "Om conserveermiddelen toe te voegen" }
        ],
        correct: 1,
        explanation: {
          en: "Counter-pressure systems maintain CO2 saturation during filling by keeping the container under pressure equal to the beverage's CO2 pressure, preventing degassing.",
          es: "Los sistemas de contrapresión mantienen la saturación de CO2 durante el llenado manteniendo el contenedor bajo presión igual a la presión de CO2 de la bebida, previniendo la desgasificación.",
          de: "Gegendrucksysteme erhalten die CO2-Sättigung während des Füllens, indem sie den Behälter unter Druck halten, der dem CO2-Druck des Getränks entspricht, und so eine Entgasung verhindern.",
          nl: "Tegendruksystemen behouden CO2-verzadiging tijdens vullen door de container onder druk te houden gelijk aan de CO2-druk van de drank, waardoor ontgassing wordt voorkomen."
        }
      },
      {
        question: {
          en: "Which additive is commonly used to prevent oxidation in citrus-flavored beverages?",
          es: "¿Qué aditivo se usa comúnmente para prevenir la oxidación en bebidas con sabor a cítricos?",
          de: "Welcher Zusatzstoff wird üblicherweise verwendet, um Oxidation in zitrusaromatisierten Getränken zu verhindern?",
          nl: "Welke toevoeging wordt vaak gebruikt om oxidatie in citrusgearomatiseerde dranken te voorkomen?"
        },
        options: [
          { en: "BHA (Butylated hydroxyanisole)", es: "BHA (Hidroxianisol butilado)", de: "BHA (Butylhydroxyanisol)", nl: "BHA (Gebutyleerd hydroxyanisol)" },
          { en: "Ascorbic acid (Vitamin C)", es: "Ácido ascórbico (Vitamina C)", de: "Ascorbinsäure (Vitamin C)", nl: "Ascorbinezuur (Vitamine C)" },
          { en: "Sodium chloride", es: "Cloruro de sodio", de: "Natriumchlorid", nl: "Natriumchloride" },
          { en: "Sucrose", es: "Sacarosa", de: "Saccharose", nl: "Sacharose" }
        ],
        correct: 1,
        explanation: {
          en: "Ascorbic acid (Vitamin C) is widely used as an antioxidant in citrus beverages to prevent flavor degradation and color changes from oxidation.",
          es: "El ácido ascórbico (Vitamina C) se usa ampliamente como antioxidante en bebidas cítricas para prevenir la degradación del sabor y cambios de color por oxidación.",
          de: "Ascorbinsäure (Vitamin C) wird weit verbreitet als Antioxidans in Zitrusgetränken verwendet, um Geschmacksabbau und Farbveränderungen durch Oxidation zu verhindern.",
          nl: "Ascorbinezuur (Vitamine C) wordt veel gebruikt als antioxidant in citrusdranken om smaakafbraak en kleurveranderingen door oxidatie te voorkomen."
        }
      },
      {
        question: {
          en: "What is the typical shelf life extension achieved by aseptic packaging compared to traditional hot-fill methods?",
          es: "¿Cuál es la extensión típica de vida útil lograda por el empaque aséptico comparado con métodos tradicionales de llenado caliente?",
          de: "Was ist die typische Haltbarkeitsverlängerung durch aseptische Verpackung im Vergleich zu traditionellen Heißabfüllmethoden?",
          nl: "Wat is de typische houdbaarheidsverlenging behaald door aseptische verpakking vergeleken met traditionele heet-vul methoden?"
        },
        options: [
          { en: "No significant difference", es: "No hay diferencia significativa", de: "Kein signifikanter Unterschied", nl: "Geen significant verschil" },
          { en: "2-3 times longer", es: "2-3 veces más largo", de: "2-3 mal länger", nl: "2-3 keer langer" },
          { en: "5-10 times longer", es: "5-10 veces más largo", de: "5-10 mal länger", nl: "5-10 keer langer" },
          { en: "Exactly double", es: "Exactamente el doble", de: "Genau doppelt", nl: "Precies dubbel" }
        ],
        correct: 1,
        explanation: {
          en: "Aseptic packaging typically extends shelf life 2-3 times longer than hot-fill methods by minimizing heat exposure and maintaining better nutritional quality.",
          es: "El empaque aséptico típicamente extiende la vida útil 2-3 veces más que los métodos de llenado caliente al minimizar la exposición al calor y mantener mejor calidad nutricional.",
          de: "Aseptische Verpackung verlängert die Haltbarkeit typischerweise 2-3 mal länger als Heißabfüllmethoden, indem sie die Hitzeeinwirkung minimiert und bessere Nährstoffqualität erhält.",
          nl: "Aseptische verpakking verlengt doorgaans de houdbaarheid 2-3 keer langer dan heet-vul methoden door warmte-blootstelling te minimaliseren en betere voedingskwaliteit te behouden."
        }
      },
      {
        question: {
          en: "Which measurement unit is used to quantify carbonation levels in soft drinks?",
          es: "¿Qué unidad de medida se usa para cuantificar los niveles de carbonatación en refrescos?",
          de: "Welche Maßeinheit wird verwendet, um Karbonisierungsgrade in Erfrischungsgetränken zu quantifizieren?",
          nl: "Welke meeteenheid wordt gebruikt om koolzuurniveaus in frisdranken te kwantificeren?"
        },
        options: [
          { en: "PPM (Parts per million)", es: "PPM (Partes por millón)", de: "PPM (Teile pro Million)", nl: "PPM (Delen per miljoen)" },
          { en: "Volumes of CO2", es: "Volúmenes de CO2", de: "CO2-Volumina", nl: "Volumes CO2" },
          { en: "Brix degrees", es: "Grados Brix", de: "Brix-Grade", nl: "Brix graden" },
          { en: "pH units", es: "Unidades de pH", de: "pH-Einheiten", nl: "pH eenheden" }
        ],
        correct: 1,
        explanation: {
          en: "Carbonation is measured in 'volumes of CO2', which indicates how many volumes of CO2 gas are dissolved in one volume of liquid at standard conditions.",
          es: "La carbonatación se mide en 'volúmenes de CO2', que indica cuántos volúmenes de gas CO2 están disueltos en un volumen de líquido en condiciones estándar.",
          de: "Karbonisierung wird in 'CO2-Volumina' gemessen, was angibt, wie viele Volumina CO2-Gas in einem Volumen Flüssigkeit unter Standardbedingungen gelöst sind.",
          nl: "Koolzuur wordt gemeten in 'volumes CO2', wat aangeeft hoeveel volumes CO2-gas opgelost zijn in één volume vloeistof onder standaardcondities."
        }
      },
      {
        question: {
          en: "What is the primary concern with using recycled PET bottles for beverage packaging?",
          es: "¿Cuál es la preocupación principal al usar botellas PET recicladas para empaque de bebidas?",
          de: "Was ist das Hauptanliegen bei der Verwendung recycelter PET-Flaschen für Getränkeverpackungen?",
          nl: "Wat is de primaire zorg bij het gebruik van gerecyclede PET-flessen voor drankenverpakking?"
        },
        options: [
          { en: "Higher cost", es: "Mayor costo", de: "Höhere Kosten", nl: "Hogere kosten" },
          { en: "Potential migration of contaminants", es: "Posible migración de contaminantes", de: "Mögliche Migration von Schadstoffen", nl: "Mogelijke migratie van verontreinigingen" },
          { en: "Poor visual appearance", es: "Apariencia visual pobre", de: "Schlechtes visuelles Erscheinungsbild", nl: "Slechte visuele uitstraling" },
          { en: "Reduced carbonation retention", es: "Retención reducida de carbonatación", de: "Reduzierte Kohlensäure-Retention", nl: "Verminderde koolzuurretentie" }
        ],
        correct: 1,
        explanation: {
          en: "The main concern with recycled PET is potential migration of contaminants from previous uses into the beverage, which requires strict food-grade recycling processes.",
          es: "La principal preocupación con PET reciclado es la posible migración de contaminantes de usos previos hacia la bebida, lo que requiere procesos estrictos de reciclaje alimentario.",
          de: "Das Hauptanliegen bei recyceltem PET ist die mögliche Migration von Schadstoffen aus früheren Verwendungen in das Getränk, was strenge lebensmitteltaugliche Recyclingverfahren erfordert.",
          nl: "De hoofdzorg bij gerecyclede PET is mogelijke migratie van verontreinigingen uit vorig gebruik naar de drank, wat strikte voedselkwaliteit recyclingprocessen vereist."
        }
      },
      {
        question: {
          en: "Which enzyme is used in beverage processing to clarify fruit juices by breaking down pectin?",
          es: "¿Qué enzima se usa en el procesamiento de bebidas para clarificar jugos de fruta descomponiendo pectina?",
          de: "Welches Enzym wird in der Getränkeverarbeitung verwendet, um Fruchtsäfte durch Pektinabbau zu klären?",
          nl: "Welk enzym wordt gebruikt in drankenverwerking om vruchtensappen te klaren door pectine af te breken?"
        },
        options: [
          { en: "Amylase", es: "Amilasa", de: "Amylase", nl: "Amylase" },
          { en: "Pectinase", es: "Pectinasa", de: "Pektinase", nl: "Pectinase" },
          { en: "Cellulase", es: "Celulasa", de: "Cellulase", nl: "Cellulase" },
          { en: "Invertase", es: "Invertasa", de: "Invertase", nl: "Invertase" }
        ],
        correct: 1,
        explanation: {
          en: "Pectinase enzymes break down pectin molecules in fruit juices, reducing viscosity and helping to clarify the juice by improving filtration.",
          es: "Las enzimas pectinasa descomponen las moléculas de pectina en jugos de fruta, reduciendo la viscosidad y ayudando a clarificar el jugo mejorando la filtración.",
          de: "Pektinase-Enzyme bauen Pektinmoleküle in Fruchtsäften ab, reduzieren die Viskosität und helfen bei der Klärung des Saftes durch verbesserte Filtration.",
          nl: "Pectinase enzymen breken pectine moleculen af in vruchtensappen, verminderen viscositeit en helpen het sap te klaren door verbeterde filtratie."
        }
      },
      {
        question: {
          en: "What is the purpose of nitrogen flushing in beverage packaging?",
          es: "¿Cuál es el propósito del lavado con nitrógeno en el empaque de bebidas?",
          de: "Was ist der Zweck des Stickstoffspülens bei Getränkeverpackungen?",
          nl: "Wat is het doel van stikstof spoelen bij drankenverpakking?"
        },
        options: [
          { en: "To add flavor", es: "Para añadir sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" },
          { en: "To displace oxygen and prevent oxidation", es: "Para desplazar oxígeno y prevenir oxidación", de: "Um Sauerstoff zu verdrängen und Oxidation zu verhindern", nl: "Om zuurstof te verdringen en oxidatie te voorkomen" },
          { en: "To increase carbonation", es: "Para aumentar carbonatación", de: "Um Karbonisierung zu erhöhen", nl: "Om koolzuur te verhogen" },
          { en: "To sterilize the package", es: "Para esterilizar el empaque", de: "Um die Verpackung zu sterilisieren", nl: "Om de verpakking te steriliseren" }
        ],
        correct: 1,
        explanation: {
          en: "Nitrogen flushing displaces oxygen from the headspace of beverage containers, preventing oxidation reactions that can degrade flavor and nutritional quality.",
          es: "El lavado con nitrógeno desplaza el oxígeno del espacio de cabeza de los contenedores de bebidas, previniendo reacciones de oxidación que pueden degradar el sabor y calidad nutricional.",
          de: "Stickstoffspülen verdrängt Sauerstoff aus dem Kopfraum von Getränkebehältern und verhindert Oxidationsreaktionen, die Geschmack und Nährstoffqualität beeinträchtigen können.",
          nl: "Stikstof spoelen verdringt zuurstof uit de kopruimte van drankencontainers, waardoor oxidatiereacties worden voorkomen die smaak en voedingskwaliteit kunnen verslechteren."
        }
      },
      {
        question: {
          en: "Which quality parameter indicates the total dissolved solids content in a beverage?",
          es: "¿Qué parámetro de calidad indica el contenido total de sólidos disueltos en una bebida?",
          de: "Welcher Qualitätsparameter zeigt den Gesamtgehalt gelöster Feststoffe in einem Getränk an?",
          nl: "Welke kwaliteitsparameter geeft het totale opgeloste stoffen gehalte aan in een drank?"
        },
        options: [
          { en: "pH value", es: "Valor de pH", de: "pH-Wert", nl: "pH waarde" },
          { en: "Brix measurement", es: "Medición Brix", de: "Brix-Messung", nl: "Brix meting" },
          { en: "Turbidity (NTU)", es: "Turbidez (NTU)", de: "Trübung (NTU)", nl: "Troebeling (NTU)" },
          { en: "Specific gravity", es: "Gravedad específica", de: "Spezifisches Gewicht", nl: "Soortelijk gewicht" }
        ],
        correct: 1,
        explanation: {
          en: "Brix measurement indicates the total dissolved solids content (primarily sugars) in a beverage, expressed as percentage by weight.",
          es: "La medición Brix indica el contenido total de sólidos disueltos (principalmente azúcares) en una bebida, expresado como porcentaje en peso.",
          de: "Brix-Messung zeigt den Gesamtgehalt gelöster Feststoffe (hauptsächlich Zucker) in einem Getränk an, ausgedrückt als Gewichtsprozent.",
          nl: "Brix meting geeft het totale opgeloste stoffen gehalte (voornamelijk suikers) aan in een drank, uitgedrukt als gewichtspercentage."
        }
      },
      {
        question: {
          en: "What is the main advantage of using ceramic filtration in beverage processing?",
          es: "¿Cuál es la principal ventaja de usar filtración cerámica en el procesamiento de bebidas?",
          de: "Was ist der Hauptvorteil der Verwendung keramischer Filtration in der Getränkeverarbeitung?",
          nl: "Wat is het belangrijkste voordeel van het gebruik van keramische filtratie bij drankenverwerking?"
        },
        options: [
          { en: "Lower cost", es: "Menor costo", de: "Niedrigere Kosten", nl: "Lagere kosten" },
          { en: "Consistent pore size and reusability", es: "Tamaño de poro consistente y reutilización", de: "Konsistente Porengröße und Wiederverwendbarkeit", nl: "Consistente poriëngrootte en herbruikbaarheid" },
          { en: "Faster filtration speed", es: "Velocidad de filtración más rápida", de: "Schnellere Filtrationsgeschwindigkeit", nl: "Snellere filtratiesnelheid" },
          { en: "Better flavor enhancement", es: "Mejor realce del sabor", de: "Bessere Geschmacksverbesserung", nl: "Betere smaakverbetering" }
        ],
        correct: 1,
        explanation: {
          en: "Ceramic filters offer precise, consistent pore sizes for reliable filtration and can be cleaned and reused multiple times, making them cost-effective long-term.",
          es: "Los filtros cerámicos ofrecen tamaños de poro precisos y consistentes para filtración confiable y pueden limpiarse y reutilizarse múltiples veces, haciéndolos rentables a largo plazo.",
          de: "Keramikfilter bieten präzise, konsistente Porengrößen für zuverlässige Filtration und können mehrfach gereinigt und wiederverwendet werden, was sie langfristig kosteneffektiv macht.",
          nl: "Keramische filters bieden precieze, consistente poriëngroottes voor betrouwbare filtratie en kunnen meerdere keren gereinigd en hergebruikt worden, waardoor ze op lange termijn kosteneffectief zijn."
        }
      },
      {
        question: {
          en: "Which factor most influences the rate of CO2 loss from an opened beverage container?",
          es: "¿Qué factor influye más en la tasa de pérdida de CO2 de un contenedor de bebida abierto?",
          de: "Welcher Faktor beeinflusst die CO2-Verlustrate aus einem geöffneten Getränkebehälter am meisten?",
          nl: "Welke factor beïnvloedt het meest de snelheid van CO2-verlies uit een geopende drankencontainer?"
        },
        options: [
          { en: "Container material", es: "Material del contenedor", de: "Behältermaterial", nl: "Containermateriaal" },
          { en: "Temperature", es: "Temperatura", de: "Temperatur", nl: "Temperatuur" },
          { en: "Brand of beverage", es: "Marca de la bebida", de: "Getränkemarke", nl: "Merk van de drank" },
          { en: "Color of the liquid", es: "Color del líquido", de: "Farbe der Flüssigkeit", nl: "Kleur van de vloeistof" }
        ],
        correct: 1,
        explanation: {
          en: "Temperature is the primary factor affecting CO2 loss rate - higher temperatures increase molecular motion and reduce CO2 solubility, accelerating gas escape.",
          es: "La temperatura es el factor principal que afecta la tasa de pérdida de CO2 - temperaturas más altas aumentan el movimiento molecular y reducen la solubilidad del CO2, acelerando el escape del gas.",
          de: "Temperatur ist der Hauptfaktor, der die CO2-Verlustrate beeinflusst - höhere Temperaturen erhöhen die Molekularbewegung und reduzieren die CO2-Löslichkeit, was das Entweichen des Gases beschleunigt.",
          nl: "Temperatuur is de primaire factor die de CO2-verliessnelheid beïnvloedt - hogere temperaturen verhogen moleculaire beweging en verminderen CO2-oplosbaarheid, waardoor gasontsnapping versnelt."
        }
      },
      {
        question: {
          en: "What is 'supercritical CO₂ extraction' used for in soft drink production?",
          es: "¿Para qué se utiliza la 'extracción con CO₂ supercrítico' en la producción de refrescos?",
          de: "Wofür wird 'superkritische CO₂-Extraktion' in der Erfrischungsgetränkeproduktion verwendet?",
          nl: "Waarvoor wordt 'superkritische CO₂-extractie' gebruikt in frisdrankenproductie?"
        },
        options: [
          { en: "Extracting essential oils/flavors without heat degradation or solvent residues", es: "Extraer aceites esenciales/sabores sin degradación por calor o residuos de solvente", de: "Extraktion ätherischer Öle/Aromen ohne Hitzeschädigung oder Lösungsmittelrückstände", nl: "Extractie van essentiële oliën/smaken zonder hittedegradatie of oplosmiddelresiduen" },
          { en: "Only carbonating beverages", es: "Solo carbonatar bebidas", de: "Nur Getränke karbonisieren", nl: "Alleen dranken carbonateren" },
          { en: "Measuring pH levels", es: "Medir niveles de pH", de: "pH-Werte messen", nl: "pH-niveaus meten" },
          { en: "Cleaning equipment", es: "Limpiar equipos", de: "Geräte reinigen", nl: "Apparatuur reinigen" }
        ],
        correct: 0,
        explanation: {
          en: "Supercritical CO₂ (above 31.1°C and 73.8 bar) acts as both gas and liquid, dissolving non-polar compounds like essential oils, terpenes, and flavor molecules. It extracts pure flavor compounds from botanicals (citrus peels, spices, herbs) without thermal degradation, oxidation, or solvent contamination. After extraction, reducing pressure causes CO₂ to evaporate completely, leaving no residue. Superior to steam distillation (heat damage) or organic solvents (residues, safety concerns). Yields high-purity natural flavors for premium beverages.",
          es: "CO₂ supercrítico (arriba 31.1°C y 73.8 bar) actúa como gas y líquido, disolviendo compuestos no polares como aceites esenciales, terpenos y moléculas de sabor. Extrae compuestos de sabor puros de botánicos (cáscaras cítricas, especias, hierbas) sin degradación térmica, oxidación o contaminación por solvente. Después de extracción, reducir presión causa evaporación completa de CO₂, sin dejar residuo. Superior a destilación vapor (daño por calor) o solventes orgánicos (residuos, preocupaciones seguridad). Produce sabores naturales alta pureza para bebidas premium.",
          de: "Superkritisches CO₂ (über 31.1°C und 73.8 bar) wirkt als Gas und Flüssigkeit, löst unpolare Verbindungen wie ätherische Öle, Terpene und Aromamoleküle. Extrahiert reine Aromaverbindungen aus Botanicals (Zitrusschalen, Gewürze, Kräuter) ohne thermische Degradation, Oxidation oder Lösungsmittelkontamination. Nach Extraktion verursacht Druckreduzierung vollständige CO₂-Verdampfung ohne Rückstand. Überlegen gegenüber Dampfdestillation (Hitzeschaden) oder organischen Lösungsmitteln (Rückstände, Sicherheitsbedenken). Liefert hochreine natürliche Aromen für Premium-Getränke.",
          nl: "Superkritisch CO₂ (boven 31.1°C en 73.8 bar) werkt als gas en vloeistof, lost niet-polaire verbindingen op zoals essentiële oliën, terpenen en smaakmoleculen. Extraheert zuivere smaakverbindingen uit botanicals (citrusschillen, kruiden, kruiden) zonder thermische degradatie, oxidatie of oplosmiddelverontreiniging. Na extractie veroorzaakt drukverlaging volledige CO₂-verdamping zonder residu. Superieur aan stoomdestillatie (hitteschade) of organische oplosmiddelen (residuen, veiligheidszorgen). Levert hoogzuivere natuurlijke smaken voor premium dranken."
        }
      },
      {
        question: {
          en: "What is 'membrane contactors' technology for beverage carbonation?",
          es: "¿Qué es la tecnología de 'contactores de membrana' para carbonatación de bebidas?",
          de: "Was ist 'Membrankontaktoren'-Technologie für Getränkekarbonisierung?",
          nl: "Wat is 'membraancontactors'-technologie voor drankcarbonatie?"
        },
        options: [
          { en: "Hollow fiber membranes allowing precise CO₂ transfer without bubble formation or foaming", es: "Membranas de fibra hueca permitiendo transferencia precisa CO₂ sin formación burbujas o espuma", de: "Hohlfasermembranen ermöglichen präzise CO₂-Transfer ohne Blasenbildung oder Schaumbildung", nl: "Holle vezelmembranen die precieze CO₂-overdracht mogelijk maken zonder belvorming of schuimen" },
          { en: "Only measures carbonation levels", es: "Solo mide niveles carbonatación", de: "Misst nur Karbonisierungsniveaus", nl: "Meet alleen carbonatieniveaus" },
          { en: "Cleans bottles before filling", es: "Limpia botellas antes llenar", de: "Reinigt Flaschen vor dem Befüllen", nl: "Reinigt flessen voor vullen" },
          { en: "Removes sugar from beverages", es: "Elimina azúcar de bebidas", de: "Entfernt Zucker aus Getränken", nl: "Verwijdert suiker uit dranken" }
        ],
        correct: 0,
        explanation: {
          en: "Membrane contactors use hydrophobic hollow fiber membranes (pore size 0.03-0.2 μm) creating gas-liquid interface without direct mixing. CO₂ flows through fiber lumen while beverage flows outside. Gas diffuses through membrane pores into liquid driven by concentration gradient. Advantages: precise CO₂ control independent of pressure fluctuations, no bubble formation (prevents nucleation sites/gushing), no mechanical agitation (protects flavor volatiles), compact design, 30-50% more efficient than traditional carbonators. Used in premium/sensitive beverages requiring gentle treatment.",
          es: "Contactores membrana usan membranas fibra hueca hidrofóbicas (tamaño poro 0.03-0.2 μm) creando interfaz gas-líquido sin mezcla directa. CO₂ fluye a través lumen fibra mientras bebida fluye afuera. Gas se difunde a través poros membrana en líquido impulsado por gradiente concentración. Ventajas: control preciso CO₂ independiente fluctuaciones presión, sin formación burbujas (previene sitios nucleación/gushing), sin agitación mecánica (protege volátiles sabor), diseño compacto, 30-50% más eficiente que carbonatadores tradicionales. Usado en bebidas premium/sensibles requiriendo tratamiento suave.",
          de: "Membrankontaktoren verwenden hydrophobe Hohlfasermembranen (Porengröße 0.03-0.2 μm), die Gas-Flüssigkeits-Grenzfläche ohne direkte Mischung schaffen. CO₂ fließt durch Faserlumen während Getränk außen fließt. Gas diffundiert durch Membranporen in Flüssigkeit getrieben durch Konzentrationsgradienten. Vorteile: präzise CO₂-Kontrolle unabhängig von Druckschwankungen, keine Blasenbildung (verhindert Nukleationsstellen/Gushing), keine mechanische Agitation (schützt Aromaflüchtige), kompaktes Design, 30-50% effizienter als traditionelle Karbonisierer. Verwendet in Premium/empfindlichen Getränken mit sanfter Behandlung.",
          nl: "Membraancontactors gebruiken hydrofobe holle vezelmembranen (poriegrootte 0.03-0.2 μm) die gas-vloeistofinterface creëren zonder directe menging. CO₂ stroomt door vezellumen terwijl drank buiten stroomt. Gas diffundeert door membraanporiën in vloeistof gedreven door concentratiegradiënt. Voordelen: precieze CO₂-controle onafhankelijk van drukschommelingen, geen belvorming (voorkomt nucleatiesites/gushing), geen mechanische agitatie (beschermt smaakvolatiele stoffen), compact ontwerp, 30-50% efficiënter dan traditionele carbonators. Gebruikt in premium/gevoelige dranken vereisend zachte behandeling."
        }
      },
      {
        question: {
          en: "What is 'crossflow microfiltration' and its advantage over dead-end filtration in soft drinks?",
          es: "¿Qué es 'microfiltración de flujo cruzado' y su ventaja sobre filtración de flujo muerto en refrescos?",
          de: "Was ist 'Crossflow-Mikrofiltration' und ihr Vorteil gegenüber Dead-End-Filtration bei Erfrischungsgetränken?",
          nl: "Wat is 'crossflow microfiltratie' en zijn voordeel ten opzichte van dead-end filtratie in frisdranken?"
        },
        options: [
          { en: "Tangential flow prevents membrane fouling, continuous operation without frequent cleaning, higher throughput", es: "Flujo tangencial previene ensuciamiento membrana, operación continua sin limpieza frecuente, mayor rendimiento", de: "Tangentialfluss verhindert Membranverschmutzung, kontinuierlicher Betrieb ohne häufige Reinigung, höherer Durchsatz", nl: "Tangentiële stroming voorkomt membraanvervuiling, continue werking zonder frequente reiniging, hogere doorvoer" },
          { en: "Only cheaper to operate", es: "Solo más barato operar", de: "Nur billiger zu betreiben", nl: "Alleen goedkoper te bedienen" },
          { en: "Only removes larger particles", es: "Solo elimina partículas más grandes", de: "Entfernt nur größere Partikel", nl: "Verwijdert alleen grotere deeltjes" },
          { en: "Only works with clear liquids", es: "Solo funciona con líquidos claros", de: "Funktioniert nur mit klaren Flüssigkeiten", nl: "Werkt alleen met heldere vloeistoffen" }
        ],
        correct: 0,
        explanation: {
          en: "In crossflow (tangential flow) filtration, feed flows parallel to membrane surface at high velocity (2-6 m/s), creating shear forces that continuously sweep away accumulated particles/fouling layer. Permeate passes through membrane while retentate continues flowing. Contrast with dead-end filtration where feed flows perpendicular to membrane, rapidly building cake layer requiring frequent backwashing. Crossflow advantages: 5-10x longer operation between cleanings, consistent flux rates, handles high-solid feeds, suitable for continuous production. Uses ceramic/polymeric membranes (0.1-10 μm) for cold sterilization, yeast/bacteria removal, clarification without heat damage. Critical for heat-sensitive natural beverages.",
          es: "En filtración flujo cruzado (flujo tangencial), alimentación fluye paralela a superficie membrana a alta velocidad (2-6 m/s), creando fuerzas de corte que barren continuamente partículas acumuladas/capa ensuciamiento. Permeado pasa a través membrana mientras retenido continúa fluyendo. Contraste con filtración flujo muerto donde alimentación fluye perpendicular a membrana, construyendo rápidamente capa torta requiriendo lavado frecuente. Ventajas flujo cruzado: 5-10x operación más larga entre limpiezas, tasas flujo consistentes, maneja alimentaciones alto contenido sólidos, adecuado para producción continua. Usa membranas cerámicas/poliméricas (0.1-10 μm) para esterilización fría, eliminación levadura/bacterias, clarificación sin daño calor. Crítico para bebidas naturales sensibles calor.",
          de: "Bei Crossflow-(Tangentialfluss-)Filtration fließt Zulauf parallel zur Membranoberfläche bei hoher Geschwindigkeit (2-6 m/s), erzeugt Scherkräfte, die kontinuierlich angesammelte Partikel/Verschmutzungsschicht wegfegen. Permeat passiert durch Membran während Retentat weiterfließt. Kontrast zu Dead-End-Filtration wo Zulauf senkrecht zur Membran fließt, schnell Kuchenschicht aufbaut die häufiges Rückspülen erfordert. Crossflow-Vorteile: 5-10x längerer Betrieb zwischen Reinigungen, konstante Flussraten, verarbeitet Hochfeststoff-Zuläufe, geeignet für kontinuierliche Produktion. Verwendet keramische/polymere Membranen (0.1-10 μm) für Kaltsterilisation, Hefe/Bakterienentfernung, Klärung ohne Hitzeschaden. Kritisch für hitzeempfindliche natürliche Getränke.",
          nl: "Bij crossflow (tangentiële stroming) filtratie stroomt voeding parallel aan membraanoppervlak bij hoge snelheid (2-6 m/s), creëert schuifkrachten die voortdurend geaccumuleerde deeltjes/vervuilingslaag wegvegen. Permeaat passeert door membraan terwijl retentaat blijft stromen. Contrast met dead-end filtratie waar voeding loodrecht op membraan stroomt, snel koeklaag opbouwt vereisend frequent terugspoelen. Crossflow voordelen: 5-10x langere werking tussen reinigingen, consistente fluxsnelheden, verwerkt hoge-vaste-stof voedingen, geschikt voor continue productie. Gebruikt keramische/polymere membranen (0.1-10 μm) voor koude sterilisatie, gist/bacterieverwijdering, verheldering zonder hitteschade. Cruciaal voor hittegevoelige natuurlijke dranken."
        }
      },
      {
        question: {
          en: "What is 'non-thermal plasma' (cold plasma) treatment for beverage decontamination?",
          es: "¿Qué es tratamiento 'plasma no térmico' (plasma frío) para descontaminación bebidas?",
          de: "Was ist 'nicht-thermische Plasma'-(Kaltplasma-)Behandlung zur Getränke-Dekontamination?",
          nl: "Wat is 'niet-thermische plasma' (koud plasma) behandeling voor drankendecontaminatie?"
        },
        options: [
          { en: "Ionized gas generating reactive species (UV, ozone, radicals) destroying microbes without heat, preserving flavor/nutrients", es: "Gas ionizado generando especies reactivas (UV, ozono, radicales) destruyendo microbios sin calor, preservando sabor/nutrientes", de: "Ionisiertes Gas erzeugt reaktive Spezies (UV, Ozon, Radikale) zerstört Mikroben ohne Hitze, bewahrt Geschmack/Nährstoffe", nl: "Geïoniseerd gas genererend reactieve soorten (UV, ozon, radicalen) vernietigt microben zonder hitte, behoudt smaak/voedingsstoffen" }
        ],
        correct: 0,
        explanation: {
          en: "Cold atmospheric plasma (CAP) ionizes air/inert gas using electric fields (10-100 kV) at ambient temperature, creating 'fourth state of matter' with electrons, ions, UV photons, reactive oxygen species (ROS: O₃, H₂O₂, •OH), reactive nitrogen species (RNS: NO, NO₂). These species attack microbial cell membranes/DNA/proteins causing inactivation (3-5 log reduction in seconds). Benefits: no thermal damage (maintains vitamins, enzymes, flavor volatiles), no chemical residues, treats packaging surfaces (bottles/caps) and liquid surfaces simultaneously, energy-efficient. Emerging technology for cold-pressed juices, functional beverages where heat pasteurization destroys bioactive compounds. Current research focus: scaling to industrial throughput, penetration depth in liquids.",
          es: "Plasma atmosférico frío (CAP) ioniza aire/gas inerte usando campos eléctricos (10-100 kV) a temperatura ambiente, creando 'cuarto estado materia' con electrones, iones, fotones UV, especies reactivas oxígeno (ROS: O₃, H₂O₂, •OH), especies reactivas nitrógeno (RNS: NO, NO₂). Estas especies atacan membranas celulares/ADN/proteínas microbianas causando inactivación (reducción 3-5 log en segundos). Beneficios: sin daño térmico (mantiene vitaminas, enzimas, volátiles sabor), sin residuos químicos, trata superficies empaque (botellas/tapas) y superficies líquidas simultáneamente, eficiente energéticamente. Tecnología emergente para jugos prensados en frío, bebidas funcionales donde pasteurización calor destruye compuestos bioactivos. Enfoque investigación actual: escalamiento a rendimiento industrial, profundidad penetración en líquidos.",
          de: "Kaltatmosphärisches Plasma (CAP) ionisiert Luft/Inertgas mit elektrischen Feldern (10-100 kV) bei Umgebungstemperatur, schafft 'vierten Aggregatzustand' mit Elektronen, Ionen, UV-Photonen, reaktiven Sauerstoffspezies (ROS: O₃, H₂O₂, •OH), reaktiven Stickstoffspezies (RNS: NO, NO₂). Diese Spezies greifen mikrobielle Zellmembranen/DNA/Proteine an verursachen Inaktivierung (3-5 log Reduktion in Sekunden). Vorteile: kein thermischer Schaden (erhält Vitamine, Enzyme, Aromaflüchtige), keine chemischen Rückstände, behandelt Verpackungsoberflächen (Flaschen/Kappen) und Flüssigkeitsoberflächen gleichzeitig, energieeffizient. Aufkommende Technologie für kaltgepresste Säfte, funktionelle Getränke wo Hitzepasteurisierung bioaktive Verbindungen zerstört. Aktueller Forschungsfokus: Skalierung auf industriellen Durchsatz, Eindringtiefe in Flüssigkeiten.",
          nl: "Koud atmosferisch plasma (CAP) ioniseert lucht/inert gas met elektrische velden (10-100 kV) bij omgevingstemperatuur, creëert 'vierde materietoestand' met elektronen, ionen, UV-fotonen, reactieve zuurstofsoorten (ROS: O₃, H₂O₂, •OH), reactieve stikstofsoorten (RNS: NO, NO₂). Deze soorten vallen microbiële celmembranen/DNA/eiwitten aan veroorzakend inactivatie (3-5 log reductie in seconden). Voordelen: geen thermische schade (behoudt vitamines, enzymen, smaakvolatiele stoffen), geen chemische residuen, behandelt verpakkingsoppervlakken (flessen/doppen) en vloeistofoppervlakken simultaan, energie-efficiënt. Opkomende technologie voor koudgeperste sappen, functionele dranken waar hittepasteurisatie bioactieve verbindingen vernietigt. Huidig onderzoeksfocus: opschalen naar industriële doorvoer, penetratiediepte in vloeistoffen."
        }
      },
      {
        question: {
          en: "What is 'hydrodynamic cavitation' and its application in beverage processing?",
          es: "¿Qué es 'cavitación hidrodinámica' y su aplicación en procesamiento de bebidas?",
          de: "Was ist 'hydrodynamische Kavitation' und ihre Anwendung in der Getränkeverarbeitung?",
          nl: "Wat is 'hydrodynamische cavitatie' en zijn toepassing in drankenverwerking?"
        },
        options: [
          { en: "Generating microbubbles that implode creating localized high pressure/temperature zones for microbial inactivation and mixing", es: "Generar microburbujas que implosionan creando zonas localizadas alta presión/temperatura para inactivación microbiana y mezclado", de: "Erzeugen von Mikroblasen die implodieren und lokalisierte Hochdruck/Temperaturzonen für mikrobielle Inaktivierung und Mischung schaffen", nl: "Genereren van microbellen die imploderen creërend gelokaliseerde hoge druk/temperatuurzones voor microbiële inactivatie en menging" },
          { en: "Only removes air bubbles", es: "Solo elimina burbujas aire", de: "Entfernt nur Luftblasen", nl: "Verwijdert alleen luchtbellen" },
          { en: "Only measures liquid density", es: "Solo mide densidad líquido", de: "Misst nur Flüssigkeitsdichte", nl: "Meet alleen vloeistofdichtheid" },
          { en: "Only carbonates beverages", es: "Solo carbonata bebidas", de: "Karbonisiert nur Getränke", nl: "Carboneert alleen dranken" }
        ],
        correct: 0,
        explanation: {
          en: "Hydrodynamic cavitation forms vapor bubbles when liquid accelerates through venturi/orifice plates, dropping pressure below vapor pressure. Bubbles collapse downstream when pressure recovers, generating transient hotspots (5000K, 1000 atm, microseconds) with shockwaves and free radicals. Effects: 3-6 log microbial reduction (cell wall disruption), enhanced extraction (ruptures plant cells releasing compounds), improved emulsification (reduces droplet size), accelerated reactions. Advantages over ultrasonic cavitation: scalable to industrial flow rates (>10,000 L/hr), continuous operation, energy-efficient (0.1-0.5 kWh/m³). Applications: cold pasteurization (juice/dairy alternatives), flavor/color extraction, homogenization, degassing. Maintains thermolabile nutrients better than heat treatment.",
          es: "Cavitación hidrodinámica forma burbujas vapor cuando líquido acelera a través placas venturi/orificio, bajando presión debajo presión vapor. Burbujas colapsan aguas abajo cuando presión recupera, generando puntos calientes transitorios (5000K, 1000 atm, microsegundos) con ondas choque y radicales libres. Efectos: reducción microbiana 3-6 log (ruptura pared celular), extracción mejorada (rompe células plantas liberando compuestos), emulsificación mejorada (reduce tamaño gotas), reacciones aceleradas. Ventajas sobre cavitación ultrasónica: escalable a tasas flujo industriales (>10,000 L/hr), operación continua, eficiente energéticamente (0.1-0.5 kWh/m³). Aplicaciones: pasteurización fría (jugo/alternativas lácteas), extracción sabor/color, homogenización, desgasificación. Mantiene nutrientes termolábiles mejor que tratamiento calor.",
          de: "Hydrodynamische Kavitation bildet Dampfblasen wenn Flüssigkeit durch Venturi/Blenden beschleunigt, senkt Druck unter Dampfdruck. Blasen kollabieren stromabwärts wenn Druck sich erholt, erzeugen transiente Hotspots (5000K, 1000 atm, Mikrosekunden) mit Stoßwellen und freien Radikalen. Effekte: 3-6 log mikrobielle Reduktion (Zellwandruptur), verbesserte Extraktion (zerreißt Pflanzenzellen freisetzend Verbindungen), verbesserte Emulgierung (reduziert Tröpfchengröße), beschleunigte Reaktionen. Vorteile gegenüber Ultraschallkavitation: skalierbar auf industrielle Durchflussraten (>10.000 L/Std), kontinuierlicher Betrieb, energieeffizient (0.1-0.5 kWh/m³). Anwendungen: Kaltpasteurisierung (Saft/Milchalternativen), Geschmack/Farb-Extraktion, Homogenisierung, Entgasung. Erhält thermolabile Nährstoffe besser als Wärmebehandlung.",
          nl: "Hydrodynamische cavitatie vormt dampbellen wanneer vloeistof versnelt door venturi/orifice platen, drukverlaging onder dampdruk. Bellen storten in stroomafwaarts wanneer druk herstelt, genererend tijdelijke hotspots (5000K, 1000 atm, microseconden) met schokgolven en vrije radicalen. Effecten: 3-6 log microbiële reductie (celwandruptuur), verbeterde extractie (breekt plantencellen vrijmakend verbindingen), verbeterde emulgering (vermindert druppelgrootte), versnelde reacties. Voordelen boven ultrasone cavitatie: opschaalbaar naar industriële stroomsnelheden (>10.000 L/uur), continue werking, energie-efficiënt (0.1-0.5 kWh/m³). Toepassingen: koude pasteurisatie (sap/zuivelalternatieven), smaak/kleur extractie, homogenisatie, ontgassing. Behoudt thermolabiele voedingsstoffen beter dan hittebehandeling."
        }
      },
      {
        question: {
          en: "What is 'high pressure processing' (HPP) and why is it used for premium beverages?",
          es: "¿Qué es 'procesamiento alta presión' (HPP) y por qué se usa para bebidas premium?",
          de: "Was ist 'Hochdruckverarbeitung' (HPP) und warum wird es für Premium-Getränke verwendet?",
          nl: "Wat is 'hoge druk verwerking' (HPP) en waarom wordt het gebruikt voor premium dranken?"
        },
        options: [
          { en: "300-600 MPa pressure inactivates microbes by protein denaturation while preserving vitamins, color, flavor at cold temperature", es: "Presión 300-600 MPa inactiva microbios por desnaturalización proteína mientras preserva vitaminas, color, sabor a temperatura fría", de: "300-600 MPa Druck inaktiviert Mikroben durch Proteindenaturierung während Vitamine, Farbe, Geschmack bei kalter Temperatur erhalten bleiben", nl: "300-600 MPa druk inactiveert microben door eiwitdenaturatie terwijl vitamines, kleur, smaak bij koude temperatuur behouden blijven" },
          { en: "Only increases shelf life slightly", es: "Solo aumenta vida útil ligeramente", de: "Erhöht nur Haltbarkeit geringfügig", nl: "Verhoogt alleen houdbaarheid lichtjes" },
          { en: "Only removes color", es: "Solo elimina color", de: "Entfernt nur Farbe", nl: "Verwijdert alleen kleur" },
          { en: "Only carbonates drinks", es: "Solo carbonata bebidas", de: "Karbonisiert nur Getränke", nl: "Carboneert alleen dranken" }
        ],
        correct: 0,
        explanation: {
          en: "HPP (also called pascalization) subjects sealed bottles to isostatic pressure (300-600 MPa ≈ 3000-6000 atmospheres) for 1-5 minutes at ≤20°C using water as pressure medium. Pressure disrupts non-covalent bonds (hydrogen, ionic, hydrophobic) causing irreversible denaturation of microbial enzymes/membrane proteins, achieving 5-6 log reduction of vegetative bacteria/yeasts/molds/viruses without heat. Covalent bonds intact: vitamins, pigments (anthocyanins, carotenoids), flavor compounds, bioactive phytochemicals preserved. Results: 'fresh-like' quality, extended shelf life (30-120 days refrigerated), clean label (no preservatives). Premium cold-pressed juices, smoothies, functional beverages justify higher cost (~$0.05-0.15/unit). Limitations: requires pre-sealing (batch process), ineffective against bacterial spores, equipment cost ($500k-2M).",
          es: "HPP (también llamado pascalización) somete botellas selladas a presión isostática (300-600 MPa ≈ 3000-6000 atmósferas) por 1-5 minutos a ≤20°C usando agua como medio presión. Presión rompe enlaces no covalentes (hidrógeno, iónicos, hidrofóbicos) causando desnaturalización irreversible de enzimas microbianas/proteínas membrana, logrando reducción 5-6 log bacterias vegetativas/levaduras/mohos/virus sin calor. Enlaces covalentes intactos: vitaminas, pigmentos (antocianinas, carotenoides), compuestos sabor, fitoquímicos bioactivos preservados. Resultados: calidad 'tipo fresco', vida útil extendida (30-120 días refrigerado), etiqueta limpia (sin conservantes). Jugos premium prensados frío, batidos, bebidas funcionales justifican mayor costo (~$0.05-0.15/unidad). Limitaciones: requiere pre-sellado (proceso lote), ineficaz contra esporas bacterianas, costo equipo ($500k-2M).",
          de: "HPP (auch Pascalisierung genannt) unterwirft versiegelte Flaschen isostatischem Druck (300-600 MPa ≈ 3000-6000 Atmosphären) für 1-5 Minuten bei ≤20°C unter Verwendung von Wasser als Druckmedium. Druck stört nicht-kovalente Bindungen (Wasserstoff, ionisch, hydrophob) verursacht irreversible Denaturierung mikrobieller Enzyme/Membranproteine, erreicht 5-6 log Reduktion vegetativer Bakterien/Hefen/Schimmel/Viren ohne Hitze. Kovalente Bindungen intakt: Vitamine, Pigmente (Anthocyane, Carotinoide), Aromastoffe, bioaktive Phytochemikalien erhalten. Ergebnisse: 'frischähnliche' Qualität, verlängerte Haltbarkeit (30-120 Tage gekühlt), sauberes Etikett (keine Konservierungsstoffe). Premium-kaltgepresste Säfte, Smoothies, funktionelle Getränke rechtfertigen höhere Kosten (~$0.05-0.15/Einheit). Einschränkungen: erfordert Vorversiegelung (Batch-Prozess), unwirksam gegen Bakteriensporen, Gerätekosten ($500k-2M).",
          nl: "HPP (ook pascalisatie genoemd) onderwerpt verzegelde flessen aan isostatische druk (300-600 MPa ≈ 3000-6000 atmosferen) voor 1-5 minuten bij ≤20°C gebruikmakend van water als drukmedium. Druk verstoort niet-covalente bindingen (waterstof, ionisch, hydrofoob) veroorzakend onomkeerbare denaturatie van microbiële enzymen/membraaneiwitten, bereikend 5-6 log reductie van vegetatieve bacteriën/gisten/schimmels/virussen zonder hitte. Covalente bindingen intact: vitamines, pigmenten (anthocyanen, carotenoïden), smaakstoffen, bioactieve fytochemicaliën behouden. Resultaten: 'vers-achtige' kwaliteit, verlengde houdbaarheid (30-120 dagen gekoeld), schoon label (geen conserveermiddelen). Premium koudgeperste sappen, smoothies, functionele dranken rechtvaardigen hogere kosten (~$0.05-0.15/eenheid). Beperkingen: vereist vooraf verzegelen (batch proces), ineffectief tegen bacteriële sporen, apparatuurkosten ($500k-2M)."
        }
      },
      {
        question: {
          en: "What is 'pulsed electric field' (PEF) technology for beverage preservation?",
          es: "¿Qué es tecnología 'campo eléctrico pulsado' (PEF) para conservación bebidas?",
          de: "Was ist 'gepulste elektrische Felder' (PEF)-Technologie zur Getränkekonservierung?",
          nl: "Wat is 'gepulseerde elektrische veld' (PEF) technologie voor drankenconservering?"
        },
        options: [
          { en: "Short high-voltage pulses (20-80 kV/cm, microseconds) create pores in microbial membranes causing cell death without heating", es: "Pulsos cortos alto voltaje (20-80 kV/cm, microsegundos) crean poros en membranas microbianas causando muerte celular sin calentamiento", de: "Kurze Hochspannungsimpulse (20-80 kV/cm, Mikrosekunden) erzeugen Poren in mikrobiellen Membranen verursachen Zelltod ohne Erhitzung", nl: "Korte hoogspanningspulsen (20-80 kV/cm, microseconden) creëren poriën in microbiële membranen veroorzakend celdood zonder verhitting" },
          { en: "Only measures electrical conductivity", es: "Solo mide conductividad eléctrica", de: "Misst nur elektrische Leitfähigkeit", nl: "Meet alleen elektrische geleidbaarheid" },
          { en: "Only carbonates beverages", es: "Solo carbonata bebidas", de: "Karbonisiert nur Getränke", nl: "Carboneert alleen dranken" },
          { en: "Only removes particles", es: "Solo elimina partículas", de: "Entfernt nur Partikel", nl: "Verwijdert alleen deeltjes" }
        ],
        correct: 0,
        explanation: {
          en: "PEF applies short (1-100 μs) high-intensity electric pulses (20-80 kV/cm) to liquid flowing between electrodes. Electric field induces transmembrane potential exceeding critical threshold (~1V), causing 'electroporation'—formation of nanopores in cell membranes. Pores allow leakage of cytoplasm, ions, ATP; membrane cannot reseal causing cell death. Achieves 4-6 log microbial reduction with <10°C temperature rise (≤50°C product temp). Benefits: preserves heat-sensitive nutrients (vitamin C, enzymes, antioxidants), maintains fresh flavor/color, energy-efficient (~1 kWh/m³), continuous flow process. Applications: fruit juices, plant-based milks, liquid eggs. Limitations: less effective on spores, conductivity-dependent (ionic beverages reduce efficiency), requires preheating to 50-60°C for optimal effect, capital cost. Commercial systems: 5000-10,000 L/hr. Often combined with mild heat.",
          es: "PEF aplica pulsos eléctricos cortos (1-100 μs) alta intensidad (20-80 kV/cm) a líquido fluyendo entre electrodos. Campo eléctrico induce potencial transmembrana excediendo umbral crítico (~1V), causando 'electroporación'—formación nanoporos en membranas celulares. Poros permiten fuga citoplasma, iones, ATP; membrana no puede resellar causando muerte celular. Logra reducción microbiana 4-6 log con <10°C aumento temperatura (≤50°C temp producto). Beneficios: preserva nutrientes sensibles calor (vitamina C, enzimas, antioxidantes), mantiene sabor/color fresco, eficiente energéticamente (~1 kWh/m³), proceso flujo continuo. Aplicaciones: jugos frutas, leches vegetales, huevos líquidos. Limitaciones: menos efectivo en esporas, dependiente conductividad (bebidas iónicas reducen eficiencia), requiere precalentamiento 50-60°C para efecto óptimo, costo capital. Sistemas comerciales: 5000-10,000 L/hr. A menudo combinado con calor suave.",
          de: "PEF wendet kurze (1-100 μs) hochintensive elektrische Impulse (20-80 kV/cm) auf Flüssigkeit an die zwischen Elektroden fließt. Elektrisches Feld induziert Transmembranpotential überschreitend kritischen Schwellenwert (~1V), verursacht 'Elektroporation'—Bildung von Nanoporen in Zellmembranen. Poren ermöglichen Leckage von Zytoplasma, Ionen, ATP; Membran kann nicht wieder versiegeln verursacht Zelltod. Erreicht 4-6 log mikrobielle Reduktion mit <10°C Temperaturanstieg (≤50°C Produkttemp). Vorteile: erhält hitzeempfindliche Nährstoffe (Vitamin C, Enzyme, Antioxidantien), bewahrt frischen Geschmack/Farbe, energieeffizient (~1 kWh/m³), kontinuierlicher Flussprozess. Anwendungen: Fruchtsäfte, pflanzliche Milch, Flüssigeier. Einschränkungen: weniger effektiv bei Sporen, leitfähigkeitsabhängig (ionische Getränke reduzieren Effizienz), erfordert Vorheizen auf 50-60°C für optimalen Effekt, Kapitalkosten. Kommerzielle Systeme: 5000-10.000 L/Std. Oft kombiniert mit milder Hitze.",
          nl: "PEF past korte (1-100 μs) hoog-intensieve elektrische pulsen (20-80 kV/cm) toe op vloeistof stromend tussen elektroden. Elektrisch veld induceert transmembraan potentiaal overschrijdend kritische drempel (~1V), veroorzakend 'elektroporatie'—vorming van nanoporiën in celmembranen. Poriën staan lekkage van cytoplasma, ionen, ATP toe; membraan kan niet herverzegelen veroorzakend celdood. Bereikt 4-6 log microbiële reductie met <10°C temperatuurstijging (≤50°C producttemp). Voordelen: behoudt hittegevoelige voedingsstoffen (vitamine C, enzymen, antioxidanten), behoudt verse smaak/kleur, energie-efficiënt (~1 kWh/m³), continue stroomproces. Toepassingen: vruchtensappen, plantaardige melk, vloeibare eieren. Beperkingen: minder effectief bij sporen, geleidbaarheidafhankelijk (ionische dranken verminderen efficiëntie), vereist voorverwarming tot 50-60°C voor optimaal effect, kapitaalkosten. Commerciële systemen: 5000-10.000 L/uur. Vaak gecombineerd met milde warmte."
        }
      },
      {
        question: {
          en: "What is 'natural deep eutectic solvents' (NADES) and their emerging role in flavor extraction?",
          es: "¿Qué son 'disolventes eutécticos naturales profundos' (NADES) y su papel emergente en extracción sabores?",
          de: "Was sind 'natürliche tiefeutektische Lösungsmittel' (NADES) und ihre aufkommende Rolle bei der Geschmacksextraktion?",
          nl: "Wat zijn 'natuurlijke diepe eutectische oplosmiddelen' (NADES) en hun opkomende rol in smaakextractie?"
        },
        options: [
          { en: "Bio-based solvent mixtures (sugars, acids, amino acids) with unique solvation power for natural compound extraction without toxic solvents", es: "Mezclas disolventes bio-basados (azúcares, ácidos, aminoácidos) con poder solvatación único para extracción compuestos naturales sin disolventes tóxicos", de: "Biobasierte Lösungsmittelgemische (Zucker, Säuren, Aminosäuren) mit einzigartiger Lösungskraft für natürliche Verbindungsextraktion ohne toxische Lösungsmittel", nl: "Bio-gebaseerde oplosmiddelmengsels (suikers, zuren, aminozuren) met uniek oplossend vermogen voor natuurlijke verbindingsextractie zonder toxische oplosmiddelen" },
          { en: "Only synthetic chemicals", es: "Solo químicos sintéticos", de: "Nur synthetische Chemikalien", nl: "Alleen synthetische chemicaliën" },
          { en: "Only petroleum derivatives", es: "Solo derivados petróleo", de: "Nur Erdölderivate", nl: "Alleen aardolieproducten" },
          { en: "Only water-based solutions", es: "Solo soluciones base agua", de: "Nur wasserbasierte Lösungen", nl: "Alleen watergebaseerde oplossingen" }
        ],
        correct: 0,
        explanation: {
          en: "NADES are mixtures of natural hydrogen-bond donor-acceptor pairs (e.g., choline chloride + citric acid, betaine + glucose, proline + malic acid) forming liquid at room temperature with melting point far below individual components (eutectic behavior). Properties: high polarity, hydrogen-bonding capacity, tunable selectivity, non-volatile, biodegradable, non-toxic, cheap. Extract diverse phytochemicals (polyphenols, flavonoids, terpenoids, alkaloids) from plant materials with yields/purity often exceeding conventional solvents (ethanol, hexane, chloroform). Mechanism: NADES disrupt plant cell matrices and solubilize compounds via hydrogen bonding. Applications in beverages: extracting natural colors (anthocyanins from berries), flavors (vanillin, cinnamaldehyde), bioactives (curcumin, resveratrol) for functional drinks. After extraction, NADES removed by dilution/precipitation or retained (generally recognized as safe). Emerging 'green chemistry' approach replacing hazardous organic solvents, supporting clean label and sustainability trends.",
          es: "NADES son mezclas de pares naturales donador-aceptor enlace hidrógeno (ej., cloruro colina + ácido cítrico, betaína + glucosa, prolina + ácido málico) formando líquido a temperatura ambiente con punto fusión muy debajo componentes individuales (comportamiento eutéctico). Propiedades: alta polaridad, capacidad enlace hidrógeno, selectividad ajustable, no volátil, biodegradable, no tóxico, económico. Extraen diversos fitoquímicos (polifenoles, flavonoides, terpenoides, alcaloides) de materiales vegetales con rendimientos/pureza a menudo excediendo disolventes convencionales (etanol, hexano, cloroformo). Mecanismo: NADES rompen matrices celulares plantas y solubilizan compuestos vía enlace hidrógeno. Aplicaciones en bebidas: extraer colores naturales (antocianinas de bayas), sabores (vainillina, cinamaldehído), bioactivos (curcumina, resveratrol) para bebidas funcionales. Después extracción, NADES eliminados por dilución/precipitación o retenidos (generalmente reconocidos como seguros). Enfoque 'química verde' emergente reemplazando disolventes orgánicos peligrosos, apoyando etiqueta limpia y tendencias sostenibilidad.",
          de: "NADES sind Gemische natürlicher Wasserstoffbrücken-Donor-Akzeptor-Paare (z.B. Cholinchlorid + Zitronensäure, Betain + Glucose, Prolin + Apfelsäure) bilden Flüssigkeit bei Raumtemperatur mit Schmelzpunkt weit unter einzelnen Komponenten (eutektisches Verhalten). Eigenschaften: hohe Polarität, Wasserstoffbrückenbindungskapazität, abstimmbare Selektivität, nicht-flüchtig, biologisch abbaubar, ungiftig, billig. Extrahieren diverse Phytochemikalien (Polyphenole, Flavonoide, Terpenoide, Alkaloide) aus Pflanzenmaterialien mit Ausbeuten/Reinheit oft übertreffen konventionelle Lösungsmittel (Ethanol, Hexan, Chloroform). Mechanismus: NADES stören Pflanzenzellmatrizen und lösen Verbindungen über Wasserstoffbrückenbindung. Anwendungen in Getränken: Extraktion natürlicher Farben (Anthocyane aus Beeren), Aromen (Vanillin, Zimtaldehyd), Bioaktive (Curcumin, Resveratrol) für funktionelle Getränke. Nach Extraktion NADES entfernt durch Verdünnung/Ausfällung oder behalten (allgemein als sicher anerkannt). Aufkommender 'grüne Chemie'-Ansatz ersetzt gefährliche organische Lösungsmittel, unterstützt sauberes Etikett und Nachhaltigkeitstrends.",
          nl: "NADES zijn mengsels van natuurlijke waterstofbrug donor-acceptor paren (bijv. choline chloride + citroenzuur, betaïne + glucose, proline + appelzuur) vormend vloeistof bij kamertemperatuur met smeltpunt ver onder individuele componenten (eutectisch gedrag). Eigenschappen: hoge polariteit, waterstofbrug-bindingscapaciteit, afstembare selectiviteit, niet-vluchtig, biologisch afbreekbaar, niet-toxisch, goedkoop. Extraheren diverse fytochemicaliën (polyfenolen, flavonoïden, terpenoïden, alkaloïden) uit plantmaterialen met opbrengsten/zuiverheid vaak overtreffen conventionele oplosmiddelen (ethanol, hexaan, chloroform). Mechanisme: NADES verstoren plantcelmatrices en solubiliseren verbindingen via waterstofbinding. Toepassingen in dranken: extractie natuurlijke kleuren (anthocyanen uit bessen), smaken (vanilline, kaneel aldehyde), bioactives (curcumine, resveratrol) voor functionele dranken. Na extractie NADES verwijderd door verdunning/precipitatie of behouden (algemeen erkend als veilig). Opkomende 'groene chemie' benadering vervangt gevaarlijke organische oplosmiddelen, ondersteunt schoon label en duurzaamheidstrends."
        }
      },
      {
        question: {
          en: "What is 'blockchain traceability' and its application in premium soft drink supply chains?",
          es: "¿Qué es 'trazabilidad blockchain' y su aplicación en cadenas suministro refrescos premium?",
          de: "Was ist 'Blockchain-Rückverfolgbarkeit' und ihre Anwendung in Premium-Erfrischungsgetränke-Lieferketten?",
          nl: "Wat is 'blockchain traceerbaarheid' en zijn toepassing in premium frisdrank toeleveringsketens?"
        },
        options: [
          { en: "Immutable distributed ledger recording ingredient origin, processing steps, quality data enabling transparency and authenticity verification", es: "Libro contable distribuido inmutable registrando origen ingredientes, pasos procesamiento, datos calidad permitiendo transparencia y verificación autenticidad", de: "Unveränderliches verteiltes Hauptbuch aufzeichnend Zutatenherkünft, Verarbeitungsschritte, Qualitätsdaten ermöglicht Transparenz und Authentizitätsprüfung", nl: "Onveranderlijk gedistribueerd grootboek registrerend ingrediënt oorsprong, verwerkingsstappen, kwaliteitsgegevens mogelijk makend transparantie en authenticiteitsverificatie" },
          { en: "Only tracks shipping containers", es: "Solo rastrea contenedores envío", de: "Verfolgt nur Versandbehälter", nl: "Volgt alleen verzendcontainers" },
          { en: "Only cryptocurrency payment", es: "Solo pago criptomoneda", de: "Nur Kryptowährungszahlung", nl: "Alleen cryptocurrency betaling" },
          { en: "Only inventory counting", es: "Solo conteo inventario", de: "Nur Inventarzählung", nl: "Alleen voorraadtelling" }
        ],
        correct: 0,
        explanation: {
          en: "Blockchain creates tamper-proof digital record of beverage journey from ingredient sourcing through production to consumer. Each supply chain participant (farmers, processors, bottlers, distributors, retailers) adds timestamped, cryptographically-signed transaction to shared ledger recording: raw material origin (farm GPS coordinates, harvest date), quality certifications (organic, fair-trade), processing parameters (pasteurization temps, CO₂ levels, Brix), laboratory test results (microbial counts, pesticide residues), logistics data (temperature during transport). Smart contracts automate compliance verification. Benefits: provenance verification (combat counterfeiting, adulteration), rapid recall traceability (identify affected batch within seconds vs. days), quality assurance documentation, consumer transparency (QR code access to full history), sustainability credentials. Premium brands leverage blockchain for differentiation, especially craft/artisan beverages, organic, fair-trade certified products where authenticity justifies higher price. Example implementations: IBM Food Trust, VeChain, OriginTrail in beverage industry.",
          es: "Blockchain crea registro digital a prueba manipulación de viaje bebida desde abastecimiento ingredientes a través producción hasta consumidor. Cada participante cadena suministro (agricultores, procesadores, embotelladores, distribuidores, minoristas) añade transacción marcada tiempo, firmada criptográficamente a libro contable compartido registrando: origen materia prima (coordenadas GPS granja, fecha cosecha), certificaciones calidad (orgánico, comercio justo), parámetros procesamiento (temperaturas pasteurización, niveles CO₂, Brix), resultados pruebas laboratorio (recuentos microbianos, residuos pesticidas), datos logística (temperatura durante transporte). Contratos inteligentes automatizan verificación cumplimiento. Beneficios: verificación procedencia (combatir falsificación, adulteración), trazabilidad rápida retiro (identificar lote afectado en segundos vs. días), documentación aseguramiento calidad, transparencia consumidor (acceso código QR a historial completo), credenciales sostenibilidad. Marcas premium aprovechan blockchain para diferenciación, especialmente bebidas artesanales/artesanas, orgánicas, productos certificados comercio justo donde autenticidad justifica mayor precio. Implementaciones ejemplo: IBM Food Trust, VeChain, OriginTrail en industria bebidas.",
          de: "Blockchain erstellt manipulationssicheren digitalen Datensatz der Getränkereise von Zutatenbeschaffung durch Produktion zum Verbraucher. Jeder Lieferkettenteilnehmer (Bauern, Verarbeiter, Abfüller, Händler, Einzelhändler) fügt zeitgestempelte, kryptografisch signierte Transaktion zu gemeinsamen Hauptbuch hinzu aufzeichnend: Rohstoffherkunft (Farm-GPS-Koordinaten, Erntedatum), Qualitätszertifizierungen (Bio, Fairtrade), Verarbeitungsparameter (Pasteurisierungstemps, CO₂-Niveaus, Brix), Labortestergebnisse (mikrobielle Zählungen, Pestizidrückstände), Logistikdaten (Temperatur während Transport). Smart Contracts automatisieren Compliance-Verifizierung. Vorteile: Herkunftsverifizierung (bekämpfen Fälschung, Verfälschung), schnelle Rückruf-Rückverfolgbarkeit (betroffene Charge in Sekunden vs. Tagen identifizieren), Qualitätssicherungsdokumentation, Verbrauchertransparenz (QR-Code-Zugang zu vollständiger Geschichte), Nachhaltigkeitsnachweise. Premium-Marken nutzen Blockchain zur Differenzierung, besonders Craft/handwerkliche Getränke, Bio, Fairtrade-zertifizierte Produkte wo Authentizität höheren Preis rechtfertigt. Beispiel-Implementierungen: IBM Food Trust, VeChain, OriginTrail in Getränkeindustrie.",
          nl: "Blockchain creëert fraudebestendig digitaal record van drankreis van ingrediënt sourcing door productie naar consument. Elke toeleveringsketen deelnemer (boeren, verwerkers, bottelers, distributeurs, retailers) voegt tijdgestempelde, cryptografisch ondertekende transactie toe aan gedeeld grootboek registrerend: grondstof oorsprong (boerderij GPS coördinaten, oogstdatum), kwaliteitscertificeringen (biologisch, fair-trade), verwerkingsparameters (pasteurisatie temps, CO₂ niveaus, Brix), laboratorium testresultaten (microbiële tellingen, pesticide residuen), logistiek gegevens (temperatuur tijdens transport). Smart contracts automatiseren compliance verificatie. Voordelen: herkomstverificatie (bestrijden namaak, vervalsing), snelle terugroep traceerbaarheid (identificeer aangetaste batch binnen seconden vs. dagen), kwaliteitsborging documentatie, consument transparantie (QR code toegang tot volledige geschiedenis), duurzaamheid credentials. Premium merken benutten blockchain voor differentiatie, vooral ambachtelijke/artisan dranken, biologisch, fair-trade gecertificeerde producten waar authenticiteit hogere prijs rechtvaardigt. Voorbeeld implementaties: IBM Food Trust, VeChain, OriginTrail in drankenindustrie."
        }
      },
      {
        question: {
          en: "What is 'predictive microbiology modeling' using machine learning for soft drink safety?",
          es: "¿Qué es 'modelado microbiología predictiva' usando aprendizaje automático para seguridad refrescos?",
          de: "Was ist 'prädiktive Mikrobiologie-Modellierung' unter Verwendung maschinellen Lernens für Erfrischungsgetränkesicherheit?",
          nl: "Wat is 'voorspellende microbiologie modellering' gebruikmakend van machine learning voor frisdrank veiligheid?"
        },
        options: [
          { en: "AI algorithms predicting microbial growth/inactivation rates based on formulation, processing, storage conditions optimizing safety protocols", es: "Algoritmos IA prediciendo tasas crecimiento/inactivación microbiana basadas en formulación, procesamiento, condiciones almacenamiento optimizando protocolos seguridad", de: "KI-Algorithmen vorhersagen mikrobielle Wachstums-/Inaktivierungsraten basierend auf Formulierung, Verarbeitung, Lagerbedingungen optimieren Sicherheitsprotokolle", nl: "AI algoritmen voorspellend microbiële groei/inactivatiesnelheden gebaseerd op formulering, verwerking, opslagcondities optimaliseren veiligheidsprotocollen" },
          { en: "Only counts bacteria manually", es: "Solo cuenta bacterias manualmente", de: "Zählt nur Bakterien manuell", nl: "Telt alleen bacteriën handmatig" },
          { en: "Only measures pH", es: "Solo mide pH", de: "Misst nur pH", nl: "Meet alleen pH" },
          { en: "Only checks expiration dates", es: "Solo verifica fechas vencimiento", de: "Überprüft nur Verfallsdaten", nl: "Controleert alleen vervaldatums" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional predictive microbiology uses mathematical models (Gompertz, Baranyi) relating microbial behavior to environmental factors (pH, aw, temperature, preservatives). Modern approach: machine learning (neural networks, random forests, support vector machines) trained on extensive datasets (ComBase, USDA databases, company proprietary data) capturing complex interactions. Input variables: beverage formulation (pH, Brix, organic acids, preservatives, CO₂), processing parameters (pasteurization time/temp, HPP pressure, PEF intensity), packaging (O₂ permeability), storage (temperature, duration, light exposure), microbial strain characteristics. Models predict: lag phase duration, growth rate, maximum population density, inactivation kinetics, probability of spoilage organisms (Alicyclobacillus, yeasts, LAB) or pathogens (E. coli, Salmonella) growth. Applications: formulation optimization (minimum preservative levels maintaining safety/quality), HACCP validation (identify critical control points), dynamic shelf life prediction (real-time sensor data adjusting forecasts), accelerated testing protocols. Benefits: reduced physical testing (cost/time savings), improved safety margins, enables innovation (novel ingredients/processes with predicted outcomes). Regulatory acceptance growing (EFSA, FDA recognize validated models). Combines domain expertise with data-driven insights.",
          es: "Microbiología predictiva tradicional usa modelos matemáticos (Gompertz, Baranyi) relacionando comportamiento microbiano con factores ambientales (pH, aw, temperatura, conservantes). Enfoque moderno: aprendizaje automático (redes neuronales, bosques aleatorios, máquinas vectores soporte) entrenados en conjuntos datos extensos (ComBase, bases datos USDA, datos propietarios empresa) capturando interacciones complejas. Variables entrada: formulación bebida (pH, Brix, ácidos orgánicos, conservantes, CO₂), parámetros procesamiento (tiempo/temp pasteurización, presión HPP, intensidad PEF), empaque (permeabilidad O₂), almacenamiento (temperatura, duración, exposición luz), características cepa microbiana. Modelos predicen: duración fase latencia, tasa crecimiento, densidad población máxima, cinéticas inactivación, probabilidad crecimiento organismos deterioro (Alicyclobacillus, levaduras, LAB) o patógenos (E. coli, Salmonella). Aplicaciones: optimización formulación (niveles mínimos conservante manteniendo seguridad/calidad), validación HACCP (identificar puntos control críticos), predicción dinámica vida útil (datos sensor tiempo real ajustando pronósticos), protocolos prueba acelerada. Beneficios: pruebas físicas reducidas (ahorro costo/tiempo), márgenes seguridad mejorados, permite innovación (ingredientes/procesos novedosos con resultados predichos). Aceptación regulatoria creciente (EFSA, FDA reconocen modelos validados). Combina experiencia dominio con insights basados datos.",
          de: "Traditionelle prädiktive Mikrobiologie verwendet mathematische Modelle (Gompertz, Baranyi) die mikrobielles Verhalten mit Umweltfaktoren (pH, aw, Temperatur, Konservierungsstoffe) in Beziehung setzen. Moderner Ansatz: maschinelles Lernen (neuronale Netzwerke, Random Forests, Support Vector Machines) trainiert auf umfangreichen Datensätzen (ComBase, USDA-Datenbanken, firmeneigene Daten) erfassen komplexe Interaktionen. Eingabevariablen: Getränkeformulierung (pH, Brix, organische Säuren, Konservierungsstoffe, CO₂), Verarbeitungsparameter (Pasteurisierungszeit/Temp, HPP-Druck, PEF-Intensität), Verpackung (O₂-Permeabilität), Lagerung (Temperatur, Dauer, Lichtexposition), mikrobielle Stammcharakteristika. Modelle sagen voraus: Lag-Phasen-Dauer, Wachstumsrate, maximale Populationsdichte, Inaktivierungskinetik, Wahrscheinlichkeit Verderbnisorganismen (Alicyclobacillus, Hefen, LAB) oder Pathogene (E. coli, Salmonella) Wachstum. Anwendungen: Formulierungsoptimierung (minimale Konservierungsstoffniveaus Aufrechterhaltung Sicherheit/Qualität), HACCP-Validierung (kritische Kontrollpunkte identifizieren), dynamische Haltbarkeitsvorhersage (Echtzeit-Sensordaten Anpassung Prognosen), beschleunigte Testprotokolle. Vorteile: reduzierte physische Tests (Kosten/Zeitersparnis), verbesserte Sicherheitsmargen, ermöglicht Innovation (neuartige Zutaten/Prozesse mit vorhergesagten Ergebnissen). Regulatorische Akzeptanz wachsend (EFSA, FDA erkennen validierte Modelle an). Kombiniert Domain-Expertise mit datengesteuerten Erkenntnissen.",
          nl: "Traditionele voorspellende microbiologie gebruikt wiskundige modellen (Gompertz, Baranyi) relaterend microbieel gedrag aan omgevingsfactoren (pH, aw, temperatuur, conserveermiddelen). Moderne benadering: machine learning (neurale netwerken, random forests, support vector machines) getraind op uitgebreide datasets (ComBase, USDA databases, bedrijfseigen data) vastleggend complexe interacties. Invoervariabelen: drankformulering (pH, Brix, organische zuren, conserveermiddelen, CO₂), verwerkingsparameters (pasteurisatie tijd/temp, HPP druk, PEF intensiteit), verpakking (O₂ permeabiliteit), opslag (temperatuur, duur, lichtblootstelling), microbiële stam karakteristieken. Modellen voorspellen: lag fase duur, groeisnelheid, maximale populatie dichtheid, inactivatie kinetiek, waarschijnlijkheid bederf organismen (Alicyclobacillus, gisten, LAB) of pathogenen (E. coli, Salmonella) groei. Toepassingen: formuleringsoptimalisatie (minimum conserveermiddel niveaus behouden veiligheid/kwaliteit), HACCP validatie (identificeer kritische controle punten), dynamische houdbaarheid voorspelling (real-time sensor data aanpassen voorspellingen), versnelde test protocollen. Voordelen: verminderde fysieke testen (kosten/tijd besparingen), verbeterde veiligheidsmarges, maakt innovatie mogelijk (nieuwe ingrediënten/processen met voorspelde uitkomsten). Regelgevende acceptatie groeiend (EFSA, FDA erkennen gevalideerde modellen). Combineert domeinexpertise met data-gedreven inzichten."
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
