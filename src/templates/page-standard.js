import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { HTMLContent } from "../components/Content"
import Header from "../components/Header"
import { GatsbyImage } from "gatsby-plugin-image"

export default function PageStandard({ data }) {
  const post = data.datoCmsPage
  return (
    <>
      <Seo title={post.seo.title} description={post.seo.description} />
      <div className="relative">
        <Header />

        <div className="container flex flex-col gap-8 px-8 py-16 lg:p-16 xl:p-24">
          <p className="self-start with-after-line text-grenadier-200">
            {post.minorStatement}
          </p>

          <HTMLContent
            className="font-serif text-xl lg:text-3xl max-w-[800px] text-white hero__content "
            content={post.majorStatement}
          />

          <div className="absolute inset-0 w-full bg-red-500 -z-10">
            <GatsbyImage
              className="object-cover w-full h-full"
              image={post.heroImage.gatsbyImageData}
              alt={post.heroImage.alt}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    datoCmsPage(slug: { eq: $slug }) {
      pageTitle
      minorStatement
      majorStatement
      slug
      heroImage {
        gatsbyImageData
      }
      seo {
        description
        title
      }
      pageBuilder {
        ... on DatoCmsContentBlock {
          id
          content
          contentTitle
          image {
            gatsbyImageData
          }
        }
      }
    }
  }
`
