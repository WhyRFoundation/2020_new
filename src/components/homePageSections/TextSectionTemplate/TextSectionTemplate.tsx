import React from 'react'
import styled from 'styled-components'
import { MdContent } from '../../MdContent'
import { SectionTitle } from '../../UI/SectionTitle'
import { SectionSubtitle } from '../../UI/SectionSubtitle'

interface TextSectionTemplateProps {
  section: SectionProps
}

interface SectionProps {
  title?: string
  subtitle?: string
  content?: string
}

export const TextSectionTemplate: React.FC<TextSectionTemplateProps> = ({
  section,
}) => {
  const { title, subtitle, content } = section
  return (
    <Wrapper>
      <SectionTitle>{title}</SectionTitle>
      <SectionSubtitle>{subtitle}</SectionSubtitle>
      <MdContent md={content} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  padding: 3em 2em;
  text-align: center;
`
