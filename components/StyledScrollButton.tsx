import React from 'react';
import { Link as LinkScroll } from "react-scroll";

type TStyledScrollButton = {
    to: string,
    altText: string,
    text: string,
}

const StyledScrollButton = ({ to, altText, text }: TStyledScrollButton) => {
    return (
        <div>
            <LinkScroll
                to={to}
                smooth={true}
                duration={500}
                offset={-50}
                className="h-12 px-6 inline-flex items-center justify-center
                font-medium tracking-wide text-white
                border border-themeAccent rounded
                hover:bg-themeAccent hover:text-themeBackground hover:no-underline
                cursor-pointer shadow-md
                transition duration-200"
                aria-label={altText}
                title={altText}
            >
                {text}
            </LinkScroll>
        </div>
    );
};

export default StyledScrollButton;
