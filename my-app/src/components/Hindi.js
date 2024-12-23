
import React from 'react';
import MovieCard from './MovieCard';

const hindiMovies = [
  {
    image: '/images/Hindi01.jpg',
    title: 'Hindi Movie 1',
    rating: 8.0,
    review: 'Very good movie.'
  },
  {
    image: '/images/Hindi02.jpg',
    title: 'Hindi Movie 2',
    rating: 7.3,
    review: 'Well made.'
  },
  {
    image: '/images/Hindi03.jpg',
    title: 'Hindi Movie 3',
    rating: 6.7,
    review: 'Entertaining.'
  },
  {
    image: '/images/Hindi04.jpg',
    title: 'Hindi Movie 4',
    rating: 9.0,
    review: 'Exceptional!'
  },
  {
    image: '/images/Hindi05.jpg',
    title: 'Hindi Movie 5',
    rating: 7.7,
    review: 'Good movie.'
  },
  {
    image: '/images/Hindi06.jpg',
    title: 'Hindi Movie 6',
    rating: 6.5,
    review: 'Good movie.'
  }
];

function Hindi() {
  return (
    <div id="hindi">
      <h2>Hindi Movies</h2>
      <div className="movie-list">
        {hindiMovies.map((movie, index) => (
          <MovieCard
            key={index}
            image={movie.image}
            title={movie.title}
            rating={movie.rating}
            review={movie.review}
          />
        ))}
      </div>
    </div>
  );
}

export default Hindi;


