// Quiz Template - Level 5: Drinken - Bier
(function() {
  const level5 = {
    name: {
      en: "Intermediate Brewing Techniques",
      es: "Técnicas Intermedias de Elaboración",
      de: "Fortgeschrittene Brautechniken",
      nl: "Gevorderde Brouwtechnieken"
    },
    questions: [
      {
        question: {
          en: "What is dry hopping?",
          es: "¿Qué es el lupulado en seco?",
          de: "Was ist Kalthopfung?",
          nl: "Wat is droge hopping?"
        },
        options: [
          { en: "Adding hops without water", es: "Agregar lúpulo sin agua", de: "Hopfen ohne Wasser hinzufügen", nl: "Hop toevoegen zonder water" },
          { en: "Adding hops during fermentation", es: "Agregar lúpulo durante la fermentación", de: "Hopfen während der Gärung hinzufügen", nl: "Hop toevoegen tijdens fermentatie" },
          { en: "Using dried hops only", es: "Usar solo lúpulo seco", de: "Nur getrockneten Hopfen verwenden", nl: "Alleen gedroogde hop gebruiken" },
          { en: "Boiling hops for extra time", es: "Hervir lúpulo por tiempo extra", de: "Hopfen für zusätzliche Zeit kochen", nl: "Hop extra lang koken" }
        ],
        correct: 1,
        explanation: {
          en: "Dry hopping is the process of adding hops during or after fermentation to impart aroma and flavor without adding bitterness.",
          es: "El lupulado en seco es el proceso de agregar lúpulo durante o después de la fermentación para impartir aroma y sabor sin agregar amargor.",
          de: "Kalthopfung ist der Prozess, Hopfen während oder nach der Gärung hinzuzufügen, um Aroma und Geschmack zu verleihen, ohne Bitterkeit hinzuzufügen.",
          nl: "Droge hopping is het proces waarbij hop wordt toegevoegd tijdens of na fermentatie om aroma en smaak toe te voegen zonder bitterheid."
        }
      },
      {
        question: {
          en: "What is the purpose of a secondary fermentation?",
          es: "¿Cuál es el propósito de una fermentación secundaria?",
          de: "Was ist der Zweck einer Nachgärung?",
          nl: "Wat is het doel van een secundaire fermentatie?"
        },
        options: [
          { en: "To increase alcohol content", es: "Para aumentar el contenido de alcohol", de: "Um den Alkoholgehalt zu erhöhen", nl: "Om het alcoholgehalte te verhogen" },
          { en: "To clarify and condition the beer", es: "Para clarificar y acondicionar la cerveza", de: "Um das Bier zu klären und zu konditionieren", nl: "Om het bier te helderen en conditioneren" },
          { en: "To add more sugars", es: "Para agregar más azúcares", de: "Um mehr Zucker hinzuzufügen", nl: "Om meer suikers toe te voegen" },
          { en: "To kill remaining yeast", es: "Para matar la levadura restante", de: "Um verbleibende Hefe abzutöten", nl: "Om resterende gist te doden" }
        ],
        correct: 1,
        explanation: {
          en: "Secondary fermentation allows the beer to clarify as sediment settles, and provides additional conditioning time for flavor development.",
          es: "La fermentación secundaria permite que la cerveza se clarifique mientras el sedimento se asienta, y proporciona tiempo adicional de acondicionamiento para el desarrollo del sabor.",
          de: "Die Nachgärung ermöglicht es dem Bier zu klären, während sich Sediment absetzt, und bietet zusätzliche Konditionierungszeit für die Geschmacksentwicklung.",
          nl: "Secundaire fermentatie stelt het bier in staat te helderen terwijl sediment bezinkt, en biedt extra conditioneringstijd voor smaakontw​ikkeling."
        }
      },
      {
        question: {
          en: "What is a decoction mash?",
          es: "¿Qué es una maceración por decocción?",
          de: "Was ist ein Dekoktionsverfahren?",
          nl: "Wat is een decoctieproces?"
        },
        options: [
          { en: "Removing liquid from the mash", es: "Remover líquido del macerado", de: "Flüssigkeit aus der Maische entfernen", nl: "Vloeistof uit de maisch verwijderen" },
          { en: "Adding enzymes to the mash", es: "Agregar enzimas al macerado", de: "Enzyme zur Maische hinzufügen", nl: "Enzymen aan de maisch toevoegen" },
          { en: "Boiling part of the mash and returning it", es: "Hervir parte del macerado y devolverlo", de: "Teil der Maische kochen und zurückgeben", nl: "Een deel van de maisch koken en terugvoegen" },
          { en: "Cooling the mash rapidly", es: "Enfriar el macerado rápidamente", de: "Die Maische schnell kühlen", nl: "De maisch snel afkoelen" }
        ],
        correct: 2,
        explanation: {
          en: "Decoction mashing involves removing a portion of the mash, boiling it, and returning it to raise the temperature of the main mash.",
          es: "La maceración por decocción implica remover una porción del macerado, hervirla y devolverla para elevar la temperatura del macerado principal.",
          de: "Das Dekoktionsverfahren beinhaltet das Entfernen eines Teils der Maische, das Kochen und die Rückgabe, um die Temperatur der Hauptmaische zu erhöhen.",
          nl: "Decoctie maischen houdt in dat een deel van de maisch wordt weggenomen, gekookt en teruggebracht om de temperatuur van de hoofdmaisch te verhogen."
        }
      },
      {
        question: {
          en: "What is the difference between all-grain and extract brewing?",
          es: "¿Cuál es la diferencia entre la elaboración con todos los granos y la elaboración con extracto?",
          de: "Was ist der Unterschied zwischen Vollmaisch- und Extraktbrauen?",
          nl: "Wat is het verschil tussen all-grain en extract brouwen?"
        },
        options: [
          { en: "All-grain uses more hops", es: "Todos los granos usa más lúpulo", de: "Vollmaisch verwendet mehr Hopfen", nl: "All-grain gebruikt meer hop" },
          { en: "Extract brewing uses pre-made malt syrup", es: "La elaboración con extracto usa jarabe de malta pre-hecho", de: "Extraktbrauen verwendet vorgefertigten Malzsirup", nl: "Extract brouwen gebruikt vooraf gemaakte moutstroop" },
          { en: "All-grain requires less time", es: "Todos los granos requiere menos tiempo", de: "Vollmaisch benötigt weniger Zeit", nl: "All-grain vereist minder tijd" },
          { en: "Extract brewing produces stronger beer", es: "La elaboración con extracto produce cerveza más fuerte", de: "Extraktbrauen produziert stärkeres Bier", nl: "Extract brouwen produceert sterker bier" }
        ],
        correct: 1,
        explanation: {
          en: "Extract brewing uses pre-made malt extract syrup, while all-grain brewing starts with whole grains and requires mashing to convert starches to sugars.",
          es: "La elaboración con extracto usa jarabe de extracto de malta pre-hecho, mientras que la elaboración con todos los granos comienza con granos enteros y requiere maceración para convertir almidones en azúcares.",
          de: "Extraktbrauen verwendet vorgefertigten Malzextraktsirup, während Vollmaischbrauen mit ganzen Körnern beginnt und Maischen erfordert, um Stärke in Zucker umzuwandeln.",
          nl: "Extract brouwen gebruikt vooraf gemaakte moutextractstroop, terwijl all-grain brouwen begint met hele granen en maischen vereist om zetmeel om te zetten in suikers."
        }
      },
      {
        question: {
          en: "What is the purpose of using specialty malts?",
          es: "¿Cuál es el propósito de usar maltas especiales?",
          de: "Was ist der Zweck der Verwendung von Spezialmalzen?",
          nl: "Wat is het doel van het gebruik van specialiteitsmout?"
        },
        options: [
          { en: "To increase alcohol content only", es: "Solo para aumentar el contenido de alcohol", de: "Nur um den Alkoholgehalt zu erhöhen", nl: "Alleen om het alcoholgehalte te verhogen" },
          { en: "To add color, flavor, and aroma", es: "Para agregar color, sabor y aroma", de: "Um Farbe, Geschmack und Aroma hinzuzufügen", nl: "Om kleur, smaak en aroma toe te voegen" },
          { en: "To speed up fermentation", es: "Para acelerar la fermentación", de: "Um die Gärung zu beschleunigen", nl: "Om fermentatie te versnellen" },
          { en: "To preserve the beer longer", es: "Para conservar la cerveza más tiempo", de: "Um das Bier länger zu konservieren", nl: "Om het bier langer te bewaren" }
        ],
        correct: 1,
        explanation: {
          en: "Specialty malts are used to add specific colors, flavors, and aromas to beer, such as chocolate, caramel, or roasted characteristics.",
          es: "Las maltas especiales se usan para agregar colores, sabores y aromas específicos a la cerveza, como características de chocolate, caramelo o tostado.",
          de: "Spezialmalze werden verwendet, um spezifische Farben, Geschmäcker und Aromen zum Bier hinzuzufügen, wie Schokolade, Karamell oder geröstete Eigenschaften.",
          nl: "Specialiteitsmout wordt gebruikt om specifieke kleuren, smaken en aroma's aan bier toe te voegen, zoals chocolade, karamel of geroosterde eigenschappen."
        }
      },
      {
        question: {
          en: "What is vorlauf in brewing?",
          es: "¿Qué es el vorlauf en la elaboración?",
          de: "Was ist Vorlauf beim Brauen?",
          nl: "Wat is vorlauf bij het brouwen?"
        },
        options: [
          { en: "Adding hops during boiling", es: "Agregar lúpulo durante el hervido", de: "Hopfen während des Kochens hinzufügen", nl: "Hop toevoegen tijdens het koken" },
          { en: "Recirculating wort to clarify it", es: "Recircular el mosto para clarificarlo", de: "Würze rezirkulieren, um sie zu klären", nl: "Wort recirculeren om het te helderen" },
          { en: "Cooling the wort quickly", es: "Enfriar el mosto rápidamente", de: "Die Würze schnell kühlen", nl: "De wort snel afkoelen" },
          { en: "Testing the alcohol content", es: "Probar el contenido de alcohol", de: "Den Alkoholgehalt testen", nl: "Het alcoholgehalte testen" }
        ],
        correct: 1,
        explanation: {
          en: "Vorlauf is the process of recirculating the first runnings of wort through the grain bed to clarify it and remove particles before collection.",
          es: "El vorlauf es el proceso de recircular los primeros escurrimientos del mosto a través del lecho de grano para clarificarlo y remover partículas antes de la recolección.",
          de: "Vorlauf ist der Prozess der Rezirkulation der ersten Würzeabläufe durch das Kornbett, um sie zu klären und Partikel vor der Sammlung zu entfernen.",
          nl: "Vorlauf is het proces van het recirculeren van de eerste afloop van wort door het graanbed om het te helderen en deeltjes te verwijderen vóór verzameling."
        }
      },
      {
        question: {
          en: "What is the function of Irish moss in brewing?",
          es: "¿Cuál es la función del musgo irlandés en la elaboración?",
          de: "Was ist die Funktion von Irischem Moos beim Brauen?",
          nl: "Wat is de functie van Iers mos bij het brouwen?"
        },
        options: [
          { en: "To add flavor", es: "Para agregar sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" },
          { en: "To clarify the beer", es: "Para clarificar la cerveza", de: "Um das Bier zu klären", nl: "Om het bier te helderen" },
          { en: "To increase alcohol", es: "Para aumentar el alcohol", de: "Um Alkohol zu erhöhen", nl: "Om alcohol te verhogen" },
          { en: "To preserve the beer", es: "Para conservar la cerveza", de: "Um das Bier zu konservieren", nl: "Om het bier te bewaren" }
        ],
        correct: 1,
        explanation: {
          en: "Irish moss (carrageenan) is a clarifying agent that helps proteins coagulate and settle out, resulting in clearer beer.",
          es: "El musgo irlandés (carragenina) es un agente clarificante que ayuda a las proteínas a coagularse y asentarse, resultando en cerveza más clara.",
          de: "Irisches Moos (Carrageen) ist ein Klärmittel, das hilft, Proteine zu koagulieren und sich abzusetzen, was zu klarerem Bier führt.",
          nl: "Iers mos (carrageen) is een helderingsmiddel dat helpt eiwitten te laten stollen en bezinken, wat resulteert in helderder bier."
        }
      },
      {
        question: {
          en: "What is the purpose of a yeast starter?",
          es: "¿Cuál es el propósito de un iniciador de levadura?",
          de: "Was ist der Zweck einer Hefestartkultur?",
          nl: "Wat is het doel van een giststarter?"
        },
        options: [
          { en: "To flavor the beer", es: "Para saborizar la cerveza", de: "Um das Bier zu würzen", nl: "Om het bier van smaak te voorzien" },
          { en: "To increase yeast cell count", es: "Para aumentar el conteo de células de levadura", de: "Um die Hefezellzahl zu erhöhen", nl: "Om het aantal gistcellen te verhogen" },
          { en: "To test yeast viability", es: "Para probar la viabilidad de la levadura", de: "Um die Hefelebensfähigkeit zu testen", nl: "Om de levensvatbaarheid van gist te testen" },
          { en: "To purify the yeast", es: "Para purificar la levadura", de: "Um die Hefe zu reinigen", nl: "Om de gist te zuiveren" }
        ],
        correct: 1,
        explanation: {
          en: "A yeast starter is used to increase the number of viable yeast cells before pitching into the wort, ensuring healthy fermentation.",
          es: "Un iniciador de levadura se usa para aumentar el número de células de levadura viables antes de agregar al mosto, asegurando una fermentación saludable.",
          de: "Eine Hefestartkultur wird verwendet, um die Anzahl lebensfähiger Hefezellen vor der Zugabe zur Würze zu erhöhen und eine gesunde Gärung zu gewährleisten.",
          nl: "Een giststarter wordt gebruikt om het aantal levensvatbare gistcellen te verhogen voordat ze in de wort worden gedaan, om een gezonde fermentatie te waarborgen."
        }
      },
      {
        question: {
          en: "What is bottle conditioning?",
          es: "¿Qué es el acondicionamiento en botella?",
          de: "Was ist Flaschengärung?",
          nl: "Wat is flesnarijping?"
        },
        options: [
          { en: "Storing bottles at room temperature", es: "Almacenar botellas a temperatura ambiente", de: "Flaschen bei Raumtemperatur lagern", nl: "Flessen op kamertemperatuur bewaren" },
          { en: "Adding sugar for carbonation in bottles", es: "Agregar azúcar para carbonatación en botellas", de: "Zucker für Kohlensäure in Flaschen hinzufügen", nl: "Suiker toevoegen voor koolzuur in flessen" },
          { en: "Filtering beer before bottling", es: "Filtrar cerveza antes del embotellado", de: "Bier vor der Abfüllung filtern", nl: "Bier filteren voor het bottelen" },
          { en: "Aging beer in wooden bottles", es: "Envejecer cerveza en botellas de madera", de: "Bier in Holzflaschen reifen", nl: "Bier rijpen in houten flessen" }
        ],
        correct: 1,
        explanation: {
          en: "Bottle conditioning involves adding priming sugar to beer before bottling, allowing remaining yeast to ferment the sugar and create carbonation.",
          es: "El acondicionamiento en botella implica agregar azúcar de cebado a la cerveza antes del embotellado, permitiendo que la levadura restante fermente el azúcar y cree carbonatación.",
          de: "Flaschengärung beinhaltet das Hinzufügen von Speisezucker zum Bier vor der Abfüllung, wodurch verbleibende Hefe den Zucker fermentiert und Kohlensäure erzeugt.",
          nl: "Flesnarijping houdt in dat primingsuiker aan bier wordt toegevoegd voor het bottelen, waardoor resterende gist de suiker kan fermenteren en koolzuur creëert."
        }
      },
      {
        question: {
          en: "What is the cold break?",
          es: "¿Qué es la ruptura fría?",
          de: "Was ist der Kaltbruch?",
          nl: "Wat is de koude breuk?"
        },
        options: [
          { en: "Chilling wort rapidly", es: "Enfriar mosto rápidamente", de: "Würze schnell kühlen", nl: "Wort snel afkoelen" },
          { en: "Protein coagulation during cooling", es: "Coagulación de proteínas durante el enfriamiento", de: "Proteinkoagulation während des Kühlens", nl: "Eiwitcoagulatie tijdens afkoeling" },
          { en: "Adding ice to the fermenter", es: "Agregar hielo al fermentador", de: "Eis zum Fermenter hinzufügen", nl: "IJs toevoegen aan de fermenter" },
          { en: "Stopping fermentation", es: "Detener la fermentación", de: "Gärung stoppen", nl: "Fermentatie stoppen" }
        ],
        correct: 1,
        explanation: {
          en: "The cold break occurs when wort is rapidly cooled, causing proteins and tannins to coagulate and form visible particles that can be separated.",
          es: "La ruptura fría ocurre cuando el mosto se enfría rápidamente, causando que proteínas y taninos se coagulen y formen partículas visibles que pueden ser separadas.",
          de: "Der Kaltbruch tritt auf, wenn Würze schnell gekühlt wird, wodurch Proteine und Tannine koagulieren und sichtbare Partikel bilden, die getrennt werden können.",
          nl: "De koude breuk treedt op wanneer wort snel wordt afgekoeld, waardoor eiwitten en tannines stollen en zichtbare deeltjes vormen die kunnen worden gescheiden."
        }},
      {
        question: {
          en: "What is the role of water in beer production?",
          es: "¿Cuál es el papel del agua en la producción de cerveza?",
          de: "Welche Rolle spielt Wasser in der Bierproduktion?",
          nl: "Wat is de rol van water bij bierproductie?"
        },
        options: [
          { en: "It dilutes the beer", es: "Diluye la cerveza", de: "Es verdünnt das Bier", nl: "Het verdunt het bier" },
          { en: "It forms the majority of beer composition", es: "Forma la mayoría de la composición de la cerveza", de: "Es bildet den größten Teil der Bierzusammensetzung", nl: "Het vormt het grootste deel van de biersamenstelling" },
          { en: "It adds color", es: "Añade color", de: "Es fügt Farbe hinzu", nl: "Het voegt kleur toe" },
          { en: "It creates carbonation", es: "Crea carbonatación", de: "Es erzeugt Kohlensäure", nl: "Het creëert koolzuur" }
        ],
        correct: 1,
        explanation: {
          en: "Water makes up about 90-95% of beer and its mineral content significantly affects the final product taste and quality.",
          es: "El agua constituye aproximadamente el 90-95% de la cerveza y su contenido mineral afecta significativamente el sabor y la calidad del producto final.",
          de: "Wasser macht etwa 90-95% des Bieres aus und sein Mineralgehalt beeinflusst den Geschmack und die Qualität des Endprodukts erheblich.",
          nl: "Water vormt ongeveer 90-95% van bier en het mineraalgehalte beïnvloedt de smaak en kwaliteit van het eindproduct aanzienlijk."
        }
      },
      {
        question: {
          en: "What does IBU stand for in beer terminology?",
          es: "¿Qué significa IBU en la terminología cervecera?",
          de: "Wofür steht IBU in der Bierterminologie?",
          nl: "Waar staat IBU voor in biertermen?"
        },
        options: [
          { en: "International Beer Union", es: "Unión Internacional de Cerveza", de: "Internationale Bierunion", nl: "Internationale Bierunie" },
          { en: "International Bitterness Units", es: "Unidades Internacionales de Amargor", de: "Internationale Bitterkeitseinheiten", nl: "International Bitterness Units" },
          { en: "International Brewing Units", es: "Unidades Internacionales de Elaboración", de: "Internationale Braueinheiten", nl: "Internationale Brouwunits" },
          { en: "Independent Beer Union", es: "Unión de Cerveza Independiente", de: "Unabhängige Bierunion", nl: "Onafhankelijke Bierunie" }
        ],
        correct: 1,
        explanation: {
          en: "IBU stands for International Bitterness Units, a measurement scale for the bitterness of beer derived from hops.",
          es: "IBU significa Unidades Internacionales de Amargor, una escala de medición para el amargor de la cerveza derivada del lúpulo.",
          de: "IBU steht für Internationale Bitterkeitseinheiten, eine Messskala für die Bitterkeit von Bier, die vom Hopfen herrührt.",
          nl: "IBU staat voor International Bitterness Units, een meetschaal voor de bitterheid van bier afkomstig van hop."
        }
      },
      {
        question: {
          en: "What is the difference between ale and lager yeast fermentation temperatures?",
          es: "¿Cuál es la diferencia entre las temperaturas de fermentación de levadura ale y lager?",
          de: "Was ist der Unterschied zwischen Ale- und Lager-Hefe-Gärungstemperaturen?",
          nl: "Wat is het verschil tussen ale en lager gistfermentatietemperaturen?"
        },
        options: [
          { en: "Ales ferment warmer, lagers ferment cooler", es: "Las ales fermentan más cálido, las lagers más frío", de: "Ales gären wärmer, Lagers gären kühler", nl: "Ales fermenteren warmer, lagers fermenteren koeler" },
          { en: "Both ferment at the same temperature", es: "Ambas fermentan a la misma temperatura", de: "Beide gären bei derselben Temperatur", nl: "Beide fermenteren op dezelfde temperatuur" },
          { en: "Lagers ferment warmer, ales ferment cooler", es: "Las lagers fermentan más cálido, las ales más frío", de: "Lagers gären wärmer, Ales gären kühler", nl: "Lagers fermenteren warmer, ales fermenteren koeler" },
          { en: "Temperature does not matter", es: "La temperatura no importa", de: "Die Temperatur ist egal", nl: "Temperatuur maakt niet uit" }
        ],
        correct: 0,
        explanation: {
          en: "Ale yeast ferments at warmer temperatures (15-24°C), while lager yeast ferments at cooler temperatures (7-13°C), creating distinct flavor profiles.",
          es: "La levadura ale fermenta a temperaturas más cálidas (15-24°C), mientras que la levadura lager fermenta a temperaturas más frías (7-13°C), creando perfiles de sabor distintos.",
          de: "Ale-Hefe gärt bei wärmeren Temperaturen (15-24°C), während Lager-Hefe bei kühleren Temperaturen (7-13°C) gärt und unterschiedliche Geschmacksprofile erzeugt.",
          nl: "Ale-gist fermenteert bij warmere temperaturen (15-24°C), terwijl lager-gist fermenteert bij koelere temperaturen (7-13°C), wat onderscheidende smaakprofielen creëert."
        }
      },
      {
        question: {
          en: "What is the purpose of the boil in beer brewing?",
          es: "¿Cuál es el propósito del hervido en la elaboración de cerveza?",
          de: "Was ist der Zweck des Kochens beim Bierbrauen?",
          nl: "Wat is het doel van het koken bij bierbrouwen?"
        },
        options: [
          { en: "To add color only", es: "Solo para agregar color", de: "Nur um Farbe hinzuzufügen", nl: "Alleen om kleur toe te voegen" },
          { en: "To sterilize and extract hop compounds", es: "Para esterilizar y extraer compuestos del lúpulo", de: "Um zu sterilisieren und Hopfenverbindungen zu extrahieren", nl: "Om te steriliseren en hopverbindingen te extraheren" },
          { en: "To increase alcohol content", es: "Para aumentar el contenido de alcohol", de: "Um den Alkoholgehalt zu erhöhen", nl: "Om het alcoholgehalte te verhogen" },
          { en: "To add carbonation", es: "Para agregar carbonatación", de: "Um Kohlensäure hinzuzufügen", nl: "Om koolzuur toe te voegen" }
        ],
        correct: 1,
        explanation: {
          en: "The boil sterilizes the wort, extracts bittering compounds from hops, concentrates the wort, and drives off unwanted volatiles.",
          es: "El hervido esteriliza el mosto, extrae compuestos amargos del lúpulo, concentra el mosto y elimina volátiles no deseados.",
          de: "Das Kochen sterilisiert die Würze, extrahiert Bitterstoffe aus dem Hopfen, konzentriert die Würze und vertreibt unerwünschte flüchtige Stoffe.",
          nl: "Het koken steriliseert de wort, extraheert bittere verbindingen uit hop, concentreert de wort en verdrijft ongewenste vluchtige stoffen."
        }
      },
      {
        question: {
          en: "What is meant by original gravity in brewing?",
          es: "¿Qué se entiende por gravedad original en la elaboración?",
          de: "Was bedeutet Stammwürze beim Brauen?",
          nl: "Wat wordt bedoeld met oorspronkelijk soortelijk gewicht bij brouwen?"
        },
        options: [
          { en: "The weight of the brewing equipment", es: "El peso del equipo de elaboración", de: "Das Gewicht der Brauausrüstung", nl: "Het gewicht van de brouwapparatuur" },
          { en: "The density of wort before fermentation", es: "La densidad del mosto antes de la fermentación", de: "Die Dichte der Würze vor der Gärung", nl: "De dichtheid van wort voor fermentatie" },
          { en: "The pH level of water", es: "El nivel de pH del agua", de: "Der pH-Wert des Wassers", nl: "Het pH-niveau van water" },
          { en: "The temperature of fermentation", es: "La temperatura de fermentación", de: "Die Gärungstemperatur", nl: "De fermentatietemperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "Original gravity measures the density of wort before fermentation, indicating the amount of fermentable sugars present that will determine alcohol content.",
          es: "La gravedad original mide la densidad del mosto antes de la fermentación, indicando la cantidad de azúcares fermentables presentes que determinarán el contenido de alcohol.",
          de: "Die Stammwürze misst die Dichte der Würze vor der Gärung und zeigt die Menge an fermentierbaren Zuckern an, die den Alkoholgehalt bestimmen werden.",
          nl: "Oorspronkelijk soortelijk gewicht meet de dichtheid van wort voor fermentatie, wat de hoeveelheid fermenteerbare suikers aangeeft die het alcoholgehalte zal bepalen."
        }
      },
      {
        question: {
          en: "What is krausening in beer production?",
          es: "¿Qué es el krausening en la producción de cerveza?",
          de: "Was ist Kräusening in der Bierproduktion?",
          nl: "Wat is krausening bij bierproductie?"
        },
        options: [
          { en: "Adding spices to beer", es: "Agregar especias a la cerveza", de: "Gewürze zum Bier hinzufügen", nl: "Specerijen aan bier toevoegen" },
          { en: "Adding actively fermenting wort for carbonation", es: "Agregar mosto en fermentación activa para carbonatación", de: "Aktiv gärende Würze für Kohlensäure hinzufügen", nl: "Actief fermenterende wort toevoegen voor koolzuur" },
          { en: "Filtering the beer", es: "Filtrar la cerveza", de: "Das Bier filtern", nl: "Het bier filteren" },
          { en: "Aging in wooden barrels", es: "Envejecer en barricas de madera", de: "Reifung in Holzfässern", nl: "Rijpen in houten vaten" }
        ],
        correct: 1,
        explanation: {
          en: "Krausening involves adding a small amount of actively fermenting wort to finished beer for natural carbonation and conditioning.",
          es: "El krausening implica agregar una pequeña cantidad de mosto en fermentación activa a la cerveza terminada para carbonatación y acondicionamiento natural.",
          de: "Kräusening beinhaltet das Hinzufügen einer kleinen Menge aktiv gärender Würze zum fertigen Bier für natürliche Kohlensäure und Konditionierung.",
          nl: "Krausening houdt in dat een kleine hoeveelheid actief fermenterende wort aan afgewerkt bier wordt toegevoegd voor natuurlijke koolzuur en conditionering."
        }
      },
      {
        question: {
          en: "What does ABV measure in beer?",
          es: "¿Qué mide el ABV en la cerveza?",
          de: "Was misst ABV im Bier?",
          nl: "Wat meet ABV in bier?"
        },
        options: [
          { en: "Aroma and Bitterness Value", es: "Valor de Aroma y Amargor", de: "Aroma- und Bitterkeitswert", nl: "Aroma en Bitterheidswaarde" },
          { en: "Alcohol By Volume", es: "Alcohol por Volumen", de: "Alkohol nach Volumen", nl: "Alcohol By Volume" },
          { en: "Average Beer Value", es: "Valor Promedio de Cerveza", de: "Durchschnittlicher Bierwert", nl: "Gemiddelde Bierwaarde" },
          { en: "Absolute Beer Volume", es: "Volumen Absoluto de Cerveza", de: "Absolutes Biervolumen", nl: "Absoluut Biervolume" }
        ],
        correct: 1,
        explanation: {
          en: "ABV stands for Alcohol By Volume, measuring the percentage of alcohol content in beer.",
          es: "ABV significa Alcohol por Volumen, midiendo el porcentaje de contenido de alcohol en la cerveza.",
          de: "ABV steht für Alkohol nach Volumen und misst den Prozentsatz des Alkoholgehalts im Bier.",
          nl: "ABV staat voor Alcohol By Volume, het meten van het percentage alcoholgehalte in bier."
        }
      },
      {
        question: {
          en: "What are adjuncts in brewing?",
          es: "¿Qué son los adjuntos en la elaboración?",
          de: "Was sind Zusatzstoffe beim Brauen?",
          nl: "Wat zijn adjuncten bij het brouwen?"
        },
        options: [
          { en: "Additional brewing equipment", es: "Equipo de elaboración adicional", de: "Zusätzliche Brauausrüstung", nl: "Extra brouwapparatuur" },
          { en: "Unmalted grains or fermentable sugars", es: "Granos no malteados o azúcares fermentables", de: "Ungemälzte Körner oder fermentierbare Zucker", nl: "Niet-gemout graan of fermenteerbare suikers" },
          { en: "Cleaning chemicals", es: "Químicos de limpieza", de: "Reinigungschemikalien", nl: "Schoonmaakchemicaliën" },
          { en: "Different yeast strains", es: "Diferentes cepas de levadura", de: "Verschiedene Hefestämme", nl: "Verschillende giststammen" }
        ],
        correct: 1,
        explanation: {
          en: "Adjuncts are unmalted grains or other fermentable sugars added to beer as supplements to malted barley, such as corn, rice, or sugar.",
          es: "Los adjuntos son granos no malteados u otros azúcares fermentables agregados a la cerveza como suplementos a la cebada malteada, como maíz, arroz o azúcar.",
          de: "Zusatzstoffe sind ungemälzte Körner oder andere fermentierbare Zucker, die dem Bier als Ergänzung zu gemälzter Gerste hinzugefügt werden, wie Mais, Reis oder Zucker.",
          nl: "Adjuncten zijn niet-gemout graan of andere fermenteerbare suikers die aan bier worden toegevoegd als aanvulling op gemout gerst, zoals mais, rijst of suiker."
        }
      },
      {
        question: {
          en: "What is the function of finings in beer production?",
          es: "¿Cuál es la función de los clarificantes en la producción de cerveza?",
          de: "Was ist die Funktion von Schönungsmitteln in der Bierproduktion?",
          nl: "Wat is de functie van klaringsmiddelen bij bierproductie?"
        },
        options: [
          { en: "To add flavor", es: "Para agregar sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" },
          { en: "To clarify beer by removing particles", es: "Para clarificar la cerveza eliminando partículas", de: "Um Bier durch Entfernen von Partikeln zu klären", nl: "Om bier te helderen door deeltjes te verwijderen" },
          { en: "To increase carbonation", es: "Para aumentar la carbonatación", de: "Um die Kohlensäure zu erhöhen", nl: "Om koolzuur te verhogen" },
          { en: "To preserve the beer", es: "Para conservar la cerveza", de: "Um das Bier zu konservieren", nl: "Om het bier te bewaren" }
        ],
        correct: 1,
        explanation: {
          en: "Finings are clarifying agents added to beer to help proteins and yeast cells clump together and settle out, producing clearer beer.",
          es: "Los clarificantes son agentes clarificadores agregados a la cerveza para ayudar a que las proteínas y células de levadura se aglomeren y se asienten, produciendo cerveza más clara.",
          de: "Schönungsmittel sind Klärmittel, die dem Bier zugesetzt werden, um Proteine und Hefezellen zusammenzuballen und abzusetzen, wodurch klareres Bier entsteht.",
          nl: "Klaringsmiddelen zijn helderingsmiddelen die aan bier worden toegevoegd om eiwitten en gistcellen te laten samenklonteren en bezinken, wat helderder bier produceert."
        }
      },
      {
        question: {
          en: "What is attenuation in brewing?",
          es: "¿Qué es la atenuación en la elaboración?",
          de: "Was ist Vergärungsgrad beim Brauen?",
          nl: "Wat is attenuatie bij brouwen?"
        },
        options: [
          { en: "The reduction of sugars during fermentation", es: "La reducción de azúcares durante la fermentación", de: "Die Reduzierung von Zuckern während der Gärung", nl: "De vermindering van suikers tijdens fermentatie" },
          { en: "The addition of hops", es: "La adición de lúpulo", de: "Die Zugabe von Hopfen", nl: "De toevoeging van hop" },
          { en: "The cooling of wort", es: "El enfriamiento del mosto", de: "Das Kühlen der Würze", nl: "Het afkoelen van wort" },
          { en: "The filtration process", es: "El proceso de filtración", de: "Der Filtrationsprozess", nl: "Het filterproces" }
        ],
        correct: 0,
        explanation: {
          en: "Attenuation refers to the degree to which yeast converts fermentable sugars into alcohol and CO2, measured as the difference between original and final gravity.",
          es: "La atenuación se refiere al grado en que la levadura convierte azúcares fermentables en alcohol y CO2, medido como la diferencia entre la gravedad original y final.",
          de: "Vergärungsgrad bezieht sich auf den Grad, zu dem Hefe fermentierbare Zucker in Alkohol und CO2 umwandelt, gemessen als Differenz zwischen Stammwürze und Endvergärung.",
          nl: "Attenuatie verwijst naar de mate waarin gist fermenteerbare suikers omzet in alcohol en CO2, gemeten als het verschil tussen oorspronkelijk en finaal soortelijk gewicht."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
