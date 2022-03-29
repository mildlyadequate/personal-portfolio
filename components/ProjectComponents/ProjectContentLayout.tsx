import React from 'react'
import { convertToRoman, getDangerousHtml } from '../../util/helperUtil';
import { Link as LinkScroll } from "react-scroll";
import ProjectBreadCrumbs from './ProjectBreadCrumbs';
import { useTranslation } from '../../hooks/useTranslation';

export type tableOfContentEntry = {
  link: string,
  text: string
}

type Props = {
  topLine: string,
  title: string,
  desc: string,
  tableOfContent: tableOfContentEntry[],
  children: React.ReactNode,
}

const ProjectContentLayout = ({ topLine, title, desc, tableOfContent, children }: Props) => {

  let T = useTranslation();

  return (
    <div className="mt-40 py-2 mx-auto flex flex-col min-h-screen max-w-screen-xl">

      <ProjectBreadCrumbs projectTitle={title} />

      <div className='flex flex-col md:max-w-screen-md'>

        <span className='font-mono text-sm text-themeAccent'>{topLine}</span>
        <h1 className=' text-white text-4xl font-semibold ml-[-2px] mb-2'>{title}</h1>
        <div className='text-themeMild mb-8' dangerouslySetInnerHTML={getDangerousHtml(desc)} />

        <div className='px-8 py-4 bg-themeBackgroundLight mb-8 min-w-fit lg:w-1/2 '>
          <h2 className='text-white font-semibold text-xl pb-1 font-mono'>{T.project_table_of_contents_title}</h2>
          <ul>
            {tableOfContent.map((entry, index) => (
              <li key={index} className='flex pb-1'>
                <span className='text-themeAccent mr-2 font-mono basis-10'>
                  {convertToRoman(index + 1)}
                </span>
                <LinkScroll
                  to={entry.link}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="text-themeMild"
                >
                  {entry.text}
                </LinkScroll>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <>
        {children}
      </>
    </div>
  )
}

export default ProjectContentLayout;