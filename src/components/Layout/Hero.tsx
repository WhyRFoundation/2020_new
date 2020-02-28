import React from 'react'
import styled from 'styled-components'

import heroImgBig from '../../../content/assets/whyr-big-bg.jpeg'
import LogoImg from '../../../content/assets/whyr_logo2020.png'

export interface HeroProps {
  title?: string
  subtitle?: string
  bgImages?: BgImages
}

interface BgImages {
  big?: string
  medium?: string
  small?: string
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, bgImages }) => {
  const bigImg = (bgImages && bgImages.big) || heroImgBig
  const mediumImg = (bgImages && bgImages.medium) || heroImgBig
  const smallImg = (bgImages && bgImages.small) || heroImgBig

  return (
    <Wrapper big={bigImg} medium={mediumImg} small={smallImg}>
      <Content>
        <Logo src={LogoImg} alt="whyrConf logo" />
        <TextBar>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </TextBar>
      </Content>
      <Overlay />
    </Wrapper>
  )
}

const Wrapper = styled.div<BgImages>`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.small});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    @media screen and (min-width: 768px) {
      background-image: url(${props => props.medium});
    }

    @media screen and (min-width: 1680px) {
      background-image: url(${props => props.big});
    }
  }
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: #f8f9fa;
  text-align: center;
  width: 100%;
`

const Logo = styled.img`
  width: 100%;
  max-width: 300px;
  transform: translate(0, 29.1%);
  z-index: 0;
  @media screen and (max-width: 768px) {
    max-width: 200px;
    transform: translate(0, 30%);
  }
`

const TextBar = styled.div`
  width: 100%;
  text-align: center;
  background-color: rgba(${props => props.theme.secondaryColorRGB}, 0.7);
  z-index: 1;
  position: relative;
  padding: 1em 0 2em 0;

  @media screen and (max-width: 768px) {
    padding: 1em 0 1em 0;
  }
`

const Title = styled.h1`
  font-size: 3em;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 2em;
    line-height: 1em;
  }
`

const Subtitle = styled.p`
  font-size: 2em;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 1.3em;
    line-height: 1.6em;
  }
`

const Overlay = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(${props => props.theme.secondaryColorRGB}, 0.2);
`
