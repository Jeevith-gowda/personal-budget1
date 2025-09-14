const express = require('express');
const fs = require('fs'); // for reading JSON file
const path = require('path'); // to make path cross-platform safe
const app = express();
const port = 3000;

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/budget', (req, res) => {
  const filePath = path.join(__dirname, 'budget.json'); // path to your JSON file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return res.status(500).send('Internal Server Error');
    }
    const budgetData = JSON.parse(data); // convert JSON string to JS object
    res.json(budgetData);
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
