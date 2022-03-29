import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link as LinkScroll } from "react-scroll";

type TMobileNavbar = {
    isSidebarOpen: boolean,
    toggleSidebar: () => void,
    navDataList: string[],
    navigationLinks: string[],
};

const MobileNav = ({
    isSidebarOpen,
    toggleSidebar,
    navDataList,
    navigationLinks,
}: TMobileNavbar) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    // Save scroll position on scroll
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    // Add scroll Listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (

        <>
        
            <Transition
                as="aside"
                style={{ width: "min(75vw, 400px)" }}
                className="flex fixed justif-center top-0 bottom-0 right-0 bg-slate-800 py-12 px-2 h-screen z-50"
                show={isSidebarOpen}
                enter="transition ease-in-out duration-200 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-200 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full">

                <nav className="flex justify-center items-center text-center flex-col w-full">
                    <ul className="p-0 m-0 w-full">

                        {navigationLinks.map((navLink, index) => (
                            <li className="block relative py-2" key={index}>
                                <LinkScroll
                                    onClick={toggleSidebar}
                                    smooth={true}
                                    duration={500}
                                    offset={-50}
                                    className={"cursor-pointer font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-themeAccent"}
                                    to={navLink}
                                >
                                    <span className="pr-2 text-themeAccent">0{index + 1}.</span><span className="hover:underline">{navDataList[index]}</span>
                                </LinkScroll>
                            </li>
                        ))}
                    </ul>
                </nav>

            </Transition>
            
        </>
    );
};

export default MobileNav;
