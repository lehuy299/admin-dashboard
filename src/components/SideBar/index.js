import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { ImUser } from 'react-icons/im'

const SideBar = () => {
  return (
    <div className='w-80 h-screen shadow-lg'>
        <ul className='pt-16 flex flex-col items-center'>
            <li className='w-4/5'>
              <a className='flex items-center text-lg font-semibold text-gray-700 px-8 py-3'>
                <MdDashboard size={24} className='text-gray-700 mr-4' />
                Dashboard
              </a>
            </li>
            <li className='w-4/5'>
              <a className='flex items-center text-lg font-semibold text-white px-8 py-3 rounded-lg bg-blue-400'>
                <ImUser size={24} className='text-white mr-4' />
                Customers
              </a>
            </li>
        </ul>
    </div>
  );
};

export default SideBar;