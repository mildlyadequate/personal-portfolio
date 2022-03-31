import React from 'react'

type Props = {
    text: string,
    paddingBottom?: boolean
}

const SectionHeading = ({ text, paddingBottom }: Props) => {
    return (
        <h2
            className={`relative flex items-end w-full font-semibold whitespace-nowrap
                numbered-section-heading pt-2 ${paddingBottom === false ? "pb-0" : "pb-12"}
                text-white 
                before:font-mono before:text-2xl before:text-themeAccent
                after:bg-gray-500`}
        >
            {text}
        </h2>
    )
}

export default SectionHeading;