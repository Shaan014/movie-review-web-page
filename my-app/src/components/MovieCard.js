
import React from 'react';
import './MovieCard.css';

function MovieCard({ image, title, rating, review }) {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Rating: {rating}/10</p>
      <p>{review}</p>
    </div>
  );
}

export default MovieCard;
