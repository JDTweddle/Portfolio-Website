import React from 'react';

const CV: React.FC = () => {
  return (
    <div className="bg-gray-900 p-8 ml-6 rounded-lg text-white">
      <h2 className="text-3xl font-bold mb-4">My CV</h2>
      <a 
        href="src/Components/CV/John_Tweddle_CV.pdf" 
        download="John_Tweddle_CV.pdf"
        className="inline-block bg-cyan-400 text-gray-900 px-4 py-2 rounded mb-4 hover:bg-yellow-400 transition-colors"
      >
        Download CV
      </a>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Summary</h3>
          <p className="mb-4">
            Adept at using Cloud services and applying DevOps principles. I enjoy tackling
            challenges and driving business success with a good foundation in solutions
            architecture. I excel at communication and working collaboratively with teams.
          </p>
          <br /><br />
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Skills & Competencies</h3>
          <ul className="list-disc list-inside grid grid-cols-2 gap-2 mb-4">
            <li>Cloud Engineering</li>
            <li>DevOps</li>
            <li>AWS</li>
            <li>Cloud Migration</li>
            <li>Agile Methodologies</li>
            <li>Continuous Delivery</li>
            <li>Serverless</li>
            <li>Problem-Solving</li>
            <li>Team Collaboration</li>
            <li>Infrastructure as Code</li>
            <li>Programming (js/ts, py, html, css, yaml, react)</li>
            <li>CI/CD Pipelines</li>
          </ul>
          <br /><br />
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Education</h3>
          <div className="mb-4">
            <h4 className="text-xl font-bold">BTEC - Pearson</h4>
            <p className="italic">2019</p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-bold">Solutions Architect Associate - AWS</h4>
            <p className="italic">2024</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Professional Experience</h3>
          <div className="mb-4">
            <h4 className="text-xl font-bold">ADVANCED ENGINEER</h4>
            <p className="italic">2017 - Present</p>
            <p className="mb-2">Openreach (BT)</p>
            <ul className="list-disc list-outside">
              <li>Operating both independently and in teams to plan, commission, repair, and maintain the Openreach Fiber and Telecoms networks.</li>
              <li>Lead "Brickwall-case" handler, focusing largely on the business and corporate sectors.</li>
              <li>Worked on networks for the BBC, Jaguar-LandRover, the Ministry of Defence, the US Air Force, and influential estates.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-bold">BROADBAND SPECIALIST</h4>
            <p className="italic">2015 - 2017</p>
            <p className="mb-2">Shell Energy</p>
            <ul className="list-disc list-outside">
              <li>Investigated unresolved technical issues and worked with stakeholders to resolve long-standing faults.</li>
              <li>Collaborated with sales teams to help grow the company's new product.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-bold">CAMPAIGN SUPERVISOR</h4>
            <p className="italic">2013 - 2015</p>
            <p className="mb-2">Sitel</p>
            <ul className="list-disc list-outside">
              <li>Assisted sales and technical advisers with queries and training they required.</li>
              <li>Responsible for day-to-day reports and supervision of the support center.</li>
              <li>Selected to spearhead a small Broadband pilot project for one of our largest stakeholders.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-bold">Laboratory Calibration Technician</h4>
            <p className="italic">2010 - 2013</p>
            <p className="mb-2">M&C Laboratories</p>
            <ul className="list-disc list-outside">
              <li>Repairing and calibrating high-end Lab equipment for universities, hospitals and large companies such as BP, Cadburys, Colgate.</li>
              <li>Experience in various calibration parameters such as viscosity, temperature, weight and ignition flash points.
                  Installation and support of remote temperature data logging.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;