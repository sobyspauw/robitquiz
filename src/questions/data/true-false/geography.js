// True/False Questions - Geography (Easy-Medium)
// Countries, capitals, landmarks, natural wonders
(function() {

  const geographyQuestions = [
    {
      id: 'geo_1',
      question: {
        en: "The capital of Australia is Sydney.",
        es: "La capital de Australia es Sídney.",
        de: "Die Hauptstadt von Australien ist Sydney.",
        nl: "De hoofdstad van Australië is Sydney."
      },
      isTrue: false,
      explanation: {
        en: "The capital of Australia is Canberra, not Sydney. Sydney is the largest city, but Canberra was purpose-built as the capital.",
        es: "La capital de Australia es Canberra, no Sídney. Sídney es la ciudad más grande, pero Canberra fue construida específicamente como capital.",
        de: "Die Hauptstadt von Australien ist Canberra, nicht Sydney. Sydney ist die größte Stadt, aber Canberra wurde speziell als Hauptstadt gebaut.",
        nl: "De hoofdstad van Australië is Canberra, niet Sydney. Sydney is de grootste stad, maar Canberra werd speciaal als hoofdstad gebouwd."
      }
    },
    {
      id: 'geo_2',
      question: {
        en: "The Nile River flows from south to north.",
        es: "El río Nilo fluye de sur a norte.",
        de: "Der Nil fließt von Süden nach Norden.",
        nl: "De Nijl stroomt van zuid naar noord."
      },
      isTrue: true,
      explanation: {
        en: "The Nile is one of the few major rivers that flows northward. It starts in East Africa and flows north to the Mediterranean Sea, which is unusual as most rivers flow south.",
        es: "El Nilo es uno de los pocos ríos importantes que fluye hacia el norte. Comienza en África Oriental y fluye hacia el norte hasta el Mar Mediterráneo, lo cual es inusual ya que la mayoría de los ríos fluyen hacia el sur.",
        de: "Der Nil ist einer der wenigen großen Flüsse, die nach Norden fließen. Er beginnt in Ostafrika und fließt nach Norden zum Mittelmeer, was ungewöhnlich ist, da die meisten Flüsse nach Süden fließen.",
        nl: "De Nijl is een van de weinige grote rivieren die noordwaarts stroomt. Hij begint in Oost-Afrika en stroomt noordwaarts naar de Middellandse Zee, wat ongebruikelijk is aangezien de meeste rivieren zuidwaarts stromen."
      }
    },
    {
      id: 'geo_3',
      question: {
        en: "Mount Everest is located in Nepal and China.",
        es: "El Monte Everest está ubicado en Nepal y China.",
        de: "Der Mount Everest liegt in Nepal und China.",
        nl: "De Mount Everest ligt in Nepal en China."
      },
      isTrue: true,
      explanation: {
        en: "Mount Everest straddles the border between Nepal and China (Tibet), with the summit on the border.",
        es: "El Monte Everest se encuentra en la frontera entre Nepal y China (Tíbet), con la cumbre en la frontera.",
        de: "Der Mount Everest liegt an der Grenze zwischen Nepal und China (Tibet), mit dem Gipfel an der Grenze.",
        nl: "De Mount Everest ligt op de grens tussen Nepal en China (Tibet), met de top op de grens."
      }
    },
    {
      id: 'geo_4',
      question: {
        en: "Africa is the largest continent by area.",
        es: "África es el continente más grande por área.",
        de: "Afrika ist der größte Kontinent nach Fläche.",
        nl: "Afrika is het grootste continent qua oppervlakte."
      },
      isTrue: false,
      explanation: {
        en: "Asia is the largest continent by area, covering about 44.58 million km². Africa is the second largest.",
        es: "Asia es el continente más grande por área, cubriendo aproximadamente 44.58 millones de km². África es el segundo más grande.",
        de: "Asien ist der größte Kontinent nach Fläche und umfasst etwa 44,58 Millionen km². Afrika ist der zweitgrößte.",
        nl: "Azië is het grootste continent qua oppervlakte, met ongeveer 44,58 miljoen km². Afrika is de tweede grootste."
      }
    },
    {
      id: 'geo_5',
      question: {
        en: "The Dead Sea is the lowest point on Earth's surface.",
        es: "El Mar Muerto es el punto más bajo en la superficie de la Tierra.",
        de: "Das Tote Meer ist der tiefste Punkt auf der Erdoberfläche.",
        nl: "De Dode Zee is het laagste punt op het aardoppervlak."
      },
      isTrue: true,
      explanation: {
        en: "The Dead Sea shore is about 430 meters below sea level, making it the lowest point on Earth's land surface.",
        es: "La orilla del Mar Muerto está a unos 430 metros bajo el nivel del mar, lo que la convierte en el punto más bajo en la superficie terrestre de la Tierra.",
        de: "Das Ufer des Toten Meeres liegt etwa 430 Meter unter dem Meeresspiegel und ist damit der tiefste Punkt auf der Landoberfläche der Erde.",
        nl: "De kust van de Dode Zee ligt ongeveer 430 meter onder zeeniveau, waardoor het het laagste punt op het landoppervlak van de aarde is."
      }
    },
    {
      id: 'geo_6',
      question: {
        en: "Brazil is the only Portuguese-speaking country in South America.",
        es: "Brasil es el único país de habla portuguesa en América del Sur.",
        de: "Brasilien ist das einzige portugiesischsprachige Land in Südamerika.",
        nl: "Brazilië is het enige Portugeessprekende land in Zuid-Amerika."
      },
      isTrue: true,
      explanation: {
        en: "Brazil is indeed the only country in South America where Portuguese is the official language. All other countries speak Spanish or other languages.",
        es: "Brasil es de hecho el único país en América del Sur donde el portugués es el idioma oficial. Todos los demás países hablan español u otros idiomas.",
        de: "Brasilien ist tatsächlich das einzige Land in Südamerika, in dem Portugiesisch die Amtssprache ist. Alle anderen Länder sprechen Spanisch oder andere Sprachen.",
        nl: "Brazilië is inderdaad het enige land in Zuid-Amerika waar Portugees de officiële taal is. Alle andere landen spreken Spaans of andere talen."
      }
    },
    {
      id: 'geo_7',
      question: {
        en: "The Sahara Desert is expanding southward due to climate change.",
        es: "El desierto del Sahara se está expandiendo hacia el sur debido al cambio climático.",
        de: "Die Sahara-Wüste expandiert aufgrund des Klimawandels nach Süden.",
        nl: "De Sahara-woestijn breidt zich zuidwaarts uit door klimaatverandering."
      },
      isTrue: true,
      explanation: {
        en: "The Sahara has been expanding southward by about 10% since 1920, threatening the Sahel region.",
        es: "El Sahara se ha expandido hacia el sur aproximadamente un 10% desde 1920, amenazando la región del Sahel.",
        de: "Die Sahara hat sich seit 1920 um etwa 10% nach Süden ausgedehnt und bedroht die Sahelzone.",
        nl: "De Sahara is sinds 1920 ongeveer 10% zuidwaarts uitgebreid, wat de Sahel-regio bedreigt."
      }
    },
    {
      id: 'geo_8',
      question: {
        en: "Iceland is covered in ice year-round.",
        es: "Islandia está cubierta de hielo todo el año.",
        de: "Island ist das ganze Jahr über mit Eis bedeckt.",
        nl: "IJsland is het hele jaar bedekt met ijs."
      },
      isTrue: false,
      explanation: {
        en: "Despite its name, Iceland is not covered in ice year-round. It has a temperate climate and only about 11% is covered by glaciers.",
        es: "A pesar de su nombre, Islandia no está cubierta de hielo todo el año. Tiene un clima templado y solo alrededor del 11% está cubierto por glaciares.",
        de: "Trotz seines Namens ist Island nicht das ganze Jahr über mit Eis bedeckt. Es hat ein gemäßigtes Klima und nur etwa 11% sind von Gletschern bedeckt.",
        nl: "Ondanks de naam is IJsland niet het hele jaar bedekt met ijs. Het heeft een gematigd klimaat en slechts ongeveer 11% is bedekt met gletsjers."
      }
    },
    {
      id: 'geo_9',
      question: {
        en: "The Amazon Rainforest produces 20% of the world's oxygen.",
        es: "La selva amazónica produce el 20% del oxígeno del mundo.",
        de: "Der Amazonas-Regenwald produziert 20% des weltweiten Sauerstoffs.",
        nl: "Het Amazoneregenwoud produceert 20% van de zuurstof van de wereld."
      },
      isTrue: true,
      explanation: {
        en: "The Amazon Rainforest is often called the 'lungs of the Earth' and produces approximately 20% of the world's oxygen.",
        es: "La selva amazónica a menudo se llama los 'pulmones de la Tierra' y produce aproximadamente el 20% del oxígeno del mundo.",
        de: "Der Amazonas-Regenwald wird oft als 'Lunge der Erde' bezeichnet und produziert etwa 20% des weltweiten Sauerstoffs.",
        nl: "Het Amazoneregenwoud wordt vaak de 'longen van de aarde' genoemd en produceert ongeveer 20% van de zuurstof van de wereld."
      }
    },
    {
      id: 'geo_10',
      question: {
        en: "Russia spans 11 time zones.",
        es: "Rusia abarca 11 zonas horarias.",
        de: "Russland erstreckt sich über 11 Zeitzonen.",
        nl: "Rusland beslaat 11 tijdzones."
      },
      isTrue: true,
      explanation: {
        en: "Russia spans 11 time zones, from UTC+2 to UTC+12, the most of any country in the world. This means when it's noon in Moscow, it's 9 PM in Kamchatka.",
        es: "Rusia abarca 11 zonas horarias, desde UTC+2 hasta UTC+12, más que cualquier otro país del mundo. Esto significa que cuando es mediodía en Moscú, son las 9 PM en Kamchatka.",
        de: "Russland erstreckt sich über 11 Zeitzonen von UTC+2 bis UTC+12, die meisten aller Länder der Welt. Das bedeutet, wenn es in Moskau Mittag ist, ist es in Kamtschatka 21 Uhr.",
        nl: "Rusland beslaat 11 tijdzones, van UTC+2 tot UTC+12, het meeste van alle landen ter wereld. Dit betekent dat wanneer het 12 uur 's middags is in Moskou, het 21 uur is in Kamtsjatka."
      }
    },
    {
      id: 'geo_11',
      question: {
        en: "The Great Barrier Reef is visible from space.",
        es: "La Gran Barrera de Coral es visible desde el espacio.",
        de: "Das Great Barrier Reef ist aus dem Weltraum sichtbar.",
        nl: "Het Great Barrier Reef is zichtbaar vanuit de ruimte."
      },
      isTrue: true,
      explanation: {
        en: "The Great Barrier Reef, the world's largest coral reef system, is indeed visible from space and is one of the few living structures visible from orbit.",
        es: "La Gran Barrera de Coral, el sistema de arrecifes de coral más grande del mundo, es de hecho visible desde el espacio y es una de las pocas estructuras vivas visibles desde la órbita.",
        de: "Das Great Barrier Reef, das größte Korallenriffsystem der Welt, ist tatsächlich aus dem Weltraum sichtbar und eine der wenigen lebenden Strukturen, die aus dem Orbit sichtbar sind.",
        nl: "Het Great Barrier Reef, 's werelds grootste koraalriffsysteem, is inderdaad zichtbaar vanuit de ruimte en is een van de weinige levende structuren die vanuit een baan om de aarde zichtbaar zijn."
      }
    },
    {
      id: 'geo_12',
      question: {
        en: "The Pacific Ocean is larger than all of Earth's land area combined.",
        es: "El Océano Pacífico es más grande que toda el área terrestre de la Tierra combinada.",
        de: "Der Pazifische Ozean ist größer als die gesamte Landfläche der Erde zusammen.",
        nl: "De Stille Oceaan is groter dan al het landoppervlak van de aarde samen."
      },
      isTrue: true,
      explanation: {
        en: "The Pacific Ocean covers approximately 165 million km², which is larger than all of Earth's land area combined (about 149 million km²).",
        es: "El Océano Pacífico cubre aproximadamente 165 millones de km², que es más grande que toda el área terrestre de la Tierra combinada (alrededor de 149 millones de km²).",
        de: "Der Pazifische Ozean erstreckt sich über etwa 165 Millionen km², was größer ist als die gesamte Landfläche der Erde zusammen (etwa 149 Millionen km²).",
        nl: "De Stille Oceaan beslaat ongeveer 165 miljoen km², wat groter is dan al het landoppervlak van de aarde samen (ongeveer 149 miljoen km²)."
      }
    },
    {
      id: 'geo_13',
      question: {
        en: "Monaco is smaller than Vatican City.",
        es: "Mónaco es más pequeño que la Ciudad del Vaticano.",
        de: "Monaco ist kleiner als die Vatikanstadt.",
        nl: "Monaco is kleiner dan Vaticaanstad."
      },
      isTrue: false,
      explanation: {
        en: "Vatican City (0.44 km²) is smaller than Monaco (2.02 km²). Vatican City is the smallest, followed by Monaco as the second smallest country.",
        es: "La Ciudad del Vaticano (0.44 km²) es más pequeña que Mónaco (2.02 km²). El Vaticano es el más pequeño, seguido de Mónaco como el segundo país más pequeño.",
        de: "Die Vatikanstadt (0,44 km²) ist kleiner als Monaco (2,02 km²). Die Vatikanstadt ist das kleinste, Monaco das zweitkleinste Land.",
        nl: "Vaticaanstad (0,44 km²) is kleiner dan Monaco (2,02 km²). Vaticaanstad is het kleinste, Monaco het op een na kleinste land."
      }
    },
    {
      id: 'geo_14',
      question: {
        en: "The Eiffel Tower was originally painted red.",
        es: "La Torre Eiffel fue originalmente pintada de rojo.",
        de: "Der Eiffelturm wurde ursprünglich rot gestrichen.",
        nl: "De Eiffeltoren was oorspronkelijk rood geschilderd."
      },
      isTrue: true,
      explanation: {
        en: "When first built in 1889, the Eiffel Tower was painted red-brown. It has been repainted many times and is now officially 'Eiffel Tower Brown'.",
        es: "Cuando se construyó en 1889, la Torre Eiffel fue pintada de rojo-marrón. Ha sido repintada muchas veces y ahora es oficialmente 'marrón Torre Eiffel'.",
        de: "Bei ihrer Erbauung 1889 wurde der Eiffelturm rotbraun gestrichen. Er wurde viele Male neu gestrichen und ist jetzt offiziell 'Eiffelturm-Braun'.",
        nl: "Toen de Eiffeltoren in 1889 werd gebouwd, was hij roodbruin geschilderd. Hij is vele malen opnieuw geschilderd en is nu officieel 'Eiffeltoren-bruin'."
      }
    },
    {
      id: 'geo_15',
      question: {
        en: "New Zealand has more sheep than people.",
        es: "Nueva Zelanda tiene más ovejas que personas.",
        de: "Neuseeland hat mehr Schafe als Menschen.",
        nl: "Nieuw-Zeeland heeft meer schapen dan mensen."
      },
      isTrue: true,
      explanation: {
        en: "New Zealand has approximately 6 sheep for every person, making it true that there are more sheep than people.",
        es: "Nueva Zelanda tiene aproximadamente 6 ovejas por cada persona, por lo que es cierto que hay más ovejas que personas.",
        de: "Neuseeland hat etwa 6 Schafe pro Person, sodass es tatsächlich mehr Schafe als Menschen gibt.",
        nl: "Nieuw-Zeeland heeft ongeveer 6 schapen per persoon, waardoor het klopt dat er meer schapen dan mensen zijn."
      }
    },
    {
      id: 'geo_16',
      question: {
        en: "The Statue of Liberty was a gift from England.",
        es: "La Estatua de la Libertad fue un regalo de Inglaterra.",
        de: "Die Freiheitsstatue war ein Geschenk aus England.",
        nl: "Het Vrijheidsbeeld was een cadeau van Engeland."
      },
      isTrue: false,
      explanation: {
        en: "The Statue of Liberty was a gift from France, not England, given to the United States in 1886.",
        es: "La Estatua de la Libertad fue un regalo de Francia, no de Inglaterra, dado a los Estados Unidos en 1886.",
        de: "Die Freiheitsstatue war ein Geschenk aus Frankreich, nicht aus England, das 1886 an die Vereinigten Staaten übergeben wurde.",
        nl: "Het Vrijheidsbeeld was een cadeau van Frankrijk, niet van Engeland, gegeven aan de Verenigde Staten in 1886."
      }
    },
    {
      id: 'geo_17',
      question: {
        en: "Canada has the longest coastline in the world.",
        es: "Canadá tiene la costa más larga del mundo.",
        de: "Kanada hat die längste Küstenlinie der Welt.",
        nl: "Canada heeft de langste kustlijn ter wereld."
      },
      isTrue: true,
      explanation: {
        en: "Canada has the world's longest coastline, stretching approximately 202,080 kilometers.",
        es: "Canadá tiene la costa más larga del mundo, extendiéndose aproximadamente 202,080 kilómetros.",
        de: "Kanada hat die längste Küstenlinie der Welt und erstreckt sich über etwa 202.080 Kilometer.",
        nl: "Canada heeft 's werelds langste kustlijn, die zich uitstrekt over ongeveer 202.080 kilometer."
      }
    },
    {
      id: 'geo_18',
      question: {
        en: "The Equator passes through Mexico.",
        es: "El Ecuador pasa por México.",
        de: "Der Äquator verläuft durch Mexiko.",
        nl: "De evenaar loopt door Mexico."
      },
      isTrue: false,
      explanation: {
        en: "The Equator does not pass through Mexico. It passes through countries like Ecuador, Colombia, Brazil, and several African and Asian nations.",
        es: "El Ecuador no pasa por México. Pasa por países como Ecuador, Colombia, Brasil y varias naciones africanas y asiáticas.",
        de: "Der Äquator verläuft nicht durch Mexiko. Er verläuft durch Länder wie Ecuador, Kolumbien, Brasilien und mehrere afrikanische und asiatische Nationen.",
        nl: "De evenaar loopt niet door Mexico. Het loopt door landen zoals Ecuador, Colombia, Brazilië en verschillende Afrikaanse en Aziatische landen."
      }
    },
    {
      id: 'geo_19',
      question: {
        en: "Lake Baikal in Russia is the world's deepest lake.",
        es: "El lago Baikal en Rusia es el lago más profundo del mundo.",
        de: "Der Baikalsee in Russland ist der tiefste See der Welt.",
        nl: "Het Baikalmeer in Rusland is het diepste meer ter wereld."
      },
      isTrue: true,
      explanation: {
        en: "Lake Baikal in Siberia, Russia, is the world's deepest lake at 1,642 meters and contains about 20% of the world's fresh water.",
        es: "El lago Baikal en Siberia, Rusia, es el lago más profundo del mundo con 1,642 metros y contiene alrededor del 20% del agua dulce del mundo.",
        de: "Der Baikalsee in Sibirien, Russland, ist mit 1.642 Metern der tiefste See der Welt und enthält etwa 20% des weltweiten Süßwassers.",
        nl: "Het Baikalmeer in Siberië, Rusland, is 's werelds diepste meer met 1.642 meter en bevat ongeveer 20% van het zoetwater van de wereld."
      }
    },
    {
      id: 'geo_20',
      question: {
        en: "The Alps mountain range is located only in Switzerland.",
        es: "La cordillera de los Alpes está ubicada solo en Suiza.",
        de: "Die Alpen befinden sich nur in der Schweiz.",
        nl: "De Alpen liggen alleen in Zwitserland."
      },
      isTrue: false,
      explanation: {
        en: "The Alps extend across 8 countries: Austria, France, Germany, Italy, Liechtenstein, Monaco, Slovenia, and Switzerland.",
        es: "Los Alpes se extienden por 8 países: Austria, Francia, Alemania, Italia, Liechtenstein, Mónaco, Eslovenia y Suiza.",
        de: "Die Alpen erstrecken sich über 8 Länder: Österreich, Frankreich, Deutschland, Italien, Liechtenstein, Monaco, Slowenien und die Schweiz.",
        nl: "De Alpen strekken zich uit over 8 landen: Oostenrijk, Frankrijk, Duitsland, Italië, Liechtenstein, Monaco, Slovenië en Zwitserland."
      }
    },
    {
      id: 'geo_21',
      question: {
        en: "Tokyo is the most populous city in the world.",
        es: "Tokio es la ciudad más poblada del mundo.",
        de: "Tokio ist die bevölkerungsreichste Stadt der Welt.",
        nl: "Tokio is de dichtstbevolkte stad ter wereld."
      },
      isTrue: true,
      explanation: {
        en: "Tokyo, Japan, has the largest metropolitan population in the world with over 37 million people in its greater urban area.",
        es: "Tokio, Japón, tiene la mayor población metropolitana del mundo con más de 37 millones de personas en su área urbana mayor.",
        de: "Tokio, Japan, hat die größte Metropolbevölkerung der Welt mit über 37 Millionen Menschen in seinem größeren Stadtgebiet.",
        nl: "Tokio, Japan, heeft de grootste metropolitane bevolking ter wereld met meer dan 37 miljoen mensen in zijn grotere stedelijk gebied."
      }
    },
    {
      id: 'geo_22',
      question: {
        en: "The Taj Mahal is located in Pakistan.",
        es: "El Taj Mahal está ubicado en Pakistán.",
        de: "Das Taj Mahal befindet sich in Pakistan.",
        nl: "De Taj Mahal ligt in Pakistan."
      },
      isTrue: false,
      explanation: {
        en: "The Taj Mahal is located in Agra, India, not Pakistan. It was built in the 17th century as a mausoleum.",
        es: "El Taj Mahal está ubicado en Agra, India, no en Pakistán. Fue construido en el siglo XVII como mausoleo.",
        de: "Das Taj Mahal befindet sich in Agra, Indien, nicht in Pakistan. Es wurde im 17. Jahrhundert als Mausoleum erbaut.",
        nl: "De Taj Mahal ligt in Agra, India, niet in Pakistan. Het werd in de 17e eeuw gebouwd als mausoleum."
      }
    },
    {
      id: 'geo_23',
      question: {
        en: "The Mediterranean Sea connects to the Atlantic Ocean.",
        es: "El Mar Mediterráneo se conecta con el Océano Atlántico.",
        de: "Das Mittelmeer ist mit dem Atlantischen Ozean verbunden.",
        nl: "De Middellandse Zee is verbonden met de Atlantische Oceaan."
      },
      isTrue: true,
      explanation: {
        en: "The Mediterranean Sea connects to the Atlantic Ocean through the Strait of Gibraltar.",
        es: "El Mar Mediterráneo se conecta con el Océano Atlántico a través del Estrecho de Gibraltar.",
        de: "Das Mittelmeer ist über die Straße von Gibraltar mit dem Atlantischen Ozean verbunden.",
        nl: "De Middellandse Zee is via de Straat van Gibraltar verbonden met de Atlantische Oceaan."
      }
    },
    {
      id: 'geo_24',
      question: {
        en: "Greenland is larger than Australia.",
        es: "Groenlandia es más grande que Australia.",
        de: "Grönland ist größer als Australien.",
        nl: "Groenland is groter dan Australië."
      },
      isTrue: false,
      explanation: {
        en: "Australia is much larger than Greenland. Australia is about 7.7 million km² while Greenland is about 2.2 million km². Map projections often make Greenland appear larger.",
        es: "Australia es mucho más grande que Groenlandia. Australia tiene alrededor de 7.7 millones de km² mientras que Groenlandia tiene alrededor de 2.2 millones de km². Las proyecciones de mapas a menudo hacen que Groenlandia parezca más grande.",
        de: "Australien ist viel größer als Grönland. Australien ist etwa 7,7 Millionen km² groß, während Grönland etwa 2,2 Millionen km² groß ist. Kartenprojektionen lassen Grönland oft größer erscheinen.",
        nl: "Australië is veel groter dan Groenland. Australië is ongeveer 7,7 miljoen km² terwijl Groenland ongeveer 2,2 miljoen km² is. Kaartprojecties laten Groenland vaak groter lijken."
      }
    },
    {
      id: 'geo_25',
      question: {
        en: "The Grand Canyon is located in Arizona, USA.",
        es: "El Gran Cañón está ubicado en Arizona, EE.UU.",
        de: "Der Grand Canyon befindet sich in Arizona, USA.",
        nl: "De Grand Canyon ligt in Arizona, VS."
      },
      isTrue: true,
      explanation: {
        en: "The Grand Canyon is indeed located in Arizona, USA. It's a UNESCO World Heritage Site and one of the most visited natural wonders.",
        es: "El Gran Cañón está efectivamente ubicado en Arizona, EE.UU. Es un Sitio del Patrimonio Mundial de la UNESCO y una de las maravillas naturales más visitadas.",
        de: "Der Grand Canyon befindet sich tatsächlich in Arizona, USA. Er ist UNESCO-Weltkulturerbe und eines der meistbesuchten Naturwunder.",
        nl: "De Grand Canyon ligt inderdaad in Arizona, VS. Het is een UNESCO-werelderfgoed en een van de meest bezochte natuurwonderen."
      }
    },
    {
      id: 'geo_26',
      question: {
        en: "The Netherlands is below sea level.",
        es: "Los Países Bajos están por debajo del nivel del mar.",
        de: "Die Niederlande liegen unter dem Meeresspiegel.",
        nl: "Nederland ligt onder de zeespiegel."
      },
      isTrue: true,
      explanation: {
        en: "About 26% of the Netherlands is below sea level, protected by an extensive system of dikes and water management.",
        es: "Aproximadamente el 26% de los Países Bajos está por debajo del nivel del mar, protegido por un extenso sistema de diques y gestión del agua.",
        de: "Etwa 26% der Niederlande liegen unter dem Meeresspiegel, geschützt durch ein umfangreiches System von Deichen und Wassermanagement.",
        nl: "Ongeveer 26% van Nederland ligt onder de zeespiegel, beschermd door een uitgebreid systeem van dijken en waterbeheer."
      }
    },
    {
      id: 'geo_27',
      question: {
        en: "The Amazon River flows through only one country.",
        es: "El río Amazonas fluye solo por un país.",
        de: "Der Amazonas fließt nur durch ein Land.",
        nl: "De Amazone stroomt door slechts één land."
      },
      isTrue: false,
      explanation: {
        en: "The Amazon River flows through several countries including Brazil, Peru, Colombia, and others in South America.",
        es: "El río Amazonas fluye por varios países, incluyendo Brasil, Perú, Colombia y otros en América del Sur.",
        de: "Der Amazonas fließt durch mehrere Länder, darunter Brasilien, Peru, Kolumbien und andere in Südamerika.",
        nl: "De Amazone stroomt door verschillende landen, waaronder Brazilië, Peru, Colombia en andere in Zuid-Amerika."
      }
    },
    {
      id: 'geo_28',
      question: {
        en: "Antarctica is the driest continent on Earth.",
        es: "La Antártida es el continente más seco de la Tierra.",
        de: "Die Antarktis ist der trockenste Kontinent der Erde.",
        nl: "Antarctica is het droogste continent op aarde."
      },
      isTrue: true,
      explanation: {
        en: "Despite being covered in ice, Antarctica is technically a desert and the driest continent, receiving very little precipitation.",
        es: "A pesar de estar cubierta de hielo, la Antártida es técnicamente un desierto y el continente más seco, recibiendo muy poca precipitación.",
        de: "Trotz der Eisbedeckung ist die Antarktis technisch eine Wüste und der trockenste Kontinent mit sehr wenig Niederschlag.",
        nl: "Ondanks dat het bedekt is met ijs, is Antarctica technisch gezien een woestijn en het droogste continent, met zeer weinig neerslag."
      }
    },
    {
      id: 'geo_29',
      question: {
        en: "The Danube River flows through multiple European capital cities.",
        es: "El río Danubio fluye por múltiples capitales europeas.",
        de: "Die Donau fließt durch mehrere europäische Hauptstädte.",
        nl: "De Donau stroomt door meerdere Europese hoofdsteden."
      },
      isTrue: true,
      explanation: {
        en: "The Danube flows through four European capitals: Vienna (Austria), Bratislava (Slovakia), Budapest (Hungary), and Belgrade (Serbia).",
        es: "El Danubio fluye por cuatro capitales europeas: Viena, Bratislava, Budapest y Belgrado.",
        de: "Die Donau fließt durch vier europäische Hauptstädte: Wien, Bratislava, Budapest und Belgrad.",
        nl: "De Donau stroomt door vier Europese hoofdsteden: Wenen, Bratislava, Boedapest en Belgrado."
      }
    },
    {
      id: 'geo_30',
      question: {
        en: "The Andes is the longest mountain range in the world.",
        es: "Los Andes es la cordillera más larga del mundo.",
        de: "Die Anden sind die längste Gebirgskette der Welt.",
        nl: "De Andes is de langste bergketen ter wereld."
      },
      isTrue: true,
      explanation: {
        en: "The Andes mountain range in South America is approximately 7,000 km long, making it the longest continental mountain range in the world.",
        es: "La cordillera de los Andes en América del Sur tiene aproximadamente 7,000 km de largo, lo que la convierte en la cordillera continental más larga del mundo.",
        de: "Die Anden-Gebirgskette in Südamerika ist etwa 7.000 km lang und damit die längste kontinentale Gebirgskette der Welt.",
        nl: "De Andes in Zuid-Amerika is ongeveer 7.000 km lang, waardoor het de langste continentale bergketen ter wereld is."
      }
    },
    {
      id: 'geo_31',
      question: {
        en: "Singapore is both a city and a country.",
        es: "Singapur es tanto una ciudad como un país.",
        de: "Singapur ist sowohl eine Stadt als auch ein Land.",
        nl: "Singapore is zowel een stad als een land."
      },
      isTrue: true,
      explanation: {
        en: "Singapore is a city-state, meaning it is both a sovereign country and a single city.",
        es: "Singapur es una ciudad-estado, lo que significa que es tanto un país soberano como una sola ciudad.",
        de: "Singapur ist ein Stadtstaat, was bedeutet, dass es sowohl ein souveränes Land als auch eine einzelne Stadt ist.",
        nl: "Singapore is een stadstaat, wat betekent dat het zowel een soeverein land als een enkele stad is."
      }
    },
    {
      id: 'geo_32',
      question: {
        en: "The Tropic of Cancer passes through India.",
        es: "El Trópico de Cáncer pasa por India.",
        de: "Der Wendekreis des Krebses verläuft durch Indien.",
        nl: "De Kreeftskeerkring loopt door India."
      },
      isTrue: true,
      explanation: {
        en: "The Tropic of Cancer passes through India, as well as several other countries including Mexico, Egypt, and China.",
        es: "El Trópico de Cáncer pasa por India, así como por varios otros países incluyendo México, Egipto y China.",
        de: "Der Wendekreis des Krebses verläuft durch Indien sowie durch mehrere andere Länder, darunter Mexiko, Ägypten und China.",
        nl: "De Kreeftskeerkring loopt door India, evenals door verschillende andere landen waaronder Mexico, Egypte en China."
      }
    },
    {
      id: 'geo_33',
      question: {
        en: "The Colosseum is located in Athens, Greece.",
        es: "El Coliseo está ubicado en Atenas, Grecia.",
        de: "Das Kolosseum befindet sich in Athen, Griechenland.",
        nl: "Het Colosseum ligt in Athene, Griekenland."
      },
      isTrue: false,
      explanation: {
        en: "The Colosseum is located in Rome, Italy, not Athens. The Parthenon is the famous ancient structure in Athens.",
        es: "El Coliseo está ubicado en Roma, Italia, no en Atenas. El Partenón es la famosa estructura antigua en Atenas.",
        de: "Das Kolosseum befindet sich in Rom, Italien, nicht in Athen. Der Parthenon ist das berühmte antike Bauwerk in Athen.",
        nl: "Het Colosseum ligt in Rome, Italië, niet in Athene. Het Parthenon is het beroemde oude bouwwerk in Athene."
      }
    },
    {
      id: 'geo_34',
      question: {
        en: "Chile is the longest country in the world from north to south.",
        es: "Chile es el país más largo del mundo de norte a sur.",
        de: "Chile ist das längste Land der Welt von Nord nach Süd.",
        nl: "Chili is het langste land ter wereld van noord naar zuid."
      },
      isTrue: true,
      explanation: {
        en: "Chile stretches over 4,300 km from north to south, making it the longest north-south country in the world.",
        es: "Chile se extiende más de 4,300 km de norte a sur, lo que lo convierte en el país más largo de norte a sur del mundo.",
        de: "Chile erstreckt sich über 4.300 km von Nord nach Süd und ist damit das längste Nord-Süd-Land der Welt.",
        nl: "Chili strekt zich meer dan 4.300 km uit van noord naar zuid, waardoor het het langste noord-zuid land ter wereld is."
      }
    },
    {
      id: 'geo_35',
      question: {
        en: "The Dead Sea is located between Israel and Jordan.",
        es: "El Mar Muerto está ubicado entre Israel y Jordania.",
        de: "Das Tote Meer liegt zwischen Israel und Jordanien.",
        nl: "De Dode Zee ligt tussen Israël en Jordanië."
      },
      isTrue: true,
      explanation: {
        en: "The Dead Sea is a salt lake bordered by Jordan to the east and Israel to the west.",
        es: "El Mar Muerto es un lago salado bordeado por Jordania al este e Israel al oeste.",
        de: "Das Tote Meer ist ein Salzsee, der im Osten von Jordanien und im Westen von Israel begrenzt wird.",
        nl: "De Dode Zee is een zoutmeer dat aan de oostkant grenst aan Jordanië en aan de westkant aan Israël."
      }
    },
    {
      id: 'geo_36',
      question: {
        en: "Madagascar is part of the African continent.",
        es: "Madagascar es parte del continente africano.",
        de: "Madagaskar ist Teil des afrikanischen Kontinents.",
        nl: "Madagaskar maakt deel uit van het Afrikaanse continent."
      },
      isTrue: false,
      explanation: {
        en: "Madagascar is an island nation off the coast of East Africa, not part of the African continent itself, though it is often considered part of Africa geopolitically.",
        es: "Madagascar es una nación insular frente a la costa de África Oriental, no parte del continente africano en sí, aunque a menudo se considera parte de África geopolíticamente.",
        de: "Madagaskar ist ein Inselstaat vor der Ostküste Afrikas, nicht Teil des afrikanischen Kontinents selbst, obwohl es geopolitisch oft als Teil Afrikas betrachtet wird.",
        nl: "Madagaskar is een eilandnatie voor de kust van Oost-Afrika, geen deel van het Afrikaanse continent zelf, hoewel het geopolitiek vaak als deel van Afrika wordt beschouwd."
      }
    },
    {
      id: 'geo_37',
      question: {
        en: "The Panama Canal connects the Atlantic and Pacific Oceans.",
        es: "El Canal de Panamá conecta los océanos Atlántico y Pacífico.",
        de: "Der Panamakanal verbindet den Atlantischen und den Pazifischen Ozean.",
        nl: "Het Panamakanaal verbindt de Atlantische en Stille Oceaan."
      },
      isTrue: true,
      explanation: {
        en: "The Panama Canal is a 77 km waterway that connects the Atlantic Ocean with the Pacific Ocean, crossing through Panama.",
        es: "El Canal de Panamá es una vía fluvial de 77 km que conecta el Océano Atlántico con el Océano Pacífico, cruzando por Panamá.",
        de: "Der Panamakanal ist eine 77 km lange Wasserstraße, die den Atlantischen Ozean mit dem Pazifischen Ozean verbindet und durch Panama führt.",
        nl: "Het Panamakanaal is een waterweg van 77 km die de Atlantische Oceaan verbindt met de Stille Oceaan en door Panama loopt."
      }
    },
    {
      id: 'geo_38',
      question: {
        en: "The Himalayan mountain range contains all of the world's highest peaks.",
        es: "La cordillera del Himalaya contiene todos los picos más altos del mundo.",
        de: "Das Himalaya-Gebirge enthält alle höchsten Gipfel der Welt.",
        nl: "De Himalaya bevat alle hoogste bergtoppen ter wereld."
      },
      isTrue: false,
      explanation: {
        en: "While the Himalayas contain many of the world's highest peaks including Everest, K2 (the second highest) is in the Karakoram range.",
        es: "Aunque el Himalaya contiene muchos de los picos más altos del mundo, incluido el Everest, el K2 (el segundo más alto) está en la cordillera del Karakórum.",
        de: "Während der Himalaya viele der höchsten Gipfel der Welt einschließlich des Everest enthält, befindet sich der K2 (der zweithöchste) im Karakorum-Gebirge.",
        nl: "Hoewel de Himalaya veel van 's werelds hoogste bergtoppen bevat, waaronder de Everest, ligt de K2 (de op een na hoogste) in het Karakoram-gebergte."
      }
    },
    {
      id: 'geo_39',
      question: {
        en: "Dubai is the capital of the United Arab Emirates.",
        es: "Dubái es la capital de los Emiratos Árabes Unidos.",
        de: "Dubai ist die Hauptstadt der Vereinigten Arabischen Emirate.",
        nl: "Dubai is de hoofdstad van de Verenigde Arabische Emiraten."
      },
      isTrue: false,
      explanation: {
        en: "Abu Dhabi is the capital of the UAE, not Dubai. Dubai is the largest and most populous city.",
        es: "Abu Dhabi es la capital de los EAU, no Dubái. Dubái es la ciudad más grande y poblada.",
        de: "Abu Dhabi ist die Hauptstadt der VAE, nicht Dubai. Dubai ist die größte und bevölkerungsreichste Stadt.",
        nl: "Abu Dhabi is de hoofdstad van de VAE, niet Dubai. Dubai is de grootste en dichtstbevolkte stad."
      }
    },
    {
      id: 'geo_40',
      question: {
        en: "Norway has more natural fjords than any other country.",
        es: "Noruega tiene más fiordos naturales que cualquier otro país.",
        de: "Norwegen hat mehr natürliche Fjorde als jedes andere Land.",
        nl: "Noorwegen heeft meer natuurlijke fjorden dan welk ander land dan ook."
      },
      isTrue: true,
      explanation: {
        en: "Norway is famous for having the most and longest fjords in the world, with over 1,000 fjords along its coastline.",
        es: "Noruega es famosa por tener los fiordos más numerosos y largos del mundo, con más de 1,000 fiordos a lo largo de su costa.",
        de: "Norwegen ist berühmt dafür, die meisten und längsten Fjorde der Welt zu haben, mit über 1.000 Fjorden entlang seiner Küste.",
        nl: "Noorwegen staat bekend om het hebben van de meeste en langste fjorden ter wereld, met meer dan 1.000 fjorden langs de kustlijn."
      }
    },
    {
      id: 'geo_41',
      question: {
        en: "The Great Wall of China is visible from the moon.",
        es: "La Gran Muralla China es visible desde la luna.",
        de: "Die Chinesische Mauer ist vom Mond aus sichtbar.",
        nl: "De Chinese Muur is zichtbaar vanaf de maan."
      },
      isTrue: false,
      explanation: {
        en: "This is a common myth. The Great Wall of China is not visible from the moon with the naked eye.",
        es: "Este es un mito común. La Gran Muralla China no es visible desde la luna a simple vista.",
        de: "Dies ist ein weit verbreiteter Mythos. Die Chinesische Mauer ist vom Mond aus mit bloßem Auge nicht sichtbar.",
        nl: "Dit is een veelvoorkomende mythe. De Chinese Muur is niet zichtbaar vanaf de maan met het blote oog."
      }
    },
    {
      id: 'geo_42',
      question: {
        en: "The Suez Canal connects the Mediterranean Sea to the Red Sea.",
        es: "El Canal de Suez conecta el Mar Mediterráneo con el Mar Rojo.",
        de: "Der Suezkanal verbindet das Mittelmeer mit dem Roten Meer.",
        nl: "Het Suezkanaal verbindt de Middellandse Zee met de Rode Zee."
      },
      isTrue: true,
      explanation: {
        en: "The Suez Canal in Egypt connects the Mediterranean Sea to the Red Sea, providing a shipping shortcut between Europe and Asia.",
        es: "El Canal de Suez en Egipto conecta el Mar Mediterráneo con el Mar Rojo, proporcionando un atajo de navegación entre Europa y Asia.",
        de: "Der Suezkanal in Ägypten verbindet das Mittelmeer mit dem Roten Meer und bietet eine Schifffahrtsabkürzung zwischen Europa und Asien.",
        nl: "Het Suezkanaal in Egypte verbindt de Middellandse Zee met de Rode Zee en biedt een vaarroute tussen Europa en Azië."
      }
    },
    {
      id: 'geo_43',
      question: {
        en: "All deserts are hot and sandy.",
        es: "Todos los desiertos son calurosos y arenosos.",
        de: "Alle Wüsten sind heiß und sandig.",
        nl: "Alle woestijnen zijn heet en zanderig."
      },
      isTrue: false,
      explanation: {
        en: "Not all deserts are hot and sandy. Antarctica is a desert, and many deserts have rocky or icy terrain.",
        es: "No todos los desiertos son calurosos y arenosos. La Antártida es un desierto, y muchos desiertos tienen terreno rocoso o helado.",
        de: "Nicht alle Wüsten sind heiß und sandig. Die Antarktis ist eine Wüste, und viele Wüsten haben felsiges oder eisiges Gelände.",
        nl: "Niet alle woestijnen zijn heet en zanderig. Antarctica is een woestijn, en veel woestijnen hebben rotsachtig of ijzig terrein."
      }
    },
    {
      id: 'geo_44',
      question: {
        en: "Venice, Italy is built on more than 100 small islands.",
        es: "Venecia, Italia está construida sobre más de 100 pequeñas islas.",
        de: "Venedig, Italien ist auf mehr als 100 kleinen Inseln gebaut.",
        nl: "Venetië, Italië is gebouwd op meer dan 100 kleine eilanden."
      },
      isTrue: true,
      explanation: {
        en: "Venice is built on 118 small islands connected by canals and bridges in the Venetian Lagoon.",
        es: "Venecia está construida sobre 118 pequeñas islas conectadas por canales y puentes en la laguna veneciana.",
        de: "Venedig ist auf 118 kleinen Inseln gebaut, die durch Kanäle und Brücken in der Lagune von Venedig verbunden sind.",
        nl: "Venetië is gebouwd op 118 kleine eilanden die verbonden zijn door kanalen en bruggen in de Venetiaanse lagune."
      }
    },
    {
      id: 'geo_45',
      question: {
        en: "The Bermuda Triangle is located in the Indian Ocean.",
        es: "El Triángulo de las Bermudas está ubicado en el Océano Índico.",
        de: "Das Bermuda-Dreieck befindet sich im Indischen Ozean.",
        nl: "De Bermuda Driehoek ligt in de Indische Oceaan."
      },
      isTrue: false,
      explanation: {
        en: "The Bermuda Triangle is located in the western part of the North Atlantic Ocean, not the Indian Ocean.",
        es: "El Triángulo de las Bermudas está ubicado en la parte occidental del Océano Atlántico Norte, no en el Océano Índico.",
        de: "Das Bermuda-Dreieck befindet sich im westlichen Teil des Nordatlantiks, nicht im Indischen Ozean.",
        nl: "De Bermuda Driehoek ligt in het westelijke deel van de noordelijke Atlantische Oceaan, niet in de Indische Oceaan."
      }
    },
    {
      id: 'geo_46',
      question: {
        en: "Finland has the most lakes in the world.",
        es: "Finlandia tiene la mayor cantidad de lagos del mundo.",
        de: "Finnland hat die meisten Seen der Welt.",
        nl: "Finland heeft de meeste meren ter wereld."
      },
      isTrue: false,
      explanation: {
        en: "Canada has the most lakes in the world. Finland has about 188,000 lakes, while Canada has over 2 million lakes.",
        es: "Canadá tiene la mayor cantidad de lagos del mundo. Finlandia tiene alrededor de 188,000 lagos, mientras que Canadá tiene más de 2 millones de lagos.",
        de: "Kanada hat die meisten Seen der Welt. Finnland hat etwa 188.000 Seen, während Kanada über 2 Millionen Seen hat.",
        nl: "Canada heeft de meeste meren ter wereld. Finland heeft ongeveer 188.000 meren, terwijl Canada meer dan 2 miljoen meren heeft."
      }
    },
    {
      id: 'geo_47',
      question: {
        en: "The Amazon Rainforest is located entirely in Brazil.",
        es: "La selva amazónica está ubicada completamente en Brasil.",
        de: "Der Amazonas-Regenwald liegt vollständig in Brasilien.",
        nl: "Het Amazoneregenwoud ligt volledig in Brazilië."
      },
      isTrue: false,
      explanation: {
        en: "The Amazon Rainforest spans across 9 countries: Brazil, Peru, Colombia, Venezuela, Ecuador, Bolivia, Guyana, Suriname, and French Guiana.",
        es: "La selva amazónica se extiende por 9 países: Brasil, Perú, Colombia, Venezuela, Ecuador, Bolivia, Guyana, Surinam y Guayana Francesa.",
        de: "Der Amazonas-Regenwald erstreckt sich über 9 Länder: Brasilien, Peru, Kolumbien, Venezuela, Ecuador, Bolivien, Guyana, Suriname und Französisch-Guayana.",
        nl: "Het Amazoneregenwoud strekt zich uit over 9 landen: Brazilië, Peru, Colombia, Venezuela, Ecuador, Bolivia, Guyana, Suriname en Frans-Guyana."
      }
    },
    {
      id: 'geo_48',
      question: {
        en: "Cairo is the largest city in Africa by population.",
        es: "El Cairo es la ciudad más grande de África por población.",
        de: "Kairo ist die größte Stadt Afrikas nach Einwohnerzahl.",
        nl: "Caïro is de grootste stad in Afrika qua bevolking."
      },
      isTrue: true,
      explanation: {
        en: "Cairo, Egypt is the largest city in Africa with a metropolitan population of over 20 million people.",
        es: "El Cairo, Egipto es la ciudad más grande de África con una población metropolitana de más de 20 millones de personas.",
        de: "Kairo, Ägypten ist die größte Stadt Afrikas mit einer Metropolbevölkerung von über 20 Millionen Menschen.",
        nl: "Caïro, Egypte is de grootste stad in Afrika met een metropolitane bevolking van meer dan 20 miljoen mensen."
      }
    },
    {
      id: 'geo_49',
      question: {
        en: "The Ring of Fire is a region in the Pacific Ocean with frequent earthquakes and volcanoes.",
        es: "El Anillo de Fuego es una región en el Océano Pacífico con terremotos y volcanes frecuentes.",
        de: "Der Pazifische Feuerring ist eine Region im Pazifischen Ozean mit häufigen Erdbeben und Vulkanen.",
        nl: "De Ring of Fire is een gebied in de Stille Oceaan met frequente aardbevingen en vulkanen."
      },
      isTrue: true,
      explanation: {
        en: "The Ring of Fire is a major area in the Pacific Ocean where about 90% of the world's earthquakes occur and 75% of the world's volcanoes are located.",
        es: "El Anillo de Fuego es una zona importante en el Océano Pacífico donde ocurren alrededor del 90% de los terremotos del mundo y se encuentran el 75% de los volcanes del mundo.",
        de: "Der Pazifische Feuerring ist ein großes Gebiet im Pazifischen Ozean, in dem etwa 90% der weltweiten Erdbeben auftreten und 75% der weltweiten Vulkane liegen.",
        nl: "De Ring of Fire is een groot gebied in de Stille Oceaan waar ongeveer 90% van de aardbevingen ter wereld plaatsvindt en 75% van de vulkanen ter wereld zich bevindt."
      }
    },
    {
      id: 'geo_50',
      question: {
        en: "Mongolia is bordered by the ocean.",
        es: "Mongolia limita con el océano.",
        de: "Die Mongolei grenzt an den Ozean.",
        nl: "Mongolië grenst aan de oceaan."
      },
      isTrue: false,
      explanation: {
        en: "Mongolia is a landlocked country, bordered only by Russia and China, with no access to the ocean.",
        es: "Mongolia es un país sin salida al mar, bordeado solo por Rusia y China, sin acceso al océano.",
        de: "Die Mongolei ist ein Binnenstaat, der nur von Russland und China begrenzt wird, ohne Zugang zum Ozean.",
        nl: "Mongolië is een landinwaarts land, alleen begrensd door Rusland en China, zonder toegang tot de oceaan."
      }
    },
    {
      id: 'geo_51',
      question: {
        en: "The Sahara Desert is growing larger each year.",
        es: "El desierto del Sahara está creciendo cada año.",
        de: "Die Sahara-Wüste wird jedes Jahr größer.",
        nl: "De Sahara-woestijn wordt elk jaar groter."
      },
      isTrue: true,
      explanation: {
        en: "The Sahara Desert is expanding southward due to climate change and desertification, growing by about 10% since 1920.",
        es: "El desierto del Sahara se está expandiendo hacia el sur debido al cambio climático y la desertificación, creciendo alrededor del 10% desde 1920.",
        de: "Die Sahara-Wüste expandiert aufgrund des Klimawandels und der Wüstenbildung nach Süden und ist seit 1920 um etwa 10% gewachsen.",
        nl: "De Sahara-woestijn breidt zich zuidwaarts uit door klimaatverandering en woestijnvorming, en is sinds 1920 met ongeveer 10% gegroeid."
      }
    },
    {
      id: 'geo_52',
      question: {
        en: "Istanbul is the only city located on two continents.",
        es: "Estambul es la única ciudad ubicada en dos continentes.",
        de: "Istanbul ist die einzige Stadt, die auf zwei Kontinenten liegt.",
        nl: "Istanbul is de enige stad die op twee continenten ligt."
      },
      isTrue: false,
      explanation: {
        en: "While Istanbul straddles Europe and Asia, it's not the only city on two continents. Other examples include Cairo and Suez in Egypt (Africa and Asia).",
        es: "Aunque Estambul se extiende por Europa y Asia, no es la única ciudad en dos continentes. Otros ejemplos incluyen El Cairo y Suez en Egipto (África y Asia).",
        de: "Obwohl Istanbul sich über Europa und Asien erstreckt, ist es nicht die einzige Stadt auf zwei Kontinenten. Andere Beispiele sind Kairo und Suez in Ägypten (Afrika und Asien).",
        nl: "Hoewel Istanbul zich uitstrekt over Europa en Azië, is het niet de enige stad op twee continenten. Andere voorbeelden zijn Caïro en Suez in Egypte (Afrika en Azië)."
      }
    },
    {
      id: 'geo_53',
      question: {
        en: "The Arctic Ocean is the smallest ocean in the world.",
        es: "El Océano Ártico es el océano más pequeño del mundo.",
        de: "Der Arktische Ozean ist der kleinste Ozean der Welt.",
        nl: "De Noordelijke IJszee is de kleinste oceaan ter wereld."
      },
      isTrue: true,
      explanation: {
        en: "The Arctic Ocean is the smallest and shallowest of the world's five major oceans, covering about 14 million km².",
        es: "El Océano Ártico es el más pequeño y menos profundo de los cinco océanos principales del mundo, cubriendo alrededor de 14 millones de km².",
        de: "Der Arktische Ozean ist der kleinste und flachste der fünf großen Ozeane der Welt und erstreckt sich über etwa 14 Millionen km².",
        nl: "De Noordelijke IJszee is de kleinste en ondiepste van 's werelds vijf grote oceanen, met een oppervlakte van ongeveer 14 miljoen km²."
      }
    },
    {
      id: 'geo_54',
      question: {
        en: "The Leaning Tower of Pisa was designed to lean.",
        es: "La Torre de Pisa fue diseñada para inclinarse.",
        de: "Der Schiefe Turm von Pisa wurde so entworfen, dass er sich neigt.",
        nl: "De Toren van Pisa werd ontworpen om te leunen."
      },
      isTrue: false,
      explanation: {
        en: "The Leaning Tower of Pisa was not designed to lean. It began tilting during construction due to soft ground and poor foundation design.",
        es: "La Torre de Pisa no fue diseñada para inclinarse. Comenzó a inclinarse durante la construcción debido a un suelo blando y un diseño de cimientos deficiente.",
        de: "Der Schiefe Turm von Pisa wurde nicht so entworfen, dass er sich neigt. Er begann sich während des Baus aufgrund weichen Bodens und schlechter Fundamentplanung zu neigen.",
        nl: "De Toren van Pisa was niet ontworpen om te leunen. Het begon tijdens de bouw te kantelen door zachte grond en slecht funderingsontwerp."
      }
    },
    {
      id: 'geo_55',
      question: {
        en: "Denmark is connected to Sweden by a bridge.",
        es: "Dinamarca está conectada a Suecia por un puente.",
        de: "Dänemark ist durch eine Brücke mit Schweden verbunden.",
        nl: "Denemarken is verbonden met Zweden via een brug."
      },
      isTrue: true,
      explanation: {
        en: "The Øresund Bridge connects Copenhagen, Denmark with Malmö, Sweden. It's a combined railway and motorway bridge opened in 2000.",
        es: "El Puente de Øresund conecta Copenhague, Dinamarca con Malmö, Suecia. Es un puente combinado de ferrocarril y autopista inaugurado en 2000.",
        de: "Die Öresundbrücke verbindet Kopenhagen, Dänemark, mit Malmö, Schweden. Es ist eine kombinierte Eisenbahn- und Autobahnbrücke, die im Jahr 2000 eröffnet wurde.",
        nl: "De Øresundbrug verbindt Kopenhagen, Denemarken met Malmö, Zweden. Het is een gecombineerde spoorweg- en autowegbrug die in 2000 werd geopend."
      }
    },
    {
      id: 'geo_56',
      question: {
        en: "Mount Kilimanjaro is located in Kenya.",
        es: "El Monte Kilimanjaro está ubicado en Kenia.",
        de: "Der Kilimandscharo befindet sich in Kenia.",
        nl: "De Kilimanjaro ligt in Kenia."
      },
      isTrue: false,
      explanation: {
        en: "Mount Kilimanjaro is located in Tanzania, not Kenya, though it can be seen from Kenya.",
        es: "El Monte Kilimanjaro está ubicado en Tanzania, no en Kenia, aunque se puede ver desde Kenia.",
        de: "Der Kilimandscharo befindet sich in Tansania, nicht in Kenia, obwohl er von Kenia aus sichtbar ist.",
        nl: "De Kilimanjaro ligt in Tanzania, niet in Kenia, hoewel hij vanuit Kenia te zien is."
      }
    },
    {
      id: 'geo_57',
      question: {
        en: "The Black Sea is connected to the Mediterranean Sea.",
        es: "El Mar Negro está conectado con el Mar Mediterráneo.",
        de: "Das Schwarze Meer ist mit dem Mittelmeer verbunden.",
        nl: "De Zwarte Zee is verbonden met de Middellandse Zee."
      },
      isTrue: true,
      explanation: {
        en: "The Black Sea connects to the Mediterranean Sea through the Bosphorus Strait, the Sea of Marmara, and the Dardanelles Strait.",
        es: "El Mar Negro se conecta con el Mar Mediterráneo a través del Estrecho del Bósforo, el Mar de Mármara y el Estrecho de los Dardanelos.",
        de: "Das Schwarze Meer ist über den Bosporus, das Marmarameer und die Dardanellen mit dem Mittelmeer verbunden.",
        nl: "De Zwarte Zee is verbonden met de Middellandse Zee via de Bosporus, de Zee van Marmara en de Dardanellen."
      }
    },
    {
      id: 'geo_58',
      question: {
        en: "The Galapagos Islands belong to Chile.",
        es: "Las Islas Galápagos pertenecen a Chile.",
        de: "Die Galapagosinseln gehören zu Chile.",
        nl: "De Galapagoseilanden behoren toe aan Chili."
      },
      isTrue: false,
      explanation: {
        en: "The Galapagos Islands belong to Ecuador, not Chile. They are located about 1,000 km off Ecuador's coast.",
        es: "Las Islas Galápagos pertenecen a Ecuador, no a Chile. Están ubicadas a unos 1,000 km de la costa de Ecuador.",
        de: "Die Galapagosinseln gehören zu Ecuador, nicht zu Chile. Sie liegen etwa 1.000 km vor der Küste Ecuadors.",
        nl: "De Galapagoseilanden behoren toe aan Ecuador, niet aan Chili. Ze liggen ongeveer 1.000 km voor de kust van Ecuador."
      }
    },
    {
      id: 'geo_59',
      question: {
        en: "The Caspian Sea is the world's largest lake.",
        es: "El Mar Caspio es el lago más grande del mundo.",
        de: "Das Kaspische Meer ist der größte See der Welt.",
        nl: "De Kaspische Zee is het grootste meer ter wereld."
      },
      isTrue: true,
      explanation: {
        en: "Despite its name, the Caspian Sea is actually the world's largest lake by surface area, covering approximately 371,000 km².",
        es: "A pesar de su nombre, el Mar Caspio es en realidad el lago más grande del mundo por superficie, cubriendo aproximadamente 371,000 km².",
        de: "Trotz seines Namens ist das Kaspische Meer tatsächlich der größte See der Welt nach Oberfläche und erstreckt sich über etwa 371.000 km².",
        nl: "Ondanks de naam is de Kaspische Zee eigenlijk het grootste meer ter wereld qua oppervlakte, met ongeveer 371.000 km²."
      }
    },
    {
      id: 'geo_60',
      question: {
        en: "Angel Falls is the tallest waterfall in the world.",
        es: "El Salto Ángel es la cascada más alta del mundo.",
        de: "Der Angelfall ist der höchste Wasserfall der Welt.",
        nl: "Angel Falls is de hoogste waterval ter wereld."
      },
      isTrue: true,
      explanation: {
        en: "Angel Falls in Venezuela is the world's tallest uninterrupted waterfall, with a height of 979 meters.",
        es: "El Salto Ángel en Venezuela es la cascada ininterrumpida más alta del mundo, con una altura de 979 metros.",
        de: "Der Angelfall in Venezuela ist mit 979 Metern der höchste ununterbrochene Wasserfall der Welt.",
        nl: "Angel Falls in Venezuela is de hoogste ononderbroken waterval ter wereld, met een hoogte van 979 meter."
      }
    },
    {
      id: 'geo_61',
      question: {
        en: "The Matterhorn mountain is located in Italy.",
        es: "La montaña Matterhorn está ubicada en Italia.",
        de: "Das Matterhorn befindet sich in Italien.",
        nl: "De Matterhorn ligt in Italië."
      },
      isTrue: false,
      explanation: {
        en: "The Matterhorn straddles the border between Switzerland and Italy, but it's most famously associated with Switzerland.",
        es: "El Matterhorn se encuentra en la frontera entre Suiza e Italia, pero está más famosamente asociado con Suiza.",
        de: "Das Matterhorn liegt an der Grenze zwischen der Schweiz und Italien, wird aber am bekanntesten mit der Schweiz assoziiert.",
        nl: "De Matterhorn ligt op de grens tussen Zwitserland en Italië, maar wordt het meest geassocieerd met Zwitserland."
      }
    },
    {
      id: 'geo_62',
      question: {
        en: "The Great Lakes are located entirely in the United States.",
        es: "Los Grandes Lagos están ubicados completamente en los Estados Unidos.",
        de: "Die Großen Seen liegen vollständig in den Vereinigten Staaten.",
        nl: "De Grote Meren liggen volledig in de Verenigde Staten."
      },
      isTrue: false,
      explanation: {
        en: "The Great Lakes are shared between the United States and Canada, with only Lake Michigan entirely within the US.",
        es: "Los Grandes Lagos se comparten entre Estados Unidos y Canadá, con solo el Lago Michigan completamente dentro de los EE.UU.",
        de: "Die Großen Seen werden zwischen den Vereinigten Staaten und Kanada geteilt, wobei nur der Michigansee vollständig in den USA liegt.",
        nl: "De Grote Meren worden gedeeld tussen de Verenigde Staten en Canada, waarbij alleen Lake Michigan volledig binnen de VS ligt."
      }
    },
    {
      id: 'geo_63',
      question: {
        en: "The Gobi Desert is located in Mongolia and China.",
        es: "El desierto de Gobi está ubicado en Mongolia y China.",
        de: "Die Wüste Gobi befindet sich in der Mongolei und China.",
        nl: "De Gobi-woestijn ligt in Mongolië en China."
      },
      isTrue: true,
      explanation: {
        en: "The Gobi Desert spans parts of northern China and southern Mongolia, making it one of the world's largest deserts.",
        es: "El desierto de Gobi se extiende por partes del norte de China y el sur de Mongolia, lo que lo convierte en uno de los desiertos más grandes del mundo.",
        de: "Die Wüste Gobi erstreckt sich über Teile Nordchinas und der Südmongolei und ist damit eine der größten Wüsten der Welt.",
        nl: "De Gobi-woestijn strekt zich uit over delen van Noord-China en Zuid-Mongolië, waardoor het een van de grootste woestijnen ter wereld is."
      }
    },
    {
      id: 'geo_64',
      question: {
        en: "Machu Picchu is located in Peru.",
        es: "Machu Picchu está ubicado en Perú.",
        de: "Machu Picchu befindet sich in Peru.",
        nl: "Machu Picchu ligt in Peru."
      },
      isTrue: true,
      explanation: {
        en: "Machu Picchu is an ancient Incan citadel located in the Andes Mountains of Peru, built in the 15th century.",
        es: "Machu Picchu es una antigua ciudadela inca ubicada en las montañas de los Andes de Perú, construida en el siglo XV.",
        de: "Machu Picchu ist eine alte Inka-Zitadelle in den Anden von Peru, die im 15. Jahrhundert erbaut wurde.",
        nl: "Machu Picchu is een oude Inca-citadel in het Andesgebergte van Peru, gebouwd in de 15e eeuw."
      }
    },
    {
      id: 'geo_65',
      question: {
        en: "The Rhine River flows through France and Germany.",
        es: "El río Rin fluye por Francia y Alemania.",
        de: "Der Rhein fließt durch Frankreich und Deutschland.",
        nl: "De Rijn stroomt door Frankrijk en Duitsland."
      },
      isTrue: true,
      explanation: {
        en: "The Rhine River flows through several countries including Switzerland, France, Germany, and the Netherlands.",
        es: "El río Rin fluye por varios países, incluyendo Suiza, Francia, Alemania y los Países Bajos.",
        de: "Der Rhein fließt durch mehrere Länder, darunter die Schweiz, Frankreich, Deutschland und die Niederlande.",
        nl: "De Rijn stroomt door verschillende landen, waaronder Zwitserland, Frankrijk, Duitsland en Nederland."
      }
    },
    {
      id: 'geo_66',
      question: {
        en: "Petra, the ancient city carved into rock, is located in Jordan.",
        es: "Petra, la antigua ciudad tallada en roca, está ubicada en Jordania.",
        de: "Petra, die antike in Fels gehauene Stadt, befindet sich in Jordanien.",
        nl: "Petra, de oude stad uitgehouwen in rots, ligt in Jordanië."
      },
      isTrue: true,
      explanation: {
        en: "Petra is an archaeological site in Jordan, famous for its rock-cut architecture and water conduit system.",
        es: "Petra es un sitio arqueológico en Jordania, famoso por su arquitectura tallada en roca y su sistema de conductos de agua.",
        de: "Petra ist eine archäologische Stätte in Jordanien, berühmt für ihre in Fels gehauene Architektur und ihr Wasserkanalsystem.",
        nl: "Petra is een archeologische vindplaats in Jordanië, beroemd om zijn in rots uitgehouwen architectuur en watergeleidingssysteem."
      }
    },
    {
      id: 'geo_67',
      question: {
        en: "The International Date Line passes through Greenwich, England.",
        es: "La Línea Internacional de Cambio de Fecha pasa por Greenwich, Inglaterra.",
        de: "Die internationale Datumsgrenze verläuft durch Greenwich, England.",
        nl: "De internationale datumgrens loopt door Greenwich, Engeland."
      },
      isTrue: false,
      explanation: {
        en: "The Prime Meridian (0° longitude) passes through Greenwich. The International Date Line is roughly along the 180° meridian in the Pacific Ocean.",
        es: "El Meridiano de Greenwich (0° de longitud) pasa por Greenwich. La Línea Internacional de Cambio de Fecha está aproximadamente a lo largo del meridiano 180° en el Océano Pacífico.",
        de: "Der Nullmeridian (0° Längengrad) verläuft durch Greenwich. Die internationale Datumsgrenze liegt ungefähr entlang des 180. Meridians im Pazifischen Ozean.",
        nl: "De nulmeridiaan (0° lengtegraad) loopt door Greenwich. De internationale datumgrens ligt ongeveer langs de 180° meridiaan in de Stille Oceaan."
      }
    },
    {
      id: 'geo_68',
      question: {
        en: "The Atacama Desert is one of the driest places on Earth.",
        es: "El desierto de Atacama es uno de los lugares más secos de la Tierra.",
        de: "Die Atacama-Wüste ist einer der trockensten Orte der Erde.",
        nl: "De Atacama-woestijn is een van de droogste plekken op aarde."
      },
      isTrue: true,
      explanation: {
        en: "The Atacama Desert in Chile is one of the driest non-polar deserts in the world, with some areas receiving no rain for decades.",
        es: "El desierto de Atacama en Chile es uno de los desiertos no polares más secos del mundo, con algunas áreas que no reciben lluvia durante décadas.",
        de: "Die Atacama-Wüste in Chile ist eine der trockensten nicht-polaren Wüsten der Welt, wobei einige Gebiete jahrzehntelang keinen Regen erhalten.",
        nl: "De Atacama-woestijn in Chili is een van de droogste niet-poolwoestijnen ter wereld, waarbij sommige gebieden tientallen jaren geen regen ontvangen."
      }
    },
    {
      id: 'geo_69',
      question: {
        en: "The Strait of Gibraltar separates Europe from Africa.",
        es: "El Estrecho de Gibraltar separa Europa de África.",
        de: "Die Straße von Gibraltar trennt Europa von Afrika.",
        nl: "De Straat van Gibraltar scheidt Europa van Afrika."
      },
      isTrue: true,
      explanation: {
        en: "The Strait of Gibraltar is a narrow strait that connects the Atlantic Ocean to the Mediterranean Sea and separates Spain (Europe) from Morocco (Africa).",
        es: "El Estrecho de Gibraltar es un estrecho angosto que conecta el Océano Atlántico con el Mar Mediterráneo y separa España (Europa) de Marruecos (África).",
        de: "Die Straße von Gibraltar ist eine schmale Meerenge, die den Atlantischen Ozean mit dem Mittelmeer verbindet und Spanien (Europa) von Marokko (Afrika) trennt.",
        nl: "De Straat van Gibraltar is een smalle zeestraat die de Atlantische Oceaan verbindt met de Middellandse Zee en Spanje (Europa) scheidt van Marokko (Afrika)."
      }
    },
    {
      id: 'geo_70',
      question: {
        en: "Stonehenge is located in Scotland.",
        es: "Stonehenge está ubicado en Escocia.",
        de: "Stonehenge befindet sich in Schottland.",
        nl: "Stonehenge ligt in Schotland."
      },
      isTrue: false,
      explanation: {
        en: "Stonehenge is located in Wiltshire, England, not Scotland. It's a prehistoric monument dating back to around 3000 BC.",
        es: "Stonehenge está ubicado en Wiltshire, Inglaterra, no en Escocia. Es un monumento prehistórico que data de alrededor del 3000 a.C.",
        de: "Stonehenge befindet sich in Wiltshire, England, nicht in Schottland. Es ist ein prähistorisches Monument aus der Zeit um 3000 v. Chr.",
        nl: "Stonehenge ligt in Wiltshire, Engeland, niet in Schotland. Het is een prehistorisch monument dat dateert van rond 3000 v.Chr."
      }
    },
    {
      id: 'geo_71',
      question: {
        en: "The Ural Mountains form the natural boundary between Europe and Asia.",
        es: "Las montañas de los Urales forman la frontera natural entre Europa y Asia.",
        de: "Das Uralgebirge bildet die natürliche Grenze zwischen Europa und Asien.",
        nl: "De Oeral vormt de natuurlijke grens tussen Europa en Azië."
      },
      isTrue: true,
      explanation: {
        en: "The Ural Mountains in Russia are traditionally considered the natural boundary between the continents of Europe and Asia.",
        es: "Las montañas de los Urales en Rusia se consideran tradicionalmente la frontera natural entre los continentes de Europa y Asia.",
        de: "Das Uralgebirge in Russland gilt traditionell als natürliche Grenze zwischen den Kontinenten Europa und Asien.",
        nl: "De Oeral in Rusland wordt traditioneel beschouwd als de natuurlijke grens tussen de continenten Europa en Azië."
      }
    },
    {
      id: 'geo_72',
      question: {
        en: "The Caribbean Sea is part of the Atlantic Ocean.",
        es: "El Mar Caribe es parte del Océano Atlántico.",
        de: "Das Karibische Meer ist Teil des Atlantischen Ozeans.",
        nl: "De Caraïbische Zee maakt deel uit van de Atlantische Oceaan."
      },
      isTrue: true,
      explanation: {
        en: "The Caribbean Sea is a marginal sea of the Atlantic Ocean, located in the western hemisphere.",
        es: "El Mar Caribe es un mar marginal del Océano Atlántico, ubicado en el hemisferio occidental.",
        de: "Das Karibische Meer ist ein Randmeer des Atlantischen Ozeans und liegt in der westlichen Hemisphäre.",
        nl: "De Caraïbische Zee is een randzee van de Atlantische Oceaan, gelegen in het westelijk halfrond."
      }
    },
    {
      id: 'geo_73',
      question: {
        en: "The Maldives could be completely underwater by 2100.",
        es: "Las Maldivas podrían estar completamente bajo el agua para 2100.",
        de: "Die Malediven könnten bis 2100 vollständig unter Wasser stehen.",
        nl: "De Maldiven kunnen tegen 2100 volledig onder water staan."
      },
      isTrue: true,
      explanation: {
        en: "Due to rising sea levels from climate change, the Maldives - with an average elevation of just 1.5 meters above sea level - faces existential threat and could be submerged this century.",
        es: "Debido al aumento del nivel del mar por el cambio climático, las Maldivas - con una elevación promedio de solo 1.5 metros sobre el nivel del mar - enfrentan una amenaza existencial.",
        de: "Aufgrund steigender Meeresspiegel durch den Klimawandel stehen die Malediven - mit einer durchschnittlichen Höhe von nur 1,5 Metern über dem Meeresspiegel - vor einer existenziellen Bedrohung.",
        nl: "Door stijgende zeespiegels vanwege klimaatverandering staan de Maldiven - met een gemiddelde hoogte van slechts 1,5 meter boven de zeespiegel - voor een existentiële bedreiging."
      }
    },
    {
      id: 'geo_74',
      question: {
        en: "The Congo River is the second longest river in Africa.",
        es: "El río Congo es el segundo río más largo de África.",
        de: "Der Kongo ist der zweitlängste Fluss in Afrika.",
        nl: "De Kongo is de op een na langste rivier in Afrika."
      },
      isTrue: true,
      explanation: {
        en: "The Congo River is the second longest river in Africa after the Nile, and the deepest river in the world.",
        es: "El río Congo es el segundo río más largo de África después del Nilo, y el río más profundo del mundo.",
        de: "Der Kongo ist nach dem Nil der zweitlängste Fluss in Afrika und der tiefste Fluss der Welt.",
        nl: "De Kongo is de op een na langste rivier in Afrika na de Nijl, en de diepste rivier ter wereld."
      }
    },
    {
      id: 'geo_75',
      question: {
        en: "The Louvre Museum is located in Madrid, Spain.",
        es: "El Museo del Louvre está ubicado en Madrid, España.",
        de: "Das Louvre-Museum befindet sich in Madrid, Spanien.",
        nl: "Het Louvre Museum ligt in Madrid, Spanje."
      },
      isTrue: false,
      explanation: {
        en: "The Louvre Museum is located in Paris, France, not Madrid. The Prado Museum is the famous museum in Madrid.",
        es: "El Museo del Louvre está ubicado en París, Francia, no en Madrid. El Museo del Prado es el museo famoso en Madrid.",
        de: "Das Louvre-Museum befindet sich in Paris, Frankreich, nicht in Madrid. Das Prado-Museum ist das berühmte Museum in Madrid.",
        nl: "Het Louvre Museum ligt in Parijs, Frankrijk, niet in Madrid. Het Prado Museum is het beroemde museum in Madrid."
      }
    },
    {
      id: 'geo_76',
      question: {
        en: "The Mississippi River is the longest river in North America.",
        es: "El río Mississippi es el río más largo de América del Norte.",
        de: "Der Mississippi ist der längste Fluss in Nordamerika.",
        nl: "De Mississippi is de langste rivier in Noord-Amerika."
      },
      isTrue: true,
      explanation: {
        en: "The Mississippi River system, including the Missouri River, is the longest river system in North America at about 6,275 km.",
        es: "El sistema del río Mississippi, incluyendo el río Missouri, es el sistema fluvial más largo de América del Norte con aproximadamente 6,275 km.",
        de: "Das Mississippi-Flusssystem, einschließlich des Missouri, ist mit etwa 6.275 km das längste Flusssystem in Nordamerika.",
        nl: "Het Mississippi-riviersysteem, inclusief de Missouri, is met ongeveer 6.275 km het langste riviersysteem in Noord-Amerika."
      }
    },
    {
      id: 'geo_77',
      question: {
        en: "The Northern Lights can only be seen in Norway.",
        es: "La Aurora Boreal solo se puede ver en Noruega.",
        de: "Das Nordlicht ist nur in Norwegen sichtbar.",
        nl: "Het noorderlicht is alleen te zien in Noorwegen."
      },
      isTrue: false,
      explanation: {
        en: "The Northern Lights (Aurora Borealis) can be seen in many northern countries including Norway, Iceland, Canada, Alaska, Finland, Sweden, and Greenland.",
        es: "La Aurora Boreal se puede ver en muchos países del norte, incluyendo Noruega, Islandia, Canadá, Alaska, Finlandia, Suecia y Groenlandia.",
        de: "Das Nordlicht (Aurora Borealis) ist in vielen nördlichen Ländern sichtbar, darunter Norwegen, Island, Kanada, Alaska, Finnland, Schweden und Grönland.",
        nl: "Het noorderlicht (Aurora Borealis) is te zien in veel noordelijke landen, waaronder Noorwegen, IJsland, Canada, Alaska, Finland, Zweden en Groenland."
      }
    },
    {
      id: 'geo_78',
      question: {
        en: "The Equator passes through the continent of Australia.",
        es: "El Ecuador pasa por el continente de Australia.",
        de: "Der Äquator verläuft durch den Kontinent Australien.",
        nl: "De evenaar loopt door het continent Australië."
      },
      isTrue: false,
      explanation: {
        en: "The Equator does not pass through Australia. Australia is located entirely in the Southern Hemisphere, south of the Equator.",
        es: "El Ecuador no pasa por Australia. Australia está ubicada completamente en el Hemisferio Sur, al sur del Ecuador.",
        de: "Der Äquator verläuft nicht durch Australien. Australien liegt vollständig auf der Südhalbkugel, südlich des Äquators.",
        nl: "De evenaar loopt niet door Australië. Australië ligt volledig op het zuidelijk halfrond, ten zuiden van de evenaar."
      }
    },
    {
      id: 'geo_79',
      question: {
        en: "Lake Superior is the largest of the Great Lakes.",
        es: "El Lago Superior es el más grande de los Grandes Lagos.",
        de: "Der Obere See ist der größte der Großen Seen.",
        nl: "Lake Superior is het grootste van de Grote Meren."
      },
      isTrue: true,
      explanation: {
        en: "Lake Superior is the largest of the Great Lakes by surface area and the largest freshwater lake in the world by surface area.",
        es: "El Lago Superior es el más grande de los Grandes Lagos por superficie y el lago de agua dulce más grande del mundo por superficie.",
        de: "Der Obere See ist der größte der Großen Seen nach Oberfläche und der größte Süßwassersee der Welt nach Oberfläche.",
        nl: "Lake Superior is het grootste van de Grote Meren qua oppervlakte en het grootste zoetwatermeer ter wereld qua oppervlakte."
      }
    },
    {
      id: 'geo_80',
      question: {
        en: "The Victoria Falls are located on the border between Zambia and Zimbabwe.",
        es: "Las Cataratas Victoria están ubicadas en la frontera entre Zambia y Zimbabue.",
        de: "Die Victoriafälle befinden sich an der Grenze zwischen Sambia und Simbabwe.",
        nl: "De Victoriawatervallen liggen op de grens tussen Zambia en Zimbabwe."
      },
      isTrue: true,
      explanation: {
        en: "Victoria Falls is located on the Zambezi River at the border between Zambia and Zimbabwe in southern Africa.",
        es: "Las Cataratas Victoria están ubicadas en el río Zambeze en la frontera entre Zambia y Zimbabue en el sur de África.",
        de: "Die Victoriafälle befinden sich am Sambesi an der Grenze zwischen Sambia und Simbabwe im südlichen Afrika.",
        nl: "De Victoriawatervallen liggen aan de Zambezi-rivier op de grens tussen Zambia en Zimbabwe in zuidelijk Afrika."
      }
    },
    {
      id: 'geo_81',
      question: {
        en: "The Prime Meridian passes through Paris, France.",
        es: "El Meridiano de Greenwich pasa por París, Francia.",
        de: "Der Nullmeridian verläuft durch Paris, Frankreich.",
        nl: "De nulmeridiaan loopt door Parijs, Frankrijk."
      },
      isTrue: false,
      explanation: {
        en: "The Prime Meridian (0° longitude) passes through Greenwich, London, not Paris. France used to have its own meridian through Paris.",
        es: "El Meridiano de Greenwich (0° de longitud) pasa por Greenwich, Londres, no por París. Francia solía tener su propio meridiano a través de París.",
        de: "Der Nullmeridian (0° Längengrad) verläuft durch Greenwich, London, nicht durch Paris. Frankreich hatte früher seinen eigenen Meridian durch Paris.",
        nl: "De nulmeridiaan (0° lengtegraad) loopt door Greenwich, Londen, niet door Parijs. Frankrijk had vroeger zijn eigen meridiaan door Parijs."
      }
    },
    {
      id: 'geo_82',
      question: {
        en: "The Mariana Trench is the deepest point in the world's oceans.",
        es: "La Fosa de las Marianas es el punto más profundo de los océanos del mundo.",
        de: "Der Marianengraben ist der tiefste Punkt der Weltmeere.",
        nl: "De Marianentrog is het diepste punt in de oceanen van de wereld."
      },
      isTrue: true,
      explanation: {
        en: "The Mariana Trench in the Pacific Ocean is the deepest part of the world's oceans, reaching depths of about 11,000 meters at Challenger Deep.",
        es: "La Fosa de las Marianas en el Océano Pacífico es la parte más profunda de los océanos del mundo, alcanzando profundidades de unos 11,000 metros en el Challenger Deep.",
        de: "Der Marianengraben im Pazifischen Ozean ist der tiefste Teil der Weltmeere und erreicht am Challengertief Tiefen von etwa 11.000 Metern.",
        nl: "De Marianentrog in de Stille Oceaan is het diepste deel van de oceanen van de wereld, met dieptes van ongeveer 11.000 meter bij Challenger Deep."
      }
    },
    {
      id: 'geo_83',
      question: {
        en: "The Yellowstone National Park is located in California.",
        es: "El Parque Nacional Yellowstone está ubicado en California.",
        de: "Der Yellowstone-Nationalpark befindet sich in Kalifornien.",
        nl: "Yellowstone National Park ligt in Californië."
      },
      isTrue: false,
      explanation: {
        en: "Yellowstone National Park is located primarily in Wyoming, with small portions in Montana and Idaho, not California.",
        es: "El Parque Nacional Yellowstone está ubicado principalmente en Wyoming, con pequeñas porciones en Montana e Idaho, no en California.",
        de: "Der Yellowstone-Nationalpark befindet sich hauptsächlich in Wyoming, mit kleinen Teilen in Montana und Idaho, nicht in Kalifornien.",
        nl: "Yellowstone National Park ligt voornamelijk in Wyoming, met kleine delen in Montana en Idaho, niet in Californië."
      }
    },
    {
      id: 'geo_84',
      question: {
        en: "The Bering Strait separates Russia from Alaska.",
        es: "El Estrecho de Bering separa Rusia de Alaska.",
        de: "Die Beringstraße trennt Russland von Alaska.",
        nl: "De Beringstraat scheidt Rusland van Alaska."
      },
      isTrue: true,
      explanation: {
        en: "The Bering Strait is a narrow passage of water that separates Russia from Alaska (USA), connecting the Pacific and Arctic Oceans.",
        es: "El Estrecho de Bering es un paso de agua angosto que separa Rusia de Alaska (EE.UU.), conectando los océanos Pacífico y Ártico.",
        de: "Die Beringstraße ist eine schmale Wasserstraße, die Russland von Alaska (USA) trennt und den Pazifik mit dem Arktischen Ozean verbindet.",
        nl: "De Beringstraat is een smalle waterweg die Rusland scheidt van Alaska (VS) en de Stille Oceaan verbindt met de Noordelijke IJszee."
      }
    },
    {
      id: 'geo_85',
      question: {
        en: "Mount Fuji is the highest mountain in Japan.",
        es: "El Monte Fuji es la montaña más alta de Japón.",
        de: "Der Fuji ist der höchste Berg Japans.",
        nl: "De Fuji is de hoogste berg van Japan."
      },
      isTrue: true,
      explanation: {
        en: "Mount Fuji is Japan's highest mountain at 3,776 meters and is an active stratovolcano and iconic symbol of Japan.",
        es: "El Monte Fuji es la montaña más alta de Japón con 3,776 metros y es un estratovolcán activo y símbolo icónico de Japón.",
        de: "Der Fuji ist mit 3.776 Metern Japans höchster Berg und ein aktiver Schichtvulkan und ikonisches Symbol Japans.",
        nl: "De Fuji is met 3.776 meter de hoogste berg van Japan en is een actieve stratovulkaan en iconisch symbool van Japan."
      }
    },
    {
      id: 'geo_86',
      question: {
        en: "The Dead Sea is saltier than the ocean.",
        es: "El Mar Muerto es más salado que el océano.",
        de: "Das Tote Meer ist salziger als das Meer.",
        nl: "De Dode Zee is zouter dan de oceaan."
      },
      isTrue: true,
      explanation: {
        en: "The Dead Sea has a salinity of about 34%, making it nearly 10 times saltier than ocean water.",
        es: "El Mar Muerto tiene una salinidad de alrededor del 34%, lo que lo hace casi 10 veces más salado que el agua del océano.",
        de: "Das Tote Meer hat einen Salzgehalt von etwa 34%, was es fast 10-mal salziger macht als Meerwasser.",
        nl: "De Dode Zee heeft een zoutgehalte van ongeveer 34%, waardoor het bijna 10 keer zouter is dan oceaanwater."
      }
    },
    {
      id: 'geo_87',
      question: {
        en: "The Ganges River is considered sacred in Hinduism.",
        es: "El río Ganges se considera sagrado en el hinduismo.",
        de: "Der Ganges gilt im Hinduismus als heilig.",
        nl: "De Ganges wordt in het hindoeïsme als heilig beschouwd."
      },
      isTrue: true,
      explanation: {
        en: "The Ganges River in India is considered sacred by Hindus and is worshipped as the goddess Ganga.",
        es: "El río Ganges en India se considera sagrado por los hindúes y se venera como la diosa Ganga.",
        de: "Der Ganges in Indien gilt den Hindus als heilig und wird als Göttin Ganga verehrt.",
        nl: "De Ganges in India wordt door hindoes als heilig beschouwd en vereerd als de godin Ganga."
      }
    },
    {
      id: 'geo_88',
      question: {
        en: "The Pyramids of Giza are located in Cairo.",
        es: "Las Pirámides de Giza están ubicadas en El Cairo.",
        de: "Die Pyramiden von Gizeh befinden sich in Kairo.",
        nl: "De Piramides van Gizeh liggen in Caïro."
      },
      isTrue: true,
      explanation: {
        en: "The Pyramids of Giza are located on the outskirts of Cairo, Egypt, on the Giza Plateau.",
        es: "Las Pirámides de Giza están ubicadas en las afueras de El Cairo, Egipto, en la meseta de Giza.",
        de: "Die Pyramiden von Gizeh befinden sich am Stadtrand von Kairo, Ägypten, auf dem Gizeh-Plateau.",
        nl: "De Piramides van Gizeh liggen aan de rand van Caïro, Egypte, op het Gizeh-plateau."
      }
    },
    {
      id: 'geo_89',
      question: {
        en: "The Volga is the longest river in Europe.",
        es: "El Volga es el río más largo de Europa.",
        de: "Die Wolga ist der längste Fluss Europas.",
        nl: "De Wolga is de langste rivier van Europa."
      },
      isTrue: true,
      explanation: {
        en: "The Volga River in Russia is the longest river in Europe, flowing about 3,530 kilometers.",
        es: "El río Volga en Rusia es el río más largo de Europa, fluyendo unos 3,530 kilómetros.",
        de: "Die Wolga in Russland ist mit etwa 3.530 Kilometern der längste Fluss Europas.",
        nl: "De Wolga in Rusland is met ongeveer 3.530 kilometer de langste rivier van Europa."
      }
    },
    {
      id: 'geo_90',
      question: {
        en: "The Acropolis is located in Rome, Italy.",
        es: "La Acrópolis está ubicada en Roma, Italia.",
        de: "Die Akropolis befindet sich in Rom, Italien.",
        nl: "De Acropolis ligt in Rome, Italië."
      },
      isTrue: false,
      explanation: {
        en: "The Acropolis is located in Athens, Greece, not Rome. It's an ancient citadel containing several historic buildings including the Parthenon.",
        es: "La Acrópolis está ubicada en Atenas, Grecia, no en Roma. Es una ciudadela antigua que contiene varios edificios históricos, incluido el Partenón.",
        de: "Die Akropolis befindet sich in Athen, Griechenland, nicht in Rom. Es ist eine antike Zitadelle mit mehreren historischen Gebäuden, darunter der Parthenon.",
        nl: "De Acropolis ligt in Athene, Griekenland, niet in Rome. Het is een oude citadel met verschillende historische gebouwen, waaronder het Parthenon."
      }
    },
    {
      id: 'geo_91',
      question: {
        en: "The Tropic of Capricorn is located in the Southern Hemisphere.",
        es: "El Trópico de Capricornio está ubicado en el Hemisferio Sur.",
        de: "Der Wendekreis des Steinbocks liegt auf der Südhalbkugel.",
        nl: "De Steenbokskeerkring ligt op het zuidelijk halfrond."
      },
      isTrue: true,
      explanation: {
        en: "The Tropic of Capricorn is the southernmost latitude where the sun can appear directly overhead, located in the Southern Hemisphere.",
        es: "El Trópico de Capricornio es la latitud más al sur donde el sol puede aparecer directamente sobre la cabeza, ubicada en el Hemisferio Sur.",
        de: "Der Wendekreis des Steinbocks ist der südlichste Breitengrad, an dem die Sonne direkt im Zenit stehen kann, und liegt auf der Südhalbkugel.",
        nl: "De Steenbokskeerkring is de meest zuidelijke breedtegraad waar de zon recht boven kan staan, gelegen op het zuidelijk halfrond."
      }
    },
    {
      id: 'geo_92',
      question: {
        en: "The Angkor Wat temple complex is located in Thailand.",
        es: "El complejo de templos de Angkor Wat está ubicado en Tailandia.",
        de: "Der Tempelkomplex Angkor Wat befindet sich in Thailand.",
        nl: "Het Angkor Wat tempelcomplex ligt in Thailand."
      },
      isTrue: false,
      explanation: {
        en: "Angkor Wat is located in Cambodia, not Thailand. It's the largest religious monument in the world.",
        es: "Angkor Wat está ubicado en Camboya, no en Tailandia. Es el monumento religioso más grande del mundo.",
        de: "Angkor Wat befindet sich in Kambodscha, nicht in Thailand. Es ist das größte religiöse Denkmal der Welt.",
        nl: "Angkor Wat ligt in Cambodja, niet in Thailand. Het is het grootste religieuze monument ter wereld."
      }
    },
    {
      id: 'geo_93',
      question: {
        en: "The Gulf Stream is a warm ocean current in the Atlantic Ocean.",
        es: "La Corriente del Golfo es una corriente oceánica cálida en el Océano Atlántico.",
        de: "Der Golfstrom ist eine warme Meeresströmung im Atlantischen Ozean.",
        nl: "De Golfstroom is een warme oceaanstroom in de Atlantische Oceaan."
      },
      isTrue: true,
      explanation: {
        en: "The Gulf Stream is a powerful warm ocean current that originates in the Gulf of Mexico and flows through the Atlantic Ocean.",
        es: "La Corriente del Golfo es una poderosa corriente oceánica cálida que se origina en el Golfo de México y fluye a través del Océano Atlántico.",
        de: "Der Golfstrom ist eine starke warme Meeresströmung, die im Golf von Mexiko entspringt und durch den Atlantischen Ozean fließt.",
        nl: "De Golfstroom is een krachtige warme oceaanstroom die ontstaat in de Golf van Mexico en door de Atlantische Oceaan stroomt."
      }
    },
    {
      id: 'geo_94',
      question: {
        en: "The Sahara is expanding into the Mediterranean Sea.",
        es: "El Sahara se está expandiendo hacia el Mar Mediterráneo.",
        de: "Die Sahara dehnt sich ins Mittelmeer aus.",
        nl: "De Sahara breidt zich uit naar de Middellandse Zee."
      },
      isTrue: false,
      explanation: {
        en: "The Sahara is expanding southward into the Sahel region, not northward into the Mediterranean Sea.",
        es: "El Sahara se está expandiendo hacia el sur en la región del Sahel, no hacia el norte en el Mar Mediterráneo.",
        de: "Die Sahara dehnt sich nach Süden in die Sahelzone aus, nicht nach Norden ins Mittelmeer.",
        nl: "De Sahara breidt zich zuidwaarts uit in de Sahel-regio, niet noordwaarts naar de Middellandse Zee."
      }
    },
    {
      id: 'geo_95',
      question: {
        en: "The Serengeti National Park is famous for animal migrations.",
        es: "El Parque Nacional Serengeti es famoso por las migraciones de animales.",
        de: "Der Serengeti-Nationalpark ist berühmt für Tierwanderungen.",
        nl: "Het Serengeti National Park staat bekend om dierenmigraties."
      },
      isTrue: true,
      explanation: {
        en: "The Serengeti in Tanzania is famous for the annual migration of millions of wildebeest and other animals.",
        es: "El Serengeti en Tanzania es famoso por la migración anual de millones de ñus y otros animales.",
        de: "Die Serengeti in Tansania ist berühmt für die jährliche Wanderung von Millionen von Gnus und anderen Tieren.",
        nl: "Het Serengeti in Tanzania staat bekend om de jaarlijkse migratie van miljoenen gnoes en andere dieren."
      }
    },
    {
      id: 'geo_96',
      question: {
        en: "The Rock of Gibraltar belongs to Spain.",
        es: "El Peñón de Gibraltar pertenece a España.",
        de: "Der Felsen von Gibraltar gehört zu Spanien.",
        nl: "De Rots van Gibraltar behoort toe aan Spanje."
      },
      isTrue: false,
      explanation: {
        en: "The Rock of Gibraltar is a British Overseas Territory, not part of Spain, though Spain claims sovereignty over it.",
        es: "El Peñón de Gibraltar es un Territorio Británico de Ultramar, no parte de España, aunque España reclama soberanía sobre él.",
        de: "Der Felsen von Gibraltar ist ein britisches Überseegebiet, kein Teil Spaniens, obwohl Spanien die Souveränität darüber beansprucht.",
        nl: "De Rots van Gibraltar is een Brits Overzees Gebied, geen deel van Spanje, hoewel Spanje er soevereiniteit over claimt."
      }
    },
    {
      id: 'geo_97',
      question: {
        en: "The Pampas grasslands are located in Argentina.",
        es: "Las praderas de las Pampas están ubicadas en Argentina.",
        de: "Die Pampas-Graslandschaften befinden sich in Argentinien.",
        nl: "De Pampas-graslanden liggen in Argentinië."
      },
      isTrue: true,
      explanation: {
        en: "The Pampas are fertile lowland plains covering parts of Argentina, Uruguay, and Brazil, with the largest portion in Argentina.",
        es: "Las Pampas son llanuras fértiles de tierras bajas que cubren partes de Argentina, Uruguay y Brasil, con la mayor porción en Argentina.",
        de: "Die Pampas sind fruchtbare Tieflandebenen, die Teile von Argentinien, Uruguay und Brasilien bedecken, wobei der größte Teil in Argentinien liegt.",
        nl: "De Pampas zijn vruchtbare laaglandvlakten die delen van Argentinië, Uruguay en Brazilië bedekken, waarbij het grootste deel in Argentinië ligt."
      }
    },
    {
      id: 'geo_98',
      question: {
        en: "The Silk Road was an actual paved road.",
        es: "La Ruta de la Seda era un camino pavimentado real.",
        de: "Die Seidenstraße war eine tatsächliche gepflasterte Straße.",
        nl: "De Zijderoute was een echte verharde weg."
      },
      isTrue: false,
      explanation: {
        en: "The Silk Road was not a single paved road, but a network of trade routes connecting East Asia with the Mediterranean.",
        es: "La Ruta de la Seda no era un solo camino pavimentado, sino una red de rutas comerciales que conectaban Asia Oriental con el Mediterráneo.",
        de: "Die Seidenstraße war keine einzelne gepflasterte Straße, sondern ein Netzwerk von Handelsrouten, die Ostasien mit dem Mittelmeer verbanden.",
        nl: "De Zijderoute was geen enkele verharde weg, maar een netwerk van handelsroutes die Oost-Azië verbonden met het Middellandse Zeegebied."
      }
    },
    {
      id: 'geo_99',
      question: {
        en: "The Kalahari Desert is located in southern Africa.",
        es: "El desierto de Kalahari está ubicado en el sur de África.",
        de: "Die Kalahari-Wüste befindet sich im südlichen Afrika.",
        nl: "De Kalahari-woestijn ligt in zuidelijk Afrika."
      },
      isTrue: true,
      explanation: {
        en: "The Kalahari Desert is a large semi-arid sandy savanna in southern Africa, covering parts of Botswana, Namibia, and South Africa.",
        es: "El desierto de Kalahari es una gran sabana arenosa semiárida en el sur de África, cubriendo partes de Botsuana, Namibia y Sudáfrica.",
        de: "Die Kalahari-Wüste ist eine große halbtrockene sandige Savanne im südlichen Afrika, die Teile von Botswana, Namibia und Südafrika bedeckt.",
        nl: "De Kalahari-woestijn is een grote semi-aride zandachtige savanne in zuidelijk Afrika, die delen van Botswana, Namibië en Zuid-Afrika bedekt."
      }
    },
    {
      id: 'geo_100',
      question: {
        en: "Lake Titicaca is the highest navigable lake in the world.",
        es: "El Lago Titicaca es el lago navegable más alto del mundo.",
        de: "Der Titicacasee ist der höchstgelegene schiffbare See der Welt.",
        nl: "Het Titicacameer is het hoogst bevaarbare meer ter wereld."
      },
      isTrue: true,
      explanation: {
        en: "Lake Titicaca, located in the Andes on the border of Peru and Bolivia, is the highest navigable lake in the world at about 3,812 meters above sea level.",
        es: "El Lago Titicaca, ubicado en los Andes en la frontera de Perú y Bolivia, es el lago navegable más alto del mundo a unos 3,812 metros sobre el nivel del mar.",
        de: "Der Titicacasee in den Anden an der Grenze zwischen Peru und Bolivien ist mit etwa 3.812 Metern über dem Meeresspiegel der höchstgelegene schiffbare See der Welt.",
        nl: "Het Titicacameer, gelegen in de Andes op de grens van Peru en Bolivia, is het hoogst bevaarbare meer ter wereld op ongeveer 3.812 meter boven zeeniveau."
      }
    }
  ];

  // Export to window
  window.trueFalseCategories = window.trueFalseCategories || {};
  window.trueFalseCategories['geography'] = geographyQuestions;

  console.log(`Loaded ${geographyQuestions.length} geography true/false questions`);

})();
