// Salads Quiz - Level 7: Salad Preparation Techniques & Food Safety
(function() {
  const level7 = {
    name: {
      en: "Salads Level 7",
      es: "Ensaladas Nivel 7",
      de: "Salate Stufe 7",
      nl: "Salades Level 7"
    },
    questions: [
      {
        question: {
          en: "What is the proper temperature for washing salad greens to maintain both safety and quality?",
          es: "¿Cuál es la temperatura adecuada para lavar hojas verdes de ensalada para mantener tanto seguridad como calidad?",
          de: "Was ist die richtige Temperatur zum Waschen von Salatgrün, um sowohl Sicherheit als auch Qualität zu erhalten?",
          nl: "Wat is de juiste temperatuur voor het wassen van slagroenten om zowel veiligheid als kwaliteit te behouden?"
        },
        options: [
          { en: "Ice-cold water (32-35°F)", es: "Agua helada (32-35°F)", de: "Eiskaltes Wasser (0-2°C)", nl: "IJskoud water (0-2°C)" },
          { en: "Cool water (50-60°F)", es: "Agua fresca (50-60°F)", de: "Kühles Wasser (10-15°C)", nl: "Koel water (10-15°C)" },
          { en: "Hot water (120°F+)", es: "Agua caliente (120°F+)", de: "Heißes Wasser (49°C+)", nl: "Heet water (49°C+)" },
          { en: "Room temperature water", es: "Agua a temperatura ambiente", de: "Wasser bei Raumtemperatur", nl: "Water op kamertemperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "Cool water (50-60°F) is optimal for washing salad greens as it effectively removes contaminants and bacteria while maintaining the cellular structure of delicate leaves. Ice-cold water can shock the greens, while hot water wilts them and reduces nutritional value. Cool water provides the best balance of food safety and quality preservation.",
          es: "El agua fresca (50-60°F) es óptima para lavar hojas verdes de ensalada ya que remueve efectivamente contaminantes y bacterias mientras mantiene la estructura celular de las hojas delicadas. El agua helada puede impactar las hojas, mientras que el agua caliente las marchita y reduce el valor nutricional. El agua fresca proporciona el mejor balance de seguridad alimentaria y preservación de calidad.",
          de: "Kühles Wasser (10-15°C) ist optimal zum Waschen von Salatgrün, da es Kontaminanten und Bakterien effektiv entfernt, während es die Zellstruktur zarter Blätter erhält. Eiskaltes Wasser kann die Grünpflanzen schockieren, während heißes Wasser sie welken lässt und den Nährwert reduziert. Kühles Wasser bietet die beste Balance aus Lebensmittelsicherheit und Qualitätserhaltung.",
          nl: "Koel water (10-15°C) is optimaal voor het wassen van slagroenten omdat het effectief verontreinigingen en bacteriën verwijdert terwijl de celstructuur van delicate bladeren behouden blijft. IJskoud water kan de groenten shockeren, terwijl heet water ze doet verwelken en voedingswaarde vermindert. Koel water biedt de beste balans tussen voedselveiligheid en kwaliteitsbehoud."
        }
      },
      {
        question: {
          en: "What is the recommended maximum time between washing and serving fresh salad greens?",
          es: "¿Cuál es el tiempo máximo recomendado entre lavar y servir hojas verdes frescas de ensalada?",
          de: "Was ist die empfohlene maximale Zeit zwischen dem Waschen und Servieren von frischem Salatgrün?",
          nl: "Wat is de aanbevolen maximale tijd tussen het wassen en serveren van verse slagroenten?"
        },
        options: [
          { en: "30 minutes", es: "30 minutos", de: "30 Minuten", nl: "30 minuten" },
          { en: "2 hours", es: "2 horas", de: "2 Stunden", nl: "2 uur" },
          { en: "4 hours", es: "4 horas", de: "4 Stunden", nl: "4 uur" },
          { en: "24 hours", es: "24 horas", de: "24 Stunden", nl: "24 uur" }
        ],
        correct: 2,
        explanation: {
          en: "Properly washed and dried salad greens can be safely held for up to 4 hours when stored at proper refrigeration temperatures (32-36°F). This allows for efficient prep work while maintaining food safety standards. Beyond 4 hours, the risk of bacterial growth increases, and quality begins to deteriorate significantly.",
          es: "Las hojas verdes de ensalada adecuadamente lavadas y secadas pueden mantenerse seguramente hasta 4 horas cuando se almacenan a temperaturas adecuadas de refrigeración (32-36°F). Esto permite trabajo de preparación eficiente mientras mantiene estándares de seguridad alimentaria. Más allá de 4 horas, el riesgo de crecimiento bacteriano aumenta, y la calidad comienza a deteriorarse significativamente.",
          de: "Ordentlich gewaschenes und getrocknetes Salatgrün kann sicher bis zu 4 Stunden aufbewahrt werden, wenn es bei ordnungsgemäßen Kühltemperaturen (0-2°C) gelagert wird. Dies ermöglicht effiziente Vorbereitungsarbeit unter Beibehaltung von Lebensmittelsicherheitsstandards. Nach 4 Stunden steigt das Risiko von Bakterienwachstum, und die Qualität beginnt sich erheblich zu verschlechtern.",
          nl: "Goed gewassen en gedroogde slagroenten kunnen veilig tot 4 uur bewaard worden wanneer opgeslagen bij juiste koeltemperaturen (0-2°C). Dit maakt efficiënt voorbereidingswerk mogelijk terwijl voedselveiligheidsnormen behouden blijven. Na 4 uur neemt het risico van bacteriegroei toe, en begint de kwaliteit significant te verslechteren."
        }
      },
      {
        question: {
          en: "Which knife technique is most appropriate for preparing delicate salad greens like butter lettuce?",
          es: "¿Qué técnica de cuchillo es más apropiada para preparar hojas verdes delicadas como lechuga mantequilla?",
          de: "Welche Messertechnik ist am besten geeignet für die Zubereitung zarter Salatgrüns wie Butterkopfsalat?",
          nl: "Welke mestechniek is het meest geschikt voor het bereiden van delicate slagroenten zoals boterbla-sla?"
        },
        options: [
          { en: "Hand tearing", es: "Desgarrar a mano", de: "Händisches Zerreißen", nl: "Met de hand scheuren" },
          { en: "Chopping with a chef's knife", es: "Picar con cuchillo de chef", de: "Hacken mit einem Kochmesser", nl: "Hakken met een koksmes" },
          { en: "Using kitchen shears", es: "Usar tijeras de cocina", de: "Küchenschere verwenden", nl: "Keukenschaar gebruiken" },
          { en: "Food processor chopping", es: "Picar en procesador de alimentos", de: "Zerkleinern im Küchenmaschine", nl: "Hakken in keukenmachine" }
        ],
        correct: 0,
        explanation: {
          en: "Hand tearing is the gentlest method for delicate greens like butter lettuce, preventing cell damage that occurs with knife cuts. Tearing creates natural edges that don't bruise or oxidize as quickly as cut edges, preserving texture, appearance, and nutritional content. This traditional technique maintains the integrity of tender leaves.",
          es: "Desgarrar a mano es el método más gentil para hojas delicadas como lechuga mantequilla, previniendo daño celular que ocurre con cortes de cuchillo. Desgarrar crea bordes naturales que no se magullan u oxidan tan rápidamente como bordes cortados, preservando textura, apariencia y contenido nutricional. Esta técnica tradicional mantiene la integridad de hojas tiernas.",
          de: "Händisches Zerreißen ist die schonendste Methode für zarte Grünpflanzen wie Butterkopfsalat und verhindert Zellschäden, die bei Messerschnitten auftreten. Zerreißen schafft natürliche Kanten, die nicht so schnell quetschen oder oxidieren wie geschnittene Kanten, und bewahrt Textur, Aussehen und Nährstoffgehalt. Diese traditionelle Technik erhält die Integrität zarter Blätter.",
          nl: "Met de hand scheuren is de zachtste methode voor delicate groenten zoals boterblasla, voorkomt celschade die optreedt bij messneden. Scheuren creëert natuurlijke randen die niet zo snel kneuzen of oxideren als gesneden randen, behoudt textuur, uiterlijk en voedingsinhoud. Deze traditionele techniek behoudt de integriteit van malse bladeren."
        }
      },
      {
        question: {
          en: "What is the proper method for sanitizing cutting boards used for salad preparation?",
          es: "¿Cuál es el método adecuado para desinfectar tablas de cortar usadas para preparación de ensaladas?",
          de: "Was ist die richtige Methode zur Desinfektion von Schneidebrettern für die Salatzubereitung?",
          nl: "Wat is de juiste methode voor het desinfecteren van snijplanken gebruikt voor saladebereiding?"
        },
        options: [
          { en: "Rinse with water only", es: "Enjuagar solo con agua", de: "Nur mit Wasser spülen", nl: "Alleen spoelen met water" },
          { en: "Wash with soap, rinse, then sanitize with bleach solution", es: "Lavar con jabón, enjuagar, luego desinfectar con solución de lejía", de: "Mit Seife waschen, spülen, dann mit Bleichlösung desinfizieren", nl: "Wassen met zeep, spoelen, dan desinfecteren met bleekmiddel" },
          { en: "Wipe with a damp cloth", es: "Limpiar con paño húmedo", de: "Mit feuchtem Tuch abwischen", nl: "Afvegen met vochtige doek" },
          { en: "Use dish soap only", es: "Usar solo jabón para platos", de: "Nur Spülmittel verwenden", nl: "Alleen afwasmiddel gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Proper cutting board sanitization requires three steps: wash with hot soapy water to remove debris, rinse thoroughly with clean water, then sanitize with an approved solution (1 tablespoon bleach per gallon of water). This three-step process ensures elimination of harmful bacteria that could contaminate fresh salad ingredients.",
          es: "La desinfección adecuada de tabla de cortar requiere tres pasos: lavar con agua jabonosa caliente para remover residuos, enjuagar completamente con agua limpia, luego desinfectar con una solución aprobada (1 cucharada de lejía por galón de agua). Este proceso de tres pasos asegura la eliminación de bacterias dañinas que podrían contaminar ingredientes frescos de ensalada.",
          de: "Ordnungsgemäße Schneidebrett-Desinfektion erfordert drei Schritte: Waschen mit heißem Seifenwasser um Ablagerungen zu entfernen, gründlich mit sauberem Wasser spülen, dann mit einer zugelassenen Lösung desinfizieren (1 Esslöffel Bleichmittel pro 4 Liter Wasser). Dieser dreistufige Prozess gewährleistet die Beseitigung schädlicher Bakterien, die frische Salatzutaten kontaminieren könnten.",
          nl: "Juiste snijplank desinfectie vereist drie stappen: wassen met heet zeepwater om vuil te verwijderen, grondig spoelen met schoon water, dan desinfecteren met een goedgekeurde oplossing (1 eetlepel bleek per 4 liter water). Dit drietrappenproces zorgt voor eliminatie van schadelijke bacteriën die verse saladeïngrediënten zouden kunnen besmetten."
        }
      },
      {
        question: {
          en: "Which salad ingredient poses the highest risk for foodborne illness and requires special handling?",
          es: "¿Qué ingrediente de ensalada presenta el mayor riesgo de enfermedad transmitida por alimentos y requiere manejo especial?",
          de: "Welche Salatzutat birgt das höchste Risiko für lebensmittelbedingte Krankheiten und erfordert besondere Handhabung?",
          nl: "Welk saladeïngrediënt vormt het hoogste risico voor voedselgerelateerde ziekten en vereist speciale behandeling?"
        },
        options: [
          { en: "Iceberg lettuce", es: "Lechuga iceberg", de: "Eisbergsalat", nl: "IJsbergsla" },
          { en: "Bean sprouts", es: "Brotes de frijol", de: "Bohnensprossen", nl: "Taugé" },
          { en: "Tomatoes", es: "Tomates", de: "Tomaten", nl: "Tomaten" },
          { en: "Carrots", es: "Zanahorias", de: "Karotten", nl: "Wortels" }
        ],
        correct: 1,
        explanation: {
          en: "Bean sprouts pose the highest foodborne illness risk because they're grown in warm, humid conditions ideal for bacterial growth, including E. coli and Salmonella. The sprouting process can internalize bacteria, making surface washing ineffective. They require sourcing from reputable suppliers, proper refrigeration, and should be avoided by high-risk populations.",
          es: "Los brotes de frijol presentan el mayor riesgo de enfermedad transmitida por alimentos porque se cultivan en condiciones cálidas y húmedas ideales para crecimiento bacteriano, incluyendo E. coli y Salmonella. El proceso de brotado puede internalizar bacterias, haciendo el lavado superficial inefectivo. Requieren abastecimiento de proveedores reputables, refrigeración adecuada, y deben evitarse por poblaciones de alto riesgo.",
          de: "Bohnensprossen bergen das höchste Lebensmittelvergiftungsrisiko, da sie in warmen, feuchten Bedingungen gezüchtet werden, die ideal für Bakterienwachstum sind, einschließlich E. coli und Salmonellen. Der Keimungsprozess kann Bakterien internalisieren, wodurch Oberflächenwaschen unwirksam wird. Sie erfordern Beschaffung von seriösen Lieferanten, ordnungsgemäße Kühlung und sollten von Hochrisikogruppen gemieden werden.",
          nl: "Taugé vormt het hoogste risico voor voedselgerelateerde ziekten omdat ze gekweekt worden in warme, vochtige omstandigheden ideaal voor bacteriegroei, inclusief E. coli en Salmonella. Het kiemproces kan bacteriën internaliseren, waardoor oppervlaktewassen ineffectief wordt. Ze vereisen inkoop van betrouwbare leveranciers, juiste koeling, en moeten vermeden worden door hoog-risico populaties."
        }
      },
      {
        question: {
          en: "What is the correct technique for drying washed salad greens to prevent bacterial growth?",
          es: "¿Cuál es la técnica correcta para secar hojas verdes lavadas de ensalada para prevenir crecimiento bacteriano?",
          de: "Was ist die richtige Technik zum Trocknen gewaschener Salatgrüns, um Bakterienwachstum zu verhindern?",
          nl: "Wat is de juiste techniek voor het drogen van gewassen slagroenten om bacteriegroei te voorkomen?"
        },
        options: [
          { en: "Air dry only", es: "Secar al aire únicamente", de: "Nur lufttrocknen", nl: "Alleen aan de lucht drogen" },
          { en: "Salad spinner then paper towels", es: "Centrifugadora de ensalada luego toallas de papel", de: "Salatschleuder dann Papiertücher", nl: "Slacentrifuge dan keukenpapier" },
          { en: "Wring out by hand", es: "Escurrir a mano", de: "Von Hand auswringen", nl: "Met de hand uitwringen" },
          { en: "Heat drying", es: "Secado con calor", de: "Wärmetrocknung", nl: "Warm drogen" }
        ],
        correct: 1,
        explanation: {
          en: "The salad spinner followed by paper towels is the most effective method for removing moisture that bacteria need to multiply. The spinner removes most water through centrifugal force without damaging leaves, while paper towels absorb remaining moisture. Thorough drying is critical for food safety and extends storage life.",
          es: "La centrifugadora de ensalada seguida de toallas de papel es el método más efectivo para remover humedad que las bacterias necesitan para multiplicarse. La centrifugadora remueve la mayoría del agua a través de fuerza centrífuga sin dañar las hojas, mientras las toallas de papel absorben la humedad restante. El secado completo es crítico para seguridad alimentaria y extiende la vida de almacenamiento.",
          de: "Die Salatschleuder gefolgt von Papiertüchern ist die effektivste Methode, um Feuchtigkeit zu entfernen, die Bakterien zur Vermehrung benötigen. Die Schleuder entfernt das meiste Wasser durch Zentrifugalkraft ohne die Blätter zu beschädigen, während Papiertücher verbleibende Feuchtigkeit absorbieren. Gründliches Trocknen ist kritisch für Lebensmittelsicherheit und verlängert die Lagerzeit.",
          nl: "De slacentrifuge gevolgd door keukenpapier is de meest effectieve methode voor het verwijderen van vocht dat bacteriën nodig hebben om te vermenigvuldigen. De centrifuge verwijdert het meeste water door middel van centrifugaalkracht zonder bladeren te beschadigen, terwijl keukenpapier overgebleven vocht absorbeert. Grondig drogen is kritiek voor voedselveiligheid en verlengt bewaartijd."
        }
      },
      {
        question: {
          en: "At what internal temperature should protein additions (like chicken) reach before adding to salads?",
          es: "¿A qué temperatura interna deben llegar las adiciones de proteína (como pollo) antes de añadir a ensaladas?",
          de: "Welche Innentemperatur sollten Proteinzusätze (wie Hähnchen) erreichen, bevor sie zu Salaten hinzugefügt werden?",
          nl: "Welke interne temperatuur moeten eiwittoevoegingen (zoals kip) bereiken voordat ze aan salades toegevoegd worden?"
        },
        options: [
          { en: "145°F (63°C)", es: "145°F (63°C)", de: "145°F (63°C)", nl: "145°F (63°C)" },
          { en: "155°F (68°C)", es: "155°F (68°C)", de: "155°F (68°C)", nl: "155°F (68°C)" },
          { en: "165°F (74°C)", es: "165°F (74°C)", de: "165°F (74°C)", nl: "165°F (74°C)" },
          { en: "180°F (82°C)", es: "180°F (82°C)", de: "180°F (82°C)", nl: "180°F (82°C)" }
        ],
        correct: 2,
        explanation: {
          en: "Poultry (chicken, turkey) must reach 165°F (74°C) internal temperature to eliminate harmful bacteria like Salmonella and Campylobacter. This temperature ensures food safety when adding cooked proteins to salads. The protein should be cooked to this temperature, then properly cooled before adding to cold salad ingredients.",
          es: "Las aves (pollo, pavo) deben alcanzar 165°F (74°C) de temperatura interna para eliminar bacterias dañinas como Salmonella y Campylobacter. Esta temperatura asegura seguridad alimentaria al añadir proteínas cocidas a ensaladas. La proteína debe cocinarse a esta temperatura, luego enfriarse adecuadamente antes de añadir a ingredientes fríos de ensalada.",
          de: "Geflügel (Hähnchen, Truthahn) muss 165°F (74°C) Innentemperatur erreichen, um schädliche Bakterien wie Salmonellen und Campylobacter zu eliminieren. Diese Temperatur gewährleistet Lebensmittelsicherheit beim Hinzufügen gekochter Proteine zu Salaten. Das Protein sollte auf diese Temperatur gekocht, dann ordnungsgemäß abgekühlt werden, bevor es zu kalten Salatzutaten hinzugefügt wird.",
          nl: "Gevogelte (kip, kalkoen) moet 165°F (74°C) interne temperatuur bereiken om schadelijke bacteriën zoals Salmonella en Campylobacter te elimineren. Deze temperatuur verzekert voedselveiligheid bij het toevoegen van gekookte eiwitten aan salades. Het eiwit moet op deze temperatuur gekookt worden, dan goed gekoeld voordat het aan koude saladeïngrediënten toegevoegd wordt."
        }
      },
      {
        question: {
          en: "Which washing method is most effective for removing pesticide residues from salad vegetables?",
          es: "¿Qué método de lavado es más efectivo para remover residuos de pesticidas de verduras de ensalada?",
          de: "Welche Waschmethode ist am effektivsten zur Entfernung von Pestizidrückständen von Salatgemüse?",
          nl: "Welke wasmethode is het meest effectief voor het verwijderen van pesticidenresiduen van saladegroenten?"
        },
        options: [
          { en: "Soap and water", es: "Jabón y agua", de: "Seife und Wasser", nl: "Zeep en water" },
          { en: "Running water with gentle scrubbing", es: "Agua corriente con frotado suave", de: "Fließendes Wasser mit sanftem Schrubben", nl: "Stromend water met zachte scrubbing" },
          { en: "Bleach solution", es: "Solución de lejía", de: "Bleichlösung", nl: "Bleekoplossing" },
          { en: "Vinegar and baking soda", es: "Vinagre y bicarbonato de sodio", de: "Essig und Backpulver", nl: "Azijn en zuiveringszout" }
        ],
        correct: 1,
        explanation: {
          en: "Running water with gentle scrubbing is the most effective FDA-recommended method for removing pesticide residues. Studies show this removes more residues than soap or commercial washes. The mechanical action of rubbing under running water for 15-20 seconds effectively removes surface contaminants while being safe for consumption.",
          es: "Agua corriente con frotado suave es el método más efectivo recomendado por la FDA para remover residuos de pesticidas. Los estudios muestran que esto remueve más residuos que jabón o lavados comerciales. La acción mecánica de frotar bajo agua corriente por 15-20 segundos efectivamente remueve contaminantes superficiales mientras es seguro para consumo.",
          de: "Fließendes Wasser mit sanftem Schrubben ist die effektivste FDA-empfohlene Methode zur Entfernung von Pestizidrückständen. Studien zeigen, dass dies mehr Rückstände entfernt als Seife oder kommerzielle Waschmittel. Die mechanische Wirkung des Reibens unter fließendem Wasser für 15-20 Sekunden entfernt effektiv Oberflächenverunreinigungen und ist sicher für den Verzehr.",
          nl: "Stromend water met zachte scrubbing is de meest effectieve FDA-aanbevolen methode voor het verwijderen van pesticidenresiduen. Studies tonen dat dit meer residuen verwijdert dan zeep of commerciële wasmiddelen. De mechanische actie van wrijven onder stromend water gedurende 15-20 seconden verwijdert effectief oppervlakteverontreinigingen terwijl het veilig is voor consumptie."
        }
      },
      {
        question: {
          en: "What is the danger zone temperature range where bacteria multiply rapidly in prepared salads?",
          es: "¿Cuál es el rango de temperatura de zona peligrosa donde las bacterias se multiplican rápidamente en ensaladas preparadas?",
          de: "Was ist der Gefahrenzone-Temperaturbereich, in dem sich Bakterien in zubereiteten Salaten schnell vermehren?",
          nl: "Wat is het gevaarzone temperatuurbereik waar bacteriën zich snel vermenigvuldigen in bereide salades?"
        },
        options: [
          { en: "32-40°F (0-4°C)", es: "32-40°F (0-4°C)", de: "32-40°F (0-4°C)", nl: "32-40°F (0-4°C)" },
          { en: "41-135°F (5-57°C)", es: "41-135°F (5-57°C)", de: "41-135°F (5-57°C)", nl: "41-135°F (5-57°C)" },
          { en: "140-180°F (60-82°C)", es: "140-180°F (60-82°C)", de: "140-180°F (60-82°C)", nl: "140-180°F (60-82°C)" },
          { en: "200°F+ (93°C+)", es: "200°F+ (93°C+)", de: "200°F+ (93°C+)", nl: "200°F+ (93°C+)" }
        ],
        correct: 1,
        explanation: {
          en: "The danger zone is 41-135°F (5-57°C), where bacteria can double every 20 minutes. Prepared salads must be kept below 41°F to prevent rapid bacterial growth. This is why salads should be served immediately after preparation or properly refrigerated, and why the 2-hour rule exists for food left at room temperature.",
          es: "La zona peligrosa es 41-135°F (5-57°C), donde las bacterias pueden duplicarse cada 20 minutos. Las ensaladas preparadas deben mantenerse debajo de 41°F para prevenir crecimiento bacteriano rápido. Por esto las ensaladas deben servirse inmediatamente después de la preparación o refrigerarse adecuadamente, y por qué existe la regla de 2 horas para alimentos dejados a temperatura ambiente.",
          de: "Die Gefahrenzone ist 41-135°F (5-57°C), wo sich Bakterien alle 20 Minuten verdoppeln können. Zubereitete Salate müssen unter 41°F gehalten werden, um schnelles Bakterienwachstum zu verhindern. Deshalb sollten Salate sofort nach der Zubereitung serviert oder ordnungsgemäß gekühlt werden, und deshalb gibt es die 2-Stunden-Regel für bei Raumtemperatur gelassene Lebensmittel.",
          nl: "De gevaarzone is 41-135°F (5-57°C), waar bacteriën elke 20 minuten kunnen verdubbelen. Bereide salades moeten onder 41°F gehouden worden om snelle bacteriegroei te voorkomen. Daarom moeten salades onmiddellijk na bereiding geserveerd of goed gekoeld worden, en daarom bestaat de 2-uursregel voor voedsel dat op kamertemperatuur gelaten wordt."
        }
      },
      {
        question: {
          en: "Which knife material is best for cutting acidic salad ingredients like tomatoes without affecting flavor?",
          es: "¿Qué material de cuchillo es mejor para cortar ingredientes ácidos de ensalada como tomates sin afectar el sabor?",
          de: "Welches Messermaterial ist am besten zum Schneiden saurer Salatzutaten wie Tomaten, ohne den Geschmack zu beeinträchtigen?",
          nl: "Welk mesmateriaal is het beste voor het snijden van zure saladeïngrediënten zoals tomaten zonder de smaak te beïnvloeden?"
        },
        options: [
          { en: "Carbon steel", es: "Acero al carbono", de: "Kohlenstoffstahl", nl: "Koolstofstaal" },
          { en: "Stainless steel", es: "Acero inoxidable", de: "Edelstahl", nl: "Roestvrij staal" },
          { en: "Cast iron", es: "Hierro fundido", de: "Gusseisen", nl: "Gietijzer" },
          { en: "Aluminum", es: "Aluminio", de: "Aluminium", nl: "Aluminium" }
        ],
        correct: 1,
        explanation: {
          en: "Stainless steel is non-reactive and won't interact with acidic ingredients like tomatoes, citrus, or vinegar-based dressings. Carbon steel can react with acids, causing metallic tastes and discoloration of both the food and knife. Stainless steel maintains its sharpness well and is easy to sanitize, making it ideal for salad preparation.",
          es: "El acero inoxidable no es reactivo y no interactuará con ingredientes ácidos como tomates, cítricos o aderezos basados en vinagre. El acero al carbono puede reaccionar con ácidos, causando sabores metálicos y decoloración tanto del alimento como del cuchillo. El acero inoxidable mantiene bien su filo y es fácil de desinfectar, haciéndolo ideal para preparación de ensaladas.",
          de: "Edelstahl ist nicht reaktiv und wird nicht mit sauren Zutaten wie Tomaten, Zitrusfrüchten oder essigbasierten Dressings reagieren. Kohlenstoffstahl kann mit Säuren reagieren und metallische Geschmäcker sowie Verfärbungen sowohl der Lebensmittel als auch des Messers verursachen. Edelstahl behält seine Schärfe gut und ist leicht zu desinfizieren, was ihn ideal für die Salatzubereitung macht.",
          nl: "Roestvrij staal is niet-reactief en zal niet reageren met zure ingrediënten zoals tomaten, citrus of azijn-gebaseerde dressings. Koolstofstaal kan reageren met zuren, wat metaalachtige smaken en verkleuring van zowel voedsel als mes veroorzaakt. Roestvrij staal behoudt zijn scherpte goed en is gemakkelijk te desinfecteren, waardoor het ideaal is voor saladebereiding."
        }
      },
      {
        question: {
          en: "What is the proper technique for storing prepared salad dressing to maintain food safety?",
          es: "¿Cuál es la técnica adecuada para almacenar aderezo de ensalada preparado para mantener seguridad alimentaria?",
          de: "Was ist die richtige Technik zur Lagerung von zubereitetem Salatdressing, um die Lebensmittelsicherheit zu gewährleisten?",
          nl: "Wat is de juiste techniek voor het bewaren van bereide saladedressing om voedselveiligheid te behouden?"
        },
        options: [
          { en: "Room temperature storage only", es: "Almacenamiento solo a temperatura ambiente", de: "Nur Lagerung bei Raumtemperatur", nl: "Alleen bewaring op kamertemperatuur" },
          { en: "Refrigerate in airtight container, label with date", es: "Refrigerar en contenedor hermético, etiquetar con fecha", de: "Im luftdichten Behälter kühlen, mit Datum beschriften", nl: "Koelen in luchtdichte container, labelen met datum" },
          { en: "Freeze immediately", es: "Congelar inmediatamente", de: "Sofort einfrieren", nl: "Onmiddellijk invriezen" },
          { en: "Store in open container", es: "Almacenar en contenedor abierto", de: "In offenem Behälter lagern", nl: "Bewaren in open container" }
        ],
        correct: 1,
        explanation: {
          en: "Prepared salad dressings should be refrigerated in airtight containers and labeled with preparation dates. Most homemade dressings are safe for 3-7 days when properly refrigerated. Airtight storage prevents contamination and oxidation, while date labeling ensures timely use and prevents consumption of spoiled dressings.",
          es: "Los aderezos de ensalada preparados deben refrigerarse en contenedores herméticos y etiquetarse con fechas de preparación. La mayoría de aderezos caseros son seguros por 3-7 días cuando se refrigeran adecuadamente. El almacenamiento hermético previene contaminación y oxidación, mientras el etiquetado de fechas asegura uso oportuno y previene consumo de aderezos echados a perder.",
          de: "Zubereitete Salatdressings sollten in luftdichten Behältern gekühlt und mit Zubereitungsdaten beschriftet werden. Die meisten hausgemachten Dressings sind bei ordnungsgemäßer Kühlung 3-7 Tage sicher. Luftdichte Lagerung verhindert Kontamination und Oxidation, während Datumsbeschriftung rechtzeitigen Gebrauch gewährleistet und Verzehr verdorbener Dressings verhindert.",
          nl: "Bereide saladedressings moeten gekoeld worden in luchtdichte containers en gelabeld met bereidingsdatums. De meeste zelfgemaakte dressings zijn veilig voor 3-7 dagen wanneer goed gekoeld. Luchtdichte bewaring voorkomt besmetting en oxidatie, terwijl datumlabeling tijdige gebruik verzekert en consumptie van bedorven dressings voorkomt."
        }
      },
      {
        question: {
          en: "Which preparation method reduces the risk of cross-contamination when making mixed salads?",
          es: "¿Qué método de preparación reduce el riesgo de contaminación cruzada al hacer ensaladas mixtas?",
          de: "Welche Zubereitungsmethode reduziert das Risiko von Kreuzkontamination beim Zubereiten gemischter Salate?",
          nl: "Welke bereidingsmethode vermindert het risico van kruisbesmetting bij het maken van gemengde salades?"
        },
        options: [
          { en: "Prepare all ingredients on the same cutting board", es: "Preparar todos los ingredientes en la misma tabla de cortar", de: "Alle Zutaten auf demselben Schneidebrett zubereiten", nl: "Alle ingrediënten op dezelfde snijplank bereiden" },
          { en: "Use separate cutting boards for different ingredient types", es: "Usar tablas de cortar separadas para diferentes tipos de ingredientes", de: "Separate Schneidebretter für verschiedene Zutatentypen verwenden", nl: "Aparte snijplanken gebruiken voor verschillende ingrediënttypen" },
          { en: "Mix raw and cooked ingredients together immediately", es: "Mezclar ingredientes crudos y cocidos juntos inmediatamente", de: "Rohe und gekochte Zutaten sofort zusammen mischen", nl: "Rauwe en gekookte ingrediënten onmiddellijk samen mengen" },
          { en: "Use the same knife for all ingredients", es: "Usar el mismo cuchillo para todos los ingredientes", de: "Dasselbe Messer für alle Zutaten verwenden", nl: "Hetzelfde mes gebruiken voor alle ingrediënten" }
        ],
        correct: 1,
        explanation: {
          en: "Using separate cutting boards for different ingredient types prevents cross-contamination between raw proteins, cooked items, and fresh produce. Color-coded boards help maintain separation: red for raw meat, green for vegetables, blue for seafood, yellow for poultry. This system prevents harmful bacteria transfer between ingredients.",
          es: "Usar tablas de cortar separadas para diferentes tipos de ingredientes previene contaminación cruzada entre proteínas crudas, artículos cocidos y productos frescos. Las tablas codificadas por colores ayudan a mantener separación: rojo para carne cruda, verde para verduras, azul para mariscos, amarillo para aves. Este sistema previene transferencia de bacterias dañinas entre ingredientes.",
          de: "Separate Schneidebretter für verschiedene Zutatentypen verwenden verhindert Kreuzkontamination zwischen rohen Proteinen, gekochten Produkten und frischen Erzeugnissen. Farbkodierte Bretter helfen bei der Trennung: rot für rohes Fleisch, grün für Gemüse, blau für Meeresfrüchte, gelb für Geflügel. Dieses System verhindert schädliche Bakterienübertragung zwischen Zutaten.",
          nl: "Aparte snijplanken gebruiken voor verschillende ingrediënttypen voorkomt kruisbesmetting tussen rauwe eiwitten, gekookte items en verse producten. Kleurgecodeerde planken helpen scheiding handhaven: rood voor rauw vlees, groen voor groenten, blauw voor zeevruchten, geel voor gevogelte. Dit systeem voorkomt schadelijke bacterieoverdracht tussen ingrediënten."
        }
      },
      {
        question: {
          en: "What is the maximum safe holding time for dressed salads at serving temperature?",
          es: "¿Cuál es el tiempo máximo seguro de mantener ensaladas aderezadas a temperatura de servicio?",
          de: "Was ist die maximale sichere Haltezeit für angemachte Salate bei Serviertemperatur?",
          nl: "Wat is de maximale veilige bewaartijd voor aangemaakte salades op serveertemperatuur?"
        },
        options: [
          { en: "30 minutes", es: "30 minutos", de: "30 Minuten", nl: "30 minuten" },
          { en: "1 hour", es: "1 hora", de: "1 Stunde", nl: "1 uur" },
          { en: "2 hours", es: "2 horas", de: "2 Stunden", nl: "2 uur" },
          { en: "4 hours", es: "4 horas", de: "4 Stunden", nl: "4 uur" }
        ],
        correct: 2,
        explanation: {
          en: "Dressed salads should not be held at room temperature for more than 2 hours (1 hour if temperature exceeds 90°F). After this time, bacterial growth reaches dangerous levels. Dressing adds moisture and creates conditions favorable for bacterial multiplication, making time control critical for food safety.",
          es: "Las ensaladas aderezadas no deben mantenerse a temperatura ambiente por más de 2 horas (1 hora si la temperatura excede 90°F). Después de este tiempo, el crecimiento bacteriano alcanza niveles peligrosos. El aderezo añade humedad y crea condiciones favorables para multiplicación bacteriana, haciendo el control de tiempo crítico para seguridad alimentaria.",
          de: "Angemachte Salate sollten nicht länger als 2 Stunden bei Raumtemperatur gehalten werden (1 Stunde wenn die Temperatur 32°C übersteigt). Nach dieser Zeit erreicht das Bakterienwachstum gefährliche Werte. Dressing fügt Feuchtigkeit hinzu und schafft Bedingungen, die für Bakterienvermehrung günstig sind, wodurch Zeitkontrolle für die Lebensmittelsicherheit kritisch wird.",
          nl: "Aangemaakte salades mogen niet langer dan 2 uur op kamertemperatuur bewaard worden (1 uur als de temperatuur 32°C overschrijdt). Na deze tijd bereikt bacteriegroei gevaarlijke niveaus. Dressing voegt vocht toe en creëert omstandigheden gunstig voor bacterievermenigvuldiging, waardoor tijdcontrole kritiek is voor voedselveiligheid."
        }
      },
      {
        question: {
          en: "Which food safety principle is most important when preparing salads for large groups?",
          es: "¿Qué principio de seguridad alimentaria es más importante al preparar ensaladas para grupos grandes?",
          de: "Welches Lebensmittelsicherheitsprinzip ist am wichtigsten beim Zubereiten von Salaten für große Gruppen?",
          nl: "Welk voedselveiligheidsprincipe is het belangrijkst bij het bereiden van salades voor grote groepen?"
        },
        options: [
          { en: "Use only organic ingredients", es: "Usar solo ingredientes orgánicos", de: "Nur Bio-Zutaten verwenden", nl: "Alleen biologische ingrediënten gebruiken" },
          { en: "Keep cold foods cold and maintain proper temperatures", es: "Mantener alimentos fríos fríos y mantener temperaturas adecuadas", de: "Kalte Lebensmittel kalt halten und richtige Temperaturen beibehalten", nl: "Koude voedingsmiddelen koud houden en juiste temperaturen handhaven" },
          { en: "Use expensive ingredients only", es: "Usar solo ingredientes caros", de: "Nur teure Zutaten verwenden", nl: "Alleen dure ingrediënten gebruiken" },
          { en: "Make everything from scratch", es: "Hacer todo desde cero", de: "Alles von Grund auf machen", nl: "Alles vanaf nul maken" }
        ],
        correct: 1,
        explanation: {
          en: "Temperature control is the most critical food safety principle for large group salad preparation. Cold foods must stay at 41°F or below throughout preparation, service, and storage. Large quantities take longer to cool and are at risk longer, making proper temperature monitoring essential to prevent foodborne illness outbreaks.",
          es: "El control de temperatura es el principio de seguridad alimentaria más crítico para preparación de ensaladas para grupos grandes. Los alimentos fríos deben mantenerse a 41°F o menos durante preparación, servicio y almacenamiento. Las cantidades grandes toman más tiempo para enfriar y están en riesgo por más tiempo, haciendo el monitoreo adecuado de temperatura esencial para prevenir brotes de enfermedad transmitida por alimentos.",
          de: "Temperaturkontrolle ist das kritischste Lebensmittelsicherheitsprinzip für die Salatzubereitung großer Gruppen. Kalte Lebensmittel müssen während Zubereitung, Service und Lagerung bei 5°C oder darunter bleiben. Große Mengen brauchen länger zum Abkühlen und sind länger gefährdet, wodurch ordnungsgemäße Temperaturüberwachung wesentlich wird, um lebensmittelbedingte Krankheitsausbrüche zu verhindern.",
          nl: "Temperatuurcontrole is het meest kritieke voedselveiligheidsprincipe voor saladebereiding voor grote groepen. Koude voedingsmiddelen moeten op 5°C of lager blijven tijdens bereiding, service en bewaring. Grote hoeveelheden nemen langer om af te koelen en zijn langer risico, waardoor juiste temperatuurmonitoring essentieel is om voedselgerelateerde ziekte-uitbraken te voorkomen."
        }
      },
      {
        question: {
          en: "What is the proper technique for testing the sharpness of knives used in salad preparation?",
          es: "¿Cuál es la técnica adecuada para probar el filo de cuchillos usados en preparación de ensaladas?",
          de: "Was ist die richtige Technik zum Testen der Schärfe von Messern in der Salatzubereitung?",
          nl: "Wat is de juiste techniek voor het testen van de scherpte van messen gebruikt bij saladebereiding?"
        },
        options: [
          { en: "Test on your finger", es: "Probar en el dedo", de: "Am Finger testen", nl: "Testen op je vinger" },
          { en: "Cut through paper cleanly", es: "Cortar papel limpiamente", de: "Sauber durch Papier schneiden", nl: "Schoon door papier snijden" },
          { en: "Test on the cutting board", es: "Probar en la tabla de cortar", de: "Auf dem Schneidebrett testen", nl: "Testen op de snijplank" },
          { en: "Bang the blade on the counter", es: "Golpear la hoja en el mostrador", de: "Die Klinge auf die Theke schlagen", nl: "De kling op het aanrecht slaan" }
        ],
        correct: 1,
        explanation: {
          en: "The paper test is the safest method to check knife sharpness. A sharp knife should cut cleanly through paper without tearing. This test avoids injury risk while confirming the knife is sharp enough for precise cuts that won't bruise delicate salad ingredients. Sharp knives are actually safer as they require less pressure and provide better control.",
          es: "La prueba del papel es el método más seguro para verificar el filo del cuchillo. Un cuchillo afilado debe cortar limpiamente a través del papel sin rasgarlo. Esta prueba evita riesgo de lesión mientras confirma que el cuchillo está lo suficientemente afilado para cortes precisos que no magullarán ingredientes delicados de ensalada. Los cuchillos afilados son en realidad más seguros ya que requieren menos presión y proporcionan mejor control.",
          de: "Der Papiertest ist die sicherste Methode, um die Messerschärfe zu prüfen. Ein scharfes Messer sollte sauber durch Papier schneiden ohne zu reißen. Dieser Test vermeidet Verletzungsgefahr und bestätigt, dass das Messer scharf genug für präzise Schnitte ist, die zarte Salatzutaten nicht quetschen. Scharfe Messer sind tatsächlich sicherer, da sie weniger Druck erfordern und bessere Kontrolle bieten.",
          nl: "De papiertest is de veiligste methode om messcherpte te controleren. Een scherp mes moet schoon door papier snijden zonder te scheuren. Deze test vermijdt verwondingsrisico terwijl bevestigd wordt dat het mes scherp genoeg is voor precieze sneden die delicate saladeïngrediënten niet kneuzen. Scherpe messen zijn eigenlijk veiliger omdat ze minder druk vereisen en betere controle bieden."
        }
      },
      {
        question: {
          en: "Which storage container material is best for maintaining salad freshness and preventing contamination?",
          es: "¿Qué material de contenedor de almacenamiento es mejor para mantener frescura de ensalada y prevenir contaminación?",
          de: "Welches Lagerbehältermaterial ist am besten, um Salatfrische zu erhalten und Kontamination zu verhindern?",
          nl: "Welk bewaarcontainermateriaal is het beste voor het behouden van saladversheid en het voorkomen van besmetting?"
        },
        options: [
          { en: "Cardboard boxes", es: "Cajas de cartón", de: "Kartonschachteln", nl: "Kartonnen dozen" },
          { en: "Food-grade plastic or glass with tight-fitting lids", es: "Plástico grado alimentario o vidrio con tapas ajustadas", de: "Lebensmittelechter Kunststoff oder Glas mit dicht schließenden Deckeln", nl: "Voedselgeschikt plastic of glas met goed sluitende deksels" },
          { en: "Metal containers only", es: "Solo contenedores de metal", de: "Nur Metallbehälter", nl: "Alleen metalen containers" },
          { en: "Open bowls", es: "Tazones abiertos", de: "Offene Schüsseln", nl: "Open kommen" }
        ],
        correct: 1,
        explanation: {
          en: "Food-grade plastic or glass containers with tight-fitting lids provide the best protection for salads. These materials are non-reactive, easy to clean and sanitize, and create airtight seals that prevent moisture loss and contamination. Glass is excellent for acidic dressings, while quality plastic is lightweight and shatter-resistant for transport.",
          es: "Los contenedores de plástico grado alimentario o vidrio con tapas ajustadas proporcionan la mejor protección para ensaladas. Estos materiales no son reactivos, fáciles de limpiar y desinfectar, y crean sellos herméticos que previenen pérdida de humedad y contaminación. El vidrio es excelente para aderezos ácidos, mientras el plástico de calidad es liviano y resistente a roturas para transporte.",
          de: "Lebensmittelechte Kunststoff- oder Glasbehälter mit dicht schließenden Deckeln bieten den besten Schutz für Salate. Diese Materialien sind nicht reaktiv, leicht zu reinigen und zu desinfizieren, und schaffen luftdichte Versiegelungen, die Feuchtigkeitsverlust und Kontamination verhindern. Glas ist ausgezeichnet für saure Dressings, während hochwertiger Kunststoff leicht und bruchfest für den Transport ist.",
          nl: "Voedselgeschikt plastic of glazen containers met goed sluitende deksels bieden de beste bescherming voor salades. Deze materialen zijn niet-reactief, gemakkelijk schoon te maken en te desinfecteren, en creëren luchtdichte afsluitingen die vochtverlies en besmetting voorkomen. Glas is uitstekend voor zure dressings, terwijl kwaliteitsplastic lichtgewicht en breukbestendig is voor transport."
        }
      },
      {
        question: {
          en: "What is the recommended method for thawing frozen salad ingredients safely?",
          es: "¿Cuál es el método recomendado para descongelar ingredientes congelados de ensalada de manera segura?",
          de: "Was ist die empfohlene Methode zum sicheren Auftauen gefrorener Salatzutaten?",
          nl: "Wat is de aanbevolen methode voor het veilig ontdooien van bevroren saladeïngrediënten?"
        },
        options: [
          { en: "Room temperature countertop thawing", es: "Descongelar en mostrador a temperatura ambiente", de: "Auftauen bei Raumtemperatur auf der Arbeitsplatte", nl: "Ontdooien op kamertemperatuur op het aanrecht" },
          { en: "Hot water bath", es: "Baño de agua caliente", de: "Heißwasserbad", nl: "Heet waterbad" },
          { en: "Refrigerator thawing", es: "Descongelar en refrigerador", de: "Kühlschrank-Auftauen", nl: "Koelkast ontdooien" },
          { en: "Microwave on high heat", es: "Microondas en calor alto", de: "Mikrowelle bei hoher Hitze", nl: "Magnetron op hoge temperatuur" }
        ],
        correct: 2,
        explanation: {
          en: "Refrigerator thawing is the safest method as it keeps ingredients at safe temperatures (below 41°F) throughout the process. This method takes longer but prevents bacterial growth that occurs in the danger zone. For salad ingredients like frozen vegetables or proteins, plan ahead and allow 24 hours for complete, safe thawing.",
          es: "Descongelar en refrigerador es el método más seguro ya que mantiene los ingredientes a temperaturas seguras (debajo de 41°F) durante todo el proceso. Este método toma más tiempo pero previene crecimiento bacteriano que ocurre en la zona peligrosa. Para ingredientes de ensalada como verduras congeladas o proteínas, planifica con anticipación y permite 24 horas para descongelado completo y seguro.",
          de: "Kühlschrank-Auftauen ist die sicherste Methode, da sie Zutaten während des gesamten Prozesses bei sicheren Temperaturen (unter 5°C) hält. Diese Methode dauert länger, verhindert aber Bakterienwachstum, das in der Gefahrenzone auftritt. Für Salatzutaten wie gefrorenes Gemüse oder Proteine im Voraus planen und 24 Stunden für vollständiges, sicheres Auftauen einräumen.",
          nl: "Koelkast ontdooien is de veiligste methode omdat het ingrediënten gedurende het hele proces op veilige temperaturen (onder 5°C) houdt. Deze methode duurt langer maar voorkomt bacteriegroei die optreedt in de gevaarzone. Voor saladeïngrediënten zoals bevroren groenten of eiwitten, plan vooruit en sta 24 uur toe voor volledig, veilig ontdooien."
        }
      },
      {
        question: {
          en: "Which practice is essential for preventing listeria contamination in salad preparation?",
          es: "¿Qué práctica es esencial para prevenir contaminación por listeria en preparación de ensaladas?",
          de: "Welche Praxis ist wesentlich zur Verhinderung von Listerien-Kontamination bei der Salatzubereitung?",
          nl: "Welke praktijk is essentieel voor het voorkomen van listeria-besmetting bij saladebereiding?"
        },
        options: [
          { en: "Using only room temperature ingredients", es: "Usar solo ingredientes a temperatura ambiente", de: "Nur Zutaten bei Raumtemperatur verwenden", nl: "Alleen ingrediënten op kamertemperatuur gebruiken" },
          { en: "Thorough washing of all surfaces and equipment", es: "Lavado completo de todas las superficies y equipos", de: "Gründliches Waschen aller Oberflächen und Geräte", nl: "Grondig wassen van alle oppervlakken en apparatuur" },
          { en: "Adding salt to all ingredients", es: "Añadir sal a todos los ingredientes", de: "Salz zu allen Zutaten hinzufügen", nl: "Zout toevoegen aan alle ingrediënten" },
          { en: "Using only frozen vegetables", es: "Usar solo verduras congeladas", de: "Nur gefrorenes Gemüse verwenden", nl: "Alleen bevroren groenten gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Listeria monocytogenes can survive refrigeration and multiply at low temperatures, making thorough sanitation critical. All surfaces, cutting boards, knives, and equipment must be properly washed and sanitized between uses. Listeria can cross-contaminate from surfaces to fresh produce, making equipment hygiene the primary defense in salad preparation.",
          es: "Listeria monocytogenes puede sobrevivir refrigeración y multiplicarse a bajas temperaturas, haciendo la desinfección completa crítica. Todas las superficies, tablas de cortar, cuchillos y equipos deben lavarse y desinfectarse adecuadamente entre usos. Listeria puede contaminar cruzadamente desde superficies a productos frescos, haciendo la higiene del equipo la defensa primaria en preparación de ensaladas.",
          de: "Listeria monocytogenes kann Kühlung überleben und sich bei niedrigen Temperaturen vermehren, wodurch gründliche Desinfektion kritisch wird. Alle Oberflächen, Schneidebretter, Messer und Geräte müssen zwischen den Verwendungen ordnungsgemäß gewaschen und desinfiziert werden. Listerien können von Oberflächen auf frische Produkte kreuzkontaminieren, wodurch Gerätehygiene die primäre Verteidigung bei der Salatzubereitung wird.",
          nl: "Listeria monocytogenes kan koeling overleven en zich vermenigvuldigen bij lage temperaturen, waardoor grondige desinfectie kritiek is. Alle oppervlakken, snijplanken, messen en apparatuur moeten goed gewassen en gedesinfecteerd worden tussen gebruik. Listeria kan kruisbesmetting veroorzaken van oppervlakken naar verse producten, waardoor apparatuyhygiëne de primaire verdediging is bij saladebereiding."
        }
      },
      {
        question: {
          en: "What is the most effective way to prevent enzymatic browning in cut salad ingredients like apples or avocados?",
          es: "¿Cuál es la manera más efectiva de prevenir pardeamiento enzimático en ingredientes cortados de ensalada como manzanas o aguacates?",
          de: "Was ist der effektivste Weg, um enzymatische Bräunung bei geschnittenen Salatzutaten wie Äpfeln oder Avocados zu verhindern?",
          nl: "Wat is de meest effectieve manier om enzymatische verbruining in gesneden saladeïngrediënten zoals appels of avocado's te voorkomen?"
        },
        options: [
          { en: "Refrigerate immediately", es: "Refrigerar inmediatamente", de: "Sofort kühlen", nl: "Onmiddellijk koelen" },
          { en: "Apply acid (lemon juice, vinegar)", es: "Aplicar ácido (jugo de limón, vinagre)", de: "Säure anwenden (Zitronensaft, Essig)", nl: "Zuur toepassen (citroensap, azijn)" },
          { en: "Cover with plastic wrap", es: "Cubrir con envoltura plástica", de: "Mit Plastikfolie abdecken", nl: "Bedekken met plastic folie" },
          { en: "Add salt water", es: "Añadir agua salada", de: "Salzwasser hinzufügen", nl: "Zoutwater toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Applying acid like lemon juice or vinegar prevents enzymatic browning by lowering pH and deactivating polyphenol oxidase, the enzyme responsible for browning. This method maintains appearance, adds complementary flavor, and doesn't affect food safety. Acid creates an inhospitable environment for the browning reaction while enhancing salad taste.",
          es: "Aplicar ácido como jugo de limón o vinagre previene pardeamiento enzimático bajando el pH y desactivando la polifenol oxidasa, la enzima responsable del pardeamiento. Este método mantiene apariencia, añade sabor complementario, y no afecta seguridad alimentaria. El ácido crea un ambiente inhóspito para la reacción de pardeamiento mientras realza el sabor de la ensalada.",
          de: "Das Anwenden von Säure wie Zitronensaft oder Essig verhindert enzymatische Bräunung durch Senkung des pH-Werts und Deaktivierung der Polyphenoloxidase, des für die Bräunung verantwortlichen Enzyms. Diese Methode erhält das Aussehen, fügt ergänzenden Geschmack hinzu und beeinflusst die Lebensmittelsicherheit nicht. Säure schafft eine ungünstige Umgebung für die Bräunungsreaktion und verbessert den Salatgeschmack.",
          nl: "Het toepassen van zuur zoals citroensap of azijn voorkomt enzymatische verbruining door pH te verlagen en polyfenoloxidase te deactiveren, het enzym verantwoordelijk voor verbruining. Deze methode behoudt uiterlijk, voegt complementaire smaak toe, en beïnvloedt voedselveiligheid niet. Zuur creëert een ongunstige omgeving voor de verbruiningsreactie terwijl saladsmaak verbeterd wordt."
        }
      },
      {
        question: {
          en: "What is the proper temperature for washing salad greens to maintain both safety and quality?",
          es: "¿Cuál es la temperatura adecuada para lavar hojas verdes de ensalada para mantener tanto seguridad como calidad?",
          de: "Was ist die richtige Temperatur zum Waschen von Salatgrün, um sowohl Sicherheit als auch Qualität zu erhalten?",
          nl: "Wat is de juiste temperatuur voor het wassen van slagroenten om zowel veiligheid als kwaliteit te behouden?"
        },
        options: [
          { en: "Ice-cold water (32-35°F)", es: "Agua helada (32-35°F)", de: "Eiskaltes Wasser (0-2°C)", nl: "IJskoud water (0-2°C)" },
          { en: "Cool water (50-60°F)", es: "Agua fresca (50-60°F)", de: "Kühles Wasser (10-15°C)", nl: "Koel water (10-15°C)" },
          { en: "Hot water (120°F+)", es: "Agua caliente (120°F+)", de: "Heißes Wasser (49°C+)", nl: "Heet water (49°C+)" },
          { en: "Room temperature water", es: "Agua a temperatura ambiente", de: "Wasser bei Raumtemperatur", nl: "Water op kamertemperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "Cool water (50-60°F) is optimal for washing salad greens as it effectively removes contaminants and bacteria while maintaining the cellular structure of delicate leaves. Ice-cold water can shock the greens, while hot water wilts them and reduces nutritional value. Cool water provides the best balance of food safety and quality preservation.",
          es: "El agua fresca (50-60°F) es óptima para lavar hojas verdes de ensalada ya que remueve efectivamente contaminantes y bacterias mientras mantiene la estructura celular de las hojas delicadas. El agua helada puede impactar las hojas, mientras que el agua caliente las marchita y reduce el valor nutricional. El agua fresca proporciona el mejor balance de seguridad alimentaria y preservación de calidad.",
          de: "Kühles Wasser (10-15°C) ist optimal zum Waschen von Salatgrün, da es Kontaminanten und Bakterien effektiv entfernt, während es die Zellstruktur zarter Blätter erhält. Eiskaltes Wasser kann die Grünpflanzen schockieren, während heißes Wasser sie welken lässt und den Nährwert reduziert. Kühles Wasser bietet die beste Balance aus Lebensmittelsicherheit und Qualitätserhaltung.",
          nl: "Koel water (10-15°C) is optimaal voor het wassen van slagroenten omdat het effectief verontreinigingen en bacteriën verwijdert terwijl de celstructuur van delicate bladeren behouden blijft. IJskoud water kan de groenten shockeren, terwijl heet water ze doet verwelken en voedingswaarde vermindert. Koel water biedt de beste balans tussen voedselveiligheid en kwaliteitsbehoud."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();