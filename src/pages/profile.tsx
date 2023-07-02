import Head from 'next/head';
import Header from '@/frontend/components/Header';
import OpenMenu from '@/frontend/components/OpenMenu';

export default function Profile() {

  return (
    <>
      <Head>
        <title>Code Tunes</title>
      </Head>
      <div className="lg:flex">
        <Header />
        <p className="mx-auto lg:h-40">rota / página de profile</p>
      </div>
      <OpenMenu />
    </>
  );
}
