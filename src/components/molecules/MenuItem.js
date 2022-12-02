import React from 'react'
import ItemText from '../atoms/ItemText'

const MenuItem = (props) => {
  return (
    <a className='flex items-center text-gray-700 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg cursor-pointer'>
        <div className='mr-4'>
            {props.icon}
        </div>
        <ItemText>{props.children}</ItemText>
    </a>
  )
}

export default MenuItem
