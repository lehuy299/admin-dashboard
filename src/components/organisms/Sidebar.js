import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { ImUser } from 'react-icons/im'
import MenuItem from '../molecules/MenuItem';

const Sidebar = () => {
  return (
    <div className='w-72 h-screen shadow-lg'>
        <ul className='pt-16 flex flex-col items-center'>
            <li className='w-4/5'>
              <MenuItem icon={<MdDashboard size={24} />}>Dashboard</MenuItem>
            </li>
            <li className='w-4/5'>
              <MenuItem icon={<ImUser size={24} />}>Customers</MenuItem>
            </li>
        </ul>
    </div>
  );
};

export default Sidebar;