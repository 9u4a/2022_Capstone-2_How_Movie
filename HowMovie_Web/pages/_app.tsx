import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>How Movie</title>
        <link rel="icon" href="/asset/image/clapperboard.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
