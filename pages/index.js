import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeBanner from '../components/LargeBanner';
import LargeCard from '../components/LargeCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, otherData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name='description' content='Clone for airbnb...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='py-6'>
          <h2 className='text-4xl font-semibold pb-6'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData.map((item, index) => (
              <SmallCard
                key={index}
                image={item?.img}
                distance={item?.distance}
                location={item?.location}
              />
            ))}
          </div>
        </section>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-6'>Live Anywhere</h2>
          <div className='flex space-x-5 p-4 -ml-4 overflow-x-scroll scrollbar-hide'>
            {otherData.map((item, index) => (
              <LargeCard key={index} image={item?.img} title={item?.title} />
            ))}
          </div>
        </section>

        <LargeBanner
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors!'
          description="Wish you could be anywhere, anytime, anywhere. That's where we're going."
          buttonText='Get Inspired'
        />
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const otherData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      otherData,
    },
  };
};
