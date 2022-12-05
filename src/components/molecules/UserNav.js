import React from 'react'
import ItemText from '../atoms/ItemText'
import user_image from '../../assets/images/johnwick.jpg'

const UserNav = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='w-10 h-10 rounded-full overflow-hidden'>
        <img className='w-full h-full' src={user_image}/>
      </div>
      <ItemText>Huy Tran</ItemText>
    </div>
  )
}

export default UserNav