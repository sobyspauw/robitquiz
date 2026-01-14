// Quiz - Level 9: Drinken - Wijn (Wijnkenner niveau)

(function() {
  const level9 = {
    name: {
      en: "Wine Connoisseur Level",
      es: "Nivel de Conocedor de Vinos",
      de: "Weinkenner-Niveau",
      nl: "Wijnkenner Niveau"
    },
    questions: [
      {
        question: {
          en: "What is the optimal serving temperature for aged Barolo?",
          es: "¿Cuál es la temperatura óptima de servicio para Barolo envejecido?",
          de: "Was ist die optimale Serviertemperatur für gereiften Barolo?",
          nl: "Wat is de optimale serveertemperatuur voor gerijpte Barolo?"
        },
        options: [
          {
            en: "12-14°C",
            es: "12-14°C",
            de: "12-14°C",
            nl: "12-14°C"
          },
          {
            en: "16-18°C",
            es: "16-18°C",
            de: "16-18°C",
            nl: "16-18°C"
          },
          {
            en: "18-20°C",
            es: "18-20°C",
            de: "18-20°C",
            nl: "18-20°C"
          },
          {
            en: "20-22°C",
            es: "20-22°C",
            de: "20-22°C",
            nl: "20-22°C"
          }
        ],
        correct: 2,
        explanation: {
          en: "Aged Barolo should be served at 18-20°C to fully express its complex aromatics and tannin structure without overwhelming the palate.",
          es: "El Barolo envejecido debe servirse a 18-20°C para expresar completamente su aromática compleja y estructura tánica sin abrumar el paladar.",
          de: "Gereifter Barolo sollte bei 18-20°C serviert werden, um seine komplexe Aromatik und Tanninstruktur vollständig zum Ausdruck zu bringen, ohne den Gaumen zu überfordern.",
          nl: "Gerijpte Barolo moet worden geserveerd bij 18-20°C om de complexe aroma's en tanninstructuur volledig tot uitdrukking te laten komen zonder het gehemelte te overweldigen."
        }
      },
      {
        question: {
          en: "Which soil type is essential for the minerality in Chablis Grand Cru?",
          es: "¿Qué tipo de suelo es esencial para la mineralidad en Chablis Grand Cru?",
          de: "Welcher Bodentyp ist essentiell für die Mineralität in Chablis Grand Cru?",
          nl: "Welk bodemtype is essentieel voor de mineraliteit in Chablis Grand Cru?"
        },
        options: [
          {
            en: "Limestone with fossilized oysters",
            es: "Caliza con ostras fosilizadas",
            de: "Kalkstein mit versteinerten Austern",
            nl: "Kalksteen met gefossiliseerde oesters"
          },
          {
            en: "Kimmeridgian marl",
            es: "Marga Kimmeridgiana",
            de: "Kimmeridge-Mergel",
            nl: "Kimmeridgian mergel"
          },
          {
            en: "Volcanic ash",
            es: "Ceniza volcánica",
            de: "Vulkanasche",
            nl: "Vulkanische as"
          },
          {
            en: "Granite decomposition",
            es: "Descomposición de granito",
            de: "Granitverwitterung",
            nl: "Graniet vertering"
          }
        ],
        correct: 1,
        explanation: {
          en: "Kimmeridgian marl, containing fossilized marine life from the Jurassic period, gives Chablis Grand Cru its distinctive mineral character and oyster shell notes.",
          es: "La marga Kimmeridgiana, que contiene vida marina fosilizada del período Jurásico, le da al Chablis Grand Cru su carácter mineral distintivo y notas de concha de ostra.",
          de: "Kimmeridge-Mergel, der versteinerte Meereslebewesen aus der Jurazeit enthält, verleiht Chablis Grand Cru seinen charakteristischen mineralischen Charakter und Austernschalen-Noten.",
          nl: "Kimmeridgian mergel, met gefossiliseerd zeeleven uit het Jura tijdperk, geeft Chablis Grand Cru zijn onderscheidende minerale karakter en oesterschelp aroma's."
        }
      },
      {
        question: {
          en: "What is the traditional method for determining harvest timing in Champagne?",
          es: "¿Cuál es el método tradicional para determinar el momento de cosecha en Champagne?",
          de: "Was ist die traditionelle Methode zur Bestimmung des Erntezeitpunkts in der Champagne?",
          nl: "Wat is de traditionele methode voor het bepalen van het oogsttijdstip in Champagne?"
        },
        options: [
          {
            en: "Sugar levels reaching 10-11° Baumé",
          es: "Niveles de azúcar alcanzando 10-11° Baumé",
            de: "Zuckergehalt von 10-11° Baumé",
            nl: "Suikergehalte van 10-11° Baumé"
          },
          {
            en: "Skin color intensity measurement",
            es: "Medición de intensidad del color de la piel",
            de: "Messung der Schalenfarbintensität",
            nl: "Meting van schilkleur intensiteit"
          },
          {
            en: "Acid levels dropping to 6-7 g/L",
            es: "Niveles de ácido cayendo a 6-7 g/L",
            de: "Säuregehalt fallend auf 6-7 g/L",
            nl: "Zuurgehalte dalend naar 6-7 g/L"
          },
          {
            en: "Tannin ripeness evaluation",
            es: "Evaluación de madurez de taninos",
            de: "Bewertung der Tanninreife",
            nl: "Evaluatie van tannine rijpheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "In Champagne, harvest timing is determined by sugar levels reaching 10-11° Baumé while maintaining high acidity, crucial for the base wine's freshness and aging potential.",
          es: "En Champagne, el momento de cosecha se determina cuando los niveles de azúcar alcanzan 10-11° Baumé mientras mantienen alta acidez, crucial para la frescura y potencial de envejecimiento del vino base.",
          de: "In der Champagne wird der Erntezeitpunkt durch Zuckergehalt von 10-11° Baumé bei Erhaltung hoher Säure bestimmt, entscheidend für die Frische und das Alterungspotential des Grundweins.",
          nl: "In Champagne wordt het oogsttijdstip bepaald door suikergehalte van 10-11° Baumé terwijl hoge zuren worden behouden, cruciaal voor de frisheid en rijpingspotentieel van de basiswijn."
        }
      },
      {
        question: {
          en: "Which component contributes most to the 'goût de terroir' in Burgundy?",
          es: "¿Qué componente contribuye más al 'goût de terroir' en Borgoña?",
          de: "Welche Komponente trägt am meisten zum 'goût de terroir' in Burgund bei?",
          nl: "Welke component draagt het meest bij aan de 'goût de terroir' in Bourgogne?"
        },
        options: [
          {
            en: "Native yeast fermentation",
            es: "Fermentación con levaduras nativas",
            de: "Spontanvergärung mit Wildhefe",
            nl: "Wilde gist fermentatie"
          },
          {
            en: "Limestone-clay soil composition",
            es: "Composición del suelo caliza-arcilla",
            de: "Kalkstein-Ton-Bodenzusammensetzung",
            nl: "Kalksteen-klei bodemsamenstelling"
          },
          {
            en: "Micro-climate variations",
            es: "Variaciones de microclima",
            de: "Mikroklima-Variationen",
            nl: "Microklimaat variaties"
          },
          {
            en: "Vine age and root depth",
            es: "Edad de la vid y profundidad de raíces",
            de: "Rebstockalter und Wurzeltiefe",
            nl: "Wijnstokleeftijd en worteldiepte"
          }
        ],
        correct: 1,
        explanation: {
          en: "The limestone-clay soil composition in Burgundy is the primary contributor to 'goût de terroir', providing mineral complexity and drainage characteristics that define each climat's unique expression.",
          es: "La composición del suelo caliza-arcilla en Borgoña es el principal contribuyente al 'goût de terroir', proporcionando complejidad mineral y características de drenaje que definen la expresión única de cada climat.",
          de: "Die Kalkstein-Ton-Bodenzusammensetzung in Burgund ist der Hauptfaktor für den 'goût de terroir' und bietet mineralische Komplexität und Drainageeigenschaften, die jeden Climat einzigartig definieren.",
          nl: "De kalksteen-klei bodemsamenstelling in Bourgogne is de primaire bijdrage aan 'goût de terroir', die minerale complexiteit en drainage-eigenschappen biedt die elke climat's unieke expressie definiëren."
        }
      },
      {
        question: {
          en: "What is the ideal decanting time for a 20-year-old Brunello di Montalcino?",
          es: "¿Cuál es el tiempo ideal de decantación para un Brunello di Montalcino de 20 años?",
          de: "Was ist die ideale Dekantierzeit für einen 20 Jahre alten Brunello di Montalcino?",
          nl: "Wat is de ideale decanteer tijd voor een 20 jaar oude Brunello di Montalcino?"
        },
        options: [
          {
            en: "30 minutes",
            es: "30 minutos",
            de: "30 Minuten",
            nl: "30 minuten"
          },
          {
            en: "1-2 hours",
            es: "1-2 horas",
            de: "1-2 Stunden",
            nl: "1-2 uur"
          },
          {
            en: "3-4 hours",
            es: "3-4 horas",
            de: "3-4 Stunden",
            nl: "3-4 uur"
          },
          {
            en: "6+ hours",
            es: "6+ horas",
            de: "6+ Stunden",
            nl: "6+ uur"
          }
        ],
        correct: 2,
        explanation: {
          en: "A 20-year-old Brunello di Montalcino benefits from 3-4 hours of decanting to allow the complex aromatics to develop and integrate while softening the still-firm tannins.",
          es: "Un Brunello di Montalcino de 20 años se beneficia de 3-4 horas de decantación para permitir que se desarrollen e integren las aromáticas complejas mientras suavizan los taninos aún firmes.",
          de: "Ein 20 Jahre alter Brunello di Montalcino profitiert von 3-4 Stunden Dekantieren, damit sich die komplexe Aromatik entwickeln und integrieren kann, während sich die noch festen Tannine weich machen.",
          nl: "Een 20 jaar oude Brunello di Montalcino heeft baat bij 3-4 uur decanteren om de complexe aroma's te laten ontwikkelen en integreren terwijl de nog stevige tannines verzachten."
        }
      },
      {
        question: {
          en: "Which olfactory compound is for the 'wet stones' aroma in Riesling?",
          es: "¿Qué compuesto olfativo es principalmente responsable del aroma a 'piedras húmedas' en Riesling?",
          de: "Welche olfaktorische Verbindung ist hauptsächlich für das 'nasse Steine'-Aroma in Riesling verantwortlich?",
          nl: "Welke reukstof is primair verantwoordelijk voor het 'natte stenen' aroma in Riesling?"
        },
        options: [
          {
            en: "Geosmin",
            es: "Geosmina",
            de: "Geosmin",
            nl: "Geosmin"
          },
          {
            en: "Petrichor compounds",
            es: "Compuestos de petricor",
            de: "Petrichor-Verbindungen",
            nl: "Petrichor verbindingen"
          },
          {
            en: "Mineral salts absorption",
            es: "Absorción de sales minerales",
            de: "Mineralsalz-Absorption",
            nl: "Mineraalzout absorptie"
          },
          {
            en: "Terpene derivatives",
            es: "Derivados de terpenos",
            de: "Terpen-Derivate",
            nl: "Terpeen derivaten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Geosmin, an organic compound produced by soil bacteria, is absorbed by vine roots and contributes to the characteristic 'wet stones' minerality in Riesling, especially from slate soils.",
          es: "La geosmina, un compuesto orgánico producido por bacterias del suelo, es absorbida por las raíces de la vid y contribuye a la mineralidad característica de 'piedras húmedas' en Riesling, especialmente de suelos de pizarra.",
          de: "Geosmin, eine organische Verbindung, die von Bodenbakterien produziert wird, wird von Rebwurzeln absorbiert und trägt zur charakteristischen 'nasse Steine'-Mineralität im Riesling bei, besonders von Schieferböden.",
          nl: "Geosmin, een organische verbinding geproduceerd door bodembacteriën, wordt geabsorbeerd door wijnstokwortels en draagt bij aan de karakteristieke 'natte stenen' mineraliteit in Riesling, vooral van leisteenbodems."
        }
      },
      {
        question: {
          en: "What is the traditional riddling angle progression in méthode champenoise?",
          es: "¿Cuál es la progresión tradicional del ángulo de removido en méthode champenoise?",
          de: "Was ist die traditionelle Rüttelpult-Winkel-Progression in der méthode champenoise?",
          nl: "Wat is de traditionele riddling hoek progressie in méthode champenoise?"
        },
        options: [
          {
            en: "45° to 90° over 6 weeks",
            es: "45° a 90° durante 6 semanas",
            de: "45° bis 90° über 6 Wochen",
            nl: "45° tot 90° over 6 weken"
          },
          {
            en: "30° to 75° over 8 weeks",
            es: "30° a 75° durante 8 semanas",
            de: "30° bis 75° über 8 Wochen",
            nl: "30° tot 75° over 8 weken"
          },
          {
            en: "Horizontal to vertical over 6-8 weeks",
            es: "Horizontal a vertical durante 6-8 semanas",
            de: "Horizontal bis vertikal über 6-8 Wochen",
            nl: "Horizontaal tot verticaal over 6-8 weken"
          },
          {
            en: "15° increments weekly for 10 weeks",
            es: "Incrementos de 15° semanalmente por 10 semanas",
            de: "15°-Schritte wöchentlich für 10 Wochen",
            nl: "15° stappen wekelijks gedurende 10 weken"
          }
        ],
        correct: 2,
        explanation: {
          en: "Traditional riddling progresses from horizontal to vertical (sur pointe) over 6-8 weeks, gradually consolidating sediment in the neck for disgorgement.",
          es: "El removido tradicional progresa de horizontal a vertical (sur pointe) durante 6-8 semanas, consolidando gradualmente el sedimento en el cuello para el degüelle.",
          de: "Das traditionelle Rütteln schreitet von horizontal zu vertikal (sur pointe) über 6-8 Wochen voran und konsolidiert allmählich das Sediment im Flaschenhals für das Degorgieren.",
          nl: "Traditioneel riddling gaat van horizontaal naar verticaal (sur pointe) over 6-8 weken, waarbij geleidelijk sediment in de hals wordt geconcentreerd voor dégorgement."
        }
      },
      {
        question: {
          en: "Which tannin extraction technique produces the most elegant structure in Pinot Noir?",
          es: "¿Qué técnica de extracción de taninos produce la estructura más elegante en Pinot Noir?",
          de: "Welche Tanninextraktionstechnik produziert die eleganteste Struktur in Pinot Noir?",
          nl: "Welke tannine extractie techniek produceert de meest elegante structuur in Pinot Noir?"
        },
        options: [
          {
            en: "Cold maceration followed by gentle extraction",
            es: "Maceración fría seguida de extracción suave",
            de: "Kaltmazeration gefolgt von sanfter Extraktion",
            nl: "Koude maceratie gevolgd door zachte extractie"
          },
          {
            en: "Hot fermentation with extended maceration",
            es: "Fermentación caliente con maceración extendida",
            de: "Heißvergärung mit verlängerter Mazeration",
            nl: "Hete fermentatie met verlengde maceratie"
          },
          {
            en: "Whole cluster fermentation",
            es: "Fermentación de racimo entero",
            de: "Ganztraubenvergärung",
            nl: "Hele tros fermentatie"
          },
          {
            en: "Micro-oxygenation during fermentation",
            es: "Micro-oxigenación durante fermentación",
            de: "Mikrooxygenierung während der Gärung",
            nl: "Micro-oxygenatie tijdens fermentatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cold maceration followed by gentle extraction preserves Pinot Noir's delicate aromatics while extracting fine tannins, creating the elegant, silky structure characteristic of great Burgundy.",
          es: "La maceración fría seguida de extracción suave preserva las aromáticas delicadas del Pinot Noir mientras extrae taninos finos, creando la estructura elegante y sedosa característica de los grandes Borgoña.",
          de: "Kaltmazeration gefolgt von sanfter Extraktion bewahrt die delikaten Aromen des Pinot Noir, während feine Tannine extrahiert werden, wodurch die elegante, seidige Struktur großer Burgunder entsteht.",
          nl: "Koude maceratie gevolgd door zachte extractie behoudt Pinot Noir's delicate aroma's terwijl fijne tannines worden geëxtraheerd, wat de elegante, zijdeachtige structuur creëert die kenmerkend is voor grote Bourgogne."
        }
      },
      {
        question: {
          en: "What is the optimal sulfur dioxide level for aging fine red Bordeaux?",
          es: "¿Cuál es el nivel óptimo de dióxido de azufre para envejecer burdeos tintos finos?",
          de: "Was ist der optimale Schwefeldioxid-Gehalt für die Reifung feiner roter Bordeaux?",
          nl: "Wat is het optimale zwaveldioxide niveau voor het rijpen van fijne rode Bordeaux?"
        },
        options: [
          {
            en: "15-25 mg/L free SO2",
            es: "15-25 mg/L SO2 libre",
            de: "15-25 mg/L freies SO2",
            nl: "15-25 mg/L vrije SO2"
          },
          {
            en: "25-35 mg/L free SO2",
            es: "25-35 mg/L SO2 libre",
            de: "25-35 mg/L freies SO2",
            nl: "25-35 mg/L vrije SO2"
          },
          {
            en: "35-45 mg/L free SO2",
            es: "35-45 mg/L SO2 libre",
            de: "35-45 mg/L freies SO2",
            nl: "35-45 mg/L vrije SO2"
          },
          {
            en: "45-55 mg/L free SO2",
            es: "45-55 mg/L SO2 libre",
            de: "45-55 mg/L freies SO2",
            nl: "45-55 mg/L vrije SO2"
          }
        ],
        correct: 1,
        explanation: {
          en: "Fine red Bordeaux requires 25-35 mg/L free SO2 during aging to prevent oxidation and microbial spoilage while allowing controlled development of complex tertiary aromatics.",
          es: "Los burdeos tintos finos requieren 25-35 mg/L de SO2 libre durante el envejecimiento para prevenir oxidación y deterioro microbiano mientras permiten el desarrollo controlado de aromáticas terciarias complejas.",
          de: "Feine rote Bordeaux benötigen 25-35 mg/L freies SO2 während der Reifung, um Oxidation und mikrobielle Verderbnis zu verhindern, während eine kontrollierte Entwicklung komplexer Tertiäraromen ermöglicht wird.",
          nl: "Fijne rode Bordeaux vereist 25-35 mg/L vrije SO2 tijdens rijping om oxidatie en microbiële bederf te voorkomen terwijl gecontroleerde ontwikkeling van complexe tertiaire aroma's mogelijk wordt gemaakt."
        }
      },
      {
        question: {
          en: "Which malolactic bacteria strain produces the most refined texture in Chardonnay?",
          es: "¿Qué cepa de bacteria maloláctica produce la textura más refinada en Chardonnay?",
          de: "Welcher Milchsäurebakterien-Stamm produziert die raffinierteste Textur in Chardonnay?",
          nl: "Welke melkzuurbacterie stam produceert de meest verfijnde textuur in Chardonnay?"
        },
        options: [
          {
            en: "Oenococcus oeni",
            es: "Oenococcus oeni",
            de: "Oenococcus oeni",
            nl: "Oenococcus oeni"
          },
          {
            en: "Lactobacillus plantarum",
            es: "Lactobacillus plantarum",
            de: "Lactobacillus plantarum",
            nl: "Lactobacillus plantarum"
          },
          {
            en: "Leuconostoc mesenteroides",
            es: "Leuconostoc mesenteroides",
            de: "Leuconostoc mesenteroides",
            nl: "Leuconostoc mesenteroides"
          },
          {
            en: "Pediococcus damnosus",
            es: "Pediococcus damnosus",
            de: "Pediococcus damnosus",
            nl: "Pediococcus damnosus"
          }
        ],
        correct: 0,
        explanation: {
          en: "Oenococcus oeni is the preferred strain for Chardonnay malolactic fermentation, producing a refined, creamy texture while maintaining varietal character and avoiding off-flavors.",
          es: "Oenococcus oeni es la cepa preferida para la fermentación maloláctica del Chardonnay, produciendo una textura refinada y cremosa mientras mantiene el carácter varietal y evita sabores extraños.",
          de: "Oenococcus oeni ist der bevorzugte Stamm für die Milchsäuregärung von Chardonnay und produziert eine raffinierte, cremige Textur unter Beibehaltung des Sortencharakters und Vermeidung von Fehlaromen.",
          nl: "Oenococcus oeni is de voorkeurssoort voor Chardonnay malolactische fermentatie, die een verfijnde, romige textuur produceert terwijl het druivenkarakter behouden blijft en off-flavors worden vermeden."
        }
      },
      {
        question: {
          en: "What is the traditional lees stirring frequency for top Meursault?",
          es: "¿Cuál es la frecuencia tradicional de battonage para los mejores Meursault?",
          de: "Was ist die traditionelle Hefelager-Rührfrequenz für Top-Meursault?",
          nl: "Wat is de traditionele gistroer frequentie voor top Meursault?"
        },
        options: [
          {
            en: "Daily for 3 months",
            es: "Diariamente durante 3 meses",
            de: "Täglich für 3 Monate",
            nl: "Dagelijks gedurende 3 maanden"
          },
          {
            en: "Weekly for 6 months",
            es: "Semanalmente durante 6 meses",
            de: "Wöchentlich für 6 Monate",
            nl: "Wekelijks gedurende 6 maanden"
          },
          {
            en: "Bi-weekly for 9-12 months",
            es: "Quincenal durante 9-12 meses",
            de: "Zweiwöchentlich für 9-12 Monate",
            nl: "Tweewekelijks gedurende 9-12 maanden"
          },
          {
            en: "Monthly for 18 months",
            es: "Mensualmente durante 18 meses",
            de: "Monatlich für 18 Monate",
            nl: "Maandelijks gedurende 18 maanden"
          }
        ],
        correct: 2,
        explanation: {
          en: "Top Meursault undergoes bâtonnage bi-weekly for 9-12 months to develop complex texture and integrate oak while maintaining freshness and avoiding excessive creaminess.",
          es: "Los mejores Meursault se someten a bâtonnage quincenal durante 9-12 meses para desarrollar textura compleja e integrar roble mientras mantienen frescura y evitan cremosidad excesiva.",
          de: "Top-Meursault durchläuft zweiwöchentlich Bâtonnage für 9-12 Monate, um komplexe Textur zu entwickeln und Eiche zu integrieren, während Frische erhalten bleibt und übermäßige Cremigkeit vermieden wird.",
          nl: "Top Meursault ondergaat tweewekelijks bâtonnage gedurende 9-12 maanden om complexe textuur te ontwikkelen en eiken te integreren terwijl frisheid behouden blijft en overmatige romigheid wordt vermeden."
        }
      },
      {
        question: {
          en: "Which vineyard practice is essential for producing Eiswein?",
          es: "¿Qué práctica de viñedo es esencial para producir Eiswein?",
          de: "Welche Weinbergspraxis ist für die Produktion von Eiswein unerlässlich?",
          nl: "Welke wijngaard praktijk is essentieel voor het produceren van Eiswein?"
        },
        options: [
          {
            en: "Net protection against birds until -7°C harvest",
            es: "Protección con redes contra pájaros hasta cosecha a -7°C",
            de: "Netzschutz gegen Vögel bis zur -7°C-Ernte",
            nl: "Netbescherming tegen vogels tot -7°C oogst"
          },
          {
            en: "Late pruning to delay bud break",
            es: "Poda tardía para retrasar brotación",
            de: "Spätes Beschneiden zur Verzögerung des Austriebs",
            nl: "Late snoei om uitlopen te vertragen"
          },
          {
            en: "Extreme leaf removal for air circulation",
            es: "Eliminación extrema de hojas para circulación de aire",
            de: "Extreme Entblätterung für Luftzirkulation",
            nl: "Extreme bladverwijdering voor luchtcirculatie"
          },
          {
            en: "Anti-fungal spraying throughout winter",
            es: "Fumigación anti-fúngica durante todo el invierno",
            de: "Antimykotische Spritzung während des gesamten Winters",
            nl: "Anti-schimmel besproeien gedurende de winter"
          }
        ],
        correct: 0,
        explanation: {
          en: "Net protection against birds is crucial for Eiswein, as grapes must remain on the vine until temperatures drop to at least -7°C for natural freezing and concentration.",
          es: "La protección con redes contra pájaros es crucial para Eiswein, ya que las uvas deben permanecer en la vid hasta que las temperaturas caigan a al menos -7°C para congelación y concentración natural.",
          de: "Netzschutz gegen Vögel ist entscheidend für Eiswein, da die Trauben am Rebstock bleiben müssen, bis die Temperaturen auf mindestens -7°C fallen für natürliche Gefrierung und Konzentration.",
          nl: "Netbescherming tegen vogels is cruciaal voor Eiswein, aangezien druiven aan de wijnstok moeten blijven tot temperaturen dalen tot ten minste -7°C voor natuurlijke bevriezing en concentratie."
        }
      },
      {
        question: {
          en: "What defines a 'monopole' vineyard in Burgundy?",
          es: "¿Qué define un viñedo 'monopole' en Borgoña?",
          de: "Was definiert einen 'Monopole'-Weinberg in Burgund?",
          nl: "Wat definieert een 'monopole' wijngaard in Bourgogne?"
        },
        options: [
          {
            en: "Single-varietal planting only",
            es: "Plantación de variedad única solamente",
            de: "Nur einsortige Bepflanzung",
            nl: "Enkel enkelvariëteit beplanting"
          },
          {
            en: "Entirely owned by one producer",
            es: "Propiedad total de un solo productor",
            de: "Vollständiges Eigentum eines Erzeugers",
            nl: "Volledig eigendom van één producent"
          },
          {
            en: "Organically certified vineyard",
            es: "Viñedo certificado orgánico",
            de: "Bio-zertifizierter Weinberg",
            nl: "Biologisch gecertificeerde wijngaard"
          },
          {
            en: "Grand Cru with exclusive terroir",
            es: "Grand Cru con terroir exclusivo",
            de: "Grand Cru mit exklusivem Terroir",
            nl: "Grand Cru met exclusief terroir"
          }
        ],
        correct: 1,
        explanation: {
          en: "A monopole is a vineyard entirely owned by a single producer, allowing complete control over viticulture and winemaking. Famous examples include Romanée-Conti and La Tâche.",
          es: "Un monopole es un viñedo de propiedad total de un solo productor, permitiendo control completo sobre viticultura y vinificación. Ejemplos famosos incluyen Romanée-Conti y La Tâche.",
          de: "Ein Monopole ist ein Weinberg, der vollständig einem einzigen Erzeuger gehört und vollständige Kontrolle über Weinbau und Weinherstellung ermöglicht. Berühmte Beispiele sind Romanée-Conti und La Tâche.",
          nl: "Een monopole is een wijngaard volledig in eigendom van één producent, wat volledige controle over wijnbouw en vinificatie mogelijk maakt. Beroemde voorbeelden zijn Romanée-Conti en La Tâche."
        }
      },
      {
        question: {
          en: "What is the primary benefit of whole cluster fermentation in premium Syrah?",
          es: "¿Cuál es el beneficio principal de fermentación de racimo entero en Syrah premium?",
          de: "Was ist der Hauptvorteil der Ganztraubenvergärung in Premium-Syrah?",
          nl: "Wat is het primaire voordeel van hele tros fermentatie in premium Syrah?"
        },
        options: [
          {
            en: "Increases alcohol content by 1-2%",
            es: "Aumenta contenido alcohólico en 1-2%",
            de: "Erhöht Alkoholgehalt um 1-2%",
            nl: "Verhoogt alcoholgehalte met 1-2%"
          },
          {
            en: "Enhances spice aromatics and tannin structure",
            es: "Mejora aromáticas especiadas y estructura tánica",
            de: "Verstärkt Gewürzaromen und Tanninstruktur",
            nl: "Versterkt kruidig aroma en tannine structuur"
          },
          {
            en: "Speeds up fermentation by 30%",
            es: "Acelera fermentación en 30%",
            de: "Beschleunigt Gärung um 30%",
            nl: "Versnelt fermentatie met 30%"
          },
          {
            en: "Reduces need for sulfur dioxide",
            es: "Reduce necesidad de dióxido de azufre",
            de: "Reduziert Bedarf an Schwefeldioxid",
            nl: "Vermindert behoefte aan zwaveldioxide"
          }
        ],
        correct: 1,
        explanation: {
          en: "Whole cluster fermentation in premium Syrah enhances spice aromatics (especially white pepper) and creates more complex, silky tannin structure through carbonic maceration within intact berries.",
          es: "La fermentación de racimo entero en Syrah premium mejora las aromáticas especiadas (especialmente pimienta blanca) y crea estructura tánica más compleja y sedosa mediante maceración carbónica dentro de bayas intactas.",
          de: "Ganztraubenvergärung in Premium-Syrah verstärkt Gewürzaromen (besonders weißer Pfeffer) und schafft komplexere, seidige Tanninstruktur durch Kohlensäuremaischung in intakten Beeren.",
          nl: "Hele tros fermentatie in premium Syrah versterkt kruidig aroma (vooral witte peper) en creëert complexere, zijdeachtige tannine structuur door koolzuurmaceratie binnen intacte bessen."
        }
      },
      {
        question: {
          en: "Which aging vessel produces the most pronounced oak integration in Rioja Gran Reserva?",
          es: "¿Qué recipiente de envejecimiento produce la integración de roble más pronunciada en Rioja Gran Reserva?",
          de: "Welches Reifegefäß produziert die ausgeprägteste Eichenintegration in Rioja Gran Reserva?",
          nl: "Welk rijpingsvat produceert de meest uitgesproken eiken integratie in Rioja Gran Reserva?"
        },
        options: [
          {
            en: "New French oak barriques (225L)",
            es: "Barricas nuevas de roble francés (225L)",
            de: "Neue französische Eichenfässer (225L)",
            nl: "Nieuwe Franse eiken barriques (225L)"
          },
          {
            en: "American oak barriques with medium toast",
            es: "Barricas de roble americano con tostado medio",
            de: "Amerikanische Eichenfässer mit mittlerem Toast",
            nl: "Amerikaanse eiken barriques met medium toast"
          },
          {
            en: "Large format Slovenian oak foudres",
            es: "Foudres grandes de roble esloveno",
            de: "Große slowenische Eichenfässer",
            nl: "Grote Sloveense eiken foudres"
          },
          {
            en: "Aged American oak 'bordelesa' barrels",
            es: "Barriles americanos 'bordelesa' envejecidos",
            de: "Gealterte amerikanische 'Bordelesa'-Fässer",
            nl: "Gerijpte Amerikaanse 'bordelesa' vaten"
          }
        ],
        correct: 3,
        explanation: {
          en: "Rioja Gran Reserva traditionally uses aged American oak 'bordelesa' (225L) barrels, which provide subtle vanilla and coconut notes while allowing gradual oxidation and complex tertiary development over extended aging.",
          es: "Rioja Gran Reserva tradicionalmente usa barriles americanos 'bordelesa' (225L) envejecidos, que proporcionan sutiles notas de vainilla y coco mientras permiten oxidación gradual y desarrollo terciario complejo durante envejecimiento extendido.",
          de: "Rioja Gran Reserva verwendet traditionell gealterte amerikanische 'Bordelesa'-Fässer (225L), die subtile Vanille- und Kokosnoten bieten und gleichzeitig graduelle Oxidation und komplexe Tertiärentwicklung über längere Reifung ermöglichen.",
          nl: "Rioja Gran Reserva gebruikt traditioneel gerijpte Amerikaanse 'bordelesa' (225L) vaten, die subtiele vanille en kokos noten geven terwijl geleidelijke oxidatie en complexe tertiaire ontwikkeling mogelijk wordt gemaakt tijdens verlengde rijping."
        }
      },
      {
        question: {
          en: "What is the ideal pH range for long-term cellaring of Cabernet Sauvignon?",
          es: "¿Cuál es el rango de pH ideal para el envejecimiento a largo plazo de Cabernet Sauvignon?",
          de: "Was ist der ideale pH-Bereich für die Langzeitreifung von Cabernet Sauvignon?",
          nl: "Wat is het ideale pH-bereik voor langdurige keldering van Cabernet Sauvignon?"
        },
        options: [
          {
            en: "3.2-3.4",
            es: "3.2-3.4",
            de: "3.2-3.4",
            nl: "3.2-3.4"
          },
          {
            en: "3.5-3.7",
            es: "3.5-3.7",
            de: "3.5-3.7",
            nl: "3.5-3.7"
          },
          {
            en: "3.8-4.0",
            es: "3.8-4.0",
            de: "3.8-4.0",
            nl: "3.8-4.0"
          },
          {
            en: "4.1-4.3",
            es: "4.1-4.3",
            de: "4.1-4.3",
            nl: "4.1-4.3"
          }
        ],
        correct: 1,
        explanation: {
          en: "The ideal pH range for long-term cellaring of Cabernet Sauvignon is 3.5-3.7, providing sufficient acidity for microbial stability and aging potential while maintaining balanced structure and flavor integration.",
          es: "El rango de pH ideal para el envejecimiento a largo plazo de Cabernet Sauvignon es 3.5-3.7, proporcionando acidez suficiente para estabilidad microbiana y potencial de envejecimiento mientras mantiene estructura equilibrada e integración de sabores.",
          de: "Der ideale pH-Bereich für die Langzeitreifung von Cabernet Sauvignon ist 3.5-3.7, was ausreichende Säure für mikrobielle Stabilität und Reifepotential bietet, während ausgewogene Struktur und Geschmacksintegration erhalten bleiben.",
          nl: "Het ideale pH-bereik voor langdurige keldering van Cabernet Sauvignon is 3.5-3.7, wat voldoende zuurgraad biedt voor microbiële stabiliteit en rijpingspotentieel terwijl gebalanceerde structuur en smaakintegratie behouden blijven."
        }
      },
      {
        question: {
          en: "Which pressing technique preserves the most aromatic integrity in Gewürztraminer?",
          es: "¿Qué técnica de prensado preserva la mayor integridad aromática en Gewürztraminer?",
          de: "Welche Presstechnik bewahrt die aromatische Integrität in Gewürztraminer am besten?",
          nl: "Welke perstechniek behoudt de meeste aromatische integriteit in Gewürztraminer?"
        },
        options: [
          {
            en: "Whole cluster pneumatic pressing",
            es: "Prensado neumático de racimo entero",
            de: "Ganztrauben-Pneumatikpressung",
            nl: "Hele tros pneumatisch persen"
          },
          {
            en: "Traditional basket pressing",
            es: "Prensado tradicional de canasta",
            de: "Traditionelle Korbpressung",
            nl: "Traditioneel mandje persen"
          },
          {
            en: "High-speed screw pressing",
            es: "Prensado de tornillo de alta velocidad",
            de: "Hochgeschwindigkeits-Schneckenpresse",
            nl: "Hoge snelheid schroef persen"
          },
          {
            en: "Continuous belt pressing",
            es: "Prensado continuo de banda",
            de: "Kontinuierliche Bandpressung",
            nl: "Continu band persen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Whole cluster pneumatic pressing is gentlest for Gewürztraminer, preserving delicate lychee and rose petal aromatics while minimizing phenolic extraction and bitterness from the aromatic skins.",
          es: "El prensado neumático de racimo entero es el más suave para Gewürztraminer, preservando las delicadas aromáticas de lichi y pétalos de rosa mientras minimiza la extracción fenólica y amargor de las pieles aromáticas.",
          de: "Ganztrauben-Pneumatikpressung ist am schonendsten für Gewürztraminer und bewahrt die delikaten Litschi- und Rosenblatt-Aromen, während phenolische Extraktion und Bitterkeit aus den aromatischen Schalen minimiert werden.",
          nl: "Hele tros pneumatisch persen is het zachtst voor Gewürztraminer, waarbij delicate lychee en rozenblaadjes aroma's behouden blijven terwijl fenolische extractie en bitterheid van de aromatische schillen worden geminimaliseerd."
        }
      },
      {
        question: {
          en: "What is the optimal cork length for wines intended for 30+ years cellaring?",
          es: "¿Cuál es la longitud óptima del corcho para vinos destinados a 30+ años de envejecimiento?",
          de: "Was ist die optimale Korklänge für Weine, die für 30+ Jahre Lagerung bestimmt sind?",
          nl: "Wat is de optimale kurk lengte voor wijnen bestemd voor 30+ jaar keldering?"
        },
        options: [
          {
            en: "38mm",
            es: "38mm",
            de: "38mm",
            nl: "38mm"
          },
          {
            en: "44mm",
            es: "44mm",
            de: "44mm",
            nl: "44mm"
          },
          {
            en: "49mm",
            es: "49mm",
            de: "49mm",
            nl: "49mm"
          },
          {
            en: "54mm",
            es: "54mm",
            de: "54mm",
            nl: "54mm"
          }
        ],
        correct: 2,
        explanation: {
          en: "Premium wines for extended cellaring use 49mm corks, providing superior sealing integrity and controlled oxygen transmission over decades while minimizing cork taint risk through increased density.",
          es: "Los vinos premium para envejecimiento extendido usan corchos de 49mm, proporcionando integridad de sellado superior y transmisión de oxígeno controlada durante décadas mientras minimizan el riesgo de sabor a corcho mediante mayor densidad.",
          de: "Premium-Weine für längere Lagerung verwenden 49mm-Korken, die überlegene Versiegelungsintegrität und kontrollierte Sauerstoffübertragung über Jahrzehnte bieten, während das Risiko von Korkgeschmack durch erhöhte Dichte minimiert wird.",
          nl: "Premium wijnen voor verlengde keldering gebruiken 49mm kurken, die superieure afdichtingsintegriteit en gecontroleerde zuurstoftransmissie over decennia bieden terwijl kurksmaak risico wordt geminimaliseerd door verhoogde dichtheid."
        }
      },
      {
        question: {
          en: "Which viticultural practice is essential for producing Amarone della Valpolicella?",
          es: "¿Qué práctica vitícola es esencial para producir Amarone della Valpolicella?",
          de: "Welche weinbauliche Praxis ist für die Produktion von Amarone della Valpolicella unerlässlich?",
          nl: "Welke wijnbouwpraktijk is essentieel voor het produceren van Amarone della Valpolicella?"
        },
        options: [
          {
            en: "Early harvest at low sugar levels",
            es: "Cosecha temprana con niveles bajos de azúcar",
            de: "Frühe Ernte bei niedrigem Zuckergehalt",
            nl: "Vroege oogst bij lage suikergehalten"
          },
          {
            en: "Post-harvest appassimento drying for 3-4 months",
            es: "Secado post-cosecha appassimento durante 3-4 meses",
            de: "Appassimento-Trocknung nach der Ernte für 3-4 Monate",
            nl: "Post-oogst appassimento drogen gedurende 3-4 maanden"
          },
          {
            en: "Cryoextraction immediately after picking",
            es: "Crioextracción inmediatamente después de la cosecha",
            de: "Kryoextraktion sofort nach der Lese",
            nl: "Cryo-extractie direct na het plukken"
          },
          {
            en: "Fermentation on frozen grape skins",
            es: "Fermentación sobre pieles de uva congeladas",
            de: "Gärung auf gefrorenen Traubenschalen",
            nl: "Fermentatie op bevroren druivenschillen"
          }
        ],
        correct: 1,
        explanation: {
          en: "Amarone requires post-harvest appassimento, where grapes are dried in well-ventilated rooms for 3-4 months, concentrating sugars and flavors to 30-40% weight loss before fermentation.",
          es: "Amarone requiere appassimento post-cosecha, donde las uvas se secan en habitaciones bien ventiladas durante 3-4 meses, concentrando azúcares y sabores hasta 30-40% de pérdida de peso antes de la fermentación.",
          de: "Amarone erfordert Appassimento nach der Ernte, wobei Trauben in gut belüfteten Räumen 3-4 Monate getrocknet werden, um Zucker und Aromen auf 30-40% Gewichtsverlust vor der Gärung zu konzentrieren.",
          nl: "Amarone vereist post-oogst appassimento, waarbij druiven in goed geventileerde ruimtes 3-4 maanden worden gedroogd, waarbij suikers en smaken worden geconcentreerd tot 30-40% gewichtsverlies voor fermentatie."
        }
      },
      {
        question: {
          en: "What is the minimum sur lie aging required for Muscadet Sèvre et Maine Sur Lie AOC?",
          es: "¿Cuál es el envejecimiento mínimo sur lie requerido para Muscadet Sèvre et Maine Sur Lie AOC?",
          de: "Was ist die minimale Sur-Lie-Reifung für Muscadet Sèvre et Maine Sur Lie AOC?",
          nl: "Wat is de minimale sur lie rijping vereist voor Muscadet Sèvre et Maine Sur Lie AOC?"
        },
        options: [
          {
            en: "Until March 1st following harvest",
            es: "Hasta el 1 de marzo siguiente a la cosecha",
            de: "Bis 1. März nach der Ernte",
            nl: "Tot 1 maart volgend op de oogst"
          },
          {
            en: "Until June 1st following harvest",
            es: "Hasta el 1 de junio siguiente a la cosecha",
            de: "Bis 1. Juni nach der Ernte",
            nl: "Tot 1 juni volgend op de oogst"
          },
          {
            en: "Until September 1st following harvest",
            es: "Hasta el 1 de septiembre siguiente a la cosecha",
            de: "Bis 1. September nach der Ernte",
            nl: "Tot 1 september volgend op de oogst"
          },
          {
            en: "12 months minimum",
            es: "12 meses mínimo",
            de: "12 Monate mindestens",
            nl: "12 maanden minimum"
          }
        ],
        correct: 0,
        explanation: {
          en: "Muscadet Sèvre et Maine Sur Lie AOC requires aging on fine lees until at least March 1st following harvest, developing texture and complexity while retaining characteristic freshness and minerality.",
          es: "Muscadet Sèvre et Maine Sur Lie AOC requiere envejecimiento sobre lías finas hasta al menos el 1 de marzo siguiente a la cosecha, desarrollando textura y complejidad mientras retiene frescura y mineralidad características.",
          de: "Muscadet Sèvre et Maine Sur Lie AOC erfordert Reifung auf Feinhefe bis mindestens 1. März nach der Ernte, wodurch Textur und Komplexität entwickelt werden, während charakteristische Frische und Mineralität erhalten bleiben.",
          nl: "Muscadet Sèvre et Maine Sur Lie AOC vereist rijping op fijne gist tot ten minste 1 maart volgend op de oogst, waarbij textuur en complexiteit worden ontwikkeld terwijl karakteristieke frisheid en mineraliteit behouden blijven."
        }
      },
      {
        question: {
          en: "What is the minimum aging requirement for Gran Reserva Rioja?",
          es: "¿Cuál es el requisito mínimo de envejecimiento para Gran Reserva Rioja?",
          de: "Was ist die Mindestalterungsanforderung für Gran Reserva Rioja?",
          nl: "Wat is de minimale rijpingseis voor Gran Reserva Rioja?"
        },
        options: [
          {
            en: "24 months barrel, 36 months total",
            es: "24 meses en barrica, 36 meses total",
            de: "24 Monate Fass, 36 Monate insgesamt",
            nl: "24 maanden vat, 36 maanden totaal"
          },
          {
            en: "18 months barrel, 24 months total",
            es: "18 meses en barrica, 24 meses total",
            de: "18 Monate Fass, 24 Monate insgesamt",
            nl: "18 maanden vat, 24 maanden totaal"
          },
          {
            en: "12 months barrel, 24 months total",
            es: "12 meses en barrica, 24 meses total",
            de: "12 Monate Fass, 24 Monate insgesamt",
            nl: "12 maanden vat, 24 maanden totaal"
          },
          {
            en: "6 months barrel, 18 months total",
            es: "6 meses en barrica, 18 meses total",
            de: "6 Monate Fass, 18 Monate insgesamt",
            nl: "6 maanden vat, 18 maanden totaal"
          }
        ],
        correct: 0,
        explanation: {
          en: "Gran Reserva Rioja must be aged minimum 24 months in oak barrel and 36 months total before release.",
          es: "Gran Reserva Rioja debe envejecer mínimo 24 meses en barrica de roble y 36 meses en total antes del lanzamiento.",
          de: "Gran Reserva Rioja muss mindestens 24 Monate im Eichenfass und insgesamt 36 Monate reifen bevor es freigegeben wird.",
          nl: "Gran Reserva Rioja moet minimaal 24 maanden rijpen in eiken vat en 36 maanden totaal voor de release."
        }
      },
      {
        question: {
          en: "What is the primary grape in Châteauneuf-du-Pape?",
          es: "¿Cuál es la uva principal en Châteauneuf-du-Pape?",
          de: "Was ist die Haupttraube in Châteauneuf-du-Pape?",
          nl: "Wat is de hoofddruif in Châteauneuf-du-Pape?"
        },
        options: [
          {
            en: "Grenache",
            es: "Grenache",
            de: "Grenache",
            nl: "Grenache"
          },
          {
            en: "Syrah",
            es: "Syrah",
            de: "Syrah",
            nl: "Syrah"
          },
          {
            en: "Mourvèdre",
            es: "Mourvèdre",
            de: "Mourvèdre",
            nl: "Mourvèdre"
          },
          {
            en: "Cabernet Sauvignon",
            es: "Cabernet Sauvignon",
            de: "Cabernet Sauvignon",
            nl: "Cabernet Sauvignon"
          }
        ],
        correct: 0,
        explanation: {
          en: "Grenache dominates Châteauneuf-du-Pape blends, though 13 grape varieties are permitted in the appellation.",
          es: "Grenache domina las mezclas de Châteauneuf-du-Pape, aunque 13 variedades de uva están permitidas en la apelación.",
          de: "Grenache dominiert Châteauneuf-du-Pape-Cuvées, obwohl 13 Rebsorten in der Appellation erlaubt sind.",
          nl: "Grenache domineert Châteauneuf-du-Pape blends, hoewel 13 druivensoorten zijn toegestaan in de appellation."
        }
      },
      {
        question: {
          en: "What does 'mis en bouteille au château' indicate?",
          es: "¿Qué indica 'mis en bouteille au château'?",
          de: "Was bedeutet 'mis en bouteille au château'?",
          nl: "Wat geeft 'mis en bouteille au château' aan?"
        },
        options: [
          {
            en: "Estate bottled at the property",
            es: "Embotellado en la propiedad",
            de: "Auf dem Weingut abgefüllt",
            nl: "Gebotteld op het landgoed"
          },
          {
            en: "Aged in the cellar",
            es: "Envejecido en la bodega",
            de: "Im Keller gereift",
            nl: "Gerijpt in de kelder"
          },
          {
            en: "Made from old vines",
            es: "Hecho de vides viejas",
            de: "Aus alten Reben hergestellt",
            nl: "Gemaakt van oude wijnstokken"
          },
          {
            en: "Single vineyard wine",
            es: "Vino de viñedo único",
            de: "Einzellagen-Wein",
            nl: "Wijn van één wijngaard"
          }
        ],
        correct: 0,
        explanation: {
          en: "'Mis en bouteille au château' means estate-bottled at the château where grapes were grown, indicating quality control.",
          es: "'Mis en bouteille au château' significa embotellado en la finca en el château donde se cultivaron las uvas, indicando control de calidad.",
          de: "'Mis en bouteille au château' bedeutet auf dem Château abgefüllt wo die Trauben angebaut wurden, was Qualitätskontrolle anzeigt.",
          nl: "'Mis en bouteille au château' betekent gebotteld op het château waar de druiven werden geteeld, wat kwaliteitscontrole aangeeft."
        }
      },
      {
        question: {
          en: "What is the traditional bottle size for Champagne?",
          es: "¿Cuál es el tamaño de botella tradicional para Champagne?",
          de: "Was ist die traditionelle Flaschengröße für Champagner?",
          nl: "Wat is de traditionele flesfmaat voor Champagne?"
        },
        options: [
          {
            en: "750ml",
            es: "750ml",
            de: "750ml",
            nl: "750ml"
          },
          {
            en: "700ml",
            es: "700ml",
            de: "700ml",
            nl: "700ml"
          },
          {
            en: "1 liter",
            es: "1 litro",
            de: "1 Liter",
            nl: "1 liter"
          },
          {
            en: "500ml",
            es: "500ml",
            de: "500ml",
            nl: "500ml"
          }
        ],
        correct: 0,
        explanation: {
          en: "Standard Champagne bottle is 750ml, though larger formats like Magnum (1.5L) age better due to slower oxygen exchange.",
          es: "La botella estándar de Champagne es 750ml, aunque formatos más grandes como Magnum (1.5L) envejecen mejor debido al intercambio de oxígeno más lento.",
          de: "Standard Champagnerflasche ist 750ml, obwohl größere Formate wie Magnum (1.5L) besser reifen aufgrund langsameren Sauerstoffaustauschs.",
          nl: "Standaard Champagne fles is 750ml, hoewel grotere formaten zoals Magnum (1.5L) beter rijpen door langzamere zuurstofuitwisseling."
        }
      },
      {
        question: {
          en: "What does 'Prédikatswein' refer to in German wine classification?",
          es: "¿A qué se refiere 'Prädikatswein' en la clasificación de vinos alemanes?",
          de: "Worauf bezieht sich 'Prädikatswein' in der deutschen Weinclassifizierung?",
          nl: "Waar verwijst 'Prädikatswein' naar in Duitse wijnclassificatie?"
        },
        options: [
          {
            en: "Quality wine with distinction based on ripeness",
            es: "Vino de calidad con distinción basada en madurez",
            de: "Qualitätswein mit Prädikat basierend auf Reife",
            nl: "Kwaliteitswijn met onderscheiding op basis van rijpheid"
          },
          {
            en: "Table wine",
            es: "Vino de mesa",
            de: "Tafelwein",
            nl: "Tafelwijn"
          },
          {
            en: "Sparkling wine only",
            es: "Solo vino espumoso",
            de: "Nur Schaumwein",
            nl: "Alleen mousserende wijn"
          },
          {
            en: "Fortified wine",
            es: "Vino fortificado",
            de: "Likörwein",
            nl: "Versterkte wijn"
          }
        ],
        correct: 0,
        explanation: {
          en: "Prädikatswein is Germany's highest quality category, classified by must weight and ripeness level (Kabinett to Trockenbeerenauslese).",
          es: "Prädikatswein es la categoría de mayor calidad de Alemania, clasificada por peso de mosto y nivel de madurez (Kabinett a Trockenbeerenauslese).",
          de: "Prädikatswein ist Deutschlands höchste Qualitätskategorie, klassifiziert nach Mostgewicht und Reifegrad (Kabinett bis Trockenbeerenauslese).",
          nl: "Prädikatswein is Duitslands hoogste kwaliteitscategorie, geclassificeerd naar mostgewicht en rijpheidsniveau (Kabinett tot Trockenbeerenauslese)."
        }
      },
      {
        question: {
          en: "What is the significance of 'Cru Classé' in Bordeaux?",
          es: "¿Cuál es la importancia de 'Cru Classé' en Burdeos?",
          de: "Was ist die Bedeutung von 'Cru Classé' in Bordeaux?",
          nl: "Wat is de betekenis van 'Cru Classé' in Bordeaux?"
        },
        options: [
          {
            en: "Official ranking system from 1855 (still used)",
            es: "Sistema de clasificación oficial de 1855 (todavía usado)",
            de: "Offizielles Rangsystem von 1855 (noch verwendet)",
            nl: "Officieel classificatiesysteem van 1855 (nog steeds gebruikt)"
          },
          {
            en: "Annual quality assessment",
            es: "Evaluación anual de calidad",
            de: "Jährliche Qualitätsbewertung",
            nl: "Jaarlijkse kwaliteitsbeoordeling"
          },
          {
            en: "Grape variety designation",
            es: "Designación de variedad de uva",
            de: "Rebsortenbezeichnung",
            nl: "Druivensoort aanduiding"
          },
          {
            en: "Aging requirement only",
            es: "Solo requisito de envejecimiento",
            de: "Nur Alterungsanforderung",
            nl: "Alleen rijpingseis"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cru Classé refers to the 1855 Classification of Bordeaux wines, ranking châteaux from First to Fifth Growth (Grand Cru).",
          es: "Cru Classé se refiere a la Clasificación de 1855 de vinos de Burdeos, clasificando châteaux de Primer a Quinto Crecimiento (Grand Cru).",
          de: "Cru Classé bezieht sich auf die 1855 Klassifizierung von Bordeaux-Weinen, die Châteaux vom Ersten bis Fünften Gewächs (Grand Cru) einordnet.",
          nl: "Cru Classé verwijst naar de 1855 Classificatie van Bordeaux wijnen, die châteaux rangschikt van Eerste tot Vijfde Groei (Grand Cru)."
        }
      },
      {
        question: {
          en: "What is 'malolactic fermentation' and why is it important?",
          es: "¿Qué es la 'fermentación maloláctica' y por qué es importante?",
          de: "Was ist 'malolaktische Gärung' und warum ist sie wichtig?",
          nl: "Wat is 'malolactische gisting' en waarom is het belangrijk?"
        },
        options: [
          {
            en: "Conversion of malic to lactic acid, softening wine",
            es: "Conversión de ácido málico a láctico, suavizando el vino",
            de: "Umwandlung von Apfelsäure zu Milchsäure, erweicht Wein",
            nl: "Omzetting van appelzuur naar melkzuur, verzacht wijn"
          },
          {
            en: "Primary alcoholic fermentation",
            es: "Fermentación alcohólica primaria",
            de: "Primäre alkoholische Gärung",
            nl: "Primaire alcoholische gisting"
          },
          {
            en: "Sugar to alcohol conversion",
            es: "Conversión de azúcar a alcohol",
            de: "Zucker zu Alkohol Umwandlung",
            nl: "Suiker naar alcohol omzetting"
          },
          {
            en: "Oak aging process",
            es: "Proceso de envejecimiento en roble",
            de: "Eichenreifungsprozess",
            nl: "Eiken rijpingsproces"
          }
        ],
        correct: 0,
        explanation: {
          en: "Malolactic fermentation converts sharp malic acid to softer lactic acid, reducing acidity and adding creamy, buttery notes to wine.",
          es: "La fermentación maloláctica convierte el ácido málico agudo en ácido láctico más suave, reduciendo la acidez y añadiendo notas cremosas y mantequillosas al vino.",
          de: "Malolaktische Gärung wandelt scharfe Apfelsäure in weichere Milchsäure um, reduziert Säure und fügt dem Wein cremige, buttrige Noten hinzu.",
          nl: "Malolactische gisting zet scherp appelzuur om in zachter melkzuur, verlaagt zuurgraad en voegt romige, boterachtige tonen toe aan wijn."
        }
      },
      {
        question: {
          en: "What is 'batonnage' in winemaking?",
          es: "¿Qué es 'batonnage' en la elaboración del vino?",
          de: "Was ist 'Batonnage' in der Weinherstellung?",
          nl: "Wat is 'batonnage' in wijnmaken?"
        },
        options: [
          {
            en: "Stirring lees to add texture and complexity",
            es: "Remover lías para añadir textura y complejidad",
            de: "Hefeaufwirbelung für Textur und Komplexität",
            nl: "Roeren van gist om textuur en complexiteit toe te voegen"
          },
          {
            en: "Pressing grapes",
            es: "Prensar uvas",
            de: "Traubenpressen",
            nl: "Druiven persen"
          },
          {
            en: "Filtering wine",
            es: "Filtrar vino",
            de: "Wein filtern",
            nl: "Wijn filteren"
          },
          {
            en: "Barrel toasting",
            es: "Tostado de barricas",
            de: "Fassröstung",
            nl: "Vat roosteren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Batonnage is stirring the lees (dead yeast cells) in barrel, adding richness, texture, and complexity to wine, especially whites.",
          es: "Batonnage es remover las lías (células de levadura muertas) en barrica, añadiendo riqueza, textura y complejidad al vino, especialmente blancos.",
          de: "Batonnage ist das Aufwirbeln der Hefe (tote Hefezellen) im Fass, fügt Reichtum, Textur und Komplexität zum Wein hinzu, besonders Weißweine.",
          nl: "Batonnage is het roeren van de gist (dode gistcellen) in vat, voegt rijkdom, textuur en complexiteit toe aan wijn, vooral witte wijnen."
        }
      },
      {
        question: {
          en: "What is the minimum aging requirement for Brunello di Montalcino DOCG?",
          es: "¿Cuál es el requisito mínimo de envejecimiento para Brunello di Montalcino DOCG?",
          de: "Was ist die Mindestalterungsanforderung für Brunello di Montalcino DOCG?",
          nl: "Wat is de minimale rijpingseis voor Brunello di Montalcino DOCG?"
        },
        options: [
          {
            en: "5 years total, 2 in oak",
            es: "5 años total, 2 en roble",
            de: "5 Jahre insgesamt, 2 in Eiche",
            nl: "5 jaar totaal, 2 in eik"
          },
          {
            en: "3 years total, 1 in oak",
            es: "3 años total, 1 en roble",
            de: "3 Jahre insgesamt, 1 in Eiche",
            nl: "3 jaar totaal, 1 in eik"
          },
          {
            en: "2 years total, 6 months in oak",
            es: "2 años total, 6 meses en roble",
            de: "2 Jahre insgesamt, 6 Monate in Eiche",
            nl: "2 jaar totaal, 6 maanden in eik"
          },
          {
            en: "7 years total, 3 in oak",
            es: "7 años total, 3 en roble",
            de: "7 Jahre insgesamt, 3 in Eiche",
            nl: "7 jaar totaal, 3 in eik"
          }
        ],
        correct: 0,
        explanation: {
          en: "Brunello di Montalcino must age minimum 5 years (2 in oak) before release; Riserva requires 6 years total.",
          es: "Brunello di Montalcino debe envejecer mínimo 5 años (2 en roble) antes del lanzamiento; Riserva requiere 6 años en total.",
          de: "Brunello di Montalcino muss mindestens 5 Jahre (2 in Eiche) reifen vor Freigabe; Riserva erfordert 6 Jahre insgesamt.",
          nl: "Brunello di Montalcino moet minimaal 5 jaar (2 in eik) rijpen voor release; Riserva vereist 6 jaar totaal."
        }
      },
      {
        question: {
          en: "What is 'phylloxera' and how did it impact viticulture?",
          es: "¿Qué es la 'filoxera' y cómo impactó la viticultura?",
          de: "Was ist 'Reblaus' und wie hat sie den Weinbau beeinflusst?",
          nl: "Wat is 'phylloxera' en hoe heeft het de wijnbouw beïnvloed?"
        },
        options: [
          {
            en: "Root louse that devastated European vineyards",
            es: "Piojo de raíz que devastó viñedos europeos",
            de: "Wurzellaus die europäische Weinberge verwüstete",
            nl: "Wortelluis die Europese wijngaarden verwoestte"
          },
          {
            en: "Beneficial fungus for wine flavor",
            es: "Hongo beneficioso para sabor del vino",
            de: "Nützlicher Pilz für Weingeschmack",
            nl: "Nuttige schimmel voor wijnsmaak"
          },
          {
            en: "Type of grape disease",
            es: "Tipo de enfermedad de uva",
            de: "Art der Traubenkrankheit",
            nl: "Type druivenziekte"
          },
          {
            en: "Wine aging process",
            es: "Proceso de envejecimiento del vino",
            de: "Weinreifungsprozess",
            nl: "Wijn rijpingsproces"
          }
        ],
        correct: 0,
        explanation: {
          en: "Phylloxera is a root louse that devastated European vineyards in late 1800s. Solution: grafting vinifera onto resistant American rootstock.",
          es: "La filoxera es un piojo de raíz que devastó viñedos europeos a finales de 1800. Solución: injertar vinifera en portainjertos americanos resistentes.",
          de: "Reblaus ist eine Wurzellaus die europäische Weinberge Ende 1800 verwüstete. Lösung: Vinifera auf resistente amerikanische Unterlagen pfropfen.",
          nl: "Phylloxera is een wortelluis die Europese wijngaarden eind 1800 verwoestte. Oplossing: vinifera enten op resistente Amerikaanse onderstam."
        }
      },
      {
        question: {
          en: "What does 'Einzellage' mean in German wine terminology?",
          es: "¿Qué significa 'Einzellage' en terminología de vino alemán?",
          de: "Was bedeutet 'Einzellage' in der deutschen Weinterminologie?",
          nl: "Wat betekent 'Einzellage' in Duitse wijnterminologie?"
        },
        options: [
          {
            en: "Single vineyard site",
            es: "Sitio de viñedo único",
            de: "Einzelne Weinbergslage",
            nl: "Enkele wijngaard locatie"
          },
          {
            en: "Grape variety",
            es: "Variedad de uva",
            de: "Rebsorte",
            nl: "Druivensoort"
          },
          {
            en: "Aging requirement",
            es: "Requisito de envejecimiento",
            de: "Alterungsanforderung",
            nl: "Rijpingseis"
          },
          {
            en: "Wine producer",
            es: "Productor de vino",
            de: "Weinproduzent",
            nl: "Wijnproducent"
          }
        ],
        correct: 0,
        explanation: {
          en: "Einzellage refers to a single, officially designated vineyard site in Germany, the smallest geographical unit in German wine classification.",
          es: "Einzellage se refiere a un sitio de viñedo único oficialmente designado en Alemania, la unidad geográfica más pequeña en clasificación de vino alemán.",
          de: "Einzellage bezieht sich auf eine einzelne, offiziell ausgewiesene Weinbergslage in Deutschland, die kleinste geografische Einheit in der deutschen Weinclassifizierung.",
          nl: "Einzellage verwijst naar een enkele, officieel aangewezen wijngaard locatie in Duitsland, de kleinste geografische eenheid in Duitse wijnclassificatie."
        }
      },
      {
        question: {
          en: "What is 'remontage' (pumping over) in red wine production?",
          es: "¿Qué es 'remontage' (bombeo) en la producción de vino tinto?",
          de: "Was ist 'Remontage' (Umpumpen) in der Rotweinproduktion?",
          nl: "Wat is 'remontage' (overpompen) in rode wijnproductie?"
        },
        options: [
          {
            en: "Pumping juice over cap to extract color/tannins",
            es: "Bombear jugo sobre sombrero para extraer color/taninos",
            de: "Saft über Tresterkappe pumpen um Farbe/Tannine zu extrahieren",
            nl: "Sap over dop pompen om kleur/tannines te extraheren"
          },
          {
            en: "Bottling process",
            es: "Proceso de embotellado",
            de: "Abfüllprozess",
            nl: "Botteling proces"
          },
          {
            en: "Aging in barrels",
            es: "Envejecimiento en barricas",
            de: "Reifung in Fässern",
            nl: "Rijpen in vaten"
          },
          {
            en: "Filtering wine",
            es: "Filtrar vino",
            de: "Wein filtern",
            nl: "Wijn filteren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Remontage pumps fermenting juice over the cap of grape skins, extracting color, tannins, and flavors while oxygenating the must.",
          es: "Remontage bombea jugo fermentando sobre el sombrero de pieles de uva, extrayendo color, taninos y sabores mientras oxigena el mosto.",
          de: "Remontage pumpt gärenden Saft über die Tresterkappe, extrahiert Farbe, Tannine und Aromen während die Maische mit Sauerstoff versorgt wird.",
          nl: "Remontage pompt gistend sap over de dop van druivenschillen, extraheert kleur, tannines en smaken terwijl de most wordt geoxygeneerd."
        }
      },
      {
        question: {
          en: "What is the VDP classification in German wines?",
          es: "¿Qué es la clasificación VDP en vinos alemanes?",
          de: "Was ist die VDP-Klassifizierung bei deutschen Weinen?",
          nl: "Wat is de VDP classificatie in Duitse wijnen?"
        },
        options: [
          {
            en: "Association of elite German wine estates with quality pyramid",
            es: "Asociación de fincas de vino alemanas de élite con pirámide de calidad",
            de: "Verband deutscher Prädikatsweingüter mit Qualitätspyramide",
            nl: "Vereniging van elite Duitse wijnlandgoederen met kwaliteitspiramide"
          },
          {
            en: "Government grape variety designation",
            es: "Designación gubernamental de variedad de uva",
            de: "Staatliche Rebsortenbezeichnung",
            nl: "Overheids druivensoort aanduiding"
          },
          {
            en: "Vintage dating system",
            es: "Sistema de datación de cosecha",
            de: "Vintage-Datierungssystem",
            nl: "Vintage daterings systeem"
          },
          {
            en: "Bottle size regulation",
            es: "Regulación de tamaño de botella",
            de: "Flaschengrößenregelung",
            nl: "Fles grootte regulering"
          }
        ],
        correct: 0,
        explanation: {
          en: "VDP (Verband Deutscher Prädikatsweingüter) is an association of elite German estates with a quality pyramid: Gutswein, Ortswein, Erste Lage, Grosse Lage.",
          es: "VDP (Verband Deutscher Prädikatsweingüter) es una asociación de fincas alemanas de élite con pirámide de calidad: Gutswein, Ortswein, Erste Lage, Grosse Lage.",
          de: "VDP (Verband Deutscher Prädikatsweingüter) ist ein Verband deutscher Spitzengüter mit Qualitätspyramide: Gutswein, Ortswein, Erste Lage, Grosse Lage.",
          nl: "VDP (Verband Deutscher Prädikatsweingüter) is een vereniging van Duitse top landgoederen met kwaliteitspiramide: Gutswein, Ortswein, Erste Lage, Grosse Lage."
        }
      },
      {
        question: {
          en: "What is 'carbonic maceration' used primarily for?",
          es: "¿Para qué se utiliza principalmente la 'maceración carbónica'?",
          de: "Wofür wird 'kohlensaure Mazerierung' hauptsächlich verwendet?",
          nl: "Waarvoor wordt 'koolzuurmaceratie' voornamelijk gebruikt?"
        },
        options: [
          {
            en: "Beaujolais Nouveau and fruity, low-tannin reds",
            es: "Beaujolais Nouveau y tintos afrutados de bajo tanino",
            de: "Beaujolais Nouveau und fruchtige, taninarme Rotweine",
            nl: "Beaujolais Nouveau en fruitige, lage-tannine rode wijnen"
          },
          {
            en: "Champagne production only",
            es: "Solo producción de Champagne",
            de: "Nur Champagnerproduktion",
            nl: "Alleen Champagne productie"
          },
          {
            en: "Fortified wine making",
            es: "Elaboración de vino fortificado",
            de: "Likörweinherstellung",
            nl: "Versterkte wijnproductie"
          },
          {
            en: "White wine fermentation",
            es: "Fermentación de vino blanco",
            de: "Weißweingärung",
            nl: "Witte wijn gisting"
          }
        ],
        correct: 0,
        explanation: {
          en: "Carbonic maceration ferments whole grapes in CO2 environment, producing fruity, low-tannin wines like Beaujolais Nouveau.",
          es: "La maceración carbónica fermenta uvas enteras en ambiente CO2, produciendo vinos afrutados de bajo tanino como Beaujolais Nouveau.",
          de: "Kohlensaure Mazerierung gärt ganze Trauben in CO2-Umgebung und produziert fruchtige, taninarme Weine wie Beaujolais Nouveau.",
          nl: "Koolzuurmaceratie gist hele druiven in CO2 omgeving, produceert fruitige, lage-tannine wijnen zoals Beaujolais Nouveau."
        }
      },
      {
        question: {
          en: "What is 'Solera' system used for?",
          es: "¿Para qué se utiliza el sistema 'Solera'?",
          de: "Wofür wird das 'Solera'-System verwendet?",
          nl: "Waarvoor wordt het 'Solera' systeem gebruikt?"
        },
        options: [
          {
            en: "Aging and blending Sherry and other fortified wines",
            es: "Envejecimiento y mezcla de Jerez y otros vinos fortificados",
            de: "Reifung und Verschnitt von Sherry und anderen Likörweinen",
            nl: "Rijping en blenden van Sherry en andere versterkte wijnen"
          },
          {
            en: "Sparkling wine method",
            es: "Método de vino espumoso",
            de: "Schaumweinmethode",
            nl: "Mousserende wijn methode"
          },
          {
            en: "Grape pressing technique",
            es: "Técnica de prensado de uva",
            de: "Traubenpressmethode",
            nl: "Druiven persing techniek"
          },
          {
            en: "Vineyard irrigation",
            es: "Riego de viñedo",
            de: "Weinbergbewässerung",
            nl: "Wijngaard irrigatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Solera is a fractional blending system stacking barrels by age, continuously blending old and young wines for consistency in Sherry.",
          es: "Solera es un sistema de mezcla fraccionaria que apila barricas por edad, mezclando continuamente vinos viejos y jóvenes para consistencia en Jerez.",
          de: "Solera ist ein fraktioniertes Verschnittsystem, das Fässer nach Alter stapelt und kontinuierlich alte und junge Weine für Konsistenz in Sherry mischt.",
          nl: "Solera is een fractioneel blending systeem dat vaten stapelt op leeftijd, continu oude en jonge wijnen mengt voor consistentie in Sherry."
        }
      },
      {
        question: {
          en: "What is 'botrytis cinerea' (noble rot) essential for?",
          es: "¿Para qué es esencial la 'botrytis cinerea' (podredumbre noble)?",
          de: "Wofür ist 'Botrytis cinerea' (Edelfäule) wesentlich?",
          nl: "Waarvoor is 'botrytis cinerea' (edelrot) essentieel?"
        },
        options: [
          {
            en: "Sweet wine production (Sauternes, Tokaji)",
            es: "Producción de vino dulce (Sauternes, Tokaji)",
            de: "Süßweinproduktion (Sauternes, Tokaji)",
            nl: "Zoete wijn productie (Sauternes, Tokaji)"
          },
          {
            en: "Preventing fermentation",
            es: "Prevenir fermentación",
            de: "Gärung verhindern",
            nl: "Gisting voorkomen"
          },
          {
            en: "Red wine tannins",
            es: "Taninos de vino tinto",
            de: "Rotwein-Tannine",
            nl: "Rode wijn tannines"
          },
          {
            en: "Sparkling wine base",
            es: "Base de vino espumoso",
            de: "Schaumweinbasis",
            nl: "Mousserende wijn basis"
          }
        ],
        correct: 0,
        explanation: {
          en: "Noble rot (botrytis cinerea) concentrates sugars and adds complex honeyed flavors, essential for sweet wines like Sauternes and Tokaji.",
          es: "La podredumbre noble (botrytis cinerea) concentra azúcares y añade sabores complejos de miel, esencial para vinos dulces como Sauternes y Tokaji.",
          de: "Edelfäule (Botrytis cinerea) konzentriert Zucker und fügt komplexe honigartige Aromen hinzu, wesentlich für Süßweine wie Sauternes und Tokaji.",
          nl: "Edelrot (botrytis cinerea) concentreert suikers en voegt complexe honingachtige smaken toe, essentieel voor zoete wijnen zoals Sauternes en Tokaji."
        }
      },
      {
        question: {
          en: "What does 'Grand Cru' signify in Burgundy?",
          es: "¿Qué significa 'Grand Cru' en Borgoña?",
          de: "Was bedeutet 'Grand Cru' in Burgund?",
          nl: "Wat betekent 'Grand Cru' in Bourgogne?"
        },
        options: [
          {
            en: "Highest vineyard classification, 33 sites",
            es: "Clasificación de viñedo más alta, 33 sitios",
            de: "Höchste Weinbergklassifizierung, 33 Lagen",
            nl: "Hoogste wijngaard classificatie, 33 locaties"
          },
          {
            en: "Minimum aging requirement",
            es: "Requisito mínimo de envejecimiento",
            de: "Mindestalterungsanforderung",
            nl: "Minimale rijpingseis"
          },
          {
            en: "Producer designation",
            es: "Designación de productor",
            de: "Erzeugerbezeichnung",
            nl: "Producent aanduiding"
          },
          {
            en: "Grape variety standard",
            es: "Estándar de variedad de uva",
            de: "Rebsortenstandard",
            nl: "Druivensoort standaard"
          }
        ],
        correct: 0,
        explanation: {
          en: "Grand Cru is Burgundy's highest vineyard classification, comprising 33 exceptional sites producing finest Pinot Noir and Chardonnay.",
          es: "Grand Cru es la clasificación de viñedo más alta de Borgoña, compuesta por 33 sitios excepcionales que producen el mejor Pinot Noir y Chardonnay.",
          de: "Grand Cru ist Burgunds höchste Weinbergklassifizierung, bestehend aus 33 außergewöhnlichen Lagen die feinsten Pinot Noir und Chardonnay produzieren.",
          nl: "Grand Cru is Bourgogne's hoogste wijngaard classificatie, bestaande uit 33 uitzonderlijke locaties die de fijnste Pinot Noir en Chardonnay produceren."
        }
      },
      {
        question: {
          en: "What is 'Méthode Champenoise' or 'Traditional Method'?",
          es: "¿Qué es el 'Méthode Champenoise' o 'Método Tradicional'?",
          de: "Was ist 'Méthode Champenoise' oder 'Traditionelle Methode'?",
          nl: "Wat is 'Méthode Champenoise' of 'Traditionele Methode'?"
        },
        options: [
          {
            en: "Secondary fermentation in bottle for sparkling wine",
            es: "Fermentación secundaria en botella para vino espumoso",
            de: "Sekundärgärung in Flasche für Schaumwein",
            nl: "Secundaire gisting in fles voor mousserende wijn"
          },
          {
            en: "Oak barrel aging",
            es: "Envejecimiento en barrica de roble",
            de: "Eichenfassreifung",
            nl: "Eiken vat rijping"
          },
          {
            en: "Grape harvesting technique",
            es: "Técnica de cosecha de uva",
            de: "Traubenernte-Technik",
            nl: "Druiven oogst techniek"
          },
          {
            en: "Wine filtration process",
            es: "Proceso de filtración de vino",
            de: "Weinfiltrationsprozess",
            nl: "Wijn filtratie proces"
          }
        ],
        correct: 0,
        explanation: {
          en: "Méthode Champenoise is secondary fermentation in bottle creating bubbles, the traditional method for Champagne and quality sparkling wines.",
          es: "Méthode Champenoise es fermentación secundaria en botella creando burbujas, el método tradicional para Champagne y vinos espumosos de calidad.",
          de: "Méthode Champenoise ist Sekundärgärung in der Flasche die Blasen erzeugt, die traditionelle Methode für Champagner und Qualitätsschaumweine.",
          nl: "Méthode Champenoise is secundaire gisting in fles die bubbels creëert, de traditionele methode voor Champagne en kwaliteits mousserende wijnen."
        }
      },
      {
        question: {
          en: "What is 'terroir' in wine terminology?",
          es: "¿Qué es 'terroir' en terminología del vino?",
          de: "Was ist 'Terroir' in der Weinterminologie?",
          nl: "Wat is 'terroir' in wijnterminologie?"
        },
        options: [
          {
            en: "Complete natural environment: soil, climate, topography",
            es: "Ambiente natural completo: suelo, clima, topografía",
            de: "Vollständige natürliche Umgebung: Boden, Klima, Topografie",
            nl: "Volledige natuurlijke omgeving: bodem, klimaat, topografie"
          },
          {
            en: "Wine aging cellar",
            es: "Bodega de envejecimiento de vino",
            de: "Weinreifungskeller",
            nl: "Wijn rijpings kelder"
          },
          {
            en: "Grape variety classification",
            es: "Clasificación de variedad de uva",
            de: "Rebsorteneinteilung",
            nl: "Druivensoort classificatie"
          },
          {
            en: "Winemaking technique",
            es: "Técnica de vinificación",
            de: "Weinherstellungstechnik",
            nl: "Wijnmaken techniek"
          }
        ],
        correct: 0,
        explanation: {
          en: "Terroir encompasses all environmental factors (soil, climate, topography, microclimate) that give wine its unique character and sense of place.",
          es: "Terroir abarca todos los factores ambientales (suelo, clima, topografía, microclima) que dan al vino su carácter único y sentido de lugar.",
          de: "Terroir umfasst alle Umweltfaktoren (Boden, Klima, Topografie, Mikroklima) die Wein seinen einzigartigen Charakter und Ortsverbundenheit geben.",
          nl: "Terroir omvat alle omgevingsfactoren (bodem, klimaat, topografie, microklimaat) die wijn zijn unieke karakter en gevoel van plaats geven."
        }
      },
      {
        question: {
          en: "What is 'dosage' in Champagne production?",
          es: "¿Qué es 'dosage' en la producción de Champagne?",
          de: "Was ist 'Dosage' in der Champagnerproduktion?",
          nl: "Wat is 'dosage' in Champagne productie?"
        },
        options: [
          {
            en: "Sugar added after disgorgement to determine sweetness",
            es: "Azúcar añadido después del degüelle para determinar dulzura",
            de: "Zucker nach Degorgierung zugegeben um Süße zu bestimmen",
            nl: "Suiker toegevoegd na degorgeren om zoetheid te bepalen"
          },
          {
            en: "Initial grape pressing",
            es: "Prensado inicial de uva",
            de: "Erstes Traubenpressen",
            nl: "Eerste druiven persing"
          },
          {
            en: "Bottle aging time",
            es: "Tiempo de envejecimiento en botella",
            de: "Flaschenreifungszeit",
            nl: "Fles rijpingstijd"
          },
          {
            en: "Yeast selection",
            es: "Selección de levadura",
            de: "Hefeauswahl",
            nl: "Gist selectie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Dosage is liqueur d'expédition (wine+sugar) added after disgorgement to determine Champagne's final sweetness level (Brut, Sec, etc.).",
          es: "Dosage es licor de expedición (vino+azúcar) añadido después del degüelle para determinar el nivel final de dulzura del Champagne (Brut, Sec, etc.).",
          de: "Dosage ist Versandlikör (Wein+Zucker) nach Degorgierung zugegeben um Champagners endgültige Süße zu bestimmen (Brut, Sec, etc.).",
          nl: "Dosage is liqueur d'expédition (wijn+suiker) toegevoegd na degorgeren om Champagne's finale zoetheid te bepalen (Brut, Sec, etc.)."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
