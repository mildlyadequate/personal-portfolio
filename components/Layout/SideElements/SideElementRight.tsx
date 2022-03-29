import { useTranslation } from '../../../hooks/useTranslation';

const personalMailAddress = { name: "sebastian.schuler.sbsc", domain: "gmail", tld: "com" }

const SideElementRight = () => {

    let T = useTranslation();

    return (

        <div className='w-10 fixed bottom-0 left-auto right-8 z-10'>


            <div className='flex flex-col items-center m-0 p-0 after:block after:w-px after:h-[90px] after:my-0 after:mx-auto after:bg-white'>
                
                <p className='p-[10px] inline-block relative'></p>
                <a
                    data-name={personalMailAddress.name}
                    data-domain={personalMailAddress.domain}
                    data-tld={personalMailAddress.tld}
                    title={T.side_email_title}
                    onClick={() => {
                        window.location.href = `mailto:${personalMailAddress.name}@${personalMailAddress.domain}.${personalMailAddress.tld}`
                        return false;
                    }
                    }
                    style={{ writingMode: "vertical-rl" }}
                    className='cursor-pointer cryptedmail align-middle text-white relative inline-block p-[10px] mb-[16px] tracking-widest font-mono opacity-75 transition hover:text-themeAccent hover:opacity-100 hover:translate-y-[-3px]'
                >

                </a>

            </div>


        </div>

    );
};

export default SideElementRight;
