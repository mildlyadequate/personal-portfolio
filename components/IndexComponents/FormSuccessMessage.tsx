import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md';
import { useTranslation } from '../../hooks/useTranslation';

const FormSuccessMessage = () => {

    const router = useRouter();
    const [showMessage, setShowMessage] = useState(false);
    let T = useTranslation();

    useEffect(() => {

        setShowMessage(true);

        const timer = setTimeout(() => {
            setShowMessage(false);

            // Another timeout to let the 200ms animation play out
            setTimeout(() => {
                router.replace("/", undefined, { shallow: true });
            }, 200);
        }, 2000);
        return () => clearTimeout(timer);

    }, [router]);

    return (
        <div className={`fixed top-16 left-1/2 right-1/2 -mx-40 z-10 ${showMessage ? "opacity-100" : "opacity-0"} transition`}>
            <div className="bg-themeAccent shadow-md shadow-black mx-auto w-80 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3">
                <div className="bg-themeAccent flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-themeBackgroundLight rounded-t-lg">
                    <p className="font-bold text-themeBackgroundLight flex items-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                        </svg>
                        {T.form_success_title}</p>
                    <div className="flex items-center cursor-pointer">
                        <button type="button" className="cursor-pointer btn-close btn-close-white box-content w-4 h-4 ml-2 text-themeBackgroundLight border-none rounded-none focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline" aria-label="Close">
                            <MdClose className='closeNotifIcon' />
                        </button>
                    </div>
                </div>
                <div className="p-3 bg-themeAccent rounded-b-lg break-words text-themeBackgroundLight">
                    {T.form_success_msg}
                </div>
            </div>
        </div>
    )
}

export default FormSuccessMessage;