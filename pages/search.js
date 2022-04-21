import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd/MM/yyyy');
  const formattedEndDate = format(new Date(endDate), 'dd/MM/yyyy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guests}`} />
      <main className='flex '>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ stays - {range} - for {guests} guests!
          </p>
          <p className='text-3xl font-medium mt-2 mb-6'>Stays in {location}</p>
          <div className='hidden lg:inline-flex space-x-4 mb-4'>
            <p className='button'>Cancel</p>
            <p className='button'>Types of place</p>
            <p className='button'>Room Service</p>
            <p className='button'>Cleaning</p>
          </div>
          <div className='flex flex-col'>
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export const getServerSideProps = async (ctx) => {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
};
