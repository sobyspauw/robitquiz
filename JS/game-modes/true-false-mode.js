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

  // Start True/False game
  function startTrueFalseGame() {
    console.log('Starting True/False game...');
    
    // Reset game state
    tfGameState.questions = selectGameQuestions();
    tfGameState.currentQuestionIndex = 0;
    tfGameState.score = 0;
    tfGameState.timeLeft = 10;
    tfGameState.isPlaying = true;
    
    if (tfGameState.questions.length === 0) {
      alert('No questions available. Please try again later.');
      return;
    }
    
    // Update used questions tracking
    updateUsedQuestions();
    
    // Show True/False screen
    window.showScreen('true-false-screen');
    
    // Render first question
    renderTrueFalseQuestion();
    startTrueFalseTimer();
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
    
    // Reset button styles
    document.getElementById('tf-true-btn').className = 
      'flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded text-lg';
    document.getElementById('tf-false-btn').className = 
      'flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded text-lg';
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
    
    // Play sound
    if (isCorrect && userAnswer !== null) {
      document.getElementById('snd-correct').play();
      tfGameState.score++;
    } else {
      document.getElementById('snd-wrong').play();
    }
    
    // Update button styles to show correct answer
    if (correctAnswer) {
      document.getElementById('tf-true-btn').className = 
        'flex-1 bg-green-800 text-white font-semibold py-3 rounded text-lg';
    } else {
      document.getElementById('tf-false-btn').className = 
        'flex-1 bg-green-800 text-white font-semibold py-3 rounded text-lg';
    }
    
    // If user was wrong, highlight their incorrect choice
    if (!isCorrect && userAnswer !== null) {
      if (userAnswer === true) {
        document.getElementById('tf-true-btn').className = 
          'flex-1 bg-red-800 text-white font-semibold py-3 rounded text-lg';
      } else {
        document.getElementById('tf-false-btn').className = 
          'flex-1 bg-red-800 text-white font-semibold py-3 rounded text-lg';
      }
    }
    
    // Update score display
    document.getElementById('tf-score').textContent = 
      `Score: ${tfGameState.score}/15`;
    
    // Move to next question after delay
    setTimeout(() => {
      nextTrueFalseQuestion();
    }, 1500);
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
      updateTrueFalseDisplay();
    }
    
    // Show completion message
    const message = `True/False Complete!\n\nScore: ${tfGameState.score}/15\nStars earned: ${totalStars}\n\nWell done!`;
    alert(message);
    
    // Return to challenge modes screen
    window.showScreen('challenge-modes-screen');
  }

  // Update True/False display in challenge modes screen
  function updateTrueFalseDisplay() {
    const bestScore = localStorage.getItem('tf_best_score') || '-';
    const bestScoreElement = document.getElementById('tf-best-score');
    if (bestScoreElement) {
      bestScoreElement.textContent = bestScore === '-' ? '-' : `${bestScore}/15`;
    }
  }

  // Initialize True/False mode
  function initializeTrueFalseMode() {
    console.log('Initializing True/False mode...');
    
    // Add event listeners
    document.getElementById('tf-play-btn')?.addEventListener('click', startTrueFalseGame);
    document.getElementById('tf-true-btn')?.addEventListener('click', () => handleTrueFalseAnswer(true));
    document.getElementById('tf-false-btn')?.addEventListener('click', () => handleTrueFalseAnswer(false));
    
    // Update display
    updateTrueFalseDisplay();
    
    console.log('True/False mode initialized');
  }

  // Export functions
  window.startTrueFalseGame = startTrueFalseGame;
  window.initializeTrueFalseMode = initializeTrueFalseMode;
  window.updateTrueFalseDisplay = updateTrueFalseDisplay;
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTrueFalseMode);
  } else {
    initializeTrueFalseMode();
  }
  
})();