import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"

export default function RelatedPages({
  slug,
  image,
  alt,
  bwColour,
  pageTitle,
  offPageBlurb,
}) {
  return (
    <Link
      to={"/" + slug + "/"}
      className={
        "transition-all duration-1000 relative grid grid-cols-1 lg:grid-cols-2 w-full overflow-hidden group " +
        (bwColour
          ? "bg-gray-500 hover:bg-gray-700 focus:bg-gray-700"
          : "bg-grenadier-500 hover:bg-grenadier-700 focus:bg-grenadier-700")
      }
    >
      <div className="">
        <GatsbyImage
          className={
            "group-hover:scale-105 transition duration-1000 object-cover w-full h-full " +
            (bwColour ? "grayscale" : null)
          }
          image={image}
          alt={alt}
        />
      </div>
      <div className="relative flex flex-grow w-full p-20 mx-auto text-white md:p-24 xl:p-32">
        <div className="my-auto">
          <h3 className="font-sans font-semibold ">{pageTitle}</h3>
          <p>{offPageBlurb}</p>
        </div>
      </div>
    </Link>
  )
}
