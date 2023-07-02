import Head from 'next/head';
import Header from '@/frontend/components/Header';
import OpenMenu from '@/frontend/components/OpenMenu';

export default function ProfileEdit() {

  return (
    <>
      <Head>
        <title>Code Tunes</title>
      </Head>
      <div className="lg:flex">
        <Header />
        <p className="mx-auto text-center">rota / página de edição de perfil</p>
      </div>
      <OpenMenu />
    </>
  );
}
