// Extreme Survivor Mode Challenge Mode Logic
(function() {

  // Extreme Survivor Mode game state
  let esmGameState = {
    currentLevel: 1, // Starts at level 1
    levelProgress: 0, // Questions answered in current level (0-1, advance at 2)
    totalScore: 0,
    currentQuestionIndex: 0,
    timeLeft: 8,
    timer: null,
    timerInterval: null,
    isPlaying: false,
    currentQuestion: null,
    usedQuestions: {} // Will store arrays per level: { 1: [], 2: [], ... }
  };

  // Initialize used questions for all levels
  for (let i = 1; i <= 10; i++) {
    esmGameState.usedQuestions[i] = [];
  }

  // Level configuration for extreme mode (all levels 1-10, higher stars than normal survival)
  const extremeLevelConfig = {
    1: { starsPerQuestion: 8, levelBonus: 25 },
    2: { starsPerQuestion: 10, levelBonus: 30 },
    3: { starsPerQuestion: 12, levelBonus: 35 },
    4: { starsPerQuestion: 15, levelBonus: 40 },
    5: { starsPerQuestion: 18, levelBonus: 45 },
    6: { starsPerQuestion: 21, levelBonus: 50 },
    7: { starsPerQuestion: 25, levelBonus: 55 },
    8: { starsPerQuestion: 30, levelBonus: 60 },
    9: { starsPerQuestion: 35, levelBonus: 65 },
    10: { starsPerQuestion: 40, levelBonus: 70 }
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
    const bestLevel = localStorage.getItem('esm_best_level') || '-';
    const bestLevelElement = document.getElementById('esm-best-tier'); // Keep existing element ID

    if (bestLevelElement) {
      bestLevelElement.textContent = bestLevel === '-' ? '-' : `Level ${bestLevel}`;
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

  // Get unused questions for current level
  function getUnusedQuestionsForLevel(level) {
    // Use QuestionPool service to get questions
    if (!window.QuestionPool) {
      console.error('QuestionPool service not loaded!');
      return [];
    }

    // Calculate difficulty based on level (levels 4-7 = medium, 8-10 = hard)
    const difficulty = window.QuestionPool.calculateDifficulty(level);

    // Get questions at this difficulty level
    const allQuestions = window.QuestionPool.getRandomQuestions(100, { difficulty });

    if (allQuestions.length === 0) {
      console.error(`No questions available for level ${level} (difficulty: ${difficulty})!`);
      return [];
    }

    // Generate unique ID for each question if not present
    const questionsWithIds = allQuestions.map((q, index) => ({
      ...q,
      id: q.id || `${q.metadata.topic.en}_${q.metadata.subcategory.en}_${q.metadata.level}_${index}`,
      // Convert to Extreme Survivor Mode format
      correctIndex: q.correct  // Map 'correct' to 'correctIndex' for consistency
    }));

    const recentlyUsed = esmGameState.usedQuestions[level] || [];
    const availableQuestions = questionsWithIds.filter(q =>
      !recentlyUsed.includes(q.id)
    );

    // If we don't have enough questions, reset the pool but keep the last few
    if (availableQuestions.length < 3) {
      const keepRecent = recentlyUsed.slice(-3);
      esmGameState.usedQuestions[level] = keepRecent;
      return questionsWithIds.filter(q => !keepRecent.includes(q.id));
    }

    return availableQuestions;
  }

  // Select next question
  function selectNextExtremeQuestion() {
    const availableQuestions = getUnusedQuestionsForLevel(esmGameState.currentLevel);
    if (availableQuestions.length === 0) {
      console.error('No questions available for level:', esmGameState.currentLevel);
      return null;
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const selectedQuestion = availableQuestions[randomIndex];

    // Add to used questions
    if (!esmGameState.usedQuestions[esmGameState.currentLevel]) {
      esmGameState.usedQuestions[esmGameState.currentLevel] = [];
    }
    esmGameState.usedQuestions[esmGameState.currentLevel].push(selectedQuestion.id);

    return selectedQuestion;
  }

  // Start Extreme Survivor Mode
  async function startExtremeSurvivorMode() {
    console.log('Starting Extreme Survivor Mode...');

    // Set modal cooldown text for extreme survivor mode
    if (typeof window.setModalCooldownText === 'function') {
      window.setModalCooldownText('extreme-survivor');
    }

    const cooldownStatus = checkExtremeSurvivorCooldown();
    if (!cooldownStatus.canPlay) {
      alert(`Extreme Survivor Mode is on cooldown. Try again in ${formatTimeRemaining(cooldownStatus.timeRemaining)}.`);
      return;
    }

    // Load all questions if not already loaded
    try {
      await window.QuestionPool.loadAllQuestionsAsync();
    } catch (error) {
      console.error('Failed to load questions:', error);
      alert('Failed to load questions. Please try again later.');
      return;
    }

    // Reset game state
    esmGameState.currentLevel = 1; // Start at level 1
    esmGameState.levelProgress = 0;
    esmGameState.totalScore = 0;
    esmGameState.currentQuestionIndex = 0;
    esmGameState.timeLeft = 8;
    esmGameState.isPlaying = true;

    // Reset used questions for this session
    for (let i = 1; i <= 10; i++) {
      esmGameState.usedQuestions[i] = [];
    }

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

    // Level icons/emojis for extreme mode (levels 1-10)
    const levelIcons = {
      1: '💀', 2: '⚡', 3: '🔥', 4: '💥', 5: '☠️',
      6: '🌪️', 7: '⚔️', 8: '👹', 9: '🐉', 10: '👑'
    };

    const levelNames = {
      en: ['Warrior', 'Fighter', 'Slayer', 'Destroyer', 'Annihilator', 'Conqueror', 'Warlord', 'Demon', 'Dragon', 'God'],
      es: ['Guerrero', 'Luchador', 'Asesino', 'Destructor', 'Aniquilador', 'Conquistador', 'Señor de Guerra', 'Demonio', 'Dragón', 'Dios'],
      de: ['Krieger', 'Kämpfer', 'Töter', 'Zerstörer', 'Vernichter', 'Eroberer', 'Kriegsherr', 'Dämon', 'Drache', 'Gott'],
      nl: ['Krijger', 'Vechter', 'Slachter', 'Vernietiger', 'Verdelger', 'Veroveraar', 'Krijgsheer', 'Demon', 'Draak', 'God']
    };

    const levelIcon = levelIcons[esmGameState.currentLevel] || '💀';
    const levelName = levelNames[lang][esmGameState.currentLevel - 1] || `Level ${esmGameState.currentLevel}`;

    // Update level display
    document.getElementById('esm-current-tier').textContent = `${levelIcon} ${levelName} (Level ${esmGameState.currentLevel}/10)`;

    // Update progress bar (2 questions per level instead of 3 for extra difficulty)
    const progressPercent = (esmGameState.levelProgress / 2) * 100;
    document.getElementById('esm-progress-bar').style.width = `${progressPercent}%`;
    document.getElementById('esm-progress-text').textContent =
      `${esmGameState.levelProgress}/2 questions to next level`;

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
        clearInterval(esmGameState.timerInterval);
        showExtremeSurvivorTimeoutModal();
      }
    }, 1000);
  }

  // Show timeout modal for Extreme Survivor Mode
  function showExtremeSurvivorTimeoutModal() {
    esmGameState.isPlaying = false;

    // Show timeout modal
    const timeoutModal = document.getElementById('timeout-modal');
    if (timeoutModal) {
      timeoutModal.classList.remove('hidden');

      // Update modal text for Extreme Survivor Mode context
      const timeoutText = document.getElementById('timeout-modal-text');
      if (timeoutText) {
        timeoutText.textContent = `Time's up! You reached Level ${esmGameState.currentLevel} with ${esmGameState.totalScore} stars.`;
      }

      // Handle back button - end extreme survivor mode
      const backBtn = document.getElementById('timeout-modal-back');
      if (backBtn) {
        backBtn.onclick = () => {
          timeoutModal.classList.add('hidden');
          endExtremeSurvivorMode(false);
        };
      }
    }
  }

  // Show error modal for Extreme Survivor Mode (one mistake = game over)
  function showExtremeSurvivorErrorModal() {
    esmGameState.isPlaying = false;

    // Show error modal
    const errorModal = document.getElementById('error-modal');
    if (errorModal) {
      errorModal.classList.remove('hidden');

      // Update modal text for Extreme Survivor Mode context
      const errorText = document.getElementById('error-modal-text');
      if (errorText) {
        errorText.textContent = `Wrong answer! You reached Level ${esmGameState.currentLevel} with ${esmGameState.totalScore} stars.`;
      }

      // Handle back button - end extreme survivor mode
      const backBtn = document.getElementById('error-modal-back');
      if (backBtn) {
        backBtn.onclick = () => {
          errorModal.classList.add('hidden');
          endExtremeSurvivorMode(false);
        };
      }
    }
  }

  // Render current question
  function renderExtremeSurvivorQuestion(question) {
    const lang = window.lang || 'en';

    // Update question text
    document.getElementById('esm-question-text').textContent = question.question[lang];

    // Hide explanation from previous question
    document.getElementById('esm-explanation').classList.add('hidden');

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

      // Show large checkmark in center of screen
      if (typeof window.showFeedbackIcon === 'function') {
        window.showFeedbackIcon('✓', '#22c55e');
      }

      // Award stars
      const starsEarned = extremeLevelConfig[esmGameState.currentLevel].starsPerQuestion;
      esmGameState.totalScore += starsEarned;

      // Advance level progress
      esmGameState.levelProgress++;

      // Add border to correct answer based on theme
      const isLightMode = document.body.classList.contains('light-mode');
      const borderColor = isLightMode ? '#1f2937' : '#ffffff';
      const buttons = document.querySelectorAll('#esm-answers button');

      if (buttons[selectedIndex]) {
        buttons[selectedIndex].style.border = `4px solid ${borderColor}`;
      }

      // Check for level advancement (every 2 questions instead of 3)
      if (esmGameState.levelProgress >= 2) {
        advanceToNextExtremeLevel();
      }

      // Update UI
      updateExtremeSurvivorUI();

      // Check if explanations are enabled
      const showExplanations = document.getElementById('explanations-toggle')?.checked ?? true;
      const lang = localStorage.getItem('language') || 'en';

      if (showExplanations && currentQuestion.explanation && currentQuestion.explanation[lang]) {
        // Show explanation with continue button
        const explanationContainer = document.getElementById('esm-explanation');
        const explanationText = document.getElementById('esm-explanation-text');
        explanationText.textContent = currentQuestion.explanation[lang];
        explanationContainer.classList.remove('hidden');

        // Don't auto-advance - wait for continue button click
      } else {
        // Auto-advance after delay when explanations are off
        esmGameState.nextQuestionTimer = setTimeout(() => {
          if (esmGameState.isPlaying) {
            nextExtremeSurvivorQuestion();
          }
        }, 1500);
      }
    } else {
      document.getElementById('snd-wrong').play();

      // Show large cross in center of screen
      if (typeof window.showFeedbackIcon === 'function') {
        window.showFeedbackIcon('✗', '#F23F5D');
      }

      // Show correct answer
      const isLightMode = document.body.classList.contains('light-mode');
      const borderColor = isLightMode ? '#1f2937' : '#ffffff';
      const buttons = document.querySelectorAll('#esm-answers button');

      // Correct answer - add border based on theme
      if (buttons[currentQuestion.correctIndex]) {
        buttons[currentQuestion.correctIndex].style.border = `4px solid ${borderColor}`;
      }

      // Check if explanations are enabled
      const showExplanations = document.getElementById('explanations-toggle')?.checked ?? true;
      const lang = localStorage.getItem('language') || 'en';

      if (showExplanations && currentQuestion.explanation && currentQuestion.explanation[lang]) {
        // Show explanation - user can read before game over
        const explanationContainer = document.getElementById('esm-explanation');
        const explanationText = document.getElementById('esm-explanation-text');
        explanationText.textContent = currentQuestion.explanation[lang];
        explanationContainer.classList.remove('hidden');

        // Game over after showing explanation - extra time to read
        setTimeout(() => showExtremeSurvivorErrorModal(), 3000);
      } else {
        // Game over immediately (one life only) - delay to show feedback
        setTimeout(() => showExtremeSurvivorErrorModal(), 2000);
      }
    }
  }

  // Advance to next level
  function advanceToNextExtremeLevel() {
    const currentConfig = extremeLevelConfig[esmGameState.currentLevel];

    // Award level bonus
    esmGameState.totalScore += currentConfig.levelBonus;

    // Check if we've completed all levels
    if (esmGameState.currentLevel >= 10) {
      // Game complete!
      setTimeout(() => endExtremeSurvivorMode(true), 1500);
      return;
    }

    // Advance to next level
    esmGameState.currentLevel++;
    esmGameState.levelProgress = 0;

    console.log(`Advanced to extreme level: ${esmGameState.currentLevel}`);
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
    if (typeof window.updateStarDisplay === 'function') {
      window.updateStarDisplay();
    }

    // Update best level
    const currentBest = parseInt(localStorage.getItem('esm_best_level') || '0');

    if (esmGameState.currentLevel > currentBest) {
      localStorage.setItem('esm_best_level', esmGameState.currentLevel.toString());
      updateExtremeSurvivorDisplay();
    }

    // Show completion message
    let message;
    if (completed) {
      message = `💀 LEGENDARY! You've mastered Extreme Survival!\n\nFinal Score: ${esmGameState.totalScore} stars\nYou are the ultimate quiz champion!`;
    } else {
      message = `💀 Extreme Survival Complete!\n\nReached: Level ${esmGameState.currentLevel}\nScore: ${esmGameState.totalScore} stars\nThat was intense!`;
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
    document.getElementById('esm-continue-btn')?.addEventListener('click', () => {
      if (esmGameState.isPlaying) {
        nextExtremeSurvivorQuestion();
      }
    });

    // Update display
    updateExtremeSurvivorDisplay();

    // Update cooldown display every minute
    setInterval(updateExtremeSurvivorDisplay, 60000);

    console.log('Extreme Survivor Mode initialized');
  }

  // Export functions and state
  window.startExtremeSurvivorMode = startExtremeSurvivorMode;
  window.initializeExtremeSurvivorMode = initializeExtremeSurvivorMode;
  window.updateExtremeSurvivorDisplay = updateExtremeSurvivorDisplay;
  window.esmGameState = esmGameState;

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeExtremeSurvivorMode);
  } else {
    initializeExtremeSurvivorMode();
  }

})();
