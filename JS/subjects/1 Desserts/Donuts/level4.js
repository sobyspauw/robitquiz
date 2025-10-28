// Quiz Template - Level 4: Dessert - Donuts
(function() {
  const level4 = {
    name: {
      en: "Expert Donut Engineering",
      es: "Ingeniería Experta de Donas",
      de: "Experten-Donut-Engineering",
      nl: "Expert Donut Engineering"
    },
    questions: [
      {
        question: {
          en: "What is the optimal specific volume ratio for achieving consistent donut cell structure across varying atmospheric pressure conditions?",
          es: "¿Cuál es la relación de volumen específico óptima para lograr una estructura celular de dona consistente en condiciones de presión atmosférica variables?",
          de: "Was ist das optimale spezifische Volumenverhältnis für eine konsistente Donut-Zellstruktur bei variierenden atmosphärischen Druckbedingungen?",
          nl: "Wat is de optimale specifieke volumeverhouding voor het bereiken van consistente donut celstructuur onder variërende atmosferische drukvoorwaarden?"
        },
        options: [
          { en: "2.8-3.2 cm³/g", es: "2,8-3,2 cm³/g", de: "2,8-3,2 cm³/g", nl: "2,8-3,2 cm³/g" },
          { en: "3.5-4.0 cm³/g", es: "3,5-4,0 cm³/g", de: "3,5-4,0 cm³/g", nl: "3,5-4,0 cm³/g" },
          { en: "4.2-4.8 cm³/g", es: "4,2-4,8 cm³/g", de: "4,2-4,8 cm³/g", nl: "4,2-4,8 cm³/g" },
          { en: "5.1-5.7 cm³/g", es: "5,1-5,7 cm³/g", de: "5,1-5,7 cm³/g", nl: "5,1-5,7 cm³/g" }
        ],
        correct: 1,
        explanation: {
          en: "The optimal specific volume ratio of 3.5-4.0 cm³/g provides the ideal balance between structural integrity and texture, accounting for pressure variations that affect gas cell expansion during frying.",
          es: "La relación de volumen específico óptima de 3,5-4,0 cm³/g proporciona el equilibrio ideal entre integridad estructural y textura, teniendo en cuenta las variaciones de presión que afectan la expansión de las células de gas durante la fritura.",
          de: "Das optimale spezifische Volumenverhältnis von 3,5-4,0 cm³/g bietet das ideale Gleichgewicht zwischen struktureller Integrität und Textur unter Berücksichtigung von Druckschwankungen, die die Gaszellenexpansion beim Frittieren beeinflussen.",
          nl: "De optimale specifieke volumeverhouding van 3,5-4,0 cm³/g biedt de ideale balans tussen structurele integriteit en textuur, rekening houdend met drukvariaties die gascelexpansie tijdens het frituren beïnvloeden."
        }
      },
      {
        question: {
          en: "Which enzyme combination provides the most precise control over dough extensibility for industrial donut production?",
          es: "¿Qué combinación de enzimas proporciona el control más preciso sobre la extensibilidad de la masa para la producción industrial de donas?",
          de: "Welche Enzymkombination bietet die präziseste Kontrolle über die Teigdehnbarkeit für die industrielle Donut-Produktion?",
          nl: "Welke enzymcombinatie biedt de meest precieze controle over deegrekbaarheid voor industriële donutproductie?"
        },
        options: [
          { en: "α-amylase + hemicellulase", es: "α-amilasa + hemicelulasa", de: "α-Amylase + Hemicellulase", nl: "α-amylase + hemicellulase" },
          { en: "xylanase + glucose oxidase", es: "xilanasa + glucosa oxidasa", de: "Xylanase + Glucoseoxidase", nl: "xylanase + glucose oxidase" },
          { en: "transglutaminase + lipase", es: "transglutaminasa + lipasa", de: "Transglutaminase + Lipase", nl: "transglutaminase + lipase" },
          { en: "protease + phospholipase", es: "proteasa + fosfolipasa", de: "Protease + Phospholipase", nl: "protease + fosfolipase" }
        ],
        correct: 1,
        explanation: {
          en: "Xylanase and glucose oxidase work synergistically to modify gluten networks and strengthen disulfide bonds, providing precise control over dough handling properties and final texture.",
          es: "La xilanasa y la glucosa oxidasa trabajan sinérgicamente para modificar las redes de gluten y fortalecer los enlaces disulfuro, proporcionando un control preciso sobre las propiedades de manejo de la masa y la textura final.",
          de: "Xylanase und Glucoseoxidase wirken synergistisch zur Modifikation von Glutennetzwerken und Stärkung von Disulfidbrücken, was präzise Kontrolle über Teigverarbeitungseigenschaften und Endtextur ermöglicht.",
          nl: "Xylanase en glucose oxidase werken synergetisch om glutennetwerken te modificeren en disulfidebindingen te versterken, wat precieze controle biedt over deegeigenschappen en eindtextuur."
        }
      },
      {
        question: {
          en: "What is the critical Damköhler number for optimal heat and mass transfer during donut frying at 375°F?",
          es: "¿Cuál es el número de Damköhler crítico para la transferencia óptima de calor y masa durante la fritura de donas a 375°F?",
          de: "Was ist die kritische Damköhler-Zahl für optimale Wärme- und Stoffübertragung beim Donut-Frittieren bei 375°F?",
          nl: "Wat is het kritische Damköhler-getal voor optimale warmte- en massaoverdracht tijdens donutfrituren bij 375°F?"
        },
        options: [
          { en: "Da = 0.15-0.25", es: "Da = 0,15-0,25", de: "Da = 0,15-0,25", nl: "Da = 0,15-0,25" },
          { en: "Da = 0.35-0.45", es: "Da = 0,35-0,45", de: "Da = 0,35-0,45", nl: "Da = 0,35-0,45" },
          { en: "Da = 0.65-0.75", es: "Da = 0,65-0,75", de: "Da = 0,65-0,75", nl: "Da = 0,65-0,75" },
          { en: "Da = 0.85-0.95", es: "Da = 0,85-0,95", de: "Da = 0,85-0,95", nl: "Da = 0,85-0,95" }
        ],
        correct: 1,
        explanation: {
          en: "A Damköhler number of 0.35-0.45 represents the optimal balance between reaction time and residence time, ensuring uniform moisture removal while preventing overcooking of the exterior surface.",
          es: "Un número de Damköhler de 0,35-0,45 representa el equilibrio óptimo entre el tiempo de reacción y el tiempo de residencia, asegurando la eliminación uniforme de humedad mientras previene la sobrecocción de la superficie exterior.",
          de: "Eine Damköhler-Zahl von 0,35-0,45 stellt das optimale Gleichgewicht zwischen Reaktionszeit und Verweilzeit dar und gewährleistet gleichmäßige Feuchtigkeitsentfernung bei Vermeidung von Übergarung der Außenoberfläche.",
          nl: "Een Damköhler-getal van 0,35-0,45 vertegenwoordigt de optimale balans tussen reactietijd en verblijftijd, wat uniforme vochtverwijdering verzekert terwijl overkoking van het buitenoppervlak wordt voorkomen."
        }
      },
      {
        question: {
          en: "Which rheological modifier provides the best shear-thinning behavior for automated donut depositing systems?",
          es: "¿Qué modificador reológico proporciona el mejor comportamiento de adelgazamiento por cizallamiento para sistemas automatizados de deposición de donas?",
          de: "Welcher rheologische Modifier bietet das beste Scherverdünnungsverhalten für automatisierte Donut-Dosiersysteme?",
          nl: "Welke rheologische modifier biedt het beste shear-thinning gedrag voor geautomatiseerde donut afzetsystemen?"
        },
        options: [
          { en: "Xanthan gum (0.05-0.08%)", es: "Goma xantana (0,05-0,08%)", de: "Xanthan (0,05-0,08%)", nl: "Xanthaangom (0,05-0,08%)" },
          { en: "Guar gum (0.12-0.15%)", es: "Goma guar (0,12-0,15%)", de: "Guarkernmehl (0,12-0,15%)", nl: "Guarpit (0,12-0,15%)" },
          { en: "Carrageenan (0.08-0.11%)", es: "Carragenina (0,08-0,11%)", de: "Carrageen (0,08-0,11%)", nl: "Carrageen (0,08-0,11%)" },
          { en: "Locust bean gum (0.18-0.22%)", es: "Goma de algarrobo (0,18-0,22%)", de: "Johannisbrotkernmehl (0,18-0,22%)", nl: "Johannesbroodpit (0,18-0,22%)" }
        ],
        correct: 0,
        explanation: {
          en: "Xanthan gum at 0.05-0.08% concentration provides excellent shear-thinning properties, allowing smooth flow through depositing nozzles while maintaining shape retention after deposition.",
          es: "La goma xantana en concentración de 0,05-0,08% proporciona excelentes propiedades de adelgazamiento por cizallamiento, permitiendo un flujo suave a través de las boquillas de deposición mientras mantiene la retención de forma después de la deposición.",
          de: "Xanthan in 0,05-0,08% Konzentration bietet ausgezeichnete Scherverdünnungseigenschaften, ermöglicht glatten Fluss durch Dosierdüsen bei gleichzeitiger Formbeständigkeit nach der Dosierung.",
          nl: "Xanthaangom in 0,05-0,08% concentratie biedt uitstekende shear-thinning eigenschappen, wat gladde stroming door afzetmondstukken mogelijk maakt terwijl vormretentie na afzetting behouden blijft."
        }
      },
      {
        question: {
          en: "What is the optimal pectin methylation degree for achieving superior gel strength in filled donuts?",
          es: "¿Cuál es el grado de metilación de pectina óptimo para lograr una resistencia de gel superior en donas rellenas?",
          de: "Was ist der optimale Pektinmethylierungsgrad für überlegene Gelstärke in gefüllten Donuts?",
          nl: "Wat is de optimale pectine methyleringsgraad voor het bereiken van superieure gelsterkte in gevulde donuts?"
        },
        options: [
          { en: "25-35% DE", es: "25-35% DE", de: "25-35% DE", nl: "25-35% DE" },
          { en: "45-55% DE", es: "45-55% DE", de: "45-55% DE", nl: "45-55% DE" },
          { en: "65-75% DE", es: "65-75% DE", de: "65-75% DE", nl: "65-75% DE" },
          { en: "85-95% DE", es: "85-95% DE", de: "85-95% DE", nl: "85-95% DE" }
        ],
        correct: 2,
        explanation: {
          en: "High methoxyl pectin with 65-75% degree of esterification provides optimal gel strength and thermal stability for donut fillings, preventing leakage during frying and storage.",
          es: "La pectina de alto metoxilo con 65-75% de grado de esterificación proporciona resistencia de gel óptima y estabilidad térmica para rellenos de donas, previniendo fugas durante la fritura y almacenamiento.",
          de: "Hochmethoxylpektin mit 65-75% Veresterungsgrad bietet optimale Gelstärke und thermische Stabilität für Donut-Füllungen und verhindert Auslaufen beim Frittieren und Lagern.",
          nl: "Hoog-methoxyl pectine met 65-75% veresteringsgraad biedt optimale gelsterkte en thermische stabiliteit voor donutvullingen, wat lekkage tijdens frituren en opslag voorkomt."
        }
      },
      {
        question: {
          en: "Which crystalline fat phase provides the most stable β-polymorphic form for donut glaze applications?",
          es: "¿Qué fase de grasa cristalina proporciona la forma β-polimórfica más estable para aplicaciones de glaseado de donas?",
          de: "Welche kristalline Fettphase bietet die stabilste β-polymorphe Form für Donut-Glasur-Anwendungen?",
          nl: "Welke kristallijne vetfase biedt de meest stabiele β-polymorfe vorm voor donut glazuurapplicaties?"
        },
        options: [
          { en: "Palm kernel stearin", es: "Estearina de palmiste", de: "Palmkernstearin", nl: "Palmkernstearine" },
          { en: "Coconut oil fraction", es: "Fracción de aceite de coco", de: "Kokosnussölfraktion", nl: "Kokosoliefractie" },
          { en: "Shea stearin", es: "Estearina de karité", de: "Sheabutterstearin", nl: "Sheastearine" },
          { en: "Cocoa butter equivalent", es: "Equivalente de manteca de cacao", de: "Kakaobutter-Äquivalent", nl: "Cacaoboter equivalent" }
        ],
        correct: 3,
        explanation: {
          en: "Cocoa butter equivalents (CBE) provide the most stable β-polymorph with optimal thermal resistance and glossy appearance, essential for premium donut glazes that maintain quality during temperature fluctuations.",
          es: "Los equivalentes de manteca de cacao (CBE) proporcionan el β-polimorfo más estable con resistencia térmica óptima y apariencia brillante, esencial para glaseados premium de donas que mantienen la calidad durante fluctuaciones de temperatura.",
          de: "Kakaobutter-Äquivalente (CBE) bieten den stabilsten β-Polymorph mit optimaler Wärmebeständigkeit und glänzendem Aussehen, essentiell für Premium-Donut-Glasuren, die bei Temperaturschwankungen Qualität bewahren.",
          nl: "Cacaoboter equivalenten (CBE) bieden de meest stabiele β-polymorph met optimale thermische weerstand en glanzende verschijning, essentieel voor premium donut glazuren die kwaliteit behouden tijdens temperatuurschommelingen."
        }
      },
      {
        question: {
          en: "What is the critical water activity (aw) threshold for preventing lipid oxidation in glazed donuts during extended storage?",
          es: "¿Cuál es el umbral crítico de actividad del agua (aw) para prevenir la oxidación de lípidos en donas glaseadas durante el almacenamiento prolongado?",
          de: "Was ist der kritische Wasseraktivitäts-Schwellenwert (aw) zur Verhinderung von Lipidoxidation in glasierten Donuts bei längerer Lagerung?",
          nl: "Wat is de kritische wateractiviteit (aw) drempel voor het voorkomen van lipide oxidatie in geglazuurde donuts tijdens verlengde opslag?"
        },
        options: [
          { en: "aw < 0.45", es: "aw < 0,45", de: "aw < 0,45", nl: "aw < 0,45" },
          { en: "aw < 0.55", es: "aw < 0,55", de: "aw < 0,55", nl: "aw < 0,55" },
          { en: "aw < 0.65", es: "aw < 0,65", de: "aw < 0,65", nl: "aw < 0,65" },
          { en: "aw < 0.75", es: "aw < 0,75", de: "aw < 0,75", nl: "aw < 0,75" }
        ],
        correct: 1,
        explanation: {
          en: "Maintaining water activity below 0.55 significantly reduces lipid oxidation rates by limiting water-mediated catalytic processes while preserving acceptable texture and mouthfeel characteristics.",
          es: "Mantener la actividad del agua por debajo de 0,55 reduce significativamente las tasas de oxidación de lípidos al limitar los procesos catalíticos mediados por agua mientras preserva características aceptables de textura y sensación en boca.",
          de: "Die Aufrechterhaltung der Wasseraktivität unter 0,55 reduziert Lipidoxidationsraten erheblich durch Begrenzung wasserkatalysierter Prozesse bei Erhaltung akzeptabler Textur- und Mundgefühlseigenschaften.",
          nl: "Het handhaven van wateractiviteit onder 0,55 vermindert lipide oxidatiesnelheden aanzienlijk door het beperken van water-gemedieerde katalytische processen terwijl aanvaardbare textuur en mondgevoel karakteristieken behouden blijven."
        }
      },
      {
        question: {
          en: "Which emulsifier system provides the optimal HLB value for stable donut batter emulsions?",
          es: "¿Qué sistema emulsificante proporciona el valor HLB óptimo para emulsiones estables de masa de donas?",
          de: "Welches Emulgatorsystem bietet den optimalen HLB-Wert für stabile Donut-Teig-Emulsionen?",
          nl: "Welk emulgatorsysteem biedt de optimale HLB-waarde voor stabiele donutbeslag emulsies?"
        },
        options: [
          { en: "PGFE + SSL (HLB 4.2)", es: "PGFE + SSL (HLB 4,2)", de: "PGFE + SSL (HLB 4,2)", nl: "PGFE + SSL (HLB 4,2)" },
          { en: "DATEM + CSL (HLB 6.8)", es: "DATEM + CSL (HLB 6,8)", de: "DATEM + CSL (HLB 6,8)", nl: "DATEM + CSL (HLB 6,8)" },
          { en: "Lecithin + PGPR (HLB 8.5)", es: "Lecitina + PGPR (HLB 8,5)", de: "Lecithin + PGPR (HLB 8,5)", nl: "Lecithine + PGPR (HLB 8,5)" },
          { en: "Polysorbate + SMG (HLB 12.1)", es: "Polisorbato + SMG (HLB 12,1)", de: "Polysorbat + SMG (HLB 12,1)", nl: "Polysorbaat + SMG (HLB 12,1)" }
        ],
        correct: 1,
        explanation: {
          en: "DATEM (diacetyl tartaric acid ester of monoglycerides) combined with CSL (calcium stearoyl lactylate) at HLB 6.8 provides optimal water-in-oil emulsion stability for donut batters with superior aeration properties.",
          es: "DATEM (éster de ácido tartárico diacetílico de monoglicéridos) combinado con CSL (lactilato de calcio estearoílo) en HLB 6,8 proporciona estabilidad óptima de emulsión agua-en-aceite para masas de donas con propiedades de aireación superiores.",
          de: "DATEM (Diacetylweinsäureester von Monoglyceriden) kombiniert mit CSL (Calciumstearoyllactylat) bei HLB 6,8 bietet optimale Wasser-in-Öl-Emulsionsstabilität für Donut-Teige mit überlegenen Belüftungseigenschaften.",
          nl: "DATEM (diacetyl wijnzuur ester van monoglyceriden) gecombineerd met CSL (calcium stearoyl lactylaat) bij HLB 6,8 biedt optimale water-in-olie emulsiestabiliteit voor donutbeslagen met superieure beluchting eigenschappen."
        }
      },
      {
        question: {
          en: "What is the optimal protein denaturation temperature for achieving maximum water-holding capacity in yeast-raised donuts?",
          es: "¿Cuál es la temperatura óptima de desnaturalización de proteínas para lograr la máxima capacidad de retención de agua en donas leudadas con levadura?",
          de: "Was ist die optimale Proteindenaturierungstemperatur für maximale Wasserbindungskapazität in hefegehobenen Donuts?",
          nl: "Wat is de optimale proteïne denaturatietemperatuur voor het bereiken van maximale waterbindingscapaciteit in gist-gerezen donuts?"
        },
        options: [
          { en: "62-68°C", es: "62-68°C", de: "62-68°C", nl: "62-68°C" },
          { en: "72-78°C", es: "72-78°C", de: "72-78°C", nl: "72-78°C" },
          { en: "82-88°C", es: "82-88°C", de: "82-88°C", nl: "82-88°C" },
          { en: "92-98°C", es: "92-98°C", de: "92-98°C", nl: "92-98°C" }
        ],
        correct: 2,
        explanation: {
          en: "Protein denaturation at 82-88°C optimizes the formation of new protein-water complexes while maintaining structural integrity, resulting in improved moisture retention and extended shelf life.",
          es: "La desnaturalización de proteínas a 82-88°C optimiza la formación de nuevos complejos proteína-agua mientras mantiene la integridad estructural, resultando en mejor retención de humedad y vida útil extendida.",
          de: "Proteindenaturierung bei 82-88°C optimiert die Bildung neuer Protein-Wasser-Komplexe bei Erhaltung der strukturellen Integrität, was zu verbesserter Feuchtigkeitsretention und verlängerter Haltbarkeit führt.",
          nl: "Proteïne denaturatie bij 82-88°C optimaliseert de vorming van nieuwe proteïne-water complexen terwijl structurele integriteit behouden blijft, wat resulteert in verbeterde vochtretentie en verlengde houdbaarheid."
        }
      },
      {
        question: {
          en: "Which starch modification technique provides the best freeze-thaw stability for frozen donut products?",
          es: "¿Qué técnica de modificación de almidón proporciona la mejor estabilidad de congelación-descongelación para productos de donas congeladas?",
          de: "Welche Stärkemodifikationstechnik bietet die beste Gefrier-Auftau-Stabilität für gefrorene Donut-Produkte?",
          nl: "Welke zetmeelmodificatietechniek biedt de beste vries-dooi stabiliteit voor bevroren donutproducten?"
        },
        options: [
          { en: "Acetylation (DS 0.08-0.12)", es: "Acetilación (DS 0,08-0,12)", de: "Acetylierung (DS 0,08-0,12)", nl: "Acetylering (DS 0,08-0,12)" },
          { en: "Cross-linking (0.05-0.08%)", es: "Entrecruzamiento (0,05-0,08%)", de: "Vernetzung (0,05-0,08%)", nl: "Crosslinking (0,05-0,08%)" },
          { en: "Hydroxypropylation (MS 0.15-0.20)", es: "Hidroxipropilación (MS 0,15-0,20)", de: "Hydroxypropylierung (MS 0,15-0,20)", nl: "Hydroxypropylering (MS 0,15-0,20)" },
          { en: "Phosphorylation (P 0.25-0.35%)", es: "Fosforilación (P 0,25-0,35%)", de: "Phosphorylierung (P 0,25-0,35%)", nl: "Fosforylering (P 0,25-0,35%)" }
        ],
        correct: 2,
        explanation: {
          en: "Hydroxypropyl starch with molar substitution 0.15-0.20 provides excellent freeze-thaw stability by reducing ice crystal formation and maintaining texture integrity through multiple freeze-thaw cycles.",
          es: "El almidón hidroxipropílico con sustitución molar 0,15-0,20 proporciona excelente estabilidad de congelación-descongelación al reducir la formación de cristales de hielo y mantener la integridad de la textura a través de múltiples ciclos de congelación-descongelación.",
          de: "Hydroxypropylstärke mit molarer Substitution 0,15-0,20 bietet ausgezeichnete Gefrier-Auftau-Stabilität durch Reduzierung der Eiskristallbildung und Erhaltung der Texturintegrität durch mehrere Gefrier-Auftau-Zyklen.",
          nl: "Hydroxypropyl zetmeel met molaire substitutie 0,15-0,20 biedt uitstekende vries-dooi stabiliteit door het verminderen van ijskristalvorming en het behouden van textuurintegriteit door meerdere vries-dooi cycli."
        }
      },
      {
        question: {
          en: "What is the optimal inclusion rate of resistant starch for achieving targeted dietary fiber content without compromising texture?",
          es: "¿Cuál es la tasa de inclusión óptima de almidón resistente para lograr el contenido objetivo de fibra dietética sin comprometer la textura?",
          de: "Was ist die optimale Einschlussrate von resistenter Stärke für das Erreichen des angestrebten Ballaststoffgehalts ohne Texturkompromisse?",
          nl: "Wat is de optimale inclusiegraad van resistent zetmeel voor het bereiken van beoogde voedingsvezelinhoud zonder textuurcompromis?"
        },
        options: [
          { en: "3-5% flour weight", es: "3-5% peso de harina", de: "3-5% Mehlgewicht", nl: "3-5% meelgewicht" },
          { en: "8-12% flour weight", es: "8-12% peso de harina", de: "8-12% Mehlgewicht", nl: "8-12% meelgewicht" },
          { en: "15-18% flour weight", es: "15-18% peso de harina", de: "15-18% Mehlgewicht", nl: "15-18% meelgewicht" },
          { en: "22-25% flour weight", es: "22-25% peso de harina", de: "22-25% Mehlgewicht", nl: "22-25% meelgewicht" }
        ],
        correct: 1,
        explanation: {
          en: "Resistant starch at 8-12% flour weight provides significant dietary fiber enhancement while maintaining acceptable texture and mouthfeel through minimal interference with gluten network development.",
          es: "El almidón resistente al 8-12% del peso de la harina proporciona una mejora significativa de la fibra dietética mientras mantiene textura y sensación en boca aceptables a través de interferencia mínima con el desarrollo de la red de gluten.",
          de: "Resistente Stärke bei 8-12% Mehlgewicht bietet signifikante Ballaststoffverbesserung bei Erhaltung akzeptabler Textur und Mundgefühl durch minimale Interferenz mit der Glutennetzwerkentwicklung.",
          nl: "Resistent zetmeel bij 8-12% meelgewicht biedt significante voedingsvezelverbetering terwijl aanvaardbare textuur en mondgevoel behouden blijft door minimale interferentie met glutennetwerkontwikkeling."
        }
      },
      {
        question: {
          en: "Which antioxidant combination provides the most effective protection against lipid oxidation in high-fat donut formulations?",
          es: "¿Qué combinación de antioxidantes proporciona la protección más efectiva contra la oxidación de lípidos en formulaciones de donas altas en grasa?",
          de: "Welche Antioxidantien-Kombination bietet den effektivsten Schutz gegen Lipidoxidation in fettreichen Donut-Formulierungen?",
          nl: "Welke antioxidantcombinatie biedt de meest effectieve bescherming tegen lipide oxidatie in vetrijke donutformuleringen?"
        },
        options: [
          { en: "BHT + BHA (200 ppm)", es: "BHT + BHA (200 ppm)", de: "BHT + BHA (200 ppm)", nl: "BHT + BHA (200 ppm)" },
          { en: "Tocopherols + ascorbic acid (150 ppm)", es: "Tocoferoles + ácido ascórbico (150 ppm)", de: "Tocopherole + Ascorbinsäure (150 ppm)", nl: "Tocoferolen + ascorbinezuur (150 ppm)" },
          { en: "TBHQ + citric acid (100 ppm)", es: "TBHQ + ácido cítrico (100 ppm)", de: "TBHQ + Zitronensäure (100 ppm)", nl: "TBHQ + citroenzuur (100 ppm)" },
          { en: "Rosemary extract + green tea extract (300 ppm)", es: "Extracto de romero + extracto de té verde (300 ppm)", de: "Rosmarinextrakt + Grüntee-Extrakt (300 ppm)", nl: "Rozemarijnextract + groene thee extract (300 ppm)" }
        ],
        correct: 2,
        explanation: {
          en: "TBHQ (tertiary butylhydroquinone) combined with citric acid at 100 ppm provides superior antioxidant efficacy through metal chelation and radical scavenging, offering extended shelf life for high-fat donuts.",
          es: "TBHQ (terciary butilhidroquinona) combinado con ácido cítrico a 100 ppm proporciona eficacia antioxidante superior a través de quelación de metales y eliminación de radicales, ofreciendo vida útil extendida para donas altas en grasa.",
          de: "TBHQ (tertiäres Butylhydrochinon) kombiniert mit Zitronensäure bei 100 ppm bietet überlegene Antioxidantien-Wirksamkeit durch Metallchelatierung und Radikalfängerei, was verlängerte Haltbarkeit für fettreiche Donuts ermöglicht.",
          nl: "TBHQ (tertiair butylhydrochinon) gecombineerd met citroenzuur bij 100 ppm biedt superieure antioxidant werkzaamheid door metaal chelatie en radicaal opruiming, wat verlengde houdbaarheid voor vetrijke donuts biedt."
        }
      },
      {
        question: {
          en: "What is the critical gelatin bloom strength required for optimal texture in custard-filled donuts?",
          es: "¿Cuál es la fuerza de floración de gelatina crítica requerida para textura óptima en donas rellenas de natillas?",
          de: "Was ist die kritische Gelatine-Bloom-Stärke für optimale Textur in vanillecremegefüllten Donuts?",
          nl: "Wat is de kritische gelatine bloom sterkte vereist voor optimale textuur in custard-gevulde donuts?"
        },
        options: [
          { en: "120-150 Bloom", es: "120-150 Bloom", de: "120-150 Bloom", nl: "120-150 Bloom" },
          { en: "180-220 Bloom", es: "180-220 Bloom", de: "180-220 Bloom", nl: "180-220 Bloom" },
          { en: "250-280 Bloom", es: "250-280 Bloom", de: "250-280 Bloom", nl: "250-280 Bloom" },
          { en: "300-350 Bloom", es: "300-350 Bloom", de: "300-350 Bloom", nl: "300-350 Bloom" }
        ],
        correct: 1,
        explanation: {
          en: "Gelatin with 180-220 Bloom strength provides the ideal balance between firmness and spreadability for custard fillings, ensuring proper mouthfeel without excessive firmness that could compromise injection processes.",
          es: "La gelatina con fuerza de 180-220 Bloom proporciona el equilibrio ideal entre firmeza y capacidad de extensión para rellenos de natillas, asegurando sensación en boca apropiada sin firmeza excesiva que podría comprometer los procesos de inyección.",
          de: "Gelatine mit 180-220 Bloom-Stärke bietet das ideale Gleichgewicht zwischen Festigkeit und Streichfähigkeit für Vanillecreme-Füllungen und gewährleistet angemessenes Mundgefühl ohne übermäßige Festigkeit, die Injektionsprozesse beeinträchtigen könnte.",
          nl: "Gelatine met 180-220 Bloom sterkte biedt de ideale balans tussen stevigheid en smeerbaarheid voor custard vullingen, wat juist mondgevoel verzekert zonder overdreven stevigheid die injectieprocedures zou kunnen compromitteren."
        }
      },
      {
        question: {
          en: "Which crystallization inhibitor provides the longest shelf life for sugar-dusted donuts in high-humidity environments?",
          es: "¿Qué inhibidor de cristalización proporciona la vida útil más larga para donas espolvoreadas con azúcar en ambientes de alta humedad?",
          de: "Welcher Kristallisationshemmer bietet die längste Haltbarkeit für zuckerbestäubte Donuts in feuchten Umgebungen?",
          nl: "Welke kristallisatieremmer biedt de langste houdbaarheid voor suiker-bestoven donuts in hoge vochtigheidsomgevingen?"
        },
        options: [
          { en: "Invert sugar (5-8%)", es: "Azúcar invertido (5-8%)", de: "Invertzucker (5-8%)", nl: "Invertsuiker (5-8%)" },
          { en: "Sorbitol (3-5%)", es: "Sorbitol (3-5%)", de: "Sorbitol (3-5%)", nl: "Sorbitol (3-5%)" },
          { en: "Glycerol (2-4%)", es: "Glicerol (2-4%)", de: "Glycerol (2-4%)", nl: "Glycerol (2-4%)" },
          { en: "Trehalose (6-9%)", es: "Trehalosa (6-9%)", de: "Trehalose (6-9%)", nl: "Trehalose (6-9%)" }
        ],
        correct: 3,
        explanation: {
          en: "Trehalose at 6-9% concentration provides exceptional crystallization inhibition and moisture protection, maintaining sugar coating integrity even under high-humidity storage conditions through its unique hygroscopic properties.",
          es: "La trehalosa en concentración de 6-9% proporciona inhibición excepcional de cristalización y protección contra la humedad, manteniendo la integridad del recubrimiento de azúcar incluso bajo condiciones de almacenamiento de alta humedad a través de sus propiedades higroscópicas únicas.",
          de: "Trehalose in 6-9% Konzentration bietet außergewöhnliche Kristallisationshemmung und Feuchtigkeitsschutz, erhält die Integrität der Zuckerbeschichtung auch unter feuchten Lagerbedingungen durch ihre einzigartigen hygroskopischen Eigenschaften.",
          nl: "Trehalose in 6-9% concentratie biedt uitzonderlijke kristallisatieremming en vochtbescherming, wat suiker coating integriteit behoudt zelfs onder hoge vochtigheid opslagcondities door zijn unieke hygroscopische eigenschappen."
        }
      },
      {
        question: {
          en: "What is the optimal particle size distribution for powdered sugar coating to achieve maximum adhesion and coverage?",
          es: "¿Cuál es la distribución óptima del tamaño de partícula para el recubrimiento de azúcar en polvo para lograr máxima adhesión y cobertura?",
          de: "Was ist die optimale Partikelgrößenverteilung für Puderzucker-Beschichtung zur Erzielung maximaler Haftung und Abdeckung?",
          nl: "Wat is de optimale deeltjesgrootteverdeling voor poedersuiker coating om maximale hechting en dekking te bereiken?"
        },
        options: [
          { en: "D50: 15-25 μm, span 1.2-1.5", es: "D50: 15-25 μm, span 1,2-1,5", de: "D50: 15-25 μm, Spanne 1,2-1,5", nl: "D50: 15-25 μm, span 1,2-1,5" },
          { en: "D50: 35-45 μm, span 1.8-2.2", es: "D50: 35-45 μm, span 1,8-2,2", de: "D50: 35-45 μm, Spanne 1,8-2,2", nl: "D50: 35-45 μm, span 1,8-2,2" },
          { en: "D50: 55-65 μm, span 2.5-3.0", es: "D50: 55-65 μm, span 2,5-3,0", de: "D50: 55-65 μm, Spanne 2,5-3,0", nl: "D50: 55-65 μm, span 2,5-3,0" },
          { en: "D50: 75-85 μm, span 3.2-3.8", es: "D50: 75-85 μm, span 3,2-3,8", de: "D50: 75-85 μm, Spanne 3,2-3,8", nl: "D50: 75-85 μm, span 3,2-3,8" }
        ],
        correct: 1,
        explanation: {
          en: "A D50 of 35-45 μm with span 1.8-2.2 provides optimal balance between surface contact area and flowability, ensuring uniform coating distribution with excellent adhesion to donut surfaces.",
          es: "Un D50 de 35-45 μm con span 1,8-2,2 proporciona equilibrio óptimo entre área de contacto superficial y fluidez, asegurando distribución uniforme del recubrimiento con excelente adhesión a superficies de donas.",
          de: "Ein D50 von 35-45 μm mit Spanne 1,8-2,2 bietet optimales Gleichgewicht zwischen Oberflächenkontaktbereich und Fließfähigkeit und gewährleistet gleichmäßige Beschichtungsverteilung mit ausgezeichneter Haftung auf Donut-Oberflächen.",
          nl: "Een D50 van 35-45 μm met span 1,8-2,2 biedt optimale balans tussen oppervlak contactgebied en vloeibaarheid, wat uniforme coating verdeling verzekert met uitstekende hechting aan donut oppervlakken."
        }
      },
      {
        question: {
          en: "Which fermentation monitoring parameter provides the most accurate prediction of optimal proofing completion for yeast donuts?",
          es: "¿Qué parámetro de monitoreo de fermentación proporciona la predicción más precisa de la finalización óptima del leudado para donas de levadura?",
          de: "Welcher Fermentationsüberwachungsparameter bietet die genaueste Vorhersage der optimalen Gärungsfertigstellung für Hefe-Donuts?",
          nl: "Welke fermentatiemonitoring parameter biedt de meest nauwkeurige voorspelling van optimale rijsing voltooiing voor gist donuts?"
        },
        options: [
          { en: "CO₂ evolution rate (mL/min/g)", es: "Tasa de evolución de CO₂ (mL/min/g)", de: "CO₂-Entwicklungsrate (mL/min/g)", nl: "CO₂ evolutiesnelheid (mL/min/g)" },
          { en: "pH decline gradient (ΔpH/Δt)", es: "Gradiente de declive de pH (ΔpH/Δt)", de: "pH-Abnahme-Gradient (ΔpH/Δt)", nl: "pH daling gradiënt (ΔpH/Δt)" },
          { en: "Specific volume increase (%/hr)", es: "Aumento de volumen específico (%/hr)", de: "Spezifische Volumenzunahme (%/Std)", nl: "Specifieke volumetoename (%/uur)" },
          { en: "Rheological modulus change (Pa·s)", es: "Cambio de módulo reológico (Pa·s)", de: "Rheologische Modulusänderung (Pa·s)", nl: "Rheologische modulus verandering (Pa·s)" }
        ],
        correct: 2,
        explanation: {
          en: "Specific volume increase percentage per hour provides the most reliable indicator of dough development, directly correlating with gas cell formation and optimal texture development without over-proofing.",
          es: "El aumento porcentual de volumen específico por hora proporciona el indicador más confiable del desarrollo de la masa, correlacionándose directamente con la formación de células de gas y el desarrollo óptimo de textura sin sobre-leudado.",
          de: "Die spezifische Volumenzunahme in Prozent pro Stunde bietet den zuverlässigsten Indikator für Teigentwicklung und korreliert direkt mit Gaszellenbildung und optimaler Texturentwicklung ohne Übergärung.",
          nl: "Specifieke volumetoename percentage per uur biedt de meest betrouwbare indicator van deegenontwikkeling, direct correlerend met gascelvorming en optimale textuurenontwikkeling zonder over-rijzing."
        }
      },
      {
        question: {
          en: "What is the critical interfacial tension value for optimal oil penetration control during donut frying?",
          es: "¿Cuál es el valor crítico de tensión interfacial para el control óptimo de penetración de aceite durante la fritura de donas?",
          de: "Was ist der kritische Grenzflächenspannungswert für optimale Öleindringungskontrolle beim Donut-Frittieren?",
          nl: "Wat is de kritische grensvlakspanning waarde voor optimale olie penetratie controle tijdens donut frituren?"
        },
        options: [
          { en: "γ = 8-12 mN/m", es: "γ = 8-12 mN/m", de: "γ = 8-12 mN/m", nl: "γ = 8-12 mN/m" },
          { en: "γ = 18-22 mN/m", es: "γ = 18-22 mN/m", de: "γ = 18-22 mN/m", nl: "γ = 18-22 mN/m" },
          { en: "γ = 28-32 mN/m", es: "γ = 28-32 mN/m", de: "γ = 28-32 mN/m", nl: "γ = 28-32 mN/m" },
          { en: "γ = 38-42 mN/m", es: "γ = 38-42 mN/m", de: "γ = 38-42 mN/m", nl: "γ = 38-42 mN/m" }
        ],
        correct: 1,
        explanation: {
          en: "Interfacial tension of 18-22 mN/m provides optimal balance between proper heat transfer and controlled oil absorption, ensuring adequate cooking while preventing excessive oil uptake that compromises texture and nutritional profile.",
          es: "La tensión interfacial de 18-22 mN/m proporciona equilibrio óptimo entre transferencia de calor adecuada y absorción controlada de aceite, asegurando cocción adecuada mientras previene absorción excesiva de aceite que compromete la textura y el perfil nutricional.",
          de: "Grenzflächenspannung von 18-22 mN/m bietet optimales Gleichgewicht zwischen angemessener Wärmeübertragung und kontrollierter Ölabsorption und gewährleistet ausreichendes Garen bei Vermeidung übermäßiger Ölaufnahme, die Textur und Nährwertprofil beeinträchtigt.",
          nl: "Grensvlakspanning van 18-22 mN/m biedt optimale balans tussen juiste warmte overdracht en gecontroleerde olie absorptie, wat adequate kooking verzekert terwijl overdreven olie opname wordt voorkomen die textuur en voedingsprofiel compromitteert."
        }
      },
      {
        question: {
          en: "Which analytical technique provides the most precise measurement of acrylamide formation potential in donut formulations?",
          es: "¿Qué técnica analítica proporciona la medición más precisa del potencial de formación de acrilamida en formulaciones de donas?",
          de: "Welche Analysetechnik bietet die präziseste Messung des Acrylamid-Bildungspotentials in Donut-Formulierungen?",
          nl: "Welke analytische techniek biedt de meest precieze meting van acrylamide vormingspotentieel in donutformuleringen?"
        },
        options: [
          { en: "LC-MS/MS with isotope dilution", es: "LC-MS/MS con dilución isotópica", de: "LC-MS/MS mit Isotopenverdünnung", nl: "LC-MS/MS met isotoop verdunning" },
          { en: "GC-MS with derivatization", es: "GC-MS con derivatización", de: "GC-MS mit Derivatisierung", nl: "GC-MS met derivatisering" },
          { en: "HPLC-UV with pre-column derivatization", es: "HPLC-UV con derivatización pre-columna", de: "HPLC-UV mit Vorsäulen-Derivatisierung", nl: "HPLC-UV met pre-kolom derivatisering" },
          { en: "NIR spectroscopy with chemometrics", es: "Espectroscopía NIR con quimiometría", de: "NIR-Spektroskopie mit Chemometrie", nl: "NIR spectroscopie met chemometrie" }
        ],
        correct: 0,
        explanation: {
          en: "LC-MS/MS with isotope dilution provides the highest precision and accuracy for acrylamide quantification, offering superior specificity and sensitivity essential for regulatory compliance and product safety assessment.",
          es: "LC-MS/MS con dilución isotópica proporciona la mayor precisión y exactitud para la cuantificación de acrilamida, ofreciendo especificidad y sensibilidad superiores esenciales para el cumplimiento regulatorio y la evaluación de seguridad del producto.",
          de: "LC-MS/MS mit Isotopenverdünnung bietet die höchste Präzision und Genauigkeit für Acrylamid-Quantifizierung und liefert überlegene Spezifität und Sensitivität, die für regulatorische Compliance und Produktsicherheitsbewertung essentiell sind.",
          nl: "LC-MS/MS met isotoop verdunning biedt de hoogste precisie en nauwkeurigheid voor acrylamide kwantificatie, wat superieure specificiteit en gevoeligheid levert die essentieel zijn voor regulatoire compliance en product veiligheidsbeoordeling."
        }
      },
      {
        question: {
          en: "What is the difference between cake donuts and yeast donuts?",
          es: "¿Cuál es la diferencia entre donas de pastel y donas de levadura?",
          de: "Was ist der Unterschied zwischen Kuchen-Donuts und Hefe-Donuts?",
          nl: "Wat is het verschil tussen cake donuts en gist donuts?"
        },
        options: [
          { en: "Cake donuts use baking powder, yeast donuts use yeast", es: "Las donas de pastel usan polvo de hornear, las de levadura usan levadura", de: "Kuchen-Donuts verwenden Backpulver, Hefe-Donuts verwenden Hefe", nl: "Cake donuts gebruiken bakpoeder, gist donuts gebruiken gist" },
          { en: "Cake donuts are always chocolate", es: "Las donas de pastel siempre son de chocolate", de: "Kuchen-Donuts sind immer Schokolade", nl: "Cake donuts zijn altijd chocolade" },
          { en: "No difference", es: "No hay diferencia", de: "Kein Unterschied", nl: "Geen verschil" },
          { en: "Yeast donuts are baked, cake donuts are fried", es: "Las donas de levadura se hornean, las de pastel se fríen", de: "Hefe-Donuts werden gebacken, Kuchen-Donuts werden frittiert", nl: "Gist donuts worden gebakken, cake donuts worden gefrituurd" }
        ],
        correct: 0,
        explanation: {
          en: "Cake donuts use baking powder for leavening and have a denser texture, while yeast donuts use yeast and are lighter and airier.",
          es: "Las donas de pastel usan polvo de hornear para leudado y tienen una textura más densa, mientras que las donas de levadura usan levadura y son más ligeras y aireadas.",
          de: "Kuchen-Donuts verwenden Backpulver als Triebmittel und haben eine dichtere Textur, während Hefe-Donuts Hefe verwenden und leichter und luftiger sind.",
          nl: "Cake donuts gebruiken bakpoeder als rijsmiddel en hebben een dichtere textuur, terwijl gist donuts gist gebruiken en lichter en luchtiger zijn."
        }
      },
      {
        question: {
          en: "What gives glazed donuts their shiny appearance?",
          es: "¿Qué le da a las donas glaseadas su apariencia brillante?",
          de: "Was verleiht glasierten Donuts ihr glänzendes Aussehen?",
          nl: "Wat geeft geglazuurde donuts hun glanzende uiterlijk?"
        },
        options: [
          { en: "Sugar and water/milk mixture", es: "Mezcla de azúcar y agua/leche", de: "Zucker- und Wasser-/Milchmischung", nl: "Suiker en water/melk mengsel" },
          { en: "Oil coating", es: "Recubrimiento de aceite", de: "Ölbeschichtung", nl: "Olielaag" },
          { en: "Egg wash", es: "Baño de huevo", de: "Eistreichen", nl: "Eiglazuur" },
          { en: "Food coloring", es: "Colorante alimentario", de: "Lebensmittelfarbe", nl: "Voedingskleurstof" }
        ],
        correct: 0,
        explanation: {
          en: "Glazed donuts get their shiny appearance from a glaze made of powdered sugar mixed with water, milk, or other liquids that creates a smooth, glossy coating.",
          es: "Las donas glaseadas obtienen su apariencia brillante de un glaseado hecho de azúcar en polvo mezclado con agua, leche u otros líquidos que crea un recubrimiento suave y brillante.",
          de: "Glasierte Donuts erhalten ihr glänzendes Aussehen durch eine Glasur aus Puderzucker gemischt mit Wasser, Milch oder anderen Flüssigkeiten, die eine glatte, glänzende Beschichtung bildet.",
          nl: "Geglazuurde donuts krijgen hun glanzende uiterlijk van een glazuur gemaakt van poedersuiker gemengd met water, melk of andere vloeistoffen dat een gladde, glanzende coating creëert."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();