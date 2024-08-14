import React from 'react';

const tools = [
  { name: 'Terraform', description: 'Proficient in using Terraform for infrastructure as code (IaC), automating the provisioning and management of cloud resources, and ensuring scalable, reproducible infrastructure deployments.' },
  { name: 'Docker', description: 'Adept at containerizing applications with Docker, managing Docker images and containers, and orchestrating multi-container deployments to ensure consistent and efficient cloud-based operations.' },
  { name: 'GitHub', description: 'Experienced in using GitHub for version control and collaboration, implementing effective branching strategies, managing repositories, and integrating continuous deployment pipelines.' },
  { name: 'Shell & Bash', description: 'Skilled in scripting with Bash and shell to automate system tasks, streamline operations, and manage cloud infrastructure in Unix/Linux environments.' },
  { name: 'Ansible', description: 'Demonstrates expertise in Ansible for infrastructure automation. Their playbooks streamline server configuration, package management, and maintain consistency across environments.' },
  { name: 'Jenkins', description: 'Skilled at setting up Jenkins pipelines for continuous integration. Their workflows incorporate version control, automated testing, and reliable deployments.' },
  { name: 'AWS (Amazon Web Services)', description: 'Extensive experience with AWS services, including EC2, S3, RDS, Lambda, and more. Proficient in designing, implementing, and managing scalable, highly available cloud architectures.' },
  { name: 'Prometheus and Grafana', description: 'Experienced in configuring Prometheus for metrics collection and Grafana for visualization, enabling comprehensive monitoring and insightful dashboards for cloud environments.' },
  { name: 'Kubernetes', description: 'Manages Kubernetes clusters adeptly. Their skills include deploying applications, scaling resources, and implementing robust container orchestration strategies.' },
];

const Tools: React.FC = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">TOOLS I WORK WITH</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div key={tool.name} className="bg-gray-800 p-6 rounded-lg">
            <div className="text-cyan-400 text-4xl mb-4">🛠</div>
            <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
            <p>{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;