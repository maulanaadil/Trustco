import React from 'react';
import Lottie from 'react-lottie';

import AnimationAbout from '../../assets/lotties/team-work.json';

export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationAbout,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className='pb-12 mx-28' id='about'>
      <div className='grid grid-cols-2 md:grid-cols-2 bg-gray-100 rounded py-10 px-11'>
        <div className='pt-8'>
          <p className='leading-tight text-5xl font-semibold md:text-3xl text-gray-800 mb-4'>
            Having a hard time to build an modern website?
          </p>
        </div>
        <div className='pt-8'>
          <p className='leading-tight text-3xl md:text-2xl text-gray-400 mb-4'>
            Excepteur est anim quis ut. Consectetur Lorem sunt eu et consectetur
            sint aliquip est non veniam minim est excepteur. Aute cupidatat esse
            Lorem cupidatat. Consectetur velit non aute laborum fugiat deserunt
            proident ullamco ex adipisicing id. Duis in enim enim veniam irure
            labore laborum pariatur pariatur. Aute reprehenderit id elit magna
            amet pariatur mollit eiusmod duis dolore quis.
          </p>
        </div>
        <div className='col-span-2 pt-12'>
          <Lottie options={defaultOptions} height={500} width={600} />
        </div>
      </div>
    </div>
  );
}
