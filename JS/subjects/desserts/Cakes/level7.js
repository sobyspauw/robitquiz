// Quiz Level 7: Dessert - Taarten
(function() {
  const level7Data = {
    name: {
      en: "Cakes - Advanced",
      es: "Pasteles - Avanzado",
      de: "Kuchen - Fortgeschrittene",
      nl: "Taarten - Gevorderd"
    },
    questions: [
      {
        question: {
          en: "What is the optimal temperature range for tempering dark chocolate to achieve proper crystalline structure?",
          es: "¿Cuál es el rango de temperatura óptimo para templar chocolate negro y lograr la estructura cristalina adecuada?",
          de: "Was ist der optimale Temperaturbereich für das Temperieren von dunkler Schokolade, um die richtige Kristallstruktur zu erreichen?",
          nl: "Wat is het optimale temperatuurbereik voor het tempereren van pure chocolade om de juiste kristalstructuur te bereiken?"
        },
        options: [
          { en: "45-50°C, cool to 27°C, reheat to 31-32°C", es: "45-50°C, enfriar a 27°C, recalentar a 31-32°C", de: "45-50°C, abkühlen auf 27°C, wieder erwärmen auf 31-32°C", nl: "45-50°C, afkoelen tot 27°C, opwarmen tot 31-32°C" },
          { en: "40-45°C, cool to 25°C, reheat to 28-29°C", es: "40-45°C, enfriar a 25°C, recalentar a 28-29°C", de: "40-45°C, abkühlen auf 25°C, wieder erwärmen auf 28-29°C", nl: "40-45°C, afkoelen tot 25°C, opwarmen tot 28-29°C" },
          { en: "50-55°C, cool to 30°C, reheat to 35°C", es: "50-55°C, enfriar a 30°C, recalentar a 35°C", de: "50-55°C, abkühlen auf 30°C, wieder erwärmen auf 35°C", nl: "50-55°C, afkoelen tot 30°C, opwarmen tot 35°C" },
          { en: "35-40°C, cool to 22°C, reheat to 26°C", es: "35-40°C, enfriar a 22°C, recalentar a 26°C", de: "35-40°C, abkühlen auf 22°C, wieder erwärmen auf 26°C", nl: "35-40°C, afkoelen tot 22°C, opwarmen tot 26°C" }
        ],
        correct: 0,
        explanation: {
          en: "Proper tempering of dark chocolate requires heating to 45-50°C to melt all crystals, cooling to 27°C to encourage stable beta crystals, then reheating to 31-32°C for working temperature. This creates the desired Form V crystals.",
          es: "El templado adecuado de chocolate negro requiere calentar a 45-50°C para derretir todos los cristales, enfriar a 27°C para fomentar cristales beta estables, luego recalentar a 31-32°C para temperatura de trabajo. Esto crea los cristales Forma V deseados.",
          de: "Richtiges Temperieren von dunkler Schokolade erfordert Erhitzen auf 45-50°C um alle Kristalle zu schmelzen, Abkühlen auf 27°C um stabile Beta-Kristalle zu fördern, dann Wiedererwärmen auf 31-32°C als Arbeitstemperatur. Dies erzeugt die gewünschten Form-V-Kristalle.",
          nl: "Correct tempereren van pure chocolade vereist verhitting tot 45-50°C om alle kristallen te smelten, afkoeling tot 27°C om stabiele bèta-kristallen aan te moedigen, dan opwarming tot 31-32°C als werktemperatuur. Dit creëert de gewenste Vorm V kristallen."
        }
      },
      {
        question: {
          en: "In laminated dough production, what is the critical factor that prevents butter from breaking through the dough during folding?",
          es: "En la producción de masa laminada, ¿cuál es el factor crítico que previene que la mantequilla rompa la masa durante el plegado?",
          de: "Bei der Herstellung von laminiertem Teig, was ist der kritische Faktor, der verhindert, dass Butter während des Faltens durch den Teig bricht?",
          nl: "Bij de productie van gelamineerd deeg, wat is de kritieke factor die voorkomt dat boter door het deeg breekt tijdens het vouwen?"
        },
        options: [
          { en: "Temperature consistency between dough and butter", es: "Consistencia de temperatura entre masa y mantequilla", de: "Temperaturkonsistenz zwischen Teig und Butter", nl: "Temperatuurconsistentie tussen deeg en boter" },
          { en: "High gluten content in the flour", es: "Alto contenido de gluten en la harina", de: "Hoher Glutengehalt im Mehl", nl: "Hoog glutengehalte in de bloem" },
          { en: "Adding extra water to the dough", es: "Agregar agua extra a la masa", de: "Extra Wasser zum Teig hinzufügen", nl: "Extra water toevoegen aan het deeg" },
          { en: "Rolling very quickly", es: "Estirar muy rápidamente", de: "Sehr schnell ausrollen", nl: "Heel snel uitrollen" }
        ],
        correct: 0,
        explanation: {
          en: "The dough and butter must have similar plasticity - both should be firm but pliable. If butter is too hard, it breaks through; if too soft, it merges with dough. Temperature control maintains this balance.",
          es: "La masa y mantequilla deben tener plasticidad similar - ambas deben estar firmes pero flexibles. Si la mantequilla está muy dura, rompe; si muy suave, se mezcla con la masa. El control de temperatura mantiene este equilibrio.",
          de: "Teig und Butter müssen ähnliche Plastizität haben - beide sollten fest aber formbar sein. Wenn Butter zu hart ist, bricht sie durch; wenn zu weich, verschmilzt sie mit dem Teig. Temperaturkontrolle hält dieses Gleichgewicht.",
          nl: "Het deeg en de boter moeten vergelijkbare plasticiteit hebben - beide moeten stevig maar buigzaam zijn. Als boter te hard is, breekt het door; als te zacht, vermengt het met het deeg. Temperatuurcontrole houdt deze balans."
        }
      },
      {
        question: {
          en: "What causes the 'weeping' phenomenon in lemon meringue pie, and how can it be prevented?",
          es: "¿Qué causa el fenómeno de 'llanto' en la tarta de merengue de limón, y cómo se puede prevenir?",
          de: "Was verursacht das 'Weinen'-Phänomen bei Zitronenbaiser-Kuchen und wie kann es verhindert werden?",
          nl: "Wat veroorzaakt het 'wenen' fenomeen in citroen meringue taart, en hoe kan dit worden voorkomen?"
        },
        options: [
          { en: "Underwhipped meringue; prevent by whipping to stiff peaks", es: "Merengue poco batido; prevenir batiendo a picos firmes", de: "Untgeschlagenes Baiser; verhindern durch Schlagen zu steifen Spitzen", nl: "Onvoldoende opgeklopte meringue; voorkomen door kloppen tot stijve pieken" },
          { en: "Syneresis from overcooked proteins; prevent by adding cornstarch to meringue", es: "Sineresis de proteínas sobrecocidas; prevenir agregando almidón de maíz al merengue", de: "Synerese von überkochten Proteinen; verhindern durch Zugabe von Maisstärke zum Baiser", nl: "Synerese van overkookte eiwitten; voorkomen door toevoegen van maïszetmeel aan meringue" },
          { en: "Too much sugar in the filling", es: "Demasiada azúcar en el relleno", de: "Zu viel Zucker in der Füllung", nl: "Te veel suiker in de vulling" },
          { en: "Meringue applied to cold filling", es: "Merengue aplicado a relleno frío", de: "Baiser auf kalte Füllung aufgetragen", nl: "Meringue aangebracht op koude vulling" }
        ],
        correct: 1,
        explanation: {
          en: "Weeping occurs due to syneresis - proteins in the meringue contract and squeeze out moisture when overheated. Adding cornstarch helps stabilize the foam structure and prevent moisture separation.",
          es: "El llanto ocurre debido a sineresis - las proteínas en el merengue se contraen y expulsan humedad cuando se sobrecalientan. Agregar almidón de maíz ayuda a estabilizar la estructura de espuma y prevenir la separación de humedad.",
          de: "Weinen tritt aufgrund von Synerese auf - Proteine im Baiser kontrahieren und pressen Feuchtigkeit heraus wenn überhitzt. Maisstärke-Zugabe hilft die Schaumstruktur zu stabilisieren und Feuchtigkeitstrennung zu verhindern.",
          nl: "Wenen treedt op door synerese - eiwitten in de meringue trekken samen en persen vocht eruit bij oververhitting. Maïszetmeel toevoegen helpt de schuimstructuur stabiliseren en vochtscheiding voorkomen."
        }
      },
      {
        question: {
          en: "What is the Maillard reaction's optimal pH range for achieving the best flavor development in cake batters?",
          es: "¿Cuál es el rango de pH óptimo de la reacción de Maillard para lograr el mejor desarrollo de sabor en masas de pasteles?",
          de: "Was ist der optimale pH-Bereich der Maillard-Reaktion für die beste Geschmacksentwicklung in Kuchenteigen?",
          nl: "Wat is het optimale pH-bereik van de Maillardreactie voor de beste smaaksontwikkeling in taartbeslagen?"
        },
        options: [
          { en: "pH 6.0-7.0 (neutral to slightly acidic)", es: "pH 6.0-7.0 (neutro a ligeramente ácido)", de: "pH 6.0-7.0 (neutral bis leicht sauer)", nl: "pH 6.0-7.0 (neutraal tot licht zuur)" },
          { en: "pH 7.5-9.0 (alkaline)", es: "pH 7.5-9.0 (alcalino)", de: "pH 7.5-9.0 (alkalisch)", nl: "pH 7.5-9.0 (alkalisch)" },
          { en: "pH 4.0-5.5 (acidic)", es: "pH 4.0-5.5 (ácido)", de: "pH 4.0-5.5 (sauer)", nl: "pH 4.0-5.5 (zuur)" },
          { en: "pH 10+ (highly alkaline)", es: "pH 10+ (altamente alcalino)", de: "pH 10+ (stark alkalisch)", nl: "pH 10+ (sterk alkalisch)" }
        ],
        correct: 1,
        explanation: {
          en: "The Maillard reaction proceeds faster and produces more complex flavors in alkaline conditions (pH 7.5-9.0). This is why adding baking soda to chocolate cakes enhances browning and flavor development.",
          es: "La reacción de Maillard procede más rápido y produce sabores más complejos en condiciones alcalinas (pH 7.5-9.0). Por esto agregar bicarbonato a pasteles de chocolate mejora el dorado y desarrollo de sabor.",
          de: "Die Maillard-Reaktion verläuft schneller und produziert komplexere Aromen unter alkalischen Bedingungen (pH 7.5-9.0). Deshalb verbessert Natronzugabe zu Schokoladenkuchen Bräunung und Geschmacksentwicklung.",
          nl: "De Maillardreactie verloopt sneller en produceert complexere smaken onder alkalische omstandigheden (pH 7.5-9.0). Daarom verbetert het toevoegen van zuiveringszout aan chocoladetaarten de bruining en smaaksontwikkeling."
        }
      },
      {
        question: {
          en: "In professional ganache making, what is the ideal ratio of chocolate to cream for a pipeable consistency at room temperature?",
          es: "En la elaboración profesional de ganache, ¿cuál es la proporción ideal de chocolate a crema para una consistencia manejable con manga a temperatura ambiente?",
          de: "Bei der professionellen Ganache-Herstellung, was ist das ideale Verhältnis von Schokolade zu Sahne für eine spritzbare Konsistenz bei Raumtemperatur?",
          nl: "Bij professionele ganache bereiding, wat is de ideale verhouding van chocolade tot room voor een spuitbare consistentie bij kamertemperatuur?"
        },
        options: [
          { en: "1:1 ratio (equal parts)", es: "Proporción 1:1 (partes iguales)", de: "1:1 Verhältnis (gleiche Teile)", nl: "1:1 verhouding (gelijke delen)" },
          { en: "2:1 ratio (chocolate to cream)", es: "Proporción 2:1 (chocolate a crema)", de: "2:1 Verhältnis (Schokolade zu Sahne)", nl: "2:1 verhouding (chocolade tot room)" },
          { en: "1:2 ratio (cream to chocolate)", es: "Proporción 1:2 (crema a chocolate)", de: "1:2 Verhältnis (Sahne zu Schokolade)", nl: "1:2 verhouding (room tot chocolade)" },
          { en: "3:1 ratio (chocolate to cream)", es: "Proporción 3:1 (chocolate a crema)", de: "3:1 Verhältnis (Schokolade zu Sahne)", nl: "3:1 verhouding (chocolade tot room)" }
        ],
        correct: 1,
        explanation: {
          en: "A 2:1 ratio (chocolate to cream) creates the perfect pipeable consistency for decorating and filling. This ratio provides enough structure to hold its shape while remaining smooth and workable.",
          es: "Una proporción 2:1 (chocolate a crema) crea la consistencia perfecta manejeable con manga para decorar y rellenar. Esta proporción proporciona suficiente estructura para mantener su forma mientras permanece suave y trabajable.",
          de: "Ein 2:1 Verhältnis (Schokolade zu Sahne) schafft die perfekte spritzbare Konsistenz zum Dekorieren und Füllen. Dieses Verhältnis bietet genug Struktur um Form zu behalten während es glatt und bearbeitbar bleibt.",
          nl: "Een 2:1 verhouding (chocolade tot room) creëert de perfecte spuitbare consistentie voor decoreren en vullen. Deze verhouding biedt genoeg structuur om zijn vorm te behouden terwijl het glad en werkbaar blijft."
        }
      },
      {
        question: {
          en: "What is the purpose of 'blooming' gelatin, and what happens if this step is skipped?",
          es: "¿Cuál es el propósito de 'hidratar' la gelatina, y qué pasa si se omite este paso?",
          de: "Was ist der Zweck des 'Quellens' von Gelatine, und was passiert wenn dieser Schritt übersprungen wird?",
          nl: "Wat is het doel van het 'weken' van gelatine, en wat gebeurt er als deze stap wordt overgeslagen?"
        },
        options: [
          { en: "Blooming is unnecessary; gelatin works the same without it", es: "Hidratar es innecesario; la gelatina funciona igual sin ello", de: "Quellen ist unnötig; Gelatine funktioniert gleich ohne es", nl: "Weken is onnodig; gelatine werkt hetzelfde zonder" },
          { en: "Blooming allows gelatin to absorb liquid evenly; skipping causes lumps and uneven setting", es: "Hidratar permite que la gelatina absorba líquido uniformemente; omitirlo causa grumos y cuajado desigual", de: "Quellen ermöglicht Gelatine gleichmäßige Flüssigkeitsaufnahme; Überspringen verursacht Klumpen und ungleichmäßiges Setzen", nl: "Weken laat gelatine vloeistof gelijkmatig absorberen; overslaan veroorzaakt klontjes en ongelijkmatig stollen" },
          { en: "Blooming makes gelatin stronger", es: "Hidratar hace la gelatina más fuerte", de: "Quellen macht Gelatine stärker", nl: "Weken maakt gelatine sterker" },
          { en: "Blooming only affects the taste", es: "Hidratar solo afecta el sabor", de: "Quellen beeinflusst nur den Geschmack", nl: "Weken beïnvloedt alleen de smaak" }
        ],
        correct: 1,
        explanation: {
          en: "Blooming allows gelatin granules to absorb cold liquid and swell evenly before dissolving. Without blooming, gelatin doesn't dissolve completely, creating lumps and weak, uneven gel structure.",
          es: "Hidratar permite que los gránulos de gelatina absorban líquido frío y se hinchen uniformemente antes de disolverse. Sin hidratar, la gelatina no se disuelve completamente, creando grumos y estructura de gel débil y desigual.",
          de: "Quellen ermöglicht Gelatinekörnern kalte Flüssigkeit aufzunehmen und gleichmäßig zu schwellen vor dem Auflösen. Ohne Quellen löst sich Gelatine nicht vollständig auf, was Klumpen und schwache, ungleichmäßige Gelstruktur schafft.",
          nl: "Weken laat gelatinekorrels koude vloeistof absorberen en gelijkmatig opzwellen voor het oplossen. Zonder weken lost gelatine niet volledig op, wat klontjes en zwakke, ongelijkmatige gelstructuur creëert."
        }
      },
      {
        question: {
          en: "What is the function of inverting sugar in professional cake syrups, and how does it affect shelf life?",
          es: "¿Cuál es la función de invertir azúcar en jarabes profesionales para pasteles, y cómo afecta la vida útil?",
          de: "Was ist die Funktion der Inversion von Zucker in professionellen Kuchensirups, und wie beeinflusst es die Haltbarkeit?",
          nl: "Wat is de functie van het inverteren van suiker in professionele taart siropen, en hoe beïnvloedt het de houdbaarheid?"
        },
        options: [
          { en: "Invert sugar prevents crystallization and extends shelf life by binding water", es: "El azúcar invertido previene cristalización y extiende vida útil al unir agua", de: "Invertzucker verhindert Kristallisation und verlängert Haltbarkeit durch Wasserbindung", nl: "Invertsuiker voorkomt kristallisatie en verlengt houdbaarheid door water te binden" },
          { en: "It only changes the color of the syrup", es: "Solo cambia el color del jarabe", de: "Es ändert nur die Farbe des Sirups", nl: "Het verandert alleen de kleur van de siroop" },
          { en: "Invert sugar makes the syrup thicker", es: "El azúcar invertido hace el jarabe más espeso", de: "Invertzucker macht den Sirup dicker", nl: "Invertsuiker maakt de siroop dikker" },
          { en: "It reduces sweetness", es: "Reduce la dulzura", de: "Es reduziert die Süße", nl: "Het vermindert de zoetheid" }
        ],
        correct: 0,
        explanation: {
          en: "Inverted sugar (glucose + fructose) prevents recrystallization of sucrose, keeping syrups smooth. It's also hygroscopic, binding moisture and extending shelf life while maintaining texture.",
          es: "El azúcar invertido (glucosa + fructosa) previene la recristalización de la sacarosa, manteniendo jarabes suaves. También es higroscópico, une humedad y extiende vida útil mientras mantiene textura.",
          de: "Invertzucker (Glukose + Fruktose) verhindert Rekristallisation von Saccharose und hält Sirupe glatt. Er ist auch hygroskopisch, bindet Feuchtigkeit und verlängert Haltbarkeit bei Texturerhaltung.",
          nl: "Invertsuiker (glucose + fructose) voorkomt herkristallisatie van sacharose, houdt siropen glad. Het is ook hygroscopisch, bindt vocht en verlengt houdbaarheid terwijl het textuur behoudt."
        }
      },
      {
        question: {
          en: "In choux pastry production, what creates the characteristic hollow interior structure?",
          es: "En la producción de pasta choux, ¿qué crea la estructura interior hueca característica?",
          de: "Bei der Choux-Teig-Herstellung, was schafft die charakteristische hohle Innenstruktur?",
          nl: "Bij soesdeeg productie, wat creëert de karakteristieke holle binnenstructuur?"
        },
        options: [
          { en: "High oven temperature only", es: "Solo alta temperatura del horno", de: "Nur hohe Ofentemperatur", nl: "Alleen hoge oventemperatuur" },
          { en: "Steam from high moisture content creating internal pressure", es: "Vapor del alto contenido de humedad creando presión interna", de: "Dampf aus hohem Feuchtigkeitsgehalt schafft internen Druck", nl: "Stoom van hoog vochtgehalte creëert interne druk" },
          { en: "Chemical leavening agents", es: "Agentes leudantes químicos", de: "Chemische Triebmittel", nl: "Chemische rijsmiddelen" },
          { en: "Whipped egg whites", es: "Claras batidas", de: "Geschlagenes Eiweiß", nl: "Geklopte eiwitten" }
        ],
        correct: 1,
        explanation: {
          en: "Choux pastry contains very high moisture (about 50%). When baked, this water turns to steam, creating internal pressure that inflates the pastry. The coagulated proteins from eggs create the structure to hold this hollow interior.",
          es: "La pasta choux contiene muy alta humedad (cerca del 50%). Al hornear, esta agua se convierte en vapor, creando presión interna que infla la masa. Las proteínas coaguladas de huevos crean la estructura para mantener este interior hueco.",
          de: "Choux-Teig enthält sehr hohe Feuchtigkeit (etwa 50%). Beim Backen verwandelt sich dieses Wasser in Dampf und schafft internen Druck der den Teig aufbläht. Die koagulierten Proteine aus Eiern schaffen die Struktur um dieses hohle Innere zu halten.",
          nl: "Soesdeeg bevat zeer hoge vochtigheid (ongeveer 50%). Bij het bakken verandert dit water in stoom, wat interne druk creëert die het deeg opblaast. De gestolde eiwitten uit eieren creëren de structuur om dit holle interieur te houden."
        }
      },
      {
        question: {
          en: "What is the purpose of 'scaling' a cake batter, and what percentage deviation is acceptable in professional baking?",
          es: "¿Cuál es el propósito de 'pesar' una masa de pastel, y qué porcentaje de desviación es aceptable en repostería profesional?",
          de: "Was ist der Zweck des 'Abwiegens' eines Kuchenteigs, und welche prozentuale Abweichung ist im professionellen Backen akzeptabel?",
          nl: "Wat is het doel van het 'wegen' van taartbeslag, en welk percentage afwijking is acceptabel in professioneel bakken?"
        },
        options: [
          { en: "Even distribution; ±2% deviation acceptable", es: "Distribución uniforme; ±2% desviación aceptable", de: "Gleichmäßige Verteilung; ±2% Abweichung akzeptabel", nl: "Gelijkmatige verdeling; ±2% afwijking acceptabel" },
          { en: "Speed of production; ±10% deviation acceptable", es: "Velocidad de producción; ±10% desviación aceptable", de: "Produktionsgeschwindigkeit; ±10% Abweichung akzeptabel", nl: "Productiesnelheid; ±10% afwijking acceptabel" },
          { en: "Decoration purposes; ±15% deviation acceptable", es: "Propósitos decorativos; ±15% desviación aceptable", de: "Dekorationszwecke; ±15% Abweichung akzeptabel", nl: "Decoratieve doeleinden; ±15% afwijking acceptabel" },
          { en: "Temperature control; ±5% deviation acceptable", es: "Control de temperatura; ±5% desviación aceptable", de: "Temperaturkontrolle; ±5% Abweichung akzeptabel", nl: "Temperatuurcontrole; ±5% afwijking acceptabel" }
        ],
        correct: 0,
        explanation: {
          en: "Scaling ensures even distribution of batter for consistent baking times, texture, and portion control. Professional standards require ±2% accuracy to maintain product consistency and cost control.",
          es: "Pesar asegura distribución uniforme de masa para tiempos de horneado, textura y control de porciones consistentes. Estándares profesionales requieren precisión ±2% para mantener consistencia del producto y control de costos.",
          de: "Abwiegen gewährleistet gleichmäßige Teigverteilung für konsistente Backzeiten, Textur und Portionskontrolle. Professionelle Standards erfordern ±2% Genauigkeit um Produktkonsistenz und Kostenkontrolle zu erhalten.",
          nl: "Wegen zorgt voor gelijkmatige verdeling van beslag voor consistente baktijden, textuur en portiecontrole. Professionele standaarden vereisen ±2% nauwkeurigheid om productconsistentie en kostencontrole te behouden."
        }
      },
      {
        question: {
          en: "What is the difference between Swiss, Italian, and French buttercream in terms of preparation method?",
          es: "¿Cuál es la diferencia entre crema de mantequilla suiza, italiana y francesa en términos del método de preparación?",
          de: "Was ist der Unterschied zwischen Schweizer, italienischer und französischer Buttercreme bezüglich der Zubereitungsmethode?",
          nl: "Wat is het verschil tussen Zwitserse, Italiaanse en Franse botercrème qua bereidingsmethode?"
        },
        options: [
          { en: "Swiss: heated meringue, Italian: hot syrup, French: egg yolk base", es: "Suiza: merengue calentado, Italiana: jarabe caliente, Francesa: base de yema", de: "Schweizer: erhitztes Baiser, Italienisch: heißer Sirup, Französisch: Eigelbbasis", nl: "Zwitsers: verhitte meringue, Italiaans: hete siroop, Frans: eidooier basis" },
          { en: "All three methods are identical", es: "Los tres métodos son idénticos", de: "Alle drei Methoden sind identisch", nl: "Alle drie methoden zijn identiek" },
          { en: "Only temperature differences", es: "Solo diferencias de temperatura", de: "Nur Temperaturunterschiede", nl: "Alleen temperatuurverschillen" },
          { en: "Swiss: cold method, Italian: warm method, French: hot method", es: "Suiza: método frío, Italiana: método tibio, Francesa: método caliente", de: "Schweizer: kalte Methode, Italienisch: warme Methode, Französisch: heiße Methode", nl: "Zwitsers: koude methode, Italiaans: warme methode, Frans: hete methode" }
        ],
        correct: 0,
        explanation: {
          en: "Swiss buttercream heats egg whites and sugar together before whipping. Italian uses hot sugar syrup poured into whipping whites. French is based on egg yolks beaten with hot syrup, creating different textures and stability.",
          es: "La crema suiza calienta claras y azúcar juntas antes de batir. La italiana usa jarabe de azúcar caliente vertido en claras batiendo. La francesa se basa en yemas batidas con jarabe caliente, creando diferentes texturas y estabilidad.",
          de: "Schweizer Buttercreme erhitzt Eiweiß und Zucker zusammen vor dem Schlagen. Italienische verwendet heißen Zuckersirup der in schlagendes Eiweiß gegossen wird. Französische basiert auf Eigelb geschlagen mit heißem Sirup, was verschiedene Texturen und Stabilität schafft.",
          nl: "Zwitserse botercrème verwarmt eiwitten en suiker samen voor het kloppen. Italiaanse gebruikt hete suikersiroop gegoten in kloppende eiwitten. Franse is gebaseerd op eidooiers geklopt met hete siroop, wat verschillende texturen en stabiliteit creëert."
        }
      },
      {
        question: {
          en: "What causes 'tunneling' in quick breads and muffins, and how can it be prevented?",
          es: "¿Qué causa la formación de 'túneles' en panes rápidos y muffins, y cómo se puede prevenir?",
          de: "Was verursacht 'Tunnelbildung' in schnellen Broten und Muffins, und wie kann es verhindert werden?",
          nl: "Wat veroorzaakt 'tunneling' in snelle broden en muffins, en hoe kan het worden voorkomen?"
        },
        options: [
          { en: "Too little liquid; add more liquid ingredients", es: "Muy poco líquido; agregar más ingredientes líquidos", de: "Zu wenig Flüssigkeit; mehr flüssige Zutaten hinzufügen", nl: "Te weinig vloeistof; meer vloeibare ingrediënten toevoegen" },
          { en: "Oven temperature too low; increase temperature", es: "Temperatura del horno muy baja; aumentar temperatura", de: "Ofentemperatur zu niedrig; Temperatur erhöhen", nl: "Oventemperatuur te laag; temperatuur verhogen" },
          { en: "Overmixing develops gluten; use gentle folding motion", es: "Mezclar demasiado desarrolla gluten; usar movimiento de plegado suave", de: "Übermischen entwickelt Gluten; sanfte Faltbewegung verwenden", nl: "Te veel mengen ontwikkelt gluten; zachte vouwbeweging gebruiken" },
          { en: "Too much baking powder; reduce leavening", es: "Demasiado polvo de hornear; reducir leudante", de: "Zu viel Backpulver; Triebmittel reduzieren", nl: "Te veel bakpoeder; rijsmiddel verminderen" }
        ],
        correct: 2,
        explanation: {
          en: "Tunneling occurs when gluten is overdeveloped through excessive mixing, creating large air pockets and tough texture. The muffin method requires minimal mixing - just until ingredients are barely combined.",
          es: "Los túneles ocurren cuando el gluten se desarrolla excesivamente por mezcla excesiva, creando bolsas de aire grandes y textura dura. El método de muffin requiere mezcla mínima - solo hasta que los ingredientes apenas se combinen.",
          de: "Tunnelbildung tritt auf wenn Gluten durch übermäßiges Mischen überentwickelt wird, was große Lufttaschen und zähe Textur schafft. Die Muffin-Methode erfordert minimales Mischen - nur bis Zutaten kaum verbunden sind.",
          nl: "Tunneling treedt op wanneer gluten overontwikkeld wordt door excessief mengen, wat grote luchtzakken en taaie textuur creëert. De muffin methode vereist minimaal mengen - net tot ingrediënten nauwelijks gecombineerd zijn."
        }
      },
      {
        question: {
          en: "In sugar work, what is the hard crack stage temperature range, and why is it critical for creating glass-like decorations?",
          es: "En trabajo de azúcar, ¿cuál es el rango de temperatura de etapa de quiebre duro, y por qué es crítico para crear decoraciones tipo cristal?",
          de: "Bei der Zuckerarbeit, was ist der Temperaturbereich der harten Bruchstufe, und warum ist es kritisch für das Schaffen glasartiger Dekorationen?",
          nl: "Bij suikerwerk, wat is het temperatuurbereik van de harde kraak fase, en waarom is het cruciaal voor het creëren van glasachtige decoraties?"
        },
        options: [
          { en: "149-154°C; creates brittle texture that shatters cleanly", es: "149-154°C; crea textura quebradiza que se rompe limpiamente", de: "149-154°C; schafft spröde Textur die sauber zerbricht", nl: "149-154°C; creëert bros textuur die schoon breekt" },
          { en: "121-130°C; allows for flexible bending", es: "121-130°C; permite doblado flexible", de: "121-130°C; ermöglicht flexibles Biegen", nl: "121-130°C; maakt flexibel buigen mogelijk" },
          { en: "160-170°C; caramelizes for color", es: "160-170°C; carameliza para color", de: "160-170°C; karamelisiert für Farbe", nl: "160-170°C; karameliseert voor kleur" },
          { en: "135-143°C; maintains chewy texture", es: "135-143°C; mantiene textura masticable", de: "135-143°C; behält zähe Textur bei", nl: "135-143°C; behoudt taaie textuur" }
        ],
        correct: 0,
        explanation: {
          en: "Hard crack stage (149-154°C/300-310°F) removes virtually all moisture, creating a glass-like sugar structure that's brittle and shatters cleanly. This is essential for pulled sugar decorations and spun sugar work.",
          es: "La etapa de quiebre duro (149-154°C/300-310°F) remueve virtualmente toda humedad, creando estructura de azúcar tipo cristal que es quebradiza y se rompe limpiamente. Esto es esencial para decoraciones de azúcar tirado y trabajo de azúcar hilado.",
          de: "Harte Bruchstufe (149-154°C/300-310°F) entfernt praktisch alle Feuchtigkeit und schafft glasartige Zuckerstruktur die spröde ist und sauber zerbricht. Dies ist wesentlich für gezogene Zuckerdekorationen und gesponnene Zuckerarbeit.",
          nl: "Harde kraak fase (149-154°C/300-310°F) verwijdert vrijwel alle vocht, creërend een glasachtige suikerstructuur die bros is en schoon breekt. Dit is essentieel voor getrokken suiker decoraties en gesponnen suikerwerk."
        }
      },
      {
        question: {
          en: "What is the role of lecithin in chocolate work, and why is it particularly important for coating applications?",
          es: "¿Cuál es el papel de la lecitina en el trabajo con chocolate, y por qué es particularmente importante para aplicaciones de cobertura?",
          de: "Was ist die Rolle von Lecithin bei der Schokoladenarbeit, und warum ist es besonders wichtig für Überzugsanwendungen?",
          nl: "Wat is de rol van lecithine in chocoladewerk, en waarom is het bijzonder belangrijk voor coating toepassingen?"
        },
        options: [
          { en: "Adds sweetness to balance cocoa bitterness", es: "Agrega dulzura para balancear amargura del cacao", de: "Fügt Süße hinzu um Kakaobitterkeit zu balancieren", nl: "Voegt zoetheid toe om cacaobitterheid te balanceren" },
          { en: "Acts as emulsifier, reducing viscosity and improving flow properties", es: "Actúa como emulsificante, reduciendo viscosidad y mejorando propiedades de flujo", de: "Wirkt als Emulgator, reduziert Viskosität und verbessert Fließeigenschaften", nl: "Werkt als emulgator, vermindert viscositeit en verbetert stromingseigenschappen" },
          { en: "Prevents chocolate from melting at room temperature", es: "Previene que el chocolate se derrita a temperatura ambiente", de: "Verhindert dass Schokolade bei Raumtemperatur schmilzt", nl: "Voorkomt dat chocolade smelt bij kamertemperatuur" },
          { en: "Increases shelf life by preventing rancidity", es: "Aumenta vida útil previniendo rancidez", de: "Erhöht Haltbarkeit durch Ranzigkeitsverhütung", nl: "Verhoogt houdbaarheid door ranzigheid te voorkomen" }
        ],
        correct: 1,
        explanation: {
          en: "Lecithin is a phospholipid emulsifier that reduces chocolate's viscosity by helping cocoa particles disperse more easily. This creates better flow properties, making chocolate ideal for coating and molding applications.",
          es: "La lecitina es un emulsificante fosfolípido que reduce la viscosidad del chocolate ayudando a las partículas de cacao a dispersarse más fácilmente. Esto crea mejores propiedades de flujo, haciendo el chocolate ideal para aplicaciones de cobertura y moldeado.",
          de: "Lecithin ist ein Phospholipid-Emulgator der Schokoladenviskosität reduziert indem er Kakaopartikeln hilft sich leichter zu dispergieren. Dies schafft bessere Fließeigenschaften und macht Schokolade ideal für Überzugs- und Formanwendungen.",
          nl: "Lecithine is een fosfolipide emulgator die chocoladeviscositeit vermindert door cacaodeeltjes te helpen zich gemakkelijker te verspreiden. Dit creëert betere stromingseigenschappen, waardoor chocolade ideaal is voor coating en giet toepassingen."
        }
      },
      {
        question: {
          en: "What is the optimal hydration percentage for high-gluten bread flour in professional cake applications?",
          es: "¿Cuál es el porcentaje de hidratación óptimo para harina de pan de alto gluten en aplicaciones profesionales de pasteles?",
          de: "Was ist der optimale Hydratationsprozentsatz für glutenreiches Brotmehl in professionellen Kuchenanwendungen?",
          nl: "Wat is het optimale hydratie percentage voor hoog-gluten broodmeel in professionele taart toepassingen?"
        },
        options: [
          { en: "85-95% for maximum gluten development", es: "85-95% para máximo desarrollo de gluten", de: "85-95% für maximale Glutenentwicklung", nl: "85-95% voor maximale glutenontwikkeling" },
          { en: "60-70% for tender crumb structure", es: "60-70% para estructura de miga tierna", de: "60-70% für zarte Krumenstruktur", nl: "60-70% voor tere kruimstructuur" },
          { en: "45-55% for firm, dense texture", es: "45-55% para textura firme y densa", de: "45-55% für feste, dichte Textur", nl: "45-55% voor stevige, dichte textuur" },
          { en: "75-80% for balanced texture and structure", es: "75-80% para textura y estructura balanceadas", de: "75-80% für ausgewogene Textur und Struktur", nl: "75-80% voor gebalanceerde textuur en structuur" }
        ],
        correct: 1,
        explanation: {
          en: "For cakes using high-gluten flour, 60-70% hydration prevents excessive gluten development while maintaining enough moisture for tender crumb. Higher hydration would create tough, chewy texture inappropriate for cakes.",
          es: "Para pasteles usando harina de alto gluten, hidratación 60-70% previene desarrollo excesivo de gluten mientras mantiene suficiente humedad para miga tierna. Mayor hidratación crearía textura dura y masticable inapropiada para pasteles.",
          de: "Für Kuchen mit glutenreichem Mehl verhindert 60-70% Hydratation exzessive Glutenentwicklung während genug Feuchtigkeit für zarte Krume erhalten bleibt. Höhere Hydratation würde zähe, kaubare Textur schaffen die für Kuchen ungeeignet ist.",
          nl: "Voor taarten met hoog-gluten meel voorkomt 60-70% hydratie excessieve glutenontwikkeling terwijl voldoende vocht behouden blijft voor tere kruim. Hogere hydratie zou taaie, kauwbare textuur creëren die ongepast is voor taarten."
        }
      },
      {
        question: {
          en: "In professional cake decorating, what is the ideal consistency for royal icing used for flooding large areas?",
          es: "En decoración profesional de pasteles, ¿cuál es la consistencia ideal para glasa real usada para inundar áreas grandes?",
          de: "Bei der professionellen Kuchendekoration, was ist die ideale Konsistenz für Royal Icing zum Fluten großer Bereiche?",
          nl: "In professionele taartdecoratie, wat is de ideale consistentie voor royal icing gebruikt voor het overstromen van grote gebieden?"
        },
        options: [
          { en: "10-12 second consistency (ribbon test)", es: "Consistencia de 10-12 segundos (prueba de cinta)", de: "10-12 Sekunden Konsistenz (Bandtest)", nl: "10-12 seconden consistentie (lint test)" },
          { en: "15-20 second consistency", es: "Consistencia de 15-20 segundos", de: "15-20 Sekunden Konsistenz", nl: "15-20 seconden consistentie" },
          { en: "5-8 second consistency", es: "Consistencia de 5-8 segundos", de: "5-8 Sekunden Konsistenz", nl: "5-8 seconden consistentie" },
          { en: "Stiff peak consistency", es: "Consistencia de pico firme", de: "Steife Spitzen-Konsistenz", nl: "Stijve piek consistentie" }
        ],
        correct: 0,
        explanation: {
          en: "10-12 second consistency is ideal for flooding - thick enough to hold its shape initially but fluid enough to self-level. The ribbon test: icing should disappear into surface within 10-12 seconds when drizzled.",
          es: "La consistencia de 10-12 segundos es ideal para inundación - suficientemente espesa para mantener su forma inicialmente pero suficientemente fluida para auto-nivelarse. Prueba de cinta: el glaseado debe desaparecer en la superficie en 10-12 segundos cuando se rocía.",
          de: "10-12 Sekunden Konsistenz ist ideal zum Fluten - dick genug um anfangs Form zu halten aber fließend genug um sich selbst zu nivellieren. Bandtest: Zuckerguss sollte in 10-12 Sekunden in Oberfläche verschwinden wenn geträufelt.",
          nl: "10-12 seconden consistentie is ideaal voor overstroming - dik genoeg om aanvankelijk vorm te houden maar vloeiend genoeg om zichzelf te nivelleren. Lint test: icing moet binnen 10-12 seconden verdwijnen in oppervlak wanneer gedruppeld."
        }
      },
      {
        question: {
          en: "What is the scientific principle behind the 'creaming method' in cake making, and why does it create lighter texture?",
          es: "¿Cuál es el principio científico detrás del 'método cremoso' en elaboración de pasteles, y por qué crea textura más ligera?",
          de: "Was ist das wissenschaftliche Prinzip hinter der 'Aufschlagmethode' beim Kuchenbacken, und warum schafft sie leichtere Textur?",
          nl: "Wat is het wetenschappelijke principe achter de 'romige methode' in taart maken, en waarom creëert het lichtere textuur?"
        },
        options: [
          { en: "Chemical reaction between butter and sugar creates gas", es: "Reacción química entre mantequilla y azúcar crea gas", de: "Chemische Reaktion zwischen Butter und Zucker erzeugt Gas", nl: "Chemische reactie tussen boter en suiker creëert gas" },
          { en: "Mechanical incorporation of air through sugar crystals cutting fat", es: "Incorporación mecánica de aire a través de cristales de azúcar cortando grasa", de: "Mechanische Lufteinarbeitung durch Zuckerkristalle die Fett schneiden", nl: "Mechanische inwerking van lucht door suikerkristallen die vet snijden" },
          { en: "Emulsification process only", es: "Solo proceso de emulsificación", de: "Nur Emulgierungsprozess", nl: "Alleen emulgatieproces" },
          { en: "Temperature changes create expansion", es: "Cambios de temperatura crean expansión", de: "Temperaturänderungen schaffen Ausdehnung", nl: "Temperatuurveranderingen creëren uitbreiding" }
        ],
        correct: 1,
        explanation: {
          en: "The creaming method mechanically incorporates air as sharp sugar crystals cut through butter, creating tiny air pockets. These expand during baking, creating lighter texture. Proper creaming takes 5-8 minutes.",
          es: "El método cremoso incorpora mecánicamente aire mientras cristales afilados de azúcar cortan a través de mantequilla, creando pequeñas bolsas de aire. Estas se expanden durante el horneado, creando textura más ligera. Cremado adecuado toma 5-8 minutos.",
          de: "Die Aufschlagmethode arbeitet mechanisch Luft ein während scharfe Zuckerkristalle durch Butter schneiden und winzige Lufttaschen schaffen. Diese dehnen sich beim Backen aus und schaffen leichtere Textur. Richtiges Aufschlagen dauert 5-8 Minuten.",
          nl: "De romige methode werkt mechanisch lucht in terwijl scherpe suikerkristallen door boter snijden, kleine luchtzakjes creërend. Deze zetten uit tijdens bakken, creërend lichtere textuur. Goed romig maken duurt 5-8 minuten."
        }
      },
      {
        question: {
          en: "What causes the formation of a tough skin on custard surfaces, and how can it be prevented professionally?",
          es: "¿Qué causa la formación de una piel dura en superficies de natillas, y cómo se puede prevenir profesionalmente?",
          de: "Was verursacht die Bildung einer harten Haut auf Puddingoberflächen, und wie kann es professionell verhindert werden?",
          nl: "Wat veroorzaakt de vorming van een taaie huid op custard oppervlakken, en hoe kan dit professioneel worden voorkomen?"
        },
        options: [
          { en: "Too much sugar; reduce sugar content", es: "Demasiada azúcar; reducir contenido de azúcar", de: "Zu viel Zucker; Zuckergehalt reduzieren", nl: "Te veel suiker; suikergehalte verminderen" },
          { en: "Surface proteins coagulate from air exposure; cover with plastic wrap directly touching surface", es: "Proteínas de superficie coagulan por exposición al aire; cubrir con papel plástico tocando directamente la superficie", de: "Oberflächenproteine koagulieren durch Luftkontakt; mit Plastikfolie direkt die Oberfläche berührend abdecken", nl: "Oppervlakte eiwitten stollen door blootstelling aan lucht; bedekken met plastic folie die direct het oppervlak raakt" },
          { en: "Insufficient cooking time; cook longer", es: "Tiempo de cocción insuficiente; cocinar más tiempo", de: "Unzureichende Kochzeit; länger kochen", nl: "Onvoldoende kooktijd; langer koken" },
          { en: "Wrong type of milk; use whole milk only", es: "Tipo incorrecto de leche; usar solo leche entera", de: "Falsche Milchart; nur Vollmilch verwenden", nl: "Verkeerd type melk; alleen volle melk gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Skin forms when surface proteins coagulate due to air exposure and evaporation. Professional prevention involves placing plastic wrap directly on the custard surface to eliminate air contact and prevent moisture loss.",
          es: "La piel se forma cuando proteínas de superficie coagulan debido a exposición al aire y evaporación. Prevención profesional involucra colocar papel plástico directamente en superficie de natillas para eliminar contacto con aire y prevenir pérdida de humedad.",
          de: "Haut bildet sich wenn Oberflächenproteine durch Luftkontakt und Verdampfung koagulieren. Professionelle Verhütung beinhaltet Plastikfolie direkt auf Puddingoberfläche zu legen um Luftkontakt zu eliminieren und Feuchtigkeitsverlust zu verhindern.",
          nl: "Huid vormt zich wanneer oppervlakte eiwitten stollen door luchtblootstelling en verdamping. Professionele preventie houdt in dat plastic folie direct op het custard oppervlak wordt gelegd om luchtcontact te elimineren en vochtverlies te voorkomen."
        }
      },
      {
        question: {
          en: "In macaron production, what causes the characteristic 'feet' formation, and what indicates proper macaronage technique?",
          es: "En producción de macarrones, ¿qué causa la formación característica de 'pies', y qué indica técnica de macaronage adecuada?",
          de: "Bei der Macaron-Herstellung, was verursacht die charakteristische 'Füßchen'-Bildung, und was zeigt richtige Macaronage-Technik an?",
          nl: "Bij macaron productie, wat veroorzaakt de karakteristieke 'voetjes' vorming, en wat duidt op juiste macaronage techniek?"
        },
        options: [
          { en: "Oven temperature too high; feet form from rapid expansion", es: "Temperatura de horno muy alta; pies se forman por expansión rápida", de: "Ofentemperatur zu hoch; Füßchen entstehen durch schnelle Ausdehnung", nl: "Oventemperatuur te hoog; voetjes vormen door snelle uitbreiding" },
          { en: "Proper macaronage creates smooth flowing batter; feet form from steam pushing up shell during baking", es: "Macaronage adecuado crea masa lisa fluida; pies se forman por vapor empujando cáscara hacia arriba durante horneado", de: "Richtige Macaronage schafft glatten fließenden Teig; Füßchen entstehen durch Dampf der Schale beim Backen nach oben drückt", nl: "Juiste macaronage creëert gladde vloeiende beslag; voetjes vormen door stoom die schaal omhoog duwt tijdens bakken" },
          { en: "Underwhipped meringue; feet indicate insufficient mixing", es: "Merengue poco batido; pies indican mezcla insuficiente", de: "Untgeschlagenes Baiser; Füßchen zeigen unzureichendes Mischen an", nl: "Onvoldoende opgeklopte meringue; voetjes duiden op onvoldoende mengen" },
          { en: "Too much almond flour; feet form from excess oils", es: "Demasiada harina de almendra; pies se forman por aceites excesivos", de: "Zu viel Mandelmehl; Füßchen entstehen durch überschüssige Öle", nl: "Te veel amandelmeel; voetjes vormen door overtollige oliën" }
        ],
        correct: 1,
        explanation: {
          en: "Proper macaronage creates a smooth, lava-like flowing batter. Feet form when moisture in the batter turns to steam during baking, pushing the shell upward and creating the characteristic ruffled base.",
          es: "Macaronage adecuado crea masa lisa que fluye como lava. Los pies se forman cuando humedad en la masa se convierte en vapor durante horneado, empujando la cáscara hacia arriba y creando base ondulada característica.",
          de: "Richtige Macaronage schafft glatten, lava-artigen fließenden Teig. Füßchen entstehen wenn Feuchtigkeit im Teig beim Backen zu Dampf wird, die Schale nach oben drückt und die charakteristische gewellte Basis schafft.",
          nl: "Juiste macaronage creëert een glad, lava-achtig stromend beslag. Voetjes vormen wanneer vocht in het beslag tijdens bakken verandert in stoom, de schaal omhoog duwt en de karakteristieke gerimpelde basis creëert."
        }
      },
      {
        question: {
          en: "What is the purpose of 'docking' pastry dough, and what spacing pattern provides optimal results?",
          es: "¿Cuál es el propósito de 'perforar' masa de pastelería, y qué patrón de espaciado proporciona resultados óptimos?",
          de: "Was ist der Zweck des 'Einstechens' von Teig, und welches Abstandsmuster liefert optimale Ergebnisse?",
          nl: "Wat is het doel van het 'dokken' van gebakdeeg, en welk afstandspatroon levert optimale resultaten?"
        },
        options: [
          { en: "Decoration only; spacing doesn't matter", es: "Solo decoración; espaciado no importa", de: "Nur Dekoration; Abstand spielt keine Rolle", nl: "Alleen decoratie; afstand maakt niet uit" },
          { en: "Prevents puffing by releasing steam; 1-inch grid pattern optimal", es: "Previene hinchazón liberando vapor; patrón de cuadrícula de 1 pulgada óptimo", de: "Verhindert Aufgehen durch Dampffreisetzung; 2,5cm Gittermuster optimal", nl: "Voorkomt opzwelling door stoom vrij te geven; 2,5cm raster patroon optimaal" },
          { en: "Adds texture; random pattern works best", es: "Agrega textura; patrón aleatorio funciona mejor", de: "Fügt Textur hinzu; zufälliges Muster funktioniert am besten", nl: "Voegt textuur toe; willekeurig patroon werkt het best" },
          { en: "Speeds cooking; close spacing required", es: "Acelera cocción; espaciado cercano requerido", de: "Beschleunigt Kochen; enger Abstand erforderlich", nl: "Versnelt koken; nauwe afstand vereist" }
        ],
        correct: 1,
        explanation: {
          en: "Docking creates small holes that allow steam to escape during baking, preventing the pastry from puffing up unevenly. A 1-inch (2.5cm) grid pattern provides adequate steam release while maintaining structural integrity.",
          es: "Perforar crea pequeños agujeros que permiten al vapor escapar durante horneado, previniendo que la masa se hinche desigualmente. Un patrón de cuadrícula de 1 pulgada (2.5cm) proporciona liberación adecuada de vapor mientras mantiene integridad estructural.",
          de: "Einstechen schafft kleine Löcher die Dampf beim Backen entweichen lassen und verhindert dass Teig ungleichmäßig aufgeht. Ein 2,5cm Gittermuster bietet ausreichende Dampffreisetzung bei Erhaltung struktureller Integrität.",
          nl: "Dokken creëert kleine gaatjes die stoom laten ontsnappen tijdens bakken, voorkomend dat het gebak ongelijkmatig opzwelt. Een 2,5cm raster patroon biedt adequate stoomafgifte terwijl structurele integriteit behouden blijft."
        }
      },
      {
        question: {
          en: "What is the key difference between laminated dough and regular enriched dough in professional pastry making?",
          es: "¿Cuál es la diferencia clave entre masa laminada y masa enriquecida regular en pastelería profesional?",
          de: "Was ist der Hauptunterschied zwischen laminiertem Teig und normalem angereicherten Teig in der professionellen Konditorei?",
          nl: "Wat is het belangrijkste verschil tussen gelamineerd deeg en gewoon verrijkt deeg in professioneel banketbakken?"
        },
        options: [
          { en: "Laminated dough contains more eggs", es: "La masa laminada contiene más huevos", de: "Laminierter Teig enthält mehr Eier", nl: "Gelamineerd deeg bevat meer eieren" },
          { en: "Laminated dough incorporates butter through folding to create distinct layers", es: "La masa laminada incorpora mantequilla a través de plegado para crear capas distintas", de: "Laminierter Teig baut Butter durch Falten ein um deutliche Schichten zu schaffen", nl: "Gelamineerd deeg verwerkt boter door vouwen om duidelijke lagen te creëren" },
          { en: "Regular enriched dough is always sweeter", es: "La masa enriquecida regular es siempre más dulce", de: "Regulär angereicherter Teig ist immer süßer", nl: "Gewoon verrijkt deeg is altijd zoeter" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 1,
        explanation: {
          en: "Laminated dough uses a specific technique where butter is enclosed in dough and repeatedly folded to create hundreds of distinct layers (like croissants, puff pastry), while enriched dough simply mixes butter into the dough (like brioche).",
          es: "La masa laminada usa técnica específica donde mantequilla se encierra en masa y se pliega repetidamente para crear cientos de capas distintas (como croissants, hojaldre), mientras masa enriquecida simplemente mezcla mantequilla en la masa (como brioche).",
          de: "Laminierter Teig verwendet eine spezifische Technik wo Butter in Teig eingeschlossen und wiederholt gefaltet wird um Hunderte deutliche Schichten zu schaffen (wie Croissants, Blätterteig), während angereicherter Teig einfach Butter in den Teig mischt (wie Brioche).",
          nl: "Gelamineerd deeg gebruikt een specifieke techniek waarbij boter wordt ingesloten in deeg en herhaaldelijk wordt gevouwen om honderden duidelijke lagen te creëren (zoals croissants, bladerdeeg), terwijl verrijkt deeg eenvoudig boter in het deeg mengt (zoals brioche)."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7Data;
  } else if (typeof window !== 'undefined') {
    window.level7Data = level7Data;
  }
})();