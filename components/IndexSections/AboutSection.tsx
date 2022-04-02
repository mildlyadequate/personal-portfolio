import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import img from '../../assets/images/me_france.jpg';
import Image from 'next/image';
import { Link as LinkScroll } from "react-scroll";
import SectionHeading from '../IndexComponents/SectionHeading';
import StyledLinkScroll from '../IndexComponents/StyledLinkScroll';

const AboutSection = () => {

  let T = useTranslation();

  const technologies = ["Javascript (ES6+)", "TypeScript", "React", "Remix", "Node.js", "Electron", "Python", "Java / Android", "Bootstrap", "Tailwind"];
  const tools = ["Google Analytics", "Google Ads", "Adobe Photoshop", "Adobe XD", "Git", "WordPress"];

  return (
    <div id="about" className="py-6 lg:my-24 mx-auto max-w-screen-md items-center justify-center flex flex-col">

      <SectionHeading text={T.about_header} paddingBottom={true} />

      <div className={`block lg:grid lg:grid-cols-about gap-12`}>

        <div className='block text-themeMild'>
          <p className='mb-4'>
            {T.about_paragraph1}
          </p>
          <p className='mb-4'>
            {T.about_paragraph2}
          </p>
          <p className='mb-4'>
            {T.about_paragraph_footer_1}
            <StyledLinkScroll id='experience' children={T.experience_header} />
            {T.about_paragraph_footer_2}
            <StyledLinkScroll id='work' children={T.work_header} />
            {T.about_paragraph_footer_3}
          </p>
        </div>

        <div className='relative max-w-[70%] lg:max-w-xs mx-auto my-12 lg:m-0'>
          <div className='block relative w-full can-hover:bg-themeAccent bg-opacity-90 rounded mix-blend-screen group can-hover:hover:bg-transparent transition'>
            <Image src={img} className='rounded mix-blend-multiply opacity-80 can-hover:group-hover:mix-blend-normal transition' layout='responsive' alt={T.about_image_alt} />
          </div>
        </div>

      </div>

      <div className='block w-full self-start lg:grid lg:grid-cols-2 text-themeMild lg:mt-6'>

        <div>
          <p className='mb-4'><span className='text-themeAccent font-semibold'>{T.about_technologies_title}</span> {T.about_technologies_desc}</p>
          <ul className='grid-cols-2 grid p-0 list-none justify-between'>
            {technologies.map((technology, index) => (
              <li
                className='before:absolute before:content-["▹"] before:left-0 before:text-themeAccent
                           relative mb-2 pl-5 overflow-hidden'
                key={index}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className='mt-8 lg:m-0'>
          <p className='mb-4'><span className='text-themeAccent font-semibold'>{T.about_tools_title}</span> {T.about_tools_desc}</p>
          <ul className='grid-cols-2 grid p-0 list-none justify-between'>
            {tools.map((tool, index) => (
              <li
                className='before:absolute before:content-["▹"] before:left-0 before:text-themeAccent
                           relative mb-2 pl-5 overflow-hidden'
                key={index}
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
};

export default AboutSection;
