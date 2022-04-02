import React from 'react'
import { Link as LinkScroll } from "react-scroll";

type Props = {
    id:string,
    children:React.ReactNode
}

const StyledLinkScroll = ({id,children}:Props) => {
    return (
        <LinkScroll
            to={id}
            smooth={true}
            duration={500}
            offset={-50}
            className={""}
        >
            {children}
        </LinkScroll>
    )
}

export default StyledLinkScroll