import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import Layout from '../components/Layout/Layout';
import { useTranslation } from '../hooks/useTranslation';

const FourOhFour = () => {

    let T = useTranslation();

    return (
        <>
            <Head>
                <title>{T.page_notfound_title}</title>
            </Head>
            <Layout>
                <div className="py-5 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-screen-lg items-center justify-center flex flex-col h-screen">
                    <h1 className='text-white text-8xl'>404</h1>
                    <h2 className='text-white text-xl'>{T.page_notfound_subtitle}</h2>
                    <p>{T.page_notfound_text}</p>
                    <Link href={"/"} passHref>
                        <a
                            aria-label="Sebastian Schuler"
                            title="Sebastian Schuler"
                            className="mt-6 h-12 px-6 inline-flex items-center justify-center
                        font-medium tracking-wide text-white
                        border border-themeAccent rounded
                        hover:bg-themeAccent hover:text-themeBackground hover:no-underline
                        cursor-pointer shadow
                        transition duration-200"
                        >
                            {T.page_notfound_home_button}
                        </a>
                    </Link>

                </div>
            </Layout>
        </>
    )
}

export default FourOhFour;