import Image from 'next/image';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsGlobe2 } from 'react-icons/bs';
import { BiMenu, BiUserCircle } from 'react-icons/bi';

const Header = () => {
  return (
    <header className='sticky z-[50] md:grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left */}
      <div className='relative flex items-center h-10 cursor-pointer  '>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          className='object-center md:object-left'
        />
      </div>

      {/* Middle */}
      <div className=' hidden md:inline-flex items-center md:border-2 rounded-full p-2 md:shadow-sm '>
        <input
          type='text'
          placeholder='Start your search'
          className='outline-none flex-grow placeholder-gray-500'
        />
        <AiOutlineSearch className='bg-red-400  h-6 w-6 p-1 text-white rounded-full cursor-pointer' />
      </div>

      {/* Right */}
      <div className=' hidden md:inline-flex justify-end items-center space-x-4 text-gray-600'>
        <p className='cursor-pointer hover:text-black transition ease-in-out '>Become a host</p>
        <BsGlobe2 className='h-5 w-5' />
        <div className='flex border-2 space-x-2 p-2 rounded-full'>
          <BiMenu className='h-5 w-5' />
          <BiUserCircle className='h-5 w-5' />
        </div>
      </div>
    </header>
  );
};

export default Header;
