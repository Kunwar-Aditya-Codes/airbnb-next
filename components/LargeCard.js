import React from 'react';
import Image from 'next/image';

const LargeCard = ({ image, title }) => {
  return (
    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative h-80 w-80 '>
        <Image src={image} layout='fill' className='rounded-xl' />
      </div>

      <h2 className='text-2xl mt-3'>{title}</h2>
    </div>
  );
};

export default LargeCard;
