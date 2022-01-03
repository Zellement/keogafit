import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Fade } from "react-reveal"
import { HTMLContent } from "../Content"

export default function Video({ id, blurb, title, video }) {
  return (
    <Fade key={id}>
      <div className="bg-gradient-to-b from-gray-100 to-gray-100 via-transparent">
        <div className="w-full max-w-screen-md px-8 mx-auto my-32">
          <h3 className="text-center">{ title }</h3>
          <iframe
            className="w-full my-8 h-[400px] rounded-2xl"
            src={"https://www.youtube.com/embed/" + video.providerUid}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="text-center">{ blurb }</p>
        </div>
      </div>
    </Fade>
  )
}
