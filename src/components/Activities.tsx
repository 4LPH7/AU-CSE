import React from 'react';
import { Calendar, Users, Award, BookOpen, Briefcase, Globe } from 'lucide-react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';

const Activities = () => {
  const componentRef = useGSAPAnimation();

  return (
    <div ref={componentRef} className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 split-text">Activities</h1>
        
        {/* Extension Activities Section */}
        <div className="mb-16 reveal reveal_fromLeft">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="mr-3 text-blue-600" />
            Extension Activities
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>The department has been involved in various extension activities. Computer training programme was conducted to backward class/most backward class and denotified categories of students with the association of Govt. of Tamilnadu, Computer training programme was conducted to Headmasters of Higher Secondary Schools and free computer training programme was conducted to Tamilnadu Government in-service Police personnel. Computer Training for Tamil Nadu Judicial Academy – Cuddalore district judges and judicial officers from Chidambaram division was given by the department.</p>
          </div>
        </div>

        {/* NSS Activities Section */}
        <div className="mb-16 reveal reveal_fromRight">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="mr-3 text-blue-600" />
            NSS Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Major Activities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Blood Donation Camp</li>
                <li>• Coastal Cleanup Camp</li>
                <li>• Fire Safety Demonstration</li>
                <li>• Medical Camp</li>
                <li>• National Integration Camp</li>
                <li>• Summer Adventure Camp</li>
                <li>• Tree Plantation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Recent Initiatives</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• "One Student One Tree" AICTE Initiative (14.08.2019)</li>
                <li>• Blood Donation at RMMCH (11.03.2020)</li>
                <li>• COVID-19 Awareness Programme (16.03.2020)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="space-y-12">
          {[2023, 2022, 2021, 2020, 2019].map((year) => (
            <div key={year} className="reveal">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="mr-3 text-blue-600" />
                {year}-{year + 1} Activities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Award className="mr-2 text-blue-600 h-5 w-5" />
                    Academic Activities
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• CSEA and CSI Chapter Activities</li>
                    <li>• Technical Workshops and Seminars</li>
                    <li>• Special Lectures from Industry Experts</li>
                    <li>• Student Development Programs</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Briefcase className="mr-2 text-blue-600 h-5 w-5" />
                    Extra-Curricular
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Netsports Events</li>
                    <li>• Cultural Programs</li>
                    <li>• Industrial Visits</li>
                    <li>• Social Service Activities</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Student Achievements Section */}
        <div className="mt-16 reveal">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="mr-3 text-blue-600" />
            Recent Student Achievements
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-4 text-gray-600">
              <li>• Ms. R. Madhumitha - Multiple first prizes in speech competitions</li>
              <li>• Ms. J. Amirthavarshini - First Prize in Drawing Competition</li>
              <li>• Ms. I. Hemavathi - First Prize in English Elocution</li>
              <li>• Mr. S. Dharma - Republic Day parade representation</li>
              <li>• Mr. S. Keerthivasan - Developed STAFF SPHERE and SMART RESERVE apps</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;