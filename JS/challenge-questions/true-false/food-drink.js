// True/False Questions - Food & Drink (Easy-Medium)
// Cooking myths, nutrition facts, food history
(function() {

  const foodDrinkQuestions = [
    {
      id: 'fd_1',
      question: {
        en: "You should wait 24 hours after eating before swimming.",
        es: "Debes esperar 24 horas después de comer antes de nadar.",
        de: "Man sollte 24 Stunden nach dem Essen warten, bevor man schwimmt.",
        nl: "Je moet 24 uur wachten na het eten voordat je gaat zwemmen."
      },
      isTrue: false,
      explanation: {
        en: "This is excessive. A light wait of 30-60 minutes is sufficient for comfort.",
        es: "Esto es excesivo. Una espera ligera de 30-60 minutos es suficiente.",
        de: "Das ist übertrieben. 30-60 Minuten Wartezeit reichen aus.",
        nl: "Dit is overdreven. Een korte wachttijd van 30-60 minuten is voldoende."
      }
    },
    {
      id: 'fd_2',
      question: {
        en: "Bananas grow on trees.",
        es: "Los plátanos crecen en árboles.",
        de: "Bananen wachsen auf Bäumen.",
        nl: "Bananen groeien aan bomen."
      },
      isTrue: false,
      explanation: {
        en: "Bananas grow on large herbaceous plants, not trees. The 'trunk' is actually tightly packed leaves.",
        es: "Los plátanos crecen en plantas herbáceas grandes, no en árboles.",
        de: "Bananen wachsen an großen krautigen Pflanzen, nicht an Bäumen.",
        nl: "Bananen groeien aan grote kruidachtige planten, niet aan bomen."
      }
    },
    {
      id: 'fd_3',
      question: {
        en: "Honey never spoils and can last forever.",
        es: "La miel nunca se estropea y puede durar para siempre.",
        de: "Honig verdirbt nie und kann ewig halten.",
        nl: "Honing bederft nooit en kan eeuwig meegaan."
      },
      isTrue: true,
      explanation: {
        en: "Due to its low moisture and high acidity, honey can last indefinitely when properly stored.",
        es: "Debido a su baja humedad y alta acidez, la miel puede durar indefinidamente.",
        de: "Aufgrund seiner geringen Feuchtigkeit und hohen Säure kann Honig unbegrenzt haltbar sein.",
        nl: "Door het lage vochtgehalte en hoge zuurgraad kan honing onbeperkt houdbaar blijven."
      }
    },
    {
      id: 'fd_4',
      question: {
        en: "Tomatoes are vegetables.",
        es: "Los tomates son verduras.",
        de: "Tomaten sind Gemüse.",
        nl: "Tomaten zijn groenten."
      },
      isTrue: false,
      explanation: {
        en: "Botanically, tomatoes are fruits because they develop from the flower and contain seeds.",
        es: "Botánicamente, los tomates son frutas porque se desarrollan de la flor y contienen semillas.",
        de: "Botanisch sind Tomaten Früchte, da sie aus der Blüte wachsen und Samen enthalten.",
        nl: "Botanisch gezien zijn tomaten fruit omdat ze uit de bloem groeien en zaden bevatten."
      }
    },
    {
      id: 'fd_5',
      question: {
        en: "Dark chocolate contains more caffeine than milk chocolate.",
        es: "El chocolate negro contiene más cafeína que el chocolate con leche.",
        de: "Dunkle Schokolade enthält mehr Koffein als Milchschokolade.",
        nl: "Pure chocolade bevat meer cafeïne dan melkchocolade."
      },
      isTrue: true,
      explanation: {
        en: "Dark chocolate has more cocoa content, which means more caffeine. A 100g bar can have 80mg of caffeine.",
        es: "El chocolate negro tiene más contenido de cacao, lo que significa más cafeína.",
        de: "Dunkle Schokolade hat mehr Kakaogehalt, was mehr Koffein bedeutet.",
        nl: "Pure chocolade heeft meer cacaogehalte, wat meer cafeïne betekent."
      }
    },
    {
      id: 'fd_6',
      question: {
        en: "Carrots were originally purple, not orange.",
        es: "Las zanahorias eran originalmente púrpuras, no naranjas.",
        de: "Karotten waren ursprünglich lila, nicht orange.",
        nl: "Wortels waren oorspronkelijk paars, niet oranje."
      },
      isTrue: true,
      explanation: {
        en: "The orange carrot was cultivated in the Netherlands in the 17th century. Original carrots were purple or yellow.",
        es: "La zanahoria naranja fue cultivada en los Países Bajos en el siglo XVII.",
        de: "Die orange Karotte wurde im 17. Jahrhundert in den Niederlanden gezüchtet.",
        nl: "De oranje wortel werd in de 17e eeuw in Nederland gekweekt."
      }
    },
    {
      id: 'fd_7',
      question: {
        en: "Drinking coffee will dehydrate you.",
        es: "Beber café te deshidrata.",
        de: "Kaffeetrinken dehydriert dich.",
        nl: "Koffie drinken droogt je uit."
      },
      isTrue: false,
      explanation: {
        en: "While caffeine has a mild diuretic effect, the water in coffee more than compensates for this.",
        es: "Aunque la cafeína tiene un efecto diurético leve, el agua del café compensa esto.",
        de: "Obwohl Koffein eine leichte harntreibende Wirkung hat, gleicht das Wasser im Kaffee dies aus.",
        nl: "Hoewel cafeïne een licht plasafdrijvend effect heeft, compenseert het water in koffie dit ruimschoots."
      }
    },
    {
      id: 'fd_8',
      question: {
        en: "Peanuts are nuts.",
        es: "Los cacahuetes son frutos secos.",
        de: "Erdnüsse sind Nüsse.",
        nl: "Pinda's zijn noten."
      },
      isTrue: false,
      explanation: {
        en: "Peanuts are legumes, like beans and lentils, not true nuts. They grow underground.",
        es: "Los cacahuetes son legumbres, como los frijoles y las lentejas, no frutos secos verdaderos.",
        de: "Erdnüsse sind Hülsenfrüchte, wie Bohnen und Linsen, keine echten Nüsse.",
        nl: "Pinda's zijn peulvruchten, zoals bonen en linzen, geen echte noten."
      }
    },
    {
      id: 'fd_9',
      question: {
        en: "Spicy food causes stomach ulcers.",
        es: "La comida picante causa úlceras estomacales.",
        de: "Scharfes Essen verursacht Magengeschwüre.",
        nl: "Pittig eten veroorzaakt maagzweren."
      },
      isTrue: false,
      explanation: {
        en: "Most ulcers are caused by H. pylori bacteria or NSAIDs, not spicy food. Spice may irritate existing ulcers though.",
        es: "La mayoría de las úlceras son causadas por la bacteria H. pylori o AINEs, no por comida picante.",
        de: "Die meisten Geschwüre werden durch H. pylori-Bakterien oder NSAIDs verursacht, nicht durch scharfes Essen.",
        nl: "De meeste zweren worden veroorzaakt door H. pylori-bacteriën of NSAIDs, niet door pittig eten."
      }
    },
    {
      id: 'fd_10',
      question: {
        en: "Champagne was invented by Dom Pérignon.",
        es: "El champán fue inventado por Dom Pérignon.",
        de: "Champagner wurde von Dom Pérignon erfunden.",
        nl: "Champagne werd uitgevonden door Dom Pérignon."
      },
      isTrue: false,
      explanation: {
        en: "While Dom Pérignon improved champagne production, the English were making sparkling wine before him.",
        es: "Aunque Dom Pérignon mejoró la producción de champán, los ingleses ya hacían vino espumoso antes.",
        de: "Obwohl Dom Pérignon die Champagnerproduktion verbesserte, stellten die Engländer vorher Schaumwein her.",
        nl: "Hoewel Dom Pérignon de champagneproductie verbeterde, maakten de Engelsen al eerder mousserende wijn."
      }
    },
    {
      id: 'fd_11',
      question: {
        en: "Raw fish in sushi must be frozen first to kill parasites.",
        es: "El pescado crudo del sushi debe congelarse primero para matar parásitos.",
        de: "Roher Fisch in Sushi muss zuerst eingefroren werden, um Parasiten abzutöten.",
        nl: "Rauwe vis in sushi moet eerst worden ingevroren om parasieten te doden."
      },
      isTrue: true,
      explanation: {
        en: "FDA regulations require fish to be frozen at -4°F (-20°C) for 7 days to kill parasites before serving raw.",
        es: "Las regulaciones de la FDA requieren que el pescado se congele a -20°C durante 7 días.",
        de: "FDA-Vorschriften verlangen, dass Fisch vor dem rohen Verzehr 7 Tage bei -20°C gefroren wird.",
        nl: "FDA-regelgeving vereist dat vis 7 dagen bij -20°C wordt ingevroren voordat het rauw wordt geserveerd."
      }
    },
    {
      id: 'fd_12',
      question: {
        en: "White chocolate contains cocoa.",
        es: "El chocolate blanco contiene cacao.",
        de: "Weiße Schokolade enthält Kakao.",
        nl: "Witte chocolade bevat cacao."
      },
      isTrue: false,
      explanation: {
        en: "White chocolate contains cocoa butter but no cocoa solids, which is why it's white.",
        es: "El chocolate blanco contiene manteca de cacao pero no sólidos de cacao.",
        de: "Weiße Schokolade enthält Kakaobutter, aber keine Kakaomasse.",
        nl: "Witte chocolade bevat cacaoboter maar geen cacaomassa."
      }
    },
    {
      id: 'fd_13',
      question: {
        en: "Eating carrots improves your night vision.",
        es: "Comer zanahorias mejora tu visión nocturna.",
        de: "Karotten essen verbessert die Nachtsicht.",
        nl: "Wortels eten verbetert je nachtzicht."
      },
      isTrue: false,
      explanation: {
        en: "This was British propaganda in WWII to hide their radar technology. Carrots have vitamin A but won't give you super vision.",
        es: "Esto fue propaganda británica en la Segunda Guerra Mundial para ocultar su tecnología de radar.",
        de: "Dies war britische Propaganda im Zweiten Weltkrieg, um ihre Radartechnologie zu verbergen.",
        nl: "Dit was Britse propaganda in WO II om hun radartechnologie te verbergen."
      }
    },
    {
      id: 'fd_14',
      question: {
        en: "Searing meat seals in the juices.",
        es: "Sellar la carne sella los jugos.",
        de: "Das Anbraten von Fleisch versiegelt die Säfte.",
        nl: "Aanbraden van vlees sluit de sappen in."
      },
      isTrue: false,
      explanation: {
        en: "Searing creates a flavorful crust through the Maillard reaction but doesn't seal in juices.",
        es: "Sellar crea una costra sabrosa pero no sella los jugos.",
        de: "Anbraten erzeugt eine geschmackvolle Kruste, versiegelt aber keine Säfte.",
        nl: "Aanbraden creëert een smaakvolle korst maar sluit geen sappen in."
      }
    },
    {
      id: 'fd_15',
      question: {
        en: "Ketchup was originally sold as medicine.",
        es: "El kétchup se vendía originalmente como medicina.",
        de: "Ketchup wurde ursprünglich als Medizin verkauft.",
        nl: "Ketchup werd oorspronkelijk als medicijn verkocht."
      },
      isTrue: true,
      explanation: {
        en: "In the 1830s, ketchup was marketed as a cure for indigestion, jaundice, and diarrhea.",
        es: "En la década de 1830, el kétchup se comercializaba como cura para la indigestión.",
        de: "In den 1830er Jahren wurde Ketchup als Heilmittel für Verdauungsstörungen vermarktet.",
        nl: "In de jaren 1830 werd ketchup verkocht als geneesmiddel voor spijsverteringsproblemen."
      }
    },
    {
      id: 'fd_16',
      question: {
        en: "Fortune cookies were invented in China.",
        es: "Las galletas de la fortuna fueron inventadas en China.",
        de: "Glückskekse wurden in China erfunden.",
        nl: "Gelukskoekjes werden uitgevonden in China."
      },
      isTrue: false,
      explanation: {
        en: "Fortune cookies were invented in California by Japanese immigrants in the early 1900s.",
        es: "Las galletas de la fortuna fueron inventadas en California por inmigrantes japoneses.",
        de: "Glückskekse wurden in Kalifornien von japanischen Einwanderern erfunden.",
        nl: "Gelukskoekjes werden uitgevonden in Californië door Japanse immigranten."
      }
    },
    {
      id: 'fd_17',
      question: {
        en: "Avocados are toxic to many animals.",
        es: "Los aguacates son tóxicos para muchos animales.",
        de: "Avocados sind für viele Tiere giftig.",
        nl: "Avocado's zijn giftig voor veel dieren."
      },
      isTrue: true,
      explanation: {
        en: "Avocados contain persin, which is toxic to dogs, cats, horses, birds, and other animals.",
        es: "Los aguacates contienen persina, que es tóxica para perros, gatos, caballos y aves.",
        de: "Avocados enthalten Persin, das für Hunde, Katzen, Pferde und Vögel giftig ist.",
        nl: "Avocado's bevatten persine, dat giftig is voor honden, katten, paarden en vogels."
      }
    },
    {
      id: 'fd_18',
      question: {
        en: "Adding salt to water makes it boil faster.",
        es: "Agregar sal al agua hace que hierva más rápido.",
        de: "Salz ins Wasser zu geben lässt es schneller kochen.",
        nl: "Zout toevoegen aan water laat het sneller koken."
      },
      isTrue: false,
      explanation: {
        en: "Salt actually raises the boiling point slightly, making it take longer. The difference is negligible though.",
        es: "La sal en realidad eleva ligeramente el punto de ebullición, haciendo que tarde más.",
        de: "Salz erhöht tatsächlich den Siedepunkt leicht, wodurch es länger dauert.",
        nl: "Zout verhoogt eigenlijk het kookpunt lichtjes, waardoor het langer duurt."
      }
    },
    {
      id: 'fd_19',
      question: {
        en: "Mushrooms are vegetables.",
        es: "Los hongos son verduras.",
        de: "Pilze sind Gemüse.",
        nl: "Paddenstoelen zijn groenten."
      },
      isTrue: false,
      explanation: {
        en: "Mushrooms are fungi, a completely separate kingdom from plants.",
        es: "Los hongos son hongos, un reino completamente separado de las plantas.",
        de: "Pilze sind Pilze, ein völlig eigenständiges Reich neben Pflanzen.",
        nl: "Paddenstoelen zijn schimmels, een compleet apart rijk van planten."
      }
    },
    {
      id: 'fd_20',
      question: {
        en: "Coca-Cola was originally marketed as a brain tonic.",
        es: "Coca-Cola se comercializó originalmente como un tónico cerebral.",
        de: "Coca-Cola wurde ursprünglich als Gehirntonikum vermarktet.",
        nl: "Coca-Cola werd oorspronkelijk verkocht als hersentonicum."
      },
      isTrue: true,
      explanation: {
        en: "When Coca-Cola was invented in 1886 by pharmacist John Pemberton, it was marketed as a medicine claiming to cure headaches and nervous disorders, advertised as a 'brain tonic'.",
        es: "Cuando Coca-Cola fue inventada en 1886 por el farmacéutico John Pemberton, se comercializó como un medicamento que afirmaba curar dolores de cabeza y trastornos nerviosos, anunciado como un 'tónico cerebral'.",
        de: "Als Coca-Cola 1886 vom Apotheker John Pemberton erfunden wurde, wurde es als Medizin vermarktet, das Kopfschmerzen und Nervenstörungen heilen sollte, beworben als 'Gehirntonikum'.",
        nl: "Toen Coca-Cola in 1886 werd uitgevonden door apotheker John Pemberton, werd het verkocht als een medicijn dat hoofdpijn en zenuwstoornissen zou genezen, geadverteerd als een 'hersentonicum'."
      }
    },
    {
      id: 'fd_21',
      question: {
        en: "Eating turkey makes you sleepy because of tryptophan.",
        es: "Comer pavo te da sueño por el triptófano.",
        de: "Truthahn essen macht müde wegen Tryptophan.",
        nl: "Kalkoen eten maakt je slaperig door tryptofaan."
      },
      isTrue: false,
      explanation: {
        en: "Turkey has no more tryptophan than chicken or beef. The sleepiness comes from overeating and carbs.",
        es: "El pavo no tiene más triptófano que el pollo o la carne. La somnolencia viene de comer demasiado.",
        de: "Truthahn hat nicht mehr Tryptophan als Huhn oder Rind. Die Müdigkeit kommt vom Überessen.",
        nl: "Kalkoen heeft niet meer tryptofaan dan kip of rundvlees. De slaperigheid komt van te veel eten."
      }
    },
    {
      id: 'fd_22',
      question: {
        en: "Pineapple contains an enzyme that digests protein.",
        es: "La piña contiene una enzima que digiere proteínas.",
        de: "Ananas enthält ein Enzym, das Protein verdaut.",
        nl: "Ananas bevat een enzym dat eiwitten verteert."
      },
      isTrue: true,
      explanation: {
        en: "Bromelain in pineapple breaks down proteins, which is why your mouth can feel weird after eating it.",
        es: "La bromelina en la piña descompone las proteínas, por eso tu boca puede sentirse rara.",
        de: "Bromelain in Ananas baut Proteine ab, weshalb sich dein Mund danach komisch anfühlen kann.",
        nl: "Bromelaïne in ananas breekt eiwitten af, daarom kan je mond zich raar voelen na het eten."
      }
    },
    {
      id: 'fd_23',
      question: {
        en: "Red Bull contains bull semen.",
        es: "Red Bull contiene semen de toro.",
        de: "Red Bull enthält Stiersperma.",
        nl: "Red Bull bevat stierensperma."
      },
      isTrue: false,
      explanation: {
        en: "This is a complete myth. Red Bull contains taurine, an amino acid, not bull semen.",
        es: "Este es un mito completo. Red Bull contiene taurina, un aminoácido, no semen de toro.",
        de: "Dies ist ein völliger Mythos. Red Bull enthält Taurin, eine Aminosäure, nicht Stiersperma.",
        nl: "Dit is een complete mythe. Red Bull bevat taurine, een aminozuur, geen stierensperma."
      }
    },
    {
      id: 'fd_24',
      question: {
        en: "Wasabi served in most restaurants is actually horseradish.",
        es: "El wasabi servido en la mayoría de los restaurantes es en realidad rábano picante.",
        de: "Das in den meisten Restaurants servierte Wasabi ist eigentlich Meerrettich.",
        nl: "Wasabi geserveerd in de meeste restaurants is eigenlijk mierikswortel."
      },
      isTrue: true,
      explanation: {
        en: "Real wasabi is expensive and rare. Most restaurants use dyed horseradish paste instead.",
        es: "El wasabi real es caro y raro. La mayoría de los restaurantes usan pasta de rábano picante teñida.",
        de: "Echter Wasabi ist teuer und selten. Die meisten Restaurants verwenden gefärbte Meerrettichpaste.",
        nl: "Echte wasabi is duur en zeldzaam. De meeste restaurants gebruiken gekleurde mierikswortelspasta."
      }
    },
    {
      id: 'fd_25',
      question: {
        en: "Margarine contains more trans fats than butter.",
        es: "La margarina contiene más grasas trans que la mantequilla.",
        de: "Margarine enthält mehr Transfette als Butter.",
        nl: "Margarine bevat meer transvet dan boter."
      },
      isTrue: false,
      explanation: {
        en: "Modern margarine has less trans fat than it used to. Many brands now have zero trans fats.",
        es: "La margarina moderna tiene menos grasas trans que antes. Muchas marcas ahora tienen cero grasas trans.",
        de: "Moderne Margarine hat weniger Transfette als früher. Viele Marken haben jetzt null Transfette.",
        nl: "Moderne margarine heeft minder transvet dan vroeger. Veel merken hebben nu nul transvet."
      }
    },
    {
      id: 'fd_26',
      question: {
        en: "Oysters are alive when you eat them.",
        es: "Las ostras están vivas cuando las comes.",
        de: "Austern sind lebendig, wenn man sie isst.",
        nl: "Oesters zijn levend wanneer je ze eet."
      },
      isTrue: true,
      explanation: {
        en: "Fresh oysters should be alive right before consumption to ensure they're safe to eat.",
        es: "Las ostras frescas deben estar vivas justo antes del consumo para asegurar que sean seguras.",
        de: "Frische Austern sollten kurz vor dem Verzehr noch lebendig sein, um sicherzustellen, dass sie sicher sind.",
        nl: "Verse oesters moeten levend zijn vlak voor consumptie om te zorgen dat ze veilig zijn."
      }
    },
    {
      id: 'fd_27',
      question: {
        en: "Brown eggs are healthier than white eggs.",
        es: "Los huevos marrones son más saludables que los huevos blancos.",
        de: "Braune Eier sind gesünder als weiße Eier.",
        nl: "Bruine eieren zijn gezonder dan witte eieren."
      },
      isTrue: false,
      explanation: {
        en: "Egg color depends on the breed of chicken, not nutritional value. Both are equally nutritious.",
        es: "El color del huevo depende de la raza del pollo, no del valor nutricional.",
        de: "Die Eifarbe hängt von der Hühnerrasse ab, nicht vom Nährwert.",
        nl: "De kleur van het ei hangt af van het kippenras, niet van de voedingswaarde."
      }
    },
    {
      id: 'fd_28',
      question: {
        en: "Microwave cooking destroys nutrients in food.",
        es: "Cocinar en microondas destruye los nutrientes de los alimentos.",
        de: "Mikrowellenkochen zerstört Nährstoffe in Lebensmitteln.",
        nl: "Magnetron koken vernietigt voedingsstoffen in voedsel."
      },
      isTrue: false,
      explanation: {
        en: "Microwaves actually preserve nutrients better than some cooking methods due to shorter cooking times.",
        es: "Los microondas en realidad preservan mejor los nutrientes debido a tiempos de cocción más cortos.",
        de: "Mikrowellen bewahren Nährstoffe tatsächlich besser als einige Kochmethoden aufgrund kürzerer Garzeiten.",
        nl: "Magnetrons behouden voedingsstoffen eigenlijk beter door kortere kooktijden."
      }
    },
    {
      id: 'fd_29',
      question: {
        en: "White chocolate is more dangerous to dogs than dark chocolate.",
        es: "El chocolate blanco es más peligroso para los perros que el chocolate negro.",
        de: "Weiße Schokolade ist für Hunde gefährlicher als dunkle Schokolade.",
        nl: "Witte chocolade is gevaarlijker voor honden dan pure chocolade."
      },
      isTrue: false,
      explanation: {
        en: "Dark chocolate is actually more dangerous because it contains higher levels of theobromine, the compound toxic to dogs. White chocolate has minimal theobromine and is the least dangerous type.",
        es: "El chocolate negro es en realidad más peligroso porque contiene niveles más altos de teobromina, el compuesto tóxico para los perros. El chocolate blanco tiene una teobromina mínima y es el tipo menos peligroso.",
        de: "Dunkle Schokolade ist tatsächlich gefährlicher, weil sie höhere Mengen an Theobromin enthält, die für Hunde giftige Verbindung. Weiße Schokolade enthält minimal Theobromin und ist am wenigsten gefährlich.",
        nl: "Pure chocolade is eigenlijk gevaarlijker omdat het hogere niveaus van theobromine bevat, de stof die giftig is voor honden. Witte chocolade heeft minimale theobromine en is het minst gevaarlijke type."
      }
    },
    {
      id: 'fd_30',
      question: {
        en: "Organic food is always more nutritious.",
        es: "Los alimentos orgánicos son siempre más nutritivos.",
        de: "Bio-Lebensmittel sind immer nahrhafter.",
        nl: "Biologisch voedsel is altijd voedzamer."
      },
      isTrue: false,
      explanation: {
        en: "Studies show no significant nutritional difference. Organic refers to farming methods, not nutrition.",
        es: "Los estudios muestran que no hay diferencia nutricional significativa.",
        de: "Studien zeigen keinen signifikanten Ernährungsunterschied.",
        nl: "Studies tonen geen significant voedingsverschil aan."
      }
    },
    {
      id: 'fd_31',
      question: {
        en: "MSG (monosodium glutamate) is harmful to your health.",
        es: "El MSG (glutamato monosódico) es dañino para la salud.",
        de: "MSG (Mononatriumglutamat) ist gesundheitsschädlich.",
        nl: "MSG (mononatriumglutamaat) is schadelijk voor je gezondheid."
      },
      isTrue: false,
      explanation: {
        en: "MSG is generally recognized as safe by the FDA. Negative reactions are rare and mild.",
        es: "El MSG es generalmente reconocido como seguro por la FDA.",
        de: "MSG wird von der FDA allgemein als sicher anerkannt.",
        nl: "MSG wordt algemeen als veilig erkend door de FDA."
      }
    },
    {
      id: 'fd_32',
      question: {
        en: "Apples float in water because they are 25% air.",
        es: "Las manzanas flotan en el agua porque son 25% aire.",
        de: "Äpfel schwimmen im Wasser, weil sie zu 25% aus Luft bestehen.",
        nl: "Appels drijven in water omdat ze 25% lucht zijn."
      },
      isTrue: true,
      explanation: {
        en: "The air pockets inside apples make them buoyant, which is why apple bobbing works.",
        es: "Las bolsas de aire dentro de las manzanas las hacen flotantes.",
        de: "Die Lufttaschen in Äpfeln machen sie schwimmfähig.",
        nl: "De luchtzakjes in appels maken ze drijvend."
      }
    },
    {
      id: 'fd_33',
      question: {
        en: "Alcohol kills brain cells.",
        es: "El alcohol mata las células cerebrales.",
        de: "Alkohol tötet Gehirnzellen.",
        nl: "Alcohol doodt hersencellen."
      },
      isTrue: false,
      explanation: {
        en: "Alcohol can damage brain connections but doesn't directly kill brain cells in moderate amounts.",
        es: "El alcohol puede dañar las conexiones cerebrales pero no mata directamente las células cerebrales.",
        de: "Alkohol kann Hirnverbindungen schädigen, tötet aber nicht direkt Gehirnzellen.",
        nl: "Alcohol kan hersenverbindingen beschadigen maar doodt niet direct hersencellen."
      }
    },
    {
      id: 'fd_34',
      question: {
        en: "Cranberries bounce when they are ripe.",
        es: "Los arándanos rebotan cuando están maduros.",
        de: "Cranberries hüpfen, wenn sie reif sind.",
        nl: "Veenbessen stuiteren wanneer ze rijp zijn."
      },
      isTrue: true,
      explanation: {
        en: "Ripe cranberries have air pockets that make them bounce. This is used as a quality test.",
        es: "Los arándanos maduros tienen bolsas de aire que los hacen rebotar.",
        de: "Reife Cranberries haben Lufttaschen, die sie hüpfen lassen.",
        nl: "Rijpe veenbessen hebben luchtzakjes die ze doen stuiteren."
      }
    },
    {
      id: 'fd_35',
      question: {
        en: "Strawberries are berries.",
        es: "Las fresas son bayas.",
        de: "Erdbeeren sind Beeren.",
        nl: "Aardbeien zijn bessen."
      },
      isTrue: false,
      explanation: {
        en: "Botanically, strawberries are not berries. Bananas, tomatoes, and grapes are true berries.",
        es: "Botánicamente, las fresas no son bayas. Los plátanos, tomates y uvas son bayas verdaderas.",
        de: "Botanisch gesehen sind Erdbeeren keine Beeren. Bananen, Tomaten und Trauben sind echte Beeren.",
        nl: "Botanisch gezien zijn aardbeien geen bessen. Bananen, tomaten en druiven zijn echte bessen."
      }
    },
    {
      id: 'fd_36',
      question: {
        en: "Green potatoes are poisonous.",
        es: "Las patatas verdes son venenosas.",
        de: "Grüne Kartoffeln sind giftig.",
        nl: "Groene aardappelen zijn giftig."
      },
      isTrue: true,
      explanation: {
        en: "Green color indicates solanine, a toxic compound. Cut away green parts before cooking.",
        es: "El color verde indica solanina, un compuesto tóxico.",
        de: "Grüne Farbe zeigt Solanin an, eine giftige Verbindung.",
        nl: "Groene kleur duidt op solanine, een giftige verbinding."
      }
    },
    {
      id: 'fd_37',
      question: {
        en: "Sushi means 'raw fish' in Japanese.",
        es: "Sushi significa 'pescado crudo' en japonés.",
        de: "Sushi bedeutet 'roher Fisch' auf Japanisch.",
        nl: "Sushi betekent 'rauwe vis' in het Japans."
      },
      isTrue: false,
      explanation: {
        en: "Sushi actually means 'sour rice', referring to the vinegared rice used in the dish.",
        es: "Sushi en realidad significa 'arroz agrio', refiriéndose al arroz con vinagre.",
        de: "Sushi bedeutet tatsächlich 'saurer Reis', bezogen auf den Essig-Reis.",
        nl: "Sushi betekent eigenlijk 'zure rijst', verwijzend naar de azijnrijst."
      }
    },
    {
      id: 'fd_38',
      question: {
        en: "Chili peppers can cause chemical burns.",
        es: "Los chiles pueden causar quemaduras químicas.",
        de: "Chilischoten können chemische Verbrennungen verursachen.",
        nl: "Chilipepers kunnen chemische brandwonden veroorzaken."
      },
      isTrue: true,
      explanation: {
        en: "Capsaicin in peppers can cause painful burns. Always wash hands after handling hot peppers.",
        es: "La capsaicina en los chiles puede causar quemaduras dolorosas.",
        de: "Capsaicin in Paprika kann schmerzhafte Verbrennungen verursachen.",
        nl: "Capsaïcine in pepers kan pijnlijke brandwonden veroorzaken."
      }
    },
    {
      id: 'fd_39',
      question: {
        en: "Vitamin C cures the common cold.",
        es: "La vitamina C cura el resfriado común.",
        de: "Vitamin C heilt die Erkältung.",
        nl: "Vitamine C geneest verkoudheid."
      },
      isTrue: false,
      explanation: {
        en: "Vitamin C may slightly reduce cold duration but doesn't cure or prevent colds.",
        es: "La vitamina C puede reducir ligeramente la duración del resfriado pero no lo cura.",
        de: "Vitamin C kann die Erkältungsdauer leicht reduzieren, heilt aber nicht.",
        nl: "Vitamine C kan de duur van verkoudheid licht verminderen maar geneest niet."
      }
    },
    {
      id: 'fd_40',
      question: {
        en: "Almonds are seeds, not nuts.",
        es: "Las almendras son semillas, no frutos secos.",
        de: "Mandeln sind Samen, keine Nüsse.",
        nl: "Amandelen zijn zaden, geen noten."
      },
      isTrue: true,
      explanation: {
        en: "Almonds are the seeds of the almond tree fruit, making them drupes, not true nuts.",
        es: "Las almendras son las semillas del fruto del almendro, haciéndolas drupas.",
        de: "Mandeln sind die Samen der Mandelbaumfrucht, was sie zu Steinfrüchten macht.",
        nl: "Amandelen zijn de zaden van de amandelboomvrucht, wat ze steenvruchten maakt."
      }
    },
    {
      id: 'fd_41',
      question: {
        en: "Coconut water can be used as blood plasma in emergencies.",
        es: "El agua de coco puede usarse como plasma sanguíneo en emergencias.",
        de: "Kokoswasser kann in Notfällen als Blutplasma verwendet werden.",
        nl: "Kokoswater kan in noodgevallen als bloedplasma worden gebruikt."
      },
      isTrue: true,
      explanation: {
        en: "Due to its sterility and isotonic nature, coconut water has been used as emergency IV fluid.",
        es: "Debido a su esterilidad y naturaleza isotónica, el agua de coco se ha usado como fluido IV de emergencia.",
        de: "Aufgrund seiner Sterilität wurde Kokoswasser als Notfall-IV-Flüssigkeit verwendet.",
        nl: "Vanwege zijn steriliteit is kokoswater gebruikt als nood-IV-vloeistof."
      }
    },
    {
      id: 'fd_42',
      question: {
        en: "Double-dipping spreads a significant amount of bacteria.",
        es: "Mojar dos veces propaga una cantidad significativa de bacterias.",
        de: "Doppeldipping verbreitet eine erhebliche Menge Bakterien.",
        nl: "Dubbel dippen verspreidt een aanzienlijke hoeveelheid bacteriën."
      },
      isTrue: true,
      explanation: {
        en: "Studies show double-dipping transfers thousands of bacteria from your mouth to the dip.",
        es: "Los estudios muestran que mojar dos veces transfiere miles de bacterias de tu boca a la salsa.",
        de: "Studien zeigen, dass Doppeldipping Tausende von Bakterien in den Dip überträgt.",
        nl: "Studies tonen aan dat dubbel dippen duizenden bacteriën overbrengt naar de dip."
      }
    },
    {
      id: 'fd_43',
      question: {
        en: "Gummy bears were invented in Germany.",
        es: "Los ositos de gominola fueron inventados en Alemania.",
        de: "Gummibärchen wurden in Deutschland erfunden.",
        nl: "Gummibeertjes werden uitgevonden in Duitsland."
      },
      isTrue: true,
      explanation: {
        en: "Hans Riegel created Haribo gummy bears in Germany in 1922.",
        es: "Hans Riegel creó los ositos de gominola Haribo en Alemania en 1922.",
        de: "Hans Riegel erfand Haribo-Gummibärchen 1922 in Deutschland.",
        nl: "Hans Riegel creëerde Haribo gummibeertjes in Duitsland in 1922."
      }
    },
    {
      id: 'fd_44',
      question: {
        en: "Eating poppy seeds can make you test positive for opiates.",
        es: "Comer semillas de amapola puede dar positivo en opiáceos.",
        de: "Mohnsamen essen kann einen Opiat-Test positiv machen.",
        nl: "Maanzaad eten kan een positieve opiaattest geven."
      },
      isTrue: true,
      explanation: {
        en: "Poppy seeds contain trace amounts of morphine and codeine that can show up in drug tests.",
        es: "Las semillas de amapola contienen trazas de morfina y codeína que pueden aparecer en pruebas.",
        de: "Mohnsamen enthalten Spuren von Morphin und Codein, die in Tests erscheinen können.",
        nl: "Maanzaad bevat sporen morfine en codeïne die in drugtests kunnen verschijnen."
      }
    },
    {
      id: 'fd_45',
      question: {
        en: "Cheese is the most stolen food in the world.",
        es: "El queso es el alimento más robado del mundo.",
        de: "Käse ist das meistgestohlene Lebensmittel der Welt.",
        nl: "Kaas is het meest gestolen voedsel ter wereld."
      },
      isTrue: true,
      explanation: {
        en: "About 4% of all cheese produced worldwide is stolen, making it the #1 most shoplifted food.",
        es: "Aproximadamente el 4% de todo el queso producido mundialmente es robado.",
        de: "Etwa 4% aller weltweit produzierten Käse wird gestohlen.",
        nl: "Ongeveer 4% van alle wereldwijd geproduceerde kaas wordt gestolen."
      }
    },
    {
      id: 'fd_46',
      question: {
        en: "Lemons contain more sugar than strawberries.",
        es: "Los limones contienen más azúcar que las fresas.",
        de: "Zitronen enthalten mehr Zucker als Erdbeeren.",
        nl: "Citroenen bevatten meer suiker dan aardbeien."
      },
      isTrue: false,
      explanation: {
        en: "Lemons have about 2.5g of sugar per 100g, while strawberries have about 4.9g. Strawberries contain nearly twice as much sugar as lemons.",
        es: "Los limones tienen aproximadamente 2.5g de azúcar por 100g, mientras que las fresas tienen 4.9g. Las fresas contienen casi el doble de azúcar que los limones.",
        de: "Zitronen haben etwa 2,5g Zucker pro 100g, Erdbeeren etwa 4,9g. Erdbeeren enthalten fast doppelt so viel Zucker wie Zitronen.",
        nl: "Citroenen hebben ongeveer 2,5g suiker per 100g, aardbeien ongeveer 4,9g. Aardbeien bevatten bijna twee keer zoveel suiker als citroenen."
      }
    },
    {
      id: 'fd_47',
      question: {
        en: "Yams and sweet potatoes are the same thing.",
        es: "Los ñames y las batatas son lo mismo.",
        de: "Yamswurzeln und Süßkartoffeln sind dasselbe.",
        nl: "Yams en zoete aardappelen zijn hetzelfde."
      },
      isTrue: false,
      explanation: {
        en: "They're completely different plants from different families. True yams are rarely sold in the US.",
        es: "Son plantas completamente diferentes de familias distintas.",
        de: "Sie sind völlig verschiedene Pflanzen aus unterschiedlichen Familien.",
        nl: "Ze zijn compleet verschillende planten uit verschillende families."
      }
    },
    {
      id: 'fd_48',
      question: {
        en: "Rhubarb leaves are poisonous.",
        es: "Las hojas de ruibarbo son venenosas.",
        de: "Rhabarberblätter sind giftig.",
        nl: "Rabarberbladeren zijn giftig."
      },
      isTrue: true,
      explanation: {
        en: "Rhubarb leaves contain high levels of oxalic acid, which can be toxic. Only eat the stalks.",
        es: "Las hojas de ruibarbo contienen altos niveles de ácido oxálico, que puede ser tóxico.",
        de: "Rhabarberblätter enthalten hohe Mengen an Oxalsäure, die giftig sein kann.",
        nl: "Rabarberbladeren bevatten hoge niveaus oxaalzuur, dat giftig kan zijn."
      }
    },
    {
      id: 'fd_49',
      question: {
        en: "Decaffeinated coffee contains no caffeine.",
        es: "El café descafeinado no contiene cafeína.",
        de: "Entkoffeinierter Kaffee enthält kein Koffein.",
        nl: "Cafeïnevrije koffie bevat geen cafeïne."
      },
      isTrue: false,
      explanation: {
        en: "Decaf still contains 2-15mg of caffeine per cup, compared to 80-100mg in regular coffee.",
        es: "El descafeinado todavía contiene 2-15mg de cafeína por taza.",
        de: "Entkoffeinierter Kaffee enthält noch 2-15mg Koffein pro Tasse.",
        nl: "Cafeïnevrije koffie bevat nog steeds 2-15mg cafeïne per kopje."
      }
    },
    {
      id: 'fd_50',
      question: {
        en: "Nutmeg is hallucinogenic in large doses.",
        es: "La nuez moscada es alucinógena en grandes dosis.",
        de: "Muskatnuss ist in großen Dosen halluzinogen.",
        nl: "Nootmuskaat is hallucinogeen in grote doses."
      },
      isTrue: true,
      explanation: {
        en: "Nutmeg contains myristicin, which can cause hallucinations, but also severe side effects. Don't try this!",
        es: "La nuez moscada contiene miristicina, que puede causar alucinaciones.",
        de: "Muskatnuss enthält Myristicin, das Halluzinationen verursachen kann.",
        nl: "Nootmuskaat bevat myristicine, dat hallucinaties kan veroorzaken."
      }
    },
    {
      id: 'fd_51',
      question: {
        en: "Cashews grow on trees inside a shell like other nuts.",
        es: "Los anacardos crecen en árboles dentro de una cáscara como otros frutos secos.",
        de: "Cashewnüsse wachsen auf Bäumen in einer Schale wie andere Nüsse.",
        nl: "Cashewnoten groeien aan bomen in een schil zoals andere noten."
      },
      isTrue: false,
      explanation: {
        en: "Cashews grow outside the fruit (cashew apple) and are never sold in shells because the shell is toxic.",
        es: "Los anacardos crecen fuera de la fruta y nunca se venden con cáscara porque es tóxica.",
        de: "Cashewnüsse wachsen außerhalb der Frucht und werden nie mit Schale verkauft, da diese giftig ist.",
        nl: "Cashewnoten groeien buiten de vrucht en worden nooit in de schil verkocht omdat deze giftig is."
      }
    },
    {
      id: 'fd_52',
      question: {
        en: "Pretzels were invented by monks as rewards for children.",
        es: "Los pretzels fueron inventados por monjes como recompensas para niños.",
        de: "Brezeln wurden von Mönchen als Belohnung für Kinder erfunden.",
        nl: "Pretzels werden uitgevonden door monniken als beloningen voor kinderen."
      },
      isTrue: true,
      explanation: {
        en: "Italian monks created pretzels in the 7th century to reward children who learned their prayers.",
        es: "Los monjes italianos crearon los pretzels en el siglo VII para recompensar a los niños.",
        de: "Italienische Mönche erfanden Brezeln im 7. Jahrhundert als Belohnung für Kinder.",
        nl: "Italiaanse monniken creëerden pretzels in de 7e eeuw om kinderen te belonen."
      }
    },
    {
      id: 'fd_53',
      question: {
        en: "Ranch dressing was created at a ranch.",
        es: "El aderezo ranch fue creado en un rancho.",
        de: "Ranch-Dressing wurde auf einer Ranch kreiert.",
        nl: "Ranch dressing werd gecreëerd op een ranch."
      },
      isTrue: true,
      explanation: {
        en: "Steve Henson created ranch dressing at Hidden Valley Ranch in California in the 1950s.",
        es: "Steve Henson creó el aderezo ranch en Hidden Valley Ranch en California en los años 50.",
        de: "Steve Henson erfand Ranch-Dressing auf der Hidden Valley Ranch in Kalifornien in den 1950ern.",
        nl: "Steve Henson creëerde ranch dressing op Hidden Valley Ranch in Californië in de jaren 50."
      }
    },
    {
      id: 'fd_54',
      question: {
        en: "McDonald's once made bubblegum-flavored broccoli.",
        es: "McDonald's una vez hizo brócoli con sabor a chicle.",
        de: "McDonald's stellte einmal Brokkoli mit Kaugummi-Geschmack her.",
        nl: "McDonald's maakte ooit broccoli met kauwgom smaak."
      },
      isTrue: true,
      explanation: {
        en: "McDonald's tried to make broccoli more appealing to kids with bubblegum flavor. Kids hated it.",
        es: "McDonald's intentó hacer el brócoli más atractivo para los niños con sabor a chicle.",
        de: "McDonald's versuchte, Brokkoli für Kinder mit Kaugummi-Geschmack attraktiver zu machen.",
        nl: "McDonald's probeerde broccoli aantrekkelijker te maken voor kinderen met kauwgomsmaak."
      }
    },
    {
      id: 'fd_55',
      question: {
        en: "Figs are pollinated by wasps, and some figs contain dead wasps.",
        es: "Los higos son polinizados por avispas, y algunos higos contienen avispas muertas.",
        de: "Feigen werden von Wespen bestäubt, und einige Feigen enthalten tote Wespen.",
        nl: "Vijgen worden bestuifd door wespen, en sommige vijgen bevatten dode wespen."
      },
      isTrue: true,
      explanation: {
        en: "Fig wasps enter figs to pollinate them. The wasp is digested by enzymes, becoming part of the fig.",
        es: "Las avispas de higo entran en los higos para polinizarlos y son digeridas por enzimas.",
        de: "Feigenwespen kriechen in Feigen zur Bestäubung und werden von Enzymen verdaut.",
        nl: "Vijgenwespen kruipen in vijgen om te bestuiven en worden verteerd door enzymen."
      }
    },
    {
      id: 'fd_56',
      question: {
        en: "Ice cream was invented in China.",
        es: "El helado fue inventado en China.",
        de: "Eiscreme wurde in China erfunden.",
        nl: "IJs werd uitgevonden in China."
      },
      isTrue: true,
      explanation: {
        en: "Ancient China created a frozen milk and rice mixture around 200 BC, an early form of ice cream.",
        es: "La antigua China creó una mezcla congelada de leche y arroz alrededor del 200 a.C.",
        de: "Das alte China schuf eine gefrorene Milch-Reis-Mischung um 200 v. Chr.",
        nl: "Het oude China creëerde een bevroren melk-en-rijst mengsel rond 200 v.Chr."
      }
    },
    {
      id: 'fd_57',
      question: {
        en: "Pepper was once used as currency.",
        es: "La pimienta se usó una vez como moneda.",
        de: "Pfeffer wurde einst als Währung verwendet.",
        nl: "Peper werd ooit als valuta gebruikt."
      },
      isTrue: true,
      explanation: {
        en: "In medieval Europe, pepper was so valuable it was used to pay rent, taxes, and dowries.",
        es: "En la Europa medieval, la pimienta era tan valiosa que se usaba para pagar alquiler e impuestos.",
        de: "Im mittelalterlichen Europa war Pfeffer so wertvoll, dass er als Zahlungsmittel diente.",
        nl: "In middeleeuws Europa was peper zo waardevol dat het werd gebruikt om huur en belastingen te betalen."
      }
    },
    {
      id: 'fd_58',
      question: {
        en: "Apple seeds contain cyanide.",
        es: "Las semillas de manzana contienen cianuro.",
        de: "Apfelkerne enthalten Zyanid.",
        nl: "Appelpitten bevatten cyanide."
      },
      isTrue: true,
      explanation: {
        en: "Apple seeds contain amygdalin, which releases cyanide when digested. However, you'd need to chew many seeds for it to be dangerous.",
        es: "Las semillas de manzana contienen amigdalina, que libera cianuro al digerirse.",
        de: "Apfelkerne enthalten Amygdalin, das beim Verdauen Zyanid freisetzt.",
        nl: "Appelpitten bevatten amygdaline, dat cyanide vrijgeeft bij vertering."
      }
    },
    {
      id: 'fd_59',
      question: {
        en: "Lobsters were once considered poor people's food.",
        es: "Las langostas alguna vez se consideraron comida de pobres.",
        de: "Hummer wurden einst als Arme-Leute-Essen betrachtet.",
        nl: "Kreeften werden ooit beschouwd als voedsel voor armen."
      },
      isTrue: true,
      explanation: {
        en: "In colonial America, lobsters were so plentiful they were fed to prisoners and servants.",
        es: "En la América colonial, las langostas eran tan abundantes que se daban a prisioneros y sirvientes.",
        de: "Im kolonialen Amerika waren Hummer so reichlich, dass sie an Gefangene verfüttert wurden.",
        nl: "In koloniaal Amerika waren kreeften zo overvloedig dat ze aan gevangenen werden gevoerd."
      }
    },
    {
      id: 'fd_60',
      question: {
        en: "The most expensive spice in the world is vanilla.",
        es: "La especia más cara del mundo es la vainilla.",
        de: "Das teuerste Gewürz der Welt ist Vanille.",
        nl: "Het duurste kruid ter wereld is vanille."
      },
      isTrue: false,
      explanation: {
        en: "Saffron is the most expensive spice, costing up to $5,000 per pound. It takes 75,000 flowers to make one pound.",
        es: "El azafrán es la especia más cara, costando hasta $5,000 por libra.",
        de: "Safran ist das teuerste Gewürz und kostet bis zu $5.000 pro Pfund.",
        nl: "Saffraan is het duurste kruid, kostend tot $5.000 per pond."
      }
    },
    {
      id: 'fd_61',
      question: {
        en: "Peanut allergies are more common now than they were 30 years ago.",
        es: "Las alergias al maní son más comunes ahora que hace 30 años.",
        de: "Erdnussallergien sind heute häufiger als vor 30 Jahren.",
        nl: "Pinda-allergieën zijn nu vaker dan 30 jaar geleden."
      },
      isTrue: true,
      explanation: {
        en: "Peanut allergies have increased significantly since the 1990s, possibly due to dietary changes and hygiene hypothesis factors.",
        es: "Las alergias al maní han aumentado significativamente desde los años 90, posiblemente debido a cambios dietéticos.",
        de: "Erdnussallergien haben seit den 1990er Jahren deutlich zugenommen, möglicherweise aufgrund von Ernährungsänderungen.",
        nl: "Pinda-allergieën zijn aanzienlijk toegenomen sinds de jaren 90, mogelijk door voedingsveranderingen."
      }
    },
    {
      id: 'fd_62',
      question: {
        en: "Watermelons are 92% water.",
        es: "Las sandías son 92% agua.",
        de: "Wassermelonen bestehen zu 92% aus Wasser.",
        nl: "Watermeloenen zijn 92% water."
      },
      isTrue: true,
      explanation: {
        en: "Watermelons have one of the highest water contents of any fruit, making them very hydrating.",
        es: "Las sandías tienen uno de los contenidos de agua más altos de cualquier fruta.",
        de: "Wassermelonen haben einen der höchsten Wassergehalte aller Früchte.",
        nl: "Watermeloenen hebben een van de hoogste watergehaltes van alle vruchten."
      }
    },
    {
      id: 'fd_63',
      question: {
        en: "Jellybeans have a shellac coating made from insect secretions.",
        es: "Las gomitas tienen un recubrimiento de goma laca hecho de secreciones de insectos.",
        de: "Jelly Beans haben eine Schellack-Beschichtung aus Insektensekreten.",
        nl: "Jellybeans hebben een schellak coating gemaakt van insectensecreties."
      },
      isTrue: true,
      explanation: {
        en: "The shiny coating comes from shellac (confectioner's glaze), made from lac beetle secretions.",
        es: "El recubrimiento brillante proviene de la goma laca, hecha de secreciones de escarabajos.",
        de: "Die glänzende Beschichtung stammt von Schellack, hergestellt aus Lackkäfer-Sekret.",
        nl: "De glanzende coating komt van schellak, gemaakt van lakkeversecreties."
      }
    },
    {
      id: 'fd_64',
      question: {
        en: "Cucumbers are 96% water, more than watermelons.",
        es: "Los pepinos son 96% agua, más que las sandías.",
        de: "Gurken bestehen zu 96% aus Wasser, mehr als Wassermelonen.",
        nl: "Komkommers zijn 96% water, meer dan watermeloenen."
      },
      isTrue: true,
      explanation: {
        en: "Cucumbers have the highest water content of common foods at 96%, beating watermelons at 92%.",
        es: "Los pepinos tienen el contenido de agua más alto de los alimentos comunes con un 96%.",
        de: "Gurken haben mit 96% den höchsten Wassergehalt unter gängigen Lebensmitteln.",
        nl: "Komkommers hebben met 96% het hoogste watergehalte van veel voorkomende voedingsmiddelen."
      }
    },
    {
      id: 'fd_65',
      question: {
        en: "Humans share 50% of their DNA with bananas.",
        es: "Los humanos comparten el 50% de su ADN con los plátanos.",
        de: "Menschen teilen 50% ihrer DNA mit Bananen.",
        nl: "Mensen delen 50% van hun DNA met bananen."
      },
      isTrue: true,
      explanation: {
        en: "We share about 50% of our DNA with bananas because we share common ancestors billions of years ago.",
        es: "Compartimos alrededor del 50% de nuestro ADN con los plátanos debido a ancestros comunes.",
        de: "Wir teilen etwa 50% unserer DNA mit Bananen aufgrund gemeinsamer Vorfahren.",
        nl: "We delen ongeveer 50% van ons DNA met bananen vanwege gemeenschappelijke voorouders."
      }
    },
    {
      id: 'fd_66',
      question: {
        en: "Pistachios can spontaneously combust during transport.",
        es: "Los pistachos pueden combustionar espontáneamente durante el transporte.",
        de: "Pistazien können während des Transports spontan brennen.",
        nl: "Pistachenoten kunnen spontaan ontbranden tijdens transport."
      },
      isTrue: true,
      explanation: {
        en: "Pistachios have a high fat content and can self-heat when shipped in large quantities.",
        es: "Los pistachos tienen alto contenido de grasa y pueden autocalentarse en grandes cantidades.",
        de: "Pistazien haben einen hohen Fettgehalt und können sich in großen Mengen selbst erhitzen.",
        nl: "Pistachenoten hebben een hoog vetgehalte en kunnen zichzelf verhitten in grote hoeveelheden."
      }
    },
    {
      id: 'fd_67',
      question: {
        en: "Carrots used to be purple before they were orange.",
        es: "Las zanahorias solían ser púrpuras antes de ser naranjas.",
        de: "Karotten waren früher lila, bevor sie orange wurden.",
        nl: "Wortels waren paars voordat ze oranje werden."
      },
      isTrue: true,
      explanation: {
        en: "Dutch farmers in the 17th century cultivated orange carrots in honor of William of Orange.",
        es: "Los agricultores holandeses en el siglo XVII cultivaron zanahorias naranjas en honor a Guillermo de Orange.",
        de: "Niederländische Bauern züchteten im 17. Jahrhundert orange Karotten zu Ehren Wilhelms von Oranien.",
        nl: "Nederlandse boeren kweekten in de 17e eeuw oranje wortels ter ere van Willem van Oranje."
      }
    },
    {
      id: 'fd_68',
      question: {
        en: "Honey is bee vomit.",
        es: "La miel es vómito de abeja.",
        de: "Honig ist Bienen-Erbrochenes.",
        nl: "Honing is bijenbraaksel."
      },
      isTrue: true,
      explanation: {
        en: "Bees collect nectar, partially digest it, then regurgitate it repeatedly to make honey.",
        es: "Las abejas recolectan néctar, lo digieren parcialmente y luego lo regurgitan repetidamente.",
        de: "Bienen sammeln Nektar, verdauen ihn teilweise und erbrechen ihn wiederholt, um Honig zu machen.",
        nl: "Bijen verzamelen nectar, verteren het gedeeltelijk en braken het herhaaldelijk uit om honing te maken."
      }
    },
    {
      id: 'fd_69',
      question: {
        en: "Radishes were once used as payment for labor in Ancient Egypt.",
        es: "Los rábanos se usaron una vez como pago por trabajo en el Antiguo Egipto.",
        de: "Rettiche wurden im alten Ägypten einst als Bezahlung für Arbeit verwendet.",
        nl: "Radijzen werden ooit gebruikt als betaling voor arbeid in het oude Egypte."
      },
      isTrue: true,
      explanation: {
        en: "Workers building the pyramids were paid in radishes, garlic, and onions.",
        es: "Los trabajadores que construían las pirámides eran pagados en rábanos, ajo y cebollas.",
        de: "Arbeiter, die die Pyramiden bauten, wurden mit Rettichen, Knoblauch und Zwiebeln bezahlt.",
        nl: "Arbeiders die de piramides bouwden werden betaald in radijzen, knoflook en uien."
      }
    },
    {
      id: 'fd_70',
      question: {
        en: "Ripe cranberries will bounce like rubber balls.",
        es: "Los arándanos maduros rebotarán como pelotas de goma.",
        de: "Reife Cranberries hüpfen wie Gummibälle.",
        nl: "Rijpe veenbessen stuiteren als rubberen ballen."
      },
      isTrue: true,
      explanation: {
        en: "Cranberry farmers use 'bounce boards' to test ripeness - only ripe berries bounce.",
        es: "Los agricultores de arándanos usan 'tablas de rebote' para probar la madurez.",
        de: "Cranberry-Bauern nutzen 'Sprungbretter', um die Reife zu testen.",
        nl: "Veenbessenboeren gebruiken 'stuitborden' om rijpheid te testen."
      }
    },
    {
      id: 'fd_71',
      question: {
        en: "Grapes explode when you microwave them.",
        es: "Las uvas explotan cuando las calientas en el microondas.",
        de: "Trauben explodieren, wenn man sie in der Mikrowelle erhitzt.",
        nl: "Druiven exploderen als je ze in de magnetron doet."
      },
      isTrue: true,
      explanation: {
        en: "Cutting a grape almost in half and microwaving it creates plasma and can cause fire.",
        es: "Cortar una uva casi por la mitad y calentarla en microondas crea plasma.",
        de: "Eine Traube fast zu halbieren und sie zu erhitzen erzeugt Plasma.",
        nl: "Een druif bijna doormidden snijden en in de magnetron doen creëert plasma."
      }
    },
    {
      id: 'fd_72',
      question: {
        en: "The Caesar salad was invented in Italy.",
        es: "La ensalada César fue inventada en Italia.",
        de: "Der Caesar-Salat wurde in Italien erfunden.",
        nl: "De Caesarsalade werd uitgevonden in Italië."
      },
      isTrue: false,
      explanation: {
        en: "Caesar Cardini, an Italian immigrant, invented the Caesar salad in Tijuana, Mexico in 1924.",
        es: "Caesar Cardini, un inmigrante italiano, inventó la ensalada César en Tijuana, México en 1924.",
        de: "Caesar Cardini, ein italienischer Einwanderer, erfand den Caesar-Salat 1924 in Tijuana, Mexiko.",
        nl: "Caesar Cardini, een Italiaanse immigrant, vond de Caesarsalade uit in Tijuana, Mexico in 1924."
      }
    },
    {
      id: 'fd_73',
      question: {
        en: "Cashews are never sold in their shells because the shell is toxic.",
        es: "Los anacardos nunca se venden con cáscara porque la cáscara es tóxica.",
        de: "Cashewnüsse werden nie mit Schale verkauft, weil die Schale giftig ist.",
        nl: "Cashewnoten worden nooit in de schil verkocht omdat de schil giftig is."
      },
      isTrue: true,
      explanation: {
        en: "Cashew shells contain urushiol, the same toxin found in poison ivy, which can cause severe skin reactions. They must be carefully processed before eating.",
        es: "Las cáscaras de anacardo contienen urushiol, la misma toxina que la hiedra venenosa, que puede causar reacciones cutáneas graves.",
        de: "Cashewschalen enthalten Urushiol, dasselbe Toxin wie Giftefeu, das schwere Hautreaktionen verursachen kann.",
        nl: "Cashew schillen bevatten urushiol, hetzelfde toxine als gifklimop, dat ernstige huidreacties kan veroorzaken."
      }
    },
    {
      id: 'fd_74',
      question: {
        en: "Kiwi fruits originally came from New Zealand.",
        es: "Los kiwis originalmente venían de Nueva Zelanda.",
        de: "Kiwis kamen ursprünglich aus Neuseeland.",
        nl: "Kiwi's kwamen oorspronkelijk uit Nieuw-Zeeland."
      },
      isTrue: false,
      explanation: {
        en: "Kiwis originated in China and were called 'Chinese gooseberries' before being renamed in New Zealand.",
        es: "Los kiwis se originaron en China y se llamaban 'grosellas chinas'.",
        de: "Kiwis stammen aus China und hießen 'Chinesische Stachelbeeren'.",
        nl: "Kiwi's zijn afkomstig uit China en heetten 'Chinese kruisbessen'."
      }
    },
    {
      id: 'fd_75',
      question: {
        en: "Pound cake got its name because the original recipe called for a pound each of butter, sugar, eggs, and flour.",
        es: "El pound cake obtuvo su nombre porque la receta original requería una libra de mantequilla, azúcar, huevos y harina.",
        de: "Pound Cake bekam seinen Namen, weil das Originalrezept je ein Pfund Butter, Zucker, Eier und Mehl verlangte.",
        nl: "Pound cake kreeg zijn naam omdat het originele recept een pond boter, suiker, eieren en bloem vroeg."
      },
      isTrue: true,
      explanation: {
        en: "The traditional recipe used equal weights (one pound) of each main ingredient, making it easy to remember.",
        es: "La receta tradicional usaba pesos iguales (una libra) de cada ingrediente principal.",
        de: "Das traditionelle Rezept verwendete gleiche Gewichte (ein Pfund) jeder Hauptzutat.",
        nl: "Het traditionele recept gebruikte gelijke gewichten (een pond) van elk hoofdingrediënt."
      }
    },
    {
      id: 'fd_76',
      question: {
        en: "Pringles are legally not potato chips.",
        es: "Pringles legalmente no son papas fritas.",
        de: "Pringles sind rechtlich keine Kartoffelchips.",
        nl: "Pringles zijn juridisch geen chips."
      },
      isTrue: true,
      explanation: {
        en: "Pringles contain only 42% potato content, so they're technically 'potato crisps' not 'potato chips'.",
        es: "Pringles contienen solo 42% de contenido de papa, por lo que técnicamente son 'crisps de papa'.",
        de: "Pringles enthalten nur 42% Kartoffelgehalt, daher sind sie technisch 'Kartoffelchips'.",
        nl: "Pringles bevatten slechts 42% aardappelinhoud, dus technisch zijn het 'aardappelcrisps'."
      }
    },
    {
      id: 'fd_77',
      question: {
        en: "Potatoes were the first food grown in space.",
        es: "Las papas fueron el primer alimento cultivado en el espacio.",
        de: "Kartoffeln waren das erste im Weltraum angebaute Lebensmittel.",
        nl: "Aardappelen waren het eerste voedsel dat in de ruimte werd gekweekt."
      },
      isTrue: true,
      explanation: {
        en: "In 1995, NASA and the University of Wisconsin successfully grew potatoes in space.",
        es: "En 1995, la NASA y la Universidad de Wisconsin cultivaron papas exitosamente en el espacio.",
        de: "1995 bauten NASA und die Universität Wisconsin erfolgreich Kartoffeln im Weltraum an.",
        nl: "In 1995 kweekten NASA en de Universiteit van Wisconsin succesvol aardappelen in de ruimte."
      }
    },
    {
      id: 'fd_78',
      question: {
        en: "Humans and cabbage share about 40-50% of their DNA.",
        es: "Los humanos y el repollo comparten aproximadamente el 40-50% de su ADN.",
        de: "Menschen und Kohl teilen etwa 40-50% ihrer DNA.",
        nl: "Mensen en kool delen ongeveer 40-50% van hun DNA."
      },
      isTrue: true,
      explanation: {
        en: "Due to common evolutionary origins, humans share a surprising amount of DNA with many plants.",
        es: "Debido a orígenes evolutivos comunes, los humanos comparten una cantidad sorprendente de ADN con muchas plantas.",
        de: "Aufgrund gemeinsamer evolutionärer Ursprünge teilen Menschen überraschend viel DNA mit vielen Pflanzen.",
        nl: "Vanwege gemeenschappelijke evolutionaire oorsprong delen mensen verrassend veel DNA met veel planten."
      }
    },
    {
      id: 'fd_79',
      question: {
        en: "Hawaiian pizza was invented in Hawaii.",
        es: "La pizza hawaiana fue inventada en Hawái.",
        de: "Hawaii-Pizza wurde in Hawaii erfunden.",
        nl: "Hawaï pizza werd uitgevonden in Hawaï."
      },
      isTrue: false,
      explanation: {
        en: "Hawaiian pizza was invented by Sam Panopoulos in Canada in 1962.",
        es: "La pizza hawaiana fue inventada por Sam Panopoulos en Canadá en 1962.",
        de: "Hawaii-Pizza wurde 1962 von Sam Panopoulos in Kanada erfunden.",
        nl: "Hawaï pizza werd uitgevonden door Sam Panopoulos in Canada in 1962."
      }
    },
    {
      id: 'fd_80',
      question: {
        en: "Chocolate chip cookies were invented by accident.",
        es: "Las galletas con chispas de chocolate fueron inventadas por accidente.",
        de: "Chocolate-Chip-Kekse wurden durch Zufall erfunden.",
        nl: "Chocolate chip cookies werden per ongeluk uitgevonden."
      },
      isTrue: true,
      explanation: {
        en: "Ruth Wakefield expected chocolate pieces to melt into her cookie dough in 1938, but they didn't, creating the chocolate chip cookie.",
        es: "Ruth Wakefield esperaba que los trozos de chocolate se derritieran en su masa en 1938, pero no lo hicieron.",
        de: "Ruth Wakefield erwartete 1938, dass Schokoladenstücke in ihrem Teig schmelzen würden, aber sie taten es nicht.",
        nl: "Ruth Wakefield verwachtte in 1938 dat chocoladestukjes in haar deeg zouden smelten, maar dat gebeurde niet."
      }
    },
    {
      id: 'fd_81',
      question: {
        en: "The expiration date on bottled water refers to the bottle, not the water.",
        es: "La fecha de vencimiento en el agua embotellada se refiere a la botella, no al agua.",
        de: "Das Verfallsdatum auf Flaschenwasser bezieht sich auf die Flasche, nicht auf das Wasser.",
        nl: "De houdbaarheidsdatum op flessenwater verwijst naar de fles, niet naar het water."
      },
      isTrue: true,
      explanation: {
        en: "Water doesn't expire, but plastic bottles can leach chemicals over time, especially when exposed to heat.",
        es: "El agua no caduca, pero las botellas de plástico pueden liberar químicos con el tiempo.",
        de: "Wasser läuft nicht ab, aber Plastikflaschen können mit der Zeit Chemikalien freisetzen.",
        nl: "Water verloopt niet, maar plastic flessen kunnen na verloop van tijd chemicaliën afgeven."
      }
    },
    {
      id: 'fd_82',
      question: {
        en: "Worcestershire sauce contains anchovies.",
        es: "La salsa Worcestershire contiene anchoas.",
        de: "Worcestershire-Sauce enthält Anchovis.",
        nl: "Worcestershire saus bevat ansjovis."
      },
      isTrue: true,
      explanation: {
        en: "The distinctive flavor of Worcestershire sauce comes from fermented anchovies, among other ingredients.",
        es: "El sabor distintivo de la salsa Worcestershire proviene de anchoas fermentadas.",
        de: "Der unverwechselbare Geschmack der Worcestershire-Sauce stammt von fermentierten Anchovis.",
        nl: "De kenmerkende smaak van Worcestershire saus komt van gefermenteerde ansjovis."
      }
    },
    {
      id: 'fd_83',
      question: {
        en: "Coffee beans are actually seeds, not beans.",
        es: "Los granos de café son en realidad semillas, no granos.",
        de: "Kaffeebohnen sind eigentlich Samen, keine Bohnen.",
        nl: "Koffiebonen zijn eigenlijk zaden, geen bonen."
      },
      isTrue: true,
      explanation: {
        en: "Coffee 'beans' are the seeds of coffee cherries. They're called beans because of their resemblance to legumes.",
        es: "Los 'granos' de café son las semillas de las cerezas de café.",
        de: "Kaffeebohnen sind die Samen von Kaffeekirschen.",
        nl: "Koffiebonen zijn de zaden van koffiekersen."
      }
    },
    {
      id: 'fd_84',
      question: {
        en: "The red liquid in rare steak is blood.",
        es: "El líquido rojo en un filete poco cocido es sangre.",
        de: "Die rote Flüssigkeit in rohem Steak ist Blut.",
        nl: "De rode vloeistof in rood vlees is bloed."
      },
      isTrue: false,
      explanation: {
        en: "The red liquid is myoglobin, a protein that stores oxygen in muscle cells. Blood is removed during processing.",
        es: "El líquido rojo es mioglobina, una proteína que almacena oxígeno en las células musculares.",
        de: "Die rote Flüssigkeit ist Myoglobin, ein Protein, das Sauerstoff in Muskelzellen speichert.",
        nl: "De rode vloeistof is myoglobine, een eiwit dat zuurstof opslaat in spiercellen."
      }
    },
    {
      id: 'fd_85',
      question: {
        en: "Popsicles were invented by an 11-year-old boy.",
        es: "Las paletas heladas fueron inventadas por un niño de 11 años.",
        de: "Eis am Stiel wurde von einem 11-jährigen Jungen erfunden.",
        nl: "IJslolly's werden uitgevonden door een 11-jarige jongen."
      },
      isTrue: true,
      explanation: {
        en: "Frank Epperson accidentally left a drink with a stirring stick outside in freezing weather in 1905, creating the popsicle.",
        es: "Frank Epperson dejó accidentalmente una bebida con un palo afuera en clima helado en 1905.",
        de: "Frank Epperson ließ 1905 versehentlich ein Getränk mit Stab draußen bei Frost stehen.",
        nl: "Frank Epperson liet in 1905 per ongeluk een drankje met een roerstokje buiten staan in vrieskou."
      }
    },
    {
      id: 'fd_86',
      question: {
        en: "Carrots can turn your skin orange if you eat too many.",
        es: "Las zanahorias pueden volver tu piel naranja si comes demasiadas.",
        de: "Karotten können deine Haut orange färben, wenn du zu viele isst.",
        nl: "Wortels kunnen je huid oranje maken als je er te veel van eet."
      },
      isTrue: true,
      explanation: {
        en: "Carotenemia causes skin to turn orange-yellow from excess beta-carotene. It's harmless and reversible.",
        es: "La carotenemia causa que la piel se vuelva naranja-amarilla por exceso de betacaroteno.",
        de: "Karotinämie färbt die Haut orange-gelb durch überschüssiges Beta-Carotin.",
        nl: "Carotenemie zorgt dat de huid oranje-geel wordt door te veel bètacaroteen."
      }
    },
    {
      id: 'fd_87',
      question: {
        en: "Subway's 'Footlong' sandwiches are exactly 12 inches long.",
        es: "Los sándwiches 'Footlong' de Subway miden exactamente 12 pulgadas.",
        de: "Subways 'Footlong'-Sandwiches sind genau 12 Zoll lang.",
        nl: "Subway's 'Footlong' broodjes zijn precies 12 inch lang."
      },
      isTrue: false,
      explanation: {
        en: "Subway faced lawsuits because their footlongs were often 11 inches or less due to baking variations.",
        es: "Subway enfrentó demandas porque sus footlongs a menudo medían 11 pulgadas o menos.",
        de: "Subway wurde verklagt, weil ihre Footlongs oft 11 Zoll oder weniger maßen.",
        nl: "Subway kreeg rechtszaken omdat hun footlongs vaak 11 inch of minder waren."
      }
    },
    {
      id: 'fd_88',
      question: {
        en: "The holes in Swiss cheese are called 'eyes'.",
        es: "Los agujeros en el queso suizo se llaman 'ojos'.",
        de: "Die Löcher im Schweizer Käse heißen 'Augen'.",
        nl: "De gaten in Zwitserse kaas heten 'ogen'."
      },
      isTrue: true,
      explanation: {
        en: "In the cheese industry, the holes are officially called 'eyes', formed by carbon dioxide bubbles during fermentation.",
        es: "En la industria del queso, los agujeros se llaman oficialmente 'ojos'.",
        de: "In der Käseindustrie werden die Löcher offiziell 'Augen' genannt.",
        nl: "In de kaasindustrie worden de gaten officieel 'ogen' genoemd."
      }
    },
    {
      id: 'fd_89',
      question: {
        en: "Onions make you cry because they release sulfuric acid.",
        es: "Las cebollas te hacen llorar porque liberan ácido sulfúrico.",
        de: "Zwiebeln bringen dich zum Weinen, weil sie Schwefelsäure freisetzen.",
        nl: "Uien doen je huilen omdat ze zwavelzuur vrijgeven."
      },
      isTrue: true,
      explanation: {
        en: "When cut, onions release enzymes that form sulfuric acid in your eyes, triggering tears.",
        es: "Al cortarse, las cebollas liberan enzimas que forman ácido sulfúrico en tus ojos.",
        de: "Beim Schneiden setzen Zwiebeln Enzyme frei, die Schwefelsäure in deinen Augen bilden.",
        nl: "Bij het snijden geven uien enzymen af die zwavelzuur vormen in je ogen."
      }
    },
    {
      id: 'fd_90',
      question: {
        en: "Spam (the canned meat) got its name from 'SPiced hAM'.",
        es: "El Spam (la carne enlatada) obtuvo su nombre de 'jamón especiado' en inglés.",
        de: "Spam (das Dosenfleisch) hat seinen Namen von 'SPiced hAM'.",
        nl: "Spam (het ingeblikte vlees) kreeg zijn naam van 'SPiced hAM'."
      },
      isTrue: true,
      explanation: {
        en: "Hormel named it Spam by combining 'spiced' and 'ham', though the exact origin is debated.",
        es: "Hormel lo nombró Spam combinando 'especiado' y 'jamón'.",
        de: "Hormel nannte es Spam durch Kombination von 'spiced' und 'ham'.",
        nl: "Hormel noemde het Spam door 'spiced' en 'ham' te combineren."
      }
    },
    {
      id: 'fd_91',
      question: {
        en: "The most popular pizza topping in Brazil is green peas.",
        es: "El topping de pizza más popular en Brasil son los guisantes verdes.",
        de: "Der beliebteste Pizza-Belag in Brasilien sind grüne Erbsen.",
        nl: "De populairste pizza topping in Brazilië is groene erwten."
      },
      isTrue: true,
      explanation: {
        en: "In Brazil, pizzas topped with green peas, corn, and even hard-boiled eggs are common and popular.",
        es: "En Brasil, las pizzas con guisantes verdes, maíz e incluso huevos duros son comunes.",
        de: "In Brasilien sind Pizzen mit grünen Erbsen, Mais und sogar hartgekochten Eiern üblich.",
        nl: "In Brazilië zijn pizza's met groene erwten, maïs en zelfs hardgekookte eieren gebruikelijk."
      }
    },
    {
      id: 'fd_92',
      question: {
        en: "Crackers have holes in them to prevent them from cracking during baking.",
        es: "Las galletas saladas tienen agujeros para evitar que se agrieten durante el horneado.",
        de: "Cracker haben Löcher, um zu verhindern, dass sie beim Backen brechen.",
        nl: "Crackers hebben gaatjes om te voorkomen dat ze breken tijdens het bakken."
      },
      isTrue: true,
      explanation: {
        en: "The holes allow steam to escape during baking, preventing the crackers from puffing up and cracking.",
        es: "Los agujeros permiten que el vapor escape durante el horneado.",
        de: "Die Löcher lassen Dampf beim Backen entweichen.",
        nl: "De gaatjes laten stoom ontsnappen tijdens het bakken."
      }
    },
    {
      id: 'fd_93',
      question: {
        en: "Lettuce is more nutritious than cabbage.",
        es: "La lechuga es más nutritiva que el repollo.",
        de: "Salat ist nahrhafter als Kohl.",
        nl: "Sla is voedzamer dan kool."
      },
      isTrue: false,
      explanation: {
        en: "Cabbage has significantly more vitamins C and K than lettuce, making it more nutritious.",
        es: "El repollo tiene significativamente más vitaminas C y K que la lechuga.",
        de: "Kohl hat deutlich mehr Vitamin C und K als Salat.",
        nl: "Kool heeft aanzienlijk meer vitamine C en K dan sla."
      }
    },
    {
      id: 'fd_94',
      question: {
        en: "The world's most expensive coffee is made from animal droppings.",
        es: "El café más caro del mundo está hecho de excrementos de animales.",
        de: "Der teuerste Kaffee der Welt wird aus Tierkot hergestellt.",
        nl: "De duurste koffie ter wereld wordt gemaakt van dierenuitwerpselen."
      },
      isTrue: true,
      explanation: {
        en: "Kopi Luwak is made from coffee cherries eaten and excreted by civets. It can cost $600+ per pound.",
        es: "El Kopi Luwak está hecho de cerezas de café comidas y excretadas por civetas.",
        de: "Kopi Luwak wird aus Kaffeekirschen hergestellt, die von Zibetkatzen gefressen und ausgeschieden werden.",
        nl: "Kopi Luwak wordt gemaakt van koffiekersen die door civetkatten worden gegeten en uitgescheiden."
      }
    },
    {
      id: 'fd_95',
      question: {
        en: "Olive oil can be used as a substitute for butter in baking in a 1:1 ratio.",
        es: "El aceite de oliva puede usarse como sustituto de la mantequilla en repostería en una proporción 1:1.",
        de: "Olivenöl kann beim Backen im Verhältnis 1:1 als Butterersatz verwendet werden.",
        nl: "Olijfolie kan worden gebruikt als vervanger voor boter bij bakken in een 1:1 verhouding."
      },
      isTrue: false,
      explanation: {
        en: "You need about 3/4 cup of oil for every 1 cup of butter, not a 1:1 ratio. Butter contains water.",
        es: "Necesitas aproximadamente 3/4 de taza de aceite por cada 1 taza de mantequilla.",
        de: "Man braucht etwa 3/4 Tasse Öl für jede 1 Tasse Butter, nicht 1:1.",
        nl: "Je hebt ongeveer 3/4 kop olie nodig voor elke 1 kop boter, niet 1:1."
      }
    },
    {
      id: 'fd_96',
      question: {
        en: "Tonic water glows under UV light.",
        es: "El agua tónica brilla bajo luz UV.",
        de: "Tonic Water leuchtet unter UV-Licht.",
        nl: "Tonic water gloeit onder UV-licht."
      },
      isTrue: true,
      explanation: {
        en: "Quinine in tonic water fluoresces blue under ultraviolet light.",
        es: "La quinina en el agua tónica fluoresce azul bajo luz ultravioleta.",
        de: "Chinin in Tonic Water fluoresziert blau unter UV-Licht.",
        nl: "Kinine in tonic water fluoresceert blauw onder ultraviolet licht."
      }
    },
    {
      id: 'fd_97',
      question: {
        en: "Quinoa is a grain.",
        es: "La quinoa es un grano.",
        de: "Quinoa ist ein Getreide.",
        nl: "Quinoa is een graan."
      },
      isTrue: false,
      explanation: {
        en: "Quinoa is actually a seed from the goosefoot plant family, not a true grain.",
        es: "La quinoa es en realidad una semilla de la familia de las quenopodiáceas, no un grano verdadero.",
        de: "Quinoa ist eigentlich ein Samen aus der Gänsefußgewächs-Familie, kein echtes Getreide.",
        nl: "Quinoa is eigenlijk een zaad uit de ganzevoetfamilie, geen echt graan."
      }
    },
    {
      id: 'fd_98',
      question: {
        en: "Twinkies have an indefinite shelf life.",
        es: "Los Twinkies tienen una vida útil indefinida.",
        de: "Twinkies haben eine unbegrenzte Haltbarkeit.",
        nl: "Twinkies hebben een onbeperkte houdbaarheid."
      },
      isTrue: false,
      explanation: {
        en: "Despite the myth, Twinkies only have a shelf life of about 45 days, not forever.",
        es: "A pesar del mito, los Twinkies solo tienen una vida útil de aproximadamente 45 días.",
        de: "Trotz des Mythos haben Twinkies nur eine Haltbarkeit von etwa 45 Tagen.",
        nl: "Ondanks de mythe hebben Twinkies slechts een houdbaarheid van ongeveer 45 dagen."
      }
    },
    {
      id: 'fd_99',
      question: {
        en: "The color of a chili pepper indicates its heat level.",
        es: "El color de un chile indica su nivel de picante.",
        de: "Die Farbe einer Chilischote zeigt ihren Schärfegrad an.",
        nl: "De kleur van een chilipeper geeft het pittigheid niveau aan."
      },
      isTrue: false,
      explanation: {
        en: "Color doesn't indicate heat. The Scoville scale measures heat, and peppers of any color can be hot or mild.",
        es: "El color no indica el picante. La escala Scoville mide el picante.",
        de: "Farbe zeigt nicht die Schärfe an. Die Scoville-Skala misst die Schärfe.",
        nl: "Kleur geeft pittigheid niet aan. De Scoville-schaal meet pittigheid."
      }
    },
    {
      id: 'fd_100',
      question: {
        en: "A chef's hat has 100 pleats to represent 100 ways to cook an egg.",
        es: "El gorro de chef tiene 100 pliegues para representar 100 formas de cocinar un huevo.",
        de: "Eine Kochmütze hat 100 Falten, die 100 Arten repräsentieren, ein Ei zu kochen.",
        nl: "Een koksmuts heeft 100 plooien om 100 manieren te vertegenwoordigen om een ei te koken."
      },
      isTrue: true,
      explanation: {
        en: "Traditionally, a chef's toque has 100 pleats symbolizing the 100 ways a chef can prepare eggs.",
        es: "Tradicionalmente, una toque de chef tiene 100 pliegues simbolizando las 100 formas de preparar huevos.",
        de: "Traditionell hat eine Kochmütze 100 Falten, die 100 Arten symbolisieren, Eier zuzubereiten.",
        nl: "Traditioneel heeft een koksmuts 100 plooien die 100 manieren symboliseren om eieren te bereiden."
      }
    }
  ];

  // Export to window
  window.trueFalseCategories = window.trueFalseCategories || {};
  window.trueFalseCategories['food-drink'] = foodDrinkQuestions;

  console.log(`Loaded ${foodDrinkQuestions.length} food & drink true/false questions`);

})();
