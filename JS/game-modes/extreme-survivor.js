// Extreme Survivor Mode Challenge Mode Logic
(function() {
  
  // Extreme Survivor Mode game state
  let esmGameState = {
    currentTier: 'brain-teaser', // Starts at Brain Teaser
    tierProgress: 0, // Questions answered in current tier (0-1, advance at 2)
    totalScore: 0,
    currentQuestionIndex: 0,
    timeLeft: 8,
    timer: null,
    timerInterval: null,
    isPlaying: false,
    currentQuestions: [],
    usedQuestions: {
      'brain-teaser': [],
      'mind-bender': [],
      'mastermind': [],
      'impossible-mode': []
    }
  };

  // Extreme tier configuration (starts at Brain Teaser)
  const extremeTierConfig = {
    'brain-teaser': {
      name: { en: 'Brain Teaser', es: 'Rompecabezas', de: 'Gehirntrainer', nl: 'Hersenbreker' },
      icon: '🧩',
      starsPerQuestion: 12,
      tierBonus: 50,
      nextTier: 'mind-bender'
    },
    'mind-bender': {
      name: { en: 'Mind Bender', es: 'Dobla Mentes', de: 'Gedankenbrecher', nl: 'Geestverbuiger' },
      icon: '🌀',
      starsPerQuestion: 18,
      tierBonus: 50,
      nextTier: 'mastermind'
    },
    'mastermind': {
      name: { en: 'Mastermind', es: 'Mente Maestra', de: 'Mastermind', nl: 'Meesterbrein' },
      icon: '🧠',
      starsPerQuestion: 25,
      tierBonus: 50,
      nextTier: 'impossible-mode'
    },
    'impossible-mode': {
      name: { en: 'Impossible Mode', es: 'Modo Imposible', de: 'Unmöglicher Modus', nl: 'Onmogelijke Modus' },
      icon: '🚫',
      starsPerQuestion: 35,
      tierBonus: 50,
      nextTier: null
    }
  };

  // Cooldown management
  function checkExtremeSurvivorCooldown() {
    const lastPlayed = localStorage.getItem('esm_last_played');
    if (!lastPlayed) return { canPlay: true, timeRemaining: 0 };
    
    const lastPlayedTime = parseInt(lastPlayed);
    const cooldownDuration = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
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

  // Update Extreme Survivor Mode display
  function updateExtremeSurvivorDisplay() {
    const cooldownStatus = checkExtremeSurvivorCooldown();
    const playBtn = document.getElementById('esm-play-btn');
    const cooldownDiv = document.getElementById('esm-cooldown');
    const timerSpan = document.getElementById('esm-timer');
    const bestTier = localStorage.getItem('esm_best_tier') || '-';
    const bestTierElement = document.getElementById('esm-best-tier');
    
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
    // Use QuestionPool service to get questions
    if (!window.QuestionPool) {
      console.error('QuestionPool service not loaded!');
      return [];
    }

    // Map tier to difficulty (Extreme mode starts at brain-teaser, goes harder faster)
    const tierDifficultyMap = {
      'brain-teaser': 'medium',
      'mind-bender': 'hard',
      'mastermind': 'hard',
      'impossible-mode': 'hard'
    };

    const difficulty = tierDifficultyMap[tier] || 'hard';

    // Get all questions for this difficulty from QuestionPool
    const allQuestions = window.QuestionPool.getQuestionsByDifficulty(difficulty, 100);

    if (allQuestions.length === 0) {
      console.error(`No questions available for tier: ${tier}!`);
      return [];
    }

    // Generate unique ID for each question if not present
    const questionsWithIds = allQuestions.map((q, index) => ({
      ...q,
      id: q.id || `${q.metadata.topic.en}_${q.metadata.subcategory.en}_${q.metadata.level}_${index}`,
      // Convert to Extreme Survivor Mode format
      correctIndex: q.correct  // Map 'correct' to 'correctIndex' for consistency
    }));

    const recentlyUsed = esmGameState.usedQuestions[tier];
    const availableQuestions = questionsWithIds.filter(q =>
      !recentlyUsed.includes(q.id)
    );

    // If we don't have enough questions, reset the pool but keep the last few
    if (availableQuestions.length < 3) {
      const keepRecent = recentlyUsed.slice(-3);
      esmGameState.usedQuestions[tier] = keepRecent;
      return questionsWithIds.filter(q => !keepRecent.includes(q.id));
    }

    return availableQuestions;
  }

  // Select next question
  function selectNextExtremeQuestion() {
    const availableQuestions = getUnusedQuestionsForTier(esmGameState.currentTier);
    if (availableQuestions.length === 0) {
      console.error('No questions available for tier:', esmGameState.currentTier);
      return null;
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const selectedQuestion = availableQuestions[randomIndex];
    
    // Add to used questions
    esmGameState.usedQuestions[esmGameState.currentTier].push(selectedQuestion.id);
    
    return selectedQuestion;
  }

  // Start Extreme Survivor Mode
  function startExtremeSurvivorMode() {
    console.log('Starting Extreme Survivor Mode...');
    
    const cooldownStatus = checkExtremeSurvivorCooldown();
    if (!cooldownStatus.canPlay) {
      alert(`Extreme Survivor Mode is on cooldown. Try again in ${formatTimeRemaining(cooldownStatus.timeRemaining)}.`);
      return;
    }
    
    // Reset game state
    esmGameState.currentTier = 'brain-teaser';
    esmGameState.tierProgress = 0;
    esmGameState.totalScore = 0;
    esmGameState.currentQuestionIndex = 0;
    esmGameState.timeLeft = 8;
    esmGameState.isPlaying = true;
    
    // Reset used questions for this session
    Object.keys(esmGameState.usedQuestions).forEach(tier => {
      esmGameState.usedQuestions[tier] = [];
    });
    
    // Set cooldown
    localStorage.setItem('esm_last_played', Date.now().toString());
    updateExtremeSurvivorDisplay();
    
    // Show Extreme Survivor screen
    window.showScreen('extreme-survivor-screen');
    
    // Initialize UI
    updateExtremeSurvivorUI();
    
    // Start first question
    nextExtremeSurvivorQuestion();
  }

  // Update Extreme Survivor Mode UI
  function updateExtremeSurvivorUI() {
    const lang = window.lang || 'en';
    const config = extremeTierConfig[esmGameState.currentTier];
    
    // Update tier display
    document.getElementById('esm-current-tier').textContent = `${config.icon} ${config.name[lang]}`;
    
    // Update progress bar (2 questions per tier instead of 3)
    const progressPercent = (esmGameState.tierProgress / 2) * 100;
    document.getElementById('esm-progress-bar').style.width = `${progressPercent}%`;
    document.getElementById('esm-progress-text').textContent = 
      `${esmGameState.tierProgress}/2 questions to next tier`;
    
    // Update score
    document.getElementById('esm-score-display').textContent = 
      `Score: ${esmGameState.totalScore} stars`;
    
    // Update timer
    document.getElementById('esm-timer-display').textContent = `${esmGameState.timeLeft}s`;
  }

  // Start timer for current question
  function startExtremeSurvivorTimer() {
    clearTimeout(esmGameState.timer);
    clearInterval(esmGameState.timerInterval);
    
    esmGameState.timeLeft = 8;
    
    esmGameState.timerInterval = setInterval(() => {
      esmGameState.timeLeft--;
      document.getElementById('esm-timer-display').textContent = `${esmGameState.timeLeft}s`;
      
      if (esmGameState.timeLeft <= 0) {
        handleExtremeSurvivorAnswer(null); // Time's up
      }
    }, 1000);
  }

  // Render current question
  function renderExtremeSurvivorQuestion(question) {
    const lang = window.lang || 'en';
    
    // Update question text
    document.getElementById('esm-question-text').textContent = question.question[lang];
    
    // Create answer buttons
    const answersDiv = document.getElementById('esm-answers');
    answersDiv.innerHTML = '';
    
    question.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded';
      btn.textContent = option[lang];
      btn.disabled = false;
      btn.addEventListener('click', () => handleExtremeSurvivorAnswer(index));
      answersDiv.appendChild(btn);
    });
  }

  // Handle answer selection
  function handleExtremeSurvivorAnswer(selectedIndex) {
    if (!esmGameState.isPlaying) return;
    
    // Stop timer
    clearTimeout(esmGameState.timer);
    clearInterval(esmGameState.timerInterval);
    
    // Disable buttons
    document.querySelectorAll('#esm-answers button').forEach(btn => btn.disabled = true);
    
    const currentQuestion = esmGameState.currentQuestion;
    const isCorrect = selectedIndex === currentQuestion.correctIndex && selectedIndex !== null;
    
    if (isCorrect) {
      document.getElementById('snd-correct').play();
      
      // Award stars
      const starsEarned = extremeTierConfig[esmGameState.currentTier].starsPerQuestion;
      esmGameState.totalScore += starsEarned;
      
      // Advance tier progress
      esmGameState.tierProgress++;
      
      // Highlight correct answer
      const buttons = document.querySelectorAll('#esm-answers button');
      if (buttons[selectedIndex]) {
        buttons[selectedIndex].className = 'w-full bg-green-800 text-white font-semibold py-2 rounded';
      }
      
      // Check for tier advancement (every 2 questions instead of 3)
      if (esmGameState.tierProgress >= 2) {
        advanceToNextExtremeTier();
      }
      
      // Update UI and continue
      updateExtremeSurvivorUI();
      
      setTimeout(() => {
        nextExtremeSurvivorQuestion();
      }, 1500);
    } else {
      document.getElementById('snd-wrong').play();
      
      // Highlight correct and wrong answers
      const buttons = document.querySelectorAll('#esm-answers button');
      if (selectedIndex !== null && buttons[selectedIndex]) {
        buttons[selectedIndex].className = 'w-full bg-red-800 text-white font-semibold py-2 rounded';
      }
      if (buttons[currentQuestion.correctIndex]) {
        buttons[currentQuestion.correctIndex].className = 'w-full bg-green-800 text-white font-semibold py-2 rounded';
      }
      
      // Game over immediately (one life only)
      setTimeout(() => endExtremeSurvivorMode(false), 1500);
    }
  }

  // Advance to next tier
  function advanceToNextExtremeTier() {
    const currentConfig = extremeTierConfig[esmGameState.currentTier];
    
    // Award tier bonus
    esmGameState.totalScore += currentConfig.tierBonus;
    
    // Check if there's a next tier
    if (!currentConfig.nextTier) {
      // Game complete!
      setTimeout(() => endExtremeSurvivorMode(true), 1500);
      return;
    }
    
    // Advance to next tier
    esmGameState.currentTier = currentConfig.nextTier;
    esmGameState.tierProgress = 0;
    
    console.log(`Advanced to extreme tier: ${esmGameState.currentTier}`);
  }

  // Move to next question
  function nextExtremeSurvivorQuestion() {
    const question = selectNextExtremeQuestion();
    if (!question) {
      endExtremeSurvivorMode(false);
      return;
    }
    
    esmGameState.currentQuestion = question;
    renderExtremeSurvivorQuestion(question);
    updateExtremeSurvivorUI();
    startExtremeSurvivorTimer();
  }

  // End Extreme Survivor Mode
  function endExtremeSurvivorMode(completed) {
    esmGameState.isPlaying = false;
    clearTimeout(esmGameState.timer);
    clearInterval(esmGameState.timerInterval);
    
    // Add stars to player
    let stars = parseInt(localStorage.getItem('qb_stars') || '0');
    stars += esmGameState.totalScore;
    localStorage.setItem('qb_stars', stars.toString());
    window.updateCoinDisplay();
    
    // Update best tier
    const tierNames = Object.keys(extremeTierConfig);
    const currentTierIndex = tierNames.indexOf(esmGameState.currentTier);
    const currentBest = localStorage.getItem('esm_best_tier') || '';
    const bestTierIndex = tierNames.indexOf(currentBest);
    
    if (currentTierIndex > bestTierIndex) {
      const lang = window.lang || 'en';
      const tierDisplayName = extremeTierConfig[esmGameState.currentTier].name[lang];
      localStorage.setItem('esm_best_tier', tierDisplayName);
      updateExtremeSurvivorDisplay();
    }
    
    // Show completion message
    let message;
    if (completed) {
      message = `💀 LEGENDARY! You've mastered Extreme Survival!\n\nFinal Score: ${esmGameState.totalScore} stars\nYou are the ultimate quiz champion!`;
    } else {
      const lang = window.lang || 'en';
      const tierName = extremeTierConfig[esmGameState.currentTier].name[lang];
      message = `💀 Extreme Survival Complete!\n\nReached: ${tierName}\nScore: ${esmGameState.totalScore} stars\nThat was intense!`;
    }
    alert(message);
    
    // Return to challenge modes screen
    window.showScreen('challenge-modes-screen');
  }

  // Initialize Extreme Survivor Mode
  function initializeExtremeSurvivorMode() {
    console.log('Initializing Extreme Survivor Mode...');
    
    // Add event listeners
    document.getElementById('esm-play-btn')?.addEventListener('click', startExtremeSurvivorMode);
    
    // Update display
    updateExtremeSurvivorDisplay();
    
    // Update cooldown display every minute
    setInterval(updateExtremeSurvivorDisplay, 60000);
    
    console.log('Extreme Survivor Mode initialized');
  }

  // Export functions
  window.startExtremeSurvivorMode = startExtremeSurvivorMode;
  window.initializeExtremeSurvivorMode = initializeExtremeSurvivorMode;
  window.updateExtremeSurvivorDisplay = updateExtremeSurvivorDisplay;
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeExtremeSurvivorMode);
  } else {
    initializeExtremeSurvivorMode();
  }
  
})();