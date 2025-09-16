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
  }
};

// —— 1) Screen state trackers ——
let currentScreen = 'home-screen';
window.currentScreen = currentScreen;
let lastScreen    = 'null';
let timer;              // reused by game.js via global
let timerInterval;      // ditto

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
  if (challengeFailedBack) challengeFailedBack.innerText = t('backToLevels');
  
  console.log('Translations applied successfully');
}

// These will be handled later in the file


// —— 4) Currency displays ——
function updateStarDisplay() {
  document.getElementById('star-count').innerText = stars;
}

function updateDiamondDisplay() {
  const diamondCountEl = document.getElementById('diamond-count');
  if (diamondCountEl) {
    diamondCountEl.innerText = diamonds;
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
  console.log('renderQuestion called - currentIndex:', currentIndex);
  const q = questions[currentIndex];
  const lang = window.lang || 'en'; // Use same pattern as other functions
  document.getElementById('question').innerText = q.question[lang];

  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';

  // Reset fifty-fifty for new question
  fiftyFiftyUsed = false;
  console.log('Reset fiftyFiftyUsed to false');
  
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

  const q = questions[currentIndex];
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
  
  // Save to localStorage
  localStorage.setItem('qb_skip_count', skipCount.toString());
  
  updatePowerUpCounts();
  
  // Move to next question (same logic as regular skip)
  clearTimeout(timer);
  clearInterval(timerInterval);
  currentIndex++;
  
  // Check if user has achieved 10 correct answers or reached end of questions
  if (correctCount >= 10 || currentIndex >= questions.length) {
    // Level complete - calculate tier-based star rewards
    let starsEarned = 0;
    if (correctCount >= 10) {
      // Get the subject tier to determine reward amount
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
    if (starsEarned > 0) {
      stars += starsEarned;
      localStorage.setItem('qb_stars', stars.toString());
      updateStarDisplay();
    }
    showCompletePopup(correctCount, starsEarned);
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
function getLevelCooldownKey(groupIndex, levelIndex) {
  return `qb_level_cooldown_${groupIndex}_${levelIndex}`;
}

function checkLevelCooldown(groupIndex, levelIndex) {
  const cooldownKey = getLevelCooldownKey(groupIndex, levelIndex);
  const failureTime = localStorage.getItem(cooldownKey);
  
  if (!failureTime) return { canPlay: true, timeRemaining: 0 };
  
  const failureTimestamp = parseInt(failureTime);
  const cooldownDuration = 10 * 60 * 1000; // 10 minutes in milliseconds
  const now = Date.now();
  const timePassed = now - failureTimestamp;
  
  if (timePassed >= cooldownDuration) {
    // Cooldown expired, remove from storage
    localStorage.removeItem(cooldownKey);
    return { canPlay: true, timeRemaining: 0 };
  }
  
  return { 
    canPlay: false, 
    timeRemaining: cooldownDuration - timePassed 
  };
}

function setLevelFailureCooldown(groupIndex, levelIndex) {
  const cooldownKey = getLevelCooldownKey(groupIndex, levelIndex);
  localStorage.setItem(cooldownKey, Date.now().toString());
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
    console.log('Cooldown timer tick - updating buttons');
    updateCooldownTimers();
  }, 1000);
  console.log('Cooldown updater started with interval ID:', cooldownUpdateInterval);
}

function stopCooldownUpdater() {
  if (cooldownUpdateInterval) {
    clearInterval(cooldownUpdateInterval);
    cooldownUpdateInterval = null;
  }
}

function updateCooldownTimers() {
  console.log('updateCooldownTimers called - currentScreen:', window.currentScreen);
  
  // Only update if we're on the levels screen
  if (window.currentScreen !== 'levels-screen') {
    console.log('Not on levels screen, current screen:', window.currentScreen);
    return;
  }
  
  const cooldownButtons = document.querySelectorAll('[data-is-on-cooldown="true"]');
  console.log('Found', cooldownButtons.length, 'cooldown buttons to update');
  
  if (cooldownButtons.length === 0) {
    // Also try alternative selector
    const altButtons = document.querySelectorAll('.play-btn[data-is-on-cooldown="true"]');
    console.log('Alternative selector found', altButtons.length, 'buttons');
    
    // Also check all play buttons
    const allPlayButtons = document.querySelectorAll('.play-btn');
    console.log('Total play buttons found:', allPlayButtons.length);
    allPlayButtons.forEach((btn, i) => {
      console.log(`Button ${i}:`, btn.dataset.isOnCooldown, btn.innerHTML.substring(0, 50));
    });
  }
  
  cooldownButtons.forEach((button, index) => {
    const groupIndex = parseInt(button.dataset.groupIndex);
    const levelIndex = parseInt(button.dataset.levelIndex);
    
    console.log(`Updating button ${index}: group ${groupIndex}, level ${levelIndex}`);
    
    const cooldownStatus = checkLevelCooldown(groupIndex, levelIndex);
    console.log('Cooldown status:', cooldownStatus);
    
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
  
  // Get user stars and unlocked subjects
  const userStars = parseInt(localStorage.getItem('qb_stars') || '0');
  const unlockedSubjects = JSON.parse(localStorage.getItem('qb_unlocked_tiers') || '["warm-up/animals"]'); // Animals always unlocked
  
  // Define tier order (hardest to easiest for display)
  const tierOrder = ['impossible-mode', 'mastermind', 'mind-bender', 'brain-teaser', 'warm-up'];
  const tierColors = {
    'impossible-mode': 'from-red-600 to-black',
    'mastermind': 'from-purple-600 to-indigo-600',
    'mind-bender': 'from-indigo-600 to-blue-600',
    'brain-teaser': 'from-blue-600 to-teal-600',
    'warm-up': 'from-green-600 to-blue-600'
  };
  
  // Create subjects array from subjectDefinitions in tier order
  const allSubjects = [];
  let animalsSubject = null;
  
  tierOrder.forEach(tier => {
    Object.keys(window.subjectDefinitions).forEach(subjectKey => {
      const subject = window.subjectDefinitions[subjectKey];
      if (subject.tier === tier) {
        // Special handling: move animals to the very bottom
        if (subjectKey === 'warm-up/animals') {
          animalsSubject = {
            key: subjectKey,
            ...subject
          };
        } else {
          allSubjects.push({
            key: subjectKey,
            ...subject
          });
        }
      }
    });
  });
  
  // Add animals at the very end
  if (animalsSubject) {
    allSubjects.push(animalsSubject);
  }
  
  allSubjects.forEach((subject, index) => {
    const isUnlocked = unlockedSubjects.includes(subject.key);
    const cost = subject.unlockCost;
    
    // Calculate progress (placeholder for now)
    const completedLevels = 0; // TODO: Implement actual progress tracking
    const totalLevels = 10;
    const progressPercent = (completedLevels / totalLevels) * 100;
    
    const container = document.createElement('div');
    container.className = 'w-full mb-4';
    
    const btn = document.createElement('button');
    const tierColor = tierColors[subject.tier] || 'from-gray-600 to-gray-700';
    btn.className = `w-full font-semibold py-6 px-6 rounded-xl shadow-lg text-white transition-all duration-300 relative ${
      isUnlocked 
        ? `bg-gradient-to-r ${tierColor} hover:opacity-90 cursor-pointer` 
        : 'bg-gray-600 cursor-not-allowed opacity-75'
    }`;
    
    // Tier badge - positioned at top right of the button with more spacing
    const tierBadge = document.createElement('div');
    tierBadge.className = 'absolute top-4 right-4 z-10';
    tierBadge.innerHTML = `<span class="text-xs bg-black bg-opacity-30 px-2 py-1 rounded-full">${subject.tierIcon} ${subject.tierName[lang]}</span>`;
    
    // Main content container - now flex with image on left and status on right
    const mainContent = document.createElement('div');
    mainContent.className = 'flex items-start space-x-4 mb-3';
    
    // Left side: Custom image (full button height)
    const imageContainer = document.createElement('div');
    imageContainer.className = 'flex-shrink-0';
    
    // Create image element instead of emoji icon - much taller but auto width
    const img = document.createElement('img');
    img.className = 'h-32 w-auto object-contain'; // Much taller: 128px height, auto width
    
    // Map subject name to image filename
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
    
    // Get the subject key (e.g., "warm-up/animals" -> "animals")
    const subjectKey = subject.key.split('/').pop();
    const imageFileName = subjectImageMap[subjectKey] || 'default.png';
    
    img.src = `images/subjects/${imageFileName}`;
    img.alt = subject.name[lang];
    img.onerror = () => {
      console.warn(`Image not found: ${img.src}, falling back to emoji`);
      // Fallback to emoji if image not found
      img.style.display = 'none';
      const fallbackIcon = document.createElement('span');
      fallbackIcon.className = 'text-6xl'; // Much larger emoji to match new image size
      fallbackIcon.innerText = subject.icon;
      imageContainer.appendChild(fallbackIcon);
    };
    
    // Add the image to the image container
    imageContainer.appendChild(img);
    
    // Right side: Status text (taking remaining space) - moved down to avoid tier badge
    const statusContainer = document.createElement('div');
    statusContainer.className = 'flex-1 text-center flex flex-col justify-center mt-6';
    
    if (isUnlocked) {
      // Reward text on first line
      const rewardLabel = document.createElement('div');
      rewardLabel.className = 'text-sm opacity-90 mb-1';
      rewardLabel.innerText = 'Reward:';
      
      // Stars on second line
      const starsText = document.createElement('div');
      starsText.className = 'text-sm opacity-90';
      starsText.innerText = `${subject.levelReward} ⭐`;
      
      statusContainer.appendChild(rewardLabel);
      statusContainer.appendChild(starsText);
    } else {
      // Unlock label on first line
      const unlockLabel = document.createElement('div');
      unlockLabel.className = 'text-sm opacity-90 mb-1';
      unlockLabel.innerText = 'Unlock:';
      
      // Unlock stars on second line
      const unlockStars = document.createElement('div');
      unlockStars.className = 'text-sm opacity-90 mb-2';
      unlockStars.innerText = `${cost} ⭐`;
      
      // Rewards label on third line
      const rewardLabel = document.createElement('div');
      rewardLabel.className = 'text-sm opacity-90 mb-1';
      rewardLabel.innerText = 'Rewards:';
      
      // Reward stars on fourth line
      const rewardStars = document.createElement('div');
      rewardStars.className = 'text-sm opacity-90';
      rewardStars.innerText = `${subject.levelReward} ⭐`;
      
      statusContainer.appendChild(unlockLabel);
      statusContainer.appendChild(unlockStars);
      statusContainer.appendChild(rewardLabel);
      statusContainer.appendChild(rewardStars);
    }
    
    // Assemble main content: image on left, status on right
    mainContent.appendChild(imageContainer);
    mainContent.appendChild(statusContainer);
    
    // Progress bar
    const progressContainer = document.createElement('div');
    progressContainer.className = 'w-full bg-gray-700 rounded-full h-2';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500';
    progressBar.style.width = isUnlocked ? `${progressPercent}%` : '0%';
    
    progressContainer.appendChild(progressBar);
    
    // Add tier badge first, then main content and progress bar
    btn.appendChild(tierBadge);
    btn.appendChild(mainContent);
    btn.appendChild(progressContainer);
    
    // Click handler
    btn.addEventListener('click', (e) => {
      console.log('SUBJECTS PAGE BUTTON CLICKED:', subject.name[lang], 'isUnlocked:', isUnlocked);
      e.preventDefault();
      e.stopPropagation();
      
      if (isUnlocked) {
        // For unlocked subjects, go directly to levels (no popup)
        const groupIndex = window.groups.findIndex(group => {
          return group.name[lang] === subject.name[lang];
        });
        if (groupIndex !== -1) {
          openLevels(groupIndex);
        }
      } else {
        // Show popup for locked subject
        const subjectInfo = {
          icon: '🔒',
          name: subject.name[lang],
          description: `This subject is locked. Choose how you want to unlock it and start challenging yourself with multiple levels!`,
          key: subject.key,
          starsCost: cost,
          gemsCost: Math.ceil(cost / 8) // Gems cost less (e.g., 40 stars = 5 gems)
        };
        console.log('Calling openSubjectPopup for locked subject:', subjectInfo);
        openSubjectPopup(subjectInfo);
      }
    });
    
    container.appendChild(btn);
    grid.appendChild(container);
  });
  
  showScreen('subjects-screen');
  
  // Scroll to bottom so user sees Animals first (which is now at the bottom) and can scroll up
  const scrollToBottom = () => {
    const maxScroll = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );
    
    // Force immediate scroll
    window.scrollTo(0, maxScroll);
    document.documentElement.scrollTop = maxScroll;
    document.body.scrollTop = maxScroll;
  };
  
  // Try multiple times with different delays to ensure it works
  setTimeout(scrollToBottom, 100);
  setTimeout(scrollToBottom, 300);
  setTimeout(scrollToBottom, 600);
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
function hideTimeoutPopup() {
  document.getElementById('timeout-modal').classList.add('hidden');
}

function hideErrorPopup() {
  document.getElementById('error-modal').classList.add('hidden');
}

function showCompletePopup(correctCount, starsEarned) {
  const modal = document.getElementById('complete-modal');
  const textEl = document.getElementById('complete-modal-text');
  const starsEl = document.getElementById('complete-modal-coins');
  
  if (textEl) textEl.innerText = t('correctAnswers').replace('{n}', correctCount);
  if (starsEl) {
    if (starsEarned > 0) {
      starsEl.innerText = t('coinsEarned').replace('{n}', starsEarned);
      starsEl.classList.remove('hidden');
    } else {
      starsEl.classList.add('hidden');
    }
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

function startDailyChallenge() {
  const status = getDailyChallengeStatus();
  if (!status.available) {
    console.log('Daily challenge not available:', status);
    return;
  }
  
  // Check if groups are loaded
  if (!window.groups || window.groups.length === 0) {
    console.log('Groups not loaded yet, cannot start daily challenge');
    alert('Please wait for subjects to load and try again.');
    return;
  }
  
  console.log('Starting daily challenge with', window.groups.length, 'subjects loaded');
  
  // Reset challenge state
  isDailyChallenge = true;
  challengeIndex = 0;
  challengeCorrect = 0;
  challengeWrong = 0;
  
  // Get random questions from all groups
  const allQuestions = [];
  window.groups.forEach(group => {
    if (group.levels && group.levels.length > 0) {
      group.levels.forEach(level => {
        if (level.questions && level.questions.length > 0) {
          allQuestions.push(...level.questions);
        }
      });
    }
  });
  
  console.log('Total questions available for daily challenge:', allQuestions.length);
  
  if (allQuestions.length < 5) {
    alert('Not enough questions loaded yet. Please wait and try again.');
    return;
  }
  
  // Select 5 random questions
  challengeQuestions = [...allQuestions]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  
  console.log('Selected 5 questions for daily challenge');
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
  const correctAnswer = q.options[q.correctIndex][lang];
  
  if (answer === correctAnswer) {
    document.getElementById('snd-correct').play();
    challengeCorrect++;
    btn.style.background = '#02B7CE'; // bright cyan
    btn.style.color = '#121C3A';
    btn.style.border = '2px solid #02B7CE';
  } else {
    document.getElementById('snd-wrong').play();
    challengeWrong++;
    btn.style.background = '#F23F5D'; // pinkish red
    btn.style.color = '#FFFFFF';
    btn.style.border = '2px solid #F23F5D';
    
    // Show correct answer
    document.querySelectorAll('#challenge-answers button').forEach(b => {
      if (b.innerText === correctAnswer) {
        b.style.background = '#02B7CE';
        b.style.color = '#121C3A';
        b.style.border = '2px solid #02B7CE';
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
  
  // Award 20 stars and 10 diamonds
  stars += 20;
  diamonds += 10;
  localStorage.setItem('qb_stars', stars.toString());
  localStorage.setItem('qb_diamonds', diamonds.toString());
  updateStarDisplay();
  updateDiamondDisplay();
  updateDailyChallengeButton();
  
  // Show completion modal
  document.getElementById('challenge-complete-modal').classList.remove('hidden');
}

function failDailyChallenge() {
  const today = new Date().toDateString();
  localStorage.setItem('qb_daily_challenge', JSON.stringify({
    date: today,
    completed: false,
    failed: true
  }));
  
  updateDailyChallengeButton();
  updateChallengeResetTimer();
  
  // Show failure modal
  document.getElementById('challenge-failed-modal').classList.remove('hidden');
}

function updateChallengeResetTimer() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  
  const timeDiff = tomorrow.getTime() - now.getTime();
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
  const timeEl = document.getElementById('challenge-reset-time');
  if (timeEl) {
    timeEl.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}

// —— 6.8) Shop functionality ——
function showShop() {
  updateDailyClaimButton();
  updateAdWatchButton();
  showScreen('shop-screen');
}

// Daily diamond claim functionality
function getDailyClaimStatus() {
  const today = new Date().toDateString();
  const claimData = JSON.parse(localStorage.getItem('qb_daily_claim') || '{}');
  
  return {
    available: claimData.date !== today,
    lastClaimed: claimData.date || null
  };
}

function claimDailyDiamonds() {
  const status = getDailyClaimStatus();
  if (!status.available) {
    alert('You have already claimed your daily diamonds today!');
    return;
  }
  
  // Award 5 diamonds
  diamonds += 5;
  localStorage.setItem('qb_diamonds', diamonds.toString());
  updateDiamondDisplay();
  
  // Mark as claimed today
  const today = new Date().toDateString();
  localStorage.setItem('qb_daily_claim', JSON.stringify({
    date: today,
    claimed: true
  }));
  
  // Update button states
  updateDailyClaimButton();
  updateShopButtonIndicator();
  
  alert('🎉 You claimed 5 diamonds! 💎');
}

function updateDailyClaimButton() {
  const claimBtn = document.getElementById('daily-claim-btn');
  if (!claimBtn) return;
  
  const status = getDailyClaimStatus();
  
  if (status.available) {
    claimBtn.disabled = false;
    claimBtn.className = 'bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded';
    claimBtn.innerHTML = '✨ Claim 5 💎';
  } else {
    claimBtn.disabled = true;
    claimBtn.className = 'bg-gray-600 text-white px-4 py-2 rounded cursor-not-allowed';
    claimBtn.innerHTML = '✅ Claimed Today';
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
    indicator.className = 'daily-indicator absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse';
    indicator.innerHTML = '!';
    shopBtn.appendChild(indicator);
    shopBtn.style.position = 'relative';
  }
}

// Ad watching functionality
function getDailyAdWatchStatus() {
  const today = new Date().toDateString();
  const adData = JSON.parse(localStorage.getItem('qb_daily_ads') || '{}');
  
  if (adData.date !== today) {
    // New day, reset ad count
    return { 
      adsWatched: 0, 
      canWatch: true,
      nextReward: 10
    };
  }
  
  const adsWatched = adData.adsWatched || 0;
  const rewards = [10, 25, 50];
  
  return {
    adsWatched: adsWatched,
    canWatch: adsWatched < 3,
    nextReward: adsWatched < 3 ? rewards[adsWatched] : 0
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
    
    // Update ad watch count
    const today = new Date().toDateString();
    const newAdData = {
      date: today,
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
  
  if (!watchBtn || !statusText) return;
  
  const status = getDailyAdWatchStatus();
  
  if (status.canWatch) {
    watchBtn.disabled = false;
    watchBtn.className = 'bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded';
    watchBtn.innerHTML = `📺 Get ${status.nextReward} 💎`;
    statusText.innerText = `${status.adsWatched}/3 ads watched today`;
  } else {
    watchBtn.disabled = true;
    watchBtn.className = 'bg-gray-600 text-white px-4 py-2 rounded cursor-not-allowed';
    watchBtn.innerHTML = '✅ All Done';
    statusText.innerText = '3/3 ads watched today - Come back tomorrow!';
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
    
    // Insert after the answers div
    const answersDiv = document.getElementById('answers');
    answersDiv.parentNode.insertBefore(explanationDiv, answersDiv.nextSibling);
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
        showSubjects();
        break;
      case 'quiz-screen':
        showScreen('levels-screen');
        break;
      case 'daily-challenge-screen':
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
    // Set 10-minute cooldown for this level
    setLevelFailureCooldown(selectedGroupIndex, selectedLevelIndex);
    hideTimeoutPopup();
    showScreen('levels-screen');
    // Refresh level buttons to show cooldown immediately
    openLevels(selectedGroupIndex);
  });
  
  if (timeoutContinueAd) timeoutContinueAd.addEventListener('click', () => {
    continueWithAd('timeout');
  });
  
  if (timeoutContinueGems) timeoutContinueGems.addEventListener('click', () => {
    continueWithGems('timeout');
  });
  
  if (errorModalBack) errorModalBack.addEventListener('click', () => {
    // Set 10-minute cooldown for this level
    setLevelFailureCooldown(selectedGroupIndex, selectedLevelIndex);
    hideErrorPopup();
    showScreen('levels-screen');
    // Refresh level buttons to show cooldown immediately
    openLevels(selectedGroupIndex);
  });
  
  if (errorContinueAd) errorContinueAd.addEventListener('click', () => {
    continueWithAd('error');
  });
  
  if (errorContinueGems) errorContinueGems.addEventListener('click', () => {
    continueWithGems('error');
  });
  
  if (completeNext) completeNext.addEventListener('click', () => {
    hideCompletePopup();
    // Try to go to next level in same subject
    const currentSubject = window.groups[selectedGroupIndex];
    if (selectedLevelIndex + 1 < currentSubject.levels.length) {
      startLevel(selectedGroupIndex, selectedLevelIndex + 1);
    } else {
      showScreen('levels-screen');
    }
  });
  
  if (completeBack) completeBack.addEventListener('click', () => {
    hideCompletePopup();
    // Refresh the levels display to show completed status
    if (typeof selectedGroupIndex !== 'undefined' && window.groups && window.groups[selectedGroupIndex]) {
      openLevels(selectedGroupIndex);
    } else {
      showScreen('levels-screen');
    }
  });

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
  
  // Ensure lang is available globally
  window.lang = lang;
  
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
