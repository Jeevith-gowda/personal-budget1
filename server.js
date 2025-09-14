const express = require('express');
const { title } = require('process');
const app = express();
const port = 3000;
const budgetData = require("./budget-data.json");

app.use('/', express.static('public'));

const budget = {myBudget: [
    {title: 'Eat out', budget: 260},
    {title: 'Rent', budget: 100},
    {title: 'Grocery', budget: 900},
    {title: 'Utilities', budget: 10},
    {title: 'Entertainment', budget: 109},
]};
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/budget1', (req, res) => {
  res.json(budgetData);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
