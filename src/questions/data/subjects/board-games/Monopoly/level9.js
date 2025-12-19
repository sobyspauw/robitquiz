(function() {
  const questions = [
    {
      question: {
        en: "Who was the original creator of 'The Landlord's Game' that inspired Monopoly?",
        es: "¿Quién fue el creador original de 'The Landlord's Game' que inspiró a Monopoly?",
        de: "Wer war der ursprüngliche Schöpfer von 'The Landlord's Game', das Monopoly inspirierte?",
        nl: "Wie was de oorspronkelijke maker van 'The Landlord's Game' dat Monopoly inspireerde?"
      },
      options: [
        { en: "Charles Darrow", es: "Charles Darrow", de: "Charles Darrow", nl: "Charles Darrow" },
        { en: "Elizabeth Magie", es: "Elizabeth Magie", de: "Elizabeth Magie", nl: "Elizabeth Magie" },
        { en: "George Parker", es: "George Parker", de: "George Parker", nl: "George Parker" },
        { en: "Milton Bradley", es: "Milton Bradley", de: "Milton Bradley", nl: "Milton Bradley" }
      ],
      correct: 1,
      explanation: {
        en: "Elizabeth Magie created 'The Landlord's Game' in 1903 to demonstrate the economic principles of Georgism. Charles Darrow later commercialized a version as Monopoly.",
        es: "Elizabeth Magie creó 'The Landlord's Game' en 1903 para demostrar los principios económicos del georgismo. Charles Darrow luego comercializó una versión como Monopoly.",
        de: "Elizabeth Magie schuf 1903 'The Landlord's Game' um die ökonomischen Prinzipien des Georgismus zu demonstrieren. Charles Darrow kommerzialisierte später eine Version als Monopoly.",
        nl: "Elizabeth Magie creëerde 'The Landlord's Game' in 1903 om de economische principes van het Georgisme te demonstreren. Charles Darrow commercialiseerde later een versie als Monopoly."
      }
    },
    {
      question: {
        en: "In the 2015 World Championships, how many countries were represented?",
        es: "En el Campeonato Mundial de 2015, ¿cuántos países estuvieron representados?",
        de: "Bei der Weltmeisterschaft 2015, wie viele Länder waren vertreten?",
        nl: "Bij de Wereldkampioenschappen van 2015, hoeveel landen waren vertegenwoordigd?"
      },
      options: [
        { en: "28 countries", es: "28 países", de: "28 Länder", nl: "28 landen" },
        { en: "47 countries", es: "47 países", de: "47 Länder", nl: "47 landen" },
        { en: "60 countries", es: "60 países", de: "60 Länder", nl: "60 landen" },
        { en: "80 countries", es: "80 países", de: "80 Länder", nl: "80 landen" }
      ],
      correct: 1,
      explanation: {
        en: "The 2015 Monopoly World Championship in Macau featured 47 countries, making it one of the largest board game competitions globally.",
        es: "El Campeonato Mundial de Monopoly 2015 en Macao contó con 47 países, convirtiéndolo en una de las competiciones de juegos de mesa más grandes a nivel mundial.",
        de: "Die Monopoly-Weltmeisterschaft 2015 in Macau hatte Teilnehmer aus 47 Ländern und war damit einer der größten Brettspielvettbewerbe weltweit.",
        nl: "Het Monopoly Wereldkampioenschap 2015 in Macau had 47 landen, waardoor het een van de grootste bordspelcompetities wereldwijd was."
      }
    },
    {
      question: {
        en: "What was the original economic philosophy that 'The Landlord's Game' was designed to teach?",
        es: "¿Cuál fue la filosofía económica original que 'The Landlord's Game' fue diseñado para enseñar?",
        de: "Welche wirtschaftliche Philosophie sollte 'The Landlord's Game' ursprünglich vermitteln?",
        nl: "Wat was de oorspronkelijke economische filosofie die 'The Landlord's Game' moest onderwijzen?"
      },
      options: [
        { en: "Capitalism and free markets", es: "Capitalismo y mercados libres", de: "Kapitalismus und freie Märkte", nl: "Kapitalisme en vrije markten" },
        { en: "Georgism - single tax on land value", es: "Georgismo - impuesto único sobre el valor de la tierra", de: "Georgismus - Einzelsteuer auf Bodenwert", nl: "Georgisme - enkele belasting op grondwaarde" },
        { en: "Socialism and wealth redistribution", es: "Socialismo y redistribución de riqueza", de: "Sozialismus und Umverteilung", nl: "Socialisme en herverdeling van rijkdom" },
        { en: "Mercantilism", es: "Mercantilismo", de: "Merkantilismus", nl: "Mercantilisme" }
      ],
      correct: 1,
      explanation: {
        en: "Elizabeth Magie designed the game to teach Georgism, which advocates for a single tax on land value to prevent monopolies and land speculation.",
        es: "Elizabeth Magie diseñó el juego para enseñar el georgismo, que aboga por un impuesto único sobre el valor de la tierra para prevenir monopolios y especulación inmobiliaria.",
        de: "Elizabeth Magie entwarf das Spiel, um Georgismus zu lehren, der für eine Einzelsteuer auf Bodenwert plädiert, um Monopole und Landspekulation zu verhindern.",
        nl: "Elizabeth Magie ontwierp het spel om Georgisme te onderwijzen, dat pleit voor een enkele belasting op grondwaarde om monopolies en grondspeculatie te voorkomen."
      }
    },
    {
      question: {
        en: "What is the Guinness World Record for longest Monopoly game played in a bathtub?",
        es: "¿Cuál es el récord mundial Guinness del juego de Monopoly más largo jugado en una bañera?",
        de: "Was ist der Guinness-Weltrekord für das längste Monopoly-Spiel in einer Badewanne?",
        nl: "Wat is het Guinness Wereldrecord voor het langste Monopoly spel gespeeld in een badkuip?"
      },
      options: [
        { en: "8 hours", es: "8 horas", de: "8 Stunden", nl: "8 uur" },
        { en: "24 hours", es: "24 horas", de: "24 Stunden", nl: "24 uur" },
        { en: "99 hours", es: "99 horas", de: "99 Stunden", nl: "99 uur" },
        { en: "7 days", es: "7 días", de: "7 Tage", nl: "7 dagen" }
      ],
      correct: 2,
      explanation: {
        en: "The record for longest Monopoly game in a bathtub is 99 hours, one of many unusual Monopoly world records including underwater, upside-down, and in a tree.",
        es: "El récord del juego de Monopoly más largo en una bañera es de 99 horas, uno de los muchos récords mundiales inusuales de Monopoly que incluyen bajo el agua, boca abajo y en un árbol.",
        de: "Der Rekord für das längste Monopoly-Spiel in einer Badewanne beträgt 99 Stunden, einer von vielen ungewöhnlichen Monopoly-Weltrekorden einschließlich unter Wasser, auf dem Kopf und in einem Baum.",
        nl: "Het record voor het langste Monopoly spel in een badkuip is 99 uur, een van de vele ongebruikelijke Monopoly wereldrecords inclusief onder water, ondersteboven en in een boom."
      }
    },
    {
      question: {
        en: "In the Atlantic City version, which real street is represented by Boardwalk?",
        es: "En la versión de Atlantic City, ¿qué calle real está representada por Boardwalk?",
        de: "In der Atlantic City-Version, welche echte Straße wird durch Boardwalk repräsentiert?",
        nl: "In de Atlantic City versie, welke echte straat wordt vertegenwoordigd door Boardwalk?"
      },
      options: [
        { en: "The actual Atlantic City Boardwalk", es: "El verdadero Atlantic City Boardwalk", de: "Der tatsächliche Atlantic City Boardwalk", nl: "De echte Atlantic City Boardwalk" },
        { en: "Wall Street", es: "Wall Street", de: "Wall Street", nl: "Wall Street" },
        { en: "Fifth Avenue", es: "Quinta Avenida", de: "Fifth Avenue", nl: "Fifth Avenue" },
        { en: "Pacific Boulevard", es: "Pacific Boulevard", de: "Pacific Boulevard", nl: "Pacific Boulevard" }
      ],
      correct: 0,
      explanation: {
        en: "All properties in the original U.S. Monopoly are based on actual streets in Atlantic City, New Jersey. The Boardwalk is Atlantic City's famous beachfront promenade.",
        es: "Todas las propiedades en el Monopoly estadounidense original se basan en calles reales de Atlantic City, Nueva Jersey. El Boardwalk es el famoso paseo marítimo de Atlantic City.",
        de: "Alle Grundstücke im ursprünglichen US-Monopoly basieren auf echten Straßen in Atlantic City, New Jersey. Der Boardwalk ist Atlantic Citys berühmte Strandpromenade.",
        nl: "Alle eigendommen in het originele Amerikaanse Monopoly zijn gebaseerd op echte straten in Atlantic City, New Jersey. De Boardwalk is Atlantic City's beroemde strandpromenade."
      }
    },
    {
      question: {
        en: "What unusual material was used for the most expensive Monopoly set ever created?",
        es: "¿Qué material inusual se usó para el set de Monopoly más caro jamás creado?",
        de: "Welches ungewöhnliche Material wurde für das teuerste jemals geschaffene Monopoly-Set verwendet?",
        nl: "Welk ongebruikelijk materiaal werd gebruikt voor de duurste Monopoly set ooit gemaakt?"
      },
      options: [
        { en: "Platinum", es: "Platino", de: "Platin", nl: "Platina" },
        { en: "Gold and jewels", es: "Oro y joyas", de: "Gold und Juwelen", nl: "Goud en juwelen" },
        { en: "Diamond-encrusted ivory", es: "Marfil con incrustaciones de diamantes", de: "Mit Diamanten besetztes Elfenbein", nl: "Met diamanten bezet ivoor" },
        { en: "Solid silver", es: "Plata sólida", de: "Massives Silber", nl: "Massief zilver" }
      ],
      correct: 1,
      explanation: {
        en: "In 1988, jeweler Sidney Mobell created a $2 million Monopoly set with 23-karat gold houses, ruby-studded hotels, and a board made of gold and sapphires.",
        es: "En 1988, el joyero Sidney Mobell creó un set de Monopoly de $2 millones con casas de oro de 23 quilates, hoteles con rubíes y un tablero de oro y zafiros.",
        de: "1988 schuf Juwelier Sidney Mobell ein 2-Millionen-Dollar Monopoly-Set mit 23-Karat Goldhäusern, rubinbesetzten Hotels und einem Brett aus Gold und Saphiren.",
        nl: "In 1988 creëerde juwelier Sidney Mobell een $2 miljoen Monopoly set met 23-karaats gouden huizen, met robijn bezette hotels en een bord gemaakt van goud en saffieren."
      }
    },
    {
      question: {
        en: "During WWII, how did the British Secret Service use Monopoly games?",
        es: "Durante la Segunda Guerra Mundial, ¿cómo usó el Servicio Secreto Británico los juegos de Monopoly?",
        de: "Wie nutzte der britische Geheimdienst während des Zweiten Weltkriegs Monopoly-Spiele?",
        nl: "Tijdens WOII, hoe gebruikte de Britse Geheime Dienst Monopoly spellen?"
      },
      options: [
        { en: "As entertainment for troops", es: "Como entretenimiento para las tropas", de: "Als Unterhaltung für Truppen", nl: "Als entertainment voor troepen" },
        { en: "To smuggle maps and escape tools to POWs", es: "Para contrabandear mapas y herramientas de escape a prisioneros de guerra", de: "Um Karten und Fluchtwerkszeuge an Kriegsgefangene zu schmuggeln", nl: "Om kaarten en ontsnappingstools naar krijgsgevangenen te smokkelen" },
        { en: "For code breaking practice", es: "Para práctica de descifrado de códigos", de: "Zum Üben des Entschlüsselns", nl: "Voor codekraak oefening" },
        { en: "As propaganda", es: "Como propaganda", de: "Als Propaganda", nl: "Als propaganda" }
      ],
      correct: 1,
      explanation: {
        en: "MI9 and Waddingtons Games secretly distributed Monopoly sets to Allied POWs with hidden maps, compasses, and real money for escape attempts, marked with a red dot.",
        es: "MI9 y Waddingtons Games distribuyeron secretamente sets de Monopoly a prisioneros de guerra aliados con mapas ocultos, brújulas y dinero real para intentos de escape, marcados con un punto rojo.",
        de: "MI9 und Waddingtons Games verteilten heimlich Monopoly-Sets an alliierte Kriegsgefangene mit versteckten Karten, Kompassen und echtem Geld für Fluchtversuche, markiert mit einem roten Punkt.",
        nl: "MI9 en Waddingtons Games distribueerden heimelijk Monopoly sets naar geallieerde krijgsgevangenen met verborgen kaarten, kompassen en echt geld voor ontsnappingspogingen, gemarkeerd met een rode stip."
      }
    },
    {
      question: {
        en: "What is the mathematical expected number of turns before a player goes bankrupt in a 2-player game with optimal strategy?",
        es: "¿Cuál es el número esperado matemático de turnos antes de que un jugador quiebre en un juego de 2 jugadores con estrategia óptima?",
        de: "Was ist die mathematisch erwartete Anzahl von Runden, bevor ein Spieler in einem 2-Spieler-Spiel mit optimaler Strategie bankrott geht?",
        nl: "Wat is het mathematisch verwachte aantal beurten voordat een speler failliet gaat in een 2-speler spel met optimale strategie?"
      },
      options: [
        { en: "15-25 turns", es: "15-25 turnos", de: "15-25 Runden", nl: "15-25 beurten" },
        { en: "35-50 turns", es: "35-50 turnos", de: "35-50 Runden", nl: "35-50 beurten" },
        { en: "60-90 turns", es: "60-90 turnos", de: "60-90 Runden", nl: "60-90 beurten" },
        { en: "Over 100 turns", es: "Más de 100 turnos", de: "Über 100 Runden", nl: "Meer dan 100 beurten" }
      ],
      correct: 2,
      explanation: {
        en: "Computer simulations show that with official rules and optimal strategy, a 2-player game typically ends in 60-90 turns (about 30-45 rounds per player).",
        es: "Las simulaciones por computadora muestran que con reglas oficiales y estrategia óptima, un juego de 2 jugadores termina típicamente en 60-90 turnos (aproximadamente 30-45 rondas por jugador).",
        de: "Computersimulationen zeigen, dass mit offiziellen Regeln und optimaler Strategie ein 2-Spieler-Spiel typischerweise in 60-90 Runden endet (etwa 30-45 Runden pro Spieler).",
        nl: "Computersimulaties tonen aan dat met officiële regels en optimale strategie, een 2-speler spel typisch eindigt in 60-90 beurten (ongeveer 30-45 rondes per speler)."
      }
    },
    {
      question: {
        en: "What is the probability of landing on 'Go To Jail' via any method in a single turn?",
        es: "¿Cuál es la probabilidad de ir a la cárcel por cualquier método en un solo turno?",
        de: "Wie hoch ist die Wahrscheinlichkeit, über eine beliebige Methode in einer einzelnen Runde ins Gefängnis zu kommen?",
        nl: "Wat is de waarschijnlijkheid om via elke methode in een enkele beurt naar de Gevangenis te gaan?"
      },
      options: [
        { en: "About 5.9%", es: "Alrededor del 5.9%", de: "Etwa 5,9%", nl: "Ongeveer 5,9%" },
        { en: "About 10.4%", es: "Alrededor del 10.4%", de: "Etwa 10,4%", nl: "Ongeveer 10,4%" },
        { en: "About 15.2%", es: "Alrededor del 15.2%", de: "Etwa 15,2%", nl: "Ongeveer 15,2%" },
        { en: "About 20%", es: "Alrededor del 20%", de: "Etwa 20%", nl: "Ongeveer 20%" }
      ],
      correct: 1,
      explanation: {
        en: "Approximately 10.4% chance per turn combining: Go To Jail space (2.8%), Chance/Community Chest cards (4.7%), and rolling three doubles (2.9%).",
        es: "Aproximadamente 10.4% de probabilidad por turno combinando: espacio Ir a la Cárcel (2.8%), cartas de Suerte/Caja de Comunidad (4.7%), y sacar tres dobles (2.9%).",
        de: "Etwa 10,4% Wahrscheinlichkeit pro Runde durch Kombination: Gehen Sie ins Gefängnis-Feld (2,8%), Ereignis-/Gemeinschaftskarten (4,7%) und drei Paschs (2,9%).",
        nl: "Ongeveer 10,4% kans per beurt door combinatie: Ga naar Gevangenis vak (2,8%), Kans/Algemeen Fonds kaarten (4,7%), en drie keer dubbel (2,9%)."
      }
    },
    {
      question: {
        en: "In Speed Die variant, what happens when you roll Mr. Monopoly?",
        es: "En la variante de Speed Die, ¿qué sucede cuando sacas Mr. Monopoly?",
        de: "In der Speed Die-Variante, was passiert wenn man Mr. Monopoly würfelt?",
        nl: "In de Speed Die variant, wat gebeurt er als je Mr. Monopoly gooit?"
      },
      options: [
        { en: "Move to nearest unowned property", es: "Moverse a la propiedad sin dueño más cercana", de: "Zum nächsten unbelegten Grundstück gehen", nl: "Verplaats naar dichtstbijzijnde eigendom zonder eigenaar" },
        { en: "Move to next Railroad or Utility", es: "Moverse al próximo Ferrocarril o Servicio", de: "Zum nächsten Bahnhof oder Versorger gehen", nl: "Verplaats naar volgende Spoorweg of Nutsbedrijf" },
        { en: "Collect rent from all players", es: "Cobrar alquiler a todos los jugadores", de: "Miete von allen Spielern kassieren", nl: "Huur innen van alle spelers" },
        { en: "Get extra $200", es: "Obtener $200 extra", de: "Extra $200 erhalten", nl: "Krijg extra $200" }
      ],
      correct: 1,
      explanation: {
        en: "Rolling Mr. Monopoly on the Speed Die moves you to the next Railroad or Utility (whichever comes first) after your regular move, potentially paying rent or buying it.",
        es: "Sacar Mr. Monopoly en el Speed Die te mueve al próximo Ferrocarril o Servicio (el que venga primero) después de tu movimiento regular, potencialmente pagando alquiler o comprándolo.",
        de: "Mr. Monopoly auf dem Speed Die zu würfeln bewegt Sie zum nächsten Bahnhof oder Versorger (was auch immer zuerst kommt) nach Ihrem regulären Zug, möglicherweise Miete zahlen oder kaufen.",
        nl: "Mr. Monopoly gooien op de Speed Die verplaatst je naar de volgende Spoorweg of Nutsbedrijf (wat het eerst komt) na je reguliere zet, mogelijk huur betalen of kopen."
      }
    },
    {
      question: {
        en: "What is the 'Baltic-Mediterranean Strategy' in early-game competitive play?",
        es: "¿Cuál es la 'Estrategia Baltic-Mediterranean' en el juego competitivo temprano?",
        de: "Was ist die 'Baltic-Mediterranean-Strategie' im frühen kompetitiven Spiel?",
        nl: "Wat is de 'Baltic-Mediterranean Strategie' in vroeg competitief spel?"
      },
      options: [
        { en: "Always buy these cheap properties first", es: "Siempre comprar estas propiedades baratas primero", de: "Diese billigen Grundstücke immer zuerst kaufen", nl: "Deze goedkope eigendommen altijd eerst kopen" },
        { en: "Intentionally lose to get dark purple monopoly for disruption", es: "Perder intencionalmente para obtener monopolio morado oscuro para perturbación", de: "Absichtlich verlieren, um dunkellila Monopol zur Störung zu bekommen", nl: "Opzettelijk verliezen om donkerpaars monopolie te krijgen voor verstoring" },
        { en: "Never buy them - they have worst ROI", es: "Nunca comprarlas - tienen el peor ROI", de: "Niemals kaufen - sie haben den schlechtesten ROI", nl: "Nooit kopen - ze hebben de slechtste ROI" },
        { en: "Trade them immediately for better properties", es: "Negociarlas inmediatamente por mejores propiedades", de: "Sofort für bessere Grundstücke handeln", nl: "Onmiddellijk ruilen voor betere eigendommen" }
      ],
      correct: 1,
      explanation: {
        en: "Some tournament players intentionally acquire dark purple to develop it cheaply ($250 for hotels) as a psychological weapon, forcing opponents into cash flow decisions early.",
        es: "Algunos jugadores de torneo adquieren intencionalmente el morado oscuro para desarrollarlo barato ($250 para hoteles) como un arma psicológica, forzando a los oponentes a decisiones de flujo de efectivo temprano.",
        de: "Einige Turnierspieler erwerben absichtlich dunkellila, um es billig zu entwickeln ($250 für Hotels) als psychologische Waffe, die Gegner früh zu Cashflow-Entscheidungen zwingt.",
        nl: "Sommige toernooispelers verwerven opzettelijk donkerpaars om het goedkoop te ontwikkelen ($250 voor hotels) als psychologisch wapen, wat tegenstanders vroeg dwingt tot cashflow beslissingen."
      }
    },
    {
      question: {
        en: "What mathematical principle explains why orange properties are statistically superior?",
        es: "¿Qué principio matemático explica por qué las propiedades naranjas son estadísticamente superiores?",
        de: "Welches mathematische Prinzip erklärt, warum orange Grundstücke statistisch überlegen sind?",
        nl: "Welk mathematisch principe verklaart waarom oranje eigendommen statistisch superieur zijn?"
      },
      options: [
        { en: "They're cheapest to develop fully", es: "Son las más baratas para desarrollar completamente", de: "Sie sind am billigsten voll zu entwickeln", nl: "Ze zijn het goedkoopst om volledig te ontwikkelen" },
        { en: "6-9 spaces from Jail matches most common dice rolls", es: "6-9 espacios desde la Cárcel coincide con las tiradas de dados más comunes", de: "6-9 Felder vom Gefängnis passen zu häufigsten Würfelwürfen", nl: "6-9 vakken van Gevangenis komt overeen met meest voorkomende dobbelsteenworpen" },
        { en: "Orange has highest base rent", es: "Naranja tiene el alquiler base más alto", de: "Orange hat die höchste Grundmiete", nl: "Oranje heeft de hoogste basis huur" },
        { en: "Most Chance cards lead to orange", es: "La mayoría de cartas de Suerte llevan a naranja", de: "Die meisten Ereigniskarten führen zu orange", nl: "Meeste Kanskaarten leiden naar oranje" }
      ],
      correct: 1,
      explanation: {
        en: "Orange properties are 6-9 spaces from Jail. Since 6, 7, 8 are the most probable dice results and players visit Jail frequently, orange gets landed on most often.",
        es: "Las propiedades naranjas están a 6-9 espacios de la Cárcel. Dado que 6, 7, 8 son los resultados de dados más probables y los jugadores visitan la Cárcel frecuentemente, naranja es el más visitado.",
        de: "Orange Grundstücke sind 6-9 Felder vom Gefängnis entfernt. Da 6, 7, 8 die wahrscheinlichsten Würfelergebnisse sind und Spieler häufig ins Gefängnis kommen, wird orange am häufigsten besucht.",
        nl: "Oranje eigendommen zijn 6-9 vakken van Gevangenis. Omdat 6, 7, 8 de meest waarschijnlijke dobbelsteenresultaten zijn en spelers vaak Gevangenis bezoeken, wordt oranje het vaakst bezocht."
      }
    },
    {
      question: {
        en: "In the official tournament 'short game' variant, what determines the winner?",
        es: "En la variante oficial de 'juego corto' de torneo, ¿qué determina al ganador?",
        de: "In der offiziellen Turnier-'Kurzspiel'-Variante, was bestimmt den Gewinner?",
        nl: "In de officiële toernooi 'kort spel' variant, wat bepaalt de winnaar?"
      },
      options: [
        { en: "First to own 2 complete monopolies", es: "Primero en poseer 2 monopolios completos", de: "Erster mit 2 kompletten Monopolen", nl: "Eerste om 2 complete monopolies te bezitten" },
        { en: "Highest net worth when second player goes bankrupt", es: "Mayor valor neto cuando el segundo jugador quiebra", de: "Höchstes Nettovermögen wenn zweiter Spieler bankrott geht", nl: "Hoogste netto waarde wanneer tweede speler failliet gaat" },
        { en: "Most money after 90 minutes", es: "Más dinero después de 90 minutos", de: "Meistes Geld nach 90 Minuten", nl: "Meeste geld na 90 minuten" },
        { en: "First player to build a hotel", es: "Primer jugador en construir un hotel", de: "Erster Spieler der ein Hotel baut", nl: "Eerste speler om een hotel te bouwen" }
      ],
      correct: 1,
      explanation: {
        en: "In the official short game, when the second player goes bankrupt, the game ends immediately and the richest remaining player (by total asset value) wins.",
        es: "En el juego corto oficial, cuando el segundo jugador quiebra, el juego termina inmediatamente y gana el jugador restante más rico (por valor total de activos).",
        de: "Im offiziellen Kurzspiel endet das Spiel sofort, wenn der zweite Spieler bankrott geht, und der reichste verbleibende Spieler (nach Gesamtvermögenswert) gewinnt.",
        nl: "In het officiële korte spel eindigt het spel onmiddellijk wanneer de tweede speler failliet gaat en wint de rijkste overgebleven speler (op totale vermogenswaarde)."
      }
    },
    {
      question: {
        en: "What auction strategy detail is most commonly violated in casual play?",
        es: "¿Qué detalle de estrategia de subasta se viola más comúnmente en el juego casual?",
        de: "Welches Auktionsstrategiedetail wird im Gelegenheitsspiel am häufigsten verletzt?",
        nl: "Welk veilingstrategiedetail wordt het vaakst geschonden in casual spel?"
      },
      options: [
        { en: "Minimum bid must be $1", es: "La oferta mínima debe ser $1", de: "Mindestgebot muss $1 sein", nl: "Minimum bod moet $1 zijn" },
        { en: "Auctions are mandatory when a property is declined", es: "Las subastas son obligatorias cuando se rechaza una propiedad", de: "Auktionen sind obligatorisch wenn eine Immobilie abgelehnt wird", nl: "Veilingen zijn verplicht wanneer een eigendom wordt geweigerd" },
        { en: "The banker must participate in auctions", es: "El banquero debe participar en subastas", de: "Der Bankier muss an Auktionen teilnehmen", nl: "De bankier moet deelnemen aan veilingen" },
        { en: "Bid increments must be exactly $10", es: "Los incrementos de oferta deben ser exactamente $10", de: "Geboterhöhungen müssen genau $10 sein", nl: "Bod verhogingen moeten precies $10 zijn" }
      ],
      correct: 1,
      explanation: {
        en: "Official rules require that when a player lands on an unowned property and doesn't buy it, it MUST be auctioned immediately. Most casual players skip this rule entirely.",
        es: "Las reglas oficiales requieren que cuando un jugador cae en una propiedad sin dueño y no la compra, DEBE subastarse inmediatamente. La mayoría de jugadores casuales omiten esta regla por completo.",
        de: "Offizielle Regeln verlangen, dass wenn ein Spieler auf einem unbelegten Grundstück landet und es nicht kauft, es SOFORT versteigert werden MUSS. Die meisten Gelegenheitsspieler überspringen diese Regel völlig.",
        nl: "Officiële regels vereisen dat wanneer een speler op een eigendom zonder eigenaar landt en het niet koopt, het ONMIDDELLIJK geveild MOET worden. De meeste casual spelers slaan deze regel volledig over."
      }
    },
    {
      question: {
        en: "What is the 'nuclear strategy' in high-level tournament play?",
        es: "¿Cuál es la 'estrategia nuclear' en el juego de torneo de alto nivel?",
        de: "Was ist die 'Nuklearstrategie' im hochrangigen Turnierspiel?",
        nl: "Wat is de 'nucleaire strategie' in hoog-niveau toernooispel?"
      },
      options: [
        { en: "Buy all 32 houses and never upgrade to hotels", es: "Comprar las 32 casas y nunca mejorar a hoteles", de: "Alle 32 Häuser kaufen und niemals zu Hotels upgraden", nl: "Alle 32 huizen kopen en nooit upgraden naar hotels" },
        { en: "Mortgage everything except one monopoly", es: "Hipotecar todo excepto un monopolio", de: "Alles verpfänden außer einem Monopol", nl: "Alles hypothekeren behalve één monopolie" },
        { en: "Trade to give opponent dark blue monopoly", es: "Negociar para dar al oponente monopolio azul oscuro", de: "Handeln um Gegner dunkelblaues Monopol zu geben", nl: "Ruilen om tegenstander donkerblauw monopolie te geven" },
        { en: "Refuse all trades after first circuit", es: "Rechazar todos los intercambios después del primer circuito", de: "Alle Handel nach erster Runde ablehnen", nl: "Alle ruilen weigeren na eerste ronde" }
      ],
      correct: 0,
      explanation: {
        en: "The 'housing shortage' strategy: buy all 32 houses across your monopolies without upgrading to hotels, preventing opponents from building anything. Extremely effective but controversial.",
        es: "La estrategia de 'escasez de viviendas': comprar las 32 casas en tus monopolios sin mejorar a hoteles, evitando que los oponentes construyan nada. Extremadamente efectivo pero controvertido.",
        de: "Die 'Wohnungsknappheits'-Strategie: alle 32 Häuser über Ihre Monopole kaufen ohne zu Hotels aufzurüsten, verhindert dass Gegner etwas bauen können. Extrem effektiv aber umstritten.",
        nl: "De 'woningtekort' strategie: alle 32 huizen kopen over je monopolies zonder te upgraden naar hotels, wat voorkomt dat tegenstanders iets kunnen bouwen. Extreem effectief maar controversieel."
      }
    },
    {
      question: {
        en: "What is the theoretical minimum number of dice rolls to win Monopoly?",
        es: "¿Cuál es el número teórico mínimo de tiradas de dados para ganar Monopoly?",
        de: "Was ist die theoretische Mindestanzahl von Würfelwürfen, um Monopoly zu gewinnen?",
        nl: "Wat is het theoretische minimum aantal dobbelsteenworpen om Monopoly te winnen?"
      },
      options: [
        { en: "4 rolls", es: "4 tiradas", de: "4 Würfe", nl: "4 worpen" },
        { en: "9 rolls", es: "9 tiradas", de: "9 Würfe", nl: "9 worpen" },
        { en: "21 rolls", es: "21 tiradas", de: "21 Würfe", nl: "21 worpen" },
        { en: "Impossible - no theoretical minimum", es: "Imposible - sin mínimo teórico", de: "Unmöglich - kein theoretisches Minimum", nl: "Onmogelijk - geen theoretisch minimum" }
      ],
      correct: 2,
      explanation: {
        en: "Theoretically 21 rolls: land on all orange/red properties in one circuit using perfect doubles, buy and develop them, opponent lands on developed property and goes bankrupt.",
        es: "Teóricamente 21 tiradas: caer en todas las propiedades naranjas/rojas en un circuito usando dobles perfectos, comprar y desarrollarlas, el oponente cae en propiedad desarrollada y quiebra.",
        de: "Theoretisch 21 Würfe: auf alle orangen/roten Grundstücke in einer Runde mit perfekten Paschs landen, kaufen und entwickeln, Gegner landet auf entwickeltem Grundstück und geht bankrott.",
        nl: "Theoretisch 21 worpen: land op alle oranje/rode eigendommen in één ronde met perfecte dubbels, koop en ontwikkel ze, tegenstander landt op ontwikkeld eigendom en gaat failliet."
      }
    },
    {
      question: {
        en: "What was controversial about the 1973 Monopoly World Championship rules?",
        es: "¿Qué fue controvertido sobre las reglas del Campeonato Mundial de Monopoly de 1973?",
        de: "Was war an den Regeln der Monopoly-Weltmeisterschaft 1973 umstritten?",
        nl: "Wat was controversieel over de Monopoly Wereldkampioenschap regels van 1973?"
      },
      options: [
        { en: "Allowed calculator use", es: "Permitió el uso de calculadora", de: "Erlaubte Taschenrechnernutzung", nl: "Stond calculator gebruik toe" },
        { en: "Players could form alliances", es: "Los jugadores podían formar alianzas", de: "Spieler konnten Allianzen bilden", nl: "Spelers konden allianties vormen" },
        { en: "Introduced time limits on turns", es: "Introdujo límites de tiempo en los turnos", de: "Führte Zeitlimits für Züge ein", nl: "Introduceerde tijdslimieten op beurten" },
        { en: "Allowed immunity deals", es: "Permitió acuerdos de inmunidad", de: "Erlaubte Immunitätsabkommen", nl: "Stond immuniteitsdeals toe" }
      ],
      correct: 3,
      explanation: {
        en: "Early championships allowed 'immunity' agreements where players could trade promises of rent-free landing. This was later banned as it contradicted official 'immediate trade only' rules.",
        es: "Los primeros campeonatos permitían acuerdos de 'inmunidad' donde los jugadores podían intercambiar promesas de aterrizajes sin alquiler. Esto fue prohibido más tarde ya que contradecía las reglas oficiales de 'solo comercio inmediato'.",
        de: "Frühe Meisterschaften erlaubten 'Immunitäts'-Vereinbarungen, bei denen Spieler Versprechen mietfreier Landungen handeln konnten. Dies wurde später verboten, da es gegen offizielle 'nur sofortiger Handel'-Regeln verstieß.",
        nl: "Vroege kampioenschappen stonden 'immuniteits' overeenkomsten toe waarbij spelers beloftes van huurvrije landingen konden ruilen. Dit werd later verboden omdat het in strijd was met officiële 'alleen onmiddellijke ruil' regels."
      }
    },
    {
      question: {
        en: "In the Anti-Monopoly variant, what fundamental rule change occurs?",
        es: "En la variante Anti-Monopoly, ¿qué cambio de regla fundamental ocurre?",
        de: "In der Anti-Monopoly-Variante, welche grundlegende Regeländerung tritt auf?",
        nl: "In de Anti-Monopoly variant, welke fundamentele regelwijziging vindt plaats?"
      },
      options: [
        { en: "Players try to lose money instead of gain it", es: "Los jugadores intentan perder dinero en lugar de ganarlo", de: "Spieler versuchen Geld zu verlieren statt zu gewinnen", nl: "Spelers proberen geld te verliezen in plaats van winnen" },
        { en: "Players choose to be Competitors or Monopolists with different rules", es: "Los jugadores eligen ser Competidores o Monopolistas con reglas diferentes", de: "Spieler wählen Konkurrenten oder Monopolisten mit unterschiedlichen Regeln", nl: "Spelers kiezen om Concurrenten of Monopolisten te zijn met verschillende regels" },
        { en: "Properties are sold at auction only, never purchased", es: "Las propiedades se venden solo en subasta, nunca se compran", de: "Grundstücke werden nur versteigert, niemals gekauft", nl: "Eigendommen worden alleen geveild, nooit gekocht" },
        { en: "The Bank is the enemy trying to bankrupt all players", es: "El Banco es el enemigo tratando de quebrar a todos los jugadores", de: "Die Bank ist der Feind der versucht alle Spieler bankrott zu machen", nl: "De Bank is de vijand die alle spelers failliet probeert te maken" }
      ],
      correct: 1,
      explanation: {
        en: "Anti-Monopoly players choose roles: Competitors (charge fair rent, build cheaper) or Monopolists (charge high rent, build expensive). Different victory conditions for each role.",
        es: "Los jugadores de Anti-Monopoly eligen roles: Competidores (cobran alquiler justo, construyen más barato) o Monopolistas (cobran alquiler alto, construyen caro). Diferentes condiciones de victoria para cada rol.",
        de: "Anti-Monopoly-Spieler wählen Rollen: Konkurrenten (faire Miete, billiger bauen) oder Monopolisten (hohe Miete, teurer bauen). Unterschiedliche Siegbedingungen für jede Rolle.",
        nl: "Anti-Monopoly spelers kiezen rollen: Concurrenten (eerlijke huur vragen, goedkoper bouwen) of Monopolisten (hoge huur vragen, duur bouwen). Verschillende overwinningsvoorwaarden voor elke rol."
      }
    },
    {
      question: {
        en: "What economic phenomenon does extended Monopoly gameplay demonstrate?",
        es: "¿Qué fenómeno económico demuestra el juego extendido de Monopoly?",
        de: "Welches wirtschaftliche Phänomen demonstriert langes Monopoly-Spiel?",
        nl: "Welk economisch fenomeen demonstreert uitgebreid Monopoly spel?"
      },
      options: [
        { en: "Inflation and currency devaluation", es: "Inflación y devaluación de la moneda", de: "Inflation und Währungsabwertung", nl: "Inflatie en valuta devaluatie" },
        { en: "Wealth concentration and market monopolization", es: "Concentración de riqueza y monopolización del mercado", de: "Vermögenskonzentration und Marktmonopolisierung", nl: "Vermogensconcentratie en marktmonopolisatie" },
        { en: "Keynesian economic cycles", es: "Ciclos económicos keynesianos", de: "Keynesianische Wirtschaftszyklen", nl: "Keynesiaanse economische cycli" },
        { en: "Supply and demand equilibrium", es: "Equilibrio de oferta y demanda", de: "Angebot und Nachfrage Gleichgewicht", nl: "Aanbod en vraag evenwicht" }
      ],
      correct: 1,
      explanation: {
        en: "Monopoly demonstrates wealth concentration: early advantages compound, leading to inevitable winner-take-all outcome. This mirrors real-world monopolization concerns Elizabeth Magie wanted to highlight.",
        es: "Monopoly demuestra la concentración de riqueza: las ventajas tempranas se acumulan, llevando a un resultado inevitable de ganador-se-lleva-todo. Esto refleja las preocupaciones de monopolización del mundo real que Elizabeth Magie quería resaltar.",
        de: "Monopoly demonstriert Vermögenskonzentration: frühe Vorteile verstärken sich und führen zu unvermeidlichem Winner-takes-all-Ergebnis. Dies spiegelt reale Monopolisierungsbedenken wider, die Elizabeth Magie hervorheben wollte.",
        nl: "Monopoly demonstreert vermogensconcentratie: vroege voordelen versterken elkaar, wat leidt tot onvermijdelijk winner-takes-all resultaat. Dit weerspiegelt zorgen over monopolisatie in de echte wereld die Elizabeth Magie wilde benadrukken."
      }
    },
    {
      question: {
        en: "What mathematical distribution best models Monopoly property landing frequencies?",
        es: "¿Qué distribución matemática modela mejor las frecuencias de caída en propiedades de Monopoly?",
        de: "Welche mathematische Verteilung modelliert am besten die Monopoly-Grundstücks-Landefrequenzen?",
        nl: "Welke mathematische distributie modelleert Monopoly eigendom landingfrequenties het beste?"
      },
      options: [
        { en: "Uniform distribution - all equally likely", es: "Distribución uniforme - todas igualmente probables", de: "Gleichverteilung - alle gleich wahrscheinlich", nl: "Uniforme distributie - allemaal even waarschijnlijk" },
        { en: "Normal distribution centered on reds/oranges", es: "Distribución normal centrada en rojos/naranjas", de: "Normalverteilung zentriert auf Rot/Orange", nl: "Normale distributie gecentreerd op rood/oranje" },
        { en: "Markov chain steady-state distribution", es: "Distribución de estado estacionario de cadena de Markov", de: "Markov-Ketten-Steady-State-Verteilung", nl: "Markov keten steady-state distributie" },
        { en: "Exponential decay from GO", es: "Decaimiento exponencial desde SALIDA", de: "Exponentieller Abfall von LOS", nl: "Exponentiële afname van START" }
      ],
      correct: 2,
      explanation: {
        en: "Monopoly landing frequencies follow a Markov chain steady-state distribution, accounting for dice probabilities, Jail, and card movements. This creates the characteristic orange/red peaks.",
        es: "Las frecuencias de caída de Monopoly siguen una distribución de estado estacionario de cadena de Markov, teniendo en cuenta las probabilidades de dados, la Cárcel y los movimientos de cartas. Esto crea los picos característicos de naranja/rojo.",
        de: "Monopoly-Landefrequenzen folgen einer Markov-Ketten-Steady-State-Verteilung unter Berücksichtigung von Würfelwahrscheinlichkeiten, Gefängnis und Kartenbewegungen. Dies erzeugt die charakteristischen Orange/Rot-Spitzen.",
        nl: "Monopoly landingfrequenties volgen een Markov keten steady-state distributie, rekening houdend met dobbelsteenwaarschijnlijkheden, Gevangenis en kaartbewegingen. Dit creëert de karakteristieke oranje/rode pieken."
      }
    },
    {
      question: {
        en: "What is the official Monopoly rule regarding 'kingmaking' in multi-player elimination?",
        es: "¿Cuál es la regla oficial de Monopoly sobre 'hacer rey' en eliminación multijugador?",
        de: "Was ist die offizielle Monopoly-Regel bezüglich 'Königsmacher' in Multi-Spieler-Elimination?",
        nl: "Wat is de officiële Monopoly regel met betrekking tot 'kingmaking' in multi-speler eliminatie?"
      },
      options: [
        { en: "Bankrupted player chooses who gets their assets", es: "El jugador en bancarrota elige quién obtiene sus activos", de: "Bankrotter Spieler wählt wer seine Vermögenswerte erhält", nl: "Failliete speler kiest wie hun bezittingen krijgt" },
        { en: "Assets go to the player who bankrupted them", es: "Los activos van al jugador que los llevó a la bancarrota", de: "Vermögenswerte gehen an den Spieler der sie bankrott machte", nl: "Bezittingen gaan naar de speler die hen failliet maakte" },
        { en: "All assets return to bank and are auctioned", es: "Todos los activos vuelven al banco y se subastan", de: "Alle Vermögenswerte gehen zurück an die Bank und werden versteigert", nl: "Alle bezittingen keren terug naar de bank en worden geveild" },
        { en: "Assets are distributed evenly among remaining players", es: "Los activos se distribuyen equitativamente entre los jugadores restantes", de: "Vermögenswerte werden gleichmäßig auf verbleibende Spieler verteilt", nl: "Bezittingen worden gelijkmatig verdeeld onder resterende spelers" }
      ],
      correct: 1,
      explanation: {
        en: "Official rules: when a player goes bankrupt to another player (not the Bank), that player receives ALL their properties, preventing strategic 'kingmaking' gift transfers.",
        es: "Reglas oficiales: cuando un jugador quiebra ante otro jugador (no el Banco), ese jugador recibe TODAS sus propiedades, evitando transferencias estratégicas de 'hacer rey'.",
        de: "Offizielle Regeln: wenn ein Spieler gegenüber einem anderen Spieler (nicht der Bank) bankrott geht, erhält dieser Spieler ALLE ihre Grundstücke, verhindert strategische 'Königsmacher'-Geschenktransfers.",
        nl: "Officiële regels: wanneer een speler failliet gaat bij een andere speler (niet de Bank), ontvangt die speler ALLE hun eigendommen, wat strategische 'kingmaking' geschenkoverdrachten voorkomt."
      }
    },
    {
      question: {
        en: "What computer science algorithm most efficiently solves optimal Monopoly strategy?",
        es: "¿Qué algoritmo de informática resuelve más eficientemente la estrategia óptima de Monopoly?",
        de: "Welcher Informatik-Algorithmus löst die optimale Monopoly-Strategie am effizientesten?",
        nl: "Welk computer wetenschap algoritme lost optimale Monopoly strategie het meest efficiënt op?"
      },
      options: [
        { en: "Minimax with alpha-beta pruning", es: "Minimax con poda alfa-beta", de: "Minimax mit Alpha-Beta-Beschneidung", nl: "Minimax met alpha-beta snoeiing" },
        { en: "Monte Carlo tree search (MCTS)", es: "Búsqueda de árbol Monte Carlo (MCTS)", de: "Monte-Carlo-Baumsuche (MCTS)", nl: "Monte Carlo boom zoeken (MCTS)" },
        { en: "Genetic algorithms", es: "Algoritmos genéticos", de: "Genetische Algorithmen", nl: "Genetische algoritmes" },
        { en: "Reinforcement learning with neural nets", es: "Aprendizaje por refuerzo con redes neuronales", de: "Verstärkungslernen mit neuronalen Netzen", nl: "Versterkend leren met neurale netwerken" }
      ],
      correct: 1,
      explanation: {
        en: "Monte Carlo tree search efficiently handles Monopoly's stochastic elements (dice), large state space, and complex trading decisions. AlphaGo-style approaches have been applied to Monopoly AI.",
        es: "La búsqueda de árbol Monte Carlo maneja eficientemente los elementos estocásticos de Monopoly (dados), gran espacio de estados y decisiones comerciales complejas. Los enfoques estilo AlphaGo se han aplicado a la IA de Monopoly.",
        de: "Monte-Carlo-Baumsuche behandelt effizient Monopolys stochastische Elemente (Würfel), großen Zustandsraum und komplexe Handelsentscheidungen. AlphaGo-artige Ansätze wurden auf Monopoly-KI angewendet.",
        nl: "Monte Carlo boom zoeken handelt efficiënt Monopoly's stochastische elementen (dobbelstenen), grote toestandsruimte en complexe handelsbeslissingen. AlphaGo-stijl benaderingen zijn toegepast op Monopoly AI."
      }
    },
    {
      question: {
        en: "What is the 'expected value crossover point' in property development?",
        es: "¿Qué es el 'punto de cruce de valor esperado' en el desarrollo de propiedades?",
        de: "Was ist der 'Erwartungswert-Kreuzungspunkt' in der Grundstücksentwicklung?",
        nl: "Wat is het 'verwachte waarde kruispunt' in eigendom ontwikkeling?"
      },
      options: [
        { en: "When rent income equals development cost", es: "Cuando el ingreso de alquiler iguala el costo de desarrollo", de: "Wenn Mieteinnahmen Entwicklungskosten entsprechen", nl: "Wanneer huurinkomsten ontwikkelingskosten gelijk zijn" },
        { en: "Number of landings needed to recover investment", es: "Número de caídas necesarias para recuperar inversión", de: "Anzahl der Landungen benötigt um Investition zurückzugewinnen", nl: "Aantal landingen nodig om investering terug te verdienen" },
        { en: "Game turn where building becomes more profitable than cash hoarding", es: "Turno del juego donde construir se vuelve más rentable que acumular efectivo", de: "Spielrunde wo Bauen profitabler wird als Bargeld horten", nl: "Spelbeurt waar bouwen winstgevender wordt dan cash hamsteren" },
        { en: "Property value equilibrium point", es: "Punto de equilibrio del valor de la propiedad", de: "Grundstückswert Gleichgewichtspunkt", nl: "Eigendomswaarde evenwichtspunt" }
      ],
      correct: 2,
      explanation: {
        en: "Crossover point occurs ~circuit 3-4 when opportunity cost of not building (lost rent income) exceeds risk of cash depletion. Statistical modeling shows this inflection point determines building timing.",
        es: "El punto de cruce ocurre ~circuito 3-4 cuando el costo de oportunidad de no construir (ingresos de alquiler perdidos) excede el riesgo de agotamiento de efectivo. El modelado estadístico muestra que este punto de inflexión determina el momento de construcción.",
        de: "Kreuzungspunkt tritt ~Umrundung 3-4 auf wenn Opportunitätskosten des Nicht-Bauens (verlorene Mieteinnahmen) Risiko der Bargelderschöpfung übersteigen. Statistische Modellierung zeigt dieser Wendepunkt bestimmt Bauzeitpunkt.",
        nl: "Kruispunt treedt op ~ronde 3-4 wanneer opportuniteitskosten van niet bouwen (verloren huurinkomsten) risico van cash uitputting overstijgen. Statistische modellering toont dit keerpunt bepaalt bouwtiming."
      }
    },
    {
      question: {
        en: "What is the 'property set efficiency index' used in computational analysis?",
        es: "¿Qué es el 'índice de eficiencia del conjunto de propiedades' usado en análisis computacional?",
        de: "Was ist der 'Grundstückssatz-Effizienzindex' in der computergestützten Analyse?",
        nl: "Wat is de 'eigendomsset efficiëntie index' gebruikt in computationele analyse?"
      },
      options: [
        { en: "(Total rent potential × landing frequency) ÷ (purchase cost + max development cost)", es: "(Potencial de alquiler total × frecuencia de caída) ÷ (costo de compra + costo máximo de desarrollo)", de: "(Gesamtmietpotenzial × Landefrequenz) ÷ (Kaufkosten + maximale Entwicklungskosten)", nl: "(Totale huur potentieel × landingsfrequentie) ÷ (aankoopkosten + maximale ontwikkelingskosten)" },
        { en: "Number of properties × average rent", es: "Número de propiedades × alquiler promedio", de: "Anzahl der Grundstücke × durchschnittliche Miete", nl: "Aantal eigendommen × gemiddelde huur" },
        { en: "Property value divided by board position", es: "Valor de propiedad dividido por posición del tablero", de: "Grundstückswert geteilt durch Brettposition", nl: "Eigendomswaarde gedeeld door bordpositie" },
        { en: "Development cost minus cash reserves", es: "Costo de desarrollo menos reservas de efectivo", de: "Entwicklungskosten minus Bargeldreserven", nl: "Ontwikkelingskosten min cash reserves" }
      ],
      correct: 0,
      explanation: {
        en: "Property set efficiency index formula quantifies ROI accounting for probability. Orange monopoly scores ~0.92, dark blue ~0.31. Used in Monte Carlo simulations to weight trade decisions.",
        es: "La fórmula del índice de eficiencia del conjunto de propiedades cuantifica el ROI teniendo en cuenta la probabilidad. El monopolio naranja puntúa ~0.92, azul oscuro ~0.31. Usado en simulaciones Monte Carlo para ponderar decisiones comerciales.",
        de: "Grundstückssatz-Effizienzindex-Formel quantifiziert ROI unter Berücksichtigung der Wahrscheinlichkeit. Oranges Monopol erzielt ~0.92, dunkelblau ~0.31. Verwendet in Monte-Carlo-Simulationen um Handelsentscheidungen zu gewichten.",
        nl: "Eigendomsset efficiëntie index formule kwantificeert ROI rekening houdend met waarschijnlijkheid. Oranje monopolie scoort ~0.92, donkerblauw ~0.31. Gebruikt in Monte Carlo simulaties om handelsbeslissingen te wegen."
      }
    },
    {
      question: {
        en: "What Nash equilibrium exists in 2-player Monopoly with perfect information?",
        es: "¿Qué equilibrio de Nash existe en Monopoly de 2 jugadores con información perfecta?",
        de: "Welches Nash-Gleichgewicht existiert in 2-Spieler-Monopoly mit perfekter Information?",
        nl: "Welk Nash evenwicht bestaat in 2-speler Monopoly met perfecte informatie?"
      },
      options: [
        { en: "Both players refuse all trades (trade deadlock)", es: "Ambos jugadores rechazan todos los intercambios (punto muerto comercial)", de: "Beide Spieler lehnen alle Handel ab (Handels-Deadlock)", nl: "Beide spelers weigeren alle ruilen (ruil impasse)" },
        { en: "Both players trade immediately for first monopoly", es: "Ambos jugadores negocian inmediatamente por el primer monopolio", de: "Beide Spieler handeln sofort für erstes Monopol", nl: "Beide spelers ruilen onmiddellijk voor eerste monopolie" },
        { en: "No pure strategy equilibrium exists - mixed strategy required", es: "No existe equilibrio de estrategia pura - se requiere estrategia mixta", de: "Kein reines Strategie-Gleichgewicht existiert - gemischte Strategie erforderlich", nl: "Geen pure strategie evenwicht bestaat - gemengde strategie vereist" },
        { en: "Both players maximize property acquisition", es: "Ambos jugadores maximizan la adquisición de propiedades", de: "Beide Spieler maximieren Grundstückserwerb", nl: "Beide spelers maximaliseren eigendomsverwerving" }
      ],
      correct: 2,
      explanation: {
        en: "Game theory analysis shows no pure Nash equilibrium in 2-player Monopoly: any deterministic strategy can be exploited. Optimal play requires mixed strategies with probabilistic decisions.",
        es: "El análisis de teoría de juegos muestra que no hay equilibrio de Nash puro en Monopoly de 2 jugadores: cualquier estrategia determinista puede ser explotada. El juego óptimo requiere estrategias mixtas con decisiones probabilísticas.",
        de: "Spieltheorie-Analyse zeigt kein reines Nash-Gleichgewicht in 2-Spieler-Monopoly: jede deterministische Strategie kann ausgenutzt werden. Optimales Spiel erfordert gemischte Strategien mit probabilistischen Entscheidungen.",
        nl: "Speltheorie analyse toont geen pure Nash evenwicht in 2-speler Monopoly: elke deterministische strategie kan geëxploiteerd worden. Optimaal spel vereist gemengde strategieën met probabilistische beslissingen."
      }
    },
    {
      question: {
        en: "What is the 'volatility coefficient' in championship Monopoly analysis?",
        es: "¿Qué es el 'coeficiente de volatilidad' en el análisis de Monopoly de campeonato?",
        de: "Was ist der 'Volatilitätskoeffizient' in der Meisterschafts-Monopoly-Analyse?",
        nl: "Wat is de 'volatiliteits coëfficiënt' in kampioenschap Monopoly analyse?"
      },
      options: [
        { en: "Measure of cash flow variance between game circuits", es: "Medida de varianza de flujo de efectivo entre circuitos del juego", de: "Maß der Cashflow-Varianz zwischen Spielumrundungen", nl: "Maat van cashflow variantie tussen spelrondes" },
        { en: "Probability of sudden bankruptcy events", es: "Probabilidad de eventos de quiebra repentinos", de: "Wahrscheinlichkeit plötzlicher Bankrottereignisse", nl: "Waarschijnlijkheid van plotselinge faillissementsevenementen" },
        { en: "Dice roll outcome deviation", es: "Desviación del resultado de la tirada de dados", de: "Würfelwurf-Ergebnis-Abweichung", nl: "Dobbelsteenworp uitkomst deviatie" },
        { en: "Standard deviation of property landing rates", es: "Desviación estándar de las tasas de caída de propiedades", de: "Standardabweichung der Grundstücks-Landeraten", nl: "Standaarddeviatie van eigendom landingspercentages" }
      ],
      correct: 1,
      explanation: {
        en: "Volatility coefficient quantifies bankruptcy risk based on cash reserves vs developed property exposure. High volatility (>0.7) indicates vulnerable position requiring conservative strategy.",
        es: "El coeficiente de volatilidad cuantifica el riesgo de quiebra basado en reservas de efectivo vs exposición de propiedades desarrolladas. Alta volatilidad (>0.7) indica posición vulnerable que requiere estrategia conservadora.",
        de: "Volatilitätskoeffizient quantifiziert Bankrottrisiko basierend auf Bargeldreserven vs entwickelte Grundstücksexposition. Hohe Volatilität (>0.7) zeigt verwundbare Position an die konservative Strategie erfordert.",
        nl: "Volatiliteits coëfficiënt kwantificeert faillissementsrisico gebaseerd op cash reserves vs ontwikkelde eigendom blootstelling. Hoge volatiliteit (>0.7) duidt kwetsbare positie aan die conservatieve strategie vereist."
      }
    },
    {
      question: {
        en: "What is the theoretical 'branching factor' of Monopoly's game tree?",
        es: "¿Cuál es el 'factor de ramificación' teórico del árbol de juego de Monopoly?",
        de: "Was ist der theoretische 'Verzweigungsfaktor' des Monopoly-Spielbaums?",
        nl: "Wat is de theoretische 'vertakkingsfactor' van Monopoly's spelboom?"
      },
      options: [
        { en: "~10² (100 possible moves per turn)", es: "~10² (100 movimientos posibles por turno)", de: "~10² (100 mögliche Züge pro Runde)", nl: "~10² (100 mogelijke zetten per beurt)" },
        { en: "~10⁴ (10,000 possible moves per turn)", es: "~10⁴ (10,000 movimientos posibles por turno)", de: "~10⁴ (10,000 mögliche Züge pro Runde)", nl: "~10⁴ (10,000 mogelijke zetten per beurt)" },
        { en: "~10⁶ (1 million possible moves per turn)", es: "~10⁶ (1 millón de movimientos posibles por turno)", de: "~10⁶ (1 Million mögliche Züge pro Runde)", nl: "~10⁶ (1 miljoen mogelijke zetten per beurt)" },
        { en: "~10⁸ (100 million possible moves per turn)", es: "~10⁸ (100 millones de movimientos posibles por turno)", de: "~10⁸ (100 Millionen mögliche Züge pro Runde)", nl: "~10⁸ (100 miljoen mogelijke zetten per beurt)" }
      ],
      correct: 2,
      explanation: {
        en: "Monopoly's branching factor is ~10⁶ due to dice combinations (36), property purchase/auction decisions (~10²), building choices (~10²), and trade possibilities (~10²). This makes brute-force solving computationally intractable.",
        es: "El factor de ramificación de Monopoly es ~10⁶ debido a combinaciones de dados (36), decisiones de compra/subasta de propiedades (~10²), opciones de construcción (~10²) y posibilidades de intercambio (~10²). Esto hace que la resolución por fuerza bruta sea computacionalmente intratable.",
        de: "Monopolys Verzweigungsfaktor ist ~10⁶ aufgrund von Würfelkombinationen (36), Grundstückskauf-/Auktionsentscheidungen (~10²), Bauoptionen (~10²) und Handelsmöglichkeiten (~10²). Dies macht Brute-Force-Lösung computergestützt nicht praktikabel.",
        nl: "Monopoly's vertakkingsfactor is ~10⁶ vanwege dobbelsteencombinaties (36), eigendom aankoop/veiling beslissingen (~10²), bouwkeuzes (~10²) en ruil mogelijkheden (~10²). Dit maakt brute-force oplossen computationeel onhaalbaar."
      }
    },
    {
      question: {
        en: "What paradox exists in Monopoly's 'optimality vs exploitability' trade-off?",
        es: "¿Qué paradoja existe en el equilibrio 'optimalidad vs explotabilidad' de Monopoly?",
        de: "Welches Paradoxon existiert im Monopoly-'Optimalität vs Ausnutzbarkeit'-Kompromiss?",
        nl: "Welke paradox bestaat in Monopoly's 'optimaliteit vs exploiteerbaarheid' afweging?"
      },
      options: [
        { en: "Optimal strategy against perfect play loses to suboptimal exploitation strategy", es: "Estrategia óptima contra juego perfecto pierde ante estrategia de explotación subóptima", de: "Optimale Strategie gegen perfektes Spiel verliert gegen suboptimale Ausbeutungsstrategie", nl: "Optimale strategie tegen perfect spel verliest tegen suboptimale exploitatie strategie" },
        { en: "Game-theoretically optimal play requires intentionally irrational moves", es: "Juego teóricamente óptimo requiere movimientos intencionalmente irracionales", de: "Spieltheoretisch optimales Spiel erfordert absichtlich irrationale Züge", nl: "Speltheoretisch optimaal spel vereist opzettelijk irrationele zetten" },
        { en: "Maximally exploitative strategy is itself maximally exploitable", es: "Estrategia máximamente explotadora es en sí misma máximamente explotable", de: "Maximal ausbeuterische Strategie ist selbst maximal ausnutzbar", nl: "Maximaal exploiterende strategie is zelf maximaal exploiteerbaar" },
        { en: "No paradox exists - optimal play always wins", es: "No existe paradoja - el juego óptimo siempre gana", de: "Kein Paradoxon existiert - optimales Spiel gewinnt immer", nl: "Geen paradox bestaat - optimaal spel wint altijd" }
      ],
      correct: 2,
      explanation: {
        en: "Exploitability paradox: aggressive exploitation strategy (targeting weak opponents) creates vulnerabilities exploitable by third players. Optimal tournament play balances exploitation with defensive positioning.",
        es: "Paradoja de explotabilidad: estrategia de explotación agresiva (apuntar a oponentes débiles) crea vulnerabilidades explotables por terceros jugadores. El juego óptimo de torneo equilibra la explotación con el posicionamiento defensivo.",
        de: "Ausnutzbarkeitsparadoxon: aggressive Ausbeutungsstrategie (Schwache Gegner anvisieren) schafft Schwachstellen die von dritten Spielern ausnutzbar sind. Optimales Turnierspiel balanciert Ausbeutung mit defensiver Positionierung.",
        nl: "Exploiteerbaarheid paradox: agressieve exploitatie strategie (zwakke tegenstanders targeten) creëert kwetsbaarheden exploiteerbaar door derde spelers. Optimaal toernooispel balanceert exploitatie met defensieve positionering."
      }
    },
    {
      question: {
        en: "What is the 'information asymmetry index' in tournament analysis?",
        es: "¿Qué es el 'índice de asimetría de información' en el análisis de torneo?",
        de: "Was ist der 'Informationsasymmetrie-Index' in der Turnieranalyse?",
        nl: "Wat is de 'informatie asymmetrie index' in toernooi analyse?"
      },
      options: [
        { en: "Measure of hidden cash/property information between players", es: "Medida de información de efectivo/propiedad oculta entre jugadores", de: "Maß für versteckte Bargeld-/Grundstücksinformationen zwischen Spielern", nl: "Maat van verborgen cash/eigendom informatie tussen spelers" },
        { en: "Advantage gained from tracking opponent cash flows vs public information", es: "Ventaja obtenida del seguimiento de flujos de efectivo del oponente vs información pública", de: "Vorteil aus Verfolgung der Gegner-Cashflows vs öffentliche Informationen", nl: "Voordeel verkregen van volgen tegenstander cashflows vs publieke informatie" },
        { en: "Difference in dice probability knowledge", es: "Diferencia en el conocimiento de probabilidad de dados", de: "Unterschied im Würfelwahrscheinlichkeitswissen", nl: "Verschil in dobbelsteenwaarschijnlijkheid kennis" },
        { en: "Card counting advantage in Chance/Community Chest", es: "Ventaja de contar cartas en Suerte/Caja de Comunidad", de: "Kartenzählvorteil bei Ereignis/Gemeinschaftskarten", nl: "Kaarten tellen voordeel in Kans/Algemeen Fonds" }
      ],
      correct: 1,
      explanation: {
        en: "Information asymmetry index quantifies advantage from mentally tracking opponent expenses/income vs relying only on visible property holdings. Elite players maintain ~15-20% accuracy advantage through cash flow analysis.",
        es: "El índice de asimetría de información cuantifica la ventaja de rastrear mentalmente los gastos/ingresos del oponente vs confiar solo en las tenencias de propiedad visibles. Los jugadores de élite mantienen ~15-20% de ventaja de precisión a través del análisis de flujo de efectivo.",
        de: "Informationsasymmetrie-Index quantifiziert Vorteil aus mentalem Verfolgen von Gegner-Ausgaben/Einkommen vs nur auf sichtbare Grundstücksbestände vertrauen. Elite-Spieler behalten ~15-20% Genauigkeitsvorteil durch Cashflow-Analyse.",
        nl: "Informatie asymmetrie index kwantificeert voordeel van mentaal volgen tegenstander uitgaven/inkomsten vs alleen vertrouwen op zichtbare eigendomsbezit. Elite spelers behouden ~15-20% nauwkeurigheid voordeel door cashflow analyse."
      }
    },
    {
      question: {
        en: "What is the 'endgame horizon' threshold in computational Monopoly?",
        es: "¿Qué es el umbral del 'horizonte de final de juego' en Monopoly computacional?",
        de: "Was ist die 'Endspiel-Horizont'-Schwelle in computergestütztem Monopoly?",
        nl: "Wat is de 'eindspel horizon' drempel in computationeel Monopoly?"
      },
      options: [
        { en: "Circuit number when <3 players remain", es: "Número de circuito cuando quedan <3 jugadores", de: "Umrundungsnummer wenn <3 Spieler verbleiben", nl: "Ronde nummer wanneer <3 spelers overblijven" },
        { en: "Point where deterministic outcome is 95%+ predictable", es: "Punto donde el resultado determinista es 95%+ predecible", de: "Punkt wo deterministisches Ergebnis 95%+ vorhersagbar ist", nl: "Punt waar deterministisch resultaat 95%+ voorspelbaar is" },
        { en: "When all properties are owned and developed", es: "Cuando todas las propiedades son poseídas y desarrolladas", de: "Wenn alle Grundstücke besessen und entwickelt sind", nl: "Wanneer alle eigendommen bezeten en ontwikkeld zijn" },
        { en: "Final 10 turns of regulation play", es: "Últimos 10 turnos del juego de reglamento", de: "Letzte 10 Runden des Regelspiels", nl: "Laatste 10 beurten van regulatie spel" }
      ],
      correct: 1,
      explanation: {
        en: "Endgame horizon occurs when winner is 95%+ determinable from current state. Monte Carlo simulations can calculate exact turn number based on development levels, cash positions, and positional equity.",
        es: "El horizonte de final de juego ocurre cuando el ganador es 95%+ determinable desde el estado actual. Las simulaciones Monte Carlo pueden calcular el número exacto de turno basado en niveles de desarrollo, posiciones de efectivo y equidad posicional.",
        de: "Endspiel-Horizont tritt auf wenn Gewinner 95%+ aus aktuellem Zustand bestimmbar ist. Monte-Carlo-Simulationen können exakte Rundennummer basierend auf Entwicklungsniveaus, Bargeldpositionen und Positions-Equity berechnen.",
        nl: "Eindspel horizon treedt op wanneer winnaar 95%+ bepaalbaar is vanuit huidige staat. Monte Carlo simulaties kunnen exacte beurt nummer berekenen gebaseerd op ontwikkelingsniveaus, cash posities en positionele equity."
      }
    },
    {
      question: {
        en: "What is the 'collusion resistance index' in multi-player tournament formats?",
        es: "¿Qué es el 'índice de resistencia a la colusión' en formatos de torneo multijugador?",
        de: "Was ist der 'Kollusions-Resistenz-Index' in Multi-Spieler-Turnierformaten?",
        nl: "Wat is de 'samenzwering weerstand index' in multi-speler toernooi formaten?"
      },
      options: [
        { en: "Measure of rules preventing player alliances", es: "Medida de reglas que previenen alianzas de jugadores", de: "Maß für Regeln die Spielerallianzen verhindern", nl: "Maat van regels die speler allianties voorkomen" },
        { en: "Game-theoretic metric showing collusion profitability vs individual optimization", es: "Métrica teórica del juego que muestra rentabilidad de colusión vs optimización individual", de: "Spieltheoretische Metrik die Kollusions-Rentabilität vs individuelle Optimierung zeigt", nl: "Speltheoretische metriek die samenzwering winstgevendheid vs individuele optimalisatie toont" },
        { en: "Tournament structure rating for fair play", es: "Calificación de estructura de torneo para juego limpio", de: "Turnierstruktur-Bewertung für faires Spiel", nl: "Toernooi structuur beoordeling voor eerlijk spel" },
        { en: "Player honesty assessment score", es: "Puntuación de evaluación de honestidad del jugador", de: "Spieler-Ehrlichkeits-Bewertungspunktzahl", nl: "Speler eerlijkheid beoordelingsscore" }
      ],
      correct: 1,
      explanation: {
        en: "Collusion resistance quantifies when colluding (coordinating trades/targeting) provides less expected value than individual rational play. High-level tournaments structure scoring to maximize this metric.",
        es: "La resistencia a la colusión cuantifica cuándo coludir (coordinar intercambios/apuntar) proporciona menos valor esperado que el juego racional individual. Los torneos de alto nivel estructuran la puntuación para maximizar esta métrica.",
        de: "Kollusions-Resistenz quantifiziert wenn Kolludieren (Handel/Anvisieren koordinieren) weniger Erwartungswert bietet als individuelles rationales Spiel. Hochrangige Turniere strukturieren Wertung um diese Metrik zu maximieren.",
        nl: "Samenzwering weerstand kwantificeert wanneer samenzweren (ruilen/targeten coördineren) minder verwachte waarde biedt dan individueel rationeel spel. Hoog-niveau toernooien structureren scoring om deze metriek te maximaliseren."
      }
    },
    {
      question: {
        en: "What is the 'Kelly criterion' application in Monopoly bankroll management?",
        es: "¿Qué es la aplicación del 'criterio de Kelly' en la gestión de capital de Monopoly?",
        de: "Was ist die 'Kelly-Kriterium'-Anwendung in Monopoly-Kapitalverwaltung?",
        nl: "Wat is de 'Kelly criterium' toepassing in Monopoly bankroll beheer?"
      },
      options: [
        { en: "Never risk more than 10% of cash on single property", es: "Nunca arriesgar más del 10% de efectivo en una sola propiedad", de: "Niemals mehr als 10% Bargeld für einzelnes Grundstück riskieren", nl: "Nooit meer dan 10% cash riskeren op enkel eigendom" },
        { en: "Optimal fraction of bankroll to invest = (edge × rent) ÷ (cost variance)", es: "Fracción óptima del capital para invertir = (ventaja × alquiler) ÷ (varianza del costo)", de: "Optimaler Anteil des Kapitals zu investieren = (Vorteil × Miete) ÷ (Kostenvarianz)", nl: "Optimale fractie van bankroll om te investeren = (voordeel × huur) ÷ (kosten variantie)" },
        { en: "Maintain cash reserves equal to highest opponent rent", es: "Mantener reservas de efectivo iguales al alquiler más alto del oponente", de: "Bargeldreserven gleich höchster Gegnermiete halten", nl: "Cash reserves gelijk aan hoogste tegenstander huur behouden" },
        { en: "Spend all available cash immediately", es: "Gastar todo el efectivo disponible inmediatamente", de: "Alles verfügbare Bargeld sofort ausgeben", nl: "Alle beschikbare cash onmiddellijk uitgeven" }
      ],
      correct: 1,
      explanation: {
        en: "Kelly criterion adaptation for Monopoly: optimal investment fraction = (probability advantage × expected rent) ÷ (development cost variance). Maximizes long-run bankroll growth while avoiding bankruptcy.",
        es: "Adaptación del criterio de Kelly para Monopoly: fracción de inversión óptima = (ventaja de probabilidad × alquiler esperado) ÷ (varianza del costo de desarrollo). Maximiza el crecimiento del capital a largo plazo evitando la quiebra.",
        de: "Kelly-Kriterium-Anpassung für Monopoly: optimaler Investitionsanteil = (Wahrscheinlichkeitsvorteil × erwartete Miete) ÷ (Entwicklungskostenvarianz). Maximiert langfristiges Kapitalwachstum während Bankrott vermieden wird.",
        nl: "Kelly criterium aanpassing voor Monopoly: optimale investering fractie = (waarschijnlijkheid voordeel × verwachte huur) ÷ (ontwikkelingskosten variantie). Maximaliseert lange-termijn bankroll groei terwijl faillissement vermeden wordt."
      }
    },
    {
      question: {
        en: "What is the 'tempo advantage' metric in competitive Monopoly theory?",
        es: "¿Qué es la métrica de 'ventaja de tempo' en la teoría competitiva de Monopoly?",
        de: "Was ist die 'Tempo-Vorteil'-Metrik in der Wettbewerbs-Monopoly-Theorie?",
        nl: "Wat is de 'tempo voordeel' metriek in competitieve Monopoly theorie?"
      },
      options: [
        { en: "Number of turns ahead in property acquisition", es: "Número de turnos adelante en adquisición de propiedades", de: "Anzahl der Runden voraus im Grundstückserwerb", nl: "Aantal beurten vooruit in eigendomsverwerving" },
        { en: "Circuits required to reach development parity with opponents", es: "Circuitos requeridos para alcanzar paridad de desarrollo con oponentes", de: "Umrundungen benötigt um Entwicklungsparität mit Gegnern zu erreichen", nl: "Rondes vereist om ontwikkelings pariteit met tegenstanders te bereiken" },
        { en: "Speed of completing first monopoly vs opponent monopoly completion", es: "Velocidad de completar primer monopolio vs completación de monopolio del oponente", de: "Geschwindigkeit des Vervollständigens ersten Monopols vs Gegner-Monopol-Vervollständigung", nl: "Snelheid van voltooien eerste monopolie vs tegenstander monopolie voltooiing" },
        { en: "Rate of cash generation from properties", es: "Tasa de generación de efectivo de propiedades", de: "Rate der Bargeldgenerierung aus Grundstücken", nl: "Snelheid van cash generatie van eigendommen" }
      ],
      correct: 2,
      explanation: {
        en: "Tempo advantage = (your circuits to first developed monopoly) - (opponent's circuits to their first). Negative tempo (getting monopoly first) correlates with 65%+ win rate in tournament play.",
        es: "Ventaja de tempo = (tus circuitos hasta el primer monopolio desarrollado) - (circuitos del oponente hasta su primero). Tempo negativo (obtener monopolio primero) se correlaciona con 65%+ de tasa de victoria en juego de torneo.",
        de: "Tempo-Vorteil = (Ihre Umrundungen bis erstes entwickeltes Monopol) - (Gegner-Umrundungen bis zu ihrem ersten). Negatives Tempo (Monopol zuerst bekommen) korreliert mit 65%+ Gewinnrate im Turnierspiel.",
        nl: "Tempo voordeel = (jouw rondes tot eerste ontwikkelde monopolie) - (tegenstander rondes tot hun eerste). Negatief tempo (monopolie eerst krijgen) correleert met 65%+ winpercentage in toernooispel."
      }
    },
    {
      question: {
        en: "What is the 'strategic depth' complexity class of Monopoly in computational game theory?",
        es: "¿Qué es la clase de complejidad de 'profundidad estratégica' de Monopoly en teoría de juegos computacional?",
        de: "Was ist die 'strategische Tiefe'-Komplexitätsklasse von Monopoly in der computergestützten Spieltheorie?",
        nl: "Wat is de 'strategische diepte' complexiteitsklasse van Monopoly in computationele speltheorie?"
      },
      options: [
        { en: "PSPACE-complete (polynomial space)", es: "PSPACE-completo (espacio polinomial)", de: "PSPACE-vollständig (polynomieller Raum)", nl: "PSPACE-compleet (polynomiale ruimte)" },
        { en: "EXPTIME-complete (exponential time)", es: "EXPTIME-completo (tiempo exponencial)", de: "EXPTIME-vollständig (exponentielle Zeit)", nl: "EXPTIME-compleet (exponentiële tijd)" },
        { en: "NP-complete (nondeterministic polynomial)", es: "NP-completo (polinomial no determinista)", de: "NP-vollständig (nichtdeterministisch polynomial)", nl: "NP-compleet (niet-deterministisch polynomiaal)" },
        { en: "P (polynomial time solvable)", es: "P (resoluble en tiempo polinomial)", de: "P (in polynomieller Zeit lösbar)", nl: "P (polynomiale tijd oplosbaar)" }
      ],
      correct: 1,
      explanation: {
        en: "Monopoly belongs to EXPTIME-complete complexity class due to unbounded game length, stochastic elements, and trading negotiations. Optimal play computation requires exponential time relative to board size.",
        es: "Monopoly pertenece a la clase de complejidad EXPTIME-completo debido a la duración del juego no limitada, elementos estocásticos y negociaciones comerciales. El cálculo del juego óptimo requiere tiempo exponencial relativo al tamaño del tablero.",
        de: "Monopoly gehört zur EXPTIME-vollständigen Komplexitätsklasse aufgrund unbegrenzter Spiellänge, stochastischer Elemente und Handelsverhandlungen. Optimale Spielberechnung erfordert exponentielle Zeit relativ zur Brettgröße.",
        nl: "Monopoly behoort tot EXPTIME-complete complexiteitsklasse vanwege onbegrensde spellengte, stochastische elementen en handelsonderhandelingen. Optimale spel berekening vereist exponentiële tijd relatief tot bordgrootte."
      }
    },
    {
      question: {
        en: "What is the 'risk-adjusted ROI' formula used in high-level trading decisions?",
        es: "¿Qué es la fórmula de 'ROI ajustado al riesgo' usada en decisiones comerciales de alto nivel?",
        de: "Was ist die 'risikoadjustierte ROI'-Formel in hochrangigen Handelsentscheidungen?",
        nl: "Wat is de 'risico-gecorrigeerde ROI' formule gebruikt in hoog-niveau handelsbeslissingen?"
      },
      options: [
        { en: "Expected rent ÷ total investment", es: "Alquiler esperado ÷ inversión total", de: "Erwartete Miete ÷ Gesamtinvestition", nl: "Verwachte huur ÷ totale investering" },
        { en: "(Expected rent × landing probability - bankruptcy risk) ÷ (investment + opportunity cost)", es: "(Alquiler esperado × probabilidad de caída - riesgo de quiebra) ÷ (inversión + costo de oportunidad)", de: "(Erwartete Miete × Landewahrscheinlichkeit - Bankrottrisiko) ÷ (Investition + Opportunitätskosten)", nl: "(Verwachte huur × landingswaarschijnlijkheid - faillissementsrisico) ÷ (investering + opportuniteitskosten)" },
        { en: "Total rent potential ÷ number of opponents", es: "Potencial de alquiler total ÷ número de oponentes", de: "Gesamtmietpotenzial ÷ Anzahl der Gegner", nl: "Totaal huur potentieel ÷ aantal tegenstanders" },
        { en: "Property value - mortgage value", es: "Valor de propiedad - valor de hipoteca", de: "Grundstückswert - Hypothekenwert", nl: "Eigendomswaarde - hypotheekwaarde" }
      ],
      correct: 1,
      explanation: {
        en: "Risk-adjusted ROI accounts for bankruptcy probability (liquidity crisis risk) and opportunity cost of capital tied up. Formula weights expected value by survival probability and includes alternative investment returns.",
        es: "El ROI ajustado al riesgo tiene en cuenta la probabilidad de quiebra (riesgo de crisis de liquidez) y el costo de oportunidad del capital atado. La fórmula pondera el valor esperado por la probabilidad de supervivencia e incluye rendimientos de inversión alternativos.",
        de: "Risikoadjustierter ROI berücksichtigt Bankrottwahrscheinlichkeit (Liquiditätskrisenrisiko) und Opportunitätskosten gebundenen Kapitals. Formel gewichtet Erwartungswert nach Überlebenswahrscheinlichkeit und umfasst alternative Investitionsrenditen.",
        nl: "Risico-gecorrigeerde ROI houdt rekening met faillissementswaarschijnlijkheid (liquiditeitscrisis risico) en opportuniteitskosten van vastgebonden kapitaal. Formule weegt verwachte waarde naar overlevingswaarschijnlijkheid en omvat alternatieve investeringsrendementen."
      }
    },
    {
      question: {
        en: "What is the 'dominant strategy equilibrium' in auction scenarios?",
        es: "¿Qué es el 'equilibrio de estrategia dominante' en escenarios de subasta?",
        de: "Was ist das 'dominante Strategie-Gleichgewicht' in Auktionsszenarien?",
        nl: "Wat is het 'dominante strategie evenwicht' in veiling scenario's?"
      },
      options: [
        { en: "Always bid property face value", es: "Siempre ofertar el valor nominal de la propiedad", de: "Immer Grundstücks-Nennwert bieten", nl: "Altijd eigendoms nominale waarde bieden" },
        { en: "Bid up to (completion value - opportunity cost) accounting for opponents' likely ranges", es: "Ofertar hasta (valor de completación - costo de oportunidad) teniendo en cuenta los rangos probables de los oponentes", de: "Bis zu (Vervollständigungswert - Opportunitätskosten) bieten unter Berücksichtigung wahrscheinlicher Gegner-Bereiche", nl: "Bieden tot (voltooiingswaarde - opportuniteitskosten) rekening houdend met waarschijnlijke tegenstander bereiken" },
        { en: "Never participate in auctions", es: "Nunca participar en subastas", de: "Niemals an Auktionen teilnehmen", nl: "Nooit deelnemen aan veilingen" },
        { en: "Bid minimum increment only", es: "Ofertar solo el incremento mínimo", de: "Nur Mindesterhöhung bieten", nl: "Alleen minimum verhoging bieden" }
      ],
      correct: 1,
      explanation: {
        en: "Dominant auction strategy: bid up to property's completion value (monopoly formation worth) minus opportunity cost, adjusted by opponents' bidding ranges. Requires real-time game tree evaluation.",
        es: "Estrategia de subasta dominante: ofertar hasta el valor de completación de la propiedad (valor de formación de monopolio) menos el costo de oportunidad, ajustado por los rangos de oferta de los oponentes. Requiere evaluación del árbol de juego en tiempo real.",
        de: "Dominante Auktionsstrategie: bis zum Vervollständigungswert der Immobilie (Monopolbildungswert) minus Opportunitätskosten bieten, angepasst an Gegner-Bieterbereich. Erfordert Echtzeit-Spielbaum-Bewertung.",
        nl: "Dominante veiling strategie: bieden tot eigendoms voltooiingswaarde (monopolie vorming waarde) minus opportuniteitskosten, aangepast naar tegenstander biedings bereiken. Vereist real-time spelboom evaluatie."
      }
    },
    {
      question: {
        en: "What is the 'metagame evolution' pattern observed in championship-level Monopoly?",
        es: "¿Qué es el patrón de 'evolución del metajuego' observado en Monopoly de nivel de campeonato?",
        de: "Was ist das 'Metagame-Evolutions'-Muster in Meisterschafts-Monopoly?",
        nl: "Wat is het 'metagame evolutie' patroon waargenomen in kampioenschap-niveau Monopoly?"
      },
      options: [
        { en: "Strategies cycle: aggressive trading → defensive blocking → calculated risk-taking", es: "Las estrategias ciclan: comercio agresivo → bloqueo defensivo → toma de riesgos calculada", de: "Strategien zyklieren: aggressiver Handel → defensive Blockierung → kalkulierte Risikobereitschaft", nl: "Strategieën cycleren: agressief ruilen → defensieve blokkering → berekend risico nemen" },
        { en: "All players converge on identical optimal strategy", es: "Todos los jugadores convergen en estrategia óptima idéntica", de: "Alle Spieler konvergieren auf identische optimale Strategie", nl: "Alle spelers convergeren op identieke optimale strategie" },
        { en: "Randomness dominates - no strategic evolution", es: "La aleatoriedad domina - sin evolución estratégica", de: "Zufälligkeit dominiert - keine strategische Evolution", nl: "Willekeurigheid domineert - geen strategische evolutie" },
        { en: "Newer players always outperform experienced ones", es: "Los jugadores más nuevos siempre superan a los experimentados", de: "Neuere Spieler übertreffen immer erfahrene", nl: "Nieuwere spelers presteren altijd beter dan ervaren" }
      ],
      correct: 0,
      explanation: {
        en: "Championship metagame shows cyclic evolution: aggressive trading dominates until defensive blocking emerges; blocking dominates until calculated risk-taking exploits passive play; cycle repeats as meta adapts.",
        es: "El metajuego de campeonato muestra evolución cíclica: el comercio agresivo domina hasta que emerge el bloqueo defensivo; el bloqueo domina hasta que la toma de riesgos calculada explota el juego pasivo; el ciclo se repite a medida que el meta se adapta.",
        de: "Meisterschafts-Metagame zeigt zyklische Evolution: aggressiver Handel dominiert bis defensive Blockierung auftaucht; Blockierung dominiert bis kalkulierte Risikobereitschaft passives Spiel ausnutzt; Zyklus wiederholt sich während sich Meta anpasst.",
        nl: "Kampioenschap metagame toont cyclische evolutie: agressief ruilen domineert tot defensieve blokkering opkomt; blokkering domineert tot berekend risico nemen passief spel exploiteert; cyclus herhaalt zich terwijl meta zich aanpast."
      }
    },
    {
      question: {
        en: "What is the 'variance reduction strategy' in tournament formats with multiple rounds?",
        es: "¿Qué es la 'estrategia de reducción de varianza' en formatos de torneo con múltiples rondas?",
        de: "Was ist die 'Varianzreduktionsstrategie' in Turnierformaten mit mehreren Runden?",
        nl: "Wat is de 'variantie reductie strategie' in toernooi formaten met meerdere rondes?"
      },
      options: [
        { en: "Play conservatively to guarantee consistent top-3 finishes across rounds", es: "Jugar conservadoramente para garantizar finales consistentes en top-3 en todas las rondas", de: "Konservativ spielen um konsistente Top-3-Platzierungen über Runden zu garantieren", nl: "Conservatief spelen om consistente top-3 finishes over rondes te garanderen" },
        { en: "Play maximally aggressive for high-variance outcomes", es: "Jugar máximamente agresivo para resultados de alta varianza", de: "Maximal aggressiv spielen für hohe Varianz-Ergebnisse", nl: "Maximaal agressief spelen voor hoge-variantie uitkomsten" },
        { en: "Randomize strategy each round", es: "Aleatorizar estrategia cada ronda", de: "Strategie jede Runde randomisieren", nl: "Strategie elke ronde randomiseren" },
        { en: "Copy previous round winner's strategy", es: "Copiar estrategia del ganador de la ronda anterior", de: "Strategie des vorherigen Rundengewinners kopieren", nl: "Strategie van vorige ronde winnaar kopiëren" }
      ],
      correct: 0,
      explanation: {
        en: "In multi-round Swiss/cumulative scoring tournaments, variance reduction strategy prioritizes consistent 2nd-3rd place finishes over risky 1st-or-last attempts, as cumulative points from consistency outperform high-variance approaches.",
        es: "En torneos suizos/de puntuación acumulativa de múltiples rondas, la estrategia de reducción de varianza prioriza finales consistentes en 2do-3er lugar sobre intentos arriesgados de 1er-o-último, ya que los puntos acumulativos de la consistencia superan los enfoques de alta varianza.",
        de: "In Multi-Runden-Swiss/kumulative Wertungsturnieren priorisiert Varianzreduktionsstrategie konsistente 2.-3.-Platzierungen über riskante 1.-oder-letzte Versuche, da kumulative Punkte aus Konsistenz hohe Varianz-Ansätze übertreffen.",
        nl: "In multi-ronde Swiss/cumulatieve scoring toernooien prioriteert variantie reductie strategie consistente 2e-3e plaats finishes boven riskante 1e-of-laatste pogingen, omdat cumulatieve punten van consistentie hoge-variantie benaderingen overtreffen."
      }
    },
    {
      question: {
        en: "What is the 'Shapley value' application to Monopoly coalition analysis?",
        es: "¿Qué es la aplicación del 'valor de Shapley' al análisis de coalición de Monopoly?",
        de: "Was ist die 'Shapley-Wert'-Anwendung auf Monopoly-Koalitionsanalyse?",
        nl: "Wat is de 'Shapley waarde' toepassing op Monopoly coalitie analyse?"
      },
      options: [
        { en: "Fair division of properties in bankruptcy", es: "División justa de propiedades en quiebra", de: "Faire Aufteilung von Grundstücken bei Bankrott", nl: "Eerlijke verdeling van eigendommen in faillissement" },
        { en: "Quantifying each player's marginal contribution to coalition winning probability", es: "Cuantificar la contribución marginal de cada jugador a la probabilidad de victoria de la coalición", de: "Quantifizierung des marginalen Beitrags jedes Spielers zur Koalitions-Gewinnwahrscheinlichkeit", nl: "Kwantificeren van elke speler marginale bijdrage aan coalitie winkans" },
        { en: "Calculating property trade values", es: "Calcular valores de intercambio de propiedades", de: "Grundstückshandelswerte berechnen", nl: "Eigendom ruil waarden berekenen" },
        { en: "Determining turn order value", es: "Determinar valor del orden de turno", de: "Zugreihenfolge-Wert bestimmen", nl: "Beurt volgorde waarde bepalen" }
      ],
      correct: 1,
      explanation: {
        en: "Shapley value quantifies each player's fair share in multi-player coalitions by averaging marginal contributions across all possible coalition formations. Shows when coordinated trading/targeting creates positive-sum value.",
        es: "El valor de Shapley cuantifica la parte justa de cada jugador en coaliciones multijugador promediando las contribuciones marginales en todas las formaciones de coalición posibles. Muestra cuándo el comercio/apuntado coordinado crea valor de suma positiva.",
        de: "Shapley-Wert quantifiziert jeden Spielers fairen Anteil in Multi-Spieler-Koalitionen durch Durchschnitt marginaler Beiträge über alle möglichen Koalitionsformationen. Zeigt wann koordinierter Handel/Anvisieren positiven Summenwert schafft.",
        nl: "Shapley waarde kwantificeert elke speler eerlijk aandeel in multi-speler coalities door gemiddelde marginale bijdragen over alle mogelijke coalitie formaties. Toont wanneer gecoördineerd ruilen/targeten positieve-som waarde creëert."
      }
    },
    {
      question: {
        en: "What is the 'chicken dilemma' manifestation in Monopoly property standoffs?",
        es: "¿Qué es la manifestación del 'dilema del gallina' en enfrentamientos de propiedades de Monopoly?",
        de: "Was ist die 'Feiglingsspiel'-Manifestation in Monopoly-Grundstücks-Pattsituationen?",
        nl: "Wat is de 'kip dilemma' manifestatie in Monopoly eigendom patstelling?"
      },
      options: [
        { en: "Both players refuse to trade, both lose to third player", es: "Ambos jugadores rechazan comerciar, ambos pierden ante tercer jugador", de: "Beide Spieler weigern zu handeln, beide verlieren gegen dritten Spieler", nl: "Beide spelers weigeren te ruilen, beide verliezen aan derde speler" },
        { en: "First player to mortgage loses advantage", es: "El primer jugador en hipotecar pierde ventaja", de: "Erster Spieler der beleiht verliert Vorteil", nl: "Eerste speler die hypothekeert verliest voordeel" },
        { en: "Player who accepts unfavorable trade wins long-term", es: "El jugador que acepta intercambio desfavorable gana a largo plazo", de: "Spieler der ungünstigen Handel akzeptiert gewinnt langfristig", nl: "Speler die ongunstige ruil accepteert wint op lange termijn" },
        { en: "Building first creates vulnerability", es: "Construir primero crea vulnerabilidad", de: "Zuerst bauen schafft Verwundbarkeit", nl: "Eerst bouwen creëert kwetsbaarheid" }
      ],
      correct: 0,
      explanation: {
        en: "Chicken dilemma: two players blocking each other's monopolies refuse to trade (both 'swerve' = lose face, 'stay course' = mutual destruction), allowing third player to develop unchallenged and win. Game-theoretic deadlock.",
        es: "Dilema del gallina: dos jugadores bloqueando los monopolios del otro rechazan comerciar (ambos 'desviarse' = perder prestigio, 'mantener curso' = destrucción mutua), permitiendo que tercer jugador desarrolle sin desafío y gane. Punto muerto teórico del juego.",
        de: "Feiglingsspiel: zwei Spieler die gegenseitig Monopole blockieren weigern sich zu handeln (beide 'ausweichen' = Gesicht verlieren, 'Kurs halten' = gegenseitige Zerstörung), ermöglicht drittem Spieler unangefochten zu entwickeln und zu gewinnen. Spieltheoretischer Deadlock.",
        nl: "Kip dilemma: twee spelers die elkaars monopolies blokkeren weigeren te ruilen (beide 'uitwijken' = gezicht verliezen, 'koers houden' = wederzijdse vernietiging), waardoor derde speler ongemoeid kan ontwikkelen en winnen. Speltheoretische impasse."
      }
    },
    {
      question: {
        en: "What is the 'bounded rationality threshold' in real-time Monopoly decision-making?",
        es: "¿Qué es el 'umbral de racionalidad limitada' en la toma de decisiones en tiempo real de Monopoly?",
        de: "Was ist die 'begrenzte Rationalitätsschwelle' in Echtzeit-Monopoly-Entscheidungsfindung?",
        nl: "Wat is de 'begrensde rationaliteitsdrempel' in real-time Monopoly besluitvorming?"
      },
      options: [
        { en: "Players can only calculate 2-3 moves ahead accurately", es: "Los jugadores solo pueden calcular 2-3 movimientos adelante con precisión", de: "Spieler können nur 2-3 Züge voraus genau berechnen", nl: "Spelers kunnen slechts 2-3 zetten vooruit nauwkeurig berekenen" },
        { en: "Cognitive limit where heuristics replace full game tree analysis (~5-6 decision nodes)", es: "Límite cognitivo donde heurísticas reemplazan análisis completo del árbol de juego (~5-6 nodos de decisión)", de: "Kognitive Grenze wo Heuristiken vollständige Spielbaum-Analyse ersetzen (~5-6 Entscheidungsknoten)", nl: "Cognitieve limiet waar heuristieken volledige spelboom analyse vervangen (~5-6 beslissingsknopen)" },
        { en: "Point where emotions override strategy", es: "Punto donde las emociones anulan la estrategia", de: "Punkt wo Emotionen Strategie überschreiben", nl: "Punt waar emoties strategie overschrijven" },
        { en: "Maximum number of properties to track", es: "Número máximo de propiedades para rastrear", de: "Maximale Anzahl von Grundstücken zu verfolgen", nl: "Maximum aantal eigendommen om te volgen" }
      ],
      correct: 1,
      explanation: {
        en: "Research shows humans can maintain ~5-6 decision nodes in working memory during time-pressured Monopoly play. Beyond this, players rely on heuristics (rules of thumb) rather than optimal game tree evaluation.",
        es: "La investigación muestra que los humanos pueden mantener ~5-6 nodos de decisión en la memoria de trabajo durante juego de Monopoly bajo presión de tiempo. Más allá de esto, los jugadores confían en heurísticas (reglas empíricas) en lugar de evaluación óptima del árbol de juego.",
        de: "Forschung zeigt Menschen können ~5-6 Entscheidungsknoten im Arbeitsgedächtnis während zeitlich begrenztem Monopoly-Spiel halten. Darüber hinaus verlassen sich Spieler auf Heuristiken (Faustregeln) statt optimaler Spielbaum-Bewertung.",
        nl: "Onderzoek toont mensen kunnen ~5-6 beslissingsknopen in werkgeheugen behouden tijdens tijdsdruk Monopoly spel. Hierboven vertrouwen spelers op heuristieken (vuistregels) in plaats van optimale spelboom evaluatie."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  } else {
    window.boardGamesMonopolyLevel9 = questions;
  }
})();
