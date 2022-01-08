import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { HTMLContent } from "../components/Content"
import { GatsbyImage } from "gatsby-plugin-image"
import Footer from "../components/Footer"

import { Fade } from "react-reveal"

export default function ThanksPage({ data }) {
  const post = data.datoCmsContactPage
  return (
    <>
      <Seo title="Thanks" description="Thank you for getting in touch" />
      <div className="relative min-h-screen">
        <div className="container flex flex-col px-8 py-16 lg:p-16 xl:p-24 3xl:px-8 pt-[200px] text-white lg:pt-[200px] xl:pt-[200px] ">
          <Fade left delay={500}>
            <h1 className="self-start mb-12 text-5xl lg:text-7xl xl:text-8xl">
              Thanks!
            </h1>
          </Fade>

          <Fade up delay={1750}>
          <HTMLContent
            className="font-serif text-xl lg:text-3xl max-w-[800px] hero__content "
            content="<p>Thank you for getting in touch. We'll get right back to you.</p>"
          />
          </Fade>

          <div className="absolute inset-0 w-full bg-red-500 -z-10">
            <GatsbyImage
              className="object-cover w-full h-full"
              image={post.heroImage.gatsbyImageData}
              alt={post.heroImage.alt}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export const query = graphql`
  query ThanksPageQuery {
   datoCmsContactPage {
    heroImage {
      alt
      gatsbyImageData
    }
  }
}
`