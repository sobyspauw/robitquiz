// Quiz Level 6: Drinken - Frisdranken (Advanced Soft Drink Knowledge)
(function() {
  const level6 = {
    name: {
      en: "Advanced Soft Drink Knowledge",
      es: "Conocimiento Avanzado de Refrescos",
      de: "Fortgeschrittenes Erfrischungsgetränke-Wissen",
      nl: "Gevorderde Frisdrank Kennis"
    },
    questions: [
      {
        question: {
          en: "What is the typical pH range of most carbonated soft drinks?",
          es: "¿Cuál es el rango de pH típico de la mayoría de refrescos carbonatados?",
          de: "Was ist der typische pH-Bereich der meisten kohlensäurehaltigen Erfrischungsgetränke?",
          nl: "Wat is het typische pH-bereik van de meeste koolzuurhoudende frisdranken?"
        },
        options: [
          { en: "2.5 - 4.0", es: "2.5 - 4.0", de: "2.5 - 4.0", nl: "2.5 - 4.0" },
          { en: "4.5 - 6.0", es: "4.5 - 6.0", de: "4.5 - 6.0", nl: "4.5 - 6.0" },
          { en: "6.5 - 8.0", es: "6.5 - 8.0", de: "6.5 - 8.0", nl: "6.5 - 8.0" },
          { en: "8.5 - 10.0", es: "8.5 - 10.0", de: "8.5 - 10.0", nl: "8.5 - 10.0" }
        ],
        correct: 0,
        explanation: {
          en: "Most soft drinks have a pH between 2.5-4.0, making them acidic. This acidity helps preserve the drink and gives it a tangy taste.",
          es: "La mayoría de los refrescos tienen un pH entre 2.5-4.0, haciéndolos ácidos. Esta acidez ayuda a preservar la bebida y le da un sabor ácido.",
          de: "Die meisten Erfrischungsgetränke haben einen pH zwischen 2.5-4.0, was sie sauer macht. Diese Säure hilft das Getränk zu konservieren und verleiht einen sauren Geschmack.",
          nl: "De meeste frisdranken hebben een pH tussen 2.5-4.0, waardoor ze zuur zijn. Deze zuurgraad helpt de drank te bewaren en geeft een zurige smaak."
        }
      },
      {
        question: {
          en: "Which preservative is most commonly used in soft drinks?",
          es: "¿Qué conservante se usa más comúnmente en refrescos?",
          de: "Welches Konservierungsmittel wird am häufigsten in Erfrischungsgetränken verwendet?",
          nl: "Welk conserveermiddel wordt het meest gebruikt in frisdranken?"
        },
        options: [
          { en: "Sodium benzoate", es: "Benzoato de sodio", de: "Natriumbenzoat", nl: "Natriumbenzoaat" },
          { en: "Vitamin C", es: "Vitamina C", de: "Vitamin C", nl: "Vitamine C" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" }
        ],
        correct: 0,
        explanation: {
          en: "Sodium benzoate is the most common preservative in soft drinks, preventing bacterial and fungal growth.",
          es: "El benzoato de sodio es el conservante más común en refrescos, previniendo el crecimiento bacteriano y fúngico.",
          de: "Natriumbenzoat ist das häufigste Konservierungsmittel in Erfrischungsgetränken und verhindert bakterielles und pilzliches Wachstum.",
          nl: "Natriumbenzoaat is het meest voorkomende conserveermiddel in frisdranken, dat bacteriële en schimmelgroei voorkomt."
        }
      },
      {
        question: {
          en: "What gives cola drinks their distinctive brown color?",
          es: "¿Qué le da a las bebidas de cola su color marrón distintivo?",
          de: "Was verleiht Cola-Getränken ihre charakteristische braune Farbe?",
          nl: "Wat geeft coladranken hun kenmerkende bruine kleur?"
        },
        options: [
          { en: "Chocolate extract", es: "Extracto de chocolate", de: "Schokoladenextrakt", nl: "Chocolade-extract" },
          { en: "Caramel coloring", es: "Colorante de caramelo", de: "Karamellfarbe", nl: "Karamelkleurstof" },
          { en: "Coffee beans", es: "Granos de café", de: "Kaffeebohnen", nl: "Koffiebonen" },
          { en: "Brown sugar", es: "Azúcar moreno", de: "Brauner Zucker", nl: "Bruine suiker" }
        ],
        correct: 1,
        explanation: {
          en: "Caramel coloring (caramel color) is used to give cola drinks their characteristic brown appearance.",
          es: "El colorante de caramelo se usa para dar a las bebidas de cola su apariencia marrón característica.",
          de: "Karamellfarbe wird verwendet, um Cola-Getränken ihr charakteristisches braunes Aussehen zu verleihen.",
          nl: "Karamelkleurstof wordt gebruikt om coladranken hun kenmerkende bruine uiterlijk te geven."
        }
      },
      {
        question: {
          en: "What is the purpose of phosphoric acid in cola drinks?",
          es: "¿Cuál es el propósito del ácido fosfórico en las bebidas de cola?",
          de: "Was ist der Zweck von Phosphorsäure in Cola-Getränken?",
          nl: "Wat is het doel van fosforzuur in coladranken?"
        },
        options: [
          { en: "To add sweetness", es: "Para añadir dulzura", de: "Um Süße hinzuzufügen", nl: "Om zoetheid toe te voegen" },
          { en: "To provide tartness and preserve flavor", es: "Para proporcionar acidez y preservar el sabor", de: "Um Säure zu liefern und Geschmack zu bewahren", nl: "Om zuurheid te geven en smaak te bewaren" },
          { en: "To create bubbles", es: "Para crear burbujas", de: "Um Blasen zu erzeugen", nl: "Om bubbels te maken" },
          { en: "To add color", es: "Para añadir color", de: "Um Farbe hinzuzufügen", nl: "Om kleur toe te voegen" }
        ],
        correct: 1,
        explanation: {
          en: "Phosphoric acid gives cola its characteristic tart taste and helps preserve the flavor while also acting as a preservative.",
          es: "El ácido fosfórico le da a la cola su sabor ácido característico y ayuda a preservar el sabor mientras actúa como conservante.",
          de: "Phosphorsäure verleiht Cola ihren charakteristischen sauren Geschmack und hilft den Geschmack zu bewahren, während sie auch als Konservierungsmittel wirkt.",
          nl: "Fosforzuur geeft cola zijn kenmerkende zurige smaak en helpt de smaak te bewaren terwijl het ook als conserveermiddel werkt."
        }
      },
      {
        question: {
          en: "Which artificial sweetener was first used commercially in diet sodas?",
          es: "¿Qué edulcorante artificial se usó primero comercialmente en refrescos dietéticos?",
          de: "Welcher künstliche Süßstoff wurde zuerst kommerziell in Diät-Limonaden verwendet?",
          nl: "Welke kunstmatige zoetstof werd eerst commercieel gebruikt in light frisdranken?"
        },
        options: [
          { en: "Aspartame", es: "Aspartamo", de: "Aspartam", nl: "Aspartaam" },
          { en: "Saccharin", es: "Sacarina", de: "Saccharin", nl: "Sacharine" },
          { en: "Sucralose", es: "Sucralosa", de: "Sucralose", nl: "Sucralose" },
          { en: "Stevia", es: "Stevia", de: "Stevia", nl: "Stevia" }
        ],
        correct: 1,
        explanation: {
          en: "Saccharin was the first artificial sweetener used commercially in diet sodas, starting in the early 1900s.",
          es: "La sacarina fue el primer edulcorante artificial usado comercialmente en refrescos dietéticos, comenzando a principios de 1900.",
          de: "Saccharin war der erste künstliche Süßstoff, der kommerziell in Diät-Limonaden verwendet wurde, beginnend in den frühen 1900ern.",
          nl: "Sacharine was de eerste kunstmatige zoetstof die commercieel werd gebruikt in light frisdranken, beginnend in de vroege jaren 1900."
        }
      },
      {
        question: {
          en: "What is the process called when CO2 is added to soft drinks?",
          es: "¿Cómo se llama el proceso cuando se añade CO2 a los refrescos?",
          de: "Wie heißt der Prozess, wenn CO2 zu Erfrischungsgetränken hinzugefügt wird?",
          nl: "Hoe heet het proces waarbij CO2 wordt toegevoegd aan frisdranken?"
        },
        options: [
          { en: "Fermentation", es: "Fermentación", de: "Fermentation", nl: "Fermentatie" },
          { en: "Carbonation", es: "Carbonatación", de: "Karbonisierung", nl: "Koolzuurtoevoeging" },
          { en: "Pasteurization", es: "Pasteurización", de: "Pasteurisierung", nl: "Pasteurisatie" },
          { en: "Filtration", es: "Filtración", de: "Filtration", nl: "Filtratie" }
        ],
        correct: 1,
        explanation: {
          en: "Carbonation is the process of dissolving CO2 gas into liquid under pressure to create fizzy drinks.",
          es: "La carbonatación es el proceso de disolver gas CO2 en líquido bajo presión para crear bebidas burbujeantes.",
          de: "Karbonisierung ist der Prozess der Auflösung von CO2-Gas in Flüssigkeit unter Druck, um sprudelnde Getränke zu erzeugen.",
          nl: "Koolzuurtoevoeging is het proces waarbij CO2-gas onder druk in vloeistof wordt opgelost om bruisende dranken te maken."
        }
      },
      {
        question: {
          en: "Which ingredient is responsible for the caffeine content in most cola drinks?",
          es: "¿Qué ingrediente es responsable del contenido de cafeína en la mayoría de bebidas de cola?",
          de: "Welche Zutat ist für den Koffeingehalt in den meisten Cola-Getränken verantwortlich?",
          nl: "Welk ingrediënt is verantwoordelijk voor het cafeïnegehalte in de meeste coladranken?"
        },
        options: [
          { en: "Coffee extract", es: "Extracto de café", de: "Kaffeeextrakt", nl: "Koffie-extract" },
          { en: "Tea leaves", es: "Hojas de té", de: "Teeblätter", nl: "Theebladeren" },
          { en: "Kola nut extract", es: "Extracto de nuez de cola", de: "Kolanuss-Extrakt", nl: "Kolanoot-extract" },
          { en: "Synthetic caffeine", es: "Cafeína sintética", de: "Synthetisches Koffein", nl: "Synthetische cafeïne" }
        ],
        correct: 3,
        explanation: {
          en: "Most modern cola drinks use synthetic caffeine rather than natural sources like kola nut extract for consistent caffeine levels.",
          es: "La mayoría de bebidas de cola modernas usan cafeína sintética en lugar de fuentes naturales como el extracto de nuez de cola para niveles consistentes de cafeína.",
          de: "Die meisten modernen Cola-Getränke verwenden synthetisches Koffein anstelle natürlicher Quellen wie Kolanuss-Extrakt für konsistente Koffeinwerte.",
          nl: "De meeste moderne coladranken gebruiken synthetische cafeïne in plaats van natuurlijke bronnen zoals kolanoot-extract voor consistente cafeïneniveaus."
        }
      },
      {
        question: {
          en: "What is the main difference between regular and diet soft drinks?",
          es: "¿Cuál es la principal diferencia entre refrescos regulares y dietéticos?",
          de: "Was ist der Hauptunterschied zwischen normalen und Diät-Erfrischungsgetränken?",
          nl: "Wat is het belangrijkste verschil tussen gewone en light frisdranken?"
        },
        options: [
          { en: "Color intensity", es: "Intensidad del color", de: "Farbintensität", nl: "Kleurintensiteit" },
          { en: "Sugar vs artificial sweeteners", es: "Azúcar vs edulcorantes artificiales", de: "Zucker vs künstliche Süßstoffe", nl: "Suiker vs kunstmatige zoetstoffen" },
          { en: "Carbonation level", es: "Nivel de carbonatación", de: "Karbonisierungsgrad", nl: "Koolzuurniveau" },
          { en: "Packaging material", es: "Material de empaque", de: "Verpackungsmaterial", nl: "Verpakkingsmateriaal" }
        ],
        correct: 1,
        explanation: {
          en: "The main difference is that regular soft drinks use sugar for sweetness, while diet versions use artificial sweeteners with fewer or no calories.",
          es: "La principal diferencia es que los refrescos regulares usan azúcar para dulzura, mientras que las versiones dietéticas usan edulcorantes artificiales con menos o ninguna caloría.",
          de: "Der Hauptunterschied ist, dass normale Erfrischungsgetränke Zucker für Süße verwenden, während Diät-Versionen künstliche Süßstoffe mit weniger oder keinen Kalorien verwenden.",
          nl: "Het belangrijkste verschil is dat gewone frisdranken suiker gebruiken voor zoetheid, terwijl light versies kunstmatige zoetstoffen gebruiken met minder of geen calorieën."
        }
      },
      {
        question: {
          en: "What gives citrus-flavored sodas their characteristic taste?",
          es: "¿Qué le da a los refrescos con sabor a cítricos su sabor característico?",
          de: "Was verleiht Zitrus-aromatisierten Limonaden ihren charakteristischen Geschmack?",
          nl: "Wat geeft citrus-gearomatiseerde frisdranken hun kenmerkende smaak?"
        },
        options: [
          { en: "Artificial fruit flavors only", es: "Solo sabores artificiales de fruta", de: "Nur künstliche Fruchtaromen", nl: "Alleen kunstmatige fruitsmaken" },
          { en: "Natural citrus oils and essences", es: "Aceites y esencias cítricas naturales", de: "Natürliche Zitrusöle und -essenzen", nl: "Natuurlijke citrusoliën en -essences" },
          { en: "Vitamin C supplements", es: "Suplementos de vitamina C", de: "Vitamin-C-Präparate", nl: "Vitamine C supplementen" },
          { en: "Food coloring", es: "Colorante alimentario", de: "Lebensmittelfarbe", nl: "Voedselkleurstof" }
        ],
        correct: 1,
        explanation: {
          en: "Citrus sodas get their authentic taste from natural citrus oils extracted from fruit peels, combined with citric acid.",
          es: "Los refrescos cítricos obtienen su sabor auténtico de aceites cítricos naturales extraídos de cáscaras de fruta, combinados con ácido cítrico.",
          de: "Zitrus-Limonaden erhalten ihren authentischen Geschmack von natürlichen Zitrusölen aus Fruchtschalen, kombiniert mit Zitronensäure.",
          nl: "Citrus frisdranken krijgen hun authentieke smaak van natuurlijke citrusoliën geëxtraheerd uit fruitschillen, gecombineerd met citroenzuur."
        }
      },
      {
        question: {
          en: "Why are soft drinks pasteurized during production?",
          es: "¿Por qué se pasteurizan los refrescos durante la producción?",
          de: "Warum werden Erfrischungsgetränke während der Produktion pasteurisiert?",
          nl: "Waarom worden frisdranken tijdens productie gepasteuriseerd?"
        },
        options: [
          { en: "To add carbonation", es: "Para añadir carbonatación", de: "Um Kohlensäure hinzuzufügen", nl: "Om koolzuur toe te voegen" },
          { en: "To kill harmful bacteria and extend shelf life", es: "Para matar bacterias dañinas y extender la vida útil", de: "Um schädliche Bakterien zu töten und die Haltbarkeit zu verlängern", nl: "Om schadelijke bacteriën te doden en houdbaarheid te verlengen" },
          { en: "To enhance flavor", es: "Para mejorar el sabor", de: "Um den Geschmack zu verbessern", nl: "Om de smaak te verbeteren" },
          { en: "To change the color", es: "Para cambiar el color", de: "Um die Farbe zu ändern", nl: "Om de kleur te veranderen" }
        ],
        correct: 1,
        explanation: {
          en: "Pasteurization involves heating the beverage to kill harmful microorganisms, ensuring safety and extending shelf life.",
          es: "La pasteurización implica calentar la bebida para matar microorganismos dañinos, asegurando seguridad y extendiendo la vida útil.",
          de: "Pasteurisierung beinhaltet das Erhitzen des Getränks, um schädliche Mikroorganismen zu töten, Sicherheit zu gewährleisten und die Haltbarkeit zu verlängern.",
          nl: "Pasteurisatie houdt in dat de drank wordt verhit om schadelijke micro-organismen te doden, veiligheid te waarborgen en houdbaarheid te verlengen."
        }
      },
      {
        question: {
          en: "What is 'tunnel pasteurization' and how does it differ from flash pasteurization?",
          es: "¿Qué es 'pasteurización túnel' y cómo difiere de pasteurización flash?",
          de: "Was ist 'Tunnelpasteurisierung' und wie unterscheidet sie sich von Flash-Pasteurisierung?",
          nl: "Wat is 'tunnel pasteurisatie' en hoe verschilt het van flash pasteurisatie?"
        },
        options: [
          { en: "Tunnel pasteurizes packaged product gradually through temperature zones; flash pasteurizes bulk liquid rapidly at high temperature", es: "Túnel pasteuriza producto empaquetado gradualmente por zonas temperatura; flash pasteuriza líquido a granel rápidamente a alta temperatura", de: "Tunnel pasteurisiert verpacktes Produkt schrittweise durch Temperaturzonen; Flash pasteurisiert Flüssigkeit in großen Mengen schnell bei hoher Temperatur", nl: "Tunnel pasteuriseert verpakt product geleidelijk door temperatuurzones; flash pasteuriseert bulk vloeistof snel bij hoge temperatuur" },
          { en: "They are identical processes", es: "Son procesos idénticos", de: "Sie sind identische Prozesse", nl: "Ze zijn identieke processen" },
          { en: "Only tunnel uses heat", es: "Solo túnel usa calor", de: "Nur Tunnel verwendet Hitze", nl: "Alleen tunnel gebruikt warmte" },
          { en: "Flash takes longer", es: "Flash toma más tiempo", de: "Flash dauert länger", nl: "Flash duurt langer" }
        ],
        correct: 0,
        explanation: {
          en: "Tunnel pasteurization gradually heats filled, sealed bottles/cans through temperature zones (preheating, holding at 60-65°C for 15-20 min, cooling) treating the entire package. Flash (HTST) pasteurization rapidly heats bulk liquid to 72-85°C for 15-30 seconds before filling. Tunnel is gentler but slower; flash is faster but requires aseptic filling.",
          es: "Pasteurización túnel calienta gradualmente botellas/latas llenas y selladas por zonas temperatura (precalentamiento, mantenimiento 60-65°C por 15-20 min, enfriamiento) tratando paquete completo. Pasteurización flash (HTST) calienta rápidamente líquido a granel a 72-85°C por 15-30 segundos antes llenado. Túnel es más suave pero más lento; flash es más rápido pero requiere llenado aséptico.",
          de: "Tunnelpasteurisierung erhitzt schrittweise gefüllte, versiegelte Flaschen/Dosen durch Temperaturzonen (Vorwärmung, Halten bei 60-65°C für 15-20 Min, Kühlung) behandelt gesamte Verpackung. Flash (HTST) Pasteurisierung erhitzt schnell Flüssigkeit in großen Mengen auf 72-85°C für 15-30 Sekunden vor Füllung. Tunnel ist sanfter aber langsamer; Flash ist schneller aber erfordert aseptische Füllung.",
          nl: "Tunnel pasteurisatie verwarmt geleidelijk gevulde, verzegelde flessen/blikjes door temperatuurzones (voorverwarming, vasthouden bij 60-65°C gedurende 15-20 min, koeling) behandelt gehele verpakking. Flash (HTST) pasteurisatie verwarmt snel bulk vloeistof tot 72-85°C gedurende 15-30 seconden voor vullen. Tunnel is zachter maar langzamer; flash is sneller maar vereist aseptisch vullen."
        }
      },
      {
        question: {
          en: "What causes 'protein haze' in some fruit-flavored soft drinks and how is it prevented?",
          es: "¿Qué causa 'neblina proteica' en algunos refrescos sabor fruta y cómo se previene?",
          de: "Was verursacht 'Proteintrübung' in einigen fruchtaromatisierten Erfrischungsgetränken und wie wird sie verhindert?",
          nl: "Wat veroorzaakt 'eiwit waas' in sommige fruitgearomatiseerde frisdranken en hoe wordt het voorkomen?"
        },
        options: [
          { en: "Proteins precipitate with tannins/polyphenols; prevented by protease enzymes or filtration", es: "Proteínas precipitan con taninos/polifenoles; prevenido por enzimas proteasa o filtración", de: "Proteine präzipitieren mit Tanninen/Polyphenolen; verhindert durch Protease-Enzyme oder Filtration", nl: "Eiwitten precipiteren met tannines/polyfenolen; voorkomen door protease enzymen of filtratie" },
          { en: "Excessive sugar crystallization", es: "Cristalización azúcar excesiva", de: "Übermäßige Zuckerkristallisation", nl: "Overmatige suikerkristallisatie" },
          { en: "Too much carbonation", es: "Demasiada carbonatación", de: "Zu viel Kohlensäure", nl: "Te veel carbonatie" },
          { en: "Color additives reacting", es: "Aditivos color reaccionando", de: "Farbzusätze reagieren", nl: "Kleuradditieven reageren" }
        ],
        correct: 0,
        explanation: {
          en: "Protein haze occurs when proteins (from fruit juice) interact with tannins or polyphenols forming insoluble complexes that cloud the beverage. Prevention methods include: enzymatic treatment with proteases to break down proteins before they precipitate, bentonite fining to remove proteins, or cold stabilization. Critical for clear fruit drinks.",
          es: "Neblina proteica ocurre cuando proteínas (de jugo fruta) interactúan con taninos o polifenoles formando complejos insolubles que enturbian bebida. Métodos prevención incluyen: tratamiento enzimático con proteasas para descomponer proteínas antes precipiten, clarificación bentonita para eliminar proteínas, o estabilización fría. Crítico para bebidas fruta claras.",
          de: "Proteintrübung tritt auf wenn Proteine (aus Fruchtsaft) mit Tanninen oder Polyphenolen interagieren und unlösliche Komplexe bilden die Getränk trüben. Präventionsmethoden umfassen: enzymatische Behandlung mit Proteasen zum Abbau von Proteinen bevor sie präzipitieren, Bentonit-Schönung zur Proteinentfernung, oder Kälte-Stabilisierung. Kritisch für klare Fruchtgetränke.",
          nl: "Eiwit waas treedt op wanneer eiwitten (van vruchtensap) interacteren met tannines of polyfenolen vormend onoplosbare complexen die drank vertroebelen. Preventiemethoden omvatten: enzymatische behandeling met proteasen om eiwitten af te breken voordat ze precipiteren, bentoniet klaring om eiwitten te verwijderen, of koude stabilisatie. Cruciaal voor heldere fruitdranken."
        }
      },
      {
        question: {
          en: "What is the purpose of adding gum arabic (acacia gum) to citrus soft drinks?",
          es: "¿Cuál es propósito añadir goma arábiga (goma acacia) a refrescos cítricos?",
          de: "Was ist der Zweck der Zugabe von Gummi arabicum (Akaziengummi) zu Zitrus-Erfrischungsgetränken?",
          nl: "Wat is het doel van het toevoegen van Arabische gom (acacia gom) aan citrus frisdranken?"
        },
        options: [
          { en: "Emulsifier that stabilizes citrus oils preventing separation and ring formation", es: "Emulsionante que estabiliza aceites cítricos previniendo separación y formación anillo", de: "Emulgator der Zitrusöle stabilisiert verhindert Trennung und Ringbildung", nl: "Emulgator die citrusoliën stabiliseert voorkomt scheiding en ringvorming" },
          { en: "Primary sweetener", es: "Edulcorante principal", de: "Hauptsüßstoff", nl: "Primaire zoetstof" },
          { en: "Carbonation agent", es: "Agente carbonatación", de: "Kohlensäuremittel", nl: "Carbonatiemiddel" },
          { en: "Preservative only", es: "Solo conservante", de: "Nur Konservierungsmittel", nl: "Alleen conserveermiddel" }
        ],
        correct: 0,
        explanation: {
          en: "Gum arabic is a natural emulsifier from acacia trees that keeps citrus oils (limonene, etc.) dispersed in water-based beverages. Without it, oils would separate and form a ring at the top of the bottle. It provides 'weighting' of oil droplets preventing flotation and ensures uniform flavor distribution.",
          es: "Goma arábiga es emulsionante natural de árboles acacia que mantiene aceites cítricos (limoneno, etc.) dispersos en bebidas base agua. Sin ella, aceites se separarían y formarían anillo en parte superior botella. Proporciona 'ponderación' gotas aceite previniendo flotación y asegura distribución sabor uniforme.",
          de: "Gummi arabicum ist natürlicher Emulgator aus Akazienbäumen der Zitrusöle (Limonen, etc.) in wasserbasierten Getränken dispergiert hält. Ohne ihn würden Öle sich trennen und Ring oben in Flasche bilden. Es bietet 'Gewichtung' von Öltröpfchen verhindert Flotation und gewährleistet gleichmäßige Geschmacksverteilung.",
          nl: "Arabische gom is natuurlijke emulgator van acaciabomen die citrusoliën (limoneen, etc.) gedispergeerd houdt in op water gebaseerde dranken. Zonder zou olie scheiden en ring vormen aan bovenkant fles. Het biedt 'weging' van oliedruppels voorkomt drijven en verzekert uniforme smaakverdeling."
        }
      },
      {
        question: {
          en: "What is 'brominated vegetable oil' (BVO) and why has it been controversial in soft drinks?",
          es: "¿Qué es 'aceite vegetal bromado' (BVO) y por qué ha sido controversial en refrescos?",
          de: "Was ist 'bromiertes Pflanzenöl' (BVO) und warum ist es in Erfrischungsgetränken umstritten?",
          nl: "Wat is 'gebromeerd plantaardige olie' (BVO) en waarom is het controversieel in frisdranken?"
        },
        options: [
          { en: "Emulsifier/weighting agent for citrus oils; controversial due to bromine accumulation health concerns", es: "Emulsionante/agente ponderación aceites cítricos; controversial por preocupaciones salud acumulación bromo", de: "Emulgator/Gewichtungsmittel für Zitrusöle; umstritten wegen Brom-Akkumulation Gesundheitsbedenken", nl: "Emulgator/wegingsmiddel voor citrusoliën; controversieel vanwege broomaccumulatie gezondheidsrisico's" },
          { en: "Primary flavor compound", es: "Compuesto sabor principal", de: "Hauptgeschmacksverbindung", nl: "Primaire smaakstof" },
          { en: "Carbonation enhancer", es: "Potenciador carbonatación", de: "Kohlensäureverstärker", nl: "Carbonatieversterker" },
          { en: "Natural colorant", es: "Colorante natural", de: "Natürlicher Farbstoff", nl: "Natuurlijke kleurstof" }
        ],
        correct: 0,
        explanation: {
          en: "BVO is vegetable oil (soybean/corn) treated with bromine to increase density, making it similar to water so it can keep citrus oils suspended. Controversy arose because bromine can accumulate in body tissues and was linked to potential health issues. Many manufacturers (Coca-Cola, PepsiCo) have phased out BVO, replacing it with alternatives like sucrose acetate isobutyrate (SAIB) or gum arabic.",
          es: "BVO es aceite vegetal (soja/maíz) tratado con bromo para aumentar densidad, haciéndolo similar a agua para mantener aceites cítricos suspendidos. Controversia surgió porque bromo puede acumularse en tejidos corporales y fue vinculado a potenciales problemas salud. Muchos fabricantes (Coca-Cola, PepsiCo) han eliminado BVO, reemplazándolo con alternativas como acetato isobutirato sacarosa (SAIB) o goma arábiga.",
          de: "BVO ist Pflanzenöl (Soja/Mais) mit Brom behandelt um Dichte zu erhöhen, macht es Wasser ähnlich damit es Zitrusöle suspendiert halten kann. Kontroverse entstand weil Brom sich in Körpergeweben ansammeln kann und mit potenziellen Gesundheitsproblemen verbunden war. Viele Hersteller (Coca-Cola, PepsiCo) haben BVO eingestellt, ersetzt durch Alternativen wie Saccharoseacetat-Isobutyrat (SAIB) oder Gummi arabicum.",
          nl: "BVO is plantaardige olie (soja/maïs) behandeld met broom om dichtheid te verhogen, maakt het vergelijkbaar met water zodat het citrusoliën gesuspendeerd kan houden. Controverse ontstond omdat broom kan accumuleren in lichaamsweefsels en gekoppeld was aan potentiële gezondheidsproblemen. Veel fabrikanten (Coca-Cola, PepsiCo) hebben BVO uitgefaseerd, vervangen door alternatieven zoals sucrose acetaat isobutyraat (SAIB) of Arabische gom."
        }
      },
      {
        question: {
          en: "What is the 'Q10' value in beverage microbiology and why is it important?",
          es: "¿Qué es valor 'Q10' en microbiología bebidas y por qué es importante?",
          de: "Was ist der 'Q10'-Wert in Getränkemikrobiologie und warum ist er wichtig?",
          nl: "Wat is de 'Q10' waarde in drankenmicrobiologie en waarom is het belangrijk?"
        },
        options: [
          { en: "Temperature coefficient showing microbial inactivation rate doubles with every 10°C increase", es: "Coeficiente temperatura mostrando tasa inactivación microbiana duplica con cada aumento 10°C", de: "Temperaturkoeffizient zeigt mikrobielle Inaktivierungsrate verdoppelt sich bei jedem 10°C Anstieg", nl: "Temperatuurcoëfficiënt toont microbiële inactivatiesnelheid verdubbelt met elke 10°C stijging" },
          { en: "Sugar concentration measurement", es: "Medida concentración azúcar", de: "Zuckerkonzentrationsmessung", nl: "Suikerconcentratiemeting" },
          { en: "Carbonation level", es: "Nivel carbonatación", de: "Kohlensäuregehalt", nl: "Carbonatieniveau" },
          { en: "pH scale", es: "Escala pH", de: "pH-Skala", nl: "pH schaal" }
        ],
        correct: 0,
        explanation: {
          en: "Q10 is the temperature quotient describing how reaction rates change with 10°C temperature increase. For microbial inactivation, Q10 ≈ 2-4, meaning doubling temperature increases kill rate 2-4x. This guides pasteurization: higher temperatures allow shorter times (HTST), lower temperatures require longer exposure. Understanding Q10 helps optimize thermal processing to balance microbial safety with quality preservation.",
          es: "Q10 es cociente temperatura describiendo cómo tasas reacción cambian con aumento temperatura 10°C. Para inactivación microbiana, Q10 ≈ 2-4, significando duplicar temperatura aumenta tasa muerte 2-4x. Esto guía pasteurización: temperaturas más altas permiten tiempos más cortos (HTST), temperaturas más bajas requieren exposición más larga. Entender Q10 ayuda optimizar procesamiento térmico balanceando seguridad microbiana con preservación calidad.",
          de: "Q10 ist Temperaturquotient beschreibt wie Reaktionsraten sich mit 10°C Temperaturerhöhung ändern. Für mikrobielle Inaktivierung, Q10 ≈ 2-4, bedeutet Verdoppelung Temperatur erhöht Abtötungsrate 2-4x. Dies leitet Pasteurisierung: höhere Temperaturen erlauben kürzere Zeiten (HTST), niedrigere Temperaturen erfordern längere Exposition. Q10-Verständnis hilft thermische Verarbeitung zu optimieren balanciert mikrobielle Sicherheit mit Qualitätserhalt.",
          nl: "Q10 is temperatuurquotiënt beschrijft hoe reactiesnelheden veranderen met 10°C temperatuurstijging. Voor microbiële inactivatie, Q10 ≈ 2-4, betekent verdubbeling temperatuur verhoogt dodingssnelheid 2-4x. Dit stuurt pasteurisatie: hogere temperaturen staan kortere tijden toe (HTST), lagere temperaturen vereisen langere blootstelling. Q10 begrijpen helpt thermische verwerking optimaliseren balancerend microbiële veiligheid met kwaliteitsbehoud."
        }
      },
      {
        question: {
          en: "What causes 'pinking' in cola beverages and how is it prevented?",
          es: "¿Qué causa 'rosado' en bebidas cola y cómo se previene?",
          de: "Was verursacht 'Rosafärbung' bei Cola-Getränken und wie wird sie verhindert?",
          nl: "Wat veroorzaakt 'roze verkleuring' in coladranken en hoe wordt het voorkomen?"
        },
        options: [
          { en: "Oxidation of caramel color compounds forming pink chromophores; prevented by antioxidants and oxygen control", es: "Oxidación compuestos color caramelo formando cromóforos rosa; prevenido por antioxidantes y control oxígeno", de: "Oxidation von Karamellfarbverbindungen bildet rosa Chromophore; verhindert durch Antioxidantien und Sauerstoffkontrolle", nl: "Oxidatie van karamelkleurverbindingen vormend roze chromoforen; voorkomen door antioxidanten en zuurstofcontrole" },
          { en: "Excessive carbonation", es: "Carbonatación excesiva", de: "Übermäßige Karbonisierung", nl: "Overmatige carbonatie" },
          { en: "Bacterial contamination only", es: "Solo contaminación bacteriana", de: "Nur bakterielle Kontamination", nl: "Alleen bacteriële besmetting" },
          { en: "Temperature fluctuation", es: "Fluctuación temperatura", de: "Temperaturschwankung", nl: "Temperatuurschommeling" }
        ],
        correct: 0,
        explanation: {
          en: "Pinking is color degradation in colas where the brown caramel color develops pink/red tones due to oxidative degradation of caramel color compounds (Class III/IV). Light exposure and dissolved oxygen catalyze this reaction. Prevention includes: minimizing dissolved oxygen (<0.5 ppm), using antioxidants (ascorbic acid, EDTA), protecting from light (brown bottles/cans), proper caramel selection, and nitrogen flushing.",
          es: "Rosado es degradación color en colas donde color caramelo marrón desarrolla tonos rosa/rojo debido degradación oxidativa compuestos color caramelo (Clase III/IV). Exposición luz y oxígeno disuelto catalizan esta reacción. Prevención incluye: minimizar oxígeno disuelto (<0.5 ppm), usar antioxidantes (ácido ascórbico, EDTA), proteger de luz (botellas/latas marrones), selección caramelo apropiada, y lavado nitrógeno.",
          de: "Rosafärbung ist Farbabbau in Colas wo braune Karamellfarbe rosa/rote Töne entwickelt aufgrund oxidativer Degradation von Karamellfarbverbindungen (Klasse III/IV). Lichtexposition und gelöster Sauerstoff katalysieren diese Reaktion. Prävention umfasst: Minimierung gelösten Sauerstoffs (<0.5 ppm), Verwendung Antioxidantien (Ascorbinsäure, EDTA), Lichtschutz (braune Flaschen/Dosen), geeignete Karamellauswahl, und Stickstoffspülung.",
          nl: "Roze verkleuring is kleurdegradat ie in cola's waar bruine karamelkleur roze/rode tinten ontwikkelt door oxidatieve degradatie van karamelkleurverbindingen (Klasse III/IV). Lichtblootstelling en opgelost zuurstof katalyseren deze reactie. Preventie omvat: minimaliseren opgelost zuurstof (<0.5 ppm), gebruik antioxidanten (ascorbinezuur, EDTA), beschermen tegen licht (bruine flessen/blikjes), juiste karamelselectie, en stikstof flushen."
        }
      },
      {
        question: {
          en: "What is 'nitrogen dosing' or 'widget technology' in canned beverages?",
          es: "¿Qué es 'dosificación nitrógeno' o 'tecnología widget' en bebidas enlatadas?",
          de: "Was ist 'Stickstoffdosierung' oder 'Widget-Technologie' bei Dosengetränken?",
          nl: "Wat is 'stikstof dosering' of 'widget technologie' in geblikte dranken?"
        },
        options: [
          { en: "Nitrogen injection creating creamy foam and smooth mouthfeel when opened", es: "Inyección nitrógeno creando espuma cremosa y sensación bucal suave al abrir", de: "Stickstoffinjektion erzeugt cremigen Schaum und glattes Mundgefühl beim Öffnen", nl: "Stikstof injectie creërend romig schuim en glad mondgevoel bij openen" },
          { en: "Adding nitrogen fertilizer", es: "Añadir fertilizante nitrógeno", de: "Hinzufügen von Stickstoffdünger", nl: "Toevoegen stikstofmeststof" },
          { en: "Removing all gases", es: "Eliminar todos gases", de: "Entfernung aller Gase", nl: "Verwijderen alle gassen" },
          { en: "Only for carbonation", es: "Solo para carbonatación", de: "Nur für Karbonisierung", nl: "Alleen voor carbonatie" }
        ],
        correct: 0,
        explanation: {
          en: "Nitrogen dosing injects liquid nitrogen or nitrogen gas into cans before sealing. Upon opening, pressure drop causes nitrogen to rapidly come out of solution forming tiny bubbles, creating smooth, creamy foam (cascade effect). Common in stout beers (Guinness) and some coffee drinks. Nitrogen bubbles are smaller than CO₂ bubbles, giving softer mouthfeel. Widget devices contain pressurized nitrogen released when opened.",
          es: "Dosificación nitrógeno inyecta nitrógeno líquido o gas nitrógeno en latas antes sellar. Al abrir, caída presión causa nitrógeno salir rápidamente de solución formando burbujas pequeñas, creando espuma suave y cremosa (efecto cascada). Común en cervezas stout (Guinness) y algunas bebidas café. Burbujas nitrógeno son más pequeñas que burbujas CO₂, dando sensación bucal más suave. Dispositivos widget contienen nitrógeno presurizado liberado al abrir.",
          de: "Stickstoffdosierung injiziert flüssigen Stickstoff oder Stickstoffgas in Dosen vor Versiegelung. Beim Öffnen verursacht Druckabfall dass Stickstoff schnell aus Lösung kommt bildet winzige Blasen, erzeugt glatten cremigen Schaum (Kaskadeneffekt). Häufig in Stout-Bieren (Guinness) und einigen Kaffeegetränken. Stickstoffblasen sind kleiner als CO₂-Blasen, geben weicheres Mundgefühl. Widget-Geräte enthalten unter Druck stehenden Stickstoff freigegeben beim Öffnen.",
          nl: "Stikstof dosering injecteert vloeibare stikstof of stikstofgas in blikjes voor verzegelen. Bij openen veroorzaakt drukval dat stikstof snel uit oplossing komt vormend kleine bellen, creërend glad romig schuim (cascade effect). Gebruikelijk in stout bieren (Guinness) en sommige koffiedranken. Stikstof bellen zijn kleiner dan CO₂ bellen, geven zachter mondgevoel. Widget apparaten bevatten onder druk staande stikstof vrijgegeven bij openen."
        }
      },
      {
        question: {
          en: "What is the 'Arrhenius equation' application in predicting soft drink shelf life?",
          es: "¿Qué es aplicación 'ecuación Arrhenius' en predecir vida útil refrescos?",
          de: "Was ist die 'Arrhenius-Gleichung'-Anwendung zur Vorhersage der Haltbarkeit von Erfrischungsgetränken?",
          nl: "Wat is de 'Arrhenius vergelijking' toepassing in voorspellen houdbaarheid frisdrank?"
        },
        options: [
          { en: "Models reaction rate temperature dependence (k = Ae^(-Ea/RT)) predicting degradation at different storage temperatures", es: "Modela dependencia temperatura tasa reacción (k = Ae^(-Ea/RT)) prediciendo degradación a diferentes temperaturas almacenamiento", de: "Modelliert Reaktionsgeschwindigkeit Temperaturabhängigkeit (k = Ae^(-Ea/RT)) vorhersagt Abbau bei verschiedenen Lagertemperaturen", nl: "Modelleert reactiesnelheid temperatuurafhankelijkheid (k = Ae^(-Ea/RT)) voorspellend degradatie bij verschillende opslagtemperaturen" },
          { en: "Only measures pH", es: "Solo mide pH", de: "Misst nur pH", nl: "Meet alleen pH" },
          { en: "Calculates sugar content", es: "Calcula contenido azúcar", de: "Berechnet Zuckergehalt", nl: "Berekent suikergehalte" },
          { en: "Determines bottle size", es: "Determina tamaño botella", de: "Bestimmt Flaschengröße", nl: "Bepaalt flesgrootte" }
        ],
        correct: 0,
        explanation: {
          en: "Arrhenius equation (k = Ae^(-Ea/RT)) describes how reaction rates increase exponentially with temperature. In shelf life testing, accelerated studies at elevated temperatures (e.g., 35-40°C) measure degradation rates (flavor loss, color change, vitamin degradation). Using Ea (activation energy) from these tests, the equation predicts degradation at normal storage (20-25°C), estimating shelf life without years-long real-time studies. Critical for determining expiration dates.",
          es: "Ecuación Arrhenius (k = Ae^(-Ea/RT)) describe cómo tasas reacción aumentan exponencialmente con temperatura. En pruebas vida útil, estudios acelerados a temperaturas elevadas (ej., 35-40°C) miden tasas degradación (pérdida sabor, cambio color, degradación vitaminas). Usando Ea (energía activación) de estas pruebas, ecuación predice degradación a almacenamiento normal (20-25°C), estimando vida útil sin estudios tiempo real años. Crítico para determinar fechas vencimiento.",
          de: "Arrhenius-Gleichung (k = Ae^(-Ea/RT)) beschreibt wie Reaktionsgeschwindigkeiten exponentiell mit Temperatur steigen. In Haltbarkeitstests messen beschleunigte Studien bei erhöhten Temperaturen (z.B. 35-40°C) Abbayraten (Geschmacksverlust, Farbveränderung, Vitaminabbau). Mit Ea (Aktivierungsenergie) aus diesen Tests sagt Gleichung Abbau bei normaler Lagerung (20-25°C) voraus, schätzt Haltbarkeit ohne jahrelange Echtzeit-Studien. Kritisch für Bestimmung Verfallsdaten.",
          nl: "Arrhenius vergelijking (k = Ae^(-Ea/RT)) beschrijft hoe reactiesnelheden exponentieel toenemen met temperatuur. In houdbaarheidstesten meten versnelde studies bij verhoogde temperaturen (bijv. 35-40°C) degradatiesnelheden (smaakverlies, kleurverandering, vitamineafbraak). Gebruikmakend van Ea (activeringsenergie) van deze tests voorspelt vergelijking degradatie bij normale opslag (20-25°C), schattend houdbaarheid zonder jarenlange real-time studies. Cruciaal voor bepalen vervaldatums."
        }
      },
      {
        question: {
          en: "What is 'non-enzymatic browning' (NEB) and which factors accelerate it in soft drinks?",
          es: "¿Qué es 'pardeamiento no enzimático' (NEB) y qué factores lo aceleran en refrescos?",
          de: "Was ist 'nicht-enzymatische Bräunung' (NEB) und welche Faktoren beschleunigen sie in Erfrischungsgetränken?",
          nl: "Wat is 'niet-enzymatische verkleuring' (NEB) en welke factoren versnellen het in frisdranken?"
        },
        options: [
          { en: "Maillard reaction and caramelization causing color/flavor changes; accelerated by heat, high pH, metals", es: "Reacción Maillard y caramelización causando cambios color/sabor; acelerado por calor, pH alto, metales", de: "Maillard-Reaktion und Karamellisierung verursacht Farb-/Geschmacksveränderungen; beschleunigt durch Hitze, hoher pH, Metalle", nl: "Maillard reactie en karamelisatie veroorzakend kleur/smaak veranderingen; versneld door warmte, hoge pH, metalen" },
          { en: "Only affects color, not flavor", es: "Solo afecta color, no sabor", de: "Betrifft nur Farbe, nicht Geschmack", nl: "Beïnvloedt alleen kleur, niet smaak" },
          { en: "Requires enzyme addition", es: "Requiere adición enzima", de: "Erfordert Enzymzugabe", nl: "Vereist enzymtoevoeging" },
          { en: "Beneficial process", es: "Proceso beneficioso", de: "Vorteilhafter Prozess", nl: "Voordelig proces" }
        ],
        correct: 0,
        explanation: {
          en: "Non-enzymatic browning includes Maillard reaction (reducing sugars + amino acids) and caramelization (sugar degradation), producing brown pigments (melanoidins) and off-flavors in stored beverages. Accelerating factors: high temperature (Arrhenius effect), pH >4, trace metals (copper, iron catalyze), amino acid presence, reducing sugars. Mitigation: cold storage, metal chelators (EDTA), pH control, sulfites (inhibit browning), antioxidants.",
          es: "Pardeamiento no enzimático incluye reacción Maillard (azúcares reductores + aminoácidos) y caramelización (degradación azúcar), produciendo pigmentos marrones (melanoidinas) y sabores desagradables en bebidas almacenadas. Factores acelerantes: temperatura alta (efecto Arrhenius), pH >4, metales traza (cobre, hierro catalizan), presencia aminoácidos, azúcares reductores. Mitigación: almacenamiento frío, quelantes metales (EDTA), control pH, sulfitos (inhiben pardeamiento), antioxidantes.",
          de: "Nicht-enzymatische Bräunung umfasst Maillard-Reaktion (reduzierende Zucker + Aminosäuren) und Karamellisierung (Zuckerabbau), produziert braune Pigmente (Melanoidine) und Fehlaromen in gelagerten Getränken. Beschleunigende Faktoren: hohe Temperatur (Arrhenius-Effekt), pH >4, Spurenmetalle (Kupfer, Eisen katalysieren), Aminosäurepräsenz, reduzierende Zucker. Abschwächung: Kühllagerung, Metallchelatoren (EDTA), pH-Kontrolle, Sulfite (hemmen Bräunung), Antioxidantien.",
          nl: "Niet-enzymatische verkleuring omvat Maillard reactie (reducerende suikers + aminozuren) en karamelisatie (suikerafbraak), producerend bruine pigmenten (melanoidines) en off-smaken in opgeslagen dranken. Versnellende factoren: hoge temperatuur (Arrhenius effect), pH >4, spormetalen (koper, ijzer katalyseren), aminozuur aanwezigheid, reducerende suikers. Mitigatie: koude opslag, metaal chelators (EDTA), pH controle, sulfieten (remmen verkleuring), antioxidanten."
        }
      },
      {
        question: {
          en: "What is 'flavor scalping' in soft drink packaging and which packaging materials are most susceptible?",
          es: "¿Qué es 'rapiña sabor' en empaque refrescos y qué materiales empaque son más susceptibles?",
          de: "Was ist 'Geschmacksraub' bei Erfrischungsgetränkeverpackungen und welche Verpackungsmaterialien sind am anfälligsten?",
          nl: "Wat is 'smaak scalping' in frisdrankenverpakking en welke verpakkingsmaterialen zijn het meest vatbaar?"
        },
        options: [
          { en: "Absorption of flavor compounds into packaging causing flavor loss; PET and HDPE most susceptible to limonene absorption", es: "Absorción compuestos sabor en empaque causando pérdida sabor; PET y HDPE más susceptibles a absorción limoneno", de: "Absorption von Geschmacksverbindungen in Verpackung verursacht Geschmacksverlust; PET und HDPE am anfälligsten für Limonen-Absorption", nl: "Absorptie van smaakstoffen in verpakking veroorzakend smaakverlies; PET en HDPE meest vatbaar voor limoneen absorptie" },
          { en: "Flavor enhancement effect", es: "Efecto mejora sabor", de: "Geschmacksverstärkungseffekt", nl: "Smaakverbeterend effect" },
          { en: "Only affects color", es: "Solo afecta color", de: "Betrifft nur Farbe", nl: "Beïnvloedt alleen kleur" },
          { en: "Applies only to glass", es: "Aplica solo a vidrio", de: "Gilt nur für Glas", nl: "Geldt alleen voor glas" }
        ],
        correct: 0,
        explanation: {
          en: "Flavor scalping occurs when volatile flavor compounds (especially limonene from citrus oils) are absorbed into plastic packaging, reducing beverage flavor intensity over time. PET and HDPE plastics are particularly susceptible due to their semi-permeable nature. Solutions: barrier coatings on plastic, glass bottles (impermeable), flavor overages (adding extra flavor anticipating loss), reduced storage times, aluminum cans with internal coatings.",
          es: "Rapiña sabor ocurre cuando compuestos sabor volátiles (especialmente limoneno de aceites cítricos) se absorben en empaque plástico, reduciendo intensidad sabor bebida con tiempo. Plásticos PET y HDPE son particularmente susceptibles debido naturaleza semi-permeable. Soluciones: revestimientos barrera en plástico, botellas vidrio (impermeables), excesos sabor (añadir sabor extra anticipando pérdida), tiempos almacenamiento reducidos, latas aluminio con revestimientos internos.",
          de: "Geschmacksraub tritt auf wenn flüchtige Geschmacksverbindungen (besonders Limonen aus Zitrusölen) in Plastikverpackung absorbiert werden, reduziert Getränkegeschmacksintensität im Laufe der Zeit. PET und HDPE Kunststoffe sind besonders anfällig aufgrund semi-permeabler Natur. Lösungen: Barrierebeschichtungen auf Plastik, Glasflaschen (undurchlässig), Geschmacksüberschüsse (Extra-Geschmack hinzufügen antizipiert Verlust), reduzierte Lagerzeiten, Aluminiumdosen mit Innenbeschichtungen.",
          nl: "Smaak scalping treedt op wanneer vluchtige smaakmoleculen (vooral limoneen uit citrusoliën) worden geabsorbeerd in plastic verpakking, verminderd drank smaakintensiteit in loop van tijd. PET en HDPE plastics zijn bijzonder vatbaar vanwege semi-permeabele aard. Oplossingen: barrièrecoatings op plastic, glazen flessen (ondoordringbaar), smaak overmaat (extra smaak toevoegen anticiperend verlies), verminderde opslagtijden, aluminium blikjes met interne coatings."
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
