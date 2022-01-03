import React from "react"
import { Fade } from "react-reveal"
import { GatsbyImage } from "gatsby-plugin-image"
import ContentBlockContent from "./ContentBlockContent"

export default function ContentBlock({
  image,
  imageRight,
  contentTitle,
  content,
  buttons,
}) {
  return (
    <Fade>
      <div
        className={
          " pt-8 lg:py-40 " +
          (imageRight ? null : "bg-grenadier-500 content_block text-white")
        }
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2">
          <div
            className={
              "order-last overflow-hidden " +
              (imageRight
                ? "lg:rounded-tl-2xl lg:rounded-bl-2xl 3xl:rounded-2xl"
                : "lg:order-first lg:rounded-tr-2xl lg:rounded-br-2xl 3xl:rounded-2xl")
            }
          >
            <GatsbyImage
              className={"object-cover w-full h-full  "}
              image={image.gatsbyImageData}
              alt={image.alt}
            />
          </div>

          <div className={"flex lg:my-20"}>
            <ContentBlockContent
              contentTitle={contentTitle}
              content={content}
              imageRight={imageRight}
              buttons={buttons}
            />
          </div>
        </div>
      </div>
    </Fade>
  )
}
