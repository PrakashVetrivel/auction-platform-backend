const express = require('express');
const router = express.Router();
const { getUserProfile } = require('../controllers/userController');

// Route to get user profile by ID
router.get('/profile/:id', (req, res) => {
    console.log('User ID:', req.params.id); // Log the user ID from the request parameters
    getUserProfile(req, res); // Call the controller function to handle the request
});

module.exports = router;
