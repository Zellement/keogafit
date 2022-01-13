import React from "react"
import { Fade } from "react-reveal"

export default function Video({ blurb, title, video }) {
  return (
    <Fade>
      <div className="bg-gradient-to-b from-gray-100 to-gray-100 via-transparent">
        <div className="w-full max-w-screen-md px-8 mx-auto my-32">
          <h2 className="text-center">{ title }</h2>
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
