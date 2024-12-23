
import React from 'react';
import MovieCard from './MovieCard';

const englishMovies = [
  {
    image: '/images/English01.jpg',
    title: 'English Movie 1',
    rating: 8.2,
    review: 'Amazing!'
  },
  {
    image: '/images/English02.jpg',
    title: 'English Movie 2',
    rating: 7.5,
    review: 'Great movie.'
  },
  {
    image: '/images/English03.jpg',
    title: 'English Movie 3',
    rating: 6.8,
    review: 'Decent watch.'
  },
  {
    image: '/images/English04.jpg',
    title: 'English Movie 4',
    rating: 9.3,
    review: 'Must watch!'
  },
  {
    image: '/images/English05.jpg',
    title: 'English Movie 5',
    rating: 7.9,
    review: 'Very entertaining.'
  },
  {
    image: '/images/English06.jpg',
    title: 'English Movie 6',
    rating: 5.5,
    review: 'Very entertaining.'
  }
];

function English() {
  return (
    <div id="english">
      <h2>English Movies</h2>
      <div className="movie-list">
        {englishMovies.map((movie, index) => (
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

export default English;

