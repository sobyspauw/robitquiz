// Lightning Round Challenge Mode Logic
(function() {
  
  // Lightning Round game state
  let lrGameState = {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    totalTimeLeft: 60,
    gameTimer: null,
    gameTimerInterval: null,
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
    const overlay = document.getElementById('lr-cooldown-overlay');
    const timerElement = document.getElementById('lr-cooldown-timer');

    if (bestScoreElement) {
      bestScoreElement.textContent = bestScore === '-' ? '-' : `${bestScore} questions`;
    }

    if (cooldownStatus.canPlay) {
      if (playBtn) playBtn.style.display = 'block';
      if (cooldownDiv) cooldownDiv.classList.add('hidden');

      // Hide overlay
      if (overlay) {
        overlay.classList.add('hidden');
        overlay.onclick = null;
      }
    } else {
      if (playBtn) playBtn.style.display = 'none'; // Hide play button
      if (cooldownDiv) cooldownDiv.classList.add('hidden'); // Hide text cooldown message

      // Show overlay with timer
      if (overlay && timerElement) {
        const hours = Math.floor(cooldownStatus.timeRemaining / (60 * 60 * 1000));
        const minutes = Math.floor((cooldownStatus.timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
        timerElement.textContent = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
        overlay.classList.remove('hidden');

        // Add click handler to show modal
        overlay.onclick = () => {
          if (typeof window.showGameModeLockedModal === 'function') {
            window.showGameModeLockedModal('lightning-round', 'lr_last_played', cooldownStatus.timeRemaining);
          }
        };
      }
    }
  }

  // Anti-repetition system for Lightning Round
  function getUnusedLightningQuestions() {
    // Use QuestionPool service to get all questions
    if (!window.QuestionPool) {
      console.error('QuestionPool service not loaded!');
      return [];
    }

    // Get all questions from normal game mode
    const allQuestions = window.QuestionPool.getAllQuestions();

    if (allQuestions.length === 0) {
      console.error('No questions available from QuestionPool!');
      return [];
    }

    // Generate unique ID for each question if not present
    const questionsWithIds = allQuestions.map((q, index) => ({
      ...q,
      id: q.id || `${q.metadata.topic.en}_${q.metadata.subcategory.en}_${q.metadata.level}_${index}`,
      // Convert to Lightning Round format
      correctIndex: q.correct  // Map 'correct' to 'correctIndex' for consistency
    }));

    const recentlyUsed = JSON.parse(localStorage.getItem('lr_recent_questions') || '[]');
    const availableQuestions = questionsWithIds.filter(q =>
      !recentlyUsed.includes(q.id)
    );

    // If we're running low on unused questions, reset the recent list
    if (availableQuestions.length < 30) {
      const keepRecent = recentlyUsed.slice(-15);
      localStorage.setItem('lr_recent_questions', JSON.stringify(keepRecent));
      return questionsWithIds.filter(q => !keepRecent.includes(q.id));
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
  async function startLightningRound() {
    console.log('Starting Lightning Round...');

    const cooldownStatus = checkLightningRoundCooldown();
    if (!cooldownStatus.canPlay) {
      alert(`Lightning Round is on cooldown. Try again in ${formatTimeRemaining(cooldownStatus.timeRemaining)}.`);
      return;
    }

    // Set modal cooldown text for lightning mode
    if (typeof window.setModalCooldownText === 'function') {
      window.setModalCooldownText('lightning');
    }

    // Check if questions are already loaded, if not load them
    if (window.QuestionPool && window.QuestionPool.getAllQuestions().length === 0) {
      try {
        console.log('Questions not preloaded, loading now...');
        await window.QuestionPool.loadAllQuestionsAsync();
      } catch (error) {
        console.error('Failed to load questions:', error);
        alert('Failed to load questions. Please try again later.');
        return;
      }
    } else {
      console.log('Using preloaded questions for Lightning Round');
    }

    // Reset game state
    lrGameState.questions = selectLightningQuestions();
    lrGameState.currentQuestionIndex = 0;
    lrGameState.score = 0;
    lrGameState.totalTimeLeft = 60;
    lrGameState.combo = 0;
    lrGameState.comboMultiplier = 1;
    lrGameState.isPlaying = true;
    lrGameState.questionsAnswered = 0;

    // Hide back button during game
    if (typeof updateTopBar === 'function') updateTopBar('lightning-round-screen');

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

    // Hide explanation from previous question
    document.getElementById('lr-explanation').classList.add('hidden');

    // Create answer buttons
    const answersDiv = document.getElementById('lr-answers');
    answersDiv.innerHTML = '';

    question.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded';
      btn.textContent = option[lang];
      btn.disabled = false;
      btn.addEventListener('click', () => handleLightningAnswer(index));

      // Admin Mode: Highlight correct answer
      if (window.adminModeActive && index === question.correctIndex) {
        btn.style.backgroundColor = '#fef08a'; // yellow-200
        btn.style.border = '3px solid #eab308'; // yellow-500
        btn.style.color = '#000000'; // black text for better contrast
        console.log('🔍 Admin Mode (Lightning Round): Highlighted correct answer');
      }

      answersDiv.appendChild(btn);
    });
  }

  // Handle answer selection
  function handleLightningAnswer(selectedIndex) {
    if (!lrGameState.isPlaying) return;

    // PAUSE the game timer when showing explanation
    clearInterval(lrGameState.gameTimerInterval);

    // Disable buttons
    document.querySelectorAll('#lr-answers button').forEach(btn => btn.disabled = true);

    const question = lrGameState.questions[lrGameState.currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctIndex && selectedIndex !== null;

    lrGameState.questionsAnswered++;

    if (isCorrect) {
      document.getElementById('snd-correct').play();

      // Show large checkmark in center of screen
      if (typeof window.showFeedbackIcon === 'function') {
        window.showFeedbackIcon('✓', '#22c55e');
      }

      // Update combo
      lrGameState.combo++;
      updateComboMultiplier();

      // Add score with multiplier
      const basePoints = 3;
      const pointsEarned = basePoints * lrGameState.comboMultiplier;
      lrGameState.score += pointsEarned;

      // Add border to correct answer based on theme
      const isLightMode = document.body.classList.contains('light-mode');
      const borderColor = isLightMode ? '#1f2937' : '#ffffff';
      const buttons = document.querySelectorAll('#lr-answers button');

      if (buttons[selectedIndex]) {
        buttons[selectedIndex].style.border = `4px solid ${borderColor}`;
      }
    } else {
      document.getElementById('snd-wrong').play();

      // Show large cross in center of screen
      if (typeof window.showFeedbackIcon === 'function') {
        window.showFeedbackIcon('✗', '#F23F5D');
      }

      // Reset combo
      lrGameState.combo = 0;
      lrGameState.comboMultiplier = 1;

      // Show correct answer with border based on theme
      const isLightMode = document.body.classList.contains('light-mode');
      const borderColor = isLightMode ? '#1f2937' : '#ffffff';
      const buttons = document.querySelectorAll('#lr-answers button');

      // Correct answer - add border based on theme
      if (buttons[question.correctIndex]) {
        buttons[question.correctIndex].style.border = `4px solid ${borderColor}`;
      }
    }

    // Update displays
    document.getElementById('lr-score-display').textContent = `Score: ${lrGameState.score}`;
    document.getElementById('lr-combo').textContent = `x${lrGameState.comboMultiplier}`;

    // Check if explanations are enabled
    const showExplanations = document.getElementById('explanations-toggle')?.checked ?? true;
    const lang = localStorage.getItem('language') || 'en';

    if (showExplanations && question.explanation && question.explanation[lang]) {
      // Show explanation with continue button (timer is paused)
      const explanationContainer = document.getElementById('lr-explanation');
      const explanationText = document.getElementById('lr-explanation-text');
      explanationText.textContent = question.explanation[lang];
      explanationContainer.classList.remove('hidden');

      // Timer will resume when continue button is clicked
    } else {
      // Auto-advance after delay when explanations are off
      lrGameState.nextQuestionTimer = setTimeout(() => {
        if (lrGameState.isPlaying) {
          nextLightningQuestion();
        }
      }, 1500);
    }
  }

  // Move to next question
  function nextLightningQuestion() {
    lrGameState.currentQuestionIndex++;

    if (lrGameState.totalTimeLeft <= 0 || lrGameState.currentQuestionIndex >= lrGameState.questions.length) {
      endLightningRound();
    } else {
      // Resume the game timer (it was paused during explanation)
      startLightningGameTimer();

      renderLightningQuestion();
    }
  }

  // End Lightning Round and show results
  function endLightningRound() {
    lrGameState.isPlaying = false;
    clearTimeout(lrGameState.gameTimer);
    clearInterval(lrGameState.gameTimerInterval);

    // Show back button again
    if (typeof updateTopBar === 'function') updateTopBar('lightning-round-screen');

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
    
    // Set cooldown (2 hours)
    localStorage.setItem('lr_last_played', Date.now().toString());

    // Show completion popup
    const completionBonus = lrGameState.questionsAnswered >= 12 ? 50 : 0;
    showLightningCompletePopup(lrGameState.questionsAnswered, lrGameState.score, completionBonus, totalStars);
  }

  // Show Lightning Round completion popup
  function showLightningCompletePopup(questionsAnswered, score, bonus, totalStars) {
    const modal = document.getElementById('lr-complete-modal');
    const titleElement = document.getElementById('lr-complete-title');
    const questionsElement = document.getElementById('lr-complete-questions');
    const scoreElement = document.getElementById('lr-complete-score');
    const starsElement = document.getElementById('lr-complete-stars');
    const messageElement = document.getElementById('lr-complete-message');
    const backBtn = document.getElementById('lr-complete-back');

    if (!modal || !titleElement || !questionsElement || !scoreElement || !starsElement || !messageElement || !backBtn) {
      console.error('Lightning Round complete modal elements not found');
      alert(`Lightning Round Complete!\n\nQuestions: ${questionsAnswered}\nScore: ${score}\nBonus: ${bonus}\nTotal stars: ${totalStars}`);
      window.showScreen('challenge-modes-screen');
      updateLightningRoundDisplay();
      return;
    }

    const currentLang = window.lang || 'en';

    const translations = {
      title: {
        en: '⚡ Finished! ⚡',
        nl: '⚡ Voltooid! ⚡',
        fr: '⚡ Terminé! ⚡',
        es: '⚡ ¡Terminado! ⚡'
      },
      questions: {
        en: 'Questions',
        nl: 'Vragen',
        fr: 'Questions',
        es: 'Preguntas'
      },
      score: {
        en: 'Score',
        nl: 'Score',
        fr: 'Score',
        es: 'Puntuación'
      },
      starsEarned: {
        en: 'stars earned!',
        nl: 'sterren verdiend!',
        fr: 'étoiles gagnées!',
        es: 'estrellas ganadas!'
      },
      message: {
        en: '⚡ Excellent speed!',
        nl: '⚡ Uitstekende snelheid!',
        fr: '⚡ Excellente vitesse!',
        es: '⚡ ¡Excelente velocidad!'
      },
      backButton: {
        en: 'Back to Challenges',
        nl: 'Terug naar Uitdagingen',
        fr: 'Retour aux Défis',
        es: 'Volver a Desafíos'
      }
    };

    titleElement.textContent = translations.title[currentLang];
    questionsElement.textContent = `${translations.questions[currentLang]}: ${questionsAnswered}`;
    scoreElement.textContent = `${translations.score[currentLang]}: ${score}`;
    starsElement.textContent = `⭐ +${totalStars} ${translations.starsEarned[currentLang]}`;
    messageElement.textContent = translations.message[currentLang];
    backBtn.textContent = translations.backButton[currentLang];

    modal.classList.remove('hidden');

    backBtn.onclick = () => {
      modal.classList.add('hidden');
      window.showScreen('challenge-modes-screen');
      updateLightningRoundDisplay();
    };
  }

  // Initialize Lightning Round mode
  function initializeLightningRound() {
    console.log('Initializing Lightning Round...');

    // Add event listeners
    document.getElementById('lr-play-btn')?.addEventListener('click', startLightningRound);
    document.getElementById('lr-continue-btn')?.addEventListener('click', () => {
      if (lrGameState.isPlaying) {
        nextLightningQuestion();
      }
    });

    // Update display
    updateLightningRoundDisplay();

    // Update cooldown display every minute
    setInterval(updateLightningRoundDisplay, 60000);

    console.log('Lightning Round initialized');
  }

  // Export functions and state
  window.startLightningRound = startLightningRound;
  window.initializeLightningRound = initializeLightningRound;
  window.updateLightningRoundDisplay = updateLightningRoundDisplay;
  window.lrGameState = lrGameState;
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLightningRound);
  } else {
    initializeLightningRound();
  }
  
})();