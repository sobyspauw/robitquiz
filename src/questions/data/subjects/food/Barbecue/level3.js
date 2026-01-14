// Barbecue Quiz - Level 3
(function() {
  const level3 = {
    name: {
          "en": "Barbecue Level 3",
          "es": "Barbacoa Nivel 3",
          "de": "Grillen Stufe 3",
          "nl": "Barbecue Level 3"
    },
    questions: [
      {
        question: {
                  "en": "What is the '3-2-1 method' for ribs?",
                  "es": "¿Qué es el método '3-2-1' para costillas?",
                  "de": "Was ist die '3-2-1 Methode' für Rippchen?",
                  "nl": "Wat is de '3-2-1 methode' voor spareribs?"
        },
        options: [
        {
                  "en": "3 types wood, 2 temps, 1 sauce",
                  "es": "3 tipos de madera, 2 temperaturas, 1 salsa",
                  "de": "3 Holzarten, 2 Temperaturen, 1 Sauce",
                  "nl": "3 soorten hout, 2 temperaturen, 1 saus"
        },
        {
                  "en": "3 hrs smoke, 2 hrs wrapped, 1 hr unwrapped",
                  "es": "3 hrs ahumar, 2 hrs envuelto, 1 hr sin envolver",
                  "de": "3 Std räuchern, 2 Std eingewickelt, 1 Std ausgewickelt",
                  "nl": "3 uur roken, 2 uur ingepakt, 1 uur uitgepakt"
        },
        {
                  "en": "3 days marinate, 2 hrs cook, 1 hr rest",
                  "es": "3 días marinar, 2 hrs cocinar, 1 hr reposar",
                  "de": "3 Tage marinieren, 2 Std kochen, 1 Std ruhen",
                  "nl": "3 dagen marineren, 2 uur koken, 1 uur rusten"
        },
        {
                  "en": "3 lbs ribs, 2 hrs prep, 1 hr grill",
                  "es": "3 libras costillas, 2 hrs preparación, 1 hr parrilla",
                  "de": "3 Pfund Rippchen, 2 Std Vorbereitung, 1 Std Grill",
                  "nl": "3 pond ribs, 2 uur prep, 1 uur grill"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The 3-2-1 method is popular for spare ribs: 3 hours smoking unwrapped, 2 hours wrapped in foil with liquid, 1 hour unwrapped to firm up.",
                  "es": "El método 3-2-1 es popular para costillas: 3 horas ahumando sin envolver, 2 horas envueltas en papel aluminio con líquido, 1 hora sin envolver para que se endurezcan.",
                  "de": "Die 3-2-1 Methode ist beliebt für Spare Ribs: 3 Stunden räuchern unverpackt, 2 Stunden in Folie mit Flüssigkeit, 1 Stunde unverpackt zum Festigen.",
                  "nl": "De 3-2-1 methode is populair voor spareribs: 3 uur roken ongepakt, 2 uur ingepakt in folie met vloeistof, 1 uur uitgepakt om te verstevigen."
        }
      },
      {
        question: {
                  "en": "What is the ideal internal temp for beef brisket?",
                  "es": "¿Cuál es la temperatura interna ideal para el pecho de res?",
                  "de": "Was ist die ideale Kerntemperatur für Beef Brisket?",
                  "nl": "Wat is de ideale kerntemperatuur voor beef brisket?"
        },
        options: [
        {
                  "en": "145-155°F (63-68°C)",
                  "es": "145-155°F (63-68°C)",
                  "de": "145-155°F (63-68°C)",
                  "nl": "145-155°F (63-68°C)"
        },
        {
                  "en": "165-175°F (74-79°C)",
                  "es": "165-175°F (74-79°C)",
                  "de": "165-175°F (74-79°C)",
                  "nl": "165-175°F (74-79°C)"
        },
        {
                  "en": "195-205°F (90-96°C)",
                  "es": "195-205°F (90-96°C)",
                  "de": "195-205°F (90-96°C)",
                  "nl": "195-205°F (90-96°C)"
        },
        {
                  "en": "220-230°F (104-110°C)",
                  "es": "220-230°F (104-110°C)",
                  "de": "220-230°F (104-110°C)",
                  "nl": "220-230°F (104-110°C)"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Brisket should reach 195-205°F internally. At this temperature, collagen breaks down into gelatin, making the meat tender and juicy.",
                  "es": "El pecho debe alcanzar 195-205°F internamente. A esta temperatura, el colágeno se descompone en gelatina, haciendo que la carne sea tierna y jugosa.",
                  "de": "Brisket sollte intern 195-205°F erreichen. Bei dieser Temperatur wird Kollagen zu Gelatine abgebaut, was das Fleisch zart und saftig macht.",
                  "nl": "Brisket moet intern 195-205°F bereiken. Bij deze temperatuur breekt collageen af tot gelatine, waardoor het vlees mals en sappig wordt."
        }
      },
      {
        question: {
                  "en": "What does 'the stall' refer to in BBQ?",
                  "es": "¿A qué se refiere 'el estancamiento' en BBQ?",
                  "de": "Was bedeutet 'das Plateau' beim BBQ?",
                  "nl": "Waar verwijst 'the stall' naar bij BBQ?"
        },
        options: [
        {
                  "en": "BBQ stand location",
                  "es": "Ubicación del puesto de BBQ",
                  "de": "BBQ-Stand-Standort",
                  "nl": "BBQ-kraam locatie"
        },
        {
                  "en": "Meat temp plateaus during cooking",
                  "es": "La temperatura de la carne se estanca durante la cocción",
                  "de": "Fleischtemperatur stagniert während des Garens",
                  "nl": "Vleestemperatuur stagneert tijdens het koken"
        },
        {
                  "en": "Running out of charcoal",
                  "es": "Quedarse sin carbón",
                  "de": "Holzkohle geht aus",
                  "nl": "Door houtskool heen raken"
        },
        {
                  "en": "Smoke production stops",
                  "es": "La producción de humo se detiene",
                  "de": "Rauchproduktion stoppt",
                  "nl": "Rookproductie stopt"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The stall occurs when meat temp plateaus (usually 150-170°F) due to evaporative cooling. The Texas crutch (wrapping) helps push through it.",
                  "es": "El estancamiento ocurre cuando la temperatura de la carne se estanca (usualmente 150-170°F) debido al enfriamiento evaporativo. El método Texas (envolver) ayuda a superarlo.",
                  "de": "Das Plateau tritt auf, wenn die Fleischtemperatur stagniert (meist 150-170°F) durch Verdunstungskühlung. Die Texas-Krücke (Einwickeln) hilft, es zu überwinden.",
                  "nl": "The stall treedt op wanneer de vleestemperatuur stagneert (meestal 150-170°F) door verdampingskoeling. De Texas crutch (inwikkelen) helpt om erdoorheen te komen."
        }
      },
      {
        question: {
                  "en": "What type of ribs are 'St. Louis style'?",
                  "es": "¿Qué tipo de costillas son 'estilo St. Louis'?",
                  "de": "Welche Art von Rippchen sind 'St. Louis Style'?",
                  "nl": "Wat voor soort spareribs zijn 'St. Louis style'?"
        },
        options: [
        {
                  "en": "Beef short ribs",
                  "es": "Costillas cortas de res",
                  "de": "Beef Short Ribs",
                  "nl": "Beef short ribs"
        },
        {
                  "en": "Trimmed spare ribs, rectangular",
                  "es": "Costillas recortadas, rectangulares",
                  "de": "Zugeschnittene Spare Ribs, rechteckig",
                  "nl": "Getrimde spare ribs, rechthoekig"
        },
        {
                  "en": "Baby back ribs",
                  "es": "Costillas baby back",
                  "de": "Baby Back Ribs",
                  "nl": "Baby back ribs"
        },
        {
                  "en": "Country style ribs",
                  "es": "Costillas estilo campestre",
                  "de": "Country Style Ribs",
                  "nl": "Country style ribs"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "St. Louis style ribs are spare ribs with the sternum bone, cartilage, and rib tips removed, creating a uniform rectangular rack.",
                  "es": "Las costillas estilo St. Louis son costillas con el hueso del esternón, cartílago y puntas removidos, creando una parrilla rectangular uniforme.",
                  "de": "St. Louis Style Ribs sind Spare Ribs mit entferntem Brustbein, Knorpel und Rippenspitzen, was ein gleichmäßiges rechteckiges Rack ergibt.",
                  "nl": "St. Louis style spareribs zijn spare ribs waarbij het borstbeen, kraakbeen en ribpunten verwijderd zijn, wat een uniform rechthoekig rek oplevert."
        }
      },
      {
        question: {
                  "en": "What is 'bark' on smoked meat?",
                  "es": "¿Qué es la 'corteza' en carne ahumada?",
                  "de": "Was ist 'Bark' auf geräuchertem Fleisch?",
                  "nl": "Wat is 'bark' op gerookt vlees?"
        },
        options: [
        {
                  "en": "Tree bark used for smoking",
                  "es": "Corteza de árbol usada para ahumar",
                  "de": "Baumrinde zum Räuchern",
                  "nl": "Boomschors gebruikt voor roken"
        },
        {
                  "en": "Charred fat layer",
                  "es": "Capa de grasa carbonizada",
                  "de": "Verkohlte Fettschicht",
                  "nl": "Verkoold vetlaag"
        },
        {
                  "en": "Burnt outer layer",
                  "es": "Capa exterior quemada",
                  "de": "Verbrannte Außenschicht",
                  "nl": "Verbrande buitenlaag"
        },
        {
                  "en": "Flavorful dark crust from smoke/rub",
                  "es": "Corteza oscura sabrosa del humo/condimento",
                  "de": "Geschmackvolle dunkle Kruste von Rauch/Rub",
                  "nl": "Smaakvolle donkere korst van rook/rub"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Bark is the dark, flavorful crust that forms on smoked meat from the interaction of smoke, rub spices, and rendered fat during low and slow cooking.",
                  "es": "La corteza es la costra oscura y sabrosa que se forma en la carne ahumada por la interacción del humo, especias del condimento y grasa derretida durante cocción lenta.",
                  "de": "Bark ist die dunkle, geschmackvolle Kruste, die sich auf geräuchertem Fleisch durch die Interaktion von Rauch, Rub-Gewürzen und ausgelassenem Fett beim langsamen Garen bildet.",
                  "nl": "Bark is de donkere, smaakvolle korst die zich vormt op gerookt vlees door de interactie van rook, rub-kruiden en gesmolten vet tijdens langzaam garen."
        }
      },
      {
        question: {
                  "en": "What is a 'rub' in barbecue terminology?",
                  "es": "¿Qué es un 'rub' en terminología de barbacoa?",
                  "de": "Was ist ein 'Rub' in BBQ-Terminologie?",
                  "nl": "Wat is een 'rub' in barbecue-terminologie?"
        },
        options: [
        {
                  "en": "BBQ sauce application method",
                  "es": "Método de aplicación de salsa BBQ",
                  "de": "BBQ-Sauce-Auftragsmethode",
                  "nl": "BBQ-saus aanbrengen methode"
        },
        {
                  "en": "Cleaning the grill grates",
                  "es": "Limpiar las parrillas",
                  "de": "Grillroste reinigen",
                  "nl": "Grillroosters schoonmaken"
        },
        {
                  "en": "Massage technique for tenderizing",
                  "es": "Técnica de masaje para ablandar",
                  "de": "Massage-Technik zum Zartmachen",
                  "nl": "Massagetechniek om mals te maken"
        },
        {
                  "en": "Dry spice mixture applied to meat",
                  "es": "Mezcla de especias secas aplicada a la carne",
                  "de": "Trockene Gewürzmischung auf Fleisch aufgetragen",
                  "nl": "Droge kruidenmix aangebracht op vlees"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A rub is a dry mixture of spices, herbs, salt, and sugar applied to meat before cooking. It creates flavor and helps form the bark.",
                  "es": "Un rub es una mezcla seca de especias, hierbas, sal y azúcar aplicada a la carne antes de cocinar. Crea sabor y ayuda a formar la corteza.",
                  "de": "Ein Rub ist eine trockene Mischung aus Gewürzen, Kräutern, Salz und Zucker, die vor dem Garen auf Fleisch aufgetragen wird. Er erzeugt Geschmack und hilft, die Bark zu bilden.",
                  "nl": "Een rub is een droge mix van kruiden, specerijen, zout en suiker aangebracht op vlees voor het koken. Het creëert smaak en helpt de bark te vormen."
        }
      },
      {
        question: {
                  "en": "What are 'baby back ribs'?",
                  "es": "¿Qué son las 'costillas baby back'?",
                  "de": "Was sind 'Baby Back Ribs'?",
                  "nl": "Wat zijn 'baby back ribs'?"
        },
        options: [
        {
                  "en": "Small beef ribs",
                  "es": "Costillas de res pequeñas",
                  "de": "Kleine Rinderrippchen",
                  "nl": "Kleine rundvlees ribben"
        },
        {
                  "en": "Ribs from young pigs",
                  "es": "Costillas de cerdos jóvenes",
                  "de": "Rippen von jungen Schweinen",
                  "nl": "Ribben van jonge varkens"
        },
        {
                  "en": "Shorter ribs from loin area",
                  "es": "Costillas más cortas del área del lomo",
                  "de": "Kürzere Rippen aus dem Lendenbereich",
                  "nl": "Kortere ribben uit de lendenstreek"
        },
        {
                  "en": "Lower back spare ribs",
                  "es": "Costillas de la espalda baja",
                  "de": "Untere Rücken Spare Ribs",
                  "nl": "Onderrug spare ribs"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Baby back ribs come from the upper part of the pig's rib cage near the spine, connected to the loin. They're shorter and more curved than spare ribs.",
                  "es": "Las costillas baby back provienen de la parte superior de la caja torácica del cerdo cerca de la columna, conectadas al lomo. Son más cortas y curvas que las spare ribs.",
                  "de": "Baby Back Ribs stammen aus dem oberen Teil des Schweinerippenkäfigs nahe der Wirbelsäule, verbunden mit dem Lendenstück. Sie sind kürzer und gebogener als Spare Ribs.",
                  "nl": "Baby back ribs komen van het bovenste deel van de ribbenkast van het varken bij de ruggengraat, verbonden met de lende. Ze zijn korter en meer gebogen dan spare ribs."
        }
      },
      {
        question: {
                  "en": "What is a 'water pan' used for in smoking?",
                  "es": "¿Para qué se usa una 'bandeja de agua' al ahumar?",
                  "de": "Wofür wird eine 'Wasserschale' beim Räuchern verwendet?",
                  "nl": "Waarvoor wordt een 'waterpan' gebruikt bij roken?"
        },
        options: [
        {
                  "en": "Maintain moisture and stable temp",
                  "es": "Mantener humedad y temperatura estable",
                  "de": "Feuchtigkeit und stabile Temperatur aufrechterhalten",
                  "nl": "Vocht en stabiele temperatuur handhaven"
        },
        {
                  "en": "Extinguish flare-ups",
                  "es": "Extinguir llamaradas",
                  "de": "Stichflammen löschen",
                  "nl": "Vlammen blussen"
        },
        {
                  "en": "Clean the smoker",
                  "es": "Limpiar el ahumador",
                  "de": "Den Smoker reinigen",
                  "nl": "De smoker schoonmaken"
        },
        {
                  "en": "Flavor the smoke",
                  "es": "Dar sabor al humo",
                  "de": "Den Rauch würzen",
                  "nl": "De rook op smaak brengen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A water pan helps maintain moisture in the cooking environment and stabilizes temperature by acting as a heat sink. Some pitmasters add apple juice or beer for extra flavor.",
                  "es": "Una bandeja de agua ayuda a mantener la humedad en el ambiente de cocción y estabiliza la temperatura actuando como disipador de calor. Algunos añaden jugo de manzana o cerveza para sabor extra.",
                  "de": "Eine Wasserschale hilft, Feuchtigkeit in der Garatmosphäre zu erhalten und stabilisiert die Temperatur, indem sie als Wärmespeicher fungiert. Manche fügen Apfelsaft oder Bier für extra Geschmack hinzu.",
                  "nl": "Een waterpan helpt vocht in de kookomgeving te handhaven en stabiliseert de temperatuur door als warmtebuffer te fungeren. Sommige pitmasters voegen appelsap of bier toe voor extra smaak."
        }
      },
      {
        question: {
                  "en": "What is 'Kansas City style' BBQ known for?",
                  "es": "¿Por qué es conocido el BBQ 'estilo Kansas City'?",
                  "de": "Wofür ist 'Kansas City Style' BBQ bekannt?",
                  "nl": "Waar staat 'Kansas City style' BBQ om bekend?"
        },
        options: [
        {
                  "en": "No sauce, dry rub only",
                  "es": "Sin salsa, solo condimento seco",
                  "de": "Keine Sauce, nur trockener Rub",
                  "nl": "Geen saus, alleen droge rub"
        },
        {
                  "en": "Mustard-based sauce",
                  "es": "Salsa a base de mostaza",
                  "de": "Senf-basierte Sauce",
                  "nl": "Mosterd-gebaseerde saus"
        },
        {
                  "en": "Vinegar-based sauce",
                  "es": "Salsa a base de vinagre",
                  "de": "Essig-basierte Sauce",
                  "nl": "Azijn-gebaseerde saus"
        },
        {
                  "en": "Thick, sweet tomato-based sauce",
                  "es": "Salsa espesa y dulce a base de tomate",
                  "de": "Dicke, süße Tomaten-Sauce",
                  "nl": "Dikke, zoete tomatensaus"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Kansas City BBQ is famous for its thick, sweet, tomato-based sauce. They smoke a variety of meats and typically use hickory wood.",
                  "es": "El BBQ de Kansas City es famoso por su salsa espesa, dulce y a base de tomate. Ahúman una variedad de carnes y típicamente usan madera de nogal.",
                  "de": "Kansas City BBQ ist berühmt für seine dicke, süße, Tomaten-basierte Sauce. Sie räuchern verschiedene Fleischsorten und verwenden typischerweise Hickory-Holz.",
                  "nl": "Kansas City BBQ staat bekend om zijn dikke, zoete, tomatensaus. Ze roken diverse vleessoorten en gebruiken meestal hickory hout."
        }
      },
      {
        question: {
                  "en": "What is 'mopping' in BBQ?",
                  "es": "¿Qué es 'mopping' en BBQ?",
                  "de": "Was ist 'Mopping' beim BBQ?",
                  "nl": "Wat is 'mopping' bij BBQ?"
        },
        options: [
        {
                  "en": "Cleaning the smoker grates",
                  "es": "Limpiar las parrillas del ahumador",
                  "de": "Die Smoker-Roste reinigen",
                  "nl": "De smoker roosters schoonmaken"
        },
        {
                  "en": "Basting meat with thin sauce during cooking",
                  "es": "Rociar carne con salsa fina durante la cocción",
                  "de": "Fleisch während des Garens mit dünner Sauce bestreichen",
                  "nl": "Vlees begieten met dunne saus tijdens het koken"
        },
        {
                  "en": "Wrapping meat in foil",
                  "es": "Envolver carne en papel aluminio",
                  "de": "Fleisch in Folie wickeln",
                  "nl": "Vlees in folie wikkelen"
        },
        {
                  "en": "Removing excess fat",
                  "es": "Eliminar grasa excesiva",
                  "de": "Überschüssiges Fett entfernen",
                  "nl": "Overtollig vet verwijderen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Mopping is applying a thin, vinegar-based liquid to meat during smoking using a BBQ mop. It adds moisture and flavor while helping develop bark.",
                  "es": "Mopping es aplicar un líquido fino a base de vinagre a la carne durante el ahumado usando una brocha. Añade humedad y sabor mientras ayuda a desarrollar la corteza.",
                  "de": "Mopping ist das Auftragen einer dünnen, Essig-basierten Flüssigkeit auf Fleisch während des Räucherns mit einem BBQ-Mop. Es fügt Feuchtigkeit und Geschmack hinzu und hilft, Bark zu entwickeln.",
                  "nl": "Mopping is het aanbrengen van een dunne, azijn-gebaseerde vloeistof op vlees tijdens het roken met een BBQ-mop. Het voegt vocht en smaak toe en helpt bark te ontwikkelen."
        }
      },
      {
        question: {
                  "en": "What temp is the 'danger zone' for meat?",
                  "es": "¿Qué temperatura es la 'zona de peligro' para la carne?",
                  "de": "Welche Temperatur ist die 'Gefahrenzone' für Fleisch?",
                  "nl": "Welke temperatuur is de 'gevarenzone' voor vlees?"
        },
        options: [
        {
                  "en": "140-200°F (60-93°C)",
                  "es": "140-200°F (60-93°C)",
                  "de": "140-200°F (60-93°C)",
                  "nl": "140-200°F (60-93°C)"
        },
        {
                  "en": "200-300°F (93-149°C)",
                  "es": "200-300°F (93-149°C)",
                  "de": "200-300°F (93-149°C)",
                  "nl": "200-300°F (93-149°C)"
        },
        {
                  "en": "0-32°F (-18-0°C)",
                  "es": "0-32°F (-18-0°C)",
                  "de": "0-32°F (-18-0°C)",
                  "nl": "0-32°F (-18-0°C)"
        },
        {
                  "en": "40-140°F (4-60°C)",
                  "es": "40-140°F (4-60°C)",
                  "de": "40-140°F (4-60°C)",
                  "nl": "40-140°F (4-60°C)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The danger zone is 40-140°F where bacteria multiply rapidly. Keep meat out of this range - either cold storage below 40°F or cooking above 140°F.",
                  "es": "La zona de peligro es 40-140°F donde las bacterias se multiplican rápidamente. Mantenga la carne fuera de este rango - ya sea almacenamiento frío bajo 40°F o cocción sobre 140°F.",
                  "de": "Die Gefahrenzone ist 40-140°F, wo sich Bakterien schnell vermehren. Halten Sie Fleisch außerhalb dieses Bereichs - entweder kalte Lagerung unter 40°F oder Garen über 140°F.",
                  "nl": "De gevarenzone is 40-140°F waar bacteriën zich snel vermenigvuldigen. Houd vlees buiten dit bereik - koude opslag onder 40°F of koken boven 140°F."
        }
      },
      {
        question: {
                  "en": "What is 'Texas crutch' technique?",
                  "es": "¿Qué es la técnica 'Texas crutch'?",
                  "de": "Was ist die 'Texas Crutch' Technik?",
                  "nl": "Wat is de 'Texas crutch' techniek?"
        },
        options: [
        {
                  "en": "Dual fuel source smoking",
                  "es": "Ahumar con doble fuente de combustible",
                  "de": "Räuchern mit doppelter Brennstoffquelle",
                  "nl": "Roken met dubbele brandstofbron"
        },
        {
                  "en": "Wrapping meat in foil during cook",
                  "es": "Envolver carne en papel aluminio durante cocción",
                  "de": "Fleisch in Folie während des Garens wickeln",
                  "nl": "Vlees in folie wikkelen tijdens het koken"
        },
        {
                  "en": "Using two thermometers",
                  "es": "Usar dos termómetros",
                  "de": "Zwei Thermometer verwenden",
                  "nl": "Twee thermometers gebruiken"
        },
        {
                  "en": "Resting meat on two racks",
                  "es": "Reposar carne en dos parrillas",
                  "de": "Fleisch auf zwei Rosten ruhen lassen",
                  "nl": "Vlees op twee roosters laten rusten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Texas crutch involves wrapping meat in foil (or butcher paper) during the stall to speed cooking and retain moisture. It's controversial as it can soften bark.",
                  "es": "La Texas crutch implica envolver la carne en papel aluminio (o papel de carnicero) durante el estancamiento para acelerar la cocción y retener humedad. Es controversial ya que puede ablandar la corteza.",
                  "de": "Die Texas Crutch beinhaltet das Einwickeln von Fleisch in Folie (oder Metzgerpapier) während des Plateaus, um das Garen zu beschleunigen und Feuchtigkeit zu erhalten. Es ist umstritten, da es die Bark weich machen kann.",
                  "nl": "De Texas crutch houdt in dat vlees in folie (of slagerspapier) wordt gewikkeld tijdens the stall om het koken te versnellen en vocht vast te houden. Het is controversieel omdat het bark kan verzachten."
        }
      },
      {
        question: {
                  "en": "What is 'pulled pork' traditionally made from?",
                  "es": "¿De qué se hace tradicionalmente el 'pulled pork'?",
                  "de": "Woraus wird 'Pulled Pork' traditionell gemacht?",
                  "nl": "Waarvan wordt 'pulled pork' traditioneel gemaakt?"
        },
        options: [
        {
                  "en": "Pork chops",
                  "es": "Chuletas de cerdo",
                  "de": "Schweinekoteletts",
                  "nl": "Varkenskoteletjes"
        },
        {
                  "en": "Pork shoulder (Boston butt)",
                  "es": "Paleta de cerdo (Boston butt)",
                  "de": "Schweineschulter (Boston Butt)",
                  "nl": "Varkensschouder (Boston butt)"
        },
        {
                  "en": "Pork tenderloin",
                  "es": "Solomillo de cerdo",
                  "de": "Schweinefilet",
                  "nl": "Varkenshaas"
        },
        {
                  "en": "Pork loin",
                  "es": "Lomo de cerdo",
                  "de": "Schweinelende",
                  "nl": "Varkenslende"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Pulled pork is made from pork shoulder (Boston butt), which has enough fat and connective tissue to stay moist during long smoking and shred easily.",
                  "es": "El pulled pork se hace de la paleta de cerdo (Boston butt), que tiene suficiente grasa y tejido conectivo para mantenerse húmeda durante el ahumado largo y desmenuzarse fácilmente.",
                  "de": "Pulled Pork wird aus Schweineschulter (Boston Butt) gemacht, die genug Fett und Bindegewebe hat, um beim langen Räuchern saftig zu bleiben und sich leicht zu zerfasern.",
                  "nl": "Pulled pork wordt gemaakt van varkensschouder (Boston butt), die genoeg vet en bindweefsel heeft om vochtig te blijven tijdens lang roken en makkelijk te verkruimelen."
        }
      },
      {
        question: {
                  "en": "What is a 'chimney starter' used for?",
                  "es": "¿Para qué se usa un 'chimney starter'?",
                  "de": "Wofür wird ein 'Anzündkamin' verwendet?",
                  "nl": "Waarvoor wordt een 'chimney starter' gebruikt?"
        },
        options: [
        {
                  "en": "Venting smoke from smoker",
                  "es": "Ventilar humo del ahumador",
                  "de": "Rauch aus dem Smoker lüften",
                  "nl": "Rook uit de smoker ventileren"
        },
        {
                  "en": "Cleaning chimney buildup",
                  "es": "Limpiar acumulación de chimenea",
                  "de": "Kamin-Ablagerungen reinigen",
                  "nl": "Schoorsteenophoping schoonmaken"
        },
        {
                  "en": "Starting wood fires",
                  "es": "Encender fuegos de leña",
                  "de": "Holzfeuer anzünden",
                  "nl": "Houtvuren aansteken"
        },
        {
                  "en": "Lighting charcoal quickly and evenly",
                  "es": "Encender carbón rápida y uniformemente",
                  "de": "Holzkohle schnell und gleichmäßig anzünden",
                  "nl": "Houtskool snel en gelijkmatig aansteken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A chimney starter is a metal cylinder that uses newspaper and airflow to quickly and evenly light charcoal without lighter fluid, providing better flavor.",
                  "es": "Un chimney starter es un cilindro metálico que usa periódico y flujo de aire para encender carbón rápida y uniformemente sin líquido encendedor, proporcionando mejor sabor.",
                  "de": "Ein Anzündkamin ist ein Metallzylinder, der Zeitungspapier und Luftstrom verwendet, um Holzkohle schnell und gleichmäßig ohne Grillanzünder anzuzünden und besseren Geschmack bietet.",
                  "nl": "Een chimney starter is een metalen cilinder die krantenpapier en luchtstroom gebruikt om houtskool snel en gelijkmatig aan te steken zonder aanmaakblokjes, wat betere smaak oplevert."
        }
      },
      {
        question: {
                  "en": "What does 'rendering' mean in BBQ?",
                  "es": "¿Qué significa 'rendering' en BBQ?",
                  "de": "Was bedeutet 'Rendering' beim BBQ?",
                  "nl": "Wat betekent 'rendering' bij BBQ?"
        },
        options: [
        {
                  "en": "Smoke flavor absorption",
                  "es": "Absorción de sabor a humo",
                  "de": "Rauchgeschmack-Absorption",
                  "nl": "Rooksmaak absorptie"
        },
        {
                  "en": "Serving the finished meat",
                  "es": "Servir la carne terminada",
                  "de": "Das fertige Fleisch servieren",
                  "nl": "Het afgewerkte vlees serveren"
        },
        {
                  "en": "Melting fat during cooking",
                  "es": "Derretir grasa durante la cocción",
                  "de": "Fett während des Garens schmelzen",
                  "nl": "Vet smelten tijdens het koken"
        },
        {
                  "en": "Temperature stabilization",
                  "es": "Estabilización de temperatura",
                  "de": "Temperaturstabilisierung",
                  "nl": "Temperatuurstabilisatie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Rendering is the process of fat melting and breaking down during cooking. Proper rendering makes meat tender and flavorful while fat bastes the meat.",
                  "es": "Rendering es el proceso de derretir y descomponer la grasa durante la cocción. Un rendering adecuado hace que la carne sea tierna y sabrosa mientras la grasa riega la carne.",
                  "de": "Rendering ist der Prozess des Schmelzens und Abbaus von Fett während des Garens. Richtiges Rendering macht Fleisch zart und geschmackvoll, während Fett das Fleisch begießt.",
                  "nl": "Rendering is het proces van vet smelten en afbreken tijdens het koken. Goed rendering maakt vlees mals en smaakvol terwijl vet het vlees begiet."
        }
      },
      {
        question: {
                  "en": "What is 'bark' primarily composed of?",
                  "es": "¿De qué está compuesta principalmente la 'corteza'?",
                  "de": "Woraus besteht 'Bark' hauptsächlich?",
                  "nl": "Waaruit bestaat 'bark' voornamelijk?"
        },
        options: [
        {
                  "en": "Rub spices, smoke, rendered fat",
                  "es": "Especias del condimento, humo, grasa derretida",
                  "de": "Rub-Gewürze, Rauch, ausgelassenes Fett",
                  "nl": "Rub kruiden, rook, gesmolten vet"
        },
        {
                  "en": "Burnt sugar glaze",
                  "es": "Glaseado de azúcar quemada",
                  "de": "Verbrannte Zuckerglasur",
                  "nl": "Verbrande suikerglazuur"
        },
        {
                  "en": "Charcoal ash coating",
                  "es": "Recubrimiento de ceniza de carbón",
                  "de": "Holzkohleasche-Beschichtung",
                  "nl": "Houtskoolaslaag"
        },
        {
                  "en": "Caramelized BBQ sauce",
                  "es": "Salsa BBQ caramelizada",
                  "de": "Karamellisierte BBQ-Sauce",
                  "nl": "Gekarameliseerde BBQ-saus"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Bark forms from the dry rub spices, smoke particles, and rendered fat combining during the Maillard reaction. It creates a flavorful, dark crust.",
                  "es": "La corteza se forma a partir de las especias del condimento seco, partículas de humo y grasa derretida combinándose durante la reacción de Maillard. Crea una costra oscura y sabrosa.",
                  "de": "Bark bildet sich aus den Dry-Rub-Gewürzen, Rauchpartikeln und ausgelassenem Fett, die sich während der Maillard-Reaktion verbinden. Es entsteht eine geschmackvolle, dunkle Kruste.",
                  "nl": "Bark vormt zich uit de dry rub kruiden, rookdeeltjes en gesmolten vet die zich combineren tijdens de Maillard-reactie. Het creëert een smaakvolle, donkere korst."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a 'resting period' after BBQ?",
                  "es": "¿Cuál es el propósito del 'período de reposo' después del BBQ?",
                  "de": "Was ist der Zweck einer 'Ruhezeit' nach dem BBQ?",
                  "nl": "Wat is het doel van een 'rustperiode' na BBQ?"
        },
        options: [
        {
                  "en": "Smoke flavor intensifies",
                  "es": "El sabor a humo se intensifica",
                  "de": "Rauchgeschmack intensiviert sich",
                  "nl": "Rooksmaak intensifieert"
        },
        {
                  "en": "Juices redistribute through meat",
                  "es": "Los jugos se redistribuyen por la carne",
                  "de": "Säfte verteilen sich im Fleisch",
                  "nl": "Sappen verdelen zich door het vlees"
        },
        {
                  "en": "Bark hardens further",
                  "es": "La corteza se endurece más",
                  "de": "Bark härtet weiter aus",
                  "nl": "Bark wordt harder"
        },
        {
                  "en": "Meat cools to safe temp",
                  "es": "La carne se enfría a temperatura segura",
                  "de": "Fleisch kühlt auf sichere Temperatur",
                  "nl": "Vlees koelt naar veilige temperatuur"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Resting allows juices to redistribute throughout the meat. Cutting immediately causes juices to run out, resulting in drier meat. Rest brisket 30-60 minutes.",
                  "es": "El reposo permite que los jugos se redistribuyan por toda la carne. Cortar inmediatamente hace que los jugos se escurran, resultando en carne más seca. Repose el pecho 30-60 minutos.",
                  "de": "Ruhen ermöglicht es den Säften, sich im Fleisch zu verteilen. Sofortiges Schneiden lässt Säfte auslaufen, was zu trockenerem Fleisch führt. Brisket 30-60 Minuten ruhen lassen.",
                  "nl": "Rusten laat sappen zich door het vlees verdelen. Direct snijden zorgt dat sappen eruit lopen, wat droger vlees oplevert. Laat brisket 30-60 minuten rusten."
        }
      },
      {
        question: {
                  "en": "What is a 'two-zone fire' setup?",
                  "es": "¿Qué es una configuración de 'fuego de dos zonas'?",
                  "de": "Was ist ein 'Zwei-Zonen-Feuer' Setup?",
                  "nl": "Wat is een 'two-zone fire' opstelling?"
        },
        options: [
        {
                  "en": "Front and back heat sources",
                  "es": "Fuentes de calor frontal y trasera",
                  "de": "Vordere und hintere Wärmequellen",
                  "nl": "Voor- en achterkant warmtebronnen"
        },
        {
                  "en": "Two temperature zones vertically",
                  "es": "Dos zonas de temperatura verticalmente",
                  "de": "Zwei Temperaturzonen vertikal",
                  "nl": "Twee temperatuurzones verticaal"
        },
        {
                  "en": "Two different wood types",
                  "es": "Dos tipos diferentes de madera",
                  "de": "Zwei verschiedene Holzarten",
                  "nl": "Twee verschillende houtsoorten"
        },
        {
                  "en": "Direct heat one side, indirect other",
                  "es": "Calor directo un lado, indirecto otro",
                  "de": "Direkte Hitze eine Seite, indirekte andere",
                  "nl": "Directe hitte één kant, indirecte andere"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A two-zone fire has coals on one side (direct heat for searing) and no coals on the other (indirect heat for slow cooking). This versatile setup is essential for BBQ.",
                  "es": "Un fuego de dos zonas tiene carbón en un lado (calor directo para sellar) y sin carbón en el otro (calor indirecto para cocción lenta). Esta configuración versátil es esencial para BBQ.",
                  "de": "Ein Zwei-Zonen-Feuer hat Kohlen auf einer Seite (direkte Hitze zum Anbraten) und keine Kohlen auf der anderen (indirekte Hitze zum langsamen Garen). Dieses vielseitige Setup ist wesentlich für BBQ.",
                  "nl": "Een two-zone fire heeft kolen aan één kant (directe hitte voor dichtschroeien) en geen kolen aan de andere kant (indirecte hitte voor langzaam garen). Deze veelzijdige opstelling is essentieel voor BBQ."
        }
      },
      {
        question: {
                  "en": "What is 'Memphis style' BBQ sauce?",
                  "es": "¿Qué es la salsa BBQ 'estilo Memphis'?",
                  "de": "Was ist 'Memphis Style' BBQ-Sauce?",
                  "nl": "Wat is 'Memphis style' BBQ-saus?"
        },
        options: [
        {
                  "en": "Mustard-based yellow sauce",
                  "es": "Salsa amarilla a base de mostaza",
                  "de": "Senf-basierte gelbe Sauce",
                  "nl": "Mosterd-gebaseerde gele saus"
        },
        {
                  "en": "No sauce, dry rub only",
                  "es": "Sin salsa, solo condimento seco",
                  "de": "Keine Sauce, nur trockener Rub",
                  "nl": "Geen saus, alleen droge rub"
        },
        {
                  "en": "Thick and sweet molasses",
                  "es": "Espesa y dulce de melaza",
                  "de": "Dick und süß mit Melasse",
                  "nl": "Dikke en zoete melasse"
        },
        {
                  "en": "Thin, tangy, tomato-vinegar based",
                  "es": "Fina, ácida, a base de tomate-vinagre",
                  "de": "Dünn, würzig, Tomaten-Essig basiert",
                  "nl": "Dunne, pittige, tomaat-azijn gebaseerd"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Memphis style uses a thin, tangy tomato-vinegar sauce. Memphis BBQ comes in two styles: 'dry' (just rub) and 'wet' (with sauce), both featuring pork ribs.",
                  "es": "El estilo Memphis usa una salsa fina y ácida de tomate-vinagre. El BBQ de Memphis viene en dos estilos: 'seco' (solo condimento) y 'húmedo' (con salsa), ambos con costillas de cerdo.",
                  "de": "Memphis Style verwendet eine dünne, würzige Tomaten-Essig-Sauce. Memphis BBQ gibt es in zwei Stilen: 'trocken' (nur Rub) und 'nass' (mit Sauce), beide mit Schweinerippchen.",
                  "nl": "Memphis style gebruikt een dunne, pittige tomaat-azijn saus. Memphis BBQ komt in twee stijlen: 'dry' (alleen rub) en 'wet' (met saus), beide met varkensribben."
        }
      },
      {
        question: {
                  "en": "What is the 'point' on a brisket?",
                  "es": "¿Qué es el 'point' en un pecho?",
                  "de": "Was ist der 'Point' bei einem Brisket?",
                  "nl": "Wat is de 'point' op een brisket?"
        },
        options: [
        {
                  "en": "Thicker, fattier muscle on top",
                  "es": "Músculo más grueso y graso en la parte superior",
                  "de": "Dickerer, fetterer Muskel oben",
                  "nl": "Dikkere, vettere spier bovenop"
        },
        {
                  "en": "Thinnest part of meat",
                  "es": "Parte más delgada de la carne",
                  "de": "Dünnster Teil des Fleisches",
                  "nl": "Dunste deel van het vlees"
        },
        {
                  "en": "Bone removed from brisket",
                  "es": "Hueso removido del pecho",
                  "de": "Knochen aus dem Brisket entfernt",
                  "nl": "Bot verwijderd uit brisket"
        },
        {
                  "en": "Tip of the flat muscle",
                  "es": "Punta del músculo plano",
                  "de": "Spitze des flachen Muskels",
                  "nl": "Punt van de platte spier"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The point (or deckle) is the thicker, fattier muscle on top of the brisket. It's often used for burnt ends. The flat underneath is leaner and slices cleanly.",
                  "es": "El point (o deckle) es el músculo más grueso y graso en la parte superior del pecho. A menudo se usa para burnt ends. El flat debajo es más magro y se corta limpiamente.",
                  "de": "Der Point (oder Deckle) ist der dickere, fettere Muskel oben auf dem Brisket. Er wird oft für Burnt Ends verwendet. Der Flat darunter ist magerer und lässt sich sauber schneiden.",
                  "nl": "De point (of deckle) is de dikkere, vettere spier bovenop de brisket. Het wordt vaak gebruikt voor burnt ends. De flat eronder is magerder en snijdt schoon."
        }
      },
      {
        question: {
                  "en": "What are 'burnt ends'?",
                  "es": "¿Qué son los 'burnt ends'?",
                  "de": "Was sind 'Burnt Ends'?",
                  "nl": "Wat zijn 'burnt ends'?"
        },
        options: [
        {
                  "en": "Crispy pork skin",
                  "es": "Piel de cerdo crujiente",
                  "de": "Knusprige Schweinehaut",
                  "nl": "Krokante varkenshuid"
        },
        {
                  "en": "Charred rib tips",
                  "es": "Puntas de costillas carbonizadas",
                  "de": "Verkohlte Rippenspitzen",
                  "nl": "Verkoold ribbenpunten"
        },
        {
                  "en": "Overcooked meat pieces",
                  "es": "Trozos de carne demasiado cocidos",
                  "de": "Zu lange gegarte Fleischstücke",
                  "nl": "Te gaar gekookte vleesstukken"
        },
        {
                  "en": "Cubed, seasoned brisket point",
                  "es": "Point del pecho cortado en cubos y sazonado",
                  "de": "Gewürfelter, gewürzter Brisket Point",
                  "nl": "Gedobbelde, gekruide brisket point"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Burnt ends are cubed pieces from the point of brisket, tossed in sauce and rub, then smoked further until caramelized. They're a Kansas City specialty.",
                  "es": "Los burnt ends son piezas en cubos del point del pecho, mezcladas en salsa y condimento, luego ahumadas más hasta caramelizar. Son una especialidad de Kansas City.",
                  "de": "Burnt Ends sind gewürfelte Stücke vom Point des Brisket, in Sauce und Rub gewendet, dann weiter geräuchert bis karamellisiert. Sie sind eine Kansas City Spezialität.",
                  "nl": "Burnt ends zijn gedobbelde stukjes van de point van brisket, gemengd in saus en rub, dan verder gerookt tot gekarameliseerd. Het is een Kansas City specialiteit."
        }
      },
      {
        question: {
                  "en": "What wood is NOT recommended for smoking meat?",
                  "es": "¿Qué madera NO se recomienda para ahumar carne?",
                  "de": "Welches Holz wird NICHT zum Räuchern von Fleisch empfohlen?",
                  "nl": "Welk hout wordt NIET aanbevolen voor het roken van vlees?"
        },
        options: [
        {
                  "en": "Apple",
                  "es": "Manzano",
                  "de": "Apfel",
                  "nl": "Appel"
        },
        {
                  "en": "Hickory",
                  "es": "Nogal",
                  "de": "Hickory",
                  "nl": "Hickory"
        },
        {
                  "en": "Pine (softwood, resinous)",
                  "es": "Pino (madera blanda, resinosa)",
                  "de": "Kiefer (Weichholz, harzig)",
                  "nl": "Den (zacht hout, harsachtig)"
        },
        {
                  "en": "Oak",
                  "es": "Roble",
                  "de": "Eiche",
                  "nl": "Eik"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Never use softwoods like pine, cedar, or fir - they contain resins that create toxic smoke and bitter flavors. Use hardwoods like oak, hickory, or fruitwoods.",
                  "es": "Nunca use maderas blandas como pino, cedro o abeto - contienen resinas que crean humo tóxico y sabores amargos. Use maderas duras como roble, nogal o frutales.",
                  "de": "Verwenden Sie niemals Weichhölzer wie Kiefer, Zeder oder Tanne - sie enthalten Harze, die giftigen Rauch und bittere Aromen erzeugen. Verwenden Sie Harthölzer wie Eiche, Hickory oder Obsthölzer.",
                  "nl": "Gebruik nooit zachte houtsoorten zoals den, ceder of spar - ze bevatten harsen die giftige rook en bittere smaken creëren. Gebruik hardhout zoals eik, hickory of fruitbomen."
        }
      },
      {
        question: {
                  "en": "What temp should pork ribs reach internally?",
                  "es": "¿Qué temperatura deben alcanzar las costillas de cerdo internamente?",
                  "de": "Welche Temperatur sollten Schweinerippchen intern erreichen?",
                  "nl": "Welke temperatuur moeten varkensribben intern bereiken?"
        },
        options: [
        {
                  "en": "165-175°F (74-79°C)",
                  "es": "165-175°F (74-79°C)",
                  "de": "165-175°F (74-79°C)",
                  "nl": "165-175°F (74-79°C)"
        },
        {
                  "en": "210-220°F (99-104°C)",
                  "es": "210-220°F (99-104°C)",
                  "de": "210-220°F (99-104°C)",
                  "nl": "210-220°F (99-104°C)"
        },
        {
                  "en": "190-203°F (88-95°C)",
                  "es": "190-203°F (88-95°C)",
                  "de": "190-203°F (88-95°C)",
                  "nl": "190-203°F (88-95°C)"
        },
        {
                  "en": "145-155°F (63-68°C)",
                  "es": "145-155°F (63-68°C)",
                  "de": "145-155°F (63-68°C)",
                  "nl": "145-155°F (63-68°C)"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Pork ribs are best at 190-203°F internally. At this temp, collagen breaks down and meat is tender but not falling off the bone (which is overcooked).",
                  "es": "Las costillas de cerdo están mejor a 190-203°F internamente. A esta temperatura, el colágeno se descompone y la carne está tierna pero no cayéndose del hueso (lo cual es demasiado cocido).",
                  "de": "Schweinerippchen sind am besten bei 190-203°F intern. Bei dieser Temperatur wird Kollagen abgebaut und das Fleisch ist zart, aber nicht vom Knochen fallend (was zu viel wäre).",
                  "nl": "Varkensribben zijn het beste op 190-203°F intern. Bij deze temperatuur breekt collageen af en is het vlees mals maar niet van het bot vallend (wat te gaar is)."
        }
      },
      {
        question: {
                  "en": "What is 'Carolina Gold' BBQ sauce?",
                  "es": "¿Qué es la salsa BBQ 'Carolina Gold'?",
                  "de": "Was ist 'Carolina Gold' BBQ-Sauce?",
                  "nl": "Wat is 'Carolina Gold' BBQ-saus?"
        },
        options: [
        {
                  "en": "Sweet corn-based sauce",
                  "es": "Salsa dulce a base de maíz",
                  "de": "Süße Mais-basierte Sauce",
                  "nl": "Zoete maïs-gebaseerde saus"
        },
        {
                  "en": "Butter and garlic sauce",
                  "es": "Salsa de mantequilla y ajo",
                  "de": "Butter-Knoblauch-Sauce",
                  "nl": "Boter-knoflooksaus"
        },
        {
                  "en": "Golden honey glaze",
                  "es": "Glaseado dorado de miel",
                  "de": "Goldene Honigglasur",
                  "nl": "Gouden honingglazuur"
        },
        {
                  "en": "Mustard-based sauce from SC",
                  "es": "Salsa a base de mostaza de Carolina del Sur",
                  "de": "Senf-basierte Sauce aus South Carolina",
                  "nl": "Mosterd-gebaseerde saus uit South Carolina"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Carolina Gold is a tangy, mustard-based sauce from South Carolina, typically with vinegar, brown sugar, and spices. It's especially popular with pulled pork.",
                  "es": "Carolina Gold es una salsa ácida a base de mostaza de Carolina del Sur, típicamente con vinagre, azúcar morena y especias. Es especialmente popular con pulled pork.",
                  "de": "Carolina Gold ist eine würzige, Senf-basierte Sauce aus South Carolina, typischerweise mit Essig, braunem Zucker und Gewürzen. Sie ist besonders beliebt bei Pulled Pork.",
                  "nl": "Carolina Gold is een pittige, mosterd-gebaseerde saus uit South Carolina, meestal met azijn, bruine suiker en kruiden. Het is vooral populair bij pulled pork."
        }
      },
      {
        question: {
                  "en": "What is 'offset smoking'?",
                  "es": "¿Qué es el 'ahumado offset'?",
                  "de": "Was ist 'Offset-Räuchern'?",
                  "nl": "Wat is 'offset smoking'?"
        },
        options: [
        {
                  "en": "Using two wood types",
                  "es": "Usar dos tipos de madera",
                  "de": "Zwei Holzarten verwenden",
                  "nl": "Twee houtsoorten gebruiken"
        },
        {
                  "en": "Smoking at lower temperature",
                  "es": "Ahumar a temperatura más baja",
                  "de": "Räuchern bei niedrigerer Temperatur",
                  "nl": "Roken op lagere temperatuur"
        },
        {
                  "en": "Alternating heat and smoke",
                  "es": "Alternando calor y humo",
                  "de": "Abwechselnd Hitze und Rauch",
                  "nl": "Afwisselend hitte en rook"
        },
        {
                  "en": "Fire in separate chamber from meat",
                  "es": "Fuego en cámara separada de la carne",
                  "de": "Feuer in separater Kammer vom Fleisch",
                  "nl": "Vuur in gescheiden kamer van het vlees"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "An offset smoker has a firebox separate from the cooking chamber. Heat and smoke flow horizontally through the meat chamber, providing indirect heat and consistent smoke.",
                  "es": "Un ahumador offset tiene una caja de fuego separada de la cámara de cocción. Calor y humo fluyen horizontalmente a través de la cámara de carne, proporcionando calor indirecto y humo consistente.",
                  "de": "Ein Offset-Smoker hat eine Feuerkammer getrennt von der Garkammer. Hitze und Rauch fließen horizontal durch die Fleischkammer und bieten indirekte Hitze und konstanten Rauch.",
                  "nl": "Een offset smoker heeft een vuurkist gescheiden van de kookkamer. Hitte en rook stromen horizontaal door de vleeskamer, wat indirecte hitte en consistente rook oplevert."
        }
      },
      {
        question: {
                  "en": "What is a 'pellet grill'?",
                  "es": "¿Qué es una 'parrilla de pellets'?",
                  "de": "Was ist ein 'Pelletgrill'?",
                  "nl": "Wat is een 'pellet grill'?"
        },
        options: [
        {
                  "en": "Charcoal briquette grill",
                  "es": "Parrilla de briquetas de carbón",
                  "de": "Holzkohlebrikett-Grill",
                  "nl": "Houtskoolbriket grill"
        },
        {
                  "en": "Small portable smoker",
                  "es": "Pequeño ahumador portátil",
                  "de": "Kleiner tragbarer Smoker",
                  "nl": "Kleine draagbare smoker"
        },
        {
                  "en": "Electric-fed wood pellet smoker",
                  "es": "Ahumador de pellets de madera alimentado eléctricamente",
                  "de": "Elektrisch betriebener Holzpellet-Smoker",
                  "nl": "Elektrisch gevoede houtpellet smoker"
        },
        {
                  "en": "Gas grill with wood chips",
                  "es": "Parrilla de gas con astillas de madera",
                  "de": "Gasgrill mit Holzspänen",
                  "nl": "Gasgrill met houtsnippers"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A pellet grill uses compressed hardwood pellets fed automatically by an electric auger. Digital controls maintain consistent temperature, making it user-friendly.",
                  "es": "Una parrilla de pellets usa pellets de madera dura comprimidos alimentados automáticamente por una barrena eléctrica. Controles digitales mantienen temperatura consistente, haciéndolo fácil de usar.",
                  "de": "Ein Pelletgrill verwendet komprimierte Hartholzpellets, die automatisch von einer elektrischen Schnecke zugeführt werden. Digitale Steuerung erhält konstante Temperatur und macht ihn benutzerfreundlich.",
                  "nl": "Een pellet grill gebruikt gecomprimeerde hardhout pellets automatisch gevoerd door een elektrische vijzel. Digitale bediening handhaaft consistente temperatuur, wat het gebruiksvriendelijk maakt."
        }
      },
      {
        question: {
                  "en": "What is 'competition brisket' judged on?",
                  "es": "¿En qué se juzga el 'pecho de competición'?",
                  "de": "Wonach wird 'Wettbewerbs-Brisket' beurteilt?",
                  "nl": "Waarop wordt 'competitie brisket' beoordeeld?"
        },
        options: [
        {
                  "en": "Speed of cooking only",
                  "es": "Solo velocidad de cocción",
                  "de": "Nur Gargeschwindigkeit",
                  "nl": "Alleen kooksnelheid"
        },
        {
                  "en": "Weight and size",
                  "es": "Peso y tamaño",
                  "de": "Gewicht und Größe",
                  "nl": "Gewicht en grootte"
        },
        {
                  "en": "Smoke ring thickness",
                  "es": "Grosor del anillo de humo",
                  "de": "Dicke des Rauchringes",
                  "nl": "Dikte van de rookring"
        },
        {
                  "en": "Appearance, taste, tenderness",
                  "es": "Apariencia, sabor, ternura",
                  "de": "Aussehen, Geschmack, Zartheit",
                  "nl": "Uiterlijk, smaak, malsheid"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Competition BBQ is judged on appearance (presentation), taste (flavor balance), and tenderness (texture). The smoke ring doesn't count - it's for looks only.",
                  "es": "El BBQ de competición se juzga por apariencia (presentación), sabor (equilibrio de sabores) y ternura (textura). El anillo de humo no cuenta - es solo por aspecto.",
                  "de": "Wettbewerbs-BBQ wird nach Aussehen (Präsentation), Geschmack (Geschmacksbalance) und Zartheit (Textur) beurteilt. Der Rauchring zählt nicht - er ist nur fürs Auge.",
                  "nl": "Competitie BBQ wordt beoordeeld op uiterlijk (presentatie), smaak (smaakbalans) en malsheid (textuur). De rookring telt niet - het is alleen voor het oog."
        }
      },
      {
        question: {
                  "en": "What does 'low and slow' typically mean?",
                  "es": "¿Qué significa típicamente 'low and slow'?",
                  "de": "Was bedeutet 'low and slow' typischerweise?",
                  "nl": "Wat betekent 'low and slow' typisch?"
        },
        options: [
        {
                  "en": "300-350°F for 2 hours",
                  "es": "300-350°F durante 2 horas",
                  "de": "300-350°F für 2 Stunden",
                  "nl": "300-350°F voor 2 uur"
        },
        {
                  "en": "225-275°F for several hours",
                  "es": "225-275°F durante varias horas",
                  "de": "225-275°F für mehrere Stunden",
                  "nl": "225-275°F voor meerdere uren"
        },
        {
                  "en": "150°F for 24 hours",
                  "es": "150°F durante 24 horas",
                  "de": "150°F für 24 Stunden",
                  "nl": "150°F voor 24 uur"
        },
        {
                  "en": "Room temp marinating",
                  "es": "Marinado a temperatura ambiente",
                  "de": "Marinieren bei Raumtemperatur",
                  "nl": "Marineren op kamertemperatuur"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "'Low and slow' refers to cooking at 225-275°F for extended periods (often 8-16 hours). This breaks down collagen in tough cuts, making them tender.",
                  "es": "'Low and slow' se refiere a cocinar a 225-275°F durante períodos prolongados (a menudo 8-16 horas). Esto descompone el colágeno en cortes duros, haciéndolos tiernos.",
                  "de": "'Low and slow' bezieht sich auf Garen bei 225-275°F über längere Zeiträume (oft 8-16 Stunden). Dies baut Kollagen in zähen Stücken ab und macht sie zart.",
                  "nl": "'Low and slow' verwijst naar koken op 225-275°F voor langere periodes (vaak 8-16 uur). Dit breekt collageen in taaie stukken af, waardoor ze mals worden."
        }
      },
      {
        question: {
                  "en": "What is a 'smoke ring'?",
                  "es": "¿Qué es un 'anillo de humo'?",
                  "de": "Was ist ein 'Rauchring'?",
                  "nl": "Wat is een 'rookring'?"
        },
        options: [
        {
                  "en": "Burnt edges on meat",
                  "es": "Bordes quemados en la carne",
                  "de": "Verbrannte Ränder am Fleisch",
                  "nl": "Verbrande randen op vlees"
        },
        {
                  "en": "Circle of smoke from chimney",
                  "es": "Círculo de humo de la chimenea",
                  "de": "Rauchkreis aus dem Kamin",
                  "nl": "Rookcirkel uit de schoorsteen"
        },
        {
                  "en": "Pink layer under meat surface",
                  "es": "Capa rosada bajo la superficie de la carne",
                  "de": "Rosa Schicht unter der Fleischoberfläche",
                  "nl": "Roze laag onder het vleesoppervlak"
        },
        {
                  "en": "Fat ring around brisket",
                  "es": "Anillo de grasa alrededor del pecho",
                  "de": "Fettring um Brisket",
                  "nl": "Vetring rond brisket"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A smoke ring is a pink/red layer just under the surface, formed when nitrogen dioxide from smoke reacts with myoglobin in meat. It's prized aesthetically but doesn't affect taste.",
                  "es": "Un anillo de humo es una capa rosa/roja justo debajo de la superficie, formada cuando el dióxido de nitrógeno del humo reacciona con la mioglobina en la carne. Es apreciado estéticamente pero no afecta el sabor.",
                  "de": "Ein Rauchring ist eine rosa/rote Schicht direkt unter der Oberfläche, die entsteht, wenn Stickstoffdioxid aus Rauch mit Myoglobin im Fleisch reagiert. Er ist ästhetisch geschätzt, beeinflusst aber nicht den Geschmack.",
                  "nl": "Een rookring is een roze/rode laag net onder het oppervlak, gevormd wanneer stikstofdioxide uit rook reageert met myoglobine in vlees. Het is esthetisch gewaardeerd maar beïnvloedt de smaak niet."
        }
      },
      {
        question: {
                  "en": "What does 'USDA Choice' vs 'Prime' mean?",
                  "es": "¿Qué significa 'USDA Choice' vs 'Prime'?",
                  "de": "Was bedeutet 'USDA Choice' vs 'Prime'?",
                  "nl": "Wat betekent 'USDA Choice' vs 'Prime'?"
        },
        options: [
        {
                  "en": "No significant difference",
                  "es": "No hay diferencia significativa",
                  "de": "Kein signifikanter Unterschied",
                  "nl": "Geen significant verschil"
        },
        {
                  "en": "Prime is grass-fed only",
                  "es": "Prime es solo alimentado con pasto",
                  "de": "Prime ist nur grasgefüttert",
                  "nl": "Prime is alleen grasgevoed"
        },
        {
                  "en": "Choice is more expensive",
                  "es": "Choice es más caro",
                  "de": "Choice ist teurer",
                  "nl": "Choice is duurder"
        },
        {
                  "en": "Prime has more marbling/fat",
                  "es": "Prime tiene más marmoleado/grasa",
                  "de": "Prime hat mehr Marmorierung/Fett",
                  "nl": "Prime heeft meer marmering/vet"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "USDA Prime has the most marbling (intramuscular fat), making it more tender and flavorful. Choice has less marbling. Prime is rarer and more expensive (~2% of beef).",
                  "es": "USDA Prime tiene el mayor marmoleado (grasa intramuscular), haciéndolo más tierno y sabroso. Choice tiene menos marmoleado. Prime es más raro y caro (~2% de la carne).",
                  "de": "USDA Prime hat die meiste Marmorierung (intramuskuläres Fett), was es zarter und geschmackvoller macht. Choice hat weniger Marmorierung. Prime ist seltener und teurer (~2% des Rindfleisches).",
                  "nl": "USDA Prime heeft de meeste marmering (intramusculair vet), waardoor het malser en smaakvoller is. Choice heeft minder marmering. Prime is zeldzamer en duurder (~2% van het rundvlees)."
        }
      },
      {
        question: {
                  "en": "What is a 'rib rack' used for?",
                  "es": "¿Para qué se usa un 'rib rack'?",
                  "de": "Wofür wird ein 'Rib Rack' verwendet?",
                  "nl": "Waarvoor wordt een 'rib rack' gebruikt?"
        },
        options: [
        {
                  "en": "Tenderize tough ribs",
                  "es": "Ablandar costillas duras",
                  "de": "Zähe Rippen zart machen",
                  "nl": "Taaie ribben mals maken"
        },
        {
                  "en": "Store ribs in refrigerator",
                  "es": "Almacenar costillas en refrigerador",
                  "de": "Rippen im Kühlschrank lagern",
                  "nl": "Ribben in koelkast bewaren"
        },
        {
                  "en": "Hold ribs vertically to save space",
                  "es": "Sostener costillas verticalmente para ahorrar espacio",
                  "de": "Rippen vertikal halten um Platz zu sparen",
                  "nl": "Ribben verticaal houden om ruimte te besparen"
        },
        {
                  "en": "Cut ribs into portions",
                  "es": "Cortar costillas en porciones",
                  "de": "Rippen in Portionen schneiden",
                  "nl": "Ribben in porties snijden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A rib rack holds multiple racks of ribs vertically, maximizing grill/smoker space. It allows smoke circulation around all sides of the meat.",
                  "es": "Un rib rack sostiene múltiples parrillas de costillas verticalmente, maximizando el espacio del grill/ahumador. Permite la circulación de humo alrededor de todos los lados de la carne.",
                  "de": "Ein Rib Rack hält mehrere Rippenracks vertikal und maximiert so den Grill-/Smoker-Platz. Es ermöglicht Rauchzirkulation um alle Seiten des Fleisches.",
                  "nl": "Een rib rack houdt meerdere racks ribben verticaal, wat de grill/smoker ruimte maximaliseert. Het maakt rookcirculatie rondom alle kanten van het vlees mogelijk."
        }
      },
      {
        question: {
                  "en": "What causes meat to be 'tough' after cooking?",
                  "es": "¿Qué hace que la carne esté 'dura' después de cocinar?",
                  "de": "Was lässt Fleisch nach dem Garen 'zäh' werden?",
                  "nl": "Wat zorgt ervoor dat vlees 'taai' is na het koken?"
        },
        options: [
        {
                  "en": "Not enough seasoning",
                  "es": "No suficiente condimento",
                  "de": "Nicht genug Würze",
                  "nl": "Niet genoeg kruiden"
        },
        {
                  "en": "Collagen hasn't broken down enough",
                  "es": "El colágeno no se ha descompuesto lo suficiente",
                  "de": "Kollagen hat sich nicht genug abgebaut",
                  "nl": "Collageen is niet genoeg afgebroken"
        },
        {
                  "en": "Too much smoke exposure",
                  "es": "Demasiada exposición al humo",
                  "de": "Zu viel Raucheinwirkung",
                  "nl": "Te veel rookblootstelling"
        },
        {
                  "en": "Wrong type of wood used",
                  "es": "Tipo incorrecto de madera usado",
                  "de": "Falsche Holzart verwendet",
                  "nl": "Verkeerd type hout gebruikt"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Tough meat means collagen hasn't fully broken down into gelatin. This requires either cooking to higher temps (195-205°F for brisket) or longer cooking time at low temps.",
                  "es": "Carne dura significa que el colágeno no se ha descompuesto completamente en gelatina. Esto requiere cocinar a temperaturas más altas (195-205°F para pecho) o más tiempo a temperaturas bajas.",
                  "de": "Zähes Fleisch bedeutet, dass Kollagen sich nicht vollständig zu Gelatine abgebaut hat. Dies erfordert entweder Garen auf höhere Temperaturen (195-205°F für Brisket) oder längere Garzeit bei niedrigen Temperaturen.",
                  "nl": "Taai vlees betekent dat collageen niet volledig is afgebroken tot gelatine. Dit vereist ofwel koken op hogere temperaturen (195-205°F voor brisket) of langere kooktijd op lage temperaturen."
        }
      },
      {
        question: {
                  "en": "What is 'Texas style' brisket known for?",
                  "es": "¿Por qué es conocido el pecho 'estilo Texas'?",
                  "de": "Wofür ist 'Texas Style' Brisket bekannt?",
                  "nl": "Waar staat 'Texas style' brisket om bekend?"
        },
        options: [
        {
                  "en": "Mustard-based marinade",
                  "es": "Marinada a base de mostaza",
                  "de": "Senf-basierte Marinade",
                  "nl": "Mosterd-gebaseerde marinade"
        },
        {
                  "en": "Sweet molasses glaze",
                  "es": "Glaseado dulce de melaza",
                  "de": "Süße Melasse-Glasur",
                  "nl": "Zoete melasse glazuur"
        },
        {
                  "en": "Simple salt/pepper rub, oak smoke",
                  "es": "Condimento simple de sal/pimienta, humo de roble",
                  "de": "Einfacher Salz-/Pfeffer-Rub, Eichenrauch",
                  "nl": "Eenvoudige zout/peper rub, eiken rook"
        },
        {
                  "en": "Thick tomato BBQ sauce",
                  "es": "Salsa BBQ espesa de tomate",
                  "de": "Dicke Tomaten-BBQ-Sauce",
                  "nl": "Dikke tomaat BBQ-saus"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Texas brisket uses a simple rub (often just coarse salt and black pepper, called 'Dalmatian rub') and oak or mesquite smoke. The beef flavor takes center stage.",
                  "es": "El pecho de Texas usa un condimento simple (a menudo solo sal gruesa y pimienta negra, llamado 'condimento dálmata') y humo de roble o mezquite. El sabor de la carne es protagonista.",
                  "de": "Texas Brisket verwendet einen einfachen Rub (oft nur grobes Salz und schwarzen Pfeffer, 'Dalmatiner-Rub' genannt) und Eichen- oder Mesquite-Rauch. Der Rindfleischgeschmack steht im Vordergrund.",
                  "nl": "Texas brisket gebruikt een eenvoudige rub (vaak alleen grof zout en zwarte peper, 'Dalmatische rub' genoemd) en eiken of mesquite rook. De rundvleessmaak staat centraal."
        }
      },
      {
        question: {
                  "en": "What does 'probe tender' mean?",
                  "es": "¿Qué significa 'probe tender'?",
                  "de": "Was bedeutet 'Probe Tender'?",
                  "nl": "Wat betekent 'probe tender'?"
        },
        options: [
        {
                  "en": "Meat reaches 203°F exactly",
                  "es": "La carne alcanza exactamente 203°F",
                  "de": "Fleisch erreicht genau 203°F",
                  "nl": "Vlees bereikt precies 203°F"
        },
        {
                  "en": "Thermometer slides in like butter",
                  "es": "El termómetro se desliza como mantequilla",
                  "de": "Thermometer gleitet wie Butter hinein",
                  "nl": "Thermometer glijdt erin als boter"
        },
        {
                  "en": "Using multiple probes",
                  "es": "Usar múltiples sondas",
                  "de": "Mehrere Sonden verwenden",
                  "nl": "Meerdere probes gebruiken"
        },
        {
                  "en": "Probe thermometer beeps",
                  "es": "El termómetro sonda pita",
                  "de": "Sonden-Thermometer piept",
                  "nl": "Probe thermometer piept"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "'Probe tender' means the thermometer probe slides into meat with no resistance, like into warm butter. This indicates collagen has broken down - more reliable than temp alone.",
                  "es": "'Probe tender' significa que la sonda del termómetro se desliza en la carne sin resistencia, como en mantequilla tibia. Esto indica que el colágeno se ha descompuesto - más confiable que la temperatura sola.",
                  "de": "'Probe Tender' bedeutet, dass die Thermometer-Sonde ohne Widerstand ins Fleisch gleitet, wie in warme Butter. Dies zeigt an, dass Kollagen abgebaut wurde - zuverlässiger als Temperatur allein.",
                  "nl": "'Probe tender' betekent dat de thermometer probe zonder weerstand in vlees glijdt, als in warme boter. Dit duidt aan dat collageen is afgebroken - betrouwbaarder dan alleen temperatuur."
        }
      },
      {
        question: {
                  "en": "What is 'minion method' for charcoal?",
                  "es": "¿Qué es el 'método minion' para carbón?",
                  "de": "Was ist die 'Minion-Methode' für Holzkohle?",
                  "nl": "Wat is de 'minion methode' voor houtskool?"
        },
        options: [
        {
                  "en": "Small charcoal pieces only",
                  "es": "Solo piezas pequeñas de carbón",
                  "de": "Nur kleine Holzkohlestücke",
                  "nl": "Alleen kleine houtskoolstukjes"
        },
        {
                  "en": "Lit coals on top of unlit ones",
                  "es": "Carbones encendidos encima de los no encendidos",
                  "de": "Brennende Kohlen auf ungebrannte legen",
                  "nl": "Aangestoken kolen bovenop niet-aangestoken"
        },
        {
                  "en": "Using minimal charcoal",
                  "es": "Usar carbón mínimo",
                  "de": "Minimale Holzkohle verwenden",
                  "nl": "Minimale houtskool gebruiken"
        },
        {
                  "en": "Rotating charcoal positions",
                  "es": "Rotar posiciones de carbón",
                  "de": "Kohle-Positionen rotieren",
                  "nl": "Houtskoolposities roteren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Minion Method places a few lit coals on top of unlit ones. As lit coals burn down, they ignite the layer below, providing long, stable heat for smoking.",
                  "es": "El Método Minion coloca unos pocos carbones encendidos encima de los no encendidos. A medida que los carbones encendidos se queman, encienden la capa de abajo, proporcionando calor largo y estable para ahumar.",
                  "de": "Die Minion-Methode platziert einige brennende Kohlen auf ungebrannte. Während die brennenden Kohlen abbrennen, entzünden sie die Schicht darunter und liefern lange, stabile Hitze zum Räuchern.",
                  "nl": "De Minion Methode plaatst een paar aangestoken kolen bovenop niet-aangestoken. Terwijl aangestoken kolen opbranden, steken ze de laag eronder aan, wat lange, stabiele hitte voor roken oplevert."
        }
      },
      {
        question: {
                  "en": "What is a 'vortex' or 'snake' method?",
                  "es": "¿Qué es el método 'vórtice' o 'serpiente'?",
                  "de": "Was ist die 'Vortex' oder 'Schlangen'-Methode?",
                  "nl": "Wat is de 'vortex' of 'slang' methode?"
        },
        options: [
        {
                  "en": "Rotating meat during cooking",
                  "es": "Rotar carne durante la cocción",
                  "de": "Fleisch während des Garens drehen",
                  "nl": "Vlees draaien tijdens het koken"
        },
        {
                  "en": "Charcoal arranged in circle/line pattern",
                  "es": "Carbón dispuesto en patrón circular/línea",
                  "de": "Holzkohle in Kreis-/Linienmuster angeordnet",
                  "nl": "Houtskool gerangschikt in cirkel/lijn patroon"
        },
        {
                  "en": "Twisting wood chips together",
                  "es": "Torcer astillas de madera juntas",
                  "de": "Holzspäne zusammendrehen",
                  "nl": "Houtsnippers samen draaien"
        },
        {
                  "en": "Spiral smoke pattern technique",
                  "es": "Técnica de patrón de humo en espiral",
                  "de": "Spiralrauch-Mustertechnik",
                  "nl": "Spiraal rookpatroon techniek"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The snake/vortex method arranges unlit charcoal in a circle or C-shape around the grill. Lit coals at one end slowly burn through the pattern, providing 8-12 hours of steady heat.",
                  "es": "El método serpiente/vórtice dispone carbón sin encender en círculo o forma de C alrededor de la parrilla. Carbones encendidos en un extremo queman lentamente el patrón, proporcionando 8-12 horas de calor constante.",
                  "de": "Die Schlangen-/Vortex-Methode ordnet ungebrannte Holzkohle in einem Kreis oder C-Form um den Grill an. Brennende Kohlen an einem Ende brennen langsam durch das Muster und liefern 8-12 Stunden gleichmäßige Hitze.",
                  "nl": "De slang/vortex methode rangschikt niet-aangestoken houtskool in een cirkel of C-vorm rond de grill. Aangestoken kolen aan één kant branden langzaam door het patroon, wat 8-12 uur stabiele hitte oplevert."
        }
      },
      {
        question: {
                  "en": "What is 'Alabama white sauce'?",
                  "es": "¿Qué es la 'salsa blanca de Alabama'?",
                  "de": "Was ist 'Alabama White Sauce'?",
                  "nl": "Wat is 'Alabama white sauce'?"
        },
        options: [
        {
                  "en": "Cream and butter sauce",
                  "es": "Salsa de crema y mantequilla",
                  "de": "Sahne-Butter-Sauce",
                  "nl": "Room en boter saus"
        },
        {
                  "en": "Ranch dressing variant",
                  "es": "Variante de aderezo ranch",
                  "de": "Ranch-Dressing-Variante",
                  "nl": "Ranch dressing variant"
        },
        {
                  "en": "Mayo-based BBQ sauce",
                  "es": "Salsa BBQ a base de mayonesa",
                  "de": "Mayonnaise-basierte BBQ-Sauce",
                  "nl": "Mayonaise-gebaseerde BBQ-saus"
        },
        {
                  "en": "White vinegar reduction",
                  "es": "Reducción de vinagre blanco",
                  "de": "Weißwein-Essig-Reduktion",
                  "nl": "Witte azijn reductie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Alabama white sauce is a unique mayo-based BBQ sauce with vinegar, black pepper, and horseradish. It's traditionally used on smoked chicken in Northern Alabama.",
                  "es": "La salsa blanca de Alabama es una salsa BBQ única a base de mayonesa con vinagre, pimienta negra y rábano picante. Se usa tradicionalmente en pollo ahumado en el norte de Alabama.",
                  "de": "Alabama White Sauce ist eine einzigartige Mayonnaise-basierte BBQ-Sauce mit Essig, schwarzem Pfeffer und Meerrettich. Sie wird traditionell für geräuchertes Hühnchen in Nord-Alabama verwendet.",
                  "nl": "Alabama white sauce is een unieke mayonaise-gebaseerde BBQ-saus met azijn, zwarte peper en mierikswortel. Het wordt traditioneel gebruikt op gerookte kip in Noord-Alabama."
        }
      },
      {
        question: {
                  "en": "What is the 'bend test' for ribs?",
                  "es": "¿Qué es la 'prueba de doblez' para costillas?",
                  "de": "Was ist der 'Biegetest' für Rippchen?",
                  "nl": "Wat is de 'buigtest' voor spareribs?"
        },
        options: [
        {
                  "en": "Bending ribs before cooking",
                  "es": "Doblar costillas antes de cocinar",
                  "de": "Rippen vor dem Garen biegen",
                  "nl": "Ribben buigen voor het koken"
        },
        {
                  "en": "Testing rib flexibility raw",
                  "es": "Probar flexibilidad de costillas crudas",
                  "de": "Rippenflexibilität roh testen",
                  "nl": "Ribflexibiliteit rauw testen"
        },
        {
                  "en": "Checking for broken bones",
                  "es": "Verificar huesos rotos",
                  "de": "Nach gebrochenen Knochen suchen",
                  "nl": "Controleren op gebroken botten"
        },
        {
                  "en": "Pick up ribs, check if they bend/crack",
                  "es": "Levantar costillas, verificar si se doblan/agrietan",
                  "de": "Rippen aufheben, prüfen ob sie sich biegen/knacken",
                  "nl": "Ribben oppakken, controleren of ze buigen/barsten"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The bend test checks doneness: pick up ribs with tongs in the middle. If they bend and surface cracks slightly but don't break, they're done. Too flexible means undercooked.",
                  "es": "La prueba de doblez verifica el punto de cocción: levantar costillas con pinzas en el medio. Si se doblan y la superficie se agrieta ligeramente pero no se rompen, están listas. Demasiado flexibles significa poco cocidas.",
                  "de": "Der Biegetest prüft die Garstufe: Rippen mit Zange in der Mitte aufheben. Wenn sie sich biegen und die Oberfläche leicht reißt aber nicht bricht, sind sie fertig. Zu flexibel bedeutet nicht durchgegart.",
                  "nl": "De buigtest controleert gaarheid: pak ribben met tang in het midden op. Als ze buigen en het oppervlak licht barst maar niet breekt, zijn ze klaar. Te flexibel betekent niet gaar."
        }
      },
      {
        question: {
                  "en": "What is 'hot and fast' BBQ?",
                  "es": "¿Qué es el BBQ 'caliente y rápido'?",
                  "de": "Was ist 'heiß und schnell' BBQ?",
                  "nl": "Wat is 'hot and fast' BBQ?"
        },
        options: [
        {
                  "en": "Direct grilling over flames",
                  "es": "Asar directamente sobre llamas",
                  "de": "Direkt über Flammen grillen",
                  "nl": "Direct grillen boven vlammen"
        },
        {
                  "en": "Cooking at 300-350°F shorter time",
                  "es": "Cocinar a 300-350°F menos tiempo",
                  "de": "Garen bei 300-350°F kürzere Zeit",
                  "nl": "Koken op 300-350°F kortere tijd"
        },
        {
                  "en": "Microwaving then finishing on grill",
                  "es": "Microondas luego terminar en parrilla",
                  "de": "Mikrowelle dann auf Grill fertigstellen",
                  "nl": "Magnetron dan afwerken op grill"
        },
        {
                  "en": "Quick searing then serving",
                  "es": "Sellado rápido luego servir",
                  "de": "Schnelles Anbraten dann servieren",
                  "nl": "Snel dichtschroeien dan serveren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Hot and fast cooks at 300-350°F instead of traditional low and slow. It reduces cooking time (brisket in 6-8 hrs vs 12-16) while still achieving tender results.",
                  "es": "Hot and fast cocina a 300-350°F en lugar del tradicional lento y bajo. Reduce el tiempo de cocción (pecho en 6-8 hrs vs 12-16) mientras logra resultados tiernos.",
                  "de": "Hot and Fast gart bei 300-350°F statt traditionellem Low and Slow. Es verkürzt die Garzeit (Brisket in 6-8 Std vs 12-16) und erzielt dennoch zarte Ergebnisse.",
                  "nl": "Hot and fast kookt op 300-350°F in plaats van traditioneel low and slow. Het verkort de kooktijd (brisket in 6-8 uur vs 12-16) terwijl het nog steeds malse resultaten behaalt."
        }
      },
      {
        question: {
                  "en": "What is 'spritzing' in BBQ?",
                  "es": "¿Qué es 'spritzing' en BBQ?",
                  "de": "Was ist 'Spritzing' beim BBQ?",
                  "nl": "Wat is 'spritzing' bij BBQ?"
        },
        options: [
        {
                  "en": "Cleaning grill with water spray",
                  "es": "Limpiar parrilla con spray de agua",
                  "de": "Grill mit Wasserspray reinigen",
                  "nl": "Grill schoonmaken met waterspray"
        },
        {
                  "en": "Adding carbonation to sauce",
                  "es": "Añadir carbonatación a la salsa",
                  "de": "Kohlensäure zur Sauce hinzufügen",
                  "nl": "Koolzuur toevoegen aan saus"
        },
        {
                  "en": "Spraying meat with liquid during cook",
                  "es": "Rociar carne con líquido durante cocción",
                  "de": "Fleisch während des Garens mit Flüssigkeit besprühen",
                  "nl": "Vlees besproeien met vloeistof tijdens het koken"
        },
        {
                  "en": "Quick flame bursts",
                  "es": "Ráfagas rápidas de llama",
                  "de": "Schnelle Flammenstöße",
                  "nl": "Snelle vlamuitbarstingen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Spritzing is spraying meat with liquid (apple juice, vinegar, water) every 30-60 mins during smoking. It helps maintain moisture and can enhance bark formation.",
                  "es": "Spritzing es rociar carne con líquido (jugo de manzana, vinagre, agua) cada 30-60 mins durante el ahumado. Ayuda a mantener humedad y puede mejorar la formación de corteza.",
                  "de": "Spritzing ist das Besprühen von Fleisch mit Flüssigkeit (Apfelsaft, Essig, Wasser) alle 30-60 Min während des Räucherns. Es hilft, Feuchtigkeit zu erhalten und kann die Bark-Bildung verbessern.",
                  "nl": "Spritzing is vlees besproeien met vloeistof (appelsap, azijn, water) elke 30-60 min tijdens het roken. Het helpt vocht te behouden en kan bark vorming verbeteren."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  }
})();