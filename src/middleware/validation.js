// Validation middleware

function validateRequest(req, res, next) {
    // Perform validation on req.body, req.params, etc.
    const errors = [];

    // Example validation logic
    if (!req.body.username) {
        errors.push('Username is required.');
    }

    if (!req.body.password) {
        errors.push('Password is required.');
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next(); // Proceed to the next middleware or route handler
}

module.exports = validateRequest;