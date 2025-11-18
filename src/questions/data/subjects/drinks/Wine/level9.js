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
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
