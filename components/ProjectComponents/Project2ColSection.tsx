import React from 'react'
import { tableOfContentEntry } from './ProjectContentLayout';
import ProjectSectionTitle from './ProjectSectionTitle';

type Props = {
    index?: number,
    tableOfContent?: tableOfContentEntry[],
    children: React.ReactNode;
}

const Project2ColSection = ({ index, tableOfContent, children }: Props) => {
    return (
        <>
            {
                (typeof index != "undefined" && typeof tableOfContent != "undefined") && <ProjectSectionTitle index={index} tableOfContent={tableOfContent} />
            }
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 mb-12 text-themeMild'>
                {children}
            </div>
        </>
    )
}

export default Project2ColSection;