import React, { useState, useLayoutEffect, useCallback } from 'react'
import styled, { css } from 'styled-components'

import { scrollToHandler } from '../Utils/scrollUtils'
import { NavigationLink } from './NavigationLink'
import whyrLogo from '../../../content/assets/whyrnieb-white.png'

export const Navigation: React.FC<{}> = () => {
  const [fillNav, setFillNav] = useState<boolean>(false)
  const [animationFrameStatus, setAnimationFrameStatus] = useState<boolean>(
    false
  )

  const changeScrollBarHandler = useCallback(() => {
    if (animationFrameStatus) {
      setAnimationFrameStatus(false)
    }

    if (window && window.pageYOffset > 400 && !fillNav) {
      setFillNav(true)
    } else {
      setFillNav(false)
    }
  }, [fillNav, animationFrameStatus])

  const handleScroll = useCallback(() => {
    if (!animationFrameStatus) {
      window.requestAnimationFrame(changeScrollBarHandler)
      setAnimationFrameStatus(true)
    }
  }, [animationFrameStatus])

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Wrapper fillNav={fillNav}>
      <StyledNav>
        <NavigationLink path="/http://whyr.pl/foundation/#blog">
          <LogoLink src={whyrLogo} alt="whyR? logo" />
        </NavigationLink>
      </StyledNav>
      <StyledNav>
        <LinkWrapper>
          <NavigationLink
            isLink={false}
            onClick={() => scrollToHandler('About')}
          >
            About
          </NavigationLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavigationLink
            isLink={false}
            onClick={() => scrollToHandler('2020 KEYNOTES')}
          >
            Speakers
          </NavigationLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavigationLink
            isLink={false}
            onClick={() => scrollToHandler('WHY R? 2020 PRE-MEETINGS')}
          >
            PRE-MEETINGS
          </NavigationLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavigationLink
            isLink={false}
            onClick={() => scrollToHandler('ORGANIZERS')}
          >
            ORGANIZERS
          </NavigationLink>
        </LinkWrapper>
      </StyledNav>
    </Wrapper>
  )
}

interface NavigationWrapperProps {
  fillNav: boolean
}

const Wrapper = styled.div<NavigationWrapperProps>`
  height: 4em;
  font-size: 1em;
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  border-bottom: 1px solid transparent;
  padding: 0 2em;
  ${({ fillNav }) =>
    fillNav &&
    css`
      background-color: ${props =>
        `rgba(${props.theme.secondaryColorRGB}, 0.9)`};
      color: #f8f9fa;
    `}
  transition: all 0.2s ease-in;
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const LinkWrapper = styled.li`
  padding-left: 1.5em;
  display: inline-block;
`

const LogoLink = styled.img`
  max-width: 3.3em;
  width: 100%;
  height: 100%;
  padding: 0.5em;
`
