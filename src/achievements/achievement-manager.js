// ═══════════════════════════════════════════════════════════════════════════════
// ACHIEVEMENT MANAGER
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Achievement Definitions ───────────────────────────────────────────────────
const achievementDefinitions = {
  // ═══ BEGINNER ACHIEVEMENTS (5) ═══
  first_steps: {
    id: 'first_steps',
    name: { en: 'First Steps', nl: 'Eerste Stappen', es: 'Primeros Pasos', de: 'Erste Schritte' },
    description: { en: 'Complete your first quiz', nl: 'Voltooi je eerste quiz', es: 'Completa tu primer cuestionario', de: 'Vervollständige dein erstes Quiz' },
    emoji: '🎯',
    category: 'beginner',
    reward: 5,
    checkCondition: (stats) => stats.quizzesCompleted >= 1,
    getProgress: (stats) => ({ current: Math.min(stats.quizzesCompleted, 1), target: 1 })
  },

  quick_learner: {
    id: 'quick_learner',
    name: { en: 'Quick Learner', nl: 'Snelle Leerling', es: 'Aprendiz Rápido', de: 'Schneller Lerner' },
    description: { en: 'Earn 10 stars', nl: 'Verdien 10 sterren', es: 'Gana 10 estrellas', de: 'Verdiene 10 Sterne' },
    emoji: '⭐',
    category: 'beginner',
    reward: 8,
    checkCondition: (stats) => stats.totalStars >= 10,
    getProgress: (stats) => ({ current: Math.min(stats.totalStars, 10), target: 10 })
  },

  rising_star: {
    id: 'rising_star',
    name: { en: 'Rising Star', nl: 'Rijzende Ster', es: 'Estrella Emergente', de: 'Aufgehender Stern' },
    description: { en: 'Earn 50 stars', nl: 'Verdien 50 sterren', es: 'Gana 50 estrellas', de: 'Verdiene 50 Sterne' },
    emoji: '🌟',
    category: 'beginner',
    reward: 12,
    checkCondition: (stats) => stats.totalStars >= 50,
    getProgress: (stats) => ({ current: Math.min(stats.totalStars, 50), target: 50 })
  },

  daily_dedication: {
    id: 'daily_dedication',
    name: { en: 'Daily Dedication', nl: 'Dagelijkse Toewijding', es: 'Dedicación Diaria', de: 'Tägliche Hingabe' },
    description: { en: 'Complete your first Daily Challenge', nl: 'Voltooi je eerste Daily Challenge', es: 'Completa tu primer Desafío Diario', de: 'Vervollständige deine erste tägliche Herausforderung' },
    emoji: '📅',
    category: 'beginner',
    reward: 8,
    checkCondition: (stats) => stats.dailyChallengesCompleted >= 1,
    getProgress: (stats) => ({ current: Math.min(stats.dailyChallengesCompleted, 1), target: 1 })
  },

  power_user: {
    id: 'power_user',
    name: { en: 'Power User', nl: 'Krachtige Gebruiker', es: 'Usuario Avanzado', de: 'Power-User' },
    description: { en: 'Use your first powerup', nl: 'Gebruik je eerste powerup', es: 'Usa tu primer potenciador', de: 'Benutze dein erstes Powerup' },
    emoji: '⚡',
    category: 'beginner',
    reward: 5,
    checkCondition: (stats) => stats.powerupsUsed >= 1,
    getProgress: (stats) => ({ current: Math.min(stats.powerupsUsed, 1), target: 1 })
  },

  // ═══ QUIZ MASTER ACHIEVEMENTS (10) ═══
  perfect_score: {
    id: 'perfect_score',
    name: { en: 'Perfect Score', nl: 'Perfecte Score', es: 'Puntuación Perfecta', de: 'Perfekte Punktzahl' },
    description: { en: 'Get 10/10 correct in a quiz', nl: 'Haal 10/10 correct in een quiz', es: 'Obtén 10/10 correctas en un cuestionario', de: 'Erreiche 10/10 richtig in einem Quiz' },
    emoji: '💯',
    category: 'quiz_master',
    reward: 10,
    checkCondition: (stats) => stats.perfectScores >= 1,
    getProgress: (stats) => ({ current: Math.min(stats.perfectScores, 1), target: 1 })
  },

  speed_demon: {
    id: 'speed_demon',
    name: { en: 'Speed Demon', nl: 'Snelheidsduivel', es: 'Demonio Veloz', de: 'Geschwindigkeitsteufel' },
    description: { en: 'Complete a quiz without timing out', nl: 'Voltooi een quiz zonder time-out', es: 'Completa un cuestionario sin agotar el tiempo', de: 'Vervollständige ein Quiz ohne Zeitüberschreitung' },
    emoji: '🏃',
    category: 'quiz_master',
    reward: 8,
    checkCondition: (stats) => stats.quizzesNoTimeout >= 1,
    getProgress: (stats) => ({ current: Math.min(stats.quizzesNoTimeout, 1), target: 1 })
  },

  no_mistakes: {
    id: 'no_mistakes',
    name: { en: 'No Mistakes', nl: 'Geen Fouten', es: 'Sin Errores', de: 'Keine Fehler' },
    description: { en: 'Complete 5 quizzes without mistakes', nl: 'Voltooi 5 quizzen zonder fouten', es: 'Completa 5 cuestionarios sin errores', de: 'Vervollständige 5 Quiz ohne Fehler' },
    emoji: '✨',
    category: 'quiz_master',
    reward: 15,
    checkCondition: (stats) => stats.quizzesNoMistakes >= 5,
    getProgress: (stats) => ({ current: Math.min(stats.quizzesNoMistakes, 5), target: 5 })
  },

  century_club: {
    id: 'century_club',
    name: { en: 'Century Club', nl: 'Century Club', es: 'Club del Siglo', de: 'Jahrhundert-Club' },
    description: { en: 'Earn 100 stars', nl: 'Verdien 100 sterren', es: 'Gana 100 estrellas', de: 'Verdiene 100 Sterne' },
    emoji: '💫',
    category: 'quiz_master',
    reward: 15,
    checkCondition: (stats) => stats.totalStars >= 100,
    getProgress: (stats) => ({ current: Math.min(stats.totalStars, 100), target: 100 })
  },

  star_collector: {
    id: 'star_collector',
    name: { en: 'Star Collector', nl: 'Sterrenverzamelaar', es: 'Coleccionista de Estrellas', de: 'Sternensammler' },
    description: { en: 'Earn 250 stars', nl: 'Verdien 250 sterren', es: 'Gana 250 estrellas', de: 'Verdiene 250 Sterne' },
    emoji: '🌠',
    category: 'quiz_master',
    reward: 25,
    checkCondition: (stats) => stats.totalStars >= 250,
    getProgress: (stats) => ({ current: Math.min(stats.totalStars, 250), target: 250 })
  },

  legendary: {
    id: 'legendary',
    name: { en: 'Legendary', nl: 'Legendarisch', es: 'Legendario', de: 'Legendär' },
    description: { en: 'Earn 500 stars', nl: 'Verdien 500 sterren', es: 'Gana 500 estrellas', de: 'Verdiene 500 Sterne' },
    emoji: '🏆',
    category: 'quiz_master',
    reward: 40,
    checkCondition: (stats) => stats.totalStars >= 500,
    getProgress: (stats) => ({ current: Math.min(stats.totalStars, 500), target: 500 })
  },

  knowledge_royalty: {
    id: 'knowledge_royalty',
    name: { en: 'Knowledge Royalty', nl: 'Kenniskoning', es: 'Realeza del Conocimiento', de: 'Wissensroyalität' },
    description: { en: 'Earn 1000 stars', nl: 'Verdien 1000 sterren', es: 'Gana 1000 estrellas', de: 'Verdiene 1000 Sterne' },
    emoji: '👑',
    category: 'quiz_master',
    reward: 75,
    checkCondition: (stats) => stats.totalStars >= 1000,
    getProgress: (stats) => ({ current: Math.min(stats.totalStars, 1000), target: 1000 })
  },

  einstein: {
    id: 'einstein',
    name: { en: 'Einstein', nl: 'Einstein', es: 'Einstein', de: 'Einstein' },
    description: { en: 'Answer 100 questions correctly', nl: 'Beantwoord 100 vragen correct', es: 'Responde 100 preguntas correctamente', de: 'Beantworte 100 Fragen richtig' },
    emoji: '🧠',
    category: 'quiz_master',
    reward: 15,
    checkCondition: (stats) => stats.totalCorrect >= 100,
    getProgress: (stats) => ({ current: Math.min(stats.totalCorrect, 100), target: 100 })
  },

  professor: {
    id: 'professor',
    name: { en: 'Professor', nl: 'Professor', es: 'Profesor', de: 'Professor' },
    description: { en: 'Answer 500 questions correctly', nl: 'Beantwoord 500 vragen correct', es: 'Responde 500 preguntas correctamente', de: 'Beantworte 500 Fragen richtig' },
    emoji: '🎓',
    category: 'quiz_master',
    reward: 30,
    checkCondition: (stats) => stats.totalCorrect >= 500,
    getProgress: (stats) => ({ current: Math.min(stats.totalCorrect, 500), target: 500 })
  },

  genius: {
    id: 'genius',
    name: { en: 'Genius', nl: 'Genie', es: 'Genio', de: 'Genie' },
    description: { en: 'Answer 1000 questions correctly', nl: 'Beantwoord 1000 vragen correct', es: 'Responde 1000 preguntas correctamente', de: 'Beantworte 1000 Fragen richtig' },
    emoji: '🌟',
    category: 'quiz_master',
    reward: 50,
    checkCondition: (stats) => stats.totalCorrect >= 1000,
    getProgress: (stats) => ({ current: Math.min(stats.totalCorrect, 1000), target: 1000 })
  },

  // ═══ GAME MODE ACHIEVEMENTS (12) ═══
  true_detective: {
    id: 'true_detective',
    name: { en: 'True Detective', nl: 'Echte Detective', es: 'Detective Verdadero', de: 'Wahrer Detektiv' },
    description: { en: 'Complete True/False mode', nl: 'Voltooi True/False mode', es: 'Completa el modo Verdadero/Falso', de: 'Vervollständige den Wahr/Falsch-Modus' },
    emoji: '🔍',
    category: 'game_modes',
    reward: 8,
    checkCondition: (stats) => stats.trueFalseCompleted >= 1,
    getProgress: (stats) => ({ current: Math.min(stats.trueFalseCompleted, 1), target: 1 })
  },

  truth_seeker: {
    id: 'truth_seeker',
    name: { en: 'Truth Seeker', nl: 'Waarheidzoeker', es: 'Buscador de la Verdad', de: 'Wahrheitssucher' },
    description: { en: 'Get 15/15 in True/False', nl: 'Behaal 15/15 in True/False', es: 'Obtén 15/15 en Verdadero/Falso', de: 'Erreiche 15/15 in Wahr/Falsch' },
    emoji: '✅',
    category: 'game_modes',
    reward: 15,
    checkCondition: (stats) => stats.trueFalsePerfect >= 1,
    getProgress: (stats) => ({ current: Math.min(stats.trueFalsePerfect, 1), target: 1 })
  },

  lightning_fast: {
    id: 'lightning_fast',
    name: { en: 'Lightning Fast', nl: 'Bliksem Snel', es: 'Rápido como el Rayo', de: 'Blitzschnell' },
    description: { en: 'Complete Lightning Round', nl: 'Voltooi Lightning Round', es: 'Completa la Ronda Relámpago', de: 'Vervollständige die Blitzrunde' },
    emoji: '⚡',
    category: 'game_modes',
    reward: 10,
    checkCondition: (stats) => stats.lightningCompleted >= 1,
    getProgress: (stats) => ({ current: Math.min(stats.lightningCompleted, 1), target: 1 })
  },

  thunder_strike: {
    id: 'thunder_strike',
    name: { en: 'Thunder Strike', nl: 'Donderslag', es: 'Golpe de Trueno', de: 'Donnerschlag' },
    description: { en: 'Answer 30+ questions in Lightning Round', nl: 'Beantwoord 30+ vragen in Lightning Round', es: 'Responde 30+ preguntas en la Ronda Relámpago', de: 'Beantworte 30+ Fragen in der Blitzrunde' },
    emoji: '⚡',
    category: 'game_modes',
    reward: 20,
    checkCondition: (stats) => stats.lightningBestScore >= 30,
    getProgress: (stats) => ({ current: Math.min(stats.lightningBestScore, 30), target: 30 })
  },

  survivor: {
    id: 'survivor',
    name: { en: 'Survivor', nl: 'Overlever', es: 'Superviviente', de: 'Überlebender' },
    description: { en: 'Reach level 5 in Survivor Mode', nl: 'Bereik level 5 in Survivor Mode', es: 'Alcanza el nivel 5 en el Modo Superviviente', de: 'Erreiche Level 5 im Überlebensmodus' },
    emoji: '🛡️',
    category: 'game_modes',
    reward: 12,
    checkCondition: (stats) => stats.survivorBestLevel >= 5,
    getProgress: (stats) => ({ current: Math.min(stats.survivorBestLevel, 5), target: 5 })
  },

  ultimate_survivor: {
    id: 'ultimate_survivor',
    name: { en: 'Ultimate Survivor', nl: 'Ultieme Overlever', es: 'Superviviente Definitivo', de: 'Ultimativer Überlebender' },
    description: { en: 'Reach level 10 in Survivor Mode', nl: 'Bereik level 10 in Survivor Mode', es: 'Alcanza el nivel 10 en el Modo Superviviente', de: 'Erreiche Level 10 im Überlebensmodus' },
    emoji: '🏅',
    category: 'game_modes',
    reward: 30,
    checkCondition: (stats) => stats.survivorBestLevel >= 10,
    getProgress: (stats) => ({ current: Math.min(stats.survivorBestLevel, 10), target: 10 })
  },

  extreme_challenge: {
    id: 'extreme_challenge',
    name: { en: 'Extreme Challenge', nl: 'Extreme Uitdaging', es: 'Desafío Extremo', de: 'Extreme Herausforderung' },
    description: { en: 'Reach level 3 in Extreme Survivor', nl: 'Bereik level 3 in Extreme Survivor', es: 'Alcanza el nivel 3 en Superviviente Extremo', de: 'Erreiche Level 3 im Extremen Überlebensmodus' },
    emoji: '💀',
    category: 'game_modes',
    reward: 18,
    checkCondition: (stats) => stats.extremeSurvivorBestLevel >= 3,
    getProgress: (stats) => ({ current: Math.min(stats.extremeSurvivorBestLevel, 3), target: 3 })
  },

  extreme_master: {
    id: 'extreme_master',
    name: { en: 'Extreme Master', nl: 'Extreme Meester', es: 'Maestro Extremo', de: 'Extremer Meister' },
    description: { en: 'Reach level 7 in Extreme Survivor', nl: 'Bereik level 7 in Extreme Survivor', es: 'Alcanza el nivel 7 en Superviviente Extremo', de: 'Erreiche Level 7 im Extremen Überlebensmodus' },
    emoji: '💀',
    category: 'game_modes',
    reward: 40,
    checkCondition: (stats) => stats.extremeSurvivorBestLevel >= 7,
    getProgress: (stats) => ({ current: Math.min(stats.extremeSurvivorBestLevel, 7), target: 7 })
  },

  mode_explorer: {
    id: 'mode_explorer',
    name: { en: 'Mode Explorer', nl: 'Mode Verkenner', es: 'Explorador de Modos', de: 'Modus-Erkunder' },
    description: { en: 'Play all 4 game modes', nl: 'Speel alle 4 game modes', es: 'Juega los 4 modos de juego', de: 'Spiele alle 4 Spielmodi' },
    emoji: '🎮',
    category: 'game_modes',
    reward: 20,
    checkCondition: (stats) => {
      const modes = stats.gameModesPlayed || [];
      return modes.includes('true-false') &&
             modes.includes('lightning') &&
             modes.includes('survivor') &&
             modes.includes('extreme-survivor');
    },
    getProgress: (stats) => {
      const modes = stats.gameModesPlayed || [];
      const uniqueModes = [...new Set(modes)];
      return { current: Math.min(uniqueModes.length, 4), target: 4 };
    }
  },

  daily_streak: {
    id: 'daily_streak',
    name: { en: 'Daily Streak', nl: 'Dagelijkse Reeks', es: 'Racha Diaria', de: 'Tägliche Serie' },
    description: { en: 'Complete 7 Daily Challenges in a row', nl: 'Voltooi 7 Daily Challenges op rij', es: 'Completa 7 Desafíos Diarios seguidos', de: 'Vervollständige 7 tägliche Herausforderungen hintereinander' },
    emoji: '🔥',
    category: 'game_modes',
    reward: 30,
    checkCondition: (stats) => stats.dailyStreak >= 7,
    getProgress: (stats) => ({ current: Math.min(stats.dailyStreak, 7), target: 7 })
  },

  monthly_master: {
    id: 'monthly_master',
    name: { en: 'Monthly Master', nl: 'Maandelijkse Meester', es: 'Maestro Mensual', de: 'Monatlicher Meister' },
    description: { en: 'Complete 30 Daily Challenges', nl: 'Voltooi 30 Daily Challenges', es: 'Completa 30 Desafíos Diarios', de: 'Vervollständige 30 tägliche Herausforderungen' },
    emoji: '📆',
    category: 'game_modes',
    reward: 60,
    checkCondition: (stats) => stats.dailyChallengesCompleted >= 30,
    getProgress: (stats) => ({ current: Math.min(stats.dailyChallengesCompleted, 30), target: 30 })
  },

  challenge_champion: {
    id: 'challenge_champion',
    name: { en: 'Challenge Champion', nl: 'Challenge Kampioen', es: 'Campeón de Desafíos', de: 'Herausforderungs-Champion' },
    description: { en: 'Complete all 365 Daily Challenges', nl: 'Voltooi alle 365 Daily Challenges', es: 'Completa los 365 Desafíos Diarios', de: 'Vervollständige alle 365 täglichen Herausforderungen' },
    emoji: '🎖️',
    category: 'game_modes',
    reward: 150,
    checkCondition: (stats) => stats.dailyChallengesCompleted >= 365,
    getProgress: (stats) => ({ current: Math.min(stats.dailyChallengesCompleted, 365), target: 365 })
  },

  // ═══ COLLECTION ACHIEVEMENTS (12) ═══
  topic_starter: {
    id: 'topic_starter',
    name: { en: 'Topic Starter', nl: 'Onderwerp Starter', es: 'Iniciador de Temas', de: 'Themen-Starter' },
    description: { en: 'Unlock 1 main topic', nl: 'Unlock 1 hoofdonderwerp', es: 'Desbloquea 1 tema principal', de: 'Schalte 1 Hauptthema frei' },
    emoji: '📖',
    category: 'collection',
    reward: 6,
    checkCondition: (stats) => stats.topicsUnlocked >= 1,
    getProgress: (stats) => ({ current: Math.min(stats.topicsUnlocked, 1), target: 1 })
  },

  topic_explorer: {
    id: 'topic_explorer',
    name: { en: 'Topic Explorer', nl: 'Onderwerp Verkenner', es: 'Explorador de Temas', de: 'Themen-Erkunder' },
    description: { en: 'Unlock 5 main topics', nl: 'Unlock 5 hoofdonderwerpen', es: 'Desbloquea 5 temas principales', de: 'Schalte 5 Hauptthemen frei' },
    emoji: '📚',
    category: 'collection',
    reward: 15,
    checkCondition: (stats) => stats.topicsUnlocked >= 5,
    getProgress: (stats) => ({ current: Math.min(stats.topicsUnlocked, 5), target: 5 })
  },

  topic_collector: {
    id: 'topic_collector',
    name: { en: 'Topic Collector', nl: 'Onderwerp Verzamelaar', es: 'Coleccionista de Temas', de: 'Themen-Sammler' },
    description: { en: 'Unlock all 12 main topics', nl: 'Unlock alle 12 hoofdonderwerpen', es: 'Desbloquea los 12 temas principales', de: 'Schalte alle 12 Hauptthemen frei' },
    emoji: '📖',
    category: 'collection',
    reward: 35,
    checkCondition: (stats) => stats.topicsUnlocked >= 12,
    getProgress: (stats) => ({ current: Math.min(stats.topicsUnlocked, 12), target: 12 })
  },

  level_one_complete: {
    id: 'level_one_complete',
    name: { en: 'Level 1 Complete', nl: 'Level 1 Voltooid', es: 'Nivel 1 Completo', de: 'Level 1 Abgeschlossen' },
    description: { en: 'Complete level 1 of each topic', nl: 'Voltooi level 1 van elk onderwerp', es: 'Completa el nivel 1 de cada tema', de: 'Vervollständige Level 1 jedes Themas' },
    emoji: '1️⃣',
    category: 'collection',
    reward: 20,
    checkCondition: (stats) => stats.topicsLevel1Completed >= 12,
    getProgress: (stats) => ({ current: Math.min(stats.topicsLevel1Completed, 12), target: 12 })
  },

  level_five_complete: {
    id: 'level_five_complete',
    name: { en: 'Level 5 Complete', nl: 'Level 5 Voltooid', es: 'Nivel 5 Completo', de: 'Level 5 Abgeschlossen' },
    description: { en: 'Complete level 5 of each topic', nl: 'Voltooi level 5 van elk onderwerp', es: 'Completa el nivel 5 de cada tema', de: 'Vervollständige Level 5 jedes Themas' },
    emoji: '5️⃣',
    category: 'collection',
    reward: 35,
    checkCondition: (stats) => stats.topicsLevel5Completed >= 12,
    getProgress: (stats) => ({ current: Math.min(stats.topicsLevel5Completed, 12), target: 12 })
  },

  level_ten_master: {
    id: 'level_ten_master',
    name: { en: 'Level 10 Master', nl: 'Level 10 Meester', es: 'Maestro del Nivel 10', de: 'Level-10-Meister' },
    description: { en: 'Complete level 10 of each topic', nl: 'Voltooi level 10 van elk onderwerp', es: 'Completa el nivel 10 de cada tema', de: 'Vervollständige Level 10 jedes Themas' },
    emoji: '🔟',
    category: 'collection',
    reward: 70,
    checkCondition: (stats) => stats.topicsLevel10Completed >= 12,
    getProgress: (stats) => ({ current: Math.min(stats.topicsLevel10Completed, 12), target: 12 })
  },

  ai_expert: {
    id: 'ai_expert',
    name: { en: 'AI Expert', nl: 'AI Expert', es: 'Experto en IA', de: 'KI-Experte' },
    description: { en: 'Complete all 10 levels of AI', nl: 'Voltooi alle 10 levels van AI', es: 'Completa los 10 niveles de IA', de: 'Vervollständige alle 10 Level von KI' },
    emoji: '🤖',
    category: 'collection',
    reward: 18,
    checkCondition: (stats) => {
      const completed = stats.topicsFullyCompleted || [];
      return completed.includes('AI');
    },
    getProgress: (stats) => {
      const progress = stats.topicProgress || {};
      const aiProgress = progress['AI'] || 0;
      return { current: Math.min(aiProgress, 10), target: 10 };
    }
  },

  board_game_master: {
    id: 'board_game_master',
    name: { en: 'Board Game Master', nl: 'Bordspel Meester', es: 'Maestro de Juegos de Mesa', de: 'Brettspiel-Meister' },
    description: { en: 'Complete all 10 levels of Board Games', nl: 'Voltooi alle 10 levels van Board Games', es: 'Completa los 10 niveles de Juegos de Mesa', de: 'Vervollständige alle 10 Level von Brettspielen' },
    emoji: '🎲',
    category: 'collection',
    reward: 18,
    checkCondition: (stats) => {
      const completed = stats.topicsFullyCompleted || [];
      return completed.includes('Board Games');
    },
    getProgress: (stats) => {
      const progress = stats.topicProgress || {};
      const bgProgress = progress['Board Games'] || 0;
      return { current: Math.min(bgProgress, 10), target: 10 };
    }
  },

  history_buff: {
    id: 'history_buff',
    name: { en: 'History Buff', nl: 'Geschiedenis Fan', es: 'Aficionado a la Historia', de: 'Geschichtsfan' },
    description: { en: 'Complete all 10 levels of Books', nl: 'Voltooi alle 10 levels van Books', es: 'Completa los 10 niveles de Libros', de: 'Vervollständige alle 10 Level von Büchern' },
    emoji: '📚',
    category: 'collection',
    reward: 18,
    checkCondition: (stats) => {
      const completed = stats.topicsFullyCompleted || [];
      return completed.includes('Books');
    },
    getProgress: (stats) => {
      const progress = stats.topicProgress || {};
      const bookProgress = progress['Books'] || 0;
      return { current: Math.min(bookProgress, 10), target: 10 };
    }
  },

  currency_collector: {
    id: 'currency_collector',
    name: { en: 'Currency Collector', nl: 'Valuta Verzamelaar', es: 'Coleccionista de Monedas', de: 'Währungssammler' },
    description: { en: 'Complete all 10 levels of Currencies', nl: 'Voltooi alle 10 levels van Currencies', es: 'Completa los 10 niveles de Monedas', de: 'Vervollständige alle 10 Level von Währungen' },
    emoji: '💰',
    category: 'collection',
    reward: 18,
    checkCondition: (stats) => {
      const completed = stats.topicsFullyCompleted || [];
      return completed.includes('Currencies');
    },
    getProgress: (stats) => {
      const progress = stats.topicProgress || {};
      const currProgress = progress['Currencies'] || 0;
      return { current: Math.min(currProgress, 10), target: 10 };
    }
  },

  sweet_tooth: {
    id: 'sweet_tooth',
    name: { en: 'Sweet Tooth', nl: 'Zoetekauw', es: 'Goloso', de: 'Naschkatze' },
    description: { en: 'Complete all 10 levels of Desserts', nl: 'Voltooi alle 10 levels van Desserts', es: 'Completa los 10 niveles de Postres', de: 'Vervollständige alle 10 Level von Desserts' },
    emoji: '🍰',
    category: 'collection',
    reward: 18,
    checkCondition: (stats) => {
      const completed = stats.topicsFullyCompleted || [];
      return completed.includes('Desserts');
    },
    getProgress: (stats) => {
      const progress = stats.topicProgress || {};
      const dessertProgress = progress['Desserts'] || 0;
      return { current: Math.min(dessertProgress, 10), target: 10 };
    }
  },

  dino_expert: {
    id: 'dino_expert',
    name: { en: 'Dino Expert', nl: 'Dino Expert', es: 'Experto en Dinosaurios', de: 'Dino-Experte' },
    description: { en: 'Complete all 10 levels of Dinosaurs', nl: 'Voltooi alle 10 levels van Dinosaurs', es: 'Completa los 10 niveles de Dinosaurios', de: 'Vervollständige alle 10 Level von Dinosauriern' },
    emoji: '🦕',
    category: 'collection',
    reward: 18,
    checkCondition: (stats) => {
      const completed = stats.topicsFullyCompleted || [];
      return completed.includes('Dinosaurs');
    },
    getProgress: (stats) => {
      const progress = stats.topicProgress || {};
      const dinoProgress = progress['Dinosaurs'] || 0;
      return { current: Math.min(dinoProgress, 10), target: 10 };
    }
  },

  // ═══ SPECIAL ACHIEVEMENTS (6) ═══
  generous_spender: {
    id: 'generous_spender',
    name: { en: 'Generous Spender', nl: 'Gulle Spender', es: 'Gastador Generoso', de: 'Großzügiger Spender' },
    description: { en: 'Buy your first item in the shop', nl: 'Koop je eerste item in de shop', es: 'Compra tu primer artículo en la tienda', de: 'Kaufe deinen ersten Artikel im Shop' },
    emoji: '🛒',
    category: 'special',
    reward: 8,
    checkCondition: (stats) => stats.shopPurchases >= 1,
    getProgress: (stats) => ({ current: Math.min(stats.shopPurchases, 1), target: 1 })
  },

  big_spender: {
    id: 'big_spender',
    name: { en: 'Big Spender', nl: 'Grote Spender', es: 'Gran Gastador', de: 'Großer Spender' },
    description: { en: 'Spend 500 stars in the shop', nl: 'Besteed 500 sterren in de shop', es: 'Gasta 500 estrellas en la tienda', de: 'Gib 500 Sterne im Shop aus' },
    emoji: '💸',
    category: 'special',
    reward: 20,
    checkCondition: (stats) => stats.starsSpent >= 500,
    getProgress: (stats) => ({ current: Math.min(stats.starsSpent, 500), target: 500 })
  },

  diamond_hoarder: {
    id: 'diamond_hoarder',
    name: { en: 'Diamond Hoarder', nl: 'Diamant Verzamelaar', es: 'Acumulador de Diamantes', de: 'Diamant-Hüter' },
    description: { en: 'Collect 50 diamonds', nl: 'Verzamel 50 diamanten', es: 'Reúne 50 diamantes', de: 'Sammle 50 Diamanten' },
    emoji: '💎',
    category: 'special',
    reward: 12,
    checkCondition: (stats) => stats.totalDiamondsEarned >= 50,
    getProgress: (stats) => ({ current: Math.min(stats.totalDiamondsEarned, 50), target: 50 })
  },

  rich_and_famous: {
    id: 'rich_and_famous',
    name: { en: 'Rich & Famous', nl: 'Rijk & Beroemd', es: 'Rico y Famoso', de: 'Reich & Berühmt' },
    description: { en: 'Collect 200 diamonds', nl: 'Verzamel 200 diamanten', es: 'Reúne 200 diamantes', de: 'Sammle 200 Diamanten' },
    emoji: '💎',
    category: 'special',
    reward: 35,
    checkCondition: (stats) => stats.totalDiamondsEarned >= 200,
    getProgress: (stats) => ({ current: Math.min(stats.totalDiamondsEarned, 200), target: 200 })
  },

  ad_watcher: {
    id: 'ad_watcher',
    name: { en: 'Ad Watcher', nl: 'Reclame Kijker', es: 'Observador de Anuncios', de: 'Anzeigen-Zuschauer' },
    description: { en: 'Watch 10 advertisements', nl: 'Kijk 10 advertenties', es: 'Mira 10 anuncios', de: 'Schaue 10 Werbungen' },
    emoji: '📺',
    category: 'special',
    reward: 12,
    checkCondition: (stats) => stats.adsWatched >= 10,
    getProgress: (stats) => ({ current: Math.min(stats.adsWatched, 10), target: 10 })
  },

  tutorial_graduate: {
    id: 'tutorial_graduate',
    name: { en: 'Tutorial Graduate', nl: 'Tutorial Afgestudeerd', es: 'Graduado del Tutorial', de: 'Tutorial-Absolvent' },
    description: { en: 'Complete the tutorial', nl: 'Voltooi de tutorial', es: 'Completa el tutorial', de: 'Vervollständige das Tutorial' },
    emoji: '🎓',
    category: 'special',
    reward: 8,
    checkCondition: (stats) => stats.tutorialCompleted === true,
    getProgress: (stats) => ({ current: stats.tutorialCompleted ? 1 : 0, target: 1 })
  }
};

// ─── Notification Queue ────────────────────────────────────────────────────────
let notificationQueue = [];
let isShowingNotification = false;

// ─── Helper Functions ──────────────────────────────────────────────────────────
function getAchievementStats() {
  const statsStr = localStorage.getItem('qb_achievement_stats');
  if (!statsStr) {
    // Initialize default stats
    const defaultStats = {
      quizzesCompleted: 0,
      totalStars: parseInt(localStorage.getItem('qb_stars') || '0'),
      totalCorrect: 0,
      totalQuestions: 0,
      perfectScores: 0,
      quizzesNoTimeout: 0,
      quizzesNoMistakes: 0,
      dailyChallengesCompleted: 0,
      dailyStreak: 0,
      powerupsUsed: 0,
      trueFalseCompleted: 0,
      trueFalsePerfect: 0,
      lightningCompleted: 0,
      lightningBestScore: 0,
      survivorBestLevel: 0,
      extremeSurvivorBestLevel: 0,
      gameModesPlayed: [],
      topicsUnlocked: 0,
      topicsLevel1Completed: 0,
      topicsLevel5Completed: 0,
      topicsLevel10Completed: 0,
      topicsFullyCompleted: [],
      topicProgress: {},
      shopPurchases: 0,
      starsSpent: 0,
      totalDiamondsEarned: parseInt(localStorage.getItem('qb_diamonds') || '0'),
      adsWatched: 0,
      tutorialCompleted: localStorage.getItem('qb_tutorial_completed') === 'true'
    };
    localStorage.setItem('qb_achievement_stats', JSON.stringify(defaultStats));
    return defaultStats;
  }
  return JSON.parse(statsStr);
}

function saveAchievementStats(stats) {
  localStorage.setItem('qb_achievement_stats', JSON.stringify(stats));
}

function getUnlockedAchievements() {
  const unlockedStr = localStorage.getItem('qb_achievements');
  return unlockedStr ? JSON.parse(unlockedStr) : {};
}

function saveUnlockedAchievements(unlocked) {
  localStorage.setItem('qb_achievements', JSON.stringify(unlocked));
}

// ─── Main Functions ────────────────────────────────────────────────────────────
window.updateAchievementStats = function(updates) {
  const stats = getAchievementStats();

  // Apply updates
  for (const [key, value] of Object.entries(updates)) {
    if (Array.isArray(stats[key]) && Array.isArray(value)) {
      // Merge arrays and remove duplicates (for gameModesPlayed, topicsFullyCompleted, etc.)
      stats[key] = [...new Set([...(stats[key] || []), ...value])];
    } else if (typeof stats[key] === 'object' && typeof value === 'object' && !Array.isArray(value)) {
      // Merge objects (for topicProgress, etc.)
      stats[key] = { ...stats[key], ...value };
    } else if (typeof value === 'number' && typeof stats[key] === 'number') {
      // Increment numeric values (quizzesCompleted, totalCorrect, etc.)
      stats[key] = (stats[key] || 0) + value;
    } else if (typeof value === 'number' && key.includes('Best')) {
      // For "best" stats, use maximum value
      stats[key] = Math.max(stats[key] || 0, value);
    } else {
      // Direct assignment (for booleans like tutorialCompleted, totalStars override, etc.)
      stats[key] = value;
    }
  }

  // Always sync totalStars from localStorage
  stats.totalStars = parseInt(localStorage.getItem('qb_stars') || '0');

  // Save updated stats
  saveAchievementStats(stats);

  // Check for newly unlocked achievements
  checkAchievements();
};

window.checkAchievements = function() {
  const stats = getAchievementStats();
  const unlocked = getUnlockedAchievements();
  const newlyUnlocked = [];

  // Check each achievement
  for (const [id, definition] of Object.entries(achievementDefinitions)) {
    // Skip if already unlocked
    if (unlocked[id]) continue;

    // Check if condition is met
    if (definition.checkCondition(stats)) {
      newlyUnlocked.push(definition);
      unlockAchievement(id, definition);
    }
  }

  return newlyUnlocked;
};

function unlockAchievement(achievementId, achievement) {
  // Mark as unlocked with timestamp
  const unlocked = getUnlockedAchievements();
  unlocked[achievementId] = Date.now();
  saveUnlockedAchievements(unlocked);

  // Award gems
  let gems = parseInt(localStorage.getItem('qb_diamonds') || '0');
  gems += achievement.reward;
  localStorage.setItem('qb_diamonds', gems.toString());

  // Update diamond display if function exists
  if (typeof window.updateDiamondDisplay === 'function') {
    window.updateDiamondDisplay();
  }

  // Update total diamonds earned stat
  const stats = getAchievementStats();
  stats.totalDiamondsEarned = (stats.totalDiamondsEarned || 0) + achievement.reward;
  saveAchievementStats(stats);

  // Add to notification queue
  notificationQueue.push(achievement);
  processNotificationQueue();

  // Update achievements screen if currently displayed
  if (window.currentScreen === 'achievements-screen' && typeof window.renderAchievementsScreen === 'function') {
    window.renderAchievementsScreen();
  }
}

function processNotificationQueue() {
  if (isShowingNotification || notificationQueue.length === 0) return;

  isShowingNotification = true;
  const achievement = notificationQueue.shift();
  showAchievementNotification(achievement);

  // Process next in queue after animation completes (3.5s)
  setTimeout(() => {
    isShowingNotification = false;
    processNotificationQueue();
  }, 3500);
}

function showAchievementNotification(achievement) {
  const notification = document.getElementById('achievement-notification');
  if (!notification) return;

  const lang = window.lang || 'en';
  const name = achievement.name[lang] || achievement.name.en;

  // Update notification content
  document.getElementById('achievement-notif-emoji').textContent = achievement.emoji;
  document.getElementById('achievement-notif-name').textContent = name;
  document.getElementById('achievement-notif-reward').textContent = `+${achievement.reward}💎`;

  // Reset progress bar
  const progressBar = document.getElementById('achievement-notif-progress');
  progressBar.style.width = '0%';
  progressBar.style.transition = 'none';

  // Show notification (slide down)
  notification.classList.remove('hidden', 'hide');
  notification.classList.add('show');

  // Start progress bar animation after a brief delay
  setTimeout(() => {
    progressBar.style.transition = 'width 2.5s ease-out';
    progressBar.style.width = '100%';
  }, 50);

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    notification.classList.add('hide');

    // Completely hide after slide-up animation
    setTimeout(() => {
      notification.classList.add('hidden');
      notification.classList.remove('hide');
    }, 400);
  }, 3000);
}

// ─── Achievements Screen Rendering ─────────────────────────────────────────────
window.renderAchievementsScreen = function() {
  console.log('renderAchievementsScreen called');

  const stats = getAchievementStats();
  const unlocked = getUnlockedAchievements();
  const lang = window.lang || 'en';

  console.log('Achievement stats:', stats);
  console.log('Unlocked achievements:', unlocked);
  console.log('Total achievement definitions:', Object.keys(achievementDefinitions).length);

  // Update stats header
  const totalAchievements = Object.keys(achievementDefinitions).length;
  const unlockedCount = Object.keys(unlocked).length;
  const totalGemsEarned = Object.values(achievementDefinitions)
    .filter(a => unlocked[a.id])
    .reduce((sum, a) => sum + a.reward, 0);

  const statsUnlocked = document.getElementById('achievement-stats-unlocked');
  const statsGems = document.getElementById('achievement-stats-gems');

  console.log('Stats elements found:', {statsUnlocked: !!statsUnlocked, statsGems: !!statsGems});

  if (statsUnlocked) statsUnlocked.textContent = `${unlockedCount}/${totalAchievements} Unlocked`;
  if (statsGems) statsGems.textContent = `${totalGemsEarned}💎 Earned`;

  // Render achievement cards
  const grid = document.getElementById('achievements-grid');
  console.log('Grid element found:', !!grid);

  if (!grid) {
    console.error('achievements-grid not found!');
    return;
  }

  grid.innerHTML = '';
  console.log('Starting to render achievement cards...');

  let cardCount = 0;
  for (const achievement of Object.values(achievementDefinitions)) {
    cardCount++;
    console.log(`Rendering card ${cardCount}:`, achievement.id);

    const isUnlocked = !!unlocked[achievement.id];
    const progress = achievement.getProgress(stats);
    const isRecent = unlocked[achievement.id] && (Date.now() - unlocked[achievement.id] < 24 * 60 * 60 * 1000);

    console.log(`  - Unlocked: ${isUnlocked}, Progress: ${progress.current}/${progress.target}`);

    const card = document.createElement('div');
    card.className = `achievement-card p-4 rounded-lg border-2 ${
      isUnlocked
        ? 'bg-gradient-to-br from-green-500 to-green-600 border-green-400'
        : 'bg-gray-700 border-gray-600'
    } ${isRecent ? 'recent' : ''}`;

    const name = achievement.name[lang] || achievement.name.en;
    const description = achievement.description[lang] || achievement.description.en;

    card.innerHTML = `
      <div class="text-center">
        <div class="text-4xl mb-2">${achievement.emoji}</div>
        <h3 class="font-bold text-lg mb-1">${name}</h3>
        <p class="text-sm mb-3 opacity-90">${description}</p>
        ${!isUnlocked ? `
          <div class="mb-2">
            <div class="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div class="h-full bg-blue-500 rounded-full transition-all duration-300"
                   style="width: ${(progress.current / progress.target) * 100}%"></div>
            </div>
            <p class="text-xs mt-1">${progress.current}/${progress.target}</p>
          </div>
        ` : ''}
        <p class="font-semibold text-sm">
          ${isUnlocked ? '✓ UNLOCKED' : '🔒 Locked'}
          <span class="ml-2">+${achievement.reward}💎</span>
        </p>
      </div>
    `;

    console.log(`  - Card HTML created, appending to grid`);
    grid.appendChild(card);
  }

  console.log(`Finished rendering ${cardCount} achievement cards`);
  console.log('Grid children count:', grid.children.length);
};

// ─── Filter Functions ──────────────────────────────────────────────────────────
window.filterAchievements = function(filter) {
  const unlocked = getUnlockedAchievements();
  const cards = document.querySelectorAll('.achievement-card');

  // Update active filter button
  document.querySelectorAll('.achievement-filter').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === filter) {
      btn.classList.add('active');
    }
  });

  // Show/hide cards based on filter
  const definitions = Object.values(achievementDefinitions);
  cards.forEach((card, index) => {
    const achievement = definitions[index];
    const isUnlocked = !!unlocked[achievement.id];

    if (filter === 'all') {
      card.style.display = '';
    } else if (filter === 'locked') {
      card.style.display = isUnlocked ? 'none' : '';
    } else if (filter === 'unlocked') {
      card.style.display = isUnlocked ? '' : 'none';
    }
  });
};

console.log('Achievement Manager loaded - 45 achievements ready!');
