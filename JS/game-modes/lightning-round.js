// Lightning Round Challenge Mode Logic
(function() {
  
  // Lightning Round game state
  let lrGameState = {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    totalTimeLeft: 60,
    questionTimeLeft: 5,
    gameTimer: null,
    questionTimer: null,
    gameTimerInterval: null,
    questionTimerInterval: null,
    combo: 0,
    comboMultiplier: 1,
    usedQuestionIds: [],
    isPlaying: false,
    questionsAnswered: 0
  };

  // Cooldown management
  function checkLightningRoundCooldown() {
    const lastPlayed = localStorage.getItem('lr_last_played');
    if (!lastPlayed) return { canPlay: true, timeRemaining: 0 };
    
    const lastPlayedTime = parseInt(lastPlayed);
    const cooldownDuration = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
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

  // Update Lightning Round display
  function updateLightningRoundDisplay() {
    const cooldownStatus = checkLightningRoundCooldown();
    const playBtn = document.getElementById('lr-play-btn');
    const cooldownDiv = document.getElementById('lr-cooldown');
    const timerSpan = document.getElementById('lr-timer');
    const bestScore = localStorage.getItem('lr_best_score') || '-';
    const bestScoreElement = document.getElementById('lr-best-score');
    
    if (bestScoreElement) {
      bestScoreElement.textContent = bestScore === '-' ? '-' : `${bestScore} questions`;
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

  // Anti-repetition system for Lightning Round
  function getUnusedLightningQuestions() {
    if (!window.lightningQuestions) {
      console.error('Lightning Round questions not loaded!');
      return [];
    }

    const recentlyUsed = JSON.parse(localStorage.getItem('lr_recent_questions') || '[]');
    const availableQuestions = window.lightningQuestions.filter(q => 
      !recentlyUsed.includes(q.id)
    );
    
    if (availableQuestions.length < 30) {
      const keepRecent = recentlyUsed.slice(-15);
      localStorage.setItem('lr_recent_questions', JSON.stringify(keepRecent));
      return window.lightningQuestions.filter(q => !keepRecent.includes(q.id));
    }
    
    return availableQuestions;
  }

  // Select questions for the game
  function selectLightningQuestions() {
    const availableQuestions = getUnusedLightningQuestions();
    const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(50, shuffled.length)); // Prepare more than needed
  }

  // Update used questions tracking
  function updateUsedLightningQuestions() {
    const recentlyUsed = JSON.parse(localStorage.getItem('lr_recent_questions') || '[]');
    const answeredQuestions = lrGameState.questions.slice(0, lrGameState.questionsAnswered);
    const newUsedIds = answeredQuestions.map(q => q.id);
    
    const updatedUsed = [...recentlyUsed, ...newUsedIds].slice(-30);
    localStorage.setItem('lr_recent_questions', JSON.stringify(updatedUsed));
  }

  // Start Lightning Round
  function startLightningRound() {
    console.log('Starting Lightning Round...');
    
    const cooldownStatus = checkLightningRoundCooldown();
    if (!cooldownStatus.canPlay) {
      alert(`Lightning Round is on cooldown. Try again in ${formatTimeRemaining(cooldownStatus.timeRemaining)}.`);
      return;
    }
    
    // Reset game state
    lrGameState.questions = selectLightningQuestions();
    lrGameState.currentQuestionIndex = 0;
    lrGameState.score = 0;
    lrGameState.totalTimeLeft = 60;
    lrGameState.questionTimeLeft = 5;
    lrGameState.combo = 0;
    lrGameState.comboMultiplier = 1;
    lrGameState.isPlaying = true;
    lrGameState.questionsAnswered = 0;
    
    if (lrGameState.questions.length === 0) {
      alert('No questions available. Please try again later.');
      return;
    }
    
    // Set cooldown
    localStorage.setItem('lr_last_played', Date.now().toString());
    updateLightningRoundDisplay();
    
    // Show Lightning Round screen
    window.showScreen('lightning-round-screen');
    
    // Start game timer and render first question
    startLightningGameTimer();
    renderLightningQuestion();
    startLightningQuestionTimer();
  }

  // Start 60-second game timer
  function startLightningGameTimer() {
    clearTimeout(lrGameState.gameTimer);
    clearInterval(lrGameState.gameTimerInterval);
    
    lrGameState.gameTimerInterval = setInterval(() => {
      lrGameState.totalTimeLeft--;
      document.getElementById('lr-timer-display').textContent = `${lrGameState.totalTimeLeft}s`;
      
      if (lrGameState.totalTimeLeft <= 0) {
        endLightningRound();
      }
    }, 1000);
  }

  // Start 5-second question timer
  function startLightningQuestionTimer() {
    clearTimeout(lrGameState.questionTimer);
    clearInterval(lrGameState.questionTimerInterval);
    
    lrGameState.questionTimeLeft = 5;
    
    lrGameState.questionTimerInterval = setInterval(() => {
      lrGameState.questionTimeLeft--;
      
      if (lrGameState.questionTimeLeft <= 0) {
        handleLightningAnswer(null); // Time's up
      }
    }, 1000);
  }

  // Calculate combo multiplier
  function updateComboMultiplier() {
    if (lrGameState.combo >= 10) {
      lrGameState.comboMultiplier = 3;
    } else if (lrGameState.combo >= 5) {
      lrGameState.comboMultiplier = 2;
    } else {
      lrGameState.comboMultiplier = 1;
    }
  }

  // Render current question
  function renderLightningQuestion() {
    if (lrGameState.currentQuestionIndex >= lrGameState.questions.length) {
      // No more questions, end game
      endLightningRound();
      return;
    }
    
    const question = lrGameState.questions[lrGameState.currentQuestionIndex];
    const lang = window.lang || 'en';
    
    // Update question text
    document.getElementById('lr-question-text').textContent = question.question[lang];
    
    // Update score and combo display
    document.getElementById('lr-score-display').textContent = `Score: ${lrGameState.score}`;
    document.getElementById('lr-combo').textContent = `x${lrGameState.comboMultiplier}`;
    
    // Create answer buttons
    const answersDiv = document.getElementById('lr-answers');
    answersDiv.innerHTML = '';
    
    question.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded';
      btn.textContent = option[lang];
      btn.disabled = false;
      btn.addEventListener('click', () => handleLightningAnswer(index));
      answersDiv.appendChild(btn);
    });
  }

  // Handle answer selection
  function handleLightningAnswer(selectedIndex) {
    if (!lrGameState.isPlaying) return;
    
    // Stop question timer
    clearTimeout(lrGameState.questionTimer);
    clearInterval(lrGameState.questionTimerInterval);
    
    // Disable buttons
    document.querySelectorAll('#lr-answers button').forEach(btn => btn.disabled = true);
    
    const question = lrGameState.questions[lrGameState.currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctIndex && selectedIndex !== null;
    
    lrGameState.questionsAnswered++;
    
    if (isCorrect) {
      document.getElementById('snd-correct').play();
      
      // Update combo
      lrGameState.combo++;
      updateComboMultiplier();
      
      // Add score with multiplier
      const basePoints = 3;
      const pointsEarned = basePoints * lrGameState.comboMultiplier;
      lrGameState.score += pointsEarned;
      
      // Highlight correct answer
      const buttons = document.querySelectorAll('#lr-answers button');
      if (buttons[selectedIndex]) {
        buttons[selectedIndex].className = 'w-full bg-green-700 text-white font-semibold py-2 rounded';
      }
    } else {
      document.getElementById('snd-wrong').play();
      
      // Reset combo
      lrGameState.combo = 0;
      lrGameState.comboMultiplier = 1;
      
      // Highlight correct and wrong answers
      const buttons = document.querySelectorAll('#lr-answers button');
      if (selectedIndex !== null && buttons[selectedIndex]) {
        buttons[selectedIndex].className = 'w-full bg-red-700 text-white font-semibold py-2 rounded';
      }
      if (buttons[question.correctIndex]) {
        buttons[question.correctIndex].className = 'w-full bg-green-700 text-white font-semibold py-2 rounded';
      }
    }
    
    // Update displays
    document.getElementById('lr-score-display').textContent = `Score: ${lrGameState.score}`;
    document.getElementById('lr-combo').textContent = `x${lrGameState.comboMultiplier}`;
    
    // Move to next question after short delay
    setTimeout(() => {
      nextLightningQuestion();
    }, 800);
  }

  // Move to next question
  function nextLightningQuestion() {
    lrGameState.currentQuestionIndex++;
    
    if (lrGameState.totalTimeLeft <= 0 || lrGameState.currentQuestionIndex >= lrGameState.questions.length) {
      endLightningRound();
    } else {
      renderLightningQuestion();
      startLightningQuestionTimer();
    }
  }

  // End Lightning Round and show results
  function endLightningRound() {
    lrGameState.isPlaying = false;
    clearTimeout(lrGameState.gameTimer);
    clearInterval(lrGameState.gameTimerInterval);
    clearTimeout(lrGameState.questionTimer);
    clearInterval(lrGameState.questionTimerInterval);
    
    // Update used questions tracking
    updateUsedLightningQuestions();
    
    // Calculate stars earned
    let totalStars = lrGameState.score; // Base stars equal to score
    
    // Completion bonus for answering 12+ questions
    if (lrGameState.questionsAnswered >= 12) {
      totalStars += 50;
    }
    
    // Add stars to player
    let stars = parseInt(localStorage.getItem('qb_stars') || '0');
    stars += totalStars;
    localStorage.setItem('qb_stars', stars.toString());
    window.updateStarDisplay();
    
    // Update best score
    const currentBest = parseInt(localStorage.getItem('lr_best_score') || '0');
    if (lrGameState.questionsAnswered > currentBest) {
      localStorage.setItem('lr_best_score', lrGameState.questionsAnswered.toString());
      updateLightningRoundDisplay();
    }
    
    // Show completion message
    const completionBonus = lrGameState.questionsAnswered >= 12 ? 50 : 0;
    const message = `Lightning Round Complete!\n\nQuestions answered: ${lrGameState.questionsAnswered}\nTotal score: ${lrGameState.score}\nCompletion bonus: ${completionBonus}\nTotal stars earned: ${totalStars}\n\nExcellent speed!`;
    alert(message);
    
    // Return to challenge modes screen
    window.showScreen('challenge-modes-screen');
  }

  // Initialize Lightning Round mode
  function initializeLightningRound() {
    console.log('Initializing Lightning Round...');
    
    // Add event listeners
    document.getElementById('lr-play-btn')?.addEventListener('click', startLightningRound);
    
    // Update display
    updateLightningRoundDisplay();
    
    // Update cooldown display every minute
    setInterval(updateLightningRoundDisplay, 60000);
    
    console.log('Lightning Round initialized');
  }

  // Export functions
  window.startLightningRound = startLightningRound;
  window.initializeLightningRound = initializeLightningRound;
  window.updateLightningRoundDisplay = updateLightningRoundDisplay;
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLightningRound);
  } else {
    initializeLightningRound();
  }
  
})();