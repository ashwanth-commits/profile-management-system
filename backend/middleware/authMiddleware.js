const jwt = require('jsonwebtoken');
const config = require('../config');

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: 'Authorization token required',
    });
  }

  const [scheme, token] = authHeader.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({
      success: false,
      message: 'Invalid authorization header. Expected: Bearer <token>',
    });
  }

  if (!config.JWT_SECRET) {
    return res.status(500).json({
      success: false,
      message: 'Server misconfigured: JWT secret missing',
    });
  }

  jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: err.name === 'TokenExpiredError' ? 'Token expired' : 'Invalid token',
      });
    }

    // decoded payload shape is controlled by our /login token generation
    req.user = {
      id: decoded.userId,
      email: decoded.email,
      name: decoded.name,
    };

    return next();
  });
}

module.exports = { authenticateJWT };

