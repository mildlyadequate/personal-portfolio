import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar/NavbarContainer';
import WidgetToTop from './SideElements/WidgetToTop';
import Head from 'next/head'
import { useTranslation } from '../../hooks/useTranslation';

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {

    const [isSidenavOpen, setIsSidenavOpen] = useState(false);
    let T = useTranslation();

    return (
        <>
            <Head>
                <meta name="description" content={T.html_index_desc} />
                <meta name="keywords" content="portfolio, sebastian schuler" />
                <meta name="robots" content="index,follow" />

                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#2b5797" />
                <meta name="theme-color" content="#171c28" />

                <meta property="og:image:width" content="1145" />
                <meta property="og:image:height" content="599" />
                <meta property="og:title" content="Portfolio: Sebastian Schuler" />
                <meta property="og:description" content={T.html_index_desc} />
                <meta property="og:url" content="http://sebastian-schuler.de" /> {/* TODO: update url */}
                <meta property="og:image" content="http://sebastian-schuler.de/opengraph/og-image.jpg" />
            </Head>
            
            <div style={{ counterReset: "section 0" }} className={`bg-themeBackground px-6 sm:px-12 md:px-24 lg:px-36`}>
                <Navbar isSidenavOpen={isSidenavOpen} setIsSidenavOpen={setIsSidenavOpen} />
                <WidgetToTop />
                <main onClick={() => { isSidenavOpen && (setIsSidenavOpen(false)) }}>
                    <div className={`${isSidenavOpen ? 'blur pointer-events-none select-none' : ''}`}>
                        {children}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
