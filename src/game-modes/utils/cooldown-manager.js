// Cooldown Management System with Ad Watching and Gem Purchasing
(function() {
  
  // Cooldown configuration for each mode
  const cooldownConfig = {
    'lightning-round': {
      duration: 2 * 60 * 60 * 1000, // 2 hours
      maxAds: 1, // Can use 1 ad (2hr -> 0hr)
      gemCost: 10,
      storageKeys: {
        lastPlayed: 'lr_last_played',
        adsUsed: 'lr_ads_used'
      }
    },
    'survivor-mode': {
      duration: 4 * 60 * 60 * 1000, // 4 hours  
      maxAds: 2, // Can use 2 ads (4hr -> 0hr)
      gemCost: 20,
      storageKeys: {
        lastPlayed: 'sm_last_played',
        adsUsed: 'sm_ads_used'
      }
    },
    'extreme-survivor': {
      duration: 6 * 60 * 60 * 1000, // 6 hours
      maxAds: 3, // Can use 3 ads (6hr -> 0hr)
      gemCost: 30,
      storageKeys: {
        lastPlayed: 'esm_last_played',
        adsUsed: 'esm_ads_used'
      }
    }
  };

  // Check if ad watching is available
  function canWatchAdForMode(mode) {
    if (!cooldownConfig[mode]) return false;
    
    const config = cooldownConfig[mode];
    const adsUsed = parseInt(localStorage.getItem(config.storageKeys.adsUsed) || '0');
    const lastPlayed = localStorage.getItem(config.storageKeys.lastPlayed);
    
    if (!lastPlayed) return false;
    
    const lastPlayedTime = parseInt(lastPlayed);
    const now = Date.now();
    const timePassed = now - lastPlayedTime;
    
    // If cooldown is over, reset ad usage
    if (timePassed >= config.duration) {
      localStorage.removeItem(config.storageKeys.adsUsed);
      return false;
    }
    
    return adsUsed < config.maxAds;
  }

  // Watch ad to reduce cooldown
  function watchAdForCooldown(mode) {
    return new Promise((resolve, reject) => {
      if (!canWatchAdForMode(mode)) {
        reject('No ads available for this mode');
        return;
      }
      
      console.log(`Attempting to show ad for ${mode}...`);
      
      // Simulate ad watching (in real implementation, this would call actual ad SDK)
      if (window.admob && window.admob.rewardedVideo) {
        // Real ad implementation
        window.admob.rewardedVideo.show()
          .then(() => {
            // Ad watched successfully
            applyAdReward(mode);
            resolve();
          })
          .catch((error) => {
            console.error('Ad failed to show:', error);
            reject('Ad failed to show');
          });
      } else {
        // Fallback for testing - simulate successful ad
        setTimeout(() => {
          console.log('Simulated ad completed successfully');
          applyAdReward(mode);
          resolve();
        }, 2000); // Simulate 2 second ad
      }
    });
  }

  // Apply reward after successful ad viewing
  function applyAdReward(mode) {
    const config = cooldownConfig[mode];
    if (!config) return;
    
    // Increment ads used counter
    const adsUsed = parseInt(localStorage.getItem(config.storageKeys.adsUsed) || '0');
    localStorage.setItem(config.storageKeys.adsUsed, (adsUsed + 1).toString());
    
    // Reduce cooldown by 2 hours
    const lastPlayed = parseInt(localStorage.getItem(config.storageKeys.lastPlayed) || '0');
    const reducedTime = lastPlayed - (2 * 60 * 60 * 1000); // Subtract 2 hours
    localStorage.setItem(config.storageKeys.lastPlayed, reducedTime.toString());
    
    console.log(`Applied ad reward for ${mode}: -2 hours cooldown`);
    
    // Update displays
    updateAllCooldownDisplays();
  }

  // Purchase gem reset
  function purchaseGemReset(mode) {
    const config = cooldownConfig[mode];
    if (!config) return false;

    // Check gem balance
    const gems = parseInt(localStorage.getItem('qb_diamonds') || '0');
    if (gems < config.gemCost) {
      alert(`Not enough gems! You need ${config.gemCost} gems but only have ${gems}.`);
      return false;
    }

    // Confirm purchase
    const confirmed = confirm(`Reset ${mode} cooldown for ${config.gemCost} gems?`);
    if (!confirmed) return false;

    // Deduct gems
    const newGemBalance = gems - config.gemCost;
    localStorage.setItem('qb_diamonds', newGemBalance.toString());
    window.updateDiamondDisplay();
    
    // Reset cooldown
    localStorage.removeItem(config.storageKeys.lastPlayed);
    localStorage.removeItem(config.storageKeys.adsUsed);
    
    console.log(`Purchased gem reset for ${mode}: -${config.gemCost} gems`);
    
    // Update displays
    updateAllCooldownDisplays();
    
    return true;
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

  // Get cooldown status for a mode
  function getCooldownStatus(mode) {
    const config = cooldownConfig[mode];
    if (!config) return { canPlay: true, timeRemaining: 0, canWatchAd: false, adsUsed: 0 };
    
    const lastPlayed = localStorage.getItem(config.storageKeys.lastPlayed);
    if (!lastPlayed) return { canPlay: true, timeRemaining: 0, canWatchAd: false, adsUsed: 0 };
    
    const lastPlayedTime = parseInt(lastPlayed);
    const now = Date.now();
    const timePassed = now - lastPlayedTime;
    
    if (timePassed >= config.duration) {
      // Cooldown is over, reset ad usage
      localStorage.removeItem(config.storageKeys.adsUsed);
      return { canPlay: true, timeRemaining: 0, canWatchAd: false, adsUsed: 0 };
    }
    
    const timeRemaining = config.duration - timePassed;
    const adsUsed = parseInt(localStorage.getItem(config.storageKeys.adsUsed) || '0');
    const canWatchAd = adsUsed < config.maxAds;
    
    return { 
      canPlay: false, 
      timeRemaining, 
      canWatchAd,
      adsUsed,
      maxAds: config.maxAds,
      gemCost: config.gemCost
    };
  }

  // Update all cooldown displays
  function updateAllCooldownDisplays() {
    // Update Lightning Round
    if (window.updateLightningRoundDisplay) {
      window.updateLightningRoundDisplay();
    }
    
    // Update Survivor Mode
    if (window.updateSurvivorDisplay) {
      window.updateSurvivorDisplay();
    }
    
    // Update Extreme Survivor
    if (window.updateExtremeSurvivorDisplay) {
      window.updateExtremeSurvivorDisplay();
    }
  }

  // Initialize cooldown system
  function initializeCooldownSystem() {
    console.log('Initializing cooldown management system...');
    
    // Lightning Round ad button
    const lrWatchAdBtn = document.getElementById('lr-watch-ad');
    if (lrWatchAdBtn) {
      lrWatchAdBtn.addEventListener('click', () => {
        watchAdForCooldown('lightning-round')
          .then(() => {
            alert('Ad completed! Cooldown reduced by 2 hours.');
          })
          .catch((error) => {
            alert(`Ad failed: ${error}`);
          });
      });
    }
    
    // Lightning Round gem button
    const lrBuyGemsBtn = document.getElementById('lr-buy-gems');
    if (lrBuyGemsBtn) {
      lrBuyGemsBtn.addEventListener('click', () => {
        purchaseGemReset('lightning-round');
      });
    }
    
    // Survivor Mode ad button
    const smWatchAdBtn = document.getElementById('sm-watch-ad');
    if (smWatchAdBtn) {
      smWatchAdBtn.addEventListener('click', () => {
        watchAdForCooldown('survivor-mode')
          .then(() => {
            alert('Ad completed! Cooldown reduced by 2 hours.');
          })
          .catch((error) => {
            alert(`Ad failed: ${error}`);
          });
      });
    }
    
    // Survivor Mode gem button
    const smBuyGemsBtn = document.getElementById('sm-buy-gems');
    if (smBuyGemsBtn) {
      smBuyGemsBtn.addEventListener('click', () => {
        purchaseGemReset('survivor-mode');
      });
    }
    
    // Extreme Survivor ad button
    const esmWatchAdBtn = document.getElementById('esm-watch-ad');
    if (esmWatchAdBtn) {
      esmWatchAdBtn.addEventListener('click', () => {
        watchAdForCooldown('extreme-survivor')
          .then(() => {
            alert('Ad completed! Cooldown reduced by 2 hours.');
          })
          .catch((error) => {
            alert(`Ad failed: ${error}`);
          });
      });
    }
    
    // Extreme Survivor gem button
    const esmBuyGemsBtn = document.getElementById('esm-buy-gems');
    if (esmBuyGemsBtn) {
      esmBuyGemsBtn.addEventListener('click', () => {
        purchaseGemReset('extreme-survivor');
      });
    }
    
    // Update displays every minute
    setInterval(updateAllCooldownDisplays, 60000);
    
    console.log('Cooldown management system initialized');
  }

  // Export functions
  window.cooldownManager = {
    getCooldownStatus,
    canWatchAdForMode,
    watchAdForCooldown,
    purchaseGemReset,
    formatTimeRemaining,
    updateAllCooldownDisplays
  };
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCooldownSystem);
  } else {
    initializeCooldownSystem();
  }
  
})();