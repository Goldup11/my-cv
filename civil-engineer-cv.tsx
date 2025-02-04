import React, { useState } from 'react';
import { Compass, HardHat, Building } from 'lucide-react';

const SectionPage = ({ title, quote, children }) => (
  <div className="min-h-screen py-12 bg-gray-100 flex flex-col items-center justify-center">
    <div className="max-w-3xl w-full px-4 py-8 mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="mb-4 text-4xl font-bold text-center text-gray-800">{title}</h2>
      <p className="mb-8 text-xl italic text-center text-gray-600">{quote}</p>
      <ul className="space-y-4 list-disc list-inside text-lg text-gray-700">
        {children}
      </ul>
    </div>
  </div>  
);

const ProjectManagement = () => (
  <SectionPage title="Project Management" quote="Delivering excellence from concept to completion">
    <li>Develop comprehensive project plans to optimize resources and meet objectives</li>
    <li>Closely monitor progress, proactively resolving issues to keep projects on track</li>
    <li>Foster collaboration among multi-disciplinary teams to achieve successful outcomes</li>
    <li>Ensure compliance with all relevant regulations, codes, and quality standards</li>
  </SectionPage>
);

const StructuralDesign = () => (
  <SectionPage title="Structural Design" quote="Designing structures that innovate, inspire, and endure">
    <li>Analyze forces and stresses to create safe, efficient, and resilient designs</li>
    <li>Specify optimal materials considering strength, sustainability, and economics</li>
    <li>Leverage cutting-edge tools like FEM analysis and BIM for design excellence </li>
    <li>Collaborate with diverse project stakeholders to realize architectural vision</li>
  </SectionPage>  
);

const CostAnalysis = () => (
  <SectionPage title="Cost Analysis" quote="Maximizing value through rigorous financial planning and control">
    <li>Prepare detailed, accurate cost estimates and budgets aligned with project scope</li>
    <li>Perform forensic analysis of bids and change orders to negotiate optimal pricing</li>
    <li>Proactively monitor and report on project costs, managing variances to targets</li>
    <li>Drive value by identifying cost saving opportunities and process improvements</li>  
  </SectionPage>
);

const CivilEngineerCV = () => {
  
  const [activePage, setActivePage] = useState('main');
  
  const renderPage = () => {
    switch(activePage) {
      case 'project-management':
        return <ProjectManagement />;
      case 'structural-design':  
        return <StructuralDesign />;
      case 'cost-analysis':
        return <CostAnalysis />; 
      default:
        return (
          <div className="min-h-screen py-12 bg-gray-100">
            <div className="max-w-4xl px-8 py-12 mx-auto bg-white rounded-2xl shadow-xl"> 
              <div className="flex items-center mb-8">
                <img 
                  src="https://i.ibb.co/8jZkSdq/20230408-192229.jpg"
                  alt="Agha Josandi"
                  className="object-cover w-40 h-40 mr-6 border-4 border-white rounded-full shadow-lg"  
                />  
                <div>
                  <h1 className="mb-1 text-4xl font-bold text-gray-800">Agha Josandi</h1>
                  <p className="mb-2 text-xl text-blue-600">Civil Engineer, PMP</p>
                  <p className="mb-4 text-lg text-gray-700">
                    Proven track record of delivering complex infrastructure projects under 
                    demanding constraints. Committed to innovation, sustainability, and excellence.
                  </p>
                  <p className="text-gray-600">
                    <span className="mr-2">&#x1F4E7;</span> 
                    <a href="mailto:aghajosandi201@gmail.com" className="border-b border-gray-400 hover:border-blue-400">aghajosandi201@gmail.com</a>
                  </p>
                  <p className="text-gray-600">
                    <span className="mr-2">&#x1F4DE;</span>
                    <a href="tel:+6281993234774" className="border-b border-gray-400 hover:border-blue-400">+62819 9323 4774</a>  
                  </p>
                </div>
              </div>
              
              <div className="grid gap-8 md:grid-cols-3">
                <button 
                  onClick={() => setActivePage('project-management')}
                  className="flex items-center col-span-1 p-6 space-x-6 bg-blue-100 rounded-xl hover:bg-blue-200 focus:outline-none"  
                >
                  <HardHat className="w-12 h-12 text-blue-600" />
                  <div>
                    <p className="text-2xl font-semibold text-gray-800">Project Management</p>
                    <p className="text-lg text-gray-600">Planning - Execution - Control</p>
                  </div>
                </button>

                <button
                  onClick={() => setActivePage('structural-design')} 
                  className="flex items-center col-span-1 p-6 space-x-6 bg-blue-100 rounded-xl hover:bg-blue-200 focus:outline-none"
                >
                  <Building className="w-12 h-12 text-blue-600" />  
                  <div>
                    <p className="text-2xl font-semibold text-gray-800">Structural Design</p>
                    <p className="text-lg text-gray-600">Analysis - Modeling - Detailing</p>
                  </div>
                </button>

                <button
                  onClick={() => setActivePage('cost-analysis')}
                  className="flex items-center col-span-1 p-6 space-x-6 bg-blue-100 rounded-xl hover:bg-blue-200 focus:outline-none"  
                >
                  <svg className="w-12 h-12 text-blue-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="2" x2="12" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  <div>
                    <p className="text-2xl font-semibold text-gray-800">Cost Analysis</p> 
                    <p className="text-lg text-gray-600">Estimation - Budgeting - Control</p>
                  </div>
                </button>
              </div>

              <div className="mt-12">
                <h2 className="mb-4 text-3xl font-semibold text-gray-800">Professional Experience</h2>
                <div className="mb-8"> 
                  <p className="text-xl font-semibold text-gray-700">Senior Project Manager - ABC Infrastructure</p>
                  <p className="text-lg italic text-gray-600">2018 - Present</p>
                  <p className="mt-2 text-lg text-gray-700">
                    Oversee portfolio of large-scale transportation and water infrastructure projects. 
                    Ensure delivery within strict cost, schedule, and quality targets. Implement lean 
                    construction and other innovative methods to drive continuous improvement.
                  </p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-700">Project Engineer - XYZ Consultants</p>
                  <p className="text-lg italic text-gray-600">2015 - 2018</p>
                  <p className="mt-2 text-lg text-gray-700">  
                    Executed multiple commercial and institutional building projects from design 
                    through construction. Coordinated design disciplines, obtained permits, and 
                    managed site activities. Achieved client recognition for superior project outcomes.
                  </p>
                </div>  
              </div>
              
              <div className="mt-12">
                <h2 className="mb-4 text-3xl font-semibold text-gray-800">Education</h2>
                <div className="mb-8">
                  <p className="text-xl font-semibold text-gray-700">M.Eng in Civil Engineering - University of Indonesia</p>
                  <p className="text-lg italic text-gray-600">2013 - 2015</p>
                  <p className="text-lg text-gray-700">Concentration: Construction Engineering &amp; Management</p> 
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-700">B.Sc in Civil Engineering - Bandung Institute of Technology</p> 
                  <p className="text-lg italic text-gray-600">2009 - 2013</p>
                  <p className="text-lg text-gray-700">First Class Honours, Valedictorian</p>
                </div>
              </div>
            </div>
          </div>  
        );
    }
  };
  
  return (
    <div>
      {renderPage()}
      {activePage !== 'main' && (
        <div className="py-6 text-center bg-gray-100">
          <button 
            onClick={() => setActivePage('main')} 
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
          >
            &larr; Back to Main
          </button>  
        </div>
      )}
    </div>
  );
};

export default CivilEngineerCV;
