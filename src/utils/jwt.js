'use strict';

const jwt = require('jsonwebtoken');

/**
 * Generate a JWT token.
 * @param {Object} payload - The payload to encode in the token.
 * @param {string} secret - The secret key to sign the token.
 * @param {Object} options - Options to configure the token.
 * @returns {string} - The generated JWT token.
 */
function generateToken(payload, secret, options) {
    return jwt.sign(payload, secret, options);
}

/**
 * Verify a JWT token.
 * @param {string} token - The token to verify.
 * @param {string} secret - The secret key to verify the token.
 * @returns {Object} - The decoded payload if the token is valid.
 * @throws {Error} - Throws an error if the token is invalid.
 */
function verifyToken(token, secret) {
    return jwt.verify(token, secret);
}

/**
 * Decode a JWT token without verification.
 * @param {string} token - The token to decode.
 * @returns {Object} - The decoded payload.
 */
function decodeToken(token) {
    return jwt.decode(token);
}

module.exports = {
    generateToken,
    verifyToken,
    decodeToken
};