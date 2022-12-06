import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopNav from './TopNav'

const Layout = () => {
  return (
    <div className="flex dark:text-white">
      <Sidebar />
      <div className="bg-slate-50 w-full h-screen px-10 ml-72 dark:bg-gray-900">
        <TopNav />
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout