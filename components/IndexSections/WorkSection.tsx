import React, { useState, useEffect } from 'react';
import { useTranslation } from "../../hooks/useTranslation";
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { MdOutlineArticle } from "react-icons/md";
import Link from 'next/link';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ProjectMeta, useProjectData } from '../../hooks/useProjectData';
import { getDangerousHtml } from '../../util/helperUtil';

// How many other projects are shown by default before user must press show more button
const OTHER_WORK_DEFAULT_GRID = 6;


const WorkSection = () => {

    const [itemsToShow, setItemsToShow] = useState(OTHER_WORK_DEFAULT_GRID);
    const [itemsExpanded, setItemsExpanded] = useState(false);

    const featuredProjects: ProjectMeta[] = [];
    const otherProjects: ProjectMeta[] = [];

    const projectData = useProjectData();
    projectData.forEach((project) => {
        if (project.featured) featuredProjects.push(project);
        else otherProjects.push(project);
    });

    let T = useTranslation();

    useEffect(() => {
        if (itemsExpanded) setItemsToShow(otherProjects.length);
        else setItemsToShow(6);
    }, [itemsExpanded,otherProjects.length]);

    return (
        <div id="work" className="py-5 my-24 mx-auto max-w-screen-lg items-center justify-center flex flex-col">

            <h3
                className='numbered-section-heading
            before:font-mono before:text-2xl before:text-themeAccent
          after:bg-gray-500'
            >
                {T.work_header}
            </h3>

            {featuredProjects.map((item, index) => (

                <div key={index} className={'work-item'}>

                    <div className={"work-content relative"}>

                        <p className='text-themeAccent font-normal mb-2'>{T.work_featured_overline}</p>

                        <Link href={item.linkInternal}>
                            <a><h3 className='mb-5 text-white text-2xl font-semibold cursor-pointer hover:text-themeAccent hover:underline'>{item.title}</h3></a>
                        </Link>

                        <div className='relative z-10 p-6 bg-themeBackgroundLight text-themeMild shadow rounded'>
                            <p dangerouslySetInnerHTML={getDangerousHtml(item.desc)} />
                        </div>

                        <ul className='work-tags flex flex-wrap relative p-0 mt-6 mb-2 list-none'>

                            {item.tags.map((tag, index) => (
                                <li key={index} className='text-gray-400 mb-1 font-mono'>{tag}</li>
                            ))}

                        </ul>

                        <div className='flex work-links'>

                            {item.linkGithub !== "" &&
                                <a href={item.linkGithub} target={"_blank"} rel="noreferrer" className='p-2 brandIconLink'><FiGithub className='brandIcon' /></a>
                            }

                            {item.linkExternal !== "" &&
                                <a href={item.linkGithub} target={"_blank"} rel="noreferrer" className='p-2 brandIconLink'><FiExternalLink className='brandIcon' /></a>
                            }

                            <Link href={item.linkInternal}>
                                <a className='p-2 brandIconLink'><MdOutlineArticle className='brandIcon' /></a>
                            </Link>

                        </div>

                    </div>

                    <div className={"work-image"}>

                        <Link href={item.linkInternal}>
                            <a className='w-full h-full align-middle relative block rounded-md'>
                                {item.image && <Image src={item.image} alt="" layout={"responsive"} width={700} height={440} className={"rounded-md mix-blend-multiply"} />}
                                <div className="absolute top-0 right-0 bottom-0 left-0 rounded-md w-full h-full overflow-hidden bg-fixed opacity-50 hover:opacity-0 transition duration-300 ease-in-out bg-themeMild"></div>
                            </a>
                        </Link>

                    </div>

                </div>

            ))}

            <h4 className='text-white text-2xl mb-2 mt-28 font-semibold' >{T.work_other_projects_title}</h4>
            <Link href={T.work_archive_internal_link}><a className='text-themeAccent hover:underline'>{T.work_other_subtitle}</a></Link>


            <ul className='other-work-grid p-0 mt-12 relative grid list-none w-full'>


                <TransitionGroup component={null}>

                    {otherProjects.slice(0, itemsToShow).map((workItem, index) => (
                        <CSSTransition
                            key={index}
                            timeout={index >= OTHER_WORK_DEFAULT_GRID ? (index - OTHER_WORK_DEFAULT_GRID) * 300 : 300}
                            classNames={"other-work-transition"}
                            exit={false}
                        >
                            <li style={{ transitionDelay: `${index >= OTHER_WORK_DEFAULT_GRID ? (index - OTHER_WORK_DEFAULT_GRID) * 100 : 0}ms` }} key={index}>
                                <div className='flex flex-col relative h-full items-start justify-between bg-themeBackgroundLight rounded py-8 px-7 transition group hover:-translate-y-2'>
                                    <header className='block w-full'>
                                        <div className='flex justify-between items-center mb-9'>
                                            <div>
                                                <FiFolder className='other-work-item-icon' />
                                            </div>
                                            <div className='flex items-center -mr-2'>

                                                {workItem.linkGithub !== "" &&
                                                    <a href={workItem.linkGithub} target={"_blank"} rel="noreferrer" className='p-2 brandIconLink'><FiGithub className='brandIcon' /></a>
                                                }

                                                {workItem.linkExternal !== "" &&
                                                    <a href={workItem.linkGithub} target={"_blank"} rel="noreferrer" className='p-2 brandIconLink'><FiExternalLink className='brandIcon' /></a>
                                                }

                                                <Link href={workItem.linkInternal} passHref>
                                                    <a className='p-2 brandIconLink'><MdOutlineArticle className='brandIcon' /></a>
                                                </Link>

                                            </div>
                                        </div>
                                        <h5 className='text-white text-lg font-semibold'>
                                            <Link href={workItem.linkInternal} passHref>
                                                <a className='hover:text-themeAccent hover:underline transition'>{workItem.title}</a>
                                            </Link>
                                        </h5>
                                        <div className='text-themeMild'>
                                            {workItem.desc}
                                        </div>
                                    </header>
                                    <footer>
                                        <ul className='flex items-end flex-grow flex-wrap list-none mt-5 text-gray-400 font-mono text-sm'>
                                            {workItem.tags.map((tag, index) => (
                                                <li key={index} className='mr-4'>{tag}</li>
                                            ))}
                                        </ul>
                                    </footer>
                                </div>
                            </li>
                        </CSSTransition >
                    ))}

                </TransitionGroup>

            </ul>

            {otherProjects.length >= 6 && (
                <button
                    onClick={() => { setItemsExpanded(!itemsExpanded); }}
                    className='mt-8 px-5 py-3 border border-themeAccent rounded text-white'
                >
                    {itemsExpanded ? T.work_other_button_show_less : T.work_other_button_show_more}
                </button>
            )}


        </div>
    );
};

export default WorkSection;
