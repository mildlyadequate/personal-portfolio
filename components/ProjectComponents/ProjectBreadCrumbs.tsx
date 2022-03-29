import Link from 'next/link'
import React from 'react'
import { useTranslation } from '../../hooks/useTranslation';

type Props = {
    projectTitle: string
}

const ProjectBreadCrumbs = ({ projectTitle }: Props) => {

    let T = useTranslation();

    return (
        <div className='flex flex-col md:flex-row pb-16 justify-between gap-2 md:gap-0'>

            <div>
                <Link href={T.work_archive_internal_link}>
                    <a className='text-sm font-mono text-white hover:underline hover:text-themeAccent'>
                        {T.archive_link_text}
                    </a>
                </Link>
            </div>

            <div className='flex'>
                <Link href={"/#work"}>
                    <a className='text-sm font-mono text-white hover:underline hover:text-themeAccent'>
                        {T.index_breadcrumb_name}
                    </a>
                </Link>

                <span className='text-sm font-mono text-white px-2'>{">"}</span>

                <Link href={T.work_archive_internal_link}>
                    <a className='text-sm font-mono text-white hover:underline hover:text-themeAccent'>
                        {T.archive_breadcrumb_name}
                    </a>
                </Link>

                <span className='text-sm font-mono text-white px-2'>{">"}</span>

                <p className='text-sm font-mono text-themeMild'>
                    {projectTitle}
                </p>
            </div>



        </div>
    )
}

export default ProjectBreadCrumbs