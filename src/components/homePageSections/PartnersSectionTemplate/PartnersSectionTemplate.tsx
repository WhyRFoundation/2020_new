import React from 'react'
import styled from 'styled-components'
import { MdContent } from '../../MdContent'
import { SectionTitle } from '../../UI/SectionTitle'
import { SectionWrapper } from '../../UI/SectionWrapper'

interface PartnersSectionTemplateProps {
  section: SectionProps
}

interface SectionProps {
  title?: string
  content?: string
  images?: Images[]
}

interface Images {
  title: string
  imgUrl: string
  linkUrl: string
}

export const PartnersSectionTemplate: React.FC<PartnersSectionTemplateProps> = ({
  section,
}) => {
  const { title, content, images } = section
  return (
    <SectionWrapper id={title}>
      <SectionTitle>{title}</SectionTitle>
      <MdContent md={content} />
      <ImagesContainer>
        {images &&
          images.length > 0 &&
          images.map(image => (
            <StyledLink href={image.linkUrl} key={image.title} target="_blank">
              <StyledImg src={image.imgUrl} alt={image.title} />
            </StyledLink>
          ))}
      </ImagesContainer>
    </SectionWrapper>
  )
}

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-gap: 1em;

  justify-content: space-around;
  justify-items: center;
  align-items: center;

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(4, 120px);
    grid-gap: 0.5em;
  }
`

const StyledLink = styled.a`
  cursor: pointer;
`

const StyledImg = styled.img`
  width: 100%;
`
