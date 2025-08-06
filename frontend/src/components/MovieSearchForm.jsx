import React from 'react';
import StatusDropdown from './StatusDropdown';

export default function MovieSearchForm({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  searchResults,
  onSelectMovie,
  selectedMovie,
  statusList,
  selectedStatusId,
  onStatusChange,
  onAddMovie,
}) {
  return (
    <div>
      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 && (
        <div>
          <h4>Select a Movie:</h4>
          <ul>
            {searchResults.map((movie) => (
              <li key={movie.id}>
                <button type="button" onClick={() => onSelectMovie(movie)}>
                  {movie.title} ({movie.release_date?.split('-')[0]})
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedMovie && (
        <form onSubmit={onAddMovie}>
          <h4>Selected: {selectedMovie.title}</h4>
          <StatusDropdown
            statusList={statusList}
            selectedStatusId={selectedStatusId}
            onChange={(e) => onStatusChange(e.target.value)}
          />
          <button type="submit">Add Movie</button>
        </form>
      )}
    </div>
  );
}
