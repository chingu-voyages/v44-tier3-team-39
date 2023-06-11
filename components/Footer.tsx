import React from 'react';

const Footer = () => {
  return (
    <div className='fixed z-10 bottom-0 left-0 w-full bg-white border-t-2 border-gray-300 px-10'>
      <div className='flex justify-between items-center p-4'>
        <div>
          <span className='mr-4'>About</span>
          <span className='mr-4'>Privacy</span>
          <span className='mr-4'>Terms</span>
        </div>
        <div>
          <span>Milestoned v1.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
