const Profile = require('../models/Profile');

const upsertProfile = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const normalizedEmail = email.toLowerCase();

    let profile = await Profile.findOne({ email: normalizedEmail });

    if (profile) {
      profile.name = name;
      profile.age = age;
      await profile.save();

      return res.status(200).json({
        success: true,
        message: 'Profile updated successfully',
        data: profile,
      });
    }

    profile = new Profile({ name, email: normalizedEmail, age });
    await profile.save();

    return res.status(201).json({
      success: true,
      message: 'Profile created successfully',
      data: profile,
    });
  } catch (error) {
    if (error && error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists',
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error:
        process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
    });
  }
};

const getProfileByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const profile = await Profile.findOne({ email: email.toLowerCase() });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error:
        process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
    });
  }
};

const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: profiles.length,
      data: profiles,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error:
        process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
    });
  }
};

const deleteProfile = async (req, res) => {
  try {
    const { email } = req.params;
    const normalizedEmail = email.toLowerCase();

    const profile = await Profile.findOneAndDelete({ email: normalizedEmail });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Profile deleted successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error:
        process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
    });
  }
};

module.exports = {
  upsertProfile,
  getProfileByEmail,
  getAllProfiles,
  deleteProfile,
};

