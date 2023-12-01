import '@/styles/globals.css'
import Head from 'next/head';
import ReactGA from 'react-ga'; // Import ReactGA
import { useEffect } from 'react';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    ReactGA.initialize('G-D0SCXTSD9K'); // Replace with your GA tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Head>
        <title>Realty Analytica - Coming Soon</title>
        <meta name="description" content="Realty Analytica is coming soon. Stay tuned for more information." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
