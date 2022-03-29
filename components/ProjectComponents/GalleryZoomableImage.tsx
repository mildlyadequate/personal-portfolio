import React, { useState } from 'react'
import ZoomableImage from './ZoomableImage'

export type GalleryImage = {
    isGalleryImage: boolean,
    src: string,
    desc: string,
    width: number,
    height: number
}

type Props = {
    index: number
    imageList: GalleryImage[]
}

const GalleryZoomableImage = ({ index, imageList }: Props) => {

    const [imageIndex, setImageIndex] = useState(index);

    const getPrev = (imageIndex: number) => {
        if (!imageList[imageIndex].isGalleryImage) return;

        const prevIndex = (imageIndex + imageList.length - 1) % imageList.length;
        if (imageList[prevIndex].isGalleryImage) return imageList[prevIndex].src;
        return;
    }
    const getNext = (imageIndex: number) => {
        if (!imageList[imageIndex].isGalleryImage) return;

        const nextIndex = (imageIndex + 1) % imageList.length;
        if (imageList[nextIndex].isGalleryImage) return imageList[nextIndex].src;
        return;
    }

    return (
        <div className='mb-6'>
            <ZoomableImage
                prevSrc={getPrev(imageIndex)}
                nextSrc={getNext(imageIndex)}
                onMovePrev={() => { setImageIndex((imageIndex + imageList.length - 1) % imageList.length) }}
                onMoveNext={() => { setImageIndex((imageIndex + 1) % imageList.length) }}
                onClose={() => setImageIndex(index)}
                previewImg={imageList[index]}
                src={imageList[imageIndex].src}
                numbering={"" + (index + 1)}
                desc={imageList[imageIndex].desc}
                width={imageList[imageIndex].width}
                height={imageList[imageIndex].height}
            />
        </div>
    )
}

export default GalleryZoomableImage