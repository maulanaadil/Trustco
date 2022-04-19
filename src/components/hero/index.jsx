import React from 'react';

import './styles.css';

export default function Hero() {
  return (
    <div className='bg-transparent pb-12 overflow-y-hidden' id='hero'>
      {/* Code block starts */}
      <dh-component>
        <div className='bg-transparent'>
          <div className='container mx-auto flex flex-col items-center py-12 sm:py-24'>
            <div className='w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10'>
              <h1 className='text-1xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-extrabold leading-7 md:leading-10 '>
                The Freedom to Create the{' '}
                <span className='link link-underline link-underline-black text-indigo-700'>
                  Websites
                </span>{' '}
                You Want
              </h1>
              <p className='antialiased mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg'>
                A professonal website drives sales. Create a beautiful website
                to impress and engage new customers and establish your business
                online{' '}
              </p>
              {/* <div class='relative py-3 sm:max-w-xl sm:mx-auto'>
                <a
                  href='#'
                  class='font-display max-w-sm text-2xl font-bold leading-tight'
                >
                  <span class='link link-underline link-underline-black text-black'>
                    {' '}
                    Hover to See the Effect{' '}
                  </span>
                </a>
                <br />
                <br />
                <a
                  href='#'
                  class='font-display max-w-sm text-2xl font-bold leading-tight'
                >
                  <span class='link link-underline link-underline-black text-black'>
                    {' '}
                    Multi line text will <br />
                    work fine too.
                  </span>
                </a>
              </div> */}
            </div>
            <div className='flex justify-center items-center'>
              <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm'>
                See Projects
              </button>
              <button className='ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </dh-component>
      {/* Code block ends */}
    </div>
  );
}
