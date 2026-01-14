// Seafood Quiz - Level 8
(function() {
  const level8 = {
    name: {
          "en": "Seafood Level 8",
          "es": "Mariscos Nivel 8",
          "de": "Meeresfrüchte Stufe 8",
          "nl": "Zeevruchten Level 8"
    },
    questions: [
      {
        question: {
                  "en": "What is 'en croûte' seafood preparation and what are the key techniques?",
                  "es": "¿Qué es la preparación de mariscos 'en croûte' y cuáles son las técnicas clave?",
                  "de": "Was ist 'En Croûte' Meeresfrüchte-Zubereitung und was sind die Schlüsseltechniken?",
                  "nl": "Wat is 'en croûte' zeevruchten bereiding en wat zijn de belangrijkste technieken?"
        },
        options: [
        {
                  "en": "Wrapping fish in puff pastry with duxelles layer, sealing edges, egg wash, bake until golden - pastry protects moisture, creates elegant presentation",
                  "es": "Envolver pescado en masa de hojaldre con capa de duxelles, sellar bordes, lavar con huevo, hornear hasta dorado - masa protege humedad, crea presentación elegante",
                  "de": "Fisch in Blätterteig mit Duxelles-Schicht wickeln, Ränder versiegeln, Eigelb bestreichen, backen bis golden - Teig schützt Feuchtigkeit, schafft elegante Präsentation",
                  "nl": "Vis inwikkelen in bladerdeeg met duxelles laag, randen verzegelen, ei wash, bakken tot goudkleurig - deeg beschermt vocht, creëert elegante presentatie"
        },
        {
                  "en": "Raw fish wrapping",
                  "es": "Envolver pescado crudo",
                  "de": "Rohen Fisch wickeln",
                  "nl": "Rauwe vis inwikkelen"
        },
        {
                  "en": "Boiling in stock only",
                  "es": "Solo hervir en caldo",
                  "de": "Nur in Brühe kochen",
                  "nl": "Alleen koken in bouillon"
        },
        {
                  "en": "Deep frying technique",
                  "es": "Técnica de freír",
                  "de": "Frittier-Technik",
                  "nl": "Frituur techniek"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "En croûte (in crust): classic French technique. Most famous: Salmon Wellington. Spread puff pastry, layer mushroom duxelles (finely chopped cooked mushrooms), place seasoned fish, fold pastry, seal with egg wash, cut vents, bake 375-400°F until golden. Pastry traps steam, keeps fish moist, creates dramatic presentation. Often includes spinach, herbs.",
                  "es": "En croûte (en corteza): técnica francesa clásica. Más famoso: Wellington de salmón. Extender masa de hojaldre, capa de duxelles de champiñones (champiñones cocidos finamente picados), colocar pescado sazonado, doblar masa, sellar con lavado de huevo, cortar aberturas, hornear 375-400°F hasta dorado. La masa atrapa vapor, mantiene pescado húmedo, crea presentación dramática. A menudo incluye espinaca, hierbas.",
                  "de": "En croûte (in Kruste): klassische französische Technik. Berühmteste: Lachs Wellington. Blätterteig ausrollen, Pilz-Duxelles-Schicht (fein gehackte gekochte Pilze), gewürzten Fisch platzieren, Teig falten, mit Eigelb versiegeln, Öffnungen schneiden, bei 190-200°C backen bis golden. Teig fängt Dampf, hält Fisch feucht, schafft dramatische Präsentation. Oft mit Spinat, Kräutern.",
                  "nl": "En croûte (in korst): klassieke Franse techniek. Beroemdste: Zalm Wellington. Spreid bladerdeeg, laag champignon duxelles (fijn gehakte gekookte champignons), plaats gekruide vis, vouw deeg, verzegel met ei wash, snijd openingen, bak 190-200°C tot goudkleurig. Deeg vangt stoom, houdt vis vochtig, creëert dramatische presentatie. Vaak met spinazie, kruiden."
        }
      },
      {
        question: {
                  "en": "What is 'mousseline' in seafood preparations?",
                  "es": "¿Qué es 'mousseline' en preparaciones de mariscos?",
                  "de": "Was ist 'Mousseline' bei Meeresfrüchte-Zubereitungen?",
                  "nl": "Wat is 'mousseline' bij zeevruchten bereidingen?"
        },
        options: [
        {
                  "en": "Puréed raw fish/shellfish mixed with cream and egg whites, poached or used as forcemeat for quenelles, terrines - delicate, airy texture",
                  "es": "Pescado/mariscos crudos en puré mezclados con crema y claras de huevo, escalfados o usados como relleno para quenelles, terrinas - textura delicada y aireada",
                  "de": "Pürierte rohe Fisch/Schalentiere gemischt mit Sahne und Eiweiß, pochiert oder als Farce für Quenelles, Terrinen verwendet - zarte, luftige Textur",
                  "nl": "Gepureerde rauwe vis/schelpdieren gemengd met room en eiwitten, gepocheerd of gebruikt als farce voor quenelles, terrines - delicate, luchtige textuur"
        },
        {
                  "en": "Raw fish slicing",
                  "es": "Rebanar pescado crudo",
                  "de": "Rohen Fisch schneiden",
                  "nl": "Rauwe vis snijden"
        },
        {
                  "en": "Grilled fish only",
                  "es": "Solo pescado a la parrilla",
                  "de": "Nur gegrillter Fisch",
                  "nl": "Alleen gegrilde vis"
        },
        {
                  "en": "Fried batter",
                  "es": "Masa frita",
                  "de": "Frittierter Teig",
                  "nl": "Gefrituurde beslag"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Mousseline: refined French preparation. Process raw fish/scallops/shrimp in food processor until smooth, chill bowl, gradually add egg whites then heavy cream while processing, season. Result: light, airy, creamy mixture. Uses: shape into quenelles for poaching, line molds for seafood terrines, stuff fish fillets. Requires keeping everything ice cold to maintain emulsion.",
                  "es": "Mousseline: preparación francesa refinada. Procesar pescado/vieiras/camarones crudos en procesador hasta suave, enfriar tazón, añadir gradualmente claras de huevo luego crema espesa mientras procesa, sazonar. Resultado: mezcla ligera, aireada, cremosa. Usos: formar en quenelles para escalfar, forrar moldes para terrinas de mariscos, rellenar filetes de pescado. Requiere mantener todo helado para mantener emulsión.",
                  "de": "Mousseline: raffinierte französische Zubereitung. Verarbeite rohen Fisch/Jakobsmuscheln/Garnelen im Mixer bis glatt, kühle Schüssel, füge allmählich Eiweiß dann Sahne hinzu während des Verarbeitens, würze. Ergebnis: leichte, luftige, cremige Mischung. Verwendung: forme zu Quenelles zum Pochieren, kleide Formen für Meeresfrüchte-Terrinen aus, fülle Fischfilets. Erfordert alles eiskalt zu halten für Emulsion.",
                  "nl": "Mousseline: verfijnde Franse bereiding. Verwerk rauwe vis/coquilles/garnalen in keukenmachine tot glad, koel kom, voeg geleidelijk eiwitten toe dan slagroom tijdens verwerken, kruid. Resultaat: lichte, luchtige, romige mengsel. Gebruik: vorm tot quenelles voor pocheren, bekleed vormen voor zeevruchten terrines, vul visfilets. Vereist alles ijskoud houden voor emulsie."
        }
      },
      {
        question: {
                  "en": "What is 'à la meunière' and what are its defining characteristics?",
                  "es": "¿Qué es 'à la meunière' y cuáles son sus características definitorias?",
                  "de": "Was ist 'À la Meunière' und was sind seine definierenden Merkmale?",
                  "nl": "Wat is 'à la meunière' en wat zijn de bepalende kenmerken?"
        },
        options: [
        {
                  "en": "Fish dredged in flour, pan-fried in butter until golden, served with brown butter (beurre noisette), lemon, parsley - miller's wife style",
                  "es": "Pescado empanizado en harina, frito en mantequilla hasta dorado, servido con mantequilla marrón (beurre noisette), limón, perejil - estilo esposa del molinero",
                  "de": "Fisch in Mehl gewälzt, in Butter gebraten bis golden, mit brauner Butter (Beurre Noisette), Zitrone, Petersilie serviert - Müllers Frau Art",
                  "nl": "Vis door meel gehaald, gebakken in boter tot goudkleurig, geserveerd met bruine boter (beurre noisette), citroen, peterselie - molenaarsvrouw stijl"
        },
        {
                  "en": "Boiled fish",
                  "es": "Pescado hervido",
                  "de": "Gekochter Fisch",
                  "nl": "Gekookte vis"
        },
        {
                  "en": "Raw fish",
                  "es": "Pescado crudo",
                  "de": "Roher Fisch",
                  "nl": "Rauwe vis"
        },
        {
                  "en": "Smoked only",
                  "es": "Solo ahumado",
                  "de": "Nur geräuchert",
                  "nl": "Alleen gerookt"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "À la meunière ('miller's wife style'): classic French technique. Dredge fish (sole, trout, Dover sole) in seasoned flour, pan-fry in clarified butter until golden and crispy. Remove fish, continue heating butter until it browns (beurre noisette - hazelnut butter), add lemon juice, pour over fish. Garnish: lemon slices, parsley. The flour coating creates delicate crust, brown butter adds nutty richness.",
                  "es": "À la meunière ('estilo esposa del molinero'): técnica francesa clásica. Empanizar pescado (lenguado, trucha, lenguado Dover) en harina sazonada, freír en mantequilla clarificada hasta dorado y crujiente. Retirar pescado, continuar calentando mantequilla hasta que se dore (beurre noisette - mantequilla de avellana), añadir jugo de limón, verter sobre pescado. Adornar: rodajas de limón, perejil. El recubrimiento de harina crea corteza delicada, mantequilla marrón añade riqueza de nuez.",
                  "de": "À la meunière ('Müllers Frau Art'): klassische französische Technik. Wälze Fisch (Seezunge, Forelle, Dover Sole) in gewürztem Mehl, brate in geklärter Butter bis golden und knusprig. Entferne Fisch, erhitze Butter weiter bis sie bräunt (Beurre Noisette - Haselnussbutter), füge Zitronensaft hinzu, gieße über Fisch. Garnierung: Zitronenscheiben, Petersilie. Die Mehlbeschichtung schafft zarte Kruste, braune Butter fügt nussige Fülle hinzu.",
                  "nl": "À la meunière ('molenaarsvrouw stijl'): klassieke Franse techniek. Haal vis (tong, forel, Dover tong) door gekruid meel, bak in geklaarde boter tot goudkleurig en knapperig. Verwijder vis, verhit boter verder tot het bruin wordt (beurre noisette - hazelnoot boter), voeg citroensap toe, giet over vis. Garneer: citroen plakjes, peterselie. De meel coating creëert delicate korst, bruine boter voegt nootachtige rijkdom toe."
        }
      },
      {
        question: {
                  "en": "What is 'boning' versus 'butterflying' fish and when is each used?",
                  "es": "¿Qué es 'deshuesar' versus 'abrir en mariposa' el pescado y cuándo se usa cada uno?",
                  "de": "Was ist 'Entgräten' versus 'Schmetterlingsschnitt' bei Fisch und wann wird jedes verwendet?",
                  "nl": "Wat is 'ontbenen' versus 'vlinderschnitt' bij vis en wanneer wordt elk gebruikt?"
        },
        options: [
        {
                  "en": "Only for shellfish",
                  "es": "Solo para mariscos",
                  "de": "Nur für Schalentiere",
                  "nl": "Alleen voor schelpdieren"
        },
        {
                  "en": "Boning is only for chicken",
                  "es": "Deshuesar es solo para pollo",
                  "de": "Entgräten nur für Huhn",
                  "nl": "Ontbenen alleen voor kip"
        },
        {
                  "en": "Same technique",
                  "es": "Misma técnica",
                  "de": "Gleiche Technik",
                  "nl": "Zelfde techniek"
        },
        {
                  "en": "Boning removes all bones while keeping fish whole; butterflying cuts along backbone, spreads open like book for even cooking - both preserve structure differently",
                  "es": "Deshuesar elimina todos los huesos manteniendo pescado entero; abrir en mariposa corta a lo largo de columna, abre como libro para cocción uniforme - ambos preservan estructura diferentemente",
                  "de": "Entgräten entfernt alle Knochen während Fisch ganz bleibt; Schmetterlingsschnitt schneidet entlang Rückgrat, öffnet wie Buch für gleichmäßiges Garen - beide bewahren Struktur unterschiedlich",
                  "nl": "Ontbenen verwijdert alle botten terwijl vis heel blijft; vlinderschnitt snijdt langs ruggengraat, spreidt open als boek voor gelijkmatig koken - beide behouden structuur verschillend"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Boning: remove backbone, ribs, pin bones through belly or back cut while keeping fish intact. Result: boneless whole fish for stuffing, roasting. Butterflying: cut along one side of backbone through back, open fish flat like book, remove backbone. Result: uniform thickness for grilling, broiling. Trout, branzino commonly butterflied. Both require sharp knife, understanding fish anatomy.",
                  "es": "Deshuesar: eliminar columna vertebral, costillas, espinas a través de corte de vientre o espalda manteniendo pescado intacto. Resultado: pescado entero sin huesos para rellenar, asar. Abrir en mariposa: cortar a lo largo de un lado de columna a través de espalda, abrir pescado plano como libro, eliminar columna. Resultado: grosor uniforme para asar, hornear. Trucha, branzino comúnmente abiertos en mariposa. Ambos requieren cuchillo afilado, comprensión de anatomía de pescado.",
                  "de": "Entgräten: entferne Rückgrat, Rippen, Gräten durch Bauch- oder Rückenschnitt während Fisch intakt bleibt. Ergebnis: grätfreier ganzer Fisch zum Füllen, Braten. Schmetterlingsschnitt: schneide entlang einer Seite des Rückgrats durch Rücken, öffne Fisch flach wie Buch, entferne Rückgrat. Ergebnis: gleichmäßige Dicke zum Grillen, Braten. Forelle, Branzino üblicherweise geschmetterlingsschnitten. Beide erfordern scharfes Messer, Verständnis Fischanatomie.",
                  "nl": "Ontbenen: verwijder ruggengraat, ribben, graten door buik of rug snede terwijl vis intact blijft. Resultaat: botloze hele vis voor vullen, braden. Vlinderschnitt: snijd langs één kant van ruggengraat door rug, open vis plat als boek, verwijder ruggengraat. Resultaat: gelijkmatige dikte voor grillen, braden. Forel, branzino vaak vlindergesneden. Beide vereisen scherp mes, begrip vis anatomie."
        }
      },
      {
        question: {
                  "en": "What is 'coulibiac' and what makes it unique?",
                  "es": "¿Qué es 'coulibiac' y qué lo hace único?",
                  "de": "Was ist 'Coulibiac' und was macht es einzigartig?",
                  "nl": "Wat is 'coulibiac' en wat maakt het uniek?"
        },
        options: [
        {
                  "en": "Simple grilled fish",
                  "es": "Pescado simple a la parrilla",
                  "de": "Einfach gegrillter Fisch",
                  "nl": "Simpele gegrilde vis"
        },
        {
                  "en": "Raw fish salad",
                  "es": "Ensalada de pescado crudo",
                  "de": "Roher Fischsalat",
                  "nl": "Rauwe vis salade"
        },
        {
                  "en": "Russian layered fish pie with salmon, rice, mushrooms, hard-boiled eggs, dill in brioche or puff pastry - complex multi-component dish",
                  "es": "Pastel de pescado ruso en capas con salmón, arroz, champiñones, huevos duros, eneldo en brioche o masa de hojaldre - plato complejo de múltiples componentes",
                  "de": "Russischer geschichteter Fischpastete mit Lachs, Reis, Pilzen, hartgekochten Eiern, Dill in Brioche oder Blätterteig - komplexes Mehrkomponenten-Gericht",
                  "nl": "Russische gelaagde vistaart met zalm, rijst, champignons, hardgekookte eieren, dille in brioche of bladerdeeg - complex multi-component gerecht"
        },
        {
                  "en": "Fried fish",
                  "es": "Pescado frito",
                  "de": "Frittierter Fisch",
                  "nl": "Gefrituurde vis"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Coulibiac (kulebyaka): elaborate Russian fish pie. Layer in pastry: cooked rice/kasha, sautéed mushrooms and onions, poached salmon, hard-boiled eggs, fresh dill. Sometimes includes crêpes between layers to prevent sogginess. Wrap in brioche or puff pastry, brush with egg, bake until golden. Cut crosswise to reveal beautiful layers. Labor-intensive showstopper. Escoffier made it famous in French cuisine.",
                  "es": "Coulibiac (kulebyaka): elaborado pastel de pescado ruso. Capas en masa: arroz cocido/kasha, champiñones y cebollas salteados, salmón escalfado, huevos duros, eneldo fresco. A veces incluye crêpes entre capas para prevenir humedad. Envolver en brioche o masa de hojaldre, cepillar con huevo, hornear hasta dorado. Cortar transversalmente para revelar hermosas capas. Espectáculo laborioso. Escoffier lo hizo famoso en cocina francesa.",
                  "de": "Coulibiac (Kulebyaka): aufwendige russische Fischpastete. Schichte in Teig: gekochter Reis/Kascha, sautierte Pilze und Zwiebeln, pochierter Lachs, hartgekochte Eier, frischer Dill. Manchmal mit Crêpes zwischen Schichten um Durchweichung zu verhindern. Wickle in Brioche oder Blätterteig, bestreiche mit Ei, backe bis golden. Schneide quer um schöne Schichten zu zeigen. Arbeitsintensiver Hingucker. Escoffier machte es in französischer Küche berühmt.",
                  "nl": "Coulibiac (kulebyaka): uitgebreide Russische vistaart. Laag in deeg: gekookte rijst/kasha, gesauteerde champignons en uien, gepocheerde zalm, hardgekookte eieren, verse dille. Soms met crêpes tussen lagen om doorweken te voorkomen. Wikkel in brioche of bladerdeeg, bestrijk met ei, bak tot goudkleurig. Snijd dwars om mooie lagen te tonen. Arbeidsintensief spektakel. Escoffier maakte het beroemd in Franse keuken."
        }
      },
      {
        question: {
                  "en": "What is 'paupièttes' in seafood preparation?",
                  "es": "¿Qué son 'paupiettes' en preparación de mariscos?",
                  "de": "Was sind 'Paupiettes' bei Meeresfrüchte-Zubereitung?",
                  "nl": "Wat zijn 'paupiettes' bij zeevruchten bereiding?"
        },
        options: [
        {
                  "en": "Fried whole fish",
                  "es": "Pescado entero frito",
                  "de": "Ganzer frittierter Fisch",
                  "nl": "Hele gefrituurde vis"
        },
        {
                  "en": "Grilled fish steaks",
                  "es": "Filetes de pescado a la parrilla",
                  "de": "Gegrillte Fischsteaks",
                  "nl": "Gegrilde vis steaks"
        },
        {
                  "en": "Thin fish fillets rolled around stuffing (often mousseline), secured with string, poached in wine-based liquid - elegant presentation",
                  "es": "Filetes delgados de pescado enrollados alrededor de relleno (a menudo mousseline), asegurados con cuerda, escalfados en líquido a base de vino - presentación elegante",
                  "de": "Dünne Fischfilets um Füllung gerollt (oft Mousseline), mit Schnur gesichert, in Wein-basierter Flüssigkeit pochiert - elegante Präsentation",
                  "nl": "Dunne visfilets gerold rond vulling (vaak mousseline), vastgemaakt met touw, gepocheerd in wijn-gebaseerde vloeistof - elegante presentatie"
        },
        {
                  "en": "Raw fish only",
                  "es": "Solo pescado crudo",
                  "de": "Nur roher Fisch",
                  "nl": "Alleen rauwe vis"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Paupiettes: French technique for fish rolls. Pound sole, flounder, or other delicate fish thin, spread with shrimp or scallop mousseline, spinach, herbs. Roll tightly, secure with kitchen string or toothpicks. Poach gently in court bouillon or white wine, fish stock. Remove string, serve with beurre blanc or cream sauce. Can also braise. Rolling creates elegant individual portions, stuffing adds richness.",
                  "es": "Paupiettes: técnica francesa para rollos de pescado. Aplanar lenguado, platija u otro pescado delicado, extender con mousseline de camarones o vieiras, espinaca, hierbas. Enrollar firmemente, asegurar con cuerda de cocina o palillos. Escalfar suavemente en court bouillon o vino blanco, caldo de pescado. Retirar cuerda, servir con beurre blanc o salsa de crema. También se puede estofar. Enrollar crea porciones individuales elegantes, relleno añade riqueza.",
                  "de": "Paupiettes: französische Technik für Fischrollen. Klopfe Seezunge, Flunder oder anderen zarten Fisch dünn, bestreiche mit Garnelen- oder Jakobsmuschel-Mousseline, Spinat, Kräuter. Rolle fest, sichere mit Küchenschnur oder Zahnstochern. Pochiere sanft in Court Bouillon oder Weißwein, Fischfond. Entferne Schnur, serviere mit Beurre Blanc oder Sahnesauce. Kann auch geschmort werden. Rollen schafft elegante Einzelportionen, Füllung fügt Fülle hinzu.",
                  "nl": "Paupiettes: Franse techniek voor visrollen. Plat tong, bot of andere delicate vis dun, bestrijk met garnalen of coquille mousseline, spinazie, kruiden. Rol stevig, maak vast met keukentouw of prikkers. Pocheer zachtjes in court bouillon of witte wijn, visbouillon. Verwijder touw, serveer met beurre blanc of roomsaus. Kan ook gestoofd worden. Rollen creëert elegante individuele porties, vulling voegt rijkdom toe."
        }
      },
      {
        question: {
                  "en": "What is 'ballotine' in seafood cooking?",
                  "es": "¿Qué es 'ballotine' en cocina de mariscos?",
                  "de": "Was ist 'Ballotine' beim Meeresfrüchte-Kochen?",
                  "nl": "Wat is 'ballotine' bij zeevruchten koken?"
        },
        options: [
        {
                  "en": "Fried fish",
                  "es": "Pescado frito",
                  "de": "Frittierter Fisch",
                  "nl": "Gefrituurde vis"
        },
        {
                  "en": "Grilled fish",
                  "es": "Pescado a la parrilla",
                  "de": "Gegrillter Fisch",
                  "nl": "Gegrilde vis"
        },
        {
                  "en": "Raw fish preparation",
                  "es": "Preparación de pescado crudo",
                  "de": "Rohe Fisch-Zubereitung",
                  "nl": "Rauwe vis bereiding"
        },
        {
                  "en": "Whole deboned fish stuffed, rolled, tied in cloth, poached, then chilled and sliced - can be served hot or cold",
                  "es": "Pescado entero deshuesado relleno, enrollado, atado en tela, escalfado, luego enfriado y rebanado - puede servirse caliente o frío",
                  "de": "Ganzer entgräteter Fisch gefüllt, gerollt, in Tuch gebunden, pochiert, dann gekühlt und geschnitten - kann heiß oder kalt serviert werden",
                  "nl": "Hele ontbeende vis gevuld, gerold, gebonden in doek, gepocheerd, dan gekoeld en gesneden - kan warm of koud geserveerd worden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Ballotine: classical French technique. Debone whole fish (salmon, sea bass) through belly, leaving skin intact. Stuff with farce/mousseline, vegetables, herbs. Roll tightly, wrap in cheesecloth, tie at intervals. Poach in court bouillon or fish stock. Can serve hot with sauce, or chill, unwrap, slice into elegant rounds showing spiral pattern. Galantine is similar but always served cold in aspic.",
                  "es": "Ballotine: técnica francesa clásica. Deshuesar pescado entero (salmón, lubina) a través del vientre, dejando piel intacta. Rellenar con farsa/mousseline, vegetales, hierbas. Enrollar firmemente, envolver en estopilla, atar a intervalos. Escalfar en court bouillon o caldo de pescado. Puede servirse caliente con salsa, o enfriar, desenvolver, rebanar en rodajas elegantes mostrando patrón en espiral. Galantina es similar pero siempre servida fría en áspic.",
                  "de": "Ballotine: klassische französische Technik. Entgräte ganzen Fisch (Lachs, Wolfsbarsch) durch Bauch, lasse Haut intakt. Fülle mit Farce/Mousseline, Gemüse, Kräuter. Rolle fest, wickle in Käsetuch, binde in Abständen. Pochiere in Court Bouillon oder Fischfond. Kann heiß mit Sauce serviert werden, oder kühlen, auspacken, in elegante Runden schneiden die Spiralmuster zeigen. Galantine ist ähnlich aber immer kalt in Aspik serviert.",
                  "nl": "Ballotine: klassieke Franse techniek. Ontbeen hele vis (zalm, zeebaars) door buik, laat vel intact. Vul met farce/mousseline, groenten, kruiden. Rol stevig, wikkel in kaasdoek, bind op intervallen. Pocheer in court bouillon of visbouillon. Kan warm geserveerd worden met saus, of koel, pak uit, snijd in elegante ronden die spiraal patroon tonen. Galantine is vergelijkbaar maar altijd koud geserveerd in aspic."
        }
      },
      {
        question: {
                  "en": "What is the purpose of 'clarifying' fish stock and how is it done?",
                  "es": "¿Cuál es el propósito de 'clarificar' caldo de pescado y cómo se hace?",
                  "de": "Was ist der Zweck des 'Klärens' von Fischfond und wie wird es gemacht?",
                  "nl": "Wat is het doel van 'klaren' van visbouillon en hoe wordt het gedaan?"
        },
        options: [
        {
                  "en": "Only for color",
                  "es": "Solo para color",
                  "de": "Nur für Farbe",
                  "nl": "Alleen voor kleur"
        },
        {
                  "en": "Makes stock cloudy",
                  "es": "Hace caldo turbio",
                  "de": "Macht Fond trüb",
                  "nl": "Maakt bouillon troebel"
        },
        {
                  "en": "Removes impurities using egg whites and mirepoix raft to create crystal-clear consommé for elegant presentations and aspics",
                  "es": "Elimina impurezas usando claras de huevo y balsa de mirepoix para crear consomé cristalino para presentaciones elegantes y áspics",
                  "de": "Entfernt Verunreinigungen mit Eiweiß und Mirepoix-Floß um kristallklare Consommé für elegante Präsentationen und Aspiks zu schaffen",
                  "nl": "Verwijdert onzuiverheden met eiwitten en mirepoix vlot om kristalheldere consommé te creëren voor elegante presentaties en aspics"
        },
        {
                  "en": "Adds more fish bones",
                  "es": "Añade más huesos de pescado",
                  "de": "Fügt mehr Fischknochen hinzu",
                  "nl": "Voegt meer visbotten toe"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Clarifying fish stock: Make 'clarification' - mix egg whites with ground fish, mirepoix (onion, carrot, celery), tomato. Whisk into cold stock, heat slowly while stirring. As proteins coagulate, they form 'raft' floating on top, trapping impurities. Simmer 45-60 min without disturbing raft. Gently ladle through cheesecloth. Result: crystal-clear consommé for aspics, elegant soups. Requires patience, gentle handling.",
                  "es": "Clarificar caldo de pescado: Hacer 'clarificación' - mezclar claras de huevo con pescado molido, mirepoix (cebolla, zanahoria, apio), tomate. Batir en caldo frío, calentar lentamente mientras revuelve. A medida que las proteínas se coagulan, forman 'balsa' flotante en la parte superior, atrapando impurezas. Cocinar a fuego lento 45-60 min sin perturbar balsa. Servir suavemente a través de estopilla. Resultado: consomé cristalino para áspics, sopas elegantes. Requiere paciencia, manejo suave.",
                  "de": "Fischfond klären: Mache 'Klärung' - mische Eiweiß mit gemahlenem Fisch, Mirepoix (Zwiebel, Karotte, Sellerie), Tomate. Schlage in kalten Fond, erhitze langsam während Rühren. Wenn Proteine gerinnen, bilden sie 'Floß' das oben schwimmt und Verunreinigungen einfängt. Köchle 45-60 Min ohne Floß zu stören. Schöpfe vorsichtig durch Käsetuch. Ergebnis: kristallklare Consommé für Aspiks, elegante Suppen. Erfordert Geduld, sanfte Handhabung.",
                  "nl": "Visbouillon klaren: Maak 'klaring' - meng eiwitten met gemalen vis, mirepoix (ui, wortel, selderij), tomaat. Klop in koude bouillon, verhit langzaam tijdens roeren. Als eiwitten stollen, vormen ze 'vlot' drijvend bovenop, onzuiverheden vangend. Sudder 45-60 min zonder vlot te verstoren. Schep voorzichtig door kaasdoek. Resultaat: kristalheldere consommé voor aspics, elegante soepen. Vereist geduld, zachte behandeling."
        }
      },
      {
        question: {
                  "en": "What is 'beurre monté' and why is it important for seafood?",
                  "es": "¿Qué es 'beurre monté' y por qué es importante para mariscos?",
                  "de": "Was ist 'Beurre Monté' und warum ist es wichtig für Meeresfrüchte?",
                  "nl": "Wat is 'beurre monté' en waarom is het belangrijk voor zeevruchten?"
        },
        options: [
        {
                  "en": "Plain melted butter",
                  "es": "Mantequilla derretida simple",
                  "de": "Einfache geschmolzene Butter",
                  "nl": "Gewoon gesmolten boter"
        },
        {
                  "en": "Emulsified butter sauce made by whisking cold butter into warm water, holds at 160-180°F for gentle poaching seafood, prevents overcooking",
                  "es": "Salsa de mantequilla emulsionada hecha batiendo mantequilla fría en agua tibia, mantiene a 160-180°F para escalfar mariscos suavemente, previene sobrecocción",
                  "de": "Emulgierte Buttersauce durch Einschlagen kalter Butter in warmes Wasser, hält bei 71-82°C zum sanften Pochieren von Meeresfrüchten, verhindert Überkochen",
                  "nl": "Geëmulgeerde botersaus gemaakt door koude boter in warm water te kloppen, houdt op 71-82°C voor zacht pocheren van zeevruchten, voorkomt overkoken"
        },
        {
                  "en": "Clarified butter",
                  "es": "Mantequilla clarificada",
                  "de": "Geklärte Butter",
                  "nl": "Geklaarde boter"
        },
        {
                  "en": "Cold butter only",
                  "es": "Solo mantequilla fría",
                  "de": "Nur kalte Butter",
                  "nl": "Alleen koude boter"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Beurre monté (mounted butter): professional technique for gentle cooking. Heat 2 Tbsp water to 160-180°F (71-82°C), gradually whisk in cold butter cubes until emulsified. Result: stable butter emulsion that won't break at moderate heat. Uses: poach delicate fish (halibut, sole), baste during cooking, finishing sauce. Keeps seafood moist, adds rich buttery flavor, prevents high heat damage. Hold temp carefully - too hot breaks emulsion.",
                  "es": "Beurre monté (mantequilla montada): técnica profesional para cocción suave. Calentar 2 cucharadas de agua a 160-180°F (71-82°C), batir gradualmente cubos de mantequilla fría hasta emulsionar. Resultado: emulsión de mantequilla estable que no se rompe a calor moderado. Usos: escalfar pescado delicado (halibut, lenguado), rociar durante cocción, salsa final. Mantiene mariscos húmedos, añade sabor mantecoso rico, previene daño de calor alto. Mantener temperatura cuidadosamente - demasiado caliente rompe emulsión.",
                  "de": "Beurre Monté (montierte Butter): professionelle Technik für sanftes Garen. Erhitze 2 EL Wasser auf 71-82°C, schlage allmählich kalte Butterwürfel ein bis emulgiert. Ergebnis: stabile Butteremulsion die bei moderater Hitze nicht bricht. Verwendung: pochiere zarten Fisch (Heilbutt, Seezunge), begieße während Garen, Finishing-Sauce. Hält Meeresfrüchte feucht, fügt reichen buttrigen Geschmack hinzu, verhindert Hochhitzeschaden. Halte Temp sorgfältig - zu heiß bricht Emulsion.",
                  "nl": "Beurre monté (gemonteerde boter): professionele techniek voor zacht koken. Verhit 2 eetlepels water tot 71-82°C, klop geleidelijk koude boterblokjes in tot geëmulgeerd. Resultaat: stabiele boter emulsie die niet breekt bij gematigde hitte. Gebruik: pocheer delicate vis (heilbot, tong), overgiet tijdens koken, afwerkingssaus. Houdt zeevruchten vochtig, voegt rijke boterachtige smaak toe, voorkomt hoge hitte schade. Houd temp zorgvuldig - te heet breekt emulsie."
        }
      },
      {
        question: {
                  "en": "What is 'vin blanc' sauce and its derivatives?",
                  "es": "¿Qué es la salsa 'vin blanc' y sus derivados?",
                  "de": "Was ist 'Vin Blanc' Sauce und ihre Ableitungen?",
                  "nl": "Wat is 'vin blanc' saus en zijn afgeleiden?"
        },
        options: [
        {
                  "en": "Red wine reduction",
                  "es": "Reducción de vino tinto",
                  "de": "Rotwein-Reduktion",
                  "nl": "Rode wijn reductie"
        },
        {
                  "en": "White wine fish velouté finished with butter, base for Bercy (shallots), Normande (cream, mushroom), Dieppoise (shrimp, mussels) - classic French mother sauce derivative",
                  "es": "Velouté de pescado con vino blanco terminado con mantequilla, base para Bercy (chalotas), Normande (crema, champiñones), Dieppoise (camarones, mejillones) - derivado clásico de salsa madre francesa",
                  "de": "Weißwein-Fisch-Velouté mit Butter abgeschlossen, Basis für Bercy (Schalotten), Normande (Sahne, Pilze), Dieppoise (Garnelen, Muscheln) - klassisches französisches Muttersauce-Derivat",
                  "nl": "Witte wijn vis velouté afgewerkt met boter, basis voor Bercy (sjalotten), Normande (room, champignons), Dieppoise (garnalen, mosselen) - klassieke Franse moedersaus afgeleid"
        },
        {
                  "en": "Cream only",
                  "es": "Solo crema",
                  "de": "Nur Sahne",
                  "nl": "Alleen room"
        },
        {
                  "en": "Tomato-based sauce",
                  "es": "Salsa a base de tomate",
                  "de": "Tomatenbasierte Sauce",
                  "nl": "Tomaat-gebaseerde saus"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Vin blanc (white wine) sauce: classic French. Make fish velouté (fish stock + blonde roux), add white wine reduction, finish with butter. Foundation for multiple sauces: Bercy (add shallots, lemon, parsley), Normande (add cream, mushroom essence), Dieppoise (add shrimp, mussels), Bretonne (add leeks, celery, mushrooms). Part of Escoffier's sauce system. Delicate, refined, complements fish without overpowering.",
                  "es": "Salsa vin blanc (vino blanco): francesa clásica. Hacer velouté de pescado (caldo de pescado + roux rubio), añadir reducción de vino blanco, terminar con mantequilla. Fundamento para múltiples salsas: Bercy (añadir chalotas, limón, perejil), Normande (añadir crema, esencia de champiñones), Dieppoise (añadir camarones, mejillones), Bretonne (añadir puerros, apio, champiñones). Parte del sistema de salsas de Escoffier. Delicada, refinada, complementa pescado sin abrumar.",
                  "de": "Vin Blanc (Weißwein) Sauce: klassisch französisch. Mache Fisch-Velouté (Fischfond + blonde Roux), füge Weißwein-Reduktion hinzu, schließe mit Butter ab. Grundlage für mehrere Saucen: Bercy (füge Schalotten, Zitrone, Petersilie hinzu), Normande (füge Sahne, Pilzessenz hinzu), Dieppoise (füge Garnelen, Muscheln hinzu), Bretonne (füge Lauch, Sellerie, Pilze hinzu). Teil von Escoffiers Saucensystem. Zart, raffiniert, ergänzt Fisch ohne zu überwältigen.",
                  "nl": "Vin blanc (witte wijn) saus: klassiek Frans. Maak vis velouté (visbouillon + blonde roux), voeg witte wijn reductie toe, werk af met boter. Basis voor meerdere sauzen: Bercy (voeg sjalotten, citroen, peterselie toe), Normande (voeg room, champignon essence toe), Dieppoise (voeg garnalen, mosselen toe), Bretonne (voeg prei, selderij, champignons toe). Deel van Escoffier's saus systeem. Delicaat, verfijnd, complementeert vis zonder te overheersen."
        }
      },
      {
        question: {
                  "en": "What is 'à la nage' style of serving seafood?",
                  "es": "¿Qué es el estilo 'à la nage' de servir mariscos?",
                  "de": "Was ist 'À la Nage' Stil beim Servieren von Meeresfrüchten?",
                  "nl": "Wat is 'à la nage' stijl van zeevruchten serveren?"
        },
        options: [
        {
                  "en": "Fried and dry",
                  "es": "Frito y seco",
                  "de": "Frittiert und trocken",
                  "nl": "Gefrituurd en droog"
        },
        {
                  "en": "Grilled without liquid",
                  "es": "A la parrilla sin líquido",
                  "de": "Gegrillt ohne Flüssigkeit",
                  "nl": "Gegrilld zonder vloeistof"
        },
        {
                  "en": "Raw only",
                  "es": "Solo crudo",
                  "de": "Nur roh",
                  "nl": "Alleen rauw"
        },
        {
                  "en": "Serving seafood in its aromatic poaching liquid (court bouillon with vegetables, herbs), presented swimming in broth - emphasizes natural flavors",
                  "es": "Servir mariscos en su líquido de escalfado aromático (court bouillon con vegetales, hierbas), presentado nadando en caldo - enfatiza sabores naturales",
                  "de": "Meeresfrüchte in ihrer aromatischen Pochierflüssigkeit servieren (Court Bouillon mit Gemüse, Kräutern), schwimmend in Brühe präsentiert - betont natürliche Aromen",
                  "nl": "Zeevruchten serveren in zijn aromatische pocheer vloeistof (court bouillon met groenten, kruiden), gepresenteerd zwemmend in bouillon - benadrukt natuurlijke smaken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "À la nage ('swimming'): refined French presentation. Poach shellfish (shrimp, lobster, scallops) or delicate fish in aromatic court bouillon with white wine, shallots, carrots, celery, herbs. Serve seafood in shallow bowl with the poaching liquid as light broth. Garnish with julienned vegetables from cooking liquid. Emphasizes pure, delicate flavors. Simple but elegant. Liquid becomes essential part of dish, not discarded.",
                  "es": "À la nage ('nadando'): presentación francesa refinada. Escalfar mariscos (camarones, langosta, vieiras) o pescado delicado en court bouillon aromático con vino blanco, chalotas, zanahorias, apio, hierbas. Servir mariscos en tazón poco profundo con líquido de escalfado como caldo ligero. Adornar con vegetales en juliana del líquido de cocción. Enfatiza sabores puros, delicados. Simple pero elegante. Líquido se convierte en parte esencial del plato, no se descarta.",
                  "de": "À la Nage ('schwimmend'): raffinierte französische Präsentation. Pochiere Schalentiere (Garnelen, Hummer, Jakobsmuscheln) oder zarten Fisch in aromatischem Court Bouillon mit Weißwein, Schalotten, Karotten, Sellerie, Kräutern. Serviere Meeresfrüchte in flacher Schüssel mit Pochierflüssigkeit als leichte Brühe. Garniere mit julienned Gemüse aus Kochflüssigkeit. Betont reine, zarte Aromen. Einfach aber elegant. Flüssigkeit wird wesentlicher Teil des Gerichts, nicht weggeworfen.",
                  "nl": "À la nage ('zwemmend'): verfijnde Franse presentatie. Pocheer schelpdieren (garnalen, kreeft, coquilles) of delicate vis in aromatische court bouillon met witte wijn, sjalotten, wortels, selderij, kruiden. Serveer zeevruchten in ondiepe kom met pocheer vloeistof als lichte bouillon. Garneer met julienne groenten van kookvloeistof. Benadrukt pure, delicate smaken. Simpel maar elegant. Vloeistof wordt essentieel deel van gerecht, niet weggegooid."
        }
      },
      {
        question: {
                  "en": "What is 'sabayón' in seafood applications?",
                  "es": "¿Qué es 'sabayón' en aplicaciones de mariscos?",
                  "de": "Was ist 'Sabayon' bei Meeresfrüchte-Anwendungen?",
                  "nl": "Wat is 'sabayón' bij zeevruchten toepassingen?"
        },
        options: [
        {
                  "en": "Butter only",
                  "es": "Solo mantequilla",
                  "de": "Nur Butter",
                  "nl": "Alleen boter"
        },
        {
                  "en": "Tomato sauce",
                  "es": "Salsa de tomate",
                  "de": "Tomatensauce",
                  "nl": "Tomaten saus"
        },
        {
                  "en": "Savory egg yolk emulsion whisked over heat with wine/stock, used to glaze or sauce seafood, finished under broiler for golden top",
                  "es": "Emulsión salada de yema de huevo batida sobre calor con vino/caldo, usada para glasear o salsear mariscos, terminada bajo asador para tope dorado",
                  "de": "Herzhafte Eigelb-Emulsion über Hitze mit Wein/Fond geschlagen, zum Glasieren oder Saucieren von Meeresfrüchten verwendet, unter Grill für goldene Oberseite fertiggestellt",
                  "nl": "Hartige eidooier emulsie geklopt op warmte met wijn/bouillon, gebruikt om zeevruchten te glaceren of sauseren, afgewerkt onder grill voor gouden bovenkant"
        },
        {
                  "en": "Oil-based dressing",
                  "es": "Aderezo a base de aceite",
                  "de": "Ölbasiertes Dressing",
                  "nl": "Olie-gebaseerde dressing"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Sabayón (savory zabaglione): French technique borrowed from Italian dessert. Whisk egg yolks with white wine, fish stock, or champagne in bowl over simmering water until thick, airy, ribbon consistency. Spoon over poached/grilled seafood, place under broiler to gratinée - puffs up, browns. Creates light, elegant glaze. Used for oysters Rockefeller variations, lobster thermidor, glazed fish fillets. Requires constant whisking, careful heat control.",
                  "es": "Sabayón (zabaglione salado): técnica francesa prestada del postre italiano. Batir yemas de huevo con vino blanco, caldo de pescado o champán en tazón sobre agua hirviendo hasta consistencia espesa, aireada, de cinta. Colocar sobre mariscos escalfados/asados, poner bajo asador para gratinar - se hincha, se dora. Crea glaseado ligero, elegante. Usado para variaciones de ostras Rockefeller, termidor de langosta, filetes de pescado glaseados. Requiere batido constante, control cuidadoso de calor.",
                  "de": "Sabayon (herzhafte Zabaione): französische Technik vom italienischen Dessert entlehnt. Schlage Eigelb mit Weißwein, Fischfond oder Champagner in Schüssel über köchelndem Wasser bis dick, luftig, Bandkonsistenz. Löffle über pochierte/gegrillte Meeresfrüchte, stelle unter Grill zum Gratinieren - bläht auf, bräunt. Schafft leichte, elegante Glasur. Verwendet für Austern Rockefeller Variationen, Hummer Thermidor, glasierte Fischfilets. Erfordert ständiges Schlagen, sorgfältige Hitzekontrolle.",
                  "nl": "Sabayón (hartige zabaglione): Franse techniek geleend van Italiaans dessert. Klop eidooiers met witte wijn, visbouillon of champagne in kom boven sudderend water tot dik, luchtig, lint consistentie. Lepel over gepocheerde/gegrilde zeevruchten, plaats onder grill om te gratineren - zwelt op, bruint. Creëert lichte, elegante glazuur. Gebruikt voor oesters Rockefeller variaties, kreeft thermidor, geglazuurde visfilets. Vereist constant kloppen, zorgvuldige warmte controle."
        }
      },
      {
        question: {
                  "en": "What is 'fumet de poisson' and how does it differ from regular fish stock?",
                  "es": "¿Qué es 'fumet de poisson' y en qué se diferencia del caldo de pescado regular?",
                  "de": "Was ist 'Fumet de Poisson' und wie unterscheidet es sich von normalem Fischfond?",
                  "nl": "Wat is 'fumet de poisson' en hoe verschilt het van reguliere visbouillon?"
        },
        options: [
        {
                  "en": "Tomato-based stock",
                  "es": "Caldo a base de tomate",
                  "de": "Tomatenbasierter Fond",
                  "nl": "Tomaat-gebaseerde bouillon"
        },
        {
                  "en": "Concentrated fish stock with white wine, sweated aromatics, short cooking (20-30 min) for delicate flavor without bitterness - more refined than basic stock",
                  "es": "Caldo de pescado concentrado con vino blanco, aromáticos sudados, cocción corta (20-30 min) para sabor delicado sin amargura - más refinado que caldo básico",
                  "de": "Konzentrierter Fischfond mit Weißwein, geschwitzten Aromen, kurzes Kochen (20-30 Min) für zarten Geschmack ohne Bitterkeit - raffinierter als Basis-Fond",
                  "nl": "Geconcentreerde visbouillon met witte wijn, gezwete aromaten, kort koken (20-30 min) voor delicate smaak zonder bitterheid - meer verfijnd dan basis bouillon"
        },
        {
                  "en": "Chicken stock with fish",
                  "es": "Caldo de pollo con pescado",
                  "de": "Hühnerbrühe mit Fisch",
                  "nl": "Kippenbouillon met vis"
        },
        {
                  "en": "Boiled water only",
                  "es": "Solo agua hervida",
                  "de": "Nur gekochtes Wasser",
                  "nl": "Alleen gekookt water"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Fumet: concentrated, refined fish stock. Sweat mirepoix (onions, celery, leeks) in butter without browning, add white fish bones (sole, turbot - not oily fish), white wine, water, bouquet garni. Simmer ONLY 20-30 minutes (vs 45-60 for stock) - prevents bitterness from bones. Strain through cheesecloth. Result: intensely flavored, clear, delicate. Used for elegant sauces, reductions, court bouillon base. Higher wine ratio than stock.",
                  "es": "Fumet: caldo de pescado concentrado, refinado. Sudar mirepoix (cebollas, apio, puerros) en mantequilla sin dorar, añadir huesos de pescado blanco (lenguado, rodaballo - no pescado graso), vino blanco, agua, bouquet garni. Cocinar a fuego lento SOLO 20-30 minutos (vs 45-60 para caldo) - previene amargura de huesos. Colar a través de estopilla. Resultado: intensamente sabroso, claro, delicado. Usado para salsas elegantes, reducciones, base de court bouillon. Mayor proporción de vino que caldo.",
                  "de": "Fumet: konzentrierter, raffinierter Fischfond. Schwitze Mirepoix (Zwiebeln, Sellerie, Lauch) in Butter ohne Bräunung, füge weiße Fischknochen hinzu (Seezunge, Steinbutt - nicht öliger Fisch), Weißwein, Wasser, Bouquet Garni. Köchle NUR 20-30 Minuten (vs 45-60 für Fond) - verhindert Bitterkeit von Knochen. Durch Käsetuch sieben. Ergebnis: intensiv gewürzt, klar, zart. Verwendet für elegante Saucen, Reduktionen, Court Bouillon Basis. Höheres Weinverhältnis als Fond.",
                  "nl": "Fumet: geconcentreerde, verfijnde visbouillon. Zweet mirepoix (uien, selderij, prei) in boter zonder bruinen, voeg witte visbotten toe (tong, tarbot - geen vette vis), witte wijn, water, bouquet garni. Sudder SLECHTS 20-30 minuten (vs 45-60 voor bouillon) - voorkomt bitterheid van botten. Zeef door kaasdoek. Resultaat: intens gearomatiseerd, helder, delicaat. Gebruikt voor elegante sauzen, reducties, court bouillon basis. Hogere wijn ratio dan bouillon."
        }
      },
      {
        question: {
                  "en": "What is 'brunoise' and why is it important in seafood preparations?",
                  "es": "¿Qué es 'brunoise' y por qué es importante en preparaciones de mariscos?",
                  "de": "Was ist 'Brunoise' und warum ist es wichtig bei Meeresfrüchte-Zubereitungen?",
                  "nl": "Wat is 'brunoise' en waarom is het belangrijk bij zeevruchten bereidingen?"
        },
        options: [
        {
                  "en": "Puréed vegetables",
                  "es": "Vegetales en puré",
                  "de": "Püriertes Gemüse",
                  "nl": "Gepureerde groenten"
        },
        {
                  "en": "Large chunks only",
                  "es": "Solo trozos grandes",
                  "de": "Nur große Stücke",
                  "nl": "Alleen grote stukken"
        },
        {
                  "en": "Precise 1-2mm dice of vegetables for garnishing delicate seafood dishes, stocks, sauces - provides texture without overwhelming, professional presentation",
                  "es": "Dados precisos de 1-2mm de vegetales para adornar platos delicados de mariscos, caldos, salsas - proporciona textura sin abrumar, presentación profesional",
                  "de": "Präzise 1-2mm Würfel von Gemüse zum Garnieren zarter Meeresfrüchte-Gerichte, Fonds, Saucen - bietet Textur ohne zu überwältigen, professionelle Präsentation",
                  "nl": "Precieze 1-2mm blokjes van groenten voor garneren van delicate zeevruchten gerechten, bouillons, sauzen - biedt textuur zonder te overheersen, professionele presentatie"
        },
        {
                  "en": "Whole vegetables",
                  "es": "Vegetales enteros",
                  "de": "Ganze Gemüse",
                  "nl": "Hele groenten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Brunoise: classical French knife cut - 1-2mm cubes. First julienne vegetables (matchsticks), then dice crosswise into tiny, uniform cubes. Used for: garnishing fish dishes (tomato, bell pepper brunoise on grilled fish), adding to sauces (tomato concassée brunoise), court bouillon, fumet. Small size cooks quickly, distributes evenly, looks professional. Requires sharp knife, precision. Shows technical skill. Larger than brunoise: small dice (3mm), medium dice (6mm), large dice (12mm).",
                  "es": "Brunoise: corte clásico francés - cubos de 1-2mm. Primero cortar vegetales en juliana (palillos), luego cortar transversalmente en cubos diminutos y uniformes. Usado para: adornar platos de pescado (brunoise de tomate, pimiento en pescado a la parrilla), añadir a salsas (brunoise de tomate concassée), court bouillon, fumet. Tamaño pequeño cocina rápido, se distribuye uniformemente, se ve profesional. Requiere cuchillo afilado, precisión. Muestra habilidad técnica. Más grande que brunoise: dados pequeños (3mm), dados medianos (6mm), dados grandes (12mm).",
                  "de": "Brunoise: klassischer französischer Messerschnitt - 1-2mm Würfel. Erst Gemüse julienne schneiden (Streichhölzer), dann quer in winzige, gleichmäßige Würfel schneiden. Verwendet für: Garnieren von Fischgerichten (Tomaten-, Paprika-Brunoise auf gegrilltem Fisch), Hinzufügen zu Saucen (Tomaten-Concassée-Brunoise), Court Bouillon, Fumet. Kleine Größe gart schnell, verteilt sich gleichmäßig, sieht professionell aus. Erfordert scharfes Messer, Präzision. Zeigt technisches Können. Größer als Brunoise: kleine Würfel (3mm), mittlere Würfel (6mm), große Würfel (12mm).",
                  "nl": "Brunoise: klassieke Franse messnede - 1-2mm blokjes. Eerst groenten julienne snijden (lucifers), dan dwars snijden in kleine, uniforme blokjes. Gebruikt voor: garneren van visgerechten (tomaat, paprika brunoise op gegrilde vis), toevoegen aan sauzen (tomaat concassée brunoise), court bouillon, fumet. Kleine maat kookt snel, verdeelt gelijkmatig, ziet professioneel uit. Vereist scherp mes, precisie. Toont technische vaardigheid. Groter dan brunoise: kleine dobbelstenen (3mm), medium dobbelstenen (6mm), grote dobbelstenen (12mm)."
        }
      },
      {
        question: {
                  "en": "What is 'glacé de poisson' and how is it used?",
                  "es": "¿Qué es 'glacé de poisson' y cómo se usa?",
                  "de": "Was ist 'Glacé de Poisson' und wie wird es verwendet?",
                  "nl": "Wat is 'glacé de poisson' en hoe wordt het gebruikt?"
        },
        options: [
        {
                  "en": "Fish stock reduced to syrupy glaze (glace), intensely concentrated flavor, used sparingly to fortify sauces, enrich dishes - professional flavor booster",
                  "es": "Caldo de pescado reducido a glaseado almibarado (glace), sabor intensamente concentrado, usado con moderación para fortificar salsas, enriquecer platos - potenciador de sabor profesional",
                  "de": "Fischfond zu sirupartiger Glasur reduziert (Glace), intensiv konzentrierter Geschmack, sparsam verwendet um Saucen zu verstärken, Gerichte zu bereichern - professioneller Geschmacksverstärker",
                  "nl": "Visbouillon gereduceerd tot siroop glazuur (glace), intens geconcentreerde smaak, spaarzaam gebruikt om sauzen te versterken, gerechten te verrijken - professionele smaak versterker"
        },
        {
                  "en": "Frozen fish",
                  "es": "Pescado congelado",
                  "de": "Gefrorener Fisch",
                  "nl": "Bevroren vis"
        },
        {
                  "en": "Ice cubes",
                  "es": "Cubos de hielo",
                  "de": "Eiswürfel",
                  "nl": "IJsblokjes"
        },
        {
                  "en": "Cold sauce",
                  "es": "Salsa fría",
                  "de": "Kalte Sauce",
                  "nl": "Koude saus"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Glacé de poisson (fish glaze): professional concentrate. Reduce high-quality fish stock or fumet by 90-95% until thick, syrupy, coats back of spoon. Can take hours of gentle simmering. Result: intensely flavored, shelf-stable (refrigerate), powerful seasoning. Uses: add spoonful to sauces for instant depth, enrich reductions, glaze fish before serving, fortify soups. Little goes long way. Similar to demi-glace for meat. Requires patience, quality starting stock.",
                  "es": "Glacé de poisson (glaseado de pescado): concentrado profesional. Reducir caldo de pescado o fumet de alta calidad en 90-95% hasta espeso, almibarado, cubre dorso de cuchara. Puede tomar horas de cocción lenta suave. Resultado: intensamente sabroso, estable en estante (refrigerar), condimento poderoso. Usos: añadir cucharada a salsas para profundidad instantánea, enriquecer reducciones, glasear pescado antes de servir, fortificar sopas. Poco rinde mucho. Similar a demi-glace para carne. Requiere paciencia, caldo inicial de calidad.",
                  "de": "Glacé de Poisson (Fischglasur): professionelles Konzentrat. Reduziere hochwertigen Fischfond oder Fumet um 90-95% bis dick, sirupartig, beschichtet Rückseite des Löffels. Kann Stunden sanftes Köcheln dauern. Ergebnis: intensiv gewürzt, lagerstabil (kühlen), kraftvolle Würze. Verwendung: füge Löffel zu Saucen für sofortige Tiefe hinzu, bereichere Reduktionen, glasiere Fisch vor Servieren, verstärke Suppen. Wenig reicht weit. Ähnlich Demi-Glace für Fleisch. Erfordert Geduld, qualitativ hochwertigen Ausgangsfond.",
                  "nl": "Glacé de poisson (vis glazuur): professioneel concentraat. Reduceer hoogwaardige visbouillon of fumet met 90-95% tot dik, siroop, bedekt achterkant van lepel. Kan uren zacht sudderen duren. Resultaat: intens gearomatiseerd, houdbaar (koelen), krachtige kruiding. Gebruik: voeg lepel toe aan sauzen voor directe diepte, verrijk reducties, glazuur vis voor serveren, versterk soepen. Weinig gaat ver. Vergelijkbaar met demi-glace voor vlees. Vereist geduld, kwaliteits start bouillon."
        }
      },
      {
        question: {
                  "en": "What is 'duxelles' and why is it used with seafood en croûte?",
                  "es": "¿Qué es 'duxelles' y por qué se usa con mariscos en croûte?",
                  "de": "Was ist 'Duxelles' und warum wird es mit Meeresfrüchten En Croûte verwendet?",
                  "nl": "Wat is 'duxelles' en waarom wordt het gebruikt met zeevruchten en croûte?"
        },
        options: [
        {
                  "en": "Cream sauce",
                  "es": "Salsa de crema",
                  "de": "Sahnesauce",
                  "nl": "Room saus"
        },
        {
                  "en": "Raw vegetables",
                  "es": "Vegetales crudos",
                  "de": "Rohes Gemüse",
                  "nl": "Rauwe groenten"
        },
        {
                  "en": "Finely chopped mushrooms cooked until dry, concentrated umami flavor, creates moisture barrier between fish and pastry, prevents sogginess",
                  "es": "Champiñones finamente picados cocidos hasta secos, sabor umami concentrado, crea barrera de humedad entre pescado y masa, previene humedad",
                  "de": "Fein gehackte Pilze gekocht bis trocken, konzentrierter Umami-Geschmack, schafft Feuchtigkeitsbarriere zwischen Fisch und Teig, verhindert Durchweichung",
                  "nl": "Fijn gehakte champignons gekookt tot droog, geconcentreerde umami smaak, creëert vocht barrière tussen vis en deeg, voorkomt doorweken"
        },
        {
                  "en": "Butter only",
                  "es": "Solo mantequilla",
                  "de": "Nur Butter",
                  "nl": "Alleen boter"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Duxelles: classical French preparation named after Marquis d'Uxelles. Finely chop mushrooms, squeeze out moisture in towel. Sauté shallots in butter, add mushrooms, cook until all liquid evaporates (dry paste). Season. Uses in seafood: spread on pastry before wrapping fish en croûte - prevents fish moisture from soaking pastry, adds earthy umami, complements delicate fish. Essential for Salmon Wellington, coulibiac. Can add herbs (thyme, parsley), sometimes wine. Store refrigerated.",
                  "es": "Duxelles: preparación francesa clásica nombrada por Marqués d'Uxelles. Picar finamente champiñones, exprimir humedad en toalla. Saltear chalotas en mantequilla, añadir champiñones, cocinar hasta que todo líquido se evapore (pasta seca). Sazonar. Usos en mariscos: extender en masa antes de envolver pescado en croûte - previene humedad de pescado de empapar masa, añade umami terroso, complementa pescado delicado. Esencial para Wellington de salmón, coulibiac. Puede añadir hierbas (tomillo, perejil), a veces vino. Almacenar refrigerado.",
                  "de": "Duxelles: klassische französische Zubereitung benannt nach Marquis d'Uxelles. Hacke Pilze fein, drücke Feuchtigkeit in Handtuch aus. Schwitze Schalotten in Butter, füge Pilze hinzu, koche bis alle Flüssigkeit verdunstet (trockene Paste). Würze. Verwendung bei Meeresfrüchten: streiche auf Teig vor Einwickeln von Fisch En Croûte - verhindert Fischfeuchtigkeit Teig durchzuweichen, fügt erdigen Umami hinzu, ergänzt zarten Fisch. Wesentlich für Lachs Wellington, Coulibiac. Kann Kräuter hinzufügen (Thymian, Petersilie), manchmal Wein. Im Kühlschrank lagern.",
                  "nl": "Duxelles: klassieke Franse bereiding genoemd naar Markies d'Uxelles. Hak champignons fijn, wring vocht eruit in handdoek. Fruit sjalotten in boter, voeg champignons toe, kook tot alle vloeistof verdampt (droge pasta). Kruid. Gebruik bij zeevruchten: smeer op deeg voor inwikkelen van vis en croûte - voorkomt visvocht deeg doorweken, voegt aardse umami toe, complementeert delicate vis. Essentieel voor Zalm Wellington, coulibiac. Kan kruiden toevoegen (tijm, peterselie), soms wijn. Koel bewaren."
        }
      },
      {
        question: {
                  "en": "What is 'matelote' and its regional variations?",
                  "es": "¿Qué es 'matelote' y sus variaciones regionales?",
                  "de": "Was ist 'Matelote' und seine regionalen Variationen?",
                  "nl": "Wat is 'matelote' en zijn regionale variaties?"
        },
        options: [
        {
                  "en": "Freshwater fish stew braised in red or white wine with onions, mushrooms, bacon; Matelote Normande (cider, Calvados), Bourguignonne (red wine) - regional French traditions",
                  "es": "Guiso de pescado de agua dulce estofado en vino tinto o blanco con cebollas, champiñones, tocino; Matelote Normande (sidra, Calvados), Bourguignonne (vino tinto) - tradiciones francesas regionales",
                  "de": "Süßwasserfisch-Eintopf geschmort in Rot- oder Weißwein mit Zwiebeln, Pilzen, Speck; Matelote Normande (Cidre, Calvados), Bourguignonne (Rotwein) - regionale französische Traditionen",
                  "nl": "Zoetwatervis stoofschotel gesmoord in rode of witte wijn met uien, champignons, spek; Matelote Normande (cider, Calvados), Bourguignonne (rode wijn) - regionale Franse tradities"
        },
        {
                  "en": "Raw fish dish",
                  "es": "Plato de pescado crudo",
                  "de": "Rohes Fischgericht",
                  "nl": "Rauw vis gerecht"
        },
        {
                  "en": "Grilled seafood",
                  "es": "Mariscos a la parrilla",
                  "de": "Gegrillte Meeresfrüchte",
                  "nl": "Gegrilde zeevruchten"
        },
        {
                  "en": "Fried fish",
                  "es": "Pescado frito",
                  "de": "Frittierter Fisch",
                  "nl": "Gefrituurde vis"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Matelote: rustic French fisherman's stew. Traditional: freshwater fish (eel, carp, pike, perch) braised in red or white wine with pearl onions, mushrooms, bacon lardons, garlic, herbs. Regional variations: Matelote Normande (Normandy) - white wine, cider, Calvados, cream; Matelote Bourguignonne (Burgundy) - red wine, similar to coq au vin. Thicken with beurre manié. Serve with croutons. Hearty, wine-forward, contrasts with delicate poached fish dishes.",
                  "es": "Matelote: guiso rústico francés de pescador. Tradicional: pescado de agua dulce (anguila, carpa, lucio, perca) estofado en vino tinto o blanco con cebollas perla, champiñones, trozos de tocino, ajo, hierbas. Variaciones regionales: Matelote Normande (Normandía) - vino blanco, sidra, Calvados, crema; Matelote Bourguignonne (Borgoña) - vino tinto, similar a coq au vin. Espesar con beurre manié. Servir con crutones. Abundante, con vino prominente, contrasta con platos delicados de pescado escalfado.",
                  "de": "Matelote: rustikaler französischer Fischer-Eintopf. Traditionell: Süßwasserfisch (Aal, Karpfen, Hecht, Barsch) geschmort in Rot- oder Weißwein mit Perlzwiebeln, Pilzen, Speckwürfeln, Knoblauch, Kräutern. Regionale Variationen: Matelote Normande (Normandie) - Weißwein, Cidre, Calvados, Sahne; Matelote Bourguignonne (Burgund) - Rotwein, ähnlich wie Coq au Vin. Mit Beurre Manié andicken. Mit Croutons servieren. Herzhaft, weinbetont, kontrastiert mit zarten pochierten Fischgerichten.",
                  "nl": "Matelote: rustieke Franse vissers stoofschotel. Traditioneel: zoetwatervis (paling, karper, snoek, baars) gesmoord in rode of witte wijn met pareltjes uien, champignons, spek blokjes, knoflook, kruiden. Regionale variaties: Matelote Normande (Normandië) - witte wijn, cider, Calvados, room; Matelote Bourguignonne (Bourgondië) - rode wijn, vergelijkbaar met coq au vin. Bind met beurre manié. Serveer met croutons. Hartig, wijn-vooruit, contrasteert met delicate gepocheerde visgerechten."
        }
      },
      {
        question: {
                  "en": "What is 'noisette' butter and when is it used with seafood?",
                  "es": "¿Qué es mantequilla 'noisette' y cuándo se usa con mariscos?",
                  "de": "Was ist 'Noisette' Butter und wann wird sie mit Meeresfrüchten verwendet?",
                  "nl": "Wat is 'noisette' boter en wanneer wordt het gebruikt met zeevruchten?"
        },
        options: [
        {
                  "en": "Raw cold butter",
                  "es": "Mantequilla cruda fría",
                  "de": "Rohe kalte Butter",
                  "nl": "Rauwe koude boter"
        },
        {
                  "en": "Clarified butter",
                  "es": "Mantequilla clarificada",
                  "de": "Geklärte Butter",
                  "nl": "Geklaarde boter"
        },
        {
                  "en": "Brown butter cooked until hazelnut color/aroma, nutty flavor from browned milk solids, classic for sole meunière, skate, delicate white fish",
                  "es": "Mantequilla marrón cocida hasta color/aroma de avellana, sabor de nuez de sólidos de leche dorados, clásica para lenguado meunière, raya, pescado blanco delicado",
                  "de": "Braune Butter gekocht bis Haselnuss-Farbe/Aroma, nussiger Geschmack von gebräunten Milchfeststoffen, klassisch für Seezunge Meunière, Rochen, zarter Weißfisch",
                  "nl": "Bruine boter gekookt tot hazelnoot kleur/aroma, nootachtige smaak van gebruinde melkvaste stoffen, klassiek voor tong meunière, rog, delicate witte vis"
        },
        {
                  "en": "Melted butter only",
                  "es": "Solo mantequilla derretida",
                  "de": "Nur geschmolzene Butter",
                  "nl": "Alleen gesmolten boter"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Beurre noisette (hazelnut butter): brown butter technique. Melt butter in light-colored pan to monitor color. Continue heating past foam stage - milk solids sink, brown. Watch carefully - goes from golden to brown to burnt quickly. When light brown with nutty aroma (like toasted hazelnuts), remove from heat. Classic for: sole meunière, skate, pan-fried trout. Often add lemon juice, capers. The nutty richness complements delicate white fish beautifully.",
                  "es": "Beurre noisette (mantequilla de avellana): técnica de mantequilla marrón. Derretir mantequilla en sartén de color claro para monitorear color. Continuar calentando más allá de etapa de espuma - sólidos de leche se hunden, se doran. Observar cuidadosamente - va de dorado a marrón a quemado rápidamente. Cuando marrón claro con aroma de nuez (como avellanas tostadas), retirar del fuego. Clásica para: lenguado meunière, raya, trucha frita. A menudo añadir jugo de limón, alcaparras. La riqueza de nuez complementa pescado blanco delicado hermosamente.",
                  "de": "Beurre Noisette (Haselnussbutter): braune Butter-Technik. Schmelze Butter in hellfarbiger Pfanne um Farbe zu überwachen. Erhitze weiter über Schaumstadium hinaus - Milchfeststoffe sinken, bräunen. Beobachte sorgfältig - geht von golden zu braun zu verbrannt schnell. Wenn hellbraun mit nussigem Aroma (wie geröstete Haselnüsse), vom Herd nehmen. Klassisch für: Seezunge Meunière, Rochen, Forelle gebraten. Oft Zitronensaft, Kapern hinzufügen. Die nussige Fülle ergänzt zarten Weißfisch wunderbar.",
                  "nl": "Beurre noisette (hazelnoot boter): bruine boter techniek. Smelt boter in lichtgekleurde pan om kleur te monitoren. Blijf verhitten voorbij schuim stadium - melkvaste stoffen zinken, bruinen. Kijk zorgvuldig - gaat van gouden naar bruin naar verbrand snel. Wanneer lichtbruin met nootachtig aroma (zoals geroosterde hazelnoten), verwijder van hitte. Klassiek voor: tong meunière, rog, forel gebakken. Vaak citroensap, kappertjes toevoegen. De nootachtige rijkdom complementeert delicate witte vis prachtig."
        }
      },
      {
        question: {
                  "en": "What is 'court bouillon' composition and how does it differ from stock?",
                  "es": "¿Cuál es la composición del 'court bouillon' y en qué se diferencia del caldo?",
                  "de": "Was ist die Zusammensetzung von 'Court Bouillon' und wie unterscheidet es sich von Fond?",
                  "nl": "Wat is de samenstelling van 'court bouillon' en hoe verschilt het van bouillon?"
        },
        options: [
        {
                  "en": "Milk-based liquid",
                  "es": "Líquido a base de leche",
                  "de": "Milchbasierte Flüssigkeit",
                  "nl": "Melk-gebaseerde vloeistof"
        },
        {
                  "en": "Plain water only",
                  "es": "Solo agua simple",
                  "de": "Nur einfaches Wasser",
                  "nl": "Alleen simpel water"
        },
        {
                  "en": "Tomato sauce",
                  "es": "Salsa de tomate",
                  "de": "Tomatensauce",
                  "nl": "Tomaten saus"
        },
        {
                  "en": "Aromatic poaching liquid with water, wine, vinegar, mirepoix, herbs, peppercorns - used for cooking, not reduction; stock uses bones for body and gelatin",
                  "es": "Líquido aromático de escalfado con agua, vino, vinagre, mirepoix, hierbas, granos de pimienta - usado para cocinar, no reducción; caldo usa huesos para cuerpo y gelatina",
                  "de": "Aromatische Pochierflüssigkeit mit Wasser, Wein, Essig, Mirepoix, Kräuter, Pfefferkörner - zum Kochen verwendet, nicht Reduktion; Fond nutzt Knochen für Körper und Gelatine",
                  "nl": "Aromatische pocheer vloeistof met water, wijn, azijn, mirepoix, kruiden, peperkorrels - gebruikt voor koken, geen reductie; bouillon gebruikt botten voor body en gelatine"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Court bouillon ('short broth'): aromatic poaching liquid, not stock. Composition: water, white wine (or vinegar for acidity), mirepoix (onion, carrot, celery), bouquet garni (parsley, thyme, bay), peppercorns, salt. Simmer 20-30 min to infuse. Use for: poaching fish, shellfish, vegetables. Key difference from stock: no bones (so no gelatin/body), not reduced for sauce. Purpose: flavor food during cooking. Can be reused 2-3 times. Acid helps firm fish protein.",
                  "es": "Court bouillon ('caldo corto'): líquido aromático de escalfado, no caldo. Composición: agua, vino blanco (o vinagre para acidez), mirepoix (cebolla, zanahoria, apio), bouquet garni (perejil, tomillo, laurel), granos de pimienta, sal. Cocinar a fuego lento 20-30 min para infundir. Usar para: escalfar pescado, mariscos, vegetales. Diferencia clave del caldo: sin huesos (así que sin gelatina/cuerpo), no reducido para salsa. Propósito: saborizar comida durante cocción. Puede reutilizarse 2-3 veces. Ácido ayuda a firmar proteína de pescado.",
                  "de": "Court Bouillon ('kurze Brühe'): aromatische Pochierflüssigkeit, kein Fond. Zusammensetzung: Wasser, Weißwein (oder Essig für Säure), Mirepoix (Zwiebel, Karotte, Sellerie), Bouquet Garni (Petersilie, Thymian, Lorbeer), Pfefferkörner, Salz. 20-30 Min köcheln zum Infundieren. Verwendung für: Pochieren von Fisch, Schalentieren, Gemüse. Hauptunterschied zu Fond: keine Knochen (also keine Gelatine/Körper), nicht für Sauce reduziert. Zweck: Lebensmittel während Kochen würzen. Kann 2-3 mal wiederverwendet werden. Säure hilft Fischprotein zu festigen.",
                  "nl": "Court bouillon ('korte bouillon'): aromatische pocheer vloeistof, geen bouillon. Samenstelling: water, witte wijn (of azijn voor zuur), mirepoix (ui, wortel, selderij), bouquet garni (peterselie, tijm, laurier), peperkorrels, zout. Sudder 20-30 min om te infunderen. Gebruik voor: pocheren van vis, schelpdieren, groenten. Belangrijk verschil met bouillon: geen botten (dus geen gelatine/body), niet gereduceerd voor saus. Doel: smaak voedsel tijdens koken. Kan 2-3 keer hergebruikt worden. Zuur helpt visproteïne steviger maken."
        }
      },
      {
        question: {
                  "en": "What is 'rouille' and what is its traditional use?",
                  "es": "¿Qué es 'rouille' y cuál es su uso tradicional?",
                  "de": "Was ist 'Rouille' und was ist seine traditionelle Verwendung?",
                  "nl": "Wat is 'rouille' en wat is het traditionele gebruik?"
        },
        options: [
        {
                  "en": "Provençal saffron-garlic-chili mayonnaise with breadcrumbs, traditionally served with bouillabaisse on toasted bread - adds heat and richness",
                  "es": "Mayonesa provenzal de azafrán-ajo-chile con pan rallado, tradicionalmente servida con bouillabaisse en pan tostado - añade calor y riqueza",
                  "de": "Provenzalische Safran-Knoblauch-Chili-Mayonnaise mit Semmelbröseln, traditionell mit Bouillabaisse auf geröstetem Brot serviert - fügt Schärfe und Fülle hinzu",
                  "nl": "Provençaalse saffraan-knoflook-chili mayonaise met broodkruimels, traditioneel geserveerd met bouillabaisse op geroosterd brood - voegt warmte en rijkdom toe"
        },
        {
                  "en": "Cream sauce",
                  "es": "Salsa de crema",
                  "de": "Sahnesauce",
                  "nl": "Room saus"
        },
        {
                  "en": "Butter sauce",
                  "es": "Salsa de mantequilla",
                  "de": "Buttersauce",
                  "nl": "Boter saus"
        },
        {
                  "en": "Tomato sauce",
                  "es": "Salsa de tomate",
                  "de": "Tomatensauce",
                  "nl": "Tomaten saus"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Rouille ('rust' - for its color): classic Provençal condiment for bouillabaisse. Traditional: pound garlic, saffron, chili peppers, salt in mortar. Add soaked bread or potato for body. Emulsify with olive oil like aioli. Modern: mayo base with saffron, garlic, cayenne, paprika. Spread on toasted baguette slices, float in bouillabaisse. The spicy, garlicky richness complements fish stew. Also served with other fish soups. Similar to aioli but with saffron, heat.",
                  "es": "Rouille ('óxido' - por su color): condimento provenzal clásico para bouillabaisse. Tradicional: machacar ajo, azafrán, chiles, sal en mortero. Añadir pan remojado o papa para cuerpo. Emulsionar con aceite de oliva como aioli. Moderno: base de mayonesa con azafrán, ajo, cayena, pimentón. Untar en rodajas de baguette tostado, flotar en bouillabaisse. La riqueza picante y con ajo complementa guiso de pescado. También servido con otras sopas de pescado. Similar a aioli pero con azafrán, calor.",
                  "de": "Rouille ('Rost' - für seine Farbe): klassisches provenzalisches Gewürz für Bouillabaisse. Traditionell: zerstoße Knoblauch, Safran, Chilischoten, Salz im Mörser. Füge eingeweichtes Brot oder Kartoffel für Körper hinzu. Emulgiere mit Olivenöl wie Aioli. Modern: Mayo-Basis mit Safran, Knoblauch, Cayenne, Paprika. Streiche auf geröstete Baguettescheiben, schwimme in Bouillabaisse. Die würzige, knoblauchartige Fülle ergänzt Fischeintopf. Auch mit anderen Fischsuppen serviert. Ähnlich Aioli aber mit Safran, Schärfe.",
                  "nl": "Rouille ('roest' - voor zijn kleur): klassiek Provençaals condiment voor bouillabaisse. Traditioneel: stamp knoflook, saffraan, chili pepers, zout in vijzel. Voeg geweekt brood of aardappel toe voor body. Emulgeer met olijfolie zoals aioli. Modern: mayo basis met saffraan, knoflook, cayenne, paprika. Smeer op geroosterde baguette plakjes, drijf in bouillabaisse. De pittige, knoflookachtige rijkdom complementeert vis stoofschotel. Ook geserveerd met andere vissoepen. Vergelijkbaar met aioli maar met saffraan, warmte."
        }
      },
      {
        question: {
                  "en": "What is 'beurre blanc' and what are the keys to preventing it from breaking?",
                  "es": "¿Qué es 'beurre blanc' y cuáles son las claves para evitar que se rompa?",
                  "de": "Was ist 'Beurre Blanc' und was sind die Schlüssel um Trennung zu verhindern?",
                  "nl": "Wat is 'beurre blanc' en wat zijn de sleutels om scheiding te voorkomen?"
        },
        options: [
        {
                  "en": "Tomato sauce",
                  "es": "Salsa de tomate",
                  "de": "Tomatensauce",
                  "nl": "Tomaten saus"
        },
        {
                  "en": "Cream-based sauce",
                  "es": "Salsa a base de crema",
                  "de": "Sahnebasierte Sauce",
                  "nl": "Room-gebaseerde saus"
        },
        {
                  "en": "White wine-shallot reduction whisked with cold butter creating emulsion; maintain 160-180°F, constant whisking, never boil - classic fish sauce",
                  "es": "Reducción de vino blanco-chalota batida con mantequilla fría creando emulsión; mantener 160-180°F, batido constante, nunca hervir - salsa clásica para pescado",
                  "de": "Weißwein-Schalotten-Reduktion mit kalter Butter geschlagen schafft Emulsion; halte 71-82°C, ständiges Schlagen, niemals kochen - klassische Fischsauce",
                  "nl": "Witte wijn-sjalot reductie geklopt met koude boter creërend emulsie; handhaaf 71-82°C, constant kloppen, nooit koken - klassieke vis saus"
        },
        {
                  "en": "Butter melted only",
                  "es": "Solo mantequilla derretida",
                  "de": "Nur geschmolzene Butter",
                  "nl": "Alleen gesmolten boter"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Beurre blanc ('white butter'): legendary French butter sauce. Reduce white wine, vinegar, shallots to 2 Tbsp. Cool slightly to 160-180°F (71-82°C). Whisk in cold butter cubes gradually - forms emulsion. Keys: moderate heat (too hot breaks), constant whisking, cold butter, proper reduction (provides lecithin for stability). If breaks: add ice cube or splash cold cream to re-emulsify. Classic with poached fish, especially pike. Sauce beurre rouge uses red wine.",
                  "es": "Beurre blanc ('mantequilla blanca'): legendaria salsa francesa de mantequilla. Reducir vino blanco, vinagre, chalotas a 2 cucharadas. Enfriar ligeramente a 160-180°F (71-82°C). Batir cubos de mantequilla fría gradualmente - forma emulsión. Claves: calor moderado (demasiado caliente rompe), batido constante, mantequilla fría, reducción adecuada (proporciona lecitina para estabilidad). Si se rompe: añadir cubo de hielo o chorrito de crema fría para re-emulsionar. Clásica con pescado escalfado, especialmente lucio. Salsa beurre rouge usa vino tinto.",
                  "de": "Beurre Blanc ('weiße Butter'): legendäre französische Buttersauce. Reduziere Weißwein, Essig, Schalotten auf 2 EL. Kühle leicht auf 71-82°C. Schlage kalte Butterwürfel allmählich ein - bildet Emulsion. Schlüssel: moderate Hitze (zu heiß trennt), ständiges Schlagen, kalte Butter, richtige Reduktion (liefert Lecithin für Stabilität). Wenn trennt: füge Eiswürfel oder Spritzer kalte Sahne hinzu zum Re-Emulgieren. Klassisch mit pochiertem Fisch, besonders Hecht. Sauce Beurre Rouge nutzt Rotwein.",
                  "nl": "Beurre blanc ('witte boter'): legendarische Franse botersaus. Reduceer witte wijn, azijn, sjalotten tot 2 eetlepels. Koel licht af tot 71-82°C. Klop koude boterblokjes geleidelijk in - vormt emulsie. Sleutels: gematigde hitte (te heet scheidt), constant kloppen, koude boter, juiste reductie (levert lecithine voor stabiliteit). Als scheidt: voeg ijsblokje of scheutje koude room toe om te re-emulgeren. Klassiek met gepocheerde vis, vooral snoek. Saus beurre rouge gebruikt rode wijn."
        }
      },
      {
        question: {
                  "en": "What is 'velouté' sauce and its role in classical seafood preparations?",
                  "es": "¿Qué es la salsa 'velouté' y su papel en preparaciones clásicas de mariscos?",
                  "de": "Was ist 'Velouté' Sauce und ihre Rolle bei klassischen Meeresfrüchte-Zubereitungen?",
                  "nl": "Wat is 'velouté' saus en zijn rol bij klassieke zeevruchten bereidingen?"
        },
        options: [
        {
                  "en": "Tomato-based sauce",
                  "es": "Salsa a base de tomate",
                  "de": "Tomatenbasierte Sauce",
                  "nl": "Tomaat-gebaseerde saus"
        },
        {
                  "en": "Cream sauce only",
                  "es": "Solo salsa de crema",
                  "de": "Nur Sahnesauce",
                  "nl": "Alleen room saus"
        },
        {
                  "en": "Butter sauce",
                  "es": "Salsa de mantequilla",
                  "de": "Buttersauce",
                  "nl": "Boter saus"
        },
        {
                  "en": "Mother sauce made from fish stock and blonde roux, foundation for derivative sauces like vin blanc, Normande, Bercy - essential in classical French cuisine",
                  "es": "Salsa madre hecha de caldo de pescado y roux rubio, fundamento para salsas derivadas como vin blanc, Normande, Bercy - esencial en cocina francesa clásica",
                  "de": "Muttersauce aus Fischfond und blonder Roux, Grundlage für abgeleitete Saucen wie Vin Blanc, Normande, Bercy - wesentlich in klassischer französischer Küche",
                  "nl": "Moedersaus gemaakt van visbouillon en blonde roux, basis voor afgeleide sauzen zoals vin blanc, Normande, Bercy - essentieel in klassieke Franse keuken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Velouté: one of five French mother sauces (Escoffier system). Make blonde roux (butter + flour, cooked until light blond). Whisk in hot fish stock or fumet. Simmer 20-30 min, skim impurities, strain. Result: smooth, velvety, light sauce. Foundation for: Vin blanc (white wine reduction), Normande (cream, mushroom), Bercy (shallots, lemon), Bretonne (leeks, celery). Fish velouté specifically for seafood. Chicken/veal velouté for poultry/meat. Essential technique.",
                  "es": "Velouté: una de cinco salsas madres francesas (sistema Escoffier). Hacer roux rubio (mantequilla + harina, cocida hasta rubio claro). Batir en caldo de pescado caliente o fumet. Cocinar a fuego lento 20-30 min, espumar impurezas, colar. Resultado: salsa suave, aterciopelada, ligera. Fundamento para: Vin blanc (reducción de vino blanco), Normande (crema, champiñones), Bercy (chalotas, limón), Bretonne (puerros, apio). Velouté de pescado específicamente para mariscos. Velouté de pollo/ternera para aves/carne. Técnica esencial.",
                  "de": "Velouté: eine von fünf französischen Muttersaucen (Escoffier-System). Mache blonde Roux (Butter + Mehl, gekocht bis hellblond). Schlage in heißen Fischfond oder Fumet ein. Köchle 20-30 Min, schäume Verunreinigungen ab, siebe. Ergebnis: glatte, samtige, leichte Sauce. Grundlage für: Vin Blanc (Weißwein-Reduktion), Normande (Sahne, Pilze), Bercy (Schalotten, Zitrone), Bretonne (Lauch, Sellerie). Fisch-Velouté speziell für Meeresfrüchte. Hühner-/Kalb-Velouté für Geflügel/Fleisch. Wesentliche Technik.",
                  "nl": "Velouté: een van vijf Franse moedersauzen (Escoffier systeem). Maak blonde roux (boter + bloem, gekookt tot licht blond). Klop in hete visbouillon of fumet. Sudder 20-30 min, schum onzuiverheden af, zeef. Resultaat: gladde, fluwelen, lichte saus. Basis voor: Vin blanc (witte wijn reductie), Normande (room, champignons), Bercy (sjalotten, citroen), Bretonne (prei, selderij). Vis velouté specifiek voor zeevruchten. Kip/kalf velouté voor gevogelte/vlees. Essentiële techniek."
        }
      },
      {
        question: {
                  "en": "What is 'américaine' (or armoricaine) sauce?",
                  "es": "¿Qué es la salsa 'américaine' (o armoricaine)?",
                  "de": "Was ist 'Américaine' (oder Armoricaine) Sauce?",
                  "nl": "Wat is 'américaine' (of armoricaine) saus?"
        },
        options: [
        {
                  "en": "Cream sauce only",
                  "es": "Solo salsa de crema",
                  "de": "Nur Sahnesauce",
                  "nl": "Alleen room saus"
        },
        {
                  "en": "Cheese sauce",
                  "es": "Salsa de queso",
                  "de": "Käsesauce",
                  "nl": "Kaas saus"
        },
        {
                  "en": "Butter sauce",
                  "es": "Salsa de mantequilla",
                  "de": "Buttersauce",
                  "nl": "Boter saus"
        },
        {
                  "en": "Rich lobster sauce made from shells, tomatoes, white wine, cognac, aromatics - often flambéed, used for lobster américaine classic",
                  "es": "Rica salsa de langosta hecha de conchas, tomates, vino blanco, coñac, aromáticos - a menudo flambeada, usada para langosta américaine clásica",
                  "de": "Reiche Hummersauce aus Schalen, Tomaten, Weißwein, Cognac, Aromen - oft flambiert, für Hummer Américaine Klassiker verwendet",
                  "nl": "Rijke kreeft saus gemaakt van schalen, tomaten, witte wijn, cognac, aromaten - vaak geflambeerd, gebruikt voor kreeft américaine klassiek"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Sauce américaine (debate: américaine vs armoricaine/Brittany): luxurious lobster sauce. Sauté lobster pieces in oil, add mirepoix, tomatoes, tomato paste. Flambé with cognac, add white wine, fish stock, tarragon. Simmer, extract lobster meat. Crush shells, return to sauce, simmer, strain, reduce. Finish with butter, cayenne. Rich, complex, tomato-forward. Classic dish: Lobster Américaine. Labor-intensive but spectacular. Shells provide deep crustacean flavor.",
                  "es": "Salsa américaine (debate: américaine vs armoricaine/Bretaña): lujosa salsa de langosta. Saltear trozos de langosta en aceite, añadir mirepoix, tomates, pasta de tomate. Flambear con coñac, añadir vino blanco, caldo de pescado, estragón. Cocinar a fuego lento, extraer carne de langosta. Triturar conchas, devolver a salsa, cocinar a fuego lento, colar, reducir. Terminar con mantequilla, cayena. Rica, compleja, con tomate prominente. Plato clásico: Langosta Américaine. Laborioso pero espectacular. Conchas proporcionan sabor profundo de crustáceos.",
                  "de": "Sauce Américaine (Debatte: Américaine vs Armoricaine/Bretagne): luxuriöse Hummersauce. Brate Hummerstücke in Öl, füge Mirepoix, Tomaten, Tomatenmark hinzu. Flambiere mit Cognac, füge Weißwein, Fischfond, Estragon hinzu. Köchle, extrahiere Hummerfleisch. Zerdrücke Schalen, gebe zurück zu Sauce, köchle, siebe, reduziere. Schließe mit Butter, Cayenne ab. Reich, komplex, tomaten-betont. Klassisches Gericht: Hummer Américaine. Arbeitsintensiv aber spektakulär. Schalen liefern tiefen Krustentier-Geschmack.",
                  "nl": "Saus américaine (debat: américaine vs armoricaine/Bretagne): luxueuze kreeft saus. Fruit kreeft stukken in olie, voeg mirepoix, tomaten, tomatenpuree toe. Flambeer met cognac, voeg witte wijn, visbouillon, dragon toe. Sudder, extraheer kreeft vlees. Plet schalen, keer terug naar saus, sudder, zeef, reduceer. Werk af met boter, cayenne. Rijk, complex, tomaat-vooruit. Klassiek gerecht: Kreeft Américaine. Arbeidsintensief maar spectaculair. Schalen leveren diepe schaaldier smaak."
        }
      },
      {
        question: {
                  "en": "What is 'cardinal' sauce and when is it used?",
                  "es": "¿Qué es la salsa 'cardinal' y cuándo se usa?",
                  "de": "Was ist 'Cardinal' Sauce und wann wird sie verwendet?",
                  "nl": "Wat is 'cardinal' saus en wanneer wordt het gebruikt?"
        },
        options: [
        {
                  "en": "Tomato sauce",
                  "es": "Salsa de tomate",
                  "de": "Tomatensauce",
                  "nl": "Tomaten saus"
        },
        {
                  "en": "Oil-based",
                  "es": "A base de aceite",
                  "de": "Ölbasiert",
                  "nl": "Olie-gebaseerd"
        },
        {
                  "en": "Béchamel or velouté enriched with lobster butter, cream, sometimes truffle - pink color, rich, used for lobster, crab, elegant shellfish presentations",
                  "es": "Béchamel o velouté enriquecido con mantequilla de langosta, crema, a veces trufa - color rosa, rico, usado para langosta, cangrejo, presentaciones elegantes de mariscos",
                  "de": "Béchamel oder Velouté angereichert mit Hummerbutter, Sahne, manchmal Trüffel - rosa Farbe, reich, für Hummer, Krabbe, elegante Schalentier-Präsentationen verwendet",
                  "nl": "Béchamel of velouté verrijkt met kreeft boter, room, soms truffel - roze kleur, rijk, gebruikt voor kreeft, krab, elegante schaaldier presentaties"
        },
        {
                  "en": "Butter only",
                  "es": "Solo mantequilla",
                  "de": "Nur Butter",
                  "nl": "Alleen boter"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Sauce cardinal: luxurious pink sauce for shellfish. Traditional: make béchamel or fish velouté, whisk in lobster butter (made by pounding lobster shells, roe with butter, straining), add cream, sometimes truffle essence. Result: pale pink (cardinal's robes), rich, delicate. Used for: Lobster Cardinal (stuffed lobster gratinéed), crab dishes, elegant shellfish presentations. Alternative: Nantua sauce (crayfish butter instead of lobster). Shows mastery of compound butters.",
                  "es": "Salsa cardinal: lujosa salsa rosa para mariscos. Tradicional: hacer béchamel o velouté de pescado, batir en mantequilla de langosta (hecha machacando conchas de langosta, huevas con mantequilla, colando), añadir crema, a veces esencia de trufa. Resultado: rosa pálido (túnicas de cardenal), rico, delicado. Usado para: Langosta Cardinal (langosta rellena gratinada), platos de cangrejo, presentaciones elegantes de mariscos. Alternativa: salsa Nantua (mantequilla de cangrejo de río en lugar de langosta). Muestra maestría de mantequillas compuestas.",
                  "de": "Sauce Cardinal: luxuriöse rosa Sauce für Schalentiere. Traditionell: mache Béchamel oder Fisch-Velouté, schlage Hummerbutter ein (hergestellt durch Stampfen von Hummerschalen, Rogen mit Butter, Sieben), füge Sahne hinzu, manchmal Trüffelessenz. Ergebnis: blassrosa (Kardinals Roben), reich, zart. Verwendet für: Hummer Cardinal (gefüllter Hummer gratiniert), Krabbengerichte, elegante Schalentier-Präsentationen. Alternative: Nantua Sauce (Flusskrebsbutter statt Hummer). Zeigt Meisterschaft zusammengesetzter Butter.",
                  "nl": "Saus cardinal: luxueuze roze saus voor schaaldieren. Traditioneel: maak béchamel of vis velouté, klop kreeft boter in (gemaakt door stampen van kreeft schalen, kuit met boter, zeven), voeg room toe, soms truffel essence. Resultaat: bleek roze (kardinaal gewaden), rijk, delicaat. Gebruikt voor: Kreeft Cardinal (gevulde kreeft gegratineerd), krab gerechten, elegante schaaldier presentaties. Alternatief: Nantua saus (rivierkreeft boter in plaats van kreeft). Toont meesterschap van samengestelde boters."
        }
      },
      {
        question: {
                  "en": "What is 'hollandaise' sauce and why is it classic with fish?",
                  "es": "¿Qué es la salsa 'holandesa' y por qué es clásica con pescado?",
                  "de": "Was ist 'Hollandaise' Sauce und warum ist sie klassisch zu Fisch?",
                  "nl": "Wat is 'hollandaise' saus en waarom is het klassiek bij vis?"
        },
        options: [
        {
                  "en": "Cream only",
                  "es": "Solo crema",
                  "de": "Nur Sahne",
                  "nl": "Alleen room"
        },
        {
                  "en": "Emulsified egg yolk-butter sauce with lemon, rich but tangy, complements delicate fish without masking - classic for poached salmon, asparagus",
                  "es": "Salsa emulsionada de yema de huevo-mantequilla con limón, rica pero ácida, complementa pescado delicado sin enmascarar - clásica para salmón escalfado, espárragos",
                  "de": "Emulgierte Eigelb-Butter-Sauce mit Zitrone, reich aber säuerlich, ergänzt zarten Fisch ohne zu maskieren - klassisch für pochierten Lachs, Spargel",
                  "nl": "Geëmulgeerde eidooier-boter saus met citroen, rijk maar pittig, complementeert delicate vis zonder te maskeren - klassiek voor gepocheerde zalm, asperges"
        },
        {
                  "en": "Tomato-based",
                  "es": "A base de tomate",
                  "de": "Tomatenbasiert",
                  "nl": "Tomaat-gebaseerd"
        },
        {
                  "en": "Stock reduction",
                  "es": "Reducción de caldo",
                  "de": "Fond-Reduktion",
                  "nl": "Bouillon reductie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Hollandaise: classic French mother sauce, emulsified butter sauce family. Whisk egg yolks with water/lemon juice over gentle heat (bain-marie or double boiler) until thick, ribbon consistency. Gradually whisk in melted clarified butter to form stable emulsion. Season with lemon, cayenne, salt. Result: rich, creamy, buttery with bright acidity. Perfect for: poached salmon, halibut, eggs Benedict. Related: béarnaise (tarragon, shallots), mousseline (with whipped cream). Requires careful temp control.",
                  "es": "Holandesa: salsa madre francesa clásica, familia de salsas de mantequilla emulsionada. Batir yemas de huevo con agua/jugo de limón sobre calor suave (baño maría o caldera doble) hasta espeso, consistencia de cinta. Batir gradualmente mantequilla clarificada derretida para formar emulsión estable. Sazonar con limón, cayena, sal. Resultado: rico, cremoso, mantecoso con acidez brillante. Perfecto para: salmón escalfado, halibut, huevos Benedict. Relacionado: béarnaise (estragón, chalotas), mousseline (con crema batida). Requiere control cuidadoso de temperatura.",
                  "de": "Hollandaise: klassische französische Muttersauce, emulgierte Buttersauce-Familie. Schlage Eigelb mit Wasser/Zitronensaft über sanfter Hitze (Bain-Marie oder Wasserbad) bis dick, Bandkonsistenz. Schlage allmählich geschmolzene geklärte Butter ein um stabile Emulsion zu bilden. Würze mit Zitrone, Cayenne, Salz. Ergebnis: reich, cremig, buttrig mit heller Säure. Perfekt für: pochierten Lachs, Heilbutt, Eier Benedict. Verwandt: Béarnaise (Estragon, Schalotten), Mousseline (mit Schlagsahne). Erfordert sorgfältige Temp-Kontrolle.",
                  "nl": "Hollandaise: klassieke Franse moedersaus, geëmulgeerde boter saus familie. Klop eidooiers met water/citroensap op zachte warmte (bain-marie of dubbele boiler) tot dik, lint consistentie. Klop geleidelijk gesmolten geklaarde boter in om stabiele emulsie te vormen. Kruid met citroen, cayenne, zout. Resultaat: rijk, romig, boterachtig met heldere zuurheid. Perfect voor: gepocheerde zalm, heilbot, eieren Benedict. Gerelateerd: béarnaise (dragon, sjalotten), mousseline (met slagroom). Vereist zorgvuldige temp controle."
        }
      },
      {
        question: {
                  "en": "What is 'chaud-froid' sauce and its application?",
                  "es": "¿Qué es la salsa 'chaud-froid' y su aplicación?",
                  "de": "Was ist 'Chaud-Froid' Sauce und ihre Anwendung?",
                  "nl": "Wat is 'chaud-froid' saus en zijn toepassing?"
        },
        options: [
        {
                  "en": "Tomato sauce",
                  "es": "Salsa de tomate",
                  "de": "Tomatensauce",
                  "nl": "Tomaten saus"
        },
        {
                  "en": "Velouté or béchamel with aspic, coats cold seafood creating glossy finish for buffet presentations, set with gelatin - hot-cold sauce",
                  "es": "Velouté o béchamel con áspic, cubre mariscos fríos creando acabado brillante para presentaciones de buffet, fija con gelatina - salsa caliente-fría",
                  "de": "Velouté oder Béchamel mit Aspik, überzieht kalte Meeresfrüchte schafft glänzendes Finish für Buffet-Präsentationen, mit Gelatine gesetzt - heiß-kalt Sauce",
                  "nl": "Velouté of béchamel met aspic, bedekt koude zeevruchten creërend glanzend finish voor buffet presentaties, gezet met gelatine - warm-koud saus"
        },
        {
                  "en": "Oil-based dressing",
                  "es": "Aderezo a base de aceite",
                  "de": "Ölbasiertes Dressing",
                  "nl": "Olie-gebaseerde dressing"
        },
        {
                  "en": "Hot sauce only",
                  "es": "Solo salsa caliente",
                  "de": "Nur heiße Sauce",
                  "nl": "Alleen warme saus"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Chaud-froid ('hot-cold'): classical French sauce for elaborate cold presentations. Make velouté or béchamel, add gelatin (or aspic), cream. While warm (chaud), coat poached/cooked fish multiple times, refrigerate between coats. Sets when cold (froid) creating smooth, glossy, ivory coating. Decorate with vegetable cutouts, herbs, truffle. Cover with clear aspic. Result: elegant buffet showpiece. Labor-intensive, requires skill. Common in classical catering, competition work. Name: prepared hot, served cold.",
                  "es": "Chaud-froid ('caliente-frío'): salsa francesa clásica para presentaciones frías elaboradas. Hacer velouté o béchamel, añadir gelatina (o áspic), crema. Mientras tibio (chaud), cubrir pescado escalfado/cocido múltiples veces, refrigerar entre capas. Se fija cuando frío (froid) creando capa suave, brillante, marfil. Decorar con recortes de vegetales, hierbas, trufa. Cubrir con áspic claro. Resultado: pieza de exhibición elegante de buffet. Laborioso, requiere habilidad. Común en catering clásico, trabajo de competición. Nombre: preparado caliente, servido frío.",
                  "de": "Chaud-Froid ('heiß-kalt'): klassische französische Sauce für aufwendige kalte Präsentationen. Mache Velouté oder Béchamel, füge Gelatine (oder Aspik), Sahne hinzu. Während warm (chaud), überziehe pochierten/gekochten Fisch mehrfach, kühle zwischen Schichten. Setzt wenn kalt (froid) schafft glatte, glänzende, elfenbeinfarbene Beschichtung. Dekoriere mit Gemüse-Ausschnitten, Kräutern, Trüffel. Bedecke mit klarem Aspik. Ergebnis: elegantes Buffet-Schaustück. Arbeitsintensiv, erfordert Können. Üblich in klassischem Catering, Wettbewerbsarbeit. Name: heiß zubereitet, kalt serviert.",
                  "nl": "Chaud-froid ('warm-koud'): klassieke Franse saus voor uitgebreide koude presentaties. Maak velouté of béchamel, voeg gelatine (of aspic), room toe. Terwijl warm (chaud), bedek gepocheerde/gekookte vis meerdere keren, koel tussen lagen. Zet wanneer koud (froid) creërend gladde, glanzende, ivoor coating. Decoreer met groente uitsnedes, kruiden, truffel. Bedek met heldere aspic. Resultaat: elegant buffet showpiece. Arbeidsintensief, vereist vaardigheid. Gebruikelijk in klassieke catering, competitie werk. Naam: bereid warm, geserveerd koud."
        }
      },
      {
        question: {
                  "en": "What is 'aspic' in seafood presentation?",
                  "es": "¿Qué es 'áspic' en presentación de mariscos?",
                  "de": "Was ist 'Aspik' in Meeresfrüchte-Präsentation?",
                  "nl": "Wat is 'aspic' bij zeevruchten presentatie?"
        },
        options: [
        {
                  "en": "Cream sauce",
                  "es": "Salsa de crema",
                  "de": "Sahnesauce",
                  "nl": "Room saus"
        },
        {
                  "en": "Clear savory jelly from clarified fish stock with gelatin, used to coat/glaze cold seafood, create molded presentations - showcases ingredients suspended in gel",
                  "es": "Gelatina salada clara de caldo de pescado clarificado con gelatina, usada para cubrir/glasear mariscos fríos, crear presentaciones moldeadas - muestra ingredientes suspendidos en gel",
                  "de": "Klare herzhafte Gelee aus geklärtem Fischfond mit Gelatine, verwendet zum Überziehen/Glasieren kalter Meeresfrüchte, Schaffen geformter Präsentationen - zeigt Zutaten in Gel suspendiert",
                  "nl": "Heldere hartige gelei van geklaarde visbouillon met gelatine, gebruikt om koude zeevruchten te bedekken/glaceren, gevormde presentaties te creëren - toont ingrediënten gesuspendeerd in gel"
        },
        {
                  "en": "Butter only",
                  "es": "Solo mantequilla",
                  "de": "Nur Butter",
                  "nl": "Alleen boter"
        },
        {
                  "en": "Tomato sauce",
                  "es": "Salsa de tomate",
                  "de": "Tomatensauce",
                  "nl": "Tomaten saus"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Aspic: classical cold preparation technique. Clarify fish stock (see clarification process), add gelatin, season perfectly (gelatin dulls flavor). Cool until syrupy but liquid. Uses: brush over cold poached fish/shellfish for glossy glaze, line molds with aspic, arrange seafood/vegetables/herbs, pour aspic to suspend ingredients. Chill to set. Unmold for elaborate presentation. Popular for: salmon in aspic, seafood terrines, buffet displays. Requires crystal-clear stock, artistic arrangement. Time-consuming art form.",
                  "es": "Áspic: técnica de preparación fría clásica. Clarificar caldo de pescado (ver proceso de clarificación), añadir gelatina, sazonar perfectamente (gelatina atenúa sabor). Enfriar hasta almibarado pero líquido. Usos: cepillar sobre pescado escalfado frío/mariscos para glaseado brillante, forrar moldes con áspic, organizar mariscos/vegetales/hierbas, verter áspic para suspender ingredientes. Enfriar para fijar. Desmoldar para presentación elaborada. Popular para: salmón en áspic, terrinas de mariscos, exhibiciones de buffet. Requiere caldo cristalino, arreglo artístico. Forma de arte que consume tiempo.",
                  "de": "Aspik: klassische kalte Zubereitungstechnik. Kläre Fischfond (siehe Klärungsprozess), füge Gelatine hinzu, würze perfekt (Gelatine dämpft Geschmack). Kühle bis sirupartig aber flüssig. Verwendung: streiche über kalten pochierten Fisch/Schalentiere für glänzende Glasur, kleide Formen mit Aspik aus, arrangiere Meeresfrüchte/Gemüse/Kräuter, gieße Aspik um Zutaten zu suspendieren. Kühle zum Setzen. Stürze für aufwendige Präsentation. Beliebt für: Lachs in Aspik, Meeresfrüchte-Terrinen, Buffet-Displays. Erfordert kristallklaren Fond, künstlerische Anordnung. Zeitaufwändige Kunstform.",
                  "nl": "Aspic: klassieke koude bereidings techniek. Klaar visbouillon (zie klaring proces), voeg gelatine toe, kruid perfect (gelatine dempt smaak). Koel tot siroop maar vloeibaar. Gebruik: borstel over koude gepocheerde vis/schaaldieren voor glanzend glazuur, bekleed vormen met aspic, rangschik zeevruchten/groenten/kruiden, giet aspic om ingrediënten te suspenderen. Koel om te zetten. Stort voor uitgebreide presentatie. Populair voor: zalm in aspic, zeevruchten terrines, buffet displays. Vereist kristalheldere bouillon, artistieke rangschikking. Tijdrovende kunstvorm."
        }
      },
      {
        question: {
                  "en": "What is 'grenobloise' style and its components?",
                  "es": "¿Qué es el estilo 'grenobloise' y sus componentes?",
                  "de": "Was ist 'Grenobloise' Stil und seine Komponenten?",
                  "nl": "Wat is 'grenobloise' stijl en zijn componenten?"
        },
        options: [
        {
                  "en": "Pan-fried fish with beurre noisette, lemon segments, capers, croutons - Grenoble-style, bright, textured finish",
                  "es": "Pescado frito con beurre noisette, segmentos de limón, alcaparras, crutones - estilo Grenoble, acabado brillante, texturizado",
                  "de": "Gebratener Fisch mit Beurre Noisette, Zitronensegmente, Kapern, Croutons - Grenoble-Stil, helles, texturiertes Finish",
                  "nl": "Gebakken vis met beurre noisette, citroen segmenten, kappertjes, croutons - Grenoble-stijl, helder, getextureerd finish"
        },
        {
                  "en": "Stock reduction",
                  "es": "Reducción de caldo",
                  "de": "Fond-Reduktion",
                  "nl": "Bouillon reductie"
        },
        {
                  "en": "Tomato sauce",
                  "es": "Salsa de tomate",
                  "de": "Tomatensauce",
                  "nl": "Tomaten saus"
        },
        {
                  "en": "Cream sauce",
                  "es": "Salsa de crema",
                  "de": "Sahnesauce",
                  "nl": "Room saus"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Grenobloise (Grenoble-style): classic French preparation. Pan-fry fish (sole, skate, trout) meunière style. Remove fish. Make beurre noisette in same pan. Add: peeled lemon segments (supremes - no membrane), capers, small croutons, fresh parsley. Pour over fish. Result: rich brown butter, bright citrus, briny capers, crunchy croutons - textural contrast, multiple flavors. Named after Grenoble, France. Simple but elegant. The key: supreme the lemon properly (no pith, membrane).",
                  "es": "Grenobloise (estilo Grenoble): preparación francesa clásica. Freír pescado (lenguado, raya, trucha) estilo meunière. Retirar pescado. Hacer beurre noisette en misma sartén. Añadir: segmentos de limón pelados (supremos - sin membrana), alcaparras, crutones pequeños, perejil fresco. Verter sobre pescado. Resultado: mantequilla marrón rica, cítricos brillantes, alcaparras salinas, crutones crujientes - contraste de textura, múltiples sabores. Nombrado por Grenoble, Francia. Simple pero elegante. La clave: supremar el limón correctamente (sin médula, membrana).",
                  "de": "Grenobloise (Grenoble-Stil): klassische französische Zubereitung. Brate Fisch (Seezunge, Rochen, Forelle) Meunière-Stil. Entferne Fisch. Mache Beurre Noisette in gleicher Pfanne. Füge hinzu: geschälte Zitronensegmente (Supremes - keine Membran), Kapern, kleine Croutons, frische Petersilie. Gieße über Fisch. Ergebnis: reiche braune Butter, helle Zitrus, salzige Kapern, knusprige Croutons - texturaler Kontrast, mehrere Aromen. Benannt nach Grenoble, Frankreich. Einfach aber elegant. Der Schlüssel: supreme die Zitrone richtig (kein Mark, Membran).",
                  "nl": "Grenobloise (Grenoble-stijl): klassieke Franse bereiding. Bak vis (tong, rog, forel) meunière stijl. Verwijder vis. Maak beurre noisette in zelfde pan. Voeg toe: geschilde citroen segmenten (supremes - geen membraan), kappertjes, kleine croutons, verse peterselie. Giet over vis. Resultaat: rijke bruine boter, heldere citrus, zilte kappertjes, knapperige croutons - textureel contrast, meerdere smaken. Genoemd naar Grenoble, Frankrijk. Simpel maar elegant. De sleutel: supreme de citroen correct (geen pit, membraan)."
        }
      },
      {
        question: {
                  "en": "What is 'dugléré' style in seafood preparation?",
                  "es": "¿Qué es el estilo 'dugléré' en preparación de mariscos?",
                  "de": "Was ist 'Dugléré' Stil bei Meeresfrüchte-Zubereitung?",
                  "nl": "Wat is 'dugléré' stijl bij zeevruchten bereiding?"
        },
        options: [
        {
                  "en": "Raw preparation",
                  "es": "Preparación cruda",
                  "de": "Rohe Zubereitung",
                  "nl": "Rauwe bereiding"
        },
        {
                  "en": "Grilled fish only",
                  "es": "Solo pescado a la parrilla",
                  "de": "Nur gegrillter Fisch",
                  "nl": "Alleen gegrilde vis"
        },
        {
                  "en": "Fish poached with white wine, tomatoes, shallots, finished with velouté and butter - named after Chef Dugléré, classic French technique",
                  "es": "Pescado escalfado con vino blanco, tomates, chalotas, terminado con velouté y mantequilla - nombrado por Chef Dugléré, técnica francesa clásica",
                  "de": "Fisch pochiert mit Weißwein, Tomaten, Schalotten, mit Velouté und Butter abgeschlossen - benannt nach Chef Dugléré, klassische französische Technik",
                  "nl": "Vis gepocheerd met witte wijn, tomaten, sjalotten, afgewerkt met velouté en boter - genoemd naar Chef Dugléré, klassieke Franse techniek"
        },
        {
                  "en": "Fried fish",
                  "es": "Pescado frito",
                  "de": "Frittierter Fisch",
                  "nl": "Gefrituurde vis"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Sole Dugléré: named after 19th-century Chef Adolphe Dugléré (Café Anglais, Paris). Method: butter baking dish, add chopped shallots, peeled seeded diced tomatoes. Place fish fillets (sole, flounder), season. Add white wine, fish stock. Cover with parchment, bake. Remove fish, reduce cooking liquid, whisk in fish velouté, finish with butter, parsley. Sauce naps fish. Result: elegant, tomato-touched but refined (not tomato-forward), showcases delicate fish. Classic technique demonstrating French finesse.",
                  "es": "Lenguado Dugléré: nombrado por Chef del siglo XIX Adolphe Dugléré (Café Anglais, París). Método: enmantecar plato de hornear, añadir chalotas picadas, tomates pelados sin semillas en cubos. Colocar filetes de pescado (lenguado, platija), sazonar. Añadir vino blanco, caldo de pescado. Cubrir con pergamino, hornear. Retirar pescado, reducir líquido de cocción, batir en velouté de pescado, terminar con mantequilla, perejil. Salsa napa pescado. Resultado: elegante, tocado de tomate pero refinado (no prominente en tomate), muestra pescado delicado. Técnica clásica demostrando fineza francesa.",
                  "de": "Seezunge Dugléré: benannt nach Chef des 19. Jahrhunderts Adolphe Dugléré (Café Anglais, Paris). Methode: buttere Auflaufform, füge gehackte Schalotten, geschälte entkernte gewürfelte Tomaten hinzu. Platziere Fischfilets (Seezunge, Flunder), würze. Füge Weißwein, Fischfond hinzu. Decke mit Pergament, backe. Entferne Fisch, reduziere Kochflüssigkeit, schlage Fisch-Velouté ein, schließe mit Butter, Petersilie ab. Sauce nappt Fisch. Ergebnis: elegant, tomaten-berührt aber raffiniert (nicht tomaten-betont), zeigt zarten Fisch. Klassische Technik demonstriert französische Finesse.",
                  "nl": "Tong Dugléré: genoemd naar 19e-eeuwse Chef Adolphe Dugléré (Café Anglais, Parijs). Methode: boter ovenschaal, voeg gehakte sjalotten toe, geschilde ontzaadde blokjes tomaten. Plaats visfilets (tong, bot), kruid. Voeg witte wijn, visbouillon toe. Bedek met perkament, bak. Verwijder vis, reduceer kookvloeistof, klop vis velouté in, werk af met boter, peterselie. Saus napeert vis. Resultaat: elegant, tomaat-aangeraakt maar verfijnd (niet tomaat-vooruit), toont delicate vis. Klassieke techniek demonstreert Franse finesse."
        }
      },
      {
        question: {
                  "en": "What is 'normande' sauce and its traditional use?",
                  "es": "¿Qué es la salsa 'normande' y su uso tradicional?",
                  "de": "Was ist 'Normande' Sauce und ihre traditionelle Verwendung?",
                  "nl": "Wat is 'normande' saus en zijn traditionele gebruik?"
        },
        options: [
        {
                  "en": "Tomato-based",
                  "es": "A base de tomate",
                  "de": "Tomatenbasiert",
                  "nl": "Tomaat-gebaseerd"
        },
        {
                  "en": "Butter only",
                  "es": "Solo mantequilla",
                  "de": "Nur Butter",
                  "nl": "Alleen boter"
        },
        {
                  "en": "Stock reduction",
                  "es": "Reducción de caldo",
                  "de": "Fond-Reduktion",
                  "nl": "Bouillon reductie"
        },
        {
                  "en": "Fish velouté enriched with cream, mushroom essence, egg yolks, finished with butter - Normandy-style for sole, turbot, elegant fish",
                  "es": "Velouté de pescado enriquecido con crema, esencia de champiñones, yemas de huevo, terminado con mantequilla - estilo Normandía para lenguado, rodaballo, pescado elegante",
                  "de": "Fisch-Velouté angereichert mit Sahne, Pilzessenz, Eigelb, mit Butter abgeschlossen - Normandie-Stil für Seezunge, Steinbutt, eleganter Fisch",
                  "nl": "Vis velouté verrijkt met room, champignon essence, eidooiers, afgewerkt met boter - Normandië-stijl voor tong, tarbot, elegante vis"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Sauce Normande: classical French derivative of fish velouté. Base: fish velouté + fish stock reduction + mushroom cooking liquid (mushroom essence). Enrich with cream and egg yolks (liaison), finish with butter. Result: luxurious, creamy, refined, pale ivory color. Traditional for: Sole Normande (with mussels, shrimp, mushrooms, fried oysters, croutons), turbot, elegant whole fish. Named after Normandy region. Showcases classical sauce technique - multiple enrichments for complex, velvety result.",
                  "es": "Salsa Normande: derivado francés clásico de velouté de pescado. Base: velouté de pescado + reducción de caldo de pescado + líquido de cocción de champiñones (esencia de champiñones). Enriquecer con crema y yemas de huevo (ligazón), terminar con mantequilla. Resultado: lujoso, cremoso, refinado, color marfil pálido. Tradicional para: Lenguado Normande (con mejillones, camarones, champiñones, ostras fritas, crutones), rodaballo, pescado entero elegante. Nombrado por región de Normandía. Muestra técnica de salsa clásica - múltiples enriquecimientos para resultado complejo, aterciopelado.",
                  "de": "Sauce Normande: klassisches französisches Derivat von Fisch-Velouté. Basis: Fisch-Velouté + Fischfond-Reduktion + Pilz-Kochflüssigkeit (Pilzessenz). Bereichere mit Sahne und Eigelb (Liaison), schließe mit Butter ab. Ergebnis: luxuriös, cremig, raffiniert, blasse Elfenbeinfarbe. Traditionell für: Seezunge Normande (mit Muscheln, Garnelen, Pilzen, frittierten Austern, Croutons), Steinbutt, eleganter ganzer Fisch. Benannt nach Normandie-Region. Zeigt klassische Saucen-Technik - mehrere Anreicherungen für komplexes, samtiges Ergebnis.",
                  "nl": "Saus Normande: klassiek Frans afgeleid van vis velouté. Basis: vis velouté + visbouillon reductie + champignon kookvloeistof (champignon essence). Verrijk met room en eidooiers (liaison), werk af met boter. Resultaat: luxueus, romig, verfijnd, bleek ivoor kleur. Traditioneel voor: Tong Normande (met mosselen, garnalen, champignons, gefrituurde oesters, croutons), tarbot, elegante hele vis. Genoemd naar Normandië regio. Toont klassieke saus techniek - meerdere verrijkingen voor complex, fluweelachtig resultaat."
        }
      },
      {
        question: {
                  "en": "What is 'beurre manié' and when is it used?",
                  "es": "¿Qué es 'beurre manié' y cuándo se usa?",
                  "de": "Was ist 'Beurre Manié' und wann wird es verwendet?",
                  "nl": "Wat is 'beurre manié' en wanneer wordt het gebruikt?"
        },
        options: [
        {
                  "en": "Melted butter only",
                  "es": "Solo mantequilla derretida",
                  "de": "Nur geschmolzene Butter",
                  "nl": "Alleen gesmolten boter"
        },
        {
                  "en": "Cream reduction",
                  "es": "Reducción de crema",
                  "de": "Sahne-Reduktion",
                  "nl": "Room reductie"
        },
        {
                  "en": "Equal parts soft butter and flour kneaded together, whisked into simmering liquid for last-minute thickening without raw flour taste",
                  "es": "Partes iguales de mantequilla blanda y harina amasadas juntas, batidas en líquido hirviendo para espesamiento de último minuto sin sabor a harina cruda",
                  "de": "Gleiche Teile weiche Butter und Mehl zusammengeknetet, in köchelnde Flüssigkeit geschlagen für Last-Minute-Verdickung ohne rohen Mehlgeschmack",
                  "nl": "Gelijke delen zachte boter en bloem samen gekneed, geklopt in sudderend vocht voor last-minute verdikking zonder rauw meel smaak"
        },
        {
                  "en": "Flour in water",
                  "es": "Harina en agua",
                  "de": "Mehl in Wasser",
                  "nl": "Meel in water"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Beurre manié ('kneaded butter'): finishing thickener. Mix equal parts soft butter and flour with fork or fingers into smooth paste. To use: whisk small amounts into simmering fish stew, soup, or sauce. Stir until dissolved, simmer 2-3 min to cook flour. Advantage over roux: can add at end without starting sauce from scratch, no raw flour taste (butter coats flour). Uses: adjust too-thin sauces, thicken fish stews (bouillabaisse, matelote), enrich pan sauces. Keep refrigerated, use as needed.",
                  "es": "Beurre manié ('mantequilla amasada'): espesante final. Mezclar partes iguales de mantequilla blanda y harina con tenedor o dedos en pasta suave. Para usar: batir pequeñas cantidades en guiso de pescado hirviendo, sopa o salsa. Revolver hasta disolver, cocinar a fuego lento 2-3 min para cocinar harina. Ventaja sobre roux: puede añadir al final sin comenzar salsa desde cero, sin sabor a harina cruda (mantequilla cubre harina). Usos: ajustar salsas demasiado líquidas, espesar guisos de pescado (bouillabaisse, matelote), enriquecer salsas de sartén. Mantener refrigerado, usar según necesidad.",
                  "de": "Beurre Manié ('geknetete Butter'): Finish-Verdicker. Mische gleiche Teile weiche Butter und Mehl mit Gabel oder Fingern zu glatter Paste. Verwendung: schlage kleine Mengen in köchelnden Fischeintopf, Suppe oder Sauce. Rühre bis aufgelöst, köchle 2-3 Min um Mehl zu kochen. Vorteil gegenüber Roux: kann am Ende hinzufügen ohne Sauce von vorne zu beginnen, kein roher Mehlgeschmack (Butter umhüllt Mehl). Verwendung: passe zu dünne Saucen an, verdicke Fischeintöpfe (Bouillabaisse, Matelote), bereichere Pfannensaucen. Im Kühlschrank aufbewahren, nach Bedarf verwenden.",
                  "nl": "Beurre manié ('geknede boter'): afwerkings verdikker. Mix gelijke delen zachte boter en bloem met vork of vingers tot gladde pasta. Gebruik: klop kleine hoeveelheden in sudderend vis stoofschotel, soep of saus. Roer tot opgelost, sudder 2-3 min om meel te koken. Voordeel boven roux: kan aan eind toevoegen zonder saus vanaf begin te starten, geen rauw meel smaak (boter bedekt meel). Gebruik: pas te dunne sauzen aan, verdik vis stoofschotels (bouillabaisse, matelote), verrijk pan sauzen. Koel bewaren, gebruik naar behoefte."
        }
      },
      {
        question: {
                  "en": "What is 'liaison' in sauce finishing?",
                  "es": "¿Qué es 'ligazón' en terminación de salsas?",
                  "de": "Was ist 'Liaison' beim Saucen-Finishing?",
                  "nl": "Wat is 'liaison' bij saus afwerking?"
        },
        options: [
        {
                  "en": "Flour only",
                  "es": "Solo harina",
                  "de": "Nur Mehl",
                  "nl": "Alleen meel"
        },
        {
                  "en": "Butter chunks",
                  "es": "Trozos de mantequilla",
                  "de": "Butterstücke",
                  "nl": "Boter stukken"
        },
        {
                  "en": "Stock reduction",
                  "es": "Reducción de caldo",
                  "de": "Fond-Reduktion",
                  "nl": "Bouillon reductie"
        },
        {
                  "en": "Egg yolk and cream mixture whisked into hot sauce for enrichment and silky finish, must not boil or will curdle - final thickening and enriching",
                  "es": "Mezcla de yema de huevo y crema batida en salsa caliente para enriquecimiento y acabado sedoso, no debe hervir o se cortará - espesamiento y enriquecimiento final",
                  "de": "Eigelb und Sahne Mischung in heiße Sauce geschlagen für Anreicherung und seidiges Finish, darf nicht kochen oder gerinnt - finale Verdickung und Bereicherung",
                  "nl": "Eidooier en room mengsel geklopt in warme saus voor verrijking en zijdeachtig finish, mag niet koken of zal schiften - finale verdikking en verrijking"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Liaison: classical French finishing technique. Mix egg yolks with heavy cream (ratio: 3 yolks per 1 cup cream). Temper: ladle hot sauce into liaison while whisking (raises temp gradually). Pour liaison back into sauce pot while stirring. Heat gently to 160-180°F (71-82°C) - DO NOT BOIL or eggs scramble. Result: velvety, enriched, slightly thickened, luxurious. Used in: Sauce Normande, Poulette, Allemande, bisques. Adds richness, smoothness, elegant finish.",
                  "es": "Ligazón: técnica francesa clásica de terminación. Mezclar yemas de huevo con crema espesa (proporción: 3 yemas por 1 taza de crema). Templar: servir salsa caliente en ligazón mientras bate (sube temperatura gradualmente). Verter ligazón de vuelta en olla de salsa mientras revuelve. Calentar suavemente a 160-180°F (71-82°C) - NO HERVIR o huevos se revuelven. Resultado: aterciopelado, enriquecido, ligeramente espesado, lujoso. Usado en: Salsa Normande, Poulette, Allemande, bisques. Añade riqueza, suavidad, acabado elegante.",
                  "de": "Liaison: klassische französische Finishing-Technik. Mische Eigelb mit Sahne (Verhältnis: 3 Eigelb pro 1 Tasse Sahne). Temperiere: schöpfe heiße Sauce in Liaison während Schlagen (erhöht Temp allmählich). Gieße Liaison zurück in Saucenpfanne während Rühren. Erhitze sanft auf 71-82°C - NICHT KOCHEN oder Eier stocken. Ergebnis: samtig, angereichert, leicht verdickt, luxuriös. Verwendet in: Sauce Normande, Poulette, Allemande, Bisques. Fügt Fülle, Geschmeidigkeit, elegantes Finish hinzu.",
                  "nl": "Liaison: klassieke Franse afwerkings techniek. Mix eidooiers met slagroom (ratio: 3 eidooiers per 1 kopje room). Tempereer: schep warme saus in liaison tijdens kloppen (verhoogt temp geleidelijk). Giet liaison terug in saus pan tijdens roeren. Verhit zachtjes tot 71-82°C - NIET KOKEN of eieren stollen. Resultaat: fluweelachtig, verrijkt, licht verdikt, luxueus. Gebruikt in: Saus Normande, Poulette, Allemande, bisques. Voegt rijkdom, gladheid, elegant finish toe."
        }
      },
      {
        question: {
                  "en": "What is 'compound butter' for seafood and examples?",
                  "es": "¿Qué es 'mantequilla compuesta' para mariscos y ejemplos?",
                  "de": "Was ist 'zusammengesetzte Butter' für Meeresfrüchte und Beispiele?",
                  "nl": "Wat is 'samengestelde boter' voor zeevruchten en voorbeelden?"
        },
        options: [
        {
                  "en": "Plain melted butter",
                  "es": "Mantequilla derretida simple",
                  "de": "Einfache geschmolzene Butter",
                  "nl": "Gewoon gesmolten boter"
        },
        {
                  "en": "Butter with flour",
                  "es": "Mantequilla con harina",
                  "de": "Butter mit Mehl",
                  "nl": "Boter met bloem"
        },
        {
                  "en": "Clarified butter only",
                  "es": "Solo mantequilla clarificada",
                  "de": "Nur geklärte Butter",
                  "nl": "Alleen geklaarde boter"
        },
        {
                  "en": "Soft butter mixed with flavorings (herbs, shellfish roe, citrus), rolled in cylinder, chilled, sliced as garnish - beurre maître d'hôtel, beurre de homard",
                  "es": "Mantequilla blanda mezclada con saborizantes (hierbas, huevas de mariscos, cítricos), enrollada en cilindro, enfriada, rebanada como guarnición - beurre maître d'hôtel, beurre de homard",
                  "de": "Weiche Butter gemischt mit Aromen (Kräuter, Schalentier-Rogen, Zitrus), in Zylinder gerollt, gekühlt, geschnitten als Garnierung - Beurre Maître d'Hôtel, Beurre de Homard",
                  "nl": "Zachte boter gemengd met smaakmakers (kruiden, schaaldier kuit, citrus), gerold in cilinder, gekoeld, gesneden als garnering - beurre maître d'hôtel, beurre de homard"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Compound butters: flavored butter for finishing fish. Method: soften butter, beat in flavorings, shape into log on plastic wrap, roll tight, refrigerate/freeze. Slice and place on hot fish - melts into instant sauce. Examples: Beurre maître d'hôtel (parsley, lemon, most common), beurre de homard (lobster shells/roe), beurre Bercy (shallots, white wine reduction, parsley), beurre d'escargot (garlic, parsley - also for fish), beurre Colbert (tarragon, meat glaze). Professional, elegant, make-ahead convenience.",
                  "es": "Mantequillas compuestas: mantequilla saborizada para terminar pescado. Método: ablandar mantequilla, batir en saborizantes, dar forma de tronco en envoltura de plástico, enrollar apretado, refrigerar/congelar. Rebanar y colocar en pescado caliente - se derrite en salsa instantánea. Ejemplos: Beurre maître d'hôtel (perejil, limón, más común), beurre de homard (conchas/huevas de langosta), beurre Bercy (chalotas, reducción de vino blanco, perejil), beurre d'escargot (ajo, perejil - también para pescado), beurre Colbert (estragón, glace de carne). Profesional, elegante, conveniencia de preparación anticipada.",
                  "de": "Zusammengesetzte Butter: aromatisierte Butter zum Finishing von Fisch. Methode: erweiche Butter, schlage Aromen ein, forme zu Rolle auf Plastikfolie, rolle fest, kühle/friere. Schneide und platziere auf heißem Fisch - schmilzt zu sofortiger Sauce. Beispiele: Beurre Maître d'Hôtel (Petersilie, Zitrone, am häufigsten), Beurre de Homard (Hummerschalen/Rogen), Beurre Bercy (Schalotten, Weißwein-Reduktion, Petersilie), Beurre d'Escargot (Knoblauch, Petersilie - auch für Fisch), Beurre Colbert (Estragon, Fleischglasur). Professionell, elegant, Make-Ahead-Bequemlichkeit.",
                  "nl": "Samengestelde boters: gearomatiseerde boter voor afwerking van vis. Methode: verwijk boter, klop smaakmakers in, vorm tot rol op plastic folie, rol strak, koel/vries. Snijd en plaats op warme vis - smelt tot instant saus. Voorbeelden: Beurre maître d'hôtel (peterselie, citroen, meest voorkomend), beurre de homard (kreeft schalen/kuit), beurre Bercy (sjalotten, witte wijn reductie, peterselie), beurre d'escargot (knoflook, peterselie - ook voor vis), beurre Colbert (dragon, vlees glazuur). Professioneel, elegant, make-ahead gemak."
        }
      },
      {
        question: {
                  "en": "What is 'mousse' versus 'mousseline' in seafood preparations?",
                  "es": "¿Qué es 'mousse' versus 'mousseline' en preparaciones de mariscos?",
                  "de": "Was ist 'Mousse' versus 'Mousseline' bei Meeresfrüchte-Zubereitungen?",
                  "nl": "Wat is 'mousse' versus 'mousseline' bij zeevruchten bereidingen?"
        },
        options: [
        {
                  "en": "Mousse is sweet only",
                  "es": "Mousse es solo dulce",
                  "de": "Mousse ist nur süß",
                  "nl": "Mousse is alleen zoet"
        },
        {
                  "en": "Mousse uses gelatin for cold preparations (aspic-based); mousseline uses cream/egg whites for hot (poached forcemeat) - different stabilizers",
                  "es": "Mousse usa gelatina para preparaciones frías (a base de áspic); mousseline usa crema/claras de huevo para caliente (relleno escalfado) - estabilizadores diferentes",
                  "de": "Mousse nutzt Gelatine für kalte Zubereitungen (Aspik-basiert); Mousseline nutzt Sahne/Eiweiß für heiß (pochierte Farce) - verschiedene Stabilisatoren",
                  "nl": "Mousse gebruikt gelatine voor koude bereidingen (aspic-gebaseerd); mousseline gebruikt room/eiwitten voor warm (gepocheerde farce) - verschillende stabilisatoren"
        },
        {
                  "en": "No difference",
                  "es": "Sin diferencia",
                  "de": "Kein Unterschied",
                  "nl": "Geen verschil"
        },
        {
                  "en": "Same preparation",
                  "es": "Misma preparación",
                  "de": "Gleiche Zubereitung",
                  "nl": "Zelfde bereiding"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Mousse vs Mousseline - different techniques: MOUSSE: cold preparation. Purée cooked/smoked fish, fold in whipped cream, set with gelatin or aspic. Pipe into molds, chill. Serve cold as appetizer, terrine component. MOUSSELINE: hot preparation (see earlier). Purée raw fish, add egg whites, cream, poach or use as forcemeat for quenelles, paupiettes, stuffing. Key: mousse = cold/gelatin, mousseline = hot/cream-egg. Both light, airy, but different applications, stabilizers.",
                  "es": "Mousse vs Mousseline - técnicas diferentes: MOUSSE: preparación fría. Hacer puré de pescado cocido/ahumado, incorporar crema batida, fijar con gelatina o áspic. Poner en moldes, enfriar. Servir frío como aperitivo, componente de terrina. MOUSSELINE: preparación caliente (ver anterior). Hacer puré de pescado crudo, añadir claras de huevo, crema, escalfar o usar como relleno para quenelles, paupiettes, relleno. Clave: mousse = frío/gelatina, mousseline = caliente/crema-huevo. Ambos ligeros, aireados, pero aplicaciones, estabilizadores diferentes.",
                  "de": "Mousse vs Mousseline - verschiedene Techniken: MOUSSE: kalte Zubereitung. Püriere gekochten/geräucherten Fisch, falte Schlagsahne ein, setze mit Gelatine oder Aspik. Spritze in Formen, kühle. Serviere kalt als Vorspeise, Terrinen-Komponente. MOUSSELINE: heiße Zubereitung (siehe früher). Püriere rohen Fisch, füge Eiweiß, Sahne hinzu, pochiere oder nutze als Farce für Quenelles, Paupiettes, Füllung. Schlüssel: Mousse = kalt/Gelatine, Mousseline = heiß/Sahne-Ei. Beide leicht, luftig, aber verschiedene Anwendungen, Stabilisatoren.",
                  "nl": "Mousse vs Mousseline - verschillende technieken: MOUSSE: koude bereiding. Pureer gekookte/gerookte vis, vouw slagroom in, zet met gelatine of aspic. Spuit in vormen, koel. Serveer koud als voorgerecht, terrine component. MOUSSELINE: warme bereiding (zie eerder). Pureer rauwe vis, voeg eiwitten, room toe, pocheer of gebruik als farce voor quenelles, paupiettes, vulling. Sleutel: mousse = koud/gelatine, mousseline = warm/room-ei. Beide licht, luchtig, maar verschillende toepassingen, stabilisatoren."
        }
      },
      {
        question: {
                  "en": "What is 'terrine' in seafood context?",
                  "es": "¿Qué es 'terrina' en contexto de mariscos?",
                  "de": "Was ist 'Terrine' im Meeresfrüchte-Kontext?",
                  "nl": "Wat is 'terrine' in zeevruchten context?"
        },
        options: [
        {
                  "en": "Layered seafood forcemeat/mousseline with whole pieces (scallops, shrimp, fish), baked in mold, served cold sliced - shows layers when cut",
                  "es": "Relleno de mariscos en capas/mousseline con piezas enteras (vieiras, camarones, pescado), horneado en molde, servido frío rebanado - muestra capas al cortar",
                  "de": "Geschichtete Meeresfrüchte-Farce/Mousseline mit ganzen Stücken (Jakobsmuscheln, Garnelen, Fisch), in Form gebacken, kalt geschnitten serviert - zeigt Schichten beim Schneiden",
                  "nl": "Gelaagde zeevruchten farce/mousseline met hele stukken (coquilles, garnalen, vis), gebakken in vorm, koud gesneden geserveerd - toont lagen bij snijden"
        },
        {
                  "en": "Grilled fish",
                  "es": "Pescado a la parrilla",
                  "de": "Gegrillter Fisch",
                  "nl": "Gegrilde vis"
        },
        {
                  "en": "Raw fish only",
                  "es": "Solo pescado crudo",
                  "de": "Nur roher Fisch",
                  "nl": "Alleen rauwe vis"
        },
        {
                  "en": "Fried seafood",
                  "es": "Mariscos fritos",
                  "de": "Frittierte Meeresfrüchte",
                  "nl": "Gefrituurde zeevruchten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Seafood terrine: elegant cold preparation. Line terrine mold with plastic. Layer mousseline (salmon, scallop, or mixed seafood), whole cooked/marinated seafood pieces (shrimp, lobster, scallops), herbs, vegetable strips for color. Alternate layers. Cover with foil, bake in water bath (bain-marie) until set. Cool, weight overnight, unmold, slice. Serve cold with sauce (beurre blanc, herb mayonnaise). Shows beautiful layers. Requires skill in mousseline preparation, artistic layering. Classic appetizer, buffet piece.",
                  "es": "Terrina de mariscos: preparación fría elegante. Forrar molde de terrina con plástico. Capas de mousseline (salmón, vieira o mariscos mixtos), piezas enteras de mariscos cocidos/marinados (camarones, langosta, vieiras), hierbas, tiras de vegetales para color. Alternar capas. Cubrir con papel aluminio, hornear en baño de agua (baño maría) hasta que se fije. Enfriar, pesar durante la noche, desmoldar, rebanar. Servir frío con salsa (beurre blanc, mayonesa de hierbas). Muestra hermosas capas. Requiere habilidad en preparación de mousseline, capas artísticas. Aperitivo clásico, pieza de buffet.",
                  "de": "Meeresfrüchte-Terrine: elegante kalte Zubereitung. Kleide Terrinen-Form mit Plastik aus. Schichte Mousseline (Lachs, Jakobsmuschel oder gemischte Meeresfrüchte), ganze gekochte/marinierte Meeresfrüchte-Stücke (Garnelen, Hummer, Jakobsmuscheln), Kräuter, Gemüsestreifen für Farbe. Alterniere Schichten. Decke mit Folie ab, backe im Wasserbad (Bain-Marie) bis gesetzt. Kühle, beschwere über Nacht, stürze, schneide. Serviere kalt mit Sauce (Beurre Blanc, Kräuter-Mayonnaise). Zeigt schöne Schichten. Erfordert Können in Mousseline-Zubereitung, künstlerischem Schichten. Klassische Vorspeise, Buffet-Stück.",
                  "nl": "Zeevruchten terrine: elegante koude bereiding. Bekleed terrine vorm met plastic. Laag mousseline (zalm, coquille of gemengde zeevruchten), hele gekookte/gemarineerde zeevruchten stukken (garnalen, kreeft, coquilles), kruiden, groente strips voor kleur. Alterneer lagen. Bedek met folie, bak in waterbad (bain-marie) tot gezet. Koel, weeg overnight, stort, snijd. Serveer koud met saus (beurre blanc, kruiden mayonaise). Toont mooie lagen. Vereist vaardigheid in mousseline bereiding, artistieke laag. Klassiek voorgerecht, buffet stuk."
        }
      },
      {
        question: {
                  "en": "What is 'quenelle' shaping technique and its uses?",
                  "es": "¿Qué es la técnica de formar 'quenelle' y sus usos?",
                  "de": "Was ist 'Quenelle' Formtechnik und ihre Verwendungen?",
                  "nl": "Wat is 'quenelle' vorm techniek en zijn gebruik?"
        },
        options: [
        {
                  "en": "Round balls only",
                  "es": "Solo bolas redondas",
                  "de": "Nur runde Bälle",
                  "nl": "Alleen ronde ballen"
        },
        {
                  "en": "Shaping mousseline/forcemeat with two spoons into elegant three-sided oval, poached in liquid or used as plating garnish - classic French presentation",
                  "es": "Dar forma a mousseline/relleno con dos cucharas en óvalo elegante de tres lados, escalfado en líquido o usado como guarnición de plato - presentación francesa clásica",
                  "de": "Mousseline/Farce mit zwei Löffeln zu elegantem dreiseitigem Oval formen, in Flüssigkeit pochiert oder als Plattier-Garnierung verwendet - klassische französische Präsentation",
                  "nl": "Mousseline/farce vormen met twee lepels tot elegante driezijdige ovaal, gepocheerd in vocht of gebruikt als bord garnering - klassieke Franse presentatie"
        },
        {
                  "en": "Flat shapes",
                  "es": "Formas planas",
                  "de": "Flache Formen",
                  "nl": "Platte vormen"
        },
        {
                  "en": "Cube cutting",
                  "es": "Corte en cubos",
                  "de": "Würfel-Schneiden",
                  "nl": "Kubus snijden"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Quenelle: elegant shaping technique. Uses: 1) Poached dumplings - scoop mousseline with spoon, shape with second spoon (pass between spoons 3-4 times), slide into simmering court bouillon/stock. Float to surface when done. Classic French dish. 2) Plating - shape soft ingredients (mousse, ice cream, mashed potatoes) into graceful oval for restaurant presentation. Technique requires practice - two spoons, smooth motion, clean shape. Shows technical skill, elevates presentation from rustic to refined.",
                  "es": "Quenelle: técnica de formado elegante. Usos: 1) Albóndigas escalfadas - sacar mousseline con cuchara, dar forma con segunda cuchara (pasar entre cucharas 3-4 veces), deslizar en court bouillon/caldo hirviendo. Flotar en superficie cuando esté listo. Plato francés clásico. 2) Emplatado - dar forma a ingredientes suaves (mousse, helado, puré de papas) en óvalo elegante para presentación de restaurante. Técnica requiere práctica - dos cucharas, movimiento suave, forma limpia. Muestra habilidad técnica, eleva presentación de rústica a refinada.",
                  "de": "Quenelle: elegante Formtechnik. Verwendung: 1) Pochierte Klöße - schöpfe Mousseline mit Löffel, forme mit zweitem Löffel (gebe zwischen Löffeln 3-4 mal), gleite in köchelndes Court Bouillon/Fond. Schwimme an Oberfläche wenn fertig. Klassisches französisches Gericht. 2) Plattieren - forme weiche Zutaten (Mousse, Eis, Kartoffelpüree) zu anmutigem Oval für Restaurant-Präsentation. Technik erfordert Übung - zwei Löffel, glatte Bewegung, saubere Form. Zeigt technisches Können, hebt Präsentation von rustikal zu raffiniert.",
                  "nl": "Quenelle: elegante vorm techniek. Gebruik: 1) Gepocheerde dumplings - schep mousseline met lepel, vorm met tweede lepel (geef tussen lepels 3-4 keer), glijd in sudderend court bouillon/bouillon. Drijf naar oppervlak wanneer klaar. Klassiek Frans gerecht. 2) Plateren - vorm zachte ingrediënten (mousse, ijs, aardappelpuree) tot sierlijke ovaal voor restaurant presentatie. Techniek vereist oefening - twee lepels, gladde beweging, schone vorm. Toont technische vaardigheid, verheft presentatie van rustiek tot verfijnd."
        }
      },
      {
        question: {
                  "en": "What is 'timbale' in seafood presentations?",
                  "es": "¿Qué es 'timbal' en presentaciones de mariscos?",
                  "de": "Was ist 'Timbale' in Meeresfrüchte-Präsentationen?",
                  "nl": "Wat is 'timbale' bij zeevruchten presentaties?"
        },
        options: [
        {
                  "en": "Molded seafood preparation in drum-shaped mold - can be mousseline-based or layered with rice, fish, sauce, unmolded for elegant presentation",
                  "es": "Preparación de mariscos moldeada en molde en forma de tambor - puede ser a base de mousseline o en capas con arroz, pescado, salsa, desmoldada para presentación elegante",
                  "de": "Geformte Meeresfrüchte-Zubereitung in trommelförmiger Form - kann Mousseline-basiert oder geschichtet mit Reis, Fisch, Sauce sein, gestürzt für elegante Präsentation",
                  "nl": "Gevormde zeevruchten bereiding in trommel-vormige vorm - kan mousseline-gebaseerd of gelaagd zijn met rijst, vis, saus, gestort voor elegante presentatie"
        },
        {
                  "en": "Fried only",
                  "es": "Solo frito",
                  "de": "Nur frittiert",
                  "nl": "Alleen gefrituurd"
        },
        {
                  "en": "Raw preparation",
                  "es": "Preparación cruda",
                  "de": "Rohe Zubereitung",
                  "nl": "Rauwe bereiding"
        },
        {
                  "en": "Grilled fish",
                  "es": "Pescado a la parrilla",
                  "de": "Gegrillter Fisch",
                  "nl": "Gegrilde vis"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Timbale ('drum'): molded preparation. Butter drum-shaped mold (or ring mold, ramekin). Options: 1) Fill with seafood mousseline, bake in water bath. 2) Layer: rice pilaf, sautéed seafood (shrimp, scallops), sauce, repeat. Press gently. 3) Mix cooked seafood with velouté/béchamel, vegetables. Bake until set. Unmold onto plate, sauce around. Result: tall, cylindrical, elegant individual portion. Classical technique for formal dinners. Modern: use ring mold, build layers on plate. Shows technical skill.",
                  "es": "Timbal ('tambor'): preparación moldeada. Enmantecar molde en forma de tambor (o molde de anillo, ramequín). Opciones: 1) Llenar con mousseline de mariscos, hornear en baño de agua. 2) Capas: pilaf de arroz, mariscos salteados (camarones, vieiras), salsa, repetir. Presionar suavemente. 3) Mezclar mariscos cocidos con velouté/béchamel, vegetales. Hornear hasta que se fije. Desmoldar en plato, salsa alrededor. Resultado: alto, cilíndrico, porción individual elegante. Técnica clásica para cenas formales. Moderno: usar molde de anillo, construir capas en plato. Muestra habilidad técnica.",
                  "de": "Timbale ('Trommel'): geformte Zubereitung. Buttere trommelförmige Form (oder Ringform, Förmchen). Optionen: 1) Fülle mit Meeresfrüchte-Mousseline, backe im Wasserbad. 2) Schichte: Reis-Pilaf, sautierte Meeresfrüchte (Garnelen, Jakobsmuscheln), Sauce, wiederhole. Drücke sanft. 3) Mische gekochte Meeresfrüchte mit Velouté/Béchamel, Gemüse. Backe bis gesetzt. Stürze auf Teller, Sauce herum. Ergebnis: hoch, zylindrisch, elegante Einzelportion. Klassische Technik für formelle Dinner. Modern: nutze Ringform, baue Schichten auf Teller. Zeigt technisches Können.",
                  "nl": "Timbale ('trommel'): gevormde bereiding. Boter trommel-vormige vorm (of ring vorm, ramequin). Opties: 1) Vul met zeevruchten mousseline, bak in waterbad. 2) Laag: rijst pilaf, gesauteerde zeevruchten (garnalen, coquilles), saus, herhaal. Druk zachtjes. 3) Mix gekookte zeevruchten met velouté/béchamel, groenten. Bak tot gezet. Stort op bord, saus eromheen. Resultaat: hoog, cilindrisch, elegante individuele portie. Klassieke techniek voor formele diners. Modern: gebruik ring vorm, bouw lagen op bord. Toont technische vaardigheid."
        }
      },
      {
        question: {
                  "en": "What is 'fumet reduction' technique and its uses?",
                  "es": "¿Qué es la técnica de 'reducción de fumet' y sus usos?",
                  "de": "Was ist 'Fumet-Reduktion' Technik und ihre Verwendungen?",
                  "nl": "Wat is 'fumet reductie' techniek en zijn gebruik?"
        },
        options: [
        {
                  "en": "Boiling water",
                  "es": "Agua hirviendo",
                  "de": "Kochendes Wasser",
                  "nl": "Kokend water"
        },
        {
                  "en": "Simmering fumet to concentrate flavors by evaporating water, creating intense seafood essence for sauces - foundation for professional sauce work",
                  "es": "Cocinar fumet a fuego lento para concentrar sabores evaporando agua, creando esencia intensa de mariscos para salsas - fundamento para trabajo profesional de salsas",
                  "de": "Fumet köcheln um Aromen durch Verdampfen von Wasser zu konzentrieren, intensive Meeresfrüchte-Essenz für Saucen schaffen - Grundlage für professionelle Saucenarbeit",
                  "nl": "Fumet sudderen om smaken te concentreren door water te verdampen, intense zeevruchten essence creërend voor sauzen - basis voor professioneel saus werk"
        },
        {
                  "en": "Adding cream",
                  "es": "Añadir crema",
                  "de": "Sahne hinzufügen",
                  "nl": "Room toevoegen"
        },
        {
                  "en": "Thickening with flour",
                  "es": "Espesar con harina",
                  "de": "Mit Mehl andicken",
                  "nl": "Verdikken met meel"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Fumet reduction: fundamental sauce technique. Simmer fumet in wide pan (increases surface area, faster evaporation). Reduce by 50-75% depending on intensity needed. As water evaporates, flavors concentrate. Uses: 1) Base for velouté-based sauces (add to velouté for vin blanc, Normande). 2) Deglaze pans after sautéing fish. 3) Add to beurre blanc for depth. 4) Fortify cream sauces. 5) Poaching liquid. Monitor closely - easy to over-reduce (too salty/intense). Professional kitchens keep reduced fumet on hand.",
                  "es": "Reducción de fumet: técnica fundamental de salsa. Cocinar fumet a fuego lento en sartén ancha (aumenta área de superficie, evaporación más rápida). Reducir en 50-75% dependiendo de intensidad necesitada. A medida que agua se evapora, sabores se concentran. Usos: 1) Base para salsas a base de velouté (añadir a velouté para vin blanc, Normande). 2) Desglasar sartenes después de saltear pescado. 3) Añadir a beurre blanc para profundidad. 4) Fortificar salsas de crema. 5) Líquido de escalfado. Monitorear de cerca - fácil de sobre-reducir (demasiado salado/intenso). Cocinas profesionales mantienen fumet reducido a mano.",
                  "de": "Fumet-Reduktion: fundamentale Saucen-Technik. Köchle Fumet in breiter Pfanne (erhöht Oberfläche, schnellere Verdunstung). Reduziere um 50-75% je nach benötigter Intensität. Wenn Wasser verdunstet, konzentrieren sich Aromen. Verwendung: 1) Basis für Velouté-basierte Saucen (füge zu Velouté für Vin Blanc, Normande hinzu). 2) Deglaciere Pfannen nach Sautieren von Fisch. 3) Füge zu Beurre Blanc für Tiefe hinzu. 4) Verstärke Sahnesaucen. 5) Pochierflüssigkeit. Überwache eng - leicht zu über-reduzieren (zu salzig/intensiv). Professionelle Küchen halten reduzierten Fumet bereit.",
                  "nl": "Fumet reductie: fundamentele saus techniek. Sudder fumet in brede pan (vergroot oppervlakte, snellere verdamping). Reduceer met 50-75% afhankelijk van benodigde intensiteit. Als water verdampt, concentreren smaken. Gebruik: 1) Basis voor velouté-gebaseerde sauzen (voeg toe aan velouté voor vin blanc, Normande). 2) Deglaceer pannen na sauteren van vis. 3) Voeg toe aan beurre blanc voor diepte. 4) Versterk room sauzen. 5) Pocheer vloeistof. Monitor nauw - makkelijk om over te reduceren (te zout/intens). Professionele keukens houden gereduceerde fumet bij de hand."
        }
      },
      {
        question: {
                  "en": "What is 'essence' in seafood cooking?",
                  "es": "¿Qué es 'esencia' en cocina de mariscos?",
                  "de": "Was ist 'Essenz' beim Meeresfrüchte-Kochen?",
                  "nl": "Wat is 'essence' bij zeevruchten koken?"
        },
        options: [
        {
                  "en": "Oil-based",
                  "es": "A base de aceite",
                  "de": "Ölbasiert",
                  "nl": "Olie-gebaseerd"
        },
        {
                  "en": "Ultra-concentrated cooking liquid from specific ingredient (mushroom essence, shellfish essence) - add spoonful for intense flavor without volume",
                  "es": "Líquido de cocción ultra-concentrado de ingrediente específico (esencia de champiñones, esencia de mariscos) - añadir cucharada para sabor intenso sin volumen",
                  "de": "Ultra-konzentrierte Kochflüssigkeit von spezifischer Zutat (Pilzessenz, Schalentier-Essenz) - füge Löffel für intensiven Geschmack ohne Volumen hinzu",
                  "nl": "Ultra-geconcentreerde kookvloeistof van specifiek ingrediënt (champignon essence, schaaldier essence) - voeg lepel toe voor intense smaak zonder volume"
        },
        {
                  "en": "Cream only",
                  "es": "Solo crema",
                  "de": "Nur Sahne",
                  "nl": "Alleen room"
        },
        {
                  "en": "Plain water",
                  "es": "Agua simple",
                  "de": "Einfaches Wasser",
                  "nl": "Gewoon water"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Essence: hyper-concentrated flavor extract. Common types: MUSHROOM ESSENCE: simmer chopped mushroom stems, trimmings in water, reduce by 90%. Intense mushroom flavor for Normande sauce. SHELLFISH ESSENCE: crush shells (lobster, crab, shrimp), simmer in water/wine, strain, reduce. Concentrated shellfish flavor. FISH ESSENCE: reduce fumet to syrup. Uses: add by spoonful to sauces for flavor burst without thinning. Professional technique for layered, complex sauces. Store refrigerated or freeze. Little goes long way.",
                  "es": "Esencia: extracto de sabor hiper-concentrado. Tipos comunes: ESENCIA DE CHAMPIÑONES: cocinar a fuego lento tallos de champiñones picados, recortes en agua, reducir en 90%. Sabor intenso de champiñones para salsa Normande. ESENCIA DE MARISCOS: triturar conchas (langosta, cangrejo, camarones), cocinar a fuego lento en agua/vino, colar, reducir. Sabor concentrado de mariscos. ESENCIA DE PESCADO: reducir fumet a almíbar. Usos: añadir por cucharada a salsas para explosión de sabor sin diluir. Técnica profesional para salsas en capas, complejas. Almacenar refrigerado o congelar. Poco rinde mucho.",
                  "de": "Essenz: hyper-konzentrierter Geschmacksextrakt. Häufige Arten: PILZESSENZ: köchle gehackte Pilzstiele, Abschnitte in Wasser, reduziere um 90%. Intensiver Pilzgeschmack für Normande Sauce. SCHALENTIER-ESSENZ: zerdrücke Schalen (Hummer, Krabbe, Garnelen), köchle in Wasser/Wein, siebe, reduziere. Konzentrierter Schalentier-Geschmack. FISCH-ESSENZ: reduziere Fumet zu Sirup. Verwendung: füge löffelweise zu Saucen für Geschmacksburst ohne Verdünnung hinzu. Professionelle Technik für geschichtete, komplexe Saucen. Im Kühlschrank lagern oder einfrieren. Wenig reicht weit.",
                  "nl": "Essence: hyper-geconcentreerd smaak extract. Veelvoorkomende types: CHAMPIGNON ESSENCE: sudder gehakte champignon stelen, restjes in water, reduceer met 90%. Intense champignon smaak voor Normande saus. SCHAALDIER ESSENCE: plet schalen (kreeft, krab, garnalen), sudder in water/wijn, zeef, reduceer. Geconcentreerde schaaldier smaak. VIS ESSENCE: reduceer fumet tot siroop. Gebruik: voeg per lepel toe aan sauzen voor smaak burst zonder verdunning. Professionele techniek voor gelaagde, complexe sauzen. Koel bewaren of vriezen. Weinig gaat ver."
        }
      },
      {
        question: {
                  "en": "What is 'monter au beurre' finishing technique?",
                  "es": "¿Qué es la técnica de terminación 'monter au beurre'?",
                  "de": "Was ist 'Monter au Beurre' Finishing-Technik?",
                  "nl": "Wat is 'monter au beurre' afwerkings techniek?"
        },
        options: [
        {
                  "en": "Whisking cold butter into finished sauce off heat to enrich, smooth, add shine - 'mounting' with butter, final touch for professional sauces",
                  "es": "Batir mantequilla fría en salsa terminada fuera del fuego para enriquecer, suavizar, añadir brillo - 'montar' con mantequilla, toque final para salsas profesionales",
                  "de": "Kalte Butter in fertige Sauce außerhalb der Hitze schlagen um zu bereichern, glätten, Glanz hinzuzufügen - 'Montieren' mit Butter, letzter Schliff für professionelle Saucen",
                  "nl": "Koude boter in afgewerkte saus buiten warmte kloppen om te verrijken, glad maken, glans toevoegen - 'monteren' met boter, laatste toets voor professionele sauzen"
        },
        {
                  "en": "Adding flour",
                  "es": "Añadir harina",
                  "de": "Mehl hinzufügen",
                  "nl": "Meel toevoegen"
        },
        {
                  "en": "Boiling sauce",
                  "es": "Hervir salsa",
                  "de": "Sauce kochen",
                  "nl": "Saus koken"
        },
        {
                  "en": "Melting butter only",
                  "es": "Solo derretir mantequilla",
                  "de": "Nur Butter schmelzen",
                  "nl": "Alleen boter smelten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Monter au beurre ('mount with butter'): final enrichment technique. Method: finish sauce (reduced stock, pan sauce, beurre blanc). Remove from heat. Whisk in cold butter cubes, few at a time, until emulsified and melted. DO NOT reheat or butter separates. Result: glossy, smooth, enriched, velvety texture, rich flavor. Used for: pan sauces, reductions, beurre blanc adjustment, finishing velouté. Professional signature move - elevates sauce from good to restaurant-quality. Shows mastery of emulsification.",
                  "es": "Monter au beurre ('montar con mantequilla'): técnica de enriquecimiento final. Método: terminar salsa (caldo reducido, salsa de sartén, beurre blanc). Retirar del fuego. Batir cubos de mantequilla fría, pocos a la vez, hasta emulsionar y derretir. NO recalentar o mantequilla se separa. Resultado: brillante, suave, enriquecido, textura aterciopelada, sabor rico. Usado para: salsas de sartén, reducciones, ajuste de beurre blanc, terminación de velouté. Movimiento distintivo profesional - eleva salsa de buena a calidad de restaurante. Muestra maestría de emulsificación.",
                  "de": "Monter au Beurre ('mit Butter montieren'): finale Anreicherungs-Technik. Methode: beende Sauce (reduzierter Fond, Pfannensauce, Beurre Blanc). Entferne von Hitze. Schlage kalte Butterwürfel ein, wenige auf einmal, bis emulgiert und geschmolzen. NICHT wiedererhitzen oder Butter trennt sich. Ergebnis: glänzend, glatt, angereichert, samtige Textur, reicher Geschmack. Verwendet für: Pfannensaucen, Reduktionen, Beurre Blanc Anpassung, Velouté beenden. Professioneller Signature-Move - hebt Sauce von gut zu Restaurant-Qualität. Zeigt Meisterschaft der Emulgierung.",
                  "nl": "Monter au beurre ('monteren met boter'): finale verrijkings techniek. Methode: maak saus af (gereduceerde bouillon, pan saus, beurre blanc). Verwijder van warmte. Klop koude boter blokjes in, paar tegelijk, tot geëmulgeerd en gesmolten. NIET opnieuw verhitten of boter scheidt. Resultaat: glanzend, glad, verrijkt, fluweelachtige textuur, rijke smaak. Gebruikt voor: pan sauzen, reducties, beurre blanc aanpassing, velouté afwerken. Professionele handtekening move - verheft saus van goed naar restaurant-kwaliteit. Toont meesterschap van emulgering."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  }
})();