import React from "react";
import FAQImage from "../assets/FAQs.png";
import Bg from "../assets/bg.jpg";

const FAQ = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed font-Poppins"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="flex justify-center items-center">
        <img
          src={FAQImage}
          alt="FAQ Illustration"
          className="w-1/2 h-1/2 pt-28 pb-2"
        />
      </div>

      <div className="px-20 pb-32 sm:px-20 lg:px-32 flex-col">
        <div className="text-center mb-12 ">
          <h1 className="text-5xl font-bold text-gray-800 ">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
        <div className="space-y-8">
          {/* Question 1 */}
          <div>
            <h2 className="flex items-center text-lg font-semibold text-gray-900">
              <span className="mr-4 bg-[#a81d74] text-white rounded-full w-8 h-8 justify-center items-center flex">
                1
              </span>
              How can I be sure that my vote and information are safe on this
              platform?
            </h2>
            <p className="mt-2 text-gray-700">
              Your vote and personal information are secured on this platform
              because the system is built on the highest security protocols and
              standards. It also utilizes the latest encryption technologies to
              ensure data security and privacy. Additionally, the system is
              designed to prevent any attempts to tamper with, alter, or
              manipulate the voting process.
            </p>
          </div>
          {/* Question 2 */}
          <div>
            <h2 className="flex items-center text-lg font-semibold text-gray-900">
              <span className="mr-4 bg-[#a81d74] text-white rounded-full w-8 h-8 flex justify-center items-center">
                2
              </span>
              How long does it take for my vote to be counted?
            </h2>
            <p className="mt-2 text-gray-700">
              This is an online voting system that speeds up the ballot counting
              process and counts votes instantly after they are cast in favor of
              their preferred candidate.
            </p>
          </div>
          {/* Question 3 */}
          <div>
            <h2 className="flex items-center text-lg font-semibold text-gray-900">
              <span className="mr-4 bg-[#a81d74] text-white rounded-full w-8 h-8 flex justify-center items-center">
                3
              </span>
              How can I receive election date reminders?
            </h2>
            <p className="mt-2 text-gray-700">
              The system will provide reminders about upcoming election dates
              directly to the user. These reminders can be sent via email and
              dashboard. This online voting system will provide a calendar view
              of all upcoming elections, which can be accessed directly from the
              system.
            </p>
          </div>
          {/* Question 4 */}
          <div>
            <h2 className="flex items-center text-lg font-semibold text-gray-900">
              <span className="mr-4 bg-[#a81d74] text-white rounded-full w-8 h-8 flex justify-center items-center">
                4
              </span>
              Would my vote be kept private and secure?
            </h2>
            <p className="mt-2 text-gray-700">
              Yes, your vote will be kept secret and secured on the online
              voting system. The system is designed to protect the integrity of
              the vote and ensure that the results are accurate and untampered
              with.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
