import React from 'react'
import { convertToRoman } from '../../util/helperUtil'
import { tableOfContentEntry } from './ProjectContentLayout'

type Props = {
    index: number,
    tableOfContent: tableOfContentEntry[],
}

const ProjectSectionTitle = ({ index, tableOfContent }: Props) => {

    const entry = tableOfContent[index];

    return (
        <h2 id={entry.link} className='text-white text-lg font-semibold mb-4'>
            <span className='text-themeAccent mr-2 font-mono'>
                {convertToRoman(index + 1)}
            </span>
            {entry.text}
        </h2>
    )
}

export default ProjectSectionTitle;