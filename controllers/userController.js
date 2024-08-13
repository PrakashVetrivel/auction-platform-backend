// controllers/userController.js
const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id); // Fetch user by ID from the database
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user); // Send the user data as JSON response
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
