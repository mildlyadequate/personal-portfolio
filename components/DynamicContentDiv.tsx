import React from 'react'

const getContentHtml = (content:string) => {
    return { __html: content };
  }

type Props = {
    content: string,
    wrapText?: boolean,
    classNames?: string
}

const DynamicContentDiv = ({content, wrapText=false, classNames=""}:Props) => {

  if(wrapText) content = "<p>" + content + "</p>"

  return (
    <div className={`dynamic-content-div ${classNames}`} dangerouslySetInnerHTML={getContentHtml(content)} />
  )

}

export default DynamicContentDiv;