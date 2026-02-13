'use strict';

/**
 * Generates a random cryptographic key.
 * @returns {string} A random cryptographic key.
 */
function generateKey() {
    return crypto.getRandomValues(new Uint8Array(32)).join('');
}

/**
 * Hashes the provided data using SHA-256.
 * @param {string} data - The data to hash.
 * @returns {Promise<string>} A Promise that resolves to the hash of the data.
 */
async function hashData(data) {
    const encoder = new TextEncoder();
    const dataArray = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataArray);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

module.exports = { generateKey, hashData };