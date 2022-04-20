import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Search = () => {
  return (
    <div>
      <Header />
      <main className='flex'>
        <section>
          <p className='text-xs'>300+ stays for 5 number of guests!</p>
          <p className='text-3xl font-medium mt-2 mb-6'>Stays in Mars</p>
          <div className='hidden lg:inline-flex space-x-4 mb-4'>
            <p className='button'>Cancel</p>
            <p className='button'>Types of place</p>
            <p className='button'>Room Service</p>
            <p className='button'>Cleaning</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
