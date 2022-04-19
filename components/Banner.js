import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='relative h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]'>
      <Image
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute top-1/2 w-full space-y-2 text-center'>
        <p className='font-medium lg:text-lg'>Not sure where to go? Perfect.</p>
        <button className='bg-white text-violet-600 sm:px-8 sm:py-4 px-3 py-2 hover:shadow-xl active:scale-90 transition duration-150 shadow-md rounded-full'>
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
