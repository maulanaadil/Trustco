import React from 'react';
import { useMemo } from 'react';
import Lottie from 'react-lottie';

import AnimationAbout from '../../assets/lotties/team-work.json';
import { useSizeComponents } from '../../utils/util';

export default function About() {
  const [width, height] = useSizeComponents();
  const scaleLottie = 0.5;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationAbout,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const animation = useMemo(() => {
    if (!width) return null;
    const xMidYMid = 1;
    const sizeComponent = {
      width: width * scaleLottie,
      height: width * scaleLottie * xMidYMid,
    };
    return <Lottie key={width} options={defaultOptions} {...sizeComponent} />;
  }, [width]);

  return (
    <div className='pb-12 mx-28' id='about'>
      <div className='grid grid-cols-2 md:grid-cols-2 bg-gray-100 rounded py-10 px-11'>
        <div className='flex pt-8 sm:items-center'>
          <p className='leading-tight text-5xl md:text-3xl sm:text-2xl sm:pr-2 font-semibold text-gray-800 mb-4'>
            Having a hard time to build an modern website?
          </p>
        </div>
        <div className='pt-8'>
          <p className='leading-tight text-3xl text-justify md:text-2xl sm:text-lg sm:text-left text-gray-400 mb-4'>
            Want to build fast and powerfull website, but doesn't know how to
            figure it out. We here to help you to make your dream website become
            real.
          </p>
        </div>
        <div className='col-span-2 pt-10'>{animation}</div>
      </div>
    </div>
  );
}
