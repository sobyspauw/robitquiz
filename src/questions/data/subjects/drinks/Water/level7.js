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
      {
        question: {
          en: "What is the pH range for safe drinking water according to WHO guidelines?",
          es: "¿Cuál es el rango de pH para agua potable segura según directrices de la OMS?",
          de: "Was ist der pH-Bereich für sicheres Trinkwasser laut WHO-Richtlinien?",
          nl: "Wat is het pH-bereik voor veilig drinkwater volgens WHO-richtlijnen?"
        },
        options: [
          { en: "5.0-6.0", es: "5.0-6.0", de: "5,0-6,0", nl: "5,0-6,0" },
          { en: "6.5-8.5", es: "6.5-8.5", de: "6,5-8,5", nl: "6,5-8,5" },
          { en: "9.0-10.0", es: "9.0-10.0", de: "9,0-10,0", nl: "9,0-10,0" },
          { en: "4.0-12.0", es: "4.0-12.0", de: "4,0-12,0", nl: "4,0-12,0" }
        ],
        correct: 1,
        explanation: {
          en: "WHO recommends pH range of 6.5-8.5 for drinking water. Water outside this range may be corrosive (low pH) or have unpleasant taste/scaling issues (high pH). Extreme pH can also reduce disinfection effectiveness.",
          es: "La OMS recomienda rango de pH de 6.5-8.5 para agua potable. Agua fuera de este rango puede ser corrosiva (pH bajo) o tener sabor desagradable/problemas de incrustación (pH alto). pH extremo también puede reducir efectividad de desinfección.",
          de: "WHO empfiehlt pH-Bereich von 6,5-8,5 für Trinkwasser. Wasser außerhalb dieses Bereichs kann korrosiv sein (niedriger pH) oder unangenehmen Geschmack/Verkalkungsprobleme haben (hoher pH). Extremer pH kann auch Desinfektionswirksamkeit reduzieren.",
          nl: "WHO beveelt pH-bereik van 6,5-8,5 aan voor drinkwater. Water buiten dit bereik kan corrosief zijn (lage pH) of een onaangename smaak/aanslag problemen hebben (hoge pH). Extreme pH kan ook desinfectie-effectiviteit verminderen."
        }
      },
      {
        question: {
          en: "What does TDS (Total Dissolved Solids) measure in water?",
          es: "¿Qué mide TDS (Sólidos Disueltos Totales) en agua?",
          de: "Was misst TDS (gelöste Feststoffe gesamt) im Wasser?",
          nl: "Wat meet TDS (Totaal Opgeloste Stoffen) in water?"
        },
        options: [
          { en: "Suspended particles and sediment", es: "Partículas suspendidas y sedimento", de: "Suspendierte Partikel und Sediment", nl: "Zwevende deeltjes en sediment" },
          { en: "All dissolved minerals, salts, and organic matter", es: "Todos los minerales disueltos, sales y materia orgánica", de: "Alle gelösten Mineralien, Salze und organische Stoffe", nl: "Alle opgeloste mineralen, zouten en organische stoffen" },
          { en: "Bacterial contamination level", es: "Nivel de contaminación bacteriana", de: "Bakterielle Kontaminationsgrad", nl: "Bacteriële besmettingsniveau" },
          { en: "Water temperature", es: "Temperatura del agua", de: "Wassertemperatur", nl: "Watertemperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "TDS measures the total concentration of dissolved substances in water, including minerals (calcium, magnesium, sodium), salts, and some organic matter. It's measured in mg/L or ppm. WHO suggests <1000 mg/L for acceptable taste; <600 mg/L is ideal.",
          es: "TDS mide la concentración total de sustancias disueltas en agua, incluyendo minerales (calcio, magnesio, sodio), sales y algo de materia orgánica. Se mide en mg/L o ppm. OMS sugiere <1000 mg/L para sabor aceptable; <600 mg/L es ideal.",
          de: "TDS misst die Gesamtkonzentration gelöster Substanzen im Wasser, einschließlich Mineralien (Kalzium, Magnesium, Natrium), Salze und einige organische Stoffe. Es wird in mg/L oder ppm gemessen. WHO empfiehlt <1000 mg/L für akzeptablen Geschmack; <600 mg/L ist ideal.",
          nl: "TDS meet de totale concentratie opgeloste stoffen in water, inclusief mineralen (calcium, magnesium, natrium), zouten en enige organische stoffen. Het wordt gemeten in mg/L of ppm. WHO suggereert <1000 mg/L voor acceptabele smaak; <600 mg/L is ideaal."
        }
      },
      {
        question: {
          en: "What are emerging contaminants (ECs) in water?",
          es: "¿Qué son contaminantes emergentes (CE) en agua?",
          de: "Was sind neu auftretende Schadstoffe (ECs) im Wasser?",
          nl: "Wat zijn opkomende verontreinigingen (ECs) in water?"
        },
        options: [
          { en: "New pollutants not yet regulated, including pharmaceuticals, hormones, and microplastics", es: "Nuevos contaminantes aún no regulados, incluyendo farmacéuticos, hormonas y microplásticos", de: "Neue noch nicht regulierte Schadstoffe, einschließlich Pharmazeutika, Hormone und Mikroplastik", nl: "Nieuwe nog niet gereguleerde verontreinigingen, inclusief farmaceutica, hormonen en microplastics" },
          { en: "Bacteria that emerge from water", es: "Bacterias que emergen del agua", de: "Bakterien, die aus Wasser auftauchen", nl: "Bacteriën die uit water opkomen" },
          { en: "Minerals forming in water", es: "Minerales formándose en agua", de: "Mineralien, die sich im Wasser bilden", nl: "Mineralen die zich in water vormen" },
          { en: "Only radioactive materials", es: "Solo materiales radiactivos", de: "Nur radioaktive Materialien", nl: "Alleen radioactieve materialen" }
        ],
        correct: 0,
        explanation: {
          en: "Emerging contaminants are newly identified or previously unrecognized pollutants not yet regulated by water quality standards. Examples include pharmaceuticals (antibiotics, painkillers), personal care products, hormones, PFAS, microplastics, and nanomaterials. Research is ongoing to understand their health impacts.",
          es: "Los contaminantes emergentes son contaminantes recién identificados o previamente no reconocidos aún no regulados por estándares de calidad de agua. Ejemplos incluyen farmacéuticos (antibióticos, analgésicos), productos de cuidado personal, hormonas, PFAS, microplásticos y nanomateriales. La investigación continúa para entender sus impactos en salud.",
          de: "Neu auftretende Schadstoffe sind neu identifizierte oder zuvor nicht erkannte Schadstoffe, die noch nicht durch Wasserqualitätsstandards reguliert sind. Beispiele umfassen Pharmazeutika (Antibiotika, Schmerzmittel), Körperpflegeprodukte, Hormone, PFAS, Mikroplastik und Nanomaterialien. Forschung läuft, um ihre Gesundheitsauswirkungen zu verstehen.",
          nl: "Opkomende verontreinigingen zijn nieuw geïdentificeerde of eerder onherkende verontreinigingen die nog niet gereguleerd zijn door waterkwaliteitsnormen. Voorbeelden zijn farmaceutica (antibiotica, pijnstillers), persoonlijke verzorgingsproducten, hormonen, PFAS, microplastics en nanomaterialen. Onderzoek loopt om hun gezondheidsimpact te begrijpen."
        }
      },
      {
        question: {
          en: "What is the Safe Drinking Water Act (SDWA)?",
          es: "¿Qué es la Ley de Agua Potable Segura (SDWA)?",
          de: "Was ist der Safe Drinking Water Act (SDWA)?",
          nl: "Wat is de Safe Drinking Water Act (SDWA)?"
        },
        options: [
          { en: "US federal law establishing standards for drinking water quality and protecting sources", es: "Ley federal de EE.UU. que establece estándares para calidad de agua potable y protege fuentes", de: "US-Bundesgesetz zur Festlegung von Trinkwasserqualitätsstandards und Quellenschutz", nl: "Amerikaanse federale wet die normen vaststelt voor drinkwaterkwaliteit en bronnen beschermt" },
          { en: "International water trade agreement", es: "Acuerdo internacional de comercio de agua", de: "Internationales Wasserhandelsabkommen", nl: "Internationale waterhandelsovereenkomst" },
          { en: "Water conservation program", es: "Programa de conservación de agua", de: "Wasserschutzprogramm", nl: "Waterbesparingsprogramma" },
          { en: "Water pricing regulation", es: "Regulación de precios del agua", de: "Wasserpreisregulierung", nl: "Waterprijsregulering" }
        ],
        correct: 0,
        explanation: {
          en: "The SDWA (1974, amended 1996) is US federal law authorizing EPA to set national standards for drinking water contaminants. It establishes Maximum Contaminant Levels (MCLs), requires monitoring and reporting, protects drinking water sources from wellhead to tap, and mandates public notification of violations.",
          es: "El SDWA (1974, enmendado 1996) es ley federal de EE.UU. que autoriza a EPA establecer estándares nacionales para contaminantes de agua potable. Establece Niveles Máximos de Contaminantes (MCL), requiere monitoreo e informes, protege fuentes de agua potable desde pozo hasta grifo, y ordena notificación pública de violaciones.",
          de: "Der SDWA (1974, geändert 1996) ist US-Bundesgesetz, das EPA ermächtigt, nationale Standards für Trinkwasserschadstoffe festzulegen. Es legt Maximale Schadstoffwerte (MCLs) fest, erfordert Überwachung und Berichterstattung, schützt Trinkwasserquellen von Brunnen bis Wasserhahn und verlangt öffentliche Bekanntmachung von Verstößen.",
          nl: "De SDWA (1974, gewijzigd 1996) is Amerikaanse federale wet die EPA machtigt om nationale normen voor drinkwaterverontreinigingen vast te stellen. Het stelt Maximale Verontreinigingsniveaus (MCLs) vast, vereist monitoring en rapportage, beschermt drinkwaterbronnen van bron tot kraan, en verplicht publieke kennisgeving van overtredingen."
        }
      },
      {
        question: {
          en: "What is chlorine demand in water treatment?",
          es: "¿Qué es la demanda de cloro en tratamiento de agua?",
          de: "Was ist Chlorbedarf bei der Wasseraufbereitung?",
          nl: "Wat is chloorvraag bij waterbehandeling?"
        },
        options: [
          { en: "The amount of chlorine consumed by reactions with contaminants before residual is established", es: "La cantidad de cloro consumida por reacciones con contaminantes antes de establecer residual", de: "Die Menge an Chlor, die durch Reaktionen mit Schadstoffen verbraucht wird, bevor Restchlor entsteht", nl: "De hoeveelheid chloor verbruikt door reacties met verontreinigingen voordat residu wordt vastgesteld" },
          { en: "Public demand for chlorinated water", es: "Demanda pública de agua clorada", de: "Öffentliche Nachfrage nach chloriertem Wasser", nl: "Publieke vraag naar gechloreerd water" },
          { en: "Cost of chlorine treatment", es: "Costo de tratamiento con cloro", de: "Kosten der Chlorbehandlung", nl: "Kosten van chloorbehandeling" },
          { en: "Legal requirement for chlorine levels", es: "Requisito legal para niveles de cloro", de: "Gesetzliche Anforderung für Chlorwerte", nl: "Wettelijke vereiste voor chloorniveaus" }
        ],
        correct: 0,
        explanation: {
          en: "Chlorine demand is the amount of chlorine consumed by reactions with organic matter, ammonia, iron, manganese, and other reducing substances in water before free chlorine residual is established. Higher organic content = higher chlorine demand. Water operators must add enough chlorine to satisfy demand plus maintain residual (0.2-2.0 mg/L).",
          es: "La demanda de cloro es la cantidad de cloro consumida por reacciones con materia orgánica, amoníaco, hierro, manganeso y otras sustancias reductoras en agua antes de establecer cloro libre residual. Mayor contenido orgánico = mayor demanda de cloro. Operadores de agua deben añadir suficiente cloro para satisfacer demanda más mantener residual (0.2-2.0 mg/L).",
          de: "Chlorbedarf ist die Menge an Chlor, die durch Reaktionen mit organischen Stoffen, Ammoniak, Eisen, Mangan und anderen reduzierenden Substanzen im Wasser verbraucht wird, bevor freies Restchlor entsteht. Höherer organischer Gehalt = höherer Chlorbedarf. Wasserbetreiber müssen genug Chlor hinzufügen, um Bedarf zu decken plus Restchlor zu erhalten (0,2-2,0 mg/L).",
          nl: "Chloorvraag is de hoeveelheid chloor verbruikt door reacties met organisch materiaal, ammoniak, ijzer, mangaan en andere reducerende stoffen in water voordat vrij restchloor wordt vastgesteld. Hoger organisch gehalte = hogere chloorvraag. Waterbeheerders moeten voldoende chloor toevoegen om vraag te voldoen plus residu te handhaven (0,2-2,0 mg/L)."
        }
      },
      {
        question: {
          en: "What is the breakpoint chlorination curve?",
          es: "¿Qué es la curva de cloración en punto de ruptura?",
          de: "Was ist die Breakpoint-Chlorierungskurve?",
          nl: "Wat is de breekpunt chloreringscurve?"
        },
        options: [
          { en: "Graph showing chlorine residual vs chlorine dose, identifying breakpoint where free chlorine forms", es: "Gráfico que muestra residual de cloro vs dosis de cloro, identificando punto de ruptura donde se forma cloro libre", de: "Grafik, die Restchlor vs. Chlordosis zeigt und Breakpoint identifiziert, wo freies Chlor entsteht", nl: "Grafiek die chloorresidu vs chloordosis toont, waarbij breekpunt wordt geïdentificeerd waar vrij chloor zich vormt" },
          { en: "Point where water pipes break", es: "Punto donde tuberías de agua se rompen", de: "Punkt, an dem Wasserrohre brechen", nl: "Punt waar waterleidingen breken" },
          { en: "Maximum chlorine storage capacity", es: "Capacidad máxima de almacenamiento de cloro", de: "Maximale Chlorspeicherkapazität", nl: "Maximale chlooropslag capaciteit" },
          { en: "Chlorine expiration date", es: "Fecha de caducidad del cloro", de: "Chlor-Verfallsdatum", nl: "Chloor vervaldatum" }
        ],
        correct: 0,
        explanation: {
          en: "The breakpoint chlorination curve shows that as chlorine is added: (1) chlorine reacts with reducing agents, (2) chloramines form (combined chlorine), (3) at breakpoint, chloramines are oxidized/destroyed, (4) beyond breakpoint, free chlorine residual increases. Breakpoint chlorination ensures effective disinfection by destroying chloramines.",
          es: "La curva de cloración en punto de ruptura muestra que a medida que se añade cloro: (1) cloro reacciona con agentes reductores, (2) se forman cloraminas (cloro combinado), (3) en punto de ruptura, cloraminas son oxidadas/destruidas, (4) más allá del punto de ruptura, cloro libre residual aumenta. Cloración en punto de ruptura asegura desinfección efectiva destruyendo cloraminas.",
          de: "Die Breakpoint-Chlorierungskurve zeigt, dass bei Chlorzugabe: (1) Chlor mit Reduktionsmitteln reagiert, (2) Chloramine entstehen (gebundenes Chlor), (3) am Breakpoint Chloramine oxidiert/zerstört werden, (4) über den Breakpoint hinaus freies Restchlor zunimmt. Breakpoint-Chlorierung sichert effektive Desinfektion durch Zerstörung von Chloraminen.",
          nl: "De breekpunt chloreringscurve toont dat naarmate chloor wordt toegevoegd: (1) chloor reageert met reductiemiddelen, (2) chloramines vormen (gecombineerd chloor), (3) bij breekpunt worden chloramines geoxideerd/vernietigd, (4) voorbij breekpunt neemt vrij chloorresidu toe. Breekpunt chlorering zorgt voor effectieve desinfectie door chloramines te vernietigen."
        }
      },
      {
        question: {
          en: "What is the difference between free chlorine and total chlorine?",
          es: "¿Cuál es la diferencia entre cloro libre y cloro total?",
          de: "Was ist der Unterschied zwischen freiem Chlor und Gesamtchlor?",
          nl: "Wat is het verschil tussen vrij chloor en totaal chloor?"
        },
        options: [
          { en: "Free chlorine is available for disinfection; total chlorine includes free + combined (chloramines)", es: "Cloro libre está disponible para desinfección; cloro total incluye libre + combinado (cloraminas)", de: "Freies Chlor ist für Desinfektion verfügbar; Gesamtchlor umfasst freies + gebundenes (Chloramine)", nl: "Vrij chloor is beschikbaar voor desinfectie; totaal chloor omvat vrij + gecombineerd (chloramines)" },
          { en: "Free chlorine costs nothing, total chlorine has a cost", es: "Cloro libre no cuesta nada, cloro total tiene un costo", de: "Freies Chlor kostet nichts, Gesamtchlor hat Kosten", nl: "Vrij chloor kost niets, totaal chloor heeft kosten" },
          { en: "No difference, they are the same", es: "Sin diferencia, son lo mismo", de: "Kein Unterschied, sie sind dasselbe", nl: "Geen verschil, ze zijn hetzelfde" },
          { en: "Total chlorine is for swimming pools only", es: "Cloro total es solo para piscinas", de: "Gesamtchlor ist nur für Schwimmbäder", nl: "Totaal chloor is alleen voor zwembaden" }
        ],
        correct: 0,
        explanation: {
          en: "Free chlorine (HOCl, OCl⁻) is the active disinfecting form. Combined chlorine (chloramines) forms when chlorine reacts with ammonia/nitrogen compounds - it disinfects slowly and causes 'chlorine smell'. Total chlorine = free + combined. For effective disinfection, free chlorine should be 0.2-2.0 mg/L in drinking water.",
          es: "Cloro libre (HOCl, OCl⁻) es la forma desinfectante activa. Cloro combinado (cloraminas) se forma cuando cloro reacciona con amoníaco/compuestos de nitrógeno - desinfecta lentamente y causa 'olor a cloro'. Cloro total = libre + combinado. Para desinfección efectiva, cloro libre debe ser 0.2-2.0 mg/L en agua potable.",
          de: "Freies Chlor (HOCl, OCl⁻) ist die aktive desinfizierende Form. Gebundenes Chlor (Chloramine) entsteht, wenn Chlor mit Ammoniak/Stickstoffverbindungen reagiert - es desinfiziert langsam und verursacht 'Chlorgeruch'. Gesamtchlor = frei + gebunden. Für effektive Desinfektion sollte freies Chlor 0,2-2,0 mg/L im Trinkwasser sein.",
          nl: "Vrij chloor (HOCl, OCl⁻) is de actieve desinfecterende vorm. Gecombineerd chloor (chloramines) vormt wanneer chloor reageert met ammoniak/stikstofverbindingen - het desinfecteert langzaam en veroorzaakt 'chloorgeur'. Totaal chloor = vrij + gecombineerd. Voor effectieve desinfectie moet vrij chloor 0,2-2,0 mg/L zijn in drinkwater."
        }
      },
      {
        question: {
          en: "What is heterotrophic plate count (HPC) in water testing?",
          es: "¿Qué es el recuento en placa heterotrófica (HPC) en pruebas de agua?",
          de: "Was ist die heterotrophe Plattenzählung (HPC) bei Wassertests?",
          nl: "Wat is heterotrofe plaattelling (HPC) bij watertesten?"
        },
        options: [
          { en: "Measure of general bacterial population in water, indicates treatment effectiveness", es: "Medida de población bacteriana general en agua, indica efectividad de tratamiento", de: "Maß für allgemeine Bakterienpopulation im Wasser, zeigt Behandlungswirksamkeit an", nl: "Maat voor algemene bacteriële populatie in water, geeft behandelingseffectiviteit aan" },
          { en: "Counting of water plates", es: "Conteo de placas de agua", de: "Zählung von Wasserplatten", nl: "Telling van waterplaten" },
          { en: "Mineral content analysis", es: "Análisis de contenido mineral", de: "Mineralgehaltsanalyse", nl: "Mineraalgehalte analyse" },
          { en: "Chlorine measurement", es: "Medición de cloro", de: "Chlormessung", nl: "Chloormeting" }
        ],
        correct: 0,
        explanation: {
          en: "HPC measures the total number of heterotrophic bacteria (bacteria that obtain carbon from organic compounds) that can grow on agar medium. It's expressed as CFU/mL (colony-forming units). WHO recommends <500 CFU/mL. High HPC may indicate treatment inefficiency, biofilm growth in pipes, or regrowth in distribution. It doesn't indicate pathogen presence directly.",
          es: "HPC mide el número total de bacterias heterotróficas (bacterias que obtienen carbono de compuestos orgánicos) que pueden crecer en medio de agar. Se expresa como UFC/mL (unidades formadoras de colonias). OMS recomienda <500 UFC/mL. HPC alto puede indicar ineficiencia de tratamiento, crecimiento de biofilm en tuberías o recrecimiento en distribución. No indica presencia de patógenos directamente.",
          de: "HPC misst die Gesamtzahl heterotropher Bakterien (Bakterien, die Kohlenstoff aus organischen Verbindungen beziehen), die auf Agarmedium wachsen können. Es wird als KBE/mL (koloniebildende Einheiten) ausgedrückt. WHO empfiehlt <500 KBE/mL. Hoher HPC kann Behandlungsineffizienz, Biofilmwachstum in Rohren oder Nachwachsen in Verteilung anzeigen. Es zeigt nicht direkt Pathogenanwesenheit an.",
          nl: "HPC meet het totale aantal heterotrofe bacteriën (bacteriën die koolstof verkrijgen uit organische verbindingen) die kunnen groeien op agarmedium. Het wordt uitgedrukt als KVE/mL (kolonie-vormende eenheden). WHO beveelt <500 KVE/mL aan. Hoge HPC kan wijzen op behandelingsinefficiëntie, biofilmgroei in leidingen of hergroei in distributie. Het duidt niet direct op aanwezigheid van pathogenen."
        }
      },
      {
        question: {
          en: "What is water alkalinity and why is it important?",
          es: "¿Qué es la alcalinidad del agua y por qué es importante?",
          de: "Was ist Wasseralkalität und warum ist sie wichtig?",
          nl: "Wat is wateralkaliniteit en waarom is het belangrijk?"
        },
        options: [
          { en: "Water's capacity to neutralize acids (pH buffering), prevents corrosion and pH swings", es: "Capacidad del agua para neutralizar ácidos (amortiguación de pH), previene corrosión y cambios de pH", de: "Wasserfähigkeit zur Neutralisierung von Säuren (pH-Pufferung), verhindert Korrosion und pH-Schwankungen", nl: "Watervermogen om zuren te neutraliseren (pH-buffering), voorkomt corrosie en pH-schommelingen" },
          { en: "Measurement of how alkaline (basic) the water is", es: "Medida de cuán alcalino (básico) es el agua", de: "Messung, wie alkalisch (basisch) das Wasser ist", nl: "Meting van hoe alkalisch (basisch) het water is" },
          { en: "Amount of alkali metals in water", es: "Cantidad de metales alcalinos en agua", de: "Menge an Alkalimetallen im Wasser", nl: "Hoeveelheid alkalimetalen in water" },
          { en: "Water storage capacity", es: "Capacidad de almacenamiento de agua", de: "Wasserspeicherkapazität", nl: "Wateropslagcapaciteit" }
        ],
        correct: 0,
        explanation: {
          en: "Alkalinity is water's ability to resist pH changes by neutralizing acids, primarily from bicarbonate (HCO₃⁻), carbonate (CO₃²⁻), and hydroxide (OH⁻) ions. Measured as mg/L CaCO₃ equivalent. Adequate alkalinity (50-200 mg/L) prevents corrosion of pipes, stabilizes pH during disinfection, and improves coagulation in treatment. Low alkalinity = corrosive water.",
          es: "La alcalinidad es la capacidad del agua para resistir cambios de pH neutralizando ácidos, principalmente de iones bicarbonato (HCO₃⁻), carbonato (CO₃²⁻) e hidróxido (OH⁻). Medida como mg/L equivalente de CaCO₃. Alcalinidad adecuada (50-200 mg/L) previene corrosión de tuberías, estabiliza pH durante desinfección y mejora coagulación en tratamiento. Baja alcalinidad = agua corrosiva.",
          de: "Alkalität ist die Fähigkeit des Wassers, pH-Änderungen zu widerstehen, indem Säuren neutralisiert werden, hauptsächlich durch Bicarbonat- (HCO₃⁻), Carbonat- (CO₃²⁻) und Hydroxidionen (OH⁻). Gemessen als mg/L CaCO₃-Äquivalent. Angemessene Alkalität (50-200 mg/L) verhindert Korrosion von Rohren, stabilisiert pH während Desinfektion und verbessert Koagulation in Behandlung. Niedrige Alkalität = korrosives Wasser.",
          nl: "Alkaliniteit is het vermogen van water om pH-veranderingen te weerstaan door zuren te neutraliseren, voornamelijk van bicarbonaat- (HCO₃⁻), carbonaat- (CO₃²⁻) en hydroxide-ionen (OH⁻). Gemeten als mg/L CaCO₃-equivalent. Voldoende alkaliniteit (50-200 mg/L) voorkomt corrosie van leidingen, stabiliseert pH tijdens desinfectie en verbetert coagulatie in behandeling. Lage alkaliniteit = corrosief water."
        }
      },
      {
        question: {
          en: "What is conductivity in water quality testing?",
          es: "¿Qué es la conductividad en pruebas de calidad de agua?",
          de: "Was ist Leitfähigkeit bei Wasserqualitätstests?",
          nl: "Wat is geleidbaarheid bij waterkwaliteitstests?"
        },
        options: [
          { en: "Water's ability to conduct electrical current, indicating dissolved ion concentration", es: "Capacidad del agua para conducir corriente eléctrica, indicando concentración de iones disueltos", de: "Wasserfähigkeit zur Leitung elektrischen Stroms, zeigt Konzentration gelöster Ionen an", nl: "Watervermogen om elektrische stroom te geleiden, wat concentratie van opgeloste ionen aangeeft" },
          { en: "Water flow rate through pipes", es: "Tasa de flujo de agua a través de tuberías", de: "Wasserdurchflussrate durch Rohre", nl: "Waterstromingssnelheid door leidingen" },
          { en: "Heat conductivity of water", es: "Conductividad térmica del agua", de: "Wärmeleitfähigkeit von Wasser", nl: "Warmtegeleiding van water" },
          { en: "Sound transmission through water", es: "Transmisión de sonido a través de agua", de: "Schallübertragung durch Wasser", nl: "Geluidsoverdracht door water" }
        ],
        correct: 0,
        explanation: {
          en: "Electrical conductivity measures water's ability to conduct electrical current, which depends on dissolved ions (salts, minerals). Measured in μS/cm (microsiemens per centimeter). Pure water has low conductivity (<10 μS/cm); drinking water typically 50-1500 μS/cm. High conductivity indicates high TDS. It's a quick, inexpensive way to estimate TDS and monitor water quality changes.",
          es: "La conductividad eléctrica mide la capacidad del agua para conducir corriente eléctrica, que depende de iones disueltos (sales, minerales). Medida en μS/cm (microsiemens por centímetro). Agua pura tiene baja conductividad (<10 μS/cm); agua potable típicamente 50-1500 μS/cm. Alta conductividad indica TDS alto. Es una forma rápida y económica de estimar TDS y monitorear cambios de calidad de agua.",
          de: "Elektrische Leitfähigkeit misst die Fähigkeit des Wassers, elektrischen Strom zu leiten, die von gelösten Ionen (Salze, Mineralien) abhängt. Gemessen in μS/cm (Mikrosiemens pro Zentimeter). Reines Wasser hat niedrige Leitfähigkeit (<10 μS/cm); Trinkwasser typischerweise 50-1500 μS/cm. Hohe Leitfähigkeit zeigt hohe TDS an. Es ist eine schnelle, kostengünstige Methode zur Schätzung von TDS und Überwachung von Wasserqualitätsänderungen.",
          nl: "Elektrische geleidbaarheid meet het vermogen van water om elektrische stroom te geleiden, wat afhangt van opgeloste ionen (zouten, mineralen). Gemeten in μS/cm (microsiemens per centimeter). Zuiver water heeft lage geleidbaarheid (<10 μS/cm); drinkwater typisch 50-1500 μS/cm. Hoge geleidbaarheid duidt op hoge TDS. Het is een snelle, goedkope manier om TDS te schatten en waterkwaliteitsveranderingen te monitoren."
        }
      },
      {
        question: {
          en: "What are indicator organisms in water microbiology?",
          es: "¿Qué son organismos indicadores en microbiología de agua?",
          de: "Was sind Indikatororganismen in der Wassermikrobiologie?",
          nl: "Wat zijn indicatororganismen in watermicrobiologie?"
        },
        options: [
          { en: "Organisms whose presence indicates fecal contamination and potential pathogens (e.g., E. coli)", es: "Organismos cuya presencia indica contaminación fecal y patógenos potenciales (ej., E. coli)", de: "Organismen, deren Anwesenheit fäkale Verunreinigung und potenzielle Krankheitserreger anzeigt (z.B. E. coli)", nl: "Organismen waarvan de aanwezigheid fecale besmetting en potentiële pathogenen aangeeft (bijv. E. coli)" },
          { en: "Fish that indicate water quality", es: "Peces que indican calidad de agua", de: "Fische, die Wasserqualität anzeigen", nl: "Vissen die waterkwaliteit aangeven" },
          { en: "Beneficial bacteria added to water", es: "Bacterias beneficiosas añadidas al agua", de: "Vorteilhafte Bakterien, die Wasser zugesetzt werden", nl: "Gunstige bacteriën toegevoegd aan water" },
          { en: "Organisms that produce indicators", es: "Organismos que producen indicadores", de: "Organismen, die Indikatoren produzieren", nl: "Organismen die indicatoren produceren" }
        ],
        correct: 0,
        explanation: {
          en: "Indicator organisms are non-pathogenic microorganisms used to assess water safety. Their presence suggests possible pathogen contamination. Common indicators: E. coli (recent fecal contamination), total coliforms (general contamination), enterococci (sewage contamination). Testing for indicators is easier, faster, and cheaper than testing for all possible pathogens. Safe water = 0 detectable indicator organisms per 100 mL.",
          es: "Los organismos indicadores son microorganismos no patógenos usados para evaluar seguridad del agua. Su presencia sugiere posible contaminación por patógenos. Indicadores comunes: E. coli (contaminación fecal reciente), coliformes totales (contaminación general), enterococos (contaminación por aguas residuales). Pruebas de indicadores son más fáciles, rápidas y baratas que pruebas para todos los patógenos posibles. Agua segura = 0 organismos indicadores detectables por 100 mL.",
          de: "Indikatororganismen sind nicht-pathogene Mikroorganismen zur Bewertung der Wassersicherheit. Ihre Anwesenheit deutet auf mögliche Pathogenkontamination hin. Häufige Indikatoren: E. coli (kürzliche fäkale Verunreinigung), Gesamtcoliforme (allgemeine Verunreinigung), Enterokokken (Abwasserverunreinigung). Tests auf Indikatoren sind einfacher, schneller und billiger als Tests auf alle möglichen Krankheitserreger. Sicheres Wasser = 0 nachweisbare Indikatororganismen pro 100 mL.",
          nl: "Indicatororganismen zijn niet-pathogene micro-organismen gebruikt om waterveiligheid te beoordelen. Hun aanwezigheid suggereert mogelijke pathogene besmetting. Veelvoorkomende indicatoren: E. coli (recente fecale besmetting), totale coliformen (algemene besmetting), enterokokken (rioolwaterbesmetting). Testen op indicatoren is gemakkelijker, sneller en goedkoper dan testen op alle mogelijke pathogenen. Veilig water = 0 detecteerbare indicatororganismen per 100 mL."
        }
      },
      {
        question: {
          en: "What is the maximum contaminant level (MCL)?",
          es: "¿Qué es el nivel máximo de contaminante (MCL)?",
          de: "Was ist der maximale Schadstoffwert (MCL)?",
          nl: "Wat is het maximale verontreinigingsniveau (MCL)?"
        },
        options: [
          { en: "Legally enforceable standard for maximum contaminant concentration in drinking water", es: "Estándar legalmente aplicable para concentración máxima de contaminante en agua potable", de: "Rechtlich durchsetzbarer Standard für maximale Schadstoffkonzentration im Trinkwasser", nl: "Juridisch afdwingbare norm voor maximale verontreinigingsconcentratie in drinkwater" },
          { en: "Recommended guideline (not mandatory)", es: "Directriz recomendada (no obligatoria)", de: "Empfohlene Richtlinie (nicht verpflichtend)", nl: "Aanbevolen richtlijn (niet verplicht)" },
          { en: "Average contamination level", es: "Nivel promedio de contaminación", de: "Durchschnittlicher Verschmutzungsgrad", nl: "Gemiddeld verontreinigingsniveau" },
          { en: "Minimum required contamination", es: "Contaminación mínima requerida", de: "Mindestens erforderliche Verschmutzung", nl: "Minimaal vereiste verontreiniging" }
        ],
        correct: 0,
        explanation: {
          en: "MCL is the highest level of a contaminant allowed in drinking water, set by EPA under SDWA. MCLs are legally enforceable standards based on health effects and treatment feasibility. Water systems exceeding MCLs must notify public and take corrective action. Examples: Lead 15 ppb, arsenic 10 ppb, nitrate 10 mg/L. MCLs protect public health with margin of safety.",
          es: "MCL es el nivel más alto de contaminante permitido en agua potable, establecido por EPA bajo SDWA. Los MCL son estándares legalmente aplicables basados en efectos de salud y viabilidad de tratamiento. Sistemas de agua que exceden MCL deben notificar al público y tomar acción correctiva. Ejemplos: Plomo 15 ppb, arsénico 10 ppb, nitrato 10 mg/L. Los MCL protegen salud pública con margen de seguridad.",
          de: "MCL ist der höchste zulässige Schadstoffwert im Trinkwasser, festgelegt von EPA unter SDWA. MCLs sind rechtlich durchsetzbare Standards basierend auf Gesundheitseffekten und Behandlungsfähigkeit. Wassersysteme, die MCLs überschreiten, müssen Öffentlichkeit benachrichtigen und Korrekturmaßnahmen ergreifen. Beispiele: Blei 15 ppb, Arsen 10 ppb, Nitrat 10 mg/L. MCLs schützen öffentliche Gesundheit mit Sicherheitsspanne.",
          nl: "MCL is het hoogste toegestane niveau van een verontreiniging in drinkwater, vastgesteld door EPA onder SDWA. MCLs zijn juridisch afdwingbare normen gebaseerd op gezondheidseffecten en behandelbaarheid. Watersystemen die MCLs overschrijden moeten het publiek informeren en corrigerende actie ondernemen. Voorbeelden: Lood 15 ppb, arseen 10 ppb, nitraat 10 mg/L. MCLs beschermen volksgezondheid met veiligheidsmarge."
        }
      },
      {
        question: {
          en: "What is cryptosporidium and why is it a concern in water?",
          es: "¿Qué es cryptosporidium y por qué es una preocupación en agua?",
          de: "Was ist Cryptosporidium und warum ist es ein Problem im Wasser?",
          nl: "Wat is cryptosporidium en waarom is het een zorg in water?"
        },
        options: [
          { en: "Chlorine-resistant parasite causing gastrointestinal illness from contaminated water", es: "Parásito resistente al cloro que causa enfermedad gastrointestinal por agua contaminada", de: "Chlorresistenter Parasit, der durch kontaminiertes Wasser gastrointestinale Erkrankungen verursacht", nl: "Chloorresistente parasiet die gastro-intestinale ziekte veroorzaakt door besmet water" },
          { en: "Beneficial mineral in water", es: "Mineral beneficioso en agua", de: "Vorteilhaftes Mineral im Wasser", nl: "Gunstig mineraal in water" },
          { en: "Type of algae in water", es: "Tipo de alga en agua", de: "Art von Algen im Wasser", nl: "Type algen in water" },
          { en: "Chemical contaminant from industry", es: "Contaminante químico de industria", de: "Chemischer Schadstoff aus Industrie", nl: "Chemische verontreiniging uit industrie" }
        ],
        correct: 0,
        explanation: {
          en: "Cryptosporidium is a protozoan parasite that forms hardy oocysts resistant to chlorine disinfection. It causes cryptosporidiosis (severe diarrhea, especially dangerous for immunocompromised). Major waterborne outbreaks have occurred. Removed by: filtration (<1 micron), UV disinfection, or ozone. EPA Long Term 2 Enhanced Surface Water Treatment Rule targets crypto. Boiling water kills it.",
          es: "Cryptosporidium es un parásito protozoario que forma ooquistes resistentes a desinfección con cloro. Causa criptosporidiosis (diarrea severa, especialmente peligrosa para inmunodeprimidos). Han ocurrido brotes importantes transmitidos por agua. Eliminado por: filtración (<1 micrón), desinfección UV u ozono. Regla EPA Long Term 2 Enhanced Surface Water Treatment apunta a crypto. Hervir agua lo mata.",
          de: "Cryptosporidium ist ein Protozoenparasit, der widerstandsfähige Oozysten bildet, die gegen Chlordesinfektion resistent sind. Es verursacht Kryptosporidiose (schwere Durchfälle, besonders gefährlich für Immungeschwächte). Große durch Wasser übertragene Ausbrüche sind aufgetreten. Entfernt durch: Filtration (<1 Mikron), UV-Desinfektion oder Ozon. EPA Long Term 2 Enhanced Surface Water Treatment Rule zielt auf Crypto. Wasser kochen tötet es.",
          nl: "Cryptosporidium is een protozoaire parasiet die hardnekkige oöcysten vormt die resistent zijn tegen chloordesinfectie. Het veroorzaakt cryptosporidiose (ernstige diarree, vooral gevaarlijk voor immuungecompromitteerden). Grote via water overgedragen uitbraken zijn voorgekomen. Verwijderd door: filtratie (<1 micron), UV-desinfectie of ozon. EPA Long Term 2 Enhanced Surface Water Treatment Rule richt zich op crypto. Water koken doodt het."
        }
      },
      {
        question: {
          en: "What is giardia lamblia in water microbiology?",
          es: "¿Qué es giardia lamblia en microbiología de agua?",
          de: "Was ist Giardia lamblia in der Wassermikrobiologie?",
          nl: "Wat is giardia lamblia in watermicrobiologie?"
        },
        options: [
          { en: "Protozoan parasite causing giardiasis ('beaver fever') from contaminated water", es: "Parásito protozoario que causa giardiasis ('fiebre del castor') por agua contaminada", de: "Protozoenparasit, der Giardiasis ('Biberfieber') durch kontaminiertes Wasser verursacht", nl: "Protozoaire parasiet die giardiasis ('beverkoorts') veroorzaakt door besmet water" },
          { en: "Beneficial bacteria in water", es: "Bacteria beneficiosa en agua", de: "Vorteilhafte Bakterien im Wasser", nl: "Gunstige bacterie in water" },
          { en: "Type of water filter", es: "Tipo de filtro de agua", de: "Art von Wasserfilter", nl: "Type waterfilter" },
          { en: "Mineral deposit in water", es: "Depósito mineral en agua", de: "Mineralablagerung im Wasser", nl: "Mineraalafzetting in water" }
        ],
        correct: 0,
        explanation: {
          en: "Giardia lamblia is a flagellated protozoan parasite forming chlorine-resistant cysts. Causes giardiasis: chronic diarrhea, cramping, nausea, weight loss. Common in surface water contaminated by animal/human feces. More chlorine-resistant than bacteria/viruses but less than crypto. Removed by: filtration (1-5 microns), UV, ozone. Boiling kills it. Hikers drinking untreated stream water are at risk.",
          es: "Giardia lamblia es un parásito protozoario flagelado que forma quistes resistentes al cloro. Causa giardiasis: diarrea crónica, calambres, náuseas, pérdida de peso. Común en agua superficial contaminada por heces animales/humanas. Más resistente al cloro que bacterias/virus pero menos que crypto. Eliminado por: filtración (1-5 micrones), UV, ozono. Hervir lo mata. Excursionistas bebiendo agua de arroyo sin tratar están en riesgo.",
          de: "Giardia lamblia ist ein begeißelter Protozoenparasit, der chlorresistente Zysten bildet. Verursacht Giardiasis: chronische Durchfälle, Krämpfe, Übelkeit, Gewichtsverlust. Häufig in Oberflächenwasser, das durch Tier-/Menschenkot verunreinigt ist. Chlorresistenter als Bakterien/Viren, aber weniger als Crypto. Entfernt durch: Filtration (1-5 Mikron), UV, Ozon. Kochen tötet es. Wanderer, die unbehandeltes Bachwasser trinken, sind gefährdet.",
          nl: "Giardia lamblia is een geflagelleerde protozoaire parasiet die chloorresistente cysten vormt. Veroorzaakt giardiasis: chronische diarree, krampen, misselijkheid, gewichtsverlies. Veel voorkomend in oppervlaktewater besmet door dierlijke/menselijke ontlasting. Meer chloorresistent dan bacteriën/virussen maar minder dan crypto. Verwijderd door: filtratie (1-5 micron), UV, ozon. Koken doodt het. Wandelaars die onbehandeld beekwater drinken lopen risico."
        }
      },
      {
        question: {
          en: "What are cyanobacterial blooms (blue-green algae) in water?",
          es: "¿Qué son las floraciones de cianobacterias (algas azul-verdes) en agua?",
          de: "Was sind Cyanobakterienblüten (Blaualgen) im Wasser?",
          nl: "Wat zijn cyanobacteriële bloei (blauwgroene algen) in water?"
        },
        options: [
          { en: "Harmful algal blooms producing toxins (microcystins) that contaminate water", es: "Floraciones de algas dañinas que producen toxinas (microcistinas) que contaminan agua", de: "Schädliche Algenblüten, die Toxine (Mikrocystine) produzieren, die Wasser verunreinigen", nl: "Schadelijke algenbloei die toxines (microcystines) produceert die water verontreinigen" },
          { en: "Beneficial organisms that purify water", es: "Organismos beneficiosos que purifican agua", de: "Vorteilhafte Organismen, die Wasser reinigen", nl: "Gunstige organismen die water zuiveren" },
          { en: "Blue-colored minerals", es: "Minerales de color azul", de: "Blau gefärbte Mineralien", nl: "Blauw gekleurde mineralen" },
          { en: "Fish food supplement", es: "Suplemento alimenticio para peces", de: "Fischfutter-Ergänzung", nl: "Visvoedsel supplement" }
        ],
        correct: 0,
        explanation: {
          en: "Cyanobacteria (blue-green algae) are photosynthetic bacteria that bloom in nutrient-rich (eutrophic) waters with warm temperatures. Some species produce cyanotoxins (microcystins, anatoxins, cylindrospermopsin) causing liver damage, neurological effects, and skin irritation. Blooms create taste/odor issues and deplete oxygen. Treatment: source water protection, algaecides, activated carbon, oxidation, avoiding affected waters.",
          es: "Las cianobacterias (algas azul-verdes) son bacterias fotosintéticas que florecen en aguas ricas en nutrientes (eutróficas) con temperaturas cálidas. Algunas especies producen cianotoxinas (microcistinas, anatoxinas, cilindrospermopsina) causando daño hepático, efectos neurológicos e irritación cutánea. Las floraciones crean problemas de sabor/olor y agotan oxígeno. Tratamiento: protección de fuente de agua, alguicidas, carbón activado, oxidación, evitar aguas afectadas.",
          de: "Cyanobakterien (Blaualgen) sind photosynthetische Bakterien, die in nährstoffreichen (eutrophen) Gewässern mit warmen Temperaturen blühen. Einige Arten produzieren Cyanotoxine (Mikrocystine, Anatoxine, Cylindrospermopsin), die Leberschäden, neurologische Wirkungen und Hautreizungen verursachen. Blüten erzeugen Geschmacks-/Geruchsprobleme und erschöpfen Sauerstoff. Behandlung: Quellwasserschutz, Algizide, Aktivkohle, Oxidation, betroffene Gewässer meiden.",
          nl: "Cyanobacteriën (blauwgroene algen) zijn fotosynthetische bacteriën die bloeien in nutriëntrijke (eutrofe) wateren met warme temperaturen. Sommige soorten produceren cyanotoxines (microcystines, anatoxines, cylindrospermopsine) die leverschade, neurologische effecten en huidirritatie veroorzaken. Bloei creëert smaak/geurbroblemen en put zuurstof uit. Behandeling: bronwaterbescherming, algendoders, actieve kool, oxidatie, getroffen wateren vermijden."
        }
      },
      {
        question: {
          en: "What is the purpose of the multiple barrier approach in water treatment?",
          es: "¿Cuál es el propósito del enfoque de múltiples barreras en tratamiento de agua?",
          de: "Was ist der Zweck des Multibarrierenansatzes bei der Wasseraufbereitung?",
          nl: "Wat is het doel van de meervoudige barrièrebenadering bij waterbehandeling?"
        },
        options: [
          { en: "Using multiple treatment steps to ensure water safety if one barrier fails", es: "Usar múltiples pasos de tratamiento para asegurar seguridad del agua si falla una barrera", de: "Verwendung mehrerer Behandlungsschritte zur Gewährleistung der Wassersicherheit, falls eine Barriere versagt", nl: "Gebruik van meerdere behandelingsstappen om waterveiligheid te waarborgen als één barrière faalt" },
          { en: "Building physical barriers around water sources", es: "Construir barreras físicas alrededor de fuentes de agua", de: "Bau physischer Barrieren um Wasserquellen", nl: "Bouwen van fysieke barrières rond waterbronnen" },
          { en: "Installing multiple water pipes", es: "Instalar múltiples tuberías de agua", de: "Installation mehrerer Wasserrohre", nl: "Installeren van meerdere waterleidingen" },
          { en: "Creating backup water storage", es: "Crear almacenamiento de agua de respaldo", de: "Erstellen von Backup-Wasserspeicherung", nl: "Creëren van back-up wateropslag" }
        ],
        correct: 0,
        explanation: {
          en: "The multiple barrier approach uses several treatment/protection steps in series to ensure safe water: source protection → coagulation/flocculation → sedimentation → filtration → disinfection → distribution system integrity. If one barrier fails or is less effective (e.g., turbidity spike reducing UV effectiveness), other barriers provide backup protection. This redundancy minimizes risk of waterborne disease.",
          es: "El enfoque de múltiples barreras usa varios pasos de tratamiento/protección en serie para asegurar agua segura: protección de fuente → coagulación/floculación → sedimentación → filtración → desinfección → integridad del sistema de distribución. Si falla una barrera o es menos efectiva (ej., pico de turbidez reduciendo efectividad UV), otras barreras proporcionan protección de respaldo. Esta redundancia minimiza riesgo de enfermedad transmitida por agua.",
          de: "Der Multibarrierenansatz verwendet mehrere Behandlungs-/Schutzschritte in Serie, um sicheres Wasser zu gewährleisten: Quellenschutz → Koagulation/Flockung → Sedimentation → Filtration → Desinfektion → Integrität des Verteilungssystems. Falls eine Barriere versagt oder weniger effektiv ist (z.B. Trübungsspitze, die UV-Wirksamkeit reduziert), bieten andere Barrieren Backup-Schutz. Diese Redundanz minimiert das Risiko wasserübertragener Krankheiten.",
          nl: "De meervoudige barrièrebenadering gebruikt verschillende behandelings-/beschermingsstappen in serie om veilig water te waarborgen: bronbescherming → coagulatie/flocculatie → sedimentatie → filtratie → desinfectie → integriteit van distributiesysteem. Als één barrière faalt of minder effectief is (bijv. turbiditeit piek die UV-effectiviteit vermindert), bieden andere barrières back-upbescherming. Deze redundantie minimaliseert risico op via water overgedragen ziekten."
        }
      },
      {
        question: {
          en: "What is the CT value in disinfection?",
          es: "¿Qué es el valor CT en desinfección?",
          de: "Was ist der CT-Wert bei der Desinfektion?",
          nl: "Wat is de CT-waarde bij desinfectie?"
        },
        options: [
          { en: "Concentration × Time: disinfectant concentration multiplied by contact time", es: "Concentración × Tiempo: concentración de desinfectante multiplicada por tiempo de contacto", de: "Konzentration × Zeit: Desinfektionsmittelkonzentration multipliziert mit Kontaktzeit", nl: "Concentratie × Tijd: desinfectiemiddel concentratie vermenigvuldigd met contacttijd" },
          { en: "Chlorine Temperature measurement", es: "Medida de Temperatura de Cloro", de: "Chlor-Temperatur-Messung", nl: "Chloor Temperatuur meting" },
          { en: "Contamination Testing value", es: "Valor de Prueba de Contaminación", de: "Kontaminationstestwert", nl: "Contaminatie Testwaarde" },
          { en: "Chemical Treatment cost", es: "Costo de Tratamiento Químico", de: "Kosten chemischer Behandlung", nl: "Kosten Chemische Behandeling" }
        ],
        correct: 0,
        explanation: {
          en: "CT value (concentration × contact time) measures disinfection effectiveness. C = disinfectant concentration (mg/L), T = contact time (minutes), CT = mg·min/L. Higher CT = more pathogen inactivation. Required CT varies by: pathogen type (viruses < bacteria < protozoa), pH, temperature, disinfectant type. Example: achieving 3-log Giardia inactivation with chlorine at pH 7, 10°C requires CT = 165 mg·min/L.",
          es: "El valor CT (concentración × tiempo de contacto) mide efectividad de desinfección. C = concentración de desinfectante (mg/L), T = tiempo de contacto (minutos), CT = mg·min/L. Mayor CT = más inactivación de patógenos. CT requerido varía por: tipo de patógeno (virus < bacterias < protozoos), pH, temperatura, tipo de desinfectante. Ejemplo: lograr inactivación de Giardia de 3-log con cloro a pH 7, 10°C requiere CT = 165 mg·min/L.",
          de: "Der CT-Wert (Konzentration × Kontaktzeit) misst Desinfektionswirksamkeit. C = Desinfektionsmittelkonzentration (mg/L), T = Kontaktzeit (Minuten), CT = mg·min/L. Höherer CT = mehr Pathogeninaktivierung. Erforderlicher CT variiert je nach: Pathogentyp (Viren < Bakterien < Protozoen), pH, Temperatur, Desinfektionsmitteltyp. Beispiel: 3-log Giardia-Inaktivierung mit Chlor bei pH 7, 10°C erfordert CT = 165 mg·min/L.",
          nl: "CT-waarde (concentratie × contacttijd) meet desinfectie-effectiviteit. C = desinfectiemiddel concentratie (mg/L), T = contacttijd (minuten), CT = mg·min/L. Hogere CT = meer pathogene inactivering. Vereiste CT varieert per: pathogeen type (virussen < bacteriën < protozoën), pH, temperatuur, desinfectiemiddel type. Voorbeeld: het bereiken van 3-log Giardia inactivering met chloor bij pH 7, 10°C vereist CT = 165 mg·min/L."
        }
      },
      {
        question: {
          en: "What is the purpose of fluoridation in drinking water?",
          es: "¿Cuál es el propósito de la fluoración en agua potable?",
          de: "Was ist der Zweck der Fluoridierung im Trinkwasser?",
          nl: "Wat is het doel van fluoridatie in drinkwater?"
        },
        options: [
          { en: "Prevent tooth decay by strengthening enamel (0.7-1.2 mg/L)", es: "Prevenir caries fortaleciendo esmalte (0.7-1.2 mg/L)", de: "Kariesprävention durch Stärkung des Zahnschmelzes (0,7-1,2 mg/L)", nl: "Cariës voorkomen door glazuur te versterken (0,7-1,2 mg/L)" },
          { en: "Disinfect water", es: "Desinfectar agua", de: "Wasser desinfizieren", nl: "Water desinfecteren" },
          { en: "Improve taste", es: "Mejorar sabor", de: "Geschmack verbessern", nl: "Smaak verbeteren" },
          { en: "Remove hardness", es: "Eliminar dureza", de: "Härte entfernen", nl: "Hardheid verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Community water fluoridation (0.7-1.2 mg/L) is a public health measure to prevent dental cavities. Fluoride strengthens tooth enamel (hydroxyapatite → fluorapatite) making it more resistant to acid attacks. CDC calls it one of 10 great public health achievements of 20th century. Excessive fluoride (>4 mg/L) causes dental fluorosis (tooth discoloration). Some oppose fluoridation citing individual choice.",
          es: "La fluoración comunitaria del agua (0.7-1.2 mg/L) es una medida de salud pública para prevenir caries dentales. El fluoruro fortalece el esmalte dental (hidroxiapatita → fluorapatita) haciéndolo más resistente a ataques ácidos. CDC lo llama uno de 10 grandes logros de salud pública del siglo XX. Fluoruro excesivo (>4 mg/L) causa fluorosis dental (decoloración dental). Algunos se oponen a fluoración citando elección individual.",
          de: "Gemeinschaftswasserfluoridierung (0,7-1,2 mg/L) ist eine Gesundheitsmaßnahme zur Kariesprävention. Fluorid stärkt Zahnschmelz (Hydroxylapatit → Fluorapatit), macht ihn resistenter gegen Säureangriffe. CDC nennt es eine der 10 großen Gesundheitserfolge des 20. Jahrhunderts. Übermäßiges Fluorid (>4 mg/L) verursacht Zahnfluorose (Zahnverfärbung). Einige lehnen Fluoridierung ab und zitieren individuelle Wahlfreiheit.",
          nl: "Gemeenschapswaterfluoridatie (0,7-1,2 mg/L) is een volksgezondheidsmaatregel om tandcariës te voorkomen. Fluoride versterkt tandglazuur (hydroxyapatiet → fluorapatiet) waardoor het resistenter wordt tegen zuuraanvallen. CDC noemt het een van 10 grote volksgezondheidsprestaties van de 20e eeuw. Overmatig fluoride (>4 mg/L) veroorzaakt tandvloerose (tandverkleuring). Sommigen verzetten zich tegen fluoridatie en noemen individuele keuze."
        }
      },
      {
        question: {
          en: "What is the source water assessment program (SWAP)?",
          es: "¿Qué es el programa de evaluación de agua de origen (SWAP)?",
          de: "Was ist das Quellwasserbewertungsprogramm (SWAP)?",
          nl: "Wat is het bronwaterboordelingsprogramma (SWAP)?"
        },
        options: [
          { en: "Program identifying potential contamination sources threatening drinking water supplies", es: "Programa que identifica fuentes potenciales de contaminación amenazando suministros de agua potable", de: "Programm zur Identifizierung potenzieller Kontaminationsquellen, die Trinkwasserversorgungen bedrohen", nl: "Programma dat potentiële verontreinigingsbronnen identificeert die drinkwatervoorraden bedreigen" },
          { en: "Water trading marketplace", es: "Mercado de comercio de agua", de: "Wasserhandelsmarktplatz", nl: "Waterhandelsmarktplaats" },
          { en: "Emergency water supply backup", es: "Respaldo de suministro de agua de emergencia", de: "Notfall-Wasserversorgung Backup", nl: "Noodwatervoorziening back-up" },
          { en: "Water conservation incentive", es: "Incentivo de conservación de agua", de: "Wassersparmaßnahmen-Anreiz", nl: "Waterbesparingsincentive" }
        ],
        correct: 0,
        explanation: {
          en: "SWAP (mandated by 1996 SDWA amendments) requires states to delineate source water protection areas, inventory potential contamination sources (industrial sites, landfills, septic systems, agriculture, gas stations), and determine susceptibility to contamination. Goal: proactive source protection rather than reactive treatment. Results help water utilities protect sources and communities understand threats to their water.",
          es: "SWAP (ordenado por enmiendas SDWA de 1996) requiere que estados delimiten áreas de protección de agua de origen, inventaríen fuentes potenciales de contaminación (sitios industriales, vertederos, sistemas sépticos, agricultura, gasolineras) y determinen susceptibilidad a contaminación. Objetivo: protección proactiva de fuente en lugar de tratamiento reactivo. Resultados ayudan a servicios de agua proteger fuentes y comunidades entender amenazas a su agua.",
          de: "SWAP (vorgeschrieben durch SDWA-Änderungen von 1996) verlangt von Staaten, Quellwasserschutzgebiete abzugrenzen, potenzielle Kontaminationsquellen (Industriestandorte, Deponien, Klärsysteme, Landwirtschaft, Tankstellen) zu inventarisieren und Anfälligkeit für Kontamination zu bestimmen. Ziel: proaktiver Quellenschutz statt reaktiver Behandlung. Ergebnisse helfen Wasserversorgern, Quellen zu schützen und Gemeinden Bedrohungen ihres Wassers zu verstehen.",
          nl: "SWAP (verplicht door SDWA-wijzigingen van 1996) vereist dat staten bronwaterbeschermingsgebieden afbakenen, potentiële verontreinigingsbronnen inventariseren (industriële locaties, stortplaatsen, septische systemen, landbouw, benzinestations) en vatbaarheid voor verontreiniging bepalen. Doel: proactieve bronbescherming in plaats van reactieve behandeling. Resultaten helpen waterbedrijven bronnen beschermen en gemeenschappen bedreigingen voor hun water begrijpen."
        }
      },
      {
        question: {
          en: "What is cross-connection control in water distribution?",
          es: "¿Qué es el control de conexiones cruzadas en distribución de agua?",
          de: "Was ist Kreuzverbindungskontrolle bei der Wasserverteilung?",
          nl: "Wat is kruisverbindingscontrole bij waterdistributie?"
        },
        options: [
          { en: "Preventing contamination by backflow from non-potable sources into drinking water", es: "Prevenir contaminación por reflujo de fuentes no potables al agua potable", de: "Verhinderung von Kontamination durch Rückfluss aus nicht trinkbaren Quellen ins Trinkwasser", nl: "Voorkomen van verontreiniging door terugstroom van niet-drinkbare bronnen in drinkwater" },
          { en: "Connecting different water pipes", es: "Conectar diferentes tuberías de agua", de: "Verbindung verschiedener Wasserrohre", nl: "Verbinden van verschillende waterleidingen" },
          { en: "Crossing water mains over roads", es: "Cruzar tuberías principales de agua sobre carreteras", de: "Kreuzung von Wasserleitungen über Straßen", nl: "Kruisen van waterleidingen over wegen" },
          { en: "International water sharing", es: "Compartir agua internacional", de: "Internationaler Wasseraustausch", nl: "Internationaal water delen" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-connection is any connection between drinking water system and non-potable source (irrigation, chemical tanks, toilets, fire sprinklers). Backflow occurs when pressure reverses (back-siphonage or back-pressure), pulling contaminants into drinking water. Prevention: air gaps, backflow preventers (RPZ valves, atmospheric vacuum breakers, double-check valves), regular testing, plumbing codes. Major cause of waterborne disease outbreaks.",
          es: "Conexión cruzada es cualquier conexión entre sistema de agua potable y fuente no potable (riego, tanques químicos, inodoros, aspersores contra incendios). Reflujo ocurre cuando presión se invierte (sifonamiento inverso o contrapresión), llevando contaminantes al agua potable. Prevención: separaciones de aire, preventores de reflujo (válvulas RPZ, interruptores de vacío atmosférico, válvulas de doble retención), pruebas regulares, códigos de plomería. Causa principal de brotes de enfermedades transmitidas por agua.",
          de: "Kreuzverbindung ist jede Verbindung zwischen Trinkwassersystem und nicht trinkbarer Quelle (Bewässerung, Chemikalientanks, Toiletten, Feuersprinkler). Rückfluss tritt auf, wenn Druck sich umkehrt (Rücksaugung oder Gegendruck), wodurch Schadstoffe ins Trinkwasser gezogen werden. Prävention: Luftspalte, Rückflussverhinderer (RPZ-Ventile, atmosphärische Vakuumbrecher, Doppelrückschlagventile), regelmäßige Tests, Sanitärvorschriften. Hauptursache für durch Wasser übertragene Krankheitsausbrüche.",
          nl: "Kruisverbinding is elke verbinding tussen drinkwatersysteem en niet-drinkbare bron (irrigatie, chemische tanks, toiletten, brandsprinklers). Terugstroom treedt op wanneer druk omkeert (terugzuiging of tegendruk), waarbij verontreinigingen in drinkwater worden getrokken. Preventie: luchtopeningen, terugstroompreventers (RPZ-kleppen, atmosferische vacuümbrekers, dubbele terugslagkleppen), regelmatige tests, sanitaire codes. Belangrijkste oorzaak van via water overgedragen ziekte-uitbraken."
        }
      },
      {
        question: {
          en: "What is the Drinking Water Watch program?",
          es: "¿Qué es el programa Drinking Water Watch?",
          de: "Was ist das Drinking Water Watch-Programm?",
          nl: "Wat is het Drinking Water Watch-programma?"
        },
        options: [
          { en: "EPA database providing public access to water quality violation reports and compliance data", es: "Base de datos de EPA que proporciona acceso público a informes de violación de calidad de agua y datos de cumplimiento", de: "EPA-Datenbank, die öffentlichen Zugang zu Wasserqualitätsverletzungsberichten und Konformitätsdaten bietet", nl: "EPA-database die publieke toegang biedt tot waterkwaliteitsschendingsrapporten en nalevingsgegevens" },
          { en: "Wildlife monitoring near water", es: "Monitoreo de vida silvestre cerca de agua", de: "Wildtierüberwachung in der Nähe von Wasser", nl: "Wildliefmonitoring nabij water" },
          { en: "Clock for water timing", es: "Reloj para temporización de agua", de: "Uhr für Wassertiming", nl: "Klok voor watertiming" },
          { en: "Security cameras at water plants", es: "Cámaras de seguridad en plantas de agua", de: "Sicherheitskameras in Wasserwerken", nl: "Beveiligingscamera's bij waterfabrieken" }
        ],
        correct: 0,
        explanation: {
          en: "EPA's Drinking Water Watch (part of Safe Drinking Water Information System - SDWIS) provides free online access to: water system information, contaminant violations, health-based violations, monitoring violations, public notification status, enforcement actions. Citizens can search by zip code to see their water system's compliance record. Promotes transparency and informed consumers. Also includes Consumer Confidence Reports (CCRs).",
          es: "Drinking Water Watch de EPA (parte de Safe Drinking Water Information System - SDWIS) proporciona acceso en línea gratuito a: información del sistema de agua, violaciones de contaminantes, violaciones basadas en salud, violaciones de monitoreo, estado de notificación pública, acciones de aplicación. Ciudadanos pueden buscar por código postal para ver registro de cumplimiento de su sistema de agua. Promueve transparencia y consumidores informados. También incluye Informes de Confianza del Consumidor (CCR).",
          de: "EPAs Drinking Water Watch (Teil des Safe Drinking Water Information System - SDWIS) bietet kostenlosen Online-Zugang zu: Wassersysteminformationen, Schadstoffverletzungen, gesundheitsbasierten Verletzungen, Überwachungsverletzungen, Status öffentlicher Benachrichtigung, Durchsetzungsmaßnahmen. Bürger können nach Postleitzahl suchen, um Konformitätsdaten ihres Wassersystems zu sehen. Fördert Transparenz und informierte Verbraucher. Enthält auch Consumer Confidence Reports (CCRs).",
          nl: "EPA's Drinking Water Watch (deel van Safe Drinking Water Information System - SDWIS) biedt gratis online toegang tot: watersysteeminformatie, verontreinigingsschendingen, op gezondheid gebaseerde schendingen, monitoringschendingen, status van publieke kennisgeving, handhavingsacties. Burgers kunnen zoeken op postcode om nalevingsrecord van hun watersysteem te zien. Bevordert transparantie en geïnformeerde consumenten. Bevat ook Consumer Confidence Reports (CCRs)."
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
