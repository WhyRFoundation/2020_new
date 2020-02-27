import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

const PageTemplate: React.FC<any> = ({ data }) => {
  const { mdx } = data

  return (
    <Helmet>
      <meta
        http-equiv="refresh"
        content={`0; URL=${mdx.frontmatter.redirect}`}
      />
      <link
        rel="canonical"
        href={`${mdx.frontmatter.redirect}`}
        data-react-helmet="true"
      ></link>
      <title>{mdx.frontmatter.title}</title>
      <meta name="description" content={`${mdx.frontmatter.description}`} />
    </Helmet>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query pageBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        redirect
      }
    }
  }
`
