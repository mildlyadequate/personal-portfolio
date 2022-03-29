import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import Layout from '../../components/Layout/Layout';
import Project2ColSection from '../../components/ProjectComponents/Project2ColSection';
import ProjectBreadCrumbs from '../../components/ProjectComponents/ProjectBreadCrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import ZoomableImage from '../../components/ProjectComponents/ZoomableImage';
import ProjectContentLayout from '../../components/ProjectComponents/ProjectContentLayout';
import SchemaHandler from '../../components/ProjectComponents/SchemaHandler';
import DynamicContentDiv from '../../components/DynamicContentDiv';
import GalleryZoomableImage from '../../components/ProjectComponents/GalleryZoomableImage';
import ProjectSectionTitle from '../../components/ProjectComponents/ProjectSectionTitle';

const Studienverzeichnis = () => {

    let T = useTranslation();

    const tableOfContent = [
        { link: "introduction", text: T.project_section_intro_heading },
        { link: "datacollection", text: T.project_studienverzeichnis_section_datacollection_heading },
        { link: "technologie", text: T.project_studienverzeichnis_section_technology_heading },
        { link: "informationarchitecture", text: T.project_studienverzeichnis_section_informationarchitecture_heading },

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
        {
            isGalleryImage: true,
            src: "/images/studienverzeichnis/studienverzeichnis_full_frontpage.png",
            desc: T.project_studienverzeichnis_image_desc_full_frontpage,
            width: 1903,
            height: 3258
        },
        {
            isGalleryImage: true,
            src: "/images/studienverzeichnis/studienverzeichnis_post.png",
            desc: T.project_studienverzeichnis_image_desc_post,
            width: 1903,
            height: 1471
        },
        {
            isGalleryImage: true,
            src: "/images/studienverzeichnis/studienverzeichnis_university.png",
            desc: T.project_studienverzeichnis_image_desc_university,
            width: 1903,
            height: 1595
        },

    ];

    return (
        <>
            <Head>
                <title>{T.project_studienverzeichnis_page_title}</title>

                <meta property="og:image:width" content="1145" />
                <meta property="og:image:height" content="599" />
                <meta property="og:title" content={T.project_studienverzeichnis_page_title} />
                <meta property="og:description" content={T.html_index_desc} />
                <meta property="og:url" content="http://sebastianschuler.com" /> {/* TODO: update url */}
                <meta property="og:image" content="http://sebastianschuler.com/opengraph/og-image.jpg" />
            </Head>

            <Layout>

                <SchemaHandler
                    title={T.project_marketingacademy_title}
                    desc={T.project_marketingacademy_desc}
                    lang={T.html_language_selected}
                    url={T.page_url + T.project_marketingacademy_internal_link}
                    modified={"2022-03-10"}
                    published={"2022-03-10"}
                />

                <ProjectContentLayout
                    title={T.project_studienverzeichnis_title}
                    topLine={T.project_topline_university}
                    desc={T.project_studienverzeichnis_desc}
                    tableOfContent={tableOfContent}
                >

                    <Project2ColSection index={0} tableOfContent={tableOfContent}>

                        <div>
                            <DynamicContentDiv
                                wrapText={true}
                                content={T.project_studienverzeichnis_section_introduction_p1}
                            />
                            <DynamicContentDiv
                                wrapText={true}
                                content={T.project_studienverzeichnis_section_introduction_p2}
                            />
                        </div>


                        <GalleryZoomableImage
                            index={0}
                            imageList={images}
                        />

                    </Project2ColSection>

                    <Project2ColSection index={1} tableOfContent={tableOfContent}>

                        <DynamicContentDiv
                            wrapText={true}
                            content={T.project_studienverzeichnis_section_datacollection_p1}
                        />

                        <DynamicContentDiv
                            wrapText={true}
                            content={T.project_studienverzeichnis_section_datacollection_p2}
                        />

                    </Project2ColSection>

                    <Project2ColSection index={2} tableOfContent={tableOfContent}>

                        <DynamicContentDiv
                            wrapText={true}
                            content={T.project_studienverzeichnis_section_technology_p1}
                        />

                        <DynamicContentDiv
                            wrapText={true}
                            content={T.project_studienverzeichnis_section_technology_p2}
                        />

                    </Project2ColSection>

                    <Project2ColSection>

                        <div>
                            <ProjectSectionTitle index={3} tableOfContent={tableOfContent} />
                            <DynamicContentDiv
                                wrapText={true}
                                content={T.project_studienverzeichnis_section_informationarchitecture_p1}
                            />
                        </div>

                    </Project2ColSection>

                    {/* GALLERY */}
                    <Project2ColSection index={4} tableOfContent={tableOfContent}>

                        <div>

                            <GalleryZoomableImage
                                index={1}
                                imageList={images}
                            />

                        </div>

                        <div>

                            <GalleryZoomableImage
                                index={2}
                                imageList={images}
                            />

                            <GalleryZoomableImage
                                index={3}
                                imageList={images}
                            />

                        </div>

                    </Project2ColSection>

                </ProjectContentLayout>

            </Layout>

        </>

    )
}

export default Studienverzeichnis;