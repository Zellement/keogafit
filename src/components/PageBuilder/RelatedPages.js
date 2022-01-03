import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Fade } from "react-reveal"
import { HTMLContent } from "../Content"
import { Link } from "gatsby"

export default function RelatedPages({ id, relatedPages }) {
  return (
    <Fade key={id}>
      <div className="flex w-full flex-col my-32 max-w-screen-4xl md:flex-row lg:my-16">
        {relatedPages.map((page) => {
          return (
            <Link to={ "/" + page.slug + "/" } className="relative w-full">
              <GatsbyImage
                className={"object-cover w-full h-full absolute top-0 left-0 "}
                image={page.heroImage.gatsbyImageData}
                alt={page.heroImage.alt}
              />
              <div className="relative p-12 mx-auto -mt-8 w-full md:-mt-32 lg:my-auto md:p-24">
                <h3 className="text-grenadier-500">{page.pageTitle}</h3>
                <p>{page.blurb}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </Fade>
  )
}
