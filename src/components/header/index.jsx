import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Link } from 'react-scroll';
import { XIcon, MenuIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'footer' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50'>
      <div className='flex justify-center items-center border-b-1 border-gray-100 py-6 md:justify-center md:space-x-10 backdrop-blur-md'>
        <svg
          className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
          fill='currentColor'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
          aria-hidden='true'
        >
          <polygon points='50,0 100,0 50,100 0,100' />
        </svg>

        <Popover>
          <div className='relative px-4 sm:px-6 lg:px-8'>
            <nav
              className='relative flex items-center justify-between sm:h-10 lg:justify-start'
              aria-label='Global'
            >
              <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                  <div className='-mr-2 flex items-center md:hidden'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Open main menu</span>
                      <MenuIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='hidden md:block md:space-x-8'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    className='text-lg font-medium text-gray-500 hover:text-gray-900 cursor-pointer'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter='duration-150 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
            >
              <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                <div className='px-5 pt-4 flex items-center justify-end'>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close main menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='px-2 pt-2 pb-3 space-y-1'>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </header>
  );
}
