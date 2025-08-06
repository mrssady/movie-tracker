import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import MovieSearchForm from '../components/MovieSearchForm';
import MovieListItem from '../components/MovieListItem';

function MyMovies() {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [statusList, setStatusList] = useState([]);
  const [selectedStatusId, setSelectedStatusId] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const token = localStorage.getItem('token');
  const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    console.log('TMDB API Key:', tmdbApiKey);
  }, []);

  const fetchMovies = async () => {
    try {
      const res = await axios.get('http://localhost:3000/user-movies', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMovies(res.data);
    } catch (err) {
      console.error('Error fetching user movies:', err);
    }
  };

  useEffect(() => {
    setStatusList([
      { id: 1, name: 'Want to Watch' },
      { id: 2, name: 'Watching' },
      { id: 3, name: 'Watched' },
    ]);
    fetchMovies();
  }, []);

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${encodeURIComponent(searchQuery)}`
      );
      setSearchResults(res.data.results);
    } catch (err) {
      console.error('Error searching movies:', err);
    }
  };

  const addMovie = async (e) => {
    e.preventDefault();
    if (!selectedMovie || !selectedStatusId) {
      alert('Please select both a movie and a status');
      return;
    }

    try {
      await axios.post(
        'http://localhost:3000/user-movies',
        {
          movieId: selectedMovie.id,
          statusId: Number(selectedStatusId),
          rating: null,
          review: '',
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSelectedMovie(null);
      setSearchQuery('');
      setSelectedStatusId('');
      setSearchResults([]);
      fetchMovies();
    } catch (err) {
      console.error('Error adding movie:', err);
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const newDetails = {};
      for (let movie of movies) {
        if (!movieDetails[movie.movieId]) {
          try {
            const res = await axios.get(
              `https://api.themoviedb.org/3/movie/${movie.movieId}?api_key=${tmdbApiKey}`
            );
            newDetails[movie.movieId] = res.data;
          } catch (err) {
            console.error(`Failed to fetch details for movie ID ${movie.movieId}`, err);
          }
        }
      }
      setMovieDetails((prev) => ({ ...prev, ...newDetails }));
    };

    if (movies.length > 0) fetchDetails();
  }, [movies]);

  const handleDelete = async (movieId) => {
    try {
      await axios.delete(`http://localhost:3000/user-movies/${movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchMovies();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const handleStatusChange = async (movieId, newStatusId) => {
    try {
      await axios.patch(
        `http://localhost:3000/user-movies/${movieId}`,
        { statusId: newStatusId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchMovies();
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>🎬 My Movie Tracker</h2>

      <MovieSearchForm
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={searchMovies}
        searchResults={searchResults}
        onSelectMovie={setSelectedMovie}
        selectedMovie={selectedMovie}
        statusList={statusList}
        selectedStatusId={selectedStatusId}
        onStatusChange={setSelectedStatusId}
        onAddMovie={addMovie}
      />

      <hr />

      <h3>🎞️ My Saved Movies</h3>
      <ul>
        {movies.map((movie) => (
          <MovieListItem
            key={movie.id}
            movie={movie}
            details={movieDetails[movie.movieId]}
            statusList={statusList}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default MyMovies;
