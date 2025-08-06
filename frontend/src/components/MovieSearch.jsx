// src/components/MovieSearch.jsx
import { useState } from 'react';
import axios from 'axios';

function MovieSearch({ onSelect }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = async () => {
    if (!query) return;

    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            query,
          },
        }
      );
      setResults(res.data.results);
    } catch (error) {
      console.error('TMDb search error:', error);
    }
  };

  return (
    <div>
      <input
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovies}>Search</button>

      <ul>
        {results.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
              alt={movie.title}
              style={{ marginRight: '10px' }}
            />
            {movie.title}
            <button onClick={() => onSelect(movie)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieSearch;
