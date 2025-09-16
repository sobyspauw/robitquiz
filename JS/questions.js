// Main questions file - combines all subjects
// Initialize groups array immediately
window.groups = [];

// Subject definitions with metadata (all 50 subjects across 5 tiers)
window.subjectDefinitions = {
  // 🔥 Warm-up Tier (existing subjects)
  'warm-up/animals': {
    name: { en: "Animals", es: "Animales", de: "Tiere", nl: "Dieren" },
    icon: "🐾",
    tier: "warm-up",
    tierIcon: "🔥",
    tierName: { en: "Warm-Up", es: "Calentamiento", de: "Aufwärmen", nl: "Opwarming" },
    unlockCost: 0,
    levelReward: 10,
    levels: []
  },
  'warm-up/movies-entertainment': {
    name: { en: "Movies & Entertainment", es: "Películas y Entretenimiento", de: "Filme & Unterhaltung", nl: "Films & Entertainment" },
    icon: "🎬", 
    tier: "warm-up",
    tierIcon: "🔥",
    tierName: { en: "Warm-Up", es: "Calentamiento", de: "Aufwärmen", nl: "Opwarming" },
    unlockCost: 70,
    levelReward: 10,
    levels: []
  },
  'warm-up/arts-culture': {
    name: { en: "Arts & Culture", es: "Arte y Cultura", de: "Kunst & Kultur", nl: "Kunst & Cultuur" },
    icon: "🎨",
    tier: "warm-up",
    tierIcon: "🔥",
    tierName: { en: "Warm-Up", es: "Calentamiento", de: "Aufwärmen", nl: "Opwarming" },
    unlockCost: 70,
    levelReward: 10,
    levels: []
  },
  'warm-up/dinosaurs': {
    name: { en: "Dinosaurs", es: "Dinosaurios", de: "Dinosaurier", nl: "Dinosaurussen" },
    icon: "🦕",
    tier: "warm-up",
    tierIcon: "🔥",
    tierName: { en: "Warm-Up", es: "Calentamiento", de: "Aufwärmen", nl: "Opwarming" },
    unlockCost: 70,
    levelReward: 10,
    levels: []
  },
  'warm-up/history': {
    name: { en: "History", es: "Historia", de: "Geschichte", nl: "Geschiedenis" },
    icon: "📜",
    tier: "warm-up",
    tierIcon: "🔥",
    tierName: { en: "Warm-Up", es: "Calentamiento", de: "Aufwärmen", nl: "Opwarming" },
    unlockCost: 70,
    levelReward: 10,
    levels: []
  },
  'warm-up/science': {
    name: { en: "Science", es: "Ciencia", de: "Wissenschaft", nl: "Wetenschap" },
    icon: "🔬",
    tier: "warm-up",
    tierIcon: "🔥",
    tierName: { en: "Warm-Up", es: "Calentamiento", de: "Aufwärmen", nl: "Opwarming" },
    unlockCost: 70,
    levelReward: 10,
    levels: []
  },
  'warm-up/space-astronomy': {
    name: { en: "Space & Astronomy", es: "Espacio y Astronomía", de: "Weltraum & Astronomie", nl: "Ruimte & Astronomie" },
    icon: "🚀",
    tier: "warm-up",
    tierIcon: "🔥",
    tierName: { en: "Warm-Up", es: "Calentamiento", de: "Aufwärmen", nl: "Opwarming" },
    unlockCost: 70,
    levelReward: 10,
    levels: []
  },
  'warm-up/sports': {
    name: { en: "Sports", es: "Deportes", de: "Sport", nl: "Sport" },
    icon: "⚽",
    tier: "warm-up",
    tierIcon: "🔥",
    tierName: { en: "Warm-Up", es: "Calentamiento", de: "Aufwärmen", nl: "Opwarming" },
    unlockCost: 70,
    levelReward: 10,
    levels: []
  },
  'warm-up/technology': {
    name: { en: "Technology", es: "Tecnología", de: "Technologie", nl: "Technologie" },
    icon: "💻",
    tier: "warm-up",
    tierIcon: "🔥",
    tierName: { en: "Warm-Up", es: "Calentamiento", de: "Aufwärmen", nl: "Opwarming" },
    unlockCost: 70,
    levelReward: 10,
    levels: []
  },
  'warm-up/world-geography': {
    name: { en: "World Geography", es: "Geografía Mundial", de: "Weltgeographie", nl: "Wereldgeografie" },
    icon: "🌍",
    tier: "warm-up",
    tierIcon: "🔥",
    tierName: { en: "Warm-Up", es: "Calentamiento", de: "Aufwärmen", nl: "Opwarming" },
    unlockCost: 70,
    levelReward: 10,
    levels: []
  },

  // 🧩 Brain Teaser Tier
  'brain-teaser/mathematics': {
    name: { en: "Mathematics", es: "Matemáticas", de: "Mathematik", nl: "Wiskunde" },
    icon: "➕",
    tier: "brain-teaser",
    tierIcon: "🧩",
    tierName: { en: "Brain Teaser", es: "Rompecabezas", de: "Gehirntrainer", nl: "Hersenbreker" },
    unlockCost: 120,
    levelReward: 15,
    levels: []
  },
  'brain-teaser/literature': {
    name: { en: "Literature", es: "Literatura", de: "Literatur", nl: "Literatuur" },
    icon: "📚",
    tier: "brain-teaser",
    tierIcon: "🧩",
    tierName: { en: "Brain Teaser", es: "Rompecabezas", de: "Gehirntrainer", nl: "Hersenbreker" },
    unlockCost: 120,
    levelReward: 15,
    levels: []
  },
  'brain-teaser/psychology': {
    name: { en: "Psychology", es: "Psicología", de: "Psychologie", nl: "Psychologie" },
    icon: "🧠",
    tier: "brain-teaser",
    tierIcon: "🧩",
    tierName: { en: "Brain Teaser", es: "Rompecabezas", de: "Gehirntrainer", nl: "Hersenbreker" },
    unlockCost: 120,
    levelReward: 15,
    levels: []
  },
  'brain-teaser/archaeology': {
    name: { en: "Archaeology", es: "Arqueología", de: "Archäologie", nl: "Archeologie" },
    icon: "🏺",
    tier: "brain-teaser",
    tierIcon: "🧩",
    tierName: { en: "Brain Teaser", es: "Rompecabezas", de: "Gehirntrainer", nl: "Hersenbreker" },
    unlockCost: 120,
    levelReward: 15,
    levels: []
  },
  'brain-teaser/music': {
    name: { en: "Music", es: "Música", de: "Musik", nl: "Muziek" },
    icon: "🎵",
    tier: "brain-teaser",
    tierIcon: "🧩",
    tierName: { en: "Brain Teaser", es: "Rompecabezas", de: "Gehirntrainer", nl: "Hersenbreker" },
    unlockCost: 120,
    levelReward: 15,
    levels: []
  },
  'brain-teaser/medicine': {
    name: { en: "Medicine", es: "Medicina", de: "Medizin", nl: "Geneeskunde" },
    icon: "⚕️",
    tier: "brain-teaser",
    tierIcon: "🧩",
    tierName: { en: "Brain Teaser", es: "Rompecabezas", de: "Gehirntrainer", nl: "Hersenbreker" },
    unlockCost: 120,
    levelReward: 15,
    levels: []
  },
  'brain-teaser/engineering': {
    name: { en: "Engineering", es: "Ingeniería", de: "Ingenieurwesen", nl: "Engineering" },
    icon: "⚙️",
    tier: "brain-teaser",
    tierIcon: "🧩",
    tierName: { en: "Brain Teaser", es: "Rompecabezas", de: "Gehirntrainer", nl: "Hersenbreker" },
    unlockCost: 120,
    levelReward: 15,
    levels: []
  },
  'brain-teaser/philosophy': {
    name: { en: "Philosophy", es: "Filosofía", de: "Philosophie", nl: "Filosofie" },
    icon: "🤔",
    tier: "brain-teaser",
    tierIcon: "🧩",
    tierName: { en: "Brain Teaser", es: "Rompecabezas", de: "Gehirntrainer", nl: "Hersenbreker" },
    unlockCost: 120,
    levelReward: 15,
    levels: []
  },
  'brain-teaser/chemistry': {
    name: { en: "Chemistry", es: "Química", de: "Chemie", nl: "Scheikunde" },
    icon: "🧪",
    tier: "brain-teaser",
    tierIcon: "🧩",
    tierName: { en: "Brain Teaser", es: "Rompecabezas", de: "Gehirntrainer", nl: "Hersenbreker" },
    unlockCost: 120,
    levelReward: 15,
    levels: []
  },
  'brain-teaser/biology': {
    name: { en: "Biology", es: "Biología", de: "Biologie", nl: "Biologie" },
    icon: "🔬",
    tier: "brain-teaser",
    tierIcon: "🧩",
    tierName: { en: "Brain Teaser", es: "Rompecabezas", de: "Gehirntrainer", nl: "Hersenbreker" },
    unlockCost: 120,
    levelReward: 15,
    levels: []
  },

  // 🌀 Mind Bender Tier
  'mind-bender/quantum-physics': {
    name: { en: "Quantum Physics", es: "Física Cuántica", de: "Quantenphysik", nl: "Kwantumfysica" },
    icon: "⚛️",
    tier: "mind-bender",
    tierIcon: "🌀",
    tierName: { en: "Mind Bender", es: "Dobla Mentes", de: "Gedankenbrecher", nl: "Geestverbuiger" },
    unlockCost: 250,
    levelReward: 25,
    levels: []
  },
  'mind-bender/cryptography': {
    name: { en: "Cryptography", es: "Criptografía", de: "Kryptographie", nl: "Cryptografie" },
    icon: "🔐",
    tier: "mind-bender",
    tierIcon: "🌀",
    tierName: { en: "Mind Bender", es: "Dobla Mentes", de: "Gedankenbrecher", nl: "Geestverbuiger" },
    unlockCost: 250,
    levelReward: 25,
    levels: []
  },
  'mind-bender/neuroscience': {
    name: { en: "Neuroscience", es: "Neurociencia", de: "Neurowissenschaft", nl: "Neurowetenschappen" },
    icon: "🧠",
    tier: "mind-bender",
    tierIcon: "🌀",
    tierName: { en: "Mind Bender", es: "Dobla Mentes", de: "Gedankenbrecher", nl: "Geestverbuiger" },
    unlockCost: 250,
    levelReward: 25,
    levels: []
  },
  'mind-bender/genetics': {
    name: { en: "Genetics", es: "Genética", de: "Genetik", nl: "Genetica" },
    icon: "🧬",
    tier: "mind-bender",
    tierIcon: "🌀",
    tierName: { en: "Mind Bender", es: "Dobla Mentes", de: "Gedankenbrecher", nl: "Geestverbuiger" },
    unlockCost: 250,
    levelReward: 25,
    levels: []
  },
  'mind-bender/mythology': {
    name: { en: "Mythology", es: "Mitología", de: "Mythologie", nl: "Mythologie" },
    icon: "🐲",
    tier: "mind-bender",
    tierIcon: "🌀",
    tierName: { en: "Mind Bender", es: "Dobla Mentes", de: "Gedankenbrecher", nl: "Geestverbuiger" },
    unlockCost: 250,
    levelReward: 25,
    levels: []
  },
  'mind-bender/robotics': {
    name: { en: "Robotics", es: "Robótica", de: "Robotik", nl: "Robotica" },
    icon: "🤖",
    tier: "mind-bender",
    tierIcon: "🌀",
    tierName: { en: "Mind Bender", es: "Dobla Mentes", de: "Gedankenbrecher", nl: "Geestverbuiger" },
    unlockCost: 250,
    levelReward: 25,
    levels: []
  },
  'mind-bender/anthropology': {
    name: { en: "Anthropology", es: "Antropología", de: "Anthropologie", nl: "Antropologie" },
    icon: "🏛️",
    tier: "mind-bender",
    tierIcon: "🌀",
    tierName: { en: "Mind Bender", es: "Dobla Mentes", de: "Gedankenbrecher", nl: "Geestverbuiger" },
    unlockCost: 250,
    levelReward: 25,
    levels: []
  },
  'mind-bender/oceanography': {
    name: { en: "Oceanography", es: "Oceanografía", de: "Ozeanographie", nl: "Oceanografie" },
    icon: "🌊",
    tier: "mind-bender",
    tierIcon: "🌀",
    tierName: { en: "Mind Bender", es: "Dobla Mentes", de: "Gedankenbrecher", nl: "Geestverbuiger" },
    unlockCost: 250,
    levelReward: 25,
    levels: []
  },
  'mind-bender/volcanology': {
    name: { en: "Volcanology", es: "Volcanología", de: "Vulkanologie", nl: "Vulkanologie" },
    icon: "🌋",
    tier: "mind-bender",
    tierIcon: "🌀",
    tierName: { en: "Mind Bender", es: "Dobla Mentes", de: "Gedankenbrecher", nl: "Geestverbuiger" },
    unlockCost: 250,
    levelReward: 25,
    levels: []
  },
  'mind-bender/seismology': {
    name: { en: "Seismology", es: "Sismología", de: "Seismologie", nl: "Seismologie" },
    icon: "📈",
    tier: "mind-bender",
    tierIcon: "🌀",
    tierName: { en: "Mind Bender", es: "Dobla Mentes", de: "Gedankenbrecher", nl: "Geestverbuiger" },
    unlockCost: 250,
    levelReward: 25,
    levels: []
  },

  // 🧠 Mastermind Tier
  'mastermind/astrophysics': {
    name: { en: "Astrophysics", es: "Astrofísica", de: "Astrophysik", nl: "Astrofysica" },
    icon: "🌟",
    tier: "mastermind",
    tierIcon: "🧠",
    tierName: { en: "Mastermind", es: "Mente Maestra", de: "Mastermind", nl: "Meesterbrein" },
    unlockCost: 400,
    levelReward: 40,
    levels: []
  },
  'mastermind/molecular-biology': {
    name: { en: "Molecular Biology", es: "Biología Molecular", de: "Molekularbiologie", nl: "Moleculaire Biologie" },
    icon: "🧪",
    tier: "mastermind",
    tierIcon: "🧠",
    tierName: { en: "Mastermind", es: "Mente Maestra", de: "Mastermind", nl: "Meesterbrein" },
    unlockCost: 400,
    levelReward: 40,
    levels: []
  },
  'mastermind/nanotechnology': {
    name: { en: "Nanotechnology", es: "Nanotecnología", de: "Nanotechnologie", nl: "Nanotechnologie" },
    icon: "🔬",
    tier: "mastermind",
    tierIcon: "🧠",
    tierName: { en: "Mastermind", es: "Mente Maestra", de: "Mastermind", nl: "Meesterbrein" },
    unlockCost: 400,
    levelReward: 40,
    levels: []
  },
  'mastermind/artificial-intelligence': {
    name: { en: "Artificial Intelligence", es: "Inteligencia Artificial", de: "Künstliche Intelligenz", nl: "Kunstmatige Intelligentie" },
    icon: "🤖",
    tier: "mastermind",
    tierIcon: "🧠",
    tierName: { en: "Mastermind", es: "Mente Maestra", de: "Mastermind", nl: "Meesterbrein" },
    unlockCost: 400,
    levelReward: 40,
    levels: []
  },
  'mastermind/paleontology': {
    name: { en: "Paleontology", es: "Paleontología", de: "Paläontologie", nl: "Paleontologie" },
    icon: "🦴",
    tier: "mastermind",
    tierIcon: "🧠",
    tierName: { en: "Mastermind", es: "Mente Maestra", de: "Mastermind", nl: "Meesterbrein" },
    unlockCost: 400,
    levelReward: 40,
    levels: []
  },
  'mastermind/epidemiology': {
    name: { en: "Epidemiology", es: "Epidemiología", de: "Epidemiologie", nl: "Epidemiologie" },
    icon: "📊",
    tier: "mastermind",
    tierIcon: "🧠",
    tierName: { en: "Mastermind", es: "Mente Maestra", de: "Mastermind", nl: "Meesterbrein" },
    unlockCost: 400,
    levelReward: 40,
    levels: []
  },
  'mastermind/theoretical-physics': {
    name: { en: "Theoretical Physics", es: "Física Teórica", de: "Theoretische Physik", nl: "Theoretische Fysica" },
    icon: "⚛️",
    tier: "mastermind",
    tierIcon: "🧠",
    tierName: { en: "Mastermind", es: "Mente Maestra", de: "Mastermind", nl: "Meesterbrein" },
    unlockCost: 400,
    levelReward: 40,
    levels: []
  },
  'mastermind/computational-linguistics': {
    name: { en: "Computational Linguistics", es: "Lingüística Computacional", de: "Computerlinguistik", nl: "Computationele Linguïstiek" },
    icon: "💻",
    tier: "mastermind",
    tierIcon: "🧠",
    tierName: { en: "Mastermind", es: "Mente Maestra", de: "Mastermind", nl: "Meesterbrein" },
    unlockCost: 400,
    levelReward: 40,
    levels: []
  },
  'mastermind/bioengineering': {
    name: { en: "Bioengineering", es: "Bioingeniería", de: "Biotechnik", nl: "Bio-engineering" },
    icon: "🧬",
    tier: "mastermind",
    tierIcon: "🧠",
    tierName: { en: "Mastermind", es: "Mente Maestra", de: "Mastermind", nl: "Meesterbrein" },
    unlockCost: 400,
    levelReward: 40,
    levels: []
  },
  'mastermind/game-theory': {
    name: { en: "Game Theory", es: "Teoría de Juegos", de: "Spieltheorie", nl: "Speltheorie" },
    icon: "🎮",
    tier: "mastermind",
    tierIcon: "🧠",
    tierName: { en: "Mastermind", es: "Mente Maestra", de: "Mastermind", nl: "Meesterbrein" },
    unlockCost: 400,
    levelReward: 40,
    levels: []
  },

  // 🚫 Impossible Mode Tier
  'impossible-mode/string-theory': {
    name: { en: "String Theory", es: "Teoría de Cuerdas", de: "Stringtheorie", nl: "Snaartheorie" },
    icon: "🎻",
    tier: "impossible-mode",
    tierIcon: "🚫",
    tierName: { en: "Impossible Mode", es: "Modo Imposible", de: "Unmöglicher Modus", nl: "Onmogelijke Modus" },
    unlockCost: 600,
    levelReward: 60,
    levels: []
  },
  'impossible-mode/cryptanalysis': {
    name: { en: "Cryptanalysis", es: "Criptoanálisis", de: "Kryptoanalyse", nl: "Cryptanalyse" },
    icon: "🔓",
    tier: "impossible-mode",
    tierIcon: "🚫",
    tierName: { en: "Impossible Mode", es: "Modo Imposible", de: "Unmöglicher Modus", nl: "Onmogelijke Modus" },
    unlockCost: 600,
    levelReward: 60,
    levels: []
  },
  'impossible-mode/metamathematics': {
    name: { en: "Metamathematics", es: "Metamatemáticas", de: "Metamathematik", nl: "Metamathematica" },
    icon: "∞",
    tier: "impossible-mode",
    tierIcon: "🚫",
    tierName: { en: "Impossible Mode", es: "Modo Imposible", de: "Unmöglicher Modus", nl: "Onmogelijke Modus" },
    unlockCost: 600,
    levelReward: 60,
    levels: []
  },
  'impossible-mode/xenoarchaeology': {
    name: { en: "Xenoarchaeology", es: "Xenoarqueología", de: "Xenoarchäologie", nl: "Xenoarcheologie" },
    icon: "👽",
    tier: "impossible-mode",
    tierIcon: "🚫",
    tierName: { en: "Impossible Mode", es: "Modo Imposible", de: "Unmöglicher Modus", nl: "Onmogelijke Modus" },
    unlockCost: 600,
    levelReward: 60,
    levels: []
  },
  'impossible-mode/hyperdimensional-geometry': {
    name: { en: "Hyperdimensional Geometry", es: "Geometría Hiperdimensional", de: "Hyperdimensionale Geometrie", nl: "Hyperdimensionale Geometrie" },
    icon: "🔘",
    tier: "impossible-mode",
    tierIcon: "🚫",
    tierName: { en: "Impossible Mode", es: "Modo Imposible", de: "Unmöglicher Modus", nl: "Onmogelijke Modus" },
    unlockCost: 600,
    levelReward: 60,
    levels: []
  },
  'impossible-mode/temporal-mechanics': {
    name: { en: "Temporal Mechanics", es: "Mecánica Temporal", de: "Temporale Mechanik", nl: "Temporale Mechanica" },
    icon: "⏰",
    tier: "impossible-mode",
    tierIcon: "🚫",
    tierName: { en: "Impossible Mode", es: "Modo Imposible", de: "Unmöglicher Modus", nl: "Onmogelijke Modus" },
    unlockCost: 600,
    levelReward: 60,
    levels: []
  },
  'impossible-mode/dark-matter-physics': {
    name: { en: "Dark Matter Physics", es: "Física de la Materia Oscura", de: "Dunkle Materie Physik", nl: "Donkere Materie Fysica" },
    icon: "🌑",
    tier: "impossible-mode",
    tierIcon: "🚫",
    tierName: { en: "Impossible Mode", es: "Modo Imposible", de: "Unmöglicher Modus", nl: "Onmogelijke Modus" },
    unlockCost: 600,
    levelReward: 60,
    levels: []
  },
  'impossible-mode/consciousness-studies': {
    name: { en: "Consciousness Studies", es: "Estudios de la Conciencia", de: "Bewusstseinsstudien", nl: "Bewustzijnsstudies" },
    icon: "🧘",
    tier: "impossible-mode",
    tierIcon: "🚫",
    tierName: { en: "Impossible Mode", es: "Modo Imposible", de: "Unmöglicher Modus", nl: "Onmogelijke Modus" },
    unlockCost: 600,
    levelReward: 60,
    levels: []
  },
  'impossible-mode/information-theory': {
    name: { en: "Information Theory", es: "Teoría de la Información", de: "Informationstheorie", nl: "Informatietheorie" },
    icon: "📡",
    tier: "impossible-mode",
    tierIcon: "🚫",
    tierName: { en: "Impossible Mode", es: "Modo Imposible", de: "Unmöglicher Modus", nl: "Onmogelijke Modus" },
    unlockCost: 600,
    levelReward: 60,
    levels: []
  },
  'impossible-mode/multiverse-theory': {
    name: { en: "Multiverse Theory", es: "Teoría del Multiverso", de: "Multiversum-Theorie", nl: "Multiversum Theorie" },
    icon: "🌌",
    tier: "impossible-mode",
    tierIcon: "🚫",
    tierName: { en: "Impossible Mode", es: "Modo Imposible", de: "Unmöglicher Modus", nl: "Onmogelijke Modus" },
    unlockCost: 600,
    levelReward: 60,
    levels: []
  }
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

// Subject loading tracking
window.subjectsLoaded = 0;
window.expectedSubjects = 10;

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