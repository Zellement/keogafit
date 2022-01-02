import { Link } from "gatsby"
import React from "react"
import { Fade } from "react-reveal"
import { HTMLContent } from "../Content"

export default function ContentBlock__Content({
  contentTitle,
  content,
  imageRight,
  buttons
}) {
  if (imageRight) {
    return (
      <Fade left>
        <div
          className={
            "my-auto shadow-lg relative p-16 md:p-24 xl:p-32 bg-white lg:-mr-16 2xl:-mr-32 rounded-tr-2xl rounded-br-2xl"
          }
        >
          <h2>
            <HTMLContent content={contentTitle} />
          </h2>
          <HTMLContent className="content" content={content} />
          {buttons.map((button, index) => {
            <Link key={index} to={button.slug}>{button.title}</Link>
          })}
        </div>
      </Fade>
    )
  } else {
    return (
      <Fade right>
        <div
          className={
            "my-auto shadow-lg relative p-16  md:p-24 xl:p-32 bg-grenadier-500 lg:-ml-16 2xl:-ml-32 rounded-tl-2xl rounded-bl-2xl"
          }
        >
          <h2>
            <HTMLContent content={contentTitle} />
          </h2>
          <HTMLContent className="content" content={content} />
          {buttons.map((button, index) => {
            <Link key={index} to={button.slug}>{button.title}</Link>
          })}
        </div>
      </Fade>
    )
  }
}
