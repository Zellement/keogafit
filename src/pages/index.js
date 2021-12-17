import React from "react"
import Seo from "../components/Seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="Home" />
      {/* Full background image */}
      <div className="fixed inset-0 w-full h-screen bg-red-500 -z-10">
        <GatsbyImage className="w-full h-full lg:hidden" image={data.datoCmsHomePage.backgroundImageMobile.gatsbyImageData} alt={data.datoCmsHomePage.backgroundImageMobile.alt} />
        <GatsbyImage className="hidden w-full h-full lg:block" image={data.datoCmsHomePage.backgroundImage.gatsbyImageData} alt={data.datoCmsHomePage.backgroundImage.alt} />
      </div>
      <section className="container">
        <div className="content">
          <h1 className="sr-only">Keogafit</h1>
        </div>

        <div className="content">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <h2>Lorem ipsum dolor sit amet</h2>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </section>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    datoCmsHomePage {
      id
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
