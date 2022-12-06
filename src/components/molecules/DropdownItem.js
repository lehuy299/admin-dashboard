import React from 'react'

const DropdownItem = (props) => {
  return (
    <div className='flex items-center text-base gap-2 p-5 text-gray-600 font-semibold'>
        {props.icon}
        <div>{props.children}</div>
    </div>
  )
}

export default DropdownItem