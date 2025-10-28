// Quiz Level 1: Currencies - Dollar
(function() {
  const level1 = {
    name: {
      en: "US Dollar - Beginner",
      es: "Dólar Estadounidense - Principiante",
      de: "US-Dollar - Anfänger",
      nl: "Amerikaanse Dollar - Beginner"
    },
    questions: [
      {
        question: {
          en: "What is the symbol for the US Dollar?",
          es: "¿Cuál es el símbolo del dólar estadounidense?",
          de: "Was ist das Symbol für den US-Dollar?",
          nl: "Wat is het symbool voor de Amerikaanse dollar?"
        },
        options: [
          { en: "$", es: "$", de: "$", nl: "$" },
          { en: "€", es: "€", de: "€", nl: "€" },
          { en: "£", es: "£", de: "£", nl: "£" },
          { en: "¥", es: "¥", de: "¥", nl: "¥" }
        ],
        correct: 0,
        explanation: {
          en: "The US Dollar is represented by the symbol '$'. This symbol is used internationally to denote the American currency and is one of the most recognized currency symbols worldwide.",
          es: "El dólar estadounidense se representa con el símbolo '$'. Este símbolo se usa internacionalmente para denotar la moneda americana y es uno de los símbolos de moneda más reconocidos mundialmente.",
          de: "Der US-Dollar wird durch das Symbol '$' dargestellt. Dieses Symbol wird international zur Bezeichnung der amerikanischen Währung verwendet und ist eines der weltweit am meisten erkannten Währungssymbole.",
          nl: "De Amerikaanse dollar wordt weergegeven door het symbool '$'. Dit symbool wordt internationaal gebruikt om de Amerikaanse valuta aan te duiden en is een van de meest erkende valutasymbolen wereldwijd."
        }
      },
      {
        question: {
          en: "What is the three-letter currency code for the US Dollar?",
          es: "¿Cuál es el código de moneda de tres letras para el dólar estadounidense?",
          de: "Was ist der dreistellige Währungscode für den US-Dollar?",
          nl: "Wat is de drieletterige valutacode voor de Amerikaanse dollar?"
        },
        options: [
          { en: "USD", es: "USD", de: "USD", nl: "USD" },
          { en: "UNI", es: "UNI", de: "UNI", nl: "UNI" },
          { en: "USA", es: "USA", de: "USA", nl: "USA" },
          { en: "DOL", es: "DOL", de: "DOL", nl: "DOL" }
        ],
        correct: 0,
        explanation: {
          en: "USD stands for 'United States Dollar.' This is the official three-letter ISO currency code used in international finance and trading for the US Dollar.",
          es: "USD significa 'Dólar de Estados Unidos'. Este es el código oficial de moneda ISO de tres letras utilizado en finanzas y comercio internacional para el dólar estadounidense.",
          de: "USD steht für 'United States Dollar'. Dies ist der offizielle dreistellige ISO-Währungscode, der im internationalen Finanzwesen und Handel für den US-Dollar verwendet wird.",
          nl: "USD staat voor 'United States Dollar'. Dit is de officiële drieletterige ISO-valutacode die wordt gebruikt in internationale financiën en handel voor de Amerikaanse dollar."
        }
      },
      {
        question: {
          en: "How many cents are in one US Dollar?",
          es: "¿Cuántos centavos hay en un dólar estadounidense?",
          de: "Wie viele Cents sind in einem US-Dollar?",
          nl: "Hoeveel cent zitten er in één Amerikaanse dollar?"
        },
        options: [
          { en: "50", es: "50", de: "50", nl: "50" },
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "120", es: "120", de: "120", nl: "120" },
          { en: "200", es: "200", de: "200", nl: "200" }
        ],
        correct: 1,
        explanation: {
          en: "There are 100 cents in one US Dollar. This decimal system makes calculations and conversions straightforward, as each cent represents 1/100th of a dollar.",
          es: "Hay 100 centavos en un dólar estadounidense. Este sistema decimal hace que los cálculos y conversiones sean sencillos, ya que cada centavo representa 1/100 de un dólar.",
          de: "Es gibt 100 Cents in einem US-Dollar. Dieses Dezimalsystem macht Berechnungen und Umrechnungen einfach, da jeder Cent 1/100 eines Dollars darstellt.",
          nl: "Er zitten 100 cent in één Amerikaanse dollar. Dit decimale systeem maakt berekeningen en omrekeningen eenvoudig, omdat elke cent 1/100ste van een dollar vertegenwoordigt."
        }
      },
      {
        question: {
          en: "Which institution manages the US Dollar's monetary policy?",
          es: "¿Qué institución gestiona la política monetaria del dólar estadounidense?",
          de: "Welche Institution verwaltet die Geldpolitik des US-Dollars?",
          nl: "Welke instelling beheert het monetaire beleid van de Amerikaanse dollar?"
        },
        options: [
          { en: "US Treasury", es: "Tesoro de EE.UU.", de: "US-Finanzministerium", nl: "Amerikaanse Schatkist" },
          { en: "Federal Reserve", es: "Reserva Federal", de: "Federal Reserve", nl: "Federal Reserve" },
          { en: "World Bank", es: "Banco Mundial", de: "Weltbank", nl: "Wereldbank" },
          { en: "IMF", es: "FMI", de: "IWF", nl: "IMF" }
        ],
        correct: 1,
        explanation: {
          en: "The Federal Reserve (Fed) is the central bank of the United States and manages the country's monetary policy, including setting interest rates and controlling money supply.",
          es: "La Reserva Federal (Fed) es el banco central de Estados Unidos y gestiona la política monetaria del país, incluyendo el establecimiento de tasas de interés y el control de la oferta monetaria.",
          de: "Die Federal Reserve (Fed) ist die Zentralbank der Vereinigten Staaten und verwaltet die Geldpolitik des Landes, einschließlich der Festsetzung von Zinssätzen und der Kontrolle der Geldmenge.",
          nl: "De Federal Reserve (Fed) is de centrale bank van de Verenigde Staten en beheert het monetaire beleid van het land, inclusief het vaststellen van rente en het controleren van de geldvoorraad."
        }
      },
      {
        question: {
          en: "What is printed on all US Dollar bills?",
          es: "¿Qué está impreso en todos los billetes de dólar estadounidense?",
          de: "Was ist auf allen US-Dollar-Scheinen gedruckt?",
          nl: "Wat staat er gedrukt op alle Amerikaanse dollarbiljetten?"
        },
        options: [
          { en: "Federal Reserve Note", es: "Nota de la Reserva Federal", de: "Federal Reserve Note", nl: "Federal Reserve Note" },
          { en: "US Treasury Bond", es: "Bono del Tesoro de EE.UU.", de: "US-Staatsanleihe", nl: "Amerikaanse Staatsobliqatie" },
          { en: "American Currency", es: "Moneda Americana", de: "Amerikanische Währung", nl: "Amerikaanse Valuta" },
          { en: "United States Money", es: "Dinero de Estados Unidos", de: "Geld der Vereinigten Staaten", nl: "Geld van de Verenigde Staten" }
        ],
        correct: 0,
        explanation: {
          en: "All US Dollar bills are printed with 'Federal Reserve Note' at the top, indicating they are issued by the Federal Reserve System rather than being backed by gold or silver.",
          es: "Todos los billetes de dólar estadounidense están impresos con 'Nota de la Reserva Federal' en la parte superior, indicando que son emitidos por el Sistema de la Reserva Federal en lugar de estar respaldados por oro o plata.",
          de: "Alle US-Dollar-Scheine sind mit 'Federal Reserve Note' oben gedruckt, was anzeigt, dass sie vom Federal Reserve System ausgegeben werden und nicht durch Gold oder Silber gedeckt sind.",
          nl: "Alle Amerikaanse dollarbiljetten zijn gedrukt met 'Federal Reserve Note' bovenaan, wat aangeeft dat ze worden uitgegeven door het Federal Reserve System en niet gedekt zijn door goud of zilver."
        }
      },
      {
        question: {
          en: "Which US coin is worth 25 cents?",
          es: "¿Qué moneda estadounidense vale 25 centavos?",
          de: "Welche US-Münze ist 25 Cents wert?",
          nl: "Welke Amerikaanse munt is 25 cent waard?"
        },
        options: [
          { en: "Dime", es: "Dime", de: "Dime", nl: "Dime" },
          { en: "Nickel", es: "Nickel", de: "Nickel", nl: "Nickel" },
          { en: "Quarter", es: "Quarter", de: "Quarter", nl: "Quarter" },
          { en: "Penny", es: "Penny", de: "Penny", nl: "Penny" }
        ],
        correct: 2,
        explanation: {
          en: "A Quarter is worth 25 cents, or one-fourth of a dollar. It's the largest commonly circulated US coin and features various state and national park designs on the reverse side.",
          es: "Un Quarter vale 25 centavos, o una cuarta parte de un dólar. Es la moneda estadounidense más grande comúnmente circulada y presenta varios diseños de estados y parques nacionales en el reverso.",
          de: "Ein Quarter ist 25 Cents wert, oder ein Viertel eines Dollars. Es ist die größte häufig im Umlauf befindliche US-Münze und zeigt verschiedene Staats- und Nationalpark-Designs auf der Rückseite.",
          nl: "Een Quarter is 25 cent waard, of een kwart van een dollar. Het is de grootste algemeen circulerende Amerikaanse munt en toont verschillende staat- en nationaal park-ontwerpen op de achterkant."
        }
      },
      {
        question: {
          en: "When did the US abandon the gold standard?",
          es: "¿Cuándo abandonó Estados Unidos el patrón oro?",
          de: "Wann haben die USA den Goldstandard aufgegeben?",
          nl: "Wanneer hebben de VS de goudstandaard verlaten?"
        },
        options: [
          { en: "1933", es: "1933", de: "1933", nl: "1933" },
          { en: "1944", es: "1944", de: "1944", nl: "1944" },
          { en: "1971", es: "1971", de: "1971", nl: "1971" },
          { en: "1979", es: "1979", de: "1979", nl: "1979" }
        ],
        correct: 2,
        explanation: {
          en: "President Nixon ended the Bretton Woods system in 1971, effectively ending the US Dollar's convertibility to gold and establishing the modern floating exchange rate system.",
          es: "El presidente Nixon terminó el sistema de Bretton Woods en 1971, efectivamente terminando la convertibilidad del dólar estadounidense al oro y estableciendo el sistema moderno de tipo de cambio flotante.",
          de: "Präsident Nixon beendete 1971 das Bretton-Woods-System und beendete damit effektiv die Konvertibilität des US-Dollars zu Gold und etablierte das moderne flexible Wechselkurssystem.",
          nl: "President Nixon beëindigde het Bretton Woods-systeem in 1971, waarmee effectief de converteerbaarheid van de Amerikaanse dollar naar goud werd beëindigd en het moderne zwevende wisselkoerssysteem werd gevestigd."
        }
      },
      {
        question: {
          en: "What appears on the front of a one-dollar bill?",
          es: "¿Qué aparece en el frente de un billete de un dólar?",
          de: "Was erscheint auf der Vorderseite eines Ein-Dollar-Scheins?",
          nl: "Wat verschijnt op de voorkant van een eendollarbiljet?"
        },
        options: [
          { en: "Abraham Lincoln", es: "Abraham Lincoln", de: "Abraham Lincoln", nl: "Abraham Lincoln" },
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" }
        ],
        correct: 1,
        explanation: {
          en: "George Washington, the first President of the United States, appears on the front of the one-dollar bill. His portrait has been featured on this denomination since 1869.",
          es: "George Washington, el primer presidente de Estados Unidos, aparece en el frente del billete de un dólar. Su retrato ha estado presente en esta denominación desde 1869.",
          de: "George Washington, der erste Präsident der Vereinigten Staaten, erscheint auf der Vorderseite des Ein-Dollar-Scheins. Sein Porträt ist seit 1869 auf dieser Denomination zu sehen.",
          nl: "George Washington, de eerste president van de Verenigde Staten, verschijnt op de voorkant van het eendollarbiljet. Zijn portret is sinds 1869 op deze denominatie te zien."
        }
      },
      {
        question: {
          en: "Which international system established the US Dollar as the world's primary reserve currency?",
          es: "¿Qué sistema internacional estableció el dólar estadounidense como la principal moneda de reserva mundial?",
          de: "Welches internationale System etablierte den US-Dollar als primäre Reservewährung der Welt?",
          nl: "Welk internationaal systeem vestigde de Amerikaanse dollar als 's werelds primaire reservevaluta?"
        },
        options: [
          { en: "Gold Standard", es: "Patrón Oro", de: "Goldstandard", nl: "Goudstandaard" },
          { en: "Bretton Woods", es: "Bretton Woods", de: "Bretton Woods", nl: "Bretton Woods" },
          { en: "Plaza Accord", es: "Acuerdo Plaza", de: "Plaza-Abkommen", nl: "Plaza Akkoord" },
          { en: "Maastricht Treaty", es: "Tratado de Maastricht", de: "Vertrag von Maastricht", nl: "Verdrag van Maastricht" }
        ],
        correct: 1,
        explanation: {
          en: "The Bretton Woods Agreement of 1944 established the US Dollar as the world's primary reserve currency, pegged to gold at $35 per ounce, with other currencies pegged to the dollar.",
          es: "El Acuerdo de Bretton Woods de 1944 estableció el dólar estadounidense como la principal moneda de reserva mundial, vinculado al oro a $35 por onza, con otras monedas vinculadas al dólar.",
          de: "Das Bretton-Woods-Abkommen von 1944 etablierte den US-Dollar als primäre Reservewährung der Welt, gekoppelt an Gold zu $35 pro Unze, mit anderen Währungen, die an den Dollar gekoppelt waren.",
          nl: "Het Bretton Woods Akkoord van 1944 vestigde de Amerikaanse dollar als 's werelds primaire reservevaluta, gekoppeld aan goud tegen $35 per ons, met andere valuta's gekoppeld aan de dollar."
        }
      },
      {
        question: {
          en: "What is the largest denomination US bill currently in production?",
          es: "¿Cuál es la denominación más grande de billete estadounidense actualmente en producción?",
          de: "Was ist die größte Denomination von US-Scheinen, die derzeit produziert wird?",
          nl: "Wat is de grootste denominatie van Amerikaanse biljetten die momenteel in productie is?"
        },
        options: [
          { en: "$50", es: "$50", de: "$50", nl: "$50" },
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$500", es: "$500", de: "$500", nl: "$500" },
          { en: "$1000", es: "$1000", de: "$1000", nl: "$1000" }
        ],
        correct: 1,
        explanation: {
          en: "The $100 bill is the largest denomination currently printed by the Bureau of Engraving and Printing. Higher denominations like $500 and $1000 bills were discontinued in 1969.",
          es: "El billete de $100 es la denominación más grande actualmente impresa por la Oficina de Grabado e Impresión. Denominaciones más altas como billetes de $500 y $1000 fueron descontinuadas en 1969.",
          de: "Der $100-Schein ist die größte Denomination, die derzeit vom Bureau of Engraving and Printing gedruckt wird. Höhere Denominationen wie $500- und $1000-Scheine wurden 1969 eingestellt.",
          nl: "Het $100-biljet is de grootste denominatie die momenteel wordt gedrukt door het Bureau of Engraving and Printing. Hogere denominaties zoals $500- en $1000-biljetten werden in 1969 stopgezet."
        }
      },
      {
        question: {
          en: "What is the nickname for the US Dollar in foreign exchange markets?",
          es: "¿Cuál es el apodo del dólar estadounidense en los mercados de divisas?",
          de: "Wie lautet der Spitzname für den US-Dollar auf den Devisenmärkten?",
          nl: "Wat is de bijnaam voor de Amerikaanse dollar op de valutamarkten?"
        },
        options: [
          { en: "Greenback", es: "Greenback", de: "Greenback", nl: "Greenback" },
          { en: "Eagle", es: "Águila", de: "Adler", nl: "Adelaar" },
          { en: "Liberty", es: "Libertad", de: "Freiheit", nl: "Vrijheid" },
          { en: "Yankee", es: "Yankee", de: "Yankee", nl: "Yankee" }
        ],
        correct: 0,
        explanation: {
          en: "The US Dollar is often called 'Greenback' due to the distinctive green color of US currency. This nickname originated during the Civil War when the first government-issued paper money had green ink on the back.",
          es: "El dólar estadounidense a menudo se llama 'Greenback' debido al distintivo color verde de la moneda estadounidense. Este apodo se originó durante la Guerra Civil cuando el primer papel moneda emitido por el gobierno tenía tinta verde en el reverso.",
          de: "Der US-Dollar wird oft 'Greenback' genannt aufgrund der charakteristischen grünen Farbe der US-Währung. Dieser Spitzname entstand während des Bürgerkriegs, als das erste von der Regierung ausgegebene Papiergeld grüne Tinte auf der Rückseite hatte.",
          nl: "De Amerikaanse dollar wordt vaak 'Greenback' genoemd vanwege de kenmerkende groene kleur van de Amerikaanse valuta. Deze bijnaam ontstond tijdens de Burgeroorlog toen het eerste door de regering uitgegeven papiergeld groene inkt op de achterkant had."
        }
      },
      {
        question: {
          en: "How many Federal Reserve Banks are there in the United States?",
          es: "¿Cuántos Bancos de la Reserva Federal hay en Estados Unidos?",
          de: "Wie viele Federal Reserve Banks gibt es in den Vereinigten Staaten?",
          nl: "Hoeveel Federal Reserve Banks zijn er in de Verenigde Staten?"
        },
        options: [
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "20", es: "20", de: "20", nl: "20" }
        ],
        correct: 1,
        explanation: {
          en: "There are 12 Federal Reserve Banks located in major cities across the United States. Each bank serves a specific district and helps implement monetary policy at the regional level.",
          es: "Hay 12 Bancos de la Reserva Federal ubicados en ciudades principales a través de Estados Unidos. Cada banco sirve a un distrito específico y ayuda a implementar la política monetaria a nivel regional.",
          de: "Es gibt 12 Federal Reserve Banks in großen Städten in den Vereinigten Staaten. Jede Bank bedient einen bestimmten Bezirk und hilft bei der Umsetzung der Geldpolitik auf regionaler Ebene.",
          nl: "Er zijn 12 Federal Reserve Banks gelegen in grote steden door de Verenigde Staten. Elke bank bedient een specifiek district en helpt monetair beleid op regionaal niveau te implementeren."
        }
      },
      {
        question: {
          en: "What is the most counterfeited US bill denomination?",
          es: "¿Cuál es la denominación de billete estadounidense más falsificada?",
          de: "Welche US-Schein-Denomination wird am häufigsten gefälscht?",
          nl: "Wat is de meest vervalste Amerikaanse biljetdenominatie?"
        },
        options: [
          { en: "$1", es: "$1", de: "$1", nl: "$1" },
          { en: "$20", es: "$20", de: "$20", nl: "$20" },
          { en: "$50", es: "$50", de: "$50", nl: "$50" },
          { en: "$100", es: "$100", de: "$100", nl: "$100" }
        ],
        correct: 3,
        explanation: {
          en: "The $100 bill is the most counterfeited US denomination due to its high value. To combat this, it includes advanced security features like a 3D security ribbon and color-changing ink.",
          es: "El billete de $100 es la denominación estadounidense más falsificada debido a su alto valor. Para combatir esto, incluye características de seguridad avanzadas como una cinta de seguridad 3D y tinta que cambia de color.",
          de: "Der $100-Schein ist die am häufigsten gefälschte US-Denomination aufgrund seines hohen Wertes. Um dies zu bekämpfen, enthält er fortschrittliche Sicherheitsmerkmale wie ein 3D-Sicherheitsband und farbwechselnde Tinte.",
          nl: "Het $100-biljet is de meest vervalste Amerikaanse denominatie vanwege zijn hoge waarde. Om dit te bestrijden bevat het geavanceerde beveiligingskenmerken zoals een 3D-beveiligingslint en kleurveranderende inkt."
        }
      },
      {
        question: {
          en: "What motto appears on all US currency?",
          es: "¿Qué lema aparece en toda la moneda estadounidense?",
          de: "Welches Motto erscheint auf der gesamten US-Währung?",
          nl: "Welk motto verschijnt op alle Amerikaanse valuta?"
        },
        options: [
          { en: "E Pluribus Unum", es: "E Pluribus Unum", de: "E Pluribus Unum", nl: "E Pluribus Unum" },
          { en: "In God We Trust", es: "En Dios Confiamos", de: "Auf Gott vertrauen wir", nl: "In God Vertrouwen Wij" },
          { en: "Liberty and Justice", es: "Libertad y Justicia", de: "Freiheit und Gerechtigkeit", nl: "Vrijheid en Rechtvaardigheid" },
          { en: "United We Stand", es: "Unidos Permanecemos", de: "Vereint stehen wir", nl: "Verenigd Staan Wij" }
        ],
        correct: 1,
        explanation: {
          en: "'In God We Trust' has been the official motto of the United States since 1956 and appears on all US currency. It was first added to coins during the Civil War and to paper money in 1957.",
          es: "'En Dios Confiamos' ha sido el lema oficial de Estados Unidos desde 1956 y aparece en toda la moneda estadounidense. Fue agregado por primera vez a las monedas durante la Guerra Civil y al papel moneda en 1957.",
          de: "'In God We Trust' ist seit 1956 das offizielle Motto der Vereinigten Staaten und erscheint auf der gesamten US-Währung. Es wurde erstmals während des Bürgerkriegs zu Münzen hinzugefügt und 1957 zu Papiergeld.",
          nl: "'In God We Trust' is sinds 1956 het officiële motto van de Verenigde Staten en verschijnt op alle Amerikaanse valuta. Het werd voor het eerst toegevoegd aan munten tijdens de Burgeroorlog en aan papiergeld in 1957."
        }
      },
      {
        question: {
          en: "Which precious metal was used in US coins before 1965?",
          es: "¿Qué metal precioso se usaba en las monedas estadounidenses antes de 1965?",
          de: "Welches Edelmetall wurde vor 1965 in US-Münzen verwendet?",
          nl: "Welk edel metaal werd gebruikt in Amerikaanse munten vóór 1965?"
        },
        options: [
          { en: "Gold", es: "Oro", de: "Gold", nl: "Goud" },
          { en: "Silver", es: "Plata", de: "Silber", nl: "Zilver" },
          { en: "Platinum", es: "Platino", de: "Platin", nl: "Platina" },
          { en: "Copper", es: "Cobre", de: "Kupfer", nl: "Koper" }
        ],
        correct: 1,
        explanation: {
          en: "US dimes, quarters, and half dollars contained 90% silver before 1965. The Coinage Act of 1965 removed silver from most circulating coins due to rising silver prices.",
          es: "Los dimes, quarters y medio dólares estadounidenses contenían 90% de plata antes de 1965. La Ley de Acuñación de 1965 eliminó la plata de la mayoría de las monedas circulantes debido al aumento de los precios de la plata.",
          de: "US-Dimes, Quarters und Halbe Dollar enthielten vor 1965 90% Silber. Der Coinage Act von 1965 entfernte Silber aus den meisten zirkulierenden Münzen aufgrund steigender Silberpreise.",
          nl: "Amerikaanse dimes, quarters en halve dollars bevatten 90% zilver vóór 1965. De Coinage Act van 1965 verwijderde zilver uit de meeste circulerende munten vanwege stijgende zilverprijzen."
        }
      },
      {
        question: {
          en: "What percentage of global foreign exchange reserves is held in US Dollars?",
          es: "¿Qué porcentaje de las reservas de divisas globales se mantiene en dólares estadounidenses?",
          de: "Welcher Prozentsatz der globalen Devisenreserven wird in US-Dollar gehalten?",
          nl: "Welk percentage van de wereldwijde valutareserves wordt aangehouden in Amerikaanse dollars?"
        },
        options: [
          { en: "Around 40%", es: "Alrededor del 40%", de: "Etwa 40%", nl: "Ongeveer 40%" },
          { en: "Around 50%", es: "Alrededor del 50%", de: "Etwa 50%", nl: "Ongeveer 50%" },
          { en: "Around 60%", es: "Alrededor del 60%", de: "Etwa 60%", nl: "Ongeveer 60%" },
          { en: "Around 70%", es: "Alrededor del 70%", de: "Etwa 70%", nl: "Ongeveer 70%" }
        ],
        correct: 2,
        explanation: {
          en: "Approximately 60% of global foreign exchange reserves are held in US Dollars, making it the dominant reserve currency. This reflects the dollar's role in international trade and finance.",
          es: "Aproximadamente el 60% de las reservas de divisas globales se mantienen en dólares estadounidenses, convirtiéndolo en la moneda de reserva dominante. Esto refleja el papel del dólar en el comercio y finanzas internacionales.",
          de: "Etwa 60% der globalen Devisenreserven werden in US-Dollar gehalten, was ihn zur dominierenden Reservewährung macht. Dies spiegelt die Rolle des Dollars im internationalen Handel und Finanzwesen wider.",
          nl: "Ongeveer 60% van de wereldwijde valutareserves wordt aangehouden in Amerikaanse dollars, waardoor het de dominante reservevaluta is. Dit weerspiegelt de rol van de dollar in internationale handel en financiën."
        }
      },
      {
        question: {
          en: "What security feature was first introduced on the $100 bill in 2013?",
          es: "¿Qué característica de seguridad se introdujo por primera vez en el billete de $100 en 2013?",
          de: "Welches Sicherheitsmerkmal wurde 2013 erstmals auf dem $100-Schein eingeführt?",
          nl: "Welke beveiligingsfunctie werd voor het eerst geïntroduceerd op het $100-biljet in 2013?"
        },
        options: [
          { en: "Watermark", es: "Marca de agua", de: "Wasserzeichen", nl: "Watermerk" },
          { en: "3D Security Ribbon", es: "Cinta de Seguridad 3D", de: "3D-Sicherheitsband", nl: "3D Beveiligingslint" },
          { en: "Microprinting", es: "Microimpresión", de: "Mikrodruck", nl: "Microdruk" },
          { en: "Color-changing ink", es: "Tinta que cambia de color", de: "Farbwechselnde Tinte", nl: "Kleurveranderende inkt" }
        ],
        correct: 1,
        explanation: {
          en: "The 2013 redesign of the $100 bill introduced a blue 3D Security Ribbon with images that move and change from bells to 100s when tilted, making counterfeiting much more difficult.",
          es: "El rediseño de 2013 del billete de $100 introdujo una Cinta de Seguridad 3D azul con imágenes que se mueven y cambian de campanas a 100s cuando se inclina, haciendo la falsificación mucho más difícil.",
          de: "Das Redesign des $100-Scheins von 2013 führte ein blaues 3D-Sicherheitsband mit Bildern ein, die sich bewegen und von Glocken zu 100ern ändern, wenn geneigt, was Fälschungen viel schwieriger macht.",
          nl: "Het herontwerp van het $100-biljet in 2013 introduceerde een blauw 3D Beveiligingslint met afbeeldingen die bewegen en veranderen van klokken naar 100s wanneer gekanteld, waardoor vervalsing veel moeilijker wordt."
        }
      },
      {
        question: {
          en: "What does the abbreviation 'Fed' commonly refer to?",
          es: "¿A qué se refiere comúnmente la abreviatura 'Fed'?",
          de: "Worauf bezieht sich die Abkürzung 'Fed' üblicherweise?",
          nl: "Waar verwijst de afkorting 'Fed' gewoonlijk naar?"
        },
        options: [
          { en: "Federal Bureau of Investigation", es: "Oficina Federal de Investigación", de: "Federal Bureau of Investigation", nl: "Federal Bureau of Investigation" },
          { en: "Federal Reserve System", es: "Sistema de Reserva Federal", de: "Federal Reserve System", nl: "Federal Reserve System" },
          { en: "Federal Trade Commission", es: "Comisión Federal de Comercio", de: "Federal Trade Commission", nl: "Federal Trade Commission" },
          { en: "Federal Deposit Insurance", es: "Seguro Federal de Depósitos", de: "Federal Deposit Insurance", nl: "Federal Deposit Insurance" }
        ],
        correct: 1,
        explanation: {
          en: "In financial contexts, 'Fed' refers to the Federal Reserve System, the central banking system of the United States. It's responsible for monetary policy, banking regulation, and financial stability.",
          es: "En contextos financieros, 'Fed' se refiere al Sistema de Reserva Federal, el sistema bancario central de Estados Unidos. Es responsable de la política monetaria, regulación bancaria y estabilidad financiera.",
          de: "In finanziellen Kontexten bezieht sich 'Fed' auf das Federal Reserve System, das Zentralbanksystem der Vereinigten Staaten. Es ist verantwortlich für Geldpolitik, Bankenregulierung und Finanzstabilität.",
          nl: "In financiële contexten verwijst 'Fed' naar het Federal Reserve System, het centrale banksysteem van de Verenigde Staten. Het is verantwoordelijk voor monetair beleid, bankregulering en financiële stabiliteit."
        }
      },
      {
        question: {
          en: "Which symbol represents cents in US currency?",
          es: "¿Qué símbolo representa los centavos en la moneda estadounidense?",
          de: "Welches Symbol repräsentiert Cents in der US-Währung?",
          nl: "Welk symbool vertegenwoordigt cent in de Amerikaanse valuta?"
        },
        options: [
          { en: "¢", es: "¢", de: "¢", nl: "¢" },
          { en: "©", es: "©", de: "©", nl: "©" },
          { en: "₵", es: "₵", de: "₵", nl: "₵" },
          { en: "∁", es: "∁", de: "∁", nl: "∁" }
        ],
        correct: 0,
        explanation: {
          en: "The cent symbol (¢) is used to represent cents in US currency. It consists of a lowercase 'c' with a vertical line through it, though it's less commonly used in modern digital transactions.",
          es: "El símbolo de centavo (¢) se usa para representar centavos en la moneda estadounidense. Consiste en una 'c' minúscula con una línea vertical a través de ella, aunque se usa menos comúnmente en transacciones digitales modernas.",
          de: "Das Cent-Symbol (¢) wird verwendet, um Cents in der US-Währung zu repräsentieren. Es besteht aus einem kleinen 'c' mit einer vertikalen Linie durch es, obwohl es in modernen digitalen Transaktionen weniger häufig verwendet wird.",
          nl: "Het centsymbool (¢) wordt gebruikt om cent in de Amerikaanse valuta voor te stellen. Het bestaat uit een kleine 'c' met een verticale lijn erdoor, hoewel het minder vaak gebruikt wordt in moderne digitale transacties."
        }
      },
      {
        question: {
          en: "What is the largest denomination of US currency currently in circulation?",
          es: "¿Cuál es la denominación más grande de la moneda estadounidense actualmente en circulación?",
          de: "Was ist die größte Stückelung der US-Währung, die derzeit im Umlauf ist?",
          nl: "Wat is de grootste denominatie van de Amerikaanse valuta die momenteel in omloop is?"
        },
        options: [
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$500", es: "$500", de: "$500", nl: "$500" },
          { en: "$1,000", es: "$1,000", de: "$1,000", nl: "$1,000" },
          { en: "$10,000", es: "$10,000", de: "$10,000", nl: "$10,000" }
        ],
        correct: 0,
        explanation: {
          en: "The $100 bill is the largest denomination currently in circulation. Higher denominations like $500, $1,000, $5,000, and $10,000 bills were discontinued in 1969 due to lack of use and concerns about money laundering.",
          es: "El billete de $100 es la denominación más grande actualmente en circulación. Denominaciones más altas como billetes de $500, $1,000, $5,000 y $10,000 fueron descontinuados en 1969 debido a la falta de uso y preocupaciones sobre lavado de dinero.",
          de: "Der $100-Schein ist die größte Stückelung, die derzeit im Umlauf ist. Höhere Stückelungen wie $500-, $1,000-, $5,000- und $10,000-Scheine wurden 1969 aufgrund mangelnder Nutzung und Sorgen über Geldwäsche eingestellt.",
          nl: "Het $100-biljet is de grootste denominatie die momenteel in omloop is. Hogere denominaties zoals $500-, $1,000-, $5,000- en $10,000-biljetten werden stopgezet in 1969 wegens gebrek aan gebruik en zorgen over witwassen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
