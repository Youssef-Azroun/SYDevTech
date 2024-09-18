import React, { useEffect } from 'react';
import './App.css'
import backgroundImage from './assets/background.jpeg'
import logo from './assets/logoo.png'
import instaLogo from './assets/insta.png'
import teleLogo from './assets/tele.png'
import gmailLogo from './assets/gmail.png'

function App() {
  useEffect(() => {
    createBubbles();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const logos = document.querySelectorAll('.contact-logo');
      logos.forEach((logo) => {
        const speed = logo.getAttribute('alt') === 'Instagram' ? 0.5 : 0.3;
        const yPos = -(window.pageYOffset * speed);
        logo.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function createBubbles() {
    const bubbleContainer = document.createElement('div');
    bubbleContainer.className = 'bubble-container';
    document.body.appendChild(bubbleContainer);

    const colors = ['#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', '#ff69b4'];

    for (let i = 0; i < 10; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      const size = Math.random() * 60 + 20;
      const color = colors[Math.floor(Math.random() * colors.length)];

      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.background = color;
      bubble.style.left = `${Math.random() * 20}%`;
      bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
      bubble.style.animationDelay = `${Math.random() * 10}s`;

      bubbleContainer.appendChild(bubble);
    }
  }

  return (
    <div className="app-container">
      <img src={logo} alt="Logo" className="logo-top" />
      <p className="tagline">Elevate your business with exceptional websites and mobile applications.</p>
      <div className="services">
        <h2>Our Services:</h2>
        <ul>
          <li>* Custom Web Applications</li>
          <li>* Mobile App Development
            <ul>
              <li>- Android Applications</li>
              <li>- iOS Applications</li>
            </ul>
          </li>
          <li>* Cross-Platform Solutions</li>
        </ul>
      </div>
      <div className="contact">
        <h2>Contact us for more info:</h2>
        <div className="contact-item">
          <img src={instaLogo} alt="Instagram" className="contact-logo" />
          <span>SYDevTech</span>
        </div>
        <div className="contact-item">
          <img src={teleLogo} alt="Telegram" className="contact-logo" />
          <span>SyDevTech channel</span>
        </div>
        <div className="contact-item">
          <img src={gmailLogo} alt="Gmail" className="contact-logo" />
          <span>sydevtech07@gmail.com</span>
        </div>
      </div>
      <div className="bottom-section">
        <div className="section">
          <h2>About Us</h2>
          <p>SYDevTech is a cutting-edge software development company dedicated to creating innovative solutions for businesses of all sizes.</p>
        </div>
        <hr className="divider" />
        <div className="section">
          <h2>Why Choose Us</h2>
          <ul>
            <li>Expertise in latest technologies</li>
            <li>Tailored solutions for your business needs</li>
            <li>Committed to delivering high-quality products</li>
          </ul>
        </div>
        <hr className="divider" />
        <div className="section">
          <h2>Our Process</h2>
          <p>We follow an agile development process, ensuring transparent communication and rapid iterations to meet your project goals efficiently.</p>
        </div>
        <hr className="divider" />
        <div className="section">
          <h2>Get Started</h2>
          <p>Ready to elevate your business? Contact us today to discuss your project and receive a free consultation.</p>
        </div>
      </div>
    </div>
  )
}

export default App
