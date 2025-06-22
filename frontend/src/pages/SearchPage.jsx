import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests to your backend proxy

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mediaType, setMediaType] = useState('all'); // Default to 'all'
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    // Initialize favorites from localStorage on component mount
    const savedFavorites = localStorage.getItem('itunes_favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Save favorites to localStorage whenever the favorites state changes
  useEffect(() => {
    localStorage.setItem('itunes_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError('');
    setLoading(true);
    setSearchResults([]); // Clear previous results

    if (!searchTerm.trim()) {
      setError('Please enter a search term.');
      setLoading(false);
      return;
    }

    try {
      // --- START OF UPDATE ---
      // Define the base URL for the backend API.
      // import.meta.env.VITE_BACKEND_URL will fetch the value from the .env file
      // (e.g., VITE_BACKEND_URL=https://itunesapiwebsite.onrender.com)
      // This allows  frontend to correctly connect to deployed backend.
      const BASE_URL = import.meta.env.VITE_BACKEND_URL;

      // Call backend's search proxy endpoint using the dynamically set BASE_URL
      const response = await axios.get(`${BASE_URL}/search?term=${encodeURIComponent(searchTerm)}&media=${mediaType}`);
      // --- END OF UPDATE ---

      setSearchResults(response.data);
    } catch (err) {
      console.error("Error fetching search results:", err);
      // More robust error message display
      setError(err.response?.data?.message || 'Failed to fetch search results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const isFavorite = (item) => {
    return favorites.some(fav => fav.trackId === item.trackId);
  };

  const toggleFavorite = (item) => {
    if (isFavorite(item)) {
      setFavorites(favorites.filter(fav => fav.trackId !== item.trackId));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <div className="search-page-container">
      <h1>iTunes & Apple Books Search</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for music, movies, books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select value={mediaType} onChange={(e) => setMediaType(e.target.value)} className="media-select">
          <option value="all">All</option>
          <option value="movie">Movie</option>
          <option value="podcast">Podcast</option>
          <option value="music">Music</option>
          <option value="audiobook">Audiobook</option>
          <option value="shortFilm">Short Film</option>
          <option value="tvShow">TV Show</option>
          <option value="ebook">eBook</option>
        </select>
        <button type="submit" className="search-button">Search</button>
      </form>

      {/* Loading, Error, and Results Display */}
      {loading && <div className="message">Loading results...</div>}
      {error && <div className="api-error-message">{error}</div>}

      {/* Search Results Section */}
      <div className="results-section">
        <h2>Search Results</h2>
        {searchResults.length === 0 && !loading && !error && searchTerm.trim() && (
          <div className="message">No results found for "{searchTerm}".</div>
        )}
        {searchResults.length > 0 && (
          <div className="results-grid">
            {searchResults.map((item) => (
              <div key={item.trackId} className="result-card">
                <img src={item.artworkUrl100} alt={item.trackName} className="result-artwork" />
                <div className="result-details">
                  <p className="result-name">{item.trackName}</p>
                  <p className="result-artist">{item.artistName}</p>
                  <p className="result-release">Release: {item.releaseDate}</p>
                  <p className="result-kind">Type: {item.kind}</p>
                  {item.previewUrl && (
                    <audio controls src={item.previewUrl} className="result-preview-audio">
                      Your browser does not support the audio element.
                    </audio>
                  )}
                  <button
                    onClick={() => toggleFavorite(item)}
                    className={`favorite-button ${isFavorite(item) ? 'favorited' : ''}`}
                  >
                    {isFavorite(item) ? 'Remove from Favorites' : 'Add to Favorites'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Favorites Section */}
      <div className="favorites-section">
        <h2>My Favorites</h2>
        {favorites.length === 0 ? (
          <p className="message">No favorites added yet.</p>
        ) : (
          <div className="results-grid">
            {favorites.map((item) => (
              <div key={item.trackId} className="result-card favorite-card">
                <img src={item.artworkUrl100} alt={item.trackName} className="result-artwork" />
                <div className="result-details">
                  <p className="result-name">{item.trackName}</p>
                  <p className="result-artist">{item.artistName}</p>
                  <p className="result-release">Release: {item.releaseDate}</p>
                  <p className="result-kind">Type: {item.kind}</p>
                  {item.previewUrl && (
                    <audio controls src={item.previewUrl} className="result-preview-audio">
                      Your browser does not support the audio element.
                    </audio>
                  )}
                  <button
                    onClick={() => toggleFavorite(item)}
                    className="favorite-button remove-favorite"
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
