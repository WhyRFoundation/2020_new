import React, { useState, useLayoutEffect, useCallback } from 'react'
import styled, { css } from 'styled-components'

import { NavigationIcon } from './NavigationIcon'
import { NavigationLink } from './NavigationLink'

interface MobileNavigationProps {
  scrollHeight: number
  toggleHandler: () => void
  isOpen: boolean
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  scrollHeight,
  toggleHandler,
  isOpen,
}) => {
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

    toggleHandler()
  }

  return (
    <Wrapper>
      <NavigationBar fillNav={fillNav} isOpen={isOpen}>
        <NavigationLink path="/">Logo</NavigationLink>
        <NavigationIcon isOpen={isOpen} onClick={toggleHandler} />
      </NavigationBar>
      <LeftSideMenu isOpen={isOpen}>
        <li>
          <StyledMobileNavLink path="http://whyr.pl/foundation/#blog">
            BLOG
          </StyledMobileNavLink>
        </li>
        <li>
          <StyledMobileNavLink as="span" onClick={scrollToHandler}>
            About
          </StyledMobileNavLink>
        </li>
        <li>
          <StyledMobileNavLink as="span" onClick={scrollToHandler}>
            Speakers
          </StyledMobileNavLink>
        </li>
        <li>
          <StyledMobileNavLink as="span" onClick={scrollToHandler}>
            PRE-MEETINGS
          </StyledMobileNavLink>
        </li>
        <li>
          <StyledMobileNavLink as="span" onClick={scrollToHandler}>
            ORGANIZERS
          </StyledMobileNavLink>
        </li>
        <li>
          <StyledMobileNavLink as="span" onClick={scrollToHandler}>
            CODE OF CONDUCT
          </StyledMobileNavLink>
        </li>
      </LeftSideMenu>
    </Wrapper>
  )
}

interface NavigationWrapperProps {
  fillNav: boolean
  isOpen: boolean
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 99;
`

const NavigationBar = styled.div<NavigationWrapperProps>`
  color: #f8f9fa;
  background-color: transparent;
  height: 4em;
  font-size: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid transparent;
  ${({ fillNav, isOpen }) =>
    (fillNav || isOpen) &&
    css`
      background-color: rgba(33, 37, 41, 0.9);
      color: #f8f9fa;
    `}
  transition: all 0.15s ease-in;
`

const LeftSideMenu = styled.ul<{ isOpen: boolean }>`
  transition: left 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  position: absolute;
  top: 71px;
  left: -1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ isOpen }) =>
    isOpen &&
    css`
      z-index: 99;

      left: 0;
    `}

  > li {
    border-bottom: 1px solid #f8f9fa;
  }

  li:last-of-type {
    border-bottom: none;
  }
`
const StyledMobileNavLink = styled(NavigationLink)`
  padding: 0.75em 2.5em;
  display: block;
`
