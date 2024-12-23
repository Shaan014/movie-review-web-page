
import React from 'react';
import MovieCard from './MovieCard';

const cartoonMovies = [
  {
    image: '/images/cartoon01.jpg',
    title: 'Cartoon Movie 1',
    rating: 8.7,
    review: 'Kids will love it!'
  },
  {
    image: '/images/cartoon02.jpg',
    title: 'Cartoon Movie 2',
    rating: 7.6,
    review: 'Very fun!'
  },
  {
    image: '/images/cartoon03.jpg',
    title: 'Cartoon Movie 3',
    rating: 6.5,
    review: 'Good for kids.'
  },
  {
    image: '/images/cartoon04.jpg',
    title: 'Cartoon Movie 4',
    rating: 9.4,
    review: 'Absolutely fantastic!'
  },
  {
    image: '/images/cartoon05.jpg',
    title: 'Cartoon Movie 5',
    rating: 7.8,
    review: 'Great for all ages.'
  },
  {
    image: '/images/cartoon06.jpg',
    title: 'Cartoon Movie 6',
    rating: 7.8,
    review: 'Great for all ages.'
  }
];

function Cartoon() {
  return (
    <div id="cartoon">
      <h2>Cartoon Movies</h2>
      <div className="movie-list">
        {cartoonMovies.map((movie, index) => (
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

export default Cartoon;


