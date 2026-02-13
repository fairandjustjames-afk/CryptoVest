'use strict';

/**
 * Utilities for handling email operations.
 */

/**
 * Validate an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Generate a random email address.
 * @returns {string} - A random email address.
 */
function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const randomString = Array.from({ length: 10 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
    return `${randomString}@example.com`;
}

module.exports = {
    validateEmail,
    generateRandomEmail
};
