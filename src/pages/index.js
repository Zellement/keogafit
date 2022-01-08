import React from "react"
import Seo from "../components/Seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import Ampersand from "../components/Ampersand"
import Footer from "../components/Footer"
import { Fade } from "react-reveal"

const IndexPage = ({ data }) => {
  // console.log(data.datoCmsHomePage.buttons)
  return (
    <>
      <Seo title="Home" />
      {/* Full background image */}
      <div className="fixed inset-0 w-full h-screen bg-red-500 -z-10 ">
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
      <section className="min-h-screen overflow-hidden container px-8 lg:px-16 xl:px-24 3xl:px-2 pt-[200px] text-white lg:text-grenadier-500 lg:pt-[240px] xl:pt-[300px]">
        <div className="content">
          <h1 className="sr-only">Keogafit</h1>
        </div>

        <div className="flex flex-col gap-8 ">
          <Fade delay={500}>
            <p className="self-start  with-after-line">
              {data.datoCmsHomePage.introStatement}
            </p>
          </Fade>

          <div className="relative flex flex-col text-3xl font-semibold lowercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
            <Fade delay={1000}>
              <span className="leading-tight">Mindfulness</span>
            </Fade>

            <Fade delay={2000}>
              <span className="leading-tight">body conditioning</span>
            </Fade>

            <Fade delay={1500}>
              <span className="absolute text-grenadier-100 lg:text-grenadier-200 w-20 left-[198px] -mt-4 sm:left-[237px] md:w-24 md:left-[287px] lg:left-[356px] lg:w-28 xl:w-40 xl:left-[474px]">
                <Ampersand />
              </span>
            </Fade>
          </div>

        <Fade delay={2500}>
          <div className="flex flex-row flex-wrap gap-2">
            {data.datoCmsHomePage.buttons.map((button, index) => (
              <Link
                className="btn btn--homepage"
                to={"/" + button.link.slug + "/"}
                key={index}
              >
                {button.link.pageTitle}
              </Link>
            ))}
          </div>
        </Fade>
        </div>
      </section>
      <Footer />
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
            pageTitle
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
