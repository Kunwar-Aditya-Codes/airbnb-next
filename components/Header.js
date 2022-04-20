import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsGlobe2 } from 'react-icons/bs';
import { BiMenu, BiUserCircle } from 'react-icons/bi';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { FaUserFriends } from 'react-icons/fa';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestNum, setGuestNum] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'Selection',
  };

  return (
    <header className='sticky z-[50] grid grid-cols-1 md:grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left */}
      <div className='relative flex items-center h-10 cursor-pointer   '>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          className='object-center md:object-left'
        />
      </div>

      {/* Middle */}
      <div className='mx-auto w-full mt-3 md:mt-0 md:mx-0 flex items-center border-2 rounded-full p-2 md:shadow-sm '>
        <input
          type='text'
          placeholder='Start your search'
          className='outline-none flex-grow placeholder-gray-500'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <AiOutlineSearch className='bg-red-400  h-6 w-6 p-1 text-white rounded-full cursor-pointer' />
      </div>

      {/* Right */}
      <div className=' hidden md:inline-flex justify-end items-center space-x-4 text-gray-600'>
        <p className='cursor-pointer hover:text-black transition ease-in-out '>
          Become a host
        </p>
        <BsGlobe2 className='h-5 w-5' />
        <div className='flex border-2 space-x-2 p-2 rounded-full'>
          <BiMenu className='h-5 w-5' />
          <BiUserCircle className='h-5 w-5' />
        </div>
      </div>

      {searchInput && (
        <div className='flex flex-col  md:col-span-3 md:mx-auto '>
          <DateRangePicker
            className='object-fill'
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-medium'>Number of Guests</h2>
            <FaUserFriends className='h-5 w-5' />
            <input
              type='number'
              className='w-12 pl-2 outline-none text-red-400'
              value={guestNum}
              onChange={(e) => setGuestNum(e.target.value)}
              min={1}
            />
          </div>
          <div className='flex items-center justify-evenly font-medium'>
            <button
              className='font-medium text-red-400'
              onClick={() => setSearchInput('')}
            >
              Cancel
            </button>
            <button className='font-medium bg-red-400 text-white p-2 px-4 rounded-full'>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
