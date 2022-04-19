import React from 'react';
import { Popover } from '@headlessui/react';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className='sticky top-0 z-50'>
      <Popover className='relative bg-transparent backdrop-blur-md'>
        <div className='max-w-full mx-auto px-4 sm:px-6'>
          <div className='flex justify-center items-center border-b-1 border-gray-100 py-6 md:justify-center md:space-x-10'>
            <div className='flex justify-start mr-7'>
              <a href='#'>
                <span className='sr-only'>TrustCo</span>
                <img
                  className='h-8 w-auto sm:h-10'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                  alt=''
                />
              </a>
            </div>
            <Popover.Group
              as='nav'
              className='hidden md:flex justify-center space-x-10'
            >
              <Link
                to='hero'
                spy={true}
                smooth={true}
                className='text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer'
              >
                Home
              </Link>
              <Link
                to='about'
                spy={true}
                smooth={true}
                className='text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer'
              >
                About
              </Link>
              <Link
                to='projects'
                spy={true}
                smooth={true}
                className='text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer'
              >
                Projects
              </Link>
              <Link
                to='footer'
                spy={true}
                smooth={true}
                className='text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer'
              >
                Contact
              </Link>
            </Popover.Group>
          </div>
        </div>
      </Popover>
    </header>
  );
}
