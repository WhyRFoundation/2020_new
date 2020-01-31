import React, { useLayoutEffect, useRef, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import {
  createHistory,
  LocationProvider,
  createMemorySource,
} from '@reach/router'
import reset from 'styled-reset-advanced'

import { Navigation, MobileNavigation } from '../Navigation '
import { MediaQueryWrapper } from '../UI/MediaQueryWrapper'

import startupImg from '../../../content/assets/startup.png'

interface LayoutProps {
  title: string
}

interface HeroProps {
  image?: string
}

const GlobalStyle = createGlobalStyle`
  body {
    ${reset};
    box-sizing: border-box;
    font-family: Open Sans,Helvetica,sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.04em;
    line-height: 1.65em;
    margin: 0;
    padding: 0;
    background: ${props => (props.theme === 'purple' ? 'purple' : 'white')};
    }

    h1,h2,h3,h4,h5,h6 {
      letter-spacing: 0.03em;
      line-height: 1.65em;
      margin: 0;
      padding: 0;
    }

    p, h1,h2,h3,h4,h5,h6, figure, figcaption,a, button, li, nav, header, div {
      font-family: Open Sans, Helvetica, sans-serif;
    }


    @media screen and (min-width: 767px) {
      font-size: 16px;
    }
`

const source = createMemorySource('/')
const history = createHistory(source)

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const [heroHeight, setHeroHeight] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const heroRef = useRef<HTMLDivElement>(null)

  const NavToggleHandler = () => {
    setIsOpen(!isOpen)
  }

  useLayoutEffect(() => {
    if (heroRef && heroRef.current) {
      setHeroHeight(heroRef.current.clientHeight)
    }
    return () => {
      setHeroHeight(0)
    }
  }, [heroRef, heroRef.current, heroHeight])

  return (
    <LocationProvider history={history}>
      <GlobalStyle theme="" />

      <Wrapper>
        {heroHeight && (
          <>
            <MediaQueryWrapper
              defaultStyles="display: none;"
              mediaStyles="display: block;"
            >
              <Navigation scrollHeight={heroHeight} />
            </MediaQueryWrapper>
            <MediaQueryWrapper
              defaultStyles="display: block;"
              mediaStyles="display: none;"
            >
              <MobileNavigation
                scrollHeight={heroHeight}
                toggleHandler={NavToggleHandler}
                isOpen={isOpen}
              />
            </MediaQueryWrapper>
          </>
        )}
        <Hero image={startupImg} ref={heroRef}>
          <span>{title}</span>
        </Hero>
        <PageContent>{children}</PageContent>
        <Footer>
          © {new Date().getFullYear()}, Built with{' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    </LocationProvider>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 40px auto 100px;
`

const Hero = styled.div<HeroProps>`
  background: url(${({ image }) => (image ? image : '')}) center center
    no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  max-width: 980px;
  height: 60vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageContent = styled.main`
  width: 100%;
  max-width: 980px;
  margin: 32px auto;
  min-height: 50vh;
  height: 100%;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`
