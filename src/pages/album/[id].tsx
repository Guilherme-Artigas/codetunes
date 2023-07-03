import Head from 'next/head';
import Header from '@/frontend/components/Header';
import MusicCard from '@/frontend/components/Musiccard';
import OpenMenu from '@/frontend/components/OpenMenu';

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
      <OpenMenu />
    </>
  );
}
