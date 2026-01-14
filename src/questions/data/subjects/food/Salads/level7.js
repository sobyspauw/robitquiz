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
          en: "What is the minimum concentration of chlorine bleach solution required for effective cutting board sanitization?",
          es: "¿Cuál es la concentración mínima de solución de lejía con cloro requerida para desinfección efectiva de tabla de cortar?",
          de: "Was ist die Mindestkonzentration der Chlorbleichlösung, die für effektive Schneidebrett-Desinfektion erforderlich ist?",
          nl: "Wat is de minimale concentratie van chloorbleekoplossing vereist voor effectieve snijplank desinfectie?"
        },
        options: [
          { en: "10 ppm (parts per million)", es: "10 ppm (partes por millón)", de: "10 ppm (Teile pro Million)", nl: "10 ppm (delen per miljoen)" },
          { en: "50-100 ppm", es: "50-100 ppm", de: "50-100 ppm", nl: "50-100 ppm" },
          { en: "200 ppm", es: "200 ppm", de: "200 ppm", nl: "200 ppm" },
          { en: "1000 ppm", es: "1000 ppm", de: "1000 ppm", nl: "1000 ppm" }
        ],
        correct: 1,
        explanation: {
          en: "A sanitizing solution of 50-100 ppm chlorine (approximately 1 tablespoon bleach per gallon of water) is the minimum effective concentration for food contact surfaces. This level kills pathogenic bacteria within 1 minute of contact. Solutions must be prepared fresh daily as chlorine degrades rapidly, and surfaces must air-dry rather than be towel-dried to maintain sanitizer effectiveness.",
          es: "Una solución desinfectante de 50-100 ppm de cloro (aproximadamente 1 cucharada de lejía por galón de agua) es la concentración mínima efectiva para superficies de contacto con alimentos. Este nivel mata bacterias patógenas dentro de 1 minuto de contacto. Las soluciones deben prepararse frescas diariamente ya que el cloro se degrada rápidamente, y las superficies deben secarse al aire en lugar de con toalla para mantener efectividad del desinfectante.",
          de: "Eine Desinfektionslösung von 50-100 ppm Chlor (ungefähr 1 Esslöffel Bleichmittel pro 4 Liter Wasser) ist die minimal effektive Konzentration für Lebensmittelkontaktflächen. Diese Konzentration tötet pathogene Bakterien innerhalb von 1 Minute Kontakt. Lösungen müssen täglich frisch zubereitet werden, da Chlor schnell abgebaut wird, und Oberflächen müssen an der Luft trocknen statt mit Handtuch, um die Desinfektionswirkung zu erhalten.",
          nl: "Een desinfecterende oplossing van 50-100 ppm chloor (ongeveer 1 eetlepel bleek per 4 liter water) is de minimaal effectieve concentratie voor voedselcontactoppervlakken. Dit niveau doodt pathogene bacteriën binnen 1 minuut contact. Oplossingen moeten dagelijks vers bereid worden omdat chloor snel afbreekt, en oppervlakken moeten aan de lucht drogen in plaats van met handdoek om desinfectiemiddel effectiviteit te behouden."
        }
      },
      {
        question: {
          en: "What is the HACCP critical control point temperature for refrigerated salad storage?",
          es: "¿Cuál es la temperatura del punto de control crítico HACCP para almacenamiento refrigerado de ensaladas?",
          de: "Was ist die HACCP-kritische Kontrollpunkttemperatur für gekührte Salatlagkerung?",
          nl: "Wat is de HACCP kritieke controlepunt temperatuur voor gekoelde saladebewaring?"
        },
        options: [
          { en: "Below 50°F (10°C)", es: "Debajo de 50°F (10°C)", de: "Unter 10°C", nl: "Onder 10°C" },
          { en: "Below 41°F (5°C)", es: "Debajo de 41°F (5°C)", de: "Unter 5°C", nl: "Onder 5°C" },
          { en: "Below 32°F (0°C)", es: "Debajo de 32°F (0°C)", de: "Unter 0°C", nl: "Onder 0°C" },
          { en: "Below 60°F (16°C)", es: "Debajo de 60°F (16°C)", de: "Unter 16°C", nl: "Onder 16°C" }
        },
        correct: 1,
        explanation: {
          en: "HACCP (Hazard Analysis Critical Control Point) standards require potentially hazardous foods like prepared salads to be held at 41°F (5°C) or below. This temperature significantly slows bacterial reproduction without freezing delicate greens. Temperatures between 41-135°F constitute the danger zone where bacteria multiply rapidly, doubling every 20-30 minutes. Regular monitoring with calibrated thermometers is essential.",
          es: "Los estándares HACCP (Análisis de Peligros y Puntos de Control Críticos) requieren que alimentos potencialmente peligrosos como ensaladas preparadas se mantengan a 41°F (5°C) o menos. Esta temperatura ralentiza significativamente la reproducción bacteriana sin congelar hojas delicadas. Las temperaturas entre 41-135°F constituyen la zona de peligro donde las bacterias se multiplican rápidamente, duplicándose cada 20-30 minutos. El monitoreo regular con termómetros calibrados es esencial.",
          de: "HACCP-Standards (Hazard Analysis Critical Control Point) erfordern, dass potenziell gefährliche Lebensmittel wie zubereitete Salate bei 5°C oder darunter gehalten werden. Diese Temperatur verlangsamt die Bakterienvermehrung erheblich, ohne zarte Grüns einzufrieren. Temperaturen zwischen 5-57°C bilden die Gefahrenzone, in der sich Bakterien schnell vermehren und sich alle 20-30 Minuten verdoppeln. Regelmäßige Überwachung mit kalibrierten Thermometern ist wesentlich.",
          nl: "HACCP-normen (Hazard Analysis Critical Control Point) vereisen dat potentieel gevaarlijk voedsel zoals bereide salades op 5°C of lager gehouden worden. Deze temperatuur vertraagt bacteriële reproductie aanzienlijk zonder delicate groenten te bevriezen. Temperaturen tussen 5-57°C vormen de gevaarzone waar bacteriën zich snel vermenigvuldigen, verdubbelen elke 20-30 minuten. Regelmatige monitoring met gekalibreerde thermometers is essentieel."
        }
      },
      {
        question: {
          en: "Which pathogen is most commonly associated with contaminated leafy greens and requires specific prevention protocols?",
          es: "¿Qué patógeno se asocia más comúnmente con hojas verdes contaminadas y requiere protocolos de prevención específicos?",
          de: "Welcher Erreger wird am häufigsten mit kontaminiertem Blattgemüse in Verbindung gebracht und erfordert spezifische Präventionsprotokolle?",
          nl: "Welke pathogeen wordt het meest geassocieerd met besmette bladgroenten en vereist specifieke preventieprotocollen?"
        },
        options: [
          { en: "Staphylococcus aureus", es: "Staphylococcus aureus", de: "Staphylococcus aureus", nl: "Staphylococcus aureus" },
          { en: "E. coli O157:H7", es: "E. coli O157:H7", de: "E. coli O157:H7", nl: "E. coli O157:H7" },
          { en: "Clostridium botulinum", es: "Clostridium botulinum", de: "Clostridium botulinum", nl: "Clostridium botulinum" },
          { en: "Bacillus cereus", es: "Bacillus cereus", de: "Bacillus cereus", nl: "Bacillus cereus" }
        },
        correct: 1,
        explanation: {
          en: "E. coli O157:H7 is the most significant pathogen associated with leafy greens, causing serious illness including hemolytic uremic syndrome. Contamination occurs through irrigation water, soil, or improper handling. Prevention requires sourcing from reputable suppliers with GAP (Good Agricultural Practices) certification, thorough washing, temperature control, and preventing cross-contamination from animal products. Just 10-100 cells can cause illness.",
          es: "E. coli O157:H7 es el patógeno más significativo asociado con hojas verdes, causando enfermedad grave incluyendo síndrome urémico hemolítico. La contaminación ocurre a través de agua de riego, suelo o manejo inadecuado. La prevención requiere abastecimiento de proveedores reputables con certificación GAP (Buenas Prácticas Agrícolas), lavado completo, control de temperatura y prevención de contaminación cruzada de productos animales. Solo 10-100 células pueden causar enfermedad.",
          de: "E. coli O157:H7 ist der bedeutendste Erreger, der mit Blattgemüse in Verbindung gebracht wird und schwere Krankheiten einschließlich hämolytisch-urämisches Syndrom verursacht. Kontamination erfolgt durch Bewässerungswasser, Boden oder unsachgemäße Handhabung. Prävention erfordert Beschaffung von seriösen Lieferanten mit GAP-Zertifizierung (Good Agricultural Practices), gründliches Waschen, Temperaturkontrolle und Verhinderung von Kreuzkontamination durch tierische Produkte. Nur 10-100 Zellen können Krankheit verursachen.",
          nl: "E. coli O157:H7 is de meest significante pathogeen geassocieerd met bladgroenten, veroorzaakt ernstige ziekte inclusief hemolytisch uremisch syndroom. Besmetting treedt op via irrigatiewater, bodem of onjuiste behandeling. Preventie vereist inkoop van betrouwbare leveranciers met GAP-certificering (Good Agricultural Practices), grondig wassen, temperatuurcontrole en voorkomen van kruisbesmetting van dierlijke producten. Slechts 10-100 cellen kunnen ziekte veroorzaken."
        }
      },
      {
        question: {
          en: "What is the proper hand washing procedure duration required before handling ready-to-eat salad ingredients?",
          es: "¿Cuál es la duración adecuada del procedimiento de lavado de manos requerido antes de manejar ingredientes de ensalada listos para comer?",
          de: "Was ist die richtige Handwasch-Verfahrensdauer, die vor dem Umgang mit verzehrfertigen Salatzutaten erforderlich ist?",
          nl: "Wat is de juiste handenwasprocedure duur vereist voor het hanteren van kant-en-klare saladeïngrediënten?"
        },
        options: [
          { en: "5 seconds", es: "5 segundos", de: "5 Sekunden", nl: "5 seconden" },
          { en: "10 seconds", es: "10 segundos", de: "10 Sekunden", nl: "10 seconden" },
          { en: "20 seconds", es: "20 segundos", de: "20 Sekunden", nl: "20 seconden" },
          { en: "60 seconds", es: "60 segundos", de: "60 Sekunden", nl: "60 seconden" }
        },
        correct: 2,
        explanation: {
          en: "Proper hand washing requires a minimum of 20 seconds of vigorous scrubbing with soap and warm water, covering all hand surfaces including between fingers, under nails, and wrists. This duration is necessary to physically remove transient microorganisms. For food handlers preparing ready-to-eat foods like salads, hands should be washed before starting work, after touching potential contaminants, and every time gloves are changed.",
          es: "El lavado de manos adecuado requiere un mínimo de 20 segundos de frotado vigoroso con jabón y agua tibia, cubriendo todas las superficies de la mano incluyendo entre dedos, debajo de uñas y muñecas. Esta duración es necesaria para remover físicamente microorganismos transitorios. Para manipuladores de alimentos preparando alimentos listos para comer como ensaladas, las manos deben lavarse antes de comenzar el trabajo, después de tocar contaminantes potenciales, y cada vez que se cambian los guantes.",
          de: "Ordnungsgemäßes Händewaschen erfordert mindestens 20 Sekunden kräftiges Schrubben mit Seife und warmem Wasser, wobei alle Handoberflächen einschließlich zwischen Fingern, unter Nägeln und Handgelenken abgedeckt werden. Diese Dauer ist notwendig, um transiente Mikroorganismen physisch zu entfernen. Für Lebensmittelbearbeiter, die verzehrfertige Lebensmittel wie Salate zubereiten, sollten Hände vor Arbeitsbeginn, nach Berührung potenzieller Kontaminanten und jedes Mal beim Wechseln der Handschuhe gewaschen werden.",
          nl: "Juist handen wassen vereist minimaal 20 seconden krachtig schrobben met zeep en warm water, alle handoppervlakken bedekkend inclusief tussen vingers, onder nagels en polsen. Deze duur is noodzakelijk om voorbijgaande micro-organismen fysiek te verwijderen. Voor voedselbehandelaars die kant-en-klare voedingsmiddelen zoals salades bereiden, moeten handen gewassen worden voor het starten van werk, na het aanraken van potentiële verontreinigingen, en elke keer dat handschoenen gewisseld worden."
        }
      },
      {
        question: {
          en: "What water activity (aw) level in salad dressings prevents most bacterial growth?",
          es: "¿Qué nivel de actividad de agua (aw) en aderezos de ensalada previene la mayoría del crecimiento bacteriano?",
          de: "Welches Wasseraktivitätsniveau (aw) in Salatdressings verhindert das meiste Bakterienwachstum?",
          nl: "Welk wateractiviteitsniveau (aw) in saladedressings voorkomt de meeste bacteriegroei?"
        },
        options: [
          { en: "Below 0.50", es: "Debajo de 0.50", de: "Unter 0,50", nl: "Onder 0,50" },
          { en: "Below 0.70", es: "Debajo de 0.70", de: "Unter 0,70", nl: "Onder 0,70" },
          { en: "Below 0.85", es: "Debajo de 0.85", de: "Unter 0,85", nl: "Onder 0,85" },
          { en: "Below 0.92", es: "Debajo de 0.92", de: "Unter 0,92", nl: "Onder 0,92" }
        },
        correct: 2,
        explanation: {
          en: "Water activity (aw) below 0.85 prevents growth of most pathogenic bacteria. Vinegar-based dressings, high-salt formulations, and oil-based dressings achieve low water activity through acid, salt, or limited free water. Most bacteria require aw above 0.90 to grow. This principle explains why vinaigrettes are shelf-stable while creamy dressings with higher water content require refrigeration—the bound water in low-aw dressings is unavailable for bacterial metabolism.",
          es: "Actividad de agua (aw) debajo de 0.85 previene crecimiento de la mayoría de bacterias patógenas. Aderezos basados en vinagre, formulaciones de alta sal y aderezos basados en aceite logran baja actividad de agua a través de ácido, sal o agua libre limitada. La mayoría de bacterias requieren aw por encima de 0.90 para crecer. Este principio explica por qué las vinagretas son estables en anaquel mientras aderezos cremosos con mayor contenido de agua requieren refrigeración—el agua ligada en aderezos de bajo aw no está disponible para metabolismo bacteriano.",
          de: "Wasseraktivität (aw) unter 0,85 verhindert Wachstum der meisten pathogenen Bakterien. Essigbasierte Dressings, hochsalzige Formulierungen und ölbasierte Dressings erreichen niedrige Wasseraktivität durch Säure, Salz oder begrenztes freies Wasser. Die meisten Bakterien benötigen aw über 0,90 zum Wachsen. Dieses Prinzip erklärt, warum Vinaigrettes lagerungs-stabil sind, während cremige Dressings mit höherem Wassergehalt Kühlung erfordern—das gebundene Wasser in niedrig-aw Dressings ist für bakteriellen Stoffwechsel nicht verfügbar.",
          nl: "Wateractiviteit (aw) onder 0,85 voorkomt groei van de meeste pathogene bacteriën. Azijn-gebaseerde dressings, hoog-zout formuleringen en olie-gebaseerde dressings bereiken lage wateractiviteit door zuur, zout of beperkt vrij water. De meeste bacteriën vereisen aw boven 0,90 om te groeien. Dit principe verklaart waarom vinaigrettes houdbaar zijn terwijl romige dressings met hoger watergehalte koeling vereisen—het gebonden water in lage-aw dressings is niet beschikbaar voor bacterieel metabolisme."
        }
      },
      {
        question: {
          en: "What is the correct pH range for acidified salad dressings to inhibit pathogenic bacteria growth?",
          es: "¿Cuál es el rango de pH correcto para aderezos de ensalada acidificados para inhibir crecimiento de bacterias patógenas?",
          de: "Was ist der korrekte pH-Bereich für angesäuerte Salatdressings zur Hemmung pathogenen Bakterienwachstums?",
          nl: "Wat is het correcte pH-bereik voor geacidificeerde saladedressings om pathogene bacteriegroei te remmen?"
        },
        options: [
          { en: "Below 2.0", es: "Debajo de 2.0", de: "Unter 2,0", nl: "Onder 2,0" },
          { en: "Below 3.5", es: "Debajo de 3.5", de: "Unter 3,5", nl: "Onder 3,5" },
          { en: "Below 4.6", es: "Debajo de 4.6", de: "Unter 4,6", nl: "Onder 4,6" },
          { en: "Below 6.0", es: "Debajo de 6.0", de: "Unter 6,0", nl: "Onder 6,0" }
        },
        correct: 2,
        explanation: {
          en: "pH below 4.6 is the critical threshold that prevents growth of Clostridium botulinum and most pathogenic bacteria. This is why vinegar (pH 2.4-3.4) is a key preservative in dressings. At pH 4.6 or below, foods are classified as 'high acid' and are generally safe from pathogenic bacteria. Commercial dressings are formulated and tested to maintain this pH, and homemade dressings with adequate vinegar or citrus achieve similar protection.",
          es: "pH debajo de 4.6 es el umbral crítico que previene crecimiento de Clostridium botulinum y la mayoría de bacterias patógenas. Por esto el vinagre (pH 2.4-3.4) es un conservante clave en aderezos. A pH 4.6 o menos, los alimentos se clasifican como 'alto ácido' y generalmente son seguros de bacterias patógenas. Los aderezos comerciales se formulan y prueban para mantener este pH, y aderezos caseros con vinagre o cítricos adecuados logran protección similar.",
          de: "pH unter 4,6 ist die kritische Schwelle, die Wachstum von Clostridium botulinum und den meisten pathogenen Bakterien verhindert. Deshalb ist Essig (pH 2,4-3,4) ein Schlüsselkonservierungsmittel in Dressings. Bei pH 4,6 oder darunter werden Lebensmittel als 'hochsauer' klassifiziert und sind im Allgemeinen sicher vor pathogenen Bakterien. Kommerzielle Dressings werden formuliert und getestet, um diesen pH aufrechtzuerhalten, und hausgemachte Dressings mit ausreichend Essig oder Zitrus erreichen ähnlichen Schutz.",
          nl: "pH onder 4,6 is de kritieke drempel die groei van Clostridium botulinum en de meeste pathogene bacteriën voorkomt. Daarom is azijn (pH 2,4-3,4) een sleutelconserveringsmiddel in dressings. Bij pH 4,6 of lager worden voedingsmiddelen geclassificeerd als 'hoog zuur' en zijn over het algemeen veilig van pathogene bacteriën. Commerciële dressings worden geformuleerd en getest om deze pH te handhaven, en zelfgemaakte dressings met voldoende azijn of citrus bereiken vergelijkbare bescherming."
        }
      },
      {
        question: {
          en: "What is the safe cooling time requirement for hot salad ingredients before refrigerated storage?",
          es: "¿Cuál es el requisito de tiempo de enfriamiento seguro para ingredientes calientes de ensalada antes de almacenamiento refrigerado?",
          de: "Was ist die sichere Abkühlzeitanforderung für heiße Salatzutaten vor gekühlter Lagerung?",
          nl: "Wat is de veilige koeltijd vereiste voor hete saladeïngrediënten voor gekoelde bewaring?"
        },
        options: [
          { en: "135°F to 70°F within 2 hours, then 70°F to 41°F within 4 hours", es: "135°F a 70°F dentro de 2 horas, luego 70°F a 41°F dentro de 4 horas", de: "57°C auf 21°C innerhalb 2 Stunden, dann 21°C auf 5°C innerhalb 4 Stunden", nl: "57°C naar 21°C binnen 2 uur, dan 21°C naar 5°C binnen 4 uur" },
          { en: "Room temperature cooling for 24 hours", es: "Enfriamiento a temperatura ambiente por 24 horas", de: "Raumtemperatur-Abkühlung für 24 Stunden", nl: "Kamertemperatuur koeling voor 24 uur" },
          { en: "Immediate freezing required", es: "Congelación inmediata requerida", de: "Sofortiges Einfrieren erforderlich", nl: "Onmiddellijke bevriezing vereist" },
          { en: "No time limit necessary", es: "No hay límite de tiempo necesario", de: "Keine Zeitbegrenzung notwendig", nl: "Geen tijdslimiet noodzakelijk" }
        },
        correct: 0,
        explanation: {
          en: "The two-stage cooling method requires foods to cool from 135°F to 70°F within 2 hours, then from 70°F to 41°F within an additional 4 hours (6 hours total). This prevents prolonged time in the danger zone. For salad ingredients like roasted vegetables or grilled proteins, use shallow pans (2 inches deep), ice baths, or rapid-chill equipment. Placing hot food directly in refrigerators can raise internal temperatures and endanger other stored foods.",
          es: "El método de enfriamiento de dos etapas requiere que los alimentos se enfríen de 135°F a 70°F dentro de 2 horas, luego de 70°F a 41°F dentro de 4 horas adicionales (6 horas en total). Esto previene tiempo prolongado en la zona de peligro. Para ingredientes de ensalada como verduras asadas o proteínas a la parrilla, usar sartenes poco profundas (2 pulgadas de profundidad), baños de hielo o equipo de enfriamiento rápido. Colocar alimentos calientes directamente en refrigeradores puede aumentar temperaturas internas y poner en peligro otros alimentos almacenados.",
          de: "Die zweistufige Kühlmethode erfordert, dass Lebensmittel von 57°C auf 21°C innerhalb von 2 Stunden abkühlen, dann von 21°C auf 5°C innerhalb weiterer 4 Stunden (6 Stunden insgesamt). Dies verhindert längere Zeit in der Gefahrenzone. Für Salatzutaten wie geröstetes Gemüse oder gegrillte Proteine flache Pfannen (5 cm tief), Eisbäder oder Schnellkühlgeräte verwenden. Heißes Essen direkt in Kühlschränke zu stellen kann Innentemperaturen erhöhen und andere gelagerte Lebensmittel gefährden.",
          nl: "De tweefasige koelmethode vereist dat voedsel afkoelt van 57°C naar 21°C binnen 2 uur, dan van 21°C naar 5°C binnen aanvullende 4 uur (6 uur totaal). Dit voorkomt langdurige tijd in de gevaarzone. Voor saladeïngrediënten zoals geroosterde groenten of gegrilde eiwitten, gebruik ondiepe pannen (5 cm diep), ijsbaden of snelkoelapparatuur. Heet voedsel direct in koelkasten plaatsen kan interne temperaturen verhogen en ander opgeslagen voedsel in gevaar brengen."
        }
      },
      {
        question: {
          en: "Which food allergen requires separate preparation areas and dedicated utensils in salad prep due to cross-contact risks?",
          es: "¿Qué alérgeno alimentario requiere áreas de preparación separadas y utensilios dedicados en preparación de ensaladas debido a riesgos de contacto cruzado?",
          de: "Welches Lebensmittelallergen erfordert separate Zubereitungsbereiche und dedizierte Utensilien bei der Salatzubereitung aufgrund von Kreuzkontaktrisiken?",
          nl: "Welk voedselallergeen vereist aparte bereidingsgebieden en toegewijde keukengerei bij saladebereiding vanwege kruiscontactrisico's?"
        },
        options: [
          { en: "Caffeine", es: "Cafeína", de: "Koffein", nl: "Cafeïne" },
          { en: "Tree nuts", es: "Nueces de árbol", de: "Baumnüsse", nl: "Boomn oten" },
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Fiber", es: "Fibra", de: "Ballaststoffe", nl: "Vezels" }
        },
        correct: 1,
        explanation: {
          en: "Tree nuts (walnuts, pecans, almonds, etc.) are major allergens requiring strict separation. Even trace amounts from shared cutting boards, knives, or mixing bowls can trigger severe allergic reactions. Best practices include: dedicated utensils stored separately, color-coded equipment, preparation at different times, thorough cleaning between allergen and non-allergen prep, and staff training. Cross-contact with nuts is particularly dangerous as proteins can't be removed by normal washing.",
          es: "Nueces de árbol (nueces, pecanas, almendras, etc.) son alérgenos mayores que requieren separación estricta. Incluso cantidades traza de tablas de cortar, cuchillos o tazones compartidos pueden desencadenar reacciones alérgicas graves. Mejores prácticas incluyen: utensilios dedicados almacenados separadamente, equipo codificado por color, preparación en diferentes momentos, limpieza completa entre preparación de alérgenos y no alérgenos, y capacitación del personal. El contacto cruzado con nueces es particularmente peligroso ya que las proteínas no pueden removerse con lavado normal.",
          de: "Baumnüsse (Walnüsse, Pekannüsse, Mandeln usw.) sind Hauptallergene, die strikte Trennung erfordern. Selbst Spurenmengen von gemeinsam genutzten Schneidebrettern, Messern oder Mischschüsseln können schwere allergische Reaktionen auslösen. Best Practices umfassen: dedizierte separat gelagerte Utensilien, farbkodierte Ausrüstung, Zubereitung zu verschiedenen Zeiten, gründliche Reinigung zwischen Allergen- und Nicht-Allergen-Zubereitung und Mitarbeiterschulung. Kreuzkontakt mit Nüssen ist besonders gefährlich, da Proteine nicht durch normales Waschen entfernt werden können.",
          nl: "Boomnoten (walnoten, pecannoten, amandelen, enz.) zijn belangrijke allergenen die strikte scheiding vereisen. Zelfs spooreenheden van gedeelde snijplanken, messen of mengkommen kunnen ernstige allergische reacties triggeren. Beste praktijken omvatten: toegewijde apart opgeslagen keukengerei, kleurgecodeerde apparatuur, bereiding op verschillende tijden, grondige reiniging tussen allergeen en niet-allergeen prep, en personeelstraining. Kruiscontact met noten is bijzonder gevaarlijk omdat eiwitten niet verwijderd kunnen worden door normaal wassen."
        }
      },
      {
        question: {
          en: "What is the proper procedure for calibrating food thermometers used in salad preparation?",
          es: "¿Cuál es el procedimiento adecuado para calibrar termómetros de alimentos usados en preparación de ensaladas?",
          de: "Was ist das richtige Verfahren zur Kalibrierung von Lebensmittelthermometern in der Salatzubereitung?",
          nl: "Wat is de juiste procedure voor het kalibreren van voedselthermometers gebruikt bij saladebereiding?"
        },
        options: [
          { en: "Never calibrate, replace annually", es: "Nunca calibrar, reemplazar anualmente", de: "Nie kalibrieren, jährlich ersetzen", nl: "Nooit kalibreren, jaarlijks vervangen" },
          { en: "Ice point method: 32°F (0°C) or boiling point method: 212°F (100°C)", es: "Método de punto de hielo: 32°F (0°C) o método de punto de ebullición: 212°F (100°C)", de: "Eispunkt-Methode: 0°C oder Siedepunkt-Methode: 100°C", nl: "IJspuntmethode: 0°C of kookpuntmethode: 100°C" },
          { en: "Test against body temperature only", es: "Probar solo contra temperatura corporal", de: "Nur gegen Körpertemperatur testen", nl: "Alleen testen tegen lichaamstemperatuur" },
          { en: "Calibration unnecessary for digital thermometers", es: "Calibración innecesaria para termómetros digitales", de: "Kalibrierung für Digitalthermometer unnötig", nl: "Kalibratie onnodig voor digitale thermometers" }
        },
        correct: 1,
        explanation: {
          en: "Thermometers should be calibrated regularly using either the ice point method (ice water should read 32°F/0°C) or boiling point method (boiling water at sea level reads 212°F/100°C, adjust for altitude). Calibration should occur daily for critical operations, after drops, and when accuracy is questioned. Accurate temperature monitoring is essential for HACCP compliance and food safety—even 5°F error can leave foods in dangerous temperature zones during cooling or storage.",
          es: "Los termómetros deben calibrarse regularmente usando el método de punto de hielo (agua helada debe leer 32°F/0°C) o método de punto de ebullición (agua hirviendo a nivel del mar lee 212°F/100°C, ajustar por altitud). La calibración debe ocurrir diariamente para operaciones críticas, después de caídas, y cuando se cuestiona precisión. El monitoreo preciso de temperatura es esencial para cumplimiento HACCP y seguridad alimentaria—incluso error de 5°F puede dejar alimentos en zonas de temperatura peligrosas durante enfriamiento o almacenamiento.",
          de: "Thermometer sollten regelmäßig mit der Eispunkt-Methode (Eiswasser sollte 0°C anzeigen) oder Siedepunkt-Methode (kochendes Wasser auf Meereshöhe zeigt 100°C, für Höhe anpassen) kalibriert werden. Kalibrierung sollte täglich für kritische Vorgänge, nach Stürzen und wenn Genauigkeit in Frage gestellt wird erfolgen. Genaue Temperaturüberwachung ist für HACCP-Konformität und Lebensmittelsicherheit wesentlich—selbst 3°C Fehler können Lebensmittel in gefährlichen Temperaturzonen während Kühlung oder Lagerung lassen.",
          nl: "Thermometers moeten regelmatig gekalibreerd worden met ofwel de ijspuntmethode (ijswater moet 0°C lezen) of kookpuntmethode (kokend water op zeeniveau leest 100°C, aanpassen voor hoogte). Kalibratie moet dagelijks plaatsvinden voor kritieke operaties, na vallen, en wanneer nauwkeurigheid in twijfel getrokken wordt. Nauwkeurige temperatuurmonitoring is essentieel voor HACCP-naleving en voedselveiligheid—zelfs 3°C fout kan voedsel in gevaarlijke temperatuurzones achterlaten tijdens koeling of bewaring."
        }
      },
      {
        question: {
          en: "What is the minimum internal cooking temperature for eggs used in Caesar salad dressing to ensure safety?",
          es: "¿Cuál es la temperatura mínima de cocción interna para huevos usados en aderezo César para ensaladas para asegurar seguridad?",
          de: "Was ist die minimale innere Gartemperatur für Eier in Caesar-Salat-Dressing zur Gewährleistung der Sicherheit?",
          nl: "Wat is de minimale interne kooktemperatuur voor eieren gebruikt in Caesar salade dressing om veiligheid te verzekeren?"
        },
        options: [
          { en: "145°F (63°C) for 15 seconds", es: "145°F (63°C) por 15 segundos", de: "63°C für 15 Sekunden", nl: "63°C gedurende 15 seconden" },
          { en: "155°F (68°C) for 15 seconds", es: "155°F (68°C) por 15 segundos", de: "68°C für 15 Sekunden", nl: "68°C gedurende 15 seconden" },
          { en: "160°F (71°C) for 15 seconds", es: "160°F (71°C) por 15 segundos", de: "71°C für 15 Sekunden", nl: "71°C gedurende 15 seconden" },
          { en: "165°F (74°C) for 15 seconds", es: "165°F (74°C) por 15 segundos", de: "74°C für 15 Sekunden", nl: "74°C gedurende 15 seconden" }
        },
        correct: 2,
        explanation: {
          en: "Shell eggs for immediate service must reach 145°F (63°C), but for recipes like Caesar dressing where eggs are held, 160°F (71°C) for 15 seconds is required to eliminate Salmonella. Alternatively, use pasteurized eggs which have been heat-treated to 140°F for 3.5 minutes. Many restaurants now use pasteurized eggs exclusively for raw/undercooked preparations to eliminate risk while maintaining traditional recipes' texture and flavor.",
          es: "Huevos en cáscara para servicio inmediato deben alcanzar 145°F (63°C), pero para recetas como aderezo César donde los huevos se mantienen, se requieren 160°F (71°C) por 15 segundos para eliminar Salmonella. Alternativamente, usar huevos pasteurizados que han sido tratados con calor a 140°F por 3.5 minutos. Muchos restaurantes ahora usan huevos pasteurizados exclusivamente para preparaciones crudas/poco cocidas para eliminar riesgo mientras mantienen textura y sabor de recetas tradicionales.",
          de: "Schaleneier für sofortigen Service müssen 63°C erreichen, aber für Rezepte wie Caesar-Dressing, wo Eier gehalten werden, sind 71°C für 15 Sekunden erforderlich, um Salmonellen zu eliminieren. Alternativ pasteurisierte Eier verwenden, die bei 60°C für 3,5 Minuten wärmebehandelt wurden. Viele Restaurants verwenden jetzt ausschließlich pasteurisierte Eier für rohe/halbgare Zubereitungen, um Risiko zu eliminieren während Textur und Geschmack traditioneller Rezepte erhalten bleiben.",
          nl: "Schaal eieren voor onmiddellijke service moeten 63°C bereiken, maar voor recepten zoals Caesar dressing waar eieren bewaard worden, is 71°C gedurende 15 seconden vereist om Salmonella te elimineren. Als alternatief, gebruik gepasteuriseerde eieren die warmte-behandeld zijn op 60°C gedurende 3,5 minuten. Veel restaurants gebruiken nu uitsluitend gepasteuriseerde eieren voor rauwe/halfgare bereidingen om risico te elimineren terwijl textuur en smaak van traditionele recepten behouden blijven."
        }
      },
      {
        question: {
          en: "What is the proper glove usage protocol when preparing multiple salad components?",
          es: "¿Cuál es el protocolo adecuado de uso de guantes al preparar múltiples componentes de ensalada?",
          de: "Was ist das richtige Handschuhverwendungsprotokoll beim Zubereiten mehrerer Salatkomponenten?",
          nl: "Wat is het juiste handschoengebruikprotocol bij het bereiden van meerdere saladecomponenten?"
        },
        options: [
          { en: "Wear same gloves all day", es: "Usar mismos guantes todo el día", de: "Gleiche Handschuhe den ganzen Tag tragen", nl: "Dezelfde handschoenen de hele dag dragen" },
          { en: "Change gloves between tasks and when contaminated", es: "Cambiar guantes entre tareas y cuando estén contaminados", de: "Handschuhe zwischen Aufgaben und bei Kontamination wechseln", nl: "Handschoenen wisselen tussen taken en wanneer besmet" },
          { en: "Wash gloved hands instead of changing", es: "Lavar manos enguantadas en lugar de cambiar", de: "Behandschuhte Hände waschen statt zu wechseln", nl: "Gehandschoende handen wassen in plaats van wisselen" },
          { en: "Gloves unnecessary with hand washing", es: "Guantes innecesarios con lavado de manos", de: "Handschuhe unnötig mit Händewaschen", nl: "Handschoenen onnodig met handen wassen" }
        },
        correct: 1,
        explanation: {
          en: "Gloves must be changed between different tasks (raw proteins to vegetables), when torn or contaminated, after touching non-food surfaces, and at least every 4 hours during continuous use. Hands must be washed before putting on new gloves. Gloves create a false sense of security—they don't prevent cross-contamination if not changed properly. They're required for ready-to-eat foods but proper hand washing and change protocols are essential.",
          es: "Los guantes deben cambiarse entre diferentes tareas (proteínas crudas a verduras), cuando estén rotos o contaminados, después de tocar superficies no alimentarias, y al menos cada 4 horas durante uso continuo. Las manos deben lavarse antes de ponerse guantes nuevos. Los guantes crean falsa sensación de seguridad—no previenen contaminación cruzada si no se cambian adecuadamente. Son requeridos para alimentos listos para comer pero protocolos adecuados de lavado de manos y cambio son esenciales.",
          de: "Handschuhe müssen zwischen verschiedenen Aufgaben (rohe Proteine zu Gemüse), wenn zerrissen oder kontaminiert, nach Berührung nicht-lebensmittelbezogener Oberflächen und mindestens alle 4 Stunden bei kontinuierlicher Verwendung gewechselt werden. Hände müssen vor dem Anziehen neuer Handschuhe gewaschen werden. Handschuhe erzeugen ein falsches Sicherheitsgefühl—sie verhindern Kreuzkontamination nicht, wenn sie nicht ordnungsgemäß gewechselt werden. Sie sind für verzehrfertige Lebensmittel erforderlich, aber ordnungsgemäße Händewasch- und Wechselprotokolle sind wesentlich.",
          nl: "Handschoenen moeten gewisseld worden tussen verschillende taken (rauwe eiwitten naar groenten), wanneer gescheurd of besmet, na het aanraken van niet-voedseloppervlakken, en ten minste elke 4 uur tijdens continu gebruik. Handen moeten gewassen worden voor het aandoen van nieuwe handschoenen. Handschoenen creëren een vals gevoel van veiligheid—ze voorkomen kruisbesmetting niet als ze niet goed gewisseld worden. Ze zijn vereist voor kant-en-klare voedingsmiddelen maar juiste handenwas- en wisselprotocollen zijn essentieel."
        }
      },
      {
        question: {
          en: "Which chemical sanitizer concentration is effective against norovirus on salad preparation surfaces?",
          es: "¿Qué concentración de desinfectante químico es efectiva contra norovirus en superficies de preparación de ensaladas?",
          de: "Welche chemische Desinfektionsmittelkonzentration ist gegen Noroviren auf Salatzubereitungsoberflächen wirksam?",
          nl: "Welke chemische desinfectiemiddel concentratie is effectief tegen norovirus op saladebereiding oppervlakken?"
        },
        options: [
          { en: "Quaternary ammonium at any concentration", es: "Amonio cuaternario a cualquier concentración", de: "Quaternäre Ammoniumverbindung in jeder Konzentration", nl: "Quaternair ammonium in elke concentratie" },
          { en: "Chlorine bleach at 1000-5000 ppm", es: "Lejía de cloro a 1000-5000 ppm", de: "Chlorbleiche bei 1000-5000 ppm", nl: "Chloorbleek bij 1000-5000 ppm" },
          { en: "Vinegar solution only", es: "Solo solución de vinagre", de: "Nur Essiglösung", nl: "Alleen azijnoplossing" },
          { en: "Hot water alone", es: "Solo agua caliente", de: "Nur heißes Wasser", nl: "Alleen heet water" }
        },
        correct: 1,
        explanation: {
          en: "Norovirus is highly resistant and requires chlorine bleach at 1000-5000 ppm (1/4 to 1/3 cup per gallon of water) for effective disinfection—much higher than the 50-100 ppm used for routine sanitizing. Standard quaternary ammonium sanitizers are ineffective against norovirus. After norovirus-related illness or high-risk situations, use this higher concentration on all food contact surfaces, allow 5-10 minute contact time, then rinse. This virus is a leading cause of foodborne illness and highly contagious.",
          es: "El norovirus es altamente resistente y requiere lejía de cloro a 1000-5000 ppm (1/4 a 1/3 taza por galón de agua) para desinfección efectiva—mucho más alto que los 50-100 ppm usados para desinfección rutinaria. Los desinfectantes estándar de amonio cuaternario son inefectivos contra norovirus. Después de enfermedad relacionada con norovirus o situaciones de alto riesgo, usar esta concentración más alta en todas las superficies de contacto con alimentos, permitir 5-10 minutos de tiempo de contacto, luego enjuagar. Este virus es una causa líder de enfermedad transmitida por alimentos y altamente contagioso.",
          de: "Norovirus ist hochresistent und erfordert Chlorbleiche bei 1000-5000 ppm (60-80 ml pro 4 Liter Wasser) für effektive Desinfektion—viel höher als die 50-100 ppm für routinemäßige Desinfektion. Standard-Quaternärammonium-Desinfektionsmittel sind gegen Noroviren unwirksam. Nach Norovirus-bedingter Krankheit oder Hochrisikosituationen diese höhere Konzentration auf allen Lebensmittelkontaktflächen verwenden, 5-10 Minuten Kontaktzeit ermöglichen, dann spülen. Dieses Virus ist eine Hauptursache für lebensmittelbedingte Krankheiten und hoch ansteckend.",
          nl: "Norovirus is zeer resistent en vereist chloorbleek bij 1000-5000 ppm (60-80 ml per 4 liter water) voor effectieve desinfectie—veel hoger dan de 50-100 ppm gebruikt voor routinematige desinfectie. Standaard quaternair ammonium desinfectiemiddelen zijn ineffectief tegen norovirus. Na norovirus-gerelateerde ziekte of hoog-risico situaties, gebruik deze hogere concentratie op alle voedselcontact oppervlakken, sta 5-10 minuten contacttijd toe, dan spoelen. Dit virus is een hoofdoorzaak van voedselgerelateerde ziekte en zeer besmettelijk."
        }
      },
      {
        question: {
          en: "What is the maximum safe time for salad ingredients in the temperature danger zone during prep?",
          es: "¿Cuál es el tiempo máximo seguro para ingredientes de ensalada en la zona de temperatura peligrosa durante preparación?",
          de: "Was ist die maximale sichere Zeit für Salatzutaten in der Temperatur-Gefahrenzone während der Zubereitung?",
          nl: "Wat is de maximale veilige tijd voor saladeïngrediënten in de temperatuur gevaarzone tijdens bereiding?"
        },
        options: [
          { en: "30 minutes cumulative", es: "30 minutos acumulativos", de: "30 Minuten kumulativ", nl: "30 minuten cumulatief" },
          { en: "2 hours cumulative", es: "2 horas acumulativas", de: "2 Stunden kumulativ", nl: "2 uur cumulatief" },
          { en: "4 hours cumulative", es: "4 horas acumulativas", de: "4 Stunden kumulativ", nl: "4 uur cumulatief" },
          { en: "No time limit", es: "Sin límite de tiempo", de: "Keine Zeitbegrenzung", nl: "Geen tijdslimiet" }
        },
        correct: 2,
        explanation: {
          en: "Food can safely remain in the danger zone (41-135°F) for a cumulative maximum of 4 hours during prep, display, and service. After 4 hours, food must be discarded. This time is cumulative—each minute out of refrigeration counts. For large salad prep operations, use 'batch cooking' where only small quantities are prepared at once, keeping the rest refrigerated. Time as a public health control (TPHC) requires documentation of when food enters and exits safe temperatures.",
          es: "Los alimentos pueden permanecer seguramente en la zona de peligro (41-135°F) por un máximo acumulativo de 4 horas durante preparación, exhibición y servicio. Después de 4 horas, los alimentos deben descartarse. Este tiempo es acumulativo—cada minuto fuera de refrigeración cuenta. Para operaciones grandes de preparación de ensaladas, usar 'cocción por lotes' donde solo se preparan pequeñas cantidades a la vez, manteniendo el resto refrigerado. El tiempo como control de salud pública (TPHC) requiere documentación de cuándo los alimentos entran y salen de temperaturas seguras.",
          de: "Lebensmittel können sicher in der Gefahrenzone (5-57°C) für maximal 4 Stunden kumulativ während Zubereitung, Ausstellung und Service bleiben. Nach 4 Stunden müssen Lebensmittel entsorgt werden. Diese Zeit ist kumulativ—jede Minute außerhalb der Kühlung zählt. Für große Salat-Zubereitungsoperationen 'Chargenkochen' verwenden, wo nur kleine Mengen gleichzeitig zubereitet werden, der Rest gekühlt bleibt. Zeit als öffentliche Gesundheitskontrolle (TPHC) erfordert Dokumentation, wann Lebensmittel sichere Temperaturen betreten und verlassen.",
          nl: "Voedsel kan veilig in de gevaarzone (5-57°C) blijven voor een cumulatief maximum van 4 uur tijdens bereiding, vertoning en service. Na 4 uur moet voedsel weggegooid worden. Deze tijd is cumulatief—elke minuut buiten koeling telt. Voor grote saladebereiding operaties, gebruik 'batch koken' waar alleen kleine hoeveelheden tegelijk bereid worden, de rest gekoeld houden. Tijd als publieke gezondheidcontrole (TPHC) vereist documentatie van wanneer voedsel veilige temperaturen betreedt en verlaat."
        }
      },
      {
        question: {
          en: "What is the proper vertical storage order for salad ingredients in a refrigerator to prevent cross-contamination?",
          es: "¿Cuál es el orden de almacenamiento vertical adecuado para ingredientes de ensalada en refrigerador para prevenir contaminación cruzada?",
          de: "Was ist die richtige vertikale Lagerreihenfolge für Salatzutaten in einem Kühlschrank zur Verhinderung von Kreuzkontamination?",
          nl: "Wat is de juiste verticale bewaarvolgorde voor saladeïngrediënten in een koelkast om kruisbesmetting te voorkomen?"
        },
        options: [
          { en: "Raw meats on top, ready-to-eat items below", es: "Carnes crudas arriba, artículos listos para comer abajo", de: "Rohes Fleisch oben, verzehrfertige Artikel unten", nl: "Rauw vlees bovenaan, kant-en-klare items onderaan" },
          { en: "Ready-to-eat items on top, raw proteins below by cooking temperature", es: "Artículos listos para comer arriba, proteínas crudas abajo por temperatura de cocción", de: "Verzehrfertige Artikel oben, rohe Proteine unten nach Gartemperatur", nl: "Kant-en-klare items bovenaan, rauwe eiwitten onderaan op kooktemperatuur" },
          { en: "No specific order needed", es: "No se necesita orden específico", de: "Keine spezifische Reihenfolge erforderlich", nl: "Geen specifieke volgorde nodig" },
          { en: "Alphabetical order only", es: "Solo orden alfabético", de: "Nur alphabetische Reihenfolge", nl: "Alleen alfabetische volgorde" }
        ],
        correct: 1,
        explanation: {
          en: "Proper vertical storage places ready-to-eat foods (salads, prepared vegetables) on top shelves, with raw proteins below in order of required cooking temperature: seafood (145°F), whole cuts of beef/pork (145°F), ground meats (155°F), and poultry (165°F) on bottom. This prevents drips from raw items contaminating ready-to-eat foods. All items should be covered and stored in leakproof containers. This arrangement is critical in preventing pathogen transfer.",
          es: "El almacenamiento vertical adecuado coloca alimentos listos para comer (ensaladas, verduras preparadas) en estantes superiores, con proteínas crudas abajo en orden de temperatura de cocción requerida: mariscos (145°F), cortes enteros de res/cerdo (145°F), carnes molidas (155°F), y aves (165°F) en el fondo. Esto previene que goteos de artículos crudos contaminen alimentos listos para comer. Todos los artículos deben estar cubiertos y almacenados en contenedores a prueba de fugas. Este arreglo es crítico para prevenir transferencia de patógenos.",
          de: "Ordnungsgemäße vertikale Lagerung platziert verzehrfertige Lebensmittel (Salate, zubereitetes Gemüse) auf obersten Regalen, mit rohen Proteinen unten in Reihenfolge der erforderlichen Gartemperatur: Meeresfrüchte (63°C), ganze Stücke Rind/Schwein (63°C), Hackfleisch (68°C) und Geflügel (74°C) ganz unten. Dies verhindert, dass Tropfen von rohen Artikeln verzehrfertige Lebensmittel kontaminieren. Alle Artikel sollten abgedeckt und in lecksicheren Behältern gelagert werden. Diese Anordnung ist kritisch zur Verhinderung von Krankheitserregerübertragung.",
          nl: "Juiste verticale bewaring plaatst kant-en-klare voedingsmiddelen (salades, bereide groenten) op bovenste planken, met rauwe eiwitten onderaan in volgorde van vereiste kooktemperatuur: zeevruchten (63°C), hele stukken rundvlees/varkensvlees (63°C), gehakt vlees (68°C), en gevogelte (74°C) onderaan. Dit voorkomt dat druppels van rauwe items kant-en-klare voedingsmiddelen besmetten. Alle items moeten bedekt zijn en opgeslagen in lekvrije containers. Deze rangschikking is kritiek in het voorkomen van pathogeen overdracht."
        }
      },
      {
        question: {
          en: "What minimum distance must be maintained between floor and food storage shelves in salad prep areas?",
          es: "¿Qué distancia mínima debe mantenerse entre el piso y estantes de almacenamiento de alimentos en áreas de preparación de ensaladas?",
          de: "Welcher Mindestabstand muss zwischen Boden und Lebensmittelregalböden in Salatzubereitungsbereichen eingehalten werden?",
          nl: "Welke minimale afstand moet worden gehandhaafd tussen vloer en voedsel bewaarplanken in saladebereidingsgebieden?"
        },
        options: [
          { en: "2 inches (5 cm)", es: "2 pulgadas (5 cm)", de: "5 cm", nl: "5 cm" },
          { en: "4 inches (10 cm)", es: "4 pulgadas (10 cm)", de: "10 cm", nl: "10 cm" },
          { en: "6 inches (15 cm)", es: "6 pulgadas (15 cm)", de: "15 cm", nl: "15 cm" },
          { en: "12 inches (30 cm)", es: "12 pulgadas (30 cm)", de: "30 cm", nl: "30 cm" }
        },
        correct: 2,
        explanation: {
          en: "Food Code requires minimum 6 inches (15 cm) between the floor and food storage surfaces. This elevation prevents floor splash, facilitates cleaning, allows air circulation, prevents pest access, and protects food from flooding. Storage areas must be cleanable, well-lit, and organized with proper labeling. This standard applies to dry storage, walk-in coolers, and preparation areas. Lower storage risks contamination from cleaning activities and pest activity.",
          es: "El Código de Alimentos requiere mínimo 6 pulgadas (15 cm) entre el piso y superficies de almacenamiento de alimentos. Esta elevación previene salpicaduras del piso, facilita limpieza, permite circulación de aire, previene acceso de plagas y protege alimentos de inundaciones. Las áreas de almacenamiento deben ser limpiables, bien iluminadas y organizadas con etiquetado adecuado. Este estándar se aplica a almacenamiento seco, cámaras frigoríficas y áreas de preparación. El almacenamiento más bajo arriesga contaminación de actividades de limpieza y actividad de plagas.",
          de: "Der Food Code erfordert mindestens 15 cm zwischen Boden und Lebensmittellagerflächen. Diese Erhöhung verhindert Bodenspritzer, erleichtert Reinigung, ermöglicht Luftzirkulation, verhindert Schädlingszugang und schützt Lebensmittel vor Überschwemmungen. Lagerbereiche müssen reinigbar, gut beleuchtet und mit ordnungsgemäßer Kennzeichnung organisiert sein. Dieser Standard gilt für Trockenlagerung, begehbare Kühlräume und Zubereitungsbereiche. Niedrigere Lagerung riskiert Kontamination durch Reinigungsaktivitäten und Schädlingsaktivität.",
          nl: "De Food Code vereist minimaal 15 cm tussen vloer en voedselopslagoppervlakken. Deze verhoging voorkomt vloerspatters, faciliteert schoonmaken, staat luchtcirculatie toe, voorkomt ongediertetoegang en beschermt voedsel tegen overstroming. Opslaggebieden moeten schoonmaakbaar, goed verlicht en georganiseerd zijn met juiste etikettering. Deze standaard geldt voor droge opslag, inloopkoelers en bereidingsgebieden. Lagere opslag riskeert besmetting van schoonmaakactiviteiten en ongedierteactiviteit."
        }
      },
      {
        question: {
          en: "Which surface material is prohibited for direct food contact in salad preparation due to toxicity risks?",
          es: "¿Qué material de superficie está prohibido para contacto directo con alimentos en preparación de ensaladas debido a riesgos de toxicidad?",
          de: "Welches Oberflächenmaterial ist für direkten Lebensmittelkontakt bei der Salatzubereitung aufgrund von Toxizitätsrisiken verboten?",
          nl: "Welk oppervlaktemateriaal is verboden voor direct voedselcontact bij saladebereiding vanwege toxiciteitsrisico's?"
        },
        options: [
          { en: "Stainless steel", es: "Acero inoxidable", de: "Edelstahl", nl: "Roestvrij staal" },
          { en: "Food-grade plastic", es: "Plástico grado alimentario", de: "Lebensmittelechter Kunststoff", nl: "Voedselgeschikt plastic" },
          { en: "Galvanized metal", es: "Metal galvanizado", de: "Verzinktes Metall", nl: "Gegalvaniseerd metaal" },
          { en: "Tempered glass", es: "Vidrio templado", de: "Gehärtetes Glas", nl: "Gehard glas" }
        },
        correct: 2,
        explanation: {
          en: "Galvanized metal (zinc-coated) is prohibited for food contact because acidic foods (like salad dressings with vinegar or citrus) can cause zinc to leach, creating toxic levels. Approved materials include stainless steel, food-grade plastics with NSF certification, tempered glass, and certain treated woods. Copper and brass are also restricted due to metal leaching with acidic foods. Equipment must be NSF International certified or equivalent for food safety compliance.",
          es: "El metal galvanizado (recubierto de zinc) está prohibido para contacto con alimentos porque alimentos ácidos (como aderezos de ensalada con vinagre o cítricos) pueden causar que el zinc se filtre, creando niveles tóxicos. Los materiales aprobados incluyen acero inoxidable, plásticos grado alimentario con certificación NSF, vidrio templado y ciertas maderas tratadas. El cobre y latón también están restringidos debido a filtración de metal con alimentos ácidos. El equipo debe estar certificado NSF International o equivalente para cumplimiento de seguridad alimentaria.",
          de: "Verzinktes Metall (zinkbeschichtet) ist für Lebensmittelkontakt verboten, weil saure Lebensmittel (wie Salatdressings mit Essig oder Zitrus) Zinkauswaschung verursachen können, was toxische Werte erzeugt. Zugelassene Materialien umfassen Edelstahl, lebensmittelechte Kunststoffe mit NSF-Zertifizierung, gehärtetes Glas und bestimmte behandelte Hölzer. Kupfer und Messing sind auch eingeschränkt aufgrund Metallauswaschung mit sauren Lebensmitteln. Ausrüstung muss NSF International-zertifiziert oder gleichwertig für Lebensmittelsicherheitskonformität sein.",
          nl: "Gegalvaniseerd metaal (zinkgecoat) is verboden voor voedselcontact omdat zure voedingsmiddelen (zoals saladedressings met azijn of citrus) kunnen veroorzaken dat zink uitspoelt, toxische niveaus creëren. Goedgekeurde materialen omvatten roestvrij staal, voedselgeschikt plastic met NSF-certificering, gehard glas en bepaalde behandelde houtsoorten. Koper en messing zijn ook beperkt vanwege metaal uitlogen met zure voedingsmiddelen. Apparatuur moet NSF International gecertificeerd of equivalent zijn voor voedselveiligheid naleving."
        }
      },
      {
        question: {
          en: "What is the required frequency for changing and sanitizing cutting boards during continuous salad prep?",
          es: "¿Cuál es la frecuencia requerida para cambiar y desinfectar tablas de cortar durante preparación continua de ensaladas?",
          de: "Was ist die erforderliche Häufigkeit zum Wechseln und Desinfizieren von Schneidebrettern während kontinuierlicher Salatzubereitung?",
          nl: "Wat is de vereiste frequentie voor het wisselen en desinfecteren van snijplanken tijdens continue saladebereiding?"
        },
        options: [
          { en: "Once per day", es: "Una vez al día", de: "Einmal pro Tag", nl: "Eenmaal per dag" },
          { en: "Every 4 hours", es: "Cada 4 horas", de: "Alle 4 Stunden", nl: "Elke 4 uur" },
          { en: "Between tasks or when visibly soiled", es: "Entre tareas o cuando estén visiblemente sucias", de: "Zwischen Aufgaben oder bei sichtbarer Verschmutzung", nl: "Tussen taken of wanneer zichtbaar vuil" },
          { en: "Once per week", es: "Una vez por semana", de: "Einmal pro Woche", nl: "Eenmaal per week" }
        ],
        correct: 2,
        explanation: {
          en: "Cutting boards must be cleaned and sanitized between different tasks (especially when switching from allergens or raw proteins to ready-to-eat items), when visibly soiled, and at minimum every 4 hours during continuous use of the same product. Color-coded boards help prevent cross-contamination: use dedicated boards for produce only. Boards with deep cuts or grooves should be replaced as they harbor bacteria in knife scars that cleaning cannot reach.",
          es: "Las tablas de cortar deben limpiarse y desinfectarse entre diferentes tareas (especialmente al cambiar de alérgenos o proteínas crudas a artículos listos para comer), cuando estén visiblemente sucias, y como mínimo cada 4 horas durante uso continuo del mismo producto. Las tablas codificadas por colores ayudan a prevenir contaminación cruzada: usar tablas dedicadas solo para productos. Las tablas con cortes o surcos profundos deben reemplazarse ya que albergan bacterias en cicatrices de cuchillo que la limpieza no puede alcanzar.",
          de: "Schneidebretter müssen zwischen verschiedenen Aufgaben gereinigt und desinfiziert werden (besonders beim Wechsel von Allergenen oder rohen Proteinen zu verzehrfertigen Artikeln), bei sichtbarer Verschmutzung und mindestens alle 4 Stunden bei kontinuierlicher Verwendung desselben Produkts. Farbkodierte Bretter helfen Kreuzkontamination zu verhindern: dedizierte Bretter nur für Produkte verwenden. Bretter mit tiefen Schnitten oder Rillen sollten ersetzt werden, da sie Bakterien in Messernarben beherbergen, die Reinigung nicht erreichen kann.",
          nl: "Snijplanken moeten gereinigd en gedesinfecteerd worden tussen verschillende taken (vooral bij wisseling van allergenen of rauwe eiwitten naar kant-en-klare items), wanneer zichtbaar vuil, en minimaal elke 4 uur tijdens continu gebruik van hetzelfde product. Kleurgecodeerde planken helpen kruisbesmetting te voorkomen: gebruik toegewijde planken alleen voor producten. Planken met diepe sneden of groeven moeten vervangen worden omdat ze bacteriën herbergen in meslittekens die schoonmaken niet kan bereiken."
        }
      },
      {
        question: {
          en: "What documentation is required for HACCP compliance in commercial salad preparation?",
          es: "¿Qué documentación se requiere para cumplimiento HACCP en preparación comercial de ensaladas?",
          de: "Welche Dokumentation ist für HACCP-Konformität in kommerzieller Salatzubereitung erforderlich?",
          nl: "Welke documentatie is vereist voor HACCP-naleving in commerciële saladebereiding?"
        },
        options: [
          { en: "No documentation needed", es: "No se necesita documentación", de: "Keine Dokumentation erforderlich", nl: "Geen documentatie nodig" },
          { en: "Temperature logs, cleaning schedules, supplier verification", es: "Registros de temperatura, horarios de limpieza, verificación de proveedores", de: "Temperaturprotokolle, Reinigungspläne, Lieferantenverifizierung", nl: "Temperatuurlogboeken, schoonmaakschema's, leveranciersverificatie" },
          { en: "Sales receipts only", es: "Solo recibos de ventas", de: "Nur Verkaufsbelege", nl: "Alleen verkoopbonnen" },
          { en: "Employee schedules only", es: "Solo horarios de empleados", de: "Nur Mitarbeiterpläne", nl: "Alleen werknemersschema's" }
        ],
        correct: 1,
        explanation: {
          en: "HACCP requires documented monitoring of critical control points including: refrigeration temperature logs (checked every 4 hours minimum), cooking/cooling records for any heated components, cleaning and sanitizing schedules with verification, supplier certifications (especially for sprouts, leafy greens), employee health policies, and corrective actions taken when standards aren't met. Records must be maintained for minimum periods (often 6 months to 2 years) and available for health inspection. This creates accountability and traces problems to their source.",
          es: "HACCP requiere monitoreo documentado de puntos de control críticos incluyendo: registros de temperatura de refrigeración (verificados cada 4 horas mínimo), registros de cocción/enfriamiento para componentes calentados, horarios de limpieza y desinfección con verificación, certificaciones de proveedores (especialmente para brotes, hojas verdes), políticas de salud de empleados, y acciones correctivas tomadas cuando no se cumplen estándares. Los registros deben mantenerse por períodos mínimos (a menudo 6 meses a 2 años) y disponibles para inspección de salud. Esto crea responsabilidad y rastrea problemas a su fuente.",
          de: "HACCP erfordert dokumentierte Überwachung kritischer Kontrollpunkte einschließlich: Kühltemperaturprotokolle (mindestens alle 4 Stunden überprüft), Koch-/Kühlaufzeichnungen für erhitzte Komponenten, Reinigungs- und Desinfektionspläne mit Verifizierung, Lieferantenzertifizierungen (besonders für Sprossen, Blattgemüse), Mitarbeitergesundheitsrichtlinien und Korrekturmaßnahmen bei Nichteinhaltung von Standards. Aufzeichnungen müssen für Mindestperioden (oft 6 Monate bis 2 Jahre) aufbewahrt und für Gesundheitsinspektion verfügbar sein. Dies schafft Rechenschaftspflicht und verfolgt Probleme zu ihrer Quelle.",
          nl: "HACCP vereist gedocumenteerde monitoring van kritieke controlepunten inclusief: koeltemperatuur logboeken (minimaal elke 4 uur gecontroleerd), kook/koel records voor verwarmde componenten, schoonmaak en desinfectie schema's met verificatie, leverancierscertificeringen (vooral voor kiemen, bladgroenten), werknemers gezondheidsbeleid, en corrigerende acties genomen wanneer standaarden niet gehaald worden. Records moeten bewaard worden voor minimale perioden (vaak 6 maanden tot 2 jaar) en beschikbaar voor gezondheidsinspectie. Dit creëert verantwoordelijkheid en traceert problemen naar hun bron."
        }
      },
      {
        question: {
          en: "What is the proper protocol for handling a cut or wound while preparing salads?",
          es: "¿Cuál es el protocolo adecuado para manejar un corte o herida mientras se preparan ensaladas?",
          de: "Was ist das richtige Protokoll für den Umgang mit einem Schnitt oder einer Wunde während der Salatzubereitung?",
          nl: "Wat is het juiste protocol voor het behandelen van een snee of wond tijdens het bereiden van salades?"
        },
        options: [
          { en: "Cover with adhesive bandage only", es: "Cubrir solo con vendaje adhesivo", de: "Nur mit Pflaster abdecken", nl: "Alleen bedekken met pleister" },
          { en: "Continue working with wound exposed", es: "Continuar trabajando con herida expuesta", de: "Mit offener Wunde weiterarbeiten", nl: "Doorgaan met werken met open wond" },
          { en: "Bandage, finger cot/glove, and wash hands before returning to work", es: "Vendar, dedal/guante, y lavar manos antes de volver al trabajo", de: "Verbinden, Fingerling/Handschuh, und Hände waschen vor Rückkehr zur Arbeit", nl: "Verbinden, vingerkot/handschoen, en handen wassen voor terug naar werk" },
          { en: "Stop working permanently", es: "Dejar de trabajar permanentemente", de: "Dauerhaft aufhören zu arbeiten", nl: "Permanent stoppen met werken" }
        ],
        correct: 2,
        explanation: {
          en: "Wounds must be covered with impermeable bandage, then covered with finger cot or single-use glove, with hands washed before returning to food prep. Open wounds contain Staphylococcus aureus which causes foodborne illness. Bandages alone can fall off into food. Brightly colored bandages (blue) help in detection if lost. Employees with infected wounds should be reassigned to non-food-contact duties. This multi-barrier approach prevents both wound contamination of food and food contamination of the wound.",
          es: "Las heridas deben cubrirse con vendaje impermeable, luego cubrir con dedal o guante de un solo uso, con manos lavadas antes de volver a preparación de alimentos. Las heridas abiertas contienen Staphylococcus aureus que causa enfermedad transmitida por alimentos. Los vendajes solos pueden caerse en alimentos. Los vendajes de colores brillantes (azul) ayudan en detección si se pierden. Los empleados con heridas infectadas deben reasignarse a deberes sin contacto con alimentos. Este enfoque multi-barrera previene tanto contaminación de herida de alimentos como contaminación de alimentos de la herida.",
          de: "Wunden müssen mit undurchlässigem Verband abgedeckt, dann mit Fingerling oder Einmalhandschuh bedeckt werden, mit Händewaschen vor Rückkehr zur Lebensmittelzubereitung. Offene Wunden enthalten Staphylococcus aureus, der lebensmittelbedingte Krankheiten verursacht. Verbände allein können in Lebensmittel fallen. Leuchtend gefärbte Verbände (blau) helfen bei Erkennung wenn verloren. Mitarbeiter mit infizierten Wunden sollten zu Aufgaben ohne Lebensmittelkontakt umverteilt werden. Dieser Multi-Barriere-Ansatz verhindert sowohl Wundkontamination von Lebensmitteln als auch Lebensmittelkontamination der Wunde.",
          nl: "Wonden moeten bedekt worden met ondoordringbaar verband, dan bedekt met vingerkot of wegwerp handschoen, met handen gewassen voor terugkeer naar voedselbereiding. Open wonden bevatten Staphylococcus aureus die voedselgerelateerde ziekte veroorzaakt. Verbanden alleen kunnen in voedsel vallen. Helder gekleurde verbanden (blauw) helpen bij detectie indien verloren. Werknemers met geïnfecteerde wonden moeten herverdeeld worden naar niet-voedselcontact taken. Deze multi-barrière benadering voorkomt zowel wondbesmetting van voedsel als voedselbesmetting van de wond."
        }
      },
      {
        question: {
          en: "What is the maximum acceptable receiving temperature for refrigerated salad greens upon delivery?",
          es: "¿Cuál es la temperatura máxima aceptable de recepción para hojas verdes refrigeradas de ensalada al momento de entrega?",
          de: "Was ist die maximal akzeptable Empfangstemperatur für gekühlte Salatgrüns bei Lieferung?",
          nl: "Wat is de maximaal acceptabele ontvangsttemperatuur voor gekoelde slagroenten bij levering?"
        },
        options: [
          { en: "50°F (10°C)", es: "50°F (10°C)", de: "10°C", nl: "10°C" },
          { en: "45°F (7°C)", es: "45°F (7°C)", de: "7°C", nl: "7°C" },
          { en: "41°F (5°C) or below", es: "41°F (5°C) o menos", de: "5°C oder darunter", nl: "5°C of lager" },
          { en: "55°F (13°C)", es: "55°F (13°C)", de: "13°C", nl: "13°C" }
        ],
        correct: 2,
        explanation: {
          en: "Refrigerated TCS (Time/Temperature Control for Safety) foods including salad greens must arrive at 41°F (5°C) or below. Check temperatures immediately upon delivery using calibrated thermometers, checking multiple packages. Reject shipments above this temperature as they've been in the danger zone and may have bacterial growth. Document all delivery temperatures and rejections. The cold chain must be maintained from farm to table—any break compromises food safety and shelf life.",
          es: "Alimentos TCS (Control de Tiempo/Temperatura para Seguridad) refrigerados incluyendo hojas verdes de ensalada deben llegar a 41°F (5°C) o menos. Verificar temperaturas inmediatamente al momento de entrega usando termómetros calibrados, verificando múltiples paquetes. Rechazar envíos por encima de esta temperatura ya que han estado en la zona de peligro y pueden tener crecimiento bacteriano. Documentar todas las temperaturas de entrega y rechazos. La cadena de frío debe mantenerse de granja a mesa—cualquier quiebre compromete seguridad alimentaria y vida útil.",
          de: "Gekühlte TCS-Lebensmittel (Zeit-/Temperaturkontrolle für Sicherheit) einschließlich Salatgrüns müssen bei 5°C oder darunter ankommen. Temperaturen sofort bei Lieferung mit kalibrierten Thermometern überprüfen, mehrere Pakete prüfen. Sendungen über dieser Temperatur ablehnen, da sie in der Gefahrenzone waren und Bakterienwachstum haben können. Alle Liefertemperaturen und Ablehnungen dokumentieren. Die Kühlkette muss vom Bauernhof bis zum Tisch aufrechterhalten werden—jeder Bruch gefährdet Lebensmittelsicherheit und Haltbarkeit.",
          nl: "Gekoelde TCS-voedingsmiddelen (Tijd/Temperatuurcontrole voor Veiligheid) inclusief slagroenten moeten aankomen op 5°C of lager. Temperaturen onmiddellijk bij levering controleren met gekalibreerde thermometers, meerdere pakketten controleren. Zendingen boven deze temperatuur afwijzen omdat ze in de gevaarzone zijn geweest en bacteriegroei kunnen hebben. Documenteer alle leveringstemperaturen en afwijzingen. De koelketen moet behouden worden van boerderij tot tafel—elke onderbreking compromitteert voedselveiligheid en houdbaarheid."
        }
      },
      {
        question: {
          en: "Which personal hygiene practice is most critical for preventing norovirus transmission in salad prep?",
          es: "¿Qué práctica de higiene personal es más crítica para prevenir transmisión de norovirus en preparación de ensaladas?",
          de: "Welche persönliche Hygienepraxis ist am kritischsten zur Verhinderung der Norovirus-Übertragung bei der Salatzubereitung?",
          nl: "Welke persoonlijke hygiënepraktijk is het meest kritiek voor het voorkomen van norovirus transmissie bij saladebereiding?"
        },
        options: [
          { en: "Wearing a hair net", es: "Usar redecilla para el cabello", de: "Haarnetz tragen", nl: "Haarhaarnet dragen" },
          { en: "Proper hand washing after restroom use", es: "Lavado adecuado de manos después de usar el baño", de: "Ordnungsgemäßes Händewaschen nach Toilettennutzung", nl: "Juist handen wassen na toiletgebruik" },
          { en: "Wearing clean uniforms", es: "Usar uniformes limpios", de: "Saubere Uniformen tragen", nl: "Schone uniformen dragen" },
          { en: "Trimming fingernails", es: "Recortar uñas", de: "Fingernägel schneiden", nl: "Vingernagels knippen" }
        ],
        correct: 1,
        explanation: {
          en: "Proper hand washing after restroom use is THE most critical practice for preventing norovirus—this virus is transmitted fecal-orally and hand washing is the primary defense. Norovirus requires only 10-100 viral particles to cause illness, survives on hands for hours, and causes 50% of all foodborne illness outbreaks. Infected food handlers must be excluded from work for 48 hours after symptoms end. This single practice prevents more foodborne illness than any other intervention in salad preparation.",
          es: "El lavado adecuado de manos después de usar el baño es LA práctica más crítica para prevenir norovirus—este virus se transmite fecal-oralmente y el lavado de manos es la defensa primaria. El norovirus requiere solo 10-100 partículas virales para causar enfermedad, sobrevive en manos por horas, y causa 50% de todos los brotes de enfermedad transmitida por alimentos. Los manipuladores de alimentos infectados deben excluirse del trabajo por 48 horas después de que terminen los síntomas. Esta única práctica previene más enfermedad transmitida por alimentos que cualquier otra intervención en preparación de ensaladas.",
          de: "Ordnungsgemäßes Händewaschen nach Toilettennutzung ist DIE kritischste Praxis zur Verhinderung von Noroviren—dieses Virus wird fäkal-oral übertragen und Händewaschen ist die primäre Verteidigung. Norovirus benötigt nur 10-100 Viruspartikel, um Krankheit zu verursachen, überlebt stundenlang auf Händen und verursacht 50% aller lebensmittelbedingten Krankheitsausbrüche. Infizierte Lebensmittelbearbeiter müssen 48 Stunden nach Symptomende von der Arbeit ausgeschlossen werden. Diese einzelne Praxis verhindert mehr lebensmittelbedingte Krankheiten als jede andere Intervention bei der Salatzubereitung.",
          nl: "Juist handen wassen na toiletgebruik is DE meest kritieke praktijk voor het voorkomen van norovirus—dit virus wordt fecaal-oraal overgedragen en handen wassen is de primaire verdediging. Norovirus vereist slechts 10-100 virale deeltjes om ziekte te veroorzaken, overleeft uren op handen, en veroorzaakt 50% van alle voedselgerelateerde ziekte-uitbraken. Geïnfecteerde voedselbehandelaars moeten uitgesloten worden van werk voor 48 uur nadat symptomen eindigen. Deze enkele praktijk voorkomt meer voedselgerelateerde ziekte dan enige andere interventie bij saladebereiding."
        }
      },
      {
        question: {
          en: "What is the recommended shelf life for washed and dried salad greens stored at proper temperature?",
          es: "¿Cuál es la vida útil recomendada para hojas verdes de ensalada lavadas y secadas almacenadas a temperatura adecuada?",
          de: "Was ist die empfohlene Haltbarkeit für gewaschene und getrocknete Salatgrüns bei ordnungsgemäßer Temperatur?",
          nl: "Wat is de aanbevolen houdbaarheid voor gewassen en gedroogde slagroenten opgeslagen op juiste temperatuur?"
        },
        options: [
          { en: "12 hours", es: "12 horas", de: "12 Stunden", nl: "12 uur" },
          { en: "24 hours", es: "24 horas", de: "24 Stunden", nl: "24 uur" },
          { en: "2-3 days", es: "2-3 días", de: "2-3 Tage", nl: "2-3 dagen" },
          { en: "1 week", es: "1 semana", de: "1 Woche", nl: "1 week" }
        },
        correct: 2,
        explanation: {
          en: "Properly washed, dried, and stored salad greens maintain optimal quality for 2-3 days when held at 32-36°F in airtight containers. Beyond this, cellular breakdown accelerates, nutrients degrade, and bacterial risk increases even with proper refrigeration. Commercial operations should use FIFO (First In, First Out) rotation and date all prepped items. Quality indicators include crispness, color, and absence of slime or off-odors—discard any greens showing deterioration regardless of age.",
          es: "Hojas verdes de ensalada adecuadamente lavadas, secadas y almacenadas mantienen calidad óptima por 2-3 días cuando se mantienen a 32-36°F en contenedores herméticos. Más allá de esto, la descomposición celular se acelera, los nutrientes se degradan, y el riesgo bacteriano aumenta incluso con refrigeración adecuada. Las operaciones comerciales deben usar rotación FIFO (Primero en Entrar, Primero en Salir) y fechar todos los artículos preparados. Los indicadores de calidad incluyen crujido, color y ausencia de limo u olores extraños—desechar cualquier hoja que muestre deterioro independientemente de la edad.",
          de: "Ordentlich gewaschene, getrocknete und gelagerte Salatgrüns behalten optimale Qualität für 2-3 Tage bei Lagerung bei 0-2°C in luftdichten Behältern. Darüber hinaus beschleunigt sich der zelluläre Abbau, Nährstoffe bauen sich ab und das bakterielle Risiko steigt selbst bei ordnungsgemäßer Kühlung. Kommerzielle Betriebe sollten FIFO-Rotation (First In, First Out) verwenden und alle vorbereiteten Artikel datieren. Qualitätsindikatoren umfassen Knackigkeit, Farbe und Abwesenheit von Schleim oder unangenehmen Gerüchen—Grünzeug mit Verschlechterung unabhängig vom Alter entsorgen.",
          nl: "Goed gewassen, gedroogde en opgeslagen slagroenten behouden optimale kwaliteit voor 2-3 dagen wanneer bewaard bij 0-2°C in luchtdichte containers. Hiervoorbij versnelt cellulaire afbraak, degraderen voedingsstoffen, en neemt bacterieel risico toe zelfs met juiste koeling. Commerciële operaties moeten FIFO (First In, First Out) rotatie gebruiken en alle bereide items dateren. Kwaliteitsindicatoren omvatten knapperigheid, kleur en afwezigheid van slijm of vieze geuren—gooi groenten weg die verslechtering tonen ongeacht leeftijd."
        }
      }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();