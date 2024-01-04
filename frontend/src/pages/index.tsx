import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import lottie from 'lottie-web';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';

export default function Home() {
    // const animationContainer = useRef(null);

    // useEffect(() => {
    //     if (animationContainer.current) {
    //       const anim = lottie.loadAnimation({
    //         container: animationContainer.current,
    //         renderer: 'svg',
    //         loop: true,
    //         autoplay: true,
    //         path: '/assets/lottie/coming-soon.json'
    //       });
    //       return () => anim.destroy();
    //     }
    //   }, []);

    return (
        <div className="flex flex-col h-screen w-full bg-gray-600 dark:bg-gray-600">
            <Head>
                <title>Realty Analytica - Coming Soon</title>
                <meta name="description" content="Realty Analytica is coming soon. Stay tuned for more information." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-800 dark:text-white">
                    Realty Analytica is Coming Soon!
                </h1>
                <p className="mt-4 text-lg lg:text-3xl text-gray-600 dark:text-gray-300 sm:px-6 md:px-8">
                    We are working hard to launch our new site. Stay tuned for more information and updates.
                </p>
                {/* <div className="mt-6" ref={animationContainer}></div> */}
                <div className="flex items-center justify-center bg-gray-100 rounded"> {/* Full-screen height, Flexbox centering */}
      <SearchBox />
    </div>
            </main>
        </div>
    );
}
