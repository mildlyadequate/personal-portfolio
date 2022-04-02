import React, { useState, useEffect } from 'react'
import { animateScroll as Scroll } from "react-scroll";
import { useTranslation } from '../../../hooks/useTranslation';

const WidgetToTop = () => {

    const [displayWidget, setDisplayWidget] = useState(false);
    let T = useTranslation();

    const handleScroll = () => {
        const position = window.pageYOffset;
        setDisplayWidget( position > 80 );
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
                className={`${displayWidget ? 'opacity-100' : 'opacity-0'} flex px-4 py-2 bg-themeBackgroundLight rounded-full shadow
                fixed bottom-8 left-auto right-5 z-10 toTopIcon-link cursor-pointer transition group
                can-hover:hover:bg-themeAccent text-white can-hover:hover:text-themeBackground`}
            >
                {T.button_to_top_text}
            </button>
        </>

    )

}

export default WidgetToTop;