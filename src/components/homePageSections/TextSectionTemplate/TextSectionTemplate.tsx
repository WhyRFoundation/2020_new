import React from 'react'
import styled from 'styled-components'
import { MdContent } from '../../MdContent'
import { SectionTitle } from '../../UI/SectionTitle'

interface TextSectionTemplateProps {
  section: SectionProps
}

interface SectionProps {
  title?: string
  content?: string
}

export const TextSectionTemplate: React.FC<TextSectionTemplateProps> = ({
  section,
}) => {
  const { title, content } = section
  return (
    <Wrapper id={title}>
      <SectionTitle>{title}</SectionTitle>
      <MdContent md={content} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 980px;
  padding: 2em 2em;
  text-align: center;
`
