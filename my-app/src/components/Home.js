
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Sidebar from './Sidebar';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideshowImages = [
    '/images/cartoon01.jpg',
    '/images/English01.jpg',
    '/images/Hindi01.jpg',
    '/images/Tamil01.jpg',
    '/images/English01.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slideshowImages.length) % slideshowImages.length);
  };

  return (
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        <div className="slideshow-container">
          <img
            className="slideshow-img"
            src={slideshowImages[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
          />
          <button className="slideshow-prev" onClick={prevSlide}>&#10094;</button>
          <button className="slideshow-next" onClick={nextSlide}>&#10095;</button>
        </div>
        <div className="content">
          <div className="grid-container">
            <div className="grid-item">
              <h2 className="category-title">Tamil Movies</h2>
              <p className="category-description">Discover the latest Tamil releases.</p>
              <Link to="/tamil" className="category-link">View Tamil Movies</Link>
            </div>
            <div className="grid-item">
              <h2 className="category-title">English Movies</h2>
              <p className="category-description">Explore popular English language movies.</p>
              <Link to="/english" className="category-link">View English Movies</Link>
            </div>
            <div className="grid-item">
              <h2 className="category-title">Hindi Movies</h2>
              <p className="category-description">Enjoy Bollywood and Hindi cinema.</p>
              <Link to="/hindi" className="category-link">View Hindi Movies</Link>
            </div>
            <div className="grid-item">
              <h2 className="category-title">Cartoon Movies</h2>
              <p className="category-description">Entertain your kids with animated films.</p>
              <Link to="/cartoon" className="category-link">View Cartoon Movies</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;




