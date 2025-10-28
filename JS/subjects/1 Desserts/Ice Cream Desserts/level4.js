// Ice Cream Desserts Quiz - Level 4: Technical Knowledge
(function() {
  const level4 = {
    name: {
      en: "Ice Cream Desserts - Technical Knowledge",
      es: "Postres de Helado - Conocimiento Técnico",
      de: "Eisdesserts - Technisches Wissen",
      nl: "IJsdesserts - Technische Kennis"
    },
    questions: [
      {
        question: {
          en: "What is the critical temperature zone for ice crystal nucleation in ice cream?",
          es: "¿Cuál es la zona de temperatura crítica para la nucleación de cristales de hielo en el helado?",
          de: "Was ist die kritische Temperaturzone für die Eiskristallnukleation in Eis?",
          nl: "Wat is de kritieke temperatuurzone voor ijskristal nucleatie in ijs?"
        },
        options: [
          { en: "0°C to -2°C", es: "0°C a -2°C", de: "0°C bis -2°C", nl: "0°C tot -2°C" },
          { en: "-2°C to -5°C", es: "-2°C a -5°C", de: "-2°C bis -5°C", nl: "-2°C tot -5°C" },
          { en: "-5°C to -10°C", es: "-5°C a -10°C", de: "-5°C bis -10°C", nl: "-5°C tot -10°C" },
          { en: "-10°C to -15°C", es: "-10°C a -15°C", de: "-10°C bis -15°C", nl: "-10°C tot -15°C" }
        ],
        correct: 1,
        explanation: {
          en: "The critical zone for ice crystal nucleation is -2°C to -5°C. Rapid passage through this zone during freezing is essential to create numerous small ice crystals rather than few large ones.",
          es: "La zona crítica para la nucleación de cristales de hielo es -2°C a -5°C. El paso rápido por esta zona durante la congelación es esencial para crear numerosos cristales de hielo pequeños en lugar de pocos grandes.",
          de: "Die kritische Zone für Eiskristallnukleation ist -2°C bis -5°C. Schnelles Durchlaufen dieser Zone beim Gefrieren ist wichtig, um viele kleine Eiskristalle statt wenige große zu erzeugen.",
          nl: "De kritieke zone voor ijskristal nucleatie is -2°C tot -5°C. Snelle doorgang door deze zone tijdens bevriezen is essentieel om veel kleine ijskristallen te creëren in plaats van enkele grote."
        }
      },
      {
        question: {
          en: "What is the glass transition temperature (Tg) of ice cream?",
          es: "¿Cuál es la temperatura de transición vítrea (Tg) del helado?",
          de: "Was ist die Glasübergangstemperatur (Tg) von Eis?",
          nl: "Wat is de glasovergangstemperatuur (Tg) van ijs?"
        },
        options: [
          { en: "-10°C to -15°C", es: "-10°C a -15°C", de: "-10°C bis -15°C", nl: "-10°C tot -15°C" },
          { en: "-25°C to -35°C", es: "-25°C a -35°C", de: "-25°C bis -35°C", nl: "-25°C tot -35°C" },
          { en: "-45°C to -55°C", es: "-45°C a -55°C", de: "-45°C bis -55°C", nl: "-45°C tot -55°C" },
          { en: "-65°C to -75°C", es: "-65°C a -75°C", de: "-65°C bis -75°C", nl: "-65°C tot -75°C" }
        ],
        correct: 1,
        explanation: {
          en: "The glass transition temperature of ice cream is typically -25°C to -35°C, where the unfrozen serum phase becomes glassy and molecular mobility is severely restricted.",
          es: "La temperatura de transición vítrea del helado es típicamente -25°C a -35°C, donde la fase de suero no congelado se vuelve vítrea y la movilidad molecular está severamente restringida.",
          de: "Die Glasübergangstemperatur von Eis ist typischerweise -25°C bis -35°C, wo die ungefrorene Serumphase glasig wird und die molekulare Mobilität stark eingeschränkt ist.",
          nl: "De glasovergangstemperatuur van ijs is doorgaans -25°C tot -35°C, waar de niet-bevroren serumfase glasachtig wordt en moleculaire mobiliteit ernstig beperkt is."
        }
      },
      {
        question: {
          en: "What is Ostwald ripening in ice cream context?",
          es: "¿Qué es la maduración de Ostwald en el contexto del helado?",
          de: "Was ist Ostwald-Reifung im Eiskontext?",
          nl: "Wat is Ostwald rijping in ijscontext?"
        },
        options: [
          { en: "Flavor development over time", es: "Desarrollo de sabor con el tiempo", de: "Geschmacksentwicklung über Zeit", nl: "Smaak ontwikkeling over tijd" },
          { en: "Large crystals growing at expense of smaller ones", es: "Cristales grandes creciendo a expensas de los más pequeños", de: "Große Kristalle wachsen auf Kosten kleinerer", nl: "Grote kristallen groeien ten koste van kleinere" },
          { en: "Fat separation process", es: "Proceso de separación de grasa", de: "Fetttrennungsverfahren", nl: "Vetscheidingsproces" },
          { en: "Protein coagulation", es: "Coagulación de proteínas", de: "Proteingerinnung", nl: "Eiwitcoagulatie" }
        ],
        correct: 1,
        explanation: {
          en: "Ostwald ripening is the thermodynamic process where larger ice crystals grow at the expense of smaller ones during storage, leading to coarsening of texture over time.",
          es: "La maduración de Ostwald es el proceso termodinámico donde los cristales de hielo más grandes crecen a expensas de los más pequeños durante el almacenamiento, llevando al engrosamiento de la textura con el tiempo.",
          de: "Ostwald-Reifung ist der thermodynamische Prozess, bei dem größere Eiskristalle auf Kosten kleinerer während der Lagerung wachsen, was zu einer Vergröberung der Textur über die Zeit führt.",
          nl: "Ostwald rijping is het thermodynamische proces waarbij grotere ijskristallen groeien ten koste van kleinere tijdens opslag, wat leidt tot grover wordende textuur over tijd."
        }
      },
      {
        question: {
          en: "What is the theoretical maximum overrun for ice cream based on foam physics?",
          es: "¿Cuál es el overrun máximo teórico para helado basado en física de espumas?",
          de: "Was ist der theoretische maximale Übergang für Eis basierend auf Schaumphysik?",
          nl: "Wat is de theoretische maximale overrun voor ijs gebaseerd op schuimfysica?"
        },
        options: [
          { en: "100%", es: "100%", de: "100%", nl: "100%" },
          { en: "200%", es: "200%", de: "200%", nl: "200%" },
          { en: "600-700%", es: "600-700%", de: "600-700%", nl: "600-700%" },
          { en: "1000%", es: "1000%", de: "1000%", nl: "1000%" }
        ],
        correct: 2,
        explanation: {
          en: "Theoretical maximum overrun is 600-700% based on closest packing of spherical air bubbles. However, practical limits are much lower (100-150%) due to foam stability constraints.",
          es: "El overrun máximo teórico es 600-700% basado en el empaquetado más cercano de burbujas de aire esféricas. Sin embargo, los límites prácticos son mucho menores (100-150%) debido a restricciones de estabilidad de espuma.",
          de: "Theoretischer maximaler Übergang ist 600-700% basierend auf der dichtesten Packung sphärischer Luftblasen. Praktische Grenzen sind jedoch viel niedriger (100-150%) aufgrund von Schaumstabilitätsbeschränkungen.",
          nl: "Theoretische maximale overrun is 600-700% gebaseerd op dichtstbijzijnde pakking van sferische luchtbellen. Praktische limieten zijn echter veel lager (100-150%) vanwege schuimstabiliteitsbeperking."
        }
      },
      {
        question: {
          en: "What is the role of interfacial tension in ice cream foam stability?",
          es: "¿Cuál es el papel de la tensión interfacial en la estabilidad de espuma del helado?",
          de: "Welche Rolle spielt Grenzflächenspannung in der Schaumstabilität von Eis?",
          nl: "Wat is de rol van oppervlaktespanning in ijsschuimstabiliteit?"
        },
        options: [
          { en: "It has no effect", es: "No tiene efecto", de: "Es hat keine Wirkung", nl: "Het heeft geen effect" },
          { en: "Lower tension improves air incorporation and stability", es: "Menor tensión mejora incorporación de aire y estabilidad", de: "Niedrigere Spannung verbessert Lufteinarbeitung und Stabilität", nl: "Lagere spanning verbetert luchtinwerking en stabiliteit" },
          { en: "Higher tension is always better", es: "Mayor tensión siempre es mejor", de: "Höhere Spannung ist immer besser", nl: "Hogere spanning is altijd beter" },
          { en: "It only affects color", es: "Solo afecta el color", de: "Es beeinflusst nur die Farbe", nl: "Het beïnvloedt alleen kleur" }
        ],
        correct: 1,
        explanation: {
          en: "Lower interfacial tension between air and liquid phases facilitates air incorporation during churning and stabilizes the foam structure through emulsifier action.",
          es: "La menor tensión interfacial entre fases de aire y líquido facilita la incorporación de aire durante el batido y estabiliza la estructura de espuma a través de la acción emulsificante.",
          de: "Niedrigere Grenzflächenspannung zwischen Luft- und Flüssigphasen erleichtert Lufteinarbeitung beim Rühren und stabilisiert die Schaumstruktur durch Emulgatorwirkung.",
          nl: "Lagere oppervlaktespanning tussen lucht- en vloeistoffasen faciliteert luchtinwerking tijdens karnen en stabiliseert de schuimstructuur door emulgatorwerking."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of fat destabilization in ice cream during churning?",
          es: "¿Cuál es el mecanismo primario de desestabilización de grasa en el helado durante el batido?",
          de: "Was ist der primäre Mechanismus der Fettdestabilisierung in Eis während des Rührens?",
          nl: "Wat is het primaire mechanisme van vetdestabilisatie in ijs tijdens karnen?"
        },
        options: [
          { en: "Temperature change only", es: "Solo cambio de temperatura", de: "Nur Temperaturänderung", nl: "Alleen temperatuurverandering" },
          { en: "Mechanical shear breaking emulsion droplets", es: "Cizallamiento mecánico rompiendo gotas de emulsión", de: "Mechanische Scherung bricht Emulsionstropfen", nl: "Mechanische schuifkracht breekt emulsiedruppels" },
          { en: "Chemical reaction", es: "Reacción química", de: "Chemische Reaktion", nl: "Chemische reactie" },
          { en: "pH change", es: "Cambio de pH", de: "pH-Änderung", nl: "pH verandering" }
        ],
        correct: 1,
        explanation: {
          en: "Mechanical shear during churning partially destabilizes fat globules, allowing controlled coalescence that creates a partially churned network essential for texture and air cell stabilization.",
          es: "El cizallamiento mecánico durante el batido desestabiliza parcialmente los glóbulos de grasa, permitiendo coalescencia controlada que crea una red parcialmente batida esencial para textura y estabilización de células de aire.",
          de: "Mechanische Scherung beim Rühren destabilisiert teilweise Fettkügelchen, ermöglicht kontrollierte Koaleszenz, die ein teilweise gerührtes Netzwerk schafft, das für Textur und Luftzellenstabilisierung wichtig ist.",
          nl: "Mechanische schuifkracht tijdens karnen destabiliseert gedeeltelijk vetbolletjes, wat gecontroleerde coalescentie mogelijk maakt die een gedeeltelijk gekarnd netwerk creëert essentieel voor textuur en luchtcelstabilisatie."
        }
      },
      {
        question: {
          en: "What is the significance of the eutectic point in frozen dessert systems?",
          es: "¿Cuál es la significancia del punto eutéctico en sistemas de postres congelados?",
          de: "Was ist die Bedeutung des eutektischen Punktes in gefrorenen Dessertsystemen?",
          nl: "Wat is de betekenis van het eutectische punt in bevroren dessert systemen?"
        },
        options: [
          { en: "Temperature where all water freezes simultaneously", es: "Temperatura donde toda el agua se congela simultáneamente", de: "Temperatur, wo alles Wasser gleichzeitig gefriert", nl: "Temperatuur waar al het water tegelijkertijd bevriest" },
          { en: "Point of maximum sweetness", es: "Punto de máximo dulzor", de: "Punkt maximaler Süße", nl: "Punt van maximale zoetheid" },
          { en: "Optimal serving temperature", es: "Temperatura óptima de servicio", de: "Optimale Serviertemperatur", nl: "Optimale serveertemperatuur" },
          { en: "Maximum overrun point", es: "Punto de máximo overrun", de: "Maximaler Übergangspunkt", nl: "Maximum overrun punt" }
        ],
        correct: 0,
        explanation: {
          en: "The eutectic point (around -55°C for ice cream) is where the concentrated unfrozen serum phase finally solidifies completely, representing the theoretical end point of the freezing process.",
          es: "El punto eutéctico (alrededor de -55°C para helado) es donde la fase de suero no congelado concentrado finalmente se solidifica completamente, representando el punto final teórico del proceso de congelación.",
          de: "Der eutektische Punkt (etwa -55°C für Eis) ist wo die konzentrierte ungefrorene Serumphase schließlich vollständig erstarrt, was den theoretischen Endpunkt des Gefrierprozesses darstellt.",
          nl: "Het eutectische punt (rond -55°C voor ijs) is waar de geconcentreerde niet-bevroren serumfase uiteindelijk volledig stolt, wat het theoretische eindpunt van het bevriezingsproces vertegenwoordigt."
        }
      },
      {
        question: {
          en: "What is the relationship between water activity (aw) and ice crystal growth?",
          es: "¿Cuál es la relación entre actividad de agua (aw) y crecimiento de cristales de hielo?",
          de: "Was ist die Beziehung zwischen Wasseraktivität (aw) und Eiskristallwachstum?",
          nl: "Wat is de relatie tussen wateractiviteit (aw) en ijskristalgroei?"
        },
        options: [
          { en: "No relationship exists", es: "No existe relación", de: "Keine Beziehung existiert", nl: "Er bestaat geen relatie" },
          { en: "Lower aw reduces ice crystal growth rate", es: "Menor aw reduce velocidad de crecimiento de cristales de hielo", de: "Niedrigere aw reduziert Eiskristallwachstumsrate", nl: "Lagere aw vermindert ijskristalgroeisnelheid" },
          { en: "Higher aw always prevents crystallization", es: "Mayor aw siempre previene cristalización", de: "Höhere aw verhindert immer Kristallisation", nl: "Hogere aw voorkomt altijd kristallisatie" },
          { en: "aw only affects flavor", es: "aw solo afecta sabor", de: "aw beeinflusst nur Geschmack", nl: "aw beïnvloedt alleen smaak" }
        ],
        correct: 1,
        explanation: {
          en: "Lower water activity reduces the thermodynamic driving force for ice crystal growth by decreasing the chemical potential difference between ice and the unfrozen phase.",
          es: "La menor actividad de agua reduce la fuerza motriz termodinámica para el crecimiento de cristales de hielo al disminuir la diferencia de potencial químico entre hielo y la fase no congelada.",
          de: "Niedrigere Wasseraktivität reduziert die thermodynamische Triebkraft für Eiskristallwachstum durch Verringerung der chemischen Potentialdifferenz zwischen Eis und der ungefrorenen Phase.",
          nl: "Lagere wateractiviteit vermindert de thermodynamische drijfkracht voor ijskristalgroei door het verlagen van het chemische potentiaalverschil tussen ijs en de niet-bevroren fase."
        }
      },
      {
        question: {
          en: "What is the role of protein-polyphenol interactions in ice cream?",
          es: "¿Cuál es el papel de las interacciones proteína-polifenol en el helado?",
          de: "Welche Rolle spielen Protein-Polyphenol-Wechselwirkungen in Eis?",
          nl: "Wat is de rol van eiwit-polyfenol interacties in ijs?"
        },
        options: [
          { en: "No significant role", es: "Ningún papel significativo", de: "Keine bedeutende Rolle", nl: "Geen significante rol" },
          { en: "Can affect texture through protein cross-linking", es: "Puede afectar textura a través de entrecruzamiento de proteínas", de: "Kann Textur durch Proteinvernetzung beeinflussen", nl: "Kan textuur beïnvloeden door eiwitverknopping" },
          { en: "Only important for color", es: "Solo importante para color", de: "Nur wichtig für Farbe", nl: "Alleen belangrijk voor kleur" },
          { en: "Only affects freezing point", es: "Solo afecta punto de congelación", de: "Beeinflusst nur Gefrierpunkt", nl: "Beïnvloedt alleen vriespunt" }
        ],
        correct: 1,
        explanation: {
          en: "Protein-polyphenol interactions can form cross-linked networks that affect gel strength and texture, particularly important in fruit-containing ice creams where tannins interact with milk proteins.",
          es: "Las interacciones proteína-polifenol pueden formar redes entrecruzadas que afectan la fuerza del gel y textura, particularmente importante en helados con frutas donde taninos interactúan con proteínas lácteas.",
          de: "Protein-Polyphenol-Wechselwirkungen können vernetzte Netzwerke bilden, die Gelstärke und Textur beeinflussen, besonders wichtig in fruchthaltigen Eissorten, wo Tannine mit Milchproteinen interagieren.",
          nl: "Eiwit-polyfenol interacties kunnen verknoopte netwerken vormen die gelsterkte en textuur beïnvloeden, vooral belangrijk in fruitbevattend ijs waar tannines interageren met melkeiwitten."
        }
      },
      {
        question: {
          en: "What is the concept of 'cryo-concentration' in frozen systems?",
          es: "¿Cuál es el concepto de 'crio-concentración' en sistemas congelados?",
          de: "Was ist das Konzept der 'Kryo-Konzentration' in gefrorenen Systemen?",
          nl: "Wat is het concept van 'cryo-concentratie' in bevroren systemen?"
        },
        options: [
          { en: "Freezing at very low temperatures", es: "Congelación a temperaturas muy bajas", de: "Gefrieren bei sehr niedrigen Temperaturen", nl: "Bevriezen bij zeer lage temperaturen" },
          { en: "Concentration of solutes in unfrozen liquid as ice forms", es: "Concentración de solutos en líquido no congelado cuando se forma hielo", de: "Konzentration von gelösten Stoffen in ungefrorenem Fluid während Eisbildung", nl: "Concentratie van opgeloste stoffen in niet-bevroren vloeistof terwijl ijs vormt" },
          { en: "Rapid freezing technique", es: "Técnica de congelación rápida", de: "Schnellgefriertechnik", nl: "Snelvriezer techniek" },
          { en: "Addition of antifreeze compounds", es: "Adición de compuestos anticongelantes", de: "Zugabe von Frostschutzmitteln", nl: "Toevoeging van antivries verbindingen" }
        ],
        correct: 1,
        explanation: {
          en: "Cryo-concentration is the progressive increase in solute concentration in the remaining unfrozen serum as water crystallizes into ice, affecting texture, stability, and sensory properties.",
          es: "La crio-concentración es el aumento progresivo en concentración de solutos en el suero no congelado restante cuando el agua cristaliza en hielo, afectando textura, estabilidad y propiedades sensoriales.",
          de: "Kryo-Konzentration ist die fortschreitende Erhöhung der Lösungskonzentration im verbleibenden ungefrorenen Serum, während Wasser zu Eis kristallisiert, was Textur, Stabilität und sensorische Eigenschaften beeinflusst.",
          nl: "Cryo-concentratie is de progressieve toename in opgeloste stof concentratie in het resterende niet-bevroren serum terwijl water kristalliseert tot ijs, wat textuur, stabiliteit en sensorische eigenschappen beïnvloedt."
        }
      },
      {
        question: {
          en: "What is the significance of polymorphic fat crystals in ice cream?",
          es: "¿Cuál es la significancia de los cristales de grasa polimórficos en el helado?",
          de: "Was ist die Bedeutung polymorpher Fettkristalle in Eis?",
          nl: "Wat is de betekenis van polymorfe vetkristallen in ijs?"
        },
        options: [
          { en: "They have no effect on ice cream", es: "No tienen efecto en el helado", de: "Sie haben keine Wirkung auf Eis", nl: "Ze hebben geen effect op ijs" },
          { en: "Different crystal forms affect melting properties and mouthfeel", es: "Diferentes formas de cristal afectan propiedades de derretimiento y sensación en boca", de: "Verschiedene Kristallformen beeinflussen Schmelzeigenschaften und Mundgefühl", nl: "Verschillende kristalvormen beïnvloeden smelteigenschappen en mondgevoel" },
          { en: "Only affect color development", es: "Solo afectan desarrollo de color", de: "Beeinflussen nur Farbentwicklung", nl: "Beïnvloeden alleen kleurontwikkeling" },
          { en: "Only important in chocolate ice cream", es: "Solo importante en helado de chocolate", de: "Nur wichtig in Schokoladeneis", nl: "Alleen belangrijk in chocolade ijs" }
        ],
        correct: 1,
        explanation: {
          en: "Fat polymorphism affects melting temperature, crystal size, and network formation, influencing ice cream's melting behavior, texture, and overall sensory experience.",
          es: "El polimorfismo de grasa afecta temperatura de derretimiento, tamaño de cristal y formación de red, influyendo en el comportamiento de derretimiento, textura y experiencia sensorial general del helado.",
          de: "Fettpolymorphismus beeinflusst Schmelztemperatur, Kristallgröße und Netzwerkbildung, was das Schmelzverhalten, die Textur und das gesamte sensorische Erlebnis von Eis beeinflusst.",
          nl: "Vetpolymorfisme beïnvloedt smelttemperatuur, kristalgrootte en netwerkvorming, wat het smeltgedrag, textuur en algehele sensorische ervaring van ijs beïnvloedt."
        }
      },
      {
        question: {
          en: "What is the role of nucleation agents in ice cream crystallization?",
          es: "¿Cuál es el papel de los agentes de nucleación en la cristalización del helado?",
          de: "Welche Rolle spielen Nukleationsagenten in der Eiskristallisation?",
          nl: "Wat is de rol van nucleatie agentia in ijskristallisatie?"
        },
        options: [
          { en: "They prevent all crystallization", es: "Previenen toda cristalización", de: "Sie verhindern alle Kristallisation", nl: "Ze voorkomen alle kristallisatie" },
          { en: "They promote formation of many small nuclei", es: "Promueven formación de muchos núcleos pequeños", de: "Sie fördern Bildung vieler kleiner Kerne", nl: "Ze bevorderen vorming van veel kleine kernen" },
          { en: "They only affect fat crystallization", es: "Solo afectan cristalización de grasa", de: "Sie beeinflussen nur Fettkristallisation", nl: "Ze beïnvloeden alleen vetkristallisatie" },
          { en: "They change the flavor profile", es: "Cambian el perfil de sabor", de: "Sie ändern das Geschmacksprofil", nl: "Ze veranderen het smaakprofiel" }
        ],
        correct: 1,
        explanation: {
          en: "Nucleation agents provide sites for crystal formation, promoting the formation of many small crystals rather than few large ones, resulting in smoother texture and better quality.",
          es: "Los agentes de nucleación proporcionan sitios para formación de cristales, promoviendo la formación de muchos cristales pequeños en lugar de pocos grandes, resultando en textura más suave y mejor calidad.",
          de: "Nukleationsagenten bieten Stellen für Kristallbildung, fördern die Bildung vieler kleiner Kristalle anstatt weniger großer, was zu glatterer Textur und besserer Qualität führt.",
          nl: "Nucleatie agentia bieden plaatsen voor kristalvorming, bevorderen de vorming van veel kleine kristallen in plaats van enkele grote, resulterend in gladdere textuur en betere kwaliteit."
        }
      },
      {
        question: {
          en: "What is the mechanism of lactose crystallization in ice cream?",
          es: "¿Cuál es el mecanismo de cristalización de lactosa en el helado?",
          de: "Was ist der Mechanismus der Laktosekristallisation in Eis?",
          nl: "Wat is het mechanisme van lactose kristallisatie in ijs?"
        },
        options: [
          { en: "Random precipitation", es: "Precipitación aleatoria", de: "Zufällige Ausfällung", nl: "Willekeurige precipitatie" },
          { en: "Concentration-dependent nucleation in cryo-concentrated serum", es: "Nucleación dependiente de concentración en suero crio-concentrado", de: "Konzentrationsabhängige Nukleation in kryo-konzentriertem Serum", nl: "Concentratie-afhankelijke nucleatie in cryo-geconcentreerd serum" },
          { en: "Temperature-independent process", es: "Proceso independiente de temperatura", de: "Temperaturunabhängiger Prozess", nl: "Temperatuur-onafhankelijk proces" },
          { en: "Enzyme-catalyzed reaction", es: "Reacción catalizada por enzimas", de: "Enzymkatalysierte Reaktion", nl: "Enzym-gekatalyseerde reactie" }
        ],
        correct: 1,
        explanation: {
          en: "Lactose crystallizes when its concentration in the cryo-concentrated serum exceeds solubility limits, typically occurring when lactose levels exceed 9.5% in the original mix.",
          es: "La lactosa cristaliza cuando su concentración en el suero crio-concentrado excede límites de solubilidad, típicamente ocurriendo cuando niveles de lactosa exceden 9.5% en la mezcla original.",
          de: "Laktose kristallisiert, wenn ihre Konzentration im kryo-konzentrierten Serum die Löslichkeitsgrenzen überschreitet, typischerweise bei Laktosewerten über 9.5% in der ursprünglichen Mischung.",
          nl: "Lactose kristalliseert wanneer de concentratie in het cryo-geconcentreerde serum de oplosbaarheidslimieten overschrijdt, typisch voorkomend wanneer lactose niveaus 9.5% in het oorspronkelijke mengsel overschrijden."
        }
      },
      {
        question: {
          en: "What is the impact of supercooling on ice cream texture?",
          es: "¿Cuál es el impacto del superenfriamiento en la textura del helado?",
          de: "Was ist der Einfluss der Unterkühlung auf die Eistextur?",
          nl: "Wat is de impact van onderkoeling op ijstextuur?"
        },
        options: [
          { en: "No effect on texture", es: "Ningún efecto en textura", de: "Keine Wirkung auf Textur", nl: "Geen effect op textuur" },
          { en: "Higher supercooling creates finer crystal structure", es: "Mayor superenfriamiento crea estructura cristalina más fina", de: "Höhere Unterkühlung erzeugt feinere Kristallstruktur", nl: "Hogere onderkoeling creëert fijnere kristalstructuur" },
          { en: "Supercooling only affects color", es: "Superenfriamiento solo afecta color", de: "Unterkühlung beeinflusst nur Farbe", nl: "Onderkoeling beïnvloedt alleen kleur" },
          { en: "Supercooling prevents freezing", es: "Superenfriamiento previene congelación", de: "Unterkühlung verhindert Gefrieren", nl: "Onderkoeling voorkomt bevriezen" }
        ],
        correct: 1,
        explanation: {
          en: "Higher degrees of supercooling lead to higher nucleation rates and smaller initial crystals, resulting in finer texture if followed by appropriate freezing conditions.",
          es: "Mayores grados de superenfriamiento llevan a mayores tasas de nucleación y cristales iniciales más pequeños, resultando en textura más fina si se sigue con condiciones de congelación apropiadas.",
          de: "Höhere Unterkühlungsgrade führen zu höheren Nukleationsraten und kleineren anfänglichen Kristallen, was zu feinerer Textur führt, wenn geeignete Gefrierbedingungen folgen.",
          nl: "Hogere graden van onderkoeling leiden tot hogere nucleatiesnelheden en kleinere initiële kristallen, resulterend in fijnere textuur indien gevolgd door geschikte bevriezingsomstandigheden."
        }
      },
      {
        question: {
          en: "What is the role of surface active proteins in ice cream foaming?",
          es: "¿Cuál es el papel de las proteínas surfactantes en el espumado del helado?",
          de: "Welche Rolle spielen oberflächenaktive Proteine im Eisschäumen?",
          nl: "Wat is de rol van oppervlakte-actieve eiwitten in ijsschuimen?"
        },
        options: [
          { en: "No role in foam formation", es: "Ningún papel en formación de espuma", de: "Keine Rolle in Schaumbildung", nl: "Geen rol in schuimvorming" },
          { en: "Reduce air-water interfacial tension and stabilize bubbles", es: "Reducen tensión interfacial aire-agua y estabilizan burbujas", de: "Reduzieren Luft-Wasser-Grenzflächenspannung und stabilisieren Blasen", nl: "Verminderen lucht-water oppervlaktespanning en stabiliseren bellen" },
          { en: "Only affect flavor release", es: "Solo afectan liberación de sabor", de: "Beeinflussen nur Geschmacksfreisetzung", nl: "Beïnvloeden alleen smaakafgifte" },
          { en: "Prevent foam formation", es: "Previenen formación de espuma", de: "Verhindern Schaumbildung", nl: "Voorkomen schuimvorming" }
        ],
        correct: 1,
        explanation: {
          en: "Surface active proteins like β-lactoglobulin adsorb at air-water interfaces, reducing surface tension and forming protective films around air bubbles, enhancing foam stability.",
          es: "Proteínas surfactantes como β-lactoglobulina se adsorben en interfaces aire-agua, reduciendo tensión superficial y formando películas protectoras alrededor de burbujas de aire, mejorando estabilidad de espuma.",
          de: "Oberflächenaktive Proteine wie β-Lactoglobulin adsorbieren an Luft-Wasser-Grenzflächen, reduzieren Oberflächenspannung und bilden Schutzfilme um Luftblasen, verbessern Schaumstabilität.",
          nl: "Oppervlakte-actieve eiwitten zoals β-lactoglobuline adsorberen aan lucht-water interfaces, verminderen oppervlaktespanning en vormen beschermende films rond luchtbellen, verbeteren schuimstabiliteit."
        }
      },
      {
        question: {
          en: "What is the thermodynamic driving force for recrystallization?",
          es: "¿Cuál es la fuerza motriz termodinámica para la recristalización?",
          de: "Was ist die thermodynamische Triebkraft für Rekristallisation?",
          nl: "Wat is de thermodynamische drijfkracht voor herkristallisatie?"
        },
        options: [
          { en: "Temperature gradient only", es: "Solo gradiente de temperatura", de: "Nur Temperaturgradient", nl: "Alleen temperatuur gradiënt" },
          { en: "Reduction in total surface energy", es: "Reducción en energía superficial total", de: "Reduzierung der gesamten Oberflächenenergie", nl: "Vermindering van totale oppervlakte-energie" },
          { en: "Pressure differences", es: "Diferencias de presión", de: "Druckunterschiede", nl: "Drukverschillen" },
          { en: "Chemical reactions", es: "Reacciones químicas", de: "Chemische Reaktionen", nl: "Chemische reacties" }
        ],
        correct: 1,
        explanation: {
          en: "The thermodynamic driving force for recrystallization is the reduction in total surface energy achieved when smaller crystals dissolve and larger crystals grow, minimizing the total crystal-solution interface.",
          es: "La fuerza motriz termodinámica para recristalización es la reducción en energía superficial total lograda cuando cristales menores se disuelven y cristales mayores crecen, minimizando la interface total cristal-solución.",
          de: "Die thermodynamische Triebkraft für Rekristallisation ist die Reduzierung der gesamten Oberflächenenergie, die erreicht wird, wenn kleinere Kristalle sich auflösen und größere Kristalle wachsen, wodurch die gesamte Kristall-Lösungs-Grenzfläche minimiert wird.",
          nl: "De thermodynamische drijfkracht voor herkristallisatie is de vermindering van totale oppervlakte-energie bereikt wanneer kleinere kristallen oplossen en grotere kristallen groeien, waarbij de totale kristal-oplossing interface wordt geminimaliseerd."
        }
      },
      {
        question: {
          en: "What is the concept of 'critical packing parameter' in emulsion stability?",
          es: "¿Cuál es el concepto de 'parámetro de empaquetado crítico' en estabilidad de emulsión?",
          de: "Was ist das Konzept des 'kritischen Packungsparameters' in Emulsionsstabilität?",
          nl: "Wat is het concept van 'kritische pakkingsparameter' in emulsiestabiliteit?"
        },
        options: [
          { en: "Maximum amount of product in packaging", es: "Cantidad máxima de producto en empaque", de: "Maximale Produktmenge in Verpackung", nl: "Maximale hoeveelheid product in verpakking" },
          { en: "Geometric parameter determining surfactant self-assembly", es: "Parámetro geométrico determinando auto-ensamblaje de surfactante", de: "Geometrischer Parameter, der Tensid-Selbstorganisation bestimmt", nl: "Geometrische parameter die oppervlakteactieve stof zelfassemblage bepaalt" },
          { en: "Pressure required for emulsification", es: "Presión requerida para emulsificación", de: "Druck erforderlich für Emulgierung", nl: "Druk vereist voor emulgering" },
          { en: "Temperature for optimal mixing", es: "Temperatura para mezcla óptima", de: "Temperatur für optimales Mischen", nl: "Temperatuur voor optimale menging" }
        ],
        correct: 1,
        explanation: {
          en: "Critical packing parameter relates the geometry of surfactant molecules to their preferred self-assembly structure, determining whether they stabilize oil-in-water or water-in-oil emulsions.",
          es: "El parámetro de empaquetado crítico relaciona la geometría de moléculas surfactantes a su estructura preferida de auto-ensamblaje, determinando si estabilizan emulsiones aceite-en-agua o agua-en-aceite.",
          de: "Der kritische Packungsparameter bezieht die Geometrie von Tensidmolekülen auf ihre bevorzugte Selbstorganisationsstruktur und bestimmt, ob sie Öl-in-Wasser- oder Wasser-in-Öl-Emulsionen stabilisieren.",
          nl: "Kritische pakkingsparameter relateert de geometrie van oppervlakteactieve moleculen aan hun geprefereerde zelfassemblage structuur, wat bepaalt of ze olie-in-water of water-in-olie emulsies stabiliseren."
        }
      },
      {
        question: {
          en: "What is the significance of Laplace pressure in ice cream air cells?",
          es: "¿Cuál es la significancia de la presión de Laplace en células de aire del helado?",
          de: "Was ist die Bedeutung des Laplace-Drucks in Eisluftzelln?",
          nl: "Wat is de betekenis van Laplace druk in ijs luchtcellen?"
        },
        options: [
          { en: "It has no effect on ice cream", es: "No tiene efecto en el helado", de: "Es hat keine Wirkung auf Eis", nl: "Het heeft geen effect op ijs" },
          { en: "Creates pressure difference across curved interfaces affecting stability", es: "Crea diferencia de presión a través de interfaces curvadas afectando estabilidad", de: "Erzeugt Druckunterschied über gekrümmte Grenzflächen und beeinflusst Stabilität", nl: "Creëert drukverschil over gekromde interfaces wat stabiliteit beïnvloedt" },
          { en: "Only affects melting temperature", es: "Solo afecta temperatura de derretimiento", de: "Beeinflusst nur Schmelztemperatur", nl: "Beïnvloedt alleen smelttemperatuur" },
          { en: "Controls flavor release only", es: "Solo controla liberación de sabor", de: "Kontrolliert nur Geschmacksfreisetzung", nl: "Controleert alleen smaakafgifte" }
        ],
        correct: 1,
        explanation: {
          en: "Laplace pressure creates higher pressure inside smaller air bubbles, driving gas diffusion from small to large bubbles (Ostwald ripening), affecting foam stability and texture over time.",
          es: "La presión de Laplace crea mayor presión dentro de burbujas de aire menores, impulsando difusión de gas de burbujas pequeñas a grandes (maduración de Ostwald), afectando estabilidad de espuma y textura con el tiempo.",
          de: "Laplace-Druck erzeugt höheren Druck in kleineren Luftblasen, treibt Gasdiffusion von kleinen zu großen Blasen (Ostwald-Reifung) an, beeinflusst Schaumstabilität und Textur über Zeit.",
          nl: "Laplace druk creëert hogere druk binnen kleinere luchtbellen, drijft gasdiffusie van kleine naar grote bellen (Ostwald rijping), beïnvloedt schuimstabiliteit en textuur over tijd."
        }
      },
      {
        question: {
          en: "What is the role of Maxwell-Stefan diffusion in flavor release from ice cream?",
          es: "¿Cuál es el papel de la difusión Maxwell-Stefan en la liberación de sabor del helado?",
          de: "Welche Rolle spielt Maxwell-Stefan-Diffusion bei der Geschmacksfreisetzung aus Eis?",
          nl: "Wat is de rol van Maxwell-Stefan diffusie in smaakafgifte uit ijs?"
        },
        options: [
          { en: "No role in flavor release", es: "Ningún papel en liberación de sabor", de: "Keine Rolle bei Geschmacksfreisetzung", nl: "Geen rol in smaakafgifte" },
          { en: "Describes multicomponent mass transfer of aroma compounds", es: "Describe transferencia de masa multicomponente de compuestos aromáticos", de: "Beschreibt Mehrkomponenten-Stoffübertragung von Aromastoffen", nl: "Beschrijft multicomponent massaoverdracht van aromaverbindingen" },
          { en: "Only affects temperature distribution", es: "Solo afecta distribución de temperatura", de: "Beeinflusst nur Temperaturverteilung", nl: "Beïnvloedt alleen temperatuurverdeling" },
          { en: "Controls ice crystal formation", es: "Controla formación de cristales de hielo", de: "Kontrolliert Eiskristallbildung", nl: "Controleert ijskristal vorming" }
        ],
        correct: 1,
        explanation: {
          en: "Maxwell-Stefan equations describe the complex mass transfer of multiple aroma compounds with different volatilities and interactions, governing flavor release kinetics during consumption.",
          es: "Las ecuaciones Maxwell-Stefan describen la transferencia de masa compleja de múltiples compuestos aromáticos con diferentes volatilidades e interacciones, gobernando cinéticas de liberación de sabor durante consumo.",
          de: "Maxwell-Stefan-Gleichungen beschreiben den komplexen Stofftransport mehrerer Aromastoffe mit unterschiedlichen Flüchtigkeiten und Wechselwirkungen, regeln Geschmacksfreisetzungskinetik beim Verzehr.",
          nl: "Maxwell-Stefan vergelijkingen beschrijven de complexe massaoverdracht van meerdere aromaverbindingen met verschillende vluchtigheid en interacties, beheersen smaakafgiftekinetiek tijdens consumptie."
        }
      },
      {
        question: {
          en: "What is the significance of the Peclet number in ice cream heat and mass transfer?",
          es: "¿Cuál es la significancia del número Peclet en transferencia de calor y masa del helado?",
          de: "Was ist die Bedeutung der Peclet-Zahl bei Wärme- und Stoffübertragung in Eis?",
          nl: "Wat is de betekenis van het Peclet getal in ijs warmte- en massaoverdracht?"
        },
        options: [
          { en: "Not relevant to ice cream processing", es: "No relevante para procesamiento de helado", de: "Nicht relevant für Eisverarbeitung", nl: "Niet relevant voor ijsverwerking" },
          { en: "Ratio of convective to diffusive transport rates", es: "Proporción de tasas de transporte convectivo a difusivo", de: "Verhältnis von konvektivem zu diffusivem Transportraten", nl: "Verhouding van convectieve tot diffusieve transportsnelheden" },
          { en: "Only measures temperature gradients", es: "Solo mide gradientes de temperatura", de: "Misst nur Temperaturgradienten", nl: "Meet alleen temperatuurgradiënten" },
          { en: "Determines only fat content", es: "Determina solo contenido de grasa", de: "Bestimmt nur Fettgehalt", nl: "Bepaalt alleen vetgehalte" }
        ],
        correct: 1,
        explanation: {
          en: "The Peclet number characterizes the relative importance of convective versus diffusive transport, crucial for understanding heat transfer during freezing and mass transfer during mixing and storage.",
          es: "El número Peclet caracteriza la importancia relativa del transporte convectivo versus difusivo, crucial para entender transferencia de calor durante congelación y transferencia de masa durante mezcla y almacenamiento.",
          de: "Die Peclet-Zahl charakterisiert die relative Bedeutung von konvektivem versus diffusivem Transport, entscheidend für das Verständnis von Wärmeübertragung beim Gefrieren und Stoffübertragung beim Mischen und Lagern.",
          nl: "Het Peclet getal karakteriseert het relatieve belang van convectief versus diffusief transport, cruciaal voor het begrijpen van warmteoverdracht tijdens bevriezen en massaoverdracht tijdens mengen en opslag."
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