import Head from 'next/head';
import Header from '@/frontend/components/Header';
import MusicCard from '@/frontend/components/Musiccard';

export default function Album() {

  return (
    <>
      <Head>
        <title>Code Tunes</title>
      </Head>
      <div className="lg:flex">
        <Header />
        <MusicCard />
      </div>
    </>
  );
}
