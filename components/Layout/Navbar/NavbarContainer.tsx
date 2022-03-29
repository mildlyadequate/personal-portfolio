import { useEffect } from "react";
import DesktopNav from "./NavbarDesktop";
import MobileNav from "./NavbarMobile";
import { useTranslation } from "../../../hooks/useTranslation";

type TNavbar = {
    isSidenavOpen: boolean,
    setIsSidenavOpen: (isOpen: boolean) => void
}

export const navigationLinks = [
    "about", "experience", "work"
];

const Navbar = ({ isSidenavOpen, setIsSidenavOpen }: TNavbar) => {

    let T = useTranslation();
    // Create array resembling the navbar content
    const navDataList = [T.nav_mni_about, T.nav_mni_experience, T.nav_mni_work];

    const toggleSidenav = () => {
        setIsSidenavOpen(!isSidenavOpen);
    };

    const onResize = () => {
        const width = window.innerWidth;
        if (width >= 1024) setIsSidenavOpen(false);
    };

    useEffect(() => {
        isSidenavOpen && (document.body.style.overflow = "hidden");
        !isSidenavOpen && (document.body.style.overflow = "unset");

        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [isSidenavOpen]);

    return (
        <nav>
            <MobileNav
                isSidebarOpen={isSidenavOpen}
                toggleSidebar={toggleSidenav}
                navDataList={navDataList}
                navigationLinks={navigationLinks}
            />
            <DesktopNav
                isSidebarOpen={isSidenavOpen}
                toggleSidebar={toggleSidenav}
                navDataList={navDataList}
                navigationLinks={navigationLinks}
            />
        </nav>
    );
}

export default Navbar;
