import React from 'react'
import { graphql } from 'gatsby'
import { LocationProvider } from '@reach/router'

import { IndexPageQuery } from '../../types/graphql-types'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { PageContentCreator } from '../components/Utils/PageContentCreator'

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
            title={pageContent.frontmatter.title}
            keywords={pageContent.frontmatter.keywords}
            location={locationContext.location.pathname}
            description={pageContent.frontmatter.description}
          />
          <PageContentCreator sections={pageContent.frontmatter.sections} />
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
        title
        description
        keywords
        sections {
          title
          type
          content
          images {
            imgUrl
            linkUrl
            name
            role
            title
            isLazy
            socials {
              source
              sourceUrl
            }
          }
          sponsors {
            rank
            images {
              imgUrl
              linkUrl
              title
            }
          }
        }
      }
    }
  }
`
