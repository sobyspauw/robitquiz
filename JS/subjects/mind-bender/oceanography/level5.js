// Oceanography - Level 5: Chemical Oceanography
(function() {
  const level5 = {
  name: {
    en: "Chemical Oceanography",
    es: "Oceanografía Química",
    de: "Chemische Ozeanographie",
    nl: "Chemische Oceanografie"
  },
  questions: [
    {
      question: {
        en: "What is the average salinity of seawater?",
        es: "¿Cuál es la salinidad promedio del agua de mar?",
        de: "Wie ist die durchschnittliche Salinität von Meerwasser?",
        nl: "Wat is het gemiddelde zoutgehalte van zeewater?"
      },
      options: [
        { en: "25 ppt", es: "25 ppt", de: "25 ppt", nl: "25 ppt" },
        { en: "35 ppt", es: "35 ppt", de: "35 ppt", nl: "35 ppt" },
        { en: "45 ppt", es: "45 ppt", de: "45 ppt", nl: "45 ppt" },
        { en: "55 ppt", es: "55 ppt", de: "55 ppt", nl: "55 ppt" }
      ],
      correct: 1,
      explanation: {
        en: "The average salinity of seawater is approximately 35 parts per thousand (ppt), meaning there are about 35 grams of dissolved salts in every 1000 grams of seawater.",
        es: "La salinidad promedio del agua de mar es aproximadamente 35 partes por mil (ppt), lo que significa que hay alrededor de 35 gramos de sales disueltas en cada 1000 gramos de agua de mar.",
        de: "Die durchschnittliche Salinität von Meerwasser beträgt etwa 35 Promille (ppt), das bedeutet etwa 35 Gramm gelöste Salze in 1000 Gramm Meerwasser.",
        nl: "Het gemiddelde zoutgehalte van zeewater is ongeveer 35 promille (ppt), wat betekent dat er ongeveer 35 gram opgeloste zouten zit in elke 1000 gram zeewater."
      }
    },
    {
      question: {
        en: "What is the most abundant ion in seawater?",
        es: "¿Cuál es el ion más abundante en el agua de mar?",
        de: "Was ist das häufigste Ion im Meerwasser?",
        nl: "Wat is het meest voorkomende ion in zeewater?"
      },
      options: [
        { en: "Sodium (Na⁺)", es: "Sodio (Na⁺)", de: "Natrium (Na⁺)", nl: "Natrium (Na⁺)" },
        { en: "Chloride (Cl⁻)", es: "Cloruro (Cl⁻)", de: "Chlorid (Cl⁻)", nl: "Chloride (Cl⁻)" },
        { en: "Magnesium (Mg²⁺)", es: "Magnesio (Mg²⁺)", de: "Magnesium (Mg²⁺)", nl: "Magnesium (Mg²⁺)" },
        { en: "Sulfate (SO₄²⁻)", es: "Sulfato (SO₄²⁻)", de: "Sulfat (SO₄²⁻)", nl: "Sulfaat (SO₄²⁻)" }
      ],
      correct: 1,
      explanation: {
        en: "Chloride (Cl⁻) is the most abundant ion in seawater, making up about 55% of all dissolved ions, followed by sodium (Na⁺) at about 31%.",
        es: "El cloruro (Cl⁻) es el ion más abundante en el agua de mar, constituyendo alrededor del 55% de todos los iones disueltos, seguido por el sodio (Na⁺) con alrededor del 31%.",
        de: "Chlorid (Cl⁻) ist das häufigste Ion im Meerwasser und macht etwa 55% aller gelösten Ionen aus, gefolgt von Natrium (Na⁺) mit etwa 31%.",
        nl: "Chloride (Cl⁻) is het meest voorkomende ion in zeewater, goed voor ongeveer 55% van alle opgeloste ionen, gevolgd door natrium (Na⁺) met ongeveer 31%."
      }
    },
    {
      question: {
        en: "What is the pH range of typical ocean water?",
        es: "¿Cuál es el rango de pH del agua oceánica típica?",
        de: "Was ist der pH-Bereich von typischem Ozeanwasser?",
        nl: "Wat is het pH-bereik van typisch oceaanwater?"
      },
      options: [
        { en: "6.5-7.0", es: "6.5-7.0", de: "6.5-7.0", nl: "6.5-7.0" },
        { en: "7.5-8.5", es: "7.5-8.5", de: "7.5-8.5", nl: "7.5-8.5" },
        { en: "8.0-8.3", es: "8.0-8.3", de: "8.0-8.3", nl: "8.0-8.3" },
        { en: "9.0-9.5", es: "9.0-9.5", de: "9.0-9.5", nl: "9.0-9.5" }
      ],
      correct: 2,
      explanation: {
        en: "Ocean water is slightly alkaline with a pH typically ranging from 8.0 to 8.3, though this is decreasing due to ocean acidification from increased atmospheric CO₂.",
        es: "El agua oceánica es ligeramente alcalina con un pH que típicamente oscila entre 8.0 y 8.3, aunque está disminuyendo debido a la acidificación oceánica por el aumento de CO₂ atmosférico.",
        de: "Ozeanwasser ist leicht alkalisch mit einem pH-Wert zwischen 8.0 und 8.3, obwohl dieser aufgrund der Ozeanversauerung durch erhöhtes atmosphärisches CO₂ abnimmt.",
        nl: "Oceaanwater is licht alkalisch met een pH die typisch varieert van 8.0 tot 8.3, hoewel dit afneemt door oceaan verzuring vanwege verhoogde atmosferische CO₂."
      }
    },
    {
      question: {
        en: "What process controls the oxygen content in deep ocean waters?",
        es: "¿Qué proceso controla el contenido de oxígeno en las aguas oceánicas profundas?",
        de: "Welcher Prozess kontrolliert den Sauerstoffgehalt in tiefen Ozeangewässern?",
        nl: "Welk proces controleert het zuurstofgehalte in diepe oceaanwateren?"
      },
      options: [
        { en: "Photosynthesis by deep-sea algae", es: "Fotosíntesis por algas de aguas profundas", de: "Photosynthese durch Tiefsee-Algen", nl: "Fotosynthese door diepzee algen" },
        { en: "Biological oxygen consumption and water mass circulation", es: "Consumo biológico de oxígeno y circulación de masas de agua", de: "Biologischer Sauerstoffverbrauch und Wassermassenzirkulation", nl: "Biologisch zuurstofverbruik en watermassa circulatie" },
        { en: "Thermal decomposition", es: "Descomposición térmica", de: "Thermische Zersetzung", nl: "Thermische decompositie" },
        { en: "Chemical reactions with seafloor sediments", es: "Reacciones químicas con sedimentos del fondo marino", de: "Chemische Reaktionen mit Meeresbodensedimenten", nl: "Chemische reacties met zeebodem sedimenten" }
      ],
      correct: 1,
      explanation: {
        en: "Deep ocean oxygen content is controlled by biological oxygen consumption (respiration and decomposition) and the circulation of water masses that bring oxygen-rich water from the surface.",
        es: "El contenido de oxígeno en el océano profundo está controlado por el consumo biológico de oxígeno (respiración y descomposición) y la circulación de masas de agua que traen agua rica en oxígeno desde la superficie.",
        de: "Der Sauerstoffgehalt im tiefen Ozean wird durch biologischen Sauerstoffverbrauch (Atmung und Zersetzung) und die Zirkulation von Wassermassen kontrolliert, die sauerstoffreiches Wasser von der Oberfläche bringen.",
        nl: "Het zuurstofgehalte in de diepe oceaan wordt gecontroleerd door biologisch zuurstofverbruik (ademhaling en decompositie) en de circulatie van watermassa's die zuurstofrijk water van het oppervlak brengen."
      }
    },
    {
      question: {
        en: "What is the carbonate compensation depth (CCD)?",
        es: "¿Qué es la profundidad de compensación de carbonatos (PCC)?",
        de: "Was ist die Karbonat-Kompensationstiefe (CCD)?",
        nl: "Wat is de carbonaat compensatie diepte (CCD)?"
      },
      options: [
        { en: "The depth where temperature equals 4°C", es: "La profundidad donde la temperatura es igual a 4°C", de: "Die Tiefe, wo die Temperatur 4°C beträgt", nl: "De diepte waar temperatuur gelijk is aan 4°C" },
        { en: "The depth where calcium carbonate dissolves as fast as it settles", es: "La profundidad donde el carbonato de calcio se disuelve tan rápido como se deposita", de: "Die Tiefe, wo sich Kalziumkarbonat so schnell auflöst wie es sich absetzt", nl: "De diepte waar calciumcarbonaat oplost zo snel als het bezinkt" },
        { en: "The maximum depth of photosynthesis", es: "La profundidad máxima de la fotosíntesis", de: "Die maximale Tiefe der Photosynthese", nl: "De maximale diepte van fotosynthese" },
        { en: "The depth of highest salinity", es: "La profundidad de mayor salinidad", de: "Die Tiefe der höchsten Salinität", nl: "De diepte van hoogste saliniteit" }
      ],
      correct: 1,
      explanation: {
        en: "The carbonate compensation depth (CCD) is the ocean depth where the rate of calcium carbonate dissolution equals the rate of calcium carbonate supply, typically around 3000-5000m depth.",
        es: "La profundidad de compensación de carbonatos (PCC) es la profundidad oceánica donde la tasa de disolución del carbonato de calcio es igual a la tasa de suministro de carbonato de calcio, típicamente alrededor de 3000-5000m de profundidad.",
        de: "Die Karbonat-Kompensationstiefe (CCD) ist die Ozeantiefe, wo die Rate der Kalziumkarbonat-Auflösung der Rate der Kalziumkarbonat-Zufuhr entspricht, typischerweise um 3000-5000m Tiefe.",
        nl: "De carbonaat compensatie diepte (CCD) is de oceaandiepte waar de snelheid van calciumcarbonaat oplossing gelijk is aan de snelheid van calciumcarbonaat aanvoer, typisch rond 3000-5000m diepte."
      }
    },
    {
      question: {
        en: "What causes the formation of oxygen minimum zones (OMZs) in oceans?",
        es: "¿Qué causa la formación de zonas de mínimo oxígeno (ZMO) en los océanos?",
        de: "Was verursacht die Bildung von Sauerstoff-Minimum-Zonen (SMZ) in den Ozeanen?",
        nl: "Wat veroorzaakt de vorming van zuurstof minimum zones (ZMZ) in oceanen?"
      },
      options: [
        { en: "High rates of organic matter decomposition and limited water circulation", es: "Altas tasas de descomposición de materia orgánica y circulación limitada del agua", de: "Hohe Raten organischer Materiezersetzung und begrenzte Wasserzirkulation", nl: "Hoge snelheden van organische materie decompositie en beperkte watercirculatie" },
        { en: "Cold water temperatures", es: "Temperaturas frías del agua", de: "Kalte Wassertemperaturen", nl: "Koude watertemperaturen" },
        { en: "High salinity concentrations", es: "Altas concentraciones de salinidad", de: "Hohe Salzkonzentrationen", nl: "Hoge zoutconcentraties" },
        { en: "Increased photosynthesis", es: "Aumento de la fotosíntesis", de: "Erhöhte Photosynthese", nl: "Verhoogde fotosynthese" }
      ],
      correct: 0,
      explanation: {
        en: "Oxygen minimum zones form when high rates of organic matter decomposition consume oxygen faster than it can be replenished, combined with limited water circulation that prevents oxygen-rich water mixing.",
        es: "Las zonas de mínimo oxígeno se forman cuando altas tasas de descomposición de materia orgánica consumen oxígeno más rápido de lo que puede reponerse, combinado con circulación limitada del agua que previene la mezcla de agua rica en oxígeno.",
        de: "Sauerstoff-Minimum-Zonen entstehen, wenn hohe Raten organischer Materiezersetzung Sauerstoff schneller verbrauchen als er nachgefüllt werden kann, kombiniert mit begrenzter Wasserzirkulation, die sauerstoffreiche Wassermischung verhindert.",
        nl: "Zuurstof minimum zones vormen wanneer hoge snelheden van organische materie decompositie zuurstof verbruiken sneller dan het kan worden aangevuld, gecombineerd met beperkte watercirculatie die zuurstofrijke watermenging verhindert."
      }
    },
    {
      question: {
        en: "Which element is often the limiting nutrient for marine primary production?",
        es: "¿Qué elemento es a menudo el nutriente limitante para la producción primaria marina?",
        de: "Welches Element ist oft der limitierende Nährstoff für marine Primärproduktion?",
        nl: "Welk element is vaak de limiterende nutriënt voor mariene primaire productie?"
      },
      options: [
        { en: "Carbon", es: "Carbono", de: "Kohlenstoff", nl: "Koolstof" },
        { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
        { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
        { en: "Hydrogen", es: "Hidrógeno", de: "Wasserstoff", nl: "Waterstof" }
      ],
      correct: 1,
      explanation: {
        en: "Nitrogen is often the limiting nutrient for marine primary production, as phytoplankton require nitrogen for protein synthesis and growth, but available nitrogen forms are often scarce in seawater.",
        es: "El nitrógeno es a menudo el nutriente limitante para la producción primaria marina, ya que el fitoplancton requiere nitrógeno para la síntesis de proteínas y el crecimiento, pero las formas disponibles de nitrógeno son a menudo escasas en el agua de mar.",
        de: "Stickstoff ist oft der limitierende Nährstoff für marine Primärproduktion, da Phytoplankton Stickstoff für Proteinsynthese und Wachstum benötigt, aber verfügbare Stickstoffformen im Meerwasser oft knapp sind.",
        nl: "Stikstof is vaak de limiterende nutriënt voor mariene primaire productie, omdat fytoplankton stikstof nodig heeft voor eiwitsynthese en groei, maar beschikbare stikstofvormen zijn vaak schaars in zeewater."
      }
    },
    {
      question: {
        en: "What is the primary source of dissolved organic carbon (DOC) in the ocean?",
        es: "¿Cuál es la fuente principal de carbono orgánico disuelto (COD) en el océano?",
        de: "Was ist die Hauptquelle von gelöstem organischem Kohlenstoff (DOC) im Ozean?",
        nl: "Wat is de primaire bron van opgelost organisch koolstof (DOC) in de oceaan?"
      },
      options: [
        { en: "River inputs", es: "Aportes de ríos", de: "Flusseintrag", nl: "Rivier input" },
        { en: "Marine phytoplankton excretion and cell lysis", es: "Excreción de fitoplancton marino y lisis celular", de: "Marine Phytoplankton-Ausscheidung und Zelllyse", nl: "Mariene fytoplankton uitscheiding en cel lyse" },
        { en: "Hydrothermal vents", es: "Fuentes hidrotermales", de: "Hydrothermalquellen", nl: "Hydrothermale bronnen" },
        { en: "Atmospheric deposition", es: "Deposición atmosférica", de: "Atmosphärische Ablagerung", nl: "Atmosferische depositie" }
      ],
      correct: 1,
      explanation: {
        en: "Marine phytoplankton are the primary source of dissolved organic carbon (DOC) through excretion of organic compounds and cell lysis, contributing the majority of DOC in ocean waters.",
        es: "El fitoplancton marino es la fuente principal de carbono orgánico disuelto (COD) a través de la excreción de compuestos orgánicos y la lisis celular, contribuyendo con la mayoría del COD en las aguas oceánicas.",
        de: "Marines Phytoplankton ist die Hauptquelle von gelöstem organischem Kohlenstoff (DOC) durch Ausscheidung organischer Verbindungen und Zelllyse, was den Großteil des DOC in Ozeangewässern beiträgt.",
        nl: "Mariene fytoplankton zijn de primaire bron van opgelost organisch koolstof (DOC) door uitscheiding van organische verbindingen en cel lyse, bijdragend aan de meerderheid van DOC in oceaanwateren."
      }
    },
    {
      question: {
        en: "What is the typical residence time of water in the deep ocean?",
        es: "¿Cuál es el tiempo de residencia típico del agua en el océano profundo?",
        de: "Wie ist die typische Verweilzeit von Wasser im tiefen Ozean?",
        nl: "Wat is de typische verblijftijd van water in de diepe oceaan?"
      },
      options: [
        { en: "1-10 years", es: "1-10 años", de: "1-10 Jahre", nl: "1-10 jaar" },
        { en: "100-500 years", es: "100-500 años", de: "100-500 Jahre", nl: "100-500 jaar" },
        { en: "500-1500 years", es: "500-1500 años", de: "500-1500 Jahre", nl: "500-1500 jaar" },
        { en: "5000+ years", es: "5000+ años", de: "5000+ Jahre", nl: "5000+ jaar" }
      ],
      correct: 2,
      explanation: {
        en: "The typical residence time of deep ocean water is 500-1500 years, reflecting the slow circulation of deep water masses formed in polar regions and their gradual mixing with other water masses.",
        es: "El tiempo de residencia típico del agua del océano profundo es de 500-1500 años, reflejando la lenta circulación de masas de agua profunda formadas en regiones polares y su mezcla gradual con otras masas de agua.",
        de: "Die typische Verweilzeit von tiefem Ozeanwasser beträgt 500-1500 Jahre, was die langsame Zirkulation tiefer Wassermassen widerspiegelt, die in polaren Regionen gebildet werden und sich allmählich mit anderen Wassermassen vermischen.",
        nl: "De typische verblijftijd van diep oceaanwater is 500-1500 jaar, wat de langzame circulatie weergeeft van diepe watermassa's gevormd in polaire gebieden en hun geleidelijke menging met andere watermassa's."
      }
    },
    {
      question: {
        en: "What is eutrophication in marine environments?",
        es: "¿Qué es la eutrofización en ambientes marinos?",
        de: "Was ist Eutrophierung in marinen Umgebungen?",
        nl: "Wat is eutrofiëring in mariene omgevingen?"
      },
      options: [
        { en: "Decrease in water temperature", es: "Disminución en la temperatura del agua", de: "Abnahme der Wassertemperatur", nl: "Afname van watertemperatuur" },
        { en: "Excessive nutrient enrichment leading to algal blooms", es: "Enriquecimiento excesivo de nutrientes que conduce a floraciones de algas", de: "Übermäßige Nährstoffanreicherung, die zu Algenblüten führt", nl: "Overmatige nutriënt verrijking leidend tot algenbloeien" },
        { en: "Increase in water salinity", es: "Aumento en la salinidad del agua", de: "Zunahme der Wassersalinität", nl: "Toename van water saliniteit" },
        { en: "Loss of dissolved oxygen", es: "Pérdida de oxígeno disuelto", de: "Verlust von gelöstem Sauerstoff", nl: "Verlies van opgelost zuurstof" }
      ],
      correct: 1,
      explanation: {
        en: "Eutrophication is the excessive enrichment of marine waters with nutrients (especially nitrogen and phosphorus), often from agricultural runoff, leading to harmful algal blooms and ecosystem disruption.",
        es: "La eutrofización es el enriquecimiento excesivo de aguas marinas con nutrientes (especialmente nitrógeno y fósforo), a menudo por escorrentía agrícola, llevando a floraciones de algas dañinas y disrupción del ecosistema.",
        de: "Eutrophierung ist die übermäßige Anreicherung von Meeresgewässern mit Nährstoffen (besonders Stickstoff und Phosphor), oft durch landwirtschaftliche Abflüsse, was zu schädlichen Algenblüten und Ökosystemstörungen führt.",
        nl: "Eutrofiëring is de overmatige verrijking van mariene wateren met nutriënten (vooral stikstof en fosfor), vaak van landbouw afstroom, leidend tot schadelijke algenbloeien en ecosysteem verstoring."
      }
    },
    {
      question: {
        en: "What is ocean acidification primarily caused by?",
        es: "¿Qué causa principalmente la acidificación oceánica?",
        de: "Was verursacht hauptsächlich die Ozeanversauerung?",
        nl: "Wat veroorzaakt voornamelijk oceaan verzuring?"
      },
      options: [
        { en: "Absorption of atmospheric CO₂", es: "Absorción de CO₂ atmosférico", de: "Aufnahme von atmosphärischem CO₂", nl: "Absorptie van atmosferisch CO₂" },
        { en: "Industrial waste discharge", es: "Descarga de residuos industriales", de: "Industrielle Abfallentsorgung", nl: "Industriële afvallozing" },
        { en: "Volcanic eruptions", es: "Erupciones volcánicas", de: "Vulkanausbrüche", nl: "Vulkanische uitbarstingen" },
        { en: "Melting ice caps", es: "Derretimiento de casquetes de hielo", de: "Schmelzende Eiskappen", nl: "Smeltende ijskappen" }
      ],
      correct: 0,
      explanation: {
        en: "Ocean acidification is primarily caused by the absorption of excess atmospheric CO₂, which forms carbonic acid in seawater, lowering the ocean's pH and reducing carbonate ion availability.",
        es: "La acidificación oceánica es causada principalmente por la absorción de CO₂ atmosférico excesivo, que forma ácido carbónico en el agua de mar, disminuyendo el pH del océano y reduciendo la disponibilidad de iones carbonato.",
        de: "Die Ozeanversauerung wird hauptsächlich durch die Aufnahme von überschüssigem atmosphärischem CO₂ verursacht, das Kohlensäure im Meerwasser bildet, den pH-Wert des Ozeans senkt und die Karbonat-Ionen-Verfügbarkeit reduziert.",
        nl: "Oceaan verzuring wordt voornamelijk veroorzaakt door de absorptie van overtollig atmosferisch CO₂, dat koolzuur vormt in zeewater, de pH van de oceaan verlaagt en carbonaat ion beschikbaarheid vermindert."
      }
    },
    {
      question: {
        en: "What is the biological pump in oceanography?",
        es: "¿Qué es la bomba biológica en oceanografía?",
        de: "Was ist die biologische Pumpe in der Ozeanographie?",
        nl: "Wat is de biologische pomp in oceanografie?"
      },
      options: [
        { en: "Transport of carbon from surface to deep ocean via marine organisms", es: "Transporte de carbono desde la superficie al océano profundo a través de organismos marinos", de: "Transport von Kohlenstoff von der Oberfläche zum tiefen Ozean durch Meeresorganismen", nl: "Transport van koolstof van oppervlak naar diepe oceaan via mariene organismen" },
        { en: "Circulation of water masses", es: "Circulación de masas de agua", de: "Zirkulation von Wassermassen", nl: "Circulatie van watermassa's" },
        { en: "Oxygen production by phytoplankton", es: "Producción de oxígeno por fitoplancton", de: "Sauerstoffproduktion durch Phytoplankton", nl: "Zuurstofproductie door fytoplankton" },
        { en: "Nutrient upwelling", es: "Surgencia de nutrientes", de: "Nährstoff-Auftrieb", nl: "Nutriënt opwelling" }
      ],
      correct: 0,
      explanation: {
        en: "The biological pump is the process by which marine organisms transfer carbon from the surface ocean to deep waters through photosynthesis, death, and sinking of organic matter.",
        es: "La bomba biológica es el proceso por el cual los organismos marinos transfieren carbono desde la superficie del océano a aguas profundas a través de la fotosíntesis, muerte y hundimiento de materia orgánica.",
        de: "Die biologische Pumpe ist der Prozess, durch den Meeresorganismen Kohlenstoff von der Ozeanoberfläche in tiefe Gewässer durch Photosynthese, Tod und Absinken organischer Materie transportieren.",
        nl: "De biologische pomp is het proces waarbij mariene organismen koolstof overbrengen van het oceaanoppervlak naar diepe wateren door fotosynthese, dood en zinken van organisch materiaal."
      }
    },
    {
      question: {
        en: "What determines the aragonite saturation state in seawater?",
        es: "¿Qué determina el estado de saturación de aragonita en agua de mar?",
        de: "Was bestimmt den Aragonit-Sättigungszustand im Meerwasser?",
        nl: "Wat bepaalt de aragoniet verzadigingsstatus in zeewater?"
      },
      options: [
        { en: "Temperature and salinity only", es: "Solo temperatura y salinidad", de: "Nur Temperatur und Salinität", nl: "Alleen temperatuur en saliniteit" },
        { en: "Carbonate and calcium ion concentrations, pH, temperature, and pressure", es: "Concentraciones de iones carbonato y calcio, pH, temperatura y presión", de: "Karbonat- und Kalzium-Ionenkonzentrationen, pH, Temperatur und Druck", nl: "Carbonaat en calcium ion concentraties, pH, temperatuur en druk" },
        { en: "Oxygen levels only", es: "Solo niveles de oxígeno", de: "Nur Sauerstoffwerte", nl: "Alleen zuurstofniveaus" },
        { en: "Nutrient availability", es: "Disponibilidad de nutrientes", de: "Nährstoffverfügbarkeit", nl: "Nutriënt beschikbaarheid" }
      ],
      correct: 1,
      explanation: {
        en: "Aragonite saturation state depends on carbonate and calcium ion concentrations, pH, temperature, and pressure. Lower pH from ocean acidification reduces aragonite saturation, affecting shell-forming organisms.",
        es: "El estado de saturación de aragonita depende de las concentraciones de iones carbonato y calcio, pH, temperatura y presión. Un pH más bajo por la acidificación oceánica reduce la saturación de aragonita, afectando a organismos que forman conchas.",
        de: "Der Aragonit-Sättigungszustand hängt von Karbonat- und Kalzium-Ionenkonzentrationen, pH, Temperatur und Druck ab. Ein niedrigerer pH durch Ozeanversauerung reduziert die Aragonit-Sättigung und beeinflusst schalenbildende Organismen.",
        nl: "Aragoniet verzadigingsstatus hangt af van carbonaat en calcium ion concentraties, pH, temperatuur en druk. Lagere pH door oceaan verzuring vermindert aragoniet verzadiging, wat schelp-vormende organismen beïnvloedt."
      }
    },
    {
      question: {
        en: "What is the redoxcline in marine chemistry?",
        es: "¿Qué es la redoxclina en química marina?",
        de: "Was ist die Redoxkline in der Meereschemie?",
        nl: "Wat is de redoxcline in mariene chemie?"
      },
      options: [
        { en: "The boundary between oxic and anoxic waters", es: "La frontera entre aguas óxicas y anóxicas", de: "Die Grenze zwischen oxischen und anoxischen Gewässern", nl: "De grens tussen zuurstofrijke en zuurstofloze wateren" },
        { en: "The thermocline boundary", es: "La frontera de la termoclina", de: "Die Thermoklingrenze", nl: "De thermocline grens" },
        { en: "The halocline boundary", es: "La frontera de la haloclina", de: "Die Haloklingrenze", nl: "De halocline grens" },
        { en: "The pycnocline boundary", es: "La frontera de la picnoclina", de: "Die Pyknoklingrenze", nl: "De pycnocline grens" }
      ],
      correct: 0,
      explanation: {
        en: "The redoxcline is the boundary zone between oxygen-rich (oxic) and oxygen-depleted (anoxic) waters, where redox chemistry changes dramatically, affecting the cycling of many elements.",
        es: "La redoxclina es la zona fronteriza entre aguas ricas en oxígeno (óxicas) y aguas empobrecidas en oxígeno (anóxicas), donde la química redox cambia dramáticamente, afectando el ciclo de muchos elementos.",
        de: "Die Redoxkline ist die Grenzzone zwischen sauerstoffreichen (oxischen) und sauerstoffarmen (anoxischen) Gewässern, wo sich die Redox-Chemie dramatisch ändert und den Kreislauf vieler Elemente beeinflusst.",
        nl: "De redoxcline is de grenszone tussen zuurstofrijke (oxische) en zuurstofloze (anoxische) wateren, waar redox chemie dramatisch verandert, wat de cyclus van vele elementen beïnvloedt."
      }
    },
    {
      question: {
        en: "What is the role of iron in marine primary productivity?",
        es: "¿Cuál es el papel del hierro en la productividad primaria marina?",
        de: "Welche Rolle spielt Eisen in der marinen Primärproduktivität?",
        nl: "Wat is de rol van ijzer in mariene primaire productiviteit?"
      },
      options: [
        { en: "Essential micronutrient for photosynthesis and nitrogen fixation", es: "Micronutriente esencial para la fotosíntesis y fijación de nitrógeno", de: "Essentieller Mikronährstoff für Photosynthese und Stickstofffixierung", nl: "Essentiële micronutriënt voor fotosynthese en stikstoffixatie" },
        { en: "Only needed for shell formation", es: "Solo necesario para la formación de conchas", de: "Nur für Schalenbildung benötigt", nl: "Alleen nodig voor schelpvorming" },
        { en: "Has no biological function", es: "No tiene función biológica", de: "Hat keine biologische Funktion", nl: "Heeft geen biologische functie" },
        { en: "Only affects water color", es: "Solo afecta el color del agua", de: "Beeinflusst nur die Wasserfarbe", nl: "Beïnvloedt alleen waterkleur" }
      ],
      correct: 0,
      explanation: {
        en: "Iron is an essential micronutrient for marine phytoplankton, required for photosynthesis, nitrogen fixation, and other metabolic processes. Iron limitation can restrict primary productivity in large ocean regions.",
        es: "El hierro es un micronutriente esencial para el fitoplancton marino, requerido para la fotosíntesis, fijación de nitrógeno y otros procesos metabólicos. La limitación de hierro puede restringir la productividad primaria en grandes regiones oceánicas.",
        de: "Eisen ist ein essentieller Mikronährstoff für marines Phytoplankton, erforderlich für Photosynthese, Stickstofffixierung und andere Stoffwechselprozesse. Eisenmangel kann die Primärproduktivität in großen Ozeangebieten einschränken.",
        nl: "IJzer is een essentiële micronutriënt voor mariene fytoplankton, vereist voor fotosynthese, stikstoffixatie en andere metabolische processen. IJzer beperking kan primaire productiviteit in grote oceaangebieden beperken."
      }
    },
    {
      question: {
        en: "What is denitrification in marine environments?",
        es: "¿Qué es la desnitrificación en ambientes marinos?",
        de: "Was ist Denitrifikation in marinen Umgebungen?",
        nl: "Wat is denitrificatie in mariene omgevingen?"
      },
      options: [
        { en: "Reduction of nitrate to nitrogen gas under oxygen-depleted conditions", es: "Reducción de nitrato a gas nitrógeno bajo condiciones empobrecidas en oxígeno", de: "Reduktion von Nitrat zu Stickstoffgas unter sauerstoffarmen Bedingungen", nl: "Reductie van nitraat naar stikstofgas onder zuurstofloze omstandigheden" },
        { en: "Conversion of ammonia to nitrate", es: "Conversión de amoníaco a nitrato", de: "Umwandlung von Ammoniak zu Nitrat", nl: "Omzetting van ammoniak naar nitraat" },
        { en: "Nitrogen fixation by bacteria", es: "Fijación de nitrógeno por bacterias", de: "Stickstofffixierung durch Bakterien", nl: "Stikstoffixatie door bacteriën" },
        { en: "Absorption of nitrogen by plants", es: "Absorción de nitrógeno por plantas", de: "Stickstoffaufnahme durch Pflanzen", nl: "Opname van stikstof door planten" }
      ],
      correct: 0,
      explanation: {
        en: "Denitrification is the microbial process that reduces nitrate (NO₃⁻) to nitrogen gas (N₂) under oxygen-depleted conditions, removing bioavailable nitrogen from marine ecosystems.",
        es: "La desnitrificación es el proceso microbiano que reduce nitrato (NO₃⁻) a gas nitrógeno (N₂) bajo condiciones empobrecidas en oxígeno, removiendo nitrógeno biodisponible de los ecosistemas marinos.",
        de: "Denitrifikation ist der mikrobielle Prozess, der Nitrat (NO₃⁻) zu Stickstoffgas (N₂) unter sauerstoffarmen Bedingungen reduziert und bioverfügbaren Stickstoff aus marinen Ökosystemen entfernt.",
        nl: "Denitrificatie is het microbiële proces dat nitraat (NO₃⁻) reduceert tot stikstofgas (N₂) onder zuurstofloze omstandigheden, waarbij biologisch beschikbare stikstof uit mariene ecosystemen wordt weggenomen."
      }
    },
    {
      question: {
        en: "What are dissolved inorganic carbon (DIC) species in seawater?",
        es: "¿Cuáles son las especies de carbono inorgánico disuelto (CID) en agua de mar?",
        de: "Was sind gelöste anorganische Kohlenstoff (DIC) Arten im Meerwasser?",
        nl: "Wat zijn opgelost anorganisch koolstof (DIC) soorten in zeewater?"
      },
      options: [
        { en: "CO₂, H₂CO₃, HCO₃⁻, and CO₃²⁻", es: "CO₂, H₂CO₃, HCO₃⁻, y CO₃²⁻", de: "CO₂, H₂CO₃, HCO₃⁻, und CO₃²⁻", nl: "CO₂, H₂CO₃, HCO₃⁻, en CO₃²⁻" },
        { en: "Only CO₂", es: "Solo CO₂", de: "Nur CO₂", nl: "Alleen CO₂" },
        { en: "Organic carbon compounds", es: "Compuestos de carbono orgánico", de: "Organische Kohlenstoffverbindungen", nl: "Organische koolstofverbindingen" },
        { en: "Methane only", es: "Solo metano", de: "Nur Methan", nl: "Alleen methaan" }
      ],
      correct: 0,
      explanation: {
        en: "Dissolved inorganic carbon (DIC) in seawater exists as four main species: dissolved CO₂, carbonic acid (H₂CO₃), bicarbonate ions (HCO₃⁻), and carbonate ions (CO₃²⁻), with their relative concentrations depending on pH.",
        es: "El carbono inorgánico disuelto (CID) en agua de mar existe como cuatro especies principales: CO₂ disuelto, ácido carbónico (H₂CO₃), iones bicarbonato (HCO₃⁻), e iones carbonato (CO₃²⁻), con sus concentraciones relativas dependiendo del pH.",
        de: "Gelöster anorganischer Kohlenstoff (DIC) im Meerwasser existiert als vier Hauptarten: gelöstes CO₂, Kohlensäure (H₂CO₃), Bikarbonat-Ionen (HCO₃⁻) und Karbonat-Ionen (CO₃²⁻), wobei ihre relativen Konzentrationen vom pH abhängen.",
        nl: "Opgelost anorganisch koolstof (DIC) in zeewater bestaat als vier hoofdsoorten: opgelost CO₂, koolzuur (H₂CO₃), bicarbonaat ionen (HCO₃⁻), en carbonaat ionen (CO₃²⁻), waarbij hun relatieve concentraties afhangen van pH."
      }
    },
    {
      question: {
        en: "What is the silicate pump in ocean biogeochemistry?",
        es: "¿Qué es la bomba de silicato en biogeoquímica oceánica?",
        de: "Was ist die Silikatpumpe in der ozeanischen Biogeochemie?",
        nl: "Wat is de silicaat pomp in oceaan biogeochemie?"
      },
      options: [
        { en: "Transport of silica from surface to deep waters via diatom sinking", es: "Transporte de sílice desde la superficie a aguas profundas a través del hundimiento de diatomeas", de: "Transport von Silizium von der Oberfläche zu tiefen Gewässern durch Diatomeen-Absinken", nl: "Transport van silica van oppervlak naar diepe wateren via diatomeeën zinken" },
        { en: "Silicon production by volcanoes", es: "Producción de silicio por volcanes", de: "Siliziumproduktion durch Vulkane", nl: "Silicium productie door vulkanen" },
        { en: "Weathering of rocks", es: "Meteorización de rocas", de: "Verwitterung von Gesteinen", nl: "Verwering van gesteenten" },
        { en: "River input of silica", es: "Aporte fluvial de sílice", de: "Flusseintrag von Silizium", nl: "Rivier input van silica" }
      ],
      correct: 0,
      explanation: {
        en: "The silicate pump is the biological process where diatoms (siliceous phytoplankton) extract dissolved silica from surface waters to build their frustules, then sink to deep waters when they die, transporting silica downward.",
        es: "La bomba de silicato es el proceso biológico donde las diatomeas (fitoplancton silíceo) extraen sílice disuelto de aguas superficiales para construir sus frústulos, luego se hunden a aguas profundas cuando mueren, transportando sílice hacia abajo.",
        de: "Die Silikatpumpe ist der biologische Prozess, bei dem Diatomeen (kieselsäurehaltiges Phytoplankton) gelöstes Silizium aus Oberflächengewässern extrahieren, um ihre Frusteln zu bauen, und dann in tiefe Gewässer absinken, wenn sie sterben, wodurch Silizium nach unten transportiert wird.",
        nl: "De silicaat pomp is het biologische proces waarbij diatomeeën (silicaat fytoplankton) opgelost silica uit oppervlaktewateren halen om hun frustules te bouwen, dan zinken naar diepe wateren wanneer ze sterven, silica naar beneden transporterend."
      }
    },
    {
      question: {
        en: "What is the alkalinity of seawater primarily composed of?",
        es: "¿De qué está compuesta principalmente la alcalinidad del agua de mar?",
        de: "Woraus besteht die Alkalinität von Meerwasser hauptsächlich?",
        nl: "Waaruit bestaat de alkaliniteit van zeewater voornamelijk?"
      },
      options: [
        { en: "Bicarbonate and carbonate ions", es: "Iones bicarbonato y carbonato", de: "Bikarbonat- und Karbonat-Ionen", nl: "Bicarbonaat en carbonaat ionen" },
        { en: "Sodium and chloride ions", es: "Iones sodio y cloruro", de: "Natrium- und Chlorid-Ionen", nl: "Natrium en chloride ionen" },
        { en: "Sulfate ions only", es: "Solo iones sulfato", de: "Nur Sulfat-Ionen", nl: "Alleen sulfaat ionen" },
        { en: "Dissolved organic matter", es: "Materia orgánica disuelta", de: "Gelöste organische Materie", nl: "Opgelost organisch materiaal" }
      ],
      correct: 0,
      explanation: {
        en: "Seawater alkalinity is primarily composed of bicarbonate (HCO₃⁻) and carbonate (CO₃²⁻) ions, which provide the buffering capacity that helps maintain ocean pH stability.",
        es: "La alcalinidad del agua de mar está compuesta principalmente por iones bicarbonato (HCO₃⁻) y carbonato (CO₃²⁻), que proporcionan la capacidad amortiguadora que ayuda a mantener la estabilidad del pH oceánico.",
        de: "Die Alkalinität von Meerwasser besteht hauptsächlich aus Bikarbonat- (HCO₃⁻) und Karbonat-Ionen (CO₃²⁻), die die Pufferkapazität bereitstellen, die hilft, die pH-Stabilität des Ozeans zu erhalten.",
        nl: "Zeewater alkaliniteit bestaat voornamelijk uit bicarbonaat (HCO₃⁻) en carbonaat (CO₃²⁻) ionen, die de buffercapaciteit bieden die helpt oceaan pH stabiliteit te behouden."
      }
    },
    {
      question: {
        en: "What is the main source of phosphorus in the oceans?",
        es: "¿Cuál es la principal fuente de fósforo en los océanos?",
        de: "Was ist die Hauptquelle von Phosphor in den Ozeanen?",
        nl: "Wat is de hoofdbron van fosfor in de oceanen?"
      },
      options: [
        { en: "Weathering of continental rocks and river runoff", es: "Meteorización de rocas continentales y escorrentía fluvial", de: "Verwitterung kontinentaler Gesteine und Flussabfluss", nl: "Verwering van continentale gesteenten en rivier afstroom" },
        { en: "Atmospheric deposition only", es: "Solo deposición atmosférica", de: "Nur atmosphärische Ablagerung", nl: "Alleen atmosferische depositie" },
        { en: "Hydrothermal vents only", es: "Solo fuentes hidrotermales", de: "Nur Hydrothermalquellen", nl: "Alleen hydrothermale bronnen" },
        { en: "Marine organism excretion", es: "Excreción de organismos marinos", de: "Ausscheidung mariner Organismen", nl: "Uitscheiding van mariene organismen" }
      ],
      correct: 0,
      explanation: {
        en: "The main source of phosphorus in oceans is the weathering of continental phosphorus-bearing rocks, with phosphorus transported to the ocean primarily through river runoff and to a lesser extent through atmospheric dust.",
        es: "La principal fuente de fósforo en los océanos es la meteorización de rocas continentales que contienen fósforo, con fósforo transportado al océano principalmente a través de escorrentía fluvial y en menor medida a través de polvo atmosférico.",
        de: "Die Hauptquelle von Phosphor in den Ozeanen ist die Verwitterung kontinentaler phosphorhaltiger Gesteine, wobei Phosphor hauptsächlich durch Flussabfluss und in geringerem Maße durch atmosphärischen Staub zum Ozean transportiert wird.",
        nl: "De hoofdbron van fosfor in oceanen is de verwering van continentale fosfor-bevattende gesteenten, waarbij fosfor naar de oceaan wordt getransporteerd voornamelijk door rivier afstroom en in mindere mate door atmosferisch stof."
      }
    },
    {
      question: {
        en: "What is the role of trace metals in marine ecosystems?",
        es: "¿Cuál es el papel de los metales traza en los ecosistemas marinos?",
        de: "Welche Rolle spielen Spurenmetalle in marinen Ökosystemen?",
        nl: "Wat is de rol van sporemetalen in mariene ecosystemen?"
      },
      options: [
        { en: "Essential micronutrients for enzyme function and metabolic processes", es: "Micronutrientes esenciales para la función enzimática y procesos metabólicos", de: "Essentielle Mikronährstoffe für Enzymfunktion und Stoffwechselprozesse", nl: "Essentiële micronutriënten voor enzym functie en metabolische processen" },
        { en: "Only toxic to marine life", es: "Solo tóxico para la vida marina", de: "Nur giftig für das Meeresleben", nl: "Alleen giftig voor marien leven" },
        { en: "No biological function", es: "Sin función biológica", de: "Keine biologische Funktion", nl: "Geen biologische functie" },
        { en: "Only structural components", es: "Solo componentes estructurales", de: "Nur strukturelle Komponenten", nl: "Alleen structurele componenten" }
      ],
      correct: 0,
      explanation: {
        en: "Trace metals like iron, zinc, copper, and manganese serve as essential micronutrients in marine ecosystems, acting as cofactors for enzymes and playing crucial roles in photosynthesis, nitrogen fixation, and other metabolic processes.",
        es: "Los metales traza como hierro, zinc, cobre y manganeso sirven como micronutrientes esenciales en ecosistemas marinos, actuando como cofactores para enzimas y jugando papeles cruciales en fotosíntesis, fijación de nitrógeno y otros procesos metabólicos.",
        de: "Spurenmetalle wie Eisen, Zink, Kupfer und Mangan dienen als essentielle Mikronährstoffe in marinen Ökosystemen, wirken als Cofaktoren für Enzyme und spielen entscheidende Rollen bei Photosynthese, Stickstofffixierung und anderen Stoffwechselprozessen.",
        nl: "Sporemetalen zoals ijzer, zink, koper en mangaan dienen als essentiële micronutriënten in mariene ecosystemen, werkend als cofactoren voor enzymen en spelend cruciale rollen in fotosynthese, stikstoffixatie en andere metabolische processen."
      }
    },
    {
      question: {
        en: "What is the difference between primary and new production in marine systems?",
        es: "¿Cuál es la diferencia entre producción primaria y nueva en sistemas marinos?",
        de: "Was ist der Unterschied zwischen Primär- und Neuproduktion in marinen Systemen?",
        nl: "Wat is het verschil tussen primaire en nieuwe productie in mariene systemen?"
      },
      options: [
        { en: "New production uses external nitrate, while primary production includes recycled nutrients", es: "La producción nueva usa nitrato externo, mientras que la producción primaria incluye nutrientes reciclados", de: "Neuproduktion nutzt externes Nitrat, während Primärproduktion recycelte Nährstoffe einschließt", nl: "Nieuwe productie gebruikt extern nitraat, terwijl primaire productie gerecyclede nutriënten omvat" },
        { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind das Gleiche", nl: "Het is hetzelfde" },
        { en: "Primary production occurs only in winter", es: "La producción primaria ocurre solo en invierno", de: "Primärproduktion findet nur im Winter statt", nl: "Primaire productie vindt alleen in winter plaats" },
        { en: "New production uses only recycled carbon", es: "La producción nueva usa solo carbono reciclado", de: "Neuproduktion nutzt nur recycelten Kohlenstoff", nl: "Nieuwe productie gebruikt alleen gerecycleerde koolstof" }
      ],
      correct: 0,
      explanation: {
        en: "New production is the portion of primary production fueled by nitrate from outside the euphotic zone, while total primary production includes both new production and regenerated production using recycled ammonium and urea.",
        es: "La producción nueva es la porción de producción primaria alimentada por nitrato de fuera de la zona eufótica, mientras que la producción primaria total incluye tanto producción nueva como producción regenerada usando amonio y urea reciclados.",
        de: "Neuproduktion ist der Teil der Primärproduktion, der durch Nitrat von außerhalb der euphotischen Zone angetrieben wird, während die gesamte Primärproduktion sowohl Neu- als auch regenerierte Produktion mit recyceltem Ammonium und Harnstoff umfasst.",
        nl: "Nieuwe productie is het deel van primaire productie gevoed door nitraat van buiten de euphotische zone, terwijl totale primaire productie zowel nieuwe productie als geregenereerde productie met gerecycleerd ammonium en ureum omvat."
      }
    },
    {
      question: {
        en: "What controls the distribution of nutrients in ocean water columns?",
        es: "¿Qué controla la distribución de nutrientes en las columnas de agua oceánica?",
        de: "Was kontrolliert die Verteilung von Nährstoffen in ozeanischen Wassersäulen?",
        nl: "Wat controleert de verdeling van nutriënten in oceaan waterkolommen?"
      },
      options: [
        { en: "Biological uptake, remineralization, and physical mixing", es: "Absorción biológica, remineralización y mezcla física", de: "Biologische Aufnahme, Remineralisierung und physikalische Mischung", nl: "Biologische opname, remineralisatie en fysieke menging" },
        { en: "Temperature only", es: "Solo temperatura", de: "Nur Temperatur", nl: "Alleen temperatuur" },
        { en: "Salinity only", es: "Solo salinidad", de: "Nur Salinität", nl: "Alleen saliniteit" },
        { en: "Ocean currents only", es: "Solo corrientes oceánicas", de: "Nur Meeresströmungen", nl: "Alleen oceaanstromingen" }
      ],
      correct: 0,
      explanation: {
        en: "Nutrient distribution in ocean water columns is controlled by biological uptake in surface waters, remineralization during organic matter decomposition, and physical processes like mixing, upwelling, and downwelling that redistribute nutrients vertically.",
        es: "La distribución de nutrientes en columnas de agua oceánica está controlada por la absorción biológica en aguas superficiales, remineralización durante la descomposición de materia orgánica, y procesos físicos como mezcla, surgencia y hundimiento que redistribuyen nutrientes verticalmente.",
        de: "Die Nährstoffverteilung in ozeanischen Wassersäulen wird durch biologische Aufnahme in Oberflächengewässern, Remineralisierung während der organischen Materie-Zersetzung und physikalische Prozesse wie Mischung, Auftrieb und Abtrieb kontrolliert, die Nährstoffe vertikal umverteilen.",
        nl: "Nutriënt verdeling in oceaan waterkolommen wordt gecontroleerd door biologische opname in oppervlaktewateren, remineralisatie tijdens organisch materiaal decompositie, en fysieke processen zoals menging, opwelling en neerwaartse stroming die nutriënten verticaal herverdelen."
      }
    },
    {
      question: {
        en: "What is the significance of the Redfield ratio in marine biogeochemistry?",
        es: "¿Cuál es la significancia de la proporción de Redfield en biogeoquímica marina?",
        de: "Was ist die Bedeutung des Redfield-Verhältnisses in der marinen Biogeochemie?",
        nl: "Wat is de betekenis van de Redfield ratio in mariene biogeochemie?"
      },
      options: [
        { en: "The C:N:P ratio (106:16:1) in marine organic matter and nutrient cycling", es: "La proporción C:N:P (106:16:1) en materia orgánica marina y ciclado de nutrientes", de: "Das C:N:P-Verhältnis (106:16:1) in mariner organischer Materie und Nährstoffkreislauf", nl: "De C:N:P ratio (106:16:1) in mariene organische materie en nutriënt cycling" },
        { en: "The ratio of oxygen to carbon dioxide", es: "La proporción de oxígeno a dióxido de carbono", de: "Das Verhältnis von Sauerstoff zu Kohlendioxid", nl: "De ratio van zuurstof tot koolstofdioxide" },
        { en: "The salinity to temperature ratio", es: "La proporción de salinidad a temperatura", de: "Das Verhältnis von Salinität zu Temperatur", nl: "De saliniteit tot temperatuur ratio" },
        { en: "The depth to pressure ratio", es: "La proporción de profundidad a presión", de: "Das Verhältnis von Tiefe zu Druck", nl: "De diepte tot druk ratio" }
      ],
      correct: 0,
      explanation: {
        en: "The Redfield ratio (C:N:P = 106:16:1) describes the average elemental composition of marine phytoplankton and helps predict nutrient limitations and stoichiometric relationships in marine biogeochemical cycles.",
        es: "La proporción de Redfield (C:N:P = 106:16:1) describe la composición elemental promedio del fitoplancton marino y ayuda a predecir limitaciones de nutrientes y relaciones estequiométricas en ciclos biogeoquímicos marinos.",
        de: "Das Redfield-Verhältnis (C:N:P = 106:16:1) beschreibt die durchschnittliche elementare Zusammensetzung von marinem Phytoplankton und hilft bei der Vorhersage von Nährstoffbegrenzungen und stöchiometrischen Beziehungen in marinen biogeochemischen Kreisläufen.",
        nl: "De Redfield ratio (C:N:P = 106:16:1) beschrijft de gemiddelde elementaire samenstelling van mariene fytoplankton en helpt bij het voorspellen van nutriënt beperkingen en stoichiometrische relaties in mariene biogeochemische cycli."
      }
    },
    {
      question: {
        en: "What are marine oxygen dead zones?",
        es: "¿Qué son las zonas muertas de oxígeno marino?",
        de: "Was sind marine Sauerstoff-Totzonen?",
        nl: "Wat zijn mariene zuurstof dode zones?"
      },
      options: [
        { en: "Areas with extremely low oxygen concentrations that cannot support most marine life", es: "Áreas con concentraciones extremadamente bajas de oxígeno que no pueden sostener la mayoría de la vida marina", de: "Gebiete mit extrem niedrigen Sauerstoffkonzentrationen, die das meiste Meeresleben nicht unterstützen können", nl: "Gebieden met extreem lage zuurstofconcentraties die het meeste marien leven niet kunnen ondersteunen" },
        { en: "Areas with high temperature", es: "Áreas con alta temperatura", de: "Gebiete mit hoher Temperatur", nl: "Gebieden met hoge temperatuur" },
        { en: "Deep ocean trenches", es: "Fosas oceánicas profundas", de: "Tiefe Ozeangräben", nl: "Diepe oceaantroggen" },
        { en: "Areas with high salinity", es: "Áreas con alta salinidad", de: "Gebiete mit hoher Salinität", nl: "Gebieden met hoge saliniteit" }
      ],
      correct: 0,
      explanation: {
        en: "Marine oxygen dead zones (hypoxic zones) are areas where dissolved oxygen concentrations are too low (<2 mg/L) to support most marine life, often caused by eutrophication, stratification, and organic matter decomposition.",
        es: "Las zonas muertas de oxígeno marino (zonas hipóxicas) son áreas donde las concentraciones de oxígeno disuelto son demasiado bajas (<2 mg/L) para sostener la mayoría de la vida marina, a menudo causadas por eutrofización, estratificación y descomposición de materia orgánica.",
        de: "Marine Sauerstoff-Totzonen (hypoxische Zonen) sind Gebiete, wo gelöste Sauerstoffkonzentrationen zu niedrig sind (<2 mg/L), um das meiste Meeresleben zu unterstützen, oft verursacht durch Eutrophierung, Schichtung und organische Materie-Zersetzung.",
        nl: "Mariene zuurstof dode zones (hypoxische zones) zijn gebieden waar opgelost zuurstofconcentraties te laag zijn (<2 mg/L) om het meeste marien leven te ondersteunen, vaak veroorzaakt door eutrofiëring, stratificatie en organisch materiaal decompositie."
      }
    },
    {
      question: {
        en: "What is the role of dissolved organic nitrogen (DON) in marine ecosystems?",
        es: "¿Cuál es el papel del nitrógeno orgánico disuelto (NOD) en ecosistemas marinos?",
        de: "Welche Rolle spielt gelöster organischer Stickstoff (DON) in marinen Ökosystemen?",
        nl: "Wat is de rol van opgelost organisch stikstof (DON) in mariene ecosystemen?"
      },
      options: [
        { en: "Source of nitrogen for microorganisms when inorganic nitrogen is limited", es: "Fuente de nitrógeno para microorganismos cuando el nitrógeno inorgánico es limitado", de: "Stickstoffquelle für Mikroorganismen wenn anorganischer Stickstoff begrenzt ist", nl: "Bron van stikstof voor microorganismen wanneer anorganische stikstof beperkt is" },
        { en: "Only a waste product", es: "Solo un producto de desecho", de: "Nur ein Abfallprodukt", nl: "Alleen een afvalproduct" },
        { en: "Has no biological role", es: "No tiene papel biológico", de: "Hat keine biologische Rolle", nl: "Heeft geen biologische rol" },
        { en: "Only affects water clarity", es: "Solo afecta la claridad del agua", de: "Beeinflusst nur die Wasserklarheit", nl: "Beïnvloedt alleen waterhelderheid" }
      ],
      correct: 0,
      explanation: {
        en: "Dissolved organic nitrogen (DON) serves as an important alternative nitrogen source for marine microorganisms, especially in oligotrophic environments where inorganic nitrogen concentrations are low, supporting primary and bacterial production.",
        es: "El nitrógeno orgánico disuelto (NOD) sirve como una importante fuente alternativa de nitrógeno para microorganismos marinos, especialmente en ambientes oligotróficos donde las concentraciones de nitrógeno inorgánico son bajas, apoyando la producción primaria y bacteriana.",
        de: "Gelöster organischer Stickstoff (DON) dient als wichtige alternative Stickstoffquelle für marine Mikroorganismen, besonders in oligotrophen Umgebungen, wo anorganische Stickstoffkonzentrationen niedrig sind, und unterstützt primäre und bakterielle Produktion.",
        nl: "Opgelost organisch stikstof (DON) dient als een belangrijke alternatieve stikstofbron voor mariene microorganismen, vooral in oligotrofe omgevingen waar anorganische stikstofconcentraties laag zijn, ondersteunend primaire en bacteriële productie."
      }
    },
    {
      question: {
        en: "What causes seasonal variations in ocean surface chemistry?",
        es: "¿Qué causa las variaciones estacionales en la química superficial del océano?",
        de: "Was verursacht saisonale Schwankungen in der Oberflächenchemie des Ozeans?",
        nl: "Wat veroorzaakt seizoensgebonden variaties in oceaan oppervlakte chemie?"
      },
      options: [
        { en: "Changes in biological productivity, temperature, and mixing patterns", es: "Cambios en productividad biológica, temperatura y patrones de mezcla", de: "Änderungen in biologischer Produktivität, Temperatur und Mischungsmustern", nl: "Veranderingen in biologische productiviteit, temperatuur en mengingspatronen" },
        { en: "Only solar radiation changes", es: "Solo cambios en radiación solar", de: "Nur Änderungen in Sonnenstrahlung", nl: "Alleen zonnestraling veranderingen" },
        { en: "Only wind patterns", es: "Solo patrones de viento", de: "Nur Windmuster", nl: "Alleen windpatronen" },
        { en: "Constant throughout the year", es: "Constante durante todo el año", de: "Konstant das ganze Jahr über", nl: "Constant gedurende het jaar" }
      ],
      correct: 0,
      explanation: {
        en: "Seasonal variations in ocean surface chemistry result from changes in biological productivity (phytoplankton blooms), temperature effects on gas solubility, and seasonal mixing patterns that redistribute nutrients and dissolved substances.",
        es: "Las variaciones estacionales en la química superficial del océano resultan de cambios en productividad biológica (floraciones de fitoplancton), efectos de temperatura en solubilidad de gases, y patrones de mezcla estacional que redistribuyen nutrientes y sustancias disueltas.",
        de: "Saisonale Schwankungen in der Oberflächenchemie des Ozeans resultieren aus Änderungen in biologischer Produktivität (Phytoplanktonblüten), Temperatureffekten auf Gaslöslichkeit und saisonalen Mischungsmustern, die Nährstoffe und gelöste Substanzen umverteilen.",
        nl: "Seizoensgebonden variaties in oceaan oppervlakte chemie resulteren uit veranderingen in biologische productiviteit (fytoplankton bloeien), temperatuureffecten op gas oplosbaarheid, en seizoensgebonden mengingspatronen die nutriënten en opgeloste stoffen herverdelen."
      }
    },
    {
      question: {
        en: "What is the significance of methane hydrates in ocean chemistry?",
        es: "¿Cuál es la significancia de los hidratos de metano en química oceánica?",
        de: "Was ist die Bedeutung von Methanhydraten in der Ozeanchemie?",
        nl: "Wat is de betekenis van methaan hydraten in oceaan chemie?"
      },
      options: [
        { en: "Potential source of methane affecting ocean carbon cycling and climate", es: "Fuente potencial de metano que afecta el ciclo de carbono oceánico y el clima", de: "Potenzielle Methanquelle, die den ozeanischen Kohlenstoffkreislauf und das Klima beeinflusst", nl: "Potentiële bron van methaan die oceaan koolstofcycling en klimaat beïnvloedt" },
        { en: "Only affects ocean temperature", es: "Solo afecta la temperatura oceánica", de: "Beeinflusst nur die Ozeantemperatur", nl: "Beïnvloedt alleen oceaantemperatuur" },
        { en: "Has no chemical significance", es: "No tiene significancia química", de: "Hat keine chemische Bedeutung", nl: "Heeft geen chemische betekenis" },
        { en: "Only found in tropical oceans", es: "Solo se encuentra en océanos tropicales", de: "Nur in tropischen Ozeanen gefunden", nl: "Alleen gevonden in tropische oceanen" }
      ],
      correct: 0,
      explanation: {
        en: "Methane hydrates (clathrates) in marine sediments represent a significant reservoir of carbon that can release methane to seawater and potentially to the atmosphere, affecting ocean chemistry and global carbon cycling.",
        es: "Los hidratos de metano (clatratos) en sedimentos marinos representan un reservorio significativo de carbono que puede liberar metano al agua de mar y potencialmente a la atmósfera, afectando la química oceánica y el ciclo global de carbono.",
        de: "Methanhydrate (Clathrate) in marinen Sedimenten stellen ein bedeutendes Kohlenstoffreservoir dar, das Methan an Meerwasser und möglicherweise an die Atmosphäre abgeben kann, was die Ozeanchemie und den globalen Kohlenstoffkreislauf beeinflusst.",
        nl: "Methaan hydraten (clathraten) in mariene sedimenten vertegenwoordigen een significante koolstof reservoir die methaan kan vrijgeven aan zeewater en mogelijk aan de atmosfeer, oceaan chemie en globale koolstofcycling beïnvloedend."
      }
    },
    {
      question: {
        en: "What controls the solubility of gases in seawater?",
        es: "¿Qué controla la solubilidad de gases en agua de mar?",
        de: "Was kontrolliert die Löslichkeit von Gasen in Meerwasser?",
        nl: "Wat controleert de oplosbaarheid van gassen in zeewater?"
      },
      options: [
        { en: "Temperature, pressure, and salinity", es: "Temperatura, presión y salinidad", de: "Temperatur, Druck und Salinität", nl: "Temperatuur, druk en saliniteit" },
        { en: "Only temperature", es: "Solo temperatura", de: "Nur Temperatur", nl: "Alleen temperatuur" },
        { en: "Only pressure", es: "Solo presión", de: "Nur Druck", nl: "Alleen druk" },
        { en: "Only biological activity", es: "Solo actividad biológica", de: "Nur biologische Aktivität", nl: "Alleen biologische activiteit" }
      ],
      correct: 0,
      explanation: {
        en: "Gas solubility in seawater is controlled by temperature (higher temperature decreases solubility), pressure (higher pressure increases solubility), and salinity (higher salinity decreases solubility), following Henry's Law with modifications for ionic solutions.",
        es: "La solubilidad de gases en agua de mar está controlada por temperatura (mayor temperatura disminuye solubilidad), presión (mayor presión aumenta solubilidad), y salinidad (mayor salinidad disminuye solubilidad), siguiendo la Ley de Henry con modificaciones para soluciones iónicas.",
        de: "Die Gaslöslichkeit in Meerwasser wird durch Temperatur (höhere Temperatur verringert Löslichkeit), Druck (höherer Druck erhöht Löslichkeit) und Salinität (höhere Salinität verringert Löslichkeit) kontrolliert, nach dem Henry-Gesetz mit Modifikationen für Ionenlösungen.",
        nl: "Gas oplosbaarheid in zeewater wordt gecontroleerd door temperatuur (hogere temperatuur vermindert oplosbaarheid), druk (hogere druk verhoogt oplosbaarheid), en saliniteit (hogere saliniteit vermindert oplosbaarheid), volgend Henry's Wet met modificaties voor ionische oplossingen."
      }
    },
    {
      question: {
        en: "What is the marine sulfur cycle's connection to climate regulation?",
        es: "¿Cuál es la conexión del ciclo de azufre marino con la regulación climática?",
        de: "Was ist die Verbindung des marinen Schwefelkreislaufs zur Klimaregulierung?",
        nl: "Wat is de verbinding van de mariene zwavelcyclus met klimaat regulatie?"
      },
      options: [
        { en: "Production of dimethyl sulfide (DMS) by phytoplankton affects cloud formation", es: "Producción de sulfuro de dimetilo (DMS) por fitoplancton afecta la formación de nubes", de: "Produktion von Dimethylsulfid (DMS) durch Phytoplankton beeinflusst Wolkenbildung", nl: "Productie van dimethyl sulfide (DMS) door fytoplankton beïnvloedt wolkvorming" },
        { en: "Only affects ocean acidity", es: "Solo afecta la acidez oceánica", de: "Beeinflusst nur die Ozeanazidität", nl: "Beïnvloedt alleen oceaan zuurgraad" },
        { en: "Has no climate connection", es: "No tiene conexión climática", de: "Hat keine Klimaverbindung", nl: "Heeft geen klimaat verbinding" },
        { en: "Only affects precipitation", es: "Solo afecta la precipitación", de: "Beeinflusst nur Niederschlag", nl: "Beïnvloedt alleen neerslag" }
      ],
      correct: 0,
      explanation: {
        en: "The marine sulfur cycle connects to climate through dimethyl sulfide (DMS) production by phytoplankton, which when released to the atmosphere, oxidizes to form sulfate aerosols that serve as cloud condensation nuclei, influencing cloud formation and Earth's albedo.",
        es: "El ciclo de azufre marino se conecta al clima a través de la producción de sulfuro de dimetilo (DMS) por fitoplancton, que cuando se libera a la atmósfera, se oxida para formar aerosoles de sulfato que sirven como núcleos de condensación de nubes, influyendo en la formación de nubes y el albedo terrestre.",
        de: "Der marine Schwefelkreislauf verbindet sich mit dem Klima durch Dimethylsulfid (DMS) Produktion von Phytoplankton, das bei Freisetzung in die Atmosphäre zu Sulfat-Aerosolen oxidiert, die als Wolkenkondensationskeime dienen und Wolkenbildung und Erdalbedo beeinflussen.",
        nl: "De mariene zwavelcyclus verbindt met klimaat door dimethyl sulfide (DMS) productie door fytoplankton, die wanneer vrijgegeven aan de atmosfeer, oxideert tot sulfaat aerosolen die dienen als wolkencondensatie kernen, wolkvorming en aarde albedo beïnvloedend."
      }
    },
    {
      question: {
        en: "What is the effect of hydrothermal vents on local ocean chemistry?",
        es: "¿Cuál es el efecto de las fuentes hidrotermales en la química oceánica local?",
        de: "Was ist der Effekt von Hydrothermalquellen auf die lokale Ozeanchemie?",
        nl: "Wat is het effect van hydrothermale bronnen op lokale oceaan chemie?"
      },
      options: [
        { en: "Release of reduced chemicals, metals, and heat altering local chemical gradients", es: "Liberación de químicos reducidos, metales y calor alterando gradientes químicos locales", de: "Freisetzung reduzierter Chemikalien, Metalle und Wärme verändert lokale chemische Gradienten", nl: "Vrijgave van gereduceerde chemicaliën, metalen en warmte verandert lokale chemische gradiënten" },
        { en: "Only affects temperature", es: "Solo afecta la temperatura", de: "Beeinflusst nur die Temperatur", nl: "Beïnvloedt alleen temperatuur" },
        { en: "No chemical effects", es: "Sin efectos químicos", de: "Keine chemischen Effekte", nl: "Geen chemische effecten" },
        { en: "Only affects deep ocean currents", es: "Solo afecta las corrientes oceánicas profundas", de: "Beeinflusst nur tiefe Meeresströmungen", nl: "Beïnvloedt alleen diepe oceaanstromingen" }
      ],
      correct: 0,
      explanation: {
        en: "Hydrothermal vents significantly alter local ocean chemistry by releasing reduced chemicals (H₂S, CH₄, H₂), dissolved metals (Fe, Mn, Cu, Zn), and heat, creating unique chemical environments that support chemosynthetic ecosystems and affect regional biogeochemical cycling.",
        es: "Las fuentes hidrotermales alteran significativamente la química oceánica local liberando químicos reducidos (H₂S, CH₄, H₂), metales disueltos (Fe, Mn, Cu, Zn), y calor, creando ambientes químicos únicos que sostienen ecosistemas quimiosintéticos y afectan el ciclo biogeoquímico regional.",
        de: "Hydrothermalquellen verändern die lokale Ozeanchemie erheblich durch Freisetzung reduzierter Chemikalien (H₂S, CH₄, H₂), gelöster Metalle (Fe, Mn, Cu, Zn) und Wärme, wodurch einzigartige chemische Umgebungen entstehen, die chemosynthetische Ökosysteme unterstützen und regionale biogeochemische Kreisläufe beeinflussen.",
        nl: "Hydrothermale bronnen veranderen lokale oceaan chemie significant door vrijgave van gereduceerde chemicaliën (H₂S, CH₄, H₂), opgeloste metalen (Fe, Mn, Cu, Zn), en warmte, creërend unieke chemische omgevingen die chemosynthetische ecosystemen ondersteunen en regionale biogeochemische cycling beïnvloeden."
      }
    },
    {
      question: {
        en: "What is the relationship between ocean temperature and dissolved CO₂ concentrations?",
        es: "¿Cuál es la relación entre la temperatura oceánica y las concentraciones de CO₂ disuelto?",
        de: "Was ist die Beziehung zwischen Ozeantemperatur und gelösten CO₂-Konzentrationen?",
        nl: "Wat is de relatie tussen oceaan temperatuur en opgelost CO₂ concentraties?"
      },
      options: [
        { en: "Inverse relationship: colder water holds more dissolved CO₂", es: "Relación inversa: agua más fría retiene más CO₂ disuelto", de: "Umgekehrte Beziehung: kälteres Wasser hält mehr gelöstes CO₂", nl: "Omgekeerde relatie: kouder water houdt meer opgelost CO₂" },
        { en: "Direct relationship: warmer water holds more CO₂", es: "Relación directa: agua más cálida retiene más CO₂", de: "Direkte Beziehung: wärmeres Wasser hält mehr CO₂", nl: "Directe relatie: warmer water houdt meer CO₂" },
        { en: "No relationship", es: "Sin relación", de: "Keine Beziehung", nl: "Geen relatie" },
        { en: "Only pressure affects CO₂ solubility", es: "Solo la presión afecta la solubilidad del CO₂", de: "Nur Druck beeinflusst CO₂-Löslichkeit", nl: "Alleen druk beïnvloedt CO₂ oplosbaarheid" }
      ],
      correct: 0,
      explanation: {
        en: "There is an inverse relationship between ocean temperature and dissolved CO₂ concentrations: colder water can hold more dissolved CO₂ than warmer water, which is why polar oceans are important CO₂ sinks and warming oceans may release more CO₂ to the atmosphere.",
        es: "Hay una relación inversa entre temperatura oceánica y concentraciones de CO₂ disuelto: agua más fría puede retener más CO₂ disuelto que agua más cálida, razón por la cual los océanos polares son importantes sumideros de CO₂ y océanos que se calientan pueden liberar más CO₂ a la atmósfera.",
        de: "Es gibt eine umgekehrte Beziehung zwischen Ozeantemperatur und gelösten CO₂-Konzentrationen: kälteres Wasser kann mehr gelöstes CO₂ halten als wärmeres Wasser, weshalb polare Ozeane wichtige CO₂-Senken sind und sich erwärmende Ozeane mehr CO₂ an die Atmosphäre abgeben könnten.",
        nl: "Er is een omgekeerde relatie tussen oceaan temperatuur en opgelost CO₂ concentraties: kouder water kan meer opgelost CO₂ vasthouden dan warmer water, daarom zijn pooloceanen belangrijke CO₂ putten en opwarmende oceanen kunnen meer CO₂ aan de atmosfeer afgeven."
      }
    },
    {
      question: {
        en: "What is the role of particulate organic carbon (POC) in ocean carbon export?",
        es: "¿Cuál es el papel del carbono orgánico particulado (COP) en la exportación de carbono oceánico?",
        de: "Welche Rolle spielt partikulärer organischer Kohlenstoff (POC) beim ozeanischen Kohlenstoffexport?",
        nl: "Wat is de rol van particulair organisch koolstof (POC) in oceaan koolstof export?"
      },
      options: [
        { en: "Sinking particles transport carbon from surface to deep ocean", es: "Partículas que se hunden transportan carbono desde la superficie al océano profundo", de: "Sinkende Partikel transportieren Kohlenstoff von der Oberfläche zum tiefen Ozean", nl: "Zinkende deeltjes transporteren koolstof van oppervlak naar diepe oceaan" },
        { en: "Only affects surface chemistry", es: "Solo afecta la química superficial", de: "Beeinflusst nur die Oberflächenchemie", nl: "Beïnvloedt alleen oppervlakte chemie" },
        { en: "Prevents carbon cycling", es: "Previene el ciclo de carbono", de: "Verhindert Kohlenstoffkreislauf", nl: "Verhindert koolstofcycling" },
        { en: "Only found in coastal areas", es: "Solo se encuentra en áreas costeras", de: "Nur in Küstengebieten gefunden", nl: "Alleen gevonden in kustgebieden" }
      ],
      correct: 0,
      explanation: {
        en: "Particulate organic carbon (POC) plays a crucial role in the biological pump by transporting carbon from surface waters to the deep ocean through sinking of dead organisms, fecal pellets, and aggregates, contributing to long-term carbon sequestration.",
        es: "El carbono orgánico particulado (COP) juega un papel crucial en la bomba biológica transportando carbono desde aguas superficiales al océano profundo a través del hundimiento de organismos muertos, pellets fecales y agregados, contribuyendo al secuestro de carbono a largo plazo.",
        de: "Partikulärer organischer Kohlenstoff (POC) spielt eine entscheidende Rolle in der biologischen Pumpe durch Transport von Kohlenstoff von Oberflächengewässern zum tiefen Ozean durch Absinken toter Organismen, Kotpellets und Aggregate, was zur langfristigen Kohlenstoffsequestrierung beiträgt.",
        nl: "Particulair organisch koolstof (POC) speelt een cruciale rol in de biologische pomp door koolstof te transporteren van oppervlaktewateren naar de diepe oceaan door zinken van dode organismen, fecale pellets en aggregaten, bijdragend aan langetermijn koolstof sequestratie."
      }
    },
    {
      question: {
        en: "How does ocean stratification affect chemical distributions?",
        es: "¿Cómo afecta la estratificación oceánica las distribuciones químicas?",
        de: "Wie beeinflusst ozeanische Schichtung chemische Verteilungen?",
        nl: "Hoe beïnvloedt oceaan stratificatie chemische verdelingen?"
      },
      options: [
        { en: "Reduces vertical mixing, creating distinct chemical layers", es: "Reduce la mezcla vertical, creando capas químicas distintas", de: "Reduziert vertikale Mischung und schafft unterschiedliche chemische Schichten", nl: "Vermindert verticale menging, creërend onderscheiden chemische lagen" },
        { en: "Increases vertical mixing", es: "Aumenta la mezcla vertical", de: "Erhöht vertikale Mischung", nl: "Verhoogt verticale menging" },
        { en: "Has no effect on chemistry", es: "No tiene efecto en la química", de: "Hat keinen Einfluss auf die Chemie", nl: "Heeft geen effect op chemie" },
        { en: "Only affects temperature", es: "Solo afecta la temperatura", de: "Beeinflusst nur die Temperatur", nl: "Beïnvloedt alleen temperatuur" }
      ],
      correct: 0,
      explanation: {
        en: "Ocean stratification reduces vertical mixing, creating distinct chemical layers where nutrients become depleted in surface waters and accumulate in deeper waters, while oxygen shows the opposite pattern, leading to strong vertical chemical gradients.",
        es: "La estratificación oceánica reduce la mezcla vertical, creando capas químicas distintas donde los nutrientes se agotan en aguas superficiales y se acumulan en aguas más profundas, mientras que el oxígeno muestra el patrón opuesto, llevando a fuertes gradientes químicos verticales.",
        de: "Ozeanische Schichtung reduziert vertikale Mischung und schafft unterschiedliche chemische Schichten, wo Nährstoffe in Oberflächengewässern erschöpft werden und sich in tieferen Gewässern ansammeln, während Sauerstoff das entgegengesetzte Muster zeigt, was zu starken vertikalen chemischen Gradienten führt.",
        nl: "Oceaan stratificatie vermindert verticale menging, creërend onderscheiden chemische lagen waar nutriënten uitgeput raken in oppervlaktewateren en accumuleren in diepere wateren, terwijl zuurstof het tegenovergestelde patroon toont, leidend tot sterke verticale chemische gradiënten."
      }
    },
    {
      question: {
        en: "What is the significance of the f-ratio in marine productivity studies?",
        es: "¿Cuál es la significancia de la proporción f en estudios de productividad marina?",
        de: "Was ist die Bedeutung des f-Verhältnisses in marinen Produktivitätsstudien?",
        nl: "Wat is de betekenis van de f-ratio in mariene productiviteits studies?"
      },
      options: [
        { en: "Ratio of new production to total primary production, indicating export potential", es: "Proporción de producción nueva a producción primaria total, indicando potencial de exportación", de: "Verhältnis von Neuproduktion zu gesamter Primärproduktion, zeigt Exportpotenzial an", nl: "Ratio van nieuwe productie tot totale primaire productie, aangevend export potentieel" },
        { en: "Only measures phytoplankton size", es: "Solo mide el tamaño del fitoplancton", de: "Misst nur Phytoplankton-Größe", nl: "Meet alleen fytoplankton grootte" },
        { en: "Temperature to salinity ratio", es: "Proporción temperatura a salinidad", de: "Temperatur-zu-Salinität-Verhältnis", nl: "Temperatuur tot saliniteit ratio" },
        { en: "Depth measurement", es: "Medición de profundidad", de: "Tiefenmessung", nl: "Diepte meting" }
      ],
      correct: 0,
      explanation: {
        en: "The f-ratio is the fraction of primary production supported by nitrate (new production) versus total primary production. It indicates the potential for carbon export to deep waters, with higher f-ratios suggesting greater export efficiency and carbon sequestration potential.",
        es: "La proporción f es la fracción de producción primaria sostenida por nitrato (producción nueva) versus producción primaria total. Indica el potencial para exportación de carbono a aguas profundas, con proporciones f más altas sugiriendo mayor eficiencia de exportación y potencial de secuestro de carbono.",
        de: "Das f-Verhältnis ist der Anteil der durch Nitrat unterstützten Primärproduktion (Neuproduktion) zur gesamten Primärproduktion. Es zeigt das Potenzial für Kohlenstoffexport in tiefe Gewässer an, wobei höhere f-Verhältnisse eine größere Exporteffizienz und Kohlenstoffsequestrierungspotenzial andeuten.",
        nl: "De f-ratio is de fractie van primaire productie ondersteund door nitraat (nieuwe productie) versus totale primaire productie. Het geeft het potentieel aan voor koolstof export naar diepe wateren, waarbij hogere f-ratio's grotere export efficiëntie en koolstof sequestratie potentieel suggereren."
      }
    },
    {
      question: {
        en: "What controls the depth of the mixed layer and its chemical properties?",
        es: "¿Qué controla la profundidad de la capa mixta y sus propiedades químicas?",
        de: "Was kontrolliert die Tiefe der Durchmischungsschicht und ihre chemischen Eigenschaften?",
        nl: "Wat controleert de diepte van de gemengde laag en zijn chemische eigenschappen?"
      },
      options: [
        { en: "Wind mixing, surface heating/cooling, and freshwater inputs", es: "Mezcla por viento, calentamiento/enfriamiento superficial y aportes de agua dulce", de: "Windmischung, Oberflächenerwärmung/-abkühlung und Süßwasserzufuhr", nl: "Wind menging, oppervlakte verwarming/afkoeling en zoetwater input" },
        { en: "Only tidal forces", es: "Solo fuerzas de marea", de: "Nur Gezeitenkräfte", nl: "Alleen getijdenkrachten" },
        { en: "Only biological activity", es: "Solo actividad biológica", de: "Nur biologische Aktivität", nl: "Alleen biologische activiteit" },
        { en: "Constant throughout the year", es: "Constante durante todo el año", de: "Konstant das ganze Jahr über", nl: "Constant gedurende het jaar" }
      ],
      correct: 0,
      explanation: {
        en: "Mixed layer depth and chemistry are controlled by wind-driven turbulent mixing, seasonal surface heating and cooling, and freshwater inputs from precipitation and rivers, which together determine how deep surface waters mix and what chemical properties they acquire.",
        es: "La profundidad y química de la capa mixta están controladas por mezcla turbulenta impulsada por viento, calentamiento y enfriamiento superficial estacional, y aportes de agua dulce de precipitación y ríos, que juntos determinan qué tan profundo se mezclan las aguas superficiales y qué propiedades químicas adquieren.",
        de: "Durchmischungsschichttiefe und -chemie werden durch windgetriebene turbulente Mischung, saisonale Oberflächenerwärmung und -abkühlung und Süßwasserzufuhr aus Niederschlag und Flüssen kontrolliert, die zusammen bestimmen, wie tief sich Oberflächengewässer mischen und welche chemischen Eigenschaften sie erwerben.",
        nl: "Gemengde laag diepte en chemie worden gecontroleerd door wind-gedreven turbulente menging, seizoensgebonden oppervlakte verwarming en afkoeling, en zoetwater input van neerslag en rivieren, die samen bepalen hoe diep oppervlaktewateren mengen en welke chemische eigenschappen ze verkrijgen."
      }
    },
    {
      question: {
        en: "What is the carbonate saturation horizon in the ocean?",
        es: "¿Qué es el horizonte de saturación de carbonatos en el océano?",
        de: "Was ist der Karbonat-Sättigungshorizont im Ozean?",
        nl: "Wat is de carbonaat verzadigingshorizon in de oceaan?"
      },
      options: [
        { en: "The depth below which carbonate minerals begin to dissolve", es: "La profundidad bajo la cual los minerales carbonatados comienzan a disolverse", de: "Die Tiefe, unter der sich Karbonatminerale aufzulösen beginnen", nl: "De diepte waaronder carbonaat mineralen beginnen op te lossen" },
        { en: "The surface layer of maximum carbonate concentration", es: "La capa superficial de máxima concentración de carbonatos", de: "Die Oberflächenschicht maximaler Karbonatkonzentration", nl: "De oppervlaktelaag van maximale carbonaat concentratie" },
        { en: "The thermocline boundary", es: "La frontera de la termoclina", de: "Die Thermoklingrenze", nl: "De thermocline grens" },
        { en: "The mixed layer depth", es: "La profundidad de la capa mixta", de: "Die Durchmischungsschichttiefe", nl: "De gemengde laag diepte" }
      ],
      correct: 0,
      explanation: {
        en: "The carbonate saturation horizon is the ocean depth where seawater becomes undersaturated with respect to carbonate minerals (calcite or aragonite), below which these minerals begin to dissolve, affecting shell-forming organisms and carbonate sediments.",
        es: "El horizonte de saturación de carbonatos es la profundidad oceánica donde el agua de mar se vuelve subsaturada con respecto a minerales carbonatados (calcita o aragonita), bajo la cual estos minerales comienzan a disolverse, afectando organismos formadores de conchas y sedimentos carbonatados.",
        de: "Der Karbonat-Sättigungshorizont ist die Ozeantiefe, wo Meerwasser bezüglich Karbonatmineralien (Calcit oder Aragonit) untersättigt wird, unter der sich diese Mineralien aufzulösen beginnen und schalenbildende Organismen und Karbonatsedimente beeinflussen.",
        nl: "De carbonaat verzadigingshorizon is de oceaandiepte waar zeewater onderverzadigd wordt ten opzichte van carbonaat mineralen (calciet of aragoniet), waaronder deze mineralen beginnen op te lossen, schelpvormende organismen en carbonaat sedimenten beïnvloedend."
      }
    },
    {
      question: {
        en: "What is the role of marine snow in ocean biogeochemistry?",
        es: "¿Cuál es el papel de la nieve marina en biogeoquímica oceánica?",
        de: "Welche Rolle spielt Meeresschnee in der ozeanischen Biogeochemie?",
        nl: "Wat is de rol van mariene sneeuw in oceaan biogeochemie?"
      },
      options: [
        { en: "Aggregates of organic matter that transport nutrients and carbon to deep waters", es: "Agregados de materia orgánica que transportan nutrientes y carbono a aguas profundas", de: "Aggregate organischer Materie, die Nährstoffe und Kohlenstoff zu tiefen Gewässern transportieren", nl: "Aggregaten van organisch materiaal die nutriënten en koolstof naar diepe wateren transporteren" },
        { en: "Ice crystals in polar oceans", es: "Cristales de hielo en océanos polares", de: "Eiskristalle in polaren Ozeanen", nl: "IJskristallen in polaire oceanen" },
        { en: "White foam on ocean surface", es: "Espuma blanca en la superficie oceánica", de: "Weißer Schaum auf der Ozeanoberfläche", nl: "Wit schuim op oceaan oppervlak" },
        { en: "Salt precipitation", es: "Precipitación de sal", de: "Salzausfällung", nl: "Zout neerslag" }
      ],
      correct: 0,
      explanation: {
        en: "Marine snow consists of aggregates of organic particles, dead organisms, fecal pellets, and inorganic matter that sink slowly through the water column, serving as an important vehicle for transporting carbon and nutrients from surface to deep waters.",
        es: "La nieve marina consiste en agregados de partículas orgánicas, organismos muertos, pellets fecales y materia inorgánica que se hunden lentamente a través de la columna de agua, sirviendo como vehículo importante para transportar carbono y nutrientes desde la superficie a aguas profundas.",
        de: "Meeresschnee besteht aus Aggregaten organischer Partikel, toter Organismen, Kotpellets und anorganischer Materie, die langsam durch die Wassersäule absinken und als wichtiges Transportmittel für Kohlenstoff und Nährstoffe von der Oberfläche zu tiefen Gewässern dienen.",
        nl: "Mariene sneeuw bestaat uit aggregaten van organische deeltjes, dode organismen, fecale pellets en anorganisch materiaal die langzaam door de waterkolom zinken, dienend als belangrijk voertuig voor het transporteren van koolstof en nutriënten van oppervlak naar diepe wateren."
      }
    },
    {
      question: {
        en: "What is the significance of the lysocline in ocean chemistry?",
        es: "¿Cuál es la significancia de la lisoclina en química oceánica?",
        de: "Was ist die Bedeutung der Lysoklin in der Ozeanchemie?",
        nl: "Wat is de betekenis van de lysocline in oceaan chemie?"
      },
      options: [
        { en: "The depth where rapid dissolution of calcium carbonate begins", es: "La profundidad donde comienza la disolución rápida de carbonato de calcio", de: "Die Tiefe, wo schnelle Auflösung von Kalziumkarbonat beginnt", nl: "De diepte waar snelle oplossing van calciumcarbonaat begint" },
        { en: "The depth of maximum oxygen concentration", es: "La profundidad de máxima concentración de oxígeno", de: "Die Tiefe maximaler Sauerstoffkonzentration", nl: "De diepte van maximale zuurstofconcentratie" },
        { en: "The boundary between surface and deep waters", es: "La frontera entre aguas superficiales y profundas", de: "Die Grenze zwischen Oberflächen- und Tiefenwasser", nl: "De grens tussen oppervlakte en diepe wateren" },
        { en: "The depth of the thermocline", es: "La profundidad de la termoclina", de: "Die Tiefe der Thermokline", nl: "De diepte van de thermocline" }
      ],
      correct: 0,
      explanation: {
        en: "The lysocline marks the ocean depth where the dissolution rate of calcium carbonate increases sharply due to increasing pressure, decreasing temperature, and increasing CO₂ concentrations, typically occurring above the carbonate compensation depth.",
        es: "La lisoclina marca la profundidad oceánica donde la tasa de disolución del carbonato de calcio aumenta bruscamente debido al aumento de presión, disminución de temperatura y aumento de concentraciones de CO₂, típicamente ocurriendo sobre la profundidad de compensación de carbonatos.",
        de: "Die Lysoklin markiert die Ozeantiefe, wo die Auflösungsrate von Kalziumkarbonat aufgrund steigenden Drucks, sinkender Temperatur und steigender CO₂-Konzentrationen stark ansteigt, typischerweise oberhalb der Karbonat-Kompensationstiefe auftretend.",
        nl: "De lysocline markeert de oceaandiepte waar de oplossingssnelheid van calciumcarbonaat scherp toeneemt door toenemende druk, afnemende temperatuur en toenemende CO₂ concentraties, typisch voorkomend boven de carbonaat compensatie diepte."
      }
    },
    {
      question: {
        en: "What is the ocean's buffering capacity against pH changes?",
        es: "¿Cuál es la capacidad amortiguadora del océano contra cambios de pH?",
        de: "Was ist die Pufferkapazität des Ozeans gegen pH-Änderungen?",
        nl: "Wat is de buffer capaciteit van de oceaan tegen pH veranderingen?"
      },
      options: [
        { en: "Provided by the carbonate-bicarbonate system maintaining pH stability", es: "Proporcionada por el sistema carbonato-bicarbonato manteniendo estabilidad del pH", de: "Bereitgestellt durch das Karbonat-Bikarbonat-System zur pH-Stabilitätserhaltung", nl: "Verschaft door het carbonaat-bicarbonaat systeem dat pH stabiliteit behoudt" },
        { en: "Only from dissolved oxygen", es: "Solo del oxígeno disuelto", de: "Nur von gelöstem Sauerstoff", nl: "Alleen van opgelost zuurstof" },
        { en: "From temperature regulation", es: "De la regulación de temperatura", de: "Von Temperaturregulierung", nl: "Van temperatuur regulatie" },
        { en: "No buffering capacity exists", es: "No existe capacidad amortiguadora", de: "Keine Pufferkapazität existiert", nl: "Geen buffer capaciteit bestaat" }
      ],
      correct: 0,
      explanation: {
        en: "The ocean's buffering capacity comes primarily from the carbonate-bicarbonate buffer system (CO₂/HCO₃⁻/CO₃²⁻), which helps maintain relatively stable pH by absorbing excess acid or base, though this capacity is being overwhelmed by increasing atmospheric CO₂.",
        es: "La capacidad amortiguadora del océano viene principalmente del sistema amortiguador carbonato-bicarbonato (CO₂/HCO₃⁻/CO₃²⁻), que ayuda a mantener pH relativamente estable absorbiendo exceso de ácido o base, aunque esta capacidad está siendo superada por el aumento de CO₂ atmosférico.",
        de: "Die Pufferkapazität des Ozeans stammt hauptsächlich vom Karbonat-Bikarbonat-Puffersystem (CO₂/HCO₃⁻/CO₃²⁻), das hilft, relativ stabilen pH zu erhalten durch Absorption von überschüssiger Säure oder Base, obwohl diese Kapazität durch steigendes atmosphärisches CO₂ überwältigt wird.",
        nl: "De buffer capaciteit van de oceaan komt voornamelijk van het carbonaat-bicarbonaat buffer systeem (CO₂/HCO₃⁻/CO₃²⁻), dat helpt relatief stabiele pH te behouden door overtollig zuur of base te absorberen, hoewel deze capaciteit wordt overweldigd door toenemend atmosferisch CO₂."
      }
    },
    {
      question: {
        en: "What controls the vertical distribution of trace elements in seawater?",
        es: "¿Qué controla la distribución vertical de elementos traza en agua de mar?",
        de: "Was kontrolliert die vertikale Verteilung von Spurenelementen im Meerwasser?",
        nl: "Wat controleert de verticale verdeling van spoorelementen in zeewater?"
      },
      options: [
        { en: "Biological uptake, scavenging, regeneration, and water mass mixing", es: "Absorción biológica, secuestro, regeneración y mezcla de masas de agua", de: "Biologische Aufnahme, Abscheidung, Regeneration und Wassermassenmischung", nl: "Biologische opname, scavenging, regeneratie en watermassa menging" },
        { en: "Only temperature gradients", es: "Solo gradientes de temperatura", de: "Nur Temperaturgradienten", nl: "Alleen temperatuur gradiënten" },
        { en: "Only pressure changes", es: "Solo cambios de presión", de: "Nur Druckänderungen", nl: "Alleen druk veranderingen" },
        { en: "Random distribution", es: "Distribución aleatoria", de: "Zufällige Verteilung", nl: "Willekeurige verdeling" }
      ],
      correct: 0,
      explanation: {
        en: "The vertical distribution of trace elements is controlled by multiple processes: biological uptake in surface waters, scavenging by particles, regeneration during organic matter decomposition, and physical mixing of different water masses with varying trace element signatures.",
        es: "La distribución vertical de elementos traza está controlada por múltiples procesos: absorción biológica en aguas superficiales, secuestro por partículas, regeneración durante descomposición de materia orgánica, y mezcla física de diferentes masas de agua con diferentes firmas de elementos traza.",
        de: "Die vertikale Verteilung von Spurenelementen wird durch mehrere Prozesse kontrolliert: biologische Aufnahme in Oberflächengewässern, Abscheidung durch Partikel, Regeneration während organischer Materie-Zersetzung und physikalische Mischung verschiedener Wassermassen mit variierenden Spurenelement-Signaturen.",
        nl: "De verticale verdeling van spoorelementen wordt gecontroleerd door meerdere processen: biologische opname in oppervlaktewateren, scavenging door deeltjes, regeneratie tijdens organisch materiaal decompositie, en fysieke menging van verschillende watermassa's met variërende spoorelement signaturen."
      }
    },
    {
      question: {
        en: "What is the role of bacterial remineralization in ocean nutrient cycles?",
        es: "¿Cuál es el papel de la remineralización bacteriana en ciclos de nutrientes oceánicos?",
        de: "Welche Rolle spielt bakterielle Remineralisierung in ozeanischen Nährstoffkreisläufen?",
        nl: "Wat is de rol van bacteriële remineralisatie in oceaan nutriënt cycli?"
      },
      options: [
        { en: "Decomposition of organic matter releases nutrients back to dissolved forms", es: "Descomposición de materia orgánica libera nutrientes de vuelta a formas disueltas", de: "Zersetzung organischer Materie setzt Nährstoffe zurück in gelöste Formen frei", nl: "Decompositie van organisch materiaal geeft nutriënten terug aan opgeloste vormen" },
        { en: "Only produces toxic compounds", es: "Solo produce compuestos tóxicos", de: "Produziert nur toxische Verbindungen", nl: "Produceert alleen toxische verbindingen" },
        { en: "Prevents nutrient cycling", es: "Previene el ciclo de nutrientes", de: "Verhindert Nährstoffkreislauf", nl: "Verhindert nutriënt cycling" },
        { en: "Only occurs in hydrothermal vents", es: "Solo ocurre en fuentes hidrotermales", de: "Tritt nur in Hydrothermalquellen auf", nl: "Vindt alleen plaats in hydrothermale bronnen" }
      ],
      correct: 0,
      explanation: {
        en: "Bacterial remineralization is crucial for ocean nutrient cycles as bacteria decompose sinking organic matter, releasing nutrients (N, P, Si, etc.) back to dissolved inorganic forms that can be reused by phytoplankton, completing biogeochemical cycles.",
        es: "La remineralización bacteriana es crucial para los ciclos de nutrientes oceánicos ya que las bacterias descomponen materia orgánica que se hunde, liberando nutrientes (N, P, Si, etc.) de vuelta a formas inorgánicas disueltas que pueden ser reutilizadas por fitoplancton, completando ciclos biogeoquímicos.",
        de: "Bakterielle Remineralisierung ist entscheidend für ozeanische Nährstoffkreisläufe, da Bakterien sinkende organische Materie zersetzen und Nährstoffe (N, P, Si, usw.) zurück in gelöste anorganische Formen freisetzen, die von Phytoplankton wiederverwendet werden können, wodurch biogeochemische Kreisläufe vervollständigt werden.",
        nl: "Bacteriële remineralisatie is cruciaal voor oceaan nutriënt cycli omdat bacteriën zinkend organisch materiaal decomponeren, nutriënten (N, P, Si, enz.) teruggevend aan opgeloste anorganische vormen die kunnen worden hergebruikt door fytoplankton, biogeochemische cycli vollooiend."
      }
    },
    {
      question: {
        en: "What is the significance of the oxygen compensation depth in marine systems?",
        es: "¿Cuál es la significancia de la profundidad de compensación de oxígeno en sistemas marinos?",
        de: "Was ist die Bedeutung der Sauerstoff-Kompensationstiefe in marinen Systemen?",
        nl: "Wat is de betekenis van de zuurstof compensatie diepte in mariene systemen?"
      },
      options: [
        { en: "The depth where oxygen production by photosynthesis equals consumption by respiration", es: "La profundidad donde la producción de oxígeno por fotosíntesis iguala el consumo por respiración", de: "Die Tiefe, wo Sauerstoffproduktion durch Photosynthese dem Verbrauch durch Atmung entspricht", nl: "De diepte waar zuurstofproductie door fotosynthese gelijk is aan verbruik door ademhaling" },
        { en: "The maximum depth of oxygen in oceans", es: "La profundidad máxima de oxígeno en océanos", de: "Die maximale Sauerstofftiefe in Ozeanen", nl: "De maximale diepte van zuurstof in oceanen" },
        { en: "The depth where oxygen becomes toxic", es: "La profundidad donde el oxígeno se vuelve tóxico", de: "Die Tiefe, wo Sauerstoff toxisch wird", nl: "De diepte waar zuurstof giftig wordt" },
        { en: "The surface water layer", es: "La capa de agua superficial", de: "Die Oberflächenwasserschicht", nl: "De oppervlakte waterlaag" }
      ],
      correct: 0,
      explanation: {
        en: "The oxygen compensation depth is where photosynthetic oxygen production equals respiratory oxygen consumption, marking the transition between the euphotic zone (net oxygen production) and deeper waters (net oxygen consumption), typically around 100-200m depth.",
        es: "La profundidad de compensación de oxígeno es donde la producción fotosintética de oxígeno iguala el consumo respiratorio de oxígeno, marcando la transición entre la zona eufótica (producción neta de oxígeno) y aguas más profundas (consumo neto de oxígeno), típicamente alrededor de 100-200m de profundidad.",
        de: "Die Sauerstoff-Kompensationstiefe ist wo photosynthetische Sauerstoffproduktion dem respiratorischen Sauerstoffverbrauch entspricht, markiert den Übergang zwischen der euphotischen Zone (Netto-Sauerstoffproduktion) und tieferen Gewässern (Netto-Sauerstoffverbrauch), typischerweise um 100-200m Tiefe.",
        nl: "De zuurstof compensatie diepte is waar fotosynthetische zuurstofproductie gelijk is aan respiratoir zuurstofverbruik, markerend de overgang tussen de euphotische zone (netto zuurstofproductie) en diepere wateren (netto zuurstofverbruik), typisch rond 100-200m diepte."
      }
    },
    {
      question: {
        en: "How do coastal upwelling systems affect regional ocean chemistry?",
        es: "¿Cómo afectan los sistemas de surgencia costera la química oceánica regional?",
        de: "Wie beeinflussen küstennahe Auftriebssysteme die regionale Ozeanchemie?",
        nl: "Hoe beïnvloeden kustopwelling systemen regionale oceaan chemie?"
      },
      options: [
        { en: "Bring nutrient-rich, oxygen-poor deep water to the surface", es: "Traen agua profunda rica en nutrientes y pobre en oxígeno a la superficie", de: "Bringen nährstoffreiches, sauerstoffarmes Tiefenwasser an die Oberfläche", nl: "Brengen nutriënt-rijk, zuurstof-arm diep water naar het oppervlak" },
        { en: "Only affect temperature", es: "Solo afectan la temperatura", de: "Beeinflussen nur die Temperatur", nl: "Beïnvloeden alleen temperatuur" },
        { en: "Decrease all chemical concentrations", es: "Disminuyen todas las concentraciones químicas", de: "Verringern alle chemischen Konzentrationen", nl: "Verminderen alle chemische concentraties" },
        { en: "Have no chemical effects", es: "No tienen efectos químicos", de: "Haben keine chemischen Effekte", nl: "Hebben geen chemische effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Coastal upwelling systems dramatically alter regional ocean chemistry by bringing cold, nutrient-rich, oxygen-depleted, and CO₂-rich deep water to the surface, creating highly productive but chemically distinct coastal environments with lower pH and oxygen levels.",
        es: "Los sistemas de surgencia costera alteran dramáticamente la química oceánica regional trayendo agua profunda fría, rica en nutrientes, empobrecida en oxígeno y rica en CO₂ a la superficie, creando ambientes costeros altamente productivos pero químicamente distintos con menor pH y niveles de oxígeno.",
        de: "Küstennahe Auftriebssysteme verändern die regionale Ozeanchemie dramatisch, indem sie kaltes, nährstoffreiches, sauerstoffarmes und CO₂-reiches Tiefenwasser an die Oberfläche bringen und hochproduktive aber chemisch unterschiedliche Küstenumgebungen mit niedrigerem pH und Sauerstoffwerten schaffen.",
        nl: "Kustopwelling systemen veranderen regionale oceaan chemie dramatisch door koud, nutriënt-rijk, zuurstof-arm en CO₂-rijk diep water naar het oppervlak te brengen, creërend zeer productieve maar chemisch onderscheiden kustomgevingen met lagere pH en zuurstofniveaus."
      }
    },
    {
      question: {
        en: "What is the role of calcium carbonate saturation state in marine calcification?",
        es: "¿Cuál es el papel del estado de saturación de carbonato de calcio en calcificación marina?",
        de: "Welche Rolle spielt der Kalziumkarbonat-Sättigungszustand in der marinen Verkalkung?",
        nl: "Wat is de rol van calcium carbonaat verzadigingsstatus in mariene calcificatie?"
      },
      options: [
        { en: "Determines the rate and feasibility of shell and skeleton formation by marine organisms", es: "Determina la tasa y viabilidad de formación de conchas y esqueletos por organismos marinos", de: "Bestimmt die Rate und Durchführbarkeit der Schalen- und Skelettbildung durch Meeresorganismen", nl: "Bepaalt de snelheid en haalbaarheid van schelp en skelet vorming door mariene organismen" },
        { en: "Only affects water color", es: "Solo afecta el color del agua", de: "Beeinflusst nur die Wasserfarbe", nl: "Beïnvloedt alleen waterkleur" },
        { en: "Controls water temperature", es: "Controla la temperatura del agua", de: "Kontrolliert Wassertemperatur", nl: "Controleert watertemperatuur" },
        { en: "Has no biological significance", es: "No tiene significado biológico", de: "Hat keine biologische Bedeutung", nl: "Heeft geen biologische betekenis" }
      ],
      correct: 0,
      explanation: {
        en: "Calcium carbonate saturation state directly controls marine calcification rates - when waters are supersaturated, organisms can more easily build shells and skeletons, while undersaturated conditions make calcification energetically expensive or impossible, threatening coral reefs and shellfish.",
        es: "El estado de saturación de carbonato de calcio controla directamente las tasas de calcificación marina - cuando las aguas están supersaturadas, los organismos pueden construir conchas y esqueletos más fácilmente, mientras que condiciones subsaturadas hacen la calcificación energéticamente costosa o imposible, amenazando arrecifes de coral y mariscos.",
        de: "Der Kalziumkarbonat-Sättigungszustand kontrolliert direkt marine Verkalkungsraten - wenn Gewässer übersättigt sind, können Organismen leichter Schalen und Skelette bilden, während untersättigte Bedingungen Verkalkung energetisch teuer oder unmöglich machen und Korallenriffe und Schalentiere bedrohen.",
        nl: "Calcium carbonaat verzadigingsstatus controleert direct mariene calcificatie snelheden - wanneer wateren oververzadigd zijn, kunnen organismen makkelijker schelpen en skeletten bouwen, terwijl onderverzadigde omstandigheden calcificatie energetisch duur of onmogelijk maken, koraalriffen en schelpdieren bedreigend."
      }
    },
    {
      question: {
        en: "What is the significance of dissolved organic phosphorus (DOP) in oligotrophic oceans?",
        es: "¿Cuál es la significancia del fósforo orgánico disuelto (FOD) en océanos oligotróficos?",
        de: "Was ist die Bedeutung von gelöstem organischem Phosphor (DOP) in oligotrophen Ozeanen?",
        nl: "Wat is de betekenis van opgelost organisch fosfor (DOP) in oligotrofe oceanen?"
      },
      options: [
        { en: "Alternative phosphorus source when inorganic phosphate is limiting", es: "Fuente alternativa de fósforo cuando el fosfato inorgánico es limitante", de: "Alternative Phosphorquelle wenn anorganisches Phosphat begrenzt ist", nl: "Alternatieve fosfor bron wanneer anorganisch fosfaat beperkend is" },
        { en: "Only a waste product", es: "Solo un producto de desecho", de: "Nur ein Abfallprodukt", nl: "Alleen een afvalproduct" },
        { en: "Has no nutritional value", es: "No tiene valor nutricional", de: "Hat keinen Nährwert", nl: "Heeft geen voedingswaarde" },
        { en: "Only toxic to marine life", es: "Solo tóxico para la vida marina", de: "Nur giftig für das Meeresleben", nl: "Alleen giftig voor marien leven" }
      ],
      correct: 0,
      explanation: {
        en: "In oligotrophic oceans where inorganic phosphate concentrations are extremely low, dissolved organic phosphorus (DOP) becomes a crucial alternative phosphorus source that phytoplankton can access through enzymatic hydrolysis, supporting primary production in nutrient-limited environments.",
        es: "En océanos oligotróficos donde las concentraciones de fosfato inorgánico son extremadamente bajas, el fósforo orgánico disuelto (FOD) se convierte en una fuente alternativa crucial de fósforo que el fitoplancton puede acceder a través de hidrólisis enzimática, apoyando la producción primaria en ambientes limitados por nutrientes.",
        de: "In oligotrophen Ozeanen, wo anorganische Phosphatkonzentrationen extrem niedrig sind, wird gelöster organischer Phosphor (DOP) zu einer entscheidenden alternativen Phosphorquelle, die Phytoplankton durch enzymatische Hydrolyse nutzen kann, wodurch Primärproduktion in nährstofflimitierten Umgebungen unterstützt wird.",
        nl: "In oligotrofe oceanen waar anorganische fosfaat concentraties extreem laag zijn, wordt opgelost organisch fosfor (DOP) een cruciale alternatieve fosfor bron die fytoplankton kan benaderen door enzymatische hydrolyse, primaire productie ondersteunend in nutriënt-beperkte omgevingen."
      }
    },
    {
      question: {
        en: "How does ocean warming affect dissolved gas concentrations?",
        es: "¿Cómo afecta el calentamiento oceánico las concentraciones de gases disueltos?",
        de: "Wie beeinflusst die Ozeanerwärmung gelöste Gaskonzentrationen?",
        nl: "Hoe beïnvloedt oceaan opwarming opgeloste gas concentraties?"
      },
      options: [
        { en: "Decreases solubility of most gases, reducing dissolved oxygen and CO₂ concentrations", es: "Disminuye la solubilidad de la mayoría de gases, reduciendo concentraciones de oxígeno disuelto y CO₂", de: "Verringert die Löslichkeit der meisten Gase, reduziert gelöste Sauerstoff- und CO₂-Konzentrationen", nl: "Vermindert oplosbaarheid van de meeste gassen, verlaagt opgelost zuurstof en CO₂ concentraties" },
        { en: "Increases all gas concentrations", es: "Aumenta todas las concentraciones de gas", de: "Erhöht alle Gaskonzentrationen", nl: "Verhoogt alle gas concentraties" },
        { en: "Only affects nitrogen concentrations", es: "Solo afecta concentraciones de nitrógeno", de: "Beeinflusst nur Stickstoffkonzentrationen", nl: "Beïnvloedt alleen stikstof concentraties" },
        { en: "Has no effect on gas solubility", es: "No tiene efecto en solubilidad de gas", de: "Hat keinen Effekt auf Gaslöslichkeit", nl: "Heeft geen effect op gas oplosbaarheid" }
      ],
      correct: 0,
      explanation: {
        en: "Ocean warming decreases the solubility of gases in seawater according to Henry's Law, leading to reduced dissolved oxygen concentrations (exacerbating hypoxia), decreased CO₂ absorption capacity, and potential release of dissolved gases to the atmosphere.",
        es: "El calentamiento oceánico disminuye la solubilidad de gases en agua de mar según la Ley de Henry, llevando a concentraciones reducidas de oxígeno disuelto (exacerbando la hipoxia), capacidad disminuida de absorción de CO₂, y liberación potencial de gases disueltos a la atmósfera.",
        de: "Ozeanerwärmung verringert die Löslichkeit von Gasen im Meerwasser nach dem Henry-Gesetz, führt zu reduzierten gelösten Sauerstoffkonzentrationen (verschärft Hypoxie), verringerter CO₂-Absorptionskapazität und potentieller Freisetzung gelöster Gase in die Atmosphäre.",
        nl: "Oceaan opwarming vermindert de oplosbaarheid van gassen in zeewater volgens Henry's Wet, leidend tot verminderde opgelost zuurstofconcentraties (verergert hypoxie), verminderde CO₂ absorptie capaciteit, en potentiële vrijgave van opgeloste gassen aan de atmosfeer."
      }
    },
    {
      question: {
        en: "What is the role of the nitrite maximum layer in ocean nitrogen cycling?",
        es: "¿Cuál es el papel de la capa máxima de nitrito en el ciclo de nitrógeno oceánico?",
        de: "Welche Rolle spielt die Nitrit-Maximum-Schicht im ozeanischen Stickstoffkreislauf?",
        nl: "Wat is de rol van de nitriet maximum laag in oceaan stikstof cycling?"
      },
      options: [
        { en: "Intermediate zone where ammonia oxidation exceeds nitrite oxidation in the nitrogen cycle", es: "Zona intermedia donde la oxidación de amoníaco excede la oxidación de nitrito en el ciclo de nitrógeno", de: "Zwischenzone, wo Ammoniakoxidation Nitritoxidation im Stickstoffkreislauf übertrifft", nl: "Tussenzone waar ammoniak oxidatie nitriet oxidatie in de stikstofcyclus overschrijdt" },
        { en: "Surface layer of maximum productivity", es: "Capa superficial de máxima productividad", de: "Oberflächenschicht maximaler Produktivität", nl: "Oppervlaktelaag van maximale productiviteit" },
        { en: "Deep water formation zone", es: "Zona de formación de agua profunda", de: "Tiefenwasserbildungszone", nl: "Diep water vormingszone" },
        { en: "Area of denitrification only", es: "Área solo de desnitrificación", de: "Bereich nur der Denitrifikation", nl: "Gebied alleen van denitrificatie" }
      ],
      correct: 0,
      explanation: {
        en: "The nitrite maximum layer, typically found in the upper thermocline, represents a zone where the rate of ammonia oxidation to nitrite exceeds the rate of nitrite oxidation to nitrate, creating an accumulation of nitrite that plays an important role in ocean nitrogen cycling.",
        es: "La capa máxima de nitrito, típicamente encontrada en la termoclina superior, representa una zona donde la tasa de oxidación de amoníaco a nitrito excede la tasa de oxidación de nitrito a nitrato, creando una acumulación de nitrito que juega un papel importante en el ciclo de nitrógeno oceánico.",
        de: "Die Nitrit-Maximum-Schicht, typischerweise in der oberen Thermokline gefunden, stellt eine Zone dar, wo die Rate der Ammoniakoxidation zu Nitrit die Rate der Nitritoxidation zu Nitrat übertrifft, wodurch eine Nitritansammlung entsteht, die eine wichtige Rolle im ozeanischen Stickstoffkreislauf spielt.",
        nl: "De nitriet maximum laag, typisch gevonden in de bovenste thermocline, vertegenwoordigt een zone waar de snelheid van ammoniak oxidatie naar nitriet de snelheid van nitriet oxidatie naar nitraat overschrijdt, creërend een accumulatie van nitriet die een belangrijke rol speelt in oceaan stikstof cycling."
      }
    },
    {
      question: {
        en: "What is the importance of silicon cycling in marine diatom ecology?",
        es: "¿Cuál es la importancia del ciclo de silicio en ecología de diatomeas marinas?",
        de: "Was ist die Bedeutung des Siliziumkreislaufs in der marinen Diatomeen-Ökologie?",
        nl: "Wat is het belang van silicium cycling in mariene diatomeeën ecologie?"
      },
      options: [
        { en: "Silicon availability limits diatom growth and affects marine food webs", es: "Disponibilidad de silicio limita crecimiento de diatomeas y afecta redes tróficas marinas", de: "Siliziumverfügbarkeit begrenzt Diatomeenwachstum und beeinflusst marine Nahrungsnetze", nl: "Silicium beschikbaarheid beperkt diatomeeën groei en beïnvloedt mariene voedselketens" },
        { en: "Silicon has no biological role", es: "El silicio no tiene papel biológico", de: "Silizium hat keine biologische Rolle", nl: "Silicium heeft geen biologische rol" },
        { en: "Only affects water clarity", es: "Solo afecta la claridad del agua", de: "Beeinflusst nur die Wasserklarheit", nl: "Beïnvloedt alleen waterhelderheid" },
        { en: "Silicon is always abundant", es: "El silicio siempre es abundante", de: "Silizium ist immer reichlich vorhanden", nl: "Silicium is altijd overvloedig" }
      ],
      correct: 0,
      explanation: {
        en: "Silicon cycling is crucial for marine diatom ecology because diatoms require dissolved silica to build their glass-like frustules (cell walls). Silicon limitation can shift phytoplankton communities away from diatoms toward other species, significantly affecting marine food webs and carbon export.",
        es: "El ciclo de silicio es crucial para la ecología de diatomeas marinas porque las diatomeas requieren sílice disuelto para construir sus frústulos similares al vidrio (paredes celulares). La limitación de silicio puede cambiar comunidades de fitoplancton alejándolas de diatomeas hacia otras especies, afectando significativamente redes tróficas marinas y exportación de carbono.",
        de: "Der Siliziumkreislauf ist entscheidend für die marine Diatomeen-Ökologie, da Diatomeen gelöstes Silizium benötigen, um ihre glasartigen Frusteln (Zellwände) zu bauen. Siliziumlimitierung kann Phytoplanktongemeinschaften von Diatomeen weg zu anderen Arten verschieben, was marine Nahrungsnetze und Kohlenstoffexport erheblich beeinflusst.",
        nl: "Silicium cycling is cruciaal voor mariene diatomeeën ecologie omdat diatomeeën opgelost silica nodig hebben om hun glasachtige frustules (celwanden) te bouwen. Silicium beperking kan fytoplankton gemeenschappen wegsturen van diatomeeën naar andere soorten, significant mariene voedselketens en koolstof export beïnvloedend."
      }
    },
    {
      question: {
        en: "What is the role of carbonic anhydrase in marine carbon chemistry?",
        es: "¿Cuál es el papel de la anhidrasa carbónica en química del carbono marino?",
        de: "Welche Rolle spielt Carboanhydrase in der marinen Kohlenstoffchemie?",
        nl: "Wat is de rol van koolzuuranhydrase in mariene koolstof chemie?"
      },
      options: [
        { en: "Enzyme that catalyzes CO₂-bicarbonate interconversion, facilitating carbon uptake and transport", es: "Enzima que cataliza la interconversión CO₂-bicarbonato, facilitando absorción y transporte de carbono", de: "Enzym, das die CO₂-Bikarbonat-Umwandlung katalysiert und Kohlenstoffaufnahme und -transport erleichtert", nl: "Enzym dat CO₂-bicarbonaat interconversie katalyseert, koolstof opname en transport faciliterend" },
        { en: "Only breaks down organic carbon compounds", es: "Solo descompone compuestos orgánicos de carbono", de: "Zersetzt nur organische Kohlenstoffverbindungen", nl: "Breekt alleen organische koolstofverbindingen af" },
        { en: "Prevents carbon dioxide dissolution", es: "Previene la disolución de dióxido de carbono", de: "Verhindert Kohlendioxid-Auflösung", nl: "Voorkomt koolstofdioxide oplossing" },
        { en: "Only found in terrestrial organisms", es: "Solo se encuentra en organismos terrestres", de: "Nur in terrestrischen Organismen gefunden", nl: "Alleen gevonden in terrestrische organismen" }
      ],
      correct: 0,
      explanation: {
        en: "Carbonic anhydrase is a crucial enzyme in marine organisms that rapidly catalyzes the reversible conversion between CO₂ and bicarbonate (HCO₃⁻), facilitating carbon dioxide uptake, transport, and utilization in photosynthesis and calcification processes.",
        es: "La anhidrasa carbónica es una enzima crucial en organismos marinos que cataliza rápidamente la conversión reversible entre CO₂ y bicarbonato (HCO₃⁻), facilitando la absorción, transporte y utilización de dióxido de carbono en procesos de fotosíntesis y calcificación.",
        de: "Carboanhydrase ist ein entscheidendes Enzym in marinen Organismen, das schnell die reversible Umwandlung zwischen CO₂ und Bikarbonat (HCO₃⁻) katalysiert und Kohlendioxid-Aufnahme, -Transport und -Nutzung in Photosynthese- und Verkalkungsprozessen erleichtert.",
        nl: "Koolzuuranhydrase is een cruciaal enzym in mariene organismen dat snel de omkeerbare conversie tussen CO₂ en bicarbonaat (HCO₃⁻) katalyseert, koolstofdioxide opname, transport en gebruik in fotosynthese en calcificatie processen faciliterend."
      }
    }
  ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/oceanography', level5);
  }
})();
