import React from 'react'

const ItemText = (props) => {
  return (
    <p className='text-base font-semibold'>
        {props.children}
    </p>
  )
}

export default ItemText