import React from 'react'
import { CSSTransition } from 'react-transition-group';

type Props = {
    selectedTab:number,
    institutionLink:string,
    institution:string,
    header:string,
    time:string,
    getExperienceDesc:() => {__html:string}
}

const ExperienceDisplayedItem = ({selectedTab,institutionLink,institution,header,time,getExperienceDesc}:Props) => {
    return (
        <CSSTransition key={selectedTab} timeout={200} classNames={"experience-transition"}>

            <div className='flex flex-col'>
                <a href={institutionLink} target={"_blank"} className='text-themeAccent font-mono text-sm mb-1'>{institution}</a>
                <h3 className='text-xl text-white leading-none mb-1'>{header}</h3>
                <p className='text-sm text-themeMild mb-4'>{time}</p>
                <div className='block'>
                    <div className='experience-panel-desc' dangerouslySetInnerHTML={getExperienceDesc()} />
                </div>
            </div>

        </CSSTransition >
    )
}

export default ExperienceDisplayedItem;