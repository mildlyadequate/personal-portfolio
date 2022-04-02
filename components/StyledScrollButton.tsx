import clsx from 'clsx';
import React from 'react';
import { Link as LinkScroll } from "react-scroll";

type TStyledScrollButton = {
    className?: string,
    to: string,
    altText: string,
    text: string,
    onClick?: () => void
}
clsx
const StyledScrollButton = ({ className, to, altText, text, onClick }: TStyledScrollButton) => {
    return (
        <div>
            <LinkScroll
                onClick={onClick}
                to={to}
                smooth={true}
                duration={500}
                offset={-50}
                className={ clsx(`h-12 px-6 inline-flex items-center justify-center
                font-medium tracking-wide text-white
                border border-themeAccent rounded
                can-hover:hover:bg-themeAccent can-hover:hover:text-themeBackground can-hover:hover:no-underline
                cursor-pointer shadow transition duration-200`, className) }
                aria-label={altText}
                title={altText}
            >
                {text}
            </LinkScroll>
        </div>
    );
};

export default StyledScrollButton;
