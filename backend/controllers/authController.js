const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const config = require('../config');
const User = require('../models/User');

const signJwt = (user) => {
  if (!config.JWT_SECRET) {
    throw new Error('Server misconfigured: JWT secret missing');
  }

  const payload = {
    userId: user._id.toString(),
    email: user.email,
    name: user.name,
  };

  return jwt.sign(payload, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRES_IN || '1h',
  });
};

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array(),
    });
  }

  try {
    const { name, email, password } = req.body;
    const normalizedEmail = email.toLowerCase();

    // Friendly check (Mongo will also enforce uniqueness)
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Email already in use',
      });
    }

    const user = new User({ name, email: normalizedEmail, password });
    await user.save(); // password is hashed by the model hook

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    if (err && err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Email already in use',
      });
    }

    return res.status(500).json({
      success: false,
      message: err && err.message ? err.message : 'Internal server error',
    });
  }
};

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array(),
    });
  }

  try {
    const { email, password } = req.body;
    const normalizedEmail = email.toLowerCase();

    // password is select:false, so explicitly request it
    const user = await User.findOne({ email: normalizedEmail }).select('+password');
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    const token = signJwt(user);

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      data: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err && err.message ? err.message : 'Internal server error',
    });
  }
};

module.exports = {
  register,
  login,
};

