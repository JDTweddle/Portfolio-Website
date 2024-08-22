import React from 'react';
import { FaAws, FaDocker, FaGithub, FaTerminal } from 'react-icons/fa';
import { SiTerraform, SiAnsible, SiKubernetes, SiPrometheus, SiGrafana } from 'react-icons/si';

const tools = [
  { name: 'Terraform', description: 'Proficient in using Terraform for infrastructure as code (IaC), automating the provisioning and management of cloud resources, and ensuring scalable, reproducible infrastructure deployments.', icon: <SiTerraform /> },
  { name: 'Docker', description: 'Containerize applications with Docker, managing Docker images and containers, and orchestrating multi-container deployments to ensure consistent and efficient cloud-based operations.', icon: <FaDocker /> },
  { name: 'GitHub', description: 'I use GitHub for version control and collaboration, implementing effective branching strategies, managing repositories, and integrating continuous deployment pipelines.', icon: <FaGithub /> },
  { name: 'Shell & Bash', description: 'Skilled in scripting with Bash and shell to automate system tasks, streamline operations, and manage cloud infrastructure in Unix/Linux environments.', icon: <FaTerminal /> },
  { name: 'Ansible', description: 'Experience with Ansible for infrastructure automation. Their playbooks streamline server configuration, package management, and maintain consistency across environments.', icon: <SiAnsible /> },
  { name: 'GitHub Workflows', description: 'GitHub Workflows pipelines for continuous integration. Their workflows incorporate version control, automated testing, and reliable deployments.', icon: <FaGithub /> },
  { name: 'AWS', description: 'Knowledgeable in designing, implementing, and managing scalable, highly available cloud architectures.', icon: <FaAws /> },
  { name: 'Prometheus and Grafana', description: 'Configuring Prometheus for metrics collection and Grafana for visualization, enabling comprehensive monitoring and insightful dashboards for cloud environments.', icon: <><SiPrometheus className="inline-block mr-2" /><SiGrafana className="inline-block" /></> },
  { name: 'Kubernetes', description: 'Manages Kubernetes clusters adeptly. Their skills include deploying applications, scaling resources, and implementing robust container orchestration strategies.', icon: <SiKubernetes /> },
];

const Tools: React.FC = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">TOOLS I WORK WITH</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div key={tool.name} className="bg-gray-800 p-6 rounded-lg">
            <div className="text-cyan-400 text-4xl mb-4">{tool.icon}</div>
            <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
            <p>{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;