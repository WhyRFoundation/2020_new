import React from 'react'
import { graphql } from 'gatsby'
import { LocationProvider } from '@reach/router'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { TextSectionTemplate } from '../components/homePageSections/TextSectionTemplate'
import { PartnersSectionTemplate } from '../components/homePageSections/PartnersSectionTemplate'

import { IndexPageQuery } from '../../types/graphql-types'

interface IndexPageProps {
  data: IndexPageQuery
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const pageContent = data.mdx

  return (
    <LocationProvider>
      {locationContext => (
        <Layout>
          <Seo
            title="Home"
            keywords="blog pagination searcher gatsby javascript react"
            location={locationContext.location.pathname}
            description="description"
          />
          {pageContent.frontmatter.sections.map(section => {
            switch (section.type) {
              case 'text':
                return (
                  <TextSectionTemplate key={section.title} section={section} />
                )
              case 'partners':
                return (
                  <PartnersSectionTemplate
                    key={section.title}
                    section={section}
                  />
                )
              default:
                return (
                  <TextSectionTemplate key={section.title} section={section} />
                )
            }
          })}
        </Layout>
      )}
    </LocationProvider>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    mdx(fields: { slug: { eq: "/homePage/" } }) {
      body
      frontmatter {
        sections {
          title
          type
          content
          images {
            alt
            imgUrl
            linkUrl
            name
            role
            socials {
              source
              sourceUrl
            }
          }
        }
      }
    }
  }
`
