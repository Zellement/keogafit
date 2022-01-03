import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Fade } from "react-reveal"
import { HTMLContent } from "../Content"

export default function Biography(
  {
    id,
    image,
    title,
    biography
  }
) {
  return (
    <Fade key={id}>
      <div className="container grid grid-cols-1 my-32 lg:my-16 lg:grid-cols-2 lg:gap-16 xl:gap-32 lg:px-8">
        <div className="w-11/12 mx-auto lg:w-full">
          <GatsbyImage
            className={"object-cover w-full h-full grayscale rounded-2xl "}
            image={image.gatsbyImageData}
            alt={image.alt}
          />
        </div>
        <div className="relative w-10/12 p-12 mx-auto -mt-8 bg-white lg:w-full rounded-2xl md:-mt-32 lg:my-auto md:p-24">
          <h3 className="text-grenadier-500">{title}</h3>
          <HTMLContent
            className="content content--small"
            content={biography}
          />
        </div>
      </div>
    </Fade>
  )
}
