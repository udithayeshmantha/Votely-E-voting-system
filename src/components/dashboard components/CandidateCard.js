import React from 'react';

const CandidateCard = ({ name, role, image, isSelected, onVote }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <h3 className="text-lg font-semibold text-center mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">{role}</p>
        
        <div className="flex gap-2 w-full">
          <button
            onClick={onVote}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              isSelected
                ? 'bg-blue-600 text-white'
                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
            }`}
          >
            VOTE
          </button>
          <button className="flex-1 py-2 px-4 rounded-md text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;