import React from 'react'

const withCard = (Component) => (props) => {
  return (
    <div className='p-8 bg-white w-fit rounded-3xl shadow-lg'>
        <Component {...props} />
    </div>
  )
}

export default withCard