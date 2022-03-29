import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import FormSuccessMessage from '../components/FormSuccessMessage'
import AboutSection from '../components/IndexSections/AboutSection'
import ContactSection from '../components/IndexSections/ContactSection'
import ExperienceSection from '../components/IndexSections/ExperienceSection'
import HeroSection from '../components/IndexSections/HeroSection'
import WorkSection from '../components/IndexSections/WorkSection'
import Layout from '../components/Layout/Layout'
import { useTranslation } from '../hooks/useTranslation'

const Home: NextPage = () => {

  let T = useTranslation();
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>{T.html_index_title}</title>
      </Head>
      <Layout>
        {query.formsuccess == "true" && <FormSuccessMessage />}
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <ContactSection />
      </Layout>
    </>

  )
}

export default Home;
