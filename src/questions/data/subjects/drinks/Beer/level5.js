// Beer Quiz - Level 5
(function() {
  const level5 = {
    name: {
          "en": "Intermediate Brewing Techniques",
          "es": "Técnicas Intermedias de Elaboración",
          "de": "Fortgeschrittene Brautechniken",
          "nl": "Gevorderde Brouwtechnieken"
    },
    questions: [
      {
        question: {
                  "en": "What is dry hopping?",
                  "es": "¿Qué es el lupulado en seco?",
                  "de": "Was ist Kalthopfung?",
                  "nl": "Wat is droge hopping?"
        },
        options: [
        {
                  "en": "Adding hops during fermentation",
                  "es": "Agregar lúpulo durante la fermentación",
                  "de": "Hopfen während der Gärung hinzufügen",
                  "nl": "Hop toevoegen tijdens fermentatie"
        },
        {
                  "en": "Using dried hops only",
                  "es": "Usar solo lúpulo seco",
                  "de": "Nur getrockneten Hopfen verwenden",
                  "nl": "Alleen gedroogde hop gebruiken"
        },
        {
                  "en": "Boiling hops for extra time",
                  "es": "Hervir lúpulo por tiempo extra",
                  "de": "Hopfen für zusätzliche Zeit kochen",
                  "nl": "Hop extra lang koken"
        },
        {
                  "en": "Adding hops without water",
                  "es": "Agregar lúpulo sin agua",
                  "de": "Hopfen ohne Wasser hinzufügen",
                  "nl": "Hop toevoegen zonder water"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Dry hopping is the process of adding hops during or after fermentation to impart aroma and flavor without adding bitterness.",
                  "es": "El lupulado en seco es el proceso de agregar lúpulo durante o después de la fermentación para impartir aroma y sabor sin agregar amargor.",
                  "de": "Kalthopfung ist der Prozess, Hopfen während oder nach der Gärung hinzuzufügen, um Aroma und Geschmack zu verleihen, ohne Bitterkeit hinzuzufügen.",
                  "nl": "Droge hopping is het proces waarbij hop wordt toegevoegd tijdens of na fermentatie om aroma en smaak toe te voegen zonder bitterheid."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a secondary fermentation?",
                  "es": "¿Cuál es el propósito de una fermentación secundaria?",
                  "de": "Was ist der Zweck einer Nachgärung?",
                  "nl": "Wat is het doel van een secundaire fermentatie?"
        },
        options: [
        {
                  "en": "To add more sugars",
                  "es": "Para agregar más azúcares",
                  "de": "Um mehr Zucker hinzuzufügen",
                  "nl": "Om meer suikers toe te voegen"
        },
        {
                  "en": "To increase alcohol content",
                  "es": "Para aumentar el contenido de alcohol",
                  "de": "Um den Alkoholgehalt zu erhöhen",
                  "nl": "Om het alcoholgehalte te verhogen"
        },
        {
                  "en": "To clarify and condition the beer",
                  "es": "Para clarificar y acondicionar la cerveza",
                  "de": "Um das Bier zu klären und zu konditionieren",
                  "nl": "Om het bier te helderen en conditioneren"
        },
        {
                  "en": "To kill remaining yeast",
                  "es": "Para matar la levadura restante",
                  "de": "Um verbleibende Hefe abzutöten",
                  "nl": "Om resterende gist te doden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Secondary fermentation allows the beer to clarify as sediment settles, and provides additional conditioning time for flavor development.",
                  "es": "La fermentación secundaria permite que la cerveza se clarifique mientras el sedimento se asienta, y proporciona tiempo adicional de acondicionamiento para el desarrollo del sabor.",
                  "de": "Die Nachgärung ermöglicht es dem Bier zu klären, während sich Sediment absetzt, und bietet zusätzliche Konditionierungszeit für die Geschmacksentwicklung.",
                  "nl": "Secundaire fermentatie stelt het bier in staat te helderen terwijl sediment bezinkt, en biedt extra conditioneringstijd voor smaakontw​ikkeling."
        }
      },
      {
        question: {
                  "en": "What is a decoction mash?",
                  "es": "¿Qué es una maceración por decocción?",
                  "de": "Was ist ein Dekoktionsverfahren?",
                  "nl": "Wat is een decoctieproces?"
        },
        options: [
        {
                  "en": "Removing liquid from the mash",
                  "es": "Remover líquido del macerado",
                  "de": "Flüssigkeit aus der Maische entfernen",
                  "nl": "Vloeistof uit de maisch verwijderen"
        },
        {
                  "en": "Cooling the mash rapidly",
                  "es": "Enfriar el macerado rápidamente",
                  "de": "Die Maische schnell kühlen",
                  "nl": "De maisch snel afkoelen"
        },
        {
                  "en": "Boiling part of the mash and returning it",
                  "es": "Hervir parte del macerado y devolverlo",
                  "de": "Teil der Maische kochen und zurückgeben",
                  "nl": "Een deel van de maisch koken en terugvoegen"
        },
        {
                  "en": "Adding enzymes to the mash",
                  "es": "Agregar enzimas al macerado",
                  "de": "Enzyme zur Maische hinzufügen",
                  "nl": "Enzymen aan de maisch toevoegen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Decoction mashing involves removing a portion of the mash, boiling it, and returning it to raise the temperature of the main mash.",
                  "es": "La maceración por decocción implica remover una porción del macerado, hervirla y devolverla para elevar la temperatura del macerado principal.",
                  "de": "Das Dekoktionsverfahren beinhaltet das Entfernen eines Teils der Maische, das Kochen und die Rückgabe, um die Temperatur der Hauptmaische zu erhöhen.",
                  "nl": "Decoctie maischen houdt in dat een deel van de maisch wordt weggenomen, gekookt en teruggebracht om de temperatuur van de hoofdmaisch te verhogen."
        }
      },
      {
        question: {
                  "en": "What is the difference between all-grain and extract brewing?",
                  "es": "¿Cuál es la diferencia entre la elaboración con todos los granos y la elaboración con extracto?",
                  "de": "Was ist der Unterschied zwischen Vollmaisch- und Extraktbrauen?",
                  "nl": "Wat is het verschil tussen all-grain en extract brouwen?"
        },
        options: [
        {
                  "en": "All-grain requires less time",
                  "es": "Todos los granos requiere menos tiempo",
                  "de": "Vollmaisch benötigt weniger Zeit",
                  "nl": "All-grain vereist minder tijd"
        },
        {
                  "en": "Extract brewing uses pre-made malt syrup",
                  "es": "La elaboración con extracto usa jarabe de malta pre-hecho",
                  "de": "Extraktbrauen verwendet vorgefertigten Malzsirup",
                  "nl": "Extract brouwen gebruikt vooraf gemaakte moutstroop"
        },
        {
                  "en": "All-grain uses more hops",
                  "es": "Todos los granos usa más lúpulo",
                  "de": "Vollmaisch verwendet mehr Hopfen",
                  "nl": "All-grain gebruikt meer hop"
        },
        {
                  "en": "Extract brewing produces stronger beer",
                  "es": "La elaboración con extracto produce cerveza más fuerte",
                  "de": "Extraktbrauen produziert stärkeres Bier",
                  "nl": "Extract brouwen produceert sterker bier"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Extract brewing uses pre-made malt extract syrup, while all-grain brewing starts with whole grains and requires mashing to convert starches to sugars.",
                  "es": "La elaboración con extracto usa jarabe de extracto de malta pre-hecho, mientras que la elaboración con todos los granos comienza con granos enteros y requiere maceración para convertir almidones en azúcares.",
                  "de": "Extraktbrauen verwendet vorgefertigten Malzextraktsirup, während Vollmaischbrauen mit ganzen Körnern beginnt und Maischen erfordert, um Stärke in Zucker umzuwandeln.",
                  "nl": "Extract brouwen gebruikt vooraf gemaakte moutextractstroop, terwijl all-grain brouwen begint met hele granen en maischen vereist om zetmeel om te zetten in suikers."
        }
      },
      {
        question: {
                  "en": "What is the purpose of using specialty malts?",
                  "es": "¿Cuál es el propósito de usar maltas especiales?",
                  "de": "Was ist der Zweck der Verwendung von Spezialmalzen?",
                  "nl": "Wat is het doel van het gebruik van specialiteitsmout?"
        },
        options: [
        {
                  "en": "To preserve the beer longer",
                  "es": "Para conservar la cerveza más tiempo",
                  "de": "Um das Bier länger zu konservieren",
                  "nl": "Om het bier langer te bewaren"
        },
        {
                  "en": "To speed up fermentation",
                  "es": "Para acelerar la fermentación",
                  "de": "Um die Gärung zu beschleunigen",
                  "nl": "Om fermentatie te versnellen"
        },
        {
                  "en": "To add color, flavor, and aroma",
                  "es": "Para agregar color, sabor y aroma",
                  "de": "Um Farbe, Geschmack und Aroma hinzuzufügen",
                  "nl": "Om kleur, smaak en aroma toe te voegen"
        },
        {
                  "en": "To increase alcohol content only",
                  "es": "Solo para aumentar el contenido de alcohol",
                  "de": "Nur um den Alkoholgehalt zu erhöhen",
                  "nl": "Alleen om het alcoholgehalte te verhogen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Specialty malts are used to add specific colors, flavors, and aromas to beer, such as chocolate, caramel, or roasted characteristics.",
                  "es": "Las maltas especiales se usan para agregar colores, sabores y aromas específicos a la cerveza, como características de chocolate, caramelo o tostado.",
                  "de": "Spezialmalze werden verwendet, um spezifische Farben, Geschmäcker und Aromen zum Bier hinzuzufügen, wie Schokolade, Karamell oder geröstete Eigenschaften.",
                  "nl": "Specialiteitsmout wordt gebruikt om specifieke kleuren, smaken en aroma's aan bier toe te voegen, zoals chocolade, karamel of geroosterde eigenschappen."
        }
      },
      {
        question: {
                  "en": "What is vorlauf in brewing?",
                  "es": "¿Qué es el vorlauf en la elaboración?",
                  "de": "Was ist Vorlauf beim Brauen?",
                  "nl": "Wat is vorlauf bij het brouwen?"
        },
        options: [
        {
                  "en": "Testing the alcohol content",
                  "es": "Probar el contenido de alcohol",
                  "de": "Den Alkoholgehalt testen",
                  "nl": "Het alcoholgehalte testen"
        },
        {
                  "en": "Adding hops during boiling",
                  "es": "Agregar lúpulo durante el hervido",
                  "de": "Hopfen während des Kochens hinzufügen",
                  "nl": "Hop toevoegen tijdens het koken"
        },
        {
                  "en": "Cooling the wort quickly",
                  "es": "Enfriar el mosto rápidamente",
                  "de": "Die Würze schnell kühlen",
                  "nl": "De wort snel afkoelen"
        },
        {
                  "en": "Recirculating wort to clarify it",
                  "es": "Recircular el mosto para clarificarlo",
                  "de": "Würze rezirkulieren, um sie zu klären",
                  "nl": "Wort recirculeren om het te helderen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Vorlauf is the process of recirculating the first runnings of wort through the grain bed to clarify it and remove particles before collection.",
                  "es": "El vorlauf es el proceso de recircular los primeros escurrimientos del mosto a través del lecho de grano para clarificarlo y remover partículas antes de la recolección.",
                  "de": "Vorlauf ist der Prozess der Rezirkulation der ersten Würzeabläufe durch das Kornbett, um sie zu klären und Partikel vor der Sammlung zu entfernen.",
                  "nl": "Vorlauf is het proces van het recirculeren van de eerste afloop van wort door het graanbed om het te helderen en deeltjes te verwijderen vóór verzameling."
        }
      },
      {
        question: {
                  "en": "What is the function of Irish moss in brewing?",
                  "es": "¿Cuál es la función del musgo irlandés en la elaboración?",
                  "de": "Was ist die Funktion von Irischem Moos beim Brauen?",
                  "nl": "Wat is de functie van Iers mos bij het brouwen?"
        },
        options: [
        {
                  "en": "To clarify the beer",
                  "es": "Para clarificar la cerveza",
                  "de": "Um das Bier zu klären",
                  "nl": "Om het bier te helderen"
        },
        {
                  "en": "To add flavor",
                  "es": "Para agregar sabor",
                  "de": "Um Geschmack hinzuzufügen",
                  "nl": "Om smaak toe te voegen"
        },
        {
                  "en": "To increase alcohol",
                  "es": "Para aumentar el alcohol",
                  "de": "Um Alkohol zu erhöhen",
                  "nl": "Om alcohol te verhogen"
        },
        {
                  "en": "To preserve the beer",
                  "es": "Para conservar la cerveza",
                  "de": "Um das Bier zu konservieren",
                  "nl": "Om het bier te bewaren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Irish moss (carrageenan) is a clarifying agent that helps proteins coagulate and settle out, resulting in clearer beer.",
                  "es": "El musgo irlandés (carragenina) es un agente clarificante que ayuda a las proteínas a coagularse y asentarse, resultando en cerveza más clara.",
                  "de": "Irisches Moos (Carrageen) ist ein Klärmittel, das hilft, Proteine zu koagulieren und sich abzusetzen, was zu klarerem Bier führt.",
                  "nl": "Iers mos (carrageen) is een helderingsmiddel dat helpt eiwitten te laten stollen en bezinken, wat resulteert in helderder bier."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a yeast starter?",
                  "es": "¿Cuál es el propósito de un iniciador de levadura?",
                  "de": "Was ist der Zweck einer Hefestartkultur?",
                  "nl": "Wat is het doel van een giststarter?"
        },
        options: [
        {
                  "en": "To flavor the beer",
                  "es": "Para saborizar la cerveza",
                  "de": "Um das Bier zu würzen",
                  "nl": "Om het bier van smaak te voorzien"
        },
        {
                  "en": "To test yeast viability",
                  "es": "Para probar la viabilidad de la levadura",
                  "de": "Um die Hefelebensfähigkeit zu testen",
                  "nl": "Om de levensvatbaarheid van gist te testen"
        },
        {
                  "en": "To purify the yeast",
                  "es": "Para purificar la levadura",
                  "de": "Um die Hefe zu reinigen",
                  "nl": "Om de gist te zuiveren"
        },
        {
                  "en": "To increase yeast cell count",
                  "es": "Para aumentar el conteo de células de levadura",
                  "de": "Um die Hefezellzahl zu erhöhen",
                  "nl": "Om het aantal gistcellen te verhogen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A yeast starter is used to increase the number of viable yeast cells before pitching into the wort, ensuring healthy fermentation.",
                  "es": "Un iniciador de levadura se usa para aumentar el número de células de levadura viables antes de agregar al mosto, asegurando una fermentación saludable.",
                  "de": "Eine Hefestartkultur wird verwendet, um die Anzahl lebensfähiger Hefezellen vor der Zugabe zur Würze zu erhöhen und eine gesunde Gärung zu gewährleisten.",
                  "nl": "Een giststarter wordt gebruikt om het aantal levensvatbare gistcellen te verhogen voordat ze in de wort worden gedaan, om een gezonde fermentatie te waarborgen."
        }
      },
      {
        question: {
                  "en": "What is bottle conditioning?",
                  "es": "¿Qué es el acondicionamiento en botella?",
                  "de": "Was ist Flaschengärung?",
                  "nl": "Wat is flesnarijping?"
        },
        options: [
        {
                  "en": "Aging beer in wooden bottles",
                  "es": "Envejecer cerveza en botellas de madera",
                  "de": "Bier in Holzflaschen reifen",
                  "nl": "Bier rijpen in houten flessen"
        },
        {
                  "en": "Adding sugar for carbonation in bottles",
                  "es": "Agregar azúcar para carbonatación en botellas",
                  "de": "Zucker für Kohlensäure in Flaschen hinzufügen",
                  "nl": "Suiker toevoegen voor koolzuur in flessen"
        },
        {
                  "en": "Filtering beer before bottling",
                  "es": "Filtrar cerveza antes del embotellado",
                  "de": "Bier vor der Abfüllung filtern",
                  "nl": "Bier filteren voor het bottelen"
        },
        {
                  "en": "Storing bottles at room temperature",
                  "es": "Almacenar botellas a temperatura ambiente",
                  "de": "Flaschen bei Raumtemperatur lagern",
                  "nl": "Flessen op kamertemperatuur bewaren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Bottle conditioning involves adding priming sugar to beer before bottling, allowing remaining yeast to ferment the sugar and create carbonation.",
                  "es": "El acondicionamiento en botella implica agregar azúcar de cebado a la cerveza antes del embotellado, permitiendo que la levadura restante fermente el azúcar y cree carbonatación.",
                  "de": "Flaschengärung beinhaltet das Hinzufügen von Speisezucker zum Bier vor der Abfüllung, wodurch verbleibende Hefe den Zucker fermentiert und Kohlensäure erzeugt.",
                  "nl": "Flesnarijping houdt in dat primingsuiker aan bier wordt toegevoegd voor het bottelen, waardoor resterende gist de suiker kan fermenteren en koolzuur creëert."
        }
      },
      {
        question: {
                  "en": "What is the cold break?",
                  "es": "¿Qué es la ruptura fría?",
                  "de": "Was ist der Kaltbruch?",
                  "nl": "Wat is de koude breuk?"
        },
        options: [
        {
                  "en": "Protein coagulation during cooling",
                  "es": "Coagulación de proteínas durante el enfriamiento",
                  "de": "Proteinkoagulation während des Kühlens",
                  "nl": "Eiwitcoagulatie tijdens afkoeling"
        },
        {
                  "en": "Adding ice to the fermenter",
                  "es": "Agregar hielo al fermentador",
                  "de": "Eis zum Fermenter hinzufügen",
                  "nl": "IJs toevoegen aan de fermenter"
        },
        {
                  "en": "Chilling wort rapidly",
                  "es": "Enfriar mosto rápidamente",
                  "de": "Würze schnell kühlen",
                  "nl": "Wort snel afkoelen"
        },
        {
                  "en": "Stopping fermentation",
                  "es": "Detener la fermentación",
                  "de": "Gärung stoppen",
                  "nl": "Fermentatie stoppen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The cold break occurs when wort is rapidly cooled, causing proteins and tannins to coagulate and form visible particles that can be separated.",
                  "es": "La ruptura fría ocurre cuando el mosto se enfría rápidamente, causando que proteínas y taninos se coagulen y formen partículas visibles que pueden ser separadas.",
                  "de": "Der Kaltbruch tritt auf, wenn Würze schnell gekühlt wird, wodurch Proteine und Tannine koagulieren und sichtbare Partikel bilden, die getrennt werden können.",
                  "nl": "De koude breuk treedt op wanneer wort snel wordt afgekoeld, waardoor eiwitten en tannines stollen en zichtbare deeltjes vormen die kunnen worden gescheiden."
        }
      },
      {
        question: {
                  "en": "What is the role of water in beer production?",
                  "es": "¿Cuál es el papel del agua en la producción de cerveza?",
                  "de": "Welche Rolle spielt Wasser in der Bierproduktion?",
                  "nl": "Wat is de rol van water bij bierproductie?"
        },
        options: [
        {
                  "en": "It forms the majority of beer composition",
                  "es": "Forma la mayoría de la composición de la cerveza",
                  "de": "Es bildet den größten Teil der Bierzusammensetzung",
                  "nl": "Het vormt het grootste deel van de biersamenstelling"
        },
        {
                  "en": "It creates carbonation",
                  "es": "Crea carbonatación",
                  "de": "Es erzeugt Kohlensäure",
                  "nl": "Het creëert koolzuur"
        },
        {
                  "en": "It adds color",
                  "es": "Añade color",
                  "de": "Es fügt Farbe hinzu",
                  "nl": "Het voegt kleur toe"
        },
        {
                  "en": "It dilutes the beer",
                  "es": "Diluye la cerveza",
                  "de": "Es verdünnt das Bier",
                  "nl": "Het verdunt het bier"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Water makes up about 90-95% of beer and its mineral content significantly affects the final product taste and quality.",
                  "es": "El agua constituye aproximadamente el 90-95% de la cerveza y su contenido mineral afecta significativamente el sabor y la calidad del producto final.",
                  "de": "Wasser macht etwa 90-95% des Bieres aus und sein Mineralgehalt beeinflusst den Geschmack und die Qualität des Endprodukts erheblich.",
                  "nl": "Water vormt ongeveer 90-95% van bier en het mineraalgehalte beïnvloedt de smaak en kwaliteit van het eindproduct aanzienlijk."
        }
      },
      {
        question: {
                  "en": "What does IBU stand for in beer terminology?",
                  "es": "¿Qué significa IBU en la terminología cervecera?",
                  "de": "Wofür steht IBU in der Bierterminologie?",
                  "nl": "Waar staat IBU voor in biertermen?"
        },
        options: [
        {
                  "en": "International Bitterness Units",
                  "es": "Unidades Internacionales de Amargor",
                  "de": "Internationale Bitterkeitseinheiten",
                  "nl": "International Bitterness Units"
        },
        {
                  "en": "International Beer Union",
                  "es": "Unión Internacional de Cerveza",
                  "de": "Internationale Bierunion",
                  "nl": "Internationale Bierunie"
        },
        {
                  "en": "International Brewing Units",
                  "es": "Unidades Internacionales de Elaboración",
                  "de": "Internationale Braueinheiten",
                  "nl": "Internationale Brouwunits"
        },
        {
                  "en": "Independent Beer Union",
                  "es": "Unión de Cerveza Independiente",
                  "de": "Unabhängige Bierunion",
                  "nl": "Onafhankelijke Bierunie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "IBU stands for International Bitterness Units, a measurement scale for the bitterness of beer derived from hops.",
                  "es": "IBU significa Unidades Internacionales de Amargor, una escala de medición para el amargor de la cerveza derivada del lúpulo.",
                  "de": "IBU steht für Internationale Bitterkeitseinheiten, eine Messskala für die Bitterkeit von Bier, die vom Hopfen herrührt.",
                  "nl": "IBU staat voor International Bitterness Units, een meetschaal voor de bitterheid van bier afkomstig van hop."
        }
      },
      {
        question: {
                  "en": "What is the difference between ale and lager yeast fermentation temperatures?",
                  "es": "¿Cuál es la diferencia entre las temperaturas de fermentación de levadura ale y lager?",
                  "de": "Was ist der Unterschied zwischen Ale- und Lager-Hefe-Gärungstemperaturen?",
                  "nl": "Wat is het verschil tussen ale en lager gistfermentatietemperaturen?"
        },
        options: [
        {
                  "en": "Lagers ferment warmer, ales ferment cooler",
                  "es": "Las lagers fermentan más cálido, las ales más frío",
                  "de": "Lagers gären wärmer, Ales gären kühler",
                  "nl": "Lagers fermenteren warmer, ales fermenteren koeler"
        },
        {
                  "en": "Temperature does not matter",
                  "es": "La temperatura no importa",
                  "de": "Die Temperatur ist egal",
                  "nl": "Temperatuur maakt niet uit"
        },
        {
                  "en": "Ales ferment warmer, lagers ferment cooler",
                  "es": "Las ales fermentan más cálido, las lagers más frío",
                  "de": "Ales gären wärmer, Lagers gären kühler",
                  "nl": "Ales fermenteren warmer, lagers fermenteren koeler"
        },
        {
                  "en": "Both ferment at the same temperature",
                  "es": "Ambas fermentan a la misma temperatura",
                  "de": "Beide gären bei derselben Temperatur",
                  "nl": "Beide fermenteren op dezelfde temperatuur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Ale yeast ferments at warmer temperatures (15-24°C), while lager yeast ferments at cooler temperatures (7-13°C), creating distinct flavor profiles.",
                  "es": "La levadura ale fermenta a temperaturas más cálidas (15-24°C), mientras que la levadura lager fermenta a temperaturas más frías (7-13°C), creando perfiles de sabor distintos.",
                  "de": "Ale-Hefe gärt bei wärmeren Temperaturen (15-24°C), während Lager-Hefe bei kühleren Temperaturen (7-13°C) gärt und unterschiedliche Geschmacksprofile erzeugt.",
                  "nl": "Ale-gist fermenteert bij warmere temperaturen (15-24°C), terwijl lager-gist fermenteert bij koelere temperaturen (7-13°C), wat onderscheidende smaakprofielen creëert."
        }
      },
      {
        question: {
                  "en": "What is the purpose of the boil in beer brewing?",
                  "es": "¿Cuál es el propósito del hervido en la elaboración de cerveza?",
                  "de": "Was ist der Zweck des Kochens beim Bierbrauen?",
                  "nl": "Wat is het doel van het koken bij bierbrouwen?"
        },
        options: [
        {
                  "en": "To increase alcohol content",
                  "es": "Para aumentar el contenido de alcohol",
                  "de": "Um den Alkoholgehalt zu erhöhen",
                  "nl": "Om het alcoholgehalte te verhogen"
        },
        {
                  "en": "To sterilize and extract hop compounds",
                  "es": "Para esterilizar y extraer compuestos del lúpulo",
                  "de": "Um zu sterilisieren und Hopfenverbindungen zu extrahieren",
                  "nl": "Om te steriliseren en hopverbindingen te extraheren"
        },
        {
                  "en": "To add color only",
                  "es": "Solo para agregar color",
                  "de": "Nur um Farbe hinzuzufügen",
                  "nl": "Alleen om kleur toe te voegen"
        },
        {
                  "en": "To add carbonation",
                  "es": "Para agregar carbonatación",
                  "de": "Um Kohlensäure hinzuzufügen",
                  "nl": "Om koolzuur toe te voegen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The boil sterilizes the wort, extracts bittering compounds from hops, concentrates the wort, and drives off unwanted volatiles.",
                  "es": "El hervido esteriliza el mosto, extrae compuestos amargos del lúpulo, concentra el mosto y elimina volátiles no deseados.",
                  "de": "Das Kochen sterilisiert die Würze, extrahiert Bitterstoffe aus dem Hopfen, konzentriert die Würze und vertreibt unerwünschte flüchtige Stoffe.",
                  "nl": "Het koken steriliseert de wort, extraheert bittere verbindingen uit hop, concentreert de wort en verdrijft ongewenste vluchtige stoffen."
        }
      },
      {
        question: {
                  "en": "What is meant by original gravity in brewing?",
                  "es": "¿Qué se entiende por gravedad original en la elaboración?",
                  "de": "Was bedeutet Stammwürze beim Brauen?",
                  "nl": "Wat wordt bedoeld met oorspronkelijk soortelijk gewicht bij brouwen?"
        },
        options: [
        {
                  "en": "The temperature of fermentation",
                  "es": "La temperatura de fermentación",
                  "de": "Die Gärungstemperatur",
                  "nl": "De fermentatietemperatuur"
        },
        {
                  "en": "The weight of the brewing equipment",
                  "es": "El peso del equipo de elaboración",
                  "de": "Das Gewicht der Brauausrüstung",
                  "nl": "Het gewicht van de brouwapparatuur"
        },
        {
                  "en": "The pH level of water",
                  "es": "El nivel de pH del agua",
                  "de": "Der pH-Wert des Wassers",
                  "nl": "Het pH-niveau van water"
        },
        {
                  "en": "The density of wort before fermentation",
                  "es": "La densidad del mosto antes de la fermentación",
                  "de": "Die Dichte der Würze vor der Gärung",
                  "nl": "De dichtheid van wort voor fermentatie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Original gravity measures the density of wort before fermentation, indicating the amount of fermentable sugars present that will determine alcohol content.",
                  "es": "La gravedad original mide la densidad del mosto antes de la fermentación, indicando la cantidad de azúcares fermentables presentes que determinarán el contenido de alcohol.",
                  "de": "Die Stammwürze misst die Dichte der Würze vor der Gärung und zeigt die Menge an fermentierbaren Zuckern an, die den Alkoholgehalt bestimmen werden.",
                  "nl": "Oorspronkelijk soortelijk gewicht meet de dichtheid van wort voor fermentatie, wat de hoeveelheid fermenteerbare suikers aangeeft die het alcoholgehalte zal bepalen."
        }
      },
      {
        question: {
                  "en": "What is krausening in beer production?",
                  "es": "¿Qué es el krausening en la producción de cerveza?",
                  "de": "Was ist Kräusening in der Bierproduktion?",
                  "nl": "Wat is krausening bij bierproductie?"
        },
        options: [
        {
                  "en": "Adding spices to beer",
                  "es": "Agregar especias a la cerveza",
                  "de": "Gewürze zum Bier hinzufügen",
                  "nl": "Specerijen aan bier toevoegen"
        },
        {
                  "en": "Adding actively fermenting wort for carbonation",
                  "es": "Agregar mosto en fermentación activa para carbonatación",
                  "de": "Aktiv gärende Würze für Kohlensäure hinzufügen",
                  "nl": "Actief fermenterende wort toevoegen voor koolzuur"
        },
        {
                  "en": "Filtering the beer",
                  "es": "Filtrar la cerveza",
                  "de": "Das Bier filtern",
                  "nl": "Het bier filteren"
        },
        {
                  "en": "Aging in wooden barrels",
                  "es": "Envejecer en barricas de madera",
                  "de": "Reifung in Holzfässern",
                  "nl": "Rijpen in houten vaten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Krausening involves adding a small amount of actively fermenting wort to finished beer for natural carbonation and conditioning.",
                  "es": "El krausening implica agregar una pequeña cantidad de mosto en fermentación activa a la cerveza terminada para carbonatación y acondicionamiento natural.",
                  "de": "Kräusening beinhaltet das Hinzufügen einer kleinen Menge aktiv gärender Würze zum fertigen Bier für natürliche Kohlensäure und Konditionierung.",
                  "nl": "Krausening houdt in dat een kleine hoeveelheid actief fermenterende wort aan afgewerkt bier wordt toegevoegd voor natuurlijke koolzuur en conditionering."
        }
      },
      {
        question: {
                  "en": "What does ABV measure in beer?",
                  "es": "¿Qué mide el ABV en la cerveza?",
                  "de": "Was misst ABV im Bier?",
                  "nl": "Wat meet ABV in bier?"
        },
        options: [
        {
                  "en": "Absolute Beer Volume",
                  "es": "Volumen Absoluto de Cerveza",
                  "de": "Absolutes Biervolumen",
                  "nl": "Absoluut Biervolume"
        },
        {
                  "en": "Alcohol By Volume",
                  "es": "Alcohol por Volumen",
                  "de": "Alkohol nach Volumen",
                  "nl": "Alcohol By Volume"
        },
        {
                  "en": "Aroma and Bitterness Value",
                  "es": "Valor de Aroma y Amargor",
                  "de": "Aroma- und Bitterkeitswert",
                  "nl": "Aroma en Bitterheidswaarde"
        },
        {
                  "en": "Average Beer Value",
                  "es": "Valor Promedio de Cerveza",
                  "de": "Durchschnittlicher Bierwert",
                  "nl": "Gemiddelde Bierwaarde"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "ABV stands for Alcohol By Volume, measuring the percentage of alcohol content in beer.",
                  "es": "ABV significa Alcohol por Volumen, midiendo el porcentaje de contenido de alcohol en la cerveza.",
                  "de": "ABV steht für Alkohol nach Volumen und misst den Prozentsatz des Alkoholgehalts im Bier.",
                  "nl": "ABV staat voor Alcohol By Volume, het meten van het percentage alcoholgehalte in bier."
        }
      },
      {
        question: {
                  "en": "What are adjuncts in brewing?",
                  "es": "¿Qué son los adjuntos en la elaboración?",
                  "de": "Was sind Zusatzstoffe beim Brauen?",
                  "nl": "Wat zijn adjuncten bij het brouwen?"
        },
        options: [
        {
                  "en": "Additional brewing equipment",
                  "es": "Equipo de elaboración adicional",
                  "de": "Zusätzliche Brauausrüstung",
                  "nl": "Extra brouwapparatuur"
        },
        {
                  "en": "Different yeast strains",
                  "es": "Diferentes cepas de levadura",
                  "de": "Verschiedene Hefestämme",
                  "nl": "Verschillende giststammen"
        },
        {
                  "en": "Unmalted grains or fermentable sugars",
                  "es": "Granos no malteados o azúcares fermentables",
                  "de": "Ungemälzte Körner oder fermentierbare Zucker",
                  "nl": "Niet-gemout graan of fermenteerbare suikers"
        },
        {
                  "en": "Cleaning chemicals",
                  "es": "Químicos de limpieza",
                  "de": "Reinigungschemikalien",
                  "nl": "Schoonmaakchemicaliën"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Adjuncts are unmalted grains or other fermentable sugars added to beer as supplements to malted barley, such as corn, rice, or sugar.",
                  "es": "Los adjuntos son granos no malteados u otros azúcares fermentables agregados a la cerveza como suplementos a la cebada malteada, como maíz, arroz o azúcar.",
                  "de": "Zusatzstoffe sind ungemälzte Körner oder andere fermentierbare Zucker, die dem Bier als Ergänzung zu gemälzter Gerste hinzugefügt werden, wie Mais, Reis oder Zucker.",
                  "nl": "Adjuncten zijn niet-gemout graan of andere fermenteerbare suikers die aan bier worden toegevoegd als aanvulling op gemout gerst, zoals mais, rijst of suiker."
        }
      },
      {
        question: {
                  "en": "What is the function of finings in beer production?",
                  "es": "¿Cuál es la función de los clarificantes en la producción de cerveza?",
                  "de": "Was ist die Funktion von Schönungsmitteln in der Bierproduktion?",
                  "nl": "Wat is de functie van klaringsmiddelen bij bierproductie?"
        },
        options: [
        {
                  "en": "To increase carbonation",
                  "es": "Para aumentar la carbonatación",
                  "de": "Um die Kohlensäure zu erhöhen",
                  "nl": "Om koolzuur te verhogen"
        },
        {
                  "en": "To clarify beer by removing particles",
                  "es": "Para clarificar la cerveza eliminando partículas",
                  "de": "Um Bier durch Entfernen von Partikeln zu klären",
                  "nl": "Om bier te helderen door deeltjes te verwijderen"
        },
        {
                  "en": "To add flavor",
                  "es": "Para agregar sabor",
                  "de": "Um Geschmack hinzuzufügen",
                  "nl": "Om smaak toe te voegen"
        },
        {
                  "en": "To preserve the beer",
                  "es": "Para conservar la cerveza",
                  "de": "Um das Bier zu konservieren",
                  "nl": "Om het bier te bewaren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Finings are clarifying agents added to beer to help proteins and yeast cells clump together and settle out, producing clearer beer.",
                  "es": "Los clarificantes son agentes clarificadores agregados a la cerveza para ayudar a que las proteínas y células de levadura se aglomeren y se asienten, produciendo cerveza más clara.",
                  "de": "Schönungsmittel sind Klärmittel, die dem Bier zugesetzt werden, um Proteine und Hefezellen zusammenzuballen und abzusetzen, wodurch klareres Bier entsteht.",
                  "nl": "Klaringsmiddelen zijn helderingsmiddelen die aan bier worden toegevoegd om eiwitten en gistcellen te laten samenklonteren en bezinken, wat helderder bier produceert."
        }
      },
      {
        question: {
                  "en": "What is attenuation in brewing?",
                  "es": "¿Qué es la atenuación en la elaboración?",
                  "de": "Was ist Vergärungsgrad beim Brauen?",
                  "nl": "Wat is attenuatie bij brouwen?"
        },
        options: [
        {
                  "en": "The addition of hops",
                  "es": "La adición de lúpulo",
                  "de": "Die Zugabe von Hopfen",
                  "nl": "De toevoeging van hop"
        },
        {
                  "en": "The reduction of sugars during fermentation",
                  "es": "La reducción de azúcares durante la fermentación",
                  "de": "Die Reduzierung von Zuckern während der Gärung",
                  "nl": "De vermindering van suikers tijdens fermentatie"
        },
        {
                  "en": "The cooling of wort",
                  "es": "El enfriamiento del mosto",
                  "de": "Das Kühlen der Würze",
                  "nl": "Het afkoelen van wort"
        },
        {
                  "en": "The filtration process",
                  "es": "El proceso de filtración",
                  "de": "Der Filtrationsprozess",
                  "nl": "Het filterproces"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Attenuation refers to the degree to which yeast converts fermentable sugars into alcohol and CO2, measured as the difference between original and final gravity.",
                  "es": "La atenuación se refiere al grado en que la levadura convierte azúcares fermentables en alcohol y CO2, medido como la diferencia entre la gravedad original y final.",
                  "de": "Vergärungsgrad bezieht sich auf den Grad, zu dem Hefe fermentierbare Zucker in Alkohol und CO2 umwandelt, gemessen als Differenz zwischen Stammwürze und Endvergärung.",
                  "nl": "Attenuatie verwijst naar de mate waarin gist fermenteerbare suikers omzet in alcohol en CO2, gemeten als het verschil tussen oorspronkelijk en finaal soortelijk gewicht."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a mash tun?",
                  "es": "¿Cuál es el propósito de un macerador?",
                  "de": "Was ist der Zweck eines Maischebottichs?",
                  "nl": "Wat is het doel van een maischketel?"
        },
        options: [
        {
                  "en": "To ferment the beer",
                  "es": "Para fermentar la cerveza",
                  "de": "Um das Bier zu gären",
                  "nl": "Om het bier te fermenteren"
        },
        {
                  "en": "To convert starches to sugars",
                  "es": "Para convertir almidones en azúcares",
                  "de": "Um Stärke in Zucker umzuwandeln",
                  "nl": "Om zetmeel om te zetten in suikers"
        },
        {
                  "en": "To boil the wort",
                  "es": "Para hervir el mosto",
                  "de": "Um die Würze zu kochen",
                  "nl": "Om de wort te koken"
        },
        {
                  "en": "To store finished beer",
                  "es": "Para almacenar cerveza terminada",
                  "de": "Um fertiges Bier zu lagern",
                  "nl": "Om afgewerkt bier op te slaan"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The mash tun is where grains are mixed with hot water at controlled temperatures to convert starches into fermentable sugars through enzymatic activity.",
                  "es": "El macerador es donde los granos se mezclan con agua caliente a temperaturas controladas para convertir almidones en azúcares fermentables a través de actividad enzimática.",
                  "de": "Der Maischebottich ist der Ort, wo Körner mit heißem Wasser bei kontrollierten Temperaturen gemischt werden, um Stärke durch enzymatische Aktivität in fermentierbare Zucker umzuwandeln.",
                  "nl": "De maischketel is waar granen worden gemengd met heet water bij gecontroleerde temperaturen om zetmeel om te zetten in fermenteerbare suikers via enzymatische activiteit."
        }
      },
      {
        question: {
                  "en": "What is a step mash?",
                  "es": "¿Qué es una maceración escalonada?",
                  "de": "Was ist ein Stufenmaischen?",
                  "nl": "Wat is een stapsgewijze maisch?"
        },
        options: [
        {
                  "en": "Mashing in steps up a ladder",
                  "es": "Macerar en pasos subiendo una escalera",
                  "de": "Maischen auf einer Leiter",
                  "nl": "Maischen op een ladder"
        },
        {
                  "en": "Adding ingredients in steps",
                  "es": "Agregar ingredientes en pasos",
                  "de": "Zutaten schrittweise hinzufügen",
                  "nl": "Ingrediënten stapsgewijs toevoegen"
        },
        {
                  "en": "Raising mash temperature in stages",
                  "es": "Elevar la temperatura del macerado en etapas",
                  "de": "Maischtemperatur stufenweise erhöhen",
                  "nl": "Maischtemperatuur stapsgewijs verhogen"
        },
        {
                  "en": "Filtering in multiple stages",
                  "es": "Filtrar en múltiples etapas",
                  "de": "In mehreren Stufen filtern",
                  "nl": "In meerdere stappen filteren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Step mashing involves raising the mash temperature through distinct stages to activate different enzymes at their optimal temperatures for better sugar extraction.",
                  "es": "La maceración escalonada implica elevar la temperatura del macerado a través de etapas distintas para activar diferentes enzimas a sus temperaturas óptimas para mejor extracción de azúcar.",
                  "de": "Stufenmaischen beinhaltet das Erhöhen der Maischtemperatur durch verschiedene Stufen, um unterschiedliche Enzyme bei ihren optimalen Temperaturen für bessere Zuckerextraktion zu aktivieren.",
                  "nl": "Stapsgewijs maischen houdt in dat de maischtemperatuur door verschillende fasen wordt verhoogd om verschillende enzymen bij hun optimale temperaturen te activeren voor betere suikerextractie."
        }
      },
      {
        question: {
                  "en": "What is sparging in the brewing process?",
                  "es": "¿Qué es el lavado en el proceso de elaboración?",
                  "de": "Was ist Nachguss im Brauprozess?",
                  "nl": "Wat is spoelen in het brouwproces?"
        },
        options: [
        {
                  "en": "Filtering the beer",
                  "es": "Filtrar la cerveza",
                  "de": "Das Bier filtern",
                  "nl": "Het bier filteren"
        },
        {
                  "en": "Adding carbonation",
                  "es": "Agregar carbonatación",
                  "de": "Kohlensäure hinzufügen",
                  "nl": "Koolzuur toevoegen"
        },
        {
                  "en": "Rinsing grains to extract remaining sugars",
                  "es": "Enjuagar granos para extraer azúcares restantes",
                  "de": "Körner spülen, um restliche Zucker zu extrahieren",
                  "nl": "Granen spoelen om resterende suikers te extraheren"
        },
        {
                  "en": "Cleaning equipment",
                  "es": "Limpiar equipo",
                  "de": "Ausrüstung reinigen",
                  "nl": "Apparatuur schoonmaken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Sparging is rinsing the grain bed with hot water after mashing to extract remaining sugars, maximizing wort yield before boiling.",
                  "es": "El lavado es enjuagar el lecho de grano con agua caliente después de macerar para extraer azúcares restantes, maximizando el rendimiento del mosto antes del hervido.",
                  "de": "Nachguss ist das Spülen des Kornbetts mit heißem Wasser nach dem Maischen, um restliche Zucker zu extrahieren und die Würzeausbeute vor dem Kochen zu maximieren.",
                  "nl": "Spoelen is het spoelen van het graanbed met heet water na het maischen om resterende suikers te extraheren, waarbij het wortrendement wordt gemaximaliseerd voor het koken."
        }
      },
      {
        question: {
                  "en": "What is the difference between top-fermenting and bottom-fermenting yeast?",
                  "es": "¿Cuál es la diferencia entre levadura de fermentación alta y baja?",
                  "de": "Was ist der Unterschied zwischen obergäriger und untergäriger Hefe?",
                  "nl": "Wat is het verschil tussen bovengistende en ondergistende gist?"
        },
        options: [
        {
                  "en": "Their color",
                  "es": "Su color",
                  "de": "Ihre Farbe",
                  "nl": "Hun kleur"
        },
        {
                  "en": "Where they are stored",
                  "es": "Dónde se almacenan",
                  "de": "Wo sie gelagert werden",
                  "nl": "Waar ze worden opgeslagen"
        },
        {
                  "en": "Their price",
                  "es": "Su precio",
                  "de": "Ihr Preis",
                  "nl": "Hun prijs"
        },
        {
                  "en": "Where they work during fermentation",
                  "es": "Dónde trabajan durante la fermentación",
                  "de": "Wo sie während der Gärung arbeiten",
                  "nl": "Waar ze werken tijdens fermentatie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Top-fermenting yeast (ale yeast) rises to the surface during fermentation, while bottom-fermenting yeast (lager yeast) settles at the bottom, each creating distinct beer styles.",
                  "es": "La levadura de fermentación alta (levadura ale) sube a la superficie durante la fermentación, mientras que la levadura de fermentación baja (levadura lager) se asienta en el fondo, cada una creando estilos de cerveza distintos.",
                  "de": "Obergärige Hefe (Ale-Hefe) steigt während der Gärung an die Oberfläche, während untergärige Hefe (Lager-Hefe) sich am Boden absetzt, wobei jede unterschiedliche Bierstile erzeugt.",
                  "nl": "Bovengistende gist (ale-gist) stijgt naar het oppervlak tijdens fermentatie, terwijl ondergistende gist (lager-gist) zich op de bodem zet, waarbij elk onderscheidende bierstijlen creëert."
        }
      },
      {
        question: {
                  "en": "What is the hot break in brewing?",
                  "es": "¿Qué es la ruptura caliente en la elaboración?",
                  "de": "Was ist der Heißbruch beim Brauen?",
                  "nl": "Wat is de hete breuk bij brouwen?"
        },
        options: [
        {
                  "en": "Stopping the boil",
                  "es": "Detener el hervido",
                  "de": "Das Kochen stoppen",
                  "nl": "Het koken stoppen"
        },
        {
                  "en": "Protein coagulation during boiling",
                  "es": "Coagulación de proteínas durante el hervido",
                  "de": "Proteinkoagulation während des Kochens",
                  "nl": "Eiwitcoagulatie tijdens het koken"
        },
        {
                  "en": "When equipment breaks from heat",
                  "es": "Cuando el equipo se rompe por el calor",
                  "de": "Wenn Ausrüstung durch Hitze bricht",
                  "nl": "Wanneer apparatuur kapot gaat door hitte"
        },
        {
                  "en": "Adding boiling water",
                  "es": "Agregar agua hirviendo",
                  "de": "Kochendes Wasser hinzufügen",
                  "nl": "Kokend water toevoegen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The hot break occurs at the beginning of the boil when proteins coagulate and form visible clumps (trub) that can be removed to improve beer clarity.",
                  "es": "La ruptura caliente ocurre al comienzo del hervido cuando las proteínas se coagulan y forman grumos visibles (turbio) que pueden ser removidos para mejorar la claridad de la cerveza.",
                  "de": "Der Heißbruch tritt zu Beginn des Kochens auf, wenn Proteine koagulieren und sichtbare Klumpen (Trub) bilden, die entfernt werden können, um die Bierklarheit zu verbessern.",
                  "nl": "De hete breuk treedt op aan het begin van het koken wanneer eiwitten stollen en zichtbare klonten (troebel) vormen die kunnen worden verwijderd om de helderheid van het bier te verbeteren."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a whirlpool in brewing?",
                  "es": "¿Cuál es el propósito de un remolino en la elaboración?",
                  "de": "Was ist der Zweck eines Whirlpools beim Brauen?",
                  "nl": "Wat is het doel van een whirlpool bij brouwen?"
        },
        options: [
        {
                  "en": "To separate trub from wort",
                  "es": "Para separar el turbio del mosto",
                  "de": "Um Trub von Würze zu trennen",
                  "nl": "Om troebel van wort te scheiden"
        },
        {
                  "en": "To cool the beer",
                  "es": "Para enfriar la cerveza",
                  "de": "Um das Bier zu kühlen",
                  "nl": "Om het bier af te koelen"
        },
        {
                  "en": "To mix ingredients",
                  "es": "Para mezclar ingredientes",
                  "de": "Um Zutaten zu mischen",
                  "nl": "Om ingrediënten te mengen"
        },
        {
                  "en": "To add hops",
                  "es": "Para agregar lúpulo",
                  "de": "Um Hopfen hinzuzufügen",
                  "nl": "Om hop toe te voegen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The whirlpool creates a vortex that forces trub (protein and hop debris) to collect in the center bottom of the kettle, allowing clearer wort to be drawn off.",
                  "es": "El remolino crea un vórtice que fuerza al turbio (proteína y residuos de lúpulo) a acumularse en el centro inferior del hervidor, permitiendo que se extraiga mosto más claro.",
                  "de": "Der Whirlpool erzeugt einen Wirbel, der Trub (Protein- und Hopfenreste) zwingt, sich in der Mitte unten im Kessel zu sammeln, wodurch klarere Würze abgezogen werden kann.",
                  "nl": "De whirlpool creëert een draaikolk die troebel (eiwit en hopresten) dwingt zich te verzamelen in het midden onderaan de ketel, waardoor helderder wort kan worden afgetapt."
        }
      },
      {
        question: {
                  "en": "What is pitching in brewing terminology?",
                  "es": "¿Qué es el inoculado en terminología cervecera?",
                  "de": "Was ist Anstellen in der Brauerterminologie?",
                  "nl": "Wat is pitching in brouwtermen?"
        },
        options: [
        {
                  "en": "Measuring alcohol content",
                  "es": "Medir el contenido de alcohol",
                  "de": "Alkoholgehalt messen",
                  "nl": "Alcoholgehalte meten"
        },
        {
                  "en": "Throwing away bad beer",
                  "es": "Desechar cerveza mala",
                  "de": "Schlechtes Bier wegwerfen",
                  "nl": "Slecht bier weggooien"
        },
        {
                  "en": "Tilting fermentation vessel",
                  "es": "Inclinar recipiente de fermentación",
                  "de": "Gärgefäß kippen",
                  "nl": "Fermentatievat kantelen"
        },
        {
                  "en": "Adding yeast to wort",
                  "es": "Agregar levadura al mosto",
                  "de": "Hefe zur Würze hinzufügen",
                  "nl": "Gist aan wort toevoegen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Pitching is the process of adding yeast to cooled wort to begin fermentation. The amount and health of yeast pitched significantly affects beer quality.",
                  "es": "El inoculado es el proceso de agregar levadura al mosto enfriado para comenzar la fermentación. La cantidad y salud de la levadura inoculada afecta significativamente la calidad de la cerveza.",
                  "de": "Anstellen ist der Prozess des Hinzufügens von Hefe zur gekühlten Würze, um die Gärung zu beginnen. Die Menge und Gesundheit der angestellten Hefe beeinflusst die Bierqualität erheblich.",
                  "nl": "Pitching is het proces van het toevoegen van gist aan afgekoelde wort om fermentatie te beginnen. De hoeveelheid en gezondheid van de toegevoegde gist beïnvloedt de bierkwaliteit aanzienlijk."
        }
      },
      {
        question: {
                  "en": "What is the purpose of lagering?",
                  "es": "¿Cuál es el propósito de la maduración?",
                  "de": "Was ist der Zweck des Lagerns?",
                  "nl": "Wat is het doel van lageren?"
        },
        options: [
        {
                  "en": "To condition beer at cold temperatures",
                  "es": "Para acondicionar cerveza a temperaturas frías",
                  "de": "Um Bier bei kalten Temperaturen zu konditionieren",
                  "nl": "Om bier te conditioneren bij koude temperaturen"
        },
        {
                  "en": "To kill bacteria",
                  "es": "Para matar bacterias",
                  "de": "Um Bakterien abzutöten",
                  "nl": "Om bacteriën te doden"
        },
        {
                  "en": "To add carbonation",
                  "es": "Para agregar carbonatación",
                  "de": "Um Kohlensäure hinzuzufügen",
                  "nl": "Om koolzuur toe te voegen"
        },
        {
                  "en": "To increase alcohol content",
                  "es": "Para aumentar el contenido de alcohol",
                  "de": "Um den Alkoholgehalt zu erhöhen",
                  "nl": "Om het alcoholgehalte te verhogen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Lagering is extended cold storage (near freezing) that allows lager beers to mature, clarify, and develop smooth, clean flavors over weeks or months.",
                  "es": "La maduración es almacenamiento frío extendido (cerca de congelación) que permite que las cervezas lager maduren, se clarifiquen y desarrollen sabores suaves y limpios durante semanas o meses.",
                  "de": "Lagern ist eine verlängerte kalte Lagerung (nahe dem Gefrierpunkt), die es Lagerbieren ermöglicht, zu reifen, zu klären und über Wochen oder Monate glatte, saubere Aromen zu entwickeln.",
                  "nl": "Lageren is verlengde koude opslag (nabij het vriespunt) die lagerbieren toestaat te rijpen, te helderen en gladde, schone smaken te ontwikkelen gedurende weken of maanden."
        }
      },
      {
        question: {
                  "en": "What is diacetyl and why is it a concern in brewing?",
                  "es": "¿Qué es el diacetilo y por qué es una preocupación en la elaboración?",
                  "de": "Was ist Diacetyl und warum ist es beim Brauen ein Problem?",
                  "nl": "Wat is diacetyl en waarom is het een zorg bij brouwen?"
        },
        options: [
        {
                  "en": "A type of yeast",
                  "es": "Un tipo de levadura",
                  "de": "Eine Art Hefe",
                  "nl": "Een type gist"
        },
        {
                  "en": "A desired hop flavor",
                  "es": "Un sabor de lúpulo deseado",
                  "de": "Ein erwünschtes Hopfenaroma",
                  "nl": "Een gewenste hopsmaak"
        },
        {
                  "en": "A buttery off-flavor compound",
                  "es": "Un compuesto de sabor a mantequilla indeseado",
                  "de": "Eine butterartige Fehlaromaverbindung",
                  "nl": "Een boterach​tige ongewenste smaakverbinding"
        },
        {
                  "en": "A brewing enzyme",
                  "es": "Una enzima de elaboración",
                  "de": "Ein Brauenzym",
                  "nl": "Een brouwenzym"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Diacetyl is a compound that produces an unwanted buttery or butterscotch flavor in beer. It's created during fermentation but should be reabsorbed by yeast with proper conditioning.",
                  "es": "El diacetilo es un compuesto que produce un sabor no deseado a mantequilla o caramelo en la cerveza. Se crea durante la fermentación pero debe ser reabsorbido por la levadura con acondicionamiento adecuado.",
                  "de": "Diacetyl ist eine Verbindung, die ein unerwünschtes butterartiges oder Karamell-Aroma im Bier erzeugt. Es wird während der Gärung erzeugt, sollte aber bei ordnungsgemäßer Konditionierung von der Hefe wieder aufgenommen werden.",
                  "nl": "Diacetyl is een verbinding die een ongewenste boter- of toffeesmaak in bier produceert. Het wordt tijdens fermentatie gecreëerd maar moet worden geherabsorbeerd door gist met de juiste conditionering."
        }
      },
      {
        question: {
                  "en": "What is a hop schedule?",
                  "es": "¿Qué es un programa de lupulado?",
                  "de": "Was ist ein Hopfenplan?",
                  "nl": "Wat is een hopschema?"
        },
        options: [
        {
                  "en": "Hop growing calendar",
                  "es": "Calendario de cultivo de lúpulo",
                  "de": "Hopfenanbaukalender",
                  "nl": "Hopteeltkalender"
        },
        {
                  "en": "Timing of hop additions during boil",
                  "es": "Tiempo de adiciones de lúpulo durante el hervido",
                  "de": "Zeitpunkt der Hopfenzugaben während des Kochens",
                  "nl": "Timing van hoptoevoegingen tijdens het koken"
        },
        {
                  "en": "When hops are harvested",
                  "es": "Cuando se cosechan los lúpulos",
                  "de": "Wann Hopfen geerntet wird",
                  "nl": "Wanneer hop wordt geoogst"
        },
        {
                  "en": "Hop storage temperature",
                  "es": "Temperatura de almacenamiento del lúpulo",
                  "de": "Hopfenlagertemperatur",
                  "nl": "Hopopslagtemperatuur"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A hop schedule details when hops are added during the boil - early additions for bitterness, late additions for flavor and aroma, creating balanced hop profiles.",
                  "es": "Un programa de lupulado detalla cuándo se agregan lúpulos durante el hervido - adiciones tempranas para amargor, adiciones tardías para sabor y aroma, creando perfiles de lúpulo equilibrados.",
                  "de": "Ein Hopfenplan beschreibt, wann Hopfen während des Kochens hinzugefügt wird - frühe Zugaben für Bitterkeit, späte Zugaben für Geschmack und Aroma, wodurch ausgewogene Hopfenprofile entstehen.",
                  "nl": "Een hopschema beschrijft wanneer hop tijdens het koken wordt toegevoegd - vroege toevoegingen voor bitterheid, late toevoegingen voor smaak en aroma, waardoor gebalanceerde hopprofielen ontstaan."
        }
      },
      {
        question: {
                  "en": "What is the purpose of aeration before fermentation?",
                  "es": "¿Cuál es el propósito de la aireación antes de la fermentación?",
                  "de": "Was ist der Zweck der Belüftung vor der Gärung?",
                  "nl": "Wat is het doel van beluchting voor fermentatie?"
        },
        options: [
        {
                  "en": "To add flavor",
                  "es": "Para agregar sabor",
                  "de": "Um Geschmack hinzuzufügen",
                  "nl": "Om smaak toe te voegen"
        },
        {
                  "en": "To remove sediment",
                  "es": "Para remover sedimento",
                  "de": "Um Sediment zu entfernen",
                  "nl": "Om sediment te verwijderen"
        },
        {
                  "en": "To cool the wort",
                  "es": "Para enfriar el mosto",
                  "de": "Um die Würze zu kühlen",
                  "nl": "Om de wort af te koelen"
        },
        {
                  "en": "To provide oxygen for yeast",
                  "es": "Para proporcionar oxígeno a la levadura",
                  "de": "Um Sauerstoff für Hefe bereitzustellen",
                  "nl": "Om zuurstof te leveren aan gist"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Aeration introduces oxygen into cooled wort before pitching yeast. Yeast needs oxygen for cell reproduction and healthy fermentation, though oxygen is harmful after fermentation starts.",
                  "es": "La aireación introduce oxígeno en el mosto enfriado antes de inocular levadura. La levadura necesita oxígeno para reproducción celular y fermentación saludable, aunque el oxígeno es dañino después de que comienza la fermentación.",
                  "de": "Belüftung führt Sauerstoff in gekühlte Würze vor dem Anstellen von Hefe ein. Hefe benötigt Sauerstoff für Zellreproduktion und gesunde Gärung, obwohl Sauerstoff nach Beginn der Gärung schädlich ist.",
                  "nl": "Beluchting introduceert zuurstof in afgekoelde wort voor het toevoegen van gist. Gist heeft zuurstof nodig voor celreproductie en gezonde fermentatie, hoewel zuurstof schadelijk is nadat fermentatie begint."
        }
      },
      {
        question: {
                  "en": "What is final gravity in brewing?",
                  "es": "¿Qué es la gravedad final en la elaboración?",
                  "de": "Was ist die Endvergärung beim Brauen?",
                  "nl": "Wat is het finaal soortelijk gewicht bij brouwen?"
        },
        options: [
        {
                  "en": "The last measurement taken",
                  "es": "La última medición tomada",
                  "de": "Die letzte genommene Messung",
                  "nl": "De laatste meting genomen"
        },
        {
                  "en": "The alcohol percentage",
                  "es": "El porcentaje de alcohol",
                  "de": "Der Alkoholprozentsatz",
                  "nl": "Het alcoholpercentage"
        },
        {
                  "en": "The density after fermentation is complete",
                  "es": "La densidad después de que la fermentación está completa",
                  "de": "Die Dichte nach Abschluss der Gärung",
                  "nl": "De dichtheid nadat fermentatie compleet is"
        },
        {
                  "en": "The weight of finished beer",
                  "es": "El peso de la cerveza terminada",
                  "de": "Das Gewicht des fertigen Bieres",
                  "nl": "Het gewicht van afgewerkt bier"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Final gravity is the density of beer after fermentation is complete. The difference between original and final gravity determines alcohol content and indicates fermentation completion.",
                  "es": "La gravedad final es la densidad de la cerveza después de que la fermentación está completa. La diferencia entre gravedad original y final determina el contenido de alcohol e indica la finalización de la fermentación.",
                  "de": "Die Endvergärung ist die Dichte des Bieres nach Abschluss der Gärung. Die Differenz zwischen Stammwürze und Endvergärung bestimmt den Alkoholgehalt und zeigt den Abschluss der Gärung an.",
                  "nl": "Finaal soortelijk gewicht is de dichtheid van bier nadat fermentatie compleet is. Het verschil tussen oorspronkelijk en finaal soortelijk gewicht bepaalt het alcoholgehalte en geeft voltooiing van fermentatie aan."
        }
      },
      {
        question: {
                  "en": "What are alpha acids in hops?",
                  "es": "¿Qué son los ácidos alfa en el lúpulo?",
                  "de": "Was sind Alpha-Säuren im Hopfen?",
                  "nl": "Wat zijn alfazuren in hop?"
        },
        options: [
        {
                  "en": "Hop coloring agents",
                  "es": "Agentes colorantes del lúpulo",
                  "de": "Hopfenfärbemittel",
                  "nl": "Hopkleurmiddelen"
        },
        {
                  "en": "Hop fertilizers",
                  "es": "Fertilizantes de lúpulo",
                  "de": "Hopfendünger",
                  "nl": "Hopmest"
        },
        {
                  "en": "Compounds providing hop bitterness",
                  "es": "Compuestos que proporcionan amargor del lúpulo",
                  "de": "Verbindungen, die Hopfenbitterkeit liefern",
                  "nl": "Verbindingen die hopbitterheid leveren"
        },
        {
                  "en": "Hop preservation chemicals",
                  "es": "Químicos de preservación del lúpulo",
                  "de": "Hopfenkonservierungschemikalien",
                  "nl": "Hopconserveringschemicaliën"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Alpha acids are the primary bittering compounds in hops. When boiled, they isomerize and provide bitterness to beer. Higher alpha acid percentages mean more bittering potential.",
                  "es": "Los ácidos alfa son los compuestos amargos principales del lúpulo. Cuando se hierven, se isomerizan y proporcionan amargor a la cerveza. Porcentajes más altos de ácidos alfa significan más potencial de amargor.",
                  "de": "Alpha-Säuren sind die primären Bitterstoffe im Hopfen. Beim Kochen isomerisieren sie und verleihen dem Bier Bitterkeit. Höhere Alpha-Säure-Prozentsätze bedeuten mehr Bitterpotenzial.",
                  "nl": "Alfazuren zijn de primaire bittere verbindingen in hop. Bij het koken isomeriseren ze en leveren bitterheid aan bier. Hogere alfazuurpercentages betekenen meer bitterheidspotentieel."
        }
      },
      {
        question: {
                  "en": "What is the purpose of using a wort chiller?",
                  "es": "¿Cuál es el propósito de usar un enfriador de mosto?",
                  "de": "Was ist der Zweck der Verwendung eines Würzekühlers?",
                  "nl": "Wat is het doel van het gebruik van een wortkoeler?"
        },
        options: [
        {
                  "en": "To rapidly cool wort to pitching temperature",
                  "es": "Para enfriar rápidamente el mosto a temperatura de inoculación",
                  "de": "Um Würze schnell auf Anstelltemperatur zu kühlen",
                  "nl": "Om wort snel af te koelen tot gisttemperatuur"
        },
        {
                  "en": "To add ice to the beer",
                  "es": "Para agregar hielo a la cerveza",
                  "de": "Um Eis zum Bier hinzuzufügen",
                  "nl": "Om ijs aan bier toe te voegen"
        },
        {
                  "en": "To measure temperature",
                  "es": "Para medir temperatura",
                  "de": "Um Temperatur zu messen",
                  "nl": "Om temperatuur te meten"
        },
        {
                  "en": "To store wort for later use",
                  "es": "Para almacenar mosto para uso posterior",
                  "de": "Um Würze für spätere Verwendung zu lagern",
                  "nl": "Om wort op te slaan voor later gebruik"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A wort chiller rapidly cools boiling wort to yeast-safe temperatures (15-25°C), minimizing contamination risk and reducing dimethyl sulfide (DMS) formation for cleaner beer.",
                  "es": "Un enfriador de mosto enfría rápidamente el mosto hirviendo a temperaturas seguras para levadura (15-25°C), minimizando riesgo de contaminación y reduciendo formación de dimetil sulfuro (DMS) para cerveza más limpia.",
                  "de": "Ein Würzekühler kühlt kochende Würze schnell auf hefesichere Temperaturen (15-25°C), minimiert das Kontaminationsrisiko und reduziert die Bildung von Dimethylsulfid (DMS) für saubereres Bier.",
                  "nl": "Een wortkoeler koelt kokende wort snel af tot gist-veilige temperaturen (15-25°C), minimaliseert besmettingsrisico en vermindert dimethylsulfide (DMS) vorming voor schoner bier."
        }
      },
      {
        question: {
                  "en": "What is a hydrometer used for in brewing?",
                  "es": "¿Para qué se usa un hidrómetro en la elaboración?",
                  "de": "Wofür wird ein Hydrometer beim Brauen verwendet?",
                  "nl": "Waarvoor wordt een hydrometer gebruikt bij brouwen?"
        },
        options: [
        {
                  "en": "To measure temperature",
                  "es": "Para medir temperatura",
                  "de": "Um Temperatur zu messen",
                  "nl": "Om temperatuur te meten"
        },
        {
                  "en": "To measure pH levels",
                  "es": "Para medir niveles de pH",
                  "de": "Um pH-Werte zu messen",
                  "nl": "Om pH-niveaus te meten"
        },
        {
                  "en": "To measure specific gravity",
                  "es": "Para medir gravedad específica",
                  "de": "Um spezifisches Gewicht zu messen",
                  "nl": "Om soortelijk gewicht te meten"
        },
        {
                  "en": "To measure water hardness",
                  "es": "Para medir dureza del agua",
                  "de": "Um Wasserhärte zu messen",
                  "nl": "Om waterhardheid te meten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A hydrometer measures the specific gravity (density) of wort and beer, allowing brewers to calculate original gravity, final gravity, and alcohol content.",
                  "es": "Un hidrómetro mide la gravedad específica (densidad) del mosto y cerveza, permitiendo a los cerveceros calcular gravedad original, gravedad final y contenido de alcohol.",
                  "de": "Ein Hydrometer misst das spezifische Gewicht (Dichte) von Würze und Bier, wodurch Brauer Stammwürze, Endvergärung und Alkoholgehalt berechnen können.",
                  "nl": "Een hydrometer meet het soortelijk gewicht (dichtheid) van wort en bier, waardoor brouwers oorspronkelijk soortelijk gewicht, finaal soortelijk gewicht en alcoholgehalte kunnen berekenen."
        }
      },
      {
        question: {
                  "en": "What is a hop back?",
                  "es": "¿Qué es un filtro de lúpulo?",
                  "de": "Was ist ein Hopfenfilter?",
                  "nl": "Wat is een hopback?"
        },
        options: [
        {
                  "en": "A vessel for hop aroma extraction",
                  "es": "Un recipiente para extracción de aroma de lúpulo",
                  "de": "Ein Gefäß zur Hopfenaromaextraktion",
                  "nl": "Een vat voor hoparoma-extractie"
        },
        {
                  "en": "Recycling used hops",
                  "es": "Reciclar lúpulos usados",
                  "de": "Gebrauchte Hopfen recyceln",
                  "nl": "Gebruikte hop recyclen"
        },
        {
                  "en": "Growing hops backwards",
                  "es": "Cultivar lúpulos al revés",
                  "de": "Hopfen rückwärts anbauen",
                  "nl": "Hop achterwaarts telen"
        },
        {
                  "en": "Removing hops from beer",
                  "es": "Remover lúpulos de la cerveza",
                  "de": "Hopfen aus Bier entfernen",
                  "nl": "Hop uit bier verwijderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A hop back is a vessel filled with whole hops that hot wort passes through after boiling, extracting fresh hop aromas and essential oils without adding bitterness.",
                  "es": "Un filtro de lúpulo es un recipiente lleno de lúpulos enteros por el que pasa el mosto caliente después del hervido, extrayendo aromas frescos de lúpulo y aceites esenciales sin agregar amargor.",
                  "de": "Ein Hopfenfilter ist ein mit ganzem Hopfen gefülltes Gefäß, durch das heiße Würze nach dem Kochen fließt und frische Hopfenaromen und ätherische Öle extrahiert, ohne Bitterkeit hinzuzufügen.",
                  "nl": "Een hopback is een vat gevuld met hele hop waar hete wort doorheen stroomt na het koken, waarbij verse hoparoma's en essentiële oliën worden geëxtraheerd zonder bitterheid toe te voegen."
        }
      },
      {
        question: {
                  "en": "What is the significance of mash pH?",
                  "es": "¿Cuál es la importancia del pH del macerado?",
                  "de": "Was ist die Bedeutung des Maische-pH-Werts?",
                  "nl": "Wat is de betekenis van maisch-pH?"
        },
        options: [
        {
                  "en": "It has no effect on brewing",
                  "es": "No tiene efecto en la elaboración",
                  "de": "Es hat keine Auswirkung auf das Brauen",
                  "nl": "Het heeft geen effect op brouwen"
        },
        {
                  "en": "It only affects carbonation",
                  "es": "Solo afecta la carbonatación",
                  "de": "Es beeinflusst nur die Kohlensäure",
                  "nl": "Het beïnvloedt alleen koolzuur"
        },
        {
                  "en": "It affects enzyme activity and extraction",
                  "es": "Afecta la actividad enzimática y extracción",
                  "de": "Es beeinflusst Enzymaktivität und Extraktion",
                  "nl": "Het beïnvloedt enzymactiviteit en extractie"
        },
        {
                  "en": "It determines beer color only",
                  "es": "Solo determina el color de la cerveza",
                  "de": "Es bestimmt nur die Bierfarbe",
                  "nl": "Het bepaalt alleen bierkleur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Mash pH (ideally 5.2-5.6) affects enzyme activity, sugar extraction efficiency, hop utilization, and final beer flavor. Improper pH can result in poor extraction and off-flavors.",
                  "es": "El pH del macerado (idealmente 5.2-5.6) afecta la actividad enzimática, eficiencia de extracción de azúcar, utilización del lúpulo y sabor final de la cerveza. Un pH inadecuado puede resultar en mala extracción y sabores indeseados.",
                  "de": "Der Maische-pH-Wert (idealerweise 5.2-5.6) beeinflusst Enzymaktivität, Zuckerextraktionseffizienz, Hopfenausnutzung und endgültigen Biergeschmack. Falscher pH kann zu schlechter Extraktion und Fehlaromen führen.",
                  "nl": "Maisch-pH (ideaal 5.2-5.6) beïnvloedt enzymactiviteit, suikerextractie-efficiëntie, hopbenutting en uiteindelijke biersmaak. Onjuiste pH kan resulteren in slechte extractie en ongewenste smaken."
        }
      },
      {
        question: {
                  "en": "What is the difference between pellet and whole leaf hops?",
                  "es": "¿Cuál es la diferencia entre lúpulos en pellets y hojas enteras?",
                  "de": "Was ist der Unterschied zwischen Pellet- und Dolden-Hopfen?",
                  "nl": "Wat is het verschil tussen pellet en hele bladhop?"
        },
        options: [
        {
                  "en": "Pellets are for lagers, whole leaf for ales",
                  "es": "Pellets son para lagers, hoja entera para ales",
                  "de": "Pellets für Lager, Dolden für Ales",
                  "nl": "Pellets zijn voor lagers, hele blad voor ales"
        },
        {
                  "en": "There is no difference",
                  "es": "No hay diferencia",
                  "de": "Es gibt keinen Unterschied",
                  "nl": "Er is geen verschil"
        },
        {
                  "en": "Pellets are compressed, whole leaf is natural form",
                  "es": "Pellets están comprimidos, hoja entera es forma natural",
                  "de": "Pellets sind komprimiert, Dolden sind natürliche Form",
                  "nl": "Pellets zijn gecomprimeerd, hele blad is natuurlijke vorm"
        },
        {
                  "en": "They come from different hop plants",
                  "es": "Vienen de diferentes plantas de lúpulo",
                  "de": "Sie stammen von verschiedenen Hopfenpflanzen",
                  "nl": "Ze komen van verschillende hopplanten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Pellet hops are compressed and processed for easier storage and better utilization, while whole leaf hops are in their natural cone form, preferred by some for traditional brewing and hop aroma.",
                  "es": "Los lúpulos en pellets están comprimidos y procesados para almacenamiento más fácil y mejor utilización, mientras que los lúpulos de hoja entera están en su forma natural de cono, preferidos por algunos para elaboración tradicional y aroma de lúpulo.",
                  "de": "Pellet-Hopfen ist komprimiert und verarbeitet für einfachere Lagerung und bessere Ausnutzung, während Dolden-Hopfen in ihrer natürlichen Zapfenform vorliegen, von einigen für traditionelles Brauen und Hopfenaroma bevorzugt.",
                  "nl": "Pellethop is gecomprimeerd en verwerkt voor gemakkelijkere opslag en betere benutting, terwijl hele bladhop in hun natuurlijke kegelvorm is, door sommigen geprefereerd voor traditioneel brouwen en hoparoma."
        }
      },
      {
        question: {
                  "en": "What is a blow-off tube used for?",
                  "es": "¿Para qué se usa un tubo de salida?",
                  "de": "Wofür wird ein Gärspund verwendet?",
                  "nl": "Waarvoor wordt een afblaaspijp gebruikt?"
        },
        options: [
        {
                  "en": "To measure fermentation temperature",
                  "es": "Para medir temperatura de fermentación",
                  "de": "Um Gärungstemperatur zu messen",
                  "nl": "Om fermentatietemperatuur te meten"
        },
        {
                  "en": "To filter the beer",
                  "es": "Para filtrar la cerveza",
                  "de": "Um das Bier zu filtern",
                  "nl": "Om het bier te filteren"
        },
        {
                  "en": "To allow vigorous fermentation foam to escape",
                  "es": "Para permitir que escape espuma de fermentación vigorosa",
                  "de": "Um kräftigen Gärungsschaum entweichen zu lassen",
                  "nl": "Om krachtig fermentatieschuim te laten ontsnappen"
        },
        {
                  "en": "To add oxygen to fermenting beer",
                  "es": "Para agregar oxígeno a cerveza en fermentación",
                  "de": "Um Sauerstoff zum gärenden Bier hinzuzufügen",
                  "nl": "Om zuurstof toe te voegen aan fermenterende bier"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A blow-off tube allows vigorous fermentation krausen (foam) to escape from the fermenter without clogging the airlock, preventing pressure buildup during highly active fermentation.",
                  "es": "Un tubo de salida permite que el krausen de fermentación vigorosa (espuma) escape del fermentador sin obstruir la esclusa de aire, previniendo acumulación de presión durante fermentación muy activa.",
                  "de": "Ein Gärspund ermöglicht es kräftigem Gärungskräusen (Schaum), aus dem Fermenter zu entweichen, ohne den Gärspund zu verstopfen, und verhindert Druckaufbau während hochaktiver Gärung.",
                  "nl": "Een afblaaspijp laat krachtige fermentatiekrausen (schuim) uit de fermenter ontsnappen zonder de luchtsluis te verstoppen, waardoor drukopbouw tijdens zeer actieve fermentatie wordt voorkomen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of sanitization in brewing?",
                  "es": "¿Cuál es el propósito de la sanitización en la elaboración?",
                  "de": "Was ist der Zweck der Desinfektion beim Brauen?",
                  "nl": "Wat is het doel van sanitatie bij brouwen?"
        },
        options: [
        {
                  "en": "To prevent contamination by unwanted microbes",
                  "es": "Para prevenir contaminación por microbios no deseados",
                  "de": "Um Kontamination durch unerwünschte Mikroben zu verhindern",
                  "nl": "Om besmetting door ongewenste microben te voorkomen"
        },
        {
                  "en": "To increase alcohol content",
                  "es": "Para aumentar el contenido de alcohol",
                  "de": "Um den Alkoholgehalt zu erhöhen",
                  "nl": "Om het alcoholgehalte te verhogen"
        },
        {
                  "en": "To add flavor to beer",
                  "es": "Para agregar sabor a la cerveza",
                  "de": "Um Bier Geschmack zu verleihen",
                  "nl": "Om smaak aan bier toe te voegen"
        },
        {
                  "en": "To speed up fermentation",
                  "es": "Para acelerar la fermentación",
                  "de": "Um die Gärung zu beschleunigen",
                  "nl": "Om fermentatie te versnellen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Sanitization kills unwanted bacteria and wild yeast that could contaminate beer, causing off-flavors or spoilage. Everything touching cooled wort or fermenting beer must be sanitized.",
                  "es": "La sanitización mata bacterias no deseadas y levaduras salvajes que podrían contaminar la cerveza, causando sabores indeseados o deterioro. Todo lo que toca mosto enfriado o cerveza en fermentación debe ser sanitizado.",
                  "de": "Desinfektion tötet unerwünschte Bakterien und Wildhefe ab, die Bier kontaminieren könnten und Fehlaromen oder Verderb verursachen. Alles, was gekühlte Würze oder gärendes Bier berührt, muss desinfiziert werden.",
                  "nl": "Sanitatie doodt ongewenste bacteriën en wilde gist die bier kunnen besmetten, wat ongewenste smaken of bederf veroorzaakt. Alles wat afgekoelde wort of fermenterende bier raakt moet gesaniteerd worden."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  }
})();