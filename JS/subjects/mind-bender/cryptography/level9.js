window.addLevel('mind-bender/cryptography', {
  name: {
    en: "Advanced Cryptanalysis and Modern Attacks",
    es: "Criptoanálisis Avanzado y Ataques Modernos",
    de: "Erweiterte Kryptoanalyse und Moderne Angriffe",
    nl: "Geavanceerde Cryptanalyse en Moderne Aanvallen"
  },
  questions: [
    {
      question: {
        en: "What is algebraic cryptanalysis?",
        es: "¿Qué es el criptoanálisis algebraico?",
        de: "Was ist algebraische Kryptoanalyse?",
        nl: "Wat is algebraïsche cryptanalyse?"
      },
      options: [
        { en: "Analyzing algebraic structures in mathematics", es: "Analizar estructuras algebraicas en matemáticas", de: "Analyse algebraischer Strukturen in der Mathematik", nl: "Het analyseren van algebraïsche structuren in wiskunde" },
        { en: "Expressing cryptographic algorithms as algebraic equations to find vulnerabilities", es: "Expresar algoritmos criptográficos como ecuaciones algebraicas para encontrar vulnerabilidades", de: "Ausdrücken kryptographischer Algorithmen als algebraische Gleichungen zur Schwachstellenfindung", nl: "Het uitdrukken van cryptografische algoritmen als algebraïsche vergelijkingen om kwetsbaarheden te vinden" },
        { en: "Using algebra to generate random numbers", es: "Usar álgebra para generar números aleatorios", de: "Verwendung von Algebra zur Erzeugung von Zufallszahlen", nl: "Het gebruik van algebra om willekeurige nummers te genereren" },
        { en: "Mathematical proof of cryptographic security", es: "Prueba matemática de seguridad criptográfica", de: "Mathematischer Beweis kryptographischer Sicherheit", nl: "Wiskundig bewijs van cryptografische beveiliging" }
      ],
      correct: 1,
      explanation: {
        en: "Algebraic cryptanalysis models cryptographic algorithms as systems of algebraic equations, then attempts to solve these systems to recover secret keys or break the cipher.",
        es: "El criptoanálisis algebraico modela algoritmos criptográficos como sistemas de ecuaciones algebraicas, luego intenta resolver estos sistemas para recuperar claves secretas o romper el cifrado.",
        de: "Algebraische Kryptoanalyse modelliert kryptographische Algorithmen als Systeme algebraischer Gleichungen und versucht dann, diese Systeme zu lösen, um geheime Schlüssel wiederherzustellen oder die Chiffre zu brechen.",
        nl: "Algebraïsche cryptanalyse modelleert cryptografische algoritmen als systemen van algebraïsche vergelijkingen, en probeert dan deze systemen op te lossen om geheime sleutels te herstellen of de cipher te breken."
      }
    },
    {
      question: {
        en: "What is a related-key attack?",
        es: "¿Qué es un ataque de clave relacionada?",
        de: "Was ist ein Related-Key-Angriff?",
        nl: "Wat is een gerelateerde-sleutel aanval?"
      },
      options: [
        { en: "Attack using keys from the same family", es: "Ataque usando claves de la misma familia", de: "Angriff mit Schlüsseln aus derselben Familie", nl: "Aanval met sleutels uit dezelfde familie" },
        { en: "Attack that exploits mathematical relationships between different keys", es: "Ataque que explota relaciones matemáticas entre diferentes claves", de: "Angriff, der mathematische Beziehungen zwischen verschiedenen Schlüsseln ausnutzt", nl: "Aanval die wiskundige relaties tussen verschillende sleutels benut" },
        { en: "Attack on key exchange protocols", es: "Ataque a protocolos de intercambio de claves", de: "Angriff auf Schlüsselaustauschprotokolle", nl: "Aanval op sleutel uitwisseling protocollen" },
        { en: "Attack using backup keys", es: "Ataque usando claves de respaldo", de: "Angriff mit Backup-Schlüsseln", nl: "Aanval met backup sleutels" }
      ],
      correct: 1,
      explanation: {
        en: "A related-key attack exploits known mathematical relationships between encryption keys to break the cipher, even when individual keys might be secure.",
        es: "Un ataque de clave relacionada explota relaciones matemáticas conocidas entre claves de cifrado para romper el cifrado, incluso cuando las claves individuales podrían ser seguras.",
        de: "Ein Related-Key-Angriff nutzt bekannte mathematische Beziehungen zwischen Verschlüsselungsschlüsseln aus, um die Chiffre zu brechen, auch wenn einzelne Schlüssel sicher sein könnten.",
        nl: "Een gerelateerde-sleutel aanval benut bekende wiskundige relaties tussen encryptie sleutels om de cipher te breken, zelfs wanneer individuele sleutels veilig zouden kunnen zijn."
      }
    },
    {
      question: {
        en: "What is a slide attack in cryptanalysis?",
        es: "¿Qué es un ataque deslizante en criptoanálisis?",
        de: "Was ist ein Slide-Angriff in der Kryptoanalyse?",
        nl: "Wat is een slide aanval in cryptanalyse?"
      },
      options: [
        { en: "Physical attack on sliding mechanisms", es: "Ataque físico en mecanismos deslizantes", de: "Physischer Angriff auf Schiebemechanismen", nl: "Fysieke aanval op schuif mechanismen" },
        { en: "Attack that exploits self-similarity in cipher structure", es: "Ataque que explota auto-similitud en estructura de cifrado", de: "Angriff, der Selbstähnlichkeit in der Chiffrestruktur ausnutzt", nl: "Aanval die zelf-gelijkenis in cipher structuur benut" },
        { en: "Gradually reducing key space", es: "Reducir gradualmente el espacio de claves", de: "Gradueller Schlüsselraum-Reduktion", nl: "Geleidelijk verminderen van sleutel ruimte" },
        { en: "Moving attack patterns across data", es: "Mover patrones de ataque a través de datos", de: "Verschieben von Angriffsmustern über Daten", nl: "Het verplaatsen van aanvals patronen over data" }
      ],
      correct: 1,
      explanation: {
        en: "A slide attack exploits ciphers with identical or similar round functions by finding pairs of plaintexts that 'slide' against each other through the cipher structure.",
        es: "Un ataque deslizante explota cifrados con funciones de ronda idénticas o similares encontrando pares de textos planos que 'se deslizan' uno contra el otro a través de la estructura del cifrado.",
        de: "Ein Slide-Angriff nutzt Chiffren mit identischen oder ähnlichen Rundenfunktionen aus, indem er Klartextpaare findet, die durch die Chiffrestruktur gegeneinander 'gleiten'.",
        nl: "Een slide aanval benut ciphers met identieke of vergelijkbare ronde functies door paren van plainteksten te vinden die tegen elkaar 'schuiven' door de cipher structuur."
      }
    },
    {
      question: {
        en: "What is impossible differential cryptanalysis?",
        es: "¿Qué es el criptoanálisis diferencial imposible?",
        de: "Was ist unmögliche Differentialkryptoanalyse?",
        nl: "Wat is onmogelijke differentiële cryptanalyse?"
      },
      options: [
        { en: "Differential analysis that cannot be performed", es: "Análisis diferencial que no puede realizarse", de: "Differentialanalyse, die nicht durchgeführt werden kann", nl: "Differentiële analyse die niet kan worden uitgevoerd" },
        { en: "Using differentials that cannot occur to eliminate wrong key guesses", es: "Usar diferenciales que no pueden ocurrir para eliminar conjeturas de clave incorrectas", de: "Verwendung von Differentialen, die nicht auftreten können, um falsche Schlüsselvermutugen zu eliminieren", nl: "Het gebruik van differentialen die niet kunnen voorkomen om verkeerde sleutel gissingen te elimineren" },
        { en: "Analysis of theoretical cipher weaknesses", es: "Análisis de debilidades teóricas de cifrado", de: "Analyse theoretischer Chiffreschwächen", nl: "Analyse van theoretische cipher zwakheden" },
        { en: "Differential attacks on quantum computers", es: "Ataques diferenciales en computadoras cuánticas", de: "Differentielle Angriffe auf Quantencomputern", nl: "Differentiële aanvallen op quantum computers" }
      ],
      correct: 1,
      explanation: {
        en: "Impossible differential cryptanalysis uses differential paths that theoretically cannot occur in the cipher to eliminate incorrect key candidates and narrow down the search space.",
        es: "El criptoanálisis diferencial imposible usa caminos diferenciales que teóricamente no pueden ocurrir en el cifrado para eliminar candidatos de clave incorrectos y reducir el espacio de búsqueda.",
        de: "Unmögliche Differentialkryptoanalyse verwendet Differentialpfade, die theoretisch in der Chiffre nicht auftreten können, um falsche Schlüsselkandidaten zu eliminieren und den Suchraum einzugrenzen.",
        nl: "Onmogelijke differentiële cryptanalyse gebruikt differentiële paden die theoretisch niet kunnen voorkommen in de cipher om incorrecte sleutel kandidaten te elimineren en de zoekruimte te verkleinen."
      }
    },
    {
      question: {
        en: "What is integral cryptanalysis?",
        es: "¿Qué es el criptoanálisis integral?",
        de: "Was ist Integralkryptoanalyse?",
        nl: "Wat is integrale cryptanalyse?"
      },
      options: [
        { en: "Analysis using mathematical integration", es: "Análisis usando integración matemática", de: "Analyse mittels mathematischer Integration", nl: "Analyse met wiskundige integratie" },
        { en: "Attack based on studying sums of ciphertext bytes over chosen plaintexts", es: "Ataque basado en estudiar sumas de bytes de texto cifrado sobre textos planos elegidos", de: "Angriff basierend auf der Untersuchung von Summen von Chiffretextbytes über gewählte Klartexte", nl: "Aanval gebaseerd op het bestuderen van sommen van ciphertext bytes over gekozen plainteksten" },
        { en: "Complete analysis of all cipher components", es: "Análisis completo de todos los componentes del cifrado", de: "Vollständige Analyse aller Chiffrekomponenten", nl: "Complete analyse van alle cipher componenten" },
        { en: "Integrated approach to cryptanalysis", es: "Enfoque integrado al criptoanálisis", de: "Integrierter Ansatz zur Kryptoanalyse", nl: "Geïntegreerde benadering van cryptanalyse" }
      ],
      correct: 1,
      explanation: {
        en: "Integral cryptanalysis (also called square attack) examines the sum or XOR of specific byte positions across a set of chosen plaintexts to find patterns that reveal key information.",
        es: "El criptoanálisis integral (también llamado ataque cuadrado) examina la suma o XOR de posiciones específicas de bytes a través de un conjunto de textos planos elegidos para encontrar patrones que revelen información de clave.",
        de: "Integralkryptoanalyse (auch Square-Angriff genannt) untersucht die Summe oder XOR spezifischer Byte-Positionen über eine Menge gewählter Klartexte, um Muster zu finden, die Schlüsselinformationen preisgeben.",
        nl: "Integrale cryptanalyse (ook square attack genoemd) onderzoekt de som of XOR van specifieke byte posities over een set van gekozen plainteksten om patronen te vinden die sleutel informatie onthullen."
      }
    },
    {
      question: {
        en: "What is a meet-in-the-middle attack?",
        es: "¿Qué es un ataque de encuentro en el medio?",
        de: "Was ist ein Meet-in-the-Middle-Angriff?",
        nl: "Wat is een meet-in-the-middle aanval?"
      },
      options: [
        { en: "Attack during key exchange", es: "Ataque durante intercambio de claves", de: "Angriff während Schlüsselaustausch", nl: "Aanval tijdens sleutel uitwisseling" },
        { en: "Computing encryption from both ends and finding matches in the middle", es: "Calcular cifrado desde ambos extremos y encontrar coincidencias en el medio", de: "Verschlüsselung von beiden Enden berechnen und Übereinstimmungen in der Mitte finden", nl: "Encryptie berekenen vanaf beide kanten en matches vinden in het midden" },
        { en: "Intercepting communications midway", es: "Interceptar comunicaciones a mitad de camino", de: "Kommunikation auf halbem Weg abfangen", nl: "Communicatie halverwege onderscheppen" },
        { en: "Compromise between two attack methods", es: "Compromiso entre dos métodos de ataque", de: "Kompromiss zwischen zwei Angriffsmethoden", nl: "Compromis tussen twee aanvals methoden" }
      ],
      correct: 1,
      explanation: {
        en: "A meet-in-the-middle attack computes possible values from both the plaintext (forward) and ciphertext (backward) directions, then looks for matches in the middle to reduce the search space.",
        es: "Un ataque de encuentro en el medio calcula valores posibles desde ambas direcciones del texto plano (hacia adelante) y texto cifrado (hacia atrás), luego busca coincidencias en el medio para reducir el espacio de búsqueda.",
        de: "Ein Meet-in-the-Middle-Angriff berechnet mögliche Werte sowohl aus der Klartext- (Vorwärts-) als auch aus der Chiffretext- (Rückwärts-)Richtung und sucht dann nach Übereinstimmungen in der Mitte, um den Suchraum zu reduzieren.",
        nl: "Een meet-in-the-middle aanval berekent mogelijke waarden vanuit zowel de plaintext (voorwaarts) als ciphertext (achterwaarts) richtingen, en zoekt dan naar matches in het midden om de zoekruimte te verminderen."
      }
    },
    {
      question: {
        en: "What is boomerang cryptanalysis?",
        es: "¿Qué es el criptoanálisis boomerang?",
        de: "Was ist Boomerang-Kryptoanalyse?",
        nl: "Wat is boomerang cryptanalyse?"
      },
      options: [
        { en: "Attack that returns to the starting point", es: "Ataque que regresa al punto de inicio", de: "Angriff, der zum Ausgangspunkt zurückkehrt", nl: "Aanval die terugkeert naar het startpunt" },
        { en: "Combining two short differential paths to attack more rounds", es: "Combinar dos caminos diferenciales cortos para atacar más rondas", de: "Kombination zweier kurzer Differentialpfade zum Angriff auf mehr Runden", nl: "Het combineren van twee korte differentiële paden om meer rondes aan te vallen" },
        { en: "Bouncing signals off encryption devices", es: "Rebotar señales en dispositivos de cifrado", de: "Signale von Verschlüsselungsgeräten abprallen lassen", nl: "Signalen laten afketsen van encryptie apparaten" },
        { en: "Circular key schedule analysis", es: "Análisis de programación de claves circular", de: "Zirkuläre Schlüsselplan-Analyse", nl: "Circulaire sleutel schema analyse" }
      ],
      correct: 1,
      explanation: {
        en: "Boomerang cryptanalysis combines two short differential characteristics to create longer, more effective attacks by using a 'boomerang' path through the cipher.",
        es: "El criptoanálisis boomerang combina dos características diferenciales cortas para crear ataques más largos y efectivos usando un camino 'boomerang' a través del cifrado.",
        de: "Boomerang-Kryptoanalyse kombiniert zwei kurze Differentialcharakteristiken, um längere, effektivere Angriffe zu erstellen, indem ein 'Boomerang'-Pfad durch die Chiffre verwendet wird.",
        nl: "Boomerang cryptanalyse combineert twee korte differentiële karakteristieken om langere, meer effectieve aanvallen te creëren door een 'boomerang' pad door de cipher te gebruiken."
      }
    },
    {
      question: {
        en: "What is truncated differential cryptanalysis?",
        es: "¿Qué es el criptoanálisis diferencial truncado?",
        de: "Was ist verkürzte Differentialkryptoanalyse?",
        nl: "Wat is afgekapte differentiële cryptanalyse?"
      },
      options: [
        { en: "Shortened version of differential analysis", es: "Versión acortada del análisis diferencial", de: "Verkürzte Version der Differentialanalyse", nl: "Verkorte versie van differentiële analyse" },
        { en: "Using partial differences instead of complete byte differences", es: "Usar diferencias parciales en lugar de diferencias completas de bytes", de: "Verwendung partieller Differenzen anstatt vollständiger Byte-Differenzen", nl: "Het gebruik van gedeeltelijke verschillen in plaats van complete byte verschillen" },
        { en: "Analysis of incomplete ciphertext", es: "Análisis de texto cifrado incompleto", de: "Analyse unvollständiger Chiffretexte", nl: "Analyse van onvolledige ciphertext" },
        { en: "Cutting off parts of the encryption process", es: "Cortar partes del proceso de cifrado", de: "Abschneiden von Teilen des Verschlüsselungsprozesses", nl: "Het afsnijden van delen van het encryptie proces" }
      ],
      correct: 1,
      explanation: {
        en: "Truncated differential cryptanalysis considers only partial bit differences rather than complete byte values, allowing analysis when full differential patterns are not available.",
        es: "El criptoanálisis diferencial truncado considera solo diferencias parciales de bits en lugar de valores completos de bytes, permitiendo análisis cuando no están disponibles patrones diferenciales completos.",
        de: "Verkürzte Differentialkryptoanalyse berücksichtigt nur partielle Bit-Differenzen anstatt vollständiger Byte-Werte und ermöglicht Analyse, wenn vollständige Differentialmuster nicht verfügbar sind.",
        nl: "Afgekapte differentiële cryptanalyse beschouwt alleen gedeeltelijke bit verschillen in plaats van complete byte waarden, wat analyse mogelijk maakt wanneer volledige differentiële patronen niet beschikbaar zijn."
      }
    },
    {
      question: {
        en: "What is higher-order differential cryptanalysis?",
        es: "¿Qué es el criptoanálisis diferencial de orden superior?",
        de: "Was ist höherordentliche Differentialkryptoanalyse?",
        nl: "Wat is hogere-orde differentiële cryptanalyse?"
      },
      options: [
        { en: "More advanced differential techniques", es: "Técnicas diferenciales más avanzadas", de: "Fortgeschrittenere Differentialtechniken", nl: "Meer geavanceerde differentiële technieken" },
        { en: "Using derivatives of multiple orders to analyze nonlinear components", es: "Usar derivadas de múltiples órdenes para analizar componentes no lineales", de: "Verwendung von Ableitungen mehrerer Ordnungen zur Analyse nichtlinearer Komponenten", nl: "Het gebruik van afgeleiden van meerdere ordes om niet-lineaire componenten te analyseren" },
        { en: "Analysis requiring administrative privileges", es: "Análisis que requiere privilegios administrativos", de: "Analyse, die Administratorrechte erfordert", nl: "Analyse die administratieve rechten vereist" },
        { en: "Differential analysis of management protocols", es: "Análisis diferencial de protocolos de gestión", de: "Differentialanalyse von Managementprotokollen", nl: "Differentiële analyse van beheer protocollen" }
      ],
      correct: 1,
      explanation: {
        en: "Higher-order differential cryptanalysis uses higher-order derivatives to analyze the algebraic structure of ciphers, particularly effective against highly nonlinear S-boxes.",
        es: "El criptoanálisis diferencial de orden superior usa derivadas de orden superior para analizar la estructura algebraica de cifrados, particularmente efectivo contra S-boxes altamente no lineales.",
        de: "Höherordentliche Differentialkryptoanalyse verwendet höherordentliche Ableitungen zur Analyse der algebraischen Struktur von Chiffren, besonders effektiv gegen hochgradig nichtlineare S-Boxen.",
        nl: "Hogere-orde differentiële cryptanalyse gebruikt hogere-orde afgeleiden om de algebraïsche structuur van ciphers te analyseren, bijzonder effectief tegen sterk niet-lineaire S-boxen."
      }
    },
    {
      question: {
        en: "What is interpolation attack in cryptanalysis?",
        es: "¿Qué es el ataque de interpolación en criptoanálisis?",
        de: "Was ist Interpolationsangriff in der Kryptoanalyse?",
        nl: "Wat is interpolatie aanval in cryptanalyse?"
      },
      options: [
        { en: "Attack using data interpolation techniques", es: "Ataque usando técnicas de interpolación de datos", de: "Angriff mit Dateninterpolationstechniken", nl: "Aanval met data interpolatie technieken" },
        { en: "Expressing cipher as low-degree polynomial to recover keys", es: "Expresar cifrado como polinomio de bajo grado para recuperar claves", de: "Chiffre als Polynom niedrigen Grades ausdrücken zur Schlüsselwiederherstellung", nl: "Cipher uitdrukken als laag-graads polynoom om sleutels te herstellen" },
        { en: "Inserting data between encryption rounds", es: "Insertar datos entre rondas de cifrado", de: "Daten zwischen Verschlüsselungsrunden einfügen", nl: "Data invoegen tussen encryptie rondes" },
        { en: "Estimating missing ciphertext parts", es: "Estimar partes faltantes del texto cifrado", de: "Schätzung fehlender Chiffretextteile", nl: "Het schatten van ontbrekende ciphertext delen" }
      ],
      correct: 1,
      explanation: {
        en: "Interpolation attack expresses the entire cipher as a polynomial of low degree over a finite field, then uses known plaintext-ciphertext pairs to solve for the key coefficients.",
        es: "El ataque de interpolación expresa todo el cifrado como un polinomio de grado bajo sobre un campo finito, luego usa pares conocidos de texto plano-texto cifrado para resolver los coeficientes de clave.",
        de: "Interpolationsangriff drückt die gesamte Chiffre als Polynom niedrigen Grades über einem endlichen Körper aus und verwendet dann bekannte Klartext-Chiffretext-Paare zur Lösung der Schlüsselkoeffizienten.",
        nl: "Interpolatie aanval drukt de hele cipher uit als een polynoom van lage graad over een eindig veld, en gebruikt dan bekende plaintext-ciphertext paren om de sleutel coëfficiënten op te lossen."
      }
    },
    {
      question: {
        en: "What is cube attack in cryptanalysis?",
        es: "¿Qué es el ataque cúbico en criptoanálisis?",
        de: "Was ist Cube-Angriff in der Kryptoanalyse?",
        nl: "Wat is kubus aanval in cryptanalyse?"
      },
      options: [
        { en: "Attack using cubic equations", es: "Ataque usando ecuaciones cúbicas", de: "Angriff mit kubischen Gleichungen", nl: "Aanval met kubieke vergelijkingen" },
        { en: "Algebraic technique that analyzes cipher by summing over subcubes of input space", es: "Técnica algebraica que analiza cifrado sumando sobre subcubos del espacio de entrada", de: "Algebraische Technik, die Chiffre durch Summierung über Subwürfel des Eingaberaums analysiert", nl: "Algebraïsche techniek die cipher analyseert door som te nemen over subcubussen van invoer ruimte" },
        { en: "Three-dimensional cryptographic analysis", es: "Análisis criptográfico tridimensional", de: "Dreidimensionale kryptographische Analyse", nl: "Driedimensionale cryptografische analyse" },
        { en: "Attack on block ciphers with cubic structure", es: "Ataque a cifrados de bloque con estructura cúbica", de: "Angriff auf Blockchiffren mit kubischer Struktur", nl: "Aanval op blok ciphers met kubieke structuur" }
      ],
      correct: 1,
      explanation: {
        en: "Cube attack is an algebraic technique that recovers secret keys by analyzing the algebraic normal form of the cipher through summation over carefully chosen subcubes of the input variables.",
        es: "El ataque cúbico es una técnica algebraica que recupera claves secretas analizando la forma normal algebraica del cifrado a través de sumación sobre subcubos cuidadosamente elegidos de las variables de entrada.",
        de: "Cube-Angriff ist eine algebraische Technik, die geheime Schlüssel durch Analyse der algebraischen Normalform der Chiffre mittels Summierung über sorgfältig gewählte Subwürfel der Eingabevariablen wiederherstellt.",
        nl: "Kubus aanval is een algebraïsche techniek die geheime sleutels herstelt door de algebraïsche normaalvorm van de cipher te analyseren door sommatie over zorgvuldig gekozen subcubussen van de invoer variabelen."
      }
    },
    {
      question: {
        en: "What is rotational cryptanalysis?",
        es: "¿Qué es el criptoanálisis rotacional?",
        de: "Was ist Rotationskryptoanalyse?",
        nl: "Wat is rotationele cryptanalyse?"
      },
      options: [
        { en: "Analysis of circular shift operations", es: "Análisis de operaciones de desplazamiento circular", de: "Analyse von zirkulären Verschiebeoperationen", nl: "Analyse van circulaire verschuif operaties" },
        { en: "Exploiting rotational symmetries in cipher design", es: "Explotar simetrías rotacionales en diseño de cifrado", de: "Ausnutzung rotationaler Symmetrien im Chiffre-Design", nl: "Het benutten van rotationele symmetrieën in cipher ontwerp" },
        { en: "Rotating cryptographic keys", es: "Rotar claves criptográficas", de: "Rotation kryptographischer Schlüssel", nl: "Het roteren van cryptografische sleutels" },
        { en: "Analysis of encryption in different orientations", es: "Análisis de cifrado en diferentes orientaciones", de: "Analyse der Verschlüsselung in verschiedenen Orientierungen", nl: "Analyse van encryptie in verschillende oriëntaties" }
      ],
      correct: 1,
      explanation: {
        en: "Rotational cryptanalysis exploits rotational symmetries where if (x,y) produces certain output, then rotated versions (x≪r, y≪r) produce predictably related outputs.",
        es: "El criptoanálisis rotacional explota simetrías rotacionales donde si (x,y) produce cierta salida, entonces versiones rotadas (x≪r, y≪r) producen salidas predeciblemente relacionadas.",
        de: "Rotationskryptoanalyse nutzt rotationelle Symmetrien aus, bei denen, wenn (x,y) eine bestimmte Ausgabe erzeugt, dann rotierte Versionen (x≪r, y≪r) vorhersagbar verwandte Ausgaben produzieren.",
        nl: "Rotationele cryptanalyse benut rotationele symmetrieën waarbij als (x,y) bepaalde output produceert, dan geroteerde versies (x≪r, y≪r) voorspelbaar gerelateerde outputs produceren."
      }
    },
    {
      question: {
        en: "What is a zero-correlation attack?",
        es: "¿Qué es un ataque de correlación cero?",
        de: "Was ist ein Zero-Korrelationsangriff?",
        nl: "Wat is een nul-correlatie aanval?"
      },
      options: [
        { en: "Attack with no statistical correlation", es: "Ataque sin correlación estadística", de: "Angriff ohne statistische Korrelation", nl: "Aanval zonder statistische correlatie" },
        { en: "Using linear approximations with correlation exactly zero", es: "Usar aproximaciones lineales con correlación exactamente cero", de: "Verwendung linearer Approximationen mit Korrelation genau null", nl: "Het gebruik van lineaire benaderingen met correlatie exact nul" },
        { en: "Attack that eliminates all correlations", es: "Ataque que elimina todas las correlaciones", de: "Angriff, der alle Korrelationen eliminiert", nl: "Aanval die alle correlaties elimineert" },
        { en: "Uncorrelated key recovery method", es: "Método de recuperación de claves no correlacionado", de: "Unkorrelierte Schlüsselwiederherstellungsmethode", nl: "Ongecorreleerde sleutel herstel methode" }
      ],
      correct: 1,
      explanation: {
        en: "Zero-correlation attack uses linear approximations that have correlation exactly zero for the correct key, allowing key recovery by identifying when this property is violated.",
        es: "El ataque de correlación cero usa aproximaciones lineales que tienen correlación exactamente cero para la clave correcta, permitiendo recuperación de clave identificando cuándo esta propiedad es violada.",
        de: "Zero-Korrelationsangriff verwendet lineare Approximationen, die für den korrekten Schlüssel eine Korrelation von genau null haben, wodurch Schlüsselwiederherstellung durch Identifizierung der Verletzung dieser Eigenschaft ermöglicht wird.",
        nl: "Nul-correlatie aanval gebruikt lineaire benaderingen die correlatie exact nul hebben voor de juiste sleutel, waardoor sleutel herstel mogelijk wordt door te identificeren wanneer deze eigenschap wordt geschonden."
      }
    },
    {
      question: {
        en: "What is multidimensional linear cryptanalysis?",
        es: "¿Qué es el criptoanálisis lineal multidimensional?",
        de: "Was ist mehrdimensionale lineare Kryptoanalyse?",
        nl: "Wat is multidimensionale lineaire cryptanalyse?"
      },
      options: [
        { en: "Linear analysis in multiple coordinate systems", es: "Análisis lineal en múltiples sistemas de coordenadas", de: "Lineare Analyse in mehreren Koordinatensystemen", nl: "Lineaire analyse in meerdere coördinaat systemen" },
        { en: "Using multiple linear approximations simultaneously for improved attack", es: "Usar múltiples aproximaciones lineales simultáneamente para ataque mejorado", de: "Verwendung mehrerer linearer Approximationen gleichzeitig für verbesserten Angriff", nl: "Het gebruik van meerdere lineaire benaderingen tegelijkertijd voor verbeterde aanval" },
        { en: "Analysis of multi-layer encryption", es: "Análisis de cifrado multicapa", de: "Analyse mehrstufiger Verschlüsselung", nl: "Analyse van meerlaagse encryptie" },
        { en: "Linear cryptanalysis with vector operations", es: "Criptoanálisis lineal con operaciones vectoriales", de: "Lineare Kryptoanalyse mit Vektoroperationen", nl: "Lineaire cryptanalyse met vector operaties" }
      ],
      correct: 1,
      explanation: {
        en: "Multidimensional linear cryptanalysis combines multiple linear approximations to extract more information about the key than would be possible using individual approximations separately.",
        es: "El criptoanálisis lineal multidimensional combina múltiples aproximaciones lineales para extraer más información sobre la clave de lo que sería posible usando aproximaciones individuales por separado.",
        de: "Mehrdimensionale lineare Kryptoanalyse kombiniert mehrere lineare Approximationen, um mehr Informationen über den Schlüssel zu extrahieren, als mit individuellen Approximationen separat möglich wäre.",
        nl: "Multidimensionale lineaire cryptanalyse combineert meerdere lineaire benaderingen om meer informatie over de sleutel te extraheren dan mogelijk zou zijn met individuele benaderingen afzonderlijk."
      }
    },
    {
      question: {
        en: "What is statistical saturation attack?",
        es: "¿Qué es el ataque de saturación estadística?",
        de: "Was ist statistischer Sättigungsangriff?",
        nl: "Wat is statistische verzadiging aanval?"
      },
      options: [
        { en: "Overwhelming systems with statistical data", es: "Abrumar sistemas con datos estadísticos", de: "Systeme mit statistischen Daten überlasten", nl: "Systemen overweldigen met statistische data" },
        { en: "Using statistical properties to determine when enough data has been collected", es: "Usar propiedades estadísticas para determinar cuándo se han recopilado suficientes datos", de: "Verwendung statistischer Eigenschaften zur Bestimmung, wann genügend Daten gesammelt wurden", nl: "Het gebruik van statistische eigenschappen om te bepalen wanneer genoeg data is verzameld" },
        { en: "Reaching maximum statistical significance", es: "Alcanzar significancia estadística máxima", de: "Erreichen maximaler statistischer Signifikanz", nl: "Het bereiken van maximale statistische significantie" },
        { en: "Attack that continues until statistical models are saturated", es: "Ataque que continúa hasta que los modelos estadísticos se saturan", de: "Angriff, der fortsetzt, bis statistische Modelle gesättigt sind", nl: "Aanval die voortduurt totdat statistische modellen verzadigd zijn" }
      ],
      correct: 1,
      explanation: {
        en: "Statistical saturation attack uses statistical tests to determine the optimal amount of data needed for cryptanalysis, balancing attack efficiency with data requirements.",
        es: "El ataque de saturación estadística usa pruebas estadísticas para determinar la cantidad óptima de datos necesarios para criptoanálisis, equilibrando eficiencia de ataque con requisitos de datos.",
        de: "Statistischer Sättigungsangriff verwendet statistische Tests zur Bestimmung der optimalen Datenmenge für Kryptoanalyse und balanciert Angriffseffizienz mit Datenanforderungen.",
        nl: "Statistische verzadiging aanval gebruikt statistische tests om de optimale hoeveelheid data te bepalen die nodig is voor cryptanalyse, waarbij aanvals efficiëntie wordt gebalanceerd met data vereisten."
      }
    },
    {
      question: {
        en: "What is guess-and-determine attack?",
        es: "¿Qué es el ataque de adivinar y determinar?",
        de: "Was ist Raten-und-Bestimmen-Angriff?",
        nl: "Wat is gis-en-bepaal aanval?"
      },
      options: [
        { en: "Random guessing of keys", es: "Adivinanza aleatoria de claves", de: "Zufälliges Raten von Schlüsseln", nl: "Willekeurig raden van sleutels" },
        { en: "Guessing part of the key and determining the rest through analysis", es: "Adivinar parte de la clave y determinar el resto a través de análisis", de: "Raten eines Teils des Schlüssels und Bestimmen des Rests durch Analyse", nl: "Gissen van een deel van de sleutel en de rest bepalen door analyse" },
        { en: "Trial and error cryptanalysis", es: "Criptoanálisis de ensayo y error", de: "Trial-and-Error-Kryptoanalyse", nl: "Trial-and-error cryptanalyse" },
        { en: "Determining attack feasibility", es: "Determinar factibilidad del ataque", de: "Bestimmung der Angriffsmachbarkeit", nl: "Het bepalen van aanvals haalbaarheid" }
      ],
      correct: 1,
      explanation: {
        en: "Guess-and-determine attack involves guessing a portion of the secret key or internal state, then using this guess to determine other parts through cryptanalytic techniques.",
        es: "El ataque de adivinar y determinar involucra adivinar una porción de la clave secreta o estado interno, luego usar esta suposición para determinar otras partes a través de técnicas criptoanalíticas.",
        de: "Raten-und-Bestimmen-Angriff beinhaltet das Raten eines Teils des geheimen Schlüssels oder internen Zustands und dann die Verwendung dieser Vermutung zur Bestimmung anderer Teile durch kryptoanalytische Techniken.",
        nl: "Gis-en-bepaal aanval houdt in het gissen van een gedeelte van de geheime sleutel of interne staat, en dan deze gissing gebruiken om andere delen te bepalen door cryptanalytische technieken."
      }
    },
    {
      question: {
        en: "What is partition cryptanalysis?",
        es: "¿Qué es el criptoanálisis de partición?",
        de: "Was ist Partitionskryptoanalyse?",
        nl: "Wat is partitie cryptanalyse?"
      },
      options: [
        { en: "Dividing ciphertext into parts", es: "Dividir texto cifrado en partes", de: "Aufteilen des Chiffretexts in Teile", nl: "Het verdelen van ciphertext in delen" },
        { en: "Partitioning plaintext space based on cipher properties to recover keys", es: "Particionar espacio de texto plano basado en propiedades de cifrado para recuperar claves", de: "Partitionierung des Klartextraums basierend auf Chiffre-Eigenschaften zur Schlüsselwiederherstellung", nl: "Het partitioneren van plaintext ruimte gebaseerd op cipher eigenschappen om sleutels te herstellen" },
        { en: "Separating different encryption algorithms", es: "Separar diferentes algoritmos de cifrado", de: "Trennung verschiedener Verschlüsselungsalgorithmen", nl: "Het scheiden van verschillende encryptie algoritmen" },
        { en: "Distributed cryptanalysis across partitions", es: "Criptoanálisis distribuido a través de particiones", de: "Verteilte Kryptoanalyse über Partitionen", nl: "Gedistribueerde cryptanalyse over partities" }
      ],
      correct: 1,
      explanation: {
        en: "Partition cryptanalysis divides the space of possible plaintexts into partitions based on some cryptographic property, then uses statistical analysis to determine which partition contains the correct plaintext.",
        es: "El criptoanálisis de partición divide el espacio de posibles textos planos en particiones basadas en alguna propiedad criptográfica, luego usa análisis estadístico para determinar qué partición contiene el texto plano correcto.",
        de: "Partitionskryptoanalyse teilt den Raum möglicher Klartexte in Partitionen basierend auf einer kryptographischen Eigenschaft auf und verwendet dann statistische Analyse zur Bestimmung, welche Partition den korrekten Klartext enthält.",
        nl: "Partitie cryptanalyse verdeelt de ruimte van mogelijke plainteksten in partities gebaseerd op een cryptografische eigenschap, en gebruikt dan statistische analyse om te bepalen welke partitie de juiste plaintext bevat."
      }
    },
    {
      question: {
        en: "What is mod n cryptanalysis?",
        es: "¿Qué es el criptoanálisis mod n?",
        de: "Was ist Mod-n-Kryptoanalyse?",
        nl: "Wat is mod n cryptanalyse?"
      },
      options: [
        { en: "Analysis modulo a specific number", es: "Análisis módulo un número específico", de: "Analyse modulo einer spezifischen Zahl", nl: "Analyse modulo een specifiek getal" },
        { en: "Analyzing cipher behavior for inputs congruent modulo small integers", es: "Analizar comportamiento de cifrado para entradas congruentes módulo enteros pequeños", de: "Analyse des Chiffre-Verhaltens für Eingaben kongruent modulo kleiner Ganzzahlen", nl: "Het analyseren van cipher gedrag voor inputs congruent modulo kleine gehele getallen" },
        { en: "Modular arithmetic in key recovery", es: "Aritmética modular en recuperación de claves", de: "Modulare Arithmetik bei Schlüsselwiederherstellung", nl: "Modulaire rekenkunde in sleutel herstel" },
        { en: "Analysis of modular exponentiation", es: "Análisis de exponenciación modular", de: "Analyse der modularen Exponentiation", nl: "Analyse van modulaire exponentiatie" }
      ],
      correct: 1,
      explanation: {
        en: "Mod n cryptanalysis studies how ciphers behave when inputs are congruent modulo small values, exploiting patterns that emerge from this mathematical relationship.",
        es: "El criptoanálisis mod n estudia cómo se comportan los cifrados cuando las entradas son congruentes módulo valores pequeños, explotando patrones que emergen de esta relación matemática.",
        de: "Mod-n-Kryptoanalyse untersucht, wie sich Chiffren verhalten, wenn Eingaben kongruent modulo kleiner Werte sind, und nutzt Muster aus, die aus dieser mathematischen Beziehung entstehen.",
        nl: "Mod n cryptanalyse bestudeert hoe ciphers zich gedragen wanneer inputs congruent zijn modulo kleine waarden, waarbij patronen worden benut die voortkomen uit deze wiskundige relatie."
      }
    },
    {
      question: {
        en: "What is the purpose of key scheduling in block ciphers from a cryptanalytic perspective?",
        es: "¿Cuál es el propósito de la programación de claves en cifrados de bloque desde una perspectiva criptoanalítica?",
        de: "Was ist der Zweck der Schlüsselplanung in Blockchiffren aus kryptoanalytischer Sicht?",
        nl: "Wat is het doel van sleutel planning in blok ciphers vanuit cryptanalytisch perspectief?"
      },
      options: [
        { en: "Organizing encryption keys", es: "Organizar claves de cifrado", de: "Organisation von Verschlüsselungsschlüsseln", nl: "Het organiseren van encryptie sleutels" },
        { en: "Key schedules can introduce weaknesses that enable related-key attacks", es: "Los horarios de claves pueden introducir debilidades que permiten ataques de clave relacionada", de: "Schlüsselpläne können Schwächen einführen, die Related-Key-Angriffe ermöglichen", nl: "Sleutel schema's kunnen zwakheden introduceren die gerelateerde-sleutel aanvallen mogelijk maken" },
        { en: "Improving encryption speed", es: "Mejorar velocidad de cifrado", de: "Verbesserung der Verschlüsselungsgeschwindigkeit", nl: "Het verbeteren van encryptie snelheid" },
        { en: "Reducing memory requirements", es: "Reducir requisitos de memoria", de: "Reduzierung der Speicheranforderungen", nl: "Het verminderen van geheugen vereisten" }
      ],
      correct: 1,
      explanation: {
        en: "From a cryptanalytic perspective, key schedules are important because weak key scheduling algorithms can create mathematical relationships between round keys that attackers can exploit in related-key attacks.",
        es: "Desde una perspectiva criptoanalítica, los horarios de claves son importantes porque algoritmos débiles de programación de claves pueden crear relaciones matemáticas entre claves de ronda que los atacantes pueden explotar en ataques de clave relacionada.",
        de: "Aus kryptoanalytischer Sicht sind Schlüsselpläne wichtig, weil schwache Schlüsselplanungsalgorithmen mathematische Beziehungen zwischen Rundenschlüsseln schaffen können, die Angreifer in Related-Key-Angriffen ausnutzen können.",
        nl: "Vanuit cryptanalytisch perspectief zijn sleutel schema's belangrijk omdat zwakke sleutel planning algoritmen wiskundige relaties tussen ronde sleutels kunnen creëren die aanvallers kunnen benutten in gerelateerde-sleutel aanvallen."
      }
    },
    {
      question: {
        en: "What is conditional differential cryptanalysis?",
        es: "¿Qué es el criptoanálisis diferencial condicional?",
        de: "Was ist bedingte Differentialkryptoanalyse?",
        nl: "Wat is conditionele differentiële cryptanalyse?"
      },
      options: [
        { en: "Differential analysis with conditions", es: "Análisis diferencial con condiciones", de: "Differentialanalyse mit Bedingungen", nl: "Differentiële analyse met condities" },
        { en: "Using differential characteristics that hold only under specific bit conditions", es: "Usar características diferenciales que se mantienen solo bajo condiciones específicas de bits", de: "Verwendung differentialer Charakteristiken, die nur unter spezifischen Bit-Bedingungen gelten", nl: "Het gebruik van differentiële karakteristieken die alleen gelden onder specifieke bit condities" },
        { en: "Analysis dependent on external conditions", es: "Análisis dependiente de condiciones externas", de: "Analyse abhängig von externen Bedingungen", nl: "Analyse afhankelijk van externe condities" },
        { en: "Conditional probability in differential attacks", es: "Probabilidad condicional en ataques diferenciales", de: "Bedingte Wahrscheinlichkeit in Differentialangriffen", nl: "Conditionele waarschijnlijkheid in differentiële aanvallen" }
      ],
      correct: 1,
      explanation: {
        en: "Conditional differential cryptanalysis uses differential characteristics that are valid only when certain bit conditions are satisfied, allowing for more precise and effective attacks.",
        es: "El criptoanálisis diferencial condicional usa características diferenciales que son válidas solo cuando ciertas condiciones de bits se satisfacen, permitiendo ataques más precisos y efectivos.",
        de: "Bedingte Differentialkryptoanalyse verwendet differentielle Charakteristiken, die nur dann gültig sind, wenn bestimmte Bit-Bedingungen erfüllt sind, wodurch präzisere und effektivere Angriffe ermöglicht werden.",
        nl: "Conditionele differentiële cryptanalyse gebruikt differentiële karakteristieken die alleen geldig zijn wanneer bepaalde bit condities worden voldaan, waardoor meer precieze en effectieve aanvallen mogelijk zijn."
      }
    },
    {
      question: {
        en: "What is the security margin in cryptographic algorithm design?",
        es: "¿Qué es el margen de seguridad en diseño de algoritmos criptográficos?",
        de: "Was ist die Sicherheitsmarge im kryptographischen Algorithmusdesign?",
        nl: "Wat is de veiligheids marge in cryptografisch algoritme ontwerp?"
      },
      options: [
        { en: "Safety factor in implementation", es: "Factor de seguridad en implementación", de: "Sicherheitsfaktor in der Implementierung", nl: "Veiligheidsfactor in implementatie" },
        { en: "Difference between number of rounds that can be attacked and total rounds", es: "Diferencia entre número de rondas que pueden ser atacadas y rondas totales", de: "Unterschied zwischen Anzahl der Runden, die angegriffen werden können, und Gesamtrunden", nl: "Verschil tussen aantal rondes dat kan worden aangevallen en totaal aantal rondes" },
        { en: "Error tolerance in cryptographic operations", es: "Tolerancia a errores en operaciones criptográficas", de: "Fehlertoleranz in kryptographischen Operationen", nl: "Fout tolerantie in cryptografische operaties" },
        { en: "Backup security mechanisms", es: "Mecanismos de seguridad de respaldo", de: "Backup-Sicherheitsmechanismen", nl: "Backup beveiligings mechanismen" }
      ],
      correct: 1,
      explanation: {
        en: "Security margin is the difference between the number of rounds that can be successfully attacked by the best known cryptanalytic techniques and the total number of rounds in the cipher.",
        es: "El margen de seguridad es la diferencia entre el número de rondas que pueden ser atacadas exitosamente por las mejores técnicas criptoanalíticas conocidas y el número total de rondas en el cifrado.",
        de: "Sicherheitsmarge ist der Unterschied zwischen der Anzahl der Runden, die von den besten bekannten kryptoanalytischen Techniken erfolgreich angegriffen werden können, und der Gesamtanzahl der Runden in der Chiffre.",
        nl: "Veiligheids marge is het verschil tussen het aantal rondes dat succesvol kan worden aangevallen door de beste bekende cryptanalytische technieken en het totale aantal rondes in de cipher."
      }
    },
    {
      question: {
        en: "What is the main goal of modern cryptanalytic research?",
        es: "¿Cuál es el objetivo principal de la investigación criptoanalítica moderna?",
        de: "Was ist das Hauptziel moderner kryptoanalytischer Forschung?",
        nl: "Wat is het hoofddoel van moderne cryptanalytische onderzoek?"
      },
      options: [
        { en: "Breaking all existing cryptographic systems", es: "Romper todos los sistemas criptográficos existentes", de: "Brechen aller existierenden kryptographischen Systeme", nl: "Het breken van alle bestaande cryptografische systemen" },
        { en: "Understanding security limits and improving cryptographic design", es: "Entender límites de seguridad y mejorar diseño criptográfico", de: "Verständnis von Sicherheitsgrenzen und Verbesserung des kryptographischen Designs", nl: "Het begrijpen van beveiligings limieten en het verbeteren van cryptografisch ontwerp" },
        { en: "Developing faster computers", es: "Desarrollar computadoras más rápidas", de: "Entwicklung schnellerer Computer", nl: "Het ontwikkelen van snellere computers" },
        { en: "Creating unbreakable codes", es: "Crear códigos irrompibles", de: "Erstellung unknackbarer Codes", nl: "Het creëren van onbreekbare codes" }
      ],
      correct: 1,
      explanation: {
        en: "Modern cryptanalytic research aims to understand the security boundaries of cryptographic systems, identify potential weaknesses, and provide feedback to improve the design of future cryptographic algorithms.",
        es: "La investigación criptoanalítica moderna busca entender las fronteras de seguridad de los sistemas criptográficos, identificar debilidades potenciales y proporcionar retroalimentación para mejorar el diseño de futuros algoritmos criptográficos.",
        de: "Moderne kryptoanalytische Forschung zielt darauf ab, die Sicherheitsgrenzen kryptographischer Systeme zu verstehen, potentielle Schwächen zu identifizieren und Feedback zur Verbesserung des Designs zukünftiger kryptographischer Algorithmen zu liefern.",
        nl: "Modern cryptanalytisch onderzoek wil de beveiligings grenzen van cryptografische systemen begrijpen, potentiële zwakheden identificeren, en feedback geven om het ontwerp van toekomstige cryptografische algoritmen te verbeteren."
      }
    },
    {
      question: {
        en: "What distinguishes practical cryptanalysis from theoretical cryptanalysis?",
        es: "¿Qué distingue el criptoanálisis práctico del criptoanálisis teórico?",
        de: "Was unterscheidet praktische von theoretischer Kryptoanalyse?",
        nl: "Wat onderscheidt praktische cryptanalyse van theoretische cryptanalyse?"
      },
      options: [
        { en: "Use of physical equipment versus mathematical proofs", es: "Uso de equipo físico versus pruebas matemáticas", de: "Verwendung physischer Ausrüstung versus mathematische Beweise", nl: "Gebruik van fysieke apparatuur versus wiskundige bewijzen" },
        { en: "Feasibility within realistic time and resource constraints", es: "Factibilidad dentro de limitaciones realistas de tiempo y recursos", de: "Durchführbarkeit innerhalb realistischer Zeit- und Ressourcenbeschränkungen", nl: "Haalbaarheid binnen realistische tijd en resource beperkingen" },
        { en: "Implementation in software versus hardware", es: "Implementación en software versus hardware", de: "Implementierung in Software versus Hardware", nl: "Implementatie in software versus hardware" },
        { en: "Academic research versus commercial application", es: "Investigación académica versus aplicación comercial", de: "Akademische Forschung versus kommerzielle Anwendung", nl: "Academisch onderzoek versus commerciële toepassing" }
      ],
      correct: 1,
      explanation: {
        en: "Practical cryptanalysis considers real-world constraints like computational resources, time limits, and data availability, while theoretical cryptanalysis focuses on mathematical feasibility regardless of practical limitations.",
        es: "El criptoanálisis práctico considera limitaciones del mundo real como recursos computacionales, límites de tiempo y disponibilidad de datos, mientras que el criptoanálisis teórico se enfoca en factibilidad matemática independientemente de limitaciones prácticas.",
        de: "Praktische Kryptoanalyse berücksichtigt reale Beschränkungen wie Rechenressourcen, Zeitlimits und Datenverfügbarkeit, während theoretische Kryptoanalyse sich auf mathematische Machbarkeit unabhängig von praktischen Limitierungen konzentriert.",
        nl: "Praktische cryptanalyse houdt rekening met echte-wereld beperkingen zoals computationele bronnen, tijd limieten, en data beschikbaarheid, terwijl theoretische cryptanalyse zich richt op wiskundige haalbaarheid ongeacht praktische beperkingen."
      }
    },
    {
      question: {
        en: "What is the significance of cryptanalytic complexity in algorithm evaluation?",
        es: "¿Cuál es la significancia de la complejidad criptoanalítica en evaluación de algoritmos?",
        de: "Was ist die Bedeutung kryptoanalytischer Komplexität in der Algorithmusbewertung?",
        nl: "Wat is de betekenis van cryptanalytische complexiteit in algoritme evaluatie?"
      },
      options: [
        { en: "It determines algorithm execution speed", es: "Determina velocidad de ejecución del algoritmo", de: "Es bestimmt die Algorithmus-Ausführungsgeschwindigkeit", nl: "Het bepaalt algoritme uitvoerings snelheid" },
        { en: "It measures the computational effort required to break the algorithm", es: "Mide el esfuerzo computacional requerido para romper el algoritmo", de: "Es misst den rechnerischen Aufwand, der zum Brechen des Algorithmus erforderlich ist", nl: "Het meet de computationele inspanning vereist om het algoritme te breken" },
        { en: "It indicates code complexity", es: "Indica complejidad del código", de: "Es zeigt Code-Komplexität an", nl: "Het geeft code complexiteit aan" },
        { en: "It shows memory requirements", es: "Muestra requisitos de memoria", de: "Es zeigt Speicheranforderungen", nl: "Het toont geheugen vereisten" }
      ],
      correct: 1,
      explanation: {
        en: "Cryptanalytic complexity quantifies the computational resources (time, memory, data) needed to successfully attack a cryptographic algorithm, providing a measure of its security strength.",
        es: "La complejidad criptoanalítica cuantifica los recursos computacionales (tiempo, memoria, datos) necesarios para atacar exitosamente un algoritmo criptográfico, proporcionando una medida de su fortaleza de seguridad.",
        de: "Kryptoanalytische Komplexität quantifiziert die rechnerischen Ressourcen (Zeit, Speicher, Daten), die für einen erfolgreichen Angriff auf einen kryptographischen Algorithmus benötigt werden, und bietet ein Maß für seine Sicherheitsstärke.",
        nl: "Cryptanalytische complexiteit kwantificeert de computationele bronnen (tijd, geheugen, data) nodig om succesvol een cryptografisch algoritme aan te vallen, en biedt een maat voor zijn beveiligings sterkte."
      }
    },
    {
      question: {
        en: "What distinguishes cube attacks from traditional algebraic cryptanalysis?",
        es: "¿Qué distingue los ataques de cubo del criptoanálisis algebraico tradicional?",
        de: "Was unterscheidet Cube-Angriffe von traditioneller algebraischer Kryptoanalyse?",
        nl: "Wat onderscheidt kubus aanvallen van traditionele algebraïsche cryptanalyse?"
      },
      options: [
        { en: "Exploiting low-degree polynomial representations of output bits", es: "Explotar representaciones polinomiales de bajo grado de bits de salida", de: "Ausnutzung von Polynom-Darstellungen niedrigen Grades von Ausgabebits", nl: "Het uitbuiten van lage-graads polynoom representaties van output bits" },
        { en: "Using quantum computing for factorization", es: "Usar computación cuántica para factorización", de: "Verwendung von Quantencomputing für Faktorisierung", nl: "Het gebruik van quantum computing voor factorisatie" },
        { en: "Analyzing geometric patterns in cipher structure", es: "Analizar patrones geométricos en estructura de cifrado", de: "Analyse geometrischer Muster in Chiffre-Struktur", nl: "Het analyseren van geometrische patronen in cipher structuur" },
        { en: "Employing neural networks for pattern recognition", es: "Emplear redes neuronales para reconocimiento de patrones", de: "Einsatz neuronaler Netze zur Mustererkennung", nl: "Het gebruiken van neurale netwerken voor patroonherkenning" }
      ],
      correct: 0,
      explanation: {
        en: "Cube attacks exploit the fact that output bits of stream ciphers can be expressed as low-degree polynomials over certain input variables (cube variables), allowing key recovery through polynomial interpolation.",
        es: "Los ataques de cubo explotan el hecho de que los bits de salida de cifrados de flujo pueden expresarse como polinomios de bajo grado sobre ciertas variables de entrada (variables de cubo), permitiendo recuperación de claves a través de interpolación polinomial.",
        de: "Cube-Angriffe nutzen die Tatsache aus, dass Ausgabebits von Stromchiffren als Polynome niedrigen Grades über bestimmte Eingangsvariablen (Cube-Variablen) ausgedrückt werden können, was Schlüsselwiederherstellung durch Polynominterpolation ermöglicht.",
        nl: "Kubus aanvallen benutten het feit dat output bits van stream ciphers uitgedrukt kunnen worden als lage-graads polynomen over bepaalde invoer variabelen (kubus variabelen), wat sleutelherstel mogelijk maakt door polynoom interpolatie."
      }
    },
    {
      question: {
        en: "What is the primary vulnerability exploited in cache timing attacks?",
        es: "¿Cuál es la vulnerabilidad principal explotada en ataques de tiempo de caché?",
        de: "Was ist die Hauptverwundbarkeit, die in Cache-Timing-Angriffen ausgenutzt wird?",
        nl: "Wat is de primaire kwetsbaarheid uitgebuit in cache timing aanvallen?"
      },
      options: [
        { en: "Memory access patterns revealing secret-dependent operations", es: "Patrones de acceso a memoria revelando operaciones dependientes de secretos", de: "Speicherzugriffsmuster, die geheimabhängige Operationen offenlegen", nl: "Geheugen toegangspatronen die geheim-afhankelijke operaties onthullen" },
        { en: "Buffer overflow vulnerabilities in cache management", es: "Vulnerabilidades de desbordamiento de búfer en gestión de caché", de: "Pufferüberlauf-Schwachstellen in Cache-Verwaltung", nl: "Buffer overflow kwetsbaarheden in cache beheer" },
        { en: "Weak encryption algorithms in memory controllers", es: "Algoritmos de cifrado débiles en controladores de memoria", de: "Schwache Verschlüsselungsalgorithmen in Speichercontrollern", nl: "Zwakke encryptie algoritmen in geheugen controllers" },
        { en: "Insufficient randomization in address space layout", es: "Randomización insuficiente en diseño de espacio de direcciones", de: "Unzureichende Randomisierung im Adressraum-Layout", nl: "Onvoldoende randomisatie in adresruimte layout" }
      ],
      correct: 0,
      explanation: {
        en: "Cache timing attacks exploit the timing differences between cache hits and misses to infer memory access patterns, which can reveal secret-dependent operations like table lookups in cryptographic implementations.",
        es: "Los ataques de tiempo de caché explotan las diferencias de tiempo entre aciertos y fallos de caché para inferir patrones de acceso a memoria, que pueden revelar operaciones dependientes de secretos como búsquedas en tablas en implementaciones criptográficas.",
        de: "Cache-Timing-Angriffe nutzen die Zeitunterschiede zwischen Cache-Treffern und -Fehlschlägen aus, um Speicherzugriffsmuster abzuleiten, die geheimabhängige Operationen wie Tabellenzugriffe in kryptographischen Implementierungen offenlegen können.",
        nl: "Cache timing aanvallen benutten de tijdsverschillen tussen cache hits en misses om geheugen toegangspatronen af te leiden, die geheim-afhankelijke operaties kunnen onthullen zoals tabel opzoekingen in cryptografische implementaties."
      }
    },
    {
      question: {
        en: "Which cryptanalytic technique specifically targets the S-boxes in block ciphers?",
        es: "¿Qué técnica criptoanalítica apunta específicamente a las S-boxes en cifrados de bloque?",
        de: "Welche kryptoanalytische Technik zielt speziell auf S-Boxen in Blockchiffren ab?",
        nl: "Welke cryptanalytische techniek richt zich specifiek op de S-boxes in blokcijfers?"
      },
      options: [
        { en: "Linear and differential cryptanalysis", es: "Criptoanálisis lineal y diferencial", de: "Lineare und differentielle Kryptoanalyse", nl: "Lineaire en differentiële cryptanalyse" },
        { en: "Birthday paradox attacks", es: "Ataques de paradoja del cumpleaños", de: "Geburtstagsparadoxon-Angriffe", nl: "Verjaardagsparadox aanvallen" },
        { en: "Meet-in-the-middle attacks", es: "Ataques de encuentro en el medio", de: "Meet-in-the-Middle-Angriffe", nl: "Meet-in-the-middle aanvallen" },
        { en: "Time-memory trade-off attacks", es: "Ataques de compensación tiempo-memoria", de: "Zeit-Speicher-Kompromiss-Angriffe", nl: "Tijd-geheugen trade-off aanvallen" }
      ],
      correct: 0,
      explanation: {
        en: "Linear and differential cryptanalysis specifically analyze S-box properties, exploiting non-random behavior in their input-output relationships to propagate biases or differences through the cipher.",
        es: "El criptoanálisis lineal y diferencial analiza específicamente propiedades de S-box, explotando comportamiento no aleatorio en sus relaciones entrada-salida para propagar sesgos o diferencias a través del cifrado.",
        de: "Lineare und differentielle Kryptoanalyse analysiert speziell S-Box-Eigenschaften und nutzt nicht-zufälliges Verhalten in ihren Eingabe-Ausgabe-Beziehungen aus, um Verzerrungen oder Differenzen durch die Chiffre zu propagieren.",
        nl: "Lineaire en differentiële cryptanalyse analyseert specifiek S-box eigenschappen, waarbij niet-willekeurig gedrag in hun invoer-uitvoer relaties wordt uitgebuit om biases of verschillen door de cipher te propageren."
      }
    },
    {
      question: {
        en: "What is the fundamental principle behind impossible differential cryptanalysis?",
        es: "¿Cuál es el principio fundamental detrás del criptoanálisis diferencial imposible?",
        de: "Was ist das grundlegende Prinzip hinter unmöglicher differentieller Kryptoanalyse?",
        nl: "Wat is het fundamentele principe achter onmogelijke differentiële cryptanalyse?"
      },
      options: [
        { en: "Identifying input differences that never produce certain output differences", es: "Identificar diferencias de entrada que nunca producen ciertas diferencias de salida", de: "Identifizierung von Eingabedifferenzen, die niemals bestimmte Ausgabedifferenzen erzeugen", nl: "Het identificeren van invoerverschillen die nooit bepaalde uitvoerverschillen produceren" },
        { en: "Finding collisions in hash functions through birthday attacks", es: "Encontrar colisiones en funciones hash a través de ataques de cumpleaños", de: "Kollisionen in Hash-Funktionen durch Geburtstagsangriffe finden", nl: "Het vinden van botsingen in hash functies door verjaardagsaanvallen" },
        { en: "Exploiting weak random number generation", es: "Explotar generación débil de números aleatorios", de: "Ausnutzung schwacher Zufallszahlengenerierung", nl: "Het uitbuiten van zwakke willekeurige nummer generatie" },
        { en: "Using quantum algorithms for key recovery", es: "Usar algoritmos cuánticos para recuperación de claves", de: "Verwendung von Quantenalgorithmen zur Schlüsselwiederherstellung", nl: "Het gebruik van quantum algoritmen voor sleutelherstel" }
      ],
      correct: 0,
      explanation: {
        en: "Impossible differential cryptanalysis identifies input-output differential patterns that cannot occur in the cipher, then uses these impossibilities to eliminate wrong key candidates when they produce the impossible patterns.",
        es: "El criptoanálisis diferencial imposible identifica patrones diferenciales entrada-salida que no pueden ocurrir en el cifrado, luego usa estas imposibilidades para eliminar candidatos de clave incorrectos cuando producen los patrones imposibles.",
        de: "Unmögliche differentielle Kryptoanalyse identifiziert Eingabe-Ausgabe-Differenzmuster, die in der Chiffre nicht auftreten können, und verwendet diese Unmöglichkeiten dann, um falsche Schlüsselkandidaten zu eliminieren, wenn sie die unmöglichen Muster erzeugen.",
        nl: "Onmogelijke differentiële cryptanalyse identificeert invoer-uitvoer differentiële patronen die niet kunnen voorkomen in de cipher, en gebruikt dan deze onmogelijkheden om verkeerde sleutelkandidaten te elimineren wanneer ze de onmogelijke patronen produceren."
      }
    },
    {
      question: {
        en: "Which attack method exploits the relationship between plaintext and power consumption patterns?",
        es: "¿Qué método de ataque explota la relación entre texto plano y patrones de consumo de energía?",
        de: "Welche Angriffsmethode nutzt die Beziehung zwischen Klartext und Stromverbrauchsmustern aus?",
        nl: "Welke aanvalsmethode benut de relatie tussen platte tekst en stroomverbruik patronen?"
      },
      options: [
        { en: "Correlation Power Analysis (CPA)", es: "Análisis de Potencia de Correlación (CPA)", de: "Korrelations-Leistungsanalyse (CPA)", nl: "Correlatie Vermogen Analyse (CPA)" },
        { en: "Timing attack analysis", es: "Análisis de ataque de tiempo", de: "Timing-Angriffsanalyse", nl: "Timing aanval analyse" },
        { en: "Fault injection attacks", es: "Ataques de inyección de fallas", de: "Fehlerinjektionsangriffe", nl: "Fout injectie aanvallen" },
        { en: "Template attacks", es: "Ataques de plantilla", de: "Template-Angriffe", nl: "Template aanvallen" }
      ],
      correct: 0,
      explanation: {
        en: "Correlation Power Analysis (CPA) statistically correlates power consumption measurements with hypothetical intermediate values computed from known plaintexts and key guesses, revealing the correct key when correlation is highest.",
        es: "El Análisis de Potencia de Correlación (CPA) correlaciona estadísticamente mediciones de consumo de energía con valores intermedios hipotéticos calculados de textos planos conocidos y suposiciones de clave, revelando la clave correcta cuando la correlación es más alta.",
        de: "Korrelations-Leistungsanalyse (CPA) korreliert statistisch Stromverbrauchsmessungen mit hypothetischen Zwischenwerten, die aus bekannten Klartexten und Schlüsselannahmen berechnet wurden, und enthüllt den korrekten Schlüssel bei höchster Korrelation.",
        nl: "Correlatie Vermogen Analyse (CPA) correleert statistisch stroomverbruik metingen met hypothetische tussenwaarden berekend uit bekende platte teksten en sleutel gissingen, waarbij de correcte sleutel wordt onthuld wanneer correlatie het hoogst is."
      }
    },
    {
      question: {
        en: "What is the main goal of integral cryptanalysis?",
        es: "¿Cuál es el objetivo principal del criptoanálisis integral?",
        de: "Was ist das Hauptziel der integralen Kryptoanalyse?",
        nl: "Wat is het hoofddoel van integrale cryptanalyse?"
      },
      options: [
        { en: "Tracking how sets of chosen plaintexts propagate through cipher rounds", es: "Rastrear cómo conjuntos de textos planos elegidos se propagan a través de rondas de cifrado", de: "Verfolgung, wie sich Mengen gewählter Klartexte durch Chiffre-Runden ausbreiten", nl: "Het volgen hoe sets van gekozen platte teksten propageren door cipher rondes" },
        { en: "Integrating multiple attack vectors simultaneously", es: "Integrar múltiples vectores de ataque simultáneamente", de: "Gleichzeitige Integration mehrerer Angriffsvektoren", nl: "Het integreren van meerdere aanvalsvectoren tegelijkertijd" },
        { en: "Computing integral transforms of ciphertext", es: "Calcular transformadas integrales de texto cifrado", de: "Berechnung von Integraltransformationen von Chiffretext", nl: "Het berekenen van integrale transformaties van cijfertekst" },
        { en: "Analyzing mathematical integrals in key schedules", es: "Analizar integrales matemáticas en programas de claves", de: "Analyse mathematischer Integrale in Schlüsselplänen", nl: "Het analyseren van wiskundige integralen in sleutel schema's" }
      ],
      correct: 0,
      explanation: {
        en: "Integral cryptanalysis (also called square attack) tracks how specially chosen sets of plaintexts with particular patterns propagate through cipher rounds, exploiting predictable properties like balanced or constant values.",
        es: "El criptoanálisis integral (también llamado ataque cuadrado) rastrea cómo conjuntos especialmente elegidos de textos planos con patrones particulares se propagan a través de rondas de cifrado, explotando propiedades predecibles como valores equilibrados o constantes.",
        de: "Integrale Kryptoanalyse (auch Square-Angriff genannt) verfolgt, wie speziell gewählte Mengen von Klartexten mit bestimmten Mustern sich durch Chiffre-Runden ausbreiten, und nutzt vorhersagbare Eigenschaften wie ausgeglichene oder konstante Werte aus.",
        nl: "Integrale cryptanalyse (ook wel square attack genoemd) volgt hoe speciaal gekozen sets van platte teksten met bepaalde patronen propageren door cipher rondes, waarbij voorspelbare eigenschappen zoals gebalanceerde of constante waarden worden uitgebuit."
      }
    },
    {
      question: {
        en: "Which technique is used to recover keys from cold boot attacks on memory?",
        es: "¿Qué técnica se usa para recuperar claves de ataques de arranque en frío en memoria?",
        de: "Welche Technik wird verwendet, um Schlüssel aus Cold-Boot-Angriffen auf Speicher wiederherzustellen?",
        nl: "Welke techniek wordt gebruikt om sleutels te herstellen van cold boot aanvallen op geheugen?"
      },
      options: [
        { en: "Exploiting data remanence and error correction to reconstruct degraded keys", es: "Explotar remanencia de datos y corrección de errores para reconstruir claves degradadas", de: "Ausnutzung von Datenremanenz und Fehlerkorrektur zur Rekonstruktion degradierter Schlüssel", nl: "Het uitbuiten van data remanentie en foutcorrectie om gedegradeerde sleutels te reconstrueren" },
        { en: "Using thermal imaging to read memory contents", es: "Usar imágenes térmicas para leer contenidos de memoria", de: "Verwendung von Wärmebildern zum Lesen von Speicherinhalten", nl: "Het gebruik van thermische beeldvorming om geheugeninhoud te lezen" },
        { en: "Electromagnetic emanation analysis", es: "Análisis de emanación electromagnética", de: "Analyse elektromagnetischer Abstrahlung", nl: "Elektromagnetische emanatie analyse" },
        { en: "Acoustic cryptanalysis of memory access patterns", es: "Criptoanálisis acústico de patrones de acceso a memoria", de: "Akustische Kryptoanalyse von Speicherzugriffsmustern", nl: "Akoestische cryptanalyse van geheugen toegangspatronen" }
      ],
      correct: 0,
      explanation: {
        en: "Cold boot attacks exploit data remanence in DRAM after power loss, using error correction algorithms and key schedule redundancy to reconstruct encryption keys from partially degraded memory contents.",
        es: "Los ataques de arranque en frío explotan la remanencia de datos en DRAM después de pérdida de energía, usando algoritmos de corrección de errores y redundancia de programa de claves para reconstruir claves de cifrado de contenidos de memoria parcialmente degradados.",
        de: "Cold-Boot-Angriffe nutzen Datenremanenz in DRAM nach Stromverlust aus und verwenden Fehlerkorrekturalgorithmen und Schlüsselplan-Redundanz, um Verschlüsselungsschlüssel aus teilweise degradierten Speicherinhalten zu rekonstruieren.",
        nl: "Cold boot aanvallen benutten data remanentie in DRAM na stroomverlies, waarbij foutcorrectie algoritmen en sleutelschema redundantie worden gebruikt om encryptiesleutels te reconstrueren uit gedeeltelijk gedegradeerde geheugeninhoud."
      }
    },
    {
      question: {
        en: "What distinguishes boomerang attacks from standard differential cryptanalysis?",
        es: "¿Qué distingue los ataques boomerang del criptoanálisis diferencial estándar?",
        de: "Was unterscheidet Boomerang-Angriffe von Standard-Differentieller Kryptoanalyse?",
        nl: "Wat onderscheidt boemerang aanvallen van standaard differentiële cryptanalyse?"
      },
      options: [
        { en: "Using two differential characteristics connected through a quartet of plaintexts", es: "Usar dos características diferenciales conectadas a través de un cuarteto de textos planos", de: "Verwendung zweier differentieller Charakteristiken, die durch ein Quartett von Klartexten verbunden sind", nl: "Het gebruik van twee differentiële karakteristieken verbonden door een kwartet van platte teksten" },
        { en: "Employing recursive encryption patterns", es: "Emplear patrones de cifrado recursivos", de: "Verwendung rekursiver Verschlüsselungsmuster", nl: "Het gebruiken van recursieve encryptie patronen" },
        { en: "Analyzing return paths in network protocols", es: "Analizar rutas de retorno en protocolos de red", de: "Analyse von Rückwegen in Netzwerkprotokollen", nl: "Het analyseren van retourpaden in netwerkprotocollen" },
        { en: "Exploiting feedback loops in stream ciphers", es: "Explotar bucles de retroalimentación en cifrados de flujo", de: "Ausnutzung von Rückkopplungsschleifen in Stromchiffren", nl: "Het uitbuiten van feedback loops in stream ciphers" }
      ],
      correct: 0,
      explanation: {
        en: "Boomerang attacks use two short differential characteristics instead of one long one, connecting them through a quartet structure that allows the attack to 'return' like a boomerang, often succeeding where standard differential attacks fail.",
        es: "Los ataques boomerang usan dos características diferenciales cortas en lugar de una larga, conectándolas a través de una estructura de cuarteto que permite que el ataque 'regrese' como un boomerang, a menudo teniendo éxito donde los ataques diferenciales estándar fallan.",
        de: "Boomerang-Angriffe verwenden zwei kurze differentielle Charakteristiken anstatt einer langen, verbinden sie durch eine Quartett-Struktur, die es dem Angriff ermöglicht, wie ein Boomerang 'zurückzukehren', und oft dort erfolgreich sind, wo Standard-Differentielle Angriffe scheitern.",
        nl: "Boemerang aanvallen gebruiken twee korte differentiële karakteristieken in plaats van één lange, waarbij ze verbonden worden door een kwartet structuur die de aanval toestaat te 'terugkeren' als een boemerang, vaak succesvol waar standaard differentiële aanvallen falen."
      }
    },
    {
      question: {
        en: "What is the primary objective of slide attacks on block ciphers?",
        es: "¿Cuál es el objetivo principal de los ataques deslizantes en cifrados de bloque?",
        de: "Was ist das Hauptziel von Slide-Angriffen auf Blockchiffren?",
        nl: "Wat is het primaire doel van slide aanvallen op blokcijfers?"
      },
      options: [
        { en: "Exploiting self-similarity in the key schedule to attack all rounds simultaneously", es: "Explotar auto-similitud en el programa de claves para atacar todas las rondas simultáneamente", de: "Ausnutzung von Selbstähnlichkeit im Schlüsselplan, um alle Runden gleichzeitig anzugreifen", nl: "Het uitbuiten van zelf-gelijkenis in het sleutelschema om alle rondes tegelijkertijd aan te vallen" },
        { en: "Sliding between different encryption modes", es: "Deslizarse entre diferentes modos de cifrado", de: "Gleiten zwischen verschiedenen Verschlüsselungsmodi", nl: "Glijden tussen verschillende encryptie modi" },
        { en: "Shifting bits to bypass security checks", es: "Desplazar bits para evitar controles de seguridad", de: "Bits verschieben, um Sicherheitsprüfungen zu umgehen", nl: "Bits verschuiven om beveiligingscontroles te omzeilen" },
        { en: "Moving through encryption layers sequentially", es: "Moverse a través de capas de cifrado secuencialmente", de: "Sequentielles Durchlaufen von Verschlüsselungsschichten", nl: "Sequentieel door encryptie lagen bewegen" }
      ],
      correct: 0,
      explanation: {
        en: "Slide attacks exploit ciphers with self-similar round functions and weak key schedules by finding slid pairs of plaintexts whose encryptions are related, allowing the attacker to break the cipher regardless of the number of rounds.",
        es: "Los ataques deslizantes explotan cifrados con funciones de ronda auto-similares y programas de claves débiles encontrando pares deslizados de textos planos cuyas encripciones están relacionadas, permitiendo al atacante romper el cifrado independientemente del número de rondas.",
        de: "Slide-Angriffe nutzen Chiffren mit selbstähnlichen Rundenfunktionen und schwachen Schlüsselplänen aus, indem sie verschobene Paare von Klartexten finden, deren Verschlüsselungen verwandt sind, wodurch der Angreifer die Chiffre unabhängig von der Rundenanzahl brechen kann.",
        nl: "Slide aanvallen benutten cijfers met zelf-gelijke ronde functies en zwakke sleutelschema's door verschoven paren van platte teksten te vinden waarvan de encrypties gerelateerd zijn, waardoor de aanvaller de cipher kan breken ongeacht het aantal rondes."
      }
    },
    {
      question: {
        en: "Which cryptanalytic method combines machine learning with traditional attacks?",
        es: "¿Qué método criptoanalítico combina aprendizaje automático con ataques tradicionales?",
        de: "Welche kryptoanalytische Methode kombiniert maschinelles Lernen mit traditionellen Angriffen?",
        nl: "Welke cryptanalytische methode combineert machine learning met traditionele aanvallen?"
      },
      options: [
        { en: "Deep learning-enhanced side-channel analysis", es: "Análisis de canal lateral mejorado con aprendizaje profundo", de: "Deep Learning-verstärkte Seitenkanalanalyse", nl: "Deep learning-versterkte zijkanaal analyse" },
        { en: "Quantum machine hybrid attacks", es: "Ataques híbridos de máquina cuántica", de: "Quanten-Maschinen-Hybridangriffe", nl: "Quantum machine hybride aanvallen" },
        { en: "Blockchain-based distributed cryptanalysis", es: "Criptoanálisis distribuido basado en blockchain", de: "Blockchain-basierte verteilte Kryptoanalyse", nl: "Blockchain-gebaseerde gedistribueerde cryptanalyse" },
        { en: "Cloud computing brute force optimization", es: "Optimización de fuerza bruta con computación en nube", de: "Cloud-Computing Brute-Force-Optimierung", nl: "Cloud computing brute force optimalisatie" }
      ],
      correct: 0,
      explanation: {
        en: "Deep learning-enhanced side-channel analysis uses neural networks to automatically extract features from power traces or electromagnetic emissions, often outperforming traditional template attacks and requiring less domain expertise.",
        es: "El análisis de canal lateral mejorado con aprendizaje profundo usa redes neuronales para extraer automáticamente características de trazas de potencia o emisiones electromagnéticas, a menudo superando ataques de plantilla tradicionales y requiriendo menos experiencia en el dominio.",
        de: "Deep Learning-verstärkte Seitenkanalanalyse verwendet neuronale Netze, um automatisch Merkmale aus Leistungsspuren oder elektromagnetischen Emissionen zu extrahieren, übertrifft oft traditionelle Template-Angriffe und erfordert weniger Fachkenntnisse.",
        nl: "Deep learning-versterkte zijkanaal analyse gebruikt neurale netwerken om automatisch kenmerken te extraheren uit vermogenssporen of elektromagnetische emissies, waarbij vaak traditionele template aanvallen overtroffen worden en minder domeinexpertise vereist is."
      }
    },
    {
      question: {
        en: "What is the key vulnerability in padding oracle attacks?",
        es: "¿Cuál es la vulnerabilidad clave en ataques de oráculo de relleno?",
        de: "Was ist die Schlüsselverwundbarkeit bei Padding-Oracle-Angriffen?",
        nl: "Wat is de belangrijkste kwetsbaarheid in padding oracle aanvallen?"
      },
      options: [
        { en: "Different error messages for padding versus decryption failures", es: "Diferentes mensajes de error para fallas de relleno versus descifrado", de: "Unterschiedliche Fehlermeldungen für Padding- versus Entschlüsselungsfehler", nl: "Verschillende foutmeldingen voor padding versus ontcijfering fouten" },
        { en: "Weak padding algorithms in block ciphers", es: "Algoritmos de relleno débiles en cifrados de bloque", de: "Schwache Padding-Algorithmen in Blockchiffren", nl: "Zwakke padding algoritmen in blokcijfers" },
        { en: "Insufficient randomness in padding generation", es: "Aleatoriedad insuficiente en generación de relleno", de: "Unzureichende Zufälligkeit bei Padding-Generierung", nl: "Onvoldoende willekeurigheid in padding generatie" },
        { en: "Buffer overflows in padding validation", es: "Desbordamientos de búfer en validación de relleno", de: "Pufferüberläufe bei Padding-Validierung", nl: "Buffer overflows in padding validatie" }
      ],
      correct: 0,
      explanation: {
        en: "Padding oracle attacks exploit systems that reveal whether decrypted ciphertext has valid padding, allowing attackers to decrypt messages byte-by-byte by observing different error responses for padding versus other decryption failures.",
        es: "Los ataques de oráculo de relleno explotan sistemas que revelan si el texto cifrado descifrado tiene relleno válido, permitiendo a atacantes descifrar mensajes byte por byte observando diferentes respuestas de error para relleno versus otras fallas de descifrado.",
        de: "Padding-Oracle-Angriffe nutzen Systeme aus, die offenlegen, ob entschlüsselter Chiffretext gültiges Padding hat, wodurch Angreifer Nachrichten Byte für Byte entschlüsseln können, indem sie unterschiedliche Fehlerreaktionen für Padding versus andere Entschlüsselungsfehler beobachten.",
        nl: "Padding oracle aanvallen benutten systemen die onthullen of ontcijferde cijfertekst geldige padding heeft, waardoor aanvallers berichten byte-voor-byte kunnen ontcijferen door verschillende foutreacties voor padding versus andere ontcijferingsfouten te observeren."
      }
    },
    {
      question: {
        en: "Which attack technique exploits biased random number generators in cryptographic systems?",
        es: "¿Qué técnica de ataque explota generadores de números aleatorios sesgados en sistemas criptográficos?",
        de: "Welche Angriffstechnik nutzt verzerrte Zufallszahlengeneratoren in kryptographischen Systemen aus?",
        nl: "Welke aanvalstechniek benut bevooroordeelde willekeurige nummer generatoren in cryptografische systemen?"
      },
      options: [
        { en: "PRNG state recovery and prediction attacks", es: "Recuperación de estado PRNG y ataques de predicción", de: "PRNG-Zustandswiederherstellung und Vorhersageangriffe", nl: "PRNG staat herstel en voorspelling aanvallen" },
        { en: "Timing analysis of random generation", es: "Análisis de tiempo de generación aleatoria", de: "Timing-Analyse der Zufallsgenerierung", nl: "Timing analyse van willekeurige generatie" },
        { en: "Power consumption monitoring", es: "Monitoreo de consumo de energía", de: "Überwachung des Stromverbrauchs", nl: "Stroomverbruik monitoring" },
        { en: "Memory access pattern analysis", es: "Análisis de patrones de acceso a memoria", de: "Analyse von Speicherzugriffsmustern", nl: "Geheugen toegangspatroon analyse" }
      ],
      correct: 0,
      explanation: {
        en: "PRNG state recovery attacks exploit weak or biased pseudorandom number generators to recover their internal state, allowing prediction of future outputs and compromise of cryptographic keys generated using the compromised PRNG.",
        es: "Los ataques de recuperación de estado PRNG explotan generadores de números pseudoaleatorios débiles o sesgados para recuperar su estado interno, permitiendo predicción de salidas futuras y compromiso de claves criptográficas generadas usando el PRNG comprometido.",
        de: "PRNG-Zustandswiederherstellungsangriffe nutzen schwache oder verzerrte Pseudozufallszahlengeneratoren aus, um ihren internen Zustand wiederherzustellen, was die Vorhersage zukünftiger Ausgaben und die Kompromittierung kryptographischer Schlüssel ermöglicht, die mit dem kompromittierten PRNG generiert wurden.",
        nl: "PRNG staat herstel aanvallen benutten zwakke of bevooroordeelde pseudowillekeurige nummer generatoren om hun interne staat te herstellen, wat voorspelling van toekomstige outputs en compromittering van cryptografische sleutels gegenereerd met de gecompromitteerde PRNG mogelijk maakt."
      }
    },
    {
      question: {
        en: "What distinguishes fault injection attacks from other side-channel attacks?",
        es: "¿Qué distingue los ataques de inyección de fallas de otros ataques de canal lateral?",
        de: "Was unterscheidet Fehlerinjektionsangriffe von anderen Seitenkanalangriffen?",
        nl: "Wat onderscheidt fout injectie aanvallen van andere zijkanaal aanvallen?"
      },
      options: [
        { en: "Actively inducing errors to reveal secret information", es: "Inducir activamente errores para revelar información secreta", de: "Aktives Induzieren von Fehlern zur Enthüllung geheimer Informationen", nl: "Actief fouten induceren om geheime informatie te onthullen" },
        { en: "Passively observing system behavior", es: "Observar pasivamente el comportamiento del sistema", de: "Passives Beobachten des Systemverhaltens", nl: "Passief systeemgedrag observeren" },
        { en: "Analyzing network traffic patterns", es: "Analizar patrones de tráfico de red", de: "Analyse von Netzwerkverkehrsmustern", nl: "Netwerkverkeer patronen analyseren" },
        { en: "Monitoring electromagnetic emissions", es: "Monitorear emisiones electromagnéticas", de: "Überwachung elektromagnetischer Emissionen", nl: "Elektromagnetische emissies monitoren" }
      ],
      correct: 0,
      explanation: {
        en: "Fault injection attacks actively introduce errors into cryptographic computations through voltage glitching, clock manipulation, laser injection, or electromagnetic pulses, then analyze the faulty outputs to extract secret keys.",
        es: "Los ataques de inyección de fallas introducen activamente errores en computaciones criptográficas a través de fallas de voltaje, manipulación de reloj, inyección láser o pulsos electromagnéticos, luego analizan las salidas defectuosas para extraer claves secretas.",
        de: "Fehlerinjektionsangriffe führen aktiv Fehler in kryptographische Berechnungen durch Spannungsstörungen, Taktmanipulation, Laserinjektion oder elektromagnetische Pulse ein und analysieren dann die fehlerhaften Ausgaben, um geheime Schlüssel zu extrahieren.",
        nl: "Fout injectie aanvallen introduceren actief fouten in cryptografische berekeningen door spanning glitching, klok manipulatie, laser injectie of elektromagnetische pulsen, en analyseren dan de foutieve outputs om geheime sleutels te extraheren."
      }
    },
    {
      question: {
        en: "What is the primary goal of meet-in-the-middle attacks on double encryption?",
        es: "¿Cuál es el objetivo principal de los ataques de encuentro en el medio en doble cifrado?",
        de: "Was ist das Hauptziel von Meet-in-the-Middle-Angriffen auf Doppelverschlüsselung?",
        nl: "Wat is het primaire doel van meet-in-the-middle aanvallen op dubbele encryptie?"
      },
      options: [
        { en: "Reducing effective key space through time-memory trade-offs", es: "Reducir espacio de claves efectivo a través de compensaciones tiempo-memoria", de: "Reduzierung des effektiven Schlüsselraums durch Zeit-Speicher-Kompromisse", nl: "Effectieve sleutelruimte reduceren door tijd-geheugen trade-offs" },
        { en: "Breaking each encryption layer independently", es: "Romper cada capa de cifrado independientemente", de: "Jede Verschlüsselungsschicht unabhängig brechen", nl: "Elke encryptie laag onafhankelijk breken" },
        { en: "Exploiting implementation vulnerabilities", es: "Explotar vulnerabilidades de implementación", de: "Implementierungsschwachstellen ausnutzen", nl: "Implementatie kwetsbaarheden uitbuiten" },
        { en: "Using quantum algorithms for speedup", es: "Usar algoritmos cuánticos para aceleración", de: "Quantenalgorithmen zur Beschleunigung verwenden", nl: "Quantum algoritmen gebruiken voor versnelling" }
      ],
      correct: 0,
      explanation: {
        en: "Meet-in-the-middle attacks on double encryption compute and store intermediate values from both encryption directions, then find matches, reducing the effective key space from 2^(2n) to approximately 2^(n+1) at the cost of memory.",
        es: "Los ataques de encuentro en el medio en doble cifrado calculan y almacenan valores intermedios de ambas direcciones de cifrado, luego encuentran coincidencias, reduciendo el espacio de claves efectivo de 2^(2n) a aproximadamente 2^(n+1) al costo de memoria.",
        de: "Meet-in-the-Middle-Angriffe auf Doppelverschlüsselung berechnen und speichern Zwischenwerte aus beiden Verschlüsselungsrichtungen, finden dann Übereinstimmungen und reduzieren den effektiven Schlüsselraum von 2^(2n) auf etwa 2^(n+1) auf Kosten des Speichers.",
        nl: "Meet-in-the-middle aanvallen op dubbele encryptie berekenen en slaan tussenwaarden op uit beide encryptie richtingen, vinden dan overeenkomsten, waarbij de effectieve sleutelruimte wordt gereduceerd van 2^(2n) naar ongeveer 2^(n+1) ten koste van geheugen."
      }
    },
    {
      question: {
        en: "Which cryptanalytic technique exploits the birthday paradox in hash functions?",
        es: "¿Qué técnica criptoanalítica explota la paradoja del cumpleaños en funciones hash?",
        de: "Welche kryptoanalytische Technik nutzt das Geburtstagsparadoxon in Hash-Funktionen aus?",
        nl: "Welke cryptanalytische techniek benut de verjaardagsparadox in hash functies?"
      },
      options: [
        { en: "Collision attacks requiring √n operations for n-bit output", es: "Ataques de colisión requiriendo √n operaciones para salida de n bits", de: "Kollisionsangriffe, die √n Operationen für n-Bit-Ausgabe erfordern", nl: "Botsing aanvallen die √n operaties vereisen voor n-bit output" },
        { en: "Preimage attacks on compression functions", es: "Ataques de preimagen en funciones de compresión", de: "Urbildangriffe auf Kompressionsfunktionen", nl: "Preimage aanvallen op compressie functies" },
        { en: "Length extension attacks on Merkle-Damgård constructions", es: "Ataques de extensión de longitud en construcciones Merkle-Damgård", de: "Längenerweiterungsangriffe auf Merkle-Damgård-Konstruktionen", nl: "Lengte extensie aanvallen op Merkle-Damgård constructies" },
        { en: "Rainbow table generation for password cracking", es: "Generación de tablas arcoíris para descifrado de contraseñas", de: "Rainbow-Table-Generierung zum Passwort-Knacken", nl: "Rainbow tabel generatie voor wachtwoord kraken" }
      ],
      correct: 0,
      explanation: {
        en: "Birthday paradox-based collision attacks exploit the mathematical principle that finding any two messages with the same hash requires only about 2^(n/2) operations for an n-bit hash, much less than the 2^n required for preimage attacks.",
        es: "Los ataques de colisión basados en la paradoja del cumpleaños explotan el principio matemático de que encontrar dos mensajes cualesquiera con el mismo hash requiere solo alrededor de 2^(n/2) operaciones para un hash de n bits, mucho menos que los 2^n requeridos para ataques de preimagen.",
        de: "Auf dem Geburtstagsparadoxon basierende Kollisionsangriffe nutzen das mathematische Prinzip aus, dass das Finden von zwei beliebigen Nachrichten mit demselben Hash nur etwa 2^(n/2) Operationen für einen n-Bit-Hash erfordert, viel weniger als die 2^n für Urbildangriffe.",
        nl: "Verjaardagsparadox-gebaseerde botsing aanvallen benutten het wiskundige principe dat het vinden van twee willekeurige berichten met dezelfde hash slechts ongeveer 2^(n/2) operaties vereist voor een n-bit hash, veel minder dan de 2^n vereist voor preimage aanvallen."
      }
    },
    {
      question: {
        en: "What is the main weakness exploited in biclique attacks on AES?",
        es: "¿Cuál es la debilidad principal explotada en ataques biclique en AES?",
        de: "Was ist die Hauptschwäche, die in Biclique-Angriffen auf AES ausgenutzt wird?",
        nl: "Wat is de belangrijkste zwakte uitgebuit in biclique aanvallen op AES?"
      },
      options: [
        { en: "Finding bipartite graph structures to reduce computational complexity", es: "Encontrar estructuras de grafos bipartitos para reducir complejidad computacional", de: "Finden bipartiter Graphstrukturen zur Reduzierung der Rechenkomplexität", nl: "Het vinden van bipartiete graaf structuren om computationele complexiteit te reduceren" },
        { en: "Weak S-box design in AES rounds", es: "Diseño débil de S-box en rondas AES", de: "Schwaches S-Box-Design in AES-Runden", nl: "Zwak S-box ontwerp in AES rondes" },
        { en: "Insufficient key mixing between rounds", es: "Mezcla de claves insuficiente entre rondas", de: "Unzureichende Schlüsselmischung zwischen Runden", nl: "Onvoldoende sleutel mixing tussen rondes" },
        { en: "Vulnerable key schedule algorithm", es: "Algoritmo de programa de claves vulnerable", de: "Verwundbarer Schlüsselplan-Algorithmus", nl: "Kwetsbaar sleutelschema algoritme" }
      ],
      correct: 0,
      explanation: {
        en: "Biclique attacks construct bipartite graph structures (bicliques) in the cipher to create computational shortcuts, providing the first key-recovery attack on full AES faster than brute force, though with marginal improvement.",
        es: "Los ataques biclique construyen estructuras de grafos bipartitos (bicliques) en el cifrado para crear atajos computacionales, proporcionando el primer ataque de recuperación de claves en AES completo más rápido que fuerza bruta, aunque con mejora marginal.",
        de: "Biclique-Angriffe konstruieren bipartite Graphstrukturen (Bicliques) in der Chiffre, um rechnerische Abkürzungen zu schaffen, und bieten den ersten Schlüsselwiederherstellungsangriff auf vollständiges AES schneller als Brute Force, wenn auch mit marginaler Verbesserung.",
        nl: "Biclique aanvallen construeren bipartiete graaf structuren (bicliques) in de cipher om computationele shortcuts te creëren, wat de eerste sleutelherstel aanval op volledige AES levert sneller dan brute force, hoewel met marginale verbetering."
      }
    },
    {
      question: {
        en: "Which technique is used in acoustic cryptanalysis?",
        es: "¿Qué técnica se usa en criptoanálisis acústico?",
        de: "Welche Technik wird in der akustischen Kryptoanalyse verwendet?",
        nl: "Welke techniek wordt gebruikt in akoestische cryptanalyse?"
      },
      options: [
        { en: "Analyzing sounds from hardware components during cryptographic operations", es: "Analizar sonidos de componentes de hardware durante operaciones criptográficas", de: "Analyse von Geräuschen von Hardware-Komponenten während kryptographischer Operationen", nl: "Het analyseren van geluiden van hardware componenten tijdens cryptografische operaties" },
        { en: "Using ultrasonic frequencies for data transmission", es: "Usar frecuencias ultrasónicas para transmisión de datos", de: "Verwendung von Ultraschallfrequenzen zur Datenübertragung", nl: "Het gebruik van ultrasone frequenties voor data transmissie" },
        { en: "Embedding watermarks in audio streams", es: "Incrustar marcas de agua en flujos de audio", de: "Einbetten von Wasserzeichen in Audioströme", nl: "Watermerken inbedden in audio streams" },
        { en: "Voice recognition for authentication bypass", es: "Reconocimiento de voz para evasión de autenticación", de: "Spracherkennung zur Authentifizierungsumgehung", nl: "Stemherkenning voor authenticatie bypass" }
      ],
      correct: 0,
      explanation: {
        en: "Acoustic cryptanalysis extracts cryptographic keys by analyzing sounds produced by computer components (CPU, capacitors, keyboards) during cryptographic operations, as different operations produce distinctive acoustic signatures.",
        es: "El criptoanálisis acústico extrae claves criptográficas analizando sonidos producidos por componentes de computadora (CPU, capacitores, teclados) durante operaciones criptográficas, ya que diferentes operaciones producen firmas acústicas distintivas.",
        de: "Akustische Kryptoanalyse extrahiert kryptographische Schlüssel durch Analyse von Geräuschen, die von Computerkomponenten (CPU, Kondensatoren, Tastaturen) während kryptographischer Operationen erzeugt werden, da verschiedene Operationen charakteristische akustische Signaturen erzeugen.",
        nl: "Akoestische cryptanalyse extraheert cryptografische sleutels door geluiden te analyseren geproduceerd door computer componenten (CPU, condensatoren, toetsenborden) tijdens cryptografische operaties, omdat verschillende operaties onderscheidende akoestische handtekeningen produceren."
      }
    },
    {
      question: {
        en: "What is the primary vulnerability in return-oriented programming (ROP) attacks on crypto implementations?",
        es: "¿Cuál es la vulnerabilidad principal en ataques de programación orientada a retorno (ROP) en implementaciones cripto?",
        de: "Was ist die Hauptverwundbarkeit in Return-Oriented Programming (ROP) Angriffen auf Krypto-Implementierungen?",
        nl: "Wat is de primaire kwetsbaarheid in return-oriented programming (ROP) aanvallen op crypto implementaties?"
      },
      options: [
        { en: "Chaining existing code gadgets to bypass code signing and DEP", es: "Encadenar gadgets de código existentes para evadir firma de código y DEP", de: "Verkettung existierender Code-Gadgets zur Umgehung von Code-Signierung und DEP", nl: "Het ketenen van bestaande code gadgets om code signing en DEP te omzeilen" },
        { en: "Buffer overflow in cryptographic libraries", es: "Desbordamiento de búfer en bibliotecas criptográficas", de: "Pufferüberlauf in kryptographischen Bibliotheken", nl: "Buffer overflow in cryptografische bibliotheken" },
        { en: "Integer overflow in key generation", es: "Desbordamiento de enteros en generación de claves", de: "Ganzzahlüberlauf bei Schlüsselerzeugung", nl: "Integer overflow in sleutel generatie" },
        { en: "Race conditions in multi-threaded crypto", es: "Condiciones de carrera en cripto multi-hilo", de: "Race Conditions in Multi-Thread-Krypto", nl: "Race conditions in multi-threaded crypto" }
      ],
      correct: 0,
      explanation: {
        en: "ROP attacks chain together small sequences of existing code (gadgets) ending in return instructions to execute arbitrary operations without injecting new code, bypassing DEP and code signing protections in crypto implementations.",
        es: "Los ataques ROP encadenan pequeñas secuencias de código existente (gadgets) que terminan en instrucciones de retorno para ejecutar operaciones arbitrarias sin inyectar código nuevo, evadiendo protecciones DEP y firma de código en implementaciones cripto.",
        de: "ROP-Angriffe verketten kleine Sequenzen existierenden Codes (Gadgets), die in Return-Anweisungen enden, um beliebige Operationen ohne Einschleusung neuen Codes auszuführen und dabei DEP- und Code-Signierungsschutz in Krypto-Implementierungen zu umgehen.",
        nl: "ROP aanvallen ketenen kleine sequenties van bestaande code (gadgets) eindigend in return instructies om willekeurige operaties uit te voeren zonder nieuwe code te injecteren, waarbij DEP en code signing beschermingen in crypto implementaties worden omzeild."
      }
    },
    {
      question: {
        en: "Which cryptanalytic approach targets the algebraic normal form (ANF) of Boolean functions?",
        es: "¿Qué enfoque criptoanalítico apunta a la forma normal algebraica (ANF) de funciones booleanas?",
        de: "Welcher kryptoanalytische Ansatz zielt auf die algebraische Normalform (ANF) boolescher Funktionen ab?",
        nl: "Welke cryptanalytische benadering richt zich op de algebraïsche normale vorm (ANF) van Booleaanse functies?"
      },
      options: [
        { en: "Algebraic attacks using linearization and Gröbner bases", es: "Ataques algebraicos usando linearización y bases de Gröbner", de: "Algebraische Angriffe mit Linearisierung und Gröbner-Basen", nl: "Algebraïsche aanvallen met linearisatie en Gröbner bases" },
        { en: "Statistical analysis of Boolean function outputs", es: "Análisis estadístico de salidas de funciones booleanas", de: "Statistische Analyse boolescher Funktionsausgaben", nl: "Statistische analyse van Booleaanse functie outputs" },
        { en: "Quantum superposition of Boolean states", es: "Superposición cuántica de estados booleanos", de: "Quantenüberlagerung boolescher Zustände", nl: "Quantum superpositie van Booleaanse toestanden" },
        { en: "Neural network approximation of Boolean circuits", es: "Aproximación de redes neuronales de circuitos booleanos", de: "Neuronale Netzwerk-Approximation boolescher Schaltkreise", nl: "Neurale netwerk benadering van Booleaanse circuits" }
      ],
      correct: 0,
      explanation: {
        en: "Algebraic attacks convert Boolean functions to their algebraic normal form (ANF), then use techniques like linearization, XL algorithm, or Gröbner basis computation to solve the resulting polynomial systems and recover secret keys.",
        es: "Los ataques algebraicos convierten funciones booleanas a su forma normal algebraica (ANF), luego usan técnicas como linearización, algoritmo XL o computación de bases de Gröbner para resolver los sistemas polinomiales resultantes y recuperar claves secretas.",
        de: "Algebraische Angriffe konvertieren boolesche Funktionen in ihre algebraische Normalform (ANF) und verwenden dann Techniken wie Linearisierung, XL-Algorithmus oder Gröbner-Basis-Berechnung, um die resultierenden Polynomsysteme zu lösen und geheime Schlüssel wiederherzustellen.",
        nl: "Algebraïsche aanvallen converteren Booleaanse functies naar hun algebraïsche normale vorm (ANF), en gebruiken dan technieken zoals linearisatie, XL algoritme of Gröbner basis berekening om de resulterende polynoom systemen op te lossen en geheime sleutels te herstellen."
      }
    },
    {
      question: {
        en: "What distinguishes rotational cryptanalysis from other statistical attacks?",
        es: "¿Qué distingue el criptoanálisis rotacional de otros ataques estadísticos?",
        de: "Was unterscheidet Rotations-Kryptoanalyse von anderen statistischen Angriffen?",
        nl: "Wat onderscheidt rotationele cryptanalyse van andere statistische aanvallen?"
      },
      options: [
        { en: "Exploiting rotation-invariant properties in ARX ciphers", es: "Explotar propiedades invariantes de rotación en cifrados ARX", de: "Ausnutzung rotationsinvarianter Eigenschaften in ARX-Chiffren", nl: "Het uitbuiten van rotatie-invariante eigenschappen in ARX cijfers" },
        { en: "Rotating keys through multiple encryption rounds", es: "Rotar claves a través de múltiples rondas de cifrado", de: "Rotieren von Schlüsseln durch mehrere Verschlüsselungsrunden", nl: "Sleutels roteren door meerdere encryptie rondes" },
        { en: "Circular shifting of plaintext blocks", es: "Desplazamiento circular de bloques de texto plano", de: "Zirkuläres Verschieben von Klartextblöcken", nl: "Circulair verschuiven van platte tekst blokken" },
        { en: "Analyzing rotational symmetries in S-boxes", es: "Analizar simetrías rotacionales en S-boxes", de: "Analyse von Rotationssymmetrien in S-Boxen", nl: "Het analyseren van rotationele symmetrieën in S-boxes" }
      ],
      correct: 0,
      explanation: {
        en: "Rotational cryptanalysis exploits the fact that ARX (Addition, Rotation, XOR) ciphers may preserve rotational relationships between inputs and outputs, where rotating all inputs by the same amount produces predictably rotated outputs.",
        es: "El criptoanálisis rotacional explota el hecho de que los cifrados ARX (Adición, Rotación, XOR) pueden preservar relaciones rotacionales entre entradas y salidas, donde rotar todas las entradas por la misma cantidad produce salidas predeciblemente rotadas.",
        de: "Rotations-Kryptoanalyse nutzt die Tatsache aus, dass ARX (Addition, Rotation, XOR) Chiffren Rotationsbeziehungen zwischen Eingaben und Ausgaben bewahren können, wobei das Rotieren aller Eingaben um denselben Betrag vorhersagbar rotierte Ausgaben erzeugt.",
        nl: "Rotationele cryptanalyse benut het feit dat ARX (Addition, Rotation, XOR) cijfers rotationele relaties tussen invoer en uitvoer kunnen behouden, waarbij het roteren van alle invoer met dezelfde hoeveelheid voorspelbaar geroteerde uitvoer produceert."
      }
    },
    {
      question: {
        en: "What is the main vulnerability exploited in BREACH attacks on HTTPS?",
        es: "¿Cuál es la vulnerabilidad principal explotada en ataques BREACH en HTTPS?",
        de: "Was ist die Hauptverwundbarkeit, die in BREACH-Angriffen auf HTTPS ausgenutzt wird?",
        nl: "Wat is de belangrijkste kwetsbaarheid uitgebuit in BREACH aanvallen op HTTPS?"
      },
      options: [
        { en: "HTTP compression revealing secret lengths through size variations", es: "Compresión HTTP revelando longitudes secretas a través de variaciones de tamaño", de: "HTTP-Kompression, die geheime Längen durch Größenvariationen preisgibt", nl: "HTTP compressie die geheime lengtes onthult door grootte variaties" },
        { en: "SSL/TLS protocol design flaws", es: "Fallas de diseño del protocolo SSL/TLS", de: "SSL/TLS-Protokoll-Designfehler", nl: "SSL/TLS protocol ontwerp fouten" },
        { en: "Certificate validation bypasses", es: "Evasiones de validación de certificados", de: "Zertifikatsvalidierungs-Umgehungen", nl: "Certificaat validatie omzeilingen" },
        { en: "Weak cipher suite negotiations", es: "Negociaciones débiles de conjunto de cifrado", de: "Schwache Cipher-Suite-Verhandlungen", nl: "Zwakke cipher suite onderhandelingen" }
      ],
      correct: 0,
      explanation: {
        en: "BREACH (Browser Reconnaissance and Exfiltration via Adaptive Compression of Hypertext) exploits HTTP compression by observing how response sizes change when attacker-controlled data is compressed with secrets, revealing information about the secrets.",
        es: "BREACH (Reconocimiento y Exfiltración del Navegador vía Compresión Adaptativa de Hipertexto) explota la compresión HTTP observando cómo cambian los tamaños de respuesta cuando datos controlados por el atacante se comprimen con secretos, revelando información sobre los secretos.",
        de: "BREACH (Browser Reconnaissance and Exfiltration via Adaptive Compression of Hypertext) nutzt HTTP-Kompression aus, indem beobachtet wird, wie sich Antwortgrößen ändern, wenn vom Angreifer kontrollierte Daten mit Geheimnissen komprimiert werden, wodurch Informationen über die Geheimnisse preisgegeben werden.",
        nl: "BREACH (Browser Reconnaissance and Exfiltration via Adaptive Compression of Hypertext) benut HTTP compressie door te observeren hoe response groottes veranderen wanneer aanvaller-gecontroleerde data wordt gecomprimeerd met geheimen, waarbij informatie over de geheimen wordt onthuld."
      }
    },
    {
      question: {
        en: "Which technique is used in rowhammer attacks to compromise cryptographic keys?",
        es: "¿Qué técnica se usa en ataques rowhammer para comprometer claves criptográficas?",
        de: "Welche Technik wird in Rowhammer-Angriffen verwendet, um kryptographische Schlüssel zu kompromittieren?",
        nl: "Welke techniek wordt gebruikt in rowhammer aanvallen om cryptografische sleutels te compromitteren?"
      },
      options: [
        { en: "Inducing bit flips in adjacent memory rows through repeated access", es: "Inducir cambios de bits en filas de memoria adyacentes a través de acceso repetido", de: "Induzieren von Bit-Flips in benachbarten Speicherzeilen durch wiederholten Zugriff", nl: "Bit flips induceren in aangrenzende geheugen rijen door herhaalde toegang" },
        { en: "Hammering the CPU with cryptographic operations", es: "Martillar la CPU con operaciones criptográficas", de: "Die CPU mit kryptographischen Operationen hämmern", nl: "De CPU hameren met cryptografische operaties" },
        { en: "Physical destruction of memory cells", es: "Destrucción física de celdas de memoria", de: "Physische Zerstörung von Speicherzellen", nl: "Fysieke vernietiging van geheugen cellen" },
        { en: "Overwriting key storage locations", es: "Sobrescribir ubicaciones de almacenamiento de claves", de: "Überschreiben von Schlüsselspeicherorten", nl: "Sleutel opslag locaties overschrijven" }
      ],
      correct: 0,
      explanation: {
        en: "Rowhammer attacks repeatedly access specific DRAM rows to cause electrical interference that flips bits in adjacent rows, potentially modifying cryptographic keys, security permissions, or other critical data without direct access.",
        es: "Los ataques rowhammer acceden repetidamente a filas DRAM específicas para causar interferencia eléctrica que cambia bits en filas adyacentes, potencialmente modificando claves criptográficas, permisos de seguridad u otros datos críticos sin acceso directo.",
        de: "Rowhammer-Angriffe greifen wiederholt auf spezifische DRAM-Zeilen zu, um elektrische Interferenzen zu verursachen, die Bits in benachbarten Zeilen flippen und möglicherweise kryptographische Schlüssel, Sicherheitsberechtigungen oder andere kritische Daten ohne direkten Zugriff modifizieren.",
        nl: "Rowhammer aanvallen benaderen herhaaldelijk specifieke DRAM rijen om elektrische interferentie te veroorzaken die bits flipt in aangrenzende rijen, mogelijk cryptografische sleutels, beveiligingsrechten of andere kritieke data modificerend zonder directe toegang."
      }
    },
    {
      question: {
        en: "What is the primary goal of truncated differential cryptanalysis?",
        es: "¿Cuál es el objetivo principal del criptoanálisis diferencial truncado?",
        de: "Was ist das Hauptziel der verkürzten differentiellen Kryptoanalyse?",
        nl: "Wat is het primaire doel van afgekapte differentiële cryptanalyse?"
      },
      options: [
        { en: "Analyzing partial differences to reduce attack complexity", es: "Analizar diferencias parciales para reducir complejidad del ataque", de: "Analyse partieller Differenzen zur Reduzierung der Angriffskomplexität", nl: "Gedeeltelijke verschillen analyseren om aanval complexiteit te reduceren" },
        { en: "Truncating ciphertext to speed up analysis", es: "Truncar texto cifrado para acelerar análisis", de: "Chiffretext kürzen, um Analyse zu beschleunigen", nl: "Cijfertekst afkappen om analyse te versnellen" },
        { en: "Removing rounds from block ciphers", es: "Eliminar rondas de cifrados de bloque", de: "Runden aus Blockchiffren entfernen", nl: "Rondes verwijderen uit blokcijfers" },
        { en: "Shortening key lengths for faster attacks", es: "Acortar longitudes de clave para ataques más rápidos", de: "Schlüssellängen für schnellere Angriffe verkürzen", nl: "Sleutellengtes verkorten voor snellere aanvallen" }
      ],
      correct: 0,
      explanation: {
        en: "Truncated differential cryptanalysis tracks only partial differences (like specific bytes or words) rather than complete differences, often providing better probability characteristics and enabling attacks on more rounds than standard differential analysis.",
        es: "El criptoanálisis diferencial truncado rastrea solo diferencias parciales (como bytes o palabras específicas) en lugar de diferencias completas, a menudo proporcionando mejores características de probabilidad y habilitando ataques en más rondas que el análisis diferencial estándar.",
        de: "Verkürzte differentielle Kryptoanalyse verfolgt nur partielle Differenzen (wie spezifische Bytes oder Wörter) anstatt vollständige Differenzen, bietet oft bessere Wahrscheinlichkeitseigenschaften und ermöglicht Angriffe auf mehr Runden als Standard-Differentialanalyse.",
        nl: "Afgekapte differentiële cryptanalyse volgt alleen gedeeltelijke verschillen (zoals specifieke bytes of woorden) in plaats van complete verschillen, biedt vaak betere waarschijnlijkheidskenmerken en maakt aanvallen op meer rondes mogelijk dan standaard differentiële analyse."
      }
    },
    {
      question: {
        en: "Which vulnerability allows POODLE attacks on SSL 3.0?",
        es: "¿Qué vulnerabilidad permite ataques POODLE en SSL 3.0?",
        de: "Welche Verwundbarkeit ermöglicht POODLE-Angriffe auf SSL 3.0?",
        nl: "Welke kwetsbaarheid maakt POODLE aanvallen op SSL 3.0 mogelijk?"
      },
      options: [
        { en: "Non-deterministic CBC padding allowing oracle attacks", es: "Relleno CBC no determinista permitiendo ataques de oráculo", de: "Nicht-deterministisches CBC-Padding, das Oracle-Angriffe ermöglicht", nl: "Niet-deterministische CBC padding die oracle aanvallen mogelijk maakt" },
        { en: "Weak random number generation in handshake", es: "Generación débil de números aleatorios en handshake", de: "Schwache Zufallszahlengenerierung im Handshake", nl: "Zwakke willekeurige nummer generatie in handshake" },
        { en: "Vulnerable cipher suite selection", es: "Selección vulnerable de conjunto de cifrado", de: "Verwundbare Cipher-Suite-Auswahl", nl: "Kwetsbare cipher suite selectie" },
        { en: "Certificate chain validation errors", es: "Errores de validación de cadena de certificados", de: "Zertifikatsketten-Validierungsfehler", nl: "Certificaat keten validatie fouten" }
      ],
      correct: 0,
      explanation: {
        en: "POODLE (Padding Oracle On Downgraded Legacy Encryption) exploits SSL 3.0's non-deterministic CBC padding, where the padding content isn't verified, allowing attackers to decrypt messages byte-by-byte through padding oracle attacks.",
        es: "POODLE (Oráculo de Relleno en Cifrado Legado Degradado) explota el relleno CBC no determinista de SSL 3.0, donde el contenido del relleno no se verifica, permitiendo a atacantes descifrar mensajes byte por byte a través de ataques de oráculo de relleno.",
        de: "POODLE (Padding Oracle On Downgraded Legacy Encryption) nutzt das nicht-deterministische CBC-Padding von SSL 3.0 aus, bei dem der Padding-Inhalt nicht verifiziert wird, wodurch Angreifer Nachrichten Byte für Byte durch Padding-Oracle-Angriffe entschlüsseln können.",
        nl: "POODLE (Padding Oracle On Downgraded Legacy Encryption) benut SSL 3.0's niet-deterministische CBC padding, waarbij de padding inhoud niet wordt geverifieerd, waardoor aanvallers berichten byte-voor-byte kunnen ontcijferen door padding oracle aanvallen."
      }
    },
    {
      question: {
        en: "What is the fundamental principle behind zero-knowledge proof-based cryptanalysis?",
        es: "¿Cuál es el principio fundamental detrás del criptoanálisis basado en pruebas de conocimiento cero?",
        de: "Was ist das grundlegende Prinzip hinter Zero-Knowledge-Proof-basierter Kryptoanalyse?",
        nl: "Wat is het fundamentele principe achter zero-knowledge proof-gebaseerde cryptanalyse?"
      },
      options: [
        { en: "Extracting information from proof transcripts without breaking zero-knowledge", es: "Extraer información de transcripciones de pruebas sin romper conocimiento cero", de: "Informationsextraktion aus Beweistranskripten ohne Zero-Knowledge zu brechen", nl: "Informatie extraheren uit bewijs transcripten zonder zero-knowledge te breken" },
        { en: "Using zero-knowledge proofs to hide attack methods", es: "Usar pruebas de conocimiento cero para ocultar métodos de ataque", de: "Verwendung von Zero-Knowledge-Beweisen zum Verbergen von Angriffsmethoden", nl: "Zero-knowledge bewijzen gebruiken om aanvalsmethoden te verbergen" },
        { en: "Proving cryptographic breaks without revealing them", es: "Probar rupturas criptográficas sin revelarlas", de: "Kryptographische Brüche beweisen ohne sie zu enthüllen", nl: "Cryptografische breuken bewijzen zonder ze te onthullen" },
        { en: "Eliminating knowledge requirements in attacks", es: "Eliminar requisitos de conocimiento en ataques", de: "Wissensanforderungen in Angriffen eliminieren", nl: "Kennis vereisten in aanvallen elimineren" }
      ],
      correct: 0,
      explanation: {
        en: "Zero-knowledge proof-based cryptanalysis analyzes proof transcripts and protocol interactions to extract information about secret values through statistical analysis, timing patterns, or implementation flaws, without violating the theoretical zero-knowledge property.",
        es: "El criptoanálisis basado en pruebas de conocimiento cero analiza transcripciones de pruebas e interacciones de protocolo para extraer información sobre valores secretos a través de análisis estadístico, patrones de tiempo o fallas de implementación, sin violar la propiedad teórica de conocimiento cero.",
        de: "Zero-Knowledge-Proof-basierte Kryptoanalyse analysiert Beweistranskripte und Protokollinteraktionen, um Informationen über geheime Werte durch statistische Analyse, Timing-Muster oder Implementierungsfehler zu extrahieren, ohne die theoretische Zero-Knowledge-Eigenschaft zu verletzen.",
        nl: "Zero-knowledge proof-gebaseerde cryptanalyse analyseert bewijs transcripten en protocol interacties om informatie over geheime waarden te extraheren door statistische analyse, timing patronen of implementatie fouten, zonder de theoretische zero-knowledge eigenschap te schenden."
      }
    },
    {
      question: {
        en: "What is the primary advantage of lattice-based cryptanalysis over traditional algebraic methods?",
        es: "¿Cuál es la ventaja principal del criptoanálisis basado en retículas sobre los métodos algebraicos tradicionales?",
        de: "Was ist der Hauptvorteil der gitterbasierten Kryptoanalyse gegenüber traditionellen algebraischen Methoden?",
        nl: "Wat is het primaire voordeel van lattice-gebaseerde cryptanalyse ten opzichte van traditionele algebraïsche methoden?"
      },
      options: [
        { en: "Efficient approximation algorithms for solving hard lattice problems", es: "Algoritmos de aproximación eficientes para resolver problemas difíciles de retículas", de: "Effiziente Approximationsalgorithmen zur Lösung schwieriger Gitterprobleme", nl: "Efficiënte benaderingsalgoritmen voor het oplossen van moeilijke lattice problemen" },
        { en: "Direct polynomial-time solutions to exponential problems", es: "Soluciones directas en tiempo polinómico a problemas exponenciales", de: "Direkte polynomiale Lösungen für exponentielle Probleme", nl: "Directe polynomiale tijd oplossingen voor exponentiële problemen" },
        { en: "Quantum resistance in all cryptographic contexts", es: "Resistencia cuántica en todos los contextos criptográficos", de: "Quantenresistenz in allen kryptographischen Kontexten", nl: "Kwantumresistentie in alle cryptografische contexten" },
        { en: "Perfect accuracy without approximation errors", es: "Precisión perfecta sin errores de aproximación", de: "Perfekte Genauigkeit ohne Approximationsfehler", nl: "Perfecte nauwkeurigheid zonder benaderingsfouten" }
      ],
      correct: 0,
      explanation: {
        en: "Lattice-based cryptanalysis leverages algorithms like LLL (Lenstra-Lenstra-Lovász) and BKZ (Block Korkine-Zolotarev) that can efficiently find approximate solutions to lattice problems, making previously intractable cryptanalytic attacks feasible by reducing high-dimensional problems to manageable computations.",
        es: "El criptoanálisis basado en retículas aprovecha algoritmos como LLL (Lenstra-Lenstra-Lovász) y BKZ (Block Korkine-Zolotarev) que pueden encontrar eficientemente soluciones aproximadas a problemas de retículas, haciendo factibles ataques criptoanalíticos previamente intratables al reducir problemas de alta dimensión a cálculos manejables.",
        de: "Gitterbasierte Kryptoanalyse nutzt Algorithmen wie LLL (Lenstra-Lenstra-Lovász) und BKZ (Block Korkine-Zolotarev), die effizient approximative Lösungen für Gitterprobleme finden können, wodurch zuvor unlösbare kryptoanalytische Angriffe durchführbar werden, indem hochdimensionale Probleme auf handhabbare Berechnungen reduziert werden.",
        nl: "Lattice-gebaseerde cryptanalyse maakt gebruik van algoritmen zoals LLL (Lenstra-Lenstra-Lovász) en BKZ (Block Korkine-Zolotarev) die efficiënt benaderende oplossingen kunnen vinden voor lattice problemen, waardoor eerder onhanteerbare cryptanalytische aanvallen haalbaar worden door hoogdimensionale problemen te reduceren tot beheerbare berekeningen."
      }
    }
  ]
});
