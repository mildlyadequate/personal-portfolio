import Head from 'next/head';
import React from 'react'
import { useTranslation } from '../../hooks/useTranslation';

type Props = {
    title: string,
    desc: string,
    lang: string,
    url: string,
    published: string, // Date in YYYY-MM-DD
    modified: string,
    thumbnail?: string,
}

const SchemaHandler = ({ title, desc, lang, url, published, modified, thumbnail }: Props) => {

    return (
        <Head>
            <script type="application/ld+json">
                {`
                {
                    "@context":"https://schema.org/",
                    "@type":"WebPage",
                    "name":"${title}",
                    "author": { 
                        "@type": "Person", 
                        "givenName": "Sebastian" 
                        "familyName": "Schuler"
                    },
                    "datePublished": "${published}",
                    "dateModified": "${modified}",
                    "description": "${desc}",
                    "headline": "${title}",
                    ${thumbnail ? `"image": "${thumbnail}",` : ""}
                    "inLanguage": "${lang}",
                    "url": "${url}"
                }
            `}
            </script>
        </Head>

    )
}

export default SchemaHandler