// Custards Quiz - Level 8: Artisan Custard Crafting
(function() {
  const level8 = {
    name: {
      en: "Artisan Custard Crafting",
      es: "Elaboración Artesanal de Natillas",
      de: "Handwerkliche Pudding-Herstellung",
      nl: "Ambachtelijke Custard Vervaardiging"
    },
    questions: [
      {
        question: {
          en: "What is the traditional French technique of 'nappe' when testing custard consistency?",
          es: "¿Qué es la técnica francesa tradicional de 'nappe' al probar la consistencia de las natillas?",
          de: "Was ist die traditionelle französische Technik 'nappe' beim Testen der Pudding-Konsistenz?",
          nl: "Wat is de traditionele Franse techniek van 'nappe' bij het testen van custard consistentie?"
        },
        options: [
          { en: "Coating the back of a spoon with custard that holds when finger drawn across", es: "Cubrir el dorso de una cuchara con natillas que se mantiene cuando se pasa el dedo", de: "Den Rücken eines Löffels mit Pudding überziehen, der hält, wenn der Finger darüber gezogen wird", nl: "De achterkant van een lepel bedekken met custard die blijft zitten wanneer je er met je vinger overheen gaat" },
          { en: "Whipping custard until stiff peaks form", es: "Batir las natillas hasta formar picos firmes", de: "Pudding schlagen bis steife Spitzen entstehen", nl: "Custard kloppen tot stijve pieken vormen" },
          { en: "Straining custard through fine mesh", es: "Colar las natillas a través de malla fina", de: "Pudding durch feines Sieb passieren", nl: "Custard zeven door fijn gaas" },
          { en: "Cooling custard in an ice bath", es: "Enfriar las natillas en baño de hielo", de: "Pudding in Eisbad kühlen", nl: "Custard koelen in ijsbad" }
        ],
        correct: 0,
        explanation: {
          en: "The nappe test involves coating a spoon with custard and drawing a finger across the back. If the line remains clear without flowing together, the custard has reached proper consistency for coating sauces.",
          es: "La prueba nappe implica cubrir una cuchara con natillas y pasar un dedo por el dorso. Si la línea permanece clara sin fluir juntas, las natillas han alcanzado la consistencia adecuada para salsas de cobertura.",
          de: "Der Nappe-Test beinhaltet das Überziehen eines Löffels mit Pudding und das Ziehen eines Fingers über den Rücken. Wenn die Linie klar bleibt ohne zusammenzufließen, hat der Pudding die richtige Konsistenz für Überzugssaucen erreicht.",
          nl: "De nappe test houdt in dat je een lepel bedekt met custard en een vinger over de achterkant trekt. Als de lijn helder blijft zonder samen te vloeien, heeft de custard de juiste consistentie bereikt voor coatingssauzen."
        }
      },
      {
        question: {
          en: "In artisan custard making, what is the purpose of using a bain-marie (double boiler) setup?",
          es: "En la elaboración artesanal de natillas, ¿cuál es el propósito de usar una configuración de bain-marie (baño maría)?",
          de: "Was ist der Zweck eines Bain-Marie (Wasserbad) Aufbaus bei der handwerklichen Pudding-Herstellung?",
          nl: "Wat is het doel van het gebruik van een bain-marie (au-bain-marie) opstelling bij ambachtelijke custard vervaardiging?"
        },
        options: [
          { en: "To speed up the cooking process", es: "Para acelerar el proceso de cocción", de: "Um den Kochvorgang zu beschleunigen", nl: "Om het kookproces te versnellen" },
          { en: "To provide gentle, indirect heat preventing protein coagulation and curdling", es: "Para proporcionar calor suave e indirecto que previene la coagulación de proteínas y el cuajado", de: "Um sanfte, indirekte Hitze zu bieten, die Proteinkoagulation und Gerinnung verhindert", nl: "Om zachte, indirecte hitte te bieden die eiwitcoagulatie en schifting voorkomt" },
          { en: "To add steam to the custard", es: "Para agregar vapor a las natillas", de: "Um Dampf zum Pudding hinzuzufügen", nl: "Om stoom toe te voegen aan de custard" },
          { en: "To reduce cooking time by half", es: "Para reducir el tiempo de cocción a la mitad", de: "Um die Kochzeit zu halbieren", nl: "Om de kooktijd te halveren" }
        ],
        correct: 1,
        explanation: {
          en: "A bain-marie provides controlled, gentle heat that prevents the custard from overheating. This indirect heating method is essential for maintaining smooth texture and preventing the eggs from scrambling or curdling.",
          es: "Un bain-marie proporciona calor controlado y suave que previene el sobrecalentamiento de las natillas. Este método de calentamiento indirecto es esencial para mantener la textura suave y prevenir que los huevos se revuelvan o cuajen.",
          de: "Ein Bain-Marie bietet kontrollierte, sanfte Hitze, die verhindert, dass der Pudding überhitzt. Diese indirekte Heizmethode ist wesentlich für die Erhaltung glatter Textur und verhindert, dass die Eier stocken oder gerinnen.",
          nl: "Een bain-marie biedt gecontroleerde, zachte hitte die voorkomt dat de custard oververhit raakt. Deze indirecte verwarmingsmethode is essentieel voor het behouden van gladde textuur en voorkomt dat de eieren gaan stollen of schiften."
        }
      },
      {
        question: {
          en: "What is the artisan technique of 'cuisson à l'anglaise' in custard preparation?",
          es: "¿Qué es la técnica artesanal de 'cuisson à l'anglaise' en la preparación de natillas?",
          de: "Was ist die handwerkliche Technik 'cuisson à l'anglaise' bei der Pudding-Zubereitung?",
          nl: "Wat is de ambachtelijke techniek van 'cuisson à l'anglaise' bij custard bereiding?"
        },
        options: [
          { en: "Cooking custard in the oven at high temperature", es: "Cocinar natillas en el horno a alta temperatura", de: "Pudding im Ofen bei hoher Temperatur kochen", nl: "Custard koken in de oven op hoge temperatuur" },
          { en: "The traditional method of cooking stirred custard slowly while constantly stirring until it coats a spoon", es: "El método tradicional de cocinar natillas revueltas lentamente mientras se revuelve constantemente hasta que cubra una cuchara", de: "Die traditionelle Methode, gerührten Pudding langsam zu kochen, während ständig gerührt wird, bis er einen Löffel überzieht", nl: "De traditionele methode van het langzaam koken van geroerde custard terwijl constant geroerd wordt tot het een lepel bedekt" },
          { en: "Freezing custard immediately after cooking", es: "Congelar natillas inmediatamente después de cocinar", de: "Pudding sofort nach dem Kochen einfrieren", nl: "Custard onmiddellijk na het koken bevriezen" },
          { en: "Adding alcohol to hot custard", es: "Agregar alcohol a las natillas calientes", de: "Alkohol zu heißem Pudding hinzufügen", nl: "Alcohol toevoegen aan hete custard" }
        ],
        correct: 1,
        explanation: {
          en: "Cuisson à l'anglaise refers to the classic English method of making stirred custard (crème anglaise) by cooking egg and milk mixture slowly with constant stirring until it reaches the nappe consistency.",
          es: "Cuisson à l'anglaise se refiere al método inglés clásico de hacer natillas revueltas (crème anglaise) cocinando la mezcla de huevo y leche lentamente con agitación constante hasta que alcance la consistencia nappe.",
          de: "Cuisson à l'anglaise bezieht sich auf die klassische englische Methode, gerührten Pudding (Crème Anglaise) zu machen, indem die Ei-Milch-Mischung langsam unter ständigem Rühren gekocht wird, bis sie die Nappe-Konsistenz erreicht.",
          nl: "Cuisson à l'anglaise verwijst naar de klassieke Engelse methode van het maken van geroerde custard (crème anglaise) door het ei-melk mengsel langzaam te koken met constant roeren tot het de nappe consistentie bereikt."
        }
      },
      {
        question: {
          en: "What is the artisan significance of using Madagascar vanilla beans vs extract in premium custards?",
          es: "¿Cuál es la significancia artesanal de usar vainas de vainilla de Madagascar vs extracto en natillas premium?",
          de: "Was ist die handwerkliche Bedeutung der Verwendung von Madagascar-Vanilleschoten vs Extrakt in Premium-Puddings?",
          nl: "Wat is de ambachtelijke betekenis van het gebruik van Madagascar vanillestokjes vs extract in premium custards?"
        },
        options: [
          { en: "Extract provides better flavor than beans", es: "El extracto proporciona mejor sabor que las vainas", de: "Extrakt bietet besseren Geschmack als Schoten", nl: "Extract biedt betere smaak dan stokjes" },
          { en: "Vanilla beans provide complex flavor compounds, visual specks, and artisan authenticity that extract cannot match", es: "Las vainas de vainilla proporcionan compuestos de sabor complejos, motas visuales y autenticidad artesanal que el extracto no puede igualar", de: "Vanilleschoten bieten komplexe Geschmacksverbindungen, sichtbare Sprenkel und handwerkliche Authentizität, die Extrakt nicht erreichen kann", nl: "Vanillestokjes bieden complexe smaakverbindingen, visuele spikkels en ambachtelijke authenticiteit die extract niet kan evenaren" },
          { en: "Beans are only used for appearance", es: "Las vainas solo se usan para apariencia", de: "Schoten werden nur für das Aussehen verwendet", nl: "Stokjes worden alleen gebruikt voor het uiterlijk" },
          { en: "There is no difference between beans and extract", es: "No hay diferencia entre vainas y extracto", de: "Es gibt keinen Unterschied zwischen Schoten und Extrakt", nl: "Er is geen verschil tussen stokjes en extract" }
        ],
        correct: 1,
        explanation: {
          en: "Madagascar vanilla beans contain over 250 flavor compounds vs extract's limited profile. The beans provide visual authenticity with characteristic black specks and complex aromatic notes that showcase artisan craftsmanship.",
          es: "Las vainas de vainilla de Madagascar contienen más de 250 compuestos de sabor vs el perfil limitado del extracto. Las vainas proporcionan autenticidad visual con motas negras características y notas aromáticas complejas que muestran la artesanía.",
          de: "Madagascar-Vanilleschoten enthalten über 250 Geschmacksverbindungen gegenüber dem begrenzten Profil des Extrakts. Die Schoten bieten visuelle Authentizität mit charakteristischen schwarzen Sprenkeln und komplexen aromatischen Noten, die handwerkliche Kunstfertigkeit zeigen.",
          nl: "Madagascar vanillestokjes bevatten meer dan 250 smaakverbindingen tegenover het beperkte profiel van extract. De stokjes bieden visuele authenticiteit met karakteristieke zwarte spikkels en complexe aromatische noten die ambachtelijk vakmanschap tonen."
        }
      },
      {
        question: {
          en: "In small-batch artisan custard production, why is hand-whisking preferred over machine mixing for certain preparations?",
          es: "En la producción artesanal de natillas en lotes pequeños, ¿por qué se prefiere el batido a mano sobre el mezclado mecánico para ciertas preparaciones?",
          de: "Warum wird bei der handwerklichen Pudding-Produktion in kleinen Chargen das Handrühren gegenüber dem maschinellen Mischen für bestimmte Zubereitungen bevorzugt?",
          nl: "Waarom wordt bij kleinschalige ambachtelijke custard productie handmatig kloppen verkozen boven machinaal mixen voor bepaalde bereidingen?"
        },
        options: [
          { en: "Hand-whisking is faster than machines", es: "El batido a mano es más rápido que las máquinas", de: "Handrühren ist schneller als Maschinen", nl: "Handmatig kloppen is sneller dan machines" },
          { en: "Hand-whisking provides better control over aeration and prevents overworking the mixture", es: "El batido a mano proporciona mejor control sobre la aireación y previene el trabajo excesivo de la mezcla", de: "Handrühren bietet bessere Kontrolle über die Belüftung und verhindert Überarbeitung der Mischung", nl: "Handmatig kloppen biedt betere controle over beluchting en voorkomt overwerking van het mengsel" },
          { en: "Machines cannot mix custard ingredients", es: "Las máquinas no pueden mezclar ingredientes de natillas", de: "Maschinen können Pudding-Zutaten nicht mischen", nl: "Machines kunnen custard ingrediënten niet mixen" },
          { en: "Hand-whisking adds more sugar to the mixture", es: "El batido a mano agrega más azúcar a la mezcla", de: "Handrühren fügt der Mischung mehr Zucker hinzu", nl: "Handmatig kloppen voegt meer suiker toe aan het mengsel" }
        ],
        correct: 1,
        explanation: {
          en: "Hand-whisking allows artisan custard makers to control the incorporation of air and monitor texture development precisely. It prevents overworking the mixture, which can break emulsions or create unwanted foam in delicate preparations.",
          es: "El batido a mano permite a los artesanos de natillas controlar la incorporación de aire y monitorear el desarrollo de textura con precisión. Previene el trabajo excesivo de la mezcla, que puede romper emulsiones o crear espuma no deseada en preparaciones delicadas.",
          de: "Handrühren ermöglicht handwerklichen Pudding-Herstellern die Kontrolle über die Lufteinarbeitung und präzise Überwachung der Texturentwicklung. Es verhindert Überarbeitung der Mischung, die Emulsionen brechen oder unerwünschten Schaum in delikaten Zubereitungen erzeugen kann.",
          nl: "Handmatig kloppen stelt ambachtelijke custard makers in staat de incorporatie van lucht te controleren en textuurontwikkeling nauwkeurig te monitoren. Het voorkomt overwerking van het mengsel, wat emulsies kan breken of ongewenst schuim kan creëren in delicate bereidingen."
        }
      },
      {
        question: {
          en: "What is the traditional artisan method for infusing saffron into custard for maximum flavor extraction?",
          es: "¿Cuál es el método artesanal tradicional para infusionar azafrán en natillas para máxima extracción de sabor?",
          de: "Was ist die traditionelle handwerkliche Methode zur Infusion von Safran in Pudding für maximale Geschmacksextraktion?",
          nl: "Wat is de traditionele ambachtelijke methode voor het infuuseren van saffraan in custard voor maximale smaakextractie?"
        },
        options: [
          { en: "Add saffron directly to cold milk", es: "Agregar azafrán directamente a leche fría", de: "Safran direkt zu kalter Milch hinzufügen", nl: "Saffraan direct toevoegen aan koude melk" },
          { en: "Bloom saffron in warm milk or cream for 15-20 minutes before incorporating", es: "Activar azafrán en leche o nata tibia por 15-20 minutos antes de incorporar", de: "Safran in warmer Milch oder Sahne 15-20 Minuten aufblühen lassen vor dem Einarbeiten", nl: "Saffraan laten bloeien in warme melk of room gedurende 15-20 minuten voor incorporatie" },
          { en: "Grind saffron with sugar only", es: "Moler azafrán solo con azúcar", de: "Safran nur mit Zucker mahlen", nl: "Saffraan alleen met suiker malen" },
          { en: "Add saffron at the very end of cooking", es: "Agregar azafrán al final de la cocción", de: "Safran ganz am Ende des Kochens hinzufügen", nl: "Saffraan helemaal aan het einde van het koken toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Blooming saffron in warm milk or cream for 15-20 minutes allows the saffron threads to release their color, aroma, and flavor compounds fully. This traditional technique maximizes the extraction of crocin and safranal compounds.",
          es: "Activar el azafrán en leche o nata tibia por 15-20 minutos permite que los hilos de azafrán liberen completamente su color, aroma y compuestos de sabor. Esta técnica tradicional maximiza la extracción de compuestos de crocina y safranal.",
          de: "Das Aufblühen von Safran in warmer Milch oder Sahne für 15-20 Minuten ermöglicht es den Safranfäden, ihre Farb-, Aroma- und Geschmacksverbindungen vollständig freizusetzen. Diese traditionelle Technik maximiert die Extraktion von Crocin- und Safranal-Verbindungen.",
          nl: "Het laten bloeien van saffraan in warme melk of room gedurende 15-20 minuten zorgt ervoor dat de saffraandraden hun kleur, aroma en smaakverbindingen volledig vrijgeven. Deze traditionele techniek maximaliseert de extractie van crocine en safranal verbindingen."
        }
      },
      {
        question: {
          en: "What is the artisan technique called 'liaison' in custard-based sauce making?",
          es: "¿Qué es la técnica artesanal llamada 'liaison' en la elaboración de salsas a base de natillas?",
          de: "Was ist die handwerkliche Technik namens 'Liaison' bei der Herstellung von Pudding-basierten Saucen?",
          nl: "Wat is de ambachtelijke techniek genaamd 'liaison' bij het maken van custard-gebaseerde sauzen?"
        },
        options: [
          { en: "Adding cream to thin the sauce", es: "Agregar nata para diluir la salsa", de: "Sahne hinzufügen, um die Sauce zu verdünnen", nl: "Room toevoegen om de saus te verdunnen" },
          { en: "The final thickening and enrichment with egg yolks and cream, stirred off heat", es: "El espesado final y enriquecimiento con yemas de huevo y nata, revuelto fuera del fuego", de: "Die abschließende Verdickung und Anreicherung mit Eigelb und Sahne, gerührt ohne Hitze", nl: "De finale verdiking en verrijking met eidooiers en room, geroerd zonder warmte" },
          { en: "Straining the custard through cheesecloth", es: "Colar las natillas a través de estopilla", de: "Den Pudding durch Käsetuch passieren", nl: "De custard zeven door kaasdoek" },
          { en: "Whipping air into the custard", es: "Batir aire en las natillas", de: "Luft in den Pudding schlagen", nl: "Lucht in de custard kloppen" }
        ],
        correct: 1,
        explanation: {
          en: "A liaison is the final step in sauce making where egg yolks and cream are combined and whisked into the hot sauce off the heat. This technique provides final thickening, enrichment, and creates a silky, glossy finish.",
          es: "Una liaison es el paso final en la elaboración de salsas donde las yemas de huevo y la nata se combinan y se baten en la salsa caliente fuera del fuego. Esta técnica proporciona espesado final, enriquecimiento y crea un acabado sedoso y brillante.",
          de: "Eine Liaison ist der letzte Schritt bei der Saucenherstellung, bei dem Eigelb und Sahne kombiniert und in die heiße Sauce ohne Hitze eingerührt werden. Diese Technik bietet abschließende Verdickung, Anreicherung und schafft ein seidiges, glänzendes Finish.",
          nl: "Een liaison is de laatste stap bij het maken van sauzen waarbij eidooiers en room worden gecombineerd en in de hete saus zonder warmte worden geklopt. Deze techniek biedt finale verdiking, verrijking en creëert een zijdeachtige, glanzende afwerking."
        }
      },
      {
        question: {
          en: "In artisan custard making, what is the purpose of using aged, farm-fresh eggs vs commercial eggs?",
          es: "En la elaboración artesanal de natillas, ¿cuál es el propósito de usar huevos frescos de granja envejecidos vs huevos comerciales?",
          de: "Was ist der Zweck der Verwendung von gealterten, frischen Bauernhof-Eiern vs kommerziellen Eiern bei der handwerklichen Pudding-Herstellung?",
          nl: "Wat is het doel van het gebruik van gerijpte, verse boerderij-eieren vs commerciële eieren bij ambachtelijke custard vervaardiging?"
        },
        options: [
          { en: "Aged eggs have no advantages", es: "Los huevos envejecidos no tienen ventajas", de: "Gealterte Eier haben keine Vorteile", nl: "Gerijpte eieren hebben geen voordelen" },
          { en: "Farm-fresh eggs provide richer flavor, deeper color, and better emulsification properties", es: "Los huevos frescos de granja proporcionan sabor más rico, color más profundo y mejores propiedades de emulsificación", de: "Frische Bauernhof-Eier bieten reicheren Geschmack, tiefere Farbe und bessere Emulgiereigenschaften", nl: "Verse boerderij-eieren bieden rijkere smaak, diepere kleur en betere emulgatie eigenschappen" },
          { en: "Commercial eggs are always superior", es: "Los huevos comerciales siempre son superiores", de: "Kommerzielle Eier sind immer überlegen", nl: "Commerciële eieren zijn altijd superieur" },
          { en: "Age of eggs doesn't affect custard quality", es: "La edad de los huevos no afecta la calidad de las natillas", de: "Das Alter der Eier beeinflusst die Pudding-Qualität nicht", nl: "Leeftijd van eieren beïnvloedt custard kwaliteit niet" }
        ],
        correct: 1,
        explanation: {
          en: "Farm-fresh eggs from pasture-raised hens typically have richer yolks with higher fat content, more intense color from carotenoids, and stronger lecithin content for better emulsification, resulting in superior custard texture and flavor.",
          es: "Los huevos frescos de granja de gallinas criadas en pasturas típicamente tienen yemas más ricas con mayor contenido de grasa, color más intenso de carotenoides y mayor contenido de lecitina para mejor emulsificación, resultando en textura y sabor superior de natillas.",
          de: "Frische Bauernhof-Eier von Weidehennen haben typischerweise reichere Eigelb mit höherem Fettgehalt, intensivere Farbe durch Carotinoide und stärkeren Lecithingehalt für bessere Emulgierung, was zu überlegener Pudding-Textur und Geschmack führt.",
          nl: "Verse boerderij-eieren van weidekippen hebben typisch rijkere dooiers met hoger vetgehalte, intensere kleur door carotenoïden en sterker lecithinegehalte voor betere emulgatie, wat resulteert in superieure custard textuur en smaak."
        }
      },
      {
        question: {
          en: "What is the traditional artisan method for creating custard 'pearls' or small custard spheres?",
          es: "¿Cuál es el método artesanal tradicional para crear 'perlas' de natillas o pequeñas esferas de natillas?",
          de: "Was ist die traditionelle handwerkliche Methode zur Herstellung von Pudding-'Perlen' oder kleinen Pudding-Kugeln?",
          nl: "Wat is de traditionele ambachtelijke methode voor het creëren van custard 'parels' of kleine custard bolletjes?"
        },
        options: [
          { en: "Using specialized molds only", es: "Usando solo moldes especializados", de: "Nur mit spezialisierten Formen", nl: "Alleen gespecialiseerde vormen gebruiken" },
          { en: "Spherification using sodium alginate and calcium chloride baths", es: "Esferificación usando alginato de sodio y baños de cloruro de calcio", de: "Sphärifizierung mit Natriumalginat und Calciumchlorid-Bädern", nl: "Spherificatie met natriumalginaat en calciumchloride baden" },
          { en: "Freezing custard in ice cube trays", es: "Congelar natillas en bandejas de cubitos de hielo", de: "Pudding in Eiswürfelformen einfrieren", nl: "Custard bevriezen in ijsblokjesvormen" },
          { en: "Rolling custard by hand into balls", es: "Enrollar natillas a mano en bolas", de: "Pudding von Hand zu Kugeln rollen", nl: "Custard met de hand tot ballen rollen" }
        ],
        correct: 1,
        explanation: {
          en: "Custard spherification uses molecular gastronomy techniques with sodium alginate added to custard and calcium chloride baths to create gel membranes around liquid custard centers, forming pearl-like spheres that burst with flavor.",
          es: "La esferificación de natillas usa técnicas de gastronomía molecular con alginato de sodio agregado a las natillas y baños de cloruro de calcio para crear membranas de gel alrededor de centros líquidos de natillas, formando esferas como perlas que explotan con sabor.",
          de: "Pudding-Sphärifizierung verwendet molekulargastronomische Techniken mit Natriumalginat, das zum Pudding hinzugefügt wird, und Calciumchlorid-Bädern, um Gel-Membranen um flüssige Pudding-Zentren zu schaffen, wodurch perlenartige Kugeln entstehen, die vor Geschmack platzen.",
          nl: "Custard spherificatie gebruikt moleculaire gastronomie technieken met natriumalginaat toegevoegd aan custard en calciumchloride baden om gel membranen te creëren rond vloeibare custard centra, waardoor parelvormige bolletjes ontstaan die barsten van smaak."
        }
      },
      {
        question: {
          en: "What traditional technique do artisan custard makers use to prevent skin formation during cooling?",
          es: "¿Qué técnica tradicional usan los artesanos de natillas para prevenir la formación de piel durante el enfriamiento?",
          de: "Welche traditionelle Technik verwenden handwerkliche Pudding-Hersteller, um Hautbildung während des Abkühlens zu verhindern?",
          nl: "Welke traditionele techniek gebruiken ambachtelijke custard makers om velvorming tijdens het afkoelen te voorkomen?"
        },
        options: [
          { en: "Covering with aluminum foil", es: "Cubrir con papel de aluminio", de: "Mit Aluminiumfolie abdecken", nl: "Bedekken met aluminiumfolie" },
          { en: "Direct contact covering with plastic film or parchment paper pressed onto surface", es: "Cobertura de contacto directo con película plástica o papel pergamino presionado sobre la superficie", de: "Direkter Kontakt mit Plastikfolie oder Pergamentpapier auf die Oberfläche gedrückt", nl: "Direct contact bedekking met plastic folie of bakpapier gedrukt op het oppervlak" },
          { en: "Stirring continuously while cooling", es: "Revolver continuamente mientras se enfría", de: "Kontinuierliches Rühren während des Abkühlens", nl: "Continu roeren tijdens het afkoelen" },
          { en: "Adding more cream to the top", es: "Agregar más nata encima", de: "Mehr Sahne oben hinzufügen", nl: "Meer room bovenop toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Direct contact covering with plastic film or parchment paper pressed directly onto the custard surface prevents air exposure and moisture evaporation, which causes skin formation. This traditional technique maintains smooth texture.",
          es: "La cobertura de contacto directo con película plástica o papel pergamino presionado directamente sobre la superficie de las natillas previene la exposición al aire y la evaporación de humedad, que causa la formación de piel. Esta técnica tradicional mantiene la textura suave.",
          de: "Direktes Kontaktabdecken mit Plastikfolie oder Pergamentpapier, das direkt auf die Pudding-Oberfläche gedrückt wird, verhindert Luftexposition und Feuchtigkeitsverdunstung, die Hautbildung verursacht. Diese traditionelle Technik erhält glatte Textur.",
          nl: "Direct contact bedekking met plastic folie of bakpapier gedrukt direct op het custard oppervlak voorkomt luchtblootstelling en vochtevaporatie, wat velvorming veroorzaakt. Deze traditionele techniek behoudt gladde textuur."
        }
      },
      {
        question: {
          en: "What is the artisan significance of using copper pans for custard preparation?",
          es: "¿Cuál es la significancia artesanal de usar sartenes de cobre para la preparación de natillas?",
          de: "Was ist die handwerkliche Bedeutung der Verwendung von Kupferpfannen für die Pudding-Zubereitung?",
          nl: "Wat is de ambachtelijke betekenis van het gebruik van koperen pannen voor custard bereiding?"
        },
        options: [
          { en: "Copper provides even heat distribution and superior temperature control for delicate custards", es: "El cobre proporciona distribución uniforme del calor y control superior de temperatura para natillas delicadas", de: "Kupfer bietet gleichmäßige Wärmeverteilung und überlegene Temperaturkontrolle für delikate Puddings", nl: "Koper biedt gelijkmatige warmteverdeling en superieure temperatuurcontrole voor delicate custards" },
          { en: "Copper makes custard cook faster", es: "El cobre hace que las natillas se cocinen más rápido", de: "Kupfer lässt Pudding schneller kochen", nl: "Koper laat custard sneller koken" },
          { en: "Copper adds metallic flavor to custard", es: "El cobre agrega sabor metálico a las natillas", de: "Kupfer fügt metallischen Geschmack zum Pudding hinzu", nl: "Koper voegt metaalsmaak toe aan custard" },
          { en: "Copper is easier to clean than other materials", es: "El cobre es más fácil de limpiar que otros materiales", de: "Kupfer ist einfacher zu reinigen als andere Materialien", nl: "Koper is gemakkelijker schoon te maken dan andere materialen" }
        ],
        correct: 0,
        explanation: {
          en: "Copper's excellent thermal conductivity provides rapid, even heat distribution and responsive temperature control, essential for delicate custard preparations that require precise temperature management to prevent curdling.",
          es: "La excelente conductividad térmica del cobre proporciona distribución rápida y uniforme del calor y control receptivo de temperatura, esencial para preparaciones delicadas de natillas que requieren manejo preciso de temperatura para prevenir el cuajado.",
          de: "Kupfers ausgezeichnete Wärmeleitfähigkeit bietet schnelle, gleichmäßige Wärmeverteilung und reaktionsschnelle Temperaturkontrolle, wesentlich für delikate Pudding-Zubereitungen, die präzises Temperaturmanagement erfordern, um Gerinnung zu verhindern.",
          nl: "Kopers uitstekende thermische geleidbaarheid biedt snelle, gelijkmatige warmteverdeling en responsieve temperatuurcontrole, essentieel voor delicate custard bereidingen die nauwkeurig temperatuurbeheer vereisen om schifting te voorkomen."
        }
      },
      {
        question: {
          en: "What is the traditional artisan method for incorporating citrus zest into custard for optimal flavor release?",
          es: "¿Cuál es el método artesanal tradicional para incorporar ralladura de cítricos en natillas para liberación óptima de sabor?",
          de: "Was ist die traditionelle handwerkliche Methode zur Einarbeitung von Zitrusschale in Pudding für optimale Geschmacksfreisetzung?",
          nl: "Wat is de traditionele ambachtelijke methode voor het incorporeren van citrusschil in custard voor optimale smaakafgifte?"
        },
        options: [
          { en: "Add zest directly to finished custard", es: "Agregar ralladura directamente a las natillas terminadas", de: "Schale direkt zum fertigen Pudding hinzufügen", nl: "Schil direct aan afgewerkte custard toevoegen" },
          { en: "Infuse zest in warm milk or cream, then strain before adding eggs", es: "Infusionar ralladura en leche o nata tibia, luego colar antes de agregar huevos", de: "Schale in warmer Milch oder Sahne infundieren, dann abseihen vor Zugabe der Eier", nl: "Schil infuseren in warme melk of room, dan zeven voor het toevoegen van eieren" },
          { en: "Mix zest with sugar only", es: "Mezclar ralladura solo con azúcar", de: "Schale nur mit Zucker mischen", nl: "Schil alleen met suiker mengen" },
          { en: "Boil zest separately and add later", es: "Hervir ralladura por separado y agregar después", de: "Schale separat kochen und später hinzufügen", nl: "Schil apart koken en later toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Infusing citrus zest in warm milk or cream for 10-15 minutes extracts essential oils optimally, then straining removes fibrous particles while retaining aromatic compounds. This technique prevents bitter notes from prolonged heat exposure.",
          es: "Infusionar ralladura de cítricos en leche o nata tibia por 10-15 minutos extrae aceites esenciales óptimamente, luego colar remueve partículas fibrosas mientras retiene compuestos aromáticos. Esta técnica previene notas amargas de exposición prolongada al calor.",
          de: "Die Infusion von Zitrusschale in warmer Milch oder Sahne für 10-15 Minuten extrahiert ätherische Öle optimal, dann entfernt das Abseihen faserige Partikel, während aromatische Verbindungen erhalten bleiben. Diese Technik verhindert bittere Noten durch längere Hitzeeinwirkung.",
          nl: "Citrusschil infuseren in warme melk of room gedurende 10-15 minuten extraheert etherische oliën optimaal, vervolgens zeven verwijdert vezelige deeltjes terwijl aromatische verbindingen behouden blijven. Deze techniek voorkomt bittere tonen door langdurige hitteblootstelling."
        }
      },
      {
        question: {
          en: "What is the artisan technique of 'confit' when applied to custard ingredients?",
          es: "¿Qué es la técnica artesanal de 'confit' cuando se aplica a ingredientes de natillas?",
          de: "Was ist die handwerkliche Technik 'Confit' wenn sie auf Pudding-Zutaten angewendet wird?",
          nl: "Wat is de ambachtelijke techniek van 'confit' wanneer toegepast op custard ingrediënten?"
        },
        options: [
          { en: "Rapid high-heat cooking", es: "Cocción rápida a fuego alto", de: "Schnelles Kochen bei hoher Hitze", nl: "Snel koken op hoge temperatuur" },
          { en: "Slow, low-temperature cooking in fat or oil to preserve and intensify flavors", es: "Cocción lenta a baja temperatura en grasa o aceite para preservar e intensificar sabores", de: "Langsames, niedertemperatur Kochen in Fett oder Öl um Aromen zu bewahren und zu intensivieren", nl: "Langzaam, lage temperatuur koken in vet of olie om smaken te bewaren en intensiveren" },
          { en: "Freezing ingredients before use", es: "Congelar ingredientes antes del uso", de: "Zutaten vor Gebrauch einfrieren", nl: "Ingrediënten invriezen voor gebruik" },
          { en: "Dehydrating ingredients completely", es: "Deshidratar ingredientes completamente", de: "Zutaten vollständig dehydrieren", nl: "Ingrediënten volledig dehydrateren" }
        ],
        correct: 1,
        explanation: {
          en: "Confit involves slow, gentle cooking at low temperatures in fat or oil. For custards, this technique might be used for ingredients like garlic, herbs, or fruits to preserve and concentrate flavors before incorporation.",
          es: "Confit involucra cocción lenta y suave a bajas temperaturas en grasa o aceite. Para natillas, esta técnica puede usarse para ingredientes como ajo, hierbas o frutas para preservar y concentrar sabores antes de la incorporación.",
          de: "Confit beinhaltet langsames, sanftes Kochen bei niedrigen Temperaturen in Fett oder Öl. Für Puddings kann diese Technik für Zutaten wie Knoblauch, Kräuter oder Früchte verwendet werden, um Aromen vor der Einarbeitung zu bewahren und zu konzentrieren.",
          nl: "Confit behelst langzaam, zacht koken op lage temperaturen in vet of olie. Voor custards kan deze techniek gebruikt worden voor ingrediënten zoals knoflook, kruiden of fruit om smaken te bewaren en concentreren voor incorporatie."
        }
      },
      {
        question: {
          en: "What is the significance of 'first draw' cream in artisan custard making?",
          es: "¿Cuál es la significancia de la nata de 'primera extracción' en la elaboración artesanal de natillas?",
          de: "Was ist die Bedeutung von 'Erstabzug'-Sahne bei der handwerklichen Pudding-Herstellung?",
          nl: "Wat is de betekenis van 'eerste trek' room bij ambachtelijke custard vervaardiging?"
        },
        options: [
          { en: "It's the first cream produced by a cow each day", es: "Es la primera nata producida por una vaca cada día", de: "Es ist die erste Sahne, die eine Kuh jeden Tag produziert", nl: "Het is de eerste room geproduceerd door een koe elke dag" },
          { en: "The richest cream layer that naturally rises to the top of unhomogenized milk", es: "La capa de nata más rica que naturalmente sube a la parte superior de la leche no homogeneizada", de: "Die reichste Sahne-Schicht, die natürlich zur Oberseite von nicht-homogenisierter Milch aufsteigt", nl: "De rijkste room laag die natuurlijk naar de bovenkant van niet-gehomogeniseerde melk stijgt" },
          { en: "Cream extracted using the first milking machine", es: "Nata extraída usando la primera máquina ordeñadora", de: "Sahne extrahiert mit der ersten Melkmaschine", nl: "Room geëxtraheerd met de eerste melkmachine" },
          { en: "Synthetic cream produced in laboratories", es: "Nata sintética producida en laboratorios", de: "Synthetische Sahne in Labors produziert", nl: "Synthetische room geproduceerd in laboratoria" }
        ],
        correct: 1,
        explanation: {
          en: "First draw cream is the richest, naturally separated cream layer from unhomogenized milk. It contains the highest fat content and superior flavor compounds, making it prized by artisan custard makers for exceptional texture and taste.",
          es: "La nata de primera extracción es la capa de nata más rica y naturalmente separada de la leche no homogeneizada. Contiene el mayor contenido de grasa y compuestos de sabor superiores, haciéndola preciada por artesanos de natillas para textura y sabor excepcionales.",
          de: "Erstabzug-Sahne ist die reichste, natürlich getrennte Sahne-Schicht von nicht-homogenisierter Milch. Sie enthält den höchsten Fettgehalt und überlegene Geschmacksverbindungen, wodurch sie von handwerklichen Pudding-Herstellern für außergewöhnliche Textur und Geschmack geschätzt wird.",
          nl: "Eerste trek room is de rijkste, natuurlijk gescheiden room laag van niet-gehomogeniseerde melk. Het bevat het hoogste vetgehalte en superieure smaakverbindingen, waardoor het gewaardeerd wordt door ambachtelijke custard makers voor uitzonderlijke textuur en smaak."
        }
      },
      {
        question: {
          en: "What is the traditional artisan approach to achieving layered flavor profiles in heritage custard recipes?",
          es: "¿Cuál es el enfoque artesanal tradicional para lograr perfiles de sabor en capas en recetas de natillas patrimoniales?",
          de: "Was ist der traditionelle handwerkliche Ansatz zur Erreichung von geschichteten Geschmacksprofilen in traditionellen Pudding-Rezepten?",
          nl: "Wat is de traditionele ambachtelijke benadering voor het bereiken van gelaagde smaakprofielen in erfgoed custard recepten?"
        },
        options: [
          { en: "Using only single-note flavors", es: "Usando solo sabores de una sola nota", de: "Nur eintönige Aromen verwenden", nl: "Alleen enkele-noot smaken gebruiken" },
          { en: "Sequential infusion of ingredients at different stages and temperatures to build complexity", es: "Infusión secuencial de ingredientes en diferentes etapas y temperaturas para construir complejidad", de: "Sequenzielle Infusion von Zutaten in verschiedenen Stadien und Temperaturen um Komplexität aufzubauen", nl: "Sequentiële infusie van ingrediënten in verschillende stadia en temperaturen om complexiteit op te bouwen" },
          { en: "Adding all flavors at once", es: "Agregar todos los sabores a la vez", de: "Alle Aromen auf einmal hinzufügen", nl: "Alle smaken tegelijk toevoegen" },
          { en: "Using artificial flavor enhancers only", es: "Usando solo potenciadores de sabor artificiales", de: "Nur künstliche Geschmacksverstärker verwenden", nl: "Alleen kunstmatige smaakversterkers gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Heritage custard recipes build layered complexity through sequential infusion - base flavors infused first in warm milk, middle notes added during tempering, and top notes incorporated after cooking. This traditional approach creates depth and balance.",
          es: "Las recetas de natillas patrimoniales construyen complejidad en capas a través de infusión secuencial - sabores base infusionados primero en leche tibia, notas medias agregadas durante el templado, y notas altas incorporadas después de cocinar. Este enfoque tradicional crea profundidad y equilibrio.",
          de: "Traditionelle Pudding-Rezepte bauen geschichtete Komplexität durch sequenzielle Infusion auf - Basis-Aromen zuerst in warmer Milch infundiert, mittlere Noten während des Temperierens hinzugefügt, und Kopfnoten nach dem Kochen eingearbeitet. Dieser traditionelle Ansatz schafft Tiefe und Balance.",
          nl: "Erfgoed custard recepten bouwen gelaagde complexiteit door sequentiële infusie - basis smaken eerst geïnfuseerd in warme melk, middentonen toegevoegd tijdens tempereren, en topnoten geïncorporeerd na het koken. Deze traditionele benadering creëert diepte en balans."
        }
      },
      {
        question: {
          en: "What is the artisan method for testing custard doneness without using a thermometer?",
          es: "¿Cuál es el método artesanal para probar el punto de cocción de las natillas sin usar termómetro?",
          de: "Was ist die handwerkliche Methode zum Testen der Pudding-Garheit ohne Thermometer zu verwenden?",
          nl: "Wat is de ambachtelijke methode voor het testen van custard gaarheid zonder een thermometer te gebruiken?"
        },
        options: [
          { en: "Visual inspection only", es: "Solo inspección visual", de: "Nur visuelle Inspektion", nl: "Alleen visuele inspectie" },
          { en: "The nappe test combined with listening for changes in bubbling sounds", es: "La prueba nappe combinada con escuchar cambios en los sonidos de burbujeo", de: "Der Nappe-Test kombiniert mit dem Hören auf Veränderungen in den Blasengeräuschen", nl: "De nappe test gecombineerd met luisteren naar veranderingen in borrelgeluiden" },
          { en: "Tasting every few minutes", es: "Probar cada pocos minutos", de: "Alle paar Minuten probieren", nl: "Elke paar minuten proeven" },
          { en: "Timing alone without testing", es: "Solo cronometraje sin pruebas", de: "Nur Zeitmessung ohne Testen", nl: "Alleen timing zonder testen" }
        ],
        correct: 1,
        explanation: {
          en: "Experienced artisan custard makers use the nappe test (coating a spoon) combined with auditory cues - properly cooked custard stops making rapid bubbling sounds as proteins coagulate and the mixture thickens, creating a more subdued, gentle simmer.",
          es: "Los artesanos experimentados de natillas usan la prueba nappe (cubrir una cuchara) combinada con señales auditivas - las natillas bien cocidas dejan de hacer sonidos de burbujeo rápido cuando las proteínas se coagulan y la mezcla se espesa, creando un hervor más suave y sutil.",
          de: "Erfahrene handwerkliche Pudding-Hersteller verwenden den Nappe-Test (Löffel überziehen) kombiniert mit akustischen Hinweisen - richtig gekochter Pudding hört auf, schnelle Blasengeräusche zu machen, wenn Proteine koagulieren und die Mischung verdickt, wodurch ein gedämpfteres, sanfteres Köcheln entsteht.",
          nl: "Ervaren ambachtelijke custard makers gebruiken de nappe test (lepel bedekken) gecombineerd met auditieve signalen - goed gekookte custard stopt met het maken van snelle borrelgeluiden wanneer eiwitten coaguleren en het mengsel verdikt, waardoor een meer ingetogen, zachte prutteling ontstaat."
        }
      },
      {
        question: {
          en: "What is the significance of using wooden spoons vs metal utensils in artisan custard preparation?",
          es: "¿Cuál es la significancia de usar cucharas de madera vs utensilios de metal en la preparación artesanal de natillas?",
          de: "Was ist die Bedeutung der Verwendung von Holzlöffeln vs Metall-Utensilien bei der handwerklichen Pudding-Zubereitung?",
          nl: "Wat is de betekenis van het gebruik van houten lepels vs metalen gebruiksvoorwerpen bij ambachtelijke custard bereiding?"
        },
        options: [
          { en: "Wooden spoons are cheaper than metal", es: "Las cucharas de madera son más baratas que el metal", de: "Holzlöffel sind billiger als Metall", nl: "Houten lepels zijn goedkoper dan metaal" },
          { en: "Wood doesn't conduct heat, protecting custard from hot spots and allowing better temperature control", es: "La madera no conduce calor, protegiendo las natillas de puntos calientes y permitiendo mejor control de temperatura", de: "Holz leitet keine Wärme, schützt Pudding vor heißen Stellen und ermöglicht bessere Temperaturkontrolle", nl: "Hout geleidt geen warmte, beschermt custard tegen hete plekken en zorgt voor betere temperatuurcontrole" },
          { en: "Metal spoons add flavor to custard", es: "Las cucharas de metal agregan sabor a las natillas", de: "Metalllöffel fügen Geschmack zum Pudding hinzu", nl: "Metalen lepels voegen smaak toe aan custard" },
          { en: "Wooden spoons work faster than metal", es: "Las cucharas de madera funcionan más rápido que el metal", de: "Holzlöffel arbeiten schneller als Metall", nl: "Houten lepels werken sneller dan metaal" }
        ],
        correct: 1,
        explanation: {
          en: "Wooden spoons don't conduct heat like metal utensils, preventing hot spots that could cause localized protein coagulation. They allow for gentler stirring and better temperature control, essential for delicate custard preparation.",
          es: "Las cucharas de madera no conducen calor como los utensilios de metal, previniendo puntos calientes que podrían causar coagulación localizada de proteínas. Permiten agitación más suave y mejor control de temperatura, esencial para la preparación delicada de natillas.",
          de: "Holzlöffel leiten keine Wärme wie Metall-Utensilien, verhindern heiße Stellen, die lokalisierte Proteinkoagulation verursachen könnten. Sie ermöglichen sanfteres Rühren und bessere Temperaturkontrolle, wesentlich für delikate Pudding-Zubereitung.",
          nl: "Houten lepels geleiden geen warmte zoals metalen gebruiksvoorwerpen, voorkomen hete plekken die gelokaliseerde eiwitcoagulatie zouden kunnen veroorzaken. Ze zorgen voor zachter roeren en betere temperatuurcontrole, essentieel voor delicate custard bereiding."
        }
      },
      {
        question: {
          en: "What is the artisan technique of 'mounting' or 'monter au beurre' when finishing custard sauces?",
          es: "¿Qué es la técnica artesanal de 'montaje' o 'monter au beurre' al terminar salsas de natillas?",
          de: "Was ist die handwerkliche Technik des 'Aufmontierens' oder 'Monter au Beurre' beim Fertigstellen von Pudding-Saucen?",
          nl: "Wat is de ambachtelijke techniek van 'monteren' of 'monter au beurre' bij het afwerken van custard sauzen?"
        },
        options: [
          { en: "Adding whipped cream to custard", es: "Agregar nata montada a las natillas", de: "Schlagsahne zum Pudding hinzufügen", nl: "Slagroom toevoegen aan custard" },
          { en: "Whisking cold butter into warm custard sauce off heat for richness and gloss", es: "Batir mantequilla fría en salsa de natillas tibia fuera del fuego para riqueza y brillo", de: "Kalte Butter in warme Pudding-Sauce ohne Hitze einrühren für Reichhaltigkeit und Glanz", nl: "Koude boter in warme custard saus roeren zonder warmte voor rijkdom en glans" },
          { en: "Freezing custard quickly", es: "Congelar natillas rápidamente", de: "Pudding schnell einfrieren", nl: "Custard snel bevriezen" },
          { en: "Adding sugar crystals for texture", es: "Agregar cristales de azúcar para textura", de: "Zuckerkristalle für Textur hinzufügen", nl: "Suikerkristallen toevoegen voor textuur" }
        ],
        correct: 1,
        explanation: {
          en: "Monter au beurre involves whisking small pieces of cold butter into warm custard sauce off the heat. This classic French technique adds richness, creates a glossy finish, and helps stabilize the emulsion through butter's lecithin content.",
          es: "Monter au beurre involucra batir pequeños trozos de mantequilla fría en salsa de natillas tibia fuera del fuego. Esta técnica francesa clásica agrega riqueza, crea un acabado brillante y ayuda a estabilizar la emulsión a través del contenido de lecitina de la mantequilla.",
          de: "Monter au Beurre beinhaltet das Einrühren kleiner Stücke kalter Butter in warme Pudding-Sauce ohne Hitze. Diese klassische französische Technik fügt Reichhaltigkeit hinzu, schafft ein glänzendes Finish und hilft, die Emulsion durch den Lecithingehalt der Butter zu stabilisieren.",
          nl: "Monter au beurre houdt in dat kleine stukjes koude boter in warme custard saus worden geklopt zonder warmte. Deze klassieke Franse techniek voegt rijkdom toe, creëert een glanzende afwerking en helpt de emulsie stabiliseren door het lecithinegehalte van de boter."
        }
      },
      {
        question: {
          en: "What is the traditional artisan approach to incorporating alcohol into custard while maintaining proper texture?",
          es: "¿Cuál es el enfoque artesanal tradicional para incorporar alcohol en natillas mientras se mantiene la textura adecuada?",
          de: "Was ist der traditionelle handwerkliche Ansatz zur Einarbeitung von Alkohol in Pudding bei Erhaltung der richtigen Textur?",
          nl: "Wat is de traditionele ambachtelijke benadering voor het incorporeren van alcohol in custard terwijl de juiste textuur behouden blijft?"
        },
        options: [
          { en: "Add alcohol directly to hot custard", es: "Agregar alcohol directamente a las natillas calientes", de: "Alkohol direkt zu heißem Pudding hinzufügen", nl: "Alcohol direct aan hete custard toevoegen" },
          { en: "Cook alcohol separately first to reduce, then incorporate into cooled custard to preserve texture", es: "Cocinar alcohol por separado primero para reducir, luego incorporar en natillas enfriadas para preservar textura", de: "Alkohol zuerst separat kochen zum Reduzieren, dann in gekühlten Pudding einarbeiten um Textur zu bewahren", nl: "Alcohol eerst apart koken om te reduceren, dan incorporeren in afgekoelde custard om textuur te behouden" },
          { en: "Mix alcohol with eggs before cooking", es: "Mezclar alcohol con huevos antes de cocinar", de: "Alkohol mit Eiern vor dem Kochen mischen", nl: "Alcohol mengen met eieren voor het koken" },
          { en: "Alcohol cannot be used in custard", es: "El alcohol no puede usarse en natillas", de: "Alkohol kann nicht in Pudding verwendet werden", nl: "Alcohol kan niet gebruikt worden in custard" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional artisans first reduce alcohol separately to concentrate flavors and remove harsh notes, then incorporate it into cooled custard. This prevents alcohol from interfering with protein coagulation and maintains proper custard texture.",
          es: "Los artesanos tradicionales primero reducen el alcohol por separado para concentrar sabores y eliminar notas ásperas, luego lo incorporan en natillas enfriadas. Esto previene que el alcohol interfiera con la coagulación de proteínas y mantiene la textura adecuada de las natillas.",
          de: "Traditionelle Handwerker reduzieren zuerst Alkohol separat, um Aromen zu konzentrieren und harte Noten zu entfernen, dann arbeiten sie ihn in gekühlten Pudding ein. Dies verhindert, dass Alkohol die Proteinkoagulation stört und erhält die richtige Pudding-Textur.",
          nl: "Traditionele ambachtslieden reduceren eerst alcohol apart om smaken te concentreren en harde tonen te verwijderen, dan incorporeren ze het in afgekoelde custard. Dit voorkomt dat alcohol interfereert met eiwitcoagulatie en behoudt de juiste custard textuur."
        }
      },
      {
        question: {
          en: "What is the artisan significance of using heritage breed poultry eggs in premium custard production?",
          es: "¿Cuál es la significancia artesanal de usar huevos de aves de razas patrimoniales en producción premium de natillas?",
          de: "Was ist die handwerkliche Bedeutung der Verwendung von Eiern alter Geflügelrassen in der Premium-Pudding-Produktion?",
          nl: "Wat is de ambachtelijke betekenis van het gebruik van erfgoed ras pluimvee eieren in premium custard productie?"
        },
        options: [
          { en: "Heritage eggs have no special advantages", es: "Los huevos patrimoniales no tienen ventajas especiales", de: "Eier alter Rassen haben keine besonderen Vorteile", nl: "Erfgoed eieren hebben geen speciale voordelen" },
          { en: "Heritage breeds provide distinct flavor profiles, richer yolks, and unique terroir characteristics", es: "Las razas patrimoniales proporcionan perfiles de sabor distintos, yemas más ricas y características únicas de terroir", de: "Alte Rassen bieten unterschiedliche Geschmacksprofile, reichere Eigelb und einzigartige Terroir-Eigenschaften", nl: "Erfgoed rassen bieden verschillende smaakprofielen, rijkere dooiers en unieke terroir kenmerken" },
          { en: "They are cheaper than commercial eggs", es: "Son más baratos que los huevos comerciales", de: "Sie sind billiger als kommerzielle Eier", nl: "Ze zijn goedkoper dan commerciële eieren" },
          { en: "Heritage eggs cook faster", es: "Los huevos patrimoniales se cocinan más rápido", de: "Eier alter Rassen kochen schneller", nl: "Erfgoed eieren koken sneller" }
        ],
        correct: 1,
        explanation: {
          en: "Heritage breed poultry eggs offer artisan custard makers unique flavor profiles influenced by genetics, diet, and environment. These eggs often have deeper yolk color, richer taste, and distinct terroir characteristics that elevate premium custard applications.",
          es: "Los huevos de aves de razas patrimoniales ofrecen a los artesanos de natillas perfiles de sabor únicos influenciados por genética, dieta y ambiente. Estos huevos a menudo tienen color de yema más profundo, sabor más rico y características distintivas de terroir que elevan aplicaciones premium de natillas.",
          de: "Eier alter Geflügelrassen bieten handwerklichen Pudding-Herstellern einzigartige Geschmacksprofile, die von Genetik, Ernährung und Umwelt beeinflusst werden. Diese Eier haben oft tiefere Eigelbfarbe, reicheren Geschmack und distincte Terroir-Eigenschaften, die Premium-Pudding-Anwendungen verbessern.",
          nl: "Erfgoed ras pluimvee eieren bieden ambachtelijke custard makers unieke smaakprofielen beïnvloed door genetica, dieet en omgeving. Deze eieren hebben vaak diepere dooier kleur, rijkere smaak en distincte terroir kenmerken die premium custard toepassingen verheffen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else {
    window.custardsLevel8 = level8;
  }
})();