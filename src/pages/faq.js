import React from 'react'
import FAQImage from "../assets/image.jpg";

const FAQ = () => {
  return (
    
    <div>

        <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img 
          src={FAQImage} 
          alt="FAQ Illustration" 
          style={{ width: "100%", maxWidth: "600px", height: "auto" }} 
        />
        </div>
            <h1 className='text-2xl text-center'>Frequently Asked Questions</h1>

            <div>
                <h3 className='text-xl text-center'>1. How can I be sure that my vote and information are safe on this platform?</h3>
                <p className=''>
                    Your vote and personal information are secured on this platform because the system is built on the highest security protocols and standards. It also utilizes the latest encryption technologies to ensure data security and privacy. Additionally, the system is designed to prevent any attempts to tamper with, alter, or manipulate the voting process.
                </p>
            </div>
            <div>
                <h3>2. How long does it take for my vote to be counted?</h3>
                <p>
                    This is an online voting system that speeds up the ballot counting process and counts votes instantly after they are cast in favor of their preferred candidate.
                </p>
            </div>
            <div>
                <h3>3. How can I receive election date reminders?</h3>
                <p>
                    The system will provide reminders about upcoming election dates directly to the user. These reminders can be sent via email and dashboard. This online voting system will provide a calendar view of all upcoming elections, which can be accessed directly from the system.
                </p>
            </div>
            <div>
                <h3>4. Would my vote be kept private and secure?</h3>
                <p>
                    Yes, your vote will be kept secret and secured on the online voting system. The system is designed to protect the integrity of the vote and ensure that the results are accurate and untampered with.
                </p>
            </div>
            <div>
                <h3>4. Would my vote be kept private and secure?</h3>
                <p>
                    Yes, your vote will be kept secret and secured on the online voting system. The system is designed to protect the integrity of the vote and ensure that the results are accurate and untampered with.
                </p>
            </div>
            <div>
                <h3>4. Would my vote be kept private and secure?</h3>
                <p>
                    Yes, your vote will be kept secret and secured on the online voting system. The system is designed to protect the integrity of the vote and ensure that the results are accurate and untampered with.
                </p>
            </div>

            
    </div>
  )
}

export default FAQ;