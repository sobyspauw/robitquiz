// Main questions file - combines all subjects
// Initialize groups array immediately (legacy, no longer used)
window.groups = [];

// Legacy subject definitions - NO LONGER USED
// Now using mainTopics structure below
window.subjectDefinitions = {
  // All old tier-based subjects removed - using new mainTopics structure
};

// Function to add a level to a subject
window.addLevel = function(subjectKey, levelData) {
  if (!window.subjectDefinitions[subjectKey]) {
    console.error(`Unknown subject: ${subjectKey}`);
    return;
  }
  
  window.subjectDefinitions[subjectKey].levels.push(levelData);
  console.log(`Added level to ${subjectKey}: ${levelData.name.en}, Total levels: ${window.subjectDefinitions[subjectKey].levels.length}`);
  
  // Check if all levels for this subject are loaded (10 levels expected)
  if (window.subjectDefinitions[subjectKey].levels.length === 10) {
    console.log(`All levels loaded for ${subjectKey}, creating subject...`);
    createSubject(subjectKey);
  }
};

// Function to create a complete subject from loaded levels
function createSubject(subjectKey) {
  const subjectDef = window.subjectDefinitions[subjectKey];
  const subject = {
    name: subjectDef.name,
    icon: subjectDef.icon,
    levels: subjectDef.levels.sort((a, b) => {
      // Sort levels by name to ensure correct order (Level 1, Level 2, etc.)
      const aNum = parseInt(a.name.en.match(/\d+/)?.[0] || '0');
      const bNum = parseInt(b.name.en.match(/\d+/)?.[0] || '0');
      return aNum - bNum;
    })
  };
  
  window.groups.push(subject);
  console.log(`Created subject: ${subject.name.en}, Total subjects: ${window.groups.length}`);
  
  checkAllSubjectsLoaded();
}

// Function to add a subject to the main groups array (for backwards compatibility)
window.addSubject = function(subject) {
  if (!window.groups) {
    window.groups = [];
  }
  window.groups.push(subject);
  console.log(`Added subject: ${subject.name.en}, Total subjects: ${window.groups.length}`);
};

// Subject loading tracking (legacy - no longer used)
window.subjectsLoaded = 0;
window.expectedSubjects = 0; // Set to 0 since we're using mainTopics now

window.checkAllSubjectsLoaded = function() {
  if (window.groups.length >= window.expectedSubjects) {
    console.log('All subjects loaded successfully!');
    console.log(`Total subjects: ${window.groups.length}`);
    console.log('Groups available:', window.groups.map(g => g.name.en));

    // Trigger any callbacks waiting for subjects to load
    if (window.onSubjectsLoaded) {
      window.onSubjectsLoaded();
    }
  }
};

// ===== NEW MAIN TOPICS STRUCTURE =====
// Main topics with subcategories (new structure for AI, Egypt, etc.)
window.mainTopics = {
  'ai': {
    id: 'ai',
    name: { en: "AI", es: "IA", de: "KI", nl: "AI" },
    icon: "🤖",
    unlockCost: 0,
    folder: "ai",
    subcategories: [
      { id: 'ai-ethics', name: { en: "AI Ethics", es: "Ética de IA", de: "KI-Ethik", nl: "AI Ethiek" }, icon: "⚖️", folder: "AI Ethics" },
      { id: 'ai-history', name: { en: "AI History", es: "Historia de IA", de: "KI-Geschichte", nl: "AI Geschiedenis" }, icon: "📚", folder: "AI History" },
      { id: 'ai-gaming', name: { en: "AI in Gaming", es: "IA en Juegos", de: "KI im Gaming", nl: "AI in Gaming" }, icon: "🎮", folder: "AI in Gaming" },
      { id: 'ai-transport', name: { en: "AI in Transport", es: "IA en Transporte", de: "KI im Transport", nl: "AI in Transport" }, icon: "🚗", folder: "AI in Transport" },
      { id: 'famous-ai-systems', name: { en: "Famous AI Systems", es: "Sistemas de IA Famosos", de: "Berühmte KI-Systeme", nl: "Bekende AI-systemen" }, icon: "🏆", folder: "Famous AI Systems" },
      { id: 'computer-vision', name: { en: "Computer Vision", es: "Visión por Computadora", de: "Computer Vision", nl: "Computer Vision" }, icon: "👁️", folder: "Computer vision" },
      { id: 'deep-learning', name: { en: "Deep Learning", es: "Aprendizaje Profundo", de: "Deep Learning", nl: "Deep Learning" }, icon: "🧠", folder: "Deep learning" },
      { id: 'machine-learning', name: { en: "Machine Learning", es: "Aprendizaje Automático", de: "Maschinelles Lernen", nl: "Machine Learning" }, icon: "🤖", folder: "Machine learning" },
      { id: 'nlp', name: { en: "Natural Language Processing", es: "Procesamiento de Lenguaje Natural", de: "Natürliche Sprachverarbeitung", nl: "Natuurlijke Taalverwerking" }, icon: "💬", folder: "Natural Language Processing" },
      { id: 'reinforcement-learning', name: { en: "Reinforcement Learning", es: "Aprendizaje por Refuerzo", de: "Verstärkungslernen", nl: "Reinforcement Learning" }, icon: "🎯", folder: "Reinforcement Learning" },
      { id: 'robotics', name: { en: "Robotics", es: "Robótica", de: "Robotik", nl: "Robotica" }, icon: "🤖", folder: "Robotics" }
    ]
  },
  'egypt': {
    id: 'egypt',
    name: { en: "Egypt", es: "Egipto", de: "Ägypten", nl: "Egypte" },
    icon: "🏛️",
    unlockCost: 50,
    folder: "egypt",
    subcategories: [
      { id: 'cleopatra', name: { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" }, icon: "👑", folder: "Cleopatra" },
      { id: 'egyptian-art', name: { en: "Egyptian Art", es: "Arte Egipcio", de: "Ägyptische Kunst", nl: "Egyptische Kunst" }, icon: "🎨", folder: "Egyptian Art" },
      { id: 'egyptian-cities', name: { en: "Egyptian Cities", es: "Ciudades Egipcias", de: "Ägyptische Städte", nl: "Egyptische Steden" }, icon: "🏙️", folder: "Egyptian Cities" },
      { id: 'egyptian-gods', name: { en: "Egyptian Gods", es: "Dioses Egipcios", de: "Ägyptische Götter", nl: "Egyptische Goden" }, icon: "🌟", folder: "Egyptian Gods" },
      { id: 'hieroglyphs', name: { en: "Hieroglyphs", es: "Jeroglíficos", de: "Hieroglyphen", nl: "Hiërogliefen" }, icon: "📜", folder: "Hieroglyphs" },
      { id: 'mummification', name: { en: "Mummification", es: "Momificación", de: "Mumifizierung", nl: "Mummificatie" }, icon: "🏺", folder: "Mummification" },
      { id: 'nile-culture', name: { en: "Nile Culture", es: "Cultura del Nilo", de: "Nil-Kultur", nl: "Nijl Cultuur" }, icon: "🌊", folder: "Nile Culture" },
      { id: 'pharaohs', name: { en: "Pharaohs", es: "Faraones", de: "Pharaonen", nl: "Farao's" }, icon: "👤", folder: "Pharaohs" },
      { id: 'pyramids', name: { en: "Pyramids", es: "Pirámides", de: "Pyramiden", nl: "Piramides" }, icon: "🔺", folder: "Pyramids" },
      { id: 'valley-kings', name: { en: "Valley of the Kings", es: "Valle de los Reyes", de: "Tal der Könige", nl: "Dal der Koningen" }, icon: "⚰️", folder: "Valley of the Kings" },
      { id: 'ancient-rulers', name: { en: "Ancient Rulers", es: "Gobernantes Antiguos", de: "Antike Herrscher", nl: "Oude Heersers" }, icon: "👑", folder: "Ancient Rulers" },
      { id: 'daily-life', name: { en: "Daily Life", es: "Vida Cotidiana", de: "Alltägliches Leben", nl: "Dagelijks Leven" }, icon: "🏡", folder: "Daily Life" },
      { id: 'egypt-technology', name: { en: "Technology", es: "Tecnología", de: "Technologie", nl: "Technologie" }, icon: "⚙️", folder: "Technology" },
      { id: 'tombs-afterlife', name: { en: "Tombs and Afterlife", es: "Tumbas y Vida Después de la Muerte", de: "Gräber und Jenseits", nl: "Graven en Hiernamaals" }, icon: "⚰️", folder: "Tombs and Afterlife" },
      { id: 'trade-economy', name: { en: "Trade and Economy", es: "Comercio y Economía", de: "Handel und Wirtschaft", nl: "Handel en Economie" }, icon: "💰", folder: "Trade and Economy" },
      { id: 'egypt-warfare', name: { en: "Warfare", es: "Guerra", de: "Kriegsführung", nl: "Oorlogsvoering" }, icon: "⚔️", folder: "Warfare" }
    ]
  },
  'food': {
    id: 'food',
    name: { en: "Food", es: "Comida", de: "Essen", nl: "Eten" },
    icon: "🍽️",
    unlockCost: 50,
    folder: "food",
    subcategories: [
      { id: 'barbecue', name: { en: "Barbecue", es: "Barbacoa", de: "Grill", nl: "Barbecue" }, icon: "🍖", folder: "Barbecue" },
      { id: 'bread-types', name: { en: "Bread Types", es: "Tipos de Pan", de: "Brotarten", nl: "Broodsoorten" }, icon: "🍞", folder: "Bread Types" },
      { id: 'national-dishes', name: { en: "National Dishes", es: "Platos Nacionales", de: "Nationalgerichte", nl: "Nationale Gerechten" }, icon: "🌍", folder: "National Dishes" },
      { id: 'pasta-types', name: { en: "Pasta Types", es: "Tipos de Pasta", de: "Pasta-Arten", nl: "Pasta Soorten" }, icon: "🍝", folder: "Pasta Types" },
      { id: 'rice-dishes', name: { en: "Rice Dishes", es: "Platos de Arroz", de: "Reisgerichte", nl: "Rijstgerechten" }, icon: "🍚", folder: "Rice Dishes" },
      { id: 'salads', name: { en: "Salads", es: "Ensaladas", de: "Salate", nl: "Salades" }, icon: "🥗", folder: "Salads" },
      { id: 'seafood', name: { en: "Seafood", es: "Mariscos", de: "Meeresfrüchte", nl: "Zeevruchten" }, icon: "🦐", folder: "Seafood" },
      { id: 'soups', name: { en: "Soups", es: "Sopas", de: "Suppen", nl: "Soepen" }, icon: "🍲", folder: "Soups" },
      { id: 'street-food', name: { en: "Street Food", es: "Comida Callejera", de: "Street Food", nl: "Straatvoedsel" }, icon: "🌮", folder: "Street Food" },
      { id: 'vegetarian', name: { en: "Vegetarian Dishes", es: "Platos Vegetarianos", de: "Vegetarische Gerichte", nl: "Vegetarische Gerechten" }, icon: "🥬", folder: "Vegetarian Dishes" },
      { id: 'breakfast-foods', name: { en: "Breakfast Foods", es: "Desayunos", de: "Frühstücksgerichte", nl: "Ontbijtgerechten" }, icon: "🍳", folder: "Breakfast Foods" },
      { id: 'cheeses', name: { en: "Cheeses", es: "Quesos", de: "Käse", nl: "Kazen" }, icon: "🧀", folder: "Cheeses" },
      { id: 'cooking-methods', name: { en: "Cooking Methods", es: "Métodos de Cocción", de: "Kochmethoden", nl: "Kookmethoden" }, icon: "👨‍🍳", folder: "Cooking Methods" },
      { id: 'fusion-cuisine', name: { en: "Fusion Cuisine", es: "Cocina de Fusión", de: "Fusionsküche", nl: "Fusion Keuken" }, icon: "🌏", folder: "Fusion Cuisine" }
    ]
  },
  'f1': {
    id: 'f1',
    name: { en: "F1", es: "F1", de: "F1", nl: "F1" },
    icon: "🏎️",
    unlockCost: 70,
    folder: "f1",
    subcategories: [
      { id: 'auto-innovaties', name: { en: "Car Innovations", es: "Innovaciones de Autos", de: "Auto-Innovationen", nl: "Auto-innovaties" }, icon: "🔧", folder: "Auto-innovaties" },
      { id: 'bekende-circuits', name: { en: "Famous Circuits", es: "Circuitos Famosos", de: "Berühmte Strecken", nl: "Bekende Circuits" }, icon: "🏁", folder: "Bekende circuits" },
      { id: 'kampioenschappen', name: { en: "Championships", es: "Campeonatos", de: "Meisterschaften", nl: "Kampioenschappen" }, icon: "🏆", folder: "Kampioenschappen" },
      { id: 'legendary-drivers', name: { en: "Legendary Drivers", es: "Pilotos Legendarios", de: "Legendäre Fahrer", nl: "Legendarische Coureurs" }, icon: "👤", folder: "Legendarische coureurs" },
      { id: 'modern-stars', name: { en: "Modern Superstars", es: "Superestrellas Modernas", de: "Moderne Superstars", nl: "Moderne Supersterren" }, icon: "⭐", folder: "Moderne supersterren" },
      { id: 'accidents-safety', name: { en: "Accidents & Safety", es: "Accidentes y Seguridad", de: "Unfälle & Sicherheit", nl: "Ongevallen & Safety" }, icon: "⚠️", folder: "Ongevallen & safety" },
      { id: 'records', name: { en: "Records", es: "Récords", de: "Rekorde", nl: "Records" }, icon: "📊", folder: "Records" },
      { id: 'rivaliteiten', name: { en: "Rivalries", es: "Rivalidades", de: "Rivalitäten", nl: "Rivaliteiten" }, icon: "⚔️", folder: "Rivaliteiten" },
      { id: 'teams', name: { en: "Teams", es: "Equipos", de: "Teams", nl: "Teams" }, icon: "🏁", folder: "Teams" },
      { id: 'famous-races', name: { en: "Famous Races", es: "Carreras Famosas", de: "Berühmte Rennen", nl: "Beroemde Races" }, icon: "🏁", folder: "Famous Races" },
      { id: 'pitstop-strategies', name: { en: "Pitstop Strategies", es: "Estrategias de Pitstop", de: "Boxenstopp-Strategien", nl: "Pitstop Strategieën" }, icon: "⚙️", folder: "Pitstop strategieën" },
      { id: 'recordhouders', name: { en: "Record Holders", es: "Poseedores de Récords", de: "Rekordhalter", nl: "Recordhouders" }, icon: "🥇", folder: "Recordhouders" }
    ]
  },
  'board-games': {
    id: 'board-games',
    name: { en: "Board Games", es: "Juegos de Mesa", de: "Brettspiele", nl: "Bordspellen" },
    icon: "🎲",
    unlockCost: 60,
    folder: "board-games",
    subcategories: [
      { id: 'backgammon', name: { en: "Backgammon", es: "Backgammon", de: "Backgammon", nl: "Backgammon" }, icon: "⚫", folder: "Backgammon" },
      { id: 'card-games', name: { en: "Card Games", es: "Juegos de Cartas", de: "Kartenspiele", nl: "Kaartspellen" }, icon: "🃏", folder: "Card Games" },
      { id: 'catan', name: { en: "Catan", es: "Catán", de: "Catan", nl: "Catan" }, icon: "🏝️", folder: "Catan" },
      { id: 'checkers', name: { en: "Checkers", es: "Damas", de: "Dame", nl: "Dammen" }, icon: "⚪", folder: "Checkers" },
      { id: 'chess', name: { en: "Chess", es: "Ajedrez", de: "Schach", nl: "Schaken" }, icon: "♟️", folder: "Chess" },
      { id: 'clue', name: { en: "Clue", es: "Cluedo", de: "Cluedo", nl: "Cluedo" }, icon: "🔍", folder: "Clue" },
      { id: 'monopoly', name: { en: "Monopoly", es: "Monopoly", de: "Monopoly", nl: "Monopoly" }, icon: "🏠", folder: "Monopoly" },
      { id: 'risk', name: { en: "Risk", es: "Risk", de: "Risiko", nl: "Risk" }, icon: "🌍", folder: "Risk" },
      { id: 'scrabble', name: { en: "Scrabble", es: "Scrabble", de: "Scrabble", nl: "Scrabble" }, icon: "🔤", folder: "Scrabble" },
      { id: 'stratego', name: { en: "Stratego", es: "Stratego", de: "Stratego", nl: "Stratego" }, icon: "⚔️", folder: "Stratego" },
      { id: 'go', name: { en: "Go", es: "Go", de: "Go", nl: "Go" }, icon: "⚫", folder: "Go" },
      { id: 'trivial-pursuit', name: { en: "Trivial Pursuit", es: "Trivial Pursuit", de: "Trivial Pursuit", nl: "Trivial Pursuit" }, icon: "🧩", folder: "Trivial Pursuit" }
    ]
  },
  'books': {
    id: 'books',
    name: { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" },
    icon: "📚",
    unlockCost: 40,
    folder: "books",
    subcategories: [
      { id: 'adventure-books', name: { en: "Adventure Books", es: "Libros de Aventuras", de: "Abenteuerbücher", nl: "Avonturenboeken" }, icon: "🗺️", folder: "Adventure Books" },
      { id: 'biographies', name: { en: "Biographies", es: "Biografías", de: "Biografien", nl: "Biografieën" }, icon: "👤", folder: "Biographies" },
      { id: 'childrens-books', name: { en: "Children's Books", es: "Libros Infantiles", de: "Kinderbücher", nl: "Kinderboeken" }, icon: "🧒", folder: "Children's Books" },
      { id: 'classic-literature', name: { en: "Classic Literature", es: "Literatura Clásica", de: "Klassische Literatur", nl: "Klassieke Literatuur" }, icon: "📖", folder: "Classic Literature" },
      { id: 'detective-novels', name: { en: "Detective Novels", es: "Novelas Detectivescas", de: "Kriminalromane", nl: "Detectiveromans" }, icon: "🕵️", folder: "Detective Novels" },
      { id: 'fantasy-novels', name: { en: "Fantasy Novels", es: "Novelas de Fantasía", de: "Fantasy-Romane", nl: "Fantasyromans" }, icon: "🐉", folder: "Fantasy Novels" },
      { id: 'historical-novels', name: { en: "Historical Novels", es: "Novelas Históricas", de: "Historische Romane", nl: "Historische Romans" }, icon: "⏳", folder: "Historical Novels" },
      { id: 'non-fiction', name: { en: "Non-Fiction", es: "No Ficción", de: "Sachbücher", nl: "Non-fictie" }, icon: "📰", folder: "Non-Fiction" },
      { id: 'poetry', name: { en: "Poetry", es: "Poesía", de: "Poesie", nl: "Poëzie" }, icon: "✍️", folder: "Poetry" },
      { id: 'science-fiction', name: { en: "Science Fiction", es: "Ciencia Ficción", de: "Science-Fiction", nl: "Science Fiction" }, icon: "🚀", folder: "Science Fiction Novels" }
    ]
  },
  'currencies': {
    id: 'currencies',
    name: { en: "Currencies", es: "Monedas", de: "Währungen", nl: "Valuta" },
    icon: "💰",
    unlockCost: 55,
    folder: "currencies",
    subcategories: [
      { id: 'cryptocurrency', name: { en: "Cryptocurrency", es: "Criptomonedas", de: "Kryptowährung", nl: "Cryptocurrency" }, icon: "₿", folder: "Cryptocurrency" },
      { id: 'dollar', name: { en: "Dollar", es: "Dólar", de: "Dollar", nl: "Dollar" }, icon: "💵", folder: "Dollar" },
      { id: 'euro', name: { en: "Euro", es: "Euro", de: "Euro", nl: "Euro" }, icon: "💶", folder: "Euro" },
      { id: 'gold-standard', name: { en: "Gold Standard", es: "Patrón Oro", de: "Goldstandard", nl: "Goudstandaard" }, icon: "🥇", folder: "Gold Standard" },
      { id: 'historical-coins', name: { en: "Historical Coins", es: "Monedas Históricas", de: "Historische Münzen", nl: "Historische Munten" }, icon: "🪙", folder: "Historical Coins" },
      { id: 'hyperinflation', name: { en: "Hyperinflation", es: "Hiperinflación", de: "Hyperinflation", nl: "Hyperinflatie" }, icon: "📉", folder: "Hyperinflation Currencies" },
      { id: 'pound', name: { en: "Pound", es: "Libra", de: "Pfund", nl: "Pond" }, icon: "💷", folder: "Pound" },
      { id: 'rare-currencies', name: { en: "Rare Currencies", es: "Monedas Raras", de: "Seltene Währungen", nl: "Zeldzame Valuta" }, icon: "💎", folder: "Rare Currencies" },
      { id: 'yen', name: { en: "Yen", es: "Yen", de: "Yen", nl: "Yen" }, icon: "💴", folder: "Yen" },
      { id: 'yuan', name: { en: "Yuan", es: "Yuan", de: "Yuan", nl: "Yuan" }, icon: "💴", folder: "Yuan" },
      { id: 'african-currencies', name: { en: "African Currencies", es: "Monedas Africanas", de: "Afrikanische Währungen", nl: "Afrikaanse Valuta" }, icon: "🌍", folder: "African Currencies" },
      { id: 'american-currencies', name: { en: "American Currencies", es: "Monedas Americanas", de: "Amerikanische Währungen", nl: "Amerikaanse Valuta" }, icon: "🌎", folder: "American Currencies" },
      { id: 'asian-currencies', name: { en: "Asian Currencies", es: "Monedas Asiáticas", de: "Asiatische Währungen", nl: "Aziatische Valuta" }, icon: "🌏", folder: "Asian Currencies" },
      { id: 'currency-history', name: { en: "Currency History", es: "Historia de las Monedas", de: "Währungsgeschichte", nl: "Valutageschiedenis" }, icon: "📚", folder: "Currency History" },
      { id: 'digital-payments', name: { en: "Digital Payments", es: "Pagos Digitales", de: "Digitale Zahlungen", nl: "Digitale Betalingen" }, icon: "📱", folder: "Digital Payments" },
      { id: 'european-currencies', name: { en: "European Currencies", es: "Monedas Europeas", de: "Europäische Währungen", nl: "Europese Valuta" }, icon: "🇪🇺", folder: "European Currencies" },
      { id: 'exchange-rates', name: { en: "Exchange Rates", es: "Tipos de Cambio", de: "Wechselkurse", nl: "Wisselkoersen" }, icon: "📈", folder: "Exchange Rates" },
      { id: 'historical-currencies', name: { en: "Historical Currencies", es: "Monedas Históricas Antiguas", de: "Historische Währungen", nl: "Historische Valuta" }, icon: "🏛️", folder: "Historical Currencies" },
      { id: 'reserve-currencies', name: { en: "Reserve Currencies", es: "Monedas de Reserva", de: "Reservewährungen", nl: "Reservevaluta" }, icon: "🏦", folder: "Reserve Currencies" },
      { id: 'world-currencies', name: { en: "World Currencies", es: "Monedas del Mundo", de: "Weltwährungen", nl: "Wereldvaluta" }, icon: "🌐", folder: "World Currencies" }
    ]
  },
  'desserts': {
    id: 'desserts',
    name: { en: "Desserts", es: "Postres", de: "Desserts", nl: "Desserts" },
    icon: "🍰",
    unlockCost: 35,
    folder: "desserts",
    subcategories: [
      { id: 'cakes', name: { en: "Cakes", es: "Pasteles", de: "Kuchen", nl: "Taarten" }, icon: "🎂", folder: "Cakes" },
      { id: 'chocolate-desserts', name: { en: "Chocolate Desserts", es: "Postres de Chocolate", de: "Schokoladendesserts", nl: "Chocoladedesserts" }, icon: "🍫", folder: "Chocolate Desserts" },
      { id: 'cookies', name: { en: "Cookies", es: "Galletas", de: "Kekse", nl: "Koekjes" }, icon: "🍪", folder: "Cookies" },
      { id: 'custards', name: { en: "Custards", es: "Natillas", de: "Pudding", nl: "Vla" }, icon: "🍮", folder: "Custards" },
      { id: 'donuts', name: { en: "Donuts", es: "Donas", de: "Donuts", nl: "Donuts" }, icon: "🍩", folder: "Donuts" },
      { id: 'fruit-desserts', name: { en: "Fruit Desserts", es: "Postres de Frutas", de: "Fruchtdesserts", nl: "Fruitdesserts" }, icon: "🍓", folder: "Fruit Desserts" },
      { id: 'ice-cream', name: { en: "Ice Cream", es: "Helado", de: "Eiscreme", nl: "IJs" }, icon: "🍦", folder: "Ice Cream Desserts" },
      { id: 'international-desserts', name: { en: "International Desserts", es: "Postres Internacionales", de: "Internationale Desserts", nl: "Internationale Desserts" }, icon: "🌍", folder: "International Desserts" },
      { id: 'pastries', name: { en: "Pastries", es: "Pastelería", de: "Gebäck", nl: "Gebak" }, icon: "🥐", folder: "Pastries" },
      { id: 'puddings', name: { en: "Puddings", es: "Pudines", de: "Puddings", nl: "Puddings" }, icon: "🍮", folder: "Puddings" },
      { id: 'pancakes', name: { en: "Pancakes", es: "Panqueques", de: "Pfannkuchen", nl: "Pannenkoeken" }, icon: "🥞", folder: "Pancakes" },
      { id: 'pies', name: { en: "Pies", es: "Tartas", de: "Kuchen", nl: "Taarten" }, icon: "🥧", folder: "Pies" },
      { id: 'regional-desserts', name: { en: "Regional Desserts", es: "Postres Regionales", de: "Regionale Desserts", nl: "Regionale Desserts" }, icon: "🗺️", folder: "Regional Desserts" },
      { id: 'sugar-confections', name: { en: "Sugar Confections", es: "Confitería de Azúcar", de: "Zuckerkonfekte", nl: "Suikerwaren" }, icon: "🍬", folder: "Sugar Confections" }
    ]
  },
  'dinosaurs': {
    id: 'dinosaurs',
    name: { en: "Dinosaurs", es: "Dinosaurios", de: "Dinosaurier", nl: "Dinosaurussen" },
    icon: "🦕",
    unlockCost: 45,
    folder: "dinosaurs",
    subcategories: [
      { id: 'cretaceous', name: { en: "Cretaceous Dinosaurs", es: "Dinosaurios del Cretácico", de: "Kreidezeit-Dinosaurier", nl: "Krijt Dinosaurussen" }, icon: "🦖", folder: "Cretaceous Dinosaurs" },
      { id: 'fossils', name: { en: "Dinosaur Fossils", es: "Fósiles de Dinosaurios", de: "Dinosaurier-Fossilien", nl: "Dinosaurus Fossielen" }, icon: "🦴", folder: "Dinosaur Fossils" },
      { id: 'early-dinosaurs', name: { en: "Early Dinosaurs", es: "Dinosaurios Tempranos", de: "Frühe Dinosaurier", nl: "Vroege Dinosaurussen" }, icon: "🦎", folder: "Early Dinosaurs" },
      { id: 'horned', name: { en: "Horned Dinosaurs", es: "Dinosaurios con Cuernos", de: "Gehörnte Dinosaurier", nl: "Gehoornde Dinosaurussen" }, icon: "🦏", folder: "Horned Dinosaurs" },
      { id: 'jurassic', name: { en: "Jurassic Dinosaurs", es: "Dinosaurios del Jurásico", de: "Jura-Dinosaurier", nl: "Jura Dinosaurussen" }, icon: "🦕", folder: "Jurassic Dinosaurs" },
      { id: 'marine-reptiles', name: { en: "Marine Reptiles", es: "Reptiles Marinos", de: "Meeresreptilien", nl: "Zee Reptielen" }, icon: "🐊", folder: "Marine Reptiles" },
      { id: 'pterosaurs', name: { en: "Pterosaurs", es: "Pterosaurios", de: "Flugsaurier", nl: "Pterosauriërs" }, icon: "🦅", folder: "Pterosaurs" },
      { id: 'sauropods', name: { en: "Sauropods", es: "Saurópodos", de: "Sauropoden", nl: "Sauropoden" }, icon: "🦕", folder: "Sauropods" },
      { id: 'trex-family', name: { en: "T-Rex Family", es: "Familia T-Rex", de: "T-Rex-Familie", nl: "T-Rex Familie" }, icon: "🦖", folder: "T-Rex Family" },
      { id: 'velociraptors', name: { en: "Velociraptors", es: "Velociraptores", de: "Velociraptoren", nl: "Velociraptors" }, icon: "🦖", folder: "Velociraptors" },
      { id: 'ankylosaurs', name: { en: "Ankylosaurs", es: "Anquilosaurios", de: "Ankylosaurier", nl: "Ankylosaurussen" }, icon: "🛡️", folder: "Ankylosaurs" },
      { id: 'hadrosaurs', name: { en: "Hadrosaurs", es: "Hadrosaurios", de: "Hadrosaurier", nl: "Hadrosaurussen" }, icon: "🦕", folder: "Hadrosaurs" },
      { id: 'stegosaurs', name: { en: "Stegosaurs", es: "Estegosaurios", de: "Stegosaurier", nl: "Stegosaurussen" }, icon: "🦖", folder: "Stegosaurs" },
      { id: 'theropods', name: { en: "Theropods", es: "Terópodos", de: "Theropoden", nl: "Theropoden" }, icon: "🦖", folder: "Theropods" }
    ]
  },
  'drinks': {
    id: 'drinks',
    name: { en: "Drinks", es: "Bebidas", de: "Getränke", nl: "Dranken" },
    icon: "🍹",
    unlockCost: 40,
    folder: "drinks",
    subcategories: [
      { id: 'beer', name: { en: "Beer", es: "Cerveza", de: "Bier", nl: "Bier" }, icon: "🍺", folder: "Beer" },
      { id: 'cocktails', name: { en: "Cocktails", es: "Cócteles", de: "Cocktails", nl: "Cocktails" }, icon: "🍸", folder: "Cocktails" },
      { id: 'coffee', name: { en: "Coffee", es: "Café", de: "Kaffee", nl: "Koffie" }, icon: "☕", folder: "Coffee" },
      { id: 'juices', name: { en: "Juices", es: "Jugos", de: "Säfte", nl: "Sappen" }, icon: "🧃", folder: "Juices" },
      { id: 'soft-drinks', name: { en: "Soft Drinks", es: "Refrescos", de: "Limonaden", nl: "Frisdranken" }, icon: "🥤", folder: "Soft Drinks" },
      { id: 'spirits', name: { en: "Spirits", es: "Licores", de: "Spirituosen", nl: "Sterke Drank" }, icon: "🥃", folder: "Spirits" },
      { id: 'tea', name: { en: "Tea", es: "Té", de: "Tee", nl: "Thee" }, icon: "🍵", folder: "Tea" },
      { id: 'traditional-drinks', name: { en: "Traditional Drinks", es: "Bebidas Tradicionales", de: "Traditionelle Getränke", nl: "Traditionele Dranken" }, icon: "🍶", folder: "Traditional Drinks" },
      { id: 'water', name: { en: "Water", es: "Agua", de: "Wasser", nl: "Water" }, icon: "💧", folder: "Water" },
      { id: 'wine', name: { en: "Wine", es: "Vino", de: "Wein", nl: "Wijn" }, icon: "🍷", folder: "Wine" }
    ]
  },
  'famous-buildings': {
    id: 'famous-buildings',
    name: { en: "Famous Buildings", es: "Edificios Famosos", de: "Berühmte Gebäude", nl: "Beroemde Gebouwen" },
    icon: "🏛️",
    unlockCost: 50,
    folder: "famous-buildings",
    subcategories: [
      { id: 'big-ben', name: { en: "Big Ben", es: "Big Ben", de: "Big Ben", nl: "Big Ben" }, icon: "🕰️", folder: "Big Ben" },
      { id: 'burj-khalifa', name: { en: "Burj Khalifa", es: "Burj Khalifa", de: "Burj Khalifa", nl: "Burj Khalifa" }, icon: "🏙️", folder: "Burj Khalifa" },
      { id: 'colosseum', name: { en: "Colosseum", es: "Coliseo", de: "Kolosseum", nl: "Colosseum" }, icon: "🏛️", folder: "Colosseum" },
      { id: 'eiffel-tower', name: { en: "Eiffel Tower", es: "Torre Eiffel", de: "Eiffelturm", nl: "Eiffeltoren" }, icon: "🗼", folder: "Eiffel Tower" },
      { id: 'empire-state', name: { en: "Empire State Building", es: "Empire State", de: "Empire State Building", nl: "Empire State Building" }, icon: "🏢", folder: "Empire State Building" },
      { id: 'great-wall', name: { en: "Great Wall of China", es: "Gran Muralla China", de: "Chinesische Mauer", nl: "Chinese Muur" }, icon: "🏯", folder: "Great Wall of China" },
      { id: 'machu-picchu', name: { en: "Machu Picchu", es: "Machu Picchu", de: "Machu Picchu", nl: "Machu Picchu" }, icon: "⛰️", folder: "Machu Picchu" },
      { id: 'petra', name: { en: "Petra", es: "Petra", de: "Petra", nl: "Petra" }, icon: "🏜️", folder: "Petra" },
      { id: 'pyramids-giza', name: { en: "Pyramids of Giza", es: "Pirámides de Guiza", de: "Pyramiden von Gizeh", nl: "Piramides van Gizeh" }, icon: "🔺", folder: "Pyramids of Giza" },
      { id: 'sagrada-familia', name: { en: "Sagrada Familia", es: "Sagrada Familia", de: "Sagrada Familia", nl: "Sagrada Familia" }, icon: "⛪", folder: "Sagrada Familia" },
      { id: 'sydney-opera', name: { en: "Sydney Opera House", es: "Ópera de Sídney", de: "Sydney Opera House", nl: "Sydney Opera House" }, icon: "🎭", folder: "Sydney Opera House" },
      { id: 'taj-mahal', name: { en: "Taj Mahal", es: "Taj Mahal", de: "Taj Mahal", nl: "Taj Mahal" }, icon: "🕌", folder: "Taj Mahal" }
    ]
  },
  'famous-people': {
    id: 'famous-people',
    name: { en: "Famous People", es: "Personas Famosas", de: "Berühmte Personen", nl: "Beroemde Personen" },
    icon: "⭐",
    unlockCost: 45,
    folder: "famous-people",
    subcategories: [
      { id: 'actors', name: { en: "Actors and Actresses", es: "Actores y Actrices", de: "Schauspieler", nl: "Acteurs en Actrices" }, icon: "🎬", folder: "Actors and Actresses" },
      { id: 'artists', name: { en: "Artists", es: "Artistas", de: "Künstler", nl: "Kunstenaars" }, icon: "🎨", folder: "Artists" },
      { id: 'authors', name: { en: "Authors and Writers", es: "Autores y Escritores", de: "Autoren und Schriftsteller", nl: "Auteurs en Schrijvers" }, icon: "✍️", folder: "Authors and Writers" },
      { id: 'entrepreneurs', name: { en: "Entrepreneurs", es: "Emprendedores", de: "Unternehmer", nl: "Ondernemers" }, icon: "💼", folder: "Entrepreneurs" },
      { id: 'historical-figures', name: { en: "Historical Figures", es: "Figuras Históricas", de: "Historische Persönlichkeiten", nl: "Historische Figuren" }, icon: "📜", folder: "Historical Figures" },
      { id: 'musicians', name: { en: "Musicians", es: "Músicos", de: "Musiker", nl: "Muzikanten" }, icon: "🎵", folder: "Musicians" },
      { id: 'political-leaders', name: { en: "Political Leaders", es: "Líderes Políticos", de: "Politische Führer", nl: "Politieke Leiders" }, icon: "🏛️", folder: "Political Leaders" },
      { id: 'scientists', name: { en: "Scientists", es: "Científicos", de: "Wissenschaftler", nl: "Wetenschappers" }, icon: "🔬", folder: "Scientists" },
      { id: 'social-media', name: { en: "Social Media Influencers", es: "Influencers", de: "Social-Media-Influencer", nl: "Social Media Influencers" }, icon: "📱", folder: "Social Media Influencers" },
      { id: 'sports-icons', name: { en: "Sports Icons", es: "Iconos Deportivos", de: "Sport-Ikonen", nl: "Sportpiconen" }, icon: "🏆", folder: "Sports Icons" }
    ]
  }
};

// Helper function to get progress for a subcategory
window.getSubcategoryProgress = function(mainTopicId, subcategoryId) {
  const key = `qb_progress_${mainTopicId}_${subcategoryId}`;
  const progress = parseInt(localStorage.getItem(key) || '1');
  return progress; // Return actual progress (11 means all 10 levels completed)
};

// Helper function to update progress for a subcategory
window.updateSubcategoryProgress = function(mainTopicId, subcategoryId, newLevel) {
  const key = `qb_progress_${mainTopicId}_${subcategoryId}`;
  localStorage.setItem(key, newLevel.toString());
};