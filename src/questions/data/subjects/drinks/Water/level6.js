// Quiz - Level 6: Drinken - Water (Waterfiltering en zuivering)
(function() {
  const level6 = {
    name: {
      en: "Water Filtering and Purification",
      es: "Filtración y Purificación del Agua",
      de: "Wasserfiltration und -reinigung",
      nl: "Waterfiltering en Zuivering"
    },
    questions: [
      {
        question: {
          en: "What is the typical pore size of a reverse osmosis membrane?",
          es: "¿Cuál es el tamaño de poro típico de una membrana de ósmosis inversa?",
          de: "Was ist die typische Porengröße einer Umkehrosmose-Membran?",
          nl: "Wat is de typische poriegrootte van een omgekeerde osmose membraan?"
        },
        options: [
          { en: "0.1 to 1 micron", es: "0.1 a 1 micrón", de: "0,1 bis 1 Mikron", nl: "0,1 tot 1 micron" },
          { en: "0.01 to 0.1 micron", es: "0.01 a 0.1 micrón", de: "0,01 bis 0,1 Mikron", nl: "0,01 tot 0,1 micron" },
          { en: "0.001 to 0.01 micron", es: "0.001 a 0.01 micrón", de: "0,001 bis 0,01 Mikron", nl: "0,001 tot 0,01 micron" },
          { en: "0.0001 to 0.001 micron", es: "0.0001 a 0.001 micrón", de: "0,0001 bis 0,001 Mikron", nl: "0,0001 tot 0,001 micron" }
        ],
        correct: 3,
        explanation: {
          en: "Reverse osmosis membranes have extremely fine pores of 0.0001 to 0.001 micron (0.1 to 1 nanometer), allowing only water molecules to pass through while blocking dissolved salts and contaminants.",
          es: "Las membranas de ósmosis inversa tienen poros extremadamente finos de 0.0001 a 0.001 micrón (0.1 a 1 nanómetro), permitiendo que solo las moléculas de agua pasen mientras bloquean sales disueltas y contaminantes.",
          de: "Umkehrosmose-Membranen haben extrem feine Poren von 0,0001 bis 0,001 Mikron (0,1 bis 1 Nanometer), die nur Wassermoleküle durchlassen und gelöste Salze und Verunreinigungen blockieren.",
          nl: "Omgekeerde osmose membranen hebben extreem fijne poriën van 0,0001 tot 0,001 micron (0,1 tot 1 nanometer), waardoor alleen watermoleculen kunnen passeren terwijl opgeloste zouten en verontreinigingen worden tegengehouden."
        }
      },
      {
        question: {
          en: "Which filtration method is most effective at removing bacteria and viruses from water?",
          es: "¿Qué método de filtración es más efectivo para eliminar bacterias y virus del agua?",
          de: "Welche Filtrationsmethode ist am effektivsten beim Entfernen von Bakterien und Viren aus Wasser?",
          nl: "Welke filtratiemethode is het meest effectief voor het verwijderen van bacteriën en virussen uit water?"
        },
        options: [
          { en: "Activated carbon filtration", es: "Filtración de carbón activado", de: "Aktivkohle-Filtration", nl: "Actieve koolstoffiltratie" },
          { en: "Sand filtration", es: "Filtración de arena", de: "Sandfiltration", nl: "Zandfiltratie" },
          { en: "Ultrafiltration membranes", es: "Membranas de ultrafiltración", de: "Ultrafiltrationsembranen", nl: "Ultrafiltratiemembranen" },
          { en: "Ion exchange resins", es: "Resinas de intercambio iónico", de: "Ionenaustauschharze", nl: "Ionenuitwisselingsharsen" }
        ],
        correct: 2,
        explanation: {
          en: "Ultrafiltration membranes with pore sizes of 0.01-0.1 microns effectively remove bacteria (0.1-10 microns) and most viruses, providing reliable microbiological barrier.",
          es: "Las membranas de ultrafiltración con tamaños de poro de 0.01-0.1 micrones eliminan efectivamente bacterias (0.1-10 micrones) y la mayoría de virus, proporcionando una barrera microbiológica confiable.",
          de: "Ultrafiltrationsembranen mit Porengrößen von 0,01-0,1 Mikron entfernen effektiv Bakterien (0,1-10 Mikron) und die meisten Viren und bieten eine zuverlässige mikrobiologische Barriere.",
          nl: "Ultrafiltratiemembranen met poriegrootten van 0,01-0,1 micron verwijderen effectief bacteriën (0,1-10 micron) en de meeste virussen, en bieden een betrouwbare microbiologische barrière."
        }
      },
      {
        question: {
          en: "What is the primary mechanism by which activated carbon filters work?",
          es: "¿Cuál es el mecanismo principal por el cual funcionan los filtros de carbón activado?",
          de: "Was ist der Hauptmechanismus, durch den Aktivkohlefilter funktionieren?",
          nl: "Wat is het primaire mechanisme waarmee actieve koolstoffilters werken?"
        },
        options: [
          { en: "Chemical oxidation", es: "Oxidación química", de: "Chemische Oxidation", nl: "Chemische oxidatie" },
          { en: "Physical adsorption", es: "Adsorción física", de: "Physikalische Adsorption", nl: "Fysieke adsorptie" },
          { en: "Ion exchange", es: "Intercambio iónico", de: "Ionenaustausch", nl: "Ionenuitwisseling" },
          { en: "Membrane separation", es: "Separación por membrana", de: "Membrantrennung", nl: "Membraanscheiding" }
        ],
        correct: 1,
        explanation: {
          en: "Activated carbon works primarily through physical adsorption, where contaminants adhere to the carbon's massive surface area created by its porous structure.",
          es: "El carbón activado funciona principalmente a través de adsorción física, donde los contaminantes se adhieren a la enorme superficie del carbón creada por su estructura porosa.",
          de: "Aktivkohle funktioniert hauptsächlich durch physikalische Adsorption, bei der Verunreinigungen an der enormen Oberfläche der Kohle haften, die durch ihre poröse Struktur entsteht.",
          nl: "Actieve koolstof werkt hoofdzakelijk door fysieke adsorptie, waarbij verontreinigingen hechten aan het enorme oppervlak van de koolstof dat wordt gecreëerd door zijn poreuze structuur."
        }
      },
      {
        question: {
          en: "Which disinfection method produces the fewest harmful byproducts in drinking water?",
          es: "¿Qué método de desinfección produce los menos subproductos dañinos en el agua potable?",
          de: "Welche Desinfektionsmethode erzeugt die wenigsten schädlichen Nebenprodukte im Trinkwasser?",
          nl: "Welke desinfectiemethode produceert de minste schadelijke bijproducten in drinkwater?"
        },
        options: [
          { en: "Chlorine gas treatment", es: "Tratamiento con gas cloro", de: "Chlorgas-Behandlung", nl: "Chloorgasbehandeling" },
          { en: "Chloramine disinfection", es: "Desinfección con cloramina", de: "Chloramin-Desinfektion", nl: "Chloraminedesinfectie" },
          { en: "Ozone treatment", es: "Tratamiento con ozono", de: "Ozon-Behandlung", nl: "Ozonbehandeling" },
          { en: "UV irradiation", es: "Irradiación UV", de: "UV-Bestrahlung", nl: "UV-bestraling" }
        ],
        correct: 3,
        explanation: {
          en: "UV irradiation produces no chemical byproducts and disinfects by damaging DNA/RNA of microorganisms, making it the cleanest disinfection method available.",
          es: "La irradiación UV no produce subproductos químicos y desinfecta dañando el ADN/ARN de microorganismos, convirtiéndola en el método de desinfección más limpio disponible.",
          de: "UV-Bestrahlung erzeugt keine chemischen Nebenprodukte und desinfiziert durch Schädigung der DNA/RNA von Mikroorganismen, was sie zur saubersten verfügbaren Desinfektionsmethode macht.",
          nl: "UV-bestraling produceert geen chemische bijproducten en desinfecteert door DNA/RNA van micro-organismen te beschadigen, waardoor het de schoonste beschikbare desinfectiemethode is."
        }
      },
      {
        question: {
          en: "What is the main limitation of UV water treatment systems?",
          es: "¿Cuál es la principal limitación de los sistemas de tratamiento de agua UV?",
          de: "Was ist die Hauptbeschränkung von UV-Wasserbehandlungssystemen?",
          nl: "Wat is de belangrijkste beperking van UV-waterbehandelingssystemen?"
        },
        options: [
          { en: "High energy consumption", es: "Alto consumo de energía", de: "Hoher Energieverbrauch", nl: "Hoog energieverbruik" },
          { en: "No residual disinfection effect", es: "Sin efecto de desinfección residual", de: "Keine Restwirkung der Desinfektion", nl: "Geen residuele desinfectie-effect" },
          { en: "Requires frequent lamp replacement", es: "Requiere reemplazo frecuente de lámparas", de: "Erfordert häufigen Lampenwechsel", nl: "Vereist frequente lampvervanging" },
          { en: "Cannot remove dissolved chemicals", es: "No puede eliminar químicos disueltos", de: "Kann gelöste Chemikalien nicht entfernen", nl: "Kan opgeloste chemicaliën niet verwijderen" }
        ],
        correct: 1,
        explanation: {
          en: "UV treatment provides no residual disinfection effect, meaning water can become recontaminated after treatment if it encounters bacteria or viruses in distribution systems.",
          es: "El tratamiento UV no proporciona efecto de desinfección residual, significando que el agua puede recontaminarse después del tratamiento si encuentra bacterias o virus en sistemas de distribución.",
          de: "UV-Behandlung bietet keine Restwirkung der Desinfektion, was bedeutet, dass Wasser nach der Behandlung wieder kontaminiert werden kann, wenn es auf Bakterien oder Viren in Verteilungssystemen trifft.",
          nl: "UV-behandeling biedt geen residuele desinfectie-effect, wat betekent dat water na behandeling opnieuw kan worden verontreinigd als het bacteriën of virussen tegenkomt in distributiesystemen."
        }
      },
      {
        question: {
          en: "Which filtration technology is most effective at removing dissolved heavy metals from water?",
          es: "¿Qué tecnología de filtración es más efectiva para eliminar metales pesados disueltos del agua?",
          de: "Welche Filtrationstechnologie ist am effektivsten beim Entfernen gelöster Schwermetalle aus Wasser?",
          nl: "Welke filtratietechnologie is het meest effectief voor het verwijderen van opgeloste zware metalen uit water?"
        },
        options: [
          { en: "Mechanical sediment filters", es: "Filtros mecánicos de sedimentos", de: "Mechanische Sedimentfilter", nl: "Mechanische sedimentfilters" },
          { en: "Ion exchange resins", es: "Resinas de intercambio iónico", de: "Ionenaustauschharze", nl: "Ionenuitwisselingsharsen" },
          { en: "Ceramic filters", es: "Filtros cerámicos", de: "Keramikfilter", nl: "Keramische filters" },
          { en: "String wound filters", es: "Filtros de hilo enrollado", de: "Wickelfadenfilter", nl: "Draadgewonden filters" }
        ],
        correct: 1,
        explanation: {
          en: "Ion exchange resins are specifically designed to remove dissolved ionic contaminants like heavy metals by exchanging them for harmless ions like sodium or hydrogen.",
          es: "Las resinas de intercambio iónico están específicamente diseñadas para eliminar contaminantes iónicos disueltos como metales pesados intercambiándolos por iones inofensivos como sodio o hidrógeno.",
          de: "Ionenaustauschharze sind speziell dafür entwickelt, gelöste ionische Verunreinigungen wie Schwermetalle zu entfernen, indem sie sie gegen harmlose Ionen wie Natrium oder Wasserstoff austauschen.",
          nl: "Ionenuitwisselingsharsen zijn specifiek ontworpen om opgeloste ionische verontreinigingen zoals zware metalen te verwijderen door ze uit te wisselen voor onschadelijke ionen zoals natrium of waterstof."
        }
      },
      {
        question: {
          en: "What is the typical rejection rate of a properly functioning reverse osmosis system for total dissolved solids?",
          es: "¿Cuál es la tasa de rechazo típica de un sistema de ósmosis inversa que funciona correctamente para sólidos disueltos totales?",
          de: "Was ist die typische Ablehnungsrate eines ordnungsgemäß funktionierenden Umkehrosmose-Systems für gelöste Feststoffe gesamt?",
          nl: "Wat is de typische afwijzingspercentage van een goed functionerend omgekeerde osmose systeem voor totaal opgeloste stoffen?"
        },
        options: [
          { en: "70-80%", es: "70-80%", de: "70-80%", nl: "70-80%" },
          { en: "85-90%", es: "85-90%", de: "85-90%", nl: "85-90%" },
          { en: "95-99%", es: "95-99%", de: "95-99%", nl: "95-99%" },
          { en: "99.5-99.9%", es: "99.5-99.9%", de: "99,5-99,9%", nl: "99,5-99,9%" }
        ],
        correct: 2,
        explanation: {
          en: "A properly functioning reverse osmosis system typically rejects 95-99% of total dissolved solids, making it one of the most effective purification technologies available.",
          es: "Un sistema de ósmosis inversa que funciona correctamente típicamente rechaza 95-99% de sólidos disueltos totales, convirtiéndolo en una de las tecnologías de purificación más efectivas disponibles.",
          de: "Ein ordnungsgemäß funktionierendes Umkehrosmose-System lehnt typischerweise 95-99% der gelösten Feststoffe gesamt ab, was es zu einer der effektivsten verfügbaren Reinigungstechnologien macht.",
          nl: "Een goed functionerend omgekeerde osmose systeem wijst typisch 95-99% van totaal opgeloste stoffen af, waardoor het een van de meest effectieve beschikbare zuiveringstechnologieën is."
        }
      },
      {
        question: {
          en: "Which pre-treatment is most critical for extending the life of reverse osmosis membranes?",
          es: "¿Qué pretratamiento es más crítico para extender la vida de las membranas de ósmosis inversa?",
          de: "Welche Vorbehandlung ist am wichtigsten für die Verlängerung der Lebensdauer von Umkehrosmose-Membranen?",
          nl: "Welke voorbehandeling is het meest kritiek voor het verlengen van de levensduur van omgekeerde osmose membranen?"
        },
        options: [
          { en: "pH adjustment", es: "Ajuste de pH", de: "pH-Anpassung", nl: "pH-aanpassing" },
          { en: "Chlorine removal", es: "Eliminación de cloro", de: "Chlorentfernung", nl: "Chloorverwijdering" },
          { en: "Temperature control", es: "Control de temperatura", de: "Temperaturkontrolle", nl: "Temperatuurcontrole" },
          { en: "Pressure regulation", es: "Regulación de presión", de: "Druckregulierung", nl: "Drukregulatie" }
        ],
        correct: 1,
        explanation: {
          en: "Chlorine removal is critical because chlorine attacks and degrades the polymer structure of RO membranes, leading to failure. Carbon pre-filters are essential for chlorine removal.",
          es: "La eliminación de cloro es crítica porque el cloro ataca y degrada la estructura polimérica de las membranas RO, llevando a fallas. Los prefiltros de carbón son esenciales para la eliminación de cloro.",
          de: "Chlorentfernung ist entscheidend, weil Chlor die Polymerstruktur von RO-Membranen angreift und abbaut, was zu Ausfällen führt. Kohle-Vorfilter sind für die Chlorentfernung unerlässlich.",
          nl: "Chloorverwijdering is kritiek omdat chloor de polymeerstructuur van RO-membranen aanvalt en afbreekt, wat tot falen leidt. Koolstof voorfilters zijn essentieel voor chloorverwijdering."
        }
      },
      {
        question: {
          en: "What is the difference between microfiltration and ultrafiltration?",
          es: "¿Cuál es la diferencia entre microfiltración y ultrafiltración?",
          de: "Was ist der Unterschied zwischen Mikrofiltration und Ultrafiltration?",
          nl: "Wat is het verschil tussen microfiltratie en ultrafiltratie?"
        },
        options: [
          { en: "Microfiltration uses smaller pores than ultrafiltration", es: "La microfiltración usa poros más pequeños que la ultrafiltración", de: "Mikrofiltration verwendet kleinere Poren als Ultrafiltration", nl: "Microfiltratie gebruikt kleinere poriën dan ultrafiltratie" },
          { en: "Ultrafiltration uses smaller pores than microfiltration", es: "La ultrafiltración usa poros más pequeños que la microfiltración", de: "Ultrafiltration verwendet kleinere Poren als Mikrofiltration", nl: "Ultrafiltratie gebruikt kleinere poriën dan microfiltratie" },
          { en: "They use the same pore size but different pressures", es: "Usan el mismo tamaño de poro pero diferentes presiones", de: "Sie verwenden die gleiche Porengröße, aber unterschiedliche Drücke", nl: "Ze gebruiken dezelfde poriegrootte maar verschillende drukken" },
          { en: "The difference is only in the membrane material", es: "La diferencia está solo en el material de la membrana", de: "Der Unterschied liegt nur im Membranmaterial", nl: "Het verschil zit alleen in het membraanmateriaal" }
        ],
        correct: 1,
        explanation: {
          en: "Ultrafiltration uses smaller pores (0.01-0.1 microns) than microfiltration (0.1-1 microns), allowing UF to remove smaller particles including bacteria and some viruses.",
          es: "La ultrafiltración usa poros más pequeños (0.01-0.1 micrones) que la microfiltración (0.1-1 micrones), permitiendo que UF elimine partículas más pequeñas incluyendo bacterias y algunos virus.",
          de: "Ultrafiltration verwendet kleinere Poren (0,01-0,1 Mikron) als Mikrofiltration (0,1-1 Mikron), wodurch UF kleinere Partikel einschließlich Bakterien und einige Viren entfernen kann.",
          nl: "Ultrafiltratie gebruikt kleinere poriën (0,01-0,1 micron) dan microfiltratie (0,1-1 micron), waardoor UF kleinere deeltjes kan verwijderen inclusief bacteriën en sommige virussen."
        }
      },
      {
        question: {
          en: "Which factor most affects the efficiency of ozone disinfection in water treatment?",
          es: "¿Qué factor afecta más la eficiencia de la desinfección con ozono en el tratamiento del agua?",
          de: "Welcher Faktor beeinflusst die Effizienz der Ozondesinfektion in der Wasserbehandlung am meisten?",
          nl: "Welke factor beïnvloedt de efficiëntie van ozondesinfectie in waterbehandeling het meest?"
        },
        options: [
          { en: "Water temperature", es: "Temperatura del agua", de: "Wassertemperatur", nl: "Watertemperatuur" },
          { en: "Water pH level", es: "Nivel de pH del agua", de: "pH-Wert des Wassers", nl: "Water pH-niveau" },
          { en: "Turbidity and organic matter content", es: "Turbidez y contenido de materia orgánica", de: "Trübung und organischer Stoffgehalt", nl: "Turbiditeit en organische stofgehalte" },
          { en: "Dissolved oxygen levels", es: "Niveles de oxígeno disuelto", de: "Gelöste Sauerstoffwerte", nl: "Opgeloste zuurstofniveaus" }
        ],
        correct: 2,
        explanation: {
          en: "Turbidity and organic matter compete with pathogens for ozone, reducing disinfection efficiency. Clear water with low organic content allows ozone to work most effectively.",
          es: "La turbidez y materia orgánica compiten con patógenos por el ozono, reduciendo la eficiencia de desinfección. El agua clara con bajo contenido orgánico permite que el ozono funcione más efectivamente.",
          de: "Trübung und organische Stoffe konkurrieren mit Krankheitserregern um Ozon, was die Desinfektionseffizienz reduziert. Klares Wasser mit niedrigem organischen Gehalt ermöglicht es Ozon, am effektivsten zu arbeiten.",
          nl: "Turbiditeit en organische stoffen concurreren met pathogenen om ozon, waardoor de desinfectie-efficiëntie afneemt. Helder water met laag organisch gehalte stelt ozon in staat om het meest effectief te werken."
        }
      },
      {
        question: {
          en: "What is activated carbon filtration used for in water treatment?",
          es: "¿Para qué se utiliza la filtración de carbón activado en el tratamiento de agua?",
          de: "Wofür wird die Aktivkohle-Filtration bei der Wasseraufbereitung verwendet?",
          nl: "Waarvoor wordt actieve koolfiltratie gebruikt bij waterbehandeling?"
        },
        options: [
          { en: "Removing dissolved organic compounds, chlorine, and taste/odor", es: "Eliminar compuestos orgánicos disueltos, cloro y sabor/olor", de: "Entfernen gelöster organischer Verbindungen, Chlor und Geschmack/Geruch", nl: "Verwijderen van opgeloste organische verbindingen, chloor en smaak/geur" },
          { en: "Adding minerals to water", es: "Añadir minerales al agua", de: "Mineralien zu Wasser hinzufügen", nl: "Mineralen toevoegen aan water" },
          { en: "Heating water", es: "Calentar agua", de: "Wasser erhitzen", nl: "Water verwarmen" },
          { en: "Increasing water pressure", es: "Aumentar presión del agua", de: "Wasserdruck erhöhen", nl: "Waterdruk verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Activated carbon has a highly porous structure that adsorbs organic compounds, chlorine, pesticides, and substances causing bad taste/odor. It's one of the most effective methods for improving water taste and removing chemical contaminants.",
          es: "El carbón activado tiene una estructura altamente porosa que adsorbe compuestos orgánicos, cloro, pesticidas y sustancias que causan mal sabor/olor. Es uno de los métodos más efectivos para mejorar el sabor del agua y eliminar contaminantes químicos.",
          de: "Aktivkohle hat eine hochporöse Struktur, die organische Verbindungen, Chlor, Pestizide und Substanzen adsorbiert, die schlechten Geschmack/Geruch verursachen. Es ist eine der effektivsten Methoden zur Verbesserung des Wassergeschmacks und Entfernung chemischer Verunreinigungen.",
          nl: "Actieve kool heeft een zeer poreuze structuur die organische verbindingen, chloor, pesticiden en stoffen die slechte smaak/geur veroorzaken adsorbeert. Het is een van de meest effectieve methoden voor het verbeteren van watersmaak en het verwijderen van chemische verontreinigingen."
        }
      },
      {
        question: {
          en: "What is the difference between filtration and purification?",
          es: "¿Cuál es la diferencia entre filtración y purificación?",
          de: "Was ist der Unterschied zwischen Filtration und Reinigung?",
          nl: "Wat is het verschil tussen filtratie en zuivering?"
        },
        options: [
          { en: "No difference, they are the same", es: "Sin diferencia, son lo mismo", de: "Kein Unterschied, sie sind dasselbe", nl: "Geen verschil, ze zijn hetzelfde" },
          { en: "Filtration removes particles, purification kills/removes microorganisms", es: "Filtración elimina partículas, purificación mata/elimina microorganismos", de: "Filtration entfernt Partikel, Reinigung tötet/entfernt Mikroorganismen", nl: "Filtratie verwijdert deeltjes, zuivering doodt/verwijdert micro-organismen" },
          { en: "Filtration is only for drinking water", es: "Filtración es solo para agua potable", de: "Filtration ist nur für Trinkwasser", nl: "Filtratie is alleen voor drinkwater" },
          { en: "Purification only removes minerals", es: "Purificación solo elimina minerales", de: "Reinigung entfernt nur Mineralien", nl: "Zuivering verwijdert alleen mineralen" }
        ],
        correct: 1,
        explanation: {
          en: "Filtration physically removes suspended particles, sediment, and some chemicals. Purification goes further by killing or removing microorganisms (bacteria, viruses, parasites) through methods like UV, ozone, or chemical disinfection.",
          es: "La filtración elimina físicamente partículas suspendidas, sedimento y algunos químicos. La purificación va más allá matando o eliminando microorganismos (bacterias, virus, parásitos) mediante métodos como UV, ozono o desinfección química.",
          de: "Filtration entfernt physisch suspendierte Partikel, Sediment und einige Chemikalien. Reinigung geht weiter, indem sie Mikroorganismen (Bakterien, Viren, Parasiten) durch Methoden wie UV, Ozon oder chemische Desinfektion tötet oder entfernt.",
          nl: "Filtratie verwijdert fysiek zwevende deeltjes, sediment en sommige chemicaliën. Zuivering gaat verder door micro-organismen (bacteriën, virussen, parasieten) te doden of verwijderen via methoden zoals UV, ozon of chemische desinfectie."
        }
      },
      {
        question: {
          en: "What is a micron in water filtration?",
          es: "¿Qué es un micrón en la filtración de agua?",
          de: "Was ist ein Mikron bei der Wasserfiltration?",
          nl: "Wat is een micron bij waterfiltratie?"
        },
        options: [
          { en: "A unit of measurement equal to one millionth of a meter", es: "Una unidad de medida igual a una millonésima de metro", de: "Eine Maßeinheit gleich einem Millionstel Meter", nl: "Een meeteenheid gelijk aan een miljoenste van een meter" },
          { en: "A type of filter material", es: "Un tipo de material de filtro", de: "Eine Art Filtermaterial", nl: "Een soort filtermateriaal" },
          { en: "A brand of water filter", es: "Una marca de filtro de agua", de: "Eine Wasserfiltermarke", nl: "Een waterfiltermerk" },
          { en: "A chemical used in purification", es: "Un químico usado en purificación", de: "Eine Chemikalie zur Reinigung", nl: "Een chemicalie gebruikt bij zuivering" }
        ],
        correct: 0,
        explanation: {
          en: "A micron (μm) is one millionth of a meter. Filters are rated by the size of particles they can remove: 5 microns (coarse), 1 micron (fine), 0.2 microns (bacteria removal), 0.01 microns (virus removal).",
          es: "Un micrón (μm) es una millonésima de metro. Los filtros se clasifican por el tamaño de partículas que pueden eliminar: 5 micrones (grueso), 1 micrón (fino), 0.2 micrones (eliminación de bacterias), 0.01 micrones (eliminación de virus).",
          de: "Ein Mikron (μm) ist ein Millionstel Meter. Filter werden nach der Größe der Partikel bewertet, die sie entfernen können: 5 Mikron (grob), 1 Mikron (fein), 0,2 Mikron (Bakterienentfernung), 0,01 Mikron (Virenentfernung).",
          nl: "Een micron (μm) is een miljoenste van een meter. Filters worden beoordeeld op basis van de grootte van deeltjes die ze kunnen verwijderen: 5 micron (grof), 1 micron (fijn), 0,2 micron (bacterieverwijdering), 0,01 micron (virusverwijdering)."
        }
      },
      {
        question: {
          en: "What is ceramic filtration?",
          es: "¿Qué es la filtración cerámica?",
          de: "Was ist keramische Filtration?",
          nl: "Wat is keramische filtratie?"
        },
        options: [
          { en: "Filtering water through porous ceramic material with tiny pores", es: "Filtrar agua a través de material cerámico poroso con poros diminutos", de: "Filtern von Wasser durch poröses Keramikmaterial mit winzigen Poren", nl: "Water filteren door poreus keramisch materiaal met kleine poriën" },
          { en: "Adding ceramic minerals to water", es: "Añadir minerales cerámicos al agua", de: "Keramische Mineralien zu Wasser hinzufügen", nl: "Keramische mineralen toevoegen aan water" },
          { en: "Storing water in ceramic containers", es: "Almacenar agua en contenedores cerámicos", de: "Wasser in Keramikbehältern lagern", nl: "Water opslaan in keramische containers" },
          { en: "Heating water with ceramic heaters", es: "Calentar agua con calentadores cerámicos", de: "Wasser mit Keramikheizern erhitzen", nl: "Water verwarmen met keramische verwarmers" }
        ],
        correct: 0,
        explanation: {
          en: "Ceramic filters use porous ceramic material (usually clay with added materials like sawdust) with pore sizes of 0.2-0.5 microns. They effectively remove bacteria, protozoa, and sediment. Some are impregnated with silver for antibacterial properties.",
          es: "Los filtros cerámicos usan material cerámico poroso (usualmente arcilla con materiales añadidos como aserrín) con poros de 0.2-0.5 micrones. Eliminan efectivamente bacterias, protozoos y sedimento. Algunos están impregnados con plata por propiedades antibacterianas.",
          de: "Keramikfilter verwenden poröses Keramikmaterial (üblicherweise Ton mit zugesetzten Materialien wie Sägemehl) mit Porengrößen von 0,2-0,5 Mikron. Sie entfernen effektiv Bakterien, Protozoen und Sediment. Einige sind mit Silber für antibakterielle Eigenschaften imprägniert.",
          nl: "Keramische filters gebruiken poreus keramisch materiaal (meestal klei met toegevoegde materialen zoals zaagsel) met poriegrootten van 0,2-0,5 micron. Ze verwijderen effectief bacteriën, protozoën en sediment. Sommige zijn geïmpregneerd met zilver voor antibacteriële eigenschappen."
        }
      },
      {
        question: {
          en: "What is ion exchange in water treatment?",
          es: "¿Qué es el intercambio iónico en el tratamiento de agua?",
          de: "Was ist Ionenaustausch bei der Wasseraufbereitung?",
          nl: "Wat is ionenwisseling bij waterbehandeling?"
        },
        options: [
          { en: "Swapping harmful ions for harmless ones using resin beads", es: "Intercambiar iones dañinos por inofensivos usando perlas de resina", de: "Austausch schädlicher Ionen gegen harmlose mittels Harzperlen", nl: "Schadelijke ionen ruilen voor onschadelijke met behulp van harskorrels" },
          { en: "Adding electricity to water", es: "Añadir electricidad al agua", de: "Strom zu Wasser hinzufügen", nl: "Elektriciteit toevoegen aan water" },
          { en: "Mixing different types of water", es: "Mezclar diferentes tipos de agua", de: "Mischen verschiedener Wassertypen", nl: "Verschillende watertypes mengen" },
          { en: "Changing water temperature", es: "Cambiar temperatura del agua", de: "Wassertemperatur ändern", nl: "Watertemperatuur veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Ion exchange uses special resin beads to swap undesirable ions (like calcium, magnesium causing hardness, or heavy metals) for harmless ions (like sodium or hydrogen). This is the primary method for water softening and deionization.",
          es: "El intercambio iónico usa perlas de resina especiales para intercambiar iones indeseables (como calcio, magnesio que causan dureza, o metales pesados) por iones inofensivos (como sodio o hidrógeno). Este es el método principal para ablandamiento y desionización de agua.",
          de: "Ionenaustausch verwendet spezielle Harzperlen, um unerwünschte Ionen (wie Kalzium, Magnesium, die Härte verursachen, oder Schwermetalle) gegen harmlose Ionen (wie Natrium oder Wasserstoff) auszutauschen. Dies ist die Hauptmethode für Wasserenthärtung und Entionisierung.",
          nl: "Ionenwisseling gebruikt speciale harskorrels om ongewenste ionen (zoals calcium, magnesium die hardheid veroorzaken, of zware metalen) te ruilen voor onschadelijke ionen (zoals natrium of waterstof). Dit is de primaire methode voor waterontharding en deïonisatie."
        }
      },
      {
        question: {
          en: "What is flocculation in water treatment?",
          es: "¿Qué es la floculación en el tratamiento de agua?",
          de: "Was ist Flockung bei der Wasseraufbereitung?",
          nl: "Wat is flocculatie bij waterbehandeling?"
        },
        options: [
          { en: "Adding chemicals that cause particles to clump together for easier removal", es: "Añadir químicos que hacen que partículas se agrupen para fácil eliminación", de: "Hinzufügen von Chemikalien, die Partikel zusammenballen lassen für einfachere Entfernung", nl: "Chemicaliën toevoegen die deeltjes laten samenklitten voor gemakkelijkere verwijdering" },
          { en: "Boiling water to kill bacteria", es: "Hervir agua para matar bacterias", de: "Wasser kochen um Bakterien zu töten", nl: "Water koken om bacteriën te doden" },
          { en: "Freezing water to remove impurities", es: "Congelar agua para eliminar impurezas", de: "Wasser einfrieren um Verunreinigungen zu entfernen", nl: "Water bevriezen om onzuiverheden te verwijderen" },
          { en: "Adding fluoride to water", es: "Añadir fluoruro al agua", de: "Fluorid zu Wasser hinzufügen", nl: "Fluoride toevoegen aan water" }
        ],
        correct: 0,
        explanation: {
          en: "Flocculation adds chemicals (flocculants like aluminum sulfate or ferric chloride) that cause tiny suspended particles to aggregate into larger clumps called 'flocs'. These settle out or can be filtered more easily, removing turbidity and contaminants.",
          es: "La floculación añade químicos (floculantes como sulfato de aluminio o cloruro férrico) que hacen que partículas suspendidas diminutas se agreguen en grupos más grandes llamados 'flóculos'. Estos se asientan o pueden filtrarse más fácilmente, eliminando turbidez y contaminantes.",
          de: "Flockung fügt Chemikalien (Flockungsmittel wie Aluminiumsulfat oder Eisenchlorid) hinzu, die winzige suspendierte Partikel zu größeren Klumpen namens 'Flocken' aggregieren lassen. Diese setzen sich ab oder können leichter gefiltert werden, wodurch Trübung und Verunreinigungen entfernt werden.",
          nl: "Flocculatie voegt chemicaliën (flocculanten zoals aluminiumsulfaat of ijzerchloride) toe die minuscule zwevende deeltjes doen aggregeren tot grotere klonters genaamd 'vlokken'. Deze zinken of kunnen gemakkelijker worden gefilterd, waardoor troebelheid en verontreinigingen worden verwijderd."
        }
      },
      {
        question: {
          en: "What is nanofiltration?",
          es: "¿Qué es la nanofiltración?",
          de: "Was ist Nanofiltration?",
          nl: "Wat is nanofiltratie?"
        },
        options: [
          { en: "Filtering water through microscopic filters to a very small scale", es: "Filtrar agua mediante filtros microscópicos a escala muy pequeña", de: "Filtern von Wasser durch mikroskopische Filter auf sehr kleiner Skala", nl: "Water filteren door microscopische filters op zeer kleine schaal" },
          { en: "Adding nanoparticles to water", es: "Añadir nanopartículas al agua", de: "Nanopartikel zu Wasser hinzufügen", nl: "Nanodeeltjes toevoegen aan water" },
          { en: "Using nano-technology to heat water", es: "Usar nanotecnología para calentar agua", de: "Nanotechnologie verwenden um Wasser zu erhitzen", nl: "Nanotechnologie gebruiken om water te verwarmen" },
          { en: "Storing water in nano-containers", es: "Almacenar agua en nano-contenedores", de: "Wasser in Nano-Behältern lagern", nl: "Water opslaan in nanocontainers" }
        ],
        correct: 0,
        explanation: {
          en: "Nanofiltration uses membranes with pore sizes of 1-10 nanometers (0.001-0.01 microns), between ultrafiltration and reverse osmosis. It removes multivalent ions, organic molecules, and some dissolved salts while allowing monovalent ions to pass through.",
          es: "La nanofiltración usa membranas con poros de 1-10 nanómetros (0.001-0.01 micrones), entre ultrafiltración y ósmosis inversa. Elimina iones multivalentes, moléculas orgánicas y algunas sales disueltas permitiendo que iones monovalentes pasen.",
          de: "Nanofiltration verwendet Membranen mit Porengrößen von 1-10 Nanometern (0,001-0,01 Mikron), zwischen Ultrafiltration und Umkehrosmose. Sie entfernt mehrwertige Ionen, organische Moleküle und einige gelöste Salze, während einwertige Ionen durchgelassen werden.",
          nl: "Nanofiltratie gebruikt membranen met poriegrootten van 1-10 nanometer (0,001-0,01 micron), tussen ultrafiltratie en omgekeerde osmose. Het verwijdert meerwaardige ionen, organische moleculen en sommige opgeloste zouten terwijl eenwaardige ionen worden doorgelaten."
        }
      },
      {
        question: {
          en: "What is sedimentation in water treatment?",
          es: "¿Qué es la sedimentación en el tratamiento de agua?",
          de: "Was ist Sedimentation bei der Wasseraufbereitung?",
          nl: "Wat is sedimentatie bij waterbehandeling?"
        },
        options: [
          { en: "Allowing particles to settle to the bottom by gravity", es: "Permitir que partículas se asienten en el fondo por gravedad", de: "Zulassen dass Partikel durch Schwerkraft zu Boden sinken", nl: "Deeltjes laten bezinken naar de bodem door zwaartekracht" },
          { en: "Adding sediment to water", es: "Añadir sedimento al agua", de: "Sediment zu Wasser hinzufügen", nl: "Sediment toevoegen aan water" },
          { en: "Heating water to remove particles", es: "Calentar agua para eliminar partículas", de: "Wasser erhitzen um Partikel zu entfernen", nl: "Water verwarmen om deeltjes te verwijderen" },
          { en: "Filtering water through sand", es: "Filtrar agua a través de arena", de: "Wasser durch Sand filtern", nl: "Water filteren door zand" }
        ],
        correct: 0,
        explanation: {
          en: "Sedimentation allows suspended particles to settle to the bottom of a tank by gravity over time (typically 2-4 hours). It's usually done after flocculation and before filtration, removing 60-90% of suspended solids.",
          es: "La sedimentación permite que partículas suspendidas se asienten en el fondo de un tanque por gravedad con el tiempo (típicamente 2-4 horas). Se hace usualmente después de floculación y antes de filtración, eliminando 60-90% de sólidos suspendidos.",
          de: "Sedimentation ermöglicht es suspendierten Partikeln, durch Schwerkraft über Zeit (typischerweise 2-4 Stunden) zu Boden eines Tanks zu sinken. Es wird üblicherweise nach Flockung und vor Filtration durchgeführt und entfernt 60-90% der suspendierten Feststoffe.",
          nl: "Sedimentatie laat zwevende deeltjes door zwaartekracht in de loop van tijd (typisch 2-4 uur) naar de bodem van een tank zinken. Het wordt meestal gedaan na flocculatie en vóór filtratie, waarbij 60-90% van zwevende deeltjes wordt verwijderd."
        }
      },
      {
        question: {
          en: "What is membrane bioreactor (MBR) technology?",
          es: "¿Qué es la tecnología de biorreactor de membrana (MBR)?",
          de: "Was ist Membran-Bioreaktor (MBR) Technologie?",
          nl: "Wat is membraan bioreactor (MBR) technologie?"
        },
        options: [
          { en: "Combining biological treatment with membrane filtration", es: "Combinar tratamiento biológico con filtración de membrana", de: "Kombination biologischer Behandlung mit Membranfiltration", nl: "Biologische behandeling combineren met membraanfiltratie" },
          { en: "Using membranes to add nutrients", es: "Usar membranas para añadir nutrientes", de: "Membranen verwenden um Nährstoffe hinzuzufügen", nl: "Membranen gebruiken om voedingsstoffen toe te voegen" },
          { en: "Storing water in biological containers", es: "Almacenar agua en contenedores biológicos", de: "Wasser in biologischen Behältern lagern", nl: "Water opslaan in biologische containers" },
          { en: "Only for agricultural water", es: "Solo para agua agrícola", de: "Nur für landwirtschaftliches Wasser", nl: "Alleen voor landbouwwater" }
        ],
        correct: 0,
        explanation: {
          en: "MBR combines activated sludge biological treatment with membrane filtration (micro/ultrafiltration). Microorganisms break down organic matter, then membranes separate clean water from biomass, producing high-quality effluent in a compact system.",
          es: "MBR combina tratamiento biológico de lodo activado con filtración de membrana (micro/ultrafiltración). Los microorganismos descomponen materia orgánica, luego las membranas separan agua limpia de biomasa, produciendo efluente de alta calidad en sistema compacto.",
          de: "MBR kombiniert biologische Belebtschlammbehandlung mit Membranfiltration (Mikro/Ultrafiltration). Mikroorganismen bauen organische Stoffe ab, dann trennen Membranen sauberes Wasser von Biomasse und produzieren hochwertiges Abwasser in kompaktem System.",
          nl: "MBR combineert biologische actiefslib-behandeling met membraanfiltratie (micro/ultrafiltratie). Micro-organismen breken organisch materiaal af, dan scheiden membranen schoon water van biomassa, wat hoogwaardige effluent produceert in een compact systeem."
        }
      },
      {
        question: {
          en: "What is the purpose of aeration in water treatment?",
          es: "¿Cuál es el propósito de la aireación en el tratamiento de agua?",
          de: "Was ist der Zweck der Belüftung bei der Wasseraufbereitung?",
          nl: "Wat is het doel van beluchting bij waterbehandeling?"
        },
        options: [
          { en: "Adding oxygen to remove dissolved gases and oxidize metals", es: "Añadir oxígeno para eliminar gases disueltos y oxidar metales", de: "Sauerstoff hinzufügen um gelöste Gase zu entfernen und Metalle zu oxidieren", nl: "Zuurstof toevoegen om opgeloste gassen te verwijderen en metalen te oxideren" },
          { en: "Cooling water down", es: "Enfriar agua", de: "Wasser abkühlen", nl: "Water afkoelen" },
          { en: "Adding minerals to water", es: "Añadir minerales al agua", de: "Mineralien zu Wasser hinzufügen", nl: "Mineralen toevoegen aan water" },
          { en: "Filtering water through air", es: "Filtrar agua a través de aire", de: "Wasser durch Luft filtern", nl: "Water door lucht filteren" }
        ],
        correct: 0,
        explanation: {
          en: "Aeration exposes water to air, adding oxygen to remove volatile compounds (CO₂, H₂S, methane), oxidize dissolved iron and manganese for easier removal, improve taste/odor, and enhance biological treatment processes.",
          es: "La aireación expone agua al aire, añadiendo oxígeno para eliminar compuestos volátiles (CO₂, H₂S, metano), oxidar hierro y manganeso disueltos para fácil eliminación, mejorar sabor/olor y potenciar procesos de tratamiento biológico.",
          de: "Belüftung setzt Wasser Luft aus, fügt Sauerstoff hinzu um flüchtige Verbindungen (CO₂, H₂S, Methan) zu entfernen, gelöstes Eisen und Mangan zu oxidieren für einfachere Entfernung, Geschmack/Geruch zu verbessern und biologische Behandlungsprozesse zu verbessern.",
          nl: "Beluchting stelt water bloot aan lucht, voegt zuurstof toe om vluchtige verbindingen (CO₂, H₂S, methaan) te verwijderen, opgelost ijzer en mangaan te oxideren voor gemakkelijkere verwijdering, smaak/geur te verbeteren en biologische behandelingsprocessen te verbeteren."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
