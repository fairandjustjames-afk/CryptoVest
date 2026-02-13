// referralController.js

/**
 * Referral Controller
 * Handles referral-related actions for the CryptoVest application.
 */

const Referral = require('../models/Referral'); // Assuming you have a Referral model

/**
 * Create a new referral
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const createReferral = async (req, res) => {
    try {
        const referralData = req.body;
        const newReferral = await Referral.create(referralData);
        res.status(201).json(newReferral);
    } catch (error) {
        res.status(500).json({ message: 'Error creating referral', error });
    }
};

/**
 * Get all referrals
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const getAllReferrals = async (req, res) => {
    try {
        const referrals = await Referral.find();
        res.status(200).json(referrals);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching referrals', error });
    }
};

/**
 * Get a referral by ID
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const getReferralById = async (req, res) => {
    try {
        const { id } = req.params;
        const referral = await Referral.findById(id);
        if (!referral) {
            return res.status(404).json({ message: 'Referral not found' });
        }
        res.status(200).json(referral);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching referral', error });
    }
};

/**
 * Update a referral
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const updateReferral = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedReferral = await Referral.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedReferral) {
            return res.status(404).json({ message: 'Referral not found' });
        }
        res.status(200).json(updatedReferral);
    } catch (error) {
        res.status(500).json({ message: 'Error updating referral', error });
    }
};

/**
 * Delete a referral
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const deleteReferral = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedReferral = await Referral.findByIdAndDelete(id);
        if (!deletedReferral) {
            return res.status(404).json({ message: 'Referral not found' });
        }
        res.status(200).json({ message: 'Referral deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting referral', error });
    }
};

module.exports = {
    createReferral,
    getAllReferrals,
    getReferralById,
    updateReferral,
    deleteReferral,
};