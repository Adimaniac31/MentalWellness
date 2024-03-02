import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between p-4 gap-8 bg-primary text-3xl font-serif'>
      <div>
        Mental Wellness
      </div>
      <div className='flex flex-row gap-8'>
        <Link to="/chat"></Link>
        <span className='text-secondary'>Chat</span>
        <span className='text-secondary'>Classify</span>
        <span className='text-secondary'>About Us</span>
      </div>
    </div>
  )
}

export default Navbar