import React from 'react';

const CV: React.FC = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">CHECK MY RESUME</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Summary</h3>
          <h4 className="text-xl font-bold mb-2">MICAH AMES</h4>
          <p className="mb-4">
            Innovative Cloud Engineer with expertise in AWS, Terraform, and DevOps, adept at resolving intricate technical problems. Committed to continuous learning and harnessing emerging technologies to propel business innovation and operational efficiency.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Norfolk, Virginia, US</li>
            <li>(757) 469-7037</li>
            <li>amesmicah@gmail.com</li>
          </ul>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Education</h3>
          <div className="mb-4">
            <h4 className="text-xl font-bold">COMPTIA CERTIFIED COMPTIA SECURITY + CERTIFIED</h4>
            <p className="italic">Active</p>
            <p>Earning the CompTIA Security+ certification demonstrates proficiency in securing networks, managing risks, and responding to security incidents.</p>
          </div>
          {/* Add more education items */}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Professional Experience</h3>
          <div className="mb-4">
            <h4 className="text-xl font-bold">JUNIOR CLOUD SUPPORT ENGINEER</h4>
            <p className="italic">2024 - Present</p>
            <p className="mb-2">Cloud Engineer Academy, Remote</p>
            <ul className="list-disc list-inside">
              <li>Assisted cloud engineering students in troubleshooting and resolving technical issues related to cloud infrastructure and applications</li>
              <li>Provided support to students, answered queries, and documented solutions for future reference</li>
              <li>Conducted testing and monitoring of cloud environments to ensure optimal performance and security</li>
              <li>Gained hands-on experience and projects with AWS services such as EC2, S3, RDS, and Lambda</li>
            </ul>
          </div>
          {/* Add more experience items */}
        </div>
      </div>
    </div>
  );
};

export default CV;