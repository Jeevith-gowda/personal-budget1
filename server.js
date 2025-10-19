const express = require('express');
const mongoose = require('mongoose');
const Budget = require('./models/budgetModel');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/personal_budget', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// GET endpoint - Fetch all budget data
app.get('/api/budget', async (req, res) => {
    try {
        const budgets = await Budget.find();
        res.json(budgets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST endpoint - Add new budget entry
app.post('/api/budget', async (req, res) => {
    try {
        const { title, budget, color } = req.body;
        
        const newBudget = new Budget({
            title,
            budget,
            color
        });
        
        const savedBudget = await newBudget.save();
        res.status(201).json(savedBudget);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});