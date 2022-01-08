import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { HTMLContent } from "../components/Content"
import { GatsbyImage } from "gatsby-plugin-image"
import Footer from "../components/Footer"

import Biography from "../components/PageBuilder/Biography"
import ContentBlock from "../components/PageBuilder/ContentBlock"
import RelatedPages from "../components/PageBuilder/RelatedPages"
import Video from "../components/PageBuilder/Video"
import Faqs from "../components/PageBuilder/Faqs"
import { Fade } from "react-reveal"
import Testimonials from "../components/PageBuilder/Testimonials"

export default function PageStandard({ data }) {
  const post = data.datoCmsPage
  let imageRight = false
  return (
    <>
      <Seo title={post.seo.title} description={post.seo.description} />
      <div className="relative">
        <div className="container flex flex-col px-8 py-16 lg:p-16 xl:p-24 3xl:px-8 pt-[200px] text-white lg:pt-[200px] xl:pt-[200px]">
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
      </div>
      <div className="grid grid-cols-1 mx-auto overflow-hidden bg-white">
        {post.pageBuilder.map((content) => {
          switch (content.model.apiKey) {
            case "content_block":
              imageRight = !imageRight
              return (
                <ContentBlock
                  key={content.id}
                  image={content.image}
                  imageRight={imageRight}
                  contentTitle={content.contentTitle}
                  content={content.content}
                  buttons={content.buttons}
                />
              )

            case "biography":
              return (
                <Biography
                  id={content.id}
                  key={content.id}
                  image={content.image}
                  title={content.title}
                  biography={content.biography}
                />
              )

            case "related_page":
              return (
                <RelatedPages
                  id={content.id}
                  key={content.id}
                  slug={content.slug}
                  relatedPages={content.relatedPages}
                />
              )

            case "video":
              return (
                <Video
                  id={content.id}
                  blurb={content.videoBlurb}
                  title={content.videoTitle}
                  video={content.video}
                />
              )

            case "faq":
              return (
                <Faqs
                  id={content.id}
                  faqs={content.faqs}
                  title={content.faqSectionTitle}
                />
              )

            case "testimonial":
              return (
                <Testimonials
                  id={content.id}
                  testimonialTitle={content.testimonialSectionTitle}
                  testimonials={content.testimonials}
                />
              )
            default: return null
          }
        })}
      </div>
      <Footer />
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
          buttons {
            id
            link {
              slug
              pageTitle
            }
          }
        }
        ... on DatoCmsBiography {
          id
          model {
            apiKey
          }
          biography
          title
          image {
            alt
            gatsbyImageData
          }
        }
        ... on DatoCmsRelatedPage {
          id
          model {
            apiKey
          }
          relatedPages {
            pageTitle
            slug
            minorStatement
            majorStatement
            offPageBlurb
            heroImage {
              alt
              gatsbyImageData(height: 400, width: 700)
            }
          }
        }
        ... on DatoCmsFaq {
          id
          model {
            apiKey
          }
          faqs {
            question
            answer
          }
          faqSectionTitle
        }
        ... on DatoCmsVideo {
          id
          model {
            apiKey
          }
          videoBlurb
          videoTitle
          video {
            thumbnailUrl
            title
            url
            providerUid
          }
        }
        ... on DatoCmsTestimonial {
          id
          model {
            apiKey
          }
          testimonialSectionTitle
          testimonials {
            content
            name
          }
        }
      }
    }
  }
`
