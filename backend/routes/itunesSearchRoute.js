const { searchItunes } = require('../controllers/itunesSearchController');

// Define the route function
const itunesSearchRoute = (app) => {
  // Define the GET route for searching iTunes content
  // Example: GET /search?term=beyonce&media=music
  app.get('/search', searchItunes);
};

// Export the route function
module.exports = itunesSearchRoute;