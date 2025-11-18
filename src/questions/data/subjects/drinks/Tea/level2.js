// Quiz Level 2: Drinken - Thee - Tea Types & Origins
(function() {
  const level2 = {
    name: {
      en: "Tea Types & Origins",
      es: "Tipos y Orígenes del Té",
      de: "Teetypen und Ursprünge",
      nl: "Theetypes & Oorsprong"
    },
    questions: [
      {
        question: {
          en: "What is the difference between orange pekoe and pekoe tea grades?",
          es: "¿Cuál es la diferencia entre los grados de té orange pekoe y pekoe?",
          de: "Was ist der Unterschied zwischen Orange Pekoe und Pekoe Teequalitäten?",
          nl: "Wat is het verschil tussen orange pekoe en pekoe theegraden?"
        },
        options: [
          { en: "Orange pekoe has orange flavoring", es: "Orange pekoe tiene sabor a naranja", de: "Orange Pekoe hat Orangengeschmack", nl: "Orange pekoe heeft sinaasappelsmaak" },
          { en: "Orange pekoe has longer leaves", es: "Orange pekoe tiene hojas más largas", de: "Orange Pekoe hat längere Blätter", nl: "Orange pekoe heeft langere bladeren" },
          { en: "Orange pekoe is a color grade", es: "Orange pekoe es un grado de color", de: "Orange Pekoe ist eine Farbqualität", nl: "Orange pekoe is een kleurgraad" },
          { en: "No difference, same grade", es: "Sin diferencia, mismo grado", de: "Kein Unterschied, gleiche Qualität", nl: "Geen verschil, zelfde graad" }
        ],
        correct: 1,
        explanation: {
          en: "Orange Pekoe (OP) has longer leaf grades than Pekoe (P), indicating higher quality and larger leaf pieces.",
          es: "Orange Pekoe (OP) tiene grados de hojas más largos que Pekoe (P), indicando mayor calidad y piezas de hojas más grandes.",
          de: "Orange Pekoe (OP) hat längere Blattgrade als Pekoe (P), was höhere Qualität und größere Blattstücke anzeigt.",
          nl: "Orange Pekoe (OP) heeft langere bladgraden dan Pekoe (P), wat hogere kwaliteit en grotere bladstukken aangeeft."
        }
      },
      {
        question: {
          en: "Which region is famous for Darjeeling tea?",
          es: "¿Qué región es famosa por el té Darjeeling?",
          de: "Welche Region ist berühmt für Darjeeling-Tee?",
          nl: "Welke regio staat bekend om Darjeeling thee?"
        },
        options: [
          { en: "Sri Lanka", es: "Sri Lanka", de: "Sri Lanka", nl: "Sri Lanka" },
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" }
        ],
        correct: 2,
        explanation: {
          en: "Darjeeling tea comes from the Darjeeling district in West Bengal, India, known for its distinctive muscatel flavor.",
          es: "El té Darjeeling proviene del distrito de Darjeeling en Bengala Occidental, India, conocido por su distintivo sabor moscatel.",
          de: "Darjeeling-Tee stammt aus dem Darjeeling-Distrikt in Westbengalen, Indien, bekannt für seinen charakteristischen Muskateller-Geschmack.",
          nl: "Darjeeling thee komt uit het Darjeeling district in West-Bengalen, India, bekend om zijn kenmerkende muskaat smaak."
        }
      },
      {
        question: {
          en: "What makes oolong tea unique among tea types?",
          es: "¿Qué hace único al té oolong entre los tipos de té?",
          de: "Was macht Oolong-Tee unter den Teetypen einzigartig?",
          nl: "Wat maakt oolong thee uniek onder de theetypes?"
        },
        options: [
          { en: "It's fully fermented", es: "Está completamente fermentado", de: "Es ist vollständig fermentiert", nl: "Het is volledig gefermenteerd" },
          { en: "It's partially oxidized", es: "Está parcialmente oxidado", de: "Es ist teilweise oxidiert", nl: "Het is gedeeltelijk geoxideerd" },
          { en: "It's never oxidized", es: "Nunca se oxida", de: "Es wird nie oxidiert", nl: "Het wordt nooit geoxideerd" },
          { en: "It's smoked", es: "Está ahumado", de: "Es ist geräuchert", nl: "Het is gerookt" }
        ],
        correct: 1,
        explanation: {
          en: "Oolong tea is partially oxidized (20-80%), making it between green and black tea in processing and flavor.",
          es: "El té oolong está parcialmente oxidado (20-80%), ubicándose entre el té verde y negro en procesamiento y sabor.",
          de: "Oolong-Tee ist teilweise oxidiert (20-80%), was ihn in Verarbeitung und Geschmack zwischen grünem und schwarzem Tee einordnet.",
          nl: "Oolong thee is gedeeltelijk geoxideerd (20-80%), waardoor het tussen groene en zwarte thee ligt in verwerking en smaak."
        }
      },
      {
        question: {
          en: "What does 'SFTGFOP' indicate on tea packaging?",
          es: "¿Qué indica 'SFTGFOP' en el empaque del té?",
          de: "Was bedeutet 'SFTGFOP' auf Teeverpackungen?",
          nl: "Wat geeft 'SFTGFOP' aan op theeverpakkingen?"
        },
        options: [
          { en: "A brewing instruction", es: "Una instrucción de preparación", de: "Eine Brühanweisung", nl: "Een zetinstructie" },
          { en: "A leaf grade classification", es: "Una clasificación de grado de hoja", de: "Eine Blattgrad-Klassifizierung", nl: "Een bladgraad classificatie" },
          { en: "A flavor profile", es: "Un perfil de sabor", de: "Ein Geschmacksprofil", nl: "Een smaakprofiel" },
          { en: "An expiration code", es: "Un código de caducidad", de: "Ein Verfallscode", nl: "Een vervaldatum code" }
        ],
        correct: 1,
        explanation: {
          en: "SFTGFOP stands for 'Super Fine Tippy Golden Flowery Orange Pekoe', indicating the highest grade of whole leaf tea.",
          es: "SFTGFOP significa 'Super Fine Tippy Golden Flowery Orange Pekoe', indicando el grado más alto de té de hoja entera.",
          de: "SFTGFOP steht für 'Super Fine Tippy Golden Flowery Orange Pekoe', was die höchste Qualität von ganzen Blatt-Tee anzeigt.",
          nl: "SFTGFOP staat voor 'Super Fine Tippy Golden Flowery Orange Pekoe', wat de hoogste graad van hele bladthee aangeeft."
        }
      },
      {
        question: {
          en: "Which tea is known as the 'champagne of teas'?",
          es: "¿Qué té es conocido como el 'champán de los tés'?",
          de: "Welcher Tee ist als 'Champagner der Tees' bekannt?",
          nl: "Welke thee staat bekend als de 'champagne van de theeën'?"
        },
        options: [
          { en: "Earl Grey", es: "Earl Grey", de: "Earl Grey", nl: "Earl Grey" },
          { en: "Darjeeling first flush", es: "Darjeeling primera cosecha", de: "Darjeeling First Flush", nl: "Darjeeling eerste oogst" },
          { en: "Ceylon Pekoe", es: "Ceylon Pekoe", de: "Ceylon Pekoe", nl: "Ceylon Pekoe" },
          { en: "Assam FTGFOP", es: "Assam FTGFOP", de: "Assam FTGFOP", nl: "Assam FTGFOP" }
        ],
        correct: 1,
        explanation: {
          en: "Darjeeling first flush is called the 'champagne of teas' due to its delicate, light, and complex flavor profile.",
          es: "El Darjeeling primera cosecha se llama el 'champán de los tés' debido a su perfil de sabor delicado, ligero y complejo.",
          de: "Darjeeling First Flush wird 'Champagner der Tees' genannt wegen seines delikaten, leichten und komplexen Geschmacksprofils.",
          nl: "Darjeeling eerste oogst wordt de 'champagne van de theeën' genoemd vanwege zijn delicate, lichte en complexe smaakprofiel."
        }
      },
      {
        question: {
          en: "What country is the largest producer of tea in the world?",
          es: "¿Qué país es el mayor productor de té del mundo?",
          de: "Welches Land ist der größte Teeproduzent der Welt?",
          nl: "Welk land is de grootste theeproducent ter wereld?"
        },
        options: [
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "Kenya", es: "Kenia", de: "Kenia", nl: "Kenia" },
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "Sri Lanka", es: "Sri Lanka", de: "Sri Lanka", nl: "Sri Lanka" }
        ],
        correct: 2,
        explanation: {
          en: "China is the world's largest tea producer, producing over 2.4 million tons annually and home to numerous tea varieties.",
          es: "China es el mayor productor de té del mundo, produciendo más de 2.4 millones de toneladas anuales y hogar de numerosas variedades de té.",
          de: "China ist der weltgrößte Teeproduzent mit über 2,4 Millionen Tonnen jährlich und Heimat zahlreicher Teesorten.",
          nl: "China is 's werelds grootste theeproducent en produceert jaarlijks meer dan 2,4 miljoen ton en heeft talloze theesoorten."
        }
      },
      {
        question: {
          en: "What type of tea is Lapsang Souchong?",
          es: "¿Qué tipo de té es Lapsang Souchong?",
          de: "Welche Art Tee ist Lapsang Souchong?",
          nl: "Wat voor soort thee is Lapsang Souchong?"
        },
        options: [
          { en: "Green tea", es: "Té verde", de: "Grüner Tee", nl: "Groene thee" },
          { en: "White tea", es: "Té blanco", de: "Weißer Tee", nl: "Witte thee" },
          { en: "Smoked black tea", es: "Té negro ahumado", de: "Geräucherter schwarzer Tee", nl: "Gerookte zwarte thee" },
          { en: "Pu-erh tea", es: "Té Pu-erh", de: "Pu-erh Tee", nl: "Pu-erh thee" }
        ],
        correct: 2,
        explanation: {
          en: "Lapsang Souchong is a smoked black tea from China's Fujian province, dried over pinewood fires giving it a distinctive smoky flavor.",
          es: "Lapsang Souchong es un té negro ahumado de la provincia Fujian de China, secado sobre fuegos de pino que le dan un sabor ahumado distintivo.",
          de: "Lapsang Souchong ist ein geräucherter schwarzer Tee aus Chinas Fujian-Provinz, über Pinienholzfeuern getrocknet mit charakteristischem Rauchgeschmack.",
          nl: "Lapsang Souchong is een gerookte zwarte thee uit de Chinese provincie Fujian, gedroogd boven dennenhout vuren wat een kenmerkende rokerige smaak geeft."
        }
      },
      {
        question: {
          en: "What is the primary difference between Ceylon and Assam tea?",
          es: "¿Cuál es la diferencia principal entre el té Ceylon y Assam?",
          de: "Was ist der Hauptunterschied zwischen Ceylon- und Assam-Tee?",
          nl: "Wat is het belangrijkste verschil tussen Ceylon en Assam thee?"
        },
        options: [
          { en: "Ceylon is lighter and brighter, Assam is malty and robust", es: "Ceylon es más ligero y brillante, Assam es malteado y robusto", de: "Ceylon ist leichter und heller, Assam ist malzig und kräftig", nl: "Ceylon is lichter en helderder, Assam is moutig en robuust" },
          { en: "Ceylon is green, Assam is black", es: "Ceylon es verde, Assam es negro", de: "Ceylon ist grün, Assam ist schwarz", nl: "Ceylon is groen, Assam is zwart" },
          { en: "Ceylon is fermented, Assam is not", es: "Ceylon está fermentado, Assam no", de: "Ceylon ist fermentiert, Assam nicht", nl: "Ceylon is gefermenteerd, Assam niet" },
          { en: "No difference, same origin", es: "Sin diferencia, mismo origen", de: "Kein Unterschied, gleiche Herkunft", nl: "Geen verschil, zelfde oorsprong" }
        ],
        correct: 0,
        explanation: {
          en: "Ceylon tea from Sri Lanka is known for its bright, crisp flavor, while Assam tea from India is malty, robust, and often used in breakfast blends.",
          es: "El té Ceylon de Sri Lanka es conocido por su sabor brillante y fresco, mientras que el té Assam de India es malteado, robusto y a menudo usado en mezclas de desayuno.",
          de: "Ceylon-Tee aus Sri Lanka ist bekannt für seinen hellen, frischen Geschmack, während Assam-Tee aus Indien malzig, kräftig ist und oft in Frühstücksmischungen verwendet wird.",
          nl: "Ceylon thee uit Sri Lanka staat bekend om zijn heldere, frisse smaak, terwijl Assam thee uit India moutig en robuust is en vaak in ontbijtmengsels wordt gebruikt."
        }
      },
      {
        question: {
          en: "What makes white tea different from other tea types?",
          es: "¿Qué hace diferente al té blanco de otros tipos de té?",
          de: "Was macht weißen Tee anders als andere Teetypen?",
          nl: "Wat maakt witte thee anders dan andere theetypes?"
        },
        options: [
          { en: "It's heavily oxidized", es: "Está muy oxidado", de: "Es ist stark oxidiert", nl: "Het is sterk geoxideerd" },
          { en: "It uses only young buds and minimal processing", es: "Usa solo brotes jóvenes y procesamiento mínimo", de: "Es verwendet nur junge Knospen und minimale Verarbeitung", nl: "Het gebruikt alleen jonge knoppen en minimale verwerking" },
          { en: "It's bleached white", es: "Está blanqueado", de: "Es ist weiß gebleicht", nl: "Het is wit gebleekt" },
          { en: "It's mixed with milk", es: "Está mezclado con leche", de: "Es ist mit Milch gemischt", nl: "Het is gemengd met melk" }
        ],
        correct: 1,
        explanation: {
          en: "White tea is the least processed tea, made from young buds and leaves that are simply withered and dried, preserving delicate flavors.",
          es: "El té blanco es el té menos procesado, hecho de brotes y hojas jóvenes que simplemente se marchitan y secan, preservando sabores delicados.",
          de: "Weißer Tee ist der am wenigsten verarbeitete Tee, aus jungen Knospen und Blättern gemacht, die einfach welken und trocknen, wodurch delikate Aromen erhalten bleiben.",
          nl: "Witte thee is de minst verwerkte thee, gemaakt van jonge knoppen en bladeren die simpelweg verwelkt en gedroogd worden, waardoor delicate smaken behouden blijven."
        }
      },
      {
        question: {
          en: "Which Japanese tea is traditionally used in tea ceremonies?",
          es: "¿Qué té japonés se usa tradicionalmente en ceremonias de té?",
          de: "Welcher japanische Tee wird traditionell in Teezeremonien verwendet?",
          nl: "Welke Japanse thee wordt traditioneel gebruikt in theeceremoniën?"
        },
        options: [
          { en: "Sencha", es: "Sencha", de: "Sencha", nl: "Sencha" },
          { en: "Matcha", es: "Matcha", de: "Matcha", nl: "Matcha" },
          { en: "Genmaicha", es: "Genmaicha", de: "Genmaicha", nl: "Genmaicha" },
          { en: "Hojicha", es: "Hojicha", de: "Hojicha", nl: "Hojicha" }
        ],
        correct: 1,
        explanation: {
          en: "Matcha, a powdered green tea, is the traditional tea used in Japanese tea ceremonies (chanoyu), whisked with hot water to create a frothy beverage.",
          es: "Matcha, un té verde en polvo, es el té tradicional usado en ceremonias de té japonesas (chanoyu), batido con agua caliente para crear una bebida espumosa.",
          de: "Matcha, ein pulverisierter grüner Tee, ist der traditionelle Tee in japanischen Teezeremonien (chanoyu), mit heißem Wasser aufgeschlagen zu einem schaumigen Getränk.",
          nl: "Matcha, een gepoederde groene thee, is de traditionele thee in Japanse theeceremoniën (chanoyu), geklopt met heet water tot een schuimig drankje."
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
