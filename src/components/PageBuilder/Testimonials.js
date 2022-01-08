import React from "react";
import { Fade } from "react-reveal";
import { HTMLContent } from "../Content";
import { ImQuotesLeft } from "react-icons/im"

export default function Testimonials( {id, testimonialTitle, testimonials }) {
  return (
    <Fade key={id}>
      <div className="bg-gradient-to-b from-gray-100 to-gray-100 via-transparent">
        <div className="container w-full px-8 my-32">
          <h3 className="text-center">{testimonialTitle}</h3>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div className="relative p-16 shadow-lg rounded-xl">
              <ImQuotesLeft className="absolute top-0 left-0 -mt-4 -ml-4 text-5xl opacity-5" />
              <HTMLContent className="content content--small" content={ testimonial.content } />
              <p className="font-serif text-xl text-grenadier-500">{ testimonial.name }</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  )
}