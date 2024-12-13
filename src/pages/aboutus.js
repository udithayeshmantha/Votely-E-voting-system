// Importing React and Tailwind CSS
import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 p-8">
      {/* About Us Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-700">ABOUT US</h1>
        <p className="mt-4 text-lg font-medium">
          <span className="font-bold">Votely</span> is an Online Voting System that is used to gather instant and trustworthy results.
          <br />We aim to make the voting and elections easy, seamless, and fair.
        </p>
      </section>

      {/* Management Team Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Management Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {managementTeam.map((member) => (
            <div
              key={member.name}
              className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200"
            >
              <img
                src={member.image || 'https://via.placeholder.com/150'}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Mission:</h2>
        <p className="text-gray-700 leading-relaxed">
          To provide a secure and convenient way for citizens to cast their ballots in public elections. The system
          will enable citizens to cast their votes without having to leave their homes or wait in line at polling
          stations. It will also provide an audit trail for each vote to ensure its accuracy and integrity. The system
          will be designed to be secure, reliable, and user-friendly, ensuring all votes are counted accurately and
          securely.
        </p>
      </section>

      {/* Strengths Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Our Strengths:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Increased Voter Turnout:</strong> The system can increase voter turnout by making it easier for
            voters to cast their ballots from any location.
          </li>
          <li>
            <strong>Accurate Results:</strong> Results are instantly tallied and verified more quickly and accurately
            than traditional methods.
          </li>
          <li>
            <strong>Cost-Effective:</strong> Requires fewer resources to set up and maintain, making it less expensive
            than paper-based methods.
          </li>
          <li>
            <strong>Secure:</strong> Utilizes encryption and other security measures to ensure votes are counted
            accurately and securely.
          </li>
        </ul>
      </section>
    </div>
  );
};

// Management Team Data
const managementTeam = [
  {
    name: 'Roderick Pastor',
    position: 'President',
    image: '',
  },
  {
    name: 'Pierce Norman Belloso',
    position: 'Vice President',
    image: '',
  },
  {
    name: 'Sarita Cara Lagmay',
    position: 'Elections Director',
    image: '',
  },
  {
    name: 'Reginald Dantes',
    position: 'IT Director',
    image: '',
  },
];

export default AboutUs;
