const axios = require('axios'); // For making HTTP requests to the iTunes API

// Base URL for the iTunes Search API
const ITUNES_API_BASE_URL = 'https://itunes.apple.com/search';

const searchItunes = async (req, res) => {
  // Get search term and media type from query parameters
  const { term, media } = req.query; // e.g., /search?term=coldplay&media=music

  // Basic validation
  if (!term) {
    return res.status(400).json({ message: 'Search term is required.' });
  }

  try {
    // Construct parameters for iTunes API call
    const params = {
      term: term,
      limit: 20, // Limit results for quicker response
      // Add media type if provided, otherwise iTunes API defaults to 'all'
      // Reference: https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017651-CH5-SW1
      media: media || 'all',
    };

    // Make the request to the official iTunes Search API
    const response = await axios.get(ITUNES_API_BASE_URL, { params });

    // Process the results based on task requirements
    const formattedResults = response.data.results.map(item => ({
      trackId: item.trackId || item.collectionId || item.artistId, // Unique ID for the item
      trackName: item.trackName || item.collectionName || item.artistName || 'N/A', // e.g., song title, album name
      artistName: item.artistName || 'N/A',
      artworkUrl100: item.artworkUrl100 || '', // Album cover image
      releaseDate: item.releaseDate ? new Date(item.releaseDate).toLocaleDateString() : 'N/A', // Formatted date
      kind: item.kind || item.wrapperType || 'N/A', // e.g., 'song', 'album', 'podcast'
      previewUrl: item.previewUrl || null // For music/video previews
    }));

    res.json(formattedResults); // Send the formatted results to the frontend
  } catch (error) {
    console.error('Error fetching from iTunes API:', error.message);
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      res.status(error.response.status).json({ message: error.response.data || 'Error fetching data from iTunes API.' });
    } else if (error.request) {
      // The request was made but no response was received
      res.status(500).json({ message: 'No response received from iTunes API.' });
    } else {
      // Something happened in setting up the request that triggered an Error
      res.status(500).json({ message: 'An unexpected error occurred during API request.' });
    }
  }
};

module.exports = {
  searchItunes,
};