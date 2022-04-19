/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { Popover } from '@headlessui/react';

export default function Header() {
  return (
    <Popover className='relative bg-transparent'>
      <div className='max-w-full mx-auto px-4 sm:px-6'>
        <div className='flex justify-center items-center border-b-2 border-gray-100 py-6 md:justify-center md:space-x-10'>
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
            <a
              href='#'
              className='text-lg font-medium text-gray-500 hover:text-gray-900'
            >
              Home
            </a>
            <a
              href='#'
              className='text-lg font-medium text-gray-500 hover:text-gray-900'
            >
              About
            </a>
            <a
              href='#'
              className='text-lg font-medium text-gray-500 hover:text-gray-900'
            >
              Projects
            </a>
            <a
              href='#'
              className='text-lg font-medium text-gray-500 hover:text-gray-900'
            >
              Contact
            </a>
          </Popover.Group>
        </div>
      </div>
    </Popover>
  );
}
