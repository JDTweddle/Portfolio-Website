import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="text-center max-w-md mb-40 ml-20 mr-30 z-10">
        <h1 className="text-5xl font-bold mb-6">John Tweddle</h1>
        <p className="text-2xl mb-6 font-thin break-words">
          I'm a passionate Cloud and Devops engineer.
        </p>
        <nav className="justify-center mb-10 flex flex-wrap">
          {['Home', 'About', 'Resume', 'Tools', 'Portfolio', 'Contact me'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-xl font-mono mr-4 hover:text-yellow-400"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="justify-center flex space-x-6">
          <a className="hover:text-yellow-400" href="https://github.com/JDTweddle" target="_blank" rel="noopener noreferrer">
            <FaGithub size={35} />
          </a>
          <a className="hover:text-yellow-400" href="https://linkedin.com/in/john-tweddle-079219293" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={35} />
          </a>
          <a className="hover:text-yellow-400" href="https://medium.com/@jdtweddle" target="_blank" rel="noopener noreferrer">
            <FaMedium size={35} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;