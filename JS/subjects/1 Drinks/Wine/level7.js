// Quiz - Level 7: Drinken - Wijn (Wijngeschiedenis)
(function() {
  const level7 = {
    name: {
      en: "Wine History",
      es: "Historia del Vino",
      de: "Weingeschichte",
      nl: "Wijngeschiedenis"
    },
    questions: [
      {
        question: {
          en: "Where is the earliest evidence of wine production found?",
          es: "¿Dónde se encuentra la evidencia más temprana de producción de vino?",
          de: "Wo findet sich der früheste Nachweis von Weinproduktion?",
          nl: "Waar wordt het vroegste bewijs van wijnproductie gevonden?"
        },
        options: [
          { en: "Egypt", es: "Egipto", de: "Ägypten", nl: "Egypte" },
          { en: "Georgia (Caucasus)", es: "Georgia (Cáucaso)", de: "Georgien (Kaukasus)", nl: "Georgië (Kaukasus)" },
          { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" }
        ],
        correct: 1,
        explanation: {
          en: "Archaeological evidence from Georgia shows wine production dating back 8,000 years, making it the world's oldest known wine region.",
          es: "La evidencia arqueológica de Georgia muestra producción de vino que data de hace 8,000 años, convirtiéndola en la región vinícola conocida más antigua del mundo.",
          de: "Archäologische Belege aus Georgien zeigen Weinproduktion von vor 8.000 Jahren und machen es zur ältesten bekannten Weinregion der Welt.",
          nl: "Archeologisch bewijs uit Georgië toont wijnproductie van 8.000 jaar geleden, waardoor het 's werelds oudst bekende wijnregio is."
        }
      },
      {
        question: {
          en: "Who is credited with discovering Champagne?",
          es: "¿A quién se le atribuye el descubrimiento del Champagne?",
          de: "Wem wird die Entdeckung des Champagners zugeschrieben?",
          nl: "Aan wie wordt de ontdekking van Champagne toegeschreven?"
        },
        options: [
          { en: "Dom Pérignon", es: "Dom Pérignon", de: "Dom Pérignon", nl: "Dom Pérignon" },
          { en: "Napoleon Bonaparte", es: "Napoleón Bonaparte", de: "Napoleon Bonaparte", nl: "Napoleon Bonaparte" },
          { en: "Louis XIV", es: "Luis XIV", de: "Ludwig XIV", nl: "Lodewijk XIV" },
          { en: "Marie Antoinette", es: "María Antonieta", de: "Marie Antoinette", nl: "Marie Antoinette" }
        ],
        correct: 0,
        explanation: {
          en: "Dom Pierre Pérignon, a Benedictine monk, is credited with perfecting the méthode champenoise in the late 17th century, though sparkling wine existed before him.",
          es: "Dom Pierre Pérignon, un monje benedictino, es reconocido por perfeccionar el método champenoise a finales del siglo XVII, aunque el vino espumoso existía antes que él.",
          de: "Dom Pierre Pérignon, ein Benediktinermönch, wird die Perfektionierung der Méthode Champenoise im späten 17. Jahrhundert zugeschrieben, obwohl Schaumwein schon vorher existierte.",
          nl: "Dom Pierre Pérignon, een Benedictijnse monnik, wordt gecrediteerd voor het perfectioneren van de méthode champenoise in de late 17e eeuw, hoewel mousserende wijn al eerder bestond."
        }
      },
      {
        question: {
          en: "When was the devastating phylloxera epidemic in European vineyards?",
          es: "¿Cuándo fue la devastadora epidemia de filoxera en los viñedos europeos?",
          de: "Wann war die verheerende Reblaus-Epidemie in europäischen Weinbergen?",
          nl: "Wanneer was de verwoestende phylloxera epidemie in Europese wijngaarden?"
        },
        options: [
          { en: "1820s-1840s", es: "1820s-1840s", de: "1820er-1840er", nl: "1820-1840" },
          { en: "1860s-1890s", es: "1860s-1890s", de: "1860er-1890er", nl: "1860-1890" },
          { en: "1900s-1920s", es: "1900s-1920s", de: "1900er-1920er", nl: "1900-1920" },
          { en: "1940s-1960s", es: "1940s-1960s", de: "1940er-1960er", nl: "1940-1960" }
        ],
        correct: 1,
        explanation: {
          en: "The phylloxera epidemic devastated European vineyards from the 1860s-1890s, destroying millions of vines until grafting onto American rootstock provided a solution.",
          es: "La epidemia de filoxera devastó los viñedos europeos desde los 1860s-1890s, destruyendo millones de vides hasta que el injerto en portainjertos americanos proporcionó una solución.",
          de: "Die Reblaus-Epidemie verwüstete europäische Weinberge von den 1860ern bis 1890ern und zerstörte Millionen von Reben, bis die Pfropfung auf amerikanische Unterlagen eine Lösung bot.",
          nl: "De phylloxera epidemie verwoestte Europese wijngaarden van de 1860-1890, waarbij miljoenen wijnstokken werden vernietigd tot enten op Amerikaanse onderstammen een oplossing bood."
        }
      },
      {
        question: {
          en: "Which classification system was established in Bordeaux in 1855?",
          es: "¿Qué sistema de clasificación se estableció en Burdeos en 1855?",
          de: "Welches Klassifikationssystem wurde 1855 in Bordeaux etabliert?",
          nl: "Welk classificatiesysteem werd in 1855 in Bordeaux vastgesteld?"
        },
        options: [
          { en: "AOC system", es: "Sistema AOC", de: "AOC-System", nl: "AOC systeem" },
          { en: "Grand Cru classification", es: "Clasificación Grand Cru", de: "Grand Cru Klassifikation", nl: "Grand Cru classificatie" },
          { en: "The 1855 Classification of Médoc and Graves", es: "La Clasificación de 1855 del Médoc y Graves", de: "Die 1855er Klassifikation von Médoc und Graves", nl: "De 1855 Classificatie van Médoc en Graves" },
          { en: "Cru Bourgeois system", es: "Sistema Cru Bourgeois", de: "Cru Bourgeois System", nl: "Cru Bourgeois systeem" }
        ],
        correct: 2,
        explanation: {
          en: "The 1855 Classification ranked Bordeaux châteaux from First to Fifth Growths based on wine prices and reputation, created for the Paris Exposition.",
          es: "La Clasificación de 1855 clasificó los châteaux de Burdeos del Primer al Quinto Crecimiento basándose en precios del vino y reputación, creada para la Exposición de París.",
          de: "Die 1855er Klassifikation stufte Bordeaux-Châteaux vom Ersten bis Fünften Gewächs ein, basierend auf Weinpreisen und Reputation, erstellt für die Pariser Weltausstellung.",
          nl: "De 1855 Classificatie rangschikte Bordeaux châteaux van Premier tot Cinquième Cru gebaseerd op wijnprijzen en reputatie, gecreëerd voor de Parijse Tentoonstelling."
        }
      },
      {
        question: {
          en: "Who brought winemaking to California during the Spanish mission period?",
          es: "¿Quién trajo la vinificación a California durante el período de las misiones españolas?",
          de: "Wer brachte die Weinherstellung während der spanischen Missionszeit nach Kalifornien?",
          nl: "Wie bracht wijnmaken naar Californië tijdens de Spaanse missiperiode?"
        },
        options: [
          { en: "Junípero Serra", es: "Junípero Serra", de: "Junípero Serra", nl: "Junípero Serra" },
          { en: "Agoston Haraszthy", es: "Agoston Haraszthy", de: "Agoston Haraszthy", nl: "Agoston Haraszthy" },
          { en: "Jacob Schram", es: "Jacob Schram", de: "Jacob Schram", nl: "Jacob Schram" },
          { en: "Charles Krug", es: "Charles Krug", de: "Charles Krug", nl: "Charles Krug" }
        ],
        correct: 0,
        explanation: {
          en: "Father Junípero Serra planted the first vineyard at Mission San Juan Capistrano in 1779, beginning California's wine industry with Mission grapes.",
          es: "El Padre Junípero Serra plantó el primer viñedo en la Misión San Juan Capistrano en 1779, iniciando la industria vinícola de California con uvas Mission.",
          de: "Pater Junípero Serra pflanzte 1779 den ersten Weinberg in der Mission San Juan Capistrano und begann Kaliforniens Weinindustrie mit Mission-Trauben.",
          nl: "Pater Junípero Serra plantte in 1779 de eerste wijngaard bij Mission San Juan Capistrano, waarmee Californië's wijnindustrie begon met Mission druiven."
        }
      },
      {
        question: {
          en: "What wine event made international headlines in 1976?",
          es: "¿Qué evento vinícola hizo titulares internacionales en 1976?",
          de: "Welches Weinereignis machte 1976 internationale Schlagzeilen?",
          nl: "Welk wijnevenement maakte in 1976 internationale krantenkoppen?"
        },
        options: [
          { en: "The Paris Wine Expo", es: "La Exposición de Vinos de París", de: "Die Pariser Weinmesse", nl: "De Parijse Wijn Expo" },
          { en: "The Judgment of Paris", es: "El Juicio de París", de: "Das Urteil von Paris", nl: "Het Oordeel van Parijs" },
          { en: "Bordeaux vintage crisis", es: "Crisis de cosecha de Burdeos", de: "Bordeaux Jahrgangs-Krise", nl: "Bordeaux oogst crisis" },
          { en: "California drought", es: "Sequía de California", de: "Kalifornische Dürre", nl: "Californische droogte" }
        ],
        correct: 1,
        explanation: {
          en: "The Judgment of Paris blind tasting saw California wines defeat French wines, shocking the wine world and establishing California as a serious wine region.",
          es: "La cata a ciegas del Juicio de París vio a los vinos californianos derrotar a los vinos franceses, conmocionando al mundo del vino y estableciendo a California como una región vinícola seria.",
          de: "Die Blindverkostung 'Urteil von Paris' sah kalifornische Weine französische besiegen, schockierte die Weinwelt und etablierte Kalifornien als ernsthafte Weinregion.",
          nl: "De blinde proeverij 'Oordeel van Parijs' zag Californische wijnen Franse wijnen verslaan, wat de wijnwereld schokte en Californië als serieuze wijnregio vestigde."
        }
      },
      {
        question: {
          en: "When were the French AOC (Appellation d'Origine Contrôlée) laws established?",
          es: "¿Cuándo se establecieron las leyes francesas AOC (Appellation d'Origine Contrôlée)?",
          de: "Wann wurden die französischen AOC-Gesetze (Appellation d'Origine Contrôlée) etabliert?",
          nl: "Wanneer werden de Franse AOC (Appellation d'Origine Contrôlée) wetten vastgesteld?"
        },
        options: [
          { en: "1935", es: "1935", de: "1935", nl: "1935" },
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1920", es: "1920", de: "1920", nl: "1920" },
          { en: "1955", es: "1955", de: "1955", nl: "1955" }
        ],
        correct: 0,
        explanation: {
          en: "France established the AOC system in 1935 to protect wine regions and quality standards, becoming a model for wine laws worldwide.",
          es: "Francia estableció el sistema AOC en 1935 para proteger las regiones vinícolas y los estándares de calidad, convirtiéndose en un modelo para las leyes del vino mundialmente.",
          de: "Frankreich etablierte 1935 das AOC-System zum Schutz von Weinregionen und Qualitätsstandards, das zum Modell für Weingesetze weltweit wurde.",
          nl: "Frankrijk vestigde het AOC systeem in 1935 om wijnregio's en kwaliteitsstandaarden te beschermen, wat een model werd voor wijnwetten wereldwijd."
        }
      },
      {
        question: {
          en: "Which ancient civilization first used oak barrels for wine storage?",
          es: "¿Qué civilización antigua usó por primera vez barricas de roble para almacenamiento de vino?",
          de: "Welche antike Zivilisation verwendete zuerst Eichenfässer zur Weinlagerung?",
          nl: "Welke oude beschaving gebruikte eerst eiken vaten voor wijnopslag?"
        },
        options: [
          { en: "Romans", es: "Romanos", de: "Römer", nl: "Romeinen" },
          { en: "Gauls (Celts)", es: "Galos (Celtas)", de: "Gallier (Kelten)", nl: "Galliërs (Kelten)" },
          { en: "Greeks", es: "Griegos", de: "Griechen", nl: "Grieken" },
          { en: "Egyptians", es: "Egipcios", de: "Ägypter", nl: "Egyptenaren" }
        ],
        correct: 1,
        explanation: {
          en: "The Gauls (Celts) invented oak barrels around 300 BC, which the Romans adopted, revolutionizing wine storage and transport.",
          es: "Los galos (celtas) inventaron las barricas de roble alrededor del 300 a.C., que los romanos adoptaron, revolucionando el almacenamiento y transporte del vino.",
          de: "Die Gallier (Kelten) erfanden um 300 v.Chr. Eichenfässer, die die Römer übernahmen und damit Weinlagerung und -transport revolutionierten.",
          nl: "De Galliërs (Kelten) vonden rond 300 v.Chr. eiken vaten uit, die de Romeinen overnamen, wat wijnopslag en transport revolutioneerde."
        }
      },
      {
        question: {
          en: "Who is considered the father of modern Australian winemaking?",
          es: "¿Quién es considerado el padre de la vinificación australiana moderna?",
          de: "Wer gilt als Vater der modernen australischen Weinherstellung?",
          nl: "Wie wordt beschouwd als de vader van de moderne Australische wijnmaken?"
        },
        options: [
          { en: "Max Schubert", es: "Max Schubert", de: "Max Schubert", nl: "Max Schubert" },
          { en: "James Busby", es: "James Busby", de: "James Busby", nl: "James Busby" },
          { en: "Wolf Blass", es: "Wolf Blass", de: "Wolf Blass", nl: "Wolf Blass" },
          { en: "Maurice O'Shea", es: "Maurice O'Shea", de: "Maurice O'Shea", nl: "Maurice O'Shea" }
        ],
        correct: 1,
        explanation: {
          en: "James Busby brought vine cuttings from Europe to Australia in the 1830s and is considered the father of Australian viticulture.",
          es: "James Busby trajo esquejes de vid de Europa a Australia en los 1830s y es considerado el padre de la viticultura australiana.",
          de: "James Busby brachte in den 1830ern Rebstecklinge aus Europa nach Australien und gilt als Vater des australischen Weinbaus.",
          nl: "James Busby bracht in de jaren 1830 wijnstokstekken van Europa naar Australië en wordt beschouwd als de vader van de Australische wijnbouw."
        }
      },
      {
        question: {
          en: "Which wine region was the first New World wine region to gain international recognition?",
          es: "¿Qué región vinícola fue la primera región vinícola del Nuevo Mundo en ganar reconocimiento internacional?",
          de: "Welche Weinregion war die erste Neue Welt-Weinregion, die internationale Anerkennung erlangte?",
          nl: "Welke wijnregio was de eerste Nieuwe Wereld wijnregio die internationale erkenning kreeg?"
        },
        options: [
          { en: "Napa Valley", es: "Valle de Napa", de: "Napa Valley", nl: "Napa Valley" },
          { en: "Constantia, South Africa", es: "Constantia, Sudáfrica", de: "Constantia, Südafrika", nl: "Constantia, Zuid-Afrika" },
          { en: "Mendoza, Argentina", es: "Mendoza, Argentina", de: "Mendoza, Argentinien", nl: "Mendoza, Argentinië" },
          { en: "Barossa Valley", es: "Valle Barossa", de: "Barossa Valley", nl: "Barossa Valley" }
        ],
        correct: 1,
        explanation: {
          en: "Constantia's sweet wines were famous in 18th-century Europe, beloved by Napoleon and European royalty, making it the first internationally acclaimed New World wine region.",
          es: "Los vinos dulces de Constantia eran famosos en la Europa del siglo XVIII, queridos por Napoleón y la realeza europea, convirtiéndola en la primera región vinícola del Nuevo Mundo aclamada internacionalmente.",
          de: "Constantias Süßweine waren im Europa des 18. Jahrhunderts berühmt, geliebt von Napoleon und europäischen Königshäusern, was es zur ersten international gefeierten Neue Welt-Weinregion machte.",
          nl: "Constantia's zoete wijnen waren beroemd in 18e-eeuws Europa, geliefd door Napoleon en Europese royalty, waardoor het de eerste internationaal geprezen Nieuwe Wereld wijnregio werd."
        }
      },
      {
        question: {
          en: "What is malolactic fermentation in winemaking?",
          es: "¿Qué es la fermentación maloláctica en la vinificación?",
          de: "Was ist malolaktische Gärung im Weinbau?",
          nl: "Wat is malolactische fermentatie in de wijnbouw?"
        },
        options: [
          { en: "Converting malic acid to lactic acid", es: "Convertir ácido málico en ácido láctico", de: "Umwandlung von Apfelsäure in Milchsäure", nl: "Het omzetten van appelzuur naar melkzuur" },
          { en: "Adding sugar to increase alcohol", es: "Agregar azúcar para aumentar el alcohol", de: "Zucker hinzufügen um Alkohol zu erhöhen", nl: "Suiker toevoegen om alcohol te verhogen" },
          { en: "Filtering the wine", es: "Filtrar el vino", de: "Den Wein filtern", nl: "De wijn filteren" },
          { en: "Aging in oak barrels", es: "Envejecimiento en barricas de roble", de: "Alterung in Eichenfässern", nl: "Rijping in eiken vaten" }
        ],
        correct: 0,
        explanation: {
          en: "Malolactic fermentation (MLF) converts sharp malic acid into softer lactic acid, softening wine and adding buttery notes.",
          es: "La fermentación maloláctica (FML) convierte el ácido málico agudo en ácido láctico más suave, suavizando el vino y agregando notas mantecosas.",
          de: "Malolaktische Gärung (MLF) wandelt scharfe Apfelsäure in weichere Milchsäure um, macht den Wein weicher und fügt buttrige Noten hinzu.",
          nl: "Malolactische fermentatie (MLF) zet scherp appelzuur om in zachter melkzuur, wat de wijn verzacht en botertonen toevoegt."
        }
      },
      {
        question: {
          en: "What is 'phylloxera' in wine history?",
          es: "¿Qué es la 'filoxera' en la historia del vino?",
          de: "Was ist 'Reblaus' in der Weingeschichte?",
          nl: "Wat is 'phylloxera' in de wijngeschiedenis?"
        },
        options: [
          { en: "A pest that destroyed European vineyards", es: "Una plaga que destruyó viñedos europeos", de: "Ein Schädling der europäische Weinberge zerstörte", nl: "Een plaag die Europese wijngaarden verwoestte" },
          { en: "A wine disease from bacteria", es: "Una enfermedad del vino por bacterias", de: "Eine Weinkrankheit durch Bakterien", nl: "Een wijnziekte door bacteriën" },
          { en: "A fermentation technique", es: "Una técnica de fermentación", de: "Eine Gärungstechnik", nl: "Een fermentatietechniek" },
          { en: "A grape variety", es: "Una variedad de uva", de: "Eine Rebsorte", nl: "Een druivensoort" }
        ],
        correct: 0,
        explanation: {
          en: "Phylloxera devastated European vineyards in the 1800s. The solution was grafting European vines onto resistant American rootstock.",
          es: "La filoxera devastó los viñedos europeos en el siglo XIX. La solución fue injertar vides europeas en portainjertos americanos resistentes.",
          de: "Reblaus verwüstete europäische Weinberge im 19. Jahrhundert. Die Lösung war das Pfropfen europäischer Reben auf resistente amerikanische Unterlagen.",
          nl: "Phylloxera verwoestte Europese wijngaarden in de 19e eeuw. De oplossing was het enten van Europese wijnstokken op resistente Amerikaanse onderstammen."
        }
      },
      {
        question: {
          en: "What is the traditional method used for aging and storing vintage Port?",
          es: "¿Cuál es el método tradicional utilizado para envejecer y almacenar Oporto vintage?",
          de: "Was ist die traditionelle Methode zum Altern und Lagern von Vintage Port?",
          nl: "Wat is de traditionele methode voor het rijpen en opslaan van vintage Port?"
        },
        options: [
          { en: "Stainless steel tanks", es: "Tanques de acero inoxidable", de: "Edelstahltanks", nl: "Roestvrijstalen tanks" },
          { en: "Bottle aging after 2-3 years in barrel", es: "Envejecimiento en botella después de 2-3 años en barrica", de: "Flaschenreifung nach 2-3 Jahren im Fass", nl: "Flesrijping na 2-3 jaar op vat" },
          { en: "Clay amphorae", es: "Ánforas de arcilla", de: "Tonamphoren", nl: "Kleien amfora" },
          { en: "Oak barrels for decades", es: "Barricas de roble durante décadas", de: "Eichenfässer über Jahrzehnte", nl: "Eiken vaten voor decennia" }
        ],
        correct: 1,
        explanation: {
          en: "Vintage Port is aged in barrel for 2-3 years, then bottled and aged for decades in the bottle to develop complexity and secondary characteristics.",
          es: "El Oporto vintage se envejece en barrica durante 2-3 años, luego se embotella y envejece durante décadas en la botella para desarrollar complejidad y características secundarias.",
          de: "Vintage Port wird 2-3 Jahre im Fass gereift, dann in Flaschen abgefüllt und jahrzehntelang in der Flasche gereift, um Komplexität und sekundäre Eigenschaften zu entwickeln.",
          nl: "Vintage Port rijpt 2-3 jaar op vat, wordt vervolgens gebotteld en rijpt tientallen jaren op fles om complexiteit en secundaire kenmerken te ontwikkelen."
        }
      },
      {
        question: {
          en: "Which Burgundy estate was the first to adopt biodynamic viticulture?",
          es: "¿Qué finca de Borgoña fue la primera en adoptar viticultura biodinámica?",
          de: "Welches Burgunder Weingut war das erste, das biodynamischen Weinbau einführte?",
          nl: "Welk Bourgogne domein was het eerste dat biodynamische wijnbouw toepaste?"
        },
        options: [
          { en: "Domaine de la Romanée-Conti", es: "Domaine de la Romanée-Conti", de: "Domaine de la Romanée-Conti", nl: "Domaine de la Romanée-Conti" },
          { en: "Domaine Leroy", es: "Domaine Leroy", de: "Domaine Leroy", nl: "Domaine Leroy" },
          { en: "Domaine Leflaive", es: "Domaine Leflaive", de: "Domaine Leflaive", nl: "Domaine Leflaive" },
          { en: "Louis Jadot", es: "Louis Jadot", de: "Louis Jadot", nl: "Louis Jadot" }
        ],
        correct: 2,
        explanation: {
          en: "Domaine Leflaive was pioneering in adopting biodynamic viticulture in Burgundy in the late 1990s, influencing many other prestigious estates.",
          es: "Domaine Leflaive fue pionero en adoptar la viticultura biodinámica en Borgoña a finales de los 1990s, influyendo en muchas otras fincas prestigiosas.",
          de: "Domaine Leflaive war Ende der 1990er Jahre Vorreiter bei der Einführung biodynamischen Weinbaus im Burgund und beeinflusste viele andere prestigeträchtige Weingüter.",
          nl: "Domaine Leflaive was baanbrekend in het toepassen van biodynamische wijnbouw in Bourgogne in de late jaren 1990, wat veel andere prestigieuze domeinen beïnvloedde."
        }
      },
      {
        question: {
          en: "What was the primary purpose of the historic Tokaji wine production in Hungary?",
          es: "¿Cuál fue el propósito principal de la histórica producción de vino Tokaji en Hungría?",
          de: "Was war der Hauptzweck der historischen Tokaji-Weinproduktion in Ungarn?",
          nl: "Wat was het primaire doel van de historische Tokaji wijnproductie in Hongarije?"
        },
        options: [
          { en: "Production for royal courts", es: "Producción para cortes reales", de: "Produktion für königliche Höfe", nl: "Productie voor koninklijke hoven" },
          { en: "Medicinal purposes", es: "Propósitos medicinales", de: "Medizinische Zwecke", nl: "Medicinale doeleinden" },
          { en: "Mass market consumption", es: "Consumo de mercado masivo", de: "Massenmarktkonsum", nl: "Massaconsumptie" },
          { en: "Religious ceremonies", es: "Ceremonias religiosas", de: "Religiöse Zeremonien", nl: "Religieuze ceremonies" }
        ],
        correct: 0,
        explanation: {
          en: "Tokaji Aszú was produced primarily for royal courts and nobility. Known as 'Wine of Kings, King of Wines,' it was treasured by European royalty since the 17th century.",
          es: "El Tokaji Aszú se producía principalmente para cortes reales y nobleza. Conocido como 'Vino de Reyes, Rey de Vinos', fue atesorado por la realeza europea desde el siglo XVII.",
          de: "Tokaji Aszú wurde hauptsächlich für königliche Höfe und Adel produziert. Als 'Wein der Könige, König der Weine' bekannt, wurde er seit dem 17. Jahrhundert von europäischen Königshäusern geschätzt.",
          nl: "Tokaji Aszú werd voornamelijk geproduceerd voor koninklijke hoven en adel. Bekend als 'Wijn van Koningen, Koning van Wijnen', werd het sinds de 17e eeuw gekoesterd door Europese royalty."
        }
      },
      {
        question: {
          en: "What historical event led to the creation of Sherry's unique solera aging system?",
          es: "¿Qué evento histórico llevó a la creación del sistema único de envejecimiento solera del Jerez?",
          de: "Welches historische Ereignis führte zur Entwicklung des einzigartigen Solera-Alterungssystems für Sherry?",
          nl: "Welke historische gebeurtenis leidde tot de creatie van Sherry's unieke solera rijpingssysteem?"
        },
        options: [
          { en: "Roman conquest", es: "Conquista romana", de: "Römische Eroberung", nl: "Romeinse verovering" },
          { en: "Moorish influence and trade needs", es: "Influencia morisca y necesidades comerciales", de: "Maurischer Einfluss und Handelsbedürfnisse", nl: "Moorse invloed en handelsbehoeften" },
          { en: "French Revolution", es: "Revolución Francesa", de: "Französische Revolution", nl: "Franse Revolutie" },
          { en: "Industrial Revolution", es: "Revolución Industrial", de: "Industrielle Revolution", nl: "Industriële Revolutie" }
        ],
        correct: 1,
        explanation: {
          en: "The solera system developed from Moorish influence in Jerez and the need for consistent quality for British trade routes. It blends younger wines with older vintages progressively.",
          es: "El sistema solera se desarrolló por la influencia morisca en Jerez y la necesidad de calidad consistente para las rutas comerciales británicas. Mezcla vinos más jóvenes con añadas más viejas progresivamente.",
          de: "Das Solera-System entwickelte sich aus maurischem Einfluss in Jerez und dem Bedarf nach gleichbleibender Qualität für britische Handelsrouten. Es mischt jüngere Weine progressiv mit älteren Jahrgängen.",
          nl: "Het solera systeem ontwikkelde zich door Moorse invloed in Jerez en de behoefte aan consistente kwaliteit voor Britse handelsroutes. Het mengt jongere wijnen progressief met oudere jaargangen."
        }
      },
      {
        question: {
          en: "Which wine region experienced a renaissance in the 1990s due to the 'Super Tuscan' movement?",
          es: "¿Qué región vinícola experimentó un renacimiento en los 1990s debido al movimiento 'Super Toscano'?",
          de: "Welche Weinregion erlebte in den 1990ern eine Renaissance durch die 'Super Tuscan'-Bewegung?",
          nl: "Welke wijnregio ervoer een wedergeboorte in de jaren 1990 door de 'Super Toscaanse' beweging?"
        },
        options: [
          { en: "Piedmont", es: "Piamonte", de: "Piemont", nl: "Piemonte" },
          { en: "Tuscany", es: "Toscana", de: "Toskana", nl: "Toscane" },
          { en: "Veneto", es: "Véneto", de: "Venetien", nl: "Veneto" },
          { en: "Sicily", es: "Sicilia", de: "Sizilien", nl: "Sicilië" }
        ],
        correct: 1,
        explanation: {
          en: "Tuscany's Super Tuscan movement challenged traditional DOC rules by using international grapes, revitalizing the region and creating iconic wines like Sassicaia and Tignanello.",
          es: "El movimiento Super Toscano de Toscana desafió las reglas DOC tradicionales al usar uvas internacionales, revitalizando la región y creando vinos icónicos como Sassicaia y Tignanello.",
          de: "Die Super Tuscan-Bewegung in der Toskana forderte traditionelle DOC-Regeln heraus, indem sie internationale Rebsorten verwendete, die Region revitalisierte und ikonische Weine wie Sassicaia und Tignanello schuf.",
          nl: "Toscane's Super Toscaanse beweging daagde traditionele DOC regels uit door internationale druiven te gebruiken, wat de regio nieuw leven inblies en iconische wijnen creëerde zoals Sassicaia en Tignanello."
        }
      },
      {
        question: {
          en: "What ancient Roman text is considered the earliest comprehensive guide to viticulture?",
          es: "¿Qué texto romano antiguo se considera la guía más temprana y completa de viticultura?",
          de: "Welcher antike römische Text gilt als die früheste umfassende Anleitung zum Weinbau?",
          nl: "Welke oude Romeinse tekst wordt beschouwd als de vroegste uitgebreide gids voor wijnbouw?"
        },
        options: [
          { en: "De Re Rustica by Columella", es: "De Re Rustica de Columela", de: "De Re Rustica von Columella", nl: "De Re Rustica door Columella" },
          { en: "Natural History by Pliny", es: "Historia Natural de Plinio", de: "Naturalis Historia von Plinius", nl: "Naturalis Historia door Plinius" },
          { en: "De Agricultura by Cato", es: "De Agricultura de Catón", de: "De Agricultura von Cato", nl: "De Agricultura door Cato" },
          { en: "Georgics by Virgil", es: "Geórgicas de Virgilio", de: "Georgica von Vergil", nl: "Georgica door Vergilius" }
        ],
        correct: 0,
        explanation: {
          en: "Columella's De Re Rustica (c. 65 AD) provided detailed viticultural advice including pruning, grafting, and winemaking that influenced European viticulture for centuries.",
          es: "De Re Rustica de Columela (c. 65 d.C.) proporcionó consejos vitícolas detallados incluyendo poda, injerto y vinificación que influyeron en la viticultura europea durante siglos.",
          de: "Columellas De Re Rustica (ca. 65 n.Chr.) lieferte detaillierte weinbauliche Ratschläge einschließlich Beschneiden, Pfropfen und Weinherstellung, die den europäischen Weinbau jahrhundertelang beeinflussten.",
          nl: "Columella's De Re Rustica (ca. 65 n.Chr.) gaf gedetailleerd wijnbouwadvies inclusief snoeien, enten en wijnmaken dat de Europese wijnbouw eeuwenlang beïnvloedde."
        }
      },
      {
        question: {
          en: "Which wine-producing country established the world's first demarcated wine region in 1756?",
          es: "¿Qué país productor de vino estableció la primera región vinícola demarcada del mundo en 1756?",
          de: "Welches weinproduzierende Land etablierte 1756 die weltweit erste abgegrenzte Weinregion?",
          nl: "Welk wijnproducerend land vestigde 's werelds eerste afgebakende wijnregio in 1756?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "Portugal", es: "Portugal", de: "Portugal", nl: "Portugal" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" }
        ],
        correct: 2,
        explanation: {
          en: "Portugal established the Douro Valley as the world's first demarcated wine region in 1756 to protect Port wine quality and combat fraud.",
          es: "Portugal estableció el Valle del Duero como la primera región vinícola demarcada del mundo en 1756 para proteger la calidad del vino de Oporto y combatir el fraude.",
          de: "Portugal etablierte 1756 das Douro-Tal als weltweit erste abgegrenzte Weinregion, um die Qualität von Portwein zu schützen und Betrug zu bekämpfen.",
          nl: "Portugal vestigde de Douro-vallei in 1756 als 's werelds eerste afgebakende wijnregio om de kwaliteit van Port wijn te beschermen en fraude te bestrijden."
        }
      },
      {
        question: {
          en: "What revolutionary winemaking technique did Émile Peynaud pioneer in Bordeaux in the 1940s-1960s?",
          es: "¿Qué técnica revolucionaria de vinificación fue pionera de Émile Peynaud en Burdeos en los 1940s-1960s?",
          de: "Welche revolutionäre Weinherstellungstechnik entwickelte Émile Peynaud in den 1940er-1960er Jahren in Bordeaux?",
          nl: "Welke revolutionaire wijnmaaktechniek was Émile Peynaud pionier in Bordeaux in de jaren 1940-1960?"
        },
        options: [
          { en: "Stainless steel fermentation", es: "Fermentación en acero inoxidable", de: "Edelstahlgärung", nl: "Roestvrijstalen fermentatie" },
          { en: "Temperature-controlled fermentation and scientific blending", es: "Fermentación controlada por temperatura y mezcla científica", de: "Temperaturkontrollierte Gärung und wissenschaftliches Verschneiden", nl: "Temperatuurgecontroleerde fermentatie en wetenschappelijk blenden" },
          { en: "Organic viticulture", es: "Viticultura orgánica", de: "Biologischer Weinbau", nl: "Biologische wijnbouw" },
          { en: "Carbonic maceration", es: "Maceración carbónica", de: "Kohlensäuremaischung", nl: "Koolzuurmaceratie" }
        ],
        correct: 1,
        explanation: {
          en: "Émile Peynaud revolutionized modern winemaking through temperature-controlled fermentation, scientific analysis, and precise blending techniques that transformed Bordeaux quality.",
          es: "Émile Peynaud revolucionó la vinificación moderna a través de fermentación controlada por temperatura, análisis científico y técnicas de mezcla precisas que transformaron la calidad de Burdeos.",
          de: "Émile Peynaud revolutionierte die moderne Weinherstellung durch temperaturkontrollierte Gärung, wissenschaftliche Analyse und präzise Verschnitttechniken, die die Qualität von Bordeaux transformierten.",
          nl: "Émile Peynaud revolutioneerde moderne wijnmaken door temperatuurgecontroleerde fermentatie, wetenschappelijke analyse en precieze blendtechnieken die de kwaliteit van Bordeaux transformeerden."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
