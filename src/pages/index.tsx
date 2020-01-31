import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { LocationProvider } from '@reach/router'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

import { IndexPageQuery } from '../../types/graphql-types'

interface IndexPageProps {
  data: IndexPageQuery
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const pageContent = data.mdx

  return (
    <LocationProvider>
      {locationContext => (
        <Layout title={pageContent.frontmatter.title}>
          <Seo
            title="Home"
            keywords="blog pagination searcher gatsby javascript react"
            location={locationContext.location.pathname}
            description="description"
          />
          <MDXRenderer>{pageContent.body}</MDXRenderer>
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
      }
    }
  }
`
