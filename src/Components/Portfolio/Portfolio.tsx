import React from 'react';
import { FaGithub, FaMedium } from 'react-icons/fa';
import SmartPicImage from '../../Components/Portfolio/Smart-Pic3.png';
import IncidentResponseImage from '../../Components/Portfolio/Incident-Response.jpg';
import MultiRegionImage from '../../Components/Portfolio/Multi-Region.png';
import PortfolioWebsiteImage from '../../Components/Portfolio/Portfolio-Website.png';
import DockerAppImage from '../../Components/Portfolio/Docker-App.jpg';
import TerraformAnsibleImage from '../../Components/Portfolio/Terraform-Ansible.png';


const projects = [
  { id: 1, image: SmartPicImage, 
    title: 'Smart-Pic',  
    description: 'An AI-powered image recognition app, build with React that leverages AWS static hosting, a global content delivery network and many other security measures build with Terraform.',
    githubLink: 'https://github.com/JDTweddle/Smart-Pic',
    mediumLink: 'https://medium.com/@jdtweddle/smatpic-09f18dc2fc7e'
  },

  { id: 2, image: IncidentResponseImage, 
    title: 'Automated-Incident-Response',  
    description: 'Leveraging AWS Lambda and other services build using Terraform to automate incident response, enhancing system reliability and operational efficiency through real-time monitoring, alerting, and automated handling of system anomalies.',
    githubLink: 'https://github.com/JDTweddle/Automated-Incident-Response',
    mediumLink: 'https://medium.com/@jdtweddle/automated-incident-response-5476b84b1002'
  },

  { id: 3, image: MultiRegionImage, 
    title: 'Multi-Region Deployment for High Availability',  
    description: 'Achieve high availability and resilience by distributing resources across multiple regions and availability zones. This setup safeguards against downtime and ensures our services remain operational even if region and or an AZ faces issues.',
    githubLink: 'https://github.com/JDTweddle/Multi-Region-Deployment',
    mediumLink: 'https://medium.com/@jdtweddle/multi-region-deployment-e2622f2aecfd'
  },

  { id: 4, image: PortfolioWebsiteImage, 
    title: 'Portfolio-Website',  
    description: 'A portfolio website build from scratch using Typescript, React+Vite and Tailwind CSS. Deployed on AWS with S3, Route 53 and Cloudfront',
    githubLink: 'https://github.com/JDTweddle/Portfolio-Website',
    mediumLink: 'https://medium.com/@jdtweddle/portfolio-website-03c602d94036'
  },

  { id: 5, image: DockerAppImage, 
    title: 'Containerized Web Application Deployment', 
    description: 'A containerized web application using Docker and Terraform',
    githubLink: 'https://github.com/JDTweddle/Containerized-Web-App',
    mediumLink: 'https://medium.com/@jdtweddle/containerized-web-appl-6ddfa9719ab1'
  },

  { id: 6, image: TerraformAnsibleImage, 
    title: 'Automated Deployment', 
    description: 'Static Website Deployment using AWS, Terraform, and Ansible', 
    githubLink: 'https://github.com/JDTweddle/Automated-Deployment',
    mediumLink: 'https://medium.com/@jdtweddle/automated-deployment-de286df36bf1'
  },  
];

const Portfolio: React.FC = () => {
  return (
    <div className="bg-gray-900 ml-6 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">MY PROJECTS</h2>
      <div className="mb-20">
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="relative group overflow-hidden rounded-lg">
            <div className="relative h-80">
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="relative w-full h-full p-1 flex items-center justify-center">
                <div className="text-center z-10">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-yellow-400">
                        <FaGithub size={26} />
                      </a>
                    )}
                    {project.mediumLink && (
                      <a href={project.mediumLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-yellow-400">
                        <FaMedium size={26} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-white transition-all duration-500 ease-out group-hover:w-1/4 group-hover:h-1/4"></div>
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-white transition-all duration-500 ease-out group-hover:w-1/4 group-hover:h-1/4"></div>
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