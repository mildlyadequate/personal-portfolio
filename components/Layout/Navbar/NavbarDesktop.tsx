import { useEffect, useState } from "react";
import StyledScrollButton from "../../StyledScrollButton";
import { useTranslation } from "../../../hooks/useTranslation";
import NavButton from "../NavButton";
import Link from "next/link";

type TDesktopNavbar = {
    isSidebarOpen: boolean,
    toggleSidebar: () => void,
    navDataList: string[],
    navigationLinks: string[],
};

const DesktopNav = ({
    isSidebarOpen,
    toggleSidebar,
    navDataList,
    navigationLinks,
}: TDesktopNavbar) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    let T = useTranslation();

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 right-0 left-0 py-5 px-6 sm:px-12 md:px-24 lg:px-36 transition duration-300 ease-in-out z-50 
            ${scrollPosition > 10 ? "translate-y-[-89px] shadow-2xl shadow-themeBlack" : ""}`}
        >
            <div className="mx-auto md:max-w-full">
                <div className="relative flex items-center justify-between">
                    <Link href={"/"} passHref>
                        <a
                            aria-label="Sebastian Schuler"
                            title="Sebastian Schuler"
                            className="inline-flex items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlSpace="preserve"
                                className="fill-white group"
                                width="28"
                                height="28"
                                viewBox="0 0 560 560">
                                <path className="group-hover:opacity-0 transition" fillRule="evenodd" d="M63 0h434a63 63 0 1 1 0 126H63A63 63 0 1 1 63 0Zm371 388c0-25-21-45-46-45H63a63 63 0 0 1 0-126h389c59 0 108 48 108 108v127c0 60-48 108-108 108H63a63 63 0 0 1 0-126h325c25 0 45-21 45-46z" clipRule="evenodd" />
                                <path className="fill-themeAccent opacity-0 group-hover:opacity-100 transition" d="M75 18 497 0a63 63 0 0 1 0 126H63c-35 0-51-7-51-41 0-35 15-57 50-57zm359 370c0-24-21-45-46-45L68 318c-35 0-50-16-50-51s10-50 45-50h389c59 0 108 48 108 108v127c0 60-48 108-108 108H63a63 63 0 0 1 0-126h325c25 0 45-21 45-46z" />
                                <path className="fill-themeAccent opacity-0 group-hover:opacity-100 transition" d="M127 172c0 24 20 45 45 45l298 17c34 0 58 29 58 63 0 35 4 46-31 46H108C49 343 0 295 0 235V108C0 49 49 0 108 0h389a63 63 0 0 1 0 126H172c-25 1-46 21-46 46z" />
                            </svg>
                        </a>
                    </Link>
                    <div className="items-center hidden space-x-8 lg:flex">

                        {navigationLinks.map((navLink, index) => (
                            <div key={index}>
                                <NavButton index={index} text={navDataList[index]} href={navLink} />
                            </div>
                        ))}

                        <div>
                            <StyledScrollButton to={"contact"} altText={T.nav_contact_button_alt} text={T.nav_contact_button} />
                        </div>

                    </div>
                    <div className="lg:hidden">
                        <button aria-label={T.nav_menu_label} title={T.nav_menu_label} className={`mt-1 relative hamburger--squeeze z-[999] ${isSidebarOpen ? "is-active" : ""}`} type="button" onClick={toggleSidebar}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopNav;
