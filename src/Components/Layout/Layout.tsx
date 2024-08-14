import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  return (
    <div className="min-h-screen bg-black text-white" style={{backgroundImage: 'url("/path/to/your/background-image.jpg")'}}>
      {!isHomePage && (
        <header className="p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">Micah Ames</Link>
            <nav>
              {['Home', 'About', 'Resume', 'Tools', 'Portfolio', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={`mx-2 hover:text-cyan-400 ${location.pathname === `/${item.toLowerCase()}` ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}
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