import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import backgroundImage from '/src/Components/Layout/Background.jpg';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  return (
    <div 
      className="min-h-screen bg-black text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
      {!isHomePage && (
        <header className="p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-6xl font-bold">John Tweddle</Link>
            <nav>
              {['Home', 'About', 'Resume', 'Tools', 'Portfolio', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={`mx-2 hover:text-yellow-400 ${location.pathname === `/${item.toLowerCase()}` ? 'text-yellow-400 border-b-2 border-yellow-400' : ''}`}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </header>
      )}
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;