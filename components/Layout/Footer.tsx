import Link from 'next/link';
import React from 'react';
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="mx-auto pt-16 pb-16">

            <div className='w-full border-b border-themeMild mb-5' />

            {/* <div className='flex justify-between'> */}
            <div className='flex justify-center'>

                {/* <div className='flex gap-4 self-center'>
                    <Link href={""}>
                        <a className='text-themeAccent hover:underline'>
                            Impressum
                        </a>
                    </Link>
                    <Link href={""}>
                        <a className='text-themeAccent hover:underline'>
                            Datenschutz
                        </a>
                    </Link>
                </div> */}

                <div className='flex gap-4 self-center font-mono'>
                    <a href='https://github.com/mildlyadequate' className='text-themeAccent hover:underline'>
                        Github
                    </a>
                    <a href='https://www.linkedin.com/in/sebastian-schuler-8a1b8022b/' className='text-themeAccent hover:underline'>
                        LinkedIn
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
