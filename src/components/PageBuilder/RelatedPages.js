import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Fade } from "react-reveal"
import { Link } from "gatsby"

let bwColour = true
  
export default function RelatedPages({ id, relatedPages }) {
  return (
    <Fade key={id}>
      <div className="flex flex-col w-full mx-auto my-32 max-w-screen-4xl md:flex-row">
        {relatedPages.map((page, index) => {
          bwColour = !bwColour
          return (
            <Link key={index} to={"/" + page.slug + "/"} className={"transition-all duration-1000 relative grid grid-cols-1 lg:grid-cols-2 w-full overflow-hidden group " + (bwColour ? "bg-gray-500 hover:bg-gray-700 focus:bg-gray-700" : "bg-grenadier-500 hover:bg-grenadier-700 focus:bg-grenadier-700")}>
              <div className="">
                <GatsbyImage
                  className={"group-hover:scale-105 transition duration-1000 object-cover w-full h-full " + (bwColour ? "grayscale" : null)}
                  image={page.heroImage.gatsbyImageData}
                  alt={page.heroImage.alt}
                />
              </div>
              <div className="relative flex flex-grow w-full p-20 mx-auto text-white md:p-24 xl:p-32">
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
