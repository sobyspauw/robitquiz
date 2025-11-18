// Chocolate Desserts Quiz - Level 1: Beginner
(function() {
  const level1 = {
    name: {
      en: "Chocolate Desserts - Beginner",
      es: "Postres de Chocolate - Principiante",
      de: "Schokoladendesserts - Anfänger",
      nl: "Chocoladedesserts - Beginner"
    },
    questions: [
      {
        question: {
          en: "What color is milk chocolate?",
          es: "¿De qué color es el chocolate con leche?",
          de: "Welche Farbe hat Milchschokolade?",
          nl: "Welke kleur heeft melkchocolade?"
        },
        options: [
          { en: "Light brown", es: "Marrón claro", de: "Hellbraun", nl: "Lichtbruin" },
          { en: "Dark black", es: "Negro oscuro", de: "Tiefschwarz", nl: "Donkerzwart" },
          { en: "White", es: "Blanco", de: "Weiß", nl: "Wit" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" }
        ],
        correct: 0,
        explanation: {
          en: "Milk chocolate is light brown in color due to the addition of milk powder or condensed milk to the cocoa.",
          es: "El chocolate con leche es de color marrón claro debido a la adición de leche en polvo o leche condensada al cacao.",
          de: "Milchschokolade ist hellbraun durch die Zugabe von Milchpulver oder Kondensmilch zum Kakao.",
          nl: "Melkchocolade is lichtbruin van kleur door de toevoeging van melkpoeder of gecondenseerde melk aan de cacao."
        }
      },
      {
        question: {
          en: "What is chocolate made from?",
          es: "¿De qué está hecho el chocolate?",
          de: "Woraus wird Schokolade hergestellt?",
          nl: "Waar wordt chocolade van gemaakt?"
        },
        options: [
          { en: "Coffee beans", es: "Granos de café", de: "Kaffeebohnen", nl: "Koffiebonen" },
          { en: "Cocoa beans", es: "Granos de cacao", de: "Kakaobohnen", nl: "Cacaobonen" },
          { en: "Vanilla beans", es: "Vainas de vainilla", de: "Vanilleschoten", nl: "Vanillestokjes" },
          { en: "Peanuts", es: "Cacahuetes", de: "Erdnüsse", nl: "Pinda's" }
        ],
        correct: 1,
        explanation: {
          en: "Chocolate is made from cocoa beans, which grow on cacao trees in tropical regions.",
          es: "El chocolate se hace de granos de cacao, que crecen en árboles de cacao en regiones tropicales.",
          de: "Schokolade wird aus Kakaobohnen hergestellt, die auf Kakaobäumen in tropischen Regionen wachsen.",
          nl: "Chocolade wordt gemaakt van cacaobonen, die groeien aan cacaobomen in tropische gebieden."
        }
      },
      {
        question: {
          en: "What is a brownie?",
          es: "¿Qué es un brownie?",
          de: "Was ist ein Brownie?",
          nl: "Wat is een brownie?"
        },
        options: [
          { en: "A chocolate drink", es: "Una bebida de chocolate", de: "Ein Schokoladengetränk", nl: "Een chocoladedrank" },
          { en: "A square chocolate cake", es: "Un pastel de chocolate cuadrado", de: "Ein quadratischer Schokoladenkuchen", nl: "Een vierkante chocoladecake" },
          { en: "Chocolate ice cream", es: "Helado de chocolate", de: "Schokoladeneis", nl: "Chocolade-ijs" },
          { en: "A chocolate bar", es: "Una barra de chocolate", de: "Ein Schokoladenriegel", nl: "Een chocoladereep" }
        ],
        correct: 1,
        explanation: {
          en: "A brownie is a square or rectangular chocolate baked dessert, dense and fudgy in texture.",
          es: "Un brownie es un postre horneado de chocolate cuadrado o rectangular, denso y con textura fudge.",
          de: "Ein Brownie ist ein quadratisches oder rechteckiges gebackenes Schokoladendessert mit dichter, fudgeartiger Textur.",
          nl: "Een brownie is een vierkant of rechthoekig gebakken chocoladedessert, dicht en fudgy van textuur."
        }
      },
      {
        question: {
          en: "What temperature is chocolate at room temperature?",
          es: "¿En qué estado está el chocolate a temperatura ambiente?",
          de: "In welchem Zustand ist Schokolade bei Raumtemperatur?",
          nl: "In welke vorm is chocolade bij kamertemperatuur?"
        },
        options: [
          { en: "Liquid", es: "Líquido", de: "Flüssig", nl: "Vloeibaar" },
          { en: "Solid", es: "Sólido", de: "Fest", nl: "Vast" },
          { en: "Gas", es: "Gas", de: "Gasförmig", nl: "Gas" },
          { en: "Frozen", es: "Congelado", de: "Gefroren", nl: "Bevroren" }
        ],
        correct: 1,
        explanation: {
          en: "At room temperature, chocolate is solid. It melts when heated above 30-32°C (86-90°F).",
          es: "A temperatura ambiente, el chocolate es sólido. Se derrite cuando se calienta por encima de 30-32°C.",
          de: "Bei Raumtemperatur ist Schokolade fest. Sie schmilzt bei Erwärmung über 30-32°C.",
          nl: "Bij kamertemperatuur is chocolade vast. Het smelt bij verhitting boven 30-32°C."
        }
      },
      {
        question: {
          en: "Which type of chocolate is the sweetest?",
          es: "¿Qué tipo de chocolate es el más dulce?",
          de: "Welche Schokoladensorte ist die süßeste?",
          nl: "Welk type chocolade is het zoetst?"
        },
        options: [
          { en: "Dark chocolate", es: "Chocolate negro", de: "Dunkle Schokolade", nl: "Pure chocolade" },
          { en: "Milk chocolate", es: "Chocolate con leche", de: "Milchschokolade", nl: "Melkchocolade" },
          { en: "White chocolate", es: "Chocolate blanco", de: "Weiße Schokolade", nl: "Witte chocolade" },
          { en: "Unsweetened chocolate", es: "Chocolate sin azúcar", de: "Ungesüßte Schokolade", nl: "Ongezoete chocolade" }
        ],
        correct: 2,
        explanation: {
          en: "White chocolate is typically the sweetest as it contains no cocoa solids, only cocoa butter, milk, and sugar.",
          es: "El chocolate blanco es típicamente el más dulce ya que no contiene sólidos de cacao, solo manteca de cacao, leche y azúcar.",
          de: "Weiße Schokolade ist typischerweise die süßeste, da sie keine Kakaofeststoffe enthält, nur Kakaobutter, Milch und Zucker.",
          nl: "Witte chocolade is meestal het zoetst omdat het geen cacaobestanddelen bevat, alleen cacaoboter, melk en suiker."
        }
      },
      {
        question: {
          en: "What is hot chocolate?",
          es: "¿Qué es el chocolate caliente?",
          de: "Was ist heiße Schokolade?",
          nl: "Wat is warme chocolademelk?"
        },
        options: [
          { en: "A warm chocolate drink", es: "Una bebida caliente de chocolate", de: "Ein warmes Schokoladengetränk", nl: "Een warme chocoladedrank" },
          { en: "Melted chocolate bar", es: "Barra de chocolate derretida", de: "Geschmolzener Schokoladenriegel", nl: "Gesmolten chocoladereep" },
          { en: "Chocolate soup", es: "Sopa de chocolate", de: "Schokoladensuppe", nl: "Chocoladesoep" },
          { en: "Chocolate tea", es: "Té de chocolate", de: "Schokoladentee", nl: "Chocoladethee" }
        ],
        correct: 0,
        explanation: {
          en: "Hot chocolate is a warm beverage made from chocolate or cocoa powder mixed with hot milk or water.",
          es: "El chocolate caliente es una bebida tibia hecha de chocolate o cacao en polvo mezclado con leche caliente o agua.",
          de: "Heiße Schokolade ist ein warmes Getränk aus Schokolade oder Kakaopulver gemischt mit heißer Milch oder Wasser.",
          nl: "Warme chocolademelk is een warme drank gemaakt van chocolade of cacaopoeder gemengd met warme melk of water."
        }
      },
      {
        question: {
          en: "What shape are chocolate chips?",
          es: "¿Qué forma tienen las chispas de chocolate?",
          de: "Welche Form haben Schokoladenchips?",
          nl: "Welke vorm hebben chocoladeschilfers?"
        },
        options: [
          { en: "Squares", es: "Cuadrados", de: "Quadrate", nl: "Vierkanten" },
          { en: "Teardrops", es: "Lágrimas", de: "Tropfen", nl: "Druppelvorm" },
          { en: "Stars", es: "Estrellas", de: "Sterne", nl: "Sterren" },
          { en: "Circles", es: "Círculos", de: "Kreise", nl: "Cirkels" }
        ],
        correct: 1,
        explanation: {
          en: "Chocolate chips are typically shaped like teardrops or small drops, designed to hold their shape when baked.",
          es: "Las chispas de chocolate típicamente tienen forma de lágrimas o pequeñas gotas, diseñadas para mantener su forma al hornear.",
          de: "Schokoladenchips sind typischerweise tropfenförmig, um beim Backen ihre Form zu behalten.",
          nl: "Chocoladeschilfers hebben meestal een druppelvorm, ontworpen om hun vorm te behouden tijdens het bakken."
        }
      },
      {
        question: {
          en: "What is chocolate pudding?",
          es: "¿Qué es el pudín de chocolate?",
          de: "Was ist Schokoladenpudding?",
          nl: "Wat is chocoladepudding?"
        },
        options: [
          { en: "A creamy dessert", es: "Un postre cremoso", de: "Ein cremiges Dessert", nl: "Een romig dessert" },
          { en: "A chocolate bar", es: "Una barra de chocolate", de: "Ein Schokoladenriegel", nl: "Een chocoladereep" },
          { en: "Chocolate bread", es: "Pan de chocolate", de: "Schokoladenbrot", nl: "Chocoladebrood" },
          { en: "Chocolate sauce", es: "Salsa de chocolate", de: "Schokoladensauce", nl: "Chocoladesaus" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate pudding is a creamy, smooth dessert made with milk, sugar, chocolate and a thickener.",
          es: "El pudín de chocolate es un postre cremoso y suave hecho con leche, azúcar, chocolate y un espesante.",
          de: "Schokoladenpudding ist ein cremiges, glattes Dessert aus Milch, Zucker, Schokolade und einem Verdickungsmittel.",
          nl: "Chocoladepudding is een romig, glad dessert gemaakt met melk, suiker, chocolade en een verdikkingsmiddel."
        }
      },
      {
        question: {
          en: "What is chocolate ice cream?",
          es: "¿Qué es el helado de chocolate?",
          de: "Was ist Schokoladeneis?",
          nl: "Wat is chocolade-ijs?"
        },
        options: [
          { en: "Frozen chocolate milk", es: "Leche de chocolate congelada", de: "Gefrorene Schokoladenmilch", nl: "Bevroren chocolademelk" },
          { en: "Chocolate on ice", es: "Chocolate sobre hielo", de: "Schokolade auf Eis", nl: "Chocolade op ijs" },
          { en: "Frozen dessert with chocolate flavor", es: "Postre congelado con sabor a chocolate", de: "Gefrorenes Dessert mit Schokoladengeschmack", nl: "Bevroren dessert met chocoladesmaak" },
          { en: "Cold chocolate bar", es: "Barra de chocolate fría", de: "Kalter Schokoladenriegel", nl: "Koude chocoladereep" }
        ],
        correct: 2,
        explanation: {
          en: "Chocolate ice cream is a frozen dessert made with cream, sugar, and chocolate or cocoa powder.",
          es: "El helado de chocolate es un postre congelado hecho con crema, azúcar y chocolate o cacao en polvo.",
          de: "Schokoladeneis ist ein gefrorenes Dessert aus Sahne, Zucker und Schokolade oder Kakaopulver.",
          nl: "Chocolade-ijs is een bevroren dessert gemaakt met room, suiker en chocolade of cacaopoeder."
        }
      },
      {
        question: {
          en: "What do you dip in chocolate fondue?",
          es: "¿Qué se sumerge en fondue de chocolate?",
          de: "Was taucht man in Schokoladenfondue?",
          nl: "Wat dip je in chocoladefondue?"
        },
        options: [
          { en: "Vegetables", es: "Verduras", de: "Gemüse", nl: "Groenten" },
          { en: "Meat", es: "Carne", de: "Fleisch", nl: "Vlees" },
          { en: "Fruit and marshmallows", es: "Fruta y malvaviscos", de: "Obst und Marshmallows", nl: "Fruit en marshmallows" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" }
        ],
        correct: 2,
        explanation: {
          en: "Chocolate fondue is typically enjoyed with fruits like strawberries and marshmallows for dipping.",
          es: "La fondue de chocolate se disfruta típicamente con frutas como fresas y malvaviscos para mojar.",
          de: "Schokoladenfondue wird typischerweise mit Früchten wie Erdbeeren und Marshmallows zum Eintauchen genossen.",
          nl: "Chocoladefondue wordt meestal genoten met fruit zoals aardbeien en marshmallows om te dippen."
        }
      },
      {
        question: {
          en: "What is the main ingredient in chocolate mousse?",
          es: "¿Cuál es el ingrediente principal en la mousse de chocolate?",
          de: "Was ist die Hauptzutat in Schokoladenmousse?",
          nl: "Wat is het hoofdingrediënt in chocolademousse?"
        },
        options: [
          { en: "Flour", es: "Harina", de: "Mehl", nl: "Meel" },
          { en: "Cheese", es: "Queso", de: "Käse", nl: "Kaas" },
          { en: "Chocolate", es: "Chocolate", de: "Schokolade", nl: "Chocolade" },
          { en: "Rice", es: "Arroz", de: "Reis", nl: "Rijst" }
        ],
        correct: 2,
        explanation: {
          en: "Chocolate is the main ingredient in chocolate mousse, whipped with eggs and cream for a light texture.",
          es: "El chocolate es el ingrediente principal en la mousse de chocolate, batido con huevos y crema para una textura ligera.",
          de: "Schokolade ist die Hauptzutat in Schokoladenmousse, aufgeschlagen mit Eiern und Sahne für eine leichte Textur.",
          nl: "Chocolade is het hoofdingrediënt in chocolademousse, opgeklopt met eieren en room voor een luchtige textuur."
        }
      },
      {
        question: {
          en: "Which country is famous for Swiss chocolate?",
          es: "¿Qué país es famoso por el chocolate suizo?",
          de: "Welches Land ist berühmt für Schweizer Schokolade?",
          nl: "Welk land is beroemd om Zwitserse chocolade?"
        },
        options: [
          { en: "Sweden", es: "Suecia", de: "Schweden", nl: "Zweden" },
          { en: "Switzerland", es: "Suiza", de: "Schweiz", nl: "Zwitserland" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "Scotland", es: "Escocia", de: "Schottland", nl: "Schotland" }
        ],
        correct: 1,
        explanation: {
          en: "Switzerland is famous for Swiss chocolate, known worldwide for its high quality and smooth texture.",
          es: "Suiza es famosa por el chocolate suizo, conocido mundialmente por su alta calidad y textura suave.",
          de: "Die Schweiz ist berühmt für Schweizer Schokolade, weltweit bekannt für ihre hohe Qualität und glatte Textur.",
          nl: "Zwitserland is beroemd om Zwitserse chocolade, wereldwijd bekend om zijn hoge kwaliteit en gladde textuur."
        }
      },
      {
        question: {
          en: "What color is dark chocolate?",
          es: "¿De qué color es el chocolate negro?",
          de: "Welche Farbe hat dunkle Schokolade?",
          nl: "Welke kleur heeft pure chocolade?"
        },
        options: [
          { en: "Light brown", es: "Marrón claro", de: "Hellbraun", nl: "Lichtbruin" },
          { en: "White", es: "Blanco", de: "Weiß", nl: "Wit" },
          { en: "Dark brown to black", es: "Marrón oscuro a negro", de: "Dunkelbraun bis schwarz", nl: "Donkerbruin tot zwart" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" }
        ],
        correct: 2,
        explanation: {
          en: "Dark chocolate is dark brown to almost black in color due to its high cocoa content.",
          es: "El chocolate negro es de color marrón oscuro a casi negro debido a su alto contenido de cacao.",
          de: "Dunkle Schokolade ist dunkelbraun bis fast schwarz aufgrund ihres hohen Kakaogehalts.",
          nl: "Pure chocolade is donkerbruin tot bijna zwart van kleur door het hoge cacaogehalte."
        }
      },
      {
        question: {
          en: "What is a chocolate truffle shaped like?",
          es: "¿Qué forma tiene una trufa de chocolate?",
          de: "Welche Form hat eine Schokoladentrüffel?",
          nl: "Welke vorm heeft een chocoladetruffel?"
        },
        options: [
          { en: "Square", es: "Cuadrado", de: "Quadratisch", nl: "Vierkant" },
          { en: "Triangle", es: "Triángulo", de: "Dreieck", nl: "Driehoek" },
          { en: "Round ball", es: "Bola redonda", de: "Runde Kugel", nl: "Ronde bal" },
          { en: "Star", es: "Estrella", de: "Stern", nl: "Ster" }
        ],
        correct: 2,
        explanation: {
          en: "Chocolate truffles are typically shaped like small round balls, resembling the truffle mushroom.",
          es: "Las trufas de chocolate típicamente tienen forma de pequeñas bolas redondas, pareciéndose al hongo trufa.",
          de: "Schokoladentrüffel sind typischerweise wie kleine runde Kugeln geformt, die dem Trüffelpilz ähneln.",
          nl: "Chocoladetruffels hebben meestal de vorm van kleine ronde balletjes, lijkend op de truffelschimmel."
        }
      },
      {
        question: {
          en: "When do people usually eat chocolate desserts?",
          es: "¿Cuándo come la gente usualmente postres de chocolate?",
          de: "Wann essen Menschen normalerweise Schokoladendesserts?",
          nl: "Wanneer eten mensen meestal chocoladedesserts?"
        },
        options: [
          { en: "For breakfast", es: "Para el desayuno", de: "Zum Frühstück", nl: "Voor het ontbijt" },
          { en: "After dinner", es: "Después de la cena", de: "Nach dem Abendessen", nl: "Na het diner" },
          { en: "Before exercise", es: "Antes del ejercicio", de: "Vor dem Sport", nl: "Voor het sporten" },
          { en: "During work", es: "Durante el trabajo", de: "Während der Arbeit", nl: "Tijdens het werk" }
        ],
        correct: 1,
        explanation: {
          en: "Chocolate desserts are typically enjoyed after dinner as a sweet ending to a meal.",
          es: "Los postres de chocolate se disfrutan típicamente después de la cena como un final dulce de una comida.",
          de: "Schokoladendesserts werden typischerweise nach dem Abendessen als süßer Abschluss einer Mahlzeit genossen.",
          nl: "Chocoladedesserts worden meestal na het diner genoten als zoete afsluiting van een maaltijd."
        }
      },
      {
        question: {
          en: "What is white chocolate missing compared to other chocolates?",
          es: "¿Qué le falta al chocolate blanco comparado con otros chocolates?",
          de: "Was fehlt weißer Schokolade im Vergleich zu anderen Schokoladen?",
          nl: "Wat mist witte chocolade vergeleken met andere chocolade?"
        },
        options: [
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
          { en: "Cocoa solids", es: "Sólidos de cacao", de: "Kakaofeststoffe", nl: "Cacaobestanddelen" },
          { en: "Cocoa butter", es: "Manteca de cacao", de: "Kakaobutter", nl: "Cacaoboter" }
        ],
        correct: 2,
        explanation: {
          en: "White chocolate contains no cocoa solids, only cocoa butter, which is why it's white instead of brown.",
          es: "El chocolate blanco no contiene sólidos de cacao, solo manteca de cacao, por eso es blanco en lugar de marrón.",
          de: "Weiße Schokolade enthält keine Kakaofeststoffe, nur Kakaobutter, deshalb ist sie weiß statt braun.",
          nl: "Witte chocolade bevat geen cacaobestanddelen, alleen cacaoboter, daarom is het wit in plaats van bruin."
        }
      },
      {
        question: {
          en: "What is a chocolate chip cookie?",
          es: "¿Qué es una galleta con chispas de chocolate?",
          de: "Was ist ein Chocolate Chip Cookie?",
          nl: "Wat is een chocolate chip cookie?"
        },
        options: [
          { en: "A cookie with chocolate pieces", es: "Una galleta con trozos de chocolate", de: "Ein Keks mit Schokoladenstückchen", nl: "Een koekje met chocoladestukjes" },
          { en: "A chocolate bar", es: "Una barra de chocolate", de: "Ein Schokoladenriegel", nl: "Een chocoladereep" },
          { en: "Chocolate bread", es: "Pan de chocolate", de: "Schokoladenbrot", nl: "Chocoladebrood" },
          { en: "A chocolate drink", es: "Una bebida de chocolate", de: "Ein Schokoladengetränk", nl: "Een chocoladedrank" }
        ],
        correct: 0,
        explanation: {
          en: "A chocolate chip cookie is a drop cookie with chocolate chips as a key ingredient.",
          es: "Una galleta con chispas de chocolate es una galleta con trozos de chocolate como ingrediente clave.",
          de: "Ein Chocolate Chip Cookie ist ein Keks mit Schokoladenstückchen als Hauptzutat.",
          nl: "Een chocolate chip cookie is een koekje met chocoladestukjes als belangrijk ingrediënt."
        }
      },
      {
        question: {
          en: "What happens to chocolate when it gets too warm?",
          es: "¿Qué le pasa al chocolate cuando hace demasiado calor?",
          de: "Was passiert mit Schokolade, wenn es zu warm wird?",
          nl: "Wat gebeurt er met chocolade als het te warm wordt?"
        },
        options: [
          { en: "It freezes", es: "Se congela", de: "Sie gefriert", nl: "Het bevriest" },
          { en: "It melts", es: "Se derrite", de: "Sie schmilzt", nl: "Het smelt" },
          { en: "It turns green", es: "Se vuelve verde", de: "Sie wird grün", nl: "Het wordt groen" },
          { en: "It becomes harder", es: "Se vuelve más duro", de: "Sie wird härter", nl: "Het wordt harder" }
        ],
        correct: 1,
        explanation: {
          en: "Chocolate melts when it gets warm, typically starting around 30°C (86°F).",
          es: "El chocolate se derrite cuando hace calor, típicamente comenzando alrededor de 30°C.",
          de: "Schokolade schmilzt bei Wärme, typischerweise ab etwa 30°C.",
          nl: "Chocolade smelt als het warm wordt, meestal vanaf ongeveer 30°C."
        }
      },
      {
        question: {
          en: "Which holiday features chocolate eggs?",
          es: "¿Qué festividad presenta huevos de chocolate?",
          de: "Welcher Feiertag hat Schokoladeneier?",
          nl: "Welke feestdag heeft chocolade-eieren?"
        },
        options: [
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Easter", es: "Pascua", de: "Ostern", nl: "Pasen" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" },
          { en: "New Year", es: "Año Nuevo", de: "Neujahr", nl: "Nieuwjaar" }
        ],
        correct: 1,
        explanation: {
          en: "Easter is celebrated with chocolate eggs, symbolizing new life and spring.",
          es: "La Pascua se celebra con huevos de chocolate, simbolizando nueva vida y primavera.",
          de: "Ostern wird mit Schokoladeneiern gefeiert, die neues Leben und Frühling symbolisieren.",
          nl: "Pasen wordt gevierd met chocolade-eieren, die nieuw leven en de lente symboliseren."
        }
      },
      {
        question: {
          en: "What is chocolate cake?",
          es: "¿Qué es un pastel de chocolate?",
          de: "Was ist ein Schokoladenkuchen?",
          nl: "Wat is een chocoladecake?"
        },
        options: [
          { en: "A drink made with chocolate", es: "Una bebida hecha con chocolate", de: "Ein Getränk aus Schokolade", nl: "Een drank gemaakt met chocolade" },
          { en: "Ice cream with chocolate", es: "Helado con chocolate", de: "Eis mit Schokolade", nl: "IJs met chocolade" },
          { en: "A baked dessert made with chocolate", es: "Un postre horneado hecho con chocolate", de: "Ein gebackenes Dessert aus Schokolade", nl: "Een gebakken dessert gemaakt met chocolade" },
          { en: "Chocolate candy", es: "Dulce de chocolate", de: "Schokoladenbonbon", nl: "Chocoladesnoep" }
        ],
        correct: 2,
        explanation: {
          en: "Chocolate cake is a baked dessert made with chocolate or cocoa powder as a main flavoring.",
          es: "El pastel de chocolate es un postre horneado hecho con chocolate o cacao en polvo como sabor principal.",
          de: "Schokoladenkuchen ist ein gebackenes Dessert mit Schokolade oder Kakaopulver als Hauptgeschmack.",
          nl: "Chocoladecake is een gebakken dessert gemaakt met chocolade of cacaopoeder als hoofdsmaak."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else {
    window.chocolateDessertsLevel1 = level1;
  }
})();