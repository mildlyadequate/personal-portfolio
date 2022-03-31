import Head from 'next/head';
import React from 'react'
import DynamicContentDiv from '../../components/DynamicContentDiv';
import Layout from '../../components/Layout/Layout';
import Project2ColSection from '../../components/ProjectComponents/Project2ColSection';
import ProjectContentLayout from '../../components/ProjectComponents/ProjectContentLayout';
import SchemaHandler from '../../components/ProjectComponents/SchemaHandler';
import { useTranslation } from '../../hooks/useTranslation';

const Convertee = () => {

    let T = useTranslation();

    const tableOfContent = [
        { link: "introduction", text: T.project_section_intro_heading },
        { link: "technologie", text: T.project_convertee_section_technology_heading },
        { link: "gallery", text: T.project_section_gallery_heading },
    ];

    const images = [
        {
            isGalleryImage: false,
            src: "/images/studienverzeichnis/studienverzeichnis_cover.png",
            desc: T.project_studienverzeichnis_image_desc_frontpage,
            width: 1903,
            height: 1025
        },
    ];

    return (
        <>
            <Head>
                <title>{T.project_convertee_page_title}</title>

                <meta property="og:image:width" content="1145" />
                <meta property="og:image:height" content="599" />
                <meta property="og:title" content={T.project_convertee_page_title} />
                <meta property="og:description" content={T.html_index_desc} />
                <meta property="og:url" content={T.page_url+T.project_copsi_internal_link} />
                <meta property="og:image" content={T.page_url_static+"/opengraph/og-image.jpg"} />
            </Head>

            <Layout>

                <SchemaHandler
                    title={T.project_convertee_title}
                    desc={T.project_convertee_desc}
                    lang={T.html_language_selected}
                    url={T.page_url + T.project_convertee_internal_link}
                    modified={"2022-03-10"}
                    published={"2022-03-10"}
                />

                <ProjectContentLayout
                    title={T.project_convertee_title}
                    topLine={T.project_topline_personal}
                    desc={T.project_convertee_desc}
                    tableOfContent={tableOfContent}
                >

                    <Project2ColSection index={0} tableOfContent={tableOfContent}>

                        <div>
                            <DynamicContentDiv
                                wrapText={true}
                                content={T.project_convertee_section_introduction_p1}
                            />
                        </div>

                    </Project2ColSection>

                    
                    <Project2ColSection index={1} tableOfContent={tableOfContent}>

                        <div>
                            <DynamicContentDiv
                                wrapText={true}
                                content={T.project_convertee_section_technology_p1}
                            />
                        </div>

                    </Project2ColSection>

                </ProjectContentLayout>

            </Layout>
        </>
    )
}

export default Convertee;