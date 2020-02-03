import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { LocationProvider } from '@reach/router'

import { MdContent } from '../components/MdContent'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { TextSectionTemplate } from '../components/homePageSections/TextSectionTemplate'

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
          {pageContent.frontmatter.sections.map(section => (
            <TextSectionTemplate key={section.title} section={section} />
          ))}
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
        sections {
          subtitle
          title
          type
          content
        }
      }
    }
  }
`
