import React from 'react';
import { Mail, ChevronDown } from 'lucide-react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';
import facultyData from '../data/faculty.json';

interface FacultyMember {
  name: string;
  designation: string;
  contact: string;
  image: string;
  profile_link: string;
}

const Faculty = () => {
  const componentRef = useGSAPAnimation();
  const { faculty } = facultyData;

  const handleViewDetails = (profileLink: string) => {
    window.open(profileLink, '_blank');
  };

  return (
    <div ref={componentRef} className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 split-text">Faculty Members</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {faculty.map((member: FacultyMember, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 reveal reveal_fromLeft flex flex-col"
            >
              <div className="relative pt-4 px-4">
                <div
                  className="mx-auto bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center"
                  style={{ width: '136px', height: '178px' }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              <div className="p-4 text-center flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-sm text-gray-600 mb-2">
                  {member.designation}
                </div>

                <p className="text-sm text-gray-600 mb-4 flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {member.contact}
                </p>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => handleViewDetails(member.profile_link)}
                  className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  View Details
                  <ChevronDown className="ml-2 h-4 w-4 transform -rotate-90" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;