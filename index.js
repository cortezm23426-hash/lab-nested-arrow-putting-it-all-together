function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    // If they've already made 3 attempts, lock the account
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    // This attempt counts (1, 2, 3)
    attemptCount += 1;

    // If correct password on attempt 1-3
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    // Wrong password on attempt 1-3
    return `Attempt ${attemptCount}: Login failed`;
  };
}

// Export both ways to satisfy any import style
module.exports = createLoginTracker;
module.exports.createLoginTracker = createLoginTracker;




