import React from "react";
import FAQsImage from "../assets/FAQs.png";
import Bg from "../assets/bg.jpg"; // Adjust the path as necessary

const FAQ = () => {
  const faqs = [
    {
      question:
        "How can I be sure that my vote and information are safe on this platform?",
      answer:
        "Your vote and personal information are secured on this platform because the system is built on the highest security protocols and standards. It also utilizes the latest encryption technologies to ensure data security and privacy. Additionally, the system is designed to prevent any attempts to tamper with, alter or manipulate the voting process.",
    },
    {
      question: "How long does it take for my vote to be counted?",
      answer:
        "This is an online voting system that speeds up the ballot counting process and counts votes instantly after they are cast in favor of their preferred candidate.",
    },
    {
      question: "How can I receive election date reminders?",
      answer:
        "The system will provide reminders about upcoming election dates directly to the user. These reminders can be sent via email and dashboard. This online voting system will provide a calendar view of all upcoming elections, which can be accessed directly from the system.",
    },
    {
      question: "Would my vote be kept private and secure?",
      answer:
        "Yes, your vote will be kept secret and secured on the online voting system. The system is designed to protect the integrity of the vote and ensure that the results are accurate and untampered with.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed font-Poppins"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className=" bg-opacity-75 py-10 px-10 md:px-20">
        <div className="text-center mb-10">
          <img
            src={FAQsImage}
            alt="FAQs"
            className="mx-auto mb-6 w-1/3 hidden md:block"
          />
          <h1 className="text-5xl font-bold text-gray-800 pt-20 md:pt-0">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 bg-transparent">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                {index + 1}. {faq.question}
              </h2>
              <p className="text-gray-700 text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
