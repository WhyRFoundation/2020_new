import React, { useLayoutEffect, useRef, useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import {
  createHistory,
  LocationProvider,
  createMemorySource,
} from '@reach/router'
import reset from 'styled-reset-advanced'

import { theme } from './theme'
import { Hero } from './Hero'
import { Navigation, MobileNavigation } from '../Navigation'
import { MediaQueryWrapper } from '../UI/MediaQueryWrapper'
import { Footer } from './Footer'

interface LayoutProps {}

const GlobalStyle = createGlobalStyle`
  body {
    ${reset};
    box-sizing: border-box;
    font-family: Open Sans,Helvetica,sans-serif;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.04em;
    line-height: 1.65em;
    margin: 0;
    padding: 0;
    background: ${props => (props.theme === 'purple' ? 'purple' : 'white')};
    

    h1,h2,h3,h4,h5,h6 {
      letter-spacing: 0.03em;
      line-height: 1.65em;
      margin: 0;
      padding: 0;
      font-family:'Montserrat', sans-serif;
    }

    p, h1,h2,h3,h4,h5,h6, figure, figcaption,a, button, li, nav, header, div {
      font-family: 'Roboto', Helvetica, sans-serif;
    }


    @media screen and (min-width: 767px) {
      font-size: 14px;
    }
  }
`

const source = createMemorySource('/')
const history = createHistory(source)

export const Layout: React.FC<LayoutProps> = ({ children }) => {
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
      <ThemeProvider theme={theme}>
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
          <span ref={heroRef}>
            <Hero />
          </span>
          <PageContent>{children}</PageContent>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </LocationProvider>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto auto auto 6.25em;
`

const PageContent = styled.main`
  width: 100%;
  max-width: 980px;
  margin: 32px auto;
  min-height: 150vh;
  height: 100%;
`
