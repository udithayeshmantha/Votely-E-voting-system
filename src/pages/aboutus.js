import React from "react";
import Bg from "../assets/bg.jpg";

const AboutUs = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed "
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className=" text-gray-800 p-8 font-Poppins px-20 py-20">
        {/* About Us Section */}
        <section className="text-center mb-">
          <h1 className="text-5xl font-extrabold pb-10">ABOUT US</h1>
          <p className="mt-4 text-2xl font-light">
            <span className="font-bold">Votely</span> is an{" "}
            <span className="font-bold">
              Online Voting System that is used to gather instant and
              trustworthy results.
            </span>
            <br />
            <span className="text-xl">
              {" "}
              We aim to make the voting and elections easy, seamless, and fair.
            </span>
          </p>
        </section>

        {/* Management Team Section */}
        <section className="mb-12 py-10" px-20>
          <h2 className="text-2xl font-normal text-center mb-8">
            Management Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {managementTeam.map((member) => (
              <div key={member.name} className="rounded-lg p-6 text-center ">
                <img
                  src={member.image || "https://via.placeholder.com/150"}
                  alt={member.name}
                  className="w-40 h-40 mx-auto rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-12 ">
          <h2 className="text-2xl font-bold mb-4">Our Mission:</h2>
          <p className="text-gray-700 leading-relaxed">
            To provide a secure and convenient way for citizens to cast their
            ballots in public elections. The system will enable citizens to cast
            their votes without having to leave their homes or wait in line at
            polling stations. It will also provide an audit trail for each vote
            to ensure its accuracy and integrity. The system will be designed to
            be secure, reliable, and user-friendly. In addition, the system will
            ensure that all votes are counted accurately and securely.
          </p>
        </section>

        {/* Strengths Section */}
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-4 ">Our Strengths:</h2>
          <ul className="list-inside text-gray-700 space-y-2 list-none">
            <li>
              <strong>Increased Voter Turnout:</strong> The system can increase
              voter turnout by making it easier for voters to cast their ballots
              from any location. This can make voting more convenient and allow
              more people to participate in the democratic process.
            </li>
            <li>
              <strong>Accurate Results:</strong> With this system, the results
              are instantly tallied and can be verified more quickly and
              accurately than with traditional paper-based methods. This can
              also reduce the risk of errors that can occur with manual counting
              and verification.
            </li>
            <li>
              <strong>Cost-Effective:</strong> The system can be less expensive
              than traditional paper-based methods. This is because they require
              fewer resources to set up and maintain, as well as fewer personnel
              to oversee the process.
            </li>
            <li>
              <strong>Secure:</strong> The system is highly secure and can use
              encryption and other security measures to ensure that votes are
              counted accurately and securely.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

// Management Team Data
const managementTeam = [
  {
    name: "Udith Ayeshmantha",
    position: "President",
    image: "",
  },
  {
    name: "Lasantha Pradeep",
    position: "Vice President",
    image: "",
  },
  {
    name: "Prasith de Alwis",
    position: "Elections Director",
    image: "",
  },
  {
    name: "Kavindu Mihiran",
    position: "IT Director",
    image: "",
  },
  {
    name: "Miyumi Nimsara",
    position: "IT Director",
    image: "",
  },
];

export default AboutUs;
