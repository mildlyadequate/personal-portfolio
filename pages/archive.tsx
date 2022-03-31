import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { FiExternalLink, FiGithub, FiLink } from 'react-icons/fi';
import { MdOutlineArticle } from "react-icons/md";
import Layout from '../components/Layout/Layout'
import { useProjectData } from '../hooks/useProjectData';
import { useTranslation } from '../hooks/useTranslation';
import useWindowDimensions from '../hooks/useWindowDimensions';

const Archive = () => {

  let T = useTranslation();
  const projectData = useProjectData(true);
  const { width } = useWindowDimensions();

  // Prop className doesnt match between Server/Client with this, removing isSmall from initializer in useState fixes it, but triggers reload on page load. 
  // Haven't noticed any bugs occuring from this yet other than the Warning in console
  // let isSmall = false;
  // if(typeof width == "number" && width <= 640){
  //   isSmall = true;
  // } 
  const [isSmallWindow, setIsSmallWindow] = useState(false);

  useEffect(() => {
    if (typeof width == "number") {
      if (width <= 640) {
        setIsSmallWindow(true);
      } else {
        setIsSmallWindow(false);
      }
    }
  }, [width])

  return (
    <>
      <Head>
        <title>{T.archive_page_title}</title>
      </Head>

      <Layout>

        <div className="mt-40 py-5 mx-auto flex flex-col min-h-screen">
          <h1 className='py-2 text-white text-4xl font-semibold'>{T.archive_header}</h1>
          <p className='text-themeMild mb-6 sm:mb-12 text-lg'>{T.archive_subheader}</p>

          <table className='table-fixed'>
            <thead className='text-left text-xl text-themeMild'>
              <tr className='border-b border-themeMild'>

                {/* MOBILE LAYOUT */}
                <th className={`p-4 ${isSmallWindow ? "" : "hidden"}`}>{T.archive_table_mobile}</th>

                {/* DESKTOP LAYOUT */}
                <th className={`p-4 ${isSmallWindow ? "hidden" : ""}`}>{T.archive_table_year}</th>
                <th className={`p-4 ${isSmallWindow ? "hidden" : ""}`}>{T.archive_table_title}</th>
                <th className={`p-4 ${isSmallWindow ? "hidden" : ""}`}>{T.archive_table_tags}</th>
                <th className={`p-4 ${isSmallWindow ? "hidden" : ""}`}>{T.archive_table_links}</th>

              </tr>
            </thead>
            <tbody className='text-themeMild'>

              {projectData.map((project, index) => (

                <tr key={index} className='hover:bg-themeBackgroundLight group h-full'>

                  {/* MOBILE LAYOUT */}

                  <td className={`p-4 pr-4 ${isSmallWindow ? "flex flex-col" : "hidden"}`}>
                    <Link href={project.linkInternal} passHref>
                      <a title={T.archive_project_link_alt + project.title} className='flex flex-row hover:no-underline'>
                        <span className='font-mono text-themeAccent mr-4 mt-[2px]'>{project.year}</span>
                        <h3 className='text-white text-lg font-sans font-semibold group-hover:text-themeAccent group-hover:underline cursor-pointer'>{project.title}</h3>
                      </a>
                    </Link>
                    <div className='flex flex-row'>
                      {project.tags.map((tag, index) => (
                        <span key={index} className={` ${index !== project.tags.length - 1 ? "after:content-['-'] after:px-1" : ""} font-mono text-themeMild text-sm group-hover:text-white`}>{tag}</span>
                      ))}
                    </div>
                    <div className={`mt-1 group-hover:text-white self-start`}>
                      <div className='flex gap-4'>

                        {typeof project.linkInternal === 'string' && 
                          <Link href={project.linkInternal} passHref>
                            <a className='py-2 archive-icon-link'><MdOutlineArticle className='archive-icon' /></a>
                          </Link>
                        }

                        {project.linkGithub !== "" &&
                          <a href={project.linkGithub} target={"_blank"} rel="noreferrer" className='py-2 archive-icon-link'><FiGithub className='archive-icon' /></a>
                        }

                        {project.linkExternal !== "" &&
                          <a href={project.linkGithub} target={"_blank"} rel="noreferrer" className='py-2 archive-icon-link'><FiExternalLink className='archive-icon' /></a>
                        }

                      </div>
                    </div>
                  </td>

                  {/* DESKTOP LAYOUT */}

                  <td className={`w-1/12 p-4 pr-4 font-mono text-themeAccent ${isSmallWindow ? "hidden" : ""}`}>
                    {project.year}
                  </td>

                  <td className={`p-4 ${project.featured && !isSmallWindow ? "flex flex-col" : ""} pr-4 cursor-pointer content-center group ${isSmallWindow ? "hidden" : ""}`}>
                    <Link href={project.linkInternal} passHref>
                      <a className='hover:no-underline' title={T.archive_project_link_alt + project.title}>
                        {project.featured && <span className='text-sm text-themeAccent'>{T.work_featured_overline}</span>}
                        <h3 className='text-white text-lg font-semibold group-hover:text-themeAccent hover:underline'>{project.title}</h3>
                      </a>
                    </Link>
                  </td>

                  <td className={`w-4/12 p-4 pr-4 ${isSmallWindow ? "hidden" : ""}`}>
                    {project.tags.map((tag, index) => (
                      <span key={index} className={` ${index !== project.tags.length - 1 ? "after:content-['-'] after:px-1" : ""} font-mono text-themeMild text-sm group-hover:text-white`}>{tag}</span>
                    ))}
                  </td>

                  <td className={`w-1/12 p-4 group-hover:text-white self-center ${isSmallWindow ? "hidden" : ""}`}>
                    <div className='flex gap-4'>

                      {typeof project.linkInternal === 'string' &&  // project.linkInternal !== "" &&
                        <Link href={project.linkInternal} passHref>
                          <a className='py-2 archive-icon-link' title={T.archive_project_link_alt + project.title}>
                            <MdOutlineArticle className='archive-icon' />
                          </a>
                        </Link>
                      }

                      {project.linkGithub !== "" &&
                        <a href={project.linkGithub} title="Github Link" target={"_blank"} rel="noreferrer" className='py-2 archive-icon-link'>
                          <FiGithub className='archive-icon' />
                        </a>
                      }

                      {project.linkExternal !== "" &&
                        <a href={project.linkGithub} title={T.archive_project_external_alt} target={"_blank"} rel="noreferrer" className='py-2 archive-icon-link'>
                          <FiExternalLink className='archive-icon' />
                        </a>
                      }

                    </div>
                  </td>

                </tr>

              ))}

            </tbody>
          </table>

        </div>

      </Layout>
    </>
  )
}

export default Archive;