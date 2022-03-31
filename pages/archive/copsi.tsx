import Head from 'next/head';
import React from 'react'
import DynamicContentDiv from '../../components/DynamicContentDiv';
import Layout from '../../components/Layout/Layout';
import Project2ColSection from '../../components/ProjectComponents/Project2ColSection';
import ProjectContentLayout from '../../components/ProjectComponents/ProjectContentLayout';
import ProjectSectionTitle from '../../components/ProjectComponents/ProjectSectionTitle';
import SchemaHandler from '../../components/ProjectComponents/SchemaHandler';
import { useTranslation } from '../../hooks/useTranslation';

const Copsi = () => {

    let T = useTranslation();

    const tableOfContent = [
        { link: "introduction", text: T.project_section_intro_heading },
        { link: "objective", text: T.project_copsi_section_objective_heading },
        { link: "organisation", text: T.project_copsi_section_environment_heading },
        { link: "documentation", text: T.project_copsi_section_files_heading },
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
                <title>{T.project_copsi_page_title}</title>

                <meta property="og:image:width" content="1145" />
                <meta property="og:image:height" content="599" />
                <meta property="og:title" content={T.project_copsi_page_title} />
                <meta property="og:description" content={T.html_index_desc} />
                <meta property="og:url" content={T.page_url + T.project_copsi_internal_link} />
                <meta property="og:image" content={T.page_url_static + "/opengraph/og-image.jpg"} />
            </Head>

            <Layout>

                <SchemaHandler
                    title={T.project_copsi_title}
                    desc={T.project_copsi_desc}
                    lang={T.html_language_selected}
                    url={T.page_url + T.project_copsi_internal_link}
                    modified={"2022-03-10"}
                    published={"2022-03-10"}
                />

                <ProjectContentLayout
                    title={T.project_copsi_title}
                    topLine={T.project_topline_university}
                    desc={T.project_copsi_desc}
                    tableOfContent={tableOfContent}
                >

                    {/* INTRO */}
                    <Project2ColSection index={0} tableOfContent={tableOfContent}>

                        <DynamicContentDiv
                            wrapText={true}
                            content={T.project_copsi_section_introduction_p1}
                        />
                        <DynamicContentDiv
                            wrapText={true}
                            content={T.project_copsi_section_introduction_p2}
                        />

                    </Project2ColSection>


                    <Project2ColSection>

                        {/* OBJECTIVE */}
                        <div>
                            <ProjectSectionTitle index={1} tableOfContent={tableOfContent} />
                            <DynamicContentDiv
                                wrapText={true}
                                content={T.project_copsi_section_objective_p}
                            />
                        </div>

                        {/* ENVIRONMENT */}
                        <div>
                            <ProjectSectionTitle index={2} tableOfContent={tableOfContent} />
                            <DynamicContentDiv
                                wrapText={true}
                                content={T.project_copsi_section_environment_p}
                            />
                        </div>

                    </Project2ColSection>

                    <Project2ColSection>

                        {/* FILES */}
                        <div>
                            <ProjectSectionTitle index={3} tableOfContent={tableOfContent} />
                            <DynamicContentDiv
                                wrapText={true}
                                content={T.project_copsi_section_files_p}
                            />
                        </div>

                    </Project2ColSection>

                </ProjectContentLayout>

            </Layout>
        </>
    )
}

export default Copsi;