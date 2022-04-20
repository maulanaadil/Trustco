import React, { useState } from 'react';
import { Link } from 'gatsby';
import { AiFillHeart } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Card = ({ title, description, image, link }) => {
  const [likes, setLikes] = useState(0);

  const onLikesHandler = () => {
    setLikes(likes + 1);
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: 1,
      }}
      className='bg-white hover:bg-gray-100 shadow-lg hover:shadow-none cursor-pointer w-80 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out'
    >
      <div className='relative mt-2 mx-2'>
        <Link to={link} className='h-56 rounded-2xl overflow-hidden'>
          <img
            src={image}
            className='object-cover w-full h-full'
            alt={`image-${title}`}
          />
        </Link>
        <div className='absolute bottom-0 left-0 -mb-4 ml-3 flex flex-row'>
          <div
            className='h-10 w-16 flex items-center justify-center text-xl bg-white hover:bg-red-500 text-red-500 hover:text-white rounded-2xl shadow-xl'
            onClick={onLikesHandler}
          >
            <AiFillHeart />
            {likes ? <span className='text-red-600 ml-2'>{likes}</span> : null}
          </div>
        </div>
      </div>
      <div className='pt-10 pb-6 w-full px-4'>
        <h1 className=' font-medium leading-none text-base tracking-wider text-gray-800'>{`${title}`}</h1>
        <p className=' font-normal text-sm mt-2 tracking-wider text-gray-400'>{`${description}`}</p>
      </div>
    </motion.div>
  );
};

export default Card;
