import React from 'react';
import { GraduationCap, BookOpen, Database, Brain, Library } from 'lucide-react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';

const Programs = () => {
  const componentRef = useGSAPAnimation();

  const programs = [
    {
      title: 'B.E. Computer Science and Engineering (Data Science)',
      type: 'UG',
      icon: Database,
      description: 'Specialization in data analytics, big data technologies, and machine learning applications.',
      details: [
        'Duration: 4 years',
        'Intake: 60 students',
        'Focus on data mining, statistical analysis, and predictive modeling',
        'Industry-aligned curriculum with hands-on projects',
        'Specialized labs for data processing and visualization'
      ]
    },
    {
      title: 'B.E. Computer Science and Engineering (Artificial Intelligence and Machine Learning)',
      type: 'UG',
      icon: Brain,
      description: 'Focus on AI algorithms, neural networks, and intelligent system development.',
      details: [
        'Duration: 4 years',
        'Intake: 60 students',
        'Deep learning and neural network specialization',
        'Advanced AI research opportunities',
        'Industry collaboration for real-world projects'
      ]
    },
    {
      title: 'M.E. Computer Science & Engineering',
      type: 'PG',
      icon: BookOpen,
      description: 'Advanced postgraduate program with research emphasis in emerging computing technologies.',
      details: [
        'Duration: 2 years',
        'Intake: 25 students',
        'Research-oriented curriculum',
        'Specialization tracks available',
        'Teaching assistantship opportunities'
      ]
    },
    {
      title: 'Ph.D. Computer Science & Engineering',
      type: 'Research',
      icon: Library,
      description: 'Doctoral program for cutting-edge research in computer science disciplines.',
      details: [
        'Full-time and part-time options',
        'Research funding opportunities',
        'International collaboration possibilities',
        'Access to advanced research facilities',
        'Publication support and guidance'
      ]
    },
  ];

  return (
    <div ref={componentRef} className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl split-text">
            Academic Programs
          </h1>
          <p className="mt-4 text-xl text-gray-500 reveal">
            Comprehensive educational programs designed to shape the future of technology
          </p>
        </div>

        <div className="space-y-16">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden reveal ${
                index % 2 === 0 ? 'reveal_fromLeft' : 'reveal_fromRight'
              }`}
            >
              <div className="p-8 md:p-12">
                <div className="md:flex items-start">
                  <div className={`flex-shrink-0 ${
                    program.type === 'Research' ? 'bg-purple-100' :
                    program.type === 'PG' ? 'bg-green-100' : 'bg-blue-100'
                  } rounded-2xl p-4 md:p-6`}>
                    <program.icon className={`h-8 w-8 md:h-12 md:w-12 ${
                      program.type === 'Research' ? 'text-purple-700' :
                      program.type === 'PG' ? 'text-green-700' : 'text-blue-700'
                    }`} />
                  </div>
                  
                  <div className="mt-6 md:mt-0 md:ml-8 flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">{program.title}</h2>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        program.type === 'Research' ? 'bg-purple-100 text-purple-800' :
                        program.type === 'PG' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {program.type}
                      </span>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6">{program.description}</p>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Details</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {program.details.map((detail, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <GraduationCap className="h-5 w-5 mr-3 text-gray-400" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;