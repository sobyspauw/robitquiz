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
      {
        question: {
          en: "What are trihalomethanes (THMs) in drinking water?",
          es: "¿Qué son los trihalometanos (THM) en agua potable?",
          de: "Was sind Trihalogenmethane (THM) in Trinkwasser?",
          nl: "Wat zijn trihalomethanen (THM's) in drinkwater?"
        },
        options: [
          { en: "Beneficial minerals added during treatment", es: "Minerales beneficiosos añadidos durante tratamiento", de: "Vorteilhafte Mineralien, die während der Behandlung hinzugefügt werden", nl: "Gunstige mineralen toegevoegd tijdens behandeling" },
          { en: "Disinfection byproducts formed when chlorine reacts with organic matter", es: "Subproductos de desinfección formados cuando cloro reacciona con materia orgánica", de: "Desinfektionsnebenprodukte, die entstehen, wenn Chlor mit organischen Stoffen reagiert", nl: "Desinfectiebijproducten gevormd wanneer chloor reageert met organisch materiaal" },
          { en: "Fluoride compounds for dental health", es: "Compuestos de fluoruro para salud dental", de: "Fluoridverbindungen für Zahngesundheit", nl: "Fluorideverbindingen voor tandgezondheid" },
          { en: "Natural spring water minerals", es: "Minerales naturales de agua de manantial", de: "Natürliche Quellwassermineralien", nl: "Natuurlijke bronwatermineralen" }
        ],
        correct: 1,
        explanation: {
          en: "THMs are disinfection byproducts that form when chlorine used for disinfection reacts with natural organic matter in water. The four main THMs (chloroform, bromodichloromethane, dibromochloromethane, bromoform) are regulated due to potential health concerns.",
          es: "Los THM son subproductos de desinfección que se forman cuando el cloro usado para desinfección reacciona con materia orgánica natural en agua. Los cuatro principales THM (cloroformo, bromodiclorometano, dibromoclorometano, bromoformo) están regulados debido a preocupaciones de salud potenciales.",
          de: "THM sind Desinfektionsnebenprodukte, die entstehen, wenn Chlor zur Desinfektion mit natürlichen organischen Stoffen im Wasser reagiert. Die vier Haupt-THM (Chloroform, Bromdichlormethan, Dibromchlormethan, Bromoform) sind aufgrund potenzieller Gesundheitsbedenken reguliert.",
          nl: "THM's zijn desinfectiebijproducten die ontstaan wanneer chloor gebruikt voor desinfectie reageert met natuurlijk organisch materiaal in water. De vier belangrijkste THM's (chloroform, broomdichloormethaan, dibroomchloormethaan, broomvorm) zijn gereguleerd vanwege potentiële gezondheidsrisico's."
        }
      },
      {
        question: {
          en: "What is the function of a sediment pre-filter in a multi-stage filtration system?",
          es: "¿Cuál es la función de un prefiltro de sedimento en un sistema de filtración multietapa?",
          de: "Was ist die Funktion eines Sediment-Vorfilters in einem mehrstufigen Filtrationssystem?",
          nl: "Wat is de functie van een sediment voorfilter in een meertraps filtratiesysteem?"
        },
        options: [
          { en: "Removes chlorine and chemicals", es: "Elimina cloro y químicos", de: "Entfernt Chlor und Chemikalien", nl: "Verwijdert chloor en chemicaliën" },
          { en: "Removes large particles like sand, rust, and sediment to protect finer filters", es: "Elimina partículas grandes como arena, óxido y sedimento para proteger filtros más finos", de: "Entfernt große Partikel wie Sand, Rost und Sediment zum Schutz feinerer Filter", nl: "Verwijdert grote deeltjes zoals zand, roest en sediment om fijnere filters te beschermen" },
          { en: "Kills bacteria and viruses", es: "Mata bacterias y virus", de: "Tötet Bakterien und Viren", nl: "Doodt bacteriën en virussen" },
          { en: "Adds minerals to water", es: "Añade minerales al agua", de: "Fügt Wasser Mineralien hinzu", nl: "Voegt mineralen toe aan water" }
        },
        correct: 1,
        explanation: {
          en: "Sediment pre-filters (typically 5-20 microns) remove large particles like sand, silt, rust, and debris. This protects downstream filters (carbon, membrane) from clogging and extends their lifespan, making the entire system more efficient.",
          es: "Los prefiltros de sedimento (típicamente 5-20 micrones) eliminan partículas grandes como arena, limo, óxido y escombros. Esto protege filtros posteriores (carbón, membrana) de obstrucciones y extiende su vida útil, haciendo el sistema completo más eficiente.",
          de: "Sediment-Vorfilter (typischerweise 5-20 Mikron) entfernen große Partikel wie Sand, Schluff, Rost und Trümmer. Dies schützt nachgeschaltete Filter (Kohle, Membran) vor Verstopfung und verlängert ihre Lebensdauer, wodurch das gesamte System effizienter wird.",
          nl: "Sediment voorfilters (typisch 5-20 micron) verwijderen grote deeltjes zoals zand, slib, roest en puin. Dit beschermt stroomafwaartse filters (koolstof, membraan) tegen verstopping en verlengt hun levensduur, waardoor het hele systeem efficiënter wordt."
        }
      },
      {
        question: {
          en: "What is the typical lifespan of an activated carbon filter cartridge in normal household use?",
          es: "¿Cuál es la vida útil típica de un cartucho de filtro de carbón activado en uso doméstico normal?",
          de: "Was ist die typische Lebensdauer einer Aktivkohlefilterpatrone im normalen Haushaltsgebrauch?",
          nl: "Wat is de typische levensduur van een actieve koolstoffilterpatroon bij normaal huishoudelijk gebruik?"
        },
        options: [
          { en: "1-2 weeks", es: "1-2 semanas", de: "1-2 Wochen", nl: "1-2 weken" },
          { en: "1-2 months", es: "1-2 meses", de: "1-2 Monate", nl: "1-2 maanden" },
          { en: "3-6 months", es: "3-6 meses", de: "3-6 Monate", nl: "3-6 maanden" },
          { en: "2-3 years", es: "2-3 años", de: "2-3 Jahre", nl: "2-3 jaar" }
        ],
        correct: 2,
        explanation: {
          en: "Most activated carbon filters need replacement every 3-6 months depending on water quality and usage volume. As the carbon becomes saturated with contaminants, its effectiveness decreases. Some high-capacity filters may last up to 12 months.",
          es: "La mayoría de filtros de carbón activado necesitan reemplazo cada 3-6 meses dependiendo de calidad del agua y volumen de uso. A medida que el carbón se satura con contaminantes, su efectividad disminuye. Algunos filtros de alta capacidad pueden durar hasta 12 meses.",
          de: "Die meisten Aktivkohlefilter müssen alle 3-6 Monate ersetzt werden, abhängig von Wasserqualität und Nutzungsvolumen. Wenn die Kohle mit Verunreinigungen gesättigt wird, nimmt ihre Wirksamkeit ab. Einige Hochleistungsfilter können bis zu 12 Monate halten.",
          nl: "De meeste actieve koolstoffilters moeten elke 3-6 maanden worden vervangen, afhankelijk van waterkwaliteit en gebruiksvolume. Naarmate de koolstof verzadigd raakt met verontreinigingen, neemt de effectiviteit af. Sommige hoogwaardige filters kunnen tot 12 maanden meegaan."
        }
      },
      {
        question: {
          en: "What is electrodeionization (EDI) in water purification?",
          es: "¿Qué es la electrodesionización (EDI) en purificación de agua?",
          de: "Was ist Elektrodeionisation (EDI) bei der Wasserreinigung?",
          nl: "Wat is elektrodeïonisatie (EDI) bij waterzuivering?"
        },
        options: [
          { en: "Using electricity and ion exchange to produce ultra-pure water", es: "Usar electricidad e intercambio iónico para producir agua ultrapura", de: "Verwendung von Elektrizität und Ionenaustausch zur Erzeugung von ultrapurem Wasser", nl: "Gebruik van elektriciteit en ionenwisseling om ultrapuur water te produceren" },
          { en: "Heating water with electrodes", es: "Calentar agua con electrodos", de: "Wasser mit Elektroden erhitzen", nl: "Water verwarmen met elektroden" },
          { en: "Adding ions through electric current", es: "Añadir iones mediante corriente eléctrica", de: "Hinzufügen von Ionen durch elektrischen Strom", nl: "Ionen toevoegen via elektrische stroom" },
          { en: "Removing electricity from water", es: "Eliminar electricidad del agua", de: "Entfernen von Elektrizität aus Wasser", nl: "Elektriciteit verwijderen uit water" }
        ],
        correct: 0,
        explanation: {
          en: "EDI combines ion exchange resins with an electric current to continuously remove ions from water without chemical regeneration. It's used after RO to produce ultra-pure water for laboratories, pharmaceuticals, and electronics manufacturing.",
          es: "EDI combina resinas de intercambio iónico con corriente eléctrica para eliminar continuamente iones del agua sin regeneración química. Se usa después de RO para producir agua ultrapura para laboratorios, farmacéuticos y manufactura electrónica.",
          de: "EDI kombiniert Ionenaustauschharze mit elektrischem Strom zur kontinuierlichen Entfernung von Ionen aus Wasser ohne chemische Regeneration. Es wird nach RO verwendet, um ultrapures Wasser für Labore, Pharmazeutika und Elektronikfertigung zu erzeugen.",
          nl: "EDI combineert ionenwisselingsharsen met een elektrische stroom om continu ionen uit water te verwijderen zonder chemische regeneratie. Het wordt gebruikt na RO om ultrapuur water te produceren voor laboratoria, farmaceutica en elektronica-industrie."
        }
      },
      {
        question: {
          en: "What is the purpose of post-filtration remineralization in water treatment?",
          es: "¿Cuál es el propósito de la remineralización posterior a filtración en tratamiento de agua?",
          de: "Was ist der Zweck der Remineralisierung nach der Filtration bei der Wasseraufbereitung?",
          nl: "Wat is het doel van post-filtratie remineralisatie bij waterbehandeling?"
        },
        options: [
          { en: "To remove remaining contaminants", es: "Para eliminar contaminantes restantes", de: "Um verbleibende Verunreinigungen zu entfernen", nl: "Om resterende verontreinigingen te verwijderen" },
          { en: "To add beneficial minerals back after RO removes nearly everything", es: "Para añadir minerales beneficiosos después de que RO elimina casi todo", de: "Um vorteilhafte Mineralien nach RO-Entfernung von fast allem hinzuzufügen", nl: "Om gunstige mineralen terug te voegen nadat RO bijna alles verwijdert" },
          { en: "To increase water pressure", es: "Para aumentar presión del agua", de: "Um Wasserdruck zu erhöhen", nl: "Om waterdruk te verhogen" },
          { en: "To cool the water", es: "Para enfriar el agua", de: "Um das Wasser zu kühlen", nl: "Om het water te koelen" }
        },
        correct: 1,
        explanation: {
          en: "After reverse osmosis removes 95-99% of everything including beneficial minerals, remineralization filters add back calcium, magnesium, and other essential minerals. This improves taste, pH balance, and provides health benefits while maintaining purity.",
          es: "Después de que ósmosis inversa elimina 95-99% de todo incluyendo minerales beneficiosos, filtros de remineralización añaden calcio, magnesio y otros minerales esenciales. Esto mejora sabor, balance de pH y proporciona beneficios de salud mientras mantiene pureza.",
          de: "Nachdem Umkehrosmose 95-99% von allem einschließlich vorteilhafter Mineralien entfernt, fügen Remineralisierungsfilter Kalzium, Magnesium und andere essenzielle Mineralien zurück. Dies verbessert Geschmack, pH-Balance und bietet Gesundheitsvorteile bei Beibehaltung der Reinheit.",
          nl: "Nadat omgekeerde osmose 95-99% van alles inclusief gunstige mineralen verwijdert, voegen remineralisatiefilters calcium, magnesium en andere essentiële mineralen terug. Dit verbetert smaak, pH-balans en biedt gezondheidsvoordelen terwijl zuiverheid behouden blijft."
        }
      },
      {
        question: {
          en: "What is advanced oxidation process (AOP) in water treatment?",
          es: "¿Qué es el proceso de oxidación avanzada (AOP) en tratamiento de agua?",
          de: "Was ist der erweiterte Oxidationsprozess (AOP) bei der Wasseraufbereitung?",
          nl: "Wat is geavanceerd oxidatieproces (AOP) bij waterbehandeling?"
        },
        options: [
          { en: "Simple oxygen bubbling through water", es: "Burbujas simples de oxígeno a través de agua", de: "Einfaches Sauerstoffblubbern durch Wasser", nl: "Eenvoudige zuurstofbellen door water" },
          { en: "Generating highly reactive hydroxyl radicals to destroy contaminants", es: "Generar radicales hidroxilo altamente reactivos para destruir contaminantes", de: "Erzeugung hochreaktiver Hydroxylradikale zur Zerstörung von Verunreinigungen", nl: "Genereren van zeer reactieve hydroxylradicalen om verontreinigingen te vernietigen" },
          { en: "Adding rust to water", es: "Añadir óxido al agua", de: "Rost zu Wasser hinzufügen", nl: "Roest toevoegen aan water" },
          { en: "Cooling water with oxygen", es: "Enfriar agua con oxígeno", de: "Wasser mit Sauerstoff kühlen", nl: "Water koelen met zuurstof" }
        },
        correct: 1,
        explanation: {
          en: "AOP uses combinations like UV + H₂O₂, UV + ozone, or Fenton's reagent to generate hydroxyl radicals (OH•), extremely powerful oxidants that break down persistent organic pollutants, pharmaceuticals, and micropollutants that conventional treatment can't remove.",
          es: "AOP usa combinaciones como UV + H₂O₂, UV + ozono, o reactivo de Fenton para generar radicales hidroxilo (OH•), oxidantes extremadamente poderosos que descomponen contaminantes orgánicos persistentes, farmacéuticos y microcontaminantes que tratamiento convencional no puede eliminar.",
          de: "AOP verwendet Kombinationen wie UV + H₂O₂, UV + Ozon oder Fentons Reagenz zur Erzeugung von Hydroxylradikalen (OH•), extrem starken Oxidationsmitteln, die persistente organische Schadstoffe, Pharmazeutika und Mikroschadstoffe abbauen, die konventionelle Behandlung nicht entfernen kann.",
          nl: "AOP gebruikt combinaties zoals UV + H₂O₂, UV + ozon, of Fenton's reagens om hydroxylradicalen (OH•) te genereren, extreem krachtige oxidanten die persistente organische verontreinigingen, farmaceutica en microverontreinigingen afbreken die conventionele behandeling niet kan verwijderen."
        }
      },
      {
        question: {
          en: "What is capacitive deionization (CDI)?",
          es: "¿Qué es la desionización capacitiva (CDI)?",
          de: "Was ist kapazitive Deionisation (CDI)?",
          nl: "Wat is capacitieve deïonisatie (CDI)?"
        },
        options: [
          { en: "Using electrically charged electrodes to remove ions from water", es: "Usar electrodos cargados eléctricamente para eliminar iones del agua", de: "Verwendung elektrisch geladener Elektroden zur Entfernung von Ionen aus Wasser", nl: "Gebruik van elektrisch geladen elektroden om ionen uit water te verwijderen" },
          { en: "Storing water in capacitors", es: "Almacenar agua en capacitores", de: "Wasser in Kondensatoren lagern", nl: "Water opslaan in condensatoren" },
          { en: "Heating water with electric capacity", es: "Calentar agua con capacidad eléctrica", de: "Wasser mit elektrischer Kapazität erhitzen", nl: "Water verwarmen met elektrische capaciteit" },
          { en: "Measuring water volume electrically", es: "Medir volumen de agua eléctricamente", de: "Wasservolumen elektrisch messen", nl: "Watervolume elektrisch meten" }
        },
        correct: 0,
        explanation: {
          en: "CDI uses porous carbon electrodes that attract and hold ions when voltage is applied, removing salt from water. When voltage is reversed, electrodes release ions for regeneration. It's energy-efficient for brackish water desalination and emerging as an alternative to RO.",
          es: "CDI usa electrodos de carbón poroso que atraen y retienen iones cuando se aplica voltaje, eliminando sal del agua. Cuando se invierte el voltaje, electrodos liberan iones para regeneración. Es energéticamente eficiente para desalinización de agua salobre y emerge como alternativa a RO.",
          de: "CDI verwendet poröse Kohlenstoffelektroden, die Ionen anziehen und halten, wenn Spannung angelegt wird, wodurch Salz aus Wasser entfernt wird. Wenn die Spannung umgekehrt wird, geben Elektroden Ionen zur Regeneration frei. Es ist energieeffizient für Brackwasserentsalzung und entwickelt sich als Alternative zu RO.",
          nl: "CDI gebruikt poreuze koolstofelektroden die ionen aantrekken en vasthouden wanneer spanning wordt toegepast, waarbij zout uit water wordt verwijderd. Wanneer de spanning wordt omgekeerd, geven elektroden ionen vrij voor regeneratie. Het is energie-efficiënt voor brak water ontzilting en komt op als alternatief voor RO."
        }
      },
      {
        question: {
          en: "What are haloacetic acids (HAAs) in drinking water?",
          es: "¿Qué son los ácidos haloacéticos (HAA) en agua potable?",
          de: "Was sind Haloessigsäuren (HAA) in Trinkwasser?",
          nl: "Wat zijn haloazijnzuren (HAA's) in drinkwater?"
        },
        options: [
          { en: "Naturally occurring minerals", es: "Minerales naturales", de: "Natürlich vorkommende Mineralien", nl: "Natuurlijk voorkomende mineralen" },
          { en: "Disinfection byproducts formed when chlorine reacts with organic matter", es: "Subproductos de desinfección formados cuando cloro reacciona con materia orgánica", de: "Desinfektionsnebenprodukte, die entstehen, wenn Chlor mit organischen Stoffen reagiert", nl: "Desinfectiebijproducten gevormd wanneer chloor reageert met organisch materiaal" },
          { en: "Beneficial acids for health", es: "Ácidos beneficiosos para salud", de: "Vorteilhafte Säuren für Gesundheit", nl: "Gunstige zuren voor gezondheid" },
          { en: "Water softening agents", es: "Agentes ablandadores de agua", de: "Wasserenthärtungsmittel", nl: "Wateronthardingsmiddelen" }
        ],
        correct: 1,
        explanation: {
          en: "HAAs are disinfection byproducts (like THMs) that form when chlorine reacts with natural organic matter. The five regulated HAAs are monochloroacetic, dichloroacetic, trichloroacetic, monobromoacetic, and dibromoacetic acids. They're monitored due to potential health risks.",
          es: "Los HAA son subproductos de desinfección (como THM) que se forman cuando cloro reacciona con materia orgánica natural. Los cinco HAA regulados son ácidos monocloroacético, dicloroacético, tricloroacético, monobromoacético y dibromoacético. Se monitorean debido a riesgos potenciales de salud.",
          de: "HAA sind Desinfektionsnebenprodukte (wie THM), die entstehen, wenn Chlor mit natürlichen organischen Stoffen reagiert. Die fünf regulierten HAA sind Monochloressigsäure, Dichloressigsäure, Trichloressigsäure, Monobromo essigsäure und Dibromessigsäure. Sie werden aufgrund potenzieller Gesundheitsrisiken überwacht.",
          nl: "HAA's zijn desinfectiebijproducten (zoals THM's) die ontstaan wanneer chloor reageert met natuurlijk organisch materiaal. De vijf gereguleerde HAA's zijn monochloorazijnzuur, dichloorazijnzuur, trichloorazijnzuur, monobroom azijnzuur en dibroomazijnzuur. Ze worden gemonitord vanwege potentiële gezondheidsrisico's."
        }
      },
      {
        question: {
          en: "What is the difference between GAC and carbon block filters?",
          es: "¿Cuál es la diferencia entre filtros GAC y de bloque de carbón?",
          de: "Was ist der Unterschied zwischen GAC- und Kohleblockfiltern?",
          nl: "Wat is het verschil tussen GAC- en koolstofblokfilters?"
        },
        options: [
          { en: "No difference, same technology", es: "Sin diferencia, misma tecnología", de: "Kein Unterschied, gleiche Technologie", nl: "Geen verschil, zelfde technologie" },
          { en: "GAC uses loose granules, carbon block uses compressed carbon for better filtration", es: "GAC usa gránulos sueltos, bloque de carbón usa carbón comprimido para mejor filtración", de: "GAC verwendet lose Granulate, Kohleblock verwendet komprimierten Kohlenstoff für bessere Filtration", nl: "GAC gebruikt losse korrels, koolstofblok gebruikt samengeperste koolstof voor betere filtratie" },
          { en: "GAC is for commercial use only", es: "GAC es solo para uso comercial", de: "GAC ist nur für gewerbliche Nutzung", nl: "GAC is alleen voor commercieel gebruik" },
          { en: "Carbon block is disposable, GAC is reusable", es: "Bloque de carbón es desechable, GAC es reutilizable", de: "Kohleblock ist Einweg, GAC ist wiederverwendbar", nl: "Koolstofblok is wegwerp, GAC is herbruikbaar" }
        },
        correct: 1,
        explanation: {
          en: "GAC (Granular Activated Carbon) uses loose carbon granules with faster flow but less contact time. Carbon block filters compress activated carbon into a solid block, providing slower flow but more contact time, smaller pore sizes, and better contaminant removal including sediment filtration.",
          es: "GAC (Carbón Activado Granular) usa gránulos de carbón sueltos con flujo más rápido pero menos tiempo de contacto. Filtros de bloque de carbón comprimen carbón activado en bloque sólido, proporcionando flujo más lento pero más tiempo de contacto, poros más pequeños y mejor eliminación de contaminantes incluyendo filtración de sedimento.",
          de: "GAC (Granulierte Aktivkohle) verwendet lose Kohlenstoffgranulate mit schnellerem Durchfluss aber weniger Kontaktzeit. Kohleblockfilter komprimieren Aktivkohle zu einem festen Block, der langsameren Durchfluss aber mehr Kontaktzeit, kleinere Porengrößen und bessere Schadstoffent fernung einschließlich Sedimentfiltration bietet.",
          nl: "GAC (Korrelige Actieve Kool) gebruikt losse koolstofkorrels met snellere stroming maar minder contacttijd. Koolstofblokfilters persen actieve kool samen tot een vast blok, wat langzamere stroming maar meer contacttijd, kleinere poriegrootten en betere verontreinigingsverwijdering inclusief sedimentfiltratie biedt."
        }
      },
      {
        question: {
          en: "What is permeate in reverse osmosis systems?",
          es: "¿Qué es el permeado en sistemas de ósmosis inversa?",
          de: "Was ist Permeat in Umkehrosmosesystemen?",
          nl: "Wat is permeaat in omgekeerde osmose systemen?"
        },
        options: [
          { en: "The waste water rejected by the membrane", es: "El agua de desecho rechazada por la membrana", de: "Das von der Membran abgewiesene Abwasser", nl: "Het afvalwater dat door het membraan wordt afgewezen" },
          { en: "The purified water that passes through the membrane", es: "El agua purificada que pasa a través de la membrana", de: "Das gereinigte Wasser, das durch die Membran geht", nl: "Het gezuiverde water dat door het membraan gaat" },
          { en: "The pre-filter stage", es: "La etapa de prefiltro", de: "Die Vorfilterstufe", nl: "De voorfilter fase" },
          { en: "The membrane cleaning solution", es: "La solución de limpieza de membrana", de: "Die Membranreinigungslösung", nl: "De membraanreinigingsoplossing" }
        },
        correct: 1,
        explanation: {
          en: "Permeate is the purified water that successfully passes through the RO membrane. It contains very low TDS (typically 10-50 ppm) and is the product water. The rejected concentrated water containing removed contaminants is called concentrate or reject.",
          es: "El permeado es el agua purificada que pasa exitosamente a través de la membrana RO. Contiene TDS muy bajo (típicamente 10-50 ppm) y es el agua producto. El agua concentrada rechazada que contiene contaminantes eliminados se llama concentrado o rechazo.",
          de: "Permeat ist das gereinigte Wasser, das erfolgreich durch die RO-Membran geht. Es enthält sehr niedrige TDS (typischerweise 10-50 ppm) und ist das Produktwasser. Das abgewiesene konzentrierte Wasser, das entfernte Verunreinigungen enthält, wird Konzentrat oder Rejektion genannt.",
          nl: "Permeaat is het gezuiverde water dat succesvol door het RO-membraan gaat. Het bevat zeer lage TDS (typisch 10-50 ppm) en is het productwater. Het afgewezen geconcentreerde water dat verwijderde verontreinigingen bevat wordt concentraat of afval genoemd."
        }
      },
      {
        question: {
          en: "What is the recovery rate in reverse osmosis systems?",
          es: "¿Qué es la tasa de recuperación en sistemas de ósmosis inversa?",
          de: "Was ist die Rückgewinnungsrate in Umkehrosmosesystemen?",
          nl: "Wat is het terugwinningspercentage in omgekeerde osmose systemen?"
        },
        options: [
          { en: "How quickly the membrane can be cleaned", es: "Qué tan rápido se puede limpiar la membrana", de: "Wie schnell die Membran gereinigt werden kann", nl: "Hoe snel het membraan gereinigd kan worden" },
          { en: "The percentage of feed water converted to purified water", es: "El porcentaje de agua de alimentación convertida en agua purificada", de: "Der Prozentsatz des Zulaufwassers, das in gereinigtes Wasser umgewandelt wird", nl: "Het percentage voedingswater dat wordt omgezet in gezuiverd water" },
          { en: "Time to recover from power failure", es: "Tiempo para recuperarse de falla eléctrica", de: "Zeit zur Wiederherstellung nach Stromausfall", nl: "Tijd om te herstellen van stroomuitval" },
          { en: "Filter replacement frequency", es: "Frecuencia de reemplazo de filtro", de: "Filteraustauschfrequenz", nl: "Filtervervanging frequentie" }
        },
        correct: 1,
        explanation: {
          en: "Recovery rate is the percentage of feed water that becomes purified permeate. Typical household RO systems have 25-50% recovery (meaning 50-75% goes to drain as waste). Commercial systems achieve higher recovery rates (60-75%). Higher recovery saves water but requires better pre-treatment.",
          es: "La tasa de recuperación es el porcentaje de agua de alimentación que se convierte en permeado purificado. Sistemas RO domésticos típicos tienen 25-50% de recuperación (significando 50-75% va al drenaje como desecho). Sistemas comerciales logran tasas de recuperación más altas (60-75%). Mayor recuperación ahorra agua pero requiere mejor pretratamiento.",
          de: "Die Rückgewinnungsrate ist der Prozentsatz des Zulaufwassers, der zu gereinigtem Permeat wird. Typische Haushalts-RO-Systeme haben 25-50% Rückgewinnung (was bedeutet, dass 50-75% als Abfall in den Abfluss gehen). Kommerzielle Systeme erreichen höhere Rückgewinnungsraten (60-75%). Höhere Rückgewinnung spart Wasser, erfordert aber bessere Vorbehandlung.",
          nl: "Het terugwinningspercentage is het percentage voedingswater dat gezuiverd permeaat wordt. Typische huishoudelijke RO-systemen hebben 25-50% terugwinning (wat betekent dat 50-75% naar de afvoer gaat als afval). Commerciële systemen bereiken hogere terugwinningspercentages (60-75%). Hogere terugwinning bespaart water maar vereist betere voorbehandeling."
        }
      },
      {
        question: {
          en: "What is membrane fouling in filtration systems?",
          es: "¿Qué es el ensuciamiento de membrana en sistemas de filtración?",
          de: "Was ist Membranverschmutzung in Filtrationssystemen?",
          nl: "Wat is membraanvervuiling in filtratiesystemen?"
        },
        options: [
          { en: "Intentional coating of membranes", es: "Recubrimiento intencional de membranas", de: "Absichtliche Beschichtung von Membranen", nl: "Opzettelijke coating van membranen" },
          { en: "Accumulation of materials on membrane surface reducing performance", es: "Acumulación de materiales en superficie de membrana reduciendo rendimiento", de: "Ansammlung von Materialien auf Membranoberfläche, die die Leistung reduziert", nl: "Ophoping van materialen op membraanoppervlak waardoor prestatie vermindert" },
          { en: "Membrane cleaning process", es: "Proceso de limpieza de membrana", de: "Membranreinigungsprozess", nl: "Membraanreinigingsproces" },
          { en: "Manufacturing defect", es: "Defecto de fabricación", de: "Herstellungsfehler", nl: "Fabricagedefect" }
        },
        correct: 1,
        explanation: {
          en: "Membrane fouling occurs when particles, organic matter, microorganisms, or minerals accumulate on the membrane surface or within pores, clogging them and reducing water flow and filtration efficiency. Types include particulate, organic, biological (biofouling), and scaling (mineral deposits).",
          es: "El ensuciamiento de membrana ocurre cuando partículas, materia orgánica, microorganismos o minerales se acumulan en la superficie de la membrana o dentro de poros, obstruyéndolos y reduciendo flujo de agua y eficiencia de filtración. Los tipos incluyen particulado, orgánico, biológico (bioensuciamiento) e incrustación (depósitos minerales).",
          de: "Membranverschmutzung tritt auf, wenn sich Partikel, organische Stoffe, Mikroorganismen oder Mineralien auf der Membranoberfläche oder in Poren ansammeln, diese verstopfen und Wasserfluss und Filtrationseffizienz reduzieren. Typen umfassen partikulär, organisch, biologisch (Biofouling) und Verkalkung (Mineralablagerungen).",
          nl: "Membraanvervuiling treedt op wanneer deeltjes, organisch materiaal, micro-organismen of mineralen zich ophopen op het membraanoppervlak of binnen poriën, deze verstoppen en waterstroom en filtratie-efficiëntie verminderen. Typen omvatten particulair, organisch, biologisch (biofouling) en aanslag (mineraalafzettingen)."
        }
      },
      {
        question: {
          en: "What is the purpose of a permeate pump in RO systems?",
          es: "¿Cuál es el propósito de una bomba de permeado en sistemas RO?",
          de: "Was ist der Zweck einer Permeatpumpe in RO-Systemen?",
          nl: "Wat is het doel van een permeaatpomp in RO-systemen?"
        },
        options: [
          { en: "To increase water pressure entering the membrane", es: "Para aumentar presión del agua que entra en la membrana", de: "Um Wasserdruck beim Eintritt in die Membran zu erhöhen", nl: "Om waterdruk bij binnenkomst in het membraan te verhogen" },
          { en: "To reduce back pressure and improve efficiency without electricity", es: "Para reducir contrapresión y mejorar eficiencia sin electricidad", de: "Um Gegendruck zu reduzieren und Effizienz ohne Strom zu verbessern", nl: "Om tegendruk te verminderen en efficiëntie te verbeteren zonder elektriciteit" },
          { en: "To heat the water", es: "Para calentar el agua", de: "Um das Wasser zu erhitzen", nl: "Om het water te verwarmen" },
          { en: "To add minerals back", es: "Para añadir minerales de vuelta", de: "Um Mineralien zurückzufügen", nl: "Om mineralen terug te voegen" }
        },
        correct: 1,
        explanation: {
          en: "A permeate pump is a non-electric, hydraulically-powered pump that uses reject water pressure to push permeate into the storage tank, overcoming back pressure. This increases recovery rate (less waste), improves membrane life, and allows the system to work with lower inlet pressure.",
          es: "Una bomba de permeado es una bomba no eléctrica, hidráulicamente accionada que usa presión de agua de rechazo para empujar permeado al tanque de almacenamiento, superando contrapresión. Esto aumenta tasa de recuperación (menos desperdicio), mejora vida de membrana y permite que el sistema funcione con menor presión de entrada.",
          de: "Eine Permeatpumpe ist eine nicht-elektrische, hydraulisch angetriebene Pumpe, die Rejektionswasserdruck verwendet, um Permeat in den Speichertank zu drücken und Gegendruck zu überwinden. Dies erhöht die Rückgewinnungsrate (weniger Abfall), verbessert die Membranlebensdauer und ermöglicht es dem System, mit niedrigerem Eingangsdruck zu arbeiten.",
          nl: "Een permeaatpomp is een niet-elektrische, hydraulisch aangedreven pomp die afvalwaterdruk gebruikt om permeaat in de opslagtank te duwen, waarbij tegendruk wordt overwonnen. Dit verhoogt het terugwinningspercentage (minder afval), verbetert de membraanlevensduur en stelt het systeem in staat om met lagere inlaatdruk te werken."
        }
      },
      {
        question: {
          en: "What is chloramine and why is it used in water treatment?",
          es: "¿Qué es la cloramina y por qué se usa en tratamiento de agua?",
          de: "Was ist Chloramin und warum wird es bei der Wasseraufbereitung verwendet?",
          nl: "Wat is chloramine en waarom wordt het gebruikt bij waterbehandeling?"
        },
        options: [
          { en: "A mineral supplement added for health", es: "Un suplemento mineral añadido por salud", de: "Ein Mineralzusatz für Gesundheit", nl: "Een mineraalsupplement toegevoegd voor gezondheid" },
          { en: "A disinfectant formed by combining chlorine and ammonia, more stable than chlorine", es: "Un desinfectante formado combinando cloro y amoníaco, más estable que cloro", de: "Ein Desinfektionsmittel aus Chlor und Ammoniak, stabiler als Chlor", nl: "Een desinfectiemiddel gevormd door chloor en ammoniak te combineren, stabieler dan chloor" },
          { en: "A natural compound in groundwater", es: "Un compuesto natural en agua subterránea", de: "Eine natürliche Verbindung im Grundwasser", nl: "Een natuurlijke verbinding in grondwater" },
          { en: "A flavor enhancer", es: "Un potenciador de sabor", de: "Ein Geschmacksverstärker", nl: "Een smaakversterker" }
        },
        correct: 1,
        explanation: {
          en: "Chloramine (NH₂Cl) is formed by adding ammonia to chlorine. It provides longer-lasting disinfection in distribution systems, produces fewer disinfection byproducts than chlorine alone, but is harder to remove (requiring catalytic carbon) and can corrode certain plumbing materials.",
          es: "La cloramina (NH₂Cl) se forma añadiendo amoníaco al cloro. Proporciona desinfección de más larga duración en sistemas de distribución, produce menos subproductos de desinfección que solo cloro, pero es más difícil de eliminar (requiriendo carbón catalítico) y puede corroer ciertos materiales de plomería.",
          de: "Chloramin (NH₂Cl) wird durch Zugabe von Ammoniak zu Chlor gebildet. Es bietet länger anhaltende Desinfektion in Verteilungssystemen, produziert weniger Desinfektionsnebenprodukte als Chlor allein, ist aber schwerer zu entfernen (erfordert katalytischen Kohlenstoff) und kann bestimmte Rohrleitungsmaterialien korrodieren.",
          nl: "Chloramine (NH₂Cl) wordt gevormd door ammoniak aan chloor toe te voegen. Het biedt langdurige desinfectie in distributiesystemen, produceert minder desinfectiebijproducten dan alleen chloor, maar is moeilijker te verwijderen (vereist katalytische kool) en kan bepaalde leidingmaterialen corroderen."
        }
      },
      {
        question: {
          en: "What is the difference between point-of-use (POU) and point-of-entry (POE) water treatment?",
          es: "¿Cuál es la diferencia entre tratamiento de agua en punto de uso (POU) y punto de entrada (POE)?",
          de: "Was ist der Unterschied zwischen Wasserbehandlung am Nutzungspunkt (POU) und Eingangspunkt (POE)?",
          nl: "Wat is het verschil tussen waterbehandeling op gebruikspunt (POU) en toegangspunt (POE)?"
        },
        options: [
          { en: "No difference, same concept", es: "Sin diferencia, mismo concepto", de: "Kein Unterschied, gleiches Konzept", nl: "Geen verschil, zelfde concept" },
          { en: "POU treats water at specific taps, POE treats all water entering the home", es: "POU trata agua en grifos específicos, POE trata toda agua que entra a casa", de: "POU behandelt Wasser an bestimmten Wasserhähnen, POE behandelt alles Wasser, das ins Haus kommt", nl: "POU behandelt water bij specifieke kranen, POE behandelt al het water dat het huis binnenkomt" },
          { en: "POU is for commercial use only", es: "POU es solo para uso comercial", de: "POU ist nur für gewerbliche Nutzung", nl: "POU is alleen voor commercieel gebruik" },
          { en: "POE is cheaper than POU", es: "POE es más barato que POU", de: "POE ist günstiger als POU", nl: "POE is goedkoper dan POU" }
        },
        correct: 1,
        explanation: {
          en: "POU (Point-of-Use) systems treat water at specific locations like under-sink filters or faucet-mounted filters for drinking/cooking water only. POE (Point-of-Entry) systems treat all water entering the home at the main line, providing treated water to all taps including showers and appliances.",
          es: "Los sistemas POU (Punto de Uso) tratan agua en ubicaciones específicas como filtros bajo fregadero o filtros montados en grifo solo para agua de beber/cocinar. Los sistemas POE (Punto de Entrada) tratan toda agua que entra a casa en la línea principal, proporcionando agua tratada a todos grifos incluyendo duchas y electrodomésticos.",
          de: "POU (Nutzungspunkt) Systeme behandeln Wasser an bestimmten Orten wie Untertischfiltern oder Wasserhahnfiltern nur für Trink-/Kochwasser. POE (Eingangspunkt) Systeme behandeln alles Wasser, das ins Haus an der Hauptleitung eintritt, und liefern behandeltes Wasser an alle Wasserhähne einschließlich Duschen und Geräte.",
          nl: "POU (Gebruikspunt) systemen behandelen water op specifieke locaties zoals onderspoelbakfilters of kraangemonteerde filters alleen voor drink-/kookwater. POE (Toegangspunt) systemen behandelen al het water dat het huis binnenkomt bij de hoofdleiding, en leveren behandeld water aan alle kranen inclusief douches en apparaten."
        }
      },
      {
        question: {
          en: "What is total organic carbon (TOC) in water quality analysis?",
          es: "¿Qué es carbono orgánico total (TOC) en análisis de calidad de agua?",
          de: "Was ist gesamter organischer Kohlenstoff (TOC) in der Wasserqualitätsanalyse?",
          nl: "Wat is totale organische koolstof (TOC) in waterkwaliteitsanalyse?"
        },
        options: [
          { en: "A measurement of beneficial minerals", es: "Una medida de minerales beneficiosos", de: "Eine Messung vorteilhafter Mineralien", nl: "Een meting van gunstige mineralen" },
          { en: "The amount of carbon bound in organic compounds in water", es: "La cantidad de carbono unido en compuestos orgánicos en agua", de: "Die Menge an Kohlenstoff gebunden in organischen Verbindungen im Wasser", nl: "De hoeveelheid koolstof gebonden in organische verbindingen in water" },
          { en: "Carbon dioxide content", es: "Contenido de dióxido de carbono", de: "Kohlendioxidgehalt", nl: "Koolstofdioxidegehalte" },
          { en: "Activated carbon efficiency", es: "Eficiencia de carbón activado", de: "Aktivkohleeffizienz", nl: "Actieve koolstof efficiëntie" }
        },
        correct: 1,
        explanation: {
          en: "TOC measures the total concentration of organic carbon (from living organisms, decaying matter, chemicals, pesticides, pharmaceuticals) in water. It's an important parameter indicating organic pollution level and potential for disinfection byproduct formation. Lower TOC means cleaner water.",
          es: "TOC mide la concentración total de carbono orgánico (de organismos vivos, materia en descomposición, químicos, pesticidas, farmacéuticos) en agua. Es un parámetro importante que indica nivel de contaminación orgánica y potencial para formación de subproductos de desinfección. Menor TOC significa agua más limpia.",
          de: "TOC misst die Gesamtkonzentration organischen Kohlenstoffs (von lebenden Organismen, verfallendem Material, Chemikalien, Pestiziden, Pharmazeutika) im Wasser. Es ist ein wichtiger Parameter, der das organische Verschmutzungsniveau und Potenzial für Desinfektionsnebenproduktbildung anzeigt. Niedrigerer TOC bedeutet saubereres Wasser.",
          nl: "TOC meet de totale concentratie van organische koolstof (van levende organismen, rottend materiaal, chemicaliën, pesticiden, farmaceutica) in water. Het is een belangrijke parameter die het niveau van organische vervuiling en het potentieel voor desinfectiebijproductvorming aangeeft. Lagere TOC betekent schoner water."
        }
      },
      {
        question: {
          en: "What is the Langelier Saturation Index (LSI) in water treatment?",
          es: "¿Qué es el Índice de Saturación de Langelier (LSI) en tratamiento de agua?",
          de: "Was ist der Langelier-Sättigungsindex (LSI) bei der Wasseraufbereitung?",
          nl: "Wat is de Langelier Saturatie Index (LSI) bij waterbehandeling?"
        },
        options: [
          { en: "A measure of bacterial contamination", es: "Una medida de contaminación bacteriana", de: "Eine Messung bakterieller Kontamination", nl: "Een meting van bacteriële besmetting" },
          { en: "A calculation predicting water's tendency to deposit or dissolve calcium carbonate", es: "Un cálculo que predice tendencia del agua a depositar o disolver carbonato de calcio", de: "Eine Berechnung zur Vorhersage der Tendenz von Wasser, Calciumcarbonat abzulagern oder aufzulösen", nl: "Een berekening die de neiging van water voorspelt om calciumcarbonaat af te zetten of op te lossen" },
          { en: "Water flow rate measurement", es: "Medida de tasa de flujo de agua", de: "Wasserdurchflussmessung", nl: "Waterstroom snelheidsmeting" },
          { en: "Filter efficiency rating", es: "Calificación de eficiencia de filtro", de: "Filtereffizienzbewertung", nl: "Filterefficiëntieclassificatie" }
        ],
        correct: 1,
        explanation: {
          en: "LSI predicts whether water will deposit calcium carbonate scale (positive LSI), dissolve it (negative LSI), or be in equilibrium (LSI ≈ 0). It's calculated from pH, temperature, calcium hardness, alkalinity, and TDS. Critical for managing scaling/corrosion in pipes, RO membranes, and heat exchangers.",
          es: "LSI predice si agua depositará incrustación de carbonato de calcio (LSI positivo), lo disolverá (LSI negativo), o estará en equilibrio (LSI ≈ 0). Se calcula a partir de pH, temperatura, dureza de calcio, alcalinidad y TDS. Crítico para gestionar incrustación/corrosión en tuberías, membranas RO e intercambiadores de calor.",
          de: "LSI sagt voraus, ob Wasser Calciumcarbonat-Ablagerungen bilden (positiver LSI), auflösen (negativer LSI) oder im Gleichgewicht sein wird (LSI ≈ 0). Es wird aus pH, Temperatur, Calciumhärte, Alkalität und TDS berechnet. Kritisch für Verwaltung von Verkalkung/Korrosion in Rohren, RO-Membranen und Wärmetauschern.",
          nl: "LSI voorspelt of water calciumcarbonaataanslag zal afzetten (positieve LSI), oplossen (negatieve LSI), of in evenwicht zal zijn (LSI ≈ 0). Het wordt berekend uit pH, temperatuur, calciumhardheid, alkaliniteit en TDS. Kritisch voor het beheren van aanslag/corrosie in leidingen, RO-membranen en warmtewisselaars."
        }
      },
      {
        question: {
          en: "What is photocatalytic oxidation in water purification?",
          es: "¿Qué es la oxidación fotocatalítica en purificación de agua?",
          de: "Was ist photokatalytische Oxidation bei der Wasserreinigung?",
          nl: "Wat is fotokatalytische oxidatie bij waterzuivering?"
        },
        options: [
          { en: "Using UV light and a catalyst (usually TiO₂) to break down contaminants", es: "Usar luz UV y un catalizador (usualmente TiO₂) para descomponer contaminantes", de: "Verwendung von UV-Licht und einem Katalysator (üblicherweise TiO₂) zum Abbau von Verunreinigungen", nl: "Gebruik van UV-licht en een katalysator (meestal TiO₂) om verontreinigingen af te breken" },
          { en: "Photographing water quality", es: "Fotografiar calidad del agua", de: "Fotografieren der Wasserqualität", nl: "Fotograferen van waterkwaliteit" },
          { en: "Adding oxygen by sunlight", es: "Añadir oxígeno mediante luz solar", de: "Hinzufügen von Sauerstoff durch Sonnenlicht", nl: "Zuurstof toevoegen door zonlicht" },
          { en: "Heating water with photo-electric cells", es: "Calentar agua con células fotoeléctricas", de: "Erhitzen von Wasser mit photoelektrischen Zellen", nl: "Water verwarmen met foto-elektrische cellen" }
        ],
        correct: 0,
        explanation: {
          en: "Photocatalytic oxidation uses UV light to activate a catalyst (typically titanium dioxide, TiO₂) which generates highly reactive species that oxidize and break down organic pollutants, pharmaceuticals, pesticides, and some microorganisms. It's an emerging advanced oxidation technology for water treatment.",
          es: "La oxidación fotocatalítica usa luz UV para activar un catalizador (típicamente dióxido de titanio, TiO₂) que genera especies altamente reactivas que oxidan y descomponen contaminantes orgánicos, farmacéuticos, pesticidas y algunos microorganismos. Es una tecnología emergente de oxidación avanzada para tratamiento de agua.",
          de: "Photokatalytische Oxidation verwendet UV-Licht zur Aktivierung eines Katalysators (typischerweise Titandioxid, TiO₂), der hochreaktive Spezies erzeugt, die organische Schadstoffe, Pharmazeutika, Pestizide und einige Mikroorganismen oxidieren und abbauen. Es ist eine aufstrebende erweiterte Oxidationstechnologie für Wasserbehandlung.",
          nl: "Fotokatalytische oxidatie gebruikt UV-licht om een katalysator (typisch titaniumdioxide, TiO₂) te activeren die zeer reactieve stoffen genereert die organische verontreinigingen, farmaceutica, pesticiden en sommige micro-organismen oxideren en afbreken. Het is een opkomende geavanceerde oxidatietechnologie voor waterbehandeling."
        }
      },
      {
        question: {
          en: "What is backwashing in water filtration?",
          es: "¿Qué es el retrolavado en filtración de agua?",
          de: "Was ist Rückspülung bei der Wasserfiltration?",
          nl: "Wat is terugspoelen bij waterfiltratie?"
        },
        options: [
          { en: "Washing the outside of filters", es: "Lavar el exterior de filtros", de: "Waschen der Außenseite von Filtern", nl: "Wassen van de buitenkant van filters" },
          { en: "Reversing water flow to clean accumulated debris from filter media", es: "Invertir flujo de agua para limpiar escombros acumulados del medio filtrante", de: "Umkehren des Wasserflusses zur Reinigung angesammelter Trümmer vom Filtermedium", nl: "Waterstroom omkeren om opgehoopt puin uit filtermateriaal te reinigen" },
          { en: "Adding cleaning chemicals", es: "Añadir químicos de limpieza", de: "Hinzufügen von Reinigungschemikalien", nl: "Reinigingschemicaliën toevoegen" },
          { en: "Pre-treating water before filtration", es: "Pretratar agua antes de filtración", de: "Vorbehandlung von Wasser vor Filtration", nl: "Water voorbehandelen vóór filtratie" }
        ],
        correct: 1,
        explanation: {
          en: "Backwashing reverses the water flow direction through a filter (sand, carbon, etc.) to flush out accumulated particles and debris. This regenerates the filter bed, restores flow rate, and extends filter life. Common in sand filters, multimedia filters, and water softeners.",
          es: "El retrolavado invierte la dirección del flujo de agua a través de un filtro (arena, carbón, etc.) para expulsar partículas y escombros acumulados. Esto regenera el lecho del filtro, restaura la tasa de flujo y extiende la vida del filtro. Común en filtros de arena, filtros multimedia y ablandadores de agua.",
          de: "Rückspülung kehrt die Wasserflussrichtung durch einen Filter (Sand, Kohle usw.) um, um angesammelte Partikel und Trümmer auszuspülen. Dies regeneriert das Filterbett, stellt die Durchflussrate wieder her und verlängert die Filterlebensdauer. Üblich bei Sandfiltern, Multimedia-Filtern und Wasserenthärtern.",
          nl: "Terugspoelen keert de waterstroom richting door een filter (zand, koolstof, enz.) om om opgehoopte deeltjes en puin weg te spoelen. Dit regenereert het filterbed, herstelt de stroomsnelheid en verlengt de filterlevensduur. Gebruikelijk bij zandfilters, multimedia-filters en waterontharders."
        }
      },
      {
        question: {
          en: "What is the purpose of air gap faucets on RO systems?",
          es: "¿Cuál es el propósito de grifos con separación de aire en sistemas RO?",
          de: "Was ist der Zweck von Luftspalt-Wasserhähnen an RO-Systemen?",
          nl: "Wat is het doel van luchtopening kranen op RO-systemen?"
        },
        options: [
          { en: "To improve water taste", es: "Para mejorar sabor del agua", de: "Um Wassergeschmack zu verbessern", nl: "Om watersmaak te verbeteren" },
          { en: "To prevent backflow contamination by creating physical gap", es: "Para prevenir contaminación por reflujo creando separación física", de: "Um Rückflusskontamination durch Schaffung physischer Lücke zu verhindern", nl: "Om terugstroom verontreiniging te voorkomen door fysieke opening te creëren" },
          { en: "To add oxygen to water", es: "Para añadir oxígeno al agua", de: "Um Wasser Sauerstoff hinzuzufügen", nl: "Om zuurstof aan water toe te voegen" },
          { en: "To regulate water temperature", es: "Para regular temperatura del agua", de: "Um Wassertemperatur zu regulieren", nl: "Om watertemperatuur te reguleren" }
        ],
        correct: 1,
        explanation: {
          en: "Air gap faucets create a physical separation (air gap) between the RO system and drain line, preventing any possibility of contaminated water being siphoned back into the purified water. This is the highest level of backflow protection and is required by plumbing codes in many areas.",
          es: "Los grifos con separación de aire crean una separación física (brecha de aire) entre el sistema RO y línea de drenaje, previniendo cualquier posibilidad de que agua contaminada sea sifonada de vuelta al agua purificada. Este es el nivel más alto de protección contra reflujo y es requerido por códigos de plomería en muchas áreas.",
          de: "Luftspalt-Wasserhähne schaffen eine physische Trennung (Luftspalt) zwischen RO-System und Abflussleitung und verhindern jede Möglichkeit, dass kontaminiertes Wasser zurück in das gereinigte Wasser gesaugt wird. Dies ist der höchste Grad an Rückflussschutz und wird in vielen Gebieten durch Sanitärvorschriften vorgeschrieben.",
          nl: "Luchtopening kranen creëren een fysieke scheiding (luchtopening) tussen het RO-systeem en afvoerlijn, wat elke mogelijkheid voorkomt dat verontreinigd water terug wordt gezogen in het gezuiverde water. Dit is het hoogste niveau van terugstroombeveiliging en is vereist door sanitaire codes in veel gebieden."
        }
      },
      {
        question: {
          en: "What is UV dose in UV water disinfection?",
          es: "¿Qué es la dosis UV en desinfección de agua UV?",
          de: "Was ist UV-Dosis bei UV-Wasserdesinfektion?",
          nl: "Wat is UV-dosis bij UV-waterdesinfectie?"
        },
        options: [
          { en: "The amount of UV light received, measured in mJ/cm²", es: "La cantidad de luz UV recibida, medida en mJ/cm²", de: "Die Menge an UV-Licht, die empfangen wird, gemessen in mJ/cm²", nl: "De hoeveelheid UV-licht ontvangen, gemeten in mJ/cm²" },
          { en: "The number of UV lamps", es: "El número de lámparas UV", de: "Die Anzahl der UV-Lampen", nl: "Het aantal UV-lampen" },
          { en: "The size of the UV chamber", es: "El tamaño de la cámara UV", de: "Die Größe der UV-Kammer", nl: "De grootte van de UV-kamer" },
          { en: "Water temperature during UV treatment", es: "Temperatura del agua durante tratamiento UV", de: "Wassertemperatur während UV-Behandlung", nl: "Watertemperatuur tijdens UV-behandeling" }
        ],
        correct: 0,
        explanation: {
          en: "UV dose (mJ/cm² or mWs/cm²) is the product of UV intensity and exposure time. Minimum doses are: 16 mJ/cm² for bacteria, 40 mJ/cm² for most viruses, 100+ mJ/cm² for some parasites. Higher doses ensure better disinfection. Factors affecting dose include lamp power, water flow rate, and water turbidity.",
          es: "La dosis UV (mJ/cm² o mWs/cm²) es el producto de intensidad UV y tiempo de exposición. Dosis mínimas son: 16 mJ/cm² para bacterias, 40 mJ/cm² para la mayoría de virus, 100+ mJ/cm² para algunos parásitos. Dosis más altas aseguran mejor desinfección. Factores que afectan dosis incluyen potencia de lámpara, tasa de flujo de agua y turbidez del agua.",
          de: "UV-Dosis (mJ/cm² oder mWs/cm²) ist das Produkt aus UV-Intensität und Belichtungszeit. Mindestdosen sind: 16 mJ/cm² für Bakterien, 40 mJ/cm² für die meisten Viren, 100+ mJ/cm² für einige Parasiten. Höhere Dosen gewährleisten bessere Desinfektion. Faktoren, die die Dosis beeinflussen, umfassen Lampenleistung, Wasserdurchflussrate und Wassertrübung.",
          nl: "UV-dosis (mJ/cm² of mWs/cm²) is het product van UV-intensiteit en belichtingstijd. Minimumdoses zijn: 16 mJ/cm² voor bacteriën, 40 mJ/cm² voor de meeste virussen, 100+ mJ/cm² voor sommige parasieten. Hogere doses zorgen voor betere desinfectie. Factoren die de dosis beïnvloeden zijn lampvermogen, waterstroom snelheid en waterturbiditeit."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
