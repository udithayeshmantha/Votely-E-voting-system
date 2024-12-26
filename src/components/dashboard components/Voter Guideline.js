import React from "react";
import Votingrafiki from "../../assets/Voting-rafiki.png";

const VotersGuideline = () => {
  return (
    <div className="bg-white px-12 py-12 sm:px-12 lg:px-12 font-Poppins">
      <div className="text-center mb-10">
        <h1 className="text-left text-3xl font-bold text-gray-800">Voters Guideline</h1>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 items-end">
        {/* Guideline List */}
        <div className="space-y-4 text-sm">
          {[
            "Before voting, take the time to research the candidates and issues on the ballot.",
            "Make sure you are eligible to vote in the election.",
            "Make sure you understand the voting procedure for the online voting system.",
            "Read the instructions carefully before voting.",
            "Make sure you understand the candidates and their positions on the issues.",
            "Choose your candidate carefully.",
            "If you are unsure of how to vote, ask a friend or relative for help.",
            "Double-check your choices before submitting your votes.",
            "Make sure you have a secure connection when voting.",
            "Keep your vote private. Do not share your vote with anyone.",
            "Make sure you understand the deadlines for the election.",
            "Follow the voting guidelines set by your local election office.",
            "Report any problems or concerns you have about the voting process.",
            "Thank you for participating in democracy!",
          ].map((text, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 bg-[#a81d74] text-white rounded-full w-8 h-8 flex justify-center items-center font-semibold">
                {index + 1}
              </div>
              <p className="ml-4 text-gray-700">{text}</p>
            </div>
          ))}
        </div>
        {/* Illustration */}
        <div className="flex justify-end">
          <img
            src={Votingrafiki}
            alt="Voting illustration"
            className="hidden xl:flex lg:w-10/12"
          />
        </div>
      </div>
      {/* Footer */}
      <div className=" text-left text-sm text-gray-600 pt-10">
        For More Information <br />
        Please contact: <a href="mailto:votely@gmail.com" className="text-blue-600">votely@gmail.com</a>
      </div>
    </div>
  );
};

export default VotersGuideline;
