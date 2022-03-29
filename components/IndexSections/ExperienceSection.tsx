import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import clsx from 'clsx';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ExperienceDisplayedItem from '../ExperienceDisplayedItem';

const ExperienceSection = () => {

  const [selectedTab, setSelectedTab] = useState(0);

  const nodeRef = React.useRef(null);

  let T = useTranslation();

  let experiences = [
    {
      institutionLink: "https://www.hs-kl.de",
      institution: T.experience_item4_institution,
      title: T.experience_item4_title,
      header: T.experience_item4_header,
      time: T.experience_item4_time,
      desc: T.experience_item4_desc
    },
    {
      institutionLink: "https://uxqb.org/en/certification/foundation-level-cpux-f/",
      institution: T.experience_item3_institution,
      title: T.experience_item3_title,
      header: T.experience_item3_header,
      time: T.experience_item3_time,
      desc: T.experience_item3_desc
    },
    {
      institutionLink: "https://www.edv-hoehne.de",
      institution: T.experience_item2_institution,
      title: T.experience_item2_title,
      header: T.experience_item2_header,
      time: T.experience_item2_time,
      desc: T.experience_item2_desc
    },
    {
      institutionLink: "http://www.bbs-suew.de",
      institution: T.experience_item1_institution,
      title: T.experience_item1_title,
      header: T.experience_item1_header,
      time: T.experience_item1_time,
      desc: T.experience_item1_desc
    },
  ];

  const getExperienceDesc = () => {
    return { __html: experiences[selectedTab].desc };
  }

  const getTranslate = () => {
    let val = selectedTab * 100;
    return (val + "%");
  };

  return (
    <div id="experience" className="py-28 mx-auto max-w-screen-md items-center justify-center flex flex-col">

      <h3
        className='numbered-section-heading
                  before:font-mono before:text-2xl before:text-themeAccent
                after:bg-gray-500'
      >
        {T.experience_header}
      </h3>


      <div className='flex flex-row w-full'>

        <div className='relative block w-max p-0 m-0 list-none basis-1/4'>

          <div className={"relative flex flex-col w-max p-0 m-0 list-none"}>

            <div
              className={clsx("absolute w-full transition-transform transform border-l-2 border-themeAccent -left-[2px] z-10")}
              style={{ transform: `translateY(${getTranslate()})`, height: `${100 / experiences.length}%` }}
            />

            <div
              className={clsx("absolute w-full h-full transition-transform transform border-l border-themeMild -left-[2px]")}
            />

            {experiences.map((experience, index) => (
              <button key={index}
                className={`relative flex w-full py-2 px-5 whitespace-nowrap hover:bg-themeBackgroundLight 
                            ${selectedTab === index ? "font-semibold text-themeAccent" : "text-themeMild"}`
                }
                onClick={() => setSelectedTab(index)}
              >
                {experience.title}
              </button>
            ))}

          </div>
        </div>


        <div className='relative block w-full ml-5'>

          <div className='w-full h-auto px-1 block'>

            <SwitchTransition>

              <CSSTransition nodeRef={nodeRef} key={selectedTab} timeout={200} classNames={"experience-transition"}>

                <div ref={nodeRef} className='flex flex-col'>
                  <a href={experiences[selectedTab].institutionLink} target={"_blank"} className='text-themeAccent font-mono text-sm mb-1'>
                    {experiences[selectedTab].institution}
                  </a>
                  <h3 className='text-xl text-white leading-none mb-1'>{experiences[selectedTab].header}</h3>
                  <p className='text-sm text-themeMild mb-4'>{experiences[selectedTab].time}</p>
                  <div className='block'>
                    <div className='dynamic-content-div' dangerouslySetInnerHTML={getExperienceDesc()} />
                  </div>
                </div>

              </CSSTransition >

            </SwitchTransition>

          </div>

        </div>

      </div>

    </div >
  );

};

export default ExperienceSection;
