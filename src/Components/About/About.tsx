import React from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaPhone, FaHome, FaEnvelope, FaRocket, FaBook, FaUsers, FaTools } from 'react-icons/fa';
import { IoDocumentText, IoCodeSlash, IoServerOutline, IoGitNetwork, IoShieldCheckmark, IoDesktop, IoCloud, IoAnalytics } from 'react-icons/io5';

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">LEARN MORE ABOUT ME</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="/src/Components/About/Capture2.png" alt="Code" className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-2">Contact me</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <a href="https://linkedin.com/in/john-tweddle-079219293" className="flex items-center hover:text-yellow-400">
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <div className="flex items-center"><FaPhone className="mr-2" /> +44 7961756745</div>
            <a href="https://github.com/JDTweddle" className="flex items-center hover:text-yellow-400">
              <FaGithub className="mr-2" /> GitHub
            </a>
            <div className="flex items-center"><FaHome className="mr-2" /> Shipston-on-Stour, UK</div>
            <a href="https://medium.com/@jdtweddle" className="flex items-center hover:text-yellow-400">
              <FaMedium className="mr-2" /> Medium
            </a>
            <div className="flex items-center"><FaEnvelope className="mr-2" /> jdtweddle@gmail.com</div>
          </div>
          <p className="mb-4">
            <div>Hi there and welcome.</div>
            I am a Cloud and Devops Engineer with AWS,
            infrastructure as code, and DevOps Skills.
            I possess a strong analytical mindset 
            and enjoy solving complex problems. 
            I have a passion for continuous learning 
            and harnessing emerging technologies to help people 
            and business grow. I take pride in my work and personal growth.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {[
          { trait: 'Problem Solver', icon: <FaRocket className="text-red-400 text-3xl"/> },
          { trait: 'Eager to Learn', icon: <FaBook className="text-green-400 text-3xl"/> },
          { trait: 'Effective Collaborator', icon: <FaUsers className="text-purple-400 text-3xl"/> },
          { trait: 'Resourceful and Diligent', icon: <FaTools className="text-orange-400 text-3xl"/> }
        ].map(({ trait, icon }) => (
          <div key={trait} className="bg-gray-800 p-4 rounded-lg text-center">
            <span className="text-cyan-400 text-3xl mb-2">{icon}</span>
            <p>{trait}</p>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold mt-8 mb-4">SKILLS</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { skill: 'Thorough Documentation', icon: <IoDocumentText /> },
          { skill: 'Containerization', icon: <IoCodeSlash /> },
          { skill: 'Infrastructure as Code', icon: <IoServerOutline /> },
          { skill: 'Programming ( js/ts, py, html, css, yaml, react )', icon: <IoCodeSlash /> },
          { skill: 'DevOps Practices', icon: <IoGitNetwork /> },
          { skill: 'Automation and Scripting', icon: <IoCodeSlash /> },
          { skill: 'CI/CD Pipelines', icon: <IoGitNetwork /> },
          { skill: 'Identity and Access Management', icon: <IoShieldCheckmark /> },
          { skill: 'Cybersecurity Awareness', icon: <IoShieldCheckmark /> },
          { skill: 'Virtualization', icon: <IoDesktop /> },
          { skill: 'Cloud Management', icon: <IoCloud /> },
          { skill: 'Monitoring and Logging', icon: <IoAnalytics /> }
        ].map(({ skill, icon }) => (
          <div key={skill} className="bg-gray-800 p-4 rounded-lg flex items-center">
            <span className="text-cyan-400 text-2xl mr-2">{icon}</span>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
  