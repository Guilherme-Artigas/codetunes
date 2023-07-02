import Head from 'next/head';
import Header from '@/frontend/components/Header';
import OpenMenu from '@/frontend/components/OpenMenu';
import SearchArtists from '@/frontend/components/SearchArtists';

export default function Search() {

  return (
    <>
      <Head>
        <title>Code Tunes</title>
      </Head>
      <div className="lg:flex">
        <Header />
        <SearchArtists />
      </div>
      <OpenMenu />
    </>
  );
}
