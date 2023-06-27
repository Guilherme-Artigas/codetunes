import Head from 'next/head';
import Login from '@/frontend/components/Login';

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Tunes</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Login />
    </>
  );
}
