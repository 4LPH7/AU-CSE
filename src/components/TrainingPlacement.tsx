import React from 'react';
import { Briefcase, BookOpen, Users, Award } from 'lucide-react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';

const TrainingPlacement = () => {
  const componentRef = useGSAPAnimation();

  const stats = [
    { year: '2023-2024', placed: 58 },
    { year: '2022-2023', placed: 61 },
    { year: '2021-2022', placed: 60 },
  ];

  const trainingModules = [
    'Quantitative Reasoning',
    'Logical Reasoning',
    'Verbal Reasoning',
    'Communication Skills',
    'Group Discussion',
    'Technical Aptitude',
    'Interview Skills',
    'Resume Building',
  ];

  return (
    <div ref={componentRef} className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl split-text">
            Training & Placement
          </h2>
          <p className="mt-4 text-xl text-gray-500 reveal">
            Dedicated support for career development and industry placement
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-xl shadow-lg p-8 reveal reveal_fromLeft">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Briefcase className="mr-3 text-blue-600" />
              Placement Statistics
            </h3>
            <div className="space-y-6">
              {stats.map((stat) => (
                <div
                  key={stat.year}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover-effect"
                >
                  <span className="text-lg font-medium text-gray-900">{stat.year}</span>
                  <div className="flex items-center space-x-2">
                    <Users className="text-blue-600" />
                    <span className="text-lg font-bold text-blue-600">{stat.placed} Placed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 reveal reveal_fromRight">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="mr-3 text-blue-600" />
              Training Modules
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {trainingModules.map((module, index) => (
                <div
                  key={module}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover-effect"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <Award className="mr-3 text-blue-600" />
                  <span className="text-gray-900">{module}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 reveal">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Support</h3>
            <ul className="space-y-4 text-gray-600">
              <li>Regular training sessions during placement hours and after-hours</li>
              <li>Guidance on entrepreneurship and competitive exam preparation</li>
              <li>Mandatory placement training hour for third and fourth-year students</li>
              <li>SWAYAM online courses and value-added courses for career enhancement</li>
              <li>Alumni support for placement activities and pre-placement training</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPlacement;