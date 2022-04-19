import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name='description' content='Clone for airbnb...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      <Main />
    </div>
  );
}
