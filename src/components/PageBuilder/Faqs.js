import React from "react"
import { Fade } from "react-reveal"
import { HTMLContent } from "../Content"

export default function Faqs({ id, faqs, title }) {
  return (
    <Fade key={id}>
      <div className="px-16 bg-gradient-to-b from-gray-100 to-gray-100 via-transparent">
        <div className="w-full max-w-screen-md mx-auto my-32">
          <h2 className="text-center">{title}</h2>
          <div className="grid grid-cols-1 gap-8">
            {faqs.map((faq) => (
              <details className="">
                <summary className="mb-4 font-serif text-lg cursor-pointer lg:text-xl text-grenadier-500 hover:text-grenadier-700 focus:text-grenadier-700">{faq.question}</summary>
                <HTMLContent content={faq.answer} />
              </details>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  )
}
