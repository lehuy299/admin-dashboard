import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <div className="relative h-11 w-72 shadow-lg text-gray-600">
        <input type="text" placeholder='Search here...' className='w-full h-full outline-blue-400 rounded-xl pl-5 pr-10 dark:bg-gray-600 dark:text-gray-200'/>
        <BsSearch className='absolute right-2 top-4' />
    </div>
  )
}

export default SearchInput