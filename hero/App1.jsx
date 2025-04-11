import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>My Website</h1>
      <nav>
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h2>Welcome to My Website</h2>
      <p>Discover the best services and solutions for your needs.</p>
    </section>
  );
}

function Service() {
  return (
    <section className="service">
      <h3>Our Services</h3>
      <ul>
        <li>Web Development</li>
        <li>Design</li>
        <li>Marketing</li>
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 My Website. All rights reserved.</p>
    </footer>
  );
}

export default App;