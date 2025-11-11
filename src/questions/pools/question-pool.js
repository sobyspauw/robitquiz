// Question Pool Service - Shared question access for game modes
// This service provides access to all questions from the normal game mode
// for use in Lightning Round, Survivor Mode, and Extreme Survivor Mode

(function() {

  window.QuestionPool = {

    /**
     * Get all questions from all topics and subcategories
     * @returns {Array} Array of question objects with metadata
     */
    getAllQuestions() {
      const allQuestions = [];

      // Check if mainTopics exists
      if (!window.mainTopics) {
        console.error('QuestionPool: window.mainTopics not found');
        return allQuestions;
      }

      // Iterate through all topics
      for (const topicKey in window.mainTopics) {
        const topic = window.mainTopics[topicKey];

        // Check if topic has subcategories
        if (!topic.subcategories || !Array.isArray(topic.subcategories)) {
          continue;
        }

        // Iterate through subcategories
        for (const subcategory of topic.subcategories) {
          // Check if subcategory has levels
          if (!subcategory.levels || !Array.isArray(subcategory.levels)) {
            continue;
          }

          // Iterate through levels
          for (let levelIndex = 0; levelIndex < subcategory.levels.length; levelIndex++) {
            const level = subcategory.levels[levelIndex];

            // Check if level has questions
            if (!level.questions || !Array.isArray(level.questions)) {
              continue;
            }

            // Add each question with metadata
            for (const question of level.questions) {
              allQuestions.push({
                ...question,
                metadata: {
                  topic: topic.name,
                  topicIcon: topic.icon,
                  subcategory: subcategory.name,
                  subcategoryIcon: subcategory.icon,
                  level: levelIndex + 1, // 1-indexed
                  difficulty: this.calculateDifficulty(levelIndex + 1)
                }
              });
            }
          }
        }
      }

      console.log(`QuestionPool: Loaded ${allQuestions.length} questions from mainTopics`);
      return allQuestions;
    },

    /**
     * Calculate difficulty based on level number
     * @param {number} level - Level number (1-10)
     * @returns {string} Difficulty level: 'easy', 'medium', 'hard'
     */
    calculateDifficulty(level) {
      if (level >= 1 && level <= 3) return 'easy';
      if (level >= 4 && level <= 7) return 'medium';
      if (level >= 8 && level <= 10) return 'hard';
      return 'medium'; // default
    },

    /**
     * Get random questions from the pool
     * @param {number} count - Number of questions to get
     * @param {Object} options - Filter options
     * @param {string} options.difficulty - Filter by difficulty: 'easy', 'medium', 'hard'
     * @param {string} options.topic - Filter by topic name
     * @param {string} options.subcategory - Filter by subcategory name
     * @returns {Array} Array of random questions
     */
    getRandomQuestions(count, options = {}) {
      let questions = this.getAllQuestions();

      // Apply filters
      if (options.difficulty) {
        questions = questions.filter(q => q.metadata.difficulty === options.difficulty);
      }

      if (options.topic) {
        questions = questions.filter(q =>
          q.metadata.topic.en === options.topic ||
          q.metadata.topic.nl === options.topic
        );
      }

      if (options.subcategory) {
        questions = questions.filter(q =>
          q.metadata.subcategory.en === options.subcategory ||
          q.metadata.subcategory.nl === options.subcategory
        );
      }

      // Shuffle questions
      const shuffled = this.shuffleArray([...questions]);

      // Return requested count
      return shuffled.slice(0, Math.min(count, shuffled.length));
    },

    /**
     * Get questions by difficulty level
     * @param {string} difficulty - 'easy', 'medium', or 'hard'
     * @param {number} count - Number of questions to get
     * @returns {Array} Array of questions at specified difficulty
     */
    getQuestionsByDifficulty(difficulty, count) {
      return this.getRandomQuestions(count, { difficulty });
    },

    /**
     * Get mixed difficulty questions for progressive game modes
     * @param {number} easyCount - Number of easy questions
     * @param {number} mediumCount - Number of medium questions
     * @param {number} hardCount - Number of hard questions
     * @returns {Array} Array of mixed difficulty questions
     */
    getMixedDifficultyQuestions(easyCount, mediumCount, hardCount) {
      const easy = this.getQuestionsByDifficulty('easy', easyCount);
      const medium = this.getQuestionsByDifficulty('medium', mediumCount);
      const hard = this.getQuestionsByDifficulty('hard', hardCount);

      // Combine and shuffle all questions
      return this.shuffleArray([...easy, ...medium, ...hard]);
    },

    /**
     * Shuffle array using Fisher-Yates algorithm
     * @param {Array} array - Array to shuffle
     * @returns {Array} Shuffled array
     */
    shuffleArray(array) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    },

    /**
     * Get question statistics
     * @returns {Object} Statistics about available questions
     */
    getStatistics() {
      const questions = this.getAllQuestions();

      const stats = {
        total: questions.length,
        byDifficulty: {
          easy: questions.filter(q => q.metadata.difficulty === 'easy').length,
          medium: questions.filter(q => q.metadata.difficulty === 'medium').length,
          hard: questions.filter(q => q.metadata.difficulty === 'hard').length
        },
        byTopic: {}
      };

      // Count by topic
      for (const question of questions) {
        const topicName = question.metadata.topic.en;
        if (!stats.byTopic[topicName]) {
          stats.byTopic[topicName] = 0;
        }
        stats.byTopic[topicName]++;
      }

      return stats;
    },

    /**
     * Validate question format
     * @param {Object} question - Question object to validate
     * @returns {boolean} True if question is valid
     */
    isValidQuestion(question) {
      return (
        question &&
        question.question &&
        question.options &&
        Array.isArray(question.options) &&
        question.options.length === 4 &&
        typeof question.correct === 'number' &&
        question.correct >= 0 &&
        question.correct < 4
      );
    }
  };

  // Log initialization
  console.log('QuestionPool service initialized');

  // Log statistics when loaded (after a short delay to ensure mainTopics is loaded)
  setTimeout(() => {
    if (window.mainTopics) {
      const stats = window.QuestionPool.getStatistics();
      console.log('QuestionPool Statistics:', stats);
    }
  }, 1000);

})();
