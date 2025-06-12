const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const itunesSearchRoute = require('./routes/itunesSearchRoute');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

itunesSearchRoute(app);

// Serve React frontend static files from build output
app.use(express.static(path.join(__dirname, '../frontend/dist'))); // if using Vite
// If using Create React App instead of Vite, change 'dist' to 'build':
// app.use(express.static(path.join(__dirname, '../frontend/build')));

// Fallback to serve index.html for SPA routing support
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  // If CRA: '../frontend/build/index.html'
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Backend server is listening on port ${PORT}`);
});
