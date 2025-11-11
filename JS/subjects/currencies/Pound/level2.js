// Quiz Level 2: Currencies - British Pound (Easy)
(function() {
  const level2 = {
    name: {
      en: "British Pound - Easy",
      es: "Libra Esterlina - Fácil",
      de: "Britisches Pfund - Einfach",
      nl: "Britse Pond - Gemakkelijk"
    },
    questions: [
      {
        question: {
          en: "What is the current exchange rate system used by the British Pound?",
          es: "¿Cuál es el sistema de tipo de cambio actual utilizado por la libra esterlina?",
          de: "Welches Wechselkurssystem verwendet das britische Pfund derzeit?",
          nl: "Wat is het huidige wisselkoerssysteem dat door het Britse pond wordt gebruikt?"
        },
        options: [
          { en: "Fixed exchange rate", es: "Tipo de cambio fijo", de: "Fester Wechselkurs", nl: "Vaste wisselkoers" },
          { en: "Floating exchange rate", es: "Tipo de cambio flotante", de: "Flexibler Wechselkurs", nl: "Zwevende wisselkoers" },
          { en: "Pegged to the Euro", es: "Vinculado al Euro", de: "An den Euro gekoppelt", nl: "Gekoppeld aan de Euro" },
          { en: "Gold standard", es: "Patrón oro", de: "Goldstandard", nl: "Goudstandaard" }
        ],
        correct: 1,
        explanation: {
          en: "The British Pound uses a floating exchange rate system, meaning its value is determined by supply and demand in the foreign exchange market rather than being fixed or pegged to another currency.",
          es: "La libra esterlina utiliza un sistema de tipo de cambio flotante, lo que significa que su valor está determinado por la oferta y la demanda en el mercado de divisas en lugar de estar fijo o vinculado a otra moneda.",
          de: "Das britische Pfund verwendet ein flexibles Wechselkurssystem, was bedeutet, dass sein Wert durch Angebot und Nachfrage auf dem Devisenmarkt bestimmt wird und nicht fest oder an eine andere Währung gekoppelt ist.",
          nl: "Het Britse pond gebruikt een zwevend wisselkoerssysteem, wat betekent dat de waarde wordt bepaald door vraag en aanbod op de valutamarkt in plaats van vast of gekoppeld te zijn aan een andere valuta."
        }
      },
      {
        question: {
          en: "Which territories besides the UK use the British Pound?",
          es: "¿Qué territorios además del Reino Unido usan la libra esterlina?",
          de: "Welche Gebiete außer dem Vereinigten Königreich verwenden das britische Pfund?",
          nl: "Welke gebieden naast het VK gebruiken het Britse pond?"
        },
        options: [
          { en: "Ireland and Scotland only", es: "Solo Irlanda y Escocia", de: "Nur Irland und Schottland", nl: "Alleen Ierland en Schotland" },
          { en: "British Overseas Territories and Crown Dependencies", es: "Territorios Británicos de Ultramar y Dependencias de la Corona", de: "Britische Überseegebiete und Kronbesitzungen", nl: "Britse overzeese gebieden en Kroonafhankelijkheden" },
          { en: "All Commonwealth countries", es: "Todos los países de la Commonwealth", de: "Alle Commonwealth-Länder", nl: "Alle Gemenebestlanden" },
          { en: "European Union countries", es: "Países de la Unión Europea", de: "Länder der Europäischen Union", nl: "Landen van de Europese Unie" }
        ],
        correct: 1,
        explanation: {
          en: "Several British Overseas Territories (like Gibraltar, Falkland Islands) and Crown Dependencies (Jersey, Guernsey, Isle of Man) use the British Pound or their own pound currencies pegged to it.",
          es: "Varios Territorios Británicos de Ultramar (como Gibraltar, Islas Malvinas) y Dependencias de la Corona (Jersey, Guernsey, Isla de Man) usan la libra esterlina o sus propias libras vinculadas a ella.",
          de: "Mehrere britische Überseegebiete (wie Gibraltar, Falklandinseln) und Kronbesitzungen (Jersey, Guernsey, Isle of Man) verwenden das britische Pfund oder ihre eigenen daran gekoppelten Pfund-Währungen.",
          nl: "Verschillende Britse overzeese gebieden (zoals Gibraltar, Falklandeilanden) en Kroonafhankelijkheden (Jersey, Guernsey, Isle of Man) gebruiken het Britse pond of hun eigen pond-valuta's die eraan gekoppeld zijn."
        }
      },
      {
        question: {
          en: "What major economic event in 1992 affected the British Pound?",
          es: "¿Qué evento económico importante en 1992 afectó a la libra esterlina?",
          de: "Welches wichtige wirtschaftliche Ereignis im Jahr 1992 betraf das britische Pfund?",
          nl: "Welke belangrijke economische gebeurtenis in 1992 beïnvloedde het Britse pond?"
        },
        options: [
          { en: "Black Wednesday - UK left the ERM", es: "Miércoles Negro - Reino Unido salió del MTC", de: "Schwarzer Mittwoch - UK verließ den WKM", nl: "Zwarte Woensdag - VK verliet het ERM" },
          { en: "Introduction of the Euro", es: "Introducción del Euro", de: "Einführung des Euro", nl: "Invoering van de Euro" },
          { en: "Global financial crisis", es: "Crisis financiera global", de: "Globale Finanzkrise", nl: "Wereldwijde financiële crisis" },
          { en: "Oil crisis", es: "Crisis del petróleo", de: "Ölkrise", nl: "Oliecrisis" }
        ],
        correct: 0,
        explanation: {
          en: "Black Wednesday (September 16, 1992) was when the UK was forced to withdraw the pound from the European Exchange Rate Mechanism (ERM) after failing to keep it above the agreed lower limit.",
          es: "El Miércoles Negro (16 de septiembre de 1992) fue cuando el Reino Unido se vio obligado a retirar la libra del Mecanismo de Tipos de Cambio Europeo (MTC) después de no poder mantenerla por encima del límite inferior acordado.",
          de: "Der Schwarze Mittwoch (16. September 1992) war, als das Vereinigte Königreich gezwungen war, das Pfund aus dem Europäischen Wechselkursmechanismus (WKM) zurückzuziehen, nachdem es nicht gelungen war, es über der vereinbarten Untergrenze zu halten.",
          nl: "Zwarte Woensdag (16 september 1992) was toen het VK gedwongen werd het pond terug te trekken uit het Europese Wisselkoersmechanisme (ERM) na het falen om het boven de overeengekomen ondergrens te houden."
        }
      },
      {
        question: {
          en: "What is the role of the Chancellor of the Exchequer?",
          es: "¿Cuál es el papel del Canciller del Tesoro?",
          de: "Was ist die Rolle des Schatzkanzlers?",
          nl: "Wat is de rol van de Chancellor of the Exchequer?"
        },
        options: [
          { en: "UK's finance minister responsible for economic policy", es: "Ministro de finanzas del Reino Unido responsable de la política económica", de: "Finanzminister des UK, verantwortlich für Wirtschaftspolitik", nl: "VK's minister van Financiën verantwoordelijk voor economisch beleid" },
          { en: "Head of the Bank of England", es: "Jefe del Banco de Inglaterra", de: "Leiter der Bank of England", nl: "Hoofd van de Bank of England" },
          { en: "Prime Minister's economic advisor", es: "Asesor económico del Primer Ministro", de: "Wirtschaftsberater des Premierministers", nl: "Economisch adviseur van de Premier" },
          { en: "Currency trader for the government", es: "Comerciante de divisas para el gobierno", de: "Devisenhändler für die Regierung", nl: "Valutahandelaar voor de overheid" }
        ],
        correct: 0,
        explanation: {
          en: "The Chancellor of the Exchequer is the UK's chief finance minister, responsible for economic and financial matters including the budget, taxation, and treasury affairs.",
          es: "El Canciller del Tesoro es el principal ministro de finanzas del Reino Unido, responsable de asuntos económicos y financieros, incluidos el presupuesto, los impuestos y los asuntos del tesoro.",
          de: "Der Schatzkanzler ist der oberste Finanzminister des Vereinigten Königreichs, verantwortlich für wirtschaftliche und finanzielle Angelegenheiten einschließlich Haushalt, Steuern und Schatzamtsangelegenheiten.",
          nl: "De Chancellor of the Exchequer is de belangrijkste minister van Financiën van het VK, verantwoordelijk voor economische en financiële zaken inclusief de begroting, belastingen en schatkistzaken."
        }
      },
      {
        question: {
          en: "What was the 'pound in your pocket' speech about?",
          es: "¿De qué trataba el discurso de 'la libra en tu bolsillo'?",
          de: "Worum ging es in der 'Pfund in Ihrer Tasche' Rede?",
          nl: "Waar ging de 'pound in your pocket' toespraak over?"
        },
        options: [
          { en: "1967 devaluation of the pound", es: "Devaluación de la libra en 1967", de: "Abwertung des Pfunds 1967", nl: "1967 devaluatie van het pond" },
          { en: "Introduction of decimal currency", es: "Introducción de la moneda decimal", de: "Einführung der Dezimalwährung", nl: "Invoering van decimale valuta" },
          { en: "Brexit referendum", es: "Referéndum del Brexit", de: "Brexit-Referendum", nl: "Brexit referendum" },
          { en: "Bank of England independence", es: "Independencia del Banco de Inglaterra", de: "Unabhängigkeit der Bank of England", nl: "Onafhankelijkheid van de Bank of England" }
        ],
        correct: 0,
        explanation: {
          en: "Prime Minister Harold Wilson's 1967 speech assured the public that the devaluation of the pound 'does not mean that the pound here in Britain, in your pocket or purse or in your bank, has been devalued.'",
          es: "El discurso del Primer Ministro Harold Wilson en 1967 aseguró al público que la devaluación de la libra 'no significa que la libra aquí en Gran Bretaña, en tu bolsillo o bolso o en tu banco, haya sido devaluada'.",
          de: "Premierminister Harold Wilsons Rede von 1967 versicherte der Öffentlichkeit, dass die Abwertung des Pfunds 'nicht bedeutet, dass das Pfund hier in Großbritannien, in Ihrer Tasche oder Ihrem Geldbeutel oder in Ihrer Bank, abgewertet wurde'.",
          nl: "Premier Harold Wilson's toespraak uit 1967 verzekerde het publiek dat de devaluatie van het pond 'niet betekent dat het pond hier in Groot-Brittannië, in uw zak of portemonnee of op uw bank, is gedevalueerd'."
        }
      },
      {
        question: {
          en: "When did the Bank of England become independent?",
          es: "¿Cuándo se independizó el Banco de Inglaterra?",
          de: "Wann wurde die Bank of England unabhängig?",
          nl: "Wanneer werd de Bank of England onafhankelijk?"
        },
        options: [
          { en: "1694", es: "1694", de: "1694", nl: "1694" },
          { en: "1946", es: "1946", de: "1946", nl: "1946" },
          { en: "1997", es: "1997", de: "1997", nl: "1997" },
          { en: "2008", es: "2008", de: "2008", nl: "2008" }
        ],
        correct: 2,
        explanation: {
          en: "The Bank of England gained operational independence in 1997 under Tony Blair's government, giving it the power to set interest rates independently of political interference.",
          es: "El Banco de Inglaterra obtuvo independencia operativa en 1997 bajo el gobierno de Tony Blair, dándole el poder de establecer tasas de interés independientemente de la interferencia política.",
          de: "Die Bank of England erhielt 1997 unter der Regierung von Tony Blair operative Unabhängigkeit und damit die Befugnis, Zinssätze unabhängig von politischer Einmischung festzulegen.",
          nl: "De Bank of England kreeg operationele onafhankelijkheid in 1997 onder de regering van Tony Blair, waardoor het de macht kreeg om rentetarieven vast te stellen onafhankelijk van politieke inmenging."
        }
      },
      {
        question: {
          en: "What are gilt-edged securities (gilts)?",
          es: "¿Qué son los valores con borde dorado (gilts)?",
          de: "Was sind Staatsanleihen (Gilts)?",
          nl: "Wat zijn gilt-edged securities (gilts)?"
        },
        options: [
          { en: "UK government bonds", es: "Bonos del gobierno del Reino Unido", de: "Britische Staatsanleihen", nl: "Britse staatsobligaties" },
          { en: "Gold coins", es: "Monedas de oro", de: "Goldmünzen", nl: "Gouden munten" },
          { en: "Premium banknotes", es: "Billetes premium", de: "Premium-Banknoten", nl: "Premium bankbiljetten" },
          { en: "Corporate stocks", es: "Acciones corporativas", de: "Unternehmensaktien", nl: "Bedrijfsaandelen" }
        ],
        correct: 0,
        explanation: {
          en: "Gilts are bonds issued by the UK government. They got their name from the original certificates which had gilded edges. They're considered very safe investments.",
          es: "Los gilts son bonos emitidos por el gobierno del Reino Unido. Obtuvieron su nombre de los certificados originales que tenían bordes dorados. Se consideran inversiones muy seguras.",
          de: "Gilts sind von der britischen Regierung ausgegebene Anleihen. Sie erhielten ihren Namen von den ursprünglichen Zertifikaten mit vergoldeten Rändern. Sie gelten als sehr sichere Anlagen.",
          nl: "Gilts zijn obligaties uitgegeven door de Britse overheid. Ze kregen hun naam van de originele certificaten die vergulde randen hadden. Ze worden beschouwd als zeer veilige investeringen."
        }
      },
      {
        question: {
          en: "What is LIBOR and its connection to the pound?",
          es: "¿Qué es LIBOR y su conexión con la libra?",
          de: "Was ist LIBOR und seine Verbindung zum Pfund?",
          nl: "Wat is LIBOR en de verbinding met het pond?"
        },
        options: [
          { en: "London Interbank Offered Rate for pound lending", es: "Tasa de oferta interbancaria de Londres para préstamos en libras", de: "Londoner Interbanken-Angebotssatz für Pfund-Kredite", nl: "London Interbank Offered Rate voor pond-leningen" },
          { en: "Liberal Organization Rate", es: "Tasa de la Organización Liberal", de: "Liberale Organisationsrate", nl: "Liberale Organisatie Tarief" },
          { en: "Local Interest Bank Order", es: "Orden Bancaria de Interés Local", de: "Lokale Zinsbank-Order", nl: "Lokale Rente Bank Order" },
          { en: "Limited Bond Rate", es: "Tasa de Bonos Limitada", de: "Begrenzte Anleihenrate", nl: "Beperkte Obligatierente" }
        ],
        correct: 0,
        explanation: {
          en: "LIBOR (London Interbank Offered Rate) was a benchmark interest rate at which banks lent to each other, including in pounds sterling. It was phased out and replaced by SONIA in 2021.",
          es: "LIBOR (Tasa de Oferta Interbancaria de Londres) era una tasa de interés de referencia a la que los bancos se prestaban entre sí, incluyendo en libras esterlinas. Fue eliminada gradualmente y reemplazada por SONIA en 2021.",
          de: "LIBOR (London Interbank Offered Rate) war ein Referenzzinssatz, zu dem sich Banken untereinander Geld liehen, auch in Pfund Sterling. Er wurde schrittweise abgeschafft und 2021 durch SONIA ersetzt.",
          nl: "LIBOR (London Interbank Offered Rate) was een benchmark rentevoet waartegen banken aan elkaar leenden, inclusief in pond sterling. Het werd uitgefaseerd en vervangen door SONIA in 2021."
        }
      },
      {
        question: {
          en: "What is the significance of Threadneedle Street?",
          es: "¿Cuál es la importancia de Threadneedle Street?",
          de: "Was ist die Bedeutung der Threadneedle Street?",
          nl: "Wat is het belang van Threadneedle Street?"
        },
        options: [
          { en: "Location of the Bank of England", es: "Ubicación del Banco de Inglaterra", de: "Standort der Bank of England", nl: "Locatie van de Bank of England" },
          { en: "Main shopping district", es: "Principal distrito comercial", de: "Haupteinkaufsviertel", nl: "Belangrijkste winkelgebied" },
          { en: "Government headquarters", es: "Sede del gobierno", de: "Regierungssitz", nl: "Regeringshoofdkwartier" },
          { en: "Stock exchange location", es: "Ubicación de la bolsa de valores", de: "Standort der Börse", nl: "Locatie van de beurs" }
        ],
        correct: 0,
        explanation: {
          en: "Threadneedle Street is the location of the Bank of England's headquarters in the City of London. The Bank is often referred to as 'The Old Lady of Threadneedle Street.'",
          es: "Threadneedle Street es la ubicación de la sede del Banco de Inglaterra en la City de Londres. El Banco a menudo se conoce como 'La Vieja Dama de Threadneedle Street'.",
          de: "Die Threadneedle Street ist der Standort der Zentrale der Bank of England in der City of London. Die Bank wird oft als 'Die alte Dame von der Threadneedle Street' bezeichnet.",
          nl: "Threadneedle Street is de locatie van het hoofdkantoor van de Bank of England in de City of London. De Bank wordt vaak 'The Old Lady of Threadneedle Street' genoemd."
        }
      },
      {
        question: {
          en: "What is the Monetary Policy Committee (MPC)?",
          es: "¿Qué es el Comité de Política Monetaria (MPC)?",
          de: "Was ist das Monetary Policy Committee (MPC)?",
          nl: "Wat is het Monetary Policy Committee (MPC)?"
        },
        options: [
          { en: "Bank of England committee that sets interest rates", es: "Comité del Banco de Inglaterra que establece las tasas de interés", de: "Komitee der Bank of England, das Zinssätze festlegt", nl: "Bank of England commissie die rentetarieven vaststelt" },
          { en: "Government budget committee", es: "Comité de presupuesto del gobierno", de: "Regierungsbudgetausschuss", nl: "Overheidsbegrotingscommissie" },
          { en: "Currency design committee", es: "Comité de diseño de moneda", de: "Währungsdesign-Komitee", nl: "Valuta ontwerpcommissie" },
          { en: "Trade policy group", es: "Grupo de política comercial", de: "Handelspolitische Gruppe", nl: "Handelsbeleid groep" }
        ],
        correct: 0,
        explanation: {
          en: "The Monetary Policy Committee is a committee of the Bank of England that meets monthly to decide the official interest rate in the UK to meet the government's inflation target.",
          es: "El Comité de Política Monetaria es un comité del Banco de Inglaterra que se reúne mensualmente para decidir la tasa de interés oficial en el Reino Unido para cumplir con el objetivo de inflación del gobierno.",
          de: "Das Monetary Policy Committee ist ein Ausschuss der Bank of England, der sich monatlich trifft, um den offiziellen Zinssatz im Vereinigten Königreich festzulegen, um das Inflationsziel der Regierung zu erreichen.",
          nl: "Het Monetary Policy Committee is een commissie van de Bank of England die maandelijks bijeenkomt om het officiële rentetarief in het VK vast te stellen om het inflatiedoel van de regering te halen."
        }
      },
      {
        question: {
          en: "What currency did the pound replace in 1971 during decimalization?",
          es: "¿Qué moneda reemplazó la libra en 1971 durante la decimalización?",
          de: "Welche Währung ersetzte das Pfund 1971 während der Dezimalisierung?",
          nl: "Welke valuta verving het pond in 1971 tijdens decimalisatie?"
        },
        options: [
          { en: "The old £sd system (pounds, shillings, pence)", es: "El antiguo sistema £sd (libras, chelines, peniques)", de: "Das alte £sd-System (Pfund, Schilling, Pence)", nl: "Het oude £sd systeem (ponden, shillings, pence)" },
          { en: "The gold standard", es: "El patrón oro", de: "Der Goldstandard", nl: "De goudstandaard" },
          { en: "The Euro", es: "El Euro", de: "Der Euro", nl: "De Euro" },
          { en: "The dollar", es: "El dólar", de: "Der Dollar", nl: "De dollar" }
        ],
        correct: 0,
        explanation: {
          en: "Decimalization in 1971 replaced the complex £sd system (where £1 = 20 shillings = 240 pence) with the simpler decimal system (£1 = 100 pence).",
          es: "La decimalización en 1971 reemplazó el complejo sistema £sd (donde £1 = 20 chelines = 240 peniques) con el sistema decimal más simple (£1 = 100 peniques).",
          de: "Die Dezimalisierung 1971 ersetzte das komplexe £sd-System (wo £1 = 20 Schilling = 240 Pence) durch das einfachere Dezimalsystem (£1 = 100 Pence).",
          nl: "Decimalisatie in 1971 verving het complexe £sd systeem (waar £1 = 20 shillings = 240 pence) met het eenvoudigere decimale systeem (£1 = 100 pence)."
        }
      },
      {
        question: {
          en: "What are Scottish banknotes?",
          es: "¿Qué son los billetes escoceses?",
          de: "Was sind schottische Banknoten?",
          nl: "Wat zijn Schotse bankbiljetten?"
        },
        options: [
          { en: "Pound notes issued by Scottish banks, legal currency in UK", es: "Billetes de libra emitidos por bancos escoceses, moneda legal en Reino Unido", de: "Von schottischen Banken ausgegebene Pfundnoten, gesetzliches Zahlungsmittel im UK", nl: "Pondbiljetten uitgegeven door Schotse banken, legale valuta in VK" },
          { en: "A separate Scottish currency", es: "Una moneda escocesa separada", de: "Eine separate schottische Währung", nl: "Een aparte Schotse valuta" },
          { en: "Commemorative notes only", es: "Solo billetes conmemorativos", de: "Nur Gedenknoten", nl: "Alleen herdenkingsbiljetten" },
          { en: "Fake currency", es: "Moneda falsa", de: "Falsche Währung", nl: "Valse valuta" }
        ],
        correct: 0,
        explanation: {
          en: "Three Scottish banks (Bank of Scotland, Royal Bank of Scotland, Clydesdale Bank) issue their own pound sterling banknotes, which are legal currency throughout the UK.",
          es: "Tres bancos escoceses (Bank of Scotland, Royal Bank of Scotland, Clydesdale Bank) emiten sus propios billetes de libra esterlina, que son moneda legal en todo el Reino Unido.",
          de: "Drei schottische Banken (Bank of Scotland, Royal Bank of Scotland, Clydesdale Bank) geben ihre eigenen Pfund Sterling Banknoten aus, die im gesamten Vereinigten Königreich gesetzliches Zahlungsmittel sind.",
          nl: "Drie Schotse banken (Bank of Scotland, Royal Bank of Scotland, Clydesdale Bank) geven hun eigen pond sterling bankbiljetten uit, die legale valuta zijn in het hele VK."
        }
      },
      {
        question: {
          en: "What is the 'City of London' in relation to the pound?",
          es: "¿Qué es la 'City de Londres' en relación con la libra?",
          de: "Was ist die 'City of London' in Bezug auf das Pfund?",
          nl: "Wat is de 'City of London' in relatie tot het pond?"
        },
        options: [
          { en: "Major global financial center for pound trading", es: "Centro financiero global importante para el comercio de libras", de: "Wichtiges globales Finanzzentrum für Pfund-Handel", nl: "Belangrijk wereldwijd financieel centrum voor pondhandel" },
          { en: "Tourist district", es: "Distrito turístico", de: "Touristenviertel", nl: "Toeristisch district" },
          { en: "Government area", es: "Área gubernamental", de: "Regierungsbereich", nl: "Overheidsgebied" },
          { en: "Manufacturing center", es: "Centro de manufactura", de: "Fertigungszentrum", nl: "Productiecentrum" }
        ],
        correct: 0,
        explanation: {
          en: "The City of London (the Square Mile) is one of the world's leading financial centers and the primary hub for foreign exchange trading, including the pound sterling.",
          es: "La City de Londres (la Milla Cuadrada) es uno de los principales centros financieros del mundo y el centro principal para el comercio de divisas, incluida la libra esterlina.",
          de: "Die City of London (die Square Mile) ist eines der weltweit führenden Finanzzentren und das primäre Zentrum für den Devisenhandel, einschließlich des Pfund Sterling.",
          nl: "De City of London (de Square Mile) is een van 's werelds belangrijkste financiële centra en het primaire centrum voor valutahandel, inclusief het pond sterling."
        }
      },
      {
        question: {
          en: "What is quantitative easing and when did the UK use it?",
          es: "¿Qué es la flexibilización cuantitativa y cuándo la usó el Reino Unido?",
          de: "Was ist quantitative Lockerung und wann hat das UK sie verwendet?",
          nl: "Wat is kwantitatieve versoepeling en wanneer gebruikte het VK het?"
        },
        options: [
          { en: "Creating money to buy government bonds, used after 2008 crisis", es: "Crear dinero para comprar bonos del gobierno, usado después de la crisis de 2008", de: "Geldschöpfung zum Kauf von Staatsanleihen, verwendet nach der Krise 2008", nl: "Geld creëren om staatsobligaties te kopen, gebruikt na de crisis van 2008" },
          { en: "Reducing taxes", es: "Reducir impuestos", de: "Steuern senken", nl: "Belastingen verlagen" },
          { en: "Increasing government spending", es: "Aumentar el gasto gubernamental", de: "Staatsausgaben erhöhen", nl: "Overheidsuitgaven verhogen" },
          { en: "Fixing exchange rates", es: "Fijar tipos de cambio", de: "Wechselkurse fixieren", nl: "Wisselkoersen vaststellen" }
        ],
        correct: 0,
        explanation: {
          en: "Quantitative easing involves the Bank of England creating new money electronically to buy government bonds and other securities, injecting money into the economy. It was extensively used after the 2008 financial crisis.",
          es: "La flexibilización cuantitativa involucra al Banco de Inglaterra creando dinero nuevo electrónicamente para comprar bonos del gobierno y otros valores, inyectando dinero en la economía. Se usó extensivamente después de la crisis financiera de 2008.",
          de: "Quantitative Lockerung bedeutet, dass die Bank of England elektronisch neues Geld schafft, um Staatsanleihen und andere Wertpapiere zu kaufen und Geld in die Wirtschaft zu pumpen. Sie wurde nach der Finanzkrise 2008 ausgiebig eingesetzt.",
          nl: "Kwantitatieve versoepeling houdt in dat de Bank of England elektronisch nieuw geld creëert om staatsobligaties en andere effecten te kopen, waardoor geld in de economie wordt geïnjecteerd. Het werd uitgebreid gebruikt na de financiële crisis van 2008."
        }
      },
      {
        question: {
          en: "What is the current UK inflation target?",
          es: "¿Cuál es el objetivo de inflación actual del Reino Unido?",
          de: "Was ist das aktuelle Inflationsziel des UK?",
          nl: "Wat is het huidige inflatiedoel van het VK?"
        },
        options: [
          { en: "2% per year", es: "2% por año", de: "2% pro Jahr", nl: "2% per jaar" },
          { en: "0% per year", es: "0% por año", de: "0% pro Jahr", nl: "0% per jaar" },
          { en: "5% per year", es: "5% por año", de: "5% pro Jahr", nl: "5% per jaar" },
          { en: "10% per year", es: "10% por año", de: "10% pro Jahr", nl: "10% per jaar" }
        ],
        correct: 0,
        explanation: {
          en: "The UK government sets the Bank of England an inflation target of 2% per year, measured by the Consumer Price Index (CPI). This helps maintain price stability.",
          es: "El gobierno del Reino Unido establece al Banco de Inglaterra un objetivo de inflación del 2% anual, medido por el Índice de Precios al Consumidor (IPC). Esto ayuda a mantener la estabilidad de precios.",
          de: "Die britische Regierung setzt der Bank of England ein Inflationsziel von 2% pro Jahr, gemessen am Verbraucherpreisindex (VPI). Dies hilft, Preisstabilität zu gewährleisten.",
          nl: "De Britse regering stelt de Bank of England een inflatiedoel van 2% per jaar, gemeten door de Consumentenprijsindex (CPI). Dit helpt prijsstabiliteit te handhaven."
        }
      },
      {
        question: {
          en: "What is the pound's nickname in forex trading?",
          es: "¿Cuál es el apodo de la libra en el comercio de divisas?",
          de: "Was ist der Spitzname des Pfunds im Devisenhandel?",
          nl: "Wat is de bijnaam van het pond in forexhandel?"
        },
        options: [
          { en: "Cable (from transatlantic cable)", es: "Cable (del cable transatlántico)", de: "Cable (vom transatlantischen Kabel)", nl: "Cable (van transatlantische kabel)" },
          { en: "Sterling", es: "Esterlina", de: "Sterling", nl: "Sterling" },
          { en: "Queen", es: "Reina", de: "Königin", nl: "Koningin" },
          { en: "British", es: "Británico", de: "Britisch", nl: "Brits" }
        ],
        correct: 0,
        explanation: {
          en: "The GBP/USD exchange rate is nicknamed 'Cable' in forex markets, referring to the transatlantic telegraph cables that were used to transmit exchange rates between London and New York in the 1800s.",
          es: "El tipo de cambio GBP/USD se apoda 'Cable' en los mercados de divisas, refiriéndose a los cables telegráficos transatlánticos que se usaban para transmitir tipos de cambio entre Londres y Nueva York en el siglo XIX.",
          de: "Der GBP/USD-Wechselkurs wird auf den Devisenmärkten als 'Cable' bezeichnet, was sich auf die transatlantischen Telegrafenkabel bezieht, die im 19. Jahrhundert zur Übertragung von Wechselkursen zwischen London und New York verwendet wurden.",
          nl: "De GBP/USD wisselkoers wordt 'Cable' genoemd op forexmarkten, verwijzend naar de trans-Atlantische telegraafkabels die werden gebruikt om wisselkoersen tussen Londen en New York door te geven in de 19e eeuw."
        }
      },
      {
        question: {
          en: "What happened to the pound during the 2016 Brexit vote?",
          es: "¿Qué le pasó a la libra durante el voto del Brexit de 2016?",
          de: "Was passierte mit dem Pfund während der Brexit-Abstimmung 2016?",
          nl: "Wat gebeurde er met het pond tijdens de Brexit-stemming van 2016?"
        },
        options: [
          { en: "It fell sharply against major currencies", es: "Cayó bruscamente frente a las principales monedas", de: "Es fiel stark gegenüber wichtigen Währungen", nl: "Het daalde scherp tegen belangrijke valuta's" },
          { en: "It rose to record highs", es: "Subió a máximos históricos", de: "Es stieg auf Rekordhöhen", nl: "Het steeg naar recordhoogtes" },
          { en: "It remained stable", es: "Se mantuvo estable", de: "Es blieb stabil", nl: "Het bleef stabiel" },
          { en: "It was replaced by the Euro", es: "Fue reemplazado por el Euro", de: "Es wurde durch den Euro ersetzt", nl: "Het werd vervangen door de Euro" }
        ],
        correct: 0,
        explanation: {
          en: "The pound fell sharply after the Brexit referendum result on June 23, 2016, dropping about 10% against the US dollar and reaching 31-year lows as markets reacted to the uncertainty.",
          es: "La libra cayó bruscamente después del resultado del referéndum del Brexit el 23 de junio de 2016, cayendo aproximadamente un 10% frente al dólar estadounidense y alcanzando mínimos de 31 años mientras los mercados reaccionaban a la incertidumbre.",
          de: "Das Pfund fiel nach dem Brexit-Referendum am 23. Juni 2016 stark, verlor etwa 10% gegenüber dem US-Dollar und erreichte 31-Jahres-Tiefs, als die Märkte auf die Unsicherheit reagierten.",
          nl: "Het pond daalde scherp na het Brexit-referendum resultaat op 23 juni 2016, met ongeveer 10% dalend tegen de Amerikaanse dollar en 31-jarige dieptepunten bereikend terwijl markten reageerden op de onzekerheid."
        }
      },
      {
        question: {
          en: "What is the Sterling Area?",
          es: "¿Qué es el Área de la Libra Esterlina?",
          de: "Was ist das Sterling-Gebiet?",
          nl: "Wat is het Sterling Gebied?"
        },
        options: [
          { en: "Historical group of countries that pegged currencies to the pound", es: "Grupo histórico de países que vincularon monedas a la libra", de: "Historische Gruppe von Ländern, die Währungen an das Pfund koppelten", nl: "Historische groep landen die valuta's aan het pond koppelden" },
          { en: "London's financial district", es: "El distrito financiero de Londres", de: "Londons Finanzbezirk", nl: "Londen's financiële district" },
          { en: "UK manufacturing region", es: "Región manufacturera del Reino Unido", de: "Fertigungsregion des UK", nl: "VK productiegebied" },
          { en: "Scottish currency zone", es: "Zona monetaria escocesa", de: "Schottische Währungszone", nl: "Schotse valutagebied" }
        ],
        correct: 0,
        explanation: {
          en: "The Sterling Area was a group of countries (mostly British Empire/Commonwealth) that pegged their currencies to the pound sterling and held their reserves in pounds, lasting from the 1930s to 1970s.",
          es: "El Área de la Libra Esterlina era un grupo de países (principalmente Imperio Británico/Commonwealth) que vincularon sus monedas a la libra esterlina y mantuvieron sus reservas en libras, durando desde los años 1930 hasta los 1970.",
          de: "Das Sterling-Gebiet war eine Gruppe von Ländern (hauptsächlich Britisches Empire/Commonwealth), die ihre Währungen an das Pfund Sterling koppelten und ihre Reserven in Pfund hielten, von den 1930ern bis zu den 1970ern.",
          nl: "Het Sterling Gebied was een groep landen (voornamelijk Brits Imperium/Gemenebest) die hun valuta's aan het pond sterling koppelden en hun reserves in ponden hielden, durend van de jaren 1930 tot 1970."
        }
      },
      {
        question: {
          en: "What are the denominations of current UK coins?",
          es: "¿Cuáles son las denominaciones de las monedas actuales del Reino Unido?",
          de: "Was sind die Stückelungen der aktuellen britischen Münzen?",
          nl: "Wat zijn de denominaties van huidige Britse munten?"
        },
        options: [
          { en: "1p, 2p, 5p, 10p, 20p, 50p, £1, £2", es: "1p, 2p, 5p, 10p, 20p, 50p, £1, £2", de: "1p, 2p, 5p, 10p, 20p, 50p, £1, £2", nl: "1p, 2p, 5p, 10p, 20p, 50p, £1, £2" },
          { en: "1p, 5p, 10p, 25p, 50p, £1", es: "1p, 5p, 10p, 25p, 50p, £1", de: "1p, 5p, 10p, 25p, 50p, £1", nl: "1p, 5p, 10p, 25p, 50p, £1" },
          { en: "5p, 10p, 50p, £1, £5", es: "5p, 10p, 50p, £1, £5", de: "5p, 10p, 50p, £1, £5", nl: "5p, 10p, 50p, £1, £5" },
          { en: "1p, 2p, 5p, 10p, 50p, £1", es: "1p, 2p, 5p, 10p, 50p, £1", de: "1p, 2p, 5p, 10p, 50p, £1", nl: "1p, 2p, 5p, 10p, 50p, £1" }
        ],
        correct: 0,
        explanation: {
          en: "Current UK coins in regular circulation are: 1p, 2p, 5p, 10p, 20p, 50p, £1, and £2. Each has distinct size, shape, and design features.",
          es: "Las monedas actuales del Reino Unido en circulación regular son: 1p, 2p, 5p, 10p, 20p, 50p, £1 y £2. Cada una tiene características distintivas de tamaño, forma y diseño.",
          de: "Aktuelle britische Münzen im regulären Umlauf sind: 1p, 2p, 5p, 10p, 20p, 50p, £1 und £2. Jede hat unterschiedliche Größe, Form und Designmerkmale.",
          nl: "Huidige Britse munten in reguliere circulatie zijn: 1p, 2p, 5p, 10p, 20p, 50p, £1 en £2. Elk heeft onderscheidende grootte, vorm en ontwerpkenmerken."
        }
      },
      {
        question: {
          en: "What is SONIA and how does it relate to the pound?",
          es: "¿Qué es SONIA y cómo se relaciona con la libra?",
          de: "Was ist SONIA und wie bezieht es sich auf das Pfund?",
          nl: "Wat is SONIA en hoe verhoudt het zich tot het pond?"
        },
        options: [
          { en: "Sterling Overnight Index Average - replacement for LIBOR", es: "Promedio del Índice Nocturno de Esterlinas - reemplazo de LIBOR", de: "Sterling Overnight Index Average - Ersatz für LIBOR", nl: "Sterling Overnight Index Average - vervanging voor LIBOR" },
          { en: "Scottish Online Investment Account", es: "Cuenta de Inversión Online Escocesa", de: "Schottisches Online-Investmentkonto", nl: "Schotse Online Beleggingsrekening" },
          { en: "Sterling Official National Index", es: "Índice Nacional Oficial de Esterlinas", de: "Sterling Offizieller Nationalindex", nl: "Sterling Officiële Nationale Index" },
          { en: "Southern Investment Authority", es: "Autoridad de Inversión del Sur", de: "Südliche Investitionsbehörde", nl: "Zuidelijke Investeringsautoriteit" }
        ],
        correct: 0,
        explanation: {
          en: "SONIA (Sterling Overnight Index Average) is the interest rate benchmark that replaced LIBOR for pound sterling transactions in 2021. It reflects the average interest rate banks pay for unsecured overnight loans.",
          es: "SONIA (Promedio del Índice Nocturno de Esterlinas) es el punto de referencia de tasas de interés que reemplazó a LIBOR para transacciones en libras esterlinas en 2021. Refleja la tasa de interés promedio que los bancos pagan por préstamos no garantizados overnight.",
          de: "SONIA (Sterling Overnight Index Average) ist der Zinssatz-Benchmark, der 2021 LIBOR für Pfund Sterling-Transaktionen ersetzte. Er spiegelt den durchschnittlichen Zinssatz wider, den Banken für unbesicherte Overnight-Kredite zahlen.",
          nl: "SONIA (Sterling Overnight Index Average) is de rentevoet benchmark die LIBOR verving voor pond sterling transacties in 2021. Het weerspiegelt de gemiddelde rente die banken betalen voor ongedekte overnight leningen."
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