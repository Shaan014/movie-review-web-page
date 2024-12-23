// src/App.js
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cartoon from './components/Cartoon';
import English from './components/English';
import Hindi from './components/Hindi';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Tamil from './components/Tamil';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tamil">Tamil</Link></li>
              <li><Link to="/english">English</Link></li>
              <li><Link to="/hindi">Hindi</Link></li>
              <li><Link to="/cartoon">Cartoon</Link></li>
            </ul>
          </nav>
          <Link to="/login" className="login-icon"><FaUser /></Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tamil" element={<Tamil />} />
            <Route path="/english" element={<English />} />
            <Route path="/hindi" element={<Hindi />} />
            <Route path="/cartoon" element={<Cartoon />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;



