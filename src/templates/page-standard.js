import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { HTMLContent } from "../components/Content"
import Header from "../components/Header"
import { GatsbyImage } from "gatsby-plugin-image"
import { Fade } from "react-reveal"
import ContentBlock__Content from "../components/content-block/Content.js"

export default function PageStandard({ data }) {
  const post = data.datoCmsPage
  let imageRight = false
  return (
    <>
      <Seo title={post.seo.title} description={post.seo.description} />
      <div className="relative">
        <Header />

        <div className="container flex flex-col px-8 py-16 text-white lg:p-16 xl:p-24 3xl:px-2">
          <h1 className="self-start text-5xl lg:text-7xl xl:text-8xl">
            {post.pageTitle}
          </h1>

          <p className="self-start with-after-line text-grenadier-200">
            {post.minorStatement}
          </p>

          <HTMLContent
            className="font-serif text-xl lg:text-3xl max-w-[800px] hero__content "
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
      <div className="grid grid-cols-1 mx-auto mt-16 overflow-hidden max-w-screen-4xl">
        {post.pageBuilder.map((content, index) => {
          switch (content.model.apiKey) {
            case "content_block":
              imageRight = !imageRight
              return (
                <Fade>
                  <div
                    key={index}
                    className={
                      "grid grid-cols-1 lg:grid-cols-2 py-40 " +
                      (imageRight
                        ? null
                        : "bg-grenadier-500 content_block text-white")
                    }
                  >
                    <div
                      className={
                        "order-last overflow-hidden " +
                        (imageRight
                          ? "rounded-tl-2xl rounded-bl-2xl"
                          : "lg:order-first rounded-tr-2xl rounded-br-2xl")
                      }
                    >
                      <GatsbyImage
                        className={"object-cover w-full h-full"}
                        image={content.image.gatsbyImageData}
                        alt={content.image.alt}
                      />
                    </div>

                    <div className={"flex lg:my-20"}>
                      <ContentBlock__Content contentTitle={content.contentTitle} content={content.content} imageRight={imageRight} />
                    </div>
                  </div>
                </Fade>
              )
          }
        })}
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
        alt
      }
      seo {
        description
        title
      }
      pageBuilder {
        ... on DatoCmsContentBlock {
          id
          model {
            apiKey
          }
          content
          contentTitle
          image {
            gatsbyImageData
            alt
          }
        }
      }
    }
  }
`
