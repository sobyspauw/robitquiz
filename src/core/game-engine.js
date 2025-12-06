// —— 1) Game State (variables now declared in ui.js) ——
// selectedGroupIndex, selectedLevelIndex, questions, currentIndex, 
// correctCount, wrongCount, stars, timer, timerInterval are now global from ui.js

// —— 2) Ads helper ——
function showInterstitialAd(callback) {
  if (window.admob && admob.interstitial) {
    admob.interstitial.show().then(callback).catch(callback);
  } else {
    callback();
  }
}

// —— 3) Persistence & “Quick Start” ——
function quickStart() {
  const save = JSON.parse(localStorage.getItem('qb_save') || 'null');
  if (!save) return window.showSubjects();

  selectedGroupIndex = save.group;
  selectedLevelIndex = save.level;
  currentIndex       = save.question;
  correctCount       = save.correct;
  wrongCount         = save.wrong;
  stars              = save.stars || parseInt(localStorage.getItem('qb_stars') || '0');
  

  // load & shuffle questions for that level
  const level = window.groups[selectedGroupIndex].levels[selectedLevelIndex];
  questions = [...level.questions].sort(() => Math.random() - 0.5);


  window.updateStarDisplay();
  window.showScreen('quiz-screen');
  window.applyTranslations();
  window.renderQuestion();
}

// —— 4) Starting a new level ——
function startLevel(groupIdx, levelIdx) {
  console.log('startLevel called with:', groupIdx, levelIdx);

  // Set modal cooldown text for normal game mode
  if (typeof window.setModalCooldownText === 'function') {
    window.setModalCooldownText('normal');
  }

  // Check if level is on cooldown (15-minute lockout after failure)
  if (typeof window.checkLevelCooldown === 'function') {
    const cooldownStatus = window.checkLevelCooldown(groupIdx, levelIdx);
    if (!cooldownStatus.canPlay) {
      const timeLeft = window.formatCooldownTime(cooldownStatus.timeRemaining);
      alert(`This level is locked for ${timeLeft} due to a previous failure. Try again later or use diamonds to continue.`);
      return;
    }
  }

  selectedGroupIndex = groupIdx;
  selectedLevelIndex = levelIdx;
  currentIndex       = 0;
  correctCount       = 0;
  wrongCount         = 0;
  // Don't reset stars when starting a new level
  stars = parseInt(localStorage.getItem('qb_stars') || '0');

  // Reset answer processing flag for new level
  window.answerProcessing = false;
  console.log('Reset answerProcessing flag for new level');

  // Reset game over flag for new level
  window.gameIsOver = false;
  console.log('Reset gameIsOver flag for new level');

  // Reset continue button processing state
  if (window.continueButtonProcessing !== undefined) {
    window.continueButtonProcessing = false;
    console.log('Reset continue button processing state for new level');
  }
  

  const level = window.groups[selectedGroupIndex].levels[selectedLevelIndex];
  questions = [...level.questions].sort(() => Math.random() - 0.5);

  console.log('About to call updateStarDisplay and showScreen');
  
  if (typeof window.updateStarDisplay === 'function') {
    window.updateStarDisplay();
  } else {
    console.error('updateStarDisplay function not available');
  }
  
  if (typeof window.showScreen === 'function') {
    console.log('Calling showScreen with quiz-screen');
    window.showScreen('quiz-screen');
    console.log('showScreen call completed');
  } else {
    console.error('showScreen function not available');
  }
  
  window.applyTranslations();
  window.renderQuestion();
}

// —— 5) Answer handling & scoring ——
function handleAnswer(answer, btn) {
  console.log('handleAnswer called with answer:', answer);
  console.log('Button clicked:', btn);
  console.log('Current question index:', currentIndex, 'questionNumber:', questionNumber);

  // Prevent multiple answers for the same question (race condition guard)
  if (window.answerProcessing) {
    console.log('Answer already being processed, ignoring duplicate click');
    return;
  }
  window.answerProcessing = true;
  console.log('Set answerProcessing flag to prevent duplicate clicks');

  // disable further clicks
  document.querySelectorAll('.answer-btn').forEach(b => b.disabled = true);
  console.log('Disabled all answer buttons');

  // disable powerup buttons after answer is given
  const fiftyFiftyBtn = document.getElementById('fifty-fifty-btn');
  const skipBtn = document.getElementById('skip-btn');
  const timeBonusBtn = document.getElementById('time-bonus-btn');
  if (fiftyFiftyBtn) fiftyFiftyBtn.disabled = true;
  if (skipBtn) skipBtn.disabled = true;
  if (timeBonusBtn) timeBonusBtn.disabled = true;
  console.log('Disabled all powerup buttons');

  // stop countdown
  clearTimeout(timer);
  clearInterval(timerInterval);
  console.log('Stopped timer and interval');

  // Support both new system (window.currentQuestions) and old system (questions array)
  const questionsArray = window.currentQuestions || questions;
  const index = window.currentQuestions ? questionNumber : currentIndex;

  // find correct text
  const q = questionsArray[index];
  console.log('Question object:', q);
  // Use 'correct' property instead of 'correctIndex' if available
  const correctIndex = q.correctIndex !== undefined ? q.correctIndex : q.correct;
  const correctAnswer = q.options[correctIndex][window.lang || 'en'];
  const isCorrect = answer === correctAnswer;
  console.log('Correct answer:', correctAnswer, 'User answer:', answer, 'Is correct:', isCorrect);

  // Show explanation if available
  if (typeof window.showExplanation === 'function') {
    window.showExplanation(q, isCorrect);
  }

  // play sound + highlight
  console.log('Applying feedback styling...');
  if (isCorrect) {
    console.log('Answer is correct - applying green styling');
    document.getElementById('snd-correct').play();
    correctCount++;
    // Don't add stars here - only on level completion
    btn.style.background = '#22c55e'; // green for correct
    btn.style.color = '#FFFFFF'; // white text
    btn.style.border = '4px solid #16a34a'; // Thicker dark green border
    btn.style.boxShadow = 'none'; // Remove glow
    btn.style.transform = 'scale(1)'; // No scale
    btn.style.transition = 'all 0.3s ease';
    btn.style.animation = 'none'; // Remove pulse animation

    console.log('Applied correct answer styling to button');
    // Show thumbs up icon
    showFeedbackIcon('✓', '#22c55e');
  } else {
    console.log('Answer is wrong - applying red styling and highlighting correct answer');
    document.getElementById('snd-wrong').play();
    wrongCount++;
    console.log('❌ WRONG ANSWER - wrongCount is now:', wrongCount, '(limit is 2)');

    // Check immediately if game over (2 mistakes)
    if (wrongCount >= 2) {
      console.log('🚨 IMMEDIATE GAME OVER - Preventing further interaction');
      // Set a flag to prevent any further question loading
      window.gameIsOver = true;

      // Check if we need to show explanation first
      const questionsArray = window.currentQuestions || questions;
      const index = window.currentQuestions ? questionNumber : currentIndex;
      const q = questionsArray[index];
      const hasExplanation = q && q.explanation && (q.explanation[window.lang || 'en'] || q.explanation['en']);
      const showExplanationsEnabled = window.showExplanations === true;

      if (showExplanationsEnabled && hasExplanation) {
        console.log('🚨 Setting gameOverAfterExplanation flag IMMEDIATELY');
        window.gameOverAfterExplanation = true;
      }
    }

    btn.style.background = '#F23F5D'; // pinkish red for wrong
    btn.style.color = '#FFFFFF'; // white text
    btn.style.border = '4px solid #dc2626'; // Thicker dark red border
    btn.style.boxShadow = 'none'; // Remove glow
    btn.style.transform = 'scale(1)'; // No scale
    btn.style.animation = 'none'; // Remove shake animation

    console.log('Applied wrong answer styling to clicked button');
    // Show cross icon
    showFeedbackIcon('✗', '#F23F5D');

    // Show correct answer
    let correctButtonFound = false;
    document.querySelectorAll('#answers button').forEach(b => {
      if (b.innerText === correctAnswer) {
        b.style.background = '#22c55e'; // green for correct
        b.style.color = '#FFFFFF'; // white text
        b.style.border = '4px solid #16a34a'; // Thicker dark green border
        b.style.boxShadow = 'none'; // Remove glow
        b.style.transform = 'scale(1)'; // No scale
        b.style.transition = 'all 0.3s ease';
        b.style.animation = 'none'; // Remove pulse animation

        correctButtonFound = true;
        console.log('Found and highlighted correct answer button:', b.innerText);
      }
    });
    if (!correctButtonFound) {
      console.warn('Could not find correct answer button to highlight');
    }
  }

  // Answer buttons are already disabled above - no need for additional logic here

  // update counters & save
  document.getElementById('correct').innerText =
    `${window.t('correct')}: ${correctCount}/10`;
  document.getElementById('wrong').innerText =
    `${window.t('mistakes')}: ${wrongCount}/2`;
  window.updateStarDisplay();

  localStorage.setItem('qb_save', JSON.stringify({
    group:    selectedGroupIndex,
    level:    selectedLevelIndex,
    question: currentIndex + 1,
    correct:  correctCount,
    wrong:    wrongCount,
    stars
  }));
  localStorage.setItem('qb_stars', stars.toString());

  // after 1.5 s either advance or show error
  setTimeout(() => {
    console.log('Timeout fired - checking progression logic');
    console.log('wrongCount:', wrongCount, 'correctCount:', correctCount);

    // Support both new system (window.currentQuestions) and old system (questions array)
    const questionsArray = window.currentQuestions || questions;
    const index = window.currentQuestions ? questionNumber : currentIndex;

    // Check if there's an explanation to show first
    const q = questionsArray[index];
    const hasExplanation = q.explanation && (q.explanation[window.lang || 'en'] || q.explanation['en']);
    const showExplanationsEnabled = window.showExplanations === true; // Only true if explicitly true
    const shouldShowExplanation = showExplanationsEnabled && hasExplanation;
    
    console.log('Detailed explanation check:');
    console.log('  - window.showExplanations:', window.showExplanations);
    console.log('  - showExplanationsEnabled:', showExplanationsEnabled);
    console.log('  - hasExplanation:', hasExplanation);
    console.log('  - shouldShowExplanation:', shouldShowExplanation);
    
    if (wrongCount >= 2) {
      console.log('🚨 GAME OVER DETECTED IN TIMEOUT - wrongCount:', wrongCount);
      document.getElementById('snd-wrong2').play();
      
      if (shouldShowExplanation) {
        console.log('🚨 Game over WITH explanation - setting gameOverAfterExplanation flag');
        // Store that we need to show game over popup after explanation
        window.gameOverAfterExplanation = true;
      } else {
        console.log('🚨 Game over WITHOUT explanation - showing popup immediately');
        window.showErrorPopup();
      }
    } else {
      // Continue with normal flow for non-game-over scenarios
      if (!shouldShowExplanation) {
        console.log('No explanation to show or explanations disabled - auto-advancing to next question');
        window.continueToNextQuestion();
      } else {
        console.log('Explanation should be shown - waiting for user to click Continue button');
        // Do not auto-advance - wait for Continue button click
      }
    }
  }, 1500);
}

// New function to handle continuing to next question
function continueToNextQuestion() {
  // Check if game is over before continuing
  if (window.gameIsOver) {
    console.log('🚨 Game is over - blocking continue to next question');
    return;
  }

  // Reset answer processing flag for next question
  window.answerProcessing = false;
  console.log('Reset answerProcessing flag for next question');

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
      window.updateStarDisplay();
    }

    // Update progress for new subcategory system
    if (window.currentQuizContext && typeof window.updateSubcategoryProgress === 'function') {
      const { mainTopicId, subcategoryId, level } = window.currentQuizContext;
      window.updateSubcategoryProgress(mainTopicId, subcategoryId, level + 1);
    }

    // Mark level as completed (old system)
    if (typeof window.markLevelAsCompleted === 'function' && !window.currentQuizContext) {
      window.markLevelAsCompleted(selectedGroupIndex, selectedLevelIndex);
    }

    // Check for subject completion rewards (old system)
    if (typeof window.checkSubjectCompletion === 'function' && !window.currentQuizContext) {
      window.checkSubjectCompletion(selectedGroupIndex, selectedLevelIndex);
    }

    // Update achievement stats for quiz completion
    if (typeof window.updateAchievementStats === 'function') {
      const statsUpdate = {
        quizzesCompleted: 1,
        totalQuestions: questionsArray.length,
        totalCorrect: correctCount
      };

      // Check if perfect score (10/10)
      if (correctCount >= 10) {
        statsUpdate.perfectScores = 1;
      }

      // Check if no mistakes
      if (wrongCount === 0) {
        statsUpdate.quizzesNoMistakes = 1;
      }

      // Check if no timeout happened (we need to track this in timer logic)
      if (!window.quizTimedOut) {
        statsUpdate.quizzesNoTimeout = 1;
      }
      window.quizTimedOut = false; // Reset flag

      window.updateAchievementStats(statsUpdate);
    }

    // Check if this is level 10 completion (last level of a subcategory)
    console.log('🎯 DEBUG - Checking level 10 completion:');
    console.log('  - window.currentQuizContext exists?', !!window.currentQuizContext);
    console.log('  - currentQuizContext:', window.currentQuizContext);
    if (window.currentQuizContext) {
      console.log('  - currentQuizContext.level:', window.currentQuizContext.level);
      console.log('  - currentQuizContext.level === 10?', window.currentQuizContext.level === 10);
    }
    const isLevel10 = window.currentQuizContext && window.currentQuizContext.level === 10;
    console.log('  - FINAL isLevel10 value:', isLevel10);

    // Show completion popup instead of alert
    console.log('📞 Calling showCompletePopup with isLevel10:', isLevel10);
    window.showCompletePopup(correctCount, starsEarned, isLevel10);
  } else {
    // Continue to next question
    if (window.timerState) {
      window.timerState.isPaused = false;
      window.timerState.isRunning = false;
    }
    window.renderQuestion();
  }
}

// —— 6) Error / Timeout popups ——
function showErrorPopup() {
  document.getElementById('error-modal').classList.remove('hidden');
}
// Error popup is now handled by ui.js

function showTimeoutPopup() {
  document.getElementById('timeout-modal').classList.remove('hidden');
  document.getElementById('snd-wrong2').play();
}
// These functions are now handled by ui.js modal system

// —— 7) Export for UI wiring ——
window.quickStart           = quickStart;
window.startLevel           = startLevel;
window.handleAnswer         = handleAnswer;
window.continueToNextQuestion = continueToNextQuestion;
window.showErrorPopup       = showErrorPopup;
// hideErrorPopup now handled by ui.js
window.showTimeoutPopup     = showTimeoutPopup;
// These are now handled by ui.js
window.showInterstitialAd   = showInterstitialAd;

// —— 8) Feedback icon animation ——
function showFeedbackIcon(icon, color) {
  // Remove any existing feedback icon
  const existing = document.getElementById('feedback-icon');
  if (existing) existing.remove();

  // Create new feedback icon
  const feedbackIcon = document.createElement('div');
  feedbackIcon.id = 'feedback-icon';
  feedbackIcon.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    font-size: 120px;
    font-weight: bold;
    color: ${color};
    background: transparent;
    border: none;
    box-shadow: none;
    z-index: 9999;
    pointer-events: none;
    animation: feedbackIconPop 0.8s ease-out forwards;
  `;
  feedbackIcon.innerText = icon;
  document.body.appendChild(feedbackIcon);

  // Remove after animation
  setTimeout(() => {
    feedbackIcon.remove();
  }, 800);
}

window.showFeedbackIcon = showFeedbackIcon;
