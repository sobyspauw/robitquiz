// True/False Challenge Mode Logic
(function() {
  
  // True/False game state
  let tfGameState = {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    timeLeft: 10,
    timer: null,
    timerInterval: null,
    usedQuestionIds: [],
    isPlaying: false
  };

  // Cooldown management
  function checkTrueFalseCooldown() {
    const lastPlayed = localStorage.getItem('tf_last_played');
    if (!lastPlayed) return { canPlay: true, timeRemaining: 0 };

    const lastPlayedTime = parseInt(lastPlayed);
    const cooldownDuration = 15 * 60 * 1000; // 15 minutes in milliseconds
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
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    }
    return `${seconds}s`;
  }

  // Anti-repetition system
  function getUnusedQuestions() {
    if (!window.trueFalseQuestions) {
      console.error('True/False questions not loaded!');
      return [];
    }

    // Get recently used question IDs from localStorage
    const recentlyUsed = JSON.parse(localStorage.getItem('tf_recent_questions') || '[]');
    
    // Filter out recently used questions
    const availableQuestions = window.trueFalseQuestions.filter(q => 
      !recentlyUsed.includes(q.id)
    );
    
    // If we don't have enough unused questions, reset the pool but keep the last 10
    if (availableQuestions.length < 15) {
      const keepRecent = recentlyUsed.slice(-10);
      localStorage.setItem('tf_recent_questions', JSON.stringify(keepRecent));
      return window.trueFalseQuestions.filter(q => !keepRecent.includes(q.id));
    }
    
    return availableQuestions;
  }

  // Select 15 random questions for the game
  function selectGameQuestions() {
    const availableQuestions = getUnusedQuestions();
    const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 15);
  }

  // Update used questions tracking
  function updateUsedQuestions() {
    const recentlyUsed = JSON.parse(localStorage.getItem('tf_recent_questions') || '[]');
    const newUsedIds = tfGameState.questions.map(q => q.id);
    
    // Add new question IDs and keep only last 50
    const updatedUsed = [...recentlyUsed, ...newUsedIds].slice(-50);
    localStorage.setItem('tf_recent_questions', JSON.stringify(updatedUsed));
  }

  // Update True/False display in challenge modes screen
  function updateTrueFalseDisplay() {
    const cooldownStatus = checkTrueFalseCooldown();
    const playBtn = document.getElementById('tf-play-btn');
    const cooldownDiv = document.getElementById('tf-cooldown');
    const bestScoreElement = document.getElementById('tf-best-score');

    // Update best score
    const bestScore = localStorage.getItem('tf_best_score') || '-';
    if (bestScoreElement) {
      bestScoreElement.textContent = bestScore === '-' ? '-' : `${bestScore}/15`;
    }

    // Update cooldown display
    if (!cooldownStatus.canPlay) {
      if (playBtn) playBtn.disabled = true;
      if (cooldownDiv) {
        cooldownDiv.textContent = `On cooldown: ${formatTimeRemaining(cooldownStatus.timeRemaining)}`;
        cooldownDiv.classList.remove('hidden');
      }
    } else {
      if (playBtn) playBtn.disabled = false;
      if (cooldownDiv) cooldownDiv.classList.add('hidden');
    }
  }

  // Start True/False game
  function startTrueFalseGame() {
    console.log('Starting True/False game...');

    // Set modal cooldown text for true/false mode (15 minutes like normal mode)
    if (typeof window.setModalCooldownText === 'function') {
      window.setModalCooldownText('normal');
    }

    // Check cooldown
    const cooldownStatus = checkTrueFalseCooldown();
    if (!cooldownStatus.canPlay) {
      alert(`True/False Mode is on cooldown. Try again in ${formatTimeRemaining(cooldownStatus.timeRemaining)}.`);
      return;
    }

    console.log('window.trueFalseQuestions available?', !!window.trueFalseQuestions);
    console.log('window.trueFalseQuestions length:', window.trueFalseQuestions ? window.trueFalseQuestions.length : 0);

    // Reset game state
    tfGameState.questions = selectGameQuestions();
    console.log('Selected questions:', tfGameState.questions.length);
    tfGameState.currentQuestionIndex = 0;
    tfGameState.score = 0;
    tfGameState.timeLeft = 10;
    tfGameState.isPlaying = true;

    // Clear any existing timers
    clearTimeout(tfGameState.timer);
    clearInterval(tfGameState.timerInterval);

    if (tfGameState.questions.length === 0) {
      console.error('No questions selected!');
      alert('No questions available. Please try again later.');
      return;
    }

    console.log('First question:', tfGameState.questions[0]);

    // Update used questions tracking
    updateUsedQuestions();

    // Show True/False screen
    console.log('Showing true-false-screen...');
    window.showScreen('true-false-screen');

    // Render first question
    console.log('Rendering first question...');
    renderTrueFalseQuestion();
    console.log('Starting timer...');
    startTrueFalseTimer();
    console.log('True/False game started successfully!');
  }

  // Render current question
  function renderTrueFalseQuestion() {
    const question = tfGameState.questions[tfGameState.currentQuestionIndex];
    const lang = window.lang || 'en';
    
    // Update question text
    document.getElementById('tf-question-text').textContent = question.question[lang];
    
    // Update progress
    document.getElementById('tf-progress').textContent = 
      `${tfGameState.currentQuestionIndex + 1}/15`;
    
    // Update score
    document.getElementById('tf-score').textContent = 
      `Score: ${tfGameState.score}/15`;
    
    // Reset timer display
    document.getElementById('tf-timer').textContent = '10s';
    tfGameState.timeLeft = 10;
    
    // Enable buttons
    document.getElementById('tf-true-btn').disabled = false;
    document.getElementById('tf-false-btn').disabled = false;

    // Reset button styles and content
    const trueBtn = document.getElementById('tf-true-btn');
    const falseBtn = document.getElementById('tf-false-btn');

    trueBtn.className = 'flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded text-lg';
    trueBtn.style.removeProperty('border'); // Remove inline border style
    trueBtn.innerHTML = '✓ TRUE';

    falseBtn.className = 'flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded text-lg';
    falseBtn.style.removeProperty('border'); // Remove inline border style
    falseBtn.innerHTML = '✗ FALSE';

    // Hide explanation
    document.getElementById('tf-explanation').classList.add('hidden');
  }

  // Start timer for current question
  function startTrueFalseTimer() {
    clearTimeout(tfGameState.timer);
    clearInterval(tfGameState.timerInterval);
    
    tfGameState.timeLeft = 10;
    
    tfGameState.timerInterval = setInterval(() => {
      tfGameState.timeLeft--;
      document.getElementById('tf-timer').textContent = `${tfGameState.timeLeft}s`;
      
      if (tfGameState.timeLeft <= 0) {
        handleTrueFalseAnswer(null); // Time's up
      }
    }, 1000);
  }

  // Handle answer selection
  function handleTrueFalseAnswer(userAnswer) {
    if (!tfGameState.isPlaying) return;
    
    // Stop timer
    clearTimeout(tfGameState.timer);
    clearInterval(tfGameState.timerInterval);
    
    // Disable buttons
    document.getElementById('tf-true-btn').disabled = true;
    document.getElementById('tf-false-btn').disabled = true;
    
    const question = tfGameState.questions[tfGameState.currentQuestionIndex];
    const correctAnswer = question.isTrue;
    const isCorrect = (userAnswer === true && correctAnswer) || 
                     (userAnswer === false && !correctAnswer);
    
    // Play sound and show feedback icon
    if (isCorrect && userAnswer !== null) {
      document.getElementById('snd-correct').play();
      tfGameState.score++;
      // Show large checkmark in center of screen
      if (typeof window.showFeedbackIcon === 'function') {
        window.showFeedbackIcon('✓', '#22c55e');
      }
    } else {
      document.getElementById('snd-wrong').play();
      // Show large cross in center of screen
      if (typeof window.showFeedbackIcon === 'function') {
        window.showFeedbackIcon('✗', '#F23F5D');
      }
    }

    // Update button styles to show correct answer with border (keep original colors)
    const trueBtn = document.getElementById('tf-true-btn');
    const falseBtn = document.getElementById('tf-false-btn');

    // Determine border color based on theme
    const isLightMode = document.body.classList.contains('light-mode');
    const borderColor = isLightMode ? '#1f2937' : '#ffffff'; // Dark in light mode, white in dark mode

    // First update innerHTML, then apply borders
    if (correctAnswer) {
      trueBtn.innerHTML = '<span style="display: flex; align-items: center; justify-content: center; gap: 8px;"><span style="font-size: 1.5rem;">✓</span><span>TRUE</span></span>';
    } else {
      falseBtn.innerHTML = '<span style="display: flex; align-items: center; justify-content: center; gap: 8px;"><span style="font-size: 1.5rem;">✓</span><span>FALSE</span></span>';
    }

    // Add checkmark/cross to wrong answer but NO border
    if (!isCorrect && userAnswer !== null) {
      if (userAnswer === true) {
        trueBtn.innerHTML = '<span style="display: flex; align-items: center; justify-content: center; gap: 8px;"><span style="font-size: 1.5rem;">✗</span><span>TRUE</span></span>';
      } else {
        falseBtn.innerHTML = '<span style="display: flex; align-items: center; justify-content: center; gap: 8px;"><span style="font-size: 1.5rem;">✗</span><span>FALSE</span></span>';
      }
    }

    // Apply borders AFTER innerHTML changes to prevent them being reset
    if (correctAnswer) {
      trueBtn.style.border = `4px solid ${borderColor}`;
      trueBtn.style.setProperty('border', `4px solid ${borderColor}`, 'important');
    } else {
      falseBtn.style.border = `4px solid ${borderColor}`;
      falseBtn.style.setProperty('border', `4px solid ${borderColor}`, 'important');
    }
    
    // Update score display
    document.getElementById('tf-score').textContent =
      `Score: ${tfGameState.score}/15`;

    // Check if explanations are enabled
    const showExplanations = document.getElementById('explanations-toggle')?.checked ?? true;
    const lang = localStorage.getItem('language') || 'en';

    if (showExplanations && question.explanation && question.explanation[lang]) {
      // Show explanation with continue button
      const explanationContainer = document.getElementById('tf-explanation');
      const explanationText = document.getElementById('tf-explanation-text');
      explanationText.textContent = question.explanation[lang];
      explanationContainer.classList.remove('hidden');

      // Don't auto-advance - wait for continue button click
      // Continue button handler is set up in initialization
    } else {
      // Auto-advance after delay when explanations are off
      tfGameState.timer = setTimeout(() => {
        if (tfGameState.isPlaying) {
          nextTrueFalseQuestion();
        }
      }, 1500);
    }
  }

  // Move to next question or end game
  function nextTrueFalseQuestion() {
    tfGameState.currentQuestionIndex++;
    
    if (tfGameState.currentQuestionIndex >= tfGameState.questions.length) {
      endTrueFalseGame();
    } else {
      renderTrueFalseQuestion();
      startTrueFalseTimer();
    }
  }

  // End game and show results
  function endTrueFalseGame() {
    tfGameState.isPlaying = false;
    clearTimeout(tfGameState.timer);
    clearInterval(tfGameState.timerInterval);

    // Set cooldown (15 minutes)
    localStorage.setItem('tf_last_played', Date.now().toString());

    // Calculate stars earned
    const baseReward = 30;
    const scoreBonus = tfGameState.score * 2;
    const totalStars = baseReward + scoreBonus;

    // Add stars to player
    let stars = parseInt(localStorage.getItem('qb_stars') || '0');
    stars += totalStars;
    localStorage.setItem('qb_stars', stars.toString());
    window.updateStarDisplay();

    // Update best score
    const currentBest = parseInt(localStorage.getItem('tf_best_score') || '0');
    if (tfGameState.score > currentBest) {
      localStorage.setItem('tf_best_score', tfGameState.score.toString());
    }

    // Show completion message
    const message = `True/False Complete!\n\nScore: ${tfGameState.score}/15\nStars earned: ${totalStars}\n\nWell done!`;
    alert(message);

    // Return to challenge modes screen and update display
    window.showScreen('challenge-modes-screen');
    updateTrueFalseDisplay();
  }


  // Update button borders when theme changes
  function updateButtonBordersForTheme() {
    const trueBtn = document.getElementById('tf-true-btn');
    const falseBtn = document.getElementById('tf-false-btn');

    if (!trueBtn || !falseBtn) return;

    // Check if buttons are disabled (meaning an answer was given)
    if (!trueBtn.disabled || !falseBtn.disabled) return;

    const question = tfGameState.questions[tfGameState.currentQuestionIndex];
    if (!question) return;

    const correctAnswer = question.isTrue;
    const isLightMode = document.body.classList.contains('light-mode');
    const borderColor = isLightMode ? '#1f2937' : '#ffffff';

    console.log('Updating borders - Light mode:', isLightMode, 'Border color:', borderColor);
    console.log('Correct answer is:', correctAnswer ? 'TRUE' : 'FALSE');

    // First remove ALL borders from both buttons
    trueBtn.style.removeProperty('border');
    falseBtn.style.removeProperty('border');

    // Force a reflow to ensure style is cleared
    void trueBtn.offsetHeight;
    void falseBtn.offsetHeight;

    // Then apply border to correct answer only with !important
    if (correctAnswer) {
      trueBtn.style.setProperty('border', `4px solid ${borderColor}`, 'important');
      console.log('Applied border to TRUE button with color:', borderColor);
    } else {
      falseBtn.style.setProperty('border', `4px solid ${borderColor}`, 'important');
      console.log('Applied border to FALSE button with color:', borderColor);
    }
  }

  // Initialize True/False mode
  function initializeTrueFalseMode() {
    console.log('Initializing True/False mode...');

    // Add event listeners
    document.getElementById('tf-play-btn')?.addEventListener('click', startTrueFalseGame);
    document.getElementById('tf-true-btn')?.addEventListener('click', () => handleTrueFalseAnswer(true));
    document.getElementById('tf-false-btn')?.addEventListener('click', () => handleTrueFalseAnswer(false));
    document.getElementById('tf-continue-btn')?.addEventListener('click', () => {
      console.log('Continue button clicked, isPlaying:', tfGameState.isPlaying);
      console.log('Current question index:', tfGameState.currentQuestionIndex);
      console.log('Total questions:', tfGameState.questions.length);

      // Always advance if explanation is visible and we have questions
      const explanationContainer = document.getElementById('tf-explanation');
      if (explanationContainer && !explanationContainer.classList.contains('hidden')) {
        console.log('Explanation is visible, continuing to next question...');
        tfGameState.isPlaying = true; // Force playing state
        nextTrueFalseQuestion();
      } else {
        console.log('Explanation not visible - button click ignored');
      }
    });

    // Update display
    updateTrueFalseDisplay();

    // Update cooldown display every second
    setInterval(updateTrueFalseDisplay, 1000);

    // Listen for theme changes to update borders
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          console.log('Theme changed, updating borders...');
          updateButtonBordersForTheme();
        }
      });
    });

    // Observe body class changes (theme changes)
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    console.log('True/False mode initialized');
  }

  // Export functions and state
  window.startTrueFalseGame = startTrueFalseGame;
  window.initializeTrueFalseMode = initializeTrueFalseMode;
  window.updateTrueFalseDisplay = updateTrueFalseDisplay;
  window.updateButtonBordersForTheme = updateButtonBordersForTheme;
  window.tfGameState = tfGameState;
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTrueFalseMode);
  } else {
    initializeTrueFalseMode();
  }
  
})();