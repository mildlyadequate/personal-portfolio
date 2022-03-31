import Head from 'next/head'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import Project2ColSection from '../../components/ProjectComponents/Project2ColSection';
import { useTranslation } from '../../hooks/useTranslation';
import ZoomableImage from '../../components/ProjectComponents/ZoomableImage';
import DynamicContentDiv from '../../components/DynamicContentDiv';
import ProjectContentLayout from '../../components/ProjectComponents/ProjectContentLayout';
import ProjectSectionTitle from '../../components/ProjectComponents/ProjectSectionTitle';
import GalleryZoomableImage from '../../components/ProjectComponents/GalleryZoomableImage';
import SchemaHandler from '../../components/ProjectComponents/SchemaHandler';

const MarketingAcademy = () => {

  let T = useTranslation();

  const tableOfContent = [
    { link: "introduction", text: T.project_section_intro_heading },
    { link: "research", text: T.project_marketingacademy_section_research_heading },
    { link: "design", text: T.project_marketingacademy_section_design_heading },
    { link: "technology", text: T.project_marketingacademy_section_technology_heading },
    { link: "plugins", text: T.project_marketingacademy_section_plugins_heading },
    { link: "implementation", text: T.project_marketingacademy_section_implementation_heading },
    { link: "gallery", text: T.project_section_gallery_heading },
    { link: "documentation", text: T.project_marketingacademy_section_files_heading },
  ];

  const images = [
    {
      isGalleryImage: false,
      src: "/images/marketing-akademie/ci-manual.png",
      desc: T.project_marketingacademy_image_desc_cimanual,
      width: 1090,
      height: 1588
    },
    {
      isGalleryImage: true,
      src: "/images/marketing-akademie/marketing-akademie-kompetenzen.jpg",
      desc: T.project_marketingacademy_image_desc_skills,
      width: 1200,
      height: 928
    },
    {
      isGalleryImage: true,
      src: "/images/marketing-akademie/marketing-akademie-projekte.jpg",
      desc: T.project_marketingacademy_image_desc_projects,
      width: 1200,
      height: 754
    },
    {
      isGalleryImage: true,
      src: "/images/marketing-akademie/marketing-akademie-glossar.jpg",
      desc: T.project_marketingacademy_image_desc_glossary,
      width: 1200,
      height: 732
    },
    {
      isGalleryImage: true,
      src: "/images/marketing-akademie/marketing-akademie-glossar-eintrag.jpg",
      desc: T.project_marketingacademy_image_desc_glossary_entry,
      width: 1200,
      height: 472
    },
  ];

  return (
    <>
      <Head>
        <title>{T.project_marketingacademy_page_title}</title>

        <meta property="og:image:width" content="1145" />
        <meta property="og:image:height" content="599" />
        <meta property="og:title" content={T.project_marketingacademy_page_title} />
        <meta property="og:description" content={T.html_index_desc} />
        <meta property="og:url" content={T.page_url+T.project_copsi_internal_link} />
        <meta property="og:image" content={T.page_url_static+"/opengraph/og-image.jpg"} />

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

        {/* INTRO - RESEARCH */}
        <ProjectContentLayout
          title={T.project_marketingacademy_title}
          topLine={T.project_topline_university}
          desc={T.project_marketingacademy_desc}
          tableOfContent={tableOfContent}
        >

          {/* INTRO */}
          <Project2ColSection index={0} tableOfContent={tableOfContent}>

            <div>
              <p>{T.project_marketingacademy_section_introduction_p1}</p>
            </div>

            <div>
              <p>{T.project_marketingacademy_section_introduction_p2}</p>
            </div>

          </Project2ColSection>

          {/* RESEARCH */}
          <Project2ColSection index={1} tableOfContent={tableOfContent}>

            <div>
              <p>{T.project_marketingacademy_section_research_p1}</p>
            </div>

            <div>
              <p>{T.project_marketingacademy_section_research_p2}</p>
            </div>

          </Project2ColSection>

          {/* DESIGN - TECHNOLOGY */}
          <Project2ColSection>

            <GalleryZoomableImage
              index={0}
              imageList={images}
            />

            <div>

              {/* DESIGN */}
              <ProjectSectionTitle index={2} tableOfContent={tableOfContent} />
              <DynamicContentDiv
                classNames='mb-12'
                wrapText={true}
                content={T.project_marketingacademy_section_design_html}
              />

              {/* TECHNOLOGY */}
              <ProjectSectionTitle index={3} tableOfContent={tableOfContent} />
              <DynamicContentDiv
                wrapText={true}
                content={T.project_marketingacademy_section_technology_p1}
              />

            </div>

          </Project2ColSection>

          {/* GALLERY - IMPLEMENTATION */}
          <Project2ColSection>

            <div>

              {/* PLUGINS */}
              <ProjectSectionTitle index={4} tableOfContent={tableOfContent} />
              <DynamicContentDiv
                wrapText={true}
                content={T.project_marketingacademy_section_plugins_p1}
              />

            </div>

            <div>

              {/* IMPLEMENTATION */}
              <ProjectSectionTitle index={5} tableOfContent={tableOfContent} />
              <DynamicContentDiv
                wrapText={true}
                content={T.project_marketingacademy_section_implementation_p1}
              />

            </div>

          </Project2ColSection>

          {/* GALLERY */}
          <Project2ColSection index={6} tableOfContent={tableOfContent}>

            <div>

              <GalleryZoomableImage
                index={1}
                imageList={images}
              />
              <GalleryZoomableImage
                index={3}
                imageList={images}
              />

            </div>

            <div>

              <GalleryZoomableImage
                index={2}
                imageList={images}
              />
              <GalleryZoomableImage
                index={4}
                imageList={images}
              />

            </div>

          </Project2ColSection>

          {/* DOCUMENTATION */}
          <Project2ColSection>

            <div>

              {/* DOCUMENTATION */}
              <ProjectSectionTitle index={7} tableOfContent={tableOfContent} />
              <DynamicContentDiv
                wrapText={true}
                content={T.project_marketingacademy_section_files_p1}
              />

            </div>

          </Project2ColSection>

        </ProjectContentLayout>

      </Layout>
    </>
  )
}

export default MarketingAcademy;