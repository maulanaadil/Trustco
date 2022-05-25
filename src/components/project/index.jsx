import React from 'react';

import Card from '@components/card';

import data from '@assets/data/dummy';

export default function Project() {
  return (
    <div
      className='container pt-8 lg:pt-20 sm:pt-10 pb-12 mx-auto align-middle'
      id='projects'
    >
      <div className='flex flex-col items-center mb-4'>
        <p className='text-2xl lg:text-5xl font-medium md:text-3xl sm:text-3xl text-gray-800 mb-2 lg:mb-4'>
          Group of projects
        </p>
        <p className='text-xl lg:text-3xl font-medium md:text-2xl sm:text-xl text-gray-400 mb-4'>
          Prepared for <span className='underline text-gray-500'>You</span> next
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4 px-8'>
        {data.map((data, index) => (
          <Card
            key={index}
            link={data.link}
            title={data.title}
            description={data.description}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
}
