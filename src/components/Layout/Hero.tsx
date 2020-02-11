import React from 'react'
import styled from 'styled-components'

import heroImg from '../../../content/assets/bg.jpg'

interface HeroProps {
  title?: string
  subtitle?: string
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <Wrapper heroImg={heroImg}>
      <Content>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ heroImg: string }>`
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
    background: url(${heroImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
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
