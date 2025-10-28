// Quiz Level 2: Currencies - Yen (Easy)
(function() {
  const level2 = {
    name: {
      en: "Japanese Yen - Easy",
      es: "Yen Japonés - Fácil",
      de: "Japanischer Yen - Einfach",
      nl: "Japanse Yen - Gemakkelijk"
    },
    questions: [
      {
        question: {
          en: "What is the typical exchange rate relationship between the Japanese Yen and other major currencies?",
          es: "¿Cuál es la relación típica del tipo de cambio entre el Yen Japonés y otras monedas principales?",
          de: "Wie ist das typische Wechselkursverhältnis zwischen dem Japanischen Yen und anderen Hauptwährungen?",
          nl: "Wat is de typische wisselkoersrelatie tussen de Japanse Yen en andere belangrijke munten?"
        },
        options: [
          { en: "Higher numbers (e.g., 100+ yen per dollar)", es: "Números más altos (ej. 100+ yen por dólar)", de: "Höhere Zahlen (z.B. 100+ Yen pro Dollar)", nl: "Hogere getallen (bijv. 100+ yen per dollar)" },
          { en: "Lower numbers (e.g., 0.5 yen per dollar)", es: "Números más bajos (ej. 0.5 yen por dólar)", de: "Niedrigere Zahlen (z.B. 0,5 Yen pro Dollar)", nl: "Lagere getallen (bijv. 0,5 yen per dollar)" },
          { en: "Always exactly 1:1", es: "Siempre exactamente 1:1", de: "Immer genau 1:1", nl: "Altijd precies 1:1" },
          { en: "Changes hourly", es: "Cambia cada hora", de: "Ändert sich stündlich", nl: "Verandert elk uur" }
        ],
        correct: 0,
        explanation: {
          en: "The Japanese Yen typically trades at higher numerical values against major currencies, often 100+ yen per US dollar. This doesn't mean it's weaker; it's simply how the currency was originally structured.",
          es: "El Yen Japonés típicamente se comercializa a valores numéricos más altos contra monedas principales, a menudo 100+ yen por dólar estadounidense. Esto no significa que sea más débil; es simplemente cómo se estructuró originalmente la moneda.",
          de: "Der Japanische Yen wird typischerweise zu höheren numerischen Werten gegen Hauptwährungen gehandelt, oft 100+ Yen pro US-Dollar. Das bedeutet nicht, dass er schwächer ist; so wurde die Währung ursprünglich strukturiert.",
          nl: "De Japanse Yen wordt typisch verhandeld tegen hogere numerieke waarden tegen belangrijke munten, vaak 100+ yen per Amerikaanse dollar. Dit betekent niet dat het zwakker is; het is gewoon hoe de munt oorspronkelijk werd gestructureerd."
        }
      },
      {
        question: {
          en: "Which coin denomination features a hole in the center besides the 5 Yen coin?",
          es: "¿Qué denominación de moneda tiene un agujero en el centro además de la moneda de 5 Yen?",
          de: "Welche Münzstückelung hat neben der 5-Yen-Münze ein Loch in der Mitte?",
          nl: "Welke muntdenominatie heeft een gat in het midden naast de 5 Yen-munt?"
        },
        options: [
          { en: "50 Yen", es: "50 Yen", de: "50 Yen", nl: "50 Yen" },
          { en: "100 Yen", es: "100 Yen", de: "100 Yen", nl: "100 Yen" },
          { en: "10 Yen", es: "10 Yen", de: "10 Yen", nl: "10 Yen" },
          { en: "500 Yen", es: "500 Yen", de: "500 Yen", nl: "500 Yen" }
        ],
        correct: 0,
        explanation: {
          en: "The 50 Yen coin also has a hole in the center, making it easy to distinguish from other coins. Both the 5 and 50 Yen coins have holes, which helps visually impaired people identify them.",
          es: "La moneda de 50 Yen también tiene un agujero en el centro, facilitando distinguirla de otras monedas. Tanto las monedas de 5 como de 50 Yen tienen agujeros, lo que ayuda a las personas con discapacidad visual a identificarlas.",
          de: "Die 50-Yen-Münze hat ebenfalls ein Loch in der Mitte, was sie von anderen Münzen leicht unterscheidbar macht. Sowohl die 5- als auch die 50-Yen-Münzen haben Löcher, was sehbehinderten Menschen hilft, sie zu identifizieren.",
          nl: "De 50 Yen-munt heeft ook een gat in het midden, waardoor het gemakkelijk te onderscheiden is van andere munten. Zowel de 5 als 50 Yen-munten hebben gaten, wat visueel gehandicapte mensen helpt ze te identificeren."
        }
      },
      {
        question: {
          en: "What is the denomination of the blue-colored Japanese banknote?",
          es: "¿Cuál es la denominación del billete japonés de color azul?",
          de: "Was ist die Stückelung der blauen japanischen Banknote?",
          nl: "Wat is de denominatie van het blauwe Japanse bankbiljet?"
        },
        options: [
          { en: "1,000 Yen", es: "1,000 Yen", de: "1.000 Yen", nl: "1.000 Yen" },
          { en: "5,000 Yen", es: "5,000 Yen", de: "5.000 Yen", nl: "5.000 Yen" },
          { en: "10,000 Yen", es: "10,000 Yen", de: "10.000 Yen", nl: "10.000 Yen" },
          { en: "2,000 Yen", es: "2,000 Yen", de: "2.000 Yen", nl: "2.000 Yen" }
        ],
        correct: 0,
        explanation: {
          en: "The 1,000 Yen banknote is blue in color and features Noguchi Hideyo. Different denominations have different colors to make them easily distinguishable at a glance.",
          es: "El billete de 1,000 Yen es de color azul y presenta a Noguchi Hideyo. Las diferentes denominaciones tienen diferentes colores para hacerlas fácilmente distinguibles de un vistazo.",
          de: "Die 1.000-Yen-Banknote ist blau und zeigt Noguchi Hideyo. Verschiedene Stückelungen haben verschiedene Farben, um sie auf einen Blick leicht unterscheidbar zu machen.",
          nl: "Het 1.000 Yen-bankbiljet is blauw van kleur en toont Noguchi Hideyo. Verschillende denominaties hebben verschillende kleuren om ze gemakkelijk onderscheidbaar te maken met één blik."
        }
      },
      {
        question: {
          en: "The Japanese Yen is considered a 'safe haven' currency. What does this mean?",
          es: "El Yen Japonés se considera una moneda de 'refugio seguro'. ¿Qué significa esto?",
          de: "Der Japanische Yen gilt als 'sicherer Hafen'-Währung. Was bedeutet das?",
          nl: "De Japanse Yen wordt beschouwd als een 'veilige haven'-munt. Wat betekent dit?"
        },
        options: [
          { en: "Investors buy it during uncertain times", es: "Los inversores la compran durante tiempos inciertos", de: "Investoren kaufen ihn in unsicheren Zeiten", nl: "Investeerders kopen het tijdens onzekere tijden" },
          { en: "It's only used in Japan", es: "Solo se usa en Japón", de: "Es wird nur in Japan verwendet", nl: "Het wordt alleen in Japan gebruikt" },
          { en: "It never changes value", es: "Nunca cambia de valor", de: "Es ändert niemals den Wert", nl: "Het verandert nooit van waarde" },
          { en: "It's backed by gold", es: "Está respaldada por oro", de: "Es ist durch Gold gedeckt", nl: "Het is gedekt door goud" }
        ],
        correct: 0,
        explanation: {
          en: "A 'safe haven' currency means investors tend to buy it during times of global uncertainty or market volatility, as it's considered stable and reliable. The Yen often strengthens during global crises.",
          es: "Una moneda de 'refugio seguro' significa que los inversores tienden a comprarla durante tiempos de incertidumbre global o volatilidad del mercado, ya que se considera estable y confiable. El Yen a menudo se fortalece durante crisis globales.",
          de: "Eine 'sicherer Hafen'-Währung bedeutet, dass Investoren dazu neigen, sie in Zeiten globaler Unsicherheit oder Marktvolatilität zu kaufen, da sie als stabil und zuverlässig gilt. Der Yen stärkt sich oft während globaler Krisen.",
          nl: "Een 'veilige haven'-munt betekent dat investeerders de neiging hebben het te kopen tijdens tijden van wereldwijde onzekerheid of marktvolatiliteit, omdat het als stabiel en betrouwbaar wordt beschouwd. De Yen wordt vaak sterker tijdens wereldwijde crises."
        }
      },
      {
        question: {
          en: "What is the primary metal used in the 100 Yen coin?",
          es: "¿Cuál es el metal principal usado en la moneda de 100 Yen?",
          de: "Was ist das primäre Metall, das in der 100-Yen-Münze verwendet wird?",
          nl: "Wat is het primaire metaal dat wordt gebruikt in de 100 Yen-munt?"
        },
        options: [
          { en: "Copper-nickel", es: "Cobre-níquel", de: "Kupfer-Nickel", nl: "Koper-nikkel" },
          { en: "Aluminum", es: "Aluminio", de: "Aluminium", nl: "Aluminium" },
          { en: "Brass", es: "Latón", de: "Messing", nl: "Messing" },
          { en: "Silver", es: "Plata", de: "Silber", nl: "Zilver" }
        ],
        correct: 0,
        explanation: {
          en: "The 100 Yen coin is made of copper-nickel alloy, which gives it a silver-like appearance. It features cherry blossoms on one side, symbolizing Japan's national flower.",
          es: "La moneda de 100 Yen está hecha de aleación de cobre-níquel, lo que le da una apariencia plateada. Presenta flores de cerezo en un lado, simbolizando la flor nacional de Japón.",
          de: "Die 100-Yen-Münze besteht aus Kupfer-Nickel-Legierung, was ihr ein silberartiges Aussehen verleiht. Sie zeigt Kirschblüten auf einer Seite, die Japans Nationalblume symbolisieren.",
          nl: "De 100 Yen-munt is gemaakt van koper-nikkel legering, wat het een zilverachtig uiterlijk geeft. Het toont kersenbloesems aan één kant, die Japan's nationale bloem symboliseren."
        }
      },
      {
        question: {
          en: "In foreign exchange trading, what is the Yen most commonly paired with?",
          es: "En el comercio de divisas, ¿con qué se empareja más comúnmente el Yen?",
          de: "Im Devisenhandel, womit wird der Yen am häufigsten gepaart?",
          nl: "In valutahandel, waarmee wordt de Yen het meest gekoppeld?"
        },
        options: [
          { en: "US Dollar (USD/JPY)", es: "Dólar estadounidense (USD/JPY)", de: "US-Dollar (USD/JPY)", nl: "Amerikaanse Dollar (USD/JPY)" },
          { en: "Euro (EUR/JPY)", es: "Euro (EUR/JPY)", de: "Euro (EUR/JPY)", nl: "Euro (EUR/JPY)" },
          { en: "British Pound (GBP/JPY)", es: "Libra esterlina (GBP/JPY)", de: "Britisches Pfund (GBP/JPY)", nl: "Britse Pond (GBP/JPY)" },
          { en: "Chinese Yuan (CNY/JPY)", es: "Yuan chino (CNY/JPY)", de: "Chinesischer Yuan (CNY/JPY)", nl: "Chinese Yuan (CNY/JPY)" }
        ],
        correct: 0,
        explanation: {
          en: "The USD/JPY currency pair is one of the most actively traded pairs in the forex market. It represents how many yen are needed to buy one US dollar and is considered a major currency pair.",
          es: "El par de divisas USD/JPY es uno de los pares más activamente comercializados en el mercado forex. Representa cuántos yen se necesitan para comprar un dólar estadounidense y se considera un par de divisas principal.",
          de: "Das USD/JPY-Währungspaar ist eines der aktivsten gehandelten Paare im Forex-Markt. Es stellt dar, wie viele Yen benötigt werden, um einen US-Dollar zu kaufen, und gilt als Hauptwährungspaar.",
          nl: "Het USD/JPY-muntpaar is een van de meest actief verhandelde paren op de forex-markt. Het vertegenwoordigt hoeveel yen nodig zijn om één Amerikaanse dollar te kopen en wordt beschouwd als een belangrijk muntpaar."
        }
      },
      {
        question: {
          en: "What economic phenomenon is Japan historically known for that affects the Yen?",
          es: "¿Por qué fenómeno económico es Japón históricamente conocido que afecta al Yen?",
          de: "Für welches wirtschaftliche Phänomen ist Japan historisch bekannt, das den Yen beeinflusst?",
          nl: "Voor welk economisch fenomeen staat Japan historisch bekend dat de Yen beïnvloedt?"
        },
        options: [
          { en: "Low inflation/deflation", es: "Baja inflación/deflación", de: "Niedrige Inflation/Deflation", nl: "Lage inflatie/deflatie" },
          { en: "High inflation", es: "Alta inflación", de: "Hohe Inflation", nl: "Hoge inflatie" },
          { en: "Currency instability", es: "Inestabilidad de moneda", de: "Währungsinstabilität", nl: "Muntinstabiliteit" },
          { en: "Rapid devaluation", es: "Devaluación rápida", de: "Schnelle Abwertung", nl: "Snelle devaluatie" }
        ],
        correct: 0,
        explanation: {
          en: "Japan has historically struggled with low inflation and even deflation, especially since the 1990s. This has influenced Bank of Japan policies and the Yen's international standing as a stable currency.",
          es: "Japón ha luchado históricamente con baja inflación e incluso deflación, especialmente desde los años 1990. Esto ha influenciado las políticas del Banco de Japón y la posición internacional del Yen como moneda estable.",
          de: "Japan hat historisch mit niedriger Inflation und sogar Deflation gekämpft, besonders seit den 1990er Jahren. Dies hat die Politiken der Bank von Japan und Yens internationale Stellung als stabile Währung beeinflusst.",
          nl: "Japan heeft historisch geworsteld met lage inflatie en zelfs deflatie, vooral sinds de jaren 1990. Dit heeft de Bank van Japan-beleid en de Yen's internationale positie als stabiele munt beïnvloed."
        }
      },
      {
        question: {
          en: "What feature appears on the reverse side of most Japanese coins?",
          es: "¿Qué característica aparece en el reverso de la mayoría de las monedas japonesas?",
          de: "Welches Merkmal erscheint auf der Rückseite der meisten japanischen Münzen?",
          nl: "Welke eigenschap verschijnt op de achterkant van de meeste Japanse munten?"
        },
        options: [
          { en: "The denomination and year", es: "La denominación y año", de: "Die Stückelung und das Jahr", nl: "De denominatie en jaar" },
          { en: "The Emperor's portrait", es: "El retrato del Emperador", de: "Das Porträt des Kaisers", nl: "Het portret van de Keizer" },
          { en: "Mount Fuji", es: "Monte Fuji", de: "Berg Fuji", nl: "Berg Fuji" },
          { en: "Cherry blossoms only", es: "Solo flores de cerezo", de: "Nur Kirschblüten", nl: "Alleen kersenbloesems" }
        ],
        correct: 0,
        explanation: {
          en: "Most Japanese coins feature the denomination (value) and the year of minting on the reverse side. The year is typically shown in the Japanese calendar system, counting from the current emperor's reign.",
          es: "La mayoría de las monedas japonesas presentan la denominación (valor) y el año de acuñación en el reverso. El año típicamente se muestra en el sistema de calendario japonés, contando desde el reinado del emperador actual.",
          de: "Die meisten japanischen Münzen zeigen die Stückelung (Wert) und das Prägejahr auf der Rückseite. Das Jahr wird typischerweise im japanischen Kalendersystem angezeigt, gezählt von der Regierungszeit des aktuellen Kaisers.",
          nl: "De meeste Japanse munten tonen de denominatie (waarde) en het jaar van muntslag op de achterkant. Het jaar wordt typisch getoond in het Japanse kalendersysteem, tellend vanaf de heerschappij van de huidige keizer."
        }
      },
      {
        question: {
          en: "Which of these best describes Japan's approach to physical cash?",
          es: "¿Cuál de estas describe mejor el enfoque de Japón hacia el efectivo físico?",
          de: "Welche dieser beschreibt am besten Japans Ansatz zu physischem Bargeld?",
          nl: "Welke van deze beschrijft het beste Japan's benadering van fysiek contant geld?"
        },
        options: [
          { en: "Strong preference for cash transactions", es: "Fuerte preferencia por transacciones en efectivo", de: "Starke Präferenz für Bargeldtransaktionen", nl: "Sterke voorkeur voor contante transacties" },
          { en: "Completely cashless society", es: "Sociedad completamente sin efectivo", de: "Völlig bargeldlose Gesellschaft", nl: "Volledig cashloze samenleving" },
          { en: "Only digital payments allowed", es: "Solo pagos digitales permitidos", de: "Nur digitale Zahlungen erlaubt", nl: "Alleen digitale betalingen toegestaan" },
          { en: "Cards preferred over cash", es: "Tarjetas preferidas sobre efectivo", de: "Karten bevorzugt über Bargeld", nl: "Kaarten geprefereerd boven contant geld" }
        ],
        correct: 0,
        explanation: {
          en: "Japan maintains a strong cultural preference for cash transactions, with many businesses still primarily operating on a cash basis. This is unusual among developed nations that have largely moved to digital payments.",
          es: "Japón mantiene una fuerte preferencia cultural por las transacciones en efectivo, con muchos negocios que aún operan principalmente en base a efectivo. Esto es inusual entre naciones desarrolladas que se han movido en gran medida a pagos digitales.",
          de: "Japan behält eine starke kulturelle Präferenz für Bargeldtransaktionen bei, wobei viele Unternehmen immer noch hauptsächlich auf Bargeld basieren. Dies ist ungewöhnlich unter entwickelten Nationen, die sich größtenteils zu digitalen Zahlungen bewegt haben.",
          nl: "Japan behoudt een sterke culturele voorkeur voor contante transacties, met veel bedrijven die nog steeds voornamelijk op contantgeldbasis opereren. Dit is ongewoon onder ontwikkelde landen die grotendeels zijn overgestapt op digitale betalingen."
        }
      },
      {
        question: {
          en: "What is the primary function of the Bank of Japan regarding the Yen?",
          es: "¿Cuál es la función principal del Banco de Japón con respecto al Yen?",
          de: "Was ist die primäre Funktion der Bank von Japan bezüglich des Yen?",
          nl: "Wat is de primaire functie van de Bank van Japan betreffende de Yen?"
        },
        options: [
          { en: "Monetary policy and currency stability", es: "Política monetaria y estabilidad de moneda", de: "Geldpolitik und Währungsstabilität", nl: "Monetair beleid en muntstabiliteit" },
          { en: "Tax collection", es: "Recaudación de impuestos", de: "Steuererhebung", nl: "Belastinginning" },
          { en: "International trade negotiations", es: "Negociaciones de comercio internacional", de: "Internationale Handelsverhandlungen", nl: "Internationale handelsonderhandelingen" },
          { en: "Stock market regulation", es: "Regulación del mercado de valores", de: "Börsenregulierung", nl: "Aandelenmarktregulering" }
        ],
        correct: 0,
        explanation: {
          en: "The Bank of Japan's primary role is implementing monetary policy to maintain price stability and ensure the smooth functioning of the financial system, which directly affects the Yen's value and stability.",
          es: "El papel principal del Banco de Japón es implementar política monetaria para mantener estabilidad de precios y asegurar el funcionamiento suave del sistema financiero, lo que afecta directamente el valor y estabilidad del Yen.",
          de: "Die primäre Rolle der Bank von Japan ist die Umsetzung der Geldpolitik zur Aufrechterhaltung der Preisstabilität und Gewährleistung des reibungslosen Funktionierens des Finanzsystems, was direkt den Wert und die Stabilität des Yen beeinflusst.",
          nl: "De primaire rol van de Bank van Japan is het implementeren van monetair beleid om prijsstabiliteit te behouden en het soepel functioneren van het financiële systeem te verzekeren, wat direct de waarde en stabiliteit van de Yen beïnvloedt."
        }
      },
      {
        question: {
          en: "What notable feature is found on the 500 Yen coin?",
          es: "¿Qué característica notable se encuentra en la moneda de 500 Yen?",
          de: "Welches bemerkenswerte Merkmal findet sich auf der 500-Yen-Münze?",
          nl: "Welke opmerkelijke eigenschap is te vinden op de 500 Yen-munt?"
        },
        options: [
          { en: "Anti-counterfeiting micro-printing", es: "Microimpresión anti-falsificación", de: "Fälschungsschutz-Mikrodruck", nl: "Anti-vervalsing micro-druk" },
          { en: "A hole in the center", es: "Un agujero en el centro", de: "Ein Loch in der Mitte", nl: "Een gat in het midden" },
          { en: "Magnetic properties", es: "Propiedades magnéticas", de: "Magnetische Eigenschaften", nl: "Magnetische eigenschappen" },
          { en: "Color-changing surface", es: "Superficie que cambia de color", de: "Farbwechselnde Oberfläche", nl: "Kleurveranderende oppervlak" }
        ],
        correct: 0,
        explanation: {
          en: "The 500 Yen coin features sophisticated anti-counterfeiting measures including micro-printing that's difficult to reproduce. It's one of the most valuable coins in regular circulation worldwide.",
          es: "La moneda de 500 Yen presenta medidas sofisticadas anti-falsificación incluyendo microimpresión que es difícil de reproducir. Es una de las monedas más valiosas en circulación regular a nivel mundial.",
          de: "Die 500-Yen-Münze verfügt über ausgeklügelte Fälschungsschutzmaßnahmen einschließlich Mikrodruck, der schwer zu reproduzieren ist. Sie ist eine der wertvollsten Münzen im regulären Umlauf weltweit.",
          nl: "De 500 Yen-munt heeft geavanceerde anti-vervalsingmaatregelen inclusief micro-druk die moeilijk te reproduceren is. Het is een van de meest waardevolle munten in reguliere circulatie wereldwijd."
        }
      },
      {
        question: {
          en: "Historically, what was used in Japan before the Yen was introduced?",
          es: "Históricamente, ¿qué se usaba en Japón antes de que se introdujera el Yen?",
          de: "Was wurde historisch in Japan verwendet, bevor der Yen eingeführt wurde?",
          nl: "Wat werd historisch in Japan gebruikt voordat de Yen werd geïntroduceerd?"
        },
        options: [
          { en: "Mon, bu, and ryo coins", es: "Monedas mon, bu y ryo", de: "Mon-, bu- und ryo-Münzen", nl: "Mon, bu en ryo munten" },
          { en: "Chinese Yuan only", es: "Solo Yuan chino", de: "Nur chinesischer Yuan", nl: "Alleen Chinese Yuan" },
          { en: "Gold bars exclusively", es: "Barras de oro exclusivamente", de: "Ausschließlich Goldbarren", nl: "Uitsluitend goudstaven" },
          { en: "Barter system only", es: "Solo sistema de trueque", de: "Nur Tauschsystem", nl: "Alleen ruilsysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Before the Yen, Japan used a complex system of different coins including mon (copper), bu (silver), and ryo (gold). This system was complicated and varied by region, which the Yen simplified.",
          es: "Antes del Yen, Japón usaba un sistema complejo de diferentes monedas incluyendo mon (cobre), bu (plata) y ryo (oro). Este sistema era complicado y variaba por región, lo que el Yen simplificó.",
          de: "Vor dem Yen verwendete Japan ein komplexes System verschiedener Münzen einschließlich mon (Kupfer), bu (Silber) und ryo (Gold). Dieses System war kompliziert und variierte je nach Region, was der Yen vereinfachte.",
          nl: "Voor de Yen gebruikte Japan een complex systeem van verschillende munten inclusief mon (koper), bu (zilver) en ryo (goud). Dit systeem was ingewikkeld en varieerde per regio, wat de Yen vereenvoudigde."
        }
      },
      {
        question: {
          en: "What makes the 1 Yen coin unique among world currencies?",
          es: "¿Qué hace única a la moneda de 1 Yen entre las monedas mundiales?",
          de: "Was macht die 1-Yen-Münze unter den Weltwährungen einzigartig?",
          nl: "Wat maakt de 1 Yen-munt uniek onder wereldmunten?"
        },
        options: [
          { en: "It's one of the lightest coins in the world", es: "Es una de las monedas más ligeras del mundo", de: "Es ist eine der leichtesten Münzen der Welt", nl: "Het is een van de lichtste munten ter wereld" },
          { en: "It's made of pure gold", es: "Está hecha de oro puro", de: "Es besteht aus reinem Gold", nl: "Het is gemaakt van puur goud" },
          { en: "It changes color in sunlight", es: "Cambia de color a la luz del sol", de: "Es ändert die Farbe im Sonnenlicht", nl: "Het verandert van kleur in zonlicht" },
          { en: "It's the largest coin by diameter", es: "Es la moneda más grande por diámetro", de: "Es ist die größte Münze nach Durchmesser", nl: "Het is de grootste munt qua diameter" }
        ],
        correct: 0,
        explanation: {
          en: "The 1 Yen coin weighs only 1 gram and is made of aluminum, making it one of the lightest coins in circulation worldwide. It's so light it will float on water.",
          es: "La moneda de 1 Yen pesa solo 1 gramo y está hecha de aluminio, haciéndola una de las monedas más ligeras en circulación a nivel mundial. Es tan liviana que flotará en agua.",
          de: "Die 1-Yen-Münze wiegt nur 1 Gramm und besteht aus Aluminium, was sie zu einer der leichtesten Münzen im weltweiten Umlauf macht. Sie ist so leicht, dass sie auf Wasser schwimmt.",
          nl: "De 1 Yen-munt weegt slechts 1 gram en is gemaakt van aluminium, waardoor het een van de lichtste munten in circulatie wereldwijd is. Het is zo licht dat het op water drijft."
        }
      },
      {
        question: {
          en: "What economic policy tool does the Bank of Japan commonly use regarding the Yen?",
          es: "¿Qué herramienta de política económica usa comúnmente el Banco de Japón con respecto al Yen?",
          de: "Welches wirtschaftspolitische Instrument verwendet die Bank von Japan häufig bezüglich des Yen?",
          nl: "Welk economisch beleidsinstrument gebruikt de Bank van Japan gewoonlijk betreffende de Yen?"
        },
        options: [
          { en: "Interest rate adjustments", es: "Ajustes de tasa de interés", de: "Zinsanpassungen", nl: "Renteaanpassingen" },
          { en: "Daily currency revaluation", es: "Revaluación diaria de moneda", de: "Tägliche Währungsneubewertung", nl: "Dagelijkse muntherwaarding" },
          { en: "Fixed exchange rates", es: "Tipos de cambio fijos", de: "Feste Wechselkurse", nl: "Vaste wisselkoersen" },
          { en: "Currency substitution", es: "Sustitución de moneda", de: "Währungssubstitution", nl: "Muntvervanging" }
        ],
        correct: 0,
        explanation: {
          en: "The Bank of Japan primarily uses interest rate adjustments as a monetary policy tool to influence the Yen's value and Japan's economic conditions. They've maintained very low interest rates for many years.",
          es: "El Banco de Japón principalmente usa ajustes de tasa de interés como herramienta de política monetaria para influir en el valor del Yen y las condiciones económicas de Japón. Han mantenido tasas de interés muy bajas por muchos años.",
          de: "Die Bank von Japan verwendet hauptsächlich Zinsanpassungen als geldpolitisches Instrument, um den Wert des Yen und Japans wirtschaftliche Bedingungen zu beeinflussen. Sie haben sehr niedrige Zinssätze über viele Jahre beibehalten.",
          nl: "De Bank van Japan gebruikt voornamelijk renteaanpassingen als monetair beleidsinstrument om de waarde van de Yen en Japan's economische omstandigheden te beïnvloeden. Ze hebben zeer lage rentetarieven aangehouden gedurende vele jaren."
        }
      },
      {
        question: {
          en: "Which historical figure appears on the 5,000 Yen banknote?",
          es: "¿Qué figura histórica aparece en el billete de 5,000 Yen?",
          de: "Welche historische Figur erscheint auf der 5.000-Yen-Banknote?",
          nl: "Welke historische figuur verschijnt op het 5.000 Yen-bankbiljet?"
        },
        options: [
          { en: "Higuchi Ichiyō", es: "Higuchi Ichiyō", de: "Higuchi Ichiyō", nl: "Higuchi Ichiyō" },
          { en: "Noguchi Hideyo", es: "Noguchi Hideyo", de: "Noguchi Hideyo", nl: "Noguchi Hideyo" },
          { en: "Fukuzawa Yukichi", es: "Fukuzawa Yukichi", de: "Fukuzawa Yukichi", nl: "Fukuzawa Yukichi" },
          { en: "Emperor Meiji", es: "Emperador Meiji", de: "Kaiser Meiji", nl: "Keizer Meiji" }
        ],
        correct: 0,
        explanation: {
          en: "Higuchi Ichiyō, a prominent female novelist and poet from the Meiji period, appears on the 5,000 Yen banknote. She was one of the first professional female writers in modern Japanese literature.",
          es: "Higuchi Ichiyō, una novelista y poeta femenina prominente del período Meiji, aparece en el billete de 5,000 Yen. Fue una de las primeras escritoras profesionales femeninas en la literatura japonesa moderna.",
          de: "Higuchi Ichiyō, eine prominente weibliche Romanautorin und Dichterin aus der Meiji-Zeit, erscheint auf der 5.000-Yen-Banknote. Sie war eine der ersten professionellen weiblichen Schriftstellerinnen in der modernen japanischen Literatur.",
          nl: "Higuchi Ichiyō, een prominente vrouwelijke romanschrijfster en dichteres uit de Meiji-periode, verschijnt op het 5.000 Yen-bankbiljet. Ze was een van de eerste professionele vrouwelijke schrijfsters in de moderne Japanse literatuur."
        }
      },
      {
        question: {
          en: "What is a common way people in Japan still use 1 Yen coins?",
          es: "¿Cuál es una forma común en que las personas en Japón aún usan monedas de 1 Yen?",
          de: "Was ist eine übliche Art, wie Menschen in Japan immer noch 1-Yen-Münzen verwenden?",
          nl: "Wat is een veelvoorkomende manier waarop mensen in Japan nog steeds 1 Yen-munten gebruiken?"
        },
        options: [
          { en: "Making exact change for small purchases", es: "Hacer cambio exacto para compras pequeñas", de: "Wechselgeld für kleine Einkäufe machen", nl: "Exact wisselgeld maken voor kleine aankopen" },
          { en: "As collectibles only", es: "Solo como coleccionables", de: "Nur als Sammlerstücke", nl: "Alleen als verzamelobjecten" },
          { en: "International trade", es: "Comercio internacional", de: "Internationaler Handel", nl: "Internationale handel" },
          { en: "They're no longer used", es: "Ya no se usan", de: "Sie werden nicht mehr verwendet", nl: "Ze worden niet meer gebruikt" }
        ],
        correct: 0,
        explanation: {
          en: "Despite their low value, 1 Yen coins are still commonly used in Japan for making exact change, especially in cash-heavy transactions. Many people save them in coin jars at home.",
          es: "A pesar de su bajo valor, las monedas de 1 Yen aún se usan comúnmente en Japón para hacer cambio exacto, especialmente en transacciones con mucho efectivo. Muchas personas las guardan en jarras de monedas en casa.",
          de: "Trotz ihres geringen Wertes werden 1-Yen-Münzen in Japan immer noch häufig für Wechselgeld verwendet, besonders bei bargeldlastigen Transaktionen. Viele Menschen sammeln sie in Münzgläsern zu Hause.",
          nl: "Ondanks hun lage waarde worden 1 Yen-munten nog steeds algemeen gebruikt in Japan voor het maken van exact wisselgeld, vooral bij contant-geld-zware transacties. Veel mensen bewaren ze in muntpotten thuis."
        }
      },
      {
        question: {
          en: "What does 'JPY' stand for in international finance?",
          es: "¿Qué significa 'JPY' en finanzas internacionales?",
          de: "Wofür steht 'JPY' im internationalen Finanzwesen?",
          nl: "Waar staat 'JPY' voor in internationale financiën?"
        },
        options: [
          { en: "Japanese Yen", es: "Yen Japonés", de: "Japanischer Yen", nl: "Japanse Yen" },
          { en: "Japan Payment System", es: "Sistema de Pago de Japón", de: "Japan Zahlungssystem", nl: "Japan Betalingssysteem" },
          { en: "Japanese Yield", es: "Rendimiento Japonés", de: "Japanische Rendite", nl: "Japanse Opbrengst" },
          { en: "Japan Price Index", es: "Índice de Precios de Japón", de: "Japan Preisindex", nl: "Japan Prijsindex" }
        ],
        correct: 0,
        explanation: {
          en: "JPY is the three-letter ISO currency code for Japanese Yen. This standardized code is used globally in financial transactions, currency trading, and international banking systems.",
          es: "JPY es el código de moneda ISO de tres letras para el Yen Japonés. Este código estandarizado se usa globalmente en transacciones financieras, comercio de divisas y sistemas bancarios internacionales.",
          de: "JPY ist der dreistellige ISO-Währungscode für Japanischen Yen. Dieser standardisierte Code wird global in Finanztransaktionen, Währungshandel und internationalen Bankensystemen verwendet.",
          nl: "JPY is de drieletterige ISO-muntcode voor Japanse Yen. Deze gestandaardiseerde code wordt wereldwijd gebruikt in financiële transacties, valutahandel en internationale banksystemen."
        }
      },
      {
        question: {
          en: "What is the typical range of Japanese banknote denominations currently in circulation?",
          es: "¿Cuál es el rango típico de denominaciones de billetes japoneses actualmente en circulación?",
          de: "Was ist der typische Bereich japanischer Banknotenstückelungen, die derzeit im Umlauf sind?",
          nl: "Wat is het typische bereik van Japanse bankbiljetdenominaties die momenteel in omloop zijn?"
        },
        options: [
          { en: "1,000 to 10,000 Yen", es: "1,000 a 10,000 Yen", de: "1.000 bis 10.000 Yen", nl: "1.000 tot 10.000 Yen" },
          { en: "100 to 1,000 Yen", es: "100 a 1,000 Yen", de: "100 bis 1.000 Yen", nl: "100 tot 1.000 Yen" },
          { en: "500 to 5,000 Yen", es: "500 a 5,000 Yen", de: "500 bis 5.000 Yen", nl: "500 tot 5.000 Yen" },
          { en: "10,000 to 50,000 Yen", es: "10,000 a 50,000 Yen", de: "10.000 bis 50.000 Yen", nl: "10.000 tot 50.000 Yen" }
        ],
        correct: 0,
        explanation: {
          en: "Japanese banknotes currently in circulation are 1,000 Yen (blue), 5,000 Yen (purple), and 10,000 Yen (brown/purple). There's also a rare 2,000 Yen note, but it's seldom seen in daily use.",
          es: "Los billetes japoneses actualmente en circulación son 1,000 Yen (azul), 5,000 Yen (púrpura) y 10,000 Yen (marrón/púrpura). También hay un billete raro de 2,000 Yen, pero rara vez se ve en uso diario.",
          de: "Japanische Banknoten, die derzeit im Umlauf sind, sind 1.000 Yen (blau), 5.000 Yen (lila) und 10.000 Yen (braun/lila). Es gibt auch eine seltene 2.000-Yen-Note, aber sie wird im täglichen Gebrauch selten gesehen.",
          nl: "Japanse bankbiljetten die momenteel in omloop zijn zijn 1.000 Yen (blauw), 5.000 Yen (paars) en 10.000 Yen (bruin/paars). Er is ook een zeldzaam 2.000 Yen-biljet, maar dat wordt zelden gezien in dagelijks gebruik."
        }
      },
      {
        question: {
          en: "What is the weight of a 1 Yen coin?",
          es: "¿Cuál es el peso de una moneda de 1 Yen?",
          de: "Was ist das Gewicht einer 1-Yen-Münze?",
          nl: "Wat is het gewicht van een 1 Yen-munt?"
        },
        options: [
          { en: "1 gram", es: "1 gramo", de: "1 Gramm", nl: "1 gram" },
          { en: "5 grams", es: "5 gramos", de: "5 Gramm", nl: "5 gram" },
          { en: "10 grams", es: "10 gramos", de: "10 Gramm", nl: "10 gram" },
          { en: "0.5 grams", es: "0.5 gramos", de: "0,5 Gramm", nl: "0,5 gram" }
        ],
        correct: 0,
        explanation: {
          en: "The 1 Yen coin weighs exactly 1 gram, making it remarkably light. This aluminum coin is so light that it can float on water if placed carefully.",
          es: "La moneda de 1 Yen pesa exactamente 1 gramo, haciéndola notablemente liviana. Esta moneda de aluminio es tan liviana que puede flotar en agua si se coloca con cuidado.",
          de: "Die 1-Yen-Münze wiegt genau 1 Gramm, was sie bemerkenswert leicht macht. Diese Aluminiummünze ist so leicht, dass sie auf Wasser schwimmen kann, wenn sie vorsichtig platziert wird.",
          nl: "De 1 Yen-munt weegt precies 1 gram, waardoor het opmerkelijk licht is. Deze aluminium munt is zo licht dat het op water kan drijven als het voorzichtig wordt geplaatst."
        }
      },
      {
        question: {
          en: "Which metal gives the 10 Yen coin its distinctive bronze color?",
          es: "¿Qué metal le da a la moneda de 10 Yen su distintivo color bronce?",
          de: "Welches Metall gibt der 10-Yen-Münze ihre charakteristische Bronzefarbe?",
          nl: "Welk metaal geeft de 10 Yen-munt zijn kenmerkende bronskleur?"
        },
        options: [
          { en: "Copper", es: "Cobre", de: "Kupfer", nl: "Koper" },
          { en: "Brass", es: "Latón", de: "Messing", nl: "Messing" },
          { en: "Aluminum", es: "Aluminio", de: "Aluminium", nl: "Aluminium" },
          { en: "Nickel", es: "Níquel", de: "Nickel", nl: "Nikkel" }
        ],
        correct: 0,
        explanation: {
          en: "The 10 Yen coin is made of bronze (primarily copper), which gives it its distinctive reddish-brown color. It features the Phoenix Hall of Byodo-in Temple on one side.",
          es: "La moneda de 10 Yen está hecha de bronce (principalmente cobre), lo que le da su distintivo color marrón rojizo. Presenta el Salón del Fénix del Templo Byodo-in en un lado.",
          de: "Die 10-Yen-Münze besteht aus Bronze (hauptsächlich Kupfer), was ihr ihre charakteristische rotbraune Farbe verleiht. Sie zeigt die Phönixhalle des Byodo-in-Tempels auf einer Seite.",
          nl: "De 10 Yen-munt is gemaakt van brons (voornamelijk koper), wat het zijn kenmerkende roodbruine kleur geeft. Het toont de Phoenix Hall van Byodo-in Tempel aan één kant."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();