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
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  } else {
    window.boardGamesMonopolyLevel9 = questions;
  }
})();
