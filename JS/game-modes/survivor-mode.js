// Survivor Mode Challenge Mode Logic
(function() {
  
  // Survivor Mode game state
  let smGameState = {
    currentTier: 'warm-up',
    tierProgress: 0, // Questions answered in current tier (0-2, advance at 3)
    lives: 3,
    totalScore: 0,
    currentQuestionIndex: 0,
    timeLeft: 12,
    timer: null,
    timerInterval: null,
    isPlaying: false,
    currentQuestions: [],
    usedQuestions: {
      'warm-up': [],
      'brain-teaser': [],
      'mind-bender': [],
      'mastermind': [],
      'impossible-mode': []
    }
  };

  // Tier configuration
  const tierConfig = {
    'warm-up': {
      name: { en: 'Warm-Up', es: 'Calentamiento', de: 'Aufwärmen', nl: 'Opwarming' },
      icon: '🔥',
      starsPerQuestion: 5,
      tierBonus: 30,
      nextTier: 'brain-teaser'
    },
    'brain-teaser': {
      name: { en: 'Brain Teaser', es: 'Rompecabezas', de: 'Gehirntrainer', nl: 'Hersenbreker' },
      icon: '🧩',
      starsPerQuestion: 8,
      tierBonus: 30,
      nextTier: 'mind-bender'
    },
    'mind-bender': {
      name: { en: 'Mind Bender', es: 'Dobla Mentes', de: 'Gedankenbrecher', nl: 'Geestverbuiger' },
      icon: '🌀',
      starsPerQuestion: 12,
      tierBonus: 30,
      nextTier: 'mastermind'
    },
    'mastermind': {
      name: { en: 'Mastermind', es: 'Mente Maestra', de: 'Mastermind', nl: 'Meesterbrein' },
      icon: '🧠',
      starsPerQuestion: 18,
      tierBonus: 30,
      nextTier: 'impossible-mode'
    },
    'impossible-mode': {
      name: { en: 'Impossible Mode', es: 'Modo Imposible', de: 'Unmöglicher Modus', nl: 'Onmogelijke Modus' },
      icon: '🚫',
      starsPerQuestion: 25,
      tierBonus: 30,
      nextTier: null
    }
  };

  // Cooldown management
  function checkSurvivorCooldown() {
    const lastPlayed = localStorage.getItem('sm_last_played');
    if (!lastPlayed) return { canPlay: true, timeRemaining: 0 };
    
    const lastPlayedTime = parseInt(lastPlayed);
    const cooldownDuration = 4 * 60 * 60 * 1000; // 4 hours in milliseconds
    const now = Date.now();
    const timePassed = now - lastPlayedTime;
    
    if (timePassed >= cooldownDuration) {
      return { canPlay: true, timeRemaining: 0 };
    }
    
    return { 
      canPlay: false, 
      timeRemaining: cooldownDuration - timePassed 
    };
  }

  // Format time remaining for display
  function formatTimeRemaining(ms) {
    const hours = Math.floor(ms / (60 * 60 * 1000));
    const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${minutes}m`;
    }
  }

  // Update Survivor Mode display
  function updateSurvivorDisplay() {
    const cooldownStatus = checkSurvivorCooldown();
    const playBtn = document.getElementById('sm-play-btn');
    const cooldownDiv = document.getElementById('sm-cooldown');
    const timerSpan = document.getElementById('sm-timer');
    const bestTier = localStorage.getItem('sm_best_tier') || '-';
    const bestTierElement = document.getElementById('sm-best-tier');
    
    if (bestTierElement) {
      bestTierElement.textContent = bestTier === '-' ? '-' : bestTier;
    }
    
    if (cooldownStatus.canPlay) {
      playBtn.style.display = 'block';
      cooldownDiv.classList.add('hidden');
    } else {
      playBtn.style.display = 'none';
      cooldownDiv.classList.remove('hidden');
      timerSpan.textContent = formatTimeRemaining(cooldownStatus.timeRemaining);
    }
  }

  // Get unused questions for current tier
  function getUnusedQuestionsForTier(tier) {
    if (!window.survivorQuestions || !window.survivorQuestions[tier]) {
      console.error(`Survivor questions not loaded for tier: ${tier}!`);
      return [];
    }

    const recentlyUsed = smGameState.usedQuestions[tier];
    const availableQuestions = window.survivorQuestions[tier].filter(q => 
      !recentlyUsed.includes(q.id)
    );
    
    // If we don't have enough questions, reset the pool but keep the last few
    if (availableQuestions.length < 3) {
      const keepRecent = recentlyUsed.slice(-5);
      smGameState.usedQuestions[tier] = keepRecent;
      return window.survivorQuestions[tier].filter(q => !keepRecent.includes(q.id));
    }
    
    return availableQuestions;
  }

  // Select next question
  function selectNextQuestion() {
    const availableQuestions = getUnusedQuestionsForTier(smGameState.currentTier);
    if (availableQuestions.length === 0) {
      console.error('No questions available for tier:', smGameState.currentTier);
      return null;
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const selectedQuestion = availableQuestions[randomIndex];
    
    // Add to used questions
    smGameState.usedQuestions[smGameState.currentTier].push(selectedQuestion.id);
    
    return selectedQuestion;
  }

  // Start Survivor Mode
  function startSurvivorMode() {
    console.log('Starting Survivor Mode...');
    
    const cooldownStatus = checkSurvivorCooldown();
    if (!cooldownStatus.canPlay) {
      alert(`Survivor Mode is on cooldown. Try again in ${formatTimeRemaining(cooldownStatus.timeRemaining)}.`);
      return;
    }
    
    // Reset game state
    smGameState.currentTier = 'warm-up';
    smGameState.tierProgress = 0;
    smGameState.lives = 3;
    smGameState.totalScore = 0;
    smGameState.currentQuestionIndex = 0;
    smGameState.timeLeft = 12;
    smGameState.isPlaying = true;
    
    // Reset used questions for this session
    Object.keys(smGameState.usedQuestions).forEach(tier => {
      smGameState.usedQuestions[tier] = [];
    });
    
    // Set cooldown
    localStorage.setItem('sm_last_played', Date.now().toString());
    updateSurvivorDisplay();
    
    // Show Survivor screen
    window.showScreen('survivor-screen');
    
    // Initialize UI
    updateSurvivorUI();
    
    // Start first question
    nextSurvivorQuestion();
  }

  // Update Survivor Mode UI
  function updateSurvivorUI() {
    const lang = window.lang || 'en';
    const config = tierConfig[smGameState.currentTier];
    
    // Update tier display
    document.getElementById('sm-current-tier').textContent = `${config.icon} ${config.name[lang]}`;
    
    // Update lives
    const livesDiv = document.getElementById('sm-lives');
    livesDiv.innerHTML = '';
    for (let i = 0; i < smGameState.lives; i++) {
      const heart = document.createElement('span');
      heart.className = 'text-red-500 text-xl';
      heart.textContent = '❤️';
      livesDiv.appendChild(heart);
    }
    
    // Update progress bar
    const progressPercent = (smGameState.tierProgress / 3) * 100;
    document.getElementById('sm-progress-bar').style.width = `${progressPercent}%`;
    document.getElementById('sm-progress-text').textContent = 
      `${smGameState.tierProgress}/3 questions to next tier`;
    
    // Update score
    document.getElementById('sm-score-display').textContent = 
      `Score: ${smGameState.totalScore} stars`;
    
    // Update timer
    document.getElementById('sm-timer-display').textContent = `${smGameState.timeLeft}s`;
  }

  // Start timer for current question
  function startSurvivorTimer() {
    clearTimeout(smGameState.timer);
    clearInterval(smGameState.timerInterval);
    
    smGameState.timeLeft = 12;
    
    smGameState.timerInterval = setInterval(() => {
      smGameState.timeLeft--;
      document.getElementById('sm-timer-display').textContent = `${smGameState.timeLeft}s`;
      
      if (smGameState.timeLeft <= 0) {
        handleSurvivorAnswer(null); // Time's up
      }
    }, 1000);
  }

  // Render current question
  function renderSurvivorQuestion(question) {
    const lang = window.lang || 'en';
    
    // Update question text
    document.getElementById('sm-question-text').textContent = question.question[lang];
    
    // Create answer buttons
    const answersDiv = document.getElementById('sm-answers');
    answersDiv.innerHTML = '';
    
    question.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded';
      btn.textContent = option[lang];
      btn.disabled = false;
      btn.addEventListener('click', () => handleSurvivorAnswer(index));
      answersDiv.appendChild(btn);
    });
  }

  // Handle answer selection
  function handleSurvivorAnswer(selectedIndex) {
    if (!smGameState.isPlaying) return;
    
    // Stop timer
    clearTimeout(smGameState.timer);
    clearInterval(smGameState.timerInterval);
    
    // Disable buttons
    document.querySelectorAll('#sm-answers button').forEach(btn => btn.disabled = true);
    
    const currentQuestion = smGameState.currentQuestion;
    const isCorrect = selectedIndex === currentQuestion.correctIndex && selectedIndex !== null;
    
    if (isCorrect) {
      document.getElementById('snd-correct').play();
      
      // Award stars
      const starsEarned = tierConfig[smGameState.currentTier].starsPerQuestion;
      smGameState.totalScore += starsEarned;
      
      // Advance tier progress
      smGameState.tierProgress++;
      
      // Highlight correct answer
      const buttons = document.querySelectorAll('#sm-answers button');
      if (buttons[selectedIndex]) {
        buttons[selectedIndex].className = 'w-full bg-green-800 text-white font-semibold py-2 rounded';
      }
      
      // Check for tier advancement
      if (smGameState.tierProgress >= 3) {
        advanceToNextTier();
      }
    } else {
      document.getElementById('snd-wrong').play();
      
      // Lose a life
      smGameState.lives--;
      
      // Highlight correct and wrong answers
      const buttons = document.querySelectorAll('#sm-answers button');
      if (selectedIndex !== null && buttons[selectedIndex]) {
        buttons[selectedIndex].className = 'w-full bg-red-800 text-white font-semibold py-2 rounded';
      }
      if (buttons[currentQuestion.correctIndex]) {
        buttons[currentQuestion.correctIndex].className = 'w-full bg-green-800 text-white font-semibold py-2 rounded';
      }
      
      // Check for game over
      if (smGameState.lives <= 0) {
        setTimeout(() => endSurvivorMode(false), 1500);
        return;
      }
    }
    
    // Update UI
    updateSurvivorUI();
    
    // Continue to next question after delay
    setTimeout(() => {
      nextSurvivorQuestion();
    }, 1500);
  }

  // Advance to next tier
  function advanceToNextTier() {
    const currentConfig = tierConfig[smGameState.currentTier];
    
    // Award tier bonus
    smGameState.totalScore += currentConfig.tierBonus;
    
    // Check if there's a next tier
    if (!currentConfig.nextTier) {
      // Game complete!
      setTimeout(() => endSurvivorMode(true), 1500);
      return;
    }
    
    // Advance to next tier
    smGameState.currentTier = currentConfig.nextTier;
    smGameState.tierProgress = 0;
    
    console.log(`Advanced to tier: ${smGameState.currentTier}`);
  }

  // Move to next question
  function nextSurvivorQuestion() {
    const question = selectNextQuestion();
    if (!question) {
      endSurvivorMode(false);
      return;
    }
    
    smGameState.currentQuestion = question;
    renderSurvivorQuestion(question);
    updateSurvivorUI();
    startSurvivorTimer();
  }

  // End Survivor Mode
  function endSurvivorMode(completed) {
    smGameState.isPlaying = false;
    clearTimeout(smGameState.timer);
    clearInterval(smGameState.timerInterval);
    
    // Add stars to player
    let stars = parseInt(localStorage.getItem('qb_stars') || '0');
    stars += smGameState.totalScore;
    localStorage.setItem('qb_stars', stars.toString());
    window.updateCoinDisplay();
    
    // Update best tier
    const tierNames = Object.keys(tierConfig);
    const currentTierIndex = tierNames.indexOf(smGameState.currentTier);
    const currentBest = localStorage.getItem('sm_best_tier') || '';
    const bestTierIndex = tierNames.indexOf(currentBest);
    
    if (currentTierIndex > bestTierIndex) {
      const lang = window.lang || 'en';
      const tierDisplayName = tierConfig[smGameState.currentTier].name[lang];
      localStorage.setItem('sm_best_tier', tierDisplayName);
      updateSurvivorDisplay();
    }
    
    // Show completion message
    let message;
    if (completed) {
      message = `🏆 INCREDIBLE! You've conquered all tiers!\n\nFinal Score: ${smGameState.totalScore} stars\nYou are truly a quiz master!`;
    } else {
      const lang = window.lang || 'en';
      const tierName = tierConfig[smGameState.currentTier].name[lang];
      message = `Survivor Mode Complete!\n\nReached: ${tierName}\nScore: ${smGameState.totalScore} stars\nGreat effort!`;
    }
    alert(message);
    
    // Return to challenge modes screen
    window.showScreen('challenge-modes-screen');
  }

  // Initialize Survivor Mode
  function initializeSurvivorMode() {
    console.log('Initializing Survivor Mode...');
    
    // Add event listeners
    document.getElementById('sm-play-btn')?.addEventListener('click', startSurvivorMode);
    
    // Update display
    updateSurvivorDisplay();
    
    // Update cooldown display every minute
    setInterval(updateSurvivorDisplay, 60000);
    
    console.log('Survivor Mode initialized');
  }

  // Export functions
  window.startSurvivorMode = startSurvivorMode;
  window.initializeSurvivorMode = initializeSurvivorMode;
  window.updateSurvivorDisplay = updateSurvivorDisplay;
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSurvivorMode);
  } else {
    initializeSurvivorMode();
  }
  
})();