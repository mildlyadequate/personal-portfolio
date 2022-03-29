import { useEffect, useState } from 'react';
import SideElementLeft from './SideElementLeft';
import SideElementRight from './SideElementRight';
import { animateScroll as Scroll } from "react-scroll";

const SideElementContainer = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

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
        <div className='hidden lg:block'>
                <SideElementLeft />
                <SideElementRight />
        </div>
    );
};

export default SideElementContainer;
