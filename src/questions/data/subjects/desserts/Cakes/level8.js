// Cakes Quiz - Level 8
(function() {
  const level8Data = {
    name: {
          "en": "Cakes - Advanced",
          "es": "Pasteles - Avanzado",
          "de": "Kuchen - Fortgeschrittene",
          "nl": "Taarten - Gevorderd"
    },
    questions: [
      {
        question: {
                  "en": "In molecular gastronomy, what is spherification and what are the two main types used in dessert applications?",
                  "es": "En gastronomía molecular, ¿qué es la esferificación y cuáles son los dos tipos principales utilizados en aplicaciones de postres?",
                  "de": "Was ist Sphärifikation in der Molekulargastronomie und welche sind die zwei Haupttypen die in Dessertanwendungen verwendet werden?",
                  "nl": "Wat is sferificatie in moleculaire gastronomie en wat zijn de twee hoofdtypen gebruikt in dessert toepassingen?"
        },
        options: [
        {
                  "en": "Gelifying liquids; internal and external spherification",
                  "es": "Gelificar líquidos; esferificación interna y externa",
                  "de": "Flüssigkeiten gelieren; interne und externe Sphärifikation",
                  "nl": "Vloeistoffen geleren; interne en externe sferificatie"
        },
        {
                  "en": "Making foam bubbles; hot and cold spherification",
                  "es": "Hacer burbujas de espuma; esferificación caliente y fría",
                  "de": "Schaumbläschen machen; heiße und kalte Sphärifikation",
                  "nl": "Schuim bellen maken; warme en koude sferificatie"
        },
        {
                  "en": "Creating powder textures; molecular and atomic spherification",
                  "es": "Crear texturas de polvo; esferificación molecular y atómica",
                  "de": "Pulvertexturen schaffen; molekulare und atomare Sphärifikation",
                  "nl": "Poeder texturen creëren; moleculaire en atomaire sferificatie"
        },
        {
                  "en": "Creating caviar pearls; basic and reverse spherification",
                  "es": "Crear perlas de caviar; esferificación básica y reversa",
                  "de": "Kaviarperlen schaffen; grundlegende und umgekehrte Sphärifikation",
                  "nl": "Kaviaar pareltjes creëren; basis en omgekeerde sferificatie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Spherification creates liquid-filled spheres resembling caviar. Basic spherification uses calcium chloride inside and sodium alginate outside, while reverse spherification uses sodium alginate inside and calcium lactate outside.",
                  "es": "La esferificación crea esferas llenas de líquido que parecen caviar. La esferificación básica usa cloruro de calcio adentro y alginato de sodio afuera, mientras la reversa usa alginato de sodio adentro y lactato de calcio afuera.",
                  "de": "Sphärifikation schafft flüssigkeitsgefüllte Kugeln die Kaviar ähneln. Grundlegende Sphärifikation verwendet Kalziumchlorid innen und Natriumalginat außen, während umgekehrte Sphärifikation Natriumalginat innen und Kalziumlaktat außen verwendet.",
                  "nl": "Sferificatie creëert vloeistofgevulde bollen die op kaviaar lijken. Basis sferificatie gebruikt calciumchloride binnen en natriumalginaat buiten, terwijl omgekeerde sferificatie natriumalginaat binnen en calciumlactaat buiten gebruikt."
        }
      },
      {
        question: {
                  "en": "What is the precise temperature range for sugar glass (isomalt) work, and why is isomalt preferred over sucrose for this application?",
                  "es": "¿Cuál es el rango preciso de temperatura para trabajo con vidrio de azúcar (isomalt), y por qué se prefiere isomalt sobre sacarosa para esta aplicación?",
                  "de": "Was ist der präzise Temperaturbereich für Zuckerglas (Isomalt) Arbeit, und warum wird Isomalt gegenüber Saccharose für diese Anwendung bevorzugt?",
                  "nl": "Wat is het precieze temperatuurbereik voor suikerglas (isomalt) werk, en waarom wordt isomalt verkozen boven sucrose voor deze toepassing?"
        },
        options: [
        {
                  "en": "175-180°C; isomalt has higher melting point",
                  "es": "175-180°C; isomalt tiene punto de fusión más alto",
                  "de": "175-180°C; Isomalt hat höheren Schmelzpunkt",
                  "nl": "175-180°C; isomalt heeft hoger smeltpunt"
        },
        {
                  "en": "155-160°C; isomalt dissolves easier in water",
                  "es": "155-160°C; isomalt se disuelve más fácil en agua",
                  "de": "155-160°C; Isomalt löst sich leichter in Wasser",
                  "nl": "155-160°C; isomalt lost makkelijker op in water"
        },
        {
                  "en": "145-150°C; isomalt crystallizes slower for better workability",
                  "es": "145-150°C; isomalt cristaliza más lento para mejor trabajabilidad",
                  "de": "145-150°C; Isomalt kristallisiert langsamer für bessere Bearbeitbarkeit",
                  "nl": "145-150°C; isomalt kristalliseert langzamer voor betere bewerkbaarheid"
        },
        {
                  "en": "160-165°C; isomalt is less hygroscopic and doesn't yellow",
                  "es": "160-165°C; isomalt es menos higroscópico y no amarillea",
                  "de": "160-165°C; Isomalt ist weniger hygroskopisch und vergilbt nicht",
                  "nl": "160-165°C; isomalt is minder hygroscopisch en vergelt niet"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Isomalt works best at 160-165°C. It's preferred because it's less hygroscopic (absorbs less moisture from air), doesn't caramelize or yellow like sucrose, and creates clearer, more stable glass effects.",
                  "es": "Isomalt funciona mejor a 160-165°C. Se prefiere porque es menos higroscópico (absorbe menos humedad del aire), no carameliza ni amarillea como la sacarosa, y crea efectos de vidrio más claros y estables.",
                  "de": "Isomalt funktioniert am besten bei 160-165°C. Es wird bevorzugt weil es weniger hygroskopisch ist (absorbiert weniger Feuchtigkeit aus der Luft), nicht karamelisiert oder vergilbt wie Saccharose, und klarere, stabilere Glaseffekte schafft.",
                  "nl": "Isomalt werkt het best bij 160-165°C. Het wordt verkozen omdat het minder hygroscopisch is (absorbeert minder vocht uit de lucht), niet karameliseert of vergelt zoals sucrose, en helderdere, stabielere glas effecten creëert."
        }
      },
      {
        question: {
                  "en": "In advanced chocolate work, what is conching, and how does it affect the final chocolate texture and flavor?",
                  "es": "En trabajo avanzado de chocolate, ¿qué es el concheado, y cómo afecta la textura y sabor final del chocolate?",
                  "de": "Was ist Conchieren in der fortgeschrittenen Schokoladenarbeit, und wie beeinflusst es die finale Schokoladentextur und Geschmack?",
                  "nl": "Wat is concheren in geavanceerd chocoladewerk, en hoe beïnvloedt het de uiteindelijke chocolade textuur en smaak?"
        },
        options: [
        {
                  "en": "Heating and mixing chocolate mass; develops flavor and reduces particle size",
                  "es": "Calentar y mezclar masa de chocolate; desarrolla sabor y reduce tamaño de partícula",
                  "de": "Schokoladenmasse erhitzen und mischen; entwickelt Geschmack und reduziert Partikelgröße",
                  "nl": "Chocolademassa verwarmen en mengen; ontwikkelt smaak en reduceert deeltjesgrootte"
        },
        {
                  "en": "Adding cocoa butter; increases smoothness and workability",
                  "es": "Agregar manteca de cacao; aumenta suavidad y trabajabilidad",
                  "de": "Kakaobutter hinzufügen; erhöht Glätte und Bearbeitbarkeit",
                  "nl": "Cacaoboter toevoegen; verhoogt gladheid en bewerkbaarheid"
        },
        {
                  "en": "Grinding cocoa beans; creates smoother texture and removes bitterness",
                  "es": "Moler granos de cacao; crea textura más suave y remueve amargura",
                  "de": "Kakaobohnen mahlen; schafft glattere Textur und entfernt Bitterkeit",
                  "nl": "Cacaobonen malen; creëert gladdere textuur en verwijdert bitterheid"
        },
        {
                  "en": "Tempering chocolate crystals; ensures proper bloom and snap",
                  "es": "Templar cristales de chocolate; asegura florecimiento y chasquido adecuados",
                  "de": "Schokoladenkristalle temperieren; gewährleistet richtigen Reif und Knack",
                  "nl": "Chocolade kristallen tempereren; verzekert juiste bloei en knak"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Conching is the process of heating and continuously mixing chocolate mass for hours or days. This aerates the chocolate, develops complex flavors by removing volatile acids, and reduces particle size to under 20 microns for ultimate smoothness.",
                  "es": "El concheado es el proceso de calentar y mezclar continuamente masa de chocolate por horas o días. Esto airea el chocolate, desarrolla sabores complejos removiendo ácidos volátiles, y reduce el tamaño de partícula bajo 20 micrones para suavidad máxima.",
                  "de": "Conchieren ist der Prozess Schokoladenmasse stunden- oder tagelang zu erhitzen und kontinuierlich zu mischen. Dies belüftet die Schokolade, entwickelt komplexe Aromen durch Entfernung flüchtiger Säuren, und reduziert Partikelgröße unter 20 Mikron für ultimative Glätte.",
                  "nl": "Concheren is het proces van chocolademassa urenlang of dagenlang verwarmen en continu mengen. Dit luchtet de chocolade, ontwikkelt complexe smaken door vluchtige zuren te verwijderen, en reduceert deeltjesgrootte onder 20 micron voor ultieme gladheid."
        }
      },
      {
        question: {
                  "en": "What is the function of glucose syrup in professional ice cream production, and how does it differ from using only sucrose?",
                  "es": "¿Cuál es la función del jarabe de glucosa en producción profesional de helado, y cómo difiere de usar solo sacarosa?",
                  "de": "Was ist die Funktion von Glukosesirup in professioneller Eiscremeherstellung, und wie unterscheidet es sich vom alleinigen Verwenden von Saccharose?",
                  "nl": "Wat is de functie van glucosesiroop in professionele ijs productie, en hoe verschilt het van alleen sucrose gebruiken?"
        },
        options: [
        {
                  "en": "Prevents crystallization and improves texture; glucose has different freezing properties than sucrose",
                  "es": "Previene cristalización y mejora textura; glucosa tiene propiedades de congelación diferentes que sacarosa",
                  "de": "Verhindert Kristallisation und verbessert Textur; Glukose hat andere Gefriereigenschaften als Saccharose",
                  "nl": "Voorkomt kristallisatie en verbetert textuur; glucose heeft andere bevrieseigenschappen dan sucrose"
        },
        {
                  "en": "Increases melting point; makes ice cream more heat stable",
                  "es": "Aumenta punto de fusión; hace helado más estable al calor",
                  "de": "Erhöht Schmelzpunkt; macht Eis hitzestabiler",
                  "nl": "Verhoogt smeltpunt; maakt ijs hittebestendigder"
        },
        {
                  "en": "Colors the ice cream; glucose provides golden color",
                  "es": "Colorea el helado; glucosa proporciona color dorado",
                  "de": "Färbt das Eis; Glukose bietet goldene Farbe",
                  "nl": "Kleurt het ijs; glucose geeft gouden kleur"
        },
        {
                  "en": "Adds sweetness only; no functional difference from sucrose",
                  "es": "Solo agrega dulzura; ninguna diferencia funcional de sacarosa",
                  "de": "Fügt nur Süße hinzu; kein funktionaler Unterschied zu Saccharose",
                  "nl": "Voegt alleen zoetheid toe; geen functioneel verschil van sucrose"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Glucose syrup has a lower molecular weight than sucrose, creating more freezing point depression and preventing large ice crystals. It also reduces water activity and provides better scoopability at frozen temperatures.",
                  "es": "El jarabe de glucosa tiene menor peso molecular que la sacarosa, creando más depresión del punto de congelación y previniendo cristales de hielo grandes. También reduce la actividad del agua y proporciona mejor manejabilidad a temperaturas congeladas.",
                  "de": "Glukosesirup hat ein niedrigeres Molekulargewicht als Saccharose, was mehr Gefrierpunkterniedrigung schafft und große Eiskristalle verhindert. Es reduziert auch Wasseraktivität und bietet bessere Portionierbarkeit bei gefrorenen Temperaturen.",
                  "nl": "Glucosesiroop heeft een lager molecuulgewicht dan sucrose, wat meer vriespuntverlaging creëert en grote ijskristallen voorkomt. Het reduceert ook wateractiviteit en biedt betere schepbaarheid bij bevroren temperaturen."
        }
      },
      {
        question: {
                  "en": "In advanced pastry, what is the difference between pâte à choux and pâte sucrée in terms of preparation and applications?",
                  "es": "En repostería avanzada, ¿cuál es la diferencia entre pâte à choux y pâte sucrée en términos de preparación y aplicaciones?",
                  "de": "Was ist der Unterschied zwischen Pâte à Choux und Pâte Sucrée in der fortgeschrittenen Konditorei bezüglich Zubereitung und Anwendungen?",
                  "nl": "In geavanceerde banketbakkerij, wat is het verschil tussen pâte à choux en pâte sucrée qua bereiding en toepassingen?"
        },
        options: [
        {
                  "en": "Choux: cold mixing method; Sucrée: hot cooking method",
                  "es": "Choux: método de mezcla fría; Sucrée: método de cocción caliente",
                  "de": "Choux: kalte Mischmethode; Sucrée: heiße Kochmethode",
                  "nl": "Choux: koude mengmethode; Sucrée: warme kookmethode"
        },
        {
                  "en": "Both are identical preparations used for different shapes",
                  "es": "Ambas son preparaciones idénticas usadas para diferentes formas",
                  "de": "Beide sind identische Zubereitungen für verschiedene Formen",
                  "nl": "Beide zijn identieke bereidingen gebruikt voor verschillende vormen"
        },
        {
                  "en": "Sucrée: laminated dough; Choux: enriched bread dough",
                  "es": "Sucrée: masa laminada; Choux: masa de pan enriquecida",
                  "de": "Sucrée: laminierter Teig; Choux: angereicherter Brotteig",
                  "nl": "Sucrée: gelamineerd deeg; Choux: verrijkt brooddeeg"
        },
        {
                  "en": "Choux: cooked paste with eggs, hollow pastries; Sucrée: sweet shortcrust, tart shells",
                  "es": "Choux: pasta cocida con huevos, pasteles huecos; Sucrée: masa quebrada dulce, bases de tartas",
                  "de": "Choux: gekochter Teig mit Eiern, hohles Gebäck; Sucrée: süßer Mürbeteig, Tartenschalen",
                  "nl": "Choux: gekookt deeg met eieren, holle gebakjes; Sucrée: zoete korte deeg, taartbodems"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Pâte à choux is a cooked paste made by heating water/milk with butter, adding flour, then eggs to create expandable dough for éclairs and profiteroles. Pâte sucrée is sweet shortcrust pastry made cold for tart shells and cookies.",
                  "es": "Pâte à choux es una pasta cocida hecha calentando agua/leche con mantequilla, agregando harina, luego huevos para crear masa expandible para éclairs y profiteroles. Pâte sucrée es masa quebrada dulce hecha fría para bases de tartas y galletas.",
                  "de": "Pâte à Choux ist ein gekochter Teig aus erhitztem Wasser/Milch mit Butter, Mehlzugabe, dann Eiern um expandierbaren Teig für Éclairs und Profiteroles zu schaffen. Pâte Sucrée ist süßer Mürbeteig kalt gemacht für Tartenschalen und Kekse.",
                  "nl": "Pâte à choux is een gekookt deeg gemaakt door water/melk met boter te verhitten, bloem toe te voegen, dan eieren voor uitzetbaar deeg voor éclairs en profiteroles. Pâte sucrée is zoet korte deeg koud gemaakt voor taartbodems en koekjes."
        }
      },
      {
        question: {
                  "en": "What is the purpose of adding xanthan gum to gluten-free cake batters, and what concentration is typically used?",
                  "es": "¿Cuál es el propósito de agregar goma xantana a masas de pasteles sin gluten, y qué concentración se usa típicamente?",
                  "de": "Was ist der Zweck von Xanthangummi-Zugabe zu glutenfreien Kuchenteigen, und welche Konzentration wird typischerweise verwendet?",
                  "nl": "Wat is het doel van het toevoegen van xanthaangom aan glutenvrije taartbeslagen, en welke concentratie wordt typisch gebruikt?"
        },
        options: [
        {
                  "en": "Adds sweetness; 2-3% of total batter weight",
                  "es": "Agrega dulzura; 2-3% del peso total de masa",
                  "de": "Fügt Süße hinzu; 2-3% des Gesamtteiggewichts",
                  "nl": "Voegt zoetheid toe; 2-3% van totaal beslag gewicht"
        },
        {
                  "en": "Prevents spoilage; 0.5-1% of liquid ingredients",
                  "es": "Previene deterioro; 0.5-1% de ingredientes líquidos",
                  "de": "Verhindert Verderb; 0.5-1% der flüssigen Zutaten",
                  "nl": "Voorkomt bederf; 0.5-1% van vloeibare ingrediënten"
        },
        {
                  "en": "Replaces gluten structure; 0.1-0.3% of flour weight",
                  "es": "Reemplaza estructura de gluten; 0.1-0.3% del peso de harina",
                  "de": "Ersetzt Glutenstruktur; 0.1-0.3% des Mehlgewichts",
                  "nl": "Vervangt gluten structuur; 0.1-0.3% van bloem gewicht"
        },
        {
                  "en": "Colors the batter; 1-2% of flour weight",
                  "es": "Colorea la masa; 1-2% del peso de harina",
                  "de": "Färbt den Teig; 1-2% des Mehlgewichts",
                  "nl": "Kleurt het beslag; 1-2% van bloem gewicht"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Xanthan gum provides binding and elasticity to replace gluten's structure in gluten-free baking. The typical concentration is 0.1-0.3% of flour weight - too much creates gummy texture, too little provides insufficient structure.",
                  "es": "La goma xantana proporciona unión y elasticidad para reemplazar la estructura del gluten en horneado sin gluten. La concentración típica es 0.1-0.3% del peso de harina - demasiada crea textura gomosa, muy poca proporciona estructura insuficiente.",
                  "de": "Xanthangummi bietet Bindung und Elastizität um Glutenstruktur im glutenfreien Backen zu ersetzen. Die typische Konzentration ist 0.1-0.3% des Mehlgewichts - zu viel schafft gummiartige Textur, zu wenig bietet unzureichende Struktur.",
                  "nl": "Xanthaangom biedt binding en elasticiteit om gluten structuur te vervangen in glutenvrij bakken. De typische concentratie is 0.1-0.3% van bloem gewicht - te veel creëert gummi textuur, te weinig biedt onvoldoende structuur."
        }
      },
      {
        question: {
                  "en": "In professional cake production, what is the purpose of using cake flour vs all-purpose flour, and how do their protein contents differ?",
                  "es": "En producción profesional de pasteles, ¿cuál es el propósito de usar harina para pasteles vs harina multiuso, y cómo difieren sus contenidos de proteína?",
                  "de": "Was ist der Zweck von Kuchenmehl vs Allzweckmehl in der professionellen Kuchenproduktion, und wie unterscheiden sich ihre Proteingehalte?",
                  "nl": "In professionele taart productie, wat is het doel van het gebruiken van taartbloem vs gewone bloem, en hoe verschillen hun eiwitgehalten?"
        },
        options: [
        {
                  "en": "Cake flour (12-14% protein) for structure; all-purpose (8-10%) for tenderness",
                  "es": "Harina para pasteles (12-14% proteína) para estructura; multiuso (8-10%) para terneza",
                  "de": "Kuchenmehl (12-14% Protein) für Struktur; Allzweck (8-10%) für Zartheit",
                  "nl": "Taartbloem (12-14% eiwit) voor structuur; gewone bloem (8-10%) voor tederheid"
        },
        {
                  "en": "Both identical; only marketing difference",
                  "es": "Ambas idénticas; solo diferencia de mercadeo",
                  "de": "Beide identisch; nur Marketingunterschied",
                  "nl": "Beide identiek; alleen marketing verschil"
        },
        {
                  "en": "Cake flour (6-8% protein) creates tender crumb; all-purpose (10-12%) creates more structure",
                  "es": "Harina para pasteles (6-8% proteína) crea miga tierna; multiuso (10-12%) crea más estructura",
                  "de": "Kuchenmehl (6-8% Protein) schafft zarte Krume; Allzweck (10-12%) schafft mehr Struktur",
                  "nl": "Taartbloem (6-8% eiwit) creëert tere kruim; gewone bloem (10-12%) creëert meer structuur"
        },
        {
                  "en": "No difference in protein; cake flour is just finer ground",
                  "es": "No hay diferencia en proteína; harina para pasteles solo está molida más fina",
                  "de": "Kein Proteinunterschied; Kuchenmehl ist nur feiner gemahlen",
                  "nl": "Geen verschil in eiwit; taartbloem is alleen fijner gemalen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cake flour contains 6-8% protein (lower gluten) creating tender, fine-crumbed cakes. All-purpose flour has 10-12% protein providing more structure but potentially tougher texture. Cake flour is also chlorinated to improve fat distribution.",
                  "es": "La harina para pasteles contiene 6-8% proteína (menos gluten) creando pasteles tiernos de miga fina. La harina multiuso tiene 10-12% proteína proporcionando más estructura pero textura potencialmente más dura. La harina para pasteles también está clorada para mejorar distribución de grasa.",
                  "de": "Kuchenmehl enthält 6-8% Protein (weniger Gluten) und schafft zarte, feinbröckelige Kuchen. Allzweckmehl hat 10-12% Protein und bietet mehr Struktur aber potentiell zähere Textur. Kuchenmehl ist auch chloriert um Fettverteilung zu verbessern.",
                  "nl": "Taartbloem bevat 6-8% eiwit (minder gluten) wat tere, fijn-gekruimelde taarten creëert. Gewone bloem heeft 10-12% eiwit wat meer structuur biedt maar mogelijk taaiere textuur. Taartbloem is ook gechloreerd om vetverdeling te verbeteren."
        }
      },
      {
        question: {
                  "en": "What is the scientific principle behind using cream of tartar in meringue production, and what is its optimal concentration?",
                  "es": "¿Cuál es el principio científico detrás de usar crémor tártaro en producción de merengue, y cuál es su concentración óptima?",
                  "de": "Was ist das wissenschaftliche Prinzip hinter der Verwendung von Weinstein in der Baisererzeugung, und was ist seine optimale Konzentration?",
                  "nl": "Wat is het wetenschappelijke principe achter het gebruiken van wijnsteen in meringue productie, en wat is de optimale concentratie?"
        },
        options: [
        {
                  "en": "Increases volume through chemical reaction; 1 teaspoon per egg white",
                  "es": "Aumenta volumen por reacción química; 1 cucharadita por clara",
                  "de": "Erhöht Volumen durch chemische Reaktion; 1 Teelöffel pro Eiweiß",
                  "nl": "Verhoogt volume door chemische reactie; 1 theelepel per eiwit"
        },
        {
                  "en": "Lowers pH to stabilize proteins; 1/8 teaspoon per egg white",
                  "es": "Baja pH para estabilizar proteínas; 1/8 cucharadita por clara de huevo",
                  "de": "Senkt pH um Proteine zu stabilisieren; 1/8 Teelöffel pro Eiweiß",
                  "nl": "Verlaagt pH om eiwitten te stabiliseren; 1/8 theelepel per eiwit"
        },
        {
                  "en": "Adds sweetness and color; 1 tablespoon per cup of egg whites",
                  "es": "Agrega dulzura y color; 1 cucharada por taza de claras",
                  "de": "Fügt Süße und Farbe hinzu; 1 Esslöffel pro Tasse Eiweiß",
                  "nl": "Voegt zoetheid en kleur toe; 1 eetlepel per kop eiwitten"
        },
        {
                  "en": "Prevents bacterial growth; 1/4 cup per dozen egg whites",
                  "es": "Previene crecimiento bacteriano; 1/4 taza por docena de claras",
                  "de": "Verhindert Bakterienwachstum; 1/4 Tasse pro Dutzend Eiweiß",
                  "nl": "Voorkomt bacteriegroei; 1/4 kop per dozijn eiwitten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cream of tartar (potassium bitartrate) lowers pH from 9 to about 6, which stabilizes egg white proteins and creates stronger foam structure. The optimal amount is 1/8 teaspoon per egg white - more can cause graininess.",
                  "es": "El crémor tártaro (bitartrato de potasio) baja el pH de 9 a cerca de 6, lo que estabiliza las proteínas de clara de huevo y crea estructura de espuma más fuerte. La cantidad óptima es 1/8 cucharadita por clara - más puede causar granulosidad.",
                  "de": "Weinstein (Kaliumbitartrat) senkt den pH von 9 auf etwa 6, was Eiweißproteine stabilisiert und stärkere Schaumstruktur schafft. Die optimale Menge ist 1/8 Teelöffel pro Eiweiß - mehr kann Körnigkeit verursachen.",
                  "nl": "Wijnsteen (kaliumbitartraat) verlaagt pH van 9 naar ongeveer 6, wat eiwitproteïnes stabiliseert en sterkere schuimstructuur creëert. De optimale hoeveelheid is 1/8 theelepel per eiwit - meer kan korrelheid veroorzaken."
        }
      },
      {
        question: {
                  "en": "In advanced sugar work, what is pulled sugar, and what temperature range is required for optimal workability?",
                  "es": "En trabajo avanzado de azúcar, ¿qué es azúcar tirado, y qué rango de temperatura se requiere para trabajabilidad óptima?",
                  "de": "Was ist gezogener Zucker in der fortgeschrittenen Zuckerarbeit, und welcher Temperaturbereich ist für optimale Bearbeitbarkeit erforderlich?",
                  "nl": "In geavanceerd suikerwerk, wat is getrokken suiker, en welk temperatuurbereik is vereist voor optimale bewerkbaarheid?"
        },
        options: [
        {
                  "en": "Sugar heated to hard crack then pulled while warm; working temperature 80-90°C",
                  "es": "Azúcar calentado a quiebre duro luego tirado mientras está tibio; temperatura de trabajo 80-90°C",
                  "de": "Zucker zu hartem Bruch erhitzt dann warm gezogen; Arbeitstemperatur 80-90°C",
                  "nl": "Suiker verhit tot harde kraak dan getrokken terwijl warm; werktemperatuur 80-90°C"
        },
        {
                  "en": "Cold sugar paste manipulated by hand; room temperature 20-25°C",
                  "es": "Pasta de azúcar fría manipulada a mano; temperatura ambiente 20-25°C",
                  "de": "Kalte Zuckerpaste von Hand manipuliert; Raumtemperatur 20-25°C",
                  "nl": "Koude suikerpasta met de hand gemanipuleerd; kamertemperatuur 20-25°C"
        },
        {
                  "en": "Caramelized sugar stretched to create decorative elements; 160-170°C",
                  "es": "Azúcar caramelizado estirado para crear elementos decorativos; 160-170°C",
                  "de": "Karamelisierter Zucker gedehnt um dekorative Elemente zu schaffen; 160-170°C",
                  "nl": "Gekarameliseerde suiker uitgerekt om decoratieve elementen te creëren; 160-170°C"
        },
        {
                  "en": "Sugar cooked to soft crack, pulled to incorporate air and create satin finish; 130-140°C",
                  "es": "Azúcar cocido a quiebre suave, tirado para incorporar aire y crear acabado satinado; 130-140°C",
                  "de": "Zucker zu weichem Bruch gekocht, gezogen um Luft einzuarbeiten und Satinfinish zu schaffen; 130-140°C",
                  "nl": "Suiker gekookt tot zachte kraak, getrokken om lucht in te werken en satijn afwerking te creëren; 130-140°C"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Pulled sugar involves cooking sugar to hard crack stage (149-154°C), then pulling repeatedly while cooling to 80-90°C working temperature. This incorporates air bubbles creating a glossy, satin-like finish for decorative elements.",
                  "es": "El azúcar tirado involucra cocinar azúcar a etapa de quiebre duro (149-154°C), luego tirar repetidamente mientras se enfría a temperatura de trabajo 80-90°C. Esto incorpora burbujas de aire creando acabado brillante tipo satín para elementos decorativos.",
                  "de": "Gezogener Zucker beinhaltet Zucker zu hartem Bruch kochen (149-154°C), dann wiederholt ziehen während Abkühlung auf 80-90°C Arbeitstemperatur. Dies arbeitet Luftbläschen ein und schafft glänzendes, satinartiges Finish für dekorative Elemente.",
                  "nl": "Getrokken suiker houdt in dat suiker gekookt wordt tot harde kraak fase (149-154°C), dan herhaaldelijk getrokken wordt tijdens afkoeling tot 80-90°C werktemperatuur. Dit werkt luchtbellen in wat een glanzende, satijn-achtige afwerking creëert voor decoratieve elementen."
        }
      },
      {
        question: {
                  "en": "What is the role of sodium caseinate in professional mousse production, and how does it differ from gelatin?",
                  "es": "¿Cuál es el papel del caseinato de sodio en producción profesional de mousse, y cómo difiere de la gelatina?",
                  "de": "Was ist die Rolle von Natriumkaseinat in der professionellen Mousseerzeugung, und wie unterscheidet es sich von Gelatine?",
                  "nl": "Wat is de rol van natriumcaseïnaat in professionele mousse productie, en hoe verschilt het van gelatine?"
        },
        options: [
        {
                  "en": "Only used for flavoring; has no textural function",
                  "es": "Solo usado para saborizar; no tiene función textural",
                  "de": "Nur für Aromatisierung verwendet; hat keine Texturfunktion",
                  "nl": "Alleen gebruikt voor smaak; heeft geen textuur functie"
        },
        {
                  "en": "Provides sweetness and color; same gelling properties as gelatin",
                  "es": "Proporciona dulzura y color; mismas propiedades gelificantes que gelatina",
                  "de": "Bietet Süße und Farbe; gleiche Geliereigenschaften wie Gelatine",
                  "nl": "Biedt zoetheid en kleur; zelfde geleereigenschappen als gelatine"
        },
        {
                  "en": "Prevents oxidation; identical to gelatin in all other aspects",
                  "es": "Previene oxidación; idéntico a gelatina en todos otros aspectos",
                  "de": "Verhindert Oxidation; identisch mit Gelatine in allen anderen Aspekten",
                  "nl": "Voorkomt oxidatie; identiek aan gelatine in alle andere aspecten"
        },
        {
                  "en": "Acts as emulsifier creating stable foams; thermoreversible unlike gelatin",
                  "es": "Actúa como emulsificante creando espumas estables; termorreversible a diferencia de gelatina",
                  "de": "Wirkt als Emulgator der stabile Schäume schafft; thermoreversibel anders als Gelatine",
                  "nl": "Werkt als emulgator die stabiele schuimen creëert; thermoreversibel in tegenstelling tot gelatine"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Sodium caseinate is a milk protein that acts as an excellent emulsifier, creating stable foams without the thermosetting properties of gelatin. It allows mousses to be reheated without breaking, making it ideal for warm mousses.",
                  "es": "El caseinato de sodio es una proteína de leche que actúa como excelente emulsificante, creando espumas estables sin las propiedades termoendurecibles de la gelatina. Permite que las mousses se recalienten sin romperse, siendo ideal para mousses calientes.",
                  "de": "Natriumkaseinat ist ein Milchprotein das als ausgezeichneter Emulgator wirkt und stabile Schäume ohne die thermohärtenden Eigenschaften von Gelatine schafft. Es ermöglicht Mousses wieder zu erhitzen ohne zu brechen, ideal für warme Mousses.",
                  "nl": "Natriumcaseïnaat is een melkeiwit dat als uitstekende emulgator werkt, stabiele schuimen creërend zonder de thermohardende eigenschappen van gelatine. Het laat mousses opnieuw verwarmen zonder te breken, ideaal voor warme mousses."
        }
      },
      {
        question: {
                  "en": "In molecular gastronomy, what is the difference between agar and carrageenan, and when would you use each in dessert applications?",
                  "es": "En gastronomía molecular, ¿cuál es la diferencia entre agar y carragenano, y cuándo usarías cada uno en aplicaciones de postres?",
                  "de": "Was ist der Unterschied zwischen Agar und Carrageenan in der Molekulargastronomie, und wann würde man jeden in Dessertanwendungen verwenden?",
                  "nl": "In moleculaire gastronomie, wat is het verschil tussen agar en carrageen, en wanneer zou je elk gebruiken in dessert toepassingen?"
        },
        options: [
        {
                  "en": "Carrageenan: creates hard brittle gels; Agar: creates soft flexible textures",
                  "es": "Carragenano: crea geles duros quebradizos; Agar: crea texturas suaves flexibles",
                  "de": "Carrageenan: schafft harte spröde Gele; Agar: schafft weiche flexible Texturen",
                  "nl": "Carrageen: creëert harde broze gelen; Agar: creëert zachte flexibele texturen"
        },
        {
                  "en": "Agar: for cold applications; Carrageenan: for hot applications",
                  "es": "Agar: para aplicaciones frías; Carragenano: para aplicaciones calientes",
                  "de": "Agar: für kalte Anwendungen; Carrageenan: für heiße Anwendungen",
                  "nl": "Agar: voor koude toepassingen; Carrageen: voor warme toepassingen"
        },
        {
                  "en": "Agar: firm, heat-stable gels from seaweed; Carrageenan: elastic, dairy-reactive gels",
                  "es": "Agar: geles firmes y termoestables de algas; Carragenano: geles elásticos reactivos a lácteos",
                  "de": "Agar: feste, hitzestabile Gele aus Seetang; Carrageenan: elastische, milchreaktive Gele",
                  "nl": "Agar: stevige, hittestabiele gelen van zeewier; Carrageen: elastische, zuivel-reactieve gelen"
        },
        {
                  "en": "Both identical in properties; only differ in source",
                  "es": "Ambos idénticos en propiedades; solo difieren en fuente",
                  "de": "Beide identisch in Eigenschaften; unterscheiden sich nur in Herkunft",
                  "nl": "Beide identiek in eigenschappen; verschillen alleen in bron"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Agar creates firm, brittle, heat-stable gels that set at room temperature and melt at 85°C. Carrageenan forms elastic, creamy gels that react synergistically with dairy proteins, making it ideal for panna cotta and milk-based desserts.",
                  "es": "Agar crea geles firmes, quebradizos y termoestables que cuajan a temperatura ambiente y se derriten a 85°C. Carragenano forma geles elásticos y cremosos que reaccionan sinérgicamente con proteínas lácteas, siendo ideal para panna cotta y postres lácteos.",
                  "de": "Agar schafft feste, spröde, hitzestabile Gele die bei Raumtemperatur setzen und bei 85°C schmelzen. Carrageenan bildet elastische, cremige Gele die synergistisch mit Milchproteinen reagieren, ideal für Panna Cotta und milchbasierte Desserts.",
                  "nl": "Agar creëert stevige, broze, hittestabiele gelen die bij kamertemperatuur stollen en bij 85°C smelten. Carrageen vormt elastische, romige gelen die synergistisch reageren met zuiveleiwitten, ideaal voor panna cotta en melk-gebaseerde desserts."
        }
      },
      {
        question: {
                  "en": "What is the purpose of using silicon dioxide (silica) in powdered sugar, and how does this affect professional applications?",
                  "es": "¿Cuál es el propósito de usar dióxido de silicio (sílice) en azúcar en polvo, y cómo afecta esto las aplicaciones profesionales?",
                  "de": "Was ist der Zweck von Siliziumdioxid (Kieselsäure) in Puderzucker, und wie beeinflusst dies professionelle Anwendungen?",
                  "nl": "Wat is het doel van het gebruiken van siliciumdioxide (silica) in poedersuiker, en hoe beïnvloedt dit professionele toepassingen?"
        },
        options: [
        {
                  "en": "Preservative preventing spoilage; essential for all professional work",
                  "es": "Conservante previniendo deterioro; esencial para todo trabajo profesional",
                  "de": "Konservierungsmittel verhindert Verderb; wesentlich für alle professionelle Arbeit",
                  "nl": "Conserveermiddel voorkomt bederf; essentieel voor al het professionele werk"
        },
        {
                  "en": "Anti-caking agent preventing clumping; can affect smooth ganache texture",
                  "es": "Agente antiaglomerante previniendo grumos; puede afectar textura suave de ganache",
                  "de": "Rieselhilfe verhindert Verklumpen; kann glatte Ganache-Textur beeinträchtigen",
                  "nl": "Anti-klontering middel voorkomt klonteren; kan gladde ganache textuur beïnvloeden"
        },
        {
                  "en": "Whitening agent for color; no impact on texture or function",
                  "es": "Agente blanqueador para color; sin impacto en textura o función",
                  "de": "Bleichmittel für Farbe; kein Einfluss auf Textur oder Funktion",
                  "nl": "Blekmiddel voor kleur; geen impact op textuur of functie"
        },
        {
                  "en": "Adds sweetness and extends shelf life; improves all applications",
                  "es": "Agrega dulzura y extiende vida útil; mejora todas aplicaciones",
                  "de": "Fügt Süße hinzu und verlängert Haltbarkeit; verbessert alle Anwendungen",
                  "nl": "Voegt zoetheid toe en verlengt houdbaarheid; verbetert alle toepassingen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Silicon dioxide (typically 3%) acts as an anti-caking agent to prevent powdered sugar from clumping. However, it can create slight grittiness in smooth applications like ganache, so some professionals prefer organic powdered sugar without silica for premium applications.",
                  "es": "El dióxido de silicio (típicamente 3%) actúa como agente antiaglomerante para prevenir que el azúcar en polvo se agrume. Sin embargo, puede crear ligera arenilla en aplicaciones suaves como ganache, así que algunos profesionales prefieren azúcar en polvo orgánico sin sílice para aplicaciones premium.",
                  "de": "Siliziumdioxid (typisch 3%) wirkt als Rieselhilfe um Puderzucker vor Verklumpen zu bewahren. Jedoch kann es leichte Körnigkeit in glatten Anwendungen wie Ganache schaffen, daher bevorzugen manche Profis organischen Puderzucker ohne Kieselsäure für Premium-Anwendungen.",
                  "nl": "Siliciumdioxide (typisch 3%) werkt als anti-klontering middel om poedersuiker van klonteren te weerhouden. Het kan echter lichte grofheid creëren in gladde toepassingen zoals ganache, dus sommige professionals verkiezen biologische poedersuiker zonder silica voor premium toepassingen."
        }
      },
      {
        question: {
                  "en": "In advanced cake production, what is the reverse creaming method, and what advantage does it provide over traditional creaming?",
                  "es": "En producción avanzada de pasteles, ¿qué es el método de cremado reverso, y qué ventaja proporciona sobre el cremado tradicional?",
                  "de": "Was ist die umgekehrte Aufschlagmethode in der fortgeschrittenen Kuchenproduktion, und welchen Vorteil bietet sie gegenüber traditionellem Aufschlagen?",
                  "nl": "In geavanceerde taart productie, wat is de omgekeerde romige methode, en welk voordeel biedt het boven traditioneel romig maken?"
        },
        options: [
        {
                  "en": "Add ingredients in reverse order; no functional difference",
                  "es": "Agregar ingredientes en orden reverso; ninguna diferencia funcional",
                  "de": "Zutaten in umgekehrter Reihenfolge hinzufügen; kein funktionaler Unterschied",
                  "nl": "Ingrediënten in omgekeerde volgorde toevoegen; geen functioneel verschil"
        },
        {
                  "en": "Mix flour with fat first, then add liquids; creates more tender, consistent texture",
                  "es": "Mezclar harina con grasa primero, luego agregar líquidos; crea textura más tierna y consistente",
                  "de": "Mehl zuerst mit Fett mischen, dann Flüssigkeiten hinzufügen; schafft zartere, konsistentere Textur",
                  "nl": "Bloem eerst met vet mengen, dan vloeistoffen toevoegen; creëert terere, consistentere textuur"
        },
        {
                  "en": "Cream sugar with eggs instead of butter; reduces mixing time",
                  "es": "Cremar azúcar con huevos en lugar de mantequilla; reduce tiempo de mezcla",
                  "de": "Zucker mit Eiern statt Butter aufschlagen; reduziert Mischzeit",
                  "nl": "Suiker met eieren in plaats van boter romig maken; vermindert mengtijd"
        },
        {
                  "en": "Mix everything cold then heat; prevents curdling",
                  "es": "Mezclar todo frío luego calentar; previene cuajado",
                  "de": "Alles kalt mischen dann erhitzen; verhindert Gerinnung",
                  "nl": "Alles koud mengen dan verwarmen; voorkomt schiften"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Reverse creaming mixes flour with butter/fat first, coating flour proteins and preventing excessive gluten development. This creates more tender, consistent crumb structure with less risk of overmixing vs traditional creaming.",
                  "es": "El cremado reverso mezcla harina con mantequilla/grasa primero, cubriendo proteínas de harina y previniendo desarrollo excesivo de gluten. Esto crea estructura de miga más tierna y consistente con menos riesgo de sobremezcla comparado al cremado tradicional.",
                  "de": "Umgekehrtes Aufschlagen mischt Mehl zuerst mit Butter/Fett, überzieht Mehlproteine und verhindert exzessive Glutenentwicklung. Dies schafft zartere, konsistentere Krumenstruktur mit weniger Übermischrisiko verglichen mit traditionellem Aufschlagen.",
                  "nl": "Omgekeerd romig maken mengt bloem eerst met boter/vet, bedekt bloem eiwitten en voorkomt excessieve glutenontwikkeling. Dit creëert terere, consistentere kruimstructuur met minder risico op overmengen vergeleken met traditioneel romig maken."
        }
      },
      {
        question: {
                  "en": "What is the function of potassium sorbate in professional cake preservation, and what concentration is typically used?",
                  "es": "¿Cuál es la función del sorbato de potasio en preservación profesional de pasteles, y qué concentración se usa típicamente?",
                  "de": "Was ist die Funktion von Kaliumsorbat in der professionellen Kuchenkonservierung, und welche Konzentration wird typischerweise verwendet?",
                  "nl": "Wat is de functie van kaliumsorbaat in professionele taart conservering, en welke concentratie wordt typisch gebruikt?"
        },
        options: [
        {
                  "en": "Adds sweetness and moisture; 2-3% of flour weight",
                  "es": "Agrega dulzura y humedad; 2-3% del peso de harina",
                  "de": "Fügt Süße und Feuchtigkeit hinzu; 2-3% des Mehlgewichts",
                  "nl": "Voegt zoetheid en vocht toe; 2-3% van bloem gewicht"
        },
        {
                  "en": "Improves texture only; 0.5-1% of liquid ingredients",
                  "es": "Solo mejora textura; 0.5-1% de ingredientes líquidos",
                  "de": "Verbessert nur Textur; 0.5-1% der flüssigen Zutaten",
                  "nl": "Verbetert alleen textuur; 0.5-1% van vloeibare ingrediënten"
        },
        {
                  "en": "Inhibits mold and yeast growth; 0.1-0.2% of total weight",
                  "es": "Inhibe crecimiento de moho y levadura; 0.1-0.2% del peso total",
                  "de": "Hemmt Schimmel- und Hefewachstum; 0.1-0.2% des Gesamtgewichts",
                  "nl": "Remt schimmel- en gistgroei; 0.1-0.2% van totaal gewicht"
        },
        {
                  "en": "Colors the cake; 1% of total batter weight",
                  "es": "Colorea el pastel; 1% del peso total de masa",
                  "de": "Färbt den Kuchen; 1% des Gesamtteiggewichts",
                  "nl": "Kleurt de taart; 1% van totaal beslag gewicht"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Potassium sorbate is an effective preservative that inhibits mold, yeast, and some bacteria growth. The typical concentration is 0.1-0.2% of total weight. It's most effective at pH below 6.5 and extends shelf life significantly.",
                  "es": "El sorbato de potasio es un conservante efectivo que inhibe crecimiento de moho, levadura y algunas bacterias. La concentración típica es 0.1-0.2% del peso total. Es más efectivo a pH bajo 6.5 y extiende significativamente la vida útil.",
                  "de": "Kaliumsorbat ist ein effektives Konservierungsmittel das Schimmel-, Hefe- und einiges Bakterienwachstum hemmt. Die typische Konzentration ist 0.1-0.2% des Gesamtgewichts. Es ist bei pH unter 6.5 am effektivsten und verlängert die Haltbarkeit erheblich.",
                  "nl": "Kaliumsorbaat is een effectief conserveermiddel dat schimmel-, gist- en enkele bacteriëngroei remt. De typische concentratie is 0.1-0.2% van totaal gewicht. Het is meest effectief bij pH onder 6.5 en verlengt houdbaarheid aanzienlijk."
        }
      },
      {
        question: {
                  "en": "In advanced chocolate tempering, what are the five polymorphic forms of chocolate, and which form is desired for professional applications?",
                  "es": "En templado avanzado de chocolate, ¿cuáles son las cinco formas polimórficas del chocolate, y cuál forma se desea para aplicaciones profesionales?",
                  "de": "Was sind die fünf polymorphen Formen von Schokolade beim fortgeschrittenen Temperieren, und welche Form ist für professionelle Anwendungen erwünscht?",
                  "nl": "In geavanceerd chocolade tempereren, wat zijn de vijf polymorfe vormen van chocolade, en welke vorm is gewenst voor professionele toepassingen?"
        },
        options: [
        {
                  "en": "Six forms; Form VI creates the glossiest finish",
                  "es": "Seis formas; Forma VI crea acabado más brillante",
                  "de": "Sechs Formen; Form VI schafft das glänzendste Finish",
                  "nl": "Zes vormen; Vorm VI creëert de glanzendste afwerking"
        },
        {
                  "en": "Three forms only; Form III is optimal for all applications",
                  "es": "Solo tres formas; Forma III es óptima para todas aplicaciones",
                  "de": "Nur drei Formen; Form III ist optimal für alle Anwendungen",
                  "nl": "Alleen drie vormen; Vorm III is optimaal voor alle toepassingen"
        },
        {
                  "en": "Forms A-E; Form A provides the most workable texture",
                  "es": "Formas A-E; Forma A proporciona textura más trabajable",
                  "de": "Formen A-E; Form A bietet die bearbeitbarste Textur",
                  "nl": "Vormen A-E; Vorm A biedt de meest werkbare textuur"
        },
        {
                  "en": "Forms I-V; Form V (β2) provides best snap, gloss, and stability",
                  "es": "Formas I-V; Forma V (β2) proporciona mejor chasquido, brillo y estabilidad",
                  "de": "Formen I-V; Form V (β2) bietet besten Knack, Glanz und Stabilität",
                  "nl": "Vormen I-V; Vorm V (β2) biedt beste knak, glans en stabiliteit"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Chocolate has five polymorphic crystal forms (I-V). Form V (β2 crystals) is the desired stable form providing proper snap, glossy appearance, good release from molds, and resistance to bloom. Forms I-IV are unstable and Form VI appears during bloom.",
                  "es": "El chocolate tiene cinco formas cristalinas polimórficas (I-V). La Forma V (cristales β2) es la forma estable deseada que proporciona chasquido adecuado, apariencia brillante, buena liberación de moldes, y resistencia al florecimiento. Las Formas I-IV son inestables y la Forma VI aparece durante el florecimiento.",
                  "de": "Schokolade hat fünf polymorphe Kristallformen (I-V). Form V (β2-Kristalle) ist die gewünschte stabile Form die richtigen Knack, glänzendes Aussehen, gute Formablösung und Reifresistenz bietet. Formen I-IV sind instabil und Form VI erscheint während des Reifs.",
                  "nl": "Chocolade heeft vijf polymorfe kristalvormen (I-V). Vorm V (β2-kristallen) is de gewenste stabiele vorm die juiste knak, glanzend uiterlijk, goede vormafgifte en bloei-weerstand biedt. Vormen I-IV zijn onstabiel en Vorm VI verschijnt tijdens bloei."
        }
      },
      {
        question: {
                  "en": "What is the purpose of using invert syrup in professional fondant production, and how does it affect the final texture?",
                  "es": "¿Cuál es el propósito de usar jarabe invertido en producción profesional de fondant, y cómo afecta la textura final?",
                  "de": "Was ist der Zweck von Invertsirup in der professionellen Fondanterzeugung, und wie beeinflusst es die finale Textur?",
                  "nl": "Wat is het doel van het gebruiken van invertsiroop in professionele fondant productie, en hoe beïnvloedt het de uiteindelijke textuur?"
        },
        options: [
        {
                  "en": "Creates harder, more brittle fondant",
                  "es": "Crea fondant más duro y quebradizo",
                  "de": "Schafft härteren, spröderes Fondant",
                  "nl": "Creëert hardere, brozere fondant"
        },
        {
                  "en": "Used only for coloring; makes fondant whiter",
                  "es": "Usado solo para colorear; hace fondant más blanco",
                  "de": "Nur für Färbung verwendet; macht Fondant weißer",
                  "nl": "Alleen gebruikt voor kleuring; maakt fondant witter"
        },
        {
                  "en": "Only adds sweetness; no textural benefits",
                  "es": "Solo agrega dulzura; ningún beneficio textural",
                  "de": "Fügt nur Süße hinzu; keine Texturvorteile",
                  "nl": "Voegt alleen zoetheid toe; geen textuur voordelen"
        },
        {
                  "en": "Prevents crystallization and creates smooth, pliable texture",
                  "es": "Previene cristalización y crea textura suave y maleable",
                  "de": "Verhindert Kristallisation und schafft glatte, formbare Textur",
                  "nl": "Voorkomt kristallisatie en creëert gladde, plooibare textuur"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Invert syrup contains glucose and fructose which interfere with sucrose crystallization, creating smoother fondant. It also attracts moisture (hygroscopic), keeping fondant pliable and preventing cracking during storage and handling.",
                  "es": "El jarabe invertido contiene glucosa y fructosa que interfieren con la cristalización de sacarosa, creando fondant más suave. También atrae humedad (higroscópico), manteniendo fondant maleable y previniendo grietas durante almacenamiento y manejo.",
                  "de": "Invertsirup enthält Glukose und Fruktose die Saccharose-Kristallisation stören und glatteren Fondant schaffen. Er zieht auch Feuchtigkeit an (hygroskopisch), hält Fondant formbar und verhindert Risse während Lagerung und Handhabung.",
                  "nl": "Invertsiroop bevat glucose en fructose die sucrose kristallisatie verstoren, gladder fondant creërend. Het trekt ook vocht aan (hygroscopisch), houdt fondant plooibaar en voorkomt scheuren tijdens opslag en hantering."
        }
      },
      {
        question: {
                  "en": "In molecular gastronomy applications, what is liquid nitrogen's temperature, and what safety precautions are essential when using it in desserts?",
                  "es": "En aplicaciones de gastronomía molecular, ¿cuál es la temperatura del nitrógeno líquido, y qué precauciones de seguridad son esenciales al usarlo en postres?",
                  "de": "Was ist die Temperatur von flüssigem Stickstoff in Molekulargastronomieanwendungen, und welche Sicherheitsvorkehrungen sind wesentlich beim Verwenden in Desserts?",
                  "nl": "In moleculaire gastronomie toepassingen, wat is de temperatuur van vloeibare stikstof, en welke veiligheidsmaatregelen zijn essentieel bij gebruik in desserts?"
        },
        options: [
        {
                  "en": "-196°C; requires protective equipment, ventilation, and must never touch skin directly",
                  "es": "-196°C; requiere equipo protector, ventilación, y nunca debe tocar piel directamente",
                  "de": "-196°C; erfordert Schutzausrüstung, Belüftung, und darf niemals Haut direkt berühren",
                  "nl": "-196°C; vereist beschermende uitrusting, ventilatie, en mag nooit direct huid raken"
        },
        {
                  "en": "-250°C; cannot be used safely in food applications",
                  "es": "-250°C; no puede usarse seguramente en aplicaciones alimentarias",
                  "de": "-250°C; kann nicht sicher in Lebensmittelanwendungen verwendet werden",
                  "nl": "-250°C; kan niet veilig gebruikt worden in voedsel toepassingen"
        },
        {
                  "en": "-100°C; only requires eye protection",
                  "es": "-100°C; solo requiere protección ocular",
                  "de": "-100°C; erfordert nur Augenschutz",
                  "nl": "-100°C; vereist alleen oogbescherming"
        },
        {
                  "en": "-78°C; safe to handle with bare hands for brief contact",
                  "es": "-78°C; seguro manejar con manos desnudas por contacto breve",
                  "de": "-78°C; sicher mit bloßen Händen für kurzen Kontakt zu handhaben",
                  "nl": "-78°C; veilig om met blote handen aan te raken voor kort contact"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Liquid nitrogen boils at -196°C (-321°F). Essential safety measures include: protective gloves and eyewear, adequate ventilation to prevent oxygen displacement, never allowing direct skin contact, and ensuring complete evaporation before serving to customers.",
                  "es": "El nitrógeno líquido hierve a -196°C (-321°F). Medidas de seguridad esenciales incluyen: guantes protectores y gafas, ventilación adecuada para prevenir desplazamiento de oxígeno, nunca permitir contacto directo con piel, y asegurar evaporación completa antes de servir a clientes.",
                  "de": "Flüssiger Stickstoff siedet bei -196°C (-321°F). Wesentliche Sicherheitsmaßnahmen umfassen: Schutzhandschuhe und Schutzbrille, ausreichende Belüftung um Sauerstoffverdrängung zu verhindern, niemals direkten Hautkontakt erlauben, und vollständige Verdampfung vor Servieren an Kunden sicherstellen.",
                  "nl": "Vloeibare stikstof kookt bij -196°C (-321°F). Essentiële veiligheidsmaatregelen omvatten: beschermende handschoenen en oogbescherming, adequate ventilatie om zuurstof verdringing te voorkomen, nooit direct huidcontact toestaan, en volledige verdamping verzekeren voor serveren aan klanten."
        }
      },
      {
        question: {
                  "en": "What is the difference between cocoa powder processed with alkali (Dutch process) vs natural cocoa powder in baking applications?",
                  "es": "¿Cuál es la diferencia entre cacao en polvo procesado con álcali (proceso holandés) vs cacao en polvo natural en aplicaciones de horneado?",
                  "de": "Was ist der Unterschied zwischen mit Alkali verarbeitetem Kakaopulver (Dutch Process) vs natürlichem Kakaopulver in Backanwendungen?",
                  "nl": "Wat is het verschil tussen cacaopoeder verwerkt met alkali (Nederlandse proces) vs natuurlijke cacaopoeder in bak toepassingen?"
        },
        options: [
        {
                  "en": "Dutch process (pH 7-8) requires baking soda; natural (pH 5.3-5.8) works with baking powder",
                  "es": "Proceso holandés (pH 7-8) requiere bicarbonato; natural (pH 5.3-5.8) funciona con polvo de hornear",
                  "de": "Dutch Process (pH 7-8) benötigt Natron; natürlich (pH 5.3-5.8) funktioniert mit Backpulver",
                  "nl": "Nederlandse proces (pH 7-8) vereist zuiveringszout; natuurlijke (pH 5.3-5.8) werkt met bakpoeder"
        },
        {
                  "en": "No difference in pH or leavening interactions",
                  "es": "Sin diferencia en pH o interacciones con leudantes",
                  "de": "Kein Unterschied in pH oder Triebmittel-Wechselwirkungen",
                  "nl": "Geen verschil in pH of rijsmiddel interacties"
        },
        {
                  "en": "Dutch process is more acidic and requires more baking soda",
                  "es": "Proceso holandés es más ácido y requiere más bicarbonato",
                  "de": "Dutch Process ist saurer und benötigt mehr Natron",
                  "nl": "Nederlandse proces is zuurder en vereist meer zuiveringszout"
        },
        {
                  "en": "Natural cocoa is alkaline and works best with acid",
                  "es": "Cacao natural es alcalino y funciona mejor con ácido",
                  "de": "Natürlicher Kakao ist alkalisch und funktioniert am besten mit Säure",
                  "nl": "Natuurlijke cacao is alkalisch en werkt het best met zuur"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Dutch process cocoa is alkalized (pH 7-8), neutralizing its acidity, so it requires acidic leavening agents like baking soda for proper reaction. Natural cocoa is acidic (pH 5.3-5.8) and reacts well with baking powder's alkaline components.",
                  "es": "El cacao de proceso holandés está alcalinizado (pH 7-8), neutralizando su acidez, así que requiere agentes leudantes ácidos como bicarbonato para reacción adecuada. El cacao natural es ácido (pH 5.3-5.8) y reacciona bien con componentes alcalinos del polvo de hornear.",
                  "de": "Dutch Process Kakao ist alkalisiert (pH 7-8), neutralisiert seine Säure, daher benötigt es saure Triebmittel wie Natron für richtige Reaktion. Natürlicher Kakao ist sauer (pH 5.3-5.8) und reagiert gut mit alkalischen Komponenten von Backpulver.",
                  "nl": "Nederlandse proces cacao is gealkaliseerd (pH 7-8), neutraliseert zijn zuurheid, dus het vereist zure rijsmiddelen zoals zuiveringszout voor juiste reactie. Natuurlijke cacao is zuur (pH 5.3-5.8) en reageert goed met alkalische componenten van bakpoeder."
        }
      },
      {
        question: {
                  "en": "In advanced sugar crystallization, what is the purpose of seeding, and what temperature differential is critical for success?",
                  "es": "En cristalización avanzada de azúcar, ¿cuál es el propósito de la siembra, y qué diferencial de temperatura es crítico para el éxito?",
                  "de": "Was ist der Zweck des Impfens bei fortgeschrittener Zuckerkristallisation, und welche Temperaturdifferenz ist kritisch für den Erfolg?",
                  "nl": "In geavanceerde suiker kristallisatie, wat is het doel van enten, en welk temperatuurverschil is cruciaal voor succes?"
        },
        options: [
        {
                  "en": "Creates colored crystals; temperature differential of 20-30°C required",
                  "es": "Crea cristales coloreados; diferencial de temperatura de 20-30°C requerido",
                  "de": "Schafft farbige Kristalle; Temperaturdifferenz von 20-30°C erforderlich",
                  "nl": "Creëert gekleurde kristallen; temperatuurverschil van 20-30°C vereist"
        },
        {
                  "en": "Only for flavoring; temperature doesn't matter",
                  "es": "Solo para saborizar; temperatura no importa",
                  "de": "Nur für Aromatisierung; Temperatur spielt keine Rolle",
                  "nl": "Alleen voor smaak; temperatuur maakt niet uit"
        },
        {
                  "en": "Introduces crystal structure; seed temp 5-10°C below syrup temperature",
                  "es": "Introduce estructura cristalina; temp de siembra 5-10°C bajo temperatura del jarabe",
                  "de": "Führt Kristallstruktur ein; Impftemperatur 5-10°C unter Siruptemperatur",
                  "nl": "Introduceert kristalstructuur; ent temp 5-10°C onder siroop temperatuur"
        },
        {
                  "en": "Prevents crystallization completely; use at same temperature",
                  "es": "Previene cristalización completamente; usar a misma temperatura",
                  "de": "Verhindert Kristallisation vollständig; bei gleicher Temperatur verwenden",
                  "nl": "Voorkomt kristallisatie volledig; gebruik bij zelfde temperatuur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Seeding introduces stable crystal nuclei to control crystallization and create desired texture. The seed crystals must be 5-10°C cooler than the syrup to provide the right supersaturation level for controlled crystal growth without shocking the system.",
                  "es": "La siembra introduce núcleos cristalinos estables para controlar cristalización y crear textura deseada. Los cristales de siembra deben estar 5-10°C más fríos que el jarabe para proporcionar nivel correcto de sobresaturación para crecimiento cristalino controlado sin chocar el sistema.",
                  "de": "Impfen führt stabile Kristallkeime ein um Kristallisation zu kontrollieren und gewünschte Textur zu schaffen. Die Impfkristalle müssen 5-10°C kühler als der Sirup sein um das richtige Übersättigungsniveau für kontrolliertes Kristallwachstum ohne Systemschock zu bieten.",
                  "nl": "Enten introduceert stabiele kristal kernen om kristallisatie te controleren en gewenste textuur te creëren. De ent kristallen moeten 5-10°C koeler zijn dan de siroop om het juiste oververzadigingsniveau te bieden voor gecontroleerde kristalgroei zonder het systeem te schokken."
        }
      },
      {
        question: {
                  "en": "What is the scientific principle behind using invert sugar in advanced patisserie applications?",
                  "es": "¿Cuál es el principio científico detrás del uso de azúcar invertido en aplicaciones avanzadas de pastelería?",
                  "de": "Was ist das wissenschaftliche Prinzip hinter der Verwendung von Invertzucker in fortgeschrittenen Konditorei-Anwendungen?",
                  "nl": "Wat is het wetenschappelijke principe achter het gebruik van invertsuiker in geavanceerde patisserie toepassingen?"
        },
        options: [
        {
                  "en": "It makes products sweeter only",
                  "es": "Solo hace los productos más dulces",
                  "de": "Es macht Produkte nur süßer",
                  "nl": "Het maakt producten alleen zoeter"
        },
        {
                  "en": "It prevents crystallization, retains moisture, and extends shelf life",
                  "es": "Previene cristalización, retiene humedad y extiende vida útil",
                  "de": "Es verhindert Kristallisation, behält Feuchtigkeit und verlängert Haltbarkeit",
                  "nl": "Het voorkomt kristallisatie, behoudt vocht en verlengt houdbaarheid"
        },
        {
                  "en": "It reduces cooking time",
                  "es": "Reduce el tiempo de cocción",
                  "de": "Es reduziert die Kochzeit",
                  "nl": "Het vermindert de kooktijd"
        },
        {
                  "en": "It changes the color of desserts",
                  "es": "Cambia el color de los postres",
                  "de": "Es verändert die Farbe von Desserts",
                  "nl": "Het verandert de kleur van desserts"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Invert sugar (glucose + fructose) is hygroscopic, preventing crystallization in ganaches and sorbets, retaining moisture in baked goods, and acting as a natural preservative by binding water molecules, making it invaluable in professional pastry work.",
                  "es": "El azúcar invertido (glucosa + fructosa) es higroscópico, previniendo cristalización en ganaches y sorbetes, reteniendo humedad en productos horneados, y actuando como preservativo natural uniendo moléculas de agua, haciéndolo invaluable en trabajo profesional de pastelería.",
                  "de": "Invertzucker (Glucose + Fructose) ist hygroskopisch, verhindert Kristallisation in Ganaches und Sorbets, behält Feuchtigkeit in Backwaren und wirkt als natürliches Konservierungsmittel durch Bindung von Wassermolekülen, was ihn in professioneller Konditoreiarbeit unverzichtbar macht.",
                  "nl": "Invertsuiker (glucose + fructose) is hygroscopisch, voorkomt kristallisatie in ganaches en sorbets, behoudt vocht in gebakken goederen, en werkt als natuurlijke conserveermiddel door water moleculen te binden, wat het onschatbaar maakt in professioneel banketbakkerswerk."
        }
      },
      {
        question: {
                  "en": "What is the main ingredient in sponge cake?",
                  "es": "What is the main ingredient in sponge cake?",
                  "de": "What is the main ingredient in sponge cake?",
                  "nl": "What is the main ingredient in sponge cake?"
        },
        options: [
        {
                  "en": "Butter",
                  "es": "Butter",
                  "de": "Butter",
                  "nl": "Butter"
        },
        {
                  "en": "Eggs",
                  "es": "Eggs",
                  "de": "Eggs",
                  "nl": "Eggs"
        },
        {
                  "en": "Sugar",
                  "es": "Sugar",
                  "de": "Sugar",
                  "nl": "Sugar"
        },
        {
                  "en": "Flour",
                  "es": "Flour",
                  "de": "Flour",
                  "nl": "Flour"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation.",
                  "es": "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation.",
                  "de": "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation.",
                  "nl": "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation."
        }
      },
      {
        question: {
                  "en": "What country is the Black Forest cake from?",
                  "es": "What country is the Black Forest cake from?",
                  "de": "What country is the Black Forest cake from?",
                  "nl": "What country is the Black Forest cake from?"
        },
        options: [
        {
                  "en": "Germany",
                  "es": "Germany",
                  "de": "Germany",
                  "nl": "Germany"
        },
        {
                  "en": "Switzerland",
                  "es": "Switzerland",
                  "de": "Switzerland",
                  "nl": "Switzerland"
        },
        {
                  "en": "Austria",
                  "es": "Austria",
                  "de": "Austria",
                  "nl": "Austria"
        },
        {
                  "en": "France",
                  "es": "France",
                  "de": "France",
                  "nl": "France"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany.",
                  "es": "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany.",
                  "de": "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany.",
                  "nl": "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany."
        }
      },
      {
        question: {
                  "en": "What is a bundt cake?",
                  "es": "What is a bundt cake?",
                  "de": "What is a bundt cake?",
                  "nl": "What is a bundt cake?"
        },
        options: [
        {
                  "en": "Cake baked in a ring-shaped pan",
                  "es": "Cake baked in a ring-shaped pan",
                  "de": "Cake baked in a ring-shaped pan",
                  "nl": "Cake baked in a ring-shaped pan"
        },
        {
                  "en": "Cupcake",
                  "es": "Cupcake",
                  "de": "Cupcake",
                  "nl": "Cupcake"
        },
        {
                  "en": "Layered cake",
                  "es": "Layered cake",
                  "de": "Layered cake",
                  "nl": "Layered cake"
        },
        {
                  "en": "Sheet cake",
                  "es": "Sheet cake",
                  "de": "Sheet cake",
                  "nl": "Sheet cake"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting.",
                  "es": "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting.",
                  "de": "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting.",
                  "nl": "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting."
        }
      },
      {
        question: {
                  "en": "What is angel food cake known for?",
                  "es": "What is angel food cake known for?",
                  "de": "What is angel food cake known for?",
                  "nl": "What is angel food cake known for?"
        },
        options: [
        {
                  "en": "Being light and fat-free",
                  "es": "Being light and fat-free",
                  "de": "Being light and fat-free",
                  "nl": "Being light and fat-free"
        },
        {
                  "en": "Heavy texture",
                  "es": "Heavy texture",
                  "de": "Heavy texture",
                  "nl": "Heavy texture"
        },
        {
                  "en": "Cream cheese frosting",
                  "es": "Cream cheese frosting",
                  "de": "Cream cheese frosting",
                  "nl": "Cream cheese frosting"
        },
        {
                  "en": "Rich chocolate flavor",
                  "es": "Rich chocolate flavor",
                  "de": "Rich chocolate flavor",
                  "nl": "Rich chocolate flavor"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour.",
                  "es": "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour.",
                  "de": "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour.",
                  "nl": "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour."
        }
      },
      {
        question: {
                  "en": "What is the traditional frosting for red velvet cake?",
                  "es": "What is the traditional frosting for red velvet cake?",
                  "de": "What is the traditional frosting for red velvet cake?",
                  "nl": "What is the traditional frosting for red velvet cake?"
        },
        options: [
        {
                  "en": "Buttercream",
                  "es": "Buttercream",
                  "de": "Buttercream",
                  "nl": "Buttercream"
        },
        {
                  "en": "Ganache",
                  "es": "Ganache",
                  "de": "Ganache",
                  "nl": "Ganache"
        },
        {
                  "en": "Cream cheese frosting",
                  "es": "Cream cheese frosting",
                  "de": "Cream cheese frosting",
                  "nl": "Cream cheese frosting"
        },
        {
                  "en": "Whipped cream",
                  "es": "Whipped cream",
                  "de": "Whipped cream",
                  "nl": "Whipped cream"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor.",
                  "es": "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor.",
                  "de": "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor.",
                  "nl": "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor."
        }
      },
      {
        question: {
                  "en": "What makes a pound cake?",
                  "es": "What makes a pound cake?",
                  "de": "What makes a pound cake?",
                  "nl": "What makes a pound cake?"
        },
        options: [
        {
                  "en": "Served by the pound",
                  "es": "Served by the pound",
                  "de": "Served by the pound",
                  "nl": "Served by the pound"
        },
        {
                  "en": "Equal weights of butter, sugar, eggs, flour",
                  "es": "Equal weights of butter, sugar, eggs, flour",
                  "de": "Equal weights of butter, sugar, eggs, flour",
                  "nl": "Equal weights of butter, sugar, eggs, flour"
        },
        {
                  "en": "Contains a pound of chocolate",
                  "es": "Contains a pound of chocolate",
                  "de": "Contains a pound of chocolate",
                  "nl": "Contains a pound of chocolate"
        },
        {
                  "en": "It weighs one pound",
                  "es": "It weighs one pound",
                  "de": "It weighs one pound",
                  "nl": "It weighs one pound"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour.",
                  "es": "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour.",
                  "de": "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour.",
                  "nl": "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour."
        }
      },
      {
        question: {
                  "en": "What is tres leches cake soaked in?",
                  "es": "What is tres leches cake soaked in?",
                  "de": "What is tres leches cake soaked in?",
                  "nl": "What is tres leches cake soaked in?"
        },
        options: [
        {
                  "en": "Rum",
                  "es": "Rum",
                  "de": "Rum",
                  "nl": "Rum"
        },
        {
                  "en": "Fruit syrup",
                  "es": "Fruit syrup",
                  "de": "Fruit syrup",
                  "nl": "Fruit syrup"
        },
        {
                  "en": "Coffee",
                  "es": "Coffee",
                  "de": "Coffee",
                  "nl": "Coffee"
        },
        {
                  "en": "Three types of milk",
                  "es": "Three types of milk",
                  "de": "Three types of milk",
                  "nl": "Three types of milk"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream.",
                  "es": "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream.",
                  "de": "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream.",
                  "nl": "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream."
        }
      },
      {
        question: {
                  "en": "What is a chiffon cake?",
                  "es": "What is a chiffon cake?",
                  "de": "What is a chiffon cake?",
                  "nl": "What is a chiffon cake?"
        },
        options: [
        {
                  "en": "Frozen cake",
                  "es": "Frozen cake",
                  "de": "Frozen cake",
                  "nl": "Frozen cake"
        },
        {
                  "en": "Flourless cake",
                  "es": "Flourless cake",
                  "de": "Flourless cake",
                  "nl": "Flourless cake"
        },
        {
                  "en": "Dense butter cake",
                  "es": "Dense butter cake",
                  "de": "Dense butter cake",
                  "nl": "Dense butter cake"
        },
        {
                  "en": "Light cake made with oil",
                  "es": "Light cake made with oil",
                  "de": "Light cake made with oil",
                  "nl": "Light cake made with oil"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Chiffon cake is a light, airy cake made with vegetable oil instead of butter.",
                  "es": "Chiffon cake is a light, airy cake made with vegetable oil instead of butter.",
                  "de": "Chiffon cake is a light, airy cake made with vegetable oil instead of butter.",
                  "nl": "Chiffon cake is a light, airy cake made with vegetable oil instead of butter."
        }
      },
      {
        question: {
                  "en": "What is genoise?",
                  "es": "What is genoise?",
                  "de": "What is genoise?",
                  "nl": "What is genoise?"
        },
        options: [
        {
                  "en": "German fruit cake",
                  "es": "German fruit cake",
                  "de": "German fruit cake",
                  "nl": "German fruit cake"
        },
        {
                  "en": "French chocolate cake",
                  "es": "French chocolate cake",
                  "de": "French chocolate cake",
                  "nl": "French chocolate cake"
        },
        {
                  "en": "Italian sponge cake",
                  "es": "Italian sponge cake",
                  "de": "Italian sponge cake",
                  "nl": "Italian sponge cake"
        },
        {
                  "en": "Austrian nut cake",
                  "es": "Austrian nut cake",
                  "de": "Austrian nut cake",
                  "nl": "Austrian nut cake"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar.",
                  "es": "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar.",
                  "de": "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar.",
                  "nl": "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar."
        }
      },
      {
        question: {
                  "en": "What is upside-down cake?",
                  "es": "What is upside-down cake?",
                  "de": "What is upside-down cake?",
                  "nl": "What is upside-down cake?"
        },
        options: [
        {
                  "en": "Cake with holes",
                  "es": "Cake with holes",
                  "de": "Cake with holes",
                  "nl": "Cake with holes"
        },
        {
                  "en": "Cake served upside down",
                  "es": "Cake served upside down",
                  "de": "Cake served upside down",
                  "nl": "Cake served upside down"
        },
        {
                  "en": "Inverted layers",
                  "es": "Inverted layers",
                  "de": "Inverted layers",
                  "nl": "Inverted layers"
        },
        {
                  "en": "Fruit on bottom, flipped when baked",
                  "es": "Fruit on bottom, flipped when baked",
                  "de": "Fruit on bottom, flipped when baked",
                  "nl": "Fruit on bottom, flipped when baked"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top.",
                  "es": "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top.",
                  "de": "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top.",
                  "nl": "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top."
        }
      },
      {
        question: {
                  "en": "What is a flourless cake made with?",
                  "es": "What is a flourless cake made with?",
                  "de": "What is a flourless cake made with?",
                  "nl": "What is a flourless cake made with?"
        },
        options: [
        {
                  "en": "Cornmeal",
                  "es": "Cornmeal",
                  "de": "Cornmeal",
                  "nl": "Cornmeal"
        },
        {
                  "en": "Ground nuts or chocolate",
                  "es": "Ground nuts or chocolate",
                  "de": "Ground nuts or chocolate",
                  "nl": "Ground nuts or chocolate"
        },
        {
                  "en": "Potato starch",
                  "es": "Potato starch",
                  "de": "Potato starch",
                  "nl": "Potato starch"
        },
        {
                  "en": "Rice flour",
                  "es": "Rice flour",
                  "de": "Rice flour",
                  "nl": "Rice flour"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour.",
                  "es": "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour.",
                  "de": "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour.",
                  "nl": "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour."
        }
      },
      {
        question: {
                  "en": "What is Battenberg cake?",
                  "es": "What is Battenberg cake?",
                  "de": "What is Battenberg cake?",
                  "nl": "What is Battenberg cake?"
        },
        options: [
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        },
        {
                  "en": "Pink and yellow checkered cake",
                  "es": "Pink and yellow checkered cake",
                  "de": "Pink and yellow checkered cake",
                  "nl": "Pink and yellow checkered cake"
        },
        {
                  "en": "Sponge roll",
                  "es": "Sponge roll",
                  "de": "Sponge roll",
                  "nl": "Sponge roll"
        },
        {
                  "en": "Chocolate layer cake",
                  "es": "Chocolate layer cake",
                  "de": "Chocolate layer cake",
                  "nl": "Chocolate layer cake"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan.",
                  "es": "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan.",
                  "de": "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan.",
                  "nl": "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan."
        }
      },
      {
        question: {
                  "en": "What is a sheet cake?",
                  "es": "What is a sheet cake?",
                  "de": "What is a sheet cake?",
                  "nl": "What is a sheet cake?"
        },
        options: [
        {
                  "en": "Layered cake",
                  "es": "Layered cake",
                  "de": "Layered cake",
                  "nl": "Layered cake"
        },
        {
                  "en": "Individual cake",
                  "es": "Individual cake",
                  "de": "Individual cake",
                  "nl": "Individual cake"
        },
        {
                  "en": "Flat cake baked in a sheet pan",
                  "es": "Flat cake baked in a sheet pan",
                  "de": "Flat cake baked in a sheet pan",
                  "nl": "Flat cake baked in a sheet pan"
        },
        {
                  "en": "Ring-shaped cake",
                  "es": "Ring-shaped cake",
                  "de": "Ring-shaped cake",
                  "nl": "Ring-shaped cake"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan.",
                  "es": "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan.",
                  "de": "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan.",
                  "nl": "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan."
        }
      },
      {
        question: {
                  "en": "What is the difference between cake and torte?",
                  "es": "What is the difference between cake and torte?",
                  "de": "What is the difference between cake and torte?",
                  "nl": "What is the difference between cake and torte?"
        },
        options: [
        {
                  "en": "No difference",
                  "es": "No difference",
                  "de": "No difference",
                  "nl": "No difference"
        },
        {
                  "en": "Torte uses less flour, more eggs/nuts",
                  "es": "Torte uses less flour, more eggs/nuts",
                  "de": "Torte uses less flour, more eggs/nuts",
                  "nl": "Torte uses less flour, more eggs/nuts"
        },
        {
                  "en": "Torte has frosting",
                  "es": "Torte has frosting",
                  "de": "Torte has frosting",
                  "nl": "Torte has frosting"
        },
        {
                  "en": "Cake is denser",
                  "es": "Cake is denser",
                  "de": "Cake is denser",
                  "nl": "Cake is denser"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes.",
                  "es": "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes.",
                  "de": "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes.",
                  "nl": "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes."
        }
      },
      {
        question: {
                  "en": "What is opera cake?",
                  "es": "What is opera cake?",
                  "de": "What is opera cake?",
                  "nl": "What is opera cake?"
        },
        options: [
        {
                  "en": "German chocolate cake",
                  "es": "German chocolate cake",
                  "de": "German chocolate cake",
                  "nl": "German chocolate cake"
        },
        {
                  "en": "French almond sponge with coffee buttercream",
                  "es": "French almond sponge with coffee buttercream",
                  "de": "French almond sponge with coffee buttercream",
                  "nl": "French almond sponge with coffee buttercream"
        },
        {
                  "en": "Austrian apple cake",
                  "es": "Austrian apple cake",
                  "de": "Austrian apple cake",
                  "nl": "Austrian apple cake"
        },
        {
                  "en": "Italian cream cake",
                  "es": "Italian cream cake",
                  "de": "Italian cream cake",
                  "nl": "Italian cream cake"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache.",
                  "es": "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache.",
                  "de": "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache.",
                  "nl": "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache."
        }
      },
      {
        question: {
                  "en": "What is devil's food cake?",
                  "es": "What is devil's food cake?",
                  "de": "What is devil's food cake?",
                  "nl": "What is devil's food cake?"
        },
        options: [
        {
                  "en": "Dark fruit cake",
                  "es": "Dark fruit cake",
                  "de": "Dark fruit cake",
                  "nl": "Dark fruit cake"
        },
        {
                  "en": "Rich chocolate cake",
                  "es": "Rich chocolate cake",
                  "de": "Rich chocolate cake",
                  "nl": "Rich chocolate cake"
        },
        {
                  "en": "Spicy cake",
                  "es": "Spicy cake",
                  "de": "Spicy cake",
                  "nl": "Spicy cake"
        },
        {
                  "en": "Red cake",
                  "es": "Red cake",
                  "de": "Red cake",
                  "nl": "Red cake"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake.",
                  "es": "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake.",
                  "de": "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake.",
                  "nl": "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake."
        }
      },
      {
        question: {
                  "en": "What is a marble cake?",
                  "es": "What is a marble cake?",
                  "de": "What is a marble cake?",
                  "nl": "What is a marble cake?"
        },
        options: [
        {
                  "en": "Vanilla and chocolate swirled together",
                  "es": "Vanilla and chocolate swirled together",
                  "de": "Vanilla and chocolate swirled together",
                  "nl": "Vanilla and chocolate swirled together"
        },
        {
                  "en": "Glazed cake",
                  "es": "Glazed cake",
                  "de": "Glazed cake",
                  "nl": "Glazed cake"
        },
        {
                  "en": "Layered cake",
                  "es": "Layered cake",
                  "de": "Layered cake",
                  "nl": "Layered cake"
        },
        {
                  "en": "Cake with nuts",
                  "es": "Cake with nuts",
                  "de": "Cake with nuts",
                  "nl": "Cake with nuts"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern.",
                  "es": "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern.",
                  "de": "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern.",
                  "nl": "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern."
        }
      },
      {
        question: {
                  "en": "What is a dump cake?",
                  "es": "What is a dump cake?",
                  "de": "What is a dump cake?",
                  "nl": "What is a dump cake?"
        },
        options: [
        {
                  "en": "Layered cake",
                  "es": "Layered cake",
                  "de": "Layered cake",
                  "nl": "Layered cake"
        },
        {
                  "en": "Failed cake",
                  "es": "Failed cake",
                  "de": "Failed cake",
                  "nl": "Failed cake"
        },
        {
                  "en": "Cake made by dumping ingredients in pan",
                  "es": "Cake made by dumping ingredients in pan",
                  "de": "Cake made by dumping ingredients in pan",
                  "nl": "Cake made by dumping ingredients in pan"
        },
        {
                  "en": "Upside down cake",
                  "es": "Upside down cake",
                  "de": "Upside down cake",
                  "nl": "Upside down cake"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter.",
                  "es": "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter.",
                  "de": "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter.",
                  "nl": "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter."
        }
      },
      {
        question: {
                  "en": "What is Baumkuchen?",
                  "es": "What is Baumkuchen?",
                  "de": "What is Baumkuchen?",
                  "nl": "What is Baumkuchen?"
        },
        options: [
        {
                  "en": "Austrian chocolate cake",
                  "es": "Austrian chocolate cake",
                  "de": "Austrian chocolate cake",
                  "nl": "Austrian chocolate cake"
        },
        {
                  "en": "French sponge cake",
                  "es": "French sponge cake",
                  "de": "French sponge cake",
                  "nl": "French sponge cake"
        },
        {
                  "en": "German tree ring cake",
                  "es": "German tree ring cake",
                  "de": "German tree ring cake",
                  "nl": "German tree ring cake"
        },
        {
                  "en": "Italian nut cake",
                  "es": "Italian nut cake",
                  "de": "Italian nut cake",
                  "nl": "Italian nut cake"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced.",
                  "es": "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced.",
                  "de": "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced.",
                  "nl": "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced."
        }
      },
      {
        question: {
                  "en": "What is the purpose of creaming butter and sugar?",
                  "es": "What is the purpose of creaming butter and sugar?",
                  "de": "What is the purpose of creaming butter and sugar?",
                  "nl": "What is the purpose of creaming butter and sugar?"
        },
        options: [
        {
                  "en": "Melt butter",
                  "es": "Melt butter",
                  "de": "Melt butter",
                  "nl": "Melt butter"
        },
        {
                  "en": "Incorporate air for lightness",
                  "es": "Incorporate air for lightness",
                  "de": "Incorporate air for lightness",
                  "nl": "Incorporate air for lightness"
        },
        {
                  "en": "Add flavor",
                  "es": "Add flavor",
                  "de": "Add flavor",
                  "nl": "Add flavor"
        },
        {
                  "en": "Dissolve sugar",
                  "es": "Dissolve sugar",
                  "de": "Dissolve sugar",
                  "nl": "Dissolve sugar"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture.",
                  "es": "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture.",
                  "de": "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture.",
                  "nl": "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8Data;
  }
})();