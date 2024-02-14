import React from "react"
import { Fade } from "react-reveal"
import { HTMLContent } from "../Content"

export default function ClassLising({
  classListingTitle,
  faceToFaceClassesOverview,
  faceToFaceClasses,
}) {
  return (
    <Fade>
      <div className="bg-gradient-to-b from-gray-100 to-gray-100 via-transparent">
        <div className="container w-full px-8 my-32">
          <h2 className="text-center">{classListingTitle}</h2>

          <div className="grid grid-cols-1 gap-32 mt-8">
            <div className="flex flex-col w-full gap-8">
              <HTMLContent
                content={faceToFaceClassesOverview}
                className="content"
              />

              <div className="grid grid-cols-1 gap-16 xl:grid-cols-4 md:grid-cols-2">
                {faceToFaceClasses.map((f2fClass) => (
                  <div className="relative flex flex-col p-8 shadow-lg items-left lg:p-12 rounded-xl">
                    {f2fClass.location ? (
                      <p className="mb-8 font-serif text-2xl text-grenadier-500">
                        {f2fClass.location}
                      </p>
                    ) : null}
                    <p className="font-serif text-xl text-grenadier-500">
                      {f2fClass.dayOfTheWeek} @ {f2fClass.time}
                    </p>
                    <p className="mb-8 text-sm">{f2fClass.venue}</p>
                    {f2fClass.additionalInfo ? (
                      <HTMLContent
                        content={f2fClass.additionalInfo}
                        className="content content--small"
                      />
                    ) : null}
                    <HTMLContent
                      content={f2fClass.book}
                      className="content content--small"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}
