import React, { useState } from 'react';

const projects = [
  { id: 1, image: '/path/to/project1.jpg', title: 'Project 1', category: 'web' },
  { id: 2, image: '/path/to/project2.jpg', title: 'Project 2', category: 'app' },
  { id: 3, image: '/path/to/project3.jpg', title: 'Project 3', category: 'web' },
  { id: 4, image: '/path/to/project4.jpg', title: 'Project 4', category: 'design' },
  { id: 5, image: '/path/to/project5.jpg', title: 'Project 5', category: 'app' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="bg-gray-900 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">MY PROJECTS</h2>
      <div className="mb-6">
        <button 
          onClick={() => setFilter('all')} 
          className={`mr-2 px-4 py-2 rounded ${filter === 'all' ? 'bg-cyan-400 text-gray-900' : 'bg-gray-800'}`}
        >
          ALL
        </button>
        {/* Add more filter buttons as needed */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="relative group">
            <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p>Brief description of the project</p>
                <div className="mt-4">
                  <a href="#" className="mr-2 text-cyan-400 hover:text-cyan-300">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300">
                    <i className="fab fa-medium"></i> Medium
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;