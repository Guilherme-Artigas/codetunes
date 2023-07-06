import Head from 'next/head';
import Receive from '@/frontend/components/Receive';

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Tunes</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Receive />
    </>
  );
}
