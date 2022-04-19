import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name='description' content='Clone for airbnb...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
      </main>
    </div>
  );
}
