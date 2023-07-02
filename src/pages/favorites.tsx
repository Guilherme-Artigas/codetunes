import Head from 'next/head';
import Header from '@/frontend/components/Header';
import OpenMenu from '@/frontend/components/OpenMenu';

export default function Favorites() {

  return (
    <>
      <Head>
        <title>Code Tunes</title>
      </Head>
      <div className="lg:flex">
        <Header />
        <p className="lg:h-40 mx-auto text-center">Página / rota de músicas favoritas.</p>
      </div>
      <OpenMenu />
    </>
  );
}
