import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { Link as LinkScroll } from "react-scroll";

type Props = {
    isRouteForced?: boolean,
    index?: number,
    text: string,
    href: string,
}

const NavButton = ({ index, text, href, isRouteForced }: Props) => {

    const router = useRouter();
    let isRoute = router.pathname !== "/" ? true : false; 
    if(isRouteForced) isRoute = isRouteForced;

    return (
        <>
            {
                isRoute ? (
                    <Link href={"/#"+href} passHref>
                        <a className={"cursor-pointer font-medium tracking-wide text-gray-100 transition-colors duration-200 can-hover:hover:text-themeAccent"}>
                            {typeof index === "number" && (<span className="pr-2 text-themeAccent">0{index + 1}.</span> ) }
                            <span className="can-hover:hover:underline">{text}</span>
                        </a>
                    </Link>
                ) : (
                    <LinkScroll
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className={
                            "cursor-pointer font-medium tracking-wide text-gray-100 transition-colors duration-200 can-hover:hover:text-themeAccent"
                        }
                        to={href}
                    >
                        {typeof index === "number" && (<span className="pr-2 text-themeAccent">0{index + 1}.</span>) }
                        <span className="can-hover:hover:underline">{text}</span>
                    </LinkScroll>
                )
            }
        </>
    )
}

export default NavButton;