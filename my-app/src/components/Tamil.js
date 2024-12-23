
import React from 'react';
import MovieCard from './MovieCard';

const tamilMovies = [
  {
    image: '/images/Tamil01.jpg',
    title: 'Tamil Movie 1',
    rating: 8.5,
    review: 'Excellent movie!'
  },
  {
    image: '/images/Tamil02.jpg',
    title: 'Tamil Movie 2',
    rating: 7.4,
    review: 'Very good!'
  },
  {
    image: '/images/Tamil03.jpeg',
    title: 'Tamil Movie 3',
    rating: 6.9,
    review: 'Good entertainment.'
  },
  {
    image: '/images/Tamil04.jpg',
    title: 'Tamil Movie 4',
    rating: 9.1,
    review: 'Outstanding!'
  },
  {
    image: '/images/Tamil05.jpg',
    title: 'Tamil Movie 5',
    rating: 7.8,
    review: 'Enjoyable watch.'
  },
  {
    image: '/images/Tamil06.jpg',
    title: 'Tamil Movie 6',
    rating: 8.8,
    review: 'Enjoyable watch.'
  }
];

function Tamil() {
  return (
    <div id="tamil">
      <h2>Tamil Movies</h2>
      <div className="movie-list">
        {tamilMovies.map((movie, index) => (
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

export default Tamil;

