import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { ImUser } from 'react-icons/im'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import MenuItem from '../molecules/MenuItem';

const Sidebar = () => {
  return (
    <div className='w-72 h-screen shadow-lg fixed dark:bg-slate-700'>
        <ul className='pt-16 flex flex-col items-center'>
            <li className='w-4/5'>
              <Link to='/'><MenuItem icon={<MdDashboard size={24} />}>Dashboard</MenuItem></Link>
            </li>
            <li className='w-4/5'>
              <Link to='/customers'><MenuItem icon={<ImUser size={24} />}>Customers</MenuItem></Link>
            </li>
        </ul>
    </div>
  );
};

export default Sidebar;