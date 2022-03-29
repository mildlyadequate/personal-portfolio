import { FiGithub, FiLinkedin } from "react-icons/fi";

const SideElementLeft = () => {
    return (
        <div className='w-10 fixed bottom-0 right-auto left-8 z-10'>

            <div className='flex flex-col items-center m-0 p-0 after:block after:w-px after:h-[90px] after:my-0 after:mx-auto after:bg-white'>

                <a href="http://linkedin.com" title='LinkedIn' aria-label='LinkedIn' target={'_blank'} rel='noreferrer' className='p-[10px] inline-block relative brandIconLink'>
                    <FiLinkedin className='brandIcon' />
                </a>
                <a href="http://github.com" title='GitHub' aria-label='GitHub' target={'_blank'} rel='noreferrer' className='p-[10px] mb-[12px] inline-block relative brandIconLink'>
                    <FiGithub className='brandIcon' />
                </a>

            </div>

        </div>
    );
};

export default SideElementLeft;
