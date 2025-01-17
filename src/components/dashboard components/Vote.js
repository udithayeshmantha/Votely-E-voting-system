import React, { useState } from 'react';
import CandidateCard from './CandidateCard';

const Vote = () => {
  const [votes, setVotes] = useState({
    president: '',
    vicePresident: '',
    secretary: ''
  });

  const candidates = {
    president: [
      { id: 1, name: 'Felisa Monteverde', role: 'System Development', image: '/path/to/image' },
      { id: 2, name: 'Emma Ainsley Zamora', role: 'Web Development', image: '/path/to/image' },
      { id: 3, name: 'Lorenzo Agustin', role: 'Animation', image: '/path/to/image' }
    ],
    vicePresident: [
      { id: 4, name: 'Kasey Rachel Flores', role: 'System Development', image: '/path/to/image' },
      { id: 5, name: 'Carolina Labasan', role: 'Web Development', image: '/path/to/image' },
      { id: 6, name: 'Meagan Catubig', role: 'Animation', image: '/path/to/image' }
    ],
    secretary: [
      { id: 7, name: 'Elie Cojuangco', role: 'System Development', image: '/path/to/image' },
      { id: 8, name: 'Claudio Lucio Tejada', role: 'Web Development', image: '/path/to/image' }
    ]
  };

  const handleVote = (position, candidateId) => {
    setVotes(prev => ({
      ...prev,
      [position]: candidateId
    }));
  };

  const handleSubmit = () => {
    if (!votes.president || !votes.vicePresident || !votes.secretary) {
      alert('Please vote for all positions before submitting');
      return;
    }
    
    // Here you would typically send the votes to your backend
    console.log('Votes submitted:', votes);
    alert('Thank you for voting!');
  };

  return (
    <div className="flex-1 overflow-auto py-10 px-20 font-Poppins">
      <h1 className="text-3xl font-bold mb-8 text-left">YOU MAY NOW CAST YOUR VOTES!</h1>

      {/* President Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">President Student Council</h2>
        <p className="text-sm text-gray-600 mb-4">You can only vote for one candidate</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.president.map(candidate => (
            <CandidateCard
              key={candidate.id}
              {...candidate}
              isSelected={votes.president === candidate.id}
              onVote={() => handleVote('president', candidate.id)}
            />
          ))}
        </div>
      </section>

      {/* Vice President Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Vice President Student Council</h2>
        <p className="text-sm text-gray-600 mb-4">You can only vote for one candidate</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.vicePresident.map(candidate => (
            <CandidateCard
              key={candidate.id}
              {...candidate}
              isSelected={votes.vicePresident === candidate.id}
              onVote={() => handleVote('vicePresident', candidate.id)}
            />
          ))}
        </div>
      </section>

      {/* Secretary Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Secretary Student Council</h2>
        <p className="text-sm text-gray-600 mb-4">You can only vote for one candidate</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {candidates.secretary.map(candidate => (
            <CandidateCard
              key={candidate.id}
              {...candidate}
              isSelected={votes.secretary === candidate.id}
              onVote={() => handleVote('secretary', candidate.id)}
            />
          ))}
        </div>
      </section>

      <div className="text-center mt-8">
        <p className="text-red-500 text-sm mb-4">Double check your choices before submitting your votes.</p>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          SUBMIT VOTE
        </button>
      </div>
      <footer className="mt-10 text-center text-gray-500">
        &copy; Copyright 2025 All rights reserved
      </footer>
    </div>
  );
};

export default Vote;