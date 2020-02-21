import React from 'react'
import styled from 'styled-components'

import heroImgBigDesktop from '../../../content/assets/bg-desktop.jpg'
import heroImgSmallDesktop from '../../../content/assets/bg-desktop-small.jpg'

interface HeroProps {
  title?: string
  subtitle?: string
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <Wrapper
      heroImgBigDesktop={heroImgBigDesktop}
      heroImgSmallDesktop={heroImgSmallDesktop}
    >
      <Content>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Content>
    </Wrapper>
  )
}

interface HeroWrapper {
  heroImgBigDesktop: string
  heroImgSmallDesktop: string
}

const Wrapper = styled.div<HeroWrapper>`
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
    background-image: url(${heroImgSmallDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    @media screen and (min-width: 1680px) {
      background-image: url(${heroImgBigDesktop});
    }
  }
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: #f8f9fa;
  text-align: center;
`

const Title = styled.h1`
  font-size: 3em;
  font-weight: 700;
`

const Subtitle = styled.p`
  font-size: 2em;
  margin-top: 1em;
  line-height: 1.2em;
`
