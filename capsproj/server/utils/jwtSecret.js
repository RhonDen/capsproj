const crypto = require('crypto');

/**
 * Returns the JWT secret used by the app.
 *
 * If JWT_SECRET is set, uses it.
 * Otherwise generates a random secret at server startup.
 *
 * NOTE: This is to keep admin usable when env is missing.
 * For production, you should always set JWT_SECRET.
 */
function getJwtSecret() {
  if (process.env.JWT_SECRET && process.env.JWT_SECRET.trim()) {
    return process.env.JWT_SECRET.trim();
  }

  // Generate once per process (module singleton)
  if (!global.__APPOINTEASE_JWT_SECRET__) {
    global.__APPOINTEASE_JWT_SECRET__ = crypto.randomBytes(32).toString('hex');
    // eslint-disable-next-line no-console
    console.warn(
      'JWT_SECRET is not set. Using a generated startup secret. For production, set JWT_SECRET in server/.env.'
    );
  }

  return global.__APPOINTEASE_JWT_SECRET__;
}

module.exports = { getJwtSecret };

