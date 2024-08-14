import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-4">Micah Ames</h1>
        <p className="text-xl mb-8">I'm an enthusiastic Cloud Engineer from Virginia</p>
        <nav className="mb-8">
          {['Home', 'About', 'Resume', 'Tools', 'Portfolio', 'Contact'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="mr-4 hover:text-cyan-400"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer">
            <FaMedium size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;