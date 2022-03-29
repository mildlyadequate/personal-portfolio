import React, { useState, useEffect } from 'react'
import { animateScroll as Scroll } from "react-scroll";
import { useTranslation } from '../../../hooks/useTranslation';

const WidgetToTop = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    let T = useTranslation();

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        Scroll.scrollToTop();
    };


    return (

        <>
            <button
                onClick={() => scrollToTop()}
                className={`${scrollPosition > 80 ? 'opacity-100' : 'opacity-0'} flex px-4 py-2 bg-themeBackgroundLight rounded-full shadow
                fixed bottom-8 left-auto right-5 z-10 toTopIcon-link cursor-pointer transition group
                hover:bg-themeAccent `}
            >
                <p className='self-center text-white group-hover:text-themeBackground'>{T.button_to_top_text}</p>
            </button>
        </>

    )

}

export default WidgetToTop;