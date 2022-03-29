import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { useTranslation } from '../../hooks/useTranslation';
import Lightbox from 'react-image-lightbox';
import { GalleryImage } from './GalleryZoomableImage';

type Props = {
    previewImg?: GalleryImage,
    src: string,
    numbering: string,
    desc: string,
    width: number,
    height: number,
    prevSrc?: string,
    nextSrc?: string,
    onMovePrev?: () => void,
    onMoveNext?: () => void,
    onClose?: () => void,
}

const ZoomableImage = ({ previewImg, src, numbering, desc, width, height, prevSrc, nextSrc, onMovePrev, onMoveNext, onClose }: Props) => {

    const [isZoomed, setIsZoomed] = useState(false);
    let T = useTranslation();

    if(typeof previewImg == "undefined"){
        previewImg = { isGalleryImage: false, src: src, width: width, height: height, desc: desc}
    }

    return (
        <>
            <div className='flex flex-col'>
                <div>
                    <Image src={ previewImg.src } alt={previewImg.desc} width={previewImg.width + "px"} height={previewImg.height + "px"} className={"rounded cursor-zoom-in"} onClick={() => setIsZoomed(!isZoomed)} />
                </div>
                <p className='mt-1 text-themeMild'>
                    <span className='mr-2 text-themeAccent font-mono'>{T.zoomed_image_desc_numbering + numbering}</span>
                    {desc}
                </p>
            </div>

            {isZoomed && (

                <Lightbox
                    prevSrc={prevSrc}
                    mainSrc={src}
                    nextSrc={nextSrc}
                    imageCaption={desc}
                    imageTitle={T.zoomed_image_desc_numbering + numbering}
                    imagePadding={50}
                    onCloseRequest={() => {
                        setIsZoomed(false);
                        if(onClose) onClose()
                    }}
                    onMovePrevRequest={onMovePrev}
                    onMoveNextRequest={onMoveNext}
                />

            )}

        </>

    )
}

export default ZoomableImage;