const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected' + process.env.MONGO_URI))
.catch((err) => console.log(err));

const Money = require('./models/money');

app.post('/api/incomes', async (req, res) => {
    const { amount, description } = req.body.income;
    
    try {
        await Money.create({
            amount: amount,
            description: description,
            type: 'income'
        });
        
        res.status(200).send('Income data has been saved to MongoDB');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/expenses', async (req, res) => {
    console.log(req.body)
    const expense = req.body.expense;
    try {
        await Money.create({
            amount: expense.amount,
            description: expense.description,
            type: 'expense'
        });        
        
        res.status(200).send('Expense data has been saved to MongoDB');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/incomes', async (req, res) => {
    try {
        const incomes = await Money.find({ type: 'income' });
        res.status(200).json(incomes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/expenses', async (req, res) => {
    try {
        const expenses = await Money.find({ type: 'expense' });
        res.status(200).json(expenses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/data', async (req, res) => {
    try {
        const incomes = await Money.find({ type: 'income' });
        const expenses = await Money.find({ type: 'expense' });
        res.status(200).json({ incomes, expenses });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});