import React from 'react';
import { Link as LinkScroll } from "react-scroll";

type TStyledScrollButton = {
    to: string,
    altText: string,
    text: string,
    onClick?: () => void
}

const StyledScrollButton = ({ to, altText, text, onClick }: TStyledScrollButton) => {
    return (
        <div>
            <LinkScroll
                onClick={onClick}
                to={to}
                smooth={true}
                duration={500}
                offset={-50}
                className="h-12 px-6 inline-flex items-center justify-center
                font-medium tracking-wide text-white
                border border-themeAccent rounded
                hover:bg-themeAccent hover:text-themeBackground hover:no-underline
                cursor-pointer shadow
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
