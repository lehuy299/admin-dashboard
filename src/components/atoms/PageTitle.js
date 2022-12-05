import React from 'react'

const PageTitle = (props) => {
  return (
    <h1 className='text-2xl font-semibold text-gray-700 mb-10'>{props.children}</h1>
  )
}

export default PageTitle