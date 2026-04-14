const express = require('express');
const { body, validationResult } = require('express-validator');
const profilesController = require('../controllers/profilesController');
const { authenticateJWT } = require('../middleware/authMiddleware');
const router = express.Router();

// Require authentication for every profile route
router.use(authenticateJWT);

// Validation middleware
const validateProfile = [
  body('name')
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters long')
    .trim(),
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('age')
    .optional()
    .isInt({ min: 0, max: 150 })
    .withMessage('Age must be a number between 0 and 150')
];

// Create or Update Profile
router.post('/', validateProfile, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array(),
    });
  }

  return profilesController.upsertProfile(req, res);
});

// Get Profile by Email
router.get('/:email', profilesController.getProfileByEmail);

// Get All Profiles
router.get('/', profilesController.getAllProfiles);

// Delete Profile
router.delete('/:email', profilesController.deleteProfile);

module.exports = router;
