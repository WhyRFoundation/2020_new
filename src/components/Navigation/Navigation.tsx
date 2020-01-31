import React, { useState, useLayoutEffect, useCallback } from 'react'
import styled, { css } from 'styled-components'

import { NavigationLink, StyledLink } from './NavigationLink'

interface NavigationProps {
  scrollHeight: number
}

export const Navigation: React.FC<NavigationProps> = ({ scrollHeight }) => {
  const [fillNav, setFillNav] = useState<boolean>(false)
  const [animationFrameStatus, setAnimationFrameStatus] = useState<boolean>(
    false
  )

  const changeScrollBarHandler = useCallback(() => {
    if (animationFrameStatus) {
      setAnimationFrameStatus(false)
    }

    if (window.pageYOffset > scrollHeight - 180 && !fillNav) {
      setFillNav(true)
    } else {
      setFillNav(false)
    }
  }, [fillNav, scrollHeight, window.pageYOffset, animationFrameStatus])

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

  const scrollToHandler = () => {
    const element = document.getElementById('contactForm')

    setTimeout(() => {
      window.scrollTo({
        behavior: 'smooth',
        top: element ? element.offsetTop : 0,
      })
    }, 100)
  }

  return (
    <Wrapper fillNav={fillNav}>
      <NavigationLink path="http://whyr.pl/foundation/#blog">
        BLOG
      </NavigationLink>
      <NavigationLink path="/">Logo</NavigationLink>
      <StyledNav>
        <StyledSpanAsLink as="span" onClick={scrollToHandler}>
          About
        </StyledSpanAsLink>
        <StyledSpanAsLink as="span" onClick={scrollToHandler}>
          Speakers
        </StyledSpanAsLink>
        <StyledSpanAsLink as="span" onClick={scrollToHandler}>
          PRE-MEETINGS
        </StyledSpanAsLink>
        <StyledSpanAsLink as="span" onClick={scrollToHandler}>
          ORGANIZERS
        </StyledSpanAsLink>
        <StyledSpanAsLink as="span" onClick={scrollToHandler}>
          CODE OF CONDUCT
        </StyledSpanAsLink>
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
  ${({ fillNav }) =>
    fillNav &&
    css`
      background-color: rgba(33, 37, 41, 0.9);
      color: #f8f9fa;
    `}
  transition: all 0.3s ease-in;
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > a {
    padding-left: 1em;
  }
`

const StyledSpanAsLink = styled(StyledLink)`
  padding-left: 1em;
  display: inline-block;
  cursor: pointer;
`
