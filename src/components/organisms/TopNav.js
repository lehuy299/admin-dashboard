import React from 'react'
import SearchInput from '../molecules/SearchInput'
import Dropdown from '../molecules/Dropdown';
import ItemText from '../atoms/ItemText';
import UserNav from '../molecules/UserNav';
import { BsBell, BsSun } from 'react-icons/bs'

const TopNav = () => {

  return (
    <div className='pr-7 py-7 flex justify-between'>
        <SearchInput />
        <div className='flex items-center gap-10'>
          <Dropdown 
            renderToggle={() => <UserNav />}
          />
          <Dropdown 
            renderToggle={() => <BsBell size={28} />}
          />
          <Dropdown 
            renderToggle={() => <BsSun size={28} />}
          />
        </div>
    </div>
  )
}

export default TopNav