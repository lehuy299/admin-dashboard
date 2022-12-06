import React from 'react'

const PageTitle = (props) => {
  return (
    <h1 className='text-2xl font-semibold text-gray-700 mb-10 dark:text-gray-100'>{props.children}</h1>
  )
}

export default PageTitle