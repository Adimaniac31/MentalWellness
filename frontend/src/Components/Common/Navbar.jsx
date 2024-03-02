import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between p-4 gap-8 bg-primary text-xl md:text-3xl font-serif w-full'>
      <div className=''>
      <Link to="/">
          <span className='text-black'>Mental Wellness</span>
        </Link>
      </div>
      <div className='flex flex-row gap-8'>
        <Link to="/chat">
          <span className='text-secondary'>Chat</span>
        </Link>
        <Link to="/classify">
          <span className='text-secondary'>Classify</span>
        </Link>
        <Link to="/about-us">
          <span className='text-secondary'>About Us</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
