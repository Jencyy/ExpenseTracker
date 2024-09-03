const express = require('express');
const router = express.Router();
const con = require('../controllers/controllers');

// default
router.get('/', con.defaultCon);

// Add Transaction Form
router.get('/addForm', con.createTrackerCon);

// Handle Add Transaction
router.post('/addTracker', con.addTrackerCon);

// Edit Transaction Form
router.get('/editTracker/:id', con.singleTrackerCon);

// Handle Update Transaction
router.post('/update/:id', con.updateTrackerCon);

// Delete Transaction
router.get('/deleteTracker/:id', con.deleteTrackerCon);

module.exports = router;
