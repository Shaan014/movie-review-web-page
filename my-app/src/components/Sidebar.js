
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        &#9776; {/* Hamburger icon */}
      </div>
      <div className="links">
        <Link to="/action">Action</Link>
        <Link to="/drama">Drama</Link>
        <Link to="/comedy">Comedy</Link>
      </div>
    </div>
  );
}

export default Sidebar;





