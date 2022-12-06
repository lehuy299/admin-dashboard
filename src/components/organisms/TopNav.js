import React from 'react'
import SearchInput from '../molecules/SearchInput'
import Dropdown from '../molecules/Dropdown';
import ItemText from '../atoms/ItemText';
import UserNav from '../molecules/UserNav';
import { BsBell, BsSun, BsPerson, BsWallet, BsGear, BsBoxArrowRight } from 'react-icons/bs'
import DropdownItem from '../molecules/DropdownItem';

const TopNav = () => {

  const renderUserDropdown = () => (
    <div className='bg-white rounded-xl shadow-md w-40'>
      <DropdownItem icon={<BsPerson size={24} />}>
        Profile
      </DropdownItem>
      <DropdownItem icon={<BsWallet size={24} />}>
        My Wallet
      </DropdownItem>
      <DropdownItem icon={<BsGear size={24} />}>
        Settings
      </DropdownItem>
      <DropdownItem icon={<BsBoxArrowRight size={24} />}>
        Logout
      </DropdownItem>
    </div>
  );

  return (
    <div className='pr-7 py-7 flex justify-between'>
        <SearchInput />
        <div className='flex items-center gap-10'>
          <Dropdown 
            renderToggle={() => <UserNav />}
            renderItems={() => renderUserDropdown()}
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