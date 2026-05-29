// Question Pool Service - Shared question access for game modes
// This service provides access to all questions from the normal game mode
// for use in Lightning Round, Survivor Mode, and Extreme Survivor Mode

(function() {

  // Cache for converted questions
  let questionCache = null;
  let questionsLoaded = false;
  let loadingPromise = null;

  /**
   * Fetch and evaluate a single question file (CommonJS module.exports format)
   */
  function fetchQuestionFile(scriptInfo) {
    const encodedPath = 'src/questions/data/subjects/' +
      encodeURIComponent(scriptInfo.topic.folder) + '/' +
      encodeURIComponent(scriptInfo.subcategory.folder) + '/level' + scriptInfo.level + '.js';

    return fetch(encodedPath)
      .then(function(response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.text();
      })
      .then(function(code) {
        const mod = { exports: {} };
        const fn = new Function('module', 'exports', code);
        fn(mod, mod.exports);
        return mod.exports;
      })
      .catch(function() {
        return null; // Silently skip files that fail to load
      });
  }

  /**
   * Load files in batches to avoid overwhelming the browser
   */
  function loadInBatches(items, batchSize, processFn) {
    const results = [];
    let index = 0;

    function nextBatch() {
      if (index >= items.length) return Promise.resolve(results);
      const batch = items.slice(index, index + batchSize);
      index += batchSize;
      return Promise.all(batch.map(processFn))
        .then(function(batchResults) {
          batchResults.forEach(function(r) { results.push(r); });
          return nextBatch();
        });
    }

    return nextBatch();
  }

  /**
   * Load all question files dynamically using fetch (supports module.exports format)
   * @returns {Promise} Promise that resolves when all questions are loaded
   */
  function loadAllQuestions() {
    if (questionsLoaded && questionCache && questionCache.length > 0) {
      return Promise.resolve(questionCache);
    }

    if (loadingPromise) {
      return loadingPromise;
    }

    loadingPromise = new Promise(function(resolve, reject) {
      console.log('QuestionPool: Starting to load all questions...');

      if (!window.mainTopics || typeof window.mainTopics !== 'object') {
        console.error('QuestionPool: window.mainTopics not available');
        reject('mainTopics not available');
        return;
      }

      const filesToLoad = [];

      // Build list of all files to fetch
      for (const topicKey in window.mainTopics) {
        const topic = window.mainTopics[topicKey];
        if (!topic.subcategories || !Array.isArray(topic.subcategories)) continue;

        for (const subcategory of topic.subcategories) {
          for (let level = 1; level <= 10; level++) {
            filesToLoad.push({ topic, subcategory, level, topicKey });
          }
        }
      }

      console.log('QuestionPool: Found ' + filesToLoad.length + ' level files to load');

      const allQuestions = [];

      // Load in batches of 20 to avoid overwhelming the browser
      loadInBatches(filesToLoad, 20, function(scriptInfo) {
        return fetchQuestionFile(scriptInfo).then(function(levelModule) {
          if (!levelModule || !levelModule.questions) return;
          for (const question of levelModule.questions) {
            if (question.question && question.options && typeof question.correct === 'number') {
              allQuestions.push({
                question: question.question,
                options: question.options,
                correct: question.correct,
                correctIndex: question.correct,
                explanation: question.explanation,
                metadata: {
                  topic: scriptInfo.topic.name,
                  topicIcon: scriptInfo.topic.icon,
                  subcategory: scriptInfo.subcategory.name,
                  subcategoryIcon: scriptInfo.subcategory.icon,
                  level: scriptInfo.level,
                  difficulty: window.QuestionPool.calculateDifficulty(scriptInfo.level)
                }
              });
            }
          }
        });
      }).then(function() {
        questionCache = allQuestions;
        questionsLoaded = true;
        console.log('QuestionPool: Loaded ' + allQuestions.length + ' questions from ' + filesToLoad.length + ' files');
        resolve(allQuestions);
      }).catch(function(err) {
        console.error('QuestionPool: Loading failed', err);
        reject(err);
      });
    });

    return loadingPromise;
  }

  window.QuestionPool = {

    /**
     * Get all questions from all topics and subcategories
     * @returns {Array} Array of question objects with metadata
     */
    getAllQuestions: function() {
      if (questionCache && questionCache.length > 0) {
        console.log('QuestionPool: Returning ' + questionCache.length + ' cached questions');
        return questionCache;
      }
      console.warn('QuestionPool: Questions not loaded yet. Call loadAllQuestionsAsync() first.');
      return [];
    },

    /**
     * Load all questions asynchronously
     * @returns {Promise<Array>} Promise that resolves with all questions
     */
    loadAllQuestionsAsync: async function() {
      return await loadAllQuestions();
    },

    /**
     * Calculate difficulty based on level number
     */
    calculateDifficulty: function(level) {
      if (level >= 1 && level <= 3) return 'easy';
      if (level >= 4 && level <= 7) return 'medium';
      if (level >= 8 && level <= 10) return 'hard';
      return 'medium';
    },

    /**
     * Get random questions from the pool
     */
    getRandomQuestions: function(count, options) {
      options = options || {};
      let questions = this.getAllQuestions();

      if (options.difficulty) {
        questions = questions.filter(function(q) { return q.metadata.difficulty === options.difficulty; });
      }
      if (options.topic) {
        questions = questions.filter(function(q) {
          return q.metadata.topic.en === options.topic || q.metadata.topic.nl === options.topic;
        });
      }
      if (options.subcategory) {
        questions = questions.filter(function(q) {
          return q.metadata.subcategory.en === options.subcategory || q.metadata.subcategory.nl === options.subcategory;
        });
      }

      const shuffled = this.shuffleArray(questions.slice());
      return shuffled.slice(0, Math.min(count, shuffled.length));
    },

    getQuestionsByDifficulty: function(difficulty, count) {
      return this.getRandomQuestions(count, { difficulty: difficulty });
    },

    getMixedDifficultyQuestions: function(easyCount, mediumCount, hardCount) {
      const easy = this.getQuestionsByDifficulty('easy', easyCount);
      const medium = this.getQuestionsByDifficulty('medium', mediumCount);
      const hard = this.getQuestionsByDifficulty('hard', hardCount);
      return this.shuffleArray(easy.concat(medium).concat(hard));
    },

    shuffleArray: function(array) {
      const shuffled = array.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = tmp;
      }
      return shuffled;
    },

    getStatistics: function() {
      const questions = this.getAllQuestions();
      const stats = {
        total: questions.length,
        byDifficulty: {
          easy: questions.filter(function(q) { return q.metadata.difficulty === 'easy'; }).length,
          medium: questions.filter(function(q) { return q.metadata.difficulty === 'medium'; }).length,
          hard: questions.filter(function(q) { return q.metadata.difficulty === 'hard'; }).length
        },
        byTopic: {}
      };
      for (const question of questions) {
        const topicName = question.metadata.topic.en;
        stats.byTopic[topicName] = (stats.byTopic[topicName] || 0) + 1;
      }
      return stats;
    },

    isValidQuestion: function(question) {
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

  console.log('QuestionPool service initialized (lazy loading, fetch-based)');

})();
