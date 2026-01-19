// Nested Arrow Functions Lab
// createLoginTracker should return a function that tracks login attempts

const createLoginTracker = (user) => {
  let failedAttempts = 0;
  const maxAttempts = 3;

  return (password) => {
    // If already locked, always return locked message
    if (failedAttempts >= maxAttempts) {
      return "Account locked due to too many failed login attempts";
    }

    // Correct password
    if (password === user.password) {
      return "Login successful";
    }

    // Wrong password: increment and return attempt message
    failedAttempts += 1;

    // If they just hit the 3rd fail, still return Attempt 3 message (per test)
    if (failedAttempts <= maxAttempts) {
      return `Attempt ${failedAttempts}: Login failed`;
    }

    // Safety fallback (shouldn't be hit)
    return "Account locked due to too many failed login attempts";
  };
};

module.exports = {
  createLoginTracker,
};
