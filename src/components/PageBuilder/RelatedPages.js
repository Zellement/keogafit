import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Fade } from "react-reveal"
import { Link } from "gatsby"

let bwColour = true
  
export default function RelatedPages({ id, relatedPages }) {
  return (
    <Fade key={id}>
      <div className="flex flex-col w-full my-32 max-w-screen-4xl md:flex-row">
        {relatedPages.map((page, index) => {
          bwColour = !bwColour
          return (
            <Link key={index} to={"/" + page.slug + "/"} className="relative flex w-full overflow-hidden group">
              <GatsbyImage
                className={"group-hover:scale-105 transition duration-1000 object-cover w-full h-full absolute top-0 left-0 " + (bwColour ? "grayscale" : null)}
                image={page.heroImage.gatsbyImageData}
                alt={page.heroImage.alt}
              />
              <div className="relative flex flex-grow w-full p-20 mx-auto text-white md:p-24 lg:p-32 xl:p-40 2xl:p-48">
                <div className="my-auto">
                  <h3 className="font-sans font-semibold ">
                    {page.pageTitle}
                  </h3>
                  <p>{page.offPageBlurb}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </Fade>
  )
}
