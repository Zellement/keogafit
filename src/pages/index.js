import React from "react"
import Seo from "../components/Seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import Ampersand from "../components/Ampersand"
import Footer from "../components/Footer"
import { Fade } from "react-reveal"

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="Home" />
      {/* Full background image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 bg-gradient-to-b from-grenadier-500 to-grenadier-700 homepage-overlay"></div>
      <div className="fixed inset-0 w-full h-screen -z-20 ">
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
      <section className="min-h-screen overflow-hidden container px-8 py-8 mb-4  lg:py-16 lg:px-16 xl:px-24 3xl:px-8 pt-[200px] text-white lg:text-grenadier-500 lg:pt-[240px]">
        <div className="content">
          <h1 className="sr-only">Keogafit</h1>
        </div>

        <div className="flex flex-col">
          <Fade delay={500}>
            <p className="self-start mb-4 with-after-line">
              {data.datoCmsHomePage.introStatement}
            </p>
          </Fade>

          <div className="relative flex flex-col text-3xl font-semibold lowercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-10xl">
            <Fade delay={1000}>
              <span className="leading-tight">Mindfulness</span>
            </Fade>

            <Fade delay={2000}>
              <span className="leading-tight">body conditioning</span>
            </Fade>

            <Fade delay={1500}>
              <span className="absolute text-grenadier-100 lg:text-grenadier-200 w-20 left-[198px] -mt-4 sm:left-[237px] md:w-24 md:left-[287px] lg:left-[356px] lg:w-28 xl:w-40 xl:left-[474px] 2xl:left-[580px] 2xl:w-48">
                <Ampersand />
              </span>
            </Fade>
          </div>

          <Fade delay={2500}>
            <div className="flex flex-row flex-wrap gap-2 mt-12">
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
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      backgroundImageMobile {
        alt
        gatsbyImageData(layout: FULL_WIDTH, width: 1024, placeholder: BLURRED)
      }
    }
  }
`
