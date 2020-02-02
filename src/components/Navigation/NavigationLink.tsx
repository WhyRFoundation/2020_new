import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

interface NavigationLinkProps {
  path?: string
  className?: string
  isLink?: boolean
  isExternal?: boolean
  onClick?: (any) => void
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  path,
  children,
  className,
  isLink = true,
  isExternal = false,
  onClick,
}) => {
  if (isLink && !isExternal) {
    return (
      <StyledLink to={path} className={className}>
        {children}
      </StyledLink>
    )
  }

  if (isLink && isExternal) {
    return (
      <StyledLink href={path} as="a" className={className}>
        {children}
      </StyledLink>
    )
  }

  return (
    <StyledLink as="span" onClick={onClick} className={className}>
      {children}
    </StyledLink>
  )
}

export const StyledLink = styled(Link)`
  color: ${props => props.theme.secondaryTextColor};
  transition: all 0.2s ease-in;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8em;
  cursor: pointer;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  text-shadow: -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333,
    1px 1px 0 #333;
  font-weight: 700;
  letter-spacing: 0.15em;
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.primaryColor};
    border-color: ${props => props.theme.primaryColor};
  }
`
