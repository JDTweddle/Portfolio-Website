import React from 'react';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">LEARN MORE ABOUT ME</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="/src/Components/About/Capture2.png" alt="Code" className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-2">Cloud Engineer</h3>
          <p className="italic mb-4">"Be so good that they can not ignore you" - Steve Martin</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <a href="https://linkedin.com/in/yourusername" className="flex items-center">
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <div>Phone: +1 757 469 7037</div>
            <a href="https://github.com/yourusername" className="flex items-center">
              <FaGithub className="mr-2" /> GitHub
            </a>
            <div>Home: Virginia, USA</div>
            <a href="https://medium.com/@yourusername" className="flex items-center">
              <FaMedium className="mr-2" /> Medium
            </a>
            <div>Email: amesmicah@gmail.com</div>
          </div>
          <p className="mb-4">
            Enthusiastic Cloud Engineer with strong AWS, Terraform, and DevOps Skills. I excel in solving
            complex technical problems with my strong analytical mindset and am dedicated to upskilling
            and continuous learning. Passionate about leveraging emerging technologies to drive business
            innovation and efficiency.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {['Problem Solver', 'Eager to Learn', 'Effective Collaborator', 'Results Driven'].map((trait) => (
          <div key={trait} className="bg-gray-800 p-4 rounded-lg text-center">
            <span className="text-cyan-400 text-2xl mb-2">🚀</span>
            <p>{trait}</p>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold mt-8 mb-4">SKILLS</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          'Thorough Documentation',
          'Containerizations and Orchestration',
          'Cloud Optimization and Cloud Migration',
          'Adaptability',
          'DevOps Practices',
          'Automation and Scripting',
          'CI/CD Pipeline',
          'Identity and Access Management',
          'Cybersecurity Awareness',
          'Virtualization',
          'Infrastructure as Code',
          'Monitoring and Logging'
        ].map((skill) => (
          <div key={skill} className="bg-gray-800 p-4 rounded-lg">
            <span className="text-cyan-400 mr-2">▶</span>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;