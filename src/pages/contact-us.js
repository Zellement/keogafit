import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { HTMLContent } from "../components/Content"
import { GatsbyImage } from "gatsby-plugin-image"
import Footer from "../components/Footer"

import ContactForm from "../components/ContactForm"
import { Fade } from "react-reveal"

export default function ContactPage({ data }) {
  const post = data.datoCmsContactPage
  return (
    <>
      <Seo title={post.seo.title} description={post.seo.description} />
      <div className="relative min-h-screen">
        <div className="container flex flex-col px-8 py-16 lg:p-16 xl:p-24 3xl:px-8 pt-[200px] text-white lg:pt-[200px] xl:pt-[200px] ">
          <Fade left delay={500}>
            <h1 className="self-start mb-12 text-5xl lg:text-7xl xl:text-8xl">
              {post.pageTitle}
            </h1>
          </Fade>

          <Fade up delay={1250}>
          <p className="self-start mb-4 with-after-line text-grenadier-200">
            {post.minorStatement}
          </p>
          </Fade>

          <Fade up delay={1750}>
          <HTMLContent
            className="font-serif text-xl lg:text-3xl max-w-[800px] hero__content "
            content={post.majorStatement}
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
        <Fade up delay={2000}>
          <div className="max-w-screen-lg px-8 py-16 mx-auto lg:p-16 xl:p-24 3xl:px-8 ">
            <ContactForm />
          </div>
        </Fade>
      </div>
      <Footer />
    </>
  )
}

export const query = graphql`
  query ContactPageQuery {
   datoCmsContactPage {
    id
    pageTitle
    minorStatement
    majorStatement
    heroImage {
      alt
      gatsbyImageData
    }
    seo {
      title
      description
    }
  }
}
`