require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { summarizeTextHandler } = require('./controllers/summarizeController');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/summarize', summarizeTextHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
