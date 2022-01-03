import { Link } from "gatsby"
import React from "react"
import { Fade } from "react-reveal"
import { HTMLContent } from "../Content"

export default function ContentBlockContent({
  contentTitle,
  content,
  imageRight,
  buttons,
}) {
  if (imageRight) {
    return (
      <Fade left>
        <div
          className={
            "my-auto relative p-16 md:p-24 lg:pl-16 xl:pl-24 xl:p-32 3xl:pl-8 bg-white lg:-mr-16 2xl:-mr-32 rounded-tr-2xl rounded-br-2xl"
          }
        >
          <h2 dangerouslySetInnerHTML={{ __html: contentTitle }}></h2>
          <HTMLContent className="mb-12 content " content={content} />
          {buttons?.map((button, index) => {
            return (
              <Link
                className="mr-4 btn btn--grenadier-500-outline"
                key={index}
                to={"/" + button.link.slug + "/"}
              >
                {button.link.pageTitle}
              </Link>
            )
          })}
        </div>
      </Fade>
    )
  } else {
    return (
      <Fade right>
        <div
          className={
            "my-auto relative p-16 md:p-24 lg:pr-16 xl:pr-24 xl:p-32 3xl:pr-8 bg-grenadier-500 lg:-ml-16 2xl:-ml-32 rounded-tl-2xl rounded-bl-2xl"
          }
        >
          <h2 dangerouslySetInnerHTML={{ __html: contentTitle }}></h2>
          <HTMLContent className="mb-12 content" content={content} />
          {buttons?.map((button, index) => {
            return (
              <Link
                className="mr-4 btn btn--white-outline"
                key={index}
                to={"/" + button.link.slug + "/"}
              >
                {button.link.pageTitle}
              </Link>
            )
          })}
        </div>
      </Fade>
    )
  }
}
