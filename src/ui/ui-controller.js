// translations.js
// ─── 0) Language setting ─────────────────────────────────────────────────────────
let lang = 'en';  // ← default to English

// ─── 1) All of your UI strings, keyed by the same keys you call in ui.js ────
const translations = {
  welcome: {
    en: "Welcome to RobitQuiz!",
    es: "¡Bienvenido a RobitQuiz!",
    de: "Willkommen bei RobitQuiz!",
    nl: "Welkom bij RobitQuiz!"
  },
  levels: {
    en: "Play",
    es: "Jugar",
    de: "Spielen",
    nl: "Spelen"
  },
  leaderboard: {
    en: "Leaderboard",
    es: "Clasificación",
    de: "Bestenliste",
    nl: "Ranglijst"
  },
  chooseSubject: {
    en: "Choose a Subject",
    es: "Elige un tema",
    de: "Wähle ein Fach",
    nl: "Kies een onderwerp"
  },
  chooseLevel: {
    en: "Choose a Level",
    es: "Elige un nivel",
    de: "Wähle eine Stufe",
    nl: "Kies een niveau"
  },
  timeLeft: {
    en: "Time Left",
    es: "Tiempo restante",
    de: "Verbleibende Zeit",
    nl: "Resterende tijd"
  },
  correct: {
    en: "Correct",
    es: "Correctas",
    de: "Richtig",
    nl: "Correct"
  },
  mistakes: {
    en: "Mistakes",
    es: "Errores",
    de: "Fehler",
    nl: "Fouten"
  },
  continue: {
    en: "Continue",
    es: "Continuar",
    de: "Weiter",
    nl: "Doorgaan"
  },
  home: {
    en: "Home",
    es: "Inicio",
    de: "Startseite",
    nl: "Start"
  },
  retry: {
    en: "Retry",
    es: "Reintentar",
    de: "Erneut versuchen",
    nl: "Opnieuw proberen"
  },
  levelComplete: {
    en: "Level complete! You got {n}.",
    es: "¡Nivel completado! Obtuviste {n}.",
    de: "Level abgeschlossen! Du hast {n} richtig.",
    nl: "Niveau voltooid! Je had {n} goed."
  },
  skipQuestion: {
    en: "Skip Question",
    es: "Saltar Pregunta",
    de: "Frage überspringen",
    nl: "Vraag overslaan"
  },
  back: {
    en: "Back",
    es: "Atrás",
    de: "Zurück",
    nl: "Terug"
  },
  backToLevels: {
    en: "Back to Levels",
    es: "Volver a Niveles",
    de: "Zurück zu Levels",
    nl: "Terug naar Levels"
  },
  backToHome: {
    en: "Back to Home",
    es: "Volver al Inicio",
    de: "Zurück zur Startseite",
    nl: "Terug naar Home"
  },
  oops: {
    en: "Oops!",
    es: "¡Ups!",
    de: "Hoppla!",
    nl: "Oeps!"
  },
  tooManyWrong: {
    en: "Too many wrong answers!",
    es: "¡Demasiadas respuestas incorrectas!",
    de: "Zu viele falsche Antworten!",
    nl: "Te veel foute antwoorden!"
  },
  timeUp: {
    en: "Time's up!",
    es: "¡Se acabó el tiempo!",
    de: "Zeit ist um!",
    nl: "Tijd is om!"
  },
  timeUpMessage: {
    en: "Your time has run out!",
    es: "¡Tu tiempo se ha agotado!",
    de: "Deine Zeit ist abgelaufen!",
    nl: "Je tijd is om!"
  },
  goodJob: {
    en: "Good Job!",
    es: "¡Buen Trabajo!",
    de: "Gut gemacht!",
    nl: "Goed gedaan!"
  },
  correctAnswers: {
    en: "You got {n} correct answers!",
    es: "¡Obtuviste {n} respuestas correctas!",
    de: "Du hattest {n} richtige Antworten!",
    nl: "Je had {n} juiste antwoorden!"
  },
  levelCompleted: {
    en: "Level {level} Completed!",
    es: "¡Nivel {level} Completado!",
    de: "Level {level} Abgeschlossen!",
    nl: "Level {level} Voltooid!"
  },
  coinsEarned: {
    en: "+{n} stars earned!",
    es: "¡+{n} monedas ganadas!",
    de: "+{n} Münzen erhalten!",
    nl: "+{n} munten verdiend!"
  },
  nextLevel: {
    en: "Next Level",
    es: "Siguiente Nivel",
    de: "Nächstes Level",
    nl: "Volgend Niveau"
  },
  settings: {
    en: "Settings",
    es: "Configuración",
    de: "Einstellungen",
    nl: "Instellingen"
  },
  dailyChallenge: {
    en: "Daily Challenge",
    es: "Desafío Diario",
    de: "Tägliche Herausforderung",
    nl: "Dagelijkse Uitdaging"
  },
  challengeComplete: {
    en: "Challenge Complete!",
    es: "¡Desafío Completado!",
    de: "Herausforderung abgeschlossen!",
    nl: "Uitdaging Voltooid!"
  },
  challengeFailedTitle: {
    en: "Challenge Failed!",
    es: "¡Desafío Fallido!",
    de: "Herausforderung fehlgeschlagen!",
    nl: "Uitdaging Mislukt!"
  },
  challengeCompleteText: {
    en: "Congratulations! You completed today's challenge!",
    es: "¡Felicidades! ¡Completaste el desafío de hoy!",
    de: "Herzlichen Glückwunsch! Du hast die heutige Herausforderung gemeistert!",
    nl: "Gefeliciteerd! Je hebt de uitdaging van vandaag voltooid!"
  },
  challengeFailedText: {
    en: "Better luck tomorrow!",
    es: "¡Mejor suerte mañana!",
    de: "Viel Glück morgen!",
    nl: "Beter geluk morgen!"
  },
  challengeReward: {
    en: "+20 stars earned!",
    es: "¡+20 monedas ganadas!",
    de: "+20 Münzen erhalten!",
    nl: "+20 munten verdiend!"
  },
  challengeAvailable: {
    en: "Available now!",
    es: "¡Disponible ahora!",
    de: "Jetzt verfügbar!",
    nl: "Nu beschikbaar!"
  },
  challengeCompleted: {
    en: "Completed today",
    es: "Completado hoy",
    de: "Heute abgeschlossen",
    nl: "Vandaag voltooid"
  },
  challengeFailed: {
    en: "Try again tomorrow",
    es: "Inténtalo mañana",
    de: "Versuche es morgen",
    nl: "Probeer morgen opnieuw"
  },
  sfxVolume: {
    en: "SFX Volume:",
    es: "Volumen de efectos:",
    de: "Effektlautstärke:",
    nl: "SFX Volume:"
  },
  musicVolume: {
    en: "Music Volume:",
    es: "Volumen de música:",
    de: "Musiklautstärke:",
    nl: "Muziek Volume:"
  },
  language: {
    en: "Language:",
    es: "Idioma:",
    de: "Sprache:",
    nl: "Taal:"
  },
  showExplanations: {
    en: "Show answer explanations",
    es: "Mostrar explicaciones de respuestas",
    de: "Antworten Erklärungen anzeigen",
    nl: "Toon antwoord uitleg"
  },
  darkMode: {
    en: "Dark Mode",
    es: "Modo Oscuro",
    de: "Dunkelmodus",
    nl: "Donkere Modus"
  },
  lightMode: {
    en: "Light Mode",
    es: "Modo Claro",
    de: "Hellmodus",
    nl: "Lichte Modus"
  },
  tutorial: {
    en: "Tutorial",
    es: "Tutorial",
    de: "Tutorial",
    nl: "Handleiding"
  },
  tutorialDescription: {
    en: "Need a refresher on how to play? Restart the interactive tutorial anytime.",
    es: "¿Necesitas un repaso sobre cómo jugar? Reinicia el tutorial interactivo en cualquier momento.",
    de: "Brauchst du eine Auffrischung? Starte das interaktive Tutorial jederzeit neu.",
    nl: "Wil je een opfrissing? Herstart de interactieve handleiding wanneer je wilt."
  },
  restartTutorial: {
    en: "Restart Tutorial",
    es: "Reiniciar Tutorial",
    de: "Tutorial neu starten",
    nl: "Herstart Handleiding"
  },
  shop: {
    en: "Shop",
    es: "Tienda",
    de: "Laden",
    nl: "Winkel"
  },
  fiftyFiftyPowerups: {
    en: "50/50",
    es: "50/50",
    de: "50/50",
    nl: "50/50"
  },
  skipPowerups: {
    en: "Skip",
    es: "Saltar",
    de: "Überspringen",
    nl: "Overslaan"
  },
  timeBonusPowerups: {
    en: "Time",
    es: "Tiempo",
    de: "Zeit",
    nl: "Tijd"
  },
  removeWrongAnswers: {
    en: "Remove 2 wrong answers",
    es: "Eliminar 2 respuestas incorrectas",
    de: "2 falsche Antworten entfernen",
    nl: "Verwijder 2 foute antwoorden"
  },
  skipAnyQuestion: {
    en: "Skip any question",
    es: "Saltar cualquier pregunta",
    de: "Beliebige Frage überspringen",
    nl: "Sla elke vraag over"
  },
  addExtraSeconds: {
    en: "Add 15 extra seconds",
    es: "Añadir 15 segundos extra",
    de: "15 zusätzliche Sekunden hinzufügen",
    nl: "Voeg 15 extra seconden toe"
  },
  removeAdsForever: {
    en: "Remove Ads Forever",
    es: "Eliminar Anuncios Para Siempre",
    de: "Werbung für immer entfernen",
    nl: "Verwijder advertenties voor altijd"
  },
  noMoreAds: {
    en: "No more advertisements",
    es: "No más anuncios",
    de: "Keine Werbung mehr",
    nl: "Geen advertenties meer"
  },
  dailyRewards: {
    en: "Daily Rewards",
    es: "Recompensas Diarias",
    de: "Tägliche Belohnungen",
    nl: "Dagelijkse Beloningen"
  },
  dailyDiamonds: {
    en: "Daily 5 Diamonds",
    es: "5 Diamantes Diarios",
    de: "Täglich 5 Diamanten",
    nl: "Dagelijks 5 Diamanten"
  },
  claimOncePerDay: {
    en: "Claim once per day",
    es: "Reclamar una vez al día",
    de: "Einmal pro Tag einlösen",
    nl: "Claim eens per dag"
  },
  claimDiamonds: {
    en: '<span>Claim 5 💎</span><span class="text-sm mt-1">Free</span>',
    es: '<span>Reclamar 5 💎</span><span class="text-sm mt-1">Gratis</span>',
    de: '<span>5 💎 einlösen</span><span class="text-sm mt-1">Kostenlos</span>',
    nl: '<span>Claim 5 💎</span><span class="text-sm mt-1">Gratis</span>'
  },
  watchAdsForDiamonds: {
    en: "Watch Ads for Diamonds",
    es: "Ver Anuncios por Diamantes",
    de: "Werbung für Diamanten ansehen",
    nl: "Bekijk advertenties voor diamanten"
  },
  watchUpTo3Ads: {
    en: "Watch up to 3 ads daily",
    es: "Ver hasta 3 anuncios al día",
    de: "Bis zu 3 Anzeigen täglich ansehen",
    nl: "Bekijk maximaal 3 advertenties per dag"
  },
  watchAd: {
    en: '<span>Get 10 💎</span><span class="text-2xl mt-1">📺</span>',
    es: '<span>Obtener 10 💎</span><span class="text-2xl mt-1">📺</span>',
    de: '<span>Erhalte 10 💎</span><span class="text-2xl mt-1">📺</span>',
    nl: '<span>Krijg 10 💎</span><span class="text-2xl mt-1">📺</span>'
  },
  adRewards: {
    en: "1st ad: 10 💎 • 2nd ad: 25 💎 • 3rd ad: 50 💎",
    es: "1er anuncio: 10 💎 • 2do anuncio: 25 💎 • 3er anuncio: 50 💎",
    de: "1. Anzeige: 10 💎 • 2. Anzeige: 25 💎 • 3. Anzeige: 50 💎",
    nl: "1e advertentie: 10 💎 • 2e advertentie: 25 💎 • 3e advertentie: 50 💎"
  },
  topics: {
    en: "topics",
    es: "temas",
    de: "Themen",
    nl: "onderwerpen"
  },
  unlock: {
    en: "Unlock:",
    es: "Desbloquear:",
    de: "Freischalten:",
    nl: "Ontgrendelen:"
  },
  cooldown15min: {
    en: "15 minutes",
    es: "15 minutos",
    de: "15 Minuten",
    nl: "15 minuten"
  },
  cooldown2hours: {
    en: "2 hours",
    es: "2 horas",
    de: "2 Stunden",
    nl: "2 uur"
  },
  cooldown4hours: {
    en: "4 hours",
    es: "4 horas",
    de: "4 Stunden",
    nl: "4 uur"
  },
  cooldown6hours: {
    en: "6 hours",
    es: "6 horas",
    de: "6 Stunden",
    nl: "6 uur"
  },
  errorModalCooldownText: {
    en: "Continue playing with a second chance or accept {time} cooldown?",
    es: "¿Continuar jugando con una segunda oportunidad o aceptar tiempo de espera de {time}?",
    de: "Mit einer zweiten Chance weiterspielen oder {time} Wartezeit akzeptieren?",
    nl: "Doorgaan met een tweede kans of {time} cooldown accepteren?"
  },
  timeoutModalCooldownText: {
    en: "Get extra time and continue or accept {time} cooldown?",
    es: "¿Obtener tiempo extra y continuar o aceptar tiempo de espera de {time}?",
    de: "Extra Zeit erhalten und weitermachen oder {time} Wartezeit akzeptieren?",
    nl: "Extra tijd krijgen en doorgaan of {time} cooldown accepteren?"
  },
  acceptCooldown: {
    en: "Accept Cooldown ({time})",
    es: "Aceptar tiempo de espera ({time})",
    de: "Wartezeit akzeptieren ({time})",
    nl: "Accepteer Cooldown ({time})"
  }
};

// —— 1) Screen state trackers ——
let currentScreen = 'home-screen';
window.currentScreen = currentScreen;
let lastScreen    = 'null';
let timer;              // reused by game.js via global
let timerInterval;      // ditto
let timerPaused = false;
let pausedTimerValue = 0;

// Timer control functions for tutorial
window.pauseQuizTimer = function() {
  if (timerState && timerState.isRunning && !timerPaused) {
    clearInterval(timerInterval);
    clearTimeout(timer);
    timerPaused = true;
    pausedTimerValue = timerState.timeLeft;
    timerState.isPaused = true;
    timerState.isRunning = false;
  }
};

window.resumeQuizTimer = function() {
  if (timerPaused && window.currentScreen === 'quiz-screen') {
    timerPaused = false;
    timerState.timeLeft = pausedTimerValue;
    timerState.isPaused = false;
    timerState.isRunning = true;

    const display = document.getElementById('timer');
    if (display) {
      display.innerText = timerState.timeLeft + 's';
    }

    // Restart interval
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timerState.timeLeft--;
      if (display) {
        display.innerText = timerState.timeLeft + 's';
      }
      if (timerState.timeLeft <= 0) {
        clearInterval(timerInterval);
        timerState.isRunning = false;
      }
    }, 1000);

    // Restart timeout
    clearTimeout(timer);
    timer = setTimeout(() => {
      timerState.isRunning = false;
      showTimeoutPopup();
    }, timerState.timeLeft * 1000);
  }
};

// —— Game state variables (shared with game.js) ——
let selectedGroupIndex = null;
let selectedLevelIndex = null;
let selectedSubjectName = '';
let questions          = [];
let currentIndex       = 0;
let correctCount       = 0;
let wrongCount         = 0;
let stars              = 0;
let diamonds           = 0;
let fiftyFiftyCount    = 3;
let skipCount          = 3;
let timeBonusCount     = 3;

// ─── Admin Mode Variables (Session Only - Not Persistent) ───
let adminSequence = [];
let adminSequenceTimer = null;
let adminModeActive = false;
const targetSequence = ['star', 'gem', 'gem', 'star', 'gem', 'gem', 'star'];

// ─── Secret Reset Mode Variables ───
let resetSequence = [];
let resetSequenceTimer = null;
const resetTargetSequence = ['gem', 'star', 'star', 'gem', 'star', 'star', 'gem'];

// ─── Simple Subject Popup Variables ───
let currentSubjectData = null;
let fiftyFiftyUsed     = false;
let showExplanations   = true;

// —— Daily challenge variables ——
let challengeQuestions = [];
let challengeIndex = 0;
let challengeCorrect = 0;
let challengeWrong = 0;
let challengeTimer;
let challengeTimerInterval;
let isDailyChallenge = false;
let challengeResetTimerInterval = null;

// —— Timer state management ——
let timerState = {
  timeLeft: 15,
  isRunning: false,
  isPaused: false
};

// This will be handled in the main initialization

// —— 2) Navigation helper ——
function showScreen(screenId) {
  const all = [
    'home-screen',
    'settings-screen',
    'roadmap-screen',
    'subjects-screen',
    'levels-screen',
    'quiz-screen',
    'daily-challenge-screen',
    'shop-screen',
    'challenge-modes-screen',
    'true-false-screen',
    'lightning-round-screen',
    'survivor-screen',
    'extreme-survivor-screen',
  ];
  all.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', id !== screenId);
  });
  lastScreen    = currentScreen;
  currentScreen = screenId;
  window.currentScreen = screenId;
  
  // Start/stop cooldown updater based on screen
  if (screenId === 'levels-screen') {
    startCooldownUpdater();
  } else {
    stopCooldownUpdater();
  }

  // Start/stop daily rewards timer based on screen
  if (screenId === 'shop-screen') {
    startDailyRewardsTimer();
  } else {
    stopDailyRewardsTimer();
  }
  
  // Update top bar
  updateTopBar(screenId);
  
  // Handle timer when switching screens
  if (lastScreen === 'quiz-screen' && screenId !== 'quiz-screen') {
    // Pause timer when leaving quiz screen (don't reset)
    if (timerState.isRunning) {
      clearTimeout(timer);
      clearInterval(timerInterval);
      timerState.isPaused = true;
      timerState.isRunning = false;
    }
  } else if (lastScreen === 'daily-challenge-screen' && screenId !== 'daily-challenge-screen') {
    // Stop challenge timer when leaving challenge screen
    clearTimeout(challengeTimer);
    clearInterval(challengeTimerInterval);
  } else if (lastScreen === 'true-false-screen' && screenId !== 'true-false-screen') {
    // Stop True/False game when leaving screen
    if (window.tfGameState) {
      window.tfGameState.isPlaying = false;
      clearTimeout(window.tfGameState.timer);
      clearInterval(window.tfGameState.timerInterval);
    }
  } else if (lastScreen === 'lightning-round-screen' && screenId !== 'lightning-round-screen') {
    // Stop Lightning Round when leaving screen
    if (window.lrGameState) {
      window.lrGameState.isPlaying = false;
      clearTimeout(window.lrGameState.gameTimer);
      clearInterval(window.lrGameState.gameTimerInterval);
      clearTimeout(window.lrGameState.questionTimer);
      clearInterval(window.lrGameState.questionTimerInterval);
      clearTimeout(window.lrGameState.nextQuestionTimer);
    }
  } else if (lastScreen === 'survivor-screen' && screenId !== 'survivor-screen') {
    // Stop Survivor Mode when leaving screen
    if (window.smGameState) {
      window.smGameState.isPlaying = false;
      clearTimeout(window.smGameState.timer);
      clearTimeout(window.smGameState.nextQuestionTimer);
      clearInterval(window.smGameState.timerInterval);
    }
  } else if (lastScreen === 'extreme-survivor-screen' && screenId !== 'extreme-survivor-screen') {
    // Stop Extreme Survivor Mode when leaving screen
    if (window.esmGameState) {
      window.esmGameState.isPlaying = false;
      clearTimeout(window.esmGameState.timer);
      clearTimeout(window.esmGameState.nextQuestionTimer);
      clearInterval(window.esmGameState.timerInterval);
    }
  } else if (screenId === 'quiz-screen' && lastScreen !== 'quiz-screen') {
    // Resume timer when entering quiz screen
    if (questions && questions.length > 0 && currentIndex < questions.length) {
      setTimeout(() => {
        if (timerState.isPaused) {
          // Resume from where we left off
          resumeTimer();
        } else {
          // Start fresh timer
          startTimer();
        }
      }, 100);
    }
  } else if (screenId === 'daily-challenge-screen' && lastScreen !== 'daily-challenge-screen') {
    // Start challenge timer when entering challenge screen
    if (challengeQuestions && challengeQuestions.length > 0 && challengeIndex < challengeQuestions.length) {
      setTimeout(() => {
        startChallengeTimer();
      }, 100);
    }
  }
}

function updateTopBar(screenId) {
  const topBackBtn = document.getElementById('top-back-btn');
  const topTitle = document.getElementById('top-title');
  
  // Show/hide back button (no titles)
  switch(screenId) {
    case 'home-screen':
      topBackBtn.classList.add('hidden');
      break;
    case 'roadmap-screen':
      topBackBtn.classList.remove('hidden');
      break;
    case 'subjects-screen':
      topBackBtn.classList.remove('hidden');
      break;
    case 'levels-screen':
      topBackBtn.classList.remove('hidden');
      break;
    case 'quiz-screen':
      topBackBtn.classList.remove('hidden');
      break;
    case 'daily-challenge-screen':
      topBackBtn.classList.remove('hidden');
      break;
    case 'settings-screen':
      topBackBtn.classList.remove('hidden');
      break;
    case 'shop-screen':
      topBackBtn.classList.remove('hidden');
      break;
    case 'challenge-modes-screen':
      topBackBtn.classList.remove('hidden');
      break;
    case 'true-false-screen':
      topBackBtn.classList.remove('hidden');
      break;
    case 'lightning-round-screen':
      topBackBtn.classList.remove('hidden');
      break;
    case 'survivor-screen':
      topBackBtn.classList.remove('hidden');
      break;
    case 'extreme-survivor-screen':
      topBackBtn.classList.remove('hidden');
      break;
    default:
      topBackBtn.classList.add('hidden');
  }
}

// —— 3) Translation helpers ——
function t(key) {
  if (!translations[key]) {
    console.warn(`Translation key "${key}" not found`);
    return key;
  }
  if (!translations[key][lang]) {
    console.warn(`Translation for "${key}" in language "${lang}" not found`);
    return translations[key]['en'] || key;
  }
  return translations[key][lang];
}
function applyTranslations() {
  console.log('Applying translations, current lang:', lang);
  
  // Check if elements exist before setting text
  // const homeWelcome = document.getElementById('home-welcome'); // Now using image instead of text
  const levelsBtn = document.getElementById('levels-btn');
  const leaderboardBtn = document.getElementById('leaderboard-btn');
  
  console.log('Found elements:', {levelsBtn, leaderboardBtn});
  
  // Welcome text replaced with quiz icon image
  // if (homeWelcome) {
  //   homeWelcome.innerText = t('welcome');
  //   console.log('Set welcome text:', homeWelcome.innerText);
  // }
  
  if (levelsBtn) {
    levelsBtn.innerText = t('levels');
    console.log('Set levels text:', levelsBtn.innerText);
  } else {
    console.error('Levels button not found!');
  }
  
  if (leaderboardBtn) {
    leaderboardBtn.innerText = t('leaderboard');
    console.log('Set leaderboard text:', leaderboardBtn.innerText);
  } else {
    console.error('Leaderboard button not found!');
  }
  
  // Levels - now uses subject image instead of text title
  // const levelsTitle = document.getElementById('levels-title');
  // if (levelsTitle) levelsTitle.innerText = t('chooseLevel');
  
  // Legacy modal elements (these don't exist anymore but keeping for safety)
  const timeoutContinue = document.getElementById('timeout-continue');
  const timeoutHome = document.getElementById('timeout-home');
  const errorContinue = document.getElementById('error-modal-continue');
  
  if (timeoutContinue) timeoutContinue.innerText = t('continue');
  if (timeoutHome) timeoutHome.innerText = t('home');
  if (errorContinue) errorContinue.innerText = t('continue');
  
  // Skip button - keep the HTML format with count
  const skipBtn = document.getElementById('skip-btn');
  if (skipBtn && !skipBtn.querySelector('#skip-count')) {
    skipBtn.innerHTML = `Skip (<span id="skip-count">${skipCount}</span>)`;
  }
  
  // Daily challenge button
  const dailyChallengeBtn = document.getElementById('daily-challenge-btn');
  if (dailyChallengeBtn) {
    const textEl = dailyChallengeBtn.querySelector('.daily-challenge-text');
    if (textEl) textEl.innerText = t('dailyChallenge');
  }
  
  // Top bar back button
  const topBackBtn = document.getElementById('top-back-text');
  if (topBackBtn) topBackBtn.innerText = t('back');
  
  // Modal translations
  const errorTitle = document.getElementById('error-modal-title');
  const errorText = document.getElementById('error-modal-text');
  const errorBack = document.getElementById('error-modal-back');
  
  if (errorTitle) errorTitle.innerText = t('oops');
  if (errorText) errorText.innerText = t('tooManyWrong');
  if (errorBack) errorBack.innerText = t('backToLevels');
  
  const timeoutTitle = document.getElementById('timeout-modal-title');
  const timeoutText = document.getElementById('timeout-modal-text');
  const timeoutBack = document.getElementById('timeout-back');
  
  if (timeoutTitle) timeoutTitle.innerText = t('timeUp');
  if (timeoutText) timeoutText.innerText = t('timeUpMessage');
  if (timeoutBack) timeoutBack.innerText = t('backToLevels');
  
  const completeTitle = document.getElementById('complete-modal-title');
  const completeNext = document.getElementById('complete-next-level');
  const completeBack = document.getElementById('complete-back');
  
  if (completeTitle) completeTitle.innerText = t('goodJob');
  if (completeNext) completeNext.innerText = t('nextLevel');
  if (completeBack) completeBack.innerText = t('backToLevels');
  
  // Daily challenge modal translations
  const challengeCompleteTitle = document.getElementById('challenge-complete-title');
  const challengeCompleteText = document.getElementById('challenge-complete-text');
  const challengeCompleteReward = document.getElementById('challenge-complete-reward');
  const challengeCompleteBack = document.getElementById('challenge-complete-back');
  
  if (challengeCompleteTitle) challengeCompleteTitle.innerText = t('challengeComplete');
  if (challengeCompleteText) challengeCompleteText.innerText = t('challengeCompleteText');
  if (challengeCompleteReward) challengeCompleteReward.innerText = t('challengeReward');
  if (challengeCompleteBack) challengeCompleteBack.innerText = t('backToLevels');
  
  const challengeFailedTitle = document.getElementById('challenge-failed-title');
  const challengeFailedText = document.getElementById('challenge-failed-text');
  const challengeFailedBack = document.getElementById('challenge-failed-back');

  if (challengeFailedTitle) challengeFailedTitle.innerText = t('challengeFailedTitle');
  if (challengeFailedText) challengeFailedText.innerText = t('challengeFailedText');
  if (challengeFailedBack) challengeFailedBack.innerText = t('backToHome');

  // Settings screen translations
  const settingsTitle = document.getElementById('settings-title');
  const sfxVolumeLabel = document.getElementById('sfx-volume-label');
  const musicVolumeLabel = document.getElementById('music-volume-label');
  const languageLabel = document.getElementById('language-label');
  const explanationsLabel = document.getElementById('explanations-label');
  const themeLabel = document.getElementById('theme-label');
  const tutorialTitle = document.getElementById('tutorial-title');
  const tutorialDescription = document.getElementById('tutorial-description');
  const restartTutorialBtn = document.getElementById('restart-tutorial-btn');

  if (settingsTitle) settingsTitle.innerText = t('settings');
  if (sfxVolumeLabel) sfxVolumeLabel.innerText = t('sfxVolume');
  if (musicVolumeLabel) musicVolumeLabel.innerText = t('musicVolume');
  if (languageLabel) languageLabel.innerText = t('language');
  if (explanationsLabel) explanationsLabel.innerText = t('showExplanations');
  if (tutorialTitle) tutorialTitle.innerText = t('tutorial');
  if (tutorialDescription) tutorialDescription.innerText = t('tutorialDescription');

  // Theme label changes based on current mode
  if (themeLabel) {
    const isDarkMode = document.getElementById('theme-toggle').checked;
    themeLabel.innerText = isDarkMode ? t('darkMode') : t('lightMode');
  }

  // Restart tutorial button text (keep the SVG icon)
  if (restartTutorialBtn) {
    const svg = restartTutorialBtn.querySelector('svg');
    if (svg) {
      restartTutorialBtn.innerHTML = '';
      const span = document.createElement('span');
      span.className = 'flex items-center justify-center';
      span.appendChild(svg);
      span.appendChild(document.createTextNode(t('restartTutorial')));
      restartTutorialBtn.appendChild(span);
    } else {
      restartTutorialBtn.innerText = t('restartTutorial');
    }
  }

  // Update daily challenge button status text
  if (typeof updateDailyChallengeButton === 'function') {
    updateDailyChallengeButton();
  }

  // Update shop screen translations
  updateShopTranslations();

  console.log('Translations applied successfully');
}

// Update shop screen translations
function updateShopTranslations() {
  // Shop title
  const shopTitle = document.getElementById('shop-title');
  if (shopTitle) shopTitle.innerText = t('shop');

  // Power-up section titles - find by text content
  const headers = document.querySelectorAll('#shop-screen h3');
  headers.forEach(h3 => {
    const text = h3.innerText.trim();
    if (text.includes('50/50')) {
      h3.innerText = t('fiftyFiftyPowerups');
    } else if (text.includes('Skip')) {
      h3.innerText = t('skipPowerups');
    } else if (text.includes('Time')) {
      h3.innerText = t('timeBonusPowerups');
    } else if (text.includes('Daily Rewards') || text.includes('Dagelijkse Beloningen') || text.includes('Tägliche Belohnungen') || text.includes('Recompensas Diarias')) {
      h3.innerText = t('dailyRewards');
    }
  });

  // Power-up descriptions
  const powerupDescriptions = document.querySelectorAll('#shop-screen .text-sm');
  powerupDescriptions.forEach(desc => {
    const text = desc.innerText.trim();
    if (text.includes('Remove') || text.includes('Eliminar') || text.includes('entfernen') || text.includes('Verwijder')) {
      desc.innerText = t('removeWrongAnswers');
    } else if (text.includes('Skip') || text.includes('Saltar') || text.includes('überspringen') || text.includes('Sla')) {
      desc.innerText = t('skipAnyQuestion');
    } else if (text.includes('15') || text.includes('extra')) {
      desc.innerText = t('addExtraSeconds');
    } else if (text.includes('advertisement') || text.includes('anuncios') || text.includes('Werbung') || text.includes('advertenties')) {
      desc.innerText = t('noMoreAds');
    } else if (text.includes('once per day') || text.includes('una vez al día') || text.includes('Einmal pro Tag') || text.includes('eens per dag')) {
      desc.innerText = t('claimOncePerDay');
    } else if (text.includes('up to 3') || text.includes('hasta 3') || text.includes('Bis zu 3') || text.includes('maximaal 3')) {
      desc.innerText = t('watchUpTo3Ads');
    } else if (text.includes('1st ad') || text.includes('1er anuncio') || text.includes('1. Anzeige') || text.includes('1e advertentie')) {
      desc.innerText = t('adRewards');
    }
  });

  // Remove Ads Forever
  const removeAdsSpan = Array.from(document.querySelectorAll('#shop-screen span')).find(span =>
    span.innerText.includes('Remove Ads') || span.innerText.includes('Eliminar Anuncios') ||
    span.innerText.includes('Werbung für immer') || span.innerText.includes('Verwijder advertenties')
  );
  if (removeAdsSpan) removeAdsSpan.innerText = '🚫 ' + t('removeAdsForever');

  // Daily Diamonds
  const dailyDiamondsSpan = Array.from(document.querySelectorAll('#shop-screen span')).find(span =>
    span.innerText.includes('Daily 5 Diamonds') || span.innerText.includes('5 Diamantes Diarios') ||
    span.innerText.includes('Täglich 5 Diamanten') || span.innerText.includes('Dagelijks 5 Diamanten')
  );
  if (dailyDiamondsSpan) dailyDiamondsSpan.innerText = '💎 ' + t('dailyDiamonds');

  // Watch Ads for Diamonds
  const watchAdsSpan = Array.from(document.querySelectorAll('#shop-screen span')).find(span =>
    span.innerText.includes('Watch Ads for Diamonds') || span.innerText.includes('Ver Anuncios por Diamantes') ||
    span.innerText.includes('Werbung für Diamanten') || span.innerText.includes('Bekijk advertenties voor diamanten')
  );
  if (watchAdsSpan) watchAdsSpan.innerText = '📺 ' + t('watchAdsForDiamonds');

  // Buttons
  const dailyClaimBtn = document.getElementById('daily-claim-btn');
  if (dailyClaimBtn) dailyClaimBtn.innerHTML = t('claimDiamonds');

  const watchAdBtn = document.getElementById('watch-ad-btn');
  if (watchAdBtn) watchAdBtn.innerHTML = t('watchAd');
}

// These will be handled later in the file


// —— 4) Currency displays ——
function updateStarDisplay() {
  document.getElementById('star-count').innerText = stars;
}

function updateDiamondDisplay() {
  // Always read from localStorage to ensure we have the latest value
  diamonds = parseInt(localStorage.getItem('qb_diamonds') || '0');
  const diamondCountEl = document.getElementById('diamond-count');
  if (diamondCountEl) {
    diamondCountEl.innerText = diamonds;
  }
}

// Apply theme (dark or light mode)
function applyTheme(isDarkMode) {
  const body = document.body;

  if (isDarkMode) {
    body.classList.remove('light-mode');
  } else {
    body.classList.add('light-mode');
  }

  // Update theme toggle UI with translations
  const themeEmoji = document.getElementById('theme-emoji');
  const themeLabel = document.getElementById('theme-label');

  if (themeEmoji && themeLabel) {
    if (isDarkMode) {
      themeEmoji.innerText = '🌙';
      themeLabel.innerText = t('darkMode');
    } else {
      themeEmoji.innerText = '☀️';
      themeLabel.innerText = t('lightMode');
    }
  }
}

function updatePowerUpCounts() {
  const fiftyFiftyCountEl = document.getElementById('fifty-fifty-count');
  const skipCountEl = document.getElementById('skip-count');
  const timeBonusCountEl = document.getElementById('time-bonus-count');
  const fiftyFiftyBtn = document.getElementById('fifty-fifty-btn');
  const skipBtn = document.getElementById('skip-btn');
  const timeBonusBtn = document.getElementById('time-bonus-btn');
  
  console.log('Updating power-up counts - 50/50:', fiftyFiftyCount, 'Skip:', skipCount, 'Time Bonus:', timeBonusCount);
  
  if (fiftyFiftyCountEl) {
    fiftyFiftyCountEl.innerText = fiftyFiftyCount;
    console.log('Updated 50/50 count display to:', fiftyFiftyCount);
  } else {
    console.error('50/50 count element not found!');
  }
  
  if (skipCountEl) {
    skipCountEl.innerText = skipCount;
    console.log('Updated skip count display to:', skipCount);
  } else {
    console.error('Skip count element not found!');
  }
  
  if (timeBonusCountEl) {
    timeBonusCountEl.innerText = timeBonusCount;
    console.log('Updated time bonus count display to:', timeBonusCount);
  } else {
    console.error('Time bonus count element not found!');
  }
  
  // Show/hide Time Bonus button based on game mode
  if (timeBonusBtn) {
    if (isTimeBonusAvailable()) {
      timeBonusBtn.style.display = 'inline-block';
    } else {
      timeBonusBtn.style.display = 'none';
    }
  }
  
  if (fiftyFiftyBtn) {
    // Only disable if already used in current question, not if count is 0
    fiftyFiftyBtn.disabled = fiftyFiftyUsed;
    console.log('50/50 button state - disabled:', fiftyFiftyBtn.disabled, 'used:', fiftyFiftyUsed, 'count:', fiftyFiftyCount);
  }
  if (skipBtn) {
    // Skip button is never disabled - always allow clicking to show purchase popup if needed
    skipBtn.disabled = false;
  }
}

// —— 5) Render a quiz question ——
function renderQuestion() {
  console.log('renderQuestion called - questionNumber:', questionNumber, 'currentIndex:', currentIndex);

  // Support both new system (window.currentQuestions) and old system (questions array)
  const questionsArray = window.currentQuestions || questions;
  const index = window.currentQuestions ? questionNumber : currentIndex;

  const q = questionsArray[index];
  if (!q) {
    console.error('No question found at index:', index);
    return;
  }

  const lang = window.lang || 'en'; // Use same pattern as other functions
  document.getElementById('question').innerText = q.question[lang];

  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';

  // Reset fifty-fifty for new question
  fiftyFiftyUsed = false;
  console.log('Reset fiftyFiftyUsed to false');

  // Re-enable powerup buttons for new question
  const fiftyFiftyBtn = document.getElementById('fifty-fifty-btn');
  const skipBtn = document.getElementById('skip-btn');
  const timeBonusBtn = document.getElementById('time-bonus-btn');
  if (fiftyFiftyBtn && fiftyFiftyCount > 0) fiftyFiftyBtn.disabled = false;
  if (skipBtn && skipCount > 0) skipBtn.disabled = false;
  if (timeBonusBtn && timeBonusCount > 0) timeBonusBtn.disabled = false;
  console.log('Re-enabled powerup buttons for new question');

  // Hide any previous explanation
  hideExplanation();

  // build & enable each answer button
  [...q.options].sort(() => Math.random() - 0.5).forEach(optObj => {
    const btn = document.createElement('button');
    btn.classList.add(
      'answer-btn','px-4','py-2','rounded','w-full','text-left','font-semibold'
    );
    btn.disabled = false;
    btn.innerText = optObj[lang];
    btn.addEventListener('click', () => handleAnswer(optObj[lang], btn));
    
    // Admin Mode: Highlight correct answer in yellow
    if (adminModeActive) {
      const correctIndex = q.correctIndex !== undefined ? q.correctIndex : q.correct;
      const correctAnswer = q.options[correctIndex][lang];
      if (optObj[lang] === correctAnswer) {
        btn.style.backgroundColor = '#fef08a'; // yellow-200
        btn.style.border = '2px solid #eab308'; // yellow-500
        console.log('🔍 Admin Mode: Highlighted correct answer');
      }
    }
    
    answersDiv.appendChild(btn);
  });

  // Update power-up counts
  updatePowerUpCounts();

  // start/reset the timer
  startTimer();
}

// —— 5.1) Power-up functions ——
function useFiftyFifty() {
  console.log('useFiftyFifty called - count:', fiftyFiftyCount, 'used:', fiftyFiftyUsed);
  if (fiftyFiftyCount <= 0 || fiftyFiftyUsed) {
    console.log('50/50 blocked - count <= 0 or already used');
    if (fiftyFiftyCount <= 0) {
      showPowerUpPurchaseModal('fifty-fifty');
    }
    return;
  }

  // Support both new system (window.currentQuestions) and old system (questions array)
  const questionsArray = window.currentQuestions || questions;
  const index = window.currentQuestions ? questionNumber : currentIndex;
  const q = questionsArray[index];
  const lang = window.lang || 'en'; // Use same pattern as other functions
  
  if (!q || !q.options || (q.correctIndex === undefined && q.correct === undefined)) {
    console.error('Invalid question data:', q);
    return;
  }
  
  // Use 'correct' property instead of 'correctIndex' if available
  const correctIndex = q.correctIndex !== undefined ? q.correctIndex : q.correct;
  const correctAnswer = q.options[correctIndex][lang];
  const answerButtons = Array.from(document.querySelectorAll('.answer-btn'));
  
  // Find wrong answer buttons (trim whitespace for comparison)
  const wrongButtons = answerButtons.filter(btn => 
    btn.innerText.trim() !== correctAnswer.trim() && !btn.disabled
  );
  
  // Ensure we have at least 2 wrong answers to disable
  if (wrongButtons.length < 2) {
    console.warn('Not enough wrong answers to use 50/50');
    return;
  }
  
  // Randomly select exactly 2 wrong answers to disable
  const shuffledWrong = wrongButtons.sort(() => Math.random() - 0.5);
  const buttonsToDisable = shuffledWrong.slice(0, 2);
  
  // Verify we're disabling exactly 2 buttons
  if (buttonsToDisable.length !== 2) {
    console.warn('Could not select exactly 2 wrong answers');
    return;
  }
  
  console.log('About to disable', buttonsToDisable.length, 'buttons');
  buttonsToDisable.forEach((btn, index) => {
    console.log(`Disabling button ${index + 1}:`, btn.innerText.trim());
    
    btn.disabled = true;
    
    // Use !important to override any existing styles
    btn.style.setProperty('text-decoration', 'line-through', 'important');
    btn.style.setProperty('opacity', '0.3', 'important');
    btn.style.setProperty('cursor', 'not-allowed', 'important');
    btn.style.setProperty('background-color', '#374151', 'important');
    btn.style.setProperty('color', '#9ca3af', 'important');
    btn.style.setProperty('border', '3px solid #dc2626', 'important');
    btn.style.setProperty('transform', 'scale(0.85)', 'important');
    btn.style.setProperty('filter', 'grayscale(100%) brightness(50%)', 'important');
    btn.style.setProperty('position', 'relative', 'important');
    
    // Add visual X overlay
    const overlay = document.createElement('div');
    overlay.style.setProperty('position', 'absolute', 'important');
    overlay.style.setProperty('top', '0', 'important');
    overlay.style.setProperty('left', '0', 'important');
    overlay.style.setProperty('right', '0', 'important');
    overlay.style.setProperty('bottom', '0', 'important');
    overlay.style.setProperty('display', 'flex', 'important');
    overlay.style.setProperty('align-items', 'center', 'important');
    overlay.style.setProperty('justify-content', 'center', 'important');
    overlay.style.setProperty('font-size', '3rem', 'important');
    overlay.style.setProperty('color', '#dc2626', 'important');
    overlay.style.setProperty('font-weight', 'bold', 'important');
    overlay.style.setProperty('pointer-events', 'none', 'important');
    overlay.style.setProperty('z-index', '10', 'important');
    overlay.innerText = '❌';
    btn.appendChild(overlay);
    
    console.log('Applied enhanced 50/50 disabled styling to button:', btn.innerText.trim());
    console.log('Button final styles - opacity:', btn.style.opacity, 'backgroundColor:', btn.style.backgroundColor);
  });

  fiftyFiftyCount--;
  fiftyFiftyUsed = true;
  
  // Play a sound effect for 50/50 usage (using correct sound)
  const correctSound = document.getElementById('snd-correct');
  if (correctSound) {
    correctSound.play();
  }
  
  // Save to localStorage
  localStorage.setItem('qb_fifty_fifty_count', fiftyFiftyCount.toString());
  
  // Update the display immediately
  updatePowerUpCounts();
  
  console.log('50/50 used successfully. Remaining count:', fiftyFiftyCount);
}

function useSkip() {
  if (skipCount <= 0) {
    showPowerUpPurchaseModal('skip');
    return;
  }

  skipCount--;

  // Play a sound effect for Skip usage (same as other powerups)
  const correctSound = document.getElementById('snd-correct');
  if (correctSound) {
    correctSound.play();
  }

  // Save to localStorage
  localStorage.setItem('qb_skip_count', skipCount.toString());

  updatePowerUpCounts();

  // Move to next question (same logic as regular skip)
  clearTimeout(timer);
  clearInterval(timerInterval);

  // Support both new system (window.currentQuestions) and old system (questions array)
  const questionsArray = window.currentQuestions || questions;

  if (window.currentQuestions) {
    questionNumber++;
  } else {
    currentIndex++;
  }
  const index = window.currentQuestions ? questionNumber : currentIndex;

  // Check if user has achieved 10 correct answers or reached end of questions
  if (correctCount >= 10 || index >= questionsArray.length) {
    // Level complete - calculate tier-based star rewards
    let starsEarned = 0;
    if (correctCount >= 10) {
      // Check if this is the new subcategory system
      if (window.currentQuizContext) {
        // New system: fixed 10 stars per level
        starsEarned = 10;
      } else {
        // Old system: tier-based rewards
        const currentGroup = window.groups[selectedGroupIndex];
        if (currentGroup && currentGroup.name) {
          // Find the subject in subjectDefinitions to get tier info
          const subjectKey = Object.keys(window.subjectDefinitions).find(key => {
            const subject = window.subjectDefinitions[key];
            return subject.name[window.lang || 'en'] === currentGroup.name[window.lang || 'en'];
          });

          if (subjectKey && window.subjectDefinitions[subjectKey]) {
            starsEarned = window.subjectDefinitions[subjectKey].levelReward || 10;
          } else {
            starsEarned = 10; // Fallback for warm-up subjects
          }
        } else {
          starsEarned = 10; // Default fallback
        }
      }
    }
    if (starsEarned > 0) {
      stars += starsEarned;
      localStorage.setItem('qb_stars', stars.toString());
      updateStarDisplay();
    }

    // Update progress for new subcategory system
    if (window.currentQuizContext && typeof window.updateSubcategoryProgress === 'function') {
      const { mainTopicId, subcategoryId, level } = window.currentQuizContext;
      window.updateSubcategoryProgress(mainTopicId, subcategoryId, level + 1);
    }

    // Check if this is level 10 completion (last level of a subcategory)
    const isLevel10 = window.currentQuizContext && window.currentQuizContext.level === 10;
    console.log('Level completion - isLevel10:', isLevel10, 'currentQuizContext:', window.currentQuizContext);
    showCompletePopup(correctCount, starsEarned, isLevel10);
  } else {
    renderQuestion();
  }
}

// Time Bonus power-up function
function useTimeBonus() {
  console.log('useTimeBonus called - count:', timeBonusCount);
  
  // Check if Time Bonus is available for the current game mode
  if (!isTimeBonusAvailable()) {
    console.log('Time Bonus not available in this game mode');
    alert('Time Bonus is only available in subject quizzes, not in challenge modes.');
    return;
  }
  
  if (timeBonusCount <= 0) {
    console.log('Time Bonus blocked - count <= 0');
    showPowerUpPurchaseModal('time-bonus');
    return;
  }

  // Add 15 seconds to the current timer
  if (timerState && timerState.timeLeft !== undefined && timerState.isRunning) {
    timerState.timeLeft += 15;
    // Make sure we don't exceed a reasonable maximum (like original time + bonuses)
    timerState.timeLeft = Math.min(timerState.timeLeft, 45);
    
    // Update the timer display immediately
    const timerEl = document.getElementById('timer');
    if (timerEl) {
      timerEl.textContent = timerState.timeLeft + 's';
    }
    
    // Need to restart the timer with the new time
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timerState.isRunning = false;
      if (typeof window.showTimeoutPopup === 'function') {
        window.showTimeoutPopup();
      }
    }, timerState.timeLeft * 1000);
    
    console.log('Added 15 seconds to timer. New time:', timerState.timeLeft);
  }

  timeBonusCount--;
  
  // Play a positive sound effect
  const correctSound = document.getElementById('snd-correct');
  if (correctSound) {
    correctSound.play();
  }
  
  // Save to localStorage
  localStorage.setItem('qb_time_bonus_count', timeBonusCount.toString());
  
  // Update the display immediately
  updatePowerUpCounts();
  
  console.log('Time Bonus used successfully. Remaining count:', timeBonusCount);
  
  // Visual feedback
  const timeBonusBtn = document.getElementById('time-bonus-btn');
  if (timeBonusBtn) {
    // Briefly highlight the button
    timeBonusBtn.style.backgroundColor = '#22c55e';
    setTimeout(() => {
      timeBonusBtn.style.backgroundColor = '';
    }, 200);
  }
}

// Helper function to check if Time Bonus is available in current mode
function isTimeBonusAvailable() {
  // Time Bonus is only available in subject quizzes (regular levels)
  // Not available in challenge modes, true/false, lightning round, survivor modes, etc.
  
  // Check if we're in a challenge mode by looking at the current screen or mode
  const currentScreen = window.currentScreen;
  if (currentScreen && (
    currentScreen.includes('challenge') || 
    currentScreen.includes('lightning') || 
    currentScreen.includes('survivor') || 
    currentScreen.includes('true-false')
  )) {
    return false;
  }
  
  // Also check if we're in the quiz screen for a regular subject level
  if (currentScreen === 'quiz-screen' && 
      typeof selectedGroupIndex !== 'undefined' && 
      typeof selectedLevelIndex !== 'undefined' && 
      selectedGroupIndex >= 0 && selectedLevelIndex >= 0) {
    return true;
  }
  
  // Default to true if we can't determine the mode (assume subject quiz)
  return true;
}

// —— 5.3) Level Failure Cooldown System ——
// Cooldown duration constant (15 minutes)
const COOLDOWN_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds

function getLevelCooldownKey(groupIndex, levelIndex) {
  return `qb_level_cooldown_${groupIndex}_${levelIndex}`;
}

function getSubcategoryCooldownKey(mainTopicId, subcategoryId, level) {
  return `qb_subcategory_cooldown_${mainTopicId}_${subcategoryId}_${level}`;
}

function checkLevelCooldown(groupIndex, levelIndex) {
  const cooldownKey = getLevelCooldownKey(groupIndex, levelIndex);
  const failureTime = localStorage.getItem(cooldownKey);

  if (!failureTime) return { canPlay: true, timeRemaining: 0 };

  const failureTimestamp = parseInt(failureTime);
  const now = Date.now();
  const timePassed = now - failureTimestamp;

  if (timePassed >= COOLDOWN_DURATION) {
    // Cooldown expired, remove from storage
    localStorage.removeItem(cooldownKey);
    return { canPlay: true, timeRemaining: 0 };
  }

  return {
    canPlay: false,
    timeRemaining: COOLDOWN_DURATION - timePassed
  };
}

function checkSubcategoryCooldown(mainTopicId, subcategoryId, level) {
  const cooldownKey = getSubcategoryCooldownKey(mainTopicId, subcategoryId, level);
  const failureTime = localStorage.getItem(cooldownKey);

  if (!failureTime) return { canPlay: true, timeRemaining: 0 };

  const failureTimestamp = parseInt(failureTime);
  const now = Date.now();
  const timePassed = now - failureTimestamp;

  if (timePassed >= COOLDOWN_DURATION) {
    // Cooldown expired, remove from storage
    localStorage.removeItem(cooldownKey);
    return { canPlay: true, timeRemaining: 0 };
  }

  return {
    canPlay: false,
    timeRemaining: COOLDOWN_DURATION - timePassed
  };
}

function setLevelFailureCooldown(groupIndex, levelIndex) {
  const cooldownKey = getLevelCooldownKey(groupIndex, levelIndex);
  localStorage.setItem(cooldownKey, Date.now().toString());
}

function setSubcategoryFailureCooldown(mainTopicId, subcategoryId, level) {
  const cooldownKey = getSubcategoryCooldownKey(mainTopicId, subcategoryId, level);
  localStorage.setItem(cooldownKey, Date.now().toString());
  console.log(`Set 15-minute cooldown for ${mainTopicId}/${subcategoryId}/level${level}`);
}

function formatCooldownTime(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function resetLevelCooldown(groupIndex, levelIndex) {
  const cooldownKey = getLevelCooldownKey(groupIndex, levelIndex);
  localStorage.removeItem(cooldownKey);
}

// Update cooldown timers every second
let cooldownUpdateInterval = null;

function startCooldownUpdater() {
  console.log('Starting cooldown updater...');
  
  // Don't start if already running
  if (cooldownUpdateInterval) {
    console.log('Cooldown updater already running with interval ID:', cooldownUpdateInterval);
    return;
  }
  
  cooldownUpdateInterval = setInterval(() => {
    updateCooldownTimers();
  }, 1000);
}

function stopCooldownUpdater() {
  if (cooldownUpdateInterval) {
    clearInterval(cooldownUpdateInterval);
    cooldownUpdateInterval = null;
  }
}

function updateCooldownTimers() {
  // Only update if we're on the levels screen
  if (window.currentScreen !== 'levels-screen') {
    return;
  }

  // Update old system cooldown buttons
  const cooldownButtons = document.querySelectorAll('[data-is-on-cooldown="true"]');

  cooldownButtons.forEach((button) => {
    const groupIndex = parseInt(button.dataset.groupIndex);
    const levelIndex = parseInt(button.dataset.levelIndex);

    const cooldownStatus = checkLevelCooldown(groupIndex, levelIndex);

    if (cooldownStatus.canPlay) {
      // Cooldown expired - update button to playable state
      button.className = 'play-btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors duration-200 flex items-center justify-center w-full';
      button.innerHTML = '▶ Play Level';
      button.style.filter = '';
      button.dataset.isOnCooldown = 'false';
      console.log('Cooldown expired for level', levelIndex + 1);
    } else {
      // Update the countdown timer live
      const timeRemaining = formatCooldownTime(cooldownStatus.timeRemaining);
      const newText = `🔒 Cooldown: ${timeRemaining}`;
      console.log(`Updating button text to: ${newText}`);
      button.innerHTML = newText;
    }
  });

  // Update new system (subcategory) cooldown timers
  const cooldownTimers = document.querySelectorAll('[id^="cooldown-timer-"]');
  cooldownTimers.forEach((timerEl) => {
    // Parse the ID to get mainTopicId, subcategoryId, and level
    const idParts = timerEl.id.replace('cooldown-timer-', '').split('-');
    if (idParts.length >= 3) {
      const level = parseInt(idParts[idParts.length - 1]);
      const subcategoryId = idParts[idParts.length - 2];
      const mainTopicId = idParts.slice(0, idParts.length - 2).join('-');

      const cooldownStatus = checkSubcategoryCooldown(mainTopicId, subcategoryId, level);

      if (cooldownStatus.canPlay) {
        // Cooldown expired - refresh the subcategories view
        console.log(`Cooldown expired for ${mainTopicId}/${subcategoryId}/level${level}`);
        if (window.currentMainTopic) {
          showSubcategories(window.currentMainTopic);
        }
      } else {
        // Update timer display
        timerEl.innerText = formatCooldownTime(cooldownStatus.timeRemaining);
      }
    }
  });
}

function bypassCooldownWithAd(groupIndex, levelIndex) {
  // Simulate watching an ad (in a real app, this would trigger ad SDK)
  alert("Ad watched! Cooldown removed.");
  resetLevelCooldown(groupIndex, levelIndex);
  // Refresh the levels screen to update button states
  if (window.currentScreen === 'levels-screen') {
    openLevels(groupIndex);
  }
}

function bypassCooldownWithDiamonds(groupIndex, levelIndex) {
  const diamondCost = 5;
  const currentDiamonds = parseInt(localStorage.getItem('qb_diamonds') || '0');
  
  if (currentDiamonds < diamondCost) {
    alert(`You need ${diamondCost} diamonds to bypass the cooldown. You have ${currentDiamonds} diamonds.`);
    return false;
  }
  
  const newDiamondTotal = currentDiamonds - diamondCost;
  localStorage.setItem('qb_diamonds', newDiamondTotal.toString());
  updateDiamondDisplay();
  
  resetLevelCooldown(groupIndex, levelIndex);
  alert(`Cooldown bypassed! ${diamondCost} diamonds spent. ${newDiamondTotal} diamonds remaining.`);
  
  // Refresh the levels screen to update button states
  if (window.currentScreen === 'levels-screen') {
    openLevels(groupIndex);
  }
  return true;
}

// timer logic
function startTimer() {
  const duration = 15;
  timerState.timeLeft = duration;
  timerState.isRunning = true;
  timerState.isPaused = false;
  
  const display = document.getElementById('timer');
  display.innerText = timerState.timeLeft + 's';
  clearInterval(timerInterval);
  clearTimeout(timer);

  timerInterval = setInterval(() => {
    timerState.timeLeft--;
    display.innerText = timerState.timeLeft + 's';
    if (timerState.timeLeft <= 0) {
      clearInterval(timerInterval);
      timerState.isRunning = false;
    }
  }, 1000);

  timer = setTimeout(() => {
    timerState.isRunning = false;
    showTimeoutPopup();
  }, duration * 1000);
}

function resumeTimer() {
  if (!timerState.isPaused || timerState.timeLeft <= 0) return;
  
  timerState.isRunning = true;
  timerState.isPaused = false;
  
  const display = document.getElementById('timer');
  display.innerText = timerState.timeLeft + 's';
  clearInterval(timerInterval);
  clearTimeout(timer);

  timerInterval = setInterval(() => {
    timerState.timeLeft--;
    display.innerText = timerState.timeLeft + 's';
    if (timerState.timeLeft <= 0) {
      clearInterval(timerInterval);
      timerState.isRunning = false;
    }
  }, 1000);

  timer = setTimeout(() => {
    timerState.isRunning = false;
    showTimeoutPopup();
  }, timerState.timeLeft * 1000);
}

// —— 6) Build Subjects & Levels screens ——
function showSubjects() {
  const grid = document.getElementById('subjects-grid');
  grid.innerHTML = '';

  // NEW: Show main topics (AI, Egypt, Food, F1) instead of tier-based subjects
  const userStars = parseInt(localStorage.getItem('qb_stars') || '0');
  const unlockedMainTopics = JSON.parse(localStorage.getItem('qb_unlocked_main_topics') || '["ai"]'); // AI always unlocked
  
  // Get all main topics from the new structure
  const allMainTopics = Object.values(window.mainTopics || {});

  if (allMainTopics.length === 0) {
    grid.innerHTML = '<div class="text-center text-gray-600 p-8">No topics available yet. Please refresh the page.</div>';
    showScreen('subjects-screen');
    return;
  }

  allMainTopics.forEach((topic) => {
    const isUnlocked = unlockedMainTopics.includes(topic.id);
    const cost = topic.unlockCost;
    
    const container = document.createElement('div');
    container.className = 'w-full';

    const btn = document.createElement('button');
    // Color based on topic
    const topicColors = {
      'ai': 'from-purple-600 to-blue-600',
      'egypt': 'from-yellow-600 to-orange-600',
      'food': 'from-green-600 to-emerald-600',
      'f1': 'from-red-600 to-pink-600',
      'board-games': 'from-indigo-600 to-purple-600',
      'books': 'from-amber-600 to-yellow-600',
      'currencies': 'from-yellow-500 to-green-600',
      'desserts': 'from-pink-500 to-rose-600',
      'dinosaurs': 'from-green-700 to-teal-600',
      'drinks': 'from-cyan-600 to-blue-500',
      'famous-buildings': 'from-stone-600 to-gray-600',
      'famous-people': 'from-orange-500 to-red-600'
    };
    const color = topicColors[topic.id] || 'from-gray-600 to-gray-700';

    btn.className = `w-full font-semibold py-6 px-6 rounded-xl shadow-lg text-white transition-all duration-300 relative ${
      isUnlocked
        ? `bg-gradient-to-r ${color} hover:opacity-90 cursor-pointer`
        : 'bg-gray-600 cursor-not-allowed opacity-75'
    }`;

    // Main content container - flex with icon and name
    const mainContent = document.createElement('div');
    mainContent.className = 'flex items-center justify-between space-x-4';

    // Left side: Icon and name
    const leftSide = document.createElement('div');
    leftSide.className = 'flex items-center space-x-4';

    const icon = document.createElement('span');
    icon.className = 'text-5xl';
    icon.innerText = topic.icon;

    const nameText = document.createElement('div');
    nameText.className = 'text-2xl font-bold';
    nameText.innerText = topic.name[lang];

    leftSide.appendChild(icon);
    leftSide.appendChild(nameText);

    // Right side: Status (unlock/subcategory count)
    const rightSide = document.createElement('div');
    rightSide.className = 'text-right';

    if (isUnlocked) {
      const subCount = document.createElement('div');
      subCount.className = 'text-sm opacity-90';
      subCount.innerText = `${topic.subcategories.length} ${t('topics')}`;
      rightSide.appendChild(subCount);
    } else {
      const unlockText = document.createElement('div');
      unlockText.className = 'text-sm opacity-90 mb-1';
      unlockText.innerText = `🔒 ${t('unlock')}`;

      const costText = document.createElement('div');
      costText.className = 'text-lg font-bold';
      costText.innerText = `${cost} ⭐`;

      rightSide.appendChild(unlockText);
      rightSide.appendChild(costText);
    }

    mainContent.appendChild(leftSide);
    mainContent.appendChild(rightSide);
    btn.appendChild(mainContent);
    
    // Click handler
    btn.addEventListener('click', (e) => {
      console.log('MAIN TOPIC CLICKED:', topic.name[lang], 'isUnlocked:', isUnlocked);
      e.preventDefault();
      e.stopPropagation();

      if (isUnlocked) {
        // Dispatch event for tutorial
        window.dispatchEvent(new CustomEvent('subject-selected'));
        // Show subcategories for this main topic
        showSubcategories(topic.id);
      } else {
        // Show unlock popup
        if (userStars >= cost) {
          const confirmed = confirm(`Unlock "${topic.name[lang]}" for ${cost} stars?`);
          if (confirmed) {
            // Deduct stars and unlock
            const newStars = userStars - cost;
            localStorage.setItem('qb_stars', newStars.toString());
            stars = newStars;
            updateStarDisplay();

            // Add to unlocked topics
            unlockedMainTopics.push(topic.id);
            localStorage.setItem('qb_unlocked_main_topics', JSON.stringify(unlockedMainTopics));

            // Refresh screen
            showSubjects();
          }
        } else {
          alert(`You need ${cost} stars to unlock this topic. You currently have ${userStars} stars.`);
        }
      }
    });

    container.appendChild(btn);
    grid.appendChild(container);
  });
  
  showScreen('subjects-screen');
}

// NEW: Show subcategories with progress bars
function showSubcategories(mainTopicId) {
  const topic = window.mainTopics[mainTopicId];
  if (!topic) {
    console.error('Topic not found:', mainTopicId);
    return;
  }

  // Store current main topic for back button navigation
  window.currentMainTopic = mainTopicId;

  // Use the levels-screen to show subcategories
  const grid = document.getElementById('levels-grid');
  grid.innerHTML = '';

  // Set the subject image (use topic icon for now)
  const img = document.getElementById('levels-subject-image');
  img.style.display = 'none'; // Hide image, we'll just use text title

  // Create subcategory buttons
  topic.subcategories.forEach((subcat) => {
    const currentLevel = window.getSubcategoryProgress(mainTopicId, subcat.id);
    // If all 10 levels completed, currentLevel = 11, so we need to cap at 100%
    const progressPercent = Math.min(((currentLevel - 1) / 10) * 100, 100); // Level 1 = 0%, Level 10 = 90%, Level 11 (all completed) = 100%
    const isFullyCompleted = currentLevel > 10;

    // Check if current level is on cooldown
    const cooldownStatus = checkSubcategoryCooldown(mainTopicId, subcat.id, currentLevel);
    const isOnCooldown = !cooldownStatus.canPlay;

    // DEBUG: Log progress calculation
    console.log(`📊 ${subcat.name.en}:`, {
      currentLevel,
      progressPercent,
      isFullyCompleted,
      isOnCooldown,
      calculation: `((${currentLevel} - 1) / 10) * 100 = ${((currentLevel - 1) / 10) * 100}`
    });

    const container = document.createElement('div');
    container.className = 'w-full relative';

    const btn = document.createElement('button');
    // Disable button if all levels completed or on cooldown
    if (isFullyCompleted) {
      btn.className = 'w-full font-semibold py-4 px-6 rounded-xl shadow-lg bg-gradient-to-r from-green-500 to-green-600 text-white opacity-75 cursor-not-allowed';
      btn.disabled = true;
    } else if (isOnCooldown) {
      btn.className = 'w-full font-semibold py-4 px-6 rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white opacity-50 cursor-not-allowed';
      btn.disabled = true;
    } else {
      btn.className = 'w-full font-semibold py-4 px-6 rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all duration-300';
    }

    // Top section: Icon, name, and level indicator
    const topSection = document.createElement('div');
    topSection.className = 'flex items-center justify-between mb-3';

    const leftPart = document.createElement('div');
    leftPart.className = 'flex items-center space-x-3';

    const icon = document.createElement('span');
    icon.className = 'text-3xl';
    icon.innerText = subcat.icon;

    const name = document.createElement('div');
    name.className = 'text-lg font-bold text-left';
    name.innerText = subcat.name[lang];

    leftPart.appendChild(icon);
    leftPart.appendChild(name);

    const levelIndicator = document.createElement('div');
    levelIndicator.className = 'text-sm opacity-90';
    if (isFullyCompleted) {
      levelIndicator.innerText = '✅ Completed!';
    } else {
      levelIndicator.innerText = `Level ${currentLevel}`;
    }

    topSection.appendChild(leftPart);
    topSection.appendChild(levelIndicator);

    // Progress bar
    const progressContainer = document.createElement('div');
    progressContainer.className = 'w-full bg-gray-200 bg-opacity-30 rounded-full h-3';

    const progressBar = document.createElement('div');
    progressBar.className = 'bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-500';
    progressBar.style.width = `${progressPercent}%`;

    progressContainer.appendChild(progressBar);

    // Assemble button
    btn.appendChild(topSection);
    btn.appendChild(progressContainer);

    // Add cooldown overlay if on cooldown
    if (isOnCooldown) {
      const overlay = document.createElement('div');
      overlay.className = 'absolute inset-0 bg-gray-900 bg-opacity-70 rounded-xl flex flex-col items-center justify-center pointer-events-none';
      overlay.style.backdropFilter = 'blur(2px)';

      const lockIcon = document.createElement('div');
      lockIcon.className = 'text-4xl mb-2';
      lockIcon.innerText = '🔒';

      const timerText = document.createElement('div');
      timerText.className = 'text-white font-bold text-xl';
      timerText.id = `cooldown-timer-${mainTopicId}-${subcat.id}-${currentLevel}`;
      timerText.innerText = formatCooldownTime(cooldownStatus.timeRemaining);

      overlay.appendChild(lockIcon);
      overlay.appendChild(timerText);

      container.appendChild(overlay);
    }

    // Click handler - only if not fully completed and not on cooldown
    if (!isFullyCompleted && !isOnCooldown) {
      btn.addEventListener('click', () => {
        console.log(`Starting ${subcat.name[lang]} at level ${currentLevel}`);
        startSubcategoryQuiz(mainTopicId, subcat.id, currentLevel);
      });
    }

    container.appendChild(btn);
    grid.appendChild(container);
  });

  showScreen('levels-screen');
}

// NEW: Start quiz for a specific subcategory at a specific level
function startSubcategoryQuiz(mainTopicId, subcategoryId, level) {
  console.log(`Starting quiz: ${mainTopicId}/${subcategoryId}/level${level}`);

  // Check if level is on cooldown (15-minute lockout after failure)
  const cooldownStatus = checkSubcategoryCooldown(mainTopicId, subcategoryId, level);
  if (!cooldownStatus.canPlay) {
    const timeLeft = formatCooldownTime(cooldownStatus.timeRemaining);
    alert(`This level is locked for ${timeLeft} due to a previous failure. Try again later or use diamonds to continue.`);
    return;
  }

  // Don't allow starting if level > 10 (all levels completed)
  if (level > 10) {
    console.log('All levels completed, cannot start level', level);
    return;
  }

  // Get topic and subcategory info
  const topic = window.mainTopics[mainTopicId];
  if (!topic) {
    alert('Topic not found!');
    return;
  }

  const subcat = topic.subcategories.find(s => s.id === subcategoryId);
  if (!subcat) {
    alert('Subcategory not found!');
    return;
  }

  // Dynamically load the level file
  const scriptPath = `src/questions/data/subjects/${topic.folder}/${subcat.folder}/level${level}.js`;
  console.log('Loading level file:', scriptPath);

  // Create a script tag to load the level
  const script = document.createElement('script');
  script.src = scriptPath;
  script.onload = () => {
    console.log('Level file loaded successfully');

    // The level file should export a module with questions
    // Try to access it via window or require
    const levelModule = window[`level${level}`];

    if (levelModule && levelModule.questions) {
      console.log(`Found ${levelModule.questions.length} questions`);

      // Store current context for after quiz completion
      window.currentQuizContext = {
        mainTopicId,
        subcategoryId,
        level
      };

      // Start the quiz with these questions
      startQuizWithQuestions(levelModule.questions, subcat.name[lang]);
    } else {
      alert(`Level file loaded but no questions found. Please check the file format.`);
    }
  };

  script.onerror = () => {
    console.error('Failed to load level file:', scriptPath);
    alert(`Failed to load level file:\n${scriptPath}\n\nPlease make sure the file exists.`);
  };

  document.head.appendChild(script);
}

// Helper function to start quiz with loaded questions
function startQuizWithQuestions(questions, subjectName) {
  // Initialize quiz state - use the same variable names as game.js
  questionNumber = 0;
  correctCount = 0;
  wrongCount = 0;
  maxWrong = 2;
  selectedSubjectName = subjectName;

  // Reset answer processing flag for new quiz
  window.answerProcessing = false;
  console.log('Reset answerProcessing flag for new quiz');

  // Reset game over flag for new quiz
  window.gameIsOver = false;
  console.log('Reset gameIsOver flag for new quiz');

  // Reset continue button processing state
  if (window.continueButtonProcessing !== undefined) {
    window.continueButtonProcessing = false;
    console.log('Reset continue button processing state for new quiz');
  }

  // Store questions
  window.currentQuestions = questions;

  // Reset power-ups
  fiftyFiftyCount = parseInt(localStorage.getItem('qb_fiftyfifty_count') || '3');
  skipCount = parseInt(localStorage.getItem('qb_skip_count') || '3');
  timeBonusCount = parseInt(localStorage.getItem('qb_timebonus_count') || '3');
  updatePowerUpCounts();

  // Show quiz screen and start
  showScreen('quiz-screen');
  renderQuestion();
  startTimer();

  // Dispatch event for tutorial to know quiz has started
  window.dispatchEvent(new CustomEvent('quiz-started'));
}

function openLevels(groupIdx) {
  const group = window.groups[groupIdx];
  selectedSubjectName = group.name[lang];
  
  // Set subject image instead of text title
  const subjectImageMap = {
    'animals': 'animals.png',
    'dinosaurs': 'dinosaurs.png', 
    'arts-culture': 'arts & culture.png',
    'history': 'history.png',
    'movies-entertainment': 'movies & entertainment.png',
    'science': 'science.png',
    'space-astronomy': 'space & astronomy.png',
    'sports': 'sports.png',
    'technology': 'technology.png',
    'world-geography': 'world geography.png'
  };
  
  // Find the subject key from the group data
  let subjectKey = 'default';
  Object.keys(window.subjectDefinitions).forEach(key => {
    const subject = window.subjectDefinitions[key];
    if (subject.name[lang] === selectedSubjectName) {
      subjectKey = key.split('/').pop(); // Get the part after the slash
    }
  });
  
  const levelImage = document.getElementById('levels-subject-image');
  const imageFileName = subjectImageMap[subjectKey] || 'default.png';
  levelImage.src = `images/subjects/${imageFileName}`;
  levelImage.alt = selectedSubjectName;
  
  // Fallback to emoji if image not found
  levelImage.onerror = () => {
    console.warn(`Image not found: ${levelImage.src}, using fallback`);
    // Find the subject's emoji icon
    let subjectIcon = '📚'; // default icon
    Object.keys(window.subjectDefinitions).forEach(key => {
      const subject = window.subjectDefinitions[key];
      if (subject.name[lang] === selectedSubjectName) {
        subjectIcon = subject.icon;
      }
    });
    
    // Replace image with emoji
    levelImage.style.display = 'none';
    const fallbackIcon = document.createElement('span');
    fallbackIcon.className = 'text-6xl';
    fallbackIcon.innerText = subjectIcon;
    levelImage.parentNode.appendChild(fallbackIcon);
  };
  const grid = document.getElementById('levels-grid');
  grid.innerHTML = '';
  
  group.levels.forEach((lvl, i) => {
    // Check if level is completed
    const isCompleted = isLevelCompleted(groupIdx, i);
    
    // Create level container with wavy positioning (similar to subjects)
    const levelContainer = document.createElement('div');
    levelContainer.className = 'level-container relative';
    
    // Create level card with different styling for completed levels
    const card = document.createElement('div');
    if (isCompleted) {
      // Completed level - green theme, no hover effect
      card.className = 'level-card bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 shadow-lg relative opacity-75';
    } else {
      // Uncompleted level - normal styling
      card.className = 'level-card bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative';
    }
    
    // Level number badge (or checkmark for completed)
    const badge = document.createElement('div');
    if (isCompleted) {
      badge.className = 'level-badge bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mb-2';
      badge.innerText = '✓';
    } else {
      badge.className = 'level-badge bg-yellow-400 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-2';
      badge.innerText = (i + 1).toString();
    }
    
    // Level title
    const title = document.createElement('h3');
    title.className = 'level-title text-white font-bold text-lg mb-2';
    title.innerText = lvl.name[lang];
    
    // Level description
    const description = document.createElement('p');
    description.className = 'level-description text-gray-200 text-sm mb-3';
    description.innerText = 'Get 10 questions correct';
    
    // Progress bar (placeholder for now)
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container bg-gray-700 rounded-full h-2 mb-3';
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full';
    progressBar.style.width = '0%'; // Could be dynamic based on completion
    progressContainer.appendChild(progressBar);
    
    // Play button
    const playBtn = document.createElement('button');
    
    // Check if level is completed first
    if (isCompleted) {
      // Completed level - show checkmark, disabled button
      playBtn.className = 'play-btn bg-gray-400 text-white font-bold py-2 px-4 rounded-full text-sm flex items-center justify-center w-full cursor-not-allowed opacity-60';
      playBtn.innerHTML = '✓ Completed';
      playBtn.disabled = true;
    } else {
      // Check cooldown status to determine button state
      const cooldownStatus = checkLevelCooldown(groupIdx, i);
      if (cooldownStatus.canPlay) {
        playBtn.className = 'play-btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-sm transition-colors duration-200 flex items-center justify-center w-full';
        playBtn.innerHTML = '▶ Play Level';
      } else {
        console.log('Level on cooldown - groupIdx:', groupIdx, 'levelIdx:', i, 'timeRemaining:', cooldownStatus.timeRemaining);
        playBtn.className = 'play-btn bg-red-500 text-white font-bold py-2 px-4 rounded-full text-sm flex items-center justify-center w-full cursor-not-allowed opacity-75';
        playBtn.style.filter = 'grayscale(100%)';
        console.log('Applied grayscale filter to cooldown button');
        const timeRemaining = formatCooldownTime(cooldownStatus.timeRemaining);
        playBtn.innerHTML = `🔒 Cooldown: ${timeRemaining}`;
        console.log('Set cooldown button text to:', playBtn.innerHTML);
      }
      
      // Add real-time countdown updating
      playBtn.dataset.groupIndex = groupIdx;
      playBtn.dataset.levelIndex = i;
      playBtn.dataset.isOnCooldown = 'true';
      console.log('Set cooldown dataset attributes');
    }
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log('Play button clicked for level:', i + 1, 'subject:', groupIdx);
      
      // Don't do anything if level is completed
      if (isCompleted) {
        console.log('Level is already completed, ignoring click');
        return;
      }
      
      console.log('Available groups:', window.groups ? window.groups.length : 'undefined');
      console.log('Group data:', window.groups ? window.groups[groupIdx] : 'undefined');
      
      if (!window.groups || !window.groups[groupIdx]) {
        console.error('Groups not loaded or group not found!');
        alert('Error: Subjects not loaded yet. Please wait and try again.');
        return;
      }
      
      if (!window.groups[groupIdx].levels || !window.groups[groupIdx].levels[i]) {
        console.error('Level not found!');
        alert('Error: Level not found. Please refresh the page.');
        return;
      }
      
      if (!window.groups[groupIdx].levels[i].questions || window.groups[groupIdx].levels[i].questions.length === 0) {
        console.error('Level has no questions!');
        alert('Error: This level has no questions. Please refresh the page.');
        return;
      }
      
      // Check for level cooldown
      const cooldownStatus = checkLevelCooldown(groupIdx, i);
      if (!cooldownStatus.canPlay) {
        const timeRemaining = formatCooldownTime(cooldownStatus.timeRemaining);
        alert(`This level is on cooldown due to a recent failure. Time remaining: ${timeRemaining}\n\nOptions:\n- Wait for cooldown to expire\n- Watch an ad to reset cooldown\n- Spend diamonds to reset cooldown`);
        return;
      }
      
      if (typeof window.startLevel === 'function') {
        console.log('Starting level with', window.groups[groupIdx].levels[i].questions.length, 'questions');
        window.startLevel(groupIdx, i);
      } else {
        console.error('startLevel function not available!');
        alert('Error: Game not properly loaded. Please refresh the page.');
      }
    });
    
    // Assemble the card
    card.appendChild(badge);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(progressContainer);
    card.appendChild(playBtn);
    
    // Make entire card clickable (except for completed levels)
    card.addEventListener('click', () => {
      console.log('Card clicked for level:', i + 1, 'subject:', groupIdx);
      
      // Don't do anything if level is completed
      if (isCompleted) {
        console.log('Level is already completed, ignoring card click');
        return;
      }
      
      console.log('Available groups:', window.groups ? window.groups.length : 'undefined');
      console.log('Group data:', window.groups ? window.groups[groupIdx] : 'undefined');
      
      if (!window.groups || !window.groups[groupIdx]) {
        console.error('Groups not loaded or group not found!');
        alert('Error: Subjects not loaded yet. Please wait and try again.');
        return;
      }
      
      if (!window.groups[groupIdx].levels || !window.groups[groupIdx].levels[i]) {
        console.error('Level not found!');
        alert('Error: Level not found. Please refresh the page.');
        return;
      }
      
      if (!window.groups[groupIdx].levels[i].questions || window.groups[groupIdx].levels[i].questions.length === 0) {
        console.error('Level has no questions!');
        alert('Error: This level has no questions. Please refresh the page.');
        return;
      }
      
      if (typeof window.startLevel === 'function') {
        console.log('Starting level with', window.groups[groupIdx].levels[i].questions.length, 'questions');
        window.startLevel(groupIdx, i);
      } else {
        console.error('startLevel function not available!');
        alert('Error: Game not properly loaded. Please refresh the page.');
      }
    });
    
    levelContainer.appendChild(card);
    
    grid.appendChild(levelContainer);
  });
  
  showScreen('levels-screen');
  
  // Scroll the main content area to top to show the first level (levels 1,2,3,4)
  setTimeout(() => {
    // Scroll the window/document to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 100);
  
  // Additional attempt to ensure it works
  setTimeout(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, 200);
}

// —— 6.5) Modal helpers ——

// Set modal cooldown text based on game mode
function setModalCooldownText(gameMode) {
  const errorCooldownText = document.getElementById('error-modal-cooldown-text');
  const errorBackButton = document.getElementById('error-modal-back');
  const timeoutCooldownText = document.getElementById('timeout-modal-cooldown-text');
  const timeoutBackButton = document.getElementById('timeout-back');

  let cooldownMinutes;
  let cooldownKey;

  switch(gameMode) {
    case 'normal':
      cooldownMinutes = 15;
      cooldownKey = 'cooldown15min';
      break;
    case 'lightning':
      cooldownMinutes = 120;
      cooldownKey = 'cooldown2hours';
      break;
    case 'survivor':
      cooldownMinutes = 240;
      cooldownKey = 'cooldown4hours';
      break;
    case 'extreme-survivor':
      cooldownMinutes = 360;
      cooldownKey = 'cooldown6hours';
      break;
    default:
      cooldownMinutes = 15;
      cooldownKey = 'cooldown15min';
  }

  const cooldownLabel = t(cooldownKey);

  if (errorCooldownText) {
    errorCooldownText.textContent = t('errorModalCooldownText').replace('{time}', cooldownLabel);
  }
  if (errorBackButton) {
    errorBackButton.textContent = t('acceptCooldown').replace('{time}', cooldownLabel);
  }
  if (timeoutCooldownText) {
    timeoutCooldownText.textContent = t('timeoutModalCooldownText').replace('{time}', cooldownLabel);
  }
  if (timeoutBackButton) {
    timeoutBackButton.textContent = t('acceptCooldown').replace('{time}', cooldownLabel);
  }

  // Store the cooldown duration for use when accepting cooldown
  window.currentModalCooldownMinutes = cooldownMinutes;
}

function hideTimeoutPopup() {
  document.getElementById('timeout-modal').classList.add('hidden');
}

function hideErrorPopup() {
  document.getElementById('error-modal').classList.add('hidden');
}

function showCompletePopup(correctCount, starsEarned, isLevel10 = false) {
  const modal = document.getElementById('complete-modal');
  const textEl = document.getElementById('complete-modal-text');
  const starsEl = document.getElementById('complete-modal-coins');

  // Show level number if context is available
  if (textEl) {
    if (window.currentQuizContext && window.currentQuizContext.level) {
      const levelNum = window.currentQuizContext.level;
      textEl.innerText = t('levelCompleted').replace('{level}', levelNum) + ' ' + t('correctAnswers').replace('{n}', correctCount);
    } else {
      textEl.innerText = t('correctAnswers').replace('{n}', correctCount);
    }
  }

  if (starsEl) {
    if (starsEarned > 0) {
      starsEl.innerText = t('coinsEarned').replace('{n}', starsEarned);
      starsEl.classList.remove('hidden');
    } else {
      starsEl.classList.add('hidden');
    }
  }

  // If this is level 10, modify the buttons
  const nextLevelBtn = document.getElementById('complete-next-level');
  const backBtn = document.getElementById('complete-back');

  console.log('🎉 showCompletePopup called with:');
  console.log('  - correctCount:', correctCount);
  console.log('  - starsEarned:', starsEarned);
  console.log('  - isLevel10:', isLevel10);
  console.log('  - window.currentQuizContext:', window.currentQuizContext);

  // First, always clean up any existing "Next Subject" buttons
  const existingNextBtn = document.getElementById('complete-next-subject');
  if (existingNextBtn) {
    existingNextBtn.remove();
  }

  if (isLevel10 && window.currentQuizContext) {
    const { mainTopicId, subcategoryId } = window.currentQuizContext;
    const topic = window.mainTopics[mainTopicId];

    console.log('✅ Level 10 completion detected! Setting up special popup...');
    console.log('  - mainTopicId:', mainTopicId);
    console.log('  - subcategoryId:', subcategoryId);
    console.log('  - topic:', topic);

    // Find current subcategory index
    const currentSubcatIndex = topic.subcategories.findIndex(s => s.id === subcategoryId);
    const nextSubcat = topic.subcategories[currentSubcatIndex + 1];

    console.log('  - currentSubcatIndex:', currentSubcatIndex);
    console.log('  - nextSubcat:', nextSubcat);

    // Hide "Next Level" button and show custom buttons
    nextLevelBtn.style.display = 'none';

    // Change back button text and add override handler
    backBtn.innerText = 'Back to Subject Screen';
    backBtn.onclick = () => {
      hideCompletePopup();
      showSubcategories(mainTopicId);
    };

    // Add "Next Subject" button if there is one
    if (nextSubcat) {
      const nextSubcatBtn = document.createElement('button');
      nextSubcatBtn.id = 'complete-next-subject';
      nextSubcatBtn.className = 'flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold';
      nextSubcatBtn.innerText = `Next: ${nextSubcat.name[window.lang || 'en']}`;
      nextSubcatBtn.onclick = () => {
        hideCompletePopup();
        startSubcategoryQuiz(mainTopicId, nextSubcat.id, 1);
      };

      // Insert before back button
      backBtn.parentElement.insertBefore(nextSubcatBtn, backBtn);
      console.log('  - Added "Next Subject" button for:', nextSubcat.name[window.lang || 'en']);
    } else {
      console.log('  - No next subcategory found (this is the last one)');
    }
  } else {
    // Normal completion - restore default state
    nextLevelBtn.style.display = '';
    backBtn.innerText = 'Back';
    backBtn.onclick = null; // Remove override handler
  }

  modal.classList.remove('hidden');

  // 🎉 Create confetti effect when level is completed!
  console.log('Level completed! Triggering confetti effect...');
  setTimeout(() => {
    console.log('About to create confetti...');
    createConfetti();
  }, 200); // Small delay to let modal appear first
}

function hideCompletePopup() {
  document.getElementById('complete-modal').classList.add('hidden');
}

// —— 6.6) Daily Challenge System ——
function getDailyChallengeStatus() {
  const today = new Date().toDateString();
  const challengeData = JSON.parse(localStorage.getItem('qb_daily_challenge') || '{}');
  
  if (challengeData.date !== today) {
    // New day, reset challenge
    return { available: true, completed: false, failed: false };
  }
  
  return {
    available: !challengeData.completed && !challengeData.failed,
    completed: challengeData.completed || false,
    failed: challengeData.failed || false
  };
}

function updateDailyChallengeButton() {
  const btn = document.getElementById('daily-challenge-btn');
  const textEl = btn.querySelector('.daily-challenge-text');
  const statusEl = btn.querySelector('.daily-challenge-status');
  
  if (!btn || !textEl || !statusEl) {
    console.error('Daily challenge button elements not found:', {btn, textEl, statusEl});
    return;
  }
  
  textEl.innerText = t('dailyChallenge');
  const status = getDailyChallengeStatus();
  
  console.log('Updating daily challenge button with status:', status);
  
  // Remove all existing classes
  btn.classList.remove('available', 'not-available');
  
  // Reset inline styles to allow CSS to take over
  btn.style.background = '';
  btn.style.color = '';
  btn.style.opacity = '';
  btn.style.border = '';
  btn.style.boxShadow = '';
  btn.style.animation = '';
  
  if (status.completed || status.failed) {
    statusEl.innerText = status.completed ? t('challengeCompleted') : t('challengeFailed');
    btn.classList.add('not-available');
    btn.disabled = true;
    console.log('Applied not-available class to daily challenge button');
  } else {
    statusEl.innerText = t('challengeAvailable');
    btn.classList.add('available');
    btn.disabled = false;
    console.log('Applied available class to daily challenge button');
  }
  
  console.log('Daily challenge button classes after update:', btn.className);
}

async function startDailyChallenge() {
  const status = getDailyChallengeStatus();
  if (!status.available) {
    console.log('Daily challenge not available:', status);
    return;
  }

  // Reset challenge state
  isDailyChallenge = true;
  challengeIndex = 0;
  challengeCorrect = 0;
  challengeWrong = 0;

  // Get current date info
  const today = new Date();
  const dayOfMonth = today.getDate();
  const month = today.getMonth(); // 0-11, where 0 = January

  // Get month name
  const monthNames = ['january', 'february', 'march', 'april', 'may', 'june',
                      'july', 'august', 'september', 'october', 'november', 'december'];
  const monthName = monthNames[month];

  // Get the challenges for this month
  if (!window.monthlyChallenges || !window.monthlyChallenges[monthName]) {
    console.error(`${monthName} challenges not loaded`);
    alert('Daily challenges not available. Please refresh the page.');
    return;
  }

  // Get today's challenge using the day key (e.g., "day1", "day2", etc.)
  const dayKey = `day${dayOfMonth}`;
  const todaysChallenges = window.monthlyChallenges[monthName][dayKey];

  if (!todaysChallenges || !Array.isArray(todaysChallenges) || todaysChallenges.length !== 5) {
    console.error('No challenges found for day:', dayOfMonth, 'Key:', dayKey);
    alert('No challenges available for today.');
    return;
  }

  console.log(`Loading daily challenge for ${monthName} ${dayOfMonth}`);
  challengeQuestions = todaysChallenges;

  showScreen('daily-challenge-screen');
  renderChallengeQuestion();
}

function renderChallengeQuestion() {
  const q = challengeQuestions[challengeIndex];
  document.getElementById('challenge-question').innerText = q.question[lang];
  
  const answersDiv = document.getElementById('challenge-answers');
  answersDiv.innerHTML = '';
  
  [...q.options].sort(() => Math.random() - 0.5).forEach(optObj => {
    const btn = document.createElement('button');
    btn.classList.add('answer-btn', 'px-4', 'py-2', 'rounded', 'w-full', 'text-left', 'font-semibold');
    btn.disabled = false;
    btn.innerText = optObj[lang];
    btn.addEventListener('click', () => handleChallengeAnswer(optObj[lang], btn));
    answersDiv.appendChild(btn);
  });
  
  // Update progress
  document.getElementById('challenge-progress').innerText = `Question ${challengeIndex + 1}/5`;
  document.getElementById('challenge-wrong').innerText = `Mistakes: ${challengeWrong}/1`;
  
  startChallengeTimer();
}

function startChallengeTimer() {
  const duration = 10; // 10 seconds for daily challenge
  let timeLeft = duration;
  const display = document.getElementById('challenge-timer');
  display.innerText = timeLeft + 's';
  
  clearInterval(challengeTimerInterval);
  clearTimeout(challengeTimer);
  
  challengeTimerInterval = setInterval(() => {
    timeLeft--;
    display.innerText = timeLeft + 's';
    if (timeLeft <= 0) {
      clearInterval(challengeTimerInterval);
    }
  }, 1000);
  
  challengeTimer = setTimeout(() => {
    // Time's up - count as wrong answer
    document.getElementById('snd-wrong').play();
    challengeWrong++;
    if (challengeWrong > 1) {
      failDailyChallenge();
    } else {
      // Move to next question
      challengeIndex++;
      if (challengeIndex >= challengeQuestions.length) {
        completeDailyChallenge();
      } else {
        renderChallengeQuestion();
      }
    }
  }, duration * 1000);
}

function handleChallengeAnswer(answer, btn) {
  // Disable all buttons
  document.querySelectorAll('#challenge-answers .answer-btn').forEach(b => b.disabled = true);
  clearTimeout(challengeTimer);
  clearInterval(challengeTimerInterval);

  const q = challengeQuestions[challengeIndex];
  // Support both 'correct' and 'correctIndex' property names
  const correctIndex = q.correct !== undefined ? q.correct : q.correctIndex;
  const correctAnswer = q.options[correctIndex][lang];
  
  if (answer === correctAnswer) {
    document.getElementById('snd-correct').play();
    challengeCorrect++;
    btn.style.background = '#22c55e'; // green
    btn.style.color = '#FFFFFF';
    btn.style.border = '2px solid #22c55e';

    // Show checkmark animation
    if (typeof window.showFeedbackIcon === 'function') {
      window.showFeedbackIcon('✓', '#22c55e');
    }
  } else {
    document.getElementById('snd-wrong').play();
    challengeWrong++;
    btn.style.background = '#F23F5D'; // pinkish red
    btn.style.color = '#FFFFFF';
    btn.style.border = '2px solid #F23F5D';

    // Show cross animation
    if (typeof window.showFeedbackIcon === 'function') {
      window.showFeedbackIcon('✗', '#F23F5D');
    }

    // Show correct answer
    document.querySelectorAll('#challenge-answers button').forEach(b => {
      if (b.innerText === correctAnswer) {
        b.style.background = '#22c55e'; // green
        b.style.color = '#FFFFFF';
        b.style.border = '2px solid #22c55e';
      }
    });
  }
  
  setTimeout(() => {
    if (challengeWrong > 1) {
      failDailyChallenge();
    } else {
      challengeIndex++;
      if (challengeIndex >= challengeQuestions.length) {
        completeDailyChallenge();
      } else {
        renderChallengeQuestion();
      }
    }
  }, 1500);
}

function completeDailyChallenge() {
  const today = new Date().toDateString();
  localStorage.setItem('qb_daily_challenge', JSON.stringify({
    date: today,
    completed: true,
    failed: false
  }));

  // Award 20 stars and 15 diamonds (increased from 10)
  stars += 20;
  diamonds += 15;
  localStorage.setItem('qb_stars', stars.toString());
  localStorage.setItem('qb_diamonds', diamonds.toString());
  updateStarDisplay();
  updateDiamondDisplay();
  updateDailyChallengeButton();

  // Show completion modal
  document.getElementById('challenge-complete-modal').classList.remove('hidden');
}

function failDailyChallenge() {
  // Play failure sound
  document.getElementById('snd-wrong2').play();

  const today = new Date().toDateString();
  localStorage.setItem('qb_daily_challenge', JSON.stringify({
    date: today,
    completed: false,
    failed: true
  }));

  updateDailyChallengeButton();

  // Show failure modal
  document.getElementById('challenge-failed-modal').classList.remove('hidden');
}

function updateChallengeResetTimer() {
  const timeEl = document.getElementById('challenge-reset-time');
  if (!timeEl) return;

  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const timeDiff = tomorrow.getTime() - now.getTime();
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  timeEl.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startChallengeResetTimer() {
  // Clear any existing interval
  if (challengeResetTimerInterval) {
    clearInterval(challengeResetTimerInterval);
  }

  // Update immediately
  updateChallengeResetTimer();

  // Then update every second
  challengeResetTimerInterval = setInterval(() => {
    updateChallengeResetTimer();
  }, 1000);
}

function stopChallengeResetTimer() {
  if (challengeResetTimerInterval) {
    clearInterval(challengeResetTimerInterval);
    challengeResetTimerInterval = null;
  }
}

// —— 6.8) Shop functionality ——
function showShop() {
  updateDailyClaimButton();
  updateAdWatchButton();
  startDailyRewardsTimer();
  showScreen('shop-screen');
}

// Daily diamond claim functionality
function getDailyClaimStatus() {
  const claimData = JSON.parse(localStorage.getItem('qb_daily_claim') || '{}');

  if (!claimData.timestamp) {
    return {
      available: true,
      lastClaimed: null,
      nextAvailable: null
    };
  }

  const claimTime = new Date(claimData.timestamp);
  const now = new Date();
  const hoursSinceClaim = (now - claimTime) / (1000 * 60 * 60);

  return {
    available: hoursSinceClaim >= 24,
    lastClaimed: claimData.timestamp,
    nextAvailable: new Date(claimTime.getTime() + 24 * 60 * 60 * 1000)
  };
}

function claimDailyDiamonds() {
  const status = getDailyClaimStatus();
  if (!status.available) {
    alert('You have already claimed your daily diamonds! Come back later.');
    return;
  }

  // Award 10 diamonds (increased from 5 for better F2P balance)
  diamonds += 10;
  localStorage.setItem('qb_diamonds', diamonds.toString());
  updateDiamondDisplay();

  // Mark as claimed with timestamp
  localStorage.setItem('qb_daily_claim', JSON.stringify({
    timestamp: new Date().toISOString(),
    claimed: true
  }));

  // Update button states
  updateDailyClaimButton();
  updateShopButtonIndicator();

  alert('🎉 You claimed 10 diamonds! 💎');
}

function getTimeUntilAvailable(nextAvailableTime) {
  if (!nextAvailableTime) return '00:00:00';

  const now = new Date();
  const diff = nextAvailableTime - now;

  if (diff <= 0) return '00:00:00';

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateDailyClaimButton() {
  const claimBtn = document.getElementById('daily-claim-btn');
  if (!claimBtn) return;

  const status = getDailyClaimStatus();

  if (status.available) {
    claimBtn.disabled = false;
    claimBtn.className = 'w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded font-semibold flex flex-col items-center';
    claimBtn.innerHTML = '<span>Claim 5 💎</span><span class="text-sm mt-1">Free</span>';
  } else {
    claimBtn.disabled = true;
    claimBtn.className = 'w-full bg-green-600 text-white px-4 py-3 rounded cursor-not-allowed flex flex-col items-center font-semibold relative overflow-hidden';
    claimBtn.innerHTML = '<span>Claim 5 💎</span><span class="text-sm mt-1">Free</span><div class="absolute inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center text-lg font-bold" id="claim-timer" data-next-available="' + (status.nextAvailable ? status.nextAvailable.toISOString() : '') + '">' + getTimeUntilAvailable(status.nextAvailable) + '</div>';
  }
}

function updateShopButtonIndicator() {
  const shopBtn = document.getElementById('shop-btn');
  if (!shopBtn) return;
  
  const claimStatus = getDailyClaimStatus();
  const adStatus = getDailyAdWatchStatus();
  
  // Remove existing indicator
  const existingIndicator = shopBtn.querySelector('.daily-indicator');
  if (existingIndicator) existingIndicator.remove();
  
  // Show indicator if EITHER daily claim is available OR ads can still be watched
  if (claimStatus.available || adStatus.canWatch) {
    // Add indicator for available rewards
    const indicator = document.createElement('span');
    indicator.className = 'daily-indicator absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center justify-center free-bounce';
    indicator.innerHTML = 'FREE';
    shopBtn.appendChild(indicator);
    shopBtn.style.position = 'relative';
  }
}

// Ad watching functionality
function getDailyAdWatchStatus() {
  const adData = JSON.parse(localStorage.getItem('qb_daily_ads') || '{}');

  if (!adData.timestamp) {
    return {
      adsWatched: 0,
      canWatch: true,
      nextReward: 15,
      nextAvailable: null
    };
  }

  const lastAdTime = new Date(adData.timestamp);
  const now = new Date();
  const hoursSinceLastAd = (now - lastAdTime) / (1000 * 60 * 60);

  const adsWatched = adData.adsWatched || 0;
  const rewards = [15, 30, 60]; // Increased from [10, 25, 50] for better F2P balance

  // Reset after 24 hours
  if (hoursSinceLastAd >= 24) {
    return {
      adsWatched: 0,
      canWatch: true,
      nextReward: 15,
      nextAvailable: null
    };
  }

  return {
    adsWatched: adsWatched,
    canWatch: adsWatched < 3,
    nextReward: adsWatched < 3 ? rewards[adsWatched] : 0,
    nextAvailable: adsWatched >= 3 ? new Date(lastAdTime.getTime() + 24 * 60 * 60 * 1000) : null
  };
}

function watchAdForDiamonds() {
  const status = getDailyAdWatchStatus();
  
  if (!status.canWatch) {
    alert('You have already watched 3 ads today! Come back tomorrow for more rewards.');
    return;
  }
  
  // Simulate watching an ad
  if (confirm(`Watch a 30-second ad to earn ${status.nextReward} diamonds?`)) {
    // Award diamonds
    diamonds += status.nextReward;
    localStorage.setItem('qb_diamonds', diamonds.toString());
    updateDiamondDisplay();

    // Update ad watch count with timestamp
    const newAdData = {
      timestamp: new Date().toISOString(),
      adsWatched: status.adsWatched + 1
    };
    localStorage.setItem('qb_daily_ads', JSON.stringify(newAdData));
    
    // Update button and shop indicator, then show success message
    updateAdWatchButton();
    updateShopButtonIndicator();
    alert(`🎉 You earned ${status.nextReward} diamonds! 💎`);
  }
}

function updateAdWatchButton() {
  const watchBtn = document.getElementById('watch-ad-btn');
  const statusText = document.getElementById('ad-watch-status');

  if (!watchBtn) return;

  const status = getDailyAdWatchStatus();

  if (status.canWatch) {
    watchBtn.disabled = false;
    watchBtn.className = 'w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded font-semibold flex flex-col items-center';
    watchBtn.innerHTML = `<span>Get ${status.nextReward} 💎</span><span class="text-2xl mt-1">📺</span>`;
    if (statusText) statusText.innerText = `${status.adsWatched}/3 ads watched today`;
  } else {
    watchBtn.disabled = true;
    watchBtn.className = 'w-full bg-orange-600 text-white px-4 py-3 rounded cursor-not-allowed flex flex-col items-center font-semibold relative overflow-hidden';
    watchBtn.innerHTML = '<span>Get 10 💎</span><span class="text-2xl mt-1">📺</span><div class="absolute inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center text-lg font-bold" id="watch-timer" data-next-available="' + (status.nextAvailable ? status.nextAvailable.toISOString() : '') + '">' + getTimeUntilAvailable(status.nextAvailable) + '</div>';
    if (statusText) statusText.innerText = '3/3 ads watched today';
  }
}

function updateTimerDisplays() {
  const claimTimer = document.getElementById('claim-timer');
  const watchTimer = document.getElementById('watch-timer');

  if (claimTimer) {
    const nextAvailable = claimTimer.getAttribute('data-next-available');
    if (nextAvailable) {
      const timeString = getTimeUntilAvailable(new Date(nextAvailable));
      claimTimer.textContent = timeString;

      // If timer reached 00:00:00, refresh button state
      if (timeString === '00:00:00') {
        updateDailyClaimButton();
      }
    }
  }

  if (watchTimer) {
    const nextAvailable = watchTimer.getAttribute('data-next-available');
    if (nextAvailable) {
      const timeString = getTimeUntilAvailable(new Date(nextAvailable));
      watchTimer.textContent = timeString;

      // If timer reached 00:00:00, refresh button state
      if (timeString === '00:00:00') {
        updateAdWatchButton();
      }
    }
  }
}

// Start timer interval for daily rewards
let dailyRewardsTimerInterval = null;

function startDailyRewardsTimer() {
  if (dailyRewardsTimerInterval) {
    clearInterval(dailyRewardsTimerInterval);
  }

  dailyRewardsTimerInterval = setInterval(() => {
    updateTimerDisplays();
  }, 1000);
}

function stopDailyRewardsTimer() {
  if (dailyRewardsTimerInterval) {
    clearInterval(dailyRewardsTimerInterval);
    dailyRewardsTimerInterval = null;
  }
}

function buyPowerUp(type, amount, cost) {
  if (diamonds < cost) {
    alert(`Not enough diamonds! You need ${cost} diamonds but only have ${diamonds}.`);
    return;
  }
  
  // Deduct diamonds
  diamonds -= cost;
  localStorage.setItem('qb_diamonds', diamonds.toString());
  
  // Add power-ups
  if (type === 'fifty-fifty') {
    fiftyFiftyCount += amount;
    localStorage.setItem('qb_fifty_fifty_count', fiftyFiftyCount.toString());
  } else if (type === 'skip') {
    skipCount += amount;
    localStorage.setItem('qb_skip_count', skipCount.toString());
  } else if (type === 'time-bonus') {
    timeBonusCount += amount;
    localStorage.setItem('qb_time_bonus_count', timeBonusCount.toString());
  }
  
  // Update displays
  updateDiamondDisplay();
  updatePowerUpCounts();
  
  alert(`Successfully purchased ${amount}x ${type === 'fifty-fifty' ? '50/50' : 'Skip'} for ${cost} diamonds!`);
}

// Buy power-up bundles with discount
function buyPowerUpBundle(bundleType, amount, cost) {
  if (diamonds < cost) {
    alert(`Not enough diamonds! You need ${cost} diamonds but only have ${diamonds}.`);
    return;
  }

  // Deduct diamonds
  diamonds -= cost;
  localStorage.setItem('qb_diamonds', diamonds.toString());

  // Add all three power-ups
  fiftyFiftyCount += amount;
  localStorage.setItem('qb_fifty_fifty_count', fiftyFiftyCount.toString());

  skipCount += amount;
  localStorage.setItem('qb_skip_count', skipCount.toString());

  timeBonusCount += amount;
  localStorage.setItem('qb_time_bonus_count', timeBonusCount.toString());

  // Update displays
  updateDiamondDisplay();
  updatePowerUpCounts();

  // Show success message with bundle name
  let bundleName = bundleType.charAt(0).toUpperCase() + bundleType.slice(1);
  alert(`🎁 Successfully purchased ${bundleName} Bundle!\n\n✅ ${amount}x 50/50\n✅ ${amount}x Skip\n✅ ${amount}x Time Bonus\n\nTotal: ${cost} diamonds`);
}

// —— 6.9) Subject completion rewards ——
function checkSubjectCompletion(groupIdx, levelIdx) {
  // Check if this is the last level (level 10, index 9)
  if (levelIdx === 9) {
    const subjectKey = getSubjectKeyByIndex(groupIdx);
    const completedKey = `qb_subject_completed_${subjectKey}`;
    
    // Check if subject was not completed before
    if (!localStorage.getItem(completedKey)) {
      // Mark as completed
      localStorage.setItem(completedKey, 'true');
      
      // Award diamonds
      diamonds += 10;
      localStorage.setItem('qb_diamonds', diamonds.toString());
      updateDiamondDisplay();
      
      // Show notification
      setTimeout(() => {
        alert(`🎉 Subject completed! You earned 10 diamonds! 💎`);
      }, 2000);
    }
  }
}

function getSubjectKeyByIndex(groupIdx) {
  const subjectOrder = ['animals', 'ocean-mysteries', 'arts-culture', 'dinosaurs', 'history', 'science', 'space-astronomy', 'sports', 'technology', 'world-geography'];
  return subjectOrder[groupIdx] || 'unknown';
}

// —— 6.10) Explanation functionality ——
function showExplanation(question, isCorrect) {
  console.log('showExplanation called - showExplanations:', showExplanations, 'window.showExplanations:', window.showExplanations, 'hasExplanation:', !!question.explanation);
  console.log('Question explanation object:', question.explanation);
  // Use window.showExplanations which is properly synced with settings
  if (!window.showExplanations || !question.explanation) {
    console.log('Explanation not shown - explanations disabled or no explanation available');
    return;
  }
  console.log('Proceeding to show explanation...');
  
  // Stop the timer when showing explanation
  clearTimeout(timer);
  clearInterval(timerInterval);
  timerState.isRunning = false;
  timerState.isPaused = true;
  console.log('Timer stopped for explanation display');
  
  // Create explanation container if it doesn't exist
  let explanationDiv = document.getElementById('explanation-container');
  if (!explanationDiv) {
    explanationDiv = document.createElement('div');
    explanationDiv.id = 'explanation-container';
    explanationDiv.className = 'mt-4 p-4 rounded-lg';
    explanationDiv.style.background = 'transparent';

    // Insert after the answers div
    const answersDiv = document.getElementById('answers');
    answersDiv.parentNode.insertBefore(explanationDiv, answersDiv.nextSibling);
  } else {
    // Ensure background stays transparent even if div already exists
    explanationDiv.style.background = 'transparent';
  }
  
  // Set the explanation text
  const lang = window.lang || 'en'; // Define lang in this scope
  const explanationText = question.explanation[lang] || question.explanation['en'] || 'No explanation available.';
  console.log('Explanation text to display:', explanationText);
  
  explanationDiv.innerHTML = `
    <div class="flex items-start space-x-2">
      <div class="text-2xl">${isCorrect ? '✅' : '💡'}</div>
      <div class="flex-1">
        <h4 class="font-bold mb-1">${isCorrect ? 'Correct!' : 'Learn More:'}</h4>
        <p class="mb-3">${explanationText}</p>
        <button id="continue-question-btn" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
          Continue ➤
        </button>
      </div>
    </div>
  `;
  
  console.log('Explanation HTML created and inserted');
  
  // Add event listener to continue button with better protection
  const continueBtn = document.getElementById('continue-question-btn');
  console.log('Continue button found:', !!continueBtn);
  if (continueBtn) {
    // Ensure button is enabled when explanation is shown
    continueBtn.disabled = false;
    
    // Remove any existing event listeners by cloning the node
    const newContinueBtn = continueBtn.cloneNode(true);
    continueBtn.parentNode.replaceChild(newContinueBtn, continueBtn);
    
    // Add single event listener with protection
    newContinueBtn.addEventListener('click', (event) => {
      // Prevent event propagation immediately
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      
      console.log('Continue button clicked - processing state:', window.continueButtonProcessing);
      
      // Prevent multiple rapid clicks using global state
      if (window.continueButtonProcessing) {
        console.log('Continue button already processing globally, ignoring click');
        return false;
      }
      
      
      window.continueButtonProcessing = true;
      newContinueBtn.disabled = true;
      
      console.log('Setting processing state to true and disabling button');
      
      // Check if we need to show game over popup after explanation
      if (window.gameOverAfterExplanation) {
        console.log('🚨 CONTINUE BUTTON: Game over after explanation - showing game over popup now');
        window.gameOverAfterExplanation = false; // Reset flag
        hideExplanation(); // Hide explanation first
        setTimeout(() => {
          console.log('🚨 SHOWING ERROR POPUP NOW');
          window.showErrorPopup();
          window.continueButtonProcessing = false;
          console.log('Reset processing state after game over');
        }, 200);
      } else if (typeof window.continueToNextQuestion === 'function') {
        console.log('Calling continueToNextQuestion function');
        hideExplanation(); // Hide explanation first
        setTimeout(() => {
          window.continueToNextQuestion();
          window.continueButtonProcessing = false;
          console.log('Reset processing state after continue');
        }, 200);
      } else {
        console.error('continueToNextQuestion function not available');
        window.continueButtonProcessing = false;
        newContinueBtn.disabled = false;
      }
      
      return false;
    }, { once: false }); // Don't use once: true because we might need multiple clicks in different contexts
    
    console.log('Continue button event listener attached with enhanced protection');
  } else {
    console.error('Continue button not found after creating explanation');
  }
  
  explanationDiv.style.display = 'block';
}

function hideExplanation() {
  const explanationDiv = document.getElementById('explanation-container');
  if (explanationDiv) {
    explanationDiv.style.display = 'none';
  }
}

function buyRemoveAds() {
  // This would normally integrate with a payment system
  // For now, just show a confirmation
  if (confirm('This would open the payment system to purchase ad removal for $9.99. Continue?')) {
    alert('Payment system would be integrated here. For demo purposes, ads are now "removed".');
    localStorage.setItem('qb_ads_removed', 'true');
  }
}

// Power-up purchase modal functionality
function showPowerUpPurchaseModal(type) {
  // Pause timer if in quiz
  if (currentScreen === 'quiz-screen') {
    if (timerState.isRunning) {
      clearTimeout(timer);
      clearInterval(timerInterval);
      timerState.isPaused = true;
      timerState.isRunning = false;
    }
  }
  
  const modal = document.getElementById('powerup-purchase-modal');
  const titleEl = document.getElementById('powerup-modal-title');
  const textEl = document.getElementById('powerup-modal-text');
  const buyBtn = document.getElementById('powerup-modal-buy');
  const adBtn = document.getElementById('powerup-modal-ad');
  const backBtn = document.getElementById('powerup-modal-back');
  
  const powerUpName = type === 'fifty-fifty' ? '50/50' : (type === 'skip' ? 'Skip' : 'Time Bonus');
  const cost = type === 'fifty-fifty' ? 10 : (type === 'skip' ? 8 : 12);
  
  if (titleEl) titleEl.innerText = `${powerUpName} Power-Up`;
  if (textEl) textEl.innerText = `You're out of ${powerUpName} power-ups! Get more to continue.`;
  if (buyBtn) {
    buyBtn.innerHTML = `💎 ${cost}`;
    buyBtn.onclick = () => purchasePowerUpFromModal(type, cost);
  }
  if (adBtn) {
    adBtn.onclick = () => watchAdForPowerUp(type);
  }
  if (backBtn) {
    backBtn.onclick = () => closePowerUpModal();
  }
  
  if (modal) modal.classList.remove('hidden');
}

function purchasePowerUpFromModal(type, cost) {
  if (diamonds < cost) {
    alert(`Not enough diamonds! You need ${cost} diamonds but only have ${diamonds}.`);
    return;
  }
  
  // Deduct diamonds
  diamonds -= cost;
  localStorage.setItem('qb_diamonds', diamonds.toString());
  
  // Add 1 power-up
  if (type === 'fifty-fifty') {
    fiftyFiftyCount += 1;
    localStorage.setItem('qb_fifty_fifty_count', fiftyFiftyCount.toString());
  } else if (type === 'skip') {
    skipCount += 1;
    localStorage.setItem('qb_skip_count', skipCount.toString());
  } else if (type === 'time-bonus') {
    timeBonusCount += 1;
    localStorage.setItem('qb_time_bonus_count', timeBonusCount.toString());
  }
  
  // Update displays
  updateDiamondDisplay();
  updatePowerUpCounts();
  
  // Close modal and use the power-up
  closePowerUpModal();
  
  if (type === 'fifty-fifty') {
    useFiftyFifty();
  } else if (type === 'skip') {
    useSkip();
  } else if (type === 'time-bonus') {
    useTimeBonus();
  }
}

function watchAdForPowerUp(type) {
  // Simulate watching an ad
  if (confirm('Watch a 30-second ad to get 1 free power-up?')) {
    // Add 1 power-up
    if (type === 'fifty-fifty') {
      fiftyFiftyCount += 1;
      localStorage.setItem('qb_fifty_fifty_count', fiftyFiftyCount.toString());
    } else if (type === 'skip') {
      skipCount += 1;
      localStorage.setItem('qb_skip_count', skipCount.toString());
    } else if (type === 'time-bonus') {
      timeBonusCount += 1;
      localStorage.setItem('qb_time_bonus_count', timeBonusCount.toString());
    }
    
    // Update displays
    updatePowerUpCounts();
    
    // Close modal and use the power-up
    closePowerUpModal();
    
    if (type === 'fifty-fifty') {
      useFiftyFifty();
    } else if (type === 'skip') {
      useSkip();
    } else if (type === 'time-bonus') {
      useTimeBonus();
    }
  }
}

function closePowerUpModal() {
  const modal = document.getElementById('powerup-purchase-modal');
  if (modal) modal.classList.add('hidden');
  
  // Resume timer if in quiz
  if (currentScreen === 'quiz-screen') {
    if (timerState.isPaused) {
      resumeTimer();
    }
  }
}

// Continue game functionality
function continueWithAd(source) {
  if (confirm('Watch a 30-second ad to continue playing?')) {
    // Reset mistakes or give extra time based on source
    if (source === 'error') {
      wrongCount = 0; // Reset mistakes
      hideErrorPopup();
    } else if (source === 'timeout') {
      hideTimeoutPopup();
      // Give extra time by restarting timer
      startTimer();
    }
    
    // Update display and continue
    document.getElementById('wrong').innerText = `${t('mistakes')}: ${wrongCount}/2`;
    
    // Continue current question
    enableAnswerButtons();
  }
}

function continueWithGems(source) {
  const cost = 5;
  if (diamonds < cost) {
    alert(`Not enough diamonds! You need ${cost} diamonds but only have ${diamonds}.`);
    return;
  }
  
  if (confirm(`Continue playing for ${cost} diamonds?`)) {
    // Deduct diamonds
    diamonds -= cost;
    localStorage.setItem('qb_diamonds', diamonds.toString());
    updateDiamondDisplay();
    
    // Reset mistakes or give extra time based on source
    if (source === 'error') {
      wrongCount = 0; // Reset mistakes
      hideErrorPopup();
    } else if (source === 'timeout') {
      hideTimeoutPopup();
      // Give extra time by restarting timer
      startTimer();
    }
    
    // Update display and continue
    document.getElementById('wrong').innerText = `${t('mistakes')}: ${wrongCount}/2`;
    
    // Continue current question
    enableAnswerButtons();
  }
}

function enableAnswerButtons() {
  document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.disabled = false;
    btn.style.background = '';
    btn.style.color = '';
    btn.style.border = '';
  });
}

// —— 6.7) Roadmap screen with unlock system ——
function showRoadmap() {
  console.log('showRoadmap called');
  console.log('window.groups:', window.groups);
  console.log('groups length:', window.groups ? window.groups.length : 'undefined');
  
  if (!window.groups || window.groups.length === 0) {
    alert('No subjects loaded yet. Please wait for subjects to load and try again.');
    return;
  }
  
  const path = document.getElementById('roadmap-path');
  path.innerHTML = '';
  
  const userStars = parseInt(localStorage.getItem('qb_stars') || '0');
  const unlockedSubjects = JSON.parse(localStorage.getItem('qb_unlocked') || '[0]'); // First subject always unlocked
  
  // Reverse the order so first subject (Animals) appears at the bottom
  const reversedGroups = [...window.groups].reverse();
  const reversedIndexes = [...window.groups.keys()].reverse();
  
  reversedGroups.forEach((group, reverseIndex) => {
    const i = reversedIndexes[reverseIndex]; // Get original index
    const isUnlocked = unlockedSubjects.includes(i);
    const cost = i === 0 ? 0 : 40; // First subject free, others cost 40 stars
    
    const container = document.createElement('div');
    // Create a zigzag pattern - even indexes go left, odd indexes go right
    const isEven = reverseIndex % 2 === 0;
    const zigzagClass = isEven ? 'zigzag-left' : 'zigzag-right';
    container.className = `roadmap-subject-container flex flex-col items-center relative ${zigzagClass}`;
    
    const btn = document.createElement('button');
    btn.className = `roadmap-subject-btn w-36 h-36 rounded-full font-bold text-xs transition-all ${
      isUnlocked 
        ? 'unlocked shadow-lg' 
        : `locked cursor-not-allowed opacity-60 ${userStars >= cost ? 'affordable' : ''}`
    }`;
    
    if (isUnlocked) {
      // Show icon and subject name for unlocked subjects
      btn.innerHTML = `<div class="text-3xl mb-1">${group.icon}</div><div class="text-xs leading-tight">${group.name[lang]}</div>`;
      
      // Add both click handlers: popup first, then levels
      btn.addEventListener('click', (e) => {
        console.log('UNLOCKED SUBJECT BUTTON CLICKED:', group.name[lang]);
        e.preventDefault();
        e.stopPropagation();
        
        // First show popup with subject info
        const subjectInfo = {
          icon: group.icon,
          name: group.name[lang],
          description: `This subject contains ${group.levels ? group.levels.length : '?'} levels to test your knowledge.`
        };
        console.log('Calling openSubjectPopup with:', subjectInfo);
        openSubjectPopup(subjectInfo);
        
        // Also allow opening levels (you can comment this out if you only want popup)
        setTimeout(() => openLevels(i), 500); // Small delay after popup
      });
    } else {
      // Show lock icon, cost, and full subject name for locked subjects
      btn.innerHTML = `<div class="text-xl mb-1">🔒</div><div class="text-xs leading-tight mb-1 px-1">${group.name[lang]}</div><div class="text-xs">${cost} 💰</div>`;
      
      // Add popup for locked subjects
      btn.addEventListener('click', (e) => {
        console.log('LOCKED SUBJECT BUTTON CLICKED:', group.name[lang]);
        e.preventDefault();
        e.stopPropagation();
        
        if (userStars >= cost) {
          // Show popup first, then unlock option
          const subjectInfo = {
            icon: '🔒',
            name: group.name[lang],
            description: `This subject is locked. It costs ${cost} stars to unlock and contains multiple levels to challenge your knowledge.`
          };
          console.log('Calling openSubjectPopup with:', subjectInfo);
          openSubjectPopup(subjectInfo);
          
          // Then ask to unlock
          setTimeout(() => unlockSubject(i, cost), 800);
        } else {
          // Just show info popup for insufficient funds
          const subjectInfo = {
            icon: '🔒',
            name: group.name[lang],
            description: `This subject is locked. You need ${cost} stars to unlock it, but you only have ${userStars} stars. Keep playing to earn more!`
          };
          console.log('Calling openSubjectPopup with:', subjectInfo);
          openSubjectPopup(subjectInfo);
        }
      });
      
      if (userStars >= cost) {
        btn.classList.remove('cursor-not-allowed', 'opacity-60');
        btn.classList.add('cursor-pointer');
      }
    }
    
    container.appendChild(btn);
    
    path.appendChild(container);
  });
  
  showScreen('roadmap-screen');
  
  // Scroll to bottom to show the first subject (Animals) immediately
  setTimeout(() => {
    const roadmapScreen = document.getElementById('roadmap-screen');
    if (roadmapScreen) {
      // Scroll to the very bottom with extra margin to ensure full visibility
      roadmapScreen.scrollTop = roadmapScreen.scrollHeight + 100;
    }
  }, 150);
}

function unlockSubject(subjectIndex, cost) {
  const userStars = parseInt(localStorage.getItem('qb_stars') || '0');
  if (userStars >= cost) {
    const newStarTotal = userStars - cost;
    localStorage.setItem('qb_stars', newStarTotal.toString());
    
    const unlocked = JSON.parse(localStorage.getItem('qb_unlocked') || '[0]');
    unlocked.push(subjectIndex);
    localStorage.setItem('qb_unlocked', JSON.stringify(unlocked));
    
    stars = newStarTotal;
    updateStarDisplay();
    showRoadmap(); // Refresh the roadmap
    
    alert(`Subject unlocked! ${cost} stars spent. ${newStarTotal} stars remaining.`);
  } else {
    alert(`Not enough stars! You need ${cost} stars but only have ${userStars}.`);
  }
}

// —— 7) Function to attach all event listeners ——
function attachEventListeners() {
  console.log('Attaching event listeners...');
  
  // Main navigation buttons
  const levelsBtn = document.getElementById('levels-btn');
  const challengeModesBtn = document.getElementById('challenge-modes-btn');
  const leaderboardBtn = document.getElementById('leaderboard-btn');
  const settingsBtn = document.getElementById('settings-btn');
  const shopBtn = document.getElementById('shop-btn');
  
  console.log('Found button elements:', {levelsBtn, challengeModesBtn, leaderboardBtn, settingsBtn, shopBtn});
  if (levelsBtn) {
    levelsBtn.addEventListener('click', (e) => {
      console.log('Levels button clicked');
      // Dispatch event for tutorial
      window.dispatchEvent(new CustomEvent('play-clicked'));
      showSubjects();
    });
    console.log('Levels button event listener added');
  } else {
    console.log('Levels button not found');
  }
  if (challengeModesBtn) {
    challengeModesBtn.addEventListener('click', (e) => {
      console.log('Challenge Modes button clicked');
      showScreen('challenge-modes-screen');
    });
    console.log('Challenge Modes button event listener added');
  } else {
    console.log('Challenge Modes button not found');
  }
  
  // Tutorial restart button
  const restartTutorialBtn = document.getElementById('restart-tutorial-btn');
  if (restartTutorialBtn) {
    restartTutorialBtn.addEventListener('click', () => {
      console.log('Restart tutorial button clicked');
      
      // Function to attempt tutorial restart with retries
      let retryCount = 0;
      const maxRetries = 5;
      const retryDelay = 300;
      
      function attemptTutorialRestart() {
        console.log(`Tutorial restart attempt ${retryCount + 1}/${maxRetries}`);
        console.log('Tutorial object available:', !!window.Tutorial);
        console.log('Tutorial reset function available:', !!(window.Tutorial && window.Tutorial.reset));
        
        if (window.Tutorial && typeof window.Tutorial.reset === 'function') {
          console.log('Tutorial system loaded, restarting...');
          try {
            window.Tutorial.reset();
            console.log('Tutorial successfully restarted');
            return true;
          } catch (error) {
            console.error('Error restarting tutorial:', error);
          }
        }
        
        // If not available yet and we have retries left
        if (retryCount < maxRetries) {
          retryCount++;
          console.log(`Tutorial not ready, retrying in ${retryDelay}ms...`);
          setTimeout(attemptTutorialRestart, retryDelay);
        } else {
          // Final fallback - manual initialization
          console.log('Max retries reached, attempting manual initialization...');
          localStorage.removeItem('qb_tutorial_completed');
          
          // Try to dynamically load the tutorial if needed
          if (!window.Tutorial) {
            console.log('Tutorial object not found, checking script loading...');
            const tutorialScript = document.querySelector('script[src*="tutorial"]');
            if (tutorialScript) {
              // Force reload the tutorial script
              const newScript = document.createElement('script');
              newScript.src = 'JS/tutorial.js?t=' + Date.now();
              newScript.onload = () => {
                console.log('Tutorial script reloaded');
                setTimeout(() => {
                  if (window.Tutorial && window.Tutorial.reset) {
                    console.log('Calling Tutorial.reset() after reload');
                    window.Tutorial.reset();
                  } else if (window.Tutorial && window.Tutorial.forceStart) {
                    console.log('Calling Tutorial.forceStart() after reload');
                    window.Tutorial.forceStart();
                  } else {
                    console.error('Tutorial object still not available after reload');
                    alert('Tutorial system could not be loaded. Please refresh the page and try again.');
                  }
                }, 200);
              };
              newScript.onerror = () => {
                console.error('Failed to load tutorial script');
                alert('Failed to load tutorial. Please check console for errors.');
              };
              document.body.appendChild(newScript);
            } else {
              alert('Tutorial system not found. Please refresh the page.');
            }
          } else {
            // Tutorial object exists but reset function might not be ready
            if (window.Tutorial.forceStart) {
              window.Tutorial.forceStart();
            } else if (window.Tutorial.init) {
              window.Tutorial.init();
            } else {
              alert('Tutorial system is not responding. Please refresh the page.');
            }
          }
        }
        return false;
      }
      
      // Start the restart attempt
      attemptTutorialRestart();
    });
    console.log('Restart tutorial button event listener added with retry mechanism');
  } else {
    console.log('Restart tutorial button not found');
  }
  if (leaderboardBtn) {
    leaderboardBtn.addEventListener('click', (e) => {
      console.log('Leaderboard button clicked');
      alert('Leaderboard coming soon!');
    });
    console.log('Leaderboard button event listener added');
  } else {
    console.log('Leaderboard button not found');
  }
  
  const dailyChallengeBtn = document.getElementById('daily-challenge-btn');
  if (dailyChallengeBtn) {
    dailyChallengeBtn.addEventListener('click', (e) => {
      console.log('Daily challenge button clicked');
      startDailyChallenge();
    });
    console.log('Daily challenge button event listener added');
  } else {
    console.log('Daily challenge button not found');
  }
  
  if (shopBtn) {
    shopBtn.addEventListener('click', (e) => {
      console.log('Shop button clicked');
      showShop();
    });
    console.log('Shop button event listener added');
  } else {
    console.log('Shop button not found');
  }
  
  if (settingsBtn) settingsBtn.addEventListener('click', () => {
    // If already in settings, go back to home
    if (currentScreen === 'settings-screen') {
      showScreen('home-screen');
      return;
    }

    if (currentScreen === 'quiz-screen') {
      clearTimeout(timer);
      clearInterval(timerInterval);
    } else if (currentScreen === 'daily-challenge-screen') {
      clearTimeout(challengeTimer);
      clearInterval(challengeTimerInterval);
    }
    showScreen('settings-screen');
  });

  // Top bar back button
  const topBackBtn = document.getElementById('top-back-btn');
  if (topBackBtn) topBackBtn.addEventListener('click', () => {
    switch(currentScreen) {
      case 'roadmap-screen':
        showScreen('home-screen');
        break;
      case 'subjects-screen':
        showScreen('home-screen');
        break;
      case 'levels-screen':
        // Check if we're in the new subcategory view or old level view
        if (window.currentMainTopic) {
          // New system: Go back to main topics
          window.currentMainTopic = null;
          showSubjects();
        } else {
          // Old system: Go back to subjects
          showSubjects();
        }
        break;
      case 'quiz-screen':
        // Check if we're in the new subcategory system
        if (window.currentQuizContext) {
          const { mainTopicId } = window.currentQuizContext;
          showSubcategories(mainTopicId);
        } else {
          // Old system: Go back to levels
          showScreen('levels-screen');
        }
        break;
      case 'daily-challenge-screen':
        // If challenge is in progress, fail it
        if (isDailyChallenge) {
          clearTimeout(challengeTimer);
          clearInterval(challengeTimerInterval);
          failDailyChallenge();
        }
        showScreen('home-screen');
        break;
      case 'challenge-modes-screen':
        showScreen('home-screen');
        break;
      case 'true-false-screen':
        showScreen('challenge-modes-screen');
        break;
      case 'lightning-round-screen':
        showScreen('challenge-modes-screen');
        break;
      case 'survivor-screen':
        showScreen('challenge-modes-screen');
        break;
      case 'extreme-survivor-screen':
        showScreen('challenge-modes-screen');
        break;
      case 'settings-screen':
        showScreen(lastScreen);
        break;
      case 'shop-screen':
        showScreen('home-screen');
        break;
      default:
        showScreen('home-screen');
    }
  });

  // Modal buttons
  const timeoutBack = document.getElementById('timeout-back');
  const timeoutContinueAd = document.getElementById('timeout-modal-continue-ad');
  const timeoutContinueGems = document.getElementById('timeout-modal-continue-gems');
  const errorModalBack = document.getElementById('error-modal-back');
  const errorContinueAd = document.getElementById('error-modal-continue-ad');
  const errorContinueGems = document.getElementById('error-modal-continue-gems');
  const completeNext = document.getElementById('complete-next-level');
  const completeBack = document.getElementById('complete-back');
  
  if (timeoutBack) timeoutBack.addEventListener('click', () => {
    hideTimeoutPopup();

    // Check if this is the new subcategory system
    if (window.currentQuizContext) {
      const { mainTopicId, subcategoryId, level } = window.currentQuizContext;
      // Set 15-minute cooldown for this level
      setSubcategoryFailureCooldown(mainTopicId, subcategoryId, level);
      showSubcategories(mainTopicId);
    } else {
      // Old system: Set 15-minute cooldown for this level
      setLevelFailureCooldown(selectedGroupIndex, selectedLevelIndex);
      showScreen('levels-screen');
      // Refresh level buttons to show cooldown immediately
      openLevels(selectedGroupIndex);
    }
  });
  
  if (timeoutContinueAd) timeoutContinueAd.addEventListener('click', () => {
    continueWithAd('timeout');
  });
  
  if (timeoutContinueGems) timeoutContinueGems.addEventListener('click', () => {
    continueWithGems('timeout');
  });
  
  if (errorModalBack) errorModalBack.addEventListener('click', () => {
    hideErrorPopup();

    // Check if this is the new subcategory system
    if (window.currentQuizContext) {
      const { mainTopicId, subcategoryId, level } = window.currentQuizContext;
      // Set 15-minute cooldown for this level
      setSubcategoryFailureCooldown(mainTopicId, subcategoryId, level);
      showSubcategories(mainTopicId);
    } else {
      // Old system: Set 15-minute cooldown for this level
      setLevelFailureCooldown(selectedGroupIndex, selectedLevelIndex);
      showScreen('levels-screen');
      // Refresh level buttons to show cooldown immediately
      openLevels(selectedGroupIndex);
    }
  });
  
  if (errorContinueAd) errorContinueAd.addEventListener('click', () => {
    continueWithAd('error');
  });
  
  if (errorContinueGems) errorContinueGems.addEventListener('click', () => {
    continueWithGems('error');
  });
  
  if (completeNext) completeNext.addEventListener('click', () => {
    hideCompletePopup();

    // Check if this is the new subcategory system
    if (window.currentQuizContext) {
      const { mainTopicId, subcategoryId, level } = window.currentQuizContext;
      const currentLevel = window.getSubcategoryProgress(mainTopicId, subcategoryId);

      // Try to start next level if available
      if (currentLevel <= 10) {
        startSubcategoryQuiz(mainTopicId, subcategoryId, currentLevel);
      } else {
        // All levels completed, return to subcategories
        showSubcategories(mainTopicId);
      }
    } else {
      // Old system: Try to go to next level in same subject
      const currentSubject = window.groups[selectedGroupIndex];
      if (selectedLevelIndex + 1 < currentSubject.levels.length) {
        startLevel(selectedGroupIndex, selectedLevelIndex + 1);
      } else {
        showScreen('levels-screen');
      }
    }
  });

  if (completeBack) completeBack.addEventListener('click', () => {
    hideCompletePopup();

    // Check if this is the new subcategory system
    if (window.currentQuizContext) {
      const { mainTopicId } = window.currentQuizContext;
      showSubcategories(mainTopicId);
    } else {
      // Old system: Refresh the levels display to show completed status
      if (typeof selectedGroupIndex !== 'undefined' && window.groups && window.groups[selectedGroupIndex]) {
        openLevels(selectedGroupIndex);
      } else {
        showScreen('levels-screen');
      }
    }
  });

  // Game mode info modal buttons
  const gamemodeInfoClose = document.getElementById('gamemode-info-close');
  const gamemodeInfoOk = document.getElementById('gamemode-info-ok');

  if (gamemodeInfoClose) {
    gamemodeInfoClose.addEventListener('click', hideGameModeInfo);
  }
  if (gamemodeInfoOk) {
    gamemodeInfoOk.addEventListener('click', hideGameModeInfo);
  }

  // Daily challenge modal buttons
  const challengeCompleteBack = document.getElementById('challenge-complete-back');
  const challengeFailedBack = document.getElementById('challenge-failed-back');

  if (challengeCompleteBack) challengeCompleteBack.addEventListener('click', () => {
    document.getElementById('challenge-complete-modal').classList.add('hidden');
    showScreen('home-screen');
  });
  
  if (challengeFailedBack) challengeFailedBack.addEventListener('click', () => {
    document.getElementById('challenge-failed-modal').classList.add('hidden');
    showScreen('home-screen');
  });

  // Quiz controls
  const skipBtn = document.getElementById('skip-btn');
  const fiftyFiftyBtn = document.getElementById('fifty-fifty-btn');
  
  if (skipBtn) skipBtn.addEventListener('click', () => {
    useSkip();
  });
  
  if (fiftyFiftyBtn) {
    console.log('Adding 50/50 event listener to button:', fiftyFiftyBtn);
    console.log('Button disabled state:', fiftyFiftyBtn.disabled);
    console.log('Button onclick attribute:', fiftyFiftyBtn.getAttribute('onclick'));
    fiftyFiftyBtn.addEventListener('click', (event) => {
      console.log('50/50 button clicked! Event:', event);
      console.log('Button disabled at click time:', fiftyFiftyBtn.disabled);
      console.log('fiftyFiftyUsed:', fiftyFiftyUsed, 'fiftyFiftyCount:', fiftyFiftyCount);
      if (!fiftyFiftyBtn.disabled) {
        useFiftyFifty();
      } else {
        console.log('Button click ignored - button is disabled');
      }
    });
  } else {
    console.log('50/50 button not found in DOM when attaching event listeners');
  }

  // Currency display click handlers
  const starDisplay = document.getElementById('star-display');
  const diamondDisplay = document.getElementById('diamond-display');
  
  if (starDisplay) {
    starDisplay.addEventListener('click', () => {
      console.log('Star display clicked - navigating to shop');
      showShop();
    });
  }
  
  if (diamondDisplay) {
    diamondDisplay.addEventListener('click', () => {
      console.log('Diamond display clicked - navigating to shop');
      showShop();
    });
  }

  // Settings controls
  const languageSelect = document.getElementById('language-select');
  const sfxVolumeSlider = document.getElementById('sfx-volume-slider');
  const musicVolumeSlider = document.getElementById('music-volume-slider');
  const explanationsToggle = document.getElementById('explanations-toggle');
  
  if (languageSelect) languageSelect.addEventListener('change', (e) => {
    lang = e.target.value;
    window.lang = lang; // Update window reference too
    localStorage.setItem('qb_language', lang);
    applyTranslations();

    // Dispatch event for tutorial
    window.dispatchEvent(new CustomEvent('language-change', { detail: { language: lang } }));
  });
  
  if (sfxVolumeSlider) sfxVolumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value;
    document.querySelectorAll('audio:not(#bg-music)').forEach(audio => {
      audio.volume = volume;
    });
    localStorage.setItem('qb_sfx_volume', volume);
  });
  
  if (musicVolumeSlider) musicVolumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value;
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) bgMusic.volume = volume;
    localStorage.setItem('qb_music_volume', volume);
  });
  
  if (explanationsToggle) explanationsToggle.addEventListener('change', (e) => {
    showExplanations = e.target.checked;
    window.showExplanations = showExplanations; // Sync the window variable
    localStorage.setItem('qb_show_explanations', showExplanations.toString());
    console.log('Explanations toggled to:', showExplanations);

    // Dispatch event for tutorial
    window.dispatchEvent(new CustomEvent('explanations-change', { detail: { enabled: showExplanations } }));
  });

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) themeToggle.addEventListener('change', (e) => {
    const isDarkMode = e.target.checked;
    applyTheme(isDarkMode);
    localStorage.setItem('qb_theme', isDarkMode ? 'dark' : 'light');
    console.log('Theme changed to:', isDarkMode ? 'dark' : 'light');

    // Dispatch event for tutorial
    window.dispatchEvent(new CustomEvent('theme-change', { detail: { isDarkMode } }));
  });
  
  console.log('Event listeners attached successfully');
  
  // Add a global click listener for debugging and sound effects
  document.addEventListener('click', (e) => {
    console.log('Global click detected on:', e.target);
    console.log('Target ID:', e.target.id);
    console.log('Target classes:', e.target.className);
    
    // Add click sound to buttons
    const buttonElement = e.target.tagName === 'BUTTON' ? e.target : e.target.closest('button');
    if (buttonElement) {
      const clickSound = document.getElementById('snd-click');
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
      }
      
      // Also try to start background music on first interaction
      const bgMusic = document.getElementById('bg-music');
      if (bgMusic && bgMusic.paused && bgMusic.src) {
        bgMusic.play().catch(() => {});
      }
    }
  });
}

// Load saved audio settings (moved to main DOMContentLoaded)
function loadAudioSettings() {
  const savedSfxVolume = localStorage.getItem('qb_sfx_volume');
  const savedMusicVolume = localStorage.getItem('qb_music_volume');
  
  if (savedSfxVolume) {
    document.getElementById('sfx-volume-slider').value = savedSfxVolume;
    document.querySelectorAll('audio:not(#bg-music)').forEach(audio => {
      audio.volume = savedSfxVolume;
    });
  } else {
    // Set default SFX volume
    document.querySelectorAll('audio:not(#bg-music)').forEach(audio => {
      audio.volume = 0.5;
    });
  }
  
  if (savedMusicVolume) {
    document.getElementById('music-volume-slider').value = savedMusicVolume;
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) bgMusic.volume = savedMusicVolume;
  } else {
    // Set default music volume
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) bgMusic.volume = 0.3;
  }
}

// Background music helper
function startBackgroundMusic() {
  const bgMusic = document.getElementById('bg-music');
  if (bgMusic && bgMusic.src) {
    // Try to play, but handle autoplay restrictions
    bgMusic.play().catch(e => {
      // Autoplay was prevented, music will start on first user interaction
      console.log('Background music will start on user interaction');
    });
  }
}

// Add click sound to buttons (moved to attachEventListeners to avoid conflicts)

// —— 7.5) Game Mode Info Modal ——
function showGameModeInfo(mode) {
  const modal = document.getElementById('gamemode-info-modal');
  const title = document.getElementById('gamemode-info-title');
  const content = document.getElementById('gamemode-info-content');

  const gameModeInfo = {
    'true-false': {
      title: 'True/False Quiz',
      content: `
        <div class="bg-blue-50 border-l-4 border-blue-600 p-3 mb-4 rounded">
          <p class="text-blue-900 font-semibold">Test your knowledge with quick true or false statements! A perfect warm-up challenge with binary choices that keep you on your toes.</p>
        </div>

        <h4 class="font-bold text-lg mb-2">How to Play:</h4>
        <p class="mb-3">Answer 15 true/false questions as quickly and accurately as possible!</p>

        <h4 class="font-bold text-lg mb-2">Game Details:</h4>
        <ul class="list-disc list-inside space-y-1 mb-3">
          <li><strong>Questions:</strong> 15 total</li>
          <li><strong>Time per question:</strong> 10 seconds</li>
          <li><strong>Reward:</strong> 30-60 stars (30 base + 2 per correct answer)</li>
          <li><strong>Cooldown:</strong> 15 minutes after completion</li>
        </ul>

        <h4 class="font-bold text-lg mb-2">Tips:</h4>
        <p>• Answer quickly to maximize your score</p>
        <p>• Time penalties apply if you run out of time</p>
        <p>• Questions are randomly selected from a large pool</p>
      `
    },
    'lightning': {
      title: '⚡ Lightning Round',
      content: `
        <div class="bg-yellow-50 border-l-4 border-yellow-600 p-3 mb-4 rounded">
          <p class="text-yellow-900 font-semibold">Race against the clock in this adrenaline-pumping challenge! Answer as many questions as possible in just 60 seconds and build epic combos for massive multipliers!</p>
        </div>

        <h4 class="font-bold text-lg mb-2">How to Play:</h4>
        <p class="mb-3">Answer as many questions as you can in 60 seconds!</p>

        <h4 class="font-bold text-lg mb-2">Game Details:</h4>
        <ul class="list-disc list-inside space-y-1 mb-3">
          <li><strong>Duration:</strong> 60 seconds total</li>
          <li><strong>Questions:</strong> Unlimited (as many as you can answer)</li>
          <li><strong>Reward:</strong> 2 stars per correct answer</li>
          <li><strong>Combo system:</strong> Build streaks for multipliers!</li>
          <li><strong>Cooldown:</strong> 2 hours after completion</li>
        </ul>

        <h4 class="font-bold text-lg mb-2">Tips:</h4>
        <p>• Speed is key - don't overthink!</p>
        <p>• Maintain combos for bonus multipliers</p>
        <p>• Questions get progressively harder</p>
      `
    },
    'survivor': {
      title: '🏆 Survivor Mode',
      content: `
        <div class="bg-green-50 border-l-4 border-green-600 p-3 mb-4 rounded">
          <p class="text-green-900 font-semibold">Climb through 10 challenging levels with only 3 lives! Each level tests your knowledge with progressively harder questions. Can you reach the top and become a Grand Master?</p>
        </div>

        <h4 class="font-bold text-lg mb-2">How to Play:</h4>
        <p class="mb-3">Progress through 10 levels with 3 lives. Each level has 3 questions!</p>

        <h4 class="font-bold text-lg mb-2">Game Details:</h4>
        <ul class="list-disc list-inside space-y-1 mb-3">
          <li><strong>Lives:</strong> 3 (game over when all lost)</li>
          <li><strong>Levels:</strong> 10 progressive difficulty levels</li>
          <li><strong>Questions per level:</strong> 3</li>
          <li><strong>Time per question:</strong> 12 seconds</li>
          <li><strong>Reward:</strong> 5-25 stars per question (increases with level)</li>
          <li><strong>Bonus:</strong> Level completion bonuses (15-60 stars)</li>
          <li><strong>Cooldown:</strong> 4 hours after completion</li>
        </ul>

        <h4 class="font-bold text-lg mb-2">Tips:</h4>
        <p>• Difficulty increases with each level</p>
        <p>• Complete all 3 questions to advance</p>
        <p>• Lose a life for wrong answers or timeouts</p>
      `
    },
    'extreme-survivor': {
      title: '💀 Extreme Survivor',
      content: `
        <div class="bg-red-50 border-l-4 border-red-600 p-3 mb-4 rounded">
          <p class="text-red-900 font-semibold">The ultimate test of skill and knowledge! Only ONE life stands between you and glory. Faster questions, higher stakes, and massive rewards for those brave enough to accept the challenge!</p>
        </div>

        <h4 class="font-bold text-lg mb-2">How to Play:</h4>
        <p class="mb-3">The ultimate challenge! Progress through 10 levels with only 1 life!</p>

        <h4 class="font-bold text-lg mb-2">Game Details:</h4>
        <ul class="list-disc list-inside space-y-1 mb-3">
          <li><strong>Lives:</strong> 1 (one mistake = game over!)</li>
          <li><strong>Levels:</strong> 10 progressive difficulty levels</li>
          <li><strong>Questions per level:</strong> 2</li>
          <li><strong>Time per question:</strong> 8 seconds (faster!)</li>
          <li><strong>Reward:</strong> 8-40 stars per question (higher rewards)</li>
          <li><strong>Bonus:</strong> Level completion bonuses (25-70 stars)</li>
          <li><strong>Cooldown:</strong> 6 hours after completion</li>
        </ul>

        <h4 class="font-bold text-lg mb-2">Tips:</h4>
        <p>• Only for experienced players!</p>
        <p>• Higher risk = higher rewards</p>
        <p>• One wrong answer ends the game</p>
        <p>• Time runs out faster than normal Survivor</p>
      `
    }
  };

  const info = gameModeInfo[mode];
  if (info) {
    title.textContent = info.title;
    content.innerHTML = info.content;
    modal.classList.remove('hidden');
  }
}

function hideGameModeInfo() {
  const modal = document.getElementById('gamemode-info-modal');
  modal.classList.add('hidden');
}

// —— 8) Export functions to window for global access ——
window.showScreen = showScreen;
window.updateStarDisplay = updateStarDisplay;
window.updateDiamondDisplay = updateDiamondDisplay;
window.updatePowerUpCounts = updatePowerUpCounts;
window.useFiftyFifty = useFiftyFifty;
window.useSkip = useSkip;
window.useTimeBonus = useTimeBonus;
window.renderQuestion = renderQuestion;
window.startTimer = startTimer;
window.resumeTimer = resumeTimer;
window.showSubjects = showSubjects;
window.showRoadmap = showRoadmap;
window.showShop = showShop;
window.buyPowerUp = buyPowerUp;
window.buyPowerUpBundle = buyPowerUpBundle;
window.checkSubjectCompletion = checkSubjectCompletion;
window.showExplanation = showExplanation;
window.hideExplanation = hideExplanation;
window.showExplanations = showExplanations;
window.buyRemoveAds = buyRemoveAds;
window.unlockSubject = unlockSubject;
window.claimDailyDiamonds = claimDailyDiamonds;
window.watchAdForDiamonds = watchAdForDiamonds;
window.updateAdWatchButton = updateAdWatchButton;
window.getDailyAdWatchStatus = getDailyAdWatchStatus;
window.updateShopButtonIndicator = updateShopButtonIndicator;
window.showPowerUpPurchaseModal = showPowerUpPurchaseModal;
window.closePowerUpModal = closePowerUpModal;
window.continueWithAd = continueWithAd;
window.continueWithGems = continueWithGems;
window.enableAnswerButtons = enableAnswerButtons;
window.openLevels = openLevels;
window.applyTranslations = applyTranslations;
window.startBackgroundMusic = startBackgroundMusic;
window.attachEventListeners = attachEventListeners;
window.updateTopBar = updateTopBar;
window.hideTimeoutPopup = hideTimeoutPopup;
window.hideErrorPopup = hideErrorPopup;
window.showCompletePopup = showCompletePopup;
window.hideCompletePopup = hideCompletePopup;
window.startDailyChallenge = startDailyChallenge;
window.updateDailyChallengeButton = updateDailyChallengeButton;
window.getDailyChallengeStatus = getDailyChallengeStatus;
window.checkLevelCooldown = checkLevelCooldown;
window.checkSubcategoryCooldown = checkSubcategoryCooldown;
window.formatCooldownTime = formatCooldownTime;
window.setSubcategoryFailureCooldown = setSubcategoryFailureCooldown;
window.setModalCooldownText = setModalCooldownText;
window.showGameModeInfo = showGameModeInfo;
window.hideGameModeInfo = hideGameModeInfo;
window.t = t;
window.lang = lang;

// —— 9) Initialize everything on load ——
function initializeApp() {
  console.log('Initializing RobitQuiz...');
  
  // Make sure groups is accessible and initialized
  if (typeof window.groups === 'undefined') {
    console.error('Groups array not initialized! Check questions.js');
    setTimeout(initializeApp, 100); // Retry after 100ms
    return;
  }
  
  // Check if game functions are loaded
  if (typeof window.startLevel === 'undefined') {
    console.log('Game functions not yet loaded, waiting...');
    setTimeout(initializeApp, 100); // Retry after 100ms
    return;
  }
  
  // Check if we should wait for more subjects to load
  if (window.groups.length < window.expectedSubjects) {
    console.log(`Waiting for subjects to load... ${window.groups.length}/${window.expectedSubjects} loaded`);
    // Don't wait too long - if some subjects are already loaded, continue
    if (window.groups.length === 0) {
      setTimeout(initializeApp, 100); // Retry after 100ms
      return;
    }
  }
  
  // Load saved currencies and power-ups
  stars = parseInt(localStorage.getItem('qb_stars') || '0');
  diamonds = parseInt(localStorage.getItem('qb_diamonds') || '0');
  fiftyFiftyCount = parseInt(localStorage.getItem('qb_fifty_fifty_count') || '3');
  skipCount = parseInt(localStorage.getItem('qb_skip_count') || '3');
  timeBonusCount = parseInt(localStorage.getItem('qb_time_bonus_count') || '3');
  
  // Initialize new player items or missing power-ups
  const isNewPlayer = !localStorage.getItem('qb_stars') && !localStorage.getItem('qb_diamonds');
  const hasNoFiftyFifty = !localStorage.getItem('qb_fifty_fifty_count');
  const hasNoSkip = !localStorage.getItem('qb_skip_count');
  const hasNoTimeBonus = !localStorage.getItem('qb_time_bonus_count');
  
  // Always ensure users have their free power-ups if not set or if they have 0
  if (isNewPlayer || hasNoFiftyFifty || fiftyFiftyCount === 0) {
    fiftyFiftyCount = Math.max(fiftyFiftyCount, 3);
    localStorage.setItem('qb_fifty_fifty_count', fiftyFiftyCount.toString());
  }
  if (isNewPlayer || hasNoSkip || skipCount === 0) {
    skipCount = Math.max(skipCount, 3);
    localStorage.setItem('qb_skip_count', skipCount.toString());
  }
  if (isNewPlayer || hasNoTimeBonus || timeBonusCount === 0) {
    timeBonusCount = Math.max(timeBonusCount, 3);
    localStorage.setItem('qb_time_bonus_count', timeBonusCount.toString());
  }
  
  updateStarDisplay();
  updateDiamondDisplay();
  updatePowerUpCounts();
  
  // Load saved language first
  const savedLang = localStorage.getItem('qb_language');
  if (savedLang) {
    lang = savedLang;
    window.lang = lang; // Update window reference too
    const langSelect = document.getElementById('language-select');
    if (langSelect) langSelect.value = savedLang;
  }
  
  // Load explanations setting
  const savedExplanations = localStorage.getItem('qb_show_explanations');
  if (savedExplanations !== null) {
    showExplanations = savedExplanations === 'true';
    window.showExplanations = showExplanations; // Sync both variables
    const explanationsToggle = document.getElementById('explanations-toggle');
    if (explanationsToggle) explanationsToggle.checked = showExplanations;
    console.log('Loaded explanations setting:', showExplanations);
  }

  // Load theme setting (dark mode is default)
  const savedTheme = localStorage.getItem('qb_theme') || 'dark';
  const isDarkMode = savedTheme === 'dark';
  applyTheme(isDarkMode);
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) themeToggle.checked = isDarkMode;
  console.log('Loaded theme:', savedTheme);

  // Ensure lang is available globally
  window.lang = lang;

  // Preload all questions asynchronously
  if (window.QuestionPool && typeof window.QuestionPool.loadAllQuestionsAsync === 'function') {
    console.log('Preloading all questions for challenge modes...');
    window.QuestionPool.loadAllQuestionsAsync().then(() => {
      console.log('All questions preloaded successfully!');
    }).catch(error => {
      console.error('Failed to preload questions:', error);
    });
  }

  // Load audio settings
  loadAudioSettings();

  // Apply translations after language is set
  applyTranslations();

  // Update daily challenge button status
  updateDailyChallengeButton();
  
  // Update shop button indicator for daily claim
  updateShopButtonIndicator();
  
  // Attach all event listeners
  attachEventListeners();
  
  // Initialize admin mode listeners (secret)
  initAdminModeListeners();
  
  // Initialize subject popup
  initSubjectPopup();
  
  // Start background music
  startBackgroundMusic();
  
  // Show initial screen
  showScreen('home-screen');
  
  console.log('RobitQuiz initialization complete');
}

// ─── Admin Mode Functions (Secret/Temporary) ───
function handleAdminSequence(type) {
  console.log('Admin sequence input:', type);
  
  // Add to sequence
  adminSequence.push(type);
  
  // Reset timer
  if (adminSequenceTimer) {
    clearTimeout(adminSequenceTimer);
  }
  
  // Set 5-second timeout
  adminSequenceTimer = setTimeout(() => {
    console.log('Admin sequence timeout - resetting');
    adminSequence = [];
    adminSequenceTimer = null;
  }, 5000);
  
  // Check if sequence matches
  if (adminSequence.length === targetSequence.length) {
    let matches = true;
    for (let i = 0; i < targetSequence.length; i++) {
      if (adminSequence[i] !== targetSequence[i]) {
        matches = false;
        break;
      }
    }
    
    if (matches) {
      activateAdminMode();
    }
    
    // Reset sequence regardless of outcome
    adminSequence = [];
    if (adminSequenceTimer) {
      clearTimeout(adminSequenceTimer);
      adminSequenceTimer = null;
    }
  }
}

function activateAdminMode() {
  console.log('🎉 ADMIN MODE ACTIVATED!');
  adminModeActive = true;
  
  // Grant 1,000,000 stars and gems
  stars += 1000000;
  diamonds += 1000000;
  
  // Update displays
  updateStarDisplay();
  updateDiamondDisplay();
  
  // Update localStorage
  localStorage.setItem('qb_stars', stars.toString());
  localStorage.setItem('qb_diamonds', diamonds.toString());
  
  // Show confirmation
  alert('🎉 ADMIN MODE ACTIVATED!\n💰 1,000,000 Stars & Gems Added!');
}

function disableAdminMode() {
  console.log('Admin mode disabled');
  adminModeActive = false;
  adminSequence = [];
  if (adminSequenceTimer) {
    clearTimeout(adminSequenceTimer);
    adminSequenceTimer = null;
  }
}

function initAdminModeListeners() {
  const starDisplay = document.getElementById('star-display');
  const diamondDisplay = document.getElementById('diamond-display');
  
  if (starDisplay) {
    starDisplay.addEventListener('click', (e) => {
      e.stopPropagation();
      handleAdminSequence('star');
      handleResetSequence('star');
    });
  }
  
  if (diamondDisplay) {
    diamondDisplay.addEventListener('click', (e) => {
      e.stopPropagation();
      handleAdminSequence('gem');
      handleResetSequence('gem');
    });
  }
}

// ─── Secret Reset Mode Functions ───
function handleResetSequence(type) {
  console.log('Reset sequence input:', type);
  
  // Add to sequence
  resetSequence.push(type);
  
  // Reset timer
  if (resetSequenceTimer) {
    clearTimeout(resetSequenceTimer);
  }
  
  // Set 5-second timeout
  resetSequenceTimer = setTimeout(() => {
    console.log('Reset sequence timeout - resetting');
    resetSequence = [];
    resetSequenceTimer = null;
  }, 5000);
  
  // Check if sequence matches
  if (resetSequence.length === resetTargetSequence.length) {
    let matches = true;
    for (let i = 0; i < resetTargetSequence.length; i++) {
      if (resetSequence[i] !== resetTargetSequence[i]) {
        matches = false;
        break;
      }
    }
    
    if (matches) {
      activateResetMode();
    }
    
    // Reset sequence regardless of outcome
    resetSequence = [];
    if (resetSequenceTimer) {
      clearTimeout(resetSequenceTimer);
      resetSequenceTimer = null;
    }
  }
}

function activateResetMode() {
  console.log('🔄 SECRET RESET MODE ACTIVATED!');
  
  if (confirm('⚠️ SECRET RESET MODE ACTIVATED!\n\nThis will reset ALL game data including:\n• Stars & Diamonds\n• Level Progress\n• Achievements\n• Tutorial Status\n• All Cooldowns\n\nAre you sure you want to continue?')) {
    // Clear all localStorage data
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('qb_')) {
        keysToRemove.push(key);
      }
    }
    
    keysToRemove.forEach(key => localStorage.removeItem(key));
    
    // Reset all in-memory variables
    stars = 0;
    diamonds = 0;
    fiftyFiftyCount = 3;
    skipCount = 3;
    timeBonusCount = 3;
    adminModeActive = false;
    
    // Show confirmation
    alert('✅ COMPLETE RESET SUCCESSFUL!\n\nAll game data has been cleared.\nThe page will now reload.');
    
    // Reload the page
    window.location.reload();
  } else {
    console.log('Reset cancelled by user');
  }
}

// Export admin mode functions for console access
window.disableAdminMode = disableAdminMode;
window.adminModeStatus = () => {
  console.log('Admin Mode Active:', adminModeActive);
  console.log('Current Sequence:', adminSequence);
  return adminModeActive;
};

// ─── Simple Subject Popup System ───
function initSubjectPopup() {
  console.log('Initializing Subject Popup...');
  
  // Add event listeners
  const popupModal = document.getElementById('subject-popup-modal');
  const closeBtn = document.getElementById('subject-popup-close');
  const backBtn = document.getElementById('subject-popup-back');
  const buyStarsBtn = document.getElementById('subject-buy-stars');
  const buyGemsBtn = document.getElementById('subject-buy-gems');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeSubjectPopup);
  }
  
  if (backBtn) {
    backBtn.addEventListener('click', closeSubjectPopup);
  }
  
  if (buyStarsBtn) {
    buyStarsBtn.addEventListener('click', () => buySubjectWithStars());
  }
  
  if (buyGemsBtn) {
    buyGemsBtn.addEventListener('click', () => buySubjectWithGems());
  }
  
  // Close modal when clicking outside
  if (popupModal) {
    popupModal.addEventListener('click', (e) => {
      if (e.target === popupModal) {
        closeSubjectPopup();
      }
    });
  }
  
  console.log('Subject Popup initialized');
}

function openSubjectPopup(subjectData) {
  console.log('Opening Subject Popup for:', subjectData);
  const modal = document.getElementById('subject-popup-modal');
  const icon = document.getElementById('subject-popup-icon');
  const name = document.getElementById('subject-popup-name');
  const description = document.getElementById('subject-popup-description');
  const starsCost = document.getElementById('subject-stars-cost');
  const gemsCost = document.getElementById('subject-gems-cost');
  
  console.log('Modal element found:', !!modal);
  console.log('Icon element found:', !!icon);
  console.log('Name element found:', !!name);
  console.log('Description element found:', !!description);
  
  if (modal && subjectData) {
    // Store subject data for purchase functions
    currentSubjectData = subjectData;
    
    // Update popup content
    if (icon) {
      icon.textContent = subjectData.icon || '🔒';
      console.log('Icon updated to:', icon.textContent);
    }
    if (name) {
      name.textContent = subjectData.name || 'Subject Name';
      console.log('Name updated to:', name.textContent);
    }
    if (description) {
      description.textContent = subjectData.description || 'Learn about this interesting subject.';
      console.log('Description updated to:', description.textContent);
    }
    
    // Update costs
    if (starsCost) {
      starsCost.textContent = subjectData.starsCost || '40';
    }
    if (gemsCost) {
      gemsCost.textContent = subjectData.gemsCost || '5';
    }
    
    modal.classList.remove('hidden');
    console.log('Subject popup opened successfully - modal classes:', modal.classList.toString());
    console.log('Modal style display:', modal.style.display);
  } else {
    console.error('Subject popup modal not found or no data provided');
    console.error('Modal:', modal);
    console.error('SubjectData:', subjectData);
  }
}

function closeSubjectPopup() {
  const modal = document.getElementById('subject-popup-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
  currentSubjectData = null;
}

function buySubjectWithStars() {
  if (!currentSubjectData) {
    console.error('No subject data available for purchase');
    return;
  }
  
  const userStars = parseInt(localStorage.getItem('qb_stars') || '0');
  const starsCost = currentSubjectData.starsCost || 40;
  
  if (userStars >= starsCost) {
    if (confirm(`Unlock ${currentSubjectData.name} for ${starsCost} stars?`)) {
      // Deduct stars
      const newStars = userStars - starsCost;
      localStorage.setItem('qb_stars', newStars.toString());
      
      // Unlock subject
      unlockSubject(currentSubjectData);
      
      // Close popup
      closeSubjectPopup();
    }
  } else {
    alert(`You need ${starsCost} stars to unlock this subject. You have ${userStars} stars.`);
  }
}

function buySubjectWithGems() {
  if (!currentSubjectData) {
    console.error('No subject data available for purchase');
    return;
  }
  
  const userGems = parseInt(localStorage.getItem('qb_diamonds') || '0');
  const gemsCost = currentSubjectData.gemsCost || 5;
  
  if (userGems >= gemsCost) {
    if (confirm(`Unlock ${currentSubjectData.name} for ${gemsCost} gems?`)) {
      // Deduct gems
      const newGems = userGems - gemsCost;
      localStorage.setItem('qb_diamonds', newGems.toString());
      
      // Unlock subject
      unlockSubject(currentSubjectData);
      
      // Close popup
      closeSubjectPopup();
    }
  } else {
    alert(`You need ${gemsCost} gems to unlock this subject. You have ${userGems} gems.`);
  }
}

function unlockSubject(subjectData) {
  // Add to unlocked subjects
  const unlockedSubjects = JSON.parse(localStorage.getItem('qb_unlocked_tiers') || '["warm-up/animals"]');
  if (subjectData.key && !unlockedSubjects.includes(subjectData.key)) {
    unlockedSubjects.push(subjectData.key);
    localStorage.setItem('qb_unlocked_tiers', JSON.stringify(unlockedSubjects));
  }
  
  // Update displays
  updateStarDisplay();
  updateDiamondDisplay();
  showSubjects(); // Refresh the subjects page
  
  alert(`${subjectData.name} has been unlocked! 🎉`);
}

// Test function to debug popup
function testSubjectPopup() {
  console.log('Testing subject popup...');
  const testData = {
    icon: '🧪',
    name: 'Test Subject',
    description: 'This is a test to see if the popup works correctly.'
  };
  openSubjectPopup(testData);
}

// ─── Confetti Effect System ───
function createConfetti() {
  console.log('Creating confetti effect...');
  
  // Create confetti container
  const confettiContainer = document.createElement('div');
  confettiContainer.className = 'confetti-container';
  confettiContainer.id = 'confetti-effect';
  document.body.appendChild(confettiContainer);
  
  // Confetti types
  const confettiTypes = ['confetti-square', 'confetti-circle', 'confetti-triangle', 'confetti-star'];
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#96ceb4', '#ffeaa7', '#fd79a8', '#6c5ce7'];
  
  // Create 150 confetti pieces (increased from 50)
  for (let i = 0; i < 150; i++) {
    // Create confetti immediately without delay to prevent stacking
    const confetti = document.createElement('div');
    const type = confettiTypes[Math.floor(Math.random() * confettiTypes.length)];
    confetti.className = `confetti-piece ${type}`;
    
    // Random positioning and styling
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-20px'; // Start above viewport
    // Stagger animation start times instead of creation
    confetti.style.animationDelay = (i * 0.01) + 's';
    confetti.style.animationDuration = (Math.random() * 1.5 + 2.5) + 's';
    
    // Random color for squares and circles
    if (type === 'confetti-square' || type === 'confetti-circle') {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.background = randomColor;
    }
    
    // Random size variation
    const size = Math.random() * 8 + 6; // 6-14px
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    
    confettiContainer.appendChild(confetti);
    
    // Remove confetti piece after animation
    setTimeout(() => {
      if (confetti.parentNode) {
        confetti.parentNode.removeChild(confetti);
      }
    }, 5000);
  }
  
  // Remove confetti container after all animations complete
  setTimeout(() => {
    if (confettiContainer.parentNode) {
      confettiContainer.parentNode.removeChild(confettiContainer);
    }
  }, 7000);
}

// Test function for completion popup with confetti
function testCompletionPopup() {
  console.log('Testing completion popup with confetti...');
  showCompletePopup(10, 15);
}

// Helper function to list all subcategories (for testing)
window.listSubcategories = function() {
  if (!window.mainTopics) {
    console.log('❌ Main topics not loaded yet');
    return;
  }

  console.log('📋 Available subcategories:');
  Object.keys(window.mainTopics).forEach(topicId => {
    const topic = window.mainTopics[topicId];
    console.log(`\n${topic.name.en} (${topicId}):`);
    topic.subcategories.forEach(subcat => {
      const progress = window.getSubcategoryProgress(topicId, subcat.id);
      console.log(`  - ${subcat.name.en} (${subcat.id}) - Level ${progress}/10`);
    });
  });
  console.log('\n💡 Use: setSubcategoryProgress("topicId", "subcatId", 9) to set to level 9');
};

// Helper function to set progress for a subcategory (for testing)
window.setSubcategoryProgress = function(mainTopicId, subcategoryId, level) {
  const key = `qb_progress_${mainTopicId}_${subcategoryId}`;
  localStorage.setItem(key, level.toString());
  console.log(`✅ Set progress for ${mainTopicId}/${subcategoryId} to level ${level}`);
  console.log(`To test level 10 completion, start this subcategory and complete it.`);

  // Refresh the UI if we're currently on the subcategories screen
  if (window.currentQuizContext && window.currentQuizContext.mainTopicId === mainTopicId) {
    showSubcategories(mainTopicId);
  }
};

// ─── Level Completion Tracking System ───
function markLevelAsCompleted(groupIndex, levelIndex) {
  console.log('Marking level as completed:', groupIndex, levelIndex);
  
  // Get existing completed levels
  const completedLevels = JSON.parse(localStorage.getItem('qb_completed_levels') || '{}');
  
  // Create key for this subject
  const subjectKey = `subject_${groupIndex}`;
  
  // Initialize array for this subject if it doesn't exist
  if (!completedLevels[subjectKey]) {
    completedLevels[subjectKey] = [];
  }
  
  // Add level to completed list if not already there
  if (!completedLevels[subjectKey].includes(levelIndex)) {
    completedLevels[subjectKey].push(levelIndex);
    localStorage.setItem('qb_completed_levels', JSON.stringify(completedLevels));
    console.log('Level marked as completed and saved');
  }
}

function isLevelCompleted(groupIndex, levelIndex) {
  const completedLevels = JSON.parse(localStorage.getItem('qb_completed_levels') || '{}');
  const subjectKey = `subject_${groupIndex}`;
  
  if (completedLevels[subjectKey]) {
    return completedLevels[subjectKey].includes(levelIndex);
  }
  
  return false;
}

function getCompletedLevelsCount(groupIndex) {
  const completedLevels = JSON.parse(localStorage.getItem('qb_completed_levels') || '{}');
  const subjectKey = `subject_${groupIndex}`;
  
  if (completedLevels[subjectKey]) {
    return completedLevels[subjectKey].length;
  }
  
  return 0;
}


// Global state for continue button protection
window.continueButtonProcessing = false;

// Export functions for console access
window.openSubjectPopup = openSubjectPopup;
window.testSubjectPopup = testSubjectPopup;
window.createConfetti = createConfetti;
window.testCompletionPopup = testCompletionPopup;
window.markLevelAsCompleted = markLevelAsCompleted;
window.isLevelCompleted = isLevelCompleted;
window.getCompletedLevelsCount = getCompletedLevelsCount;
window.startCooldownUpdater = startCooldownUpdater;
window.stopCooldownUpdater = stopCooldownUpdater;
window.updateCooldownTimers = updateCooldownTimers;

// Test function to manually trigger cooldown timer
window.testCooldownUpdate = function() {
  console.log('Testing cooldown update...');
  console.log('Current screen:', window.currentScreen);
  updateCooldownTimers();
};


// Wait for DOM and run initialization
function waitForDOMAndInit() {
  if (document.readyState === 'loading') {
    console.log('DOM still loading, waiting for DOMContentLoaded event');
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded fired, initializing app');
      setTimeout(initializeApp, 100); // Small delay to ensure all elements are available
    });
  } else {
    console.log('DOM already loaded, initializing app immediately');
    // DOM already loaded, but add small delay to be safe
    setTimeout(initializeApp, 100);
  }
}

waitForDOMAndInit();
