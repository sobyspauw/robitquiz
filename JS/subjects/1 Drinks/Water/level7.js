// Quiz - Level 7: Drinken - Water (Waterkwaliteit)
(function() {
  const level7 = {
    name: {
      en: "Water Quality",
      es: "Calidad del Agua",
      de: "Wasserqualität",
      nl: "Waterkwaliteit"
    },
    questions: [
      {
        question: {
          en: "What is the WHO guideline value for arsenic in drinking water?",
          es: "¿Cuál es el valor guía de la OMS para arsénico en agua potable?",
          de: "Was ist der WHO-Richtwert für Arsen im Trinkwasser?",
          nl: "Wat is de WHO-richtwaarde voor arseen in drinkwater?"
        },
        options: [
          { en: "5 μg/L", es: "5 μg/L", de: "5 μg/L", nl: "5 μg/L" },
          { en: "10 μg/L", es: "10 μg/L", de: "10 μg/L", nl: "10 μg/L" },
          { en: "25 μg/L", es: "25 μg/L", de: "25 μg/L", nl: "25 μg/L" },
          { en: "50 μg/L", es: "50 μg/L", de: "50 μg/L", nl: "50 μg/L" }
        ],
        correct: 1,
        explanation: {
          en: "The WHO guideline value for arsenic in drinking water is 10 μg/L (micrograms per liter), established due to arsenic's carcinogenic properties and long-term health risks.",
          es: "El valor guía de la OMS para arsénico en agua potable es 10 μg/L (microgramos por litro), establecido debido a las propiedades carcinogénicas del arsénico y riesgos de salud a largo plazo.",
          de: "Der WHO-Richtwert für Arsen im Trinkwasser beträgt 10 μg/L (Mikrogramm pro Liter), festgelegt aufgrund der krebserregenden Eigenschaften von Arsen und langfristigen Gesundheitsrisiken.",
          nl: "De WHO-richtwaarde voor arseen in drinkwater is 10 μg/L (microgram per liter), vastgesteld vanwege de kankerverwekkende eigenschappen van arseen en langetermijn gezondheidsrisico's."
        }
      },
      {
        question: {
          en: "Which parameter is used as the primary indicator of microbiological water quality in drinking water testing?",
          es: "¿Qué parámetro se usa como indicador principal de calidad microbiológica del agua en pruebas de agua potable?",
          de: "Welcher Parameter wird als primärer Indikator für die mikrobiologische Wasserqualität bei Trinkwassertests verwendet?",
          nl: "Welke parameter wordt gebruikt als primaire indicator van microbiologische waterkwaliteit bij drinkwatertesten?"
        },
        options: [
          { en: "Total viable count", es: "Recuento viable total", de: "Gesamtkeimzahl", nl: "Totaal kiemgetal" },
          { en: "E. coli and coliform bacteria", es: "E. coli y bacterias coliformes", de: "E. coli und coliforme Bakterien", nl: "E. coli en colibacteriën" },
          { en: "Enterococci", es: "Enterococos", de: "Enterokokken", nl: "Enterokokken" },
          { en: "Pseudomonas aeruginosa", es: "Pseudomonas aeruginosa", de: "Pseudomonas aeruginosa", nl: "Pseudomonas aeruginosa" }
        ],
        correct: 1,
        explanation: {
          en: "E. coli and coliform bacteria are used as primary indicators because they are naturally present in human and animal intestines, making them reliable indicators of fecal contamination.",
          es: "E. coli y bacterias coliformes se usan como indicadores primarios porque están naturalmente presentes en intestinos humanos y animales, haciéndolos indicadores confiables de contaminación fecal.",
          de: "E. coli und coliforme Bakterien werden als primäre Indikatoren verwendet, weil sie natürlich in menschlichen und tierischen Därmen vorkommen und somit zuverlässige Indikatoren für fäkale Verunreinigung sind.",
          nl: "E. coli en colibacteriën worden gebruikt als primaire indicatoren omdat ze van nature aanwezig zijn in menselijke en dierlijke darmen, waardoor ze betrouwbare indicatoren zijn van fecale verontreiniging."
        }
      },
      {
        question: {
          en: "What does the term 'turbidity' measure in water quality analysis?",
          es: "¿Qué mide el término 'turbidez' en el análisis de calidad del agua?",
          de: "Was misst der Begriff 'Trübung' in der Wasserqualitätsanalyse?",
          nl: "Wat meet de term 'turbiditeit' in waterkwaliteitsanalyse?"
        },
        options: [
          { en: "Dissolved oxygen concentration", es: "Concentración de oxígeno disuelto", de: "Gelöste Sauerstoffkonzentration", nl: "Opgeloste zuurstofconcentratie" },
          { en: "Light scattering by suspended particles", es: "Dispersión de luz por partículas suspendidas", de: "Lichtstreuung durch suspendierte Partikel", nl: "Lichtverstrooiing door zwevende deeltjes" },
          { en: "Total dissolved solids content", es: "Contenido de sólidos disueltos totales", de: "Gesamtgehalt gelöster Feststoffe", nl: "Totaal opgeloste stoffen gehalte" },
          { en: "Chemical oxygen demand", es: "Demanda química de oxígeno", de: "Chemischer Sauerstoffbedarf", nl: "Chemische zuurstofbehoefte" }
        ],
        correct: 1,
        explanation: {
          en: "Turbidity measures the degree of light scattering caused by suspended particles in water, indicating cloudiness and potential contamination. It's measured in NTU (Nephelometric Turbidity Units).",
          es: "La turbidez mide el grado de dispersión de luz causado por partículas suspendidas en agua, indicando turbiedad y contaminación potencial. Se mide en NTU (Unidades Nefelométricas de Turbidez).",
          de: "Trübung misst den Grad der Lichtstreuung durch suspendierte Partikel im Wasser und zeigt Trübheit und potentielle Verunreinigung an. Sie wird in NTU (Nephelometrische Trübungseinheiten) gemessen.",
          nl: "Turbiditeit meet de mate van lichtverstrooiing veroorzaakt door zwevende deeltjes in water, wat troebeling en potentiële verontreiniging aangeeft. Het wordt gemeten in NTU (Nefelometrische Turbiditeit Eenheden)."
        }
      },
      {
        question: {
          en: "What is the maximum allowable lead concentration in drinking water according to most international standards?",
          es: "¿Cuál es la concentración máxima permitida de plomo en agua potable según la mayoría de estándares internacionales?",
          de: "Was ist die maximal zulässige Bleikonzentration im Trinkwasser nach den meisten internationalen Standards?",
          nl: "Wat is de maximaal toelaatbare loodconcentratie in drinkwater volgens de meeste internationale standaarden?"
        },
        options: [
          { en: "5 μg/L", es: "5 μg/L", de: "5 μg/L", nl: "5 μg/L" },
          { en: "10 μg/L", es: "10 μg/L", de: "10 μg/L", nl: "10 μg/L" },
          { en: "15 μg/L", es: "15 μg/L", de: "15 μg/L", nl: "15 μg/L" },
          { en: "25 μg/L", es: "25 μg/L", de: "25 μg/L", nl: "25 μg/L" }
        ],
        correct: 1,
        explanation: {
          en: "Most international standards, including WHO and EU, set the maximum allowable lead concentration at 10 μg/L due to lead's neurotoxic effects, particularly in children.",
          es: "La mayoría de estándares internacionales, incluyendo OMS y UE, establecen la concentración máxima permitida de plomo en 10 μg/L debido a los efectos neurotóxicos del plomo, particularmente en niños.",
          de: "Die meisten internationalen Standards, einschließlich WHO und EU, setzen die maximal zulässige Bleikonzentration auf 10 μg/L fest, aufgrund der neurotoxischen Wirkungen von Blei, besonders bei Kindern.",
          nl: "De meeste internationale standaarden, inclusief WHO en EU, stellen de maximaal toelaatbare loodconcentratie vast op 10 μg/L vanwege de neurotoxische effecten van lood, vooral bij kinderen."
        }
      },
      {
        question: {
          en: "Which analytical technique is most commonly used for detecting trace heavy metals in water?",
          es: "¿Qué técnica analítica se usa más comúnmente para detectar metales pesados traza en agua?",
          de: "Welche Analysetechnik wird am häufigsten zur Erkennung von Schwermetallspuren in Wasser verwendet?",
          nl: "Welke analytische techniek wordt het meest gebruikt voor het detecteren van sporenzware metalen in water?"
        },
        options: [
          { en: "Gas chromatography", es: "Cromatografía de gases", de: "Gaschromatographie", nl: "Gaschromatografie" },
          { en: "Inductively coupled plasma mass spectrometry (ICP-MS)", es: "Espectrometría de masas con plasma acoplado inductivamente (ICP-MS)", de: "Induktiv gekoppelte Plasma-Massenspektrometrie (ICP-MS)", nl: "Inductief gekoppeld plasma massaspectrometrie (ICP-MS)" },
          { en: "High performance liquid chromatography", es: "Cromatografía líquida de alta resolución", de: "Hochleistungsflüssigchromatographie", nl: "Hoge prestatie vloeistofchromatografie" },
          { en: "Fourier transform infrared spectroscopy", es: "Espectroscopia infrarroja de transformada de Fourier", de: "Fourier-Transform-Infrarotspektroskopie", nl: "Fourier transform infrarood spectroscopie" }
        ],
        correct: 1,
        explanation: {
          en: "ICP-MS is the gold standard for trace heavy metal analysis, offering extremely low detection limits (parts per trillion) and ability to analyze multiple elements simultaneously.",
          es: "ICP-MS es el estándar de oro para análisis de metales pesados traza, ofreciendo límites de detección extremadamente bajos (partes por billón) y capacidad de analizar múltiples elementos simultáneamente.",
          de: "ICP-MS ist der Goldstandard für die Analyse von Schwermetallspuren und bietet extrem niedrige Nachweisgrenzen (parts per trillion) und die Fähigkeit, mehrere Elemente gleichzeitig zu analysieren.",
          nl: "ICP-MS is de gouden standaard voor sporenzware metaalanalyse, met extreem lage detectielimieten (parts per trillion) en het vermogen om meerdere elementen tegelijkertijd te analyseren."
        }
      },
      {
        question: {
          en: "What is the significance of Chemical Oxygen Demand (COD) in water quality assessment?",
          es: "¿Cuál es la importancia de la Demanda Química de Oxígeno (DQO) en la evaluación de calidad del agua?",
          de: "Was ist die Bedeutung des Chemischen Sauerstoffbedarfs (CSB) bei der Wasserqualitätsbewertung?",
          nl: "Wat is de betekenis van Chemische Zuurstofbehoefte (CZV) in waterkwaliteitsbeoordeling?"
        },
        options: [
          { en: "Measures dissolved oxygen levels", es: "Mide los niveles de oxígeno disuelto", de: "Misst gelöste Sauerstoffwerte", nl: "Meet opgeloste zuurstofniveaus" },
          { en: "Indicates the amount of oxygen required to oxidize organic pollutants", es: "Indica la cantidad de oxígeno requerida para oxidar contaminantes orgánicos", de: "Zeigt die Menge an Sauerstoff an, die zur Oxidation organischer Schadstoffe erforderlich ist", nl: "Geeft de hoeveelheid zuurstof aan die nodig is om organische verontreinigingen te oxideren" },
          { en: "Measures bacterial activity", es: "Mide la actividad bacteriana", de: "Misst bakterielle Aktivität", nl: "Meet bacteriële activiteit" },
          { en: "Indicates pH stability", es: "Indica la estabilidad del pH", de: "Zeigt pH-Stabilität an", nl: "Geeft pH-stabiliteit aan" }
        ],
        correct: 1,
        explanation: {
          en: "COD measures the amount of oxygen required to chemically oxidize organic matter in water, providing an indication of organic pollution levels and treatment efficiency.",
          es: "DQO mide la cantidad de oxígeno requerida para oxidar químicamente la materia orgánica en agua, proporcionando una indicación de niveles de contaminación orgánica y eficiencia de tratamiento.",
          de: "CSB misst die Menge an Sauerstoff, die zur chemischen Oxidation organischer Stoffe im Wasser erforderlich ist, und gibt Hinweise auf organische Verschmutzungsgrade und Behandlungseffizienz.",
          nl: "CZV meet de hoeveelheid zuurstof die nodig is om organische stoffen in water chemisch te oxideren, wat een indicatie geeft van organische vervuilingsniveaus en behandelingsefficiëntie."
        }
      },
      {
        question: {
          en: "What is the primary concern with nitrate contamination in drinking water?",
          es: "¿Cuál es la principal preocupación con la contaminación por nitrato en agua potable?",
          de: "Was ist das Hauptproblem bei Nitratverunreinigung im Trinkwasser?",
          nl: "Wat is de primaire zorg bij nitraatverontreiniging in drinkwater?"
        },
        options: [
          { en: "Causes immediate poisoning in adults", es: "Causa envenenamiento inmediato en adultos", de: "Verursacht sofortige Vergiftung bei Erwachsenen", nl: "Veroorzaakt onmiddellijke vergiftiging bij volwassenen" },
          { en: "Methemoglobinemia (blue baby syndrome) in infants", es: "Metahemoglobinemia (síndrome del bebé azul) en infantes", de: "Methämoglobinämie (Blausucht) bei Säuglingen", nl: "Methemoglobinemie (blauwe baby syndroom) bij zuigelingen" },
          { en: "Causes kidney damage", es: "Causa daño renal", de: "Verursacht Nierenschäden", nl: "Veroorzaakt niereschade" },
          { en: "Leads to tooth decay", es: "Lleva a caries dental", de: "Führt zu Karies", nl: "Leidt tot tandvlees" }
        ],
        correct: 1,
        explanation: {
          en: "Nitrate contamination is particularly dangerous for infants under 6 months, as it can cause methemoglobinemia (blue baby syndrome), where nitrate interferes with oxygen transport in blood.",
          es: "La contaminación por nitrato es particularmente peligrosa para infantes menores de 6 meses, ya que puede causar metahemoglobinemia (síndrome del bebé azul), donde el nitrato interfiere con el transporte de oxígeno en sangre.",
          de: "Nitratverunreinigung ist besonders gefährlich für Säuglinge unter 6 Monaten, da sie Methämoglobinämie (Blausucht) verursachen kann, wobei Nitrat den Sauerstofftransport im Blut beeinträchtigt.",
          nl: "Nitraatverontreiniging is bijzonder gevaarlijk voor zuigelingen onder 6 maanden, omdat het methemoglobinemie (blauwe baby syndroom) kan veroorzaken, waarbij nitraat het zuurstoftransport in bloed verstoort."
        }
      },
      {
        question: {
          en: "Which disinfection byproduct is of greatest concern in chlorinated drinking water?",
          es: "¿Qué subproducto de desinfección es de mayor preocupación en agua potable clorada?",
          de: "Welches Desinfektionsnebenprodukt ist bei chloriertem Trinkwasser am bedenklichsten?",
          nl: "Welk desinfectie-bijproduct is van grootste zorg in gechloreerd drinkwater?"
        },
        options: [
          { en: "Chloroform", es: "Cloroformo", de: "Chloroform", nl: "Chloroform" },
          { en: "Trihalomethanes (THMs)", es: "Trihalometanos (THMs)", de: "Trihalogenmethane (THMs)", nl: "Trihalomethanen (THMs)" },
          { en: "Chlorite", es: "Clorito", de: "Chlorit", nl: "Chloriet" },
          { en: "Hypochlorous acid", es: "Ácido hipocloroso", de: "Hypochlorige Säure", nl: "Hypochlorigzuur" }
        ],
        correct: 1,
        explanation: {
          en: "Trihalomethanes (THMs) are the primary concern as they are potential carcinogens formed when chlorine reacts with natural organic matter in water. Chloroform is one type of THM.",
          es: "Los trihalometanos (THMs) son la principal preocupación ya que son potenciales carcinógenos formados cuando el cloro reacciona con materia orgánica natural en agua. El cloroformo es un tipo de THM.",
          de: "Trihalogenmethane (THMs) sind das Hauptproblem, da sie potentielle Karzinogene sind, die entstehen, wenn Chlor mit natürlicher organischer Substanz im Wasser reagiert. Chloroform ist eine Art von THM.",
          nl: "Trihalomethanen (THMs) zijn de primaire zorg omdat het potentiële kankerverwekkende stoffen zijn die ontstaan wanneer chloor reageert met natuurlijke organische stoffen in water. Chloroform is een type THM."
        }
      },
      {
        question: {
          en: "What is the typical detection limit for pesticide residues in drinking water analysis?",
          es: "¿Cuál es el límite de detección típico para residuos de pesticidas en análisis de agua potable?",
          de: "Was ist die typische Nachweisgrenze für Pestizidrückstände in der Trinkwasseranalyse?",
          nl: "Wat is de typische detectielimiet voor pesticidenresiduen in drinkwateranalyse?"
        },
        options: [
          { en: "1-10 mg/L", es: "1-10 mg/L", de: "1-10 mg/L", nl: "1-10 mg/L" },
          { en: "0.1-1 mg/L", es: "0.1-1 mg/L", de: "0,1-1 mg/L", nl: "0,1-1 mg/L" },
          { en: "0.01-0.1 μg/L", es: "0.01-0.1 μg/L", de: "0,01-0,1 μg/L", nl: "0,01-0,1 μg/L" },
          { en: "1-10 ng/L", es: "1-10 ng/L", de: "1-10 ng/L", nl: "1-10 ng/L" }
        ],
        correct: 2,
        explanation: {
          en: "Modern analytical methods can detect pesticide residues at extremely low concentrations of 0.01-0.1 μg/L (parts per billion), necessary due to the potential health effects of chronic exposure.",
          es: "Los métodos analíticos modernos pueden detectar residuos de pesticidas en concentraciones extremadamente bajas de 0.01-0.1 μg/L (partes por billón), necesario debido a los efectos potenciales en salud de exposición crónica.",
          de: "Moderne Analysemethoden können Pestizidrückstände bei extrem niedrigen Konzentrationen von 0,01-0,1 μg/L (parts per billion) nachweisen, was aufgrund der möglichen Gesundheitseffekte chronischer Exposition notwendig ist.",
          nl: "Moderne analytische methoden kunnen pesticidenresiduen detecteren bij extreem lage concentraties van 0,01-0,1 μg/L (parts per billion), noodzakelijk vanwege de potentiële gezondheidseffecten van chronische blootstelling."
        }
      },
      {
        question: {
          en: "What does 'hardness' measure in water quality terms?",
          es: "¿Qué mide la 'dureza' en términos de calidad del agua?",
          de: "Was misst 'Härte' in Bezug auf Wasserqualität?",
          nl: "Wat meet 'hardheid' in termen van waterkwaliteit?"
        },
        options: [
          { en: "Total dissolved solids concentration", es: "Concentración de sólidos disueltos totales", de: "Konzentration der gelösten Feststoffe gesamt", nl: "Concentratie van totaal opgeloste stoffen" },
          { en: "Calcium and magnesium ion concentration", es: "Concentración de iones de calcio y magnesio", de: "Kalzium- und Magnesiumionenkonzentration", nl: "Calcium- en magnesiumionconcentratie" },
          { en: "pH buffering capacity", es: "Capacidad de amortiguación del pH", de: "pH-Pufferkapazität", nl: "pH-buffercapaciteit" },
          { en: "Alkalinity measurement", es: "Medición de alcalinidad", de: "Alkalinitätsmessung", nl: "Alkaliniteitsmeting" }
        ],
        correct: 1,
        explanation: {
          en: "Water hardness specifically measures the concentration of calcium and magnesium ions, typically expressed as mg/L CaCO₃ equivalent. It affects soap effectiveness and scale formation.",
          es: "La dureza del agua mide específicamente la concentración de iones de calcio y magnesio, típicamente expresada como mg/L equivalente de CaCO₃. Afecta la efectividad del jabón y formación de cal.",
          de: "Wasserhärte misst spezifisch die Konzentration von Kalzium- und Magnesiumionen, typischerweise ausgedrückt als mg/L CaCO₃-Äquivalent. Sie beeinflusst Seifenwirksamkeit und Kalkbildung.",
          nl: "Waterhardheid meet specifiek de concentratie van calcium- en magnesiumionen, typisch uitgedrukt als mg/L CaCO₃-equivalent. Het beïnvloedt zeepeffectiviteit en kalkvorming."
        }
      },
      {
        question: {
          en: "What is BOD (Biochemical Oxygen Demand)?",
          es: "¿Qué es DBO (Demanda Bioquímica de Oxígeno)?",
          de: "Was ist BSB (Biochemischer Sauerstoffbedarf)?",
          nl: "Wat is BZV (Biochemisch Zuurstofverbruik)?"
        },
        options: [
          { en: "A measure of oxygen required by microorganisms to break down organic matter", es: "Medida de oxígeno requerido por microorganismos para descomponer materia orgánica", de: "Maß für von Mikroorganismen benötigten Sauerstoff zum Abbau organischer Stoffe", nl: "Maat voor zuurstof vereist door micro-organismen om organisch materiaal af te breken" },
          { en: "A measure of water temperature", es: "Medida de temperatura del agua", de: "Maß für Wassertemperatur", nl: "Maat voor watertemperatuur" },
          { en: "A measure of water hardness", es: "Medida de dureza del agua", de: "Maß für Wasserhärte", nl: "Maat voor waterhardheid" },
          { en: "A measure of water volume", es: "Medida de volumen de agua", de: "Maß für Wasservolumen", nl: "Maat voor watervolume" }
        ],
        correct: 0,
        explanation: {
          en: "BOD measures the amount of dissolved oxygen consumed by microorganisms while decomposing organic matter in water over 5 days at 20°C. High BOD indicates high organic pollution. Typical drinking water has BOD <1 mg/L.",
          es: "DBO mide la cantidad de oxígeno disuelto consumido por microorganismos mientras descomponen materia orgánica en agua durante 5 días a 20°C. DBO alta indica alta contaminación orgánica. Agua potable típica tiene DBO <1 mg/L.",
          de: "BSB misst die Menge an gelöstem Sauerstoff, die von Mikroorganismen beim Abbau organischer Stoffe im Wasser über 5 Tage bei 20°C verbraucht wird. Hoher BSB deutet auf hohe organische Verschmutzung hin. Typisches Trinkwasser hat BSB <1 mg/L.",
          nl: "BZV meet de hoeveelheid opgeloste zuurstof verbruikt door micro-organismen tijdens het afbreken van organisch materiaal in water gedurende 5 dagen bij 20°C. Hoog BZV duidt op hoge organische vervuiling. Typisch drinkwater heeft BZV <1 mg/L."
        }
      },
      {
        question: {
          en: "What are coliform bacteria used for in water testing?",
          es: "¿Para qué se usan las bacterias coliformes en pruebas de agua?",
          de: "Wofür werden coliforme Bakterien bei Wassertests verwendet?",
          nl: "Waarvoor worden coliforme bacteriën gebruikt bij watertesten?"
        },
        options: [
          { en: "As indicators of fecal contamination and water quality", es: "Como indicadores de contaminación fecal y calidad del agua", de: "Als Indikatoren für fäkale Verunreinigung und Wasserqualität", nl: "Als indicatoren van fecale besmetting en waterkwaliteit" },
          { en: "To improve water taste", es: "Para mejorar el sabor del agua", de: "Um den Wassergeschmack zu verbessern", nl: "Om watersmaak te verbeteren" },
          { en: "To add minerals to water", es: "Para añadir minerales al agua", de: "Um Mineralien zu Wasser hinzuzufügen", nl: "Om mineralen aan water toe te voegen" },
          { en: "To increase water pH", es: "Para aumentar el pH del agua", de: "Um den pH-Wert des Wassers zu erhöhen", nl: "Om water-pH te verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Coliform bacteria are used as indicator organisms because their presence suggests possible fecal contamination and potential presence of harmful pathogens. E. coli specifically indicates recent fecal contamination. Safe drinking water should have 0 CFU/100mL.",
          es: "Las bacterias coliformes se usan como organismos indicadores porque su presencia sugiere posible contaminación fecal y presencia potencial de patógenos dañinos. E. coli específicamente indica contaminación fecal reciente. El agua potable segura debe tener 0 UFC/100mL.",
          de: "Coliforme Bakterien werden als Indikatororganismen verwendet, weil ihre Anwesenheit auf mögliche fäkale Verunreinigung und potenzielle Anwesenheit schädlicher Krankheitserreger hinweist. E. coli deutet speziell auf kürzliche fäkale Verunreinigung hin. Sicheres Trinkwasser sollte 0 KBE/100mL haben.",
          nl: "Coliforme bacteriën worden gebruikt als indicatororganismen omdat hun aanwezigheid wijst op mogelijke fecale besmetting en potentiële aanwezigheid van schadelijke pathogenen. E. coli duidt specifiek op recente fecale besmetting. Veilig drinkwater moet 0 KVE/100mL hebben."
        }
      },
      {
        question: {
          en: "What is the WHO guideline for maximum nitrate level in drinking water?",
          es: "¿Cuál es la directriz de la OMS para nivel máximo de nitrato en agua potable?",
          de: "Was ist die WHO-Richtlinie für maximalen Nitratgehalt im Trinkwasser?",
          nl: "Wat is de WHO-richtlijn voor maximum nitraatgehalte in drinkwater?"
        },
        options: [
          { en: "10 mg/L", es: "10 mg/L", de: "10 mg/L", nl: "10 mg/L" },
          { en: "25 mg/L", es: "25 mg/L", de: "25 mg/L", nl: "25 mg/L" },
          { en: "50 mg/L", es: "50 mg/L", de: "50 mg/L", nl: "50 mg/L" },
          { en: "100 mg/L", es: "100 mg/L", de: "100 mg/L", nl: "100 mg/L" }
        ],
        correct: 2,
        explanation: {
          en: "WHO guidelines set maximum nitrate level at 50 mg/L to prevent methemoglobinemia ('blue baby syndrome') in infants. Nitrates enter water through agricultural runoff, sewage, and natural mineral dissolution. High levels are especially dangerous for infants under 6 months.",
          es: "Las directrices de la OMS establecen nivel máximo de nitrato en 50 mg/L para prevenir metahemoglobinemia ('síndrome del bebé azul') en infantes. Los nitratos entran al agua por escorrentía agrícola, aguas residuales y disolución mineral natural. Niveles altos son especialmente peligrosos para infantes menores de 6 meses.",
          de: "WHO-Richtlinien setzen maximalen Nitratgehalt auf 50 mg/L, um Methämoglobinämie ('Blausucht') bei Säuglingen zu verhindern. Nitrate gelangen durch landwirtschaftlichen Abfluss, Abwasser und natürliche Mineralauflösung ins Wasser. Hohe Werte sind besonders gefährlich für Säuglinge unter 6 Monaten.",
          nl: "WHO-richtlijnen stellen maximum nitraatgehalte vast op 50 mg/L om methemoglobinemie ('blauwe baby syndroom') bij zuigelingen te voorkomen. Nitraten komen in water via landbouwafvoer, rioolwater en natuurlijke mineraaloplo ssing. Hoge niveaus zijn vooral gevaarlijk voor zuigelingen onder 6 maanden."
        }
      },
      {
        question: {
          en: "What does 'turbidity' measure in water?",
          es: "¿Qué mide 'turbidez' en agua?",
          de: "Was misst 'Trübung' im Wasser?",
          nl: "Wat meet 'troebelheid' in water?"
        },
        options: [
          { en: "Cloudiness or haziness caused by suspended particles", es: "Nubosidad u opacidad causada por partículas suspendidas", de: "Trübung oder Undurchsichtigkeit durch suspendierte Partikel", nl: "Troebeling of waasheid veroorzaakt door zwevende deeltjes" },
          { en: "Water temperature", es: "Temperatura del agua", de: "Wassertemperatur", nl: "Watertemperatuur" },
          { en: "Water pressure", es: "Presión del agua", de: "Wasserdruck", nl: "Waterdruk" },
          { en: "Water hardness", es: "Dureza del agua", de: "Wasserhärte", nl: "Waterhardheid" }
        ],
        correct: 0,
        explanation: {
          en: "Turbidity measures water cloudiness caused by suspended particles (clay, silt, organic matter, microorganisms). It's measured in NTU (Nephelometric Turbidity Units). WHO recommends <5 NTU for drinking water; ideally <1 NTU for effective disinfection.",
          es: "La turbidez mide la nubosidad del agua causada por partículas suspendidas (arcilla, limo, materia orgánica, microorganismos). Se mide en NTU (Unidades Nefelométricas de Turbidez). La OMS recomienda <5 NTU para agua potable; idealmente <1 NTU para desinfección efectiva.",
          de: "Trübung misst Wassertrübung durch suspendierte Partikel (Ton, Schlick, organische Stoffe, Mikroorganismen). Sie wird in NTU (Nephelometrische Trübungseinheiten) gemessen. WHO empfiehlt <5 NTU für Trinkwasser; idealerweise <1 NTU für effektive Desinfektion.",
          nl: "Troebelheid meet watertroebeling veroorzaakt door zwevende deeltjes (klei, slib, organisch materiaal, micro-organismen). Het wordt gemeten in NTU (Nefelometrische Troebelheidsunits). WHO beveelt <5 NTU aan voor drinkwater; idealiter <1 NTU voor effectieve desinfectie."
        }
      },
      {
        question: {
          en: "What are PFAS chemicals in water?",
          es: "¿Qué son los químicos PFAS en agua?",
          de: "Was sind PFAS-Chemikalien im Wasser?",
          nl: "Wat zijn PFAS-chemicaliën in water?"
        },
        options: [
          { en: "Per- and polyfluoroalkyl substances ('forever chemicals') that persist in environment", es: "Sustancias perfluoroalquiladas y polifluoroalquiladas ('químicos eternos') que persisten en ambiente", de: "Per- und polyfluorierte Alkylsubstanzen ('Ewigkeitschemikalien') die in Umwelt verbleiben", nl: "Per- en polyfluoralkylstoffen ('eeuwige chemicaliën') die in milieu blijven" },
          { en: "Beneficial minerals for health", es: "Minerales beneficiosos para salud", de: "Gesundheitsförderliche Mineralien", nl: "Gezonde mineralen" },
          { en: "Natural occurring substances in water", es: "Sustancias que ocurren naturalmente en agua", de: "Natürlich vorkommende Substanzen im Wasser", nl: "Natuurlijk voorkomende stoffen in water" },
          { en: "Water treatment chemicals", es: "Químicos de tratamiento de agua", de: "Wasserbehandlungschemikalien", nl: "Waterbehandelingschemicaliën" }
        ],
        correct: 0,
        explanation: {
          en: "PFAS are synthetic chemicals used in non-stick cookware, water-repellent fabrics, and firefighting foams. They're called 'forever chemicals' because they don't break down naturally. They bioaccumulate and are linked to health issues. EPA recommends <70 ppt (parts per trillion) total PFAS.",
          es: "PFAS son químicos sintéticos usados en utensilios antiadherentes, telas repelentes al agua y espumas contra incendios. Se llaman 'químicos eternos' porque no se descomponen naturalmente. Se bioacumulan y están vinculados a problemas de salud. EPA recomienda <70 ppt (partes por billón) PFAS total.",
          de: "PFAS sind synthetische Chemikalien in Antihaft-Kochgeschirr, wasserabweisenden Stoffen und Feuerlöschschäumen. Sie werden 'Ewigkeitschemikalien' genannt, weil sie sich nicht natürlich abbauen. Sie bioakkumulieren und sind mit Gesundheitsproblemen verbunden. EPA empfiehlt <70 ppt (parts per trillion) Gesamt-PFAS.",
          nl: "PFAS zijn synthetische chemicaliën gebruikt in antiaanbakpannen, waterafstotende stoffen en blusmiddelen. Ze worden 'eeuwige chemicaliën' genoemd omdat ze niet natuurlijk afbreken. Ze bioaccumuleren en zijn verbonden met gezondheidsproblemen. EPA beveelt <70 ppt (parts per trillion) totaal PFAS aan."
        }
      },
      {
        question: {
          en: "What is the difference between 'total hardness' and 'temporary hardness'?",
          es: "¿Cuál es la diferencia entre 'dureza total' y 'dureza temporal'?",
          de: "Was ist der Unterschied zwischen 'Gesamthärte' und 'temporärer Härte'?",
          nl: "Wat is het verschil tussen 'totale hardheid' en 'tijdelijke hardheid'?"
        },
        options: [
          { en: "Temporary hardness can be removed by boiling, total hardness includes permanent hardness", es: "Dureza temporal puede eliminarse hirviendo, dureza total incluye dureza permanente", de: "Temporäre Härte kann durch Kochen entfernt werden, Gesamthärte enthält permanente Härte", nl: "Tijdelijke hardheid kan worden verwijderd door koken, totale hardheid omvat permanente hardheid" },
          { en: "No difference, they are the same", es: "Sin diferencia, son lo mismo", de: "Kein Unterschied, sie sind dasselbe", nl: "Geen verschil, ze zijn hetzelfde" },
          { en: "Total hardness only lasts temporarily", es: "Dureza total solo dura temporalmente", de: "Gesamthärte hält nur vorübergehend an", nl: "Totale hardheid duurt alleen tijdelijk" },
          { en: "Temporary hardness is more severe", es: "Dureza temporal es más severa", de: "Temporäre Härte ist schwerwiegender", nl: "Tijdelijke hardheid is ernstiger" }
        ],
        correct: 0,
        explanation: {
          en: "Temporary (carbonate) hardness is caused by calcium/magnesium bicarbonates and can be removed by boiling, which precipitates carbonates. Permanent (non-carbonate) hardness is caused by calcium/magnesium sulfates/chlorides and remains after boiling. Total hardness = temporary + permanent hardness.",
          es: "Dureza temporal (carbonato) es causada por bicarbonatos de calcio/magnesio y puede eliminarse hirviendo, lo que precipita carbonatos. Dureza permanente (no carbonato) es causada por sulfatos/cloruros de calcio/magnesio y permanece tras hervir. Dureza total = dureza temporal + permanente.",
          de: "Temporäre (Karbonat-)Härte wird durch Calcium-/Magnesiumbikarbonate verursacht und kann durch Kochen entfernt werden, was Karbonate ausfällt. Permanente (Nicht-Karbonat-)Härte wird durch Calcium-/Magnesiumsulfate/-chloride verursacht und bleibt nach dem Kochen. Gesamthärte = temporäre + permanente Härte.",
          nl: "Tijdelijke (carbonaat)hardheid wordt veroorzaakt door calcium/magnesiumbicarbonaten en kan worden verwijderd door koken, wat carbonaten precipiteert. Permanente (niet-carbonaat)hardheid wordt veroorzaakt door calcium/magnesiumsulfaten/chloriden en blijft na koken. Totale hardheid = tijdelijke + permanente hardheid."
        }
      },
      {
        question: {
          en: "What is the safe maximum lead level in drinking water according to EPA?",
          es: "¿Cuál es el nivel máximo seguro de plomo en agua potable según EPA?",
          de: "Was ist der sichere maximale Bleigehalt im Trinkwasser laut EPA?",
          nl: "Wat is het veilige maximum loodgehalte in drinkwater volgens EPA?"
        },
        options: [
          { en: "Zero - no safe level, action level is 15 ppb", es: "Cero - sin nivel seguro, nivel de acción es 15 ppb", de: "Null - kein sicherer Wert, Aktionswert ist 15 ppb", nl: "Nul - geen veilig niveau, actieniveau is 15 ppb" },
          { en: "50 ppb", es: "50 ppb", de: "50 ppb", nl: "50 ppb" },
          { en: "100 ppb", es: "100 ppb", de: "100 ppb", nl: "100 ppb" },
          { en: "500 ppb", es: "500 ppb", de: "500 ppb", nl: "500 ppb" }
        ],
        correct: 0,
        explanation: {
          en: "EPA states there is no safe level of lead in drinking water. The action level is 15 ppb (parts per billion) - if exceeded, water systems must take corrective action. Lead exposure causes neurological damage, especially in children. Lead typically leaches from old pipes and solder.",
          es: "EPA afirma que no hay nivel seguro de plomo en agua potable. El nivel de acción es 15 ppb (partes por billón) - si se excede, sistemas de agua deben tomar acción correctiva. La exposición al plomo causa daño neurológico, especialmente en niños. El plomo típicamente se filtra de tuberías y soldadura viejas.",
          de: "EPA erklärt, es gibt keinen sicheren Bleigehalt im Trinkwasser. Der Aktionswert ist 15 ppb (parts per billion) - bei Überschreitung müssen Wassersysteme Korrekturmaßnahmen ergreifen. Bleiexposition verursacht neurologische Schäden, besonders bei Kindern. Blei gelangt typischerweise aus alten Rohren und Lötmitteln ins Wasser.",
          nl: "EPA stelt dat er geen veilig loodgehalte is in drinkwater. Het actieniveau is 15 ppb (parts per billion) - indien overschreden moeten watersystemen corrigerende actie ondernemen. Loodblootstelling veroorzaakt neurologische schade, vooral bij kinderen. Lood lekt typisch uit oude leidingen en soldeer."
        }
      },
      {
        question: {
          en: "What is COD (Chemical Oxygen Demand)?",
          es: "¿Qué es DQO (Demanda Química de Oxígeno)?",
          de: "Was ist CSB (Chemischer Sauerstoffbedarf)?",
          nl: "Wat is CZV (Chemisch Zuurstofverbruik)?"
        },
        options: [
          { en: "Amount of oxygen required to chemically oxidize organic and inorganic matter in water", es: "Cantidad de oxígeno requerida para oxidar químicamente materia orgánica e inorgánica en agua", de: "Menge an Sauerstoff erforderlich zur chemischen Oxidation organischer und anorganischer Stoffe im Wasser", nl: "Hoeveelheid zuurstof vereist om organisch en anorganisch materiaal in water chemisch te oxideren" },
          { en: "Cost of water treatment", es: "Costo de tratamiento de agua", de: "Kosten der Wasseraufbereitung", nl: "Kosten van waterbehandeling" },
          { en: "Color of water", es: "Color del agua", de: "Farbe des Wassers", nl: "Kleur van water" },
          { en: "Conductivity of water", es: "Conductividad del agua", de: "Leitfähigkeit des Wassers", nl: "Geleidbaarheid van water" }
        ],
        correct: 0,
        explanation: {
          en: "COD measures the amount of oxygen required to chemically oxidize all organic and oxidizable inorganic matter in water using strong oxidizing agents. COD is always higher than BOD and results are obtained faster (2-3 hours vs 5 days). High COD indicates pollution.",
          es: "DQO mide la cantidad de oxígeno requerida para oxidar químicamente toda materia orgánica e inorgánica oxidizable en agua usando agentes oxidantes fuertes. DQO es siempre mayor que DBO y resultados se obtienen más rápido (2-3 horas vs 5 días). DQO alta indica contaminación.",
          de: "CSB misst die Menge an Sauerstoff, die zur chemischen Oxidation aller organischen und oxidierbaren anorganischen Stoffe im Wasser mit starken Oxidationsmitteln erforderlich ist. CSB ist immer höher als BSB und Ergebnisse werden schneller erhalten (2-3 Stunden vs 5 Tage). Hoher CSB deutet auf Verschmutzung hin.",
          nl: "CZV meet de hoeveelheid zuurstof vereist om al het organische en oxideerbare anorganische materiaal in water chemisch te oxideren met sterke oxidatiemiddelen. CZV is altijd hoger dan BZV en resultaten worden sneller verkregen (2-3 uur vs 5 dagen). Hoog CZV duidt op vervuiling."
        }
      },
      {
        question: {
          en: "What is the purpose of residual chlorine in treated water?",
          es: "¿Cuál es el propósito del cloro residual en agua tratada?",
          de: "Was ist der Zweck von Restchlor in behandeltem Wasser?",
          nl: "Wat is het doel van restchloor in behandeld water?"
        },
        options: [
          { en: "To maintain disinfection during distribution and prevent recontamination", es: "Mantener desinfección durante distribución y prevenir recontaminación", de: "Desinfektion während Verteilung aufrechterhalten und Neuverschmutzung verhindern", nl: "Desinfectie handhaven tijdens distributie en herbesmetting voorkomen" },
          { en: "To improve water taste", es: "Mejorar sabor del agua", de: "Wassergeschmack verbessern", nl: "Watersmaak verbeteren" },
          { en: "To add minerals", es: "Añadir minerales", de: "Mineralien hinzufügen", nl: "Mineralen toevoegen" },
          { en: "To increase water pressure", es: "Aumentar presión del agua", de: "Wasserdruck erhöhen", nl: "Waterdruk verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Residual chlorine (free chlorine 0.2-2.0 mg/L) is maintained in distribution systems to provide continuous disinfection protection, prevent bacterial regrowth, and indicate water hasn't been contaminated during transport. It's the 'safety buffer' ensuring water remains safe until consumed.",
          es: "El cloro residual (cloro libre 0.2-2.0 mg/L) se mantiene en sistemas de distribución para proporcionar protección de desinfección continua, prevenir recrecimiento bacterial e indicar que agua no ha sido contaminada durante transporte. Es el 'amortiguador de seguridad' asegurando que agua permanece segura hasta consumo.",
          de: "Restchlor (freies Chlor 0,2-2,0 mg/L) wird in Verteilungssystemen aufrechterhalten, um kontinuierlichen Desinfektionsschutz zu bieten, bakterielles Nachwachsen zu verhindern und anzuzeigen, dass Wasser während Transport nicht kontaminiert wurde. Es ist der 'Sicherheitspuffer', der sicherstellt, dass Wasser bis zum Verzehr sicher bleibt.",
          nl: "Restchloor (vrij chloor 0,2-2,0 mg/L) wordt in distributiesystemen gehandhaafd om continue desinfectiebescherming te bieden, bacteriële hergroei te voorkomen en aan te geven dat water niet besmet is tijdens transport. Het is de 'veiligheidsbuffer' die ervoor zorgt dat water veilig blijft tot consumptie."
        }
      },
      {
        question: {
          en: "What causes 'blue-green' or 'rotten egg' smell in water?",
          es: "¿Qué causa olor 'azul-verde' o 'huevo podrido' en agua?",
          de: "Was verursacht 'blau-grünen' oder 'faulen Ei' Geruch im Wasser?",
          nl: "Wat veroorzaakt 'blauwgroene' of 'rotte ei' geur in water?"
        },
        options: [
          { en: "Hydrogen sulfide gas (H₂S) from bacterial decomposition", es: "Gas sulfuro de hidrógeno (H₂S) de descomposición bacterial", de: "Schwefelwasserstoffgas (H₂S) aus bakteriellem Abbau", nl: "Waterstofsulfidegas (H₂S) van bacteriële afbraak" },
          { en: "High oxygen content", es: "Alto contenido de oxígeno", de: "Hoher Sauerstoffgehalt", nl: "Hoog zuurstofgehalte" },
          { en: "Chlorine disinfection", es: "Desinfección con cloro", de: "Chlordesinfektion", nl: "Chloordesinfectie" },
          { en: "Mineral content", es: "Contenido mineral", de: "Mineralgehalt", nl: "Mineraalgehalte" }
        ],
        correct: 0,
        explanation: {
          en: "Hydrogen sulfide (H₂S) gas causes the characteristic 'rotten egg' smell. It's produced by sulfate-reducing bacteria in oxygen-depleted groundwater, hot water heaters, or plumbing systems. While unpleasant and corrosive to pipes, low concentrations (<0.5 mg/L) aren't typically harmful, but water should be treated.",
          es: "El gas sulfuro de hidrógeno (H₂S) causa el olor característico a 'huevo podrido'. Es producido por bacterias reductoras de sulfato en agua subterránea sin oxígeno, calentadores de agua o sistemas de plomería. Aunque desagradable y corrosivo para tuberías, concentraciones bajas (<0.5 mg/L) típicamente no son dañinas, pero agua debe tratarse.",
          de: "Schwefelwasserstoffgas (H₂S) verursacht den charakteristischen 'faulen Ei' Geruch. Es wird von sulfatreduzierenden Bakterien in sauerstoffarmem Grundwasser, Warmwasserbereitern oder Rohrleitungssystemen produziert. Obwohl unangenehm und korrosiv für Rohre, sind niedrige Konzentrationen (<0,5 mg/L) typischerweise nicht schädlich, aber Wasser sollte behandelt werden.",
          nl: "Waterstofsulfidegas (H₂S) veroorzaakt de karakteristieke 'rotte ei' geur. Het wordt geproduceerd door sulfaatreducerende bacteriën in zuurstofarm grondwater, warmwatertoestellen of leidingsystemen. Hoewel onaangenaam en corrosief voor leidingen, zijn lage concentraties (<0,5 mg/L) typisch niet schadelijk, maar water moet worden behandeld."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
