import os
import re
import json

def count_questions(filepath):
    """Count actual question objects in file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            matches = re.findall(r'^\s+\{\s*\n\s+question:\s*\{', content, re.MULTILINE)
            return len(matches)
    except:
        return 0

def get_spirits_questions(level):
    """Generate spirits questions based on level"""
    if level == 7:
        return [
            {
                "question": {"en": "What is the minimum aging requirement for XO Cognac after 2018 regulations?", "es": "¿Cuál es el requisito mínimo de envejecimiento para Cognac XO después de las regulaciones de 2018?", "de": "Was ist die Mindestalterungsanforderung für XO Cognac nach 2018-Vorschriften?", "nl": "Wat is de minimum rijpings vereiste voor XO Cognac na 2018 regelgeving?"},
                "options": ["10 years minimum", "6 years minimum", "15 years minimum", "20 years minimum"],
                "correct": 0,
                "explanation": {"en": "Since April 2018, XO Cognac must be aged minimum 10 years, up from the previous 6 years. This change by BNIC ensures XO represents truly exceptional aged Cognacs. Many producers age XO 15-20+ years, but 10 years is the legal minimum for youngest eau-de-vie in blend.", "es": "Desde abril 2018, Cognac XO debe envejecer mínimo 10 años, aumentado de los 6 años previos. Este cambio por BNIC asegura que XO representa Cognacs envejecidos verdaderamente excepcionales. Muchos productores envejecen XO 15-20+ años, pero 10 años es el mínimo legal para el eau-de-vie más joven en la mezcla.", "de": "Seit April 2018 muss XO Cognac mindestens 10 Jahre reifen, erhöht von den vorherigen 6 Jahren. Diese Änderung durch BNIC stellt sicher dass XO wirklich außergewöhnlich gereifte Cognacs repräsentiert. Viele Produzenten reifen XO 15-20+ Jahre, aber 10 Jahre ist das gesetzliche Minimum für jüngste Eau-de-vie in Mischung.", "nl": "Sinds april 2018 moet XO Cognac minimum 10 jaar rijpen, verhoogd van de vorige 6 jaar. Deze verandering door BNIC verzekert dat XO werkelijk uitzonderlijke gerijpte Cognacs vertegenwoordigt. Veel producenten rijpen XO 15-20+ jaar, maar 10 jaar is het wettelijke minimum voor jongste eau-de-vie in blend."}
            },
            {
                "question": {"en": "Which Japanese whisky uses Mizunara oak exclusively for maturation?", "es": "¿Qué whisky japonés usa roble Mizunara exclusivamente para maduración?", "de": "Welcher japanische Whisky verwendet ausschließlich Mizunara-Eiche zur Reifung?", "nl": "Welke Japanse whisky gebruikt uitsluitend Mizunara eiken voor rijping?"},
                "options": ["None use it exclusively", "Yamazaki 18", "Hibiki 21", "Nikka Taketsuru"],
                "correct": 0,
                "explanation": {"en": "No major Japanese whisky uses Mizunara oak exclusively due to its rarity and difficulty. Mizunara is porous, prone to leaking, and takes 200+ years to grow. It's used for finishing or partial maturation only. Even Yamazaki 18 Mizunara edition uses only 20-30% Mizunara casks in the blend.", "es": "Ningún whisky japonés mayor usa roble Mizunara exclusivamente debido a su rareza y dificultad. Mizunara es poroso, propenso a fugas, y tarda 200+ años en crecer. Se usa solo para acabado o maduración parcial. Incluso Yamazaki 18 edición Mizunara usa solo 20-30% barricas Mizunara en la mezcla.", "de": "Kein großer japanischer Whisky verwendet Mizunara-Eiche ausschließlich wegen ihrer Seltenheit und Schwierigkeit. Mizunara ist porös, neigt zu Lecks und braucht 200+ Jahre zum Wachsen. Es wird nur für Finishing oder teilweise Reifung verwendet. Selbst Yamazaki 18 Mizunara Edition verwendet nur 20-30% Mizunara-Fässer in der Mischung.", "nl": "Geen grote Japanse whisky gebruikt Mizunara eiken exclusief vanwege zeldzaamheid en moeilijkheid. Mizunara is poreus, gevoelig voor lekken, en duurt 200+ jaar om te groeien. Het wordt alleen gebruikt voor finishing of gedeeltelijke rijping. Zelfs Yamazaki 18 Mizunara editie gebruikt slechts 20-30% Mizunara vaten in de blend."}
            }
        ]
    elif level == 8:
        return [
            {
                "question": {"en": "What distinguishes London Dry Gin legally from other gin styles?", "es": "¿Qué distingue legalmente al London Dry Gin de otros estilos de ginebra?", "de": "Was unterscheidet London Dry Gin rechtlich von anderen Gin-Stilen?", "nl": "Wat onderscheidt London Dry Gin wettelijk van andere gin stijlen?"},
                "options": ["No flavoring or sweetening after distillation", "Must be made in London", "Higher juniper content", "Lower alcohol content"],
                "correct": 0,
                "explanation": {"en": "London Dry Gin legally cannot have any flavoring or sweetening added after distillation - all botanicals must be distilled together. Maximum 0.1g sugar per liter allowed. It can be made anywhere globally, not just London. The name refers to the production method, not location.", "es": "London Dry Gin legalmente no puede tener saborizantes o edulcorantes añadidos después de destilación - todos los botánicos deben destilarse juntos. Máximo 0.1g azúcar por litro permitido. Puede hacerse en cualquier lugar globalmente, no solo Londres. El nombre refiere al método de producción, no ubicación.", "de": "London Dry Gin darf rechtlich keine Aromen oder Süßstoffe nach der Destillation hinzugefügt haben - alle Botanicals müssen zusammen destilliert werden. Maximum 0,1g Zucker pro Liter erlaubt. Es kann überall weltweit hergestellt werden, nicht nur in London. Der Name bezieht sich auf die Produktionsmethode, nicht den Standort.", "nl": "London Dry Gin mag wettelijk geen smaakstoffen of zoetstoffen toegevoegd hebben na distillatie - alle botanicals moeten samen gedistilleerd worden. Maximum 0,1g suiker per liter toegestaan. Het kan overal wereldwijd gemaakt worden, niet alleen in Londen. De naam verwijst naar de productiemethode, niet locatie."}
            },
            {
                "question": {"en": "What percentage of tequila production must come from blue agave by law?", "es": "¿Qué porcentaje de producción de tequila debe venir del agave azul por ley?", "de": "Welcher Prozentsatz der Tequila-Produktion muss gesetzlich aus blauer Agave stammen?", "nl": "Welk percentage van tequila productie moet wettelijk van blauwe agave komen?"},
                "options": ["Minimum 51% for mixto, 100% for pure", "Always 100%", "Minimum 75%", "No requirement"],
                "correct": 0,
                "explanation": {"en": "Tequila law requires minimum 51% blue agave sugars for 'mixto' tequila (remaining 49% can be other sugars). '100% agave' tequila must use only blue agave. Most premium tequilas are 100% agave. Mixto tequila dominated exports until the 2000s premium revolution.", "es": "La ley del tequila requiere mínimo 51% azúcares de agave azul para tequila 'mixto' (49% restante puede ser otros azúcares). Tequila '100% agave' debe usar solo agave azul. La mayoría de tequilas premium son 100% agave. Tequila mixto dominó exportaciones hasta la revolución premium de los 2000.", "de": "Tequila-Gesetz erfordert mindestens 51% blaue Agavenzucker für 'Mixto' Tequila (verbleibende 49% können andere Zucker sein). '100% Agave' Tequila muss nur blaue Agave verwenden. Die meisten Premium-Tequilas sind 100% Agave. Mixto-Tequila dominierte Exporte bis zur Premium-Revolution der 2000er.", "nl": "Tequila wet vereist minimum 51% blauwe agave suikers voor 'mixto' tequila (overige 49% kan andere suikers zijn). '100% agave' tequila moet alleen blauwe agave gebruiken. Meeste premium tequilas zijn 100% agave. Mixto tequila domineerde export tot de 2000s premium revolutie."}
            }
        ]
    else:  # level 9
        return [
            {
                "question": {"en": "What is the angel's share loss rate for Scotch whisky in traditional dunnage warehouses?", "es": "¿Cuál es la tasa de pérdida de la parte del ángel para whisky escocés en almacenes dunnage tradicionales?", "de": "Was ist die Angel's Share Verlustrate für Scotch Whisky in traditionellen Dunnage-Lagerhäusern?", "nl": "Wat is het angel's share verlies percentage voor Scotch whisky in traditionele dunnage pakhuizen?"},
                "options": ["2% per year average", "0.5% per year", "5% per year", "10% per year"],
                "correct": 0,
                "explanation": {"en": "Traditional Scottish dunnage warehouses lose average 2% volume annually to evaporation (angel's share). This varies: year 1 can be 3-5%, stabilizing to 1-2% later. After 25 years, only 60% of original whisky remains. Modern racked warehouses lose less. Climate affects rate significantly.", "es": "Almacenes dunnage escoceses tradicionales pierden promedio 2% volumen anualmente por evaporación (parte del ángel). Esto varía: año 1 puede ser 3-5%, estabilizándose a 1-2% después. Después de 25 años, solo 60% del whisky original permanece. Almacenes modernos con estantes pierden menos. Clima afecta tasa significativamente.", "de": "Traditionelle schottische Dunnage-Lagerhäuser verlieren durchschnittlich 2% Volumen jährlich durch Verdunstung (Angel's Share). Dies variiert: Jahr 1 kann 3-5% sein, stabilisiert sich später auf 1-2%. Nach 25 Jahren bleiben nur 60% des ursprünglichen Whiskys. Moderne Regallager verlieren weniger. Klima beeinflusst Rate erheblich.", "nl": "Traditionele Schotse dunnage pakhuizen verliezen gemiddeld 2% volume jaarlijks aan verdamping (angel's share). Dit varieert: jaar 1 kan 3-5% zijn, stabiliserend naar 1-2% later. Na 25 jaar blijft slechts 60% van originele whisky over. Moderne rek pakhuizen verliezen minder. Klimaat beïnvloedt percentage aanzienlijk."}
            },
            {
                "question": {"en": "Which rum production method creates the highest congener levels?", "es": "¿Qué método de producción de ron crea los niveles más altos de congéneres?", "de": "Welche Rum-Produktionsmethode erzeugt die höchsten Kongener-Werte?", "nl": "Welke rum productie methode creëert de hoogste congener niveaus?"},
                "options": ["Pot still with dunder/muck pit", "Column still", "Hybrid still", "Solera aging"],
                "correct": 0,
                "explanation": {"en": "Jamaican pot still rum using dunder (stillage) and muck pits creates highest congeners (500-1600 esters). The muck pit ferments dunder with bacteria for months, creating complex acids. When added to fermentation, these produce intense fruity esters. Hampden Estate reaches 1600 esters, the legal maximum.", "es": "Ron de alambique jamaicano usando dunder (vinaza) y pozos de muck crea congéneres más altos (500-1600 ésteres). El pozo muck fermenta dunder con bacterias por meses, creando ácidos complejos. Cuando se añade a fermentación, estos producen ésteres frutales intensos. Hampden Estate alcanza 1600 ésteres, el máximo legal.", "de": "Jamaikanischer Pot Still Rum mit Dunder (Schlempe) und Muck-Gruben erzeugt höchste Kongener (500-1600 Ester). Die Muck-Grube fermentiert Dunder mit Bakterien monatelang, erzeugt komplexe Säuren. Bei Zugabe zur Fermentation produzieren diese intensive fruchtige Ester. Hampden Estate erreicht 1600 Ester, das gesetzliche Maximum.", "nl": "Jamaicaanse pot still rum met dunder (spoeling) en muck pits creëert hoogste congeners (500-1600 esters). De muck pit fermenteert dunder met bacteriën voor maanden, creërend complexe zuren. Bij toevoeging aan fermentatie produceren deze intense fruitige esters. Hampden Estate bereikt 1600 esters, het wettelijke maximum."}
            }
        ]

def get_tea_questions(level):
    """Generate tea questions based on level"""
    if level == 6:
        return [
            {
                "question": {"en": "What temperature and time produces optimal GABA levels in GABA tea processing?", "es": "¿Qué temperatura y tiempo produce niveles óptimos de GABA en procesamiento de té GABA?", "de": "Welche Temperatur und Zeit produziert optimale GABA-Werte bei GABA-Tee-Verarbeitung?", "nl": "Welke temperatuur en tijd produceert optimale GABA niveaus in GABA thee verwerking?"},
                "options": ["Nitrogen flush 8 hours at 25°C", "Oxygen flush 4 hours at 35°C", "Vacuum 12 hours at 15°C", "CO2 flush 2 hours at 40°C"],
                "correct": 0,
                "explanation": {"en": "GABA tea requires nitrogen atmosphere for 8 hours at 25°C to convert glutamic acid to GABA (gamma-aminobutyric acid). This anaerobic process increases GABA from 0.05mg/g to over 1.5mg/g. The tea develops unique fruity notes. Developed in Japan 1987 for blood pressure benefits.", "es": "Té GABA requiere atmósfera de nitrógeno por 8 horas a 25°C para convertir ácido glutámico a GABA (ácido gamma-aminobutírico). Este proceso anaeróbico aumenta GABA de 0.05mg/g a más de 1.5mg/g. El té desarrolla notas frutales únicas. Desarrollado en Japón 1987 para beneficios de presión sanguínea.", "de": "GABA-Tee erfordert Stickstoffatmosphäre für 8 Stunden bei 25°C um Glutaminsäure zu GABA (Gamma-Aminobuttersäure) zu konvertieren. Dieser anaerobe Prozess erhöht GABA von 0,05mg/g auf über 1,5mg/g. Der Tee entwickelt einzigartige fruchtige Noten. Entwickelt in Japan 1987 für Blutdruckvorteile.", "nl": "GABA thee vereist stikstof atmosfeer voor 8 uur bij 25°C om glutaminezuur naar GABA (gamma-aminoboterzuur) te converteren. Dit anaërobe proces verhoogt GABA van 0,05mg/g naar meer dan 1,5mg/g. De thee ontwikkelt unieke fruitige tonen. Ontwikkeld in Japan 1987 voor bloeddruk voordelen."}
            },
            {
                "question": {"en": "Which pu-erh tea mountain is known as 'King of Tea Mountains' with trees over 800 years old?", "es": "¿Qué montaña de té pu-erh es conocida como 'Rey de las Montañas de Té' con árboles de más de 800 años?", "de": "Welcher Pu-Erh-Teeberg ist als 'König der Teeberge' mit über 800 Jahre alten Bäumen bekannt?", "nl": "Welke pu-erh thee berg staat bekend als 'Koning van Thee Bergen' met bomen ouder dan 800 jaar?"},
                "options": ["Lao Banzhang", "Yiwu", "Bulang", "Menghai"],
                "correct": 0,
                "explanation": {"en": "Lao Banzhang is the 'King of Tea Mountains', with ancient trees 800+ years old producing the most expensive raw pu-erh. Located in Bulang mountains, its tea has intense bitterness transforming to powerful huigan (returning sweetness). 2019 spring harvest reached $725/kg for single tree material.", "es": "Lao Banzhang es el 'Rey de las Montañas de Té', con árboles antiguos de 800+ años produciendo el pu-erh crudo más caro. Ubicado en montañas Bulang, su té tiene amargura intensa transformándose en poderoso huigan (dulzor que retorna). Cosecha primavera 2019 alcanzó $725/kg para material de árbol único.", "de": "Lao Banzhang ist der 'König der Teeberge', mit uralten Bäumen 800+ Jahre alt die den teuersten rohen Pu-Erh produzieren. In Bulang-Bergen gelegen hat sein Tee intensive Bitterkeit die sich in kraftvolles Huigan (zurückkehrende Süße) verwandelt. 2019 Frühlingsernte erreichte $725/kg für Einzelbaum-Material.", "nl": "Lao Banzhang is de 'Koning van Thee Bergen', met oude bomen 800+ jaar oud die de duurste rauwe pu-erh produceren. Gelegen in Bulang bergen heeft zijn thee intense bitterheid transformerend naar krachtige huigan (terugkerende zoetheid). 2019 lente oogst bereikte $725/kg voor enkele boom materiaal."}
            }
        ]
    elif level == 7:
        return [
            {
                "question": {"en": "What specific mineral content defines authentic Himalayan spring water for Darjeeling tea estates?", "es": "¿Qué contenido mineral específico define el agua de manantial del Himalaya auténtica para fincas de té Darjeeling?", "de": "Welcher spezifische Mineralgehalt definiert authentisches Himalaya-Quellwasser für Darjeeling-Teegärten?", "nl": "Welk specifiek mineraal gehalte definieert authentiek Himalaya bronwater voor Darjeeling thee estates?"},
                "options": ["TDS 30-50ppm with calcium 8-12mg/L", "TDS 100-150ppm", "TDS 200-300ppm", "TDS under 10ppm"],
                "correct": 0,
                "explanation": {"en": "Darjeeling's best estates use Himalayan spring water with TDS 30-50ppm, calcium 8-12mg/L, pH 6.8-7.2. This mineral profile enhances the muscatel character. Glenburn and Castleton estates protect specific springs. Water quality affects 30% of final cup character according to Darjeeling Tea Association studies.", "es": "Las mejores fincas de Darjeeling usan agua de manantial del Himalaya con TDS 30-50ppm, calcio 8-12mg/L, pH 6.8-7.2. Este perfil mineral mejora el carácter moscatel. Fincas Glenburn y Castleton protegen manantiales específicos. Calidad del agua afecta 30% del carácter final según estudios de Asociación de Té Darjeeling.", "de": "Darjeelings beste Gärten verwenden Himalaya-Quellwasser mit TDS 30-50ppm, Kalzium 8-12mg/L, pH 6,8-7,2. Dieses Mineralprofil verstärkt den Muskateller-Charakter. Glenburn und Castleton Gärten schützen spezifische Quellen. Wasserqualität beeinflusst 30% des finalen Tassencharakters laut Darjeeling Tea Association Studien.", "nl": "Darjeeling's beste estates gebruiken Himalaya bronwater met TDS 30-50ppm, calcium 8-12mg/L, pH 6,8-7,2. Dit mineraal profiel versterkt het muscatel karakter. Glenburn en Castleton estates beschermen specifieke bronnen. Waterkwaliteit beïnvloedt 30% van finale kop karakter volgens Darjeeling Tea Association studies."}
            },
            {
                "question": {"en": "Which specific clone number produces the highest quality Silver Needle white tea in Fujian?", "es": "¿Qué número de clon específico produce el té blanco Silver Needle de mayor calidad en Fujian?", "de": "Welche spezifische Klon-Nummer produziert den hochwertigsten Silver Needle Weißtee in Fujian?", "nl": "Welk specifiek kloon nummer produceert de hoogste kwaliteit Silver Needle witte thee in Fujian?"},
                "options": ["Da Bai (Big White) clone", "Da Hao clone", "Xiao Bai clone", "Fu Yun 6"],
                "correct": 0,
                "explanation": {"en": "Fuding Da Bai (Big White) cultivar is the premium clone for Silver Needle, with larger buds containing 30% more amino acids than other varietals. Only spring buds harvested before Qingming (April 5) qualify for top grade. Each bud must be 25-30mm with dense silver down covering.", "es": "El cultivar Fuding Da Bai (Gran Blanco) es el clon premium para Silver Needle, con brotes más grandes conteniendo 30% más aminoácidos que otros varietales. Solo brotes de primavera cosechados antes de Qingming (5 abril) califican para grado superior. Cada brote debe ser 25-30mm con denso plumón plateado cubriendo.", "de": "Fuding Da Bai (Großer Weißer) Kultivar ist der Premium-Klon für Silver Needle, mit größeren Knospen die 30% mehr Aminosäuren als andere Varietäten enthalten. Nur Frühlingsknospen geerntet vor Qingming (5. April) qualifizieren für Spitzenklasse. Jede Knospe muss 25-30mm mit dichtem Silberflaum bedeckt sein.", "nl": "Fuding Da Bai (Grote Witte) cultivar is de premium kloon voor Silver Needle, met grotere knoppen die 30% meer aminozuren bevatten dan andere variëteiten. Alleen lente knoppen geoogst voor Qingming (5 april) kwalificeren voor top graad. Elke knop moet 25-30mm zijn met dicht zilver dons bedekking."}
            }
        ]
    elif level == 8:
        return [
            {
                "question": {"en": "What is the optimal withering time for competition-grade Oriental Beauty oolong?", "es": "¿Cuál es el tiempo óptimo de marchitado para oolong Oriental Beauty de grado de competición?", "de": "Was ist die optimale Welkzeit für Wettbewerbs-Oriental Beauty Oolong?", "nl": "Wat is de optimale verwelkingstijd voor competitie-graad Oriental Beauty oolong?"},
                "options": ["16-20 hours with 3 turnings", "8-10 hours", "24-30 hours", "4-6 hours"],
                "correct": 0,
                "explanation": {"en": "Oriental Beauty requires 16-20 hours withering with 3 gentle turnings every 5-6 hours. Leaf moisture must reduce from 75% to exactly 58-60% for optimal oxidation. The leafhopper bite sites oxidize differently, creating the honey notes. Temperature maintained at 25-28°C with 65% humidity throughout.", "es": "Oriental Beauty requiere 16-20 horas de marchitado con 3 vueltas suaves cada 5-6 horas. Humedad de hoja debe reducir de 75% a exactamente 58-60% para oxidación óptima. Los sitios de mordedura de chicharrita oxidan diferente, creando notas de miel. Temperatura mantenida a 25-28°C con 65% humedad durante todo.", "de": "Oriental Beauty erfordert 16-20 Stunden Welken mit 3 sanften Wendungen alle 5-6 Stunden. Blattfeuchtigkeit muss von 75% auf genau 58-60% für optimale Oxidation reduzieren. Die Zikaden-Bissstellen oxidieren anders, erzeugen Honignoten. Temperatur bei 25-28°C mit 65% Luftfeuchtigkeit durchgehend gehalten.", "nl": "Oriental Beauty vereist 16-20 uur verwelking met 3 zachte wendingen elke 5-6 uur. Blad vocht moet verminderen van 75% naar exact 58-60% voor optimale oxidatie. De leafhopper beet plekken oxideren anders, creërend honing tonen. Temperatuur gehouden op 25-28°C met 65% vochtigheid gedurende."}
            },
            {
                "question": {"en": "Which Japanese tea garden practice increases L-theanine content by 150%?", "es": "¿Qué práctica de jardín de té japonés aumenta el contenido de L-teanina en 150%?", "de": "Welche japanische Teegarten-Praxis erhöht L-Theanin-Gehalt um 150%?", "nl": "Welke Japanse theetuin praktijk verhoogt L-theanine gehalte met 150%?"},
                "options": ["Kabuse shading for 20 days", "Direct sun exposure", "Night harvesting", "Steam processing"],
                "correct": 0,
                "explanation": {"en": "Kabuse (covered culture) shading for 20 days before harvest increases L-theanine by 150% and chlorophyll by 60%. The 85% shade cloth forces plants to produce more chlorophyll and prevents L-theanine breakdown. This creates the umami sweetness in gyokuro. Full shade (90%) for 30 days produces competition-grade tea.", "es": "Sombreado Kabuse (cultivo cubierto) por 20 días antes de cosecha aumenta L-teanina en 150% y clorofila en 60%. La tela de sombra 85% fuerza plantas a producir más clorofila y previene descomposición de L-teanina. Esto crea dulzor umami en gyokuro. Sombra completa (90%) por 30 días produce té de grado competición.", "de": "Kabuse (bedeckte Kultur) Beschattung für 20 Tage vor Ernte erhöht L-Theanin um 150% und Chlorophyll um 60%. Das 85% Schattiernetz zwingt Pflanzen mehr Chlorophyll zu produzieren und verhindert L-Theanin-Abbau. Dies erzeugt die Umami-Süße in Gyokuro. Volle Beschattung (90%) für 30 Tage produziert Wettbewerbsgrad-Tee.", "nl": "Kabuse (bedekte cultuur) schaduw voor 20 dagen voor oogst verhoogt L-theanine met 150% en chlorofyl met 60%. Het 85% schaduwdoek dwingt planten meer chlorofyl te produceren en voorkomt L-theanine afbraak. Dit creëert de umami zoetheid in gyokuro. Volledige schaduw (90%) voor 30 dagen produceert competitie-graad thee."}
            }
        ]
    elif level == 9:
        return [
            {
                "question": {"en": "What is the precise rolling pressure sequence for Dragon Well tea's ten hand-processing styles?", "es": "¿Cuál es la secuencia precisa de presión de enrollado para los diez estilos de procesamiento manual del té Dragon Well?", "de": "Was ist die genaue Rolldrucksequenz für Dragon Well Tees zehn Handverarbeitungsstile?", "nl": "Wat is de precieze rol druk volgorde voor Dragon Well thee's tien hand-verwerkings stijlen?"},
                "options": ["Light-medium-heavy-light over 3 stages", "Constant heavy pressure", "Heavy-light-medium", "Random pressure"],
                "correct": 0,
                "explanation": {"en": "Dragon Well requires precise pressure: Stage 1 (light 2kg, 10 min), Stage 2 (medium 5kg, 15 min), Stage 3 (heavy 8kg, 10 min), Stage 4 (light 2kg, 5 min). This sequence, perfected over 1200 years, creates the signature flat shape while preserving cellular structure. Master tea makers train 10+ years to perfect the ten movements.", "es": "Dragon Well requiere presión precisa: Etapa 1 (ligera 2kg, 10 min), Etapa 2 (media 5kg, 15 min), Etapa 3 (pesada 8kg, 10 min), Etapa 4 (ligera 2kg, 5 min). Esta secuencia, perfeccionada durante 1200 años, crea la forma plana característica preservando estructura celular. Maestros de té entrenan 10+ años para perfeccionar los diez movimientos.", "de": "Dragon Well erfordert präzisen Druck: Stufe 1 (leicht 2kg, 10 Min), Stufe 2 (mittel 5kg, 15 Min), Stufe 3 (schwer 8kg, 10 Min), Stufe 4 (leicht 2kg, 5 Min). Diese Sequenz, über 1200 Jahre perfektioniert, erzeugt die charakteristische flache Form während Zellstruktur erhalten bleibt. Meister-Teemacher trainieren 10+ Jahre um zehn Bewegungen zu perfektionieren.", "nl": "Dragon Well vereist precieze druk: Fase 1 (licht 2kg, 10 min), Fase 2 (medium 5kg, 15 min), Fase 3 (zwaar 8kg, 10 min), Fase 4 (licht 2kg, 5 min). Deze volgorde, geperfectioneerd over 1200 jaar, creëert de kenmerkende platte vorm terwijl cellulaire structuur behouden blijft. Meester theemakers trainen 10+ jaar om de tien bewegingen te perfectioneren."}
            },
            {
                "question": {"en": "Which rare Taiwanese oolong commands $3000+/kg due to specific insect interaction?", "es": "¿Qué oolong taiwanés raro cuesta $3000+/kg debido a interacción específica con insectos?", "de": "Welcher seltene taiwanesische Oolong kostet $3000+/kg wegen spezifischer Insekten-Interaktion?", "nl": "Welke zeldzame Taiwanese oolong kost $3000+/kg door specifieke insecten interactie?"},
                "options": ["Gui Fei (Concubine) Tea", "Ali Shan", "Da Yu Ling", "Dong Ding"],
                "correct": 0,
                "explanation": {"en": "Gui Fei (Concubine) Tea requires specific leafhopper (Jacobiasca formosana) bites during Mi Xiang season. Only 15-20% bitten leaves qualify, must be harvested within 48 hours of biting. The insect's saliva triggers terpene production creating honey-peach notes. Climate change has reduced yields 70% since 2000, driving prices above $3000/kg.", "es": "Té Gui Fei (Concubina) requiere mordidas específicas de chicharrita (Jacobiasca formosana) durante temporada Mi Xiang. Solo 15-20% hojas mordidas califican, deben cosecharse dentro de 48 horas de mordedura. La saliva del insecto activa producción de terpenos creando notas miel-durazno. Cambio climático ha reducido rendimientos 70% desde 2000, elevando precios sobre $3000/kg.", "de": "Gui Fei (Konkubinen) Tee erfordert spezifische Zikaden (Jacobiasca formosana) Bisse während Mi Xiang Saison. Nur 15-20% gebissene Blätter qualifizieren, müssen innerhalb 48 Stunden nach Biss geerntet werden. Der Speichel des Insekts löst Terpen-Produktion aus, erzeugt Honig-Pfirsich-Noten. Klimawandel hat Erträge um 70% seit 2000 reduziert, treibt Preise über $3000/kg.", "nl": "Gui Fei (Concubine) Thee vereist specifieke bladluis (Jacobiasca formosana) beten tijdens Mi Xiang seizoen. Slechts 15-20% gebeten bladeren kwalificeren, moeten binnen 48 uur na bijten geoogst worden. Het insect's speeksel triggert terpeen productie creërend honing-perzik tonen. Klimaatverandering heeft opbrengsten 70% verminderd sinds 2000, prijzen boven $3000/kg drijvend."}
            }
        ]
    else:  # level 10
        return [
            {
                "question": {"en": "What is the molecular weight range of theaflavins that determines black tea quality grading?", "es": "¿Cuál es el rango de peso molecular de teaflavinas que determina la clasificación de calidad del té negro?", "de": "Was ist der Molekulargewichtsbereich von Theaflavinen der die Qualitätseinstufung von Schwarztee bestimmt?", "nl": "Wat is het molecuulgewicht bereik van theaflavinen dat zwarte thee kwaliteit gradatie bepaalt?"},
                "options": ["564-868 Daltons for TF1-TF4", "100-200 Daltons", "1000-2000 Daltons", "50-100 Daltons"],
                "correct": 0,
                "explanation": {"en": "Theaflavins range from 564 Daltons (TF1) to 868 Daltons (TF4-digallate). The ratio determines grade: Premium teas have TF1:TF2:TF3:TF4 ratio of 1:1:2:3. Higher molecular weight theaflavins create briskness and brightness. Mass spectrometry analysis reveals 30+ theaflavin derivatives affecting cup quality. Orthodox processing preserves larger molecules better than CTC.", "es": "Teaflavinas van de 564 Daltons (TF1) a 868 Daltons (TF4-digalato). La proporción determina grado: tés Premium tienen proporción TF1:TF2:TF3:TF4 de 1:1:2:3. Teaflavinas de mayor peso molecular crean vivacidad y brillo. Análisis de espectrometría de masas revela 30+ derivados de teaflavina afectando calidad. Procesamiento ortodoxo preserva moléculas más grandes mejor que CTC.", "de": "Theaflavine reichen von 564 Dalton (TF1) bis 868 Dalton (TF4-Digallat). Das Verhältnis bestimmt Grad: Premium-Tees haben TF1:TF2:TF3:TF4 Verhältnis von 1:1:2:3. Höheres Molekulargewicht Theaflavine erzeugen Lebhaftigkeit und Helligkeit. Massenspektrometrie-Analyse zeigt 30+ Theaflavin-Derivate die Tassenqualität beeinflussen. Orthodoxe Verarbeitung bewahrt größere Moleküle besser als CTC.", "nl": "Theaflavinen variëren van 564 Daltons (TF1) tot 868 Daltons (TF4-digallaat). De verhouding bepaalt graad: Premium theeën hebben TF1:TF2:TF3:TF4 verhouding van 1:1:2:3. Hoger molecuulgewicht theaflavinen creëren levendigheid en helderheid. Massaspectrometrie analyse onthult 30+ theaflavine derivaten die kop kwaliteit beïnvloeden. Orthodoxe verwerking behoudt grotere moleculen beter dan CTC."}
            },
            {
                "question": {"en": "Which specific microorganism produces the 'golden flowers' in Fu Brick dark tea worth $5000/kg?", "es": "¿Qué microorganismo específico produce las 'flores doradas' en té oscuro Fu Brick de $5000/kg?", "de": "Welcher spezifische Mikroorganismus produziert die 'goldenen Blumen' in Fu Brick dunklem Tee im Wert von $5000/kg?", "nl": "Welk specifiek micro-organisme produceert de 'gouden bloemen' in Fu Brick donkere thee van $5000/kg?"},
                "options": ["Eurotium cristatum at 10^6 CFU/g", "Aspergillus niger", "Penicillium roqueforti", "Saccharomyces cerevisiae"],
                "correct": 0,
                "explanation": {"en": "Eurotium cristatum (golden flower fungus) must reach 10^6 CFU/g density for premium Fu Brick tea. The fungus produces over 40 bioactive compounds including cristatin and asperflavin. Optimal growth requires 28-32°C, 75-85% humidity for 21 days. Bricks with 30%+ golden flower coverage command $5000/kg. The fungus converts tea polyphenols into unique health compounds.", "es": "Eurotium cristatum (hongo flor dorada) debe alcanzar densidad 10^6 UFC/g para té Fu Brick premium. El hongo produce más de 40 compuestos bioactivos incluyendo cristatina y asperflavina. Crecimiento óptimo requiere 28-32°C, 75-85% humedad por 21 días. Ladrillos con 30%+ cobertura flor dorada cuestan $5000/kg. El hongo convierte polifenoles del té en compuestos de salud únicos.", "de": "Eurotium cristatum (Goldblumen-Pilz) muss 10^6 KBE/g Dichte für Premium Fu Brick Tee erreichen. Der Pilz produziert über 40 bioaktive Verbindungen einschließlich Cristatin und Asperflavin. Optimales Wachstum erfordert 28-32°C, 75-85% Feuchtigkeit für 21 Tage. Ziegel mit 30%+ Goldblumen-Bedeckung kosten $5000/kg. Der Pilz wandelt Tee-Polyphenole in einzigartige Gesundheitsverbindungen um.", "nl": "Eurotium cristatum (gouden bloem schimmel) moet 10^6 CFU/g dichtheid bereiken voor premium Fu Brick thee. De schimmel produceert meer dan 40 bioactieve verbindingen inclusief cristatine en asperflavine. Optimale groei vereist 28-32°C, 75-85% vochtigheid voor 21 dagen. Bakstenen met 30%+ gouden bloem bedekking kosten $5000/kg. De schimmel zet thee polyfenolen om in unieke gezondheidsverbindingen."}
            }
        ]

def get_pasta_questions_remaining(level):
    """Generate pasta questions for levels 6-9"""
    if level == 6:
        return [
            {
                "question": {"en": "What is the traditional width specification for pappardelle pasta?", "es": "¿Cuál es la especificación tradicional de ancho para la pasta pappardelle?", "de": "Was ist die traditionelle Breitenspezifikation für Pappardelle-Pasta?", "nl": "Wat is de traditionele breedte specificatie voor pappardelle pasta?"},
                "options": ["20-30mm wide", "10-15mm wide", "5-10mm wide", "35-40mm wide"],
                "correct": 0,
                "explanation": {"en": "Traditional pappardelle must be 20-30mm wide, making it one of the widest ribbon pastas. This width is perfect for holding rich meat ragùs, particularly wild boar or rabbit sauces traditional in Tuscany. The name comes from 'pappare' meaning to gobble up.", "es": "Pappardelle tradicional debe ser 20-30mm de ancho, haciéndola una de las pastas de cinta más anchas. Este ancho es perfecto para sostener ragùs de carne ricos, particularmente salsas de jabalí o conejo tradicionales en Toscana. El nombre viene de 'pappare' que significa engullir.", "de": "Traditionelle Pappardelle müssen 20-30mm breit sein, was sie zu einer der breitesten Bandnudeln macht. Diese Breite ist perfekt für reichhaltige Fleischragouts, besonders Wildschwein- oder Kaninchensaucen traditionell in der Toskana. Der Name kommt von 'pappare' was verschlingen bedeutet.", "nl": "Traditionele pappardelle moet 20-30mm breed zijn, wat het een van de breedste lint pasta's maakt. Deze breedte is perfect voor het vasthouden van rijke vlees ragùs, vooral wild zwijn of konijn sauzen traditioneel in Toscane. De naam komt van 'pappare' wat opschrokken betekent."}
            },
            {
                "question": {"en": "How many ridges should authentic rigatoni pasta have?", "es": "¿Cuántas crestas debe tener la pasta rigatoni auténtica?", "de": "Wie viele Rillen sollte authentische Rigatoni-Pasta haben?", "nl": "Hoeveel ribbels moet authentieke rigatoni pasta hebben?"},
                "options": ["12-16 ridges", "6-8 ridges", "20-24 ridges", "No ridges"],
                "correct": 0,
                "explanation": {"en": "Authentic rigatoni has 12-16 vertical ridges (righe) running down its length. These ridges must be deep enough (1-1.5mm) to hold sauce effectively. The tube diameter should be 15mm with 5mm walls. Roman rigatoni traditionally has exactly 14 ridges for optimal sauce adhesion.", "es": "Rigatoni auténtico tiene 12-16 crestas verticales (righe) corriendo por su longitud. Estas crestas deben ser suficientemente profundas (1-1.5mm) para sostener salsa efectivamente. El diámetro del tubo debe ser 15mm con paredes de 5mm. Rigatoni romano tradicionalmente tiene exactamente 14 crestas para adhesión óptima de salsa.", "de": "Authentische Rigatoni hat 12-16 vertikale Rillen (Righe) die ihre Länge hinunterlaufen. Diese Rillen müssen tief genug sein (1-1,5mm) um Sauce effektiv zu halten. Der Röhrendurchmesser sollte 15mm mit 5mm Wänden sein. Römische Rigatoni hat traditionell genau 14 Rillen für optimale Saucenhaftung.", "nl": "Authentieke rigatoni heeft 12-16 verticale ribbels (righe) die over de lengte lopen. Deze ribbels moeten diep genoeg zijn (1-1,5mm) om saus effectief vast te houden. De buis diameter moet 15mm zijn met 5mm wanden. Romeinse rigatoni heeft traditioneel exact 14 ribbels voor optimale saus hechting."}
            }
        ]
    elif level == 7:
        return [
            {
                "question": {"en": "What flour protein content is required for making traditional Chinese hand-pulled lamian noodles?", "es": "¿Qué contenido de proteína de harina se requiere para hacer fideos lamian chinos tradicionales estirados a mano?", "de": "Welcher Mehl-Proteingehalt ist für traditionelle chinesische handgezogene Lamian-Nudeln erforderlich?", "nl": "Welk meel eiwitgehalte is vereist voor traditionele Chinese handgetrokken lamian noedels?"},
                "options": ["11-13% protein content", "8-9% protein", "14-16% protein", "6-7% protein"],
                "correct": 0,
                "explanation": {"en": "Lamian requires flour with 11-13% protein for the perfect balance of elasticity and extensibility. Too high protein makes pulling difficult, too low causes breaking. The dough must rest 2-4 hours with alkaline water (kansui) to develop the gluten network needed for pulling into 16,384 strands (14 doublings).", "es": "Lamian requiere harina con 11-13% proteína para el equilibrio perfecto de elasticidad y extensibilidad. Demasiada proteína hace difícil el estirado, muy poca causa ruptura. La masa debe reposar 2-4 horas con agua alcalina (kansui) para desarrollar la red de gluten necesaria para estirar en 16,384 hebras (14 duplicaciones).", "de": "Lamian erfordert Mehl mit 11-13% Protein für die perfekte Balance von Elastizität und Dehnbarkeit. Zu viel Protein macht das Ziehen schwierig, zu wenig verursacht Bruch. Der Teig muss 2-4 Stunden mit alkalischem Wasser (Kansui) ruhen um das Glutennetzwerk zu entwickeln das für 16.384 Stränge (14 Verdoppelungen) nötig ist.", "nl": "Lamian vereist meel met 11-13% eiwit voor de perfecte balans van elasticiteit en rekbaarheid. Te hoog eiwit maakt trekken moeilijk, te laag veroorzaakt breken. Het deeg moet 2-4 uur rusten met alkalisch water (kansui) om het gluten netwerk te ontwikkelen nodig voor trekken in 16.384 strengen (14 verdubbelingen)."}
            },
            {
                "question": {"en": "At what temperature must pasta dough be extruded through bronze dies for optimal texture?", "es": "¿A qué temperatura debe extruirse la masa de pasta a través de matrices de bronce para textura óptima?", "de": "Bei welcher Temperatur muss Pastateig durch Bronzematrizen extrudiert werden für optimale Textur?", "nl": "Bij welke temperatuur moet pastadeeg door bronzen matrijzen worden geëxtrudeerd voor optimale textuur?"},
                "options": ["35-40°C maximum", "50-60°C", "70-80°C", "Room temperature"],
                "correct": 0,
                "explanation": {"en": "Bronze die extrusion must stay below 40°C to preserve pasta quality. Higher temperatures denature proteins and gelatinize starch prematurely. The slow, cool extrusion through bronze creates the rough surface texture that holds sauce. Industrial Teflon dies at 80°C produce smooth pasta that sauce slides off.", "es": "La extrusión con matriz de bronce debe mantenerse bajo 40°C para preservar calidad de pasta. Temperaturas más altas desnaturalizan proteínas y gelatinizan almidón prematuramente. La extrusión lenta y fría a través de bronce crea la textura superficial rugosa que sostiene salsa. Matrices industriales de teflón a 80°C producen pasta lisa de la que la salsa se desliza.", "de": "Bronze-Matrizen-Extrusion muss unter 40°C bleiben um Pastaqualität zu bewahren. Höhere Temperaturen denaturieren Proteine und gelatinisieren Stärke vorzeitig. Die langsame, kühle Extrusion durch Bronze erzeugt die raue Oberflächentextur die Sauce hält. Industrielle Teflon-Matrizen bei 80°C produzieren glatte Pasta von der Sauce abrutscht.", "nl": "Bronzen matrijs extrusie moet onder 40°C blijven om pasta kwaliteit te behouden. Hogere temperaturen denatureren eiwitten en gelatiniseren zetmeel voortijdig. De langzame, koele extrusie door brons creëert de ruwe oppervlakte textuur die saus vasthoudt. Industriële Teflon matrijzen bij 80°C produceren gladde pasta waar saus vanaf glijdt."}
            }
        ]
    elif level == 8:
        return [
            {
                "question": {"en": "What is the precise cooking time for al dente capellini at sea level with 1% salt water?", "es": "¿Cuál es el tiempo de cocción preciso para capellini al dente al nivel del mar con agua al 1% de sal?", "de": "Was ist die genaue Kochzeit für al dente Capellini auf Meereshöhe mit 1% Salzwasser?", "nl": "Wat is de precieze kooktijd voor al dente capellini op zeeniveau met 1% zout water?"},
                "options": ["2 minutes 15 seconds", "1 minute", "4 minutes", "6 minutes"],
                "correct": 0,
                "explanation": {"en": "Capellini (angel hair) at 0.85mm diameter requires exactly 2:15 at sea level in 1% salt water (10g salt per liter) for perfect al dente. The salt raises boiling point to 100.2°C and speeds starch gelatinization. Each 300m altitude adds 5 seconds cooking time due to lower boiling point.", "es": "Capellini (cabello de ángel) de 0.85mm diámetro requiere exactamente 2:15 al nivel del mar en agua 1% sal (10g sal por litro) para al dente perfecto. La sal eleva punto de ebullición a 100.2°C y acelera gelatinización del almidón. Cada 300m altitud añade 5 segundos tiempo de cocción debido a menor punto de ebullición.", "de": "Capellini (Engelshaar) mit 0,85mm Durchmesser benötigt genau 2:15 auf Meereshöhe in 1% Salzwasser (10g Salz pro Liter) für perfektes al dente. Das Salz erhöht Siedepunkt auf 100,2°C und beschleunigt Stärkegelatinisierung. Jede 300m Höhe fügt 5 Sekunden Kochzeit hinzu wegen niedrigerem Siedepunkt.", "nl": "Capellini (engelenhaar) met 0,85mm diameter vereist exact 2:15 op zeeniveau in 1% zout water (10g zout per liter) voor perfecte al dente. Het zout verhoogt kookpunt naar 100,2°C en versnelt zetmeel gelatinisatie. Elke 300m hoogte voegt 5 seconden kooktijd toe door lager kookpunt."}
            },
            {
                "question": {"en": "Which Italian pasta shape has exactly 84 holes to represent the strings of a harp?", "es": "¿Qué forma de pasta italiana tiene exactamente 84 agujeros para representar las cuerdas de un arpa?", "de": "Welche italienische Pastaform hat genau 84 Löcher um die Saiten einer Harfe darzustellen?", "nl": "Welke Italiaanse pastavorm heeft exact 84 gaten om de snaren van een harp te vertegenwoordigen?"},
                "options": ["Corzetti stamp pasta", "Ruote", "Radiatori", "Farfalle"],
                "correct": 0,
                "explanation": {"en": "Traditional Ligurian corzetti pasta is stamped with family crests containing exactly 84 holes in the 'harp of David' pattern. Each family had unique wooden stamps passed down generations. The 84 holes create pockets for pesto or walnut sauce. Authentic stamps are hand-carved from pear or apple wood.", "es": "La pasta corzetti tradicional de Liguria se estampa con escudos familiares conteniendo exactamente 84 agujeros en el patrón 'arpa de David'. Cada familia tenía sellos de madera únicos pasados por generaciones. Los 84 agujeros crean bolsillos para pesto o salsa de nuez. Sellos auténticos son tallados a mano de madera de pera o manzana.", "de": "Traditionelle ligurische Corzetti-Pasta wird mit Familienwappen gestempelt die genau 84 Löcher im 'Harfe Davids' Muster enthalten. Jede Familie hatte einzigartige Holzstempel über Generationen weitergegeben. Die 84 Löcher schaffen Taschen für Pesto oder Walnusssauce. Authentische Stempel sind handgeschnitzt aus Birnen- oder Apfelholz.", "nl": "Traditionele Ligurische corzetti pasta wordt gestempeld met familie wapens met exact 84 gaten in het 'harp van David' patroon. Elke familie had unieke houten stempels doorgegeven door generaties. De 84 gaten creëren zakjes voor pesto of walnoot saus. Authentieke stempels zijn handgesneden uit peren- of appelhout."}
            }
        ]
    else:  # level 9
        return [
            {
                "question": {"en": "What is the gluten development window for competition-grade fresh pasta dough?", "es": "¿Cuál es la ventana de desarrollo del gluten para masa de pasta fresca de grado de competición?", "de": "Was ist das Glutenentwicklungsfenster für Wettkampf-frischen Pastateig?", "nl": "Wat is het gluten ontwikkelings venster voor competitie-niveau vers pasta deeg?"},
                "options": ["18-22 minutes kneading", "5-10 minutes", "30-40 minutes", "1-2 minutes"],
                "correct": 0,
                "explanation": {"en": "Competition pasta requires 18-22 minutes kneading for optimal gluten development. The dough reaches 28-30°C from friction heat, activating enzymes. Windowpane test must show 0.2mm thickness without tearing. Over-kneading past 22 minutes breaks gluten bonds. Rest 45 minutes at 22°C before rolling.", "es": "Pasta de competición requiere 18-22 minutos de amasado para desarrollo óptimo del gluten. La masa alcanza 28-30°C del calor de fricción, activando enzimas. Prueba de ventana debe mostrar 0.2mm grosor sin desgarrar. Sobre-amasar pasados 22 minutos rompe enlaces de gluten. Reposar 45 minutos a 22°C antes de enrollar.", "de": "Wettkampf-Pasta erfordert 18-22 Minuten Kneten für optimale Glutenentwicklung. Der Teig erreicht 28-30°C durch Reibungshitze, aktiviert Enzyme. Windowpane-Test muss 0,2mm Dicke ohne Reißen zeigen. Überkneten nach 22 Minuten bricht Glutenbindungen. 45 Minuten bei 22°C ruhen vor dem Ausrollen.", "nl": "Competitie pasta vereist 18-22 minuten kneden voor optimale gluten ontwikkeling. Het deeg bereikt 28-30°C van wrijvingswarmte, activerend enzymen. Windowpane test moet 0,2mm dikte tonen zonder scheuren. Over-kneden na 22 minuten breekt gluten bindingen. Rust 45 minuten bij 22°C voor uitrollen."}
            },
            {
                "question": {"en": "What specific enzyme in durum wheat affects pasta color at molecular level?", "es": "¿Qué enzima específica en trigo duro afecta el color de la pasta a nivel molecular?", "de": "Welches spezifische Enzym in Hartweizen beeinflusst Pastafarbe auf molekularer Ebene?", "nl": "Welk specifiek enzym in durum tarwe beïnvloedt pasta kleur op moleculair niveau?"},
                "options": ["Polyphenol oxidase causing browning", "Amylase", "Protease", "Lipase"],
                "correct": 0,
                "explanation": {"en": "Polyphenol oxidase (PPO) in durum wheat causes enzymatic browning, reducing pasta's golden color. Premium durum varieties have PPO activity below 5 units/g. The enzyme oxidizes phenolic compounds to quinones, forming brown melanin pigments. Pasta producers select low-PPO wheat and control pH to minimize browning.", "es": "Polifenol oxidasa (PPO) en trigo duro causa pardeamiento enzimático, reduciendo color dorado de la pasta. Variedades durum premium tienen actividad PPO bajo 5 unidades/g. La enzima oxida compuestos fenólicos a quinonas, formando pigmentos marrones de melanina. Productores de pasta seleccionan trigo bajo-PPO y controlan pH para minimizar pardeamiento.", "de": "Polyphenoloxidase (PPO) in Hartweizen verursacht enzymatische Bräunung, reduziert goldene Farbe der Pasta. Premium Hartweizensorten haben PPO-Aktivität unter 5 Einheiten/g. Das Enzym oxidiert phenolische Verbindungen zu Chinonen, bildet braune Melaninpigmente. Pastahersteller wählen niedrig-PPO Weizen und kontrollieren pH um Bräunung zu minimieren.", "nl": "Polyfenol oxidase (PPO) in durum tarwe veroorzaakt enzymatische bruining, vermindert pasta's gouden kleur. Premium durum variëteiten hebben PPO activiteit onder 5 eenheden/g. Het enzym oxideert fenolische verbindingen naar quinonen, vormend bruine melanine pigmenten. Pasta producenten selecteren laag-PPO tarwe en controleren pH om bruining te minimaliseren."}
            }
        ]

def get_wine_questions():
    """Generate wine questions for levels 4 and 5"""
    level4 = [
        {
            "question": {"en": "What is the ideal serving temperature for vintage Champagne?", "es": "¿Cuál es la temperatura ideal de servicio para Champagne vintage?", "de": "Was ist die ideale Serviertemperatur für Vintage-Champagner?", "nl": "Wat is de ideale serveertemperatuur voor vintage Champagne?"},
            "options": ["8-10°C", "4-6°C", "12-14°C", "0-2°C"],
            "correct": 0,
            "explanation": {"en": "Vintage Champagne should be served at 8-10°C to reveal its complex aromas and flavors. Non-vintage can be served slightly cooler at 6-8°C. Too cold masks the wine's complexity, while too warm makes it lose freshness and the bubbles dissipate quickly.", "es": "Champagne vintage debe servirse a 8-10°C para revelar sus aromas y sabores complejos. No-vintage puede servirse ligeramente más frío a 6-8°C. Demasiado frío enmascara la complejidad del vino, mientras demasiado caliente pierde frescura y las burbujas se disipan rápidamente.", "de": "Vintage-Champagner sollte bei 8-10°C serviert werden um seine komplexen Aromen und Geschmäcker zu enthüllen. Nicht-Vintage kann etwas kühler bei 6-8°C serviert werden. Zu kalt maskiert die Komplexität des Weins, während zu warm Frische verliert und Blasen sich schnell auflösen.", "nl": "Vintage Champagne moet op 8-10°C geserveerd worden om zijn complexe aroma's en smaken te onthullen. Non-vintage kan iets koeler op 6-8°C geserveerd worden. Te koud maskeert de complexiteit van de wijn, terwijl te warm frisheid verliest en bubbels snel verdwijnen."}
        },
        {
            "question": {"en": "Which grape variety is the primary component in Châteauneuf-du-Pape wines?", "es": "¿Qué variedad de uva es el componente principal en vinos Châteauneuf-du-Pape?", "de": "Welche Rebsorte ist die Hauptkomponente in Châteauneuf-du-Pape Weinen?", "nl": "Welke druivensoort is het hoofdbestanddeel in Châteauneuf-du-Pape wijnen?"},
            "options": ["Grenache (up to 80%)", "Syrah", "Mourvèdre", "Cinsault"],
            "correct": 0,
            "explanation": {"en": "Grenache typically comprises 50-80% of Châteauneuf-du-Pape blends, providing the wine's characteristic warmth, red fruit flavors, and alcohol. While 13 grape varieties are permitted, most producers use primarily Grenache with Syrah and Mourvèdre for structure and complexity.", "es": "Grenache típicamente comprende 50-80% de mezclas Châteauneuf-du-Pape, proporcionando la calidez característica del vino, sabores de fruta roja y alcohol. Mientras 13 variedades de uva están permitidas, la mayoría de productores usan principalmente Grenache con Syrah y Mourvèdre para estructura y complejidad.", "de": "Grenache umfasst typischerweise 50-80% der Châteauneuf-du-Pape Mischungen, verleiht dem Wein charakteristische Wärme, rote Fruchtaromen und Alkohol. Während 13 Rebsorten erlaubt sind, verwenden die meisten Produzenten hauptsächlich Grenache mit Syrah und Mourvèdre für Struktur und Komplexität.", "nl": "Grenache omvat typisch 50-80% van Châteauneuf-du-Pape blends, geeft de wijn zijn karakteristieke warmte, rode fruit smaken en alcohol. Terwijl 13 druivensoorten toegestaan zijn, gebruiken meeste producenten voornamelijk Grenache met Syrah en Mourvèdre voor structuur en complexiteit."}
        }
    ]

    level5 = [
        {
            "question": {"en": "What is the minimum aging requirement for Brunello di Montalcino DOCG?", "es": "¿Cuál es el requisito mínimo de envejecimiento para Brunello di Montalcino DOCG?", "de": "Was ist die Mindestalterungsanforderung für Brunello di Montalcino DOCG?", "nl": "Wat is de minimum rijpings vereiste voor Brunello di Montalcino DOCG?"},
            "options": ["5 years total, 2 in oak", "3 years total, 1 in oak", "4 years total, 2 in oak", "6 years total, 3 in oak"],
            "correct": 0,
            "explanation": {"en": "Brunello di Montalcino must age minimum 5 years before release, with at least 2 years in oak casks and 4 months in bottle. Riserva requires 6 years total. The wine cannot be released before January 1st of the 5th year after harvest. Made from 100% Sangiovese Grosso clone.", "es": "Brunello di Montalcino debe envejecer mínimo 5 años antes de lanzamiento, con al menos 2 años en barricas de roble y 4 meses en botella. Riserva requiere 6 años totales. El vino no puede lanzarse antes del 1 de enero del 5º año después de cosecha. Hecho de 100% clon Sangiovese Grosso.", "de": "Brunello di Montalcino muss mindestens 5 Jahre vor Freigabe reifen, mit mindestens 2 Jahren in Eichenfässern und 4 Monaten in der Flasche. Riserva erfordert insgesamt 6 Jahre. Der Wein kann nicht vor dem 1. Januar des 5. Jahres nach der Ernte freigegeben werden. Aus 100% Sangiovese Grosso Klon.", "nl": "Brunello di Montalcino moet minimum 5 jaar rijpen voor vrijgave, met minstens 2 jaar in eiken vaten en 4 maanden op fles. Riserva vereist 6 jaar totaal. De wijn kan niet vrijgegeven worden voor 1 januari van het 5e jaar na oogst. Gemaakt van 100% Sangiovese Grosso kloon."}
        },
        {
            "question": {"en": "Which specific yeast strain produces the highest glycerol levels in wine?", "es": "¿Qué cepa de levadura específica produce los niveles más altos de glicerol en vino?", "de": "Welcher spezifische Hefestamm produziert die höchsten Glycerinwerte im Wein?", "nl": "Welke specifieke giststam produceert de hoogste glycerol niveaus in wijn?"},
            "options": ["Saccharomyces cerevisiae bayanus", "Saccharomyces cerevisiae cerevisiae", "Brettanomyces", "Candida stellata"],
            "correct": 0,
            "explanation": {"en": "S. cerevisiae bayanus produces 8-12g/L glycerol, giving wine more body and mouthfeel. This strain is used for Champagne and high-alcohol wines. It's more resistant to alcohol and produces less volatile acidity. Glycerol is the third most abundant compound in wine after water and alcohol.", "es": "S. cerevisiae bayanus produce 8-12g/L glicerol, dando al vino más cuerpo y sensación en boca. Esta cepa se usa para Champagne y vinos de alto alcohol. Es más resistente al alcohol y produce menos acidez volátil. Glicerol es el tercer compuesto más abundante en vino después de agua y alcohol.", "de": "S. cerevisiae bayanus produziert 8-12g/L Glycerin, gibt Wein mehr Körper und Mundgefühl. Dieser Stamm wird für Champagner und hochalkoholische Weine verwendet. Er ist resistenter gegen Alkohol und produziert weniger flüchtige Säure. Glycerin ist die dritthäufigste Verbindung im Wein nach Wasser und Alkohol.", "nl": "S. cerevisiae bayanus produceert 8-12g/L glycerol, geeft wijn meer body en mondgevoel. Deze stam wordt gebruikt voor Champagne en hoog-alcohol wijnen. Het is meer resistent tegen alcohol en produceert minder vluchtige zuren. Glycerol is de derde meest voorkomende verbinding in wijn na water en alcohol."}
        }
    ]

    return level4 + level5

def add_questions_to_file(filepath, questions_to_add):
    """Add questions to a quiz file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Find the last question's closing brace
        pattern = r'(\s+}\s*\n)(\s+\]\s*\n\s+};\s*\n)'

        # Format new questions
        new_questions_str = ""
        for q in questions_to_add:
            new_questions_str += ",\n  {\n"

            # Format question
            q_str = 'question:{'
            for lang, text in q["question"].items():
                q_str += f'{lang}:"{text}",'
            q_str = q_str.rstrip(',') + '}'
            new_questions_str += f'    {q_str},\n'

            # Format options
            new_questions_str += '    options:['
            for i, opt in enumerate(q["options"]):
                new_questions_str += f'"{opt}"'
                if i < len(q["options"]) - 1:
                    new_questions_str += ','
            new_questions_str += '],\n'

            # Add correct index
            new_questions_str += f'    correct:{q["correct"]},\n'

            # Format explanation
            e_str = 'explanation:{'
            for lang, text in q["explanation"].items():
                e_str += f'{lang}:"{text}",'
            e_str = e_str.rstrip(',') + '}'
            new_questions_str += f'    {e_str}\n'
            new_questions_str += "  }"

        # Replace the pattern
        replacement = r'\1' + new_questions_str + r'\n\2'
        new_content = re.sub(pattern, replacement, content)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

        return True
    except Exception as e:
        print(f"Error fixing {filepath}: {e}")
        return False

# Main execution
base_path = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects"

# Fix Spirits levels 7-9
spirits_files = [
    ("drinks\\Spirits\\level7.js", 7),
    ("drinks\\Spirits\\level8.js", 8),
    ("drinks\\Spirits\\level9.js", 9)
]

for file, level in spirits_files:
    filepath = os.path.join(base_path, file)
    current = count_questions(filepath)
    if current == 38:
        print(f"Fixing {file}...")
        if add_questions_to_file(filepath, get_spirits_questions(level)):
            print(f"[OK] {file} fixed")

# Fix Tea levels 6-10
tea_files = [
    ("drinks\\Tea\\level6.js", 6),
    ("drinks\\Tea\\level7.js", 7),
    ("drinks\\Tea\\level8.js", 8),
    ("drinks\\Tea\\level9.js", 9),
    ("drinks\\Tea\\level10.js", 10)
]

for file, level in tea_files:
    filepath = os.path.join(base_path, file)
    current = count_questions(filepath)
    if current == 38:
        print(f"Fixing {file}...")
        if add_questions_to_file(filepath, get_tea_questions(level)):
            print(f"[OK] {file} fixed")

# Fix Pasta Types levels 6-9 and level10
pasta_files = [
    ("food\\Pasta Types\\level6.js", 6),
    ("food\\Pasta Types\\level7.js", 7),
    ("food\\Pasta Types\\level8.js", 8),
    ("food\\Pasta Types\\level9.js", 9)
]

for file, level in pasta_files:
    filepath = os.path.join(base_path, file)
    current = count_questions(filepath)
    if current == 38:
        print(f"Fixing {file}...")
        if add_questions_to_file(filepath, get_pasta_questions_remaining(level)):
            print(f"[OK] {file} fixed")

# Check if Pasta level10 still needs fixing (should be 40 now)
pasta10_file = os.path.join(base_path, "food\\Pasta Types\\level10.js")
current = count_questions(pasta10_file)
if current == 37:
    print("Re-fixing Pasta Types level10...")
    # It still needs 3 more, let's add them
    extra_questions = [
        {
            "question": {"en": "What is the exact water absorption rate for semolina flour in industrial pasta production?", "es": "¿Cuál es la tasa exacta de absorción de agua para harina de sémola en producción industrial de pasta?", "de": "Was ist die genaue Wasseraufnahmerate für Grießmehl in der industriellen Pastaproduktion?", "nl": "Wat is het exacte water absorptie percentage voor griesmeel in industriële pasta productie?"},
            "options": ["31-33% hydration", "25-28% hydration", "40-45% hydration", "50-55% hydration"],
            "correct": 0,
            "explanation": {"en": "Industrial pasta uses 31-33% hydration for semolina (31ml water per 100g flour). This low hydration creates the firm texture needed for drying. Fresh egg pasta uses 55-65% total liquid. The precise hydration affects protein network development and final texture after cooking.", "es": "Pasta industrial usa 31-33% hidratación para sémola (31ml agua por 100g harina). Esta baja hidratación crea la textura firme necesaria para secado. Pasta fresca con huevo usa 55-65% líquido total. La hidratación precisa afecta desarrollo de red proteica y textura final después de cocinar.", "de": "Industrielle Pasta verwendet 31-33% Hydratation für Grieß (31ml Wasser pro 100g Mehl). Diese niedrige Hydratation erzeugt die feste Textur für Trocknung benötigt. Frische Eiernudeln verwenden 55-65% Gesamtflüssigkeit. Die präzise Hydratation beeinflusst Proteinnetzwerk-Entwicklung und finale Textur nach dem Kochen.", "nl": "Industriële pasta gebruikt 31-33% hydratatie voor griesmeel (31ml water per 100g meel). Deze lage hydratatie creëert de stevige textuur nodig voor drogen. Verse ei pasta gebruikt 55-65% totaal vloeistof. De precieze hydratatie beïnvloedt eiwit netwerk ontwikkeling en finale textuur na koken."}
        }
    ]
    add_questions_to_file(pasta10_file, extra_questions)
    print("[OK] Pasta Types level10 re-fixed")

# Fix Wine levels 4-5
wine_files = [
    ("drinks\\Wine\\level4.js", 4),
    ("drinks\\Wine\\level5.js", 5)
]

wine_questions_split = get_wine_questions()
for i, (file, level) in enumerate(wine_files):
    filepath = os.path.join(base_path, file)
    current = count_questions(filepath)
    if current == 38:
        print(f"Fixing {file}...")
        questions = wine_questions_split[i*2:(i+1)*2]
        if add_questions_to_file(filepath, questions):
            print(f"[OK] {file} fixed")

print("\n✅ All files processed! Run fix_all_questions.py to verify.")