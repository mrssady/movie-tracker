import { useState } from 'react';
import axios from 'axios';

const TMDB_API_KEY = '6809673e40bd3129cf6c33da41b85f87';

function SearchMovies() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: TMDB_API_KEY,
          query,
        },
      });
      setResults(res.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>🔍 Search Movies</h2>
      <form onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {results.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.release_date})
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              style={{ display: 'block', marginTop: '10px' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchMovies;
