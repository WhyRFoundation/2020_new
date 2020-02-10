import React from 'react'
import styled from 'styled-components'

import { SectionTitle } from '../../UI/SectionTitle'
import { TileItemProps } from './TileItem'
import { MobileTilesGalleryTemplate } from './MobileTilesGalleryTemplate'
import { DesktopTilesGalleryTemplate } from './DesktopTilesGalleryTemplate'
import { MediaQueryWrapper } from '../../UI/MediaQueryWrapper'

interface TilesGalleryProps {
  section: SectionProps
}

interface SectionProps {
  title?: string
  images?: TileItemProps[]
}

export const TilesGalleryTemplate: React.FC<TilesGalleryProps> = ({
  section,
}) => {
  const { title, images } = section

  return (
    <>
      <MediaQueryWrapper
        defaultStyles="display: none;"
        mediaStyles="display: block;"
      >
        <Wrapper id={title}>
          <SectionTitle>{title}</SectionTitle>
          <DesktopTilesGalleryTemplate images={images} />
        </Wrapper>
      </MediaQueryWrapper>
      <MediaQueryWrapper
        defaultStyles="display: block;"
        mediaStyles="display: none;"
      >
        <Wrapper isMobile id={title}>
          <MobileTilesGalleryTemplate images={images} title={title} />
        </Wrapper>
      </MediaQueryWrapper>
    </>
  )
}

const Wrapper = styled.section<{ isMobile?: boolean }>`
  margin: 0 auto;
  max-width: 980px;
  padding: 2em ${props => (!props.isMobile ? '2em' : '0em')};
  text-align: center;
`
