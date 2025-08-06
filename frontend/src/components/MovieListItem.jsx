import React from 'react';
import StatusDropdown from './StatusDropdown';

export default function MovieListItem({ movie, details, statusList, onStatusChange, onDelete }) {
  const currentStatus = statusList.find((s) => s.id === movie.statusId)?.name || '';

  return (
    <li style={{ marginBottom: '1rem' }}>
      {details ? (
        <>
          <strong>{details.title}</strong>
          <div>
            Status:{' '}
            <StatusDropdown
              statusList={statusList}
              selectedStatusId={movie.statusId}
              onChange={(e) => onStatusChange(movie.id, Number(e.target.value))}
            />
            <button onClick={() => onDelete(movie.id)} style={{ marginLeft: '1rem', color: 'red' }}>
              🗑️ Delete
            </button>
          </div>
          {details.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w92${details.poster_path}`}
              alt={details.title}
              style={{ marginTop: '5px' }}
            />
          )}
        </>
      ) : (
        <>Loading movie details...</>
      )}
    </li>
  );
}
