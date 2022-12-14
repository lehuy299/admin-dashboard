import React from 'react'

const TableHead = ({ children, index }) => {
  return (
    <th className='capitalize p-3 bg-slate-100 dark:bg-gray-900' key={index}>
      <p>{children}</p>
    </th>
  )
}

export default TableHead