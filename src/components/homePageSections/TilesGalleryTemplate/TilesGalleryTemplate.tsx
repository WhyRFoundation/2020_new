import React from 'react'
import styled from 'styled-components'

import { MdContent } from '../../MdContent'
import { SectionTitle } from '../../UI/SectionTitle'
import { TileItemProps, TileItem } from './TileItem'

interface TilesGalleryProps {
  section: SectionProps
}

interface SectionProps {
  title?: string
  content?: string
  images?: TileItemProps[]
}

export const TilesGalleryTemplate: React.FC<TilesGalleryProps> = ({
  section,
}) => {
  const { title, content, images } = section

  return (
    <Wrapper>
      <SectionTitle>{title}</SectionTitle>
      <MdContent md={content} />
      <ImagesGrid>
        {images.map((image, index) => (
          <TileItem
            key={image.title}
            linkUrl={image.linkUrl}
            imgUrl={image.imgUrl}
            title={image.title}
            col={index + 1}
          />
        ))}
      </ImagesGrid>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1280px;
  padding: 2em 2em;
  text-align: center;
`

const ImagesGrid = styled.div`
  max-width: 980px;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 217px));
  grid-auto-rows: 170px;
  grid-gap: 1rem;
  grid-auto-flow: dense;
  text-align: center;
  justify-content: center;

  @media screen and (min-width: 767px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(auto, 217px));
    grid-auto-rows: 170px;
    grid-gap: 1rem;
  }
`
