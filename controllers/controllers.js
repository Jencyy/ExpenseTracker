const TransactionModel = require('../models/transaction');

const defaultCon = async (req, res) => {

    const eTransaction = await TransactionModel.find({});
    res.render('index', { eTransaction });

};

const createTrackerCon = (req, res) => {
    res.render('addTransaction', { eTransaction: null });
};

const addTrackerCon = async (req, res) => {

    console.log('Add Transaction');
    const newTracker = new TransactionModel(req.body);
    await newTracker.save();
    res.redirect('/');

};

const singleTrackerCon = async (req, res) => {

    const { id } = req.params;
    const eTransaction = await TransactionModel.findById(id);
    res.render('addTransaction', { eTransaction });

};

const updateTrackerCon = async (req, res) => {

    const { id } = req.params;
    const updatedTracker = await TransactionModel.findByIdAndUpdate(id, req.body, { new: true });

    console.log('Updated Tracker', updatedTracker);
    res.redirect('/');

};

const deleteTrackerCon = async (req, res) => {

    const { id } = req.params;
    const deletedData = await TransactionModel.findByIdAndDelete(id);

    console.log("Deleted data", deletedData);
    res.redirect('/');

};

module.exports = {
    defaultCon,
    createTrackerCon,
    addTrackerCon,
    singleTrackerCon,
    updateTrackerCon,
    deleteTrackerCon
};
