// authController.js

// Function to register a new user
const register = (req, res) => {
    // registration logic here
    res.send('User registered successfully');
};

// Function to login a user
const login = (req, res) => {
    // login logic here
    res.send('User logged in successfully');
};

// Function to logout a user
const logout = (req, res) => {
    // logout logic here
    res.send('User logged out successfully');
};

// Exporting the functions
module.exports = {
    register,
    login,
    logout
};