import React from 'react';
import Profile from '../assets/profile.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BallotIcon from '@mui/icons-material/Ballot';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidemenu = () => {
  return (
    <div className='h-screen w-full md:w-60 bg-purple-100 flex flex-col items-center py-6 rounded-r-xl font-Poppins'>
        <div className='text-center my-6'>
            <img src={Profile} alt="Profile" className='w-20 h-20 rounded-full border-2 border-blue-500 mx-auto' />
            <h3 className='mt-2 text-lg font-semibold'>Lasantha Pradeep</h3>
            <a href="/profile" className='text-sm text-gray-400 hover:underline'>
                View Profile
                <NavigateNextIcon className='' />
            </a>
        </div>
        <div className='w-full mt-10'>
            <ul className='space-y-4'>
                <li>
                    <a href="/dashboard" className='flex items-center font-semibold px-6 py-3 rounded-r-xl hover:bg-purple-700 hover:text-white transition duration-300'> <DashboardIcon className='mr-4'/> Dashboard</a>
                </li>
                <li>
                    <a href="/vote" className='flex items-center font-semibold px-6 py-3 rounded-r-xl hover:bg-purple-700 hover:text-white transition duration-300'><BallotIcon className='mr-4'/> Vote</a>
                </li>
                <li>
                    <a href="/vote" className='flex  items-center font-semibold px-6 py-3 rounded-r-xl hover:bg-purple-700 hover:text-white transition duration-300'><HowToVoteIcon className='mr-4'/> Voters Guideline</a>
                </li>
                <li>
                    <a href="/vote" className='flex items-center font-semibold px-6 py-3 rounded-r-xl hover:bg-purple-700 hover:text-white transition duration-300'><SettingsIcon className='mr-4'/> Settings</a>
                </li>
                <li>
                    <a href="/vote" className='flex items-center font-semibold px-6 py-3 my-10 rounded-r-xl hover:bg-purple-700 hover:text-white transition duration-300'><LogoutIcon className='mr-4'/> Log Out</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidemenu;