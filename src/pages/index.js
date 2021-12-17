import React from "react"
import Seo from "../components/Seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Ampersand from "../components/Ampersand"

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="Home" />
      {/* Full background image */}
      <div className="fixed inset-0 w-full h-screen bg-red-500 -z-10">
        <GatsbyImage
          className="w-full h-full lg:hidden"
          image={data.datoCmsHomePage.backgroundImageMobile.gatsbyImageData}
          alt={data.datoCmsHomePage.backgroundImageMobile.alt}
        />
        <GatsbyImage
          className="hidden w-full h-full lg:block"
          image={data.datoCmsHomePage.backgroundImage.gatsbyImageData}
          alt={data.datoCmsHomePage.backgroundImage.alt}
        />
      </div>
      <section className="container mt-20 text-white">
        <div className="content">
          <h1 className="sr-only">Keogafit</h1>
        </div>

        <div className="flex flex-col gap-8 lg:gap-16">
          <p className="self-start font-serif text-lg italic with-after-line md:text-xl text-grenadier-200 lg:text-3xl">
            {data.datoCmsHomePage.introStatement}
          </p>

          <div className="relative flex flex-col gap-2 text-4xl font-bold lowercase md:text-5xl lg:text-6xl xl:text-8xl">
            <span className="leading-tight">Mindfulness</span>
            <span className="leading-tight">body conditioning</span>

            <span className="absolute w-20 left-[237px] md:w-24 md:left-[287px] lg:left-[356px] lg:w-28 xl:w-40 xl:left-[474px]">
              <Ampersand />
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    datoCmsHomePage {
      introStatement
      buttons {
        id
        link {
          ... on DatoCmsPage {
            seoMetaTags {
              id
            }
            slug
          }
        }
      }
      backgroundImage {
        alt
        gatsbyImageData(layout: FULL_WIDTH)
      }
      backgroundImageMobile {
        alt
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
