import React from "react"
import { Fade } from "react-reveal"
import { HTMLContent } from "../Content"
import { GoDeviceCameraVideo } from "react-icons/go"
import { IoIosPeople } from "react-icons/io"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function ClassLising({
  classListingTitle,
  digitalClassesTitle,
  digitalClassesOverview,
  digitalClasses,
  faceToFaceClassesTitle,
  faceToFaceClassesOverview,
  faceToFaceClasses,
  supportingImage,
}) {
  return (
    <Fade>
      <div className="bg-gradient-to-b from-gray-100 to-gray-100 via-transparent">
        <div className="container w-full px-8 my-32">
          <h2 className="text-center">{classListingTitle}</h2>

          <div className="grid grid-cols-1 gap-32 mt-8 lg:grid-cols-2">
            <div>
              <h3 className="text-grenadier-500">
                {faceToFaceClassesTitle}{" "}
                <IoIosPeople className="inline-block text-lg" />
              </h3>
              <HTMLContent
                content={faceToFaceClassesOverview}
                className="content"
              />

              <div className="grid grid-cols-1 gap-16">
                {faceToFaceClasses.map((f2fClass) => (
                  <div className="relative flex flex-col p-8 shadow-lg items-left lg:p-12 rounded-xl">
                    <p className="font-serif text-xl text-grenadier-500">
                      {f2fClass.dayOfTheWeek} @ {f2fClass.time}
                    </p>
                    <p className="mb-8 text-sm">{f2fClass.venue}</p>
                    <iframe
                      title={`Map showing ${f2fClass.venue}`}
                      src={`https://maps.google.com/maps?q=${f2fClass.location.latitude},${f2fClass.location.longitude}&aq=t&t=&z=13&ie=UTF8&iwloc=B&output=embed`}
                      className="w-full"
                      height="250"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-grenadier-500">
                {digitalClassesTitle}{" "}
                <GoDeviceCameraVideo className="inline-block text-sm" />
              </h3>
              <HTMLContent
                content={digitalClassesOverview}
                className="content"
              />

              <div className="grid grid-cols-1 gap-16">
                {digitalClasses.map((digitalClass) => (
                  <div className="relative grid items-center grid-cols-2 p-8 shadow-lg lg:p-12 rounded-xl">
                    <p className="font-serif text-xl text-grenadier-500">
                      {digitalClass.dayOfTheWeek}
                    </p>
                    <p className="">{digitalClass.time}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/contact-us/"
                className="mt-8 btn btn--grenadier-500-outline"
              >
                Join our Zoom classes
              </Link>
              <GatsbyImage
                className="my-8 rounded-lg"
                image={supportingImage.gatsbyImageData}
                alt={supportingImage.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}
