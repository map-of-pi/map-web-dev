import React from 'react';

function Header() {
  return (
    <header className='text-black z-10 bg-transparent absolute w-full'>
      <div className='container mx-auto px-4 py-6 flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='w-8 h-8 bg-black rounded-sm mr-2'></div>
          <span className='text-xl font-bold'>Map of PI</span>
        </div>
        <nav className='hidden md:flex space-x-6 font-semibold'>
          <a href='#features' className='hover:text-gray-800'>
            Features
          </a>
          <a href='#resources' className='hover:text-green-800'>
            About Us
          </a>
          <a href='#chatGPT' className='hover:text-green-800'>
            Blog
          </a>
          <a href='#pricing' className='hover:text-green-800'>
            Support
          </a>
        </nav>
        <div className='flex space-x-4'>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-800'
          >
            <img
              src='https://abs.twimg.com/favicons/twitter.2.ico'
              alt='Twitter'
              className='w-6 h-6 text-white'
            />
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-800'
          >
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
              alt='Facebook'
              className='w-6 h-6 text-white'
            />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-800'
          >
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
              alt='Instagram'
              className='w-6 h-6'
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
