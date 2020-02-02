import React, { useState, useLayoutEffect, useCallback } from 'react'
import styled, { css } from 'styled-components'

import { scrollToHandler } from '../Utils/scrollUtils'
import { NavigationLink } from './NavigationLink'

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

  // const scrollToHandler = () => {
  //   const element = document.getElementById('contactForm')

  //   setTimeout(() => {
  //     window.scrollTo({
  //       behavior: 'smooth',
  //       top: element ? element.offsetTop : 0,
  //     })
  //   }, 100)
  // }

  return (
    <Wrapper fillNav={fillNav}>
      <StyledNav>
        <NavigationLink path="/">Logo</NavigationLink>
        <LinkWrapper>
          <NavigationLink isExternal path="http://whyr.pl/foundation/#blog">
            BLOG
          </NavigationLink>
        </LinkWrapper>
      </StyledNav>
      <StyledNav>
        <LinkWrapper>
          <NavigationLink
            isLink={false}
            onClick={() => scrollToHandler('contactForm')}
          >
            About
          </NavigationLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavigationLink
            isLink={false}
            onClick={() => scrollToHandler('contactForm')}
          >
            Speakers
          </NavigationLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavigationLink
            isLink={false}
            onClick={() => scrollToHandler('contactForm')}
          >
            PRE-MEETINGS
          </NavigationLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavigationLink
            isLink={false}
            onClick={() => scrollToHandler('contactForm')}
          >
            ORGANIZERS
          </NavigationLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavigationLink
            isLink={false}
            onClick={() => scrollToHandler('contactForm')}
          >
            CODE OF CONDUCT
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
